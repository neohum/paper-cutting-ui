/* 창체 안전교육 생활안전 — 초1-2 모듈 내용(edu-module.v1). 형식·작성 규칙: MODULES_BUILD.md, 계획: framework/safety-a.json 의 saf-life 초1-2.
 * 근거: 「학교안전교육 실시 기준 등에 관한 고시」(교육부고시 제2023-33호) 별표 2 초등학교 생활안전 1(안전하게 교실·가정·공공시설 이용하기).
 * 초1-2 기준: 소리로 읽어 주는 짧은 문항, 카드 6자 안팎, 좋아요/안돼요 고르기·따라 하기. 장면·인물은 직접 지은 것이다(가명).
 * 지금 쓴 주제: saf-life.e12.g1-home(우리 집 위험한 물건) — 도입 2 · 활동 3 · 정리 2. 모듈 작성 예시를 겸한다.
 *   아직 안 쓴 계획 모듈: saf-life.e12.g1-home.activity.yes-no-role(dilemma) — 쓰면 추천 조합 4차시가 열린다. */
(function () {
  const HOME = (o) => Object.assign({ schema: 'edu-module.v1', domain: 'saf-life', band: '초1-2', topic: 'saf-life.e12.g1-home', grades: [1] }, o);
  const OKNO = ['만져도 돼요', '안 돼요'];
  const SORT2 = (ok, no) => ({ '만져도 돼요': ok, '안 돼요': no });
  // 나누기 문항: 기본 6장, 쉬움 4장(prompt·target 도 함께 바꿈), 도전 8장(헷갈리는 카드 2장 더)
  const SORT = (prompt, topic, ok, no, hard, d, more) => ({
    prompt, toolOptions: { topic, slots: OKNO, cards: [ok[0], no[0], ok[1], no[1], ok[2], no[2]] }, target: { sort: SORT2(ok, no) }, difficulty: d,
    levels: {
      easy: { prompt: `${prompt.replace(/\.$/, '')}(4장).`, toolOptions: { cards: [ok[0], no[0], ok[1], no[1]] }, target: { sort: SORT2(ok.slice(0, 2), no.slice(0, 2)) } },
      challenge: { prompt: `${prompt.replace(/\.$/, '')}(8장).`, toolOptions: { cards: [ok[0], no[0], hard[0], ok[1], no[1], ok[2], hard[1], no[2]] }, target: { sort: SORT2(ok, [...no, ...hard]) } },
    },
    ...more,
  });
  // 집 칸 지도: 방 넷(지역), 핀 하나를 알맞은 방에 꽂는다
  const ROOMS = [
    { name: '부엌', cells: [[0, 0], [1, 0]] }, { name: '욕실', cells: [[2, 0], [3, 0]] },
    { name: '거실', cells: [[0, 1], [1, 1]] }, { name: '베란다', cells: [[2, 1], [3, 1]] },
  ];
  const PIN = (prompt, region, d, more) => ({ prompt, toolOptions: { grid: [4, 2], regions: ROOMS, title: '우리 집' }, target: { region }, difficulty: d, ...more });
  const ORDER = (prompt, cards, d, more) => ({ prompt, toolOptions: { slots: ['먼저', '다음', '끝'], cards: [cards[2], cards[0], cards[1]] }, target: { order: cards.map((c) => c.id) }, difficulty: d, ...more });

  PaperLessons.registerModules([
    // ---- 도입 ----
    HOME({
      id: 'saf-life.e12.g1-home.intro.kitchen-find', type: 'intro', title: '부엌 그림에서 위험한 것 찾기',
      method: '부엌 그림에서 위험한 물건 찾기', tool: 'emotion', minutes: 6,
      levels: { easy: '교사가 물건 이름을 하나씩 읽어 주고 손가락으로 가리키게 한다.', base: '시연을 보고 위험한 물건을 스스로 말한다.', challenge: '안전한 물건(컵·숟가락)과 왜 다른지 한마디씩 덧붙인다.' },
      intro: {
        teacher: '"우리 집 부엌에 무엇이 있을까요? 그중에 다칠 수 있는 물건은 무엇일까요?" 두세 명의 대답을 듣고(기다릴 반응: "칼이요", "주전자요") 시연 단추로 위험한 물건만 바구니에 담기는 모습을 보여 준다. "컵도 위험해요"라는 말이 나오면 "컵은 물을 마실 때 써요. 깨지면 어떻게 할까요?"라고 되묻는다. 오늘은 집 안에서 만지면 안 되는 물건과 어른께 말하는 법을 배운다고 밝힌다.',
        student: '우리 집 부엌에서 본 물건을 하나 떠올려 짝에게 말해 보아요.',
        demo: { tool: 'emotion', options: { mode: 'pick', basket: '위험해요', cards: [{ id: 'pot', text: '주전자' }, { id: 'cup', text: '컵' }, { id: 'knife', text: '칼' }, { id: 'spoon', text: '숟가락' }, { id: 'iron', text: '다리미' }, { id: 'pill', text: '약병' }], shuffle: false }, sequence: [{ pick: ['pot', 'knife', 'iron', 'pill'] }] },
        art: { draw: 'a small paper child pointing at a paper kitchen with a kettle and a knife placed high on a shelf, a parent smiling nearby', banner: '우리 집 위험한 물건', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
      },
      notes: '피해 경험(다친 일)을 자세히 묻지 않는다. "본 적 있는 물건"으로만 묻는다.',
    }),
    HOME({
      id: 'saf-life.e12.g1-home.intro.touch-song', type: 'intro', title: '"만지지 마요" 구호 따라 하기',
      method: '"만지지 마요" 노래 동작', tool: 'timer', minutes: 5,
      levels: { easy: '교사가 구호 카드를 하나씩 들어 보이며 함께 말한다.', base: '구호 세 개를 차례대로 따라 말하고 동작한다.', challenge: '구호를 섞어 불러 주면 알맞은 동작을 바로 한다.' },
      intro: {
        teacher: '"뜨거워! (손 털기) 뾰족해! (손 뒤로) 어른께! (손 들기)" 시연 단추로 구호 카드가 차례대로 놓이는 모습을 보이고 반 전체가 동작과 함께 세 번 따라 한다. "뜨거우면 후 불면 돼요"라는 말이 나오면 "불어도 손을 대면 데어요. 무엇을 먼저 할까요?"라고 되묻는다.',
        student: '선생님을 따라 "뜨거워, 뾰족해, 어른께!"를 손 동작과 함께 말해 보아요.',
        demo: { tool: 'timer', options: { title: '만지지 마요 구호', cards: ['어른께', '뜨거워', '뾰족해'] }, sequence: [{ order: ['뜨거워', '뾰족해', '어른께'] }] },
        art: { draw: 'paper children raising their hands and singing together in front of a paper house, with musical notes cut from colored paper', banner: '뜨거워, 뾰족해, 어른께!', extra: [{ motif: 'leaf', x: 300, y: 222 }] },
      },
    }),

    // ---- 활동 ----
    HOME({
      id: 'saf-life.e12.g1-home.activity.touch-sort', type: 'activity', title: '만져도 돼요·안 돼요 나누기',
      method: '만져도 돼요/안 돼요 나누기', tool: 'mindmap', minutes: 14,
      levels: { easy: '카드 4장, 놓으면 바로 맞는지 알려 준다.', base: '카드 6장을 다 놓은 뒤 확인한다.', challenge: '카드 8장, 세제 통·사탕 모양 약처럼 헷갈리는 카드가 섞인다.' },
      activity: {
        title: '집 안 물건 두 칸으로 나누기', tool: 'mindmap',
        teacher: '"이 물건은 내가 만져도 될까요, 안 될까요?" 카드를 놓을 때마다 이름을 소리 내어 읽게 한다. 약을 "사탕 같아요"라며 만져도 된다고 두는 학생에게 "약은 누가 주실 때만 먹을까요?"라고 묻는다. 다리미처럼 뜨거워지는 물건은 꺼져 있어도 어른께 말한다는 점을 짚는다.',
        task: '물건 카드를 두 칸으로 나누어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          SORT('부엌 물건을 나누어 보세요.', '부엌', ['숟가락', '물컵', '밥그릇'], ['칼', '주전자', '가스레인지'], ['가위', '병따개'], 0.1),
          SORT('거실 물건을 나누어 보세요.', '거실', ['그림책', '인형', '방석'], ['약병', '다리미', '콘센트'], ['사탕 모양 약', '선풍기 날개'], 0.15),
          SORT('욕실 물건을 나누어 보세요.', '욕실', ['칫솔', '수건', '비누'], ['면도기', '락스', '헤어드라이어'], ['세제 통', '전기 면도기'], 0.2, { conclude: '다칠 수 있는 물건은 만지지 말고 어른께 말해요.' }),
        ],
      },
      worksheet: { items: [{ type: 'table', prompt: '만져도 되면 ○, 아니면 ×를 써요.', columns: ['물건', '○ / ×'], cells: [['숟가락', ''], ['칼', ''], ['약병', ''], ['인형', '']], answer: '○, ×, ×, ○' }],
        easy: [{ type: 'choice', prompt: '만져도 되는 것에 ○ 해요.', options: ['그림책', '칼'], answer: '그림책' }] },
    }),
    HOME({
      id: 'saf-life.e12.g1-home.activity.room-map', type: 'activity', title: '우리 집 지도에 조심 핀 꽂기',
      method: '우리 집 그림 지도에 조심 핀', tool: 'map', minutes: 13,
      levels: { easy: '핀을 놓으면 그 칸의 방 이름이 바로 보인다.', base: '방 이름을 보고 알맞은 방에 핀을 꽂는다.', challenge: '방 이름이 지도에 없어 색과 자리만 보고 꽂는다.' },
      activity: {
        title: '우리 집 지도에 조심할 곳 꽂기', tool: 'map',
        teacher: '"이 물건은 우리 집 어느 방에 있을까요?" 핀을 꽂기 전에 그 방에서 조심할 물건을 한 가지씩 말하게 한다. 욕실을 "물만 있어서 안전해요"라고 하는 학생에게 "젖은 바닥에서 뛰면 어떻게 될까요?"라고 묻는다. 집마다 방 모양이 다르니 우리 집에서는 어디인지 떠올려 보게 한다.',
        task: '조심할 곳에 핀을 꽂아요.', levels: { easy: { readout: true }, base: {}, challenge: { regionNames: false } },
        items: [
          PIN('뜨거운 냄비가 있는 곳에 핀을 꽂아요.', '부엌', 0.1),
          PIN('바닥이 미끄러운 곳에 핀을 꽂아요.', '욕실', 0.15),
          PIN('콘센트를 조심할 곳에 핀을 꽂아요.', '거실', 0.2, { conclude: '방마다 조심할 물건이 있어요. 모르면 어른께 물어요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '바닥이 미끄러워 걸어야 하는 곳에 ○ 해요.', options: ['욕실', '내 방', '현관'], answer: '욕실' }] },
    }),
    HOME({
      id: 'saf-life.e12.g1-home.activity.tell-adult', type: 'activity', title: '어른께 알리는 차례 놓기',
      method: '어른께 알리는 장면 차례 놓기', tool: 'story', minutes: 14,
      levels: { easy: '카드를 놓으면 바로 맞는지 알려 준다.', base: '세 장면을 다 놓은 뒤 확인한다.', challenge: '카드가 섞여 나오고, 놓은 뒤 어른께 할 말을 짝에게 말한다.' },
      activity: {
        title: '어른께 알리는 장면 차례 놓기', tool: 'story',
        teacher: '"위험한 물건을 보면 맨 먼저 무엇을 할까요?" 카드를 놓은 뒤 반 전체가 차례대로 몸으로 따라 한다(멈춤 자세 → 손 뒤로 → 손 들고 부르기). "어른께 말해요"를 맨 앞에 두는 학생에게 "멈추지 않고 뛰어가다 넘어지면 어떻게 될까요?"라고 묻는다. 세 장면 모두 멈추기가 먼저라는 점을 짚는다.',
        task: '장면 카드를 차례대로 놓아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          ORDER('바닥에 약이 있어요. 차례로 놓아요.', [{ id: 'stop', text: '멈춰요' }, { id: 'hands', text: '안 만져요' }, { id: 'tell', text: '어른께 말해요' }], 0.15),
          ORDER('컵이 깨졌어요. 차례로 놓아요.', [{ id: 'freeze', text: '멈춰요' }, { id: 'step', text: '물러서요' }, { id: 'call', text: '어른을 불러요' }], 0.2),
          ORDER('다리미가 켜져 있어요. 차례로 놓아요.', [{ id: 'wait', text: '멈춰요' }, { id: 'away', text: '떨어져요' }, { id: 'say', text: '어른께 알려요' }], 0.25, { conclude: '위험한 것을 보면 멈추고, 만지지 않고, 어른께 말해요.' }),
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '위험한 것을 보면 ___ 어른께 말해요.', answer: '멈추고' }] },
    }),

    // ---- 정리 ----
    HOME({
      id: 'saf-life.e12.g1-home.wrap.home-check', type: 'wrap', title: '우리 집 안전 점검표',
      method: '우리 집 안전 그림 점검표', tool: 'kitchen', minutes: 7,
      levels: { easy: '교사가 점검표 칸을 하나씩 읽어 준다.', base: '스스로 읽고 오늘 알게 된 것에 표시한다.', challenge: '가족에게 말할 것을 하나 골라 한 줄로 쓴다.' },
      wrap: {
        teacher: '"오늘 배운 것 가운데 집에 가서 가족과 함께 살펴볼 것은 무엇인가요?" 점검표의 칸을 함께 읽고, 우리 집에서 어디에 있는지 떠올리게 한다. 출구 2번에서 "몰래 만져요"를 고른 학생에게 약속은 보는 사람이 없어도 나를 지킨다고 말해 준다.',
        exitTicket: [
          { type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title: '오늘 알게 된 것', items: [{ id: 'pill', text: '약은 높은 곳' }, { id: 'plug', text: '콘센트 덮개' }, { id: 'knife', text: '칼은 서랍에' }] }, prompt: '오늘 알게 된 것에 표시해요.', target: { selfCheck: true }, difficulty: 0.1 },
          { type: 'choice', prompt: '칼을 보면 어떻게 해요?', options: ['몰래 만져요', '어른께 말해요', '친구에게 줘요'], answer: 1, difficulty: 0.1, explain: '칼은 만지지 않고 어른께 말해요.' },
          { type: 'mood', prompt: '오늘 공부를 마친 내 마음은 어떤가요?' },
        ],
      },
      worksheet: {
        title: '우리 집 위험한 물건',
        items: [
          { type: 'check', prompt: '집에 가서 가족과 살펴봐요.', options: ['약은 높은 곳에 있어요', '콘센트에 덮개가 있어요', '칼은 서랍에 있어요'] },
          { type: 'draw', prompt: '집에서 안전하게 지내는 내 모습을 그려요.' },
        ],
        easy: { note: '"이것을 만지면 다칠까?"를 먼저 생각해요.', items: [{ type: 'draw', prompt: '어른께 말하는 내 모습을 그려요.' }] },
      },
    }),
    HOME({
      id: 'saf-life.e12.g1-home.wrap.home-face', type: 'wrap', title: '"이럴 때 내 마음" 짝 짓기',
      method: '"이럴 때 내 마음" 짝 짓기', tool: 'emotion', minutes: 7,
      levels: { easy: '교사가 장면을 읽어 주고 함께 고른다.', base: '장면마다 마음 카드를 스스로 고른다.', challenge: '고른 뒤 친구에게 칭찬 한마디를 한다.' },
      wrap: {
        teacher: '"뜨거운 냄비를 만지려다 멈췄을 때 내 마음은 어땠을까요?" 장면마다 마음 카드를 짝 짓고 잘한 점을 한 명씩 말하게 한다. "무서워요"라고 말하는 학생에게도 멈춘 것은 잘한 일이라고 말해 준다. 마지막에 "뜨거워, 뾰족해, 어른께!" 구호를 한 번 더 외친다.',
        exitTicket: [
          { type: 'tool', tool: 'emotion', options: { mode: 'match', slots: [{ id: 's1', label: '냄비 앞에서 멈춤' }, { id: 's2', label: '어른께 말함' }], cards: ['뿌듯함', '편안함', '화남'] }, prompt: '장면과 내 마음을 이어요.', target: { match: { s1: ['뿌듯함', '편안함'], s2: ['뿌듯함', '편안함'] } }, difficulty: 0.15 },
          { type: 'choice', prompt: '모르는 병을 봤어요. 어떻게 해요?', options: ['냄새를 맡아요', '어른께 드려요', '마셔 봐요'], answer: 1, difficulty: 0.1, explain: '모르는 병은 열지 말고 어른께 드려요.' },
          { type: 'short', prompt: '집에서 지킬 약속을 하나 써요.' },
          { type: 'mood', prompt: '오늘 공부를 마친 내 마음은 어떤가요?' },
        ],
      },
      worksheet: {
        title: '뜨거워, 뾰족해, 어른께!',
        items: [
          { type: 'table', prompt: '좋으면 ○, 안 되면 ×를 써요.', columns: ['장면', '○ / ×'], cells: [['약을 몰래 먹어요', ''], ['어른께 말해요', ''], ['콘센트를 만져요', '']], answer: '×, ○, ×' },
          { type: 'blank', prompt: '구호를 따라 써요.', text: '뜨거워, 뾰족해, ___!', answer: '어른께' },
          { type: 'draw', prompt: '멈추고 어른께 말하는 내 모습을 그려요.' },
        ],
      },
    }),
  ]);
})();
