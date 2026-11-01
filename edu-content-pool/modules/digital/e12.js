/* 창체 법정교육 인터넷·스마트폰 과의존 예방 — 초1-2 모듈 내용(edu-module.v1). 형식·작성 규칙: MODULES_BUILD.md, 계획: framework/mandatory.json 의 digital 초1-2.
 * 근거: research-mandatory §1 인터넷·스마트폰 과의존 예방교육(지능정보화 기본법 제54조 — 초·중·고 학기별 1회 이상),
 *   §2 인터넷·스마트폰 과의존/디지털 시민 초: 사용 시간 조절 · 개인정보 지키기 · 예절.
 * 초1-2 기준: 소리로 읽어 주는 짧은 문항, 카드 6자 안팎, 좋아요/안돼요 고르기·따라 하기·노래·구호. 장면·인물은 직접 지은 가상 동물 친구다(토끼·곰).
 * 주제 3개(1학년 1 · 2학년 2) × 도입 2 · 활동 4 · 정리 2 = 24모듈.
 *
 * 같은 학년군 안전교육 사이버 중독 예방(modules/saf-cyber/e12.js)과 장면·문항이 겹치지 않게 썼다 — 그쪽이 '알람·눈과 몸·멈춤 신호·가족 약속'이라면
 *   여기는 '저절로 이어지는 다음 영상·끝 시각·다 쓴 기기가 쉬는 자리·화면 대신 하는 몸 놀이·내 정보 지키기·기기 빌리는 예절'이다.
 *   (그쪽 장면 카드 '밥 먹으며 보기·약속 시간에 끄기·떼써요'는 쓰지 않고, 시각도 그쪽 7시·6시·4시·3시 55분과 다른 3시·3시 30분·6시 30분을 쓴다.)
 *
 * 이 영역에서 늘 지키는 틀(모든 모듈):
 *   - 학생 자신의 사용 시간·즐겨 하는 게임·앱 이름은 묻거나 채점하지 않는다. 판단과 시각 맞추기는 모두 가상 동물 친구(토끼·곰)의 일로 하고,
 *     학생 쪽은 스스로 점검(selfCheck)과 '집에서 가족과 정해 보기'(활동지, 채점 없음)로만 둔다.
 *   - 특정 앱·게임·회사 이름은 쓰지 않는다('태블릿', '영상', '게임', '모르는 창'처럼 일반 낱말만).
 *   - 내 정보 주제는 주소·전화번호 같은 실제 값을 쓰게 하지 않는다(활동지에도 빈칸으로 받지 않는다). 이상한 화면을 본 일을 학생에게 묻지 않는다.
 *
 * 수치: 근거 파일에 초1-2 권장 사용 시간이 없다. 시각(3시·3시 30분·6시 30분)·타이머 초와 횟수는 모두 토끼네·우리 반 약속(연습용 값)이고
 *   권장 기준이 아니다 — 화면과 교사 메모에 그렇게 밝힌다.
 *
 * 사람 확인: (근거 파일에는 항목 제목만 있어 일반 디지털 시민·과의존 예방 교육 내용으로 쓴 문장 — 확인할 곳을 함께 적는다)
 *   - 영상이 저절로 이어지면 한 편이 끝난 곳에서 스스로 멈춘다, 다음 영상을 누르지 않는다
 *       (time-promise.intro.next-video · time-promise.activity.good-bad · time-promise.wrap.promise-chant) → 과학기술정보통신부·한국지능정보사회진흥원 스마트쉼센터
 *   - 끝 시각에 '멈추기 → 끄기 → 내려놓기' 차례로 마친다 (time-promise.activity.stop-timer) → 스마트쉼센터(유아동 과의존 예방 자료)
 *   - 다 쓴 기기는 모두가 보이는 거실 선반 같은 정한 자리에 두고, 잠자리·식탁에는 두지 않는다 (time-promise.activity.place-map) → 스마트쉼센터(가정 내 사용 규칙 자료)
 *   - 잠에서 깨어 다시 보지 않는다, 부르면 화면을 끄고 대답한다 (time-promise.activity.good-bad) → 스마트쉼센터
 *   - 심심할 때 화면 대신 몸 놀이·친구 놀이·무늬 놀이·노래 놀이를 할 수 있다 (play-instead 전체 — 체계도 source 도 '화면 밖 놀이 목록은 일반 지식, 근거 약함'이라 적음)
 *       → 스마트쉼센터(대안 활동 자료)
 *   - 이름·사는 곳·얼굴 사진은 화면 속 모르는 사람이나 게임 친구에게 알려 주지 않는다, "못 알려 줘요, 어른께 물을게요"라고 말한다
 *       (my-info.intro.treasure · my-info.activity.ask-scene · my-info.wrap.say-no · my-info.wrap.safe-check) → 개인정보보호위원회·한국인터넷진흥원(어린이 개인정보 보호 교육 자료)
 *   - 모르는 창·이상한 화면은 누르지 말고 닫거나 내려놓고, 가까이 있는 믿을 어른(보호자·담임 선생님·친구네 어른)께 보여 준다
 *       (my-info.intro.popup-song · my-info.activity.ask-scene · my-info.activity.tell-map) → 방송통신위원회·한국지능정보사회진흥원 디지털 시민 교육 자료
 *   - 남의 기기는 "써도 돼?" 묻고, 허락한 것만 쓰고, "고마워" 하며 돌려준다 — 사진첩 같은 남의 것은 열지 않는다 (my-info.activity.manner-steps)
 *       → 한국지능정보사회진흥원 디지털 시민 교육(디지털 예절) 자료
 *   - my-info.activity.tell-map: 집·교실·친구네 배치는 그림 지도일 뿐이다. 우리 학교에서 먼저 찾아갈 어른은 학교가 정한 대로 교사가 말로 바꿔 부른다.
 */
