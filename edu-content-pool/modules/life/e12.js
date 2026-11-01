/* 창체 법정교육 생명존중 — 초1-2 모듈 내용(edu-module.v1). 형식·작성 규칙: MODULES_BUILD.md, 계획: framework/mandatory.json 의 life 초1-2.
 * 근거: research-mandatory §1 생명존중 교육(연 6시간 이상), §2 생명존중 초: 감정 알아차리기 · 도움 요청 · 생명의 소중함.
 *   이 영역 추가 지침: framework/BRIEF_LIFE.md(안전한 소통 원칙).
 * 초1-2 기준: 소리로 읽어 주는 짧은 문항, 카드 6자 안팎, 좋아요/안돼요 고르기·따라 하기·노래·구호·역할놀이.
 * 주제 6개(1학년 3 · 2학년 3) × 도입 2 · 활동 4 · 정리 2 = 48모듈. 장면·인물은 직접 지은 가상 인물이다(동물 인물·가명 '나리'·'바다').
 *
 * 이 영역에서 늘 지키는 틀(모든 모듈):
 *   - 초1-2 에서는 위기·죽음·자해를 다루지 않는다. 마음 이름 붙이기, 몸으로 마음 달래기, 도와줄 어른, 생명의 소중함, 친구 마음 살피기, 나를 아끼기만 다룬다.
 *     그런 낱말·장면·그림을 학생 화면·교사 발문·그림 묘사(art.draw) 어디에도 쓰지 않는다.
 *   - 학생에게 자기 마음 상태·힘든 일·겪은 일을 묻거나 채점하지 않는다. 채점 문항은 모두 그림 속 동물·가명 인물의 일이다.
 *     내 마음을 고르는 칸은 정답이 없는 척도(level: 'any')·스스로 점검·MOOD 뿐이고, 활동지는 걷지 않는 '혼자 보기' 칸으로 둔다.
 *   - 모든 마음은 괜찮고, 힘든 마음은 말하면 가벼워지며, 어른은 도와주려고 기다린다 — 긍정 메시지 중심. 겁주기 금지.
 *   - 친구가 계속 슬퍼하거나 다쳤으면 혼자 해결하지 않고 어른께 함께 간다. "말하지 마" 하는 걱정되는 비밀도 어른께 말한다.
 *   - 도움 받을 곳은 체계도 concepts 의 것만: 믿을 수 있는 어른(담임·보건·상담 선생님·보호자), 교실·보건실·상담실·교무실·집.
 *     전화번호는 초1-2 체계도 concepts 에 없어 쓰지 않는다(학교가 필요하면 '[학교가 확인해 넣는 상담 번호]' 자리로 교사가 알린다).
 *   - 수업 중 걱정되는 말이나 모습을 보이는 학생이 있으면 그 자리에서 캐묻지 않고 "말해 줘서 고마워"로 받은 뒤
 *     학교 위기관리 절차(상담교사·관리자 연계)를 따른다(모듈 notes 에 되풀이).
 *
 * 수치·법 조항은 학생 화면에 쓰지 않는다. 그래프 수는 수업용 가상 자료, 타이머 초·박 수는 '우리 반 약속'이다.
 *
 * 사람 확인: (근거 파일에는 '감정 알아차리기·도움 요청·생명의 소중함' 항목 제목만 있어 일반 사회정서·생명존중 교육 내용으로 쓴 문장 — 확인처를 함께 적는다)
 *   - feel-names 전체: 기쁨·슬픔·화남·무서움 네 마음과 '모든 마음은 괜찮다', 마음 크기가 사람마다 다를 수 있다 — 교육부 학생정신건강(사회정서학습) 자료.
 *   - feel-names.activity.body-signal: 화나면 얼굴·목이 뜨겁고 주먹(손)에 힘이 들어감, 무서우면 가슴이 콩닥, 기쁘면 가슴이 따뜻 — 마음이 몸에 나타나는 모습은
 *     사람마다 다르다는 전제로 그림 속 곰의 말로만 썼다 — 교육부 학생정신건강 자료·중앙자살예방센터(아동 정서 교육 자료).
 *   - calm-body 전체: 풍선 숨쉬기(4박 들이쉬기·4박 내쉬기는 우리 반 약속 값), 몸 쭉 펴기(20초는 우리 반 약속), 물 마시기, 잠깐 멈추기, 마음 쉼터 —
 *     체계도 source 가 '근거 약함: 진정 방법은 일반 지식'이라고 밝힌 부분 — 교육부 학생정신건강 자료·보건복지부 정신건강 자료.
 *   - help-adult 전체·my-good.wrap.help-reminder: 믿을 수 있는 어른에게 "도와주세요"로 말하기, 학교 안 담임·보건·상담 선생님 —
 *     한국생명존중희망재단 생명지킴이(보고·듣고·말하기) 아동용 자료·교육부 학생정신건강 자료. 학교 배치(교실·보건실·상담실·교무실)는 학교마다 다르다.
 *   - friend-heart 전체: 표정 읽기, "괜찮아?" 먼저 묻기, 곁에 있기, 다쳤거나 계속 울면 어른께 함께 가기, 걱정되는 비밀은 어른께 —
 *     한국생명존중희망재단 생명지킴이(보고·듣고·말하기) 자료를 초1-2 말로 줄였다.
 *   - precious-life 전체: 씨→싹→꽃→열매 차례, 강낭콩 키 그림그래프(가상 자료), 작은 생명도 소중히 대하기 — 교육부 생명존중 교육 자료.
 *   - my-good 전체: 나의 좋은 점·나를 아끼는 사람·나에게 하는 다정한 말(자기 존중), 몸 아끼기(손 씻기·밥·잠) — 교육부 학생정신건강(사회정서학습) 자료.
 */
