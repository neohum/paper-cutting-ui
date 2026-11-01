/* 창체 안전교육 생활안전 — 초1-2 모듈 내용(edu-module.v1). 형식·작성 규칙: MODULES_BUILD.md, 계획: framework/safety-a.json 의 saf-life 초1-2.
 * 근거: 「학교안전교육 실시 기준 등에 관한 고시」(교육부고시 제2023-33호) 별표 2 초등학교 생활안전
 *   1(안전하게 교실·가정·공공시설 이용하기) · 2(학용품·놀이용품의 안전한 사용 및 식품 안전 알기) · 4(안전한 놀이활동 및 야외 활동) · 5(유괴예방, 미아사고 예방과 대처).
 * 초1-2 기준: 소리로 읽어 주는 짧은 문항, 카드 6자 안팎, 좋아요/안돼요 고르기·따라 하기. 장면·인물은 직접 지은 것이다(가명).
 * 주제 12개(1학년 6 · 2학년 6) × 도입 2 · 활동 4 · 정리 2. g1-home 은 모듈 작성 예시를 겸한다.
 * 수치·법 조항은 쓰지 않는다(근거 파일에 생활안전 초1-2 수치가 없다). 손 씻기·타이머는 '문지르기 동작 횟수'로만 맞추고 시간 길이를 권장하지 않는다. */
