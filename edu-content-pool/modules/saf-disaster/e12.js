/* 창체 안전교육 재난안전 — 초1-2 모듈 내용(edu-module.v1). 형식·작성 규칙: MODULES_BUILD.md, 계획: framework/safety-b.json 의 saf-disaster 초1-2.
 * 근거: 「학교안전교육 실시 기준 등에 관한 고시」(교육부고시 제2023-33호) 별표 2 초등학교 재난안전
 *   1(화재의 원인 및 대피요령, 신고, 전파요령) · 2(화상 대처 요령) · 3(각종 자연 재난과 안전한 행동) · 4(폭발·붕괴·테러 위협 유형별 대처) · 5(재난 유형별 대비 훈련).
 *   별표 1 참고5: 재난 대비 훈련 포함, 유형을 달리해 매 학년도 2종류 이상 — 1학년 화재·지진, 2학년 화재·지진(운동장 이동) 훈련 판을 둔다.
 * 초1-2 기준: 소리로 읽어 주는 짧은 문항, 카드 6자 안팎, 따라 하기·구호·역할놀이. 장면·인물은 직접 지은 것이다(가명).
 * 주제 8개(1학년 4 · 2학년 4). 계획 모듈 60개 가운데 tool 'sortboard' 8개는 아직 쓰지 않는다 — 지금 sortboard 는 단추 카드만 받아
 *   '좋아요/안돼요' 글 카드를 나누지 못한다(코디네이터가 글 카드 모드를 넣는 중, 문항 초안은 /tmp/mod-saf-disaster-e12/sortboard-draft.md).
 * 수치(초·m·℃·%)·전화번호는 쓰지 않는다(근거 파일에 재난안전 초1-2 수치가 없고, 체계도 concepts 에 전화번호가 없다).
 *
 * 사람 확인: 근거 파일(research-safety.md)에는 고시 항목 제목뿐이라 아래 행동 수칙은 일반 안전 수칙을 옮긴 것이다. 공식 안내처에서 문구를 확인한다.
 *   - fire-shout 전체: 불을 보면 "불이야" 외치고 어른께 알린다 · 젖은 수건/소매로 코와 입을 가린다 · 몸을 낮춰 나간다 · 숨지 않는다(책상 밑·옷장) · 물건을 챙기지 않는다 — 소방청·국민재난안전포털
 *   - exit-sign 전체·quake-out.activity.yard-map·quake-out.activity.out-order: 비상구 표시는 초록색이다 · 대피할 때 엘리베이터 대신 계단 · 밀지 않고 줄 서서 · 다 나가면 운동장에 모인다 — 소방청·국민재난안전포털
 *   - quake-cover 전체: 흔들리면 책상 아래로 들어가 머리를 감싸고 책상 다리를 잡는다 · 창문·책장에서 떨어진다 · 흔들리는 동안 뛰어나가지 않는다 — 행정안전부 국민재난안전포털(지진 행동요령)
 *   - quake-out 전체: 흔들림이 멈추면 가방·책으로 머리를 가리고 계단으로 운동장에 나간다 · 운동장에서는 건물·담장·골대에서 떨어진 가운데에 모인다 — 행정안전부 국민재난안전포털
 *   - hot-touch 전체: 데면 뜨거운 것에서 바로 떨어진다 · 흐르는 찬물로 식힌다 · 어른을 부른다 · 참거나 숨기지 않는다 — 소방청·질병관리청(화상 응급처치). 식히는 시간은 근거에 없어 적지 않았다.
 *   - rain-wind 전체: 비·바람이 센 날 냇가·물웅덩이·간판 아래를 피한다 · 어른과 함께 다닌다 · 바람 센 날 연을 날리지 않는다 · 떨어진 줄(전선)은 만지지 않는다(rain-wind.activity.good-bad 카드 '떨어진 줄 만지기') — 행정안전부 국민재난안전포털(호우·태풍)
 *   - heat-cold 전체: 더운 날 그늘에서 쉬고 물을 자주 마신다 · 한낮에 오래 뛰지 않는다 · 추운 날 목·귀·손목을 감싸고 겹쳐 입는다 · 몸이 이상하면 어른께 말한다 — 질병관리청·국민재난안전포털(폭염·한파)
 *   - strange-bag 전체: 주인 없는 수상한 물건은 만지거나 열지 않는다 · 멀리 떨어진다 · 선생님·경비원·부모님께 알린다 — 국민재난안전포털(테러 대비 행동요령)·경찰청
 *   - 비상구 표시 그림·소화기 등 표지는 교구가 그리지 못해 카드에 말로 적었다. 교사가 실물(학교 비상구 표시)을 보이게 했다(exit-sign 각 모듈 notes). */
