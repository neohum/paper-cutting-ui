/* 창체 계기교육 독도교육 — 초1-2 모듈 내용(edu-module.v1). 형식·작성 규칙: MODULES_BUILD.md, 계획: framework/events-auto.json 의 dokdo 초1-2.
 * 근거: 교육부 「독도교육 활성화 계획」(2025) — 교과·창체 통합 연 10시간 이상 권장(학교급 공통), 학교급별 내용체계(2011) 초등 '독도의 중요성'
 *   (자연환경·지리적 특성). sources/changche/research-days.md 2절. 초1-2 공식 세부 내용체계는 없다(체계도 source '근거 약함').
 * 초1-2 기준: 독도의 자리(동쪽 바다·울릉도 이웃)·생김새(동도·서도·바위섬)·생물·지키는 사람·아끼는 마음까지만 다룬다.
 *   다른 나라·다른 나라 사람을 탓하거나 견주는 말은 쓰지 않는다(BRIEF_EVENTS.md). 수치(거리·넓이·개수·연도)는 쓰지 않는다.
 *   장면·인물은 직접 지은 것이고 실존 인물을 등장시키지 않는다. 지도는 실제 지도가 아니라 단순한 칸 지도(그림)다.
 * 주제 10개(1학년 5 · 2학년 5) × 도입 2 · 활동 4 · 정리 2 = 80모듈.
 *
 * 사람 확인: (근거 파일 research-*.md 에는 독도 자연·지리 세부 사실이 없다 — 아래 문장은 모두 공식 자료와 대조가 필요하다)
 *  - 독도는 우리나라 동쪽 끝, 동해에 있는 섬이고 울릉도와 가까운 이웃 섬이다(맑은 날 울릉도에서 보인다는 교사 메모 포함)
 *      — 모든 g1-where·g2-east 모듈. 확인처: 외교부 독도 누리집, 동북아역사재단 독도체험관.
 *  - 독도는 경상북도 울릉군에 속한다 — dokdo.e12.g2-intro.intro.map, g2-intro.activity.three. 확인처: 외교부 독도 누리집, 경상북도 사이버독도.
 *  - 독도는 동도·서도 두 큰 섬과 둘레의 작은 바위섬들로 이루어진다, 동도가 동쪽(오른쪽)·서도가 서쪽(왼쪽)이다 — g1-shape 모든 모듈. 확인처: 외교부, 동북아역사재단.
 *  - 동도에 등대·독도경비대·배가 닿는 곳(선착장)이 있고, 서도에 주민이 지내는 집(숙소)이 있다
 *      — g1-shape.activity.name, g2-rock.activity.place, g1-people 모듈. 확인처: 경상북도 사이버독도, 해양수산부(항로표지), 외교부.
 *  - 독도는 바위·절벽이 많은 섬이고 큰 숲·모래사장·강이 없다 — g1-shape.activity.rock, g2-rock 모듈. 확인처: 동북아역사재단, 국립해양조사원.
 *  - 괭이갈매기가 독도에서 둥지를 틀고 새끼를 기른다(바위 위·바위틈 풀밭에 둥지, 봄에 알), 울음소리가 고양이 소리와 닮아 이름이 붙었다
 *      — g1-life 모듈, g2-rock 모듈. 확인처: 국가유산청(독도 천연보호구역), 동북아역사재단 독도체험관.
 *  - 독도 바위틈에 해국(연보라 꽃, 늦여름~가을)·땅채송화(노란 별 모양 꽃, 통통한 잎)가 자란다 — g1-life.intro.flower, g1-life.activity.card, g1-life.wrap.art.
 *      확인처: 동북아역사재단 독도체험관, 국립생물자원관.
 *  - 독도 바다에 물고기·오징어·새우·전복·소라·홍합·문어·해삼·성게와 미역·감태·대황·모자반이 산다
 *      — g1-sea 모듈, g2-sea.activity.sort, g2-sea.intro.market. 확인처: 국립수산과학원, 해양수산부 독도 해양생태 자료.
 *  - 독도경비대원이 섬을 지키고, 등대(항로표지)가 밤에 불을 밝혀 배의 길을 알린다 — g1-people 모듈, g2-sea 모듈. 확인처: 경상북도경찰청, 해양수산부.
 *  - 독도에는 육지 항구에서 배를 타고 울릉도를 거쳐 간다 — g2-way 모듈. 확인처: 울릉군, 경상북도.
 *  - 독도는 생물을 보호하는 섬이라 꽃을 꺾거나 새를 쫓거나 돌을 가져가면 안 된다 — g1-life.activity.good, g2-way.activity.safe. 확인처: 국가유산청.
 *  - 놀이 값(미역 300원 등)과 그림그래프 수는 수업용 가상 값이다(실제 값 아님) — g2-sea.activity.shop, g1-sea.activity.count. */