(function () {
  const MOD = (topic, grades) => (o) => Object.assign({ schema: 'edu-module.v1', domain: 'saf-life', band: '초1-2', topic, grades }, o);
  const MOOD = { type: 'mood', prompt: '오늘 공부를 마친 내 마음은 어떤가요?' };
  const cut = (p) => p.replace(/\.$/, '');

  // 두 칸 나누기(mindmap): 기본 6장, 쉬움 4장(prompt·target 도 함께 바꿈), 도전 8장(헷갈리는 카드 2장 — 둘째 칸으로 간다)
  const SORT2 = (slots, prompt, topic, ok, no, hard, d, more) => {
    const S = (a, b) => ({ [slots[0]]: a, [slots[1]]: b });
    return {
      prompt, toolOptions: { topic, slots, cards: [ok[0], no[0], ok[1], no[1], ok[2], no[2]] }, target: { sort: S(ok, no) }, difficulty: d,
      levels: {
        easy: { prompt: `${cut(prompt)}(4장).`, toolOptions: { cards: [ok[0], no[0], ok[1], no[1]] }, target: { sort: S(ok.slice(0, 2), no.slice(0, 2)) } },
        challenge: { prompt: `${cut(prompt)}(8장).`, toolOptions: { cards: [ok[0], no[0], hard[0], ok[1], no[1], ok[2], hard[1], no[2]] }, target: { sort: S(ok, [...no, ...hard]) } },
      },
      ...more,
    };
  };
  // 장면 차례 놓기(story): 기본 3장, 쉬움 첫 장면이 놓여 있음, 도전 틀린 장면 1장이 섞여 빼고 놓음
  const ORDER3 = (prompt, cards, wrong, d, more) => {
    const ids = cards.map((c) => c.id);
    const lv = { easy: { state: { at: { [ids[0]]: 0, [ids[1]]: null, [ids[2]]: null } } } };
    if (wrong) lv.challenge = { toolOptions: { cards: [cards[2], wrong, cards[0], cards[1]] } };
    return { prompt, toolOptions: { slots: ['먼저', '다음', '끝'], cards: [cards[2], cards[0], cards[1]] }, target: { order: ids }, difficulty: d, levels: lv, ...more };
  };
  // 칸 지도 핀(map): 장소에 핀 하나. 도전은 헷갈리는 장소가 더 있는 지도
  const PIN = (prompt, base, more2, place, d, more) => ({
    prompt, toolOptions: { grid: [4, 3], places: base }, target: { place }, difficulty: d,
    levels: { challenge: { toolOptions: { places: [...base, ...more2] } } }, ...more,
  });
  // 정리 출구: 그림 점검표(스스로 점검), 구호 순서(timer), 마음 눈금, 마음 짝 짓기
  const CHECK = (title, items, prompt) => ({ type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title, items }, prompt: prompt || '오늘 해 본 것에 표시해요.', target: { selfCheck: true }, difficulty: 0.1 });
  const CHANT = (title, cards, prompt) => ({ type: 'tool', tool: 'timer', options: { title, cards: [cards[2], cards[0], cards[1]] }, prompt: prompt || '구호를 차례대로 놓아요.', target: { order: cards }, difficulty: 0.1 });
  const SCALE = (situation, feeling, steps, prompt, top) => ({ type: 'tool', tool: 'emotion', options: { mode: 'scale', situation, feeling, steps: steps || 5, scaleLabels: { 1: '조금', [steps || 5]: top || '아주 잘' } }, prompt: prompt || '얼마나 잘 지킬 수 있나요?', target: { level: 'any' }, difficulty: 0.1 });
  const SELF = (title, safety, prompt) => ({ type: 'tool', tool: 'timer', options: { title, safety }, prompt: prompt || '스스로 점검 칸에 표시해요.', target: { safety: true }, difficulty: 0.1 });
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

  // =====================================================================================================
  // 1학년 · 교실·복도·계단에서 걷기
  const CLASS = MOD('saf-life.e12.g1-classroom', [1]);
  const OKNO = ['좋아요', '안돼요'];
  const ROOM = [{ name: '문', icon: 'dot', at: [0, 0] }, { name: '창가', icon: 'dot', at: [3, 0] }, { name: '사물함', icon: 'dot', at: [0, 2] }, { name: '정수기', icon: 'dot', at: [3, 2] }];
  const ROOM_MORE = [{ name: '칠판', icon: 'dot', at: [1, 0] }, { name: '책꽂이', icon: 'dot', at: [2, 2] }];
  const T_CLASS = [
    CLASS({
      id: 'saf-life.e12.g1-classroom.intro.classroom-scene', type: 'intro', title: '교실 그림에서 위험한 곳 고르기',
      method: '그림 장면에서 위험한 곳 고르기', tool: 'emotion', minutes: 6,
      levels: { easy: '교사가 그림 속 행동을 하나씩 읽어 주고 위험한 곳 두 군데만 함께 찾는다.', base: '시연을 보고 위험한 곳 세 군데를 스스로 말한다.', challenge: '안전한 행동(손 들기·줄 서기)도 섞여 있어 왜 다른지 가려 말한다.' },
      intro: {
        teacher: '"이 교실 그림에서 다칠 것 같은 곳이 어디일까요?" 두세 명의 대답을 듣고(기다릴 반응: "의자요", "바닥에 물이요") 시연 단추로 위험한 행동만 바구니에 담기는 모습을 보여 준다. "의자를 젖히면 재미있어요"라는 말이 나오면 "의자가 뒤로 넘어가면 머리가 어디에 닿을까요?"라고 되묻는다. 오늘은 교실·복도·계단에서 다치지 않게 걷는 약속을 몸으로 익힌다고 밝힌다.',
        student: '교실에서 다칠 것 같은 곳을 하나 골라 짝에게 손으로 가리켜 보아요.',
        demo: { tool: 'emotion', options: { mode: 'pick', basket: '위험해요', cards: [{ id: 'chair', text: '의자 젖히기' }, { id: 'hand', text: '손 들기' }, { id: 'water', text: '바닥의 물' }, { id: 'line', text: '줄 서기' }, { id: 'desk', text: '책상 위 서기' }, { id: 'read', text: '책 읽기' }], shuffle: false }, sequence: [{ pick: ['chair', 'water', 'desk'] }] },
        art: { draw: 'a paper classroom where one paper child tilts a chair backwards, a puddle of water lies on the floor, and another child stands on a desk, while a teacher watches kindly', banner: '교실에서 조심해요' },
      },
      notes: '다친 일을 자세히 묻지 않는다. 그림 속 행동으로만 이야기한다.',
    }),
    CLASS({
      id: 'saf-life.e12.g1-classroom.intro.stairs-chant', type: 'intro', title: '"손잡이, 한 칸씩, 오른쪽" 구호',
      method: '계단 구호 따라 하기', tool: 'timer', minutes: 5,
      levels: { easy: '교사가 구호 카드 두 장을 차례대로 들어 보이며 함께 말한다.', base: '구호 카드 세 장의 차례를 맞추고 동작과 함께 따라 한다.', challenge: '교사가 구호를 섞어 부르면 알맞은 손짓을 바로 한다.' },
      intro: {
        teacher: '"손잡이 잡고! (난간 잡는 손) 한 칸씩! (발 하나씩 콩) 오른쪽! (오른손 들기)" 시연 단추로 구호 카드가 차례대로 놓이는 모습을 보이고 반 전체가 세 번 따라 한다. "빨리 가려면 두 칸씩 가요"라는 말이 나오면 "두 칸씩 가다 발이 미끄러지면 어디까지 떨어질까요?"라고 되묻는다.',
        student: '"손잡이 잡고, 한 칸씩, 오른쪽!"을 손짓과 함께 따라 말해요.',
        demo: { tool: 'timer', options: { title: '계단 구호', cards: ['오른쪽', '손잡이 잡고', '한 칸씩'] }, sequence: [{ order: ['손잡이 잡고', '한 칸씩', '오른쪽'] }] },
        art: { draw: 'paper children walking down paper stairs one step at a time, each holding the handrail and keeping to the right side', banner: '손잡이, 한 칸씩, 오른쪽', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
      },
    }),
    CLASS({
      id: 'saf-life.e12.g1-classroom.activity.ok-no', type: 'activity', title: '좋아요·안돼요 나누기',
      method: '좋아요/안돼요 나누기', tool: 'mindmap', minutes: 14,
      levels: { easy: '카드 4장, 맞는 칸에 놓으면 초록 테두리가 생긴다.', base: '카드 6장을 다 놓은 뒤 확인한다.', challenge: '카드 8장, "뛰어서 줄 서기"처럼 헷갈리는 카드가 섞인다.' },
      activity: {
        title: '복도·계단·교실 행동 두 칸으로 나누기', tool: 'mindmap',
        teacher: '"이렇게 하면 좋아요일까요, 안돼요일까요?" 카드를 놓을 때마다 반 전체가 소리 내어 읽는다. "뛰어서 줄 서기"를 좋아요에 두는 학생에게 "줄을 잘 서도 뛰어가다 부딪히면 어떻게 될까요?"라고 묻는다. 쉬는 시간이어도 복도에서는 걷는다는 점을 짚는다.',
        task: '행동 카드를 좋아요·안돼요로 나누어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          SORT2(OKNO, '복도에서 하는 일을 나누어요.', '복도', ['오른쪽 걷기', '천천히 걷기', '줄 서서 가기'], ['복도 뛰기', '친구 밀기', '미끄럼 타기'], ['뛰어서 줄 서기', '장난치며 걷기'], 0.1),
          SORT2(OKNO, '계단에서 하는 일을 나누어요.', '계단', ['손잡이 잡기', '한 칸씩 가기', '오른쪽 오르기'], ['두 칸씩 뛰기', '계단서 밀기', '난간 타기'], ['계단 앉아 놀기', '뒤로 걷기'], 0.15),
          SORT2(OKNO, '교실에서 하는 일을 나누어요.', '교실', ['문 천천히 열기', '의자 넣기', '손 들고 말하기'], ['의자 젖히기', '책상 위 서기', '가위 들고 뛰기'], ['문 쾅 닫기', '창틀에 앉기'], 0.2, { conclude: '복도·계단·교실에서는 걷고, 밀지 않고, 손잡이를 잡아요.' }),
        ],
      },
      worksheet: { items: [{ type: 'table', prompt: '좋으면 ○, 안 되면 ×를 써요.', columns: ['행동', '○ / ×'], cells: [['오른쪽 걷기', ''], ['복도 뛰기', ''], ['손잡이 잡기', ''], ['의자 젖히기', '']], answer: '○, ×, ○, ×' }],
        easy: [{ type: 'choice', prompt: '좋은 행동에 ○ 해요.', options: ['천천히 걷기', '친구 밀기'], answer: '천천히 걷기' }] },
    }),
    CLASS({
      id: 'saf-life.e12.g1-classroom.activity.walk-order', type: 'activity', title: '계단 내려가는 차례 놓기',
      method: '계단 내려가는 장면 차례 놓기', tool: 'story', minutes: 13,
      levels: { easy: '첫 장면이 놓여 있어 남은 두 장만 놓고, 놓으면 바로 맞는지 알려 준다.', base: '장면 세 장을 차례대로 놓는다.', challenge: '"뛰어 내려요" 같은 틀린 장면 한 장이 섞여 있어 빼고 놓는다.' },
      activity: {
        title: '계단·복도 장면 차례 놓기', tool: 'story',
        teacher: '"계단 앞에 섰어요. 맨 먼저 무엇을 할까요?" 카드를 놓은 뒤 자리에서 일어나 차례대로 몸으로 따라 한다(멈춤 → 난간 잡는 손 → 발 콩콩). "손잡이부터 잡아요"라는 학생에게 "앞을 안 보고 손을 뻗으면 앞 친구와 부딪히지 않을까요?"라고 묻는다. 멈춰서 둘러보는 것이 언제나 먼저라는 점을 짚는다.',
        task: '장면 카드를 차례대로 놓아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          ORDER3('계단을 내려가요. 차례로 놓아요.', [{ id: 'stop', text: '멈춰요' }, { id: 'rail', text: '손잡이 잡아요' }, { id: 'step', text: '한 칸씩 내려요' }], { id: 'jump', text: '뛰어 내려요' }, 0.15),
          ORDER3('계단을 올라가요. 차례로 놓아요.', [{ id: 'line', text: '줄을 서요' }, { id: 'hold', text: '손잡이 잡아요' }, { id: 'up', text: '한 칸씩 올라요' }], { id: 'two', text: '두 칸씩 올라요' }, 0.2),
          ORDER3('복도로 나가요. 차례로 놓아요.', [{ id: 'door', text: '문 앞에서 멈춰요' }, { id: 'look', text: '양쪽을 봐요' }, { id: 'walk', text: '오른쪽으로 걸어요' }], { id: 'dash', text: '뛰어 나가요' }, 0.25, { conclude: '멈추고, 손잡이 잡고, 한 칸씩 걸어요.' }),
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '계단은 손잡이 잡고 ___ 내려가요.', answer: '한 칸씩' }] },
    }),
    CLASS({
      id: 'saf-life.e12.g1-classroom.activity.class-map', type: 'activity', title: '교실 지도에 조심 핀 꽂기',
      method: '교실 그림 지도에 위험 핀 꽂기', tool: 'map', minutes: 14,
      levels: { easy: '핀을 놓으면 그 칸의 이름이 바로 보인다.', base: '장소 네 곳(문·창가·사물함·정수기) 가운데 알맞은 곳에 꽂는다.', challenge: '칠판·책꽂이까지 여섯 곳이 있는 지도에서 꽂고, 왜 위험한지 짝에게 한마디 한다.' },
      activity: {
        title: '우리 교실 지도에 조심할 곳 꽂기', tool: 'map',
        teacher: '"우리 교실에서 미끄러지거나 부딪히기 쉬운 곳은 어디일까요?" 핀을 꽂기 전에 그 자리에서 어떤 일이 생길 수 있는지 말하게 한다. 정수기 앞을 "물 마시는 곳이라 안전해요"라고 하는 학생에게 "물이 바닥에 떨어지면 신발이 어떻게 될까요?"라고 묻는다. 실제 우리 교실의 그 자리를 손으로 가리켜 보게 한다.',
        task: '조심할 곳에 핀을 꽂아요.', levels: { easy: { readout: true }, base: {}, challenge: {} },
        items: [
          PIN('물이 떨어져 미끄러운 곳에 꽂아요.', ROOM, ROOM_MORE, '정수기', 0.1),
          PIN('열고 닫을 때 손이 낄 곳에 꽂아요.', ROOM, ROOM_MORE, '문', 0.15),
          PIN('올라가거나 기대면 안 되는 곳에 꽂아요.', ROOM, ROOM_MORE, '창가', 0.2, { conclude: '정수기 앞은 천천히, 문은 손을 보고, 창가에는 오르지 않아요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '물이 떨어져 미끄러운 곳에 ○ 해요.', options: ['정수기 앞', '칠판 앞', '사물함 앞'], answer: '정수기 앞' }] },
    }),
    CLASS({
      id: 'saf-life.e12.g1-classroom.activity.hallway-role', type: 'activity', title: '복도에서 어떻게 할까? 역할놀이',
      method: '복도 역할놀이 고르기', tool: 'emotion', minutes: 14,
      levels: { easy: '보기 2개, 고르면 결과가 바로 보인다.', base: '보기 2개, 결과는 확인한 뒤에 보인다.', challenge: '보기 3개 가운데 고르고, 친구에게 할 말을 짝과 따라 한다.' },
      activity: {
        title: '복도 장면에서 할 행동 고르기', tool: 'emotion',
        teacher: '"친구가 복도에서 달려와요. 나는 어떻게 할까요?" 고른 뒤 짝과 한 명은 친구, 한 명은 나가 되어 교실 뒤 빈 곳에서 걸으며 해 본다. "같이 뛰면 빨리 가요"라는 학생에게 "둘이 뛰다 모퉁이에서 다른 친구를 만나면 어떻게 될까요?"라고 묻는다. 멈추고 "천천히 가자"라고 말하는 것이 친구도 지키는 일이라고 짚는다.',
        task: '장면을 듣고 할 행동을 골라요.', levels: { easy: {}, base: { revealAfterCheck: true }, challenge: { revealAfterCheck: true } },
        items: [
          { prompt: '친구가 달려와요. 어떻게 해요?', toolOptions: { mode: 'branch', situation: '친구가 복도에서 달려와요.', choices: [{ id: 'run', text: '같이 뛰어요', result: '둘 다 넘어질 수 있어요.', mood: '걱정' }, { id: 'stop', text: '멈춰서 비켜요', result: '부딪히지 않았어요.', mood: '편안함' }] }, target: { choice: 'stop' }, difficulty: 0.1,
            levels: { challenge: { toolOptions: { choices: [{ id: 'run', text: '같이 뛰어요', result: '둘 다 넘어질 수 있어요.', mood: '걱정' }, { id: 'stop', text: '멈춰서 비켜요', result: '부딪히지 않았어요.', mood: '편안함' }, { id: 'look', text: '딴 곳 보며 가요', result: '부딪힐 수 있어요.', mood: '놀람' }] } } } },
          { prompt: '바닥에 물이 있어요. 어떻게 해요?', toolOptions: { mode: 'branch', situation: '복도 바닥에 물이 있어요.', choices: [{ id: 'slide', text: '미끄럼 타요', result: '넘어져 다칠 수 있어요.', mood: '걱정' }, { id: 'tell', text: '선생님께 알려요', result: '물을 닦아 모두 안전해요.', mood: '뿌듯함' }] }, target: { choice: 'tell' }, difficulty: 0.15,
            levels: { challenge: { toolOptions: { choices: [{ id: 'slide', text: '미끄럼 타요', result: '넘어져 다칠 수 있어요.', mood: '걱정' }, { id: 'tell', text: '선생님께 알려요', result: '물을 닦아 모두 안전해요.', mood: '뿌듯함' }, { id: 'jump', text: '뛰어넘어요', result: '미끄러질 수 있어요.', mood: '놀람' }] } } } },
          { prompt: '계단에서 밀자고 해요. 어떻게 해요?', toolOptions: { mode: 'branch', situation: '친구가 계단에서 밀자고 해요.', choices: [{ id: 'push', text: '같이 밀어요', result: '친구가 굴러 다칠 수 있어요.', mood: '무서움' }, { id: 'no', text: '"안 돼" 말해요', result: '모두 손잡이 잡고 내려가요.', mood: '뿌듯함' }] }, target: { choice: 'no' }, difficulty: 0.2,
            levels: { challenge: { toolOptions: { choices: [{ id: 'push', text: '같이 밀어요', result: '친구가 굴러 다칠 수 있어요.', mood: '무서움' }, { id: 'no', text: '"안 돼" 말해요', result: '모두 손잡이 잡고 내려가요.', mood: '뿌듯함' }, { id: 'quiet', text: '살짝만 밀어요', result: '살짝도 넘어질 수 있어요.', mood: '걱정' }] } } },
            conclude: '복도에서는 멈추고 비켜요. 위험하면 "안 돼"라고 말해요.' },
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '친구가 달려와요. 무엇을 해요?', options: ['멈춰서 비켜요', '같이 뛰어요'], answer: '멈춰서 비켜요' }] },
    }),
    CLASS({
      id: 'saf-life.e12.g1-classroom.wrap.promise-chant', type: 'wrap', title: '오늘 걷기 약속 점검표',
      method: '오늘 약속 점검표에 표시하기', tool: 'kitchen', minutes: 7,
      levels: { easy: '교사가 점검표 칸을 하나씩 읽어 주고 함께 표시한다.', base: '스스로 읽고 할 수 있는 약속에 표시한다.', challenge: '표시한 뒤 내일 꼭 지킬 약속 하나를 골라 별을 그린다.' },
      wrap: {
        teacher: '"오늘 배운 걷기 약속 가운데 나는 무엇을 할 수 있나요?" 점검표 칸을 함께 읽고 할 수 있는 것에 표시하게 한다. 출구 2번에서 "두 칸씩 뛰어요"를 고른 학생에게 "한 칸씩 가면 발이 계단에 꼭 닿아요"라고 말해 준다. 마지막에 "손잡이 잡고, 한 칸씩, 오른쪽!"을 다 같이 외친다.',
        exitTicket: [
          CHECK('걷기 약속', [{ id: 'right', text: '오른쪽 걷기' }, { id: 'rail', text: '손잡이 잡기' }, { id: 'walk', text: '뛰지 않기' }], '할 수 있는 약속에 표시해요.'),
          { type: 'choice', prompt: '계단은 어떻게 내려가요?', options: ['두 칸씩 뛰어요', '한 칸씩 내려요', '미끄럼 타요'], answer: 1, difficulty: 0.1, explain: '손잡이 잡고 한 칸씩 내려가요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '교실·복도·계단 걷기 약속',
        items: [
          { type: 'check', prompt: '내가 지킬 약속에 ✓ 해요.', options: ['복도에서 오른쪽으로 걸어요', '계단은 손잡이 잡고 한 칸씩', '쉬는 시간에도 뛰지 않아요'] },
          { type: 'draw', prompt: '계단을 바르게 내려가는 내 모습을 그려요.' },
        ],
        easy: { note: '"멈추고, 잡고, 한 칸씩"을 떠올려요.', items: [{ type: 'draw', prompt: '손잡이를 잡은 내 손을 그려요.' }] },
      },
    }),
    CLASS({
      id: 'saf-life.e12.g1-classroom.wrap.feel-scale', type: 'wrap', title: '약속 지킬 마음 크기 고르기',
      method: '약속 지킨 마음 크기 고르기', tool: 'emotion', minutes: 7,
      levels: { easy: '교사가 눈금을 "조금·보통·아주 잘" 세 가지로 읽어 주며 고르게 한다.', base: '눈금 5칸에서 내 마음 크기를 고른다.', challenge: '눈금을 고른 뒤 더 잘 지킬 곳(복도/계단)을 하나 고른다.' },
      wrap: {
        teacher: '"복도에서 오른쪽으로 걷는 약속, 나는 얼마나 잘 지킬 수 있을까요?" 눈금을 고른 뒤 손가락으로 몇 칸인지 보여 주게 한다. 작은 칸을 고른 학생에게 "조금이라도 지키려는 마음이 있으면 시작한 거예요. 내일은 한 칸 더 올라가 봐요"라고 말해 준다. 출구 2번에서 쉬는 시간에는 뛰어도 된다고 고른 학생과는 쉬는 시간에 복도를 함께 걸어 본다.',
        exitTicket: [
          SCALE('복도에서 오른쪽으로 걸어요.', '뿌듯함', 5),
          { type: 'choice', prompt: '쉬는 시간 복도에서는요?', options: ['뛰어도 돼요', '걸어요', '미끄럼 타요'], answer: 1, difficulty: 0.1, explain: '쉬는 시간에도 복도에서는 걸어요.' },
          { type: 'choice', prompt: '더 잘 지킬 곳을 골라요.', options: ['복도', '계단'], answer: 0, difficulty: 0.1, explain: '복도와 계단 모두 걷고 손잡이를 잡아요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '내 걷기 약속',
        items: [
          { type: 'table', prompt: '좋으면 ○, 안 되면 ×를 써요.', columns: ['장면', '○ / ×'], cells: [['계단에서 두 칸씩 뛰어요', ''], ['복도에서 오른쪽으로 걸어요', ''], ['친구를 밀어요', '']], answer: '×, ○, ×' },
          { type: 'blank', prompt: '구호를 따라 써요.', text: '손잡이 잡고, 한 칸씩, ___!', answer: '오른쪽' },
        ],
      },
      notes: '출구 3번(더 잘 지킬 곳)은 정답이 하나가 아니다 — 고른 까닭을 들어 준다.',
    }),
  ];

  // =====================================================================================================
  // 1학년 · 우리 집 위험한 물건 (모듈 작성 예시)
  const HOME = MOD('saf-life.e12.g1-home', [1]);
  const TOUCH = ['만져도 돼요', '안 돼요'];
  const ROOMS = [
    { name: '부엌', cells: [[0, 0], [1, 0]] }, { name: '욕실', cells: [[2, 0], [3, 0]] },
    { name: '거실', cells: [[0, 1], [1, 1]] }, { name: '베란다', cells: [[2, 1], [3, 1]] },
  ];
  const ROOMPIN = (prompt, region, d, more) => ({ prompt, toolOptions: { grid: [4, 2], regions: ROOMS, title: '우리 집' }, target: { region }, difficulty: d, ...more });
  const ORDER = (prompt, cards, d, more) => ({ prompt, toolOptions: { slots: ['먼저', '다음', '끝'], cards: [cards[2], cards[0], cards[1]] }, target: { order: cards.map((c) => c.id) }, difficulty: d, ...more });
  const T_HOME = [
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
    HOME({
      id: 'saf-life.e12.g1-home.activity.touch-sort', type: 'activity', title: '만져도 돼요·안 돼요 나누기',
      method: '만져도 돼요/안 돼요 나누기', tool: 'mindmap', minutes: 14,
      levels: { easy: '카드 4장, 놓으면 바로 맞는지 알려 준다.', base: '카드 6장을 다 놓은 뒤 확인한다.', challenge: '카드 8장, 세제 통·사탕 모양 약처럼 헷갈리는 카드가 섞인다.' },
      activity: {
        title: '집 안 물건 두 칸으로 나누기', tool: 'mindmap',
        teacher: '"이 물건은 내가 만져도 될까요, 안 될까요?" 카드를 놓을 때마다 이름을 소리 내어 읽게 한다. 약을 "사탕 같아요"라며 만져도 된다고 두는 학생에게 "약은 누가 주실 때만 먹을까요?"라고 묻는다. 다리미처럼 뜨거워지는 물건은 꺼져 있어도 어른께 말한다는 점을 짚는다.',
        task: '물건 카드를 두 칸으로 나누어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          SORT2(TOUCH, '부엌 물건을 나누어 보세요.', '부엌', ['숟가락', '물컵', '밥그릇'], ['칼', '주전자', '가스레인지'], ['가위', '병따개'], 0.1),
          SORT2(TOUCH, '거실 물건을 나누어 보세요.', '거실', ['그림책', '인형', '방석'], ['약병', '다리미', '콘센트'], ['사탕 모양 약', '선풍기 날개'], 0.15),
          SORT2(TOUCH, '욕실 물건을 나누어 보세요.', '욕실', ['칫솔', '수건', '비누'], ['면도기', '락스', '헤어드라이어'], ['세제 통', '전기 면도기'], 0.2, { conclude: '다칠 수 있는 물건은 만지지 말고 어른께 말해요.' }),
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
          ROOMPIN('뜨거운 냄비가 있는 곳에 핀을 꽂아요.', '부엌', 0.1),
          ROOMPIN('바닥이 미끄러운 곳에 핀을 꽂아요.', '욕실', 0.15),
          ROOMPIN('콘센트를 조심할 곳에 핀을 꽂아요.', '거실', 0.2, { conclude: '방마다 조심할 물건이 있어요. 모르면 어른께 물어요.' }),
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
    HOME({
      id: 'saf-life.e12.g1-home.activity.yes-no-role', type: 'activity', title: '갈림길: 동생이 약병을 들었어요',
      method: '갈림길: 동생이 약병을 들었어요', tool: 'dilemma', minutes: 14,
      levels: { easy: '첫 갈림에서 보기 2개 가운데 한 번만 고른다.', base: '고른 뒤 이어지는 장면에서 한 번 더 고른다(갈림 2번).', challenge: '갈림 2번을 지나 끝에서 잘한 까닭 카드 3장 가운데 하나를 고른다.' },
      activity: {
        title: '집에서 이럴 땐 어떻게 할까?', tool: 'dilemma',
        teacher: '"동생이 약병을 들고 있어요. 나는 어떻게 할까요?" 보기를 고르기 전에 반 전체가 손을 들어 어느 쪽인지 먼저 보이게 한다. "내가 뺏어서 치워요"를 고른 학생에게 "뺏다가 병이 떨어지면 동생과 나는 어떻게 될까요?"라고 묻는다. 고른 뒤 \'처음부터 다른 길\'로 다른 결과도 함께 보고, 어른께 맡기는 것이 동생도 나도 지키는 길이라고 짚는다.',
        task: '장면마다 할 일을 고르고 결과를 봐요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          DILEMMA('동생이 약병을 들었어요. 골라요.', { text: '동생이 약병을 들고 있어요.', motif: 'house', choices: [
            { id: 'grab', text: '뺏어서 내가 치워요', result: '병이 떨어져 약이 쏟아졌어요.', why: '내가 뺏으면 떨어뜨릴 수 있어요. 어른께 맡겨요.' },
            { id: 'call', text: '"멈춰!" 하고 엄마를 불러요', result: '엄마가 달려오셨어요.', easyEnding: '엄마가 약병을 받아 높은 곳에 두셨어요.', next: { text: '엄마가 오셨어요. 이제 어떻게 해요?', choices: [
              { id: 'give', text: '약병을 가리켜 알려요', result: '엄마가 약병을 높은 곳에 두셨어요.', ending: '어른께 알려서 동생이 안전해요.' },
              { id: 'smell', text: '먼저 열어 냄새 맡아요', result: '약 냄새를 맡으면 어지러울 수 있어요.', why: '모르는 병은 열지 않아요.' }] } }] },
          ['call', 'give'], [{ id: 'adult', text: '약은 어른이 다뤄요' }, { id: 'sweet', text: '달콤해 보여서요', why: '달콤해 보여도 약은 사탕이 아니에요.' }, { id: 'fast', text: '빨리 끝나서요', why: '빠른 것보다 안전한 것이 먼저예요.' }], 'adult', 0.15),
          DILEMMA('식탁에 칼이 있어요. 골라요.', { text: '식탁 끝에 칼이 놓여 있어요.', motif: 'house', choices: [
            { id: 'move', text: '집어서 옮겨요', result: '칼날에 손을 벨 수 있어요.', why: '칼은 내가 옮기지 않아요.' },
            { id: 'tell', text: '어른께 알려요', result: '아빠가 "잠깐만" 하세요.', easyEnding: '아빠가 칼을 서랍에 넣으셨어요.', next: { text: '아빠가 바쁘셔서 못 오세요.', choices: [
              { id: 'wait', text: '칼 옆에서 떨어져 기다려요', result: '아빠가 오셔서 칼을 서랍에 넣으셨어요.', ending: '기다려서 아무도 안 다쳤어요.' },
              { id: 'self', text: '내가 서랍에 넣어요', result: '서랍에 넣다 손을 벨 수 있어요.', why: '어른이 바쁘셔도 칼은 기다렸다 맡겨요.' }] } }] },
          ['tell', 'wait'], [{ id: 'sharp', text: '칼은 뾰족해서요' }, { id: 'help', text: '도와 드리고 싶어서요', why: '돕고 싶어도 칼은 어른 몫이에요.' }, { id: 'none', text: '아무도 안 봐서요', why: '보는 사람이 없어도 약속을 지켜요.' }], 'sharp', 0.2),
          DILEMMA('다리미가 켜져 있어요. 골라요.', { text: '켜진 다리미가 바닥에 있어요.', motif: 'house', choices: [
            { id: 'pull', text: '줄을 당겨 꺼요', result: '다리미가 넘어질 수 있어요.', why: '켜진 다리미 줄은 당기지 않아요.' },
            { id: 'away', text: '떨어져서 어른을 불러요', result: '엄마가 오고 계세요.', easyEnding: '엄마가 다리미를 끄셨어요.', next: { text: '그사이 동생이 다가와요.', choices: [
              { id: 'warn', text: '"뜨거워!" 말해요', result: '동생이 멈춰 섰어요.', ending: '동생도 나도 안 다쳤어요.' },
              { id: 'look', text: '같이 구경해요', result: '동생이 손을 댈 수 있어요.', why: '동생에게 "뜨거워!"라고 알려 줘요.' }] } }] },
          ['away', 'warn'], [{ id: 'hot', text: '다리미는 뜨거워서요' }, { id: 'cool', text: '이제 식었을 것 같아서요', why: '켜져 있으면 뜨거워요. 만지지 않아요.' }, { id: 'brave', text: '나는 안 무서워서요', why: '용기보다 안전이 먼저예요.' }], 'hot', 0.25, { conclude: '위험한 것은 멈추고, 어른께 맡기고, 동생에게도 알려요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '동생이 약병을 들었어요. 무엇을 해요?', options: ['어른을 불러요', '내가 뺏어요'], answer: '어른을 불러요' }] },
      notes: '정답 길이 있는 갈림길이다. 다른 길도 끝까지 가 보게 해서 결과를 견주게 한다.',
    }),
    HOME({
      id: 'saf-life.e12.g1-home.wrap.home-check', type: 'wrap', title: '우리 집 안전 점검표',
      method: '우리 집 안전 그림 점검표', tool: 'kitchen', minutes: 7,
      levels: { easy: '교사가 점검표 칸을 하나씩 읽어 준다.', base: '스스로 읽고 오늘 알게 된 것에 표시한다.', challenge: '가족에게 말할 것을 하나 골라 한 줄로 쓴다.' },
      wrap: {
        teacher: '"오늘 배운 것 가운데 집에 가서 가족과 함께 살펴볼 것은 무엇인가요?" 점검표의 칸을 함께 읽고, 우리 집에서 어디에 있는지 떠올리게 한다. 출구 2번에서 "몰래 만져요"를 고른 학생에게 약속은 보는 사람이 없어도 나를 지킨다고 말해 준다.',
        exitTicket: [
          { type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title: '오늘 알게 된 것', items: [{ id: 'pill', text: '약은 높은 곳' }, { id: 'plug', text: '콘센트 덮개' }, { id: 'knife', text: '칼은 서랍에' }] }, prompt: '오늘 알게 된 것에 표시해요.', target: { selfCheck: true }, difficulty: 0.1 },
          { type: 'choice', prompt: '칼을 보면 어떻게 해요?', options: ['몰래 만져요', '어른께 말해요', '친구에게 줘요'], answer: 1, difficulty: 0.1, explain: '칼은 만지지 않고 어른께 말해요.' },
          MOOD,
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
          MOOD,
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
  ];

  // =====================================================================================================
  // 1학년 · 가위·연필 바르게 쓰고 손 씻기
  const TOOLS = MOD('saf-life.e12.g1-tools-hands', [1]);
  // 먹기 전 할 일 고르기(kitchen pick): 기본 5장, 쉬움 3장, 도전 6장('물로만 헹구기' 같은 함정)
  const SNACK = (prompt, good, bad, trap, d, more) => ({
    prompt, toolOptions: { mode: 'pick', basket: '먹기 전에', cards: [bad[0], good[0], bad[1], good[1], good[2]].filter(Boolean) }, target: { pick: good }, difficulty: d,
    levels: {
      easy: { prompt: `${cut(prompt)}(3장).`, toolOptions: { cards: [bad[0], good[0], good[1]] }, target: { pick: good.slice(0, 2) } },
      challenge: { prompt: `${cut(prompt)}(6장).`, toolOptions: { cards: [bad[0], good[0], trap, bad[1], good[1], good[2]] }, target: { pick: good } },
    },
    ...more,
  });
  const T_TOOLS = [
    TOOLS({
      id: 'saf-life.e12.g1-tools-hands.intro.tool-pick', type: 'intro', title: '바르게 쥔 손 고르기',
      method: '바르게 쥔 그림 고르기', tool: 'emotion', minutes: 6,
      levels: { easy: '교사가 두 그림만 보여 주고 바르게 쥔 것 하나를 고르게 한다.', base: '네 그림 가운데 바르게 쥔 두 그림을 고른다.', challenge: '쥔 그림에 더해 가위를 건네는 바른 모습까지 말한다.' },
      intro: {
        teacher: '"가위와 연필을 어떻게 쥐면 안전할까요?" 학생들이 자기 연필을 들어 보이게 한 뒤 시연 단추로 바르게 쥔 그림만 바구니에 담는 모습을 보여 준다. "날을 잡으면 더 잘 잘려요"라는 말이 나오면 "날은 무엇을 자르는 곳일까요? 손가락이 그 자리에 있으면 어떻게 될까요?"라고 되묻는다. 오늘은 가위·연필을 바르게 쥐고 건네는 법과 먹기 전에 손 씻는 차례를 배운다고 밝힌다.',
        student: '내 연필을 바르게 쥐어 보고 짝에게 보여 주어요.',
        demo: { tool: 'emotion', options: { mode: 'pick', basket: '바르게 쥐었어요', cards: [{ id: 'ring', text: '손잡이에 손가락' }, { id: 'blade', text: '날을 쥐었어요' }, { id: 'pen', text: '연필 바로 쥐기' }, { id: 'fist', text: '연필 꽉 주먹' }], shuffle: false }, sequence: [{ pick: ['ring', 'pen'] }] },
        art: { draw: 'a paper child holding safety scissors with fingers in the handle loops and a pencil held correctly, cut paper shapes on a desk', banner: '바르게 쥐어요' },
      },
    }),
    TOOLS({
      id: 'saf-life.e12.g1-tools-hands.intro.hand-body', type: 'intro', title: '손 씻을 곳 짚어 보기',
      method: '손 씻을 곳 짚기', tool: 'body', minutes: 5,
      levels: { easy: '교사가 손바닥·손등 두 곳만 짚어 보이고 함께 따라 짚는다.', base: '손바닥·손등·손가락 사이·손톱 밑 네 곳을 차례로 짚는다.', challenge: '네 곳을 짚은 뒤 그 차례대로 문지르는 동작까지 따라 한다.' },
      intro: {
        teacher: '"손을 씻을 때 어디 어디를 문질러야 할까요?" 종이 몸에서 손목과 피부를 짚는 시연을 보인 뒤, 학생들이 자기 손을 펴서 손바닥 → 손등 → 손가락 사이 → 손톱 밑을 차례로 짚게 한다. "손바닥만 씻으면 돼요"라는 말이 나오면 "손톱 밑에 낀 흙은 어떻게 빠질까요?"라고 되묻는다. 물로만 살짝 헹구는 것과 비누로 문지르는 것은 다르다는 점을 짚는다.',
        student: '내 손바닥, 손등, 손가락 사이, 손톱 밑을 차례로 짚어 보아요.',
        demo: { tool: 'body', options: { mode: 'parts', parts: ['손목', '피부', '팔꿈치', '어깨'], names: true }, sequence: [{ parts: ['손목', '피부'] }] },
        art: { draw: 'paper hands covered with soap bubbles, rubbing palms, the back of the hand and between the fingers over a small paper sink', banner: '구석구석 문질러요', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
      },
      notes: '종이 몸에는 손가락·손바닥 칸이 없어 손목·피부를 짚는 시연으로 대신하고, 네 곳은 학생이 자기 손으로 짚는다.',
    }),
    TOOLS({
      id: 'saf-life.e12.g1-tools-hands.activity.pass-order', type: 'activity', title: '가위 건네는 차례 놓기',
      method: '가위 건네는 장면 차례 놓기', tool: 'story', minutes: 14,
      levels: { easy: '첫 장면이 놓여 있어 남은 두 장만 놓고, 놓으면 바로 맞는지 알려 준다.', base: '장면 세 장을 차례대로 놓는다.', challenge: '"날 쪽 내밀어요" 같은 틀린 장면 한 장을 빼고 놓는다.' },
      activity: {
        title: '가위·연필 건네는 장면 차례 놓기', tool: 'story',
        teacher: '"친구에게 가위를 빌려줄 때 맨 먼저 무엇을 할까요?" 카드를 놓은 뒤 짝과 실제 가위(또는 종이 가위)로 건네기를 해 본다. 날 쪽을 내미는 학생에게 "받는 친구의 손이 어디를 잡게 될까요?"라고 묻는다. 가위를 들고 걸을 때는 날을 닫아 아래로 쥐고 걷는다는 점을 짚는다.',
        task: '장면 카드를 차례대로 놓아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          ORDER3('가위를 건네요. 차례로 놓아요.', [{ id: 'close', text: '가위 닫아요' }, { id: 'handle', text: '손잡이 쪽 내밀어요' }, { id: 'say', text: '"받아" 말해요' }], { id: 'blade', text: '날 쪽 내밀어요' }, 0.15),
          ORDER3('연필을 건네요. 차례로 놓아요.', [{ id: 'down', text: '연필 끝 아래로' }, { id: 'back', text: '뒤쪽을 내밀어요' }, { id: 'here', text: '"여기" 말해요' }], { id: 'throw', text: '던져 줘요' }, 0.2),
          ORDER3('가위 들고 자리로 가요. 차례로 놓아요.', [{ id: 'shut', text: '가위 닫아요' }, { id: 'hold', text: '날을 아래로 쥐어요' }, { id: 'walk', text: '천천히 걸어요' }], { id: 'run', text: '들고 뛰어요' }, 0.25, { conclude: '가위는 닫고, 손잡이 쪽으로 건네고, 들고 뛰지 않아요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '가위는 어느 쪽으로 건네요?', options: ['손잡이 쪽', '날 쪽'], answer: '손잡이 쪽' }] },
    }),
    TOOLS({
      id: 'saf-life.e12.g1-tools-hands.activity.tool-ok', type: 'activity', title: '학용품 좋아요·안돼요',
      method: '좋아요/안돼요: 학용품 쓰기', tool: 'mindmap', minutes: 13,
      levels: { easy: '카드 4장, 맞는 칸에 놓으면 초록 테두리가 생긴다.', base: '카드 6장을 다 놓은 뒤 확인한다.', challenge: '카드 8장, "가위로 머리카락 자르기"처럼 헷갈리는 카드가 섞인다.' },
      activity: {
        title: '학용품 쓰는 행동 나누기', tool: 'mindmap',
        teacher: '"이렇게 쓰면 좋아요일까요, 안돼요일까요?" 카드를 놓을 때마다 그 행동을 손으로 흉내 내 보게 한다. "가위 들고 뛰기"를 "조심하면 돼요"라며 좋아요에 두는 학생에게 "뛰다 넘어지면 가위 날이 어디로 갈까요?"라고 묻는다. 연필 끝은 사람을 향하지 않게 든다는 점을 짚는다.',
        task: '학용품 카드를 좋아요·안돼요로 나누어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          SORT2(OKNO, '가위 쓰는 법을 나누어요.', '가위', ['가위 닫아 두기', '종이만 자르기', '앉아서 쓰기'], ['가위 들고 뛰기', '날 잡기', '친구 쪽 향하기'], ['머리카락 자르기', '입에 물기'], 0.1),
          SORT2(OKNO, '연필 쓰는 법을 나누어요.', '연필', ['바르게 쥐기', '끝 아래로 들기', '필통에 넣기'], ['연필 입에 물기', '연필로 찌르기', '귀에 넣기'], ['연필 휘두르기', '끝 위로 뛰기'], 0.15),
          SORT2(OKNO, '풀·자 쓰는 법을 나누어요.', '풀과 자', ['풀 뚜껑 닫기', '자는 책상에', '쓰고 정리하기'], ['풀 먹어 보기', '자 휘두르기', '자로 때리기'], ['풀 냄새 맡기', '자로 칼싸움'], 0.2, { conclude: '학용품은 쓰는 곳에만 쓰고, 다 쓰면 닫아서 정리해요.' }),
        ],
      },
      worksheet: { items: [{ type: 'table', prompt: '좋으면 ○, 안 되면 ×를 써요.', columns: ['행동', '○ / ×'], cells: [['가위 들고 뛰기', ''], ['연필 바르게 쥐기', ''], ['연필 입에 물기', '']], answer: '×, ○, ×' }] },
    }),
    TOOLS({
      id: 'saf-life.e12.g1-tools-hands.activity.wash-steps', type: 'activity', title: '손 씻기 차례와 문지르기',
      method: '손 씻기 따라 하기', tool: 'timer', minutes: 14,
      levels: { easy: '카드 2장의 차례만 맞추고, 문지르기는 2번 되풀이한다.', base: '카드 3장의 차례를 맞추고, 손바닥·손등·손가락 사이 3번 문지르기에 타이머를 맞춘다.', challenge: '카드 4장(손가락 사이 더하기)을 맞추고, 손톱 밑까지 4번 문지르기에 맞춘다.' },
      activity: {
        title: '손 씻기 차례 맞추고 따라 하기', tool: 'timer',
        teacher: '"손을 씻을 때 무엇부터 할까요?" 차례를 맞춘 뒤 타이머의 운동 칸 하나를 문지르기 한 번으로 정하고, 시작 단추를 누르면 반 전체가 손바닥 → 손등 → 손가락 사이를 차례로 문지르는 흉내를 낸다. "물만 묻히면 깨끗해요"라는 학생에게 "비누 없이 헹구면 손에 묻은 기름이 빠질까요?"라고 묻는다. 마지막에 실제 세면대에서 해 볼 때도 같은 차례라고 짚는다.',
        task: '손 씻기 카드를 차례대로 놓고 타이머를 맞춰요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          { prompt: '손 씻는 차례로 놓아요.', toolOptions: { title: '손 씻기 차례', cards: ['비누 칠해요', '헹궈요', '물 묻혀요'] }, target: { order: ['물 묻혀요', '비누 칠해요', '헹궈요'] }, difficulty: 0.1,
            levels: {
              easy: { prompt: '손 씻는 차례로 놓아요(2장).', toolOptions: { cards: ['비누 칠해요', '물 묻혀요'] }, target: { order: ['물 묻혀요', '비누 칠해요'] } },
              challenge: { prompt: '손 씻는 차례로 놓아요(4장).', toolOptions: { cards: ['헹궈요', '손가락 사이', '물 묻혀요', '비누 칠해요'] }, target: { order: ['물 묻혀요', '비누 칠해요', '손가락 사이', '헹궈요'] } },
            } },
          { prompt: '문지르기 3번이 되게 맞춰요.', toolOptions: { title: '문지르기 횟수', plan: { work: 10, rest: 5, rounds: 1 } }, target: { plan: { rounds: 3 } }, difficulty: 0.15,
            hints: ['손바닥, 손등, 손가락 사이를 하나씩 세어 봐요.', '번 칸이 문지르기 횟수예요.', '번 칸을 3에 맞춰요.'],
            levels: {
              easy: { prompt: '문지르기 2번이 되게 맞춰요.', target: { plan: { rounds: 2 } } },
              challenge: { prompt: '손톱 밑까지 4번이 되게 맞춰요.', target: { plan: { rounds: 4 } } },
            } },
          { prompt: '헹군 뒤 할 일을 차례로 놓아요.', toolOptions: { title: '헹군 뒤', cards: ['손을 말려요', '물을 잠가요', '물기를 털어요'] }, target: { order: ['물을 잠가요', '물기를 털어요', '손을 말려요'] }, difficulty: 0.2, conclude: '물 → 비누 → 구석구석 문지르기 → 헹구기 → 말리기 차례로 씻어요.' },
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '손에 물을 묻히고 ___을 칠해요.', answer: '비누' }] },
      notes: '손 씻기 시간 길이는 이 근거 파일에 없어 권장하지 않는다. 타이머는 문지르기 횟수(번)로만 맞춘다.',
    }),
    TOOLS({
      id: 'saf-life.e12.g1-tools-hands.activity.snack-pick', type: 'activity', title: '먹기 전 할 일 고르기',
      method: '먹기 전 할 일 고르기', tool: 'kitchen', minutes: 14,
      levels: { easy: '카드 3장 가운데 먹기 전에 할 일만 고른다.', base: '카드 5장 가운데 고른다.', challenge: '카드 6장, "물로만 헹구기"처럼 헷갈리는 함정 카드가 섞인다.' },
      activity: {
        title: '먹기 전에 할 일 바구니에 담기', tool: 'kitchen',
        teacher: '"간식을 먹기 전에 무엇을 해야 할까요?" 카드를 바구니에 담을 때마다 그 행동을 몸으로 흉내 낸다. "물로만 헹구기"를 담는 학생에게 "비누 없이 헹구면 손이 정말 깨끗해질까요?"라고 묻는다. 바닥에 떨어진 것은 아까워도 먹지 않는다는 점을 짚는다.',
        task: '먹기 전에 할 일만 바구니에 담아요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          SNACK('간식 시간이에요. 할 일을 담아요.', ['손 씻기', '자리에 앉기', '흘린 것 버리기'], ['떨어진 것 먹기', '뛰며 먹기'], '물로만 헹구기', 0.1),
          SNACK('점심 시간이에요. 할 일을 담아요.', ['비누로 씻기', '줄 서기', '수저 챙기기'], ['손 안 씻기', '장난치기'], '옷에 손 닦기', 0.15),
          SNACK('놀이 뒤 간식이에요. 할 일을 담아요.', ['흙 털기', '손 씻기', '손 말리기'], ['흙손으로 먹기', '바닥 과자'], '침으로 닦기', 0.2, { conclude: '먹기 전에는 비누로 손을 씻고, 떨어진 것은 먹지 않아요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '먹기 전에 할 일에 ○ 해요.', options: ['비누로 손 씻기', '바닥 과자 먹기'], answer: '비누로 손 씻기' }] },
    }),
    TOOLS({
      id: 'saf-life.e12.g1-tools-hands.wrap.tool-check', type: 'wrap', title: '학용품 약속 점검표',
      method: '학용품 약속 점검표', tool: 'kitchen', minutes: 7,
      levels: { easy: '교사가 점검표 칸을 하나씩 읽어 주고 함께 표시한다.', base: '스스로 읽고 오늘 해 본 것에 표시한다.', challenge: '표시한 뒤 내일 해 볼 약속 하나를 골라 짝에게 말한다.' },
      wrap: {
        teacher: '"오늘 해 본 약속 가운데 내가 잘한 것은 무엇인가요?" 점검표를 함께 읽고 해 본 것에 표시하게 한다. 출구 2번에서 "날 쪽"을 고른 학생과는 짝끼리 가위 건네기를 한 번 더 해 본다. 마지막에 "닫고, 손잡이, 받아!"를 손짓과 함께 말한다.',
        exitTicket: [
          CHECK('학용품 약속', [{ id: 'close', text: '가위 닫기' }, { id: 'pencil', text: '연필 바로 쥐기' }, { id: 'wash', text: '손 씻기' }]),
          { type: 'choice', prompt: '가위는 어떻게 건네요?', options: ['날 쪽으로', '손잡이 쪽으로', '던져서'], answer: 1, difficulty: 0.1, explain: '가위를 닫고 손잡이 쪽으로 건네요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '가위·연필 약속',
        items: [
          { type: 'check', prompt: '내가 해 본 것에 ✓ 해요.', options: ['가위를 닫아 두었어요', '손잡이 쪽으로 건넸어요', '먹기 전에 손을 씻었어요'] },
          { type: 'draw', prompt: '가위를 바르게 건네는 모습을 그려요.' },
        ],
        easy: { note: '"닫고, 손잡이, 받아"를 떠올려요.', items: [{ type: 'draw', prompt: '바르게 쥔 내 손을 그려요.' }] },
      },
    }),
    TOOLS({
      id: 'saf-life.e12.g1-tools-hands.wrap.hands-chant', type: 'wrap', title: '"비누, 쓱쓱, 헹궈요" 구호',
      method: '손 씻기 구호로 마무리', tool: 'timer', minutes: 7,
      levels: { easy: '교사가 구호 두 개를 먼저 외치고 함께 따라 한다.', base: '구호 카드 세 장의 차례를 맞추고 동작과 함께 외친다.', challenge: '차례를 맞춘 뒤 스스로 점검 질문에 답하고 짝과 서로 손 씻기 동작을 보여 준다.' },
      wrap: {
        teacher: '"비누! (손바닥 비비기) 쓱쓱! (손등 문지르기) 헹궈요! (손 털기)" 구호 카드를 차례대로 놓은 뒤 반 전체가 동작과 함께 세 번 외친다. 출구 2번에서 "물로만"을 고른 학생에게 "비누 거품이 손가락 사이까지 가야 깨끗해져요"라고 말해 준다. 집에 가서 밥 먹기 전에도 구호를 떠올리자고 한다.',
        exitTicket: [
          CHANT('손 씻기 구호', ['비누', '쓱쓱', '헹궈요']),
          { type: 'choice', prompt: '손은 어떻게 씻어요?', options: ['물로만 살짝', '비누로 구석구석', '옷에 닦기'], answer: 1, difficulty: 0.1, explain: '비누로 손가락 사이까지 문질러요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '비누, 쓱쓱, 헹궈요!',
        items: [
          { type: 'blank', prompt: '구호를 따라 써요.', text: '비누, 쓱쓱, ___!', answer: '헹궈요' },
          { type: 'draw', prompt: '비누로 손 씻는 내 모습을 그려요.' },
        ],
      },
    }),
  ];

  // =====================================================================================================
  // 1학년 · 놀이터 놀이 기구
  const PLAY = MOD('saf-life.e12.g1-playground', [1]);
  // 놀이 기구 세 가지로 나누기(mindmap): 기본 3가지 6장, 쉬움 2가지 4장, 도전 8장(어디에도 안 맞는 위험 카드 2장 — 판에 남김)
  const RIDES = ['그네', '미끄럼틀', '시소'];
  const RIDE = (prompt, cards, trap, d, more) => ({
    prompt, toolOptions: { topic: '놀이터', slots: RIDES, cards: [cards[0][0], cards[1][0], cards[2][0], cards[0][1], cards[1][1], cards[2][1]] }, target: { sort: { 그네: cards[0], 미끄럼틀: cards[1], 시소: cards[2] } }, difficulty: d,
    levels: {
      easy: { prompt: `${cut(prompt)}(4장).`, toolOptions: { slots: RIDES.slice(0, 2), cards: [cards[0][0], cards[1][0], cards[0][1], cards[1][1]] }, target: { sort: { 그네: cards[0], 미끄럼틀: cards[1] } } },
      challenge: { prompt: `${cut(prompt)}(8장).`, toolOptions: { cards: [cards[0][0], trap[0], cards[1][0], cards[2][0], cards[0][1], trap[1], cards[1][1], cards[2][1]] }, target: { sort: { 그네: cards[0], 미끄럼틀: cards[1], 시소: cards[2] } } },
    },
    ...more,
  });
  const PARK = [
    { name: '그네 앞뒤', cells: [[0, 0], [0, 1]] }, { name: '미끄럼틀', cells: [[1, 0]] }, { name: '모래밭', cells: [[1, 1], [2, 1], [2, 0]] },
    { name: '시소 끝', cells: [[3, 0], [3, 1]] }, { name: '가장자리 길', cells: [[0, 2], [1, 2], [2, 2], [3, 2]] },
  ];
  const PARKPIN = (prompt, region, d, more) => ({ prompt, toolOptions: { grid: [4, 3], regions: PARK, title: '우리 동네 놀이터' }, target: { region }, difficulty: d, ...more });
  const T_PLAY = [
    PLAY({
      id: 'saf-life.e12.g1-playground.intro.park-scene', type: 'intro', title: '놀이터 그림에서 위험 고르기',
      method: '놀이터 장면에서 위험 고르기', tool: 'emotion', minutes: 6,
      levels: { easy: '교사가 그림 속 행동을 하나씩 읽어 주고 위험한 것 두 가지를 함께 찾는다.', base: '시연을 보고 위험한 행동 세 가지를 스스로 말한다.', challenge: '위험한 행동을 고른 뒤 줄 서서 기다리는 친구를 칭찬하는 말을 한다.' },
      intro: {
        teacher: '"놀이터 그림에서 다칠 것 같은 친구는 누구일까요?" 두세 명의 대답을 듣고(기다릴 반응: "그네 앞을 지나가요", "미끄럼틀을 거꾸로 올라가요") 시연 단추로 위험한 행동만 바구니에 담기는 모습을 보여 준다. "거꾸로 올라가면 운동이 돼요"라는 말이 나오면 "위에서 친구가 내려오면 어떻게 될까요?"라고 되묻는다. 오늘은 그네·미끄럼틀·시소를 차례 지켜 타는 법을 배운다고 밝힌다.',
        student: '놀이터에서 좋아하는 놀이 기구를 하나 골라 짝에게 말해 보아요.',
        demo: { tool: 'emotion', options: { mode: 'pick', basket: '위험해요', cards: [{ id: 'front', text: '그네 앞 지나기' }, { id: 'line', text: '줄 서기' }, { id: 'up', text: '거꾸로 오르기' }, { id: 'sit', text: '앉아서 타기' }, { id: 'push', text: '친구 밀기' }, { id: 'wait', text: '차례 기다리기' }], shuffle: false }, sequence: [{ pick: ['front', 'up', 'push'] }] },
        art: { draw: 'a paper playground with swings, a slide and a seesaw, paper children waiting in line while one child walks in front of a moving swing', banner: '놀이터에서 조심해요' },
      },
    }),
    PLAY({
      id: 'saf-life.e12.g1-playground.intro.line-up', type: 'intro', title: '놀이 끝 시각 보고 줄 서기',
      method: '놀이 시간 시계 보기', tool: 'clock', minutes: 5,
      levels: { easy: '시계 바늘이 정각에 놓여 있고, 교사가 두 시각 가운데 하나를 고르게 한다.', base: '시연 시계를 보고 놀이가 끝나는 정각을 말한다.', challenge: '교사가 말한 정각에 학생이 손으로 긴바늘·짧은바늘을 흉내 낸다.' },
      intro: {
        teacher: '"긴바늘이 12에 오면 놀이 시간이 끝나요. 그때 우리는 무엇을 할까요?" 시연 단추로 시계가 정각이 되는 모습을 보여 주고 "이때 줄 서요!"를 반 전체가 따라 말한다. "더 놀고 싶으면 늦게 가도 돼요"라는 말이 나오면 "한 친구가 늦게 오면 기다리는 친구들은 어떻게 될까요?"라고 되묻는다. 줄 설 때도 뛰지 않고 걸어서 모인다는 점을 짚는다.',
        student: '시계가 정각이 되면 "이때 줄 서요!"를 따라 말해요.',
        demo: { tool: 'clock', options: { hourOnly: true, showDigital: false }, sequence: [{ h: 11, m: 0 }] },
        art: { draw: 'a large paper clock at the edge of a paper playground, paper children walking to form a line when the long hand reaches twelve', banner: '정각이면 줄 서요', extra: [{ motif: 'sun', x: 300, y: 96, color: 'buttercup' }] },
      },
    }),
    PLAY({
      id: 'saf-life.e12.g1-playground.activity.ride-sort', type: 'activity', title: '놀이 기구별 바른 행동 나누기',
      method: '놀이 기구별 좋아요/안돼요', tool: 'mindmap', minutes: 14,
      levels: { easy: '그네·미끄럼틀 두 가지에 카드 4장, 맞는 가지에 놓으면 초록 테두리가 생긴다.', base: '그네·미끄럼틀·시소 세 가지에 카드 6장을 놓는다.', challenge: '카드 8장, 어디에도 놓으면 안 되는 위험한 카드 2장을 빼고 놓는다.' },
      activity: {
        title: '그네·미끄럼틀·시소 가지에 나누기', tool: 'mindmap',
        teacher: '"이 행동은 어느 놀이 기구에서 하는 좋은 행동일까요?" 카드를 놓을 때마다 그 기구를 타는 흉내를 내며 좋아요라고 말하게 한다. "서서 타요"를 그네에 두는 학생에게 "서서 타다 손이 미끄러지면 어디로 떨어질까요?"라고 묻는다. 위험한 카드는 어느 가지에도 넣지 않는다는 점을 짚는다.',
        task: '바른 행동 카드를 놀이 기구 가지에 놓아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          RIDE('탈 때 바른 행동을 나누어요.', [['앉아서 타요', '줄 꼭 잡아요'], ['앉아서 내려요', '계단으로 올라요'], ['마주 보고 앉아요', '손잡이 잡아요']], ['서서 타요', '거꾸로 올라요'], 0.1),
          RIDE('기다리고 내릴 때를 나누어요.', [['선 밖에서 기다려요', '멈춘 뒤 내려요'], ['앞 친구 기다려요', '내리면 바로 비켜요'], ['말하고 내려요', '천천히 내려요']], ['줄 흔들기', '엎드려 내리기'], 0.15),
          RIDE('친구와 함께 탈 때를 나누어요.', [['한 명씩 타요', '앞뒤로 안 지나요'], ['한 줄로 서요', '위에서 안 밀어요'], ['양쪽 맞춰 앉아요', '발 밑 조심해요']], ['둘이 그네 타기', '꼭대기서 놀기'], 0.2, { conclude: '놀이 기구마다 바르게 타는 법이 있어요. 위험한 행동은 하지 않아요.' }),
        ],
      },
      worksheet: { items: [{ type: 'table', prompt: '좋으면 ○, 안 되면 ×를 써요.', columns: ['행동', '○ / ×'], cells: [['그네에 앉아서 타요', ''], ['미끄럼틀 거꾸로 올라요', ''], ['시소 손잡이 잡아요', '']], answer: '○, ×, ○' }] },
    }),
    PLAY({
      id: 'saf-life.e12.g1-playground.activity.slide-order', type: 'activity', title: '미끄럼틀 타는 차례 놓기',
      method: '미끄럼틀 타는 장면 차례 놓기', tool: 'story', minutes: 13,
      levels: { easy: '첫 장면이 놓여 있어 남은 두 장만 놓고, 놓으면 바로 맞는지 알려 준다.', base: '장면 세 장을 차례대로 놓는다.', challenge: '"거꾸로 올라요" 같은 틀린 장면 한 장을 빼고 놓는다.' },
      activity: {
        title: '놀이 기구 타는 장면 차례 놓기', tool: 'story',
        teacher: '"미끄럼틀은 어떤 차례로 탈까요?" 카드를 놓은 뒤 자리에서 일어나 계단 오르기 → 앉기 → 손 흔들어 "비켰어?" 묻기 동작을 따라 한다. "앉아요"보다 "내려요"를 먼저 두는 학생에게 "서서 내려가면 어떻게 될까요?"라고 묻는다. 앞 친구가 다 비킨 뒤에 내려간다는 점을 짚는다.',
        task: '장면 카드를 차례대로 놓아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          ORDER3('미끄럼틀을 타요. 차례로 놓아요.', [{ id: 'climb', text: '계단으로 올라요' }, { id: 'sit', text: '앉아요' }, { id: 'go', text: '비키면 내려요' }], { id: 'back', text: '거꾸로 올라요' }, 0.15),
          ORDER3('그네를 타요. 차례로 놓아요.', [{ id: 'wait', text: '줄 서서 기다려요' }, { id: 'hold', text: '앉아서 줄 잡아요' }, { id: 'off', text: '멈춘 뒤 내려요' }], { id: 'stand', text: '서서 타요' }, 0.2),
          ORDER3('시소를 타요. 차례로 놓아요.', [{ id: 'face', text: '마주 보고 앉아요' }, { id: 'grip', text: '손잡이 잡아요' }, { id: 'tell', text: '말하고 내려요' }], { id: 'drop', text: '갑자기 내려요' }, 0.25, { conclude: '차례를 기다리고, 앉아서 타고, 멈춘 뒤에 내려요.' }),
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '미끄럼틀은 ___ 내려가요.', answer: '앉아서' }] },
    }),
    PLAY({
      id: 'saf-life.e12.g1-playground.activity.swing-map', type: 'activity', title: '놀이터 지도에 피할 곳 꽂기',
      method: '놀이터 지도에 피할 곳 핀', tool: 'map', minutes: 14,
      levels: { easy: '핀을 놓으면 그 칸의 이름이 바로 보인다.', base: '이름을 보고 알맞은 곳에 꽂는다.', challenge: '이름이 지도에 없어 색과 자리만 보고 꽂는다.' },
      activity: {
        title: '놀이터 지도에 피할 곳·지나갈 길 꽂기', tool: 'map',
        teacher: '"그네가 움직일 때 어디를 지나가면 위험할까요?" 핀을 꽂기 전에 그네가 오가는 모습을 팔로 흉내 내 보게 한다. 그네 바로 옆을 "빨리 지나가면 괜찮아요"라고 하는 학생에게 "그네가 돌아올 때 내 몸이 거기 있으면 어떻게 될까요?"라고 묻는다. 마지막 문항에서 멀리 돌아가는 가장자리 길이 안전한 길이라고 짚는다.',
        task: '알맞은 곳에 핀을 꽂아요.', levels: { easy: { readout: true }, base: {}, challenge: { regionNames: false } },
        items: [
          PARKPIN('그네가 오가는 곳에 꽂아요.', '그네 앞뒤', 0.1),
          PARKPIN('시소가 내려오는 곳에 꽂아요.', '시소 끝', 0.15),
          PARKPIN('안전하게 지나갈 길에 꽂아요.', '가장자리 길', 0.2, { conclude: '그네 앞뒤와 시소 끝은 피하고, 가장자리 길로 돌아가요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '지나가면 안 되는 곳에 ○ 해요.', options: ['그네 앞뒤', '가장자리 길'], answer: '그네 앞뒤' }] },
    }),
    PLAY({
      id: 'saf-life.e12.g1-playground.activity.turn-role', type: 'activity', title: '갈림길: 그네를 오래 타는 친구',
      method: '갈림길: 그네를 오래 타는 친구', tool: 'dilemma', minutes: 14,
      levels: { easy: '첫 갈림에서 보기 2개 가운데 한 번만 고른다.', base: '고른 뒤 이어지는 장면에서 한 번 더 고른다(갈림 2번).', challenge: '갈림 2번을 지나 끝에서 좋은 까닭 카드 3장 가운데 하나를 고른다.' },
      activity: {
        title: '놀이터에서 이럴 땐 어떻게 할까?', tool: 'dilemma',
        teacher: '"줄을 기다리는데 친구가 그네에서 안 내려와요. 나는 어떻게 할까요?" 고른 뒤 짝과 그 말을 실제로 주고받아 본다. "줄을 잡아서 세워요"를 고른 학생에게 "그네가 움직일 때 줄을 잡으면 누가 다칠까요?"라고 묻는다. 다른 길도 끝까지 가 보며 말로 부탁하고 기다리는 것이 둘 다 안전하게 노는 길이라고 짚는다.',
        task: '장면마다 할 일을 고르고 결과를 봐요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          DILEMMA('친구가 그네에서 안 내려와요. 골라요.', { text: '친구가 그네를 오래 타요.', motif: 'tree', choices: [
            { id: 'grab', text: '그네 줄을 잡아 세워요', result: '그네가 흔들려 둘 다 넘어졌어요.', why: '움직이는 그네는 잡지 않아요.' },
            { id: 'ask', text: '"나도 타고 싶어" 말해요', result: '친구가 "조금만 더" 해요.', easyEnding: '친구가 열을 세고 내려왔어요.', next: { text: '친구가 "조금만 더" 해요.', choices: [
              { id: 'count', text: '"열까지 셀게" 하고 기다려요', result: '열을 세자 친구가 내려왔어요.', ending: '말로 부탁하고 기다려서 둘 다 즐거워요.' },
              { id: 'push', text: '밀어서 내리게 해요', result: '친구가 떨어질 수 있어요.', why: '밀지 않고 말로 부탁해요.' }] } }] },
          ['ask', 'count'], [{ id: 'turn', text: '차례는 모두의 것이에요' }, { id: 'win', text: '내가 이기고 싶어서요', why: '이기는 것보다 함께 노는 것이 먼저예요.' }, { id: 'fast', text: '빨리 타려고요', why: '서두르면 다칠 수 있어요.' }], 'turn', 0.15),
          DILEMMA('미끄럼틀에서 안 내려가요. 골라요.', { text: '미끄럼틀 위에 친구가 앉아 있어요.', motif: 'tree', choices: [
            { id: 'shove', text: '뒤에서 밀어요', result: '친구가 갑자기 미끄러졌어요.', why: '미끄럼틀 위에서는 밀지 않아요.' },
            { id: 'say', text: '"내려가 줄래?" 말해요', result: '친구가 "무서워" 해요.', easyEnding: '친구가 천천히 내려갔어요.', next: { text: '친구가 "무서워" 해요.', choices: [
              { id: 'help', text: '선생님께 도와 달라 해요', result: '선생님이 친구 손을 잡아 주셨어요.', ending: '도움을 청해서 친구가 안전하게 내려왔어요.' },
              { id: 'tease', text: '"겁쟁이" 놀려요', result: '친구가 울면서 움직이지 못해요.', why: '무서운 친구는 놀리지 않고 도와줘요.' }] } }] },
          ['say', 'help'], [{ id: 'safe', text: '친구도 안전해야 해요' }, { id: 'bored', text: '기다리기 싫어서요', why: '기다리기 싫어도 밀면 안 돼요.' }, { id: 'funny', text: '재미있어서요', why: '친구가 무서우면 재미있는 일이 아니에요.' }], 'safe', 0.2),
          DILEMMA('친구가 시소에서 내리려 해요. 골라요.', { text: '시소 건너편 친구가 갑자기 내리려 해요.', motif: 'tree', choices: [
            { id: 'jump', text: '나도 뛰어내려요', result: '시소가 쿵 내려앉았어요.', why: '시소에서 갑자기 뛰어내리지 않아요.' },
            { id: 'slow', text: '"천천히 내려" 말해요', result: '친구가 멈추고 기다려요.', easyEnding: '시소가 천천히 내려왔어요.', next: { text: '친구가 내려도 되냐고 물어요.', choices: [
              { id: 'hold', text: '손잡이 잡고 "응" 해요', result: '시소가 천천히 땅에 닿았어요.', ending: '서로 말하고 내려서 아무도 안 다쳤어요.' },
              { id: 'stand', text: '시소 위에 서요', result: '균형을 잃고 넘어질 수 있어요.', why: '시소 위에서는 앉아서 손잡이를 잡아요.' }] } }] },
          ['slow', 'hold'], [{ id: 'talk', text: '말하고 내리면 안전해요' }, { id: 'quick', text: '빨리 끝내고 싶어서요', why: '빨리보다 함께 천천히 내려요.' }, { id: 'strong', text: '나는 힘이 세서요', why: '힘이 세도 갑자기 내리면 다쳐요.' }], 'talk', 0.25, { conclude: '놀이 기구에서는 밀지 않고, 말로 부탁하고, 천천히 내려요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '그네를 타고 싶을 때 어떻게 해요?', options: ['말하고 기다려요', '줄을 잡아요'], answer: '말하고 기다려요' }] },
    }),
    PLAY({
      id: 'saf-life.e12.g1-playground.wrap.play-check', type: 'wrap', title: '놀이 전 안전 점검',
      method: '놀이 전 안전 점검', tool: 'timer', minutes: 7,
      levels: { easy: '교사가 점검 칸을 하나씩 읽어 주고 함께 표시한다.', base: '스스로 점검 칸 세 개를 모두 확인해 표시한다.', challenge: '스스로 표시한 뒤 짝의 신발 끈과 줄 선 자리를 서로 봐 준다.' },
      wrap: {
        teacher: '"놀이터에 나가기 전에 무엇을 살펴볼까요?" 점검 칸을 함께 읽고, 실제로 신발 끈을 내려다보며 하나씩 표시하게 한다. 출구 2번에서 "그네 앞으로"를 고른 학생에게 "그네가 돌아오는 자리는 피해서 돌아가요"라고 말해 준다. 마지막에 "끈 묶고, 줄 서고, 앞 비우고!"를 함께 외친다.',
        exitTicket: [
          SELF('놀이 전 점검', ['신발 끈 묶었어요', '줄을 섰어요', '기구 앞을 비웠어요']),
          { type: 'choice', prompt: '그네 쪽으로 갈 때는요?', options: ['그네 앞으로', '멀리 돌아서', '그네 뒤로'], answer: 1, difficulty: 0.1, explain: '그네 앞뒤는 피하고 멀리 돌아가요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '놀이터 안전 점검',
        items: [
          { type: 'check', prompt: '놀기 전에 살펴요.', options: ['신발 끈을 묶었어요', '줄을 서서 기다려요', '놀이 기구 앞을 비웠어요'] },
          { type: 'draw', prompt: '차례를 기다리는 내 모습을 그려요.' },
        ],
        easy: { note: '"끈, 줄, 앞"을 떠올려요.', items: [{ type: 'draw', prompt: '신발 끈을 묶은 내 발을 그려요.' }] },
      },
    }),
    PLAY({
      id: 'saf-life.e12.g1-playground.wrap.play-feel', type: 'wrap', title: '차례 지킨 마음 짝 짓기',
      method: '차례 지킨 마음 짝 짓기', tool: 'emotion', minutes: 7,
      levels: { easy: '교사가 장면을 읽어 주고 함께 마음 카드를 고른다.', base: '장면 두 개에 마음 카드를 스스로 짝 짓는다.', challenge: '짝 지은 뒤 차례를 지킨 친구에게 칭찬 한마디를 한다.' },
      wrap: {
        teacher: '"차례를 기다렸을 때 내 마음은 어땠을까요? 친구를 밀었다면요?" 장면마다 마음 카드를 짝 짓고 한 명씩 까닭을 말하게 한다. "밀었어요"에 뿌듯함을 둔 학생에게 "밀린 친구의 마음은 어떨까요?"라고 되묻는다. 기다리기 힘들었어도 기다린 것은 잘한 일이라고 말해 준다.',
        exitTicket: [
          { type: 'tool', tool: 'emotion', options: { mode: 'match', slots: [{ id: 's1', label: '차례를 기다렸어요' }, { id: 's2', label: '친구를 밀었어요' }], cards: ['뿌듯함', '미안함', '신남'] }, prompt: '장면과 내 마음을 이어요.', target: { match: { s1: ['뿌듯함', '신남'], s2: ['미안함'] } }, difficulty: 0.15 },
          { type: 'choice', prompt: '친구를 밀었어요. 어떻게 해요?', options: ['모른 척해요', '미안하다 말해요', '또 밀어요'], answer: 1, difficulty: 0.1, explain: '밀었다면 미안하다고 말하고 괜찮은지 물어요.' },
          { type: 'short', prompt: '차례를 지킨 친구를 칭찬해요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '차례를 지켜요',
        items: [
          { type: 'table', prompt: '좋으면 ○, 안 되면 ×를 써요.', columns: ['장면', '○ / ×'], cells: [['줄 서서 기다려요', ''], ['새치기해요', ''], ['친구를 밀어요', '']], answer: '○, ×, ×' },
          { type: 'draw', prompt: '친구와 차례대로 노는 모습을 그려요.' },
        ],
      },
    }),
  ];

  // =====================================================================================================
  // 1학년 · 공원과 바깥 놀이
  const OUT = MOD('saf-life.e12.g1-outdoor', [1]);
  const PARKMAP = [{ name: '보호자 의자', icon: 'dot', at: [1, 1] }, { name: '연못', icon: 'dot', at: [3, 0] }, { name: '주차장', icon: 'dot', at: [3, 2] }, { name: '잔디밭', icon: 'park', at: [0, 1] }];
  const T_OUT = [
    OUT({
      id: 'saf-life.e12.g1-outdoor.intro.park-pick', type: 'intro', title: '공원에서 놀기 좋은 곳 고르기',
      method: '공원 그림에서 놀기 좋은 곳 고르기', tool: 'emotion', minutes: 6,
      levels: { easy: '교사가 잔디밭·연못가 두 곳만 가리키며 고르게 한다.', base: '네 곳 가운데 놀기 좋은 두 곳을 스스로 고른다.', challenge: '놀기 좋은 곳에 더해 피할 곳과 그 까닭을 말한다.' },
      intro: {
        teacher: '"공원에 가면 어디에서 놀고 싶나요? 그곳은 안전할까요?" 두세 명의 대답을 듣고 시연 단추로 놀기 좋은 곳만 바구니에 담기는 모습을 보여 준다. "연못가에서 물고기 보면 재밌어요"라는 말이 나오면 "발이 미끄러지면 어디로 떨어질까요? 볼 때는 누구와 함께 볼까요?"라고 되묻는다. 오늘은 어른이 보이는 곳에서 노는 약속을 배운다고 밝힌다.',
        student: '공원에서 놀고 싶은 곳을 하나 골라 짝에게 말해 보아요.',
        demo: { tool: 'emotion', options: { mode: 'pick', basket: '놀기 좋아요', cards: [{ id: 'grass', text: '잔디밭' }, { id: 'pond', text: '연못가' }, { id: 'park', text: '주차장' }, { id: 'sand', text: '모래밭' }], shuffle: false }, sequence: [{ pick: ['grass', 'sand'] }] },
        art: { draw: 'a paper park with a green lawn, a sandbox, a pond and a parking lot, a parent sitting on a bench watching children play on the lawn', banner: '어디서 놀까요?', extra: [{ motif: 'tree', x: 300, y: 222 }] },
      },
    }),
    OUT({
      id: 'saf-life.e12.g1-outdoor.intro.see-adult', type: 'intro', title: '어른이 보이는 곳 찾기',
      method: '어른 곁 칸 찾기', tool: 'map', minutes: 5,
      levels: { easy: '교사가 보호자 의자 칸을 먼저 짚어 주고, 그 옆 칸을 함께 고른다.', base: '시연 지도를 보고 보호자 의자 가까운 놀이 칸을 스스로 말한다.', challenge: '가까운 칸 두 곳을 말하고 연못·주차장이 왜 먼지 말한다.' },
      intro: {
        teacher: '"보호자가 의자에 앉아 계세요. 어디에서 놀면 서로 잘 보일까요?" 시연 단추로 보호자 의자 옆 잔디밭에 핀이 꽂히는 모습을 보여 준다. "멀리 가도 소리치면 들려요"라는 말이 나오면 "보호자가 나를 볼 수 없으면 무슨 일이 생겨도 도와주실 수 있을까요?"라고 되묻는다. 놀다가 보호자가 안 보이면 멈추고 둘러본다는 점을 짚는다.',
        student: '보호자가 보이는 곳에서 놀아요. 지도에서 그곳을 손가락으로 짚어 보아요.',
        demo: { tool: 'map', options: { grid: [4, 3], places: PARKMAP, title: '공원' }, sequence: [{ pin: [0, 1] }] },
        art: { draw: 'a paper park map with a bench where a parent sits, children playing close by on the grass, and a pond and parking lot far away', banner: '어른이 보이는 곳에서' },
      },
    }),
    OUT({
      id: 'saf-life.e12.g1-outdoor.activity.place-sort', type: 'activity', title: '놀기 좋아요·피해요 나누기',
      method: '놀기 좋아요/피해요 나누기', tool: 'mindmap', minutes: 14,
      levels: { easy: '카드 4장, 맞는 칸에 놓으면 초록 테두리가 생긴다.', base: '카드 6장을 다 놓은 뒤 확인한다.', challenge: '카드 8장, 주차장·미끄러운 바위처럼 헷갈리는 곳이 섞인다.' },
      activity: {
        title: '장소 카드 두 칸으로 나누기', tool: 'mindmap',
        teacher: '"여기는 놀기 좋은 곳일까요, 피할 곳일까요?" 카드를 놓을 때마다 그곳에서 무엇이 위험할 수 있는지 한마디씩 말하게 한다. 주차장을 "넓어서 좋아요"라고 두는 학생에게 "넓은 곳에 차가 들어오면 운전하는 사람이 작은 내가 보일까요?"라고 묻는다. 물가·찻길 옆·공사장은 재미있어 보여도 피한다는 점을 짚는다.',
        task: '장소 카드를 놀기 좋아요·피해요로 나누어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          SORT2(['놀기 좋아요', '피해요'], '공원의 장소를 나누어요.', '공원', ['잔디밭', '놀이터', '그늘 아래'], ['찻길 옆', '연못가', '공사장'], ['주차장', '깊은 풀숲'], 0.1),
          SORT2(['놀기 좋아요', '피해요'], '동네의 장소를 나누어요.', '동네', ['학교 운동장', '집 앞 마당', '동네 놀이터'], ['골목 찻길', '공사장 옆', '빈 건물'], ['어두운 계단', '차 뒤쪽'], 0.15),
          SORT2(['놀기 좋아요', '피해요'], '산과 숲의 장소를 나누어요.', '산과 숲', ['넓은 길', '쉼터', '어른 곁'], ['낭떠러지', '깊은 계곡', '혼자 숲속'], ['미끄러운 바위', '벌집 근처'], 0.2, { conclude: '어른이 보이는 넓은 곳에서 놀고, 물가·찻길·공사장은 피해요.' }),
        ],
      },
      worksheet: { items: [{ type: 'table', prompt: '놀기 좋으면 ○, 피하면 ×를 써요.', columns: ['장소', '○ / ×'], cells: [['잔디밭', ''], ['찻길 옆', ''], ['연못가', ''], ['놀이터', '']], answer: '○, ×, ×, ○' }],
        easy: [{ type: 'choice', prompt: '놀기 좋은 곳에 ○ 해요.', options: ['잔디밭', '찻길 옆'], answer: '잔디밭' }] },
    }),
    OUT({
      id: 'saf-life.e12.g1-outdoor.activity.ball-order', type: 'activity', title: '공이 찻길로 굴러갔어요',
      method: '공이 찻길로 굴러갔어요', tool: 'story', minutes: 13,
      levels: { easy: '첫 장면이 놓여 있어 남은 두 장만 놓고, 놓으면 바로 맞는지 알려 준다.', base: '장면 세 장을 차례대로 놓는다.', challenge: '"뛰어가 주워요" 같은 틀린 장면 한 장을 빼고 놓는다.' },
      activity: {
        title: '놀다가 생긴 일 장면 차례 놓기', tool: 'story',
        teacher: '"공이 찻길로 굴러갔어요. 맨 먼저 무엇을 할까요?" 카드를 놓은 뒤 반 전체가 "멈춰!" 하며 그 자리에 서는 동작을 해 본다. "빨리 주우면 괜찮아요"라는 학생에게 "공을 보며 뛰어갈 때 내 눈은 차를 볼 수 있을까요?"라고 묻는다. 공·연은 다시 살 수 있지만 내 몸이 먼저라는 점을 짚는다.',
        task: '장면 카드를 차례대로 놓아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          ORDER3('공이 찻길로 갔어요. 차례로 놓아요.', [{ id: 'stop', text: '멈춰요' }, { id: 'stay', text: '찻길에 안 가요' }, { id: 'tell', text: '어른께 말해요' }], { id: 'dash', text: '뛰어가 주워요' }, 0.15),
          ORDER3('공이 연못에 빠졌어요. 차례로 놓아요.', [{ id: 'halt', text: '멈춰요' }, { id: 'back', text: '물가에서 물러나요' }, { id: 'call', text: '어른을 불러요' }], { id: 'reach', text: '손 뻗어 잡아요' }, 0.2),
          ORDER3('연이 나무에 걸렸어요. 차례로 놓아요.', [{ id: 'wait', text: '멈춰요' }, { id: 'down', text: '나무에 안 올라요' }, { id: 'ask', text: '어른께 부탁해요' }], { id: 'climb', text: '나무에 올라가요' }, 0.25, { conclude: '놀다가 무엇이 멀리 가면 멈추고, 따라가지 말고, 어른께 말해요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '공이 찻길로 갔어요. 무엇을 해요?', options: ['멈추고 어른께', '뛰어가 주워요'], answer: '멈추고 어른께' }] },
    }),
    OUT({
      id: 'saf-life.e12.g1-outdoor.activity.heat-body', type: 'activity', title: '더울 때 몸 신호 짚기',
      method: '더울 때 몸 신호 짚기', tool: 'body', minutes: 14,
      levels: { easy: '짚은 곳의 이름이 바로 보인다.', base: '이름 없이 짚고, 더울 때 할 일 하나를 고른다.', challenge: '코·어깨처럼 헷갈리는 곳이 더 있는 몸에서 짚고 할 일을 고른다.' },
      activity: {
        title: '더울 때 몸이 보내는 신호 찾기', tool: 'body',
        teacher: '"뜨거운 햇볕 아래에서 오래 놀면 내 몸은 어떤 신호를 보낼까요?" 종이 몸을 짚기 전에 자기 혀와 목을 손으로 만져 보게 한다. "목말라도 참으면 돼요"라는 학생에게 "목이 마른 것은 몸이 물을 달라는 신호예요. 참으면 어떻게 될까요?"라고 묻는다. 신호가 오면 그늘로 가서 물을 마시고 어른께 말한다는 점을 짚는다.',
        task: '더울 때 신호가 오는 곳을 짚어요.', levels: { easy: { names: true }, base: {}, challenge: {} },
        items: [
          { prompt: '목마를 때 마르는 곳을 짚어요.', toolOptions: { mode: 'parts', parts: ['눈', '귀', '혀', '목', '무릎'] }, target: { parts: ['혀', '목'] }, difficulty: 0.1,
            hints: ['입 안과 목을 손으로 만져 봐요.', '마르는 곳이 두 군데예요.', '입 안의 혀와 목을 골라요.'],
            levels: { challenge: { toolOptions: { parts: ['눈', '귀', '코', '혀', '목', '어깨', '무릎'] } } } },
          { prompt: '더우면 땀 나는 곳을 짚어요.', toolOptions: { mode: 'parts', parts: ['눈', '혀', '피부', '발목'] }, target: { parts: ['피부'] }, difficulty: 0.15,
            hints: ['더울 때 축축해지는 곳을 떠올려요.', '몸을 덮고 있는 곳이에요.', '피부를 골라요.'],
            levels: { challenge: { toolOptions: { parts: ['눈', '코', '혀', '피부', '어깨', '발목'] } } } },
          { prompt: '더울 때 할 일을 골라요.', toolOptions: { mode: 'parts', parts: ['혀', '목', '피부'], readOnly: true, ask: { q: '몸이 더워요. 무엇을 해요?', choices: ['그늘에서 물 마셔요', '햇볕에서 더 뛰어요', '목말라도 참아요'] } }, target: { pick: 0 }, difficulty: 0.2, conclude: '목이 마르고 땀이 나면 그늘에서 물을 마시고 어른께 말해요.' },
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '더울 때 무엇을 해요?', options: ['그늘에서 물 마셔요', '햇볕에서 더 뛰어요'], answer: '그늘에서 물 마셔요' }] },
      notes: '종이 몸에 머리·얼굴 칸이 없어 계획의 "머리·얼굴·목" 대신 혀(입 마름)·목·피부(땀)를 짚는다.',
    }),
    OUT({
      id: 'saf-life.e12.g1-outdoor.activity.go-far', type: 'activity', title: '갈림길: 나비를 따라가고 싶어요',
      method: '갈림길: 나비를 따라가고 싶어요', tool: 'dilemma', minutes: 14,
      levels: { easy: '첫 갈림에서 보기 2개 가운데 한 번만 고른다.', base: '고른 뒤 이어지는 장면에서 한 번 더 고른다(갈림 2번).', challenge: '갈림 2번을 지나 끝에서 까닭 카드 3장 가운데 하나를 고른다.' },
      activity: {
        title: '바깥에서 멀리 가고 싶을 때', tool: 'dilemma',
        teacher: '"예쁜 나비가 멀리 날아가요. 따라가고 싶을 때 어떻게 할까요?" 고르기 전에 반 전체가 "멈춰, 둘러봐" 하며 고개를 좌우로 돌려 본다. "조금만 갔다 오면 돼요"를 고른 학생에게 "돌아보니 어른이 안 보이면 어떤 마음일까요?"라고 묻는다. 다른 길도 끝까지 가 보며 어른께 말하고 함께 가는 길을 견주게 한다.',
        task: '장면마다 할 일을 고르고 결과를 봐요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          DILEMMA('나비가 멀리 날아가요. 골라요.', { text: '나비가 숲 쪽으로 날아가요.', motif: 'flower', choices: [
            { id: 'follow', text: '혼자 따라가요', result: '돌아보니 어른이 안 보여요.', why: '혼자 멀리 가면 어른이 나를 못 찾아요.' },
            { id: 'ask', text: '"같이 가요" 말해요', result: '엄마가 "잠깐만" 하세요.', easyEnding: '엄마와 함께 나비를 봤어요.', next: { text: '엄마가 "여기서 보자" 하세요.', choices: [
              { id: 'stay', text: '보이는 곳에서 봐요', result: '엄마 곁에서 나비를 오래 봤어요.', ending: '어른이 보이는 곳에서 놀아서 안전해요.' },
              { id: 'sneak', text: '몰래 더 가 봐요', result: '길을 잃을 수 있어요.', why: '어른과 정한 곳을 지켜요.' }] } }] },
          ['ask', 'stay'], [{ id: 'see', text: '어른이 나를 봐야 해요' }, { id: 'pretty', text: '나비가 예뻐서요', why: '예뻐도 혼자 따라가지 않아요.' }, { id: 'quick', text: '금방 올 거라서요', why: '금방이어도 어른께 말하고 가요.' }], 'see', 0.15),
          DILEMMA('강아지가 멀리 뛰어가요. 골라요.', { text: '공원에서 본 강아지가 멀리 뛰어가요.', motif: 'flower', choices: [
            { id: 'chase', text: '쫓아 뛰어가요', result: '찻길 쪽으로 가게 됐어요.', why: '쫓아가다 찻길에 닿을 수 있어요.' },
            { id: 'stop', text: '멈추고 어른을 불러요', result: '아빠가 오셨어요.', easyEnding: '아빠와 같이 강아지 주인을 찾았어요.', next: { text: '아빠가 "강아지 주인이 올 거야" 하세요.', choices: [
              { id: 'with', text: '아빠 곁에서 기다려요', result: '주인이 강아지를 데려갔어요.', ending: '멈추고 기다려서 아무도 안 다쳤어요.' },
              { id: 'alone', text: '혼자 찾으러 가요', result: '아빠가 나를 찾게 됐어요.', why: '어른 곁에서 함께 기다려요.' }] } }] },
          ['stop', 'with'], [{ id: 'near', text: '어른 곁이 안전해요' }, { id: 'brave', text: '나는 빨라서요', why: '빨라도 찻길은 위험해요.' }, { id: 'help', text: '강아지를 도우려고요', why: '돕고 싶을 때도 어른께 먼저 말해요.' }], 'near', 0.2),
          DILEMMA('친구가 숲에 숨자고 해요. 골라요.', { text: '친구가 숲속에 숨자고 해요.', motif: 'flower', choices: [
            { id: 'hide', text: '따라 숨어요', result: '어른이 우리를 못 찾아 걱정해요.', why: '어른이 못 보는 곳에 숨지 않아요.' },
            { id: 'say', text: '"보이는 데서 놀자" 말해요', result: '친구가 "괜찮아" 해요.', easyEnding: '잔디밭에서 같이 술래잡기를 했어요.', next: { text: '친구가 "괜찮아, 가자" 해요.', choices: [
              { id: 'tell', text: '어른께 말하고 정해요', result: '어른이 놀 곳을 정해 주셨어요.', ending: '어른과 정해서 둘 다 안전하게 놀았어요.' },
              { id: 'go', text: '그냥 따라가요', result: '어른이 우리를 찾아다녀요.', why: '친구가 괜찮다 해도 어른께 먼저 말해요.' }] } }] },
          ['say', 'tell'], [{ id: 'adult', text: '놀 곳은 어른과 정해요' }, { id: 'friend', text: '친구가 하자고 해서요', why: '친구가 하자고 해도 안전이 먼저예요.' }, { id: 'fun', text: '숨는 게 재밌어서요', why: '재밌어도 어른이 보이는 곳에서 놀아요.' }], 'adult', 0.25, { conclude: '멀리 가고 싶을 때는 멈추고, 어른께 말하고, 함께 가요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '멀리 가고 싶어요. 무엇을 해요?', options: ['어른께 말해요', '혼자 가요'], answer: '어른께 말해요' }] },
    }),
    OUT({
      id: 'saf-life.e12.g1-outdoor.wrap.outdoor-check', type: 'wrap', title: '바깥 놀이 그림 점검표',
      method: '바깥 놀이 그림 점검표', tool: 'kitchen', minutes: 7,
      levels: { easy: '교사가 점검표 칸을 하나씩 읽어 주고 함께 표시한다.', base: '스스로 읽고 바깥 놀이 전에 챙길 것에 표시한다.', challenge: '표시한 뒤 가족과 바깥 놀이 때 지킬 약속 하나를 고른다.' },
      wrap: {
        teacher: '"바깥에 놀러 갈 때 무엇을 챙기고 누구에게 말할까요?" 점검표 칸을 함께 읽고, 모자를 쓰는 흉내·물병 드는 흉내를 하며 표시하게 한다. 출구 2번에서 "말 안 해요"를 고른 학생에게 "어른이 내가 어디 있는지 알아야 도와주실 수 있어요"라고 말해 준다. 집에 가서 가족과 놀 곳을 정해 보자고 한다.',
        exitTicket: [
          CHECK('바깥 놀이 전에', [{ id: 'hat', text: '모자 쓰기' }, { id: 'water', text: '물병 챙기기' }, { id: 'tell', text: '어른께 말하기' }], '챙길 것에 표시해요.'),
          { type: 'choice', prompt: '놀러 나갈 때 어떻게 해요?', options: ['말 안 해요', '어른께 말해요', '몰래 나가요'], answer: 1, difficulty: 0.1, explain: '어디서 놀지 어른께 말하고 나가요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '바깥 놀이 약속',
        items: [
          { type: 'check', prompt: '바깥 놀이 전에 챙겨요.', options: ['모자를 써요', '물병을 챙겨요', '어디서 놀지 어른께 말해요'] },
          { type: 'draw', prompt: '어른이 보이는 곳에서 노는 모습을 그려요.' },
        ],
        easy: { note: '"모자, 물, 어른께"를 떠올려요.', items: [{ type: 'draw', prompt: '모자를 쓴 내 모습을 그려요.' }] },
      },
    }),
    OUT({
      id: 'saf-life.e12.g1-outdoor.wrap.outdoor-chant', type: 'wrap', title: '"멈춰, 둘러봐, 어른 곁" 구호',
      method: '"보이는 곳에서" 구호', tool: 'timer', minutes: 7,
      levels: { easy: '교사가 구호 두 개를 먼저 외치고 함께 따라 한다.', base: '구호 카드 세 장의 차례를 맞추고 동작과 함께 외친다.', challenge: '교사가 구호를 섞어 부르면 알맞은 동작을 바로 하고, 차례를 맞춘다.' },
      wrap: {
        teacher: '"멈춰! (두 손 앞으로) 둘러봐! (고개 좌우로) 어른 곁! (옆 사람 손잡기)" 구호 카드를 차례대로 놓은 뒤 반 전체가 동작과 함께 세 번 외친다. 출구 2번에서 "더 멀리 가요"를 고른 학생에게 "어른이 안 보이면 멈추고 둘러보는 게 먼저예요"라고 말해 준다. 바깥 놀이 시간에 이 구호를 신호로 쓰자고 약속한다.',
        exitTicket: [
          CHANT('보이는 곳에서', ['멈춰', '둘러봐', '어른 곁']),
          { type: 'choice', prompt: '어른이 안 보여요. 먼저 해요.', options: ['더 멀리 가요', '멈추고 둘러봐요', '숨어요'], answer: 1, difficulty: 0.1, explain: '멈추고 둘러본 뒤 어른 곁으로 가요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '멈춰, 둘러봐, 어른 곁!',
        items: [
          { type: 'blank', prompt: '구호를 따라 써요.', text: '멈춰, 둘러봐, ___ 곁!', answer: '어른' },
          { type: 'draw', prompt: '어른 곁에서 노는 내 모습을 그려요.' },
        ],
      },
    }),
  ];

  // =====================================================================================================
  // 1학년 · 길을 잃었을 때·낯선 사람
  const LOST = MOD('saf-life.e12.g1-lost-stranger', [1]);
  const FAIR = [{ name: '안내소', icon: 'office', at: [1, 1] }, { name: '매표소', icon: 'market', at: [0, 2] }, { name: '회전목마', icon: 'park', at: [3, 0] }, { name: '출구 밖', icon: 'dot', at: [3, 2] }];
  const FAIR_MORE = [{ name: '매점', icon: 'dot', at: [0, 0] }, { name: '화장실', icon: 'dot', at: [2, 2] }];
  const T_LOST = [
    LOST({
      id: 'saf-life.e12.g1-lost-stranger.intro.lost-scene', type: 'intro', title: '"엄마가 안 보여요" 장면의 마음',
      method: '"엄마가 안 보여요" 장면의 마음', tool: 'emotion', minutes: 6,
      levels: { easy: '교사가 마음 카드 두 장(걱정·무서움)만 읽어 주고 고르게 한다.', base: '마음 카드 네 장 가운데 이 장면의 마음을 고른다.', challenge: '마음을 고른 뒤 도움이 될 행동(멈추기·직원 찾기)을 하나 말한다.' },
      intro: {
        teacher: '"마트에서 돌아보니 엄마가 안 보여요. 이 친구 마음은 어떨까요?" 두세 명의 대답을 듣고 시연 단추로 걱정·무서움 카드가 바구니에 담기는 모습을 보여 준다. "울면서 엄마 찾으러 뛰어가요"라는 말이 나오면 "뛰어다니면 엄마가 나를 찾기 쉬울까요, 어려울까요?"라고 되묻는다. 반 전체가 "괜찮아, 방법이 있어!"를 따라 말하고, 오늘은 그 방법을 배운다고 밝힌다.',
        student: '"괜찮아, 방법이 있어!"를 선생님과 함께 따라 말해요.',
        demo: { tool: 'emotion', options: { mode: 'pick', basket: '이 친구 마음', cards: ['걱정', '신남', '무서움', '편안함'], shuffle: false }, sequence: [{ pick: ['걱정', '무서움'] }] },
        art: { draw: 'a paper supermarket aisle with a small paper child looking around for a parent, a friendly store worker in an apron standing nearby', banner: '괜찮아, 방법이 있어!' },
      },
      notes: '길을 잃었던 경험을 묻지 않는다. 그림 속 친구의 마음으로만 이야기한다.',
    }),
    LOST({
      id: 'saf-life.e12.g1-lost-stranger.intro.stop-chant', type: 'intro', title: '"멈춰요·생각해요·도와줘요"',
      method: '"멈춰요·생각해요·도와줘요" 구호', tool: 'timer', minutes: 5,
      levels: { easy: '교사가 구호 카드 두 장을 차례대로 들어 보이며 함께 말한다.', base: '구호 카드 세 장의 차례를 맞추고 동작과 함께 따라 한다.', challenge: '교사가 섞어 부르는 구호를 듣고 바른 차례로 다시 말한다.' },
      intro: {
        teacher: '"멈춰요! (두 발 꾹) 생각해요! (손가락 머리에) 도와줘요! (손 들기)" 시연 단추로 구호 카드가 차례대로 놓이는 모습을 보이고 반 전체가 세 번 따라 한다. "도와줘요부터 하면 돼요"라는 말이 나오면 "뛰어다니며 소리치면 어른이 나를 찾을 수 있을까요? 먼저 멈춰야 하는 까닭은 무엇일까요?"라고 되묻는다.',
        student: '"멈춰요, 생각해요, 도와줘요!"를 손 동작과 함께 따라 해요.',
        demo: { tool: 'timer', options: { title: '길을 잃으면', cards: ['도와줘요', '멈춰요', '생각해요'] }, sequence: [{ order: ['멈춰요', '생각해요', '도와줘요'] }] },
        art: { draw: 'three paper children doing hand motions in a row, the first standing still, the second touching their head, the third raising a hand', banner: '멈춰요, 생각해요, 도와줘요', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
      },
    }),
    LOST({
      id: 'saf-life.e12.g1-lost-stranger.activity.lost-order', type: 'activity', title: '길 잃었을 때 차례 놓기',
      method: '길 잃었을 때 차례 놓기', tool: 'story', minutes: 14,
      levels: { easy: '첫 장면이 놓여 있어 남은 두 장만 놓고, 놓으면 바로 맞는지 알려 준다.', base: '장면 세 장을 차례대로 놓는다.', challenge: '"혼자 밖에 나가요" 같은 틀린 장면 한 장을 빼고 놓는다.' },
      activity: {
        title: '보호자가 안 보일 때 장면 차례 놓기', tool: 'story',
        teacher: '"보호자가 안 보여요. 맨 먼저 무엇을 할까요?" 카드를 놓은 뒤 짝과 한 명은 직원, 한 명은 아이가 되어 "제 이름은 ○○이고, 엄마를 잃어버렸어요"라고 말해 본다(이름은 가명으로). "혼자 집에 걸어가요"를 넣는 학생에게 "길을 모르면 더 멀어질 수 있어요. 어디서 기다리면 보호자가 나를 찾을까요?"라고 묻는다.',
        task: '장면 카드를 차례대로 놓아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          ORDER3('마트에서 엄마가 안 보여요. 차례로 놓아요.', [{ id: 'stop', text: '멈춰요' }, { id: 'staff', text: '직원을 찾아요' }, { id: 'name', text: '보호자 이름 말해요' }], { id: 'out', text: '혼자 밖에 나가요' }, 0.15),
          ORDER3('놀이공원에서 아빠가 안 보여요. 차례로 놓아요.', [{ id: 'freeze', text: '그 자리에 서요' }, { id: 'desk', text: '안내소에 가요' }, { id: 'say', text: '아빠 이름 말해요' }], { id: 'cry', text: '울며 뛰어다녀요' }, 0.2),
          ORDER3('길에서 할머니가 안 보여요. 차례로 놓아요.', [{ id: 'wait', text: '멈춰요' }, { id: 'mom', text: '아이와 있는 어른께' }, { id: 'tell', text: '할머니 이름 말해요' }], { id: 'home', text: '혼자 집에 가요' }, 0.25, { conclude: '길을 잃으면 멈추고, 도와줄 어른을 찾고, 보호자 이름을 말해요.' }),
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '길을 잃으면 먼저 ___.', answer: '멈춰요' }] },
      notes: '역할놀이에서 학생의 진짜 이름·주소·전화번호를 말하지 않는다. 가명과 "엄마 이름" 자리로만 연습한다.',
    }),
    LOST({
      id: 'saf-life.e12.g1-lost-stranger.activity.helper-pick', type: 'activity', title: '도와줄 사람 고르기',
      method: '도와줄 사람 고르기', tool: 'mindmap', minutes: 13,
      levels: { easy: '카드 4장, 맞는 칸에 놓으면 초록 테두리가 생긴다.', base: '카드 6장을 다 놓은 뒤 확인한다.', challenge: '카드 8장, "사탕 주는 어른"처럼 친절해 보여 헷갈리는 카드가 섞인다.' },
      activity: {
        title: '도움 청할 사람·조심할 사람 나누기', tool: 'mindmap',
        teacher: '"길을 잃었을 때 이 사람에게 도움을 청해도 될까요?" 카드를 놓을 때마다 그 사람을 어떻게 알아볼 수 있는지(이름표, 일하는 옷, 아이와 함께 있음) 말하게 한다. "사탕 주는 어른"을 도움 청해요에 두는 학생에게 "친절해 보여도 처음 보는 사람이 데려가려 하면 어떻게 할까요?"라고 묻는다. 내가 고른 어른에게 가서 말하는 것과 다가온 사람을 따라가는 것은 다르다는 점을 짚는다.',
        task: '사람 카드를 도움 청해요·조심해요로 나누어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          SORT2(['도움 청해요', '조심해요'], '마트에서 만난 사람을 나누어요.', '마트', ['계산대 직원', '안내소 직원', '아이 데린 어른'], ['차로 부르는 사람', '따라오라는 사람', '손 잡아끄는 사람'], ['사탕 주는 어른', '"엄마 친구야"'], 0.1),
          SORT2(['도움 청해요', '조심해요'], '길에서 만난 사람을 나누어요.', '길거리', ['경찰관', '가게 주인', '아이와 있는 어른'], ['길 묻는 낯선 이', '사진 찍자는 이', '차 문 여는 이'], ['이름 아는 척', '강아지 보자는 이'], 0.15),
          SORT2(['도움 청해요', '조심해요'], '놀이공원에서 만난 사람을 나누어요.', '놀이공원', ['안내소 직원', '매표소 직원', '이름표 단 직원'], ['따라오라는 사람', '선물 준다는 이', '구석 가자는 이'], ['풍선 주는 낯선 이', '"아빠가 불러"'], 0.2, { conclude: '도움은 일하는 어른이나 아이와 함께 있는 어른께 내가 골라서 청해요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '길을 잃었어요. 누구에게 말해요?', options: ['가게 직원', '차로 부르는 사람'], answer: '가게 직원' }] },
    }),
    LOST({
      id: 'saf-life.e12.g1-lost-stranger.activity.say-no', type: 'activity', title: '갈림길: "강아지 보러 갈래?"',
      method: '갈림길: "강아지 보러 갈래?"', tool: 'dilemma', minutes: 14,
      levels: { easy: '첫 갈림에서 보기 2개 가운데 한 번만 고른다.', base: '고른 뒤 이어지는 장면에서 한 번 더 고른다(갈림 2번).', challenge: '갈림 2번을 지나 끝에서 까닭 카드 3장 가운데 하나를 고른다.' },
      activity: {
        title: '낯선 사람이 같이 가자고 할 때', tool: 'dilemma',
        teacher: '"처음 보는 사람이 \'강아지 보러 갈래?\' 해요. 어떻게 할까요?" 고른 뒤 반 전체가 큰 소리로 "싫어요, 엄마께 물어볼게요!"를 세 번 따라 말한다. "강아지만 보고 오면 돼요"를 고른 학생에게 "엄마가 내가 어디 갔는지 모르면 어떻게 될까요?"라고 묻는다. 다른 길도 끝까지 가 보며 거절하고 어른께 알리는 길을 견주게 한다.',
        task: '장면마다 할 일을 고르고 결과를 봐요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          DILEMMA('"강아지 보러 갈래?" 해요. 골라요.', { text: '처음 보는 사람이 "강아지 보러 갈래?" 해요.', motif: 'house', choices: [
            { id: 'go', text: '따라가요', result: '엄마가 나를 찾을 수 없어요.', why: '처음 보는 사람은 따라가지 않아요.' },
            { id: 'no', text: '"싫어요" 말해요', result: '그 사람이 "금방이야" 해요.', easyEnding: '엄마 곁으로 가서 말씀드렸어요.', next: { text: '그 사람이 "금방이야" 해요.', choices: [
              { id: 'ask', text: '"엄마께 물어볼게요" 하고 엄마께 가요', result: '엄마가 고맙다고 안아 주셨어요.', ending: '거절하고 어른께 알려서 안전해요.' },
              { id: 'soon', text: '금방이면 따라가요', result: '아무도 내가 어디 갔는지 몰라요.', why: '금방이라고 해도 따라가지 않아요.' }] } }] },
          ['no', 'ask'], [{ id: 'ask-first', text: '어른께 먼저 물어봐요' }, { id: 'kind', text: '친절해 보여서요', why: '친절해 보여도 처음 보는 사람은 따라가지 않아요.' }, { id: 'puppy', text: '강아지가 좋아서요', why: '강아지가 좋아도 어른께 먼저 물어봐요.' }], 'ask-first', 0.15),
          DILEMMA('"과자 줄게, 이리 와" 해요. 골라요.', { text: '차 옆에서 "과자 줄게, 이리 와" 해요.', motif: 'house', choices: [
            { id: 'take', text: '과자 받으러 가요', result: '차 가까이 가게 됐어요.', why: '모르는 사람이 주는 것은 받으러 가지 않아요.' },
            { id: 'run', text: '"싫어요!" 하고 사람 많은 곳으로 가요', result: '가게 안으로 들어왔어요.', easyEnding: '가게 어른께 알렸어요.', next: { text: '가게 안에 들어왔어요.', choices: [
              { id: 'tell', text: '가게 어른께 알려요', result: '가게 어른이 보호자께 연락해 주셨어요.', ending: '거절하고 알려서 나를 지켰어요.' },
              { id: 'quiet', text: '아무 말 안 해요', result: '어른들이 일어난 일을 몰라요.', why: '무서웠던 일은 어른께 꼭 말해요.' }] } }] },
          ['run', 'tell'], [{ id: 'tell-adult', text: '거절하고 어른께 알려요' }, { id: 'snack', text: '과자가 먹고 싶어서요', why: '먹고 싶어도 모르는 사람에게 가지 않아요.' }, { id: 'rude', text: '거절은 나쁜 것 같아서요', why: '나를 지키는 거절은 나쁜 일이 아니에요.' }], 'tell-adult', 0.2),
          DILEMMA('"길 좀 알려 줄래?" 해요. 골라요.', { text: '차 안의 사람이 "길 좀 알려 줄래?" 해요.', motif: 'house', choices: [
            { id: 'near', text: '차 가까이 가요', result: '차 문 앞까지 가게 됐어요.', why: '길은 어른이 어른에게 물어요. 차에 다가가지 않아요.' },
            { id: 'far', text: '떨어져서 "몰라요" 해요', result: '그 사람이 계속 불러요.', easyEnding: '떨어져서 어른께 갔어요.', next: { text: '그 사람이 계속 불러요.', choices: [
              { id: 'adult', text: '어른 있는 곳으로 가요', result: '선생님께 말씀드렸어요.', ending: '떨어지고, 거절하고, 알려서 안전해요.' },
              { id: 'stay', text: '그 자리에 서 있어요', result: '그 사람이 다가와요.', why: '계속 부르면 어른이 있는 곳으로 가요.' }] } }] },
          ['far', 'adult'], [{ id: 'away', text: '모르는 차에는 안 가요' }, { id: 'help', text: '도와주고 싶어서요', why: '돕고 싶어도 차에 다가가지 않아요.' }, { id: 'polite', text: '대답해야 해서요', why: '대답하지 않고 떨어져도 괜찮아요.' }], 'away', 0.25, { conclude: '처음 보는 사람이 같이 가자고 하면 "싫어요" 하고, 어른께 알려요.' }),
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '"___, 엄마께 물어볼게요!"', answer: '싫어요' }] },
      notes: '장면은 거절 연습용으로 지은 것이다. 무서운 결과를 자세히 묘사하지 않고, 학생에게 비슷한 일을 겪었는지 묻지 않는다.',
    }),
    LOST({
      id: 'saf-life.e12.g1-lost-stranger.activity.meet-map', type: 'activity', title: '놀이공원에서 만날 곳 정하기',
      method: '만날 곳 정하기', tool: 'map', minutes: 14,
      levels: { easy: '핀을 놓으면 그 칸의 이름이 바로 보인다.', base: '이름을 보고 알맞은 곳에 꽂는다.', challenge: '매점·화장실까지 여섯 곳이 있는 지도에서 꽂는다.' },
      activity: {
        title: '놀이공원 지도에 만날 곳 꽂기', tool: 'map',
        teacher: '"놀이공원에 들어가자마자 가족과 무엇을 정하면 좋을까요?" 핀을 꽂기 전에 안내소는 일하는 어른이 늘 있는 곳이라는 점을 말하게 한다. "회전목마 앞에서 만나요"라는 학생에게 "회전목마 앞에는 사람이 많아요. 늘 그 자리에 있는 어른이 있을까요?"라고 묻는다. 출구 밖은 보호자를 찾으러 나가면 안 되는 곳이라고 짚는다.',
        task: '알맞은 곳에 핀을 꽂아요.', levels: { easy: { readout: true }, base: {}, challenge: {} },
        items: [
          PIN('길을 잃으면 갈 곳에 꽂아요.', FAIR, FAIR_MORE, '안내소', 0.1),
          PIN('표 파는 직원이 있는 곳에 꽂아요.', FAIR, FAIR_MORE, '매표소', 0.15),
          PIN('혼자 가면 안 되는 곳에 꽂아요.', FAIR, FAIR_MORE, '출구 밖', 0.2, { conclude: '만날 곳은 안내소로 정하고, 혼자 밖으로 나가지 않아요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '길을 잃으면 어디로 가요?', options: ['안내소', '출구 밖', '숨을 곳'], answer: '안내소' }] },
    }),
    LOST({
      id: 'saf-life.e12.g1-lost-stranger.wrap.safe-check', type: 'wrap', title: '내 안전 약속 점검표',
      method: '내 안전 약속 점검표', tool: 'kitchen', minutes: 7,
      levels: { easy: '교사가 점검표 칸을 하나씩 읽어 주고 함께 표시한다.', base: '스스로 읽고 지킬 수 있는 약속에 표시한다.', challenge: '표시한 뒤 집에서 보호자 전화번호를 함께 연습하기로 약속한다.' },
      wrap: {
        teacher: '"오늘 배운 약속 가운데 나는 무엇을 할 수 있나요?" 점검표 칸을 함께 읽고 표시하게 한다. 보호자 전화번호를 아직 못 외운 학생에게 "오늘 집에 가서 가족과 함께 외워 보면 돼요"라고 말해 준다(교실에서는 번호를 말하지 않는다). 출구 2번에서 "따라가요"를 고른 학생과는 "싫어요" 연습을 한 번 더 한다.',
        exitTicket: [
          CHECK('내 안전 약속', [{ id: 'phone', text: '번호 외우기' }, { id: 'nofollow', text: '안 따라가기' }, { id: 'stop', text: '멈추기' }], '지킬 약속에 표시해요.'),
          { type: 'choice', prompt: '같이 가자고 하면 어떻게 해요?', options: ['따라가요', '"싫어요" 해요', '선물 받아요'], answer: 1, difficulty: 0.1, explain: '처음 보는 사람이 같이 가자고 하면 "싫어요" 해요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '나를 지키는 약속',
        items: [
          { type: 'check', prompt: '집에서 가족과 해 봐요.', options: ['보호자 전화번호 외우기', '만날 곳 정하기', '"싫어요" 연습하기'] },
          { type: 'draw', prompt: '도와줄 어른께 말하는 내 모습을 그려요.' },
        ],
        easy: { note: '"멈춰요, 생각해요, 도와줘요"를 떠올려요.', items: [{ type: 'draw', prompt: '멈춰 선 내 모습을 그려요.' }] },
      },
      notes: '전화번호는 교실에서 말하거나 적게 하지 않는다. 집에서 보호자와 연습하는 과제로만 둔다.',
    }),
    LOST({
      id: 'saf-life.e12.g1-lost-stranger.wrap.no-feel', type: 'wrap', title: '"싫어요"라고 말한 마음',
      method: '"싫어요"라고 말한 마음', tool: 'emotion', minutes: 7,
      levels: { easy: '교사가 장면을 읽어 주고 함께 마음 카드를 고른다.', base: '장면 두 개에 마음 카드를 스스로 짝 짓는다.', challenge: '짝 지은 뒤 반 전체가 큰 소리로 "싫어요!"를 연습하고 친구를 칭찬한다.' },
      wrap: {
        teacher: '"싫어요라고 말했을 때 내 마음은 어땠을까요?" 장면마다 마음 카드를 짝 짓고, 반 전체가 손바닥을 앞으로 내밀며 큰 소리로 "싫어요!"를 세 번 연습한다. "싫다고 하면 미안해요"라는 학생에게 "나를 지키는 말은 미안한 말이 아니에요. 용감한 말이에요"라고 말해 준다.',
        exitTicket: [
          { type: 'tool', tool: 'emotion', options: { mode: 'match', slots: [{ id: 's1', label: '"싫어요" 말했어요' }, { id: 's2', label: '엄마께 물어봤어요' }], cards: ['뿌듯함', '편안함', '미안함'] }, prompt: '장면과 내 마음을 이어요.', target: { match: { s1: ['뿌듯함', '편안함'], s2: ['뿌듯함', '편안함'] } }, difficulty: 0.15 },
          { type: 'choice', prompt: '"싫어요"는 어떤 말이에요?', options: ['나쁜 말', '나를 지키는 말', '부끄러운 말'], answer: 1, difficulty: 0.1, explain: '"싫어요"는 나를 지키는 용감한 말이에요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '싫어요, 엄마께 물어볼게요!',
        items: [
          { type: 'table', prompt: '좋으면 ○, 안 되면 ×를 써요.', columns: ['장면', '○ / ×'], cells: [['"싫어요" 말해요', ''], ['모르는 사람 따라가요', ''], ['어른께 알려요', '']], answer: '○, ×, ○' },
          { type: 'draw', prompt: '"싫어요"라고 말하는 내 모습을 그려요.' },
        ],
      },
    }),
  ];

  // =====================================================================================================
  // 2학년 공통 helper
  // 카드 차례 맞추기(kitchen order): 기본 3장, 쉬움 2장, 도전 함정 카드 1장을 빼고 놓기
  const KORDER = (prompt, cards, trap, d, more) => ({
    prompt, toolOptions: { mode: 'order', slots: 3, cards: [cards[2], cards[0], cards[1]] }, target: { order: cards }, difficulty: d,
    levels: {
      easy: { prompt: `${cut(prompt)}(2장).`, toolOptions: { slots: 2, cards: [cards[1], cards[0]] }, target: { order: cards.slice(0, 2) } },
      challenge: { toolOptions: { cards: [cards[2], trap, cards[0], cards[1]] } },
    },
    ...more,
  });
  // 그림그래프(chart picture): 그림 하나 = 하나. 쉬움은 첫 항목이 그려져 있고, 도전은 항목 하나가 더 있다
  const PICT = (prompt, title, unit, data3, data4, d, more) => ({
    prompt, toolOptions: { type: 'picture', mode: 'build', title, unit, data: data3, icons: [{ value: 1, name: `1${unit}` }], icon: 'star' }, target: { build: true }, difficulty: d,
    levels: { easy: { toolOptions: { given: [0] } }, challenge: { toolOptions: { data: data4 } } },
    ...more,
  });
  const PREAD = (prompt, title, unit, data, question, choices, pick, d, more) => ({
    prompt, toolOptions: { type: 'picture', mode: 'read', title, unit, data, icons: [{ value: 1, name: `1${unit}` }], icon: 'star', question, choices }, target: { pick }, difficulty: d, ...more,
  });

  // =====================================================================================================
  // 2학년 · 안전 표지와 승강기·에스컬레이터
  const PUB = MOD('saf-life.e12.g2-public', [2]);
  const MALL = [{ name: '비상구', icon: 'dot', at: [3, 0] }, { name: '승강기', icon: 'dot', at: [0, 0] }, { name: '옷 가게', icon: 'market', at: [1, 1] }, { name: '화장실', icon: 'dot', at: [3, 2] }];
  const SIGNS3 = [['비상구', 4], ['소화기', 3], ['미끄럼 주의', 2]];
  const SIGNS4 = [['비상구', 4], ['소화기', 3], ['미끄럼 주의', 2], ['손대지 마요', 1]];
  const T_PUB = [
    PUB({
      id: 'saf-life.e12.g2-public.intro.sign-guess', type: 'intro', title: '안전 표지 뜻 알아맞히기',
      method: '안전 표지 뜻 알아맞히기', tool: 'emotion', minutes: 6,
      levels: { easy: '교사가 표지 두 개(비상구·미끄럼 주의)만 보여 주고 뜻을 함께 말한다.', base: '표지 세 개의 그림을 보고 뜻 카드를 짝 짓는 시연을 따라 말한다.', challenge: '비슷해 보이는 표지(초록 달리는 사람·손바닥 빗금)를 가려 뜻을 말한다.' },
      intro: {
        teacher: '"건물 벽에 붙은 이 그림은 우리에게 무엇을 알려 줄까요?" 표지 그림을 하나씩 보여 주며 학생들이 그림 속 모양을 말하게 한 뒤(기다릴 반응: "달려가는 사람이요", "넘어지는 사람이요") 시연 단추로 뜻 카드가 짝 지어지는 모습을 보여 준다. "표지는 어른만 보면 돼요"라는 말이 나오면 "어른이 옆에 없을 때 나는 어디로 나가야 할지 어떻게 알까요?"라고 되묻는다. 오늘은 표지 읽기와 승강기·에스컬레이터를 안전하게 타는 차례를 배운다고 밝힌다.',
        student: '표지 그림을 보고 무슨 뜻인지 짝에게 말해 보아요.',
        demo: { tool: 'emotion', options: { mode: 'match', slots: [{ id: 'exit', label: '초록 달리는 사람' }, { id: 'hand', label: '손바닥에 빗금' }, { id: 'slip', label: '넘어지는 사람' }], cards: ['비상구', '손대지 마요', '미끄럼 주의'], weather: false }, sequence: [{ match: { exit: '비상구', hand: '손대지 마요', slip: '미끄럼 주의' } }] },
        art: { draw: 'paper safety signs on a building wall: a green running figure for an emergency exit, a hand with a slash, and a figure slipping on a wet floor, children pointing at them', banner: '표지를 읽어요' },
      },
    }),
    PUB({
      id: 'saf-life.e12.g2-public.intro.mall-map', type: 'intro', title: '건물 안내도에서 비상구 찾기',
      method: '건물 안내도에서 비상구 찾기', tool: 'map', minutes: 5,
      levels: { easy: '교사가 비상구 표지 그림을 먼저 보여 주고 안내도에서 같은 그림을 함께 찾는다.', base: '시연 안내도를 보고 비상구 칸을 스스로 짚는다.', challenge: '비상구와 함께 승강기 칸도 짚고, 불이 나면 어디로 갈지 말한다.' },
      intro: {
        teacher: '"큰 건물에 들어가면 안내도에서 무엇을 먼저 찾으면 좋을까요?" 시연 단추로 쇼핑몰 안내도의 비상구 칸에 핀이 꽂히는 모습을 보여 준다. "불이 나면 승강기를 타요"라는 말이 나오면 "승강기가 멈추면 안에 갇힐 수 있어요. 어디로 나가야 할까요?"라고 되묻는다. 학교에서도 비상구 표지가 어디 있는지 떠올려 보게 한다.',
        student: '안내도에서 초록 비상구 표지를 손가락으로 짚어 보아요.',
        demo: { tool: 'map', options: { grid: [4, 3], places: MALL, title: '쇼핑몰 안내도' }, sequence: [{ pin: [3, 0] }] },
        art: { draw: 'a paper shopping mall floor map on a stand with a green exit sign in the corner, a child and a parent looking at it together', banner: '비상구는 어디?' },
      },
    }),
    PUB({
      id: 'saf-life.e12.g2-public.activity.escalator-order', type: 'activity', title: '에스컬레이터 타는 차례 놓기',
      method: '에스컬레이터 타는 차례 놓기', tool: 'story', minutes: 14,
      levels: { easy: '첫 장면이 놓여 있어 남은 두 장만 놓고, 놓으면 바로 맞는지 알려 준다.', base: '장면 세 장을 차례대로 놓는다.', challenge: '"계단에 앉아요" 같은 틀린 장면 한 장을 빼고 놓는다.' },
      activity: {
        title: '에스컬레이터·승강기 차례 놓기', tool: 'story',
        teacher: '"에스컬레이터에 탈 때 맨 먼저 어디에 발을 둘까요?" 카드를 놓은 뒤 교실 바닥에 테이프로 그린 노란 선 안에 서서 손잡이 잡는 동작, 내릴 때 발을 드는 동작을 따라 한다. "걸어 올라가면 빨라요"라는 학생에게 "움직이는 계단에서 걷다 발이 걸리면 어떻게 될까요?"라고 묻는다. 내릴 때 발을 들어 넘어지지 않게 한다는 점을 짚는다.',
        task: '장면 카드를 차례대로 놓아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          ORDER3('에스컬레이터를 타요. 차례로 놓아요.', [{ id: 'line', text: '노란 선 안에 서요' }, { id: 'hold', text: '손잡이 잡아요' }, { id: 'lift', text: '내릴 때 발 들어요' }], { id: 'sit', text: '계단에 앉아요' }, 0.15),
          ORDER3('승강기를 타요. 차례로 놓아요.', [{ id: 'out', text: '내릴 사람 먼저' }, { id: 'in', text: '안쪽으로 들어가요' }, { id: 'off', text: '문에서 떨어져요' }], { id: 'lean', text: '문에 기대요' }, 0.2),
          ORDER3('회전문을 지나요. 차례로 놓아요.', [{ id: 'wait', text: '앞 사람 기다려요' }, { id: 'slow', text: '천천히 걸어요' }, { id: 'free', text: '손 떼고 나가요' }], { id: 'dash', text: '뛰어 들어가요' }, 0.25, { conclude: '노란 선 안에 서고, 손잡이를 잡고, 문에서 떨어져 서요.' }),
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '에스컬레이터는 ___ 선 안에 서요.', answer: '노란' }] },
    }),
    PUB({
      id: 'saf-life.e12.g2-public.activity.lift-sort', type: 'activity', title: '승강기에서 좋아요·안돼요',
      method: '승강기에서 좋아요/안돼요', tool: 'mindmap', minutes: 13,
      levels: { easy: '카드 4장, 맞는 칸에 놓으면 초록 테두리가 생긴다.', base: '카드 6장을 다 놓은 뒤 확인한다.', challenge: '카드 8장, "문 닫힐 때 뛰기"처럼 헷갈리는 카드가 섞인다.' },
      activity: {
        title: '공공시설 행동 두 칸으로 나누기', tool: 'mindmap',
        teacher: '"승강기 안에서 이렇게 해도 될까요?" 카드를 놓을 때마다 그 행동을 할 때 누가 다칠 수 있는지 말하게 한다. "버튼 장난은 재미있어요"라는 학생에게 "모든 층 버튼을 누르면 급한 사람은 어떻게 될까요?"라고 묻는다. 문이 닫힐 때 손이나 발을 넣지 않는다는 점을 짚는다.',
        task: '행동 카드를 좋아요·안돼요로 나누어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          SORT2(OKNO, '승강기에서 하는 일을 나누어요.', '승강기', ['어른과 타기', '문에서 떨어지기', '조용히 타기'], ['문에 기대기', '버튼 장난', '문에 손 넣기'], ['문 닫힐 때 뛰기', '안에서 뛰기'], 0.1),
          SORT2(OKNO, '에스컬레이터에서 하는 일을 나누어요.', '에스컬레이터', ['노란 선 안', '손잡이 잡기', '발 들어 내리기'], ['거꾸로 걷기', '계단에 앉기', '뛰어 오르기'], ['몸 밖으로 빼기', '끈 풀린 채 타기'], 0.15),
          SORT2(OKNO, '건물 표지 앞에서 하는 일을 나누어요.', '안전 표지', ['비상구 확인', '표지 따라가기', '주의 표지 지키기'], ['표지 떼기', '비상구 막기', '주의 표지 무시'], ['표지에 낙서', '비상문 장난'], 0.2, { conclude: '승강기와 에스컬레이터는 장난치지 않고, 표지를 보고 따라요.' }),
        ],
      },
      worksheet: { items: [{ type: 'table', prompt: '좋으면 ○, 안 되면 ×를 써요.', columns: ['행동', '○ / ×'], cells: [['문에 기대기', ''], ['손잡이 잡기', ''], ['버튼 장난', ''], ['비상구 확인', '']], answer: '×, ○, ×, ○' }] },
    }),
    PUB({
      id: 'saf-life.e12.g2-public.activity.sign-hunt', type: 'activity', title: '우리 반 표지 찾기 그림그래프',
      method: '우리 반 표지 찾기 그림그래프', tool: 'chart', minutes: 14,
      levels: { easy: '첫 항목이 그려져 있어 나머지만 그리고, 가장 많은 것을 고른다.', base: '표지 세 가지를 그림그래프로 완성하고 가장 많은 것을 고른다.', challenge: '표지 네 가지를 그림그래프로 완성하고 가장 많은 것과 가장 적은 것을 고른다.' },
      activity: {
        title: '학교에서 찾은 표지 그림그래프', tool: 'chart',
        teacher: '"우리 반이 학교를 돌며 찾은 표지를 그림으로 나타내 볼까요?" 이 자료는 수업을 위해 지은 가상의 조사라고 먼저 말한다. 별 하나가 표지 하나라는 것을 손가락으로 세며 확인하게 한다. 그림을 다 그린 뒤 "비상구 표지가 왜 이렇게 많을까요?"라고 묻고, 어디서든 나갈 길을 알려 주려고 곳곳에 붙어 있다는 점을 짚는다.',
        task: '표를 보고 그림그래프를 완성해요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          PICT('표를 보고 그림그래프를 그려요.', '우리 반이 찾은 표지', '개', SIGNS3, SIGNS4, 0.15),
          PREAD('가장 많이 찾은 표지를 골라요.', '우리 반이 찾은 표지', '개', SIGNS4, '가장 많은 표지는?', ['비상구', '소화기', '미끄럼 주의', '손대지 마요'], 0, 0.15),
          PREAD('가장 적게 찾은 표지를 골라요.', '우리 반이 찾은 표지', '개', SIGNS4, '가장 적은 표지는?', ['비상구', '소화기', '미끄럼 주의', '손대지 마요'], 3, 0.2, { conclude: '비상구 표지는 곳곳에 있어요. 건물에 가면 먼저 찾아봐요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '나갈 길을 알려 주는 표지는?', options: ['비상구', '미끄럼 주의'], answer: '비상구' }] },
      notes: '그래프 수는 수업용으로 지은 가상의 조사다. 실제 학교 조사를 하면 그 수로 바꿔 쓴다.',
    }),
    PUB({
      id: 'saf-life.e12.g2-public.activity.door-dilemma', type: 'activity', title: '갈림길: 승강기 문이 닫혀요',
      method: '갈림길: 승강기 문이 닫히는데 친구가 달려와요', tool: 'dilemma', minutes: 14,
      levels: { easy: '첫 갈림에서 보기 2개 가운데 한 번만 고른다.', base: '고른 뒤 이어지는 장면에서 한 번 더 고른다(갈림 2번).', challenge: '갈림 2번을 지나 끝에서 까닭 카드 3장 가운데 하나를 고른다.' },
      activity: {
        title: '승강기·에스컬레이터에서 이럴 땐?', tool: 'dilemma',
        teacher: '"승강기 문이 닫히는데 친구가 달려와요. 손을 넣을까요, 열림 버튼을 누를까요?" 고르기 전에 열림 버튼 모양(◀▶)을 손가락으로 그려 보게 한다. "손을 넣으면 문이 다시 열려요"를 고른 학생에게 "문이 손을 못 알아채고 닫히면 손이 어떻게 될까요?"라고 묻는다. 다른 길도 끝까지 가 보며 결과를 견주게 한다.',
        task: '장면마다 할 일을 고르고 결과를 봐요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          DILEMMA('승강기 문이 닫혀요. 골라요.', { text: '문이 닫히는데 친구가 달려와요.', motif: 'house', choices: [
            { id: 'hand', text: '손을 넣어 막아요', result: '문에 손이 낄 뻔했어요.', why: '닫히는 문에 손을 넣지 않아요.' },
            { id: 'button', text: '열림 버튼을 눌러요', result: '문이 열리고 친구가 탔어요.', easyEnding: '친구가 안전하게 탔어요.', next: { text: '친구가 탔어요. 문이 닫혀요.', choices: [
              { id: 'away', text: '문에서 떨어져 서요', result: '문이 잘 닫히고 내려가요.', ending: '열림 버튼과 떨어져 서기로 모두 안전해요.' },
              { id: 'lean', text: '문에 기대요', result: '문이 열릴 때 넘어질 수 있어요.', why: '승강기 문에는 기대지 않아요.' }] } }] },
          ['button', 'away'], [{ id: 'safe', text: '문에 몸을 넣지 않아요' }, { id: 'fast', text: '빨리 가고 싶어서요', why: '빨리 가는 것보다 손이 먼저예요.' }, { id: 'strong', text: '문은 힘이 약해서요', why: '문은 손보다 힘이 세요.' }], 'safe', 0.15),
          DILEMMA('신발 끈이 풀렸어요. 골라요.', { text: '에스컬레이터에서 신발 끈이 풀렸어요.', motif: 'house', choices: [
            { id: 'tie', text: '앉아서 바로 묶어요', result: '끈이 틈에 끼일 수 있어요.', why: '움직이는 계단에서는 앉지 않아요.' },
            { id: 'hold', text: '손잡이 잡고 내린 뒤 묶어요', result: '무사히 내렸어요.', easyEnding: '옆으로 비켜서 끈을 묶었어요.', next: { text: '내렸어요. 뒤에 사람들이 와요.', choices: [
              { id: 'move', text: '옆으로 비켜 묶어요', result: '뒤 사람도 편하게 내렸어요.', ending: '내린 뒤 비켜서 묶어 모두 안전해요.' },
              { id: 'here', text: '내린 자리에 앉아 묶어요', result: '뒤 사람과 부딪힐 수 있어요.', why: '내리는 곳은 비워 둬요.' }] } }] },
          ['hold', 'move'], [{ id: 'gap', text: '틈에 끼지 않게요' }, { id: 'lazy', text: '귀찮아서요', why: '귀찮아도 내린 뒤 비켜서 묶어요.' }, { id: 'look', text: '사람들이 볼까 봐요', why: '남의 눈보다 내 발이 먼저예요.' }], 'gap', 0.2),
          DILEMMA('동생이 버튼을 다 누르려 해요. 골라요.', { text: '동생이 승강기 버튼을 다 누르려 해요.', motif: 'house', choices: [
            { id: 'all', text: '같이 눌러요', result: '층마다 멈춰 모두 늦어졌어요.', why: '버튼은 갈 층만 눌러요.' },
            { id: 'one', text: '"갈 층만 누르자" 말해요', result: '동생이 "왜?" 해요.', easyEnding: '동생이 갈 층만 눌렀어요.', next: { text: '동생이 문을 두드려요.', choices: [
              { id: 'adult', text: '어른께 알려요', result: '엄마가 동생 손을 잡아 주셨어요.', ending: '말해 주고 어른께 알려서 모두 안전해요.' },
              { id: 'copy', text: '따라 두드려요', result: '승강기가 흔들릴까 봐 모두 놀랐어요.', why: '승강기 안에서는 장난치지 않아요.' }] } }] },
          ['one', 'adult'], [{ id: 'together', text: '함께 쓰는 곳이에요' }, { id: 'fun', text: '재밌어서요', why: '재밌어도 함께 쓰는 곳에서는 장난치지 않아요.' }, { id: 'mine', text: '우리 집 거라서요', why: '아파트 승강기도 모두가 함께 써요.' }], 'together', 0.25, { conclude: '승강기 문에는 손을 넣지 않고, 모두가 쓰는 곳에서는 장난치지 않아요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '승강기 문이 닫혀요. 어떻게 해요?', options: ['열림 버튼 눌러요', '손을 넣어요'], answer: '열림 버튼 눌러요' }] },
    }),
    PUB({
      id: 'saf-life.e12.g2-public.wrap.public-check', type: 'wrap', title: '공공시설 약속 점검표',
      method: '공공시설 약속 점검표', tool: 'kitchen', minutes: 7,
      levels: { easy: '교사가 점검표 칸을 하나씩 읽어 주고 함께 표시한다.', base: '스스로 읽고 지킬 수 있는 약속에 표시한다.', challenge: '표시한 뒤 이번 주말 가족과 갈 곳에서 지킬 약속 하나를 고른다.' },
      wrap: {
        teacher: '"마트나 지하철역에 가면 오늘 배운 것 가운데 무엇을 지킬까요?" 점검표 칸을 함께 읽고 표시하게 한다. 출구 2번에서 "걸어 올라가요"를 고른 학생에게 "움직이는 계단에서는 서서 손잡이를 잡아요"라고 말해 준다. 가족과 다음에 갈 곳을 떠올려 짝에게 말하게 한다.',
        exitTicket: [
          CHECK('공공시설 약속', [{ id: 'line', text: '노란 선 안' }, { id: 'rail', text: '손잡이 잡기' }, { id: 'sign', text: '표지 보기' }], '지킬 약속에 표시해요.'),
          { type: 'choice', prompt: '에스컬레이터에서는요?', options: ['걸어 올라가요', '서서 손잡이', '앉아서 가요'], answer: 1, difficulty: 0.1, explain: '노란 선 안에 서서 손잡이를 잡아요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '공공시설 안전 약속',
        items: [
          { type: 'check', prompt: '내가 지킬 약속에 ✓ 해요.', options: ['에스컬레이터는 노란 선 안에 서요', '승강기 문에 기대지 않아요', '건물에서 비상구를 찾아봐요'] },
          { type: 'draw', prompt: '에스컬레이터를 바르게 타는 모습을 그려요.' },
        ],
        easy: { note: '"노란 선, 손잡이, 발 들고"를 떠올려요.', items: [{ type: 'draw', prompt: '비상구 표지를 그려요.' }] },
      },
    }),
    PUB({
      id: 'saf-life.e12.g2-public.wrap.sign-chant', type: 'wrap', title: '"노란 선, 손잡이, 발 들고" 구호',
      method: '표지 구호 따라 하기', tool: 'timer', minutes: 7,
      levels: { easy: '교사가 구호 두 개를 먼저 외치고 함께 따라 한다.', base: '구호 카드 세 장의 차례를 맞추고 동작과 함께 외친다.', challenge: '교사가 구호를 섞어 부르면 바른 차례로 다시 외치고 카드를 맞춘다.' },
      wrap: {
        teacher: '"노란 선! (발 모으기) 손잡이! (옆으로 손 뻗기) 발 들고! (무릎 올리기)" 구호 카드를 차례대로 놓은 뒤 반 전체가 동작과 함께 세 번 외친다. 출구 2번에서 "비상구 표지"를 바르게 고른 학생에게 학교 어디에서 그 표지를 보았는지 말하게 한다. 다음에 에스컬레이터를 탈 때 구호를 속으로 외쳐 보자고 한다.',
        exitTicket: [
          CHANT('에스컬레이터 구호', ['노란 선', '손잡이', '발 들고']),
          { type: 'choice', prompt: '불이 나면 무엇을 찾아요?', options: ['승강기', '비상구 표지', '옷 가게'], answer: 1, difficulty: 0.1, explain: '비상구 표지를 따라 나가요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '노란 선, 손잡이, 발 들고!',
        items: [
          { type: 'blank', prompt: '구호를 따라 써요.', text: '노란 선, 손잡이, ___ 들고!', answer: '발' },
          { type: 'draw', prompt: '우리 학교 비상구 표지를 그려요.' },
        ],
      },
    }),
  ];

  // =====================================================================================================
  // 2학년 · 문틈·창가·전기 제품
  const DOOR = MOD('saf-life.e12.g2-home-door', [2]);
  const HOUSE = [{ name: '창가', icon: 'dot', at: [0, 0] }, { name: '베란다', icon: 'dot', at: [3, 0] }, { name: '책장', icon: 'library', at: [0, 2] }, { name: '침대', icon: 'house', at: [3, 2] }];
  const HOUSE_MORE = [{ name: '소파', icon: 'dot', at: [1, 1] }, { name: '식탁', icon: 'dot', at: [2, 1] }];
  const T_DOOR = [
    DOOR({
      id: 'saf-life.e12.g2-home-door.intro.house-scene', type: 'intro', title: '거실 그림에서 위험 고르기',
      method: '집 장면에서 위험 고르기', tool: 'emotion', minutes: 6,
      levels: { easy: '교사가 그림 속 행동을 하나씩 읽어 주고 위험한 것 두 가지를 함께 찾는다.', base: '시연을 보고 위험한 곳 세 군데를 스스로 말한다.', challenge: '위험한 곳에 더해 안전한 행동(마른 손·천천히 닫기)을 골라 말한다.' },
      intro: {
        teacher: '"이 거실 그림에서 다칠 것 같은 곳은 어디일까요?" 두세 명의 대답을 듣고(기다릴 반응: "창가 의자요", "문틈에 손이요") 시연 단추로 위험한 것만 바구니에 담기는 모습을 보여 준다. "창가 의자는 바깥 보기 좋아요"라는 말이 나오면 "의자 위에서 몸을 내밀면 어디로 떨어질까요?"라고 되묻는다. 오늘은 문틈·창가·전기 제품 때문에 다치지 않는 행동을 고른다고 밝힌다.',
        student: '우리 집에서 조심할 곳을 하나 떠올려 짝에게 말해 보아요.',
        demo: { tool: 'emotion', options: { mode: 'pick', basket: '위험해요', cards: [{ id: 'window', text: '창가 의자' }, { id: 'dry', text: '마른 손' }, { id: 'gap', text: '문틈 손가락' }, { id: 'book', text: '책 읽기' }, { id: 'wet', text: '젖은 손 플러그' }, { id: 'slow', text: '문 천천히' }], shuffle: false }, sequence: [{ pick: ['window', 'gap', 'wet'] }] },
        art: { draw: 'a paper living room with a chair under a window, a door with a small hand near the hinge, and a plug near a wet towel, a parent nearby', banner: '집에서 조심해요' },
      },
    }),
    DOOR({
      id: 'saf-life.e12.g2-home-door.intro.finger-body', type: 'intro', title: '문틈에 끼기 쉬운 손 짚기',
      method: '다치기 쉬운 손가락 짚기', tool: 'body', minutes: 5,
      levels: { easy: '교사가 손목 한 곳을 짚어 보이고, 학생은 자기 손가락을 펴서 함께 본다.', base: '종이 몸의 손목을 짚고, 자기 손에서 문틈에 끼기 쉬운 손가락 두 곳을 짚는다.', challenge: '두 곳을 짚은 뒤 "문 닫기 전 손 확인" 동작(손 펴서 보기 → 등 뒤로)을 따라 한다.' },
      intro: {
        teacher: '"문을 닫을 때 몸의 어디가 끼기 쉬울까요?" 시연 단추로 종이 몸의 손목이 짚이는 모습을 보인 뒤, 학생들이 자기 손을 펴서 문틀 쪽에 닿기 쉬운 손가락을 짚게 한다. "문 닫는 사람만 조심하면 돼요"라는 말이 나오면 "문 뒤에 있는 친구 손은 닫는 사람에게 보일까요?"라고 되묻는다. "문 닫기 전 손 확인!"을 반 전체가 따라 말한다.',
        student: '내 손가락을 펴서 문틈에 끼기 쉬운 곳을 짚고 "문 닫기 전 손 확인!"을 말해요.',
        demo: { tool: 'body', options: { mode: 'parts', parts: ['손목', '팔꿈치', '어깨', '무릎'], names: true }, sequence: [{ parts: ['손목'] }] },
        art: { draw: 'a paper door half open with a child checking both hands before closing it slowly, a small star near the hinge', banner: '문 닫기 전 손 확인!', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
      },
      notes: '종이 몸에는 손가락 칸이 없어 손목을 짚는 시연으로 대신하고, 손가락은 학생이 자기 손으로 짚는다.',
    }),
    DOOR({
      id: 'saf-life.e12.g2-home-door.activity.plug-sort', type: 'activity', title: '전기 제품 좋아요·안돼요',
      method: '전기 제품 좋아요/안돼요', tool: 'mindmap', minutes: 14,
      levels: { easy: '카드 4장, 맞는 칸에 놓으면 초록 테두리가 생긴다.', base: '카드 6장을 다 놓은 뒤 확인한다.', challenge: '카드 8장, "발로 뽑기"처럼 헷갈리는 카드가 섞인다.' },
      activity: {
        title: '플러그·전기 제품·문 행동 나누기', tool: 'mindmap',
        teacher: '"플러그를 이렇게 다루면 좋아요일까요, 안돼요일까요?" 카드를 놓을 때마다 손을 내려다보며 젖었는지 말라 있는지 확인하는 흉내를 낸다. "줄 당기기"를 좋아요에 두는 학생에게 "줄이 끊어지거나 플러그가 튀어나오면 어떻게 될까요?"라고 묻는다. 콘센트 구멍에는 젓가락·핀 같은 것을 넣지 않는다는 점을 짚는다.',
        task: '행동 카드를 좋아요·안돼요로 나누어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          SORT2(OKNO, '플러그 다루는 법을 나누어요.', '플러그', ['마른 손으로', '머리 잡고 뽑기', '어른께 부탁'], ['젖은 손으로', '줄 당기기', '젓가락 넣기'], ['발로 뽑기', '문어발 꽂기'], 0.1),
          SORT2(OKNO, '전기 제품 쓰는 법을 나누어요.', '전기 제품', ['다 쓰면 끄기', '물기 닦기', '선 정리하기'], ['물 옆에 두기', '선 밟기', '뜯어 보기'], ['이불 덮어 두기', '켠 채 자리 뜨기'], 0.15),
          SORT2(OKNO, '문과 창가에서 하는 일을 나누어요.', '문과 창가', ['문 천천히 닫기', '손 확인하기', '창가 멀리 놀기'], ['문틈에 손', '창틀 오르기', '방충망 기대기'], ['문 쾅 닫기', '의자 밟고 창'], 0.2, { conclude: '플러그는 마른 손으로 머리를 잡고, 문은 손을 보고 천천히, 창가에는 오르지 않아요.' }),
        ],
      },
      worksheet: { items: [{ type: 'table', prompt: '좋으면 ○, 안 되면 ×를 써요.', columns: ['행동', '○ / ×'], cells: [['젖은 손으로 플러그', ''], ['머리 잡고 뽑기', ''], ['창틀에 오르기', ''], ['문 천천히 닫기', '']], answer: '×, ○, ×, ○' }],
        easy: [{ type: 'choice', prompt: '좋은 행동에 ○ 해요.', options: ['마른 손으로', '젖은 손으로'], answer: '마른 손으로' }] },
    }),
    DOOR({
      id: 'saf-life.e12.g2-home-door.activity.door-order', type: 'activity', title: '문 닫는 차례 놓기',
      method: '문 닫는 장면 차례 놓기', tool: 'story', minutes: 13,
      levels: { easy: '첫 장면이 놓여 있어 남은 두 장만 놓고, 놓으면 바로 맞는지 알려 준다.', base: '장면 세 장을 차례대로 놓는다.', challenge: '"쾅 닫아요" 같은 틀린 장면 한 장을 빼고 놓는다.' },
      activity: {
        title: '문 여닫는 장면 차례 놓기', tool: 'story',
        teacher: '"문을 닫을 때 손잡이를 잡은 다음 무엇을 할까요?" 카드를 놓은 뒤 교실 문 앞에서 두 명이 나와 손잡이 잡기 → 뒤돌아보기 → 천천히 닫기를 해 본다. "바람이 불면 문이 저절로 닫혀요"라는 학생에게 "그래서 문 가까이에서는 손을 문틀에 두지 않아요"라고 짚는다. 뒤에 친구가 있는지 보는 것이 닫기보다 먼저라는 점을 짚는다.',
        task: '장면 카드를 차례대로 놓아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          ORDER3('방문을 닫아요. 차례로 놓아요.', [{ id: 'knob', text: '손잡이 잡아요' }, { id: 'look', text: '뒤에 친구 봐요' }, { id: 'slow', text: '천천히 닫아요' }], { id: 'bang', text: '쾅 닫아요' }, 0.15),
          ORDER3('방문을 열어요. 차례로 놓아요.', [{ id: 'knock', text: '노크해요' }, { id: 'turn', text: '손잡이 돌려요' }, { id: 'open', text: '천천히 열어요' }], { id: 'kick', text: '발로 차서 열어요' }, 0.2),
          ORDER3('현관문을 닫아요. 차례로 놓아요.', [{ id: 'back', text: '뒤를 봐요' }, { id: 'hands', text: '손가락 빼요' }, { id: 'close', text: '천천히 닫아요' }], { id: 'run', text: '뛰며 닫아요' }, 0.25, { conclude: '문은 손잡이를 잡고, 뒤와 손을 보고, 천천히 닫아요.' }),
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '문 닫기 전 ___ 확인!', answer: '손' }] },
    }),
    DOOR({
      id: 'saf-life.e12.g2-home-door.activity.window-map', type: 'activity', title: '집 지도에서 오르면 안 되는 곳',
      method: '우리 집 지도에서 오르면 안 되는 곳', tool: 'map', minutes: 14,
      levels: { easy: '핀을 놓으면 그 칸의 이름이 바로 보인다.', base: '장소 네 곳(창가·베란다·책장·침대) 가운데 알맞은 곳에 꽂는다.', challenge: '소파·식탁까지 여섯 곳이 있는 지도에서 꽂는다.' },
      activity: {
        title: '집 지도에 오르면 안 되는 곳 꽂기', tool: 'map',
        teacher: '"집에서 올라가면 안 되는 곳은 어디일까요?" 핀을 꽂기 전에 그곳에 오르면 무엇이 넘어지거나 어디로 떨어질 수 있는지 말하게 한다. 책장을 "튼튼해서 괜찮아요"라고 하는 학생에게 "위에 매달리면 책장이 내 쪽으로 넘어올 수 있어요. 그럼 어떻게 될까요?"라고 묻는다. 높은 곳의 물건은 어른께 꺼내 달라고 부탁한다는 점을 짚는다.',
        task: '오르면 안 되는 곳에 핀을 꽂아요.', levels: { easy: { readout: true }, base: {}, challenge: {} },
        items: [
          PIN('바깥이 보이는 곳에 꽂아요.', HOUSE, HOUSE_MORE, '창가', 0.1),
          PIN('난간이 있는 곳에 꽂아요.', HOUSE, HOUSE_MORE, '베란다', 0.15),
          PIN('매달리면 넘어오는 곳에 꽂아요.', HOUSE, HOUSE_MORE, '책장', 0.2, { conclude: '창가·베란다·책장에는 오르지 않고, 높은 물건은 어른께 부탁해요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '오르면 안 되는 곳에 ○ 해요.', options: ['창가', '내 의자'], answer: '창가' }] },
    }),
    DOOR({
      id: 'saf-life.e12.g2-home-door.activity.unplug-check', type: 'activity', title: '플러그 뽑는 순서 맞추기',
      method: '플러그 뽑는 순서 맞추기', tool: 'kitchen', minutes: 14,
      levels: { easy: '카드 2장의 차례만 맞춘다.', base: '카드 3장의 차례를 맞춘다.', challenge: '"줄 잡고 당기기" 같은 함정 카드 한 장을 빼고 3장을 놓는다.' },
      activity: {
        title: '전기 제품 다룰 때 차례 맞추기', tool: 'kitchen',
        teacher: '"플러그를 뽑을 때 무엇부터 할까요?" 카드를 놓은 뒤 빈 손으로 손 털기 → 스위치 누르기 → 플러그 머리 잡기 동작을 따라 한다. "줄 잡고 당기기"를 넣는 학생에게 "줄 안에는 전기가 지나는 가는 선이 있어요. 당기면 어떻게 될까요?"라고 묻는다. 전기 제품을 닦거나 옮길 때는 꼭 어른과 함께 한다는 점을 짚는다.',
        task: '카드를 차례대로 놓아요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          KORDER('플러그를 뽑아요. 차례로 놓아요.', ['손 말리기', '스위치 끄기', '머리 잡고 뽑기'], '줄 잡고 당기기', 0.15),
          KORDER('드라이어를 다 썼어요. 차례로 놓아요.', ['스위치 끄기', '식을 때까지', '어른과 정리'], '물에 넣어 식히기', 0.2),
          KORDER('선풍기를 닦아요. 차례로 놓아요.', ['스위치 끄기', '플러그 뽑기', '어른과 닦기'], '켠 채로 닦기', 0.25, { conclude: '전기 제품은 끄고, 플러그를 뽑고, 어른과 함께 다뤄요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '플러그는 무엇을 잡고 뽑아요?', options: ['플러그 머리', '전기 줄'], answer: '플러그 머리' }] },
    }),
    DOOR({
      id: 'saf-life.e12.g2-home-door.wrap.home-check2', type: 'wrap', title: '집 안전 스스로 점검',
      method: '집 안전 스스로 점검', tool: 'timer', minutes: 7,
      levels: { easy: '교사가 점검 칸을 하나씩 읽어 주고 함께 표시한다.', base: '스스로 점검 칸 세 개를 모두 확인해 표시한다.', challenge: '표시한 뒤 집에 가서 살펴볼 곳 하나를 골라 짝에게 말한다.' },
      wrap: {
        teacher: '"오늘 배운 것 가운데 나는 무엇을 지킬 수 있나요?" 점검 칸을 함께 읽고 하나씩 표시하게 한다. 출구 2번에서 "줄을 당겨요"를 고른 학생에게 "플러그 머리를 잡아야 줄이 상하지 않아요"라고 말해 준다. 집에 가서 창가 의자가 있는지 가족과 함께 살펴보자고 한다.',
        exitTicket: [
          SELF('집 안전 점검', ['창가에 안 올라요', '마른 손으로 만져요', '문 닫기 전 손 봐요']),
          { type: 'choice', prompt: '플러그를 뽑을 때는요?', options: ['줄을 당겨요', '머리를 잡아요', '발로 차요'], answer: 1, difficulty: 0.1, explain: '마른 손으로 플러그 머리를 잡고 뽑아요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '우리 집 안전 점검',
        items: [
          { type: 'check', prompt: '집에 가서 살펴봐요.', options: ['창가에 올라갈 의자가 없어요', '콘센트 옆에 물이 없어요', '문 닫을 때 손을 봐요'] },
          { type: 'draw', prompt: '문을 천천히 닫는 내 모습을 그려요.' },
        ],
        easy: { note: '"창가, 마른 손, 문틈"을 떠올려요.', items: [{ type: 'draw', prompt: '마른 손을 그려요.' }] },
      },
    }),
    DOOR({
      id: 'saf-life.e12.g2-home-door.wrap.home-feel2', type: 'wrap', title: '멈춘 나를 칭찬해요',
      method: '멈춘 나를 칭찬해요', tool: 'emotion', minutes: 7,
      levels: { easy: '교사가 장면을 읽어 주고 함께 마음 카드를 고른다.', base: '장면 두 개에 마음 카드를 스스로 짝 짓는다.', challenge: '짝 지은 뒤 짝에게 칭찬 한마디를 해 준다.' },
      wrap: {
        teacher: '"젖은 손을 닦고 플러그를 만졌어요. 그때 내 마음은 어떨까요?" 장면마다 마음 카드를 짝 짓고 "잘했어!" 하고 자기 어깨를 토닥이게 한다. "귀찮았어요"라는 학생에게도 귀찮은 마음을 이기고 지킨 것은 더 잘한 일이라고 말해 준다. 짝끼리 오늘 잘한 점을 하나씩 칭찬하게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'emotion', options: { mode: 'match', slots: [{ id: 's1', label: '손 닦고 플러그 만짐' }, { id: 's2', label: '문틈 보고 닫음' }], cards: ['뿌듯함', '편안함', '화남'] }, prompt: '장면과 내 마음을 이어요.', target: { match: { s1: ['뿌듯함', '편안함'], s2: ['뿌듯함', '편안함'] } }, difficulty: 0.15 },
          { type: 'choice', prompt: '창가 의자가 있어요. 어떻게 해요?', options: ['올라가 봐요', '어른께 말해요', '뛰어올라요'], answer: 1, difficulty: 0.1, explain: '창가 의자는 어른께 말해 옮겨요.' },
          { type: 'short', prompt: '오늘 잘한 나를 칭찬해요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '멈춘 나를 칭찬해요',
        items: [
          { type: 'table', prompt: '좋으면 ○, 안 되면 ×를 써요.', columns: ['장면', '○ / ×'], cells: [['손 닦고 플러그를 만져요', ''], ['창틀에 올라가요', ''], ['문틈을 보고 닫아요', '']], answer: '○, ×, ○' },
          { type: 'draw', prompt: '나를 칭찬하는 말을 말풍선에 그려요.' },
        ],
      },
    }),
  ];

  // =====================================================================================================
  // 2학년 · 만들기 도구와 놀이용품
  const MAKE = MOD('saf-life.e12.g2-make-toys', [2]);
  const SCHOOL = [{ name: '운동장', icon: 'park', at: [3, 2] }, { name: '교실', icon: 'school', at: [0, 0] }, { name: '복도', icon: 'dot', at: [1, 0] }, { name: '계단', icon: 'dot', at: [2, 0] }];
  // 놀이용품 가지에 카드 하나씩 잇기(mindmap match): 기본 3가지, 쉬움 2가지, 도전 함정 카드 1장
  const TOYS = ['공', '줄넘기', '킥보드'];
  const TOYMATCH = (prompt, pair, trap, d, more) => ({
    prompt, toolOptions: { mode: 'match', topic: '놀이용품', slots: TOYS, cards: [pair[2], pair[0], pair[1]] }, target: { match: { 공: pair[0], 줄넘기: pair[1], 킥보드: pair[2] } }, difficulty: d,
    levels: {
      easy: { prompt: `${cut(prompt)}(2가지).`, toolOptions: { slots: TOYS.slice(0, 2), cards: [pair[1], pair[0]] }, target: { match: { 공: pair[0], 줄넘기: pair[1] } } },
      challenge: { toolOptions: { cards: [pair[2], trap, pair[0], pair[1]] } },
    },
    ...more,
  });
  const T_MAKE = [
    MAKE({
      id: 'saf-life.e12.g2-make-toys.intro.tool-box', type: 'intro', title: '책상 위 위험한 도구 고르기',
      method: '책상 위 위험한 도구 고르기', tool: 'emotion', minutes: 6,
      levels: { easy: '교사가 칼날 나온 칼·벌린 가위 두 개만 가리키며 함께 찾는다.', base: '시연을 보고 위험한 상태의 도구 세 가지를 스스로 말한다.', challenge: '위험한 도구에 더해 안전한 상태(닫힌 가위·뚜껑 닫은 풀)를 골라 말한다.' },
      intro: {
        teacher: '"만들기 시간이 끝난 책상이에요. 다칠 것 같은 것은 무엇일까요?" 두세 명의 대답을 듣고 시연 단추로 위험한 상태의 도구만 바구니에 담기는 모습을 보여 준다. "가위는 원래 위험해요"라는 말이 나오면 "닫혀 있는 가위와 벌어진 가위 중 어느 쪽이 손을 다치게 할까요?"라고 되묻는다. 오늘은 도구를 꺼내고 쓰고 정리하는 차례와 놀이용품을 놀 곳을 배운다고 밝힌다.',
        student: '만들기가 끝난 내 책상을 떠올려 정리할 것을 하나 말해 보아요.',
        demo: { tool: 'emotion', options: { mode: 'pick', basket: '위험해요', cards: [{ id: 'blade', text: '칼날 나온 칼' }, { id: 'shut', text: '닫힌 가위' }, { id: 'open', text: '벌린 가위' }, { id: 'glue', text: '뚜껑 닫은 풀' }, { id: 'pin', text: '바닥 압정' }, { id: 'paper', text: '정리한 색종이' }], shuffle: false }, sequence: [{ pick: ['blade', 'open', 'pin'] }] },
        art: { draw: 'a paper craft desk after class with open scissors, a craft knife with its blade out and a pushpin on the floor, a child starting to tidy up', banner: '만들기 뒤 책상' },
      },
    }),
    MAKE({
      id: 'saf-life.e12.g2-make-toys.intro.toy-place', type: 'intro', title: '공놀이할 곳 핀 꽂기',
      method: '놀이용품 놀 곳 핀', tool: 'map', minutes: 5,
      levels: { easy: '교사가 운동장 칸을 먼저 가리키고 함께 핀을 꽂는 흉내를 낸다.', base: '시연 지도를 보고 공놀이할 곳을 스스로 말한다.', challenge: '공놀이할 곳과 줄넘기할 곳을 둘 다 말하고 교실이 왜 아닌지 말한다.' },
      intro: {
        teacher: '"공을 가지고 놀고 싶어요. 학교 어디에서 놀면 좋을까요?" 시연 단추로 학교 지도의 운동장 칸에 핀이 꽂히는 모습을 보여 준다. "복도가 길어서 공 굴리기 좋아요"라는 말이 나오면 "복도에서 공을 쫓아 뛰다 교실에서 나오는 친구와 부딪히면 어떻게 될까요?"라고 되묻는다. 놀이용품마다 놀기 알맞은 곳이 있다는 점을 짚는다.',
        student: '공놀이할 곳을 지도에서 찾아 손가락으로 짚어 보아요.',
        demo: { tool: 'map', options: { grid: [4, 3], places: SCHOOL, title: '우리 학교' }, sequence: [{ pin: [3, 2] }] },
        art: { draw: 'a paper school map with a wide playground where paper children play ball, and a classroom and hallway where children walk', banner: '공은 운동장에서' },
      },
    }),
    MAKE({
      id: 'saf-life.e12.g2-make-toys.activity.make-order', type: 'activity', title: '도구 꺼내고 정리하는 차례',
      method: '만들기 도구 꺼내고 정리하기', tool: 'story', minutes: 14,
      levels: { easy: '첫 장면이 놓여 있어 남은 두 장만 놓고, 놓으면 바로 맞는지 알려 준다.', base: '장면 세 장을 차례대로 놓는다.', challenge: '"책상에 늘어놔요" 같은 틀린 장면 한 장을 빼고 놓는다.' },
      activity: {
        title: '만들기 도구 쓰는 장면 차례 놓기', tool: 'story',
        teacher: '"풀을 다 쓰면 언제 뚜껑을 닫을까요? 수업 끝나고, 아니면 바로?" 카드를 놓은 뒤 자기 풀·가위로 꺼내기 → 쓰기 → 닫아서 제자리를 해 본다. "나중에 한꺼번에 정리해요"라는 학생에게 "그사이 벌어진 가위에 손이 닿거나 풀이 마르면 어떻게 될까요?"라고 묻는다. 도구는 쓰고 바로 정리한다는 점을 짚는다.',
        task: '장면 카드를 차례대로 놓아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          ORDER3('풀을 써요. 차례로 놓아요.', [{ id: 'take', text: '꺼내요' }, { id: 'use', text: '써요' }, { id: 'cap', text: '뚜껑 닫고 제자리' }], { id: 'mess', text: '책상에 늘어놔요' }, 0.15),
          ORDER3('가위를 써요. 차례로 놓아요.', [{ id: 'get', text: '닫힌 채 꺼내요' }, { id: 'cut', text: '앉아서 잘라요' }, { id: 'put', text: '닫아서 통에 넣어요' }], { id: 'walk', text: '들고 돌아다녀요' }, 0.2),
          ORDER3('물감을 써요. 차례로 놓아요.', [{ id: 'mat', text: '물통 받쳐요' }, { id: 'paint', text: '붓으로 칠해요' }, { id: 'wash', text: '씻고 말려요' }], { id: 'carry', text: '물통 들고 뛰어요' }, 0.25, { conclude: '도구는 꺼내서 앉아서 쓰고, 다 쓰면 바로 닫아서 제자리에 둬요.' }),
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '풀을 다 쓰면 바로 ___을 닫아요.', answer: '뚜껑' }] },
    }),
    MAKE({
      id: 'saf-life.e12.g2-make-toys.activity.toy-match', type: 'activity', title: '놀이용품과 놀 곳 잇기',
      method: '놀이용품과 놀 곳 잇기', tool: 'mindmap', minutes: 13,
      levels: { easy: '공·줄넘기 두 가지에 카드를 잇는다.', base: '공·줄넘기·킥보드 세 가지에 카드를 하나씩 잇는다.', challenge: '"교실 안" 같은 함정 카드 한 장을 빼고 잇는다.' },
      activity: {
        title: '공·줄넘기·킥보드 가지에 잇기', tool: 'mindmap',
        teacher: '"줄넘기는 어디서 하면 좋을까요? 친구 바로 옆은 어떨까요?" 카드를 이을 때마다 그 놀이를 하는 흉내를 내며 둘레에 공간이 얼마나 필요한지 팔을 벌려 보게 한다. "교실 안"을 공에 잇는 학생에게 "교실에서 공을 던지면 무엇에 맞을까요?"라고 묻는다. 놀이용품마다 알맞은 곳과 약속이 다르다는 점을 짚는다.',
        task: '놀이용품 가지에 알맞은 카드를 이어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          TOYMATCH('놀이용품과 놀 곳을 이어요.', ['운동장', '넓은 곳', '차 없는 길'], '교실 안', 0.1),
          TOYMATCH('놀이용품과 약속을 이어요.', ['세게 안 던져요', '둘레 비워요', '안전모 써요'], '얼굴로 던져요', 0.15),
          TOYMATCH('다 놀고 정리하는 법을 이어요.', ['바구니에 넣어요', '줄 감아 둬요', '벽에 세워 둬요'], '복도에 둬요', 0.2, { conclude: '공은 운동장, 줄넘기는 넓은 곳, 킥보드는 안전모 쓰고 차 없는 곳에서 놀아요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '공놀이는 어디서 해요?', options: ['운동장', '교실 안'], answer: '운동장' }] },
    }),
    MAKE({
      id: 'saf-life.e12.g2-make-toys.activity.tidy-timer', type: 'activity', title: '정리 시간 타이머',
      method: '정리 시간 타이머', tool: 'timer', minutes: 14,
      levels: { easy: '카드 2장의 차례를 맞추고 정리 시간을 30초로 맞춘다.', base: '카드 3장의 차례를 맞추고 정리 시간을 1분으로 맞춘다.', challenge: '카드 4장의 차례를 맞추고, 정리를 마친 뒤 스스로 점검 세 칸을 확인한다.' },
      activity: {
        title: '정리 차례 맞추고 1분 정리', tool: 'timer',
        teacher: '"정리할 때 무엇부터 할까요? 위험한 도구부터일까요, 종이 조각부터일까요?" 차례를 맞추고 타이머를 맞춘 뒤 시작 단추를 눌러 반 전체가 실제로 자기 책상을 정리한다. "빨리 하려고 가위를 던져 넣어요"라는 학생에게 "던진 가위가 통 밖으로 튀면 어떻게 될까요?"라고 묻는다. 빨리보다 차례대로가 먼저라는 점을 짚는다.',
        task: '정리 카드를 차례대로 놓고 타이머를 맞춰요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          { prompt: '정리하는 차례로 놓아요.', toolOptions: { title: '정리 차례', cards: ['종이 버려요', '책상 닦아요', '도구 넣어요'] }, target: { order: ['도구 넣어요', '종이 버려요', '책상 닦아요'] }, difficulty: 0.1,
            levels: {
              easy: { prompt: '정리하는 차례로 놓아요(2장).', toolOptions: { cards: ['종이 버려요', '도구 넣어요'] }, target: { order: ['도구 넣어요', '종이 버려요'] } },
              challenge: { prompt: '정리하는 차례로 놓아요(4장).', toolOptions: { cards: ['책상 닦아요', '바닥 봐요', '도구 넣어요', '종이 버려요'] }, target: { order: ['도구 넣어요', '종이 버려요', '책상 닦아요', '바닥 봐요'] } },
            } },
          { prompt: '정리 시간을 1분으로 맞춰요.', toolOptions: { title: '정리 시간', plan: { work: 20, rest: 0, rounds: 1 } }, target: { plan: { work: 60 } }, difficulty: 0.15,
            hints: ['1분은 몇 초인지 떠올려요.', '정리(운동) 칸의 초를 바꿔요.', '정리 칸을 60초로 맞춰요.'],
            levels: { easy: { prompt: '정리 시간을 30초로 맞춰요.', target: { plan: { work: 30 } } } } },
          { prompt: '정리를 마치고 스스로 점검해요.', toolOptions: { title: '정리 점검' }, target: { selfCheck: ['풀 뚜껑을 닫았어요', '가위를 닫아 넣었어요', '바닥을 살펴봤어요'] }, difficulty: 0.2, conclude: '위험한 도구부터 넣고, 종이를 버리고, 책상과 바닥을 살펴요.' },
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '정리할 때 먼저 하는 것은?', options: ['도구 넣기', '책상 닦기'], answer: '도구 넣기' }] },
      notes: '1분은 이 수업에서 정한 정리 연습 시간이다(안전 기준 수치가 아님).',
    }),
    MAKE({
      id: 'saf-life.e12.g2-make-toys.activity.toy-dilemma', type: 'activity', title: '갈림길: 교실에서 공 던지자는 친구',
      method: '갈림길: 교실에서 공을 던지자는 친구', tool: 'dilemma', minutes: 14,
      levels: { easy: '첫 갈림에서 보기 2개 가운데 한 번만 고른다.', base: '고른 뒤 이어지는 장면에서 한 번 더 고른다(갈림 2번).', challenge: '갈림 2번을 지나 끝에서 까닭 카드 3장 가운데 하나를 고른다.' },
      activity: {
        title: '놀이용품을 쓰자는 친구', tool: 'dilemma',
        teacher: '"쉬는 시간에 친구가 교실에서 공을 던지자고 해요. 어떻게 할까요?" 고르기 전에 교실에 창문·화분·친구들이 어디 있는지 둘러보게 한다. "살살 던지면 괜찮아요"를 고른 학생에게 "공이 손에서 미끄러지면 어디로 갈까요?"라고 묻는다. 다른 길도 끝까지 가 보며 알맞은 곳으로 옮겨 노는 길을 견주게 한다.',
        task: '장면마다 할 일을 고르고 결과를 봐요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          DILEMMA('교실에서 공 던지자고 해요. 골라요.', { text: '친구가 교실에서 공을 던지자고 해요.', motif: 'house', choices: [
            { id: 'throw', text: '같이 던져요', result: '공이 창문에 맞을 뻔했어요.', why: '교실에서는 공을 던지지 않아요.' },
            { id: 'out', text: '"운동장에서 하자" 말해요', result: '친구가 "지금 하고 싶어" 해요.', easyEnding: '운동장에서 같이 공놀이를 했어요.', next: { text: '친구가 "지금 하고 싶어" 해요.', choices: [
              { id: 'go', text: '같이 운동장에 나가요', result: '넓은 곳에서 신나게 놀았어요.', ending: '알맞은 곳으로 옮겨서 모두 안전해요.' },
              { id: 'soft', text: '교실에서 살살 던져요', result: '공이 화분을 쓰러뜨렸어요.', why: '살살 던져도 교실에서는 안 돼요.' }] } }] },
          ['out', 'go'], [{ id: 'place', text: '공은 넓은 곳에서 놀아요' }, { id: 'now', text: '지금 놀고 싶어서요', why: '지금 놀고 싶어도 알맞은 곳으로 가요.' }, { id: 'quiet', text: '선생님이 안 봐서요', why: '아무도 안 봐도 약속을 지켜요.' }], 'place', 0.15),
          DILEMMA('복도에서 줄넘기 하자고 해요. 골라요.', { text: '친구가 복도에서 줄넘기를 하자고 해요.', motif: 'house', choices: [
            { id: 'jump', text: '복도에서 해요', result: '지나가던 친구가 줄에 걸렸어요.', why: '복도는 사람이 다니는 길이에요.' },
            { id: 'wide', text: '"넓은 곳에서 하자" 말해요', result: '운동장으로 나갔어요.', easyEnding: '운동장에서 줄넘기를 했어요.', next: { text: '운동장에 친구들이 많아요.', choices: [
              { id: 'apart', text: '친구와 떨어져서 해요', result: '줄이 아무에게도 닿지 않았어요.', ending: '둘레를 비우고 해서 모두 안전해요.' },
              { id: 'close', text: '친구 바로 옆에서 해요', result: '줄이 친구 다리에 맞았어요.', why: '줄넘기는 둘레를 비우고 해요.' }] } }] },
          ['wide', 'apart'], [{ id: 'space', text: '줄넘기는 빈 곳이 필요해요' }, { id: 'close', text: '복도가 가까워서요', why: '가까워도 다니는 길에서는 하지 않아요.' }, { id: 'show', text: '자랑하고 싶어서요', why: '자랑보다 친구 안전이 먼저예요.' }], 'space', 0.2),
          DILEMMA('찻길에서 타자고 해요. 골라요.', { text: '친구가 찻길에서 킥보드를 타자고 해요.', motif: 'house', choices: [
            { id: 'road', text: '찻길로 가요', result: '차가 빵 소리를 냈어요.', why: '킥보드는 차가 다니는 길에서 타지 않아요.' },
            { id: 'park', text: '"차 없는 곳에서 타자" 말해요', result: '놀이터 옆 마당으로 갔어요.', easyEnding: '차 없는 마당에서 탔어요.', next: { text: '안전모를 안 가져왔어요.', choices: [
              { id: 'helmet', text: '안전모 가지러 가요', result: '안전모를 쓰고 신나게 탔어요.', ending: '알맞은 곳에서 안전모를 써서 안전해요.' },
              { id: 'skip', text: '그냥 타요', result: '넘어지면 머리를 다칠 수 있어요.', why: '킥보드는 안전모를 쓰고 타요.' }] } }] },
          ['park', 'helmet'], [{ id: 'gear', text: '알맞은 곳과 안전모가 필요해요' }, { id: 'cool', text: '멋있어 보여서요', why: '멋보다 안전이 먼저예요.' }, { id: 'short', text: '잠깐만 탈 거라서요', why: '잠깐이어도 안전모를 써요.' }], 'gear', 0.25, { conclude: '놀이용품은 알맞은 곳에서, 약속을 지키며 놀아요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '교실에서 공 던지자고 해요.', options: ['운동장에서 하자', '살살 던지자'], answer: '운동장에서 하자' }] },
    }),
    MAKE({
      id: 'saf-life.e12.g2-make-toys.wrap.make-check', type: 'wrap', title: '만들기 약속 점검표',
      method: '만들기 약속 점검표', tool: 'kitchen', minutes: 7,
      levels: { easy: '교사가 점검표 칸을 하나씩 읽어 주고 함께 표시한다.', base: '스스로 읽고 오늘 해 본 것에 표시한다.', challenge: '표시한 뒤 다음 만들기 시간에 지킬 약속 하나를 고른다.' },
      wrap: {
        teacher: '"오늘 만들기 약속 가운데 나는 무엇을 했나요?" 점검표 칸을 함께 읽고 해 본 것에 표시하게 한다. 출구 2번에서 "끝나고 한꺼번에"를 고른 학생에게 "다 쓴 도구는 바로 정리해야 다음 친구도 안전해요"라고 말해 준다. 다음 만들기 시간 시작에 이 점검표를 다시 보자고 약속한다.',
        exitTicket: [
          CHECK('만들기 약속', [{ id: 'cap', text: '뚜껑 닫기' }, { id: 'home', text: '제자리 두기' }, { id: 'shut', text: '가위 닫기' }]),
          { type: 'choice', prompt: '다 쓴 풀은 언제 정리해요?', options: ['끝나고 한꺼번에', '쓰고 바로', '내일'], answer: 1, difficulty: 0.1, explain: '도구는 쓰고 바로 정리해요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '만들기 도구 약속',
        items: [
          { type: 'check', prompt: '내가 해 본 것에 ✓ 해요.', options: ['풀 뚜껑을 바로 닫았어요', '가위를 닫아서 넣었어요', '도구를 제자리에 두었어요'] },
          { type: 'draw', prompt: '정리를 끝낸 내 책상을 그려요.' },
        ],
        easy: { note: '"꺼내고, 쓰고, 제자리"를 떠올려요.', items: [{ type: 'draw', prompt: '뚜껑 닫은 풀을 그려요.' }] },
      },
    }),
    MAKE({
      id: 'saf-life.e12.g2-make-toys.wrap.toy-feel', type: 'wrap', title: '정리한 마음 크기 고르기',
      method: '정리한 마음 고르기', tool: 'emotion', minutes: 7,
      levels: { easy: '교사가 눈금을 "조금·보통·아주 많이" 세 가지로 읽어 주며 고르게 한다.', base: '눈금 5칸에서 정리를 끝낸 마음의 크기를 고른다.', challenge: '눈금을 고른 뒤 정리를 잘한 친구 한 명을 칭찬한다.' },
      wrap: {
        teacher: '"정리를 다 끝낸 책상을 보니 마음이 얼마나 뿌듯한가요?" 눈금을 고른 뒤 손가락으로 몇 칸인지 보여 주게 한다. 작은 칸을 고른 학생에게 "다음에 정리를 더 빨리 끝내면 한 칸 더 올라갈 거예요"라고 말해 준다. 정리를 잘한 친구를 칭찬하는 말을 두세 명이 하게 한다.',
        exitTicket: [
          SCALE('만들기 뒤 정리를 끝냈어요.', '뿌듯함', 5, '정리한 내 마음은 얼마큼이에요?', '아주 많이'),
          { type: 'choice', prompt: '킥보드를 탈 때는요?', options: ['안전모 써요', '찻길에서 타요', '맨발로 타요'], answer: 0, difficulty: 0.1, explain: '킥보드는 안전모를 쓰고 차 없는 곳에서 타요.' },
          { type: 'short', prompt: '정리를 잘한 친구를 칭찬해요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '정리한 내 마음',
        items: [
          { type: 'table', prompt: '좋으면 ○, 안 되면 ×를 써요.', columns: ['장면', '○ / ×'], cells: [['가위를 닫아 넣어요', ''], ['교실에서 공 던져요', ''], ['줄넘기는 넓은 곳에서', '']], answer: '○, ×, ○' },
          { type: 'draw', prompt: '정리를 끝낸 내 얼굴을 그려요.' },
        ],
      },
    }),
  ];

  // =====================================================================================================
  // 2학년 · 먹을거리 살펴보기
  const FOOD = MOD('saf-life.e12.g2-food', [2]);
  const EATASK = ['먹어요', '어른께 물어요'];
  // 식판 칸 채우기(kitchen sort): 이상한 먹을거리 카드는 어느 칸에도 넣지 않는다. 쉬움 3장(두 칸), 기본 5장, 도전 6장(함정 2장)
  const PLATE = ['밥 칸', '반찬 칸', '간식 칸'];
  const TRAY = (prompt, rice, sides, snack, bad, d, more) => ({
    prompt, toolOptions: { slots: PLATE, groups: false, cards: [sides[0], bad[0], rice, snack, sides[1]] }, target: { sort: { '밥 칸': [rice], '반찬 칸': sides, '간식 칸': [snack] } }, difficulty: d,
    levels: {
      easy: { prompt: `${cut(prompt)}(3장).`, toolOptions: { slots: ['밥 칸', '간식 칸'], cards: [snack, bad[0], rice] }, target: { sort: { '밥 칸': [rice], '간식 칸': [snack] } } },
      challenge: { prompt: `${cut(prompt)}(6장).`, toolOptions: { cards: [sides[0], bad[0], rice, bad[1], snack, sides[1]] }, target: { sort: { '밥 칸': [rice], '반찬 칸': sides, '간식 칸': [snack] } } },
    },
    ...more,
  });
  const SNACK3 = [['과일', 5], ['과자', 4], ['우유', 3]];
  const SNACK4 = [['과일', 5], ['과자', 4], ['우유', 3], ['떡', 2]];
  const T_FOOD = [
    FOOD({
      id: 'saf-life.e12.g2-food.intro.food-look', type: 'intro', title: '이상한 먹을거리 고르기',
      method: '이상한 먹을거리 고르기', tool: 'emotion', minutes: 6,
      levels: { easy: '교사가 두 그림(새 우유·부푼 우유)만 보여 주고 이상한 것을 고르게 한다.', base: '네 그림 가운데 이상한 먹을거리 두 개를 고른다.', challenge: '고른 뒤 왜 이상한지(부풀었어요·곰팡이) 까닭을 말한다.' },
      intro: {
        teacher: '"이 먹을거리 가운데 먹으면 안 될 것 같은 것은 무엇일까요?" 두세 명의 대답을 듣고 시연 단추로 부푼 우유팩과 곰팡이 핀 빵이 바구니에 담기는 모습을 보여 준다. "곰팡이만 떼고 먹으면 돼요"라는 말이 나오면 "보이는 곳만 떼면 안 보이는 곳은 괜찮을까요?"라고 되묻는다. 오늘은 먹기 전에 모양·냄새를 살피고 이상하면 어른께 묻는 법을 배운다고 밝힌다.',
        student: '먹기 전에 무엇을 살펴볼지 짝에게 하나 말해 보아요.',
        demo: { tool: 'emotion', options: { mode: 'pick', basket: '이상해요', cards: [{ id: 'puff', text: '부푼 우유팩' }, { id: 'milk', text: '새 우유팩' }, { id: 'mold', text: '곰팡이 빵' }, { id: 'bread', text: '새 빵' }], shuffle: false }, sequence: [{ pick: ['puff', 'mold'] }] },
        art: { draw: 'a paper table with a swollen milk carton, bread with green spots, a fresh milk carton and fresh bread, a child looking closely with a magnifying glass', banner: '먹기 전에 살펴요' },
      },
    }),
    FOOD({
      id: 'saf-life.e12.g2-food.intro.fridge-clock', type: 'intro', title: '간식 시각 시계 보기',
      method: '간식 시간 시계', tool: 'clock', minutes: 5,
      levels: { easy: '시계 바늘이 정각에 놓여 있고, 교사가 시각을 함께 읽는다.', base: '시연 시계를 보고 간식 먹는 정각을 말한다.', challenge: '교사가 말한 정각에 학생이 손으로 바늘 모양을 흉내 낸다.' },
      intro: {
        teacher: '"우리 반 간식 시간은 몇 시일까요?" 시연 단추로 시계가 정각이 되는 모습을 보여 주고, 그 시각에 먼저 할 일 두 가지(손 씻기, 살펴보기)를 반 전체가 손가락으로 세며 말한다. "배고프면 바로 먹어요"라는 말이 나오면 "포장이 찢어졌거나 냄새가 이상하면 어떻게 알 수 있을까요?"라고 되묻는다. "먹기 전에 살펴요!"를 따라 말한다.',
        student: '시계가 간식 시각이 되면 "먹기 전에 살펴요!"를 따라 말해요.',
        demo: { tool: 'clock', options: { hourOnly: true, showDigital: false }, sequence: [{ h: 2, m: 0 }] },
        art: { draw: 'a paper clock above a classroom snack table, paper children washing hands and looking at their snacks before eating', banner: '먹기 전에 살펴요', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
      },
    }),
    FOOD({
      id: 'saf-life.e12.g2-food.activity.eat-sort', type: 'activity', title: '먹어요·어른께 물어요 나누기',
      method: '먹어요/어른께 물어요 나누기', tool: 'mindmap', minutes: 14,
      levels: { easy: '카드 4장, 맞는 칸에 놓으면 초록 테두리가 생긴다.', base: '카드 6장을 다 놓은 뒤 확인한다.', challenge: '카드 8장, "날짜 지난 요구르트"처럼 겉보기에 괜찮아 헷갈리는 카드가 섞인다.' },
      activity: {
        title: '먹을거리 카드 두 칸으로 나누기', tool: 'mindmap',
        teacher: '"이 먹을거리는 바로 먹어도 될까요, 어른께 물어볼까요?" 카드를 놓을 때마다 무엇을 보고 그렇게 생각했는지(모양·냄새·어디서 났는지) 말하게 한다. "주운 사탕은 포장돼 있어서 괜찮아요"라는 학생에게 "누가 떨어뜨렸는지, 언제부터 거기 있었는지 알 수 있을까요?"라고 묻는다. 모르는 열매·버섯은 예뻐 보여도 먹지 않는다는 점을 짚는다.',
        task: '먹을거리 카드를 두 칸으로 나누어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          SORT2(EATASK, '냉장고 먹을거리를 나누어요.', '냉장고', ['새 우유', '씻은 사과', '오늘 만든 밥'], ['부푼 우유', '냄새 나는 반찬', '곰팡이 빵'], ['날짜 지난 요구르트', '뚜껑 열린 음료'], 0.1),
          SORT2(EATASK, '바깥에서 본 먹을거리를 나누어요.', '바깥', ['싸 온 도시락', '씻은 과일', '내 물병'], ['주운 사탕', '모르는 열매', '길가 버섯'], ['예쁜 빨간 열매', '친구가 주운 과자'], 0.15),
          SORT2(EATASK, '간식 상자를 나누어요.', '간식 상자', ['뜯지 않은 과자', '깨끗한 빵', '엄마가 준 귤'], ['구멍 난 봉지', '부푼 통조림', '이상한 냄새 과자'], ['찌그러진 통', '색이 변한 과자'], 0.2, { conclude: '모양·냄새가 이상하거나 어디서 났는지 모르면 먹지 말고 어른께 물어요.' }),
        ],
      },
      worksheet: { items: [{ type: 'table', prompt: '먹으면 ○, 어른께 물으면 △를 써요.', columns: ['먹을거리', '○ / △'], cells: [['새 우유', ''], ['부푼 우유', ''], ['주운 사탕', ''], ['씻은 사과', '']], answer: '○, △, △, ○' }],
        easy: [{ type: 'choice', prompt: '바로 먹어도 되는 것에 ○ 해요.', options: ['씻은 사과', '주운 사탕'], answer: '씻은 사과' }] },
    }),
    FOOD({
      id: 'saf-life.e12.g2-food.activity.check-order', type: 'activity', title: '먹기 전 살피는 차례',
      method: '먹기 전 살피는 차례', tool: 'story', minutes: 13,
      levels: { easy: '첫 장면이 놓여 있어 남은 두 장만 놓고, 놓으면 바로 맞는지 알려 준다.', base: '장면 세 장을 차례대로 놓는다.', challenge: '"일단 먹어 봐요" 같은 틀린 장면 한 장을 빼고 놓는다.' },
      activity: {
        title: '먹기 전 살피는 장면 차례 놓기', tool: 'story',
        teacher: '"먹기 전에 무엇부터 살펴볼까요?" 카드를 놓은 뒤 빈 손으로 간식을 들어 눈으로 보기 → 코로 살짝 맡기 → 손 들어 "선생님!" 부르기 동작을 따라 한다. "맛을 조금 보면 알 수 있어요"라는 학생에게 "이상한 것은 조금만 먹어도 배가 아플 수 있어요. 입에 넣기 전에 알 수 있는 방법은 무엇일까요?"라고 묻는다. 포장의 날짜는 어른과 함께 본다는 점을 짚는다.',
        task: '장면 카드를 차례대로 놓아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          ORDER3('간식을 먹기 전이에요. 차례로 놓아요.', [{ id: 'look', text: '모양 봐요' }, { id: 'smell', text: '냄새 맡아요' }, { id: 'ask', text: '이상하면 어른께' }], { id: 'taste', text: '일단 먹어 봐요' }, 0.15),
          ORDER3('포장 과자를 받았어요. 차례로 놓아요.', [{ id: 'bag', text: '봉지 살펴요' }, { id: 'date', text: '날짜는 어른과' }, { id: 'skip', text: '이상하면 안 먹어요' }], { id: 'torn', text: '찢어진 것도 먹어요' }, 0.2),
          ORDER3('산에서 열매를 봤어요. 차례로 놓아요.', [{ id: 'stop', text: '멈춰요' }, { id: 'nopick', text: '따지 않아요' }, { id: 'tell', text: '어른께 물어요' }], { id: 'lick', text: '맛만 봐요' }, 0.25, { conclude: '먹기 전에 모양과 냄새를 살피고, 이상하거나 모르면 어른께 물어요.' }),
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '이상하면 먹지 말고 ___께 물어요.', answer: '어른' }] },
    }),
    FOOD({
      id: 'saf-life.e12.g2-food.activity.plate-sort', type: 'activity', title: '오늘 간식 식판 채우기',
      method: '오늘 간식 식판 채우기', tool: 'kitchen', minutes: 14,
      levels: { easy: '카드 3장을 두 칸(밥·간식)에 놓고, 이상한 카드 한 장은 남긴다.', base: '카드 5장을 세 칸에 놓고, 이상한 카드 한 장은 남긴다.', challenge: '카드 6장, 이상한 카드 두 장을 가려 남기고 나머지를 놓는다.' },
      activity: {
        title: '식판에 먹을거리 놓기', tool: 'kitchen',
        teacher: '"오늘 식판을 채워 볼까요? 그런데 이상한 먹을거리는 어디에 둘까요?" 카드를 놓기 전에 하나씩 모양을 말로 살펴보게 한다. 부푼 우유를 간식 칸에 넣는 학생에게 "우유팩이 왜 부풀었을까요? 먹기 전에 누구에게 보여 줄까요?"라고 묻는다. 이상한 카드는 식판에 넣지 않고 그대로 남겨 두면 된다는 점을 짚는다.',
        task: '먹을거리를 식판 칸에 놓아요. 이상한 것은 넣지 않아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          TRAY('아침 식판을 채워요.', '밥', ['달걀', '시금치'], '사과', ['부푼 우유', '곰팡이 빵'], 0.15),
          TRAY('점심 식판을 채워요.', '밥', ['생선', '두부'], '귤', ['냄새 나는 생선', '찌그러진 통'], 0.2),
          TRAY('저녁 식판을 채워요.', '밥', ['고기', '김치'], '우유', ['주운 사탕', '모르는 버섯'], 0.25, { conclude: '이상한 먹을거리는 식판에 넣지 않고 어른께 보여 드려요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '식판에 넣지 않을 것은?', options: ['부푼 우유', '사과'], answer: '부푼 우유' }] },
    }),
    FOOD({
      id: 'saf-life.e12.g2-food.activity.snack-chart', type: 'activity', title: '좋아하는 간식 그림그래프',
      method: '좋아하는 간식 그림그래프', tool: 'chart', minutes: 14,
      levels: { easy: '첫 항목이 그려져 있어 나머지만 그리고, 가장 많은 간식을 고른다.', base: '간식 세 가지를 그림그래프로 완성하고 가장 많은 간식을 고른다.', challenge: '간식 네 가지를 그림그래프로 완성하고 가장 많은 것과 가장 적은 것을 고른다.' },
      activity: {
        title: '우리 반 간식 조사 그림그래프', tool: 'chart',
        teacher: '"우리 반 친구들이 좋아하는 간식을 그림으로 나타내 볼까요?" 이 자료는 수업을 위해 지은 가상의 조사라고 먼저 말한다. 별 하나가 친구 한 명이라는 것을 손가락으로 세며 확인하게 한다. 그래프를 다 그린 뒤 "가장 많은 친구가 좋아하는 과일도 먹기 전에 무엇을 할까요?"라고 묻고, 씻고 살펴본다는 점을 짚는다.',
        task: '표를 보고 그림그래프를 완성해요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          PICT('표를 보고 간식 그림그래프를 그려요.', '우리 반이 좋아하는 간식', '명', SNACK3, SNACK4, 0.15),
          PREAD('가장 많은 친구가 고른 간식을 골라요.', '우리 반이 좋아하는 간식', '명', SNACK4, '가장 많이 고른 간식은?', ['과일', '과자', '우유', '떡'], 0, 0.15),
          PREAD('가장 적은 친구가 고른 간식을 골라요.', '우리 반이 좋아하는 간식', '명', SNACK4, '가장 적게 고른 간식은?', ['과일', '과자', '우유', '떡'], 3, 0.2, { conclude: '좋아하는 간식도 먹기 전에 씻고, 모양과 냄새를 살펴요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '과일은 먹기 전에 무엇을 해요?', options: ['씻어요', '바로 먹어요'], answer: '씻어요' }] },
      notes: '그래프 수는 수업용으로 지은 가상의 조사다. 학급에서 손들기 조사를 하면 그 수로 바꿔 쓴다.',
    }),
    FOOD({
      id: 'saf-life.e12.g2-food.wrap.food-check', type: 'wrap', title: '먹기 전 스스로 점검',
      method: '먹기 전 스스로 점검', tool: 'timer', minutes: 7,
      levels: { easy: '교사가 점검 칸을 하나씩 읽어 주고 함께 표시한다.', base: '스스로 점검 칸 세 개를 모두 확인해 표시한다.', challenge: '표시한 뒤 집에서 먹기 전에 할 약속 하나를 짝에게 말한다.' },
      wrap: {
        teacher: '"먹기 전에 오늘 배운 세 가지를 했는지 살펴볼까요?" 점검 칸을 함께 읽고 하나씩 표시하게 한다. 출구 2번에서 "떼고 먹어요"를 고른 학생에게 "곰팡이는 안 보이는 곳까지 퍼져 있을 수 있어요. 어른께 보여 드려요"라고 말해 준다. 오늘 저녁 먹기 전에도 세 가지를 해 보자고 약속한다.',
        exitTicket: [
          SELF('먹기 전 점검', ['손을 씻었어요', '모양을 살폈어요', '이상하면 물어봐요']),
          { type: 'choice', prompt: '빵에 곰팡이가 있어요.', options: ['떼고 먹어요', '어른께 보여요', '친구 줘요'], answer: 1, difficulty: 0.1, explain: '곰팡이 핀 빵은 먹지 말고 어른께 보여 드려요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '먹기 전에 살펴요',
        items: [
          { type: 'check', prompt: '먹기 전에 해요.', options: ['비누로 손을 씻어요', '모양과 냄새를 살펴요', '이상하면 어른께 물어요'] },
          { type: 'draw', prompt: '먹기 전에 살펴보는 내 모습을 그려요.' },
        ],
        easy: { note: '"씻고, 살피고, 물어요"를 떠올려요.', items: [{ type: 'draw', prompt: '깨끗한 사과를 그려요.' }] },
      },
    }),
    FOOD({
      id: 'saf-life.e12.g2-food.wrap.food-feel', type: 'wrap', title: '"안 먹고 물어봤어요" 마음',
      method: '"안 먹고 물어봤어요" 마음', tool: 'emotion', minutes: 7,
      levels: { easy: '교사가 장면을 읽어 주고 함께 마음 카드를 고른다.', base: '장면 두 개에 마음 카드를 스스로 짝 짓는다.', challenge: '짝 지은 뒤 참고 물어본 친구에게 칭찬 한마디를 한다.' },
      wrap: {
        teacher: '"먹고 싶었지만 꾹 참고 어른께 물어봤어요. 그때 마음은 어땠을까요?" 장면마다 마음 카드를 짝 짓고 까닭을 말하게 한다. 주운 사탕을 버린 장면에 "속상함"을 둔 학생에게 "아까워서 속상한 마음도 괜찮아요. 그래도 내 몸을 지킨 거예요"라고 말해 준다. 서로 칭찬 한마디씩 주고받는다.',
        exitTicket: [
          { type: 'tool', tool: 'emotion', options: { mode: 'match', slots: [{ id: 's1', label: '안 먹고 물어봤어요' }, { id: 's2', label: '주운 사탕을 버렸어요' }], cards: ['뿌듯함', '속상함', '화남'] }, prompt: '장면과 내 마음을 이어요.', target: { match: { s1: ['뿌듯함'], s2: ['뿌듯함', '속상함'] } }, difficulty: 0.15 },
          { type: 'choice', prompt: '모르는 열매를 봤어요.', options: ['맛만 봐요', '어른께 물어요', '따서 모아요'], answer: 1, difficulty: 0.1, explain: '모르는 열매는 따거나 먹지 말고 어른께 물어요.' },
          { type: 'short', prompt: '참고 물어본 친구를 칭찬해요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '안 먹고 물어봤어요',
        items: [
          { type: 'table', prompt: '좋으면 ○, 안 되면 ×를 써요.', columns: ['장면', '○ / ×'], cells: [['주운 사탕을 먹어요', ''], ['부푼 우유를 어른께 보여요', ''], ['모르는 열매를 따 먹어요', '']], answer: '×, ○, ×' },
          { type: 'draw', prompt: '어른께 물어보는 내 모습을 그려요.' },
        ],
      },
    }),
  ];

  // =====================================================================================================
  // 2학년 · 체험 학습과 물놀이
  const TRIP = MOD('saf-life.e12.g2-trip-water', [2]);
  const MUSEUM_PLACES = [{ name: '모일 곳', icon: 'dot', at: [1, 1] }, { name: '버스 타는 곳', icon: 'bus', at: [0, 2] }, { name: '박물관', icon: 'museum', at: [3, 0] }, { name: '매점', icon: 'market', at: [3, 2] }];
  const MUSEUM_PATH = [{ name: '다니는 길', cells: [[0, 0], [1, 0], [2, 0], [2, 1], [2, 2]] }];
  const T_TRIP = [
    TRIP({
      id: 'saf-life.e12.g2-trip-water.intro.trip-scene', type: 'intro', title: '체험 학습 장면에서 위험 고르기',
      method: '체험 학습 장면에서 위험 고르기', tool: 'emotion', minutes: 6,
      levels: { easy: '교사가 그림 속 행동을 하나씩 읽어 주고 위험한 것 두 가지를 함께 찾는다.', base: '시연을 보고 위험한 행동 세 가지를 스스로 말한다.', challenge: '위험한 행동을 고른 뒤 짝 손을 잡은 친구를 칭찬하는 말을 한다.' },
      intro: {
        teacher: '"박물관 앞에 도착했어요. 이 그림에서 걱정되는 친구는 누구일까요?" 두세 명의 대답을 듣고(기다릴 반응: "줄에서 나갔어요", "혼자 가게로 가요") 시연 단추로 위험한 행동만 바구니에 담기는 모습을 보여 준다. "구경하다 보면 줄에서 떨어져도 금방 와요"라는 말이 나오면 "줄이 움직였는데 나만 남아 있으면 어떻게 될까요?"라고 되묻는다. 오늘은 체험 학습 날 짝과 줄을 지키는 법과 물놀이 약속을 배운다고 밝힌다.',
        student: '체험 학습 날 짝과 어떻게 다닐지 짝에게 말해 보아요.',
        demo: { tool: 'emotion', options: { mode: 'pick', basket: '위험해요', cards: [{ id: 'leave', text: '줄 벗어나기' }, { id: 'hand', text: '짝 손잡기' }, { id: 'shop', text: '혼자 가게로' }, { id: 'follow', text: '선생님 따라' }, { id: 'run', text: '뛰어다니기' }, { id: 'tag', text: '이름표 달기' }], shuffle: false }, sequence: [{ pick: ['leave', 'shop', 'run'] }] },
        art: { draw: 'paper children holding hands in pairs in a line in front of a paper museum, one child wandering toward a snack shop alone, a teacher at the front with a flag', banner: '짝과 함께 다녀요' },
      },
    }),
    TRIP({
      id: 'saf-life.e12.g2-trip-water.intro.warmup', type: 'intro', title: '물놀이 전 준비운동',
      method: '물놀이 전 준비운동', tool: 'timer', minutes: 5,
      levels: { easy: '교사가 동작 카드 두 장을 차례대로 보여 주며 함께 따라 한다.', base: '동작 카드 세 장의 차례(위에서 아래로)를 맞추고 따라 한다.', challenge: '교사가 섞어 부르는 동작을 듣고 위에서 아래로 차례를 다시 맞춘다.' },
      intro: {
        teacher: '"물에 들어가기 전에 몸을 깨워 볼까요? 위에서 아래로 차례대로 해요." 시연 단추로 동작 카드가 목 → 팔 → 발목 차례로 놓이는 모습을 보이고, 반 전체가 자리에서 일어나 함께 따라 한다. "덥고 신나니까 바로 들어가요"라는 말이 나오면 "몸이 굳은 채 차가운 물에 들어가면 다리가 어떻게 될까요?"라고 되묻는다.',
        student: '목, 팔, 발목을 차례로 돌리며 선생님을 따라 해요.',
        demo: { tool: 'timer', options: { title: '준비운동', cards: ['발목 돌리기', '목 돌리기', '팔 돌리기'] }, sequence: [{ order: ['목 돌리기', '팔 돌리기', '발목 돌리기'] }] },
        art: { draw: 'paper children in swimsuits doing warm-up stretches beside a paper pool, rotating necks and arms, a lifeguard adult watching', banner: '들어가기 전에 준비운동' },
      },
      notes: '위에서 아래로는 이 수업에서 정한 따라 하기 차례다.',
    }),
    TRIP({
      id: 'saf-life.e12.g2-trip-water.activity.buddy-map', type: 'activity', title: '체험 학습 지도에서 모일 곳',
      method: '체험 학습 지도에서 모일 곳', tool: 'map', minutes: 14,
      levels: { easy: '핀을 놓으면 그 칸의 이름이 바로 보인다.', base: '이름을 보고 모일 곳·버스 타는 곳·다니는 길에 꽂는다.', challenge: '이름이 지도에 없어 장소 그림과 길 색만 보고 꽂는다.' },
      activity: {
        title: '체험 학습 지도에 모일 곳·길 꽂기', tool: 'map',
        teacher: '"체험 학습 장소에 도착하면 선생님이 가장 먼저 알려 주는 곳은 어디일까요?" 핀을 꽂기 전에 모일 곳이 왜 필요한지(길을 잃었을 때 다시 만나는 곳) 말하게 한다. 매점을 "모이기 좋아요"라고 하는 학생에게 "사람이 많이 오가는 곳에서 우리 반을 금방 찾을 수 있을까요?"라고 묻는다. 정해진 길로만 다닌다는 점을 짚는다.',
        task: '알맞은 곳에 핀을 꽂아요.', levels: { easy: { readout: true }, base: {}, challenge: { names: false, regionNames: false } },
        items: [
          { prompt: '우리 반이 모일 곳에 꽂아요.', toolOptions: { grid: [4, 3], places: MUSEUM_PLACES, regions: MUSEUM_PATH, title: '체험 학습 장소' }, target: { place: '모일 곳' }, difficulty: 0.1 },
          { prompt: '집에 갈 때 버스 탈 곳에 꽂아요.', toolOptions: { grid: [4, 3], places: MUSEUM_PLACES, regions: MUSEUM_PATH, title: '체험 학습 장소' }, target: { place: '버스 타는 곳' }, difficulty: 0.15 },
          { prompt: '박물관까지 다니는 길에 꽂아요.', toolOptions: { grid: [4, 3], places: MUSEUM_PLACES, regions: MUSEUM_PATH, title: '체험 학습 장소' }, target: { region: '다니는 길' }, difficulty: 0.2, conclude: '모일 곳을 먼저 알아 두고, 정해진 길로 짝과 함께 다녀요.' },
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '길을 잃으면 어디로 가요?', options: ['모일 곳', '매점'], answer: '모일 곳' }] },
    }),
    TRIP({
      id: 'saf-life.e12.g2-trip-water.activity.trip-order', type: 'activity', title: '체험 학습 날 차례 놓기',
      method: '체험 학습 날 차례', tool: 'story', minutes: 13,
      levels: { easy: '첫 장면이 놓여 있어 남은 두 장만 놓고, 놓으면 바로 맞는지 알려 준다.', base: '장면 세 장을 차례대로 놓는다.', challenge: '"혼자 구경 가요" 같은 틀린 장면 한 장을 빼고 놓는다.' },
      activity: {
        title: '체험 학습 날 장면 차례 놓기', tool: 'story',
        teacher: '"버스에서 내렸어요. 맨 먼저 무엇을 할까요?" 카드를 놓은 뒤 짝과 손을 잡고 교실을 한 바퀴 돌며 선생님 따라가기를 해 본다. 화장실에 "말 안 하고 금방 다녀와요"라는 학생에게 "선생님이 반 친구 수를 셀 때 한 명이 없으면 어떻게 될까요?"라고 묻는다. 어디를 가든 선생님께 먼저 말한다는 점을 짚는다.',
        task: '장면 카드를 차례대로 놓아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          ORDER3('버스에서 내렸어요. 차례로 놓아요.', [{ id: 'hand', text: '짝 손잡아요' }, { id: 'follow', text: '선생님 따라가요' }, { id: 'meet', text: '모일 곳에 모여요' }], { id: 'alone', text: '혼자 구경 가요' }, 0.15),
          ORDER3('화장실에 가고 싶어요. 차례로 놓아요.', [{ id: 'tell', text: '선생님께 말해요' }, { id: 'pair', text: '짝과 같이 가요' }, { id: 'back', text: '바로 돌아와요' }], { id: 'quiet', text: '말없이 가요' }, 0.2),
          ORDER3('짝이 안 보여요. 차례로 놓아요.', [{ id: 'stop', text: '멈춰요' }, { id: 'say', text: '선생님께 알려요' }, { id: 'wait', text: '그 자리서 기다려요' }], { id: 'search', text: '찾으러 뛰어가요' }, 0.25, { conclude: '짝 손을 잡고, 선생님을 따라가고, 어디 갈 때는 먼저 말해요.' }),
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '체험 학습 날에는 ___ 손을 잡고 다녀요.', answer: '짝' }] },
    }),
    TRIP({
      id: 'saf-life.e12.g2-trip-water.activity.water-sort', type: 'activity', title: '물놀이 좋아요·안돼요',
      method: '물놀이 좋아요/안돼요', tool: 'mindmap', minutes: 14,
      levels: { easy: '카드 4장, 맞는 칸에 놓으면 초록 테두리가 생긴다.', base: '카드 6장을 다 놓은 뒤 확인한다.', challenge: '카드 8장, "얕다고 혼자"처럼 헷갈리는 카드가 섞인다.' },
      activity: {
        title: '물놀이 행동 두 칸으로 나누기', tool: 'mindmap',
        teacher: '"물놀이할 때 이렇게 하면 좋아요일까요, 안돼요일까요?" 카드를 놓을 때마다 누가 곁에 있어야 하는지 말하게 한다. "얕은 물은 혼자 들어가도 돼요"라는 학생에게 "물속에서 미끄러져 넘어지면 얕은 물에서도 일어나기 어려울 수 있어요. 누가 곁에 있어야 할까요?"라고 묻는다. 물에는 언제나 어른과 함께 들어간다는 점을 짚는다.',
        task: '행동 카드를 좋아요·안돼요로 나누어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          SORT2(OKNO, '수영장에서 하는 일을 나누어요.', '수영장', ['어른과 함께', '준비운동', '구명조끼'], ['혼자 깊은 곳', '물에서 밀기', '뛰어들기'], ['얕다고 혼자', '튜브만 믿기'], 0.1),
          SORT2(OKNO, '바닷가에서 하는 일을 나누어요.', '바닷가', ['그늘에서 쉬기', '물 마시기', '어른 곁 놀기'], ['혼자 멀리', '파도 쪽 가기', '바위 오르기'], ['조개 따라 멀리', '젖은 바위 뛰기'], 0.15),
          SORT2(OKNO, '계곡에서 하는 일을 나누어요.', '계곡', ['얕은 곳 어른과', '물놀이 신발', '쉬면서 놀기'], ['물살 센 곳', '혼자 건너기', '미끄러운 돌'], ['떠내려간 신발 쫓기', '높은 데서 뛰기'], 0.2, { conclude: '물에는 어른과 함께, 준비운동 먼저, 구명조끼를 입고 들어가요.' }),
        ],
      },
      worksheet: { items: [{ type: 'table', prompt: '좋으면 ○, 안 되면 ×를 써요.', columns: ['행동', '○ / ×'], cells: [['어른과 함께 들어가요', ''], ['혼자 깊은 곳에 가요', ''], ['구명조끼를 입어요', '']], answer: '○, ×, ○' }] },
    }),
    TRIP({
      id: 'saf-life.e12.g2-trip-water.activity.water-dilemma', type: 'activity', title: '갈림길: 튜브가 떠내려가요',
      method: '갈림길: 튜브가 떠내려가요', tool: 'dilemma', minutes: 14,
      levels: { easy: '첫 갈림에서 보기 2개 가운데 한 번만 고른다.', base: '고른 뒤 이어지는 장면에서 한 번 더 고른다(갈림 2번).', challenge: '갈림 2번을 지나 끝에서 까닭 카드 3장 가운데 하나를 고른다.' },
      activity: {
        title: '물놀이하다 이럴 땐?', tool: 'dilemma',
        teacher: '"튜브가 물에 떠내려가요. 따라갈까요, 어른께 말할까요?" 고르기 전에 튜브와 나 가운데 무엇이 더 소중한지 반 전체가 손을 들어 보게 한다. "금방 잡을 수 있어요"를 고른 학생에게 "튜브를 쫓다 보면 발이 바닥에 안 닿는 곳까지 갈 수 있어요. 그럼 어떻게 될까요?"라고 묻는다. 다른 길도 끝까지 가 보며 결과를 견주게 한다.',
        task: '장면마다 할 일을 고르고 결과를 봐요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          DILEMMA('튜브가 떠내려가요. 골라요.', { text: '내 튜브가 물에 떠내려가요.', motif: 'cloud', choices: [
            { id: 'chase', text: '따라 들어가요', result: '발이 안 닿는 곳까지 갔어요.', why: '튜브를 쫓아 물에 들어가지 않아요.' },
            { id: 'tell', text: '어른께 말해요', result: '어른이 "물 밖에서 기다려" 하세요.', easyEnding: '어른이 튜브를 가져다주셨어요.', next: { text: '어른이 "기다려" 하세요.', choices: [
              { id: 'wait', text: '물 밖에서 기다려요', result: '어른이 튜브를 가져다주셨어요.', ending: '물건보다 나를 먼저 지켰어요.' },
              { id: 'reach', text: '손 뻗어 잡아 봐요', result: '물에 빠질 뻔했어요.', why: '어른이 기다리라 하면 물 밖에서 기다려요.' }] } }] },
          ['tell', 'wait'], [{ id: 'me', text: '튜브보다 내가 소중해요' }, { id: 'mine', text: '내 튜브라서요', why: '내 것이어도 물에 따라 들어가지 않아요.' }, { id: 'swim', text: '나는 수영을 해서요', why: '수영을 해도 물살은 위험할 수 있어요.' }], 'me', 0.15),
          DILEMMA('친구가 깊은 곳에 가자고 해요. 골라요.', { text: '친구가 깊은 곳에 가 보자고 해요.', motif: 'cloud', choices: [
            { id: 'go', text: '따라가요', result: '발이 바닥에 안 닿아 놀랐어요.', why: '깊은 곳은 어른 없이 가지 않아요.' },
            { id: 'no', text: '"어른과 가자" 말해요', result: '어른이 지금은 쉬는 시간이래요.', easyEnding: '어른과 함께 얕은 곳에서 놀았어요.', next: { text: '어른이 지금은 쉬자고 하세요.', choices: [
              { id: 'rest', text: '같이 쉬어요', result: '그늘에서 쉬며 물을 마셨어요.', ending: '어른과 정한 대로 해서 둘 다 안전해요.' },
              { id: 'sneak', text: '몰래 가 봐요', result: '어른이 우리를 못 봤어요.', why: '물에서는 어른이 볼 수 있는 곳에 있어요.' }] } }] },
          ['no', 'rest'], [{ id: 'adult', text: '물에는 어른과 함께예요' }, { id: 'friend', text: '친구가 가자고 해서요', why: '친구가 가자고 해도 어른께 먼저 말해요.' }, { id: 'brave', text: '용감해 보이려고요', why: '용감한 것은 위험할 때 멈추는 거예요.' }], 'adult', 0.2),
          DILEMMA('입술이 파래졌어요. 골라요.', { text: '물놀이하다 춥고 입술이 파래졌어요.', motif: 'cloud', choices: [
            { id: 'more', text: '더 놀아요', result: '몸이 덜덜 떨렸어요.', why: '추우면 물 밖으로 나와요.' },
            { id: 'out', text: '물 밖으로 나와요', result: '바람이 불어 더 추워요.', easyEnding: '수건으로 몸을 감쌌어요.', next: { text: '수건이 어디 있는지 몰라요.', choices: [
              { id: 'ask', text: '어른께 말해요', result: '어른이 수건으로 감싸 주셨어요.', ending: '몸의 신호를 알고 쉬어서 안전해요.' },
              { id: 'wet', text: '젖은 채 참아요', result: '더 추워졌어요.', why: '추우면 참지 말고 어른께 말해요.' }] } }] },
          ['out', 'ask'], [{ id: 'signal', text: '몸이 쉬라고 해요' }, { id: 'fun', text: '아직 재밌어서요', why: '재밌어도 몸이 추우면 쉬어요.' }, { id: 'others', text: '친구들이 놀아서요', why: '친구들이 놀아도 내 몸을 먼저 살펴요.' }], 'signal', 0.25, { conclude: '물에서는 물건을 쫓지 않고, 어른과 함께, 몸이 추우면 나와서 쉬어요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '튜브가 떠내려가요. 무엇을 해요?', options: ['어른께 말해요', '따라 들어가요'], answer: '어른께 말해요' }] },
    }),
    TRIP({
      id: 'saf-life.e12.g2-trip-water.wrap.trip-check', type: 'wrap', title: '체험 학습 준비물 점검표',
      method: '체험 학습 준비물 점검표', tool: 'kitchen', minutes: 7,
      levels: { easy: '교사가 점검표 칸을 하나씩 읽어 주고 함께 표시한다.', base: '스스로 읽고 챙길 수 있는 것에 표시한다.', challenge: '네 칸을 모두 살펴 표시하고 짝의 이름표·물병도 서로 봐 준다.' },
      wrap: {
        teacher: '"체험 학습 날 아침, 가방에 무엇이 있어야 할까요?" 점검표 네 칸을 함께 읽고 챙길 수 있는 것에 표시하게 한다. 이름표에는 이름 대신 학교·반만 적는 까닭(모르는 사람이 이름을 부르지 않게)을 말해 준다. 출구 2번에서 "혼자 찾아요"를 고른 학생에게 "모일 곳으로 가면 선생님이 찾으러 오세요"라고 말해 준다.',
        exitTicket: [
          CHECK('체험 학습 준비', [{ id: 'hat', text: '모자' }, { id: 'water', text: '물병' }, { id: 'tag', text: '이름표' }, { id: 'buddy', text: '짝 확인' }], '챙길 것에 표시해요.'),
          { type: 'choice', prompt: '반 친구들이 안 보여요.', options: ['혼자 찾아요', '모일 곳으로 가요', '집에 가요'], answer: 1, difficulty: 0.1, explain: '정해진 모일 곳으로 가서 기다려요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '체험 학습 준비',
        items: [
          { type: 'check', prompt: '체험 학습 날 챙겨요.', options: ['모자를 챙겨요', '물병을 챙겨요', '이름표를 달아요', '짝을 확인해요'] },
          { type: 'draw', prompt: '짝과 손잡고 다니는 모습을 그려요.' },
        ],
        easy: { note: '"모자, 물, 이름표, 짝"을 떠올려요.', items: [{ type: 'draw', prompt: '내 가방 속 물병을 그려요.' }] },
      },
      notes: '이름표는 학교·반만 적게 안내한다(학생 이름을 바깥에 드러내지 않게).',
    }),
    TRIP({
      id: 'saf-life.e12.g2-trip-water.wrap.water-feel', type: 'wrap', title: '물놀이 약속 마음 크기',
      method: '약속 지킨 마음 크기', tool: 'emotion', minutes: 7,
      levels: { easy: '교사가 눈금을 "조금·보통·아주 잘" 세 가지로 읽어 주며 고르게 한다.', base: '눈금 5칸에서 물놀이 약속을 지킬 마음의 크기를 고른다.', challenge: '눈금을 고른 뒤 꼭 지킬 물놀이 약속 하나를 고른다.' },
      wrap: {
        teacher: '"어른과 함께 물에 들어가는 약속, 나는 얼마나 잘 지킬 수 있을까요?" 눈금을 고른 뒤 손가락으로 몇 칸인지 보여 주게 한다. 작은 칸을 고른 학생에게 "어떤 때 지키기 어려울 것 같아요?"라고 묻고, 그럴 때 할 말("같이 가요")을 함께 정한다. 출구 3번에서 고른 약속을 여름 방학 전 다시 떠올리자고 한다.',
        exitTicket: [
          SCALE('물에는 어른과 함께 들어가요.', '뿌듯함', 5),
          { type: 'choice', prompt: '물에 들어가기 전에 해요.', options: ['준비운동', '바로 뛰어들기', '혼자 들어가기'], answer: 0, difficulty: 0.1, explain: '준비운동을 하고 어른과 함께 들어가요.' },
          { type: 'choice', prompt: '꼭 지킬 약속을 골라요.', options: ['어른과 함께', '구명조끼 입기'], answer: 0, difficulty: 0.1, explain: '두 약속 모두 물놀이에서 꼭 지켜요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '물놀이 약속',
        items: [
          { type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '물에는 ___과 함께 들어가요.', answer: '어른' },
          { type: 'draw', prompt: '구명조끼를 입은 내 모습을 그려요.' },
        ],
      },
      notes: '출구 3번(꼭 지킬 약속)은 정답이 하나가 아니다 — 고른 까닭을 들어 준다.',
    }),
  ];

  // =====================================================================================================
  // 2학년 · 보호자를 놓쳤을 때·핑계 대는 사람
  const LURE = MOD('saf-life.e12.g2-lost-lure', [2]);
  const MART = [{ name: '안내소', icon: 'office', at: [1, 0] }, { name: '계산대', icon: 'market', at: [3, 1] }, { name: '장난감 코너', icon: 'dot', at: [0, 2] }, { name: '주차장', icon: 'dot', at: [3, 2] }];
  const MART_MORE = [{ name: '과일 코너', icon: 'orchard', at: [0, 0] }, { name: '화장실', icon: 'dot', at: [2, 2] }];
  const WARY = ['조심해요', '괜찮아요'];
  const T_LURE = [
    LURE({
      id: 'saf-life.e12.g2-lost-lure.intro.mart-scene', type: 'intro', title: '마트에서 도움 청할 사람',
      method: '마트 장면의 도움 될 사람 고르기', tool: 'emotion', minutes: 6,
      levels: { easy: '교사가 두 사람(계산대 직원·모르는 사람)만 가리키며 고르게 한다.', base: '네 사람 가운데 도움을 청할 두 사람을 고른다.', challenge: '고른 뒤 그 사람을 어떻게 알아보는지(이름표·일하는 옷·안내소 자리) 까닭을 말한다.' },
      intro: {
        teacher: '"마트에서 보호자가 안 보여요. 이 그림에서 누구에게 도움을 청하면 좋을까요?" 두세 명의 대답을 듣고 시연 단추로 계산대 직원과 안내소 직원이 바구니에 담기는 모습을 보여 준다. "나한테 먼저 다가온 사람이요"라는 말이 나오면 "내가 고른 어른에게 가는 것과 나에게 다가온 사람을 따라가는 것은 어떻게 다를까요?"라고 되묻는다. 오늘은 보호자를 놓쳤을 때의 차례와 핑계 대는 사람에게 거절하는 법을 배운다고 밝힌다.',
        student: '마트에서 도움을 청할 사람을 하나 골라 짝에게 말해 보아요.',
        demo: { tool: 'emotion', options: { mode: 'pick', basket: '도움 청해요', cards: [{ id: 'cashier', text: '계산대 직원' }, { id: 'stranger', text: '모르는 사람' }, { id: 'desk', text: '안내소 직원' }, { id: 'car', text: '주차장 사람' }], shuffle: false }, sequence: [{ pick: ['cashier', 'desk'] }] },
        art: { draw: 'a paper supermarket with a checkout counter and an information desk, workers wearing aprons and name tags, a child walking toward the desk', banner: '도움은 직원에게' },
      },
    }),
    LURE({
      id: 'saf-life.e12.g2-lost-lure.intro.phone-clock', type: 'intro', title: '그 자리에서 기다리는 시간',
      method: '기다리는 시간 시계', tool: 'clock', minutes: 5,
      levels: { easy: '시계 바늘이 놓여 있고, 교사가 긴바늘이 한 칸 가는 모습을 손가락으로 따라가게 한다.', base: '시연 시계에서 긴바늘이 한 칸 간 뒤의 시각을 말한다.', challenge: '교사가 처음 시각을 말하면 긴바늘이 한 칸 간 시각을 스스로 말한다.' },
      intro: {
        teacher: '"보호자를 놓쳤을 때, 그 자리에서 기다리면 보호자가 왜 나를 찾기 쉬울까요?" 시연 단추로 긴바늘이 12에서 1로 한 칸 가는 모습을 보여 주고, 그동안 반 전체가 "그 자리에서 기다려요"를 따라 말한다. "기다리기 지루하면 찾으러 가요"라는 말이 나오면 "나도 움직이고 보호자도 움직이면 서로 만날 수 있을까요?"라고 되묻는다. 기다려도 오지 않으면 가까운 직원에게 말한다는 점을 짚는다.',
        student: '"그 자리에서 기다려요, 안 오면 직원께!"를 따라 말해요.',
        demo: { tool: 'clock', options: { showMinuteNumbers: true, showDigital: false }, sequence: [{ h: 3, m: 0 }, { h: 3, m: 5 }] },
        art: { draw: 'a paper clock with the long hand moving one step, a child standing still beside a supermarket shelf, a parent hurrying back toward the child', banner: '그 자리에서 기다려요' },
      },
      notes: '"긴바늘 한 칸"은 이 수업에서 기다림을 눈으로 보이려고 정한 것이다(정해진 기준 시간이 아님).',
    }),
    LURE({
      id: 'saf-life.e12.g2-lost-lure.activity.mart-order', type: 'activity', title: '보호자를 놓쳤을 때 차례',
      method: '보호자를 놓쳤을 때 차례', tool: 'story', minutes: 14,
      levels: { easy: '첫 장면이 놓여 있어 남은 두 장만 놓고, 놓으면 바로 맞는지 알려 준다.', base: '장면 세 장을 차례대로 놓는다.', challenge: '"주차장으로 나가요" 같은 틀린 장면 한 장을 빼고 놓는다.' },
      activity: {
        title: '직원 찾는 장면 차례 놓기', tool: 'story',
        teacher: '"마트에서 보호자가 안 보여요. 맨 먼저 무엇을 할까요?" 카드를 놓은 뒤 짝과 직원·아이 역할을 맡아 "엄마를 잃어버렸어요. 엄마 이름은 ○○○예요"라고 말해 본다(이름은 가명으로). "주차장에 차가 있으니 거기로 가요"를 넣는 학생에게 "주차장에는 차가 많이 다녀요. 보호자는 나를 어디에서 먼저 찾을까요?"라고 묻는다.',
        task: '장면 카드를 차례대로 놓아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          ORDER3('마트에서 보호자를 놓쳤어요. 차례로 놓아요.', [{ id: 'stop', text: '멈춰요' }, { id: 'staff', text: '직원에게 말해요' }, { id: 'info', text: '이름·번호 말해요' }], { id: 'park', text: '주차장으로 나가요' }, 0.15),
          ORDER3('계산대 앞에서 아빠가 안 보여요. 차례로 놓아요.', [{ id: 'stand', text: '그 자리에 서요' }, { id: 'clerk', text: '계산대 직원께' }, { id: 'name', text: '아빠 이름 말해요' }], { id: 'wander', text: '혼자 찾아다녀요' }, 0.2),
          ORDER3('안내 방송이 나와요. 차례로 놓아요.', [{ id: 'listen', text: '내 이름 들어요' }, { id: 'desk', text: '안내소로 가요' }, { id: 'wait', text: '직원과 기다려요' }], { id: 'hide', text: '숨어서 기다려요' }, 0.25, { conclude: '보호자를 놓치면 멈추고, 직원에게 말하고, 보호자 이름과 번호를 말해요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '보호자를 놓쳤어요. 누구에게 말해요?', options: ['마트 직원', '주차장 사람'], answer: '마트 직원' }] },
      notes: '역할놀이에서 학생의 진짜 이름·전화번호를 말하지 않는다. 가명과 "엄마 이름" 자리로만 연습한다.',
    }),
    LURE({
      id: 'saf-life.e12.g2-lost-lure.activity.lure-sort', type: 'activity', title: '핑계 말 알아차리기',
      method: '핑계 말 알아차리기', tool: 'mindmap', minutes: 13,
      levels: { easy: '말 카드 4장, 맞는 칸에 놓으면 초록 테두리가 생긴다.', base: '말 카드 6장(아는 어른의 안전한 말 섞임)을 다 놓은 뒤 확인한다.', challenge: '말 카드 8장, "엄마가 다쳤대"처럼 급하게 들리는 핑계 말이 섞인다.' },
      activity: {
        title: '조심할 말·괜찮은 말 나누기', tool: 'mindmap',
        teacher: '"처음 보는 사람이 이렇게 말하면 조심할까요?" 카드를 놓을 때마다 누가 한 말인지(처음 보는 사람인지, 선생님·가족인지) 먼저 짚게 한다. "엄마가 보냈어"를 괜찮아요에 두는 학생에게 "엄마가 정말 보냈는지 나는 어떻게 알 수 있을까요? 누구에게 확인할까요?"라고 묻는다. 처음 보는 사람이 데려가려는 말은 이유가 무엇이든 확인부터 한다는 점을 짚는다.',
        task: '말 카드를 조심해요·괜찮아요로 나누어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          SORT2(WARY, '놀이터에서 들은 말을 나누어요.', '놀이터', ['"엄마가 보냈어"', '"선물 줄게"', '"길 좀 알려 줘"'], ['선생님 "줄 서요"', '엄마 "손잡자"', '직원 "이름은?"'], ['"엄마가 다쳤대"', '"차에 타 봐"'], 0.1),
          SORT2(WARY, '학교 앞에서 들은 말을 나누어요.', '학교 앞', ['"강아지 볼래?"', '"사탕 사 줄게"', '"태워 줄게"'], ['선생님 "안녕"', '친구 "같이 가자"', '엄마 "기다렸지"'], ['"너 이름 알아"', '"이건 비밀이야"'], 0.15),
          SORT2(WARY, '마트에서 들은 말을 나누어요.', '마트', ['"밖에 엄마 있어"', '"따라오면 줄게"', '"차에서 기다려"'], ['직원 "여기 있자"', '방송 "안내소로"', '아빠 "여기야"'], ['"아빠 친구야"', '"조용히 와"'], 0.2, { conclude: '처음 보는 사람이 데려가려는 말을 하면 "싫어요" 하고 아는 어른께 확인해요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '"엄마가 보냈어" 하면 어떻게 해요?', options: ['선생님께 확인', '바로 따라가요'], answer: '선생님께 확인' }] },
    }),
    LURE({
      id: 'saf-life.e12.g2-lost-lure.activity.lure-dilemma', type: 'activity', title: '갈림길: "엄마가 다쳤대, 가자"',
      method: '갈림길: "엄마가 다쳤대, 같이 가자"', tool: 'dilemma', minutes: 14,
      levels: { easy: '첫 갈림에서 보기 2개 가운데 한 번만 고른다.', base: '고른 뒤 이어지는 장면에서 한 번 더 고른다(갈림 2번).', challenge: '갈림 2번을 지나 끝에서 까닭 카드 3장 가운데 하나를 고른다.' },
      activity: {
        title: '핑계를 대며 다가올 때', tool: 'dilemma',
        teacher: '"처음 보는 사람이 \'엄마가 다쳤대, 같이 가자\' 해요. 어떻게 할까요?" 고른 뒤 반 전체가 "선생님께 확인할게요!"를 큰 소리로 세 번 따라 말한다. "엄마가 다쳤으면 빨리 가야 해요"를 고른 학생에게 "정말 엄마가 다치셨다면 누가 나에게 알려 줄까요? 선생님께 물어보면 어떻게 될까요?"라고 묻는다. 급하다고 할수록 확인부터 한다는 점을 짚는다.',
        task: '장면마다 할 일을 고르고 결과를 봐요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          DILEMMA('"엄마가 다쳤대" 해요. 골라요.', { text: '처음 보는 사람이 "엄마가 다쳤대, 같이 가자" 해요.', motif: 'house', choices: [
            { id: 'go', text: '따라가요', result: '아무도 내가 어디 갔는지 몰라요.', why: '급하다고 해도 처음 보는 사람은 따라가지 않아요.' },
            { id: 'check', text: '"선생님께 확인할게요" 해요', result: '그 사람이 "급해, 빨리" 해요.', easyEnding: '선생님께 가서 확인했어요. 엄마는 괜찮으셨어요.', next: { text: '그 사람이 "급해, 빨리" 해요.', choices: [
              { id: 'teacher', text: '선생님께 바로 가요', result: '선생님이 엄마께 전화해 주셨어요. 엄마는 괜찮으셨어요.', ending: '확인부터 해서 나를 지켰어요.' },
              { id: 'hurry', text: '급하니까 따라가요', result: '선생님도 엄마도 내가 어디 있는지 몰라요.', why: '급하다고 할수록 확인부터 해요.' }] } }] },
          ['check', 'teacher'], [{ id: 'confirm', text: '아는 어른께 확인해요' }, { id: 'worry', text: '엄마가 걱정돼서요', why: '걱정될수록 선생님께 먼저 확인해요.' }, { id: 'kind', text: '그 사람이 착해 보여서요', why: '착해 보여도 처음 보는 사람은 따라가지 않아요.' }], 'confirm', 0.15),
          DILEMMA('"엄마가 보냈어, 타" 해요. 골라요.', { text: '차 안의 사람이 "엄마가 보냈어, 타" 해요.', motif: 'house', choices: [
            { id: 'ride', text: '차에 타요', result: '엄마는 그런 부탁을 하지 않으셨어요.', why: '처음 보는 사람의 차에는 타지 않아요.' },
            { id: 'no', text: '"싫어요, 확인할게요" 해요', result: '그 사람이 엄마 이름을 말해요.', easyEnding: '학교로 돌아가 선생님께 말했어요.', next: { text: '그 사람이 엄마 이름을 말해요.', choices: [
              { id: 'still', text: '그래도 선생님께 가요', result: '선생님이 엄마께 확인해 주셨어요.', ending: '이름을 알아도 확인부터 해서 안전해요.' },
              { id: 'trust', text: '이름을 아니까 타요', result: '이름은 다른 사람도 알 수 있어요.', why: '이름을 알아도 처음 보는 사람이면 확인부터 해요.' }] } }] },
          ['no', 'still'], [{ id: 'check', text: '이름을 알아도 확인해요' }, { id: 'name', text: '엄마 이름을 알아서요', why: '이름은 다른 사람도 알 수 있어요.' }, { id: 'tired', text: '걷기 힘들어서요', why: '힘들어도 처음 보는 차에는 타지 않아요.' }], 'check', 0.2),
          DILEMMA('강아지를 같이 찾자고 해요. 골라요.', { text: '처음 보는 사람이 "강아지를 같이 찾아 줄래?" 해요.', motif: 'house', choices: [
            { id: 'help', text: '같이 찾으러 가요', result: '사람 없는 골목 쪽으로 가게 됐어요.', why: '어른은 아이에게 도움을 청하지 않고 어른에게 청해요.' },
            { id: 'adult', text: '"어른께 부탁하세요" 해요', result: '그 사람이 "너만 도와줄 수 있어" 해요.', easyEnding: '어른이 있는 곳으로 가서 말했어요.', next: { text: '"너만 도와줄 수 있어" 해요.', choices: [
              { id: 'leave', text: '어른 있는 곳으로 가요', result: '가게 어른께 말씀드렸어요.', ending: '거절하고 어른께 알려서 안전해요.' },
              { id: 'alone', text: '나만 할 수 있으니 가요', result: '아무도 내가 어디 갔는지 몰라요.', why: '"너만"이라는 말은 핑계일 수 있어요.' }] } }] },
          ['adult', 'leave'], [{ id: 'grownup', text: '어른 일은 어른께 부탁해요' }, { id: 'dog', text: '강아지가 불쌍해서요', why: '돕고 싶어도 아는 어른께 먼저 말해요.' }, { id: 'proud', text: '칭찬받고 싶어서요', why: '칭찬보다 나를 지키는 게 먼저예요.' }], 'grownup', 0.25, { conclude: '어떤 핑계를 대도 처음 보는 사람은 따라가지 않고, 아는 어른께 확인해요.' }),
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '"___께 확인할게요!"', answer: '선생님' }] },
      notes: '장면은 거절 연습용으로 지은 것이다. 무서운 결과를 자세히 묘사하지 않고, 학생에게 비슷한 일을 겪었는지 묻지 않는다.',
    }),
    LURE({
      id: 'saf-life.e12.g2-lost-lure.activity.mart-map', type: 'activity', title: '마트 지도에서 안내소 찾기',
      method: '마트 지도에서 안내소 찾기', tool: 'map', minutes: 14,
      levels: { easy: '핀을 놓으면 그 칸의 이름이 바로 보인다.', base: '이름을 보고 안내소·계산대·피할 곳에 꽂는다.', challenge: '과일 코너·화장실까지 여섯 곳이 있는 지도에서 꽂는다.' },
      activity: {
        title: '마트 지도에 도움 받을 곳 꽂기', tool: 'map',
        teacher: '"마트에 들어가면 보호자와 함께 안내소가 어디 있는지 봐 두면 좋아요. 왜 그럴까요?" 핀을 꽂기 전에 안내소와 계산대에는 늘 일하는 어른이 있다는 점을 말하게 한다. 장난감 코너를 "재미있어서 기다리기 좋아요"라고 하는 학생에게 "보호자가 내가 거기 있는 걸 알까요? 직원이 늘 있을까요?"라고 묻는다. 주차장은 보호자를 찾으러 나가면 안 되는 곳이라고 짚는다.',
        task: '알맞은 곳에 핀을 꽂아요.', levels: { easy: { readout: true }, base: {}, challenge: {} },
        items: [
          PIN('안내 방송을 하는 곳에 꽂아요.', MART, MART_MORE, '안내소', 0.1),
          PIN('돈을 내는 곳 직원 자리에 꽂아요.', MART, MART_MORE, '계산대', 0.15),
          PIN('찾으러 나가면 안 되는 곳에 꽂아요.', MART, MART_MORE, '주차장', 0.2, { conclude: '안내소와 계산대 직원에게 도움을 청하고, 주차장으로 나가지 않아요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '안내 방송을 하는 곳은?', options: ['안내소', '주차장', '장난감 코너'], answer: '안내소' }] },
    }),
    LURE({
      id: 'saf-life.e12.g2-lost-lure.wrap.lost-check', type: 'wrap', title: '내 안전 점검표',
      method: '내 안전 점검표', tool: 'kitchen', minutes: 7,
      levels: { easy: '교사가 점검표 칸을 하나씩 읽어 주고 함께 표시한다.', base: '스스로 읽고 할 수 있는 것에 표시한다.', challenge: '표시한 뒤 집에서 보호자 이름·전화번호를 연습하기로 약속한다.' },
      wrap: {
        teacher: '"오늘 배운 것 가운데 나는 무엇을 할 수 있나요?" 점검표 칸을 함께 읽고 표시하게 한다. 보호자 전화번호를 아직 못 외운 학생에게 "집에 가서 가족과 함께 외워 보면 돼요"라고 말해 준다(교실에서는 번호를 말하거나 적지 않는다). 출구 2번에서 "따라가요"를 고른 학생과는 "선생님께 확인할게요!" 연습을 한 번 더 한다.',
        exitTicket: [
          CHECK('내 안전 약속', [{ id: 'name', text: '이름 말하기' }, { id: 'phone', text: '번호 외우기' }, { id: 'check', text: '확인하기' }], '할 수 있는 것에 표시해요.'),
          { type: 'choice', prompt: '"엄마가 보냈어" 해요.', options: ['따라가요', '선생님께 확인', '선물 받아요'], answer: 1, difficulty: 0.1, explain: '처음 보는 사람이 데려가려 하면 선생님께 확인해요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '나를 지키는 점검표',
        items: [
          { type: 'check', prompt: '집에서 가족과 해 봐요.', options: ['보호자 이름 말하기', '보호자 전화번호 외우기', '"확인할게요" 연습하기'] },
          { type: 'draw', prompt: '안내소 직원에게 말하는 모습을 그려요.' },
        ],
        easy: { note: '"멈추고, 직원께, 확인해요"를 떠올려요.', items: [{ type: 'draw', prompt: '직원 이름표를 그려요.' }] },
      },
      notes: '전화번호는 교실에서 말하거나 적게 하지 않는다. 집에서 보호자와 연습하는 과제로만 둔다.',
    }),
    LURE({
      id: 'saf-life.e12.g2-lost-lure.wrap.refuse-chant', type: 'wrap', title: '"싫어요·안 돼요·물어볼게요"',
      method: '"싫어요·안 돼요·물어볼게요" 구호', tool: 'timer', minutes: 7,
      levels: { easy: '교사가 구호 두 개를 먼저 외치고 함께 따라 한다.', base: '구호 카드 세 장의 차례를 맞추고 동작과 함께 외친다.', challenge: '교사가 구호를 섞어 부르면 바른 차례로 다시 외치고 카드를 맞춘다.' },
      wrap: {
        teacher: '"싫어요! (손바닥 앞으로) 안 돼요! (고개 젓기) 물어볼게요! (뒤돌아 걷기)" 구호 카드를 차례대로 놓은 뒤 반 전체가 동작과 함께 세 번 큰 소리로 외친다. 작은 목소리로 말하는 학생에게 "큰 소리는 주변 어른도 듣게 해요. 한 번 더 크게 해 볼까요?"라고 말해 준다. 출구 2번에서 "아무 말 안 해요"를 고른 학생에게 무서운 일은 꼭 어른께 말한다고 짚어 준다.',
        exitTicket: [
          CHANT('거절 구호', ['싫어요', '안 돼요', '물어볼게요']),
          { type: 'choice', prompt: '거절한 뒤에는 어떻게 해요?', options: ['아무 말 안 해요', '어른께 알려요', '숨어요'], answer: 1, difficulty: 0.1, explain: '거절한 뒤에는 아는 어른께 꼭 알려요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '싫어요, 안 돼요, 물어볼게요!',
        items: [
          { type: 'blank', prompt: '구호를 따라 써요.', text: '싫어요, 안 돼요, ___!', answer: '물어볼게요' },
          { type: 'draw', prompt: '큰 소리로 "싫어요"라고 말하는 모습을 그려요.' },
        ],
      },
    }),
  ];

  PaperLessons.registerModules([].concat(T_CLASS, T_HOME, T_TOOLS, T_PLAY, T_OUT, T_LOST, T_PUB, T_DOOR, T_MAKE, T_FOOD, T_TRIP, T_LURE));
})();
