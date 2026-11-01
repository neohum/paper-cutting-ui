/* 창체 자율·자치 입학 초기 적응 — 초1-2 모듈 내용(edu-module.v1). 형식·작성 규칙: MODULES_BUILD.md, 계획: framework/events-auto.json 의 start 초1-2.
 * 근거: 2022 개정 교육과정 창의적 체험활동(교육부 고시 제2022-33호 [별책 40]) <표 2> 적응 및 개척 활동 "입학 초기 적응, 학교 이해, 정서 지원, 관계 형성 등",
 *   p.11-12 초1 입학 초기 적응 활동 3월 중 34시간, p.15 "일상생활에 필요한 질서와 예절을 익혀 기본 생활 습관을 형성"·적용 시기·시수·내용은 학교가 정함
 *   (sources/changche/research-changche.md).
 * 초1 3월 기준: 막 입학해 글을 거의 못 읽는다고 보고 문항 글은 소리로 읽어 주는 짧은 말, 카드는 6자 안팎, 그림·소리·몸 놀이·따라 하기·좋아요/안돼요 고르기로 쓴다.
 * 주제 14개 × 도입 2~3 · 활동 4~5 · 정리 2~3 = 129모듈, 1학년 추천 조합 34차시.
 *
 * 이 영역에서 늘 지키는 틀(모든 모듈):
 *   - 학생 자신의 가족·이름·집 주소·형편을 묻지 않는다. 이름 글자 만들기·이름표·소개 카드는 가상 인물(가명 한두 글자: 나리·바다·하늘·솔·별)과
 *     인형 친구로 하고, 실제 이름은 교사가 교실에서 말로만 부르게 한다. 좋아하는 것은 과일·동물·놀이 그림 고르기로만 묻는다.
 *   - 특정 학교 이름은 쓰지 않는다. 학교·교실 지도는 가상 학교 '새싹초'와 가상 교실 '나비반'이고, 실제 배치는 교사가 우리 학교에 맞춰 말해 준다.
 *   - 걱정·떨림·아픔도 말해도 되는 마음으로 다룬다. 첫날 마음이나 몸 신호를 캐묻지 않고, 그림 속 가상 친구의 일로 먼저 이야기한다.
 *   - 같은 학년군 생활안전(modules/saf-life/e12.js)과 겹치지 않게: 그쪽의 교실·복도·계단 위험 행동, '손잡이·한 칸씩·오른쪽' 구호, 가위 건네는 차례 장면,
 *     비누 거품 세면대 그림, 간식 전 할 일 담기는 쓰지 않았다. 여기는 '처음 오는 학교의 자리·차례·말하기'가 중심이다.
 *     자율·자치(auto) 초1-2(아침 준비·화분·가방 챙기기·1인 1역·학급 회의·꽃밭 관찰·2학기 적응)와도 장면을 나눴다.
 *
 * 수치: 손 씻기 30초는 주제 근거에 '근거 약함(기존 g1-cc-start 차시 수치)'으로 적힌 값이다. 그 밖의 초(말하기·숨 쉬기·정리 시간)와 시각(9시 등)은
 *   '우리 반 약속' 연습 값이고 권장 시간이 아니다(화면에 그렇게 밝힌다).
 *
 * 사람 확인: (근거 파일에는 고시 항목 제목·시수만 있어 일반 초1 학교생활 적응 내용으로 쓴 문장 — 확인할 곳을 함께 적는다)
 *   - start.e12.wash 전체: 손 씻기 30초 이상, 비누 거품을 내어 손바닥·손등·손가락 사이·손톱 밑 문지르기, 씻어야 할 때(화장실 뒤·밥 먹기 전·
 *     바깥 놀이 뒤·코 푼 뒤) — 질병관리청 올바른 손 씻기 안내.
 *   - start.e12.toilet 전체: 노크하고 기다리기, 물 내리기, 휴지가 없으면 선생님께 말하기, 수업 중에도 손 들고 말하면 다녀올 수 있음 — 학교마다 약속이 다르므로 담임 확인.
 *   - start.e12.line 전체: 팔 하나 간격, 복도에서 걷기, 계단·모퉁이에서 조심 — 교육부 학교안전정보센터(학교안전교육 자료) 일반 수칙.
 *   - start.e12.tidy.activity.scissors: 가위는 날을 닫아 손잡이 쪽으로 건넨다 — 교육부 학교안전정보센터 학용품 안전 자료.
 *   - start.e12.lunch 전체: 급식 차례(손 씻기 → 줄 서기 → 식판 받기 → 먹기 → 정리), 먹을 만큼 받고 덜어 달라고 말하기 — 학교 급식 운영 방식(담임·영양교사 확인).
 *   - start.e12.signal 전체: 몸이 아프면 참지 않고 선생님께 말하기, 보건실은 선생님께 말하고 가기 — 학교 보건실 이용 약속(보건교사 확인).
 *   - start.e12.bell 전체: 종소리·시각(9시 시작 등)은 가상 학교의 값 — 우리 학교 일과표로 교사가 바꾼다.
 *   - start.e12.tour·room 전체: 학교·교실 배치(화장실·보건실·급식실·도서실·운동장 자리)는 가상 학교 — 우리 학교 배치로 교사 확인.
 *   - start.e12.turn.activity.breath: 숨 크게 쉬며 기다리기(5·10·15초) — 우리 반 약속 값이며 권장 시간이 아님.
 *   - start.e12.wash.activity.timer30: 비비는 동작 차례(손바닥 → 손등 → 손가락 사이 → 손톱 밑) — 질병관리청 올바른 손 씻기 6단계와 대조.
 *   - start.e12.tidy.activity.place: 사물함(오래 쓸 것)·서랍(오늘 공부할 것)·가방(집에 가져갈 것) 나누기는 가상 교실 나비반 약속 — 우리 반 정리 약속으로 담임 확인.
 *   - start.e12.tidy.activity.real·bell.activity.drill·heart.activity.talk·friend.activity.pair: 정리 3·5분, 말하기 15·20초, 놀이 20초 등은 우리 반 약속 연습 값.
 *   - start.e12.tour.activity.match·lunch.activity.help: 사서·영양 선생님·조리사님 — 학교에 계신 분으로 바꿔 말한다(학교마다 다름).
 */
