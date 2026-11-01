/* 창체 안전교육 재난안전 — 초3-4 모듈 내용(edu-module.v1). 형식·작성 규칙: MODULES_BUILD.md, 계획: framework/safety-b.json 의 saf-disaster 초3-4.
 * 근거: 「학교안전교육 실시 기준 등에 관한 고시」(교육부고시 제2023-33호) 별표 2 초등학교 재난안전 1~5
 *   (1 화재의 원인 및 대피요령, 신고, 전파요령 / 2 화상 대처 요령 / 3 각종 자연 재난과 안전한 행동 / 4 폭발 및 붕괴, 테러 위협 유형별 대처 요령 / 5 각종 재난 유형별 대비 훈련).
 * 초3-4 기준: 상황 판단(그림+짧은 글), 차례 정하기, 고른 이유 말하기, 짝 토의, 간단한 표·그림그래프. 법 조문·통계 해석·긴 글쓰기는 쓰지 않는다.
 * 장면·인물·그래프 자료는 직접 지은 가상의 것이다(가명, 그래프는 화면에 '예시 자료, 실제 통계 아님'). 피해 경험은 묻지 않는다.
 * 주제 8개(3학년 4 · 4학년 4) × 계획 모듈 60개(분류판 sortboard 글 카드 모드 8개 포함).
 *
 * 사람 확인: 근거 파일(research-safety.md)에는 고시 항목 제목뿐이라 아래 행동 수칙은 일반 안전 수칙으로 썼다. 공식 안내처와 대조해야 한다.
 *   화재·연기·신고(소방청·국민재난안전포털):
 *   - fire-report.*: 불을 보면 "불이야" 외치고 경보기(비상벨)를 누른 뒤 대피하고, 119 신고는 안전한 곳에서 한다. 혼자 불을 끄려 하지 않는다. 어린이는 가까운 어른께 먼저 알린다.
 *   - fire-report.activity.call-list: 119에 말할 것은 어디인지·무슨 일인지·이름, 주소를 모르면 근처 큰 건물·간판을 말한다, 묻는 말에 답하고 먼저 끊지 않는다.
 *   - fire-report.activity.drill-board · smoke-escape.activity.drill-board: 경보가 울리면 하던 일을 멈추고 줄 서서 대피로를 따라 걸어 나가 정해진 곳에 모여 인원을 확인받고, 다시 건물에 들어가지 않는다. 화재 때 엘리베이터를 타지 않는다.
 *   - fire-report.wrap.class-poster: 문어발 콘센트·난로 옆 빨래·켜 둔 가스레인지·불장난이 화재 원인이 된다.
 *   - smoke-escape.*: 젖은 천이나 소매로 코·입을 막고 낮은 자세로 벽을 짚어 나간다. 문을 열기 전 손등으로 손잡이를 대 보고 뜨거우면 다른 길로 간다. 연기는 위로 모인다.
 *     옷장·침대 밑에 숨지 않는다. 나갈 길이 없으면 문틈을 젖은 천으로 막고 창가에서 천을 흔들어 알린다(뛰어내리지 않는다).
 *   지진(행정안전부 국민재난안전포털):
 *   - quake-indoor.*: 교실에서는 책상 아래에서 책상 다리를 잡고, 복도에서는 창문에서 떨어져 벽 쪽에 몸을 낮추고, 계단에서는 손잡이를 잡고 몸을 낮춘다.
 *     가방이나 팔로 머리·목을 보호한다. 흔들림이 멈추면 엘리베이터 대신 계단으로 운동장 등 넓은 곳에 대피하고 건물·벽에서 떨어진다.
 *   화상(소방청·질병관리청·대한적십자사 응급처치 안내):
 *   - burn-cool.*: 뜨거운 것에서 떨어져 흐르는 시원한 물로 식히고, 붓기 전에 반지·시계·팔찌를 빼고, 깨끗한 천으로 덮고 어른께 알린다.
 *     된장·치약·기름 같은 민간요법을 바르지 않고 물집을 터뜨리지 않으며 붙은 옷은 억지로 떼지 않는다. 얼음을 바로 대지 않는다. 넓게 데면 어른이 119에 알린다. (식히는 시간 수치는 쓰지 않았다.)
 *   - burn-scene.*: 냄비 손잡이는 안쪽으로, 뜨거운 컵은 식탁 가운데, 식탁보를 당기지 않기, 목욕 전 어른과 물 온도 확인(찬물 먼저 틀기), 동생은 어른과 함께, 끓는 물은 어른이 붓기, 전기난로·다리미 멀리.
 *   태풍·호우(행정안전부·기상청):
 *   - typhoon-flood.*: 냇가·하천·지하차도·흔들리는 간판을 피하고, 얕아 보여도 흐르는 물은 건너지 않고 높은 길로 돌아간다. 창문에서 떨어지고 창문을 닫는다.
 *     바깥 물건을 들여놓고 손전등을 챙기며 날씨 소식을 듣는다. 정전 때 초 대신 손전등을 쓴다.
 *   가스(한국가스안전공사·소방청):
 *   - gas-explosion.*: 가스 냄새가 나면 불·전기 스위치·환풍기를 켜지 않고 창문을 연 뒤 밖으로 나가 어른·119·경비실에 알린다. 전화도 밖에서 건다.
 *     초인종을 누르는 것도 스위치를 켜는 것과 같아 하지 않는다, 집 안에서 전화하지 않는다(gas-explosion.activity.do-dont 카드).
 *     어린이는 밸브를 만지지 않는다. 가스에는 새는 것을 알아차리게 냄새를 넣는다. 가스레인지는 어른이 켜고, 켜 둔 채 나가지 않고, 옆에 행주를 두지 않는다.
 *   대설·한파·낙뢰(행정안전부·기상청):
 *   - snow-thunder.*: 천둥·번개가 치면 건물 안으로 들어가고 큰 나무 아래·철봉 옆을 피하며 창문에서 떨어진다.
 *     눈길·빙판에서는 보폭을 작게 천천히 걷고 주머니에 손을 넣지 않으며 장갑을 낀다. 한파 때 얇은 옷을 여러 겹 입고 귀·목·손목·발목을 감싼다. 귀가 아프게 차가우면 따뜻한 곳으로 들어간다(눈으로 문지르지 않는다). */
