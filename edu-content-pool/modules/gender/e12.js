/* 창체 법정교육 양성평등·성교육 — 초1-2 모듈 내용(edu-module.v1). 형식·작성 규칙: MODULES_BUILD.md, 계획: framework/mandatory.json 의 gender 초1-2.
 * 근거: research-mandatory §1·§2 — 교육기본법 제17조의2, 양성평등기본법 제30·36조, 성폭력방지법 제5조(시행령 제2조), 가정폭력방지법 제4조의3,
 *   학교보건법 제9조, 교육부 「학교 성교육 표준안」 초 범위(몸의 변화, 성별 고정관념 깨기, 몸의 경계·'싫어요' 말하기, 성폭력 신고 방법).
 * 초1-2 기준: 소리로 읽어 주는 짧은 문항, 카드 6자 안팎, 좋아요/안돼요 고르기·따라 하기·노래. 장면·인물은 직접 지은 것이다(동물 인물·가명 '하나'·'솔').
 * 주제 16개(1학년 8 · 2학년 8) × 도입 2 · 활동 3 · 정리 2 = 112모듈.
 *
 * 이 영역은 발행 전에 사람이 직접 본다. 모든 모듈에서 지키는 틀(saf-violence/e12.js 신변보호 틀과 같다):
 *   - 학생에게 겪은 일을 묻지 않는다. 장면은 그림 속 동물·가명 인물의 일로만 이야기하고, 손길·폭력은 '불편한 손길'·'아프게 해요'·'무서운 일'로만 말한다(행동을 그리지 않는다).
 *   - 성적 행위는 묘사하지 않는다. 몸 이름은 주제 objective·concepts 에 있는 것(눈·귀·손·발, 머리·가슴·배·엉덩이·생식기, 속옷으로 가리는 곳)과
 *     종이 몸 교구가 그리는 몸 겉 부분(코·혀·무릎·발목 — 감각·걷기 활동에만)만 쓴다.
 *   - 잘못은 늘 그렇게 한 사람에게 있다. 말한 아이는 잘한 것이고, 선물을 받았어도·가족이어도 아이 잘못이 아니다.
 *   - 성별 고정관념을 정답으로 만들지 않는다(색·놀이·직업·감정·집안일은 '누구나'). 가족 형태를 하나로 가정하지 않는다('집 어른'이라고 부른다).
 *   - 도움 받을 곳은 체계도 concepts 의 '믿는 어른'(담임 선생님·보건 선생님·집 어른)과 학교 안 자리(교실·보건실·교무실)만 쓴다.
 *     신고·상담 번호는 화면에 적지 않고, 계획대로 '[학교가 확인해 넣는 신고·상담 번호]' 칸을 교사가 활동지에서 함께 채운다.
 *   - 수업 중이나 뒤에 걱정되는 말을 꺼내는 학생이 있으면 그 자리에서 캐묻지 않고 "말해 줘서 고마워, 네 잘못이 아니야"라고 받은 뒤 학교의 대응 절차를 따른다.
 *
 * 수치·법 조항은 쓰지 않는다(근거 파일에 이 영역 초1-2 수치가 없다). 그림그래프 수는 수업용 가상 자료다.
 *
 * 사람 확인: (근거 파일에 세부 내용이 없어 일반 초등 저학년 성교육·양성평등·가정폭력 예방 교육 내용으로 쓴 문장 — 확인할 곳을 함께 적는다)
 *   - 몸 이름 범위: body-names 전체, my-body-boss.activity.safe-body-map — '속옷(수영복)이 가리는 곳 = 가슴·엉덩이·생식기, 나만의 소중한 곳',
 *     초2에 '생식기'를 바른 이름으로 쓰는 것, 초1 my-body-boss 에서는 '생식기' 대신 '속옷으로 가리는 곳'으로 부른 것 — 교육부 학교 성교육 표준안(초 저학년).
 *     감각·걷기 활동에 쓴 몸 겉 이름(코·혀·무릎·발목, grow-from-baby.wrap.body-grew·body-care.intro.senses-quiz·body-names 첫 문항)은 concepts 밖이지만
 *     민감하지 않은 이름이라 종이 몸 교구 한계 때문에 썼다 — 이 해석이 맞는지 확인.
 *   - body-names.activity.name-card-match: 계획의 '별명 카드'를 "거기"·"아래" 같은 흐린 말로 바꾼 것 — 교육부 학교 성교육 표준안.
 *   - body-names.activity.doctor-visit: '병원 진료는 집 어른이 곁에 있고 의사 선생님이 먼저 말해 줄 때 괜찮다', '소중한 곳은 내 손으로 씻는다',
 *     '아는 형이 "소중한 곳 보여 줘" 하면 "싫어요" 하고 떠나 집 어른께 알린다' — 교육부 학교 성교육 표준안·여성가족부 아동 성폭력 예방 교육 자료.
 *   - body-care 전체: 손 씻기(손바닥·손등·손가락 사이), 손 씻을 때(밥 먹기 전·화장실 뒤·밖에서 온 뒤), '속옷은 날마다 갈아입는다' — 질병관리청 손 씻기 안내·학교 보건 교재.
 *   - my-body-boss 전체: '안기·뽀뽀 같은 몸에 닿는 일은 내가 정한다, 가족·어른 손길도 싫으면 싫다고 말해도 된다, 다른 인사를 말해도 된다',
 *     touch-sort 의 '소중한 곳 만짐' 카드 — 교육부 학교 성교육 표준안(몸의 경계)·여성가족부 아동 성폭력 예방 교육 자료.
 *   - say-no-help 전체·known-person.activity.escape-moves: '싫어요(안 돼요) 말하기 → 자리 피하기 → 믿는 어른께 알리기' 세 단계, 단호한 몸짓(손바닥 펴기·눈 보기·또박또박),
 *     '불편한 일은 내 잘못이 아니다, 말하면 잘한 것' — 여성가족부·교육부 아동 성폭력 예방 교육 자료. 몸짓 차례는 우리 반 약속으로 썼다.
 *   - two-secrets 전체: '즐거운(깜짝) 비밀은 지켜도 되고, 마음이 무겁거나 무서운 비밀·숨기라는 비밀은 약속했어도 믿는 어른께 말한다, 알리는 것은 고자질이 아니다' — 여성가족부 아동 성폭력 예방 교육 자료.
 *   - known-person 전체: 꾀는 말의 예('선물 줄게 비밀', '몸 보여 줘', '둘만 가자', '과자 줄게 와', '혼자 오면 줄게', '문 잠그고 놀자', '몰래 사진 찍자'),
 *     '아는 사람도 예외 없다', '선물을 받았어도·따라갔어도·늦게 말해도 꾄 사람 잘못이다', '한 어른이 바쁘면 다른 어른께 다시 말한다' — 여성가족부 아동 성폭력 예방 교육 자료·교육부 학교 성교육 표준안.
 *   - invisible-line·ask-and-wait 전체: '한 팔 거리'(우리 반 약속 거리), '편안한 거리는 사람마다 다르다', '몸·물건·사진은 먼저 묻고, 웃으며 말해도 "싫어"면 멈추고 사과한다,
 *     "좋아" 뒤에도 "그만"이면 멈춘다' — 교육부 학교 성교육 표준안(경계·동의). stop-game 의 움직이기 10초·멈춤 5초는 놀이 진행 값이다.
 *   - colors-toys-all·jobs-no-gender·feel-all-ok 전체: 색·놀이·직업·감정 표현의 성별 고정관념 깨기 문구('누구나', '좋아하는 것은 사람마다',
 *     '"남자니까·여자니까" 대신 누구나'), 감정 색 약속(노랑 기쁨·파랑 슬픔·빨강 화남·초록 편안함) — 교육부 학교 성교육 표준안·양성평등 교육 자료(여성가족부·한국양성평등교육진흥원).
 *   - family-together·many-families 전체: 가족의 여러 모습(조부모·한부모·형제 많은·입양·다문화), 존중하는 말·상처 주는 말 예('왜 엄마 없어?', '진짜 엄마는?', '말이 이상해' 등),
 *     1학년이 할 수 있는 집안일(수저 놓기·신발 정리·장난감 정리, 칼·불은 어른과 함께) — 여성가족부 가족 다양성 교육 자료·교육부 학교 성교육 표준안.
 *   - many-families.activity.baby-grows·intro.baby-steps-move: '아기는 엄마 배 속에서 작게 시작해 커져서 태어나고, 가족(입양 가족도)은 옷·침대·기저귀를 준비하며 기다린다' —
 *     아기가 생기는 과정은 다루지 않는다. 이 범위가 표준안 초 저학년에 맞는지 교육부 학교 성교육 표준안으로 확인.
 *   - no-hitting-family·fight-vs-violence 전체: '가족 사이에도 때리기·밀치기·던지기·겁주기는 안 된다', '말로 하는 다툼과 폭력은 다르다',
 *     '밥 안 주기·혼자 두고 감'(돌봄을 주지 않는 일), '무서운 일은 집안 일이어도 믿는 어른께 말한다, 맞는 것은 아이 잘못이 아니다', 숨쉬기(들이쉬기·멈추기·내쉬기) —
 *     여성가족부 가정폭력 예방 교육 자료·보건복지부(아동권리보장원) 아동학대 예방 교육 자료.
 *   - say-no-help.activity.helper-places, no-hitting-family.activity.safe-place-map, fight-vs-violence.activity.help-route-map: 도움 받을 곳을 교실(담임)·보건실·교무실·도서실(사서 선생님)·집 어른으로만 썼다
 *     (계획의 경찰관·지구대·이웃 어른 집은 concepts 밖이라 뺐다). 집에서 생긴 일을 다루는 두 지도에는 집을 두지 않았다. 학교마다 배치가 다르니 교사 확인.
 *   - 도움 번호: say-no-help.activity.helper-places, no-hitting-family.activity.safe-place-map, known-person.wrap.helper-hand, fight-vs-violence.activity.help-route-map 활동지의
 *     '[학교가 확인해 넣는 신고·상담 번호]' 칸 — 학교가 확인한 번호를 교사가 채운다(이 파일에는 번호가 없다).
 */