(function () {
  const MOD = (topic, grades) => (o) => Object.assign({ schema: 'edu-module.v1', domain: 'life', band: '초1-2', topic, grades }, o);
  const MOOD = { type: 'mood', prompt: '오늘 공부를 마친 내 마음은 어떤가요?' };
  const cut = (p) => p.replace(/\.$/, '');
  const C = (id, text, more) => Object.assign({ id, text }, more);
  const idOf = (c) => (typeof c === 'string' ? c : c.id);
  const ids = (a) => a.map(idOf);
  const BLOCKS = ['q', 'e', 'h', 'qr'];
  const CRISIS = '수업 중 걱정되는 말이나 모습을 보이는 학생이 있으면 그 자리에서 캐묻지 않고 "말해 줘서 고마워"로 받은 뒤 학교 위기관리 절차(상담교사·관리자 연계)를 따른다.';

  // 두 바구니 나누기(sortboard 글 카드): 기본 6장, 쉬움 4장, 도전 헷갈리는 카드 2장을 more 로 더함(hardTo 1 = 둘째 바구니, 0 = 첫째, null = 함정)
  const SB2 = (slots, prompt, ok, no, hard, hardTo, d, more) => {
    const S = (a, b) => ({ [slots[0]]: ids(a), [slots[1]]: ids(b) });
    const hardTarget = hardTo === 1 ? S(ok, [...no, ...hard]) : hardTo === 0 ? S([...ok, ...hard], no) : S(ok, no);
    return {
      prompt, toolOptions: { slots, cards: [ok[0], no[0], ok[1], no[1], ok[2], no[2]] }, target: { sort: S(ok, no) }, difficulty: d,
      levels: {
        easy: { prompt: `${cut(prompt)}(4장).`, toolOptions: { cards: [ok[0], no[0], ok[1], no[1]] }, target: { sort: S(ok.slice(0, 2), no.slice(0, 2)) } },
        challenge: { prompt: `${cut(prompt)}(8장).`, toolOptions: { more: hard }, target: { sort: hardTarget } },
      },
      ...more,
    };
  };
  // 좋아요/안돼요 나누기(emotion sort, 카드 뒤에 결과): 기본 5장, 쉬움 3장, 도전 '대신 할 일' 고르기(branch)
  const OKNO = ['좋아요', '안돼요'];
  const OKSORT = (prompt, ok, no, swap, d, more) => ({
    prompt, toolOptions: { mode: 'sort', slots: OKNO, cards: [ok[0], no[0], ok[1], no[1], ok[2]] }, target: { sort: { 좋아요: ids(ok), 안돼요: ids(no) } }, difficulty: d,
    levels: {
      easy: { prompt: `${cut(prompt)}(3장).`, toolOptions: { cards: [ok[0], no[0], ok[1]] }, target: { sort: { 좋아요: ids(ok.slice(0, 2)), 안돼요: ids(no.slice(0, 1)) } } },
      challenge: { prompt: swap.prompt, toolOptions: { mode: 'branch', situation: swap.situation, choices: swap.choices }, target: { choice: swap.answer } },
    },
    ...more,
  });
  // 차례 놓기(story·timeline·lifecycle order): 기본 3장, 쉬움 첫 장이 놓여 있음, 도전 틀린 장 1장이 섞여 빼고 놓음
  const ORDER3 = (prompt, cards, wrong, d, more) => {
    const i = ids(cards);
    return {
      prompt, toolOptions: { mode: 'order', slots: ['먼저', '다음', '끝'], cards: [cards[2], cards[0], cards[1]] }, target: { order: i }, difficulty: d,
      levels: { easy: { state: { at: { [i[0]]: 0, [i[1]]: null, [i[2]]: null } } }, challenge: { toolOptions: { cards: [cards[2], wrong, cards[0], cards[1]] } } },
      ...more,
    };
  };
  // 순서 카드(timer order): 기본 3장, 쉬움 앞 2장
  const STEPS = (prompt, title, cards, d, more) => ({
    prompt, toolOptions: { title, cards: [cards[2], cards[0], cards[1]] }, target: { order: cards }, difficulty: d,
    levels: { easy: { prompt: `${cut(prompt)}(2장).`, toolOptions: { cards: [cards[1], cards[0]] }, target: { order: cards.slice(0, 2) } } },
    ...more,
  });
  // 가락 따라 치기(keyboard melody): 기본 한 줄, 쉬움 끝 세 음
  const MEL = (prompt, notes, d, more) => ({
    prompt, toolOptions: { melody: notes }, target: { notes }, difficulty: d,
    levels: { easy: { prompt: `${cut(prompt)}(세 음).`, toolOptions: { melody: notes.slice(-3) }, target: { notes: notes.slice(-3) } } },
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
  const RHY_DEMO = (pattern, measures) => ({ tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: measures || 2, blocks: BLOCKS, pattern }, sequence: [{ rhythm: pattern }] });
  // 갈림길(dilemma): 기본 2번 갈림, 쉬움 첫 갈림만(다음 장면이 있던 보기는 그 자리에서 끝남), 도전 끝에서 까닭 카드 고르기
  const DILEMMA = (prompt, scene, path, reasons, good, d, more) => {
    const P = Array.isArray(path[0]) ? path : [path];
    const first = Object.assign({}, scene, { choices: scene.choices.map((c) => { const x = Object.assign({}, c); if (x.next) { delete x.next; x.ending = c.easyEnding || '잘 골랐어요.'; } delete x.easyEnding; return x; }) });
    const clean = Object.assign({}, scene, { choices: scene.choices.map((c) => { const x = Object.assign({}, c); delete x.easyEnding; return x; }) });
    return {
      prompt, toolOptions: { title: '어떻게 할까요?', scene: clean }, target: { path: P }, difficulty: d,
      levels: {
        easy: { prompt: `${cut(prompt)}(한 번).`, toolOptions: { scene: first }, target: { path: [...new Set(P.map((x) => x[0]))].map((x) => [x]) } },
        challenge: { prompt: `${cut(prompt)}, 까닭도요.`, toolOptions: { reasons, maxReasons: 1 }, target: { path: P, reasons: [good] } },
      },
      ...more,
    };
  };
  // 정리 출구
  const CHANT = (title, cards, prompt) => ({ type: 'tool', tool: 'timer', options: { title, cards: [cards[cards.length - 1], ...cards.slice(0, -1)] }, prompt: prompt || '구호를 차례대로 놓아요.', target: { order: cards }, difficulty: 0.1 });
  const SELF = (title, list, prompt) => ({ type: 'tool', tool: 'timer', options: { title }, prompt: prompt || '해 본 것에 표시해요.', target: { selfCheck: list }, difficulty: 0.1 });
  const SCALE = (situation, feeling, prompt, top) => ({ type: 'tool', tool: 'emotion', options: { mode: 'scale', situation, feeling, steps: 5, scaleLabels: { 1: '조금', 5: top || '아주 많이' } }, prompt: prompt || '내 마음은 얼마만큼인가요?', target: { level: 'any' }, difficulty: 0.1 });
  const SORT_EXIT = (prompt, slots, a, b, trap) => ({ type: 'tool', tool: 'sortboard', options: { slots, cards: [a[0], b[0], a[1], b[1], ...(trap ? [trap] : [])] }, prompt, target: { sort: { [slots[0]]: ids(a), [slots[1]]: ids(b) } }, difficulty: 0.15 });

  // 학교 칸 지도(map): 도와줄 어른이 계신 곳
  const SCHOOL = [{ name: '교실', icon: 'school', at: [0, 0] }, { name: '보건실', icon: 'hospital', at: [3, 0] }, { name: '상담실', icon: 'house', at: [0, 2] }, { name: '교무실', icon: 'office', at: [3, 2] }];

  // =====================================================================================================
  // 1학년 · 내 마음에 이름 붙이기
  const FEEL = MOD('life.e12.feel-names', [1]);
  const T_FEEL = [
    FEEL({
      id: 'life.e12.feel-names.intro.face-song', type: 'intro', title: '"기쁠 땐 짝짝" 마음 노래',
      method: '마음 노래 따라 부르기', tool: 'keyboard', minutes: 6,
      levels: { easy: '"기쁠 땐 짝짝, 슬플 땐 토닥" 두 마디만 교사와 함께 손뼉으로 따라 친다.', base: '네 마디(기쁠 땐 짝짝·슬플 땐 토닥·화날 땐 후우·괜찮아 괜찮아)를 리듬 블록 시연을 보며 손뼉으로 따라 친다.', challenge: '네 마디를 친 뒤 새 마음 "무서울 땐 ○○"에 어울리는 동작(꼭 안기·손 잡기)을 반이 함께 정해 붙여 부른다.' },
      intro: {
        teacher: '"기쁠 땐 짝짝(손뼉 두 번), 슬플 땐 토닥(가슴 토닥), 화날 땐 후우(길게 숨 내쉬기), 괜찮아 괜찮아(두 팔 흔들기)!" 노래를 두 번 불러 준 뒤 시연 단추로 리듬 블록이 놓이는 모습을 보이고 반 전체가 손뼉으로 따라 친다. "슬픈 마음은 나쁜 마음이에요"라는 말이 나오면 "슬플 때 토닥토닥하면 마음이 어떻게 될까요? 슬픈 마음도 우리 마음이라 괜찮아요"라고 되묻듯 답한다. 오늘은 마음마다 이름을 붙여 본다고 밝힌다.',
        student: '"기쁠 땐 짝짝, 슬플 땐 토닥"을 손뼉과 동작으로 따라 해요.',
        demo: RHY_DEMO(['e', 'e', 'q', 'q', 'qr', 'e', 'e', 'q', 'q', 'qr', 'e', 'e', 'q', 'h', 'q', 'q', 'q', 'q'], 4),
        art: { draw: 'paper children clapping hands and patting their chests while singing, with a sun, a rain cloud and a little storm cloud cut from colored paper floating above them', banner: '모든 마음은 괜찮아' },
      },
      notes: '노래는 수업용으로 지은 짧은 노래다. 학생에게 "요즘 슬픈 일 있니?"처럼 자기 일을 묻지 않는다.',
    }),
    FEEL({
      id: 'life.e12.feel-names.intro.face-pick', type: 'intro', title: '얼굴 그림과 마음 날씨 짝 짓기',
      method: '얼굴 그림 보고 마음 고르기', tool: 'emotion', minutes: 6,
      levels: { easy: '교사가 웃는 얼굴·우는 얼굴 두 장만 가리키며 해·비 날씨와 함께 잇는다.', base: '얼굴 그림 네 장(웃는·우는·찡그린·놀라 굳은 얼굴)을 듣고 네 마음 날씨에 잇는 시연을 따라 말한다.', challenge: '네 장을 이은 뒤 교사가 애매한 얼굴(입은 웃고 눈은 처진 얼굴)을 하나 더 그려 보이면 어떤 마음일지 여러 생각을 말한다.' },
      intro: {
        teacher: '"이 친구 얼굴을 보세요. 입꼬리가 올라갔어요. 마음 날씨는 해일까요, 비일까요?" 얼굴 그림을 하나씩 소리 내어 읽어 주고 시연 단추로 마음 카드가 얼굴에 이어지는 모습을 보인다. 반 전체가 얼굴마다 그 표정을 따라 지어 본다. "화난 얼굴은 나쁜 친구예요"라는 말이 나오면 "화난 마음이 생긴 거지 나쁜 친구는 아니에요. 화도 이름이 있는 마음이에요"라고 답한다. 오늘은 기쁨·슬픔·화남·무서움 네 마음에 이름을 붙인다고 밝힌다.',
        student: '그림 속 얼굴을 따라 지어 보고, 마음 이름을 짝에게 말해 보아요.',
        demo: { tool: 'emotion', options: { mode: 'match', slots: [{ id: 'smile', label: '입꼬리 올라감' }, { id: 'tear', label: '눈물이 나요' }, { id: 'frown', label: '눈썹이 찡그림' }, { id: 'freeze', label: '몸이 굳었어요' }], cards: ['기쁨', '슬픔', '화남', '무서움'] }, sequence: [{ match: { smile: '기쁨', tear: '슬픔', frown: '화남', freeze: '무서움' } }] },
        art: { draw: 'four paper face cards in a row: a smiling face under a sun, a teary face under a rain cloud, a frowning face under a storm cloud, a wide-eyed frozen face under a moon', banner: '마음에도 날씨가 있어요' },
      },
    }),
    FEEL({
      id: 'life.e12.feel-names.activity.scene-match', type: 'activity', title: '장면과 마음 카드 잇기',
      method: '그림 장면과 마음 잇기', tool: 'emotion', minutes: 13,
      levels: { easy: '장면 3장에 마음 카드를 잇고, 놓으면 바로 맞는지 알려 준다.', base: '장면 3장에 마음 카드 4장 가운데 골라 이은 뒤 확인한다.', challenge: '장면 3장에 이어, 마음이 둘일 수 있는 장면("동생이 내 인형을 가져갔어요")에는 되는 마음 두 가지 가운데 하나를 골라도 맞는다.' },
      activity: {
        title: '장면에 마음 잇기', tool: 'emotion',
        teacher: '"곰이 아이스크림을 떨어뜨렸어요. 곰 마음은 어떨까요?" 장면 글을 소리 내어 읽어 주고, 잇기 전에 반 전체가 그 마음의 얼굴을 지어 본다. "생일 선물을 받으면 무서워요"처럼 고른 학생에게 "선물 상자를 열 때 얼굴이 어떨까요?"라고 묻는다. 셋째 문항에서 같은 일에도 마음이 둘일 수 있다는 점을 짚고, 어떤 마음이든 이름을 붙이면 말하기 쉬워진다고 말해 준다.',
        task: '장면 카드를 듣고 알맞은 마음 카드를 이어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          { prompt: '곰의 일에 마음을 이어요.', toolOptions: { mode: 'match', slots: [{ id: 'ice', label: '아이스크림 떨어짐' }, { id: 'gift', label: '생일 선물 받음' }, { id: 'thunder', label: '천둥이 쾅' }], cards: ['슬픔', '기쁨', '무서움', '화남'] }, target: { match: { ice: '슬픔', gift: '기쁨', thunder: '무서움' } }, difficulty: 0.1,
            levels: { easy: { toolOptions: { cards: ['슬픔', '기쁨', '무서움'] } } } },
          { prompt: '토끼의 일에 마음을 이어요.', toolOptions: { mode: 'match', slots: [{ id: 'push', label: '줄에서 밀렸어요' }, { id: 'praise', label: '칭찬을 들었어요' }, { id: 'lost', label: '엄마가 안 보여요' }], cards: ['화남', '기쁨', '무서움', '슬픔'] }, target: { match: { push: '화남', praise: '기쁨', lost: ['무서움', '슬픔'] } }, difficulty: 0.15,
            levels: { easy: { prompt: '토끼의 일에 마음을 이어요(3장).', toolOptions: { cards: ['화남', '기쁨', '무서움'] }, target: { match: { push: '화남', praise: '기쁨', lost: '무서움' } } } } },
          { prompt: '다람쥐의 일에 마음을 이어요.', toolOptions: { mode: 'match', slots: [{ id: 'friend', label: '친구와 같이 놀아요' }, { id: 'broken', label: '블록이 무너졌어요' }, { id: 'take', label: '동생이 인형 가져감' }], cards: ['기쁨', '슬픔', '화남', '무서움'] }, target: { match: { friend: '기쁨', broken: '슬픔', take: '화남' } }, difficulty: 0.2,
            levels: { easy: { toolOptions: { cards: ['기쁨', '슬픔', '화남'] } }, challenge: { prompt: '마음이 둘일 수도 있어요. 이어요.', target: { match: { friend: '기쁨', broken: ['슬픔', '화남'], take: ['화남', '슬픔'] } } } },
            conclude: '같은 일에도 여러 마음이 생겨요. 마음에 이름을 붙이면 말하기 쉬워요.' },
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '선물을 받았어요. 마음은?', options: ['기쁨', '무서움'], answer: '기쁨' }] },
      notes: '그림 속 동물의 일로만 이야기한다. "너도 이런 일 있었니?"라고 묻지 않는다.',
    }),
    FEEL({
      id: 'life.e12.feel-names.activity.body-signal', type: 'activity', title: '곰의 마음이 나타나는 몸',
      method: '마음이 몸 어디에 나타날까', tool: 'body', minutes: 14,
      levels: { easy: '고를 칸이 네 곳뿐이고 고르면 이름이 바로 보인다.', base: '여섯 곳 가운데 곰이 말한 곳을 고른다(화남·무서움·기쁨 세 문항).', challenge: '곳을 고른 뒤 "그럴 때 곰이 할 일" 보기(숨 쉬기·참기만 하기)까지 고른다.' },
      activity: {
        title: '종이 몸 짚기', tool: 'body',
        teacher: '"곰이 말해요. \'화가 나면 목이 뜨겁고 손에 힘이 꽉 들어가.\' 종이 몸에서 곰이 말한 곳을 찾아볼까요?" 고르기 전에 반 전체가 자기 몸의 같은 곳을 살짝 짚어 본다. 종이 몸에 얼굴·주먹 칸이 없으니 목과 손목을 대신 짚는다고 알려 준다. "무서우면 배가 아파요"처럼 다른 곳을 말하는 학생에게 "그럴 수도 있어요. 마음이 몸에 나타나는 곳은 사람마다 달라요. 오늘은 곰이 말한 곳을 찾아봐요"라고 답한다.',
        task: '곰이 말한 마음이 나타나는 곳을 종이 몸에서 골라요.', levels: { easy: { names: true }, base: {}, challenge: {} },
        items: [
          { prompt: '곰이 화날 때 뜨거운 곳은?', toolOptions: { mode: 'parts', parts: ['눈', '목', '어깨', '손목', '무릎', '발목'] }, target: { parts: ['목', '손목'] }, difficulty: 0.1,
            hints: ['곰이 한 말을 다시 들어 봐요.', '"목이 뜨겁고 손에 힘이 꽉"이라고 했어요.', '목과 손목을 눌러요.'],
            levels: { easy: { prompt: '곰이 화날 때 뜨거운 두 곳은?', toolOptions: { parts: ['눈', '목', '손목', '무릎'] } },
              challenge: { prompt: '고르고 곰이 할 일도요.', toolOptions: { ask: { q: '화날 때 곰은?', choices: ['꾹 참기만 해요', '숨을 후 쉬어요'] } }, target: { parts: ['목', '손목'], pick: 1 } } } },
          { prompt: '곰이 무서울 때 콩닥이는 곳은?', toolOptions: { mode: 'parts', parts: ['귀', '목', '가슴', '배', '허벅지', '발목'] }, target: { parts: ['가슴'] }, difficulty: 0.15,
            hints: ['곰이 "콩닥콩닥"이라고 했어요.', '심장이 뛰는 곳을 떠올려요.', '가슴을 눌러요.'],
            levels: { easy: { toolOptions: { parts: ['귀', '가슴', '배', '발목'] } },
              challenge: { prompt: '고르고 곰이 할 일도요.', toolOptions: { ask: { q: '무서울 때 곰은?', choices: ['어른 손을 잡아요', '혼자 숨어요'] } }, target: { parts: ['가슴'], pick: 0 } } } },
          { prompt: '곰이 기쁠 때 따뜻한 곳은?', toolOptions: { mode: 'parts', parts: ['코', '혀', '가슴', '허리', '무릎', '발목'] }, target: { parts: ['가슴'] }, difficulty: 0.2,
            hints: ['곰이 "마음이 따뜻해"라며 손을 얹은 곳이에요.', '몸 가운데 위쪽을 봐요.', '가슴을 눌러요.'],
            levels: { easy: { toolOptions: { parts: ['코', '가슴', '무릎', '발목'] } },
              challenge: { prompt: '고르고 곰이 할 일도요.', toolOptions: { ask: { q: '기쁠 때 곰은?', choices: ['기쁨을 말해요', '꼭 숨겨요'] } }, target: { parts: ['가슴'], pick: 0 } } },
            conclude: '마음은 몸에도 나타나요. 몸이 알려 주면 "지금 내 마음은?" 하고 이름을 붙여요.' },
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '무서울 때 곰은 어디가 콩닥?', options: ['가슴', '발목'], answer: '가슴' }] },
      notes: '종이 몸에는 얼굴·손(주먹) 칸이 없어 계획의 얼굴·주먹 대신 목·손목을 쓰고, 학생이 자기 얼굴과 주먹을 직접 짚게 한다. 계획의 단계별 문항 수 차이(화남만·두 가지·기쁨까지)는 교구가 단계마다 같은 문항 수라 세 문항을 모두 두고 고를 칸 수와 보기로 단계를 나눴다. 마음이 나타나는 곳은 사람마다 달라 "곰이 말한 곳"으로만 채점한다.',
    }),
    FEEL({
      id: 'life.e12.feel-names.activity.size-scale', type: 'activity', title: '토끼 마음 크기 막대',
      method: '마음 크기 막대 칠하기', tool: 'chart', minutes: 13,
      levels: { easy: '토끼가 말한 "조금"과 "많이" 두 장면만 막대로 칠한다(1칸·3칸).', base: '토끼가 말한 세 장면(조금·보통·많이)의 막대를 칠하고, 가장 큰 마음을 읽는다.', challenge: '같은 일(비가 와서 소풍이 미뤄짐)에 곰은 3칸, 토끼는 1칸인 막대를 보고 "마음 크기는 달라도 돼요"를 고른다.' },
      activity: {
        title: '마음 크기 막대(가상)', tool: 'chart',
        teacher: '"토끼가 말해요. \'과자가 떨어져서 조금 슬퍼\', \'풍선이 날아가서 꽤 슬퍼\', \'인형을 잃어버려서 많이 슬퍼\'. 조금은 1칸, 꽤는 2칸, 많이는 3칸이에요." 표를 함께 소리 내어 읽고 막대를 칠한다. 반 전체가 두 팔을 벌려 1칸·2칸·3칸 크기를 몸으로 보여 준다. 셋째 문항에서 "곰이 너무 크게 슬퍼해요, 틀렸어요"라는 학생에게 "같은 일에도 마음 크기는 사람마다 달라요. 누구 마음도 틀리지 않아요"라고 답한다. 큰 마음일수록 말하면 가벼워진다는 점을 짚는다.',
        task: '토끼가 말한 마음 크기만큼 막대를 칠하고 읽어요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          { prompt: '표를 보고 막대를 칠해요.', toolOptions: { type: 'bar', title: '토끼의 슬픔 크기(가상)', unit: '칸', max: 3, data: [['과자 떨어짐', 1], ['풍선 날아감', 2], ['인형 잃음', 3]] }, target: { build: true }, difficulty: 0.1,
            levels: { easy: { prompt: '두 막대를 칠해요.', toolOptions: { data: [['과자 떨어짐', 1], ['인형 잃음', 3]] } } } },
          { prompt: '가장 크게 슬픈 일은?', toolOptions: { type: 'bar', mode: 'read', title: '토끼의 슬픔 크기(가상)', unit: '칸', max: 3, data: [['과자 떨어짐', 1], ['풍선 날아감', 2], ['인형 잃음', 3]], question: '가장 큰 막대는?', choices: ['과자 떨어짐', '풍선 날아감', '인형 잃음'] }, target: { pick: 2 }, difficulty: 0.15,
            levels: { easy: { prompt: '두 막대 가운데 더 큰 것은?', toolOptions: { data: [['과자 떨어짐', 1], ['인형 잃음', 3]], choices: ['과자 떨어짐', '인형 잃음'] }, target: { pick: 1 } } } },
          { prompt: '곰과 토끼 막대를 봐요.', toolOptions: { type: 'bar', mode: 'read', title: '소풍이 미뤄졌어요(가상)', unit: '칸', max: 3, data: [['곰', 3], ['토끼', 1]], question: '누가 더 크게 속상해요?', choices: ['곰', '토끼'] }, target: { pick: 0 }, difficulty: 0.2,
            levels: { challenge: { prompt: '크기가 다르면 어때요?', toolOptions: { question: '같은 일, 다른 크기는?', choices: ['누가 틀렸어요', '달라도 돼요'] }, target: { pick: 1 } } },
            conclude: '마음에는 크기가 있어요. 같은 일에도 크기는 달라도 돼요.' },
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '"많이 슬퍼"는 몇 칸?', options: ['1칸', '3칸'], answer: '3칸' }] },
      notes: '막대의 칸 수는 그림 속 토끼·곰이 말한 크기를 옮긴 가상 자료다. 학생의 마음 크기를 막대로 그리게 하거나 걷지 않는다.',
    }),
    FEEL({
      id: 'life.e12.feel-names.activity.mask-collage', type: 'activity', title: '색종이로 마음 얼굴 만들기',
      method: '마음 얼굴 만들기', tool: 'collage', minutes: 14,
      levels: { easy: '입 조각(반원) 하나와 눈 조각만 붙여 얼굴을 만든다(눈·입 고르개만 보임).', base: '눈(동그라미)·입(반원)·눈썹(긴 네모)을 붙여 오늘 배운 마음 하나의 얼굴을 만든다.', challenge: '얼굴을 만든 뒤 짝이 보고 어떤 마음인지 맞혀 본 것까지 표시한다.' },
      activity: {
        title: '마음 얼굴 꾸미기', tool: 'collage',
        teacher: '"동그라미는 눈, 반원은 입, 긴 네모는 눈썹이에요. 입 반원을 위로 웃게 붙이면 어떤 마음일까요? 거꾸로 붙이면요?" 칠판에 조각 뜻을 그려 두고 시작한다. 조각을 붙이며 "이 얼굴은 무슨 마음이에요?"라고 묻고 기다릴 반응("기뻐요", "화나요")을 듣는다. 화난 얼굴을 만든 학생을 다른 학생이 놀리면 "화난 얼굴도 우리가 배운 소중한 마음이에요"라고 말해 준다. 만든 얼굴에 마음 이름을 붙여 말하는 것이 오늘의 목표라고 짚는다.',
        task: '색종이 조각으로 오늘 배운 마음 하나의 얼굴을 만들어요.', levels: { easy: { shapes: ['circle', 'semi'] }, base: { shapes: ['circle', 'semi', 'rect'] }, challenge: { shapes: ['circle', 'semi', 'rect', 'triangle'] } },
        items: [
          { prompt: '눈 두 개를 붙여요.', toolOptions: {}, target: { has: [{ shape: 'circle', min: 2 }] }, difficulty: 0.1,
            levels: { easy: { prompt: '눈 하나 이상 붙여요.', target: { has: [{ shape: 'circle', min: 1 }] } } } },
          { prompt: '입과 눈썹을 붙여요.', toolOptions: {}, target: { has: [{ shape: 'semi', min: 1 }, { shape: 'rect', min: 2 }] }, difficulty: 0.15,
            levels: { easy: { prompt: '입 반원을 붙여요.', target: { has: [{ shape: 'semi', min: 1 }] } } } },
          { prompt: '얼굴을 꾸미고 표시해요.', toolOptions: {}, target: { selfCheck: ['얼굴을 만들었어요', '마음 이름을 말했어요'], minPieces: 4 }, difficulty: 0.2,
            levels: { easy: { prompt: '얼굴을 만들고 표시해요.', target: { selfCheck: ['얼굴을 만들었어요', '마음 이름을 말했어요'], minPieces: 2 } }, challenge: { prompt: '짝이 맞혀 보고 표시해요.', target: { selfCheck: ['얼굴을 만들었어요', '마음 이름을 말했어요', '짝이 맞혀 봤어요'], minPieces: 4 } } },
            conclude: '얼굴에는 마음이 보여요. 어떤 마음이든 이름을 붙여 말해요.' },
        ],
      },
      worksheet: { items: [{ type: 'draw', prompt: '오늘 배운 마음 하나의 얼굴을 그려요.' }] },
      notes: '만든 얼굴은 "오늘 배운 마음 하나"이고 "지금 내 마음"을 만들라고 하지 않는다. 작품을 걷거나 마음을 평가하지 않는다.',
    }),
    FEEL({
      id: 'life.e12.feel-names.wrap.okay-chant', type: 'wrap', title: '"모든 마음은 괜찮아" 구호',
      method: '"모든 마음은 괜찮아" 구호', tool: 'timer', minutes: 6,
      levels: { easy: '교사가 구호 앞부분("모든 마음은 괜찮아")만 함께 외치고 카드 차례는 교사가 짚어 준다.', base: '구호 카드 세 장의 차례를 맞추고 가슴에 손을 얹고 구호 전체를 두 번 외친다.', challenge: '구호를 외친 뒤 끝에 반이 정한 동작(두 팔로 크게 원 그리기)을 하나 더 붙인다.' },
      wrap: {
        teacher: '"가슴에 손을 얹어요. 모든 마음은 괜찮아! 말하면 가벼워져! 선생님이 들어 줄게!" 구호 카드 차례를 맞춘 뒤 반 전체가 두 번 외친다. 출구 2번에서 "슬픈 마음은 숨겨요"를 고른 학생에게 "슬픈 마음도 괜찮아요. 믿는 어른께 말하면 가벼워져요"라고 말해 준다. 마지막 구호는 작은 목소리로 한 번, 큰 목소리로 한 번 외친다.',
        exitTicket: [
          CHANT('마음 구호', ['모든 마음은 괜찮아', '말하면 가벼워져', '선생님이 들어 줄게']),
          { type: 'choice', prompt: '슬픈 마음은 어떻게 해요?', options: ['숨겨요', '어른께 말해요', '나쁜 마음이에요'], answer: 1, difficulty: 0.1, explain: '슬픈 마음도 괜찮아요. 믿는 어른께 말해요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '모든 마음은 괜찮아',
        items: [
          { type: 'blank', prompt: '구호를 따라 써요.', text: '모든 마음은 ___', answer: '괜찮아' },
          { type: 'draw', prompt: '(혼자 보기) 오늘 배운 마음 날씨 하나를 그려요.' },
        ],
        easy: { note: '"모든 마음은 괜찮아"를 떠올려요.', items: [{ type: 'draw', prompt: '해·비·번개 가운데 하나를 그려요.' }] },
      },
      notes: '활동지 그림 칸은 걷지 않는 혼자 보기 칸이다. ' + CRISIS,
    }),
    FEEL({
      id: 'life.e12.feel-names.wrap.tell-who', type: 'wrap', title: '마음을 말할 사람 고르기',
      method: '마음을 말할 사람 고르기', tool: 'sortboard', minutes: 6,
      levels: { easy: '교사가 카드를 하나씩 읽어 주며 "말해요" 바구니에 넣을 사람을 함께 고른다.', base: '사람 카드 다섯 장을 "말해요"(부모님·선생님·친구)와 "도와주긴 어려워요"(인형·개미) 바구니에 나눈다.', challenge: '학교에서 말할 어른과 집에서 말할 어른을 두 바구니에 나눈다(출구 2번).' },
      wrap: {
        teacher: '"슬플 때 마음을 말할 수 있는 사람은 누구일까요?" 카드를 읽어 주고 바구니에 넣게 한다. 인형 카드를 "말해요"에 넣고 싶어 하는 학생에게 "인형에게 말하면 마음이 조금 편해지죠. 그런데 인형은 도와줄 수 있을까요? 도와줄 수 있는 사람에게도 말해요"라고 답한다. 출구 2번에서 집과 학교 어른을 나누며 우리 학교 담임·보건·상담 선생님 이름을 알려 준다.',
        exitTicket: [
          { type: 'tool', tool: 'sortboard', options: { slots: ['말해요', '도와주긴 어려워요'], cards: [C('parent', '부모님'), C('doll', '인형'), C('teacher', '선생님'), C('friend', '친구'), C('ant', '개미')] }, prompt: '마음을 말할 사람을 나누어요.', target: { sort: { 말해요: ['parent', 'teacher', 'friend'], '도와주긴 어려워요': ['doll', 'ant'] } }, difficulty: 0.15 },
          SORT_EXIT('학교와 집 어른을 나누어요.', ['학교', '집'], [C('homeroom', '담임 쌤'), C('nurse', '보건 쌤')], [C('mom', '엄마'), C('grandma', '할머니')]),
          MOOD,
        ],
      },
      worksheet: {
        title: '내 마음을 말할 사람',
        items: [
          { type: 'check', prompt: '마음을 말할 수 있는 사람에 ✓ 해요.', options: ['보호자', '담임 선생님', '보건 선생님', '상담 선생님'] },
          { type: 'draw', prompt: '(혼자 보기) 마음을 말하고 싶은 사람을 그려요.' },
        ],
      },
      notes: '친구도 말할 사람이지만 걱정되는 일은 어른께도 말해야 한다고 덧붙인다. 학생이 누구를 골랐는지 발표시키지 않는다. ' + CRISIS,
    }),
  ];

  // =====================================================================================================
  // 1학년 · 마음을 달래는 몸 놀이
  const CALM = MOD('life.e12.calm-body', [1]);
  const T_CALM = [
    CALM({
      id: 'life.e12.calm-body.intro.balloon', type: 'intro', title: '풍선 숨쉬기 따라 하기',
      method: '풍선 숨쉬기 따라 하기', tool: 'timer', minutes: 6,
      levels: { easy: '교사와 함께 풍선 숨쉬기를 2번 따라 한다.', base: '타이머에 맞춰 4박 들이쉬고 4박 내쉬기를 3번 한다.', challenge: '타이머 없이 스스로 마음속으로 박자를 세며 5번 한다.' },
      intro: {
        teacher: '"배에 풍선이 있다고 생각해요. 넷 셀 동안 코로 들이마시면 풍선이 커지고, 넷 셀 동안 입으로 후 내쉬면 작아져요." 시연 단추로 타이머 횟수가 3번에 맞춰지는 모습을 보이고, 배에 손을 얹고 반 전체가 따라 한다. "빨리 많이 쉬면 더 좋아요"라는 학생에게 "천천히 쉬면 마음도 천천히 가라앉아요. 빨리 쉬면 어지러울 수 있어요"라고 답한다. 오늘은 화나거나 무서울 때 몸으로 마음을 달래는 방법을 배운다고 밝힌다.',
        student: '배에 손을 얹고 풍선이 커지듯 들이쉬고, 작아지듯 내쉬어요.',
        demo: { tool: 'timer', options: { title: '풍선 숨쉬기(우리 반 약속)', labels: ['들이쉬기', '내쉬기'], plan: { work: 4, rest: 4, rounds: 1 } }, sequence: [{ plan: { work: 4, rest: 4, rounds: 3 } }] },
        art: { draw: 'a paper child sitting cross-legged with hands on the belly, a big round paper balloon growing and shrinking beside them, soft clouds around', banner: '풍선처럼 후우' },
      },
      notes: '4박·3번은 우리 반 연습 약속이다. 어지럽다는 학생은 바로 멈추고 편히 숨 쉬게 한다.',
    }),
    CALM({
      id: 'life.e12.calm-body.intro.storm-story', type: 'intro', title: '화난 곰이 진정하는 이야기',
      method: '화난 곰 이야기 듣기', tool: 'story', minutes: 6,
      levels: { easy: '교사가 첫 장면(쿵쾅쿵쾅)을 놓아 두고 남은 두 장의 차례만 함께 말한다.', base: '곰 이야기 그림 세 장(쿵쾅대요·숨을 쉬어요·웃어요)이 차례로 놓이는 시연을 보고 이야기를 따라 말한다.', challenge: '세 장을 본 뒤 곰에게 해 줄 말("천천히 숨 쉬어 봐")을 반이 함께 골라 말한다.' },
      intro: {
        teacher: '"블록이 무너지자 곰이 쿵쾅쿵쾅 발을 굴러요. 그다음 곰은 풍선 숨을 세 번 쉬었어요. 그러자 곰 얼굴이 어떻게 됐을까요?" 시연 단추로 그림 세 장이 차례로 놓이는 모습을 보인다. "화가 나면 때려야 풀려요"라는 말이 나오면 "곰은 때리지 않고 숨을 쉬었어요. 그다음 곰 얼굴을 보세요"라고 되묻는다. 화난 마음은 괜찮고, 화난 행동을 고르는 것은 내가 할 수 있다는 점을 밝힌다.',
        student: '곰 이야기를 듣고, 곰처럼 쿵쾅 → 후우 → 방긋을 따라 해 보아요.',
        demo: { tool: 'story', options: { mode: 'order', slots: ['먼저', '다음', '끝'], cards: [C('smile', '방긋 웃어요', { motif: 'sun' }), C('stomp', '쿵쾅쿵쾅', { motif: 'storm' }), C('breathe', '숨을 후우', { motif: 'cloud' })] }, sequence: [{ order: ['stomp', 'breathe', 'smile'] }] },
        art: { draw: 'three paper panels of a bear: first stomping angrily beside fallen blocks under a storm cloud, then sitting and breathing slowly, then smiling and rebuilding the blocks under a sun', banner: '곰아, 후우 해 봐' },
      },
    }),
    CALM({
      id: 'life.e12.calm-body.activity.calm-pick', type: 'activity', title: '화날 때 하는 일 좋아요·안돼요',
      method: '좋아요/안돼요: 화날 때 하는 일', tool: 'emotion', minutes: 13,
      levels: { easy: '장면 카드 3장, 놓으면 바로 맞는지 알려 주고 카드 뒤 결과가 처음부터 보인다.', base: '장면 카드 5장을 좋아요·안돼요로 나눈 뒤 확인하면 카드 뒤 결과가 보인다.', challenge: '안돼요 장면(친구 밀기·소리 지르기·물건 던지기) 하나를 보고 대신 할 일을 보기 세 개 가운데 고른다.' },
      activity: {
        title: '화날 때 하는 일 나누기', tool: 'emotion',
        teacher: '"화가 났을 때 이렇게 하면 좋아요일까요, 안돼요일까요?" 카드를 읽어 줄 때 반 전체가 그 동작을 작게 따라 해 본다(물 마시는 손, 풍선 숨). "발 구르기"를 안돼요에 넣는 학생에게 "제자리에서 쿵쿵 구르면 아무도 안 다쳐요. 친구 발을 밟으면요?"라고 묻는다. "소리 지르면 화가 풀려요"라는 생각에는 "소리를 지르면 옆 친구는 어떤 마음일까요? 숨을 쉬면 내 마음도 친구 마음도 편해요"라고 짚는다.',
        task: '화날 때 하는 일을 좋아요·안돼요로 나누어요.', levels: { easy: { live: true, instant: true, showBack: true }, base: {}, challenge: {} },
        items: [
          OKSORT('교실에서 화날 때 나누어요.', [C('water', '물 마시기', { back: '마음이 시원해요' }), C('breath', '풍선 숨', { back: '천천히 가라앉아요' }), C('stomp', '제자리 쿵쿵', { back: '아무도 안 다쳐요' })], [C('push', '친구 밀기', { back: '친구가 다쳐요' }), C('shout', '소리 지르기', { back: '모두 놀라요' })],
            { prompt: '밀고 싶어요. 대신 할 일은?', situation: '친구 때문에 화나서 밀고 싶어요.', choices: [{ id: 'push', text: '그래도 밀어요', result: '친구가 넘어져요.', mood: '걱정' }, { id: 'stop', text: '멈추고 숨 쉬어요', result: '마음이 가라앉았어요.', mood: '편안함' }, { id: 'hide', text: '꾹 참고 울어요', result: '마음이 계속 무거워요.', mood: '속상함' }], answer: 'stop' }, 0.1),
          OKSORT('놀이터에서 화날 때 나누어요.', [C('count', '열까지 세기', { back: '잠깐 멈췄어요' }), C('stretch', '몸 쭉 펴기', { back: '몸이 풀려요' }), C('tell', '어른께 말하기', { back: '도와주셨어요' })], [C('throw', '모래 던지기', { back: '눈에 들어가요' }), C('kick', '공 세게 차기', { back: '누가 맞아요' })],
            { prompt: '던지고 싶어요. 대신 할 일은?', situation: '그네를 못 타서 모래를 던지고 싶어요.', choices: [{ id: 'throw', text: '그래도 던져요', result: '친구 눈에 모래가 들어가요.', mood: '걱정' }, { id: 'say', text: '"나도 타고 싶어" 말해요', result: '차례를 정했어요.', mood: '편안함' }, { id: 'run', text: '혼자 멀리 가요', result: '마음이 그대로예요.', mood: '속상함' }], answer: 'say' }, 0.15),
          OKSORT('집에서 화날 때 나누어요.', [C('pillow', '베개 꼭 안기', { back: '마음이 포근해요' }), C('slow', '천천히 걷기', { back: '숨이 고와져요' }), C('hug', '안아 달래요', { back: '마음이 편해요' })], [C('bite', '동생 깨물기', { back: '동생이 아파요' }), C('break', '장난감 부수기', { back: '다시 못 놀아요' })],
            { prompt: '소리치고 싶어요. 대신 할 일은?', situation: '동생이 블록을 무너뜨려 소리치고 싶어요.', choices: [{ id: 'yell', text: '크게 소리쳐요', result: '동생이 울어요.', mood: '걱정' }, { id: 'tell', text: '숨 쉬고 "속상해" 말해요', result: '동생이 "미안해" 했어요.', mood: '편안함' }, { id: 'quiet', text: '말없이 혼자 울어요', result: '아무도 몰라요.', mood: '속상함' }], answer: 'tell' }, 0.2,
            { conclude: '화난 마음은 괜찮아요. 숨 쉬기·물 마시기·말하기로 마음을 달래요.' }),
        ],
      },
      worksheet: { items: [{ type: 'table', prompt: '좋으면 ○, 안 되면 ×를 써요.', columns: ['화날 때', '○ / ×'], cells: [['물 마시기', ''], ['친구 밀기', ''], ['풍선 숨', '']], answer: '○, ×, ○' }] },
      notes: '"꾹 참고 울어요"는 틀린 마음이 아니라, 혼자 참기만 하면 마음이 계속 무겁다는 뜻으로 말해 준다. 우는 것은 괜찮다.',
    }),
    CALM({
      id: 'life.e12.calm-body.activity.stretch', type: 'activity', title: '몸 쭉 펴기 세 동작',
      method: '몸 쭉 펴기 동작 3가지', tool: 'timer', minutes: 14,
      levels: { easy: '동작 카드 2장(팔 뻗기·어깨 올렸다 내리기)의 차례를 놓고, 연습은 1번이 되게 맞춘다.', base: '동작 카드 3장(팔 뻗기·어깨 올렸다 내리기·발끝 서기)의 차례를 놓고 20초씩 3번 연습하게 맞춘 뒤 해 본 것에 표시한다.', challenge: '세 동작을 연습한 뒤 내가 고른 순서로 한 번 더 해 보고, 그것까지 표시한다.' },
      activity: {
        title: '몸 펴기 세 동작', tool: 'timer',
        teacher: '"팔을 하늘로 쭉! 어깨를 귀까지 올렸다가 툭! 발끝으로 살짝 서기!" 동작을 먼저 보이고 순서 카드를 놓은 뒤 타이머에 맞춰 반 전체가 따라 한다. 발끝 서기에서 흔들리는 학생에게 "책상을 살짝 잡고 해도 돼요"라고 말해 준다. "몸 펴기는 체육 시간에만 해요"라는 학생에게 "화나거나 무서울 때 자리에서 몸을 쭉 펴면 마음도 같이 풀려요"라고 답한다.',
        task: '몸 펴기 동작 차례를 놓고 타이머에 맞춰 따라 해요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          STEPS('몸 펴기 차례를 놓아요.', '몸 쭉 펴기', ['팔 뻗기', '어깨 툭', '발끝 서기'], 0.1),
          { prompt: '20초씩 3번 하게 맞춰요.', toolOptions: { title: '몸 펴기(우리 반 약속)', labels: ['펴기', '쉬기'], plan: { work: 20, rest: 5, rounds: 1 } }, target: { plan: { work: 20, rounds: 3 } }, difficulty: 0.15,
            hints: ['몇 번 할지 세어 봐요.', '번 칸이 연습 횟수예요.', '번 칸을 3에 맞춰요.'],
            levels: { easy: { prompt: '20초 한 번 하게 맞춰요.', target: { plan: { work: 20, rounds: 1 } }, state: { plan: { work: 10, rest: 5, rounds: 1 } } } } },
          { prompt: '해 본 동작에 표시해요.', toolOptions: { title: '몸 펴기 점검' }, target: { selfCheck: ['팔을 뻗었어요', '어깨를 툭 내렸어요', '발끝으로 섰어요'] }, difficulty: 0.15,
            levels: { easy: { prompt: '해 본 두 동작에 표시해요.', target: { selfCheck: ['팔을 뻗었어요', '어깨를 툭 내렸어요'] } }, challenge: { prompt: '내 순서까지 표시해요.', target: { selfCheck: ['팔을 뻗었어요', '어깨를 툭 내렸어요', '발끝으로 섰어요', '내 순서로 해 봤어요'] } } },
            conclude: '팔 뻗고, 어깨 툭, 발끝 서기 — 몸을 펴면 마음도 풀려요.' },
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '팔을 하늘로 ___!', answer: '쭉' }] },
      notes: '20초·3번은 우리 반 연습 약속이다. 책상과 의자 사이 공간을 먼저 넓히고 제자리에서만 한다.',
    }),
    CALM({
      id: 'life.e12.calm-body.activity.stop-song', type: 'activity', title: '"멈춰, 숨 쉬고, 천천히" 노래',
      method: '멈춰 노래', tool: 'keyboard', minutes: 13,
      levels: { easy: '줄마다 끝 세 음만 듣고 따라 치고, 듣는 동안 건반이 비친다.', base: '"멈춰 숨 쉬고", "천천히 천천히" 한 줄 가락을 듣고 따라 친다.', challenge: '두 줄을 친 뒤 셋째 문항에서 같은 가락을 느린 빠르기로 들으며 따라 친다.' },
      activity: {
        title: '멈춰 노래 치기', tool: 'keyboard',
        teacher: '"멈춰(손바닥 앞으로), 숨 쉬고(배에 손), 천천히(두 손 아래로 천천히)!" 노래를 동작과 함께 두 번 불러 준 뒤 \'가락 듣기\'로 한 줄씩 들려준다. 음을 빠뜨린 학생에게 "노래 글자 하나에 건반 하나예요. 멈, 춰… 몇 번 쳤는지 세어 볼까요?"라고 묻는다. 셋째 문항에서 느리게 치면 마음도 느려지는지 반 전체가 느껴 보게 하고, 화날 때 마음속으로 이 노래를 부르면 된다고 짚는다.',
        task: '멈춰 노래 가락을 듣고 건반으로 따라 쳐요.', levels: { easy: { from: '도', to: '높은도', showWhileListening: true }, base: { from: '도', to: '높은도' }, challenge: { from: '도', to: '높은도' } },
        items: [
          MEL('"멈춰 숨 쉬고" 쳐요.', ['솔', '솔', '미', '레', '도'], 0.1),
          MEL('"천천히 천천히" 쳐요.', ['미', '미', '레', '도', '도', '레'], 0.15),
          { prompt: '"마음이 편해" 쳐요.', toolOptions: { melody: ['도', '레', '미', '레', '도'] }, target: { notes: ['도', '레', '미', '레', '도'] }, difficulty: 0.2,
            levels: { easy: { prompt: '"마음이 편해" 끝 세 음요.', toolOptions: { melody: ['미', '레', '도'] }, target: { notes: ['미', '레', '도'] } }, challenge: { prompt: '느리게 듣고 따라 쳐요.', toolOptions: { tempo: 60 } } },
            conclude: '화가 나면 "멈춰, 숨 쉬고, 천천히" — 노래처럼 마음을 달래요.' },
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '노랫말을 따라 써요.', text: '멈춰, 숨 쉬고, ___', answer: '천천히' }] },
      notes: '가락은 수업용으로 지은 짧은 노래다. 계획의 "건반 세 개"는 세 음(도·레·미)과 솔로 지었다. 소리는 건반이나 \'가락 듣기\'를 눌렀을 때만 난다.',
    }),
    CALM({
      id: 'life.e12.calm-body.activity.calm-corner', type: 'activity', title: '교실 마음 쉼터 꾸미기',
      method: '마음 쉼터 꾸미기', tool: 'collage', minutes: 14,
      levels: { easy: '쿠션(네모)·물병(긴 네모) 조각 2개 이상을 붙인다.', base: '쿠션·인형(동그라미)·물병·나뭇잎 조각을 4개 이상 붙인다.', challenge: '쉼터를 꾸민 뒤 붙일 약속 그림(별 조각 = "조용히 쉬어요")을 더하고 표시한다.' },
      activity: {
        title: '마음 쉼터 꾸미기', tool: 'collage',
        teacher: '"교실 한쪽에 마음이 쉬는 자리를 만든다면 무엇을 둘까요? 네모는 쿠션, 동그라미는 인형, 긴 네모는 물병, 나뭇잎은 화분이에요." 칠판에 조각 뜻을 그려 두고 시작한다. 조각을 붙일 때마다 "이것은 마음을 어떻게 달래 줄까요?"라고 묻는다. "쉼터에 가면 벌 받는 거예요"라는 말이 나오면 "쉼터는 벌 자리가 아니라 마음이 쉬었다 오는 자리예요. 쉬고 나서 선생님과 이야기해도 돼요"라고 답한다.',
        task: '조각을 붙여 마음이 쉬는 자리를 꾸며요.', levels: { easy: { shapes: ['square', 'rect'] }, base: { shapes: ['square', 'circle', 'rect', 'leaf'] }, challenge: { shapes: ['square', 'circle', 'rect', 'leaf', 'star'] } },
        items: [
          { prompt: '쿠션 네모를 붙여요.', toolOptions: {}, target: { has: [{ shape: 'square', min: 2 }] }, difficulty: 0.1,
            levels: { easy: { prompt: '쿠션 네모 하나를 붙여요.', target: { has: [{ shape: 'square', min: 1 }] } } } },
          { prompt: '인형과 물병을 붙여요.', toolOptions: {}, target: { has: [{ shape: 'circle', min: 1 }, { shape: 'rect', min: 1 }] }, difficulty: 0.15,
            levels: { easy: { prompt: '물병 긴 네모를 붙여요.', target: { has: [{ shape: 'rect', min: 1 }] } }, challenge: { prompt: '인형·물병·별을 붙여요.', target: { has: [{ shape: 'circle', min: 1 }, { shape: 'rect', min: 1 }, { shape: 'star', min: 1 }] } } } },
          { prompt: '쉼터를 꾸미고 표시해요.', toolOptions: {}, target: { selfCheck: ['쉼터를 꾸몄어요', '쓰는 법을 말했어요'], minPieces: 4 }, difficulty: 0.2,
            levels: { easy: { prompt: '꾸미고 표시해요.', target: { selfCheck: ['쉼터를 꾸몄어요', '쓰는 법을 말했어요'], minPieces: 2 } }, challenge: { prompt: '약속 별까지 표시해요.', target: { selfCheck: ['쉼터를 꾸몄어요', '쓰는 법을 말했어요', '약속 별을 붙였어요'], minPieces: 5 } } },
            conclude: '마음 쉼터는 쉬었다 오는 자리예요. 쉬고 나서 어른께 말해도 돼요.' },
        ],
      },
      worksheet: { items: [{ type: 'draw', prompt: '우리 반 마음 쉼터에 두고 싶은 것을 그려요.' }] },
      notes: '실제 교실에 쉼터를 둘지는 학급 사정에 따른다. 쉼터는 벌 자리가 아니며, 쉼터를 자주 쓰는 학생은 따로 살펴보고 필요하면 상담 선생님과 잇는다.',
    }),
    CALM({
      id: 'life.e12.calm-body.wrap.my-way', type: 'wrap', title: '나의 달래기 방법 고르기',
      method: '나의 달래기 방법 고르기', tool: 'sortboard', minutes: 6,
      levels: { easy: '교사가 방법 카드를 읽어 주고 "내 방법" 바구니에 하나를 함께 넣는다.', base: '오늘 해 본 방법 카드를 "내 방법" 바구니에 넣고, 친구를 다치게 하는 카드는 "안 해요"에 넣는다.', challenge: '방법을 고른 뒤 출구 2번에서 쉬는 시간·집 가운데 쓸 때를 고른다.' },
      wrap: {
        teacher: '"오늘 풍선 숨, 몸 펴기, 물 마시기, 멈춰 노래를 해 봤어요. 나에게 가장 좋은 방법은 무엇인가요?" 바구니에 넣을 때 정답은 없고 내 마음이 편해지는 것을 고르면 된다고 말한다. "친구 밀기"를 넣는 학생에게 "그건 친구가 다치는 방법이에요. 오늘 해 본 것 가운데서 골라 볼까요?"라고 묻는다. 마지막에 반 전체가 풍선 숨을 한 번 쉰다.',
        exitTicket: [
          { type: 'tool', tool: 'sortboard', options: { slots: ['내 방법', '안 해요'], cards: [C('breath', '풍선 숨'), C('push', '친구 밀기'), C('water', '물 마시기'), C('stretch', '몸 펴기'), C('song', '멈춰 노래')] }, prompt: '내 방법과 안 할 것을 나누어요.', target: { sort: { '내 방법': ['breath', 'water', 'stretch', 'song'], '안 해요': ['push'] } }, difficulty: 0.15 },
          { type: 'choice', prompt: '내 방법을 언제 써 볼까요?', options: ['쉬는 시간', '집에서', '둘 다'], answer: 2, difficulty: 0.1, explain: '화나거나 무서울 때 어디서든 써요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '나의 마음 달래기',
        items: [
          { type: 'check', prompt: '(혼자 보기) 해 보고 싶은 방법에 ✓ 해요.', options: ['풍선 숨', '몸 쭉 펴기', '물 마시기', '멈춰 노래'] },
          { type: 'draw', prompt: '마음을 달래는 내 모습을 그려요.' },
        ],
      },
      notes: '출구 1번은 친구를 다치게 하는 카드만 빼면 모두 맞는다. 출구 2번 "둘 다"가 정답이지만 쉬는 시간·집을 고른 학생에게도 "거기서도 꼭 써 봐요"라고 말해 준다.',
    }),
    CALM({
      id: 'life.e12.calm-body.wrap.tell-teacher', type: 'wrap', title: '그래도 힘들면 선생님께',
      method: '그래도 힘들면 선생님께', tool: 'story', minutes: 6,
      levels: { easy: '교사가 첫 장면을 놓아 주고 남은 두 장의 차례만 함께 놓는다.', base: '세 장면(숨 쉬어도 계속 슬퍼요 → 선생님께 가요 → 선생님이 들어 줘요)을 차례로 놓는다.', challenge: '차례를 놓은 뒤 출구 2번에서 선생님께 할 첫마디 카드를 고른다.' },
      wrap: {
        teacher: '"풍선 숨을 쉬어도 마음이 계속 무거우면 어떻게 할까요?" 세 장면을 차례로 놓은 뒤 반 전체가 "선생님, 제 마음이 계속 슬퍼요"를 따라 말한다. "혼자 참으면 돼요"라는 학생에게 "혼자 참으면 마음이 계속 무거워요. 선생님은 들어 주려고 기다리고 계셔요"라고 말해 준다. 달래기 방법을 써도 힘들면 어른께 말하는 것까지가 오늘의 방법이라고 짚는다.',
        exitTicket: [
          { type: 'tool', tool: 'story', options: { mode: 'order', slots: ['먼저', '다음', '끝'], cards: [C('listen', '선생님이 들어 줘요', { motif: 'sun' }), C('still', '계속 슬퍼요', { motif: 'rain' }), C('go', '선생님께 가요', { motif: 'house' })] }, prompt: '차례대로 놓아요.', target: { order: ['still', 'go', 'listen'] }, difficulty: 0.15 },
          { type: 'tool', tool: 'story', options: { mode: 'pick', basket: '첫마디', cards: [C('help', '"도와주세요"'), C('nothing', '"몰라요"'), C('sad', '"계속 슬퍼요"')] }, prompt: '선생님께 할 말을 모두 골라요.', target: { pick: ['help', 'sad'] }, difficulty: 0.15 },
          MOOD,
        ],
      },
      worksheet: {
        title: '그래도 힘들면',
        items: [
          { type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '그래도 힘들면 ___께 말해요.', answer: '선생님' },
          { type: 'draw', prompt: '선생님께 말하러 가는 내 모습을 그려요.' },
        ],
      },
      notes: CRISIS,
    }),
  ];

  // =====================================================================================================
  // 1학년 · 도와줄 어른에게 말해요
  const HELP = MOD('life.e12.help-adult', [1]);
  const T_HELP = [
    HELP({
      id: 'life.e12.help-adult.intro.helper-map', type: 'intro', title: '학교 안 도와줄 어른 찾기',
      method: '학교 안 도와줄 어른 찾기', tool: 'map', minutes: 6,
      levels: { easy: '교사가 교실·보건실 두 곳만 가리키며 함께 이름을 말한다.', base: '교실·보건실·상담실 세 곳의 이름과 계신 선생님을 시연을 보며 따라 말한다.', challenge: '세 곳을 본 뒤 우리 교실에서 보건실까지 가는 길을 손으로 따라가 말한다.' },
      intro: {
        teacher: '"학교에서 도와줄 어른은 어디에 계실까요? 담임 선생님은 교실에, 보건 선생님은 보건실에, 상담 선생님은 상담실에 계셔요." 시연 단추로 보건실에 핀이 꽂히는 모습을 보이고 곳마다 반 전체가 이름을 따라 말한다. "선생님께 가면 혼나요"라는 말이 나오면 "선생님은 도와주려고 기다리고 계셔요. 말하러 온 친구는 잘한 거예요"라고 답한다. 우리 학교 실제 위치(층·방 이름)를 손으로 가리켜 알려 준다.',
        student: '학교에서 도와줄 어른이 계신 곳의 이름을 따라 말해 보아요.',
        demo: { tool: 'map', options: { grid: [4, 3], places: SCHOOL, title: '우리 학교 도움 지도' }, sequence: [{ place: '보건실' }] },
        art: { draw: 'a simple paper school map with a classroom, a nurse office with a cross sign, a counseling room with a heart sign and a teachers office, a paper child walking toward a smiling teacher', banner: '도와줄 어른은 어디에?' },
      },
      notes: '칸 지도의 배치는 단순한 그림이다. 우리 학교 실제 배치로 바꿔 말해 준다.',
    }),
    HELP({
      id: 'life.e12.help-adult.intro.puppet', type: 'intro', title: '혼자 우는 토끼 인형',
      method: '토끼 인형의 고민 듣기', tool: 'emotion', minutes: 6,
      levels: { easy: '교사가 토끼 인형(또는 그림)을 보이며 마음 카드 하나(슬픔)를 함께 고른다.', base: '토끼 마음을 고르는 시연을 본 뒤 "누구에게 말할까?"에 반이 함께 답한다.', challenge: '토끼에게 해 줄 말("선생님께 같이 가자")을 반이 함께 정해 말한다.' },
      intro: {
        teacher: '"토끼가 혼자 구석에서 울고 있어요. 토끼 마음은 어떨까요?" 인형(없으면 그림)을 들고 토끼 목소리로 "아무한테도 말 못 하겠어…"라고 말한다. 시연 단추로 슬픔 카드가 바구니에 담기는 모습을 보인 뒤 "토끼는 누구에게 말하면 좋을까요?"라고 묻는다. "울면 부끄러워요"라는 말이 나오면 "우는 건 마음이 아프다는 신호예요. 부끄러운 게 아니에요"라고 답한다. 오늘은 도와줄 어른에게 짧은 말로 도움을 청하는 법을 배운다고 밝힌다.',
        student: '토끼 마음을 골라 보고, 토끼가 누구에게 말하면 좋을지 생각해요.',
        demo: { tool: 'emotion', options: { mode: 'pick', basket: '토끼 마음', cards: ['슬픔', '기쁨', '외로움', '신남'], shuffle: false }, sequence: [{ pick: ['슬픔', '외로움'] }] },
        art: { draw: 'a small paper rabbit sitting alone in a corner of a paper classroom with tears, a kind teacher in the distance turning toward the rabbit', banner: '토끼야, 누구에게 말할까?' },
      },
    }),
    HELP({
      id: 'life.e12.help-adult.activity.say-help', type: 'activity', title: '"도와주세요" 말풍선 채우기',
      method: '"도와주세요" 역할놀이', tool: 'story', minutes: 13,
      levels: { easy: '말풍선 빈칸 하나(무슨 일인지)를 카드로 채운다.', base: '말풍선 빈칸 둘("도와주세요"와 무슨 일인지)을 카드로 채운 뒤 짝과 소리 내어 해 본다.', challenge: '빈칸 둘을 채우고, 셋째 문항에서 내가 정한 상황 카드로 말풍선을 채워 짝과 해 본 것을 표시한다.' },
      activity: {
        title: '도움 말풍선 채우기', tool: 'story',
        teacher: '"선생님께 도움을 청할 때는 이렇게 말해요. \'선생님, 도와주세요. 배가 아파요.\' 짧게 말해도 괜찮아요." 말풍선을 채운 뒤 짝과 한 명은 학생, 한 명은 선생님이 되어 소리 내어 해 본다. "선생님이 바쁘시면 안 돼요"라는 학생에게 "바쁘셔도 \'선생님, 잠깐만요\' 하고 말하면 들어 주셔요"라고 답한다. 말하는 건 부끄러운 일이 아니라 용기라는 점을 짚는다.',
        task: '말풍선 빈칸에 알맞은 말 카드를 넣고 짝과 소리 내어 해요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          { prompt: '배가 아플 때 말을 채워요.', toolOptions: { mode: 'fill', slots: [{ id: 'f1', who: '나', label: '선생님, ___' }, { id: 'f2', who: '나', label: '___ 아파요.' }], cards: [C('help', '도와주세요'), C('belly', '배가'), C('later', '괜찮아요')] }, target: { fill: { f1: 'help', f2: 'belly' } }, difficulty: 0.1,
            levels: { easy: { prompt: '아픈 곳을 채워요.', toolOptions: { slots: [{ id: 'f2', who: '나', label: '선생님, ___ 아파요.' }], cards: [C('belly', '배가'), C('later', '괜찮아요')] }, target: { fill: { f2: 'belly' } } } } },
          { prompt: '친구랑 싸웠을 때 채워요.', toolOptions: { mode: 'fill', slots: [{ id: 'f1', who: '나', label: '선생님, ___' }, { id: 'f2', who: '나', label: '친구랑 ___.' }], cards: [C('help', '도와주세요'), C('fight', '싸웠어요'), C('fine', '몰라요')] }, target: { fill: { f1: 'help', f2: 'fight' } }, difficulty: 0.15,
            levels: { easy: { prompt: '무슨 일인지 채워요.', toolOptions: { slots: [{ id: 'f2', who: '나', label: '선생님, 친구랑 ___.' }], cards: [C('fight', '싸웠어요'), C('fine', '몰라요')] }, target: { fill: { f2: 'fight' } } } } },
          { prompt: '마음이 슬플 때 채워요.', toolOptions: { mode: 'fill', slots: [{ id: 'f1', who: '나', label: '선생님, ___' }, { id: 'f2', who: '선생님', label: '말해 줘서 ___.' }], cards: [C('sad', '슬퍼요'), C('thanks', '고마워'), C('go', '저리 가')] }, target: { fill: { f1: 'sad', f2: 'thanks' } }, difficulty: 0.2,
            levels: { easy: { prompt: '내 말을 채워요.', toolOptions: { slots: [{ id: 'f1', who: '나', label: '선생님, ___' }], cards: [C('sad', '슬퍼요'), C('go', '저리 가')] }, target: { fill: { f1: 'sad' } } },
              challenge: { prompt: '채우고 짝과 해 봐요.', target: { fill: { f1: 'sad', f2: 'thanks' } } } },
            conclude: '"선생님, 도와주세요. ○○해요." 짧게 말해도 어른은 도와주셔요.' },
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '선생님, ___. 배가 아파요.', answer: '도와주세요' }] },
      notes: '계획의 도전("내가 만든 상황으로 채우기")은 채점되는 카드로 대신하고, 내가 정한 상황은 짝 역할놀이에서 말로 해 본다. 상황은 배·싸움·슬픔처럼 가벼운 것만 쓰고, 학생의 실제 고민을 발표시키지 않는다.',
    }),
    HELP({
      id: 'life.e12.help-adult.activity.who-where', type: 'activity', title: '어디서 누구에게 도움 청할까',
      method: '어디서 누구에게', tool: 'sortboard', minutes: 14,
      levels: { easy: '집·학교 두 바구니에 어른 카드 4장을 넣고, 든 장 수가 보이며 틀리면 까닭을 듣고 되돌아온다.', base: '집·학교 두 바구니에 어른 카드 6장을 넣은 뒤 확인한다.', challenge: '"모르는 아저씨"·"처음 본 사람" 같은 함정 카드 2장이 더 들어와 어느 바구니에도 넣지 않는다.' },
      activity: {
        title: '도움 어른 바구니', tool: 'sortboard',
        teacher: '"집에서 곤란하면 누구에게 말할까요? 학교에서는요?" 카드를 읽어 주고 바구니에 넣게 한다. "모르는 아저씨"를 넣으려는 학생에게 "처음 보는 어른은 우리를 잘 몰라요. 아는 어른에게 말해요"라고 말해 준다. 놀이터처럼 둘 다 아닌 곳에서는 함께 온 보호자나 아는 어른을 찾는다고 짚는다(계획의 놀이터 칸은 바구니 대신 교사 말로 다룬다).',
        task: '도움을 청할 어른 카드를 집·학교 바구니에 나누어요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
        items: [
          SB2(['집', '학교'], '아플 때 말할 어른을 나누어요.', [C('mom', '엄마'), C('dad', '아빠'), C('grandpa', '할아버지')], [C('homeroom', '담임 쌤'), C('nurse', '보건 쌤'), C('counsel', '상담 쌤')], [C('stranger', '모르는 아저씨'), C('newman', '처음 본 사람')], null, 0.1),
          SB2(['집', '학교'], '슬플 때 말할 어른을 나누어요.', [C('aunt', '이모'), C('grandma', '할머니'), C('guard', '보호자')], [C('teacher', '선생님'), C('librarian', '사서 쌤'), C('office', '교무실 쌤')], [C('online', '게임 속 사람'), C('passer', '지나가는 사람')], null, 0.15),
          SB2(['집', '학교'], '무서울 때 말할 어른을 나누어요.', [C('mom2', '엄마'), C('dad2', '아빠'), C('uncle', '삼촌')], [C('homeroom2', '담임 쌤'), C('security', '지킴이 쌤'), C('nurse2', '보건 쌤')], [C('car', '차 탄 사람'), C('call', '전화 속 사람')], null, 0.2, { conclude: '집에서는 보호자, 학교에서는 선생님 — 아는 어른에게 말해요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '학교에서 아프면 누구에게?', options: ['보건 선생님', '모르는 사람'], answer: '보건 선생님' }] },
      notes: '가족 구성은 집마다 다르다. "엄마·아빠가 없어요"라는 학생에게 "함께 사는 어른, 나를 돌봐 주는 어른이 보호자예요"라고 답한다. 계획의 놀이터 칸은 바구니가 둘만 알맞아(카드 글 기준) 교사 말로 다룬다.',
    }),
    HELP({
      id: 'life.e12.help-adult.activity.help-song', type: 'activity', title: '"힘들 땐 말해요" 도움 노래',
      method: '도움 노래 부르기', tool: 'keyboard', minutes: 13,
      levels: { easy: '노랫말 박자만 리듬 블록 한 마디로 따라 놓는다(박 수가 보임).', base: '리듬 두 마디를 따라 놓고, 둘째 문항에서 "힘들 땐 말해요" 가락까지 건반으로 친다.', challenge: '리듬 두 마디를 내 리듬으로 채우고, 가락을 친 뒤 바꾼 노랫말로 부른 것을 표시한다.' },
      activity: {
        title: '도움 노래 치기', tool: 'keyboard',
        teacher: '"힘들 땐 말해요, 어른이 도와줘요" 노래를 손뼉과 함께 두 번 불러 준다. 첫째 문항은 손뼉 박자를 리듬 블록으로, 둘째 문항은 가락을 건반으로 친다. 박자를 놓치는 학생에게 "노래 글자를 손뼉 한 번씩 치며 다시 불러 볼까요? 힘, 들, 땐…"이라고 묻는다. 셋째 문항에서 "슬플 땐 말해요"처럼 노랫말을 바꿔 불러 보고, 어떤 마음이든 말하면 어른이 도와준다는 점을 짚는다.',
        task: '도움 노래의 리듬과 가락을 따라 쳐요.', levels: { easy: { from: '도', to: '높은도', showWhileListening: true }, base: { from: '도', to: '높은도' }, challenge: { from: '도', to: '높은도' } },
        items: [
          RHY('"힘들 땐 말해요" 리듬을 놓아요.', ['e', 'e', 'q', 'e', 'e', 'q', 'e', 'e', 'q', 'h'], 0.1),
          MEL('"힘들 땐 말해요" 가락을 쳐요.', ['솔', '솔', '미', '솔', '라', '솔'], 0.15),
          { prompt: '"어른이 도와줘요" 쳐요.', toolOptions: { melody: ['미', '레', '미', '솔', '미', '도'] }, target: { notes: ['미', '레', '미', '솔', '미', '도'] }, difficulty: 0.2,
            levels: { easy: { prompt: '"도와줘요" 끝 세 음요.', toolOptions: { melody: ['솔', '미', '도'] }, target: { notes: ['솔', '미', '도'] } }, challenge: { prompt: '치고 바꾼 말로 불러요.', target: { notes: ['미', '레', '미', '솔', '미', '도'], selfCheck: ['노랫말을 바꿔 불렀어요'] } } },
            conclude: '힘들 땐 말해요, 어른이 도와줘요 — 노래처럼 어른께 말해요.' },
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '노랫말을 따라 써요.', text: '힘들 땐 ___, 어른이 도와줘요.', answer: '말해요' }] },
      notes: '가락은 수업용으로 지은 짧은 노래다. 소리는 건반이나 \'가락 듣기\'를 눌렀을 때만 난다.',
    }),
    HELP({
      id: 'life.e12.help-adult.activity.hand-tree', type: 'activity', title: '손바닥 도움 나무',
      method: '손바닥 도움 나무', tool: 'collage', minutes: 14,
      levels: { easy: '손가락 자리에 도와줄 어른 조각(하트)을 3개 붙인다.', base: '다섯 손가락 자리에 도와줄 어른 조각을 5개 붙이고 손바닥 잎을 더한다.', challenge: '집 어른은 분홍 하트, 학교 어른은 파랑 동그라미로 색을 나누어 붙인다.' },
      activity: {
        title: '도움 손 꾸미기', tool: 'collage',
        teacher: '"내 손을 활동지에 대고 그려 볼까요? 손가락 하나에 도와줄 어른 한 명씩이에요. 화면에서는 하트 조각이 어른이에요." 조각을 붙일 때마다 "이 손가락은 누구예요?"라고 묻고 기다릴 반응("엄마요", "담임 선생님이요")을 듣는다. 한 명만 떠올리는 학생에게 "학교에서 아플 때는요? 책을 빌릴 때는요?"라고 물어 더 찾게 한다. 도와줄 어른이 다섯이나 있다는 것을 손을 펴 보이며 짚는다.',
        task: '손가락마다 도와줄 어른 조각을 붙여 도움 손을 만들어요.', levels: { easy: { shapes: ['heart', 'leaf'] }, base: { shapes: ['heart', 'leaf', 'circle'] }, challenge: { shapes: ['heart', 'leaf', 'circle'], colors: ['분홍', '파랑', '초록', '노랑'] } },
        items: [
          { prompt: '도와줄 어른 하트를 붙여요.', toolOptions: {}, target: { has: [{ shape: 'heart', min: 5 }] }, difficulty: 0.1,
            levels: { easy: { prompt: '어른 하트 3개를 붙여요.', target: { has: [{ shape: 'heart', min: 3 }] } } } },
          { prompt: '손바닥에 잎을 붙여요.', toolOptions: {}, target: { has: [{ shape: 'leaf', min: 2 }] }, difficulty: 0.15,
            levels: { easy: { prompt: '잎 하나를 붙여요.', target: { has: [{ shape: 'leaf', min: 1 }] } }, challenge: { prompt: '집은 분홍, 학교는 파랑요.', target: { has: [{ shape: 'heart', color: '분홍', min: 2 }, { shape: 'circle', color: '파랑', min: 2 }] } } } },
          { prompt: '도움 손을 꾸미고 표시해요.', toolOptions: {}, target: { selfCheck: ['어른을 붙였어요', '누구인지 말했어요'], minPieces: 5 }, difficulty: 0.2,
            levels: { easy: { prompt: '꾸미고 표시해요.', target: { selfCheck: ['어른을 붙였어요', '누구인지 말했어요'], minPieces: 3 } }, challenge: { prompt: '색을 나누고 표시해요.', target: { selfCheck: ['어른을 붙였어요', '누구인지 말했어요', '집·학교를 나눴어요'], minPieces: 5 } } },
            conclude: '도와줄 어른은 여럿이에요. 손을 펴면 다섯 명이 떠올라요.' },
        ],
      },
      worksheet: { items: [{ type: 'draw', prompt: '(혼자 보기) 손을 대고 그려 어른을 적어요.' }] },
      notes: '활동지 손 그림은 걷지 않는 혼자 보기 칸이다. 도와줄 어른을 떠올리기 어려워하는 학생은 따로 살펴보고 담임·상담 선생님이 먼저 다가간다.',
    }),
    HELP({
      id: 'life.e12.help-adult.wrap.promise-chant', type: 'wrap', title: '"혼자 참지 않아요" 약속 구호',
      method: '말하기 약속 구호', tool: 'timer', minutes: 6,
      levels: { easy: '교사와 함께 구호를 손뼉과 함께 한 번 외친다.', base: '구호 카드 차례를 맞추고 손뼉과 함께 두 번 외친다.', challenge: '두 번 외친 뒤 반이 정한 동작(손 번쩍 들기)을 끝에 붙인다.' },
      wrap: {
        teacher: '"혼자 참지 않아요(가슴 토닥), 어른께 말해요(손 번쩍), 말하면 도와줘요(두 팔 벌리기)!" 구호 카드 차례를 맞춘 뒤 손뼉과 함께 외친다. 출구 2번에서 "울면 부끄러워요"를 고른 학생에게 "울어도 괜찮아요. 우는 것도, 말하는 것도 용기예요"라고 말해 준다. 마지막 구호는 짝과 마주 보고 외친다.',
        exitTicket: [
          CHANT('말하기 약속', ['혼자 참지 않아요', '어른께 말해요', '말하면 도와줘요']),
          { type: 'choice', prompt: '울거나 도와 달라는 건?', options: ['부끄러워요', '괜찮아요', '안 돼요'], answer: 1, difficulty: 0.1, explain: '울어도, 도와 달라고 해도 괜찮아요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '혼자 참지 않아요',
        items: [
          { type: 'blank', prompt: '구호를 따라 써요.', text: '혼자 참지 않아요, ___께 말해요.', answer: '어른' },
          { type: 'draw', prompt: '어른께 "도와주세요" 말하는 내 모습을 그려요.' },
        ],
      },
      notes: CRISIS,
    }),
    HELP({
      id: 'life.e12.help-adult.wrap.helper-card', type: 'wrap', title: '내 도움 카드 고르기',
      method: '내 도움 카드 고르기', tool: 'emotion', minutes: 6,
      levels: { easy: '교사가 어른 카드를 읽어 주고 먼저 찾아갈 어른 한 명을 함께 고른다.', base: '먼저 찾아갈 어른 카드를 두 명까지 고르고, 그 어른에게 말할 때 얼마나 편한지 하트 눈금을 표시한다.', challenge: '고른 뒤 출구 3번에서 그 어른을 고른 까닭 카드를 고른다.' },
      wrap: {
        teacher: '"곤란할 때 제일 먼저 찾아갈 어른은 누구인가요? 정답은 없어요." 카드를 고르고 하트 눈금으로 그 어른에게 말하기가 얼마나 편한지 표시하게 한다. 눈금을 낮게 고른 학생에게 "조금 어려워도 괜찮아요. 오늘 배운 \'선생님, 도와주세요\'로 시작하면 돼요"라고 말해 준다. 고른 카드와 눈금은 발표시키지 않는다.',
        exitTicket: [
          { type: 'tool', tool: 'emotion', options: { mode: 'branch', situation: '곤란할 때 먼저 찾아갈 어른은?', choices: [{ id: 'home', text: '보호자', result: '집에서 들어 주셔요.' }, { id: 'homeroom', text: '담임 선생님', result: '교실에서 들어 주셔요.' }, { id: 'counsel', text: '상담 선생님', result: '상담실에서 들어 주셔요.' }, { id: 'stranger', text: '모르는 사람', result: '아는 어른에게 말해요.' }] }, prompt: '먼저 찾아갈 어른을 골라요.', target: { choice: ['home', 'homeroom', 'counsel'] }, difficulty: 0.1 },
          SCALE('그 어른에게 말하기', '편안함', '얼마나 편한가요?'),
          { type: 'choice', prompt: '그 어른을 고른 까닭은?', options: ['나를 아껴요', '잘 들어 줘요', '둘 다요'], answer: 2, difficulty: 0.1, explain: '나를 아끼고 잘 들어 주는 어른에게 말해요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '내 도움 카드',
        items: [
          { type: 'draw', prompt: '(혼자 보기) 먼저 찾아갈 어른을 그려요.' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '선생님, ___.', answer: '도와주세요' },
        ],
      },
      notes: '출구 1번은 아는 어른(보호자·담임·상담 선생님) 누구를 골라도 맞고, 모르는 사람만 다시 고르게 한다. 눈금은 정답이 없는 척도라 걷거나 평가하지 않는다. ' + CRISIS,
    }),
  ];

  // =====================================================================================================
  // 2학년 · 살아 있는 것은 모두 소중해요
  const LIFE = MOD('life.e12.precious-life', [2]);
  const BEAN = [{ value: 1, name: '1cm' }];
  const T_LIFE = [
    LIFE({
      id: 'life.e12.precious-life.intro.seed-wheel', type: 'intro', title: '강낭콩이 자라는 차례',
      method: '씨앗이 자라는 차례', tool: 'lifecycle', minutes: 6,
      levels: { easy: '교사가 씨앗·싹·꽃 세 장만 둥근 판에 놓으며 함께 이름을 말한다.', base: '씨앗→싹→꽃→열매 네 장이 둥근 판에 놓이는 시연을 보고 차례를 따라 말한다.', challenge: '네 장을 본 뒤 열매 속 씨앗이 다시 땅에 심어져 싹이 나는 "돌고 도는 차례"를 화살표로 짚어 말한다.' },
      intro: {
        teacher: '"작은 씨앗 하나가 어떻게 될까요? 씨앗에서 싹이 나고, 꽃이 피고, 열매가 맺혀요." 시연 단추로 카드가 둥근 판에 차례로 놓이는 모습을 보이고 \'차례대로 따라가 보기\'로 함께 짚는다. 반 전체가 웅크렸다가(씨앗) 손을 내밀고(싹) 두 팔을 벌리는(꽃) 동작을 한다. "씨앗은 살아 있지 않아요"라는 말이 나오면 "물과 햇빛을 주면 싹이 나요. 씨앗 속에도 생명이 들어 있어요"라고 답한다. 오늘은 살아 있는 것이 자라는 모습을 보고 생명을 아끼는 법을 배운다고 밝힌다.',
        student: '씨앗 → 싹 → 꽃 → 열매를 몸 동작으로 따라 해 보아요.',
        demo: { tool: 'lifecycle', options: { center: '강낭콩이 자라요', slots: 4, cards: [C('fruit', '꼬투리 열매'), C('seed', '씨앗', { motif: 'seed' }), C('flower', '꽃', { motif: 'flower' }), C('sprout', '싹', { motif: 'sprout' })] }, sequence: [{ order: ['seed', 'sprout', 'flower', 'fruit'] }] },
        art: { draw: 'a paper bean plant growing in a circle: a seed in soil, a small sprout, a plant with white flowers, and a plant with green pods, arrows looping back to the seed', banner: '씨앗 속에도 생명이 있어요', extra: [{ motif: 'sun', x: 300, y: 96 }] },
      },
    }),
    LIFE({
      id: 'life.e12.precious-life.intro.baby-pics', type: 'intro', title: '아기 동물 그림 보기',
      method: '아기 동물 사진 보기', tool: 'emotion', minutes: 6,
      levels: { easy: '교사가 아기 강아지·병아리 그림 두 장을 보이며 "귀여워요" 마음 하나를 함께 고른다.', base: '아기 동물 그림 네 장을 보고 드는 마음(귀여워요·지켜 줄래요)을 고르는 시연을 따라 말한다.', challenge: '아기 동물 마음을 고른 뒤 어미 동물은 아기를 보며 어떤 마음일지 말한다.' },
      intro: {
        teacher: '"아기 강아지, 병아리, 아기 고양이, 아기 오리예요. 이 그림을 보면 어떤 마음이 드나요?" 그림을 하나씩 보이며 반 전체가 아기 동물을 품에 안는 시늉을 한다. 시연 단추로 \'귀여워요\'·\'지켜 줄래요\' 카드가 바구니에 담기는 모습을 보인다. "작은 동물은 장난감 같아요"라는 말이 나오면 "아기 동물도 배고프고 아파요. 장난감과 무엇이 다를까요?"라고 되묻는다. 오늘은 작은 생명도 소중하다는 것을 알아본다고 밝힌다.',
        student: '아기 동물 그림을 보고 드는 마음을 짝에게 말해 보아요.',
        demo: { tool: 'emotion', options: { mode: 'pick', basket: '드는 마음', cards: [C('cute', '귀여워요'), C('scary', '무서워요'), C('protect', '지켜 줄래요'), C('toy', '장난감 같아')], shuffle: false }, sequence: [{ pick: ['cute', 'protect'] }] },
        art: { draw: 'paper baby animals in a meadow: a puppy, a chick, a kitten and a duckling, each next to its mother, soft paper flowers around', banner: '작은 생명도 소중해요' },
      },
    }),
    LIFE({
      id: 'life.e12.precious-life.activity.care-pick', type: 'activity', title: '생명 대하기 좋아요·안돼요',
      method: '좋아요/안돼요: 생명 대하기', tool: 'emotion', minutes: 13,
      levels: { easy: '장면 카드 3장, 놓으면 바로 맞는지 알려 주고 카드 뒤 결과가 처음부터 보인다.', base: '장면 카드 5장을 좋아요·안돼요로 나눈 뒤 확인하면 카드 뒤 결과가 보인다.', challenge: '안돼요 장면(꽃 꺾기·벌레 괴롭히기·물고기 두드리기) 하나를 보고 바꿀 행동을 보기 세 개 가운데 고른다.' },
      activity: {
        title: '생명 대하는 장면 나누기', tool: 'emotion',
        teacher: '"꽃에 물을 주면 꽃은 어떻게 될까요? 개미를 밟으면요?" 카드를 읽어 주고 나누게 한다. "개미는 작으니까 밟아도 돼요"라는 학생에게 "개미도 집에 돌아가고 먹이를 나르는 생명이에요. 작아도 하나뿐이에요"라고 답한다. 강아지 쓰다듬기는 주인께 먼저 묻고 살살 한다는 점을 짚는다. 살아 있는 것은 아프고 자란다는 점을 반복해 말한다.',
        task: '생명을 대하는 장면을 좋아요·안돼요로 나누어요.', levels: { easy: { live: true, instant: true, showBack: true }, base: {}, challenge: {} },
        items: [
          OKSORT('꽃밭 장면을 나누어요.', [C('water', '꽃에 물 주기', { back: '꽃이 활짝 펴요' }), C('look', '눈으로 보기', { back: '꽃이 그대로 예뻐요' }), C('ant', '개미 길 비키기', { back: '개미가 집에 가요' })], [C('step', '개미 밟기', { back: '개미가 다쳐요' }), C('pick', '꽃 꺾기', { back: '꽃이 시들어요' })],
            { prompt: '꽃을 꺾고 싶어요. 대신 할 일은?', situation: '예쁜 꽃을 꺾어 가고 싶어요.', choices: [{ id: 'pick', text: '그래도 꺾어요', result: '꽃이 금방 시들어요.', mood: '걱정' }, { id: 'draw', text: '그림으로 그려요', result: '꽃도 살고 그림도 남아요.', mood: '뿌듯함' }, { id: 'stomp', text: '밟고 지나가요', result: '꽃이 꺾여요.', mood: '속상함' }], answer: 'draw' }, 0.1),
          OKSORT('동물 장면을 나누어요.', [C('pet', '살살 쓰다듬기', { back: '꼬리를 흔들어요' }), C('feed', '먹이 주기', { back: '배가 불러요' }), C('quiet', '조용히 보기', { back: '편히 쉬어요' })], [C('pull', '꼬리 당기기', { back: '아파서 놀라요' }), C('chase', '쫓아다니기', { back: '무서워 숨어요' })],
            { prompt: '벌레가 보여요. 어떻게 해요?', situation: '놀이터에 작은 벌레가 기어가요.', choices: [{ id: 'poke', text: '막대로 찔러요', result: '벌레가 다쳐요.', mood: '걱정' }, { id: 'watch', text: '가만히 지켜봐요', result: '벌레가 풀숲으로 가요.', mood: '편안함' }, { id: 'catch', text: '꽉 잡아 넣어요', result: '벌레가 숨이 막혀요.', mood: '속상함' }], answer: 'watch' }, 0.15),
          OKSORT('교실 생명을 나누어요.', [C('plant', '화분 물 주기', { back: '잎이 파래요' }), C('fish', '어항 살피기', { back: '물고기가 놀아요' }), C('light', '햇빛 쪽 두기', { back: '쑥쑥 자라요' })], [C('tap', '어항 두드리기', { back: '물고기가 놀라요' }), C('tear', '잎 뜯기', { back: '화분이 아파요' })],
            { prompt: '어항을 두드리고 싶어요.', situation: '물고기가 안 움직여서 두드리고 싶어요.', choices: [{ id: 'tap', text: '그래도 두드려요', result: '물고기가 깜짝 놀라요.', mood: '걱정' }, { id: 'wait', text: '조용히 기다려요', result: '물고기가 헤엄쳐 와요.', mood: '기쁨' }, { id: 'shake', text: '어항을 흔들어요', result: '물이 쏟아져요.', mood: '놀람' }], answer: 'wait' }, 0.2,
            { conclude: '작은 생명도 하나뿐이에요. 물 주고, 살살 대하고, 지켜봐요.' }),
        ],
      },
      worksheet: { items: [{ type: 'table', prompt: '좋으면 ○, 안 되면 ×를 써요.', columns: ['장면', '○ / ×'], cells: [['꽃에 물 주기', ''], ['개미 밟기', ''], ['살살 쓰다듬기', '']], answer: '○, ×, ○' }] },
      notes: '모르는 동물은 만지지 않고 어른께 묻는다고 덧붙인다(물릴 수 있음).',
    }),
    LIFE({
      id: 'life.e12.precious-life.activity.grow-chart', type: 'activity', title: '강낭콩 키 그림그래프',
      method: '강낭콩 키 그림그래프', tool: 'chart', minutes: 14,
      levels: { easy: '3일 동안 자란 만큼을 그림그래프로 채우고 읽는다.', base: '5일 동안 하루에 자란 만큼을 그림그래프로 채우고, 가장 많이 자란 날을 읽는다.', challenge: '5일 그래프를 읽은 뒤 셋째 문항에서 물을 준 콩과 안 준 콩 그래프를 견주어 물을 안 주면 어떻게 되는지 고른다.' },
      activity: {
        title: '강낭콩 그림그래프(가상)', tool: 'chart',
        teacher: '"나리네 반 강낭콩이 날마다 얼마나 자랐는지 그림그래프로 나타내 봐요. 동그라미 하나가 1cm예요." 이 자료는 수업용 가상 기록이라고 먼저 말한다. 표를 소리 내어 읽고 그림을 채운 뒤 반 전체가 손가락으로 세어 본다. 가장 키가 큰 날과 가장 많이 자란 날을 헷갈리는 학생에게 "오늘은 하루에 \'자란 만큼\'을 세어요. 동그라미가 가장 많은 날은?"이라고 묻는다. 물과 햇빛을 받아야 자란다는 점에서 돌봄이 생명을 지킨다고 짚는다.',
        task: '표를 보고 강낭콩이 자란 만큼 그림을 채우고 읽어요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          { prompt: '표를 보고 그림을 채워요.', toolOptions: { type: 'picture', title: '하루에 자란 만큼(가상)', unit: 'cm', icons: BEAN, data: [['1일', 1], ['2일', 2], ['3일', 4], ['4일', 3], ['5일', 2]] }, target: { build: true }, difficulty: 0.1,
            levels: { easy: { prompt: '3일 동안 그림을 채워요.', toolOptions: { data: [['1일', 1], ['2일', 2], ['3일', 4]] } } } },
          { prompt: '가장 많이 자란 날은?', toolOptions: { type: 'picture', mode: 'read', title: '하루에 자란 만큼(가상)', unit: 'cm', icons: BEAN, data: [['1일', 1], ['2일', 2], ['3일', 4], ['4일', 3], ['5일', 2]], question: '가장 많이 자란 날은?', choices: ['1일', '2일', '3일', '4일', '5일'] }, target: { pick: 2 }, difficulty: 0.15,
            levels: { easy: { prompt: '3일 가운데 가장 많이 자란 날은?', toolOptions: { data: [['1일', 1], ['2일', 2], ['3일', 4]], choices: ['1일', '2일', '3일'] } } } },
          { prompt: '물 준 콩과 안 준 콩을 봐요.', toolOptions: { type: 'picture', mode: 'read', title: '5일 동안 자란 키(가상)', unit: 'cm', icons: BEAN, data: [['물 준 콩', 7], ['물 안 준 콩', 2]], question: '어느 콩이 더 컸나요?', choices: ['물 준 콩', '물 안 준 콩'] }, target: { pick: 0 }, difficulty: 0.2,
            levels: { challenge: { prompt: '물을 안 주면 어떻게 돼요?', toolOptions: { question: '물을 안 주면?', choices: ['더 잘 자라요', '잘 못 자라요'] }, target: { pick: 1 } } },
            conclude: '물과 햇빛을 주면 쑥쑥 자라요. 돌봐 주면 생명이 자라요.' },
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '강낭콩이 잘 자라려면?', options: ['물을 줘요', '그냥 둬요'], answer: '물을 줘요' }] },
      notes: '그래프 수는 수업용 가상 기록이다. 반에서 실제로 키운 기록이 있으면 그것으로 바꿔도 된다.',
    }),
    LIFE({
      id: 'life.e12.precious-life.activity.my-growth', type: 'activity', title: '나리가 자라 온 시간 띠',
      method: '아기 때부터 지금까지 나', tool: 'timeline', minutes: 13,
      levels: { easy: '그림 카드 3장(아기·유치원·지금)을 시간 띠에 놓는다.', base: '그림 카드 4장(아기·걸음마·유치원·지금)을 시간 띠에 놓는다.', challenge: '4장에 더해 "앞으로의 나(3학년)" 카드까지 5장을 놓는다.' },
      activity: {
        title: '자라 온 시간 띠', tool: 'timeline',
        teacher: '"나리가 아기였을 때부터 지금까지 어떻게 자랐을까요?" 카드를 읽어 주고 시간 띠 왼쪽이 옛날, 오른쪽이 앞으로라고 짚는다. 놓은 뒤 반 전체가 아기(웅크리기) → 걸음마(아장아장) → 지금(쭉 서기)을 몸으로 해 본다. "걸음마 전에 유치원에 가요"라는 학생에게 "유치원에 가려면 먼저 무엇을 할 줄 알아야 할까요?"라고 묻는다. 그동안 돌봐 준 사람이 있어 지금의 내가 있다는 점을 짚는다.',
        task: '자라는 차례대로 그림 카드를 시간 띠에 놓아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          { prompt: '나리가 자란 차례로 놓아요.', toolOptions: { mode: 'order', axis: ['아기 때', '앞으로'], slots: 4, cards: [C('now', '지금 2학년'), C('baby', '아기'), C('kinder', '유치원'), C('walk', '걸음마')] }, target: { order: ['baby', 'walk', 'kinder', 'now'] }, difficulty: 0.1,
            levels: { easy: { prompt: '세 장을 차례로 놓아요.', toolOptions: { slots: 3, cards: [C('now', '지금 2학년'), C('baby', '아기'), C('kinder', '유치원')] }, target: { order: ['baby', 'kinder', 'now'] } },
              challenge: { prompt: '앞으로의 나리까지 놓아요.', toolOptions: { slots: 5, cards: [C('now', '지금 2학년'), C('third', '3학년 나리'), C('baby', '아기'), C('kinder', '유치원'), C('walk', '걸음마')] }, target: { order: ['baby', 'walk', 'kinder', 'now', 'third'] } } } },
          { prompt: '할 수 있게 된 차례로 놓아요.', toolOptions: { mode: 'order', axis: ['아기 때', '앞으로'], slots: 4, cards: [C('run', '뛰어요'), C('lie', '누워 있어요'), C('stand', '걸어요'), C('crawl', '기어요')] }, target: { order: ['lie', 'crawl', 'stand', 'run'] }, difficulty: 0.15,
            levels: { easy: { prompt: '세 장을 차례로 놓아요.', toolOptions: { slots: 3, cards: [C('run', '뛰어요'), C('lie', '누워 있어요'), C('crawl', '기어요')] }, target: { order: ['lie', 'crawl', 'run'] } },
              challenge: { prompt: '자전거까지 차례로 놓아요.', toolOptions: { slots: 5, cards: [C('run', '뛰어요'), C('bike', '자전거 타요'), C('lie', '누워 있어요'), C('stand', '걸어요'), C('crawl', '기어요')] }, target: { order: ['lie', 'crawl', 'stand', 'run', 'bike'] } } } },
          { prompt: '나리가 먹은 것 차례예요.', toolOptions: { mode: 'order', axis: ['아기 때', '앞으로'], slots: 4, cards: [C('rice', '밥'), C('milk', '우유'), C('soft', '이유식'), C('porridge', '진밥')] }, target: { order: ['milk', 'soft', 'porridge', 'rice'] }, difficulty: 0.2,
            levels: { easy: { prompt: '세 장을 차례로 놓아요.', toolOptions: { slots: 3, cards: [C('rice', '밥'), C('milk', '우유'), C('porridge', '진밥')] }, target: { order: ['milk', 'porridge', 'rice'] } },
              challenge: { prompt: '급식까지 차례로 놓아요.', toolOptions: { slots: 5, cards: [C('rice', '밥'), C('lunch', '학교 급식'), C('milk', '우유'), C('soft', '이유식'), C('porridge', '진밥')] }, target: { order: ['milk', 'soft', 'porridge', 'rice', 'lunch'] } } },
            conclude: '아기 때부터 돌봐 준 사람 덕분에 쑥쑥 자랐어요. 나도 소중한 생명이에요.' },
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '아기 → 걸음마 → ___ → 지금', answer: '유치원' }] },
      notes: '학생 자신의 아기 사진·가족 이야기를 가져오게 하지 않는다(가정마다 사정이 다르다). 모든 문항은 가명 인물 나리의 자람이다.',
    }),
    LIFE({
      id: 'life.e12.precious-life.activity.garden', type: 'activity', title: '함께 사는 생명 정원',
      method: '생명 정원 꾸미기', tool: 'collage', minutes: 14,
      levels: { easy: '꽃(동그라미)·나무(나뭇잎) 조각을 모두 3개 이상 붙인다.', base: '꽃·나무·새(세모)·벌(마름모) 조각을 6개 이상 붙여 함께 사는 정원을 꾸민다.', challenge: '정원을 꾸민 뒤 정원을 지키는 약속 별을 붙이고 약속을 짝에게 말한 것까지 표시한다.' },
      activity: {
        title: '생명 정원 꾸미기', tool: 'collage',
        teacher: '"동그라미는 꽃, 나뭇잎은 나무, 세모는 새, 마름모는 벌이에요. 모두가 함께 사는 정원을 꾸며 볼까요?" 칠판에 조각 뜻을 그려 두고 시작한다. 조각을 붙일 때마다 "벌은 꽃에게 무엇을 해 줄까요? 나무는 새에게요?"라고 물어 생명이 서로 돕는다는 것을 짚는다. 벌을 빼려는 학생에게 "벌이 없으면 꽃이 열매를 맺기 어려워요. 작은 벌도 정원에 꼭 필요해요"라고 답한다.',
        task: '꽃·나무·새·벌 조각을 붙여 함께 사는 정원을 꾸며요.', levels: { easy: { shapes: ['circle', 'leaf'] }, base: { shapes: ['circle', 'leaf', 'triangle', 'diamond'] }, challenge: { shapes: ['circle', 'leaf', 'triangle', 'diamond', 'star'] } },
        items: [
          { prompt: '꽃과 나무를 붙여요.', toolOptions: {}, target: { has: [{ shape: 'circle', min: 2 }, { shape: 'leaf', min: 2 }] }, difficulty: 0.1,
            levels: { easy: { prompt: '꽃 하나, 나무 하나를 붙여요.', target: { has: [{ shape: 'circle', min: 1 }, { shape: 'leaf', min: 1 }] } } } },
          { prompt: '새와 벌을 붙여요.', toolOptions: {}, target: { has: [{ shape: 'triangle', min: 1 }, { shape: 'diamond', min: 1 }] }, difficulty: 0.15,
            levels: { easy: { prompt: '꽃이나 나무를 더 붙여요.', target: { pieces: { min: 3 } } } } },
          { prompt: '정원을 꾸미고 표시해요.', toolOptions: {}, target: { selfCheck: ['정원을 꾸몄어요', '서로 돕는 걸 말했어요'], minPieces: 6 }, difficulty: 0.2,
            levels: { easy: { prompt: '꾸미고 표시해요.', target: { selfCheck: ['정원을 꾸몄어요', '서로 돕는 걸 말했어요'], minPieces: 3 } }, challenge: { prompt: '약속 별까지 표시해요.', target: { selfCheck: ['정원을 꾸몄어요', '서로 돕는 걸 말했어요', '약속 별을 붙였어요'], minPieces: 7 } } },
            conclude: '꽃·나무·새·벌이 함께 살아요. 모두 소중한 생명이에요.' },
        ],
      },
      worksheet: { items: [{ type: 'draw', prompt: '정원을 지키는 내 모습을 그려요.' }] },
    }),
    LIFE({
      id: 'life.e12.precious-life.wrap.thank-song', type: 'wrap', title: '"해님 고마워" 생명 노래',
      method: '고마운 생명 노래', tool: 'keyboard', minutes: 6,
      levels: { easy: '교사와 함께 "해님 고마워" 한 줄만 부르며 끝 세 음을 친다.', base: '"해님 고마워, 물 고마워, 나도 소중해" 세 줄을 부르고 첫 줄 가락을 건반으로 친다.', challenge: '세 줄을 부른 뒤 "○○ 고마워"에 나만의 고마운 것을 넣어 한 줄 더 부른다.' },
      wrap: {
        teacher: '"해님 고마워(두 팔로 해 그리기), 물 고마워(손으로 물결), 나도 소중해(두 손 가슴)!" 노래를 두 번 부른 뒤 첫 줄 가락을 건반으로 친다. 출구 2번에서 "작은 벌레는 괜찮아요"를 고른 학생에게 "작은 벌레도 하나뿐인 생명이에요"라고 말해 준다. 마지막 줄 "나도 소중해"는 반 전체가 가슴에 손을 얹고 부른다.',
        exitTicket: [
          { type: 'tool', tool: 'keyboard', options: { from: '도', to: '높은도', melody: ['솔', '미', '솔', '미', '도'] }, prompt: '"해님 고마워" 가락을 쳐요.', target: { notes: ['솔', '미', '솔', '미', '도'] }, difficulty: 0.15 },
          { type: 'choice', prompt: '작은 벌레는 어떻게 대해요?', options: ['밟아도 돼요', '소중히 대해요', '괴롭혀요'], answer: 1, difficulty: 0.1, explain: '작은 벌레도 하나뿐인 생명이에요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '고마운 생명',
        items: [
          { type: 'blank', prompt: '노랫말을 따라 써요.', text: '해님 고마워, 물 고마워, 나도 ___', answer: '소중해' },
          { type: 'draw', prompt: '고마운 생명 하나를 그려요.' },
        ],
      },
      notes: '가락은 수업용으로 지은 짧은 노래다.',
    }),
    LIFE({
      id: 'life.e12.precious-life.wrap.precious-me', type: 'wrap', title: '나도 소중한 생명',
      method: '나도 소중한 생명', tool: 'body', minutes: 6,
      levels: { easy: '교사와 함께 쿵쿵 뛰는 심장이 있는 가슴 한 곳을 짚는다.', base: '오늘 고마운 몸 세 곳(심장이 있는 가슴·손목·발목)을 짚고 "고마워"를 말한다.', challenge: '세 곳을 짚은 뒤 출구 3번에서 발이 하는 일을 고른다.' },
      wrap: {
        teacher: '"가슴에 손을 대 보세요. 쿵쿵 뛰는 것이 느껴지나요? 심장이 하루 종일 나를 위해 일해요." 종이 몸을 짚은 뒤 짚은 곳마다 반 전체가 "고마워"라고 말한다. 종이 몸에는 손·발 칸이 없으니 손목·발목을 짚고 자기 손과 발을 흔들어 보게 한다. 출구 3번에서 헷갈리는 학생에게 "발로 무엇을 하며 여기까지 왔나요?"라고 묻는다. 내 몸도 소중한 생명이니 아끼자고 짚는다.',
        exitTicket: [
          { type: 'tool', tool: 'body', options: { mode: 'parts', parts: ['눈', '가슴', '배', '무릎'] }, prompt: '쿵쿵 심장이 있는 곳을 짚어요.', target: { parts: ['가슴'] }, difficulty: 0.1 },
          { type: 'tool', tool: 'body', options: { mode: 'parts', parts: ['귀', '가슴', '손목', '허리', '발목'] }, prompt: '고마운 세 곳(심장·손·발)을 짚어요.', target: { parts: ['가슴', '손목', '발목'] }, difficulty: 0.15 },
          { type: 'choice', prompt: '발이 하는 일은?', options: ['걸어요', '숨 쉬어요', '들어요'], answer: 0, difficulty: 0.1, explain: '발 덕분에 걷고 뛰어요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '나도 소중한 생명',
        items: [
          { type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '심장아, ___!', answer: '고마워' },
          { type: 'draw', prompt: '내 몸에게 고마운 일 하나를 그려요.' },
        ],
      },
      notes: '종이 몸에 손·발 칸이 없어 손목·발목으로 대신하고 학생이 자기 손발을 흔들어 보게 한다. 몸이 불편한 학생이 있으면 "할 수 있는 곳"으로 바꿔 말한다.',
    }),
  ];

  // =====================================================================================================
  // 2학년 · 친구 마음 살피기
  const FRIEND = MOD('life.e12.friend-heart', [2]);
  const T_FRIEND = [
    FRIEND({
      id: 'life.e12.friend-heart.intro.alone-scene', type: 'intro', title: '운동장 구석의 친구',
      method: '혼자 있는 친구 그림', tool: 'emotion', minutes: 6,
      levels: { easy: '교사가 그림 속 친구를 가리키며 마음 카드 하나(외로움)를 함께 고른다.', base: '그림 속 친구 마음을 두 가지(외로움·슬픔) 고르는 시연을 따라 말한다.', challenge: '마음을 고른 뒤 친구가 그렇게 된 까닭을 그림 단서(공을 혼자 들고 있음)에서 짐작해 말한다.' },
      intro: {
        teacher: '"운동장 구석에 바다가 혼자 앉아 있어요. 바다 얼굴과 어깨를 보세요. 바다 마음은 어떨까요?" 그림을 보이고 반 전체가 바다처럼 어깨를 웅크려 본다. 시연 단추로 외로움·슬픔 카드가 바구니에 담기는 모습을 보인다. "혼자 있고 싶은 거예요, 모른 척해요"라는 말이 나오면 "그럴 수도 있어요. 그럴 땐 \'괜찮아?\' 하고 물어보면 알 수 있어요"라고 답한다. 오늘은 친구 마음을 살피고 다정하게 다가가는 법을 배운다고 밝힌다.',
        student: '그림 속 바다처럼 어깨를 웅크려 보고, 바다 마음을 짝에게 말해요.',
        demo: { tool: 'emotion', options: { mode: 'pick', basket: '바다 마음', cards: ['외로움', '신남', '슬픔', '화남'], shuffle: false }, sequence: [{ pick: ['외로움', '슬픔'] }] },
        art: { draw: 'a paper schoolyard where a small paper child sits alone on a bench holding a ball with drooping shoulders, while other paper children play in the distance and one child looks toward them', banner: '친구 마음은 어떨까?' },
      },
      notes: '그림 속 바다의 일로만 이야기한다. 우리 반에서 혼자 있는 친구를 지목하게 하지 않는다.',
    }),
    FRIEND({
      id: 'life.e12.friend-heart.intro.face-guess', type: 'intro', title: '표정 맞히기 놀이',
      method: '표정 맞히기 놀이', tool: 'timer', minutes: 6,
      levels: { easy: '두 마음(기쁨·슬픔)만 흉내 내고 맞힌다(2번).', base: '네 마음(기쁨·슬픔·화남·무서움)을 짝과 번갈아 흉내 내고 맞힌다(4번).', challenge: '얼굴에 더해 몸짓(어깨 웅크리기·팔짱)까지 넣어 흉내 내고 맞힌다.' },
      intro: {
        teacher: '"선생님이 마음 카드를 보여 주면 한 사람은 10초 동안 얼굴로 흉내 내고, 짝은 5초 동안 맞혀요." 시연 단추로 타이머가 4번에 맞춰지는 모습을 보이고 짝 놀이를 한다. "슬픈 얼굴은 웃겨요"라며 놀리는 학생에게 "친구 얼굴이 진짜로 슬플 때 웃으면 친구 마음은 어떨까요?"라고 묻는다. 얼굴을 잘 보면 친구 마음을 알아챌 수 있다고 밝힌다.',
        student: '짝이 지은 표정을 보고 어떤 마음인지 맞혀 보아요.',
        demo: { tool: 'timer', options: { title: '표정 놀이(우리 반 약속)', labels: ['흉내', '맞히기'], plan: { work: 10, rest: 5, rounds: 1 } }, sequence: [{ plan: { work: 10, rest: 5, rounds: 4 } }] },
        art: { draw: 'two paper children facing each other, one making a big smiling face and the other guessing with a raised hand, small paper cards with sun, rain, storm and moon pictures between them', banner: '무슨 마음일까?' },
      },
      notes: '10초·5초·4번은 놀이 진행용 우리 반 약속이다.',
    }),
    FRIEND({
      id: 'life.e12.friend-heart.activity.kind-words', type: 'activity', title: '다정한 말 넣기',
      method: '다정한 말 넣기', tool: 'story', minutes: 13,
      levels: { easy: '말풍선 빈칸 하나를 다정한 말 카드로 채우고, 놓으면 바로 맞는지 알려 준다.', base: '말풍선 빈칸 둘을 다정한 말 카드로 채운다.', challenge: '다정한 말 카드가 더 섞여 있어 빈칸마다 내가 고른 다정한 말(둘 가운데 하나)을 넣는다.' },
      activity: {
        title: '다정한 말풍선', tool: 'story',
        teacher: '"바다가 혼자 있어요. \'괜찮아? ___ 같이 놀래?\' 빈칸에 무슨 말을 넣으면 바다가 웃을까요?" 카드를 읽어 주고 채운 뒤 짝과 소리 내어 말해 본다. "저리 가"를 넣는 학생에게 "그 말을 들으면 바다 어깨가 어떻게 될까요?"라고 묻는다. 다정한 말은 길지 않아도 되고 "괜찮아?" 한마디가 시작이라는 점을 짚는다.',
        task: '친구에게 할 다정한 말 카드를 말풍선 빈칸에 넣어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          { prompt: '혼자 있는 바다에게 말해요.', toolOptions: { mode: 'fill', slots: [{ id: 'f1', who: '나', label: '___? 바다야.' }, { id: 'f2', who: '나', label: '우리 ___?' }], cards: [C('ok', '괜찮아'), C('play', '같이 놀래'), C('go', '저리 가')] }, target: { fill: { f1: 'ok', f2: 'play' } }, difficulty: 0.1,
            levels: { easy: { prompt: '첫 빈칸을 채워요.', toolOptions: { slots: [{ id: 'f1', who: '나', label: '___? 바다야.' }], cards: [C('ok', '괜찮아'), C('go', '저리 가')] }, target: { fill: { f1: 'ok' } } },
              challenge: { prompt: '내가 고른 말로 채워요.', toolOptions: { cards: [C('ok', '괜찮아'), C('play', '같이 놀래'), C('go', '저리 가'), C('sad', '슬퍼 보여'), C('walk', '같이 걸을래')] }, target: { fill: { f1: ['ok', 'sad'], f2: ['play', 'walk'] } } } } },
          { prompt: '넘어진 나리에게 말해요.', toolOptions: { mode: 'fill', slots: [{ id: 'f1', who: '나', label: '나리야, ___?' }, { id: 'f2', who: '나', label: '___ 줄게.' }], cards: [C('hurt', '안 아파'), C('hand', '손 잡아'), C('lol', '하하 웃겨')] }, target: { fill: { f1: 'hurt', f2: 'hand' } }, difficulty: 0.15,
            levels: { easy: { prompt: '첫 빈칸을 채워요.', toolOptions: { slots: [{ id: 'f1', who: '나', label: '나리야, ___?' }], cards: [C('hurt', '안 아파'), C('lol', '하하 웃겨')] }, target: { fill: { f1: 'hurt' } } },
              challenge: { prompt: '내가 고른 말로 채워요.', toolOptions: { cards: [C('hurt', '안 아파'), C('hand', '손 잡아'), C('lol', '하하 웃겨'), C('okq', '괜찮아'), C('help', '일으켜')] }, target: { fill: { f1: ['hurt', 'okq'], f2: ['hand', 'help'] } } } } },
          { prompt: '그림을 망친 곰에게 말해요.', toolOptions: { mode: 'fill', slots: [{ id: 'f1', who: '나', label: '곰아, ___.' }, { id: 'f2', who: '나', label: '___ 그려 볼까?' }], cards: [C('fine', '괜찮아'), C('again', '다시 같이'), C('bad', '못 그렸네')] }, target: { fill: { f1: 'fine', f2: 'again' } }, difficulty: 0.2,
            levels: { easy: { prompt: '첫 빈칸을 채워요.', toolOptions: { slots: [{ id: 'f1', who: '나', label: '곰아, ___.' }], cards: [C('fine', '괜찮아'), C('bad', '못 그렸네')] }, target: { fill: { f1: 'fine' } } },
              challenge: { prompt: '내가 고른 말로 채워요.', toolOptions: { cards: [C('fine', '괜찮아'), C('again', '다시 같이'), C('bad', '못 그렸네'), C('nice', '색이 예뻐'), C('slow', '천천히')] }, target: { fill: { f1: ['fine', 'nice'], f2: ['again', 'slow'] } } } },
            conclude: '"괜찮아?" 한마디가 친구 마음을 따뜻하게 해요.' },
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '다정한 말을 써요.', text: '___? 같이 놀래?', answer: '괜찮아' }] },
    }),
    FRIEND({
      id: 'life.e12.friend-heart.activity.branch', type: 'activity', title: '갈림길: 친구가 울어요',
      method: '친구가 울 때 어떻게 할까', tool: 'dilemma', minutes: 14,
      levels: { easy: '첫 갈림에서 보기 가운데 한 번만 고른다.', base: '고른 뒤 이어지는 장면에서 한 번 더 고른다(갈림 2번).', challenge: '갈림 2번을 지나 끝에서 그렇게 한 까닭 카드 3장 가운데 하나를 고른다.' },
      activity: {
        title: '친구가 울 때 갈림길', tool: 'dilemma',
        teacher: '"바다가 교실 뒤에서 울고 있어요. 나는 어떻게 할까요?" 장면을 소리 내어 읽어 주고, 고르기 전에 반 전체가 손을 들어 어느 쪽인지 먼저 보이게 한다. "모른 척해요"를 고른 학생에게 "바다는 혼자 울면서 어떤 마음일까요?"라고 묻는다. 말을 걸었는데 바다가 계속 울거나 다쳤다고 하면 혼자 해결하지 않고 선생님께 함께 간다는 점을 짚는다. 고른 뒤 \'처음부터 다른 길\'로 다른 결과도 함께 본다.',
        task: '장면마다 할 일을 고르고 결과를 봐요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          DILEMMA('바다가 울어요. 골라요.', { text: '바다가 교실 뒤에서 혼자 울어요.', motif: 'rain', choices: [
            { id: 'ignore', text: '모른 척해요', result: '바다가 계속 혼자 울어요.', why: '모른 척하면 바다는 더 외로워요.' },
            { id: 'ask', text: '"괜찮아?" 말 걸어요', result: '바다가 "계속 슬퍼" 해요.', easyEnding: '바다가 고개를 끄덕였어요.', next: { text: '바다가 계속 눈물을 흘려요.', choices: [
              { id: 'teacher', text: '선생님께 같이 가요', result: '선생님이 바다 말을 들어 주셨어요.', ending: '바다 마음이 조금 가벼워졌어요.' },
              { id: 'secret', text: '둘만 비밀로 해요', result: '바다가 계속 혼자 힘들어요.', why: '계속 슬프면 어른께 함께 가요.' }] } },
            { id: 'call', text: '선생님을 불러요', result: '선생님이 바다 곁에 오셨어요.', ending: '선생님과 함께 바다를 도왔어요.' }] },
          [['ask', 'teacher'], ['call']], [{ id: 'care', text: '바다가 걱정돼서요' }, { id: 'none', text: '내 일이 아니라서요', why: '친구가 울면 곁에서 도울 수 있어요.' }, { id: 'loud', text: '시끄러워서요', why: '친구 마음을 먼저 생각해요.' }], 'care', 0.15),
          DILEMMA('나리가 넘어졌어요. 골라요.', { text: '나리가 넘어져 무릎을 잡고 울어요.', motif: 'rain', choices: [
            { id: 'laugh', text: '웃으며 지나가요', result: '나리가 더 속상해요.', why: '다친 친구를 보고 웃지 않아요.' },
            { id: 'ask', text: '"많이 아파?" 물어요', result: '나리가 "피가 나" 해요.', easyEnding: '나리가 고마워했어요.', next: { text: '무릎에서 피가 나요.', choices: [
              { id: 'nurse', text: '보건실에 같이 가요', result: '보건 선생님이 치료해 주셨어요.', ending: '나리가 웃으며 고마워했어요.' },
              { id: 'self', text: '내가 치료해 줘요', result: '어떻게 할지 몰라 당황해요.', why: '다친 일은 어른께 맡겨요.' }] } }] },
          ['ask', 'nurse'], [{ id: 'hurt', text: '다치면 어른이 도와서요' }, { id: 'fast', text: '빨리 놀고 싶어서요', why: '놀이보다 친구가 먼저예요.' }, { id: 'brave', text: '내가 의사라서요', why: '치료는 어른이 해요.' }], 'hurt', 0.2),
          DILEMMA('곰이 "말하지 마" 해요.', { text: '곰이 울며 "아무한테도 말하지 마" 해요.', motif: 'rain', choices: [
            { id: 'keep', text: '알았어, 비밀이야', result: '곰이 계속 혼자 슬퍼해요.', why: '걱정되는 비밀은 어른께 말해요.' },
            { id: 'with', text: '"같이 선생님께 가자"', result: '곰이 망설여요.', easyEnding: '곰과 함께 선생님께 갔어요.', next: { text: '곰이 "혼날까 봐 무서워" 해요.', choices: [
              { id: 'hand', text: '손잡고 같이 가요', result: '선생님이 곰 말을 들어 주셨어요.', ending: '곰이 "말하길 잘했어" 했어요.' },
              { id: 'leave', text: '그럼 말 안 해요', result: '곰이 계속 혼자 울어요.', why: '무서워해도 어른께 같이 가요.' }] } }] },
          ['with', 'hand'], [{ id: 'worry', text: '걱정되는 비밀이라서요' }, { id: 'promise', text: '약속은 꼭 지켜서요', why: '친구가 계속 힘들면 비밀보다 친구가 먼저예요.' }, { id: 'tattle', text: '고자질하고 싶어서요', why: '어른께 말하는 건 친구를 돕는 일이에요.' }], 'worry', 0.25,
          { conclude: '친구가 울면 "괜찮아?" 묻고, 계속 슬프거나 다쳤으면 어른께 같이 가요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '친구가 계속 울면?', options: ['선생님께 같이 가요', '모른 척해요'], answer: '선생님께 같이 가요' }] },
      notes: '친구가 우는 까닭은 정하지 않는다(원인을 하나로 단정하지 않음). 걱정되는 비밀은 지키지 않고 어른께 말해도 된다는 점을 꼭 짚는다. ' + CRISIS,
    }),
    FRIEND({
      id: 'life.e12.friend-heart.activity.role', type: 'activity', title: '나라면 어떻게 할까 역할놀이',
      method: '마음 살피기 역할놀이', tool: 'emotion', minutes: 13,
      levels: { easy: '장면마다 보기 2개 가운데 고르고, 고르면 결과가 바로 보인다.', base: '장면마다 보기 3개 가운데 고르고, 결과는 확인한 뒤에 보인다.', challenge: '보기 3개에 "어른께 알려요"가 더해져, 어른께 알려야 하는 장면에서는 그것을 골라낸다.' },
      activity: {
        title: '친구 마음 살피기', tool: 'emotion',
        teacher: '"나리가 아끼는 지우개를 잃어버렸어요. 나라면 어떻게 할까요?" 고른 뒤 짝과 한 명은 나리, 한 명은 나가 되어 해 본다. "내 지우개 아니니까 몰라요"라는 학생에게 "나리 얼굴을 보세요. 같이 찾아 주면 나리 마음은?"이라고 묻는다. 셋째 장면처럼 친구가 다쳤거나 계속 힘들어 보이면 어른께 알리는 것이 가장 좋은 도움이라는 점을 짚는다.',
        task: '장면을 듣고 나라면 할 행동을 골라요.', levels: { easy: {}, base: { revealAfterCheck: true }, challenge: { revealAfterCheck: true } },
        items: [
          { prompt: '나리가 지우개를 잃었어요.', toolOptions: { mode: 'branch', situation: '나리가 아끼는 지우개를 잃어버렸어요.', choices: [{ id: 'find', text: '같이 찾아요', result: '책상 밑에서 찾았어요.', mood: '기쁨' }, { id: 'ignore', text: '모른 척해요', result: '나리가 혼자 속상해요.', mood: '속상함' }, { id: 'laugh', text: '"덜렁이" 놀려요', result: '나리가 울먹여요.', mood: '슬픔' }] }, target: { choice: 'find' }, difficulty: 0.1,
            levels: { easy: { toolOptions: { choices: [{ id: 'find', text: '같이 찾아요', result: '책상 밑에서 찾았어요.', mood: '기쁨' }, { id: 'ignore', text: '모른 척해요', result: '나리가 혼자 속상해요.', mood: '속상함' }] } },
              challenge: { prompt: '지우개를 잃었어요(보기 4개).', toolOptions: { choices: [{ id: 'find', text: '같이 찾아요', result: '책상 밑에서 찾았어요.', mood: '기쁨' }, { id: 'ignore', text: '모른 척해요', result: '나리가 혼자 속상해요.', mood: '속상함' }, { id: 'laugh', text: '"덜렁이" 놀려요', result: '나리가 울먹여요.', mood: '슬픔' }, { id: 'adult', text: '선생님께 알려요', result: '분실물 상자를 같이 봤어요.', mood: '기쁨' }] }, target: { choice: ['find', 'adult'] } } } },
          { prompt: '바다가 놀이에 못 꼈어요.', toolOptions: { mode: 'branch', situation: '바다가 놀이에 끼지 못해 서 있어요.', choices: [{ id: 'invite', text: '"같이 하자" 해요', result: '바다가 웃으며 왔어요.', mood: '기쁨' }, { id: 'turn', text: '등 돌려요', result: '바다가 혼자 남아요.', mood: '외로움' }, { id: 'later', text: '"다음에" 해요', result: '바다가 고개를 숙여요.', mood: '슬픔' }] }, target: { choice: 'invite' }, difficulty: 0.15,
            levels: { easy: { toolOptions: { choices: [{ id: 'invite', text: '"같이 하자" 해요', result: '바다가 웃으며 왔어요.', mood: '기쁨' }, { id: 'turn', text: '등 돌려요', result: '바다가 혼자 남아요.', mood: '외로움' }] } },
              challenge: { prompt: '놀이에 못 꼈어요(보기 4개).', toolOptions: { choices: [{ id: 'invite', text: '"같이 하자" 해요', result: '바다가 웃으며 왔어요.', mood: '기쁨' }, { id: 'turn', text: '등 돌려요', result: '바다가 혼자 남아요.', mood: '외로움' }, { id: 'later', text: '"다음에" 해요', result: '바다가 고개를 숙여요.', mood: '슬픔' }, { id: 'adult', text: '선생님께 알려요', result: '선생님이 놀이를 같이 정해 주셨어요.', mood: '기쁨' }] }, target: { choice: ['invite', 'adult'] } } } },
          { prompt: '곰이 며칠째 혼자 울어요.', toolOptions: { mode: 'branch', situation: '곰이 며칠째 혼자 울고 밥도 안 먹어요.', choices: [{ id: 'ask', text: '"괜찮아?" 물어요', result: '곰이 "계속 슬퍼" 해요.', mood: '걱정' }, { id: 'ignore', text: '모른 척해요', result: '곰이 혼자 남아요.', mood: '외로움' }, { id: 'tease', text: '"울보" 놀려요', result: '곰이 더 슬퍼요.', mood: '슬픔' }] }, target: { choice: 'ask' }, difficulty: 0.2,
            levels: { easy: { toolOptions: { choices: [{ id: 'ask', text: '"괜찮아?" 물어요', result: '곰이 "계속 슬퍼" 해요.', mood: '걱정' }, { id: 'ignore', text: '모른 척해요', result: '곰이 혼자 남아요.', mood: '외로움' }] } },
              challenge: { prompt: '어른께 알릴 장면이에요. 골라요.', toolOptions: { choices: [{ id: 'ask', text: '"괜찮아?"만 해요', result: '곰이 계속 슬퍼해요.', mood: '걱정' }, { id: 'ignore', text: '모른 척해요', result: '곰이 혼자 남아요.', mood: '외로움' }, { id: 'tease', text: '"울보" 놀려요', result: '곰이 더 슬퍼요.', mood: '슬픔' }, { id: 'adult', text: '선생님께 같이 가요', result: '선생님이 곰을 도와주셨어요.', mood: '편안함' }] }, target: { choice: 'adult' } } },
            conclude: '친구 얼굴을 살피고 다정하게 다가가요. 계속 힘들어 보이면 어른께 함께 가요.' },
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '친구가 며칠째 울면?', options: ['어른께 알려요', '놀려요'], answer: '어른께 알려요' }] },
      notes: '계획의 단계별 장면 수(1개·2개)는 교구가 단계마다 같은 문항 수라 세 장면을 모두 두고 보기 수로 단계를 나눴다. 장면은 모두 가상 인물의 일이다. ' + CRISIS,
    }),
    FRIEND({
      id: 'life.e12.friend-heart.activity.heart-card', type: 'activity', title: '친구에게 줄 마음 카드',
      method: '친구에게 마음 카드 만들기', tool: 'collage', minutes: 14,
      levels: { easy: '하트·별 조각을 2개 이상 붙인다.', base: '하트·별 조각을 4개 이상 붙이고 카드 가운데 "힘내" 자리를 남긴다(글은 활동지에 쓴다).', challenge: '꾸민 뒤 큰 동그라미 말풍선 조각을 더하고 짝에게 카드 말을 들려준 것까지 표시한다.' },
      activity: {
        title: '마음 카드 꾸미기', tool: 'collage',
        teacher: '"힘들어 보이는 친구에게 줄 마음 카드를 만들어요. 하트는 \'좋아해\', 별은 \'힘내\'라는 뜻이에요." 조각을 붙이며 "이 카드를 받으면 친구 마음은?"이라고 묻는다. 화면에는 글자를 붙일 수 없으니 "힘내" 글은 활동지에 쓰게 한다. 카드를 꼭 누구에게 주어야 하는 것은 아니고, 만드는 동안 친구 마음을 떠올리는 것이 목표라고 짚는다.',
        task: '하트와 별 조각으로 친구에게 줄 마음 카드를 꾸며요.', levels: { easy: { shapes: ['heart', 'star'] }, base: { shapes: ['heart', 'star', 'circle'] }, challenge: { shapes: ['heart', 'star', 'circle'], sizes: ['s', 'm', 'l'] } },
        items: [
          { prompt: '하트 조각을 붙여요.', toolOptions: {}, target: { has: [{ shape: 'heart', min: 2 }] }, difficulty: 0.1,
            levels: { easy: { prompt: '하트 하나를 붙여요.', target: { has: [{ shape: 'heart', min: 1 }] } } } },
          { prompt: '"힘내" 별을 붙여요.', toolOptions: {}, target: { has: [{ shape: 'star', min: 2 }] }, difficulty: 0.15,
            levels: { easy: { prompt: '별 하나를 붙여요.', target: { has: [{ shape: 'star', min: 1 }] } }, challenge: { prompt: '별과 큰 말풍선을 붙여요.', target: { has: [{ shape: 'star', min: 2 }, { shape: 'circle', size: 'l', min: 1 }] } } } },
          { prompt: '카드를 꾸미고 표시해요.', toolOptions: {}, target: { selfCheck: ['카드를 꾸몄어요', '친구 마음을 떠올렸어요'], minPieces: 4 }, difficulty: 0.2,
            levels: { easy: { prompt: '꾸미고 표시해요.', target: { selfCheck: ['카드를 꾸몄어요', '친구 마음을 떠올렸어요'], minPieces: 2 } }, challenge: { prompt: '짝에게 들려주고 표시해요.', target: { selfCheck: ['카드를 꾸몄어요', '친구 마음을 떠올렸어요', '짝에게 들려줬어요'], minPieces: 5 } } },
            conclude: '마음 카드 한 장, 다정한 말 한마디가 친구에게 힘이 돼요.' },
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '카드에 쓸 말을 써요.', text: '___! 내가 옆에 있을게.', answer: '힘내' }] },
      notes: '교구에 글자 스티커가 없어 "힘내" 글은 활동지에 쓴다. 특정 친구를 정해 주게 하지 않는다.',
    }),
    FRIEND({
      id: 'life.e12.friend-heart.wrap.kind-chant', type: 'wrap', title: '"괜찮아? 옆에 있을게" 구호',
      method: '"내가 먼저 물어볼게" 구호', tool: 'keyboard', minutes: 6,
      levels: { easy: '교사와 함께 구호를 손뼉 박자에 맞춰 한 번 외친다.', base: '리듬 블록 두 마디를 따라 놓고 구호를 두 번 외친다.', challenge: '구호를 외친 뒤 박자를 느리게 바꿔 한 번 더 외친다.' },
      wrap: {
        teacher: '"괜찮아(짝짝)? 내가 옆에(짝짝) 있을게(짝)!" 손뼉 박자를 리듬 블록으로 놓은 뒤 반 전체가 두 번 외친다. 출구 2번에서 "모른 척해요"를 고른 학생에게 "친구가 슬퍼 보이면 먼저 \'괜찮아?\' 물어봐요. 그 한마디가 도움이에요"라고 말해 준다. 마지막은 짝과 마주 보고 외친다.',
        exitTicket: [
          RHY_EXIT('"괜찮아? 옆에 있을게" 리듬을 놓아요.', ['e', 'e', 'q', 'e', 'e', 'q', 'q', 'q', 'h']),
          { type: 'choice', prompt: '친구가 슬퍼 보이면?', options: ['모른 척해요', '"괜찮아?" 물어요', '놀려요'], answer: 1, difficulty: 0.1, explain: '먼저 "괜찮아?" 하고 물어요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '내가 먼저 물어볼게',
        items: [
          { type: 'blank', prompt: '구호를 따라 써요.', text: '___? 내가 옆에 있을게.', answer: '괜찮아' },
          { type: 'draw', prompt: '친구 곁에 있어 주는 내 모습을 그려요.' },
        ],
      },
    }),
    FRIEND({
      id: 'life.e12.friend-heart.wrap.tell-adult', type: 'wrap', title: '내가 도울 일·어른이 도울 일',
      method: '내가 도울 일·어른이 도울 일', tool: 'sortboard', minutes: 6,
      levels: { easy: '교사가 카드 4장을 읽어 주며 두 바구니에 함께 나눈다.', base: '카드 5장 가운데 "놀리기" 함정 카드를 남기고 내 칸·어른 칸에 나눈다.', challenge: '나눈 뒤 출구 2번에서 "말하지 마"라는 걱정되는 비밀을 어떻게 할지 고른다.' },
      wrap: {
        teacher: '"말 걸기, 같이 놀기는 내가 할 수 있어요. 다쳤거나 계속 울면 누가 도와야 할까요?" 카드를 읽어 주고 나누게 한다. "놀리기" 카드를 어디에 넣을지 묻는 학생에게 "놀리기는 도움이 아니라서 어느 바구니에도 넣지 않아요"라고 답한다. 출구 2번에서 "비밀 지켜요"를 고른 학생에게 "친구가 계속 힘든 비밀은 지키지 않아도 돼요. 어른께 말하는 건 친구를 돕는 일이에요"라고 말해 준다.',
        exitTicket: [
          SORT_EXIT('내 칸과 어른 칸에 나누어요.', ['내가 해요', '어른께 알려요'], [C('talk', '말 걸기'), C('play', '같이 놀기')], [C('hurt', '다쳤어요'), C('cry', '계속 울어요')], C('tease', '놀리기')),
          { type: 'choice', prompt: '"말하지 마" 하며 계속 울면?', options: ['비밀 지켜요', '어른께 말해요'], answer: 1, difficulty: 0.15, explain: '걱정되는 비밀은 어른께 말해요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '내가 도울 일, 어른이 도울 일',
        items: [
          { type: 'table', prompt: '내가 하면 ○, 어른께 알리면 △를 써요.', columns: ['장면', '○ / △'], cells: [['말 걸기', ''], ['다쳤어요', ''], ['계속 울어요', '']], answer: '○, △, △' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '걱정되는 비밀은 ___께 말해요.', answer: '어른' },
        ],
      },
      notes: CRISIS,
    }),
  ];

  // =====================================================================================================
  // 2학년 · 나는 소중한 사람
  const ME = MOD('life.e12.my-good', [2]);
  const GOODNO = ['좋은 점', '바꿀 행동'];
  const T_ME = [
    ME({
      id: 'life.e12.my-good.intro.mirror', type: 'intro', title: '거울 속 나에게 인사',
      method: '거울 속 나에게 인사', tool: 'emotion', minutes: 6,
      levels: { easy: '교사와 함께 "안녕, 소중한 나" 인사를 하고 마음 날씨 하나를 떠올린다.', base: '인사를 듣고 오늘 내 마음 날씨를 속으로 고른 뒤 손가락으로 크기(1~5)를 표시해 본다.', challenge: '마음 날씨를 떠올린 뒤 오늘 그 마음이 된 까닭 그림을 속으로 하나 떠올린다(발표하지 않는다).' },
      intro: {
        teacher: '"거울 속 나에게 인사해 볼까요? \'안녕, 소중한 나!\'" 손거울(없으면 두 손을 거울처럼)을 보며 반 전체가 따라 말한다. 시연 단추로 마음 날씨 카드가 바구니에 담기는 모습을 보이며 "선생님은 오늘 편안해요. 여러분은 속으로만 골라 봐요. 어떤 날씨든 괜찮아요"라고 말한다. "나는 소중하지 않아요"라는 말이 나오면 캐묻지 않고 "선생님에게 ○○는 아주 소중해요"라고 답한 뒤 수업 뒤 따로 살핀다. 오늘은 나의 좋은 점과 나를 아끼는 사람을 찾는다고 밝힌다.',
        student: '두 손을 거울처럼 들고 "안녕, 소중한 나!"라고 인사해요.',
        demo: { tool: 'emotion', options: { mode: 'pick', basket: '선생님 마음 날씨', cards: ['기쁨', '편안함', '걱정', '슬픔'], shuffle: false }, sequence: [{ pick: ['편안함'] }] },
        art: { draw: 'a paper child smiling at a round paper mirror where the reflection waves back, small paper weather symbols of sun, cloud and rain floating gently around', banner: '안녕, 소중한 나' },
      },
      notes: '학생의 마음 날씨는 속으로만 고르고 발표·기록하지 않는다. ' + CRISIS,
    }),
    ME({
      id: 'life.e12.my-good.intro.name-song', type: 'intro', title: '"○○는 소중해" 이름 노래',
      method: '이름 노래', tool: 'keyboard', minutes: 6,
      levels: { easy: '교사와 함께 이름 노래를 손뼉 박자로만 따라 부른다.', base: '"○○는 소중해" 가락 시연을 듣고 내 이름을 넣어 따라 부른다.', challenge: '내 이름으로 부른 뒤 짝 이름으로 바꿔 불러 준다.' },
      intro: {
        teacher: '"○○는 소중해, 정말 소중해!" 선생님 이름으로 먼저 불러 준 뒤 시연 단추로 가락을 들려준다. 반 전체가 자기 이름을 넣어 동시에 부른다(한 명씩 시키지 않는다). 이름을 넣기 쑥스러워하는 학생에게는 "나는 소중해"로 불러도 된다고 말해 준다. 이름이 있다는 것은 세상에 하나뿐인 사람이라는 뜻이라고 밝힌다.',
        student: '"○○는 소중해" 노래에 내 이름을 넣어 따라 불러요.',
        demo: { tool: 'keyboard', options: { from: '도', to: '높은도', melody: ['미', '미', '솔', '솔', '라', '라', '솔'] }, sequence: [{ notes: ['미', '미', '솔', '솔', '라', '라', '솔'] }] },
        art: { draw: 'paper children singing together with musical notes cut from colored paper, each child holding a small paper name tag shaped like a star', banner: '나는 소중해' },
      },
      notes: '가락은 수업용으로 지은 짧은 노래다. 이름은 반 전체가 동시에 부르고 한 명씩 시키지 않는다.',
    }),
    ME({
      id: 'life.e12.my-good.activity.good-pick', type: 'activity', title: '친구들의 좋은 점 찾기',
      method: '나의 좋은 점 고르기', tool: 'sortboard', minutes: 13,
      levels: { easy: '카드 4장, 든 장 수가 보이고 틀린 바구니에 넣으면 까닭을 듣고 되돌아온다.', base: '카드 6장을 좋은 점·바꿀 행동 바구니에 나눈다.', challenge: '"천천히 해도 끝까지 해요"처럼 잘하는 것이 아닌 좋은 점 카드 2장이 더 들어와 좋은 점 바구니에 넣는다.' },
      activity: {
        title: '좋은 점 바구니', tool: 'sortboard',
        teacher: '"나리, 바다, 곰에게도 좋은 점이 있어요. 잘 웃는 것, 잘 들어 주는 것도 좋은 점이에요." 카드를 읽어 주고 나누게 한다. "달리기를 못하면 좋은 점이 없어요"라는 학생에게 "끝까지 해 보는 것, 친구 말을 잘 들어 주는 것도 좋은 점이에요. 잘하는 게 달라도 모두 소중해요"라고 답한다. 바꿀 행동은 사람이 나쁜 게 아니라 바꾸면 되는 행동이라는 점을 짚는다. 활동지는 나의 좋은 점을 혼자 적는 칸이고, 짝이 내 좋은 점 하나를 말해 주는 시간을 덧붙인다.',
        task: '친구들의 좋은 점과 바꿀 행동을 바구니에 나누어요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
        items: [
          SB2(GOODNO, '나리의 카드를 나누어요.', [C('smile', '잘 웃어요'), C('help', '잘 도와요'), C('draw', '그림 그려요')], [C('push', '새치기해요'), C('mock', '친구 놀려요'), C('grab', '뺏어요')], [C('finish', '끝까지 해요'), C('hello', '인사 잘해요')], 0, 0.1),
          SB2(GOODNO, '바다의 카드를 나누어요.', [C('listen', '잘 들어 줘요'), C('share', '나눠 줘요'), C('sing', '노래해요')], [C('yell', '소리 질러요'), C('throw', '던져요'), C('mess', '어질러요')], [C('slow', '천천히 해요'), C('try', '다시 해 봐요')], 0, 0.15),
          SB2(GOODNO, '곰의 카드를 나누어요.', [C('plant', '꽃을 아껴요'), C('clean', '잘 치워요'), C('wait', '잘 기다려요')], [C('hit', '때려요'), C('lie', '거짓말해요'), C('cut', '끼어들어요')], [C('sorry', '사과해요'), C('thank', '고마워해요')], 0, 0.2, { conclude: '잘하는 것이 달라도 모두 좋은 점이 있어요. 나도 그래요.' }),
        ],
      },
      worksheet: { items: [{ type: 'check', prompt: '(혼자 보기) 나의 좋은 점에 ✓ 해요.', options: ['잘 웃어요', '잘 도와요', '끝까지 해요', '잘 들어 줘요'] }] },
      notes: '채점 카드는 모두 가상 인물의 것이다. 학생이 자기 좋은 점을 고르는 것은 걷지 않는 활동지 혼자 보기 칸에서만 한다. 계획의 "내 것 고르기"를 채점하면 자기 평가가 되므로 이렇게 바꿨다.',
    }),
    ME({
      id: 'life.e12.my-good.activity.body-care', type: 'activity', title: '내 몸 아끼기 차례',
      method: '내 몸 아끼기 차례', tool: 'story', minutes: 14,
      levels: { easy: '첫 장면이 놓여 있어 남은 두 장만 놓고, 놓으면 바로 맞는지 알려 준다.', base: '장면 세 장을 차례로 놓는다.', challenge: '틀린 장면 한 장이 섞여 빼고 놓으며, 셋째 문항에서는 하루 장면을 아침·낮·밤 시계 칸에 잇는다.' },
      activity: {
        title: '몸 아끼기 장면 차례', tool: 'story',
        teacher: '"밥 먹기 전에 무엇을 먼저 할까요?" 카드를 놓은 뒤 반 전체가 손 씻기(비비기) → 밥 먹기(숟가락) → 이 닦기(칫솔질)를 몸으로 해 본다. "자기 전에 게임을 해요"를 넣는 학생에게 "푹 자야 내일 몸이 힘이 나요. 자기 전에는 무엇을 할까요?"라고 묻는다. 내 몸을 아끼는 것도 나를 소중히 여기는 일이라고 짚는다.',
        task: '몸을 아끼는 장면 카드를 차례대로 놓아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          ORDER3('밥 먹을 때 차례로 놓아요.', [C('wash', '손 씻기', { motif: 'cloud' }), C('eat', '밥 먹기', { motif: 'sun' }), C('brush', '이 닦기', { motif: 'star' })], C('skip', '손 안 씻기'), 0.1),
          ORDER3('잠잘 때 차례로 놓아요.', [C('bath', '씻기', { motif: 'cloud' }), C('pajama', '잠옷 입기', { motif: 'house' }), C('sleep', '푹 자기', { motif: 'moon' })], C('game', '늦게까지 게임'), 0.15),
          { prompt: '하루 장면을 시계 칸에 이어요.', toolOptions: { mode: 'match', slots: [{ id: 'am', label: '아침' }, { id: 'noon', label: '낮' }, { id: 'night', label: '밤' }], cards: [C('sleep', '푹 자기', { motif: 'moon' }), C('breakfast', '아침밥', { motif: 'sun' }), C('play', '뛰어놀기', { motif: 'tree' })] }, target: { match: { am: 'breakfast', noon: 'play', night: 'sleep' } }, difficulty: 0.2,
            levels: { easy: { state: { at: { breakfast: 0, play: null, sleep: null } } }, challenge: { toolOptions: { cards: [C('sleep', '푹 자기', { motif: 'moon' }), C('late', '밤새 놀기', { motif: 'moon' }), C('breakfast', '아침밥', { motif: 'sun' }), C('play', '뛰어놀기', { motif: 'tree' })] } } },
            conclude: '손 씻고, 골고루 먹고, 푹 자요. 내 몸을 아끼는 일이에요.' },
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '밥 먹기 전에 ___를 씻어요.', answer: '손' }] },
      notes: '가정마다 생활 차례가 다르다. 정해진 시각이 아니라 "먼저·다음·끝" 차례만 다룬다.',
    }),
    ME({
      id: 'life.e12.my-good.activity.love-tree', type: 'activity', title: '나를 아끼는 사람 나무',
      method: '나를 아끼는 사람 나무', tool: 'collage', minutes: 13,
      levels: { easy: '나무에 사람 잎(초록 나뭇잎)을 3장 붙인다.', base: '나무에 사람 잎을 5장 붙이고 줄기(긴 네모)를 세운다.', challenge: '사람 잎 5장에 더해 고마운 말 잎(노랑 하트)을 2장 붙인다.' },
      activity: {
        title: '아끼는 사람 나무', tool: 'collage',
        teacher: '"나를 아끼는 사람은 누구일까요? 가족, 선생님, 친구, 이웃… 잎 하나에 한 사람씩 붙여요." 조각을 붙일 때마다 속으로 그 사람 얼굴을 떠올리게 한다. 떠올리기 어려워하는 학생에게 "선생님도 ○○를 아껴요. 선생님 잎부터 붙여 볼까요?"라고 말해 준다. 나를 아끼는 사람이 있다는 것만으로도 나는 소중한 사람이라고 짚는다.',
        task: '나무에 나를 아끼는 사람 잎을 붙여요.', levels: { easy: { shapes: ['leaf'] }, base: { shapes: ['leaf', 'rect'] }, challenge: { shapes: ['leaf', 'rect', 'heart'] } },
        items: [
          { prompt: '줄기와 첫 잎을 붙여요.', toolOptions: {}, target: { has: [{ shape: 'rect', min: 1 }, { shape: 'leaf', min: 1 }] }, difficulty: 0.1,
            levels: { easy: { prompt: '잎 하나를 먼저 붙여요.', target: { has: [{ shape: 'leaf', min: 1 }] } } } },
          { prompt: '사람 잎을 붙여요.', toolOptions: {}, target: { has: [{ shape: 'leaf', min: 5 }] }, difficulty: 0.15,
            levels: { easy: { prompt: '사람 잎 3장을 붙여요.', target: { has: [{ shape: 'leaf', min: 3 }] } }, challenge: { prompt: '잎과 고마운 말 하트요.', target: { has: [{ shape: 'leaf', min: 5 }, { shape: 'heart', min: 2 }] } } } },
          { prompt: '나무를 꾸미고 표시해요.', toolOptions: {}, target: { selfCheck: ['잎을 붙였어요', '얼굴을 떠올렸어요'], minPieces: 6 }, difficulty: 0.2,
            levels: { easy: { prompt: '꾸미고 표시해요.', target: { selfCheck: ['잎을 붙였어요', '얼굴을 떠올렸어요'], minPieces: 3 } }, challenge: { prompt: '고마운 말까지 표시해요.', target: { selfCheck: ['잎을 붙였어요', '얼굴을 떠올렸어요', '고마운 말을 떠올렸어요'], minPieces: 8 } } },
            conclude: '나를 아끼는 사람이 많아요. 나는 소중한 사람이에요.' },
        ],
      },
      worksheet: { items: [{ type: 'draw', prompt: '(혼자 보기) 나를 아끼는 사람을 그려요.' }] },
      notes: '가족 구성은 집마다 다르다. 이웃·선생님·친구도 나를 아끼는 사람이라고 넓게 말한다. 활동지는 걷지 않는다. 떠올리는 사람이 없다는 학생은 따로 살핀다.',
    }),
    ME({
      id: 'life.e12.my-good.activity.kind-me', type: 'activity', title: '나에게 하는 말 좋아요·안돼요',
      method: '나에게 하는 말 좋아요/안돼요', tool: 'emotion', minutes: 14,
      levels: { easy: '말 카드 3장, 놓으면 바로 맞는지 알려 주고 카드 뒤 결과 얼굴이 처음부터 보인다.', base: '말 카드 5장을 좋아요·안돼요로 나눈 뒤 확인하면 결과가 보인다.', challenge: '안돼요 말("나는 못해")을 좋아요 말로 바꾼다면 무엇이 좋을지 보기 세 개 가운데 고른다.' },
      activity: {
        title: '나에게 하는 말 나누기', tool: 'emotion',
        teacher: '"그림을 망쳤을 때 곰이 자기에게 \'나는 못해\'라고 말해요. 곰 얼굴은 어떨까요? \'다시 해 보자\'라고 말하면요?" 카드를 읽어 주고 나누게 한다. "나는 못해는 솔직한 말이에요"라는 학생에게 "속상한 마음은 괜찮아요. 그런데 \'아직 어려워, 다시 해 보자\'라고 하면 힘이 나지 않을까요?"라고 답한다. 친구에게 다정하게 말하듯 나에게도 다정하게 말한다고 짚는다.',
        task: '곰이 나에게 하는 말을 좋아요·안돼요로 나누어요.', levels: { easy: { live: true, instant: true, showBack: true }, base: {}, challenge: {} },
        items: [
          OKSORT('그림을 망친 곰의 말이에요.', [C('again', '다시 해 보자', { back: '힘이 나요' }), C('ok', '괜찮아', { back: '마음이 편해요' }), C('slow', '천천히 하자', { back: '차분해져요' })], [C('cant', '나는 못해', { back: '포기하게 돼요' }), C('bad', '나는 바보야', { back: '마음이 아파요' })],
            { prompt: '"나는 못해"를 바꿔요.', situation: '곰이 "나는 못해" 하고 붓을 놓았어요.', choices: [{ id: 'quit', text: '그만할래', result: '그림이 그대로예요.', mood: '속상함' }, { id: 'yet', text: '아직 어려워, 다시!', result: '곰이 붓을 다시 들었어요.', mood: '뿌듯함' }, { id: 'blame', text: '붓이 나빠', result: '마음이 그대로예요.', mood: '화남' }], answer: 'yet' }, 0.1),
          OKSORT('줄넘기에 걸린 토끼의 말이에요.', [C('try', '한 번 더', { back: '또 해 봐요' }), C('grow', '조금씩 늘어', { back: '웃음이 나요' }), C('good', '잘하고 있어', { back: '힘이 나요' })], [C('never', '난 안 돼', { back: '그만두게 돼요' }), C('hate', '내가 싫어', { back: '마음이 무거워요' })],
            { prompt: '"난 안 돼"를 바꿔요.', situation: '토끼가 줄에 걸려 "난 안 돼" 해요.', choices: [{ id: 'stop', text: '다신 안 해', result: '줄넘기가 멀어져요.', mood: '슬픔' }, { id: 'more', text: '어제보다 늘었어', result: '토끼가 다시 뛰어요.', mood: '뿌듯함' }, { id: 'hide', text: '아무도 보지 마', result: '혼자 속상해요.', mood: '걱정' }], answer: 'more' }, 0.15),
          OKSORT('받아쓰기를 틀린 다람쥐 말이에요.', [C('learn', '배우는 중이야', { back: '마음이 편해요' }), C('ask', '물어보자', { back: '알게 돼요' }), C('nice', '애썼어', { back: '뿌듯해요' })], [C('dumb', '나는 바보', { back: '마음이 아파요' }), C('give', '안 할래', { back: '배움이 멈춰요' })],
            { prompt: '"나는 바보"를 바꿔요.', situation: '다람쥐가 받아쓰기를 틀리고 "나는 바보" 해요.', choices: [{ id: 'cry', text: '숨어서 울어요', result: '혼자 슬퍼요.', mood: '슬픔' }, { id: 'learn', text: '틀린 걸 배웠어!', result: '다람쥐가 다시 써 봐요.', mood: '뿌듯함' }, { id: 'tear', text: '종이를 찢어요', result: '마음이 그대로예요.', mood: '화남' }], answer: 'learn' }, 0.2,
            { conclude: '친구에게처럼 나에게도 다정하게 말해요. "괜찮아, 다시 해 보자."' }),
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '나에게 할 다정한 말을 써요.', text: '괜찮아, ___ 해 보자.', answer: '다시' }] },
      notes: '"숨어서 울어요"는 우는 것이 틀렸다는 뜻이 아니라 혼자 숨으면 마음이 그대로라는 뜻으로 말해 준다. 학생에게 자기가 평소 하는 말을 발표시키지 않는다.',
    }),
    ME({
      id: 'life.e12.my-good.wrap.hug-self', type: 'wrap', title: '나를 안아 주는 동작',
      method: '나를 안아 주는 동작', tool: 'timer', minutes: 6,
      levels: { easy: '교사와 함께 두 팔로 나를 감싸고 "괜찮아"를 한 번 말한다.', base: '타이머를 10초씩 2번에 맞추고 두 번 나를 안아 주며 "괜찮아"를 말한다.', challenge: '두 번 안아 준 뒤 짝과 서로 칭찬 한마디를 주고받는다.' },
      wrap: {
        teacher: '"두 팔로 나를 꼭 감싸 보세요. 10초 동안 \'괜찮아, 나는 소중해\' 하고 속삭여요." 타이머를 2번에 맞춘 뒤 반 전체가 함께 한다. 쑥스러워 웃는 학생에게 "웃어도 괜찮아요. 내 몸을 토닥여 주는 것만으로도 돼요"라고 말해 준다. 출구 2번에서 "안 소중해요"를 고른 학생에게 "잘하는 게 달라도 우리 모두 소중해요"라고 말해 주고 수업 뒤 따로 살핀다.',
        exitTicket: [
          { type: 'tool', tool: 'timer', options: { title: '나를 안아 주기(우리 반 약속)', labels: ['안아요', '쉬기'], plan: { work: 10, rest: 5, rounds: 1 } }, prompt: '나를 안아 주기를 2번 맞춰요.', target: { plan: { rounds: 2 } }, difficulty: 0.1 },
          { type: 'choice', prompt: '잘하는 게 없다고 느끼면?', options: ['안 소중해요', '그래도 소중해요'], answer: 1, difficulty: 0.1, explain: '잘하는 것과 상관없이 우리 모두 소중해요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '나는 소중한 사람',
        items: [
          { type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '괜찮아, 나는 ___.', answer: '소중해' },
          { type: 'draw', prompt: '(혼자 보기) 나를 안아 주는 내 모습을 그려요.' },
        ],
      },
      notes: '10초·2번은 우리 반 약속이다. ' + CRISIS,
    }),
    ME({
      id: 'life.e12.my-good.wrap.help-reminder', type: 'wrap', title: '힘들 땐 말해요 다시 보기',
      method: '힘들 땐 말해요 다시 보기', tool: 'map', minutes: 6,
      levels: { easy: '교사와 함께 학교 지도에서 상담실 한 곳을 누른다.', base: '상담실을 누르고, 출구 2번에서 힘들 때 할 일을 고른다.', challenge: '출구 3번에서 집에서 말할 어른도 고른다.' },
      wrap: {
        teacher: '"이번 주에 배운 것을 다시 볼까요? 마음이 힘들 때 상담 선생님은 어디에 계셨지요?" 지도에서 상담실을 누른 뒤 우리 학교 실제 위치를 손으로 가리킨다. 출구 2번에서 "혼자 참아요"를 고른 학생에게 "혼자 참지 않아도 돼요. 담임 선생님, 상담 선생님, 보호자 누구에게든 말해요"라고 말해 준다. 마지막에 "힘들 땐 말해요!"를 반 전체가 외친다.',
        exitTicket: [
          { type: 'tool', tool: 'map', options: { grid: [4, 3], places: SCHOOL, title: '우리 학교 도움 지도' }, prompt: '상담 선생님이 계신 곳을 눌러요.', target: { place: '상담실' }, difficulty: 0.1 },
          { type: 'choice', prompt: '마음이 힘들 때는?', options: ['혼자 참아요', '어른께 말해요'], answer: 1, difficulty: 0.1, explain: '혼자 참지 않고 믿는 어른께 말해요.' },
          { type: 'choice', prompt: '집에서는 누구에게 말해요?', options: ['보호자', '모르는 사람'], answer: 0, difficulty: 0.1, explain: '집에서는 함께 사는 보호자에게 말해요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '힘들 땐 말해요',
        items: [
          { type: 'check', prompt: '(혼자 보기) 말할 수 있는 어른에 ✓ 해요.', options: ['보호자', '담임 선생님', '상담 선생님', '보건 선생님'] },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '힘들 땐 ___.', answer: '말해요' },
        ],
      },
      notes: '칸 지도의 배치는 단순한 그림이다. 우리 학교 실제 배치로 바꿔 말해 준다. ' + CRISIS,
    }),
  ];

  PaperLessons.registerModules([].concat(T_FEEL, T_CALM, T_HELP, T_LIFE, T_FRIEND, T_ME));
})();