(function () {
  const BASE = { schema: 'edu-module.v1', domain: 'saf-disaster', band: '초3-4' };
  const T = (topic, grade) => (o) => Object.assign({}, BASE, { topic: `saf-disaster.e34.${topic}`, grades: [grade] }, o);
  const M = [];
  const strip = (p) => String(p).replace(/[.?!]$/, '');

  // 차례 놓기(timeline order): 기본 = 카드 4장, 쉬움 = drop 번째 카드를 뺀 3장, 도전 = 틀린 카드(trap) 한 장이 섞인다
  const SLOTS = { 2: ['먼저', '나중'], 3: ['처음', '다음', '끝'], 4: ['처음', '다음', '그다음', '끝'] };
  const ORD = (prompt, base, steps, drop, trap, d, more) => {
    const ids = steps.map((c) => c.id);
    const easy = steps.filter((_, i) => i !== drop);
    const p = strip(prompt);
    return {
      prompt, toolOptions: Object.assign({}, base, { mode: 'order', slots: SLOTS[steps.length], cards: steps.slice().reverse() }), target: { order: ids }, difficulty: d,
      levels: {
        easy: { prompt: `${p}(3장).`, toolOptions: { slots: SLOTS[3], cards: easy.slice().reverse() }, target: { order: easy.map((c) => c.id) } },
        challenge: { prompt: `${p}. 틀린 카드 한 장은 빼요.`, toolOptions: { cards: [steps[1], trap, steps[3], steps[0], steps[2]] }, target: { order: ids } },
      },
      ...more,
    };
  };

  // 갈림길(dilemma): 기본 = 장면 둘(보기 3개), 쉬움 = 첫 장면만(바른 보기 + 첫 틀린 보기), 도전 = 끝에서 근거 카드 고르기
  const DIL = (prompt, scene, good, reasons, okReasons, d, more) => {
    const g0 = good[0][0];
    const easyScene = Object.assign({}, scene, {
      choices: scene.choices.filter((c) => c.id === g0 || c.id === scene.choices.find((x) => x.id !== g0).id)
        .map((c) => (c.id === g0 ? { id: c.id, text: c.text, result: c.result, impact: c.impact, ending: c.ending } : c)),
    });
    return {
      prompt, toolOptions: { scene }, target: { path: good }, difficulty: d,
      levels: {
        easy: { prompt: `${strip(prompt)}(한 번 골라요).`, toolOptions: { scene: easyScene }, target: { path: [[g0]] } },
        challenge: { prompt: `${strip(prompt)}. 끝에서 근거도 골라요.`, toolOptions: { reasons }, target: { path: good, reasons: okReasons } },
      },
      ...more,
    };
  };

  // 할 것만 표시하는 점검표(kitchen checklist): 쉬움 = easyIdx 칸만, 도전 = hard 칸이 더해진다
  const CHK = (prompt, title, items, easyIdx, hard, d, more) => {
    const ok = (list) => list.filter((x) => x.ok).map((x) => x.id);
    const bare = (list) => list.map((x) => ({ id: x.id, text: x.text }));
    const easy = easyIdx.map((i) => items[i]);
    const lv = { easy: { prompt: `${strip(prompt)}(${easy.length}칸).`, toolOptions: { items: bare(easy) }, target: { checklist: ok(easy) } } };
    if (hard && hard.length) { const all = items.concat(hard); lv.challenge = { prompt: `${strip(prompt)}(${all.length}칸).`, toolOptions: { items: bare(all) }, target: { checklist: ok(all) } }; }
    return { prompt, toolOptions: { mode: 'checklist', title, items: bare(items) }, target: { checklist: ok(items) }, difficulty: d, levels: lv, ...more };
  };

  // 칸 지도 핀: 도전 단계는 '왜 여기일까' 보기 고르기를 함께 한다(ask)
  const PIN = (map, prompt, region, why, d, more) => ({
    prompt, toolOptions: map, target: { region }, difficulty: d,
    levels: { challenge: { prompt: `${strip(prompt)}. 까닭도 골라요.`, toolOptions: { ask: { q: why.q, choices: why.choices } }, target: { region, pick: why.answer } } },
    ...more,
  });

  // 대피 훈련 판(timer): 순서 카드 + 안전 점검. 쉬움 = drop 번째를 뺀 3장 + 점검 easySafe칸, 도전 = 스스로 점검 2칸 더
  const DRILL = (prompt, title, steps, safety, self, drop, easySafe, d, more) => {
    const mixed = (a) => (a.length === 4 ? [a[1], a[3], a[0], a[2]] : [a[2], a[0], a[1]]);
    const easy = steps.filter((_, i) => i !== drop);
    const easyT = easySafe ? { order: easy, safety: true } : { order: easy };
    return {
      prompt, toolOptions: { title, cards: mixed(steps), safety }, target: { order: steps, safety: true }, difficulty: d,
      levels: {
        easy: { prompt: `${strip(prompt)}(3장).`, toolOptions: { cards: mixed(easy), safety: safety.slice(0, easySafe) }, target: easyT },
        challenge: { prompt: `${strip(prompt)}. 스스로 점검도 해요.`, target: { order: steps, safety: true, selfCheck: self } },
      },
      ...more,
    };
  };

  const MOOD = { type: 'mood', prompt: '오늘 공부를 마친 내 마음은 어떤가요?' };

  // ======================================================================================================
  // 3학년 · 화재 원인과 119 신고·주변 전파 (별표 2 초등 재난안전 1·5)
  // ======================================================================================================
  {
    const C = T('fire-report', 3);
    const CAUSE = [['전기', 7], ['요리', 5], ['난로', 4], ['불장난', 3]];
    M.push(
      C({
        id: 'saf-disaster.e34.fire-report.intro.scene-story', type: 'intro', title: '연기를 봤어요! 처음 할 일',
        method: '불 난 장면 이야기 듣고 처음 할 일 고르기', tool: 'story', minutes: 6,
        levels: { easy: '교사가 보기 2장(외치기·가까이 가서 보기)만 가리키며 함께 고른다.', base: '보기 4장 가운데 처음 할 일을 스스로 고른다.', challenge: '처음 할 일을 고른 뒤 그 까닭을 한 문장으로 짝에게 말한다.' },
        intro: {
          teacher: '"쉬는 시간, 하준이가 과학실 문틈으로 연기가 나오는 것을 봤어요. 하준이가 맨 먼저 할 일은 무엇일까요?" 두세 명의 생각을 듣고(기다릴 반응: "불이야 외쳐요", "선생님께 알려요") 시연 단추로 \'불이야\' 외치기 카드가 바구니에 담기는 것을 보인다. "119에 먼저 전화해요"라는 말이 나오면 "연기 옆에 서서 전화하면 하준이는 어떻게 될까요? 먼저 크게 알리고 피한 다음 안전한 곳에서 걸어요"라고 짚는다. 작은 불은 혼자 끌 수 있다는 생각도 "불은 금방 커져요"로 바로잡는다.',
          student: '이야기 속 친구가 연기를 봤을 때 맨 먼저 할 일을 고르고, 왜 그런지 짝에게 말해 보아요.',
          demo: { tool: 'story', options: { mode: 'pick', basket: '처음 할 일', cards: [{ id: 'shout', text: '"불이야!" 외치기' }, { id: 'look', text: '가까이 가서 보기' }, { id: 'phone', text: '불 옆에서 전화' }, { id: 'hide', text: '책상 밑에 숨기' }], shuffle: false }, sequence: [{ pick: ['shout'] }] },
          art: { draw: 'a paper school hallway with grey paper smoke curling out of a door gap, a paper child stepping back and calling out with both hands around the mouth', banner: '연기를 보면 크게 알려요', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '불이 났던 일을 묻지 않는다. 이야기 속 친구(가명)의 일로만 이야기한다.',
      }),
      C({
        id: 'saf-disaster.e34.fire-report.intro.cause-chart', type: 'intro', title: '화재 원인 그림그래프 읽기',
        method: '화재 원인 그림그래프 읽기(예시 자료)', tool: 'chart', minutes: 5,
        levels: { easy: '교사가 큰 그림을 함께 세며 원인 3개(전기·요리·불장난)만 견준다.', base: '원인 4개를 모두 보고 가장 많은 원인을 고른다.', challenge: '가장 많은 원인과 가장 적은 원인이 몇 건 차이 나는지 말한다.' },
        intro: {
          teacher: '"이 그래프는 선생님이 만든 예시 자료예요. 실제 통계가 아니에요. 큰 그림 하나는 몇 건일까요?" 줄마다 큰 그림과 작은 그림을 함께 센 뒤 시연 단추로 가장 많은 원인이 골라지는 것을 보인다. "불은 불장난할 때만 나요"라는 말이 나오면 "전기나 요리처럼 불을 쓰지 않을 때도 불이 날까요?"라고 되묻는다. 원인마다 막는 방법이 다르다는 것을 오늘 알아본다고 밝힌다.',
          student: '그래프에서 가장 많은 화재 원인을 찾아 짝에게 말해 보아요. 이 그래프는 예시 자료예요.',
          demo: { tool: 'chart', options: { type: 'picture', mode: 'read', title: '화재 원인(예시 자료, 실제 통계 아님)', unit: '건', xLabel: '원인', yLabel: '건수', data: CAUSE, icons: [{ value: 5, name: '5건' }, { value: 1, name: '1건' }], question: '가장 많은 원인은?', choices: CAUSE.map((x) => x[0]) }, sequence: [{ pick: 0 }] },
          art: { draw: 'a paper picture graph board with flame shaped paper icons in four rows next to small paper symbols of a plug, a pot, a heater and a match', banner: '불은 어디서 날까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
      }),
      C({
        id: 'saf-disaster.e34.fire-report.activity.tell-order', type: 'activity', title: '불을 알리는 차례 놓기',
        method: '알리는 차례 놓기', tool: 'timeline', minutes: 13,
        levels: { easy: '카드 3장을 차례로 놓고, 놓으면 바로 맞는지 알려 준다.', base: '카드 4장을 차례로 놓은 뒤 확인한다.', challenge: '틀린 카드 1장이 섞인 5장에서 그것을 빼고 놓은 뒤, 어린이가 어른께 먼저 알리는 까닭을 짝에게 말한다.' },
        activity: {
          title: '불을 알리는 차례', tool: 'timeline',
          teacher: '"불을 봤을 때 맨 먼저 할 일은? 119에는 언제, 어디에서 전화할까요?" 카드를 놓은 뒤 반 전체가 차례대로 소리 내어 읽는다. 119 카드를 맨 앞에 놓는 학생에게 "불 옆에 서서 전화하는 동안 연기가 오면 어떻게 될까요?"라고 묻고, 알리고 피한 뒤 안전한 곳에서 신고한다는 것을 짚는다. 어린이는 가까운 어른께 먼저 알리면 어른이 함께 신고해 준다고 덧붙인다.',
          task: '불을 봤을 때 할 일 카드를 하는 차례대로 놓아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORD('교실 옆에서 연기를 봤을 때 차례로 놓아요.', {}, [{ id: 'shout', text: '"불이야!" 외치기' }, { id: 'bell', text: '비상벨 누르기' }, { id: 'exit', text: '밖으로 대피하기' }, { id: 'call', text: '안전한 곳에서 119' }], 1, { id: 'fight', text: '혼자 불 끄기', why: '작은 불도 금방 커져요. 먼저 알리고 피해요.' }, 0.15),
            ORD('집에서 불이 난 것을 봤을 때 차례로 놓아요.', {}, [{ id: 'yell', text: '가족에게 외치기' }, { id: 'door', text: '현관으로 나가기' }, { id: 'adult', text: '이웃 어른께 알리기' }, { id: 'n119', text: '어른과 119 신고' }], 2, { id: 'bag', text: '가방 챙기기', why: '물건을 챙기다 늦어요. 몸만 빨리 나가요.' }, 0.2),
            ORD('복도에 연기가 찼을 때 차례로 놓아요.', {}, [{ id: 'tell', text: '선생님께 알리기' }, { id: 'line', text: '줄 서서 대피' }, { id: 'yard', text: '운동장에 모이기' }, { id: 'count', text: '인원 확인 받기' }], 3, { id: 'lift', text: '엘리베이터 타기', why: '불이 나면 엘리베이터가 멈출 수 있어요. 계단으로 가요.' }, 0.25, { conclude: '불을 보면 크게 알리고, 피한 뒤, 안전한 곳에서 119에 알려요.' }),
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '불을 보면 먼저 "___!" 하고 크게 외쳐요.', answer: '불이야' }] },
      }),
      C({
        id: 'saf-disaster.e34.fire-report.activity.drill-board', type: 'activity', title: '화재 대피 훈련 판',
        method: '화재 대피 훈련 판: 경보 신호와 순서 점검', tool: 'timer', minutes: 15,
        levels: { easy: '순서 카드 3장과 안전 점검 2칸을 확인한다.', base: '순서 카드 4장과 안전 점검 3칸을 확인한다.', challenge: '4장·3칸을 맞춘 뒤 훈련을 마치고 스스로 점검 2칸을 더 표시한다.' },
        activity: {
          title: '화재 대피 훈련 판', tool: 'timer',
          teacher: '"경보가 울리면 우리 반은 어디로, 어떤 차례로 나갈까요?" 판의 순서 카드를 맞춘 뒤 교실 문·대피로·모일 곳을 손가락으로 함께 짚고, 안전 점검을 하나씩 소리 내어 확인한다. 그다음 실제로 줄을 서서 대피로를 걸어 본다. "빨리 나가야 하니까 뛰어요"라는 학생에게 "줄에서 뛰다 넘어지면 뒤 친구들은 어떻게 될까요?"라고 묻고, 걸어서 줄을 지킨다는 것을 짚는다.',
          task: '대피 순서 카드를 맞추고 안전 점검에 표시한 뒤 훈련해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DRILL('화재 경보가 울릴 때 대피 차례를 맞춰요.', '화재 경보가 울리면', ['하던 일 멈추기', '줄 서서 나가기', '대피로 따라 걷기', '모일 곳에 앉기'], ['경보 소리를 알아요', '대피로를 확인했어요', '모일 곳을 알아요'], ['뛰지 않고 걸었어요', '말없이 따라갔어요'], 2, 2, 0.15),
            DRILL('교실에서 나갈 때 차례를 맞춰요.', '교실에서 나가기', ['선생님 말 듣기', '교실 문 나가기', '계단으로 내려가기', '건물 밖으로'], ['비상구 표시를 봤어요', '계단 자리를 알아요', '짝을 확인했어요'], ['계단에서 밀지 않았어요', '손잡이를 잡았어요'], 1, 2, 0.2),
            DRILL('운동장에 모인 뒤 할 일 차례를 맞춰요.', '모인 뒤에', ['반 자리 찾기', '줄 맞춰 앉기', '인원 확인 받기', '다음 말 기다리기'], ['우리 반 자리를 알아요', '친구가 다 왔어요', '건물에 다시 안 가요'], ['이름을 크게 답했어요', '잘한 점을 말했어요'], 3, 2, 0.25, { conclude: '경보가 울리면 멈추고, 줄 서서 걸어 나가, 모일 곳에서 인원을 확인해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'check', prompt: '우리 반 훈련에서 확인한 것에 표시해요.', options: ['경보 소리를 들었어요', '대피로를 걸어 봤어요', '모일 곳을 알아요'] }] },
        notes: '이 모듈로 학교 화재 대피 훈련을 함께 한다(별표 1 참고5: 유형을 달리해 매 학년도 2종류 이상). 대피로·모일 곳은 우리 학교 계획을 따른다.',
      }),
      C({
        id: 'saf-disaster.e34.fire-report.activity.call-list', type: 'activity', title: '119에 말할 내용 고르기',
        method: '119에 말할 내용 고르기', tool: 'kitchen', minutes: 13,
        levels: { easy: '점검 칸 4개 가운데 119에 말할 것만 표시한다.', base: '함정이 섞인 칸 6개 가운데 말할 것만 표시하고 짝과 말해 본다.', challenge: '주소를 모를 때 쓸 칸 2개가 더해진 8칸에서 고른다.' },
        activity: {
          title: '119에 말할 것만 표시', tool: 'kitchen',
          teacher: '"119 대원은 우리가 어디 있는지 모르면 올 수 없어요. 무엇을 꼭 말해야 할까요?" 칸을 하나씩 소리 내어 읽고 말할 것에만 표시하게 한다. 표시를 마치면 짝과 신고하는 역할을 바꿔 해 본다(실제로 전화하지 않는다). "좋아하는 음식"까지 누르는 학생에게 "대원이 불을 끄러 오는 데 이 말이 도움이 될까요?"라고 묻고, 주소를 모를 때는 근처 큰 건물이나 간판을 말하면 된다는 것을 짚는다.',
          task: '점검표에서 119에 말할 것만 골라 표시하고, 짝과 신고 연습을 해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            CHK('119에 말할 것만 표시해요.', '119에 말할 것', [{ id: 'where', text: '어디인지', ok: true }, { id: 'food', text: '좋아하는 음식', ok: false }, { id: 'what', text: '무슨 일인지', ok: true }, { id: 'game', text: '어제 한 놀이', ok: false }, { id: 'name', text: '내 이름', ok: true }, { id: 'size', text: '불이 얼마나 큰지', ok: true }], [0, 1, 2, 3], [{ id: 'near', text: '근처 큰 건물 이름', ok: true }, { id: 'hang', text: '모르면 끊기', ok: false }], 0.15),
            CHK('119에 전화할 때 지킬 것만 표시해요.', '전화할 때', [{ id: 'safe', text: '안전한 곳에서 걸기', ok: true }, { id: 'slow', text: '천천히 또박또박', ok: true }, { id: 'near', text: '불 옆에서 걸기', ok: false }, { id: 'joke', text: '장난 전화 하기', ok: false }, { id: 'answer', text: '묻는 말에 답하기', ok: true }, { id: 'hide', text: '숨어서 기다리기', ok: false }], [0, 1, 2, 3], [{ id: 'sign', text: '주변 간판 읽기', ok: true }, { id: 'guess', text: '아무 주소나 대기', ok: false }], 0.2),
            CHK('불을 본 뒤 알릴 사람만 표시해요.', '누구에게 알릴까', [{ id: 'teacher', text: '가까운 선생님', ok: true }, { id: 'family', text: '집에 있는 어른', ok: true }, { id: 'photo', text: '사진 찍어 올리기', ok: false }, { id: 'ignore', text: '모른 척하기', ok: false }, { id: 'n119', text: '119 대원', ok: true }, { id: 'later', text: '내일 친구에게', ok: false }], [0, 1, 2, 3], [{ id: 'office', text: '건물 관리실', ok: true }, { id: 'alone', text: '혼자 기다리기', ok: false }], 0.25, { conclude: '119에는 어디인지, 무슨 일인지, 내 이름을 또박또박 말해요. 주소를 모르면 근처 큰 건물을 말해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '119에 말할 것이면 ○, 아니면 ×를 써요.', columns: ['말할 내용', '○ / ×'], cells: [['어디인지', ''], ['좋아하는 음식', ''], ['무슨 일인지', ''], ['내 이름', '']], answer: '○, ×, ○, ○' }] },
        notes: '연습할 때 실제 119에 전화하지 않는다. 우리 집 주소를 말하게 하지 않고 "○○초등학교 옆"처럼 학교 둘레로 연습한다.',
      }),
      C({
        id: 'saf-disaster.e34.fire-report.wrap.tell-web', type: 'wrap', title: '불을 봤어요: 알리는 방법',
        method: '알리는 방법 정리하기', tool: 'mindmap', minutes: 7,
        levels: { easy: '가지 2개(외치기·119)에 카드 2장을 붙인다.', base: '가지 4개(외치기·경보기·어른·119)에 카드 4장을 붙인다.', challenge: '가지 4개에 할 일과 주의할 점 카드 8장을 나누어 붙인다.' },
        wrap: {
          teacher: '"불을 봤을 때 알리는 방법이 몇 가지였지요?" 가지를 하나씩 짚으며 카드를 붙이고, 다 붙이면 짝에게 "불을 보면 ○○하고 ○○해요."로 설명하게 한다. 비상벨을 장난으로 눌러도 된다는 학생에게 "장난 경보가 잦으면 진짜 불일 때 사람들이 어떻게 할까요?"라고 묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', options: { topic: '불을 봤어요', slots: ['외치기', '경보기', '어른', '119'], cards: ['"불이야!" 외치기', '비상벨 누르기', '선생님께 알리기', '어디·무슨 일'] }, prompt: '알리는 방법 카드를 가지에 붙여요.', target: { sort: { 외치기: ['"불이야!" 외치기'], 경보기: ['비상벨 누르기'], 어른: ['선생님께 알리기'], 119: ['어디·무슨 일'] } }, difficulty: 0.15,
              levels: {
                easy: { prompt: '알리는 방법 카드 2장을 가지에 붙여요.', toolOptions: { slots: ['외치기', '119'], cards: ['"불이야!" 외치기', '어디·무슨 일'] }, target: { sort: { 외치기: ['"불이야!" 외치기'], 119: ['어디·무슨 일'] } } },
                challenge: { prompt: '할 일과 주의할 점 카드 8장을 가지에 붙여요.', toolOptions: { cards: ['"불이야!" 외치기', '비상벨 누르기', '선생님께 알리기', '어디·무슨 일', '크고 또렷하게', '장난으로 금지', '바로 알리기', '안전한 곳에서'] }, target: { sort: { 외치기: ['"불이야!" 외치기', '크고 또렷하게'], 경보기: ['비상벨 누르기', '장난으로 금지'], 어른: ['선생님께 알리기', '바로 알리기'], 119: ['어디·무슨 일', '안전한 곳에서'] } } },
              } },
            { type: 'choice', prompt: '불을 보고 119에 전화하는 곳은?', options: ['불 바로 옆', '안전한 바깥', '책상 밑'], answer: 1, difficulty: 0.1, explain: '먼저 피한 뒤, 연기가 없는 안전한 곳에서 119에 알려요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '불을 보면 알려요',
          items: [
            { type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '119에는 ___인지, 무슨 일인지 말해요.', answer: '어디' },
            { type: 'short', prompt: '불을 봤을 때 내가 할 일을 차례대로 한 줄로 써요.' },
          ],
          easy: { note: '"외치기 → 피하기 → 알리기"를 떠올려요.', items: [{ type: 'choice', prompt: '불을 보면 먼저?', options: ['"불이야!" 외치기', '가까이 가 보기'], answer: '"불이야!" 외치기' }] },
        },
      }),
      C({
        id: 'saf-disaster.e34.fire-report.wrap.class-poster', type: 'wrap', title: '우리 반 불조심 포스터',
        method: '우리 반 불조심 포스터 조각 붙이기', tool: 'collage', minutes: 7,
        levels: { easy: '색종이 조각 3개 이상을 붙이고 점검 3칸에 표시한다.', base: '조각 5개 이상을 붙이고 점검 3칸에 표시한다.', challenge: '조각 5개 이상을 붙이고, 포스터 문구를 직접 써서 점검 4칸에 표시한다.' },
        wrap: {
          teacher: '"오늘 찾은 화재 원인 가운데 우리 반이 꼭 막고 싶은 것은 무엇인가요?" 모둠마다 원인 하나를 정해 불꽃·콘센트·냄비를 떠올리게 하는 조각을 붙이고, 약속 문구는 활동지에 써서 함께 붙인다. "불조심은 어른만 하면 돼요"라는 말이 나오면 "문어발 콘센트를 보고 어른께 알리는 것은 누가 할 수 있을까요?"라고 되묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'collage', options: { maxPieces: 12 }, prompt: '색종이 조각으로 불조심 포스터 그림을 꾸며요.', target: { selfCheck: ['막을 원인을 골랐어요', '그림 조각을 붙였어요', '모둠과 함께 정했어요'], minPieces: 5 }, difficulty: 0.1,
              levels: { easy: { target: { selfCheck: ['막을 원인을 골랐어요', '그림 조각을 붙였어요', '모둠과 함께 정했어요'], minPieces: 3 } }, challenge: { target: { selfCheck: ['막을 원인을 골랐어요', '그림 조각을 붙였어요', '모둠과 함께 정했어요', '포스터 문구를 썼어요'], minPieces: 5 } } } },
            { type: 'choice', prompt: '콘센트에 플러그가 잔뜩 꽂혀 있으면?', options: ['하나 더 꽂아요', '어른께 알려요', '그냥 둬요'], answer: 1, difficulty: 0.1, explain: '한 콘센트에 너무 많이 꽂으면 열이 나 불이 날 수 있어요. 어른께 알려요.' },
            { type: 'short', prompt: '우리 반 불조심 포스터 문구를 한 줄로 써요.' },
          ],
        },
        worksheet: {
          title: '우리 반 불조심 약속',
          items: [
            { type: 'choice', prompt: '불이 나기 쉬운 것은?', options: ['난로 옆에 말린 빨래', '정리된 책상', '꺼 둔 가스레인지'], answer: '난로 옆에 말린 빨래' },
            { type: 'draw', prompt: '우리 반 불조심 포스터를 그리고 문구를 써요.' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 3학년 · 교실·복도·계단에서 지진 행동 (별표 2 초등 재난안전 3·5)
  // ======================================================================================================
  {
    const C = T('quake-indoor', 3);
    const SCHOOL = {
      title: '우리 학교 2층', grid: [6, 4],
      regions: [
        { name: '우리 교실', cells: [[0, 0], [1, 0], [0, 1], [1, 1]] }, { name: '옆 교실', cells: [[2, 0], [3, 0]] }, { name: '도서실', cells: [[4, 0], [5, 0]] },
        { name: '복도', cells: [[2, 1], [3, 1], [4, 1], [5, 1], [0, 2], [1, 2], [2, 2], [3, 2]] }, { name: '계단', cells: [[4, 2], [5, 2]] },
        { name: '화장실', cells: [[0, 3], [1, 3]] }, { name: '엘리베이터', cells: [[2, 3], [3, 3]] }, { name: '보건실', cells: [[4, 3], [5, 3]] },
      ],
    };
    const BODY = { mode: 'parts', parts: ['눈', '귀', '코', '목', '어깨', '손목', '허리', '무릎'] };
    M.push(
      C({
        id: 'saf-disaster.e34.quake-indoor.intro.place-scene', type: 'intro', title: '흔들릴 때 떨어지고 깨질 것',
        method: '장소 그림에서 위험한 것 찾기', tool: 'emotion', minutes: 6,
        levels: { easy: '교실 장면 하나만 보며 유리창 카드를 함께 고른다.', base: '교실·복도·계단 장면을 보며 떨어지거나 깨질 것 4장을 고른다.', challenge: '4장을 고른 뒤 그것마다 피하는 방법을 짝에게 말한다.' },
        intro: {
          teacher: '"땅이 흔들리면 교실에서 무엇이 떨어지거나 깨질까요?" 시연 단추로 유리창·게시판·높은 곳 상자·창가 화분이 바구니에 담기는 것을 보이고, 실제 우리 교실에서 그것이 어디 있는지 손으로 가리키게 한다. "책상도 위험해요"라는 말이 나오면 "튼튼한 책상은 오히려 무엇을 막아 줄까요?"라고 되묻는다. 위험한 것을 알아야 그것에서 떨어질 수 있다는 것을 짚는다.',
          student: '그림에서 흔들릴 때 떨어지거나 깨질 것을 고르고, 우리 교실에서도 찾아보아요.',
          demo: { tool: 'emotion', options: { mode: 'pick', basket: '떨어지고 깨져요', cards: [{ id: 'glass', text: '창문 유리' }, { id: 'desk', text: '튼튼한 책상' }, { id: 'board', text: '벽 게시판' }, { id: 'box', text: '높은 곳 상자' }, { id: 'rail', text: '계단 손잡이' }, { id: 'pot', text: '창가 화분' }], shuffle: false }, sequence: [{ pick: ['glass', 'board', 'box', 'pot'] }] },
          art: { draw: 'a paper classroom with tall windows, a notice board and boxes on a high shelf, small paper wavy lines showing shaking, a sturdy paper desk in the middle', banner: '무엇이 떨어질까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
      }),
      C({
        id: 'saf-disaster.e34.quake-indoor.intro.where-am-i', type: 'intro', title: '학교 지도에 내가 있는 곳',
        method: '학교 칸 지도에 내가 자주 있는 곳 핀', tool: 'map', minutes: 5,
        levels: { easy: '교사가 우리 교실 한 곳에 핀을 꽂는 것을 함께 본다.', base: '우리 교실·복도·계단에 핀이 차례로 꽂히는 것을 보고 그곳의 위험을 말한다.', challenge: '핀이 꽂힌 곳마다 가장 가까운 계단까지 가는 길을 손가락으로 짚는다.' },
        intro: {
          teacher: '"우리가 하루에 가장 오래 있는 곳은 어디일까요? 쉬는 시간에는요?" 시연 단추로 우리 교실·복도·계단에 핀이 꽂히는 것을 보이고, 곳마다 흔들리면 무엇이 위험한지 한 가지씩 묻는다. "엘리베이터가 가까우니 그걸 타요"라는 말이 나오면 "흔들려서 엘리베이터가 멈추면 어떻게 될까요?"라고 되묻는다. 어디에 있든 계단이 어디인지 알아 둔다는 것을 짚는다.',
          student: '지도에서 내가 자주 있는 곳을 찾고, 그곳에서 가장 가까운 계단을 짚어 보아요.',
          demo: { tool: 'map', options: SCHOOL, sequence: [{ pin: [0, 0] }, { pin: [2, 2] }, { pin: [4, 2] }] },
          art: { draw: 'a paper cut school floor map with a classroom, a long hallway and a staircase, small paper pins standing on each place', banner: '나는 어디에 있을까?', extra: [{ motif: 'leaf', x: 300, y: 222 }] },
        },
      }),
      C({
        id: 'saf-disaster.e34.quake-indoor.activity.stair-fork', type: 'activity', title: '갈림길: 계단·복도에서 흔들리면',
        method: '장소 갈림길: 계단·복도에서 흔들리면', tool: 'dilemma', minutes: 14,
        levels: { easy: '갈림 1번, 보기 2개 가운데 고르고 결과를 본다.', base: '갈림 2번(흔들릴 때 → 멈춘 뒤), 보기 3개씩 고르며 결과를 따라간다.', challenge: '갈림 2번을 지난 뒤 근거 카드 3장 가운데 알맞은 것을 고르고 까닭을 말한다.' },
        activity: {
          title: '갈림길: 흔들림이 시작됐어요', tool: 'dilemma',
          teacher: '"계단에서 뛰어 내려가면 몸은 어떻게 될까요?" 보기를 고를 때마다 결과 장면을 소리 내어 읽고, 나와 둘레 친구가 어떻게 되는지 짝과 말하게 한다. "빨리 밖으로 나가는 게 제일 안전해요"라는 학생에게 "흔들리는 동안 계단에서 뛰면 넘어질까요, 안 넘어질까요? 언제 나가면 될까요?"라고 묻는다. 흔들리는 동안은 그 자리에서 몸을 지키고, 멈춘 뒤 계단으로 나간다는 것을 짚는다.',
          task: '장면을 읽고 보기를 골라요. 결과를 보고 다음 장면에서 또 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL('계단을 내려가다 흔들려요. 어떻게 할까요?', {
              text: '점심시간, 계단을 내려가는데 땅이 크게 흔들리기 시작했어요.', motif: 'cloud',
              choices: [
                { id: 'run', text: '뛰어 내려간다', result: '발을 헛디뎌 계단에서 넘어질 뻔했어요.', impact: [{ who: '나와 앞 친구', text: '다칠 수 있어요', tone: -1 }] },
                { id: 'hold', text: '손잡이 잡고 몸을 낮춘다', result: '손잡이를 꼭 잡고 앉아 흔들림을 버텼어요.', ending: '흔들리는 동안 계단에서 몸을 낮춰 넘어지지 않았어요.', next: {
                  text: '흔들림이 멈췄어요. 이제 어떻게 내려갈까요?', choices: [
                    { id: 'walk', text: '손잡이 잡고 걸어 내려간다', result: '천천히 내려가 운동장에 닿았어요.', impact: [{ who: '나', text: '안전하게 나갔어요', tone: 1 }], ending: '멈춘 뒤 손잡이를 잡고 걸어 내려가 대피했어요.' },
                    { id: 'lift', text: '엘리베이터로 간다', result: '엘리베이터가 멈춰 안에 갇혔어요.', impact: [{ who: '나', text: '나갈 수 없어요', tone: -1 }] },
                    { id: 'back', text: '교실로 가방 가지러 간다', result: '다시 흔들려 복도에서 휘청했어요.', impact: [{ who: '나', text: '다칠 수 있어요', tone: -1 }] },
                  ] } },
                { id: 'push', text: '앞 친구를 밀고 간다', result: '앞 친구가 계단에서 넘어졌어요.', impact: [{ who: '앞 친구', text: '다쳤어요', tone: -1 }] },
              ] }, [['hold', 'walk']],
            [{ id: 'fall', text: '흔들릴 때 뛰면 넘어지니까' }, { id: 'stop', text: '멈춘 뒤 나가야 안전해서' }, { id: 'fast', text: '빨리 나가는 게 먼저라서', why: '흔들리는 동안 서두르면 오히려 넘어져요.' }], ['fall', 'stop'], 0.2),
            DIL('복도를 걷다 흔들려요. 어떻게 할까요?', {
              text: '쉬는 시간, 창문이 많은 복도를 걷는데 흔들림이 시작됐어요.', motif: 'star',
              choices: [
                { id: 'window', text: '창문 쪽으로 간다', result: '창문 유리가 흔들리며 금이 갔어요.', impact: [{ who: '나', text: '유리에 다칠 수 있어요', tone: -1 }] },
                { id: 'wall', text: '창문에서 떨어져 벽 쪽에 낮춘다', result: '벽 쪽에 쪼그려 앉아 가방으로 머리를 가렸어요.', ending: '창문에서 떨어져 몸을 낮춰 머리를 지켰어요.', next: {
                  text: '흔들림이 멈췄어요. 선생님이 "모여!" 하고 부르세요.', choices: [
                    { id: 'line', text: '선생님 따라 계단으로', result: '줄을 서서 계단으로 내려갔어요.', impact: [{ who: '반 친구들', text: '함께 안전해요', tone: 1 }], ending: '멈춘 뒤 선생님을 따라 계단으로 대피했어요.' },
                    { id: 'lift', text: '엘리베이터를 탄다', result: '엘리베이터가 움직이지 않았어요.', impact: [{ who: '나', text: '갇힐 수 있어요', tone: -1 }] },
                    { id: 'look', text: '깨진 유리를 구경한다', result: '유리 조각에 발을 다칠 뻔했어요.', impact: [{ who: '나', text: '다칠 수 있어요', tone: -1 }] },
                  ] } },
                { id: 'out', text: '밖으로 뛰어나간다', result: '흔들리는 중에 뛰다 친구와 부딪혔어요.', impact: [{ who: '나와 친구', text: '다칠 수 있어요', tone: -1 }] },
              ] }, [['wall', 'line']],
            [{ id: 'glass', text: '창문 유리가 깨질 수 있어서' }, { id: 'head', text: '머리를 지켜야 해서' }, { id: 'see', text: '밖을 보면 상황을 알아서', why: '창가는 유리가 깨질 수 있어 가장 위험한 곳이에요.' }], ['glass', 'head'], 0.25),
            DIL('교실에서 흔들려요. 어떻게 할까요?', {
              text: '수업 시간, 교실 천장의 전등이 흔들리기 시작했어요.', motif: 'house',
              choices: [
                { id: 'desk', text: '책상 아래에서 다리를 잡는다', result: '책상 아래에 들어가 책상 다리를 꼭 잡았어요.', ending: '책상 아래에서 몸을 지켜 떨어지는 것에 다치지 않았어요.', next: {
                  text: '흔들림이 멈췄어요. 이제 무엇을 할까요?', choices: [
                    { id: 'go', text: '가방을 쓰고 줄 서서 나간다', result: '머리를 가리고 계단으로 운동장에 나갔어요.', impact: [{ who: '반 친구들', text: '함께 안전해요', tone: 1 }], ending: '멈춘 뒤 머리를 가리고 계단으로 대피했어요.' },
                    { id: 'tidy', text: '떨어진 물건부터 줍는다', result: '줍는 사이 다시 흔들려 놀랐어요.', impact: [{ who: '나', text: '대피가 늦어요', tone: -1 }] },
                    { id: 'first', text: '혼자 먼저 뛰어나간다', result: '복도에서 친구와 부딪혔어요.', impact: [{ who: '친구', text: '넘어질 수 있어요', tone: -1 }] },
                  ] } },
                { id: 'stand', text: '일어나 창가로 간다', result: '창가 화분이 떨어질 뻔했어요.', impact: [{ who: '나', text: '다칠 수 있어요', tone: -1 }] },
                { id: 'door', text: '바로 복도로 뛴다', result: '문 앞에서 친구들과 엉켰어요.', impact: [{ who: '친구들', text: '넘어질 수 있어요', tone: -1 }] },
              ] }, [['desk', 'go']],
            [{ id: 'cover', text: '책상이 떨어지는 것을 막아서' }, { id: 'order', text: '멈춘 뒤 줄 서서 나가야 해서' }, { id: 'first', text: '먼저 나간 사람이 안전해서', why: '혼자 먼저 뛰면 부딪혀 다쳐요. 함께 줄 서서 나가요.' }], ['cover', 'order'], 0.3, { conclude: '흔들리는 동안은 그 자리에서 몸을 낮춰 머리를 지키고, 멈추면 계단으로 대피해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '계단에서 흔들림이 시작되면?', options: ['뛰어 내려가요', '손잡이 잡고 몸을 낮춰요', '엘리베이터로 가요'], answer: '손잡이 잡고 몸을 낮춰요' }] },
      }),
      C({
        id: 'saf-disaster.e34.quake-indoor.activity.drill-board', type: 'activity', title: '지진 대피 훈련 판',
        method: '지진 대피 훈련 판: 순서와 안전 점검', tool: 'timer', minutes: 15,
        levels: { easy: '순서 카드 3장만 맞춘다(안전 점검 칸 없음).', base: '순서 카드 4장을 맞추고 안전 점검 3칸에 표시한다.', challenge: '4장·3칸을 맞춘 뒤 훈련을 마치고 스스로 점검 2칸을 더 표시한다.' },
        activity: {
          title: '지진 대피 훈련 판', tool: 'timer',
          teacher: '"흔들릴 때와 멈춘 뒤에 하는 일은 무엇이 다를까요?" 순서 카드를 맞춘 뒤 신호에 맞춰 반 전체가 책상 아래로 들어가 다리를 잡고, 멈춤 신호에 가방으로 머리를 가리고 계단으로 운동장에 나가 본다. "흔들리면 바로 나가요"라는 학생에게 "흔들리는 계단에서 뛰면 어떻게 될까요?"라고 묻는다. 운동장에서는 건물 벽에서 떨어진 가운데에 모인다는 것을 짚는다.',
          task: '지진 대피 순서 카드를 맞추고 안전 점검에 표시한 뒤 훈련해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DRILL('지진이 났을 때 대피 차례를 맞춰요.', '지진 대피 차례', ['책상 아래 몸 보호', '흔들림 멈춤 확인', '계단으로 내려가기', '운동장 가운데로'], ['책상 다리를 잡을 줄 알아요', '대피로를 확인했어요', '모일 곳을 알아요'], ['머리를 가리고 나갔어요', '뛰지 않았어요'], 1, 0, 0.15),
            DRILL('복도에서 흔들릴 때 차례를 맞춰요.', '복도에서 지진', ['창문에서 떨어지기', '벽 쪽에 낮추기', '멈춘 뒤 줄 서기', '계단으로 대피'], ['창문 자리를 알아요', '가방이 곁에 있어요', '계단 자리를 알아요'], ['창가에 가지 않았어요', '줄을 지켰어요'], 2, 0, 0.2),
            DRILL('머리를 지키며 나갈 때 차례를 맞춰요.', '머리 지키며 대피', ['가방으로 머리 가리기', '계단 손잡이 잡기', '건물에서 떨어지기', '반별로 앉기'], ['가방 끈을 쥘 줄 알아요', '손잡이 자리를 알아요', '우리 반 자리를 알아요'], ['엘리베이터를 안 탔어요', '말없이 걸었어요'], 3, 0, 0.25, { conclude: '흔들리면 몸을 지키고, 멈추면 머리를 가린 채 계단으로 넓은 곳에 대피해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '지진 대피 차례에 번호를 써요.', columns: ['할 일', '차례'], cells: [['계단으로 내려가기', ''], ['책상 아래 몸 보호', ''], ['운동장 가운데로', '']], answer: '2, 1, 3' }] },
        notes: '이 모듈로 학교 지진 대피 훈련을 함께 한다(별표 1 참고5). 대피로·모일 곳은 우리 학교 계획을 따른다.',
      }),
      C({
        id: 'saf-disaster.e34.quake-indoor.activity.protect-parts', type: 'activity', title: '흔들릴 때 지킬 몸 부위',
        method: '머리·목 보호 부위 고르기', tool: 'body', minutes: 13,
        levels: { easy: '고른 부위 이름이 바로 보이고, 첫 문항은 목 한 곳만 고른다.', base: '이름 없이 고르고, 가방으로 함께 가릴 곳은 두 곳(귀·목)을 고른다.', challenge: '첫 문항에서 책상이 없을 때 머리를 가릴 물건도 보기에서 고른다.' },
        activity: {
          title: '지킬 몸 부위 고르기', tool: 'body',
          teacher: '"흔들릴 때 떨어진 물건에 맞으면 가장 크게 다치는 곳은 어디일까요?" 종이 몸에는 머리 칸이 없어서, 학생이 자기 머리를 두 손으로 감싸 보며 머리 옆의 귀와 목을 고르게 한다. 고른 뒤 다 함께 쪼그려 앉아 두 팔로 머리와 목을 감싸는 자세를 해 본다. 무릎만 고르는 학생에게 "무릎을 다치면 걷기 힘들지만, 머리와 목을 다치면 어떻게 될까요?"라고 묻는다.',
          task: '종이 몸에서 흔들릴 때 꼭 지킬 곳을 눌러 골라요.', levels: { easy: { names: true }, base: {}, challenge: {} },
          items: [
            { prompt: '두 팔로 감싸 꼭 지킬 곳을 골라요.', toolOptions: BODY, target: { parts: ['목'] }, difficulty: 0.15,
              levels: { challenge: { prompt: '두 팔로 감싸 지킬 곳을 고르고, 가릴 물건도 골라요.', toolOptions: { ask: { q: '책상이 없을 때 머리를 가릴 것은?', choices: ['가방', '유리컵', '화분'] } }, target: { parts: ['목'], pick: 0 } } } },
            { prompt: '가방으로 머리를 가릴 때 함께 가려지는 곳 두 군데를 골라요.', toolOptions: BODY, target: { parts: ['귀', '목'] }, difficulty: 0.2,
              levels: { easy: { prompt: '가방으로 머리를 가릴 때 함께 가려지는 곳을 골라요.', target: { parts: ['귀'] } } } },
            { prompt: '몸을 낮춰 쪼그려 앉을 때 굽히는 곳 두 군데를 골라요.', toolOptions: BODY, target: { parts: ['허리', '무릎'] }, difficulty: 0.25, conclude: '흔들릴 때는 몸을 낮추고 두 팔이나 가방으로 머리와 목을 지켜요.' },
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '흔들릴 때 가방으로 가릴 곳은?', options: ['머리와 목', '발', '무릎'], answer: '머리와 목' }] },
        notes: '종이 몸에 머리 칸이 없다. 머리는 학생이 자기 머리를 감싸 보게 하고, 교구에서는 귀(머리 옆)와 목을 고른다.',
      }),
      C({
        id: 'saf-disaster.e34.quake-indoor.wrap.action-web', type: 'wrap', title: '장소별 지진 행동 정리',
        method: '장소별 행동 정리하기', tool: 'mindmap', minutes: 7,
        levels: { easy: '가지 2개(교실·계단)에 카드 4장을 나눈다.', base: '가지 3개(교실·복도·계단)에 카드 6장을 나눈다.', challenge: '집 가지가 더해진 4가지에 카드 8장을 나눈다.' },
        wrap: {
          teacher: '"오늘 배운 행동을 장소마다 모아 볼까요?" 가지마다 카드를 붙인 뒤 "교실에서는 ○○, 복도에서는 ○○"로 한 목소리로 읽는다. "어디서든 책상 아래로 가요"라는 학생에게 "계단에는 책상이 없어요. 그때는 무엇을 잡을까요?"라고 되묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', options: { topic: '흔들려요', slots: ['교실', '복도', '계단'], cards: ['책상 아래로', '창문에서 멀리', '손잡이 잡기', '책상 다리 잡기', '벽 쪽에 낮추기', '멈춰서 낮추기'] }, prompt: '행동 카드를 장소 가지에 나누어요.', target: { sort: { 교실: ['책상 아래로', '책상 다리 잡기'], 복도: ['창문에서 멀리', '벽 쪽에 낮추기'], 계단: ['손잡이 잡기', '멈춰서 낮추기'] } }, difficulty: 0.15,
              levels: {
                easy: { prompt: '행동 카드 4장을 교실과 계단으로 나누어요.', toolOptions: { slots: ['교실', '계단'], cards: ['책상 아래로', '손잡이 잡기', '책상 다리 잡기', '멈춰서 낮추기'] }, target: { sort: { 교실: ['책상 아래로', '책상 다리 잡기'], 계단: ['손잡이 잡기', '멈춰서 낮추기'] } } },
                challenge: { prompt: '행동 카드 8장을 교실·복도·계단·집으로 나누어요.', toolOptions: { slots: ['교실', '복도', '계단', '집'], cards: ['책상 아래로', '창문에서 멀리', '손잡이 잡기', '식탁 아래로', '책상 다리 잡기', '벽 쪽에 낮추기', '멈춰서 낮추기', '거울에서 멀리'] }, target: { sort: { 교실: ['책상 아래로', '책상 다리 잡기'], 복도: ['창문에서 멀리', '벽 쪽에 낮추기'], 계단: ['손잡이 잡기', '멈춰서 낮추기'], 집: ['식탁 아래로', '거울에서 멀리'] } } },
              } },
            { type: 'choice', prompt: '흔들림이 멈춘 뒤 내려갈 때 쓰는 것은?', options: ['엘리베이터', '계단', '창문'], answer: 1, difficulty: 0.1, explain: '흔들린 뒤 엘리베이터는 멈출 수 있어요. 계단으로 걸어 내려가요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '장소마다 지진 행동',
          items: [
            { type: 'table', prompt: '장소에 맞는 행동을 써요.', columns: ['장소', '흔들릴 때 행동'], cells: [['교실', ''], ['복도', ''], ['계단', '']], answer: '책상 아래·다리 잡기 / 창문에서 멀리·벽 쪽 낮추기 / 손잡이 잡고 낮추기' },
            { type: 'draw', prompt: '교실에서 책상 아래로 들어간 내 모습을 그려요.' },
          ],
        },
      }),
      C({
        id: 'saf-disaster.e34.quake-indoor.wrap.self-check', type: 'wrap', title: '지진 훈련 스스로 점검',
        method: '훈련 뒤 스스로 점검', tool: 'kitchen', minutes: 7,
        levels: { easy: '점검 칸 2개에 표시한다.', base: '점검 칸 4개에 표시한다.', challenge: '점검 칸 4개에 표시하고 다음 훈련 목표 하나를 고른 뒤 쓴다.' },
        wrap: {
          teacher: '"오늘 훈련에서 나는 무엇을 잘했나요? 다음에 더 잘할 것은요?" 점검 칸을 하나씩 읽고 실제로 한 것에만 정직하게 표시하게 한다. 다 표시한 학생에게도 "다음 훈련에서 하나만 더 잘한다면 무엇일까요?"라고 물어 목표로 잇는다. 표시하지 못한 칸이 있는 학생을 탓하지 않는다.',
          exitTicket: [
            { type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title: '지진 훈련 점검', items: [{ id: 'low', text: '자세를 낮췄어요' }, { id: 'lift', text: '엘리베이터 안 탔어요' }, { id: 'rail', text: '손잡이를 잡았어요' }, { id: 'head', text: '머리를 가렸어요' }] }, prompt: '오늘 훈련에서 한 것에 스스로 표시해요.', target: { selfCheck: true }, difficulty: 0.1,
              levels: { easy: { toolOptions: { items: [{ id: 'low', text: '자세를 낮췄어요' }, { id: 'head', text: '머리를 가렸어요' }] } } } },
            { type: 'choice', prompt: '다음 지진 훈련 목표로 알맞은 것은?', options: ['더 빨리 뛰기', '말없이 걸어 나가기', '친구보다 먼저'], answer: 1, difficulty: 0.1, explain: '말없이 걸어야 선생님 말을 듣고 함께 안전하게 나가요.' },
            { type: 'short', prompt: '다음 지진 훈련에서 더 잘할 점을 하나 써요.' },
          ],
        },
        worksheet: {
          title: '지진 훈련을 돌아봐요',
          items: [
            { type: 'check', prompt: '오늘 훈련에서 한 것에 표시해요.', options: ['책상 다리를 잡았어요', '머리를 가렸어요', '계단으로 걸어 나갔어요'] },
            { type: 'short', prompt: '다음 훈련 목표를 한 줄로 써요.' },
          ],
          easy: { note: '"낮추기 → 가리기 → 걸어 나가기"를 떠올려요.', items: [{ type: 'choice', prompt: '흔들릴 때 몸은?', options: ['낮춰요', '높이 서요'], answer: '낮춰요' }] },
        },
      }),
    );
  }

  // ======================================================================================================
  // 3학년 · 화상 입었을 때 식히기와 하지 말 일 (별표 2 초등 재난안전 2)
  // ======================================================================================================
  {
    const C = T('burn-cool', 3);
    M.push(
      C({
        id: 'saf-disaster.e34.burn-cool.intro.spill-story', type: 'intro', title: '뜨거운 물을 쏟았어요',
        method: '뜨거운 물 쏟은 장면 이야기', tool: 'story', minutes: 6,
        levels: { easy: '교사가 보기 2장(떨어지기·문지르기)만 가리키며 함께 고른다.', base: '보기 4장 가운데 바로 할 일 2장을 스스로 고른다.', challenge: '고른 뒤 왜 그렇게 하는지 까닭을 짝에게 말한다.' },
        intro: {
          teacher: '"서아가 컵라면에 물을 붓다 손등에 뜨거운 물이 쏟아졌어요. 서아가 바로 할 일은 무엇일까요?" 생각을 듣고(기다릴 반응: "찬물에 대요", "엄마를 불러요") 시연 단추로 떨어지기·흐르는 물로 식히기 카드가 바구니에 담기는 것을 보인다. "된장이나 치약을 바르면 나아요"라는 말이 나오면 "데인 살갗에 무언가를 바르면 깨끗할까요? 먼저 무엇으로 열을 식힐까요?"라고 되묻는다.',
          student: '이야기 속 친구가 뜨거운 물을 쏟았을 때 바로 할 일을 고르고, 까닭을 말해 보아요.',
          demo: { tool: 'story', options: { mode: 'pick', basket: '바로 할 일', cards: [{ id: 'away', text: '뜨거운 곳서 떨어지기' }, { id: 'rub', text: '손으로 문지르기' }, { id: 'water', text: '흐르는 물로 식히기' }, { id: 'hide', text: '혼자 참기' }], shuffle: false }, sequence: [{ pick: ['away', 'water'] }] },
          art: { draw: 'a paper kitchen table with a tipped paper cup of noodles and steam, a paper child holding a hand under a running paper faucet', banner: '데면 흐르는 물로 식혀요', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '데었던 일을 묻지 않는다. 이야기 속 친구(가명)의 일로만 이야기한다.',
      }),
      C({
        id: 'saf-disaster.e34.burn-cool.intro.body-spots', type: 'intro', title: '데기 쉬운 몸 부분',
        method: '데기 쉬운 몸 부분 고르기', tool: 'body', minutes: 5,
        levels: { easy: '이름이 보이는 종이 몸에서 손목 한 곳을 함께 짚는다.', base: '손목과 팔꿈치 두 곳이 차례로 짚이는 것을 보고 왜 데기 쉬운지 말한다.', challenge: '두 곳을 보고 그곳을 지키는 방법(긴 소매·떨어져 서기)을 짝에게 말한다.' },
        intro: {
          teacher: '"부엌에서 냄비 옆을 지나거나 컵을 들 때 뜨거운 것에 먼저 닿는 곳은 어디일까요?" 시연 단추로 손목과 팔꿈치가 차례로 짚이는 것을 보이고, 학생도 자기 손목·팔꿈치를 짚게 한다. "손가락만 데요"라는 말이 나오면 "식탁 위 냄비 쪽으로 팔을 뻗으면 어디가 닿을까요?"라고 되묻는다. 종이 몸에는 손 칸이 없어 손등은 자기 손을 보며 함께 이야기한다.',
          student: '종이 몸에서 부엌과 욕실에서 데기 쉬운 곳을 찾아 내 몸에서도 짚어 보아요.',
          demo: { tool: 'body', options: { mode: 'parts', parts: ['손목', '팔꿈치', '어깨', '배', '허벅지', '무릎'], names: true }, sequence: [{ parts: ['손목'] }, { parts: ['손목', '팔꿈치'] }] },
          art: { draw: 'a paper body figure next to a paper stove with a pot, small paper steam lines near the wrist and elbow', banner: '어디가 데기 쉬울까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
      }),
      C({
        id: 'saf-disaster.e34.burn-cool.activity.cool-order', type: 'activity', title: '데었을 때 식히는 차례',
        method: '식히기 차례 놓기', tool: 'timeline', minutes: 10,
        levels: { easy: '장신구 빼기 카드를 뺀 3장을 놓고, 놓으면 바로 맞는지 알려 준다.', base: '카드 4장을 차례로 놓은 뒤 확인한다.', challenge: '틀린 카드 1장이 섞인 5장에서 그것을 빼고 놓은 뒤, 장신구를 빨리 빼는 까닭을 말한다.' },
        activity: {
          title: '식히는 차례 놓기', tool: 'timeline',
          teacher: '"데었을 때 맨 먼저 할 일은 무엇일까요? 반지나 시계는 왜 빨리 뺄까요?" 카드를 놓은 뒤 차례대로 몸짓으로 따라 한다(물러나기 → 수도꼭지 아래 손 → 반지 빼는 흉내 → 천 덮기). 장신구를 맨 끝에 놓는 학생에게 "데인 곳은 점점 부어요. 부은 뒤에 반지를 빼면 어떻게 될까요?"라고 묻는다. 민간요법 카드를 넣는 학생에게는 상처를 더럽힐 수 있다는 것을 짚는다.',
          task: '데었을 때 할 일 카드를 하는 차례대로 놓아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORD('뜨거운 물을 손등에 쏟았을 때 차례로 놓아요.', {}, [{ id: 'away', text: '뜨거운 것서 떨어지기' }, { id: 'cool', text: '흐르는 물로 식히기' }, { id: 'ring', text: '반지·시계 빼기' }, { id: 'cover', text: '깨끗한 천 덮기' }], 2, { id: 'paste', text: '된장 바르기', why: '된장 같은 민간요법은 상처를 더럽혀요. 물로 식혀요.' }, 0.15),
            ORD('다리미에 손목이 닿았을 때 차례로 놓아요.', {}, [{ id: 'off', text: '다리미서 손 떼기' }, { id: 'tap', text: '찬물 흐르게 대기' }, { id: 'band', text: '팔찌 빼기' }, { id: 'show', text: '어른께 보이기' }], 2, { id: 'tooth', text: '치약 바르기', why: '치약은 열을 가두고 상처를 더럽혀요. 물로 식혀요.' }, 0.2),
            ORD('냄비 손잡이를 잡다 데었을 때 차례로 놓아요.', {}, [{ id: 'back', text: '손 떼고 물러나기' }, { id: 'flow', text: '수돗물에 식히기' }, { id: 'jewel', text: '손가락 반지 빼기' }, { id: 'adult', text: '어른께 알리기' }], 2, { id: 'pop', text: '물집 터뜨리기', why: '물집을 터뜨리면 세균이 들어가요. 그대로 두고 어른께 보여요.' }, 0.25, { conclude: '데면 떨어지고, 흐르는 물로 식히고, 장신구를 빼고, 덮어서 어른께 알려요.' }),
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '데었을 때는 ___ 물로 식혀요.', answer: '흐르는' }] },
      }),
      C({
        id: 'saf-disaster.e34.burn-cool.activity.friend-fork', type: 'activity', title: '갈림길: 친구가 데었어요',
        method: '친구가 데었을 때 갈림길', tool: 'dilemma', minutes: 8,
        levels: { easy: '갈림 1번, 보기 2개 가운데 고르고 결과를 본다.', base: '갈림 2번(처음 할 일 → 그다음), 보기 3개씩 고른다.', challenge: '갈림 2번을 지난 뒤 근거 카드에서 넓게 데었을 때 어른이 할 일을 고른다.' },
        activity: {
          title: '갈림길: 친구가 데었을 때', tool: 'dilemma',
          teacher: '"친구가 아파할 때 내가 할 수 있는 일과 어른이 할 일은 무엇일까요?" 보기를 고를 때마다 결과를 소리 내어 읽고, 친구에게 도움이 됐는지 짝과 말하게 한다. "물집은 터뜨려야 빨리 나아요"라는 학생에게 "물집 속은 상처를 지키고 있어요. 터뜨리면 무엇이 들어갈까요?"라고 묻는다. 넓게 데었으면 어른이 119에 알린다는 것을 짚는다.',
          task: '장면을 읽고 보기를 골라요. 결과를 보고 다음 장면에서 또 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL('친구가 뜨거운 물에 손을 데었어요. 어떻게 할까요?', {
              text: '실과실에서 짝 지우가 주전자 물에 손등을 데었어요.', motif: 'cloud',
              choices: [
                { id: 'rub', text: '손으로 문질러 준다', result: '지우가 더 아프다며 손을 뺐어요.', impact: [{ who: '지우', text: '더 아파요', tone: -1 }] },
                { id: 'water', text: '수돗가로 데려가 물로 식힌다', result: '흐르는 물에 손을 대자 지우가 조금 편해졌어요.', ending: '흐르는 물로 식혀 친구를 도왔어요.', next: {
                  text: '물로 식혔는데 지우 손등에 물집이 생겼어요.', choices: [
                    { id: 'tell', text: '선생님께 알린다', result: '선생님이 보건실로 데려가셨어요.', impact: [{ who: '지우', text: '치료를 받아요', tone: 1 }], ending: '식힌 뒤 어른께 알려 치료를 받게 했어요.' },
                    { id: 'paste', text: '치약을 발라 준다', result: '상처가 더러워졌어요.', impact: [{ who: '지우', text: '덧날 수 있어요', tone: -1 }] },
                    { id: 'pop', text: '물집을 터뜨린다', result: '물집이 터져 따가워졌어요.', impact: [{ who: '지우', text: '세균이 들어갈 수 있어요', tone: -1 }] },
                  ] } },
                { id: 'play', text: '괜찮다며 계속 논다', result: '지우 손등이 점점 빨개졌어요.', impact: [{ who: '지우', text: '더 아파요', tone: -1 }] },
              ] }, [['water', 'tell']],
            [{ id: 'cool', text: '물로 식혀야 덜 다쳐서' }, { id: 'adult', text: '넓게 데면 어른이 119에 알려서' }, { id: 'home', text: '집에서 바르는 약이 더 좋아서', why: '민간요법은 상처를 더럽혀요. 물로 식히고 어른께 알려요.' }], ['cool', 'adult'], 0.2),
            DIL('친구 옷 위로 뜨거운 국이 쏟아졌어요. 어떻게 할까요?', {
              text: '급식 시간, 짝 하린이 소매 위로 뜨거운 국이 쏟아졌어요.', motif: 'sun',
              choices: [
                { id: 'peel', text: '젖은 옷을 억지로 벗긴다', result: '살에 붙은 옷이 당겨져 하린이가 울었어요.', impact: [{ who: '하린', text: '살갗이 다칠 수 있어요', tone: -1 }] },
                { id: 'cool', text: '옷 위로 찬물을 흘려 식힌다', result: '하린이가 "조금 덜 뜨거워"라고 했어요.', ending: '옷을 떼지 않고 물로 식혀 친구를 도왔어요.', next: {
                  text: '소매 안쪽이 빨개져 있어요. 다음은 무엇을 할까요?', choices: [
                    { id: 'nurse', text: '급식 선생님께 알린다', result: '선생님이 보건실에 연락하셨어요.', impact: [{ who: '하린', text: '도움을 받아요', tone: 1 }], ending: '식히고 어른께 알려 도움을 받았어요.' },
                    { id: 'oil', text: '기름을 발라 준다', result: '기름이 열을 가두었어요.', impact: [{ who: '하린', text: '더 아플 수 있어요', tone: -1 }] },
                    { id: 'eat', text: '밥부터 먹자고 한다', result: '하린이가 아파서 먹지 못했어요.', impact: [{ who: '하린', text: '그대로 아파요', tone: -1 }] },
                  ] } },
                { id: 'wipe', text: '휴지로 박박 닦는다', result: '닦을 때마다 하린이가 아파했어요.', impact: [{ who: '하린', text: '더 아파요', tone: -1 }] },
              ] }, [['cool', 'nurse']],
            [{ id: 'stuck', text: '붙은 옷을 떼면 살갗이 다쳐서' }, { id: 'adult', text: '어른이 치료를 도와줘서' }, { id: 'oil', text: '기름을 바르면 나아서', why: '기름은 열을 가두고 상처를 더럽혀요. 바르지 않아요.' }], ['stuck', 'adult'], 0.25),
            DIL('친구가 냄비 김에 팔을 데었어요. 어떻게 할까요?', {
              text: '실과 시간, 짝 준이가 끓는 냄비 김에 팔을 데었어요.', motif: 'house',
              choices: [
                { id: 'away', text: '냄비에서 떨어지게 한다', result: '준이가 냄비에서 한 걸음 물러났어요.', ending: '뜨거운 것에서 먼저 떨어지게 해 더 데지 않았어요.', next: {
                  text: '준이 팔이 빨개졌어요. 다음은 무엇을 할까요?', choices: [
                    { id: 'flow', text: '흐르는 물로 식힌다', result: '수돗물에 팔을 대자 열이 내려갔어요.', impact: [{ who: '준이', text: '덜 아파요', tone: 1 }], ending: '떨어진 뒤 흐르는 물로 식혀 친구를 도왔어요.' },
                    { id: 'paste', text: '된장을 바른다', result: '상처가 더러워졌어요.', impact: [{ who: '준이', text: '덧날 수 있어요', tone: -1 }] },
                    { id: 'wrap', text: '붕대로 꽉 감는다', result: '열이 빠지지 않고 아파했어요.', impact: [{ who: '준이', text: '더 아파요', tone: -1 }] },
                  ] } },
                { id: 'touch', text: '데인 곳을 꾹 눌러 본다', result: '준이가 "아야!" 하고 놀랐어요.', impact: [{ who: '준이', text: '더 아파요', tone: -1 }] },
              ] }, [['away', 'flow']],
            [{ id: 'first', text: '먼저 떨어져야 더 안 데어서' }, { id: 'cool', text: '흐르는 물이 열을 식혀서' }, { id: 'tie', text: '꽉 감아야 빨리 나아서', why: '꽉 감으면 열이 빠지지 않아요. 먼저 물로 식혀요.' }], ['first', 'cool'], 0.3, { conclude: '친구가 데면 떨어지게 하고 흐르는 물로 식힌 뒤 어른께 알려요. 바르거나 터뜨리지 않아요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '친구 손등에 물집이 생겼어요. 바른 것은?', options: ['물집을 터뜨려요', '어른께 알려요', '치약을 발라요'], answer: '어른께 알려요' }] },
      }),
      C({
        id: 'saf-disaster.e34.burn-cool.wrap.self-check', type: 'wrap', title: '식히기 차례 스스로 점검',
        method: '식히기 순서 스스로 점검', tool: 'kitchen', minutes: 7,
        levels: { easy: '점검 칸 2개에 표시한다.', base: '점검 칸 4개에 표시한다.', challenge: '점검 칸 4개에 표시하고 집에서 가족에게 알려 줄 방법을 고른다.' },
        wrap: {
          teacher: '"오늘 데었을 때 할 일을 몇 가지 말할 수 있나요?" 점검 칸을 함께 읽고 말할 수 있는 것에만 표시하게 한다. 출구 2번에서 "된장 바르기"를 고른 학생에게 "오늘 차례 카드에서 된장 카드는 어떻게 했지요?"라고 되묻는다. 집에 가서 가족에게 한 가지를 알려 주자고 마무리한다.',
          exitTicket: [
            { type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title: '식히기 점검', items: [{ id: 'away', text: '떨어지기를 알아요' }, { id: 'cool', text: '물로 식히기 알아요' }, { id: 'tell', text: '어른께 알릴 줄 알아요' }, { id: 'ring', text: '반지 빼기를 알아요' }] }, prompt: '말할 수 있는 것에 스스로 표시해요.', target: { selfCheck: true }, difficulty: 0.1,
              levels: { easy: { toolOptions: { items: [{ id: 'away', text: '떨어지기를 알아요' }, { id: 'cool', text: '물로 식히기 알아요' }] } } } },
            { type: 'choice', prompt: '가족에게 알려 줄 화상 대처는?', options: ['된장을 발라요', '흐르는 물로 식혀요', '물집을 터뜨려요'], answer: 1, difficulty: 0.1, explain: '데면 흐르는 물로 식혀요. 바르거나 터뜨리지 않아요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '데었을 때 할 일',
          items: [
            { type: 'check', prompt: '오늘 알게 된 것에 표시해요.', options: ['뜨거운 것에서 떨어져요', '흐르는 물로 식혀요', '어른께 알려요'] },
            { type: 'short', prompt: '가족에게 알려 줄 화상 대처를 한 줄로 써요.' },
          ],
          easy: { note: '"떨어지기 → 식히기 → 알리기"를 떠올려요.', items: [{ type: 'choice', prompt: '데면 무엇으로 식혀요?', options: ['흐르는 물', '된장'], answer: '흐르는 물' }] },
        },
      }),
      C({
        id: 'saf-disaster.e34.burn-cool.wrap.word-web', type: 'wrap', title: '데었을 때 할 일·하지 말 일',
        method: '화상 대처 낱말 정리', tool: 'mindmap', minutes: 7,
        levels: { easy: '가지마다 카드 1장씩(2장)을 붙인다.', base: '가지마다 카드 2장씩(4장)을 붙인다.', challenge: '가지마다 3장씩(6장)을 붙이고, 하지 말 일 하나의 까닭을 짝에게 말한다.' },
        wrap: {
          teacher: '"데었을 때 할 일과 하지 말 일을 두 가지로 모아 볼까요?" 카드를 다 붙이면 "할 일은 ○○, 하지 말 일은 ○○"로 짝에게 말하게 한다. "얼음을 대면 더 빨리 식어요"라는 학생에게 "얼음은 너무 차가워 살갗을 또 다치게 할 수 있어요. 무엇으로 식혔지요?"라고 되묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', options: { topic: '데었어요', slots: ['할 일', '하지 말 일'], cards: ['흐르는 물로 식히기', '민간요법 바르기', '어른께 알리기', '붙은 옷 떼기'] }, prompt: '카드를 할 일과 하지 말 일로 나누어요.', target: { sort: { '할 일': ['흐르는 물로 식히기', '어른께 알리기'], '하지 말 일': ['민간요법 바르기', '붙은 옷 떼기'] } }, difficulty: 0.15,
              levels: {
                easy: { prompt: '카드 2장을 할 일과 하지 말 일로 나누어요.', toolOptions: { cards: ['흐르는 물로 식히기', '민간요법 바르기'] }, target: { sort: { '할 일': ['흐르는 물로 식히기'], '하지 말 일': ['민간요법 바르기'] } } },
                challenge: { prompt: '카드 6장을 할 일과 하지 말 일로 나누어요.', toolOptions: { cards: ['흐르는 물로 식히기', '민간요법 바르기', '어른께 알리기', '붙은 옷 떼기', '반지 빼기', '물집 터뜨리기'] }, target: { sort: { '할 일': ['흐르는 물로 식히기', '어른께 알리기', '반지 빼기'], '하지 말 일': ['민간요법 바르기', '붙은 옷 떼기', '물집 터뜨리기'] } } },
              } },
            { type: 'choice', prompt: '데인 곳에 옷이 붙어 있으면?', options: ['억지로 떼요', '떼지 않고 알려요', '세게 닦아요'], answer: 1, difficulty: 0.1, explain: '붙은 옷을 떼면 살갗이 함께 다쳐요. 떼지 않고 식히며 어른께 알려요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '할 일과 하지 말 일',
          items: [
            { type: 'table', prompt: '할 일이면 ○, 하지 말 일이면 ×를 써요.', columns: ['행동', '○ / ×'], cells: [['흐르는 물로 식히기', ''], ['된장 바르기', ''], ['어른께 알리기', '']], answer: '○, ×, ○' },
            { type: 'short', prompt: '하지 말 일 하나와 그 까닭을 한 줄로 써요.' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 3학년 · 태풍·호우 때 행동 (별표 2 초등 재난안전 3)
  // ======================================================================================================
  {
    const C = T('typhoon-flood', 3);
    const RAIN = [['월', 10], ['화', 30], ['수', 80], ['목', 40], ['금', 20]];
    const TOWN = {
      title: '우리 동네', grid: [6, 4],
      regions: [
        { name: '우리 집', cells: [[0, 0], [1, 0]] }, { name: '언덕길', cells: [[2, 0], [3, 0], [4, 0]] }, { name: '학교', cells: [[5, 0], [5, 1]] },
        { name: '간판 많은 거리', cells: [[0, 1], [1, 1], [2, 1]] }, { name: '지하차도', cells: [[3, 1], [4, 1]] },
        { name: '낮은 골목', cells: [[0, 2], [1, 2], [2, 2]] }, { name: '놀이터', cells: [[3, 2], [4, 2], [5, 2]] },
        { name: '냇가', cells: [[0, 3], [1, 3], [2, 3], [3, 3], [4, 3], [5, 3]] },
      ],
    };
    M.push(
      C({
        id: 'saf-disaster.e34.typhoon-flood.intro.storm-scene', type: 'intro', title: '태풍 날 거리에서 위험 찾기',
        method: '태풍 날 그림 장면에서 위험 찾기', tool: 'emotion', minutes: 6,
        levels: { easy: '교사가 넘치는 냇가 한 곳을 함께 고른다.', base: '위험한 곳 4장(냇가·간판·지하차도·창가)을 스스로 고른다.', challenge: '4장을 고른 뒤 그곳마다 피하는 방법을 짝에게 말한다.' },
        intro: {
          teacher: '"태풍이 온 날 거리 그림이에요. 가면 안 되는 곳은 어디일까요?" 시연 단추로 넘치는 냇가·흔들리는 간판·물 찬 지하차도·창가 구경이 바구니에 담기는 것을 보이고, 곳마다 무엇이 위험한지 묻는다. "물이 얕아 보이면 괜찮아요"라는 말이 나오면 "흐르는 물은 얕아도 발을 밀어요. 넘어지면 어떻게 될까요?"라고 되묻는다. 바람 구경하러 창가에 서는 것도 위험하다는 것을 짚는다.',
          student: '태풍 날 그림에서 가면 안 되는 곳을 고르고, 왜 위험한지 짝에게 말해 보아요.',
          demo: { tool: 'emotion', options: { mode: 'pick', basket: '위험한 곳', cards: [{ id: 'river', text: '넘치는 냇가' }, { id: 'home', text: '집 안 거실' }, { id: 'sign', text: '흔들리는 간판' }, { id: 'under', text: '물 찬 지하차도' }, { id: 'hall', text: '튼튼한 건물 안' }, { id: 'window', text: '창가에서 구경' }], shuffle: false }, sequence: [{ pick: ['river', 'sign', 'under', 'window'] }] },
          art: { draw: 'a paper street in a storm with bending paper trees, a swaying shop sign, an overflowing stream and a flooded underpass, a paper child safe inside a house', banner: '태풍 날엔 집 안에서', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
      }),
      C({
        id: 'saf-disaster.e34.typhoon-flood.intro.rain-chart', type: 'intro', title: '비 온 양 막대그래프 읽기',
        method: '비 온 양 막대그래프 읽기(예시 자료)', tool: 'chart', minutes: 5,
        levels: { easy: '교사가 월·화·수 막대 3개만 견주며 가장 긴 막대를 찾는다.', base: '막대 5개를 모두 보고 비가 가장 많이 온 날을 고른다.', challenge: '가장 많이 온 날에 지킬 일을 하나 짝에게 말한다.' },
        intro: {
          teacher: '"이 그래프는 선생님이 만든 예시 자료예요. 실제로 잰 비가 아니에요. 막대가 길수록 무엇이 많다는 뜻일까요?" 막대를 하나씩 짚은 뒤 시연 단추로 가장 긴 막대가 골라지는 것을 보인다. "비가 많이 와도 우산만 있으면 돼요"라는 말이 나오면 "비가 아주 많이 오면 냇가와 낮은 길은 어떻게 될까요?"라고 되묻는다.',
          student: '그래프에서 비가 가장 많이 온 날을 찾고, 그날 무엇을 조심할지 말해 보아요. 이 그래프는 예시 자료예요.',
          demo: { tool: 'chart', options: { type: 'bar', mode: 'read', title: '요일별 비 온 양(예시 자료, 실제 통계 아님)', unit: 'mm', xLabel: '요일', yLabel: '비 온 양', data: RAIN, question: '비가 가장 많이 온 날은?', choices: RAIN.map((x) => x[0]) }, sequence: [{ pick: 2 }] },
          art: { draw: 'a paper bar graph board with five paper rain drop columns of different heights, paper clouds and rain above', banner: '비가 많이 온 날은?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
      }),
      C({
        id: 'saf-disaster.e34.typhoon-flood.activity.town-map', type: 'activity', title: '동네 지도에서 피할 곳',
        method: '동네 칸 지도에서 피할 곳 핀', tool: 'map', minutes: 10,
        levels: { easy: '핀을 놓으면 그 칸의 이름이 바로 보인다.', base: '지도의 이름을 보고 물음에 맞는 곳에 핀을 꽂는다.', challenge: '핀을 꽂은 뒤 그곳을 고른 까닭도 보기에서 고르며 높은 곳과 낮은 곳을 견준다.' },
        activity: {
          title: '동네 지도에 핀 꽂기', tool: 'map',
          teacher: '"비가 많이 오면 물은 높은 곳과 낮은 곳 가운데 어디로 모일까요?" 핀을 꽂기 전에 손가락으로 냇가·지하차도·언덕길을 짚어 보게 한다. 지하차도로 지나가겠다는 학생에게 "물이 모이는 낮은 길에 들어가면 나올 수 있을까요?"라고 묻는다. 물은 낮은 곳으로 모이니 높은 길로 돌아간다는 것을 짚는다.',
          task: '동네 지도를 보고 물음에 맞는 곳에 핀을 꽂아요.', levels: { easy: { readout: true }, base: {}, challenge: {} },
          items: [
            PIN(TOWN, '비가 많이 올 때 물이 넘칠 수 있는 곳에 핀을 꽂아요.', '냇가', { q: '이곳에서는 어떻게 할까요?', choices: ['물 구경을 가요', '가까이 가지 않아요', '돌을 던져요'], answer: 1 }, 0.15),
            PIN(TOWN, '물이 고여 들어가면 위험한 낮은 길에 핀을 꽂아요.', '지하차도', { q: '왜 물이 모일까요?', choices: ['낮은 곳이라서', '높은 곳이라서', '넓은 곳이라서'], answer: 0 }, 0.2),
            PIN(TOWN, '바람에 물건이 떨어질 수 있는 곳에 핀을 꽂아요.', '간판 많은 거리', { q: '이곳을 지날 때는?', choices: ['간판 아래로 걸어요', '간판을 피해 돌아가요', '뛰어서 지나가요'], answer: 1 }, 0.2),
            PIN(TOWN, '학교에서 집에 갈 때 고를 높은 길에 핀을 꽂아요.', '언덕길', { q: '왜 이 길을 고를까요?', choices: ['물이 덜 모여서', '가장 짧아서', '놀 곳이 많아서'], answer: 0 }, 0.25, { conclude: '비가 많이 오면 물은 낮은 곳에 모여요. 냇가·지하차도·간판을 피해 높은 길로 가요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '비가 많이 오는 날 피할 곳은?', options: ['지하차도', '집 안', '튼튼한 건물'], answer: '지하차도' }] },
      }),
      C({
        id: 'saf-disaster.e34.typhoon-flood.activity.water-fork', type: 'activity', title: '갈림길: 물 찬 길을 만났어요',
        method: '물 찬 길 건널까 갈림길', tool: 'dilemma', minutes: 8,
        levels: { easy: '갈림 1번, 보기 2개 가운데 고르고 결과를 본다.', base: '갈림 2번, 보기 3개씩 고르며 결과를 따라간다.', challenge: '갈림 2번을 지난 뒤 흐르는 물이 위험한 까닭을 근거 카드에서 고른다.' },
        activity: {
          title: '갈림길: 비 오는 날 하굣길', tool: 'dilemma',
          teacher: '"물이 무릎까지밖에 안 와요. 건너도 될까요?" 보기를 고를 때마다 결과를 소리 내어 읽고, 나와 둘레 사람이 어떻게 되는지 짝과 말하게 한다. "조심해서 건너면 돼요"라는 학생에게 "흐르는 물은 발을 밀어요. 물속에 무엇이 있는지 보일까요?"라고 묻는다. 얕아 보여도 흐르는 물은 건너지 않고 돌아간다는 것을 짚는다.',
          task: '장면을 읽고 보기를 골라요. 결과를 보고 다음 장면에서 또 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL('하굣길에 흐르는 물이 찬 길을 만났어요.', {
              text: '비가 많이 온 날, 집에 가는 길에 무릎 높이 흐르는 물이 차 있어요.', motif: 'cloud',
              choices: [
                { id: 'cross', text: '걸어서 건넌다', result: '물살에 발이 밀려 휘청했어요.', impact: [{ who: '나', text: '넘어져 떠밀릴 수 있어요', tone: -1 }] },
                { id: 'back', text: '돌아가 높은 길로 간다', result: '조금 멀지만 언덕길로 돌아갔어요.', ending: '흐르는 물을 건너지 않고 돌아가 안전했어요.', next: {
                  text: '언덕길 앞에서 친구가 "지하차도가 더 빨라"라고 해요.', choices: [
                    { id: 'hill', text: '"물 차, 언덕길로 가자" 말한다', result: '친구와 함께 언덕길로 집에 갔어요.', impact: [{ who: '친구와 나', text: '함께 안전해요', tone: 1 }], ending: '낮은 길을 피하고 친구에게도 알렸어요.' },
                    { id: 'under', text: '지하차도로 간다', result: '지하차도에 물이 차오르고 있었어요.', impact: [{ who: '친구와 나', text: '갇힐 수 있어요', tone: -1 }] },
                    { id: 'puddle', text: '물웅덩이에서 논다', result: '옷이 젖고 길이 늦어졌어요.', impact: [{ who: '나', text: '감기에 걸릴 수 있어요', tone: -1 }] },
                  ] } },
                { id: 'test', text: '발을 넣어 세기를 본다', result: '물살이 세서 발이 끌려갔어요.', impact: [{ who: '나', text: '넘어질 수 있어요', tone: -1 }] },
              ] }, [['back', 'hill']],
            [{ id: 'push', text: '흐르는 물은 얕아도 발을 밀어서' }, { id: 'unseen', text: '물속이 보이지 않아서' }, { id: 'short', text: '건너면 빨리 가서', why: '빨리 가는 것보다 안전하게 가는 것이 먼저예요.' }], ['push', 'unseen'], 0.2),
            DIL('친구가 냇가 물 구경을 가자고 해요.', {
              text: '태풍이 지나간 오후, 친구가 "냇가 물 엄청 불었대, 보러 가자!"라고 해요.', motif: 'star',
              choices: [
                { id: 'no', text: '"위험해" 말하고 집에 있는다', result: '친구가 "조금만 보고 오자"라고 또 졸라요.', ending: '물 구경을 가지 않아 안전했어요.', next: {
                  text: '친구가 혼자라도 가겠다고 해요.', choices: [
                    { id: 'adult', text: '어른께 알린다', result: '어른이 친구 집에 연락하셨어요.', impact: [{ who: '친구', text: '위험을 피했어요', tone: 1 }], ending: '친구가 위험한 곳에 가지 않게 어른께 알렸어요.' },
                    { id: 'follow', text: '조금만 보고 온다', result: '냇가 둑이 미끄러웠어요.', impact: [{ who: '친구와 나', text: '빠질 수 있어요', tone: -1 }] },
                    { id: 'stone', text: '돌 던지며 놀자고 한다', result: '냇가 가까이 가게 됐어요.', impact: [{ who: '친구와 나', text: '다칠 수 있어요', tone: -1 }] },
                  ] } },
                { id: 'go', text: '같이 구경 간다', result: '냇가 물이 둑까지 차올라 있었어요.', impact: [{ who: '친구와 나', text: '떠밀릴 수 있어요', tone: -1 }] },
              ] }, [['no', 'adult']],
            [{ id: 'rise', text: '불은 물은 갑자기 넘쳐서' }, { id: 'friend', text: '친구도 지켜야 해서' }, { id: 'see', text: '멀리서 보면 괜찮아서', why: '둑과 길이 미끄러워 멀리서 보다가도 빠질 수 있어요.' }], ['rise', 'friend'], 0.25),
            DIL('바람이 세게 불어 창문이 덜컹거려요.', {
              text: '태풍이 온 저녁, 집 창문이 바람에 덜컹거려요.', motif: 'house',
              choices: [
                { id: 'open', text: '창문을 열고 구경한다', result: '바람과 비가 방 안으로 들이쳤어요.', impact: [{ who: '나', text: '날아온 것에 다칠 수 있어요', tone: -1 }] },
                { id: 'away', text: '창문에서 떨어져 있는다', result: '거실 가운데에서 가족과 함께 있었어요.', ending: '창문에서 떨어져 집 안에서 안전하게 지냈어요.', next: {
                  text: '갑자기 전기가 나가 깜깜해졌어요.', choices: [
                    { id: 'flash', text: '챙겨 둔 손전등을 켠다', result: '손전등 불빛으로 가족을 찾았어요.', impact: [{ who: '가족', text: '안전하게 기다려요', tone: 1 }], ending: '미리 챙긴 손전등으로 안전하게 기다렸어요.' },
                    { id: 'candle', text: '초에 불을 붙인다', result: '초가 넘어질까 걱정됐어요.', impact: [{ who: '가족', text: '불이 날 수 있어요', tone: -1 }] },
                    { id: 'out', text: '밖에 나가 본다', result: '바람에 날아온 물건이 떨어졌어요.', impact: [{ who: '나', text: '다칠 수 있어요', tone: -1 }] },
                  ] } },
                { id: 'tape', text: '창가에 서서 지켜본다', result: '창문 유리가 흔들려 무서웠어요.', impact: [{ who: '나', text: '유리에 다칠 수 있어요', tone: -1 }] },
              ] }, [['away', 'flash']],
            [{ id: 'glass', text: '창문이 깨질 수 있어서' }, { id: 'ready', text: '미리 챙기면 덜 위험해서' }, { id: 'fun', text: '바람 구경이 재미있어서', why: '구경하다 날아온 것에 다칠 수 있어요.' }], ['glass', 'ready'], 0.3, { conclude: '태풍·호우 때는 흐르는 물을 건너지 않고, 냇가에 가지 않고, 창문에서 떨어져 집 안에 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '얕아 보여도 ___ 물은 건너지 않아요.', answer: '흐르는' }] },
      }),
      C({
        id: 'saf-disaster.e34.typhoon-flood.wrap.home-check', type: 'wrap', title: '태풍 오기 전 집에서 할 일',
        method: '태풍 오기 전 집에서 할 일 점검', tool: 'kitchen', minutes: 7,
        levels: { easy: '점검 칸 3개 가운데 할 일만 표시한다.', base: '점검 칸 5개 가운데 할 일만 표시한다.', challenge: '칸 5개를 표시한 뒤 출구 2번에서 어른과 함께 할 일을 고른다.' },
        wrap: {
          teacher: '"태풍 소식이 들리면 오기 전에 집에서 무엇을 할까요?" 칸을 하나씩 소리 내어 읽고 할 일에만 표시하게 한다. 냇가 구경 칸까지 누르는 학생에게 "태풍이 오기 전에도 냇가 물은 불어 있을 수 있어요. 할 일일까요?"라고 묻는다. 무거운 바깥 물건은 어른과 함께 옮긴다는 것을 짚는다.',
          exitTicket: [
            { type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title: '태풍 오기 전', items: [{ id: 'window', text: '창문 닫고 잠그기' }, { id: 'news', text: '날씨 소식 듣기' }, { id: 'go', text: '냇가 구경 가기' }, { id: 'light', text: '손전등 챙기기' }, { id: 'inside', text: '바깥 물건 들이기' }] }, prompt: '태풍 오기 전 할 일만 표시해요.', target: { checklist: ['window', 'news', 'light', 'inside'] }, difficulty: 0.15,
              levels: { easy: { prompt: '태풍 오기 전 할 일만 표시해요(3칸).', toolOptions: { items: [{ id: 'window', text: '창문 닫고 잠그기' }, { id: 'go', text: '냇가 구경 가기' }, { id: 'light', text: '손전등 챙기기' }] }, target: { checklist: ['window', 'light'] } } } },
            { type: 'choice', prompt: '어른과 함께 할 일은?', options: ['바깥 화분 옮기기', '날씨 소식 듣기', '창가에서 떨어지기'], answer: 0, difficulty: 0.15, explain: '무거운 바깥 물건은 다칠 수 있어 어른과 함께 옮겨요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '태풍 오기 전 우리 집',
          items: [
            { type: 'check', prompt: '우리 집에서 할 일에 표시해요.', options: ['창문 닫기', '손전등 챙기기', '날씨 소식 듣기'] },
            { type: 'short', prompt: '태풍이 오기 전 가족과 함께 할 일을 한 줄로 써요.' },
          ],
          easy: { note: '"닫기·들이기·챙기기"를 떠올려요.', items: [{ type: 'choice', prompt: '태풍 오기 전 창문은?', options: ['닫아요', '열어요'], answer: '닫아요' }] },
        },
      }),
      C({
        id: 'saf-disaster.e34.typhoon-flood.wrap.action-web', type: 'wrap', title: '태풍·호우 행동 정리',
        method: '태풍·호우 행동 정리', tool: 'mindmap', minutes: 7,
        levels: { easy: '가지 2개(집 안·길에서)에 카드 4장을 나눈다.', base: '가지 3개(집 안·길에서·냇가)에 카드 6장을 나눈다.', challenge: '학교 가지가 더해진 4가지에 카드 8장을 나눈다.' },
        wrap: {
          teacher: '"오늘 배운 행동을 있는 곳마다 모아 볼까요?" 가지마다 카드를 붙인 뒤 한 목소리로 읽는다. "길에서는 우산만 꼭 잡으면 돼요"라는 학생에게 "간판 아래나 흐르는 물 앞에서는 무엇을 더 해야 할까요?"라고 되묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', options: { topic: '태풍·호우', slots: ['집 안', '길에서', '냇가'], cards: ['창문에서 멀리', '간판 피해 걷기', '가까이 가지 않기', '날씨 소식 듣기', '높은 길로 가기', '물 구경 안 하기'] }, prompt: '행동 카드를 있는 곳 가지에 나누어요.', target: { sort: { '집 안': ['창문에서 멀리', '날씨 소식 듣기'], 길에서: ['간판 피해 걷기', '높은 길로 가기'], 냇가: ['가까이 가지 않기', '물 구경 안 하기'] } }, difficulty: 0.15,
              levels: {
                easy: { prompt: '행동 카드 4장을 집 안과 길에서로 나누어요.', toolOptions: { slots: ['집 안', '길에서'], cards: ['창문에서 멀리', '간판 피해 걷기', '날씨 소식 듣기', '높은 길로 가기'] }, target: { sort: { '집 안': ['창문에서 멀리', '날씨 소식 듣기'], 길에서: ['간판 피해 걷기', '높은 길로 가기'] } } },
                challenge: { prompt: '행동 카드 8장을 집 안·길에서·냇가·학교로 나누어요.', toolOptions: { slots: ['집 안', '길에서', '냇가', '학교'], cards: ['창문에서 멀리', '간판 피해 걷기', '가까이 가지 않기', '선생님 말 듣기', '날씨 소식 듣기', '높은 길로 가기', '물 구경 안 하기', '운동장 안 나가기'] }, target: { sort: { '집 안': ['창문에서 멀리', '날씨 소식 듣기'], 길에서: ['간판 피해 걷기', '높은 길로 가기'], 냇가: ['가까이 가지 않기', '물 구경 안 하기'], 학교: ['선생님 말 듣기', '운동장 안 나가기'] } } },
              } },
            { type: 'choice', prompt: '하굣길에 흐르는 물이 찬 길을 만나면?', options: ['뛰어서 건너요', '돌아서 높은 길로', '발로 깊이를 재요'], answer: 1, difficulty: 0.1, explain: '흐르는 물은 얕아도 발을 밀어요. 돌아서 높은 길로 가요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '태풍·호우 때 행동',
          items: [
            { type: 'table', prompt: '있는 곳에 맞는 행동을 써요.', columns: ['있는 곳', '행동'], cells: [['집 안', ''], ['길에서', ''], ['냇가', '']], answer: '창문에서 멀리 / 간판 피하기·높은 길 / 가까이 가지 않기' },
            { type: 'draw', prompt: '태풍 날 집 안에서 안전하게 지내는 모습을 그려요.' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 4학년 · 연기 속 대피 (별표 2 초등 재난안전 1·5)
  // ======================================================================================================
  {
    const C = T('smoke-escape', 4);
    const FLOOR = {
      title: '우리 학교 3층', grid: [6, 4],
      regions: [
        { name: '서쪽 계단', cells: [[0, 0], [0, 1]] }, { name: '우리 교실', cells: [[1, 0], [2, 0]] }, { name: '옆 교실', cells: [[3, 0], [4, 0]] },
        { name: '동쪽 계단', cells: [[5, 0], [5, 1]] }, { name: '복도', cells: [[1, 1], [2, 1], [3, 1], [4, 1]] },
        { name: '화장실', cells: [[0, 2], [1, 2], [0, 3], [1, 3]] }, { name: '도서실', cells: [[2, 2], [3, 2], [2, 3], [3, 3]] }, { name: '과학실', cells: [[4, 2], [5, 2], [4, 3], [5, 3]] },
      ],
    };
    M.push(
      C({
        id: 'saf-disaster.e34.smoke-escape.intro.smoke-scene', type: 'intro', title: '연기 찬 복도에서 바른 자세',
        method: '연기 찬 복도 그림 보고 자세 고르기', tool: 'emotion', minutes: 6,
        levels: { easy: '교사가 두 사람(낮게 걷기·서서 뛰기)만 가리키며 함께 고른다.', base: '네 사람 가운데 바른 자세 2명을 스스로 고른다.', challenge: '고른 뒤 연기가 왜 위로 모이는지 짝에게 말한다.' },
        intro: {
          teacher: '"연기가 찬 복도예요. 이 가운데 누가 바르게 나가고 있을까요?" 시연 단추로 낮게 걷는 친구와 코·입을 막은 친구가 바구니에 담기는 것을 보인다. 그림의 연기가 천장 쪽에 짙게 모인 것을 짚으며 "뜨거운 연기는 위로 올라가요. 그러면 숨 쉬기 나은 곳은 어디일까요?"라고 묻는다. "서서 빨리 뛰면 금방 나가요"라는 말이 나오면 "서 있으면 얼굴이 어디에 있게 될까요?"라고 되묻는다.',
          student: '연기 찬 복도 그림에서 바르게 나가는 사람을 고르고, 왜 그런지 짝에게 말해 보아요.',
          demo: { tool: 'emotion', options: { mode: 'pick', basket: '바른 자세', cards: [{ id: 'low', text: '낮게 걷는 친구' }, { id: 'tall', text: '서서 뛰는 친구' }, { id: 'mouth', text: '코·입 막은 친구' }, { id: 'hide', text: '옷장에 숨은 친구' }], shuffle: false }, sequence: [{ pick: ['low', 'mouth'] }] },
          art: { draw: 'a paper hallway with dark grey paper smoke gathered near the ceiling, a paper child walking low with a sleeve over the mouth and a hand on the wall', banner: '연기 속에서는 낮게', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
      }),
      C({
        id: 'saf-disaster.e34.smoke-escape.intro.smoke-story', type: 'intro', title: '연기 속을 빠져나온 이야기',
        method: '연기 속 대피 이야기 듣기', tool: 'story', minutes: 5,
        levels: { easy: '교사가 카드 2장(젖은 천·엘리베이터)만 가리키며 함께 고른다.', base: '카드 5장 가운데 주인공이 쓴 방법 3장을 고른다.', challenge: '3장을 고른 뒤 이야기에 빠진 방법 하나(손잡이 열 확인)를 더 말한다.' },
        intro: {
          teacher: '"도윤이는 연기 찬 복도를 어떻게 빠져나왔을까요? 이야기를 잘 듣고 도윤이가 쓴 방법을 골라 봐요." 이야기를 들려준 뒤(젖은 손수건으로 코와 입을 막고, 몸을 낮추고, 벽을 짚으며 계단까지 갔다) 시연 단추로 세 카드가 바구니에 담기는 것을 보인다. "엘리베이터를 타면 더 빨라요"라는 말이 나오면 "불이 나서 전기가 끊기면 엘리베이터는 어떻게 될까요?"라고 되묻는다.',
          student: '이야기를 듣고 주인공이 연기 속에서 쓴 방법을 골라 보아요.',
          demo: { tool: 'story', options: { mode: 'pick', basket: '쓴 방법', cards: [{ id: 'cloth', text: '젖은 천으로 막기' }, { id: 'lift', text: '엘리베이터 타기' }, { id: 'low', text: '낮은 자세' }, { id: 'bed', text: '침대 밑 숨기' }, { id: 'wall', text: '벽 짚고 걷기' }], shuffle: false }, sequence: [{ pick: ['cloth', 'low', 'wall'] }] },
          art: { draw: 'a paper child crouching low along a paper hallway wall with a wet handkerchief over the nose and mouth, grey paper smoke above and a green paper exit sign ahead', banner: '막고, 낮추고, 짚고', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '이야기는 지어낸 것이다(가명). 학생에게 불이 났던 일을 묻지 않는다.',
      }),
      C({
        id: 'saf-disaster.e34.smoke-escape.activity.door-fork', type: 'activity', title: '갈림길: 문 손잡이가 뜨거워요',
        method: '문 손잡이 갈림길', tool: 'dilemma', minutes: 14,
        levels: { easy: '갈림 1번, 보기 2개 가운데 고르고 결과를 본다.', base: '갈림 2번, 보기 3개씩 고르며 결과를 따라간다(나갈 길이 없을 때 구조 요청 장면 포함).', challenge: '갈림 2번을 지난 뒤 근거 카드 3장 가운데 알맞은 것을 고른다.' },
        activity: {
          title: '갈림길: 문 앞에서', tool: 'dilemma',
          teacher: '"문을 열기 전에 왜 손등으로 손잡이를 대 볼까요? 뜨거우면 문 너머에 무엇이 있을까요?" 보기를 고를 때마다 결과를 소리 내어 읽고 짝과 이야기하게 한다. "숨으면 불이 못 찾아와요"라는 학생에게 "옷장 속에 있으면 구조대가 나를 찾을 수 있을까요?"라고 묻는다. 나갈 길이 없을 때는 연기를 막고 창가에서 알린다는 것을 짚는다.',
          task: '장면을 읽고 보기를 골라요. 결과를 보고 다음 장면에서 또 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL('문 손잡이를 손등으로 대 보니 뜨거워요.', {
              text: '화재 경보가 울려요. 방 문 손잡이를 손등으로 대 보니 뜨거워요.', motif: 'house',
              choices: [
                { id: 'open', text: '문을 확 연다', result: '문 너머 뜨거운 연기가 밀려 들어왔어요.', impact: [{ who: '나', text: '연기를 마실 수 있어요', tone: -1 }] },
                { id: 'other', text: '다른 길로 간다', result: '반대쪽 문으로 나갔어요.', ending: '뜨거운 문을 열지 않고 다른 길로 나가 안전했어요.', next: {
                  text: '다른 길에도 연기가 조금 퍼져 있어요.', choices: [
                    { id: 'low', text: '코 막고 낮게 벽 짚기', result: '낮은 자세로 벽을 짚고 계단에 닿았어요.', impact: [{ who: '나', text: '안전하게 나가요', tone: 1 }], ending: '코를 막고 낮게 벽을 짚어 연기 속을 빠져나왔어요.' },
                    { id: 'run', text: '서서 빨리 뛴다', result: '연기를 마셔 기침이 났어요.', impact: [{ who: '나', text: '숨쉬기 힘들어요', tone: -1 }] },
                    { id: 'hide', text: '옷장에 숨는다', result: '연기가 방 안까지 들어왔어요.', impact: [{ who: '나', text: '구조대가 찾기 어려워요', tone: -1 }] },
                  ] } },
                { id: 'wait', text: '문 앞에서 기다린다', result: '문틈으로 연기가 새어 나왔어요.', impact: [{ who: '나', text: '연기를 마실 수 있어요', tone: -1 }] },
              ] }, [['other', 'low']],
            [{ id: 'fire', text: '뜨거우면 문 너머에 불이 있어서' }, { id: 'smoke', text: '연기는 위로 모여서' }, { id: 'quick', text: '열어야 빨리 나가서', why: '뜨거운 문을 열면 불과 연기가 한꺼번에 들어와요.' }], ['fire', 'smoke'], 0.2),
            DIL('밖에서 타는 냄새가 나요. 문을 열까요?', {
              text: '방 안에 있는데 문밖에서 타는 냄새가 나요.', motif: 'cloud',
              choices: [
                { id: 'check', text: '손등으로 손잡이를 대 본다', result: '손잡이가 뜨겁지 않았어요.', ending: '열기 전에 손잡이를 확인해 안전하게 판단했어요.', next: {
                  text: '손잡이가 뜨겁지 않아요. 문틈으로 연기는 안 보여요.', choices: [
                    { id: 'slow', text: '천천히 열고 낮게 나간다', result: '낮은 자세로 계단까지 갔어요.', impact: [{ who: '나', text: '안전하게 나가요', tone: 1 }], ending: '확인하고 천천히 열어 낮은 자세로 대피했어요.' },
                    { id: 'bag', text: '가방 챙기러 간다', result: '챙기는 사이 연기가 짙어졌어요.', impact: [{ who: '나', text: '대피가 늦어요', tone: -1 }] },
                    { id: 'lift', text: '엘리베이터로 간다', result: '엘리베이터가 멈춰 있었어요.', impact: [{ who: '나', text: '갇힐 수 있어요', tone: -1 }] },
                  ] } },
                { id: 'grab', text: '손바닥으로 확 연다', result: '손바닥이 뜨거울 뻔했어요.', impact: [{ who: '나', text: '손을 델 수 있어요', tone: -1 }] },
              ] }, [['check', 'slow']],
            [{ id: 'back', text: '손등으로 대면 덜 다쳐서' }, { id: 'stuff', text: '물건보다 몸이 먼저라서' }, { id: 'bag', text: '가방은 꼭 챙겨야 해서', why: '물건을 챙기다 늦으면 연기를 마셔요. 몸만 나가요.' }], ['back', 'stuff'], 0.25),
            DIL('나갈 길이 모두 막혔어요. 어떻게 할까요?', {
              text: '두 쪽 문 손잡이가 모두 뜨거워 나갈 길이 없어요.', motif: 'sun',
              choices: [
                { id: 'hide', text: '옷장에 숨는다', result: '구조대가 나를 찾기 어려웠어요.', impact: [{ who: '나', text: '구조가 늦어요', tone: -1 }] },
                { id: 'wave', text: '창가에서 천을 흔들어 알린다', result: '밖에 있던 사람이 나를 보고 119에 알렸어요.', ending: '창가에서 알려 구조대가 나를 찾았어요.', next: {
                  text: '문틈으로 연기가 조금씩 들어와요.', choices: [
                    { id: 'seal', text: '젖은 천으로 문틈을 막는다', result: '연기가 덜 들어왔어요.', impact: [{ who: '나', text: '구조를 기다려요', tone: 1 }], ending: '문틈을 막고 창가에서 구조를 기다렸어요.' },
                    { id: 'jump', text: '창밖으로 뛰어내린다', result: '높은 곳에서 떨어지면 크게 다쳐요.', impact: [{ who: '나', text: '크게 다쳐요', tone: -1 }] },
                    { id: 'bed', text: '침대 밑에 숨는다', result: '구조대가 나를 못 찾았어요.', impact: [{ who: '나', text: '구조가 늦어요', tone: -1 }] },
                  ] } },
                { id: 'open', text: '뜨거운 문을 연다', result: '연기와 열이 밀려 들어왔어요.', impact: [{ who: '나', text: '숨쉬기 힘들어요', tone: -1 }] },
              ] }, [['wave', 'seal']],
            [{ id: 'seen', text: '보여야 구조대가 찾아서' }, { id: 'seal', text: '문틈을 막으면 연기가 덜 와서' }, { id: 'safe', text: '숨으면 불이 못 와서', why: '숨으면 구조대가 찾지 못해요. 창가에서 알려요.' }], ['seen', 'seal'], 0.3, { conclude: '문은 손등으로 확인하고, 뜨거우면 다른 길로 가요. 길이 없으면 연기를 막고 창가에서 알려요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '문을 열기 전에 손잡이는?', options: ['손바닥으로 꽉 잡아요', '손등으로 대 봐요', '발로 차요'], answer: '손등으로 대 봐요' }] },
      }),
      C({
        id: 'saf-disaster.e34.smoke-escape.activity.drill-board', type: 'activity', title: '연기 상황 대피 훈련 판',
        method: '화재 대피 훈련(연기 상황) 판', tool: 'timer', minutes: 15,
        levels: { easy: '순서 카드 3장만 맞춘다(안전 점검 칸 없음).', base: '순서 카드 4장을 맞추고 안전 점검 3칸에 표시한다.', challenge: '4장·3칸을 맞춘 뒤 훈련을 마치고 스스로 점검 2칸을 더 표시한다.' },
        activity: {
          title: '연기 상황 훈련 판', tool: 'timer',
          teacher: '"연기가 찼다고 생각하고 나가 볼 거예요. 무엇부터 할까요?" 순서 카드를 맞춘 뒤 젖은 손수건(또는 소매)으로 코와 입을 막고, 몸을 낮춰 한 손으로 벽을 짚으며 교실에서 복도 끝까지 걸어 본다. 허리를 펴고 걷는 학생에게 "연기는 어디에 모였지요? 내 얼굴은 어디에 있어야 할까요?"라고 묻는다. 훈련이 끝나면 안전 점검과 스스로 점검을 표시한다.',
          task: '연기 상황 대피 순서 카드를 맞추고 점검에 표시한 뒤 훈련해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DRILL('연기 속에서 나가는 차례를 맞춰요.', '연기 속 대피', ['젖은 천으로 코·입', '낮은 자세 만들기', '벽 짚고 걷기', '밖에서 인원 확인'], ['비상구 표시를 봤어요', '젖은 천이 있어요', '모일 곳을 알아요'], ['허리를 낮췄어요', '벽에서 손을 안 뗐어요'], 2, 0, 0.15),
            DRILL('문 앞에서 할 일 차례를 맞춰요.', '문 앞에서', ['손등으로 손잡이', '뜨거우면 다른 길', '낮게 문 나가기', '계단으로 내려가기'], ['다른 길을 알아요', '계단 자리를 알아요', '짝을 확인했어요'], ['손등으로 확인했어요', '엘리베이터를 안 탔어요'], 1, 0, 0.2),
            DRILL('훈련을 마친 뒤 할 일 차례를 맞춰요.', '훈련 마친 뒤', ['반별로 앉기', '인원 확인 받기', '잘한 점 말하기', '다음 목표 정하기'], ['모두 모였어요', '다친 친구가 없어요', '건물에 안 들어가요'], ['내 목표를 정했어요', '짝을 칭찬했어요'], 3, 0, 0.25, { conclude: '연기 속에서는 코·입을 막고, 낮게, 벽을 짚어 나가요. 문은 손등으로 먼저 확인해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'check', prompt: '연기 상황 훈련에서 한 것에 표시해요.', options: ['코와 입을 막았어요', '낮은 자세로 걸었어요', '벽을 짚었어요'] }] },
        notes: '이 모듈로 학교 화재 대피 훈련(연기 상황)을 함께 한다(별표 1 참고5). 실제 연기를 피우지 않고 "연기가 찼다고 생각하고" 연습한다.',
      }),
      C({
        id: 'saf-disaster.e34.smoke-escape.activity.other-route', type: 'activity', title: '막힌 계단 피해 다른 길 찾기',
        method: '층 칸 지도에서 막힌 길 피해 다른 길 찾기', tool: 'map', minutes: 13,
        levels: { easy: '핀을 놓으면 그 칸의 이름이 바로 보인다.', base: '칸 8개 지도의 이름을 보고 물음에 맞는 곳에 핀을 꽂는다.', challenge: '핀을 꽂은 뒤 두 길 가운데 그 길을 고른 까닭도 보기에서 고른다.' },
        activity: {
          title: '층 지도에 다른 길 핀', tool: 'map',
          teacher: '"동쪽 계단에 연기가 찼어요. 우리 교실에서 어느 계단으로 가야 할까요?" 핀을 꽂기 전에 손가락으로 두 계단까지 가는 길을 따라가 보게 한다. 동쪽 계단에 핀을 꽂는 학생에게 "연기가 찬 계단으로 내려가면 어떻게 될까요?"라고 묻는다. 우리 학교에도 계단이 두 곳 이상 있다는 것과 평소에 두 길을 다 알아 둔다는 것을 짚는다.',
          task: '층 지도를 보고 연기를 피해 갈 곳에 핀을 꽂아요.', levels: { easy: { readout: true }, base: {}, challenge: {} },
          items: [
            PIN(FLOOR, '동쪽 계단에 연기가 찼어요. 우리가 갈 계단에 핀을 꽂아요.', '서쪽 계단', { q: '왜 이 계단으로 갈까요?', choices: ['연기가 없어서', '더 넓어서', '가까운 친구가 있어서'], answer: 0 }, 0.15),
            PIN(FLOOR, '과학실에서 연기가 나요. 그 곳에 핀을 꽂아요.', '과학실', { q: '이곳 둘레에서는?', choices: ['구경하러 가요', '멀리 피해 가요', '문을 열어 봐요'], answer: 1 }, 0.2),
            PIN(FLOOR, '서쪽 계단도 막혔어요. 창가에서 구조를 기다릴 곳에 핀을 꽂아요.', '우리 교실', { q: '이곳에서 할 일은?', choices: ['책상 밑에 숨어요', '문틈을 막고 창가에서 알려요', '창밖으로 뛰어요'], answer: 1 }, 0.25, { conclude: '연기가 찬 길은 피하고 다른 계단으로 가요. 길이 없으면 문틈을 막고 창가에서 알려요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '우리 교실에서 나갈 수 있는 계단 두 곳을 써요.' }] },
        notes: '수업 뒤 실제 우리 학교 층 안내도에서 계단 두 곳을 함께 확인한다.',
      }),
      C({
        id: 'saf-disaster.e34.smoke-escape.wrap.smoke-web', type: 'wrap', title: '연기 속 대피 방법 정리',
        method: '연기 속 대피 방법 정리', tool: 'mindmap', minutes: 7,
        levels: { easy: '가지 2개(막기·낮추기)에 카드 2장을 붙인다.', base: '가지 4개(막기·낮추기·짚기·확인하기)에 카드 4장을 붙인다.', challenge: '가지 4개에 방법과 까닭 카드 8장을 나누어 붙인다.' },
        wrap: {
          teacher: '"연기 속에서 쓰는 방법 네 가지를 기억하나요?" 가지를 짚으며 카드를 붙이고, 다 붙이면 "막고, 낮추고, 짚고, 확인해요"를 몸짓과 함께 말한다. "확인하기는 왜 필요해요?"라는 질문이 나오면 "뜨거운 문을 열면 무엇이 들어올까요?"라고 되묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', options: { topic: '연기', slots: ['막기', '낮추기', '짚기', '확인하기'], cards: ['젖은 천으로 코·입', '몸을 낮게', '벽 짚고 걷기', '손잡이 열 확인'] }, prompt: '연기 속 대피 방법 카드를 가지에 붙여요.', target: { sort: { 막기: ['젖은 천으로 코·입'], 낮추기: ['몸을 낮게'], 짚기: ['벽 짚고 걷기'], 확인하기: ['손잡이 열 확인'] } }, difficulty: 0.15,
              levels: {
                easy: { prompt: '대피 방법 카드 2장을 가지에 붙여요.', toolOptions: { slots: ['막기', '낮추기'], cards: ['젖은 천으로 코·입', '몸을 낮게'] }, target: { sort: { 막기: ['젖은 천으로 코·입'], 낮추기: ['몸을 낮게'] } } },
                challenge: { prompt: '방법과 까닭 카드 8장을 가지에 붙여요.', toolOptions: { cards: ['젖은 천으로 코·입', '몸을 낮게', '벽 짚고 걷기', '손잡이 열 확인', '연기 덜 마시게', '연기는 위로 모여', '길 잃지 않게', '문 뒤에 불이'] }, target: { sort: { 막기: ['젖은 천으로 코·입', '연기 덜 마시게'], 낮추기: ['몸을 낮게', '연기는 위로 모여'], 짚기: ['벽 짚고 걷기', '길 잃지 않게'], 확인하기: ['손잡이 열 확인', '문 뒤에 불이'] } } },
              } },
            { type: 'choice', prompt: '연기 속에서 숨기 좋은 곳은?', options: ['옷장 안', '숨지 않고 밖으로', '침대 밑'], answer: 1, difficulty: 0.1, explain: '숨으면 구조대가 찾기 어려워요. 숨지 않고 낮게 밖으로 나가요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '연기 속에서 나가요',
          items: [
            { type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '연기는 ___로 모이니 몸을 낮춰요.', answer: '위' },
            { type: 'draw', prompt: '연기 속에서 바르게 나가는 내 모습을 그려요.' },
          ],
        },
      }),
      C({
        id: 'saf-disaster.e34.smoke-escape.wrap.self-check', type: 'wrap', title: '연기 훈련 스스로 점검',
        method: '연기 훈련 스스로 점검', tool: 'kitchen', minutes: 7,
        levels: { easy: '점검 칸 2개에 표시한다.', base: '점검 칸 4개에 표시한다.', challenge: '점검 칸 4개에 표시하고 다음 훈련 목표를 고른 뒤 쓴다.' },
        wrap: {
          teacher: '"오늘 연기 훈련에서 내가 잘한 것은 무엇인가요?" 점검 칸을 하나씩 읽고 실제로 한 것에만 정직하게 표시하게 한다. 허리를 펴고 걸었던 학생에게는 탓하지 않고 "다음 훈련에서는 그 칸을 목표로 해 볼까요?"라고 말해 목표로 잇는다.',
          exitTicket: [
            { type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title: '연기 훈련 점검', items: [{ id: 'mouth', text: '코와 입을 막았어요' }, { id: 'low', text: '낮게 걸었어요' }, { id: 'wall', text: '벽을 짚었어요' }, { id: 'knob', text: '손잡이를 확인했어요' }] }, prompt: '오늘 훈련에서 한 것에 스스로 표시해요.', target: { selfCheck: true }, difficulty: 0.1,
              levels: { easy: { toolOptions: { items: [{ id: 'mouth', text: '코와 입을 막았어요' }, { id: 'low', text: '낮게 걸었어요' }] } } } },
            { type: 'choice', prompt: '다음 연기 훈련 목표로 알맞은 것은?', options: ['허리를 더 낮추기', '서서 빨리 뛰기', '친구 앞지르기'], answer: 0, difficulty: 0.1, explain: '연기는 위로 모이니 허리를 낮출수록 숨쉬기 나아요.' },
            { type: 'short', prompt: '다음 훈련에서 더 잘할 점을 하나 써요.' },
          ],
        },
        worksheet: {
          title: '연기 훈련을 돌아봐요',
          items: [
            { type: 'check', prompt: '오늘 훈련에서 한 것에 표시해요.', options: ['코와 입을 막았어요', '낮은 자세로 걸었어요', '손등으로 손잡이를 대 봤어요'] },
            { type: 'short', prompt: '다음 훈련 목표를 한 줄로 써요.' },
          ],
          easy: { note: '"막기 → 낮추기 → 짚기"를 떠올려요.', items: [{ type: 'choice', prompt: '연기 속에서 몸은?', options: ['낮춰요', '펴요'], answer: '낮춰요' }] },
        },
      }),
    );
  }

  // ======================================================================================================
  // 4학년 · 가스 냄새·폭발 위험 알아차리고 알리기 (별표 2 초등 재난안전 4·5)
  // ======================================================================================================
  {
    const C = T('gas-explosion', 4);
    const SCH = {
      title: '우리 학교 1층', grid: [6, 4],
      regions: [
        { name: '과학실', cells: [[0, 0], [1, 0]] }, { name: '우리 교실', cells: [[2, 0], [3, 0]] }, { name: '교무실', cells: [[4, 0], [5, 0]] },
        { name: '복도', cells: [[0, 1], [1, 1], [2, 1], [3, 1], [4, 1], [5, 1]] }, { name: '현관', cells: [[2, 2], [3, 2]] },
        { name: '조리실', cells: [[0, 2], [1, 2]] }, { name: '운동장', cells: [[0, 3], [1, 3], [2, 3], [3, 3], [4, 3], [5, 3], [4, 2], [5, 2]] },
      ],
    };
    const APT = {
      title: '우리 아파트', grid: [6, 4],
      regions: [
        { name: '부엌', cells: [[0, 0], [1, 0]] }, { name: '거실', cells: [[2, 0], [3, 0], [2, 1], [3, 1]] }, { name: '창문', cells: [[4, 0], [5, 0]] },
        { name: '현관', cells: [[0, 1], [1, 1]] }, { name: '계단', cells: [[4, 1], [5, 1]] },
        { name: '복도', cells: [[0, 2], [1, 2], [2, 2], [3, 2], [4, 2], [5, 2]] }, { name: '경비실', cells: [[0, 3], [1, 3]] }, { name: '놀이터', cells: [[2, 3], [3, 3], [4, 3], [5, 3]] },
      ],
    };
    M.push(
      C({
        id: 'saf-disaster.e34.gas-explosion.intro.smell-story', type: 'intro', title: '집에 오니 이상한 냄새',
        method: '부엌 이상한 냄새 이야기', tool: 'story', minutes: 6,
        levels: { easy: '교사가 보기 2장(창문 열기·불 켜서 찾기)만 가리키며 함께 고른다.', base: '보기 4장 가운데 할 일 2장을 스스로 고른다.', challenge: '고른 뒤 불 켜기가 왜 위험한지 까닭을 짝에게 말한다.' },
        intro: {
          teacher: '"민서가 학교에서 돌아와 현관문을 여니 부엌에서 이상한 냄새가 나요. 가스 냄새 같아요. 민서는 무엇을 할까요?" 생각을 듣고 시연 단추로 창문 열기·밖에 나가 알리기 카드가 바구니에 담기는 것을 보인다. "불을 켜서 어디서 새는지 봐요"라는 말이 나오면 "스위치를 누를 때 작은 불꽃이 튈 수 있어요. 가스가 있는 곳에서 불꽃이 튀면 어떻게 될까요?"라고 되묻는다. 환풍기도 전기 스위치라는 것을 짚는다.',
          student: '이야기 속 친구가 가스 냄새를 맡았을 때 할 일을 고르고, 까닭을 말해 보아요.',
          demo: { tool: 'story', options: { mode: 'pick', basket: '할 일', cards: [{ id: 'window', text: '창문 열기' }, { id: 'light', text: '불 켜서 찾기' }, { id: 'fan', text: '환풍기 켜기' }, { id: 'out', text: '밖에 나가 알리기' }], shuffle: false }, sequence: [{ pick: ['window', 'out'] }] },
          art: { draw: 'a paper apartment kitchen with a paper gas stove and faint wavy paper smell lines, a paper child at the door holding the nose and pointing to an open window', banner: '이상한 냄새가 나면?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
      }),
      C({
        id: 'saf-disaster.e34.gas-explosion.intro.smell-face', type: 'intro', title: '가스 냄새가 날 수 있는 곳',
        method: '냄새 맡은 장면 고르기', tool: 'emotion', minutes: 5,
        levels: { easy: '교사가 부엌 가스레인지 한 곳을 함께 고른다.', base: '부엌·과학실·보일러실 그림에서 가스 냄새가 날 수 있는 곳 3장을 고른다.', challenge: '고른 뒤 가스에 냄새를 넣는 까닭을 듣고 짝에게 다시 말한다.' },
        intro: {
          teacher: '"가스는 어디에서 쓸까요? 그곳에서 가스 냄새가 나면 새고 있다는 뜻이에요." 시연 단추로 부엌 가스레인지·과학실 가스 밸브·보일러실이 바구니에 담기는 것을 보인다. "가스는 원래 냄새가 나요"라는 말이 나오면 "가스에는 원래 냄새가 거의 없어서, 새는 것을 알아차리라고 일부러 냄새를 넣어요"라고 알려 준다. 냄새를 맡으면 바로 피한다는 것을 짚는다.',
          student: '그림에서 가스 냄새가 날 수 있는 곳을 고르고, 냄새가 나면 무엇을 할지 말해 보아요.',
          demo: { tool: 'emotion', options: { mode: 'pick', basket: '가스 냄새 조심', cards: [{ id: 'stove', text: '부엌 가스레인지' }, { id: 'bed', text: '내 방 침대' }, { id: 'valve', text: '과학실 가스 밸브' }, { id: 'book', text: '도서실 책장' }, { id: 'boiler', text: '보일러실' }], shuffle: false }, sequence: [{ pick: ['stove', 'valve', 'boiler'] }] },
          art: { draw: 'three paper panels showing a home kitchen stove, a school science room gas valve and a boiler room, faint paper smell lines rising from each', banner: '가스는 어디에 있을까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
      }),
      C({
        id: 'saf-disaster.e34.gas-explosion.activity.gas-order', type: 'activity', title: '가스 냄새 날 때 차례',
        method: '가스 냄새 날 때 차례 놓기', tool: 'timeline', minutes: 13,
        levels: { easy: '카드 3장을 차례로 놓고, 놓으면 바로 맞는지 알려 준다.', base: '카드 4장을 차례로 놓은 뒤 확인한다.', challenge: '틀린 카드 1장(밸브 혼자 잠그기 등)이 섞인 5장에서 그것을 빼고 놓은 뒤, 어린이가 밸브를 만지지 않는 까닭을 말한다.' },
        activity: {
          title: '가스 냄새 날 때 차례', tool: 'timeline',
          teacher: '"가스 냄새를 맡았어요. 맨 먼저 하지 말아야 할 일은 무엇일까요?" 카드를 놓은 뒤 차례대로 소리 내어 읽는다. 창문 열기를 나가기보다 뒤에 두는 학생과는 "창문을 열면 가스가 어디로 빠질까요?"를 함께 이야기한다. 밸브를 잠그겠다는 학생에게 "밸브는 어른이 다루는 것이에요. 어린이는 나가서 어른께 알리면 돼요"라고 짚는다. 전화도 밖에 나가서 건다는 것을 덧붙인다.',
          task: '가스 냄새가 날 때 할 일 카드를 하는 차례대로 놓아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORD('집 부엌에서 가스 냄새가 날 때 차례로 놓아요.', {}, [{ id: 'nofire', text: '불·스위치 안 쓰기' }, { id: 'window', text: '창문 열기' }, { id: 'out', text: '밖으로 나가기' }, { id: 'tell', text: '어른·119에 알리기' }], 1, { id: 'valve', text: '밸브 혼자 잠그기', why: '어린이는 밸브를 만지지 않아요. 나가서 어른께 알려요.' }, 0.15),
            ORD('과학실에서 가스 냄새가 날 때 차례로 놓아요.', {}, [{ id: 'stop', text: '하던 실험 멈추기' }, { id: 'teacher', text: '선생님께 알리기' }, { id: 'line', text: '줄 서서 나가기' }, { id: 'wait', text: '밖에서 기다리기' }], 2, { id: 'lamp', text: '불 켜서 찾아보기', why: '불을 켜면 가스에 불이 붙을 수 있어요.' }, 0.2),
            ORD('현관에 들어서자 가스 냄새가 날 때 차례로 놓아요.', {}, [{ id: 'halt', text: '현관에서 멈추기' }, { id: 'noswitch', text: '전등 안 켜기' }, { id: 'leave', text: '문 열어 두고 나가기' }, { id: 'guard', text: '밖에서 어른께 전화' }], 3, { id: 'fan', text: '환풍기 켜기', why: '환풍기도 전기 스위치예요. 켜지 않아요.' }, 0.25, { conclude: '가스 냄새가 나면 불과 스위치를 쓰지 않고, 창문을 열고, 밖으로 나가서 알려요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '가스 냄새가 날 때 하지 않을 일은?', options: ['창문 열기', '전등 켜기', '밖으로 나가기'], answer: '전등 켜기' }] },
      }),
      C({
        id: 'saf-disaster.e34.gas-explosion.activity.drill-board', type: 'activity', title: '폭발 위험 대피 도상 훈련',
        method: '폭발 위험 대피 도상 훈련 판', tool: 'timer', minutes: 15,
        levels: { easy: '순서 카드 3장과 안전 점검 2칸을 확인한다.', base: '순서 카드 4장과 안전 점검 3칸(인원·알림)을 확인한다.', challenge: '4장·3칸을 맞춘 뒤 도상 훈련을 마치고 스스로 점검 2칸을 더 표시한다.' },
        activity: {
          title: '폭발 위험 도상 훈련 판', tool: 'timer',
          teacher: '"오늘은 지도 위에서 손가락으로 대피해 보는 도상 훈련이에요." 칠판에 학교 1층 그림을 붙이고, 순서 카드를 맞출 때마다 대피하는 길을 손가락으로 따라가게 한다. 모인 뒤에는 인원 확인과 알림을 안전 점검에 표시한다. "냄새만 나면 괜찮아요"라는 학생에게 "가스는 작은 불꽃에도 터질 수 있어요. 그래서 냄새만으로도 바로 나가요"라고 짚는다.',
          task: '지도를 보며 대피 순서 카드를 맞추고, 모여서 확인할 점검에 표시해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DRILL('과학실 가스 냄새 때 대피 차례를 맞춰요.', '과학실에서', ['실험 멈추기', '불·스위치 안 쓰기', '줄 서서 복도로', '운동장에 모이기'], ['인원을 확인했어요', '선생님이 알렸어요', '건물에서 떨어졌어요'], ['손가락으로 길을 짚었어요', '모일 곳을 말했어요'], 2, 2, 0.15),
            DRILL('조리실 쪽 가스 냄새 때 대피 차례를 맞춰요.', '조리실 쪽', ['하던 일 멈추기', '조리실 쪽 피하기', '반대쪽 현관으로', '모일 곳 도착'], ['반 친구가 다 왔어요', '119 신고를 확인했어요', '다시 안 들어가요'], ['피할 곳을 말했어요', '줄을 지켰어요'], 1, 2, 0.2),
            DRILL('아파트에서 가스 냄새 때 대피 차례를 맞춰요.', '아파트에서', ['불·스위치 안 켜기', '계단으로 내려가기', '건물 밖에 모이기', '경비실에 알리기'], ['가족이 다 나왔어요', '이웃에게 알렸어요', '엘리베이터 안 탔어요'], ['알릴 곳을 말했어요', '가족과 나눌 말을 정했어요'], 3, 2, 0.25, { conclude: '폭발 위험이 있으면 불을 쓰지 않고 건물 밖 넓은 곳으로 나가 인원을 확인하고 알려요.' }),
          ],
        },
        worksheet: { items: [{ type: 'check', prompt: '모인 뒤 확인할 것에 표시해요.', options: ['친구가 다 왔어요', '어른이 알렸어요', '건물에 다시 안 가요'] }] },
        notes: '이 모듈로 폭발 위험 대피 도상 훈련(지도 위 훈련)을 한다(별표 1 참고5: 유형을 달리해 매 학년도 2종류 이상). 학교 층 안내도를 칠판에 붙여 쓴다.',
      }),
      C({
        id: 'saf-disaster.e34.gas-explosion.activity.exit-map', type: 'activity', title: '나가는 길과 알릴 곳 찾기',
        method: '집·학교 칸 지도에서 나가는 길과 알릴 곳 핀', tool: 'map', minutes: 13,
        levels: { easy: '핀을 놓으면 그 칸의 이름이 바로 보인다.', base: '학교·아파트 지도의 이름을 보고 물음에 맞는 곳에 핀을 꽂는다.', challenge: '핀을 꽂은 뒤 까닭을 고르고, 바람이 들어오는 창문 쪽도 짚는다.' },
        activity: {
          title: '지도에 나갈 길·알릴 곳 핀', tool: 'map',
          teacher: '"가스 냄새가 난 곳을 피해서 어디로 나가고, 누구에게 알릴까요?" 핀을 꽂기 전에 냄새가 난 곳과 나가는 문을 손가락으로 짚게 한다. 냄새 나는 곳을 지나 나가겠다는 학생에게 "냄새가 짙은 곳을 지나면 어떻게 될까요? 다른 문이 있나요?"라고 묻는다. 학교에서는 교무실, 아파트에서는 경비실에 알린다는 것을 짚는다.',
          task: '지도를 보고 물음에 맞는 곳에 핀을 꽂아요.', levels: { easy: { readout: true }, base: {}, challenge: {} },
          items: [
            PIN(SCH, '학교에서 가스 냄새가 나는 곳에 핀을 꽂아요.', '과학실', { q: '이곳 둘레에서는?', choices: ['불을 켜요', '멀리 피해요', '냄새를 맡아 봐요'], answer: 1 }, 0.15),
            PIN(SCH, '가스 냄새를 알리러 갈 곳에 핀을 꽂아요.', '교무실', { q: '왜 이곳에 알릴까요?', choices: ['어른이 대처해서', '가까워서 놀려고', '숨으려고'], answer: 0 }, 0.2),
            PIN(APT, '집에서 가스 냄새가 날 때 열 곳에 핀을 꽂아요.', '창문', { q: '창문을 여는 까닭은?', choices: ['바람으로 가스가 빠져서', '구경하려고', '추워서'], answer: 0 }, 0.2),
            PIN(APT, '아파트 밖으로 나가 알릴 곳에 핀을 꽂아요.', '경비실', { q: '전화는 어디서 걸까요?', choices: ['부엌 안에서', '집 밖에서', '가스레인지 옆'], answer: 1 }, 0.25, { conclude: '가스 냄새가 난 곳을 피해 밖으로 나가고, 학교는 교무실·아파트는 경비실에 알려요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '우리 집이나 학교에서 가스 냄새를 알릴 곳을 써요.' }] },
      }),
      C({
        id: 'saf-disaster.e34.gas-explosion.wrap.kitchen-check', type: 'wrap', title: '부엌 가스 안전 점검',
        method: '부엌 가스 안전 점검', tool: 'kitchen', minutes: 7,
        levels: { easy: '점검 칸 2개 가운데 지킬 것만 표시한다.', base: '점검 칸 4개 가운데 지킬 것만 표시한다.', challenge: '칸 4개를 표시한 뒤 출구 2번에서 가족과 나눌 약속을 고른다.' },
        wrap: {
          teacher: '"우리 집 부엌에서 가스를 안전하게 쓰려면 무엇을 지킬까요?" 칸을 하나씩 소리 내어 읽고 지킬 것에만 표시하게 한다. "손잡이를 돌려 보는 건 괜찮아요"라는 학생에게 "가스레인지 손잡이를 돌리면 가스가 나와요. 누가 켜기로 했지요?"라고 되묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title: '부엌 가스 약속', items: [{ id: 'adult', text: '어른이 불 켜기' }, { id: 'play', text: '손잡이 돌려 보기' }, { id: 'stay', text: '켜 두고 안 나가기' }, { id: 'cloth', text: '옆에 행주 안 두기' }] }, prompt: '부엌에서 지킬 가스 약속만 표시해요.', target: { checklist: ['adult', 'stay', 'cloth'] }, difficulty: 0.15,
              levels: { easy: { prompt: '부엌에서 지킬 가스 약속만 표시해요(2칸).', toolOptions: { items: [{ id: 'adult', text: '어른이 불 켜기' }, { id: 'play', text: '손잡이 돌려 보기' }] }, target: { checklist: ['adult'] } } } },
            { type: 'choice', prompt: '가족과 나눌 가스 약속은?', options: ['냄새나면 불 켜기', '냄새나면 창문 열고 나가기', '밸브를 내가 잠그기'], answer: 1, difficulty: 0.15, explain: '냄새가 나면 불을 쓰지 않고 창문을 연 뒤 밖에 나가 알려요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '우리 집 부엌 가스 약속',
          items: [
            { type: 'check', prompt: '우리 집에서 지킬 것에 표시해요.', options: ['가스레인지는 어른이 켜요', '켜 둔 채 나가지 않아요', '옆에 행주를 두지 않아요'] },
            { type: 'short', prompt: '가족에게 알려 줄 가스 약속을 한 줄로 써요.' },
          ],
          easy: { note: '"어른이 켜고, 켜 두고 안 나가요"를 떠올려요.', items: [{ type: 'choice', prompt: '가스레인지는 누가 켜요?', options: ['어른', '나 혼자'], answer: '어른' }] },
        },
      }),
      C({
        id: 'saf-disaster.e34.gas-explosion.wrap.lab-fork', type: 'wrap', title: '과학실 갈림길 다시 고르기',
        method: '과학실 갈림길 다시 고르기', tool: 'dilemma', minutes: 7,
        levels: { easy: '갈림 1번(처음 할 일)만 고르고 결과를 본다.', base: '갈림 2번(처음 할 일 → 친구가 스위치를 켜려 할 때 할 말)을 고른다.', challenge: '갈림 2번을 지난 뒤 근거 카드 3장 가운데 알맞은 것을 고른다.' },
        wrap: {
          teacher: '"오늘 배운 것으로 과학실 장면을 다시 골라 볼까요?" 장면을 함께 소리 내어 읽고 각자 고르게 한 뒤, 친구가 스위치를 켜려 할 때 할 말을 짝과 실제로 말해 본다. 환풍기를 켜자는 친구에게 동의하는 학생에게 "환풍기는 무엇으로 돌아가지요? 스위치를 누르면 무엇이 튈 수 있었지요?"라고 되묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'dilemma', options: { scene: { text: '과학 시간, 실험 준비 중에 가스 냄새가 나요.', motif: 'cloud', choices: [
              { id: 'light', text: '전등을 켜서 살핀다', result: '스위치에서 작은 불꽃이 튈 수 있어요.', impact: [{ who: '반 친구들', text: '위험해요', tone: -1 }] },
              { id: 'tell', text: '선생님께 바로 알린다', result: '선생님이 실험을 멈추고 창문을 여셨어요.', ending: '바로 알려 선생님이 대처하셨어요.', next: { text: '나가려는데 친구가 "환풍기 켜자!"라며 스위치로 가요.', choices: [
                { id: 'stop', text: '"켜지 마!" 하고 말린다', result: '친구가 멈추고 함께 밖으로 나갔어요.', impact: [{ who: '반 친구들', text: '함께 안전해요', tone: 1 }], ending: '친구를 말려 불꽃이 생기지 않았어요.' },
                { id: 'help', text: '같이 켠다', result: '스위치를 누르는 순간 불꽃이 튈 수 있어요.', impact: [{ who: '반 친구들', text: '다칠 수 있어요', tone: -1 }] },
                { id: 'leave', text: '혼자 먼저 나간다', result: '친구가 스위치를 눌렀어요.', impact: [{ who: '친구', text: '위험해요', tone: -1 }] },
              ] } },
              { id: 'smell', text: '어디서 나는지 냄새를 맡는다', result: '가스를 더 많이 마셨어요.', impact: [{ who: '나', text: '어지러울 수 있어요', tone: -1 }] },
            ] } }, prompt: '과학실 장면에서 할 일을 골라요.', target: { path: [['tell', 'stop']] }, difficulty: 0.2,
              levels: {
                easy: { prompt: '과학실 장면에서 처음 할 일을 골라요.', toolOptions: { scene: { text: '과학 시간, 실험 준비 중에 가스 냄새가 나요.', motif: 'cloud', choices: [
                  { id: 'light', text: '전등을 켜서 살핀다', result: '스위치에서 작은 불꽃이 튈 수 있어요.', impact: [{ who: '반 친구들', text: '위험해요', tone: -1 }] },
                  { id: 'tell', text: '선생님께 바로 알린다', result: '선생님이 실험을 멈추고 창문을 여셨어요.', ending: '바로 알려 선생님이 대처하셨어요.' },
                ] } }, target: { path: [['tell']] } },
                challenge: { prompt: '과학실 장면에서 할 일을 고르고 근거도 골라요.', toolOptions: { reasons: [{ id: 'spark', text: '스위치에서 불꽃이 튈 수 있어서' }, { id: 'adult', text: '어른이 대처해야 해서' }, { id: 'smell', text: '냄새를 맡아 봐야 알아서', why: '냄새를 더 맡으면 가스를 마셔요. 바로 피하고 알려요.' }] }, target: { path: [['tell', 'stop']], reasons: ['spark', 'adult'] } },
              } },
            { type: 'choice', prompt: '가스 냄새가 날 때 환풍기는?', options: ['바로 켜요', '켜지 않아요', '세게 틀어요'], answer: 1, difficulty: 0.1, explain: '환풍기도 전기 스위치라 불꽃이 튈 수 있어요. 켜지 않고 창문을 열어요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '가스 냄새가 나면',
          items: [
            { type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '가스 냄새가 나면 불과 ___를 쓰지 않아요.', answer: '스위치' },
            { type: 'short', prompt: '친구가 스위치를 켜려 할 때 할 말을 한 줄로 써요.' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 4학년 · 대설·한파·낙뢰 (별표 2 초등 재난안전 3)
  // ======================================================================================================
  {
    const C = T('snow-thunder', 4);
    const TEMP = [['월', 5], ['화', 3], ['수', 1], ['목', 2], ['금', 4]];
    const COLD = { mode: 'parts', parts: ['귀', '목', '어깨', '손목', '배', '허리', '무릎', '발목'] };
    M.push(
      C({
        id: 'saf-disaster.e34.snow-thunder.intro.winter-scene', type: 'intro', title: '눈·천둥 날 위험한 행동',
        method: '눈·천둥 장면 고르기', tool: 'emotion', minutes: 6,
        levels: { easy: '교사가 천둥 장면 하나(나무 아래)만 함께 고른다.', base: '눈 장면과 천둥 장면에서 위험한 행동 4장을 고른다.', challenge: '4장을 고른 뒤 그 행동을 바르게 고쳐 짝에게 말한다.' },
        intro: {
          teacher: '"눈 온 날과 천둥 치는 날 그림이에요. 위험하게 행동하는 사람은 누구일까요?" 시연 단추로 나무 아래 비 피하기·빙판길 뛰기·얇게 입고 외출·주머니에 손 넣고 걷기가 바구니에 담기는 것을 보인다. "번개 칠 때는 큰 나무 밑이 비를 안 맞아서 좋아요"라는 말이 나오면 "번개는 높이 솟은 것에 잘 떨어져요. 큰 나무는 어떨까요?"라고 되묻는다.',
          student: '눈·천둥 그림에서 위험하게 행동하는 사람을 찾고, 바르게 고쳐 말해 보아요.',
          demo: { tool: 'emotion', options: { mode: 'pick', basket: '위험한 행동', cards: [{ id: 'tree', text: '번개 때 나무 아래' }, { id: 'inside', text: '건물 안으로' }, { id: 'run', text: '빙판길 뛰기' }, { id: 'glove', text: '장갑 끼기' }, { id: 'thin', text: '얇게 입고 외출' }, { id: 'pocket', text: '주머니 손 걷기' }], shuffle: false }, sequence: [{ pick: ['tree', 'run', 'thin', 'pocket'] }] },
          art: { draw: 'two paper panels: a snowy icy path with a paper child running, and a stormy paper playground with lightning above a big tree and a child walking into a building', banner: '눈 오고 번개 칠 때', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
      }),
      C({
        id: 'saf-disaster.e34.snow-thunder.intro.temp-chart', type: 'intro', title: '아침 기온 꺾은선 읽기',
        method: '기온 꺾은선 읽기(예시 자료)', tool: 'chart', minutes: 5,
        levels: { easy: '교사가 월·화·수 점 3개만 견주며 가장 낮은 점을 찾는다.', base: '점 5개를 모두 보고 가장 추운 날을 고른다.', challenge: '가장 추운 날 입을 옷과 챙길 것을 짝에게 말한다.' },
        intro: {
          teacher: '"이 그래프는 선생님이 만든 예시 자료예요. 실제로 잰 기온이 아니에요. 점이 아래에 있을수록 어떤 날일까요?" 점을 하나씩 짚으며 읽은 뒤 시연 단추로 가장 낮은 점이 골라지는 것을 보인다. "추워도 뛰면 따뜻하니까 얇게 입어요"라는 말이 나오면 "뛰다 멈추면 땀이 식어 더 추워져요. 어떻게 입으면 좋을까요?"라고 되묻는다.',
          student: '그래프에서 가장 추운 날을 찾고, 그날 어떻게 입을지 말해 보아요. 이 그래프는 예시 자료예요.',
          demo: { tool: 'chart', options: { type: 'line', mode: 'read', title: '한 주 아침 기온(예시 자료, 실제 통계 아님)', unit: '°C', xLabel: '요일', yLabel: '기온', data: TEMP, question: '가장 추운 날은?', choices: TEMP.map((x) => x[0]) }, sequence: [{ pick: 2 }] },
          art: { draw: 'a paper line graph board with five paper dots joined by a paper string, small paper snowflakes and a paper scarf beside it', banner: '가장 추운 날은?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
      }),
      C({
        id: 'saf-disaster.e34.snow-thunder.activity.lightning-fork', type: 'activity', title: '갈림길: 운동장에서 천둥이',
        method: '운동장 번개 갈림길', tool: 'dilemma', minutes: 10,
        levels: { easy: '갈림 1번, 보기 2개 가운데 고르고 결과를 본다.', base: '갈림 2번, 보기 3개씩 고르며 결과를 따라간다.', challenge: '갈림 2번을 지난 뒤 근거 카드 3장 가운데 알맞은 것을 고른다.' },
        activity: {
          title: '갈림길: 겨울과 번개 날', tool: 'dilemma',
          teacher: '"천둥소리가 들리면 번개가 가까이 있다는 뜻이에요. 어디로 갈까요?" 보기를 고를 때마다 결과를 소리 내어 읽고 짝과 이야기하게 한다. "나무 밑은 비를 안 맞아요"라는 학생에게 "번개는 높은 것에 잘 떨어져요. 넓은 운동장에서 가장 높은 것은 무엇일까요?"라고 묻는다. 눈길 장면에서는 보폭을 작게 하고 손은 주머니에서 빼는 것을 몸으로 따라 하게 한다.',
          task: '장면을 읽고 보기를 골라요. 결과를 보고 다음 장면에서 또 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL('운동장에서 놀다 천둥이 쳐요. 어디로 갈까요?', {
              text: '점심시간, 운동장에서 노는데 하늘이 어두워지고 천둥이 쳐요.', motif: 'cloud',
              choices: [
                { id: 'tree', text: '큰 나무 아래로 간다', result: '나무 꼭대기 쪽으로 번개가 칠 수 있어요.', impact: [{ who: '나', text: '번개에 다칠 수 있어요', tone: -1 }] },
                { id: 'inside', text: '건물 안으로 들어간다', result: '교실로 들어가 비와 번개를 피했어요.', ending: '천둥이 치자 건물 안으로 들어가 안전했어요.', next: {
                  text: '교실에서 친구가 "창문 열고 번개 보자"라고 해요.', choices: [
                    { id: 'away', text: '"창문에서 떨어져 있자" 말한다', result: '친구와 교실 안쪽에 앉아 기다렸어요.', impact: [{ who: '친구와 나', text: '함께 안전해요', tone: 1 }], ending: '건물 안에서도 창문에서 떨어져 기다렸어요.' },
                    { id: 'out', text: '운동장에 다시 나간다', result: '천둥이 다시 크게 쳤어요.', impact: [{ who: '친구와 나', text: '위험해요', tone: -1 }] },
                    { id: 'open', text: '창문을 열고 본다', result: '비바람이 들이쳤어요.', impact: [{ who: '친구와 나', text: '다칠 수 있어요', tone: -1 }] },
                  ] } },
                { id: 'bar', text: '철봉을 잡고 기다린다', result: '쇠로 된 철봉 옆은 위험해요.', impact: [{ who: '나', text: '번개에 다칠 수 있어요', tone: -1 }] },
              ] }, [['inside', 'away']],
            [{ id: 'high', text: '번개는 높은 것에 잘 떨어져서' }, { id: 'in', text: '건물 안이 번개를 막아 줘서' }, { id: 'rain', text: '나무가 비를 막아 줘서', why: '나무는 비를 막아도 번개를 부를 수 있어요.' }], ['high', 'in'], 0.2),
            DIL('눈이 얼어 빙판이 된 등굣길이에요.', {
              text: '밤새 눈이 와 아침 등굣길이 꽁꽁 얼었어요. 지각할까 걱정돼요.', motif: 'star',
              choices: [
                { id: 'run', text: '늦을까 봐 뛴다', result: '빙판에서 미끄러져 넘어질 뻔했어요.', impact: [{ who: '나', text: '다칠 수 있어요', tone: -1 }] },
                { id: 'slow', text: '보폭 작게 천천히 걷는다', result: '조금 늦었지만 넘어지지 않았어요.', ending: '빙판에서 천천히 걸어 넘어지지 않았어요.', next: {
                  text: '손이 시려 주머니에 넣고 싶어요.', choices: [
                    { id: 'glove', text: '장갑 끼고 손은 밖에', result: '넘어질 뻔할 때 손으로 짚을 수 있었어요.', impact: [{ who: '나', text: '안전해요', tone: 1 }], ending: '장갑을 끼고 손을 빼고 걸어 안전했어요.' },
                    { id: 'pocket', text: '주머니에 손 넣는다', result: '미끄러지면 손으로 못 짚어요.', impact: [{ who: '나', text: '크게 넘어질 수 있어요', tone: -1 }] },
                    { id: 'slide', text: '미끄럼 타며 간다', result: '친구와 부딪힐 뻔했어요.', impact: [{ who: '친구와 나', text: '다칠 수 있어요', tone: -1 }] },
                  ] } },
                { id: 'phone', text: '휴대폰 보며 걷는다', result: '얼음을 못 보고 미끄러졌어요.', impact: [{ who: '나', text: '다칠 수 있어요', tone: -1 }] },
              ] }, [['slow', 'glove']],
            [{ id: 'slip', text: '빙판은 뛰면 미끄러져서' }, { id: 'hand', text: '손을 빼야 짚을 수 있어서' }, { id: 'late', text: '지각하면 안 되니까', why: '늦는 것보다 다치지 않는 것이 먼저예요.' }], ['slip', 'hand'], 0.25),
            DIL('아주 추운 아침이에요. 어떻게 입을까요?', {
              text: '한파 소식이 있는 아침, 체험 학습을 가요.', motif: 'sun',
              choices: [
                { id: 'thin', text: '두꺼운 옷 한 벌만 입는다', result: '버스에서 덥고 밖에서는 춥기도 했어요.', impact: [{ who: '나', text: '감기에 걸릴 수 있어요', tone: -1 }] },
                { id: 'layer', text: '얇은 옷을 여러 겹 입는다', result: '더우면 벗고 추우면 입을 수 있었어요.', ending: '여러 겹 입어 추위를 막았어요.', next: {
                  text: '밖에서 오래 있었더니 귀가 아플 만큼 차가워요.', choices: [
                    { id: 'warm', text: '따뜻한 곳에 들어간다', result: '귀가 천천히 따뜻해졌어요.', impact: [{ who: '나', text: '안전해요', tone: 1 }], ending: '차가워지자 따뜻한 곳으로 들어가 몸을 지켰어요.' },
                    { id: 'more', text: '조금 더 논다', result: '귀가 더 아파졌어요.', impact: [{ who: '나', text: '동상에 걸릴 수 있어요', tone: -1 }] },
                    { id: 'snow', text: '눈으로 문지른다', result: '귀가 더 차가워졌어요.', impact: [{ who: '나', text: '더 다칠 수 있어요', tone: -1 }] },
                  ] } },
                { id: 'none', text: '뛰면 되니 그냥 나간다', result: '뛰다 멈추자 땀이 식어 더 추웠어요.', impact: [{ who: '나', text: '감기에 걸릴 수 있어요', tone: -1 }] },
              ] }, [['layer', 'warm']],
            [{ id: 'air', text: '겹 사이 공기가 몸을 덮혀서' }, { id: 'early', text: '차가워지면 바로 덥혀야 해서' }, { id: 'run', text: '뛰면 추위를 이겨서', why: '뛰다 멈추면 땀이 식어 더 추워져요.' }], ['air', 'early'], 0.3, { conclude: '천둥이 치면 건물 안으로, 빙판은 천천히, 한파에는 여러 겹 입고 몸을 감싸요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '천둥·번개가 칠 때 갈 곳은?', options: ['큰 나무 아래', '건물 안', '철봉 옆'], answer: '건물 안' }] },
      }),
      C({
        id: 'saf-disaster.e34.snow-thunder.activity.cold-parts', type: 'activity', title: '한파에 감쌀 몸 부위',
        method: '한파에 감쌀 곳 고르기', tool: 'body', minutes: 8,
        levels: { easy: '고른 부위 이름이 바로 보이고, 첫 문항은 두 곳(귀·목)만 고른다.', base: '이름 없이 네 곳(귀·목·손목·발목)을 고르고 물건마다 감쌀 곳을 고른다.', challenge: '둘째 문항에서 감쌀 물건도 보기에서 짝지어 고른다.' },
        activity: {
          title: '감쌀 곳 고르기', tool: 'body',
          teacher: '"아주 추운 날 밖에 나가면 몸의 어디가 가장 먼저 시릴까요?" 부위를 고른 뒤 자기 몸에서 그곳을 감싸 보게 한다. 배만 고르는 학생에게 "옷으로 덮이지 않고 밖으로 나와 있는 곳은 어디일까요?"라고 묻는다. 종이 몸에 손·발 칸이 없어 손목·발목으로 고르고, 장갑·양말로 손과 발까지 감싼다고 덧붙인다.',
          task: '종이 몸에서 한파 때 감쌀 곳을 눌러 골라요.', levels: { easy: { names: true }, base: {}, challenge: {} },
          items: [
            { prompt: '한파 때 꼭 감쌀 곳 네 군데를 골라요.', toolOptions: COLD, target: { parts: ['귀', '목', '손목', '발목'] }, difficulty: 0.15,
              levels: { easy: { prompt: '한파 때 머리 쪽에서 감쌀 곳 두 군데를 골라요.', target: { parts: ['귀', '목'] } } } },
            { prompt: '귀마개나 모자로 지킬 곳을 골라요.', toolOptions: COLD, target: { parts: ['귀'] }, difficulty: 0.2,
              levels: { challenge: { prompt: '귀마개로 지킬 곳을 고르고, 알맞은 물건도 골라요.', toolOptions: { ask: { q: '귀를 지킬 물건은?', choices: ['귀마개', '선글라스', '반바지'] } }, target: { parts: ['귀'], pick: 0 } } } },
            { prompt: '목도리와 장갑으로 감쌀 곳 두 군데를 골라요.', toolOptions: COLD, target: { parts: ['목', '손목'] }, difficulty: 0.25, conclude: '한파에는 밖으로 나온 귀·목·손목·발목을 감싸요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '감쌀 곳에 맞는 물건을 써요.', columns: ['감쌀 곳', '물건'], cells: [['귀', ''], ['목', ''], ['손', '']], answer: '귀마개(모자), 목도리, 장갑' }] },
        notes: '종이 몸에 손·발·머리 칸이 없다. 손목·발목·귀로 고르고 장갑·양말·모자는 말로 잇는다.',
      }),
      C({
        id: 'saf-disaster.e34.snow-thunder.wrap.action-web', type: 'wrap', title: '날씨별 행동 정리',
        method: '날씨별 행동 정리', tool: 'mindmap', minutes: 7,
        levels: { easy: '가지 2개(한파·낙뢰)에 카드 4장을 나눈다.', base: '가지 3개(대설·한파·낙뢰)에 카드 6장을 나눈다.', challenge: '카드 8장을 세 가지에 나누고, 출구 2번에서 가족에게 알릴 것을 고른다.' },
        wrap: {
          teacher: '"오늘 배운 행동을 날씨마다 모아 볼까요?" 가지마다 카드를 붙인 뒤 "눈 오면 ○○, 추우면 ○○, 번개 치면 ○○"로 한 목소리로 읽는다. 장갑 카드를 낙뢰에 놓는 학생에게 "장갑은 번개를 막아 줄까요, 추위를 막아 줄까요?"라고 되묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', options: { topic: '겨울·번개', slots: ['대설', '한파', '낙뢰'], cards: ['보폭 작게 걷기', '여러 겹 입기', '건물 안으로', '장갑 끼고 걷기', '귀·목 감싸기', '나무 아래 피하기'] }, prompt: '행동 카드를 날씨 가지에 나누어요.', target: { sort: { 대설: ['보폭 작게 걷기', '장갑 끼고 걷기'], 한파: ['여러 겹 입기', '귀·목 감싸기'], 낙뢰: ['건물 안으로', '나무 아래 피하기'] } }, difficulty: 0.15,
              levels: {
                easy: { prompt: '행동 카드 4장을 한파와 낙뢰로 나누어요.', toolOptions: { slots: ['한파', '낙뢰'], cards: ['여러 겹 입기', '건물 안으로', '귀·목 감싸기', '나무 아래 피하기'] }, target: { sort: { 한파: ['여러 겹 입기', '귀·목 감싸기'], 낙뢰: ['건물 안으로', '나무 아래 피하기'] } } },
                challenge: { prompt: '행동 카드 8장을 날씨 가지에 나누어요.', toolOptions: { cards: ['보폭 작게 걷기', '여러 겹 입기', '건물 안으로', '장갑 끼고 걷기', '귀·목 감싸기', '나무 아래 피하기', '빙판 피해 돌기', '창문에서 떨어지기'] }, target: { sort: { 대설: ['보폭 작게 걷기', '장갑 끼고 걷기', '빙판 피해 돌기'], 한파: ['여러 겹 입기', '귀·목 감싸기'], 낙뢰: ['건물 안으로', '나무 아래 피하기', '창문에서 떨어지기'] } } },
              } },
            { type: 'choice', prompt: '가족에게 알릴 번개 날 행동은?', options: ['나무 아래로 가요', '건물 안으로 가요', '우산 들고 뛰어요'], answer: 1, difficulty: 0.1, explain: '천둥·번개가 치면 건물 안으로 들어가요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '날씨마다 지킬 일',
          items: [
            { type: 'table', prompt: '날씨에 맞는 행동을 써요.', columns: ['날씨', '행동'], cells: [['대설', ''], ['한파', ''], ['낙뢰', '']], answer: '보폭 작게 천천히 / 여러 겹·감싸기 / 건물 안으로' },
            { type: 'draw', prompt: '빙판길을 안전하게 걷는 내 모습을 그려요.' },
          ],
        },
      }),
      C({
        id: 'saf-disaster.e34.snow-thunder.wrap.outing-check', type: 'wrap', title: '겨울 외출 준비 점검',
        method: '겨울 외출 준비 점검', tool: 'kitchen', minutes: 7,
        levels: { easy: '점검 칸 3개 가운데 챙길 것만 표시한다.', base: '점검 칸 5개 가운데 챙길 것만 표시한다.', challenge: '칸 5개를 표시한 뒤 출구 2번에서 빠뜨리기 쉬운 것을 고른다.' },
        wrap: {
          teacher: '"눈 오고 추운 날 밖에 나가기 전에 무엇을 챙길까요?" 칸을 하나씩 소리 내어 읽고 챙길 것에만 표시하게 한다. 슬리퍼를 누르는 학생에게 "눈길에서 슬리퍼를 신으면 발은 어떻게 될까요? 미끄러지지 않을까요?"라고 묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title: '겨울 외출 준비', items: [{ id: 'glove', text: '장갑' }, { id: 'scarf', text: '목도리' }, { id: 'slipper', text: '슬리퍼' }, { id: 'shoes', text: '안 미끄러운 신발' }, { id: 'hat', text: '모자' }] }, prompt: '겨울 외출에 챙길 것만 표시해요.', target: { checklist: ['glove', 'scarf', 'shoes', 'hat'] }, difficulty: 0.15,
              levels: { easy: { prompt: '겨울 외출에 챙길 것만 표시해요(3칸).', toolOptions: { items: [{ id: 'glove', text: '장갑' }, { id: 'slipper', text: '슬리퍼' }, { id: 'shoes', text: '안 미끄러운 신발' }] }, target: { checklist: ['glove', 'shoes'] } } } },
            { type: 'choice', prompt: '겨울 외출 때 빠뜨리기 쉬운 것은?', options: ['귀 감쌀 모자', '두꺼운 외투', '책가방'], answer: 0, difficulty: 0.15, explain: '귀는 밖으로 나와 있어 차가워지기 쉬워요. 모자나 귀마개로 감싸요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '겨울 외출 준비',
          items: [
            { type: 'check', prompt: '내일 챙길 것에 표시해요.', options: ['장갑', '목도리', '안 미끄러운 신발'] },
            { type: 'short', prompt: '눈 오는 날 등굣길에서 지킬 일을 한 줄로 써요.' },
          ],
          easy: { note: '"감싸고, 미끄럽지 않게"를 떠올려요.', items: [{ type: 'choice', prompt: '눈길에 신을 것은?', options: ['안 미끄러운 신발', '슬리퍼'], answer: '안 미끄러운 신발' }] },
        },
      }),
    );
  }

  // ======================================================================================================
  // 4학년 · 장소별 화상 예방(부엌·목욕) (별표 2 초등 재난안전 2)
  // ======================================================================================================
  {
    const C = T('burn-scene', 4);
    const HOUSE = {
      title: '우리 집', grid: [6, 4],
      regions: [
        { name: '부엌', cells: [[0, 0], [1, 0], [0, 1], [1, 1]] }, { name: '거실', cells: [[2, 0], [3, 0], [2, 1], [3, 1]] }, { name: '베란다', cells: [[4, 0], [5, 0]] },
        { name: '내 방', cells: [[4, 1], [5, 1], [4, 2], [5, 2]] }, { name: '욕실', cells: [[0, 2], [1, 2], [0, 3], [1, 3]] },
        { name: '현관', cells: [[2, 3], [3, 3]] }, { name: '복도', cells: [[2, 2], [3, 2], [4, 3], [5, 3]] },
      ],
    };
    M.push(
      C({
        id: 'saf-disaster.e34.burn-scene.intro.home-story', type: 'intro', title: '저녁 준비와 목욕 시간',
        method: '부엌·욕실 이야기 듣기', tool: 'story', minutes: 6,
        levels: { easy: '교사가 위험한 순간 카드 2장만 가리키며 함께 고른다.', base: '카드 5장 가운데 위험한 순간 3장을 스스로 고른다.', challenge: '3장을 고른 뒤 그 순간을 막는 방법을 짝에게 말한다.' },
        intro: {
          teacher: '"윤이네 저녁 시간 이야기예요. 데일 뻔한 순간이 언제였는지 잘 들어 봐요." 이야기를 들려준 뒤(냄비 손잡이가 식탁 밖으로 나와 있었고, 뜨거운 차가 식탁 끝에 있었고, 동생이 물 온도를 보지 않고 욕조에 들어가려 했다) 시연 단추로 세 순간이 바구니에 담기는 것을 보인다. "데었을 때만 조심하면 돼요"라는 말이 나오면 "데기 전에 막을 수 있는 순간이 있었을까요?"라고 되묻는다.',
          student: '이야기를 듣고 데일 뻔한 순간을 고른 뒤, 그 순간을 어떻게 막을지 말해 보아요.',
          demo: { tool: 'story', options: { mode: 'pick', basket: '위험한 순간', cards: [{ id: 'handle', text: '냄비 손잡이 바깥' }, { id: 'fridge', text: '냉장고 문 열기' }, { id: 'cup', text: '식탁 끝 뜨거운 차' }, { id: 'book', text: '거실에서 책 읽기' }, { id: 'bath', text: '온도 안 보고 입욕' }], shuffle: false }, sequence: [{ pick: ['handle', 'cup', 'bath'] }] },
          art: { draw: 'a paper home cut in half showing a kitchen with a pot handle sticking out over the stove edge and a bathroom with a steaming paper bathtub, a paper child pausing to check', banner: '데기 전에 막아요', extra: [{ motif: 'house', x: 300, y: 96 }] },
        },
        notes: '이야기는 지어낸 것이다(가명). 학생이 데었던 일을 묻지 않는다.',
      }),
      C({
        id: 'saf-disaster.e34.burn-scene.intro.home-map', type: 'intro', title: '집 지도에서 데기 쉬운 곳',
        method: '집 칸 지도에서 데기 쉬운 곳 핀', tool: 'map', minutes: 5,
        levels: { easy: '교사가 부엌 한 곳에 핀을 꽂는 것을 함께 본다.', base: '부엌과 욕실에 핀이 차례로 꽂히는 것을 보고 그곳의 뜨거운 것을 말한다.', challenge: '두 곳을 보고 그밖에 거실·베란다에서 뜨거운 것(다리미·전기난로)을 찾아 말한다.' },
        intro: {
          teacher: '"우리 집에서 뜨거운 것이 가장 많은 곳은 어디일까요?" 시연 단추로 부엌과 욕실에 핀이 꽂히는 것을 보이고, 곳마다 뜨거운 것을 말하게 한다(기다릴 반응: "냄비요", "뜨거운 물이요", "전기밥솥 김이요"). "욕실은 물이라 안 뜨거워요"라는 말이 나오면 "뜨거운 물이 나오는 꼭지를 틀면 어떻게 될까요?"라고 되묻는다.',
          student: '집 지도에서 데기 쉬운 곳을 찾고, 그곳에 있는 뜨거운 것을 말해 보아요.',
          demo: { tool: 'map', options: HOUSE, sequence: [{ pin: [0, 0] }, { pin: [0, 2] }] },
          art: { draw: 'a paper cut house floor map with a kitchen with a paper stove and a bathroom with a paper bathtub, small paper pins standing on both', banner: '뜨거운 것은 어디에?', extra: [{ motif: 'leaf', x: 300, y: 222 }] },
        },
      }),
      C({
        id: 'saf-disaster.e34.burn-scene.activity.safety-check', type: 'activity', title: '요리 곁·목욕 전 안전 점검',
        method: '요리 곁·목욕 전 안전 점검', tool: 'kitchen', minutes: 10,
        levels: { easy: '점검 칸 3개 가운데 할 일만 표시한다.', base: '함정이 섞인 칸 5개 가운데 할 일만 표시한다.', challenge: '칸 2개가 더해진 7칸에서 고른 뒤, 어른과 함께 할 항목을 짝에게 말한다.' },
        activity: {
          title: '할 일만 표시하는 점검표', tool: 'kitchen',
          teacher: '"요리하는 어른 곁에서, 목욕하기 전에 무엇을 살필까요?" 칸을 하나씩 소리 내어 읽고 할 일에만 표시하게 한다. "끓는 물은 내가 부어도 돼요"를 누르는 학생에게 "끓는 냄비를 들다 쏟으면 누가 데게 될까요? 누가 하기로 할까요?"라고 묻는다. 다 하면 표시한 칸 가운데 어른과 함께 할 것을 짝과 고른다.',
          task: '점검표에서 화상을 막는 할 일만 골라 표시해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            CHK('요리하는 곁에서 할 일만 표시해요.', '요리하는 곁에서', [{ id: 'away', text: '가스레인지서 떨어지기', ok: true }, { id: 'run', text: '부엌에서 뛰기', ok: false }, { id: 'handle', text: '손잡이 안쪽인지 보기', ok: true }, { id: 'call', text: '끓으면 어른 부르기', ok: true }, { id: 'pour', text: '끓는 물 혼자 붓기', ok: false }], [0, 1, 2], [{ id: 'sleeve', text: '긴 소매 걷기', ok: true }, { id: 'reach', text: '냄비 위로 팔 뻗기', ok: false }], 0.15),
            CHK('목욕하기 전에 할 일만 표시해요.', '목욕하기 전', [{ id: 'check', text: '어른과 물 온도 보기', ok: true }, { id: 'jump', text: '바로 뛰어들기', ok: false }, { id: 'cold', text: '찬물 먼저 틀기', ok: true }, { id: 'tap', text: '뜨거운 꼭지 장난', ok: false }, { id: 'sib', text: '동생은 어른과 함께', ok: true }], [0, 1, 2], [{ id: 'slow', text: '발부터 천천히', ok: true }, { id: 'alone', text: '동생 혼자 두기', ok: false }], 0.2),
            CHK('뜨거운 음료를 둘 때 할 일만 표시해요.', '뜨거운 음료', [{ id: 'center', text: '식탁 가운데 두기', ok: true }, { id: 'edge', text: '식탁 끝에 두기', ok: false }, { id: 'cloth', text: '식탁보 안 당기기', ok: true }, { id: 'carry', text: '들고 뛰지 않기', ok: true }, { id: 'baby', text: '동생 곁에 두기', ok: false }], [0, 1, 2], [{ id: 'cool', text: '식은 뒤 마시기', ok: true }, { id: 'pass', text: '머리 위로 건네기', ok: false }], 0.25, { conclude: '데기 전에 막아요. 손잡이는 안쪽, 뜨거운 것은 가운데, 물 온도는 어른과 먼저 봐요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '할 일이면 ○, 하지 말 일이면 ×를 써요.', columns: ['행동', '○ / ×'], cells: [['식탁 가운데 두기', ''], ['바로 뛰어들기', ''], ['찬물 먼저 틀기', ''], ['끓는 물 혼자 붓기', '']], answer: '○, ×, ○, ×' }] },
      }),
      C({
        id: 'saf-disaster.e34.burn-scene.activity.pot-fork', type: 'activity', title: '갈림길: 동생이 냄비 쪽으로',
        method: '끓는 냄비 곁 동생 갈림길', tool: 'dilemma', minutes: 8,
        levels: { easy: '갈림 1번, 보기 2개 가운데 고르고 결과를 본다.', base: '갈림 2번, 보기 3개씩 고르며 결과를 따라간다.', challenge: '갈림 2번을 지난 뒤 근거 카드 3장 가운데 알맞은 것을 고른다.' },
        activity: {
          title: '갈림길: 부엌과 욕실에서', tool: 'dilemma',
          teacher: '"동생이 끓는 냄비 쪽으로 손을 뻗어요. 내가 냄비를 옮기면 될까요?" 보기를 고를 때마다 결과를 소리 내어 읽고 짝과 이야기하게 한다. 냄비를 직접 옮기겠다는 학생에게 "끓는 냄비는 무겁고 뜨거워요. 옮기다 쏟으면 누가 데게 될까요?"라고 묻는다. 동생을 뜨거운 곳에서 떼어 놓고 어른을 부르는 것이 내가 할 일이라는 것을 짚는다.',
          task: '장면을 읽고 보기를 골라요. 결과를 보고 다음 장면에서 또 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL('동생이 끓는 냄비 쪽으로 손을 뻗어요.', {
              text: '어른이 잠깐 전화를 받는 사이, 동생이 끓는 냄비 쪽으로 손을 뻗어요.', motif: 'house',
              choices: [
                { id: 'move', text: '내가 냄비를 옮긴다', result: '무거운 냄비가 기울어 물이 넘칠 뻔했어요.', impact: [{ who: '나와 동생', text: '델 수 있어요', tone: -1 }] },
                { id: 'stop', text: '동생을 막고 어른을 부른다', result: '동생을 안아 뒤로 물러나며 어른을 불렀어요.', ending: '동생을 떼어 놓고 어른을 불러 아무도 데지 않았어요.', next: {
                  text: '어른이 오실 때까지 동생이 자꾸 부엌으로 가려 해요.', choices: [
                    { id: 'play', text: '부엌 밖에서 같이 논다', result: '동생이 거실에서 블록을 쌓았어요.', impact: [{ who: '동생', text: '안전해요', tone: 1 }], ending: '동생을 뜨거운 곳에서 멀리 두었어요.' },
                    { id: 'lift', text: '냄비 뚜껑을 열어 본다', result: '뜨거운 김이 확 올라왔어요.', impact: [{ who: '나', text: '델 수 있어요', tone: -1 }] },
                    { id: 'leave', text: '동생 혼자 두고 간다', result: '동생이 다시 냄비 쪽으로 갔어요.', impact: [{ who: '동생', text: '델 수 있어요', tone: -1 }] },
                  ] } },
                { id: 'watch', text: '그냥 지켜본다', result: '동생 손이 냄비에 닿을 뻔했어요.', impact: [{ who: '동생', text: '델 수 있어요', tone: -1 }] },
              ] }, [['stop', 'play']],
            [{ id: 'far', text: '뜨거운 것에서 멀리 둬야 해서' }, { id: 'adult', text: '끓는 냄비는 어른이 다뤄서' }, { id: 'brave', text: '내가 옮기면 빨라서', why: '뜨거운 냄비를 옮기다 쏟으면 더 크게 데요.' }], ['far', 'adult'], 0.2),
            DIL('컵라면에 끓는 물을 붓고 싶어요.', {
              text: '배가 고파 컵라면을 먹으려는데, 전기 주전자 물이 막 끓었어요.', motif: 'cloud',
              choices: [
                { id: 'self', text: '혼자 끓는 물을 붓는다', result: '주전자가 기울어 물이 손에 튈 뻔했어요.', impact: [{ who: '나', text: '델 수 있어요', tone: -1 }] },
                { id: 'ask', text: '어른께 부어 달라고 한다', result: '어른이 천천히 물을 부어 주셨어요.', ending: '끓는 물은 어른께 부탁해 데지 않았어요.', next: {
                  text: '물을 부은 컵라면을 어디에 둘까요?', choices: [
                    { id: 'middle', text: '식탁 가운데에 둔다', result: '팔이 닿아도 떨어지지 않았어요.', impact: [{ who: '가족', text: '안전해요', tone: 1 }], ending: '뜨거운 컵을 식탁 가운데에 두어 쏟지 않았어요.' },
                    { id: 'edge', text: '식탁 끝에 둔다', result: '지나가다 팔에 걸려 쏟을 뻔했어요.', impact: [{ who: '가족', text: '델 수 있어요', tone: -1 }] },
                    { id: 'floor', text: '바닥에 놓고 먹는다', result: '동생이 걷다 걸려 넘어질 뻔했어요.', impact: [{ who: '동생', text: '델 수 있어요', tone: -1 }] },
                  ] } },
                { id: 'hold', text: '컵을 손에 들고 붓는다', result: '컵이 뜨거워져 놓칠 뻔했어요.', impact: [{ who: '나', text: '델 수 있어요', tone: -1 }] },
              ] }, [['ask', 'middle']],
            [{ id: 'adult', text: '끓는 물은 어른이 부어서' }, { id: 'center', text: '가운데 두면 쏟지 않아서' }, { id: 'hungry', text: '배고프면 빨리 해야 해서', why: '서두르다 데면 더 오래 아파요.' }], ['adult', 'center'], 0.25),
            DIL('동생과 목욕하려는데 물이 뜨거워 보여요.', {
              text: '욕조에 물을 받았는데 김이 많이 나요. 동생이 먼저 들어가려 해요.', motif: 'sun',
              choices: [
                { id: 'go', text: '같이 바로 들어간다', result: '물이 너무 뜨거워 깜짝 놀랐어요.', impact: [{ who: '동생과 나', text: '델 수 있어요', tone: -1 }] },
                { id: 'wait', text: '"잠깐! 온도 먼저" 말한다', result: '동생이 멈추고 기다렸어요.', ending: '들어가기 전에 멈춰 데지 않았어요.', next: {
                  text: '물 온도를 어떻게 확인할까요?', choices: [
                    { id: 'adult', text: '어른과 함께 확인한다', result: '어른이 찬물을 섞어 알맞게 맞추셨어요.', impact: [{ who: '동생', text: '안전해요', tone: 1 }], ending: '어른과 온도를 맞춰 안전하게 목욕했어요.' },
                    { id: 'hot', text: '뜨거운 물을 더 튼다', result: '김이 더 많이 났어요.', impact: [{ who: '동생과 나', text: '델 수 있어요', tone: -1 }] },
                    { id: 'foot', text: '동생 발을 먼저 넣어 본다', result: '동생이 뜨겁다며 울었어요.', impact: [{ who: '동생', text: '데었어요', tone: -1 }] },
                  ] } },
                { id: 'let', text: '동생만 먼저 들어가게 둔다', result: '동생이 뜨겁다며 소리쳤어요.', impact: [{ who: '동생', text: '델 수 있어요', tone: -1 }] },
              ] }, [['wait', 'adult']],
            [{ id: 'check', text: '들어가기 전 온도를 봐야 해서' }, { id: 'sib', text: '어린 동생은 더 쉽게 데어서' }, { id: 'fun', text: '뜨거운 물이 더 재밌어서', why: '뜨거운 물은 금방 델 수 있어요.' }], ['check', 'sib'], 0.3, { conclude: '뜨거운 것은 어른이 다루고, 동생은 뜨거운 곳에서 멀리, 물 온도는 들어가기 전에 확인해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '동생이 끓는 냄비 쪽으로 가면?', options: ['내가 냄비를 옮겨요', '동생을 막고 어른을 불러요', '그냥 둬요'], answer: '동생을 막고 어른을 불러요' }] },
      }),
      C({
        id: 'saf-disaster.e34.burn-scene.wrap.place-web', type: 'wrap', title: '장소별 화상 예방 약속',
        method: '장소별 약속 정리', tool: 'mindmap', minutes: 7,
        levels: { easy: '가지마다 카드 1장씩(2장)을 붙인다.', base: '가지마다 카드 2장씩(4장)을 붙인다.', challenge: '거실 가지가 더해진 3가지에 카드 6장을 붙인다.' },
        wrap: {
          teacher: '"오늘 정한 약속을 부엌과 욕실로 나누어 볼까요?" 카드를 붙이고 나면 집에 가서 가족에게 하나씩 알려 주자고 말한다. "동생은 어른과" 카드를 부엌에 놓는 학생에게 "그 약속도 맞아요. 오늘은 목욕할 때 이야기했지요?"라고 말해 준다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', options: { topic: '화상 예방', slots: ['부엌', '욕실'], cards: ['손잡이 안쪽으로', '물 온도 먼저', '뜨거운 컵 가운데', '동생은 어른과'] }, prompt: '약속 카드를 부엌과 욕실로 나누어요.', target: { sort: { 부엌: ['손잡이 안쪽으로', '뜨거운 컵 가운데'], 욕실: ['물 온도 먼저', '동생은 어른과'] } }, difficulty: 0.15,
              levels: {
                easy: { prompt: '약속 카드 2장을 부엌과 욕실로 나누어요.', toolOptions: { cards: ['손잡이 안쪽으로', '물 온도 먼저'] }, target: { sort: { 부엌: ['손잡이 안쪽으로'], 욕실: ['물 온도 먼저'] } } },
                challenge: { prompt: '약속 카드 6장을 부엌·욕실·거실로 나누어요.', toolOptions: { slots: ['부엌', '욕실', '거실'], cards: ['손잡이 안쪽으로', '물 온도 먼저', '전기난로 멀리', '뜨거운 컵 가운데', '동생은 어른과', '다리미 손 안 대기'] }, target: { sort: { 부엌: ['손잡이 안쪽으로', '뜨거운 컵 가운데'], 욕실: ['물 온도 먼저', '동생은 어른과'], 거실: ['전기난로 멀리', '다리미 손 안 대기'] } } },
              } },
            { type: 'choice', prompt: '냄비 손잡이는 어느 쪽으로?', options: ['식탁 밖으로', '안쪽으로', '동생 쪽으로'], answer: 1, difficulty: 0.1, explain: '손잡이가 밖으로 나오면 걸려 쏟아요. 안쪽으로 돌려 둬요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '우리 집 화상 예방 약속',
          items: [
            { type: 'table', prompt: '장소에 맞는 약속을 써요.', columns: ['부엌', '욕실'], cells: [['', ''], ['', '']], answer: '예) 손잡이 안쪽·컵은 가운데 / 물 온도 먼저·동생은 어른과' },
            { type: 'short', prompt: '가족에게 알려 줄 약속을 한 줄로 써요.' },
          ],
        },
      }),
      C({
        id: 'saf-disaster.e34.burn-scene.wrap.cool-review', type: 'wrap', title: '데었을 때 차례 다시 놓기',
        method: '데었을 때 차례 다시 놓기', tool: 'timeline', minutes: 7,
        levels: { easy: '카드 2장(떨어지기·식히기)을 차례로 놓는다.', base: '카드 3장(떨어지기·식히기·알리기)을 차례로 놓는다.', challenge: '하지 말 일 카드 1장이 섞인 4장에서 그것을 빼고 3장을 놓는다.' },
        wrap: {
          teacher: '"조심해도 데는 일이 생길 수 있어요. 그때 할 일을 3학년 때 배웠지요?" 카드를 놓은 뒤 몸짓으로 차례를 따라 한다. 민간요법 카드를 놓는 학생에게 "된장이나 치약을 바르면 상처가 어떻게 될까요? 무엇으로 식혔지요?"라고 되묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'timeline', options: { mode: 'order', slots: ['처음', '다음', '끝'], cards: [{ id: 'tell', text: '어른께 알리기' }, { id: 'away', text: '뜨거운 것서 떨어지기' }, { id: 'cool', text: '흐르는 물로 식히기' }] }, prompt: '데었을 때 할 일 카드를 차례로 놓아요.', target: { order: ['away', 'cool', 'tell'] }, difficulty: 0.15,
              levels: {
                easy: { prompt: '데었을 때 할 일 카드 2장을 차례로 놓아요.', toolOptions: { slots: ['먼저', '나중'], cards: [{ id: 'cool', text: '흐르는 물로 식히기' }, { id: 'away', text: '뜨거운 것서 떨어지기' }] }, target: { order: ['away', 'cool'] } },
                challenge: { prompt: '데었을 때 할 일을 차례로 놓아요. 틀린 카드 한 장은 빼요.', toolOptions: { cards: [{ id: 'cool', text: '흐르는 물로 식히기' }, { id: 'folk', text: '민간요법 바르기', why: '민간요법은 상처를 더럽혀요. 흐르는 물로 식혀요.' }, { id: 'tell', text: '어른께 알리기' }, { id: 'away', text: '뜨거운 것서 떨어지기' }] }, target: { order: ['away', 'cool', 'tell'] } },
              } },
            { type: 'choice', prompt: '데인 곳에 물집이 생기면?', options: ['터뜨려요', '그대로 두고 알려요', '치약을 발라요'], answer: 1, difficulty: 0.1, explain: '물집을 터뜨리면 세균이 들어가요. 그대로 두고 어른께 보여요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '예방하고, 데면 식혀요',
          items: [
            { type: 'table', prompt: '데었을 때 차례에 번호를 써요.', columns: ['할 일', '차례'], cells: [['어른께 알리기', ''], ['뜨거운 것에서 떨어지기', ''], ['흐르는 물로 식히기', '']], answer: '3, 1, 2' },
            { type: 'short', prompt: '데었을 때 하지 말 일 하나를 써요.' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 주제마다 하나씩 — 분류판(sortboard 글 카드 모드) 활동
  // ======================================================================================================
  // 나누기(sortboard): groups = 칸마다 카드 글. 쉬움 = ez 칸(번호)마다 앞 n장, 도전 = 칸마다 hard 카드를 more 로 더한다
  const BOX = (prompt, slots, groups, ez, hard, d, more) => {
    const mix = (gs) => { const out = []; const n = Math.max(...gs.map((g) => g.length)); for (let i = 0; i < n; i++) for (const g of gs) if (g[i] != null) out.push(g[i]); return out; };
    const tg = (sl, gs) => ({ sort: Object.fromEntries(sl.map((s, i) => [s, gs[i]])) });
    const eSlots = ez.map(([i]) => slots[i]); const eGroups = ez.map(([i, n]) => groups[i].slice(0, n));
    const hGroups = groups.map((g, i) => g.concat(hard[i] || []));
    const p = strip(prompt);
    const count = (gs) => gs.reduce((a, g) => a + g.length, 0);
    return {
      prompt, toolOptions: { slots, cards: mix(groups) }, target: tg(slots, groups), difficulty: d,
      levels: {
        easy: { prompt: `${p}(${count(eGroups)}장).`, toolOptions: { slots: eSlots, cards: mix(eGroups) }, target: tg(eSlots, eGroups) },
        challenge: { prompt: `${p}(${count(hGroups)}장).`, toolOptions: { more: mix(hard.map((h) => h || [])) }, target: tg(slots, hGroups) },
      },
      ...more,
    };
  };
  const BOXLV = { easy: { instant: true, showCount: true }, base: {}, challenge: { shuffle: true } };

  M.push(
    T('fire-report', 3)({
      id: 'saf-disaster.e34.fire-report.activity.cause-sort', type: 'activity', title: '화재 원인 카드 나누기',
      method: '화재 원인 카드 나누기', tool: 'sortboard', minutes: 14,
      levels: { easy: '바구니 2개에 카드 4장을 나누고, 틀리면 바로 되돌아온다.', base: '바구니 3개(전기·불장난·요리)에 카드 6장을 나눈 뒤 확인한다.', challenge: '헷갈리는 카드 3장이 더해진 9장을 나누고, 카드마다 막는 방법 하나를 짝에게 말한다.' },
      activity: {
        title: '화재 원인 카드 나누기', tool: 'sortboard',
        teacher: '"이 장면에서 불은 무엇 때문에 날까요? 전기, 불장난, 요리 가운데 어느 바구니일까요?" 카드를 넣을 때마다 왜 그 바구니인지 한 문장으로 말하게 한다. 난로 옆 빨래를 불장난에 넣는 학생에게 "누가 불을 가지고 논 걸까요, 전기 난로가 뜨거워진 걸까요?"라고 묻는다. 원인을 알면 막는 방법도 보인다는 것을 짚는다.',
        task: '불이 날 수 있는 장면 카드를 전기·불장난·요리 바구니에 나누어요.', levels: BOXLV,
        items: [
          BOX('집 안에서 불이 날 수 있는 장면을 나누어요.', ['전기', '불장난', '요리'], [['문어발 콘센트', '젖은 손 플러그'], ['라이터 장난', '성냥 켜 보기'], ['켜 둔 가스레인지', '냄비 두고 외출']], [[0, 2], [2, 2]], [['먼지 낀 콘센트'], ['촛불 장난'], ['가스레인지 옆 행주']], 0.15),
          BOX('겨울에 불이 날 수 있는 장면을 나누어요.', ['전기', '불장난', '요리'], [['난로 옆 빨래', '전기장판 켜 둠'], ['불꽃놀이 장난', '종이 태우기'], ['끓는 국 두고 감', '기름 냄비 켜 둠']], [[0, 2], [1, 2]], [['꼬인 전선'], ['마른 풀 태우기'], ['타는 냄새 무시']], 0.2),
          BOX('학교에서 불이 날 수 있는 장면을 나누어요.', ['전기', '불장난', '요리'], [['콘센트에 물 쏟음', '플러그 여러 개'], ['알코올램프 장난', '라이터 가져옴'], ['실과실 불 켜 둠', '조리실 기름 냄비']], [[1, 2], [2, 2]], [['전선 밟고 다님'], ['돋보기 불 놀이'], ['불 옆 앞치마 끈']], 0.25, { conclude: '불은 전기·불장난·요리에서 나기 쉬워요. 원인을 알면 막을 수 있어요.' }),
        ],
      },
      worksheet: { items: [{ type: 'table', prompt: '원인이 전기면 "전", 불장난이면 "불", 요리면 "요"를 써요.', columns: ['장면', '원인'], cells: [['문어발 콘센트', ''], ['라이터 장난', ''], ['켜 둔 가스레인지', '']], answer: '전, 불, 요' }] },
    }),
    T('quake-indoor', 3)({
      id: 'saf-disaster.e34.quake-indoor.activity.place-sort', type: 'activity', title: '장소별 지진 행동 나누기',
      method: '장소별 행동 카드 나누기', tool: 'sortboard', minutes: 13,
      levels: { easy: '바구니 2개에 카드 4장을 나누고, 틀리면 바로 되돌아온다.', base: '바구니 3개(교실·복도·계단)에 카드 6장을 나눈 뒤 확인한다.', challenge: '헷갈리는 카드 3장이 더해진 9장을 나누고, 활동지에서 두 장소에 다 쓰는 행동을 고른다.' },
      activity: {
        title: '장소별 행동 나누기', tool: 'sortboard',
        teacher: '"이 행동은 어디에서 할 수 있을까요? 계단에도 책상이 있나요?" 카드를 넣을 때마다 그 장소에서 몸으로 해 보게 한다. 손잡이 잡기를 교실에 넣는 학생에게 "교실에 잡을 손잡이가 있을까요? 무엇을 잡았지요?"라고 묻는다. 장소마다 몸을 지키는 방법이 달라도 몸을 낮추는 것은 어디서나 같다는 것을 짚는다.',
        task: '흔들릴 때와 멈춘 뒤의 행동 카드를 장소 바구니에 나누어요.', levels: BOXLV,
        items: [
          BOX('흔들릴 때 행동을 장소에 나누어요.', ['교실', '복도', '계단'], [['책상 아래로', '책상 다리 잡기'], ['창문에서 멀리', '벽 쪽에 낮추기'], ['손잡이 잡기', '멈춰서 앉기']], [[0, 2], [2, 2]], [['창가 화분 피하기'], ['게시판 아래 피하기'], ['뛰지 않기']], 0.15),
          BOX('흔들림이 멈춘 뒤 행동을 장소에 나누어요.', ['교실', '복도', '계단'], [['가방으로 머리 가림', '줄 서서 나가기'], ['유리 조각 피하기', '선생님 따라가기'], ['걸어서 내려가기', '한 줄로 내려가기']], [[0, 2], [2, 2]], [['사물함 그대로 두기'], ['엘리베이터 안 타기'], ['앞 친구 밀지 않기']], 0.2),
          BOX('흔들릴 때 위험한 것을 장소에 나누어요.', ['교실', '복도', '계단'], [['높은 곳 상자', '창가 화분'], ['큰 유리창', '벽 게시판'], ['미끄러운 계단', '계단 위 가방']], [[1, 2], [2, 2]], [['흔들리는 전등'], ['복도 소화기 받침'], ['헐거운 손잡이']], 0.25, { conclude: '장소마다 몸을 지키는 방법이 달라요. 흔들리는 동안 그 자리에서 낮추고 머리를 지켜요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '교실과 복도에서 다 쓰는 행동은?', options: ['몸을 낮추기', '책상 다리 잡기', '손잡이 잡기'], answer: '몸을 낮추기' }] },
    }),
    T('burn-cool', 3)({
      id: 'saf-disaster.e34.burn-cool.activity.do-dont', type: 'activity', title: '할 일·하지 말 일 나누기',
      method: '할 일/하지 말 일 나누기', tool: 'sortboard', minutes: 10,
      levels: { easy: '바구니 2개에 카드 4장을 나누고, 틀리면 바로 되돌아온다.', base: '카드 6장을 할 일·하지 말 일로 나눈 뒤 확인한다.', challenge: '헷갈리는 카드 2장이 더해진 8장을 나누고, 하지 말 일 하나의 까닭을 짝에게 말한다.' },
      activity: {
        title: '할 일·하지 말 일 나누기', tool: 'sortboard',
        teacher: '"이것을 하면 데인 곳이 나아질까요, 더 나빠질까요?" 카드를 넣을 때마다 까닭을 한 문장으로 말하게 한다. 민간요법 카드를 할 일에 넣는 학생에게 "된장이나 치약이 상처에 닿으면 깨끗할까요? 열은 빠질까요?"라고 묻는다. 얼음을 바로 대면 살갗이 또 다칠 수 있다는 것도 짚는다.',
        task: '데었을 때 행동 카드를 할 일과 하지 말 일 바구니에 나누어요.', levels: BOXLV,
        items: [
          BOX('손을 데었을 때 할 일과 하지 말 일을 나누어요.', ['할 일', '하지 말 일'], [['흐르는 물로 식히기', '어른께 알리기', '반지 빼기'], ['민간요법 바르기', '붙은 옷 떼기', '물집 터뜨리기']], [[0, 2], [1, 2]], [['깨끗한 천 덮기'], ['얼음 바로 대기']], 0.15),
          BOX('친구가 데었을 때 할 일과 하지 말 일을 나누어요.', ['할 일', '하지 말 일'], [['뜨거운 곳서 떼기', '선생님께 알리기', '수돗가로 가기'], ['데인 곳 문지르기', '치약 발라 주기', '괜찮다며 놀기']], [[0, 2], [1, 2]], [['아픈 곳 물어보기'], ['붕대 꽉 감기']], 0.2),
          BOX('옷 위로 뜨거운 국을 쏟았을 때 나누어요.', ['할 일', '하지 말 일'], [['옷 위로 물 흘리기', '급식 선생님께 알림', '보건실 가기'], ['옷 억지로 벗기', '휴지로 박박 닦기', '기름 바르기']], [[0, 2], [1, 2]], [['장신구 먼저 빼기'], ['밥부터 먹기']], 0.25, { conclude: '데면 흐르는 물로 식히고 어른께 알려요. 바르거나 떼거나 터뜨리지 않아요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '데인 곳에 하지 말 일은?', options: ['흐르는 물로 식히기', '치약 바르기', '어른께 알리기'], answer: '치약 바르기' }] },
    }),
    T('typhoon-flood', 3)({
      id: 'saf-disaster.e34.typhoon-flood.activity.before-after', type: 'activity', title: '태풍 전·중·뒤 행동 나누기',
      method: '태풍 전·중·뒤 행동 카드 나누기', tool: 'sortboard', minutes: 10,
      levels: { easy: '바구니 2개에 카드 4장을 나누고, 틀리면 바로 되돌아온다.', base: '바구니 3개(오기 전·오는 중·지나간 뒤)에 카드 6장을 나눈다.', challenge: '카드 3장이 더해진 9장을 나누고, 활동지에 가족과 나눌 일을 쓴다.' },
      activity: {
        title: '태풍 전·중·뒤 나누기', tool: 'sortboard',
        teacher: '"이 일은 태풍이 오기 전에 할까요, 오는 동안 할까요, 지나간 뒤에 할까요?" 카드를 넣을 때마다 그때 해야 하는 까닭을 묻는다. 창문 닫기를 오는 중에 넣는 학생에게 "바람이 세게 불 때 창가에 가서 닫으면 어떨까요? 언제 미리 닫아 두면 좋을까요?"라고 묻는다. 태풍이 지나간 뒤에도 끊긴 전선과 불어난 냇가는 위험하다는 것을 짚는다.',
        task: '태풍·호우 때 할 일 카드를 오기 전·오는 중·지나간 뒤 바구니에 나누어요.', levels: BOXLV,
        items: [
          BOX('태풍 때 할 일을 전·중·뒤로 나누어요.', ['오기 전', '오는 중', '지나간 뒤'], [['창문 닫기', '바깥 물건 들이기'], ['집 안에 있기', '창문에서 멀리'], ['냇가 가지 않기', '끊긴 전선 피하기']], [[0, 2], [1, 2]], [['손전등 챙기기'], ['날씨 소식 듣기'], ['젖은 길 천천히']], 0.15),
          BOX('호우 때 할 일을 전·중·뒤로 나누어요.', ['오기 전', '오는 중', '지나간 뒤'], [['높은 길 알아 두기', '비옷 챙기기'], ['지하차도 피하기', '흐르는 물 안 건너기'], ['물 찬 곳 안 가기', '무너진 곳 알리기']], [[0, 2], [1, 2]], [['우산 살 살피기'], ['냇가 가지 않기'], ['어른과 집 둘러보기']], 0.2),
          BOX('학교에서 태풍 때 할 일을 나누어요.', ['오기 전', '오는 중', '지나간 뒤'], [['교실 창문 닫기', '하교 방법 듣기'], ['교실 안에 있기', '선생님 말 듣기'], ['떨어진 간판 피하기', '웅덩이 놀이 안 하기']], [[1, 2], [2, 2]], [['운동장 물건 들이기'], ['창가에 안 서기'], ['쓰러진 나무 알리기']], 0.25, { conclude: '태풍은 오기 전에 준비하고, 오는 동안 집 안에 있고, 지나간 뒤에도 냇가와 끊긴 전선을 피해요.' }),
        ],
      },
      worksheet: { items: [{ type: 'short', prompt: '태풍이 오기 전 가족과 나눌 일을 하나 써요.' }] },
    }),
    T('smoke-escape', 4)({
      id: 'saf-disaster.e34.smoke-escape.activity.smoke-sort', type: 'activity', title: '연기 속 행동 나누기',
      method: '연기 속 행동 카드 나누기', tool: 'sortboard', minutes: 13,
      levels: { easy: '바구니 2개에 카드 4장을 나누고, 틀리면 바로 되돌아온다.', base: '카드 6장을 좋아요·안돼요로 나눈 뒤 확인한다.', challenge: '헷갈리는 카드 2장이 더해진 8장을 나누고, 안돼요 카드의 까닭을 짝에게 말한다.' },
      activity: {
        title: '좋아요·안돼요 나누기', tool: 'sortboard',
        teacher: '"이렇게 하면 연기 속에서 숨쉬기가 나을까요, 나빠질까요?" 카드를 넣을 때마다 까닭을 말하게 한다. 옷장에 숨기를 좋아요에 넣는 학생에게 "숨어 있으면 구조대가 나를 찾을 수 있을까요?"라고 묻는다. 엘리베이터는 불이 나면 멈출 수 있어 계단으로 간다는 것을 짚는다.',
        task: '연기 속 행동 카드를 좋아요와 안돼요 바구니에 나누어요.', levels: BOXLV,
        items: [
          BOX('연기 속 행동을 좋아요와 안돼요로 나누어요.', ['좋아요', '안돼요'], [['낮은 자세', '벽 짚고 걷기', '코·입 막기'], ['엘리베이터 타기', '옷장에 숨기', '서서 뛰기']], [[0, 2], [1, 2]], [['젖은 천 쓰기'], ['가방 챙기러 가기']], 0.15),
          BOX('문 앞에서 할 행동을 나누어요.', ['좋아요', '안돼요'], [['손등으로 손잡이', '뜨거우면 다른 길', '천천히 문 열기'], ['뜨거운 문 열기', '손바닥으로 잡기', '문 앞에서 기다리기']], [[0, 2], [1, 2]], [['문틈 연기 살피기'], ['문 발로 차기']], 0.2),
          BOX('나갈 길이 막혔을 때 행동을 나누어요.', ['좋아요', '안돼요'], [['젖은 천으로 문틈', '창가에서 천 흔들기', '소리 내어 알리기'], ['침대 밑 숨기', '창밖으로 뛰기', '뜨거운 문 열기']], [[0, 2], [1, 2]], [['119에 있는 곳 말하기'], ['연기 속 혼자 뛰기']], 0.25, { conclude: '연기 속에서는 막고, 낮추고, 짚어요. 숨지 않고 알려요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '연기 속에서 안 되는 행동은?', options: ['낮은 자세', '옷장에 숨기', '벽 짚고 걷기'], answer: '옷장에 숨기' }] },
    }),
    T('gas-explosion', 4)({
      id: 'saf-disaster.e34.gas-explosion.activity.do-dont', type: 'activity', title: '가스 냄새: 할 일·안 할 일',
      method: '할 일/하지 않을 일 나누기', tool: 'sortboard', minutes: 14,
      levels: { easy: '바구니 2개에 카드 4장을 나누고, 틀리면 바로 되돌아온다.', base: '카드 6장을 할 일·하지 않을 일로 나눈 뒤 확인한다.', challenge: '헷갈리는 카드 2장이 더해진 8장을 나누고, 스위치가 위험한 까닭을 짝에게 말한다.' },
      activity: {
        title: '할 일·하지 않을 일 나누기', tool: 'sortboard',
        teacher: '"이것을 하면 불꽃이 튈까요?" 카드를 넣을 때마다 불꽃·전기와 관계있는지 묻는다. 환풍기 켜기를 할 일에 넣는 학생에게 "환풍기는 무엇으로 돌아가지요? 켤 때 스위치에서 무엇이 튈 수 있을까요?"라고 묻는다. 어린이는 밸브를 만지지 않고, 전화도 밖에 나가서 건다는 것을 짚는다.',
        task: '가스 냄새가 날 때 행동 카드를 할 일과 하지 않을 일 바구니에 나누어요.', levels: BOXLV,
        items: [
          BOX('집에서 가스 냄새가 날 때 나누어요.', ['할 일', '하지 않을 일'], [['창문 열기', '밖으로 나가기', '밖에서 알리기'], ['불 켜기', '전기 스위치 켜기', '환풍기 켜기']], [[0, 2], [1, 2]], [['문 열어 두기'], ['밸브 혼자 잠그기']], 0.15),
          BOX('과학실에서 가스 냄새가 날 때 나누어요.', ['할 일', '하지 않을 일'], [['실험 멈추기', '선생님께 알리기', '줄 서서 나가기'], ['알코올램프 켜기', '냄새 더 맡기', '전등 켜기']], [[0, 2], [1, 2]], [['친구에게 알리기'], ['가스 밸브 만지기']], 0.2),
          BOX('아파트에서 가스 냄새가 날 때 나누어요.', ['할 일', '하지 않을 일'], [['계단으로 나가기', '경비실에 알리기', '이웃에게 알리기'], ['엘리베이터 타기', '집 안에서 전화', '초인종 누르기']], [[0, 2], [1, 2]], [['건물 밖 모이기'], ['다시 들어가 보기']], 0.25, { conclude: '가스 냄새가 나면 불·스위치를 쓰지 않고, 창문을 열고, 밖에서 알려요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '가스 냄새가 날 때 할 일은?', options: ['환풍기 켜기', '창문 열기', '전등 켜기'], answer: '창문 열기' }] },
    }),
    T('snow-thunder', 4)({
      id: 'saf-disaster.e34.snow-thunder.activity.weather-sort', type: 'activity', title: '대설·한파·낙뢰 행동 나누기',
      method: '대설·한파·낙뢰 행동 나누기', tool: 'sortboard', minutes: 10,
      levels: { easy: '바구니 2개에 카드 3장을 나누고, 틀리면 바로 되돌아온다.', base: '바구니 3개(대설·한파·낙뢰)에 카드 6장을 나눈다.', challenge: '카드 3장이 더해진 9장을 나누고, 활동지에서 두 날씨에 다 맞는 행동을 고른다.' },
      activity: {
        title: '날씨별 행동 나누기', tool: 'sortboard',
        teacher: '"이 행동은 눈 오는 날, 아주 추운 날, 번개 치는 날 가운데 언제 할까요?" 카드를 넣을 때마다 까닭을 말하게 한다. 나무 아래 피하기를 대설에 넣는 학생에게 "번개는 높은 것에 잘 떨어진다고 했지요? 어느 날씨일까요?"라고 묻는다. 장갑처럼 두 날씨에 다 쓰는 것도 있지만 카드는 한 바구니에만 넣고, 활동지에서 따로 고른다고 알려 준다.',
        task: '겨울과 번개 날 행동 카드를 대설·한파·낙뢰 바구니에 나누어요.', levels: BOXLV,
        items: [
          BOX('날씨에 맞는 행동을 나누어요.', ['대설', '한파', '낙뢰'], [['미끄럼 조심', '보폭 작게 걷기'], ['얇은 옷 겹쳐 입기', '귀·목 감싸기'], ['건물 안으로', '나무 아래 피하기']], [[1, 2], [2, 1]], [['안 미끄러운 신발'], ['내복 입기'], ['철봉 옆 피하기']], 0.15),
          BOX('등굣길에 날씨별로 지킬 일을 나누어요.', ['대설', '한파', '낙뢰'], [['손 주머니 안 넣기', '빙판 피해 돌기'], ['목도리 하기', '오래 밖에 안 있기'], ['우산 접고 건물로', '넓은 곳 안 서기']], [[0, 2], [1, 1]], [['휴대폰 안 보기'], ['귀마개 하기'], ['물가에서 나오기']], 0.2),
          BOX('날씨별로 집에서 할 일을 나누어요.', ['대설', '한파', '낙뢰'], [['장화 꺼내 두기', '외출 시간 늦추기'], ['따뜻한 물 마시기', '내복 꺼내 두기'], ['창문에서 멀리', '밖에 안 나가기']], [[0, 2], [2, 1]], [['현관 눈 어른과 치움'], ['실내 온도 맞추기'], ['날씨 소식 듣기']], 0.25, { conclude: '눈 오면 천천히, 추우면 겹쳐 입고 감싸고, 번개 치면 건물 안으로 가요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '대설과 한파에 다 맞는 행동은?', options: ['장갑 끼기', '나무 아래 피하기', '건물 안으로'], answer: '장갑 끼기' }] },
    }),
    T('burn-scene', 4)({
      id: 'saf-disaster.e34.burn-scene.activity.place-sort', type: 'activity', title: '부엌·욕실 예방 카드 나누기',
      method: '장소별 예방 카드 나누기', tool: 'sortboard', minutes: 10,
      levels: { easy: '바구니 2개에 카드 4장을 나누고, 틀리면 바로 되돌아온다.', base: '카드 6장을 부엌·욕실로 나눈 뒤 확인한다.', challenge: '카드 2장이 더해진 8장을 나누고, 동생이 있을 때 더할 일을 짝에게 말한다.' },
      activity: {
        title: '부엌·욕실 나누기', tool: 'sortboard',
        teacher: '"이 약속은 부엌에서 지킬까요, 욕실에서 지킬까요?" 카드를 넣을 때마다 그곳에 무엇이 뜨거운지 말하게 한다. 찬물 먼저 틀기를 부엌에 넣는 학생에게 "뜨거운 물이 갑자기 몸에 닿는 곳은 어디일까요?"라고 묻는다. 마지막 문항에서는 동생이 있으면 한 번 더 살핀다는 것을 짚는다.',
        task: '화상 예방 카드를 부엌과 욕실 바구니에 나누어요.', levels: BOXLV,
        items: [
          BOX('화상 예방 약속을 부엌과 욕실로 나누어요.', ['부엌', '욕실'], [['손잡이 안쪽으로', '뜨거운 컵 가운데', '가스레인지서 멀리'], ['물 온도 먼저 확인', '찬물 먼저 틀기', '동생은 어른과']], [[0, 2], [1, 2]], [['식탁보 안 당기기'], ['뜨거운 꼭지 장난 금지']], 0.15),
          BOX('데기 쉬운 순간을 부엌과 욕실로 나누어요.', ['부엌', '욕실'], [['끓는 물 붓기', '냄비 옮기기', '전기밥솥 김'], ['바로 욕조 들어가기', '샤워기 뜨거운 물', '동생 혼자 목욕']], [[0, 2], [1, 2]], [['기름 튀는 프라이팬'], ['젖은 손 헤어드라이어']], 0.2),
          BOX('동생이 있을 때 약속을 부엌과 욕실로 나누어요.', ['부엌', '욕실'], [['동생 부엌 밖에', '뜨거운 것 손 안 닿게', '컵은 식탁 가운데'], ['동생 먼저 안 들이기', '어른과 온도 보기', '동생 곁 지키기']], [[0, 2], [1, 2]], [['냄비 쪽 못 가게'], ['꼭지 못 만지게']], 0.25, { conclude: '부엌은 손잡이 안쪽·컵은 가운데, 욕실은 물 온도 먼저. 동생이 있으면 한 번 더 살펴요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '욕실에서 지킬 약속은?', options: ['손잡이 안쪽으로', '물 온도 먼저 확인', '뜨거운 컵 가운데'], answer: '물 온도 먼저 확인' }] },
    }),
  );

  PaperLessons.registerModules(M);
})();