(function () {
  const MOD = (topic) => (o) => Object.assign({ schema: 'edu-module.v1', domain: 'start', band: '초1-2', topic, grades: [1] }, o);
  const MOOD = { type: 'mood', prompt: '오늘 공부를 마친 내 마음은 어떤가요?' };
  const cut = (p) => p.replace(/[.?]$/, '');
  const C = (id, text, more) => Object.assign({ id, text }, more);
  const idOf = (c) => (typeof c === 'string' ? c : c.id);
  const ids = (a) => a.map(idOf);
  const OKNO = ['좋아요', '안돼요'];
  const CH = (id, text, result, mood, why) => Object.assign({ id, text, result, mood }, why ? { why } : {});

  // 두 바구니 나누기(sortboard 글 카드): 기본 6장, 쉬움 4장, 도전 헷갈리는 카드 2장을 more 로 더함(hardTo 가 참이면 둘째 바구니로)
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
  // 장면 차례 놓기(story order): 기본 3장, 쉬움 첫 장면이 놓여 있음(남은 두 장), 도전 틀린 장면 1장이 섞여 빼고 놓음(wrong 이 없으면 기본과 같음)
  const ORDER3 = (prompt, cards, wrong, d, more) => {
    const i = ids(cards);
    const lv = { easy: { state: { at: { [i[0]]: 0, [i[1]]: null, [i[2]]: null } } } };
    if (wrong) lv.challenge = { toolOptions: { cards: [cards[2], wrong, cards[0], cards[1]] } };
    return { prompt, toolOptions: { slots: ['먼저', '다음', '끝'], cards: [cards[2], cards[0], cards[1]] }, target: { order: i }, difficulty: d, levels: lv, ...more };
  };
  // 갈림 고르기(emotion branch): 기본 보기 3개, 쉬움 보기 2개(바른 보기 + 첫 틀린 보기), 도전 이어지는 다음 장면에서 고르기
  const BR = (prompt, situation, good, bads, next, d, more) => ({
    prompt, toolOptions: { mode: 'branch', situation, choices: [bads[0], good, bads[1]] }, target: { choice: good.id }, difficulty: d,
    levels: {
      easy: { toolOptions: { choices: [bads[0], good] } },
      challenge: { prompt: next.prompt, toolOptions: { situation: next.situation, choices: next.choices }, target: { choice: next.good } },
    },
    ...more,
  });
  // 짝 짓기(emotion·story match): pairs = [[칸 글, 카드], …] 4쌍. 기본 3짝, 쉬움 2짝, 도전 4짝(+ extra 함정 카드)
  const MT = (prompt, pairs, extra, d, more, tool) => {
    const sl = pairs.map((p, i) => ({ id: `s${i + 1}`, label: p[0] }));
    const tg = (n) => ({ match: Object.fromEntries(pairs.slice(0, n).map((p, i) => [`s${i + 1}`, idOf(p[1])])) });
    const cards = (n, x) => [...pairs.slice(0, n).map((p) => p[1]), ...(x ? [x] : [])].reverse();
    return {
      prompt, toolOptions: { mode: 'match', slots: sl.slice(0, 3), cards: cards(3) }, target: tg(3), difficulty: d,
      levels: {
        easy: { prompt: `${cut(prompt)}(2짝).`, toolOptions: { slots: sl.slice(0, 2), cards: cards(2) }, target: tg(2) },
        challenge: { prompt: `${cut(prompt)}(4짝).`, toolOptions: { slots: sl, cards: cards(4, extra) }, target: tg(4) },
      },
      ...more,
    };
  };
  // 순서 카드(timer order): 기본 3장, 쉬움 앞 2장, 도전 4장(fourth 가 있으면)
  const STEPS = (prompt, title, cards, fourth, d, more) => ({
    prompt, toolOptions: { title, cards: [cards[2], cards[0], cards[1]] }, target: { order: cards }, difficulty: d,
    levels: Object.assign(
      { easy: { prompt: `${cut(prompt)}(2장).`, toolOptions: { cards: [cards[1], cards[0]] }, target: { order: cards.slice(0, 2) } } },
      fourth ? { challenge: { prompt: `${cut(prompt)}(4장).`, toolOptions: { cards: [cards[2], fourth, cards[0], cards[1]] }, target: { order: [...cards, fourth] } } } : {},
    ),
    ...more,
  });
  // 안전 점검(timer safety): 기본 3칸, 쉬움 2칸, 도전 4칸
  const SAFE = (prompt, title, list, d, more) => ({
    prompt, toolOptions: { title, safety: list.slice(0, 3) }, target: { safety: true }, difficulty: d,
    levels: { easy: { toolOptions: { safety: list.slice(0, 2) } }, challenge: { toolOptions: { safety: list } } },
    ...more,
  });
  // 스스로 점검(timer selfCheck): 기본 3칸, 쉬움 2칸, 도전 4칸
  const SELFT = (prompt, title, list, d, more) => ({
    prompt, toolOptions: { title }, target: { selfCheck: list.slice(0, 3) }, difficulty: d,
    levels: { easy: { prompt: `${cut(prompt)}(2칸).`, target: { selfCheck: list.slice(0, 2) } }, challenge: { prompt: `${cut(prompt)}(4칸).`, target: { selfCheck: list } } },
    ...more,
  });
  // 짝·모둠 말하기(교구를 움직이지 않음)
  const TALK = (prompt, more) => Object.assign({ prompt, free: true, talk: true, difficulty: 0.2 }, more);
  // 정리 출구: 순서 카드(timer), 스스로 점검(timer), 고르기(wordcards), 마음 눈금(emotion)
  const CHANT = (title, cards, prompt) => ({ type: 'tool', tool: 'timer', options: { title, cards: [cards[cards.length - 1], ...cards.slice(0, -1)] }, prompt: prompt || '구호를 차례대로 놓아요.', target: { order: cards }, difficulty: 0.1 });
  const SELF = (title, list, prompt) => ({ type: 'tool', tool: 'timer', options: { title }, prompt: prompt || '해 본 것에 표시해요.', target: { selfCheck: list }, difficulty: 0.1 });
  const PICKW = (basket, cards, good, prompt) => ({ type: 'tool', tool: 'wordcards', options: { mode: 'pick', basket, cards }, prompt, target: { pick: ids(good) }, difficulty: 0.1 });
  const SCALE = (situation, feeling, prompt, steps) => ({ type: 'tool', tool: 'emotion', options: { mode: 'scale', situation, feeling, steps: steps || 5, scaleLabels: { 1: '조금', [steps || 5]: '아주 많이' } }, prompt, target: { level: 'any' }, difficulty: 0.1 });
  const Q = (prompt, options, answer, explain) => ({ type: 'choice', prompt, options, answer, difficulty: 0.1, explain });

  // =====================================================================================================
  // 학교에 온 첫날 내 마음 (정서 지원)
  const HEART = MOD('start.e12.heart');
  const T_HEART = [
    HEART({
      id: 'start.e12.heart.intro.weather', type: 'intro', title: '오늘 내 마음 날씨 누르기',
      method: '마음 날씨 그림 보고 오늘 날씨 누르기', tool: 'emotion', minutes: 6,
      levels: { easy: '교사가 해·비 두 날씨 그림만 들어 보이고 "해님이에요? 비예요?" 물어 하나를 가리키게 한다.', base: '날씨 그림 네 장(해·두근두근 별·구름·비)을 차례로 읽어 주고 오늘 마음에 맞는 것을 가리키게 한다.', challenge: '날씨를 가리킨 뒤 "왜냐하면" 다음에 올 낱말(친구·선생님·교실) 하나를 골라 말한다.' },
      intro: {
        teacher: '"오늘 학교에 오면서 내 마음은 어떤 날씨였나요? 해님처럼 반짝였나요, 구름처럼 조금 흐렸나요?" 날씨 그림을 하나씩 짚어 읽어 주고, 시연 단추로 날씨 카드 하나가 바구니에 담기는 모습을 보여 준다. "구름은 나쁜 마음이에요"라는 말이 나오면 "구름이 있어야 비도 오고 꽃도 자라요. 걱정 구름도 말해 주면 선생님이 같이 걸을 수 있어요"라고 되묻듯 말한다. 마음은 말하지 않으면 선생님도 다 알 수 없다는 것을 짚는다.',
        student: '오늘 내 마음과 닮은 날씨 그림을 손가락으로 가리켜 보아요.',
        demo: { tool: 'emotion', options: { mode: 'pick', basket: '오늘 내 마음', cards: ['기쁨', '설렘', '걱정', '슬픔'], shuffle: false }, sequence: [{ pick: ['설렘'] }] },
        art: { draw: 'a paper classroom window with four cut-paper weather cards, a sun, a star, a cloud and rain, and small paper first graders pointing at them with curious faces', banner: '오늘 내 마음 날씨', extra: [{ motif: 'sun', x: 300, y: 96, color: 'buttercup' }] },
      },
      notes: '고른 날씨를 고치게 하지 않는다. 비·구름을 고른 학생은 수업 뒤 따로 "선생님이 도와줄 게 있을까?"라고만 묻는다.',
    }),
    HEART({
      id: 'start.e12.heart.intro.face', type: 'intro', title: '선생님 표정 따라 하기',
      method: '선생님 표정 따라 하기', tool: 'timer', minutes: 6,
      levels: { easy: '교사가 기쁜 얼굴·떨리는 얼굴 두 가지만 크게 지어 보이고 함께 따라 한다.', base: '기쁜·떨리는·궁금한 얼굴 세 가지를 차례대로 따라 하고 표정 카드 차례를 맞춘다.', challenge: '따라 한 뒤 짝에게 표정 하나를 지어 보이고 짝이 어떤 마음인지 맞힌다.' },
      intro: {
        teacher: '"선생님 얼굴을 보세요. 지금 어떤 마음일까요?" 입꼬리를 올린 기쁜 얼굴 → 어깨를 움츠린 떨리는 얼굴 → 고개를 갸웃한 궁금한 얼굴을 차례로 짓고 반 전체가 따라 한다. 시연 단추로 표정 카드가 그 차례대로 놓이는 모습을 보여 준다. "떨리는 얼굴은 겁쟁이 얼굴이에요"라는 말이 나오면 "선생님도 오늘 아침에 떨렸어요. 처음 하는 일은 누구나 떨려요"라고 말해 준다.',
        student: '선생님 얼굴을 보고 똑같은 표정을 지어 보아요.',
        demo: { tool: 'timer', options: { title: '따라 할 표정', cards: ['궁금한 얼굴', '기쁜 얼굴', '떨리는 얼굴'] }, sequence: [{ order: ['기쁜 얼굴', '떨리는 얼굴', '궁금한 얼굴'] }] },
        art: { draw: 'a paper teacher making a big happy face in front of a class while paper first graders copy the expression, three paper face masks on the board', banner: '표정 따라 해요' },
      },
    }),
    HEART({
      id: 'start.e12.heart.intro.scene', type: 'intro', title: '교문 앞 친구 마음 고르기',
      method: '첫날 그림 장면에서 친구 마음 고르기', tool: 'emotion', minutes: 6,
      levels: { easy: '교사가 교문 그림 한 장면만 보여 주고 친구 얼굴에 맞는 마음 카드를 함께 고른다.', base: '두 장면(손 흔드는 친구·혼자 서 있는 친구)에 마음 카드를 짝 짓는 시연을 보고 따라 말한다.', challenge: '세 장면(장면 하나 더: 신발을 갈아 신는 친구)에 마음 카드 네 장 가운데 알맞은 것을 고른다.' },
      intro: {
        teacher: '"교문 앞에 친구들이 있어요. 이 친구 얼굴을 보세요. 어떤 마음일까요?" 그림 속 가상 친구 나리(손을 흔들며 웃음)와 바다(가방끈을 꼭 쥐고 혼자 서 있음)를 짚고, 시연 단추로 설렘·걱정 카드가 짝 지어지는 모습을 보여 준다. "바다는 학교가 싫은 거예요"라는 말이 나오면 "싫은 걸까요, 처음이라 걱정되는 걸까요? 걱정될 때는 누가 도와줄 수 있을까요?"라고 되묻는다. 마음은 얼굴과 몸에 나타난다는 것을 짚는다.',
        student: '그림 속 친구 얼굴을 보고 어떤 마음일지 짝에게 말해 보아요.',
        demo: { tool: 'emotion', options: { mode: 'match', slots: [{ id: 's1', label: '손 흔들며 웃어요' }, { id: 's2', label: '혼자 꼭 서 있어요' }], cards: ['걱정', '설렘', '화남'], shuffle: false }, sequence: [{ match: { s1: '설렘', s2: '걱정' } }] },
        art: { draw: 'a paper school gate on a spring morning with cherry blossoms, one paper child waving and smiling, another child standing still holding the backpack straps tightly', banner: '친구는 어떤 마음일까?', extra: [{ motif: 'flower', x: 300, y: 222 }] },
      },
      notes: '그림 속 가상 친구의 마음으로만 이야기한다. 학생에게 첫날 울었는지 같은 일을 묻지 않는다.',
    }),
    HEART({
      id: 'start.e12.heart.activity.scale', type: 'activity', title: '마음 크기 눈금으로 재기',
      method: '마음 크기 눈금으로 재기', tool: 'emotion', minutes: 14,
      levels: { easy: '눈금 3칸마다 이름(조금·보통·많이)이 붙어 있어 소리로 듣고 고른다.', base: '눈금 3칸에 양 끝 이름(조금·많이)만 있다.', challenge: '눈금 5칸에서 고르고, 첫 문항은 아침이 아니라 지금 마음 크기를 한 번 더 고른다.' },
      activity: {
        title: '떨리는 마음 크기 재기', tool: 'emotion',
        teacher: '"떨리는 마음이 얼마나 큰지 눈금으로 재 볼까요? 조금이면 왼쪽, 아주 많이면 오른쪽이에요." 첫 문항은 내 마음이라 어느 칸이든 맞고, 둘째·셋째 문항은 가상 친구 나리와 바다의 말을 듣고 맞는 칸을 고른다. 큰 칸을 고른 학생에게 "그만큼 떨리면 선생님 손을 잡아도 돼요"라고 말해 준다. "많이 떨리면 부끄러워요"라는 말이 나오면 "마음 크기는 사람마다 달라요. 크다고 말해 준 것이 용기예요"라고 짚는다.',
        task: '떨리는 마음이 얼마나 큰지 눈금에서 골라요.', levels: { easy: { steps: 3, scaleLabels: ['조금', '보통', '많이'] }, base: { steps: 3, scaleLabels: { 1: '조금', 3: '많이' } }, challenge: { steps: 5, scaleLabels: { 1: '조금', 5: '아주 많이' } } },
        items: [
          { prompt: '교실 문을 열 때 내 마음은요?', toolOptions: { mode: 'scale', situation: '처음 교실 문을 열어요.', feeling: '걱정' }, target: { level: 'any' }, difficulty: 0.05,
            levels: { challenge: { prompt: '지금 내 떨림은 얼마큼이에요?', toolOptions: { situation: '지금 교실에 앉아 있어요.' } } } },
          { prompt: '나리는 "조금 떨려요" 했어요.', toolOptions: { mode: 'scale', situation: '나리: "조금 떨려요."', feeling: '걱정', ask: '나리 마음은 몇 칸일까요?' }, target: { level: 1 }, difficulty: 0.1,
            hints: ['나리가 한 말을 다시 들어 봐요.', '"조금"은 눈금의 어느 끝일까요?', '맨 왼쪽 칸을 눌러요.'] },
          { prompt: '바다는 "아주 많이 떨려요" 했어요.', toolOptions: { mode: 'scale', situation: '바다: "아주 많이 떨려요."', feeling: '걱정', ask: '바다 마음은 몇 칸일까요?', after: '많이 떨리면 선생님께 말해요.' }, target: { level: 3 }, difficulty: 0.15,
            hints: ['바다가 한 말을 다시 들어 봐요.', '"아주 많이"는 눈금의 어느 끝일까요?', '맨 오른쪽 칸을 눌러요.'],
            levels: { challenge: { prompt: '5칸 눈금에서 바다 마음은요?', target: { level: 5 } } },
            conclude: '떨리는 마음은 크기가 달라요. 크면 클수록 선생님께 말해요.' },
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '떨리는 마음이 아주 크면 어떻게 해요?', options: ['혼자 참아요', '선생님께 말해요'], answer: '선생님께 말해요' }] },
      notes: '눈금은 3칸이 가장 적다(교구가 3~7칸) — 계획의 쉬움 "눈금 2칸" 대신 3칸마다 이름을 붙여 읽어 준다. 첫 문항은 내 마음이라 정답이 없다.',
    }),
    HEART({
      id: 'start.e12.heart.activity.branch', type: 'activity', title: '걱정될 때 할 일 고르기',
      method: '걱정될 때 할 일 고르고 결과 보기', tool: 'emotion', minutes: 13,
      levels: { easy: '보기 2개 가운데 고르고, 고르면 결과 그림이 바로 보인다.', base: '보기 3개 가운데 고르고 결과는 확인한 뒤에 보인다.', challenge: '선생님께 말한 다음 장면이 이어지고, 그 장면에서 한 번 더 고른다.' },
      activity: {
        title: '걱정 장면에서 할 일 고르기', tool: 'emotion',
        teacher: '"화장실이 어디인지 몰라요. 걱정돼요. 어떻게 하면 좋을까요?" 고르기 전에 반 전체가 손으로 하나·둘·셋 보기를 가리켜 보게 한다. "혼자 찾아 나가요"를 고른 학생에게 "혼자 나갔다가 길을 잃으면 선생님이 찾을 수 있을까요?"라고 묻는다. 걱정될 때 말하면 해결할 길이 생긴다는 것, 선생님은 말하지 않은 마음까지 다 알지는 못한다는 것을 짚는다.',
        task: '걱정되는 장면을 듣고 할 일을 골라요.', levels: { easy: {}, base: { revealAfterCheck: true }, challenge: { revealAfterCheck: true } },
        items: [
          BR('화장실을 몰라요. 어떻게 해요?', '화장실이 어디인지 몰라요.', CH('ask', '선생님께 물어요', '선생님이 같이 가 주셨어요.', '편안함'),
            [CH('alone', '혼자 찾아 나가요', '길을 잃을 수 있어요.', '걱정', '혼자 나가면 길을 잃을 수 있어요.'), CH('hold', '꾹 참아요', '배가 점점 아파요.', '걱정', '참으면 더 힘들어요. 말해요.')],
            { prompt: '선생님이 같이 가요. 그다음은요?', situation: '선생님이 "같이 가자" 하셨어요.', good: 'thanks', choices: [CH('thanks', '"고맙습니다" 해요', '선생님이 웃으셨어요.', '고마움'), CH('quiet', '대답 안 해요', '선생님이 다시 물으셨어요.', '걱정', '도와주시면 고맙다고 말해요.')] }, 0.1),
          BR('연필이 없어요. 어떻게 해요?', '연필을 안 가져왔어요.', CH('tell', '선생님께 말해요', '연필을 빌려주셨어요.', '고마움'),
            [CH('cry', '울기만 해요', '아무도 몰라요.', '슬픔', '울어도 괜찮지만 말로도 알려요.'), CH('take', '짝 것 그냥 써요', '짝이 놀랐어요.', '놀람', '빌릴 때는 먼저 물어요.')],
            { prompt: '빌린 연필, 다 쓰면요?', situation: '빌린 연필을 다 썼어요.', good: 'back', choices: [CH('back', '돌려드려요', '선생님이 고맙다고 하셨어요.', '뿌듯함'), CH('keep', '가방에 넣어요', '선생님 연필이 없어졌어요.', '걱정', '빌린 것은 돌려드려요.')] }, 0.15),
          BR('짝 이름을 몰라요. 어떻게 해요?', '짝 이름을 아직 몰라요.', CH('askname', '"이름이 뭐야?"', '짝이 이름을 알려 줬어요.', '기쁨'),
            [CH('hey', '"야!" 불러요', '짝이 시무룩해요.', '속상함', '이름을 물어보고 불러요.'), CH('none', '말 안 걸어요', '둘 다 심심해요.', '슬픔', '먼저 물어보면 친구가 돼요.')],
            { prompt: '짝이 이름을 말했어요. 그다음은요?', situation: '짝이 "나는 솔이야" 했어요.', good: 'mine', choices: [CH('mine', '내 이름도 말해요', '서로 이름을 알았어요.', '신남'), CH('turn', '뒤돌아 앉아요', '짝이 속상해요.', '속상함', '친구가 말해 주면 나도 말해요.')] }, 0.2,
            { conclude: '걱정될 때는 선생님께, 친구에게 말로 물어요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '화장실을 모르면 어떻게 해요?', options: ['혼자 찾아요', '선생님께 물어요'], answer: '선생님께 물어요' }] },
    }),
    HEART({
      id: 'start.e12.heart.activity.collage', type: 'activity', title: '색종이로 내 마음 얼굴 꾸미기',
      method: '내 마음 색종이 얼굴 만들기', tool: 'collage', minutes: 14,
      levels: { easy: '고르개 모양이 셋(동그라미·반원·세모)이고 조각 3개 이상으로 얼굴을 만든다.', base: '고르개 모양이 다섯이고 조각 5개 이상으로 얼굴을 꾸민다.', challenge: '조각 5개 이상에 얼굴 옆 마음 색 하트 조각 하나를 더 붙인다.' },
      activity: {
        title: '내 마음 얼굴 꾸미기', tool: 'collage',
        teacher: '"오늘 내 마음 얼굴을 색종이로 만들어 볼까요? 웃는 입은 반원을 이렇게, 놀란 입은 동그라미로 붙여요." 칠판에 반원 입 두 가지(웃는 입·처진 입)를 그려 두고 고르게 한다. 처진 입을 붙인 학생에게 "그런 날도 있어요. 무엇이 마음을 흐리게 했는지 말해 줄래요?"라고만 묻고 고치게 하지 않는다. "예쁘게 만들어야 해요"라는 말이 나오면 "내 마음과 닮으면 그게 잘 만든 얼굴이에요"라고 짚는다.',
        task: '색종이 조각으로 오늘 내 마음 얼굴을 꾸며요.', levels: { easy: { shapes: ['circle', 'semi', 'triangle'] }, base: { shapes: ['circle', 'semi', 'triangle', 'star', 'heart'] }, challenge: {} },
        items: [
          { prompt: '큰 동그라미로 얼굴을 붙여요.', toolOptions: {}, target: { has: [{ shape: 'circle', size: 'l', min: 1 }], pieces: { min: 5 } }, difficulty: 0.1,
            levels: { easy: { prompt: '큰 동그라미 얼굴과 조각 3개.', target: { has: [{ shape: 'circle', size: 'l', min: 1 }], pieces: { min: 3 } } } } },
          { prompt: '반원으로 입을 붙여요.', toolOptions: {}, target: { has: [{ shape: 'semi', min: 1 }, { shape: 'circle', min: 3 }], pieces: { min: 5 } }, difficulty: 0.15,
            hints: ['얼굴에 눈 둘, 입 하나가 있는지 봐요.', '입은 동그라미를 반 자른 모양이에요.', '반원 하나와 동그라미 셋(얼굴·눈 둘)을 붙여요.'],
            levels: { easy: { prompt: '반원 입과 동그라미 눈을 붙여요.', target: { has: [{ shape: 'semi', min: 1 }, { shape: 'circle', min: 2 }] } } } },
          { prompt: '얼굴을 다 꾸미고 표시해요.', toolOptions: {}, target: { selfCheck: ['얼굴을 만들었어요', '마음을 말했어요'], minPieces: 5 }, difficulty: 0.2,
            levels: { easy: { prompt: '조각 3개로 꾸미고 표시해요.', target: { selfCheck: ['얼굴을 만들었어요', '마음을 말했어요'], minPieces: 3 } },
              challenge: { prompt: '마음 색 하트를 옆에 더해요.', target: { has: [{ shape: 'heart', min: 1 }], selfCheck: ['얼굴을 만들었어요', '마음 색을 골랐어요'], minPieces: 6 } } },
            conclude: '내 마음과 닮은 얼굴이면 잘 만든 얼굴이에요.' },
        ],
      },
      worksheet: { items: [{ type: 'draw', prompt: '오늘 내 마음 얼굴을 그려요.' }] },
    }),
    HEART({
      id: 'start.e12.heart.activity.talk', type: 'activity', title: '짝에게 마음 한 마디',
      method: '짝에게 마음 한 마디 말하기', tool: 'timer', minutes: 13,
      levels: { easy: '말틀 카드 2장의 차례를 맞추고, 선생님 말을 따라 한 마디 한다.', base: '말틀 카드 3장의 차례를 맞추고 짝과 말하기·듣기 시간을 맞춰 번갈아 말한다.', challenge: '말틀 카드 4장(짝 마음 다시 말하기 포함)의 차례를 맞추고 짝의 마음을 다시 말해 준다.' },
      activity: {
        title: '"나는 오늘 ○○해요" 말하기', tool: 'timer',
        teacher: '"짝을 보고 이렇게 말해요. 나는 오늘 두근두근해요!" 교사가 먼저 시범을 보이고 "너는?" 하고 학생 한 명에게 물어 대답을 듣는다. 화면의 말하기·듣기 시간(우리 반 약속)을 함께 맞춘 뒤 신호에 맞춰 번갈아 말한다. 말하기 차례에 웃기만 하는 학생에게 "기뻐요, 떨려요, 궁금해요 가운데 하나를 골라 볼까요?"라고 보기를 준다. 들을 때는 짝 얼굴을 보는 것이 짝 마음을 받는 방법이라고 짚는다.',
        task: '말틀을 차례대로 놓고 짝에게 오늘 마음을 말해요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          STEPS('말하는 차례대로 놓아요.', '마음 말틀', ['짝 눈 보기', '"나는 오늘…"', '"너는?" 묻기'], '짝 말 다시 하기', 0.1),
          { prompt: '말하기 20초, 듣기 20초로 맞춰요.', toolOptions: { title: '짝과 번갈아(우리 반 약속)', labels: ['말하기', '듣기'], plan: { work: 10, rest: 10, rounds: 1 } }, target: { plan: { work: 20, rest: 20 } }, difficulty: 0.15,
            levels: { easy: { prompt: '말하기를 20초로 맞춰요.', target: { plan: { work: 20 } } }, challenge: { prompt: '20초씩, 2번 하게 맞춰요.', target: { plan: { work: 20, rest: 20, rounds: 2 } } } } },
          TALK('짝에게 오늘 마음을 말해요.', { levels: { easy: { prompt: '선생님 말을 따라 해요.' }, challenge: { prompt: '짝 마음을 다시 말해 줘요.' } }, conclude: '"나는 오늘 ○○해요." 마음을 말하면 짝이 내 마음을 알아요.' }),
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '말틀을 따라 써요.', text: '나는 오늘 ___해요.', answer: '(내 마음 낱말 — 예: 설레요)' }] },
    }),
    HEART({
      id: 'start.e12.heart.activity.story', type: 'activity', title: '나리의 첫날 세 장면',
      method: '첫날 이야기 세 장면 차례 놓기', tool: 'story', minutes: 27,
      levels: { easy: '첫 장면(집을 나서요)이 놓여 있어 남은 두 장면만 놓고, 마음 짝 짓기도 두 장면만 한다.', base: '세 장면을 차례대로 놓고 장면마다 나리의 마음 카드를 짝 짓는다.', challenge: '세 장면에 더해 나리 마음이 어떻게 바뀌었는지 고르는 카드가 하나 더 나온다.' },
      activity: {
        title: '나리의 첫날 이야기', tool: 'story',
        teacher: '"가상 친구 나리의 입학 첫날 이야기를 들려줄게요. 집을 나서고, 교문에 오고, 교실에 앉았어요." 그림 카드를 하나씩 읽어 주고 차례를 놓은 뒤, 장면마다 "이때 나리 얼굴은 어땠을까요?"라고 묻는다. 교실 장면에 걱정을 놓는 학생에게 "선생님이 웃어 주고 짝이 인사했어요. 나리 마음이 그대로였을까요?"라고 묻는다. 마음은 하루에도 여러 번 바뀌고, 걱정이 편안함으로 바뀔 수 있다는 것을 짚는다. 마지막 문항은 짝에게 말로 해 본다.',
        task: '나리의 첫날 장면을 차례대로 놓고 마음을 이어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          ORDER3('나리의 첫날, 차례로 놓아요.', [C('home', '집을 나서요', { motif: 'house' }), C('gate', '교문에 와요', { motif: 'flower' }), C('room', '교실에 앉아요', { motif: 'star' })], null, 0.1),
          { prompt: '장면마다 나리 마음을 이어요.', toolOptions: { mode: 'match', slots: [{ id: 'home', label: '두근두근 집을 나서요' }, { id: 'gate', label: '교문 앞, 손을 꼭 쥐어요' }, { id: 'room', label: '선생님이 웃어 줘요' }], cards: [C('calm', '편안해요', { motif: 'leaf' }), C('flutter', '설레요', { motif: 'star' }), C('worry', '걱정돼요', { motif: 'cloud' })] },
            target: { match: { home: 'flutter', gate: 'worry', room: 'calm' } }, difficulty: 0.15,
            levels: { easy: { prompt: '두 장면에 나리 마음을 이어요.', toolOptions: { slots: [{ id: 'home', label: '두근두근 집을 나서요' }, { id: 'room', label: '선생님이 웃어 줘요' }], cards: [C('calm', '편안해요', { motif: 'leaf' }), C('flutter', '설레요', { motif: 'star' })] }, target: { match: { home: 'flutter', room: 'calm' } } } } },
          { prompt: '나리 마음은 어떻게 바뀌었나요?', toolOptions: { mode: 'pick', basket: '나리 마음', cards: [C('stay', '계속 걱정해요'), C('better', '걱정→편안'), C('angry', '화가 났어요')] }, target: { pick: ['better'] }, difficulty: 0.2,
            levels: { easy: { prompt: '나리는 교실에서 어땠나요?', toolOptions: { cards: [C('stay', '계속 걱정해요'), C('better', '걱정→편안')] } } } },
          TALK('나리처럼 내 첫날을 말해요.', { conclude: '처음에는 걱정돼도, 말하고 친구를 만나면 마음이 편안해져요.' }),
        ],
      },
      worksheet: {
        items: [
          { type: 'choice', prompt: '교실에서 선생님이 웃어 주자 나리 마음은?', options: ['편안해졌어요', '더 걱정했어요'], answer: '편안해졌어요' },
          { type: 'draw', prompt: '나리가 교실에 앉은 장면을 그려요.' },
        ],
        easy: [{ type: 'choice', prompt: '나리가 처음 간 곳은?', options: ['집', '교실'], answer: '집' }],
      },
      notes: '학생의 실제 첫날 이야기는 마지막 문항에서 하고 싶은 학생만 짝에게 말한다(발표를 시키지 않는다).',
    }),
    HEART({
      id: 'start.e12.heart.wrap.sticker', type: 'wrap', title: '마음 날씨 다시 고르기',
      method: '마음 날씨 다시 고르기', tool: 'emotion', minutes: 7,
      levels: { easy: '교사가 "아침이랑 같아요? 달라요?"만 묻고 손으로 ○·×를 보이게 한다.', base: '수업을 마친 지금 마음 크기를 눈금에서 고르고 아침 날씨와 견준다.', challenge: '고른 뒤 바뀐 까닭(친구를 만나서·선생님이 웃어 줘서 등) 하나를 짝에게 말한다.' },
      wrap: {
        teacher: '"아침에 고른 마음 날씨, 기억나요? 지금 마음은 어떤가요?" 눈금을 고른 뒤 손으로 아침과 같은지(손바닥 둘 모으기)·다른지(손 흔들기) 보이게 한다. 그대로 걱정이라는 학생에게 "말해 줘서 고마워요. 내일 아침에 선생님과 같이 교실까지 걸어가요"라고 말한다. 출구 2번에서 걱정은 나쁜 마음이라고 고른 학생에게는 "걱정을 말하면 도와줄 사람이 생겨요"라고 짚어 준다.',
        exitTicket: [
          SCALE('수업을 마친 지금이에요.', '편안함', '지금 마음은 얼마나 편안해요?'),
          Q('걱정되는 마음은 어떻게 해요?', ['숨겨야 해요', '말해도 돼요'], 1, '걱정은 나쁜 마음이 아니에요. 선생님께 말해요.'),
          MOOD,
        ],
      },
      worksheet: {
        title: '내 마음 날씨',
        items: [
          { type: 'draw', prompt: '아침 마음 날씨와 지금 마음 날씨를 그려요.' },
          { type: 'check', prompt: '마음을 말할 수 있는 사람에 ✓ 해요.', options: ['담임 선생님', '짝', '보건 선생님'] },
        ],
        easy: { note: '해, 구름, 비 가운데 골라 그려요.', items: [{ type: 'draw', prompt: '지금 내 마음 날씨를 그려요.' }] },
      },
    }),
    HEART({
      id: 'start.e12.heart.wrap.hug', type: 'wrap', title: '"괜찮아, 함께야" 구호와 박수',
      method: '마음 구호와 박수로 마치기', tool: 'timer', minutes: 7,
      levels: { easy: '구호 없이 교사를 따라 박수 세 번만 친다.', base: '"괜찮아, 함께야" 구호 카드 차례를 맞추고 구호와 박수 세 번을 함께 한다.', challenge: '구호를 외친 뒤 우리 반 마음 구호를 하나 더 만들어 제안한다.' },
      wrap: {
        teacher: '"괜찮아! (두 손 가슴에) 함께야! (옆 친구와 손잡기) 짝짝짝! (박수 세 번)" 구호 카드 차례를 맞춘 뒤 반 전체가 두 번 외친다. 손잡기를 어색해하는 학생은 손을 흔드는 것으로 해도 된다고 말해 준다. 출구 2번에서 "혼자 참아요"를 고른 학생에게 "선생님과 친구가 함께 있으니 말해도 돼요"라고 말해 준다.',
        exitTicket: [
          CHANT('마음 구호', ['괜찮아', '함께야', '박수 세 번']),
          Q('떨릴 때 함께해 줄 사람은?', ['아무도 없어요', '선생님과 친구'], 1, '선생님과 반 친구가 함께 있어요.'),
          MOOD,
        ],
      },
      worksheet: {
        title: '괜찮아, 함께야',
        items: [
          { type: 'blank', prompt: '구호를 따라 써요.', text: '괜찮아, ___!', answer: '함께야' },
          { type: 'draw', prompt: '친구와 손잡고 웃는 모습을 그려요.' },
        ],
      },
    }),
    HEART({
      id: 'start.e12.heart.wrap.badge', type: 'wrap', title: '오늘의 용기 배지 붙이기',
      method: '오늘의 용기 배지 붙이기', tool: 'collage', minutes: 7,
      levels: { easy: '별 조각 하나로 배지를 만든다(교사가 "별 하나면 충분해요"라고 말해 준다).', base: '별과 하트 조각 두 개로 용기 배지를 만든다.', challenge: '배지를 만든 뒤 배지 이름("두근두근 용기" 등)을 지어 짧게 쓴다.' },
      wrap: {
        teacher: '"오늘 처음 해 본 일이 있지요? 교실에 들어온 것, 짝과 말한 것 모두 용기예요. 용기 배지를 만들어요." 별과 하트 조각을 붙여 배지를 만들고 가슴에 단 것처럼 손을 얹게 한다. "나는 용기 없어요"라는 학생에게 "오늘 학교에 온 것부터 용기예요"라고 말해 준다. 출구 2번에서 용기를 "안 무서운 것"으로 고른 학생에게 떨려도 해 보는 것이 용기라고 짚는다.',
        exitTicket: [
          { type: 'tool', tool: 'collage', options: { shapes: ['star', 'heart', 'circle'] }, prompt: '별과 하트로 용기 배지를 만들어요.', target: { has: [{ shape: 'star', min: 1 }, { shape: 'heart', min: 1 }] }, difficulty: 0.1 },
          Q('용기는 어떤 걸까요?', ['하나도 안 떨려요', '떨려도 해 봐요'], 1, '떨려도 해 보는 것이 용기예요.'),
          { type: 'short', prompt: '내 배지 이름을 지어요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '오늘의 용기 배지',
        items: [
          { type: 'draw', prompt: '내 용기 배지를 그려요.' },
          { type: 'check', prompt: '오늘 해 본 일에 ✓ 해요.', options: ['교실에 들어왔어요', '짝과 말했어요', '마음을 말했어요'] },
        ],
      },
    }),
  ];

  // =====================================================================================================
  // 선생님께 인사하기 (관계 형성)
  const HELLO = MOD('start.e12.hello');
  const T_HELLO = [
    HELLO({
      id: 'start.e12.hello.intro.listen', type: 'intro', title: '인사말 듣고 그림 고르기',
      method: '인사말 소리 듣고 그림 고르기', tool: 'wordcards', minutes: 6,
      levels: { easy: '교사가 그림 카드 두 장(아침에 만나요·집에 가요)만 들고 "안녕하세요"를 들려준 뒤 하나를 가리키게 한다.', base: '그림 카드 세 장을 보이고 인사말을 들려준 뒤 맞는 장면을 고르게 한다.', challenge: '그림 카드 네 장(밥 먹어요·부딪혔어요 더함)에서 인사말 세 가지를 차례로 듣고 장면을 고른다.' },
      intro: {
        teacher: '"선생님이 인사말을 하나 할게요. 잘 듣고 언제 하는 인사인지 맞혀 보세요. 안녕하세요!" 그림 카드를 하나씩 짚어 읽어 주고, 시연 단추로 "아침에 만나요" 카드가 바구니에 담기는 모습을 보여 준다. "선생님한테도 안녕! 하면 돼요"라는 말이 나오면 "친구에게는 안녕, 선생님 같은 어른께는 무엇이라고 할까요?"라고 되묻는다. 오늘은 때와 곳에 맞는 인사를 배운다고 밝힌다.',
        student: '"안녕하세요"를 들으면 언제 하는 인사인지 그림을 가리켜 보아요.',
        demo: { tool: 'wordcards', options: { mode: 'pick', basket: '"안녕하세요"', cards: [C('morning', '아침에 만나요'), C('home', '집에 가요'), C('eat', '밥 먹어요')], shuffle: false }, sequence: [{ pick: ['morning'] }] },
        art: { draw: 'a paper teacher standing at a classroom door in the morning, paper first graders arriving and bowing politely with speech bubbles', banner: '안녕하세요!', extra: [{ motif: 'sun', x: 300, y: 96, color: 'buttercup' }] },
      },
    }),
    HELLO({
      id: 'start.e12.hello.intro.bow', type: 'intro', title: '허리 굽혀 인사 따라 하기',
      method: '허리 굽혀 인사 따라 하기', tool: 'timer', minutes: 6,
      levels: { easy: '교사 시범을 보고 인사 자세를 한 번 따라 한다.', base: '자세 카드 세 장의 차례를 보고 인사를 두 번 따라 한다.', challenge: '두 번 따라 한 뒤 짝의 인사 자세를 보고 "허리가 잘 굽었어"처럼 한 마디 해 준다.' },
      intro: {
        teacher: '"바로 서요(발 모으기), 선생님 눈을 봐요, 허리를 굽히며 안녕하세요!" 교사가 천천히 시범을 보이고 시연 단추로 자세 카드가 차례대로 놓이는 모습을 보여 준다. 반 전체가 두 번 따라 한다. "인사는 크게 소리만 지르면 돼요"라는 말이 나오면 "소리만 크고 고개를 돌리면 선생님은 인사받은 기분이 들까요?"라고 되묻는다. 눈을 보고 몸으로도 인사한다는 것을 짚는다.',
        student: '선생님을 따라 바로 서서 허리를 굽혀 인사해 보아요.',
        demo: { tool: 'timer', options: { title: '인사 자세', cards: ['허리 굽히기', '바로 서기', '눈 보기'] }, sequence: [{ order: ['바로 서기', '눈 보기', '허리 굽히기'] }] },
        art: { draw: 'a row of paper children bowing at the waist toward a smiling paper teacher, arrows showing standing straight then bending', banner: '꾸벅, 안녕하세요' },
      },
    }),
    HELLO({
      id: 'start.e12.hello.activity.match', type: 'activity', title: '때와 인사말 짝 짓기',
      method: '때와 인사말 짝 짓기', tool: 'emotion', minutes: 14,
      levels: { easy: '장면 2개에 인사말 카드 2장을 짝 짓는다.', base: '장면 3개에 인사말 카드 3장을 짝 짓는다.', challenge: '장면 4개에 인사말 카드 5장(맞지 않는 카드 한 장 섞임)을 짝 짓는다.' },
      activity: {
        title: '때에 맞는 인사말 잇기', tool: 'emotion',
        teacher: '"선생님이 책을 빌려주셨어요. 뭐라고 인사할까요?" 장면 글을 소리 내어 읽어 주고, 카드를 놓을 때마다 반 전체가 그 인사말을 따라 말한다. 선생님과 헤어질 때 "안녕!"을 놓는 학생에게 "친구에게는 안녕, 선생님께는 어떻게 바꿔 말할까요?"라고 묻는다. 같은 헤어짐이라도 누구에게 하느냐에 따라 말이 달라진다는 것을 짚는다.',
        task: '장면을 듣고 맞는 인사말 카드를 이어요.', levels: { easy: { live: true, instant: true, weather: false }, base: { weather: false }, challenge: { weather: false, shuffle: true } },
        items: [
          MT('누구와 언제? 인사말을 이어요.', [['선생님 만났을 때', C('hello', '안녕하세요')], ['짝 만났을 때', C('hi', '"안녕!"')], ['선생님과 헤어질 때', C('bye', '안녕히 계세요')], ['짝과 헤어질 때', C('see', '"내일 봐!"')]], C('yo', '"야!"'), 0.1),
          MT('이럴 때 하는 말을 이어요.', [['책을 빌려주실 때', C('thank', '고맙습니다')], ['선생님과 부딪혔을 때', C('sorry', '죄송합니다')], ['이름을 부르실 때', C('yes', '"네!"')], ['급식을 받을 때', C('eat', '잘 먹겠습니다')]], C('no', '"싫어요"'), 0.15),
          MT('인사할 때 몸짓을 이어요.', [['선생님께 인사', C('bow', '허리 굽혀요')], ['친구에게 인사', C('wave', '손 흔들어요')], ['멀리 계신 선생님', C('nod', '고개 숙여요')], ['교실 문 앞에서', C('stop', '멈춰서 해요')]], C('run', '뛰면서 해요'), 0.2,
            { conclude: '선생님께는 "안녕하세요", 친구에게는 "안녕!" — 때와 사람에 맞게 인사해요.' }),
        ],
      },
      worksheet: { items: [{ type: 'table', prompt: '알맞은 인사말에 ○ 해요.', columns: ['때', '인사말'], cells: [['선생님 만났을 때', '안녕하세요 / 안녕'], ['짝과 헤어질 때', '내일 봐 / 안녕히 계세요']], answer: '안녕하세요, 내일 봐' }],
        easy: [{ type: 'choice', prompt: '선생님께 하는 인사에 ○ 해요.', options: ['안녕하세요', '안녕!'], answer: '안녕하세요' }] },
    }),
    HELLO({
      id: 'start.e12.hello.activity.role', type: 'activity', title: '교실 문 앞 인사 역할놀이',
      method: '교실 문 앞 인사 역할놀이', tool: 'timer', minutes: 13,
      levels: { easy: '차례 카드 2장을 맞추고, 교사가 선생님 역할을 맡아 학생 역할만 따라 해 본다.', base: '차례 카드 3장을 맞추고 짝과 선생님·학생 역할을 바꿔 가며 해 본 것을 점검한다.', challenge: '차례 카드 4장을 맞추고, 교실 문 앞에 더해 복도에서 선생님을 만난 장면까지 해 보고 점검한다.' },
      activity: {
        title: '교실 문 앞 인사 해 보기', tool: 'timer',
        teacher: '"아침에 교실 문 앞에 왔어요. 선생님이 계세요. 무엇부터 할까요?" 차례 카드를 맞춘 뒤 교실 문을 무대 삼아 교사가 선생님 역할로 한 번 시범을 보이고, 짝끼리 역할을 나눠 해 본다. 역할을 바꾸지 않고 한 사람만 하는 짝에게 "이번엔 선생님이 되어 인사를 받아 볼까요? 받는 사람 마음도 알 수 있어요"라고 말한다. 인사를 받으면 받은 사람도 "안녕?" 하고 답한다는 것을 짚는다.',
        task: '인사 차례를 놓고 짝과 선생님·학생이 되어 해 봐요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          STEPS('문 앞 인사 차례로 놓아요.', '문 앞 인사 차례', ['문 앞에 서기', '선생님 보기', '"안녕하세요"'], '자리로 가기', 0.1),
          SELFT('역할놀이 한 것에 표시해요.', '역할놀이 점검', ['학생 역할 했어요', '선생님 역할 했어요', '역할을 바꿨어요', '복도 장면 했어요'], 0.15),
          TALK('짝과 역할을 바꿔 인사해요.', { levels: { easy: { prompt: '선생님과 함께 인사해요.' }, challenge: { prompt: '복도에서 만난 장면도 해요.' } }, conclude: '문 앞에서 멈추고, 눈 보고, "안녕하세요" — 받은 사람도 웃으며 답해요.' }),
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '교실 문 앞에서 선생님께 "___" 해요.', answer: '안녕하세요' }] },
    }),
    HELLO({
      id: 'start.e12.hello.activity.name', type: 'activity', title: '선생님 이름 글자 만들기',
      method: '선생님 이름 글자 맞추기', tool: 'hangul', minutes: 14,
      levels: { easy: '모음 조각을 들면 알맞은 자리가 깜박이고, 빈 자리에 자음·모음 글씨가 보인다.', base: '빈 자리 글씨만 보고 모음 자리(오른쪽·아래)를 스스로 고른다.', challenge: '빈 자리 글씨 없이 이름의 둘째 글자까지 만들어 두 글자를 완성한다.' },
      activity: {
        title: '가상 선생님 이름 글자 만들기', tool: 'hangul',
        teacher: '"그림책 학교 선생님 이름은 나무 선생님이에요. 나무의 첫 글자 \'나\'는 어떤 조각으로 만들까요?" 자음 ㄴ을 먼저 놓고 모음 ㅏ를 오른쪽에 두는 것을 함께 말해 본다. ㅗ를 오른쪽에 두려는 학생에게 "ㅗ는 가로로 누운 모음이에요. 어디에 붙여야 할까요?"라고 묻는다. 활동이 끝나면 우리 담임 선생님 이름을 칠판에 크게 써 보이고 함께 소리 내어 읽는다(학생 화면에는 쓰지 않는다).',
        task: '가상 선생님 이름 글자를 자음·모음 조각으로 만들어요.', levels: { easy: { slotGuide: true, slotHints: true }, base: { slotHints: true }, challenge: {} },
        items: [
          { prompt: '"나무 선생님"의 첫 글자를 만들어요.', toolOptions: { consonants: ['ㄴ', 'ㅁ', 'ㅂ'], vowels: ['ㅏ', 'ㅜ', 'ㅗ'] }, target: { syllable: '나' }, difficulty: 0.1,
            levels: { challenge: { prompt: '"나무"의 둘째 글자를 만들어요.', toolOptions: { wordSoFar: '나' }, target: { syllable: '무' } } } },
          { prompt: '"바다 선생님"의 첫 글자를 만들어요.', toolOptions: { consonants: ['ㅂ', 'ㄷ', 'ㅁ'], vowels: ['ㅏ', 'ㅓ', 'ㅗ'] }, target: { syllable: '바' }, difficulty: 0.15,
            levels: { challenge: { prompt: '"바다"의 둘째 글자를 만들어요.', toolOptions: { wordSoFar: '바' }, target: { syllable: '다' } } } },
          { prompt: '"소라 선생님"의 첫 글자를 만들어요.', toolOptions: { consonants: ['ㅅ', 'ㄹ', 'ㅈ'], vowels: ['ㅗ', 'ㅏ', 'ㅜ'] }, target: { syllable: '소' }, difficulty: 0.2,
            levels: { challenge: { prompt: '"소라"의 둘째 글자를 만들어요.', toolOptions: { wordSoFar: '소' }, target: { syllable: '라' } } },
            conclude: '선생님 이름을 알면 "○○ 선생님, 안녕하세요"라고 인사할 수 있어요.' },
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '우리 선생님 이름을 칠판에서 보고 따라 써요.', text: '___ 선생님, 안녕하세요!', answer: '(담임 선생님 이름)' }] },
      notes: '학생 화면의 선생님 이름은 가상(나무·바다·소라)이다. 실제 담임 이름은 교사가 칠판에 쓰고 활동지에서 따라 쓰게 한다.',
    }),
    HELLO({
      id: 'start.e12.hello.activity.good', type: 'activity', title: '좋아요·안돼요 인사 나누기',
      method: '좋아요·안돼요 인사 고르기', tool: 'sortboard', minutes: 13,
      levels: { easy: '카드 4장, 틀린 바구니에 넣으면 까닭을 말하고 돌아온다.', base: '카드 6장을 다 넣은 뒤 확인한다.', challenge: '카드 8장("소리만 크게"처럼 헷갈리는 카드)을 나누고, 셋째 문항에서 안돼요 인사를 고쳐 말한다.' },
      activity: {
        title: '좋은 인사 바구니에 담기', tool: 'sortboard',
        teacher: '"이 인사는 좋아요일까요, 안돼요일까요?" 카드를 하나씩 소리 내어 읽고 넣게 한다. "소리만 크게"를 좋아요에 넣는 학생에게 "고개를 돌리고 소리만 크게 하면 선생님은 인사받은 걸 알까요?"라고 묻는다. 셋째 문항에서는 안돼요 카드 하나를 골라 좋아요 인사로 고쳐 말해 보게 한다("안녕!" → "안녕하세요").',
        task: '인사 카드를 좋아요·안돼요 바구니에 넣어요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
        items: [
          SB2(OKNO, '아침 인사를 나누어요.', ['허리 굽혀 인사', '눈 보고 인사', '"안녕하세요"'], ['"안녕!" 해요', '못 본 척해요', '뛰며 소리쳐요'], ['소리만 크게', '먹으며 인사'], true, 0.1),
          SB2(OKNO, '집에 갈 때 인사를 나누어요.', ['안녕히 계세요', '손 흔들기', '멈춰서 인사'], ['말없이 나가요', '"잘 가!" 해요', '등 돌려 인사'], ['문 쾅 닫기', '달리며 인사'], true, 0.15),
          TALK('안돼요 인사를 고쳐 말해요.', { levels: { easy: { prompt: '선생님과 함께 고쳐 말해요.' } }, conclude: '눈을 보고, 멈춰 서서, 알맞은 목소리로 인사해요.' }),
        ],
      },
      worksheet: { items: [{ type: 'table', prompt: '좋으면 ○, 안 되면 ×를 써요.', columns: ['인사', '○ / ×'], cells: [['허리 굽혀 "안녕하세요"', ''], ['선생님께 "안녕!"', ''], ['못 본 척 지나가기', '']], answer: '○, ×, ×' }] },
    }),
    HELLO({
      id: 'start.e12.hello.wrap.chant', type: 'wrap', title: '"바르게 인사해요" 구호',
      method: '인사 구호 함께 외치기', tool: 'timer', minutes: 7,
      levels: { easy: '구호 없이 허리 굽히는 동작만 교사와 함께 한다.', base: '구호 카드 차례를 맞추고 구호와 동작을 함께 한다.', challenge: '구호를 외친 뒤 "고맙습니다" 같은 다른 인사말을 넣어 구호를 바꿔 본다.' },
      wrap: {
        teacher: '"바르게! (바로 서기) 인사해요! (눈 보기) 꾸벅! (허리 굽히기)" 구호 카드 차례를 맞춘 뒤 반 전체가 일어나 두 번 외친다. 출구 2번에서 선생님께 "안녕!"을 고른 학생에게 "친구에게는 안녕, 선생님께는 안녕하세요"라고 짚어 준다. 내일 아침 교실 문 앞에서 오늘 배운 인사로 만나자고 약속한다.',
        exitTicket: [
          CHANT('인사 구호', ['바르게', '인사해요', '꾸벅!']),
          Q('선생님께 하는 인사는요?', ['"안녕!"', '"안녕하세요"'], 1, '선생님 같은 어른께는 "안녕하세요"라고 해요.'),
          MOOD,
        ],
      },
      worksheet: {
        title: '바르게 인사해요',
        items: [
          { type: 'blank', prompt: '구호를 따라 써요.', text: '바르게 ___ 꾸벅!', answer: '인사해요' },
          { type: 'draw', prompt: '선생님께 인사하는 내 모습을 그려요.' },
        ],
      },
    }),
    HELLO({
      id: 'start.e12.hello.wrap.pick', type: 'wrap', title: '내일 아침 할 인사 고르기',
      method: '내일 아침 할 인사 하나 고르기', tool: 'emotion', minutes: 7,
      levels: { easy: '교사가 보기 두 개("안녕하세요"·모른 척)를 읽어 주고 함께 고른다.', base: '보기 세 개 가운데 내일 아침 선생님께 할 인사를 고른다.', challenge: '선생님께 할 인사에 더해 내일 짝에게 할 인사도 하나 말한다.' },
      wrap: {
        teacher: '"내일 아침 교실 문 앞에서 선생님을 만나면 어떻게 인사할까요?" 카드를 하나씩 읽어 주고 고르게 한다. "부끄러워서 그냥 들어갈래요"라는 학생에게 "고개만 꾸벅해도 인사예요. 선생님이 먼저 웃어 줄게요"라고 말해 준다. 출구 2번은 목소리 크기를 손으로(작게·알맞게·크게) 보이며 함께 고른다.',
        exitTicket: [
          { type: 'tool', tool: 'emotion', options: { mode: 'pick', basket: '내일 아침 인사', weather: false, cards: [C('hello', '"안녕하세요"'), C('yo', '"야, 안녕"'), C('skip', '모른 척')] }, prompt: '내일 선생님께 할 인사를 골라요.', target: { pick: ['hello'] }, difficulty: 0.1 },
          Q('인사할 때 목소리는요?', ['아주 크게 소리쳐요', '알맞게 또박또박'], 1, '알맞은 목소리로 또박또박 인사해요.'),
          { type: 'short', prompt: '내일 짝에게 할 인사를 써요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '내일 아침 인사',
        items: [
          { type: 'choice', prompt: '내일 아침 선생님께 할 인사에 ○ 해요.', options: ['안녕하세요', '야, 안녕'], answer: '안녕하세요' },
          { type: 'draw', prompt: '내일 아침 교실 문 앞에서 인사하는 모습을 그려요.' },
        ],
      },
    }),
  ];

  // =====================================================================================================
  // 친구 이름 부르고 나 소개하기 (관계 형성)
  const FRIEND = MOD('start.e12.friend');
  // 두 친구가 좋아하는 것 나누기(sortboard): 기본 세 바구니(나리만·둘 다·바다만), 쉬움 두 바구니(둘 다·한 명만), 도전 아무도 말하지 않은 함정 카드가 더해짐
  const LIKES = (prompt, both, nari, bada, trap, d, more) => ({
    prompt, toolOptions: { slots: ['나리만', '둘 다', '바다만'], cards: [nari, both, bada] }, target: { sort: { 나리만: [nari], '둘 다': [both], 바다만: [bada] } }, difficulty: d,
    hints: ['선생님이 읽어 준 말을 다시 떠올려요.', '두 친구 말에 다 나온 것이 무엇인지 찾아요.', `${both}는 둘 다, ${nari}는 나리만이에요.`],
    levels: {
      easy: { prompt: `${cut(prompt)}(두 칸)`, toolOptions: { slots: ['둘 다', '한 명만'] }, target: { sort: { '둘 다': [both], '한 명만': [nari, bada] } } },
      challenge: { prompt: `${cut(prompt)}(함정)`, toolOptions: { more: [trap] } },
    },
    ...more,
  });
  const T_FRIEND = [
    FRIEND({
      id: 'start.e12.friend.intro.ball', type: 'intro', title: '이름 공 굴리기 놀이',
      method: '이름 공 굴리기 놀이', tool: 'timer', minutes: 6,
      levels: { easy: '공을 받는 친구 이름을 교사가 먼저 알려 주면 반 전체가 따라 부른다.', base: '공을 굴리기 전에 받을 친구 이름을 스스로 부른다.', challenge: '이름을 부르고, 공을 받은 친구는 좋아하는 것 하나를 말한다.' },
      intro: {
        teacher: '"둥글게 앉아요. 공을 굴리기 전에 받을 친구 이름을 불러요. 하늘아! 데굴데굴." 교사가 먼저 시범을 보이고 시연 단추로 놀이 차례 카드(이름 부르기 → 공 굴리기 → 받은 친구가 "고마워!")가 놓이는 모습을 보여 준다. 이름을 모르는 친구가 나오면 "이름이 뭐야?" 하고 물어도 된다고 말한다. "이름 몰라도 야! 하면 돼요"라는 말이 나오면 "야! 하고 부르면 그 친구는 자기를 부르는지 알까요?"라고 되묻는다.',
        student: '공을 굴리기 전에 받을 친구 이름을 불러 보아요.',
        demo: { tool: 'timer', options: { title: '이름 공 굴리기', cards: ['"고마워!"', '이름 부르기', '공 굴리기'] }, sequence: [{ order: ['이름 부르기', '공 굴리기', '"고마워!"'] }] },
        art: { draw: 'paper first graders sitting in a circle on a classroom floor rolling a soft paper ball to each other, one child calling out with a speech bubble', banner: '이름 부르고 데굴데굴', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
      },
      notes: '공은 부드러운 공을 쓰고 던지지 않고 굴린다. 이름은 말로만 부른다.',
    }),
    FRIEND({
      id: 'start.e12.friend.intro.my', type: 'intro', title: '가상 친구 이름 첫 글자 만들기',
      method: '내 이름 첫 글자 만들기', tool: 'hangul', minutes: 6,
      levels: { easy: '교사가 자음 ㅎ과 모음 ㅏ를 함께 놓아 보이고, 학생은 손바닥에 내 이름 첫 글자를 손가락으로 따라 써 본다.', base: '받침 없는 글자(하)를 만드는 시연을 보고 내 이름 첫 글자를 손바닥에 써 본다.', challenge: '받침 있는 글자(늘)를 만드는 시연을 보고 내 이름 첫 글자에 받침이 있는지 말해 본다.' },
      intro: {
        teacher: '"그림책 친구 하늘이의 첫 글자 \'하\'를 조각으로 만들어 볼게요. ㅎ을 놓고, ㅏ는 오른쪽에!" 시연 단추로 글자가 만들어지는 모습을 보인 뒤, 학생들이 손바닥에 자기 이름 첫 글자를 손가락으로 써 보게 한다(쓴 글자를 보여 달라고 하지 않는다). "내 이름은 어려워서 못 써요"라는 학생에게 "오늘은 손바닥에 그려만 봐도 돼요. 이름표를 보고 따라 해도 좋아요"라고 말한다.',
        student: '하늘이의 첫 글자를 보고, 내 이름 첫 글자를 손바닥에 써 보아요.',
        demo: { tool: 'hangul', options: { consonants: ['ㅎ', 'ㄴ'], vowels: ['ㅏ', 'ㅗ'], slotHints: true }, sequence: [{ syllable: '하' }] },
        art: { draw: 'a paper child arranging cut-paper Korean letter pieces on a desk to make a name card, colorful consonant and vowel pieces scattered around', banner: '이름 첫 글자' },
      },
      notes: '화면에서는 가상 친구 이름(하늘)만 만든다. 학생 이름은 손바닥·종이 이름표로만 쓴다.',
    }),
    FRIEND({
      id: 'start.e12.friend.intro.like', type: 'intro', title: '좋아하는 것 그림 고르기',
      method: '좋아하는 것 그림 고르기', tool: 'wordcards', minutes: 6,
      levels: { easy: '그림 카드 네 장 가운데 좋아하는 것 하나를 손가락으로 가리킨다.', base: '좋아하는 것 두 개를 골라 짝에게 보여 준다.', challenge: '좋아하는 것 세 개를 고르고 가장 좋아하는 것부터 차례로 말한다.' },
      intro: {
        teacher: '"과일, 동물, 놀이 그림이 있어요. 나는 무엇을 좋아하나요? 선생님은 고양이를 좋아해요." 그림 카드를 하나씩 읽어 주고, 시연 단추로 고양이 카드가 바구니에 담기는 모습을 보인다. "친구랑 똑같은 걸 골라야 해요"라는 말이 나오면 "좋아하는 것은 사람마다 달라도 돼요. 다르면 서로 물어볼 거리가 생겨요"라고 말한다. 고른 것으로 오늘 나를 소개할 거라고 밝힌다.',
        student: '그림 가운데 내가 좋아하는 것을 골라 손가락으로 가리켜 보아요.',
        demo: { tool: 'wordcards', options: { mode: 'pick', basket: '좋아하는 것', cards: [C('apple', '사과', { motif: 'apple' }), C('cat', '고양이', { motif: 'cat' }), C('ball', '공놀이', { motif: 'ball' }), C('book', '그림책', { motif: 'book' })], shuffle: false }, sequence: [{ pick: ['cat'] }] },
        art: { draw: 'paper picture cards of an apple, a cat, a ball and a picture book spread on a classroom rug, small paper children pointing at their favorites', banner: '나는 이것을 좋아해요' },
      },
    }),
    FRIEND({
      id: 'start.e12.friend.activity.card', type: 'activity', title: '나 소개 그림 카드 꾸미기',
      method: '나 소개 그림 카드 꾸미기', tool: 'collage', minutes: 14,
      levels: { easy: '고르개 모양이 셋이고 조각 3개 이상(얼굴 하나 포함)으로 카드를 꾸민다.', base: '조각 5개 이상으로 얼굴과 좋아하는 것을 붙인다.', challenge: '조각 5개 이상에 큰 긴 네모 바탕 조각을 깔아 배경 색까지 정한다.' },
      activity: {
        title: '나 소개 카드 꾸미기', tool: 'collage',
        teacher: '"얼굴은 동그라미, 좋아하는 것은 별·하트·나뭇잎 조각으로 나타내요. 고양이를 좋아하면 세모 귀를 붙여도 돼요." 칠판에 예시 카드를 붙여 두고 시작한다. 카드에 이름을 쓰지 않고, 둘러볼 때 말로 소개한다고 알려 준다. 얼굴만 붙이고 멈춘 학생에게 "무엇을 좋아하는지 조각 하나로 보여 줄 수 있을까요?"라고 묻는다. 친구와 똑같이 만들려는 학생에게는 "내가 좋아하는 것이면 달라도 돼요"라고 짚는다.',
        task: '얼굴과 좋아하는 것 조각으로 나 소개 카드를 꾸며요.', levels: { easy: { shapes: ['circle', 'triangle', 'star'] }, base: { shapes: ['circle', 'triangle', 'star', 'heart', 'leaf'] }, challenge: {} },
        items: [
          { prompt: '동그라미로 내 얼굴을 붙여요.', toolOptions: {}, target: { has: [{ shape: 'circle', min: 1 }], pieces: { min: 5 } }, difficulty: 0.1,
            levels: { easy: { prompt: '얼굴과 조각 3개를 붙여요.', target: { has: [{ shape: 'circle', min: 1 }], pieces: { min: 3 } } } } },
          { prompt: '좋아하는 것을 별로 나타내요.', toolOptions: {}, target: { has: [{ shape: 'star', min: 1 }, { shape: 'circle', min: 1 }], pieces: { min: 5 } }, difficulty: 0.15,
            levels: { easy: { prompt: '별 하나로 좋아하는 것을 붙여요.', target: { has: [{ shape: 'star', min: 1 }, { shape: 'circle', min: 1 }], pieces: { min: 3 } } },
              challenge: { prompt: '큰 긴 네모 바탕도 깔아요.', target: { has: [{ shape: 'rect', size: 'l', min: 1 }, { shape: 'star', min: 1 }], pieces: { min: 5 } } } } },
          { prompt: '카드를 다 꾸미고 표시해요.', toolOptions: {}, target: { selfCheck: ['얼굴을 붙였어요', '좋아하는 것을 붙였어요'], minPieces: 5 }, difficulty: 0.2,
            levels: { easy: { prompt: '조각 3개로 꾸미고 표시해요.', target: { selfCheck: ['얼굴을 붙였어요', '좋아하는 것을 붙였어요'], minPieces: 3 } } },
            conclude: '내 얼굴과 좋아하는 것으로 나를 보여 줄 수 있어요.' },
        ],
      },
      worksheet: { items: [{ type: 'draw', prompt: '내 얼굴과 좋아하는 것을 그려 소개 카드를 만들어요.' }] },
      notes: '소개 카드에는 이름을 쓰지 않는다. 벽에 붙일 때는 번호나 그림으로만 구별한다.',
    }),
    FRIEND({
      id: 'start.e12.friend.activity.pair', type: 'activity', title: '짝에게 나 소개하기',
      method: '짝에게 나 소개하기', tool: 'timer', minutes: 13,
      levels: { easy: '소개 차례 카드 2장을 맞추고 교사가 말하는 말틀을 따라 한다.', base: '차례 카드 3장을 맞추고 소개·듣기 시간을 맞춰 짝과 번갈아 소개한다.', challenge: '차례 카드 4장을 맞추고, 짝을 모둠 친구에게 대신 소개해 준다.' },
      activity: {
        title: '"나는 ○○이고, ○○을 좋아해"', tool: 'timer',
        teacher: '"안녕! 나는 하늘이고, 고양이를 좋아해. 너는?" 교사가 가상 친구 하늘이 인형으로 먼저 소개해 보인다. 차례 카드와 소개·듣기 시간(우리 반 약속)을 맞춘 뒤 신호에 맞춰 짝과 번갈아 소개한다. 짝이 말할 때 다른 곳을 보는 학생에게 "짝 얼굴을 보면 짝이 무엇을 좋아하는지 더 잘 들려요"라고 말한다. 이름은 말로만 주고받고 화면이나 종이에 적지 않는다.',
        task: '소개 차례를 놓고 짝과 번갈아 나를 소개해요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          STEPS('소개하는 차례로 놓아요.', '나 소개 차례', ['"안녕!"', '"나는 ○○야"', '"○○ 좋아해"'], '"너는?"', 0.1),
          { prompt: '소개 15초, 듣기 15초로 맞춰요.', toolOptions: { title: '짝과 번갈아(우리 반 약속)', labels: ['소개', '듣기'], plan: { work: 5, rest: 5, rounds: 1 } }, target: { plan: { work: 15, rest: 15 } }, difficulty: 0.15,
            levels: { easy: { prompt: '소개를 15초로 맞춰요.', target: { plan: { work: 15 } } }, challenge: { prompt: '15초씩, 짝과 2번 하게 맞춰요.', target: { plan: { work: 15, rest: 15, rounds: 2 } } } } },
          TALK('짝과 번갈아 나를 소개해요.', { levels: { easy: { prompt: '선생님 말틀을 따라 해요.' }, challenge: { prompt: '짝을 모둠에 소개해 줘요.' } }, conclude: '"나는 ○○이고, ○○을 좋아해. 너는?" — 묻고 들으면 친구가 돼요.' }),
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '말틀을 따라 써요.', text: '나는 ___을 좋아해. 너는?', answer: '(좋아하는 것)' }] },
    }),
    FRIEND({
      id: 'start.e12.friend.activity.same', type: 'activity', title: '나리와 바다의 같은 점 찾기',
      method: '나와 짝의 같은 점 고르기', tool: 'sortboard', minutes: 14,
      levels: { easy: '바구니가 둘(둘 다·한 명만)이다.', base: '바구니가 셋(나리만·둘 다·바다만)이다.', challenge: '바구니 셋에 아무도 좋아한다고 하지 않은 함정 카드가 한 장 더 있어 담지 않는다. 마지막에 짝과 같은 점을 말로 찾는다.' },
      activity: {
        title: '좋아하는 것 같은 점 나누기', tool: 'sortboard',
        teacher: '"가상 친구 나리와 바다가 좋아하는 것을 말해 줄게요. 잘 들어 보세요." 문항 글을 두 번 천천히 읽어 주고 카드를 바구니에 넣게 한다. 한 사람만 말한 것을 둘 다에 넣는 학생에게 "바다도 그걸 좋아한다고 했나요? 다시 들어 볼까요?"라고 묻는다. 마지막 문항에서 짝과 같은 점을 하나 찾게 하고, 다른 점도 친구를 알게 되는 좋은 거리라고 짚는다.',
        task: '두 친구가 좋아하는 것을 듣고 바구니에 나눠 넣어요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
        items: [
          LIKES('나리는 사과·곰, 바다는 사과·공.', '사과', '곰', '공', '포도', 0.1),
          LIKES('나리는 그네·딸기, 바다는 딸기·책.', '딸기', '그네', '책', '수영', 0.15),
          LIKES('나리는 고양이·노래, 바다는 노래·춤.', '노래', '고양이', '춤', '축구', 0.2),
          TALK('짝과 같은 것을 하나 찾아요.', { conclude: '같은 것을 좋아하면 함께 놀 거리가 생기고, 다르면 물어볼 거리가 생겨요.' }),
        ],
      },
      worksheet: { items: [{ type: 'table', prompt: '나리와 바다가 둘 다 좋아하는 것에 ○ 해요.', columns: ['좋아하는 것', '둘 다?'], cells: [['사과', ''], ['곰', ''], ['딸기', '']], answer: '○, , ○' }] },
      notes: '계획의 "모둠 4명으로" 단계는 바구니가 넷까지라 화면에서 하지 않고, 도전은 함정 카드로 한다. 모둠 같은 점 찾기는 마지막 말하기 문항에서 교사가 모둠으로 넓힌다.',
    }),
    FRIEND({
      id: 'start.e12.friend.activity.group', type: 'activity', title: '모둠 친구 이름 불러 주기',
      method: '모둠 친구 이름 불러 주기 놀이', tool: 'timer', minutes: 13,
      levels: { easy: '두 명이 서로 이름을 부르도록 2번 돌게 맞추고 해 본 것 2칸을 점검한다.', base: '모둠 4명이 한 바퀴 돌도록 4번 맞추고 3칸을 점검한다.', challenge: '4번에 부르기 시간을 10초로 늘려 이름과 좋아하는 것까지 말하고 4칸을 점검한다.' },
      activity: {
        title: '모둠 이름 부르기 놀이', tool: 'timer',
        teacher: '"모둠 친구 이름을 차례로 불러 줄 거예요. 이름을 불러 주면 \'응!\' 하고 손을 흔들어요." 교사가 모둠마다 돌며 첫 바퀴를 함께 한다. 타이머의 번 수는 모둠 사람 수만큼 맞춘다. 이름이 생각나지 않아 머뭇거리는 학생에게 "물어봐도 괜찮아요. 이름이 뭐였지? 하고요"라고 말한다. 별명이나 "야"로 부르는 학생에게는 친구가 듣고 싶은 이름으로 부른다는 것을 짚는다.',
        task: '모둠 사람 수만큼 번 수를 맞추고 친구 이름을 불러 줘요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          { prompt: '모둠 4명, 4번 돌게 맞춰요.', toolOptions: { title: '이름 부르기 놀이(우리 반 약속)', labels: ['부르기', '쉬기'], plan: { work: 5, rest: 5, rounds: 1 } }, target: { plan: { rounds: 4 } }, difficulty: 0.1,
            levels: { easy: { prompt: '짝과 둘이면 2번이에요. 맞춰요.', target: { plan: { rounds: 2 } } }, challenge: { prompt: '4번, 부르기 10초로 맞춰요.', target: { plan: { rounds: 4, work: 10 } } } } },
          SELFT('이름 부르기 한 것에 표시해요.', '이름 부르기 점검', ['이름을 불러 줬어요', '"응!" 대답했어요', '눈 보고 불렀어요', '좋아하는 것도 말했어요'], 0.15),
          TALK('모둠 친구 이름을 불러 줘요.', { conclude: '친구는 듣고 싶은 이름으로 불러요. 모르면 "이름이 뭐야?" 물어봐요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '친구 이름이 생각나지 않으면?', options: ['"야!" 불러요', '"이름이 뭐야?" 물어요'], answer: '"이름이 뭐야?" 물어요' }] },
    }),
    FRIEND({
      id: 'start.e12.friend.activity.kind', type: 'activity', title: '친구 부르는 말 좋아요·안돼요',
      method: '친구 부르는 말 좋아요·안돼요', tool: 'emotion', minutes: 27,
      levels: { easy: '부르는 장면 2개에 친구 마음을 잇고, 고르는 문항도 보기 셋에서 고른다.', base: '부르는 장면 3개에 친구 마음을 잇고, 부르는 말을 두 마음 칸으로 나눈다.', challenge: '장면 4개에 마음을 잇고, 마지막에 속상하게 한 말을 좋은 부르기로 고쳐 말한다.' },
      activity: {
        title: '친구가 기쁜 부르기 찾기', tool: 'emotion',
        teacher: '"바다를 \'바다야!\' 하고 불렀을 때와 \'꼬맹아!\' 하고 불렀을 때, 바다 마음은 같을까요?" 장면 글을 읽어 주고 마음 카드를 잇게 한다. "장난으로 부른 거예요"라는 학생에게 "부른 사람은 장난이어도 듣는 친구가 속상하면 어떻게 할까요?"라고 묻는다. 별명은 그 친구가 좋다고 할 때만 부르고, 싫다고 하면 바로 이름으로 부른다는 것을 짚는다. 마지막 문항은 짝과 소리 내어 고쳐 말해 본다.',
        task: '친구를 부르는 말을 듣고 친구 마음을 골라요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          MT('부르는 말과 친구 마음을 이어요.', [['"바다야!" 웃으며', '기쁨'], ['"꼬맹아!" 놀리며', '속상함'], ['"솔아, 같이 놀자"', '신남'], ['"야, 너!" 소리치며', '놀람']], '화남', 0.1),
          { prompt: '부르는 말을 마음 칸에 나누어요.', toolOptions: { mode: 'sort', slots: ['기쁨', '속상함'], cards: [C('name', '"하늘아!"'), C('tease', '"뚱보야!"'), C('friend', '"솔아, 안녕"'), C('yell', '"야, 비켜!"')] }, target: { sort: { 기쁨: ['name', 'friend'], 속상함: ['tease', 'yell'] } }, difficulty: 0.15,
            levels: { easy: { prompt: '두 말을 마음 칸에 나누어요.', toolOptions: { cards: [C('name', '"하늘아!"'), C('tease', '"뚱보야!"')] }, target: { sort: { 기쁨: ['name'], 속상함: ['tease'] } } } } },
          { prompt: '친구가 기쁜 부르기를 골라요.', toolOptions: { mode: 'pick', basket: '좋은 부르기', cards: [C('nm', '이름 불러요'), C('ok', '좋다는 별명'), C('bad', '싫다는 별명'), C('hey', '"야!" 해요')] }, target: { pick: ['nm', 'ok'] }, difficulty: 0.2,
            levels: { easy: { prompt: '친구가 기쁜 부르기 하나를 골라요.', toolOptions: { cards: [C('nm', '이름 불러요'), C('bad', '싫다는 별명'), C('hey', '"야!" 해요')] }, target: { pick: ['nm'] } } } },
          TALK('속상한 말을 고쳐 말해요.', { levels: { easy: { prompt: '선생님과 고쳐 말해요.' } }, conclude: '친구는 이름으로, 별명은 친구가 좋다고 할 때만 불러요.' }),
        ],
      },
      worksheet: {
        items: [
          { type: 'table', prompt: '친구가 기쁘면 ○, 속상하면 ×를 써요.', columns: ['부르는 말', '○ / ×'], cells: [['"바다야!"', ''], ['"꼬맹아!"', ''], ['"솔아, 같이 놀자"', '']], answer: '○, ×, ○' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '친구는 ___으로 불러요.', answer: '이름' },
        ],
        easy: [{ type: 'choice', prompt: '친구가 기쁜 부르기에 ○ 해요.', options: ['이름 부르기', '놀리는 별명'], answer: '이름 부르기' }],
      },
      notes: '학생 사이의 실제 별명을 묻거나 고르게 하지 않는다. 장면은 가상 친구(바다·솔·하늘)의 일로만 이야기한다.',
    }),
    FRIEND({
      id: 'start.e12.friend.wrap.gallery', type: 'wrap', title: '소개 카드 둘러보기',
      method: '소개 카드 둘러보기', tool: 'timer', minutes: 7,
      levels: { easy: '카드를 둘러보며 친구 한 명의 이름을 기억한다.', base: '친구 두 명의 이름과 좋아하는 것을 기억한다.', challenge: '친구 세 명의 이름을 기억해 자리로 돌아와 짝에게 말한다.' },
      wrap: {
        teacher: '"교실 벽에 붙인 소개 카드를 걸어서 둘러봐요. 카드 주인에게 \'이건 누구 카드야?\' 물어보고 이름을 기억해요." 둘러보기는 걸어서, 카드는 손대지 않고 눈으로 본다고 약속한다. 돌아와서 해 본 것에 표시한다. 기억이 안 난다는 학생에게 "얼굴은 기억나요? 다음에 만나면 다시 물어봐요"라고 말해 준다. 출구 2번에서 "야!"를 고른 학생에게 이름으로 불러 주면 친구가 기쁘다고 짚어 준다.',
        exitTicket: [
          SELF('둘러보기 점검', ['걸어서 둘러봤어요', '카드 주인에게 물었어요', '친구 이름을 기억했어요']),
          Q('친구를 부를 때는요?', ['"야!"', '친구 이름으로'], 1, '친구 이름을 불러 주면 친구가 기뻐요.'),
          MOOD,
        ],
      },
      worksheet: {
        title: '새로 안 친구',
        items: [
          { type: 'draw', prompt: '둘러본 소개 카드 가운데 기억나는 카드를 그려요.' },
          { type: 'check', prompt: '오늘 해 본 것에 ✓ 해요.', options: ['친구 이름을 물었어요', '친구 이름을 불렀어요', '나를 소개했어요'] },
        ],
      },
    }),
    FRIEND({
      id: 'start.e12.friend.wrap.remember', type: 'wrap', title: '새로 안 친구 떠올리기',
      method: '새로 안 친구 얼굴 고르기', tool: 'emotion', minutes: 7,
      levels: { easy: '새로 안 친구를 떠올리며 기분 크기만 고른다.', base: '기분 크기를 고르고 그 친구와 하고 싶은 것을 한 낱말로 말한다.', challenge: '기분을 고른 뒤 그 친구에게 할 말을 한 줄로 쓴다.' },
      wrap: {
        teacher: '"오늘 이름을 처음 안 친구가 있나요? 그 친구 얼굴을 떠올려 봐요. 마음이 어때요?" 눈금을 고르게 한 뒤 하고 싶은 놀이를 한 낱말로 말하게 한다. 아직 새 친구를 못 사귀었다는 학생에게 "내일 공 굴리기 놀이에서 한 명 더 알아봐요. 선생님이 도와줄게요"라고 말해 준다. 이름을 칠판이나 종이에 적어 발표하게 하지 않는다.',
        exitTicket: [
          SCALE('새 친구 이름을 알았어요.', '기쁨', '친구를 알게 되어 얼마나 기뻐요?'),
          Q('친구 이름을 모르면요?', ['"이름이 뭐야?"', '안 불러요'], 0, '모르면 물어보고 불러요.'),
          { type: 'short', prompt: '새 친구에게 할 말을 써요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '새 친구와 하고 싶은 것',
        items: [
          { type: 'draw', prompt: '새 친구와 함께 하고 싶은 놀이를 그려요.' },
          { type: 'blank', prompt: '말틀을 따라 써요.', text: '우리 같이 ___ 하자!', answer: '(하고 싶은 놀이)' },
        ],
      },
    }),
    FRIEND({
      id: 'start.e12.friend.wrap.clap', type: 'wrap', title: '친구 이름 박수 판',
      method: '친구 이름 박수 구호', tool: 'collage', minutes: 7,
      levels: { easy: '가상 친구 한 명(나리)의 이름 글자 수만큼 별을 붙이고 박수를 친다.', base: '두 명(나리·하늘이)의 이름 박수를 셈해 보고 함께 친다.', challenge: '모둠 친구 이름을 차례로 부르며 글자 수만큼 박수를 친다(교사 진행).' },
      wrap: {
        teacher: '"나-리! 두 글자니까 박수 두 번, 짝짝! 하-늘-이! 세 글자는?" 별 조각을 글자 수만큼 붙인 뒤 반 전체가 이름을 부르며 박수를 친다. 교실에서는 실제 모둠 친구 이름으로 박수를 한 바퀴 돈다(화면에는 쓰지 않는다). 박수를 빨리 치는 학생에게 "글자 하나에 박수 하나, 천천히!"라고 말해 준다.',
        exitTicket: [
          { type: 'tool', tool: 'collage', options: { shapes: ['star', 'heart', 'circle'] }, prompt: '"나리" 글자 수만큼 별을 붙여요.', target: { has: [{ shape: 'star', n: 2 }] }, difficulty: 0.1 },
          Q('"하늘이"는 박수 몇 번이에요?', ['2번', '3번'], 1, '하-늘-이, 세 글자라 박수 세 번이에요.'),
          MOOD,
        ],
      },
      worksheet: {
        title: '이름 박수',
        items: [
          { type: 'table', prompt: '이름 글자 수만큼 ○를 그려요.', columns: ['이름', '박수'], cells: [['나리', ''], ['하늘이', '']], answer: '○○, ○○○' },
          { type: 'draw', prompt: '친구 이름을 부르며 박수 치는 모습을 그려요.' },
        ],
      },
    }),
  ];

  // =====================================================================================================
  // 우리 교실과 내 자리 (학교 이해) — 가상 교실 '나비반'
  const ROOM = MOD('start.e12.room');
  const NABI = [{ name: '칠판', icon: 'dot', at: [1, 0] }, { name: '선생님 책상', icon: 'dot', at: [2, 0] }, { name: '교실 문', icon: 'dot', at: [3, 0] }, { name: '사물함', icon: 'dot', at: [0, 2] }];
  // 나비반 지도 핀: 쉬움 자리 이름이 지도에 있음, 기본 이름 없는 칸을 말 단서로 찾음, 도전 + 사물함 보기 고르기
  const SEAT = (prompt, who, at, ask, d, more) => ({
    prompt, toolOptions: { grid: [4, 3], places: NABI, title: '나비반 교실' }, target: { at }, difficulty: d,
    levels: {
      easy: { prompt: `${who} 이름 칸에 핀을 꽂아요.`, toolOptions: { places: [...NABI, { name: who, icon: 'house', at }] }, target: { place: who } },
      challenge: { prompt: `${cut(prompt)}, 사물함도요.`, toolOptions: { ask }, target: { at, pick: 0 } },
    },
    ...more,
  });
  const T_ROOM = [
    ROOM({
      id: 'start.e12.room.intro.look', type: 'intro', title: '교실 둘러보며 이름 말하기',
      method: '교실 둘러보며 물건 이름 말하기', tool: 'timer', minutes: 6,
      levels: { easy: '교사가 칠판·사물함·교실 문 세 곳을 가리키면 이름을 따라 말한다.', base: '네 곳(선생님 책상 더함)을 가리키면 이름을 따라 말한다.', challenge: '친구 한 명이 나와 한 곳을 가리키면 반 전체가 이름을 말한다.' },
      intro: {
        teacher: '"우리 교실을 한 바퀴 둘러봐요. 선생님이 가리키는 곳 이름을 따라 말해요. 칠판! 사물함! 교실 문!" 실제 교실을 손으로 가리키고, 시연 단추로 가리킬 차례 카드가 놓이는 모습을 보여 준다. "사물함은 아무 칸이나 써요"라는 말이 나오면 "사물함마다 주인이 있어요. 내 칸은 어떻게 알 수 있을까요?"라고 되묻는다. 오늘은 교실 지도와 내 자리를 알아본다고 밝힌다.',
        student: '선생님이 가리키는 곳의 이름을 크게 따라 말해 보아요.',
        demo: { tool: 'timer', options: { title: '가리킬 차례', cards: ['교실 문', '칠판', '사물함'] }, sequence: [{ order: ['칠판', '사물함', '교실 문'] }] },
        art: { draw: 'a paper teacher pointing at a green chalkboard, a row of lockers and a classroom door while paper first graders look and repeat the names', banner: '여기는 우리 교실' },
      },
    }),
    ROOM({
      id: 'start.e12.room.intro.find', type: 'intro', title: '교실 그림에서 칠판 찾기',
      method: '교실 그림에서 칠판 찾기', tool: 'wordcards', minutes: 6,
      levels: { easy: '그림 카드 두 장(칠판·교실 문)을 교사가 읽어 주고 함께 누른다.', base: '그림 카드 네 장 가운데 칠판과 교실 문 그림을 고른다.', challenge: '그림 카드 네 장에서 교사가 말한 곳 네 곳을 차례대로 고른다.' },
      intro: {
        teacher: '"교실 그림 카드예요. 선생님이 글씨를 쓰는 곳은 어디일까요? 밖으로 나가는 곳은요?" 카드를 하나씩 읽어 주고, 시연 단추로 칠판·교실 문 카드가 바구니에 담기는 모습을 보인다. "창문으로도 나가요"라는 말이 나오면 "창문은 바람이 들어오는 곳이에요. 나갈 때는 어디로 갈까요?"라고 되묻는다.',
        student: '선생님이 말하는 곳 그림을 찾아 손가락으로 눌러 보아요.',
        demo: { tool: 'wordcards', options: { mode: 'pick', basket: '찾은 곳', cards: [C('board', '칠판'), C('window', '창문'), C('door', '교실 문'), C('shelf', '책꽂이')], shuffle: false }, sequence: [{ pick: ['board', 'door'] }] },
        art: { draw: 'a cut-paper classroom picture with a green chalkboard, windows, a door and a bookshelf, a magnifying glass made of paper hovering over the chalkboard', banner: '칠판은 어디?' },
      },
    }),
    ROOM({
      id: 'start.e12.room.activity.pin', type: 'activity', title: '나비반 지도에 자리 핀 꽂기',
      method: '교실 지도에 내 자리 핀 꽂기', tool: 'map', minutes: 14,
      levels: { easy: '앉을 친구 이름이 지도 칸에 적혀 있어 그 칸에 핀을 꽂고, 꽂으면 칸 이름이 보인다.', base: '이름 없는 칸을 "칠판 바로 아래"처럼 말 단서만 듣고 찾아 꽂는다.', challenge: '말 단서로 자리를 찾고, 그 친구의 사물함 칸이 어디인지 보기에서 하나 더 고른다.' },
      activity: {
        title: '가상 교실 자리 찾기', tool: 'map',
        teacher: '"그림책 교실 나비반 지도예요. 위쪽에 칠판, 오른쪽 위에 교실 문이 있어요. 하늘이 자리는 칠판 바로 아래예요. 어디일까요?" 지도에서 칠판을 먼저 손가락으로 짚은 뒤 한 칸씩 내려가 보게 한다. 아무 칸에나 꽂는 학생에게 "칠판에서 한 칸 내려가면 어디일까요? 손가락으로 따라가 봐요"라고 묻는다. 활동 뒤 실제 우리 교실에서 내 자리를 칠판·문을 기준으로 말해 보게 하고, 교실 자리는 정해진 자리에 앉는다는 것을 짚는다.',
        task: '나비반 지도에서 친구 자리 칸을 찾아 핀을 꽂아요.', levels: { easy: { readout: true }, base: {}, challenge: {} },
        items: [
          SEAT('하늘이 자리는 칠판 바로 아래예요.', '하늘', [1, 1], { q: '하늘이 사물함은?', choices: ['사물함 칸', '칠판 칸'] }, 0.1),
          SEAT('솔이 자리는 사물함 바로 옆이에요.', '솔', [1, 2], { q: '솔이 사물함은?', choices: ['사물함 칸', '교실 문 칸'] }, 0.15),
          SEAT('별이 자리는 선생님 책상 아래예요.', '별', [2, 1], { q: '별이 사물함은?', choices: ['사물함 칸', '선생님 책상'] }, 0.2,
            { conclude: '칠판·문·사물함을 기준으로 보면 내 자리를 찾을 수 있어요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '교실 자리는 어떻게 앉아요?', options: ['아무 데나', '내 자리에'], answer: '내 자리에' }] },
      notes: '화면의 교실은 가상 교실이다. 실제 자리는 교사가 우리 교실에서 칠판·문을 기준으로 말해 준다.',
    }),
    ROOM({
      id: 'start.e12.room.activity.walk', type: 'activity', title: '내 자리에서 문까지 걷기',
      method: '내 자리에서 문까지 걸어 보기', tool: 'timer', minutes: 13,
      levels: { easy: '자리 → 교실 문 한 곳만 걸어 보고, 차례 카드 2장·점검 2칸을 한다.', base: '자리 → 교실 문 → 사물함 두 곳을 걸어 보고 차례 카드 3장·점검 3칸을 한다.', challenge: '차례 카드 4장을 맞추고, 새로 온 친구를 사물함까지 안내해 본 뒤 점검 4칸을 한다.' },
      activity: {
        title: '자리에서 문·사물함까지 걷기', tool: 'timer',
        teacher: '"선생님이 손뼉을 치면 의자를 넣고 교실 문까지 걸어가요. 또 치면 사물함, 그리고 내 자리로!" 모둠별로 차례를 정해 한 모둠씩 걷게 한다. 뛰어가는 학생에게 "교실 안에서 뛰면 책상 모서리에 부딪힐 수 있어요. 걸어서 다시 해 볼까요?"라고 말한다. 돌아온 뒤 해 본 것을 점검 칸에 표시하고, 내 자리에서 문까지 몇 걸음이었는지 말해 보게 한다.',
        task: '걷는 차례를 놓고, 교실을 걸어 본 뒤 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          STEPS('걷는 차례로 놓아요.', '교실 걷기 차례', ['의자 넣기', '문까지 걷기', '사물함 가기'], '자리로 오기', 0.1),
          SAFE('교실 걷기 약속에 표시해요.', '걷기 약속 점검', ['걸어서 갔어요', '부딪히지 않았어요', '의자를 넣었어요', '친구를 안내했어요'], 0.15),
          TALK('문까지 몇 걸음인지 말해요.', { conclude: '의자를 넣고, 걸어서, 내 자리로 돌아와요.' }),
        ],
      },
      worksheet: { items: [{ type: 'check', prompt: '오늘 걸어 가 본 곳에 ✓ 해요.', options: ['교실 문', '사물함', '내 자리'] }] },
    }),
    ROOM({
      id: 'start.e12.room.activity.where', type: 'activity', title: '물건과 놓는 곳 잇기',
      method: '물건과 놓는 곳 잇기', tool: 'emotion', minutes: 14,
      levels: { easy: '물건 2개에 놓는 곳 카드 2장을 잇고, 맞게 놓으면 초록 테두리가 생긴다.', base: '물건 3개에 놓는 곳 카드 3장을 잇는다.', challenge: '물건 4개에 카드 5장(맞지 않는 곳 한 장)을 잇는다.' },
      activity: {
        title: '물건 제자리 잇기', tool: 'emotion',
        teacher: '"교실에 오면 가방은 어디에 둘까요? 실내화는요?" 물건 이름을 읽어 주고 놓는 곳 카드를 잇게 한다. 실내화를 책상 위에 두는 학생에게 "신발을 책상에 두면 공책이 어떻게 될까요?"라고 묻는다. 활동 뒤 우리 교실의 실제 자리(가방 걸이·신발장)를 손으로 가리켜 보게 하고, 학교마다 두는 자리가 조금씩 다르니 우리 반 약속을 따른다고 짚는다.',
        task: '물건 이름을 듣고 놓는 곳 카드를 이어요.', levels: { easy: { live: true, instant: true, weather: false }, base: { weather: false }, challenge: { weather: false, shuffle: true } },
        items: [
          MT('아침에 온 물건을 제자리에 이어요.', [['가방', C('hook', '가방 걸이')], ['실내화', C('shoe', '신발장')], ['외투', C('coat', '옷걸이')], ['우산', C('umb', '우산꽂이')]], C('desk', '책상 위'), 0.1),
          MT('공부할 물건을 제자리에 이어요.', [['교과서', C('drawer', '책상 서랍')], ['크레파스', C('locker', '사물함')], ['그림책', C('shelf', '책꽂이')], ['물통', C('side', '책상 옆')]], C('floor', '바닥'), 0.15),
          MT('이럴 때 가는 곳을 이어요.', [['종이를 버릴 때', C('bin', '휴지통')], ['책을 읽고 싶을 때', C('corner', '책 읽는 곳')], ['선생님께 낼 때', C('tdesk', '선생님 책상')], ['밖에 나갈 때', C('door', '교실 문')]], C('win', '창문'), 0.2,
            { conclude: '물건은 제자리에 두면 다시 찾기 쉬워요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '실내화는 어디에 두어요?', options: ['신발장', '책상 위'], answer: '신발장' }] },
    }),
    ROOM({
      id: 'start.e12.room.activity.build', type: 'activity', title: '색종이 교실 지도 꾸미기',
      method: '우리 교실 색종이 지도 꾸미기', tool: 'collage', minutes: 13,
      levels: { easy: '고르개 모양이 셋(긴 네모·네모·세모)이고 조각 3개 이상으로 칠판·책상·문을 놓는다.', base: '조각 5개 이상으로 칠판·책상·문·사물함을 놓는다.', challenge: '조각 5개 이상에 내 자리를 별 조각으로 표시한다.' },
      activity: {
        title: '색종이로 교실 꾸미기', tool: 'collage',
        teacher: '"우리 교실을 위에서 내려다보면 어떻게 생겼을까요? 초록 긴 네모는 칠판, 노란 네모는 책상, 갈색 긴 네모는 문이에요." 칠판에 색 약속을 그려 두고 시작한다. 칠판을 아래쪽에 붙이는 학생에게 "우리가 앉으면 칠판이 앞에 있지요? 지도 위쪽을 앞이라고 하면 칠판은 어디에 붙일까요?"라고 묻는다. 완성한 지도를 짝과 바꿔 보며 문이 어디인지 서로 짚어 보게 한다.',
        task: '네모 조각으로 칠판·책상·문을 놓아 우리 교실을 꾸며요.', levels: { easy: { shapes: ['rect', 'square', 'triangle'] }, base: { shapes: ['rect', 'square', 'triangle', 'circle', 'star'] }, challenge: {} },
        items: [
          { prompt: '초록 긴 네모 칠판과 조각 3개.', toolOptions: {}, target: { has: [{ shape: 'rect', color: '초록', min: 1 }], pieces: { min: 3 } }, difficulty: 0.1 },
          { prompt: '노란 네모 책상을 3개 붙여요.', toolOptions: {}, target: { has: [{ shape: 'square', color: '노랑', min: 3 }, { shape: 'rect', color: '초록', min: 1 }], pieces: { min: 5 } }, difficulty: 0.15,
            levels: { easy: { prompt: '노란 네모 책상을 2개 붙여요.', target: { has: [{ shape: 'square', color: '노랑', min: 2 }] } } } },
          { prompt: '교실 지도를 다 꾸미고 표시해요.', toolOptions: {}, target: { selfCheck: ['칠판을 붙였어요', '문을 붙였어요'], minPieces: 5 }, difficulty: 0.2,
            levels: { easy: { prompt: '조각 3개로 꾸미고 표시해요.', target: { selfCheck: ['칠판을 붙였어요', '문을 붙였어요'], minPieces: 3 } },
              challenge: { prompt: '내 자리에 별을 붙이고 표시해요.', target: { has: [{ shape: 'star', min: 1 }], selfCheck: ['칠판을 붙였어요', '내 자리에 별을 붙였어요'], minPieces: 6 } } },
            conclude: '칠판이 앞, 문은 옆 — 지도를 보면 우리 교실이 한눈에 보여요.' },
        ],
      },
      worksheet: { items: [{ type: 'draw', prompt: '우리 교실을 위에서 본 모습을 그려요.' }] },
    }),
    ROOM({
      id: 'start.e12.room.wrap.quiz', type: 'wrap', title: '선생님이 말한 곳 가리키기',
      method: '선생님이 말한 곳 손가락으로 가리키기', tool: 'timer', minutes: 7,
      levels: { easy: '교사가 두 곳(칠판·교실 문)을 말하면 가리키고 2칸을 표시한다.', base: '세 곳(사물함 더함)을 가리키고 표시한다.', challenge: '네 곳(선생님 책상 더함)을 빠르게 가리킨 뒤 짝에게 한 곳을 문제로 낸다.' },
      wrap: {
        teacher: '"선생님이 말하는 곳을 손가락으로 가리켜요. 칠판! 교실 문! 사물함!" 앉은 자리에서 가리키게 하고, 다 같이 맞히면 해 본 곳에 표시한다. 다른 곳을 가리킨 학생에게는 옆 친구 손가락을 보고 다시 해 보게 한다. 출구 2번에서 "아무 데나"를 고른 학생에게 "내 자리가 있으면 선생님이 나를 빨리 찾을 수 있어요"라고 말해 준다.',
        exitTicket: [
          SELF('가리키기 점검', ['칠판을 가리켰어요', '교실 문을 가리켰어요', '사물함을 가리켰어요'], '가리킨 곳에 표시해요.'),
          Q('교실에서는 어디에 앉아요?', ['아무 데나', '정해진 내 자리'], 1, '정해진 내 자리에 앉아요.'),
          MOOD,
        ],
      },
      worksheet: {
        title: '우리 교실',
        items: [
          { type: 'check', prompt: '우리 교실에 있는 것에 ✓ 해요.', options: ['칠판', '사물함', '교실 문', '선생님 책상'] },
          { type: 'draw', prompt: '내 자리에 앉은 내 모습을 그려요.' },
        ],
      },
    }),
    ROOM({
      id: 'start.e12.room.wrap.mine', type: 'wrap', title: '나비반 지도 다시 찾기',
      method: '내 자리 지도 다시 찾기', tool: 'map', minutes: 7,
      levels: { easy: '나비반 지도에서 하늘이 자리 하나만 다시 찾는다.', base: '하늘이 자리와 교실 문을 차례로 찾는다.', challenge: '자리·교실 문·사물함 세 곳을 찾고 자리에서 문까지 길을 손가락으로 따라간다.' },
      wrap: {
        teacher: '"나비반 지도를 다시 볼까요? 교실 문은 어디에 있었지요?" 핀을 꽂은 뒤 손가락으로 하늘이 자리에서 교실 문까지 칸을 따라가 보게 한다. 출구 2번은 실제 우리 교실 문 쪽을 몸으로 돌아보며 고르게 한다. 문을 칠판으로 착각한 학생에게 "칠판은 글씨를 쓰는 곳, 문은 드나드는 곳"이라고 다시 짚어 준다.',
        exitTicket: [
          { type: 'tool', tool: 'map', options: { grid: [4, 3], places: NABI, title: '나비반 교실' }, prompt: '나비반 교실 문에 핀을 꽂아요.', target: { place: '교실 문' }, difficulty: 0.1 },
          Q('밖으로 나갈 때 가는 곳은요?', ['칠판', '교실 문'], 1, '교실 문으로 드나들어요.'),
          MOOD,
        ],
      },
      worksheet: {
        title: '교실 지도 다시 보기',
        items: [
          { type: 'choice', prompt: '글씨를 쓰는 곳에 ○ 해요.', options: ['칠판', '사물함', '교실 문'], answer: '칠판' },
          { type: 'draw', prompt: '내 자리에서 교실 문까지 가는 길을 그려요.' },
        ],
      },
    }),
  ];

  // =====================================================================================================
  // 우리 학교 둘러보기 (학교 이해) — 가상 학교 '새싹초'
  const TOUR = MOD('start.e12.tour');
  const SSAK = [
    { name: '우리 교실', icon: 'school', at: [0, 0] }, { name: '화장실', icon: 'dot', at: [1, 0] }, { name: '교무실', icon: 'office', at: [2, 0] },
    { name: '보건실', icon: 'hospital', at: [3, 0] }, { name: '도서실', icon: 'library', at: [4, 0] },
    { name: '급식실', icon: 'market', at: [0, 2] }, { name: '운동장', icon: 'park', at: [3, 2] },
  ];
  const HALL = [[[0, 0], [1, 0], [2, 0], [3, 0], [4, 0]], [[0, 0], [0, 1], [0, 2]], [[0, 1], [1, 1], [2, 1], [3, 1], [3, 2]]];
  const T_TOUR = [
    TOUR({
      id: 'start.e12.tour.intro.guess', type: 'intro', title: '소리 듣고 학교 장소 맞히기',
      method: '소리 듣고 학교 장소 맞히기', tool: 'wordcards', minutes: 6,
      levels: { easy: '두 소리(책 넘기는 소리·공 튀는 소리)만 들려주고 장소 그림 두 장에서 고른다.', base: '세 소리(숟가락 소리 더함)를 듣고 장소 그림 세 장에서 고른다.', challenge: '네 소리(보건실 침대 커튼 소리 더함)를 듣고 장소 그림 네 장에서 고른다.' },
      intro: {
        teacher: '"눈을 감고 들어 봐요. 사각사각, 책장 넘기는 소리! 여기는 학교 어디일까요?" 교사가 책장을 넘기고, 공을 튀기고, 숟가락으로 식판을 살짝 두드려 소리를 들려준다. 시연 단추로 도서실 카드가 바구니에 담기는 모습을 보인다. "운동장은 쉬는 시간마다 나가요"라는 말이 나오면 "운동장에는 언제, 누구와 나가기로 했을까요? 오늘 둘러보며 알아봐요"라고 되묻는다.',
        student: '소리를 듣고 학교 어느 곳인지 그림을 가리켜 보아요.',
        demo: { tool: 'wordcards', options: { mode: 'pick', basket: '사각사각 소리', cards: [C('lib', '도서실', { motif: 'book' }), C('field', '운동장', { motif: 'ball' }), C('cafe', '급식실')], shuffle: false }, sequence: [{ pick: ['lib'] }] },
        art: { draw: 'a paper school building cut away to show a library with books, a dining hall with trays and a playground with a ball, paper sound waves floating from each room', banner: '어디서 나는 소리일까?' },
      },
    }),
    TOUR({
      id: 'start.e12.tour.intro.plan', type: 'intro', title: '둘러볼 곳 지도에 표시하기',
      method: '둘러볼 곳 지도에 표시하기', tool: 'map', minutes: 6,
      levels: { easy: '새싹초 지도에서 오늘 갈 곳 한 곳(보건실)에 핀을 꽂는 시연을 본다.', base: '오늘 갈 두 곳을 손가락으로 차례로 짚어 본다.', challenge: '세 곳을 가는 차례대로 짚고 어디부터 갈지 말한다.' },
      intro: {
        teacher: '"그림책 학교 새싹초 지도예요. 우리 교실은 왼쪽 위, 보건실은 어디 있을까요?" 시연 단추로 보건실 칸에 핀이 꽂히는 모습을 보인 뒤, 오늘 둘러볼 곳을 함께 손가락으로 짚는다. "보건실은 아플 때 혼자 가는 곳이에요"라는 말이 나오면 "아플 때 혼자 가다 넘어지면요? 먼저 누구에게 말할까요?"라고 되묻는다. 우리 학교 실제 배치는 둘러보며 확인한다고 밝힌다.',
        student: '지도에서 오늘 가 볼 곳을 손가락으로 짚어 보아요.',
        demo: { tool: 'map', options: { grid: [5, 3], places: SSAK, roads: HALL, title: '새싹초 지도' }, sequence: [{ place: '보건실' }] },
        art: { draw: 'a cut-paper school map on a classroom wall with tiny icons for a library, a nurse office and a playground, a paper teacher pinning a star on it', banner: '오늘 둘러볼 곳' },
      },
      notes: '새싹초는 가상 학교다. 우리 학교 배치와 다른 곳은 교사가 말로 바로잡는다.',
    }),
    TOUR({
      id: 'start.e12.tour.intro.rule', type: 'intro', title: '둘러보기 약속 그림 고르기',
      method: '둘러보기 약속 그림 고르기', tool: 'sortboard', minutes: 6,
      levels: { easy: '교사가 그림 카드 4장을 하나씩 들어 좋아요·안돼요 쪽으로 함께 나눈다.', base: '카드 6장이 바구니에 나뉘는 시연을 보고 까닭을 따라 말한다.', challenge: '나눈 뒤 둘러보기 약속 하나를 내 말로 말한다.' },
      intro: {
        teacher: '"학교를 둘러볼 때 지킬 약속이 있어요. 복도에서 뛰기, 걷기 — 어디에 넣을까요?" 카드를 하나씩 읽어 주고 시연 단추로 바구니에 나뉘는 모습을 보인다. "다른 반 문을 열어 봐도 돼요"라는 말이 나오면 "공부하는 반 문을 갑자기 열면 그 반 친구들은 어떨까요?"라고 되묻는다.',
        student: '둘러볼 때 지킬 약속을 듣고 좋아요, 안돼요를 손으로 보여 주어요.',
        demo: { tool: 'sortboard', options: { slots: OKNO, cards: ['걸어요', '뛰어요', '줄 서요', '문 열어 봐요', '조용히 말해요', '소리쳐요'] }, sequence: [{ sort: { 좋아요: ['걸어요', '줄 서요', '조용히 말해요'], 안돼요: ['뛰어요', '문 열어 봐요', '소리쳐요'] } }] },
        art: { draw: 'a line of paper first graders walking quietly down a school corridor behind a paper teacher, finger on lips, past closed classroom doors', banner: '쉿, 걸어서 둘러봐요' },
      },
    }),
    TOUR({
      id: 'start.e12.tour.activity.walk1', type: 'activity', title: '화장실·보건실 가 보기',
      method: '교사 인솔 학교 둘러보기(화장실·보건실)', tool: 'timer', minutes: 27,
      levels: { easy: '두 곳(화장실·보건실) 차례 카드 2장을 맞추고 안전 점검 2칸을 표시한다.', base: '차례 카드 3장을 맞추고 두 곳에서 문 앞 인사까지 점검 3칸을 표시한다.', challenge: '돌아오는 길까지 차례 카드 4장을 맞추고, 돌아올 때 앞장선 것까지 점검 4칸을 표시한다.' },
      activity: {
        title: '화장실·보건실 둘러보기', tool: 'timer',
        teacher: '"선생님 뒤에 한 줄로 서요. 먼저 화장실, 다음은 보건실이에요." 교실에서 차례 카드를 맞춘 뒤 줄을 지어 출발한다. 화장실에서는 변기·세면대·휴지 자리를, 보건실에서는 문 앞에서 "안녕하세요" 인사 뒤 침대와 보건 선생님 자리를 보여 준다. "보건실은 아플 때 혼자 가요"라는 학생에게 "아프면 먼저 담임 선생님께 말하고, 선생님이 같이 가거나 보내 줘요"라고 짚는다. 교실로 돌아와 점검 칸에 표시한다.',
        task: '둘러볼 차례를 놓고, 다녀와서 지킨 약속을 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          STEPS('오늘 가는 곳 차례로 놓아요.', '둘러보기 차례 ①', ['교실 출발', '화장실', '보건실'], '교실로 와요', 0.1),
          SAFE('둘러보기 약속에 표시해요.', '둘러보기 약속 ①', ['줄 서서 걸었어요', '조용히 걸었어요', '문 앞에서 인사했어요', '돌아올 때 앞장섰어요'], 0.15),
          SELFT('두 곳에서 본 것에 표시해요.', '화장실·보건실', ['세면대를 봤어요', '보건실 침대를 봤어요', '가는 길을 알아요', '보건 선생님께 인사했어요'], 0.15),
          TALK('보건실에 갈 때 할 말을 해요.', { conclude: '보건실은 아프면 선생님께 먼저 말하고 가요. 화장실은 교실 가까이에 있어요.' }),
        ],
      },
      worksheet: {
        items: [
          { type: 'choice', prompt: '아파서 보건실에 가고 싶어요. 먼저 할 일은?', options: ['혼자 가요', '선생님께 말해요'], answer: '선생님께 말해요' },
          { type: 'draw', prompt: '오늘 가 본 화장실이나 보건실을 그려요.' },
        ],
      },
      notes: '둘러보기 전 우리 학교 화장실·보건실 위치와 보건교사의 일정을 미리 맞춰 둔다. 다른 반 수업을 방해하지 않게 복도에서는 손가락을 입에 대고 걷는다.',
    }),
    TOUR({
      id: 'start.e12.tour.activity.walk2', type: 'activity', title: '급식실·도서실·운동장 가 보기',
      method: '교사 인솔 학교 둘러보기(급식실·도서실·운동장)', tool: 'timer', minutes: 27,
      levels: { easy: '두 곳(급식실·도서실) 차례 카드 2장과 점검 2칸을 한다.', base: '세 곳 차례 카드 3장을 맞추고 장소마다 하는 일을 듣고 점검 3칸을 표시한다.', challenge: '돌아오는 길까지 카드 4장을 맞추고, 돌아와 교실까지 오는 길을 말로 설명한다.' },
      activity: {
        title: '급식실·도서실·운동장 둘러보기', tool: 'timer',
        teacher: '"오늘은 세 곳에 가요. 급식실, 도서실, 운동장!" 장소마다 멈춰 하는 일을 짧게 들려준다(급식실: "여기서 줄을 서서 식판을 받아요", 도서실: "책은 조용히 고르고 제자리에", 운동장: "선생님과 정한 시간에 나와요"). "운동장은 아무 때나 나가도 돼요"라는 학생에게 "수업 시간에 혼자 나가면 선생님이 어디 있는지 알 수 있을까요?"라고 묻는다. 돌아와서 점검 칸에 표시하고 교실까지 오는 길을 말해 본다.',
        task: '세 곳의 차례를 놓고, 둘러본 뒤 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          STEPS('세 곳을 가는 차례로 놓아요.', '둘러보기 차례 ②', ['급식실', '도서실', '운동장'], '교실로 와요', 0.1),
          SAFE('둘러보기 약속을 지켰는지 표시해요.', '둘러보기 약속 ②', ['선생님 뒤로 걸었어요', '도서실에서 조용했어요', '운동장에서 줄 섰어요', '오는 길을 말했어요'], 0.15),
          SELFT('세 곳에서 들은 것에 표시해요.', '세 곳에서 하는 일', ['급식실은 밥 먹는 곳', '도서실은 책 읽는 곳', '운동장은 뛰노는 곳', '운동장은 정한 때'], 0.15),
          TALK('운동장에 언제 나가는지 말해요.', { conclude: '운동장은 선생님과 정한 때 나가요. 도서실은 조용히, 급식실은 줄 서서.' }),
        ],
      },
      worksheet: {
        items: [
          { type: 'table', prompt: '하는 일을 선으로 이어요.', columns: ['곳', '하는 일'], cells: [['급식실', '책 읽기'], ['도서실', '밥 먹기'], ['운동장', '뛰어놀기']], answer: '급식실-밥 먹기, 도서실-책 읽기, 운동장-뛰어놀기' },
          { type: 'choice', prompt: '운동장에는 언제 나가요?', options: ['아무 때나', '선생님과 정한 때'], answer: '선생님과 정한 때' },
        ],
      },
    }),
    TOUR({
      id: 'start.e12.tour.activity.match', type: 'activity', title: '학교 장소와 하는 일 잇기',
      method: '장소와 하는 일 잇기', tool: 'emotion', minutes: 14,
      levels: { easy: '장소 2곳에 하는 일 카드 2장을 잇고, 맞으면 초록 테두리가 생긴다.', base: '장소 3곳에 카드 3장을 잇는다.', challenge: '장소 4곳에 카드 5장(맞지 않는 카드 한 장)을 잇는다.' },
      activity: {
        title: '학교 곳곳 하는 일 잇기', tool: 'emotion',
        teacher: '"도서실에서는 무엇을 할까요? 보건실에서는요?" 장소 이름을 읽어 주고 하는 일 카드를 잇게 한다. 넘어져 무릎이 아플 때 교무실을 고른 학생에게 "다친 곳을 돌봐 주시는 분은 어디에 계실까요?"라고 묻는다. 셋째 문항은 "이럴 때 어디로 갈까요?"로 바꿔 묻고, 어디든 갈 때는 선생님께 먼저 말한다는 것을 짚는다.',
        task: '학교 장소를 듣고 맞는 카드를 이어요.', levels: { easy: { live: true, instant: true, weather: false }, base: { weather: false }, challenge: { weather: false, shuffle: true } },
        items: [
          MT('곳마다 하는 일을 이어요.', [['도서실', C('read', '책 읽기')], ['보건실', C('care', '다친 곳 돌봄')], ['급식실', C('eat', '밥 먹기')], ['운동장', C('play', '뛰어놀기')]], C('sleep', '잠자기'), 0.1),
          MT('누가 계신 곳인지 이어요.', [['보건 선생님', C('nurse', '보건실')], ['담임 선생님', C('class', '우리 교실')], ['사서 선생님', C('lib', '도서실')], ['영양 선생님', C('cafe', '급식실')]], C('field', '운동장'), 0.15),
          MT('이럴 때 갈 곳을 이어요.', [['넘어져 무릎이 아파요', C('n2', '보건실')], ['책을 빌리고 싶어요', C('l2', '도서실')], ['점심시간이에요', C('c2', '급식실')], ['체육 시간이에요', C('f2', '운동장')]], C('o2', '교무실'), 0.2,
            { conclude: '학교 곳곳은 하는 일이 달라요. 어디든 갈 때는 선생님께 먼저 말해요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '책을 빌리고 싶으면 어디로 가요?', options: ['도서실', '급식실', '운동장'], answer: '도서실' }] },
      notes: '사서·영양 선생님이 없는 학교는 둘째 문항을 우리 학교에 계신 분으로 바꿔 말해 준다.',
    }),
    TOUR({
      id: 'start.e12.tour.activity.path', type: 'activity', title: '교실에서 화장실 가는 길',
      method: '교실에서 화장실 가는 길 핀으로 찾기', tool: 'map', minutes: 13,
      levels: { easy: '새싹초 지도에 복도 길이 그려져 있고, 핀을 꽂으면 칸 이름이 보인다.', base: '길 그림 없이 장소 기호만 보고 교실·화장실·보건실 칸을 찾는다.', challenge: '보건실 칸을 찾은 뒤 화장실보다 가까운지 먼지 보기에서 하나 더 고른다.' },
      activity: {
        title: '새싹초 지도에서 길 찾기', tool: 'map',
        teacher: '"새싹초 지도에서 우리 교실을 찾아 볼까요? 학교 모양 그림이 우리 교실이에요." 교실을 먼저 짚고 오른쪽으로 한 칸씩 손가락으로 가 보게 한다. 화장실 대신 교무실에 꽂은 학생에게 "교실에서 바로 옆 칸이 어디일까요? 한 칸만 가 봐요"라고 묻는다. 활동 뒤 우리 학교 실제 화장실이 교실에서 어느 쪽인지 몸으로 가리켜 보게 한다.',
        task: '새싹초 지도에서 말하는 곳 칸에 핀을 꽂아요.', levels: { easy: { readout: true, roads: HALL }, base: {}, challenge: {} },
        items: [
          { prompt: '새싹초 우리 교실 칸을 찾아요.', toolOptions: { grid: [5, 3], places: SSAK, title: '새싹초 지도' }, target: { place: '우리 교실' }, difficulty: 0.1 },
          { prompt: '교실 바로 옆 화장실을 찾아요.', toolOptions: { grid: [5, 3], places: SSAK, title: '새싹초 지도' }, target: { place: '화장실' }, difficulty: 0.15 },
          { prompt: '교실에서 오른쪽 셋째 칸, 보건실!', toolOptions: { grid: [5, 3], places: SSAK, title: '새싹초 지도' }, target: { place: '보건실' }, difficulty: 0.2,
            levels: { challenge: { prompt: '보건실을 찾고 거리도 골라요.', toolOptions: { ask: { q: '교실에서 보건실은 화장실보다?', choices: ['가까워요', '멀어요'] } }, target: { place: '보건실', pick: 1 } } },
            conclude: '교실에서 화장실은 바로 옆, 보건실은 조금 더 가요. 길을 알면 혼자서도 걱정이 줄어요.' },
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '새싹초에서 교실 바로 옆은?', options: ['화장실', '운동장'], answer: '화장실' }] },
    }),
    TOUR({
      id: 'start.e12.tour.wrap.best', type: 'wrap', title: '가장 기억나는 곳 고르기',
      method: '가장 기억나는 곳 고르기', tool: 'wordcards', minutes: 7,
      levels: { easy: '오늘 가 본 곳 카드를 고르고, 기억나는 곳 하나를 손으로 가리킨다.', base: '가 본 곳을 고르고 기억나는 곳 하나와 까닭을 말한다.', challenge: '기억나는 곳 두 곳과 각각의 까닭을 쓴다.' },
      wrap: {
        teacher: '"오늘 우리가 가 본 곳은 어디였지요? 카드에서 골라 봐요. 그 가운데 가장 기억나는 곳은 어디예요?" 가 본 곳을 고른 뒤 기억나는 곳을 한 명씩 말하게 한다. 가지 않은 곳(수영장)을 고른 학생에게 "오늘 우리 줄이 수영장에 갔나요? 다시 떠올려 볼까요?"라고 묻는다. 까닭을 말하기 어려워하면 "무엇을 봤어요?"라고 바꿔 묻는다.',
        exitTicket: [
          PICKW('오늘 가 본 곳', [C('toilet', '화장실'), C('pool', '수영장'), C('nurse', '보건실')], ['toilet', 'nurse'], '오늘 가 본 곳을 골라요.'),
          { type: 'short', prompt: '기억나는 곳과 까닭을 써요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '오늘 가 본 곳',
        items: [
          { type: 'draw', prompt: '오늘 가 본 곳 가운데 가장 기억나는 곳을 그려요.' },
          { type: 'check', prompt: '오늘 가 본 곳에 ✓ 해요.', options: ['화장실', '보건실', '운동장'] },
        ],
      },
    }),
    TOUR({
      id: 'start.e12.tour.wrap.face', type: 'wrap', title: '둘러보고 난 마음 날씨',
      method: '둘러보고 난 마음 날씨', tool: 'emotion', minutes: 7,
      levels: { easy: '교사가 해·구름 두 날씨만 보이며 "학교가 조금 편해졌어요?"라고 묻는다.', base: '편안한 마음 크기를 눈금에서 고른다.', challenge: '아침에 고른 마음 날씨와 견주어 달라진 까닭을 말한다.' },
      wrap: {
        teacher: '"학교 곳곳을 둘러봤어요. 이제 학교가 얼마나 편안해졌나요?" 눈금을 고르게 한 뒤 손가락 수로 보여 주게 한다. 낮은 칸을 고른 학생에게 "아직 낯선 곳이 있나요? 내일 그곳을 한 번 더 가 봐요"라고 말해 준다. 출구 2번에서 "아무 때나"를 고른 학생에게 운동장은 선생님과 정한 때 나간다고 짚어 준다.',
        exitTicket: [
          SCALE('학교 곳곳을 둘러봤어요.', '편안함', '학교가 얼마나 편안해졌어요?'),
          Q('운동장에는 언제 나가요?', ['아무 때나', '선생님과 정한 때'], 1, '운동장은 선생님과 정한 때 나가요.'),
          MOOD,
        ],
      },
      worksheet: {
        title: '둘러보고 난 마음',
        items: [
          { type: 'draw', prompt: '학교를 둘러보고 난 내 마음 날씨를 그려요.' },
          { type: 'choice', prompt: '아직 낯선 곳이 있으면 어떻게 해요?', options: ['혼자 가 봐요', '선생님과 한 번 더 가요'], answer: '선생님과 한 번 더 가요' },
        ],
      },
    }),
    TOUR({
      id: 'start.e12.tour.wrap.map2', type: 'wrap', title: '우리 학교 그림 지도 꾸미기',
      method: '우리 학교 그림 지도 꾸미기', tool: 'collage', minutes: 7,
      levels: { easy: '가 본 곳 두 곳을 조각으로 붙인다.', base: '가 본 곳 세 곳을 조각으로 붙인다.', challenge: '다섯 곳을 조각으로 붙이고 교실을 별로 표시한다.' },
      wrap: {
        teacher: '"오늘 가 본 곳을 색종이 조각으로 붙여 우리 학교 지도를 만들어요. 네모는 교실, 동그라미는 운동장처럼 정해 볼까요?" 칠판에 모양 약속을 그려 두고 붙이게 한다. 다 붙인 뒤 짝에게 "여기가 보건실이야"처럼 한 곳을 소개하게 한다. 출구 2번에서 보건실에 혼자 간다고 고른 학생에게 선생님께 먼저 말한다는 것을 짚어 준다.',
        exitTicket: [
          { type: 'tool', tool: 'collage', options: { shapes: ['square', 'circle', 'star', 'rect'] }, prompt: '가 본 곳 조각을 3개 붙여요.', target: { pieces: { min: 3 }, has: [{ shape: 'square', min: 1 }] }, difficulty: 0.1 },
          Q('보건실에 가고 싶으면요?', ['아플 때 혼자 가요', '선생님께 말하고 가요'], 1, '선생님께 먼저 말하고 가요.'),
          MOOD,
        ],
      },
      worksheet: {
        title: '우리 학교 그림 지도',
        items: [
          { type: 'draw', prompt: '우리 교실과 가 본 곳을 이어 그림 지도를 그려요.' },
          { type: 'check', prompt: '지도에 넣은 곳에 ✓ 해요.', options: ['우리 교실', '화장실', '보건실', '급식실', '운동장'] },
        ],
      },
    }),
  ];

  // =====================================================================================================
  // 화장실 혼자 쓰기 (기본 생활 습관)
  const TOILET = MOD('start.e12.toilet');
  const T_TOILET = [
    TOILET({
      id: 'start.e12.toilet.intro.pic', type: 'intro', title: '화장실 그림에서 변기·세면대 찾기',
      method: '화장실 그림에서 변기·세면대 찾기', tool: 'wordcards', minutes: 6,
      levels: { easy: '교사가 변기·세면대 두 그림만 읽어 주고 함께 누른다.', base: '그림 네 장 가운데 화장실에 있는 것 세 가지를 고른다.', challenge: '세 가지를 고르고, 휴지가 어디에 있는지까지 말한다.' },
      intro: {
        teacher: '"화장실에는 무엇이 있을까요? 볼일을 보는 곳, 손을 씻는 곳, 닦는 것!" 그림 카드를 하나씩 읽어 주고 시연 단추로 변기·세면대·휴지 카드가 바구니에 담기는 모습을 보인다. "칠판도 있어요"라는 말이 나오면 웃으며 "칠판은 어디에 있었지요?"라고 되묻는다. 우리 학교 화장실은 칸마다 휴지가 있는지, 휴지가 밖에 있는지 교사가 실제 모습대로 말해 준다.',
        student: '화장실에 있는 것 그림을 골라 손가락으로 눌러 보아요.',
        demo: { tool: 'wordcards', options: { mode: 'pick', basket: '화장실에 있어요', cards: [C('seat', '변기'), C('sink', '세면대'), C('board', '칠판'), C('paper', '휴지')], shuffle: false }, sequence: [{ pick: ['seat', 'sink', 'paper'] }] },
        art: { draw: 'a clean cut-paper school restroom with a small toilet stall, a low sink and a roll of toilet paper, a paper child peeking in curiously', banner: '화장실에 무엇이 있을까?' },
      },
    }),
    TOILET({
      id: 'start.e12.toilet.intro.knock', type: 'intro', title: '"똑똑" 노크 따라 하기',
      method: '노크 소리 따라 하기', tool: 'timer', minutes: 6,
      levels: { easy: '교사를 따라 책상을 "똑똑" 두드리는 노크만 해 본다.', base: '노크하고, 안에서 "있어요" 대답하는 것까지 교사와 번갈아 한다.', challenge: '짝과 번갈아 노크하는 사람·대답하는 사람이 되어 본다.' },
      intro: {
        teacher: '"화장실 문이 닫혀 있어요. 열기 전에 똑똑! 안에 사람이 있으면 \'있어요!\' 하고 대답해요." 교사가 책상을 두드려 노크 소리를 내고 반 전체가 따라 한다. 시연 단추로 노크 → 대답 → 기다리기 카드가 놓이는 모습을 보인다. "문을 확 열어 보면 돼요"라는 말이 나오면 "안에 친구가 있는데 문이 열리면 그 친구 마음은 어떨까요?"라고 되묻는다.',
        student: '선생님을 따라 책상을 "똑똑" 두드리고 "있어요" 대답해 보아요.',
        demo: { tool: 'timer', options: { title: '노크 차례', cards: ['기다리기', '똑똑 노크', '"있어요" 대답'] }, sequence: [{ order: ['똑똑 노크', '"있어요" 대답', '기다리기'] }] },
        art: { draw: 'a paper child knocking on a closed paper restroom stall door with small "knock knock" paper marks, another child waiting in line behind', banner: '똑똑, 있어요?' },
      },
    }),
    TOILET({
      id: 'start.e12.toilet.activity.order', type: 'activity', title: '화장실 쓰는 차례 놓기',
      method: '화장실 쓰는 차례 세 장면 놓기', tool: 'story', minutes: 14,
      levels: { easy: '첫 장면이 놓여 있어 남은 두 장면만 놓고, 놓으면 바로 맞는지 알려 준다.', base: '장면 세 장을 차례대로 놓는다.', challenge: '"물장난 해요" 같은 틀린 장면 한 장이 섞여 있어 빼고 놓는다.' },
      activity: {
        title: '화장실 차례 장면 놓기', tool: 'story',
        teacher: '"화장실에 들어가서 나올 때까지, 무엇부터 할까요?" 카드를 놓은 뒤 반 전체가 자리에서 동작으로 따라 한다(똑똑 두드리기 → 손잡이 내리기 → 손 비비기). 손 씻기를 맨 앞에 두는 학생에게 "볼일을 보기 전에 씻으면, 본 다음 손은 어떻게 될까요?"라고 묻는다. 물을 내리지 않고 나오면 다음 친구가 어떤 마음일지 함께 떠올린다.',
        task: '화장실 장면 카드를 차례대로 놓아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          ORDER3('화장실 쓰는 차례로 놓아요.', [C('knock', '똑똑 노크해요'), C('flush', '물을 내려요'), C('wash', '손을 씻어요')], C('skip', '물 안 내려요'), 0.1),
          ORDER3('사람이 많을 때 차례로 놓아요.', [C('line', '줄을 서요'), C('k2', '노크해요'), C('in', '들어가요')], C('shake', '문 흔들어요'), 0.15),
          ORDER3('씻고 나올 때 차례로 놓아요.', [C('w2', '손을 씻어요'), C('dry', '손을 말려요'), C('back', '교실로 가요')], C('splash', '물장난 해요'), 0.2,
            { conclude: '똑똑 노크, 쏴아 물 내리기, 뽀득뽀득 손 씻기 — 차례대로 해요.' }),
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '볼일을 보면 물을 ___ 손을 씻어요.', answer: '내리고' }] },
    }),
    TOILET({
      id: 'start.e12.toilet.activity.ask', type: 'activity', title: '수업 중 화장실 말하기',
      method: '수업 중 화장실 말하기 역할놀이', tool: 'timer', minutes: 13,
      levels: { easy: '차례 카드 2장을 맞추고 교사의 말을 따라 해 본다.', base: '차례 카드 3장을 맞추고 짝과 선생님·학생이 되어 해 본 뒤 3칸을 점검한다.', challenge: '차례 카드 4장(다녀와서 하는 말 포함)을 맞추고 모둠 앞에서 해 본 뒤 4칸을 점검한다.' },
      activity: {
        title: '"화장실 다녀와도 돼요?" 해 보기', tool: 'timer',
        teacher: '"공부하다가 화장실이 급해요. 어떻게 할까요?" 손을 들고 "선생님, 화장실 다녀와도 돼요?"라고 말하는 시범을 보인 뒤 짝과 역할을 나눠 해 본다. "쉬는 시간까지 참아야 해요"라는 학생에게 "급하면 언제든 손 들고 말해요. 참다가 배가 아프면 더 힘들어요"라고 짚는다. 다녀와서는 "다녀왔습니다" 하고 조용히 자리에 앉는다는 것까지 해 본다.',
        task: '화장실 말하기 차례를 놓고 짝과 해 봐요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          STEPS('화장실 말하는 차례로 놓아요.', '화장실 말하기 차례', ['손 들기', '허락 묻기', '다녀오기'], '"다녀왔습니다"', 0.1),
          SELFT('역할놀이 한 것에 표시해요.', '화장실 말하기 점검', ['손을 들었어요', '또박또박 말했어요', '짝과 해 봤어요', '모둠 앞에서 했어요'], 0.15),
          TALK('"화장실 다녀와도 돼요?" 해요.', { levels: { easy: { prompt: '선생님을 따라 말해요.' }, challenge: { prompt: '모둠 앞에서 말해 봐요.' } }, conclude: '급하면 언제든 손 들고 "화장실 다녀와도 돼요?"라고 말해요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '수업 중 화장실이 급하면?', options: ['쉬는 시간까지 참아요', '손 들고 말해요'], answer: '손 들고 말해요' }] },
    }),
    TOILET({
      id: 'start.e12.toilet.activity.good', type: 'activity', title: '화장실 행동 좋아요·안돼요',
      method: '화장실 행동 좋아요·안돼요', tool: 'sortboard', minutes: 14,
      levels: { easy: '카드 4장, 틀린 바구니에 넣으면 까닭을 말하고 돌아온다.', base: '카드 6장을 다 넣은 뒤 확인한다.', challenge: '카드 8장("옆 칸 엿보기"처럼 헷갈리는 카드)을 나누고, 셋째 문항에서 안돼요 행동을 고쳐 말한다.' },
      activity: {
        title: '화장실 행동 나누기', tool: 'sortboard',
        teacher: '"화장실에서 이렇게 하면 좋아요일까요, 안돼요일까요?" 카드를 소리 내어 읽고 넣게 한다. "옆 칸 엿보기"를 장난이라 괜찮다고 하는 학생에게 "내가 볼일을 보는데 누가 들여다보면 어떨까요?"라고 묻는다. 화장실은 모두가 같이 쓰는 곳이라 다음 사람을 생각한다는 것을 짚는다.',
        task: '화장실 행동 카드를 좋아요·안돼요 바구니에 넣어요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
        items: [
          SB2(OKNO, '화장실 앞에서 하는 일을 나누어요.', ['줄 서서 기다려요', '똑똑 노크해요', '차례를 지켜요'], ['문 흔들어요', '새치기해요', '문 확 열어요'], ['옆 칸 엿보기', '밀며 장난쳐요'], true, 0.1),
          SB2(OKNO, '화장실 안에서 하는 일을 나누어요.', ['물을 내려요', '휴지는 휴지통', '비누로 씻어요'], ['물장난 쳐요', '휴지 던져요', '벽에 낙서해요'], ['물 틀어 두기', '휴지 잔뜩 뽑기'], true, 0.15),
          TALK('안돼요 행동을 고쳐 말해요.', { levels: { easy: { prompt: '선생님과 함께 고쳐 말해요.' } }, conclude: '화장실은 모두의 곳 — 줄 서고, 노크하고, 깨끗이 써요.' }),
        ],
      },
      worksheet: { items: [{ type: 'table', prompt: '좋으면 ○, 안 되면 ×를 써요.', columns: ['행동', '○ / ×'], cells: [['줄 서서 기다려요', ''], ['문을 확 열어요', ''], ['물을 내려요', '']], answer: '○, ×, ○' }] },
    }),
    TOILET({
      id: 'start.e12.toilet.activity.help', type: 'activity', title: '이럴 땐 어떻게? 화장실 도움',
      method: '휴지가 없을 때 할 일 고르기', tool: 'emotion', minutes: 13,
      levels: { easy: '보기 2개 가운데 고르고, 고르면 결과 그림이 바로 보인다.', base: '보기 3개 가운데 고르고 결과는 확인한 뒤에 보인다.', challenge: '도움을 받은 다음 장면이 이어지고, 그 장면에서 한 번 더 고른다.' },
      activity: {
        title: '화장실에서 곤란할 때 고르기', tool: 'emotion',
        teacher: '"화장실에 들어갔는데 휴지가 없어요. 어떻게 하면 좋을까요?" 장면을 읽어 주고 고르기 전에 반 전체가 손가락으로 보기 번호를 보이게 한다. "부끄러워서 그냥 나와요"를 고른 학생에게 "그러면 옷이 어떻게 될까요? 도와 달라고 하는 건 부끄러운 일이 아니에요"라고 말한다. 곤란할 때는 큰 소리로 친구나 선생님을 부르고, 다음에는 들어가기 전에 휴지를 먼저 본다는 것을 짚는다.',
        task: '화장실에서 곤란한 장면을 듣고 할 일을 골라요.', levels: { easy: {}, base: { revealAfterCheck: true }, challenge: { revealAfterCheck: true } },
        items: [
          BR('휴지가 없어요. 어떻게 해요?', '화장실에 휴지가 없어요.', CH('call', '도와 달라고 해요', '친구가 선생님께 알려 휴지를 받았어요.', '편안함'),
            [CH('leave', '그냥 나와요', '옷이 더러워졌어요.', '속상함', '그냥 나오면 옷이 더러워져요. 도와 달라고 해요.'), CH('wait', '울며 기다려요', '아무도 몰라서 오래 걸려요.', '슬픔', '울어도 괜찮지만 큰 소리로 불러요.')],
            { prompt: '다음에 들어갈 때는요?', situation: '다음에 또 화장실에 가요.', good: 'look', choices: [CH('look', '휴지 먼저 봐요', '휴지가 있는 칸으로 들어갔어요.', '뿌듯함'), CH('rush', '바로 들어가요', '또 휴지가 없을 수 있어요.', '걱정', '들어가기 전에 휴지를 먼저 봐요.')] }, 0.1),
          BR('물이 안 내려가요. 어떻게 해요?', '변기 물이 안 내려가요.', CH('tell', '선생님께 알려요', '선생님이 고쳐 주셨어요.', '편안함'),
            [CH('go', '그냥 두고 와요', '다음 친구가 깜짝 놀라요.', '놀람', '그냥 두면 다음 친구가 곤란해요.'), CH('push', '계속 세게 눌러요', '손잡이가 망가질 수 있어요.', '걱정', '세게 누르지 말고 어른께 알려요.')],
            { prompt: '선생님이 고쳐 주셨어요. 그다음은요?', situation: '선생님이 변기를 고쳐 주셨어요.', good: 'thanks', choices: [CH('thanks', '"고맙습니다"', '선생님이 웃으셨어요.', '고마움'), CH('quiet', '말없이 가요', '선생님이 조금 서운해요.', '속상함', '도와주시면 고맙다고 말해요.')] }, 0.15),
          BR('수업 중 급해요. 어떻게 해요?', '공부하다가 화장실이 급해요.', CH('hand', '손 들고 말해요', '선생님이 "다녀와요" 하셨어요.', '편안함'),
            [CH('hold', '꾹 참아요', '배가 점점 아파요.', '걱정', '참지 말고 손 들고 말해요.'), CH('sneak', '몰래 나가요', '선생님이 찾으셨어요.', '놀람', '말없이 나가면 선생님이 걱정해요.')],
            { prompt: '다녀와도 된대요. 어떻게 가요?', situation: '선생님이 "다녀와요" 하셨어요.', good: 'walk', choices: [CH('walk', '걸어서 다녀와요', '안전하게 다녀왔어요.', '뿌듯함'), CH('run', '뛰어서 가요', '복도에서 부딪힐 수 있어요.', '걱정', '급해도 복도는 걸어요.')] }, 0.2,
            { conclude: '곤란할 때는 도와 달라고 말해요. 수업 중에도 손 들면 다녀올 수 있어요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '화장실에 휴지가 없으면?', options: ['그냥 나와요', '도와 달라고 해요'], answer: '도와 달라고 해요' }] },
      notes: '학생에게 화장실에서 곤란했던 일을 묻지 않는다. 그림 속 장면으로만 이야기한다.',
    }),
    TOILET({
      id: 'start.e12.toilet.wrap.chant', type: 'wrap', title: '"똑똑, 쏴아, 뽀득" 구호',
      method: '화장실 약속 구호', tool: 'timer', minutes: 7,
      levels: { easy: '구호 없이 노크·물 내리기·손 비비기 동작만 교사와 함께 한다.', base: '구호 카드 차례를 맞추고 구호와 동작을 함께 한다.', challenge: '교사 없이 혼자 구호와 동작을 차례대로 해 보인다.' },
      wrap: {
        teacher: '"똑똑! (주먹으로 두드리기) 쏴아! (손잡이 내리기) 뽀득! (손 비비기)" 구호 카드 차례를 맞춘 뒤 반 전체가 동작과 함께 두 번 외친다. 순서를 바꿔 하는 학생에게 "볼일을 보고 나서 손을 씻어요. 뽀득은 맨 끝!"이라고 말해 준다. 출구 2번에서 쉬는 시간까지 참는다고 고른 학생에게 급하면 언제든 손을 든다고 짚어 준다.',
        exitTicket: [
          CHANT('화장실 구호', ['똑똑', '쏴아', '뽀득']),
          Q('수업 중 화장실이 급하면요?', ['쉬는 시간까지 참기', '손 들고 말하기'], 1, '급하면 언제든 손 들고 말해요.'),
          MOOD,
        ],
      },
      worksheet: {
        title: '똑똑, 쏴아, 뽀득',
        items: [
          { type: 'blank', prompt: '구호를 따라 써요.', text: '똑똑, ___, 뽀득!', answer: '쏴아' },
          { type: 'draw', prompt: '화장실을 쓰고 손을 씻는 내 모습을 그려요.' },
        ],
      },
    }),
    TOILET({
      id: 'start.e12.toilet.wrap.check', type: 'wrap', title: '나는 혼자 할 수 있어요',
      method: '나는 할 수 있어요 그림 고르기', tool: 'emotion', minutes: 7,
      levels: { easy: '교사가 노크·물 내리기 두 가지를 읽어 주고 혼자 할 수 있는 마음 크기를 고른다.', base: '노크·물 내리기·손 씻기 세 가지를 떠올리며 마음 크기를 고르고 할 수 있는 일을 고른다.', challenge: '할 수 있는 일에 더해 아직 도움이 필요한 일을 하나 쓴다.' },
      wrap: {
        teacher: '"화장실을 혼자 쓸 수 있을 것 같나요? 얼마만큼 자신 있는지 눈금으로 골라 봐요." 눈금을 고른 뒤 혼자 할 수 있는 일을 고르게 한다. 작은 칸을 고른 학생에게 "처음엔 다 그래요. 도움이 필요한 건 선생님께 말해 줘요"라고 말해 준다. 아직 도움이 필요한 일을 쓴 학생은 수업 뒤 따로 이야기를 듣는다(다른 친구 앞에서 묻지 않는다).',
        exitTicket: [
          SCALE('화장실을 혼자 써요.', '뿌듯함', '혼자 할 자신이 얼마나 있어요?'),
          { type: 'choice', prompt: '혼자 할 수 있는 일은요?', options: ['노크하고 물 내리기', '친구 칸 열어 보기'], answer: 0, difficulty: 0.1, explain: '노크하고, 물 내리고, 손 씻기는 혼자 할 수 있어요.' },
          { type: 'short', prompt: '도움이 필요한 일을 써요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '나는 할 수 있어요',
        items: [
          { type: 'check', prompt: '혼자 할 수 있는 일에 ✓ 해요.', options: ['노크하기', '물 내리기', '손 씻기', '도와 달라고 말하기'] },
          { type: 'draw', prompt: '화장실을 혼자 쓰고 웃는 내 얼굴을 그려요.' },
        ],
      },
      notes: '계획의 "웃는 얼굴 짝 짓기"는 정답이 하나로 정해지지 않아, 마음 크기 눈금(어느 칸이든 맞음)과 할 수 있는 일 고르기로 바꿨다.',
    }),
  ];

  // =====================================================================================================
  // 비누로 손 씻기 (기본 생활 습관) — 30초는 주제 근거의 '근거 약함' 값(질병관리청 안내로 사람 확인)
  const WASH = MOD('start.e12.wash');
  const T_WASH = [
    WASH({
      id: 'start.e12.wash.intro.when', type: 'intro', title: '손 씻을 때 그림 고르기',
      method: '손 씻을 때 그림 고르기', tool: 'wordcards', minutes: 6,
      levels: { easy: '그림 카드 두 장(밥 먹기 전·노래할 때)을 읽어 주고 손 씻을 때를 함께 고른다.', base: '그림 카드 세 장 가운데 손 씻을 때 두 장을 고른다.', challenge: '그림 카드 네 장(코 푼 뒤 더함) 가운데 손 씻을 때를 모두 고른다.' },
      intro: {
        teacher: '"손은 언제 씻을까요? 밥 먹기 전? 노래할 때?" 그림 카드를 하나씩 읽어 주고 시연 단추로 손 씻을 때 카드만 바구니에 담기는 모습을 보인다. "손이 더러워 보일 때만 씻어요"라는 말이 나오면 "세균은 너무 작아서 눈에 안 보여요. 그럼 언제 씻으면 좋을까요?"라고 되묻는다. 오늘은 비누로 30초 동안 손 씻는 법을 배운다고 밝힌다.',
        student: '손을 씻어야 할 때 그림을 골라 손가락으로 가리켜 보아요.',
        demo: { tool: 'wordcards', options: { mode: 'pick', basket: '손 씻을 때', cards: [C('meal', '밥 먹기 전'), C('sing', '노래할 때'), C('toilet', '화장실 뒤')], shuffle: false }, sequence: [{ pick: ['meal', 'toilet'] }] },
        art: { draw: 'three paper picture cards: a child about to eat lunch, a child coming out of a restroom and a child singing, a small paper clock showing thirty seconds above them', banner: '언제 손을 씻을까?' },
      },
    }),
    WASH({
      id: 'start.e12.wash.intro.germ', type: 'intro', title: '세균이 숨는 곳 짚어 보기',
      method: '손바닥 그림에서 세균 찾기', tool: 'body', minutes: 6,
      levels: { easy: '교사가 피부 칸을 누르는 시연을 보이고, 학생은 자기 손바닥·손등 두 곳을 짚는다.', base: '자기 손에서 손바닥·손등·손가락 사이 세 곳을 차례로 짚는다.', challenge: '네 곳(손톱 밑 더함)을 짚고 어디가 가장 잘 안 씻기는지 말한다.' },
      intro: {
        teacher: '"세균은 눈에 보이지 않지만 우리 몸 피부 어디에나 붙을 수 있어요. 손에서는 어디에 많이 숨을까요?" 종이 몸에서 피부 칸을 눌러 이름을 들려준 뒤, 학생들이 자기 손을 펴서 손바닥 → 손등 → 손가락 사이 → 손톱 밑을 짚게 한다. "물로 휙 헹구면 세균이 다 떨어져요"라는 말이 나오면 "손가락 사이에 숨은 세균도 물만으로 빠질까요? 비누 거품이 하는 일을 오늘 알아봐요"라고 되묻는다.',
        student: '내 손을 펴서 손바닥, 손등, 손가락 사이, 손톱 밑을 짚어 보아요.',
        demo: { tool: 'body', options: { mode: 'parts', parts: ['피부', '목', '무릎', '발목'], names: true }, sequence: [{ parts: ['피부'] }] },
        art: { draw: 'a big open paper hand with tiny cut-paper dots hiding between the fingers and under the nails, a paper magnifying glass looking at them', banner: '세균은 어디 숨을까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
      },
      notes: '종이 몸에는 손·손가락 칸이 없어 피부 칸 시연으로 대신하고, 손바닥·손가락 사이·손톱 밑은 학생이 자기 손으로 짚는다.',
    }),
    WASH({
      id: 'start.e12.wash.activity.timer30', type: 'activity', title: '30초 타이머 맞추고 비비기',
      method: '30초 타이머 맞추고 손 씻기 동작', tool: 'timer', minutes: 14,
      levels: { easy: '타이머가 25초에 맞춰져 있어 한 번만 늘려 30초를 만들고, 비비는 동작 카드는 2장만 놓는다.', base: '타이머를 스스로 30초로 맞추고 비비는 동작 카드 3장의 차례를 놓는다.', challenge: '30초 비비기를 2번 되풀이하게 맞추고 동작 카드 4장(손톱 밑 더함)의 차례를 놓는다.' },
      activity: {
        title: '30초 동안 손 비비기', tool: 'timer',
        teacher: '"손 씻기는 비누 거품을 내서 30초 동안 비벼요. 30초가 얼마나 긴지 타이머로 재 볼까요?" 타이머를 맞춘 뒤 시작을 누르고 반 전체가 자리에서 손바닥 → 손등 → 손가락 사이 동작을 따라 한다. 10초쯤에 멈추는 학생에게 "아직 시계가 돌고 있어요. 손가락 사이도 비볐나요?"라고 묻는다. 물로만 휙 헹구면 30초가 안 되고 세균도 남는다는 것을 짚는다.',
        task: '타이머를 30초로 맞추고 손 비비는 동작을 따라 해요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          { prompt: '비비기를 30초로 맞춰요.', toolOptions: { title: '손 씻기 타이머', labels: ['비비기', '헹구기'], plan: { work: 10, rest: 10, rounds: 1 } }, target: { plan: { work: 30 } }, difficulty: 0.1,
            levels: { easy: { prompt: '25초에서 30초로 늘려요.', toolOptions: { plan: { work: 25, rest: 10, rounds: 1 } } }, challenge: { prompt: '30초 비비기를 2번 하게 맞춰요.', target: { plan: { work: 30, rounds: 2 } } } } },
          STEPS('비비는 동작을 차례로 놓아요.', '손 비비기 동작', ['손바닥', '손등', '손가락 사이'], '손톱 밑', 0.15),
          SELFT('30초 비비기 해 본 것에 표시해요.', '30초 비비기 점검', ['30초 동안 비볐어요', '손등도 비볐어요', '손가락 사이도 했어요', '손톱 밑도 했어요'], 0.15,
            { conclude: '비누 거품을 내서 손바닥·손등·손가락 사이를 30초 동안 비벼요.' }),
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 수를 써요.', text: '비누 거품을 내서 ___초 동안 비벼요.', answer: '30' }] },
    }),
    WASH({
      id: 'start.e12.wash.activity.order', type: 'activity', title: '손 씻기 세 단계 놓기',
      method: '손 씻기 세 단계 놓기', tool: 'story', minutes: 13,
      levels: { easy: '첫 장면이 놓여 있어 남은 두 장면만 놓고, 놓으면 바로 맞는지 알려 준다.', base: '장면 세 장을 차례대로 놓고 깨끗해지는 씻기를 고른다.', challenge: '카드가 섞여 나오고, 놓은 차례를 짝에게 말로 설명한다.' },
      activity: {
        title: '손 씻기 장면 차례 놓기', tool: 'story',
        teacher: '"손을 씻을 때 무엇부터 할까요? 물 묻히기, 비누 거품, 헹구기!" 카드를 놓은 뒤 반 전체가 자리에서 동작으로 따라 한다. 비누 거품을 맨 끝에 두는 학생에게 "거품을 내고 안 헹구면 손이 어떻게 될까요?"라고 묻는다. 셋째 문항에서 "물로만 휙"을 고른 학생에게 물만으로는 세균이 남는다는 것을 짚는다. 마지막에 짝에게 차례를 말로 들려준다.',
        task: '손 씻기 장면 카드를 차례대로 놓아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          ORDER3('손 씻는 세 단계를 놓아요.', [C('wet', '물 묻혀요'), C('soap', '비누 거품'), C('rinse', '물로 헹궈요')], null, 0.1),
          ORDER3('수도꼭지 쓰는 차례예요.', [C('on', '물 틀어요'), C('w', '손 씻어요'), C('off', '물 잠가요')], null, 0.15),
          { prompt: '깨끗해지는 씻기를 골라요.', toolOptions: { mode: 'pick', basket: '깨끗한 씻기', cards: [C('water', '물로만 휙'), C('bubble', '비누로 뽀득'), C('cloth', '옷에 쓱')] }, target: { pick: ['bubble'] }, difficulty: 0.2,
            levels: { easy: { prompt: '둘 가운데 깨끗한 씻기는?', toolOptions: { cards: [C('water', '물로만 휙'), C('bubble', '비누로 뽀득')] } } } },
          TALK('씻는 차례를 짝에게 말해요.', { conclude: '물 묻히고, 비누 거품 내고, 헹궈요. 물만으로는 깨끗해지지 않아요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '물로만 헹군 손은?', options: ['깨끗해요', '비누로 다시 씻어요'], answer: '비누로 다시 씻어요' }] },
    }),
    WASH({
      id: 'start.e12.wash.activity.real', type: 'activity', title: '세면대에서 손 씻어 보기',
      method: '세면대에서 실제로 손 씻기', tool: 'timer', minutes: 14,
      levels: { easy: '선생님과 함께 세면대에 가서 씻고, 차례 카드 2장·점검 2칸을 한다.', base: '스스로 씻고 차례 카드 3장·점검 3칸을 한다.', challenge: '차례 카드 4장을 맞추고, 다 씻은 뒤 친구 비누 거품을 도와준 것까지 점검 4칸을 한다.' },
      activity: {
        title: '세면대에서 진짜 손 씻기', tool: 'timer',
        teacher: '"이제 진짜 세면대에서 씻어 봐요. 줄을 서서 차례로, 바닥에 물이 튀지 않게!" 교사가 모둠별로 세면대에 데려가 첫 번째 학생과 함께 30초를 세며 씻는 모습을 보인다. 물을 튼 채로 비누를 비비는 학생에게 "비비는 동안 물을 잠그면 물을 아낄 수 있어요"라고 말해 준다. 교실로 돌아와 점검 칸에 표시하고, 손을 옷에 닦지 않고 손수건·종이 수건으로 말린다는 것을 짚는다.',
        task: '씻는 차례를 놓고, 세면대에서 씻은 뒤 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          STEPS('세면대 가는 차례로 놓아요.', '세면대 차례', ['줄 서기', '손 씻기', '손 말리기'], '자리로 오기', 0.1),
          SAFE('세면대 약속에 표시해요.', '세면대 약속', ['줄 서서 기다렸어요', '물 튀지 않게 했어요', '물을 잠갔어요', '친구를 도왔어요'], 0.15),
          SELFT('진짜 손 씻기 한 것에 표시해요.', '진짜 손 씻기 점검', ['비누 거품 냈어요', '30초 비볐어요', '손을 말렸어요', '친구를 도왔어요'], 0.15,
            { conclude: '줄 서서, 비누로 30초, 손을 말리고 돌아와요.' }),
        ],
      },
      worksheet: { items: [{ type: 'check', prompt: '오늘 세면대에서 한 것에 ✓ 해요.', options: ['비누 거품 내기', '30초 비비기', '물 잠그기', '손 말리기'] }] },
      notes: '모둠별로 나눠 가고, 남은 모둠은 교실에서 타이머로 30초 비비기 동작을 연습한다. 손을 다친 학생은 동작만 함께 한다.',
    }),
    WASH({
      id: 'start.e12.wash.activity.sort', type: 'activity', title: '깨끗한 손·씻어야 할 손',
      method: '깨끗한 손·씻어야 할 손 나누기', tool: 'sortboard', minutes: 13,
      levels: { easy: '카드 4장, 틀린 바구니에 넣으면 까닭을 말하고 돌아온다.', base: '카드 6장을 다 넣은 뒤 확인한다.', challenge: '카드 8장("물로만 헹군 손"처럼 헷갈리는 카드)을 나누고, 셋째 문항에서 까닭을 말한다.' },
      activity: {
        title: '손 씻을 때 나누기', tool: 'sortboard',
        teacher: '"이 손은 깨끗한 손일까요, 씻어야 할 손일까요?" 카드를 소리 내어 읽고 넣게 한다. "물로만 헹군 손"을 깨끗한 손에 넣는 학생에게 "비누 없이 물로만 헹구면 손가락 사이 세균은 어떻게 될까요?"라고 묻는다. 셋째 문항에서는 바구니에 넣은 까닭을 "왜냐하면 ○○했으니까"로 말해 보게 한다.',
        task: '손 카드를 깨끗한 손·씻어야 할 손 바구니에 넣어요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
        items: [
          SB2(['깨끗한 손', '씻어야 할 손'], '손을 두 바구니에 나누어요.', ['방금 씻은 손', '비누로 씻은 손', '말린 손'], ['흙 놀이 뒤', '화장실 뒤', '코 푼 뒤'], ['물로만 헹군 손', '밥 먹기 전'], true, 0.1),
          SB2(['괜찮아요', '지금 씻어요'], '지금 씻을지 나누어요.', ['그림 그리는 중', '노래하는 중', '책 보는 중'], ['동물 만진 뒤', '재채기한 뒤', '바깥 놀이 뒤'], ['기침 막은 손', '급식 먹기 전'], true, 0.15),
          TALK('바구니에 넣은 까닭을 말해요.', { levels: { easy: { prompt: '선생님과 까닭을 말해요.' } }, conclude: '밥 먹기 전, 화장실과 바깥 놀이 뒤, 코 푼 뒤에는 비누로 씻어요.' }),
        ],
      },
      worksheet: { items: [{ type: 'table', prompt: '씻어야 하면 ○, 괜찮으면 ×를 써요.', columns: ['때', '○ / ×'], cells: [['흙 놀이 뒤', ''], ['노래하는 중', ''], ['밥 먹기 전', '']], answer: '○, ×, ○' }] },
    }),
    WASH({
      id: 'start.e12.wash.wrap.song', type: 'wrap', title: '"뽀득뽀득 30초" 구호',
      method: '손 씻기 구호와 동작', tool: 'timer', minutes: 7,
      levels: { easy: '구호 없이 손 비비는 동작만 교사와 함께 한다.', base: '구호 카드 차례를 맞추고 구호와 동작을 함께 한다.', challenge: '교사 없이 혼자 구호에 맞춰 30초 동작을 해 보인다.' },
      wrap: {
        teacher: '"뽀득뽀득! (손바닥 비비기) 30초! (손가락 세 개 펴기) 깨끗해요! (두 손 펴 보이기)" 구호 카드 차례를 맞춘 뒤 반 전체가 동작과 함께 외친다. 출구 2번에서 물로만 헹군다고 고른 학생에게 "비누 거품이 세균을 감싸서 씻어 내요"라고 말해 준다. 오늘 점심 먹기 전에 배운 대로 씻어 보자고 약속한다.',
        exitTicket: [
          CHANT('손 씻기 구호', ['뽀득뽀득', '30초', '깨끗해요']),
          Q('물로만 헹군 손은요?', ['깨끗해요', '비누로 씻어요'], 1, '물만으로는 세균이 남아요. 비누로 씻어요.'),
          MOOD,
        ],
      },
      worksheet: {
        title: '뽀득뽀득 30초',
        items: [
          { type: 'blank', prompt: '구호를 따라 써요.', text: '뽀득뽀득 ___초!', answer: '30' },
          { type: 'draw', prompt: '비누 거품으로 손을 비비는 모습을 그려요.' },
        ],
      },
    }),
    WASH({
      id: 'start.e12.wash.wrap.promise', type: 'wrap', title: '손 씻는 때 약속 고르기',
      method: '손 씻는 때 약속 고르기', tool: 'emotion', minutes: 7,
      levels: { easy: '교사가 보기 셋을 읽어 주고 손 씻을 때 하나를 함께 고른다.', base: '손 씻을 때 두 가지를 골라 오늘부터 지킬 약속으로 정한다.', challenge: '학교에서 지킬 때에 더해 집에서도 씻을 때를 하나 쓴다.' },
      wrap: {
        teacher: '"오늘부터 꼭 손을 씻을 때는 언제일까요? 두 가지를 골라 약속해요." 카드를 읽어 주고 고른 뒤 손가락을 걸어 약속한다. "그림 그릴 때"를 고른 학생에게 "그림 그릴 때도 손이 깨끗하면 좋지만, 꼭 씻어야 할 때는 언제였지요?"라고 묻는다. 집에서도 씻을 때를 쓰게 하되 집안 형편이나 가족 일은 묻지 않는다.',
        exitTicket: [
          { type: 'tool', tool: 'emotion', options: { mode: 'pick', basket: '손 씻는 약속', weather: false, cards: [C('meal', '밥 먹기 전'), C('draw', '그림 그릴 때'), C('toilet', '화장실 뒤')] }, prompt: '꼭 손 씻을 때를 골라요.', target: { pick: ['meal', 'toilet'] }, difficulty: 0.1 },
          Q('손은 몇 초 동안 비벼요?', ['3초', '30초'], 1, '비누 거품을 내서 30초 동안 비벼요.'),
          { type: 'short', prompt: '집에서도 손 씻을 때를 써요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '손 씻기 약속',
        items: [
          { type: 'check', prompt: '내가 지킬 손 씻기 약속에 ✓ 해요.', options: ['밥 먹기 전에 씻어요', '화장실 다녀와서 씻어요', '비누로 30초 비벼요'] },
          { type: 'draw', prompt: '약속을 지키는 내 모습을 그려요.' },
        ],
      },
    }),
  ];

  // =====================================================================================================
  // 수업 시간과 쉬는 시간 (학교 이해) — 시각·초는 가상 학교 새싹초의 '우리 반 약속'
  const BELL = MOD('start.e12.bell');
  const T_BELL = [
    BELL({
      id: 'start.e12.bell.intro.sound', type: 'intro', title: '종소리 듣고 손 머리 위',
      method: '종소리 듣고 손 머리 위 올리기', tool: 'timer', minutes: 6,
      levels: { easy: '교사가 종을 한 번 울리면 두 손을 머리 위에 올린다.', base: '종을 두 번(시작·끝) 울리며 정해 둔 동작을 차례로 한다.', challenge: '종소리와 손뼉·호루라기 소리를 섞어 들려주면 종소리에만 동작을 한다.' },
      intro: {
        teacher: '"딩동댕! 이 소리가 들리면 하던 것을 멈추고 두 손을 머리 위에 올려요." 교사가 종(또는 학교 종소리)을 들려주고 반 전체가 동작을 해 본다. 시연 단추로 동작 차례 카드(종소리 듣기 → 손 머리 위 → 입 쉿)가 놓이는 모습을 보인다. "종이 쳐도 하던 놀이는 끝까지 해요"라는 말이 나오면 "종이 치면 다음 공부가 시작돼요. 놀이가 길어지면 친구들이 누구를 기다리게 될까요?"라고 되묻는다.',
        student: '종소리가 들리면 멈추고 두 손을 머리 위에 올려 보아요.',
        demo: { tool: 'timer', options: { title: '종소리 동작', cards: ['입 쉿', '종소리 듣기', '손 머리 위'] }, sequence: [{ order: ['종소리 듣기', '손 머리 위', '입 쉿'] }] },
        art: { draw: 'a paper school bell ringing with cut-paper sound lines, paper first graders freezing mid-play with both hands on their heads', banner: '딩동댕, 멈춰요' },
      },
    }),
    BELL({
      id: 'start.e12.bell.intro.clock', type: 'intro', title: '시계 그림에서 9시 보기',
      method: '시계 그림 정각 보기', tool: 'clock', minutes: 6,
      levels: { easy: '교사가 9시·3시 두 시계 그림을 나란히 보이고 9시를 고르게 한다.', base: '시계 그림 세 개 가운데 9시를 고르는 시연을 본다.', challenge: '시연을 본 뒤 교사가 든 종이 시계의 바늘을 9시로 맞춰 본다.' },
      intro: {
        teacher: '"새싹초는 9시에 첫째 시간 종이 울려요. 짧은바늘이 9, 긴바늘이 12를 가리키면 9시예요." 시연 단추로 시계 바늘이 9시에 맞춰지는 모습을 보인다. "긴바늘이 9에 있으면 9시예요"라는 말이 나오면 "짧은바늘과 긴바늘 가운데 몇 시를 알려 주는 건 어느 바늘일까요?"라고 되묻는다. 우리 학교 첫 시간 시각은 교사가 실제 시간표대로 말해 준다.',
        student: '짧은바늘이 9, 긴바늘이 12에 있는 시계를 찾아보아요.',
        demo: { tool: 'clock', options: { hourOnly: true, showDigital: false }, sequence: [{ h: 9, m: 0 }] },
        art: { draw: 'a large cut-paper wall clock showing nine o clock above a classroom door, paper children walking in to sit down', banner: '9시, 공부 시작' },
      },
      notes: '9시는 가상 학교의 시각이다. 우리 학교 일과표 시각으로 바꿔 말해 준다.',
    }),
    BELL({
      id: 'start.e12.bell.activity.sort', type: 'activity', title: '수업 시간·쉬는 시간 할 일',
      method: '수업 시간·쉬는 시간 할 일 나누기', tool: 'sortboard', minutes: 14,
      levels: { easy: '카드 4장, 틀린 바구니에 넣으면 까닭을 말하고 돌아온다.', base: '카드 6장을 다 넣은 뒤 확인한다.', challenge: '카드 8장("다음 시간 준비"처럼 헷갈리는 카드)을 나누고, 두 시간에 다 하는 일이 있는지 셋째 문항에서 말한다.' },
      activity: {
        title: '두 시간에 할 일 나누기', tool: 'sortboard',
        teacher: '"이 일은 수업 시간에 할까요, 쉬는 시간에 할까요?" 카드를 소리 내어 읽고 넣게 한다. "다음 시간 준비"를 수업 시간에 넣는 학생에게 "종이 친 다음에 책을 찾으면 공부가 늦게 시작되지 않을까요?"라고 묻는다. 쉬는 시간은 놀기도 하지만 화장실·물 마시기·다음 책 꺼내기를 하는 시간이라는 것을 짚는다. 셋째 문항에서는 두 시간 모두 하는 일(예: 친구에게 고운 말)을 찾아 말해 본다.',
        task: '할 일 카드를 수업 시간·쉬는 시간 바구니에 넣어요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
        items: [
          SB2(['수업 시간', '쉬는 시간'], '할 일을 두 시간으로 나누어요.', ['책 펴기', '선생님 말 듣기', '손 들고 말하기'], ['화장실 가기', '물 마시기', '기지개 켜기'], ['다음 시간 준비', '물통 채우기'], true, 0.1),
          SB2(['수업 시간', '쉬는 시간'], '이 일은 언제 할까요? 나누어요.', ['받아쓰기', '그림 그리기', '짝과 읽기'], ['친구와 놀기', '복도 걷기', '책상 정리'], ['교과서 펴 두기', '연필 깎기'], true, 0.15),
          TALK('두 시간에 다 하는 일을 말해요.', { levels: { easy: { prompt: '선생님과 쉬는 시간 할 일을 말해요.' } }, conclude: '쉬는 시간에는 놀기도 하고, 화장실·물·다음 책 준비도 해요.' }),
        ],
      },
      worksheet: { items: [{ type: 'table', prompt: '쉬는 시간에 할 일에 ○ 해요.', columns: ['할 일', '○'], cells: [['화장실 가기', ''], ['받아쓰기', ''], ['다음 책 꺼내기', '']], answer: '○, , ○' }] },
      notes: '계획의 도전 "둘 다인 것 찾기"는 카드 한 장의 정답 바구니가 하나라 화면에서 하지 않고 셋째 말하기 문항으로 한다.',
    }),
    BELL({
      id: 'start.e12.bell.activity.ready', type: 'activity', title: '다음 시간 준비 차례 놓기',
      method: '다음 시간 준비 차례 놓기', tool: 'story', minutes: 13,
      levels: { easy: '첫 장면이 놓여 있어 남은 두 장면만 놓고, 놓으면 바로 맞는지 알려 준다.', base: '장면 세 장을 차례대로 놓고 쉬는 시간에 꼭 할 일을 고른다.', challenge: '틀린 장면 한 장이 섞여 있어 빼고 놓고, 그 차례인 까닭을 짝에게 말한다.' },
      activity: {
        title: '쉬는 시간 준비 장면 놓기', tool: 'story',
        teacher: '"쉬는 시간이 끝나기 전에 무엇을 해 두면 좋을까요?" 화장실 → 책 꺼내기 → 자리 앉기 차례를 함께 놓고, 놓은 차례대로 몸으로 따라 한다. 자리에 먼저 앉고 화장실을 가는 학생에게 "앉고 나서 종이 친 뒤 화장실에 가면 공부 시간이 어떻게 될까요?"라고 묻는다. 마지막 문항에서 그 차례인 까닭을 짝에게 말하게 한다.',
        task: '다음 시간 준비 장면을 차례대로 놓아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          ORDER3('다음 시간 준비 차례예요.', [C('wc', '화장실 가요'), C('book', '책 꺼내요'), C('seat', '자리에 앉아요')], C('late', '종 친 뒤 놀아요'), 0.1),
          ORDER3('종이 울렸어요. 차례로 놓아요.', [C('stop', '놀이 멈춰요'), C('walk', '교실로 걸어요'), C('sit', '자리에 앉아요')], C('more', '계속 놀아요'), 0.15),
          { prompt: '쉬는 시간에 꼭 할 일은?', toolOptions: { mode: 'pick', basket: '꼭 할 일', cards: [C('next', '다음 책 꺼내기'), C('play', '종까지 놀기만'), C('none', '아무것도 안 해요')] }, target: { pick: ['next'] }, difficulty: 0.2,
            levels: { easy: { prompt: '둘 가운데 꼭 할 일은?', toolOptions: { cards: [C('next', '다음 책 꺼내기'), C('none', '아무것도 안 해요')] } } } },
          TALK('왜 그 차례인지 짝에게 말해요.', { conclude: '쉬는 시간에 화장실·책 준비를 해 두면 종이 쳐도 바로 공부할 수 있어요.' }),
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '쉬는 시간에 다음 시간 ___을 꺼내 둬요.', answer: '책' }] },
    }),
    BELL({
      id: 'start.e12.bell.activity.play', type: 'activity', title: '쉬는 시간 놀이 고르기',
      method: '쉬는 시간 놀이 고르고 결과 보기', tool: 'emotion', minutes: 14,
      levels: { easy: '보기 2개 가운데 고르고, 고르면 결과 그림이 바로 보인다.', base: '보기 3개 가운데 고르고 결과는 확인한 뒤에 보인다.', challenge: '고른 뒤 종이 울린 다음 장면이 이어지고, 그 장면에서 한 번 더 고른다.' },
      activity: {
        title: '쉬는 시간 장면 고르기', tool: 'emotion',
        teacher: '"쉬는 시간이에요. 교실에서 무엇을 하고 놀면 좋을까요?" 장면을 읽어 주고 고르기 전에 반 전체가 손가락으로 보기를 가리켜 보게 한다. 술래잡기를 고른 학생에게 "교실은 책상이 많아요. 뛰다가 모서리에 부딪히면 어떻게 될까요?"라고 묻는다. 교실에서는 조용한 놀이, 뛰는 놀이는 선생님과 정한 때 운동장에서 한다는 것을 짚는다.',
        task: '쉬는 시간 장면을 듣고 할 일을 골라요.', levels: { easy: {}, base: { revealAfterCheck: true }, challenge: { revealAfterCheck: true } },
        items: [
          BR('쉬는 시간 교실, 무엇을 해요?', '쉬는 시간, 교실 안이에요.', CH('quiet', '조용히 블록 놀이', '친구와 즐겁게 놀았어요.', '신남'),
            [CH('tag', '술래잡기해요', '책상에 부딪힐 수 있어요.', '걱정', '교실에서는 뛰지 않아요.'), CH('shout', '소리 질러요', '옆 친구가 깜짝 놀라요.', '놀람', '교실에서는 작은 목소리로 놀아요.')],
            { prompt: '블록 놀이 중 종이 울렸어요.', situation: '블록 놀이 중 종이 울렸어요.', good: 'tidy', choices: [CH('tidy', '같이 치워요', '금방 정리하고 앉았어요.', '뿌듯함'), CH('leave', '친구에게 맡겨요', '친구 혼자 치워요.', '속상함', '함께 논 것은 함께 치워요.')] }, 0.1),
          BR('친구가 놀자 해요. 어떻게 해요?', '친구가 "같이 놀자" 해요.', CH('yes', '"좋아, 뭐 할까?"', '함께 놀 거리를 정했어요.', '기쁨'),
            [CH('ignore', '대답 안 해요', '친구가 시무룩해요.', '속상함', '친구가 말하면 대답해요.'), CH('away', '혼자 가 버려요', '친구가 혼자 남았어요.', '슬픔', '싫으면 "다음에 하자"라고 말해요.')],
            { prompt: '놀이를 고를 때 어떻게 해요?', situation: '둘이 하고 싶은 놀이가 달라요.', good: 'turn', choices: [CH('turn', '번갈아 해요', '두 놀이를 다 했어요.', '신남'), CH('mine', '내 것만 해요', '친구가 속상해요.', '속상함', '번갈아 하면 둘 다 즐거워요.')] }, 0.15),
          BR('쉬는 시간이 끝나 가요.', '쉬는 시간이 조금 남았어요.', CH('ready', '다음 책 꺼내요', '종이 쳐도 바로 공부해요.', '편안함'),
            [CH('more', '더 놀아요', '종이 친 뒤 허둥지둥해요.', '걱정', '끝나기 전에 준비해요.'), CH('out', '밖으로 나가요', '늦게 들어와요.', '걱정', '쉬는 시간이 끝나 가면 교실에 있어요.')],
            { prompt: '종이 울렸어요. 이제는요?', situation: '딩동댕, 종이 울렸어요.', good: 'sit', choices: [CH('sit', '자리에 앉아요', '선생님이 웃으며 시작하셨어요.', '뿌듯함'), CH('stand', '복도에 서 있어요', '공부가 늦게 시작돼요.', '걱정', '종이 울리면 자리에 앉아요.')] }, 0.2,
            { conclude: '교실에서는 조용히 놀고, 끝나기 전에 준비하고, 종이 울리면 앉아요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '쉬는 시간 교실에서는?', options: ['조용히 놀아요', '술래잡기해요'], answer: '조용히 놀아요' }] },
    }),
    BELL({
      id: 'start.e12.bell.activity.drill', type: 'activity', title: '종 치면 자리에 앉기 연습',
      method: '종 치면 자리에 앉기 연습', tool: 'timer', minutes: 13,
      levels: { easy: '놀이 시간만 맞추고, 앉기까지 걸린 초는 한 번만 적는다.', base: '놀이·앉기 시간과 2번을 맞추고, 걸린 초를 두 번 적는다.', challenge: '3번을 맞추고 걸린 초를 세 번 적어 점점 빨라졌는지 본다.' },
      activity: {
        title: '종소리 앉기 연습', tool: 'timer',
        teacher: '"자리에서 일어나 조용히 놀이를 해요. 종이 울리면 걸어서 자리에 앉아요. 몇 초 걸리는지 재 볼까요?" 타이머를 맞춘 뒤 교실 안에서 짧게 연습하고, 앉기까지 걸린 초를 함께 센다(우리 반 약속 값이며 빨리 앉기 시합이 아니다). 뛰어서 앉는 학생에게 "빨리보다 안전하게! 걸어서 앉아도 충분해요"라고 말한다. 마지막에 점검 칸에 표시한다.',
        task: '놀이·앉기 시간을 맞추고, 연습한 뒤 걸린 초를 적어요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          { prompt: '놀이 20초, 앉기 10초로 맞춰요.', toolOptions: { title: '종소리 연습(우리 반 약속)', labels: ['놀이', '앉기'], plan: { work: 10, rest: 5, rounds: 1 } }, target: { plan: { work: 20, rest: 10, rounds: 2 } }, difficulty: 0.1,
            levels: { easy: { prompt: '놀이를 20초로 맞춰요.', target: { plan: { work: 20 } } }, challenge: { prompt: '20초·10초로 3번 하게 맞춰요.', target: { plan: { work: 20, rest: 10, rounds: 3 } } } } },
          { prompt: '앉기까지 걸린 초를 적어요.', toolOptions: { title: '자리에 앉기까지(초)', fields: ['1번', '2번'], stopwatch: true, unit: '초' }, target: { records: true }, difficulty: 0.15,
            levels: { easy: { prompt: '한 번 걸린 초를 적어요.', toolOptions: { fields: ['1번'] } }, challenge: { prompt: '세 번 걸린 초를 적어요.', toolOptions: { fields: ['1번', '2번', '3번'] } } } },
          SAFE('종소리 연습 약속에 표시해요.', '종소리 연습 약속', ['종소리에 멈췄어요', '걸어서 왔어요', '의자를 조용히 뺐어요', '친구와 안 부딪혔어요'], 0.15,
            { conclude: '종이 울리면 멈추고, 걸어서, 내 자리에 앉아요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '종이 울리면 어떻게 가요?', options: ['뛰어서 가요', '걸어서 가요'], answer: '걸어서 가요' }] },
    }),
    BELL({
      id: 'start.e12.bell.wrap.sun', type: 'wrap', title: '하루 시간표 조각 붙이기',
      method: '하루 시간표 그림 붙이기', tool: 'collage', minutes: 7,
      levels: { easy: '수업(파랑 네모)·쉬는(노랑 동그라미) 조각 두 칸만 붙인다.', base: '수업·쉬는 조각을 번갈아 네 칸 붙인다.', challenge: '점심시간 조각(초록 별)까지 넣어 오전 시간표를 꾸민다.' },
      wrap: {
        teacher: '"파란 네모는 수업 시간, 노란 동그라미는 쉬는 시간이에요. 하루는 어떻게 이어질까요?" 왼쪽부터 번갈아 붙이게 한 뒤, 손가락으로 짚으며 "공부, 쉬고, 공부, 쉬고"를 함께 읽는다. 쉬는 시간을 연달아 붙인 학생에게 "쉬는 시간 다음에는 무엇이 올까요?"라고 묻는다. 출구 2번에서 쉬는 시간엔 준비가 필요 없다고 고른 학생에게 다음 책 꺼내기를 짚어 준다.',
        exitTicket: [
          { type: 'tool', tool: 'collage', options: { shapes: ['square', 'circle', 'star'], colors: ['파랑', '노랑', '초록'] }, prompt: '수업·쉬는 시간 조각을 번갈아 붙여요.', target: { repeat: { times: 2, unit: 2 } }, difficulty: 0.15 },
          Q('쉬는 시간에 할 일은요?', ['아무것도 안 해요', '다음 시간 준비'], 1, '쉬는 시간에 화장실·다음 책 준비를 해요.'),
          MOOD,
        ],
      },
      worksheet: {
        title: '우리 반 하루',
        items: [
          { type: 'draw', prompt: '수업 시간과 쉬는 시간에 하는 일을 하나씩 그려요.' },
          { type: 'choice', prompt: '수업 시간 다음에 오는 것은?', options: ['쉬는 시간', '또 수업 시간'], answer: '쉬는 시간' },
        ],
      },
    }),
    BELL({
      id: 'start.e12.bell.wrap.face', type: 'wrap', title: '종이 울리면 할 일 고르기',
      method: '종소리 들으면 할 일 하나 고르기', tool: 'wordcards', minutes: 7,
      levels: { easy: '교사가 보기 두 개(자리에 앉기·계속 놀기)를 읽어 주고 함께 고른다.', base: '보기 세 개 가운데 종이 울리면 먼저 할 일을 고른다.', challenge: '먼저 할 일과 그다음 할 일을 차례로 말한다.' },
      wrap: {
        teacher: '"딩동댕! 종이 울렸어요. 맨 먼저 무엇을 할까요?" 교사가 종을 울리고 카드를 하나씩 읽어 주며 고르게 한다. 복도 뛰기를 고른 학생에게 "늦을까 봐 뛰면 누구와 부딪힐 수 있을까요?"라고 묻는다. 출구 2번은 수업 시간 다음에 오는 것을 손가락으로 함께 짚으며 고른다.',
        exitTicket: [
          PICKW('종이 울리면', [C('sit', '자리에 앉기'), C('play', '계속 놀기'), C('run', '복도 뛰기')], ['sit'], '종이 울리면 먼저 할 일은?'),
          Q('9시 종이 울리면 시작하는 것은?', ['쉬는 시간', '첫째 시간 공부'], 1, '새싹초는 9시에 첫째 시간이 시작돼요.'),
          { type: 'short', prompt: '앉은 다음 할 일을 써요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '종이 울리면',
        items: [
          { type: 'check', prompt: '종이 울리면 할 일에 ✓ 해요.', options: ['놀이 멈추기', '걸어서 오기', '자리에 앉기'] },
          { type: 'draw', prompt: '종소리를 듣고 자리에 앉는 모습을 그려요.' },
        ],
      },
    }),
  ];

  // =====================================================================================================
  // 한 줄로 서서 걷기 (기본 생활 습관)
  const LINE = MOD('start.e12.line');
  const PATH = [
    { name: '우리 교실', icon: 'school', at: [0, 0] }, { name: '계단', icon: 'dot', at: [3, 0] }, { name: '모퉁이', icon: 'dot', at: [3, 1] },
    { name: '신발장', icon: 'dot', at: [1, 2] }, { name: '운동장', icon: 'park', at: [4, 2] },
  ];
  const ROUTE = [[[0, 0], [1, 0], [2, 0], [3, 0], [3, 1], [3, 2], [4, 2]]];
  const LMAP = (prompt, place, d, more) => ({ prompt, toolOptions: { grid: [5, 3], places: PATH, title: '새싹초 운동장 가는 길' }, target: { place }, difficulty: d, ...more });
  const T_LINE = [
    LINE({
      id: 'start.e12.line.intro.pic', type: 'intro', title: '줄 선 그림 좋아요·안돼요',
      method: '줄 선 그림 좋아요·안돼요', tool: 'sortboard', minutes: 6,
      levels: { easy: '교사가 그림 두 장(바르게 선 줄·끼어든 줄)을 들고 함께 나눈다.', base: '그림 네 장이 바구니에 나뉘는 시연을 보고 까닭을 따라 말한다.', challenge: '그림 여섯 장을 보고 어디가 잘못됐는지 손가락으로 짚는다.' },
      intro: {
        teacher: '"줄 선 그림을 볼까요? 이 줄은 좋아요일까요, 안돼요일까요?" 그림 카드를 하나씩 읽어 주고 시연 단추로 바구니에 나뉘는 모습을 보인다. "빨리 온 사람은 앞에 끼어도 돼요"라는 말이 나오면 "먼저 와서 기다린 친구 마음은 어떨까요? 늦게 오면 어디에 설까요?"라고 되묻는다. 오늘은 한 줄로 서서 안전하게 걷는 법을 배운다고 밝힌다.',
        student: '바르게 선 줄 그림에는 엄지를, 아닌 그림에는 손을 흔들어 보아요.',
        demo: { tool: 'sortboard', options: { slots: OKNO, cards: ['앞사람 봐요', '끼어들어요', '팔 하나 간격', '밀어요'] }, sequence: [{ sort: { 좋아요: ['앞사람 봐요', '팔 하나 간격'], 안돼요: ['끼어들어요', '밀어요'] } }] },
        art: { draw: 'two paper lines of first graders side by side, one neat line with even spacing, one messy line where a child cuts in front, a paper teacher pointing', banner: '어느 줄이 바를까?' },
      },
    }),
    LINE({
      id: 'start.e12.line.intro.arm', type: 'intro', title: '팔 하나 간격 재 보기',
      method: '팔 하나 간격 재기', tool: 'body', minutes: 6,
      levels: { easy: '종이 팔이 쭉 펴지는 시연만 보고 "이만큼"을 따라 말한다.', base: '시연을 본 뒤 자기 팔을 앞으로 펴서 앞사람 어깨에 닿지 않게 간격을 맞춘다.', challenge: '팔 하나 간격이 왜 필요한지 "부딪히지 않게" 같은 말로 설명한다.' },
      intro: {
        teacher: '"줄을 설 때 앞사람과 얼마나 떨어질까요? 팔을 쭉 펴 보면 알 수 있어요." 시연 단추로 굽힌 종이 팔이 쭉 펴지는 모습을 보인 뒤, 짝과 앞뒤로 서서 팔을 펴 보고 앞사람 등에 손끝이 닿지 않을 만큼 떨어지게 한다. "딱 붙어 서야 줄이 짧아요"라는 말이 나오면 "앞사람이 멈추면 붙어 있던 나는 어떻게 될까요?"라고 되묻는다.',
        student: '팔을 앞으로 쭉 펴서 앞사람과 팔 하나만큼 떨어져 보아요.',
        demo: { tool: 'body', options: { mode: 'arm', start: { angle: 120 } }, sequence: [{ bent: false }] },
        art: { draw: 'a line of paper children each stretching one arm forward to measure an arm length gap from the child in front, cut-paper arrows between them', banner: '팔 하나만큼!' },
      },
      notes: '종이 몸은 팔 굽히기·펴기만 보여 준다. 간격은 학생이 자기 팔로 잰다.',
    }),
    LINE({
      id: 'start.e12.line.intro.train', type: 'intro', title: '"칙칙폭폭 한 줄로" 구호',
      method: '기차 놀이 노래 대신 구호', tool: 'timer', minutes: 6,
      levels: { easy: '자리에 서서 구호에 맞춰 제자리 걷기만 한다.', base: '구호에 맞춰 앞으로 세 걸음 걸었다 멈춘다.', challenge: '짝과 앞뒤로 서서 기차처럼 구호에 맞춰 함께 걷고 멈춘다.' },
      intro: {
        teacher: '"우리는 기차예요. 칙칙폭폭! 한 줄로! 출발!" 교사가 기관사가 되어 구호를 외치면 반 전체가 제자리 걷기를 하고, "정거장!" 하면 멈춘다. 시연 단추로 구호 카드 차례가 놓이는 모습을 보인다. 앞 칸 친구를 미는 학생에게 "기차 칸이 앞 칸을 밀면 기차가 어떻게 될까요?"라고 되묻는다.',
        student: '"칙칙폭폭, 한 줄로, 출발!"에 맞춰 제자리에서 걸어 보아요.',
        demo: { tool: 'timer', options: { title: '기차 구호', cards: ['출발!', '칙칙폭폭', '한 줄로'] }, sequence: [{ order: ['칙칙폭폭', '한 줄로', '출발!'] }] },
        art: { draw: 'paper first graders walking in a single file like train cars, the front child wearing a paper conductor hat, puffs of paper steam above', banner: '칙칙폭폭, 한 줄로' },
      },
    }),
    LINE({
      id: 'start.e12.line.activity.practice', type: 'activity', title: '교실에서 한 줄 서기 연습',
      method: '교실에서 한 줄 서기 연습', tool: 'timer', minutes: 14,
      levels: { easy: '선생님이 서는 자리를 잡아 주고, 점검 2칸과 차례 카드 2장을 한다.', base: '번호를 듣고 스스로 줄을 선 뒤 점검 3칸과 차례 카드 3장을 한다.', challenge: '줄 반장이 되어 친구들 간격을 봐 주고 점검 4칸과 차례 카드 4장을 한다.' },
      activity: {
        title: '번호대로 한 줄 서기', tool: 'timer',
        teacher: '"선생님이 번호를 부르면 교실 뒤쪽에 한 줄로 서요. 1번부터!" 번호대로 서게 한 뒤 팔을 펴 간격을 맞추고 점검 칸에 표시한다. 친구와 이야기하느라 줄이 휘는 학생에게 "앞사람 뒤통수를 보면 줄이 곧아져요"라고 말한다. 줄 반장은 "앞으로 나란히!" 하고 줄을 봐 주는 사람이지 친구를 미는 사람이 아니라고 짚는다.',
        task: '줄 서는 차례를 놓고, 한 줄로 서 본 뒤 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          STEPS('줄 서는 차례로 놓아요.', '줄 서기 차례', ['번호 듣기', '내 자리 서기', '앞사람 보기'], '팔 펴서 간격', 0.1),
          SAFE('줄 서기 점검에 표시해요.', '줄 서기 점검', ['앞사람 보고 섰어요', '팔 하나 떨어졌어요', '끼어들지 않았어요', '줄 반장을 했어요'], 0.15),
          TALK('줄 반장처럼 줄을 봐 줘요.', { levels: { easy: { prompt: '선생님과 함께 줄을 서요.' } }, conclude: '번호대로, 앞사람 보고, 팔 하나만큼 떨어져 서요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '앞사람과 얼마나 떨어져 서요?', options: ['딱 붙어서', '팔 하나만큼'], answer: '팔 하나만큼' }] },
    }),
    LINE({
      id: 'start.e12.line.activity.hall', type: 'activity', title: '줄 서서 복도 가는 장면 고르기',
      method: '복도 걷기 장면 고르고 결과 보기', tool: 'emotion', minutes: 13,
      levels: { easy: '보기 2개 가운데 고르고, 고르면 결과 그림이 바로 보인다.', base: '보기 3개 가운데 고르고 결과는 확인한 뒤에 보인다.', challenge: '고른 뒤 이어지는 다음 장면에서 한 번 더 고른다.' },
      activity: {
        title: '줄 서서 이동할 때 고르기', tool: 'emotion',
        teacher: '"우리 반이 줄 서서 복도를 가요. 이럴 때 어떻게 할까요?" 장면을 읽어 주고 고르기 전에 반 전체가 손가락으로 보기를 가리켜 보게 한다. 앞질러 뛰는 쪽을 고른 학생에게 "줄에서 혼자 뛰어 나가면 앞사람과 뒷사람은 어떻게 될까요?"라고 묻는다. 친구가 끼어들 때는 밀지 않고 "뒤에 서 줘"라고 말로 알린다는 것을 짚는다.',
        task: '줄 서서 가는 장면을 듣고 할 일을 골라요.', levels: { easy: {}, base: { revealAfterCheck: true }, challenge: { revealAfterCheck: true } },
        items: [
          BR('줄 서서 복도를 가요. 어떻게 해요?', '줄 서서 복도를 가요.', CH('follow', '앞사람 따라 걸어요', '모두 안전하게 도착했어요.', '뿌듯함'),
            [CH('dash', '앞질러 뛰어요', '앞사람과 부딪혔어요.', '놀람', '줄에서는 앞지르지 않아요.'), CH('turn', '뒤돌아 장난쳐요', '줄이 끊어졌어요.', '걱정', '앞을 보고 걸어요.')],
            { prompt: '앞사람이 멈췄어요. 이제는요?', situation: '앞사람이 갑자기 멈췄어요.', good: 'stop', choices: [CH('stop', '나도 멈춰요', '부딪히지 않았어요.', '편안함'), CH('push', '밀고 가요', '앞사람이 넘어질 수 있어요.', '걱정', '앞사람이 멈추면 나도 멈춰요.')] }, 0.1),
          BR('줄과 멀어졌어요. 어떻게 해요?', '신발 끈 묶다 줄과 멀어졌어요.', CH('walk', '걸어서 따라가요', '줄 끝에 다시 섰어요.', '편안함'),
            [CH('run', '뛰어서 따라가요', '복도에서 미끄러질 수 있어요.', '걱정', '멀어져도 걸어서 따라가요.'), CH('other', '혼자 다른 길로', '길을 잃을 수 있어요.', '무서움', '줄이 간 길로 따라가요.')],
            { prompt: '모퉁이가 나왔어요. 어떻게 돌아요?', situation: '복도 모퉁이가 나왔어요.', good: 'slow', choices: [CH('slow', '천천히 돌아요', '반대쪽 친구를 보고 비켰어요.', '편안함'), CH('fast', '빨리 돌아요', '반대쪽 친구와 부딪혔어요.', '놀람', '모퉁이에서는 천천히 돌아요.')] }, 0.15),
          BR('친구가 끼어들어요. 어떻게 해요?', '친구가 내 앞에 끼어들어요.', CH('say', '"뒤에 서 줘" 해요', '친구가 맨 뒤로 갔어요.', '편안함'),
            [CH('shove', '밀어내요', '둘 다 넘어질 수 있어요.', '걱정', '밀지 말고 말로 알려요.'), CH('yell', '소리 질러요', '친구가 깜짝 놀라요.', '놀람', '작은 목소리로 또박또박 말해요.')],
            { prompt: '친구가 뒤로 갔어요. 이제는요?', situation: '친구가 줄 맨 뒤로 갔어요.', good: 'thanks', choices: [CH('thanks', '"고마워" 해요', '친구도 웃었어요.', '고마움'), CH('tease', '흉을 봐요', '친구가 속상해요.', '속상함', '바꿔 준 친구에게 고맙다고 해요.')] }, 0.2,
            { conclude: '줄에서는 앞사람 따라 걷고, 멈추면 멈추고, 끼어들면 말로 알려요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '친구가 줄에 끼어들면?', options: ['밀어내요', '"뒤에 서 줘" 말해요'], answer: '"뒤에 서 줘" 말해요' }] },
    }),
    LINE({
      id: 'start.e12.line.activity.order', type: 'activity', title: '줄 서서 나가는 차례 놓기',
      method: '줄 서서 나가는 차례 놓기', tool: 'story', minutes: 14,
      levels: { easy: '첫 장면이 놓여 있어 남은 두 장면만 놓고, 놓으면 바로 맞는지 알려 준다.', base: '장면 세 장을 차례대로 놓는다.', challenge: '"먼저 달려요" 같은 틀린 장면 한 장이 섞여 있어 빼고 놓는다.' },
      activity: {
        title: '줄 서서 나가는 장면 놓기', tool: 'story',
        teacher: '"운동장에 나가려고 해요. 의자 넣기, 줄 서기, 걸어 나가기 — 무엇부터 할까요?" 카드를 놓은 뒤 놓은 차례대로 몸으로 따라 한다. 줄을 서기 전에 문으로 가는 학생에게 "다 같이 문으로 가면 문 앞이 어떻게 될까요?"라고 묻는다. 돌아올 때도 운동장에서 먼저 줄을 서고 실내화로 갈아 신는다는 것을 짚는다.',
        task: '줄 서서 나가는 장면 카드를 차례대로 놓아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          ORDER3('줄 서서 나가는 차례예요.', [C('chair', '의자 넣어요'), C('line', '줄을 서요'), C('go', '걸어 나가요')], C('rush', '먼저 달려요'), 0.1),
          ORDER3('운동장 가는 차례예요.', [C('l2', '줄을 서요'), C('hall', '복도 걸어요'), C('shoe', '신발 바꿔 신어요')], C('slip', '실내화로 나가요'), 0.15),
          ORDER3('교실로 돌아올 때예요.', [C('yard', '운동장 줄 서요'), C('in', '실내화 신어요'), C('seat', '교실에 앉아요')], C('mud', '흙발로 들어와요'), 0.2,
            { conclude: '의자 넣고, 줄 서고, 걸어서 — 갈 때도 올 때도 줄을 서요.' }),
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '의자를 넣고, ___을 서고, 걸어 나가요.', answer: '줄' }] },
    }),
    LINE({
      id: 'start.e12.line.activity.walk', type: 'activity', title: '선생님과 복도 한 바퀴',
      method: '교사와 복도 한 바퀴 걷기', tool: 'timer', minutes: 13,
      levels: { easy: '짧은 길(교실 앞 복도)만 걷고 차례 카드 2장·점검 2칸을 한다.', base: '복도 한 바퀴를 걷고 차례 카드 3장·점검 3칸을 한다.', challenge: '계단까지 다녀와 차례 카드 4장·점검 4칸을 한다.' },
      activity: {
        title: '줄 서서 복도 걸어 보기', tool: 'timer',
        teacher: '"선생님 뒤로 한 줄! 오늘은 복도를 한 바퀴 걸어 볼 거예요. 뛰지 않고, 오른쪽으로, 앞사람과 팔 하나!" 교실에서 차례 카드를 맞춘 뒤 줄을 지어 나간다. 걷는 동안 모퉁이마다 멈춰 "여기서는 천천히"를 함께 말한다. 줄에서 벗어나 창밖을 보러 가는 학생에게 "줄에서 나오면 선생님이 놓칠 수 있어요"라고 말한다. 돌아와 점검 칸에 표시한다.',
        task: '복도 걷기 차례를 놓고, 걸어 본 뒤 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          STEPS('복도 걷기 차례로 놓아요.', '복도 걷기 차례', ['교실 출발', '복도 한 바퀴', '교실 도착'], '계단 다녀오기', 0.1),
          SAFE('복도 걷기 점검에 표시해요.', '복도 걷기 점검', ['뛰지 않았어요', '오른쪽으로 걸었어요', '앞사람과 팔 하나', '계단은 천천히'], 0.15),
          TALK('어디서 조심했는지 말해요.', { conclude: '복도는 오른쪽으로, 뛰지 않고, 모퉁이에서는 천천히 걸어요.' }),
        ],
      },
      worksheet: { items: [{ type: 'check', prompt: '복도에서 지킨 것에 ✓ 해요.', options: ['뛰지 않았어요', '오른쪽으로 걸었어요', '팔 하나 떨어졌어요'] }] },
    }),
    LINE({
      id: 'start.e12.line.activity.map', type: 'activity', title: '운동장 가는 길 지도 따라가기',
      method: '이동 길 지도에서 따라가기', tool: 'map', minutes: 27,
      levels: { easy: '지도에 가는 길이 그려져 있고, 핀을 꽂으면 칸 이름이 보인다.', base: '길 그림 없이 출발·도착과 조심할 곳(계단·모퉁이) 칸을 찾는다.', challenge: '조심할 곳 두 곳에서 왜 조심하는지 보기까지 고른다.' },
      activity: {
        title: '새싹초 운동장 가는 길', tool: 'map',
        teacher: '"새싹초 지도예요. 우리 교실에서 운동장까지 줄 서서 가요. 어디를 지날까요?" 지도에서 출발과 도착을 먼저 짚고, 손가락으로 길을 따라가며 계단과 모퉁이에서 멈춘다. 계단을 "빨리 지나가는 곳"이라고 하는 학생에게 "계단에서 줄이 밀리면 어떻게 될까요?"라고 묻는다. 활동 뒤 우리 학교 실제 길에서 조심할 곳을 교사가 말해 주고, 셋째·넷째 문항의 까닭을 짝과 말해 본다.',
        task: '운동장 가는 길 지도에서 말하는 곳에 핀을 꽂아요.', levels: { easy: { readout: true, roads: ROUTE }, base: {}, challenge: {} },
        items: [
          LMAP('출발하는 교실 칸을 찾아요.', '우리 교실', 0.1),
          LMAP('도착하는 운동장 칸을 찾아요.', '운동장', 0.1),
          LMAP('줄 서서 조심할 계단을 찾아요.', '계단', 0.15,
            { levels: { challenge: { prompt: '계단을 찾고 까닭도 골라요.', toolOptions: { ask: { q: '계단에서 왜 조심해요?', choices: ['넘어질 수 있어서', '재미있어서'] } }, target: { place: '계단', pick: 0 } } } }),
          LMAP('부딪히기 쉬운 모퉁이를 찾아요.', '모퉁이', 0.2,
            { levels: { challenge: { prompt: '모퉁이를 찾고 까닭도 골라요.', toolOptions: { ask: { q: '모퉁이에서 왜 천천히?', choices: ['앞이 안 보여서', '길이 넓어서'] } }, target: { place: '모퉁이', pick: 0 } } },
              conclude: '계단과 모퉁이에서는 멈칫, 천천히 — 줄은 끊기지 않게 걸어요.' }),
          TALK('우리 학교 조심할 곳을 말해요.'),
        ],
      },
      worksheet: {
        items: [
          { type: 'choice', prompt: '줄 서서 계단을 지날 때는?', options: ['빨리 뛰어요', '천천히 걸어요'], answer: '천천히 걸어요' },
          { type: 'draw', prompt: '운동장 가는 길을 그리고 조심할 곳에 ★ 해요.' },
        ],
      },
      notes: '새싹초 길은 가상이다. 우리 학교의 계단·모퉁이·신발장 자리를 교사가 실제로 짚어 준다.',
    }),
    LINE({
      id: 'start.e12.line.wrap.chant', type: 'wrap', title: '"앞사람 보고, 팔 하나" 구호',
      method: '줄 서기 구호', tool: 'timer', minutes: 7,
      levels: { easy: '구호 없이 앞을 보고 팔을 펴는 동작만 교사와 함께 한다.', base: '구호 카드 차례를 맞추고 구호와 동작을 함께 한다.', challenge: '우리 반 줄 서기 구호를 하나 새로 지어 제안한다.' },
      wrap: {
        teacher: '"앞사람 보고! (앞을 가리키기) 팔 하나! (팔 펴기) 쉿, 걸어요! (입에 손가락)" 구호 카드 차례를 맞춘 뒤 반 전체가 일어나 동작과 함께 외친다. 출구 2번에서 늦게 오면 끼어든다고 고른 학생에게 "기다린 친구도 빨리 가고 싶었어요. 늦게 오면 맨 뒤!"라고 말해 준다.',
        exitTicket: [
          CHANT('줄 서기 구호', ['앞사람 보고', '팔 하나', '쉿, 걸어요']),
          Q('늦게 왔어요. 어디에 서요?', ['친구 앞에 끼어요', '맨 뒤에 서요'], 1, '늦게 오면 맨 뒤에 서요.'),
          MOOD,
        ],
      },
      worksheet: {
        title: '앞사람 보고, 팔 하나',
        items: [
          { type: 'blank', prompt: '구호를 따라 써요.', text: '앞사람 보고, ___ 하나!', answer: '팔' },
          { type: 'draw', prompt: '한 줄로 바르게 선 우리 반을 그려요.' },
        ],
      },
    }),
    LINE({
      id: 'start.e12.line.wrap.face', type: 'wrap', title: '줄 서기 해 본 마음',
      method: '줄 서기 해 본 마음', tool: 'emotion', minutes: 7,
      levels: { easy: '교사가 두 장면을 읽어 주고 마음 카드를 함께 잇는다.', base: '두 장면에 마음 카드 세 장 가운데 알맞은 것을 잇는다.', challenge: '마음을 이은 뒤 줄을 잘 선 친구에게 칭찬 한 마디를 쓴다.' },
      wrap: {
        teacher: '"줄을 바르게 섰을 때 내 마음은 어땠나요? 친구가 끼어들었을 때는요?" 장면을 읽어 주고 마음 카드를 잇게 한다. 끼어든 장면에 기쁨을 놓은 학생에게 "기다리던 내 앞에 누가 끼면 정말 기쁠까요?"라고 묻는다. 마지막에 오늘 줄을 잘 선 친구 이름을 불러 함께 박수를 친다.',
        exitTicket: [
          { type: 'tool', tool: 'emotion', options: { mode: 'match', slots: [{ id: 's1', label: '줄을 바르게 섰어요' }, { id: 's2', label: '친구가 끼어들었어요' }], cards: ['뿌듯함', '속상함', '신남'] }, prompt: '장면과 마음을 이어요.', target: { match: { s1: '뿌듯함', s2: '속상함' } }, difficulty: 0.15 },
          Q('줄에서 앞사람이 멈추면요?', ['밀고 가요', '나도 멈춰요'], 1, '앞사람이 멈추면 나도 멈춰요.'),
          { type: 'short', prompt: '줄을 잘 선 친구 칭찬을 써요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '줄 서기 마음',
        items: [
          { type: 'draw', prompt: '줄을 바르게 섰을 때 내 얼굴을 그려요.' },
          { type: 'choice', prompt: '친구가 끼어들면 어떻게 말해요?', options: ['"뒤에 서 줘"', '"저리 가!"'], answer: '"뒤에 서 줘"' },
        ],
      },
    }),
    LINE({
      id: 'start.e12.line.wrap.star', type: 'wrap', title: '오늘 잘한 것 별 붙이기',
      method: '오늘 잘한 것 별 붙이기', tool: 'collage', minutes: 7,
      levels: { easy: '바르게 걸었으면 별 하나를 붙인다.', base: '지킨 약속(앞사람 보기·팔 하나) 수만큼 별 두 개까지 붙인다.', challenge: '지킨 약속 세 가지(쉿 걷기 더함)만큼 별 세 개까지 붙인다.' },
      wrap: {
        teacher: '"오늘 줄 서서 걸을 때 앞사람 보기, 팔 하나, 쉿 걷기 가운데 몇 가지를 지켰나요? 지킨 만큼 별을 붙여요." 별을 붙이며 무엇을 지켰는지 한 가지씩 말하게 한다. 별을 많이 붙이려는 학생에게 "지킨 만큼만 붙여요. 다음에 하나 더 늘리면 돼요"라고 말해 준다. 별이 하나뿐인 학생도 칭찬한다.',
        exitTicket: [
          { type: 'tool', tool: 'collage', options: { shapes: ['star', 'circle'] }, prompt: '지킨 약속만큼 별을 붙여요.', target: { has: [{ shape: 'star', min: 1, max: 3 }] }, difficulty: 0.1 },
          Q('줄 서서 걸 때 지킬 것은?', ['앞사람 보고 걷기', '앞질러 뛰기'], 0, '앞사람을 보고, 팔 하나 떨어져 걸어요.'),
          MOOD,
        ],
      },
      worksheet: {
        title: '오늘 잘한 것',
        items: [
          { type: 'check', prompt: '오늘 지킨 약속에 ✓ 해요.', options: ['앞사람 보고 걸었어요', '팔 하나 떨어졌어요', '쉿, 조용히 걸었어요'] },
          { type: 'draw', prompt: '지킨 약속만큼 별을 그려요.' },
        ],
      },
    }),
  ];

  // =====================================================================================================
  // 손 들고 말하기·차례 기다리기 (관계 형성·정서 지원)
  const TURN = MOD('start.e12.turn');
  const FILL1 = (prompt, who, label, cards, ans, easyCards, d, more) => ({
    prompt, toolOptions: { mode: 'fill', slots: [{ id: 'b1', who, label }], cards }, target: { fill: { b1: ans } }, difficulty: d,
    levels: { easy: { toolOptions: { cards: easyCards } } }, ...more,
  });
  const T_TURN = [
    TURN({
      id: 'start.e12.turn.intro.hand', type: 'intro', title: '손 든 친구 그림 고르기',
      method: '손 들기 그림 고르기', tool: 'wordcards', minutes: 6,
      levels: { easy: '그림 두 장(손 든 친구·소리친 친구)을 읽어 주고 좋아요 그림을 함께 고른다.', base: '그림 세 장 가운데 좋아요 그림 두 장을 고르는 시연을 본다.', challenge: '그림 네 장을 보고 왜 좋아요인지 한 마디씩 말한다.' },
      intro: {
        teacher: '"선생님이 질문했어요. 한 친구는 손을 들었고, 한 친구는 \'저요! 저요!\' 소리쳤어요. 누가 좋아요일까요?" 그림 카드를 하나씩 읽어 주고 시연 단추로 손 든 친구·기다린 친구 카드가 바구니에 담기는 모습을 보인다. "먼저 말하는 사람이 이겨요"라는 말이 나오면 "모두 먼저 말하면 선생님이 누구 말을 들을 수 있을까요?"라고 되묻는다.',
        student: '손을 들고 기다린 친구 그림을 찾아 가리켜 보아요.',
        demo: { tool: 'wordcards', options: { mode: 'pick', basket: '좋아요', cards: [C('hand', '손 든 친구'), C('shout', '소리친 친구'), C('wait', '기다린 친구')], shuffle: false }, sequence: [{ pick: ['hand', 'wait'] }] },
        art: { draw: 'a paper classroom where several paper children raise their hands quietly while one child stands up shouting, a paper teacher smiling at a raised hand', banner: '손 들고 기다려요' },
      },
    }),
    TURN({
      id: 'start.e12.turn.intro.game', type: 'intro', title: '손 들고 기다리기 놀이',
      method: '손 들고 기다리기 놀이', tool: 'timer', minutes: 6,
      levels: { easy: '교사가 질문 한 번을 하고 손 든 사람 가운데 한 명을 부른다.', base: '질문 세 번을 하며 손 들기 → 기다리기 → 불리면 말하기를 되풀이한다.', challenge: '마지막 질문은 말한 친구가 다음 친구를 불러 준다.' },
      intro: {
        teacher: '"선생님이 문제를 낼게요. 아는 사람은 입을 꼭 다물고 손을 들어요. 이름이 불린 사람만 말해요. 바나나는 무슨 색?" 손 든 학생 가운데 한 명을 부르고, 시연 단추로 놀이 차례 카드가 놓이는 모습을 보인다. 이름이 안 불려 시무룩한 학생에게 "다음 문제에 또 기회가 있어요. 기다린 것도 잘한 거예요"라고 말해 준다.',
        student: '알면 입을 다물고 손을 들어요. 이름이 불리면 말해 보아요.',
        demo: { tool: 'timer', options: { title: '손 들기 놀이', cards: ['불리면 말하기', '손 들기', '기다리기'] }, sequence: [{ order: ['손 들기', '기다리기', '불리면 말하기'] }] },
        art: { draw: 'paper first graders sitting with lips pressed together and hands raised high, a paper teacher holding up a question card with a banana drawing', banner: '쉿, 손 들어요' },
      },
    }),
    TURN({
      id: 'start.e12.turn.intro.wait', type: 'intro', title: '기다릴 때 마음 고르기',
      method: '기다릴 때 마음 고르기', tool: 'emotion', minutes: 6,
      levels: { easy: '교사가 마음 카드 두 장(짜증·편안함)을 들어 정수기 줄 친구 마음을 함께 고른다.', base: '마음 카드 세 장 가운데 하나를 고르는 시연을 보고 까닭을 듣는다.', challenge: '마음 카드 네 장을 보고 줄 맨 앞·맨 뒤 친구의 마음이 어떻게 다른지 말한다.' },
      intro: {
        teacher: '"정수기 앞에 줄이 길어요. 목이 마른데 맨 뒤에 선 친구는 어떤 마음일까요?" 시연 단추로 짜증 카드가 짝 지어지는 모습을 보인다. "기다리면 화가 나도 꾹 참기만 해야 해요"라는 말이 나오면 "참기만 하면 마음이 어떻게 될까요? 숨을 크게 쉬거나, 언제 내 차례인지 물어볼 수도 있어요"라고 되묻는다. 오늘은 기다리는 방법을 배운다고 밝힌다.',
        student: '정수기 줄 맨 뒤 친구의 마음을 생각해 보고 짝에게 말해 보아요.',
        demo: { tool: 'emotion', options: { mode: 'match', slots: [{ id: 's1', label: '정수기 줄 맨 뒤' }], cards: ['짜증', '편안함', '신남'], shuffle: false }, sequence: [{ match: { s1: '짜증' } }] },
        art: { draw: 'a long line of paper children waiting at a classroom water dispenser, the last child tapping a foot impatiently, a small paper cloud above', banner: '기다릴 때 내 마음' },
      },
    }),
    TURN({
      id: 'start.e12.turn.activity.talk', type: 'activity', title: '말하기 막대 차례 놀이',
      method: '말하기 차례 놀이(말하기 막대)', tool: 'timer', minutes: 14,
      levels: { easy: '모둠이 한 바퀴(4번) 돌게 맞추고, 차례 카드 2장·점검 2칸을 한다.', base: '두 바퀴(8번) 돌게 맞추고 차례 카드 3장·점검 3칸을 한다.', challenge: '두 바퀴에 말하기 10초로 늘려 좋아하는 것까지 말하고, 차례 카드 4장·점검 4칸을 한다.' },
      activity: {
        title: '막대 든 사람만 말하기', tool: 'timer',
        teacher: '"이 막대를 가진 사람만 말할 수 있어요. 다 말하면 옆 친구에게 넘겨요." 교사가 모둠마다 막대를 주고 첫 바퀴를 함께 돈다. 막대가 없는데 끼어드는 학생에게 "막대가 오면 꼭 차례가 와요. 지금은 귀로 듣는 차례예요"라고 말한다. 막대를 오래 쥐고 있는 학생에게는 "다음 친구도 기다리고 있어요"라고 알려 준다. 먼저 말한다고 이기는 것이 아니라 모두 한 번씩 말하는 것이 목표라고 짚는다.',
        task: '말하기 막대 차례를 놓고 모둠이 돌 번 수를 맞춰요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          STEPS('막대 놀이 차례로 놓아요.', '말하기 막대 차례', ['막대 받기', '말하기', '옆으로 넘기기'], '"고마워" 하기', 0.1),
          { prompt: '4명이 두 바퀴, 8번 맞춰요.', toolOptions: { title: '말하기 막대(우리 반 약속)', labels: ['말하기', '넘기기'], plan: { work: 5, rest: 5, rounds: 1 } }, target: { plan: { rounds: 8 } }, difficulty: 0.15,
            levels: { easy: { prompt: '4명이 한 바퀴, 4번 맞춰요.', target: { plan: { rounds: 4 } } }, challenge: { prompt: '8번, 말하기 10초로 맞춰요.', target: { plan: { rounds: 8, work: 10 } } } } },
          SELFT('막대 놀이 한 것에 표시해요.', '막대 놀이 점검', ['막대 있을 때 말했어요', '끝까지 들었어요', '막대를 넘겼어요', '좋아하는 것 말했어요'], 0.15,
            { conclude: '막대가 오면 말하고, 없으면 듣고 — 모두 한 번씩 말할 수 있어요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '막대가 없을 때 나는?', options: ['끼어들어 말해요', '귀로 들어요'], answer: '귀로 들어요' }] },
    }),
    TURN({
      id: 'start.e12.turn.activity.scene', type: 'activity', title: '끼어들기·기다리기 장면 고르기',
      method: '끼어들기 장면 고르고 결과 보기', tool: 'emotion', minutes: 13,
      levels: { easy: '보기 2개 가운데 고르고, 고르면 결과 그림이 바로 보인다.', base: '보기 3개 가운데 고르고 결과는 확인한 뒤에 보인다.', challenge: '이어지는 다음 장면에서 한 번 더 고른다.' },
      activity: {
        title: '놀잇감 앞 차례 고르기', tool: 'emotion',
        teacher: '"블록 바구니 앞에 친구들이 줄 서 있어요. 나는 어떻게 할까요?" 장면을 읽어 주고 고른 뒤 결과 그림 속 친구 마음을 함께 본다. 앞에 끼는 쪽을 고른 학생에게 "먼저 기다린 친구 얼굴을 보세요. 어떤 마음일까요?"라고 묻는다. 셋째 장면에서 "꾹 참기만 해요"를 고른 학생에게 "참기만 하지 말고 \'나도 써도 돼?\' 하고 말로 물어볼 수 있어요"라고 짚는다.',
        task: '놀잇감 앞 장면을 듣고 할 일을 골라요.', levels: { easy: {}, base: { revealAfterCheck: true }, challenge: { revealAfterCheck: true } },
        items: [
          BR('블록 앞에 줄이 있어요.', '블록 바구니 앞에 줄이 있어요.', CH('end', '줄 끝에 서요', '차례가 와서 블록을 받았어요.', '편안함'),
            [CH('cut', '앞에 끼어요', '기다린 친구가 속상해요.', '속상함', '먼저 온 친구 차례예요.'), CH('grab', '블록 뺏어요', '친구가 울어요.', '슬픔', '뺏지 말고 기다려요.')],
            { prompt: '내 차례예요. 뒤에 친구가 있어요.', situation: '내 차례, 뒤에 친구가 기다려요.', good: 'share', choices: [CH('share', '조금 놀고 넘겨요', '뒤 친구도 웃었어요.', '기쁨'), CH('long', '혼자 오래 놀아요', '뒤 친구가 지쳤어요.', '속상함', '기다리는 친구를 생각해요.')] }, 0.1),
          BR('친구가 그림책을 보고 있어요.', '보고 싶은 그림책을 친구가 봐요.', CH('ask', '"다 보면 빌려줘"', '친구가 "응!" 했어요.', '기쁨'),
            [CH('take', '뺏어 가요', '친구가 깜짝 놀라요.', '놀람', '친구가 다 볼 때까지 기다려요.'), CH('rush', '옆에서 재촉해요', '친구가 편하게 못 봐요.', '속상함', '물어보고 기다려요.')],
            { prompt: '친구가 다 봤대요. 이제는요?', situation: '친구가 "다 봤어, 여기" 해요.', good: 'thanks', choices: [CH('thanks', '"고마워" 해요', '친구가 웃었어요.', '고마움'), CH('silent', '말없이 가져가요', '친구가 서운해요.', '속상함', '빌려주면 고맙다고 해요.')] }, 0.15),
          BR('모둠 색연필 통을 같이 써요.', '모둠 색연필 통을 같이 써요.', CH('turn', '차례로 꺼내요', '모두 색칠할 수 있었어요.', '편안함'),
            [CH('all', '먼저 다 가져가요', '친구들 색연필이 없어요.', '속상함', '같이 쓰는 것은 차례로 꺼내요.'), CH('yell', '소리쳐 달라요', '모둠이 시끄러워요.', '놀람', '작은 목소리로 부탁해요.')],
            { prompt: '친구가 오래 써요. 화가 나요.', situation: '친구가 빨강을 오래 써요.', good: 'say', choices: [CH('say', '"나도 써도 돼?"', '친구가 "잠깐만, 다 썼어" 했어요.', '편안함'), CH('hold', '꾹 참기만 해요', '마음이 점점 답답해요.', '화남', '참기만 말고 말로 물어봐요.')] }, 0.2,
            { conclude: '줄 끝에 서서 기다리고, 기다리기 힘들면 말로 물어봐요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '보고 싶은 책을 친구가 보면?', options: ['뺏어 가요', '"다 보면 빌려줘"'], answer: '"다 보면 빌려줘"' }] },
    }),
    TURN({
      id: 'start.e12.turn.activity.sort', type: 'activity', title: '기다릴 때 할 수 있는 일',
      method: '기다릴 때 할 수 있는 일 나누기', tool: 'sortboard', minutes: 14,
      levels: { easy: '카드 4장, 틀린 바구니에 넣으면 까닭을 말하고 돌아온다.', base: '카드 6장을 다 넣은 뒤 확인한다.', challenge: '카드 8장(헷갈리는 카드 섞임)을 나누고, 셋째 문항에서 내가 쓸 방법을 골라 말한다.' },
      activity: {
        title: '기다리기 방법 나누기', tool: 'sortboard',
        teacher: '"줄을 서서 기다릴 때 할 수 있는 일은 무엇일까요?" 카드를 소리 내어 읽고 넣게 한 뒤, 좋아요 카드는 그 자리에서 해 본다(하나·둘·셋 세기, 코로 크게 숨쉬기). "투덜투덜"을 좋아요에 넣는 학생에게 "투덜거리면 마음이 편해질까요, 더 답답해질까요?"라고 묻는다. 셋째 문항에서 내가 쓸 방법 하나를 골라 짝에게 말한다.',
        task: '기다릴 때 하는 일 카드를 좋아요·안돼요 바구니에 넣어요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
        items: [
          SB2(OKNO, '줄에서 기다릴 때를 나누어요.', ['숫자 세기', '크게 숨쉬기', '손 모으기'], ['앞사람 밀기', '발 구르기', '새치기하기'], ['소리쳐 재촉', '몰래 끼기'], true, 0.1),
          SB2(OKNO, '내 차례를 기다릴 때를 나누어요.', ['노래 흥얼', '줄 끝에 서기', '"언제 내 차례?"'], ['줄 벗어나기', '투덜투덜', '친구 당기기'], ['줄에서 장난', '앞사람 재촉'], true, 0.15),
          TALK('내가 쓸 기다리기 방법을 말해요.', { levels: { easy: { prompt: '선생님과 숫자를 세어 봐요.' } }, conclude: '기다릴 때는 숫자 세기, 숨쉬기, 물어보기 — 내 방법을 골라 써요.' }),
        ],
      },
      worksheet: { items: [{ type: 'table', prompt: '기다릴 때 하면 ○, 안 되면 ×를 써요.', columns: ['할 일', '○ / ×'], cells: [['숫자 세기', ''], ['앞사람 밀기', ''], ['크게 숨쉬기', '']], answer: '○, ×, ○' }] },
    }),
    TURN({
      id: 'start.e12.turn.activity.breath', type: 'activity', title: '숨 쉬며 기다리기 연습',
      method: '숨 쉬며 기다리기 연습', tool: 'timer', minutes: 13,
      levels: { easy: '숨 쉬기 타이머를 5초로 맞추고 차례 카드 2장·점검 2칸을 한다.', base: '타이머를 10초로 맞추고 차례 카드 3장·점검 3칸을 한다.', challenge: '타이머를 15초로 맞추고 차례 카드 4장·점검 4칸을 한다.' },
      activity: {
        title: '정수기 앞 숨 쉬며 기다리기', tool: 'timer',
        teacher: '"정수기 앞 줄에 서 있다고 생각해요. 목이 말라 조금 짜증이 나요. 코로 크게 들이쉬고, 잠깐 멈추고, 입으로 후—." 교사가 시범을 보인 뒤 타이머를 맞춰 반 전체가 숨을 쉬며 기다려 본다(시간은 우리 반 약속 값). 숨을 너무 세게 쉬어 어지럽다는 학생에게는 "천천히, 작게 쉬어도 돼요"라고 말한다. 화가 날 때 참기만 하는 것이 아니라 숨을 쉬고 말로 할 수 있다는 것을 짚는다.',
        task: '숨 쉬기 시간을 맞추고 숨 쉬는 차례를 놓아요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          { prompt: '숨 쉬기를 10초로 맞춰요.', toolOptions: { title: '숨 쉬며 기다리기(우리 반 약속)', labels: ['숨 쉬기', '멈춤'], plan: { work: 20, rest: 5, rounds: 1 } }, target: { plan: { work: 10 } }, difficulty: 0.1,
            levels: { easy: { prompt: '숨 쉬기를 5초로 맞춰요.', target: { plan: { work: 5 } } }, challenge: { prompt: '숨 쉬기를 15초로 맞춰요.', target: { plan: { work: 15 } } } } },
          STEPS('숨 쉬는 차례로 놓아요.', '숨 쉬기 차례', ['코로 들이쉬기', '잠깐 멈추기', '입으로 후—'], '"이제 괜찮아"', 0.15),
          SELFT('숨 쉬며 기다려 본 것에 표시해요.', '숨 쉬기 점검', ['숨을 크게 쉬었어요', '어깨 힘을 뺐어요', '끝까지 기다렸어요', '친구에게 알려 줬어요'], 0.15,
            { conclude: '기다리기 힘들 때는 코로 들이쉬고, 입으로 후— 내쉬어요.' }),
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '코로 들이쉬고, 입으로 ___ 내쉬어요.', answer: '후' }] },
    }),
    TURN({
      id: 'start.e12.turn.activity.water', type: 'activity', title: '정수기 줄 차례 이야기',
      method: '정수기 줄 차례 놓기', tool: 'story', minutes: 27,
      levels: { easy: '첫 장면이 놓여 있어 남은 두 장면만 놓고, 말풍선 보기는 두 장이다.', base: '장면 세 장을 차례대로 놓고 말풍선 보기 세 장 가운데 알맞은 말을 채운다.', challenge: '틀린 장면 한 장이 섞인 차례를 놓고, 기다린 친구와 물 마신 친구의 말풍선을 모두 채운다.' },
      activity: {
        title: '정수기 앞 차례 이야기', tool: 'story',
        teacher: '"가상 친구 하늘이와 솔이가 정수기 앞에 줄을 섰어요. 하늘이가 먼저, 솔이는 뒤에." 장면 카드를 읽어 주며 차례를 놓고, 솔이가 기다릴 때 어떤 말을 할지 말풍선을 채운다. "비켜!"를 넣은 학생에게 "그 말을 들은 하늘이는 어떤 마음일까요? 솔이 마음은 편해질까요?"라고 묻는다. 물을 마신 하늘이가 뒤 친구에게 고맙다고 하면 둘 다 기분이 좋아진다는 것을 짚고, 실제 우리 반 정수기 앞에서 한 번 해 본다.',
        task: '정수기 줄 장면을 차례대로 놓고 말풍선을 채워요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          ORDER3('정수기 줄 차례로 놓아요.', [C('line', '줄을 서요'), C('fill', '물을 받아요'), C('move', '마시고 비켜요')], C('cut', '앞에 끼어요'), 0.1),
          ORDER3('내 컵을 쓰는 차례예요.', [C('cup', '내 컵 꺼내요'), C('pour', '물 받아요'), C('put', '컵 넣어 둬요')], C('other', '친구 컵 써요'), 0.15),
          FILL1('기다리는 솔이 말을 채워요.', '솔', '목말라도 "___"', [C('wait', '기다릴게'), C('push', '비켜!'), C('cutin', '먼저 할래')], 'wait', [C('wait', '기다릴게'), C('push', '비켜!')], 0.15),
          FILL1('물 마신 하늘이 말을 채워요.', '하늘', '뒤 친구에게 "___"', [C('thank', '고마워'), C('more', '더 마실래'), C('go', '저리 가')], 'thank', [C('thank', '고마워'), C('go', '저리 가')], 0.2),
          TALK('기다리는 친구 마음을 말해요.', { conclude: '줄 서서 기다리고, 다 마시면 비켜 주고, 고맙다고 말해요.' }),
        ],
      },
      worksheet: {
        items: [
          { type: 'choice', prompt: '정수기에서 물을 다 마셨어요. 다음은?', options: ['비켜 줘요', '더 서 있어요'], answer: '비켜 줘요' },
          { type: 'blank', prompt: '기다리는 친구가 할 말을 써요.', text: '목말라도 "___"', answer: '기다릴게' },
        ],
      },
    }),
    TURN({
      id: 'start.e12.turn.wrap.praise', type: 'wrap', title: '기다려 준 친구 칭찬하기',
      method: '기다려 준 친구 칭찬하기', tool: 'timer', minutes: 7,
      levels: { easy: '차례를 잘 기다린 친구에게 반 전체가 박수만 쳐 준다.', base: '박수와 함께 "기다려 줘서 고마워" 칭찬 한 마디를 한다.', challenge: '짝이 오늘 기다린 장면을 떠올려 짝을 칭찬한다.' },
      wrap: {
        teacher: '"오늘 막대 놀이와 줄 서기에서 차례를 잘 기다린 친구가 많았어요. 함께 칭찬해 볼까요?" 교사가 기다린 장면을 구체적으로 말하며(예: "막대가 올 때까지 손을 무릎에 두었어요") 친구를 칭찬하고 반 전체가 박수를 친다. 칭찬받지 못한 학생이 없도록 반 전체의 잘한 점도 말해 준다. 출구 2번에서 먼저 말하면 이긴다고 고른 학생에게 "모두 말할 수 있는 게 이기는 거예요"라고 짚어 준다.',
        exitTicket: [
          SELF('칭찬 점검', ['박수를 쳐 줬어요', '칭찬 한 마디 했어요', '짝을 칭찬했어요']),
          Q('먼저 말하면 이기나요?', ['네, 이겨요', '아니요, 차례가 있어요'], 1, '손 들고 차례를 기다리면 모두 말할 수 있어요.'),
          MOOD,
        ],
      },
      worksheet: {
        title: '기다려 줘서 고마워',
        items: [
          { type: 'blank', prompt: '칭찬하는 말을 따라 써요.', text: '기다려 줘서 ___!', answer: '고마워' },
          { type: 'draw', prompt: '손 들고 기다리는 내 모습을 그려요.' },
        ],
      },
    }),
    TURN({
      id: 'start.e12.turn.wrap.card', type: 'wrap', title: '나의 기다리기 방법 고르기',
      method: '나의 기다리기 방법 고르기', tool: 'wordcards', minutes: 7,
      levels: { easy: '교사가 보기 두 개를 읽어 주고 기다리기 방법 하나를 함께 고른다.', base: '보기 세 개 가운데 기다리기 방법 두 가지를 고른다.', challenge: '두 가지를 고른 뒤 언제 쓸지(정수기·놀잇감 앞) 한 줄로 쓴다.' },
      wrap: {
        teacher: '"오늘 배운 기다리기 방법 가운데 내 것으로 할 방법을 골라요." 카드를 하나씩 읽어 주고 고르게 한다. "앞사람 밀기"를 고른 학생에게 "밀면 앞사람이 넘어질 수 있어요. 대신 숫자를 세어 볼까요?"라고 말한다. 고른 방법을 그 자리에서 한 번 해 보고 마친다.',
        exitTicket: [
          PICKW('나의 기다리기', [C('count', '숫자 세기'), C('push', '앞사람 밀기'), C('breath', '크게 숨쉬기')], ['count', 'breath'], '기다릴 때 쓸 방법을 골라요.'),
          Q('기다리다 화가 나면요?', ['꾹 참기만 해요', '숨 쉬고 말로 해요'], 1, '숨을 쉬고, 말로 물어볼 수 있어요.'),
          { type: 'short', prompt: '언제 이 방법을 쓸지 써요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '나의 기다리기 방법',
        items: [
          { type: 'check', prompt: '내가 쓸 기다리기 방법에 ✓ 해요.', options: ['숫자 세기', '크게 숨쉬기', '"언제 내 차례?" 묻기'] },
          { type: 'draw', prompt: '줄에서 기다리는 내 모습을 그려요.' },
        ],
      },
    }),
    TURN({
      id: 'start.e12.turn.wrap.clock', type: 'wrap', title: '차례 시각 시계로 보기',
      method: '기다린 시간 시계로 보기', tool: 'clock', minutes: 7,
      levels: { easy: '교사가 10시·11시 두 시계를 보여 주고 어느 쪽이 먼저인지 함께 고른다.', base: '모둠 차례 시각(11시)에 시계 바늘을 맞추고 먼저 오는 시각을 고른다.', challenge: '바늘을 맞춘 뒤 10시부터 11시까지 긴바늘이 한 바퀴 도는 것을 손가락으로 따라 돈다.' },
      wrap: {
        teacher: '"가상 학교 새싹초에서는 1모둠이 10시, 2모둠이 11시에 놀잇감 차례예요. 2모둠은 1모둠이 노는 동안 기다려요." 시계 바늘을 11시에 맞추게 한 뒤, 긴바늘이 한 바퀴 도는 동안이 기다리는 시간이라고 손가락으로 따라 돌아 보인다. 짧은바늘을 긴바늘과 헷갈리는 학생에게 "몇 시는 짧은바늘이 알려 줘요"라고 말해 준다. 기다리는 동안 숫자 세기·숨쉬기를 쓰면 된다고 짚는다.',
        exitTicket: [
          { type: 'tool', tool: 'clock', options: { hourOnly: true }, prompt: '2모둠 차례 11시로 맞춰요.', target: { h: 11, m: 0 }, difficulty: 0.15 },
          Q('10시와 11시, 먼저 오는 때는?', ['10시', '11시'], 0, '10시가 먼저, 11시가 나중이에요.'),
          MOOD,
        ],
      },
      worksheet: {
        title: '차례 시각',
        items: [
          { type: 'choice', prompt: '10시 1모둠, 11시 2모둠. 먼저는?', options: ['1모둠', '2모둠'], answer: '1모둠' },
          { type: 'draw', prompt: '기다리는 동안 할 수 있는 일을 그려요.' },
        ],
      },
      notes: '시각은 가상 학교의 놀잇감 차례다. 우리 반에서는 실제 차례 시각으로 바꿔 쓴다.',
    }),
  ];

  // =====================================================================================================
  // 바른 자세로 앉아 듣기 (기본 생활 습관)
  const SIT = MOD('start.e12.sit');
  // 들은 이야기 속 그림 고르기(wordcards pick): 기본 4장에서 2장, 쉬움 3장에서 2장, 도전 나온 차례대로 놓기
  const HEARD = (prompt, a, b, others, d, more) => ({
    prompt, toolOptions: { mode: 'pick', basket: '이야기에 나왔어요', cards: [others[0], a, others[1], b] }, target: { pick: [a.id, b.id] }, difficulty: d,
    levels: {
      easy: { prompt: `${cut(prompt)}(3장)`, toolOptions: { cards: [a, others[0], b] } },
      challenge: { prompt: `${cut(prompt)}(차례)`, toolOptions: { mode: 'order', slots: ['먼저', '다음'], cards: [b, others[0], a] }, target: { order: [a.id, b.id] } },
    },
    ...more,
  });
  const T_SIT = [
    SIT({
      id: 'start.e12.sit.intro.body', type: 'intro', title: '몸 그림에서 바른 자세 짚기',
      method: '몸 그림에서 등·발 자세 고르기', tool: 'body', minutes: 6,
      levels: { easy: '교사가 허리 한 곳을 눌러 보이고 학생은 자기 등을 쭉 편다.', base: '허리와 발목 두 곳을 누르는 시연을 보고 등 펴기·발바닥 붙이기를 따라 한다.', challenge: '세 곳(목 더함)을 보고 고개를 바로 드는 것까지 따라 한다.' },
      intro: {
        teacher: '"바르게 앉으면 몸 어디가 달라질까요? 등은 쭉, 발바닥은 바닥에 붙여요." 종이 몸에서 허리와 발목을 눌러 이름을 들려준 뒤, 학생들이 의자에 앉아 등을 펴고 두 발바닥을 바닥에 붙여 보게 한다. "편하게 엎드려도 들을 수 있어요"라는 말이 나오면 "엎드리면 눈이 어디를 볼까요? 선생님 얼굴이 보일까요?"라고 되묻는다.',
        student: '의자에 앉아 등을 쭉 펴고 두 발바닥을 바닥에 붙여 보아요.',
        demo: { tool: 'body', options: { mode: 'parts', parts: ['목', '허리', '무릎', '발목', '눈'], names: true }, sequence: [{ parts: ['허리', '발목'] }] },
        art: { draw: 'a paper child sitting upright on a small classroom chair with a straight back and both feet flat on the floor, cut-paper arrows pointing to the back and feet', banner: '등은 쭉, 발은 바닥에' },
      },
      notes: '종이 몸에는 등·발바닥 칸이 없어 허리·발목 칸으로 짚는다.',
    }),
    SIT({
      id: 'start.e12.sit.intro.statue', type: 'intro', title: '바른 자세 얼음 놀이',
      method: '바른 자세 얼음 놀이', tool: 'timer', minutes: 6,
      levels: { easy: '교사가 "얼음!" 하면 바른 자세로 한 번 멈춘다.', base: '"얼음!"·"땡!"을 두 번 되풀이한다.', challenge: '세 번 되풀이하고, 마지막에는 친구가 "얼음"을 외친다.' },
      intro: {
        teacher: '"선생님이 \'얼음!\' 하면 바른 자세로 꽁꽁 멈춰요. \'땡!\' 하면 다시 움직여요." 자리에서 몸을 흔들다가 "얼음!"에 멈추는 놀이를 한다. 시연 단추로 놀이 차례 카드가 놓이는 모습을 보인다. 멈춘 자세가 기울어진 학생에게 "얼음 자세에서 등이 펴졌나요? 발은 바닥에 있나요?"라고 묻는다.',
        student: '"얼음!" 소리가 나면 바른 자세로 꽁꽁 멈춰 보아요.',
        demo: { tool: 'timer', options: { title: '얼음 놀이', cards: ['"땡!"', '"얼음!"', '바른 자세'] }, sequence: [{ order: ['"얼음!"', '바른 자세', '"땡!"'] }] },
        art: { draw: 'paper first graders frozen in tidy sitting poses on chairs, tiny cut-paper ice crystals around them, a paper teacher calling freeze', banner: '얼음! 바른 자세' },
      },
    }),
    SIT({
      id: 'start.e12.sit.activity.pick', type: 'activity', title: '바른 자세 나누기',
      method: '바른 자세·바르지 않은 자세 나누기', tool: 'sortboard', minutes: 14,
      levels: { easy: '카드 4장, 틀린 바구니에 넣으면 까닭을 말하고 돌아온다.', base: '카드 6장을 다 넣은 뒤 확인한다.', challenge: '카드 8장("턱 괴기"처럼 헷갈리는 카드)을 나누고, 셋째 문항에서 고쳐요 카드를 바른 자세로 고쳐 말한다.' },
      activity: {
        title: '앉는 자세·듣는 자세 나누기', tool: 'sortboard',
        teacher: '"이렇게 앉으면 바른 자세일까요, 고쳐야 할까요?" 카드를 읽어 주고 넣은 뒤 그 자세를 몸으로 잠깐 해 본다. "눈 감고 있기"를 잘 듣는 쪽에 넣는 학생에게 "눈을 감으면 선생님이 칠판에 그린 것을 볼 수 있을까요? 말하는 사람은 내가 듣고 있는지 알 수 있을까요?"라고 묻는다. 셋째 문항에서 고쳐요 자세 하나를 골라 바르게 고쳐 말해 본다.',
        task: '자세 카드를 바구니에 나눠 넣어요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
        items: [
          SB2(['바른 자세', '고쳐요'], '앉은 자세를 나누어요.', ['등 펴고 앉기', '발 바닥에', '손 무릎에'], ['책상에 엎드려', '다리 흔들기', '옆으로 눕기'], ['턱 괴기', '한 발 올리기'], true, 0.1),
          SB2(['잘 들어요', '고쳐요'], '듣는 자세를 나누어요.', ['말하는 사람 보기', '입 다물기', '고개 끄덕이기'], ['눈 감고 있기', '딴 데 보기', '짝과 떠들기'], ['연필 돌리기', '등 돌려 앉기'], true, 0.15),
          TALK('고쳐요 자세를 고쳐 말해요.', { levels: { easy: { prompt: '선생님과 바른 자세를 해요.' } }, conclude: '등은 쭉, 발은 바닥, 눈은 말하는 사람 — 그렇게 들어요.' }),
        ],
      },
      worksheet: { items: [{ type: 'table', prompt: '바르면 ○, 고쳐야 하면 ×를 써요.', columns: ['자세', '○ / ×'], cells: [['등 펴고 앉기', ''], ['책상에 엎드리기', ''], ['말하는 사람 보기', '']], answer: '○, ×, ○' }] },
    }),
    SIT({
      id: 'start.e12.sit.activity.listen', type: 'activity', title: '들은 낱말 그림 고르기',
      method: '들은 낱말 그림 고르기', tool: 'wordcards', minutes: 13,
      levels: { easy: '그림 3장 가운데 이야기에 나온 2장을 고른다.', base: '그림 4장 가운데 이야기에 나온 2장을 고른다.', challenge: '이야기에 나온 그림 2장을 나온 차례대로 놓는다.' },
      activity: {
        title: '이야기 듣고 그림 고르기', tool: 'wordcards',
        teacher: '"바른 자세로 앉아 선생님 이야기를 잘 들어요. 다 듣고 나온 그림을 골라요." 문항 글의 짧은 이야기를 천천히 두 번 읽어 준다. 그림을 아무렇게나 고르는 학생에게 "이야기를 한 번 더 들려줄게요. 눈은 선생님을 보고 들어 볼까요?"라고 말한다. 잘 들으려면 눈은 말하는 사람을 보고, 입은 다물고, 귀를 기울인다는 것을 짚는다.',
        task: '선생님 이야기를 듣고 나온 그림을 골라요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          HEARD('"솔이가 사과와 공을 샀어요."', C('apple', '사과', { motif: 'apple' }), C('ball', '공', { motif: 'ball' }), [C('cat', '고양이', { motif: 'cat' }), C('book', '책', { motif: 'book' })], 0.1),
          HEARD('"별이가 강아지와 물고기를 봤어요."', C('dog', '강아지', { motif: 'dog' }), C('fish', '물고기', { motif: 'fish2' }), [C('egg', '달걀', { motif: 'egg' }), C('pencil', '연필', { motif: 'pencil' })], 0.15),
          HEARD('"바다가 우산과 바나나를 챙겼어요."', C('umb', '우산', { motif: 'umbrella' }), C('banana', '바나나', { motif: 'banana' }), [C('ball2', '공', { motif: 'ball' }), C('apple2', '사과', { motif: 'apple' })], 0.2,
            { conclude: '눈은 말하는 사람, 입은 쉿, 귀를 기울이면 잘 들려요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '잘 들으려면 눈은 어디를 봐요?', options: ['말하는 사람', '창밖'], answer: '말하는 사람' }] },
    }),
    SIT({
      id: 'start.e12.sit.activity.ear', type: 'activity', title: '듣는 얼굴과 친구 마음 잇기',
      method: '듣는 사람 얼굴 짝 짓기', tool: 'emotion', minutes: 14,
      levels: { easy: '장면 2개에 카드 2장을 잇고, 맞게 놓으면 초록 테두리가 생긴다.', base: '장면 3개에 카드 3장을 잇는다.', challenge: '장면 4개에 카드 5장(맞지 않는 카드 한 장)을 잇는다.' },
      activity: {
        title: '듣는 모습 짝 짓기', tool: 'emotion',
        teacher: '"친구가 말할 때 내가 딴 데를 보면, 말하는 친구는 어떤 마음일까요?" 장면을 읽어 주고 마음·행동 카드를 잇게 한다. "말 끊기"에 편안함을 놓는 학생에게 "말하다가 누가 끊으면 하려던 말이 어떻게 될까요?"라고 묻는다. 둘째 문항은 상황마다 듣는 사람이 할 일을 잇고, 잘 들어 주면 말하는 친구가 고마워한다는 것을 짚는다.',
        task: '듣는 모습을 듣고 알맞은 카드를 이어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          MT('내가 이렇게 들으면 친구는?', [['눈 보고 끄덕여요', '기쁨'], ['딴 데 봐요', '속상함'], ['말을 끊어요', '화남'], ['끝까지 들어요', '편안함']], '무서움', 0.1),
          MT('이럴 때 듣는 사람이 할 일은?', [['친구가 발표해요', C('look', '친구 보기')], ['선생님이 설명해요', C('quiet', '입 다물기')], ['짝이 이야기해요', C('nod', '끄덕이기')], ['친구 말이 끝났어요', C('ack', '"그랬구나"')]], C('chat', '같이 떠들기'), 0.15),
          MT('친구가 이렇게 들어 주면 나는?', [['내 말을 들어 줬어요', '고마움'], ['내 말에 웃어 줬어요', '신남'], ['내 말 중에 하품해요', '속상함'], ['"또 말해 줘" 했어요', '뿌듯함']], '화남', 0.2,
            { conclude: '눈 보고, 끝까지, 끄덕이며 들으면 말하는 친구 마음이 편해요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '친구가 말할 때 나는?', options: ['끝까지 들어요', '말을 끊어요'], answer: '끝까지 들어요' }] },
    }),
    SIT({
      id: 'start.e12.sit.activity.echo', type: 'activity', title: '짝 말 따라 말하기',
      method: '짝 말 따라 말하기', tool: 'timer', minutes: 13,
      levels: { easy: '짝이 한 낱말을 말하면 따라 하고, 차례 카드 2장·점검 2칸을 한다.', base: '두 낱말을 따라 하고, 차례 카드 3장·점검 3칸을 한다.', challenge: '짧은 문장을 따라 하고, 차례 카드 4장·점검 4칸을 한다.' },
      activity: {
        title: '메아리 놀이', tool: 'timer',
        teacher: '"우리는 메아리예요. 짝이 \'사과\' 하면 나도 \'사과!\' 하고 따라 해요." 교사가 학생 한 명과 먼저 해 보이고, 짝끼리 번갈아 메아리가 된다. 잘못 따라 한 학생에게 "다시 한 번 짝 얼굴을 보고 들어 볼까요?"라고 말한다. 따라 말하려면 끝까지 들어야 하고, 따라 해 주면 짝이 "내 말을 들어 줬구나" 하고 느낀다는 것을 짚는다.',
        task: '메아리 놀이 차례를 놓고 짝 말을 따라 말해요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          STEPS('메아리 놀이 차례로 놓아요.', '메아리 놀이 차례', ['짝 얼굴 보기', '끝까지 듣기', '따라 말하기'], '"맞아?" 묻기', 0.1),
          SELFT('메아리 놀이 한 것에 표시해요.', '메아리 놀이 점검', ['짝 얼굴을 봤어요', '한 낱말 따라 했어요', '두 낱말 따라 했어요', '문장도 따라 했어요'], 0.15),
          TALK('짝 말을 메아리처럼 따라 해요.', { levels: { easy: { prompt: '짝이 한 낱말, 나는 따라!' }, challenge: { prompt: '짝의 짧은 문장을 따라 해요.' } }, conclude: '끝까지 들어야 따라 말할 수 있어요. 따라 해 주면 짝이 기뻐요.' }),
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '따라 말하려면 ___까지 들어요.', answer: '끝' }] },
    }),
    SIT({
      id: 'start.e12.sit.wrap.check', type: 'wrap', title: '바른 자세 스스로 점검',
      method: '바른 자세 스스로 점검', tool: 'timer', minutes: 7,
      levels: { easy: '교사가 등·발 두 가지를 읽어 주고 함께 점검한다.', base: '등·발·눈 세 가지를 스스로 점검한다.', challenge: '스스로 점검한 뒤 짝의 자세도 봐 주고 한 마디 해 준다.' },
      wrap: {
        teacher: '"지금 내 자세를 살펴봐요. 등은 펴졌나요? 발은 바닥에 있나요? 눈은 선생님을 보고 있나요?" 세 가지를 하나씩 읽어 주며 몸으로 고친 뒤 점검 칸에 표시한다. 출구 2번에서 눈을 감아도 된다고 고른 학생에게 "눈으로도 들어요. 말하는 사람의 얼굴과 손짓을 보면 더 잘 알 수 있어요"라고 말해 준다.',
        exitTicket: [
          SELF('바른 자세 점검', ['등을 폈어요', '발이 바닥에 있어요', '눈은 말하는 사람']),
          Q('들을 때 눈은요?', ['감아도 돼요', '말하는 사람을 봐요'], 1, '눈은 말하는 사람을 보며 들어요.'),
          MOOD,
        ],
      },
      worksheet: {
        title: '바른 자세',
        items: [
          { type: 'check', prompt: '지금 내 자세에 ✓ 해요.', options: ['등을 폈어요', '발이 바닥에 있어요', '눈은 말하는 사람을 봐요'] },
          { type: 'draw', prompt: '바른 자세로 앉은 내 모습을 그려요.' },
        ],
      },
    }),
    SIT({
      id: 'start.e12.sit.wrap.face', type: 'wrap', title: '잘 들어 준 친구와 내 마음',
      method: '잘 들었을 때 친구 마음', tool: 'emotion', minutes: 7,
      levels: { easy: '교사가 장면 두 개를 읽어 주고 마음 카드를 함께 잇는다.', base: '장면 두 개에 마음 카드 세 장 가운데 알맞은 것을 잇는다.', challenge: '마음을 이은 뒤 잘 들어 준 친구에게 할 말을 쓴다.' },
      wrap: {
        teacher: '"내가 말할 때 친구가 끝까지 들어 주면 내 마음은 어떨까요? 딴 데를 보면요?" 장면을 읽어 주고 마음 카드를 잇게 한다. 마지막에 오늘 내 말을 잘 들어 준 짝에게 "들어 줘서 고마워"라고 말하게 한다. 짝이 잘 듣지 않았다고 말하는 학생에게는 탓하지 말고 "다음엔 이렇게 들어 줘"라고 부탁하는 말을 함께 연습한다.',
        exitTicket: [
          { type: 'tool', tool: 'emotion', options: { mode: 'match', slots: [{ id: 's1', label: '끝까지 들어 줬어요' }, { id: 's2', label: '내 말 중에 딴 데 봐요' }], cards: ['고마움', '속상함', '놀람'] }, prompt: '장면과 내 마음을 이어요.', target: { match: { s1: '고마움', s2: '속상함' } }, difficulty: 0.15 },
          Q('친구 말을 잘 들으려면요?', ['말을 끊어요', '끝까지 들어요'], 1, '끝까지 들어 주면 친구가 고마워해요.'),
          { type: 'short', prompt: '잘 들어 준 친구에게 할 말을 써요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '들어 줘서 고마워',
        items: [
          { type: 'blank', prompt: '말을 따라 써요.', text: '들어 줘서 ___!', answer: '고마워' },
          { type: 'draw', prompt: '친구 말을 잘 듣는 내 얼굴을 그려요.' },
        ],
      },
    }),
  ];

  // =====================================================================================================
  // 학용품 챙기고 정리하기 (기본 생활 습관) — 넣는 자리는 가상 교실 나비반 약속
  const TIDY = MOD('start.e12.tidy');
  // 세 바구니 나누기(sortboard): 기본 사물함·서랍·가방 6장, 쉬움 두 바구니 4장, 도전 두 장이 틀린 바구니에 들어 있어 고쳐 놓기
  const PLACE3 = (prompt, locker, drawer, bag, d, more) => ({
    prompt, toolOptions: { slots: ['사물함', '서랍', '가방'], cards: [locker[0], drawer[0], bag[0], locker[1], drawer[1], bag[1]] }, target: { sort: { 사물함: locker, 서랍: drawer, 가방: bag } }, difficulty: d,
    levels: {
      easy: { prompt: `${cut(prompt)}(두 칸).`, toolOptions: { slots: ['사물함', '가방'], cards: [locker[0], bag[0], locker[1], bag[1]] }, target: { sort: { 사물함: locker, 가방: bag } } },
      challenge: { prompt: `${cut(prompt)}, 틀린 곳도요.`, state: { at: { [locker[0]]: 2, [drawer[0]]: 1, [bag[0]]: 0 } } },
    },
    ...more,
  });
  const T_TIDY = [
    TIDY({
      id: 'start.e12.tidy.intro.bag', type: 'intro', title: '필통 속 물건 고르기',
      method: '필통 속 물건 그림 고르기', tool: 'wordcards', minutes: 6,
      levels: { easy: '교사가 연필·사탕 두 그림을 들고 필통에 넣을 것을 함께 고른다.', base: '그림 네 장 가운데 필통에 넣을 것 세 가지를 고르는 시연을 본다.', challenge: '시연을 본 뒤 내 필통을 열어 같은 것이 있는지 확인한다.' },
      intro: {
        teacher: '"필통에는 무엇을 넣을까요? 연필, 지우개, 사탕, 자!" 그림 카드를 하나씩 읽어 주고 시연 단추로 학용품만 바구니에 담기는 모습을 보인다. "사탕도 넣고 다니면 좋아요"라는 말이 나오면 웃으며 "필통은 공부할 때 쓰는 것을 넣는 집이에요. 사탕은 공부할 때 쓸까요?"라고 되묻는다. 오늘은 학용품 이름과 쓰임, 정리하는 곳을 배운다고 밝힌다.',
        student: '필통에 넣을 물건 그림을 골라 손가락으로 가리켜 보아요.',
        demo: { tool: 'wordcards', options: { mode: 'pick', basket: '필통에 넣어요', cards: [C('pencil', '연필', { motif: 'pencil' }), C('eraser', '지우개'), C('candy', '사탕'), C('ruler', '자')], shuffle: false }, sequence: [{ pick: ['pencil', 'eraser', 'ruler'] }] },
        art: { draw: 'an open cut-paper pencil case with a pencil, an eraser and a short ruler inside, a paper candy sitting outside with a small question mark', banner: '필통에 무엇을 넣을까?' },
      },
    }),
    TIDY({
      id: 'start.e12.tidy.intro.mess', type: 'intro', title: '어지러운 책상 보고 마음 고르기',
      method: '어지러운 책상 그림 보고 마음 고르기', tool: 'emotion', minutes: 6,
      levels: { easy: '교사가 마음 카드 두 장(속상함·기쁨)을 들고 함께 고른다.', base: '마음 카드 세 장 가운데 하나를 고르는 시연을 보고 까닭을 듣는다.', challenge: '마음 카드 네 장을 보고 정리된 책상일 때 마음은 어떨지 견주어 말한다.' },
      intro: {
        teacher: '"가상 친구 별이 책상이에요. 책, 크레파스, 종이가 뒤죽박죽이에요. 연필을 찾는데 안 보여요. 별이 마음은 어떨까요?" 시연 단추로 속상함 카드가 짝 지어지는 모습을 보인다. "아무 데나 넣어도 나중에 찾으면 돼요"라는 말이 나오면 "공부가 시작됐는데 연필을 찾느라 못 하면 어떻게 될까요?"라고 되묻는다.',
        student: '어지러운 책상에서 연필을 찾는 별이 마음을 생각해 보아요.',
        demo: { tool: 'emotion', options: { mode: 'match', slots: [{ id: 's1', label: '어지러운 책상, 연필 찾기' }], cards: ['속상함', '기쁨', '편안함'], shuffle: false }, sequence: [{ match: { s1: '속상함' } }] },
        art: { draw: 'a messy cut-paper school desk piled with books, crayons and scraps, a paper child searching under the pile for a pencil with a puzzled face', banner: '연필이 어디 갔지?' },
      },
    }),
    TIDY({
      id: 'start.e12.tidy.activity.use', type: 'activity', title: '학용품과 쓰임 잇기',
      method: '학용품과 쓰임 잇기', tool: 'emotion', minutes: 14,
      levels: { easy: '학용품 2개에 카드 2장을 잇고, 맞게 놓으면 초록 테두리가 생긴다.', base: '학용품 3개에 카드 3장을 잇는다.', challenge: '학용품 4개에 카드 5장(맞지 않는 카드 한 장)을 잇는다.' },
      activity: {
        title: '학용품 쓰임 짝 짓기', tool: 'emotion',
        teacher: '"연필은 무엇을 할 때 쓸까요? 풀은요?" 학용품 이름을 읽어 주고 쓰임 카드를 잇게 한 뒤, 자기 필통에서 그 학용품을 꺼내 들어 보이게 한다. 지우개로 "종이 붙이기"를 잇는 학생에게 "지우개로 종이가 붙을까요? 붙이는 건 무엇이었지요?"라고 묻는다. 셋째 문항에서 다 쓴 뒤 할 일을 이으며, 가위는 날을 닫아 두어야 다치지 않는다는 것을 짚는다.',
        task: '학용품 이름을 듣고 맞는 카드를 이어요.', levels: { easy: { live: true, instant: true, weather: false }, base: { weather: false }, challenge: { weather: false, shuffle: true } },
        items: [
          MT('학용품과 쓰임을 이어요.', [['연필', C('write', '글씨 쓰기')], ['지우개', C('erase', '틀린 것 지우기')], ['가위', C('cut', '종이 자르기')], ['풀', C('glue', '종이 붙이기')]], C('eat', '먹기'), 0.1),
          MT('이럴 때 쓰는 것을 이어요.', [['색칠할 때', C('crayon', '크레파스')], ['줄 그을 때', C('ruler', '자')], ['종이 붙일 때', C('glue2', '풀')], ['글씨 쓸 때', C('pencil', '연필')]], C('sc', '가위'), 0.15),
          MT('다 쓴 뒤 할 일을 이어요.', [['풀', C('cap', '뚜껑 닫기')], ['가위', C('close', '날 닫기')], ['크레파스', C('box', '통에 넣기')], ['연필', C('case', '필통에 넣기')]], C('floor', '바닥에 두기'), 0.2,
            { conclude: '학용품은 쓰임대로 쓰고, 다 쓰면 닫고 제자리에 넣어요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '종이를 붙일 때 쓰는 것은?', options: ['풀', '지우개'], answer: '풀' }] },
    }),
    TIDY({
      id: 'start.e12.tidy.activity.scissors', type: 'activity', title: '가위 건네기 따라 하기',
      method: '가위 건네기 따라 하기', tool: 'timer', minutes: 13,
      levels: { easy: '선생님 시범을 따라 차례 카드 2장을 놓고, 약속 2칸을 점검한다.', base: '짝과 가위를 건네 보고 차례 카드 3장·약속 3칸을 점검한다.', challenge: '차례 카드 4장을 놓고 가위 안전 약속 4칸을 모두 점검한다.' },
      activity: {
        title: '짝에게 가위 건네 보기', tool: 'timer',
        teacher: '"가위를 짝에게 줄 때는 날을 오므리고, 내 손으로 날을 감싸듯 쥐고, 손잡이를 짝 쪽으로 내밀어요." 교사가 천천히 시범을 보이고 짝끼리 안전 가위로 한 번씩 건네 본다. 날을 벌린 채 내미는 학생에게 "날이 짝 쪽을 보고 있으면 짝 손이 어떻게 될까요?"라고 묻는다. "가위는 아무렇게나 들고 다녀도 돼요"라는 말이 나오면 들고 걸을 때도 날을 닫고 아래로 한다고 짚는다.',
        task: '가위 건네는 차례를 놓고 짝과 해 본 뒤 약속을 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          STEPS('짝에게 가위 주는 차례예요.', '가위 건네기 차례', ['날 오므리기', '손잡이 쪽 주기', '짝이 잡으면 놓기'], '"고마워" 받기', 0.1),
          SAFE('가위 쓰기 약속에 표시해요.', '가위 안전 약속', ['날을 닫아 뒀어요', '들고 뛰지 않았어요', '손잡이로 건넸어요', '쓴 뒤 통에 넣었어요'], 0.15),
          TALK('짝과 가위를 건네 봐요.', { levels: { easy: { prompt: '선생님을 따라 건네 봐요.' } }, conclude: '가위는 날을 닫고, 손잡이 쪽으로 건네고, 들고 뛰지 않아요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '가위를 짝에게 줄 때 내미는 쪽은?', options: ['손잡이 쪽', '날 쪽'], answer: '손잡이 쪽' }] },
      notes: '끝이 둥근 안전 가위로만 연습한다. 같은 학년군 생활안전(saf-life)의 가위 건네기 장면 차례와 겹치지 않게, 여기서는 짝과 실제로 건네 보고 점검하는 데 집중한다.',
    }),
    TIDY({
      id: 'start.e12.tidy.activity.place', type: 'activity', title: '사물함·서랍·가방 나눠 넣기',
      method: '사물함·서랍·가방 나눠 넣기', tool: 'sortboard', minutes: 14,
      levels: { easy: '바구니 둘(사물함·가방)에 카드 4장을 넣고, 틀리면 까닭을 말하고 돌아온다.', base: '바구니 셋(사물함·서랍·가방)에 카드 6장을 넣는다.', challenge: '두 장이 틀린 바구니에 미리 들어 있어 찾아 고쳐 놓는다.' },
      activity: {
        title: '물건 넣는 곳 나누기', tool: 'sortboard',
        teacher: '"나비반 약속이에요. 오래 두고 쓰는 것은 사물함, 오늘 공부할 것은 서랍, 집에 가져갈 것은 가방!" 칠판에 세 곳을 그려 두고 카드를 읽어 주며 넣게 한다. 알림장을 사물함에 넣는 학생에게 "알림장은 집에 가서 보호자께 보여 드려야 하지요? 어디에 넣을까요?"라고 묻는다. 셋째 문항에서 우리 반 실제 약속은 무엇인지 말해 본다(학교마다 다르다).',
        task: '물건 카드를 사물함·서랍·가방 바구니에 넣어요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
        items: [
          PLACE3('물건을 넣을 곳에 나누어요.', ['크레파스', '색종이'], ['교과서', '공책'], ['알림장', '물통'], 0.1),
          PLACE3('이 물건은 어디에? 나누어요.', ['그림 도구', '줄넘기'], ['필통', '받아쓰기장'], ['가정 통신문', '숙제 공책'], 0.15),
          TALK('우리 반 넣는 곳을 말해요.', { conclude: '오래 쓸 것은 사물함, 오늘 것은 서랍, 집에 갈 것은 가방에 넣어요.' }),
        ],
      },
      worksheet: { items: [{ type: 'table', prompt: '넣는 곳을 써요.', columns: ['물건', '넣는 곳'], cells: [['크레파스', ''], ['교과서', ''], ['알림장', '']], answer: '사물함, 서랍, 가방' }] },
      notes: '넣는 곳은 가상 교실 나비반의 약속이다. 우리 반 정리 약속에 맞게 교사가 바꿔 말해 준다.',
    }),
    TIDY({
      id: 'start.e12.tidy.activity.real', type: 'activity', title: '내 서랍 정리하기',
      method: '내 서랍 실제로 정리하기', tool: 'timer', minutes: 13,
      levels: { easy: '정리 시간을 5분으로 넉넉히 맞추고 차례 카드 2장·점검 2칸을 한다.', base: '정리 시간을 3분으로 맞추고 차례 카드 3장·점검 3칸을 한다.', challenge: '정리 3분에 짝 서랍 보기 2분을 더해 맞추고, 차례 카드 4장·점검 4칸을 한다.' },
      activity: {
        title: '서랍 정리 시간', tool: 'timer',
        teacher: '"타이머가 끝날 때까지 내 서랍을 정리해요. 다 꺼내고, 버릴 것은 버리고, 제자리에 넣어요." 타이머를 맞추고 시작을 누른다(시간은 우리 반 약속 값). 서랍 물건을 바닥에 쏟는 학생에게 "책상 위에 꺼내 놓으면 잃어버리지 않아요"라고 말한다. 다 정리한 뒤 점검 칸에 표시하고, 도전하는 학생은 짝 서랍을 함께 봐 주되 짝 물건을 허락 없이 꺼내지 않는다고 짚는다.',
        task: '정리 시간을 맞추고 서랍을 정리한 뒤 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          { prompt: '정리 시간을 3분으로 맞춰요.', toolOptions: { title: '서랍 정리(우리 반 약속)', timeUnit: 'min', labels: ['정리', '짝 보기'], plan: { work: 1, rest: 0, rounds: 1 } }, target: { plan: { work: 3 } }, difficulty: 0.1,
            levels: { easy: { prompt: '정리 시간을 5분으로 맞춰요.', target: { plan: { work: 5 } } }, challenge: { prompt: '정리 3분, 짝 보기 2분이에요.', target: { plan: { work: 3, rest: 2 } } } } },
          STEPS('서랍 정리 차례로 놓아요.', '서랍 정리 차례', ['다 꺼내기', '버릴 것 버리기', '제자리 넣기'], '짝과 보기', 0.15),
          SELFT('서랍 정리 한 것에 표시해요.', '서랍 정리 점검', ['책을 세워 넣었어요', '필통을 넣었어요', '쓰레기를 버렸어요', '짝 서랍을 봐 줬어요'], 0.15,
            { conclude: '다 꺼내고, 버리고, 제자리에 — 정리하면 필요한 것을 금방 찾아요.' }),
        ],
      },
      worksheet: { items: [{ type: 'check', prompt: '내 서랍에서 한 것에 ✓ 해요.', options: ['다 꺼냈어요', '버릴 것을 버렸어요', '제자리에 넣었어요'] }] },
    }),
    TIDY({
      id: 'start.e12.tidy.wrap.name', type: 'wrap', title: '이름표 글자 만들기',
      method: '내 물건 이름표 글자 만들기', tool: 'hangul', minutes: 7,
      levels: { easy: '교사가 모음 자리를 짚어 주며 가상 친구 이름 첫 글자를 함께 만든다.', base: '받침 없는 첫 글자(도)를 스스로 만든다.', challenge: '글자를 만든 뒤 내 이름 첫 글자에 받침이 있으면 종이 이름표에 받침까지 써 본다.' },
      wrap: {
        teacher: '"물건에 이름표를 붙이면 잃어버려도 주인을 찾을 수 있어요. 가상 친구 도담이 이름표 첫 글자를 만들어 볼까요?" 화면에서 글자를 만든 뒤, 실제 내 물건 이름표는 종이에 써서 붙인다(화면에는 쓰지 않는다). ㅗ를 오른쪽에 두려는 학생에게 "ㅗ는 누운 모음이라 아래에 붙여요"라고 말해 준다. 출구 2번에서 가위를 벌린 채 든다고 고른 학생에게 날을 닫는다는 것을 짚어 준다.',
        exitTicket: [
          { type: 'tool', tool: 'hangul', options: { consonants: ['ㄷ', 'ㄴ', 'ㅂ'], vowels: ['ㅗ', 'ㅏ'], slotHints: true }, prompt: '도담이 이름표 첫 글자를 만들어요.', target: { syllable: '도' }, difficulty: 0.15 },
          Q('가위를 들고 걸을 때는요?', ['날을 벌리고', '날을 닫고'], 1, '가위는 날을 닫고 아래로 들어요.'),
          MOOD,
        ],
      },
      worksheet: {
        title: '내 물건 이름표',
        items: [
          { type: 'draw', prompt: '이름표 테두리를 예쁘게 꾸며 그려요.' },
          { type: 'check', prompt: '이름표를 붙일 물건에 ✓ 해요.', options: ['필통', '공책', '크레파스', '물통'] },
        ],
      },
      notes: '이름표 활동은 가명(도담)으로 하고, 실제 이름은 종이 이름표에만 쓴다.',
    }),
    TIDY({
      id: 'start.e12.tidy.wrap.star', type: 'wrap', title: '정리한 곳 별 붙이기',
      method: '정리한 책상 별 붙이기', tool: 'collage', minutes: 7,
      levels: { easy: '정리한 곳 하나(서랍)에 별 하나를 붙인다.', base: '정리한 곳 두 곳(서랍·사물함)만큼 별을 붙인다.', challenge: '세 곳(서랍·사물함·가방)을 정리한 만큼 별 세 개까지 붙인다.' },
      wrap: {
        teacher: '"오늘 정리한 곳은 어디인가요? 서랍, 사물함, 가방 — 정리한 곳마다 별을 하나씩 붙여요." 별을 붙이며 어디를 정리했는지 말하게 한다. 정리를 다 못한 학생에게 "내일 아침 한 곳만 더 정리해서 별을 늘려 봐요"라고 말해 준다. 출구 2번은 다 쓴 풀의 뚜껑을 닫는 시늉을 하며 고른다.',
        exitTicket: [
          { type: 'tool', tool: 'collage', options: { shapes: ['star', 'square'] }, prompt: '정리한 곳마다 별을 붙여요.', target: { has: [{ shape: 'star', min: 1 }], pieces: { max: 3 } }, difficulty: 0.1 },
          Q('다 쓴 풀은 어떻게 해요?', ['뚜껑 닫아 넣어요', '책상에 두어요'], 0, '뚜껑을 닫아 제자리에 넣어요.'),
          MOOD,
        ],
      },
      worksheet: {
        title: '정리 별',
        items: [
          { type: 'check', prompt: '오늘 정리한 곳에 ✓ 해요.', options: ['서랍', '사물함', '가방'] },
          { type: 'draw', prompt: '정리한 내 책상을 그려요.' },
        ],
      },
    }),
  ];

  // =====================================================================================================
  // 급식 먹기 (기본 생활 습관) — 급식실 배치·차례는 가상 학교 새싹초, 우리 학교 방식은 교사·영양교사 확인
  const LUNCH = MOD('start.e12.lunch');
  const TRAY = ['밥 칸', '국 칸', '반찬 칸', '후식 칸'];
  const T_LUNCH = [
    LUNCH({
      id: 'start.e12.lunch.intro.smell', type: 'intro', title: '급식실 그림에서 할 일 고르기',
      method: '급식실 그림에서 할 일 고르기', tool: 'wordcards', minutes: 6,
      levels: { easy: '교사가 그림 두 장(줄 서는 곳·자는 곳)을 들고 급식실에 있는 곳을 함께 고른다.', base: '그림 세 장 가운데 급식실에 있는 곳 두 곳을 고르는 시연을 본다.', challenge: '그림 네 장(식판 놓는 곳 더함)을 보고 급식실에서 가는 차례를 말한다.' },
      intro: {
        teacher: '"킁킁, 맛있는 냄새가 나요. 여기는 급식실이에요. 급식실에는 어떤 곳이 있을까요?" 그림 카드를 하나씩 읽어 주고 시연 단추로 줄 서는 곳·먹는 곳 카드가 바구니에 담기는 모습을 보인다. "급식실에서는 아무 자리나 앉아요"라는 말이 나오면 "우리 반이 앉는 자리가 있을까요? 오늘 알아봐요"라고 되묻는다.',
        student: '급식실에 있는 곳 그림을 골라 손가락으로 가리켜 보아요.',
        demo: { tool: 'wordcards', options: { mode: 'pick', basket: '급식실에 있어요', cards: [C('line', '줄 서는 곳'), C('eat', '먹는 곳'), C('sleep', '자는 곳')], shuffle: false }, sequence: [{ pick: ['line', 'eat'] }] },
        art: { draw: 'a cut-paper school dining hall with a serving counter, paper children lining up with trays and long tables with small chairs, steam rising from soup', banner: '킁킁, 급식실' },
      },
    }),
    LUNCH({
      id: 'start.e12.lunch.intro.thanks', type: 'intro', title: '"잘 먹겠습니다" 인사 따라 하기',
      method: '감사 인사 따라 하기', tool: 'timer', minutes: 6,
      levels: { easy: '교사를 따라 두 손 모으고 "잘 먹겠습니다"를 한 번 한다.', base: '인사 차례 카드를 보며 두 번 따라 한다.', challenge: '짝과 마주 보고 번갈아 인사해 본다.' },
      intro: {
        teacher: '"밥을 먹기 전에 두 손을 모으고, 잘 먹겠습니다! 다 먹고 나면 잘 먹었습니다!" 교사가 동작과 함께 시범을 보이고 반 전체가 따라 한다. 시연 단추로 인사 차례 카드가 놓이는 모습을 보인다. "왜 인사해요? 그냥 먹으면 돼요"라는 말이 나오면 "이 밥을 누가 만들어 주셨을까요? 고마운 마음을 어떻게 전할까요?"라고 되묻는다.',
        student: '두 손을 모으고 "잘 먹겠습니다"를 따라 말해 보아요.',
        demo: { tool: 'timer', options: { title: '먹기 전 인사', cards: ['수저 들기', '두 손 모으기', '"잘 먹겠습니다"'] }, sequence: [{ order: ['두 손 모으기', '"잘 먹겠습니다"', '수저 들기'] }] },
        art: { draw: 'paper first graders at a long dining table with trays, hands pressed together, saying thank you before eating, a paper cook smiling behind the counter', banner: '잘 먹겠습니다!' },
      },
    }),
    LUNCH({
      id: 'start.e12.lunch.intro.plate', type: 'intro', title: '식판 칸 찾아보기',
      method: '식판 그림에 음식 칸 찾기', tool: 'kitchen', minutes: 6,
      levels: { easy: '교사가 밥·국 두 칸을 짚어 보이고 음식이 놓이는 시연을 본다.', base: '밥·국·반찬 세 칸에 음식이 놓이는 시연을 보고 칸 이름을 따라 말한다.', challenge: '후식 칸까지 네 칸을 보고 어떤 음식이 어디에 놓일지 먼저 말한다.' },
      intro: {
        teacher: '"식판에는 칸이 나뉘어 있어요. 밥은 어디에, 국은 어디에 받을까요?" 시연 단추로 밥·미역국·김치가 칸에 놓이는 모습을 보인다. "국을 밥 칸에 부어도 돼요"라는 말이 나오면 "국을 납작한 칸에 부으면 어떻게 될까요?"라고 되묻는다. 우리 학교 식판 모양은 실제 식판을 보여 주며 말해 준다.',
        student: '식판에서 밥 칸과 국 칸을 찾아 손가락으로 짚어 보아요.',
        demo: { tool: 'kitchen', options: { slots: TRAY.slice(0, 3), groups: false, cards: ['김치', '밥', '미역국'], shuffle: false }, sequence: [{ sort: { '밥 칸': ['밥'], '국 칸': ['미역국'], '반찬 칸': ['김치'] } }] },
        art: { draw: 'a cut-paper school lunch tray with compartments for rice, soup, side dishes and a small fruit, paper chopsticks and spoon beside it', banner: '식판 칸을 찾아요' },
      },
    }),
    LUNCH({
      id: 'start.e12.lunch.activity.order', type: 'activity', title: '급식 차례 세 장면 놓기',
      method: '급식 차례 세 장면 놓기', tool: 'story', minutes: 14,
      levels: { easy: '첫 장면이 놓여 있어 남은 두 장면만 놓고, 놓으면 바로 맞는지 알려 준다.', base: '장면 세 장을 차례대로 놓는다.', challenge: '첫 문항에 "잘 먹겠습니다" 인사 장면이 더해져 네 장면을 놓고, 나머지 문항은 틀린 장면 한 장을 빼고 놓는다.' },
      activity: {
        title: '급식 장면 차례 놓기', tool: 'story',
        teacher: '"급식을 먹으러 가요. 손 씻기, 식판 받기, 정리하기 — 무엇부터 할까요?" 카드를 놓은 뒤 몸으로 따라 한다(손 비비기 → 두 손으로 식판 들기 → 식판 놓기). 식판부터 받는 학생에게 "손을 안 씻고 식판을 잡으면 손에 있던 세균은 어디로 갈까요?"라고 묻는다. 다 먹은 뒤 남은 음식을 모으고 수저를 넣는 정리 차례도 짚는다.',
        task: '급식 장면 카드를 차례대로 놓아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          { prompt: '급식 먹는 차례로 놓아요.', toolOptions: { slots: ['먼저', '다음', '끝'], cards: [C('tidy', '식판 정리해요'), C('wash', '손 씻어요'), C('get', '식판 받아요')] }, target: { order: ['wash', 'get', 'tidy'] }, difficulty: 0.1,
            levels: { easy: { state: { at: { wash: 0, get: null, tidy: null } } },
              challenge: { prompt: '인사까지 넣어 차례로 놓아요.', toolOptions: { slots: ['첫째', '둘째', '셋째', '넷째'], cards: [C('tidy', '식판 정리해요'), C('wash', '손 씻어요'), C('thank', '"잘 먹겠습니다"'), C('get', '식판 받아요')] }, target: { order: ['wash', 'get', 'thank', 'tidy'] } } } },
          ORDER3('식판 정리 차례예요.', [C('scrap', '남은 것 모아요'), C('spoon', '수저 넣어요'), C('put', '식판 놓아요')], C('toss', '식판 던져요'), 0.15),
          ORDER3('줄 서서 받는 차례예요.', [C('line', '줄 서요'), C('fork', '수저 챙겨요'), C('take', '두 손으로 받아요')], C('cut', '새치기해요'), 0.2,
            { conclude: '손 씻고, 줄 서서 받고, "잘 먹겠습니다", 다 먹으면 정리해요.' }),
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '급식 먹기 전에 ___을 씻어요.', answer: '손' }] },
    }),
    LUNCH({
      id: 'start.e12.lunch.activity.tray', type: 'activity', title: '식판에 먹을 만큼 담기',
      method: '식판에 먹을 만큼 담기', tool: 'kitchen', minutes: 13,
      levels: { easy: '식판 칸이 둘(밥·국)이고, 틀린 칸에 놓으면 까닭을 말하고 돌아온다.', base: '식판 칸 넷(밥·국·반찬·후식)에 음식을 담고, 먹을 만큼 담는 카드를 고른다.', challenge: '마지막 문항에서 "조금만 주세요"로 덜어 달라고 말하는 차례 네 장을 놓는다.' },
      activity: {
        title: '먹을 만큼 식판 담기', tool: 'kitchen',
        teacher: '"밥은 밥 칸, 국은 국 칸에 담아요. 그리고 먹을 만큼!" 음식 카드를 하나씩 읽어 주고 칸에 담게 한다. 밥을 산처럼 담는 카드를 고른 학생에게 "다 못 먹으면 남은 밥은 어떻게 될까요?"라고 묻는다. "싫은 반찬은 안 받으면 돼요"라는 말이 나오면 "한 입이라도 받아서 먹어 보면 어떨까요? 많으면 조금만 달라고 말해요"라고 짚는다.',
        task: '음식을 식판 칸에 담고, 먹을 만큼 담는 법을 골라요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
        items: [
          { prompt: '음식을 식판 칸에 담아요.', toolOptions: { slots: TRAY, groups: false, cards: ['귤', '밥', '시금치', '미역국'] }, target: { sort: { '밥 칸': ['밥'], '국 칸': ['미역국'], '반찬 칸': ['시금치'], '후식 칸': ['귤'] } }, difficulty: 0.1,
            levels: { easy: { prompt: '밥과 국을 칸에 담아요.', toolOptions: { slots: TRAY.slice(0, 2), cards: ['밥', '미역국'] }, target: { sort: { '밥 칸': ['밥'], '국 칸': ['미역국'] } } } } },
          { prompt: '먹을 만큼 담는 것을 골라요.', toolOptions: { mode: 'pick', basket: '먹을 만큼', autoMotif: false, cards: [C('ok', '밥 알맞게'), C('heap', '밥 산처럼'), C('bit', '반찬 조금씩'), C('none', '반찬 안 받기')] }, target: { pick: ['ok', 'bit'] }, difficulty: 0.15,
            levels: { easy: { prompt: '먹을 만큼 담는 것 하나는?', toolOptions: { cards: [C('ok', '밥 알맞게'), C('heap', '밥 산처럼')] }, target: { pick: ['ok'] } } } },
          { prompt: '덜어 달라고 말하는 차례예요.', toolOptions: { mode: 'order', slots: ['먼저', '다음', '끝'], autoMotif: false, cards: [C('thx', '"고맙습니다"'), C('hold', '식판 내밀기'), C('less', '"조금만 주세요"')] }, target: { order: ['hold', 'less', 'thx'] }, difficulty: 0.2,
            levels: { challenge: { prompt: '맛보기까지 넣어 차례로 놓아요.', toolOptions: { slots: ['첫째', '둘째', '셋째', '넷째'], cards: [C('thx', '"고맙습니다"'), C('taste', '한 입 먹어 보기'), C('hold', '식판 내밀기'), C('less', '"조금만 주세요"')] }, target: { order: ['hold', 'less', 'thx', 'taste'] } } },
            conclude: '음식은 칸에 맞게, 먹을 만큼 받고, 많으면 "조금만 주세요"라고 말해요.' },
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '밥이 너무 많으면 어떻게 말해요?', options: ['"조금만 주세요"', '말없이 남겨요'], answer: '"조금만 주세요"' }] },
      notes: '음식 알레르기가 있는 학생은 학교가 가진 정보로 미리 확인하고, 수업 중 알레르기·가정 식생활을 묻지 않는다.',
    }),
    LUNCH({
      id: 'start.e12.lunch.activity.visit', type: 'activity', title: '급식실 가서 줄 서 보기',
      method: '급식실 가서 줄 서 보기', tool: 'timer', minutes: 14,
      levels: { easy: '선생님과 함께 가서 차례 카드 2장·약속 2칸을 점검한다.', base: '스스로 줄을 서 보고 차례 카드 3장·약속 3칸을 점검한다.', challenge: '차례 카드 4장을 놓고, 친구에게 식판 정리 자리를 안내해 본 것까지 약속 4칸을 점검한다.' },
      activity: {
        title: '급식실 미리 가 보기', tool: 'timer',
        teacher: '"급식실에 미리 가 볼 거예요. 줄 서는 곳, 식판 받는 곳, 정리하는 곳을 잘 봐 둬요." 급식 시간이 아닐 때 인솔해 가서 실제 자리를 짚어 주고 한 번 줄을 서 본다. 조리하시는 분이 계시면 "안녕하세요" 인사를 함께 한다. 줄에서 장난치는 학생에게 "급식실에는 뜨거운 국이 있어요. 부딪히면 어떻게 될까요?"라고 묻는다. 돌아와 점검 칸에 표시한다.',
        task: '급식실 가는 차례를 놓고, 다녀와서 약속을 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          STEPS('급식실에서 가는 차례예요.', '급식실 차례', ['줄 서는 곳', '식판 받는 곳', '먹는 자리'], '정리하는 곳', 0.1),
          SAFE('급식실 약속에 표시해요.', '급식실 약속', ['줄 서서 기다렸어요', '뛰지 않았어요', '조리사님께 인사했어요', '정리 자리를 알려 줬어요'], 0.15),
          TALK('급식실에서 본 곳을 말해요.', { conclude: '급식실에서는 줄 서고, 걷고, 정리하는 곳까지 알아 둬요.' }),
        ],
      },
      worksheet: { items: [{ type: 'check', prompt: '급식실에서 본 곳에 ✓ 해요.', options: ['줄 서는 곳', '식판 받는 곳', '정리하는 곳'] }] },
      notes: '급식 시간 전 조리실이 바쁜 때를 피해 영양교사와 미리 시간을 맞춘다.',
    }),
    LUNCH({
      id: 'start.e12.lunch.activity.say', type: 'activity', title: '"조금만 주세요" 장면 고르기',
      method: '"조금만 주세요" 말하기 장면 고르기', tool: 'emotion', minutes: 13,
      levels: { easy: '보기 2개 가운데 고르고, 고르면 결과 그림이 바로 보인다.', base: '보기 3개 가운데 고르고 결과는 확인한 뒤에 보인다.', challenge: '이어지는 다음 장면에서 한 번 더 고른다.' },
      activity: {
        title: '급식 받을 때 말하기', tool: 'emotion',
        teacher: '"밥을 너무 많이 받을 것 같아요. 어떻게 말하면 좋을까요?" 장면을 읽어 주고 고른 뒤 고른 말을 반 전체가 따라 말한다. "말없이 남겨요"를 고른 학생에게 "남은 음식은 모두 버려져요. 받기 전에 말하면 어떨까요?"라고 묻는다. 처음 보는 반찬은 한 입 먹어 보고, 많으면 덜어 달라고 말한다는 것을 짚는다.',
        task: '급식 장면을 듣고 할 말과 일을 골라요.', levels: { easy: {}, base: { revealAfterCheck: true }, challenge: { revealAfterCheck: true } },
        items: [
          BR('밥이 너무 많아요. 어떻게 해요?', '받을 밥이 너무 많아요.', CH('less', '"조금만 주세요"', '먹을 만큼 받았어요.', '편안함'),
            [CH('leave', '말없이 남겨요', '남은 밥이 버려져요.', '속상함', '받기 전에 말하면 남기지 않아요.'), CH('hide', '몰래 버려요', '조리사님이 속상해요.', '속상함', '버리지 말고 덜어 달라고 말해요.')],
            { prompt: '밥을 덜어 주셨어요. 이제는요?', situation: '조리사님이 밥을 덜어 주셨어요.', good: 'thanks', choices: [CH('thanks', '"고맙습니다"', '조리사님이 웃으셨어요.', '고마움'), CH('go', '그냥 가요', '조리사님이 조금 서운해요.', '속상함', '덜어 주시면 고맙다고 해요.')] }, 0.1),
          BR('처음 보는 반찬이에요.', '처음 보는 반찬이 나왔어요.', CH('try', '한 입 먹어 봐요', '생각보다 먹을 만해요.', '놀람'),
            [CH('no', '"싫어!" 밀어요', '친구가 깜짝 놀라요.', '놀람', '밀지 말고 한 입 먹어 봐요.'), CH('give', '친구 식판에 줘요', '친구 식판이 넘쳐요.', '걱정', '내 것은 내가 먹어 봐요.')],
            { prompt: '맛이 낯설어요. 어떻게 해요?', situation: '한 입 먹었는데 맛이 낯설어요.', good: 'slow', choices: [CH('slow', '조금씩 더 먹어요', '조금 더 먹을 수 있었어요.', '뿌듯함'), CH('dump', '다 버려요', '음식이 버려져요.', '속상함', '조금씩 먹어 보고, 다음엔 조금만 받아요.')] }, 0.15),
          BR('더 먹고 싶어요. 어떻게 해요?', '맛있어서 더 먹고 싶어요.', CH('more', '"더 주세요" 해요', '"다 먹고 오렴" 하셨어요.', '기쁨'),
            [CH('take', '친구 것 먹어요', '친구가 속상해요.', '속상함', '친구 것은 친구 거예요.'), CH('yell', '소리쳐 달라요', '급식실이 시끄러워요.', '놀람', '차례를 기다려 말해요.')],
            { prompt: '"다 먹고 오렴" 하셨어요.', situation: '"다 먹고 오렴" 하셨어요.', good: 'finish', choices: [CH('finish', '다 먹고 가요', '더 받아 맛있게 먹었어요.', '신남'), CH('again', '남기고 또 가요', '음식이 남아요.', '걱정', '내 식판을 먼저 다 먹어요.')] }, 0.2,
            { conclude: '많으면 "조금만", 더 먹고 싶으면 "더 주세요" — 먹을 만큼 받아요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '처음 보는 반찬이 나오면?', options: ['한 입 먹어 봐요', '바로 버려요'], answer: '한 입 먹어 봐요' }] },
    }),
    LUNCH({
      id: 'start.e12.lunch.activity.help', type: 'activity', title: '급식을 도와주시는 분들',
      method: '급식 도와주시는 분 마음 이어 보기', tool: 'emotion', minutes: 27,
      levels: { easy: '세 문항 모두 2짝을 잇는다.', base: '세 문항 모두 3짝을 잇는다.', challenge: '4짝을 잇고, 마지막에 조리하시는 분께 할 인사말을 짝과 해 본다.' },
      activity: {
        title: '고마운 분들 마음 잇기', tool: 'emotion',
        teacher: '"우리가 먹는 급식은 누가 도와주실까요? 쌀을 기르는 분, 음식을 만드는 분, 식단을 짜는 분!" 그림을 짚으며 하는 일을 잇게 한다. 셋째 문항에서 음식을 마구 버렸을 때 기쁨을 놓은 학생에게 "열심히 만든 음식이 버려지면 만드신 분 마음은 어떨까요?"라고 묻는다. "싫은 음식은 남겨도 괜찮아요"라는 말이 나오면 먹을 만큼 받으면 남기지 않을 수 있다고 짚는다. 마지막 문항은 조리하시는 분께 할 인사를 짝과 해 본다.',
        task: '급식을 도와주시는 분들의 일과 마음을 이어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          MT('도와주시는 분과 하는 일을 이어요.', [['조리사님', C('cook', '음식 만들기')], ['영양 선생님', C('menu', '식단 짜기')], ['농부님', C('farm', '쌀 기르기')], ['담임 선생님', C('line', '줄 봐 주기')]], C('play', '놀이하기'), 0.1),
          MT('이럴 때 하는 인사를 이어요.', [['밥을 받을 때', C('thx', '"고맙습니다"')], ['먹기 전에', C('before', '"잘 먹겠습니다"')], ['다 먹고 나서', C('after', '"잘 먹었습니다"')], ['조리사님을 뵐 때', C('hi', '"안녕하세요"')]], C('bad', '"맛없어요"'), 0.15),
          MT('조리사님은 이럴 때 어떤 마음?', [['"고맙습니다" 들었어요', '기쁨'], ['식판을 깨끗이 냈어요', '뿌듯함'], ['음식을 마구 버렸어요', '속상함'], ['"맛있어요" 들었어요', '신남']], '화남', 0.2),
          TALK('조리사님께 할 인사를 해요.', { conclude: '급식은 여러 분이 도와주셔서 먹어요. 인사하고, 먹을 만큼 받아 고마운 마음을 전해요.' }),
        ],
      },
      worksheet: {
        items: [
          { type: 'blank', prompt: '다 먹고 하는 인사를 써요.', text: '잘 ___습니다!', answer: '먹었' },
          { type: 'draw', prompt: '조리사님께 고맙다고 인사하는 모습을 그려요.' },
        ],
        easy: [{ type: 'choice', prompt: '밥을 받을 때 하는 말은?', options: ['고맙습니다', '맛없어요'], answer: '고맙습니다' }],
      },
    }),
    LUNCH({
      id: 'start.e12.lunch.wrap.clean', type: 'wrap', title: '빈 식판에 별 붙이기',
      method: '빈 식판 별 붙이기', tool: 'collage', minutes: 7,
      levels: { easy: '식판 조각에 별 하나를 붙인다.', base: '식판 조각에 먹은 만큼 별 두 개까지 붙인다.', challenge: '처음 먹어 본 반찬이 있으면 별 하나를 더해 세 개까지 붙인다.' },
      wrap: {
        teacher: '"긴 네모는 식판이에요. 오늘 먹을 만큼 받아 맛있게 먹었다면 식판에 별을 붙여요." 별을 붙이며 무엇을 먹었는지 말하게 한다. 많이 남긴 학생을 꾸짖지 않고 "내일은 조금만 달라고 말해 볼까요?"라고 말해 준다. 출구 2번에서 다 남긴다고 고른 학생에게 한 입 먹어 보기를 짚어 준다. 급식을 못 먹는 사정이 있는 학생이 있으면 이 활동을 그림 꾸미기로 바꾼다.',
        exitTicket: [
          { type: 'tool', tool: 'collage', options: { shapes: ['rect', 'star', 'circle'] }, prompt: '식판에 별을 붙여요.', target: { has: [{ shape: 'rect', min: 1 }, { shape: 'star', min: 1 }] }, difficulty: 0.1 },
          Q('싫은 반찬이 나오면요?', ['다 남겨요', '한 입 먹어 봐요'], 1, '한 입 먹어 보고, 많으면 조금만 받아요.'),
          MOOD,
        ],
      },
      worksheet: {
        title: '맛있게 먹었어요',
        items: [
          { type: 'draw', prompt: '오늘 급식에서 맛있게 먹은 것을 그려요.' },
          { type: 'check', prompt: '급식 시간에 한 것에 ✓ 해요.', options: ['손을 씻었어요', '먹을 만큼 받았어요', '인사했어요'] },
        ],
      },
    }),
    LUNCH({
      id: 'start.e12.lunch.wrap.chant', type: 'wrap', title: '"손 씻고, 줄 서고, 고맙습니다"',
      method: '급식 약속 구호', tool: 'timer', minutes: 7,
      levels: { easy: '구호 없이 손 비비기·줄 서기·두 손 모으기 동작만 교사와 함께 한다.', base: '구호 카드 차례를 맞추고 구호와 동작을 함께 한다.', challenge: '교사 없이 혼자 구호와 동작을 차례대로 해 보인다.' },
      wrap: {
        teacher: '"손 씻고! (손 비비기) 줄 서고! (차렷) 고맙습니다! (두 손 모아 인사)" 구호 카드 차례를 맞춘 뒤 반 전체가 동작과 함께 외친다. 출구 2번에서 말없이 남긴다고 고른 학생에게 "받기 전에 \'조금만 주세요\' 하면 남기지 않아요"라고 말해 준다. 오늘 점심시간에 구호대로 해 보자고 약속한다.',
        exitTicket: [
          CHANT('급식 구호', ['손 씻고', '줄 서고', '고맙습니다']),
          Q('밥이 많을 것 같으면요?', ['말없이 남겨요', '"조금만 주세요"'], 1, '받기 전에 덜어 달라고 말해요.'),
          MOOD,
        ],
      },
      worksheet: {
        title: '급식 약속',
        items: [
          { type: 'blank', prompt: '구호를 따라 써요.', text: '손 씻고, 줄 서고, ___!', answer: '고맙습니다' },
          { type: 'draw', prompt: '줄 서서 식판을 받는 모습을 그려요.' },
        ],
      },
    }),
    LUNCH({
      id: 'start.e12.lunch.wrap.pick', type: 'wrap', title: '내일 먹어 볼 음식 고르기',
      method: '내일 먹어 볼 음식 고르기', tool: 'wordcards', minutes: 7,
      levels: { easy: '교사가 보기 두 개(한 입 먹어 보기·바로 버리기)를 읽어 주고 함께 고른다.', base: '보기 세 개 가운데 처음 먹어 볼 때 할 일을 고르고, 내일 먹어 볼 음식을 말한다.', challenge: '먹어 볼 음식 두 가지를 쓴다.' },
      wrap: {
        teacher: '"처음 보는 음식이 나오면 어떻게 하기로 했지요? 내일 급식에서 처음 먹어 볼 음식이 있나요?" 카드를 읽어 주고 고른 뒤, 내일 먹어 볼 음식을 한 낱말로 말하게 한다. 먹지 못하는 음식이 있다고 말하는 학생에게는 "선생님이 알고 있을게요"라고만 하고 까닭을 캐묻지 않는다.',
        exitTicket: [
          PICKW('처음 먹어 볼 때', [C('try', '한 입 먹어 보기'), C('throw', '바로 버리기'), C('push', '친구에게 주기')], ['try'], '처음 먹어 볼 때 할 일은?'),
          { type: 'short', prompt: '내일 먹어 볼 음식을 써요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '먹어 볼 용기',
        items: [
          { type: 'draw', prompt: '내일 먹어 볼 음식을 그려요.' },
          { type: 'choice', prompt: '처음 보는 음식은?', options: ['한 입 먹어 봐요', '바로 버려요'], answer: '한 입 먹어 봐요' },
        ],
      },
    }),
  ];

  // =====================================================================================================
  // 몸 신호 말하고 도움 받기 (정서 지원)
  const SIGNAL = MOD('start.e12.signal');
  const NURSE = (prompt, place, d, more) => ({ prompt, toolOptions: { grid: [5, 3], places: SSAK, title: '새싹초 지도' }, target: { place }, difficulty: d, ...more });
  const T_SIGNAL = [
    SIGNAL({
      id: 'start.e12.signal.intro.body', type: 'intro', title: '몸 그림에서 아픈 곳 누르기',
      method: '몸 그림에서 아픈 곳 누르기', tool: 'body', minutes: 6,
      levels: { easy: '교사가 배·목 두 곳을 눌러 이름을 들려주고 학생은 자기 몸을 짚는다.', base: '세 곳(눈 더함)의 이름을 듣고 자기 몸에서 짚는다.', challenge: '네 곳(무릎 더함)을 짚고, 머리처럼 그림에 없는 곳은 자기 몸을 가리키며 이름을 말한다.' },
      intro: {
        teacher: '"몸이 보내는 신호가 있어요. 배가 콕콕, 목이 칼칼! 몸 그림에서 배는 어디일까요?" 종이 몸에서 배를 눌러 이름을 들려준 뒤, 학생들이 자기 배·목·머리를 손으로 짚어 보게 한다. "아파도 참으면 착한 어린이예요"라는 말이 나오면 "아픈 걸 참으면 선생님이 도와줄 수 있을까요? 말해 주는 게 용기예요"라고 되묻는다. 오늘은 몸 신호를 알아채고 말하는 법을 배운다고 밝힌다.',
        student: '선생님이 말하는 몸의 곳을 내 몸에서 손으로 짚어 보아요.',
        demo: { tool: 'body', options: { mode: 'parts', parts: ['배', '목', '눈', '무릎', '가슴'], names: true }, sequence: [{ parts: ['배'] }] },
        art: { draw: 'a friendly paper body outline with small cut-paper signal marks near the tummy and throat, a paper child pointing at their own tummy', banner: '몸이 보내는 신호' },
      },
      notes: '종이 몸에 머리 칸이 없어 머리는 학생이 자기 몸을 짚어 말한다. 학생에게 지금 아픈 곳을 발표하게 하지 않는다.',
    }),
    SIGNAL({
      id: 'start.e12.signal.intro.face', type: 'intro', title: '배 아픈 친구 얼굴 고르기',
      method: '아픈 얼굴 그림 고르기', tool: 'emotion', minutes: 6,
      levels: { easy: '교사가 얼굴 그림 두 장(찡그린·웃는)을 들고 배 아픈 친구 얼굴을 함께 고른다.', base: '얼굴 그림 세 장 가운데 고르는 시연을 보고 까닭을 듣는다.', challenge: '얼굴 그림 네 장을 보고 얼굴 말고 몸짓(배 잡기)으로도 알 수 있는 것을 말한다.' },
      intro: {
        teacher: '"가상 친구 솔이가 배를 잡고 있어요. 솔이 얼굴은 어떨까요?" 얼굴 그림 카드를 하나씩 읽어 주고 시연 단추로 찡그린 얼굴이 바구니에 담기는 모습을 보인다. "선생님이 얼굴 보면 다 알아요"라는 말이 나오면 "선생님이 다른 친구를 보고 있으면 솔이 얼굴을 못 볼 수도 있어요. 그럴 땐 어떻게 할까요?"라고 되묻는다.',
        student: '배가 아픈 솔이 얼굴은 어떤 얼굴일지 그림을 골라 보아요.',
        demo: { tool: 'emotion', options: { mode: 'pick', basket: '배 아픈 솔이', weather: false, cards: [C('pain', '찡그린 얼굴'), C('smile', '웃는 얼굴'), C('sleepy', '졸린 얼굴')], shuffle: false }, sequence: [{ pick: ['pain'] }] },
        art: { draw: 'a paper child holding their tummy with a frowning face at a classroom desk, a paper teacher kneeling down to ask gently', banner: '솔이는 어디가 아플까?' },
      },
    }),
    SIGNAL({
      id: 'start.e12.signal.activity.match', type: 'activity', title: '몸 신호와 할 말 잇기',
      method: '몸 신호와 할 말 잇기', tool: 'wordcards', minutes: 14,
      levels: { easy: '몸 신호 2개에 카드 2장을 잇고, 맞게 놓으면 초록 테두리가 생긴다.', base: '몸 신호 3개에 카드 3장을 잇는다.', challenge: '몸 신호 4개에 카드 5장(맞지 않는 카드 한 장)을 잇는다.' },
      activity: {
        title: '몸 신호 말 잇기', tool: 'wordcards',
        teacher: '"목이 말라요. 선생님께 어떻게 말할까요?" 신호 글을 읽어 주고 말 카드를 잇게 한 뒤, 이은 말을 반 전체가 따라 말한다. "그냥 참을래"를 잇는 학생에게 "참으면 몸이 나아질까요? 말하면 무엇을 할 수 있을까요?"라고 묻는다. 둘째 문항에서는 장소마다 말할 어른을 잇고, 아플 때 참지 않고 말하는 것이 나를 지키는 일이라고 짚는다.',
        task: '몸 신호를 듣고 맞는 말 카드를 이어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          MT('몸 신호와 할 말을 이어요.', [['목이 말라요', C('water', '"물 마실래요"')], ['추워요', C('coat', '"겉옷 입을래요"')], ['배가 아파요', C('tummy', '"배가 아파요"')], ['화장실이 급해요', C('wc', '"화장실 갈래요"')]], C('hold', '"그냥 참을래"'), 0.1),
          MT('이럴 때 누구에게 말해요?', [['교실에서 열이 나요', C('teacher', '담임 선생님')], ['보건실에 왔어요', C('nurse', '보건 선생님')], ['집에서 아파요', C('home', '집의 어른')], ['운동장에서 넘어졌어요', C('near', '가까운 선생님')]], C('nobody', '아무에게도'), 0.15),
          MT('이럴 때 몸 신호는?', [['물을 못 마셨어요', C('thirst', '목이 말라요')], ['바람이 세게 불어요', C('cold', '추워요')], ['너무 많이 뛰었어요', C('breath', '숨이 차요')], ['밥을 급히 먹었어요', C('ache', '배가 아파요')]], C('sleep', '졸려요'), 0.2,
            { conclude: '몸이 신호를 보내면 참지 말고 "○○해요"라고 말해요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '목이 마르면 선생님께 어떻게 말해요?', options: ['"물 마실래요"', '말없이 참아요'], answer: '"물 마실래요"' }] },
    }),
    SIGNAL({
      id: 'start.e12.signal.activity.role', type: 'activity', title: '선생님께 말하기 역할놀이',
      method: '선생님께 말하기 역할놀이', tool: 'timer', minutes: 13,
      levels: { easy: '차례 카드 2장을 맞추고 교사의 말을 따라 한다.', base: '차례 카드 3장을 맞추고 짝과 학생·선생님이 되어 해 본 뒤 3칸을 점검한다.', challenge: '차례 카드 4장을 맞추고 모둠 앞에서 해 본 뒤 4칸을 점검한다.' },
      activity: {
        title: '"배가 아파요" 말해 보기', tool: 'timer',
        teacher: '"손을 들고, 선생님, 배가 아파요! 그리고 아픈 곳을 손으로 짚어요." 교사가 시범을 보이고 짝과 역할을 나눠 해 본다. 선생님 역할은 "어디가 아파? 언제부터?"라고 물어 준다. 작은 소리로 웅얼거리는 학생에게 "선생님이 들을 수 있게 또박또박 말해 볼까요?"라고 말한다. 아픈 것을 말하는 것은 꾀병이 아니라 용기이고, 말해야 도움을 받을 수 있다는 것을 짚는다.',
        task: '아플 때 말하는 차례를 놓고 짝과 해 봐요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          STEPS('아플 때 말하는 차례예요.', '아플 때 말하기 차례', ['손 들기', '"아파요" 말하기', '아픈 곳 짚기'], '도움 기다리기', 0.1),
          SELFT('역할놀이 한 것에 표시해요.', '아플 때 말하기 점검', ['또박또박 말했어요', '아픈 곳을 짚었어요', '짝과 해 봤어요', '모둠 앞에서 했어요'], 0.15),
          TALK('"배가 아파요" 하고 말해요.', { levels: { easy: { prompt: '선생님을 따라 말해요.' }, challenge: { prompt: '모둠 앞에서 말해 봐요.' } }, conclude: '아프면 손 들고 "○○가 아파요" 하고 아픈 곳을 짚어요.' }),
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '선생님, 배가 ___!', answer: '아파요' }] },
    }),
    SIGNAL({
      id: 'start.e12.signal.activity.branch', type: 'activity', title: '몸이 이상할 때 고르기',
      method: '몸이 이상할 때 고르고 결과 보기', tool: 'emotion', minutes: 14,
      levels: { easy: '보기 2개 가운데 고르고, 고르면 결과 그림이 바로 보인다.', base: '보기 3개 가운데 고르고 결과는 확인한 뒤에 보인다.', challenge: '이어지는 다음 장면에서 한 번 더 고른다.' },
      activity: {
        title: '참을까, 말할까 고르기', tool: 'emotion',
        teacher: '"공부하다가 배가 아파요. 꾹 참을까요, 말할까요?" 장면을 읽어 주고 고른 뒤 결과 그림을 함께 본다. "꾹 참아요"를 고른 학생에게 "참다가 더 아파지면 어떻게 될까요? 선생님은 말해 주면 기뻐요"라고 말한다. 혼자 보건실에 가는 쪽을 고른 학생에게 "선생님이 모르면 찾으러 다녀야 해요. 먼저 말해요"라고 짚는다.',
        task: '몸이 이상한 장면을 듣고 할 일을 골라요.', levels: { easy: {}, base: { revealAfterCheck: true }, challenge: { revealAfterCheck: true } },
        items: [
          BR('배가 아파요. 어떻게 해요?', '공부하다가 배가 아파요.', CH('tell', '선생님께 말해요', '선생님이 돌봐 주셨어요.', '편안함'),
            [CH('hold', '꾹 참아요', '배가 점점 더 아파요.', '걱정', '참지 말고 말해요.'), CH('alone', '혼자 보건실 가요', '선생님이 찾으셨어요.', '놀람', '보건실도 선생님께 먼저 말하고 가요.')],
            { prompt: '"보건실 같이 가자" 하셨어요.', situation: '선생님이 "같이 가자" 하셨어요.', good: 'go', choices: [CH('go', '같이 가요', '보건 선생님이 살펴 주셨어요.', '편안함'), CH('fine', '괜찮다고 해요', '아픈데 아무도 몰라요.', '걱정', '아프면 괜찮다고 하지 않아요.')] }, 0.1),
          BR('넘어져 무릎이 아파요.', '쉬는 시간에 넘어져 무릎이 아파요.', CH('show', '선생님께 보여요', '선생님이 약을 발라 주셨어요.', '편안함'),
            [CH('hide', '바지로 숨겨요', '상처가 더러워질 수 있어요.', '걱정', '숨기지 말고 보여 드려요.'), CH('cry', '울기만 해요', '선생님이 어디인지 몰라요.', '슬픔', '울어도 괜찮아요. 아픈 곳도 알려요.')],
            { prompt: '"어디가 아파?" 물으셨어요.', situation: '보건 선생님이 "어디가 아파?" 하셨어요.', good: 'point', choices: [CH('point', '아픈 곳을 짚어요', '바로 알아보셨어요.', '편안함'), CH('quiet', '아무 말 안 해요', '어디를 봐야 할지 몰라요.', '걱정', '아픈 곳을 짚어 알려요.')] }, 0.15),
          BR('몸이 떨려요. 어떻게 해요?', '교실이 추워서 몸이 떨려요.', CH('say', '"추워요" 말해요', '선생님이 창문을 닫으셨어요.', '편안함'),
            [CH('shiver', '참고 떨어요', '몸이 더 차가워요.', '걱정', '추우면 말해요.'), CH('borrow', '친구 옷 입어요', '친구가 추워져요.', '속상함', '내 겉옷을 입거나 선생님께 말해요.')],
            { prompt: '"겉옷 입으렴" 하셨어요.', situation: '선생님이 "겉옷 입으렴" 하셨어요.', good: 'wear', choices: [CH('wear', '내 겉옷 입어요', '몸이 따뜻해졌어요.', '편안함'), CH('stay', '그냥 있어요', '계속 추워요.', '걱정', '도움을 들으면 해 봐요.')] }, 0.2,
            { conclude: '몸이 이상하면 참지 말고 선생님께 말해요. 말하는 게 용기예요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '공부하다가 배가 아프면?', options: ['꾹 참아요', '선생님께 말해요'], answer: '선생님께 말해요' }] },
      notes: '학생에게 아팠던 일이나 병을 묻지 않는다. 장면 속 가상 친구의 일로만 이야기한다.',
    }),
    SIGNAL({
      id: 'start.e12.signal.activity.place', type: 'activity', title: '보건실 가는 길 찾기',
      method: '보건실 가는 길 지도에서 찾기', tool: 'map', minutes: 13,
      levels: { easy: '새싹초 지도에 복도 길이 그려져 있고, 핀을 꽂으면 칸 이름이 보인다.', base: '길 그림 없이 보건실·교실·지나는 곳 칸을 찾는다.', challenge: '보건실을 찾은 뒤 보건실에 가기 전에 할 일을 보기에서 하나 더 고른다.' },
      activity: {
        title: '새싹초 보건실 찾기', tool: 'map',
        teacher: '"아플 때 가는 곳, 보건실은 새싹초 지도 어디에 있을까요? 병원 모양 그림을 찾아봐요." 보건실을 먼저 짚고, 교실에서 보건실까지 손가락으로 따라가며 지나는 곳을 말한다. 보건실에 "혼자 가도 돼요"라고 하는 학생에게 "선생님께 말하면 선생님이 보건실에 미리 알려 줄 수 있어요"라고 말한다. 활동 뒤 우리 학교 보건실이 교실에서 어느 쪽인지 몸으로 가리켜 본다.',
        task: '새싹초 지도에서 보건실 가는 길의 칸에 핀을 꽂아요.', levels: { easy: { readout: true, roads: HALL }, base: {}, challenge: {} },
        items: [
          NURSE('아플 때 가는 보건실 칸에 꽂아요.', '보건실', 0.1,
            { levels: { challenge: { prompt: '보건실을 찾고 먼저 할 일도요.', toolOptions: { ask: { q: '보건실에 가기 전에?', choices: ['선생님께 말해요', '혼자 뛰어가요'] } }, target: { place: '보건실', pick: 0 } } } }),
          NURSE('보건실 가는 길에 지나는 교무실은?', '교무실', 0.15),
          NURSE('다 나으면 돌아갈 우리 교실은?', '우리 교실', 0.2, { conclude: '아프면 선생님께 말하고, 보건실까지 가는 길을 알아 둬요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '보건실에 가기 전에 할 일은?', options: ['선생님께 말해요', '혼자 뛰어가요'], answer: '선생님께 말해요' }] },
      notes: '새싹초 지도는 가상이다. 우리 학교 보건실 위치를 교사가 실제로 짚어 준다.',
    }),
    SIGNAL({
      id: 'start.e12.signal.wrap.chant', type: 'wrap', title: '"아프면 말해요" 구호',
      method: '"말해요" 구호', tool: 'timer', minutes: 7,
      levels: { easy: '구호 없이 손 들기·입에 손 모으기 동작만 교사와 함께 한다.', base: '구호 카드 차례를 맞추고 구호와 동작을 함께 한다.', challenge: '교사 없이 혼자 구호와 동작을 해 보인다.' },
      wrap: {
        teacher: '"아프면! (배에 손) 참지 말고! (고개 젓기) 말해요! (손 들기)" 구호 카드 차례를 맞춘 뒤 반 전체가 동작과 함께 외친다. 출구 2번에서 참는 것이 착하다고 고른 학생에게 "아픈 걸 말하는 건 나를 아끼는 착한 일이에요"라고 말해 준다. 수업 뒤에도 몸이 이상하면 언제든 선생님께 말하라고 다시 알려 준다.',
        exitTicket: [
          CHANT('말해요 구호', ['아프면', '참지 말고', '말해요']),
          Q('아플 때 참으면 착한가요?', ['네, 착해요', '아니요, 말해요'], 1, '아프면 참지 말고 말해야 도움을 받아요.'),
          MOOD,
        ],
      },
      worksheet: {
        title: '아프면 말해요',
        items: [
          { type: 'blank', prompt: '구호를 따라 써요.', text: '아프면 참지 말고 ___!', answer: '말해요' },
          { type: 'draw', prompt: '손 들고 선생님께 말하는 내 모습을 그려요.' },
        ],
      },
    }),
    SIGNAL({
      id: 'start.e12.signal.wrap.pick', type: 'wrap', title: '내가 말할 사람 고르기',
      method: '내가 말할 사람 그림 고르기', tool: 'wordcards', minutes: 7,
      levels: { easy: '교사가 카드를 읽어 주고 학교에서 말할 사람 한 명을 함께 고른다.', base: '학교에서 말할 사람 두 명(담임·보건 선생님)을 고른다.', challenge: '학교에서 말할 사람을 고르고, 집에서 아플 때는 어떻게 할지도 고른다.' },
      wrap: {
        teacher: '"학교에서 몸이 아프면 누구에게 말할까요?" 카드를 하나씩 읽어 주고 고르게 한다. 모르는 사람을 고른 학생에게 "모르는 사람에게는 말하지 않아요. 학교에서 나를 아는 어른은 누구일까요?"라고 묻는다. 집에서는 누구에게 말하는지 이름이나 가족을 말하게 하지 않고 "집에 계신 어른께"로만 이야기한다.',
        exitTicket: [
          PICKW('아플 때 말할 사람', [C('teacher', '담임 선생님'), C('stranger', '모르는 사람'), C('nurse', '보건 선생님')], ['teacher', 'nurse'], '아플 때 말할 사람을 골라요.'),
          Q('집에서 아프면 어떻게 해요?', ['꾹 참아요', '집의 어른께 말해요'], 1, '집에서도 참지 말고 어른께 말해요.'),
          MOOD,
        ],
      },
      worksheet: {
        title: '내가 말할 사람',
        items: [
          { type: 'check', prompt: '학교에서 아플 때 말할 사람에 ✓ 해요.', options: ['담임 선생님', '보건 선생님', '모르는 사람'] },
          { type: 'draw', prompt: '선생님께 아프다고 말하는 모습을 그려요.' },
        ],
      },
    }),
  ];

  PaperLessons.registerModules([].concat(T_HEART, T_HELLO, T_FRIEND, T_ROOM, T_TOUR, T_TOILET, T_WASH, T_BELL, T_LINE, T_TURN, T_SIT, T_TIDY, T_LUNCH, T_SIGNAL));
})();