(function () {
  const MOD = (topic, grades) => (o) => Object.assign({ schema: 'edu-module.v1', domain: 'dokdo', band: '초1-2', topic, grades }, o);
  const MOOD = { type: 'mood', prompt: '오늘 공부를 마친 내 마음은 어떤가요?' };
  const cut = (p) => p.replace(/\.$/, '');

  // ---- 칸 지도(그림): 우리나라(6×4) — 땅은 가운데 세 줄, 둘레는 바다 ----
  const LAND = [];
  for (let c = 1; c <= 3; c++) for (let r = 0; r <= 2; r++) LAND.push(`${c},${r}`);
  const SEA_K = [];
  for (let c = 0; c < 6; c++) for (let r = 0; r < 4; r++) if (!LAND.includes(`${c},${r}`)) SEA_K.push([c, r]);
  const SEOUL = { name: '서울', icon: 'capital', at: [1, 1] };
  const ULL = { name: '울릉도', icon: 'island', at: [4, 1] };
  const DOK = { name: '독도', icon: 'island', at: [5, 1] };
  const JEJU = { name: '제주도', icon: 'island', at: [1, 3] };
  const PORT = { name: '항구', icon: 'port', at: [3, 1] };
  const KMAP = (places, more) => Object.assign({ grid: [6, 4], sea: SEA_K, places, title: '우리나라 칸 지도(그림)' }, more || {});
  // 독도 확대 칸 지도(4×3): 서도(왼쪽)·동도(오른쪽)·작은 바위섬
  const ZSEA = []; for (let c = 0; c < 4; c++) for (let r = 0; r < 3; r++) if (!(r === 1 && (c === 1 || c === 2))) ZSEA.push([c, r]);
  const SEODO = { name: '서도', icon: 'island', at: [1, 1] };
  const DONGDO = { name: '동도', icon: 'island', at: [2, 1] };
  const ROCK = { name: '작은 바위섬', icon: 'dot', at: [3, 1] };
  const ZMAP = (places, more) => Object.assign({ grid: [4, 3], sea: ZSEA, places, title: '독도 확대 지도(그림)' }, more || {});

  // 두 바구니 나누기(sortboard 글 카드): 기본 6장, 쉬움 4장(prompt·target 함께), 도전 8장(헷갈리는 카드 2장 — [글, 바구니 번호])
  const SB2 = (prompt, slots, ok, no, hard, d, more) => {
    const S = (a, b) => ({ [slots[0]]: a, [slots[1]]: b });
    const hs = (i) => hard.filter((h) => h[1] === i).map((h) => h[0]);
    return {
      prompt, toolOptions: { slots, cards: [ok[0], no[0], ok[1], no[1], ok[2], no[2]] }, target: { sort: S(ok, no) }, difficulty: d,
      levels: {
        easy: { prompt: `${cut(prompt)}(4장).`, toolOptions: { cards: [ok[0], no[0], ok[1], no[1]] }, target: { sort: S(ok.slice(0, 2), no.slice(0, 2)) } },
        challenge: { prompt: `${cut(prompt)}(8장).`, toolOptions: { cards: [ok[0], no[0], hard[0][0], ok[1], no[1], ok[2], hard[1][0], no[2]] }, target: { sort: S([...ok, ...hs(0)], [...no, ...hs(1)]) } },
      },
      ...more,
    };
  };
  // 세 바구니 나누기: 기본 세 칸 6장, 쉬움 앞 두 칸 4장, 도전 세 칸 6장 + 어디에도 안 들어가는 함정 카드 2장
  const SB3 = (prompt, slots, groups, traps, d, more) => {
    const S = (n) => Object.fromEntries(slots.slice(0, n).map((s, i) => [s, groups[i]]));
    const flat = (n) => [groups[0][0], groups[1][0], groups[2] && n > 2 ? groups[2][0] : null, groups[0][1], groups[1][1], groups[2] && n > 2 ? groups[2][1] : null].filter(Boolean);
    return {
      prompt, toolOptions: { slots, cards: flat(3) }, target: { sort: S(3) }, difficulty: d,
      levels: {
        easy: { prompt: `${cut(prompt)}(두 칸).`, toolOptions: { slots: slots.slice(0, 2), cards: flat(2) }, target: { sort: S(2) } },
        challenge: { toolOptions: { cards: [...flat(3).slice(0, 3), traps[0], ...flat(3).slice(3), traps[1]] } },
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
  // 짝 짓기(emotion match): 기본 세 짝, 쉬움 앞 두 짝, 도전 세 짝 + 남는 카드 1장. pairs = [[칸 id, 칸 글, 카드 글]]
  const MATCH3 = (prompt, pairs, trap, d, more) => {
    const slots = (n) => pairs.slice(0, n).map((p) => ({ id: p[0], label: p[1] }));
    const cards = (n) => pairs.slice(0, n).map((p) => p[2]).reverse();
    const T = (n) => ({ match: Object.fromEntries(pairs.slice(0, n).map((p) => [p[0], p[2]])) });
    return {
      prompt, toolOptions: { mode: 'match', slots: slots(3), cards: cards(3) }, target: T(3), difficulty: d,
      levels: {
        easy: { prompt: `${cut(prompt)}(두 짝).`, toolOptions: { slots: slots(2), cards: cards(2) }, target: T(2) },
        challenge: { toolOptions: { cards: [...cards(3), trap] } },
      },
      ...more,
    };
  };
  // 어떻게 할까(emotion branch): 기본 보기 3개, 쉬움 보기 2개(나쁜 보기 하나 + 좋은 보기)
  const BR = (prompt, situation, good, bad, bad2, d, more) => {
    const C = (x) => ({ id: x[0], text: x[1], result: x[2], mood: x[3] });
    return {
      prompt, toolOptions: { mode: 'branch', situation, choices: [C(bad), C(good), C(bad2)] }, target: { choice: good[0] }, difficulty: d,
      levels: { easy: { toolOptions: { choices: [C(bad), C(good)] } } },
      ...more,
    };
  };
  // 정리 출구
  const CHANT = (title, cards, prompt) => ({ type: 'tool', tool: 'timer', options: { title, cards: [cards[2], cards[0], cards[1]] }, prompt: prompt || '구호를 차례대로 놓아요.', target: { order: cards }, difficulty: 0.1 });
  const SCALE = (situation, feeling, prompt, top) => ({ type: 'tool', tool: 'emotion', options: { mode: 'scale', situation, feeling, steps: 5, scaleLabels: { 1: '조금', 5: top || '아주 많이' } }, prompt, target: { level: 'any' }, difficulty: 0.1 });
  const PICKW = (basket, cards, good, prompt) => ({ type: 'tool', tool: 'wordcards', options: { mode: 'pick', basket, cards }, prompt, target: { pick: good }, difficulty: 0.1 });
  const ART = (options, checks, min, prompt) => ({ type: 'tool', tool: 'collage', options, prompt, target: { selfCheck: checks, minPieces: min }, difficulty: 0.1 });
  const MAPX = (options, place, prompt) => ({ type: 'tool', tool: 'map', options, prompt, target: { place }, difficulty: 0.1 });
  const ASK = (prompt, options, answer, explain) => ({ type: 'choice', prompt, options, answer, difficulty: 0.1, explain });

  // =====================================================================================================
  // 1학년 · 바다 가운데 섬, 독도
  const WHERE = MOD('dokdo.e12.g1-where', [1]);
  const T_WHERE = [
    WHERE({
      id: 'dokdo.e12.g1-where.intro.sea', type: 'intro', title: '파도 소리 듣고 섬 고르기',
      method: '바다 소리 듣고 섬 그림 고르기', tool: 'wordcards', minutes: 6,
      levels: { easy: '교사가 섬·산 카드 두 장만 짚으며 "어느 쪽이 바다 가운데 있나요?" 하고 고르게 한다.', base: '섬·산·도시 세 장 가운데 섬을 고른다.', challenge: '들판까지 네 장 가운데 섬을 고르고, 섬인 까닭(둘레가 다 바다)을 말한다.' },
      intro: {
        teacher: '"쏴아, 쏴아." 교사가 입으로 파도 소리를 내며 "이 소리가 들리는 곳은 어디일까요?"라고 묻고 기다릴 반응("바다요", "바닷가요")을 듣는다. 시연 단추로 \'바다 가운데 섬\' 카드가 바구니에 담기는 모습을 보인다. "섬은 땅이랑 붙어 있어요"라는 말이 나오면 "섬 둘레를 배로 한 바퀴 돌면 무엇만 보일까요?"라고 되묻는다. 오늘은 우리나라 동쪽 바다 가운데 있는 섬, 독도를 찾아본다고 밝힌다.',
        student: '파도 소리를 듣고, 둘레가 다 바다인 섬 그림을 손으로 가리켜요.',
        demo: { tool: 'wordcards', options: { mode: 'pick', basket: '섬이에요', cards: [{ id: 'mt', text: '높은 산', motif: 'mountain' }, { id: 'island', text: '바다 가운데 섬' }, { id: 'city', text: '큰 도시', motif: 'house' }, { id: 'field', text: '넓은 들판', motif: 'flower' }], shuffle: false }, sequence: [{ pick: ['island'] }] },
        art: { draw: 'a calm paper sea with gentle waves all around two small rocky paper islands, a paper seagull above, and a paper child cupping a hand to the ear to listen to the waves', banner: '바다 가운데 섬' },
      },
    }),
    WHERE({
      id: 'dokdo.e12.g1-where.intro.point', type: 'intro', title: '선생님과 지도 따라 짚기',
      method: '선생님과 지도 따라 짚기', tool: 'timer', minutes: 6,
      levels: { easy: '교사가 "우리나라 → 독도" 두 곳만 짚고 학생은 손가락으로 따라 한다.', base: '"우리나라 → 동쪽 바다 → 독도" 세 곳을 차례로 따라 짚는다.', challenge: '교사가 말만 하면 혼자 세 곳을 차례로 짚는다.' },
      intro: {
        teacher: '교실 큰 지도(또는 화면 지도)를 펴고 "여기가 우리나라예요. 손가락을 오른쪽으로 옮기면 파란 바다가 나와요. 그 바다 가운데 작은 섬이 독도예요"라고 말하며 천천히 짚는다. 시연 단추로 \'우리나라 → 동쪽 바다 → 독도\' 카드가 차례대로 놓이는 모습을 보이고, 반 전체가 공중에 손가락으로 같은 길을 세 번 따라 그린다. "독도는 너무 작아서 지도에 없어요"라는 말이 나오면 "작은 점이라도 지도에 꼭 그려 둔 섬이 있어요. 함께 찾아볼까요?"라고 되묻는다.',
        student: '선생님 손가락을 따라 우리나라, 동쪽 바다, 독도를 차례로 짚어요.',
        demo: { tool: 'timer', options: { title: '지도 따라 짚기', cards: ['독도', '우리나라', '동쪽 바다'] }, sequence: [{ order: ['우리나라', '동쪽 바다', '독도'] }] },
        art: { draw: 'a big paper map on a classroom board showing a land shape with blue sea on its right side and a tiny island dot, a paper teacher pointing along a dotted path from the land to the tiny island while children copy with their fingers', banner: '우리나라 → 동쪽 바다 → 독도' },
      },
      notes: '교사가 진행하는 따라 하기 도입이다. 화면에는 차례 카드만 보이고, 짚기는 교실의 실물 지도로 한다.',
    }),
    WHERE({
      id: 'dokdo.e12.g1-where.activity.pin', type: 'activity', title: '칸 지도에 독도 핀 꽂기',
      method: '칸 지도에 독도 핀 꽂기', tool: 'map', minutes: 14,
      levels: { easy: '이름이 보이는 지도에서 꽂고, 핀을 놓으면 그 칸 이름이 \'지금\' 칸에 바로 나온다.', base: '서울·울릉도·독도 이름이 보이는 칸 지도에서 알맞은 곳에 꽂는다(바다 칸은 파랗게 칠해져 있다).', challenge: '이름을 숨기고 제주도까지 섬이 셋인 지도에서, 기호와 자리(동쪽 끝)로 찾아 꽂는다.' },
      activity: {
        title: '우리나라 칸 지도에 독도 꽂기', tool: 'map',
        teacher: '"파란 칸은 바다, 가운데 칸은 우리나라 땅이에요. 독도는 어느 쪽 바다에 있을까요?" 핀을 꽂기 전에 손가락으로 오른쪽(동쪽)을 가리키게 한다. 울릉도에 꽂는 학생에게 "울릉도는 독도의 이웃 섬이에요. 한 칸 더 오른쪽, 가장 끝 섬을 볼까요?"라고 묻는다. 독도가 땅과 붙어 있지 않고 바다 가운데 떨어져 있다는 점을 짚는다.',
        task: '칸 지도에서 독도와 이웃 섬을 찾아 핀을 꽂아요.', levels: { easy: { readout: true }, base: {}, challenge: { names: false } },
        items: [
          { prompt: '동쪽 끝 섬, 독도에 꽂아요.', toolOptions: KMAP([SEOUL, ULL, DOK]), target: { place: '독도' }, difficulty: 0.1, levels: { challenge: { toolOptions: { places: [SEOUL, JEJU, ULL, DOK] } } } },
          { prompt: '우리나라 서울에 꽂아요.', toolOptions: KMAP([SEOUL, ULL, DOK]), target: { place: '서울' }, difficulty: 0.15, levels: { challenge: { toolOptions: { places: [SEOUL, JEJU, ULL, DOK] } } } },
          { prompt: '독도와 가까운 울릉도에 꽂아요.', toolOptions: KMAP([SEOUL, ULL, DOK]), target: { place: '울릉도' }, difficulty: 0.2, levels: { challenge: { toolOptions: { places: [SEOUL, JEJU, ULL, DOK] } } }, conclude: '독도는 우리나라 동쪽 바다, 울릉도 가까이에 있는 섬이에요.' },
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '독도는 어느 쪽 바다에 있나요?', options: ['동쪽 바다', '서쪽 바다'], answer: '동쪽 바다' }] },
      notes: '칸 지도는 실제 지도가 아니라 방향만 보이는 그림이다. 수업 뒤 교실의 실제 우리나라 지도에서 같은 자리를 한 번 더 짚는다.',
    }),
    WHERE({
      id: 'dokdo.e12.g1-where.activity.island', type: 'activity', title: '섬이에요·아니에요 나누기',
      method: '섬과 섬 아닌 것 나누기', tool: 'sortboard', minutes: 13,
      levels: { easy: '카드 4장, 맞는 바구니에 넣으면 초록 테두리가 생긴다.', base: '카드 6장을 다 넣은 뒤 확인한다.', challenge: '카드 8장, \'작은 바위섬\'·\'바닷가 마을\'처럼 헷갈리는 카드가 섞인다.' },
      activity: {
        title: '섬이에요·아니에요 바구니', tool: 'sortboard',
        teacher: '"둘레가 모두 바다이면 섬이에요. 이 카드는 섬일까요?" 카드를 넣을 때마다 교사가 소리 내어 읽어 준다. \'바닷가 마을\'을 섬에 넣는 학생에게 "바닷가 마을에서 걸어서 학교에 갈 수 있을까요? 땅과 이어져 있지요?"라고 묻는다. 독도도 둘레가 다 바다인 섬이라 배를 타야 갈 수 있다는 점을 짚는다.',
        task: '카드를 듣고 섬이에요·아니에요 바구니에 넣어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
        items: [
          SB2('섬일까요? 바구니에 나누어요.', ['섬이에요', '아니에요'], ['둘레가 다 바다', '배 타고 가요', '독도'], ['둘레가 다 땅', '버스로 가요', '서울'], [['작은 바위섬', 0], ['바닷가 마을', 1]], 0.1),
          SB2('섬 이름을 골라 나누어요.', ['섬이에요', '아니에요'], ['울릉도', '제주도', '동도'], ['우리 학교', '높은 산', '놀이터'], [['서도', 0], ['바닷가', 1]], 0.15),
          SB2('독도에 맞는 말을 나누어요.', ['맞아요', '아니에요'], ['바다에 있어요', '동쪽에 있어요', '섬이에요'], ['땅에 붙었어요', '서쪽에 있어요', '지도에 없어요'], [['우리나라 섬', 0], ['걸어서 가요', 1]], 0.2, { conclude: '독도는 둘레가 다 바다인 섬이고, 우리나라 동쪽 바다에 있어요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '섬에 ○ 해요.', options: ['독도', '서울'], answer: '독도' }] },
    }),
    WHERE({
      id: 'dokdo.e12.g1-where.activity.globe', type: 'activity', title: '지구본 돌려 우리나라 찾기',
      method: '지구본에서 우리나라 찾기', tool: 'earth', minutes: 14,
      levels: { easy: '읽기 칸에 우리나라의 시각과 아침·낮·밤이 보인다.', base: '읽기 칸 없이 태양 쪽을 보고 지구를 돌린다.', challenge: '마지막 문항에서 우리나라 동쪽 바다 이름(동해)까지 고른다.' },
      activity: {
        title: '지구 돌려 우리나라 찾기', tool: 'earth',
        teacher: '"이 둥근 판이 지구예요. \'우리나라\' 글자를 찾았나요? 지구를 돌려 볼까요?" 지구를 돌릴 때마다 우리나라 사람이 어디에 있는지 손가락으로 따라가게 한다. 해가 서쪽에서 뜬다고 말하는 학생에게 "아침에 교실 창밖 해가 어느 쪽 창에서 보였나요?"라고 되묻는다. 해가 뜨는 쪽이 동쪽이고, 우리나라 동쪽에는 넓은 바다가 있으며 그 바다에 독도가 있다는 점을 짚는다.',
        task: '지구를 돌려 우리나라를 찾고, 동쪽 바다를 알아봐요.', levels: { easy: { readout: true }, base: {}, challenge: {} },
        items: [
          { prompt: '우리나라가 낮이 되게 돌려요.', toolOptions: { mode: 'spin', start: { hour: 0 } }, target: { time: '낮' }, difficulty: 0.1 },
          { prompt: '해 뜨는 아침에 맞추고 골라요.', toolOptions: { mode: 'spin', start: { hour: 12 }, ask: { q: '해는 어느 쪽에서 떠요?', choices: ['동쪽', '서쪽'] } }, target: { phase: '아침', pick: 0 }, difficulty: 0.15 },
          { prompt: '우리나라 동쪽을 보고 골라요.', toolOptions: { mode: 'spin', start: { hour: 12 }, readOnly: true, ask: { q: '우리나라 동쪽에 있는 것은?', choices: ['넓은 바다', '큰 사막'] } }, target: { pick: 0 }, difficulty: 0.2,
            levels: { challenge: { prompt: '동쪽 바다 이름을 골라요.', toolOptions: { ask: { q: '우리나라 동쪽 바다 이름은?', choices: ['동해', '서해'] } }, target: { pick: 0 } } },
            conclude: '해가 뜨는 쪽이 동쪽이에요. 우리나라 동쪽 바다에 독도가 있어요.' },
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '해가 뜨는 쪽은?', options: ['동쪽', '서쪽'], answer: '동쪽' }] },
      notes: '교구의 지구 판에는 \'우리나라\' 표시가 늘 보인다(표시를 숨기는 단계는 없다). 실물 지구본이 있으면 마지막에 우리나라와 동쪽 바다를 함께 짚는다.',
    }),
    WHERE({
      id: 'dokdo.e12.g1-where.activity.make', type: 'activity', title: '색종이로 바다와 섬 꾸미기',
      method: '색종이로 바다와 섬 꾸미기', tool: 'collage', minutes: 13,
      levels: { easy: '고르개가 반원·동그라미와 갈색·초록·하양뿐이고, 섬 조각 2개면 된다.', base: '섬 두 개에 작은 조각을 더해 4개 넘게 붙인다.', challenge: '작은 바위섬 조각(작은 크기) 3개까지 더 붙여 5개 넘게 꾸민다.' },
      activity: {
        title: '파란 바다에 독도 꾸미기', tool: 'collage',
        teacher: '"파란 판은 동쪽 바다예요. 갈색 반원은 섬이에요. 독도는 큰 섬이 몇 개였지요?" 조각을 붙일 때마다 "이 조각은 무엇이에요?"라고 묻고 기다릴 반응("섬이요", "바위요")을 듣는다. 섬을 판 가장자리에 붙여 땅에 붙은 것처럼 만든 학생에게 "섬 둘레가 모두 바다가 되게 가운데로 옮겨 볼까요?"라고 묻는다. 독도는 큰 섬 둘과 작은 바위섬이 바다 가운데 모여 있다는 점을 짚는다.',
        task: '파란 바다 판에 갈색 섬 조각을 붙여 독도를 꾸며요.', levels: { easy: { shapes: ['semi', 'circle'], colors: ['갈색', '초록', '하양'] }, base: { shapes: ['semi', 'circle', 'triangle', 'leaf'], colors: ['갈색', '초록', '하양', '노랑'] }, challenge: {} },
        items: [
          { prompt: '갈색 반원 섬 두 개를 붙여요.', toolOptions: { bg: '파랑' }, target: { has: [{ shape: 'semi', color: '갈색', min: 2 }] }, difficulty: 0.1 },
          { prompt: '섬과 바위로 조각 4개를 붙여요.', toolOptions: { bg: '파랑' }, target: { has: [{ shape: 'semi', color: '갈색', min: 2 }], pieces: { min: 4 } }, difficulty: 0.15,
            levels: { easy: { prompt: '섬 조각을 2개 넘게 붙여요.', target: { has: [{ shape: 'semi', color: '갈색', min: 2 }], pieces: { min: 2 } } }, challenge: { prompt: '작은 바위섬 3개도 붙여요.', target: { has: [{ shape: 'semi', color: '갈색', min: 2 }, { size: 's', min: 3 }], pieces: { min: 5 } } } } },
          { prompt: '독도를 꾸미고 표시해요.', toolOptions: { bg: '파랑' }, target: { selfCheck: ['섬 두 개를 붙였어요', '둘레가 다 바다예요'], minPieces: 2 }, difficulty: 0.2, conclude: '독도는 파란 동쪽 바다 가운데 있는 섬이에요.' },
        ],
      },
      worksheet: { items: [{ type: 'draw', prompt: '바다 가운데 두 섬을 그려요.' }] },
      notes: '조각 뜻(갈색 반원 = 섬, 작은 조각 = 바위섬)은 칠판에 그려 두고 시작한다.',
    }),
    WHERE({
      id: 'dokdo.e12.g1-where.wrap.clap', type: 'wrap', title: '"동쪽 바다 독도" 구호',
      method: '"독도는 동쪽 바다" 구호와 손짓', tool: 'timer', minutes: 7,
      levels: { easy: '구호 없이 오른쪽(동쪽)을 가리키는 손짓만 함께 한다.', base: '구호 카드 세 장의 차례를 맞추고 손짓과 함께 외친다.', challenge: '구호를 외친 뒤 짝에게 "독도는 어디에 있어?" 묻고 답해 준다.' },
      wrap: {
        teacher: '"오른손을 쭉! (오른쪽 가리키기) 동쪽 바다! (손으로 파도) 독도! (두 손으로 섬 모양)" 구호 카드를 차례대로 놓은 뒤 반 전체가 손짓과 함께 세 번 외친다. 교실의 동쪽이 오른쪽이 아니면 "지도에서는 오른쪽이 동쪽이에요"라고 한 번 짚어 준다. 출구 2번에서 \'서쪽 바다\'를 고른 학생에게 "해가 뜨는 쪽 바다였지요?"라고 말해 준다.',
        exitTicket: [
          CHANT('동쪽 바다 구호', ['오른쪽 가리켜요', '"동쪽 바다"', '"독도!"']),
          ASK('독도는 어디에 있나요?', ['동쪽 바다', '산 꼭대기', '서쪽 바다'], 0, '독도는 우리나라 동쪽 바다에 있어요.'),
          MOOD,
        ],
      },
      worksheet: {
        title: '동쪽 바다 섬, 독도',
        items: [
          { type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '독도는 ___ 바다에 있어요.', answer: '동쪽' },
          { type: 'draw', prompt: '둘레가 다 바다인 섬을 그려요.' },
        ],
        easy: { note: '"오른쪽, 동쪽 바다, 독도!"를 떠올려요.', items: [{ type: 'draw', prompt: '파란 바다에 섬 하나를 그려요.' }] },
      },
    }),
    WHERE({
      id: 'dokdo.e12.g1-where.wrap.find', type: 'wrap', title: '지도에서 독도 다시 찾기',
      method: '지도에서 독도 다시 누르기', tool: 'map', minutes: 7,
      levels: { easy: '교사가 "동쪽 끝 섬" 하고 소리로 힌트를 주며 함께 찾는다.', base: '힌트 없이 지도에서 독도를 찾아 꽂는다.', challenge: '독도를 꽂은 뒤 울릉도가 어디인지 손가락으로 짚어 짝에게 알려 준다.' },
      wrap: {
        teacher: '"오늘 배운 독도, 지도에서 다시 찾을 수 있나요?" 핀을 꽂은 학생은 손을 들고 "동쪽 끝!"이라고 말하게 한다. 서울에 꽂은 학생에게 "서울은 우리나라 땅이에요. 오른쪽 바다로 가 볼까요?"라고 말해 준다. 출구 2번에서 \'큰 도시\'를 고른 학생과는 독도 둘레가 모두 바다인 그림을 다시 본다.',
        exitTicket: [
          MAPX(KMAP([SEOUL, ULL, DOK]), '독도', '독도를 다시 찾아 꽂아요.'),
          ASK('독도 둘레에는 무엇이 있나요?', ['바다', '큰 도시', '사막'], 0, '독도는 둘레가 모두 바다인 섬이에요.'),
          MOOD,
        ],
      },
      worksheet: {
        title: '지도에서 찾은 독도',
        items: [
          { type: 'choice', prompt: '독도는 무엇일까요?', options: ['섬', '산'], answer: '섬' },
          { type: 'draw', prompt: '오늘 찾은 독도 자리를 그려요.' },
        ],
        easy: { note: '"오른쪽 끝 섬"을 떠올려요.', items: [{ type: 'draw', prompt: '독도에 ○ 하듯 동그라미를 그려요.' }] },
      },
    }),
  ];

  // =====================================================================================================
  // 1학년 · 두 섬과 작은 바위섬
  const SHAPE = MOD('dokdo.e12.g1-shape', [1]);
  const T_SHAPE = [
    SHAPE({
      id: 'dokdo.e12.g1-shape.intro.count', type: 'intro', title: '큰 섬이 몇 개일까?',
      method: '독도 그림에서 큰 섬 세기', tool: 'wordcards', minutes: 6,
      levels: { easy: '교사가 숫자 카드 1·2 두 장만 들어 보이며 고르게 한다.', base: '숫자 카드 1·2·3 가운데 큰 섬 수를 고른다.', challenge: '큰 섬을 센 뒤 둘레의 작은 바위도 "많아요"라고 말해 본다(개수는 세지 않는다).' },
      intro: {
        teacher: '독도 그림(교과서·화면 그림)을 보여 주며 "독도에는 큰 섬이 몇 개 보이나요? 손가락으로 세어 볼까요?"라고 묻고 기다릴 반응("두 개요")을 듣는다. 시연 단추로 \'2개\' 카드가 바구니에 담기는 모습을 보인다. "독도는 섬 하나예요"라는 말이 나오면 "가운데 바닷물이 지나가는 길이 보이나요? 그럼 섬이 몇 개일까요?"라고 되묻는다. 오늘은 독도의 두 큰 섬과 작은 바위섬을 알아본다고 밝힌다.',
        student: '독도 그림을 보고 큰 섬이 몇 개인지 손가락으로 세어요.',
        demo: { tool: 'wordcards', options: { mode: 'pick', basket: '큰 섬의 수', cards: [{ id: 'one', text: '1개', big: '1' }, { id: 'two', text: '2개', big: '2' }, { id: 'three', text: '3개', big: '3' }], shuffle: false }, sequence: [{ pick: ['two'] }] },
        art: { draw: 'two tall paper rock islands side by side in a blue paper sea with a narrow channel of water between them, small rocks scattered around, a paper child counting on two fingers', banner: '큰 섬이 몇 개일까요?' },
      },
    }),
    SHAPE({
      id: 'dokdo.e12.g1-shape.intro.body', type: 'intro', title: '두 팔로 두 섬 흉내 내기',
      method: '두 팔로 두 섬 흉내 내기', tool: 'timer', minutes: 6,
      levels: { easy: '교사가 먼저 두 팔로 섬 모양을 만들고 그대로 따라 한다.', base: '짝과 마주 서서 한 명은 동도, 한 명은 서도가 된다.', challenge: '모둠으로 서서 두 명은 큰 섬, 나머지는 쪼그려 앉아 작은 바위섬이 된다.' },
      intro: {
        teacher: '"두 팔을 머리 위로 모아 뾰족 섬을 만들어 봐요!" 교사가 먼저 해 보이고, 시연 단추로 \'마주 서요 → 팔로 섬 모양 → "동도! 서도!"\' 카드가 차례대로 놓이는 모습을 보인다. 짝과 마주 서서 오른쪽에 선 친구가 "동도!", 왼쪽 친구가 "서도!"를 외친다. 둘이 손을 꼭 잡는 학생에게 "두 섬 사이에는 바닷물이 지나가요. 손을 살짝 떼어 볼까요?"라고 말한다. 부딪히지 않게 팔 길이만큼 떨어져 서게 한다.',
        student: '짝과 마주 서서 두 팔로 동도와 서도 모양을 만들어요.',
        demo: { tool: 'timer', options: { title: '두 섬 흉내 차례', cards: ['"동도! 서도!"', '마주 서요', '팔로 섬 모양'] }, sequence: [{ order: ['마주 서요', '팔로 섬 모양', '"동도! 서도!"'] }] },
        art: { draw: 'two paper children facing each other with arms raised above their heads in pointed island shapes, a gap of blue paper water between them, tiny paper rocks at their feet', banner: '동도! 서도!' },
      },
      notes: '교사가 진행하는 몸 놀이 도입이다. 화면에는 차례 카드만 보인다. 교실 뒤 빈 곳에서 한다.',
    }),
    SHAPE({
      id: 'dokdo.e12.g1-shape.activity.pin-two', type: 'activity', title: '확대 지도에 동도·서도 꽂기',
      method: '확대 지도에 동도·서도 핀 꽂기', tool: 'map', minutes: 14,
      levels: { easy: '이름이 보이고, 핀을 놓으면 그 칸 이름이 \'지금\' 칸에 나온다.', base: '이름을 숨긴 지도에서 교사가 이름을 소리로 읽어 주면 해 뜨는 쪽(오른쪽)·해 지는 쪽(왼쪽)으로 찾아 꽂는다.', challenge: '이름을 숨긴 지도에 바위가 한 곳 더 있고, 같은 방법으로 찾아 꽂는다.' },
      activity: {
        title: '독도 확대 지도 꽂기', tool: 'map',
        teacher: '"지도에서 오른쪽이 동쪽, 해가 뜨는 쪽이에요. 그럼 해 뜨는 쪽 섬은 이름이 무엇일까요?" 기다릴 반응("동도요")을 듣고 핀을 꽂게 한다. 서도에 꽂는 학생에게 "동도의 \'동\'은 해 뜨는 동쪽이에요. 어느 손 쪽이었지요?"라고 묻는다. 큰 두 섬 둘레에 작은 바위섬도 있다는 점을 짚는다.',
        task: '독도 확대 지도에서 동도·서도·작은 바위섬에 꽂아요.', levels: { easy: { readout: true }, base: { names: false }, challenge: { names: false } },
        items: [
          { prompt: '해 뜨는 쪽 섬, 동도에 꽂아요.', toolOptions: ZMAP([SEODO, DONGDO, ROCK]), target: { place: '동도' }, difficulty: 0.1, levels: { challenge: { toolOptions: { places: [SEODO, DONGDO, ROCK, { name: '바위', icon: 'dot', at: [0, 0] }] } } } },
          { prompt: '해 지는 쪽 섬, 서도에 꽂아요.', toolOptions: ZMAP([SEODO, DONGDO, ROCK]), target: { place: '서도' }, difficulty: 0.15, levels: { challenge: { toolOptions: { places: [SEODO, DONGDO, ROCK, { name: '바위', icon: 'dot', at: [0, 0] }] } } } },
          { prompt: '동도 옆 작은 바위섬에 꽂아요.', toolOptions: ZMAP([SEODO, DONGDO, ROCK]), target: { place: '작은 바위섬' }, difficulty: 0.2, levels: { challenge: { toolOptions: { places: [SEODO, DONGDO, ROCK, { name: '바위', icon: 'dot', at: [0, 0] }] } } }, conclude: '독도는 동도·서도 두 큰 섬과 둘레의 작은 바위섬으로 되어 있어요.' },
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '독도의 두 큰 섬은 동도와 ___예요.', answer: '서도' }] },
    }),
    SHAPE({
      id: 'dokdo.e12.g1-shape.activity.name', type: 'activity', title: '섬 그림과 이름 짝 짓기',
      method: '섬 그림과 이름 짝 짓기', tool: 'emotion', minutes: 13,
      levels: { easy: '두 짝(동도·서도)만 잇고, 맞게 놓으면 초록 테두리가 생긴다.', base: '세 짝(동도·서도·바위섬)을 이은 뒤 확인한다.', challenge: '세 짝에 남는 카드가 한 장 섞이고, 다 이은 뒤 지도에서 왼쪽·오른쪽 섬 이름을 짝에게 말한다.' },
      activity: {
        title: '동도·서도 이름 짝 짓기', tool: 'emotion',
        teacher: '"이 칸은 \'해 뜨는 쪽 섬\'이에요. 어떤 이름 카드가 어울릴까요?" 칸 글은 교사가 소리 내어 읽어 준다. 등대가 있는 섬을 서도에 잇는 학생에게 "등대와 경비대가 있는 섬은 동쪽 섬이었어요. 이름 첫 글자가 \'동\'인 카드는 무엇일까요?"라고 묻는다. 동도·서도라는 이름이 방향(동쪽·서쪽)에서 왔다는 점을 짚는다.',
        task: '칸 글을 듣고 알맞은 섬 이름 카드를 이어요.', levels: { easy: { live: true }, base: {}, challenge: { revealAfterCheck: true } },
        items: [
          MATCH3('해 뜨는 쪽, 해 지는 쪽 섬을 이어요.', [['east', '해 뜨는 쪽 섬', '동도'], ['west', '해 지는 쪽 섬', '서도'], ['rock', '둘레 작은 섬', '바위섬']], '제주도', 0.1),
          MATCH3('지도 오른쪽, 왼쪽 섬을 이어요.', [['right', '지도 오른쪽 섬', '동도'], ['left', '지도 왼쪽 섬', '서도'], ['tiny', '아주 작은 섬', '바위섬']], '울릉도', 0.15),
          MATCH3('섬에 있는 것을 듣고 이어요.', [['light', '등대가 있는 섬', '동도'], ['home', '주민 집이 있는 섬', '서도'], ['bird', '새가 쉬는 바위', '바위섬']], '서울', 0.2, { conclude: '해 뜨는 쪽 섬은 동도, 해 지는 쪽 섬은 서도예요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '해 뜨는 쪽 섬은?', options: ['동도', '서도'], answer: '동도' }] },
      notes: '동도에 등대·경비대, 서도에 주민 숙소가 있다는 사실은 첫머리 \'사람 확인\' 목록에 있다. 사진 자료는 공식 누리집 것을 쓴다.',
    }),
    SHAPE({
      id: 'dokdo.e12.g1-shape.activity.build', type: 'activity', title: '색종이로 독도 만들기',
      method: '색종이 독도 만들기', tool: 'collage', minutes: 14,
      levels: { easy: '고르개에 큰·보통 크기만 있고, 큰 섬 둘에 조각 하나를 더하면 된다.', base: '큰 섬 둘에 작은 조각 3개를 더해 바위섬을 만든다.', challenge: '마지막 문항에서 세모 돛배 한 척까지 띄워 6조각 넘게 만든다.' },
      activity: {
        title: '큰 섬 둘, 작은 바위섬 여럿', tool: 'collage',
        teacher: '"큰 갈색 조각 두 개를 나란히 놓아 볼까요? 사이에 바닷물 길을 조금 두어요." 조각을 붙일 때마다 "이건 동도? 서도? 바위섬?" 하고 묻는다. 큰 조각 하나로 끝내는 학생에게 "독도의 큰 섬은 몇 개였지요?"라고 되묻는다. 작은 바위섬은 큰 섬 둘레에 흩어져 있다는 점을 짚는다.',
        task: '큰 조각 두 개와 작은 조각으로 독도를 만들어요.', levels: { easy: { sizes: ['m', 'l'] }, base: {}, challenge: {} },
        items: [
          { prompt: '큰 조각 둘로 두 섬을 만들어요.', toolOptions: { bg: '파랑' }, target: { has: [{ color: '갈색', size: 'l', min: 2 }] }, difficulty: 0.1 },
          { prompt: '작은 조각 3개로 바위섬을 더해요.', toolOptions: { bg: '파랑' }, target: { has: [{ color: '갈색', size: 'l', min: 2 }, { size: 's', min: 3 }] }, difficulty: 0.15,
            levels: { easy: { prompt: '큰 섬 옆에 조각을 하나 더 붙여요.', target: { has: [{ color: '갈색', size: 'l', min: 2 }], pieces: { min: 3 } } } } },
          { prompt: '만든 독도를 보고 표시해요.', toolOptions: { bg: '파랑' }, target: { selfCheck: ['두 섬을 만들었어요', '바위섬을 붙였어요'], minPieces: 3 }, difficulty: 0.2,
            levels: { challenge: { prompt: '세모 돛배 한 척도 띄워요.', target: { has: [{ shape: 'triangle', min: 1 }], pieces: { min: 6 } } } },
            conclude: '독도는 큰 섬 둘과 작은 바위섬 여럿이 모인 섬이에요.' },
        ],
      },
      worksheet: { items: [{ type: 'check', prompt: '내가 만든 독도에 있는 것에 ✓ 해요.', options: ['동도', '서도', '작은 바위섬'] }] },
    }),
    SHAPE({
      id: 'dokdo.e12.g1-shape.activity.rock', type: 'activity', title: '독도와 닮은 그림 나누기',
      method: '바위섬 많은 그림 고르기', tool: 'sortboard', minutes: 13,
      levels: { easy: '카드 4장, 틀린 바구니에 넣으면 까닭을 말하고 돌아온다.', base: '카드 6장을 다 넣은 뒤 확인한다.', challenge: '카드 8장, 헷갈리는 카드가 섞이고 다 넣은 뒤 다른 점을 한 낱말로 말한다.' },
      activity: {
        title: '닮았어요·안 닮았어요 바구니', tool: 'sortboard',
        teacher: '"독도는 바위가 많고 큰 섬이 둘이었어요. 이 카드는 독도와 닮았을까요?" 카드를 교사가 읽어 준다. \'큰 숲이 있어요\'를 닮았어요에 넣는 학생에게 "독도 그림에서 큰 나무숲이 보였나요? 무엇이 많이 보였지요?"라고 묻는다. 독도는 바위와 절벽이 많은 바위섬이라는 점을 짚는다.',
        task: '카드를 듣고 독도와 닮은 것·안 닮은 것으로 나누어요.', levels: { easy: { instant: true }, base: {}, challenge: {} },
        items: [
          SB2('독도와 닮았나요? 나누어요.', ['독도와 닮았어요', '안 닮았어요'], ['두 섬이 있어요', '바위가 많아요', '둘레가 바다'], ['섬이 하나', '모래만 있어요', '큰 숲이 있어요'], [['작은 바위섬', 0], ['땅과 붙었어요', 1]], 0.1),
          SB2('독도에 있는 것을 나누어요.', ['독도에 있어요', '없어요'], ['바위 절벽', '바닷새', '등대'], ['높은 빌딩', '기차역', '큰 강'], [['작은 꽃', 0], ['모래 사막', 1]], 0.15),
          SB2('독도 생김새 말을 나누어요.', ['맞아요', '아니에요'], ['큰 섬 둘', '바위섬 여럿', '동도와 서도'], ['섬 하나뿐', '둥근 모래섬', '땅에 붙음'], [['바위가 뾰족', 0], ['평평한 들판', 1]], 0.2, { conclude: '독도는 큰 섬 둘과 바위섬 여럿, 바위와 절벽이 많은 섬이에요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '독도의 큰 섬은 몇 개?', options: ['2개', '1개'], answer: '2개' }] },
    }),
    SHAPE({
      id: 'dokdo.e12.g1-shape.wrap.show', type: 'wrap', title: '만든 독도 보여 주기',
      method: '내가 만든 독도 보여 주기', tool: 'timer', minutes: 7,
      levels: { easy: '만든 독도를 들고 섬을 가리키기만 한다.', base: '"여기가 동도" 하고 섬 하나의 이름을 말한다.', challenge: '"여기가 동도, 여기가 서도" 둘 다 말한다.' },
      wrap: {
        teacher: '"만든 독도를 짝에게 보여 주며 \'여기가 동도!\'라고 말해 볼까요?" 보여 주기 차례 카드를 맞춘 뒤 짝끼리 번갈아 보여 준다. 동도·서도를 바꿔 말하는 학생에게 "해 뜨는 쪽, 오른쪽 섬이 동도였지요?"라고 말해 준다. 출구 2번에서 \'산 이름\'을 고른 학생과는 확대 지도를 다시 본다.',
        exitTicket: [
          CHANT('보여 주기 차례', ['만든 독도 들기', '"여기가 동도"', '"여기가 서도"'], '보여 주는 차례대로 놓아요.'),
          ASK('동도·서도는 무엇일까요?', ['독도의 두 섬', '산 이름'], 0, '동도와 서도는 독도의 두 큰 섬이에요.'),
          MOOD,
        ],
      },
      worksheet: {
        title: '독도의 두 큰 섬',
        items: [
          { type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '해 뜨는 쪽 섬은 ___예요.', answer: '동도' },
          { type: 'draw', prompt: '동도와 서도를 나란히 그려요.' },
        ],
        easy: { note: '"오른쪽은 동도"를 떠올려요.', items: [{ type: 'draw', prompt: '큰 섬 두 개를 그려요.' }] },
      },
    }),
    SHAPE({
      id: 'dokdo.e12.g1-shape.wrap.face', type: 'wrap', title: '독도를 본 내 마음 고르기',
      method: '독도를 본 내 마음 고르기', tool: 'emotion', minutes: 7,
      levels: { easy: '교사가 눈금을 "조금·아주 많이" 두 가지로 읽어 주며 고르게 한다.', base: '눈금 5칸에서 내 마음 크기를 고른다.', challenge: '눈금을 고른 뒤 그 까닭을 한 낱말("바위", "섬 둘")로 말한다.' },
      wrap: {
        teacher: '"독도 그림을 다시 보아요. 두 섬과 작은 바위섬을 보니 마음이 얼마나 신나나요?" 눈금을 고른 뒤 손가락으로 몇 칸인지 보여 주게 한다. 작은 칸을 고른 학생에게도 "그렇게 느낄 수 있어요. 다음에 독도의 새와 꽃을 보면 또 달라질지 몰라요"라고 말해 준다. 출구 2번에서 \'1개\'를 고른 학생과 함께 두 섬을 손가락으로 센다.',
        exitTicket: [
          SCALE('독도의 두 섬과 바위섬을 보아요.', '신남', '독도를 보니 얼마나 신나요?'),
          ASK('독도의 큰 섬은 몇 개인가요?', ['1개', '2개', '3개'], 1, '독도의 큰 섬은 동도와 서도, 두 개예요.'),
          MOOD,
        ],
      },
      worksheet: {
        title: '독도를 본 내 마음',
        items: [
          { type: 'choice', prompt: '독도의 큰 섬 이름에 ○ 해요.', options: ['동도·서도', '남도·북도'], answer: '동도·서도' },
          { type: 'draw', prompt: '독도를 본 내 얼굴을 그려요.' },
        ],
      },
    }),
  ];

  // =====================================================================================================
  // 1학년 · 독도에 사는 새와 꽃
  const LIFE = MOD('dokdo.e12.g1-life', [1]);
  const T_LIFE = [
    LIFE({
      id: 'dokdo.e12.g1-life.intro.cry', type: 'intro', title: '울음소리 듣고 새 고르기',
      method: '갈매기 울음소리 듣고 새 고르기', tool: 'wordcards', minutes: 6,
      levels: { easy: '교사가 괭이갈매기·닭 카드 두 장만 짚으며 고르게 한다.', base: '괭이갈매기·닭·참새 세 장 가운데 고른다.', challenge: '고양이 카드까지 네 장 가운데 고르고, "고양이 소리를 내는 새"라고 까닭을 말한다.' },
      intro: {
        teacher: '"야옹, 야옹." 교사가 고양이 울음처럼 소리를 내며 "이 소리를 내는 바닷새가 독도에 산대요. 누구일까요?"라고 묻고 기다릴 반응("고양이요!", "갈매기요")을 듣는다. 시연 단추로 \'괭이갈매기\' 카드가 바구니에 담기는 모습을 보인다. "고양이가 독도에 살아요"라는 말이 나오면 "고양이처럼 우는 새예요. \'괭이\'는 고양이를 부르는 옛말이에요"라고 짚는다. 오늘은 독도에 사는 새와 꽃을 알아보고 아끼는 약속을 정한다고 밝힌다.',
        student: '"야옹" 소리를 듣고 고양이처럼 우는 바닷새 그림을 골라요.',
        demo: { tool: 'wordcards', options: { mode: 'pick', basket: '야옹 우는 새', cards: [{ id: 'hen', text: '닭' }, { id: 'gull', text: '괭이갈매기', motif: 'bird' }, { id: 'sparrow', text: '참새' }, { id: 'cat', text: '고양이' }], shuffle: false }, sequence: [{ pick: ['gull'] }] },
        art: { draw: 'a white paper seagull with grey wings standing on a paper rock by the sea, with a speech bubble that shows a tiny paper cat face, and a paper child listening with wide eyes', banner: '야옹 우는 바닷새' },
      },
    }),
    LIFE({
      id: 'dokdo.e12.g1-life.intro.flower', type: 'intro', title: '바위틈 꽃 그림 찾기',
      method: '바위틈 꽃 그림 찾기', tool: 'sortboard', minutes: 6,
      levels: { easy: '교사가 꽃이 있는 카드·없는 카드 두 장씩 넣어 보인다.', base: '시연을 본 뒤 카드 넷을 반 전체가 손을 들어 나눈다.', challenge: '교사가 "해국", "땅채송화" 하고 꽃 이름을 말하면 그 꽃 카드를 손으로 가리킨다.' },
      intro: {
        teacher: '"바위만 있는 섬에도 꽃이 필까요?" 독도 바위 사진(공식 누리집 사진)을 보여 주고 기다릴 반응("안 펴요", "작은 꽃이요")을 듣는다. 시연 단추로 \'바위틈 해국\'·\'바위틈 땅채송화\' 카드가 꽃 바구니에 들어가는 모습을 보인다. "바위에는 꽃이 없어요"라는 말이 나오면 "바위 사이 좁은 틈에 흙이 조금 있으면 작은 꽃이 자라요"라고 짚는다.',
        student: '독도 바위 그림을 보고 꽃이 있는 곳을 손으로 가리켜요.',
        demo: { tool: 'sortboard', options: { slots: ['꽃이 있어요', '꽃이 없어요'], cards: ['바위틈 해국', '맨 바위', '바위틈 땅채송화', '파도 치는 바위'] }, sequence: [{ sort: { '꽃이 있어요': ['바위틈 해국', '바위틈 땅채송화'], '꽃이 없어요': ['맨 바위', '파도 치는 바위'] } }] },
        art: { draw: 'a paper rock cliff by the sea with small pale purple paper asters and tiny yellow star-shaped paper flowers growing out of narrow cracks, a paper seagull resting nearby', banner: '바위틈에 핀 꽃' },
      },
    }),
    LIFE({
      id: 'dokdo.e12.g1-life.activity.fly', type: 'activity', title: '괭이갈매기처럼 날기',
      method: '괭이갈매기처럼 날기 동작', tool: 'timer', minutes: 14,
      levels: { easy: '동작 카드 2장의 차례를 맞추고, 날기 놀이를 2번으로 맞춘다.', base: '동작 카드 3장의 차례를 맞추고, 날기 놀이를 3번으로 맞춘다.', challenge: '동작 카드 4장(날개 접기까지)을 맞추고, 짝과 번갈아 날기 놀이를 4번 한다.' },
      activity: {
        title: '날개 펴고 살짝 내려앉기', tool: 'timer',
        teacher: '"괭이갈매기는 날개를 쭉 펴고 날다가 바위에 살짝 내려앉아요. 우리도 해 볼까요?" 동작 차례를 맞춘 뒤 타이머의 \'날기\' 칸 하나를 날기 한 번으로 정하고, 시작 단추를 누르면 반 전체가 제자리에서 날개 펴기 → 날아오르기 → 살짝 내려앉기를 한다. 쿵쿵 뛰어내리는 학생에게 "둥지 곁에서 쿵 소리가 나면 새끼 새가 어떨까요?"라고 묻는다. 새 곁에서는 조용히 천천히 움직인다는 점을 짚는다.',
        task: '날기 동작 카드를 차례대로 놓고, 날기 놀이 횟수를 맞춰요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          { prompt: '날기 동작 차례로 놓아요.', toolOptions: { title: '날기 동작', cards: ['내려앉아요', '날개 펴요', '날아올라요'] }, target: { order: ['날개 펴요', '날아올라요', '내려앉아요'] }, difficulty: 0.1,
            levels: {
              easy: { prompt: '날기 동작 차례로 놓아요(2장).', toolOptions: { cards: ['날아올라요', '날개 펴요'] }, target: { order: ['날개 펴요', '날아올라요'] } },
              challenge: { prompt: '날기 동작 차례로 놓아요(4장).', toolOptions: { cards: ['날개 접어요', '내려앉아요', '날개 펴요', '날아올라요'] }, target: { order: ['날개 펴요', '날아올라요', '내려앉아요', '날개 접어요'] } },
            } },
          { prompt: '날기 놀이 3번이 되게 맞춰요.', toolOptions: { title: '날기 놀이(우리 반 약속)', labels: ['날기', '쉬기'], plan: { work: 10, rest: 5, rounds: 1 } }, target: { plan: { rounds: 3 } }, difficulty: 0.15,
            hints: ['날기 한 번을 하나로 세어요.', '번 칸이 날기 놀이 횟수예요.', '번 칸을 하나씩 올려 맞춰요.'],
            levels: { easy: { prompt: '날기 놀이 2번이 되게 맞춰요.', target: { plan: { rounds: 2 } } }, challenge: { prompt: '짝과 번갈아 4번이 되게 맞춰요.', target: { plan: { rounds: 4 } } } } },
          { prompt: '날기 놀이를 마치고 표시해요.', toolOptions: { title: '날기 놀이 점검' }, target: { selfCheck: ['친구와 떨어져 섰어요', '살짝 내려앉았어요', '소리 없이 움직였어요'] }, difficulty: 0.2, conclude: '괭이갈매기 곁에서는 조용히, 천천히 움직여요.' },
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '새 곁에서는 어떻게 해요?', options: ['조용히 지나가요', '쿵쿵 뛰어요'], answer: '조용히 지나가요' }] },
      notes: '교사가 진행하는 동작 활동이다. 팔을 펼 때 옆 친구와 팔 길이만큼 떨어져 서게 한다. 횟수는 이 수업에서 정한 놀이 약속이다.',
    }),
    LIFE({
      id: 'dokdo.e12.g1-life.activity.good', type: 'activity', title: '새와 꽃 아끼기 고르기',
      method: '새와 꽃 아끼기 좋아요·안돼요', tool: 'emotion', minutes: 13,
      levels: { easy: '보기 2개, 고르면 새·꽃의 마음(결과)이 바로 보인다.', base: '보기 3개, 결과는 확인한 뒤에 보인다.', challenge: '보기 3개, 확인한 뒤 고르지 않은 보기를 골랐다면 새·꽃의 마음이 어땠을지 짝과 말한다.' },
      activity: {
        title: '이럴 땐 어떻게 할까요?', tool: 'emotion',
        teacher: '"바위틈에 예쁜 해국이 피었어요. 나는 어떻게 할까요?" 장면을 교사가 읽어 주고 고른 뒤 결과를 함께 본다. \'과자를 줘요\'를 고른 학생에게 "사람 과자는 짜고 달아서 새의 몸에 맞지 않아요. 새는 바다에서 스스로 먹이를 찾아요"라고 말해 준다. 꽃은 눈으로, 새는 멀리서 보는 것이 아끼는 마음이라는 점을 짚는다.',
        task: '장면을 듣고 새와 꽃을 아끼는 행동을 골라요.', levels: { easy: {}, base: { revealAfterCheck: true }, challenge: { revealAfterCheck: true } },
        items: [
          BR('해국이 피었어요. 어떻게 해요?', '바위틈에 해국이 피었어요.', ['photo', '사진만 찍어요', '꽃이 그대로 피어요.', '기쁨'], ['pick', '꽃을 꺾어요', '꽃이 다시 못 자라요.', '속상함'], ['step', '꽃을 밟아요', '꽃이 꺾여요.', '걱정'], 0.1),
          BR('새가 쉬고 있어요. 어떻게 해요?', '괭이갈매기가 쉬고 있어요.', ['far', '멀리서 봐요', '새가 편히 쉬어요.', '편안함'], ['snack', '과자를 줘요', '새가 아플 수 있어요.', '걱정'], ['chase', '쫓아가요', '새가 놀라 날아가요.', '놀람'], 0.15),
          BR('둥지에 알이 있어요. 어떻게 해요?', '바위 위 둥지에 알이 있어요.', ['pass', '조용히 지나가요', '알이 안전해요.', '편안함'], ['touch', '알을 만져요', '어미 새가 놀라요.', '걱정'], ['take', '알을 가져가요', '새끼가 못 나와요.', '속상함'], 0.2, { conclude: '꽃은 눈으로 보고, 새와 둥지는 멀리서 조용히 봐요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '해국을 보면 어떻게 해요?', options: ['눈으로 봐요', '꺾어 가요'], answer: '눈으로 봐요' }] },
    }),
    LIFE({
      id: 'dokdo.e12.g1-life.activity.card', type: 'activity', title: '새·꽃 그림 이름 짝 짓기',
      method: '새·꽃 그림 이름 짝 짓기', tool: 'emotion', minutes: 14,
      levels: { easy: '두 짝(괭이갈매기·해국)만 잇고, 맞게 놓으면 초록 테두리가 생긴다.', base: '세 짝(괭이갈매기·해국·땅채송화)을 이은 뒤 확인한다.', challenge: '세 짝에 남는 카드가 한 장 섞이고, 마지막 문항에서 사는 곳·피는 때까지 듣고 잇는다.' },
      activity: {
        title: '괭이갈매기·해국·땅채송화', tool: 'emotion',
        teacher: '"보라색 꽃은 해국, 노란 별 모양 꽃은 땅채송화예요. 이 칸에는 어떤 이름이 어울릴까요?" 칸 글을 교사가 읽어 주고 사진을 함께 보인다. 해국과 땅채송화를 바꿔 잇는 학생에게 "해국은 무슨 색이었지요? 연보라였어요"라고 되묻는다. 이름을 알면 더 아끼게 된다는 점을 짚는다.',
        task: '칸 글을 듣고 새와 꽃 이름 카드를 이어요.', levels: { easy: { live: true }, base: {}, challenge: { revealAfterCheck: true } },
        items: [
          MATCH3('생김새를 듣고 이름을 이어요.', [['gull', '고양이 소리 새', '괭이갈매기'], ['aster', '연보라 꽃', '해국'], ['sedum', '노란 별 꽃', '땅채송화']], '참새', 0.1),
          MATCH3('특징을 듣고 이름을 이어요.', [['wing', '날개가 있어요', '괭이갈매기'], ['petal', '보라 꽃잎이 많아요', '해국'], ['leaf', '잎이 통통해요', '땅채송화']], '장미', 0.15),
          MATCH3('사는 곳을 듣고 이어요.', [['nest', '바위에 둥지', '괭이갈매기'], ['fall', '가을 바위틈 꽃', '해국'], ['crack', '여름 바위틈 꽃', '땅채송화']], '해바라기', 0.2, { conclude: '괭이갈매기, 해국, 땅채송화는 독도에 사는 새와 꽃이에요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '고양이 소리를 내는 새는?', options: ['괭이갈매기', '참새'], answer: '괭이갈매기' }] },
      notes: '해국·땅채송화 사진은 공식 누리집(동북아역사재단 독도체험관 등) 사진을 함께 보인다. 피는 때는 첫머리 \'사람 확인\' 목록에 있다.',
    }),
    LIFE({
      id: 'dokdo.e12.g1-life.activity.grow', type: 'activity', title: '알에서 어른 새까지 놓기',
      method: '괭이갈매기 알에서 새끼까지 놓기', tool: 'lifecycle', minutes: 13,
      levels: { easy: '첫 카드가 놓여 있어 두 장만 놓는다.', base: '카드 세 장을 차례대로 놓는다.', challenge: '첫 문항에 둥지 틀기 카드가 더해져 네 장이 돌고 도는 차례를 놓고, 나머지 문항은 틀린 카드 한 장을 빼고 놓는다.' },
      activity: {
        title: '괭이갈매기가 자라는 차례', tool: 'lifecycle',
        teacher: '"괭이갈매기는 처음에 무엇이었을까요?" 기다릴 반응("알이요")을 듣고 카드를 놓게 한다. 다 놓은 뒤 \'차례대로 따라가 보기\' 단추를 눌러 반 전체가 "알, 새끼, 어른 새!" 하고 따라 말한다. 어른 새를 맨 앞에 놓는 학생에게 "어른 새가 알을 낳으면 다시 알부터 시작하지요? 동그라미처럼 돌아요"라고 말해 준다. 그래서 둥지와 알을 지켜 주어야 한다는 점을 짚는다.',
        task: '괭이갈매기 카드를 자라는 차례대로 놓아요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          { prompt: '알에서 어른 새까지 놓아요.', toolOptions: { center: '괭이갈매기의 한살이', slots: 3, cards: [{ id: 'adult', text: '어른 새', motif: 'bird' }, { id: 'egg', text: '알', motif: 'egg' }, { id: 'chick', text: '새끼', motif: 'chick' }] }, target: { order: ['egg', 'chick', 'adult'], cyclic: true }, difficulty: 0.1,
            levels: {
              easy: { state: { at: { egg: 0, chick: null, adult: null } } },
              challenge: { prompt: '둥지부터 네 장을 놓아요.', toolOptions: { slots: 4, cards: [{ id: 'adult', text: '어른 새', motif: 'bird' }, { id: 'nest', text: '둥지 틀기', motif: 'leaf' }, { id: 'egg', text: '알', motif: 'egg' }, { id: 'chick', text: '새끼', motif: 'chick' }] }, target: { order: ['nest', 'egg', 'chick', 'adult'], cyclic: true } },
            } },
          { prompt: '알에서 새끼가 나오는 차례예요.', toolOptions: { center: '알에서 새끼로', cycle: false, slots: 3, cards: [{ id: 'out', text: '새끼가 나와요', motif: 'chick' }, { id: 'sit', text: '알을 품어요', motif: 'egg' }, { id: 'crack', text: '알이 깨져요', motif: 'egg' }] }, target: { order: ['sit', 'crack', 'out'] }, difficulty: 0.15,
            levels: { easy: { state: { at: { sit: 0, crack: null, out: null } } }, challenge: { toolOptions: { cards: [{ id: 'out', text: '새끼가 나와요', motif: 'chick' }, { id: 'sit', text: '알을 품어요', motif: 'egg' }, { id: 'fly', text: '바로 날아요', motif: 'bird' }, { id: 'crack', text: '알이 깨져요', motif: 'egg' }] } } } },
          { prompt: '새끼가 자라는 차례예요.', toolOptions: { center: '새끼가 자라요', cycle: false, slots: 3, cards: [{ id: 'sky', text: '하늘을 날아요', motif: 'bird' }, { id: 'fluff', text: '솜털이 보송', motif: 'chick' }, { id: 'feather', text: '깃털이 나요', motif: 'leaf' }] }, target: { order: ['fluff', 'feather', 'sky'] }, difficulty: 0.2,
            levels: { easy: { state: { at: { fluff: 0, feather: null, sky: null } } }, challenge: { toolOptions: { cards: [{ id: 'sky', text: '하늘을 날아요', motif: 'bird' }, { id: 'fluff', text: '솜털이 보송', motif: 'chick' }, { id: 'tree', text: '나무에 살아요', motif: 'tree' }, { id: 'feather', text: '깃털이 나요', motif: 'leaf' }] } } },
            conclude: '괭이갈매기는 알 → 새끼 → 어른 새로 자라고, 다시 알을 낳아요.' },
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '알 → ___ → 어른 새', answer: '새끼' }] },
    }),
    LIFE({
      id: 'dokdo.e12.g1-life.wrap.promise', type: 'wrap', title: '아끼는 약속 고르기',
      method: '아끼는 약속 그림 고르기', tool: 'wordcards', minutes: 7,
      levels: { easy: '교사가 약속 카드를 하나씩 읽어 주고 지킬 약속 하나를 함께 고른다.', base: '지킬 약속을 모두 골라 바구니에 담는다.', challenge: '약속을 고른 뒤 가장 지키고 싶은 약속 하나를 짝에게 말한다.' },
      wrap: {
        teacher: '"독도에 가게 되면 새와 꽃에게 어떤 약속을 지킬까요?" 카드를 하나씩 읽어 주고 바구니에 담게 한다. \'과자 주기\'를 담은 학생에게 "새를 아끼는 마음은 좋아요. 그런데 새에게 맞는 먹이는 바다에 있어요"라고 말해 준다. 출구 2번까지 마치면 "꽃은 눈으로, 새는 멀리서!"를 다 같이 외친다.',
        exitTicket: [
          PICKW('지킬 약속', ['꽃 꺾지 않기', '과자 주기', '새 쫓지 않기', '멀리서 보기'], ['꽃 꺾지 않기', '새 쫓지 않기', '멀리서 보기'], '지킬 약속을 모두 담아요.'),
          ASK('바위틈 꽃은 어떻게 해요?', ['꺾어 가요', '눈으로 봐요'], 1, '꽃은 꺾지 않고 눈으로 보아요.'),
          MOOD,
        ],
      },
      worksheet: {
        title: '새와 꽃을 아끼는 약속',
        items: [
          { type: 'check', prompt: '내가 지킬 약속에 ✓ 해요.', options: ['꽃을 꺾지 않아요', '새를 쫓지 않아요', '둥지를 만지지 않아요'] },
          { type: 'draw', prompt: '괭이갈매기를 멀리서 보는 모습을 그려요.' },
        ],
        easy: { note: '"꽃은 눈으로, 새는 멀리서"를 떠올려요.', items: [{ type: 'draw', prompt: '해국 한 송이를 그려요.' }] },
      },
    }),
    LIFE({
      id: 'dokdo.e12.g1-life.wrap.art', type: 'wrap', title: '해국 한 송이 꾸미기',
      method: '해국 한 송이 꾸미기', tool: 'collage', minutes: 7,
      levels: { easy: '보라 조각으로 해국 한 송이를 붙인다.', base: '해국 두 송이를 붙이고 이름을 말한다.', challenge: '해국 곁에 하얀 괭이갈매기 조각도 붙인다.' },
      wrap: {
        teacher: '"보라 동그라미를 바위 판에 붙이면 해국이 피어요. 몇 송이를 피워 볼까요?" 조각을 붙인 뒤 점검 칸에 표시하게 한다. 꽃을 판 가득 붙이는 학생에게 "바위틈 좁은 곳에 작게 피는 꽃이었지요?"라고 말해 준다. 출구 2번에서 \'빨강\'을 고른 학생과는 해국 사진을 다시 본다.',
        exitTicket: [
          ART({ bg: '갈색', shapes: ['circle', 'leaf', 'triangle'], colors: ['보라', '노랑', '초록', '하양'], sizes: ['s', 'm'] }, ['보라 꽃을 붙였어요', '꽃 이름을 말했어요'], 1, '바위 판에 해국을 피워요.'),
          ASK('해국은 무슨 색 꽃인가요?', ['연보라', '빨강'], 0, '해국은 연보라색 꽃이에요.'),
          MOOD,
        ],
      },
      worksheet: {
        title: '바위틈에 핀 해국',
        items: [
          { type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '바위틈에 핀 연보라 꽃은 ___이에요.', answer: '해국' },
          { type: 'draw', prompt: '바위틈에 핀 꽃을 그려요.' },
        ],
      },
    }),
  ];

  // =====================================================================================================
  // 1학년 · 독도 바다 생물
  const SEA1 = MOD('dokdo.e12.g1-sea', [1]);
  const T_SEA1 = [
    SEA1({
      id: 'dokdo.e12.g1-sea.intro.dive', type: 'intro', title: '바닷속 생물 찾기',
      method: '바닷속 그림에서 생물 누르기', tool: 'wordcards', minutes: 6,
      levels: { easy: '교사가 물고기·미역 두 장만 짚으며 이름을 들려준다.', base: '물고기·오징어·미역 세 생물을 찾아 이름을 듣는다.', challenge: '토끼 카드까지 섞인 넷 가운데 바다에 사는 것만 고른다.' },
      intro: {
        teacher: '"독도 바닷속에 풍덩 들어가 볼까요? 무엇이 보일까요?" 바닷속 그림을 보이며 기다릴 반응("물고기요", "미역이요")을 듣는다. 시연 단추로 물고기·오징어·미역 카드가 차례로 바구니에 담기는 모습을 보이며 이름을 하나씩 소리 내어 읽는다. "바다에는 물고기만 살아요"라는 말이 나오면 "흔들흔들 춤추는 초록 미역도 바다에서 자라요"라고 짚는다.',
        student: '바닷속 그림에서 물고기·오징어·미역을 손으로 짚으며 이름을 말해요.',
        demo: { tool: 'wordcards', options: { mode: 'pick', basket: '바다 생물', cards: [{ id: 'fish', text: '물고기' }, { id: 'rabbit', text: '토끼' }, { id: 'squid', text: '오징어' }, { id: 'kelp', text: '미역', motif: 'leaf' }], shuffle: false }, sequence: [{ pick: ['fish'] }, { pick: ['fish', 'squid'] }, { pick: ['fish', 'squid', 'kelp'] }] },
        art: { draw: 'an underwater paper scene near rocky islands with a school of small paper fish, a paper squid, and tall green paper seaweed swaying from the rocks', banner: '독도 바닷속' },
      },
    }),
    SEA1({
      id: 'dokdo.e12.g1-sea.intro.swim', type: 'intro', title: '바다 생물 헤엄 흉내',
      method: '오징어·물고기 헤엄 흉내', tool: 'timer', minutes: 6,
      levels: { easy: '물고기·미역 두 가지 동작만 따라 한다.', base: '물고기·오징어·미역 세 가지 동작을 이름을 듣고 한다.', challenge: '친구가 생물 이름을 부르고 나머지가 동작을 한다.' },
      intro: {
        teacher: '"물고기! (두 손 모아 꼬리 흔들기) 오징어! (팔을 아래로 쭉 뻗었다 오므리기) 미역! (제자리에서 몸을 흔들흔들)" 교사가 이름을 부르면 반 전체가 제자리에서 동작을 한다. 시연 단추로 헤엄 놀이 타이머가 세 번으로 맞춰지는 모습을 보인다. 미역에 헤엄 동작을 하는 학생에게 "미역은 바위에 붙어 자라요. 헤엄치지 않고 물결 따라 흔들려요"라고 짚는다.',
        student: '선생님이 부르는 바다 생물처럼 제자리에서 움직여요.',
        demo: { tool: 'timer', options: { title: '헤엄 흉내 놀이(우리 반 약속)', labels: ['헤엄', '멈춤'], plan: { work: 10, rest: 5, rounds: 1 } }, sequence: [{ plan: { work: 10, rest: 5, rounds: 3 } }] },
        art: { draw: 'paper children in a circle copying sea creatures: one wiggles hands like a fish tail, one stretches arms down like a squid, one sways like seaweed', banner: '헤엄 흉내 놀이' },
      },
      notes: '교사가 진행하는 몸 놀이 도입이다. 제자리에서만 움직인다.',
    }),
    SEA1({
      id: 'dokdo.e12.g1-sea.activity.sort', type: 'activity', title: '바다 생물·땅 생물 나누기',
      method: '바다 생물·땅 생물 나누기', tool: 'sortboard', minutes: 14,
      levels: { easy: '카드 4장, 맞는 바구니에 넣으면 초록 테두리가 생긴다.', base: '카드 6장을 다 넣은 뒤 확인한다.', challenge: '카드 8장, 마지막 문항에서 \'괭이갈매기는 어디에서 볼까?\'처럼 헷갈리는 카드가 섞인다.' },
      activity: {
        title: '바다·땅 바구니 나누기', tool: 'sortboard',
        teacher: '"이 생물은 바다에 살까요, 땅에 살까요?" 카드를 교사가 읽어 주고 반 전체가 손으로 물결(바다)·지붕(땅)을 만들어 먼저 답하게 한다. 미역을 땅에 넣는 학생에게 "미역은 초록색이지만 바닷속 바위에 붙어 자라요"라고 말해 준다. 독도 바다에는 물고기 말고도 여러 생물이 산다는 점을 짚는다.',
        task: '생물 카드를 바다·땅 바구니에 나누어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
        items: [
          SB2('어디에 살까요? 나누어요.', ['바다에 살아요', '땅에 살아요'], ['물고기', '오징어', '미역'], ['토끼', '소나무', '다람쥐'], [['전복', 0], ['해국', 1]], 0.1),
          SB2('움직임을 듣고 나누어요.', ['헤엄쳐요', '붙어 자라요'], ['물고기', '오징어', '새우'], ['미역', '감태', '대황'], [['문어', 0], ['모자반', 1]], 0.15),
          SB2('어디에서 볼까요? 나누어요.', ['바닷속', '바위 위'], ['미역', '물고기', '오징어'], ['해국', '땅채송화', '둥지'], [['전복', 0], ['괭이갈매기', 1]], 0.2, { conclude: '독도 바다에는 물고기·오징어·새우 같은 동물과 미역 같은 바다 풀이 살아요.' }),
        ],
      },
      worksheet: { items: [{ type: 'table', prompt: '바다에 살면 ○, 땅에 살면 △를 써요.', columns: ['생물', '○ / △'], cells: [['미역', ''], ['토끼', ''], ['오징어', '']], answer: '○, △, ○' }] },
      notes: '감태·대황·모자반은 독도 바다에 자라는 바다 풀이다(첫머리 \'사람 확인\'). 낯선 이름은 교사가 사진과 함께 소리 내어 읽어 준다.',
    }),
    SEA1({
      id: 'dokdo.e12.g1-sea.activity.tank', type: 'activity', title: '색종이 바닷속 꾸미기',
      method: '색종이 바닷속 꾸미기', tool: 'collage', minutes: 13,
      levels: { easy: '고르개가 마름모·나뭇잎·반원뿐이고, 조각 3개로 꾸민다.', base: '조각 5개 넘게 붙여 물고기와 미역을 꾸민다.', challenge: '마지막 문항에서 갈색 바위 조각까지 붙여 꾸민다.' },
      activity: {
        title: '독도 바닷속 꾸미기', tool: 'collage',
        teacher: '"주황 마름모는 물고기, 초록 나뭇잎은 미역이에요. 독도 바닷속을 꾸며 볼까요?" 조각을 붙일 때마다 "이건 어떤 생물이에요?"라고 묻고 기다릴 반응("물고기요", "미역이요")을 듣는다. 미역 조각을 물 위에 띄우는 학생에게 "미역은 바닷속 바위에 붙어 자라요. 아래쪽으로 옮겨 볼까요?"라고 말해 준다. 꾸민 바다가 깨끗해야 생물이 산다는 점을 짚는다.',
        task: '물고기·미역 조각을 붙여 독도 바닷속을 꾸며요.', levels: { easy: { shapes: ['diamond', 'leaf', 'semi'], colors: ['주황', '초록', '갈색'] }, base: { shapes: ['diamond', 'leaf', 'semi', 'circle'], colors: ['주황', '초록', '갈색', '노랑', '하양'] }, challenge: {} },
        items: [
          { prompt: '주황 물고기를 2개 넘게 붙여요.', toolOptions: { bg: '파랑', shapes: ['diamond', 'leaf', 'semi', 'circle', 'star'] }, target: { has: [{ shape: 'diamond', color: '주황', min: 2 }] }, difficulty: 0.1 },
          { prompt: '초록 미역 잎을 2개 넘게 붙여요.', toolOptions: { bg: '파랑', shapes: ['diamond', 'leaf', 'semi', 'circle', 'star'] }, target: { has: [{ shape: 'leaf', color: '초록', min: 2 }] }, difficulty: 0.15 },
          { prompt: '바닷속을 꾸미고 표시해요.', toolOptions: { bg: '파랑', shapes: ['diamond', 'leaf', 'semi', 'circle', 'star'] }, target: { selfCheck: ['물고기를 붙였어요', '미역을 붙였어요'], minPieces: 5 }, difficulty: 0.2,
            levels: { easy: { prompt: '조각 3개로 꾸미고 표시해요.', target: { selfCheck: ['물고기를 붙였어요', '미역을 붙였어요'], minPieces: 3 } }, challenge: { prompt: '갈색 바위 조각도 붙여요.', target: { has: [{ shape: 'semi', color: '갈색', min: 1 }], pieces: { min: 6 } } } },
            conclude: '독도 바닷속에는 물고기와 미역이 함께 살아요.' },
        ],
      },
      worksheet: { items: [{ type: 'draw', prompt: '독도 바닷속 생물을 하나 그려요.' }] },
      notes: '조각 뜻(주황 마름모 = 물고기, 초록 나뭇잎 = 미역, 갈색 반원 = 바위)은 칠판에 그려 두고 시작한다.',
    }),
    SEA1({
      id: 'dokdo.e12.g1-sea.activity.trash', type: 'activity', title: '바닷가 쓰레기 장면 고르기',
      method: '바다에 쓰레기 버리기 장면 고르기', tool: 'emotion', minutes: 14,
      levels: { easy: '보기 2개, 고르면 물고기의 마음(결과)이 바로 보인다.', base: '보기 3개, 결과는 확인한 뒤에 보인다.', challenge: '보기 3개, 확인한 뒤 나쁜 보기를 고르면 바다가 어떻게 될지 짝과 말한다.' },
      activity: {
        title: '바다를 위해 무엇을 할까요?', tool: 'emotion',
        teacher: '"바닷가에 과자 봉지가 떨어져 있어요. 나는 어떻게 할까요?" 장면을 교사가 읽어 주고 고른 뒤 물고기의 마음을 함께 본다. \'그냥 둬요\'를 고른 학생에게 "파도가 오면 봉지가 어디로 갈까요? 물고기가 먹이인 줄 알고 먹으면 어떨까요?"라고 묻는다. 낚싯줄·바늘처럼 다칠 수 있는 것은 손대지 않고 어른께 알린다는 점을 짚는다.',
        task: '바닷가 장면을 듣고 바다를 지키는 행동을 골라요.', levels: { easy: {}, base: { revealAfterCheck: true }, challenge: { revealAfterCheck: true } },
        items: [
          BR('과자 봉지가 있어요. 어떻게 해요?', '바닷가에 과자 봉지가 있어요.', ['pick', '주워 담아요', '물고기가 편히 헤엄쳐요.', '편안함'], ['leave', '그냥 둬요', '봉지가 바다로 가요.', '걱정'], ['throw', '바다에 던져요', '물고기가 아파요.', '속상함'], 0.1),
          BR('물병을 다 마셨어요. 어떻게 해요?', '배 위에서 물병을 다 마셨어요.', ['bag', '가방에 넣어요', '바다가 깨끗해요.', '뿌듯함'], ['drop', '바다에 버려요', '물병이 둥둥 떠다녀요.', '걱정'], ['seat', '자리에 두고 가요', '바람에 날아가요.', '놀람'], 0.15),
          BR('낚싯줄이 걸렸어요. 어떻게 해요?', '바위에 낚싯줄이 걸렸어요.', ['tell', '어른께 알려요', '어른이 안전하게 치워요.', '편안함'], ['pull', '잡아당겨요', '손을 다칠 수 있어요.', '걱정'], ['ignore', '못 본 척해요', '새가 걸릴 수 있어요.', '속상함'], 0.2, { conclude: '쓰레기는 내 가방에, 위험한 것은 어른께 알려 바다를 지켜요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '바닷가 쓰레기는 어떻게 해요?', options: ['주워 담아요', '그냥 둬요'], answer: '주워 담아요' }] },
    }),
    SEA1({
      id: 'dokdo.e12.g1-sea.activity.count', type: 'activity', title: '그림그래프로 생물 수 보기',
      method: '그림그래프로 생물 수 보기', tool: 'chart', minutes: 13,
      levels: { easy: '두 종류 그림그래프에서 더 많은(적은) 쪽을 고른다.', base: '세 종류 그림그래프에서 가장 많은(적은) 생물을 고른다.', challenge: '세 종류 그림그래프를 읽고 수가 같은 두 생물을 고른다.' },
      activity: {
        title: '그림그래프 읽고 고르기', tool: 'chart',
        teacher: '"그림 속 바다에서 본 생물을 동그라미로 나타냈어요. 동그라미가 가장 많은 줄은 어느 줄일까요?" 손가락으로 동그라미를 하나씩 짚으며 함께 센다. 줄이 길어 보이는 쪽만 고르는 학생에게 "동그라미를 하나씩 손가락으로 세어 볼까요?"라고 말해 준다. 이 수는 그림 속 바다에서 센 가상의 수라는 점을 밝힌다.',
        task: '그림그래프의 동그라미를 세어 알맞은 생물을 골라요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          { prompt: '가장 많은 생물을 골라요.', toolOptions: { type: 'picture', mode: 'read', title: '그림 속 바다 생물(가상)', unit: '마리', data: [['물고기', 6], ['오징어', 3], ['새우', 4]], question: '가장 많은 것은?', choices: ['물고기', '오징어', '새우'] }, target: { pick: 0 }, difficulty: 0.1,
            levels: { easy: { prompt: '더 많은 생물을 골라요.', toolOptions: { data: [['물고기', 6], ['오징어', 3]], question: '더 많은 것은?', choices: ['물고기', '오징어'] }, target: { pick: 0 } } } },
          { prompt: '가장 적은 생물을 골라요.', toolOptions: { type: 'picture', mode: 'read', title: '그림 속 바다 생물(가상)', unit: '마리', data: [['물고기', 5], ['오징어', 2], ['새우', 4]], question: '가장 적은 것은?', choices: ['물고기', '오징어', '새우'] }, target: { pick: 1 }, difficulty: 0.15,
            levels: { easy: { prompt: '더 적은 생물을 골라요.', toolOptions: { data: [['물고기', 5], ['오징어', 2]], question: '더 적은 것은?', choices: ['물고기', '오징어'] }, target: { pick: 1 } } } },
          { prompt: '그래프를 읽고 알맞게 골라요.', toolOptions: { type: 'picture', mode: 'read', title: '그림 속 바다 생물(가상)', unit: '마리', data: [['물고기', 3], ['오징어', 5], ['전복', 3]], question: '가장 많은 것은?', choices: ['물고기', '오징어', '전복'] }, target: { pick: 1 }, difficulty: 0.2,
            levels: {
              easy: { toolOptions: { data: [['물고기', 3], ['오징어', 5]], choices: ['물고기', '오징어'] } },
              challenge: { prompt: '수가 같은 둘을 골라요.', toolOptions: { question: '수가 같은 둘은?', choices: ['물고기·전복', '물고기·오징어', '오징어·전복'] }, target: { pick: 0 } },
            },
            conclude: '그림그래프는 동그라미를 세어 많고 적음을 한눈에 봐요.' },
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '동그라미가 많을수록 수는?', options: ['많아요', '적어요'], answer: '많아요' }] },
      notes: '그래프의 수는 그림 속 바다에서 센 가상의 수이다(실제 조사 값이 아님). 화면 제목에 \'가상\'을 적어 두었다.',
    }),
    SEA1({
      id: 'dokdo.e12.g1-sea.wrap.chant', type: 'wrap', title: '"바다를 깨끗이" 구호',
      method: '"바다를 깨끗이" 구호', tool: 'timer', minutes: 7,
      levels: { easy: '구호 없이 줍기·가방 넣기 동작만 따라 한다.', base: '구호 카드 세 장의 차례를 맞추고 동작과 함께 외친다.', challenge: '구호를 외친 뒤 둘째 줄을 우리 반 말로 바꾸어 외쳐 본다.' },
      wrap: {
        teacher: '"쓰레기는! (줍는 손) 내 가방에! (가방에 넣는 손) 바다를 깨끗이! (두 팔로 물결)" 구호 카드 차례를 맞춘 뒤 반 전체가 동작과 함께 세 번 외친다. 작게 따라 하는 학생에게 "큰 소리로 외치면 바다 친구들도 들을 것 같아요"라고 말해 준다. 출구 2번에서 \'그냥 둬요\'를 고른 학생에게 쓰레기는 내 가방에 넣는다고 다시 짚어 준다.',
        exitTicket: [
          CHANT('바다 지키기 구호', ['"쓰레기는"', '"내 가방에"', '"바다를 깨끗이"']),
          ASK('바다에 쓰레기가 있으면요?', ['그냥 둬요', '주워서 챙겨요'], 1, '쓰레기는 주워서 내 가방에 챙겨요.'),
          MOOD,
        ],
      },
      worksheet: {
        title: '바다를 깨끗이',
        items: [
          { type: 'blank', prompt: '구호를 따라 써요.', text: '쓰레기는 내 가방에, 바다를 ___!', answer: '깨끗이' },
          { type: 'draw', prompt: '깨끗한 바다에서 헤엄치는 물고기를 그려요.' },
        ],
        easy: { note: '"쓰레기는 내 가방에"를 떠올려요.', items: [{ type: 'draw', prompt: '물고기 한 마리를 그려요.' }] },
      },
    }),
    SEA1({
      id: 'dokdo.e12.g1-sea.wrap.pick', type: 'wrap', title: '좋아하는 바다 생물 고르기',
      method: '가장 좋은 바다 생물 고르기', tool: 'emotion', minutes: 7,
      levels: { easy: '좋아하는 바다 생물 하나를 고른다.', base: '하나를 고르고 좋아하는 까닭을 한 낱말로 말한다.', challenge: '두 번째로 좋아하는 생물까지 말하고, 그 생물을 위해 지킬 약속을 덧붙인다.' },
      wrap: {
        teacher: '"오늘 만난 독도 바다 생물 가운데 나는 누가 가장 좋았나요? 정답은 없어요." 하나를 고른 뒤 손을 들어 같은 생물을 고른 친구를 찾아보게 한다. 까닭을 말하기 어려운 학생에게 "색이 예뻐서? 헤엄을 잘해서?" 하고 보기를 들려준다. 출구 2번에서 \'미역은 동물\'을 고른 학생과는 미역이 바위에 붙어 자라는 그림을 다시 본다.',
        exitTicket: [
          { type: 'tool', tool: 'emotion', options: { mode: 'branch', situation: '독도 바다 생물을 만났어요.', ask: '가장 좋은 생물은?', choices: [{ id: 'fish', text: '물고기', mood: '신남' }, { id: 'squid', text: '오징어', mood: '기쁨' }, { id: 'kelp', text: '미역', mood: '편안함' }] }, prompt: '좋아하는 바다 생물을 골라요.', target: { choice: ['fish', 'squid', 'kelp'] }, difficulty: 0.1 },
          ASK('미역은 무엇일까요?', ['바다 풀', '물고기'], 0, '미역은 바위에 붙어 자라는 바다 풀이에요.'),
          MOOD,
        ],
      },
      worksheet: {
        title: '내가 좋아하는 독도 바다 생물',
        items: [
          { type: 'choice', prompt: '바다에 사는 것에 ○ 해요.', options: ['오징어', '다람쥐'], answer: '오징어' },
          { type: 'draw', prompt: '내가 좋아하는 바다 생물을 그려요.' },
        ],
      },
      notes: '출구 1번은 정답이 없는 고르기다(무엇을 골라도 맞다).',
    }),
  ];

  // =====================================================================================================
  // 1학년 · 독도를 지키는 사람들
  const PEOPLE = MOD('dokdo.e12.g1-people', [1]);
  const T_PEOPLE = [
    PEOPLE({
      id: 'dokdo.e12.g1-people.intro.who', type: 'intro', title: '독도에서 일하는 사람 고르기',
      method: '그림 속 사람 고르기', tool: 'wordcards', minutes: 6,
      levels: { easy: '교사가 경비대원 카드와 우주 비행사 카드 두 장만 짚으며 고르게 한다.', base: '네 장 가운데 독도에서 일하는 사람 둘을 고른다.', challenge: '고른 뒤 교사가 들려주는 하는 일("섬을 지켜요", "등대 불을 켜요")을 듣고 누구인지 말한다.' },
      intro: {
        teacher: '"독도에는 아무도 없을까요?" 기다릴 반응("없어요", "군인 아저씨요")을 듣는다. 시연 단추로 \'경비대원\'·\'등대관리원\' 카드가 바구니에 담기는 모습을 보인다. "독도에는 아무도 안 살아요"라는 말이 나오면 "독도에는 섬을 지키는 분, 등대를 돌보는 분, 섬에서 지내는 주민이 있어요"라고 짚는다. 오늘은 독도를 지키는 사람들이 하는 일을 알아보고 고마운 마음을 전한다고 밝힌다.',
        student: '독도 그림에서 일하는 사람을 찾아 손으로 가리켜요.',
        demo: { tool: 'wordcards', options: { mode: 'pick', basket: '독도에서 일해요', cards: [{ id: 'guard', text: '경비대원' }, { id: 'astro', text: '우주 비행사', motif: 'star' }, { id: 'keeper', text: '등대관리원' }, { id: 'train', text: '기차 기관사' }], shuffle: false }, sequence: [{ pick: ['guard'] }, { pick: ['guard', 'keeper'] }] },
        art: { draw: 'a paper rocky island with a small white paper lighthouse, a paper guard in uniform looking out to sea, and a paper lighthouse keeper waving, gentle waves around', banner: '독도에서 일하는 사람들' },
      },
    }),
    PEOPLE({
      id: 'dokdo.e12.g1-people.intro.light', type: 'intro', title: '등대 불빛 흉내 놀이',
      method: '등대 불빛 흉내 놀이', tool: 'timer', minutes: 6,
      levels: { easy: '교사가 손전등을 한 번 비추면 배 역할 친구가 그쪽을 본다.', base: '불빛을 두 번 비추고, 배 역할 친구가 불빛 쪽으로 천천히 걷는다.', challenge: '배 역할과 바라보는 친구 역할을 바꾸어 한 번 더 한다.' },
      intro: {
        teacher: '교실 불을 끄고 "깜깜한 밤바다예요. 배가 길을 잃지 않으려면 무엇이 필요할까요?"라고 묻는다. 기다릴 반응("불빛이요", "등대요")을 듣고 교사가 손전등을 천천히 비추면 배 역할 친구가 불빛 쪽으로 걸어온다. 시연 단추로 \'불을 꺼요 → 손전등 반짝 → 배가 따라가요\' 카드가 차례대로 놓이는 모습을 보인다. 손전등을 친구 눈에 비추지 않는다고 먼저 약속한다.',
        student: '깜깜한 교실에서 등대 불빛을 따라 배처럼 천천히 움직여요.',
        demo: { tool: 'timer', options: { title: '등대 놀이 차례', cards: ['배가 따라가요', '불을 꺼요', '손전등 반짝'] }, sequence: [{ order: ['불을 꺼요', '손전등 반짝', '배가 따라가요'] }] },
        art: { draw: 'a dark paper night sea with a white paper lighthouse sending out a soft yellow beam, a small paper boat turning toward the light', banner: '등대 불빛을 따라가요' },
      },
      notes: '교사가 진행하는 놀이 도입이다. 손전등은 바닥이나 벽을 비추고 사람 눈에 비추지 않는다. 움직이는 길에 책상·가방이 없게 치운다.',
    }),
    PEOPLE({
      id: 'dokdo.e12.g1-people.activity.job', type: 'activity', title: '사람과 하는 일 짝 짓기',
      method: '사람과 하는 일 짝 짓기', tool: 'emotion', minutes: 14,
      levels: { easy: '두 짝(경비대원·등대관리원)만 잇고, 맞게 놓으면 초록 테두리가 생긴다.', base: '주민까지 세 짝을 이은 뒤 확인한다.', challenge: '세 짝에 남는 카드가 한 장 섞이고, 마지막 문항에서 고마운 말 카드까지 잇는다.' },
      activity: {
        title: '누가 무슨 일을 할까요?', tool: 'emotion',
        teacher: '"경비대원은 무슨 일을 할까요?" 칸 글을 교사가 읽어 주고 카드를 잇게 한다. 등대관리원에게 \'독도를 지켜요\'를 잇는 학생에게 "등대관리원은 밤에 무엇을 켜서 배를 도와주었지요?"라고 되묻는다. 독도에는 섬을 지키고 돌보는 사람들이 늘 있다는 점을 짚는다.',
        task: '칸 글을 듣고 알맞은 카드를 이어요.', levels: { easy: { live: true }, base: {}, challenge: { revealAfterCheck: true } },
        items: [
          MATCH3('사람과 하는 일을 이어요.', [['guard', '경비대원', '독도를 지켜요'], ['keeper', '등대관리원', '등대 불을 켜요'], ['res', '주민', '섬에서 살아요']], '기차를 몰아요', 0.1),
          MATCH3('누가 도와주었는지 이어요.', [['ship', '밤배가 길을 찾았어요', '등대관리원'], ['safe', '섬을 늘 지켜요', '경비대원'], ['home', '섬에 살며 돌봐요', '주민']], '우주 비행사', 0.15),
          MATCH3('고마운 말을 이어요.', [['g', '경비대원께', '지켜 줘서 고마워요'], ['l', '등대관리원께', '불 밝혀 고마워요'], ['r', '주민께', '돌봐 줘서 고마워요']], '저리 가요', 0.2, { conclude: '독도에는 섬을 지키고, 등대를 밝히고, 섬을 돌보는 사람들이 있어요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '밤에 등대 불을 켜는 사람은?', options: ['등대관리원', '기관사'], answer: '등대관리원' }] },
    }),
    PEOPLE({
      id: 'dokdo.e12.g1-people.activity.thanks', type: 'activity', title: '고마운 마음 카드 꾸미기',
      method: '고마운 마음 카드 꾸미기', tool: 'collage', minutes: 13,
      levels: { easy: '고르개가 하트·별과 분홍·노랑뿐이고, 조각 2개로 꾸민다.', base: '하트·별 조각 4개 넘게 붙여 카드를 꾸민다.', challenge: '마지막 문항에서 갈색 섬 그림 조각까지 하나 더 붙인다.' },
      activity: {
        title: '독도 지키는 분께 드릴 카드', tool: 'collage',
        teacher: '"분홍 하트는 고마운 마음, 노란 별은 반짝이는 등대 불빛이에요. 누구에게 드릴 카드를 꾸밀까요?" 받을 분(경비대원·등대관리원·주민)을 먼저 정하게 한다. 조각만 붙이고 받을 분을 정하지 못한 학생에게 "이 카드를 받으면 누가 가장 기뻐할까요?"라고 묻는다. 고마운 마음은 작은 카드 한 장으로도 전할 수 있다는 점을 짚는다.',
        task: '하트·별 조각을 붙여 고마운 마음 카드를 꾸며요.', levels: { easy: { shapes: ['heart', 'star'], colors: ['분홍', '노랑'] }, base: { shapes: ['heart', 'star', 'circle', 'semi'], colors: ['분홍', '노랑', '파랑', '갈색'] }, challenge: {} },
        items: [
          { prompt: '분홍 하트를 붙여요.', toolOptions: { bg: '하양' }, target: { has: [{ shape: 'heart', color: '분홍', min: 2 }] }, difficulty: 0.1,
            levels: { easy: { prompt: '분홍 하트 1개를 붙여요.', target: { has: [{ shape: 'heart', color: '분홍', min: 1 }] } } } },
          { prompt: '노란 별을 붙여요.', toolOptions: { bg: '하양' }, target: { has: [{ shape: 'star', color: '노랑', min: 2 }] }, difficulty: 0.15,
            levels: { easy: { prompt: '노란 별 1개를 붙여요.', target: { has: [{ shape: 'star', color: '노랑', min: 1 }] } } } },
          { prompt: '카드를 꾸미고 표시해요.', toolOptions: { bg: '하양' }, target: { selfCheck: ['카드를 꾸몄어요', '받을 분을 정했어요'], minPieces: 4 }, difficulty: 0.2,
            levels: { easy: { prompt: '조각 2개로 꾸미고 표시해요.', target: { selfCheck: ['카드를 꾸몄어요', '받을 분을 정했어요'], minPieces: 2 } }, challenge: { prompt: '갈색 섬 조각도 붙여요.', target: { has: [{ shape: 'semi', color: '갈색', min: 1 }], pieces: { min: 5 } } } },
            conclude: '독도를 지키는 분들께 고마운 마음을 카드로 전해요.' },
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '카드에 쓸 말을 따라 써요.', text: '독도를 지켜 주셔서 ___.', answer: '고맙습니다' }] },
    }),
    PEOPLE({
      id: 'dokdo.e12.g1-people.activity.review', type: 'activity', title: '어디·자연·사람 나누기',
      method: '1학년 독도 위치·자연·사람 나누기', tool: 'sortboard', minutes: 14,
      levels: { easy: '두 칸(어디·자연)에 카드 4장을 나누고, 맞는 칸에 넣으면 초록 테두리가 생긴다.', base: '세 칸(어디·자연·사람)에 카드 6장을 나눈다.', challenge: '세 칸에 카드 6장과 어디에도 안 들어가는 함정 카드 2장이 섞인다.' },
      activity: {
        title: '1학년 독도 공부 모아 보기', tool: 'sortboard',
        teacher: '"1학년 때 배운 독도를 모아 볼까요? \'동쪽 바다\'는 어느 바구니일까요?" 카드를 교사가 읽어 주고 바구니 이름도 함께 읽는다. \'경비대원\'을 자연에 넣는 학생에게 "경비대원은 사람이지요? 자연은 새·꽃·바다 생물이에요"라고 말해 준다. 독도는 동쪽 바다에 있고, 새와 꽃과 바다 생물이 살고, 지키는 사람들이 있는 섬이라는 점을 짚는다.',
        task: '카드를 듣고 어디·자연·사람 바구니에 나누어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
        items: [
          SB3('카드를 바구니에 나누어요.', ['어디에 있나', '어떤 자연', '누가 있나'], [['동쪽 바다', '울릉도 옆'], ['괭이갈매기', '해국'], ['경비대원', '등대관리원']], ['서쪽 바다', '사막'], 0.1),
          SB3('독도 카드를 나누어요.', ['어디에 있나', '어떤 자연', '누가 있나'], [['우리나라', '바다 가운데'], ['오징어', '바위 절벽'], ['주민', '지키는 사람']], ['큰 도시', '기차역'], 0.15),
          SB3('배운 것을 바구니에 모아요.', ['어디에 있나', '어떤 자연', '누가 있나'], [['섬', '동해'], ['미역', '땅채송화'], ['경비대', '등대지기']], ['펭귄', '높은 빌딩'], 0.2, { conclude: '독도는 동쪽 바다 섬이고, 새·꽃·바다 생물이 살고, 지키는 사람들이 있어요.' }),
        ],
      },
      worksheet: { items: [{ type: 'table', prompt: '알맞은 칸에 ○ 해요.', columns: ['카드', '어디', '자연', '사람'], cells: [['동쪽 바다', '', '', ''], ['해국', '', '', ''], ['경비대원', '', '', '']], answer: '어디, 자연, 사람' }] },
    }),
    PEOPLE({
      id: 'dokdo.e12.g1-people.activity.draw', type: 'activity', title: '독도 그림 엽서 꾸미기',
      method: '독도 그림 엽서 꾸미기', tool: 'collage', minutes: 13,
      levels: { easy: '조각 3개(섬·새·꽃 하나씩)로 엽서를 꾸민다.', base: '조각 5개 넘게 붙여 엽서를 채운다.', challenge: '마지막 문항에서 사람을 나타내는 파란 네모 조각도 붙인다.' },
      activity: {
        title: '섬·새·꽃이 있는 엽서', tool: 'collage',
        teacher: '"갈색 반원은 섬, 하얀 세모는 괭이갈매기, 보라 동그라미는 해국이에요. 독도 엽서를 꾸며 볼까요?" 엽서를 누구에게 보낼지 먼저 정하게 한다. 섬 조각을 빠뜨린 학생에게 "새와 꽃은 어디에 살고 있었지요?"라고 묻는다. 내가 아는 독도를 엽서로 친구·가족에게 알리는 것도 독도를 아끼는 일이라는 점을 짚는다.',
        task: '섬·새·꽃 조각으로 독도 엽서를 꾸며요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          { prompt: '섬·새·꽃을 하나씩 붙여요.', toolOptions: { bg: '하양', shapes: ['semi', 'triangle', 'circle', 'square'], colors: ['갈색', '하양', '보라', '파랑', '노랑'] }, target: { has: [{ shape: 'semi', color: '갈색', min: 1 }, { shape: 'triangle', color: '하양', min: 1 }, { shape: 'circle', color: '보라', min: 1 }] }, difficulty: 0.1 },
          { prompt: '엽서를 조각 5개로 채워요.', toolOptions: { bg: '하양', shapes: ['semi', 'triangle', 'circle', 'square'], colors: ['갈색', '하양', '보라', '파랑', '노랑'] }, target: { pieces: { min: 5 } }, difficulty: 0.15,
            levels: { easy: { prompt: '엽서를 조각 3개로 채워요.', target: { pieces: { min: 3 } } } } },
          { prompt: '엽서를 보고 표시해요.', toolOptions: { bg: '하양', shapes: ['semi', 'triangle', 'circle', 'square'], colors: ['갈색', '하양', '보라', '파랑', '노랑'] }, target: { selfCheck: ['엽서를 꾸몄어요', '보낼 사람을 정했어요'], minPieces: 3 }, difficulty: 0.2,
            levels: { challenge: { prompt: '파란 네모 사람도 붙여요.', target: { has: [{ shape: 'square', color: '파랑', min: 1 }], pieces: { min: 5 } } } },
            conclude: '독도의 섬·새·꽃·사람을 엽서로 알려요.' },
        ],
      },
      worksheet: { items: [{ type: 'draw', prompt: '독도 엽서에 그릴 것을 하나 그려요.' }] },
    }),
    PEOPLE({
      id: 'dokdo.e12.g1-people.wrap.say', type: 'wrap', title: '"고맙습니다" 인사 연습',
      method: '"고맙습니다" 인사 연습', tool: 'timer', minutes: 7,
      levels: { easy: '교사를 따라 "고맙습니다" 인사를 한다.', base: '짝과 마주 보고 인사 차례대로 인사한다.', challenge: '"독도를 지켜 주셔서" 한 문장을 더해 인사한다.' },
      wrap: {
        teacher: '"바르게 서요. 허리 숙여요. 고맙습니다!" 인사 차례 카드를 맞춘 뒤 짝과 마주 보고 독도 지키는 분께 하듯 인사를 해 본다. 장난스럽게 인사하는 학생에게 "고마운 마음은 눈을 보고 또박또박 말할 때 잘 전해져요"라고 말해 준다. 출구 2번에서 \'몰라요\'를 고른 학생과 함께 "고맙습니다"를 한 번 더 말한다.',
        exitTicket: [
          CHANT('인사 차례', ['바르게 서요', '허리 숙여요', '"고맙습니다"'], '인사하는 차례대로 놓아요.'),
          ASK('독도를 지키는 분께 하는 말은?', ['고맙습니다', '몰라요'], 0, '지켜 주시는 분께 "고맙습니다" 하고 인사해요.'),
          MOOD,
        ],
      },
      worksheet: {
        title: '고맙습니다 인사',
        items: [
          { type: 'blank', prompt: '인사를 따라 써요.', text: '독도를 지켜 주셔서 ___!', answer: '고맙습니다' },
          { type: 'draw', prompt: '고마운 분께 인사하는 내 모습을 그려요.' },
        ],
        easy: { note: '"바르게, 숙여서, 고맙습니다"를 떠올려요.', items: [{ type: 'draw', prompt: '웃는 얼굴을 그려요.' }] },
      },
    }),
    PEOPLE({
      id: 'dokdo.e12.g1-people.wrap.heart', type: 'wrap', title: '독도 공부 마친 마음',
      method: '독도 공부 뒤 마음 고르기', tool: 'emotion', minutes: 7,
      levels: { easy: '교사가 눈금을 "조금·아주 많이" 두 가지로 읽어 주며 고르게 한다.', base: '눈금 5칸에서 내 마음 크기를 고른다.', challenge: '눈금을 고른 뒤 그렇게 느낀 까닭을 짝에게 한 문장으로 말한다.' },
      wrap: {
        teacher: '"1학년 독도 공부를 마쳤어요. 독도를 아끼는 마음이 얼마나 커졌나요?" 눈금을 고른 뒤 손가락으로 몇 칸인지 보여 주게 한다. 작은 칸을 고른 학생에게도 "괜찮아요. 2학년 때 독도를 또 만나면 더 커질 수 있어요"라고 말해 준다. 출구 2번에서 \'아무도 없어요\'를 고른 학생과는 독도를 지키는 사람들 카드를 다시 본다.',
        exitTicket: [
          SCALE('1학년 독도 공부를 마쳤어요.', '뿌듯함', '아끼는 마음이 얼마나 커졌나요?'),
          ASK('독도에는 누가 있나요?', ['지키는 분들', '아무도 없어요'], 0, '독도에는 섬을 지키고 돌보는 사람들이 있어요.'),
          MOOD,
        ],
      },
      worksheet: {
        title: '1학년 독도 공부를 마치며',
        items: [
          { type: 'check', prompt: '내가 알게 된 것에 ✓ 해요.', options: ['독도는 동쪽 바다 섬', '괭이갈매기가 살아요', '지키는 분들이 있어요'] },
          { type: 'draw', prompt: '독도에 가면 하고 싶은 일을 그려요.' },
        ],
        easy: { note: '"동쪽 바다, 새와 꽃, 지키는 분"을 떠올려요.', items: [{ type: 'draw', prompt: '독도의 새나 꽃을 하나 그려요.' }] },
      },
    }),
  ];

  // =====================================================================================================
  // 2학년 · 서울에서 동쪽, 울릉도 이웃
  const EAST = MOD('dokdo.e12.g2-east', [2]);
  const T_EAST = [
    EAST({
      id: 'dokdo.e12.g2-east.intro.sun', type: 'intro', title: '해 뜨는 쪽 가리키기',
      method: '해 뜨는 쪽 가리키기', tool: 'timer', minutes: 6,
      levels: { easy: '"해가 뜨는 쪽!" 하면 동쪽 벽만 가리킨다.', base: '"해 뜨는 쪽", "해 지는 쪽"을 듣고 동쪽·서쪽 벽을 가리킨다.', challenge: '동·서·남·북 네 방향을 듣고 바로 가리킨다.' },
      intro: {
        teacher: '아침 해가 보이는 교실 벽에 \'동\' 종이를 붙여 두고 "해가 뜨는 쪽!" 하고 외치면 반 전체가 그 벽을 가리킨다. 시연 단추로 \'"해 뜨는 쪽!" → 동쪽 가리켜요 → "동쪽!"\' 카드가 차례대로 놓이는 모습을 보인다. 다른 벽을 가리키는 학생에게 "아침에 창으로 해가 들어오는 쪽이 어디였나요?"라고 되묻는다. 오늘은 해 뜨는 쪽, 동쪽에 있는 독도를 방위로 찾아본다고 밝힌다.',
        student: '"해가 뜨는 쪽!" 소리를 듣고 동쪽을 손으로 가리켜요.',
        demo: { tool: 'timer', options: { title: '방향 놀이 차례', cards: ['"동쪽!"', '"해 뜨는 쪽!"', '동쪽 가리켜요'] }, sequence: [{ order: ['"해 뜨는 쪽!"', '동쪽 가리켜요', '"동쪽!"'] }] },
        art: { draw: 'a paper classroom where a paper sun rises in the window on one wall marked with a paper sign, and paper children all point toward it', banner: '해가 뜨는 쪽은 동쪽' },
      },
      notes: '교사가 진행하는 몸 놀이 도입이다. 교실의 실제 동쪽을 미리 확인해 벽에 표시해 둔다.',
    }),
    EAST({
      id: 'dokdo.e12.g2-east.intro.rose', type: 'intro', title: '방위표에서 동쪽 고르기',
      method: '방위표 그림에서 동쪽 고르기', tool: 'wordcards', minutes: 6,
      levels: { easy: '교사가 \'동\'·\'서\' 두 칸만 짚으며 고르게 한다.', base: '동·서·남·북 네 칸 가운데 \'동\'을 고른다.', challenge: '\'동\'을 고른 뒤 \'서\' 칸이 어디인지도 말한다.' },
      intro: {
        teacher: '방위표 그림을 보이며 "위가 북쪽이면 오른쪽은 무슨 쪽일까요?"라고 묻고 기다릴 반응("동쪽이요")을 듣는다. 시연 단추로 \'동\' 카드가 바구니에 담기는 모습을 보인다. 왼쪽을 동쪽이라고 하는 학생에게 "지도를 보는 내 오른손 쪽이 동쪽이에요. 오른손을 들어 볼까요?"라고 말한다. 방위표가 있으면 지도에서 동쪽을 바로 찾을 수 있다고 밝힌다.',
        student: '방위표 그림에서 해 뜨는 쪽 \'동\' 칸을 찾아 손으로 짚어요.',
        demo: { tool: 'wordcards', options: { mode: 'pick', basket: '동쪽 칸', cards: [{ id: 'n', text: '북', big: '북' }, { id: 'e', text: '동', big: '동' }, { id: 's', text: '남', big: '남' }, { id: 'w', text: '서', big: '서' }], shuffle: false }, sequence: [{ pick: ['e'] }] },
        art: { draw: 'a large paper compass rose with four paper arrows, the right arrow glowing next to a small paper sun, on a paper map table', banner: '방위표의 동쪽' },
      },
    }),
    EAST({
      id: 'dokdo.e12.g2-east.activity.compass', type: 'activity', title: '서울에서 독도 방향 고르기',
      method: '지도 방위표로 서울에서 독도 방향 고르기', tool: 'map', minutes: 14,
      levels: { easy: '방위 단추가 넷이고, 방위표 \'지금\' 칸에 고른 방위가 글로 나온다.', base: '방위 단추 넷(동·서·남·북) 가운데 고른다.', challenge: '방위 단추가 여덟 개(북동·남서 등 더함)이고, 마지막 문항은 서울에서 울릉도 방향을 고른다.' },
      activity: {
        title: '방위표로 방향 고르기', tool: 'map',
        teacher: '"서울에 손가락을 두고 독도 쪽으로 옮겨 봐요. 방위표의 어느 쪽 화살표와 같은 쪽인가요?" 방위 단추를 누르기 전에 손가락으로 길을 따라가게 한다. \'서\'를 고르는 학생에게 "독도에서 서울을 본 것과 서울에서 독도를 본 것은 반대예요. 어디에서 출발했나요?"라고 묻는다. 독도는 서울에서 보면 동쪽 바다에 있다는 점을 짚는다.',
        task: '출발한 곳에서 도착할 곳이 어느 쪽인지 방위를 골라요.', levels: { easy: { readout: true, points: 4 }, base: { points: 4 }, challenge: { points: 8 } },
        items: [
          { prompt: '서울에서 독도는 어느 쪽?', toolOptions: KMAP([SEOUL, ULL, DOK, JEJU], { mode: 'compass' }), target: { from: '서울', to: '독도' }, difficulty: 0.1 },
          { prompt: '독도에서 서울은 어느 쪽?', toolOptions: KMAP([SEOUL, ULL, DOK, JEJU], { mode: 'compass' }), target: { from: '독도', to: '서울' }, difficulty: 0.15 },
          { prompt: '서울에서 제주도는 어느 쪽?', toolOptions: KMAP([SEOUL, ULL, DOK, JEJU], { mode: 'compass' }), target: { from: '서울', to: '제주도' }, difficulty: 0.2,
            levels: { challenge: { prompt: '서울에서 울릉도는 어느 쪽?', target: { from: '서울', to: '울릉도' } } },
            conclude: '서울에서 보면 독도와 울릉도는 동쪽 바다에 있어요.' },
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '서울에서 독도는 어느 쪽?', options: ['동쪽', '서쪽', '남쪽'], answer: '동쪽' }] },
      notes: '칸 지도는 방향만 보이는 그림이다. 이 지도에서는 위쪽이 북쪽이다.',
    }),
    EAST({
      id: 'dokdo.e12.g2-east.activity.near', type: 'activity', title: '울릉도·독도 핀 꽂기',
      method: '울릉도·독도 핀 꽂기', tool: 'map', minutes: 13,
      levels: { easy: '이름이 보이고, 핀을 놓으면 그 칸 이름이 \'지금\' 칸에 나온다.', base: '이름이 보이는 지도에서 울릉도·독도·서울을 찾아 꽂는다.', challenge: '이름을 숨기고 항구까지 있는 지도에서 기호와 방향으로 찾아 꽂는다.' },
      activity: {
        title: '울릉도와 독도는 이웃', tool: 'map',
        teacher: '"독도와 가장 가까운 섬은 어디일까요? 손가락으로 칸을 세어 봐요." 핀을 꽂은 뒤 독도에서 울릉도까지, 독도에서 제주도까지 칸 수를 함께 견주어 본다. 제주도에 꽂는 학생에게 "제주도는 남쪽 바다 섬이에요. 독도 바로 옆 칸에 있는 섬은 무엇일까요?"라고 묻는다. 울릉도와 독도는 같은 섬이 아니라 가까운 이웃 섬이라는 점을 짚는다.',
        task: '칸 지도에서 울릉도·독도·서울을 찾아 핀을 꽂아요.', levels: { easy: { readout: true }, base: {}, challenge: { names: false } },
        items: [
          { prompt: '독도와 가장 가까운 섬에 꽂아요.', toolOptions: KMAP([SEOUL, ULL, DOK, JEJU]), target: { place: '울릉도' }, difficulty: 0.1,
            levels: { challenge: { prompt: '동쪽 끝 섬의 이웃 섬에 꽂아요.', toolOptions: { places: [SEOUL, PORT, ULL, DOK, JEJU] } } } },
          { prompt: '울릉도 바로 동쪽 섬에 꽂아요.', toolOptions: KMAP([SEOUL, ULL, DOK, JEJU]), target: { from: '울릉도', dir: '동', steps: 1 }, difficulty: 0.15,
            levels: { challenge: { toolOptions: { places: [SEOUL, PORT, ULL, DOK, JEJU] } } } },
          { prompt: '독도에서 서쪽 끝, 서울에 꽂아요.', toolOptions: KMAP([SEOUL, ULL, DOK, JEJU]), target: { place: '서울' }, difficulty: 0.2,
            levels: { challenge: { toolOptions: { places: [SEOUL, PORT, ULL, DOK, JEJU] } } },
            conclude: '울릉도와 독도는 동쪽 바다에서 가까이 있는 이웃 섬이에요.' },
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '독도와 가장 가까운 섬은?', options: ['울릉도', '제주도'], answer: '울릉도' }] },
      notes: '맑은 날에는 울릉도에서 독도가 보인다(첫머리 \'사람 확인\'). 칸 수는 그림 지도의 칸이고 실제 거리가 아니다.',
    }),
    EAST({
      id: 'dokdo.e12.g2-east.activity.pair', type: 'activity', title: '이웃 섬 짝 짓기',
      method: '이웃 섬 그림 짝 짓기', tool: 'emotion', minutes: 14,
      levels: { easy: '두 짝만 잇고, 맞게 놓으면 초록 테두리가 생긴다.', base: '세 짝을 이은 뒤 확인한다.', challenge: '세 짝에 먼 섬 카드가 한 장 섞여, 그 카드는 빼고 잇는다.' },
      activity: {
        title: '어느 섬이 이웃일까요?', tool: 'emotion',
        teacher: '"\'울릉도의 이웃\' 칸에는 어떤 섬이 어울릴까요? 지도를 보며 생각해 봐요." 칸 글을 교사가 읽어 준다. 울릉도와 독도를 같은 섬이라고 하는 학생에게 "두 섬 사이에 바다가 있었지요? 배를 타고 건너야 해요"라고 말해 준다. 먼 섬 카드가 남는 까닭을 짝과 말하게 한다.',
        task: '칸 글을 듣고 알맞은 섬 카드를 이어요.', levels: { easy: { live: true }, base: {}, challenge: { revealAfterCheck: true } },
        items: [
          MATCH3('섬의 자리를 듣고 이어요.', [['near', '독도와 가까운 섬', '울릉도'], ['end', '동쪽 끝 섬', '독도'], ['south', '남쪽 큰 섬', '제주도']], '강화도', 0.1),
          MATCH3('서로 이웃한 섬을 이어요.', [['a', '울릉도의 이웃', '독도'], ['b', '독도의 이웃', '울릉도'], ['c', '서울 가까운 섬', '강화도']], '제주도', 0.15),
          MATCH3('배로 가는 차례를 듣고 이어요.', [['first', '배로 먼저 닿는 섬', '울릉도'], ['next', '그다음 가는 섬', '독도'], ['west', '서쪽 바다 섬', '강화도']], '제주도', 0.2, { conclude: '울릉도와 독도는 동쪽 바다의 가까운 이웃 섬이에요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '독도의 이웃 섬은?', options: ['울릉도', '강화도'], answer: '울릉도' }] },
    }),
    EAST({
      id: 'dokdo.e12.g2-east.activity.move', type: 'activity', title: '교실 방위 걷기 놀이',
      method: '교실 방위 걷기 놀이', tool: 'timer', minutes: 13,
      levels: { easy: '걷기 카드 2장의 차례를 맞추고 걷기 놀이를 1번으로 맞춘다.', base: '걷기 카드 3장의 차례를 맞추고 걷기 놀이를 2번으로 맞춘다.', challenge: '카드 4장을 맞추고 걷기 놀이를 3번으로 맞춘 뒤, 친구가 방향을 말하면 따라 걷는다.' },
      activity: {
        title: '"동쪽으로 두 걸음!"', tool: 'timer',
        teacher: '교실 바닥 가운데에 큰 방위표(종이)를 붙여 두고 "동쪽으로 두 걸음!" 하고 외치면 방위표 위에 선 학생이 동쪽 벽을 향해 두 걸음 걷는다. 걷기 차례와 횟수를 화면에서 맞춘 뒤 모둠마다 돌아가며 해 본다. 서쪽으로 가는 학생에게 "해가 뜨는 벽은 어느 쪽이었지요?"라고 묻는다. 앞을 보고 천천히 걸어야 친구와 부딪히지 않는다는 점을 짚는다.',
        task: '걷기 카드를 차례대로 놓고 걷기 놀이 횟수를 맞춰요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          { prompt: '방위 걷기 차례로 놓아요.', toolOptions: { title: '방위 걷기 차례', cards: ['멈춰 서요', '동쪽 바라봐요', '두 걸음 걸어요'] }, target: { order: ['동쪽 바라봐요', '두 걸음 걸어요', '멈춰 서요'] }, difficulty: 0.1,
            levels: {
              easy: { prompt: '방위 걷기 차례로 놓아요(2장).', toolOptions: { cards: ['두 걸음 걸어요', '동쪽 바라봐요'] }, target: { order: ['동쪽 바라봐요', '두 걸음 걸어요'] } },
              challenge: { prompt: '방위 걷기 차례로 놓아요(4장).', toolOptions: { cards: ['"동쪽!" 외쳐요', '멈춰 서요', '동쪽 바라봐요', '두 걸음 걸어요'] }, target: { order: ['동쪽 바라봐요', '두 걸음 걸어요', '멈춰 서요', '"동쪽!" 외쳐요'] } },
            } },
          { prompt: '걷기 놀이 2번이 되게 맞춰요.', toolOptions: { title: '방위 걷기(우리 반 약속)', labels: ['걷기', '쉬기'], plan: { work: 10, rest: 5, rounds: 4 } }, target: { plan: { rounds: 2 } }, difficulty: 0.15,
            hints: ['걷기 한 번을 하나로 세어요.', '번 칸이 걷기 놀이 횟수예요.', '번 칸을 하나씩 내려 맞춰요.'],
            levels: { easy: { prompt: '걷기 놀이 1번이 되게 맞춰요.', target: { plan: { rounds: 1 } } }, challenge: { prompt: '걷기 놀이 3번이 되게 맞춰요.', target: { plan: { rounds: 3 } } } } },
          { prompt: '방위 걷기를 마치고 표시해요.', toolOptions: { title: '방위 걷기 점검' }, target: { selfCheck: ['동쪽으로 걸었어요', '앞을 보고 걸었어요', '친구와 안 부딪혔어요'] }, difficulty: 0.2, conclude: '해가 뜨는 쪽이 동쪽이에요. 독도는 우리나라 동쪽 바다에 있어요.' },
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '해가 뜨는 쪽 방위는?', options: ['동', '서'], answer: '동' }] },
      notes: '교사가 진행하는 몸 활동이다. 바닥 방위표 둘레의 책상·가방을 치우고, 한 번에 한 모둠씩 걷는다. 횟수는 이 수업에서 정한 놀이 약속이다.',
    }),
    EAST({
      id: 'dokdo.e12.g2-east.wrap.face', type: 'wrap', title: '"독도는 동쪽" 구호로 마치기',
      method: '방위 구호로 마치기', tool: 'timer', minutes: 7,
      levels: { easy: '구호 없이 동쪽을 가리키는 손짓만 함께 한다.', base: '구호 카드 세 장의 차례를 맞추고 손짓과 함께 외친다.', challenge: '구호를 외친 뒤 짝에게 "서울에서 독도는 어느 쪽?" 하고 물어본다.' },
      wrap: {
        teacher: '"해 뜨는 쪽! (동쪽 벽 가리키기) 독도는! (두 손으로 섬 모양) 동쪽!(크게)" 구호 카드 차례를 맞춘 뒤 반 전체가 손짓과 함께 세 번 외친다. 다른 벽을 가리키는 학생에게 "아까 \'동\' 종이를 붙인 벽은 어디였지요?"라고 말해 준다. 출구 2번에서 \'서쪽\'을 고른 학생과는 칸 지도에서 서울과 독도를 다시 짚는다.',
        exitTicket: [
          CHANT('방위 구호', ['"해 뜨는 쪽!"', '"독도는"', '"동쪽!"']),
          ASK('서울에서 독도는 어느 쪽인가요?', ['동쪽', '서쪽', '북쪽'], 0, '독도는 서울에서 해 뜨는 쪽, 동쪽에 있어요.'),
          MOOD,
        ],
      },
      worksheet: {
        title: '독도는 동쪽 바다에',
        items: [
          { type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '해가 뜨는 쪽은 ___쪽이에요.', answer: '동' },
          { type: 'draw', prompt: '방위표를 그리고 동쪽에 해를 그려요.' },
        ],
        easy: { note: '"해 뜨는 쪽은 동쪽"을 떠올려요.', items: [{ type: 'draw', prompt: '떠오르는 해를 그려요.' }] },
      },
    }),
    EAST({
      id: 'dokdo.e12.g2-east.wrap.check', type: 'wrap', title: '서울·울릉도·독도 다시 짚기',
      method: '서울·울릉도·독도 다시 짚기', tool: 'map', minutes: 7,
      levels: { easy: '교사가 "이웃 섬", "동쪽 끝" 하고 힌트를 주며 두 곳을 짚는다.', base: '울릉도·독도 두 곳에 차례로 꽂고 서울은 손가락으로 짚는다.', challenge: '꽂은 뒤 "울릉도는 서울의 동쪽"처럼 방위로 말한다.' },
      wrap: {
        teacher: '"서울에서 출발해 볼까요? 손가락을 동쪽으로! 먼저 만나는 섬은? 그다음은?" 화면에 울릉도·독도를 차례로 꽂고 서울은 손가락으로 짚는다. 독도부터 꽂는 학생에게 "배가 서울 쪽에서 출발하면 어느 섬을 먼저 만날까요?"라고 말해 준다. 마지막에 "서울, 울릉도, 독도!"를 손짓과 함께 말한다.',
        exitTicket: [
          MAPX(KMAP([SEOUL, ULL, DOK, JEJU]), '울릉도', '동쪽으로 가다 먼저 만나는 섬에 꽂아요.'),
          MAPX(KMAP([SEOUL, ULL, DOK, JEJU]), '독도', '그다음 동쪽 끝 섬에 꽂아요.'),
          MOOD,
        ],
      },
      worksheet: {
        title: '서울 → 울릉도 → 독도',
        items: [
          { type: 'choice', prompt: '울릉도와 독도는 어떤 사이예요?', options: ['이웃 섬', '같은 섬'], answer: '이웃 섬' },
          { type: 'draw', prompt: '서울에서 독도까지 가는 화살표를 그려요.' },
        ],
        easy: { note: '"서울, 울릉도, 독도"를 떠올려요.', items: [{ type: 'draw', prompt: '오른쪽을 가리키는 화살표를 그려요.' }] },
      },
    }),
  ];

  // =====================================================================================================
  // 2학년 · 배 타고 독도 가는 길
  const WAY = MOD('dokdo.e12.g2-way', [2]);
  const T_WAY = [
    WAY({
      id: 'dokdo.e12.g2-way.intro.ship', type: 'intro', title: '바다를 건너는 탈것 고르기',
      method: '탈것 그림에서 배 고르기', tool: 'wordcards', minutes: 6,
      levels: { easy: '교사가 자동차·배 두 장만 짚으며 고르게 한다.', base: '자동차·기차·배 세 장 가운데 고른다.', challenge: '자전거까지 네 장 가운데 고르고, 배를 고른 까닭을 말한다.' },
      intro: {
        teacher: '"독도에 가려면 무엇을 타야 할까요? 기차는 바다 위를 달릴 수 있을까요?" 기다릴 반응("배요!")을 듣는다. 시연 단추로 \'배\' 카드가 바구니에 담기는 모습을 보인다. "걸어서 가요"라는 말이 나오면 "독도 둘레는 모두 바다였지요? 바다를 건너려면 무엇이 필요할까요?"라고 되묻는다. 오늘은 배를 타고 독도에 가는 길을 알아본다고 밝힌다.',
        student: '탈것 그림 가운데 바다를 건너는 탈것을 골라 손으로 짚어요.',
        demo: { tool: 'wordcards', options: { mode: 'pick', basket: '바다를 건너요', cards: [{ id: 'car', text: '자동차' }, { id: 'train', text: '기차' }, { id: 'ship', text: '배', motif: 'cloud' }, { id: 'bike', text: '자전거' }], shuffle: false }, sequence: [{ pick: ['ship'] }] },
        art: { draw: 'a paper car, a paper train and a paper bicycle waiting on the shore while a paper ship sails across the blue paper sea toward rocky islands', banner: '바다를 건너요' },
      },
    }),
    WAY({
      id: 'dokdo.e12.g2-way.intro.wave', type: 'intro', title: '배 타기 흉내 놀이',
      method: '배 타기 흉내 놀이', tool: 'timer', minutes: 6,
      levels: { easy: '교사 신호에 한 번, 자리에 앉아 몸을 흔드는 흉내를 낸다.', base: '두 번 흉내 내며 손잡이(책상 끝) 잡기를 함께 한다.', challenge: '구명조끼를 입는 흉내까지 하고 안전 점검에 모두 표시한다.' },
      intro: {
        teacher: '"배가 출렁출렁! 배에서는 어떻게 해야 안전할까요?" 교사 신호에 맞춰 모두 자리에 앉은 채 몸을 좌우로 흔드는 흉내를 내고, 책상 끝을 손잡이처럼 잡는다. 시연 단추로 배 타기 안전 점검 세 칸에 표시되는 모습을 보인다. 일어나서 흔드는 학생에게 "배가 흔들릴 때 서 있으면 넘어질 수 있어요. 앉아서 손잡이를 잡아요"라고 짚는다.',
        student: '선생님 신호에 맞춰 앉은 채 배가 출렁이는 흉내를 내요.',
        demo: { tool: 'timer', options: { title: '배 타기 안전 점검', safety: ['자리에 앉아요', '손잡이 잡아요', '구명조끼 입어요'] }, sequence: [{ safety: true }] },
        art: { draw: 'paper children sitting in rows inside a paper ship cabin, holding handrails and wearing orange paper life jackets while gentle paper waves rock the ship', banner: '배에서는 앉아서 꼭 잡아요' },
      },
      notes: '교사가 진행하는 따라 하기 도입이다. 의자에 앉은 채로만 흔든다.',
    }),
    WAY({
      id: 'dokdo.e12.g2-way.activity.order', type: 'activity', title: '독도 가는 장면 차례 놓기',
      method: '항구→울릉도→독도 세 장면 놓기', tool: 'story', minutes: 14,
      levels: { easy: '첫 장면이 놓여 있어 남은 두 장만 놓는다.', base: '장면 세 장을 가는 차례대로 놓는다.', challenge: '첫 문항에 돌아오는 장면이 더해져 네 장을 놓고, 나머지 문항은 틀린 장면 한 장을 빼고 놓는다.' },
      activity: {
        title: '항구 → 울릉도 → 독도', tool: 'story',
        teacher: '"독도에 가려면 맨 먼저 어디에서 배를 탈까요?" 기다릴 반응("항구요")을 듣고 장면을 놓게 한다. 독도를 맨 앞에 놓는 학생에게 "육지 항구에서 바로 독도로 가지 않고 이웃 섬에 먼저 들렀지요? 그 섬이 어디였나요?"라고 묻는다. 육지 항구 → 울릉도 → 독도 차례로 간다는 점을 짚는다.',
        task: '장면 카드를 독도에 가는 차례대로 놓아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          { prompt: '독도 가는 차례로 놓아요.', toolOptions: { slots: ['먼저', '다음', '끝'], cards: [{ id: 'dok', text: '독도에 닿아요' }, { id: 'port', text: '항구에서 배 타요' }, { id: 'ull', text: '울릉도에 내려요' }] }, target: { order: ['port', 'ull', 'dok'] }, difficulty: 0.1,
            levels: {
              easy: { state: { at: { port: 0, ull: null, dok: null } } },
              challenge: { prompt: '돌아오는 길까지 놓아요.', toolOptions: { slots: ['먼저', '다음', '그다음', '끝'], cards: [{ id: 'dok', text: '독도에 닿아요' }, { id: 'back', text: '울릉도로 와요' }, { id: 'port', text: '항구에서 배 타요' }, { id: 'ull', text: '울릉도에 내려요' }] }, target: { order: ['port', 'ull', 'dok', 'back'] } },
            } },
          ORDER3('배에 타는 차례로 놓아요.', [{ id: 'ticket', text: '배표를 사요' }, { id: 'line', text: '줄을 서요' }, { id: 'board', text: '배에 타요' }], { id: 'rush', text: '밀고 타요' }, 0.15),
          ORDER3('독도에 내려서 할 일이에요.', [{ id: 'off', text: '배에서 내려요' }, { id: 'look', text: '섬을 둘러봐요' }, { id: 'back', text: '배로 돌아와요' }], { id: 'pick', text: '꽃을 꺾어요' }, 0.2, { conclude: '육지 항구에서 배를 타고 울릉도를 거쳐 독도에 가요.' }),
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '항구 → ___ → 독도', answer: '울릉도' }] },
    }),
    WAY({
      id: 'dokdo.e12.g2-way.activity.turtle', type: 'activity', title: '거북이 배로 독도 가기',
      method: '거북이 배로 독도까지 길 찾기', tool: 'block-coding', minutes: 13,
      levels: { easy: '고르개에 앞으로·돌기 블록만 있고, 곧은 길이라 블록 3~4개로 닿는다.', base: '꺾어 가는 길을 블록 5개 안팎으로 보낸다.', challenge: '마지막 문항에서 바위(암초)를 피해 돌아가는 길을 만든다.' },
      activity: {
        title: '블록으로 배 보내기', tool: 'block-coding',
        teacher: '"거북이를 배라고 생각해요. 별 칸은 울릉도, 깃발 칸은 독도예요. \'앞으로\'를 몇 번 붙여야 울릉도에 닿을까요?" 블록을 붙인 뒤 \'실행\'을 눌러 반 전체가 칸을 세며 따라간다. 별을 지나치지 않고 바로 독도로 가려는 학생에게 "배는 울릉도를 거쳐 갔지요? 별 칸을 지나가게 해 볼까요?"라고 묻는다. 바위 칸은 배가 부딪히면 안 되는 곳이라는 점을 짚는다.',
        task: '블록을 붙여 배가 울릉도(별)를 거쳐 독도에 닿게 해요.', levels: { easy: { blocks: ['fwd', 'left', 'right'] }, base: {}, challenge: {} },
        items: [
          { prompt: '울릉도 거쳐 독도로 보내요.', toolOptions: { cols: 5, rows: 3, start: { x: 0, y: 1, dir: 'E' }, stars: [[2, 1]], goal: { x: 4, y: 1 } }, target: { reach: true, stars: true }, difficulty: 0.1,
            levels: { easy: { toolOptions: { cols: 4, stars: [[1, 1]], goal: { x: 3, y: 1 } } } } },
          { prompt: '꺾어 가는 길로 독도에 가요.', toolOptions: { cols: 4, rows: 4, start: { x: 0, y: 3, dir: 'E' }, stars: [[2, 3]], goal: { x: 2, y: 1 } }, target: { reach: true, stars: true }, difficulty: 0.15,
            levels: { easy: { toolOptions: { goal: { x: 2, y: 2 } } } } },
          { prompt: '바위를 피해 독도에 가요.', toolOptions: { cols: 5, rows: 3, start: { x: 0, y: 1, dir: 'E' }, rocks: [[2, 1]], goal: { x: 4, y: 0 } }, target: { reach: true }, difficulty: 0.2,
            levels: { easy: { prompt: '배를 독도까지 보내요.', toolOptions: { rocks: [], goal: { x: 3, y: 1 } } } },
            conclude: '배는 길을 차례대로 따라 울릉도를 거쳐 독도에 닿아요.' },
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '배가 독도 가기 전 들르는 섬은?', options: ['울릉도', '제주도'], answer: '울릉도' }] },
      notes: '판 위 별 칸 = 울릉도, 깃발(목표) 칸 = 독도, 바위 칸 = 배가 피해야 하는 암초로 약속하고 시작한다. 칸 수는 실제 거리가 아니다.',
    }),
    WAY({
      id: 'dokdo.e12.g2-way.activity.pin', type: 'activity', title: '가는 길 지도에 꽂기',
      method: '지도에 가는 길 핀 꽂기', tool: 'map', minutes: 14,
      levels: { easy: '이름이 보이고, 핀을 놓으면 그 칸 이름이 \'지금\' 칸에 나온다.', base: '항구·울릉도·독도 이름이 보이는 지도에서 가는 길 차례대로 한 곳씩 꽂는다.', challenge: '이름을 숨긴 지도에서 기호(닻·섬)와 방향으로 세 곳을 찾아 꽂는다.' },
      activity: {
        title: '항구·울릉도·독도 꽂기', tool: 'map',
        teacher: '"배가 떠나는 곳은 어디일까요? 닻 그림이 있는 칸을 찾아봐요." 문항마다 꽂은 뒤 손가락으로 지금까지 온 길을 따라 그리게 한다. 마지막 문항에서 울릉도에 꽂는 학생에게 "울릉도에서 한 번 더 배를 타고 동쪽으로 가야 했지요?"라고 묻는다. 세 곳을 이으면 독도 가는 길이 된다는 점을 짚는다.',
        task: '배가 떠나는 곳, 들르는 곳, 닿는 곳을 차례로 꽂아요.', levels: { easy: { readout: true }, base: {}, challenge: { names: false } },
        items: [
          { prompt: '배가 떠나는 항구에 꽂아요.', toolOptions: KMAP([SEOUL, PORT, ULL, DOK, JEJU]), target: { place: '항구' }, difficulty: 0.1 },
          { prompt: '배가 들르는 섬에 꽂아요.', toolOptions: KMAP([SEOUL, PORT, ULL, DOK, JEJU]), target: { place: '울릉도' }, difficulty: 0.15 },
          { prompt: '배가 마지막에 닿는 섬에 꽂아요.', toolOptions: KMAP([SEOUL, PORT, ULL, DOK, JEJU]), target: { place: '독도' }, difficulty: 0.2, conclude: '항구에서 배를 타고 울릉도를 거쳐 독도에 닿아요.' },
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '배는 어디에서 타요?', options: ['항구', '기차역'], answer: '항구' }] },
    }),
    WAY({
      id: 'dokdo.e12.g2-way.activity.safe', type: 'activity', title: '배에서 안전 행동 나누기',
      method: '배에서 안전 행동 좋아요·안돼요', tool: 'sortboard', minutes: 13,
      levels: { easy: '카드 4장, 틀린 바구니에 넣으면 까닭을 말하고 돌아온다.', base: '카드 6장을 다 넣은 뒤 확인한다.', challenge: '카드 8장, 헷갈리는 카드가 섞이고 안돼요 카드를 바르게 고쳐 말한다.' },
      activity: {
        title: '좋아요·안돼요 바구니', tool: 'sortboard',
        teacher: '"배 위에서 이렇게 하면 좋아요일까요, 안돼요일까요?" 카드를 교사가 읽어 주고 반 전체가 엄지(좋아요)·손바닥(안돼요)으로 먼저 답하게 한다. \'난간에 올라요\'를 좋아요에 넣는 학생에게 "배가 출렁이면 난간 위에서 어떻게 될까요?"라고 묻는다. 독도에 내려서도 꽃·새·바위를 그대로 두는 것이 독도를 아끼는 일이라는 점을 짚는다.',
        task: '배와 독도에서 하는 행동을 좋아요·안돼요로 나누어요.', levels: { easy: { instant: true }, base: {}, challenge: {} },
        items: [
          SB2('배 위에서 하는 일을 나누어요.', ['좋아요', '안돼요'], ['자리에 앉아요', '구명조끼 입어요', '손잡이 잡아요'], ['난간에 올라요', '배에서 뛰어요', '몸 내밀어요'], [['어른 곁에 있어요', 0], ['갑판서 장난쳐요', 1]], 0.1),
          SB2('배 타기 전 할 일을 나누어요.', ['좋아요', '안돼요'], ['줄을 서요', '표를 챙겨요', '어른 손 잡아요'], ['새치기해요', '혼자 타요', '뛰어 타요'], [['안내를 들어요', 0], ['밀며 타요', 1]], 0.15),
          SB2('독도에 내려서 할 일을 나누어요.', ['좋아요', '안돼요'], ['길로만 걸어요', '쓰레기 챙겨요', '새를 멀리서 봐요'], ['꽃 꺾어요', '새 쫓아요', '바위에 낙서해요'], [['안내를 따라요', 0], ['돌 가져가요', 1]], 0.2, { conclude: '배에서는 앉아서 잡고, 독도에서는 꽃·새·바위를 그대로 두어요.' }),
        ],
      },
      worksheet: { items: [{ type: 'table', prompt: '좋으면 ○, 안 되면 ×를 써요.', columns: ['행동', '○ / ×'], cells: [['구명조끼 입어요', ''], ['난간에 올라요', ''], ['꽃 꺾어요', '']], answer: '○, ×, ×' }] },
    }),
    WAY({
      id: 'dokdo.e12.g2-way.wrap.ticket', type: 'wrap', title: '독도 가는 배표 꾸미기',
      method: '독도 가는 배표 꾸미기', tool: 'collage', minutes: 7,
      levels: { easy: '배·섬 조각 2개로 배표를 꾸민다.', base: '조각 4개 넘게 붙여 배표를 꾸민다.', challenge: '배표 한쪽에 날짜 칸(네모 조각)을 꾸미고 가고 싶은 날을 말한다.' },
      wrap: {
        teacher: '"독도에 가는 배표를 만들어 볼까요? 세모는 배, 갈색 반원은 섬이에요." 조각을 붙인 뒤 점검 칸에 표시하게 한다. 섬을 빼고 배만 붙인 학생에게 "이 배는 어디로 가는 배일까요?"라고 묻는다. 출구 2번에서 \'제주도\'를 고른 학생과는 가는 길 장면을 다시 놓아 본다.',
        exitTicket: [
          ART({ bg: '하양', shapes: ['triangle', 'semi', 'square', 'star'], colors: ['파랑', '갈색', '노랑', '빨강'] }, ['배를 붙였어요', '섬을 붙였어요'], 2, '배와 섬 조각으로 배표를 꾸며요.'),
          ASK('독도에 갈 때 거치는 섬은?', ['울릉도', '제주도'], 0, '항구에서 배를 타고 울릉도를 거쳐 독도에 가요.'),
          MOOD,
        ],
      },
      worksheet: {
        title: '독도 가는 배표',
        items: [
          { type: 'blank', prompt: '배표에 쓸 말을 써요.', text: '항구 → 울릉도 → ___', answer: '독도' },
          { type: 'draw', prompt: '독도 가는 배를 그려요.' },
        ],
        easy: { note: '"항구, 울릉도, 독도"를 떠올려요.', items: [{ type: 'draw', prompt: '바다 위 배를 그려요.' }] },
      },
    }),
    WAY({
      id: 'dokdo.e12.g2-way.wrap.pick', type: 'wrap', title: '기억나는 장면 고르기',
      method: '가장 기억나는 장면 고르기', tool: 'emotion', minutes: 7,
      levels: { easy: '가는 길 장면 하나를 고른다.', base: '하나를 고르고 그때 마음을 한 낱말로 말한다.', challenge: '두 장면을 골라 차례대로 짝에게 이야기한다.' },
      wrap: {
        teacher: '"오늘 상상으로 떠난 독도 가는 길에서 가장 기억나는 장면은 무엇인가요? 정답은 없어요." 하나를 고른 뒤 같은 장면을 고른 친구끼리 손을 들어 본다. 마음 낱말이 떠오르지 않는 학생에게 "설렜나요? 출렁여서 놀랐나요?" 하고 보기를 들려준다. 출구 2번에서 \'기차\'를 고른 학생에게 바다를 건너려면 배를 탄다고 짚어 준다.',
        exitTicket: [
          { type: 'tool', tool: 'emotion', options: { mode: 'branch', situation: '독도 가는 길을 떠올려요.', ask: '가장 기억나는 장면은?', choices: [{ id: 'port', text: '항구에서 출발', mood: '신남' }, { id: 'sea', text: '바다 건너기', mood: '놀람' }, { id: 'dok', text: '독도 도착', mood: '기쁨' }] }, prompt: '가장 기억나는 장면을 골라요.', target: { choice: ['port', 'sea', 'dok'] }, difficulty: 0.1 },
          ASK('독도에는 무엇을 타고 가요?', ['배', '기차'], 0, '바다를 건너야 해서 배를 타고 가요.'),
          MOOD,
        ],
      },
      worksheet: {
        title: '독도 가는 길에서',
        items: [
          { type: 'choice', prompt: '바다를 건너는 탈것에 ○ 해요.', options: ['배', '자동차'], answer: '배' },
          { type: 'draw', prompt: '가장 기억나는 장면을 그려요.' },
        ],
      },
      notes: '출구 1번은 정답이 없는 고르기다(무엇을 골라도 맞다).',
    }),
  ];

  // =====================================================================================================
  // 2학년 · 바위섬과 괭이갈매기 둥지
  const ROCKG = MOD('dokdo.e12.g2-rock', [2]);
  const NESTMAP = (more) => ({ grid: [4, 3], title: '독도 확대 지도(그림)', sea: [[0, 2], [1, 2], [3, 0], [3, 1], [3, 2], [0, 0]], places: [{ name: '바위 비탈', icon: 'mountain', at: [0, 1] }, { name: '등대', icon: 'lighthouse', at: [2, 0] }, { name: '선착장', icon: 'port', at: [2, 2] }, ...(more || [])] });
  const T_ROCK = [
    ROCKG({
      id: 'dokdo.e12.g2-rock.intro.touch', type: 'intro', title: '독도 땅과 닮은 그림 고르기',
      method: '바위·모래·흙 그림 고르기', tool: 'wordcards', minutes: 6,
      levels: { easy: '교사가 바위·모래밭 카드 두 장만 짚으며 고르게 한다.', base: '바위·모래밭·논밭 흙 세 장 가운데 고른다.', challenge: '눈 덮인 땅까지 네 장 가운데 고르고, 고른 까닭을 말한다.' },
      intro: {
        teacher: '독도 사진(공식 누리집 사진)을 보이며 "독도 땅을 만져 보면 어떤 느낌일까요? 말랑말랑? 딱딱?" 하고 묻고 기다릴 반응("딱딱해요", "바위예요")을 듣는다. 시연 단추로 \'단단한 바위\' 카드가 바구니에 담기는 모습을 보인다. "모래사장이 있어요"라는 말이 나오면 "사진에서 모래가 넓게 보이나요, 바위가 많이 보이나요?"라고 되묻는다. 오늘은 바위섬 독도와 바위에 둥지를 트는 괭이갈매기를 알아본다고 밝힌다.',
        student: '독도 땅과 닮은 그림을 골라 손으로 짚고 "딱딱해요" 말해요.',
        demo: { tool: 'wordcards', options: { mode: 'pick', basket: '독도 땅', cards: [{ id: 'sand', text: '고운 모래밭' }, { id: 'rock', text: '단단한 바위', motif: 'mountain' }, { id: 'soil', text: '논밭 흙' }, { id: 'snow', text: '눈 덮인 땅', motif: 'snow' }], shuffle: false }, sequence: [{ pick: ['rock'] }] },
        art: { draw: 'steep grey paper rock cliffs rising from a blue paper sea with small patches of grass on top and white paper seagulls sitting on the ledges', banner: '독도는 바위섬' },
      },
    }),
    ROCKG({
      id: 'dokdo.e12.g2-rock.intro.cliff', type: 'intro', title: '절벽과 들판 그림 나누기',
      method: '절벽과 들판 그림 나누기', tool: 'sortboard', minutes: 6,
      levels: { easy: '교사가 절벽 카드·들판 카드 두 장씩 넣어 보인다.', base: '시연을 본 뒤 네 카드를 반 전체가 손짓(세운 손·눕힌 손)으로 나눈다.', challenge: '나눈 뒤 "독도는 어느 바구니와 닮았나요?"에 답한다.' },
      intro: {
        teacher: '손을 세워 보이며 "이렇게 가파르게 서 있는 바위를 절벽이라고 해요." 손을 눕혀 "이렇게 평평한 땅은 들판이에요"라고 말한다. 시연 단추로 카드가 절벽·평평한 땅 바구니에 나뉘는 모습을 보인다. 독도가 들판 같다는 말이 나오면 "독도 사진에서 바위가 서 있나요, 누워 있나요?"라고 되묻는다.',
        student: '선생님 손짓을 보고 절벽은 손을 세우고, 들판은 손을 눕혀요.',
        demo: { tool: 'sortboard', options: { slots: ['절벽', '평평한 땅'], cards: ['깎아지른 바위', '넓은 운동장', '바다 위 절벽', '평평한 들판'] }, sequence: [{ sort: { 절벽: ['깎아지른 바위', '바다 위 절벽'], '평평한 땅': ['넓은 운동장', '평평한 들판'] } }] },
        art: { draw: 'on the left a steep paper sea cliff with seabirds, on the right a flat green paper field with a paper playground, a paper child holding one hand upright and one hand flat', banner: '절벽과 평평한 땅' },
      },
    }),
    ROCKG({
      id: 'dokdo.e12.g2-rock.activity.nest', type: 'activity', title: '둥지에서 새끼 기르는 차례',
      method: '둥지에서 새끼 기르는 차례 놓기', tool: 'lifecycle', minutes: 14,
      levels: { easy: '첫 카드가 놓여 있어 두 장만 놓는다.', base: '카드 세 장을 차례대로 놓는다.', challenge: '첫 문항에 \'새끼가 날아요\'가 더해져 네 장을 놓고, 나머지 문항은 틀린 카드 한 장을 빼고 놓는다.' },
      activity: {
        title: '괭이갈매기 둥지 이야기', tool: 'lifecycle',
        teacher: '"봄이 되면 괭이갈매기가 바위 위에 둥지를 틀어요. 그다음에는 무슨 일이 생길까요?" 카드를 놓은 뒤 \'차례대로 따라가 보기\' 단추를 눌러 반 전체가 따라 말한다. 둥지를 나무 위에 그리는 학생에게 "독도에는 큰 나무가 거의 없어요. 괭이갈매기는 바위 위 풀숲에 둥지를 틀어요"라고 말해 준다. 둥지와 새끼를 기르는 동안 사람이 가까이 가면 새가 놀란다는 점을 짚는다.',
        task: '괭이갈매기 카드를 둥지에서 새끼를 기르는 차례대로 놓아요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          { prompt: '둥지에서 새끼 기르는 차례로 놓아요.', toolOptions: { center: '괭이갈매기 둥지', cycle: false, slots: 3, cards: [{ id: 'chick', text: '새끼 길러요', motif: 'chick' }, { id: 'nest', text: '둥지 틀어요', motif: 'leaf' }, { id: 'egg', text: '알 낳아요', motif: 'egg' }] }, target: { order: ['nest', 'egg', 'chick'] }, difficulty: 0.1,
            levels: {
              easy: { state: { at: { nest: 0, egg: null, chick: null } } },
              challenge: { prompt: '새끼가 날기까지 놓아요.', toolOptions: { slots: 4, cards: [{ id: 'chick', text: '새끼 길러요', motif: 'chick' }, { id: 'fly', text: '새끼가 날아요', motif: 'bird' }, { id: 'nest', text: '둥지 틀어요', motif: 'leaf' }, { id: 'egg', text: '알 낳아요', motif: 'egg' }] }, target: { order: ['nest', 'egg', 'chick', 'fly'] } },
            } },
          { prompt: '어미가 새끼를 먹이는 차례예요.', toolOptions: { center: '먹이 주기', cycle: false, slots: 3, cards: [{ id: 'grow', text: '새끼가 자라요', motif: 'chick' }, { id: 'catch', text: '어미가 먹이 잡아요', motif: 'bird' }, { id: 'eat', text: '새끼가 받아먹어요', motif: 'chick' }] }, target: { order: ['catch', 'eat', 'grow'] }, difficulty: 0.15,
            levels: { easy: { state: { at: { catch: 0, eat: null, grow: null } } }, challenge: { toolOptions: { cards: [{ id: 'grow', text: '새끼가 자라요', motif: 'chick' }, { id: 'catch', text: '어미가 먹이 잡아요', motif: 'bird' }, { id: 'snack', text: '과자를 먹어요', motif: 'star' }, { id: 'eat', text: '새끼가 받아먹어요', motif: 'chick' }] } } } },
          { prompt: '알에서 날기까지 놓아요.', toolOptions: { center: '새끼가 날기까지', cycle: false, slots: 3, cards: [{ id: 'try', text: '날기 연습해요', motif: 'bird' }, { id: 'hatch', text: '알에서 나와요', motif: 'egg' }, { id: 'fur', text: '털이 자라요', motif: 'chick' }] }, target: { order: ['hatch', 'fur', 'try'] }, difficulty: 0.2,
            levels: { easy: { state: { at: { hatch: 0, fur: null, try: null } } }, challenge: { toolOptions: { cards: [{ id: 'try', text: '날기 연습해요', motif: 'bird' }, { id: 'hatch', text: '알에서 나와요', motif: 'egg' }, { id: 'swim', text: '바닷속에 살아요', motif: 'cloud' }, { id: 'fur', text: '털이 자라요', motif: 'chick' }] } } },
            conclude: '괭이갈매기는 바위 위 둥지에서 알을 낳고 새끼를 길러요.' },
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '둥지 틀기 → 알 낳기 → 새끼 ___', answer: '기르기' }] },
    }),
    ROCKG({
      id: 'dokdo.e12.g2-rock.activity.quiet', type: 'activity', title: '둥지 곁 조용히 걷기',
      method: '둥지 곁에서 조용히 걷기 놀이', tool: 'timer', minutes: 13,
      levels: { easy: '걷기 카드 2장의 차례를 맞추고 놀이를 1번으로 맞춘다.', base: '걷기 카드 3장의 차례를 맞추고 놀이를 2번으로 맞춘다.', challenge: '카드 4장을 맞추고, 조용히 걷기 한 번을 10초로 맞춰 2번 한다.' },
      activity: {
        title: '쉿, 둥지 곁을 지나가요', tool: 'timer',
        teacher: '둥지 역할 친구 둘이 교실 가운데 쪼그려 앉으면 "쉿! 둥지가 있어요. 어떻게 지나갈까요?" 하고 묻는다. 걷기 차례와 시간을 화면에서 맞춘 뒤, 타이머가 도는 동안 나머지 학생이 둥지 곁을 멀리 돌아 발끝으로 지나간다. 둥지 쪽으로 다가가 들여다보는 학생에게 "가까이 오면 어미 새가 놀라 둥지를 떠날 수 있어요"라고 말해 준다. 소리 없이 멀리 돌아가는 것이 둥지를 지키는 방법이라는 점을 짚는다.',
        task: '조용히 걷기 차례를 맞추고 놀이 시간과 횟수를 맞춰요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          { prompt: '둥지 곁 걷기 차례로 놓아요.', toolOptions: { title: '둥지 곁 걷기', cards: ['멀리 돌아가요', '멈춰요', '둥지를 봐요'] }, target: { order: ['멈춰요', '둥지를 봐요', '멀리 돌아가요'] }, difficulty: 0.1,
            levels: {
              easy: { prompt: '둥지 곁 걷기 차례로 놓아요(2장).', toolOptions: { cards: ['멀리 돌아가요', '멈춰요'] }, target: { order: ['멈춰요', '멀리 돌아가요'] } },
              challenge: { prompt: '둥지 곁 걷기 차례로 놓아요(4장).', toolOptions: { cards: ['발끝으로 걸어요', '멀리 돌아가요', '멈춰요', '둥지를 봐요'] }, target: { order: ['멈춰요', '둥지를 봐요', '멀리 돌아가요', '발끝으로 걸어요'] } },
            } },
          { prompt: '조용히 걷기 2번이 되게 맞춰요.', toolOptions: { title: '조용히 걷기(우리 반 약속)', labels: ['조용히', '쉬기'], plan: { work: 5, rest: 5, rounds: 3 } }, target: { plan: { rounds: 2 } }, difficulty: 0.15,
            hints: ['조용히 걷기 한 번을 하나로 세어요.', '번 칸이 놀이 횟수예요.', '번 칸을 하나씩 내려 맞춰요.'],
            levels: { easy: { prompt: '조용히 걷기 1번이 되게 맞춰요.', target: { plan: { rounds: 1 } } }, challenge: { prompt: '10초씩 2번이 되게 맞춰요.', target: { plan: { work: 10, rounds: 2 } } } } },
          { prompt: '놀이를 마치고 표시해요.', toolOptions: { title: '조용히 걷기 점검' }, target: { selfCheck: ['소리 내지 않았어요', '둥지를 안 만졌어요', '멀리 돌아갔어요'] }, difficulty: 0.2, conclude: '둥지 곁에서는 멈추고, 멀리 돌아, 조용히 지나가요.' },
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '둥지 곁에서는 어떻게 해요?', options: ['멀리 돌아가요', '들여다봐요'], answer: '멀리 돌아가요' }] },
      notes: '교사가 진행하는 몸 놀이다. 둥지 역할은 원하는 학생만 맡고 둘레를 걷는 학생과 팔 길이 넘게 떨어진다. 10초는 이 놀이에서 정한 연습 시간이다.',
    }),
    ROCKG({
      id: 'dokdo.e12.g2-rock.activity.place', type: 'activity', title: '확대 지도에서 둥지 자리 찾기',
      method: '확대 지도에서 둥지 칸 찾기', tool: 'map', minutes: 14,
      levels: { easy: '이름이 보이고, 핀을 놓으면 그 칸 이름이 \'지금\' 칸에 나온다.', base: '이름이 보이는 확대 지도에서 알맞은 곳에 꽂는다.', challenge: '이름을 숨기고 풀밭 언덕이 더 있는 지도에서 기호로 두 곳(바위 비탈·풀밭 언덕) 가운데 둥지 자리를 찾는다.' },
      activity: {
        title: '독도 확대 지도 둥지 찾기', tool: 'map',
        teacher: '"괭이갈매기는 어디에 둥지를 틀까요? 등대 위? 배가 닿는 곳? 바위 비탈?" 핀을 꽂기 전에 까닭을 한 낱말로 말하게 한다. 선착장에 꽂는 학생에게 "사람과 배가 오가는 곳이면 새가 편히 알을 품을 수 있을까요?"라고 묻는다. 둥지는 사람이 잘 가지 않는 바위 위에 있으니 멀리서 본다는 점을 짚는다.',
        task: '독도 확대 지도에서 둥지 자리와 배가 닿는 곳을 찾아 꽂아요.', levels: { easy: { readout: true }, base: {}, challenge: { names: false } },
        items: [
          { prompt: '괭이갈매기 둥지 자리에 꽂아요.', toolOptions: NESTMAP(), target: { place: '바위 비탈' }, difficulty: 0.1, levels: { challenge: { toolOptions: { places: NESTMAP([{ name: '풀밭 언덕', icon: 'forest', at: [1, 0] }]).places } } } },
          { prompt: '배가 닿는 곳에 꽂아요.', toolOptions: NESTMAP(), target: { place: '선착장' }, difficulty: 0.15, levels: { challenge: { toolOptions: { places: NESTMAP([{ name: '풀밭 언덕', icon: 'forest', at: [1, 0] }]).places } } } },
          { prompt: '밤에 불을 밝히는 곳에 꽂아요.', toolOptions: NESTMAP(), target: { place: '등대' }, difficulty: 0.2, levels: { challenge: { toolOptions: { places: NESTMAP([{ name: '풀밭 언덕', icon: 'forest', at: [1, 0] }]).places } } }, conclude: '괭이갈매기 둥지는 사람이 오가는 곳에서 먼 바위 위에 있어요.' },
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '괭이갈매기 둥지는 어디에?', options: ['바위 위', '나무 위'], answer: '바위 위' }] },
      notes: '확대 지도는 그림이다(실제 자리와 다를 수 있다). 괭이갈매기 둥지는 바위 위·바위틈 풀밭에 있다(첫머리 \'사람 확인\'). 도전 단계의 풀밭 언덕도 둥지를 틀 수 있는 곳이라 첫 문항은 바위 비탈로만 맞힌다 — 교사가 "둘 다 둥지를 틀 수 있어요"라고 덧붙인다.',
    }),
    ROCKG({
      id: 'dokdo.e12.g2-rock.activity.feel', type: 'activity', title: '새끼 갈매기 마음 고르기',
      method: '새끼 갈매기 마음 고르기', tool: 'emotion', minutes: 13,
      levels: { easy: '두 짝만 잇고, 맞게 놓으면 초록 테두리가 생긴다(갈림길 문항은 보기 2개).', base: '세 짝을 이은 뒤 확인한다(갈림길 문항은 보기 3개).', challenge: '세 짝에 남는 마음 카드가 섞이고, 마지막 문항에서 어떻게 할지 고른 뒤 까닭을 말한다.' },
      activity: {
        title: '새끼 갈매기는 어떤 마음일까요?', tool: 'emotion',
        teacher: '"사람이 둥지 가까이 다가오면 새끼 갈매기는 어떤 마음일까요?" 칸 글을 교사가 읽어 주고 마음 카드를 잇게 한다. \'편안함\'을 잇는 학생에게 "내가 아주 작은데 큰 사람이 다가오면 어떨까요?"라고 묻는다. 새의 마음을 생각하면 어떻게 행동해야 할지 알 수 있다는 점을 짚는다.',
        task: '장면을 듣고 새끼 갈매기의 마음 카드를 잇고, 할 일을 골라요.', levels: { easy: { live: true }, base: {}, challenge: { revealAfterCheck: true } },
        items: [
          MATCH3('사람이 오면 어떤 마음일까요?', [['near', '사람이 가까이 와요', '무서움'], ['far', '사람이 멀리서 봐요', '편안함'], ['loud', '큰 소리가 나요', '놀람']], '신남', 0.1),
          MATCH3('이럴 때 어떤 마음일까요?', [['touch', '알을 만져요', '걱정'], ['quiet', '조용히 지나가요', '편안함'], ['chase', '쫓아와요', '무서움']], '기쁨', 0.15),
          BR('새끼가 길에 있어요. 어떻게 해요?', '새끼 갈매기가 길가에 있어요.', ['away', '멀리 돌아가요', '새끼가 편히 쉬어요.', '편안함'], ['hug', '안아 줘요', '어미가 못 찾아요.', '걱정'], ['photo', '가까이 찍어요', '새끼가 놀라요.', '놀람'], 0.2, { conclude: '새끼 갈매기가 편안하려면 멀리서 조용히 봐요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '사람이 다가오면 새끼 마음은?', options: ['무서움', '신남'], answer: '무서움' }] },
    }),
    ROCKG({
      id: 'dokdo.e12.g2-rock.wrap.nest-art', type: 'wrap', title: '색종이 둥지 꾸미기',
      method: '색종이 둥지 꾸미기', tool: 'collage', minutes: 7,
      levels: { easy: '바위·둥지 조각 2개를 붙인다.', base: '바위·둥지·알 조각 4개 넘게 붙인다.', challenge: '둥지 곁에 어미 새 조각까지 붙인다.' },
      wrap: {
        teacher: '"갈색 반원은 바위, 초록 잎은 둥지 풀, 하얀 동그라미는 알이에요. 바위 위에 둥지를 꾸며 볼까요?" 조각을 붙인 뒤 점검 칸에 표시하게 한다. 둥지를 판 맨 위 하늘에 붙인 학생에게 "괭이갈매기 둥지는 무엇 위에 있었지요?"라고 묻는다. 출구 2번에서 \'나무 위\'를 고른 학생과는 둥지 이야기 카드를 다시 본다.',
        exitTicket: [
          ART({ bg: '파랑', shapes: ['semi', 'leaf', 'circle', 'triangle'], colors: ['갈색', '초록', '하양', '노랑'] }, ['바위에 둥지를 붙였어요', '알을 붙였어요'], 2, '바위 위에 둥지와 알을 꾸며요.'),
          ASK('괭이갈매기 둥지는 어디에 있나요?', ['바위 위', '나무 위'], 0, '괭이갈매기는 바위 위 풀숲에 둥지를 틀어요.'),
          MOOD,
        ],
      },
      worksheet: {
        title: '바위 위 괭이갈매기 둥지',
        items: [
          { type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '괭이갈매기는 ___ 위에 둥지를 틀어요.', answer: '바위' },
          { type: 'draw', prompt: '바위 위 둥지와 알을 그려요.' },
        ],
        easy: { note: '"바위 위 둥지"를 떠올려요.', items: [{ type: 'draw', prompt: '알 하나를 그려요.' }] },
      },
    }),
    ROCKG({
      id: 'dokdo.e12.g2-rock.wrap.chant', type: 'wrap', title: '"쉿, 둥지" 약속 구호',
      method: '"쉿, 둥지" 약속 구호', tool: 'timer', minutes: 7,
      levels: { easy: '구호 없이 "쉿" 손가락 동작만 함께 한다.', base: '구호 카드 세 장의 차례를 맞추고 동작과 함께 외친다.', challenge: '교사 없이 혼자 구호와 동작을 해 보인다.' },
      wrap: {
        teacher: '"쉿! (입에 손가락) 둥지는! (두 손 오므려 둥지) 멀리서 봐요! (손 망원경)" 구호 카드 차례를 맞춘 뒤 반 전체가 동작과 함께 작은 목소리로 세 번 외친다. 큰 소리로 외치는 학생에게 "둥지 구호는 새가 놀라지 않게 작은 목소리로 해요"라고 웃으며 말해 준다. 출구 2번에서 \'만져 봐요\'를 고른 학생에게 둥지는 멀리서 본다고 다시 짚는다.',
        exitTicket: [
          CHANT('둥지 약속 구호', ['"쉿!"', '"둥지는"', '"멀리서 봐요"'], '둥지 약속 구호를 차례대로 놓아요.'),
          ASK('둥지를 보면 어떻게 해요?', ['만져 봐요', '멀리서 봐요'], 1, '둥지와 알은 만지지 않고 멀리서 봐요.'),
          MOOD,
        ],
      },
      worksheet: {
        title: '쉿, 둥지는 멀리서',
        items: [
          { type: 'check', prompt: '둥지 약속에 ✓ 해요.', options: ['소리 내지 않아요', '알을 만지지 않아요', '멀리 돌아가요'] },
          { type: 'draw', prompt: '둥지를 멀리서 보는 내 모습을 그려요.' },
        ],
        easy: { note: '"쉿, 멀리서"를 떠올려요.', items: [{ type: 'draw', prompt: '입에 손가락을 댄 얼굴을 그려요.' }] },
      },
    }),
  ];

  // =====================================================================================================
  // 2학년 · 독도 바다 먹을거리와 등대
  const SEA2 = MOD('dokdo.e12.g2-sea', [2]);
  const T_SEA2 = [
    SEA2({
      id: 'dokdo.e12.g2-sea.intro.market', type: 'intro', title: '시장에서 바다 먹을거리 찾기',
      method: '시장 그림에서 바다 먹을거리 고르기', tool: 'wordcards', minutes: 6,
      levels: { easy: '교사가 오징어·사과 두 장만 짚으며 바다에서 온 것을 고르게 한다.', base: '네 장 가운데 바다에서 온 두 가지를 고른다.', challenge: '고른 뒤 \'미역은 동물일까, 바다 풀일까?\'에 답한다.' },
      intro: {
        teacher: '"시장에 가면 바다에서 온 먹을거리가 있어요. 무엇이 바다에서 왔을까요?" 시장 그림을 보이며 기다릴 반응("오징어요", "생선이요")을 듣는다. 시연 단추로 오징어·미역 카드가 차례로 바구니에 담기는 모습을 보인다. "미역은 물고기예요"라는 말이 나오면 "미역은 헤엄치지 않고 바위에 붙어 자라는 바다 풀이에요"라고 짚는다. 오늘은 독도 바다에서 나는 먹을거리와 밤바다를 지키는 등대를 알아본다고 밝힌다.',
        student: '시장 그림에서 바다에서 온 먹을거리를 찾아 손으로 짚어요.',
        demo: { tool: 'wordcards', options: { mode: 'pick', basket: '바다에서 왔어요', cards: [{ id: 'squid', text: '오징어' }, { id: 'apple', text: '사과', motif: 'flower' }, { id: 'kelp', text: '미역', motif: 'leaf' }, { id: 'carrot', text: '당근' }], shuffle: false }, sequence: [{ pick: ['squid'] }, { pick: ['squid', 'kelp'] }] },
        art: { draw: 'a cheerful paper market stall with paper squid, abalone shells and green seaweed on one table and paper apples and carrots on another, a paper child pointing at the sea food table', banner: '바다에서 온 먹을거리' },
      },
    }),
    SEA2({
      id: 'dokdo.e12.g2-sea.intro.night', type: 'intro', title: '밤바다 불빛 그림 찾기',
      method: '밤바다 그림에서 불빛 찾기', tool: 'sortboard', minutes: 6,
      levels: { easy: '교사가 불빛 있는 카드·없는 카드 한 장씩 넣어 보인다.', base: '시연을 본 뒤 네 카드를 반 전체가 손짓(반짝·깜깜)으로 나눈다.', challenge: '나눈 뒤 "배에게 가장 도움이 되는 불빛은?"에 답한다.' },
      intro: {
        teacher: '교실 불을 잠깐 끄고 "깜깜한 밤바다예요. 배는 무엇을 보고 길을 찾을까요?"라고 묻는다. 기다릴 반응("불빛이요", "등대요")을 듣고 시연 단추로 \'등대 불빛\'·\'배 불빛\' 카드가 불빛 바구니에 들어가는 모습을 보인다. "등대는 낮에만 켜요"라는 말이 나오면 "낮에는 해가 밝혀 주지요. 등대가 꼭 필요한 때는 언제일까요?"라고 되묻는다.',
        student: '밤바다 그림에서 반짝이는 불빛을 찾아 "반짝!" 하고 짚어요.',
        demo: { tool: 'sortboard', options: { slots: ['불빛 있어요', '불빛 없어요'], cards: ['등대 불빛', '캄캄한 바다', '반짝 배 불빛', '깜깜한 바위'] }, sequence: [{ sort: { '불빛 있어요': ['등대 불빛', '반짝 배 불빛'], '불빛 없어요': ['캄캄한 바다', '깜깜한 바위'] } }] },
        art: { draw: 'a dark blue paper night sea with a white paper lighthouse on a rocky island shining a soft yellow beam across the waves, a small paper boat with a tiny light following it', banner: '밤바다를 밝히는 등대' },
      },
    }),
    SEA2({
      id: 'dokdo.e12.g2-sea.activity.sort', type: 'activity', title: '바다 동물·바다 풀 나누기',
      method: '바다 동물·바다 풀 나누기', tool: 'sortboard', minutes: 14,
      levels: { easy: '카드 4장, 맞는 바구니에 넣으면 초록 테두리가 생긴다.', base: '카드 6장을 다 넣은 뒤 확인한다.', challenge: '카드 8장, 헤엄치지 않는 홍합·소라처럼 헷갈리는 동물이 섞이고 왜 헷갈리는지 말한다.' },
      activity: {
        title: '독도 바다 먹을거리 나누기', tool: 'sortboard',
        teacher: '"오징어는 바다 동물일까요, 바다 풀일까요?" 카드를 교사가 읽어 주고 반 전체가 손으로 헤엄(동물)·흔들흔들(풀)을 먼저 해 보게 한다. 홍합을 바다 풀에 넣는 학생에게 "홍합은 바위에 붙어 있지만 껍데기 안에 살아 있는 동물이에요"라고 말해 준다. 미역·감태 같은 바다 풀도 독도 바다를 이루는 생물이라는 점을 짚는다.',
        task: '독도 바다 먹을거리 카드를 동물·풀로 나누어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
        items: [
          SB2('바다 동물과 바다 풀로 나누어요.', ['바다 동물', '바다 풀'], ['오징어', '새우', '전복'], ['미역', '모자반', '감태'], [['홍합', 0], ['소라', 0]], 0.1),
          SB2('어디에서 온 먹을거리인가요?', ['바다 먹을거리', '땅 먹을거리'], ['오징어', '전복', '미역'], ['감자', '사과', '쌀'], [['새우', 0], ['배추', 1]], 0.15),
          SB2('독도 바다 생물을 나누어요.', ['바다 동물', '바다 풀'], ['해삼', '성게', '문어'], ['미역', '감태', '대황'], [['홍합', 0], ['모자반', 1]], 0.2, { conclude: '독도 바다에는 오징어·전복 같은 바다 동물과 미역·감태 같은 바다 풀이 살아요.' }),
        ],
      },
      worksheet: { items: [{ type: 'table', prompt: '바다 동물은 ○, 바다 풀은 △를 써요.', columns: ['생물', '○ / △'], cells: [['오징어', ''], ['미역', ''], ['전복', '']], answer: '○, △, ○' }] },
      notes: '독도 바다 생물 이름은 첫머리 \'사람 확인\' 목록에 있다. 낯선 이름은 사진과 함께 교사가 읽어 준다.',
    }),
    SEA2({
      id: 'dokdo.e12.g2-sea.activity.shop', type: 'activity', title: '바다 먹을거리 가게 놀이',
      method: '바다 먹을거리 가게 놀이', tool: 'economy', minutes: 13,
      levels: { easy: '100원 동전 한 가지로만 값을 맞춘다.', base: '100원·500원 두 가지로 값을 맞춘다.', challenge: '1000원 지폐까지 있고, 마지막 문항에서 1000원을 내고 거스름돈을 준다.' },
      activity: {
        title: '가게 놀이(놀이 값)', tool: 'economy',
        teacher: '"우리 반 바다 가게예요. 미역 한 봉지는 300원이에요(놀이 값). 100원짜리 동전이 몇 개 필요할까요?" 동전을 놓을 때마다 "100, 200, 300" 하고 함께 센다. 500원짜리를 낼 수 있는데 100원짜리를 많이 놓는 학생에게 "500원짜리 한 개는 100원짜리 몇 개와 같을까요?"라고 묻는다. 가격은 놀이를 위해 정한 값이고 실제 값이 아니라고 밝힌다.',
        task: '가격표를 보고 동전으로 값을 맞춰요.', levels: { easy: { coins: [100] }, base: { coins: [100, 500] }, challenge: { coins: [100, 500, 1000] } },
        items: [
          { prompt: '미역을 300원에 사요(놀이 값).', toolOptions: { mode: 'pay', item: { text: '미역', price: 300 } }, target: { pay: 300 }, difficulty: 0.1 },
          { prompt: '전복을 600원에 사요(놀이 값).', toolOptions: { mode: 'pay', item: { text: '전복', price: 600 } }, target: { pay: 600, fewest: true }, difficulty: 0.15 },
          { prompt: '오징어를 800원에 사요(놀이 값).', toolOptions: { mode: 'pay', item: { text: '오징어', price: 800 } }, target: { pay: 800 }, difficulty: 0.2,
            levels: { challenge: { prompt: '1000원을 내고 거스름돈을 줘요.', toolOptions: { paid: 1000 }, target: { pay: 200 } } },
            conclude: '값을 맞출 때는 큰 돈부터 놓고 작은 돈으로 채워요.' },
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 수를 써요.', text: '100원짜리 3개는 ___원이에요.', answer: '300' }] },
      notes: '가격은 수업용 놀이 값이다(실제 시장 값이 아님). 쉬움 단계는 100원짜리만 쓰므로 전복 600원도 100원 6개가 가장 적은 개수다.',
    }),
    SEA2({
      id: 'dokdo.e12.g2-sea.activity.beam', type: 'activity', title: '등대 불빛 차례 놓기',
      method: '등대 불빛 차례 놓기', tool: 'story', minutes: 14,
      levels: { easy: '첫 장면이 놓여 있어 남은 두 장만 놓는다.', base: '장면 세 장을 차례대로 놓는다.', challenge: '틀린 장면 한 장이 섞여 빼고 놓고, 다 놓은 뒤 배가 할 말을 말풍선처럼 짝에게 말한다.' },
      activity: {
        title: '밤바다와 등대 이야기', tool: 'story',
        teacher: '"해가 지고 밤이 되었어요. 등대는 무엇을 할까요?" 장면을 놓은 뒤 배가 되어 "등대야, 고마워!" 하고 말해 보게 한다. \'등대 불을 꺼요\'를 넣는 학생에게 "깜깜한 밤에 등대가 불을 끄면 배는 어떻게 될까요?"라고 묻는다. 등대는 밤에 불을 밝혀 배가 바위에 부딪히지 않고 길을 찾게 돕는다는 점을 짚는다.',
        task: '장면 카드를 일어나는 차례대로 놓아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          ORDER3('밤바다 장면 차례로 놓아요.', [{ id: 'night', text: '밤이 돼요' }, { id: 'on', text: '등대 불을 켜요' }, { id: 'find', text: '배가 길을 찾아요' }], { id: 'off', text: '등대 불을 꺼요' }, 0.1),
          ORDER3('배가 항구로 오는 차례예요.', [{ id: 'see', text: '등대 불을 봐요' }, { id: 'turn', text: '방향을 바꿔요' }, { id: 'arrive', text: '항구에 닿아요' }], { id: 'crash', text: '바위로 가요' }, 0.15),
          ORDER3('등대의 하루를 차례로 놓아요.', [{ id: 'eve', text: '저녁에 불 켜요' }, { id: 'all', text: '밤새 비춰요' }, { id: 'morn', text: '아침에 불 꺼요' }], { id: 'noon', text: '한낮에만 켜요' }, 0.2, { conclude: '등대는 밤에 불을 밝혀 배가 안전하게 길을 찾게 도와요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '등대는 언제 불을 켜요?', options: ['밤', '한낮'], answer: '밤' }] },
    }),
    SEA2({
      id: 'dokdo.e12.g2-sea.activity.ship', type: 'activity', title: '등대 불빛 따라 배 움직이기',
      method: '등대 불빛 따라 배 움직이기', tool: 'timer', minutes: 13,
      levels: { easy: '놀이 카드 2장의 차례를 맞추고 놀이를 1번으로 맞춘다.', base: '놀이 카드 3장의 차례를 맞추고 놀이를 2번으로 맞춘다.', challenge: '카드 4장을 맞추고 놀이를 3번으로 맞춘 뒤, 등대 역할과 배 역할을 바꾼다.' },
      activity: {
        title: '불빛 따라 배 놀이', tool: 'timer',
        teacher: '교실 불을 끄고 교사(등대 역할)가 손전등으로 바닥을 비추면 "배는 불빛을 따라 천천히!" 하고 말한다. 놀이 차례와 횟수를 화면에서 맞춘 뒤 타이머가 도는 동안 배 역할 학생들이 불빛 쪽으로 천천히 걷는다. 불빛을 보지 않고 아무 데나 가는 학생에게 "불빛이 없으면 배는 바위가 어디 있는지 알 수 있을까요?"라고 묻는다. 등대 불빛 덕분에 배가 안전하게 다닌다는 점을 짚는다.',
        task: '배 놀이 카드를 차례대로 놓고 놀이 횟수를 맞춰요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          { prompt: '불빛 따라 배 놀이 차례예요.', toolOptions: { title: '배 놀이 차례', cards: ['불빛 쪽으로 걸어요', '손전등 켜요', '불빛을 봐요'] }, target: { order: ['손전등 켜요', '불빛을 봐요', '불빛 쪽으로 걸어요'] }, difficulty: 0.1,
            levels: {
              easy: { prompt: '배 놀이 차례로 놓아요(2장).', toolOptions: { cards: ['불빛 쪽으로 걸어요', '손전등 켜요'] }, target: { order: ['손전등 켜요', '불빛 쪽으로 걸어요'] } },
              challenge: { prompt: '배 놀이 차례로 놓아요(4장).', toolOptions: { cards: ['멈춰 서요', '불빛 쪽으로 걸어요', '손전등 켜요', '불빛을 봐요'] }, target: { order: ['손전등 켜요', '불빛을 봐요', '불빛 쪽으로 걸어요', '멈춰 서요'] } },
            } },
          { prompt: '배 놀이 2번이 되게 맞춰요.', toolOptions: { title: '배 놀이(우리 반 약속)', labels: ['배 놀이', '쉬기'], plan: { work: 10, rest: 5, rounds: 4 } }, target: { plan: { rounds: 2 } }, difficulty: 0.15,
            hints: ['배 놀이 한 번을 하나로 세어요.', '번 칸이 놀이 횟수예요.', '번 칸을 하나씩 내려 맞춰요.'],
            levels: { easy: { prompt: '배 놀이 1번이 되게 맞춰요.', target: { plan: { rounds: 1 } } }, challenge: { prompt: '배 놀이 3번이 되게 맞춰요.', target: { plan: { rounds: 3 } } } } },
          { prompt: '배 놀이를 마치고 표시해요.', toolOptions: { title: '배 놀이 점검' }, target: { selfCheck: ['불빛을 따라갔어요', '천천히 걸었어요', '눈에 안 비췄어요'] }, difficulty: 0.2, conclude: '등대 불빛을 따라가면 배가 길을 잃지 않아요.' },
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '깜깜한 밤 배를 돕는 것은?', options: ['등대 불빛', '구름'], answer: '등대 불빛' }] },
      notes: '교사가 진행하는 몸 놀이다. 손전등은 바닥만 비추고 사람 눈에 비추지 않는다. 걷는 길의 책상·가방을 치운다. 횟수는 이 수업에서 정한 놀이 약속이다.',
    }),
    SEA2({
      id: 'dokdo.e12.g2-sea.wrap.art', type: 'wrap', title: '색종이 등대 꾸미기',
      method: '등대 꾸미기', tool: 'collage', minutes: 7,
      levels: { easy: '긴 네모·세모 조각 2개로 등대를 세운다.', base: '조각 4개 넘게 붙여 등대를 꾸민다.', challenge: '노란 조각으로 등대 불빛까지 붙인다.' },
      wrap: {
        teacher: '"긴 네모는 등대 몸, 세모는 지붕이에요. 바위 위에 등대를 세워 볼까요?" 조각을 붙인 뒤 점검 칸에 표시하게 한다. 지붕만 붙인 학생에게 "불빛은 어디에서 나올까요? 등대 몸이 있어야 높이 비출 수 있어요"라고 말해 준다. 출구 2번에서 \'낮에만\'을 고른 학생과는 밤바다 장면을 다시 본다.',
        exitTicket: [
          { type: 'tool', tool: 'collage', options: { bg: '파랑', shapes: ['rect', 'triangle', 'circle', 'semi'], colors: ['하양', '빨강', '노랑', '갈색'] }, prompt: '긴 네모와 세모로 등대를 세워요.', target: { has: [{ shape: 'rect', min: 1 }, { shape: 'triangle', min: 1 }] }, difficulty: 0.1 },
          ASK('등대는 언제 불을 밝혀요?', ['밤에', '낮에만'], 0, '등대는 깜깜한 밤에 불을 밝혀 배를 도와요.'),
          MOOD,
        ],
      },
      worksheet: {
        title: '밤바다를 밝히는 등대',
        items: [
          { type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '등대는 ___에 불을 켜요.', answer: '밤' },
          { type: 'draw', prompt: '불빛을 비추는 등대를 그려요.' },
        ],
        easy: { note: '"밤에 반짝"을 떠올려요.', items: [{ type: 'draw', prompt: '등대 하나를 그려요.' }] },
      },
    }),
    SEA2({
      id: 'dokdo.e12.g2-sea.wrap.face', type: 'wrap', title: '등대지기에게 할 말 고르기',
      method: '등대지기에게 할 말 고르기', tool: 'emotion', minutes: 7,
      levels: { easy: '등대관리원께 드릴 말 한 장만 잇는다.', base: '등대관리원·경비대원께 드릴 말 두 장을 잇는다.', challenge: '두 장을 이은 뒤 내 말로 고마운 말을 하나 더 만들어 말한다.' },
      wrap: {
        teacher: '"밤마다 등대 불을 돌보는 분께 어떤 말을 드리고 싶나요?" 말 카드를 이은 뒤 반 전체가 소리 내어 읽는다. 카드를 바꿔 잇는 학생에게 "밤길을 밝혀 준 분은 누구였지요?"라고 말해 준다. 출구 2번까지 마치면 짝에게 내 말로 고마운 말을 한 번 해 본다.',
        exitTicket: [
          { type: 'tool', tool: 'emotion', options: { mode: 'match', slots: [{ id: 'light', label: '등대관리원께' }, { id: 'guard', label: '경비대원께' }], cards: ['섬 지켜 고마워요', '밤길 밝혀 고마워요'] }, prompt: '고마운 말을 알맞게 이어요.', target: { match: { light: '밤길 밝혀 고마워요', guard: '섬 지켜 고마워요' } }, difficulty: 0.1 },
          ASK('등대 불빛은 누구를 돕나요?', ['밤바다의 배', '하늘의 새'], 0, '등대 불빛은 밤바다의 배가 길을 찾게 도와요.'),
          MOOD,
        ],
      },
      worksheet: {
        title: '고마운 분께 드리는 말',
        items: [
          { type: 'blank', prompt: '고마운 말을 따라 써요.', text: '밤길을 밝혀 주셔서 ___.', answer: '고맙습니다' },
          { type: 'draw', prompt: '등대관리원께 드릴 카드를 그려요.' },
        ],
      },
      notes: '\'등대지기\'는 등대관리원(항로표지관리원)을 쉽게 부르는 말이다.',
    }),
  ];

  // =====================================================================================================
  // 2학년 · 독도 소개와 지킴이 약속
  const INTRO = MOD('dokdo.e12.g2-intro', [2]);
  const PROV = [{ name: '강원도', cells: [[2, 0], [3, 0]] }, { name: '경상북도', cells: [[3, 1], [4, 1], [5, 1]] }, { name: '경상남도', cells: [[2, 2], [3, 2]] }];
  const T_INTRO = [
    INTRO({
      id: 'dokdo.e12.g2-intro.intro.quiz', type: 'intro', title: '그림 보고 독도 맞히기',
      method: '그림 보고 독도 맞히기', tool: 'wordcards', minutes: 6,
      levels: { easy: '교사가 \'두 섬 바위섬\'·\'모래 섬\' 두 장만 짚으며 고르게 한다.', base: '세 장 가운데 독도 생김새 카드를 고른다.', challenge: '네 장 가운데 고르고, 독도인 까닭(두 큰 섬, 바위)을 말한다.' },
      intro: {
        teacher: '"이 가운데 독도는 어느 섬일까요? 지금까지 배운 것을 떠올려 봐요." 카드를 하나씩 읽어 주고 기다릴 반응("두 섬이요", "바위섬이요")을 듣는다. 시연 단추로 \'두 섬 바위섬\' 카드가 바구니에 담기는 모습을 보인다. 모래 섬을 고르는 학생에게 "독도 땅을 만지면 말랑했나요, 딱딱했나요?"라고 되묻는다. 오늘은 독도를 친구에게 소개하고 지킴이 약속을 정한다고 밝힌다.',
        student: '섬 그림 카드 가운데 독도를 골라 "독도!" 하고 짚어요.',
        demo: { tool: 'wordcards', options: { mode: 'pick', basket: '독도예요', cards: [{ id: 'one', text: '둥근 섬 하나' }, { id: 'dok', text: '두 섬 바위섬', motif: 'mountain' }, { id: 'sand', text: '모래 섬' }, { id: 'big', text: '숲 많은 큰 섬', motif: 'tree' }], shuffle: false }, sequence: [{ pick: ['dok'] }] },
        art: { draw: 'four paper island cards on a paper table: a round sandy island, a big forest island, a single round island, and two rocky islands with seagulls, a paper child holding up the rocky pair', banner: '어느 섬이 독도일까요?' },
      },
    }),
    INTRO({
      id: 'dokdo.e12.g2-intro.intro.map', type: 'intro', title: '지도에서 경상북도 찾기',
      method: '지도에서 경상북도 찾기', tool: 'map', minutes: 6,
      levels: { easy: '교사가 색이 칠해진 지역 칸을 짚으며 "독도가 들어 있는 색은?" 하고 함께 찾는다.', base: '지역 이름을 읽고 독도가 들어 있는 경상북도를 찾는다.', challenge: '경상북도를 찾은 뒤 독도가 경상북도 울릉군에 있다는 것까지 말한다.' },
      intro: {
        teacher: '"독도는 우리나라의 어느 도에 속할까요? 지도에서 독도와 같은 색으로 칠해진 땅을 찾아봐요." 시연 단추로 경상북도 칸에 핀이 꽂히는 모습을 보인다. 강원도를 고르는 학생에게 "독도 칸과 같은 색 줄을 손가락으로 따라가 볼까요?"라고 말한다. 독도는 경상북도 울릉군에 속하는 우리나라 섬이라고 밝힌다(울릉도와 같은 군).',
        student: '지도에서 독도와 같은 색으로 칠해진 경상북도를 찾아 짚어요.',
        demo: { tool: 'map', options: KMAP([SEOUL, ULL, DOK], { regions: PROV }), sequence: [{ region: '경상북도' }] },
        art: { draw: 'a simple paper map of a land with three coloured paper regions, one region colour extending across the sea to two small islands, a paper child tracing it with a finger', banner: '독도는 경상북도에' },
      },
    }),
    INTRO({
      id: 'dokdo.e12.g2-intro.activity.card', type: 'activity', title: '독도 소개 카드 꾸미기',
      method: '독도 소개 그림 카드 꾸미기', tool: 'collage', minutes: 14,
      levels: { easy: '조각 3개(섬·새·꽃 하나씩)로 소개 카드를 꾸민다.', base: '조각 5개 넘게 붙여 소개 카드를 채운다.', challenge: '마지막 문항에서 방위표를 나타내는 노란 별 조각까지 붙인다.' },
      activity: {
        title: '친구에게 보여 줄 독도 카드', tool: 'collage',
        teacher: '"이 카드를 보고 친구가 독도를 알 수 있게 꾸며 볼까요? 갈색 반원은 섬, 하얀 세모는 괭이갈매기, 보라 동그라미는 해국이에요." 조각을 붙일 때마다 "이 조각으로 무엇을 알려 줄 수 있나요?"라고 묻는다. 섬 조각을 하나만 붙인 학생에게 "독도의 큰 섬은 몇 개였지요?"라고 묻는다. 카드에 독도의 자리·생김새·자연이 다 들어가면 좋은 소개가 된다는 점을 짚는다.',
        task: '섬·새·꽃 조각으로 친구에게 보여 줄 독도 소개 카드를 꾸며요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          { prompt: '섬·새·꽃 조각을 붙여요.', toolOptions: { bg: '파랑', shapes: ['semi', 'triangle', 'circle', 'star'], colors: ['갈색', '하양', '보라', '노랑'] }, target: { has: [{ shape: 'semi', color: '갈색', min: 2 }, { shape: 'triangle', color: '하양', min: 1 }, { shape: 'circle', color: '보라', min: 1 }] }, difficulty: 0.1,
            levels: { easy: { prompt: '섬·새·꽃을 하나씩 붙여요.', target: { has: [{ shape: 'semi', color: '갈색', min: 1 }, { shape: 'triangle', color: '하양', min: 1 }, { shape: 'circle', color: '보라', min: 1 }] } } } },
          { prompt: '소개 카드를 5조각으로 채워요.', toolOptions: { bg: '파랑', shapes: ['semi', 'triangle', 'circle', 'star'], colors: ['갈색', '하양', '보라', '노랑'] }, target: { pieces: { min: 5 } }, difficulty: 0.15,
            levels: { easy: { prompt: '소개 카드를 3조각으로 채워요.', target: { pieces: { min: 3 } } } } },
          { prompt: '소개 카드를 보고 표시해요.', toolOptions: { bg: '파랑', shapes: ['semi', 'triangle', 'circle', 'star'], colors: ['갈색', '하양', '보라', '노랑'] }, target: { selfCheck: ['소개 카드를 꾸몄어요', '자연을 넣었어요'], minPieces: 3 }, difficulty: 0.2,
            levels: { challenge: { prompt: '노란 별 방위표도 붙여요.', target: { has: [{ shape: 'star', color: '노랑', min: 1 }], pieces: { min: 5 } } } },
            conclude: '소개 카드에 독도의 자리·생김새·자연을 담아요.' },
        ],
      },
      worksheet: { items: [{ type: 'check', prompt: '소개 카드에 넣은 것에 ✓ 해요.', options: ['두 섬', '괭이갈매기', '해국'] }] },
    }),
    INTRO({
      id: 'dokdo.e12.g2-intro.activity.tell', type: 'activity', title: '짝에게 독도 소개하기',
      method: '짝에게 독도 소개하기', tool: 'timer', minutes: 13,
      levels: { easy: '말틀 카드 2장의 차례를 맞추고, 소개 시간을 20초로 맞춰 말틀을 따라 말한다.', base: '말틀 카드 3장의 차례를 맞추고, 30초 동안 짝에게 소개한다.', challenge: '말틀 카드 4장을 맞추고, 1분 동안 모둠 앞에서 소개한다.' },
      activity: {
        title: '"독도는 동쪽 바다에 있고…"', tool: 'timer',
        teacher: '"독도는 동쪽 바다에 있고, 괭이갈매기가 살아요." 교사가 말틀을 먼저 들려준 뒤 말틀 카드 차례와 소개 시간을 화면에서 맞춘다. 타이머가 도는 동안 짝에게 소개하고, 듣는 친구는 끝나면 손뼉을 친다. 말을 멈춘 학생에게 "독도에 사는 새 이름이 무엇이었지요?" 하고 힌트를 준다. 소개할 때는 친구 눈을 보고 또박또박 말한다는 점을 짚는다.',
        task: '말틀 카드를 차례대로 놓고, 시간을 맞춰 짝에게 독도를 소개해요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          { prompt: '소개 말틀을 차례로 놓아요.', toolOptions: { title: '독도 소개 말틀', cards: ['갈매기가 살아요', '독도는', '동쪽 바다에 있고'] }, target: { order: ['독도는', '동쪽 바다에 있고', '갈매기가 살아요'] }, difficulty: 0.1,
            levels: {
              easy: { prompt: '소개 말틀을 차례로 놓아요(2장).', toolOptions: { cards: ['동쪽 바다에 있어요', '독도는'] }, target: { order: ['독도는', '동쪽 바다에 있어요'] } },
              challenge: { prompt: '소개 말틀을 차례로 놓아요(4장).', toolOptions: { cards: ['갈매기가 살아요', '두 섬이 있고', '독도는', '동쪽 바다에 있고'] }, target: { order: ['독도는', '동쪽 바다에 있고', '두 섬이 있고', '갈매기가 살아요'] } },
            } },
          { prompt: '소개 시간을 30초로 맞춰요.', toolOptions: { title: '소개 시간(우리 반 약속)', labels: ['소개', '쉬기'], plan: { work: 10, rest: 0, rounds: 1 } }, target: { plan: { work: 30 } }, difficulty: 0.15,
            hints: ['소개 칸의 초를 봐요.', '소개 칸 숫자를 올려요.', '10초씩 세며 맞춰요.'],
            levels: { easy: { prompt: '소개 시간을 20초로 맞춰요.', target: { plan: { work: 20 } } }, challenge: { prompt: '소개 시간을 1분으로 맞춰요.', target: { plan: { work: 60 } } } } },
          { prompt: '소개를 마치고 표시해요.', toolOptions: { title: '소개 점검' }, target: { selfCheck: ['눈을 보며 말했어요', '또박또박 말했어요', '친구 소개를 들었어요'] }, difficulty: 0.2, conclude: '독도의 자리와 자연을 넣어 친구에게 또박또박 소개해요.' },
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '말틀을 따라 써요.', text: '독도는 ___ 바다에 있어요.', answer: '동쪽' }] },
      notes: '교사가 진행하는 말하기 활동이다. 소개 시간(20초·30초·1분)은 이 수업에서 정한 연습 시간이다.',
    }),
    INTRO({
      id: 'dokdo.e12.g2-intro.activity.three', type: 'activity', title: '위치·생김새·자연 나누기',
      method: '위치·생김새·자연 나누기', tool: 'sortboard', minutes: 14,
      levels: { easy: '두 칸(위치·생김새)에 카드 4장을 나누고, 맞는 칸에 넣으면 초록 테두리가 생긴다.', base: '세 칸(위치·생김새·자연)에 카드 6장을 나눈다.', challenge: '세 칸에 카드 6장과 어디에도 안 들어가는 함정 카드 2장이 섞인다.' },
      activity: {
        title: '독도 소개 재료 모으기', tool: 'sortboard',
        teacher: '"\'서울의 동쪽\'은 독도의 위치일까요, 생김새일까요, 자연일까요?" 카드를 교사가 읽어 주고 바구니 이름도 함께 읽는다. \'동도와 서도\'를 위치에 넣는 학생에게 "동도·서도는 독도가 어디에 있는지보다 어떻게 생겼는지를 말해 주지요?"라고 묻는다. 세 바구니의 카드를 모으면 독도 소개가 된다는 점을 짚는다.',
        task: '카드를 듣고 위치·생김새·자연 바구니에 나누어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
        items: [
          SB3('독도 카드를 세 칸에 나누어요.', ['위치', '생김새', '자연'], [['서울의 동쪽', '경상북도'], ['동도와 서도', '바위 절벽'], ['괭이갈매기', '해국']], ['서쪽 바다', '모래 사막'], 0.1),
          SB3('소개 재료를 나누어요.', ['위치', '생김새', '자연'], [['울릉도 이웃', '동해'], ['작은 바위섬', '두 큰 섬'], ['오징어', '땅채송화']], ['큰 강', '기차역'], 0.15),
          SB3('독도 이야기를 나누어요.', ['위치', '생김새', '자연'], [['동쪽 끝 섬', '바다 가운데'], ['뾰족한 바위', '가파른 비탈'], ['미역', '전복']], ['넓은 들판', '펭귄'], 0.2, { conclude: '위치·생김새·자연을 모으면 독도를 잘 소개할 수 있어요.' }),
        ],
      },
      worksheet: { items: [{ type: 'table', prompt: '알맞은 칸에 ○ 해요.', columns: ['카드', '위치', '생김새', '자연'], cells: [['서울의 동쪽', '', '', ''], ['동도와 서도', '', '', ''], ['괭이갈매기', '', '', '']], answer: '위치, 생김새, 자연' }] },
    }),
    INTRO({
      id: 'dokdo.e12.g2-intro.activity.promise', type: 'activity', title: '지킴이 약속 고르고 결과 보기',
      method: '지킴이 약속 고르고 결과 보기', tool: 'emotion', minutes: 13,
      levels: { easy: '보기 2개, 고르면 결과가 바로 보인다.', base: '보기 3개, 결과는 확인한 뒤에 보인다.', challenge: '보기 3개, 확인한 뒤 내가 오늘부터 할 수 있는 약속 하나를 짝에게 말한다.' },
      activity: {
        title: '독도 지킴이는 어떻게 할까요?', tool: 'emotion',
        teacher: '"친구가 독도를 잘 몰라요. 독도 지킴이인 나는 어떻게 할까요?" 장면을 교사가 읽어 주고 고른 뒤 결과를 함께 본다. \'모른 척해요\'를 고른 학생에게 "오늘 배운 것을 친구에게 알려 주면 친구는 어떻게 될까요?"라고 묻는다. 독도 지킴이는 독도를 바르게 알고, 알리고, 독도의 자연을 아끼는 사람이라는 점을 짚는다.',
        task: '장면을 듣고 독도 지킴이가 할 행동을 골라요.', levels: { easy: {}, base: { revealAfterCheck: true }, challenge: { revealAfterCheck: true } },
        items: [
          BR('친구가 독도를 몰라요. 어떻게 해요?', '친구가 독도를 잘 몰라요.', ['tell', '독도를 알려 줘요', '친구도 독도를 알아요.', '뿌듯함'], ['ignore', '모른 척해요', '친구는 계속 몰라요.', '걱정'], ['tease', '놀려요', '친구 마음이 아파요.', '속상함'], 0.1),
          BR('쓰레기가 있어요. 어떻게 해요?', '독도 바닷가에 쓰레기가 있어요.', ['pick', '주워서 챙겨요', '바다가 깨끗해져요.', '뿌듯함'], ['kick', '발로 차요', '바다로 굴러가요.', '걱정'], ['pass', '그냥 지나가요', '바닷새가 먹을 수 있어요.', '속상함'], 0.15),
          BR('독도 그림책을 봤어요. 어떻게 해요?', '독도 그림책을 다 읽었어요.', ['family', '가족에게 얘기해요', '가족도 독도를 알아요.', '기쁨'], ['forget', '덮고 잊어요', '배운 것이 사라져요.', '걱정'], ['scribble', '책에 낙서해요', '책이 망가져요.', '속상함'], 0.2, { conclude: '독도 지킴이는 독도를 바르게 알고, 알리고, 자연을 아껴요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '독도 지킴이가 할 일은?', options: ['독도를 알려요', '모른 척해요'], answer: '독도를 알려요' }] },
    }),
    INTRO({
      id: 'dokdo.e12.g2-intro.wrap.badge', type: 'wrap', title: '독도 지킴이 배지 꾸미기',
      method: '독도 지킴이 배지 꾸미기', tool: 'collage', minutes: 7,
      levels: { easy: '별 조각 하나로 배지를 꾸민다.', base: '별·섬 조각 2개로 배지를 꾸민다.', challenge: '배지에 내 이름 첫 글자를 꾸밀 자리를 만들고 다짐을 말한다.' },
      wrap: {
        teacher: '"노란 별은 지킴이, 갈색 반원은 독도예요. 나만의 독도 지킴이 배지를 꾸며 볼까요?" 조각을 붙인 뒤 점검 칸에 표시하고 "나는 독도를 알고 아끼는 지킴이!" 하고 다짐을 말하게 한다. 다짐을 망설이는 학생에게 "오늘 배운 것 하나만 말해도 좋아요"라고 말해 준다. 출구 2번에서 \'독도를 잊어요\'를 고른 학생과는 지킴이 약속 장면을 다시 본다.',
        exitTicket: [
          ART({ bg: '하양', shapes: ['star', 'semi', 'circle', 'heart'], colors: ['노랑', '갈색', '파랑', '분홍'] }, ['배지를 꾸몄어요', '다짐을 말했어요'], 1, '별과 섬 조각으로 배지를 꾸며요.'),
          ASK('독도 지킴이는 무엇을 해요?', ['독도를 알고 아껴요', '독도를 잊어요'], 0, '독도 지킴이는 독도를 바르게 알고 아껴요.'),
          MOOD,
        ],
      },
      worksheet: {
        title: '나는 독도 지킴이',
        items: [
          { type: 'check', prompt: '내가 할 약속에 ✓ 해요.', options: ['독도를 친구에게 알려요', '독도 자연을 아껴요', '독도를 바르게 알아요'] },
          { type: 'draw', prompt: '내 독도 지킴이 배지를 그려요.' },
        ],
        easy: { note: '"알고, 알리고, 아껴요"를 떠올려요.', items: [{ type: 'draw', prompt: '별 배지를 그려요.' }] },
      },
    }),
    INTRO({
      id: 'dokdo.e12.g2-intro.wrap.chant', type: 'wrap', title: '"독도를 알고 아껴요" 다짐',
      method: '지킴이 다짐 구호', tool: 'timer', minutes: 7,
      levels: { easy: '구호 없이 가슴에 손 얹기 동작만 함께 한다.', base: '구호 카드 세 장의 차례를 맞추고 동작과 함께 외친다.', challenge: '구호를 외친 뒤 마지막 말을 내 다짐(예: "친구에게 알려요")으로 바꾸어 외친다.' },
      wrap: {
        teacher: '"독도를! (두 손으로 섬 모양) 알고! (머리 톡톡) 아껴요! (가슴에 손)" 구호 카드 차례를 맞춘 뒤 반 전체가 동작과 함께 세 번 외친다. 다짐을 바꿔 외치는 학생이 있으면 "좋은 다짐이에요. 다 같이 따라 해 볼까요?"라고 말한다. 출구 2번에서 \'상관없는 섬\'을 고른 학생에게 "독도는 우리 바다에 있는 우리 땅 섬이라 우리가 알고 아껴요"라고 말해 준다.',
        exitTicket: [
          CHANT('지킴이 다짐', ['"독도를"', '"알고"', '"아껴요"'], '다짐 구호를 차례대로 놓아요.'),
          ASK('독도는 우리와 어떤 섬인가요?', ['우리 땅 섬', '상관없는 섬'], 0, '독도는 우리나라 동쪽 바다에 있는 우리 땅 섬이에요.'),
          MOOD,
        ],
      },
      worksheet: {
        title: '독도를 알고 아껴요',
        items: [
          { type: 'blank', prompt: '다짐을 따라 써요.', text: '독도를 알고 ___!', answer: '아껴요' },
          { type: 'draw', prompt: '친구에게 독도를 소개하는 모습을 그려요.' },
        ],
        easy: { note: '"알고, 아껴요"를 떠올려요.', items: [{ type: 'draw', prompt: '가슴에 손을 얹은 내 모습을 그려요.' }] },
      },
    }),
  ];

  PaperLessons.registerModules([].concat(T_WHERE, T_SHAPE, T_LIFE, T_SEA1, T_PEOPLE, T_EAST, T_WAY, T_ROCK, T_SEA2, T_INTRO));
})();