(function () {
  const MOD = (topic, grades) => (o) => Object.assign({ schema: 'edu-module.v1', domain: 'saf-disaster', band: '초1-2', topic, grades }, o);
  const MOOD = { type: 'mood', prompt: '오늘 공부를 마친 내 마음은 어떤가요?' };
  const cut = (p) => p.replace(/\.$/, '');

  // 차례 카드(timeline): 기본 3장, 쉬움 첫 카드가 놓여 있음, 도전 틀린 카드 1장이 섞여 빼고 놓음
  const TL = (prompt, cards, wrong, d, more) => {
    const ids = cards.map((c) => c.id);
    return {
      prompt, toolOptions: { slots: ['먼저', '다음', '끝'], cards: [cards[2], cards[0], cards[1]] }, target: { order: ids }, difficulty: d,
      levels: { easy: { state: { at: { [ids[0]]: 0, [ids[1]]: null, [ids[2]]: null } } }, challenge: { toolOptions: { cards: [cards[2], wrong, cards[0], cards[1]] } } },
      ...more,
    };
  };
  // 칸 지도 핀(map): 장소에 핀 하나. 도전은 헷갈리는 장소가 더 있는 지도
  const PIN = (prompt, base, more2, place, d, more) => ({
    prompt, toolOptions: { grid: [4, 3], places: base }, target: { place }, difficulty: d,
    levels: { challenge: { toolOptions: { places: [...base, ...more2] } } }, ...more,
  });
  // 훈련 판(timer): ① 순서 카드(쉬움 2장) ② 신호에 맞춰 훈련(해 보았어요) ③ 훈련 뒤 점검(쉬움 2개, 도전 1개 더)
  const DRILL = (orderPrompt, title, cards, doneLabel, after, extra, d, drillPrompt, afterPrompt) => [
    { prompt: orderPrompt, toolOptions: { title, cards: [cards[2], cards[0], cards[1]] }, target: { order: cards }, difficulty: d,
      levels: { easy: { prompt: `${cut(orderPrompt)}(2장).`, toolOptions: { cards: [cards[1], cards[0]] }, target: { order: [cards[0], cards[1]] } } } },
    { prompt: drillPrompt, free: true, toolOptions: { doneLabel }, difficulty: d },
    { prompt: afterPrompt, toolOptions: { title: '훈련 뒤 점검', safety: after }, target: { safety: true }, difficulty: d + 0.05,
      levels: { easy: { toolOptions: { safety: after.slice(0, 2) } }, challenge: { toolOptions: { safety: [...after, extra] } } } },
  ];
  // 정리 출구: 그림 점검표(스스로 점검), 구호 순서(timer)
  const CHECK = (title, items, prompt) => ({ type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title, items }, prompt: prompt || '오늘 해 본 것에 표시해요.', target: { selfCheck: true }, difficulty: 0.1 });
  const CHANT = (title, cards, prompt) => ({ type: 'tool', tool: 'timer', options: { title, cards: [cards[2], cards[0], cards[1]] }, prompt: prompt || '구호를 차례대로 놓아요.', target: { order: cards }, difficulty: 0.1 });
  // 갈림길(dilemma): 기본 2번 갈림, 쉬움 첫 갈림만, 도전 끝에서 카드 한 장 더 고르기
  const DILEMMA = (prompt, scene, path, reasons, good, d, more) => {
    const first = Object.assign({}, scene, { choices: scene.choices.map((c) => { const x = Object.assign({}, c); if (x.next) { delete x.next; x.ending = c.easyEnding || '잘 골랐어요.'; } delete x.easyEnding; return x; }) });
    const clean = Object.assign({}, scene, { choices: scene.choices.map((c) => { const x = Object.assign({}, c); delete x.easyEnding; return x; }) });
    return {
      prompt, toolOptions: { title: '어떻게 할까요?', scene: clean }, target: { path: [path] }, difficulty: d,
      levels: {
        easy: { prompt: `${cut(prompt)}(한 번).`, toolOptions: { scene: first }, target: { path: [[path[0]]] } },
        challenge: { prompt: `${cut(prompt)}, 할 말도요.`, toolOptions: { reasons, maxReasons: 1 }, target: { path: [path], reasons: [good] } },
      },
      ...more,
    };
  };

  // =====================================================================================================
  // 1학년 · 불이 나면 '불이야' 알리고 몸 낮춰 나가기
  const FIRE = MOD('saf-disaster.e12.fire-shout', [1]);
  const T_FIRE = [
    FIRE({
      id: 'saf-disaster.e12.fire-shout.intro.picture', type: 'intro', title: '그림에서 불 난 곳 찾기',
      method: '그림 장면에서 불 난 곳 찾기', tool: 'emotion', minutes: 6,
      levels: { easy: '교사가 집 장면 하나만 보이고 연기 나는 곳을 크게 가리키며 함께 찾는다.', base: '집과 교실 두 장면에서 연기 나는 곳을 하나씩 찾아 말한다.', challenge: '찾은 뒤 "누구에게 알릴까?"를 묻고 알릴 어른을 손으로 가리킨다.' },
      intro: {
        teacher: '"이 그림에서 이상한 곳이 어디일까요? 냄새가 날 것 같은 곳이요." 두세 명의 대답을 듣고(기다릴 반응: "연기요", "불이요") 시연 단추로 불과 연기 카드만 바구니에 담기는 모습을 보여 준다. "불을 보면 숨어요"라는 말이 나오면 "숨으면 소방관 아저씨가 나를 찾을 수 있을까요?"라고 되묻는다. 오늘은 불을 보면 "불이야!" 외치고 어른께 알리는 법을 배운다고 밝힌다.',
        student: '그림에서 연기가 나는 곳을 찾아 손으로 가리켜 보아요.',
        demo: { tool: 'emotion', options: { mode: 'pick', basket: '불이 났어요', cards: [{ id: 'smoke', text: '검은 연기' }, { id: 'book', text: '그림책' }, { id: 'flame', text: '빨간 불꽃' }, { id: 'cup', text: '물컵' }, { id: 'smell', text: '타는 냄새' }, { id: 'ball', text: '공' }], shuffle: false }, sequence: [{ pick: ['smoke', 'flame', 'smell'] }] },
        art: { draw: 'a paper house where grey paper smoke curls out of a kitchen window, a small paper child pointing at it and calling to a parent', banner: '불을 보면 알려요' },
      },
      notes: '불을 본 일을 자세히 묻지 않는다. 그림 속 장면으로만 이야기한다.',
    }),
    FIRE({
      id: 'saf-disaster.e12.fire-shout.intro.chant', type: 'intro', title: '"불이야!" 구호 따라 외치기',
      method: "'불이야' 구호 따라 외치기", tool: 'timer', minutes: 5,
      levels: { easy: '교사와 반 전체가 함께 구호를 한 번 크게 외친다.', base: '짝과 번갈아 한 사람이 "불이야!", 다른 사람이 "어른께!"를 외친다.', challenge: '구호를 외친 뒤 손으로 교실 문(나가는 쪽)을 가리킨다.' },
      intro: {
        teacher: '"불이야! (두 손 입에 모으기) 어른께! (손 들기) 몸 낮춰! (무릎 굽히기)" 시연 단추로 구호 카드가 차례대로 놓이는 모습을 보이고 반 전체가 동작과 함께 세 번 외친다. 작게 말하는 학생에게 "작은 소리는 옆 반에 들리지 않아요. 한 번 더 크게!"라고 말한다. "불을 보면 내가 끄면 돼요"라는 말이 나오면 "불은 어른과 소방관이 끄는 거예요. 나는 무엇을 할까요?"라고 되묻는다.',
        student: '선생님을 따라 "불이야! 어른께! 몸 낮춰!"를 크게 외쳐 보아요.',
        demo: { tool: 'timer', options: { title: '불이야 구호', cards: ['몸 낮춰', '불이야', '어른께'] }, sequence: [{ order: ['불이야', '어른께', '몸 낮춰'] }] },
        art: { draw: 'paper children cupping their hands around their mouths and shouting together, with bold paper speech bubbles and a red paper flame drawn far away', banner: '불이야! 어른께! 몸 낮춰!', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
      },
    }),
    FIRE({
      id: 'saf-disaster.e12.fire-shout.activity.tell-order', type: 'activity', title: '알리는 차례 카드 놓기',
      method: '알리는 차례 카드 3장 놓기', tool: 'timeline', minutes: 13,
      levels: { easy: '첫 카드("불이야" 외치기)가 놓여 있어 남은 2장만 놓고, 놓으면 바로 맞는지 알려 준다.', base: '카드 3장을 차례대로 놓는다.', challenge: '"숨어요" 같은 틀린 카드 1장을 빼고 3장을 놓은 뒤, 그 차례대로 동작으로 해 본다.' },
      activity: {
        title: '불을 봤을 때 알리는 차례', tool: 'timeline',
        teacher: '"불을 봤어요. 맨 먼저 무엇을 할까요?" 카드를 놓은 뒤 자리에서 일어나 차례대로 몸으로 해 본다(두 손 모아 외치기 → 손 들어 어른 부르기 → 무릎 굽혀 몸 낮추기). "물 떠 와서 꺼요"를 고르려는 학생에게 "불은 금방 커져요. 내가 물을 뜨는 동안 누가 알지 못할까요?"라고 묻는다. 내 힘으로 끄는 것이 아니라 알리고 나가는 것이 먼저라는 점을 짚는다.',
        task: '카드를 차례대로 놓아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          TL('부엌에 불이 났어요. 차례로 놓아요.', [{ id: 'shout', text: '불이야!' }, { id: 'tell', text: '어른께 알려요' }, { id: 'low', text: '몸 낮춰 나가요' }], { id: 'hide', text: '옷장에 숨어요' }, 0.15),
          TL('교실에 연기가 나요. 차례로 놓아요.', [{ id: 'yell', text: '불이야!' }, { id: 'teacher', text: '선생님께 말해요' }, { id: 'follow', text: '선생님 따라가요' }], { id: 'bag', text: '가방 챙겨요' }, 0.2),
          TL('복도에서 타는 냄새가 나요.', [{ id: 'call', text: '불이야!' }, { id: 'adult', text: '어른을 불러요' }, { id: 'out', text: '코 막고 나가요' }], { id: 'look', text: '가서 구경해요' }, 0.25, { conclude: '불을 보면 "불이야!" 외치고, 어른께 알리고, 몸 낮춰 나가요.' }),
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '불을 보면 "___!" 하고 외쳐요.', answer: '불이야' }] },
    }),
    FIRE({
      id: 'saf-disaster.e12.fire-shout.activity.drill-board', type: 'activity', title: '화재 대피 훈련 판',
      method: '화재 대피 훈련 판: 안전 점검과 순서 카드', tool: 'timer', minutes: 15,
      levels: { easy: '순서 카드 2장(코·입 가리기 → 몸 낮추기)을 맞추고, 훈련 뒤 점검 2개에 표시한다.', base: '순서 카드 3장을 맞추고 훈련한 뒤 점검 3개에 표시한다.', challenge: '순서 카드 3장, 훈련 뒤 점검 4개("뒤돌아 가지 않았어요" 더하기)에 표시한다.' },
      activity: {
        title: '대피 훈련 판', tool: 'timer',
        teacher: '"경보가 울리면 우리 반은 어떤 차례로 나갈까요?" 순서 카드를 맞춘 뒤 교사의 신호(손뼉 세 번)에 맞춰 소매로 코와 입을 가리고, 몸을 낮춰, 선생님 뒤를 따라 교실 문까지 걸어 본다. 실제 학교 화재 대피 훈련 날에는 이 판을 훈련 전후에 쓴다. "가방 가지고 가요"라는 학생에게 "가방을 챙기는 동안 연기는 어디까지 올까요?"라고 묻는다. 훈련 뒤 점검에서 표시하지 못한 칸은 다음 훈련 때 해 볼 일로 말해 준다.',
        task: '순서 카드를 맞추고 훈련한 뒤 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
        items: DRILL('불이 나면 하는 차례로 놓아요.', '화재 대피 차례', ['코·입 가려요', '몸 낮춰요', '선생님 따라가요'], '대피 훈련을 해 보았어요',
          ['코와 입을 가렸어요', '몸을 낮췄어요', '선생님을 따라갔어요'], '뒤돌아 가지 않았어요', 0.15, '신호에 맞춰 문까지 걸어요.', '불 훈련 뒤 해 본 것에 표시해요.'),
      },
      worksheet: { items: [{ type: 'choice', prompt: '불이 나서 나갈 때 무엇을 해요?', options: ['코와 입을 가려요', '가방을 챙겨요'], answer: '코와 입을 가려요' }] },
      notes: '학교 화재 대피 훈련(별표 1 참고5) 앞뒤에 쓰는 판이다. 실제 훈련이 없는 날은 교실 안에서 문까지만 걸어 본다. 수건을 적시는 실습은 하지 않고 소매로 가리는 흉내만 낸다.',
    }),
    FIRE({
      id: 'saf-disaster.e12.fire-shout.activity.cover-face', type: 'activity', title: '연기를 막을 곳 짚기',
      method: '몸 그림에서 가릴 곳 고르기', tool: 'body', minutes: 13,
      levels: { easy: '종이 몸에 이름이 보이고, 코 한 곳을 짚는다.', base: '이름 없이 코를 짚고, 코와 입을 무엇으로 가릴지 고른다.', challenge: '헷갈리는 곳(눈·귀·어깨)이 더 있는 몸에서 짚고, 몸을 낮출 때 굽히는 곳까지 고른 뒤 그 자세로 걸어 본다.' },
      activity: {
        title: '연기를 막으려고 가릴 곳', tool: 'body',
        teacher: '"연기는 내 몸 어디로 들어올까요?" 종이 몸을 짚기 전에 자기 코와 입을 손등으로 가려 보게 한다. "눈을 감으면 돼요"라는 학생에게 "눈을 감아도 숨은 쉬어요. 숨은 어디로 들어오나요?"라고 묻는다. 종이 몸에 입 칸이 없어 코를 짚고, 입은 학생이 자기 손으로 가리게 한다. 마지막에 소매로 코와 입을 가린 채 무릎을 굽혀 몸을 낮추고 교실 뒤까지 천천히 걸어 본다.',
        task: '연기를 막으려고 가릴 곳을 짚어요.', levels: { easy: { names: true }, base: {}, challenge: {} },
        items: [
          { prompt: '연기가 들어오는 곳을 짚어요.', toolOptions: { mode: 'parts', parts: ['눈', '귀', '코', '무릎', '발목'] }, target: { parts: ['코'] }, difficulty: 0.1,
            hints: ['숨을 쉴 때 바람이 들어오는 곳을 떠올려요.', '얼굴 가운데에 있어요.', '코를 골라요.'],
            levels: { challenge: { toolOptions: { parts: ['눈', '귀', '코', '목', '어깨', '무릎', '발목'] } } } },
          { prompt: '코와 입을 무엇으로 가려요?', toolOptions: { mode: 'parts', parts: ['코', '목', '무릎'], readOnly: true, ask: { q: '연기가 나요. 무엇으로 가려요?', choices: ['소매나 수건', '두 눈만', '귀만'] } }, target: { pick: 0 }, difficulty: 0.15 },
          { prompt: '몸을 낮출 때 굽히는 곳을 짚어요.', toolOptions: { mode: 'parts', parts: ['목', '허리', '무릎', '발목'] }, target: { parts: ['허리', '무릎'] }, difficulty: 0.2,
            hints: ['키를 작게 만들 때 접히는 곳을 떠올려요.', '두 군데예요. 하나는 몸 가운데, 하나는 다리에 있어요.', '허리와 무릎을 골라요.'],
            levels: { challenge: { toolOptions: { parts: ['목', '어깨', '팔꿈치', '허리', '무릎', '발목'] } } }, conclude: '연기가 나면 소매로 코와 입을 가리고, 허리와 무릎을 굽혀 몸을 낮춰요.' },
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '연기가 나면 어디를 가려요?', options: ['코와 입', '두 귀'], answer: '코와 입' }] },
      notes: '종이 몸에 입 칸이 없어 계획의 "코·입 고르기"를 코 짚기 + 가릴 것 고르기로 바꾸었다. 입은 학생이 자기 손으로 가린다.',
    }),
    FIRE({
      id: 'saf-disaster.e12.fire-shout.wrap.promise-story', type: 'wrap', title: '"불이야" 약속 이야기 채우기',
      method: '약속 장면 이어 말하기', tool: 'story', minutes: 7,
      levels: { easy: '교사가 빈 장면 하나를 함께 읽고 반 전체가 알맞은 카드를 말한다.', base: '빈 장면 두 곳에 알맞은 카드를 스스로 넣는다.', challenge: '빈 장면을 채운 뒤 이야기 끝을 내 말로 바꿔 짝에게 말한다.' },
      wrap: {
        teacher: '"도윤이가 부엌에서 연기를 봤어요. 도윤이는 무엇을 했을까요?" 빈 장면에 카드를 넣고 이야기를 처음부터 반 전체가 소리 내어 읽는다. 출구 2번에서 "옷장에 숨어요"를 고른 학생에게 "숨으면 어른이 찾지 못해요. 소리 내고 나가는 거예요"라고 말해 준다. 마지막에 "불이야! 어른께! 몸 낮춰!"를 다 같이 외친다.',
        exitTicket: [
          { type: 'tool', tool: 'story', options: { mode: 'fill', slots: [{ id: 'f1', who: '도윤', label: '"___!" 외쳤어요.' }, { id: 'f2', who: '도윤', label: '___ 알렸어요.' }], cards: ['불이야', '엄마께', '숨었어요', '장난감'] }, prompt: '도윤이 이야기를 채워요.', target: { fill: { f1: '불이야', f2: '엄마께' } }, difficulty: 0.15 },
          { type: 'choice', prompt: '불이 나면 어디로 가요?', options: ['옷장에 숨어요', '몸 낮춰 밖으로', '책상 밑에'], answer: 1, difficulty: 0.1, explain: '숨지 않고 몸을 낮춰 밖으로 나가요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '불이야! 어른께! 몸 낮춰!',
        items: [
          { type: 'blank', prompt: '구호를 따라 써요.', text: '불이야! 어른께! 몸 ___!', answer: '낮춰' },
          { type: 'draw', prompt: '"불이야!" 외치는 내 모습을 그려요.' },
        ],
        easy: { note: '"불이야, 어른께"를 떠올려요.', items: [{ type: 'draw', prompt: '어른을 부르는 내 모습을 그려요.' }] },
      },
    }),
    FIRE({
      id: 'saf-disaster.e12.fire-shout.wrap.self-check', type: 'wrap', title: '오늘 해 본 대피 스스로 점검',
      method: '오늘 해 본 일 스스로 점검', tool: 'kitchen', minutes: 7,
      levels: { easy: '교사가 점검 칸 두 개를 하나씩 읽어 주고 함께 표시한다.', base: '점검 칸 세 개를 스스로 읽고 해 본 것에 표시한다.', challenge: '표시한 뒤 짝이 훈련에서 잘한 일 하나를 말해 준다.' },
      wrap: {
        teacher: '"오늘 훈련에서 내가 해 본 것은 무엇인가요?" 점검 칸을 소리 내어 읽고 해 본 것에만 표시하게 한다. 못 한 칸이 있는 학생에게 "다음 훈련 때 해 볼 일이 생긴 거예요"라고 말해 준다. 출구 2번에서 "가방 챙겨요"를 고른 학생에게 물건은 다시 살 수 있지만 나는 하나뿐이라고 짚어 준다.',
        exitTicket: [
          CHECK('오늘 해 본 일', [{ id: 'shout', text: '불이야 외쳤어요' }, { id: 'low', text: '몸 낮췄어요' }, { id: 'cover', text: '코와 입을 가렸어요' }]),
          { type: 'choice', prompt: '불이 나면 무엇을 두고 가요?', options: ['내 물건', '내 몸', '선생님'], answer: 0, difficulty: 0.1, explain: '물건은 두고, 나는 선생님을 따라 나가요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '화재 대피 스스로 점검',
        items: [
          { type: 'check', prompt: '오늘 해 본 것에 ✓ 해요.', options: ['"불이야!" 외쳤어요', '몸을 낮췄어요', '코와 입을 가렸어요'] },
          { type: 'table', prompt: '좋으면 ○, 안 되면 ×를 써요.', columns: ['행동', '○ / ×'], cells: [['장난감 챙기기', ''], ['선생님 따라가기', ''], ['옷장에 숨기', '']], answer: '×, ○, ×' },
        ],
        easy: { note: '해 본 것만 표시해요.', items: [{ type: 'check', prompt: '해 본 것에 ✓ 해요.', options: ['"불이야!" 외쳤어요', '몸을 낮췄어요'] }] },
      },
    }),
  ];

  // =====================================================================================================
  // 1학년 · 땅이 흔들리면 머리 감싸고 책상 아래로
  const QC = MOD('saf-disaster.e12.quake-cover', [1]);
  const CLASS = [{ name: '책상 아래', icon: 'dot', at: [1, 1] }, { name: '창가', icon: 'dot', at: [3, 0] }, { name: '책장 옆', icon: 'dot', at: [0, 2] }, { name: '교실 문', icon: 'dot', at: [0, 0] }];
  const CLASS_MORE = [{ name: '칠판 앞', icon: 'dot', at: [1, 0] }, { name: '어항 옆', icon: 'dot', at: [3, 2] }];
  const T_QC = [
    QC({
      id: 'saf-disaster.e12.quake-cover.intro.shake-scene', type: 'intro', title: '흔들리는 교실에서 안전한 곳',
      method: '흔들리는 교실 그림에서 안전한 곳 고르기', tool: 'emotion', minutes: 6,
      levels: { easy: '교사가 보기 2개(창가·책상 아래)만 읽어 주고 고르게 한다.', base: '보기 3개(창가·책상 아래·문 앞) 가운데 고른다.', challenge: '고른 뒤 그곳이 왜 좋은지 "머리"라는 낱말을 넣어 말한다.' },
      intro: {
        teacher: '"교실이 흔들흔들해요. 어디로 가면 내 몸을 지킬 수 있을까요?" 책상을 두드려 흔들리는 소리를 내고 두세 명의 대답을 들은 뒤(기다릴 반응: "책상 밑이요", "밖으로요") 시연 단추로 책상 아래만 바구니에 담기는 모습을 보여 준다. "밖으로 뛰어가요"라는 말이 나오면 "흔들리는 동안 뛰면 넘어지거나 떨어지는 것에 맞을 수 있어요. 어디서 기다릴까요?"라고 되묻는다. 오늘은 흔들릴 때 책상 아래에서 머리를 지키는 법을 배운다고 밝힌다.',
        student: '흔들릴 때 들어갈 곳을 손으로 가리켜 보아요.',
        demo: { tool: 'emotion', options: { mode: 'pick', basket: '여기 안전해요', cards: [{ id: 'desk', text: '책상 아래' }, { id: 'window', text: '창가' }, { id: 'door', text: '문 앞' }, { id: 'shelf', text: '책장 옆' }], shuffle: false }, sequence: [{ pick: ['desk'] }] },
        art: { draw: 'a paper classroom drawn with wobbly lines as if shaking, paper children crouching under sturdy paper desks, a window and a tall bookshelf on the far side', banner: '흔들리면 책상 아래로', extra: [{ motif: 'wind', x: 300, y: 96 }] },
      },
      notes: '지진을 겪은 일을 묻지 않는다. 무서워하는 학생에게는 "몸을 지키는 방법을 아는 것"이라고 말해 준다.',
    }),
    QC({
      id: 'saf-disaster.e12.quake-cover.intro.bear-story', type: 'intro', title: '아기 곰 지진 이야기',
      method: '아기 곰 지진 이야기 듣기', tool: 'story', minutes: 5,
      levels: { easy: '교사가 그림 2장(식탁 아래·창가)을 들어 보이고 곰이 간 곳을 고르게 한다.', base: '그림 3장 가운데 곰이 간 곳을 고른다.', challenge: '고른 뒤 아기 곰에게 해 줄 말 한마디를 짝에게 말한다.' },
      intro: {
        teacher: '"아기 곰이 집에서 블록을 쌓는데 집이 흔들흔들했어요. 아기 곰은 얼른 식탁 아래로 들어가 두 손으로 머리를 감쌌어요. 흔들림이 멈출 때까지 꼭 기다렸지요." 이야기를 들려준 뒤 시연 단추로 곰이 간 곳 카드가 담기는 모습을 보인다. "곰이 창문으로 밖을 봤어요"라는 말이 나오면 "흔들릴 때 창문 유리가 깨지면 어떻게 될까요?"라고 되묻는다.',
        student: '아기 곰은 어디로 갔을까요? 그림을 보고 손으로 가리켜 보아요.',
        demo: { tool: 'story', options: { mode: 'pick', basket: '곰이 간 곳', cards: [{ id: 'table', text: '식탁 아래', motif: 'house' }, { id: 'win', text: '창문 앞' }, { id: 'run', text: '현관 밖' }], shuffle: false }, sequence: [{ pick: ['table'] }] },
        art: { draw: 'a small paper bear cub crouching under a paper kitchen table, both paws covering its head, toy blocks scattered on the floor', banner: '아기 곰은 식탁 아래로' },
      },
    }),
    QC({
      id: 'saf-disaster.e12.quake-cover.activity.protect-head', type: 'activity', title: '흔들릴 때 지킬 곳 짚기',
      method: '몸 그림에서 지킬 곳 고르기', tool: 'body', minutes: 13,
      levels: { easy: '종이 몸에 이름이 보이고, 목 한 곳을 짚은 뒤 두 손으로 머리를 감쌀지 고른다.', base: '이름 없이 목을 짚고, 무엇을 감쌀지 고르고, 책상 아래 들어갈 때 바닥에 대는 곳을 짚는다.', challenge: '헷갈리는 곳이 더 있는 몸에서 짚고, 두 손으로 머리를 감싼 채 책상 다리를 잡는 동작까지 해 본다.' },
      activity: {
        title: '흔들릴 때 꼭 지킬 곳', tool: 'body',
        teacher: '"흔들릴 때 위에서 무엇이 떨어지면 내 몸 어디가 가장 위험할까요?" 종이 몸에는 머리 칸이 없어 목을 짚고, 머리는 학생이 자기 두 손으로 감싸 보게 한다. "팔로 얼굴만 가리면 돼요"라는 학생에게 "머리 뒤와 목도 다치면 안 돼요. 손을 어디에 둘까요?"라고 묻는다. 마지막에 실제로 책상 아래에 들어가 한 손으로 머리를 감싸고 다른 손으로 책상 다리를 잡아 보게 한다.',
        task: '흔들릴 때 지킬 곳을 짚어요.', levels: { easy: { names: true }, base: {}, challenge: {} },
        items: [
          { prompt: '머리 아래 꼭 감쌀 곳을 짚어요.', toolOptions: { mode: 'parts', parts: ['목', '팔꿈치', '무릎', '발목'] }, target: { parts: ['목'] }, difficulty: 0.1,
            hints: ['머리와 몸을 이어 주는 곳을 떠올려요.', '어깨 바로 위에 있어요.', '목을 골라요.'],
            levels: { challenge: { toolOptions: { parts: ['귀', '목', '어깨', '팔꿈치', '허리', '무릎', '발목'] } } } },
          { prompt: '두 손으로 무엇을 감싸요?', toolOptions: { mode: 'parts', parts: ['목', '어깨', '무릎'], readOnly: true, ask: { q: '흔들려요. 두 손으로 무엇을 감싸요?', choices: ['머리와 목', '두 발목', '무릎만'] } }, target: { pick: 0 }, difficulty: 0.15 },
          { prompt: '책상 아래서 바닥에 대는 곳을 짚어요.', toolOptions: { mode: 'parts', parts: ['목', '어깨', '무릎', '발목'] }, target: { parts: ['무릎'] }, difficulty: 0.2,
            hints: ['책상 아래에서 몸을 작게 웅크린 모습을 떠올려요.', '다리 가운데에 있어요.', '무릎을 골라요.'],
            levels: { challenge: { toolOptions: { parts: ['목', '어깨', '허리', '허벅지', '무릎', '발목'] } } }, conclude: '흔들리면 책상 아래에 무릎 꿇고 앉아 두 손으로 머리와 목을 감싸요.' },
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '흔들릴 때 두 손으로 감쌀 곳에 ○ 해요.', options: ['머리와 목', '발목'], answer: '머리와 목' }] },
      notes: '종이 몸에 머리 칸이 없어 계획의 "머리·목 고르기"를 목 짚기 + "머리와 목" 고르기로 바꾸었다. 머리는 학생이 자기 손으로 감싼다.',
    }),
    QC({
      id: 'saf-disaster.e12.quake-cover.activity.drill-board', type: 'activity', title: '지진 대피 훈련 판',
      method: '지진 대피 훈련 판: 순서 카드와 점검', tool: 'timer', minutes: 15,
      levels: { easy: '순서 카드 2장(책상 아래로 → 머리 감싸기)을 맞추고, 훈련 뒤 점검 2개에 표시한다.', base: '순서 카드 3장을 맞추고 신호에 맞춰 훈련한 뒤 점검 3개에 표시한다.', challenge: '순서 카드 3장, 훈련 뒤 점검 4개("창가에서 떨어졌어요" 더하기)에 표시한다.' },
      activity: {
        title: '지진 훈련 판', tool: 'timer',
        teacher: '"선생님이 \'흔들려요!\' 하면 우리는 어떤 차례로 할까요?" 순서 카드를 맞춘 뒤 교사가 "흔들려요!" 신호를 하면 책상 아래로 들어가 머리를 감싸고 책상 다리를 잡고, "멈췄어요!" 신호까지 기다린다. 신호 전에 일어나는 학생에게 "흔들림이 다 멈췄는지 선생님 말을 기다려요"라고 말한다. 실제 학교 지진 대피 훈련 날에는 이 판을 훈련 전후에 쓴다. 훈련 뒤 점검은 해 본 것만 표시하게 한다.',
        task: '순서 카드를 맞추고 훈련한 뒤 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
        items: DRILL('흔들릴 때 하는 차례로 놓아요.', '지진 대피 차례', ['책상 아래로', '머리 감싸요', '다리 잡아요'], '지진 훈련을 해 보았어요',
          ['책상 아래로 갔어요', '머리를 감쌌어요', '멈출 때까지 기다렸어요'], '창가에서 떨어졌어요', 0.15, '신호에 맞춰 책상 아래로 가요.', '지진 훈련 뒤 해 본 것에 표시해요.'),
      },
      worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '흔들리면 ___ 아래로 들어가요.', answer: '책상' }] },
      notes: '학교 지진 대피 훈련(별표 1 참고5) 앞뒤에 쓰는 판이다. 흔들림이 멈춘 뒤 운동장으로 나가는 차례는 2학년 quake-out 에서 다룬다.',
    }),
    QC({
      id: 'saf-disaster.e12.quake-cover.activity.class-map', type: 'activity', title: '교실 지도에 안전한 곳 꽂기',
      method: '교실 칸 지도에 안전한 곳 핀 꽂기', tool: 'map', minutes: 13,
      levels: { easy: '핀을 놓으면 그 칸의 이름이 바로 보인다.', base: '네 곳(책상 아래·창가·책장 옆·교실 문)이 있는 지도에서 알맞은 곳에 꽂는다.', challenge: '칠판 앞·어항 옆까지 여섯 곳이 있는 지도에서 꽂고, 위험한 곳은 왜 위험한지 짝에게 한마디 한다.' },
      activity: {
        title: '우리 교실 지도에서 안전한 곳·위험한 곳', tool: 'map',
        teacher: '"흔들릴 때 우리 교실에서 몸을 지킬 곳은 어디일까요? 멀리할 곳은 어디일까요?" 핀을 꽂기 전에 실제 교실의 그 자리를 손으로 가리키게 한다. 책장 옆을 "책 읽는 곳이라 좋아요"라고 하는 학생에게 "흔들리면 책장 위의 책이 어디로 떨어질까요?"라고 묻는다. 창가와 책장은 멀리하고 책상 아래로 간다는 점을 짚는다.',
        task: '물음에 맞는 곳에 핀을 꽂아요.', levels: { easy: { readout: true }, base: {}, challenge: {} },
        items: [
          PIN('흔들릴 때 들어갈 곳에 꽂아요.', CLASS, CLASS_MORE, '책상 아래', 0.1),
          PIN('유리가 깨질 수 있는 곳에 꽂아요.', CLASS, CLASS_MORE, '창가', 0.15),
          PIN('물건이 떨어질 수 있는 곳에 꽂아요.', CLASS, CLASS_MORE, '책장 옆', 0.2, { conclude: '흔들리면 창가와 책장에서 떨어져 책상 아래로 가요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '흔들릴 때 멀리할 곳에 ○ 해요.', options: ['창가', '책상 아래'], answer: '창가' }] },
    }),
    QC({
      id: 'saf-disaster.e12.quake-cover.wrap.self-check', type: 'wrap', title: '지진 훈련 뒤 스스로 점검',
      method: '훈련 뒤 스스로 점검', tool: 'kitchen', minutes: 7,
      levels: { easy: '교사가 점검 칸 두 개를 하나씩 읽어 주고 함께 표시한다.', base: '점검 칸 세 개를 스스로 읽고 해 본 것에 표시한다.', challenge: '표시한 뒤 다음 훈련에서 더 잘할 일 하나를 짝에게 말한다.' },
      wrap: {
        teacher: '"오늘 훈련에서 나는 무엇을 해 보았나요?" 점검 칸을 함께 읽고 해 본 것에만 표시하게 한다. 출구 2번에서 "밖으로 뛰어요"를 고른 학생에게 "흔들리는 동안에는 책상 아래에서 기다려요. 멈추면 선생님과 함께 나가요"라고 말해 준다. 다음 훈련에서 더 잘할 일을 한 명씩 말하며 마친다.',
        exitTicket: [
          CHECK('지진 훈련 점검', [{ id: 'desk', text: '책상 아래로 갔어요' }, { id: 'head', text: '머리를 감쌌어요' }, { id: 'wait', text: '기다렸어요' }]),
          { type: 'choice', prompt: '흔들리는 동안 어떻게 해요?', options: ['밖으로 뛰어요', '책상 아래서 기다려요', '창밖을 봐요'], answer: 1, difficulty: 0.1, explain: '흔들림이 멈출 때까지 책상 아래에서 기다려요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '지진 훈련 스스로 점검',
        items: [
          { type: 'check', prompt: '오늘 해 본 것에 ✓ 해요.', options: ['책상 아래로 갔어요', '머리를 감쌌어요', '멈출 때까지 기다렸어요'] },
          { type: 'draw', prompt: '책상 아래에서 머리를 감싼 내 모습을 그려요.' },
        ],
        easy: { note: '해 본 것만 표시해요.', items: [{ type: 'draw', prompt: '책상 아래에 들어간 내 모습을 그려요.' }] },
      },
    }),
    QC({
      id: 'saf-disaster.e12.quake-cover.wrap.word-web', type: 'wrap', title: '"흔들려요" 낱말 모으기',
      method: '흔들릴 때 말 세 가지 모으기', tool: 'mindmap', minutes: 7,
      levels: { easy: '교사가 카드를 하나씩 읽어 주고 낱말 두 개(책상 아래·머리)를 함께 고른다.', base: '낱말 세 개(책상 아래·머리·기다려요)를 스스로 골라 붙이고 함께 읽는다.', challenge: '붙인 낱말로 우리 반 구호를 만들어 외친다.' },
      wrap: {
        teacher: '"흔들릴 때 꼭 기억할 말 세 가지를 모아 볼까요?" 가운데 \'흔들려요\'에 낱말을 붙인 뒤 반 전체가 "책상 아래! 머리! 기다려요!"를 읽는다. "뛰어요"를 붙이려는 학생에게 "흔들리는 동안 뛰면 넘어져요. 무엇을 할까요?"라고 묻는다. 도전하는 학생이 만든 구호를 한 번 함께 외치며 마친다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'pick', topic: '흔들려요', basket: '흔들려요', cards: ['책상 아래', '뛰어요', '머리', '창가', '기다려요'] }, prompt: '흔들릴 때 말을 모아요.', target: { pick: ['책상 아래', '머리', '기다려요'] }, difficulty: 0.15 },
          { type: 'choice', prompt: '흔들릴 때 멀리할 곳은요?', options: ['책상 아래', '창가', '교실 가운데'], answer: 1, difficulty: 0.1, explain: '창문 유리가 깨질 수 있어 창가는 멀리해요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '책상 아래! 머리! 기다려요!',
        items: [
          { type: 'blank', prompt: '구호를 따라 써요.', text: '책상 아래! 머리! ___!', answer: '기다려요' },
          { type: 'table', prompt: '좋으면 ○, 안 되면 ×를 써요.', columns: ['행동', '○ / ×'], cells: [['창가에 서기', ''], ['머리 감싸기', ''], ['뛰어나가기', '']], answer: '×, ○, ×' },
        ],
      },
    }),
  ];

  // =====================================================================================================
  // 1학년 · 뜨거운 것에 데었을 때 어른 부르기
  const HOT = MOD('saf-disaster.e12.hot-touch', [1]);
  const T_HOT = [
    HOT({
      id: 'saf-disaster.e12.hot-touch.intro.hot-things', type: 'intro', title: '뜨거운 물건 그림 고르기',
      method: '뜨거운 물건 그림 고르기', tool: 'emotion', minutes: 6,
      levels: { easy: '교사가 두 물건(다리미·그림책)만 읽어 주고 뜨거운 것을 고르게 한다.', base: '물건 네 개 이상 가운데 뜨거운 것을 모두 고른다.', challenge: '고른 물건마다 왜 뜨거운지("불 위에 있어서", "전기로 데워서") 짧게 말한다.' },
      intro: {
        teacher: '"우리 집에서 만지면 앗 뜨거운 물건은 무엇일까요?" 두세 명의 대답을 듣고(기다릴 반응: "냄비요", "다리미요") 시연 단추로 뜨거운 물건만 바구니에 담기는 모습을 보여 준다. "꺼져 있으면 안 뜨거워요"라는 말이 나오면 "방금 끈 다리미는 바로 식을까요?"라고 되묻는다. 오늘은 뜨거운 것을 알아보고, 데었을 때 할 일을 배운다고 밝힌다.',
        student: '집에서 본 뜨거운 물건을 하나 떠올려 짝에게 말해 보아요.',
        demo: { tool: 'emotion', options: { mode: 'pick', basket: '앗 뜨거워요', cards: [{ id: 'iron', text: '다리미' }, { id: 'book', text: '그림책' }, { id: 'stove', text: '난로' }, { id: 'doll', text: '인형' }, { id: 'pot', text: '끓는 냄비' }, { id: 'cup', text: '물컵' }], shuffle: false }, sequence: [{ pick: ['iron', 'stove', 'pot'] }] },
        art: { draw: 'a paper living room and kitchen with a steaming paper pot, a paper iron and a small heater glowing orange, a paper child keeping a step away', banner: '앗, 뜨거워요' },
      },
      notes: '데어 본 일을 묻지 않는다. 그림 속 물건으로만 이야기한다.',
    }),
    HOT({
      id: 'saf-disaster.e12.hot-touch.intro.pick-hot', type: 'intro', title: '부엌에서 만지면 안 될 것',
      method: '부엌 카드에서 만지면 안 될 것 고르기', tool: 'kitchen', minutes: 5,
      levels: { easy: '교사가 카드 3장(끓는 국·사과·우유)을 읽어 주고 함께 고른다.', base: '카드 5장 가운데 만지면 안 될 뜨거운 것을 고른다.', challenge: '고른 뒤 어른만 쓰는 부엌 물건 이름을 하나 더 말한다.' },
      intro: {
        teacher: '"부엌 카드 가운데 내가 만지면 안 되는 뜨거운 것은 무엇일까요?" 시연 단추로 뜨거운 것만 바구니에 담기는 모습을 보이고, 카드마다 반 전체가 "만져요?" "안 돼요!"를 주고받는다. "사과도 뜨거워요?"라는 물음에는 "불 위에 있지 않으면 뜨겁지 않아요. 무엇이 다를까요?"라고 되묻는다.',
        student: '부엌에서 만지면 안 되는 뜨거운 것을 하나 말해 보아요.',
        demo: { tool: 'kitchen', options: { mode: 'pick', basket: '만지지 않아요', cards: ['끓는 국', '사과', '프라이팬', '우유', '전기포트'], shuffle: false }, sequence: [{ pick: ['끓는 국', '프라이팬', '전기포트'] }] },
        art: { draw: 'a paper kitchen counter with a steaming paper soup pot, a frying pan and an electric kettle on one side, an apple and a milk carton on the other', banner: '뜨거운 건 어른이 써요', extra: [{ motif: 'pot', x: 300, y: 96 }] },
      },
    }),
    HOT({
      id: 'saf-disaster.e12.hot-touch.activity.cool-order', type: 'activity', title: '데었을 때 할 일 차례',
      method: '데었을 때 차례 3장 놓기', tool: 'timeline', minutes: 10,
      levels: { easy: '첫 카드("떨어져요")가 놓여 있어 남은 2장만 놓고, 놓으면 바로 맞는지 알려 준다.', base: '카드 3장을 차례대로 놓는다.', challenge: '"참고 숨겨요" 같은 틀린 카드 1장을 빼고 놓은 뒤, 그 차례를 동작으로 해 본다.' },
      activity: {
        title: '앗 뜨거! 할 일 차례', tool: 'timeline',
        teacher: '"앗 뜨거! 맨 먼저 무엇을 할까요?" 카드를 놓은 뒤 차례대로 몸으로 해 본다(손 떼고 한 걸음 물러나기 → 수도꼭지 아래 손 대는 흉내 → 손 들고 "선생님!"). "아파도 참아요"를 고르려는 학생에게 "참으면 어른이 내가 다친 걸 알 수 있을까요?"라고 묻는다. 데인 곳은 그냥 두지 않고 흐르는 찬물에 대고 어른께 알린다는 점을 짚는다.',
        task: '카드를 차례대로 놓아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          TL('냄비에 손이 닿았어요. 차례로 놓아요.', [{ id: 'away', text: '떨어져요' }, { id: 'water', text: '찬물에 대요' }, { id: 'call', text: '어른 불러요' }], { id: 'hide', text: '참고 숨겨요' }, 0.15),
          TL('뜨거운 물이 쏟아졌어요.', [{ id: 'step', text: '물러나요' }, { id: 'tap', text: '흐르는 찬물' }, { id: 'help', text: '"도와주세요!"' }], { id: 'rub', text: '문질러요' }, 0.2),
          TL('다리미에 팔이 닿았어요.', [{ id: 'off', text: '팔을 떼요' }, { id: 'cool', text: '찬물로 식혀요' }, { id: 'tell', text: '어른께 말해요' }], { id: 'wait', text: '그냥 둬요' }, 0.25, { conclude: '데면 떨어지고, 흐르는 찬물에 대고, 어른을 불러요.' }),
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '데면 흐르는 ___에 대요.', answer: '찬물' }] },
      notes: '찬물에 대는 시간 길이는 근거 파일에 없어 적지 않았다. 얼음·연고 등은 다루지 않고 "어른께 알리기"로 맺는다.',
    }),
    HOT({
      id: 'saf-disaster.e12.hot-touch.activity.role-play', type: 'activity', title: '"앗 뜨거" 역할놀이',
      method: "'앗 뜨거' 역할놀이", tool: 'timer', minutes: 8,
      levels: { easy: '대사 카드 2장의 차례를 맞추고, 교사가 대사를 불러 주면 짝과 따라 한다.', base: '대사 카드 3장의 차례를 맞추고 짝끼리 대사를 말하며 역할놀이를 한다.', challenge: '대사 카드 3장을 맞춘 뒤 역할을 바꿔, 데인 친구 대사 4장의 차례까지 맞추고 한 번 더 해 본다.' },
      activity: {
        title: '도와주는 친구가 되어 보기', tool: 'timer',
        teacher: '"짝이 \'앗 뜨거!\' 했어요. 도와주는 친구는 무엇이라고 말할까요?" 대사 카드를 맞춘 뒤 한 명은 데인 친구, 한 명은 도와주는 친구가 되어 자리에서 해 본다. 도와주는 친구가 혼자 해결하려 하면 "어른을 부르는 것까지가 도와주는 거예요"라고 말해 준다. 역할을 바꿔 한 번 더 하고, 데인 친구도 "도와주세요!"를 크게 말하게 한다.',
        task: '대사 카드를 차례대로 놓고 짝과 해 봐요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          { prompt: '도와주는 친구 말을 차례로 놓아요.', toolOptions: { title: '도와주는 친구', cards: ['선생님!', '괜찮아?', '찬물로 가자'] }, target: { order: ['괜찮아?', '찬물로 가자', '선생님!'] }, difficulty: 0.1,
            levels: { easy: { prompt: '도와주는 친구 말을 놓아요(2장).', toolOptions: { cards: ['선생님!', '괜찮아?'] }, target: { order: ['괜찮아?', '선생님!'] } } } },
          { prompt: '짝과 역할놀이를 해요.', free: true, toolOptions: { doneLabel: '짝과 역할놀이를 해 보았어요' }, difficulty: 0.1 },
          { prompt: '데인 친구 말을 차례로 놓아요.', toolOptions: { title: '데인 친구', cards: ['도와주세요!', '앗 뜨거!', '손 떼요'] }, target: { order: ['앗 뜨거!', '손 떼요', '도와주세요!'] }, difficulty: 0.15,
            levels: { easy: { prompt: '데인 친구 말을 놓아요(2장).', toolOptions: { cards: ['도와주세요!', '앗 뜨거!'] }, target: { order: ['앗 뜨거!', '도와주세요!'] } },
              challenge: { prompt: '데인 친구 말을 놓아요(4장).', toolOptions: { cards: ['도와주세요!', '찬물에 대요', '앗 뜨거!', '손 떼요'] }, target: { order: ['앗 뜨거!', '손 떼요', '찬물에 대요', '도와주세요!'] } } },
            conclude: '데인 친구도 도와주는 친구도 꼭 어른을 불러요.' },
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '짝이 데었어요. 무엇을 해요?', options: ['어른을 불러요', '못 본 척해요'], answer: '어른을 불러요' }] },
    }),
    HOT({
      id: 'saf-disaster.e12.hot-touch.wrap.call-words', type: 'wrap', title: '어른 부르는 말 모으기',
      method: '어른 부르는 말 모으기', tool: 'mindmap', minutes: 7,
      levels: { easy: '교사가 카드를 읽어 주고 부를 어른 한 명과 부르는 말 하나를 함께 붙인다.', base: '부를 어른 두 명과 부르는 말 하나를 스스로 나누어 붙인다.', challenge: '붙인 뒤 내가 쓸 말을 소리 내어 크게 말해 본다.' },
      wrap: {
        teacher: '"앗 뜨거! 했을 때 누구를 부를까요? 무엇이라고 말할까요?" 가운데 \'앗 뜨거\'에 부를 어른과 부르는 말을 나누어 붙이고, 반 전체가 "선생님, 도와주세요!"를 말해 본다. "참아요"를 붙이려는 학생에게 "말해야 어른이 찬물로 도와줄 수 있어요"라고 말해 준다. 집에서는 엄마·아빠·할머니처럼 곁에 있는 어른을 부른다고 짚는다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'sort', topic: '앗 뜨거', slots: [{ id: 'who', label: '부를 어른' }, { id: 'say', label: '부르는 말' }], cards: ['선생님', '참아요', '엄마', '도와주세요', '숨겨요'] }, prompt: '부를 어른과 말을 나누어요.', target: { sort: { who: ['선생님', '엄마'], say: ['도와주세요'] } }, difficulty: 0.15 },
          { type: 'choice', prompt: '데었을 때 어떻게 해요?', options: ['참고 숨겨요', '어른을 불러요', '그냥 놀아요'], answer: 1, difficulty: 0.1, explain: '데면 참지 말고 어른을 불러요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '앗 뜨거! 도와주세요!',
        items: [
          { type: 'blank', prompt: '부르는 말을 따라 써요.', text: '선생님, ___!', answer: '도와주세요' },
          { type: 'draw', prompt: '어른을 부르는 내 모습을 그려요.' },
        ],
      },
    }),
    HOT({
      id: 'saf-disaster.e12.hot-touch.wrap.promise-poster', type: 'wrap', title: '뜨거운 것 약속 판 꾸미기',
      method: '뜨거운 것 약속 그림 붙이기', tool: 'collage', minutes: 7,
      levels: { easy: '교사와 함께 빨강 세모 "조심" 조각 2개를 붙인다.', base: '빨강 세모 2개에 검정 반원 "냄비" 조각까지 4개 이상 붙인다.', challenge: '붙인 뒤 "뜨거운 것은 만지지 않아요" 약속 한 줄을 교사와 함께 활동지에 쓴다.' },
      wrap: {
        teacher: '"뜨거운 것은 만지지 않아요. 우리 반 약속 판을 꾸며 볼까요?" 판의 빨강 세모는 \'조심\' 표시, 검정 반원은 냄비라고 정하고 붙인 뒤, 활동지 약속 판에는 뜨거운 물건을 직접 그려 반 게시판에 건다. 조각을 아무렇게나 붙이는 학생에게 "이 세모는 무엇 옆에 붙이면 조심하라는 뜻이 될까요?"라고 묻는다.',
        exitTicket: [
          { type: 'tool', tool: 'collage', options: { shapes: ['triangle', 'semi', 'circle', 'heart'], colors: ['빨강', '검정', '노랑', '파랑'], sizes: ['m', 'l'] }, prompt: '빨강 세모 조심 표시를 붙여요.', target: { has: [{ shape: 'triangle', color: '빨강', min: 2 }] }, difficulty: 0.1 },
          { type: 'choice', prompt: '방금 끈 다리미는요?', options: ['만져도 돼요', '아직 뜨거워요', '장난감이에요'], answer: 1, difficulty: 0.1, explain: '방금 끈 다리미도 뜨거워요. 만지지 않아요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '뜨거운 것은 만지지 않아요',
        items: [
          { type: 'draw', prompt: '약속 판에 뜨거운 물건을 그려요.' },
          { type: 'table', prompt: '만지면 ×, 만져도 되면 ○를 써요.', columns: ['물건', '○ / ×'], cells: [['끓는 냄비', ''], ['그림책', ''], ['켜진 난로', '']], answer: '×, ○, ×' },
        ],
        easy: { note: '"뜨거워, 만지지 않아요"를 떠올려요.', items: [{ type: 'draw', prompt: '뜨거운 물건 하나를 그려요.' }] },
      },
      notes: '콜라주 판은 물건 그림을 그리지 못해 빨강 세모 = 조심 표시, 검정 반원 = 냄비로 정해 붙인다. 물건 그림은 활동지에 직접 그린다.',
    }),
  ];

  // =====================================================================================================
  // 1학년 · 비·바람 센 날 지킬 일
  const RAIN = MOD('saf-disaster.e12.rain-wind', [1]);
  const ROAD = [{ name: '냇가', icon: 'dot', at: [0, 0] }, { name: '간판 옆', icon: 'dot', at: [3, 0] }, { name: '물웅덩이', icon: 'dot', at: [0, 2] }, { name: '넓은 인도', icon: 'dot', at: [2, 1] }];
  const ROAD_MORE = [{ name: '학교 정문', icon: 'school', at: [3, 2] }, { name: '다리 위', icon: 'bridge', at: [1, 0] }];
  const T_RAIN = [
    RAIN({
      id: 'saf-disaster.e12.rain-wind.intro.weather-story', type: 'intro', title: '비바람 소리 듣고 날씨 고르기',
      method: '비바람 소리 듣고 장면 고르기', tool: 'story', minutes: 6,
      levels: { easy: '교사가 장면 2장(비바람 부는 날·맑은 날)만 보이고 고르게 한다.', base: '장면 3장 가운데 소리에 맞는 날씨를 고른다.', challenge: '고른 뒤 그날 입을 옷을 하나 말한다.' },
      intro: {
        teacher: '"눈을 감고 들어 보세요. 쏴아아, 휘이잉!" 입으로 비바람 소리를 낸 뒤 "어떤 날일까요?"라고 묻는다. 시연 단추로 비바람 장면이 담기는 모습을 보이고, "비 오는 날은 물놀이 하기 좋아요"라는 말이 나오면 "비가 많이 오면 냇물이 어떻게 될까요?"라고 되묻는다. 오늘은 비와 바람이 센 날 지킬 일을 배운다고 밝힌다.',
        student: '쏴아아, 휘이잉! 어떤 날씨인지 손을 들어 말해 보아요.',
        demo: { tool: 'story', options: { mode: 'pick', basket: '오늘 날씨', cards: [{ id: 'storm', text: '비바람 부는 날' }, { id: 'sun', text: '맑은 날' }, { id: 'snow', text: '눈 오는 날' }], shuffle: false }, sequence: [{ pick: ['storm'] }] },
        art: { draw: 'paper rain lines slanting across a paper street, a paper tree bending in the wind and a child in a raincoat holding a parent\'s hand', banner: '쏴아아, 휘이잉!' },
      },
    }),
    RAIN({
      id: 'saf-disaster.e12.rain-wind.intro.weather-collage', type: 'intro', title: '센 비·센 바람 하늘 꾸미기',
      method: '센 비·센 바람 그림 조각 붙이기', tool: 'collage', minutes: 5,
      levels: { easy: '교사가 파랑 동그라미 빗방울 조각 2개를 붙이는 것을 보이고 함께 세어 본다.', base: '빗방울·나뭇잎(바람)·검정 반원(먹구름) 조각 4개로 오늘 같은 날씨를 꾸미는 시연을 본다.', challenge: '꾸민 하늘을 보고 그날 날씨를 한 낱말("비바람")로 말한다.' },
      intro: {
        teacher: '"비가 세게 오고 바람이 부는 하늘은 어떤 모습일까요?" 시연 단추로 파랑 동그라미(빗방울)와 초록 나뭇잎(바람에 날리는 잎), 검정 반원(먹구름)이 붙는 모습을 보여 준다. "바람은 안 보여요"라는 말이 나오면 "바람이 불면 나뭇잎이 어떻게 될까요?"라고 되묻는다. 오늘은 이런 날 어디를 피하고 누구와 다닐지 배운다고 밝힌다.',
        student: '센 비, 센 바람이 부는 날의 하늘을 떠올려 보아요.',
        demo: { tool: 'collage', options: { readOnly: true }, sequence: [{ has: [{ shape: 'circle', color: '파랑', size: 's', n: 3 }, { shape: 'leaf', color: '초록', n: 2 }, { shape: 'semi', color: '검정', n: 1 }] }] },
        art: { draw: 'a paper sky collage with dark paper clouds, blue paper raindrops and green paper leaves blowing sideways', banner: '센 비, 센 바람' },
      },
      notes: '콜라주 판은 날씨 그림을 그리지 못해 파랑 동그라미 = 빗방울, 초록 나뭇잎 = 바람, 검정 반원 = 먹구름으로 정해 보인다.',
    }),
    RAIN({
      id: 'saf-disaster.e12.rain-wind.activity.pack-check', type: 'activity', title: '비 오는 날 챙길 것 점검',
      method: '비 오는 날 챙길 것 점검', tool: 'kitchen', minutes: 10,
      levels: { easy: '항목 3개 가운데 챙길 것(또는 할 일) 2개에만 표시한다.', base: '항목 5개(부채·연처럼 함정 포함) 가운데 알맞은 것에만 표시한다.', challenge: '항목 6개에서 고르고, 바람 센 날 우산 대신 할 일(어른 손 잡기·건물 안 있기)도 고른다.' },
      activity: {
        title: '비바람 날 챙길 것·할 일 점검표', tool: 'kitchen',
        teacher: '"내일 비가 많이 온대요. 무엇을 챙기고 어떻게 다닐까요?" 항목을 하나씩 소리 내어 읽고 맞는 것에만 표시하게 한다. "연 날리기 좋아요"에 표시하는 학생에게 "바람이 아주 세면 연을 잡은 내가 어떻게 될까요?"라고 묻는다. 바람이 아주 센 날에는 우산이 뒤집힐 수 있어 어른 손을 잡고 건물 안에 있는 것이 먼저라는 점을 짚는다.',
        task: '알맞은 것에만 표시해요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          { prompt: '비 오는 날 챙길 것에 표시해요.', toolOptions: { mode: 'checklist', title: '챙길 것', items: [{ id: 'umb', text: '우산' }, { id: 'fan', text: '부채' }, { id: 'boot', text: '장화' }, { id: 'swim', text: '수영복' }, { id: 'coat', text: '비옷' }] }, target: { checklist: ['umb', 'boot', 'coat'] }, difficulty: 0.1,
            levels: { easy: { prompt: '챙길 것 2개에 표시해요.', toolOptions: { items: [{ id: 'umb', text: '우산' }, { id: 'fan', text: '부채' }, { id: 'coat', text: '비옷' }] }, target: { checklist: ['umb', 'coat'] } },
              challenge: { toolOptions: { items: [{ id: 'umb', text: '우산' }, { id: 'fan', text: '부채' }, { id: 'boot', text: '장화' }, { id: 'swim', text: '수영복' }, { id: 'coat', text: '비옷' }, { id: 'sun', text: '선글라스' }] } } } },
          { prompt: '비 오는 길에서 할 일에 표시해요.', toolOptions: { mode: 'checklist', title: '걸을 때', items: [{ id: 'slow', text: '천천히 걷기' }, { id: 'play', text: '물장난 하기' }, { id: 'avoid', text: '웅덩이 피하기' }, { id: 'run', text: '뛰어가기' }, { id: 'hand', text: '어른 손 잡기' }] }, target: { checklist: ['slow', 'avoid', 'hand'] }, difficulty: 0.15,
            levels: { easy: { prompt: '걸을 때 할 일 2개에 표시해요.', toolOptions: { items: [{ id: 'slow', text: '천천히 걷기' }, { id: 'play', text: '물장난 하기' }, { id: 'avoid', text: '웅덩이 피하기' }] }, target: { checklist: ['slow', 'avoid'] } },
              challenge: { toolOptions: { items: [{ id: 'slow', text: '천천히 걷기' }, { id: 'play', text: '물장난 하기' }, { id: 'avoid', text: '웅덩이 피하기' }, { id: 'run', text: '뛰어가기' }, { id: 'hand', text: '어른 손 잡기' }, { id: 'creek', text: '냇가 구경' }] } } } },
          { prompt: '바람 센 날 할 일에 표시해요.', toolOptions: { mode: 'checklist', title: '바람 센 날', items: [{ id: 'kite', text: '연 날리기' }, { id: 'in', text: '건물 안 있기' }, { id: 'sign', text: '간판 밑 서기' }, { id: 'hold', text: '어른 손 잡기' }, { id: 'tree', text: '나무 오르기' }] }, target: { checklist: ['in', 'hold'] }, difficulty: 0.2,
            levels: { easy: { toolOptions: { items: [{ id: 'kite', text: '연 날리기' }, { id: 'in', text: '건물 안 있기' }, { id: 'hold', text: '어른 손 잡기' }] } },
              challenge: { toolOptions: { items: [{ id: 'kite', text: '연 날리기' }, { id: 'in', text: '건물 안 있기' }, { id: 'sign', text: '간판 밑 서기' }, { id: 'hold', text: '어른 손 잡기' }, { id: 'tree', text: '나무 오르기' }, { id: 'umbr', text: '우산 들고 뛰기' }] } } },
            conclude: '비 오는 날은 우산·비옷을 챙기고, 바람이 세면 어른 손을 잡고 건물 안에 있어요.' },
        ],
      },
      worksheet: { items: [{ type: 'check', prompt: '비 오는 날 챙길 것에 ✓ 해요.', options: ['우산', '부채', '비옷'] }] },
    }),
    RAIN({
      id: 'saf-disaster.e12.rain-wind.activity.route-map', type: 'activity', title: '등굣길 지도에서 피할 곳',
      method: '등굣길 칸 지도에서 피할 곳 고르기', tool: 'map', minutes: 8,
      levels: { easy: '핀을 놓으면 그 칸의 이름이 바로 보인다.', base: '네 곳(냇가·간판 옆·물웅덩이·넓은 인도)이 있는 지도에서 꽂는다.', challenge: '학교 정문·다리 위까지 여섯 곳이 있는 지도에서 꽂고, 피한 까닭을 짝에게 말한다.' },
      activity: {
        title: '비바람 날 등굣길 지도', tool: 'map',
        teacher: '"비바람이 센 날 학교 오는 길이에요. 어디로 걷고 어디를 피할까요?" 핀을 꽂기 전에 그곳에서 어떤 일이 생길지 한마디씩 말하게 한다. 냇가를 "물이 많아서 재밌어요"라고 하는 학생에게 "비가 오면 냇물이 빨라지고 많아져요. 발이 빠지면 어떻게 될까요?"라고 묻는다. 간판은 바람에 흔들리거나 떨어질 수 있어 그 아래에 서지 않는다는 점을 짚는다.',
        task: '물음에 맞는 곳에 핀을 꽂아요.', levels: { easy: { readout: true }, base: {}, challenge: {} },
        items: [
          PIN('어른 손 잡고 걸을 길에 꽂아요.', ROAD, ROAD_MORE, '넓은 인도', 0.1),
          PIN('물이 불어나 가면 안 될 곳에 꽂아요.', ROAD, ROAD_MORE, '냇가', 0.15),
          PIN('바람에 떨어질 것이 있는 곳에 꽂아요.', ROAD, ROAD_MORE, '간판 옆', 0.2, { conclude: '비바람 센 날은 냇가와 간판 옆을 피하고 어른과 넓은 인도로 걸어요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '비 많이 오는 날 가지 않을 곳에 ○ 해요.', options: ['냇가', '넓은 인도'], answer: '냇가' }] },
    }),
    RAIN({
      id: 'saf-disaster.e12.rain-wind.wrap.word-web', type: 'wrap', title: '비바람 날 약속 모으기',
      method: '센 바람 날 약속 모으기', tool: 'mindmap', minutes: 7,
      levels: { easy: '교사가 카드를 하나씩 읽어 주고 약속 두 개를 함께 고른다.', base: '약속 세 개를 스스로 골라 붙이고 함께 읽는다.', challenge: '붙인 약속 가운데 가족에게 알릴 것 하나를 골라 말한다.' },
      wrap: {
        teacher: '"비와 바람이 센 날 우리 약속을 모아 볼까요?" 가운데 \'비·바람\'에 약속을 붙이고 반 전체가 소리 내어 읽는다. "물웅덩이 놀이"를 붙이려는 학생에게 "웅덩이가 얼마나 깊은지 보일까요?"라고 묻는다. 출구 2번 뒤에 오늘 저녁 가족에게 알릴 약속 하나를 정하게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'pick', topic: '비·바람', basket: '비·바람 약속', cards: ['냇가 안 가요', '연 날리기', '어른 손 잡기', '물웅덩이 놀이', '간판 피하기'] }, prompt: '비바람 날 약속을 모아요.', target: { pick: ['냇가 안 가요', '어른 손 잡기', '간판 피하기'] }, difficulty: 0.15 },
          { type: 'choice', prompt: '바람 센 날 간판 아래는요?', options: ['안전해요', '피해요', '놀아요'], answer: 1, difficulty: 0.1, explain: '간판이 흔들리거나 떨어질 수 있어 피해요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '비·바람 센 날 약속',
        items: [
          { type: 'check', prompt: '가족에게 알릴 약속에 ✓ 해요.', options: ['냇가에 가지 않아요', '어른 손을 잡아요', '간판 아래를 피해요'] },
          { type: 'draw', prompt: '비 오는 날 어른 손 잡고 걷는 모습을 그려요.' },
        ],
      },
    }),
    RAIN({
      id: 'saf-disaster.e12.rain-wind.wrap.chant', type: 'wrap', title: '"냇가는 안 가요" 구호',
      method: '비바람 약속 구호 따라 하기', tool: 'timer', minutes: 7,
      levels: { easy: '교사가 구호를 먼저 외치고 반 전체가 동작과 함께 따라 한다.', base: '구호 카드 세 장의 차례를 맞추고 짝과 번갈아 외친다.', challenge: '차례를 맞춘 뒤 구호에 어울리는 동작 하나를 새로 만들어 보인다.' },
      wrap: {
        teacher: '"냇가 안 가요! (손 젓기) 어른 손 잡아요! (짝 손 잡기) 간판 피해요! (옆으로 한 걸음)" 구호 카드를 차례대로 놓은 뒤 반 전체가 동작과 함께 세 번 외친다. 출구 2번에서 "혼자 냇가 구경"을 고른 학생에게 "비 온 뒤에도 냇물은 한동안 빨라요. 어른과 함께 멀리서 봐요"라고 말해 준다.',
        exitTicket: [
          CHANT('비바람 구호', ['냇가 안 가요', '어른 손 잡아요', '간판 피해요']),
          { type: 'choice', prompt: '비가 막 그쳤어요. 냇가는요?', options: ['혼자 구경해요', '가지 않아요', '들어가 놀아요'], answer: 1, difficulty: 0.1, explain: '비가 그쳐도 냇물이 빨라 가지 않아요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '냇가 안 가요, 어른 손 잡아요!',
        items: [
          { type: 'blank', prompt: '구호를 따라 써요.', text: '냇가 안 가요, 어른 ___ 잡아요!', answer: '손' },
          { type: 'table', prompt: '좋으면 ○, 안 되면 ×를 써요.', columns: ['행동', '○ / ×'], cells: [['우산 쓰고 천천히', ''], ['냇가에서 놀기', ''], ['간판 밑에 서기', '']], answer: '○, ×, ×' },
        ],
      },
    }),
  ];

  // 잘한 장면·고칠 장면 나누기(story sort): 기본 3장, 쉬움 2장, 도전 4장
  const OKFIX = (prompt, good, fix, d, more) => {
    const S = (g, f) => ({ good: g.map((c) => c.id), fix: f.map((c) => c.id) });
    return {
      prompt, toolOptions: { mode: 'sort', slots: [{ id: 'good', label: '잘했어요' }, { id: 'fix', label: '고쳐요' }], cards: [good[0], fix[0], good[1]] }, target: { sort: S(good, [fix[0]]) }, difficulty: d,
      levels: {
        easy: { prompt: `${cut(prompt)}(2장).`, toolOptions: { cards: [good[0], fix[0]] }, target: { sort: S([good[0]], [fix[0]]) } },
        challenge: { prompt: `${cut(prompt)}(4장).`, toolOptions: { cards: [fix[1], good[0], fix[0], good[1]] }, target: { sort: S(good, fix) } },
      },
      ...more,
    };
  };

  // =====================================================================================================
  // 2학년 · 비상구 표시 따라 줄 서서 대피
  const EXIT = MOD('saf-disaster.e12.exit-sign', [2]);
  const FLOOR = [{ name: '우리 교실', icon: 'school', at: [0, 0] }, { name: '계단', icon: 'dot', at: [3, 0] }, { name: '엘리베이터', icon: 'dot', at: [1, 1] }, { name: '운동장', icon: 'park', at: [3, 2] }];
  const FLOOR_MORE = [{ name: '화장실', icon: 'dot', at: [0, 2] }, { name: '도서실', icon: 'library', at: [2, 0] }];
  const T_EXIT = [
    EXIT({
      id: 'saf-disaster.e12.exit-sign.intro.find-sign', type: 'intro', title: '복도 그림에서 비상구 표시 찾기',
      method: '그림에서 비상구 표시 찾기', tool: 'emotion', minutes: 6,
      levels: { easy: '교사가 실물 비상구 표시 사진을 크게 보이며 하나를 함께 찾는다.', base: '복도 그림 카드 가운데 비상구 표시와 나가는 길을 알려 주는 것을 고른다.', challenge: '찾은 뒤 표시 속 사람이 어디로 가는지("문 밖으로") 말한다.' },
      intro: {
        teacher: '"우리 학교 복도 문 위에 초록색 그림이 있어요. 본 적 있나요?" 학교 비상구 표시 사진(또는 실물)을 보인 뒤 시연 단추로 나가는 길을 알려 주는 카드만 바구니에 담기는 모습을 보여 준다. "빨간색이 비상구예요"라는 말이 나오면 "빨간 것은 소화기예요. 나가는 길 표시는 무슨 색이었나요?"라고 되묻는다. 오늘은 비상구 표시를 따라 줄 서서 나가는 법을 배운다고 밝힌다.',
        student: '우리 학교에서 초록색 비상구 표시를 본 곳을 떠올려 보아요.',
        demo: { tool: 'emotion', options: { mode: 'pick', basket: '나가는 길', cards: [{ id: 'sign', text: '초록 비상구 표시' }, { id: 'clock', text: '시계' }, { id: 'arrow', text: '초록 화살표' }, { id: 'board', text: '게시판' }], shuffle: false }, sequence: [{ pick: ['sign', 'arrow'] }] },
        art: { draw: 'a paper school hallway with a green paper emergency exit sign above a door showing a small running figure and an arrow, paper children pointing up at it', banner: '초록 표시를 찾아요' },
      },
      notes: '교구는 비상구 표시 그림을 그리지 못한다. 학교 비상구 표시 사진이나 실물을 꼭 함께 보인다.',
    }),
    EXIT({
      id: 'saf-disaster.e12.exit-sign.intro.sign-collage', type: 'intro', title: '비상구 표시 조각 맞추기',
      method: '비상구 표시 조각 맞추기', tool: 'collage', minutes: 5,
      levels: { easy: '교사가 초록 바탕과 하양 사람 조각 2개를 붙이는 것을 보이고 함께 이름을 말한다.', base: '초록 바탕·하양 사람·하양 화살표 조각 3개로 표시가 완성되는 시연을 본다.', challenge: '완성된 표시를 보고 우리 학교 어디에서 보았는지 말한다.' },
      intro: {
        teacher: '"비상구 표시는 어떤 조각으로 되어 있을까요?" 시연 단추로 초록 긴 네모(바탕), 하양 동그라미(사람 머리), 하양 세모(화살표)가 차례로 붙는 모습을 보여 준다. 실제 표시 사진과 견주어 "사람이 문 쪽으로 달려가요"라고 함께 말한다. "그냥 그림이에요"라는 말이 나오면 "이 그림이 나가는 문을 알려 주면 연기가 날 때 어떻게 도움이 될까요?"라고 되묻는다.',
        student: '초록 바탕, 하양 사람, 하양 화살표! 조각 이름을 따라 말해 보아요.',
        demo: { tool: 'collage', options: { readOnly: true }, sequence: [{ has: [{ shape: 'rect', color: '초록', size: 'l', n: 1 }, { shape: 'circle', color: '하양', size: 's', n: 1 }, { shape: 'triangle', color: '하양', n: 1 }] }] },
        art: { draw: 'cut paper pieces, a green rectangle, a small white circle and a white triangle arrow, being assembled into an emergency exit sign on a table', banner: '비상구 표시 만들기' },
      },
      notes: '콜라주 조각은 사람 모양을 그리지 못해 하양 동그라미를 머리로 정해 보인다. 실물 표시 사진과 함께 쓴다.',
    }),
    EXIT({
      id: 'saf-disaster.e12.exit-sign.activity.exit-map', type: 'activity', title: '학교 지도에서 나가는 길',
      method: '교실 칸 지도에서 비상구 따라 나가는 길 고르기', tool: 'map', minutes: 14,
      levels: { easy: '핀을 놓으면 그 칸의 이름이 바로 보인다.', base: '네 곳(우리 교실·계단·엘리베이터·운동장)이 있는 지도에서 꽂는다.', challenge: '화장실·도서실까지 여섯 곳이 있는 지도에서 꽂고, 엘리베이터는 왜 타지 않는지 짝에게 말한다.' },
      activity: {
        title: '우리 학교 층 지도에서 나가는 길', tool: 'map',
        teacher: '"불이 나서 비상구 표시를 따라가요. 어디를 지나 어디에 모일까요?" 핀을 꽂기 전에 실제 우리 반에서 가장 가까운 계단이 어느 쪽인지 손으로 가리키게 한다. "엘리베이터가 빨라요"라는 학생에게 "불이 나면 전기가 끊겨 엘리베이터가 멈출 수 있어요. 그 안에 있으면 어떻게 될까요?"라고 묻는다. 지도의 길과 실제 우리 학교 비상구 표시가 가리키는 쪽이 같은지 함께 견주어 본다.',
        task: '물음에 맞는 곳에 핀을 꽂아요.', levels: { easy: { readout: true }, base: {}, challenge: {} },
        items: [
          PIN('불이 나면 내려갈 곳에 꽂아요.', FLOOR, FLOOR_MORE, '계단', 0.1),
          PIN('대피할 때 타지 않을 곳에 꽂아요.', FLOOR, FLOOR_MORE, '엘리베이터', 0.15),
          PIN('다 나가서 모일 곳에 꽂아요.', FLOOR, FLOOR_MORE, '운동장', 0.2, { conclude: '비상구 표시를 따라 계단으로 내려가 운동장에 모여요. 엘리베이터는 타지 않아요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '불이 나서 나갈 때 무엇으로 내려가요?', options: ['계단', '엘리베이터'], answer: '계단' }] },
      notes: '지도에는 비상구 화살표를 그릴 수 없다. 우리 학교 대피로 그림이나 실제 표시를 함께 본다.',
    }),
    EXIT({
      id: 'saf-disaster.e12.exit-sign.activity.drill-board', type: 'activity', title: '줄 서서 대피 훈련 판',
      method: '화재 대피 훈련 판: 줄 서기 순서와 점검', tool: 'timer', minutes: 15,
      levels: { easy: '순서 카드 2장(줄 서기 → 표시 따라 걷기)을 맞추고, 훈련 뒤 점검 2개에 표시한다.', base: '순서 카드 3장을 맞추고 줄 서서 나가 본 뒤 점검 3개에 표시한다.', challenge: '순서 카드 3장, 훈련 뒤 점검 4개("엘리베이터를 안 탔어요" 더하기)에 표시한다.' },
      activity: {
        title: '줄 대피 훈련 판', tool: 'timer',
        teacher: '"경보가 울렸어요. 우리 반은 어떤 차례로 나갈까요?" 순서 카드를 맞춘 뒤 교사의 신호에 맞춰 한 줄로 서서 앞 친구 어깨를 보며 복도 끝까지 걸어 본다. 앞 친구를 미는 학생에게 "한 사람이 넘어지면 뒤 친구들도 모두 멈춰야 해요. 밀면 더 늦어져요"라고 말한다. 실제 학교 화재 대피 훈련 날에는 이 판을 훈련 전후에 쓴다.',
        task: '순서 카드를 맞추고 훈련한 뒤 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
        items: DRILL('줄 서서 나가는 차례로 놓아요.', '줄 서서 대피', ['줄 서요', '표시 따라 걸어요', '운동장에 모여요'], '줄 서서 나가 보았어요',
          ['밀지 않았어요', '표시를 따라갔어요', '운동장에 모였어요'], '엘리베이터를 안 탔어요', 0.15, '신호에 맞춰 줄 서서 나가요.', '줄 대피 뒤 해 본 것에 표시해요.'),
      },
      worksheet: { items: [{ type: 'choice', prompt: '줄 서서 나갈 때 무엇을 해요?', options: ['밀지 않아요', '앞질러 뛰어요'], answer: '밀지 않아요' }] },
      notes: '학교 화재 대피 훈련(별표 1 참고5) 앞뒤에 쓰는 판이다. 1학년 fire-shout 훈련 판과 달리 줄 서기·비상구 표시 따라가기에 무게를 둔다.',
    }),
    EXIT({
      id: 'saf-disaster.e12.exit-sign.activity.after-story', type: 'activity', title: '훈련 장면 돌아보기',
      method: '훈련 장면 카드 돌아보기', tool: 'story', minutes: 13,
      levels: { easy: '장면 2장(잘한 것 하나·고칠 것 하나)을 나누고, 놓으면 바로 맞는지 알려 준다.', base: '장면 3장을 잘했어요·고쳐요 칸에 나눈다.', challenge: '장면 4장을 나눈 뒤 고칠 장면 하나를 바르게 바꿔 짝에게 말한다.' },
      activity: {
        title: '훈련 장면 잘했어요·고쳐요', tool: 'story',
        teacher: '"훈련 때 친구들 모습이에요. 잘한 장면과 고칠 장면을 나누어 볼까요?" 카드를 놓을 때마다 반 전체가 소리 내어 읽는다. "엘리베이터 타요"를 잘했어요에 두는 학생에게 "불이 나면 엘리베이터가 멈출 수 있어요. 어디로 내려갈까요?"라고 묻는다. 고칠 장면은 누가 잘못했는지가 아니라 "어떻게 바꾸면 될까?"로만 이야기한다.',
        task: '장면 카드를 두 칸으로 나누어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          OKFIX('계단 장면을 나누어요.', [{ id: 'line', text: '줄 서서 걸어요' }, { id: 'rail', text: '손잡이 잡아요' }], [{ id: 'push', text: '친구를 밀어요' }, { id: 'jump', text: '뛰어 내려가요' }], 0.15),
          OKFIX('복도 장면을 나누어요.', [{ id: 'sign', text: '표시 따라가요' }, { id: 'mouth', text: '입을 가려요' }], [{ id: 'lift', text: '엘리베이터 타요' }, { id: 'noise', text: '떠들며 가요' }], 0.2),
          OKFIX('운동장 장면을 나누어요.', [{ id: 'sit', text: '줄 맞춰 앉아요' }, { id: 'answer', text: '이름 대답해요' }], [{ id: 'back', text: '교실로 돌아가요' }, { id: 'alone', text: '혼자 놀아요' }], 0.25, { conclude: '밀지 않고 줄 서서, 표시를 따라, 계단으로 나가 운동장에 모여요.' }),
        ],
      },
      worksheet: { items: [{ type: 'table', prompt: '잘했으면 ○, 고칠 것은 ×를 써요.', columns: ['장면', '○ / ×'], cells: [['줄 서서 걸어요', ''], ['친구를 밀어요', ''], ['엘리베이터 타요', '']], answer: '○, ×, ×' }] },
      notes: '훈련 때 실제로 누가 그랬는지 묻지 않는다. 장면 카드 속 인물로만 이야기한다.',
    }),
    EXIT({
      id: 'saf-disaster.e12.exit-sign.wrap.self-check', type: 'wrap', title: '줄 서서 나갔는지 점검',
      method: '줄 서서 나갔는지 스스로 점검', tool: 'kitchen', minutes: 7,
      levels: { easy: '교사가 점검 칸 두 개를 하나씩 읽어 주고 함께 표시한다.', base: '점검 칸 세 개를 스스로 읽고 해 본 것에 표시한다.', challenge: '표시한 뒤 훈련에서 잘한 친구에게 칭찬 한마디를 한다.' },
      wrap: {
        teacher: '"오늘 줄 서서 나갈 때 나는 무엇을 해 보았나요?" 점검 칸을 함께 읽고 해 본 것에만 표시하게 한다. 출구 2번에서 "빨리 뛰어요"를 고른 학생에게 "줄이 흩어지면 선생님이 누가 없는지 알 수 없어요"라고 말해 준다. 칭찬은 "○○가 밀지 않고 걸었어요"처럼 행동으로 말하게 한다.',
        exitTicket: [
          CHECK('줄 대피 점검', [{ id: 'sign', text: '표시를 보았어요' }, { id: 'push', text: '밀지 않았어요' }, { id: 'line', text: '줄을 섰어요' }]),
          { type: 'choice', prompt: '경보가 울리면 어떻게 걸어요?', options: ['빨리 뛰어요', '줄 서서 걸어요', '혼자 가요'], answer: 1, difficulty: 0.1, explain: '밀지 않고 줄을 서서 선생님을 따라 걸어요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '줄 서서 대피 스스로 점검',
        items: [
          { type: 'check', prompt: '오늘 해 본 것에 ✓ 해요.', options: ['비상구 표시를 보았어요', '친구를 밀지 않았어요', '줄을 서서 나갔어요'] },
          { type: 'short', prompt: '잘한 친구에게 칭찬 한마디를 써요.' },
        ],
        easy: { note: '해 본 것만 표시해요.', items: [{ type: 'check', prompt: '해 본 것에 ✓ 해요.', options: ['줄을 섰어요', '밀지 않았어요'] }] },
      },
    }),
    EXIT({
      id: 'saf-disaster.e12.exit-sign.wrap.word-web', type: 'wrap', title: '비상구 약속 낱말 모으기',
      method: '비상구 약속 낱말 모으기', tool: 'mindmap', minutes: 7,
      levels: { easy: '교사가 카드를 읽어 주고 낱말 두 개(초록 표시·줄 서기)를 함께 고른다.', base: '낱말 세 개를 스스로 골라 붙이고 함께 읽는다.', challenge: '붙인 낱말로 우리 반 대피 구호를 만들어 외친다.' },
      wrap: {
        teacher: '"비상구 하면 떠오르는 약속 낱말을 모아 볼까요?" 가운데 \'비상구\'에 낱말을 붙이고 반 전체가 "초록 표시! 줄 서기! 천천히!"를 읽는다. "엘리베이터"를 붙이려는 학생에게 "대피할 때는 무엇으로 내려갔지요?"라고 묻는다. 도전하는 학생이 만든 구호를 다 같이 한 번 외치며 마친다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'pick', topic: '비상구', basket: '비상구 약속', cards: ['초록 표시', '엘리베이터', '줄 서기', '밀기', '천천히'] }, prompt: '비상구 약속 낱말을 모아요.', target: { pick: ['초록 표시', '줄 서기', '천천히'] }, difficulty: 0.15 },
          { type: 'choice', prompt: '비상구 표시는 무슨 색이에요?', options: ['빨강', '초록', '보라'], answer: 1, difficulty: 0.1, explain: '나가는 길을 알려 주는 비상구 표시는 초록색이에요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '초록 표시! 줄 서기! 천천히!',
        items: [
          { type: 'blank', prompt: '구호를 따라 써요.', text: '초록 표시! 줄 서기! ___!', answer: '천천히' },
          { type: 'draw', prompt: '우리 학교 비상구 표시를 그려요.' },
        ],
      },
    }),
  ];

  // =====================================================================================================
  // 2학년 · 흔들림이 멈추면 운동장으로
  const QO = MOD('saf-disaster.e12.quake-out', [2]);
  const YARD = [{ name: '계단', icon: 'dot', at: [0, 0] }, { name: '운동장 가운데', icon: 'park', at: [2, 1] }, { name: '담장 옆', icon: 'dot', at: [3, 2] }, { name: '건물 옆', icon: 'school', at: [0, 2] }];
  const YARD_MORE = [{ name: '골대 옆', icon: 'dot', at: [3, 0] }, { name: '엘리베이터', icon: 'dot', at: [1, 0] }];
  const T_QO = [
    QO({
      id: 'saf-disaster.e12.quake-out.intro.after-scene', type: 'intro', title: '흔들림이 멈춘 뒤 할 일',
      method: '흔들린 뒤 그림에서 할 일 고르기', tool: 'emotion', minutes: 6,
      levels: { easy: '교사가 보기 2개(머리 가리기·엘리베이터)만 읽어 주고 고르게 한다.', base: '보기 4개 가운데 멈춘 뒤 할 일 2개를 고른다.', challenge: '고른 일을 자리에서 동작으로 해 보인다(가방 머리에 얹기·줄 서기).' },
      intro: {
        teacher: '"흔들림이 멈췄어요. 이제 무엇을 할까요?" 1학년 때 배운 "책상 아래, 머리, 기다려요"를 먼저 함께 말한 뒤, 시연 단추로 멈춘 뒤 할 일만 바구니에 담기는 모습을 보여 준다. "이제 괜찮으니 뛰어가요"라는 말이 나오면 "또 흔들릴 수도 있어요. 머리는 어떻게 할까요?"라고 되묻는다. 오늘은 흔들림이 멈춘 뒤 운동장으로 나가는 법을 배운다고 밝힌다.',
        student: '흔들림이 멈추면 무엇을 할지 짝에게 하나 말해 보아요.',
        demo: { tool: 'emotion', options: { mode: 'pick', basket: '멈춘 뒤 할 일', cards: [{ id: 'head', text: '머리 가리기' }, { id: 'lift', text: '엘리베이터' }, { id: 'line', text: '줄 서기' }, { id: 'run', text: '뛰어가기' }], shuffle: false }, sequence: [{ pick: ['head', 'line'] }] },
        art: { draw: 'a calm paper classroom after shaking, paper children standing in a line holding school bags over their heads, a teacher at the door', banner: '멈추면 머리 가리고 줄 서요' },
      },
    }),
    QO({
      id: 'saf-disaster.e12.quake-out.intro.cover-head', type: 'intro', title: '나갈 때 가릴 곳 짚기',
      method: '나갈 때 가릴 곳 짚기', tool: 'body', minutes: 5,
      levels: { easy: '교사가 이름이 보이는 종이 몸에서 목을 짚고, 학생은 자기 머리를 두 손으로 가린다.', base: '목을 짚는 시연을 본 뒤 가방이나 책으로 머리와 목을 가려 본다.', challenge: '가릴 물건(가방·책·방석) 하나를 골라 말하고 그 물건으로 가려 본다.' },
      intro: {
        teacher: '"밖으로 나갈 때 위에서 무엇이 떨어질 수 있어요. 무엇으로 어디를 가릴까요?" 종이 몸에는 머리 칸이 없어 목을 짚는 시연을 보인 뒤, 학생들이 가방이나 책을 머리 위에 얹어 목 뒤까지 가리게 한다. "모자 쓰면 돼요"라는 말이 나오면 "얇은 모자와 두꺼운 가방 가운데 무엇이 더 잘 막아 줄까요?"라고 되묻는다.',
        student: '가방이나 책을 머리 위에 얹어 머리와 목을 가려 보아요.',
        demo: { tool: 'body', options: { mode: 'parts', parts: ['목', '어깨', '무릎', '발목'], names: true }, sequence: [{ parts: ['목'] }] },
        art: { draw: 'paper children holding school bags and books over their heads, walking in a line down a paper staircase', banner: '가방으로 머리를 가려요' },
      },
      notes: '종이 몸에 머리 칸이 없어 목을 짚는 시연으로 대신하고, 머리는 학생이 가방·책으로 직접 가린다.',
    }),
    QO({
      id: 'saf-disaster.e12.quake-out.activity.out-order', type: 'activity', title: '멈춘 뒤 나가는 차례',
      method: '멈춘 뒤 차례 카드 3장 놓기', tool: 'timeline', minutes: 14,
      levels: { easy: '첫 카드가 놓여 있어 남은 2장만 놓고, 놓으면 바로 맞는지 알려 준다.', base: '카드 3장을 차례대로 놓는다.', challenge: '"엘리베이터 타요" 같은 틀린 카드 1장을 빼고 놓은 뒤, 그 차례대로 동작으로 해 본다.' },
      activity: {
        title: '흔들림이 멈춘 뒤 차례', tool: 'timeline',
        teacher: '"흔들림이 멈췄어요. 운동장까지 어떤 차례로 갈까요?" 카드를 놓은 뒤 교실에서 차례대로 몸으로 해 본다(멈출 때까지 기다리기 → 가방 머리에 얹고 줄 서기 → 문 쪽으로 걷기). "멈추자마자 뛰어요"를 고르려는 학생에게 "선생님이 \'나가요\' 하기 전에 뛰면 무엇이 위험할까요?"라고 묻는다. 계단으로 내려가 건물에서 먼 운동장 가운데에 모인다는 점을 짚는다.',
        task: '카드를 차례대로 놓아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          TL('흔들려요. 나가기까지 차례로 놓아요.', [{ id: 'wait', text: '멈출 때까지' }, { id: 'bag', text: '가방 쓰고 줄 서요' }, { id: 'yard', text: '운동장으로 가요' }], { id: 'lift', text: '엘리베이터 타요' }, 0.15),
          TL('복도로 나왔어요. 차례로 놓아요.', [{ id: 'cover', text: '머리 가려요' }, { id: 'stairs', text: '계단으로 가요' }, { id: 'mid', text: '가운데 모여요' }], { id: 'wall', text: '건물 옆에 서요' }, 0.2),
          TL('운동장에 왔어요. 차례로 놓아요.', [{ id: 'center', text: '가운데로 가요' }, { id: 'sit', text: '줄 맞춰 앉아요' }, { id: 'listen', text: '선생님 기다려요' }], { id: 'back', text: '교실로 가요' }, 0.25, { conclude: '흔들림이 멈추면 머리를 가리고 줄 서서 계단으로 운동장 가운데까지 가요.' }),
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '흔들림이 멈추면 ___으로 내려가요.', answer: '계단' }] },
    }),
    QO({
      id: 'saf-disaster.e12.quake-out.activity.yard-map', type: 'activity', title: '학교 지도에서 운동장 가는 길',
      method: '학교 칸 지도에서 운동장 가는 길 고르기', tool: 'map', minutes: 14,
      levels: { easy: '핀을 놓으면 그 칸의 이름이 바로 보인다.', base: '네 곳(계단·운동장 가운데·담장 옆·건물 옆)이 있는 지도에서 꽂는다.', challenge: '골대 옆·엘리베이터까지 여섯 곳이 있는 지도에서 꽂고, 담장 옆이 왜 위험한지 짝에게 말한다.' },
      activity: {
        title: '운동장까지 가는 길 지도', tool: 'map',
        teacher: '"흔들림이 멈췄어요. 어디로 내려가 어디에 모일까요?" 핀을 꽂기 전에 그곳에서 어떤 일이 생길 수 있는지 말하게 한다. 건물 옆을 "그늘이라 좋아요"라고 하는 학생에게 "또 흔들리면 건물 유리나 벽돌이 어디로 떨어질까요?"라고 묻는다. 운동장에서도 담장·건물·골대에서 떨어진 가운데가 안전하다는 점을 짚는다.',
        task: '물음에 맞는 곳에 핀을 꽂아요.', levels: { easy: { readout: true }, base: {}, challenge: {} },
        items: [
          PIN('흔들림이 멈추면 내려갈 곳에 꽂아요.', YARD, YARD_MORE, '계단', 0.1),
          PIN('줄 서서 앉을 곳에 꽂아요.', YARD, YARD_MORE, '운동장 가운데', 0.15),
          PIN('무너질 수 있어 멀리할 곳에 꽂아요.', YARD, YARD_MORE, '담장 옆', 0.2, { conclude: '계단으로 내려가 담장·건물에서 먼 운동장 가운데에 모여요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '운동장에서 모일 곳에 ○ 해요.', options: ['운동장 가운데', '담장 옆'], answer: '운동장 가운데' }] },
    }),
    QO({
      id: 'saf-disaster.e12.quake-out.activity.drill-board', type: 'activity', title: '운동장 대피 훈련 판',
      method: '지진 대피 훈련(운동장 이동) 판: 순서와 점검', tool: 'timer', minutes: 15,
      levels: { easy: '순서 카드 2장(머리 가리기 → 계단으로)을 맞추고, 훈련 뒤 점검 2개에 표시한다.', base: '순서 카드 3장을 맞추고 운동장까지 나가 본 뒤 점검 3개에 표시한다.', challenge: '순서 카드 3장, 훈련 뒤 점검 4개("담장에서 떨어졌어요" 더하기)에 표시한다.' },
      activity: {
        title: '운동장 훈련 판', tool: 'timer',
        teacher: '"흔들림이 멈췄어요. 운동장까지 어떤 차례로 갈까요?" 순서 카드를 맞춘 뒤 교사의 "멈췄어요, 나가요!" 신호에 맞춰 가방을 머리에 얹고 줄을 서서 계단으로 운동장 가운데까지 걸어 간다. 계단에서 서두르는 학생에게 "계단에서는 손잡이 잡고 한 칸씩, 앞 친구와 거리를 두어요"라고 말한다. 실제 학교 지진 대피 훈련 날에는 이 판을 훈련 전후에 쓴다.',
        task: '순서 카드를 맞추고 훈련한 뒤 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
        items: DRILL('운동장 가는 차례로 놓아요.', '운동장 대피 차례', ['머리 가려요', '계단으로', '운동장 가운데'], '운동장 대피 훈련을 해 보았어요',
          ['머리를 가렸어요', '계단으로 갔어요', '가운데에 모였어요'], '담장에서 떨어졌어요', 0.15, '신호에 맞춰 운동장에 가요.', '운동장 훈련 뒤 표시해요.'),
      },
      worksheet: { items: [{ type: 'choice', prompt: '운동장에 나갈 때 무엇으로 가요?', options: ['계단', '엘리베이터'], answer: '계단' }] },
      notes: '학교 지진 대피 훈련(운동장 이동, 별표 1 참고5) 앞뒤에 쓰는 판이다. 실제 훈련이 없는 날은 복도 끝까지만 걸어 본다.',
    }),
    QO({
      id: 'saf-disaster.e12.quake-out.wrap.drill-story', type: 'wrap', title: '훈련 이야기 채우기',
      method: '훈련 이야기 이어 말하기', tool: 'story', minutes: 7,
      levels: { easy: '교사가 빈 장면 하나를 함께 읽고 반 전체가 알맞은 카드를 말한다.', base: '빈 장면 두 곳에 알맞은 카드를 스스로 넣는다.', challenge: '빈 장면을 채운 뒤 이야기 끝을 내 말로 짝에게 말한다.' },
      wrap: {
        teacher: '"하린이네 반이 지진 훈련을 했어요. 하린이는 어떻게 했을까요?" 빈 장면에 카드를 넣고 이야기를 반 전체가 소리 내어 읽는다. "엘리베이터"를 넣으려는 학생에게 "흔들린 뒤에는 엘리베이터가 멈출 수 있어요. 무엇으로 내려갈까요?"라고 묻는다. 출구 2번에서 "건물 옆"을 고른 학생에게 건물에서 떨어진 가운데가 안전하다고 짚어 준다.',
        exitTicket: [
          { type: 'tool', tool: 'story', options: { mode: 'fill', slots: [{ id: 'q1', who: '하린', label: '___ 머리를 가려요.' }, { id: 'q2', who: '하린', label: '___ 내려가요.' }], cards: ['가방으로', '엘리베이터로', '계단으로', '장난감으로'] }, prompt: '하린이 이야기를 채워요.', target: { fill: { q1: '가방으로', q2: '계단으로' } }, difficulty: 0.15 },
          { type: 'choice', prompt: '운동장에서 어디에 모여요?', options: ['건물 옆', '운동장 가운데', '담장 옆'], answer: 1, difficulty: 0.1, explain: '건물·담장에서 먼 운동장 가운데에 모여요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '흔들림이 멈추면 운동장으로',
        items: [
          { type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '___으로 머리를 가리고 계단으로 내려가요.', answer: '가방' },
          { type: 'draw', prompt: '운동장 가운데에 모인 우리 반을 그려요.' },
        ],
        easy: { note: '"가방, 계단, 가운데"를 떠올려요.', items: [{ type: 'draw', prompt: '가방으로 머리를 가린 내 모습을 그려요.' }] },
      },
    }),
    QO({
      id: 'saf-disaster.e12.quake-out.wrap.class-poster', type: 'wrap', title: '운동장 대피 약속 포스터',
      method: '우리 반 운동장 대피 약속 포스터', tool: 'collage', minutes: 7,
      levels: { easy: '교사와 함께 초록 운동장과 친구 동그라미 2개를 붙인다.', base: '초록 운동장 위에 친구 동그라미 3개 이상을 줄 맞춰 붙인다.', challenge: '붙인 뒤 "가운데 모여요" 같은 약속 한 줄을 교사와 함께 활동지에 쓴다.' },
      wrap: {
        teacher: '"우리 반이 운동장 가운데에 줄 맞춰 모인 모습을 포스터로 만들어 볼까요?" 초록 큰 네모는 운동장, 동그라미는 우리 반 친구라고 정하고 가운데에 줄 맞춰 붙이게 한다. 동그라미를 판 끝에 붙이는 학생에게 "판 끝은 담장 옆이에요. 어디로 옮길까요?"라고 묻는다. 활동지 포스터를 교실 문 옆에 붙여 다음 훈련 때 다시 본다.',
        exitTicket: [
          { type: 'tool', tool: 'collage', options: { shapes: ['square', 'circle', 'rect', 'triangle'], colors: ['초록', '노랑', '파랑', '빨강'], sizes: ['s', 'm', 'l'] }, prompt: '운동장에 친구 동그라미를 붙여요.', target: { has: [{ shape: 'square', color: '초록', size: 'l', min: 1 }, { shape: 'circle', min: 3 }] }, difficulty: 0.15 },
          { type: 'choice', prompt: '흔들림이 멈추면 무엇을 써요?', options: ['가방을 머리에', '모래를 머리에', '아무것도요'], answer: 0, difficulty: 0.1, explain: '가방이나 책으로 머리를 가리고 나가요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '우리 반 운동장 대피 약속',
        items: [
          { type: 'draw', prompt: '운동장 가운데에 모인 우리 반을 포스터로 그려요.' },
          { type: 'table', prompt: '좋으면 ○, 안 되면 ×를 써요.', columns: ['행동', '○ / ×'], cells: [['가운데 모이기', ''], ['골대 옆에 서기', ''], ['선생님 곁에 있기', '']], answer: '○, ×, ○' },
        ],
      },
      notes: '콜라주 판은 운동장·사람을 그리지 못해 초록 큰 네모 = 운동장, 동그라미 = 친구로 정해 붙인다.',
    }),
  ];

  // 날씨 칸 나누기(kitchen sort): 기본 6장, 쉬움 4장, 도전 8장
  const WEATHER = [{ id: 'hot', label: '더운 날' }, { id: 'cold', label: '추운 날' }];
  const SEASON = (prompt, hot, cold, d, more) => ({
    prompt, toolOptions: { mode: 'sort', slots: WEATHER, autoMotif: false, cards: [hot[0], cold[0], hot[1], cold[1], hot[2], cold[2]] }, target: { sort: { hot: hot.slice(0, 3), cold: cold.slice(0, 3) } }, difficulty: d,
    levels: {
      easy: { prompt: `${cut(prompt)}(4장).`, toolOptions: { cards: [hot[0], cold[0], hot[1], cold[1]] }, target: { sort: { hot: hot.slice(0, 2), cold: cold.slice(0, 2) } } },
      challenge: { prompt: `${cut(prompt)}(8장).`, toolOptions: { cards: [hot[3], hot[0], cold[0], hot[1], cold[3], cold[1], hot[2], cold[2]] }, target: { sort: { hot, cold } } },
    },
    ...more,
  });

  // =====================================================================================================
  // 2학년 · 아주 더운 날·추운 날 몸 지키기
  const HC = MOD('saf-disaster.e12.heat-cold', [2]);
  const T_HC = [
    HC({
      id: 'saf-disaster.e12.heat-cold.intro.two-days', type: 'intro', title: '더운 날·추운 날 그림 나누기',
      method: '더운 날·추운 날 그림 고르기', tool: 'emotion', minutes: 6,
      levels: { easy: '교사가 그림 2장(땀 흘려요·덜덜 떨어요)만 읽어 주고 날씨에 놓게 한다.', base: '그림 4장을 더운 날·추운 날에 나누는 시연을 보고 따라 말한다.', challenge: '나눈 뒤 그날 내 마음을 한 낱말("힘들어요", "추워요")로 말한다.' },
      intro: {
        teacher: '"이 친구는 땀을 뻘뻘 흘려요. 저 친구는 덜덜 떨어요. 어떤 날일까요?" 시연 단추로 장면 카드가 더운 날·추운 날 칸에 나뉘는 모습을 보여 준다. "추워도 뛰면 따뜻해져요"라는 말이 나오면 "뛰다 멈추면 땀이 식어서 더 추워질 수 있어요. 무엇을 입을까요?"라고 되묻는다. 오늘은 아주 더운 날과 추운 날 몸을 지키는 법을 배운다고 밝힌다.',
        student: '아주 더운 날 내 몸은 어떤지 짝에게 한 낱말로 말해 보아요.',
        demo: { tool: 'emotion', options: { mode: 'sort', slots: [{ id: 'hot', label: '더운 날' }, { id: 'cold', label: '추운 날' }], cards: [{ id: 'sweat', text: '땀 흘려요' }, { id: 'shiver', text: '덜덜 떨어요' }, { id: 'fan', text: '부채질해요' }, { id: 'breath', text: '입김 호호' }], shuffle: false }, sequence: [{ sort: { hot: ['sweat', 'fan'], cold: ['shiver', 'breath'] } }] },
        art: { draw: 'a paper scene split in two: on the left a sweating paper child under a hot paper sun near shade, on the right a shivering paper child in falling paper snow', banner: '더운 날, 추운 날' },
      },
    }),
    HC({
      id: 'saf-disaster.e12.heat-cold.intro.warm-parts', type: 'intro', title: '추운 날 감쌀 곳 짚기',
      method: '추운 날 감쌀 곳 고르기', tool: 'body', minutes: 5,
      levels: { easy: '교사가 이름이 보이는 종이 몸에서 목 한 곳을 짚고 함께 따라 짚는다.', base: '목·귀·손목 세 곳이 차례로 짚이는 시연을 보고 자기 몸에서도 짚는다.', challenge: '짚은 곳마다 감쌀 물건(목도리·귀마개·장갑)을 말한다.' },
      intro: {
        teacher: '"찬바람이 불면 내 몸 어디가 가장 먼저 시릴까요?" 시연 단추로 목 → 귀 → 손목이 차례로 짚이는 모습을 보인 뒤, 학생들이 자기 목·귀·손목을 손으로 감싸 보게 한다. "얇은 옷 하나면 돼요"라는 말이 나오면 "얇은 옷 여러 겹과 하나 가운데 무엇이 더 따뜻할까요?"라고 되묻는다.',
        student: '내 목, 귀, 손목을 손으로 감싸 보아요.',
        demo: { tool: 'body', options: { mode: 'parts', parts: ['목', '귀', '손목', '무릎', '허리'], names: true }, sequence: [{ parts: ['목'] }, { parts: ['목', '귀'] }, { parts: ['목', '귀', '손목'] }] },
        art: { draw: 'a paper child wrapped in a knitted paper scarf, earmuffs and mittens, walking through paper snowflakes', banner: '따뜻하게 감싸요' },
      },
    }),
    HC({
      id: 'saf-disaster.e12.heat-cold.activity.clothes-sort', type: 'activity', title: '옷·물건 날씨 칸에 나누기',
      method: '옷·물건 카드를 날씨 칸에 나누기', tool: 'kitchen', minutes: 10,
      levels: { easy: '카드 4장, 놓으면 바로 맞는지 알려 준다.', base: '카드 6장을 더운 날·추운 날로 나눈 뒤 확인한다.', challenge: '카드 8장으로 나누고, 마지막 문항에서 두 날 모두 할 일(몸이 이상하면 어른께 말하기)을 고른다.' },
      activity: {
        title: '더운 날·추운 날 챙길 것', tool: 'kitchen',
        teacher: '"이 물건은 더운 날 챙길까요, 추운 날 챙길까요?" 카드를 놓을 때마다 반 전체가 이름을 소리 내어 읽는다. "털장갑"을 더운 날에 두는 학생에게 "땀이 나는 날 털장갑을 끼면 손이 어떻게 될까요?"라고 묻는다. 날씨와 상관없이 몸이 이상하면 어른께 말한다는 점을 마지막 문항에서 짚는다.',
        task: '카드를 날씨 칸에 나누어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          SEASON('옷과 물건을 나누어요.', ['햇빛 모자', '물병', '반팔 옷', '부채'], ['목도리', '털장갑', '두꺼운 겉옷', '귀마개'], 0.1),
          SEASON('날씨에 할 일을 나누어요.', ['그늘에서 쉬기', '물 자주 마시기', '한낮엔 안에서', '시원한 곳 가기'], ['겹쳐 입기', '손목 감싸기', '따뜻한 곳 가기', '목 감싸기'], 0.15),
          { prompt: '몸이 이상할 때 할 일을 담아요.', toolOptions: { mode: 'pick', basket: '몸이 이상해요', autoMotif: false, cards: ['참고 놀기', '어른께 말하기', '더 뛰기', '쉬기'] }, target: { pick: ['어른께 말하기', '쉬기'] }, difficulty: 0.2,
            conclude: '더운 날은 그늘과 물, 추운 날은 겹쳐 입고 감싸기. 몸이 이상하면 쉬고 어른께 말해요.' },
        ],
      },
      worksheet: { items: [{ type: 'table', prompt: '더운 날은 ○, 추운 날은 △를 써요.', columns: ['물건', '○ / △'], cells: [['햇빛 모자', ''], ['목도리', ''], ['물병', ''], ['털장갑', '']], answer: '○, △, ○, △' }] },
      notes: '카드 한 장은 한 칸에만 들어가 계획 도전의 "둘 다 쓰는 물건 찾기"를 셋째 문항(몸이 이상할 때 할 일 고르기)으로 바꾸었다.',
    }),
    HC({
      id: 'saf-disaster.e12.heat-cold.activity.move-along', type: 'activity', title: '그늘·물 마시기 동작 따라 하기',
      method: '그늘·물 마시기 동작 따라 하기', tool: 'timer', minutes: 8,
      levels: { easy: '동작 카드 2장의 차례를 맞추고 교사를 따라 동작한다.', base: '동작 카드 3장의 차례를 맞추고 동작을 따라 한 뒤, 추운 날 동작 카드 3장도 맞춘다.', challenge: '더운 날 동작 카드 4장(어른께 말하기 더하기)을 맞추고, 짝에게 동작을 먼저 알려 준다.' },
      activity: {
        title: '더운 날·추운 날 몸 지키기 동작', tool: 'timer',
        teacher: '"너무 더워요! 그늘로 가요(옆으로 세 걸음) 물 마셔요(컵 드는 흉내) 쉬어요(앉아서 숨 고르기)." 동작 카드를 맞춘 뒤 반 전체가 교사를 따라 동작한다. "목이 안 말라도 물을 마셔요?"라는 물음에는 "목이 마르기 전에 조금씩 자주 마셔요"라고 말해 준다. 추운 날 동작(안으로 가요 → 몸 감싸요 → 어른께 말해요)도 같은 방법으로 해 본다.',
        task: '동작 카드를 차례대로 놓고 따라 해요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          { prompt: '더운 날 동작을 차례로 놓아요.', toolOptions: { title: '더운 날 동작', cards: ['쉬어요', '그늘로 가요', '물 마셔요'] }, target: { order: ['그늘로 가요', '물 마셔요', '쉬어요'] }, difficulty: 0.1,
            levels: { easy: { prompt: '더운 날 동작을 놓아요(2장).', toolOptions: { cards: ['물 마셔요', '그늘로 가요'] }, target: { order: ['그늘로 가요', '물 마셔요'] } },
              challenge: { prompt: '더운 날 동작을 놓아요(4장).', toolOptions: { cards: ['쉬어요', '어른께 말해요', '그늘로 가요', '물 마셔요'] }, target: { order: ['그늘로 가요', '물 마셔요', '쉬어요', '어른께 말해요'] } } } },
          { prompt: '선생님을 따라 동작해요.', free: true, toolOptions: { doneLabel: '동작을 따라 해 보았어요' }, difficulty: 0.1 },
          { prompt: '추운 날 동작을 차례로 놓아요.', toolOptions: { title: '추운 날 동작', cards: ['어른께 말해요', '안으로 가요', '몸 감싸요'] }, target: { order: ['안으로 가요', '몸 감싸요', '어른께 말해요'] }, difficulty: 0.15,
            levels: { easy: { prompt: '추운 날 동작을 놓아요(2장).', toolOptions: { cards: ['몸 감싸요', '안으로 가요'] }, target: { order: ['안으로 가요', '몸 감싸요'] } } },
            conclude: '더우면 그늘에서 물 마시고 쉬어요. 추우면 안으로 가서 감싸고 어른께 말해요.' },
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '아주 더운 날 한낮에는요?', options: ['그늘에서 쉬어요', '오래 뛰어요'], answer: '그늘에서 쉬어요' }] },
    }),
    HC({
      id: 'saf-disaster.e12.heat-cold.wrap.word-web', type: 'wrap', title: '몸 지키는 말 모으기',
      method: '몸 지키는 말 모으기', tool: 'mindmap', minutes: 7,
      levels: { easy: '교사가 카드를 읽어 주고 더워요·추워요에 낱말 하나씩을 함께 붙인다.', base: '낱말 네 개를 더워요·추워요 가지에 스스로 나누어 붙인다.', challenge: '붙인 낱말 가운데 집에서 할 일 하나를 골라 말한다.' },
      wrap: {
        teacher: '"더운 날, 추운 날 몸을 지키는 말을 모아 볼까요?" 가운데 \'몸 지키기\'의 두 가지(더워요·추워요)에 낱말을 나누어 붙이고 반 전체가 읽는다. "한낮 뛰기"를 붙이려는 학생에게 "가장 더운 한낮에 오래 뛰면 몸이 어떻게 될까요?"라고 묻는다. 출구 2번 뒤 오늘 집에서 해 볼 일 하나를 정하게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'sort', topic: '몸 지키기', slots: [{ id: 'hot', label: '더워요' }, { id: 'cold', label: '추워요' }], cards: ['그늘 쉬기', '목도리', '한낮 뛰기', '물 마시기', '장갑'] }, prompt: '더워요·추워요로 나누어요.', target: { sort: { hot: ['그늘 쉬기', '물 마시기'], cold: ['목도리', '장갑'] } }, difficulty: 0.15 },
          { type: 'choice', prompt: '추운 날 얇게 입어도 될까요?', options: ['뛰면 괜찮아요', '겹쳐 입어요', '반팔만 입어요'], answer: 1, difficulty: 0.1, explain: '추운 날은 여러 겹 입고 목·손목을 감싸요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '더운 날·추운 날 몸 지키기',
        items: [
          { type: 'table', prompt: '좋으면 ○, 안 되면 ×를 써요.', columns: ['행동', '○ / ×'], cells: [['그늘에서 쉬기', ''], ['한낮에 오래 뛰기', ''], ['목도리 하기', '']], answer: '○, ×, ○' },
          { type: 'draw', prompt: '집에서 해 볼 일 하나를 그려요.' },
        ],
      },
    }),
    HC({
      id: 'saf-disaster.e12.heat-cold.wrap.dress-up', type: 'wrap', title: '날씨에 맞게 옷 입히기',
      method: '날씨에 맞게 옷 입히기', tool: 'collage', minutes: 7,
      levels: { easy: '교사와 함께 목도리(빨강 긴 네모) 조각 하나와 모자(파랑 반원) 조각 하나를 붙인다.', base: '목도리·모자·장갑(노랑 동그라미 2개) 조각을 4개 이상 붙인다.', challenge: '붙인 뒤 그 옷을 입힌 까닭을 짝에게 말한다.' },
      wrap: {
        teacher: '"찬바람 부는 날이에요. 이 친구에게 무엇을 입혀 줄까요?" 빨강 긴 네모는 목도리, 파랑 반원은 모자, 노랑 동그라미는 장갑이라고 정하고 붙이게 한다. 활동지에서는 더운 날 친구에게 모자와 물병을 그려 주게 한다. 조각을 아무 데나 붙이는 학생에게 "목도리는 몸 어디에 둘러야 따뜻할까요?"라고 묻는다.',
        exitTicket: [
          { type: 'tool', tool: 'collage', options: { shapes: ['rect', 'semi', 'circle', 'star'], colors: ['빨강', '파랑', '노랑', '초록'], sizes: ['s', 'm', 'l'] }, prompt: '추운 날 목도리와 모자를 붙여요.', target: { has: [{ shape: 'rect', color: '빨강', min: 1 }, { shape: 'semi', color: '파랑', min: 1 }] }, difficulty: 0.15 },
          { type: 'choice', prompt: '아주 더운 날 밖에 나갈 때는요?', options: ['모자와 물병', '털장갑', '두꺼운 겉옷'], answer: 0, difficulty: 0.1, explain: '햇빛을 가리는 모자를 쓰고 물병을 챙겨요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '날씨에 맞게 입어요',
        items: [
          { type: 'draw', prompt: '더운 날 친구에게 모자와 물병을 그려 줘요.' },
          { type: 'check', prompt: '추운 날 감쌀 곳에 ✓ 해요.', options: ['목', '귀', '손목'] },
        ],
        easy: { note: '"목, 귀, 손목"을 떠올려요.', items: [{ type: 'draw', prompt: '목도리를 한 내 모습을 그려요.' }] },
      },
      notes: '콜라주 판은 옷 그림을 그리지 못해 빨강 긴 네모 = 목도리, 파랑 반원 = 모자, 노랑 동그라미 = 장갑으로 정해 붙인다. 사람 그림은 활동지에 그린다.',
    }),
  ];

  // =====================================================================================================
  // 2학년 · 주인 없는 수상한 물건은 만지지 않고 알리기
  const BAG = MOD('saf-disaster.e12.strange-bag', [2]);
  const SAY = [{ id: 'stop', text: '"만지지 마!"' }, { id: 'open', text: '"같이 열자!"', why: '열면 위험할 수 있어요. 함께 멀리 가자고 말해요.' }, { id: 'kick', text: '"발로 차 봐"', why: '발로 차도 위험해요. 만지지 않아요.' }];
  const T_BAG = [
    BAG({
      id: 'saf-disaster.e12.strange-bag.intro.bag-story', type: 'intro', title: '주인 없는 가방 이야기',
      method: '주인 없는 가방 이야기 듣기', tool: 'story', minutes: 6,
      levels: { easy: '교사가 그림 2장(어른께 알려요·가방을 열어요)을 들어 보이고 주인공이 한 일을 고르게 한다.', base: '그림 3장 가운데 주인공이 한 일을 고른다.', challenge: '고른 뒤 주인공에게 해 줄 말 한마디를 짝에게 말한다.' },
      intro: {
        teacher: '"서준이가 놀이터에서 아무도 없는 의자 위에 가방 하나를 봤어요. 서준이는 가방을 만지지 않고 멀리 떨어져서 경비원 아저씨께 알렸어요." 이야기를 들려준 뒤 시연 단추로 서준이가 한 일 카드가 담기는 모습을 보인다. "안에 장난감이 있을지도 몰라요"라는 말이 나오면 "안에 무엇이 있는지 모를 때는 누가 살펴보는 게 좋을까요?"라고 되묻는다.',
        student: '서준이는 무엇을 했을까요? 그림을 보고 손으로 가리켜 보아요.',
        demo: { tool: 'story', options: { mode: 'pick', basket: '서준이가 한 일', cards: [{ id: 'tell', text: '어른께 알려요' }, { id: 'open', text: '가방을 열어요' }, { id: 'kick', text: '발로 차요' }], shuffle: false }, sequence: [{ pick: ['tell'] }] },
        art: { draw: 'a paper playground with an unattended paper bag on a bench, a paper child standing far away and pointing it out to a security guard', banner: '만지지 않고 알려요' },
      },
      notes: '물건 안에 무엇이 있을지 무섭게 이야기하지 않는다. "모르는 물건은 어른이 살펴본다"로 맺는다.',
    }),
    BAG({
      id: 'saf-disaster.e12.strange-bag.intro.find-odd', type: 'intro', title: '주인 없이 놓인 물건 찾기',
      method: '그림에서 주인 없는 물건 찾기', tool: 'emotion', minutes: 5,
      levels: { easy: '교사가 놀이터 그림에서 주인 없는 가방 하나를 크게 가리키며 함께 찾는다.', base: '카드 4장 가운데 주인 없이 놓인 물건 2개를 고른다.', challenge: '찾은 뒤 어떻게 할지(멀리 가서 알리기)를 손짓으로 보인다.' },
      intro: {
        teacher: '"이 놀이터 그림에서 주인이 없는 물건은 무엇일까요?" 시연 단추로 아무도 곁에 없는 물건만 바구니에 담기는 모습을 보여 준다. "친구가 놓고 간 거예요"라는 말이 나오면 "누구 것인지 모를 때 내가 열어 볼까요, 어른께 말할까요?"라고 되묻는다. 오늘은 주인 없는 수상한 물건을 보면 만지지 않고 알리는 법을 배운다고 밝힌다.',
        student: '그림에서 주인이 없는 물건을 찾아 손으로 가리켜 보아요.',
        demo: { tool: 'emotion', options: { mode: 'pick', basket: '주인이 없어요', cards: [{ id: 'bag', text: '혼자 놓인 가방' }, { id: 'mom', text: '엄마가 든 가방' }, { id: 'box', text: '놓고 간 상자' }, { id: 'ball', text: '친구가 찬 공' }], shuffle: false }, sequence: [{ pick: ['bag', 'box'] }] },
        art: { draw: 'a busy paper playground where children play with a ball and parents hold bags, while one paper box sits alone under a slide', banner: '주인 없는 물건을 찾아요' },
      },
    }),
    BAG({
      id: 'saf-disaster.e12.strange-bag.activity.tell-order', type: 'activity', title: '주인 없는 물건 알리는 차례',
      method: '알리는 차례 카드 3장 놓기', tool: 'timeline', minutes: 10,
      levels: { easy: '첫 카드("멈춰요")가 놓여 있어 남은 2장만 놓고, 놓으면 바로 맞는지 알려 준다.', base: '카드 3장을 차례대로 놓는다.', challenge: '"열어 봐요" 같은 틀린 카드 1장을 빼고 놓은 뒤, 그 차례대로 동작으로 해 본다.' },
      activity: {
        title: '수상한 물건을 봤을 때 차례', tool: 'timeline',
        teacher: '"주인 없는 가방을 봤어요. 맨 먼저 무엇을 할까요?" 카드를 놓은 뒤 차례대로 몸으로 해 본다(제자리 멈춤 → 뒤로 여러 걸음 → 손 들고 "선생님!"). "가까이 가서 이름표를 봐요"를 하려는 학생에게 "이름표를 보려면 가방에 손이 닿겠지요? 누가 보면 좋을까요?"라고 묻는다. 친구들이 모여 구경하면 함께 멀리 가자고 말한다는 점을 짚는다.',
        task: '카드를 차례대로 놓아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          TL('놀이터에 가방이 있어요. 차례로 놓아요.', [{ id: 'stop', text: '멈춰요' }, { id: 'far', text: '멀리 가요' }, { id: 'tell', text: '어른께 알려요' }], { id: 'open', text: '열어 봐요' }, 0.15),
          TL('화장실 앞에 상자가 있어요.', [{ id: 'halt', text: '멈춰요' }, { id: 'back', text: '뒤로 물러나요' }, { id: 'teacher', text: '선생님께 말해요' }], { id: 'shake', text: '흔들어 봐요' }, 0.2),
          TL('정류장에 봉지가 있어요.', [{ id: 'freeze', text: '멈춰요' }, { id: 'away', text: '떨어져 서요' }, { id: 'parent', text: '엄마께 말해요' }], { id: 'peek', text: '들여다봐요' }, 0.25, { conclude: '주인 없는 물건은 멈추고, 멀리 떨어지고, 어른께 알려요.' }),
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '주인 없는 물건은 ___ 않고 어른께 알려요.', answer: '만지지' }] },
    }),
    BAG({
      id: 'saf-disaster.e12.strange-bag.activity.fork', type: 'activity', title: '갈림길: 가방을 열어 볼까?',
      method: '그림 갈림길에서 고르기', tool: 'dilemma', minutes: 8,
      levels: { easy: '첫 갈림에서 보기 2개 가운데 한 번만 고른다.', base: '고른 뒤 이어지는 장면에서 한 번 더 고른다(갈림 2번).', challenge: '갈림 2번을 지나 끝에서 친구가 만지려 할 때 할 말 카드 3장 가운데 하나를 고른다.' },
      activity: {
        title: '주인 없는 물건 앞에서 고르기', tool: 'dilemma',
        teacher: '"주인 없는 가방이 있어요. 열어 볼까요, 어른께 갈까요?" 고르기 전에 반 전체가 손을 들어 어느 쪽인지 먼저 보이게 한다. "살짝만 열어 봐요"를 고른 학생에게 "살짝 여는 것도 만지는 거예요. 안에 무엇이 있는지 모를 때는 누가 살펴볼까요?"라고 묻는다. 다른 길도 끝까지 가 보며 결과를 견주고, 친구에게 "만지지 마!"라고 말하는 것도 친구를 지키는 일이라고 짚는다.',
        task: '장면마다 할 일을 고르고 결과를 봐요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          DILEMMA('놀이터에 가방이 있어요. 골라요.', { text: '놀이터 의자에 주인 없는 가방이 있어요.', motif: 'house', choices: [
            { id: 'open', text: '열어 봐요', result: '안에 무엇이 있는지 몰라 위험해요.', why: '모르는 물건은 열지 않아요. 어른께 알려요.' },
            { id: 'go', text: '멀리 가서 어른께 가요', result: '경비원 아저씨께 갔어요.', easyEnding: '경비원 아저씨가 살펴보셨어요.', next: { text: '친구가 "열어 보자" 해요.', choices: [
              { id: 'no', text: '"만지지 마!" 말해요', result: '친구도 멀리 떨어졌어요.', ending: '어른께 알리고 친구도 지켰어요.' },
              { id: 'join', text: '같이 가 봐요', result: '가방 가까이 모여 버렸어요.', why: '가까이 모이지 않고 함께 멀리 있어요.' }] } }] },
          ['go', 'no'], SAY, 'stop', 0.15),
          DILEMMA('교문 앞에 상자가 있어요. 골라요.', { text: '교문 앞에 주인 없는 상자가 있어요.', motif: 'house', choices: [
            { id: 'kick', text: '발로 차 봐요', result: '상자가 굴러 위험할 수 있어요.', why: '발로 차는 것도 만지는 거예요.' },
            { id: 'tell', text: '선생님께 알려요', result: '선생님이 "고마워" 하세요.', easyEnding: '선생님이 상자를 살펴보셨어요.', next: { text: '선생님이 "여기서 기다려" 하세요.', choices: [
              { id: 'wait', text: '멀리서 기다려요', result: '선생님이 다른 어른을 부르셨어요.', ending: '멀리서 기다려서 안전해요.' },
              { id: 'peek', text: '다시 가서 봐요', result: '상자 가까이 갔어요.', why: '알린 뒤에는 다시 가지 않고 기다려요.' }] } }] },
          ['tell', 'wait'], SAY, 'stop', 0.2),
          DILEMMA('복도에 봉지가 있어요. 골라요.', { text: '복도 구석에 주인 없는 봉지가 있어요.', motif: 'house', choices: [
            { id: 'move', text: '쓰레기통에 버려요', result: '봉지를 만져서 위험할 수 있어요.', why: '버리려고 해도 만지지 않아요.' },
            { id: 'away', text: '떨어져서 알려요', result: '선생님께 말씀드렸어요.', easyEnding: '선생님이 봉지를 살펴보셨어요.', next: { text: '동생들이 봉지 쪽으로 와요.', choices: [
              { id: 'warn', text: '"가지 마!" 말해요', result: '동생들이 멈춰 섰어요.', ending: '나도 동생들도 안전해요.' },
              { id: 'look', text: '같이 구경해요', result: '모두 봉지 곁에 모였어요.', why: '구경하지 않고 멀리 있게 해요.' }] } }] },
          ['away', 'warn'], SAY, 'stop', 0.25, { conclude: '주인 없는 물건은 만지지 않고, 멀리 떨어져서, 어른께 알려요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '친구가 가방을 열려고 해요. 무슨 말을 해요?', options: ['"만지지 마!"', '"같이 열자!"'], answer: '"만지지 마!"' }] },
      notes: '정답 길이 있는 갈림길이다. 끝 카드는 계획의 "친구가 만지려 할 때 할 말"이며 dilemma 의 근거 카드 칸으로 쓴다.',
    }),
    BAG({
      id: 'saf-disaster.e12.strange-bag.wrap.role-play', type: 'wrap', title: '어른께 알리는 말 역할놀이',
      method: '어른께 알리는 말 역할놀이', tool: 'timer', minutes: 7,
      levels: { easy: '교사가 대사를 한 마디씩 불러 주고 짝과 따라 한다.', base: '대사 카드 세 장의 차례를 맞추고 짝끼리 학생·선생님이 되어 말한다.', challenge: '역할을 바꿔 한 번 더 하고, 어디에 있는지("놀이터 의자 위")까지 넣어 말한다.' },
      wrap: {
        teacher: '"선생님! 저기 가방이 있는데 주인이 없어요!" 대사 카드를 차례대로 놓은 뒤 짝과 한 명은 학생, 한 명은 선생님이 되어 말해 본다. 작은 목소리로 말하는 학생에게 "어디에 있는지 또박또박 말하면 어른이 빨리 찾을 수 있어요"라고 말해 준다. 출구 2번에서 "친구랑 열어 봐요"를 고른 학생과는 함께 "만지지 마!"를 한 번 더 말해 본다.',
        exitTicket: [
          CHANT('알리는 말', ['선생님!', '저기 가방이', '주인이 없어요'], '알리는 말을 차례로 놓아요.'),
          { type: 'choice', prompt: '주인 없는 상자를 봤어요.', options: ['친구랑 열어 봐요', '어른께 알려요', '집에 가져가요'], answer: 1, difficulty: 0.1, explain: '만지지 않고 어른께 알려요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '선생님, 주인 없는 가방이 있어요!',
        items: [
          { type: 'blank', prompt: '알리는 말을 따라 써요.', text: '선생님, 저기 ___ 없는 가방이 있어요!', answer: '주인' },
          { type: 'draw', prompt: '어른께 알리는 내 모습을 그려요.' },
        ],
      },
    }),
    BAG({
      id: 'saf-disaster.e12.strange-bag.wrap.word-web', type: 'wrap', title: '알릴 어른 모으기',
      method: '알릴 어른 모으기', tool: 'mindmap', minutes: 7,
      levels: { easy: '교사가 카드를 읽어 주고 알릴 어른 두 명을 함께 고른다.', base: '알릴 어른 세 명(선생님·경비원·부모님)을 스스로 골라 붙인다.', challenge: '고른 뒤 학교 밖에서 알릴 수 있는 어른을 한 명 더 말한다.' },
      wrap: {
        teacher: '"주인 없는 수상한 물건을 보면 누구에게 알릴까요?" 가운데 \'알려요\'에 알릴 어른을 붙이고 반 전체가 이름을 읽는다. "모르는 아이"를 붙이려는 학생에게 "그 아이도 어린이예요. 누가 살펴봐 줄 수 있을까요?"라고 묻는다. 학교 밖에서는 가게 주인·역무원처럼 그곳에서 일하는 어른도 있다고 말해 준다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'pick', topic: '알려요', basket: '알릴 어른', cards: ['선생님', '모르는 아이', '경비원', '혼자 열기', '부모님'] }, prompt: '알릴 어른을 모아요.', target: { pick: ['선생님', '경비원', '부모님'] }, difficulty: 0.15 },
          { type: 'choice', prompt: '친구들이 가방 곁에 모여요.', options: ['같이 구경해요', '멀리 가자고 해요', '발로 차요'], answer: 1, difficulty: 0.1, explain: '가까이 모이지 않고 함께 멀리 떨어져요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '알릴 어른을 기억해요',
        items: [
          { type: 'check', prompt: '알릴 수 있는 어른에 ✓ 해요.', options: ['선생님', '경비원', '부모님'] },
          { type: 'table', prompt: '좋으면 ○, 안 되면 ×를 써요.', columns: ['행동', '○ / ×'], cells: [['가방 열어 보기', ''], ['멀리 떨어지기', ''], ['어른께 알리기', '']], answer: '×, ○, ○' },
        ],
      },
    }),
  ];

  // =====================================================================================================
  // 좋아요·안돼요 바구니(sortboard 글 카드 모드): 기본 6장(작은 판 5장), 쉬움 4장(작은 판 3장), 도전 기본 + 헷갈리는 카드 2장(안돼요)
  const OKNO = ['좋아요', '안돼요'];
  const GB = (prompt, ok, no, hard, d, small, more) => {
    const S = (a, b) => ({ 좋아요: a, 안돼요: b });
    const base = small ? [ok[0], no[0], ok[1], no[1], ok[2]] : [ok[0], no[0], ok[1], no[1], ok[2], no[2]];
    const easy = small ? [ok[0], no[0], ok[1]] : [ok[0], no[0], ok[1], no[1]];
    const pick = (cards, xs) => xs.filter((x) => cards.includes(x));
    const chal = [base[0], hard[0], ...base.slice(1, 4), hard[1], ...base.slice(4)];
    return {
      prompt, toolOptions: { slots: OKNO, cards: base }, target: { sort: S(pick(base, ok), pick(base, no)) }, difficulty: d,
      levels: {
        easy: { prompt: `${cut(prompt)}(${easy.length}장).`, toolOptions: { cards: easy }, target: { sort: S(pick(easy, ok), pick(easy, no)) } },
        challenge: { prompt: `${cut(prompt)}(${chal.length}장).`, toolOptions: { cards: chal }, target: { sort: S(pick(chal, ok), [...pick(base, no), ...hard]) } },
      },
      ...more,
    };
  };
  const OXT = (rows, answer) => ({ type: 'table', prompt: '좋으면 ○, 안 되면 ×를 써요.', columns: ['행동', '○ / ×'], cells: rows.map((r) => [r, '']), answer });
  const GBLV = (small, chal) => ({ easy: `카드 ${small ? 3 : 4}장, 바구니에 넣으면 바로 맞는지 알려 준다.`, base: `카드 ${small ? 5 : 6}장을 좋아요·안돼요 바구니에 다 넣은 뒤 확인한다.`, challenge: `카드 ${small ? 7 : 8}장(헷갈리는 카드 2장 더), 다 넣은 뒤 ${chal}.` });

  T_FIRE.push(FIRE({
    id: 'saf-disaster.e12.fire-shout.activity.good-bad', type: 'activity', title: '불 날 때 좋아요·안돼요',
    method: '좋아요/안돼요 카드 나누기', tool: 'sortboard', minutes: 14,
    levels: GBLV(false, '안돼요 카드 하나를 골라 왜 안 되는지 짝에게 말한다'),
    activity: {
      title: '불 날 때 할 일 나누기', tool: 'sortboard',
      teacher: '"불이 났을 때 이렇게 하면 좋아요일까요, 안돼요일까요?" 카드를 넣을 때마다 반 전체가 소리 내어 읽는다. "옷장에 숨기"를 좋아요에 넣는 학생에게 "숨으면 소방관이 나를 찾을 수 있을까요? 연기는 옷장 안까지 들어와요"라고 묻는다. "장난감 챙기기"에는 "물건은 다시 살 수 있지만 나는 하나뿐이에요"라고 말해 준다.',
      task: '카드를 좋아요·안돼요 바구니에 넣어요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
      items: [
        GB('집에 불이 났어요. 나누어요.', ['불이야 외치기', '어른께 알리기', '몸 낮추기'], ['옷장에 숨기', '장난감 챙기기', '혼자 끄기'], ['책상 밑 숨기', '창문 열어 보기'], 0.1),
        GB('교실에 연기가 나요. 나누어요.', ['코·입 가리기', '선생님 따라가기', '줄 서기'], ['가방 챙기기', '구경하기', '뛰어 앞지르기'], ['사물함에 숨기', '친구 밀기'], 0.15),
        GB('타는 냄새가 나요. 나누어요.', ['불이야 말하기', '어른 부르기', '밖으로 나가기'], ['모른 척하기', '불 쪽 가기', '이불 속 숨기'], ['물 뜨러 가기', '엘리베이터 타기'], 0.2, { conclude: '불이 나면 숨지 말고 "불이야!" 외치고 어른께 알려요.' }),
      ],
    },
    worksheet: { items: [OXT(['불이야 외치기', '옷장에 숨기', '어른께 알리기', '장난감 챙기기'], '○, ×, ○, ×')] },
  }));

  T_QC.push(QC({
    id: 'saf-disaster.e12.quake-cover.activity.good-bad', type: 'activity', title: '흔들릴 때 좋아요·안돼요',
    method: '흔들릴 때 좋아요/안돼요 나누기', tool: 'sortboard', minutes: 14,
    levels: GBLV(false, '안돼요 카드 하나를 좋아요로 고쳐 말한다("창가에 서기 → 창가에서 떨어지기")'),
    activity: {
      title: '흔들릴 때 할 일 나누기', tool: 'sortboard',
      teacher: '"교실이 흔들려요. 이렇게 하면 좋아요일까요, 안돼요일까요?" 카드를 넣을 때마다 반 전체가 읽는다. "뛰어나가기"를 좋아요에 넣는 학생에게 "흔들리는 동안 뛰면 넘어지거나 떨어지는 것에 맞을 수 있어요. 어디서 기다릴까요?"라고 묻는다. 창가와 책장은 멀리하고 책상 아래에서 멈출 때까지 기다린다는 점을 짚는다.',
      task: '카드를 좋아요·안돼요 바구니에 넣어요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
      items: [
        GB('교실이 흔들려요. 나누어요.', ['책상 아래로', '머리 감싸기', '책상 다리 잡기'], ['뛰어나가기', '창가에 서기', '책장에 기대기'], ['문으로 달리기', '일어나 구경'], 0.1),
        GB('집이 흔들려요. 나누어요.', ['식탁 아래로', '방석으로 머리', '멈출 때까지'], ['베란다 나가기', '엘리베이터', '창문 열기'], ['계단 뛰기', '어항 옆 앉기'], 0.15),
        GB('흔들림이 계속돼요. 나누어요.', ['기다리기', '두 손 머리에', '선생님 말 듣기'], ['밖으로 뛰기', '책상 밖 나오기', '창밖 보기'], ['혼자 집에 가기', '울며 달리기'], 0.2, { conclude: '흔들리면 책상 아래에서 머리를 감싸고 멈출 때까지 기다려요.' }),
      ],
    },
    worksheet: { items: [OXT(['책상 아래로', '뛰어나가기', '머리 감싸기', '창가에 서기'], '○, ×, ○, ×')] },
  }));

  T_HOT.push(HOT({
    id: 'saf-disaster.e12.hot-touch.activity.good-bad', type: 'activity', title: '데었을 때 좋아요·안돼요',
    method: '데었을 때 좋아요/안돼요 나누기', tool: 'sortboard', minutes: 10,
    levels: GBLV(true, '안돼요 카드 하나를 고쳐 말한다("참고 숨기기 → 어른 부르기")'),
    activity: {
      title: '데었을 때 나누기', tool: 'sortboard',
      teacher: '"앗 뜨거! 데었을 때 이렇게 하면 좋아요일까요, 안돼요일까요?" 카드를 넣을 때마다 반 전체가 읽는다. "참고 숨기기"를 좋아요에 넣는 학생에게 "참으면 어른이 내가 다친 걸 알 수 있을까요?"라고 묻는다. 데인 곳은 문지르지 않고 흐르는 찬물에 댄다는 점을 짚는다.',
      task: '카드를 좋아요·안돼요 바구니에 넣어요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
      items: [
        GB('손이 데었어요. 나누어요.', ['찬물로 식히기', '어른 부르기', '떨어지기'], ['참고 숨기기', '그냥 두기'], ['혼자 참기', '문지르기'], 0.1, true),
        GB('친구가 데었어요. 나누어요.', ['선생님 부르기', '괜찮아 묻기', '찬물로 데려가기'], ['못 본 척', '만져 보기'], ['비밀로 하기', '혼자 두기'], 0.15, true),
        GB('뜨거운 물이 쏟아졌어요.', ['물러나기', '흐르는 찬물', '도와주세요'], ['그 위 걷기', '말 안 하기'], ['닦으러 가기', '숨어 있기'], 0.2, true, { conclude: '데면 떨어지고 흐르는 찬물에 대고 어른을 불러요.' }),
      ],
    },
    worksheet: { items: [{ type: 'choice', prompt: '데었을 때 할 일에 ○ 해요.', options: ['찬물로 식혀요', '참고 숨겨요'], answer: '찬물로 식혀요' }] },
  }));

  T_RAIN.push(RAIN({
    id: 'saf-disaster.e12.rain-wind.activity.good-bad', type: 'activity', title: '비바람 날 좋아요·안돼요',
    method: '비바람 날 좋아요/안돼요 나누기', tool: 'sortboard', minutes: 10,
    levels: GBLV(false, '안돼요 카드 하나의 까닭을 짝에게 말한다'),
    activity: {
      title: '비바람 날 나누기', tool: 'sortboard',
      teacher: '"비바람이 센 날 이렇게 하면 좋아요일까요, 안돼요일까요?" 카드를 넣을 때마다 반 전체가 읽는다. "냇가 가기"를 좋아요에 넣는 학생에게 "비가 많이 오면 냇물이 빨라지고 불어나요. 발이 빠지면 어떻게 될까요?"라고 묻는다. 길에 떨어진 줄은 만지지 않고 어른께 알린다는 점도 짚는다.',
      task: '카드를 좋아요·안돼요 바구니에 넣어요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
      items: [
        GB('비가 많이 와요. 나누어요.', ['우산 쓰기', '어른 손 잡기', '천천히 걷기'], ['냇가 가기', '물웅덩이 첨벙', '뛰어가기'], ['다리 위 구경', '도랑 보기'], 0.1),
        GB('바람이 세게 불어요. 나누어요.', ['건물 안 있기', '어른과 다니기', '창문 닫기'], ['간판 밑 서기', '연 날리기', '나무 오르기'], ['우산 들고 뛰기', '전봇대 옆 서기'], 0.15),
        GB('비바람 뒤 길이에요. 나누어요.', ['웅덩이 피하기', '어른께 묻기', '넓은 길로'], ['냇물 구경', '떨어진 줄 만지기', '젖은 계단 뛰기'], ['물 빠진 냇가', '혼자 산책'], 0.2, { conclude: '비바람 센 날은 냇가·간판 밑을 피하고 어른과 함께 다녀요.' }),
      ],
    },
    worksheet: { items: [OXT(['우산 쓰기', '냇가 가기', '어른 손 잡기', '간판 밑 서기'], '○, ×, ○, ×')] },
  }));

  T_EXIT.push(EXIT({
    id: 'saf-disaster.e12.exit-sign.activity.line-good-bad', type: 'activity', title: '줄 서기 좋아요·안돼요',
    method: '줄 서기 좋아요/안돼요 나누기', tool: 'sortboard', minutes: 13,
    levels: GBLV(false, '안돼요 카드 하나를 바르게 고쳐 말한다'),
    activity: {
      title: '줄 서기 좋아요·안돼요', tool: 'sortboard',
      teacher: '"경보가 울렸어요. 이렇게 하면 좋아요일까요, 안돼요일까요?" 카드를 넣을 때마다 반 전체가 읽는다. "앞질러 가기"를 좋아요에 넣는 학생에게 "앞지르다 부딪혀 넘어지면 뒤 친구들은 어떻게 될까요?"라고 묻는다. 엘리베이터는 타지 않고 계단으로 내려간다는 점을 짚는다.',
      task: '카드를 좋아요·안돼요 바구니에 넣어요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
      items: [
        GB('경보가 울려요. 나누어요.', ['줄 서기', '조용히 걷기', '표시 따라가기'], ['친구 밀기', '뛰기', '엘리베이터'], ['앞질러 가기', '떠들며 걷기'], 0.1),
        GB('계단을 내려가요. 나누어요.', ['손잡이 잡기', '한 칸씩', '앞 친구 보기'], ['두 칸씩 뛰기', '계단서 밀기', '멈춰 놀기'], ['거꾸로 오르기', '난간 타기'], 0.15),
        GB('운동장에 모여요. 나누어요.', ['줄 맞춰 앉기', '선생님 곁', '이름 대답'], ['교실로 가기', '혼자 놀기', '숨바꼭질'], ['물건 찾으러', '친구 찾아 뛰기'], 0.2, { conclude: '경보가 울리면 밀지 않고 줄 서서 표시를 따라 걸어요.' }),
      ],
    },
    worksheet: { items: [{ type: 'choice', prompt: '줄 서서 나갈 때 ○ 해요.', options: ['밀지 않고 걸어요', '앞질러 뛰어요'], answer: '밀지 않고 걸어요' }] },
  }));

  T_QO.push(QO({
    id: 'saf-disaster.e12.quake-out.activity.yard-good-bad', type: 'activity', title: '운동장에서 좋아요·안돼요',
    method: '운동장에서 좋아요/안돼요 나누기', tool: 'sortboard', minutes: 13,
    levels: GBLV(false, '안돼요 카드 하나의 까닭을 짝에게 말한다'),
    activity: {
      title: '운동장에서 나누기', tool: 'sortboard',
      teacher: '"운동장에 나왔어요. 이렇게 하면 좋아요일까요, 안돼요일까요?" 카드를 넣을 때마다 반 전체가 읽는다. "나무 밑 그늘"을 좋아요에 넣는 학생에게 "또 흔들리면 나뭇가지가 어디로 떨어질까요?"라고 묻는다. 건물·담장·골대에서 먼 가운데에 모이고, 물건을 가지러 교실로 돌아가지 않는다는 점을 짚는다.',
      task: '카드를 좋아요·안돼요 바구니에 넣어요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
      items: [
        GB('운동장에 왔어요. 나누어요.', ['가운데 모이기', '선생님 곁', '줄 맞춰 앉기'], ['건물 옆', '골대 옆', '담장 옆'], ['나무 밑 그늘', '창문 아래'], 0.1),
        GB('나가는 길이에요. 나누어요.', ['가방 머리에', '계단으로', '손잡이 잡기'], ['엘리베이터', '뛰어 앞지르기', '맨머리로 뛰기'], ['신발장 들르기', '교실 다시 가기'], 0.15),
        GB('기다리는 동안이에요. 나누어요.', ['자리 지키기', '이름 대답하기', '선생님 말 듣기'], ['교실 가기', '담장 오르기', '혼자 집에'], ['물건 가지러', '친구 찾아 뛰기'], 0.2, { conclude: '운동장에서는 건물·담장·골대에서 먼 가운데에 모여요.' }),
      ],
    },
    worksheet: { items: [OXT(['가운데 모이기', '골대 옆', '선생님 곁', '담장 옆'], '○, ×, ○, ×')] },
  }));

  T_HC.push(HC({
    id: 'saf-disaster.e12.heat-cold.activity.hot-good-bad', type: 'activity', title: '더운 날 좋아요·안돼요',
    method: '더운 날 좋아요/안돼요 나누기', tool: 'sortboard', minutes: 10,
    levels: GBLV(true, '안돼요 카드 하나를 고쳐 말한다'),
    activity: {
      title: '더운 날 나누기', tool: 'sortboard',
      teacher: '"아주 더운 날 이렇게 하면 좋아요일까요, 안돼요일까요?" 카드를 넣을 때마다 반 전체가 읽는다. "한낮에 오래 뛰기"를 좋아요에 넣는 학생에게 "가장 더운 한낮에 오래 뛰면 몸이 어떤 신호를 보낼까요?"라고 묻는다. 어지럽거나 몸이 이상하면 참지 말고 어른께 말한다는 점을 짚는다.',
      task: '카드를 좋아요·안돼요 바구니에 넣어요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
      items: [
        GB('아주 더운 날이에요. 나누어요.', ['그늘에서 쉬기', '물 마시기', '모자 쓰기'], ['한낮에 오래 뛰기', '물 참기'], ['햇볕에 눕기', '두꺼운 옷'], 0.1, true),
        GB('체육 시간에 더워요. 나누어요.', ['쉬었다 하기', '물 자주', '어지러우면 말해'], ['끝까지 참기', '물 안 마시기'], ['얼음만 먹기', '친구랑 더 뛰기'], 0.15, true),
        GB('더운 날 밖에 나가요. 나누어요.', ['물병 챙기기', '그늘로 걷기', '어른과 함께'], ['한낮 놀이터', '모자 벗기'], ['뜨거운 미끄럼틀', '맨발로 걷기'], 0.2, true, { conclude: '더운 날은 그늘에서 쉬고 물을 자주 마셔요. 어지러우면 어른께 말해요.' }),
      ],
    },
    worksheet: { items: [{ type: 'choice', prompt: '더운 날 한낮에 ○ 해요.', options: ['그늘에서 물 마셔요', '오래 뛰어 놀아요'], answer: '그늘에서 물 마셔요' }] },
  }));

  T_BAG.push(BAG({
    id: 'saf-disaster.e12.strange-bag.activity.touch-sort', type: 'activity', title: '수상한 물건 앞에서 나누기',
    method: '만져요/안 만져요 나누기', tool: 'sortboard', minutes: 10,
    levels: GBLV(false, '안돼요 카드 하나의 까닭을 짝에게 말한다'),
    activity: {
      title: '수상한 물건 나누기', tool: 'sortboard',
      teacher: '"주인 없는 가방 앞이에요. 이렇게 하면 좋아요일까요, 안돼요일까요?" 카드를 넣을 때마다 반 전체가 읽는다. "이름표 보기"를 좋아요에 넣는 학생에게 "이름표를 보려면 가방에 손이 닿겠지요? 누가 살펴보면 좋을까요?"라고 묻는다. 버리거나 옮겨 주는 것도 만지는 것이라 하지 않는다는 점을 짚는다.',
      task: '카드를 좋아요·안돼요 바구니에 넣어요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
      items: [
        GB('놀이터에 가방이 있어요. 나누어요.', ['멀리 가기', '어른께 알리기', '멈추기'], ['열어 보기', '발로 차기', '들고 가기'], ['이름표 보기', '흔들어 보기'], 0.1),
        GB('교문 앞에 상자가 있어요. 나누어요.', ['선생님께 말하기', '친구도 멀리', '기다리기'], ['모여 구경', '두드려 보기', '냄새 맡기'], ['사진 찍으러', '버려 주기'], 0.15),
        GB('정류장에 봉지가 있어요. 나누어요.', ['떨어져 서기', '엄마께 말하기', '만지지 마 말하기'], ['들여다보기', '주워 가기', '밟아 보기'], ['살짝 만지기', '동생과 구경'], 0.2, { conclude: '주인 없는 물건은 만지지 않고 멀리 떨어져서 어른께 알려요.' }),
      ],
    },
    worksheet: { items: [OXT(['멀리 가기', '열어 보기', '어른께 알리기', '발로 차기'], '○, ×, ○, ×')] },
  }));

  PaperLessons.registerModules([].concat(T_FIRE, T_QC, T_HOT, T_RAIN, T_EXIT, T_QO, T_HC, T_BAG));
})();