(function () {
  const MOD = (topic, grades) => (o) => Object.assign({ schema: 'edu-module.v1', domain: 'gender', band: '초1-2', topic, grades }, o);
  const MOOD = { type: 'mood', prompt: '오늘 공부를 마친 내 마음은 어떤가요?' };
  const cut = (p) => p.replace(/\.$/, '');
  const C = (id, text, more) => Object.assign({ id, text }, more);
  const BLOCKS = ['q', 'e', 'h', 'qr'];

  // 글 카드 두 바구니(sortboard): 기본 6장(a 3·b 3), 쉬움 앞 4장, 도전 카드가 더 나옴 — x.a·x.b 는 그 바구니로, x.trap 은 어디에도 넣지 않는다
  const SB2 = (slots, prompt, a, b, x, d, more) => {
    const [A, B] = slots; const xa = x.a || []; const xb = x.b || []; const trap = x.trap || [];
    return {
      prompt, toolOptions: { slots, cards: [a[0], b[0], a[1], b[1], a[2], b[2]] }, target: { sort: { [A]: a, [B]: b } }, difficulty: d,
      levels: {
        easy: { prompt: `${cut(prompt)}(4장).`, toolOptions: { cards: [a[0], b[0], a[1], b[1]] }, target: { sort: { [A]: a.slice(0, 2), [B]: b.slice(0, 2) } } },
        challenge: { prompt: `${cut(prompt)}(더 많이).`, toolOptions: { more: [...xa, ...trap, ...xb] }, target: { sort: { [A]: [...a, ...xa], [B]: [...b, ...xb] } } },
      },
      ...more,
    };
  };
  // 장면 차례 놓기(story·timeline order): 기본 3장, 쉬움 첫 장면이 놓여 있음, 도전 틀린 장면 1장이 섞여 빼고 놓음
  const ORDER3 = (prompt, cards, wrong, d, more, slots) => {
    const ids = cards.map((c) => c.id);
    const lv = { easy: { state: { at: { [ids[0]]: 0, [ids[1]]: null, [ids[2]]: null } } } };
    if (wrong) lv.challenge = { toolOptions: { cards: [cards[2], wrong, cards[0], cards[1]] } };
    return { prompt, toolOptions: { slots: slots || ['먼저', '다음', '끝'], cards: [cards[2], cards[0], cards[1]] }, target: { order: ids }, difficulty: d, levels: lv, ...more };
  };
  // 동작 순서 카드(timer): 기본 3장, 쉬움 앞뒤 2장, 도전 3장 + 스스로 점검 한 줄
  const MOVES = (prompt, title, cards, check, d, more) => ({
    prompt, toolOptions: { title, cards: [cards[2], cards[0], cards[1]] }, target: { order: cards }, difficulty: d,
    levels: {
      easy: { prompt: `${cut(prompt)}(2장).`, toolOptions: { cards: [cards[2], cards[0]] }, target: { order: [cards[0], cards[2]] } },
      challenge: { prompt: `${cut(prompt)}, 점검도요.`, target: { order: cards, selfCheck: [check] } },
    },
    ...more,
  });
  // 리듬 따라 치기(keyboard rhythm): 쉬움 첫 마디만(박 수 보임), 기본 두 마디, 도전 두 마디를 내 리듬으로 채우기
  const RHY = (prompt, pattern, d, more) => {
    const half = []; let beats = 0; const val = { q: 1, e: 0.5, h: 2, qr: 1 };
    for (const b of pattern) { if (beats >= 4) break; half.push(b); beats += val[b]; }
    return {
      prompt, toolOptions: { mode: 'rhythm', meter: 4, measures: 2, blocks: BLOCKS, pattern }, target: { rhythm: pattern }, difficulty: d,
      levels: {
        easy: { prompt: `${cut(prompt)}(한 마디).`, toolOptions: { measures: 1, pattern: half, showBeats: true }, target: { rhythm: half } },
        challenge: { prompt: '두 마디를 내 리듬으로 채워요.', target: { beats: true } },
      },
      ...more,
    };
  };
  const RHY_EXIT = (prompt, pattern) => ({ type: 'tool', tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 2, blocks: BLOCKS, pattern }, prompt, target: { rhythm: pattern }, difficulty: 0.15 });
  const RHY_DEMO = (pattern) => ({ tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 2, blocks: BLOCKS, pattern }, sequence: [{ rhythm: pattern }] });
  // 갈림길(dilemma): 기본 2번 갈림, 쉬움 첫 갈림만(보기 2개), 도전 끝에서 까닭 카드 고르기
  const DILEMMA = (prompt, scene, path, reasons, good, d, more) => {
    const first = Object.assign({}, scene, { choices: scene.choices.map((c) => { const x = Object.assign({}, c); if (x.next) { delete x.next; x.ending = c.easyEnding || '잘 골랐어요.'; } delete x.easyEnding; return x; }) });
    const clean = Object.assign({}, scene, { choices: scene.choices.map((c) => { const x = Object.assign({}, c); delete x.easyEnding; return x; }) });
    return {
      prompt, toolOptions: { title: '어떻게 할까요?', scene: clean }, target: { path: [path] }, difficulty: d,
      levels: {
        easy: { prompt: `${cut(prompt)}(한 번).`, toolOptions: { scene: first }, target: { path: [[path[0]]] } },
        challenge: { prompt: `${cut(prompt)}, 까닭도요.`, toolOptions: { reasons, maxReasons: 1 }, target: { path: [path], reasons: [good] } },
      },
      ...more,
    };
  };
  // 칸 지도 핀(map): 장소에 핀 하나. 쉬움 핀 자리 이름이 바로 보임(활동 levels readout), 도전 헷갈리는 장소가 더 있는 지도
  const PIN = (prompt, base, more2, place, d, more) => ({
    prompt, toolOptions: { grid: [4, 3], places: base }, target: { place }, difficulty: d,
    levels: { challenge: { toolOptions: { places: [...base, ...more2] } } }, ...more,
  });
  // 그림 점검표(kitchen checklist): 쉬움 3개(맞는 것 2) · 기본 4개(맞는 것 3) · 도전 5개(헷갈리는 함정 1개 더)
  const LIST = (prompt, title, good, bad, trap, d, more) => {
    const ids = (a) => a.map((x) => x.id);
    return {
      prompt, toolOptions: { mode: 'checklist', title, items: [good[0], bad, good[1], good[2]] }, target: { checklist: ids(good) }, difficulty: d,
      levels: {
        easy: { prompt: `${cut(prompt)}(3개).`, toolOptions: { items: [good[0], bad, good[1]] }, target: { checklist: ids(good.slice(0, 2)) } },
        challenge: { prompt: `${cut(prompt)}(5개).`, toolOptions: { items: [good[0], bad, good[1], trap, good[2]] }, target: { checklist: ids(good) } },
      },
      ...more,
    };
  };
  // 정리 출구
  const SCALE = (situation, feeling, prompt) => ({ type: 'tool', tool: 'emotion', options: { mode: 'scale', situation, feeling, steps: 5, scaleLabels: { 1: '조금', 5: '아주 많이' } }, prompt: prompt || '내 마음은 얼마만큼인가요?', target: { level: 'any' }, difficulty: 0.1 });
  const SELF = (title, safety, prompt) => ({ type: 'tool', tool: 'timer', options: { title, safety }, prompt: prompt || '스스로 점검 칸에 표시해요.', target: { safety: true }, difficulty: 0.1 });
  const FILL = (prompt, who, label, cards, ans) => ({ type: 'tool', tool: 'story', options: { mode: 'fill', slots: [{ id: 'b1', who, label }], cards }, prompt, target: { fill: { b1: ans } }, difficulty: 0.15 });
  const SORT_EXIT = (prompt, slots, a, b) => ({ type: 'tool', tool: 'sortboard', options: { slots, cards: [a[0], b[0], a[1], b[1]] }, prompt, target: { sort: { [slots[0]]: a, [slots[1]]: b } }, difficulty: 0.15 });
  // 규칙 판(pattern): 빈칸 조각을 보기 단추로 고른다(rule). fill 의 빈칸 조각은 휴대폰에서 44px 보다 작아(2026-11-02 교구 결함) 보기 단추로 바꾸었다
  const RULEP = (prompt, seq, choices, pick, question) => ({ type: 'tool', tool: 'pattern', options: { mode: 'rule', seq, question: question || '빈칸에 올 것은?', choices }, prompt, target: { pick }, difficulty: 0.15 });

  const ALL = [];

  // =====================================================================================================
  // 1학년 · 아기에서 지금의 나까지
  const GROW = MOD('gender.e12.grow-from-baby', [1]);
  ALL.push(
    GROW({
      id: 'gender.e12.grow-from-baby.intro.lullaby-rhythm', type: 'intro', title: '자장가 리듬 따라 치기',
      method: '자장가 리듬 따라 치기', tool: 'keyboard', minutes: 6,
      levels: { easy: '교사가 앞 마디(두 박씩 끊어서)만 손뼉으로 쳐 주고 함께 따라 친다.', base: '시연의 두 마디 리듬을 듣고 반 전체가 손뼉으로 따라 친다.', challenge: '따라 친 뒤 리듬 하나를 바꿔 짝에게 손뼉으로 들려준다.' },
      intro: {
        teacher: '"자장자장 우리 아기, 이 노래 들어 본 적 있나요? 아기를 재울 때 불러 주는 노래예요." 시연 단추로 리듬 블록이 놓이는 모습을 보이고 손뼉으로 두 번 따라 친다. "아기 때 일은 기억이 안 나서 나랑 상관없어요"라는 말이 나오면 "기억은 안 나도 누군가 나를 안아 주고 재워 주었어요. 그래서 지금의 내가 있어요"라고 답한다. 끝에 다 같이 "나도 아기였어요!"라고 말한다.',
        student: '"자장자장" 리듬을 손뼉으로 따라 치고 "나도 아기였어요"를 말해요.',
        demo: RHY_DEMO(['q', 'q', 'h', 'q', 'q', 'h']),
        art: { draw: 'a paper baby sleeping in a small paper cradle while a caring grown-up hums, cut paper musical notes and a crescent moon above', banner: '나도 아기였어요', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
      },
      notes: '아기 사진이나 집안 이야기를 가져오게 하지 않는다(가족마다 사정이 다르다). 그림 속 아기로만 이야기한다.',
    }),
    GROW({
      id: 'gender.e12.grow-from-baby.intro.then-now-sort', type: 'intro', title: '아기 때·지금 물건 나누기',
      method: '아기 때·지금 물건 나누기', tool: 'sortboard', minutes: 6,
      levels: { easy: '교사가 카드 네 장(젖병·기저귀·책가방·줄넘기)만 읽어 주며 함께 나눈다.', base: '시연의 카드 여섯 장을 보고 어느 바구니인지 말한다.', challenge: '신발처럼 두 바구니에 다 맞는 물건을 떠올려 왜 그런지 말한다.' },
      intro: {
        teacher: '"이 물건은 아기 때 쓴 것일까요, 지금 쓰는 것일까요?" 카드를 하나씩 읽고 반 전체가 손으로 바구니를 가리킨 뒤 시연 단추로 나뉘는 모습을 보인다. "젖병은 아기 거라 창피해요"라는 말이 나오면 "누구나 아기 때 젖병을 썼어요. 창피한 게 아니라 그만큼 자란 거예요"라고 답한다. 오늘은 내가 자란 차례와 나를 돌봐 준 사람을 생각해 본다고 밝힌다.',
        student: '아기 때 쓴 물건과 지금 쓰는 물건을 손으로 가리켜 보아요.',
        demo: { tool: 'sortboard', options: { slots: ['아기 때', '지금'], cards: ['젖병', '책가방', '기저귀', '줄넘기', '딸랑이', '연필'] }, sequence: [{ sort: { '아기 때': ['젖병', '기저귀', '딸랑이'], 지금: ['책가방', '줄넘기', '연필'] } }] },
        art: { draw: 'two paper baskets on a shelf, one holding a baby bottle and a rattle, the other holding a school bag and a jump rope', banner: '아기 때와 지금', extra: [{ motif: 'leaf', x: 300, y: 222 }] },
      },
    }),
    GROW({
      id: 'gender.e12.grow-from-baby.activity.grow-strip', type: 'activity', title: '자란 차례 놓기',
      method: '자란 차례 세 장면 놓기', tool: 'timeline', minutes: 14,
      levels: { easy: '첫 장면(아기)이 놓여 있어 남은 두 장만 놓고, 놓으면 바로 맞는지 알려 준다.', base: '장면 세 장을 시간 띠 왼쪽부터 차례대로 놓는다.', challenge: '아직 오지 않은 때(어른 된 나·운전하기) 카드 한 장이 섞여 있어 빼고 놓는다. 셋째 문항에서 시기마다 할 수 있게 된 일을 잇는다(모든 단계).' },
      activity: {
        title: '내가 자란 차례 시간 띠', tool: 'timeline',
        teacher: '"아기였던 내가 1학년이 되기까지 어떤 차례로 자랐을까요?" 카드를 놓은 뒤 몸으로 따라 한다(웅크리기 → 아장아장 → 씩씩하게 걷기). "나는 혼자서 저절로 컸어요"라는 학생에게 "아기 때 밥은 누가 먹여 주었을까요? 나를 돌봐 준 손이 있었어요"라고 묻는다. 자라는 빠르기는 사람마다 달라도 괜찮다고 짚는다.',
        task: '자란 차례대로 장면 카드를 놓아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          ORDER3('내가 자란 차례로 놓아요.', [C('baby', '아기'), C('walk', '걸음마'), C('school', '1학년')], C('adult', '어른 된 나'), 0.1, {}, 3),
          ORDER3('할 수 있게 된 차례로 놓아요.', [C('milk', '우유 먹기'), C('step', '혼자 걷기'), C('write', '글자 쓰기')], C('drive', '운전하기'), 0.15, {}, 3),
          { prompt: '그때 할 수 있던 일을 이어요.', toolOptions: { mode: 'match', slots: [{ id: 'b', label: '아기 때' }, { id: 't', label: '어릴 때' }, { id: 'n', label: '지금' }], cards: [C('read', '책 읽기'), C('cry', '울어서 알리기'), C('run', '뛰어놀기')] }, target: { match: { b: 'cry', t: 'run', n: 'read' } }, difficulty: 0.2,
            conclude: '나는 조금씩 자랐어요. 그동안 나를 돌봐 준 사람이 있었어요.' },
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '가장 먼저인 때에 ○ 해요.', options: ['아기', '1학년'], answer: '아기' }] },
      notes: '자란 빠르기를 친구와 견주지 않는다. "뛰어놀기"를 지금에 놓아도 답을 바로잡기보다 "아기보다 자란 때"라는 것을 함께 본다.',
    }),
    GROW({
      id: 'gender.e12.grow-from-baby.activity.can-do-moves', type: 'activity', title: '이제 할 수 있는 동작',
      method: '이제 할 수 있는 동작 따라 하기', tool: 'timer', minutes: 13,
      levels: { easy: '동작 카드 2장(처음·끝)의 차례만 놓고 함께 따라 한다.', base: '동작 카드 3장을 아기 때부터 자란 차례로 놓고 따라 한다.', challenge: '3장을 놓고 이어서 해 본 뒤 스스로 점검 칸까지 표시한다.' },
      activity: {
        title: '자라서 할 수 있게 된 동작', tool: 'timer',
        teacher: '"아기 때는 못 했는데 지금은 할 수 있는 동작이 무엇일까요?" 카드를 놓은 뒤 자리에서 일어나 차례대로 흉내 낸다(기어가기 → 걷기 → 깡충). 빨리 하려고 서두르는 학생에게 "천천히 해도 괜찮아요. 내 몸이 할 수 있게 된 것을 느껴 봐요"라고 말한다. 몸이 불편한 친구는 손 동작으로 바꿔 해도 된다고 미리 밝힌다.',
        task: '동작 카드를 자란 차례로 놓고 따라 해요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          MOVES('걷는 동작을 자란 차례로 놓아요.', '걷기 동작', ['기어가기', '아장아장', '깡충 뛰기'], '이어서 해 봤어요', 0.1),
          MOVES('손 동작을 자란 차례로 놓아요.', '손 동작', ['딸랑이 쥐기', '숟가락 쥐기', '단추 채우기'], '흉내 내 봤어요', 0.15),
          MOVES('말을 자란 차례로 놓아요.', '말하기', ['울기', '첫 낱말 말하기', '노래 부르기'], '소리 내 봤어요', 0.2, { conclude: '아기 때보다 할 수 있는 일이 많아졌어요.' }),
        ],
      },
      worksheet: { items: [{ type: 'draw', prompt: '지금 할 수 있게 된 일을 그려요.' }] },
      notes: '셋째 문항의 "첫 낱말 말하기"는 아기가 처음 말을 하는 때다. 무슨 낱말인지는 묻지 않는다(집마다 부르는 말이 다르다).',
    }),
    GROW({
      id: 'gender.e12.grow-from-baby.activity.caring-hands', type: 'activity', title: '나를 돌봐 준 손 꾸미기',
      method: '나를 돌봐 준 손 꾸미기', tool: 'collage', minutes: 25,
      levels: { easy: '하트 조각(돌봐 준 손) 1개를 붙인다.', base: '하트 2개와 별(해 준 일) 2개를 붙인다.', challenge: '하트 3개·별 3개에 동그라미 말풍선(고마운 말) 1개까지 붙인다.' },
      activity: {
        title: '돌봐 준 손 색종이 판', tool: 'collage',
        teacher: '"나를 돌봐 준 손은 누구의 손일까요? 밥을 차려 준 손, 책을 읽어 준 손을 떠올려 봐요." 판에서는 하트 조각 = 돌봐 준 사람의 손, 별 조각 = 해 준 일, 동그라미 = 고마운 말로 정하고 붙인다. 돌봐 준 사람은 집 어른·선생님·이웃 누구든 괜찮다고 말해 주고, 가족 이야기를 억지로 꺼내게 하지 않는다. "혼자 컸어요"라는 학생에게 "오늘 아침 밥을 차려 준 손은요?"라고 묻는다.',
        task: '하트는 돌봐 준 손, 별은 해 준 일로 붙여요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          { prompt: '돌봐 준 손 하트를 2개 붙여요.', toolOptions: { shapes: ['heart', 'star', 'circle'], sizes: ['m', 'l'] }, target: { has: [{ shape: 'heart', min: 2 }] }, difficulty: 0.1,
            levels: { easy: { prompt: '돌봐 준 손 하트를 1개 붙여요.', target: { has: [{ shape: 'heart', min: 1 }] } }, challenge: { prompt: '돌봐 준 손 하트를 3개 붙여요.', target: { has: [{ shape: 'heart', min: 3 }] } } } },
          { prompt: '해 준 일 별을 2개 붙여요.', toolOptions: { shapes: ['heart', 'star', 'circle'], sizes: ['s', 'm'] }, target: { has: [{ shape: 'star', min: 2 }] }, difficulty: 0.15,
            levels: { easy: { prompt: '해 준 일 별을 1개 붙여요.', target: { has: [{ shape: 'star', min: 1 }] } }, challenge: { prompt: '별 3개와 말풍선 1개를 붙여요.', target: { has: [{ shape: 'star', min: 3 }, { shape: 'circle', min: 1 }] } } } },
          { prompt: '내 판을 보며 점검해요.', toolOptions: { shapes: ['heart', 'star', 'circle'] }, target: { selfCheck: ['돌봐 준 손을 붙였어요', '고마운 마음을 떠올렸어요'], minPieces: 2 }, difficulty: 0.2,
            conclude: '나를 돌봐 준 손 덕분에 내가 자랐어요. 생명은 소중해요.' },
        ],
      },
      worksheet: {
        items: [
          { type: 'draw', prompt: '나를 돌봐 준 손을 그려요.' },
          { type: 'choice', prompt: '나는 어떻게 자랐나요?', options: ['혼자 저절로', '돌봐 준 손 덕분에'], answer: '돌봐 준 손 덕분에' },
        ],
      },
      notes: '콜라주 판은 손 모양을 그리지 못해 하트 = 돌봐 준 손, 별 = 해 준 일, 동그라미 = 고마운 말로 정해 붙인다. 손 모양은 활동지에 그린다.',
    }),
    GROW({
      id: 'gender.e12.grow-from-baby.wrap.grown-weather', type: 'wrap', title: '자란 나에게 마음 날씨',
      method: '자란 나에게 마음 날씨 고르기', tool: 'emotion', minutes: 6,
      levels: { easy: '교사가 눈금을 "조금·많이" 두 가지로 읽어 주며 고르게 한다.', base: '눈금 5칸에서 지금 마음 크기를 고른다.', challenge: '고른 마음을 "나는 이만큼 자라서 ○○해요" 한 마디로 말한다.' },
      wrap: {
        teacher: '"나는 이만큼 자랐어요! 자란 나를 보면 마음이 얼마나 뿌듯한가요?" 눈금을 고른 뒤 손가락으로 몇 칸인지 보여 주게 한다. 작은 칸을 고른 학생도 괜찮다고 말해 주고 "내일은 또 조금 자라 있을 거예요"라고 말한다. 출구 2번에서 "혼자 저절로"를 고른 학생에게 오늘 꾸민 돌봐 준 손을 다시 보여 준다.',
        exitTicket: [
          SCALE('나는 이만큼 자랐어요.', '뿌듯함', '자란 내 마음 크기를 골라요.'),
          { type: 'choice', prompt: '나는 어떻게 자랐나요?', options: ['혼자 저절로', '돌봐 준 손 덕분에'], answer: 1, difficulty: 0.1, explain: '나를 돌봐 준 사람 덕분에 자랐어요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '아기에서 지금의 나까지',
        items: [
          { type: 'draw', prompt: '지금 내 모습을 그려요.' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '생명은 ___.', answer: '소중해요' },
        ],
        easy: { note: '"나도 아기였어요"를 떠올려요.', items: [{ type: 'draw', prompt: '아기였던 나를 그려요.' }] },
      },
    }),
    GROW({
      id: 'gender.e12.grow-from-baby.wrap.body-grew', type: 'wrap', title: '자란 몸 부분 짚기',
      method: '자란 몸 부분 짚기', tool: 'body', minutes: 6,
      levels: { easy: '교사가 무릎을 먼저 짚어 보이고 함께 무릎·발목을 고른다.', base: '혼자 걷게 해 준 두 곳을 스스로 고른다.', challenge: '고른 뒤 "걷기·뛰기"처럼 그 곳으로 할 수 있게 된 일을 말한다.' },
      wrap: {
        teacher: '"아기 때는 기어 다녔는데 지금은 걷고 뛰어요. 어디가 자라서 그렇게 됐을까요?" 종이 몸에서 고른 뒤 자기 무릎과 발목을 손으로 톡톡 짚어 본다. 끝에 다 같이 "소중한 내 몸!"이라고 외친다. 출구 2번에서 "아기 때 일은 상관없어요"를 고른 학생에게 "아기 때 자란 몸으로 지금 걷는 거예요"라고 말해 준다.',
        exitTicket: [
          { type: 'tool', tool: 'body', options: { mode: 'parts', parts: ['눈', '귀', '무릎', '발목'] }, prompt: '혼자 걷게 해 준 곳을 짚어요.', target: { parts: ['무릎', '발목'] }, difficulty: 0.15 },
          { type: 'choice', prompt: '아기 때 일은 나와 어때요?', options: ['상관없어요', '지금의 나와 이어져요'], answer: 1, difficulty: 0.1, explain: '아기 때부터 자라 지금의 내가 되었어요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '소중한 내 몸',
        items: [
          { type: 'check', prompt: '자라서 할 수 있게 된 일에 ✓ 해요.', options: ['혼자 걷기', '혼자 밥 먹기', '옷 입기'] },
          { type: 'draw', prompt: '뛰어노는 내 모습을 그려요.' },
        ],
      },
      notes: '종이 몸에 키·발·손 칸이 없어 무릎·발목(걷기)으로 바꾸었다. 학생의 키·몸을 친구와 견주지 않는다.',
    }),
  );

  // =====================================================================================================
  // 1학년 · 몸이 하는 일과 깨끗이 돌보기
  const CARE = MOD('gender.e12.body-care', [1]);
  ALL.push(
    CARE({
      id: 'gender.e12.body-care.intro.senses-quiz', type: 'intro', title: '몸 부분 듣고 짚기',
      method: '몸 부분 듣고 짚기', tool: 'body', minutes: 6,
      levels: { easy: '교사가 문항 세 개(냄새·소리·보기)만 읽어 주고 함께 짚는다.', base: '문항 다섯 개를 듣고 시연과 함께 짚는다.', challenge: '짚은 곳마다 하는 일을 두 가지씩 말한다(눈: 보기·눈물로 씻기).' },
      intro: {
        teacher: '"냄새를 맡는 곳은 어디일까요? 내 손가락으로 짚어 봐요." 반 전체가 자기 코를 짚은 뒤 시연 단추로 종이 몸에서 코·귀·눈이 차례로 골라지는 모습을 보인다. "귀로 냄새를 맡아요" 같은 장난 대답에는 "귀를 막고 냄새를 맡아 볼까요? 그래도 냄새가 나죠?"라고 되묻는다. 오늘은 몸이 하는 일과 몸을 깨끗이 돌보는 법을 배운다고 밝힌다.',
        student: '선생님이 묻는 곳을 내 몸에서 손가락으로 짚어 보아요.',
        demo: { tool: 'body', options: { mode: 'parts', parts: ['눈', '귀', '코', '혀', '무릎'], names: true }, sequence: [{ parts: ['코'] }, { parts: ['코', '귀'] }, { parts: ['코', '귀', '눈'] }] },
        art: { draw: 'paper children pointing to their nose, ears and eyes while a friendly paper teacher holds up picture cards of a flower, a bell and a book', banner: '몸이 하는 일', extra: [{ motif: 'flower', x: 300, y: 96 }] },
      },
      notes: '종이 몸에 손·발 칸이 없어 손·발이 하는 일은 학생이 자기 손·발을 흔들어 보게 한다.',
    }),
    CARE({
      id: 'gender.e12.body-care.intro.wash-song', type: 'intro', title: '손 씻기 노래 리듬',
      method: '손 씻기 노래 리듬 치기', tool: 'keyboard', minutes: 6,
      levels: { easy: '앞 마디("비누 거품 뽀글뽀글")만 함께 손뼉으로 친다.', base: '두 마디 노래 한 줄을 듣고 따라 친다.', challenge: '리듬에 맞춰 "손바닥·손등" 같은 씻는 동작 이름을 넣어 부른다.' },
      intro: {
        teacher: '"비누 거품 뽀글뽀글, 손을 씻어요!" 시연 단추로 리듬 블록이 놓이는 모습을 보이고, 손뼉 대신 손바닥을 비비는 흉내로 따라 친다. "씻기는 어른이 다 해 줘요"라는 말이 나오면 "아기 때는 그랬어요. 이제 1학년은 내 손으로 씻을 수 있어요"라고 답한다.',
        student: '"비누 거품 뽀글뽀글" 리듬에 맞춰 손 비비는 흉내를 내요.',
        demo: RHY_DEMO(['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'q', 'q', 'h']),
        art: { draw: 'paper hands rubbing soap bubbles under a paper faucet, round cut paper bubbles floating up with musical notes', banner: '비누 거품 뽀글뽀글', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
      },
    }),
    CARE({
      id: 'gender.e12.body-care.activity.part-job-match', type: 'activity', title: '몸 부분과 하는 일 잇기',
      method: '몸 부분과 하는 일 잇기', tool: 'mindmap', minutes: 14,
      levels: { easy: '가지 2개(눈·귀)에 카드 2장을 넣고, 놓으면 바로 맞는지 알려 준다.', base: '가지 4개(눈·귀·손·발)에 카드 4장을 넣는다.', challenge: '가지 4개에 카드 8장(가지마다 2장)을 넣는다.' },
      activity: {
        title: '"내 몸" 생각 그물', tool: 'mindmap',
        teacher: '"눈은 무슨 일을 할까요? 손은요?" 카드를 놓을 때마다 그 몸 부분을 실제로 움직여 본다(눈 깜빡, 손 쥐기, 발 콩콩). "잡기"를 발에 두는 학생에게 "발로 연필을 잡아 볼까요? 어느 쪽이 더 쉬울까요?"라고 묻는다. 몸의 부분마다 하는 일이 있어 모두 소중하다고 짚는다.',
        task: '하는 일 카드를 몸 부분 가지에 넣어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          { prompt: '하는 일을 몸 가지에 넣어요.', toolOptions: { topic: '내 몸', slots: ['눈', '귀', '손', '발'], cards: ['보기', '듣기', '잡기', '걷기'] }, target: { sort: { 눈: ['보기'], 귀: ['듣기'], 손: ['잡기'], 발: ['걷기'] } }, difficulty: 0.1,
            levels: { easy: { prompt: '눈·귀 가지에 넣어요.', toolOptions: { slots: ['눈', '귀'], cards: ['보기', '듣기'] }, target: { sort: { 눈: ['보기'], 귀: ['듣기'] } } },
              challenge: { prompt: '가지마다 2장씩 넣어요.', toolOptions: { cards: ['보기', '듣기', '잡기', '걷기', '책 읽기', '노래 듣기', '박수 치기', '공 차기'] }, target: { sort: { 눈: ['보기', '책 읽기'], 귀: ['듣기', '노래 듣기'], 손: ['잡기', '박수 치기'], 발: ['걷기', '공 차기'] } } } } },
          { prompt: '씻는 법을 몸 가지에 넣어요.', toolOptions: { topic: '깨끗이', slots: ['손', '이', '온몸'], cards: ['비누칠', '칫솔질', '목욕'] }, target: { sort: { 손: ['비누칠'], 이: ['칫솔질'], 온몸: ['목욕'] } }, difficulty: 0.15,
            levels: { easy: { prompt: '손·이 가지에 넣어요.', toolOptions: { slots: ['손', '이'], cards: ['비누칠', '칫솔질'] }, target: { sort: { 손: ['비누칠'], 이: ['칫솔질'] } } },
              challenge: { prompt: '가지마다 2장씩 넣어요.', toolOptions: { cards: ['비누칠', '칫솔질', '목욕', '손톱 깎기', '입 헹구기', '머리 감기'] }, target: { sort: { 손: ['비누칠', '손톱 깎기'], 이: ['칫솔질', '입 헹구기'], 온몸: ['목욕', '머리 감기'] } } } } },
          { prompt: '손 씻을 때를 골라 담아요.', toolOptions: { mode: 'pick', topic: '손 씻을 때', cards: ['밥 먹기 전', '자는 동안', '화장실 뒤', '그림 볼 때'] }, target: { pick: ['밥 먹기 전', '화장실 뒤'] }, difficulty: 0.2,
            levels: { easy: { toolOptions: { cards: ['밥 먹기 전', '자는 동안', '화장실 뒤'] } }, challenge: { prompt: '손 씻을 때를 모두 담아요(5장).', toolOptions: { cards: ['밥 먹기 전', '자는 동안', '화장실 뒤', '그림 볼 때', '밖에서 온 뒤'] }, target: { pick: ['밥 먹기 전', '화장실 뒤', '밖에서 온 뒤'] } } },
            conclude: '몸의 부분마다 하는 일이 있어요. 내 손으로 깨끗이 돌봐요.' },
        ],
      },
      worksheet: { items: [{ type: 'table', prompt: '하는 일을 이어 써요.', columns: ['몸', '하는 일'], cells: [['눈', ''], ['귀', ''], ['발', '']], answer: '보기, 듣기, 걷기' }] },
    }),
    CARE({
      id: 'gender.e12.body-care.activity.handwash-steps', type: 'activity', title: '손 씻기 차례 따라 하기',
      method: '손 씻기 차례 따라 하기', tool: 'timer', minutes: 13,
      levels: { easy: '동작 카드 2장(처음·끝)의 차례만 놓고 따라 한다.', base: '동작 카드 3장의 차례를 놓고 손으로 따라 한다.', challenge: '3장을 놓고 스스로 끝까지 이어 한 뒤 점검 칸에 표시한다.' },
      activity: {
        title: '손 씻기 차례 카드', tool: 'timer',
        teacher: '"손을 씻을 때 무엇부터 할까요?" 카드를 놓은 뒤 자리에서 비누칠 흉내로 손바닥 → 손등 → 손가락 사이를 문지른다. 손바닥만 문지르고 끝내는 학생에게 "손가락 사이에 숨은 때는 어떻게 할까요?"라고 묻는다. 씻는 시간보다 빠뜨리는 곳 없이 문지르는 것이 중요하다고 짚는다.',
        task: '손 씻는 차례대로 카드를 놓고 따라 해요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          MOVES('문지르는 차례로 놓아요.', '문지르기', ['손바닥', '손등', '손가락 사이'], '끝까지 문질렀어요', 0.1),
          MOVES('씻는 차례로 놓아요.', '손 씻기', ['물 묻히기', '비누칠', '물로 헹구기'], '혼자 씻어 봤어요', 0.15),
          MOVES('씻은 뒤 차례로 놓아요.', '씻은 뒤', ['물 잠그기', '물기 털기', '수건 닦기'], '수건으로 닦았어요', 0.2, { conclude: '비누로 손바닥·손등·손가락 사이까지 문질러요.' }),
        ],
      },
      worksheet: { items: [{ type: 'check', prompt: '손 씻을 때 문지를 곳에 ✓ 해요.', options: ['손바닥', '손등', '손가락 사이'] }] },
      notes: '씻는 시간(초)을 정해 주지 않는다 — 근거 파일에 수치가 없다. 문지르는 곳을 빠뜨리지 않는 것으로만 맞춘다.',
    }),
    CARE({
      id: 'gender.e12.body-care.activity.clean-day-plan', type: 'activity', title: '하루 깨끗이 점검표',
      method: '하루 깨끗이 점검표 채우기', tool: 'kitchen', minutes: 25,
      levels: { easy: '항목 3개 가운데 깨끗이 하는 일 2개를 고른다.', base: '항목 4개 가운데 3개를 고른다.', challenge: '항목 5개(헷갈리는 함정 1개)에서 고르고, 저녁 차례 카드도 놓는다.' },
      activity: {
        title: '아침·저녁 깨끗이 점검표', tool: 'kitchen',
        teacher: '"아침에 일어나서, 그리고 자기 전에 몸을 깨끗이 하려면 무엇을 할까요?" 점검표를 고른 뒤 그 일을 몸으로 흉내 낸다. "속옷은 더러워 보일 때만 갈아입어요"라는 학생에게 "속옷은 깨끗해 보여도 하루 동안 땀이 묻어요. 그래서 날마다 갈아입어요"라고 답한다. 집마다 씻는 때와 차례가 조금씩 다를 수 있다고 말해 준다.',
        task: '깨끗이 하는 일만 골라 표시해요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          LIST('아침에 할 일만 골라요.', '아침에 깨끗이', [C('face', '세수하기'), C('teeth', '이 닦기'), C('hair', '머리 빗기')], C('skip', '세수 안 하기'), C('wipe', '소매로 코 닦기'), 0.1),
          LIST('저녁에 할 일만 골라요.', '저녁에 깨끗이', [C('bath', '목욕하기'), C('under', '속옷 갈아입기'), C('brush', '이 닦기')], C('same', '속옷 그대로'), C('dirty', '흙손으로 눕기'), 0.15),
          { prompt: '목욕 뒤 차례로 놓아요.', toolOptions: { mode: 'order', slots: ['먼저', '다음', '끝'], cards: [C('pj', '잠옷 입기'), C('bath2', '목욕하기'), C('new', '새 속옷 입기')] }, target: { order: ['bath2', 'new', 'pj'] }, difficulty: 0.2,
            levels: { easy: { state: { at: { bath2: 0, new: null, pj: null } } } },
            conclude: '날마다 씻고, 속옷은 날마다 갈아입어요.' },
        ],
      },
      worksheet: {
        items: [
          { type: 'table', prompt: '하면 ○, 안 하면 ×를 써요.', columns: ['일', '○ / ×'], cells: [['세수하기', ''], ['속옷 갈아입기', ''], ['흙손으로 눕기', '']], answer: '○, ○, ×' },
          { type: 'check', prompt: '오늘 저녁 할 일에 ✓ 해요.', options: ['이 닦기', '속옷 갈아입기', '목욕하기'] },
        ],
      },
      notes: '집마다 목욕하는 날·차례가 다르다. 점검표는 "우리 집에서도 해 볼 일"로 말하고, 집에서 못 한 학생을 나무라지 않는다.',
    }),
    CARE({
      id: 'gender.e12.body-care.wrap.clean-or-not', type: 'wrap', title: '깨끗한 습관 나누기',
      method: '깨끗한 습관·아닌 습관 나누기', tool: 'sortboard', minutes: 6,
      levels: { easy: '교사가 카드 네 장을 하나씩 읽어 주며 함께 나눈다.', base: '카드 네 장을 스스로 바구니에 나눈다.', challenge: '안돼요 카드를 좋아요로 바꾸는 행동을 말로 한다.' },
      wrap: {
        teacher: '"이 습관은 몸을 깨끗하게 할까요?" 카드를 소리 내어 읽고 바구니에 나누게 한다. "손 안 씻고 간식"을 좋아요에 둔 학생에게 "손에 묻은 흙이 간식에 묻으면 어떻게 될까요?"라고 묻는다. 출구 2번 뒤 "내 몸은 내 손으로 깨끗이!"를 함께 말한다.',
        exitTicket: [
          SORT_EXIT('깨끗한 습관을 나누어요.', ['좋아요', '안돼요'], ['속옷 매일 갈기', '밥 전 손 씻기'], ['손 안 씻고 간식', '소매로 코 닦기']),
          { type: 'choice', prompt: '1학년은 어떻게 씻어요?', options: ['어른이 다 해 줘요', '내 손으로 씻어요'], answer: 1, difficulty: 0.1, explain: '1학년은 내 손으로 씻을 수 있어요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '내 몸 깨끗이 돌보기',
        items: [
          { type: 'choice', prompt: '깨끗한 습관에 ○ 해요.', options: ['밥 먹기 전 손 씻기', '흙손으로 간식 먹기'], answer: '밥 먹기 전 손 씻기' },
          { type: 'draw', prompt: '손을 씻는 내 모습을 그려요.' },
        ],
      },
    }),
    CARE({
      id: 'gender.e12.body-care.wrap.care-story', type: 'wrap', title: '몸 돌보는 하루 이야기',
      method: '몸 돌보는 하루 이야기 끝맺기', tool: 'story', minutes: 6,
      levels: { easy: '교사가 말 카드 두 장만 읽어 주고 함께 고른다.', base: '말 카드 세 장 가운데 알맞은 말을 고른다.', challenge: '고른 뒤 하나가 할 다음 말을 짝과 하나 더 지어 말한다.' },
      wrap: {
        teacher: '"하나는 오늘 세수하고, 손 씻고, 저녁에 목욕도 했어요. 마지막에 하나가 무슨 말을 할까요?" 말풍선 카드를 함께 읽고 고르게 한다. "귀찮아"를 고른 학생에게 "씻고 나면 몸이 어떤 느낌일까요?"라고 묻는다. 출구 2번에서 오늘 배운 속옷 갈아입기를 한 번 더 짚는다.',
        exitTicket: [
          FILL('하나의 마지막 말을 골라요.', '하나', '___', [C('good', '깨끗한 몸 좋아'), C('lazy', '귀찮아'), C('later', '내일 씻을래')], 'good'),
          { type: 'choice', prompt: '속옷은 언제 갈아입어요?', options: ['더러워 보일 때만', '날마다'], answer: 1, difficulty: 0.1, explain: '속옷은 날마다 갈아입어요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '깨끗한 내 몸이 좋아',
        items: [
          { type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '속옷은 ___ 갈아입어요.', answer: '날마다' },
          { type: 'draw', prompt: '깨끗이 씻은 내 얼굴을 그려요.' },
        ],
      },
    }),
  );

  // =====================================================================================================
  // 1학년 · 내 몸의 주인은 나: 좋은 손길과 불편한 손길
  const BOSS = MOD('gender.e12.my-body-boss', [1]);
  const TOUCH2 = ['좋은 손길', '불편한 손길'];
  const BOSS_R = [C('mine', '내 몸은 내가 정해요'), C('adult', '어른 말은 다 따라요', { why: '몸에 닿는 일은 어른이어도 내가 정해도 돼요.' }), C('sorry', '싫다고 하면 미안해서요', { why: '싫다고 말하는 것은 미안한 일이 아니에요.' })];
  ALL.push(
    BOSS({
      id: 'gender.e12.my-body-boss.intro.touch-weather', type: 'intro', title: '손길 장면 마음 날씨',
      method: '손길 장면 마음 날씨 고르기', tool: 'emotion', minutes: 6,
      levels: { easy: '교사가 장면 두 개(하이파이브·간지럼 계속하기)를 읽어 주고 함께 마음을 고른다.', base: '시연을 보고 장면마다 어떤 마음일지 스스로 말한다.', challenge: '같은 간지럼도 좋아하는 친구와 싫어하는 친구가 있을 수 있음을 말한다.' },
      intro: {
        teacher: '"친구와 하이파이브를 하면 어떤 마음일까요? 그만하라고 했는데 간지럼을 계속하면요?" 두세 명의 대답을 듣고 시연 단추로 장면과 마음이 이어지는 모습을 보인다. "간지럼은 웃기니까 좋은 거예요"라는 말이 나오면 "웃음이 나와도 그만하고 싶을 수 있어요. 그 마음은 누가 정할까요?"라고 되묻는다. 오늘은 내 몸에 닿는 일은 내가 정한다는 것을 배운다고 밝힌다.',
        student: '두 장면을 보고 그림 속 친구의 마음을 짝에게 말해 보아요.',
        demo: { tool: 'emotion', options: { mode: 'match', slots: [{ id: 'hi', label: '하이파이브' }, { id: 'tk', label: '멈춰도 간지럼' }], cards: ['기쁨', '불편함'] }, sequence: [{ match: { hi: '기쁨', tk: '불편함' } }] },
        art: { draw: 'two paper rabbit friends giving each other a high five on one side, and on the other side one rabbit holding up a hand to say stop while the other keeps tickling', banner: '좋은 손길, 불편한 손길', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
      },
      notes: '그림 속 토끼의 일로만 이야기한다. 학생에게 누가 어떻게 만졌는지 묻지 않는다.',
    }),
    BOSS({
      id: 'gender.e12.my-body-boss.intro.my-body-chant', type: 'intro', title: '"내 몸은 내 거예요" 구호',
      method: '"내 몸은 내 거예요" 구호 리듬', tool: 'keyboard', minutes: 6,
      levels: { easy: '앞 구절("내 몸은 소중해")만 함께 손뼉으로 친다.', base: '구호 두 마디를 듣고 손뼉으로 따라 치며 말한다.', challenge: '구호를 짝과 한 구절씩 주고받으며 친다.' },
      intro: {
        teacher: '"내 몸은 소중해, 내가 정해요!" 시연 단추로 리듬 블록이 놓이는 모습을 보이고, 반 전체가 손뼉과 함께 세 번 따라 말한다. "어른이 하라면 해야 해요"라는 말이 나오면 "어른 말씀을 잘 듣는 건 좋아요. 그런데 내 몸에 닿는 일은 내가 싫으면 싫다고 말해도 돼요"라고 답한다.',
        student: '"내 몸은 소중해, 내가 정해요!"를 손뼉 치며 따라 말해요.',
        demo: RHY_DEMO(['q', 'q', 'q', 'q', 'q', 'q', 'h']),
        art: { draw: 'paper children standing proudly with hands on their chests, a big cut paper heart above them', banner: '내 몸은 내가 정해요', extra: [{ motif: 'heart', x: 300, y: 96, color: 'rose' }] },
      },
    }),
    BOSS({
      id: 'gender.e12.my-body-boss.activity.touch-sort', type: 'activity', title: '좋은 손길·불편한 손길',
      method: '좋은 손길·불편한 손길 나누기', tool: 'sortboard', minutes: 14,
      levels: { easy: '카드 4장, 틀린 바구니에 넣으면 까닭을 말하고 되돌아온다(바구니마다 장 수가 보인다).', base: '카드 6장을 다 넣은 뒤 확인한다.', challenge: '카드 8장, "묻고 안아 주기"처럼 물어본 손길과 장난 손길이 더 섞인다.' },
      activity: {
        title: '손길 카드 두 바구니', tool: 'sortboard',
        teacher: '"이 손길은 좋은 손길일까요, 불편한 손길일까요?" 카드를 반 전체가 소리 내어 읽은 뒤 넣는다. 둘째 문항에서 "가족이 하는 건 싫어도 참아야 해요"라는 학생에게 "가족이어도 내가 싫으면 싫다고 말해도 돼요. 가족은 그 말을 들어 줄 거예요"라고 답한다. 같은 손길도 내가 싫으면 불편한 손길이 된다고 짚는다.',
        task: '손길 카드를 좋은·불편한 바구니에 나누어요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: { shuffle: true } },
        items: [
          SB2(TOUCH2, '친구 손길을 나누어요.', ['하이파이브', '어깨 토닥', '묻고 손잡기'], ['멈춰도 간지럼', '몰래 쿡 찌르기', '꽉 잡고 안 놓기'], { a: ['같이 손뼉'], b: ['장난 밀치기'] }, 0.1),
          SB2(TOUCH2, '가족 손길도 나누어요.', ['잘 자 토닥', '"안아도 돼?"', '손잡고 걷기'], ['싫다는데 뽀뽀', '아픈데 꽉 잡기', '"참아" 하며 안기'], { a: ['묻고 안아 주기'], b: ['싫다는데 업기'] }, 0.15),
          SB2(TOUCH2, '어른 손길도 나누어요.', ['악수하기', '넘어질 때 잡기', '약 발라 주기'], ['허락 없이 뽀뽀', '싫은데 무릎에', '소중한 곳 만짐'], { a: ['묻고 머리 쓰담'], b: ['몰래 끌어안기'] }, 0.2, { conclude: '내 몸에 닿는 일은 내가 정해요. 불편하면 말해요.' }),
        ],
      },
      worksheet: { items: [{ type: 'table', prompt: '좋으면 ○, 불편하면 ×를 써요.', columns: ['손길', '○ / ×'], cells: [['하이파이브', ''], ['멈춰도 간지럼', ''], ['묻고 손잡기', '']], answer: '○, ×, ○' }],
        easy: [{ type: 'choice', prompt: '좋은 손길에 ○ 해요.', options: ['하이파이브', '멈춰도 간지럼'], answer: '하이파이브' }] },
      notes: '"소중한 곳 만짐"은 그림 없이 글로만 보인다. 이 카드를 읽을 때 "이런 일은 누가 하든 안 돼요. 있으면 믿는 어른께 말해요"라고 담담하게 덧붙이고 장면을 자세히 말하지 않는다.',
    }),
    BOSS({
      id: 'gender.e12.my-body-boss.activity.ask-hug-role', type: 'activity', title: '안아도 돼? 갈림길',
      method: '안아도 돼? 갈림길 고르기', tool: 'dilemma', minutes: 13,
      levels: { easy: '첫 갈림에서 보기 2개 가운데 한 번만 고른다.', base: '고른 뒤 이어지는 장면에서 한 번 더 고른다(갈림 2번).', challenge: '갈림 2번을 지나 끝에서 까닭 카드 3장 가운데 하나를 고른다.' },
      activity: {
        title: '내가 정하는 인사', tool: 'dilemma',
        teacher: '"고모가 반가워서 \'뽀뽀해 줘\' 하세요. 나는 뽀뽀는 싫고 하이파이브는 좋아요. 어떻게 할까요?" 보기를 고르기 전에 반 전체가 손을 들어 어느 쪽인지 보인다. "싫지만 꾹 참아요"를 고른 학생에게 "참으면 내 마음은 어떨까요? 다른 인사를 말해도 고모는 기뻐하실 거예요"라고 묻는다. 고른 뒤 \'처음부터 다른 길\'로 다른 결과도 함께 보고, 싫다고 말하는 것은 버릇없는 일이 아니라고 짚는다.',
        task: '장면마다 할 일을 고르고 결과를 봐요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          DILEMMA('고모가 뽀뽀해 달래요. 골라요.', { text: '고모가 "뽀뽀해 줘" 하세요. 나는 뽀뽀가 싫어요.', motif: 'house', choices: [
            { id: 'endure', text: '싫지만 꾹 참아요', result: '마음이 불편했어요.', why: '싫으면 다른 인사를 말해도 돼요.' },
            { id: 'hi5', text: '"하이파이브 할래요"', result: '고모가 "그래!" 하며 손을 드셨어요.', easyEnding: '고모와 하이파이브를 했어요.', next: { text: '고모가 손을 들고 기다리세요.', choices: [
              { id: 'clap', text: '신나게 하이파이브', result: '둘 다 웃었어요.', ending: '내가 정한 인사로 반갑게 만났어요.' },
              { id: 'force', text: '미안해서 뽀뽀해요', result: '또 마음이 불편해졌어요.', why: '싫다고 한 건 미안할 일이 아니에요.' }] } }] },
          ['hi5', 'clap'], BOSS_R, 'mine', 0.1),
          DILEMMA('친구가 안아 준대요. 골라요.', { text: '친구가 "안아 줄게" 하며 다가와요. 나는 안기 싫어요.', motif: 'flower', choices: [
            { id: 'wave', text: '"손 흔들기로 할래"', result: '친구가 "알았어" 했어요.', easyEnding: '친구와 손을 흔들었어요.', next: { text: '친구가 조금 서운해 보여요.', choices: [
              { id: 'smile', text: '웃으며 같이 놀아요', result: '친구도 금방 웃었어요.', ending: '싫다고 말해도 친구와 잘 지내요.' },
              { id: 'give', text: '서운할까 봐 안겨요', result: '내 마음이 불편해요.', why: '친구가 서운해도 내 몸은 내가 정해요.' }] } },
            { id: 'quiet', text: '말없이 안겨요', result: '안기고 나서 마음이 불편했어요.', why: '말해야 친구가 내 마음을 알아요.' }] },
          ['wave', 'smile'], BOSS_R, 'mine', 0.15),
          DILEMMA('할아버지가 안아 보재요. 골라요.', { text: '할아버지가 "안아 보자" 하세요. 나는 지금 안기 싫어요.', motif: 'house', choices: [
            { id: 'run', text: '대답 없이 도망가요', result: '할아버지가 놀라셨어요.', why: '말로 "나중에요"라고 해도 돼요.' },
            { id: 'later', text: '"나중에 안을래요"', result: '할아버지가 "그래, 나중에" 하세요.', easyEnding: '할아버지가 웃으며 기다려 주셨어요.', next: { text: '할아버지가 웃으며 손을 내미세요.', choices: [
              { id: 'hand', text: '"손잡아요" 해요', result: '할아버지 손을 잡았어요.', ending: '내가 좋은 인사로 마음을 전했어요.' },
              { id: 'must', text: '억지로 안겨요', result: '마음이 무거웠어요.', why: '싫다고 한 뒤에는 억지로 하지 않아도 돼요.' }] } }] },
          ['later', 'hand'], BOSS_R, 'mine', 0.2, { conclude: '안기·뽀뽀는 내가 정해요. 싫으면 다른 인사를 말해요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '뽀뽀가 싫을 때 무엇을 해요?', options: ['다른 인사를 말해요', '꾹 참아요'], answer: '다른 인사를 말해요' }] },
      notes: '장면의 어른·친구는 나쁜 사람이 아니다 — 반가워서 한 말이다. 싫다고 말하는 것과 상대를 미워하는 것은 다르다는 점을 짚는다.',
    }),
    BOSS({
      id: 'gender.e12.my-body-boss.activity.safe-body-map', type: 'activity', title: '내 몸의 주인 지도',
      method: '내 몸의 주인 지도 꾸미기', tool: 'body', minutes: 25,
      levels: { easy: '종이 몸에서 소중한 곳을 고르면 그 이름이 바로 보인다.', base: '소중한 곳을 고르고, 내가 정하는 손길 물음 두 개에 답한다.', challenge: '헷갈리는 몸 부분이 더 있는 종이 몸에서 고르고, 물음마다 "물어봐 줘요" 말을 짝과 해 본다.' },
      activity: {
        title: '소중한 곳 지도', tool: 'body',
        teacher: '"내 몸에서 속옷으로 가리는 곳은 나만의 소중한 곳이에요. 종이 몸에서 찾아볼까요?" 종이 몸에서 가슴을 고른 뒤, 엉덩이와 속옷으로 가리는 곳도 소중한 곳이라고 말로 알려 준다. 웃는 학생이 있으면 "부끄러운 곳이 아니라 소중한 곳이에요"라고 담담하게 말한다. 내 몸 모두가 소중하고, 어디든 내가 싫으면 "싫어요"라고 말해도 된다고 짚는다.',
        task: '종이 몸에서 소중한 곳을 짚고 물음에 답해요.', levels: { easy: { names: true }, base: {}, challenge: {} },
        items: [
          { prompt: '속옷이 가리는 곳을 짚어요.', toolOptions: { mode: 'parts', parts: ['가슴', '눈', '무릎', '어깨'] }, target: { parts: ['가슴'] }, difficulty: 0.1,
            levels: { challenge: { toolOptions: { parts: ['가슴', '배', '눈', '무릎', '어깨', '목'] } } } },
          { prompt: '소중한 곳을 만지려 하면요?', toolOptions: { mode: 'parts', parts: ['가슴', '배'], readOnly: true, ask: { q: '소중한 곳을 만지려 해요.', choices: ['"싫어요" 말해요', '꾹 참아요', '비밀로 해요'] } }, target: { pick: 0 }, difficulty: 0.15 },
          { prompt: '하이파이브 하고 싶을 때는요?', toolOptions: { mode: 'parts', parts: ['손목', '어깨'], readOnly: true, ask: { q: '친구와 하이파이브 하고 싶어요.', choices: ['먼저 물어봐요', '그냥 쳐요'] } }, target: { pick: 0 }, difficulty: 0.2,
            conclude: '내 몸의 주인은 나예요. 손길은 묻고, 내가 정해요.' },
        ],
      },
      worksheet: {
        items: [
          { type: 'table', prompt: '소중한 곳이면 ○를 써요.', columns: ['몸', '○'], cells: [['가슴', ''], ['엉덩이', ''], ['속옷으로 가리는 곳', '']], answer: '○, ○, ○' },
          { type: 'draw', prompt: '내가 좋아하는 인사를 그려요.' },
        ],
      },
      notes: '종이 몸에 엉덩이·입 칸이 없어 가슴만 짚고 나머지는 교사가 말로 알려 준다. 학생의 몸이나 친구의 몸을 가리키게 하지 않는다. 계획의 스티커 붙이기는 둘째·셋째 물음(내가 정하는 손길)과 활동지 그림으로 바꾸었다.',
    }),
    BOSS({
      id: 'gender.e12.my-body-boss.wrap.feeling-check', type: 'wrap', title: '몸 마음 신호 점검',
      method: '몸 마음 신호 스스로 점검', tool: 'timer', minutes: 6,
      levels: { easy: '교사가 점검 칸 두 개만 읽어 주고 함께 표시한다.', base: '점검 칸 세 개를 스스로 읽고 표시한다.', challenge: '표시한 칸 하나를 친구에게 말로 설명한다.' },
      wrap: {
        teacher: '"오늘 배운 약속을 마음으로 다시 짚어 봐요." 점검 칸을 함께 읽고 표시한 뒤 코로 숨을 크게 들이쉬고 천천히 내쉬는 숨쉬기를 세 번 한다. 출구 2번에서 "참아요"를 고른 학생에게 "불편하면 말해도 돼요. 말하면 어른이 도와줄 수 있어요"라고 말해 준다.',
        exitTicket: [
          SELF('몸 마음 약속', ['불편하면 말해요', '내 몸은 내가 정해요', '숨을 크게 쉬어요']),
          { type: 'choice', prompt: '가족 손길이 싫으면요?', options: ['참아야 해요', '싫다고 말해요'], answer: 1, difficulty: 0.1, explain: '가족이어도 싫으면 싫다고 말해도 돼요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '내 몸의 주인은 나',
        items: [
          { type: 'check', prompt: '지킬 약속에 ✓ 해요.', options: ['불편하면 말해요', '친구에게 먼저 물어요', '싫다는 말을 들어 줘요'] },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '내 몸의 주인은 ___예요.', answer: '나' },
        ],
      },
    }),
    BOSS({
      id: 'gender.e12.my-body-boss.wrap.boss-story', type: 'wrap', title: '내 몸 주인 이야기 말풍선',
      method: '내 몸 주인 이야기 말풍선', tool: 'story', minutes: 6,
      levels: { easy: '교사가 말 카드 두 장만 읽어 주고 함께 고른다.', base: '말 카드 세 장 가운데 알맞은 말을 고른다.', challenge: '고른 뒤 친구가 할 대답("알았어, 미안해")도 짝과 말해 본다.' },
      wrap: {
        teacher: '"하나가 그만하라고 했는데 친구가 간지럼을 멈추지 않아요. 하나는 뭐라고 말할까요?" 말 카드를 함께 읽고 고른 뒤 반 전체가 단호한 목소리로 따라 말한다. "웃으면서 참아요"를 고른 학생에게 "웃으면 친구는 계속해도 되는 줄 알 수 있어요. 어떻게 말하면 알까요?"라고 묻는다.',
        exitTicket: [
          FILL('하나가 할 말을 골라요.', '하나', '___', [C('stop', '"그만해 줘"'), C('laugh', '웃으며 참기'), C('more', '"더 해 줘"')], 'stop'),
          { type: 'choice', prompt: '어른 손길은 다 참아요?', options: ['네, 다 참아요', '싫으면 말해요'], answer: 1, difficulty: 0.1, explain: '어른 손길도 싫으면 싫다고 말해요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '"그만해 줘" 말하기',
        items: [
          { type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '싫으면 "___ 줘"라고 말해요.', answer: '그만해' },
          { type: 'draw', prompt: '"그만해 줘" 말하는 내 얼굴을 그려요.' },
        ],
      },
    }),
  );

  // =====================================================================================================
  // 1학년 · 싫어요·안 돼요·도와주세요
  const NO = MOD('gender.e12.say-no-help', [1]);
  const SCHOOL = [{ name: '교실', icon: 'school', at: [0, 0] }, { name: '보건실', icon: 'hospital', at: [3, 0] }, { name: '교무실', icon: 'office', at: [0, 2] }, { name: '집', icon: 'house', at: [3, 2] }];
  const SCHOOL_MORE = [{ name: '운동장', icon: 'park', at: [1, 1] }, { name: '도서실', icon: 'library', at: [2, 2] }];
  ALL.push(
    NO({
      id: 'gender.e12.say-no-help.intro.three-words-song', type: 'intro', title: '세 마디 노래 따라 부르기',
      method: '세 마디 노래 따라 부르기', tool: 'keyboard', minutes: 6,
      levels: { easy: '교사가 "싫어요" 한 마디만 손뼉으로 쳐 주고 함께 따라 부른다.', base: '"싫어요·안 돼요" 두 마디 리듬을 따라 치고 "도와주세요"를 함께 부른다.', challenge: '같은 리듬을 크고 단호한 목소리로 바꿔 불러 본다.' },
      intro: {
        teacher: '"싫어요! 안 돼요! 도와주세요!" 시연 단추로 리듬 블록이 놓이는 모습을 보이고, 손뼉과 함께 크게 따라 부른다. 작은 목소리로 부르는 학생에게 "작은 목소리도 괜찮아요. 한 번은 배에 힘을 주고 크게 해 볼까요?"라고 말한다. "말하면 혼나요"라는 말이 나오면 "불편한 일을 말하는 것은 혼날 일이 아니라 잘한 일이에요"라고 답한다.',
        student: '"싫어요! 안 돼요! 도와주세요!"를 손뼉 치며 크게 따라 불러요.',
        demo: RHY_DEMO(['q', 'q', 'q', 'qr', 'q', 'q', 'q', 'qr']),
        art: { draw: 'paper children holding up open palms and singing loudly together, bold cut paper musical notes around them', banner: '싫어요! 안 돼요! 도와주세요!', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
      },
    }),
    NO({
      id: 'gender.e12.say-no-help.intro.uneasy-scene', type: 'intro', title: '불편한 장면 마음 고르기',
      method: '불편한 장면 마음 고르기', tool: 'emotion', minutes: 6,
      levels: { easy: '교사가 마음 카드 두 개(무서움·기쁨)만 가리키며 함께 고른다.', base: '마음 카드 네 장 가운데 토끼의 마음을 스스로 말한다.', challenge: '마음과 함께 몸이 보내는 신호(가슴 두근두근)를 말한다.' },
      intro: {
        teacher: '"모르는 사람이 토끼에게 손을 뻗으며 다가와요. 토끼 마음은 어떨까요?" 두세 명의 대답을 듣고 시연 단추로 마음 카드가 바구니에 담기는 모습을 보인다. "토끼가 겁쟁이예요"라는 말이 나오면 "무서운 마음은 나를 지키라는 신호예요. 겁쟁이가 아니에요"라고 답한다. 오늘은 불편할 때 말하고, 피하고, 알리는 차례를 배운다고 밝힌다.',
        student: '그림 속 토끼의 마음을 골라 짝에게 말해 보아요.',
        demo: { tool: 'emotion', options: { mode: 'pick', basket: '토끼 마음', cards: ['무서움', '기쁨', '걱정', '신남'], shuffle: false }, sequence: [{ pick: ['무서움', '걱정'] }] },
        art: { draw: 'a paper rabbit child stepping back with a worried face as an unknown paper figure reaches out a hand from a distance, a teacher visible far away', banner: '마음이 불편해요', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
      },
      notes: '장면은 다가오는 손까지만 그린다. 학생에게 비슷한 일이 있었는지 묻지 않는다.',
    }),
    NO({
      id: 'gender.e12.say-no-help.activity.three-steps', type: 'activity', title: '말하기·피하기·알리기',
      method: '말하기·피하기·알리기 세 칸 놓기', tool: 'story', minutes: 14,
      levels: { easy: '첫 장면이 놓여 있어 남은 두 장만 놓고, 놓으면 바로 맞는지 알려 준다.', base: '장면 세 장을 차례대로 놓는다.', challenge: '"혼자 꾹 참아요" 같은 틀린 장면이 섞여 있어 빼고 놓는다. 셋째 문항은 말풍선에 할 말을 넣는다(모든 단계).' },
      activity: {
        title: '세 칸 만화 차례 놓기', tool: 'story',
        teacher: '"불편한 손길이 오면 맨 먼저 무엇을 할까요?" 카드를 놓은 뒤 자리에서 일어나 차례대로 몸으로 해 본다(손바닥 펴고 "싫어요!" → 뒤돌아 걷기 → 선생님께 손 들기). "조용히 참으면 끝나요"라는 학생에게 "참으면 그 사람이 그만둘까요? 어른이 알아야 도와줄 수 있어요"라고 묻는다. 셋째 문항에서 그 일은 토끼 잘못이 아니라는 점을 짚는다.',
        task: '말하기·피하기·알리기 차례로 장면을 놓아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          ORDER3('싫은 손길이에요. 차례로 놓아요.', [C('say', '"싫어요" 말해요'), C('go', '자리를 떠나요'), C('tell', '선생님께 알려요')], C('hold', '혼자 꾹 참아요'), 0.1),
          ORDER3('놀이터에서예요. 차례로 놓아요.', [C('no', '"안 돼요" 말해요'), C('away', '멀리 가요'), C('home', '집 어른께 말해요')], C('hide', '비밀로 해요'), 0.15),
          { prompt: '토끼가 할 말을 넣어요.', toolOptions: { mode: 'fill', slots: [{ id: 'f1', who: '토끼', label: '선생님, ___' }, { id: 'f2', who: '선생님', label: '네 ___.' }], cards: [C('help', '도와주세요'), C('notme', '잘못이 아니야'), C('mine', '제가 잘못했어요')] }, target: { fill: { f1: 'help', f2: 'notme' } }, difficulty: 0.2,
            conclude: '싫어요 말하고, 자리를 피하고, 믿는 어른께 알려요. 내 잘못이 아니에요.' },
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '"싫어요!" 말하고, 피하고, ___.', answer: '알려요' }] },
    }),
    NO({
      id: 'gender.e12.say-no-help.activity.firm-voice', type: 'activity', title: '단호한 목소리·몸짓',
      method: '단호한 목소리·몸짓 따라 하기', tool: 'timer', minutes: 13,
      levels: { easy: '동작 카드 2장(처음·끝)의 차례만 놓고 함께 따라 한다.', base: '동작 카드 3장을 우리 반 약속 차례로 놓고 따라 한다.', challenge: '3장을 놓고 짝과 번갈아 해 본 뒤 점검 칸까지 표시한다.' },
      activity: {
        title: '단호한 몸짓 약속 카드', tool: 'timer',
        teacher: '"싫다는 마음을 친구가 알아듣게 하려면 어떤 몸짓이 좋을까요?" 카드를 놓은 뒤 선생님이 먼저 손바닥을 펴고 또렷하게 "싫어요!" 하는 모습을 보이고 반 전체가 따라 한다. 웃으며 작게 말하는 학생에게 "웃으면서 말하면 친구가 장난인 줄 알 수 있어요. 눈을 보고 또박또박 말해 볼까요?"라고 말한다. 짝 연습에서는 서로 몸을 밀거나 잡지 않는다고 미리 약속한다.',
        task: '몸짓 카드를 약속 차례로 놓고 따라 해요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          MOVES('싫어요 몸짓을 차례로 놓아요.', '싫어요 몸짓', ['손바닥 펴기', '"싫어요!"', '뒤로 물러나기'], '짝과 번갈아 했어요', 0.1),
          MOVES('안 돼요 몸짓을 차례로 놓아요.', '안 돼요 몸짓', ['눈 보기', '"안 돼요!"', '돌아서 가기'], '또박또박 말했어요', 0.15),
          MOVES('도와주세요 몸짓도 놓아요.', '알리기 몸짓', ['어른 찾기', '손 들기', '"도와주세요!"'], '크게 말해 봤어요', 0.2, { conclude: '눈을 보고, 손바닥을 펴고, 또박또박 말해요.' }),
        ],
      },
      worksheet: { items: [{ type: 'check', prompt: '해 본 몸짓에 ✓ 해요.', options: ['손바닥 펴기', '"싫어요!" 말하기', '뒤로 물러나기'] }] },
      notes: '세 몸짓의 차례는 정답이 하나인 것이 아니라 우리 반이 연습하기로 한 약속이다. 학생이 다른 차례를 말하면 들어 주고 "어느 차례든 말하고·피하고·알리면 돼요"라고 정리한다.',
    }),
    NO({
      id: 'gender.e12.say-no-help.activity.helper-places', type: 'activity', title: '도와줄 어른 찾기 지도',
      method: '도와줄 어른 찾기 지도', tool: 'map', minutes: 25,
      levels: { easy: '핀을 놓으면 그 칸의 이름이 바로 보인다.', base: '장소 네 곳(교실·보건실·교무실·집) 가운데 그 어른이 계신 곳에 핀을 꽂는다.', challenge: '운동장·도서실까지 여섯 곳이 있는 지도에서 꽂고, 장소마다 할 말("도와주세요, ○○가 불편했어요")을 짝과 말한다.' },
      activity: {
        title: '믿는 어른이 계신 곳 지도', tool: 'map',
        teacher: '"불편한 일이 있을 때 도와줄 어른은 어디에 계실까요?" 핀을 꽂을 때마다 우리 학교의 그 자리를 손으로 가리켜 보게 한다. "선생님이 바쁘시면 말 안 해요"라는 학생에게 "바쁘시면 다른 믿는 어른께 가요. 교무실에도, 보건실에도 선생님이 계셔요"라고 답한다. 끝나면 활동지의 [학교가 확인해 넣는 신고·상담 번호] 칸을 함께 읽고 채운다.',
        task: '도와줄 어른이 계신 곳에 핀을 꽂아요.', levels: { easy: { readout: true }, base: {}, challenge: {} },
        items: [
          PIN('담임 선생님 계신 곳에 꽂아요.', SCHOOL, SCHOOL_MORE, '교실', 0.1),
          PIN('보건 선생님 계신 곳에 꽂아요.', SCHOOL, SCHOOL_MORE, '보건실', 0.15),
          PIN('담임 선생님이 안 보이면요?', SCHOOL, SCHOOL_MORE, '교무실', 0.15),
          PIN('집 어른이 계신 곳에 꽂아요.', SCHOOL, SCHOOL_MORE, '집', 0.2, { conclude: '학교에도 집에도 도와줄 어른이 있어요. 한 분이 바쁘면 다른 분께 말해요.' }),
        ],
      },
      worksheet: {
        items: [
          { type: 'choice', prompt: '담임 선생님이 안 보이면요?', options: ['교무실에 가요', '혼자 참아요'], answer: '교무실에 가요' },
          { type: 'blank', prompt: '선생님과 도움 번호를 써요.', text: '우리 학교 도움 번호: ___', answer: '[학교가 확인해 넣는 신고·상담 번호]' },
        ],
      },
      notes: '계획의 경찰관 핀은 뺐다(이 주제 concepts 의 도움 받을 곳은 믿는 어른뿐이다). 교무실·보건실 자리는 학교마다 다르니 우리 학교 배치로 이야기한다. 도움 번호 칸은 학교가 확인한 번호를 교사가 함께 채운다.',
    }),
    NO({
      id: 'gender.e12.say-no-help.wrap.not-my-fault', type: 'wrap', title: '맞는 말·틀린 말 나누기',
      method: '맞는 말·틀린 말 나누기', tool: 'sortboard', minutes: 6,
      levels: { easy: '교사가 카드를 하나씩 읽어 주고 반 전체가 손으로 ○·×를 그린 뒤 넣는다.', base: '카드 네 장을 스스로 바구니에 나눈다.', challenge: '틀린 말을 맞는 말로 바꿔 말한다("비밀로 하면 돼" → "어른께 말해요").' },
      wrap: {
        teacher: '"이 말은 맞는 말일까요, 틀린 말일까요?" 카드를 함께 읽고 나눈다. "말하면 혼나요"를 맞아요에 둔 학생에게 "불편한 일을 말해 준 친구를 선생님은 혼내지 않아요. 고맙다고 말해요"라고 답한다. 끝에 "불편한 일은 내 잘못이 아니에요"를 다 같이 말한다.',
        exitTicket: [
          SORT_EXIT('맞는 말과 틀린 말을 나눠요.', ['맞아요', '아니에요'], ['내 잘못 아니야', '말하면 잘한 것'], ['비밀로 하면 돼', '참으면 끝나']),
          { type: 'choice', prompt: '불편한 일을 말하면요?', options: ['혼나요', '잘한 일이에요'], answer: 1, difficulty: 0.1, explain: '불편한 일을 알리는 것은 잘한 일이에요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '싫어요·안 돼요·도와주세요',
        items: [
          { type: 'table', prompt: '맞으면 ○, 틀리면 ×를 써요.', columns: ['말', '○ / ×'], cells: [['불편한 일은 내 잘못이 아니에요', ''], ['비밀로 하면 돼요', ''], ['어른께 말하면 잘한 거예요', '']], answer: '○, ×, ○' },
          { type: 'draw', prompt: '도와줄 어른을 그려요.' },
        ],
      },
    }),
    NO({
      id: 'gender.e12.say-no-help.wrap.help-chant-check', type: 'wrap', title: '세 마디 차례 이어 놓기',
      method: '세 마디 차례 이어 놓기', tool: 'pattern', minutes: 6,
      levels: { easy: '교사가 "말·피·알"을 읽어 주며 빈칸에 올 글자를 함께 고른다.', base: '되풀이되는 줄을 보고 빈칸에 올 글자를 보기 단추에서 스스로 고른다.', challenge: '채운 뒤 세 글자가 무엇의 첫 글자인지(말하기·피하기·알리기) 말한다.' },
      wrap: {
        teacher: '"말·피·알! 말하기, 피하기, 알리기의 첫 글자예요. 다음에 올 글자는 무엇일까요?" 줄을 손가락으로 짚으며 함께 읽고 빈칸을 채운다. "알"을 빼고 "말·피"만 되풀이하는 학생에게 "피한 다음에는 누구에게 알릴까요?"라고 묻는다. 끝에 세 마디 노래를 한 번 더 부른다.',
        exitTicket: [
          RULEP('빈칸에 올 글자를 골라요.', ['말', '피', '알', '말', '피', null], ['말', '피', '알'], 2, '빈칸에 올 글자는?'),
          { type: 'choice', prompt: '피한 다음에 무엇을 해요?', options: ['믿는 어른께 알려요', '잊어버려요'], answer: 0, difficulty: 0.1, explain: '피한 뒤에는 믿는 어른께 알려요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '말하기·피하기·알리기',
        items: [
          { type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '말하기, 피하기, ___', answer: '알리기' },
          { type: 'check', prompt: '내가 알릴 어른에 ✓ 해요.', options: ['담임 선생님', '보건 선생님', '집 어른'] },
        ],
      },
    }),
  );

  // =====================================================================================================
  // 1학년 · 깜짝 선물 비밀과 말해야 하는 비밀
  const SEC = MOD('gender.e12.two-secrets', [1]);
  const SEC2 = ['즐거운 비밀', '말해야 하는 비밀'];
  const SEC_R = [C('heavy', '마음이 무거우면 말해요'), C('tattle', '말하면 고자질이에요', { why: '도움이 필요한 일을 알리는 것은 고자질이 아니에요.' }), C('promise', '약속은 무엇이든 지켜요', { why: '무섭거나 불편한 비밀은 약속했어도 말해요.' })];
  ALL.push(
    SEC({
      id: 'gender.e12.two-secrets.intro.gift-surprise', type: 'intro', title: '깜짝 생일 선물 이야기',
      method: '깜짝 생일 선물 이야기 보기', tool: 'story', minutes: 6,
      levels: { easy: '교사가 장면 세 장을 넘기며 읽어 주고 마지막 마음 카드를 함께 고른다.', base: '장면 네 장을 보고 아기 다람쥐의 마음을 스스로 말한다.', challenge: '"언제 말해도 될까?"를 묻고 생일날 장면을 고른다.' },
      intro: {
        teacher: '"아기 다람쥐가 할머니 생일 선물을 몰래 숨겼어요. 할머니가 알면 안 되는 비밀이에요." 장면을 넘겨 읽은 뒤 시연 단추로 마지막 마음 카드가 바구니에 담기는 모습을 보인다. "비밀은 다 나쁜 거예요"라는 말이 나오면 "이 비밀은 생일날 모두가 웃게 되는 즐거운 비밀이에요. 오늘은 지켜도 되는 비밀과 꼭 말해야 하는 비밀을 나눠 봐요"라고 답한다.',
        student: '선물을 숨긴 아기 다람쥐는 어떤 마음일지 짝에게 말해 보아요.',
        demo: { tool: 'story', options: { mode: 'pick', basket: '다람쥐 마음', cards: [C('excite', '두근두근 신나요', { motif: 'sun' }), C('heavy', '무겁고 무서워요'), C('angry', '화가 나요')], shuffle: false }, sequence: [{ pick: ['excite'] }] },
        art: { draw: 'a small paper squirrel hiding a wrapped gift box behind its back with a big smile while a grandmother squirrel bakes a cake in the background', banner: '깜짝 선물 비밀', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
      },
    }),
    SEC({
      id: 'gender.e12.two-secrets.intro.heavy-light-move', type: 'intro', title: '가벼운·무거운 비밀 몸짓',
      method: '가벼운 비밀·무거운 비밀 몸짓', tool: 'timer', minutes: 6,
      levels: { easy: '교사가 비밀 세 개를 읽어 주고 함께 몸짓을 한다.', base: '비밀 다섯 개를 듣고 깡충(즐거운)·쪼그려 앉기(무거운)를 스스로 한다.', challenge: '몸짓을 한 뒤 무거운 비밀은 누구에게 말할지 한 명을 말한다.' },
      intro: {
        teacher: '"즐거운 비밀은 깡충! 마음이 무거운 비밀은 쪼그려 앉기!" 시연 단추로 몸짓 카드 두 장이 놓이는 모습을 보인 뒤, "깜짝 파티 준비", "친구가 아프게 한 일을 숨기라고 해요"처럼 비밀을 하나씩 읽고 반 전체가 몸짓으로 답한다. 헷갈려 멈춘 학생에게 "그 비밀을 생각하면 마음이 신나요, 무거워요?"라고 묻는다.',
        student: '선생님이 읽는 비밀을 듣고 깡충 또는 쪼그려 앉기로 답해요.',
        demo: { tool: 'timer', options: { title: '비밀 몸짓 약속', cards: ['쪼그려 앉기', '깡충 뛰기'] }, sequence: [{ order: ['깡충 뛰기', '쪼그려 앉기'] }] },
        art: { draw: 'paper children jumping happily on one side and crouching down with heavy faces on the other side, a light feather and a heavy stone cut from paper above them', banner: '가벼운 비밀, 무거운 비밀', extra: [{ motif: 'leaf', x: 300, y: 222 }] },
      },
      notes: '읽어 줄 비밀은 그림 속 인물의 일로 지어 말한다. 학생에게 자기 비밀을 말해 보라고 하지 않는다.',
    }),
    SEC({
      id: 'gender.e12.two-secrets.activity.secret-sort', type: 'activity', title: '즐거운 비밀·말할 비밀',
      method: '즐거운 비밀·말해야 하는 비밀 나누기', tool: 'sortboard', minutes: 14,
      levels: { easy: '카드 4장, 틀린 바구니에 넣으면 까닭을 말하고 되돌아온다(장 수가 보인다).', base: '카드 6장을 다 넣은 뒤 확인한다.', challenge: '카드 8장, "선물 줄 테니 비밀"처럼 헷갈리는 카드가 더 섞인다.' },
      activity: {
        title: '비밀 카드 두 바구니', tool: 'sortboard',
        teacher: '"즐거운 비밀은 곧 모두가 알게 되고 다 같이 기뻐하는 비밀이에요. 말해야 하는 비밀은 마음이 무겁거나 무서운 비밀이에요." 카드를 함께 읽고 넣는다. "약속했으면 무엇이든 지켜야 해요"라는 학생에게 "누가 아프거나 무서운 일을 숨기라고 하면, 그 약속은 지키지 않아도 돼요. 믿는 어른께 말해요"라고 답한다. 말해야 하는 비밀을 숨기라고 한 사람이 잘못한 것이라고 짚는다.',
        task: '비밀 카드를 두 바구니에 나누어요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: { shuffle: true } },
        items: [
          SB2(SEC2, '다람쥐네 비밀을 나누어요.', ['깜짝 파티', '선물 숨기기', '생일 편지'], ['몸 만진 일', '아프게 한 일', '"말하면 혼나"'], { a: ['보물찾기 쪽지'], b: ['선물 주며 비밀'] }, 0.1),
          SB2(SEC2, '친구 비밀을 나누어요.', ['숨바꼭질 자리', '깜짝 선물', '몰래 그린 그림'], ['친구가 다친 일', '"아무도 몰라"', '무서운 약속'], { a: ['깜짝 노래'], b: ['겁주는 쪽지'] }, 0.15),
          SB2(SEC2, '놀이터 비밀을 나누어요.', ['깜짝 공연', '숨긴 선물', '보물 상자'], ['싫은 손길', '혼자 오라는 말', '때린 일 숨기기'], { a: ['파티 초대장'], b: ['사탕 주며 비밀'] }, 0.2, { conclude: '즐거운 비밀은 지켜도 돼요. 마음이 무거운 비밀은 믿는 어른께 말해요.' }),
        ],
      },
      worksheet: { items: [{ type: 'table', prompt: '말해야 하면 ○를 써요.', columns: ['비밀', '○ / ×'], cells: [['깜짝 파티', ''], ['아프게 한 일', ''], ['혼자 오라는 말', '']], answer: '×, ○, ○' }],
        easy: [{ type: 'choice', prompt: '말해야 하는 비밀에 ○ 해요.', options: ['아프게 한 일', '깜짝 파티'], answer: '아프게 한 일' }] },
      notes: '카드는 그림 없이 글로만 보인다. "몸 만진 일·싫은 손길" 카드를 읽을 때 장면을 자세히 말하지 않고 "이런 비밀은 말해요"로만 정리한다.',
    }),
    SEC({
      id: 'gender.e12.two-secrets.activity.tell-whom', type: 'activity', title: '누구에게 말할까 갈림길',
      method: '누구에게 말할까 갈림길', tool: 'dilemma', minutes: 13,
      levels: { easy: '첫 갈림에서 보기 2개 가운데 한 번만 고른다.', base: '고른 뒤 이어지는 장면에서 한 번 더 고른다(갈림 2번).', challenge: '갈림 2번을 지나 끝에서 까닭 카드 3장 가운데 하나를 고른다.' },
      activity: {
        title: '비밀을 들은 날 갈림길', tool: 'dilemma',
        teacher: '"친구가 \'이건 꼭 비밀이야, 무서운 일이야\'라고 해요. 나는 어떻게 할까요?" 고르기 전에 반 전체가 손을 들어 어느 쪽인지 보인다. "말하면 고자질이에요"라는 학생에게 "고자질은 친구를 혼나게 하려고 말하는 거예요. 무서운 일을 알리는 건 친구를 돕는 거예요"라고 답한다. 셋째 문항(깜짝 파티)에서는 지켜도 되는 비밀도 있다는 것을 견준다.',
        task: '장면마다 할 일을 고르고 결과를 봐요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          DILEMMA('무서운 비밀을 들었어요. 골라요.', { text: '친구가 "꼭 비밀이야, 무서운 일이야" 해요.', motif: 'house', choices: [
            { id: 'keep', text: '혼자 지켜요', result: '친구도 나도 마음이 무거워요.', why: '무서운 비밀은 믿는 어른께 말해요.' },
            { id: 'tell', text: '선생님께 말해요', result: '선생님이 "말해 줘서 고마워" 하셨어요.', easyEnding: '선생님이 친구를 도와주셨어요.', next: { text: '친구가 "왜 말했어?" 해요.', choices: [
              { id: 'help', text: '"너를 돕고 싶었어"', result: '친구가 고개를 끄덕였어요.', ending: '말해서 친구가 도움을 받았어요.' },
              { id: 'sorry', text: '"말해서 미안해"', result: '내 마음이 무거워졌어요.', why: '친구를 도운 일이라 미안하지 않아도 돼요.' }] } }] },
          ['tell', 'help'], SEC_R, 'heavy', 0.1),
          DILEMMA('겁주는 비밀이에요. 골라요.', { text: '아는 형이 "우리끼리 비밀, 말하면 혼나" 해요.', motif: 'flower', choices: [
            { id: 'home', text: '집 어른께 말해요', result: '집 어른이 바빠서 잘 못 들으셨어요.', easyEnding: '집 어른이 꼭 안아 주셨어요.', next: { text: '집 어른이 바빠 보여요.', choices: [
              { id: 'again', text: '"꼭 할 말 있어요" 또 말해요', result: '집 어른이 귀 기울여 들으셨어요.', ending: '다시 말해서 도움을 받았어요.' },
              { id: 'stop', text: '그냥 안 말해요', result: '마음이 계속 무거워요.', why: '들어 줄 때까지, 다른 어른께도 말해요.' }] } },
            { id: 'quiet', text: '혼날까 봐 숨겨요', result: '마음이 무거워요.', why: '"말하면 혼나"라는 비밀일수록 꼭 말해요.' }] },
          ['home', 'again'], SEC_R, 'heavy', 0.15),
          DILEMMA('깜짝 파티 비밀이에요. 골라요.', { text: '친구가 "선생님 깜짝 파티는 비밀이야" 해요.', motif: 'flower', choices: [
            { id: 'now', text: '선생님께 바로 말해요', result: '깜짝 파티가 깜짝이 아니게 됐어요.', why: '모두 기뻐할 즐거운 비밀은 지켜도 돼요.' },
            { id: 'wait', text: '파티 날까지 지켜요', result: '파티 날이 됐어요.', easyEnding: '선생님이 깜짝 놀라 웃으셨어요.', next: { text: '파티 날 아침이에요.', choices: [
              { id: 'surprise', text: '다 같이 "깜짝이야!"', result: '선생님이 활짝 웃으셨어요.', ending: '즐거운 비밀로 모두 기뻤어요.' },
              { id: 'hideon', text: '계속 숨겨요', result: '파티를 못 했어요.', why: '즐거운 비밀은 그날이 되면 모두 알게 돼요.' }] } }] },
          ['wait', 'surprise'], [C('joy', '모두 기뻐할 비밀이에요'), C('always', '비밀은 다 말해요', { why: '즐거운 비밀은 지켜도 돼요.' }), C('fear', '말하면 혼나서요', { why: '이 비밀은 혼날 일이 아니라 즐거운 일이에요.' })], 'joy', 0.2, { conclude: '무거운 비밀은 말하고, 즐거운 비밀은 그날까지 지켜요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '무서운 비밀을 들으면요?', options: ['믿는 어른께 말해요', '혼자 지켜요'], answer: '믿는 어른께 말해요' }] },
    }),
    SEC({
      id: 'gender.e12.two-secrets.activity.trust-tree', type: 'activity', title: '믿는 어른 나무 꾸미기',
      method: '믿는 어른 나무 꾸미기', tool: 'collage', minutes: 25,
      levels: { easy: '갈색 줄기 1개와 믿는 어른 잎 2장을 붙인다.', base: '줄기 1개와 잎 3장을 붙인다.', challenge: '초록 잎(학교 어른)과 노랑 잎(집 어른)을 2장씩 나눠 붙인다.' },
      activity: {
        title: '믿는 어른 잎 나무', tool: 'collage',
        teacher: '"마음이 무거운 비밀을 말할 수 있는 어른은 누구일까요?" 판에서 갈색 긴 네모는 나무 줄기, 잎 조각 하나하나는 믿는 어른 한 사람이라고 정하고 붙인다. 잎을 붙일 때마다 그 어른을 마음속으로 떠올리게 하되, 이름이나 집안 이야기를 발표하게 하지는 않는다. "믿는 어른이 없어요"라는 학생에게는 "담임 선생님, 보건 선생님도 믿는 어른이에요"라고 말해 준다.',
        task: '줄기를 붙이고 믿는 어른 잎을 붙여요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          { prompt: '갈색 줄기와 잎 1장을 붙여요.', toolOptions: { shapes: ['rect', 'leaf', 'circle'], colors: ['갈색', '초록', '노랑'], sizes: ['m', 'l'] }, target: { has: [{ shape: 'rect', color: '갈색', min: 1 }, { shape: 'leaf', min: 1 }] }, difficulty: 0.1 },
          { prompt: '믿는 어른 잎을 3장 붙여요.', toolOptions: { shapes: ['leaf', 'circle'], colors: ['초록', '노랑', '분홍'] }, target: { has: [{ shape: 'leaf', min: 3 }] }, difficulty: 0.15,
            levels: { easy: { prompt: '믿는 어른 잎을 2장 붙여요.', target: { has: [{ shape: 'leaf', min: 2 }] } }, challenge: { prompt: '초록·노랑 잎을 2장씩 붙여요.', target: { has: [{ shape: 'leaf', color: '초록', min: 2 }, { shape: 'leaf', color: '노랑', min: 2 }] } } } },
          { prompt: '내 나무를 보며 점검해요.', toolOptions: { shapes: ['leaf', 'rect', 'heart'] }, target: { selfCheck: ['믿는 어른을 떠올렸어요', '무거운 비밀은 말해요'], minPieces: 1 }, difficulty: 0.2,
            conclude: '내 곁에는 믿는 어른이 있어요. 한 분이 바쁘면 다른 분께 말해요.' },
        ],
      },
      worksheet: {
        items: [
          { type: 'draw', prompt: '내 믿는 어른 나무를 그려요.' },
          { type: 'check', prompt: '무거운 비밀을 말할 어른에 ✓ 해요.', options: ['담임 선생님', '보건 선생님', '집 어른'] },
        ],
      },
      notes: '콜라주 판은 사람 그림을 그리지 못해 잎 한 장 = 믿는 어른 한 사람으로 정한다. 어른 얼굴은 활동지에 그린다. 가족을 붙이지 않는 학생이 있어도 묻지 않는다.',
    }),
    SEC({
      id: 'gender.e12.two-secrets.wrap.secret-weather', type: 'wrap', title: '말한 뒤 마음 날씨',
      method: '말한 뒤 마음 날씨 고르기', tool: 'emotion', minutes: 6,
      levels: { easy: '교사가 마음 카드 두 개(걱정·편안함)만 가리키며 함께 고른다.', base: '마음 카드 세 장에서 말하기 전·뒤 마음을 고른다.', challenge: '고른 뒤 마음이 왜 바뀌었는지 한 마디로 말한다.' },
      wrap: {
        teacher: '"다람쥐가 무거운 비밀을 선생님께 말했어요. 말하기 전과 말한 뒤 마음은 어땠을까요?" 장면과 마음을 이은 뒤 손으로 무거운 돌을 내려놓는 몸짓을 함께 한다. 출구 2번에서 "고자질이에요"를 고른 학생에게 "도움이 필요한 일을 알리는 건 친구를 지키는 일이에요"라고 말해 준다.',
        exitTicket: [
          { type: 'tool', tool: 'emotion', options: { mode: 'match', slots: [{ id: 'before', label: '말하기 전' }, { id: 'after', label: '말한 뒤' }], cards: ['걱정', '편안함', '신남'] }, prompt: '다람쥐 마음을 이어요.', target: { match: { before: '걱정', after: ['편안함', '신남'] } }, difficulty: 0.15 },
          { type: 'choice', prompt: '무서운 비밀을 말하면?', options: ['고자질이에요', '돕는 일이에요'], answer: 1, difficulty: 0.1, explain: '무서운 일을 알리는 것은 돕는 일이에요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '즐거운 비밀, 말해야 하는 비밀',
        items: [
          { type: 'table', prompt: '지켜도 되면 ○, 말해야 하면 △를 써요.', columns: ['비밀', '○ / △'], cells: [['깜짝 생일 선물', ''], ['무서운 일', '']], answer: '○, △' },
          { type: 'draw', prompt: '말하고 나서 가벼워진 얼굴을 그려요.' },
        ],
      },
    }),
    SEC({
      id: 'gender.e12.two-secrets.wrap.secret-rule-song', type: 'wrap', title: '"무거운 비밀은 말해요" 노래',
      method: '"무거운 비밀은 말해요" 노래', tool: 'keyboard', minutes: 6,
      levels: { easy: '앞 마디("무거운 비밀은")만 함께 손뼉으로 친다.', base: '한 줄 노래(두 마디)를 리듬 블록으로 따라 놓는다.', challenge: '가사의 "어른께"를 "선생님께"처럼 믿는 어른으로 바꿔 부른다.' },
      wrap: {
        teacher: '"무거운 비밀은 어른께 말해요!" 노래를 한 번 들려준 뒤 리듬 블록을 놓고, 반 전체가 손뼉과 함께 부른다. 블록을 다 놓은 학생은 가사를 "선생님께 말해요"로 바꿔 불러 본다. 출구 2번에서 "다 지켜요"를 고른 학생에게 깜짝 파티 비밀과 무서운 비밀을 다시 견주어 보게 한다.',
        exitTicket: [
          RHY_EXIT('노래 리듬을 블록으로 놓아요.', ['q', 'e', 'e', 'q', 'q', 'q', 'q', 'h']),
          { type: 'choice', prompt: '약속한 비밀은 다 지켜요?', options: ['다 지켜요', '무거우면 말해요'], answer: 1, difficulty: 0.1, explain: '마음이 무거운 비밀은 약속했어도 말해요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '무거운 비밀은 말해요',
        items: [
          { type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '무거운 비밀은 ___께 말해요.', answer: '믿는 어른' },
          { type: 'check', prompt: '지켜도 되는 비밀에 ✓ 해요.', options: ['깜짝 파티', '깜짝 선물', '무서운 일'] },
        ],
      },
    }),
  );

  // =====================================================================================================
  // 1학년 · 색과 놀이에는 남녀가 없어요
  const TOY = MOD('gender.e12.colors-toys-all', [1]);
  const ALL3 = ['남자만', '여자만', '누구나'];
  // 세 바구니 중 '누구나'로만(sortboard): 기본 6장, 쉬움 4장, 도전 8장 — 남자만·여자만 바구니는 비어야 한다
  const ANY3 = (prompt, cards, more2, d, more) => ({
    prompt, toolOptions: { slots: ALL3, cards }, target: { sort: { 남자만: [], 여자만: [], 누구나: cards } }, difficulty: d,
    levels: {
      easy: { prompt: `${cut(prompt)}(4장).`, toolOptions: { cards: cards.slice(0, 4) }, target: { sort: { 남자만: [], 여자만: [], 누구나: cards.slice(0, 4) } } },
      challenge: { prompt: `${cut(prompt)}(더 많이).`, toolOptions: { more: more2 }, target: { sort: { 남자만: [], 여자만: [], 누구나: [...cards, ...more2] } } },
    },
    ...more,
  });
  ALL.push(
    TOY({
      id: 'gender.e12.colors-toys-all.intro.fav-color-graph', type: 'intro', title: '좋아하는 색 그림그래프',
      method: '우리 반 좋아하는 색 그림그래프', tool: 'chart', minutes: 6,
      levels: { easy: '교사가 색 세 가지(분홍·파랑·노랑)만 읽어 주며 그래프를 함께 본다.', base: '그래프를 보고 가장 많은 색을 스스로 찾는다.', challenge: '가장 많은 색의 그림 수를 세어 말한다.' },
      intro: {
        teacher: '"좋아하는 색을 손으로 가리켜 볼까요? 분홍을 좋아하는 친구, 파랑을 좋아하는 친구!" 반 친구들이 섞여 손을 드는 것을 함께 본 뒤 시연 단추로 가상 그림그래프에서 가장 많은 색을 고르는 모습을 보인다. "분홍은 여자 색이에요"라는 말이 나오면 "방금 분홍에 손 든 친구들을 보세요. 좋아하는 색은 사람마다 달라요"라고 답한다. 그래프에는 남자·여자 칸이 없다는 것도 짚는다.',
        student: '내가 좋아하는 색을 손으로 가리키고 친구 손도 살펴보아요.',
        demo: { tool: 'chart', options: { type: 'picture', mode: 'read', title: '좋아하는 색(가상)', unit: '명', data: [['분홍', 5], ['파랑', 4], ['노랑', 3]], icons: [{ value: 1, name: '1명' }], icon: 'star', question: '가장 많은 색은?', choices: ['분홍', '파랑', '노랑'] }, sequence: [{ pick: 0 }] },
        art: { draw: 'paper children of all kinds holding up pink, blue and yellow paper stars together in a mixed group', banner: '좋아하는 색은 사람마다', extra: [{ motif: 'rainbow', x: 300, y: 96 }] },
      },
      notes: '그림그래프 수는 수업용 가상 자료다. 손을 들 때 남자·여자를 나눠 세지 않는다.',
    }),
    TOY({
      id: 'gender.e12.colors-toys-all.intro.toy-guess', type: 'intro', title: '장난감 고른 친구 마음',
      method: '장난감 고른 친구 마음 맞히기', tool: 'emotion', minutes: 6,
      levels: { easy: '교사가 장면 두 개를 읽어 주고 신난 마음을 함께 고른다.', base: '시연을 보고 장면마다 친구의 마음을 스스로 말한다.', challenge: '"이상해"라고 놀림받은 장면에서 친구 마음이 어떻게 바뀌는지 말한다.' },
      intro: {
        teacher: '"솔이는 인형을, 하나는 공을 골랐어요. 둘은 어떤 마음일까요?" 시연 단추로 장면과 마음이 이어지는 모습을 보인다. "남자가 인형 놀이 하면 이상해요"라는 말이 나오면 "솔이 얼굴을 보세요. 좋아하는 걸 고르면 누구나 신나요. 이상하다는 말을 들으면 솔이 마음은 어떨까요?"라고 되묻는다.',
        student: '좋아하는 장난감을 고른 친구의 마음을 짝에게 말해 보아요.',
        demo: { tool: 'emotion', options: { mode: 'match', slots: [{ id: 'doll', label: '인형 고른 솔' }, { id: 'ball', label: '공 고른 하나' }], cards: ['신남', '기쁨'] }, sequence: [{ match: { doll: '신남', ball: '기쁨' } }] },
        art: { draw: 'a paper boy happily hugging a doll and a paper girl happily holding a ball, both smiling in a toy corner', banner: '좋아하는 장난감', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
      },
    }),
    TOY({
      id: 'gender.e12.colors-toys-all.activity.everyone-box', type: 'activity', title: '"누구나" 상자에 넣기',
      method: '"누구나" 상자에 넣기', tool: 'sortboard', minutes: 14,
      levels: { easy: '카드 4장, 틀린 바구니에 넣으면 까닭을 말하고 되돌아온다(장 수가 보인다).', base: '카드 6장을 세 바구니 가운데 알맞은 곳에 넣는다.', challenge: '카드 8장, 줄넘기·발레처럼 더 많은 놀이가 섞인다.' },
      activity: {
        title: '남자만·여자만·누구나 바구니', tool: 'sortboard',
        teacher: '"인형은 남자만, 여자만, 누구나 중 어디에 넣을까요?" 처음에는 생각대로 넣어 보게 한 뒤 확인을 누르고 "왜 누구나일까요?"를 함께 이야기한다. 인형을 여자만에 넣은 학생에게 "인형을 좋아하는 남자 친구가 있으면 그 친구는 놀면 안 될까요?"라고 묻는다. 끝나면 남자만·여자만 바구니가 비어 있는 까닭을 반 전체가 말해 본다.',
        task: '카드를 넣어 보고, 누구나 할 수 있는지 생각해요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: { shuffle: true } },
        items: [
          ANY3('장난감 카드를 넣어요.', ['인형', '블록', '공', '자동차', '소꿉놀이', '로봇'], ['공룡 인형', '구슬'], 0.1),
          ANY3('색 카드를 넣어요.', ['분홍', '파랑', '노랑', '보라', '초록', '빨강'], ['하양', '검정'], 0.15),
          ANY3('놀이 카드를 넣어요.', ['축구', '줄넘기', '그림 그리기', '춤추기', '달리기', '종이접기'], ['발레', '태권도'], 0.2, { conclude: '색도 놀이도 좋아하는 것은 사람마다 달라요. 누구나 할 수 있어요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '인형 놀이는 누가 해요?', options: ['여자만', '누구나'], answer: '누구나' }] },
    }),
    TOY({
      id: 'gender.e12.colors-toys-all.activity.play-together', type: 'activity', title: '모두 함께 놀이 동작',
      method: '모두 함께 놀이 동작', tool: 'timer', minutes: 13,
      levels: { easy: '놀이 카드 2장(처음·끝)의 차례만 놓고 짝과 따라 한다.', base: '놀이 카드 3장의 차례를 놓고 짝과 번갈아 따라 한다.', challenge: '3장을 놓고 짝과 같은 동작을 맞춰 한 뒤 점검 칸까지 표시한다.' },
      activity: {
        title: '함께 노는 차례 카드', tool: 'timer',
        teacher: '"블록 놀이를 짝과 함께 하려면 무엇부터 할까요?" 카드를 놓은 뒤 짝과 흉내 놀이를 한다(블록 꺼내기 → 같이 쌓기 → 같이 정리). 짝을 정할 때 남자끼리·여자끼리로 나누지 않고 옆자리 친구와 한다. "인형은 안 할래요"라는 학생에게 "오늘은 흉내만 해 봐요. 해 보고 좋아하지 않아도 괜찮아요. 누구든 해 볼 수 있다는 게 중요해요"라고 말한다.',
        task: '놀이 차례 카드를 놓고 짝과 흉내 내요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          MOVES('블록 놀이 차례로 놓아요.', '블록 놀이', ['블록 꺼내기', '함께 쌓기', '함께 정리'], '짝과 맞춰 했어요', 0.1),
          MOVES('인형 놀이 차례로 놓아요.', '인형 놀이', ['인형 꺼내기', '같이 재우기', '제자리에 두기'], '번갈아 해 봤어요', 0.15),
          MOVES('공 놀이 차례로 놓아요.', '공 놀이', ['"같이 할래?"', '번갈아 굴리기', '"고마워"'], '같이 굴려 봤어요', 0.2, { conclude: '놀이는 남자·여자 없이 누구나 함께 해요.' }),
        ],
      },
      worksheet: { items: [{ type: 'draw', prompt: '친구와 함께 노는 모습을 그려요.' }] },
    }),
    TOY({
      id: 'gender.e12.colors-toys-all.activity.rainbow-toybox', type: 'activity', title: '무지개 장난감 상자',
      method: '무지개 장난감 상자 꾸미기', tool: 'collage', minutes: 25,
      levels: { easy: '상자(긴 네모)에 장난감 조각 3개를 붙인다.', base: '장난감 조각 5개를 분홍·파랑을 섞어 붙인다.', challenge: '장난감 6개를 붙이고, 짝이 좋아하는 색으로 하나 더 붙였는지 점검한다.' },
      activity: {
        title: '모두의 장난감 상자', tool: 'collage',
        teacher: '"우리 반 모두의 장난감 상자를 꾸며 봐요. 어떤 색 장난감을 넣을까요?" 판에서 큰 긴 네모는 상자, 동그라미·별·하트 조각은 장난감으로 정하고 붙인다. 분홍만 또는 파랑만 붙이려는 학생에게 "이 상자는 반 친구 모두의 상자예요. 다른 친구가 좋아하는 색도 넣어 볼까요?"라고 말한다. 짝에게 좋아하는 색을 물어보고 그 색을 하나 붙이게 한다.',
        task: '상자를 붙이고 여러 색 장난감을 붙여요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          { prompt: '큰 상자와 장난감 1개를 붙여요.', toolOptions: { shapes: ['rect', 'circle', 'star', 'heart'], sizes: ['m', 'l'] }, target: { has: [{ shape: 'rect', size: 'l', min: 1 }], pieces: { min: 2 } }, difficulty: 0.1 },
          { prompt: '분홍·파랑 장난감을 붙여요.', toolOptions: { shapes: ['circle', 'star', 'heart'], sizes: ['s', 'm'] }, target: { has: [{ color: '분홍', min: 1 }, { color: '파랑', min: 1 }], pieces: { min: 5 } }, difficulty: 0.15,
            levels: { easy: { prompt: '장난감 조각 3개를 붙여요.', target: { pieces: { min: 3 } } }, challenge: { prompt: '여러 색 장난감 6개를 붙여요.', target: { has: [{ color: '분홍', min: 1 }, { color: '파랑', min: 1 }, { color: '노랑', min: 1 }], pieces: { min: 6 } } } } },
          { prompt: '내 상자를 보며 점검해요.', toolOptions: { shapes: ['circle', 'star', 'heart'] }, target: { selfCheck: ['여러 색을 넣었어요', '짝이 좋아하는 색도 넣었어요'], minPieces: 2 }, difficulty: 0.2,
            conclude: '모두의 상자에는 모두가 좋아하는 색이 들어가요.' },
        ],
      },
      worksheet: {
        items: [
          { type: 'draw', prompt: '내가 좋아하는 장난감을 그려요.' },
          { type: 'choice', prompt: '분홍은 누구 색이에요?', options: ['여자 색', '누구나 좋아해요'], answer: '누구나 좋아해요' },
        ],
      },
      notes: '콜라주 판은 장난감 모양을 그리지 못해 큰 긴 네모 = 상자, 작은 조각 = 장난감으로 정한다.',
    }),
    TOY({
      id: 'gender.e12.colors-toys-all.wrap.fair-words', type: 'wrap', title: '놀림 말 바꾸기 말풍선',
      method: '놀림 말 바꾸기 말풍선', tool: 'story', minutes: 6,
      levels: { easy: '교사가 말 카드 두 장만 읽어 주고 함께 고른다.', base: '말 카드 세 장 가운데 바꾼 말을 고른다.', challenge: '고른 뒤 솔이 할 대답도 짝과 지어 말한다.' },
      wrap: {
        teacher: '"솔이가 분홍 옷을 입고 왔는데 친구가 \'남자가 분홍?\' 했어요. 이 말을 어떻게 바꾸면 좋을까요?" 말 카드를 함께 읽고 고른 뒤 바꾼 말을 반 전체가 따라 말한다. 놀림 말을 그대로 고른 학생에게 "그 말을 들은 솔이 얼굴은 어떨까요?"라고 묻는다.',
        exitTicket: [
          FILL('친구가 할 말로 바꿔요.', '친구', '___', [C('diff', '좋아하는 건 달라'), C('tease', '"남자가 분홍?"'), C('weird', '"이상해"')], 'diff'),
          { type: 'choice', prompt: '인형 놀이는 누가 해요?', options: ['여자만 해요', '누구나 해요'], answer: 1, difficulty: 0.1, explain: '놀이에는 남녀가 없어요. 누구나 해요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '색과 놀이에는 남녀가 없어요',
        items: [
          { type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '좋아하는 것은 사람마다 ___.', answer: '달라요' },
          { type: 'draw', prompt: '친구에게 해 줄 고운 말을 그려요.' },
        ],
      },
    }),
    TOY({
      id: 'gender.e12.colors-toys-all.wrap.all-can-chant', type: 'wrap', title: '"누구나 할 수 있어" 구호',
      method: '"누구나 할 수 있어" 구호', tool: 'keyboard', minutes: 6,
      levels: { easy: '앞 마디("분홍도 파랑도")만 함께 손뼉으로 친다.', base: '구호 두 마디를 리듬 블록으로 따라 놓는다.', challenge: '구호에 좋아하는 놀이 이름을 넣어 바꿔 부른다("축구도 인형도 누구나 좋아").' },
      wrap: {
        teacher: '"분홍도 파랑도 누구나 좋아!" 구호를 들려준 뒤 리듬 블록을 놓고 손뼉과 함께 말한다. 블록을 다 놓은 학생은 좋아하는 놀이 이름으로 바꿔 불러 본다. 출구 2번에서 "남자 색"을 고른 학생에게 오늘 그림그래프와 반 친구들 손을 다시 떠올려 보게 한다.',
        exitTicket: [
          RHY_EXIT('구호 리듬을 블록으로 놓아요.', ['e', 'e', 'q', 'e', 'e', 'q', 'q', 'q', 'h']),
          { type: 'choice', prompt: '파랑은 누구 색이에요?', options: ['남자 색', '누구나 좋아해요'], answer: 1, difficulty: 0.1, explain: '좋아하는 색은 사람마다 달라요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '누구나 할 수 있어요',
        items: [
          { type: 'check', prompt: '내가 좋아하는 놀이에 ✓ 해요.', options: ['인형 놀이', '블록 쌓기', '공놀이', '그림 그리기'] },
          { type: 'draw', prompt: '좋아하는 색으로 내 모습을 그려요.' },
        ],
      },
      notes: '활동지 첫 문항은 정답이 없다 — 고른 놀이를 친구와 견주어 "좋아하는 것은 다 달라요"로 마친다.',
    }),
  );

  // =====================================================================================================
  // 1학년 · 여러 모습의 가족, 집안일은 함께
  const FAM = MOD('gender.e12.family-together', [1]);
  ALL.push(
    FAM({
      id: 'gender.e12.family-together.intro.family-pictures', type: 'intro', title: '여러 가족 그림 마음',
      method: '여러 가족 그림 마음 고르기', tool: 'emotion', minutes: 6,
      levels: { easy: '교사가 그림 두 장(할머니와 사는 집·아빠와 사는 집)만 보여 주며 함께 마음을 고른다.', base: '그림 세 장을 보고 가족마다 어떤 마음일지 말한다.', challenge: '그림마다 "소중해요"라고 한 마디씩 붙여 말한다.' },
      intro: {
        teacher: '"이 그림들은 모두 가족이에요. 할머니와 사는 곰 가족, 아빠와 사는 토끼 가족, 형제가 많은 다람쥐 가족! 어떤 마음일까요?" 시연 단추로 그림과 마음이 이어지는 모습을 보인다. "엄마가 없으면 가족이 아니에요"라는 말이 나오면 "함께 살며 서로 아끼면 가족이에요. 가족의 모습은 여러 가지예요"라고 답한다. 우리 집 가족을 말하게 하지 않는다.',
        student: '그림 속 여러 가족의 마음을 짝에게 말해 보아요.',
        demo: { tool: 'emotion', options: { mode: 'match', slots: [{ id: 'g', label: '할머니와 사는 집' }, { id: 'd', label: '아빠와 사는 집' }, { id: 's', label: '형제 많은 집' }], cards: ['편안함', '기쁨', '신남'] }, sequence: [{ match: { g: '편안함', d: '기쁨', s: '신남' } }] },
        art: { draw: 'three small paper houses side by side, a bear grandmother with a cub, a rabbit father with a child, and a squirrel family with many children, all smiling', banner: '여러 모습의 가족', extra: [{ motif: 'heart', x: 300, y: 96, color: 'rose' }] },
      },
      notes: '학생의 가족 구성을 묻거나 발표하게 하지 않는다. 그림 속 동물 가족으로만 이야기한다.',
    }),
    FAM({
      id: 'gender.e12.family-together.intro.chores-mime', type: 'intro', title: '집안일 흉내 내기',
      method: '집안일 흉내 내기', tool: 'timer', minutes: 6,
      levels: { easy: '교사가 동작 두 개(빨래 개기·숟가락 놓기)를 부르고 함께 흉내 낸다.', base: '동작 세 개를 부르는 차례대로 흉내 낸다.', challenge: '친구의 흉내를 보고 무슨 집안일인지 맞힌다.' },
      intro: {
        teacher: '"선생님이 부르는 집안일을 흉내 내 볼까요? 빨래 개기! 숟가락 놓기! 화분 물 주기!" 시연 단추로 동작 카드가 부른 차례대로 놓이는 모습을 보인 뒤 반 전체가 흉내 낸다. "빨래는 엄마가 하는 거예요"라는 말이 나오면 "지금 반 친구들 모두 빨래를 갰어요. 집안일은 누구나 할 수 있어요"라고 답한다.',
        student: '선생님이 부르는 집안일을 몸으로 흉내 내 보아요.',
        demo: { tool: 'timer', options: { title: '집안일 흉내', cards: ['화분 물 주기', '빨래 개기', '숟가락 놓기'] }, sequence: [{ order: ['빨래 개기', '숟가락 놓기', '화분 물 주기'] }] },
        art: { draw: 'paper children of all kinds folding paper laundry, setting spoons on a table and watering a small plant together', banner: '집안일 함께해요', extra: [{ motif: 'leaf', x: 300, y: 222 }] },
      },
    }),
    FAM({
      id: 'gender.e12.family-together.activity.who-does', type: 'activity', title: '집안일 가지 나누기',
      method: '집안일 가지마다 가족 붙이기', tool: 'mindmap', minutes: 14,
      levels: { easy: '첫 문항은 가지 2개(요리·청소)에 카드 4장, 놓으면 바로 맞는지 알려 준다.', base: '가지 3개(요리·청소·빨래)에 카드 6장을 넣고, 집안일을 하는 사람 카드를 고른다.', challenge: '카드가 더 많아지고, 1학년이 할 수 있는 일을 다섯 장 가운데 고른다.' },
      activity: {
        title: '"우리 집 일" 생각 그물', tool: 'mindmap',
        teacher: '"우리 집 일에는 요리·청소·빨래가 있어요. 이 일은 어느 가지일까요?" 첫 문항을 한 뒤 둘째 문항에서 "요리는 누가 할 수 있을까요?"를 묻는다. "여자만" 또는 "어른만"을 고르는 학생에게 "요리사 중에는 남자도 여자도 있어요. 아이도 수저 놓기로 요리를 도울 수 있어요"라고 답한다. 셋째 문항에서 칼·불은 어른과 함께 하는 일이라는 점도 짚는다.',
        task: '집안일 카드를 가지에 넣고, 함께 하는 사람을 골라요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          { prompt: '집안일을 가지에 넣어요.', toolOptions: { topic: '우리 집 일', slots: ['요리', '청소', '빨래'], cards: ['수저 놓기', '걸레질', '빨래 개기', '쌀 씻기', '장난감 정리', '양말 짝 찾기'] }, target: { sort: { 요리: ['수저 놓기', '쌀 씻기'], 청소: ['걸레질', '장난감 정리'], 빨래: ['빨래 개기', '양말 짝 찾기'] } }, difficulty: 0.1,
            levels: { easy: { prompt: '요리·청소 가지에 넣어요.', toolOptions: { slots: ['요리', '청소'], cards: ['수저 놓기', '걸레질', '쌀 씻기', '장난감 정리'] }, target: { sort: { 요리: ['수저 놓기', '쌀 씻기'], 청소: ['걸레질', '장난감 정리'] } } },
              challenge: { prompt: '집안일 8장을 가지에 넣어요.', toolOptions: { cards: ['수저 놓기', '걸레질', '빨래 개기', '쌀 씻기', '장난감 정리', '양말 짝 찾기', '그릇 나르기', '빨래 널기'] }, target: { sort: { 요리: ['수저 놓기', '쌀 씻기', '그릇 나르기'], 청소: ['걸레질', '장난감 정리'], 빨래: ['빨래 개기', '양말 짝 찾기', '빨래 널기'] } } } } },
          { prompt: '요리를 할 수 있는 사람은?', toolOptions: { mode: 'pick', topic: '요리하는 사람', cards: ['어른', '아이', '남자', '여자'] }, target: { pick: ['어른', '아이', '남자', '여자'] }, difficulty: 0.15,
            hints: ['요리사 그림을 떠올려요.', '남자 요리사도, 여자 요리사도 있어요.', '네 장 모두 담아요.'] },
          { prompt: '1학년이 할 일을 골라요.', toolOptions: { mode: 'pick', topic: '1학년이 할 일', cards: ['수저 놓기', '혼자 칼질', '신발 정리', '혼자 불 켜기'] }, target: { pick: ['수저 놓기', '신발 정리'] }, difficulty: 0.2,
            levels: { challenge: { prompt: '1학년이 할 일을 골라요(5장).', toolOptions: { cards: ['수저 놓기', '혼자 칼질', '신발 정리', '혼자 불 켜기', '화분 물 주기'] }, target: { pick: ['수저 놓기', '신발 정리', '화분 물 주기'] } } },
            conclude: '집안일은 가족 모두가 나누어 해요. 나도 할 수 있는 일이 있어요.' },
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '집안일은 누가 해요?', options: ['엄마만', '가족 모두'], answer: '가족 모두' }] },
      notes: '계획의 "엄마·아빠·나·할머니 카드 붙이기"는 가족 형태를 하나로 정하고 사람마다 맡을 일을 정답으로 만들게 되어, 집안일 카드를 가지에 나누고 "누가 할 수 있나"를 어른·아이·남자·여자 모두 고르는 문항으로 바꾸었다.',
    }),
    FAM({
      id: 'gender.e12.family-together.activity.my-job-check', type: 'activity', title: '내가 할 집안일 점검표',
      method: '내가 할 집안일 점검표', tool: 'kitchen', minutes: 13,
      levels: { easy: '첫 문항은 항목 3개 가운데 1학년이 할 일 2개를 고른다.', base: '항목 4개 가운데 3개를 고르고, 이번 주에 해 볼 일을 스스로 점검한다.', challenge: '항목 5개(함정 1개)에서 고르고, 신발 정리 차례도 놓는다.' },
      activity: {
        title: '내 몫 집안일 점검표', tool: 'kitchen',
        teacher: '"1학년인 내가 집에서 할 수 있는 일은 무엇일까요?" 점검표를 고른 뒤 그 일을 흉내 낸다. "가스불 켜기"를 고르는 학생에게 "불은 어른과 함께 다루는 일이에요. 대신 수저를 놓아 볼까요?"라고 말한다. 둘째 문항은 정답이 없는 내 약속이며, 집마다 할 수 있는 일이 다를 수 있다고 말해 준다.',
        task: '1학년이 할 수 있는 집안일을 골라 표시해요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          LIST('1학년이 할 일만 골라요.', '내가 할 집안일', [C('spoon', '수저 놓기'), C('shoe', '신발 정리'), C('toy', '장난감 정리')], C('gas', '가스불 켜기'), C('knife', '칼로 깎기'), 0.1),
          { prompt: '이번 주에 해 볼 일에 표시해요.', toolOptions: { mode: 'checklist', title: '이번 주 내 약속', items: [C('w1', '수저 놓기'), C('w2', '신발 정리'), C('w3', '양말 짝 찾기'), C('w4', '화분 물 주기')] }, target: { selfCheck: true }, difficulty: 0.15 },
          { prompt: '신발 정리 차례로 놓아요.', toolOptions: { mode: 'order', slots: ['먼저', '다음', '끝'], cards: [C('in', '신발장에 넣기'), C('off', '신발 벗기'), C('pair', '짝 맞추기')] }, target: { order: ['off', 'pair', 'in'] }, difficulty: 0.2,
            levels: { easy: { state: { at: { off: 0, pair: null, in: null } } } },
            conclude: '나도 우리 집 일을 함께 할 수 있어요.' },
        ],
      },
      worksheet: { items: [{ type: 'check', prompt: '내가 할 집안일에 ✓ 해요.', options: ['수저 놓기', '신발 정리', '장난감 정리'] }] },
    }),
    FAM({
      id: 'gender.e12.family-together.activity.family-collage', type: 'activity', title: '여러 모습 가족 마을',
      method: '여러 모습 가족 집 꾸미기', tool: 'collage', minutes: 25,
      levels: { easy: '네모 집과 세모 지붕을 2채 붙인다.', base: '집 3채를 붙이고 창문마다 사람 동그라미를 넣는다.', challenge: '집 3채에 사람 동그라미를 5개 이상 넣고, 집마다 함께 하는 집안일 하트를 붙인다.' },
      activity: {
        title: '모두 소중한 가족 마을', tool: 'collage',
        teacher: '"집마다 사는 가족의 모습이 달라요. 여러 모습의 가족 마을을 꾸며 볼까요?" 판에서 네모 = 집, 세모 = 지붕, 동그라미 = 가족 한 사람, 하트 = 함께 하는 일로 정한다. 집마다 사람 수를 다르게 붙여도 된다고 말해 준다. "사람이 둘뿐이면 가족이 아니에요"라는 학생에게 "둘이어도, 다섯이어도 서로 아끼면 가족이에요"라고 답한다.',
        task: '집과 지붕을 붙이고 여러 모습 가족을 꾸며요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          { prompt: '네모 집과 세모 지붕을 붙여요.', toolOptions: { shapes: ['square', 'triangle', 'circle', 'heart'], sizes: ['m', 'l'] }, target: { has: [{ shape: 'square', min: 3 }, { shape: 'triangle', min: 3 }] }, difficulty: 0.1,
            levels: { easy: { prompt: '집과 지붕을 2채 붙여요.', target: { has: [{ shape: 'square', min: 2 }, { shape: 'triangle', min: 2 }] } } } },
          { prompt: '가족 동그라미를 붙여요.', toolOptions: { shapes: ['circle', 'heart', 'square'], sizes: ['s', 'm'] }, target: { has: [{ shape: 'circle', min: 3 }] }, difficulty: 0.15,
            levels: { easy: { prompt: '가족 동그라미를 2개 붙여요.', target: { has: [{ shape: 'circle', min: 2 }] } }, challenge: { prompt: '가족 5개와 하트 1개를 붙여요.', target: { has: [{ shape: 'circle', min: 5 }, { shape: 'heart', min: 1 }] } } } },
          { prompt: '우리 마을을 보며 점검해요.', toolOptions: { shapes: ['circle', 'heart', 'square', 'triangle'] }, target: { selfCheck: ['여러 모습 가족을 꾸몄어요', '모든 가족은 소중해요'], minPieces: 2 }, difficulty: 0.2,
            conclude: '가족의 모습은 여러 가지예요. 모든 가족은 소중해요.' },
        ],
      },
      worksheet: {
        items: [
          { type: 'draw', prompt: '여러 모습 가족 마을을 그려요.' },
          { type: 'choice', prompt: '가족의 모습은 어때요?', options: ['모두 같아요', '여러 가지예요'], answer: '여러 가지예요' },
        ],
      },
      notes: '학생에게 우리 집을 꾸미라고 하지 않는다 — 그림 마을의 여러 가족을 꾸민다. 사람 수를 정답으로 정하지 않는다.',
    }),
    FAM({
      id: 'gender.e12.family-together.wrap.together-pattern', type: 'wrap', title: '함께하는 가족 무늬',
      method: '함께하는 가족 무늬 잇기', tool: 'pattern', minutes: 6,
      levels: { easy: '교사가 줄을 짚으며 함께 읽고 빈칸에 올 조각을 함께 고른다.', base: '되풀이되는 줄을 보고 빈칸에 올 조각을 보기 단추에서 스스로 고른다.', challenge: '고른 뒤 동그라미·네모·세모로 우리 반만의 "함께하기" 규칙을 말로 지어 본다.' },
      wrap: {
        teacher: '"동그라미·네모·세모 가족이 돌아가며 집안일을 해요. 다음 차례는 누구일까요?" 줄을 손가락으로 짚으며 읽고 빈칸에 올 조각을 고른다. 한 조각만 계속 고르는 학생에게 "한 사람만 계속 일하면 그 사람 마음은 어떨까요?"라고 묻는다. 출구 2번 뒤 "모두 함께해요!"를 다 같이 말한다.',
        exitTicket: [
          RULEP('다음 차례 조각을 골라요.', ['circle:mint', 'square:peach', 'triangle:sky', 'circle:mint', 'square:peach', null], ['동그라미', '네모', '세모'], 2, '빈칸에 올 조각은?'),
          { type: 'choice', prompt: '집안일은 누구 일이에요?', options: ['엄마 일', '가족 모두의 일'], answer: 1, difficulty: 0.1, explain: '집안일은 가족 모두가 나누어 해요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '집안일은 함께해요',
        items: [
          { type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '집안일은 가족 ___ 나누어 해요.', answer: '모두가' },
          { type: 'draw', prompt: '내가 할 집안일을 그려요.' },
        ],
      },
      notes: '규칙 판의 빈칸 조각은 휴대폰에서 누름 영역이 작아(교구 수정 중) 보기 단추로 고르는 판(rule)으로 했다.',
    }),
    FAM({
      id: 'gender.e12.family-together.wrap.family-song', type: 'wrap', title: '"모두 함께해요" 노래',
      method: '"모두 함께해요" 노래', tool: 'keyboard', minutes: 6,
      levels: { easy: '앞 마디("우리 가족 모두")만 함께 손뼉으로 친다.', base: '한 줄 노래(두 마디)를 리듬 블록으로 따라 놓는다.', challenge: '가사에 내가 할 일을 넣어 바꿔 부른다("수저 놓기 함께해요").' },
      wrap: {
        teacher: '"우리 가족 모두 함께해요!" 노래를 들려준 뒤 리듬 블록을 놓고 손뼉과 함께 부른다. 다 놓은 학생은 가사에 내가 할 일을 넣어 바꿔 부른다. 출구 2번에서 "아이는 안 해요"를 고른 학생에게 오늘 고른 1학년 집안일을 다시 보여 준다.',
        exitTicket: [
          RHY_EXIT('노래 리듬을 블록으로 놓아요.', ['q', 'q', 'e', 'e', 'q', 'q', 'q', 'h']),
          { type: 'choice', prompt: '1학년도 집안일을 해요?', options: ['아이는 안 해요', '할 수 있는 일을 해요'], answer: 1, difficulty: 0.1, explain: '1학년도 수저 놓기처럼 할 수 있는 일이 있어요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '우리 가족 모두 함께해요',
        items: [
          { type: 'check', prompt: '이번 주에 해 볼 일에 ✓ 해요.', options: ['수저 놓기', '신발 정리', '장난감 정리'] },
          { type: 'draw', prompt: '집안일을 함께하는 모습을 그려요.' },
        ],
      },
    }),
  );

  // =====================================================================================================
  // 1학년 · 가족끼리도 때리면 안 돼요 (가정폭력 예방 — 모든 장면은 가상의 동물 가족)
  const HIT = MOD('gender.e12.no-hitting-family', [1]);
  const OKNO = ['좋아요', '안돼요'];
  const SAFE = [{ name: '교실', icon: 'school', at: [0, 0] }, { name: '보건실', icon: 'hospital', at: [3, 0] }, { name: '교무실', icon: 'office', at: [0, 2] }, { name: '도서실', icon: 'library', at: [3, 2] }];
  const SAFE_MORE = [{ name: '운동장', icon: 'park', at: [1, 1] }, { name: '급식실', icon: 'dot', at: [2, 2] }];
  const HIT_R = [C('safe', '무서운 일은 알려도 돼요'), C('home', '집안일은 말하면 안 돼요', { why: '무서운 일은 가족 일이어도 믿는 어른께 말해요.' }), C('fault', '내가 잘못해서 그래요', { why: '아프게 하는 것은 아이 잘못이 아니에요.' })];
  ALL.push(
    HIT({
      id: 'gender.e12.no-hitting-family.intro.safe-home-scene', type: 'intro', title: '편안한 집·무서운 집 마음',
      method: '편안한 집·무서운 집 마음 고르기', tool: 'emotion', minutes: 6,
      levels: { easy: '교사가 장면 두 개를 읽어 주고 마음을 함께 고른다.', base: '시연을 보고 장면마다 아기 토끼의 마음을 스스로 말한다.', challenge: '무서운 장면에서 몸이 보내는 신호(가슴 두근두근)를 말한다.' },
      intro: {
        teacher: '"토끼 가족이 함께 밥을 먹어요. 다른 날에는 큰 소리로 겁을 주어요. 아기 토끼는 어떤 마음일까요?" 시연 단추로 장면과 마음이 이어지는 모습을 보인다. "아기 토끼가 말을 안 들어서 그래요"라는 말이 나오면 "말을 안 들어도 때리거나 겁주면 안 돼요. 아기 토끼 잘못이 아니에요"라고 답한다. 오늘은 가족 사이에도 지킬 약속과 무서울 때 알리는 법을 배운다고 밝힌다.',
        student: '두 장면 속 아기 토끼의 마음을 짝에게 말해 보아요.',
        demo: { tool: 'emotion', options: { mode: 'match', slots: [{ id: 'meal', label: '함께 밥 먹기' }, { id: 'yell', label: '큰 소리로 겁주기' }], cards: ['편안함', '무서움'] }, sequence: [{ match: { meal: '편안함', yell: '무서움' } }] },
        art: { draw: 'on the left a paper rabbit family eating dinner together and smiling, on the right a paper baby rabbit covering its ears under a dark paper cloud, nobody is hit', banner: '편안한 집이 좋아요', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
      },
      notes: '장면은 동물 가족의 일로만, 때리는 모습은 그리지 않는다. 학생의 집 이야기를 묻지 않는다. 걱정되는 말을 꺼내는 학생은 그 자리에서 캐묻지 않고 학교 대응 절차를 따른다.',
    }),
    HIT({
      id: 'gender.e12.no-hitting-family.intro.gentle-hands-song', type: 'intro', title: '"손은 안아 주는 손" 노래',
      method: '"손은 안아 주는 손" 노래', tool: 'keyboard', minutes: 6,
      levels: { easy: '앞 마디("우리 손은 때리는 손")만 함께 손뼉으로 친다.', base: '노래 한 줄(두 마디)을 듣고 손뼉으로 따라 친다.', challenge: '노래에 맞는 손 동작(꼭 안기·토닥토닥)을 이름 붙여 넣어 부른다.' },
      intro: {
        teacher: '"우리 손은 때리는 손 아니고, 안아 주는 손!" 시연 단추로 리듬 블록이 놓이는 모습을 보이고, 반 전체가 손뼉 대신 자기 팔을 토닥이며 따라 부른다. "화가 나면 때려도 돼요"라는 말이 나오면 "화가 나는 마음은 괜찮아요. 그래도 손은 때리지 않아요. 화가 나면 말로 해요"라고 답한다.',
        student: '"우리 손은 안아 주는 손!" 노래를 내 팔을 토닥이며 따라 불러요.',
        demo: RHY_DEMO(['e', 'e', 'e', 'e', 'q', 'q', 'e', 'e', 'e', 'e', 'h']),
        art: { draw: 'paper children gently hugging themselves and patting their own arms, soft cut paper hearts floating around', banner: '안아 주는 손', extra: [{ motif: 'heart', x: 300, y: 96, color: 'rose' }] },
      },
    }),
    HIT({
      id: 'gender.e12.no-hitting-family.activity.ok-notok', type: 'activity', title: '가족 행동 좋아요·안돼요',
      method: '가족 행동 좋아요·안돼요 나누기', tool: 'sortboard', minutes: 14,
      levels: { easy: '카드 4장, 틀린 바구니에 넣으면 까닭을 말하고 되돌아온다(장 수가 보인다).', base: '카드 6장을 다 넣은 뒤 확인한다.', challenge: '카드 8장, "미안해 하기"·"겁주는 큰소리"처럼 카드가 더 섞인다.' },
      activity: {
        title: '토끼 가족 행동 두 바구니', tool: 'sortboard',
        teacher: '"토끼 가족이 이렇게 하면 좋아요일까요, 안돼요일까요?" 카드를 함께 읽고 넣는다. "가족끼리는 때려도 돼요, 집안일이니까요"라는 학생에게 "가족이어도 때리거나 겁주면 안 돼요. 누구의 몸이든 소중해요"라고 답한다. 화가 날 때는 숨 쉬고 말로 하면 된다는 것도 둘째 문항에서 짚는다.',
        task: '토끼 가족 행동 카드를 두 바구니에 나누어요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: { shuffle: true } },
        items: [
          SB2(OKNO, '토끼 가족 행동을 나누어요.', ['꼭 안아 주기', '말로 타이르기', '같이 밥 먹기'], ['때리기', '밀치기', '물건 던지기'], { a: ['"미안해" 하기'], b: ['겁주는 큰소리'] }, 0.1),
          SB2(OKNO, '화가 날 때 행동을 나누어요.', ['숨 크게 쉬기', '"화났어" 말하기', '잠깐 쉬기'], ['동생 때리기', '문 쾅 차기', '물건 집어 던짐'], { a: ['물 마시기'], b: ['머리 잡아당김'] }, 0.15),
          SB2(OKNO, '어른 곰이 할 일을 나누어요.', ['밥 챙겨 주기', '아플 때 병원', '다독여 주기'], ['때리며 혼내기', '밥 안 주기', '무섭게 겁주기'], { a: ['책 읽어 주기'], b: ['혼자 두고 감'] }, 0.2, { conclude: '가족 사이에도 때리거나 겁주면 안 돼요. 무서우면 믿는 어른께 알려요.' }),
        ],
      },
      worksheet: { items: [{ type: 'table', prompt: '좋으면 ○, 안 되면 ×를 써요.', columns: ['행동', '○ / ×'], cells: [['꼭 안아 주기', ''], ['때리기', ''], ['말로 타이르기', '']], answer: '○, ×, ○' }],
        easy: [{ type: 'choice', prompt: '안 되는 행동에 ○ 해요.', options: ['때리기', '꼭 안아 주기'], answer: '때리기' }] },
      notes: '모든 카드는 가상의 토끼·곰 가족 이야기로 읽는다. 셋째 문항의 "밥 안 주기·혼자 두고 감"은 아이에게 꼭 필요한 돌봄을 주지 않는 일이다(사람 확인 목록).',
    }),
    HIT({
      id: 'gender.e12.no-hitting-family.activity.rabbit-choice', type: 'activity', title: '토끼 친구 갈림길',
      method: '토끼 친구는 어떻게 할까 갈림길', tool: 'dilemma', minutes: 13,
      levels: { easy: '첫 갈림에서 보기 2개 가운데 한 번만 고른다.', base: '고른 뒤 이어지는 장면에서 한 번 더 고른다(갈림 2번).', challenge: '갈림 2번을 지나 끝에서 까닭 카드 3장 가운데 하나를 고른다.' },
      activity: {
        title: '무서운 일이 있은 토끼', tool: 'dilemma',
        teacher: '"토끼 친구가 집에서 무서운 일이 있었어요. 토끼는 어떻게 하면 좋을까요?" 고르기 전에 반 전체가 손을 들어 어느 쪽인지 보인다. "맞는 건 토끼가 잘못해서예요"라는 학생에게 "잘못을 해도 때리면 안 돼요. 맞는 건 토끼 잘못이 아니에요"라고 답한다. 고른 뒤 \'처음부터 다른 길\'로 혼자 참는 길의 결과도 함께 보고, 말한 토끼가 잘한 것이라고 짚는다.',
        task: '장면마다 할 일을 고르고 결과를 봐요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          DILEMMA('무서운 일이 있었어요. 골라요.', { text: '토끼가 집에서 무서운 일이 있었어요.', motif: 'house', choices: [
            { id: 'alone', text: '혼자 꾹 참아요', result: '마음이 계속 무섭고 아파요.', why: '혼자 참지 않아도 돼요. 믿는 어른께 알려요.' },
            { id: 'tell', text: '선생님께 말해요', result: '선생님이 "말해 줘서 고마워" 하셨어요.', easyEnding: '선생님이 토끼를 도와주셨어요.', next: { text: '토끼가 "제가 잘못해서 그래요" 해요.', choices: [
              { id: 'notme', text: '"내 잘못 아니래"', result: '선생님이 "맞아, 네 잘못이 아니야" 하셨어요.', ending: '토끼 마음이 조금 가벼워졌어요.' },
              { id: 'blame', text: '"내가 나빴어" 울어요', result: '마음이 더 무거워졌어요.', why: '아프게 한 것은 토끼 잘못이 아니에요.' }] } }] },
          ['tell', 'notme'], HIT_R, 'safe', 0.1),
          DILEMMA('친구가 비밀이래요. 골라요.', { text: '다람쥐가 "집에서 맞았어, 비밀이야" 해요.', motif: 'flower', choices: [
            { id: 'keep', text: '비밀을 지켜요', result: '다람쥐가 혼자 무서워해요.', why: '아픈 일은 비밀로 하지 않고 어른께 알려요.' },
            { id: 'go', text: '"같이 선생님께 가자"', result: '다람쥐가 망설여요.', easyEnding: '선생님이 다람쥐를 도와주셨어요.', next: { text: '다람쥐가 "무서워" 해요.', choices: [
              { id: 'hold', text: '손잡고 함께 가요', result: '선생님이 다람쥐 이야기를 들어 주셨어요.', ending: '친구를 도와 믿는 어른께 알렸어요.' },
              { id: 'leave', text: '그냥 놀러 가요', result: '다람쥐가 혼자 남았어요.', why: '친구가 무서워하면 함께 가 줄 수 있어요.' }] } }] },
          ['go', 'hold'], HIT_R, 'safe', 0.15),
          DILEMMA('선생님이 안 계세요. 골라요.', { text: '말하러 갔는데 담임 선생님이 안 계세요.', motif: 'house', choices: [
            { id: 'quit', text: '그만두고 참아요', result: '아무도 몰라 도와줄 수 없어요.', why: '한 분이 안 계시면 다른 믿는 어른께 가요.' },
            { id: 'nurse', text: '보건 선생님께 가요', result: '보건 선생님이 "어서 와" 하셨어요.', easyEnding: '보건 선생님이 이야기를 들어 주셨어요.', next: { text: '보건 선생님이 "무슨 일이니?" 물으세요.', choices: [
              { id: 'say', text: '"무서운 일이 있었어요"', result: '보건 선생님이 담임 선생님과 함께 도와주셨어요.', ending: '다른 어른께 말해서 도움을 받았어요.' },
              { id: 'nothing', text: '"아무것도 아니에요"', result: '도움을 받지 못했어요.', why: '"무서운 일이 있었어요" 한 마디면 돼요.' }] } }] },
          ['nurse', 'say'], HIT_R, 'safe', 0.2, { conclude: '무서운 일은 믿는 어른께 알려요. 한 분이 안 계시면 다른 분께 말해요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '맞는 건 누구 잘못이에요?', options: ['아이 잘못', '아이 잘못이 아니에요'], answer: '아이 잘못이 아니에요' }] },
      notes: '"무서운 일"이 무엇인지 자세히 그리거나 말하지 않는다. 장면은 토끼·다람쥐의 일로만 이야기한다.',
    }),
    HIT({
      id: 'gender.e12.no-hitting-family.activity.safe-place-map', type: 'activity', title: '안전한 곳 지도',
      method: '안전한 곳과 믿는 어른 지도', tool: 'map', minutes: 25,
      levels: { easy: '핀을 놓으면 그 칸의 이름이 바로 보인다.', base: '학교 안 네 곳(교실·보건실·교무실·도서실) 가운데 알맞은 곳에 핀을 꽂는다.', challenge: '운동장·급식실까지 여섯 곳이 있는 지도에서 꽂고, 장소마다 할 말을 짝과 말한다.' },
      activity: {
        title: '학교 안 안전한 곳 지도', tool: 'map',
        teacher: '"무섭거나 도움이 필요할 때 학교에서 갈 수 있는 곳은 어디일까요?" 핀을 꽂을 때마다 그곳에 계신 어른을 함께 말한다(교실 — 담임 선생님, 보건실 — 보건 선생님, 교무실 — 여러 선생님). "학교에서 말하면 집에서 혼나요"라는 학생에게 "선생님은 너를 지키려고 들어요. 말해 준 것은 잘한 일이에요"라고 답한다. 끝나면 활동지의 [학교가 확인해 넣는 신고·상담 번호] 칸을 함께 읽는다.',
        task: '도움이 필요할 때 갈 곳에 핀을 꽂아요.', levels: { easy: { readout: true }, base: {}, challenge: {} },
        items: [
          PIN('담임 선생님께 말할 곳에 꽂아요.', SAFE, SAFE_MORE, '교실', 0.1),
          PIN('몸이 아플 때 갈 곳에 꽂아요.', SAFE, SAFE_MORE, '보건실', 0.15),
          PIN('여러 선생님이 계신 곳에 꽂아요.', SAFE, SAFE_MORE, '교무실', 0.2, { conclude: '학교에는 도와줄 어른이 여러 분 계셔요. 무서우면 찾아가 말해요.' }),
        ],
      },
      worksheet: {
        items: [
          { type: 'check', prompt: '무서울 때 말할 어른에 ✓ 해요.', options: ['담임 선생님', '보건 선생님', '교무실 선생님'] },
          { type: 'blank', prompt: '선생님과 함께 읽고 써요.', text: '도움 번호: ___', answer: '[학교가 확인해 넣는 신고·상담 번호]' },
        ],
      },
      notes: '이 주제는 집에서 생긴 무서운 일을 다루므로 지도에 집·이웃 어른 집을 두지 않고 학교 안의 자리만 둔다(계획의 이웃 어른 집은 뺐다). 자리 배치는 우리 학교대로 이야기한다.',
    }),
    HIT({
      id: 'gender.e12.no-hitting-family.wrap.calm-breath', type: 'wrap', title: '무서울 때 마음 숨쉬기',
      method: '무서울 때 마음 숨쉬기', tool: 'timer', minutes: 6,
      levels: { easy: '교사가 숨쉬기 카드를 읽어 주며 숨을 두 번 함께 쉰다.', base: '숨쉬기 카드 세 장을 차례로 놓고 숨을 세 번 쉰 뒤 점검 칸에 표시한다.', challenge: '숨쉬기 뒤 믿는 어른 한 명을 마음속으로 떠올려 말한다.' },
      wrap: {
        teacher: '"무서운 마음이 들 때 먼저 숨을 천천히 쉬어 봐요." 카드를 놓은 뒤 반 전체가 코로 들이쉬고, 잠깐 멈추고, 입으로 천천히 내쉬기를 세 번 한다. 숨쉬기 뒤 "무서운 일은 말해도 돼요"를 함께 말한다. 출구 2번에서 "집안일이라 말하면 안 돼요"를 고른 학생에게 "무서운 일은 가족 일이어도 믿는 어른께 말해요"라고 말해 준다.',
        exitTicket: [
          { type: 'tool', tool: 'timer', options: { title: '마음 숨쉬기', cards: ['천천히 내쉬기', '코로 들이쉬기', '잠깐 멈추기'] }, prompt: '숨쉬기 차례로 놓아요.', target: { order: ['코로 들이쉬기', '잠깐 멈추기', '천천히 내쉬기'], selfCheck: ['"말해도 돼요" 알아요'] }, difficulty: 0.15 },
          { type: 'choice', prompt: '집에서 무서운 일이 있으면?', options: ['집안일이라 숨겨요', '믿는 어른께 말해요'], answer: 1, difficulty: 0.1, explain: '무서운 일은 가족 일이어도 믿는 어른께 말해요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '가족끼리도 때리면 안 돼요',
        items: [
          { type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '가족끼리도 ___ 안 돼요.', answer: '때리면' },
          { type: 'draw', prompt: '편안한 마음을 날씨로 그려요.' },
        ],
      },
    }),
    HIT({
      id: 'gender.e12.no-hitting-family.wrap.tell-story', type: 'wrap', title: '"말해 줘서 고마워" 이야기',
      method: '"말해 줘서 고마워" 이야기', tool: 'story', minutes: 6,
      levels: { easy: '교사가 말 카드 두 장만 읽어 주고 함께 고른다.', base: '말 카드 세 장 가운데 선생님이 할 말을 고른다.', challenge: '고른 뒤 토끼가 할 대답도 짝과 지어 말한다.' },
      wrap: {
        teacher: '"토끼가 용기 내어 선생님께 말했어요. 선생님은 뭐라고 하실까요?" 말 카드를 함께 읽고 고른 뒤 반 전체가 선생님 말을 따라 말한다. "비밀로 하자"를 고른 학생에게 "비밀로 하면 토끼를 누가 도와줄 수 있을까요?"라고 묻는다. 끝에 "말해 줘서 고마워, 네 잘못이 아니야"를 한 번 더 말한다.',
        exitTicket: [
          FILL('선생님이 할 말을 골라요.', '선생님', '말해 줘서 고마워. ___', [C('notyou', '네 잘못이 아니야'), C('endure', '네가 참아'), C('hush', '비밀로 하자')], 'notyou'),
          { type: 'choice', prompt: '무서운 일을 말한 토끼는?', options: ['잘한 거예요', '혼나야 해요'], answer: 0, difficulty: 0.1, explain: '무서운 일을 말한 것은 잘한 일이에요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '말해 줘서 고마워',
        items: [
          { type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '말해 줘서 고마워. 네 ___이 아니야.', answer: '잘못' },
          { type: 'check', prompt: '내가 말할 어른에 ✓ 해요.', options: ['담임 선생님', '보건 선생님', '믿는 집 어른'] },
        ],
      },
    }),
  );

  // =====================================================================================================
  // 2학년 · 몸의 바른 이름과 속옷으로 가리는 곳
  const NAME = MOD('gender.e12.body-names', [2]);
  const NAME_R = [C('mine', '소중한 곳은 내가 지켜요'), C('any', '누가 보자면 보여 줘요', { why: '소중한 곳은 보여 주지 않아도 돼요.' }), C('shy', '부끄러운 곳이라 숨겨요', { why: '부끄러운 곳이 아니라 소중한 곳이에요.' })];
  ALL.push(
    NAME({
      id: 'gender.e12.body-names.intro.name-listen', type: 'intro', title: '몸 이름 듣고 짚기',
      method: '몸 이름 듣고 짚기', tool: 'body', minutes: 6,
      levels: { easy: '교사가 이름 세 개(배·가슴·무릎)만 부르고 함께 짚는다.', base: '이름 다섯 개를 듣고 시연과 함께 종이 몸에서 짚는다.', challenge: '엉덩이·생식기도 바른 이름으로 말한다(종이 몸에는 없어 말로만).' },
      intro: {
        teacher: '"선생님이 몸 이름을 부르면 종이 몸에서 찾아볼까요? 배! 가슴!" 시연 단추로 배와 가슴이 골라지는 모습을 보인다. 이어 "엉덩이, 생식기도 몸의 바른 이름이에요. 속옷으로 가리는 소중한 곳이에요"라고 담담하게 말한다. 웃는 학생이 있으면 "의사 선생님도 이 이름을 써요. 부끄러운 말이 아니라 바른 이름이에요"라고 답한다.',
        student: '선생님이 부르는 몸 이름을 듣고 종이 몸에서 찾아보아요.',
        demo: { tool: 'body', options: { mode: 'parts', parts: ['눈', '가슴', '배', '무릎', '어깨'], names: true }, sequence: [{ parts: ['배'] }, { parts: ['배', '가슴'] }] },
        art: { draw: 'a calm paper doctor rabbit pointing at a simple paper body chart with labels, paper children listening quietly', banner: '몸의 바른 이름', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
      },
      notes: '종이 몸에 머리·엉덩이·생식기 칸이 없어 배·가슴만 짚고 나머지는 교사가 말로 바른 이름을 알려 준다. 학생의 몸을 가리키게 하지 않는다.',
    }),
    NAME({
      id: 'gender.e12.body-names.intro.head-shoulders', type: 'intro', title: '머리 어깨 무릎 노래',
      method: '머리 어깨 무릎 노래 리듬', tool: 'keyboard', minutes: 6,
      levels: { easy: '앞 마디("머리 어깨 무릎 발")만 손뼉으로 치며 짚는다.', base: '노래 한 줄(두 마디)을 손뼉으로 치며 이름이 나올 때 짚는다.', challenge: '빠르기를 바꿔(조금 빠르게) 다시 치며 짚는다.' },
      intro: {
        teacher: '"머리 어깨 무릎 발, 무릎 발!" 시연 단추로 리듬 블록이 놓이는 모습을 보이고 노래하며 이름이 나올 때마다 내 몸을 짚는다. 두 번째에는 조금 빠르게 부른다. "몸 이름은 아무렇게나 불러도 돼요"라는 말이 나오면 "아플 때 바른 이름으로 말해야 어른이 어디가 아픈지 알아요"라고 답한다.',
        student: '노래에 맞춰 머리, 어깨, 무릎, 발을 짚어 보아요.',
        demo: RHY_DEMO(['e', 'e', 'e', 'e', 'e', 'e', 'q', 'e', 'e', 'q', 'e', 'e', 'q']),
        art: { draw: 'paper children singing and touching their heads, shoulders, knees and feet in a circle, cut paper musical notes above', banner: '머리 어깨 무릎 발', extra: [{ motif: 'flower', x: 300, y: 96 }] },
      },
    }),
    NAME({
      id: 'gender.e12.body-names.activity.name-card-match', type: 'activity', title: '몸 이름 카드 가지',
      method: '몸 이름 카드 가지에 넣기', tool: 'mindmap', minutes: 14,
      levels: { easy: '가지 2개에 카드를 넣고, 놓으면 바로 맞는지 알려 준다.', base: '가지 3개에 카드 6장을 넣고, 속옷으로 가리는 곳을 나눈다.', challenge: '카드가 더 많고, 셋째 문항에서 "거기"·"아래"처럼 흐린 말을 빼고 바른 이름만 고른다.' },
      activity: {
        title: '"내 몸" 이름 생각 그물', tool: 'mindmap',
        teacher: '"이 이름은 몸의 어느 쪽에 있을까요?" 카드를 놓을 때마다 이름을 함께 소리 내어 읽는다. 둘째 문항에서 생식기 카드에 웃는 학생이 있으면 "몸의 바른 이름이에요. 속옷이 가려 주는 소중한 곳이에요"라고 담담하게 말한다. 셋째 문항에서 "거기가 아파요"보다 바른 이름으로 말하면 어른이 더 빨리 도울 수 있다는 점을 짚는다.',
        task: '몸 이름 카드를 알맞은 가지에 넣어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          { prompt: '몸 이름을 가지에 넣어요.', toolOptions: { topic: '내 몸', slots: ['머리 쪽', '몸통 쪽', '다리 쪽'], cards: ['눈', '가슴', '무릎', '귀', '배', '발'] }, target: { sort: { '머리 쪽': ['눈', '귀'], '몸통 쪽': ['가슴', '배'], '다리 쪽': ['무릎', '발'] } }, difficulty: 0.1,
            levels: { easy: { prompt: '머리 쪽·다리 쪽에 넣어요.', toolOptions: { slots: ['머리 쪽', '다리 쪽'], cards: ['눈', '무릎', '귀', '발'] }, target: { sort: { '머리 쪽': ['눈', '귀'], '다리 쪽': ['무릎', '발'] } } },
              challenge: { prompt: '몸 이름 8장을 넣어요.', toolOptions: { cards: ['눈', '가슴', '무릎', '귀', '배', '발', '코', '발목'] }, target: { sort: { '머리 쪽': ['눈', '귀', '코'], '몸통 쪽': ['가슴', '배'], '다리 쪽': ['무릎', '발', '발목'] } } } } },
          { prompt: '속옷이 가리는 곳을 나눠요.', toolOptions: { topic: '속옷', slots: ['속옷이 가려요', '보여도 돼요'], cards: ['가슴', '손', '엉덩이', '발', '생식기', '머리'] }, target: { sort: { '속옷이 가려요': ['가슴', '엉덩이', '생식기'], '보여도 돼요': ['손', '발', '머리'] } }, difficulty: 0.15,
            levels: { easy: { prompt: '속옷이 가리는 곳(4장).', toolOptions: { cards: ['가슴', '손', '엉덩이', '발'] }, target: { sort: { '속옷이 가려요': ['가슴', '엉덩이'], '보여도 돼요': ['손', '발'] } } } } },
          { prompt: '바른 몸 이름만 골라 담아요.', toolOptions: { mode: 'pick', topic: '바른 이름', cards: ['배', '"거기"', '엉덩이', '생식기'] }, target: { pick: ['배', '엉덩이', '생식기'] }, difficulty: 0.2,
            levels: { challenge: { prompt: '바른 몸 이름만 골라요(6장).', toolOptions: { cards: ['배', '"거기"', '엉덩이', '"아래"', '생식기', '가슴'] }, target: { pick: ['배', '엉덩이', '생식기', '가슴'] } } },
            conclude: '몸의 바른 이름을 알아요. 속옷으로 가리는 곳은 나만의 소중한 곳이에요.' },
        ],
      },
      worksheet: { items: [{ type: 'table', prompt: '속옷이 가리면 ○를 써요.', columns: ['몸', '○ / ×'], cells: [['엉덩이', ''], ['손', ''], ['생식기', '']], answer: '○, ×, ○' }],
        easy: [{ type: 'choice', prompt: '속옷이 가리는 곳에 ○ 해요.', options: ['엉덩이', '손'], answer: '엉덩이' }] },
      notes: '계획의 "별명 카드"는 낱말 그 자체를 수업에 들이지 않으려고 "거기"·"아래" 같은 흐린 말로 바꾸었다. 생식기라는 바른 이름을 담담하게 쓴다(사람 확인 목록).',
    }),
    NAME({
      id: 'gender.e12.body-names.activity.underwear-zone', type: 'activity', title: '속옷으로 가리는 곳',
      method: '속옷으로 가리는 곳 표시하기', tool: 'collage', minutes: 13,
      levels: { easy: '종이 인형 몸과 속옷 조각을 붙이고, 셋째 문항은 점검 칸만 표시한다.', base: '인형 몸·속옷 조각에 "소중한 곳" 별까지 붙인다.', challenge: '별을 붙이고 "누가 보자고 하면 싫어요" 점검 칸까지 표시한다.' },
      activity: {
        title: '종이 인형 속옷 붙이기', tool: 'collage',
        teacher: '"종이 인형에 속옷을 입혀 줄까요? 속옷이 가려 주는 곳은 어디일까요?" 판에서 동그라미 = 머리, 긴 네모 = 몸, 반원 = 속옷, 별 = 소중한 곳 표시로 정하고 붙인다. 별은 속옷 위에 붙인다. "소중한 곳은 부끄러운 곳이에요"라는 학생에게 "부끄러워서 가리는 게 아니라 소중해서 가려요"라고 답한다.',
        task: '종이 인형에 속옷과 소중한 곳 별을 붙여요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          { prompt: '머리와 몸 조각을 붙여요.', toolOptions: { shapes: ['circle', 'rect', 'semi', 'star'], sizes: ['m', 'l'] }, target: { has: [{ shape: 'circle', min: 1 }, { shape: 'rect', min: 1 }] }, difficulty: 0.1 },
          { prompt: '반원 속옷 조각을 붙여요.', toolOptions: { shapes: ['semi', 'rect', 'circle'], colors: ['파랑', '분홍', '노랑', '초록'] }, target: { has: [{ shape: 'semi', min: 1 }], pieces: { min: 2 } }, difficulty: 0.15 },
          { prompt: '소중한 곳 별을 붙여요.', toolOptions: { shapes: ['star', 'semi', 'heart'] }, target: { has: [{ shape: 'star', min: 1 }], pieces: { min: 2 } }, difficulty: 0.2,
            levels: { easy: { prompt: '해 본 것에 표시해요.', target: { selfCheck: ['속옷을 붙였어요'], minPieces: 1 } }, challenge: { prompt: '별을 붙이고 점검도 해요.', target: { has: [{ shape: 'star', min: 1 }], pieces: { min: 2 }, selfCheck: ['보자고 하면 "싫어요"'] } } },
            conclude: '속옷으로 가리는 곳은 나만의 소중한 곳이에요.' },
        ],
      },
      worksheet: { items: [{ type: 'draw', prompt: '속옷을 입은 종이 인형을 그려요.' }] },
      notes: '학생의 몸이 아니라 종이 인형으로만 이야기한다. 콜라주 판은 인형을 그리지 못해 조각 뜻을 정해서 붙인다.',
    }),
    NAME({
      id: 'gender.e12.body-names.activity.doctor-visit', type: 'activity', title: '병원·씻기 갈림길',
      method: '병원·씻기 때는 어떻게? 갈림길', tool: 'dilemma', minutes: 25,
      levels: { easy: '첫 갈림에서 보기 2개 가운데 한 번만 고른다.', base: '고른 뒤 이어지는 장면에서 한 번 더 고른다(갈림 2번).', challenge: '갈림 2번을 지나 끝에서 까닭 카드 3장 가운데 하나를 고른다.' },
      activity: {
        title: '소중한 곳을 지키는 갈림길', tool: 'dilemma',
        teacher: '"배가 아파 병원에 갔어요. 의사 선생님이 배를 봐야 한대요. 어떻게 할까요?" 첫 장면에서는 집 어른이 곁에 있는지, 의사 선생님이 먼저 말해 주는지를 함께 살핀다. "병원에서도 절대 안 돼요"라는 학생에게 "아플 때 집 어른이 곁에 있고, 내가 알고 받는 진료는 나를 돕는 일이에요"라고 답한다. 셋째 장면에서 소중한 곳을 보자고 하는 사람이 있으면 아는 사람이어도 "싫어요" 하고 알리며, 그 사람이 잘못한 것이라고 짚는다.',
        task: '장면마다 할 일을 고르고 결과를 봐요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          DILEMMA('병원에서 진료받아요. 골라요.', { text: '배가 아파 병원에 왔어요. 의사 선생님이 배를 봐야 한대요.', motif: 'house', choices: [
            { id: 'alone', text: '혼자 들어가요', result: '혼자라서 무서웠어요.', why: '진료는 집 어른과 함께 받아요.' },
            { id: 'with', text: '집 어른과 함께 가요', result: '집 어른이 곁에 계셔요.', easyEnding: '집 어른 곁에서 진료를 받았어요.', next: { text: '의사 선생님이 "배를 볼게요" 먼저 말해요.', choices: [
              { id: 'ok', text: '"네" 하고 진료받아요', result: '어디가 아픈지 알게 됐어요.', ending: '어른이 곁에 있고 내가 알고 진료받았어요.' },
              { id: 'run', text: '진료실에서 도망가요', result: '아픈 곳을 못 고쳤어요.', why: '집 어른이 곁에 있는 진료는 나를 돕는 일이에요.' }] } }] },
          ['with', 'ok'], NAME_R, 'mine', 0.1),
          DILEMMA('목욕할 때예요. 골라요.', { text: '목욕 시간이에요. 소중한 곳을 씻을 차례예요.', motif: 'house', choices: [
            { id: 'self', text: '"내가 씻을래요"', result: '집 어른이 "그래, 해 보렴" 하셨어요.', easyEnding: '혼자 깨끗이 씻었어요.', next: { text: '비누 거품을 냈어요.', choices: [
              { id: 'wash', text: '살살 씻고 헹궈요', result: '깨끗해졌어요.', ending: '소중한 곳을 내 손으로 아꼈어요.' },
              { id: 'skip', text: '안 씻고 나가요', result: '가렵고 아플 수 있어요.', why: '소중한 곳도 깨끗이 씻어요.' }] } },
            { id: 'never', text: '안 씻어요', result: '몸이 가려워졌어요.', why: '소중한 곳도 날마다 깨끗이 씻어요.' }] },
          ['self', 'wash'], NAME_R, 'mine', 0.15),
          DILEMMA('보자고 해요. 골라요.', { text: '아는 형이 "소중한 곳 보여 줘" 해요.', motif: 'flower', choices: [
            { id: 'stay', text: '가만히 있어요', result: '마음이 불편하고 무서워요.', why: '"싫어요" 하고 그 자리를 떠나요.' },
            { id: 'no', text: '"싫어요!" 하고 떠나요', result: '집 어른 곁으로 왔어요.', easyEnding: '집 어른께 말해서 도움을 받았어요.', next: { text: '형이 "말하지 마" 했어요.', choices: [
              { id: 'tell', text: '집 어른께 말해요', result: '집 어른이 "말해 줘서 고마워" 하셨어요.', ending: '말한 것은 잘한 일이에요. 형이 잘못했어요.' },
              { id: 'hide', text: '비밀로 해요', result: '마음이 계속 무거워요.', why: '보자고 한 일은 꼭 믿는 어른께 말해요.' }] } }] },
          ['no', 'tell'], NAME_R, 'mine', 0.2, { conclude: '소중한 곳은 내가 지켜요. 병원은 집 어른과 함께, 보자고 하면 "싫어요" 하고 알려요.' }),
        ],
      },
      worksheet: {
        items: [
          { type: 'choice', prompt: '병원 진료는 누구와 받아요?', options: ['집 어른과 함께', '혼자'], answer: '집 어른과 함께' },
          { type: 'choice', prompt: '소중한 곳을 보자고 하면?', options: ['"싫어요" 하고 알려요', '보여 줘요'], answer: '"싫어요" 하고 알려요' },
        ],
      },
      notes: '세 장면 모두 그림 없이 짧은 글로만 보인다. 셋째 장면을 읽을 때 무엇을 하려 했는지 자세히 말하지 않는다. 걱정되는 말을 꺼내는 학생은 캐묻지 않고 학교 대응 절차를 따른다.',
    }),
    NAME({
      id: 'gender.e12.body-names.wrap.name-pattern', type: 'wrap', title: '몸 이름 조각 빈칸',
      method: '몸 이름 조각 빈칸 채우기', tool: 'pattern', minutes: 6,
      levels: { easy: '교사가 "머리·배·발"을 짚으며 읽고 빈칸에 올 이름을 함께 고른다.', base: '되풀이되는 줄을 보고 빈칸에 올 이름을 보기 단추에서 스스로 고른다.', challenge: '고른 뒤 노래처럼 리듬을 붙여 줄 전체를 읽는다.' },
      wrap: {
        teacher: '"머리, 배, 발, 머리, 배… 다음은 무엇일까요?" 줄을 손가락으로 짚으며 읽고, 이름이 나올 때마다 내 몸을 짚은 뒤 빈칸에 올 이름을 고른다. 출구 2번에서 "부끄러운 말이에요"를 고른 학생에게 "의사 선생님도 쓰는 바른 이름이에요"라고 말해 준다.',
        exitTicket: [
          RULEP('빈칸에 올 이름을 골라요.', ['머리', '배', '발', '머리', '배', null], ['머리', '배', '발'], 2, '빈칸에 올 이름은?'),
          { type: 'choice', prompt: '생식기는 어떤 말이에요?', options: ['부끄러운 말', '몸의 바른 이름'], answer: 1, difficulty: 0.1, explain: '생식기는 몸의 바른 이름이에요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '몸의 바른 이름',
        items: [
          { type: 'check', prompt: '내가 아는 바른 이름에 ✓ 해요.', options: ['머리', '가슴', '배', '엉덩이', '생식기'] },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '속옷으로 가리는 곳은 ___ 곳이에요.', answer: '소중한' },
        ],
      },
    }),
    NAME({
      id: 'gender.e12.body-names.wrap.proud-body', type: 'wrap', title: '바른 이름 말한 뒤 마음',
      method: '바른 이름 말한 뒤 마음', tool: 'emotion', minutes: 6,
      levels: { easy: '교사가 마음 카드 두 개(편안함·화남)만 가리키며 함께 고른다.', base: '마음 카드 세 장 가운데 토끼의 마음을 고른다.', challenge: '고른 뒤 바른 이름을 알면 좋은 점을 한 가지 말한다.' },
      wrap: {
        teacher: '"토끼가 \'배가 아파요\' 하고 바른 이름으로 말했더니 보건 선생님이 금방 도와주셨어요. 토끼 마음은 어떨까요?" 장면과 마음을 이은 뒤, 바른 이름을 알면 좋은 점을 함께 말한다(아픈 곳을 바로 말할 수 있어요). 출구 2번에서 "별명으로 불러도 돼요"를 고른 학생에게 "아플 때는 바른 이름이어야 어른이 바로 알아요"라고 말해 준다.',
        exitTicket: [
          { type: 'tool', tool: 'emotion', options: { mode: 'match', slots: [{ id: 'say', label: '바른 이름으로 말함' }, { id: 'help', label: '금방 도움받음' }], cards: ['편안함', '뿌듯함', '화남'] }, prompt: '토끼 마음을 이어요.', target: { match: { say: ['뿌듯함', '편안함'], help: ['편안함', '뿌듯함'] } }, difficulty: 0.15 },
          { type: 'choice', prompt: '아플 때 몸 이름은?', options: ['별명으로 말해요', '바른 이름으로 말해요'], answer: 1, difficulty: 0.1, explain: '바른 이름으로 말해야 어른이 바로 알아요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '바른 이름으로 말해요',
        items: [
          { type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '아플 때는 ___ 이름으로 말해요.', answer: '바른' },
          { type: 'draw', prompt: '아픈 곳을 말하는 내 모습을 그려요.' },
        ],
      },
    }),
  );

  // =====================================================================================================
  // 2학년 · 내 몸 둘레의 보이지 않는 선
  const LINE = MOD('gender.e12.invisible-line', [2]);
  const NEAR2 = ['편안한 거리', '불편한 거리'];
  // 자리 핀(map): 장소 이름 = 설 자리. 도전은 헷갈리는 자리가 더 있다
  const SEAT = (prompt, base, more2, place, d, more) => ({ prompt, toolOptions: { grid: [4, 3], places: base }, target: { place }, difficulty: d, levels: { challenge: { toolOptions: { places: [...base, ...more2] } } }, ...more });
  ALL.push(
    LINE({
      id: 'gender.e12.invisible-line.intro.hula-space', type: 'intro', title: '팔 벌려 내 공간 만들기',
      method: '팔 벌려 내 공간 만들기', tool: 'timer', minutes: 6,
      levels: { easy: '교사를 따라 두 팔 벌리기 한 동작만 함께 한다.', base: '두 팔 벌리기 → 빙 돌기 두 동작을 하고 "내 공간!"을 외친다.', challenge: '짝과 서로 팔이 닿지 않는 자리에 선다.' },
      intro: {
        teacher: '"두 팔을 쫙 벌려 빙 돌아 볼까요? 팔이 닿는 둥근 곳이 내 공간이에요." 시연 단추로 동작 카드가 놓이는 모습을 보인 뒤 반 전체가 자리에서 일어나 해 본다. "친하면 공간이 없어요"라는 말이 나오면 "친한 친구도 내 공간이 있어요. 들어오기 전에 물어보면 좋아요"라고 답한다. 팔을 휘두를 때 옆 친구와 부딪히지 않게 넓게 선다.',
        student: '두 팔을 벌려 빙 돌며 내 공간을 만들어 보아요.',
        demo: { tool: 'timer', options: { title: '내 공간 동작', cards: ['"내 공간!"', '두 팔 벌리기', '빙 돌기'] }, sequence: [{ order: ['두 팔 벌리기', '빙 돌기', '"내 공간!"'] }] },
        art: { draw: 'paper children standing apart with arms spread wide, each surrounded by a soft dotted cut paper circle', banner: '내 몸 둘레의 보이지 않는 선', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
      },
    }),
    LINE({
      id: 'gender.e12.invisible-line.intro.too-close', type: 'intro', title: '너무 가까운 장면 마음',
      method: '너무 가까운 장면 마음', tool: 'emotion', minutes: 6,
      levels: { easy: '교사가 장면 두 개를 읽어 주고 앞 친구의 마음을 함께 고른다.', base: '시연을 보고 장면마다 앞 친구의 마음을 스스로 말한다.', challenge: '편안한 거리 장면과 견주어 무엇이 다른지 말한다.' },
      intro: {
        teacher: '"줄을 설 때 뒤 친구가 바짝 붙었어요. 앞 친구는 어떤 마음일까요? 한 팔만큼 떨어져 서면요?" 시연 단추로 장면과 마음이 이어지는 모습을 보인다. "나는 괜찮으니까 친구도 괜찮아요"라는 말이 나오면 "편안한 거리는 사람마다 달라요. 친구의 마음은 친구에게 물어봐요"라고 답한다.',
        student: '두 장면 속 앞 친구의 마음을 짝에게 말해 보아요.',
        demo: { tool: 'emotion', options: { mode: 'match', slots: [{ id: 'close', label: '바짝 붙어 줄서기' }, { id: 'arm', label: '한 팔 거리 줄서기' }], cards: ['불편함', '편안함'] }, sequence: [{ match: { close: '불편함', arm: '편안함' } }] },
        art: { draw: 'a line of paper children, on one side one child pressed tightly against the back of another, on the other side children standing one arm apart', banner: '한 팔만큼', extra: [{ motif: 'leaf', x: 300, y: 222 }] },
      },
    }),
    LINE({
      id: 'gender.e12.invisible-line.activity.distance-sort', type: 'activity', title: '편안한 거리 나누기',
      method: '편안한 거리·불편한 거리 나누기', tool: 'sortboard', minutes: 14,
      levels: { easy: '카드 4장, 틀린 바구니에 넣으면 까닭을 말하고 되돌아온다(장 수가 보인다).', base: '카드 6장을 다 넣은 뒤 확인한다. 셋째 문항은 처음 본 사람과의 거리다.', challenge: '카드 8장, 비슷해 보이는 거리 카드가 더 섞인다.' },
      activity: {
        title: '거리 카드 두 바구니', tool: 'sortboard',
        teacher: '"이 거리는 편안한 거리일까요, 불편한 거리일까요?" 카드를 읽고 짝과 실제로 그 거리에 서 본 뒤 넣는다(얼굴 대기는 흉내만). "친하면 바짝 붙어도 돼요"라는 학생에게 "친해도 친구가 불편하면 한 걸음 물러나요"라고 답한다. 셋째 문항에서 처음 본 사람과는 더 멀리 떨어져 있는 것이 편안한 거리라는 점을 짚는다.',
        task: '거리 카드를 편안한·불편한 바구니에 나누어요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: { shuffle: true } },
        items: [
          SB2(NEAR2, '줄 설 때 거리를 나눠요.', ['한 팔 거리', '나란히 걷기', '차례로 서기'], ['바짝 붙기', '얼굴 바짝 대기', '등 밀며 서기'], { a: ['한 걸음 뒤'], b: ['어깨에 매달리기'] }, 0.1),
          SB2(NEAR2, '놀 때 거리를 나눠요.', ['"같이 놀래?"', '옆에 앉기', '마주 보고 앉기'], ['귀에 대고 소리', '몸에 올라타기', '뒤에서 꽉 안기'], { a: ['손 흔들어 부르기'], b: ['코앞에서 소리'] }, 0.15),
          SB2(NEAR2, '처음 본 사람과 거리예요.', ['멀리서 인사', '집 어른 곁', '두 걸음 거리'], ['바짝 다가가기', '따라가기', '손잡고 가기'], { a: ['고개만 끄덕'], b: ['차에 다가가기'] }, 0.2, { conclude: '내 몸 둘레에는 보이지 않는 선이 있어요. 편안한 거리는 사람마다 달라요.' }),
        ],
      },
      worksheet: { items: [{ type: 'table', prompt: '편안하면 ○, 불편하면 ×를 써요.', columns: ['거리', '○ / ×'], cells: [['한 팔 거리', ''], ['얼굴 바짝 대기', ''], ['나란히 걷기', '']], answer: '○, ×, ○' }],
        easy: [{ type: 'choice', prompt: '편안한 거리에 ○ 해요.', options: ['한 팔 거리', '바짝 붙기'], answer: '한 팔 거리' }] },
    }),
    LINE({
      id: 'gender.e12.invisible-line.activity.step-back', type: 'activity', title: '거리 두는 자리 고르기',
      method: '교실 칸 지도에서 거리 두기', tool: 'map', minutes: 13,
      levels: { easy: '핀을 놓으면 그 자리의 이름이 바로 보인다.', base: '세 장면(줄서기·모둠·처음 본 사람)마다 편안한 거리의 자리에 핀을 꽂는다.', challenge: '헷갈리는 자리가 더 있는 지도에서 꽂고, 왜 그 자리인지 짝에게 말한다.' },
      activity: {
        title: '교실 지도에서 내 자리 꽂기', tool: 'map',
        teacher: '"줄을 설 때 내 핀은 어디에 꽂으면 앞 친구가 편안할까요?" 핀을 꽂은 뒤 교실에서 실제로 그 거리에 서 본다. "바짝 뒤"에 꽂은 학생에게 "앞 친구가 뒤돌면 얼굴이 닿을 것 같아요. 한 팔만큼 떨어지면 어떨까요?"라고 묻는다. 거리를 두는 것은 친구가 싫어서가 아니라 서로 편안하려고 하는 것이라고 짚는다.',
        task: '편안한 거리의 자리에 핀을 꽂아요.', levels: { easy: { readout: true }, base: {}, challenge: {} },
        items: [
          SEAT('줄 설 때 내 자리에 꽂아요.', [{ name: '친구', icon: 'dot', at: [1, 0] }, { name: '바짝 뒤', icon: 'dot', at: [2, 0] }, { name: '한 팔 뒤', icon: 'dot', at: [3, 0] }], [{ name: '친구 옆 꽉', icon: 'dot', at: [1, 1] }], '한 팔 뒤', 0.1),
          SEAT('모둠에서 앉을 자리에 꽂아요.', [{ name: '친구', icon: 'dot', at: [0, 1] }, { name: '친구 의자 위', icon: 'dot', at: [0, 2] }, { name: '옆 의자', icon: 'dot', at: [2, 1] }], [{ name: '친구 무릎 앞', icon: 'dot', at: [1, 2] }], '옆 의자', 0.15),
          SEAT('처음 본 어른이 와요. 꽂아요.', [{ name: '처음 본 어른', icon: 'dot', at: [0, 0] }, { name: '어른 바로 앞', icon: 'dot', at: [1, 0] }, { name: '선생님 곁', icon: 'school', at: [3, 2] }], [{ name: '어른 옆 의자', icon: 'dot', at: [1, 1] }], '선생님 곁', 0.2, { conclude: '친구와 한 팔만큼, 처음 본 어른과는 더 멀리. 믿는 어른 곁으로 가요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '줄 설 때 어디에 서요?', options: ['바짝 뒤', '한 팔 뒤'], answer: '한 팔 뒤' }] },
      notes: '칸 지도는 문항마다 핀 하나라 계획의 "한 번·세 번"은 세 장면(줄서기·모둠·처음 본 사람) 문항으로 나누었다.',
    }),
    LINE({
      id: 'gender.e12.invisible-line.activity.bubble-role', type: 'activity', title: '보이지 않는 풍선 역할놀이',
      method: '보이지 않는 풍선 역할놀이', tool: 'story', minutes: 25,
      levels: { easy: '첫 장면이 놓여 있어 남은 두 장만 놓고, 놓으면 바로 맞는지 알려 준다.', base: '장면 세 장을 차례대로 놓고, 말풍선 두 칸을 채워 짝과 역할놀이한다.', challenge: '틀린 장면이 섞여 있어 빼고 놓으며, 말풍선을 짝과 역할을 바꿔 말한다.' },
      activity: {
        title: '풍선 친구 이야기', tool: 'story',
        teacher: '"풍선 친구는 몸 둘레에 보이지 않는 풍선이 있어요. 친구가 바짝 오면 풍선이 찌그러져요!" 장면을 놓은 뒤 짝과 한 명은 다가오는 친구, 한 명은 풍선 친구가 되어 "조금 떨어져 줄래?" "알았어!"를 해 본다. 다가오는 역할은 몸에 닿지 않게 한 걸음 앞에서 멈춘다. "떨어져 달라고 하면 친구가 싫어해요"라는 학생에게 "부드럽게 말하면 친구도 알아들어요. 친구가 그렇게 말하면 나도 \'알았어\' 해요"라고 답한다.',
        task: '풍선 친구 장면을 놓고 말풍선으로 짝과 말해요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          ORDER3('풍선 친구 이야기를 놓아요.', [C('close', '친구가 바짝 와요'), C('ask', '"떨어져 줄래?"'), C('ok', '"알았어" 한 걸음')], C('push', '친구를 밀어요'), 0.1),
          { prompt: '풍선 친구 말풍선을 채워요.', toolOptions: { mode: 'fill', slots: [{ id: 'f1', who: '풍선 친구', label: '조금만 ___' }, { id: 'f2', who: '친구', label: '___, 미안해.' }], cards: [C('away', '떨어져 줄래?'), C('ok2', '알았어'), C('nope', '싫은데?')] }, target: { fill: { f1: 'away', f2: 'ok2' } }, difficulty: 0.15 },
          ORDER3('줄 서는 이야기를 놓아요.', [C('stand', '줄을 서요'), C('arm', '한 팔 거리 재요'), C('wait', '차례를 기다려요')], C('lean', '친구에게 기대요'), 0.2, { conclude: '"조금 떨어져 줄래?" 부드럽게 말하고, 들으면 "알았어" 해요.' }),
        ],
      },
      worksheet: {
        items: [
          { type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '조금만 ___ 줄래?', answer: '떨어져' },
          { type: 'draw', prompt: '내 몸 둘레 풍선을 그려요.' },
        ],
      },
    }),
    LINE({
      id: 'gender.e12.invisible-line.wrap.line-song', type: 'wrap', title: '"한 팔만큼" 구호 리듬',
      method: '"한 팔만큼" 구호 리듬', tool: 'keyboard', minutes: 6,
      levels: { easy: '앞 마디("한 팔만큼")만 함께 손뼉으로 친다.', base: '구호 두 마디를 리듬 블록으로 따라 놓는다.', challenge: '구호를 짝과 한 마디씩 주고받으며 친다.' },
      wrap: {
        teacher: '"한 팔만큼 떨어져요!" 구호를 들려준 뒤 리듬 블록을 놓고, 한 팔을 앞으로 쭉 뻗으며 구호를 외친다. 다 놓은 학생은 짝과 주고받기로 친다. 출구 2번에서 "친하면 경계가 없어요"를 고른 학생에게 "친한 친구도 내 풍선이 있어요"라고 말해 준다.',
        exitTicket: [
          RHY_EXIT('구호 리듬을 블록으로 놓아요.', ['q', 'q', 'q', 'q', 'e', 'e', 'e', 'e', 'h']),
          { type: 'choice', prompt: '친한 친구는 경계가 없어요?', options: ['없어요', '친해도 있어요'], answer: 1, difficulty: 0.1, explain: '친한 친구도 몸 둘레에 보이지 않는 선이 있어요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '보이지 않는 선',
        items: [
          { type: 'blank', prompt: '구호를 따라 써요.', text: '한 팔만큼 ___!', answer: '떨어져요' },
          { type: 'check', prompt: '지킬 약속에 ✓ 해요.', options: ['한 팔만큼 떨어져요', '불편하면 말해요', '"알았어" 하고 물러나요'] },
        ],
      },
    }),
    LINE({
      id: 'gender.e12.invisible-line.wrap.bubble-collage', type: 'wrap', title: '내 풍선 경계 꾸미기',
      method: '내 풍선 경계 꾸미기', tool: 'collage', minutes: 6,
      levels: { easy: '교사와 함께 동그라미 풍선 1개를 붙인다.', base: '동그라미 풍선 2개 이상을 붙여 내 경계를 만든다.', challenge: '풍선마다 지킬 약속을 활동지에 그림으로 그린다.' },
      wrap: {
        teacher: '"내 몸 둘레의 보이지 않는 풍선을 색종이로 꾸며 볼까요?" 판에 동그라미 풍선을 붙이고, 가운데 하트를 나라고 정한다. 풍선이 크면 큰 대로, 작으면 작은 대로 괜찮다고 말해 준다(편안한 거리는 사람마다 달라요). 출구 2번에서 "친구 거리와 같아요"를 고른 학생에게 친구의 풍선도 함께 보여 준다.',
        exitTicket: [
          { type: 'tool', tool: 'collage', options: { shapes: ['circle', 'heart', 'star'], sizes: ['s', 'm', 'l'] }, prompt: '동그라미 풍선을 2개 붙여요.', target: { has: [{ shape: 'circle', min: 2 }] }, difficulty: 0.15 },
          { type: 'choice', prompt: '내 거리와 친구 거리는?', options: ['늘 같아요', '다를 수 있어요'], answer: 1, difficulty: 0.1, explain: '편안한 거리는 사람마다 달라요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '내 풍선 경계',
        items: [
          { type: 'draw', prompt: '내 풍선과 지킬 약속을 그려요.' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '편안한 거리는 사람마다 ___.', answer: '달라요' },
        ],
      },
    }),
  );

  // =====================================================================================================
  // 2학년 · "해도 돼?" 묻고 친구의 "싫어" 존중하기
  const ASK = MOD('gender.e12.ask-and-wait', [2]);
  const ASK_R = [C('ask', '먼저 묻고 대답을 들어요'), C('joke', '장난이면 안 물어도 돼요', { why: '장난이어도 친구 몸·물건·사진은 먼저 물어요.' }), C('smile', '웃으면 괜찮은 거예요', { why: '웃으며 말해도 "싫어"면 멈춰요.' })];
  ALL.push(
    ASK({
      id: 'gender.e12.ask-and-wait.intro.may-i-song', type: 'intro', title: '"해도 돼?" 노래 주고받기',
      method: '"해도 돼?" 노래 주고받기', tool: 'keyboard', minutes: 6,
      levels: { easy: '교사가 "해도 돼?" 한 마디를 쳐 주고 반 전체가 따라 친다.', base: '"해도 돼?"·"좋아"·"싫어" 리듬을 짝과 주고받아 친다.', challenge: '빠르기를 바꿔 주고받는다.' },
      intro: {
        teacher: '"해도 돼?" (선생님) "좋아!" 또는 "싫어!" (반 전체) 시연 단추로 리듬 블록이 놓이는 모습을 보이고 짝과 주고받아 친다. 묻는 쪽은 대답이 올 때까지 손을 멈추고 기다리게 한다. "장난이면 안 물어봐도 돼요"라는 말이 나오면 "장난도 친구가 싫을 수 있어요. 그래서 먼저 물어봐요"라고 답한다.',
        student: '"해도 돼?" "좋아!" "싫어!"를 짝과 손뼉으로 주고받아요.',
        demo: RHY_DEMO(['q', 'q', 'h', 'q', 'q', 'q', 'qr']),
        art: { draw: 'two paper children facing each other clapping, speech bubbles with a question mark and a heart cut from paper between them', banner: '해도 돼?', extra: [{ motif: 'heart', x: 300, y: 96, color: 'rose' }] },
      },
    }),
    ASK({
      id: 'gender.e12.ask-and-wait.intro.grab-scene', type: 'intro', title: '묻지 않고 가져간 장면',
      method: '묻지 않고 가져간 장면 마음', tool: 'emotion', minutes: 6,
      levels: { easy: '교사가 장면 두 개를 읽어 주고 친구 마음을 함께 고른다.', base: '시연을 보고 장면마다 친구의 마음을 스스로 말한다.', challenge: '물어본 장면과 견주어 무엇이 달랐는지 말한다.' },
      intro: {
        teacher: '"솔이가 하나의 지우개를 묻지 않고 가져갔어요. 하나 마음은 어떨까요? \'빌려줄래?\' 하고 물었다면요?" 시연 단추로 장면과 마음이 이어지는 모습을 보인다. "금방 돌려주면 괜찮아요"라는 말이 나오면 "돌려줘도 먼저 묻지 않으면 하나는 깜짝 놀라요. 몸·물건·사진은 먼저 물어요"라고 답한다.',
        student: '두 장면 속 하나의 마음을 짝에게 말해 보아요.',
        demo: { tool: 'emotion', options: { mode: 'match', slots: [{ id: 'grab', label: '묻지 않고 가져감' }, { id: 'ask', label: '"빌려줄래?" 물음' }], cards: ['속상함', '기쁨'] }, sequence: [{ match: { grab: '속상함', ask: '기쁨' } }] },
        art: { draw: 'a paper child reaching for a classmate eraser without asking on one side, and on the other side politely asking with a smile', banner: '먼저 물어요', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
      },
    }),
    ASK({
      id: 'gender.e12.ask-and-wait.activity.ask-order', type: 'activity', title: '묻기·기다리기 차례',
      method: '묻기·기다리기·따르기 차례 놓기', tool: 'story', minutes: 14,
      levels: { easy: '첫 장면이 놓여 있어 남은 두 장만 놓고, 놓으면 바로 맞는지 알려 준다.', base: '장면 세 장을 차례대로 놓고, 셋째 문항에서 "좋아"·"싫어" 두 갈래를 나눈다.', challenge: '"그냥 안기"처럼 틀린 장면이 섞여 있어 빼고 놓는다.' },
      activity: {
        title: '먼저 묻기 차례 카드', tool: 'story',
        teacher: '"친구를 안고 싶을 때 맨 먼저 무엇을 할까요?" 카드를 놓은 뒤 짝과 "안아도 돼?"를 묻고 기다리는 것까지 해 본다(안지는 않는다). "친구가 웃으면서 싫다고 하면 괜찮아요"라는 학생에게 "웃어도 \'싫어\'는 싫다는 뜻이에요. 바로 멈춰요"라고 답한다. 셋째 문항에서 "싫어"를 들으면 멈추고 사과하는 것이 친구를 아끼는 일이라고 짚는다.',
        task: '묻기·기다리기·따르기 차례로 장면을 놓아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          ORDER3('안고 싶어요. 차례로 놓아요.', [C('ask', '"안아도 돼?"'), C('wait', '대답 기다리기'), C('stop', '"싫어"면 멈추기')], C('just', '그냥 안기'), 0.1),
          ORDER3('지우개를 쓰고 싶어요. 놓아요.', [C('ask2', '"써도 돼?"'), C('wait2', '대답 듣기'), C('use', '"좋아"면 쓰기')], C('take', '몰래 가져가기'), 0.15),
          { prompt: '대답에 따라 나누어요.', toolOptions: { mode: 'sort', slots: ['"좋아" 하면', '"싫어" 하면'], cards: [C('play', '같이 놀기'), C('halt', '바로 멈추기'), C('thx', '"고마워"'), C('sry', '"미안해"')] }, target: { sort: { '"좋아" 하면': ['play', 'thx'], '"싫어" 하면': ['halt', 'sry'] } }, difficulty: 0.2,
            conclude: '먼저 묻고, 대답을 기다리고, "싫어"면 바로 멈춰요.' },
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '친구가 "싫어" 하면 바로 ___.', answer: '멈춰요' }] },
    }),
    ASK({
      id: 'gender.e12.ask-and-wait.activity.stop-game', type: 'activity', title: '"그만" 하면 멈추기 놀이',
      method: '"그만" 하면 멈추기 놀이', tool: 'timer', minutes: 13,
      levels: { easy: '타이머를 "그만" 신호 3번 놀이로 맞추고 함께 논다.', base: '타이머를 신호 5번 놀이로 맞추고, 멈추는 차례 카드도 놓는다.', challenge: '신호 5번으로 맞추고 멈춘 뒤 "미안해" 동작까지 했는지 점검한다.' },
      activity: {
        title: '"그만" 신호 놀이판', tool: 'timer',
        teacher: '"음악이 나오면 제자리에서 춤추고, 선생님이 \'그만!\' 하면 바로 멈춰요." 타이머를 맞춘 뒤 실제로 놀이를 한다(움직이는 동안 친구 몸에 닿지 않게 제자리에서). 늦게 멈춘 학생에게 "친구가 \'그만\' 할 때도 이렇게 바로 멈추면 친구가 편안해요"라고 말한다. 놀이가 끝나면 "그만"을 들으면 바로 멈추는 것이 친구의 "싫어"를 존중하는 것이라고 짚는다.',
        task: '타이머와 차례 카드를 맞추고 "그만" 놀이를 해요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          { prompt: '"그만" 신호를 5번으로 맞춰요.', toolOptions: { title: '"그만" 놀이', plan: { work: 10, rest: 5, rounds: 1 } }, target: { plan: { rounds: 5 } }, difficulty: 0.1,
            levels: { easy: { prompt: '"그만" 신호를 3번으로 맞춰요.', target: { plan: { rounds: 3 } } }, challenge: { prompt: '5번 맞추고 점검도 해요.', target: { plan: { rounds: 5 }, selfCheck: ['멈추고 "미안해" 했어요'] } } } },
          MOVES('"그만"을 들으면? 차례로.', '멈추기 차례', ['"그만!" 듣기', '바로 멈추기', '"알았어"'], '바로 멈췄어요', 0.15),
          { prompt: '놀이 전에 살펴봐요.', toolOptions: { title: '놀이 약속', safety: ['제자리에서 움직여요', '친구 몸에 안 닿아요', '"그만" 하면 멈춰요'] }, target: { safety: true }, difficulty: 0.2,
            conclude: '"그만"·"싫어"를 들으면 바로 멈춰요. 그게 친구를 아끼는 거예요.' },
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '친구가 "그만" 하면?', options: ['바로 멈춰요', '조금 더 해요'], answer: '바로 멈춰요' }] },
      notes: '타이머의 움직이기 10초·멈춤 5초는 놀이 진행용 우리 반 약속 값이다(근거 수치가 아니다).',
    }),
    ASK({
      id: 'gender.e12.ask-and-wait.activity.photo-ask-choice', type: 'activity', title: '친구 사진 찍기 갈림길',
      method: '친구 사진 찍기 갈림길', tool: 'dilemma', minutes: 25,
      levels: { easy: '첫 갈림에서 보기 2개 가운데 한 번만 고른다.', base: '고른 뒤 친구가 "싫어" 할 때 다음 선택(멈추기·조르기)을 고른다(갈림 2번).', challenge: '갈림 2번을 지나 끝에서 까닭 카드 3장 가운데 하나를 고른다.' },
      activity: {
        title: '먼저 묻기 갈림길 셋', tool: 'dilemma',
        teacher: '"친구 모습이 재밌어서 사진을 찍고 싶어요. 어떻게 할까요?" 고르기 전에 반 전체가 손을 들어 어느 쪽인지 보인다. "장난이니까 그냥 찍어도 돼요"라는 학생에게 "내 사진이 허락 없이 찍히면 내 마음은 어떨까요?"라고 묻는다. 둘째 장면에서 친구가 웃으며 "싫어"라고 해도 멈추는 것, 셋째 장면에서 "좋아"라고 해도 친구가 그만하면 멈추는 것을 짚는다.',
        task: '장면마다 할 일을 고르고 결과를 봐요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          DILEMMA('사진을 찍고 싶어요. 골라요.', { text: '친구 모습이 재밌어서 사진을 찍고 싶어요.', motif: 'flower', choices: [
            { id: 'snap', text: '바로 찍어요', result: '친구가 "왜 찍어!" 하며 속상해해요.', why: '사진은 찍기 전에 먼저 물어요.' },
            { id: 'ask', text: '"찍어도 돼?" 물어요', result: '친구가 "싫어" 해요.', easyEnding: '친구가 물어봐 줘서 고맙대요.', next: { text: '친구가 "싫어" 했어요.', choices: [
              { id: 'stop', text: '"알았어" 멈춰요', result: '친구가 웃으며 같이 놀재요.', ending: '물어보고 멈춰서 친구가 편안해요.' },
              { id: 'beg', text: '"한 번만!" 졸라요', result: '친구 마음이 불편해져요.', why: '"싫어"를 들으면 조르지 않고 멈춰요.' }] } }] },
          ['ask', 'stop'], ASK_R, 'ask', 0.1),
          DILEMMA('머리띠를 만지고 싶어요. 골라요.', { text: '친구 머리띠가 예뻐서 만져 보고 싶어요.', motif: 'flower', choices: [
            { id: 'touch', text: '그냥 만져요', result: '친구가 깜짝 놀랐어요.', why: '친구 몸과 물건은 먼저 물어요.' },
            { id: 'ask2', text: '"만져 봐도 돼?"', result: '친구가 웃으며 "싫어" 해요.', easyEnding: '물어봐서 친구가 놀라지 않았어요.', next: { text: '친구가 웃으며 "싫어" 했어요.', choices: [
              { id: 'sorry', text: '멈추고 "미안해"', result: '친구가 "괜찮아" 했어요.', ending: '웃어도 "싫어"면 멈췄어요.' },
              { id: 'laugh', text: '웃으니까 만져요', result: '친구 표정이 굳었어요.', why: '웃으며 말해도 "싫어"는 싫다는 뜻이에요.' }] } }] },
          ['ask2', 'sorry'], ASK_R, 'ask', 0.15),
          DILEMMA('놀래 주고 싶어요. 골라요.', { text: '친구를 놀래 주려고 뒤에서 안고 싶어요.', motif: 'house', choices: [
            { id: 'sneak', text: '몰래 안아요', result: '친구가 놀라 넘어질 뻔했어요.', why: '몸에 닿는 장난은 먼저 물어요.' },
            { id: 'ask3', text: '"안아도 돼?" 물어요', result: '친구가 "좋아!" 해요.', easyEnding: '친구와 살짝 안았어요.', next: { text: '안았더니 친구가 "이제 그만" 해요.', choices: [
              { id: 'let', text: '바로 놓아요', result: '친구가 웃었어요.', ending: '"좋아" 뒤에도 "그만"을 들으면 멈췄어요.' },
              { id: 'tight', text: '더 꽉 안아요', result: '친구가 답답해해요.', why: '"좋아"라고 했어도 "그만"이면 바로 멈춰요.' }] } }] },
          ['ask3', 'let'], ASK_R, 'ask', 0.2, { conclude: '몸·물건·사진은 먼저 묻고, "싫어"·"그만"을 들으면 바로 멈춰요.' }),
        ],
      },
      worksheet: {
        items: [
          { type: 'choice', prompt: '친구 사진을 찍고 싶으면?', options: ['먼저 물어봐요', '몰래 찍어요'], answer: '먼저 물어봐요' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '"___도 돼?" 먼저 물어요.', answer: '해' },
        ],
      },
    }),
    ASK({
      id: 'gender.e12.ask-and-wait.wrap.respect-sort', type: 'wrap', title: '존중하는 말 나누기',
      method: '존중하는 말·아닌 말 나누기', tool: 'sortboard', minutes: 6,
      levels: { easy: '교사가 카드를 하나씩 읽어 주고 반 전체가 손으로 ○·×를 그린 뒤 넣는다.', base: '카드 네 장을 스스로 바구니에 나눈다.', challenge: '안돼요 말을 존중하는 말로 바꿔 말한다("한 번만!" → "알았어, 미안해").' },
      wrap: {
        teacher: '"친구가 \'싫어\' 했을 때 하는 말이에요. 좋아요일까요, 안돼요일까요?" 카드를 함께 읽고 나눈다. "에이, 한 번만"을 좋아요에 둔 학생에게 "그 말을 들은 친구는 또 \'싫어\'라고 해야 해요. 마음이 어떨까요?"라고 묻는다. 끝에 "알았어, 미안해"를 다 같이 말한다.',
        exitTicket: [
          SORT_EXIT('친구가 "싫어" 했어요. 나눠요.', ['좋아요', '안돼요'], ['알았어 미안해', '다른 놀이 할래?'], ['"한 번만!"', '싫다는데 계속']),
          { type: 'choice', prompt: '장난일 때도 물어요?', options: ['장난은 안 물어요', '장난도 물어요'], answer: 1, difficulty: 0.1, explain: '장난이어도 친구 몸·물건·사진은 먼저 물어요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '"해도 돼?" 묻고 기다려요',
        items: [
          { type: 'table', prompt: '좋으면 ○, 안 되면 ×를 써요.', columns: ['말', '○ / ×'], cells: [['알았어, 미안해', ''], ['에이, 한 번만', ''], ['해도 돼?', '']], answer: '○, ×, ○' },
          { type: 'draw', prompt: '친구에게 먼저 묻는 내 모습을 그려요.' },
        ],
      },
    }),
    ASK({
      id: 'gender.e12.ask-and-wait.wrap.ask-pattern', type: 'wrap', title: '묻기·기다리기 무늬',
      method: '묻기·기다리기 무늬 잇기', tool: 'pattern', minutes: 6,
      levels: { easy: '교사가 동그라미(묻기)·네모(기다리기)·하트(따르기)를 짚으며 함께 고른다.', base: '되풀이되는 줄을 보고 빈칸에 올 조각을 보기 단추에서 스스로 고른다.', challenge: '고른 뒤 세 조각으로 짝과 새 규칙을 말로 만들어 본다.' },
      wrap: {
        teacher: '"동그라미는 묻기, 네모는 기다리기, 하트는 대답 따르기예요. 다음에 올 조각은 무엇일까요?" 줄을 짚으며 "묻고, 기다리고, 따라요!"를 함께 읽고 고른다. 하트를 빼먹는 학생에게 "대답을 듣고 나서 무엇을 할까요?"라고 묻는다. 출구 2번 뒤 짝과 "해도 돼?" "좋아!"를 한 번 주고받고 마친다.',
        exitTicket: [
          RULEP('다음에 올 조각을 골라요.', ['circle:sky', 'square:buttercup', 'heart:rose', 'circle:sky', 'square:buttercup', null], ['동그라미', '네모', '하트'], 2, '빈칸에 올 조각은?'),
          { type: 'choice', prompt: '친구가 웃으며 "싫어" 하면?', options: ['괜찮은 거예요', '멈춰요'], answer: 1, difficulty: 0.1, explain: '웃으며 말해도 "싫어"면 멈춰요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '묻고, 기다리고, 따라요',
        items: [
          { type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '묻고, ___, 따라요.', answer: '기다리고' },
          { type: 'check', prompt: '먼저 물어볼 것에 ✓ 해요.', options: ['친구 몸', '친구 물건', '친구 사진'] },
        ],
      },
    }),
  );

  // =====================================================================================================
  // 2학년 · 아는 사람이어도 싫으면 말해요
  const KNOWN = MOD('gender.e12.known-person', [2]);
  const LURE2 = ['괜찮아요', '꾀는 말'];
  ALL.push(
    KNOWN({
      id: 'gender.e12.known-person.intro.lure-words', type: 'intro', title: '꾀는 말 들을 때 마음',
      method: '꾀는 말 들을 때 마음', tool: 'emotion', minutes: 6,
      levels: { easy: '교사가 마음 카드 두 개(걱정·신남)만 가리키며 함께 고른다.', base: '마음 카드 네 장 가운데 토끼의 마음을 스스로 말한다.', challenge: '몸이 보내는 신호(배가 살살 아픔)도 함께 말한다.' },
      intro: {
        teacher: '"아는 아저씨 곰이 \'과자 줄 테니 우리끼리 비밀로 하자\' 해요. 토끼 마음은 어떨까요?" 두세 명의 대답을 듣고 시연 단추로 마음 카드가 바구니에 담기는 모습을 보인다. "과자 주니까 좋은 사람이에요"라는 말이 나오면 "과자를 주면서 비밀로 하자고 하면 마음이 이상해져요. 그런 말을 꾀는 말이라고 해요"라고 답한다. 오늘은 아는 사람이어도 싫으면 말하고 알리는 것을 배운다고 밝힌다.',
        student: '꾀는 말을 들은 토끼의 마음을 골라 짝에게 말해 보아요.',
        demo: { tool: 'emotion', options: { mode: 'pick', basket: '토끼 마음', cards: ['걱정', '신남', '무서움', '기쁨'], shuffle: false }, sequence: [{ pick: ['걱정', '무서움'] }] },
        art: { draw: 'a paper rabbit child looking uneasy as a paper bear holds out a cookie with a speech bubble that says shh, the rabbit stepping back', banner: '꾀는 말', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
      },
      notes: '장면 속 곰은 가상의 인물이다. "아는 사람"을 학생 주변의 실제 사람으로 떠올리게 하지 않는다.',
    }),
    KNOWN({
      id: 'gender.e12.known-person.intro.no-chant', type: 'intro', title: '"아는 사람도 싫으면 싫어요"',
      method: '"아는 사람도 싫으면 싫어요" 구호', tool: 'keyboard', minutes: 6,
      levels: { easy: '앞 마디("아는 사람도")만 함께 손뼉으로 친다.', base: '구호 두 마디를 손뼉으로 따라 치며 크게 말한다.', challenge: '같은 구호를 단호한 목소리(크고 또박또박)로 바꿔 친다.' },
      intro: {
        teacher: '"아는 사람도, 싫으면 싫어요!" 시연 단추로 리듬 블록이 놓이는 모습을 보이고 반 전체가 손바닥을 펴며 크게 따라 말한다. "아는 어른은 다 괜찮아요"라는 말이 나오면 "아는 어른도 싫은 손길이나 꾀는 말을 하면 싫다고 말하고 알려요"라고 답한다.',
        student: '"아는 사람도, 싫으면 싫어요!"를 손바닥을 펴며 크게 말해요.',
        demo: RHY_DEMO(['e', 'e', 'e', 'e', 'q', 'q', 'q', 'q', 'h']),
        art: { draw: 'paper children standing tall with open palms raised, saying no firmly, bold cut paper letters above', banner: '아는 사람도 싫으면 싫어요', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
      },
    }),
    KNOWN({
      id: 'gender.e12.known-person.activity.lure-sort', type: 'activity', title: '괜찮은 말·꾀는 말',
      method: '괜찮은 말·꾀는 말 나누기', tool: 'sortboard', minutes: 14,
      levels: { easy: '카드 4장, 틀린 바구니에 넣으면 까닭을 말하고 되돌아온다(장 수가 보인다).', base: '카드 6장을 다 넣은 뒤 확인한다.', challenge: '카드 8장, "사탕 줄게, 가자"처럼 헷갈리는 카드가 더 섞인다.' },
      activity: {
        title: '말 카드 두 바구니', tool: 'sortboard',
        teacher: '"이 말은 괜찮은 말일까요, 꾀는 말일까요?" 카드를 함께 읽고 넣는다. 꾀는 말은 선물·과자로 비밀을 만들거나, 혼자 오라고 하거나, 소중한 곳을 보자고 하는 말이라고 정리한다. "선물을 받았으면 비밀을 지켜야 해요"라는 학생에게 "선물을 받았어도 꾀는 말은 비밀로 하지 않고 어른께 알려요. 꾄 사람이 잘못한 거예요"라고 답한다.',
        task: '말 카드를 괜찮아요·꾀는 말 바구니에 나누어요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: { shuffle: true } },
        items: [
          SB2(LURE2, '아는 형 말을 나누어요.', ['"같이 놀자"', '"어른께 여쭤봐"', '"잘 가, 내일 봐"'], ['"선물 줄게 비밀"', '"몸 보여 줘"', '"둘만 가자"'], { a: ['"같이 그리자"'], b: ['"사진 찍자, 비밀"'] }, 0.1),
          SB2(LURE2, '아는 어른 말을 나누어요.', ['"안전띠 매자"', '"선생님께 가자"', '"손 씻고 오렴"'], ['"과자 줄게 와"', '"말하면 혼나"', '"우리 비밀이야"'], { a: ['"집에 잘 가렴"'], b: ['"사탕 줄게, 가자"'] }, 0.15),
          SB2(LURE2, '이웃 사람 말을 나누어요.', ['"같이 기다리자"', '"보건실 가자"', '"줄 서자"'], ['"몰래 사진 찍자"', '"문 잠그고 놀자"', '"혼자 오면 줄게"'], { a: ['"어른과 같이 와"'], b: ['"말하지 마"'] }, 0.2, { conclude: '아는 사람이어도 꾀는 말은 "싫어요" 하고 믿는 어른께 알려요.' }),
        ],
      },
      worksheet: { items: [{ type: 'table', prompt: '꾀는 말이면 ○를 써요.', columns: ['말', '○ / ×'], cells: [['선물 줄게, 비밀이야', ''], ['같이 놀자', ''], ['혼자 오면 줄게', '']], answer: '○, ×, ○' }],
        easy: [{ type: 'choice', prompt: '꾀는 말에 ○ 해요.', options: ['선물 줄게, 비밀이야', '잘 가, 내일 봐'], answer: '선물 줄게, 비밀이야' }] },
      notes: '말 카드는 글로만 보이고 장면을 그리지 않는다. "몸 보여 줘"는 소중한 곳을 보자는 말의 쉬운 표현이다(사람 확인 목록).',
    }),
    KNOWN({
      id: 'gender.e12.known-person.activity.escape-moves', type: 'activity', title: '말하고 피하는 몸짓',
      method: '말하고 피하는 몸짓 연습', tool: 'timer', minutes: 13,
      levels: { easy: '몸짓 카드 2장(처음·끝)의 차례만 놓고 함께 따라 한다.', base: '몸짓 카드 3장을 차례로 놓고 따라 한다.', challenge: '3장을 놓고 짝과 번갈아 해 본 뒤 점검 칸까지 표시한다.' },
      activity: {
        title: '말하기·피하기·알리기 몸짓', tool: 'timer',
        teacher: '"꾀는 말을 들으면 어떻게 할까요? 말하고, 피하고, 알려요!" 카드를 놓은 뒤 교실 뒤 빈 곳에서 "싫어요!" → 뒤로 물러나기 → 선생님 쪽으로 걸어가기를 해 본다(뛰지 않고 걷는다). 장난처럼 하는 학생에게 "진짜 그런 일이 생겼을 때 몸이 기억하도록 또박또박 해 봐요"라고 말한다. 짝 연습은 몸에 닿지 않게 한다.',
        task: '몸짓 카드를 차례로 놓고 따라 해요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          MOVES('꾀는 말을 들었어요. 차례로.', '피하는 몸짓', ['"싫어요!"', '뒤로 물러나기', '어른께 가기'], '짝과 번갈아 했어요', 0.1),
          MOVES('같이 가자고 해요. 차례로.', '안 가는 몸짓', ['"안 가요!"', '돌아서 가기', '"도와주세요!"'], '크게 말해 봤어요', 0.15),
          MOVES('선물로 꾀어요. 차례로.', '알리는 몸짓', ['"안 받아요"', '집 어른 곁으로', '있던 일 말하기'], '또박또박 했어요', 0.2, { conclude: '말하고, 피하고, 믿는 어른께 알려요.' }),
        ],
      },
      worksheet: { items: [{ type: 'check', prompt: '해 본 몸짓에 ✓ 해요.', options: ['"싫어요!" 말하기', '뒤로 물러나기', '어른께 가기'] }] },
    }),
    KNOWN({
      id: 'gender.e12.known-person.activity.tell-again-role', type: 'activity', title: '다시 말하기 역할놀이',
      method: '다시 말하기 역할놀이', tool: 'story', minutes: 25,
      levels: { easy: '첫 장면이 놓여 있어 남은 두 장만 놓고, 놓으면 바로 맞는지 알려 준다.', base: '장면 세 장을 놓고 말풍선 두 칸을 채워 짝과 어른·아이 역할로 말해 본다.', challenge: '틀린 장면이 섞여 있어 빼고 놓으며, 역할을 바꿔 다시 말해 본다.' },
      activity: {
        title: '다시 말하는 토끼 이야기', tool: 'story',
        teacher: '"토끼가 선생님께 말하러 갔는데 선생님이 바쁘셨어요. 토끼는 어떻게 할까요?" 장면을 놓은 뒤 짝과 한 명은 어른, 한 명은 토끼가 되어 "꼭 할 말이 있어요" "말해 줘서 고마워"를 해 본다. 셋째 문항에서 "선물을 받았으니 토끼 잘못이에요"라는 학생에게 "꾀는 말로 선물을 준 사람이 잘못한 거예요. 토끼는 잘못이 없어요"라고 답한다.',
        task: '다시 말하는 장면을 놓고 짝과 역할로 말해요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          ORDER3('다시 말하는 차례로 놓아요.', [C('t1', '선생님께 말해요'), C('busy', '선생님이 바빠요'), C('t2', '보건 선생님께')], C('quit', '그만 말해요'), 0.1),
          { prompt: '토끼와 어른 말풍선을 채워요.', toolOptions: { mode: 'fill', slots: [{ id: 'f1', who: '토끼', label: '꼭 할 말이 ___' }, { id: 'f2', who: '어른', label: '말해 줘서 ___' }], cards: [C('have', '있어요'), C('thanks', '고마워'), C('later', '나중에 해')] }, target: { fill: { f1: 'have', f2: 'thanks' } }, difficulty: 0.15 },
          { prompt: '누구 잘못인지 나누어요.', toolOptions: { mode: 'sort', slots: ['토끼 잘못', '토끼 잘못 아니야'], cards: [C('gift', '선물을 받았어요'), C('went', '따라가 버렸어요'), C('late', '바로 말 못 했어요')] }, target: { sort: { '토끼 잘못': [], '토끼 잘못 아니야': ['gift', 'went', 'late'] } }, difficulty: 0.2,
            hints: ['꾀는 말을 한 사람이 누구였는지 떠올려요.', '선물을 받았어도, 늦게 말해도 잘못한 사람은 꾄 사람이에요.', '세 장 모두 "토끼 잘못 아니야"에 넣어요.'],
            conclude: '한 어른이 바쁘면 다른 어른께 다시 말해요. 꾄 사람 잘못이지 내 잘못이 아니에요.' },
        ],
      },
      worksheet: {
        items: [
          { type: 'choice', prompt: '어른이 바쁘면 어떻게 해요?', options: ['다른 어른께 말해요', '그만 말해요'], answer: '다른 어른께 말해요' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '선물을 받았어도 내 ___이 아니에요.', answer: '잘못' },
        ],
      },
    }),
    KNOWN({
      id: 'gender.e12.known-person.wrap.fault-ox', type: 'wrap', title: '누구 잘못일까 고르기',
      method: '누구 잘못일까 고르기', tool: 'dilemma', minutes: 6,
      levels: { easy: '교사가 장면과 보기를 읽어 주고 반 전체가 손을 들어 함께 고른다.', base: '보기를 스스로 고르고 까닭 카드 한 장을 고른다.', challenge: '고른 까닭을 "왜냐하면 …" 한 마디로 말한다.' },
      wrap: {
        teacher: '"토끼가 곰에게 선물을 받았는데, 곰이 \'비밀이야\' 하며 싫은 손길을 했어요. 토끼 잘못일까요?" 보기를 함께 읽고 고른 뒤 까닭 카드를 고른다. "선물을 받았으니까 토끼도 잘못이에요"라는 학생에게 "선물로 꾀는 것이 잘못이에요. 토끼는 잘못이 없어요. 말한 토끼는 잘한 거예요"라고 답한다. 장면을 더 자세히 이야기하지 않는다.',
        exitTicket: [
          { type: 'tool', tool: 'dilemma', options: { title: '누구 잘못일까요?', scene: { text: '토끼가 선물을 받았어요. 곰이 비밀이라며 싫은 손길을 했어요.', motif: 'house', choices: [
            { id: 'rabbit', text: '토끼 잘못이에요', result: '토끼가 혼자 슬퍼해요.', why: '선물을 받았어도 토끼 잘못이 아니에요.' },
            { id: 'bear', text: '꾄 곰 잘못이에요', result: '토끼가 어른께 말할 용기를 냈어요.', ending: '잘못은 꾄 사람에게 있어요.' }] },
            reasons: [C('trick', '선물로 꾀는 게 잘못이에요'), C('took', '선물을 받았으니까요', { why: '선물을 받았어도 아이 잘못이 아니에요.' })], maxReasons: 1 }, prompt: '누구 잘못인지 골라요.', target: { path: [['bear']], reasons: ['trick'] }, difficulty: 0.15 },
          { type: 'choice', prompt: '말한 토끼는 어때요?', options: ['잘한 거예요', '혼나야 해요'], answer: 0, difficulty: 0.1, explain: '불편한 일을 말한 것은 잘한 일이에요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '아는 사람이어도 싫으면 말해요',
        items: [
          { type: 'table', prompt: '맞으면 ○, 틀리면 ×를 써요.', columns: ['말', '○ / ×'], cells: [['선물을 받았으면 비밀을 지켜요', ''], ['꾄 사람이 잘못했어요', ''], ['아는 어른은 다 괜찮아요', '']], answer: '×, ○, ×' },
          { type: 'draw', prompt: '"싫어요!" 말하는 내 모습을 그려요.' },
        ],
      },
      notes: '정리 질문은 단계별 판이 없어 쉬움은 교사가 함께 읽어 주는 방식으로 한다. 계획의 "까닭 그림 두 개"는 교구 한계(까닭 카드 한 장)로 한 장 고르기로 했다.',
    }),
    KNOWN({
      id: 'gender.e12.known-person.wrap.helper-hand', type: 'wrap', title: '믿는 어른 다섯 손가락',
      method: '믿는 어른 다섯 손가락', tool: 'collage', minutes: 6,
      levels: { easy: '교사와 함께 손가락 조각 3개를 붙이며 믿는 어른을 떠올린다.', base: '손가락 조각 5개를 붙이며 손가락마다 믿는 어른 한 명을 떠올린다.', challenge: '집 어른과 학교 어른을 섞어 떠올리고 활동지에 그린다.' },
      wrap: {
        teacher: '"내 손가락 다섯 개마다 믿는 어른을 한 명씩 떠올려 볼까요?" 판에 긴 네모 조각을 손가락처럼 붙이고, 붙일 때마다 마음속으로 어른을 떠올린다(이름을 발표하지 않는다). 다 붙인 뒤 활동지 아래의 [학교가 확인해 넣는 신고·상담 번호] 칸을 함께 읽고 채운다. 떠올릴 어른이 적은 학생에게 "담임 선생님, 보건 선생님도 손가락에 넣어도 돼요"라고 말해 준다.',
        exitTicket: [
          { type: 'tool', tool: 'collage', options: { shapes: ['rect', 'circle', 'heart'], sizes: ['s', 'm'] }, prompt: '손가락 조각을 5개 붙여요.', target: { has: [{ shape: 'rect', min: 5 }] }, difficulty: 0.15 },
          { type: 'choice', prompt: '아는 어른이 꾀는 말을 하면?', options: ['비밀로 해요', '믿는 어른께 알려요'], answer: 1, difficulty: 0.1, explain: '아는 사람이어도 꾀는 말은 믿는 어른께 알려요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '내 믿는 어른 다섯 손가락',
        items: [
          { type: 'draw', prompt: '손가락마다 믿는 어른을 그려요.' },
          { type: 'blank', prompt: '선생님과 도움 번호를 써요.', text: '도움 번호: ___', answer: '[학교가 확인해 넣는 신고·상담 번호]' },
        ],
      },
      notes: '콜라주 판은 손 모양을 그리지 못해 긴 네모 조각 = 손가락 하나로 정한다. 믿는 어른의 이름·관계를 발표하게 하지 않는다.',
    }),
  );

  // =====================================================================================================
  // 2학년 · 직업과 말에는 남녀가 없어요
  const JOB = MOD('gender.e12.jobs-no-gender', [2]);
  const TOWN = [{ name: '소방서', icon: 'fire', at: [0, 0] }, { name: '병원', icon: 'hospital', at: [3, 0] }, { name: '식당', icon: 'market', at: [0, 2] }, { name: '학교', icon: 'school', at: [3, 2] }];
  const TOWN_MORE = [{ name: '도서관', icon: 'library', at: [1, 1] }, { name: '공원', icon: 'park', at: [2, 2] }];
  const JOBS = [['소방관', 4], ['간호사', 3], ['요리사', 5], ['선생님', 4], ['과학자', 2]];
  // 말풍선 바꾸기(story fill): 기본 보기 3장, 쉬움 보기 2장
  const SWAP = (prompt, who, ok, bad, bad2, d, more) => ({
    prompt, toolOptions: { mode: 'fill', slots: [{ id: 'f1', who, label: '___' }], cards: [bad, ok, bad2] }, target: { fill: { f1: ok.id } }, difficulty: d,
    levels: { easy: { toolOptions: { cards: [bad, ok] } } }, ...more,
  });
  ALL.push(
    JOB({
      id: 'gender.e12.jobs-no-gender.intro.job-guess', type: 'intro', title: '직업 그림 속 사람 맞히기',
      method: '직업 그림 속 사람 맞히기', tool: 'emotion', minutes: 6,
      levels: { easy: '교사가 그림 두 장(여자 소방관·남자 간호사)을 보여 주며 함께 마음을 고른다.', base: '시연을 보고 그림마다 어떤 마음이 드는지 스스로 말한다.', challenge: '그림 속 사람이 하는 일을 한 마디로 말한다.' },
      intro: {
        teacher: '"불을 끄는 소방관이에요. 아픈 사람을 돌보는 간호사예요. 그림을 보니 어떤 마음이 드나요?" 시연 단추로 그림과 마음이 이어지는 모습을 보인다. "소방관은 남자 직업이에요"라는 말이 나오면 "그림 속 소방관을 보세요. 직업은 남자·여자가 아니라 그 일을 하고 싶은 사람이 해요"라고 답한다.',
        student: '그림 속 소방관과 간호사가 하는 일을 짝에게 말해 보아요.',
        demo: { tool: 'emotion', options: { mode: 'match', slots: [{ id: 'fire', label: '불 끄는 여자 소방관' }, { id: 'nurse', label: '돌보는 남자 간호사' }], cards: ['고마움', '뿌듯함'] }, sequence: [{ match: { fire: '고마움', nurse: '뿌듯함' } }] },
        art: { draw: 'a paper woman firefighter spraying water on a small paper fire and a paper man nurse kindly caring for a child, both smiling', banner: '직업은 누구나', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
      },
    }),
    JOB({
      id: 'gender.e12.jobs-no-gender.intro.job-mime', type: 'intro', title: '직업 흉내 동작',
      method: '직업 흉내 동작', tool: 'timer', minutes: 6,
      levels: { easy: '교사가 직업 두 개(요리사·소방관)를 부르고 함께 흉내 낸다.', base: '직업 세 개를 부르는 차례대로 흉내 낸다.', challenge: '친구의 흉내를 보고 무슨 직업인지 맞힌다.' },
      intro: {
        teacher: '"선생님이 부르는 직업을 흉내 내 볼까요? 요리사! 소방관! 간호사!" 시연 단추로 카드가 부른 차례대로 놓이는 모습을 보이고 반 전체가 흉내 낸다. 모두가 같은 흉내를 낸 것을 함께 보며 "방금 우리 반 모두가 소방관이었어요. 누구나 할 수 있어요"라고 말한다. "간호사는 여자만 해요"라는 말이 나오면 "남자 간호사도, 여자 간호사도 있어요"라고 답한다.',
        student: '선생님이 부르는 직업을 몸으로 흉내 내 보아요.',
        demo: { tool: 'timer', options: { title: '직업 흉내', cards: ['간호사', '요리사', '소방관'] }, sequence: [{ order: ['요리사', '소방관', '간호사'] }] },
        art: { draw: 'paper children of all kinds miming a chef stirring a pot, a firefighter holding a hose and a nurse holding a thermometer', banner: '누구나 할 수 있어요', extra: [{ motif: 'leaf', x: 300, y: 222 }] },
      },
    }),
    JOB({
      id: 'gender.e12.jobs-no-gender.activity.job-graph', type: 'activity', title: '되고 싶은 직업 그래프',
      method: '되고 싶은 직업 그림그래프', tool: 'chart', minutes: 14,
      levels: { easy: '직업 3개의 그림그래프를 채우고, 채운 값이 바로 보인다.', base: '직업 5개의 그림그래프를 채우고 가장 많은 직업을 찾는다.', challenge: '그래프를 읽어 요리사가 몇 명인지 세어 쓴다(값을 숨긴 채로).' },
      activity: {
        title: '가상 반의 꿈 그림그래프', tool: 'chart',
        teacher: '"이웃 반 친구들(가상)이 되고 싶은 직업을 골랐어요. 표를 보고 그림그래프를 채워 볼까요?" 그래프를 다 채운 뒤 "소방관을 고른 친구 중에는 여자도 남자도 있었대요"라고 알려 준다. "과학자는 남자가 해요"라는 학생에게 "과학자 중에도 여자·남자가 다 있어요. 고른 사람이 적은 것은 그 일을 아직 잘 몰라서일 수도 있어요"라고 답한다. 우리 반 학생의 꿈을 조사해 공개하지 않는다.',
        task: '표를 보고 그림그래프를 채우고 읽어요.', levels: { easy: { showValues: true }, base: {}, challenge: { revealAfterCheck: true } },
        items: [
          { prompt: '표를 보고 그림그래프를 채워요.', toolOptions: { type: 'picture', mode: 'build', title: '되고 싶은 직업(가상)', unit: '명', data: JOBS, icons: [{ value: 1, name: '1명' }], icon: 'star' }, target: { build: true }, difficulty: 0.1,
            levels: { easy: { toolOptions: { data: JOBS.slice(0, 3) } } } },
          { prompt: '가장 많은 직업을 골라요.', toolOptions: { type: 'picture', mode: 'read', title: '되고 싶은 직업(가상)', unit: '명', data: JOBS, icons: [{ value: 1, name: '1명' }], icon: 'star', question: '가장 많은 직업은?', choices: ['소방관', '간호사', '요리사', '선생님', '과학자'] }, target: { pick: 2 }, difficulty: 0.15 },
          { prompt: '요리사는 몇 명인지 써요.', toolOptions: { type: 'picture', mode: 'read', title: '되고 싶은 직업(가상)', unit: '명', data: JOBS, icons: [{ value: 1, name: '1명' }], icon: 'star', question: '요리사는 몇 명?' }, target: { value: 5 }, difficulty: 0.2,
            conclude: '되고 싶은 직업은 사람마다 달라요. 직업에는 남녀가 없어요.' },
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '소방관은 누가 될 수 있어요?', options: ['남자만', '누구나'], answer: '누구나' }] },
      notes: '그림그래프 수는 수업용 가상 자료다. 그래프는 직업별 수만 보이고 남녀를 나눠 세지 않는다.',
    }),
    JOB({
      id: 'gender.e12.jobs-no-gender.activity.job-town', type: 'activity', title: '직업 마을 지도',
      method: '직업 마을 지도', tool: 'map', minutes: 13,
      levels: { easy: '핀을 놓으면 그 칸의 이름이 바로 보인다.', base: '일하는 곳 네 곳 가운데 그 일을 하는 곳에 핀을 꽂는다.', challenge: '도서관·공원까지 여섯 곳이 있는 지도에서 꽂고, 그곳에서 일하는 사람을 여자·남자 한 명씩 떠올려 말한다.' },
      activity: {
        title: '일하는 사람 마을 지도', tool: 'map',
        teacher: '"불을 끄는 사람은 어디에서 일할까요?" 핀을 꽂을 때마다 그곳에서 일하는 사람을 함께 말하고, 여자·남자 모두 일한다는 것을 짚는다. "식당 요리사는 엄마들이에요"라는 학생에게 "식당 요리사 중에는 남자도 여자도 많아요"라고 답한다. 칸 지도는 문항마다 핀 하나라 장소마다 문항을 나누었다.',
        task: '그 일을 하는 곳에 핀을 꽂아요.', levels: { easy: { readout: true }, base: {}, challenge: {} },
        items: [
          PIN('불을 끄는 사람이 일하는 곳은?', TOWN, TOWN_MORE, '소방서', 0.1),
          PIN('아픈 사람을 돌보는 곳은?', TOWN, TOWN_MORE, '병원', 0.15),
          PIN('음식을 만드는 사람의 일터는?', TOWN, TOWN_MORE, '식당', 0.15),
          PIN('가르치는 사람이 일하는 곳은?', TOWN, TOWN_MORE, '학교', 0.2, { conclude: '어느 일터에서나 여자도 남자도 일해요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '간호사는 누가 될 수 있어요?', options: ['여자만', '누구나'], answer: '누구나' }] },
      notes: '계획의 "장소마다 사람 둘씩 꽂기"는 칸 지도가 문항마다 핀 하나라 도전 단계에서 말로 떠올리기로 바꾸었다.',
    }),
    JOB({
      id: 'gender.e12.jobs-no-gender.activity.word-swap', type: 'activity', title: '"남자니까" 말 바꾸기',
      method: '"남자니까" 말 바꾸기 이야기', tool: 'story', minutes: 25,
      levels: { easy: '말풍선마다 보기 2장 가운데 바꾼 말을 고른다.', base: '말풍선마다 보기 3장 가운데 바꾼 말을 고르고 역할놀이로 읽는다.', challenge: '보기 3장에서 고르고, 바꾼 말을 짝과 역할을 바꿔 읽는다.' },
      activity: {
        title: '말풍선 바꾸기 이야기', tool: 'story',
        teacher: '"솔이가 넘어져 울어요. 친구가 \'남자니까 울지 마\' 했어요. 이 말을 어떻게 바꾸면 좋을까요?" 말풍선을 고른 뒤 짝과 한 명은 솔이, 한 명은 친구가 되어 바꾼 말로 읽는다. "\'여자니까 조용히\'는 칭찬이에요"라는 학생에게 "조용히 하라는 말을 여자라서 들으면, 신나게 웃고 싶은 친구 마음은 어떨까요?"라고 묻는다. 남자·여자를 정해서 하는 말을 누구나·사람마다로 바꾸면 된다고 짚는다.',
        task: '정해 버리는 말을 존중하는 말로 바꿔 넣어요.', levels: { easy: {}, base: {}, challenge: { shuffle: true } },
        items: [
          SWAP('솔이에게 할 말로 바꿔요.', '친구', C('cry', '누구나 울 수 있어'), C('boy', '남자니까 울지 마'), C('stop', '뚝 그쳐'), 0.1),
          SWAP('하나에게 할 말로 바꿔요.', '친구', C('laugh', '신나게 웃어도 돼'), C('quiet', '여자니까 조용히'), C('shh', '쉿, 시끄러워'), 0.15),
          SWAP('축구하고 싶은 별에게요.', '친구', C('play', '같이 축구하자'), C('girl', '여자가 무슨 축구'), C('watch', '구경만 해'), 0.2),
          SWAP('인형이 좋은 솔에게요.', '친구', C('fine', '네가 좋으면 돼'), C('weird', '남자가 인형?'), C('give', '나 줘'), 0.25, { conclude: '"남자니까·여자니까" 대신 "누구나·사람마다"로 말해요.' }),
        ],
      },
      worksheet: {
        items: [
          { type: 'table', prompt: '바꾼 말을 써요.', columns: ['정해 버리는 말', '바꾼 말'], cells: [['남자니까 울지 마', ''], ['여자니까 조용히 해', '']], answer: '누구나 울 수 있어, 신나게 웃어도 돼' },
          { type: 'draw', prompt: '내가 되고 싶은 모습을 그려요.' },
        ],
      },
    }),
    JOB({
      id: 'gender.e12.jobs-no-gender.wrap.word-sort', type: 'wrap', title: '존중하는 말·정하는 말',
      method: '존중하는 말·정해 버리는 말', tool: 'sortboard', minutes: 6,
      levels: { easy: '교사가 카드를 하나씩 읽어 주고 반 전체가 손으로 ○·×를 그린 뒤 넣는다.', base: '카드 네 장을 스스로 바구니에 나눈다.', challenge: '안돼요 말을 바꾼 말로 고쳐 말한다.' },
      wrap: {
        teacher: '"이 말은 친구를 존중하는 말일까요, 남자·여자로 정해 버리는 말일까요?" 카드를 함께 읽고 나눈다. "여자가 축구?"를 좋아요에 둔 학생에게 "축구를 좋아하는 여자 친구가 이 말을 들으면 어떨까요?"라고 묻는다. 끝에 "꿈에는 남녀가 없어요!"를 다 같이 말한다.',
        exitTicket: [
          SORT_EXIT('말 카드를 나누어요.', ['좋아요', '안돼요'], ['"뭘 좋아해?"', '"같이 하자"'], ['"여자가 축구?"', '"남자가 울어?"']),
          { type: 'choice', prompt: '"여자니까 조용히"는?', options: ['칭찬이에요', '정해 버리는 말이에요'], answer: 1, difficulty: 0.1, explain: '여자라서 조용히 하라는 것은 정해 버리는 말이에요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '직업과 말에는 남녀가 없어요',
        items: [
          { type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '직업은 ___ 가질 수 있어요.', answer: '누구나' },
          { type: 'check', prompt: '내가 쓸 말에 ✓ 해요.', options: ['너는 뭘 좋아해?', '같이 하자', '누구나 할 수 있어'] },
        ],
      },
    }),
    JOB({
      id: 'gender.e12.jobs-no-gender.wrap.dream-song', type: 'wrap', title: '"꿈에는 남녀 없어요" 노래',
      method: '"꿈에는 남녀 없어요" 노래', tool: 'keyboard', minutes: 6,
      levels: { easy: '앞 마디("꿈에는 남녀")만 함께 손뼉으로 친다.', base: '한 줄 노래(두 마디)를 리듬 블록으로 따라 놓는다.', challenge: '가사에 내 꿈 직업을 넣어 바꿔 부른다.' },
      wrap: {
        teacher: '"꿈에는 남녀 없어요!" 노래를 들려준 뒤 리듬 블록을 놓고 손뼉과 함께 부른다. 다 놓은 학생은 "소방관 꿈 누구나" 처럼 내 꿈 직업을 넣어 부른다. 꿈을 말하기 싫은 학생은 넣지 않아도 된다. 출구 2번에서 "남자 직업"을 고른 학생에게 오늘 본 여자 소방관 그림을 다시 보여 준다.',
        exitTicket: [
          RHY_EXIT('노래 리듬을 블록으로 놓아요.', ['q', 'e', 'e', 'h', 'q', 'q', 'h']),
          { type: 'choice', prompt: '소방관은 어떤 직업이에요?', options: ['남자 직업', '누구나 하는 직업'], answer: 1, difficulty: 0.1, explain: '직업에는 남녀가 없어요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '꿈에는 남녀가 없어요',
        items: [
          { type: 'draw', prompt: '내 꿈 직업을 하는 내 모습을 그려요.' },
          { type: 'choice', prompt: '요리사는 누가 해요?', options: ['여자만', '누구나'], answer: '누구나' },
        ],
      },
    }),
  );

  // =====================================================================================================
  // 2학년 · 울어도 괜찮아, 씩씩해도 괜찮아
  const FEEL = MOD('gender.e12.feel-all-ok', [2]);
  const FEEL_R = [C('all', '감정은 누구나 느껴요'), C('boy', '남자는 울면 안 돼요', { why: '슬프면 남자도 울 수 있어요.' }), C('girl', '여자는 화내면 안 돼요', { why: '화난 마음은 여자도 말로 할 수 있어요.' })];
  ALL.push(
    FEEL({
      id: 'gender.e12.feel-all-ok.intro.feeling-faces', type: 'intro', title: '같은 장면 다른 친구 마음',
      method: '같은 장면 다른 친구 마음', tool: 'emotion', minutes: 6,
      levels: { easy: '교사가 마음 카드 두 개(속상함·신남)만 가리키며 함께 고른다.', base: '마음 카드 세 장 가운데 넘어진 두 친구의 마음을 스스로 말한다.', challenge: '두 친구의 마음 크기가 같을지 다를지 말한다.' },
      intro: {
        teacher: '"솔이와 하나가 똑같이 넘어졌어요. 두 친구는 어떤 마음일까요?" 시연 단추로 마음 카드가 바구니에 담기는 모습을 보인다. "솔이는 남자니까 안 아파요"라는 말이 나오면 "넘어지면 누구나 아프고 속상해요. 마음은 남자·여자가 똑같이 느껴요"라고 답한다.',
        student: '똑같이 넘어진 두 친구의 마음을 짝에게 말해 보아요.',
        demo: { tool: 'emotion', options: { mode: 'pick', basket: '두 친구 마음', cards: ['속상함', '신남', '기쁨'], shuffle: false }, sequence: [{ pick: ['속상함'] }] },
        art: { draw: 'a paper boy and a paper girl who both tripped on a playground, sitting with the same sad faces and small tears', banner: '마음은 누구나', extra: [{ motif: 'rain', x: 300, y: 96 }] },
      },
    }),
    FEEL({
      id: 'gender.e12.feel-all-ok.intro.feeling-song', type: 'intro', title: '감정 노래 리듬',
      method: '감정 노래 리듬', tool: 'keyboard', minutes: 6,
      levels: { easy: '앞 마디("기쁠 때 웃고")만 함께 손뼉으로 친다.', base: '노래 한 줄(두 마디)을 손뼉으로 따라 친다.', challenge: '감정 낱말을 바꿔("화날 때 말해요") 부른다.' },
      intro: {
        teacher: '"기쁠 때 웃고, 슬플 때 울어요!" 시연 단추로 리듬 블록이 놓이는 모습을 보이고 웃는 얼굴·우는 얼굴 흉내와 함께 따라 부른다. "남자는 울면 안 돼요"라는 말이 나오면 "노래처럼 슬플 때 우는 건 누구나 할 수 있어요"라고 답한다.',
        student: '"기쁠 때 웃고, 슬플 때 울어요!"를 얼굴 흉내와 함께 불러요.',
        demo: RHY_DEMO(['e', 'e', 'q', 'h', 'e', 'e', 'q', 'h']),
        art: { draw: 'paper children making happy and sad faces while singing together, a cut paper sun and a raindrop above them', banner: '기쁠 때 웃고, 슬플 때 울어요', extra: [{ motif: 'sun', x: 300, y: 96 }] },
      },
    }),
    FEEL({
      id: 'gender.e12.feel-all-ok.activity.feeling-moves', type: 'activity', title: '감정 몸짓 따라 하기',
      method: '감정 몸짓 따라 하기', tool: 'timer', minutes: 14,
      levels: { easy: '몸짓 카드 2장(처음·끝)의 차례만 놓고 따라 한다.', base: '감정마다 몸짓 카드 3장을 차례로 놓고 따라 한다.', challenge: '3장을 놓고 "누구나 할 수 있어요" 점검 칸까지 표시한다.' },
      activity: {
        title: '감정 표현 몸짓 카드', tool: 'timer',
        teacher: '"슬플 때, 화날 때, 무서울 때 어떻게 표현하면 좋을까요?" 카드를 놓은 뒤 반 전체가 몸짓으로 해 본다. 남자 친구가 우는 흉내를 쑥스러워하면 "흉내만 해도 돼요. 슬플 땐 누구나 눈물이 나요"라고 말한다. 화날 때 몸짓에서 "여자는 화내면 안 돼요"라는 학생에게 "화난 마음은 누구나 들어요. 때리지 않고 말로 하면 돼요"라고 답한다.',
        task: '감정 몸짓 카드를 차례로 놓고 따라 해요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          MOVES('슬플 때 몸짓을 차례로 놓아요.', '슬플 때', ['눈물이 나요', '"슬퍼" 말해요', '안아 달래요'], '누구나 할 수 있어요', 0.1),
          MOVES('화날 때 몸짓을 차례로 놓아요.', '화날 때', ['숨 크게 쉬기', '"화났어" 말해요', '잠깐 쉬어요'], '때리지 않고 말했어요', 0.15),
          MOVES('떨릴 때 몸짓을 차례로 놓아요.', '용기 낼 때', ['다리가 떨려요', '숨 쉬어요', '"할 수 있어"'], '용기 몸짓을 했어요', 0.2, { conclude: '감정은 남자·여자 없이 누구나 느끼고 표현해요.' }),
        ],
      },
      worksheet: { items: [{ type: 'check', prompt: '해 본 감정 몸짓에 ✓ 해요.', options: ['슬플 때', '화날 때', '떨릴 때'] }] },
      notes: '계획의 "감정 4개"는 슬픔·화남·용기 세 감정의 몸짓 차례로 했다(기쁨은 도입 노래에서 다룬다). 학생에게 실제 슬펐던 일을 말하게 하지 않는다.',
    }),
    FEEL({
      id: 'gender.e12.feel-all-ok.activity.comfort-choice', type: 'activity', title: '우는 친구에게 갈림길',
      method: '우는 친구에게 갈림길', tool: 'dilemma', minutes: 13,
      levels: { easy: '첫 갈림에서 보기 2개 가운데 한 번만 고른다.', base: '고른 뒤 이어지는 장면에서 한 번 더 고른다(갈림 2번).', challenge: '갈림 2번을 지나 끝에서 까닭 카드 3장 가운데 하나를 고른다.' },
      activity: {
        title: '친구 마음 갈림길', tool: 'dilemma',
        teacher: '"솔이가 넘어져 울어요. 나는 뭐라고 할까요?" 고르기 전에 반 전체가 손을 들어 어느 쪽인지 보인다. "남자가 왜 울어"를 고른 학생에게 "그 말을 들은 솔이는 울음을 참아야 할까요? 마음은 어떨까요?"라고 묻는다. 둘째 장면(화난 하나)과 셋째 장면(무서운 나)에서도 감정은 누구나 느끼고 말로 표현해도 된다고 짚는다.',
        task: '장면마다 할 일을 고르고 결과를 봐요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          DILEMMA('솔이가 울어요. 골라요.', { text: '솔이가 넘어져서 울어요.', motif: 'flower', choices: [
            { id: 'tease', text: '"남자가 왜 울어"', result: '솔이가 더 속상해졌어요.', why: '슬프면 남자도 울 수 있어요.' },
            { id: 'ask', text: '"괜찮아?" 물어요', result: '솔이가 "아파" 해요.', easyEnding: '솔이가 조금 웃었어요.', next: { text: '솔이가 "무릎이 아파" 해요.', choices: [
              { id: 'help', text: '선생님께 같이 가요', result: '보건실에서 약을 발랐어요.', ending: '친구 마음을 알아주고 도왔어요.' },
              { id: 'leave', text: '혼자 두고 놀러 가요', result: '솔이가 혼자 남았어요.', why: '아픈 친구 곁에서 도와줄 수 있어요.' }] } }] },
          ['ask', 'help'], FEEL_R, 'all', 0.1),
          DILEMMA('하나가 화났어요. 골라요.', { text: '하나가 차례를 뺏겨 화가 났어요.', motif: 'flower', choices: [
            { id: 'hush', text: '"여자가 화내면 안 돼"', result: '하나가 더 속상해졌어요.', why: '화난 마음은 여자도 말로 할 수 있어요.' },
            { id: 'listen', text: '"화났구나" 들어 줘요', result: '하나가 "속상해" 해요.', easyEnding: '하나 마음이 조금 풀렸어요.', next: { text: '하나가 "차례를 뺏겼어" 해요.', choices: [
              { id: 'together', text: '같이 선생님께 말해요', result: '차례를 다시 정했어요.', ending: '화난 마음을 말로 풀었어요.' },
              { id: 'ignore', text: '모른 척해요', result: '하나가 혼자 속상해요.', why: '친구 마음을 들어 주면 도울 수 있어요.' }] } }] },
          ['listen', 'together'], FEEL_R, 'all', 0.15),
          DILEMMA('내가 무서워요. 골라요.', { text: '발표 시간에 무서워서 눈물이 나요.', motif: 'house', choices: [
            { id: 'hide', text: '꾹 참고 숨겨요', result: '마음이 더 떨려요.', why: '무서우면 울어도, 말해도 돼요.' },
            { id: 'say', text: '"무서워요" 말해요', result: '선생님이 "말해 줘서 고마워" 하세요.', easyEnding: '선생님이 곁에 와 주셨어요.', next: { text: '선생님이 "같이 숨 쉬어 볼까?" 하세요.', choices: [
              { id: 'breath', text: '같이 숨 쉬어요', result: '마음이 조금 편해졌어요.', ending: '무서운 마음을 말해서 용기가 났어요.' },
              { id: 'shame', text: '부끄러워 도망가요', result: '발표를 못 했어요.', why: '무서운 마음은 부끄러운 게 아니에요.' }] } }] },
          ['say', 'breath'], FEEL_R, 'all', 0.2, { conclude: '울어도, 화나도, 무서워도 괜찮아요. 감정은 누구나 말로 표현해요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '남자 친구가 울면 뭐라고 해요?', options: ['"괜찮아?"', '"남자가 왜 울어"'], answer: '"괜찮아?"' }] },
    }),
    FEEL({
      id: 'gender.e12.feel-all-ok.activity.feeling-jar', type: 'activity', title: '우리 반 감정 병',
      method: '우리 반 감정 병 꾸미기', tool: 'collage', minutes: 13,
      levels: { easy: '병(큰 긴 네모)에 감정 조각 3개를 붙인다.', base: '여러 색 감정 조각 5개를 붙인다.', challenge: '감정 조각 5개를 붙이고, 감정마다 괜찮은 표현을 떠올렸는지 점검한다.' },
      activity: {
        title: '여러 감정 담는 병', tool: 'collage',
        teacher: '"우리 반 모두의 감정을 병에 모아 볼까요? 노랑은 기쁨, 파랑은 슬픔, 빨강은 화남, 초록은 편안함이에요." 판에 큰 긴 네모 병을 붙이고 여러 색 감정 조각을 담는다. "슬픔·화남은 나쁜 감정이에요"라는 학생에게 "나쁜 감정은 없어요. 어떻게 표현하는지가 중요해요"라고 답한다. 감정 색은 정답이 아니라 우리 반 약속이라고 말해 준다.',
        task: '병을 붙이고 여러 색 감정 조각을 담아요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          { prompt: '큰 병과 감정 1개를 붙여요.', toolOptions: { shapes: ['rect', 'circle', 'heart'], sizes: ['m', 'l'] }, target: { has: [{ shape: 'rect', size: 'l', min: 1 }], pieces: { min: 2 } }, difficulty: 0.1 },
          { prompt: '여러 색 감정 5개를 붙여요.', toolOptions: { shapes: ['circle', 'heart', 'star'], colors: ['노랑', '파랑', '빨강', '초록'] }, target: { has: [{ color: '노랑', min: 1 }, { color: '파랑', min: 1 }], pieces: { min: 5 } }, difficulty: 0.15,
            levels: { easy: { prompt: '감정 조각 3개를 붙여요.', target: { pieces: { min: 3 } } } } },
          { prompt: '감정 병을 보며 점검해요.', toolOptions: { shapes: ['circle', 'heart', 'star'] }, target: { selfCheck: ['여러 감정을 담았어요', '감정은 누구나 느껴요'], minPieces: 2 }, difficulty: 0.2,
            levels: { challenge: { prompt: '점검 칸을 모두 표시해요.', target: { selfCheck: ['여러 감정을 담았어요', '감정은 누구나 느껴요', '괜찮은 표현을 떠올렸어요'], minPieces: 2 } } },
            conclude: '우리 반에는 여러 감정이 있어요. 모두 괜찮은 감정이에요.' },
        ],
      },
      worksheet: { items: [{ type: 'draw', prompt: '오늘 내 감정을 색으로 그려요.' }] },
    }),
    FEEL({
      id: 'gender.e12.feel-all-ok.wrap.ok-sort', type: 'wrap', title: '괜찮은 말 나누기',
      method: '괜찮은 말 나누기', tool: 'sortboard', minutes: 6,
      levels: { easy: '교사가 카드를 하나씩 읽어 주고 반 전체가 손으로 ○·×를 그린 뒤 넣는다.', base: '카드 네 장을 스스로 바구니에 나눈다.', challenge: '고쳐요 카드를 괜찮은 말로 바꿔 말한다.' },
      wrap: {
        teacher: '"감정을 표현한 친구에게 하는 말이에요. 좋아요일까요, 고쳐요일까요?" 카드를 함께 읽고 나눈다. "여자가 씩씩?"을 좋아요에 둔 학생에게 "씩씩한 건 여자·남자 모두 멋진 일이에요. 놀라는 말을 들으면 어떨까요?"라고 묻는다. 끝에 "울어도 괜찮아, 씩씩해도 괜찮아!"를 다 같이 말한다.',
        exitTicket: [
          SORT_EXIT('친구에게 할 말을 나눠요.', ['좋아요', '고쳐요'], ['"울어도 돼"', '"화났구나"'], ['"여자가 씩씩?"', '"뚝, 남자잖아"']),
          { type: 'choice', prompt: '여자는 화내면 안 돼요?', options: ['안 돼요', '말로 표현해요'], answer: 1, difficulty: 0.1, explain: '화난 마음은 누구나 말로 표현해요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '울어도 괜찮아, 씩씩해도 괜찮아',
        items: [
          { type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '감정은 ___ 느껴요.', answer: '누구나' },
          { type: 'draw', prompt: '친구 마음을 알아주는 내 모습을 그려요.' },
        ],
      },
    }),
    FEEL({
      id: 'gender.e12.feel-all-ok.wrap.feeling-pattern', type: 'wrap', title: '감정 얼굴 무늬 잇기',
      method: '감정 얼굴 무늬 잇기', tool: 'pattern', minutes: 6,
      levels: { easy: '교사가 노랑(웃음)·파랑(울음)·빨강(화남)을 짚으며 함께 고른다.', base: '되풀이되는 줄을 보고 빈칸에 올 조각을 보기 단추에서 스스로 고른다.', challenge: '고른 뒤 조각마다 그 감정을 표현하는 괜찮은 방법을 말한다.' },
      wrap: {
        teacher: '"노랑 동그라미는 웃는 얼굴, 파랑 하트는 우는 얼굴, 빨강 별은 화난 얼굴이에요. 다음에 올 얼굴은?" 줄을 짚으며 얼굴 흉내를 내고 빈칸에 올 조각을 고른다. 출구 2번에서 "남자는 울면 안 돼요"를 고른 학생에게 도입 노래를 한 번 더 불러 준다.',
        exitTicket: [
          RULEP('다음에 올 얼굴 조각을 골라요.', ['circle:buttercup', 'heart:sky', 'star:rose', 'circle:buttercup', 'heart:sky', null], ['노랑 동그라미', '파랑 하트', '빨강 별'], 2, '빈칸에 올 조각은?'),
          { type: 'choice', prompt: '남자는 울면 안 돼요?', options: ['안 돼요', '울어도 괜찮아요'], answer: 1, difficulty: 0.1, explain: '슬프면 누구나 울 수 있어요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '감정 얼굴',
        items: [
          { type: 'draw', prompt: '웃는 얼굴과 우는 얼굴을 그려요.' },
          { type: 'check', prompt: '누구나 느끼는 감정에 ✓ 해요.', options: ['기쁨', '슬픔', '화남', '무서움'] },
        ],
      },
    }),
  );

  // =====================================================================================================
  // 2학년 · 우리 주변의 여러 가족과 아기가 태어나기까지
  const MANY = MOD('gender.e12.many-families', [2]);
  const RESP2 = ['존중하는 말', '상처 주는 말'];
  const HOMES = [['솔', 2], ['하나', 4], ['별', 3], ['구름', 5], ['바다', 3], ['달', 2]];
  ALL.push(
    MANY({
      id: 'gender.e12.many-families.intro.family-book', type: 'intro', title: '여러 가족 그림책',
      method: '여러 가족 그림책 넘기기', tool: 'story', minutes: 6,
      levels: { easy: '교사가 장면 세 장을 넘기며 읽어 주고 같은 점을 함께 고른다.', base: '장면 네 장을 보고 세 가족의 같은 점을 스스로 고른다.', challenge: '같은 점을 두 가지(함께 밥 먹어요·서로 아껴요) 말한다.' },
      intro: {
        teacher: '"할머니와 사는 곰 가족, 입양으로 가족이 된 토끼 가족, 두 나라 말을 쓰는 다람쥐 가족이 저녁을 먹어요. 세 가족의 같은 점은 무엇일까요?" 장면을 넘겨 읽은 뒤 시연 단추로 같은 점 카드가 바구니에 담기는 모습을 보인다. "엄마·아빠·나만 진짜 가족이에요"라는 말이 나오면 "함께 살며 서로 아끼면 모두 진짜 가족이에요"라고 답한다. 우리 집 가족을 말하게 하지 않는다.',
        student: '세 가족 그림을 보고 같은 점을 하나 찾아 짝에게 말해요.',
        demo: { tool: 'story', options: { mode: 'pick', basket: '세 가족의 같은 점', cards: [C('eat', '함께 밥 먹어요', { motif: 'sun' }), C('face', '얼굴이 같아요'), C('size', '집 크기가 같아요')], shuffle: false }, sequence: [{ pick: ['eat'] }] },
        art: { draw: 'three paper animal families eating dinner at round tables, a bear grandmother with a cub, a rabbit family with an adopted child, and a squirrel family with a flag of two countries', banner: '모두 소중한 가족', extra: [{ motif: 'heart', x: 300, y: 96, color: 'rose' }] },
      },
      notes: '그림 속 동물 가족으로만 이야기한다. 학생의 가족 모습을 묻거나 견주지 않는다.',
    }),
    MANY({
      id: 'gender.e12.many-families.intro.baby-steps-move', type: 'intro', title: '아기 자람 흉내 동작',
      method: '아기 자람 흉내 동작', tool: 'timer', minutes: 6,
      levels: { easy: '교사를 따라 웅크리기 → 걷기 두 동작만 한다.', base: '웅크리기(배 속) → 기어가기 → 걷기 세 동작을 차례로 한다.', challenge: '동작마다 이름("배 속 아기", "기는 아기", "걷는 아기")을 말한다.' },
      intro: {
        teacher: '"아기는 처음에 엄마 배 속에서 아주 작게 웅크리고 있어요. 그다음은요?" 시연 단추로 동작 카드가 놓이는 모습을 보이고 자리에서 웅크리기 → 기어가기 흉내 → 걷기를 한다. "아기는 저절로 생겨요"라는 말이 나오면 "아기는 엄마 배 속에서 오랫동안 자라요. 그동안 가족이 기다리며 준비해요"라고 답한다.',
        student: '웅크리기, 기어가기, 걷기를 차례로 흉내 내 보아요.',
        demo: { tool: 'timer', options: { title: '아기 자람', cards: ['걷기', '웅크리기', '기어가기'] }, sequence: [{ order: ['웅크리기', '기어가기', '걷기'] }] },
        art: { draw: 'paper children curling up small, then crawling, then walking proudly, shown as three steps from left to right', banner: '아기가 자라요', extra: [{ motif: 'sprout', x: 300, y: 222 }] },
      },
      notes: '아기가 생기는 과정은 다루지 않는다(체계도 범위는 배 속에서 자라 태어나기까지와 가족의 준비다). 입양 가족도 아기를 기다리며 준비한다고 말해 준다.',
    }),
    MANY({
      id: 'gender.e12.many-families.activity.respect-words', type: 'activity', title: '가족 존중하는 말',
      method: '가족 존중하는 말 나누기', tool: 'sortboard', minutes: 14,
      levels: { easy: '카드 4장, 틀린 바구니에 넣으면 까닭을 말하고 되돌아온다(장 수가 보인다).', base: '카드 6장을 다 넣은 뒤 확인한다.', challenge: '카드 8장, 비슷해 보이는 물음 카드가 더 섞인다.' },
      activity: {
        title: '가족 말 카드 두 바구니', tool: 'sortboard',
        teacher: '"이 말은 친구 가족을 존중하는 말일까요, 상처 주는 말일까요?" 카드를 함께 읽고 넣는다. "궁금해서 물어본 건데요"라는 학생에게 "궁금해도 친구가 대답하고 싶지 않을 수 있어요. 친구 가족은 친구가 말하고 싶을 때 들어요"라고 답한다. 둘째 문항에서 다른 나라 말·음식을 배우려는 말은 존중하는 말이라고 짚는다.',
        task: '가족에 대한 말 카드를 두 바구니에 나누어요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: { shuffle: true } },
        items: [
          SB2(RESP2, '곰 가족에게 한 말을 나눠요.', ['"우리 집도 좋아"', '"멋진 가족이네"', '"같이 놀자"'], ['"왜 엄마 없어?"', '"너희 집 이상해"', '"가짜 가족이야"'], { a: ['"반가워"'], b: ['"너만 달라"'] }, 0.1),
          SB2(RESP2, '다람쥐 가족에게 한 말이에요.', ['"그 말 알려 줘"', '"같이 먹어 보자"', '"반가워 친구"'], ['"말이 이상해"', '"같이 안 놀아"', '"얼굴이 달라"'], { a: ['"노래 가르쳐 줘"'], b: ['"흉내 내 볼까?"'] }, 0.15),
          SB2(RESP2, '토끼 가족에게 한 말이에요.', ['"소중한 가족"', '"할머니 멋지다"', '"가족은 다 달라"'], ['"왜 할머니랑?"', '"진짜 엄마는?"', '"너희는 가짜"'], { a: ['"사랑이 많네"'], b: ['"불쌍하다"'] }, 0.2, { conclude: '가족의 모습은 여러 가지예요. 친구 가족을 존중하는 말을 해요.' }),
        ],
      },
      worksheet: { items: [{ type: 'table', prompt: '존중하면 ○, 상처 주면 ×를 써요.', columns: ['말', '○ / ×'], cells: [['멋진 가족이네', ''], ['너희 집 이상해', ''], ['가족은 다 달라', '']], answer: '○, ×, ○' }],
        easy: [{ type: 'choice', prompt: '존중하는 말에 ○ 해요.', options: ['멋진 가족이네', '너희 집 이상해'], answer: '멋진 가족이네' }] },
      notes: '상처 주는 말 카드는 그림 속 동물 가족에게 한 말로만 읽는다. 반 친구에게 이런 말을 들은 적 있는지 묻지 않는다.',
    }),
    MANY({
      id: 'gender.e12.many-families.activity.family-graph', type: 'activity', title: '함께 사는 가족 수',
      method: '함께 사는 가족 수 그림그래프', tool: 'chart', minutes: 13,
      levels: { easy: '가상 친구 4명의 그림그래프를 채우고, 채운 값이 바로 보인다.', base: '가상 친구 6명의 그림그래프를 채우고 가장 많은 수를 찾는다.', challenge: '그래프를 읽어 가장 적은 수가 몇 명인지 쓴다(값을 숨긴 채로).' },
      activity: {
        title: '가상 친구 가족 그림그래프', tool: 'chart',
        teacher: '"그림책 속 친구 여섯 명(가상)이 함께 사는 사람 수예요. 그림그래프로 나타내 볼까요?" 그래프를 채운 뒤 "둘이 사는 집도, 다섯이 사는 집도 있어요. 수가 달라도 모두 가족이에요"라고 짚는다. "사람이 많아야 좋은 가족이에요"라는 학생에게 "가족은 사람 수가 아니라 서로 아끼는 마음이 중요해요"라고 답한다. 우리 반 학생의 가족 수를 조사하지 않는다.',
        task: '가상 친구들의 가족 수를 그림그래프로 나타내요.', levels: { easy: { showValues: true }, base: {}, challenge: { revealAfterCheck: true } },
        items: [
          { prompt: '가족 수 표로 그래프를 채워요.', toolOptions: { type: 'picture', mode: 'build', title: '함께 사는 사람 수(가상)', unit: '명', data: HOMES, icons: [{ value: 1, name: '1명' }], icon: 'person' }, target: { build: true }, difficulty: 0.1,
            levels: { easy: { toolOptions: { data: HOMES.slice(0, 4) } } } },
          { prompt: '가장 많은 친구를 골라요.', toolOptions: { type: 'picture', mode: 'read', title: '함께 사는 사람 수(가상)', unit: '명', data: HOMES, icons: [{ value: 1, name: '1명' }], icon: 'person', question: '가장 많은 친구는?', choices: ['솔', '하나', '별', '구름', '바다', '달'] }, target: { pick: 3 }, difficulty: 0.15 },
          { prompt: '가장 적은 수를 써요.', toolOptions: { type: 'picture', mode: 'read', title: '함께 사는 사람 수(가상)', unit: '명', data: HOMES, icons: [{ value: 1, name: '1명' }], icon: 'person', question: '가장 적은 수는 몇 명?' }, target: { value: 2 }, difficulty: 0.2,
            conclude: '함께 사는 사람 수는 달라도 모두 소중한 가족이에요.' },
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '둘이 사는 집도 가족이에요?', options: ['네, 가족이에요', '아니에요'], answer: '네, 가족이에요' }] },
      notes: '그림그래프 수는 그림책 속 가상 친구의 수다. 학생의 실제 가족 수를 세거나 그래프로 만들지 않는다.',
    }),
    MANY({
      id: 'gender.e12.many-families.activity.baby-grows', type: 'activity', title: '아기가 태어나기까지',
      method: '아기가 태어나기까지 차례', tool: 'lifecycle', minutes: 25,
      levels: { easy: '첫 장면이 놓여 있어 남은 두 장만 놓고, 놓으면 바로 맞는지 알려 준다.', base: '장면 세 장을 둥근 판에 차례로 놓고, 가족이 준비하는 물건 세 개를 고른다.', challenge: '틀린 장면이 섞여 있어 빼고 놓으며, 준비 물건을 다섯 개 가운데 고른다.' },
      activity: {
        title: '아기 자람 둥근 판', tool: 'lifecycle',
        teacher: '"아기는 엄마 배 속에서 아주 작게 시작해 점점 커져서 태어나요. 차례대로 놓아 볼까요?" 카드를 놓은 뒤 \'차례대로 따라가 보기\'로 함께 짚는다. "아기는 저절로 생겨요"라는 학생에게 "아기는 배 속에서 오래 자라요. 그동안 가족이 옷과 침대를 마련하며 기다려요"라고 답한다. 둘째 문항에서 입양 가족도 아기를 기다리며 똑같이 준비한다고 말해 준다.',
        task: '아기가 자라는 차례로 놓고, 가족의 준비를 골라요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          ORDER3('아기가 자라는 차례로 놓아요.', [C('tiny', '배 속 작은 아기'), C('big', '배 속 커진 아기'), C('born', '태어난 아기')], C('school', '학교 가는 아기'), 0.1, { toolOptions: { center: '아기가 태어나기까지', cycle: false, cards: [C('born', '태어난 아기'), C('tiny', '배 속 작은 아기'), C('big', '배 속 커진 아기')], slots: 3 } }),
          { prompt: '가족이 준비하는 것을 골라요.', toolOptions: { mode: 'pick', basket: '아기 맞이 준비', cards: [C('cloth', '아기 옷'), C('candy', '매운 과자'), C('bed', '작은 침대'), C('diaper', '기저귀')] }, target: { pick: ['cloth', 'bed', 'diaper'] }, difficulty: 0.15,
            levels: { challenge: { prompt: '준비하는 것을 골라요(5장).', toolOptions: { cards: [C('cloth', '아기 옷'), C('candy', '매운 과자'), C('bed', '작은 침대'), C('toy', '딸랑이'), C('diaper', '기저귀')] }, target: { pick: ['cloth', 'bed', 'toy', 'diaper'] } } } },
          ORDER3('태어난 뒤 자라는 차례예요.', [C('lie', '누워 있어요'), C('crawl', '기어가요'), C('walk', '걸어요')], C('drive', '운전해요'), 0.2, { toolOptions: { center: '태어난 뒤 자라요', cycle: false, cards: [C('walk', '걸어요'), C('lie', '누워 있어요'), C('crawl', '기어가요')], slots: 3 }, conclude: '아기는 배 속에서 자라 태어나요. 가족은 기다리며 함께 준비해요.' }),
        ],
      },
      worksheet: {
        items: [
          { type: 'check', prompt: '가족이 준비하는 것에 ✓ 해요.', options: ['아기 옷', '작은 침대', '기저귀'] },
          { type: 'draw', prompt: '아기를 맞이하는 가족을 그려요.' },
        ],
      },
      notes: '아기가 생기는 과정은 다루지 않는다. 배 속에서 자라는 모습은 "작아요 → 커져요 → 태어나요"까지만 말한다(사람 확인 목록).',
    }),
    MANY({
      id: 'gender.e12.many-families.wrap.family-heart', type: 'wrap', title: '모두 소중한 가족 하트',
      method: '모두 소중한 가족 하트', tool: 'collage', minutes: 6,
      levels: { easy: '교사와 함께 큰 하트 1개와 가족 동그라미 2개를 붙인다.', base: '큰 하트 안에 여러 가족 동그라미를 붙인다.', challenge: '하트 둘레에 존중하는 말을 활동지에 쓴다.' },
      wrap: {
        teacher: '"큰 하트 안에 여러 모습의 가족을 모아 볼까요?" 판에 큰 하트를 붙이고, 그 안에 동그라미 조각을 붙이며 오늘 본 곰·토끼·다람쥐 가족을 떠올린다. 출구 2번에서 "엄마·아빠·나만 가족"을 고른 학생에게 그림책 장면을 다시 보여 준다. 끝에 "모든 가족은 소중해요"를 다 같이 말한다.',
        exitTicket: [
          { type: 'tool', tool: 'collage', options: { shapes: ['heart', 'circle', 'star'], sizes: ['s', 'm', 'l'] }, prompt: '큰 하트와 가족을 붙여요.', target: { has: [{ shape: 'heart', size: 'l', min: 1 }, { shape: 'circle', min: 2 }] }, difficulty: 0.15 },
          { type: 'choice', prompt: '진짜 가족은 누구예요?', options: ['엄마·아빠·나만', '서로 아끼는 모든 가족'], answer: 1, difficulty: 0.1, explain: '함께 살며 서로 아끼면 모두 가족이에요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '우리 주변의 여러 가족',
        items: [
          { type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '모든 가족은 ___.', answer: '소중해요' },
          { type: 'draw', prompt: '친구 가족에게 할 고운 말을 그려요.' },
        ],
      },
    }),
    MANY({
      id: 'gender.e12.many-families.wrap.welcome-song', type: 'wrap', title: '"환영해 아가야" 노래',
      method: '"환영해 아가야" 노래', tool: 'keyboard', minutes: 6,
      levels: { easy: '앞 마디("환영해 아가야")만 함께 손뼉으로 친다.', base: '한 줄 노래(두 마디)를 리듬 블록으로 따라 놓는다.', challenge: '가사에 아기를 맞이하는 가족(할머니·형 등)을 넣어 부른다.' },
      wrap: {
        teacher: '"환영해 아가야, 우리 모두 기다렸어!" 노래를 들려준 뒤 리듬 블록을 놓고 아기를 안는 흉내와 함께 부른다. 다 놓은 학생은 가사에 맞이하는 가족을 넣어 부른다. 출구 2번에서 "저절로 생겨요"를 고른 학생에게 오늘 놓은 둥근 판을 다시 보여 준다.',
        exitTicket: [
          RHY_EXIT('노래 리듬을 블록으로 놓아요.', ['q', 'q', 'h', 'e', 'e', 'e', 'e', 'h']),
          { type: 'choice', prompt: '아기는 어떻게 태어나요?', options: ['저절로 생겨요', '배 속에서 자라요'], answer: 1, difficulty: 0.1, explain: '아기는 엄마 배 속에서 자라 태어나요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '환영해 아가야',
        items: [
          { type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '생명은 ___.', answer: '소중해요' },
          { type: 'check', prompt: '아기를 위해 할 수 있는 일에 ✓ 해요.', options: ['조용히 해 주기', '살살 만지기', '노래 불러 주기'] },
        ],
      },
    }),
  );

  // =====================================================================================================
  // 2학년 · 가족 다툼과 폭력은 달라요 (가정폭력 예방 — 모든 장면은 가상의 곰 가족)
  const FIGHT = MOD('gender.e12.fight-vs-violence', [2]);
  const FV2 = ['다툼', '폭력'];
  const FIGHT_R = [C('help', '무서운 일은 도움 받아요'), C('home', '집안 일은 비밀이에요', { why: '무서운 일은 집안 일이어도 믿는 어른께 말해요.' }), C('fam', '가족끼리는 원래 그래요', { why: '때리는 것은 가족이어도 폭력이에요.' })];
  ALL.push(
    FIGHT({
      id: 'gender.e12.fight-vs-violence.intro.two-scenes', type: 'intro', title: '다툼·폭력 장면 마음',
      method: '다툼 장면·폭력 장면 마음', tool: 'emotion', minutes: 6,
      levels: { easy: '교사가 장면 두 개를 읽어 주고 마음을 함께 고른다.', base: '시연을 보고 장면마다 아기 곰의 마음을 스스로 말한다.', challenge: '두 장면이 무엇이 다른지(말로 해요·던지고 때려요) 말한다.' },
      intro: {
        teacher: '"곰 가족이 말로 다투다가 \'미안해\' 하고 화해했어요. 다른 날에는 물건을 던졌어요. 아기 곰은 어떤 마음일까요?" 시연 단추로 장면과 마음이 이어지는 모습을 보인다. "가족끼리 때리는 것도 다툼이에요"라는 말이 나오면 "말로 하는 건 다툼이에요. 때리거나 던지거나 겁주는 건 폭력이에요. 폭력은 가족이어도 안 돼요"라고 답한다.',
        student: '두 장면 속 아기 곰의 마음을 짝에게 말해 보아요.',
        demo: { tool: 'emotion', options: { mode: 'match', slots: [{ id: 'talk', label: '말로 다투고 화해' }, { id: 'throw', label: '물건을 던져요' }], cards: ['편안함', '무서움'] }, sequence: [{ match: { talk: '편안함', throw: '무서움' } }] },
        art: { draw: 'on the left two paper bears talking and then shaking hands, on the right a paper baby bear hiding behind a sofa as a cushion flies through the air, nobody is hit', banner: '다툼과 폭력은 달라요', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
      },
      notes: '장면은 가상의 곰 가족 일로만, 때리는 모습은 그리지 않는다. 학생의 집 이야기를 묻지 않는다. 걱정되는 말을 꺼내는 학생은 캐묻지 않고 학교 대응 절차를 따른다.',
    }),
    FIGHT({
      id: 'gender.e12.fight-vs-violence.intro.safe-song', type: 'intro', title: '"무서우면 말해요" 노래',
      method: '"무서우면 말해요" 노래', tool: 'keyboard', minutes: 6,
      levels: { easy: '앞 마디("무서운 일 있으면")만 함께 손뼉으로 친다.', base: '노래 한 줄(두 마디)을 손뼉으로 따라 친다.', challenge: '가사의 "어른께"를 "선생님께"처럼 믿는 어른으로 바꿔 부른다.' },
      intro: {
        teacher: '"무서운 일 있으면, 어른께 말해요!" 시연 단추로 리듬 블록이 놓이는 모습을 보이고 반 전체가 손뼉과 함께 따라 부른다. "집안 일은 밖에 말하면 안 돼요"라는 말이 나오면 "무서운 일은 집안 일이어도 믿는 어른께 말해도 돼요. 말하면 도움을 받을 수 있어요"라고 답한다.',
        student: '"무서운 일 있으면, 어른께 말해요!"를 손뼉 치며 따라 불러요.',
        demo: RHY_DEMO(['e', 'e', 'e', 'e', 'q', 'q', 'q', 'q', 'q', 'q']),
        art: { draw: 'paper children singing with hands cupped around their mouths, a paper teacher kneeling to listen kindly', banner: '무서우면 말해요', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
      },
    }),
    FIGHT({
      id: 'gender.e12.fight-vs-violence.activity.fight-or-violence', type: 'activity', title: '다툼·폭력 나누기',
      method: '다툼·폭력 나누기', tool: 'sortboard', minutes: 14,
      levels: { easy: '카드 4장, 틀린 바구니에 넣으면 까닭을 말하고 되돌아온다(장 수가 보인다).', base: '카드 6장을 다 넣은 뒤 확인한다.', challenge: '카드 8장, 헷갈리는 카드가 더 섞이고, 폭력 카드마다 "어른께 알려요"를 말한다.' },
      activity: {
        title: '곰 가족 행동 두 바구니', tool: 'sortboard',
        teacher: '"이 행동은 다툼일까요, 폭력일까요?" 카드를 함께 읽고 넣는다. 다툼은 말로 다르게 생각하는 것이라 화해할 수 있고, 폭력은 때리기·던지기·겁주기처럼 몸이나 마음을 아프게 하는 것이라고 정리한다. "형제끼리 때리는 건 장난이에요"라는 학생에게 "아프게 때리면 형제여도 폭력이에요. 무서우면 어른께 알려요"라고 답한다. 폭력 카드를 넣을 때마다 "어른께 알려요"를 함께 말한다.',
        task: '곰 가족 행동 카드를 다툼·폭력 바구니에 나누어요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: { shuffle: true } },
        items: [
          SB2(FV2, '곰 가족 행동을 나누어요.', ['말로 다투기', '"내 차례야!"', '토라지기'], ['때리기', '밀치기', '물건 던지기'], { a: ['생각이 달라요'], b: ['발로 차기'] }, 0.1),
          SB2(FV2, '형제 곰 행동을 나누어요.', ['"싫어" 말다툼', '삐져서 말 안 함', '장난감 다툼'], ['머리 잡기', '"때린다" 겁주기', '꼬집기'], { a: ['큰 소리로 우기기'], b: ['문 잠가 가두기'] }, 0.15),
          SB2(FV2, '어른 곰 행동을 나누어요.', ['서로 생각 말하기', '"미안해" 화해', '같이 정하기'], ['계속 때리기', '다치게 하기', '무섭게 겁주기'], { a: ['차례 정하기'], b: ['물건 부수기'] }, 0.2, { conclude: '말로 하는 다툼은 화해할 수 있어요. 폭력은 가족이어도 안 돼요. 어른께 알려요.' }),
        ],
      },
      worksheet: { items: [{ type: 'table', prompt: '다툼이면 ○, 폭력이면 △를 써요.', columns: ['행동', '○ / △'], cells: [['말로 다투기', ''], ['때리기', ''], ['물건 던지기', '']], answer: '○, △, △' }],
        easy: [{ type: 'choice', prompt: '폭력에 ○ 해요.', options: ['때리기', '말로 다투기'], answer: '때리기' }] },
      notes: '모든 카드는 가상의 곰 가족 이야기로 읽는다. "다툼"은 좋은 일이라는 뜻이 아니라 말로 풀 수 있는 일이라는 뜻임을 짚는다.',
    }),
    FIGHT({
      id: 'gender.e12.fight-vs-violence.activity.bear-cub-choice', type: 'activity', title: '아기 곰은 어떻게 할까',
      method: '아기 곰은 어떻게 할까', tool: 'dilemma', minutes: 13,
      levels: { easy: '첫 갈림에서 보기 2개 가운데 한 번만 고른다.', base: '고른 뒤 이어지는 장면에서 한 번 더 고른다(갈림 2번).', challenge: '갈림 2번을 지나 끝에서 까닭 카드 3장 가운데 하나를 고른다.' },
      activity: {
        title: '무서운 일이 있은 아기 곰', tool: 'dilemma',
        teacher: '"아기 곰이 집에서 무서운 일이 있었어요. 숨길까요, 선생님께 말할까요?" 고르기 전에 반 전체가 손을 들어 어느 쪽인지 보인다. "집안 일은 밖에 말하면 안 돼요"라는 학생에게 "무서운 일은 말해도 돼요. 선생님과 보건 선생님은 아기 곰을 지키려고 들어요"라고 답한다. 셋째 장면에서 친구가 털어놓으면 함께 어른께 가 줄 수 있다고 짚는다.',
        task: '장면마다 할 일을 고르고 결과를 봐요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          DILEMMA('무서운 일이 있었어요. 골라요.', { text: '아기 곰이 집에서 무서운 일이 있었어요.', motif: 'house', choices: [
            { id: 'hide', text: '숨겨요', result: '아기 곰이 혼자 무서워해요.', why: '무서운 일은 숨기지 않고 믿는 어른께 말해요.' },
            { id: 'tell', text: '선생님께 말해요', result: '선생님이 "말해 줘서 고마워" 하셨어요.', easyEnding: '선생님이 아기 곰을 도와주셨어요.', next: { text: '선생님이 "보건 선생님과 함께 도울게" 하세요.', choices: [
              { id: 'go', text: '보건실에 같이 가요', result: '두 선생님이 함께 이야기를 들어 주셨어요.', ending: '말해서 도움을 받았어요.' },
              { id: 'no', text: '"괜찮아요" 하고 가요', result: '도움을 받지 못했어요.', why: '도와주겠다고 하면 함께 가요.' }] } }] },
          ['tell', 'go'], FIGHT_R, 'help', 0.1),
          DILEMMA('비밀이라고 생각해요. 골라요.', { text: '아기 곰이 "집안 일은 비밀"이라고 생각해요.', motif: 'house', choices: [
            { id: 'silent', text: '아무에게도 안 말해요', result: '무서운 일이 계속돼요.', why: '무서운 일은 집안 일이어도 말해도 돼요.' },
            { id: 'trust', text: '믿는 어른께 말해요', result: '담임 선생님이 들어 주셨어요.', easyEnding: '선생님이 "네 잘못이 아니야" 하셨어요.', next: { text: '선생님이 "네 잘못이 아니야" 하세요.', choices: [
              { id: 'relief', text: '마음을 놓아요', result: '마음이 조금 가벼워졌어요.', ending: '말한 것은 잘한 일이에요.' },
              { id: 'guilt', text: '"제 탓이에요" 해요', result: '마음이 무거워요.', why: '폭력은 아기 곰 잘못이 아니에요.' }] } }] },
          ['trust', 'relief'], FIGHT_R, 'help', 0.15),
          DILEMMA('친구가 털어놓아요. 골라요.', { text: '친구 곰이 "형이 자꾸 때려" 해요.', motif: 'flower', choices: [
            { id: 'joke', text: '"형제는 원래 그래"', result: '친구가 고개를 숙였어요.', why: '아프게 때리는 건 형제여도 폭력이에요.' },
            { id: 'tellt', text: '"선생님께 말하자"', result: '친구가 망설여요.', easyEnding: '선생님이 친구를 도와주셨어요.', next: { text: '친구가 "혼자는 무서워" 해요.', choices: [
              { id: 'with', text: '같이 가 줘요', result: '선생님이 친구 이야기를 들어 주셨어요.', ending: '친구와 함께 도움을 받았어요.' },
              { id: 'later', text: '"나중에 해" 해요', result: '친구가 혼자 남았어요.', why: '무서워하는 친구와 함께 가 줄 수 있어요.' }] } }] },
          ['tellt', 'with'], FIGHT_R, 'help', 0.2, { conclude: '무서운 일은 숨기지 않고 믿는 어른께 알려요. 친구와 함께 가도 돼요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '집안 일이라 말하면 안 돼요?', options: ['말하면 안 돼요', '무서우면 말해요'], answer: '무서우면 말해요' }] },
      notes: '"무서운 일"이 무엇인지 자세히 그리거나 말하지 않는다. 장면은 곰 가족의 일로만 이야기한다.',
    }),
    FIGHT({
      id: 'gender.e12.fight-vs-violence.activity.help-route-map', type: 'activity', title: '도움 받을 곳 지도',
      method: '집·학교·동네 도움 지도', tool: 'map', minutes: 25,
      levels: { easy: '핀을 놓으면 그 칸의 이름이 바로 보인다.', base: '학교 안 네 곳 가운데 도움 받을 곳에 핀을 꽂는다.', challenge: '운동장·급식실까지 여섯 곳이 있는 지도에서 꽂고, 장소마다 할 말을 짝과 말한다.' },
      activity: {
        title: '학교 안 도움 받을 곳 지도', tool: 'map',
        teacher: '"무서운 일이 있을 때 학교에서 도움 받을 곳은 어디일까요?" 핀을 꽂을 때마다 그곳에 계신 어른을 함께 말한다. 끝나면 활동지의 [학교가 확인해 넣는 신고·상담 번호] 칸을 선생님과 함께 읽고 채운다. "선생님이 바쁘시면 안 말해요"라는 학생에게 "한 분이 바쁘시면 다른 선생님께 가요. 교무실·보건실·도서실에도 선생님이 계셔요"라고 답한다.',
        task: '도움 받을 곳에 핀을 꽂아요.', levels: { easy: { readout: true }, base: {}, challenge: {} },
        items: [
          PIN('이야기를 들어 줄 담임 선생님은?', SAFE, SAFE_MORE, '교실', 0.1),
          PIN('다친 곳을 돌봐 줄 곳은?', SAFE, SAFE_MORE, '보건실', 0.15),
          PIN('사서 선생님이 계신 곳은?', SAFE, SAFE_MORE, '도서실', 0.15),
          PIN('담임 선생님이 안 계시면요?', SAFE, SAFE_MORE, '교무실', 0.2, { conclude: '학교 곳곳에 도와줄 어른이 계셔요. 무서우면 찾아가 말해요.' }),
        ],
      },
      worksheet: {
        items: [
          { type: 'check', prompt: '도움 받을 어른에 ✓ 해요.', options: ['담임 선생님', '보건 선생님', '사서 선생님'] },
          { type: 'blank', prompt: '선생님과 도움 번호를 써요.', text: '도움 번호: ___', answer: '[학교가 확인해 넣는 신고·상담 번호]' },
        ],
      },
      notes: '계획의 지구대·이웃 어른은 뺐다(이 주제 concepts 의 도움 받을 곳은 믿는 어른이고, 집에서 생긴 일을 다루므로 학교 안 자리만 둔다). 자리 배치는 우리 학교대로 이야기한다.',
    }),
    FIGHT({
      id: 'gender.e12.fight-vs-violence.wrap.thank-story', type: 'wrap', title: '"알려 줘서 고마워" 말풍선',
      method: '"알려 줘서 고마워" 말풍선', tool: 'story', minutes: 6,
      levels: { easy: '교사가 말 카드 두 장만 읽어 주고 함께 고른다.', base: '말 카드 세 장 가운데 선생님이 할 말을 고른다.', challenge: '고른 뒤 아기 곰이 할 대답도 짝과 지어 말한다.' },
      wrap: {
        teacher: '"아기 곰이 용기 내어 선생님께 알렸어요. 선생님은 뭐라고 하실까요?" 말 카드를 함께 읽고 고른 뒤 반 전체가 선생님 말을 따라 말한다. "가족 일은 몰라"를 고른 학생에게 "그러면 아기 곰은 누구에게 도움을 받을까요?"라고 묻는다. 끝에 "알려 줘서 고마워, 네 잘못이 아니야"를 한 번 더 말한다.',
        exitTicket: [
          FILL('선생님 말을 골라요.', '선생님', '알려 줘서 고마워. ___', [C('nf', '네 잘못이 아니야'), C('fam', '가족 일은 몰라'), C('hush', '말하지 마')], 'nf'),
          { type: 'choice', prompt: '가족끼리 때리는 것은?', options: ['다툼이에요', '폭력이에요'], answer: 1, difficulty: 0.1, explain: '때리는 것은 가족이어도 폭력이에요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '가족 다툼과 폭력은 달라요',
        items: [
          { type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '때리는 것은 가족이어도 ___이에요.', answer: '폭력' },
          { type: 'draw', prompt: '도와줄 어른을 그려요.' },
        ],
      },
    }),
    FIGHT({
      id: 'gender.e12.fight-vs-violence.wrap.breathe-check', type: 'wrap', title: '마음 숨쉬기와 점검',
      method: '마음 숨쉬기와 점검', tool: 'timer', minutes: 6,
      levels: { easy: '교사가 점검 칸 하나("말해도 돼요")만 읽어 주고 함께 표시한다.', base: '숨쉬기 세 번 뒤 점검 칸을 스스로 읽고 모두 표시한다.', challenge: '표시한 칸 하나를 짝에게 말로 설명한다.' },
      wrap: {
        teacher: '"천천히 숨을 세 번 쉬어 봐요. 코로 들이쉬고, 입으로 후—" 반 전체가 숨쉬기를 한 뒤 점검 칸을 함께 읽고 표시한다. 출구 2번에서 "내 잘못이에요"를 고른 학생에게 "폭력은 맞은 사람 잘못이 아니에요"라고 말해 준다. 끝에 "무서우면 말해요!"를 다 같이 말한다.',
        exitTicket: [
          SELF('마음 숨쉬기 뒤 점검', ['숨을 세 번 쉬었어요', '무서우면 말해요', '내 잘못이 아니에요']),
          { type: 'choice', prompt: '집에서 맞으면 누구 잘못?', options: ['내 잘못이에요', '내 잘못이 아니에요'], answer: 1, difficulty: 0.1, explain: '폭력은 맞은 아이 잘못이 아니에요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '무서우면 말해요',
        items: [
          { type: 'check', prompt: '오늘 배운 약속에 ✓ 해요.', options: ['폭력은 가족이어도 안 돼요', '무서우면 믿는 어른께 말해요', '내 잘못이 아니에요'] },
          { type: 'draw', prompt: '편안한 마음을 날씨로 그려요.' },
        ],
      },
    }),
  );

  PaperLessons.registerModules(ALL);
})();