(function () {
  const MOD = (topic, grades) => (o) => Object.assign({ schema: 'edu-module.v1', domain: 'digital', band: '초1-2', topic, grades }, o);
  const MOOD = { type: 'mood', prompt: '오늘 공부를 마친 내 마음은 어떤가요?' };
  const cut = (p) => p.replace(/\.$/, '');
  const C = (id, text, more) => Object.assign({ id, text }, more);
  const ids = (a) => a.map((c) => (typeof c === 'string' ? c : c.id));

  // 좋아요/안돼요 나누기(emotion sort): 기본 5장(좋 3·안 2), 쉬움 3장(좋 2·안 1), 도전 안돼요 장면마다 바꿀 행동 카드를 잇기(match)
  const OKNO = ['좋아요', '안돼요'];
  const SORT5 = (prompt, ok, no, fix, d, more) => ({
    prompt, toolOptions: { mode: 'sort', slots: OKNO, cards: [ok[0], no[0], ok[1], no[1], ok[2]] }, target: { sort: { 좋아요: ids(ok), 안돼요: ids(no) } }, difficulty: d,
    levels: {
      easy: { prompt: `${cut(prompt)}(3장).`, toolOptions: { cards: [ok[0], no[0], ok[1]] }, target: { sort: { 좋아요: ids(ok.slice(0, 2)), 안돼요: ids(no.slice(0, 1)) } } },
      challenge: { prompt: fix.prompt, toolOptions: { mode: 'match', slots: no.map((c) => ({ id: c.id, label: c.text })), cards: fix.cards }, target: { match: fix.match } },
    },
    ...more,
  });
  // 칸 지도 핀(map): 쉬움 장소 2곳(이름 읽기 켬), 기본 4곳, 도전 6곳 + '왜 여기?' 보기
  const PIN = (prompt, base, extra, place, other, why, d, more) => ({
    prompt, toolOptions: { grid: [4, 3], places: base }, target: { place }, difficulty: d,
    levels: {
      easy: { toolOptions: { places: base.filter((p) => p.name === place || p.name === other) } },
      challenge: { prompt: why.prompt, toolOptions: { places: [...base, ...extra], ask: { q: why.q, choices: why.choices } }, target: { place, pick: why.answer } },
    },
    ...more,
  });
  // 가락 따라 치기(keyboard melody): 기본 다섯 음, 쉬움 끝 세 음, 도전 끝 음을 바꿔 다섯 음 짓기
  const MEL = (prompt, notes, endOn, d, more) => ({
    prompt, toolOptions: { melody: notes }, target: { notes }, difficulty: d,
    levels: {
      easy: { prompt: `${cut(prompt)}(세 음).`, toolOptions: { melody: notes.slice(-3) }, target: { notes: notes.slice(-3) } },
      challenge: { prompt: `끝을 "${endOn}"로 바꿔 쳐요.`, target: { compose: { length: notes.length, startOn: notes[0], endOn } } },
    },
    ...more,
  });
  // 무늬 빈칸(pattern fill): 기본 ABB, 쉬움 AB, 도전 내가 되풀이 무늬 만들기
  const MOTIF = (prompt, a, b, c, d, more) => ({
    prompt, toolOptions: { seq: [a, b, b, a, b, b, a, null, null] }, target: { fill: [b, b] }, difficulty: d,
    levels: {
      easy: { prompt: `${cut(prompt)}(둘씩).`, toolOptions: { seq: [a, b, a, b, a, b, null, null] }, target: { fill: [a, b] } },
      challenge: { prompt: '내 무늬를 두 번 되풀이해요.', toolOptions: { mode: 'make', palette: [a, b, c], length: 8 }, target: { rule: 'repeat', minRepeats: 2 } },
    },
    ...more,
  });
  // 장면 차례(timeline order): 기본 3장, 쉬움 첫 장면이 놓여 있음, 도전 첫·끝이 놓여 있고 빠진 가운데를 틀린 카드와 함께 고름
  const STEPS3 = (prompt, cards, wrong, d, more) => {
    const i = ids(cards);
    return {
      prompt, toolOptions: { mode: 'order', slots: ['먼저', '다음', '끝'], cards: [cards[2], cards[0], cards[1]] }, target: { order: i }, difficulty: d,
      levels: {
        easy: { state: { at: { [i[0]]: 0, [i[1]]: null, [i[2]]: null } } },
        challenge: { prompt: `${cut(prompt)} 빠진 장면은?`, toolOptions: { cards: [cards[2], wrong, cards[0], cards[1]] }, state: { at: { [i[0]]: 0, [i[2]]: 2, [i[1]]: null, [wrong.id]: null } } },
      },
      ...more,
    };
  };
  // 정리 출구: 구호 차례(timer order), 스스로 점검(timer), 그림 점검표(kitchen)
  const CHANT = (title, cards, prompt) => ({ type: 'tool', tool: 'timer', options: { title, cards: [cards[2], cards[0], cards[1]] }, prompt: prompt || '구호를 차례대로 놓아요.', target: { order: cards }, difficulty: 0.1 });
  const SELF = (title, list, prompt) => ({ type: 'tool', tool: 'timer', options: { title }, prompt: prompt || '해 본 것에 표시해요.', target: { selfCheck: list }, difficulty: 0.1 });
  const CHECK = (title, items, prompt) => ({ type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title, items }, prompt: prompt || '오늘 해 본 것에 표시해요.', target: { selfCheck: true }, difficulty: 0.1 });

  // =====================================================================================================
  // 1학년 · 화면 보는 시간 약속
  const TP = MOD('digital.e12.time-promise', [1]);
  const HOUSE = [{ name: '거실 선반', icon: 'house', at: [0, 0] }, { name: '식탁', icon: 'dot', at: [3, 0] }, { name: '침대', icon: 'dot', at: [0, 2] }, { name: '책상', icon: 'dot', at: [3, 2] }];
  const HOUSE_MORE = [{ name: '현관', icon: 'dot', at: [1, 1] }, { name: '욕실', icon: 'dot', at: [2, 1] }];
  const T_TIME = [
    TP({
      id: 'digital.e12.time-promise.intro.next-video', type: 'intro', title: '저절로 이어지는 토끼의 영상',
      method: '저절로 이어지는 영상 장면 보기', tool: 'story', minutes: 6,
      levels: { easy: '교사가 그림 2장(한 편 끝·다음 영상 시작)만 보이며 토끼가 멈출 곳을 손가락으로 고르게 한다.', base: '그림 3장(한 편 끝·다음 영상 시작·세 번째 영상) 이야기를 듣고 멈출 곳을 손가락으로 고른 뒤 시연을 본다.', challenge: '멈출 곳을 고른 뒤 멈춘 토끼가 할 일(정리하기·밖에서 놀기) 하나를 짝에게 말한다.' },
      intro: {
        teacher: '"토끼가 영상 한 편을 다 봤어요. 그런데 화면에 \'다음 영상\'이 저절로 나와요. 또 하나, 또 하나…" 그림 세 장을 하나씩 짚으며 들려주고, "토끼는 어디서 멈추면 좋을까요? 손가락으로 가리켜 보세요"라고 묻는다. 시연 단추로 \'한 편 끝\' 카드가 바구니에 담기는 모습을 보인다. "저절로 나오니까 끝까지 봐도 돼요"라는 말이 나오면 "영상은 끝이 없이 계속 나올 수 있어요. 그럼 토끼는 언제 멈출까요? 멈추는 사람은 누구일까요?"라고 되묻는다. 오늘은 시작과 끝 시각을 정하고 끝나면 스스로 멈추는 약속을 배운다고 밝힌다.',
        student: '토끼가 멈추면 좋을 그림을 손가락으로 가리켜 보아요.',
        demo: { tool: 'story', options: { mode: 'pick', basket: '멈출 곳', cards: [C('one', '한 편 끝', { motif: 'sun' }), C('next', '다음 영상'), C('third', '세 번째 영상')], shuffle: false }, sequence: [{ pick: ['one'] }] },
        art: { draw: 'a paper bunny sitting in front of a paper tablet where one video ends and a next video card pops up by itself, then another, a small paper clock on the wall', banner: '어디서 멈출까?' },
      },
      notes: '영상 이름·앱 이름은 말하지 않는다. "너는 몇 편 보니?"처럼 학생의 사용 시간을 묻지 않는다.',
    }),
    TP({
      id: 'digital.e12.time-promise.intro.stop-song', type: 'intro', title: '"시간이 됐어요" 노래 리듬',
      method: '"멈춰요" 노래 따라 치기', tool: 'keyboard', minutes: 6,
      levels: { easy: '"시간이 됐어요" 한 마디만 교사와 함께 손뼉으로 따라 친다.', base: '"시간이 됐어요, 화면을 꺼요" 두 마디를 리듬 블록 차례대로 손뼉으로 따라 친다.', challenge: '두 마디를 친 뒤 마지막 박에 화면 끄는 손짓(손바닥 내리기)을 넣어 한 번 더 친다.' },
      intro: {
        teacher: '"시간이 됐어요(짧게 넷, 길게 둘), 화면을 꺼요(짧게 둘, 길게 셋)!" 시연 단추로 리듬 블록이 놓이는 모습을 보이고, 블록 하나에 손뼉 한 번씩 반 전체가 따라 친다. 짧은 블록은 빨리, 긴 블록은 천천히 친다는 것을 손으로 보여 준다. "어른이 꺼 줘야 꺼져요"라는 말이 나오면 "노랫말을 다시 들어 봐요. \'화면을 꺼요\' — 누가 끌 수 있을까요?"라고 되묻는다.',
        student: '"시간이 됐어요, 화면을 꺼요" 노래를 손뼉에 맞춰 따라 해요.',
        demo: { tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 2, blocks: ['q', 'e', 'h', 'qr'] }, sequence: [{ rhythm: ['e', 'e', 'e', 'e', 'q', 'q', 'e', 'e', 'q', 'q', 'q'] }] },
        art: { draw: 'paper children clapping in a circle around a big paper clock, one child gently pressing a paper tablet button to turn it off, musical notes cut from colored paper', banner: '시간이 됐어요' },
      },
      notes: '노래는 수업용으로 지은 짧은 구호다. 소리는 블록을 누르거나 듣기 단추를 눌렀을 때만 난다.',
    }),
    TP({
      id: 'digital.e12.time-promise.activity.set-clock', type: 'activity', title: '토끼의 끝 시각 시계 맞추기',
      method: '시계 바늘로 끝 시각 정하기', tool: 'clock', minutes: 13,
      levels: { easy: '정각만 맞춘다(긴바늘 12 고정, 3시 시작 → 4시 끝), 짧은바늘 자리가 연하게 칠해져 있다.', base: '30분 단위로 시작(3시)과 끝(3시 30분)을 맞추고, 시계를 읽어 끄는 시각을 고른다.', challenge: '작은 눈금이 없는 시계에서 시작(4시 30분)과 끝(5시) 두 시각을 모두 맞추고 끄는 시각을 읽는다.' },
      activity: {
        title: '시작 시각과 끝 시각 맞추기', tool: 'clock',
        teacher: '"토끼네 가족은 3시에 영상을 시작해서 3시 30분에 끝내기로 약속했어요(토끼네 연습 약속)." 바늘을 맞추기 전에 "긴바늘이 6에 가면 몇 분일까요?"라고 묻고 반 전체가 팔로 긴바늘을 만들어 본다. 3시 30분에 짧은바늘을 3에 똑바로 두는 학생에게 "30분이 지나면 짧은바늘도 3과 4 사이 가운데로 가요"라고 말해 준다. "끝 시각이 돼도 영상이 남았으면 다 봐도 돼요"라는 말에는 "끝 시각은 영상이 아니라 시계가 알려 줘요. 시계가 끝이면 멈춰요"라고 짚는다.',
        task: '토끼네 약속 시각을 시계 바늘로 나타내요.', levels: { easy: { hourOnly: true, hourZone: true }, base: { minuteStep: 30 }, challenge: { minuteStep: 30, showMinuteMarks: false } },
        items: [
          { prompt: '3시에 시작해요. 맞춰요.', toolOptions: {}, target: { h: 3, m: 0 }, difficulty: 0.1,
            levels: { challenge: { prompt: '4시 30분에 시작해요.', target: { h: 4, m: 30 } } } },
          { prompt: '3시 30분에 끝내요. 맞춰요.', toolOptions: {}, target: { h: 3, m: 30 }, difficulty: 0.15,
            levels: { easy: { prompt: '4시에 끝내요. 맞춰요.', target: { h: 4, m: 0 } }, challenge: { prompt: '5시에 끝내요. 맞춰요.', target: { h: 5, m: 0 } } } },
          { prompt: '시계를 보고 끄는 시각을 골라요.', toolOptions: { readOnly: true, start: { h: 3, m: 30 }, ask: '토끼가 끄는 시각은?', choices: ['3시', '3시 30분', '4시 30분'] }, target: { pick: 1 }, difficulty: 0.15,
            levels: { easy: { toolOptions: { start: { h: 4, m: 0 }, choices: ['3시', '4시', '5시'] }, target: { pick: 1 } },
              challenge: { toolOptions: { start: { h: 5, m: 0 }, choices: ['4시 30분', '5시', '5시 30분'] }, target: { pick: 1 } } },
            conclude: '시작 시각과 끝 시각을 정하고, 시계가 끝을 알려 주면 멈춰요.' },
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '끝 시각이 되면 영상을 ___', answer: '멈춰요' }] },
      notes: '3시·3시 30분·4시 30분·5시는 토끼네 가상 약속(연습용 값)이고 권장 시간이 아니다. 학생의 집 시각이나 보는 시간을 묻지 않는다.',
    }),
    TP({
      id: 'digital.e12.time-promise.activity.stop-timer', type: 'activity', title: '타이머 울리면 멈추기 연습',
      method: '타이머 울리면 멈추기 연습', tool: 'timer', minutes: 14,
      levels: { easy: '멈춤 카드 두 장(멈춰요·꺼요)의 차례를 맞추고, 해 본 동작 두 개에 표시한다.', base: '멈춤 카드 세 장(멈춰요·꺼요·내려놔요)의 차례를 맞추고, 연습 타이머를 2번으로 맞춘 뒤 해 본 동작 세 개에 표시한다.', challenge: '타이머를 \'보기 20초·3번\'으로 맞춰 연습하고, 끝난 뒤 짝과 타이머 길이를 바꿔 한 번 더 해 본다(말로).' },
      activity: {
        title: '끝나는 신호에 멈추기', tool: 'timer',
        teacher: '"타이머가 끝나면 첫째, 멈춰요(손 멈춤). 둘째, 꺼요(검지로 꾹). 셋째, 내려놔요(두 손으로 책상에)." 카드 차례를 맞춘 뒤 손바닥을 화면 삼아 반 전체가 타이머에 맞춰 세 동작을 따라 한다. "한 장면만 더 보고 끌래요"라는 말이 나오면 "한 장면이 끝나면 또 한 장면이 나와요. 신호가 나면 바로 멈추는 게 약속이에요"라고 말한다. 내려놓기를 빼먹는 학생에게 "손에 들고 있으면 다시 켜고 싶어져요. 내려놓으면 몸이 쉬어요"라고 짚는다.',
        task: '끝나는 신호가 나면 멈추는 차례를 맞추고 따라 해요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          { prompt: '멈춤 차례로 카드를 놓아요.', toolOptions: { title: '신호가 나면', cards: ['내려놔요', '멈춰요', '꺼요'] }, target: { order: ['멈춰요', '꺼요', '내려놔요'] }, difficulty: 0.1,
            levels: { easy: { prompt: '멈춤 차례로 놓아요(2장).', toolOptions: { cards: ['꺼요', '멈춰요'] }, target: { order: ['멈춰요', '꺼요'] } } } },
          { prompt: '연습을 2번 하게 맞춰요.', toolOptions: { title: '멈춤 연습(우리 반 약속)', labels: ['보기', '멈추기'], plan: { work: 10, rest: 5, rounds: 1 } }, target: { plan: { rounds: 2 } }, difficulty: 0.15,
            levels: { challenge: { prompt: '보기 20초로 3번 맞춰요.', target: { plan: { work: 20, rounds: 3 } } } } },
          { prompt: '해 본 동작에 표시해요.', toolOptions: { title: '오늘 해 본 멈춤' }, target: { selfCheck: ['멈췄어요', '껐어요', '내려놨어요'] }, difficulty: 0.15,
            levels: { easy: { prompt: '해 본 동작에 표시해요(2개).', target: { selfCheck: ['멈췄어요', '껐어요'] } } },
            conclude: '신호가 나면 멈추고, 끄고, 내려놓아요.' },
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '차례를 따라 써요.', text: '멈춰요 → 꺼요 → ___', answer: '내려놔요' }] },
      notes: '타이머 초·횟수는 연습용 우리 반 약속이다. 실제 기기는 쓰지 않고 손바닥을 화면 삼아 연습한다.',
    }),
    TP({
      id: 'digital.e12.time-promise.activity.good-bad', type: 'activity', title: '좋아요·안돼요 화면 습관',
      method: '좋아요/안돼요: 화면 습관', tool: 'emotion', minutes: 13,
      levels: { easy: '장면 카드 3장을 좋아요·안돼요로 나누고, 놓으면 바로 맞는지 알려 준다.', base: '장면 카드 5장을 좋아요·안돼요로 나눈 뒤 확인한다.', challenge: '안돼요 장면 두 개마다 바꿀 행동 카드를 골라 잇는다(헷갈리는 카드 한 장이 섞인다).' },
      activity: {
        title: '토끼의 화면 습관 나누기', tool: 'emotion',
        teacher: '"토끼가 이렇게 하면 좋아요일까요, 안돼요일까요?" 카드를 읽어 줄 때마다 반 전체가 엄지를 위(좋아요)나 아래(안돼요)로 먼저 보이고 놓는다. "몰래 켜도 아무도 모르면 괜찮아요"라는 학생에게 "보는 사람이 없어도 약속은 토끼 몸과 마음을 지켜 줘요"라고 묻고 답한다. "깨서 또 봐요"를 좋아요에 두는 학생에게 "밤에 화면을 보면 아침에 토끼 몸은 어떨까요?"라고 묻는다. 안돼요 장면을 한 토끼는 나쁜 토끼가 아니라 행동을 바꾸면 된다는 점을 짚는다.',
        task: '토끼의 화면 습관을 좋아요·안돼요로 나누어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          SORT5('영상 볼 때 습관을 나누어요.', [C('one', '한 편만 봐요'), C('up', '끄고 일어나요'), C('stopnext', '다음 영상 멈춤')], [C('swipe', '계속 넘겨요'), C('sneak', '몰래 켜요')],
            { prompt: '안돼요 장면을 바꿔 이어요.', cards: [C('fone', '한 편만 봐요'), C('ask', '물어보고 켜요'), C('more', '더 볼래요')], match: { swipe: 'fone', sneak: 'ask' } }, 0.1),
          SORT5('부를 때 습관을 나누어요.', [C('yes', '"네!" 대답해요'), C('play', '끄고 같이 놀아요'), C('tidy', '끄고 정리해요')], [C('deaf', '못 들은 척해요'), C('again', '자꾸 다시 켜요')],
            { prompt: '안돼요 장면을 바꿔 이어요.', cards: [C('fyes', '"네!" 대답해요'), C('off', '끈 채 놀아요'), C('later', '나중에 대답')], match: { deaf: 'fyes', again: 'off' } }, 0.15),
          SORT5('잘 시간 습관을 나누어요.', [C('book', '그림책 봐요'), C('rest', '기기 재워요'), C('night', '잘 자 인사')], [C('wake', '깨서 또 봐요'), C('late', '늦게까지 봐요')],
            { prompt: '안돼요 장면을 바꿔 이어요.', cards: [C('sleep', '다시 자요'), C('ontime', '정한 때 꺼요'), C('peek', '살짝 봐요')], match: { wake: 'sleep', late: 'ontime' } }, 0.2,
            { conclude: '한 편 끝나면 멈추고, 부르면 끄고 대답하고, 밤에는 기기도 재워요.' }),
        ],
      },
      worksheet: { items: [{ type: 'table', prompt: '좋으면 ○, 안 되면 ×를 써요.', columns: ['장면', '○ / ×'], cells: [['한 편만 봐요', ''], ['계속 넘겨요', ''], ['"네!" 대답해요', ''], ['깨서 또 봐요', '']], answer: '○, ×, ○, ×' }],
        easy: [{ type: 'choice', prompt: '좋은 습관에 ○ 해요.', options: ['한 편만 봐요', '몰래 켜요'], answer: '한 편만 봐요' }] },
    }),
    TP({
      id: 'digital.e12.time-promise.activity.place-map', type: 'activity', title: '다 쓴 기기가 쉬는 자리',
      method: '기기를 두는 자리 정하기', tool: 'map', minutes: 14,
      levels: { easy: '장소 두 곳만 있는 지도에서 핀을 꽂고, 놓은 칸의 이름이 바로 보인다.', base: '토끼네 집 네 곳(거실 선반·식탁·침대·책상) 가운데 알맞은 곳에 핀을 꽂는다.', challenge: '현관·욕실까지 여섯 곳이 있는 지도에서 꽂고 \'왜 여기?\' 보기를 고른다. 가족과 같이 정할 곳은 활동지에서 하나 고른다.' },
      activity: {
        title: '토끼네 집 지도에 기기 자리 꽂기', tool: 'map',
        teacher: '"토끼가 영상을 다 봤어요. 태블릿은 어디서 쉬면 좋을까요?" 핀을 꽂기 전에 그 자리에 두면 무엇이 좋은지 한 사람씩 말하게 한다. 침대 옆을 "가까워서 좋아요"라고 하는 학생에게 "잠자리에 있으면 자다가도 켜고 싶어지지 않을까요?"라고 묻는다. 식탁에 두는 것을 괜찮다는 학생에게 "식탁은 가족이 얼굴 보고 이야기하는 자리예요"라고 짚는다. 집마다 방이 다르니 우리 집에서는 어디가 좋을지 가족과 정해 보라고 한다.',
        task: '토끼네 집 지도에서 기기 자리에 핀을 꽂아요.', levels: { easy: { readout: true }, base: {}, challenge: {} },
        items: [
          PIN('다 본 태블릿이 쉬는 곳에 꽂아요.', HOUSE, HOUSE_MORE, '거실 선반', '침대', { prompt: '쉬는 곳에 꽂고 까닭도 골라요.', q: '왜 선반이에요?', choices: ['모두 보이는 곳', '몰래 보려고'], answer: 0 }, 0.1),
          PIN('잘 때 두지 않는 곳에 꽂아요.', HOUSE, HOUSE_MORE, '침대', '거실 선반', { prompt: '잘 때 두지 않는 곳과 까닭은?', q: '왜 안 둬요?', choices: ['푹 자려고', '더 보려고'], answer: 0 }, 0.15),
          PIN('밥 먹을 때 두지 않는 곳에 꽂아요.', HOUSE, HOUSE_MORE, '식탁', '책상', { prompt: '밥 먹을 때 두지 않는 곳과 까닭은?', q: '왜 안 둬요?', choices: ['가족과 이야기', '영상 보려고'], answer: 0 }, 0.2,
            { conclude: '다 쓴 기기는 정한 자리에서 쉬어요. 잠자리와 식탁에는 두지 않아요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '다 쓴 기기를 둘 곳에 ○ 해요.', options: ['정한 선반', '내 베개 옆'], answer: '정한 선반' }],
        easy: [{ type: 'choice', prompt: '잘 때 기기를 두지 않는 곳에 ○ 해요.', options: ['침대', '거실 선반'], answer: '침대' }] },
      notes: '토끼네 집 그림 지도다. 우리 집의 정한 자리는 가족과 정하는 것이라 정답이 없다 — 학생 집 구조를 캐묻지 않는다.',
    }),
    TP({
      id: 'digital.e12.time-promise.wrap.promise-chant', type: 'wrap', title: '"시간 되면 꺼요" 구호',
      method: '시간 약속 구호', tool: 'timer', minutes: 6,
      levels: { easy: '교사가 구호 앞부분("시간 되면 꺼요")을 먼저 외치고 함께 따라 한다.', base: '구호 카드 세 장의 차례를 맞추고 손뼉과 함께 두 번 외친다.', challenge: '구호를 외친 뒤 "스스로 꺼요"에 붙일 동작 하나(엄지 척 등)를 정해 함께 해 본다.' },
      wrap: {
        teacher: '"시간 되면 꺼요(손뼉 두 번), 스스로 꺼요(가슴에 손), 짝짝!" 구호 카드 차례를 맞춘 뒤 선생님 신호에 맞춰 반 전체가 두 번 외친다. 출구 2번에서 "끝까지 봐요"를 고른 학생에게 "다음 영상은 끝없이 나와요. 한 편이 끝난 곳이 멈추는 곳이에요"라고 말해 준다. 마지막에 오늘 정한 토끼의 끝 시각을 다 같이 말해 본다.',
        exitTicket: [
          CHANT('시간 약속 구호', ['시간 되면 꺼요', '스스로 꺼요', '손뼉 짝짝']),
          { type: 'choice', prompt: '다음 영상이 저절로 나와요.', options: ['끝까지 봐요', '멈추고 꺼요'], answer: 1, difficulty: 0.1, explain: '한 편이 끝나면 스스로 멈추고 꺼요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '시간 되면 꺼요',
        items: [
          { type: 'blank', prompt: '구호를 따라 써요.', text: '시간 되면 꺼요, ___ 꺼요!', answer: '스스로' },
          { type: 'draw', prompt: '끝 시각에 화면을 끄는 토끼를 그려요.' },
        ],
        easy: { note: '"시간 되면 꺼요"를 손뼉과 함께 떠올려요.', items: [{ type: 'draw', prompt: '시계를 그려요.' }] },
      },
    }),
    TP({
      id: 'digital.e12.time-promise.wrap.my-clock', type: 'wrap', title: '토끼 약속 시계와 집 약속',
      method: '내 약속 시계 그리기', tool: 'clock', minutes: 6,
      levels: { easy: '교사가 "긴바늘은 6, 짧은바늘은 6과 7 사이"를 함께 짚어 주며 맞춘다(정각을 먼저 연습해도 된다).', base: '30분 단위 시계로 토끼가 끄는 6시 30분을 맞추고, 집에서 가족과 해 볼 것에 표시한다.', challenge: '활동지에서 평일·주말 끄는 시각을 가족과 정해 오도록 두 칸을 나눠 받는다.' },
      wrap: {
        teacher: '"토끼는 저녁 6시 30분에 화면을 끄기로 했어요. 시계로 맞춰 볼까요?" 바늘을 맞춘 뒤 "우리 집 끄는 시각은 오늘 집에 가서 가족과 함께 정해 보세요"라고 말하고, 해 볼 것에 표시하게 한다. 짧은바늘을 6에 똑바로 둔 학생에게 "30분이 되면 짧은바늘은 6과 7 사이로 가요"라고 말해 준다. 집 시각을 지금 말하게 하거나 서로 견주지 않는다.',
        exitTicket: [
          { type: 'tool', tool: 'clock', options: { minuteStep: 30 }, prompt: '토끼는 6시 30분에 꺼요.', target: { h: 6, m: 30 }, difficulty: 0.15 },
          CHECK('집에서 해 볼 것', [C('say', '끄는 시각 말하기'), C('family', '가족과 정하기'), C('alarm', '알람 맞추기')], '집에서 해 볼 것에 표시해요.'),
          MOOD,
        ],
      },
      worksheet: {
        title: '우리 집 화면 약속 시계',
        items: [
          { type: 'table', prompt: '가족과 함께 정해 써요.', columns: ['언제', '끄는 시각'], cells: [['학교 가는 날', ''], ['쉬는 날', '']], answer: '(가족과 정함)' },
          { type: 'draw', prompt: '끄는 시각을 시계에 그려요.' },
        ],
        easy: { note: '토끼는 6시 30분에 꺼요.', items: [{ type: 'draw', prompt: '시계 바늘을 그려요.' }] },
      },
      notes: '6시 30분은 토끼의 가상 약속이다. 활동지 표는 가족과 정하는 칸이라 채점하지 않는다.',
    }),
  ];

  // =====================================================================================================
  // 2학년 · 화면 대신 하는 놀이
  const PI = MOD('digital.e12.play-instead', [2]);
  const R = 'circle:red'; const B = 'circle:sky';
  const T_PLAY = [
    PI({
      id: 'digital.e12.play-instead.intro.bored-face', type: 'intro', title: '"심심해" 곰의 얼굴과 마음',
      method: '심심한 곰의 얼굴 보기', tool: 'emotion', minutes: 6,
      levels: { easy: '교사가 곰 얼굴을 따라 지어 보이며 마음 카드 하나(심심함)를 함께 잇는다.', base: '곰 이야기를 듣고 마음 카드를 고른 뒤 "왜 그런 마음일까?" 까닭을 한 가지 말한다.', challenge: '마음을 고른 뒤 곰에게 해 줄 말("같이 공놀이할래?")을 짝에게 해 본다.' },
      intro: {
        teacher: '"곰이 소파에 누워 \'심심해…\' 해요. 태블릿은 쉬는 자리에 있대요. 곰 마음은 어떨까요?" 곰 얼굴을 따라 지어 보게 한 뒤 시연 단추로 \'심심함\' 카드가 곰에게 이어지는 모습을 보인다. "심심하면 영상을 봐야 해요"라는 말이 나오면 "심심한 마음은 나쁜 마음일까요? 심심할 때 떠오르는 놀이가 또 있을까요?"라고 되묻는다. "화면 말고 뭘 할까?"를 오늘의 질문으로 칠판에 적는다.',
        student: '곰 얼굴을 따라 지어 보고, 화면 말고 할 놀이를 하나 떠올려요.',
        demo: { tool: 'emotion', options: { mode: 'match', slots: [{ id: 'bear', label: '"심심해" 곰' }], cards: ['심심함', '신남', '화남'] }, sequence: [{ match: { bear: '심심함' } }] },
        art: { draw: 'a paper bear lying on a paper sofa with a bored face, a paper tablet resting on a shelf, a ball and a jump rope waiting in a corner', banner: '화면 말고 뭘 할까?' },
      },
      notes: '"심심해도 괜찮아" — 심심한 마음을 나무라지 않는다. 학생이 집에서 무엇을 보는지 묻지 않는다.',
    }),
    PI({
      id: 'digital.e12.play-instead.intro.friend-scene', type: 'intro', title: '같이 있는데 화면만 보면',
      method: '친구와 있을 때 화면만 보면', tool: 'story', minutes: 6,
      levels: { easy: '교사가 두 장면(한 명은 화면만·함께 공놀이)을 나란히 보이고 더 즐거운 쪽을 손으로 가리키게 한다.', base: '세 장면(놀러 옴 → 한 명은 화면만 → 함께 공놀이) 이야기를 듣고 더 즐거운 장면을 고르는 시연을 본다.', challenge: '화면만 보는 친구 옆에 혼자 남은 친구의 마음을 한 낱말로 말한다.' },
      intro: {
        teacher: '"곰이 다람쥐네 놀러 왔어요. 그런데 다람쥐는 화면만 봐요. 곰은 옆에서 기다려요." 장면을 하나씩 짚고, 다음 장면에서 둘이 함께 공을 주고받는 모습을 보인 뒤 "어느 장면이 더 즐거울까요?"라고 묻는다. 시연 단추로 \'같이 공놀이\' 카드가 담기는 모습을 보인다. "옆에 앉아 있으니까 같이 노는 거예요"라는 말이 나오면 "곰 얼굴을 보세요. 같이 앉아 있으면 다 같이 노는 걸까요?"라고 되묻는다.',
        student: '더 즐거운 장면을 손가락으로 가리키고 그 까닭을 짝에게 말해요.',
        demo: { tool: 'story', options: { mode: 'pick', basket: '더 즐거운 장면', cards: [C('ball', '같이 공놀이', { motif: 'sun' }), C('screen', '한 명은 화면만'), C('wait', '혼자 기다려요')], shuffle: false }, sequence: [{ pick: ['ball'] }] },
        art: { draw: 'two paper scenes side by side: a paper squirrel staring at a tablet while a paper bear waits alone, and the two friends laughing while tossing a paper ball', banner: '같이 놀면 더 즐거워' },
      },
    }),
    PI({
      id: 'digital.e12.play-instead.activity.move-play', type: 'activity', title: '몸 놀이 타이머 따라 하기',
      method: '몸 놀이 따라 하기', tool: 'timer', minutes: 13,
      levels: { easy: '놀이 타이머를 \'놀이 30초 한 번\'으로 맞추고, 해 본 놀이 하나(제자리 뛰기)에 표시한다.', base: '타이머를 \'놀이 30초·쉬기 10초·3번\'으로 맞춰 제자리 뛰기·동물 걷기·쭉쭉 펴기를 따라 하고 셋 모두 표시한다.', challenge: '타이머를 맞춘 뒤 놀이 카드 세 장의 차례를 내가 정해(정답 없음) 그 차례대로 하고, 정한 것과 해 본 것에 표시한다. 셋째 문항은 모든 단계에서 짝과 동물 걷기 흉내를 낸다.' },
      activity: {
        title: '몸 놀이 타이머', tool: 'timer',
        teacher: '"타이머가 \'놀이\'일 때 몸을 움직이고, \'쉬기\'일 때 숨을 골라요." 타이머를 맞춘 뒤 교실 자리에서 제자리 뛰기(콩콩), 동물 걷기(곰처럼 엉금, 토끼처럼 깡총 — 제자리에서), 쭉쭉 펴기를 따라 한다. "몸 놀이는 운동장에서만 해요"라는 말에는 "집 거실에서도 제자리에서 할 수 있어요. 비 오는 날에도요"라고 말한다. 시작 전에 책상 사이를 넓히고, 숨이 차면 쉬기 구간에서 앉아도 된다고 알려 준다.',
        task: '몸 놀이 타이머를 맞추고 놀이를 따라 해요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          { prompt: '놀이 30초, 쉬기 10초, 3번.', toolOptions: { title: '몸 놀이 타이머(우리 반 약속)', labels: ['놀이', '쉬기'], plan: { work: 20, rest: 5, rounds: 1 } }, target: { plan: { work: 30, rest: 10, rounds: 3 } }, difficulty: 0.15,
            levels: { easy: { prompt: '놀이 30초 한 번 맞춰요.', target: { plan: { work: 30, rounds: 1 } } } } },
          { prompt: '해 본 놀이에 표시해요.', toolOptions: { title: '오늘 한 몸 놀이' }, target: { selfCheck: ['제자리 뛰기', '동물 걷기', '쭉쭉 펴기'] }, difficulty: 0.15,
            levels: { easy: { prompt: '해 본 놀이에 표시해요(1개).', target: { selfCheck: ['제자리 뛰기'] } },
              challenge: { prompt: '차례를 정하고 해 봐요.', toolOptions: { cards: ['쭉쭉 펴기', '제자리 뛰기', '동물 걷기'] }, target: { selfCheck: ['차례를 정했어요', '세 놀이를 했어요'] } } } },
          { prompt: '짝과 동물 걷기 흉내를 내요.', free: true, talk: true, difficulty: 0.2, conclude: '심심할 때 화면 대신 제자리 뛰기, 동물 걷기, 쭉쭉 펴기를 해요.' },
        ],
      },
      worksheet: { items: [{ type: 'check', prompt: '집에서 해 볼 몸 놀이에 ✓ 해요.', options: ['제자리 뛰기', '동물 걷기', '쭉쭉 펴기'] }] },
      notes: '30초·10초·3번은 우리 반 놀이 약속(연습용 값)이다. 몸이 불편한 학생은 앉아서 팔로 하는 동작으로 바꾼다.',
    }),
    PI({
      id: 'digital.e12.play-instead.activity.pattern-game', type: 'activity', title: '색깔 무늬 이어 놀기',
      method: '색깔 무늬 놀이', tool: 'pattern', minutes: 14,
      levels: { easy: '두 조각이 번갈아 되풀이되는 무늬(AB)의 빈칸 두 곳을 채운다.', base: '한 조각 다음 두 조각이 되풀이되는 무늬(ABB)의 빈칸 두 곳을 채운다.', challenge: '세 조각 가운데 골라 내 무늬를 두 번 이상 되풀이해 만들고, 짝이 다음 조각을 맞혀 본다(말로).' },
      activity: {
        title: '색깔 무늬 잇기', tool: 'pattern',
        teacher: '"빨강, 파랑, 파랑, 빨강, 파랑, 파랑… 다음은 무엇일까요?" 반 전체가 무늬를 손뼉(빨강)과 무릎(파랑)으로 소리 내어 읽은 뒤 빈칸을 채운다. 빈칸에 빨강을 넣는 학생에게 "손뼉, 무릎, 무릎… 소리로 다시 읽어 볼까요?"라고 묻는다. 끝나면 "이 무늬 놀이는 종이·블록·색연필로도 할 수 있어요. 화면이 없어도 돼요"라고 말하고 색종이 띠로 이어 보는 모습을 보인다.',
        task: '되풀이되는 색깔 무늬의 빈칸을 채워요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          MOTIF('동그라미 무늬 빈칸을 채워요.', R, B, 'circle:buttercup', 0.1),
          MOTIF('네모 블록 무늬 빈칸을 채워요.', 'square:mint', 'square:peach', 'square:lavender', 0.15),
          MOTIF('별 종이 무늬 빈칸을 채워요.', 'star:buttercup', 'star:lavender', 'star:sky', 0.2, { conclude: '무늬 놀이는 종이·블록으로도 할 수 있어요. 화면 없이도 재미있어요.' }),
        ],
      },
      worksheet: { items: [{ type: 'draw', prompt: '색연필로 되풀이되는 무늬를 그려요.' }] },
      notes: '색종이 띠나 블록을 준비하면 화면 밖 무늬 놀이로 바로 이어 할 수 있다.',
    }),
    PI({
      id: 'digital.e12.play-instead.activity.play-song', type: 'activity', title: '"같이 놀자" 노래 가락',
      method: '함께 노래 놀이', tool: 'keyboard', minutes: 13,
      levels: { easy: '줄마다 끝 세 음만 듣고 따라 치고, 건반에 계이름이 비친다.', base: '"같이 놀자", "모두 모여라" 다섯 음 가락을 듣고 따라 치고, 셋째 문항에서 친구와 번갈아 친 것에 표시한다.', challenge: '같은 가락의 끝 음을 바꿔(솔·도) 다섯 음을 지어 치고, 친구와 번갈아 친다.' },
      activity: {
        title: '함께 노래 놀이 가락', tool: 'keyboard',
        teacher: '"같이 놀자(솔 솔 미 미 도), 모두 모여라(미 솔 라 솔 미)!" 선생님이 먼저 두 번 불러 준 뒤 \'가락 듣기\'로 한 줄씩 들려준다. 치기 전에 반 전체가 손으로 높낮이를 그리며 따라 부른다. 음을 빼먹은 학생에게 "노래 글자 하나에 건반 한 번이에요. 같, 이, 놀, 자… 몇 번 쳤는지 세어 볼까요?"라고 묻는다. 마지막 문항은 짝과 한 줄씩 번갈아 치는 놀이로 하고, "노래 놀이도 화면 없이 친구와 하는 놀이예요"라고 짚는다.',
        task: '"같이 놀자" 노래 가락을 듣고 건반으로 따라 쳐요.', levels: { easy: { from: '도', to: '높은도', showWhileListening: true }, base: { from: '도', to: '높은도' }, challenge: { from: '도', to: '높은도' } },
        items: [
          MEL('"같이 놀자" 가락을 쳐요.', ['솔', '솔', '미', '미', '도'], '솔', 0.1),
          MEL('"모두 모여라" 가락을 쳐요.', ['미', '솔', '라', '솔', '미'], '도', 0.15),
          { prompt: '친구와 번갈아 치고 표시해요.', toolOptions: {}, target: { selfCheck: ['친구와 번갈아 쳤어요'], minNotes: 3 }, difficulty: 0.15,
            levels: { easy: { prompt: '세 음 치고 표시해요.', target: { selfCheck: ['세 음을 쳤어요'], minNotes: 3 } } },
            conclude: '노래 놀이는 친구와 번갈아 하며 함께 즐기는 놀이예요.' },
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '노랫말을 따라 써요.', text: '같이 ___, 모두 모여라!', answer: '놀자' }] },
      notes: '가락은 수업용으로 지은 짧은 노래다. 소리는 건반을 누르거나 \'가락 듣기\'를 눌렀을 때만 난다.',
    }),
    PI({
      id: 'digital.e12.play-instead.activity.play-collage', type: 'activity', title: '심심할 때 꺼내는 놀이 상자',
      method: '놀이 상자 꾸미기', tool: 'collage', minutes: 14,
      levels: { easy: '공(동그라미) 조각 2개와 줄넘기·블록 조각을 하나씩 붙여 상자를 꾸민다(조각 2개 이상).', base: '공·줄넘기(긴 네모)·블록(네모)·책(반원) 조각을 4개 이상 붙여 놀이 상자를 꾸민다.', challenge: '친구와 할 놀이는 파랑, 혼자 할 놀이는 노랑 조각으로 나눠 붙이고 상자 속 놀이를 짝에게 들려준다.' },
      activity: {
        title: '놀이 상자 꾸미기', tool: 'collage',
        teacher: '"동그라미는 공, 긴 네모는 줄넘기, 네모는 블록, 반원은 펼친 책이에요. 심심할 때 꺼낼 놀이 상자를 꾸며 볼까요?" 칠판에 조각 뜻을 그려 두고, 조각을 붙일 때마다 "이 조각으로 무슨 놀이를 할까요?"라고 묻는다. "놀이 상자에 태블릿도 넣을래요"라는 학생에게 "오늘 상자는 화면 없이 하는 놀이 상자예요. 태블릿은 쉬는 자리에 있어요"라고 말해 준다.',
        task: '화면 없이 할 놀이 조각을 골라 놀이 상자를 꾸며요.', levels: { easy: { shapes: ['circle', 'rect', 'square'] }, base: { shapes: ['circle', 'rect', 'square', 'semi', 'star'] }, challenge: { shapes: ['circle', 'rect', 'square', 'semi', 'star', 'heart'] } },
        items: [
          { prompt: '공 조각을 붙여요.', toolOptions: {}, target: { has: [{ shape: 'circle', min: 4 }] }, difficulty: 0.1,
            levels: { easy: { prompt: '공 조각 2개를 붙여요.', target: { has: [{ shape: 'circle', min: 2 }] } } } },
          { prompt: '줄넘기와 블록을 붙여요.', toolOptions: {}, target: { has: [{ shape: 'rect', min: 1 }, { shape: 'square', min: 1 }], pieces: { min: 4 } }, difficulty: 0.15,
            levels: { easy: { prompt: '줄넘기와 블록 하나씩.', target: { has: [{ shape: 'rect', min: 1 }, { shape: 'square', min: 1 }], pieces: { min: 2 } } },
              challenge: { prompt: '친구 놀이 파랑, 혼자 노랑.', target: { has: [{ color: '파랑', min: 2 }, { color: '노랑', min: 2 }] } } } },
          { prompt: '놀이 상자를 꾸미고 표시해요.', toolOptions: {}, target: { selfCheck: ['상자를 꾸몄어요', '놀이를 말했어요'], minPieces: 4 }, difficulty: 0.2,
            levels: { easy: { prompt: '조각 2개로 꾸미고 표시해요.', target: { selfCheck: ['상자를 꾸몄어요', '놀이를 말했어요'], minPieces: 2 } } },
            conclude: '심심할 때는 놀이 상자를 열어요. 공·줄넘기·블록·책이 기다려요.' },
        ],
      },
      worksheet: { items: [{ type: 'draw', prompt: '내 놀이 상자에 넣을 놀잇감을 그려요.' }] },
      notes: '조각 뜻(동그라미 = 공, 긴 네모 = 줄넘기, 네모 = 블록, 반원 = 책)은 칠판에 그려 두고 시작한다.',
    }),
    PI({
      id: 'digital.e12.play-instead.wrap.my-pick', type: 'wrap', title: '곰이 고른 놀이 바구니',
      method: '내가 고른 놀이 하나', tool: 'sortboard', minutes: 6,
      levels: { easy: '교사가 카드를 하나씩 읽어 주고 곰이 혼자 할 놀이 하나를 함께 넣는다.', base: '오늘 해 본 놀이 카드를 \'혼자 할래요\'·\'같이 할래요\' 바구니에 나누고, 화면 카드는 넣지 않는다.', challenge: '바구니를 채운 뒤 집에서 할 놀이 하나와 할 때(저녁·쉬는 날)를 활동지에 쓴다.' },
      wrap: {
        teacher: '"곰이 오늘 배운 놀이를 집에서 해 보려고 해요. 혼자 할 놀이와 같이 할 놀이로 나눠 줄까요?" 카드를 함께 읽고, \'영상 더 보기\' 카드는 어느 바구니에도 넣지 않는다는 것을 짚는다. 출구 2번에서 "꼭 봐야 해요"를 고른 학생에게 "심심해도 괜찮아요. 심심할 때 새 놀이가 떠올라요"라고 말해 준다. 집에서 할 놀이는 활동지에 적어 가족에게 보여 주게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'sortboard', options: { slots: ['혼자 할래요', '같이 할래요'], cards: [C('walk', '동물 걷기'), C('ball', '공 주고받기'), C('video', '영상 더 보기'), C('motif', '색 무늬 놀이'), C('song', '번갈아 노래')] }, prompt: '곰이 할 놀이를 나눠 넣어요.', target: { sort: { '혼자 할래요': ['walk', 'motif'], '같이 할래요': ['ball', 'song'] } }, difficulty: 0.15 },
          { type: 'choice', prompt: '심심할 때는 꼭 화면?', options: ['꼭 봐야 해요', '다른 놀이도 돼요'], answer: 1, difficulty: 0.1, explain: '심심할 때 몸 놀이·친구 놀이를 할 수 있어요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '내가 고른 놀이',
        items: [
          { type: 'short', prompt: '집에서 해 볼 놀이 하나를 써요.', answer: '(예) 동물 걷기, 공 주고받기' },
          { type: 'check', prompt: '언제 할까요? ✓ 해요.', options: ['저녁에', '쉬는 날에'] },
        ],
        easy: { note: '오늘 해 본 놀이를 떠올려요.', items: [{ type: 'draw', prompt: '집에서 할 놀이를 그려요.' }] },
      },
      notes: '학생이 고른 놀이는 정답이 없다 — 출구 바구니는 가상 인물 곰의 놀이로 채점하고, 학생 자신의 놀이는 활동지에 적게 한다.',
    }),
    PI({
      id: 'digital.e12.play-instead.wrap.cheer', type: 'wrap', title: '"화면 끄고 놀자" 구호',
      method: '"화면 끄고 놀자" 구호', tool: 'timer', minutes: 6,
      levels: { easy: '교사와 함께 구호를 한 번 외친다.', base: '구호 카드 세 장의 차례를 맞추고 동작과 함께 두 번 외친 뒤 해 본 것에 표시한다.', challenge: '구호 끝에 붙일 동작 하나를 모둠이 새로 만들어 보여 준다.' },
      wrap: {
        teacher: '"모두 일어나요! 화면 끄고(손바닥 내리기), 놀자(두 팔 번쩍), 같이 놀자(옆 친구와 하이파이브)!" 카드 차례를 맞춘 뒤 반 전체가 동작과 함께 두 번 외치고 해 본 것에 표시한다. 하이파이브가 싫은 친구는 손을 흔들어도 된다고 먼저 알려 준다. 출구 3번은 마음 날씨를 고르며 오늘 놀이를 돌아본다.',
        exitTicket: [
          CHANT('화면 끄고 놀자 구호', ['화면 끄고', '놀자', '같이 놀자']),
          SELF('오늘 해 본 구호', ['구호를 외쳤어요', '동작을 했어요']),
          MOOD,
        ],
      },
      worksheet: {
        title: '화면 끄고 놀자',
        items: [
          { type: 'blank', prompt: '구호를 따라 써요.', text: '화면 끄고 놀자, ___ 놀자!', answer: '같이' },
          { type: 'draw', prompt: '친구와 같이 노는 내 모습을 그려요.' },
        ],
        easy: { note: '"화면 끄고 놀자"를 떠올려요.', items: [{ type: 'draw', prompt: '친구 얼굴을 그려요.' }] },
      },
    }),
  ];

  // =====================================================================================================
  // 2학년 · 내 정보는 소중해요
  const MI = MOD('digital.e12.my-info', [2]);
  const TOWN = [{ name: '집 보호자', icon: 'house', at: [0, 0] }, { name: '담임 선생님', icon: 'school', at: [3, 0] }, { name: '친구네 어른', icon: 'apartment', at: [1, 2] }, { name: '놀이터', icon: 'park', at: [3, 2] }];
  const TOWN_MORE = [{ name: '낯선 사람', icon: 'dot', at: [2, 1] }, { name: '빈 교실', icon: 'dot', at: [0, 2] }];
  const T_INFO = [
    MI({
      id: 'digital.e12.my-info.intro.treasure', type: 'intro', title: '보물 상자에 지킬 내 정보',
      method: '보물 상자에 넣을 것', tool: 'sortboard', minutes: 6,
      levels: { easy: '교사가 이름표·집 그림 두 장만 읽어 주고 보물 상자에 함께 넣는다.', base: '카드 네 장(이름표·집 그림·내 얼굴 사진·좋아하는 색)을 듣고 보물 상자에 넣는 시연을 따라 말한다.', challenge: '보물 상자에 넣을 것과 \'알려도 돼요\' 칸에 둘 것이 왜 다른지 한마디 한다.' },
      intro: {
        teacher: '"내 이름, 우리 집이 어디인지, 내 얼굴 사진 — 이건 나만의 보물이에요. 화면 속 모르는 사람에게 함부로 주지 않아요." 카드를 하나씩 읽어 주고 시연 단추로 보물 상자에 넣는 모습을 보인다. "좋아하는 색은 알려 줘도 될까요?"라고 묻고 \'알려도 돼요\' 칸에 둔다. "이름은 다 아는 거라 괜찮아요"라는 말이 나오면 "교실 친구는 알지만, 화면 속 모르는 사람이 이름과 사는 곳을 같이 알면 어떨까요?"라고 되묻는다.',
        student: '보물 상자에 지킬 것을 하나 골라 짝에게 손가락으로 가리켜요.',
        demo: { tool: 'sortboard', options: { slots: ['보물 상자', '알려도 돼요'], cards: ['이름표', '집 그림', '내 얼굴 사진', '좋아하는 색'] }, sequence: [{ sort: { '보물 상자': ['이름표', '집 그림', '내 얼굴 사진'], '알려도 돼요': ['좋아하는 색'] } }] },
        art: { draw: 'a paper treasure chest with a little lock, a paper name tag, a tiny paper house and a paper photo of a smiling child going inside, a paper crayon of a favorite color left outside', banner: '내 정보는 보물' },
      },
      notes: '학생의 실제 이름·주소·사진은 수업에서 쓰지 않는다. 카드는 그림 낱말로만 다룬다.',
    }),
    MI({
      id: 'digital.e12.my-info.intro.popup-song', type: 'intro', title: '"잠깐! 물어봐요" 노래',
      method: '"잠깐! 물어봐요" 노래', tool: 'keyboard', minutes: 6,
      levels: { easy: '교사가 노래를 부르는 동안 박에 맞춰 손뼉만 친다.', base: '"모르는 창이 뜨면 잠깐, 어른께 물어봐요" 가락을 듣고 시연을 보며 따라 부른다.', challenge: '"잠깐"에 손바닥 내밀기, "물어봐요"에 손 들기 동작을 붙여 부른다.' },
      intro: {
        teacher: '"모르는 창이 뜨면 잠깐(솔 솔 미 솔 라 솔 미), 어른께 물어봐요(미 레 미 솔 레 도)!" 시연 단추로 가락이 건반에 차례대로 눌리는 모습을 보이고 두 번 따라 부른다. "창이 뜨면 빨리 눌러서 없애요"라는 말이 나오면 "모르는 창의 단추를 누르면 무슨 일이 생길지 몰라요. 누르기 전에 무엇을 할까요?"라고 되묻는다. 오늘은 내 정보를 지키고 이상한 화면을 보면 어른께 말하는 법을 배운다고 밝힌다.',
        student: '"모르는 창이 뜨면 잠깐, 어른께 물어봐요"를 따라 불러요.',
        demo: { tool: 'keyboard', options: { from: '도', to: '높은도', melody: ['솔', '솔', '미', '솔', '라', '솔', '미', '미', '레', '미', '솔', '레', '도'] }, sequence: [{ notes: ['솔', '솔', '미', '솔', '라', '솔', '미', '미', '레', '미', '솔', '레', '도'] }] },
        art: { draw: 'a paper tablet with a strange paper pop-up window, a paper child holding up a palm to say wait, and a paper adult coming to help, musical notes floating', banner: '잠깐! 물어봐요' },
      },
      notes: '가락은 수업용으로 지은 짧은 노래다.',
    }),
    MI({
      id: 'digital.e12.my-info.activity.ask-scene', type: 'activity', title: '좋아요·안돼요: 누가 물어요',
      method: '좋아요/안돼요: 누가 물어요', tool: 'emotion', minutes: 13,
      levels: { easy: '장면 카드 3장을 좋아요·안돼요로 나누고, 놓으면 바로 맞는지 알려 준다.', base: '장면 카드 5장을 좋아요·안돼요로 나눈 뒤 확인한다.', challenge: '안돼요 장면 두 개마다 할 말 카드("못 알려 줘요"·"어른께 물을게요")를 골라 잇는다.' },
      activity: {
        title: '누가 물어볼 때 나누기', tool: 'emotion',
        teacher: '"이럴 때 알려 줘도 좋아요일까요, 안돼요일까요?" 카드를 읽어 줄 때마다 반 전체가 동그라미(머리 위 두 팔)나 엑스(가슴 앞 두 팔)를 먼저 하고 놓는다. "게임 친구가 사는 곳을 물어요"를 좋아요에 두는 학생에게 "화면 속 친구는 얼굴을 본 적이 없어요. 정말 누구인지 알 수 있을까요?"라고 묻는다. 선생님이 출석 이름을 부르는 것은 괜찮다고 하면서, 다른 점은 \'내가 아는 어른이 곁에서\'라는 점을 짚는다. 이상한 화면을 본 적이 있는지는 묻지 않는다.',
        task: '누가 물어볼 때 좋아요·안돼요로 나누어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          SORT5('이름·사는 곳을 물어요. 나누어요.', [C('roll', '선생님 출석'), C('mom', '엄마가 물어요'), C('class', '반 친구 이름')], [C('gamehome', '게임 속 집 질문'), C('popname', '모르는 창 이름')],
            { prompt: '안돼요 장면에 할 말을 이어요.', cards: [C('no', '못 알려 줘요'), C('ask', '어른께 물을게요'), C('tell', '알려 줄게')], match: { gamehome: ['no', 'ask'], popname: ['no', 'ask'] } }, 0.1),
          SORT5('내 사진을 달래요. 나누어요.', [C('withmom', '엄마와 보내요'), C('album', '반 앨범 사진'), C('art', '내 그림 자랑')], [C('stranger', '모르는 사람 요청'), C('gamefr', '게임 친구 요청')],
            { prompt: '안돼요 장면에 할 말을 이어요.', cards: [C('no', '못 보내요'), C('ask', '어른께 물을게요'), C('send', '바로 보내요')], match: { stranger: ['no', 'ask'], gamefr: ['no', 'ask'] } }, 0.15),
          SORT5('이상한 화면이 떠요. 나누어요.', [C('show', '어른께 보여요'), C('close', '창 닫고 말해요'), C('down', '기기 내려놔요')], [C('tap', '혼자 눌러 봐요'), C('secret', '비밀로 해요')],
            { prompt: '안돼요 장면을 바꿔 이어요.', cards: [C('fshow', '어른께 보여요'), C('ftell', '말해요'), C('more', '더 눌러요')], match: { tap: ['fshow', 'ftell'], secret: ['fshow', 'ftell'] } }, 0.2,
            { conclude: '모르는 사람이 내 정보를 물으면 "못 알려 줘요". 이상한 화면은 어른께 보여요.' }),
        ],
      },
      worksheet: { items: [{ type: 'table', prompt: '좋으면 ○, 안 되면 ×를 써요.', columns: ['장면', '○ / ×'], cells: [['선생님 출석', ''], ['게임 속 집 질문', ''], ['어른께 보여요', ''], ['비밀로 해요', '']], answer: '○, ×, ○, ×' }],
        easy: [{ type: 'choice', prompt: '게임 친구가 집을 물어요.', options: ['못 알려 줘요', '알려 줘요'], answer: '못 알려 줘요' }] },
    }),
    MI({
      id: 'digital.e12.my-info.activity.tell-map', type: 'activity', title: '이상한 화면 보면 누구에게',
      method: '이상한 화면 보면 누구에게', tool: 'map', minutes: 14,
      levels: { easy: '어른 자리 두 곳만 있는 지도에서 핀을 꽂고, 놓은 칸의 이름이 바로 보인다.', base: '집 보호자·담임 선생님·친구네 어른·놀이터 네 곳 가운데 찾아갈 어른 자리에 핀을 꽂는다.', challenge: '낯선 사람·빈 교실까지 여섯 곳이 있는 지도에서 꽂고 \'왜 이 어른?\' 보기를 고른다.' },
      activity: {
        title: '찾아갈 어른 자리에 핀 꽂기', tool: 'map',
        teacher: '"다람쥐가 집에서 태블릿을 보다 이상한 창을 봤어요. 누구에게 갈까요?" 핀을 꽂기 전에 그 어른에게 무엇이라고 말할지 한 문장으로 말하게 한다("이것 좀 봐 주세요"). 놀이터에 꽂는 학생에게 "놀이터에는 누가 있을까요? 내가 아는 어른이 곁에 있을까요?"라고 묻는다. "혼날까 봐 말 안 해요"라는 말에는 "보여 주는 건 잘한 일이에요. 어른은 도와주려고 있어요"라고 짚는다. 우리 학교에서는 누구에게 가는지 교사가 학교 약속대로 덧붙인다.',
        task: '이상한 화면을 보면 찾아갈 어른 자리에 핀을 꽂아요.', levels: { easy: { readout: true }, base: {}, challenge: {} },
        items: [
          PIN('집에서 봤어요. 누구에게?', TOWN, TOWN_MORE, '집 보호자', '놀이터', { prompt: '집에서 봤어요. 어른과 까닭은?', q: '왜 이 어른?', choices: ['곁에 있는 어른', '아무나 괜찮아요'], answer: 0 }, 0.1),
          PIN('교실에서 봤어요. 누구에게?', TOWN, TOWN_MORE, '담임 선생님', '놀이터', { prompt: '교실에서 봤어요. 어른과 까닭은?', q: '왜 이 어른?', choices: ['교실 지키는 어른', '친구라서요'], answer: 0 }, 0.15),
          PIN('친구네서 봤어요. 누구에게?', TOWN, TOWN_MORE, '친구네 어른', '놀이터', { prompt: '친구네서 봤어요. 어른과 까닭은?', q: '왜 이 어른?', choices: ['그 집 어른이라서', '모르는 사람도 돼요'], answer: 0 }, 0.2,
            { conclude: '이상한 화면을 보면 가까이 있는 믿을 어른께 보여 줘요. 보여 주는 건 잘한 일이에요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '교실에서 이상한 화면을 보면 누구에게?', options: ['담임 선생님', '낯선 사람'], answer: '담임 선생님' }] },
      notes: '그림 지도 속 장소는 예시다. 이상한 화면을 본 일이 있는지 학생에게 묻지 않는다. 말을 꺼내는 학생이 있으면 "말해 줘서 고마워"라고 받고 학교 절차를 따른다.',
    }),
    MI({
      id: 'digital.e12.my-info.activity.manner-steps', type: 'activity', title: '기기 빌려 쓸 때 차례',
      method: '기기 빌려 쓸 때 차례', tool: 'timeline', minutes: 13,
      levels: { easy: '첫 장면이 놓여 있어 남은 두 장면만 차례로 놓고, 놓으면 바로 맞는지 알려 준다.', base: '물어보기 → 쓰기 → 돌려주기 세 장면을 차례대로 놓는다.', challenge: '첫 장면과 끝 장면이 놓여 있고, 틀린 카드가 섞인 가운데 빠진 장면을 찾아 넣는다.' },
      activity: {
        title: '빌려 쓰는 예절 차례 놓기', tool: 'timeline',
        teacher: '"곰이 다람쥐 태블릿을 쓰고 싶어요. 맨 먼저 무엇을 할까요?" 장면을 놓은 뒤 짝과 한 명은 곰, 한 명은 다람쥐가 되어 지우개를 기기 삼아 "써도 돼?" — "응" — "고마워"를 해 본다. "친구 거니까 그냥 써도 돼요"라는 학생에게 "다람쥐가 모르게 가져가면 다람쥐 마음은 어떨까요?"라고 묻는다. 빌린 기기에서 사진첩 같은 남의 것을 열지 않는다는 점을 셋째 문항에서 짚는다.',
        task: '기기를 빌려 쓰는 차례대로 장면을 놓아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          STEPS3('친구 태블릿을 빌려요.', [C('ask', '"써도 돼?"'), C('use', '조심히 써요'), C('back', '"고마워"')], C('grab', '그냥 가져가요'), 0.1),
          STEPS3('선생님 기기를 써요.', [C('ask', '"써도 될까요?"'), C('use', '정한 것만 해요'), C('back', '제자리에 둬요')], C('sneak', '몰래 켜요'), 0.15),
          STEPS3('가족 휴대폰을 빌려요.', [C('ask', '"빌려 주세요"'), C('use', '허락한 것만'), C('back', '"고맙습니다"')], C('photo', '사진첩 열기'), 0.2,
            { conclude: '빌릴 때는 묻고, 허락한 것만 쓰고, "고마워" 하며 돌려줘요.' }),
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '"써도 돼?" → 조심히 써요 → "___"', answer: '고마워' }] },
    }),
    MI({
      id: 'digital.e12.my-info.activity.shield-collage', type: 'activity', title: '내 정보 지키기 방패',
      method: '내 정보 방패 만들기', tool: 'collage', minutes: 14,
      levels: { easy: '큰 방패(마름모) 하나와 조각 하나를 붙여 방패를 꾸민다(조각 2개 이상).', base: '큰 방패 위에 자물쇠(네모)·하트 조각을 2개씩, 모두 4개 이상 붙인다.', challenge: '방패를 꾸민 뒤 약속 그림(별) 조각을 더 붙이고, 방패에 담은 약속을 짝에게 말한다.' },
      activity: {
        title: '내 정보 방패 꾸미기', tool: 'collage',
        teacher: '"큰 마름모는 방패, 네모는 자물쇠, 하트는 소중한 나예요. 내 정보를 지키는 방패를 만들어 볼까요?" 조각을 붙일 때마다 "이 자물쇠는 무엇을 지켜 줄까요?"라고 묻고 기다릴 반응("이름이요", "사진이요")을 듣는다. 방패에 진짜 이름이나 주소를 쓰고 싶어 하는 학생에게 "방패는 지키는 거라서 이름 대신 하트를 붙여요"라고 말해 준다.',
        task: '자물쇠와 하트 조각으로 내 정보 방패를 꾸며요.', levels: { easy: { shapes: ['diamond', 'square', 'heart'] }, base: { shapes: ['diamond', 'square', 'heart', 'circle'] }, challenge: { shapes: ['diamond', 'square', 'heart', 'circle', 'star'] } },
        items: [
          { prompt: '큰 방패와 조각 하나를 붙여요.', toolOptions: {}, target: { has: [{ shape: 'diamond', size: 'l', n: 1 }], pieces: { min: 2 } }, difficulty: 0.1 },
          { prompt: '자물쇠와 하트를 붙여요.', toolOptions: {}, target: { has: [{ shape: 'square', min: 2 }, { shape: 'heart', min: 2 }] }, difficulty: 0.15,
            levels: { easy: { prompt: '자물쇠와 하트 하나씩.', target: { has: [{ shape: 'square', min: 1 }, { shape: 'heart', min: 1 }] } } } },
          { prompt: '방패를 꾸미고 표시해요.', toolOptions: {}, target: { selfCheck: ['방패를 꾸몄어요', '지킬 것을 말했어요'], minPieces: 4 }, difficulty: 0.2,
            levels: { easy: { prompt: '조각 2개로 꾸미고 표시해요.', target: { selfCheck: ['방패를 꾸몄어요', '지킬 것을 말했어요'], minPieces: 2 } },
              challenge: { prompt: '약속 별도 붙이고 표시해요.', target: { has: [{ shape: 'star', min: 1 }], selfCheck: ['방패를 꾸몄어요', '약속을 말했어요'], minPieces: 5 } } },
            conclude: '내 이름·사는 곳·사진은 방패로 지켜요. 모르면 어른께 물어요.' },
        ],
      },
      worksheet: { items: [{ type: 'draw', prompt: '내 정보를 지키는 방패를 그려요.' }] },
      notes: '조각 뜻(큰 마름모 = 방패, 네모 = 자물쇠, 하트 = 소중한 나, 별 = 약속)은 칠판에 그려 두고 시작한다. 방패에 실제 이름·주소를 쓰지 않는다.',
    }),
    MI({
      id: 'digital.e12.my-info.wrap.say-no', type: 'wrap', title: '"못 알려 줘요" 말하기',
      method: '"알려 줄 수 없어요" 말하기', tool: 'timer', minutes: 6,
      levels: { easy: '"못 알려 줘요" 한 문장만 손바닥을 내밀며 함께 말한다.', base: '말하기 카드 세 장(손바닥 내밀기·"못 알려 줘요"·"어른께 물을게요")의 차례를 맞추고 두 문장을 함께 말한다.', challenge: '짝과 묻는 쪽·답하는 쪽을 번갈아 해 본다(묻는 쪽은 그림 카드 속 가상 질문만 읽는다).' },
      wrap: {
        teacher: '"선생님이 화면 속 모르는 사람 역할을 할게요. \'어디 살아?\'" — 반 전체가 손바닥을 내밀며 "못 알려 줘요, 어른께 물을게요!"라고 말한다. 카드 차례를 맞춘 뒤 두 번 더 해 본다. 출구 2번에서 "바로 알려 줘요"를 고른 학생에게 "모르는 사람이 물을 때는 못 알려 준다고 말해도 돼요. 그건 예의 없는 게 아니라 나를 지키는 말이에요"라고 말해 준다. 역할놀이에서 학생의 실제 집이나 이름을 말하게 하지 않는다.',
        exitTicket: [
          CHANT('지키는 말 차례', ['손바닥 내밀기', '못 알려 줘요', '어른께 물을게요'], '말하는 차례대로 놓아요.'),
          { type: 'choice', prompt: '"어디 살아?" 물으면?', options: ['바로 알려 줘요', '못 알려 줘요'], answer: 1, difficulty: 0.1, explain: '모르는 사람에게는 "못 알려 줘요"라고 말해요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '지키는 말',
        items: [
          { type: 'blank', prompt: '지키는 말을 따라 써요.', text: '못 알려 줘요, 어른께 ___!', answer: '물을게요' },
          { type: 'draw', prompt: '손바닥을 내밀며 말하는 내 모습을 그려요.' },
        ],
        easy: { note: '"못 알려 줘요"를 손바닥과 함께 떠올려요.', items: [{ type: 'draw', prompt: '손바닥을 그려요.' }] },
      },
    }),
    MI({
      id: 'digital.e12.my-info.wrap.safe-check', type: 'wrap', title: '오늘 내 정보 약속 점검',
      method: '오늘 약속 점검', tool: 'kitchen', minutes: 6,
      levels: { easy: '교사가 점검표 두 칸(이름 지키기·어른께 말하기)을 읽어 주고 함께 표시한다.', base: '점검표 세 칸(이름 지키기·사진 지키기·어른께 말하기)을 스스로 읽고 지킬 수 있는 것에 표시한다.', challenge: '표시한 뒤 집에서 가족과 함께 지킬 칸 하나를 활동지에서 고른다.' },
      wrap: {
        teacher: '"오늘 배운 약속 가운데 나는 무엇을 지킬 수 있나요?" 점검표를 함께 읽고 표시하게 한다. 출구 2번에서 "알려 줘요"를 고른 학생에게 "게임 속 친구는 얼굴을 본 적이 없어요. 사는 곳은 보물 상자에 넣어 둬요"라고 말해 준다. 마지막에 "잠깐! 물어봐요"를 다 같이 불러 마친다.',
        exitTicket: [
          CHECK('내 정보 약속', [C('name', '이름 지키기'), C('photo', '사진 지키기'), C('tell', '어른께 말하기')], '지킬 수 있는 약속에 표시해요.'),
          { type: 'choice', prompt: '게임에서 사는 곳을 물어요.', options: ['알려 줘요', '안 알려 줘요'], answer: 1, difficulty: 0.1, explain: '사는 곳은 화면 속 사람에게 알려 주지 않아요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '내 정보는 소중해요',
        items: [
          { type: 'check', prompt: '가족과 함께 지킬 약속에 ✓ 해요.', options: ['이름·사는 곳 지키기', '사진 함부로 안 보내기', '이상한 화면은 어른께'] },
          { type: 'draw', prompt: '내 정보를 지키는 내 모습을 그려요.' },
        ],
        easy: { note: '"보물 상자"를 떠올려요.', items: [{ type: 'draw', prompt: '보물 상자를 그려요.' }] },
      },
    }),
  ];

  PaperLessons.registerModules([].concat(T_TIME, T_PLAY, T_INFO));
})();
