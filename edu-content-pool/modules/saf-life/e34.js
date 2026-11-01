/* 창체 안전교육 생활안전 — 초3-4 모듈 내용(edu-module.v1). 형식·작성 규칙: MODULES_BUILD.md, 계획: framework/safety-a.json 의 saf-life 초3-4.
 * 근거: 「학교안전교육 실시 기준 등에 관한 고시」(교육부고시 제2023-33호) 별표 2 초등학교 생활안전 1~5
 *   (1 교실·가정·공공시설 이용 / 2 학용품·놀이용품·식품 안전 / 3 실험·실습 안전 / 4 놀이·야외 활동 / 5 유괴·미아사고 예방과 대처).
 * 초3-4 기준: 상황 판단(그림+짧은 글), 차례 정하기, 고른 이유 말하기, 짝 토의, 간단한 표·그림그래프. 법 조문·통계 해석·긴 글쓰기는 쓰지 않는다.
 * 장면·인물·학급 자료(손 씻기 기록, 시설 조사)는 직접 지은 가상의 것이다(가명). 피해 경험은 묻지 않는다.
 * 주제 12개(3학년 6 · 4학년 6) × 도입 2 · 활동 4 · 정리 2 = 계획 모듈 96개. */
(function () {
  const BASE = { schema: 'edu-module.v1', domain: 'saf-life', band: '초3-4' };
  const T = (topic, grade) => (o) => Object.assign({}, BASE, { topic: `saf-life.e34.${topic}`, grades: [grade] }, o);
  const M = [];
  const strip = (p) => String(p).replace(/[.?!]$/, '');
  const idOf = (c) => (typeof c === 'string' ? c : c.id);
  const mix = (groups) => { const out = []; const n = Math.max(...groups.map((g) => g.length)); for (let i = 0; i < n; i++) for (const g of groups) if (g[i] != null) out.push(g[i]); return out; };
  const count = (groups) => groups.reduce((a, g) => a + g.length, 0);
  const slotId = (s) => (typeof s === 'string' ? s : s.id);
  const sortT = (slots, groups) => ({ sort: Object.fromEntries(slots.map((s, i) => [slotId(s), groups[i].map(idOf)])) });

  // 나누기(mindmap·story·kitchen sort): 기본 = groups(칸마다 카드), 쉬움 = 칸마다 앞에서 ne장, 도전 = 칸마다 hard 카드를 더함
  const SORT = (prompt, base, slots, groups, ne, hard, d, more) => {
    const easyG = groups.map((g, i) => g.slice(0, Array.isArray(ne) ? ne[i] : ne));
    const hardG = groups.map((g, i) => g.concat(hard[i] || []));
    const p = strip(prompt);
    return {
      prompt, toolOptions: Object.assign({}, base, { slots, cards: mix(groups) }), target: sortT(slots, groups), difficulty: d,
      levels: {
        easy: { prompt: `${p}(${count(easyG)}장).`, toolOptions: { cards: mix(easyG) }, target: sortT(slots, easyG) },
        challenge: { prompt: `${p}(${count(hardG)}장).`, toolOptions: { cards: mix(hardG) }, target: sortT(slots, hardG) },
      },
      ...more,
    };
  };

  // 차례 놓기(story·kitchen order): 기본 = 장면 전부, 쉬움 = drop 번째 장면을 뺀 3장, 도전 = 틀린 장면(trap) 한 장이 섞인다
  const SLOTS = { 3: ['처음', '다음', '끝'], 4: ['처음', '다음', '그다음', '끝'] };
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
  // good: 받는 길 목록(첫 길의 첫 선택이 쉬움 단계의 바른 보기). 바른 첫 보기에는 쉬움 단계 끝 글(ending)을 적는다.
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

  // 해야 할 것만 표시하는 점검표(kitchen checklist): 기본 4칸, 쉬움 2칸(easy 번호), 도전은 기본과 같은 판(짝 점검은 교사 몫)
  const CHK = (prompt, title, items, easyIdx, d, more) => {
    const ok = (list) => list.filter((x) => x.ok).map((x) => x.id);
    const strip2 = (list) => list.map((x) => ({ id: x.id, text: x.text }));
    const easy = easyIdx.map((i) => items[i]);
    return {
      prompt, toolOptions: { mode: 'checklist', title, items: strip2(items) }, target: { checklist: ok(items) }, difficulty: d,
      levels: { easy: { prompt: `${strip(prompt)}(2칸).`, toolOptions: { items: strip2(easy) }, target: { checklist: ok(easy) } } },
      ...more,
    };
  };

  // 짝 잇기(kitchen·mindmap match): rows = [[칸 글, 카드 글], …] 기본 3줄, 쉬움 앞 2줄, 도전 = 함정 카드 한 장 더
  const MATCH = (prompt, base, rows, trap, d, more) => {
    const slots = rows.map((r, i) => ({ id: `r${i + 1}`, label: r[0] }));
    const cards = rows.map((r) => r[1]);
    const tg = (n) => ({ match: Object.fromEntries(rows.slice(0, n).map((r, i) => [`r${i + 1}`, r[1]])) });
    return {
      prompt, toolOptions: Object.assign({}, base, { mode: 'match', slots, cards: cards.slice().reverse() }), target: tg(rows.length), difficulty: d,
      levels: {
        easy: { prompt: `${strip(prompt)}(2줄).`, toolOptions: { slots: slots.slice(0, 2), cards: cards.slice(0, 2).reverse() }, target: tg(2) },
        challenge: { prompt: `${strip(prompt)}. 남는 카드가 하나 있어요.`, toolOptions: { cards: [cards[1], trap, cards[2], cards[0]].concat(cards.slice(3)) }, target: tg(rows.length) },
      },
      ...more,
    };
  };

  // 칸 지도 핀: 도전 단계는 '왜 여기일까' 보기 고르기를 함께 한다(ask)
  const PIN = (map, prompt, region, why, d, more) => ({
    prompt, toolOptions: map, target: { region }, difficulty: d,
    levels: { challenge: { prompt: `${strip(prompt)}. 까닭도 골라요.`, toolOptions: { ask: { q: why.q, choices: why.choices } }, target: { region, pick: why.answer } } },
    ...more,
  });

  // 스스로 점검(timer selfCheck) 출구 질문: 쉬움 앞 2칸, 기본 앞 3칸, 도전 4칸
  const SELF = (title, checks, prompt) => ({
    type: 'tool', tool: 'timer', options: { title }, prompt: prompt || '오늘 한 것에 스스로 표시해요.', target: { selfCheck: checks.slice(0, 3) }, difficulty: 0.1,
    levels: { easy: { target: { selfCheck: checks.slice(0, 2) } }, challenge: { target: { selfCheck: checks.slice(0, 4) } } },
  });
  const MOOD = { type: 'mood', prompt: '오늘 공부를 마친 내 마음은 어떤가요?' };

  // ======================================================================================================
  // 3학년 · 사고의 원인과 공공 공간 규칙 (별표 2 초등 생활안전 1)
  // ======================================================================================================
  {
    const C = T('g3-cause-public', 3);
    const SCHOOL = {
      title: '우리 학교', grid: [6, 4],
      regions: [
        { name: '도서관', cells: [[0, 0], [1, 0]] }, { name: '교실', cells: [[2, 0], [3, 0]] }, { name: '과학실', cells: [[4, 0], [5, 0]] },
        { name: '체육관', cells: [[0, 1], [1, 1], [0, 2], [1, 2]] }, { name: '복도', cells: [[2, 1], [3, 1], [4, 1], [5, 1]] },
        { name: '급식실', cells: [[2, 2], [3, 2], [2, 3], [3, 3]] }, { name: '운동장', cells: [[4, 2], [5, 2], [4, 3], [5, 3], [0, 3], [1, 3]] },
      ],
    };
    M.push(
      C({
        id: 'saf-life.e34.g3-cause-public.intro.why-hurt', type: 'intro', title: '왜 다쳤을까? 까닭 고르기',
        method: '사고 장면에서 왜 다쳤는지 고르기', tool: 'emotion', minutes: 6,
        levels: { easy: '장면 하나(복도)만 보이고 까닭 카드 2장을 함께 고른다.', base: '장면 두 개(복도·계단)를 보고 까닭 3장을 고른다.', challenge: '까닭 4장 가운데 사람이 한 일과 둘레 모습을 하나씩 꼭 고른다.' },
        intro: {
          teacher: '"민이가 복도에서 넘어졌어요. 왜 넘어졌을까요?" 두세 명의 생각을 듣고(기다릴 반응: "뛰어서요", "바닥이 젖어서요") 시연 단추로 까닭 카드가 바구니에 담기는 모습을 보인다. "운이 나빠서요"라는 말이 나오면 "운 말고, 그 자리에 무엇이 있었나요? 민이는 무엇을 했나요?"라고 되묻는다. 오늘은 사고에는 까닭이 있고, 까닭을 바꾸면 사고를 막을 수 있다는 것을 배운다고 밝힌다.',
          student: '그림 속 친구가 왜 넘어졌는지 까닭을 고르고, 고른 이유를 짝에게 말해 보아요.',
          demo: { tool: 'emotion', options: { mode: 'pick', basket: '다친 까닭', cards: [{ id: 'wet', text: '젖은 바닥' }, { id: 'walk', text: '천천히 걷기' }, { id: 'run', text: '복도에서 뛰기' }, { id: 'light', text: '밝은 전등' }, { id: 'lace', text: '풀린 신발 끈' }, { id: 'rail', text: '손잡이 잡기' }], shuffle: false }, sequence: [{ pick: ['wet', 'run', 'lace'] }] },
          art: { draw: 'a paper school hallway with a small puddle on the floor, one paper child slipping while running and a friend walking slowly holding the rail', banner: '왜 넘어졌을까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '"넘어진 적 있나요?"처럼 겪은 일을 묻지 않는다. 그림 속 친구(가명)의 일로만 이야기한다.',
      }),
      C({
        id: 'saf-life.e34.g3-cause-public.intro.rule-guess', type: 'intro', title: '학교 지도에서 규칙 있는 곳',
        method: '학교 지도에서 규칙 있는 곳 찾기', tool: 'map', minutes: 5,
        levels: { easy: '교사가 도서관 한 곳에 핀을 꽂는 모습만 함께 본다.', base: '도서관·체육관·급식실 세 곳에 핀이 차례로 꽂히는 것을 본다.', challenge: '세 곳을 보고 그곳의 규칙을 하나씩 짝에게 말한다.' },
        intro: {
          teacher: '"우리 학교에서 규칙이 꼭 필요한 곳은 어디일까요?" 시연 단추로 도서관·체육관·급식실에 핀이 꽂히는 모습을 보이고, 곳마다 아는 규칙을 한 가지씩 묻는다(기다릴 반응: "도서관에서는 조용히요", "급식실에서는 줄 서요"). "규칙은 선생님이 정해서 지키는 거예요"라는 말이 나오면 "줄을 안 서면 무슨 일이 생길까요?"라고 되물어 규칙마다 까닭이 있다는 것을 짚는다.',
          student: '지도에 핀이 꽂힌 곳에서 지키는 규칙을 하나씩 떠올려 짝에게 말해 보아요.',
          demo: { tool: 'map', options: SCHOOL, sequence: [{ pin: [0, 0] }, { pin: [0, 1] }, { pin: [2, 2] }] },
          art: { draw: 'a paper cut school map with a library, a gym and a cafeteria, small paper pins standing on each place', banner: '규칙이 있는 곳', extra: [{ motif: 'leaf', x: 300, y: 222 }] },
        },
      }),
      C({
        id: 'saf-life.e34.g3-cause-public.activity.cause-sort', type: 'activity', title: '사고 원인 두 가지로 나누기',
        method: '원인을 행동과 환경으로 나누기', tool: 'mindmap', minutes: 14,
        levels: { easy: '카드 4장, 놓으면 바로 맞는지 알려 준다.', base: '카드 6장을 다 놓은 뒤 확인한다.', challenge: '헷갈리는 카드 2장이 더해진 8장을 나누고, 고른 까닭을 짝에게 말한다.' },
        activity: {
          title: '사고 원인 두 가지로 나누기', tool: 'mindmap',
          teacher: '"이 원인은 사람이 한 일인가요, 둘레의 모습인가요?" 카드를 놓을 때마다 왜 그 가지인지 한 문장으로 말하게 한다. "젖은 바닥"을 행동에 두는 학생에게 "바닥이 젖은 것은 누가 한 일이에요, 그 자리의 모습이에요?"라고 묻는다. 행동은 내가 바로 바꿀 수 있고, 환경은 알리거나 고쳐서 바꾼다는 점을 짚는다.',
          task: '사고 원인 카드를 사람이 한 일(행동)과 둘레 모습(환경)으로 나누어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORT('복도에서 난 사고의 원인을 나누어요.', { topic: '복도 사고' }, ['행동', '환경'], [['복도에서 뛰기', '친구 밀기', '뒤돌아 걷기'], ['젖은 바닥', '떨어진 연필', '어두운 복도']], 2, [['장난치며 달리기'], ['깨진 타일']], 0.15),
            SORT('계단에서 난 사고의 원인을 나누어요.', { topic: '계단 사고' }, ['행동', '환경'], [['두 칸씩 뛰기', '손잡이 안 잡기', '휴대폰 보며 걷기'], ['미끄러운 계단', '계단 위 가방', '꺼진 전등']], 2, [['난간에 매달리기'], ['헐거운 손잡이']], 0.2),
            SORT('운동장에서 난 사고의 원인을 나누어요.', { topic: '운동장 사고' }, ['행동', '환경'], [['줄 안 서고 타기', '그네 앞 지나가기', '풀린 끈 그대로'], ['움푹 팬 땅', '흩어진 돌', '부서진 놀이기구']], 2, [['미끄럼틀 거꾸로'], ['얼어붙은 땅']], 0.25, { conclude: '사고에는 원인이 있어요. 행동은 내가 바꾸고, 환경은 알려서 고쳐요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '원인이 행동이면 "행", 환경이면 "환"을 써요.', columns: ['원인', '행 / 환'], cells: [['복도에서 뛰기', ''], ['젖은 바닥', ''], ['손잡이 안 잡기', ''], ['꺼진 전등', '']], answer: '행, 환, 행, 환' }] },
      }),
      C({
        id: 'saf-life.e34.g3-cause-public.activity.rule-match', type: 'activity', title: '곳마다 다른 규칙 나누기',
        method: '공간별 규칙 나누기', tool: 'story', minutes: 13,
        levels: { easy: '카드 4장, 놓으면 바로 맞는지 알려 준다.', base: '카드 6장을 다 놓은 뒤 확인한다.', challenge: '카드 8장을 나누고, 여러 곳에 다 맞을 것 같은 카드는 짝에게 까닭을 말한다.' },
        activity: {
          title: '곳마다 다른 규칙 나누기', tool: 'story',
          teacher: '"이 규칙은 어디에서 꼭 지켜야 할까요?" 카드를 놓은 뒤 그곳에서 그 규칙을 안 지키면 무슨 일이 생기는지 짝과 한 가지씩 말하게 한다. "규칙은 다 똑같아요"라는 학생에게 "체육관에서 조용히만 하면 다치지 않을까요? 무엇이 더 필요할까요?"라고 묻는다. 곳마다 위험이 달라서 규칙도 다르다는 것을 짚는다.',
          task: '규칙 카드를 도서관·체육관·급식실 가운데 꼭 맞는 곳에 놓아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORT('규칙 카드를 맞는 곳에 놓아요.', { mode: 'sort', title: '곳마다 규칙' }, ['도서관', '체육관', '급식실'], [['조용히 말하기', '책은 제자리에'], ['운동화 신기', '기구는 차례로'], ['줄 서서 받기', '국 들고 걷기']], [2, 1, 1], [['뛰지 않기'], [], ['수저는 손잡이로']], 0.15),
            SORT('규칙의 까닭이 맞는 곳에 놓아요.', { mode: 'sort', title: '규칙의 까닭' }, ['도서관', '체육관', '급식실'], [['책 읽는 친구 생각', '책이 안 상하게'], ['미끄러지지 않게', '부딪히지 않게'], ['뜨거운 국 조심', '음식이 깨끗하게']], [1, 2, 1], [['찾는 책을 쉽게'], ['기구에 안 끼이게'], []], 0.2),
            SORT('이럴 때 어디에서 생긴 일인지 놓아요.', { mode: 'sort', title: '어디에서 생긴 일' }, ['도서관', '체육관', '급식실'], [['큰 소리로 떠듦', '책장에 매달림'], ['양말만 신고 뜀', '공 줍다 부딪힘'], ['식판 들고 뜀', '새치기로 다툼']], [1, 1, 2], [['책을 던짐'], ['매트 위 장난'], []], 0.25, { conclude: '곳마다 위험이 달라서 규칙도 달라요. 규칙에는 다 까닭이 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '급식실에서 국을 들고 지킬 규칙은?', options: ['빨리 뛰어가요', '천천히 걸어요', '친구와 장난쳐요'], answer: '천천히 걸어요' }] },
      }),
      C({
        id: 'saf-life.e34.g3-cause-public.activity.fix-cause', type: 'activity', title: '갈림길: 젖은 바닥을 봤어요',
        method: '갈림길: 젖은 바닥을 봤어요', tool: 'dilemma', minutes: 14,
        levels: { easy: '갈림 1번, 보기 2개 가운데 고르고 결과를 본다.', base: '갈림 2번, 보기 3개씩 고르며 결과를 따라간다.', challenge: '갈림 2번을 지난 뒤 근거 카드 3장 가운데 알맞은 것을 고른다.' },
        activity: {
          title: '갈림길: 위험한 곳을 봤을 때', tool: 'dilemma',
          teacher: '"내가 지나칠 때 다른 친구는 어떻게 될까요?" 보기를 고를 때마다 결과 장면을 소리 내어 읽고, 누가 도움을 받거나 다치는지 짝과 말하게 한다. "내가 안 미끄러지면 괜찮아요"라는 학생에게 "다음에 오는 1학년 동생은 그 바닥을 알까요?"라고 묻는다. 원인(환경)은 알리고 고치면 사고를 막는다는 점을 짚는다.',
          task: '장면을 읽고 보기를 골라요. 결과를 보고 다음 장면에서 또 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL('복도 바닥이 젖어 있어요. 어떻게 할까요?', {
              text: '쉬는 시간, 복도 바닥에 물이 흘러 있어요. 친구들이 뛰어오고 있어요.', motif: 'cloud',
              choices: [
                { id: 'pass', text: '조심히 지나간다', result: '나는 괜찮았지만 뒤에 온 친구가 미끄러졌어요.', impact: [{ who: '뒤에 온 친구', text: '넘어질 수 있어요', tone: -1 }] },
                { id: 'tell', text: '선생님께 알린다', result: '선생님이 오셔서 닦을 것을 가져오셨어요.', ending: '알렸더니 바닥이 금방 마른 곳이 되었어요.', next: {
                  text: '선생님이 닦는 동안 친구들이 계속 지나가려고 해요.', choices: [
                    { id: 'sign', text: '"미끄러워, 돌아가!" 알린다', result: '친구들이 다른 길로 돌아갔어요.', impact: [{ who: '친구들', text: '다치지 않았어요', tone: 1 }], ending: '원인을 알리고 고쳐서 사고를 막았어요.' },
                    { id: 'leave', text: '교실로 들어간다', result: '한 친구가 모르고 젖은 곳을 밟았어요.', impact: [{ who: '지나가는 친구', text: '미끄러질 뻔했어요', tone: -1 }] },
                    { id: 'race', text: '빨리 건너뛰기 내기', result: '뛰다가 부딪혀 넘어질 뻔했어요.', impact: [{ who: '나와 친구', text: '다칠 수 있어요', tone: -1 }] },
                  ] } },
                { id: 'slide', text: '미끄럼 놀이를 한다', result: '미끄러져 엉덩이를 찧었어요.', impact: [{ who: '나', text: '다쳤어요', tone: -1 }] },
              ] }, [['tell', 'sign']],
            [{ id: 'cause', text: '젖은 바닥이 사고의 원인이라서' }, { id: 'others', text: '뒤에 올 친구도 생각해서' }, { id: 'luck', text: '운이 좋으면 안 넘어지니까', why: '사고는 운이 아니라 원인이 있어서 생겨요.' }], ['cause', 'others'], 0.2),
            DIL('계단에 공이 굴러다녀요. 어떻게 할까요?', {
              text: '계단 중간에 누가 놓친 공이 굴러다니고 있어요.', motif: 'star',
              choices: [
                { id: 'kick', text: '발로 차서 내려보낸다', result: '공이 아래에서 올라오던 친구에게 튀었어요.', impact: [{ who: '아래 친구', text: '맞을 뻔했어요', tone: -1 }] },
                { id: 'pick', text: '멈춰서 공을 줍는다', result: '공을 손에 들었어요.', ending: '공을 치워 계단의 위험을 없앴어요.', next: {
                  text: '공 주인이 누군지 몰라요.', choices: [
                    { id: 'give', text: '선생님께 드린다', result: '선생님이 주인을 찾아 주셨어요.', impact: [{ who: '공 주인', text: '공을 찾았어요', tone: 1 }], ending: '위험한 물건을 치우고 어른께 맡겼어요.' },
                    { id: 'throw', text: '복도로 던져 둔다', result: '복도에서 또 누가 밟을 수 있어요.', impact: [{ who: '복도 친구들', text: '넘어질 수 있어요', tone: -1 }] },
                    { id: 'play', text: '계단에서 공놀이한다', result: '공을 잡으려다 계단에서 휘청했어요.', impact: [{ who: '나', text: '다칠 수 있어요', tone: -1 }] },
                  ] } },
                { id: 'jump', text: '공을 뛰어넘는다', result: '발이 걸려 넘어질 뻔했어요.', impact: [{ who: '나', text: '다칠 수 있어요', tone: -1 }] },
              ] }, [['pick', 'give']],
            [{ id: 'remove', text: '원인을 치우면 사고를 막아서' }, { id: 'adult', text: '주인은 어른이 찾아 줄 수 있어서' }, { id: 'mine', text: '내 공이 아니니 상관없어서', why: '내 것이 아니어도 위험한 것은 함께 막아요.' }], ['remove', 'adult'], 0.25),
            DIL('급식실에 국물이 흘렀어요. 어떻게 할까요?', {
              text: '급식실 줄 앞 바닥에 국물이 흘러 있어요.', motif: 'sun',
              choices: [
                { id: 'quiet', text: '못 본 척 줄을 선다', result: '뒤에서 식판을 든 친구가 미끄러졌어요.', impact: [{ who: '식판 든 친구', text: '뜨거운 국을 쏟을 수 있어요', tone: -1 }] },
                { id: 'report', text: '급식실 선생님께 알린다', result: '선생님이 그곳을 닦기 시작하셨어요.', ending: '알렸더니 미끄러운 곳이 금방 사라졌어요.', next: {
                  text: '닦는 동안 줄이 그쪽으로 이어져요.', choices: [
                    { id: 'warn', text: '뒤 친구에게 알려 준다', result: '줄이 젖은 곳을 피해 섰어요.', impact: [{ who: '줄 선 친구들', text: '안전하게 받았어요', tone: 1 }], ending: '원인을 알리고 친구들에게도 전해 사고를 막았어요.' },
                    { id: 'push', text: '앞으로 밀고 간다', result: '밀다가 젖은 곳으로 밀려났어요.', impact: [{ who: '앞 친구', text: '넘어질 수 있어요', tone: -1 }] },
                    { id: 'skip', text: '새치기해 먼저 받는다', result: '줄이 엉켜 식판이 부딪혔어요.', impact: [{ who: '친구들', text: '다툼이 생겼어요', tone: -1 }] },
                  ] } },
                { id: 'wipe', text: '옷소매로 닦는다', result: '옷이 젖고 바닥은 여전히 미끄러워요.', impact: [{ who: '나', text: '옷이 더러워졌어요', tone: -1 }] },
              ] }, [['report', 'warn']],
            [{ id: 'hot', text: '뜨거운 국을 든 친구가 있어서' }, { id: 'tell', text: '알리면 함께 막을 수 있어서' }, { id: 'fast', text: '빨리 먹고 싶어서', why: '빨리 하려다 다치면 더 늦어져요.' }], ['hot', 'tell'], 0.3, { conclude: '위험한 원인을 보면 지나치지 말고 어른께 알리고 친구들에게도 전해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '젖은 바닥을 보면 지나치지 않고 선생님께 ___.', answer: '알려요' }] },
      }),
      C({
        id: 'saf-life.e34.g3-cause-public.activity.rule-table', type: 'activity', title: '우리 반 규칙 표 만들기',
        method: '우리 반 규칙 표 만들기', tool: 'kitchen', minutes: 14,
        levels: { easy: '표 줄 2개에 카드를 맞춰 넣는다.', base: '표 줄 3개에 카드를 맞춰 넣는다.', challenge: '줄 3개에 남는 함정 카드가 하나 섞이고, 짝과 까닭을 바꿔 말한다.' },
        activity: {
          title: '장소·규칙·까닭 표 채우기', tool: 'kitchen',
          teacher: '"이 칸에 들어갈 규칙은 무엇일까요? 그 규칙은 왜 있을까요?" 한 줄을 채울 때마다 "○○에서는 ○○해요. 왜냐하면 ○○이기 때문이에요." 틀로 짝에게 말하게 한다. 까닭 칸에 "선생님이 정해서요"를 넣으려는 학생에게 "그 규칙이 없으면 누가 다칠까요?"라고 묻는다.',
          task: '표의 줄마다 알맞은 카드를 넣어 장소·규칙·까닭 표를 완성해요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            MATCH('장소에 맞는 규칙을 넣어요.', { autoMotif: false, title: '장소 → 규칙' }, [['도서관', '작은 소리로 말하기'], ['체육관', '운동화 신고 들어가기'], ['급식실', '줄 서서 차례 지키기']], '복도에서 달리기', 0.15),
            MATCH('규칙에 맞는 까닭을 넣어요.', { autoMotif: false, title: '규칙 → 까닭' }, [['작은 소리로 말하기', '읽는 친구를 위해'], ['운동화 신기', '미끄러지지 않게'], ['줄 서서 받기', '부딪히지 않게']], '빨리 먹으려고', 0.2),
            MATCH('사고 원인에 맞는 바꿀 행동을 넣어요.', { autoMotif: false, title: '원인 → 바꿀 행동' }, [['복도에서 뛰기', '오른쪽으로 걷기'], ['계단 위 가방', '가방은 사물함에'], ['젖은 바닥', '보면 바로 알리기']], '몰래 지나가기', 0.25, { conclude: '규칙에는 까닭이 있어요. 원인을 바꾸는 행동이 곧 규칙이 돼요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '표의 빈칸에 까닭을 써요.', columns: ['장소', '규칙', '까닭'], cells: [['도서관', '작은 소리로 말하기', ''], ['체육관', '운동화 신기', '']], answer: '읽는 친구를 위해, 미끄러지지 않게' }] },
      }),
      C({
        id: 'saf-life.e34.g3-cause-public.wrap.cause-check', type: 'wrap', title: '원인 찾기 스스로 점검',
        method: '원인 찾기 스스로 점검', tool: 'timer', minutes: 7,
        levels: { easy: '점검 칸 2개에 표시한다.', base: '점검 칸 3개에 표시한다.', challenge: '점검 칸 4개에 표시하고 내일 바꿀 행동 하나를 쓴다.' },
        wrap: {
          teacher: '"오늘 사고의 원인을 몇 가지 찾았나요? 그 가운데 내가 바꿀 수 있는 것은 무엇인가요?" 점검 칸을 함께 읽고 스스로 표시하게 한다. 출구 2번에서 "운이 나빠서"를 고른 학생에게 "그림 속에서 바꿀 수 있었던 것이 무엇이었는지 하나만 찾아볼까요?"라고 되묻는다.',
          exitTicket: [
            SELF('원인 찾기 점검', ['원인을 둘 찾았어요', '바꿀 행동을 말했어요', '규칙의 까닭을 말했어요', '내일 할 행동을 정했어요']),
            { type: 'choice', prompt: '복도에서 친구가 넘어졌어요. 원인을 찾는 바른 생각은?', options: ['운이 나빠서 그래요', '젖은 곳이 있었는지 봐요', '친구가 약해서 그래요'], answer: 1, difficulty: 0.15, explain: '사고는 운이 아니라 행동과 환경 같은 원인이 있어요.' },
            { type: 'short', prompt: '내일 학교에서 바꿀 행동을 하나 써요.' },
          ],
        },
        worksheet: {
          title: '사고의 원인 찾기',
          items: [
            { type: 'check', prompt: '오늘 한 것에 표시해요.', options: ['행동 원인을 찾았어요', '환경 원인을 찾았어요', '바꿀 행동을 정했어요'] },
            { type: 'short', prompt: '우리 학교에서 사고가 날 수 있는 곳과 원인을 한 줄로 써요.' },
          ],
          easy: { note: '"사람이 한 일"과 "그곳의 모습"을 나누어 생각해요.', items: [{ type: 'draw', prompt: '복도를 안전하게 걷는 내 모습을 그려요.' }] },
        },
      }),
      C({
        id: 'saf-life.e34.g3-cause-public.wrap.rule-why', type: 'wrap', title: '규칙을 지킬 때 내 마음',
        method: '규칙 지킬 때 마음', tool: 'emotion', minutes: 7,
        levels: { easy: '장면 1개에 마음 카드를 짝 짓는다.', base: '장면 2개에 마음 카드를 짝 짓는다.', challenge: '장면 3개에 짝 짓고 한 장면의 까닭을 말한다.' },
        wrap: {
          teacher: '"도서관에서 조용히 했을 때 내 마음은 어땠을까요? 친구의 마음은요?" 장면마다 마음 카드를 짝 짓고 까닭을 한 명씩 말하게 한다. "규칙을 지키면 답답해요"라는 학생에게도 그 마음을 인정하고 "그래도 지켰더니 누가 편해졌을까요?"라고 묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'emotion', options: { mode: 'match', slots: [{ id: 's1', label: '도서관에서 조용히 함' }, { id: 's2', label: '급식실에서 줄을 섬' }], cards: ['뿌듯함', '편안함', '고마움', '화남'] }, prompt: '장면과 내 마음을 이어요.', target: { match: { s1: ['뿌듯함', '편안함'], s2: ['뿌듯함', '편안함'] } }, difficulty: 0.15,
              levels: { easy: { toolOptions: { slots: [{ id: 's1', label: '도서관에서 조용히 함' }] }, target: { match: { s1: ['뿌듯함', '편안함'] } } }, challenge: { toolOptions: { slots: [{ id: 's1', label: '도서관에서 조용히 함' }, { id: 's2', label: '급식실에서 줄을 섬' }, { id: 's3', label: '젖은 바닥을 알림' }] }, target: { match: { s1: ['뿌듯함', '편안함'], s2: ['뿌듯함', '편안함'], s3: ['뿌듯함', '고마움', '편안함'] } } } } },
            { type: 'choice', prompt: '체육관에서 운동화를 신는 까닭은?', options: ['멋있어 보이려고', '미끄러지지 않으려고', '선생님이 보셔서'], answer: 1, difficulty: 0.1, explain: '운동화는 미끄러지거나 발을 다치는 것을 막아요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '규칙에는 까닭이 있어요',
          items: [
            { type: 'table', prompt: '규칙과 까닭을 이어 써요.', columns: ['규칙', '까닭'], cells: [['도서관에서 조용히', ''], ['급식실에서 줄 서기', '']], answer: '읽는 친구를 위해, 부딪히지 않게' },
            { type: 'draw', prompt: '규칙을 지키는 우리 반 모습을 그려요.' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 3학년 · 날카로운 도구 바르게 쓰기 (별표 2 초등 생활안전 2)
  // ======================================================================================================
  {
    const C = T('g3-sharp-tools', 3);
    M.push(
      C({
        id: 'saf-life.e34.g3-sharp-tools.intro.grip-pick', type: 'intro', title: '조각칼 바르게 잡은 그림 고르기',
        method: '바르게 잡은 그림 고르기', tool: 'emotion', minutes: 6,
        levels: { easy: '그림 카드 2장 가운데 바른 것 하나를 함께 고른다.', base: '그림 카드 4장 가운데 바른 것 2장을 고르고 까닭을 말한다.', challenge: '틀린 그림 2장이 왜 위험한지 까닭까지 짝에게 말한다.' },
        intro: {
          teacher: '"조각칼을 이렇게 잡으면 칼날은 어디로 갈까요?" 그림 카드를 하나씩 가리키며 칼날이 나아가는 쪽에 무엇이 있는지 묻는다. 시연 단추로 바른 잡기 카드만 바구니에 담기는 것을 보인다. "몸 쪽으로 당겨야 힘이 잘 들어가요"라는 말이 나오면 "미끄러지면 칼날이 어디로 올까요?"라고 되묻는다.',
          student: '조각칼을 바르게 잡은 그림을 고르고, 다른 그림은 왜 위험한지 짝에게 말해 보아요.',
          demo: { tool: 'emotion', options: { mode: 'pick', basket: '바르게 잡았어요', cards: [{ id: 'out', text: '날이 바깥쪽' }, { id: 'front', text: '손이 날 앞에' }, { id: 'fix', text: '판을 받침에 고정' }, { id: 'pull', text: '몸 쪽으로 당김' }], shuffle: false }, sequence: [{ pick: ['out', 'fix'] }] },
          art: { draw: 'a paper child carving a paper wood block with a small carving knife pushing away from the body, the other hand resting behind the blade', banner: '칼날은 바깥쪽으로', extra: [{ motif: 'leaf', x: 300, y: 96 }] },
        },
      }),
      C({
        id: 'saf-life.e34.g3-sharp-tools.intro.hand-zone', type: 'intro', title: '칼날 앞에 두면 안 되는 몸 자리',
        method: '손을 두면 안 되는 자리', tool: 'body', minutes: 5,
        levels: { easy: '판을 잡은 손목 한 곳을 함께 짚는다.', base: '손목과 칼날이 향하기 쉬운 배, 두 곳을 짚는다.', challenge: '두 곳을 짚은 뒤 판을 잡은 손을 어디에 두어야 할지 몸으로 보여 준다.' },
        intro: {
          teacher: '"칼날이 미끄러지면 어디로 갈까요? 그 길에 우리 몸의 어디가 있나요?" 시연 단추로 종이 몸에서 판을 잡은 손목과 몸 쪽으로 당길 때 칼끝이 향하는 배가 차례로 짚이는 것을 보인다. "손가락만 조심하면 돼요"라는 말이 나오면 "칼을 몸 쪽으로 당기다 미끄러지면 어디에 닿을까요?"라고 되묻는다. 판을 잡은 손은 늘 칼날 뒤에 둔다는 것을 손으로 따라 하게 한다.',
          student: '칼날이 나아가는 쪽에 두면 위험한 몸 자리를 찾아 손으로 짚어 보아요.',
          demo: { tool: 'body', options: { mode: 'parts', parts: ['손목', '팔꿈치', '가슴', '배', '허벅지', '무릎'], names: true }, sequence: [{ parts: ['손목'] }, { parts: ['손목', '배'] }] },
          art: { draw: 'a paper body figure sitting at a desk with a paper carving board, a dotted arrow showing the blade path pointing away from the body', banner: '칼날 앞에는 손을 두지 않아요', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
      }),
      C({
        id: 'saf-life.e34.g3-sharp-tools.activity.carve-order', type: 'activity', title: '조각칼·가위 쓰는 차례',
        method: '조각칼 쓰는 차례', tool: 'story', minutes: 14,
        levels: { easy: '장면 3장, 놓으면 바로 맞는지 알려 준다.', base: '장면 4장을 차례대로 놓은 뒤 확인한다.', challenge: '틀린 장면 1장이 섞인 5장에서 그것을 빼고 4장을 놓는다.' },
        activity: {
          title: '조각칼·가위 쓰는 차례', tool: 'story',
          teacher: '"맨 먼저 할 일은 무엇일까요? 칼날을 대기 전에 꼭 해야 하는 것은요?" 카드를 다 놓으면 모둠이 차례대로 몸으로 따라 한다(판 잡기 → 손 뒤로 → 밀기 → 덮개). 덮개 씌우기를 빼먹는 학생에게 "잠깐 내려놓은 칼에 친구 손이 닿으면 어떻게 될까요?"라고 묻는다.',
          task: '장면 카드를 하는 차례대로 놓아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORD('조각칼로 판을 팔 때 차례로 놓아요.', {}, [{ id: 'fix', text: '판을 받침에 고정' }, { id: 'back', text: '잡은 손은 날 뒤에' }, { id: 'push', text: '날을 바깥쪽으로' }, { id: 'cap', text: '덮개 씌우기' }], 1, { id: 'pull', text: '몸 쪽으로 당기기', why: '몸 쪽으로 당기면 미끄러질 때 칼날이 내 몸으로 와요.' }, 0.15),
            ORD('가위로 오릴 때 차례로 놓아요.', {}, [{ id: 'carry', text: '날 끝을 아래로' }, { id: 'turn', text: '종이를 돌려 자르기' }, { id: 'close', text: '쓴 뒤 날 닫기' }, { id: 'box', text: '도구 통에 넣기' }], 0, { id: 'run', text: '가위 들고 뛰기', why: '가위를 들고 뛰다 넘어지면 날에 찔릴 수 있어요.' }, 0.2),
            ORD('친구에게 가위를 건넬 때 차례로 놓아요.', {}, [{ id: 'shut', text: '날을 닫아요' }, { id: 'hold', text: '날 쪽을 내가 쥐어요' }, { id: 'handle', text: '손잡이를 친구 쪽' }, { id: 'say', text: '"받아" 말하고 건넴' }], 3, { id: 'toss', text: '던져서 건네기', why: '던지면 날이 어디로 갈지 몰라 위험해요.' }, 0.25, { conclude: '칼날은 늘 바깥쪽, 잡은 손은 날 뒤에, 다 쓰면 덮개와 정리예요.' }),
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '조각칼은 칼날이 ___ 쪽으로 나아가게 밀어요.', answer: '바깥' }] },
      }),
      C({
        id: 'saf-life.e34.g3-sharp-tools.activity.tool-sort', type: 'activity', title: '바른 쓰기·위험한 쓰기',
        method: '바른 쓰기/위험한 쓰기', tool: 'mindmap', minutes: 13,
        levels: { easy: '카드 4장, 놓으면 바로 맞는지 알려 준다.', base: '카드 6장을 다 놓은 뒤 확인한다.', challenge: '헷갈리는 카드 2장이 더해진 8장을 나누고 까닭을 말한다.' },
        activity: {
          title: '도구 쓰는 장면 나누기', tool: 'mindmap',
          teacher: '"이 장면에서 칼날은 어디를 향하고 있나요?" 카드를 놓을 때마다 칼날이 향하는 곳을 손으로 가리키게 한다. "잠깐 놓을 때는 날을 열어 둬도 돼요"라는 학생에게 "옆 친구가 모르고 손을 짚으면 어떻게 될까요?"라고 묻는다.',
          task: '도구 쓰는 장면을 바른 쓰기와 위험한 쓰기로 나누어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORT('조각칼 쓰는 장면을 나누어요.', { topic: '조각칼' }, ['바른 쓰기', '위험한 쓰기'], [['날을 바깥쪽으로', '쓴 뒤 덮개', '받침 위에서 파기'], ['몸 쪽으로 당기기', '손이 날 앞에', '날 연 채 두기']], 2, [['손을 쉬며 파기'], ['칼 들고 돌아보기']], 0.15),
            SORT('가위 쓰는 장면을 나누어요.', { topic: '가위' }, ['바른 쓰기', '위험한 쓰기'], [['날 끝을 아래로', '손잡이로 건넴', '앉아서 오리기'], ['가위 들고 뛰기', '날을 벌려 둠', '입에 물고 다님']], 2, [['쓴 뒤 날 닫기'], ['장난으로 휘두름']], 0.2),
            SORT('커터칼 쓰는 장면을 나누어요.', { topic: '커터칼' }, ['바른 쓰기', '위험한 쓰기'], [['자를 대고 자름', '날 넣고 잠금', '받침판 위에서'], ['날 길게 빼기', '손바닥 위 자르기', '날 빼고 주머니에']], 2, [['어른과 함께 쓰기'], ['부러진 날 버림']], 0.25, { conclude: '바르게 쓰면 칼날이 나와 친구에게 오지 않아요. 다 쓰면 날을 넣고 정리해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '바른 쓰기면 ○, 위험하면 ×를 써요.', columns: ['장면', '○ / ×'], cells: [['날을 바깥쪽으로', ''], ['가위 들고 뛰기', ''], ['쓴 뒤 덮개', ''], ['날 길게 빼기', '']], answer: '○, ×, ○, ×' }] },
      }),
      C({
        id: 'saf-life.e34.g3-sharp-tools.activity.tool-dilemma', type: 'activity', title: '갈림길: 칼을 빌려 달래요',
        method: '갈림길: 친구가 칼을 빌려 달래요', tool: 'dilemma', minutes: 14,
        levels: { easy: '갈림 1번, 보기 2개 가운데 고르고 결과를 본다.', base: '갈림 2번(건네기 → 정리), 보기 3개씩 고른다.', challenge: '갈림 2번을 지난 뒤 근거 카드 3장 가운데 알맞은 것을 고른다.' },
        activity: {
          title: '갈림길: 날카로운 도구 건네기', tool: 'dilemma',
          teacher: '"이렇게 건네면 친구 손은 어디를 잡게 될까요?" 보기를 고를 때마다 결과를 소리 내어 읽고, 친구와 내가 어떻게 되는지 짝과 말하게 한다. "빨리 주려면 던지면 돼요"라는 학생에게 "가위가 날아가다 어디에 떨어질지 알 수 있을까요?"라고 묻는다.',
          task: '장면을 읽고 보기를 골라요. 결과를 보고 다음 장면에서 또 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL('친구가 가위를 빌려 달래요. 어떻게 건넬까요?', {
              text: '만들기 시간, 짝이 "가위 좀 빌려줘"라고 해요.', motif: 'leaf',
              choices: [
                { id: 'toss', text: '책상 너머로 던진다', result: '가위가 책상에서 미끄러져 바닥에 떨어졌어요.', impact: [{ who: '짝', text: '발에 떨어질 뻔했어요', tone: -1 }] },
                { id: 'handle', text: '날을 닫고 손잡이 쪽으로', result: '짝이 손잡이를 잡고 안전하게 받았어요.', ending: '날을 닫고 손잡이를 건네 짝이 다치지 않았어요.', next: {
                  text: '짝이 다 쓰고 가위를 돌려주려 해요. 나는 무엇을 말할까요?', choices: [
                    { id: 'same', text: '"나처럼 손잡이로 줘"', result: '짝도 날을 닫고 손잡이 쪽으로 돌려줬어요.', impact: [{ who: '짝과 나', text: '둘 다 안전해요', tone: 1 }], ending: '바르게 건네는 방법을 함께 지켰어요.' },
                    { id: 'open', text: '"그냥 아무렇게나 줘"', result: '짝이 날을 벌린 채 내밀었어요.', impact: [{ who: '나', text: '손을 베일 수 있어요', tone: -1 }] },
                    { id: 'grab', text: '먼저 날을 낚아챈다', result: '날 쪽을 잡아 손가락이 긁혔어요.', impact: [{ who: '나', text: '다쳤어요', tone: -1 }] },
                  ] } },
                { id: 'point', text: '날 끝을 짝 쪽으로', result: '짝이 날 끝을 피하다 손을 움찔했어요.', impact: [{ who: '짝', text: '찔릴 뻔했어요', tone: -1 }] },
              ] }, [['handle', 'same']],
            [{ id: 'handle', text: '손잡이를 잡아야 안 다쳐서' }, { id: 'both', text: '주는 사람도 받는 사람도 지켜서' }, { id: 'quick', text: '던지면 빨리 줄 수 있어서', why: '빨리 주는 것보다 다치지 않게 주는 것이 먼저예요.' }], ['handle', 'both'], 0.2),
            DIL('조각칼을 쓰다 화장실에 가요. 칼은 어떻게 할까요?', {
              text: '판화를 파다가 화장실에 가고 싶어졌어요.', motif: 'house',
              choices: [
                { id: 'cap', text: '덮개를 씌워 통에 둔다', result: '칼날이 덮개 안에 들어갔어요.', ending: '덮개를 씌워 둬서 아무도 다치지 않았어요.', next: {
                  text: '돌아와 보니 짝이 내 판을 구경하고 있어요.', choices: [
                    { id: 'tell', text: '"칼은 통에 있어" 알린다', result: '짝이 통을 건드리지 않고 비켜 줬어요.', impact: [{ who: '짝', text: '안전해요', tone: 1 }], ending: '칼이 어디 있는지 알려 서로 조심했어요.' },
                    { id: 'snatch', text: '판을 홱 잡아당긴다', result: '판이 미끄러져 통이 쏟아졌어요.', impact: [{ who: '짝과 나', text: '칼에 닿을 뻔했어요', tone: -1 }] },
                    { id: 'pocket', text: '칼을 주머니에 넣는다', result: '앉을 때 주머니 속 칼이 다리에 닿았어요.', impact: [{ who: '나', text: '찔릴 수 있어요', tone: -1 }] },
                  ] } },
                { id: 'leave', text: '날을 열어 책상에 둔다', result: '짝이 책상을 짚다 칼날에 손이 닿을 뻔했어요.', impact: [{ who: '짝', text: '베일 뻔했어요', tone: -1 }] },
                { id: 'carry', text: '칼을 들고 간다', result: '복도에서 친구와 부딪힐 뻔했어요.', impact: [{ who: '복도 친구', text: '다칠 수 있어요', tone: -1 }] },
              ] }, [['cap', 'tell']],
            [{ id: 'cover', text: '덮개가 칼날을 막아 줘서' }, { id: 'tell', text: '자리를 알려야 서로 조심해서' }, { id: 'short', text: '잠깐이니까 열어 둬도 돼서', why: '잠깐 사이에도 다칠 수 있어요. 덮개를 씌워요.' }], ['cover', 'tell'], 0.25),
            DIL('커터칼 날이 부러져 책상에 떨어졌어요.', {
              text: '커터칼로 자르다 날 끝이 똑 부러져 책상에 떨어졌어요.', motif: 'star',
              choices: [
                { id: 'hand', text: '손으로 집어 버린다', result: '작은 날 조각에 손끝이 긁혔어요.', impact: [{ who: '나', text: '다쳤어요', tone: -1 }] },
                { id: 'stop', text: '멈추고 선생님께 알린다', result: '선생님이 오셔서 날 조각을 살펴보셨어요.', ending: '멈추고 알려 날 조각을 안전하게 치웠어요.', next: {
                  text: '선생님이 "날 조각을 어떻게 치울까?"라고 물으세요.', choices: [
                    { id: 'tape', text: '테이프로 감싸 버린다', result: '날 조각이 테이프 안에 싸였어요.', impact: [{ who: '청소하는 사람', text: '다치지 않아요', tone: 1 }], ending: '날 조각을 감싸 버려 나중에 다칠 일도 막았어요.' },
                    { id: 'bin', text: '그냥 휴지통에 넣는다', result: '휴지통을 비우던 친구 손이 긁힐 뻔했어요.', impact: [{ who: '청소 당번', text: '다칠 수 있어요', tone: -1 }] },
                    { id: 'floor', text: '바닥에 털어 낸다', result: '바닥에 조각이 남았어요.', impact: [{ who: '친구들', text: '밟을 수 있어요', tone: -1 }] },
                  ] } },
                { id: 'keep', text: '모르는 척 계속 자른다', result: '조각이 종이에 섞여 짝 쪽으로 밀려갔어요.', impact: [{ who: '짝', text: '베일 수 있어요', tone: -1 }] },
              ] }, [['stop', 'tape']],
            [{ id: 'tiny', text: '작은 조각도 날카로워서' }, { id: 'later', text: '버린 뒤에 다른 사람도 다칠 수 있어서' }, { id: 'small', text: '작으니까 괜찮아서', why: '날 조각은 작아도 베일 만큼 날카로워요.' }], ['tiny', 'later'], 0.3, { conclude: '날카로운 도구는 날을 닫거나 덮어서 건네고 두고, 부러진 날은 알리고 감싸서 버려요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '가위를 친구에게 건네는 바른 방법은?', options: ['날 끝을 친구 쪽으로', '손잡이를 친구 쪽으로', '던져서 건네기'], answer: '손잡이를 친구 쪽으로' }] },
      }),
      C({
        id: 'saf-life.e34.g3-sharp-tools.activity.tool-check', type: 'activity', title: '도구 쓰기 전 점검표',
        method: '도구 쓰기 전 점검표', tool: 'kitchen', minutes: 14,
        levels: { easy: '점검 칸 2개 가운데 할 일만 표시한다.', base: '점검 칸 4개 가운데 할 일만 골라 표시한다.', challenge: '칸 4개를 표시한 뒤 짝과 점검표를 바꿔 서로의 책상을 확인한다.' },
        activity: {
          title: '쓰기 전 할 일만 표시하기', tool: 'kitchen',
          teacher: '"도구를 꺼내기 전에 내 책상에서 무엇을 살펴야 할까요?" 점검표의 칸을 하나씩 소리 내어 읽고 할 일에만 표시하게 한다. 하지 말아야 할 칸까지 모두 누르는 학생에게 "이 칸은 하면 안전해질까요, 위험해질까요?"라고 다시 읽게 한다. 다 하면 짝과 서로의 책상을 실제로 살펴본다.',
          task: '점검표에서 도구를 쓰기 전에 할 일만 골라 표시해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            CHK('조각칼을 쓰기 전에 할 일만 표시해요.', '조각칼 쓰기 전', [{ id: 'clear', text: '책상 위 정리', ok: true }, { id: 'run', text: '칼 들고 돌아다님', ok: false }, { id: 'board', text: '받침판 고정', ok: true }, { id: 'cap', text: '덮개 있는지 확인', ok: true }], [0, 1], 0.15),
            CHK('가위를 쓰기 전에 할 일만 표시해요.', '가위 쓰기 전', [{ id: 'sit', text: '자리에 앉기', ok: true }, { id: 'open', text: '날 벌려 흔들기', ok: false }, { id: 'space', text: '옆 친구와 거리', ok: true }, { id: 'mouth', text: '가위 입에 물기', ok: false }], [2, 3], 0.2),
            CHK('만들기를 마친 뒤 할 일만 표시해요.', '만들기 끝난 뒤', [{ id: 'close', text: '날 닫고 덮개', ok: true }, { id: 'box', text: '도구 통에 넣기', ok: true }, { id: 'pocket', text: '칼을 주머니에', ok: false }, { id: 'bits', text: '조각 쓸어 담기', ok: true }], [0, 2], 0.25, { conclude: '쓰기 전에 책상과 도구를 살피고, 다 쓰면 날을 닫아 제자리에 둬요.' }),
          ],
        },
        worksheet: { items: [{ type: 'check', prompt: '내 책상에서 확인한 것에 표시해요.', options: ['책상 위를 정리했어요', '덮개가 있어요', '받침판을 놓았어요'] }] },
      }),
      C({
        id: 'saf-life.e34.g3-sharp-tools.wrap.sharp-self', type: 'wrap', title: '도구 사용 스스로 점검',
        method: '도구 사용 스스로 점검', tool: 'timer', minutes: 7,
        levels: { easy: '점검 칸 2개에 표시한다.', base: '점검 칸 3개에 표시한다.', challenge: '점검 칸 4개에 표시하고 다음에 고칠 점 하나를 고른다.' },
        wrap: {
          teacher: '"오늘 칼날은 늘 바깥쪽을 향했나요? 다 쓰고 덮개를 씌웠나요?" 점검 칸을 함께 읽고 정직하게 표시하게 한다. 표시를 못 한 칸이 있는 학생에게 "다음 시간에 그 칸 하나만 지켜 볼까요?"라고 말해 고칠 점으로 잇는다.',
          exitTicket: [
            SELF('도구 사용 점검', ['칼날을 바깥쪽으로 했어요', '손잡이로 건넸어요', '다 쓰고 덮개를 씌웠어요', '책상을 정리했어요']),
            { type: 'choice', prompt: '조각칼을 잠깐 내려놓을 때는?', options: ['날을 연 채 둬요', '덮개를 씌워요', '주머니에 넣어요'], answer: 1, difficulty: 0.1, explain: '잠깐이라도 덮개를 씌워야 나와 친구가 다치지 않아요.' },
            { type: 'short', prompt: '다음 만들기 시간에 더 잘하고 싶은 점을 하나 써요.' },
          ],
        },
        worksheet: {
          title: '날카로운 도구 바르게 쓰기',
          items: [
            { type: 'check', prompt: '오늘 지킨 것에 표시해요.', options: ['칼날은 바깥쪽', '건넬 때는 손잡이 쪽', '쓰지 않을 때는 덮개'] },
            { type: 'draw', prompt: '가위를 손잡이 쪽으로 건네는 모습을 그려요.' },
          ],
          easy: { note: '칼날이 어디를 향하는지 먼저 봐요.', items: [{ type: 'choice', prompt: '칼날은 어느 쪽으로?', options: ['바깥쪽', '내 몸 쪽'], answer: '바깥쪽' }] },
        },
      }),
      C({
        id: 'saf-life.e34.g3-sharp-tools.wrap.sharp-tl', type: 'wrap', title: '도구 쓰기 전·중·후 정리',
        method: '도구 쓰기 전·중·후 정리', tool: 'timeline', minutes: 7,
        levels: { easy: '할 일 카드 3장을 쓰기 전·중·후에 하나씩 놓는다.', base: '카드 5장을 세 구간에 나눈다.', challenge: '카드 6장을 세 구간에 나눈다.' },
        wrap: {
          teacher: '"이 일은 도구를 쓰기 전에 할까요, 쓰는 중에 할까요, 다 쓴 뒤에 할까요?" 카드를 다 놓으면 쓰기 전 → 쓰는 중 → 쓴 뒤 차례로 한 목소리로 읽는다. "덮개는 쓰기 전에만 확인하면 돼요"라는 학생에게 "다 쓴 뒤 덮개를 안 씌우면 다음 사람은 어떻게 될까요?"라고 묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'timeline', options: { mode: 'sort', axis: ['먼저', '나중'], slots: [{ id: 'before', label: '쓰기 전' }, { id: 'during', label: '쓰는 중' }, { id: 'after', label: '쓴 뒤' }], cards: ['책상 정리', '날은 바깥쪽', '덮개 씌우기', '받침판 놓기', '도구 통에 넣기'] }, prompt: '할 일 카드를 쓰기 전·중·후에 나누어요.', target: { sort: { before: ['책상 정리', '받침판 놓기'], during: ['날은 바깥쪽'], after: ['덮개 씌우기', '도구 통에 넣기'] } }, difficulty: 0.15,
              levels: {
                easy: { prompt: '할 일 카드를 쓰기 전·중·후에 하나씩 놓아요.', toolOptions: { cards: ['책상 정리', '날은 바깥쪽', '덮개 씌우기'] }, target: { sort: { before: ['책상 정리'], during: ['날은 바깥쪽'], after: ['덮개 씌우기'] } } },
                challenge: { prompt: '할 일 카드 6장을 쓰기 전·중·후에 나누어요.', toolOptions: { cards: ['책상 정리', '날은 바깥쪽', '덮개 씌우기', '받침판 놓기', '손은 날 뒤에', '도구 통에 넣기'] }, target: { sort: { before: ['책상 정리', '받침판 놓기'], during: ['날은 바깥쪽', '손은 날 뒤에'], after: ['덮개 씌우기', '도구 통에 넣기'] } } },
              } },
            { type: 'choice', prompt: '가위를 들고 걸을 때 날 끝은?', options: ['위로 들어요', '아래로 향해요', '친구 쪽으로'], answer: 1, difficulty: 0.1, explain: '날 끝을 아래로 하면 부딪혀도 찔리지 않아요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '도구 쓰기 전·중·후',
          items: [
            { type: 'table', prompt: '언제 할 일인지 써요.', columns: ['할 일', '전 / 중 / 후'], cells: [['책상 정리', ''], ['날은 바깥쪽', ''], ['덮개 씌우기', '']], answer: '전, 중, 후' },
            { type: 'short', prompt: '도구를 다 쓴 뒤 꼭 할 일을 한 줄로 써요.' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 3학년 · 식중독을 막는 생활 습관 (별표 2 초등 생활안전 2 — 식품 안전)
  // ======================================================================================================
  {
    const C = T('g3-food-hygiene', 3);
    const WEEK = [['월', 18], ['화', 22], ['수', 15], ['목', 24], ['금', 20]];
    const PIC = { type: 'picture', title: '점심 전에 손을 씻은 친구(가상의 우리 반)', unit: '명', xLabel: '요일', yLabel: '친구 수', icons: [{ value: 10, name: '10명' }, { value: 1, name: '1명' }], icon: 'person' };
    M.push(
      C({
        id: 'saf-life.e34.g3-food-hygiene.intro.picnic-scene', type: 'intro', title: '소풍 장면에서 식중독 위험 찾기',
        method: '소풍 장면에서 위험 고르기', tool: 'emotion', minutes: 6,
        levels: { easy: '위험한 곳 2곳(햇볕 아래 도시락, 손 안 씻기)을 함께 고른다.', base: '위험한 곳 3곳을 스스로 고른다.', challenge: '3곳을 고르고 왜 식중독이 생길 수 있는지 까닭을 말한다.' },
        intro: {
          teacher: '"더운 날 소풍이에요. 이 그림에서 배탈이 날 수 있는 곳은 어디일까요?" 시연 단추로 위험한 장면 카드가 바구니에 담기는 것을 보이고, 장면마다 무엇이 문제인지 묻는다(기다릴 반응: "도시락이 햇볕에 있어요", "손을 안 씻었어요"). "냄새가 괜찮으면 먹어도 돼요"라는 말이 나오면 "눈에 안 보이는 작은 균도 냄새가 날까요?"라고 되묻는다.',
          student: '소풍 그림에서 배탈이 날 수 있는 장면을 고르고, 왜 그런지 짝에게 말해 보아요.',
          demo: { tool: 'emotion', options: { mode: 'pick', basket: '배탈 조심', cards: [{ id: 'sun', text: '햇볕 아래 도시락' }, { id: 'shade', text: '그늘의 보냉 가방' }, { id: 'hand', text: '손 안 씻고 먹기' }, { id: 'soap', text: '비누로 손 씻기' }, { id: 'old', text: '오래 둔 김밥' }], shuffle: false }, sequence: [{ pick: ['sun', 'hand', 'old'] }] },
          art: { draw: 'paper children on a picnic mat under a hot paper sun, one lunch box left in the sunlight and another kept in a cool bag under a tree', banner: '더운 날 도시락 조심', extra: [{ motif: 'sun', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '배탈이 났던 일을 묻지 않는다. 그림 속 장면으로만 이야기한다.',
      }),
      C({
        id: 'saf-life.e34.g3-food-hygiene.intro.wash-count', type: 'intro', title: '손 씻기 30초 따라 하기',
        method: '손 씻기 30초', tool: 'timer', minutes: 5,
        levels: { easy: '손 씻기 동작 카드 3장을 차례대로 함께 따라 한다.', base: '동작 카드 4장을 맞추고 30초 타이머에 맞춰 따라 한다.', challenge: '섞인 동작 카드 5장을 차례대로 맞추고 타이머에 맞춰 따라 한다.' },
        intro: {
          teacher: '"손을 씻을 때 손바닥만 비비면 될까요?" 시연 단추로 동작 카드가 차례대로 놓이고 30초 타이머가 맞춰지는 것을 보인 뒤, 반 전체가 자리에서 비누칠하는 흉내를 내며 타이머에 맞춰 따라 한다. "물만 묻히면 깨끗해요"라는 말이 나오면 "손톱 밑과 손가락 사이에도 물만 닿으면 될까요?"라고 되묻는다.',
          student: '선생님을 따라 손바닥, 손등, 손가락 사이, 손톱 밑을 차례로 비비는 흉내를 내 보아요.',
          demo: { tool: 'timer', options: { title: '손 씻기 30초', plan: { work: 10, rest: 0, rounds: 1 }, cards: ['손톱 밑', '손바닥', '손가락 사이', '손등'] }, sequence: [{ order: ['손바닥', '손등', '손가락 사이', '손톱 밑'] }, { plan: { work: 30, rest: 0, rounds: 1 } }] },
          art: { draw: 'paper hands covered in soap bubbles under a paper faucet, a small paper sand timer beside the sink', banner: '비누로 30초', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
      }),
      C({
        id: 'saf-life.e34.g3-food-hygiene.activity.habit-sort', type: 'activity', title: '식중독 막는 습관 나누기',
        method: '막는 습관/부르는 습관', tool: 'mindmap', minutes: 14,
        levels: { easy: '카드 4장, 놓으면 바로 맞는지 알려 준다.', base: '카드 6장을 다 놓은 뒤 확인한다.', challenge: '헷갈리는 카드 2장이 더해진 8장을 나누고 까닭을 말한다.' },
        activity: {
          title: '식중독 막는 습관 나누기', tool: 'mindmap',
          teacher: '"이 습관은 식중독을 막을까요, 부를까요?" 카드를 놓을 때마다 "왜냐하면"으로 까닭을 말하게 한다. "더운 날 김밥을 가방에 오래 둬도 돼요"라는 학생에게 "따뜻한 곳에 오래 두면 음식 속 균은 어떻게 될까요?"라고 묻는다. 손 씻기·익혀 먹기·차갑게 두기 세 가지를 짚는다.',
          task: '습관 카드를 식중독을 막는 습관과 부르는 습관으로 나누어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORT('먹기 전 습관을 나누어요.', { topic: '먹기 전' }, ['막는 습관', '부르는 습관'], [['비누로 손 씻기', '과일 씻어 먹기', '수저 깨끗이'], ['흙 만지고 바로 먹기', '떨어진 음식 먹기', '먹던 숟가락 돌려씀']], 2, [['손톱 짧게 깎기'], ['물로만 살짝 헹굼']], 0.15),
            SORT('음식 두는 습관을 나누어요.', { topic: '음식 보관' }, ['막는 습관', '부르는 습관'], [['우유는 냉장고에', '남은 음식 덮기', '도시락은 그늘에'], ['실온에 오래 두기', '햇볕 아래 도시락', '김밥 가방에 종일']], 2, [['산 날짜 확인'], ['데운 것 또 식힘']], 0.2),
            SORT('먹는 습관을 나누어요.', { topic: '먹을 때' }, ['막는 습관', '부르는 습관'], [['고기는 푹 익혀', '상한 것은 버림', '물은 끓인 것'], ['덜 익힌 고기', '냄새만 맡고 먹음', '모르는 물 마심']], 2, [['어른께 묻고 먹음'], ['색이 변한 빵']], 0.25, { conclude: '손 씻기, 익혀 먹기, 차갑게 두기, 상한 것 버리기가 식중독을 막아요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '막으면 ○, 부르면 ×를 써요.', columns: ['습관', '○ / ×'], cells: [['비누로 손 씻기', ''], ['덜 익힌 고기', ''], ['우유는 냉장고에', ''], ['김밥 가방에 종일', '']], answer: '○, ×, ○, ×' }] },
      }),
      C({
        id: 'saf-life.e34.g3-food-hygiene.activity.lunch-plan', type: 'activity', title: '도시락·간식 챙기는 차례',
        method: '도시락 보관 순서', tool: 'kitchen', minutes: 13,
        levels: { easy: '카드 3장, 놓으면 바로 맞는지 알려 준다.', base: '카드 4장을 차례대로 놓은 뒤 확인한다.', challenge: '함정 카드 1장이 섞인 5장에서 그것을 빼고 4장을 놓는다.' },
        activity: {
          title: '도시락·간식 챙기는 차례', tool: 'kitchen',
          teacher: '"도시락을 싼 다음에는 무엇을 해야 할까요?" 카드를 다 놓으면 차례대로 읽으며 그 일이 왜 필요한지 짝과 말하게 한다. "그늘에 두기"를 맨 끝에 놓는 학생에게 "먹기 전까지 도시락은 어디에 있어야 할까요?"라고 묻는다.',
          task: '카드를 하는 차례대로 놓아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORD('소풍 도시락을 챙기는 차례로 놓아요.', { autoMotif: false }, [{ id: 'pack', text: '아침에 도시락 싸기' }, { id: 'cool', text: '보냉 가방에 넣기' }, { id: 'shade', text: '그늘에 두기' }, { id: 'eat', text: '점심에 바로 먹기' }], 1, { id: 'sun', text: '햇볕 아래 두기', why: '햇볕 아래 두면 도시락이 따뜻해져 균이 늘어요.' }, 0.15),
            ORD('간식을 먹는 차례로 놓아요.', { autoMotif: false }, [{ id: 'wash', text: '비누로 손 씻기' }, { id: 'look', text: '포장·날짜 보기' }, { id: 'snack', text: '자리에 앉아 먹기' }, { id: 'throw', text: '남은 것 버리기' }], 1, { id: 'keep', text: '먹던 것 다음 날 먹기', why: '한 번 열어 먹던 음식은 오래 두지 않아요.' }, 0.2),
            ORD('사 온 우유를 다루는 차례로 놓아요.', { autoMotif: false }, [{ id: 'home', text: '집에 오면 바로' }, { id: 'fridge', text: '냉장고에 넣기' }, { id: 'check', text: '마실 때 냄새·날짜' }, { id: 'close', text: '뚜껑 닫아 다시 넣기' }], 0, { id: 'table', text: '식탁에 하루 두기', why: '우유는 차갑게 두지 않으면 금방 상해요.' }, 0.25, { conclude: '음식은 깨끗한 손으로, 차갑게 두었다가, 오래 두지 말고 먹어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '더운 날 도시락은 어디에 둘까요?', options: ['햇볕 드는 창가', '그늘의 보냉 가방', '뜨거운 차 안'], answer: '그늘의 보냉 가방' }] },
      }),
      C({
        id: 'saf-life.e34.g3-food-hygiene.activity.food-dilemma', type: 'activity', title: '갈림길: 냄새가 이상한 우유',
        method: '갈림길: 냄새가 이상한 우유', tool: 'dilemma', minutes: 14,
        levels: { easy: '갈림 1번, 보기 2개 가운데 고르고 결과를 본다.', base: '갈림 2번, 보기 3개씩 고르며 결과를 따라간다.', challenge: '갈림 2번을 지난 뒤 근거 카드 3장 가운데 알맞은 것을 고른다.' },
        activity: {
          title: '갈림길: 먹어도 될까?', tool: 'dilemma',
          teacher: '"아깝다고 먹으면 어떻게 될까요? 버리기 전에 누구에게 물어볼 수 있을까요?" 보기를 고를 때마다 결과를 읽고 내 몸에 어떤 일이 생기는지 말하게 한다. "냄새만 괜찮으면 괜찮아요"라는 학생에게 "냄새가 괜찮아도 날짜가 지났거나 오래 밖에 있었다면요?"라고 묻는다.',
          task: '장면을 읽고 보기를 골라요. 결과를 보고 다음 장면에서 또 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL('우유에서 이상한 냄새가 나요. 어떻게 할까요?', {
              text: '학교에서 가져온 우유를 열었더니 시큼한 냄새가 나요.', motif: 'cloud',
              choices: [
                { id: 'drink', text: '조금만 마셔 본다', result: '맛이 이상하고 배가 살살 아파 왔어요.', impact: [{ who: '나', text: '배탈이 날 수 있어요', tone: -1 }] },
                { id: 'ask', text: '마시지 않고 어른께 묻는다', result: '어른이 날짜를 보시더니 상한 우유라고 하셨어요.', ending: '마시지 않고 물어서 배탈을 막았어요.', next: {
                  text: '상한 우유를 어떻게 할까요?', choices: [
                    { id: 'throw', text: '버리고 손을 씻는다', result: '우유를 버리고 손을 깨끗이 씻었어요.', impact: [{ who: '나', text: '안전해요', tone: 1 }], ending: '상한 것은 버리고 손을 씻어 마무리했어요.' },
                    { id: 'give', text: '동생에게 준다', result: '동생이 모르고 마실 뻔했어요.', impact: [{ who: '동생', text: '배탈이 날 수 있어요', tone: -1 }] },
                    { id: 'fridge', text: '냉장고에 다시 넣는다', result: '다른 가족이 모르고 꺼낼 수 있어요.', impact: [{ who: '가족', text: '마실 수 있어요', tone: -1 }] },
                  ] } },
                { id: 'mix', text: '초코 가루를 타서 마신다', result: '냄새는 가려졌지만 우유는 그대로 상해 있어요.', impact: [{ who: '나', text: '배탈이 날 수 있어요', tone: -1 }] },
              ] }, [['ask', 'throw']],
            [{ id: 'smell', text: '냄새가 이상하면 상했을 수 있어서' }, { id: 'adult', text: '어른이 날짜를 확인해 줄 수 있어서' }, { id: 'waste', text: '버리면 아까우니까', why: '아까워도 상한 음식은 몸을 아프게 해요.' }], ['smell', 'adult'], 0.2),
            DIL('가방에 둔 김밥을 저녁에 찾았어요.', {
              text: '더운 날, 아침에 싼 김밥이 가방에 그대로 남아 있어요.', motif: 'sun',
              choices: [
                { id: 'eat', text: '배고프니까 먹는다', result: '먹고 나서 속이 메스꺼워졌어요.', impact: [{ who: '나', text: '배탈이 날 수 있어요', tone: -1 }] },
                { id: 'show', text: '먹지 않고 어른께 보여 드린다', result: '어른이 오래 두어 먹으면 안 된다고 하셨어요.', ending: '먹지 않고 보여 드려 배탈을 막았어요.', next: {
                  text: '다음 소풍에서는 어떻게 할까요?', choices: [
                    { id: 'cool', text: '보냉 가방에 넣어 간다', result: '도시락이 점심까지 시원했어요.', impact: [{ who: '나', text: '안전하게 먹었어요', tone: 1 }], ending: '차갑게 두는 습관으로 다음 일도 막았어요.' },
                    { id: 'same', text: '똑같이 가방에 넣는다', result: '또 따뜻한 곳에 오래 있게 돼요.', impact: [{ who: '나', text: '같은 일이 생겨요', tone: -1 }] },
                    { id: 'sunny', text: '햇볕에 말려 둔다', result: '햇볕 아래에서 더 따뜻해졌어요.', impact: [{ who: '나', text: '더 위험해요', tone: -1 }] },
                  ] } },
                { id: 'friend', text: '친구에게 나눠 준다', result: '친구가 먹고 배를 문질렀어요.', impact: [{ who: '친구', text: '배탈이 날 수 있어요', tone: -1 }] },
              ] }, [['show', 'cool']],
            [{ id: 'warm', text: '따뜻한 곳에 오래 두면 균이 늘어서' }, { id: 'next', text: '다음엔 차갑게 두면 막을 수 있어서' }, { id: 'look', text: '겉모습이 멀쩡하니까', why: '겉이 멀쩡해도 속은 상했을 수 있어요.' }], ['warm', 'next'], 0.25),
            DIL('흙놀이를 하다가 간식 시간이 됐어요.', {
              text: '모래 놀이터에서 놀다가 친구가 과자를 나눠 줬어요.', motif: 'flower',
              choices: [
                { id: 'now', text: '바로 집어 먹는다', result: '손에 묻은 모래와 균이 과자에 묻었어요.', impact: [{ who: '나', text: '배가 아플 수 있어요', tone: -1 }] },
                { id: 'wash', text: '먼저 손을 씻으러 간다', result: '수돗가에 가서 손을 적셨어요.', ending: '먼저 손을 씻고 깨끗한 손으로 먹었어요.', next: {
                  text: '수돗가에 비누가 있어요. 어떻게 씻을까요?', choices: [
                    { id: 'soap', text: '비누로 구석구석 30초', result: '손톱 밑까지 깨끗해졌어요.', impact: [{ who: '나', text: '깨끗한 손이에요', tone: 1 }], ending: '비누로 꼼꼼히 씻은 손으로 간식을 먹었어요.' },
                    { id: 'rinse', text: '물만 살짝 묻힌다', result: '손가락 사이에 모래가 그대로 남았어요.', impact: [{ who: '나', text: '균이 남아요', tone: -1 }] },
                    { id: 'shirt', text: '옷에 쓱 닦는다', result: '옷도 더러워지고 손도 그대로예요.', impact: [{ who: '나', text: '균이 남아요', tone: -1 }] },
                  ] } },
                { id: 'tissue', text: '마른 휴지로 털고 먹는다', result: '모래는 털렸지만 손은 그대로예요.', impact: [{ who: '나', text: '균이 남아요', tone: -1 }] },
              ] }, [['wash', 'soap']],
            [{ id: 'germ', text: '눈에 안 보이는 균이 손에 있어서' }, { id: 'soap', text: '비누로 씻어야 균이 잘 씻겨서' }, { id: 'clean', text: '손이 깨끗해 보여서', why: '깨끗해 보여도 균은 눈에 보이지 않아요.' }], ['germ', 'soap'], 0.3, { conclude: '이상하면 먹지 말고 어른께 묻고, 먹기 전에는 비누로 손을 씻어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '냄새가 이상한 음식은 먹지 말고 ___께 물어요.', answer: '어른' }] },
      }),
      C({
        id: 'saf-life.e34.g3-food-hygiene.activity.wash-chart', type: 'activity', title: '우리 반 손 씻기 그림그래프',
        method: '우리 반 손 씻기 그림그래프', tool: 'chart', minutes: 14,
        levels: { easy: '요일 3개, 첫 요일 그림은 미리 놓여 있다.', base: '요일 5개의 그림을 모두 그려 완성한다.', challenge: '요일 5개를 완성하고, 가장 많은 날·적은 날을 고른 뒤 까닭을 짝과 말한다.' },
        activity: {
          title: '우리 반 손 씻기 그림그래프', tool: 'chart',
          teacher: '"큰 그림 하나는 몇 명일까요? 18명이면 큰 그림과 작은 그림을 몇 개씩 놓을까요?" 표의 수를 소리 내어 읽고 그림을 놓게 한다. 작은 그림만 18개 놓는 학생에게 "큰 그림 하나가 10명이에요. 더 쉽게 나타낼 수 있을까요?"라고 묻는다. 그래프를 다 그리면 손을 덜 씻은 날 우리 반이 무엇을 해 볼 수 있을지 이야기한다.',
          task: '표를 보고 그림그래프를 완성한 뒤, 그래프를 읽고 물음에 답해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '표를 보고 손 씻기 그림그래프를 완성해요.', toolOptions: Object.assign({}, PIC, { mode: 'build', data: WEEK }), target: { build: true }, difficulty: 0.2,
              levels: { easy: { prompt: '표를 보고 요일 3개의 그림그래프를 완성해요.', toolOptions: { data: WEEK.slice(0, 3), given: [0] }, target: { build: true } } } },
            { prompt: '그래프에서 손을 씻은 친구가 가장 많은 날은?', toolOptions: Object.assign({}, PIC, { mode: 'read', data: WEEK, question: '가장 많은 날은 무슨 요일인가요?', choices: ['월', '화', '수', '목', '금'] }), target: { pick: 3 }, difficulty: 0.15 },
            { prompt: '그래프에서 손을 씻은 친구가 가장 적은 날은?', toolOptions: Object.assign({}, PIC, { mode: 'read', data: WEEK, question: '가장 적은 날은 무슨 요일인가요?', choices: ['월', '화', '수', '목', '금'] }), target: { pick: 2 }, difficulty: 0.2, conclude: '그래프를 보면 손 씻기를 덜 한 날이 보여요. 그날 무엇을 바꿀지 함께 정해요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '표를 보고 빈칸을 채워요.', columns: ['요일', '손 씻은 친구(명)'], cells: [['월', '18'], ['화', ''], ['수', '15']], answer: '22' }] },
      }),
      C({
        id: 'saf-life.e34.g3-food-hygiene.wrap.hygiene-check', type: 'wrap', title: '식중독 예방 스스로 점검',
        method: '식중독 예방 스스로 점검', tool: 'timer', minutes: 7,
        levels: { easy: '점검 칸 2개에 표시한다.', base: '점검 칸 3개에 표시한다.', challenge: '점검 칸 4개에 표시한다.' },
        wrap: {
          teacher: '"오늘 배운 네 가지 가운데 내가 이미 잘하는 것은 무엇이고, 더 해야 할 것은 무엇인가요?" 점검 칸을 함께 읽고 표시하게 한다. 출구 2번에서 "냄새만 맡아요"를 고른 학생에게 "냄새가 괜찮아도 오래 밖에 있었다면 어떻게 할까요?"라고 되묻는다.',
          exitTicket: [
            SELF('식중독 예방 점검', ['먹기 전에 손을 씻어요', '고기는 익혀 먹어요', '음식은 차갑게 둬요', '이상하면 어른께 물어요']),
            { type: 'choice', prompt: '오래 밖에 둔 음식을 찾았을 때는?', options: ['냄새만 맡고 먹어요', '어른께 보여 드려요', '친구에게 줘요'], answer: 1, difficulty: 0.1, explain: '오래 둔 음식은 먹지 말고 어른께 보여 드려요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '식중독을 막아요',
          items: [
            { type: 'check', prompt: '집에서도 지킬 것에 표시해요.', options: ['먹기 전 비누로 손 씻기', '고기는 푹 익히기', '우유는 냉장고에'] },
            { type: 'draw', prompt: '비누로 손을 씻는 내 모습을 그려요.' },
          ],
          easy: { note: '손 씻기, 익혀 먹기, 차갑게 두기를 떠올려요.', items: [{ type: 'choice', prompt: '먹기 전에 할 일은?', options: ['손 씻기', '그냥 먹기'], answer: '손 씻기' }] },
        },
      }),
      C({
        id: 'saf-life.e34.g3-food-hygiene.wrap.hygiene-story', type: 'wrap', title: '친구에게 알려 주는 말',
        method: '친구에게 알려 주는 말', tool: 'story', minutes: 7,
        levels: { easy: '말풍선 빈칸 1개를 채운다.', base: '말풍선 빈칸 2개를 채운다.', challenge: '말풍선 빈칸 3개를 채운다.' },
        wrap: {
          teacher: '"친구가 손을 안 씻고 간식을 먹으려 해요. 뭐라고 말해 줄까요?" 말풍선을 채운 뒤 짝에게 실제로 말하듯 읽어 주게 한다. 놀리듯 말하는 학생에게 "친구가 기분 좋게 들으려면 어떻게 말할까요?"라고 묻고 부드러운 말투로 다시 해 보게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'story', options: { mode: 'fill', slots: [{ id: 'b1', who: '나', label: '먹기 전에 손을 ___.' }, { id: 'b2', who: '나', label: '고기는 ___ 먹자.' }], cards: ['비누로 씻자', '푹 익혀서', '그늘에', '덜 익혀서'] }, prompt: '친구에게 알려 줄 말을 완성해요.', target: { fill: { b1: '비누로 씻자', b2: '푹 익혀서' } }, difficulty: 0.15,
              levels: {
                easy: { prompt: '친구에게 알려 줄 말 한 칸을 채워요.', toolOptions: { slots: [{ id: 'b1', who: '나', label: '먹기 전에 손을 ___.' }], cards: ['비누로 씻자', '물만 묻히자'] }, target: { fill: { b1: '비누로 씻자' } } },
                challenge: { prompt: '친구에게 알려 줄 말 세 칸을 채워요.', toolOptions: { slots: [{ id: 'b1', who: '나', label: '먹기 전에 손을 ___.' }, { id: 'b2', who: '나', label: '고기는 ___ 먹자.' }, { id: 'b3', who: '나', label: '더운 날 도시락은 ___ 두자.' }], cards: ['비누로 씻자', '푹 익혀서', '그늘에', '덜 익혀서', '햇볕에'] }, target: { fill: { b1: '비누로 씻자', b2: '푹 익혀서', b3: '그늘에' } } },
              } },
            { type: 'choice', prompt: '친구에게 알려 줄 때 알맞은 말투는?', options: ['"더러워!" 놀리기', '"같이 씻자" 권하기', '모른 척하기'], answer: 1, difficulty: 0.1, explain: '함께하자고 권하면 친구도 기분 좋게 따라 해요.' },
            { type: 'short', prompt: '가족에게 알려 줄 식중독 예방 말을 한 줄로 써요.' },
          ],
        },
        worksheet: {
          title: '먹기 전에 알려 주기',
          items: [
            { type: 'blank', prompt: '말풍선을 채워요.', text: '"먹기 전에 손을 ___ 씻자."', answer: '비누로' },
            { type: 'draw', prompt: '친구에게 손 씻기를 권하는 모습을 그려요.' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 3학년 · 과학실 실험 안전 수칙 (별표 2 초등 생활안전 3)
  // ======================================================================================================
  {
    const C = T('g3-science-room', 3);
    const LAB = {
      title: '우리 학교 과학실', grid: [6, 4],
      regions: [
        { name: '출입문', cells: [[0, 0]] }, { name: '선생님 책상', cells: [[1, 0], [2, 0], [3, 0]] }, { name: '소화기', cells: [[4, 0]] }, { name: '개수대', cells: [[5, 0], [5, 1]] },
        { name: '1모둠 실험대', cells: [[0, 1], [1, 1]] }, { name: '2모둠 실험대', cells: [[3, 1], [4, 1]] }, { name: '통로', cells: [[2, 1], [2, 2], [2, 3]] },
        { name: '3모둠 실험대', cells: [[0, 2], [1, 2]] }, { name: '4모둠 실험대', cells: [[3, 2], [4, 2]] }, { name: '재료장', cells: [[5, 2], [5, 3]] }, { name: '가방 두는 곳', cells: [[0, 3], [1, 3], [3, 3], [4, 3]] },
      ],
    };
    const TL = { mode: 'sort', axis: ['먼저', '나중'] };
    const PHASE = [{ id: 'before', label: '실험 전' }, { id: 'during', label: '실험 중' }, { id: 'after', label: '실험 후' }];
    M.push(
      C({
        id: 'saf-life.e34.g3-science-room.intro.lab-scene', type: 'intro', title: '과학실 그림에서 위험한 행동',
        method: '과학실 장면에서 위험 고르기', tool: 'emotion', minutes: 6,
        levels: { easy: '위험한 행동 2곳(맛보기, 뛰기)을 함께 고른다.', base: '위험한 행동 3곳을 스스로 고른다.', challenge: '위험한 행동 4곳을 고르고 짝에게 까닭을 말한다.' },
        intro: {
          teacher: '"과학실 그림에서 다칠 수 있는 행동을 찾아볼까요?" 시연 단추로 위험한 행동 카드가 바구니에 담기는 것을 보이고, 장면마다 무엇이 위험한지 묻는다. "조금 맛보는 건 괜찮아요"라는 말이 나오면 "실험 재료가 먹는 것인지 우리가 알 수 있을까요?"라고 되묻는다. 냄새는 코를 대지 않고 손으로 부쳐 맡는다는 것도 짚는다.',
          student: '과학실 그림에서 위험한 행동을 고르고, 왜 위험한지 짝에게 말해 보아요.',
          demo: { tool: 'emotion', options: { mode: 'pick', basket: '위험해요', cards: [{ id: 'taste', text: '재료 맛보기' }, { id: 'listen', text: '설명 듣기' }, { id: 'run', text: '과학실에서 뛰기' }, { id: 'bag', text: '실험대 위 가방' }, { id: 'nose', text: '코 대고 냄새' }, { id: 'tidy', text: '정리된 책상' }], shuffle: false }, sequence: [{ pick: ['taste', 'run', 'bag', 'nose'] }] },
          art: { draw: 'a paper science room with paper beakers on tables, one child running between tables and a schoolbag left on a lab table, a teacher explaining at the front', banner: '과학실에서는 조심조심', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '맛보기·냄새 맡기는 "하는 시늉"도 시키지 않는다. 그림 속 행동으로만 다룬다.',
      }),
      C({
        id: 'saf-life.e34.g3-science-room.intro.lab-map', type: 'intro', title: '과학실 지도에서 소화기·개수대',
        method: '과학실 지도에서 소화기·개수대 찾기', tool: 'map', minutes: 5,
        levels: { easy: '소화기 한 곳에 핀이 꽂히는 것을 함께 본다.', base: '소화기·개수대 두 곳을 보고 우리 과학실에서는 어디인지 말한다.', challenge: '소화기·개수대·출입문 세 곳을 보고 우리 과학실과 견주어 말한다.' },
        intro: {
          teacher: '"불이 나거나 손에 무엇이 묻으면 과학실 어디로 가야 할까요?" 시연 단추로 소화기·개수대·출입문에 핀이 차례로 꽂히는 것을 보이고, 우리 과학실에서는 그 자리가 어디인지 손으로 가리키게 한다. "소화기는 아무나 꺼내 써요"라는 말이 나오면 "불이 나면 우리가 먼저 할 일은 무엇일까요? 선생님께 알리고 출입문으로 나가요."라고 바로잡는다.',
          student: '지도에서 소화기·개수대·출입문을 보고, 우리 과학실에서는 어디에 있는지 짝과 말해 보아요.',
          demo: { tool: 'map', options: LAB, sequence: [{ pin: [4, 0] }, { pin: [5, 0] }, { pin: [0, 0] }] },
          art: { draw: 'a paper cut floor plan of a science room with a red paper fire extinguisher, a sink and an exit door marked with small paper pins', banner: '비상 물품은 어디에?', extra: [{ motif: 'leaf', x: 300, y: 222 }] },
        },
      }),
      C({
        id: 'saf-life.e34.g3-science-room.activity.lab-tl', type: 'activity', title: '실험 전·중·후 수칙 나누기',
        method: '실험 전·중·후 수칙 나누기', tool: 'timeline', minutes: 14,
        levels: { easy: '카드 4장, 놓으면 바로 맞는지 알려 준다.', base: '카드 6장을 세 구간에 나눈다.', challenge: '카드 8장을 세 구간에 나눈다.' },
        activity: {
          title: '실험 전·중·후 수칙 나누기', tool: 'timeline',
          teacher: '"이 수칙은 실험을 시작하기 전에 지킬까요, 하는 동안 지킬까요, 끝난 뒤에 지킬까요?" 카드를 다 놓으면 구간마다 소리 내어 읽게 한다. "설명은 나중에 들어도 먼저 해 볼래요"라는 학생에게 "무엇을 섞는지 모르고 섞으면 어떻게 될까요?"라고 묻는다. 끝난 뒤 손 씻기를 빼먹지 않도록 짚는다.',
          task: '수칙 카드를 실험 전·실험 중·실험 후 구간에 나누어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORT('물에 녹이는 실험의 수칙을 나누어요.', TL, PHASE, [['설명 끝까지 듣기', '가방은 뒤에'], ['맛보지 않기', '뛰지 않기'], ['손 씻기', '쓴 그릇 정리']], [2, 1, 1], [['머리 묶기'], [], ['책상 닦기']], 0.15),
            SORT('알코올램프 실험의 수칙을 나누어요.', TL, PHASE, [['둘레 비우기', '불 끄는 법 듣기'], ['불 옆에서 장난 안 함', '불 켠 채 자리 안 뜸'], ['식은 뒤 치우기', '남은 재료 반납']], [1, 2, 1], [['소매 걷기'], ['몸 숙이지 않기'], []], 0.2),
            SORT('냄새를 살피는 실험의 수칙을 나누어요.', TL, PHASE, [['창문 열기', '재료 이름 듣기'], ['손으로 부쳐 맡기', '코 대지 않기'], ['뚜껑 닫기', '손 씻기 다시']], [1, 1, 2], [[], ['이상하면 멈춤'], ['환기 계속하기']], 0.25, { conclude: '실험 전에는 듣고 비우고, 실험 중에는 맛보거나 뛰지 않고, 끝나면 정리하고 손을 씻어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '언제 지킬 수칙인지 써요.', columns: ['수칙', '전 / 중 / 후'], cells: [['설명 끝까지 듣기', ''], ['맛보지 않기', ''], ['손 씻기', '']], answer: '전, 중, 후' }] },
      }),
      C({
        id: 'saf-life.e34.g3-science-room.activity.lab-sort', type: 'activity', title: '과학실 장면 가려내기',
        method: '과학실 장면 가려내기', tool: 'mindmap', minutes: 13,
        levels: { easy: '카드 4장, 놓으면 바로 맞는지 알려 준다.', base: '카드 6장을 다 놓은 뒤 확인한다.', challenge: '헷갈리는 카드 2장이 더해진 8장을 나눈다.' },
        activity: {
          title: '지켜요·안 돼요 가려내기', tool: 'mindmap',
          teacher: '"이 친구는 수칙을 지키고 있나요?" 카드를 놓은 뒤 "안 돼요" 카드마다 어떻게 바꾸면 되는지 짝에게 말하게 한다. "손으로 부쳐 냄새 맡기"를 안 돼요에 두는 학생에게 "코를 바로 대는 것과 무엇이 다를까요?"라고 묻는다.',
          task: '과학실 장면 카드를 지켜요와 안 돼요로 나누어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORT('실험을 시작할 때 장면을 나누어요.', { topic: '실험 시작' }, ['지켜요', '안 돼요'], [['설명 다 듣고 시작', '긴 머리 묶기', '가방은 사물함'], ['먼저 섞어 보기', '실험대에 가방', '재료 들고 장난']], 2, [['보안경 쓰기'], ['남 것 먼저 만짐']], 0.15),
            SORT('실험하는 동안 장면을 나누어요.', { topic: '실험 중' }, ['지켜요', '안 돼요'], [['손으로 부쳐 냄새', '쏟으면 알리기', '자리에 앉아 관찰'], ['재료 맛보기', '과학실에서 뛰기', '코 대고 냄새']], 2, [['장갑 낀 채 하기'], ['몰래 더 넣어 봄']], 0.2),
            SORT('실험을 마칠 때 장면을 나누어요.', { topic: '실험 끝' }, ['지켜요', '안 돼요'], [['손 깨끗이 씻기', '그릇 제자리', '책상 닦기'], ['남은 재료 가져감', '깨진 유리 줍기', '정리 없이 나감']], 2, [['재료장 닫기'], ['물에 그냥 버림']], 0.25, { conclude: '과학실에서는 설명대로, 맛보지 않고, 끝나면 정리와 손 씻기예요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '실험 재료의 냄새를 맡는 바른 방법은?', options: ['코를 바로 대요', '손으로 부쳐 맡아요', '조금 맛을 봐요'], answer: '손으로 부쳐 맡아요' }] },
      }),
      C({
        id: 'saf-life.e34.g3-science-room.activity.lab-check', type: 'activity', title: '모둠 실험 준비 점검',
        method: '실험 준비 점검표', tool: 'kitchen', minutes: 14,
        levels: { easy: '점검 칸 2개 가운데 할 일만 표시한다.', base: '점검 칸 4개 가운데 할 일만 골라 표시한다.', challenge: '칸 4개를 표시한 뒤 짝과 서로의 자리를 확인한다.' },
        activity: {
          title: '실험 준비 할 일만 표시하기', tool: 'kitchen',
          teacher: '"실험을 시작하기 전에 우리 모둠 실험대는 준비가 되었나요?" 점검표를 한 칸씩 읽고, 모둠원이 실제로 확인한 뒤에 표시하게 한다. 해서는 안 되는 칸까지 누르는 학생에게 "이 칸대로 하면 더 안전해질까요?"라고 다시 읽게 한다.',
          task: '점검표에서 실험 전에 할 일만 골라 표시해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            CHK('실험을 시작하기 전에 할 일만 표시해요.', '실험 전 점검', [{ id: 'hair', text: '긴 머리 묶기', ok: true }, { id: 'bag', text: '가방 실험대에', ok: false }, { id: 'clear', text: '실험대 비우기', ok: true }, { id: 'listen', text: '설명 끝까지 듣기', ok: true }], [0, 1], 0.15),
            CHK('불을 쓰는 실험 전에 할 일만 표시해요.', '불 쓰기 전 점검', [{ id: 'paper', text: '종이 치우기', ok: true }, { id: 'sleeve', text: '소매 걷기', ok: true }, { id: 'try', text: '먼저 불 켜 보기', ok: false }, { id: 'lean', text: '얼굴 가까이 대기', ok: false }], [1, 2], 0.2),
            CHK('실험을 마친 뒤 할 일만 표시해요.', '실험 후 점검', [{ id: 'wash', text: '비누로 손 씻기', ok: true }, { id: 'take', text: '남은 재료 가져가기', ok: false }, { id: 'return', text: '기구 제자리', ok: true }, { id: 'wipe', text: '실험대 닦기', ok: true }], [0, 1], 0.25, { conclude: '준비 점검은 모둠원 모두가 함께 확인하고, 끝나면 정리 점검까지 해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'check', prompt: '실험 전에 확인한 것에 표시해요.', options: ['머리를 묶었어요', '실험대를 비웠어요', '설명을 끝까지 들었어요'] }] },
      }),
      C({
        id: 'saf-life.e34.g3-science-room.activity.spill-dilemma', type: 'activity', title: '갈림길: 물감 물이 엎질러졌어요',
        method: '갈림길: 물감 물이 엎질러졌어요', tool: 'dilemma', minutes: 14,
        levels: { easy: '갈림 1번, 보기 2개 가운데 고르고 결과를 본다.', base: '갈림 2번(알리기 → 다음 행동), 보기 3개씩 고른다.', challenge: '갈림 2번을 지난 뒤 근거 카드 3장 가운데 알맞은 것을 고른다.' },
        activity: {
          title: '갈림길: 과학실에서 쏟았을 때', tool: 'dilemma',
          teacher: '"쏟거나 깨뜨렸을 때 맨 먼저 할 일은 무엇일까요?" 학생이 보기를 고를 때마다 결과를 소리 내어 읽게 한다. 혼나는 것이 무서워 숨기는 쪽을 고른 학생에게 "선생님은 쏟은 것보다 알리지 않아 다치는 것을 더 걱정해요. 알리면 무엇이 좋아질까요?"라고 묻는다. 깨진 유리는 손으로 줍지 않는다는 점을 짚는다.',
          task: '장면을 읽고 보기를 골라요. 결과를 보고 다음 장면에서 또 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL('실험대에 물감 물이 엎질러졌어요.', {
              text: '색깔 섞기 실험 중에 물감 물 컵이 넘어져 실험대에 쏟아졌어요.', motif: 'rain',
              choices: [
                { id: 'hide', text: '책으로 덮어 숨긴다', result: '물이 책 밑으로 번져 바닥까지 흘렀어요.', impact: [{ who: '지나가는 친구', text: '미끄러질 수 있어요', tone: -1 }] },
                { id: 'tell', text: '멈추고 선생님께 알린다', result: '선생님이 걸레를 가져다주셨어요.', ending: '멈추고 알려서 쏟은 것을 안전하게 치웠어요.', next: {
                  text: '바닥에도 몇 방울 떨어졌어요. 이제 어떻게 할까요?', choices: [
                    { id: 'wipe', text: '닦고 둘레에 알린다', result: '친구들이 젖은 곳을 피해 다녔어요.', impact: [{ who: '모둠 친구들', text: '안전해요', tone: 1 }], ending: '닦고 알려서 넘어질 일도 막았어요.' },
                    { id: 'run', text: '걸레 가지러 뛰어간다', result: '뛰다가 젖은 곳을 밟았어요.', impact: [{ who: '나', text: '미끄러질 수 있어요', tone: -1 }] },
                    { id: 'go', text: '실험을 계속한다', result: '바닥 물방울이 그대로 남았어요.', impact: [{ who: '친구들', text: '밟을 수 있어요', tone: -1 }] },
                  ] } },
                { id: 'sleeve', text: '옷소매로 문지른다', result: '소매가 물감에 젖고 손에도 묻었어요.', impact: [{ who: '나', text: '옷과 손이 더러워졌어요', tone: -1 }] },
              ] }, [['tell', 'wipe']],
            [{ id: 'safe', text: '알려야 안전하게 치울 수 있어서' }, { id: 'others', text: '젖은 곳을 친구도 알아야 해서' }, { id: 'scold', text: '혼나지 않으려고', why: '숨기면 다른 친구가 다칠 수 있어요. 알리는 것이 먼저예요.' }], ['safe', 'others'], 0.2),
            DIL('비커가 떨어져 깨졌어요.', {
              text: '실험대 끝에 둔 비커가 떨어져 바닥에서 깨졌어요.', motif: 'star',
              choices: [
                { id: 'pick', text: '손으로 조각을 줍는다', result: '작은 유리 조각에 손끝이 베였어요.', impact: [{ who: '나', text: '다쳤어요', tone: -1 }] },
                { id: 'stop', text: '그 자리에서 멈추고 알린다', result: '선생님이 오셔서 둘레를 비키게 하셨어요.', ending: '멈추고 알려 유리 조각에 아무도 다치지 않았어요.', next: {
                  text: '선생님이 치우는 동안 나는 무엇을 할까요?', choices: [
                    { id: 'away', text: '떨어져서 기다린다', result: '선생님이 조각을 다 치우셨어요.', impact: [{ who: '모두', text: '안전해요', tone: 1 }], ending: '떨어져 기다려 치우는 일을 도왔어요.' },
                    { id: 'look', text: '가까이 가서 구경한다', result: '발밑의 작은 조각을 밟을 뻔했어요.', impact: [{ who: '나', text: '다칠 수 있어요', tone: -1 }] },
                    { id: 'kick', text: '발로 조각을 모은다', result: '신발 옆으로 조각이 튀었어요.', impact: [{ who: '옆 친구', text: '다칠 수 있어요', tone: -1 }] },
                  ] } },
                { id: 'leave', text: '모른 척 자리로 간다', result: '다른 친구가 모르고 그쪽으로 걸어왔어요.', impact: [{ who: '다른 친구', text: '밟을 수 있어요', tone: -1 }] },
              ] }, [['stop', 'away']],
            [{ id: 'sharp', text: '깨진 유리는 작아도 베여서' }, { id: 'adult', text: '어른이 도구로 치워야 해서' }, { id: 'fast', text: '빨리 치우면 들키지 않아서', why: '들키지 않는 것보다 다치지 않는 것이 먼저예요.' }], ['sharp', 'adult'], 0.25),
            DIL('실험 재료가 손에 묻었어요.', {
              text: '가루를 덜다가 손등에 하얀 가루가 묻었어요.', motif: 'snow',
              choices: [
                { id: 'lick', text: '무엇인지 핥아 본다', result: '입에 이상한 맛이 퍼졌어요.', impact: [{ who: '나', text: '몸이 아플 수 있어요', tone: -1 }] },
                { id: 'tell', text: '선생님께 손을 보여 드린다', result: '선생님이 무슨 가루인지 알려 주셨어요.', ending: '알려서 무엇이 묻었는지 알고 안전하게 씻었어요.', next: {
                  text: '선생님이 "씻어야 해"라고 하셨어요. 어떻게 할까요?', choices: [
                    { id: 'sink', text: '개수대에서 물로 씻는다', result: '가루가 깨끗이 씻겨 나갔어요.', impact: [{ who: '나', text: '안전해요', tone: 1 }], ending: '알리고 개수대에서 씻어 마무리했어요.' },
                    { id: 'rub', text: '옷에 문질러 턴다', result: '가루가 옷에도 묻었어요.', impact: [{ who: '나', text: '옷에 남아요', tone: -1 }] },
                    { id: 'eye', text: '눈을 비비며 간다', result: '손에 남은 가루가 눈에 닿을 뻔했어요.', impact: [{ who: '나', text: '눈이 다칠 수 있어요', tone: -1 }] },
                  ] } },
                { id: 'friend', text: '짝 손에 묻혀 장난친다', result: '짝도 손에 가루가 묻었어요.', impact: [{ who: '짝', text: '함께 위험해요', tone: -1 }] },
              ] }, [['tell', 'sink']],
            [{ id: 'unknown', text: '무엇인지 모르는 재료라서' }, { id: 'adult', text: '선생님이 씻는 법을 알려 주셔서' }, { id: 'tiny', text: '조금이니까 괜찮아서', why: '조금이라도 모르는 재료는 맛보거나 비비지 않아요.' }], ['unknown', 'adult'], 0.3, { conclude: '과학실에서 쏟거나 깨지거나 묻으면 멈추고 선생님께 알리는 것이 먼저예요.' }),
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '비커가 깨지면 손으로 줍지 않고 선생님께 ___.', answer: '알려요' }] },
      }),
      C({
        id: 'saf-life.e34.g3-science-room.wrap.lab-self', type: 'wrap', title: '실험 안전 스스로 점검',
        method: '실험 안전 스스로 점검', tool: 'timer', minutes: 7,
        levels: { easy: '점검 칸 2개에 표시한다.', base: '점검 칸 3개에 표시한다.', challenge: '점검 칸 4개에 표시한다.' },
        wrap: {
          teacher: '"오늘 실험을 마치고 정리와 손 씻기까지 했나요?" 점검 칸을 함께 읽고 표시하게 한다. 출구 2번에서 "조금 맛봐요"를 고른 학생에게 "실험 재료는 먹는 것이 아니에요. 궁금하면 누구에게 물어볼까요?"라고 되묻는다.',
          exitTicket: [
            SELF('실험 안전 점검', ['설명을 끝까지 들었어요', '맛보거나 뛰지 않았어요', '쓴 기구를 정리했어요', '비누로 손을 씻었어요']),
            { type: 'choice', prompt: '실험 재료가 무엇인지 궁금할 때는?', options: ['조금 맛봐요', '선생님께 여쭤봐요', '코를 대고 맡아요'], answer: 1, difficulty: 0.1, explain: '실험 재료는 맛보거나 코를 대지 않고 선생님께 여쭤봐요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '과학실 안전 수칙',
          items: [
            { type: 'check', prompt: '오늘 지킨 수칙에 표시해요.', options: ['설명 듣고 시작', '맛보지 않기', '정리하고 손 씻기'] },
            { type: 'short', prompt: '다음 실험에서 꼭 지킬 수칙을 한 줄로 써요.' },
          ],
          easy: { note: '실험 전·중·후를 차례로 떠올려요.', items: [{ type: 'choice', prompt: '실험이 끝나면?', options: ['손 씻기', '그냥 나가기'], answer: '손 씻기' }] },
        },
      }),
      C({
        id: 'saf-life.e34.g3-science-room.wrap.lab-promise', type: 'wrap', title: '우리 반 과학실 약속 말풍선',
        method: '과학실 약속 말풍선', tool: 'story', minutes: 7,
        levels: { easy: '말풍선 빈칸 1개를 채운다.', base: '말풍선 빈칸 2개를 채운다.', challenge: '말풍선 빈칸 3개를 채운다.' },
        wrap: {
          teacher: '"우리 반 과학실 약속을 함께 만들어 볼까요?" 말풍선을 채운 뒤 반 전체가 한 목소리로 약속을 읽는다. "재미있게 섞어요"처럼 수칙과 다른 말을 넣으려는 학생에게 "그 말대로 하면 누가 다칠 수 있을까요?"라고 묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'story', options: { mode: 'fill', slots: [{ id: 'p1', who: '우리 반', label: '설명을 ___ 시작해요.' }, { id: 'p2', who: '우리 반', label: '재료는 ___ 않아요.' }], cards: ['끝까지 듣고', '맛보지', '먼저 섞고', '정리하고'] }, prompt: '과학실 약속 말풍선을 완성해요.', target: { fill: { p1: '끝까지 듣고', p2: '맛보지' } }, difficulty: 0.15,
              levels: {
                easy: { prompt: '과학실 약속 한 칸을 채워요.', toolOptions: { slots: [{ id: 'p1', who: '우리 반', label: '설명을 ___ 시작해요.' }], cards: ['끝까지 듣고', '먼저 섞고'] }, target: { fill: { p1: '끝까지 듣고' } } },
                challenge: { prompt: '과학실 약속 세 칸을 채워요.', toolOptions: { slots: [{ id: 'p1', who: '우리 반', label: '설명을 ___ 시작해요.' }, { id: 'p2', who: '우리 반', label: '재료는 ___ 않아요.' }, { id: 'p3', who: '우리 반', label: '끝나면 ___ 손을 씻어요.' }], cards: ['끝까지 듣고', '맛보지', '먼저 섞고', '정리하고', '그냥 두고'] }, target: { fill: { p1: '끝까지 듣고', p2: '맛보지', p3: '정리하고' } } },
              } },
            { type: 'choice', prompt: '과학실에서 이동할 때는?', options: ['뛰어서 빨리', '천천히 걸어서', '재료 들고 장난'], answer: 1, difficulty: 0.1, explain: '과학실에는 깨지는 기구가 많아 천천히 걸어요.' },
            { type: 'short', prompt: '우리 반 과학실 약속을 하나 더 만들어 써요.' },
          ],
        },
        worksheet: {
          title: '우리 반 과학실 약속',
          items: [
            { type: 'blank', prompt: '약속을 완성해요.', text: '실험 재료는 ___ 않아요.', answer: '맛보지' },
            { type: 'draw', prompt: '과학실 약속을 지키는 우리 모둠을 그려요.' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 3학년 · 체육 시간과 산·들 체험 학습 (별표 2 초등 생활안전 4)
  // ======================================================================================================
  {
    const C = T('g3-pe-field', 3);
    const HILL = {
      title: '체험 학습 산길', grid: [6, 4],
      regions: [
        { name: '입구', cells: [[0, 3]] }, { name: '정해진 길', cells: [[1, 3], [2, 3], [2, 2], [3, 2], [3, 1], [4, 1]] }, { name: '모일 곳(쉼터)', cells: [[5, 1], [5, 0]] },
        { name: '숲속(길 밖)', cells: [[0, 0], [1, 0], [0, 1], [1, 1], [0, 2], [1, 2], [2, 0], [2, 1]] }, { name: '벼랑', cells: [[3, 0], [4, 0]] },
        { name: '물가', cells: [[3, 3], [4, 3], [5, 3]] }, { name: '벌집 있는 나무', cells: [[4, 2], [5, 2]] },
      ],
    };
    const BODY = { mode: 'parts', parts: ['목', '어깨', '팔꿈치', '손목', '허리', '무릎', '발목', '허벅지'] };
    M.push(
      C({
        id: 'saf-life.e34.g3-pe-field.intro.warmup-order', type: 'intro', title: '준비운동 차례 따라 하기',
        method: '준비운동 순서 따라 하기', tool: 'timer', minutes: 6,
        levels: { easy: '준비운동 카드 3장(목·어깨·무릎)을 차례대로 함께 따라 한다.', base: '카드 4장을 맞추고 구간 타이머에 맞춰 따라 한다.', challenge: '섞인 카드 4장을 스스로 차례대로 맞춘 뒤 타이머에 맞춰 따라 한다.' },
        intro: {
          teacher: '"체육 시간에 바로 달리면 몸은 어떻게 될까요?" 시연 단추로 준비운동 카드가 위에서 아래로(목 → 어깨 → 무릎 → 발목) 놓이고 타이머가 맞춰지는 것을 보인 뒤, 반 전체가 자리에서 일어나 타이머에 맞춰 따라 한다. "준비운동은 시간이 아까워요"라는 말이 나오면 "몸을 풀지 않고 뛰면 어디를 다치기 쉬울까요?"라고 되묻는다.',
          student: '목부터 발목까지 위에서 아래로 차례대로 몸을 풀어 보아요.',
          demo: { tool: 'timer', options: { title: '준비운동', plan: { work: 10, rest: 5, rounds: 2 }, cards: ['발목', '무릎', '목', '어깨'] }, sequence: [{ order: ['목', '어깨', '무릎', '발목'] }, { plan: { work: 20, rest: 5, rounds: 4 } }] },
          art: { draw: 'paper children stretching their necks and shoulders on a paper playground before running, a paper whistle and stopwatch nearby', banner: '위에서 아래로 몸 풀기', extra: [{ motif: 'sun', x: 300, y: 96, color: 'buttercup' }] },
        },
      }),
      C({
        id: 'saf-life.e34.g3-pe-field.intro.field-scene', type: 'intro', title: '산길 그림에서 위험한 곳',
        method: '산길 장면에서 위험 고르기', tool: 'emotion', minutes: 5,
        levels: { easy: '위험한 곳 2곳(길 벗어나기, 벌집)을 함께 고른다.', base: '위험한 곳 3곳을 스스로 고른다.', challenge: '3곳을 고르고 왜 위험한지 까닭을 말한다.' },
        intro: {
          teacher: '"체험 학습으로 산에 왔어요. 이 그림에서 위험한 곳은 어디일까요?" 시연 단추로 위험한 장면이 바구니에 담기는 것을 보이고 장면마다 까닭을 묻는다. "모르는 열매는 맛만 봐도 돼요"라는 말이 나오면 "먹어도 되는 열매인지 우리가 어떻게 알 수 있을까요?"라고 되묻는다.',
          student: '산길 그림에서 위험한 곳을 고르고, 왜 위험한지 짝에게 말해 보아요.',
          demo: { tool: 'emotion', options: { mode: 'pick', basket: '위험해요', cards: [{ id: 'off', text: '길 벗어나기' }, { id: 'path', text: '정해진 길 걷기' }, { id: 'bee', text: '벌집 가까이 가기' }, { id: 'hat', text: '모자 쓰기' }, { id: 'berry', text: '모르는 열매 먹기' }], shuffle: false }, sequence: [{ pick: ['off', 'bee', 'berry'] }] },
          art: { draw: 'a paper mountain trail with a marked path, a paper beehive hanging on a tree and red paper berries on a bush beside the trail', banner: '산에서는 정해진 길로', extra: [{ motif: 'leaf', x: 300, y: 222 }] },
        },
      }),
      C({
        id: 'saf-life.e34.g3-pe-field.activity.ground-check', type: 'activity', title: '운동장 안전 점검표',
        method: '운동장 안전 점검표', tool: 'kitchen', minutes: 14,
        levels: { easy: '점검 칸 2개 가운데 할 일만 표시한다.', base: '점검 칸 4개 가운데 할 일만 골라 표시한다.', challenge: '칸 4개를 표시한 뒤 위험한 것을 어떻게 고칠지 짝에게 말한다.' },
        activity: {
          title: '운동장 살펴 할 일만 표시하기', tool: 'kitchen',
          teacher: '"체육을 시작하기 전에 운동장에서 무엇을 살펴야 할까요?" 점검표를 한 칸씩 읽고 할 일에만 표시하게 한다. "고장 난 기구는 내가 고쳐요"라는 칸을 누르는 학생에게 "고장 난 것을 보면 누구에게 알려야 할까요?"라고 묻는다. 위험한 것은 혼자 치우기보다 선생님께 알린다는 점을 짚는다.',
          task: '점검표에서 체육 시간 전에 할 일만 골라 표시해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            CHK('운동장 바닥에서 살필 것만 표시해요.', '운동장 바닥', [{ id: 'stone', text: '돌·유리 있는지 보기', ok: true }, { id: 'puddle', text: '물웅덩이 살피기', ok: true }, { id: 'bare', text: '맨발로 뛰어 보기', ok: false }, { id: 'tell', text: '위험하면 알리기', ok: true }], [0, 2], 0.15),
            CHK('놀이기구에서 살필 것만 표시해요.', '놀이기구', [{ id: 'broken', text: '부서진 곳 보기', ok: true }, { id: 'fix', text: '고장 나면 내가 고침', ok: false }, { id: 'wet', text: '젖었는지 보기', ok: true }, { id: 'swing', text: '꼬인 그네 타 보기', ok: false }], [0, 1], 0.2),
            CHK('내 몸과 옷에서 살필 것만 표시해요.', '내 몸과 옷', [{ id: 'lace', text: '신발 끈 묶기', ok: true }, { id: 'slipper', text: '슬리퍼 신기', ok: false }, { id: 'pocket', text: '주머니 속 연필 빼기', ok: true }, { id: 'warm', text: '준비운동 하기', ok: true }], [0, 1], 0.25, { conclude: '체육 전에는 바닥·기구·내 몸을 살피고, 위험한 것은 선생님께 알려요.' }),
          ],
        },
        worksheet: { items: [{ type: 'check', prompt: '체육 시간 전에 살핀 것에 표시해요.', options: ['바닥에 돌이 없어요', '신발 끈을 묶었어요', '주머니를 비웠어요'] }] },
      }),
      C({
        id: 'saf-life.e34.g3-pe-field.activity.body-warm', type: 'activity', title: '준비운동이 필요한 몸 부위',
        method: '준비운동이 필요한 몸 부위', tool: 'body', minutes: 13,
        levels: { easy: '고른 부위 이름이 바로 보이고, 첫 문항은 두 곳만 고른다.', base: '네 곳을 고르고, 종목마다 많이 쓰는 부위를 고른다.', challenge: '이름 없이 고르고, 고른 부위를 푸는 동작을 짝에게 보여 준다.' },
        activity: {
          title: '풀어야 할 몸 부위 고르기', tool: 'body',
          teacher: '"이 운동을 할 때 우리 몸의 어디를 가장 많이 쓸까요?" 부위를 고른 뒤 그 부위를 실제로 돌려 보게 한다. 줄넘기 문항에서 어깨만 고르는 학생에게 "줄을 넘을 때 땅에 닿으며 힘을 받는 곳은 어디일까요?"라고 묻는다. 많이 쓰는 곳일수록 먼저 풀어 둔다는 점을 짚는다.',
          task: '종이 몸에서 준비운동으로 풀어야 할 부위를 눌러 골라요.', levels: { easy: { names: true }, base: {}, challenge: {} },
          items: [
            { prompt: '체육 시간 전에 풀 곳 네 군데를 골라요.', toolOptions: BODY, target: { parts: ['목', '어깨', '무릎', '발목'] }, difficulty: 0.15,
              levels: { easy: { prompt: '달리기 전에 꼭 풀 다리 두 곳을 골라요.', target: { parts: ['무릎', '발목'] } } } },
            { prompt: '줄넘기 전에 많이 쓰는 곳 세 군데를 골라요.', toolOptions: BODY, target: { parts: ['손목', '무릎', '발목'] }, difficulty: 0.2 },
            { prompt: '공 던지기 전에 많이 쓰는 곳 세 군데를 골라요.', toolOptions: BODY, target: { parts: ['어깨', '팔꿈치', '손목'] }, difficulty: 0.25, conclude: '운동마다 많이 쓰는 곳이 달라요. 그곳을 먼저 충분히 풀어요.' },
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '달리기 전에 꼭 풀어야 할 곳은?', options: ['무릎과 발목', '귀와 코', '눈'], answer: '무릎과 발목' }] },
      }),
      C({
        id: 'saf-life.e34.g3-pe-field.activity.trail-map', type: 'activity', title: '체험 학습 지도에서 정해진 길',
        method: '체험 학습 지도에서 정해진 길', tool: 'map', minutes: 14,
        levels: { easy: '핀을 놓으면 그 칸의 이름이 바로 보인다.', base: '지도의 이름을 보고 알맞은 곳에 핀을 꽂는다.', challenge: '핀을 꽂은 뒤 그곳을 고른 까닭도 보기에서 고른다(피할 곳 포함).' },
        activity: {
          title: '산길 지도에 핀 꽂기', tool: 'map',
          teacher: '"우리는 입구에서 어디로 걸어가야 할까요?" 핀을 꽂기 전에 손가락으로 정해진 길을 따라가 보게 한다. 숲속 지름길에 핀을 꽂는 학생에게 "길이 아닌 곳으로 가면 선생님이 우리를 찾을 수 있을까요?"라고 묻는다. 벼랑과 물가는 가까이 가지 않는 곳이라는 것을 짚는다.',
          task: '산길 지도를 보고 물음에 맞는 곳에 핀을 꽂아요.', levels: { easy: { readout: true }, base: {}, challenge: {} },
          items: [
            PIN(HILL, '우리 반이 걸어가야 할 곳에 핀을 꽂아요.', '정해진 길', { q: '왜 이곳으로 걸을까요?', choices: ['빨리 가려고', '안전하게 정해진 곳이라서', '꽃이 많아서'], answer: 1 }, 0.15),
            PIN(HILL, '다 같이 모일 곳에 핀을 꽂아요.', '모일 곳(쉼터)', { q: '왜 미리 모일 곳을 정할까요?', choices: ['떨어져도 다시 만나려고', '놀려고', '숨으려고'], answer: 0 }, 0.2),
            PIN(HILL, '발이 미끄러지면 떨어질 수 있는 곳에 핀을 꽂아요.', '벼랑', { q: '이곳에서는 어떻게 할까요?', choices: ['끝까지 가 본다', '가까이 가지 않는다', '뛰어넘는다'], answer: 1 }, 0.2),
            PIN(HILL, '벌이 모여 있어 멀리 돌아갈 곳에 핀을 꽂아요.', '벌집 있는 나무', { q: '이곳 옆을 지날 때는?', choices: ['막대로 건드린다', '조용히 멀리 지나간다', '소리 지른다'], answer: 1 }, 0.25, { conclude: '산에서는 정해진 길로 걷고, 벼랑·물가·벌집은 멀리 해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '산에서 길을 걸을 때 바른 것은?', options: ['지름길로 숲에 들어가요', '정해진 길로 걸어요', '혼자 앞서가요'], answer: '정해진 길로 걸어요' }] },
      }),
      C({
        id: 'saf-life.e34.g3-pe-field.activity.bee-dilemma', type: 'activity', title: '갈림길: 벌이 날아왔어요',
        method: '갈림길: 벌이 날아왔어요', tool: 'dilemma', minutes: 14,
        levels: { easy: '갈림 1번, 보기 2개 가운데 고르고 결과를 본다.', base: '갈림 2번, 보기 3개씩 고르며 결과를 따라간다.', challenge: '갈림 2번을 지난 뒤 근거 카드 3장 가운데 알맞은 것을 고른다.' },
        activity: {
          title: '갈림길: 산과 들에서 만난 일', tool: 'dilemma',
          teacher: '"벌이 다가오면 우리 몸은 어떻게 하고 싶어질까요? 그렇게 하면 벌은 어떻게 할까요?" 보기를 고르고 결과를 읽은 뒤, 바른 행동을 자리에서 몸으로 따라 해 본다(팔 내리고 천천히 물러나기). 팔을 휘젓는 쪽을 고른 학생을 나무라지 않고 "놀라면 그럴 수 있어요. 그다음엔 어떻게 해 볼까요?"라고 되물어 다른 길로 가 보게 한다.',
          task: '장면을 읽고 보기를 골라요. 결과를 보고 다음 장면에서 또 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL('도시락을 먹는데 벌이 날아왔어요.', {
              text: '쉼터에서 도시락을 먹는데 벌 한 마리가 내 앞으로 날아왔어요.', motif: 'flower',
              choices: [
                { id: 'swat', text: '팔을 휘저어 쫓는다', result: '벌이 놀라 더 가까이 날아들었어요.', impact: [{ who: '나', text: '쏘일 수 있어요', tone: -1 }] },
                { id: 'slow', text: '팔을 내리고 천천히 물러난다', result: '벌이 도시락 둘레를 돌다 멀어졌어요.', ending: '천천히 물러나 벌을 자극하지 않았어요.', next: {
                  text: '벌이 아직 도시락 근처에 있어요. 친구들이 모여들어요.', choices: [
                    { id: 'tell', text: '선생님께 알리고 비킨다', result: '선생님이 자리를 옮기자고 하셨어요.', impact: [{ who: '친구들', text: '쏘이지 않았어요', tone: 1 }], ending: '알리고 함께 비켜서 모두 안전했어요.' },
                    { id: 'catch', text: '친구와 잡아 보려 한다', result: '벌이 화가 난 듯 윙윙거렸어요.', impact: [{ who: '친구와 나', text: '쏘일 수 있어요', tone: -1 }] },
                    { id: 'yell', text: '소리 지르며 뛴다', result: '친구들도 놀라 이리저리 뛰었어요.', impact: [{ who: '친구들', text: '넘어질 수 있어요', tone: -1 }] },
                  ] } },
                { id: 'hit', text: '도시락 뚜껑으로 친다', result: '벌을 맞히지 못하고 벌이 덤벼들었어요.', impact: [{ who: '나', text: '쏘일 수 있어요', tone: -1 }] },
              ] }, [['slow', 'tell']],
            [{ id: 'calm', text: '휘저으면 벌이 더 놀라서' }, { id: 'adult', text: '선생님이 자리를 옮겨 줄 수 있어서' }, { id: 'brave', text: '잡으면 용감해 보여서', why: '용감해 보이는 것보다 쏘이지 않는 것이 먼저예요.' }], ['calm', 'adult'], 0.2),
            DIL('산길 옆 풀숲에서 뱀이 보여요.', {
              text: '정해진 길을 걷는데 옆 풀숲에 뱀이 보여요.', motif: 'leaf',
              choices: [
                { id: 'poke', text: '나뭇가지로 건드린다', result: '뱀이 몸을 세우며 다가왔어요.', impact: [{ who: '나', text: '물릴 수 있어요', tone: -1 }] },
                { id: 'back', text: '멈추고 천천히 뒤로 물러난다', result: '뱀과 거리가 멀어졌어요.', ending: '건드리지 않고 물러나 안전했어요.', next: {
                  text: '뒤에서 친구들이 그쪽으로 걸어오고 있어요.', choices: [
                    { id: 'warn', text: '멈추게 하고 선생님께 알린다', result: '선생님이 다른 길로 안내하셨어요.', impact: [{ who: '친구들', text: '안전해요', tone: 1 }], ending: '친구들에게도 알리고 어른이 길을 바꿨어요.' },
                    { id: 'photo', text: '가까이 가서 사진 찍자고 한다', result: '친구들이 풀숲으로 몰려갔어요.', impact: [{ who: '친구들', text: '물릴 수 있어요', tone: -1 }] },
                    { id: 'silent', text: '말없이 혼자 지나간다', result: '뒤 친구가 모르고 풀숲을 밟을 뻔했어요.', impact: [{ who: '뒤 친구', text: '위험해요', tone: -1 }] },
                  ] } },
                { id: 'run', text: '풀숲으로 뛰어 도망간다', result: '길 밖 풀숲으로 들어가 길을 잃을 뻔했어요.', impact: [{ who: '나', text: '길을 잃을 수 있어요', tone: -1 }] },
              ] }, [['back', 'warn']],
            [{ id: 'touch', text: '건드리지 않아야 덤비지 않아서' }, { id: 'share', text: '뒤 친구들도 알아야 해서' }, { id: 'curious', text: '가까이 보면 재미있어서', why: '궁금해도 야생 동물은 멀리서 보고 알려요.' }], ['touch', 'share'], 0.25),
            DIL('친구가 모르는 열매를 먹자고 해요.', {
              text: '쉬는 동안 친구가 빨간 열매를 따며 "이거 먹어 보자"고 해요.', motif: 'tree',
              choices: [
                { id: 'eat', text: '하나만 맛본다', result: '입안이 따끔하고 혀가 얼얼해졌어요.', impact: [{ who: '나', text: '몸이 아플 수 있어요', tone: -1 }] },
                { id: 'no', text: '"먹지 말자" 말한다', result: '친구가 손에 든 열매를 내려다봤어요.', ending: '모르는 열매는 먹지 않아 몸을 지켰어요.', next: {
                  text: '친구가 "맛있어 보이는데"라며 망설여요.', choices: [
                    { id: 'teacher', text: '선생님께 같이 여쭤본다', result: '선생님이 먹으면 안 되는 열매라고 하셨어요.', impact: [{ who: '친구', text: '안전해요', tone: 1 }], ending: '어른께 여쭤봐서 친구도 지켰어요.' },
                    { id: 'smell', text: '냄새만 맡아 보자 한다', result: '냄새는 좋았지만 먹어도 되는지는 몰라요.', impact: [{ who: '친구', text: '먹을 수 있어요', tone: -1 }] },
                    { id: 'take', text: '집에 가져가자 한다', result: '동생이 모르고 먹을 수 있어요.', impact: [{ who: '가족', text: '위험해요', tone: -1 }] },
                  ] } },
                { id: 'pack', text: '주머니에 넣어 둔다', result: '열매가 터져 손에 묻었어요.', impact: [{ who: '나', text: '모르고 입에 댈 수 있어요', tone: -1 }] },
              ] }, [['no', 'teacher']],
            [{ id: 'unknown', text: '먹어도 되는지 우리는 몰라서' }, { id: 'ask', text: '어른께 여쭤보면 알 수 있어서' }, { id: 'pretty', text: '예쁘게 생겨서', why: '예쁜 열매도 먹으면 아플 수 있어요.' }], ['unknown', 'ask'], 0.3, { conclude: '벌·뱀은 건드리지 말고 천천히 멀어지고, 모르는 열매는 먹지 말고 어른께 여쭤봐요.' }),
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '벌이 날아오면 팔을 내리고 ___ 물러나요.', answer: '천천히' }] },
      }),
      C({
        id: 'saf-life.e34.g3-pe-field.wrap.field-sort', type: 'wrap', title: '체육·체험 약속 나누어 정리',
        method: '체육·체험 약속 정리', tool: 'mindmap', minutes: 7,
        levels: { easy: '약속 카드 4장을 두 가지로 나눈다.', base: '카드 6장을 두 가지로 나눈다.', challenge: '카드 8장을 두 가지로 나눈다.' },
        wrap: {
          teacher: '"오늘 배운 약속을 체육 시간 약속과 체험 학습 약속으로 나눠 볼까요?" 카드를 다 나누면 가지마다 한 목소리로 읽는다. 준비운동을 체험 학습에도 놓고 싶어 하는 학생에게 "맞아요, 산에 오르기 전에도 몸을 풀면 좋아요. 그래도 오늘은 어느 시간에 더 많이 이야기했나요?"라고 말해 준다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', options: { topic: '오늘의 약속', slots: ['체육 시간', '체험 학습'], cards: ['신발 끈 묶기', '정해진 길로', '기구는 차례로', '모르는 열매 안 먹기', '바닥 살피기', '벌집 멀리'] }, prompt: '약속 카드를 체육 시간과 체험 학습으로 나누어요.', target: { sort: { '체육 시간': ['신발 끈 묶기', '기구는 차례로', '바닥 살피기'], '체험 학습': ['정해진 길로', '모르는 열매 안 먹기', '벌집 멀리'] } }, difficulty: 0.15,
              levels: {
                easy: { prompt: '약속 카드 4장을 체육 시간과 체험 학습으로 나누어요.', toolOptions: { cards: ['신발 끈 묶기', '정해진 길로', '기구는 차례로', '벌집 멀리'] }, target: { sort: { '체육 시간': ['신발 끈 묶기', '기구는 차례로'], '체험 학습': ['정해진 길로', '벌집 멀리'] } } },
                challenge: { prompt: '약속 카드 8장을 체육 시간과 체험 학습으로 나누어요.', toolOptions: { cards: ['신발 끈 묶기', '정해진 길로', '기구는 차례로', '모르는 열매 안 먹기', '바닥 살피기', '벌집 멀리', '주머니 비우기', '모일 곳 정하기'] }, target: { sort: { '체육 시간': ['신발 끈 묶기', '기구는 차례로', '바닥 살피기', '주머니 비우기'], '체험 학습': ['정해진 길로', '모르는 열매 안 먹기', '벌집 멀리', '모일 곳 정하기'] } } },
              } },
            { type: 'choice', prompt: '체험 학습에서 길이 갈라질 때는?', options: ['지름길로 가요', '선생님을 따라가요', '혼자 먼저 가요'], answer: 1, difficulty: 0.1, explain: '정해진 길로 선생님을 따라가야 함께 안전해요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '체육 시간과 체험 학습 약속',
          items: [
            { type: 'table', prompt: '약속을 어울리는 곳에 써요.', columns: ['체육 시간', '체험 학습'], cells: [['', ''], ['', '']], answer: '예) 준비운동·기구는 차례로 / 정해진 길·벌집 멀리' },
            { type: 'draw', prompt: '산길에서 정해진 길로 걷는 우리 반을 그려요.' },
          ],
        },
      }),
      C({
        id: 'saf-life.e34.g3-pe-field.wrap.field-self', type: 'wrap', title: '활동 준비 스스로 점검',
        method: '준비 스스로 점검', tool: 'timer', minutes: 7,
        levels: { easy: '점검 칸 2개에 표시한다.', base: '점검 칸 3개에 표시한다.', challenge: '점검 칸 4개에 표시한다.' },
        wrap: {
          teacher: '"다음 체육 시간이나 체험 학습 때 나는 무엇을 챙길 수 있나요?" 점검 칸을 함께 읽고 할 수 있는 것에 표시하게 한다. 출구 2번에서 "목마를 때까지 기다려요"를 고른 학생에게 "더운 날 밖에서는 목마르기 전에 조금씩 마셔요."라고 바로잡는다.',
          exitTicket: [
            SELF('활동 준비 점검', ['준비운동을 해요', '물을 챙겨요', '모자를 써요', '정해진 길로 다녀요']),
            { type: 'choice', prompt: '더운 날 야외 활동 중 물은 언제 마실까요?', options: ['목마를 때까지 참아요', '조금씩 자주 마셔요', '집에 가서 마셔요'], answer: 1, difficulty: 0.15, explain: '더운 날에는 목마르기 전에 조금씩 자주 마셔요.' },
            { type: 'short', prompt: '체험 학습 가방에 꼭 넣을 것을 하나 써요.' },
          ],
        },
        worksheet: {
          title: '활동 준비 점검',
          items: [
            { type: 'check', prompt: '챙길 것에 표시해요.', options: ['물병', '모자', '편한 운동화'] },
            { type: 'short', prompt: '준비운동을 하는 까닭을 한 줄로 써요.' },
          ],
          easy: { note: '물, 모자, 준비운동을 떠올려요.', items: [{ type: 'draw', prompt: '모자를 쓰고 물병을 든 내 모습을 그려요.' }] },
        },
      }),
    );
  }

  // ======================================================================================================
  // 3학년 · 사람 많은 곳·아는 사람의 부탁 (별표 2 초등 생활안전 5)
  // ======================================================================================================
  {
    const C = T('g3-crowd-trust', 3);
    const FEST = {
      title: '동네 축제 마당', grid: [6, 4],
      regions: [
        { name: '안내소', cells: [[0, 0], [1, 0]] }, { name: '무대 앞', cells: [[2, 0], [3, 0], [4, 0], [5, 0]] },
        { name: '분수대', cells: [[2, 1], [3, 1]] }, { name: '먹거리 장터', cells: [[0, 1], [1, 1], [0, 2], [1, 2]] },
        { name: '놀이 마당', cells: [[4, 1], [5, 1], [4, 2], [5, 2]] }, { name: '산책길', cells: [[2, 2], [3, 2]] }, { name: '주차장', cells: [[0, 3], [1, 3], [2, 3], [3, 3], [4, 3], [5, 3]] },
      ],
    };
    M.push(
      C({
        id: 'saf-life.e34.g3-crowd-trust.intro.crowd-scene', type: 'intro', title: '축제에서 도움을 청할 사람',
        method: '축제 장면에서 도울 사람 고르기', tool: 'emotion', minutes: 6,
        levels: { easy: '도움을 청할 사람 2명(안내소 직원, 경찰관)을 함께 고른다.', base: '도움을 청할 사람 3명을 스스로 고른다.', challenge: '3명을 고르고, 길을 잃었을 때 하지 말아야 할 행동도 말한다.' },
        intro: {
          teacher: '"축제에서 가족과 떨어졌어요. 이 그림에서 누구에게 도움을 청하면 좋을까요?" 시연 단추로 안내소 직원·경찰관·아이와 함께 있는 어른 카드가 바구니에 담기는 것을 보이고 왜 그 사람인지 묻는다. "아무 어른이나 따라가요"라는 말이 나오면 "도움은 그 자리에서 청하고, 따라가지는 않아요. 왜 그럴까요?"라고 되묻는다.',
          student: '길을 잃었을 때 도움을 청할 사람을 고르고, 왜 그 사람인지 짝에게 말해 보아요.',
          demo: { tool: 'emotion', options: { mode: 'pick', basket: '도움을 청해요', cards: [{ id: 'info', text: '안내소 직원' }, { id: 'stranger', text: '혼자 있는 어른' }, { id: 'police', text: '경찰관' }, { id: 'car', text: '차에 탄 사람' }, { id: 'parent', text: '아이와 함께인 어른' }], shuffle: false }, sequence: [{ pick: ['info', 'police', 'parent'] }] },
          art: { draw: 'a busy paper festival square with a fountain, an information booth with a staff member and a police officer, a family holding hands', banner: '누구에게 도움을 청할까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '길을 잃었던 일·낯선 사람을 만난 일을 학생에게 묻지 않는다. 그림 속 상황으로만 이야기한다.',
      }),
      C({
        id: 'saf-life.e34.g3-crowd-trust.intro.meet-clock', type: 'intro', title: '만날 시각과 곳 정하기',
        method: '만날 시각 정하기', tool: 'clock', minutes: 5,
        levels: { easy: '바늘이 3시에 놓인 시계를 함께 읽는다.', base: '정각(3시) 바늘을 스스로 맞춰 본다.', challenge: '30분 단위(3시 30분) 바늘을 맞추고 만날 곳과 함께 말한다.' },
        intro: {
          teacher: '"축제에 가기 전에 가족과 무엇을 정해 두면 좋을까요?" 시연 단추로 시계 바늘이 3시로 움직이는 것을 보이고 "3시에 분수대 앞" 약속을 함께 말한다. "길을 잃으면 그냥 찾아다니면 돼요"라는 말이 나오면 "둘 다 서로를 찾아다니면 만날 수 있을까요? 한 곳을 정해 두면 어떨까요?"라고 되묻는다.',
          student: '"몇 시에 어디에서 만날지"를 정해 짝에게 말해 보아요.',
          demo: { tool: 'clock', options: { showDigital: true }, sequence: [{ h: 1, m: 0 }, { h: 3, m: 0 }] },
          art: { draw: 'a large paper clock showing three o clock next to a paper fountain where a child and a parent wave to each other', banner: '3시에 분수대 앞', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
      }),
      C({
        id: 'saf-life.e34.g3-crowd-trust.activity.crowd-map', type: 'activity', title: '축제 지도에서 만날 곳 정하기',
        method: '축제 지도에서 만날 곳 정하기', tool: 'map', minutes: 14,
        levels: { easy: '핀을 놓으면 그 칸의 이름이 바로 보인다.', base: '지도의 이름을 보고 알맞은 곳에 핀을 꽂는다.', challenge: '핀을 꽂은 뒤 그곳을 고른 까닭도 보기에서 고른다.' },
        activity: {
          title: '축제 지도에 핀 꽂기', tool: 'map',
          teacher: '"가족과 떨어지면 다시 만날 곳으로 어디가 좋을까요? 왜 그곳일까요?" 핀을 꽂은 뒤 고른 까닭을 짝에게 말하게 한다. 무대 앞을 만날 곳으로 고르는 학생에게 "공연이 끝나면 사람들이 어떻게 움직일까요? 찾기 쉬울까요?"라고 묻는다. 만날 곳은 눈에 잘 띄고 사람이 덜 몰리는 곳이 좋다는 점을 짚는다.',
          task: '축제 지도를 보고 물음에 맞는 곳에 핀을 꽂아요.', levels: { easy: { readout: true }, base: {}, challenge: {} },
          items: [
            PIN(FEST, '길을 잃었을 때 도움을 청하러 갈 곳에 핀을 꽂아요.', '안내소', { q: '왜 이곳으로 갈까요?', choices: ['맛있는 것이 많아서', '도와줄 직원이 있어서', '사람이 적어서'], answer: 1 }, 0.15),
            PIN(FEST, '가족과 미리 정할 만날 곳에 핀을 꽂아요.', '분수대', { q: '이곳이 만날 곳으로 좋은 까닭은?', choices: ['눈에 잘 띄고 안 움직여서', '시끄러워서', '숨기 좋아서'], answer: 0 }, 0.2),
            PIN(FEST, '차가 다녀 혼자 가면 안 되는 곳에 핀을 꽂아요.', '주차장', { q: '이곳에 가면 안 되는 까닭은?', choices: ['차에 부딪힐 수 있어서', '재미없어서', '멀어서'], answer: 0 }, 0.25),
            PIN(FEST, '공연이 끝나면 사람이 가장 몰릴 곳에 핀을 꽂아요.', '무대 앞', { q: '이곳에서는 어떻게 할까요?', choices: ['가족 손을 꼭 잡아요', '혼자 앞으로 뛰어가요', '바닥에 앉아요'], answer: 0 }, 0.25, { conclude: '사람 많은 곳에서는 만날 곳을 미리 정하고, 길을 잃으면 안내소나 직원에게 도움을 청해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '가족과 만날 곳으로 좋은 곳은?', options: ['눈에 잘 띄는 분수대', '사람이 몰리는 무대 앞', '차가 다니는 주차장'], answer: '눈에 잘 띄는 분수대' }] },
      }),
      C({
        id: 'saf-life.e34.g3-crowd-trust.activity.lost-order3', type: 'activity', title: '길을 잃었을 때 차례',
        method: '길을 잃었을 때 차례', tool: 'story', minutes: 13,
        levels: { easy: '장면 3장, 놓으면 바로 맞는지 알려 준다.', base: '장면 4장을 차례대로 놓은 뒤 확인한다.', challenge: '틀린 장면 1장이 섞인 5장에서 그것을 빼고 4장을 놓는다.' },
        activity: {
          title: '길을 잃었을 때 차례 놓기', tool: 'story',
          teacher: '"가족이 안 보이면 맨 먼저 무엇을 할까요?" 카드를 다 놓은 뒤 모둠이 장면을 짧은 역할극으로 해 본다(멈춤 → 둘레 보기 → 직원에게 "엄마를 잃어버렸어요"). "혼자 찾아다녀요"를 앞에 두는 학생에게 "가족도 나를 찾으며 움직이면 어떻게 될까요?"라고 묻는다.',
          task: '장면 카드를 하는 차례대로 놓아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORD('축제에서 가족이 안 보여요. 차례로 놓아요.', {}, [{ id: 'stop', text: '그 자리에 멈춰요' }, { id: 'look', text: '둘레를 살펴요' }, { id: 'staff', text: '안내소 직원에게' }, { id: 'say', text: '보호자 연락처 말함' }], 1, { id: 'wander', text: '혼자 찾아다녀요', why: '혼자 움직이면 가족과 더 멀어질 수 있어요.' }, 0.15),
            ORD('마트에서 엄마가 안 보여요. 차례로 놓아요.', {}, [{ id: 'freeze', text: '멈추고 숨 고르기' }, { id: 'counter', text: '계산대 직원에게' }, { id: 'name', text: '내 이름 말하기' }, { id: 'wait', text: '방송 듣고 기다림' }], 3, { id: 'outside', text: '밖에 나가 찾기', why: '마트 밖으로 나가면 찾기가 더 어려워요.' }, 0.2),
            ORD('놀이공원에 들어가기 전 할 일을 차례로 놓아요.', {}, [{ id: 'meet', text: '만날 곳 정하기' }, { id: 'number', text: '연락처 외우기' }, { id: 'together', text: '함께 다니기' }, { id: 'go', text: '떨어지면 만날 곳' }], 2, { id: 'rush', text: '먼저 뛰어 들어가기', why: '먼저 뛰어가면 처음부터 떨어질 수 있어요.' }, 0.25, { conclude: '미리 만날 곳을 정하고, 길을 잃으면 멈추고 직원에게 도움을 청해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '길을 잃으면 그 자리에 ___ 둘레를 살펴요.', answer: '멈추고' }] },
      }),
      C({
        id: 'saf-life.e34.g3-crowd-trust.activity.trust-sort', type: 'activity', title: '확인할 부탁·괜찮은 부탁',
        method: '확인해요/괜찮아요 부탁 나누기', tool: 'mindmap', minutes: 14,
        levels: { easy: '카드 4장, 놓으면 바로 맞는지 알려 준다.', base: '카드 6장을 다 놓은 뒤 확인한다.', challenge: '헷갈리는 카드 2장이 더해진 8장을 나누고 까닭을 말한다.' },
        activity: {
          title: '부탁 카드 나누기', tool: 'mindmap',
          teacher: '"이 부탁을 들으면 보호자께 먼저 확인해야 할까요?" 카드를 놓을 때마다 "어디로 데려가는 말인가요?", "보호자가 미리 말해 준 일인가요?"를 함께 따져 보게 한다. "아는 아저씨니까 괜찮아요"라는 학생에게 "아는 사람이어도 보호자가 모르는 곳으로 가자고 하면 어떻게 할까요?"라고 묻는다.',
          task: '부탁 카드를 보호자께 확인할 부탁과 괜찮은 부탁으로 나누어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORT('아는 어른의 부탁을 나누어요.', { topic: '아는 어른의 말' }, ['확인해요', '괜찮아요'], [['엄마가 데려오래', '차로 태워 줄게', '집에 가서 놀자'], ['교실서 공책 나눠 줘', '줄 서서 기다리자', '손 씻고 오렴']], 2, [['비밀로 하고 가자'], ['수업 끝, 인사하렴']], 0.15),
            SORT('처음 보는 사람의 말을 나누어요.', { topic: '처음 보는 사람' }, ['확인해요', '괜찮아요'], [['길 좀 같이 가 줘', '선물 사 줄게', '너희 집 어디니?'], ['안내 방송 듣기', '직원의 안내 따름', '줄 서 주세요']], 2, [['사진 찍어 줄게'], ['계산대로 오세요']], 0.2),
            SORT('친구와 이웃의 말을 나누어요.', { topic: '친구와 이웃' }, ['확인해요', '괜찮아요'], [['몰래 멀리 가자', '형 차 타고 가자', '이웃 집 들어와'], ['놀이터서 그네 타자', '같이 줄넘기하자', '급식 줄 서자']], 2, [['저녁에 공원 가자'], ['책 같이 보자']], 0.25, { conclude: '어딘가로 데려가거나 비밀로 하자는 부탁은 아는 사람이어도 보호자께 먼저 확인해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '확인할 부탁이면 "확", 괜찮으면 "괜"을 써요.', columns: ['부탁', '확 / 괜'], cells: [['차로 태워 줄게', ''], ['손 씻고 오렴', ''], ['선물 사 줄게', ''], ['같이 줄넘기하자', '']], answer: '확, 괜, 확, 괜' }] },
      }),
      C({
        id: 'saf-life.e34.g3-crowd-trust.activity.trust-dilemma', type: 'activity', title: '갈림길: 차에 타래요',
        method: '갈림길: 이웃 아저씨가 차에 타래요', tool: 'dilemma', minutes: 14,
        levels: { easy: '갈림 1번, 보기 2개 가운데 고르고 결과를 본다.', base: '갈림 2번, 보기 3개씩 고르며 결과를 따라간다.', challenge: '갈림 2번을 지난 뒤 "확인해 볼게요"를 고른 근거를 카드 3장 가운데 고른다.' },
        activity: {
          title: '갈림길: 아는 사람의 부탁', tool: 'dilemma',
          teacher: '"거절하면 아저씨가 서운해할까요? 그래도 확인해야 하는 까닭은 무엇일까요?" 보기를 고를 때마다 결과를 읽고, 고른 말을 짝과 소리 내어 말해 본다("엄마께 먼저 전화해 볼게요"). "거절하면 예의가 없어요"라는 학생에게 "정중하게 거절하는 말도 있어요. 어떻게 말하면 좋을까요?"라고 묻는다.',
          task: '장면을 읽고 보기를 골라요. 결과를 보고 다음 장면에서 또 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL('이웃 아저씨가 차에 타라고 해요.', {
              text: '학교 앞에서 이웃 아저씨가 "비 오니까 태워 줄게, 타렴" 해요.', motif: 'rain',
              choices: [
                { id: 'ride', text: '아는 분이니 탄다', result: '엄마는 내가 어디 있는지 몰라 걱정하셨어요.', impact: [{ who: '가족', text: '나를 찾지 못해요', tone: -1 }] },
                { id: 'check', text: '"엄마께 전화해 볼게요"', result: '아저씨가 "그래, 그러렴" 하셨어요.', ending: '먼저 확인하겠다고 말해 나를 지켰어요.', next: {
                  text: '엄마가 전화를 받지 않으세요. 어떻게 할까요?', choices: [
                    { id: 'teacher', text: '학교로 돌아가 선생님께', result: '선생님이 엄마와 연락해 주셨어요.', impact: [{ who: '가족', text: '안심했어요', tone: 1 }], ending: '연락이 안 될 때는 학교 어른께 도움을 청했어요.' },
                    { id: 'give', text: '그냥 차에 탄다', result: '가족은 내가 어디 갔는지 몰라요.', impact: [{ who: '가족', text: '걱정해요', tone: -1 }] },
                    { id: 'walk', text: '아저씨를 따라 걷는다', result: '아는 길에서 점점 멀어졌어요.', impact: [{ who: '나', text: '위험할 수 있어요', tone: -1 }] },
                  ] } },
                { id: 'secret', text: '아무에게도 말 안 하고 탄다', result: '아무도 내가 어디 있는지 몰라요.', impact: [{ who: '나', text: '도움을 못 받아요', tone: -1 }] },
              ] }, [['check', 'teacher']],
            [{ id: 'know', text: '보호자가 내가 어디 있는지 알아야 해서' }, { id: 'any', text: '아는 사람이어도 확인이 먼저라서' }, { id: 'rude', text: '거절하면 예의가 없어서', why: '정중하게 거절하는 것도 예의예요. 안전이 먼저예요.' }], ['know', 'any'], 0.2),
            DIL('엄마 친구라는 분이 데리러 왔대요.', {
              text: '학원 앞에서 처음 보는 분이 "엄마 친구야, 엄마가 데려오래" 해요.', motif: 'house',
              choices: [
                { id: 'go', text: '엄마 이름을 아니까 따라간다', result: '엄마는 그런 부탁을 한 적이 없었어요.', impact: [{ who: '나', text: '위험할 수 있어요', tone: -1 }] },
                { id: 'no', text: '"엄마께 확인해 볼게요" 한다', result: '그분이 "괜찮아, 빨리 가자" 하며 재촉해요.', ending: '재촉해도 확인하겠다고 말해 따라가지 않았어요.', next: {
                  text: '그분이 계속 재촉해요. 어떻게 할까요?', choices: [
                    { id: 'inside', text: '학원 안 선생님께 간다', result: '학원 선생님이 엄마께 전화해 주셨어요.', impact: [{ who: '나', text: '안전해요', tone: 1 }], ending: '어른이 있는 곳으로 가서 도움을 청했어요.' },
                    { id: 'follow', text: '미안해서 따라간다', result: '확인하지 못한 채 낯선 곳으로 가게 됐어요.', impact: [{ who: '나', text: '위험할 수 있어요', tone: -1 }] },
                    { id: 'stay', text: '그 자리에서 둘이 기다린다', result: '그분이 계속 손을 잡아끌었어요.', impact: [{ who: '나', text: '위험할 수 있어요', tone: -1 }] },
                  ] } },
                { id: 'phone', text: '그분 전화를 빌려 쓴다', result: '그분이 전화를 건네며 차 쪽으로 가자고 해요.', impact: [{ who: '나', text: '따라가게 될 수 있어요', tone: -1 }] },
              ] }, [['no', 'inside']],
            [{ id: 'plan', text: '엄마가 미리 말한 일이 아니라서' }, { id: 'adult', text: '아는 어른께 도움을 청하면 돼서' }, { id: 'name', text: '엄마 이름을 알면 믿어도 돼서', why: '이름을 안다고 엄마가 보낸 사람은 아니에요.' }], ['plan', 'adult'], 0.25),
            DIL('옆집 형이 몰래 멀리 놀러 가자고 해요.', {
              text: '놀이터에서 옆집 형이 "엄마한텐 비밀로 하고 강가에 가자" 해요.', motif: 'tree',
              choices: [
                { id: 'go', text: '형이니까 따라간다', result: '가족은 내가 놀이터에 있는 줄 알았어요.', impact: [{ who: '가족', text: '나를 못 찾아요', tone: -1 }] },
                { id: 'ask', text: '"집에 물어보고 올게"', result: '형이 "그럼 됐어" 하며 혼자 갔어요.', ending: '비밀로 하자는 말은 따르지 않았어요.', next: {
                  text: '형이 다음 날 "겁쟁이"라고 놀려요. 어떻게 할까요?', choices: [
                    { id: 'firm', text: '"그래도 확인할 거야"', result: '형이 더 놀리지 않았어요.', impact: [{ who: '나', text: '마음이 단단해요', tone: 1 }], ending: '놀림을 받아도 내 약속을 지켰어요.' },
                    { id: 'prove', text: '이번엔 몰래 따라간다', result: '가족이 모르는 곳에 가게 됐어요.', impact: [{ who: '나', text: '위험할 수 있어요', tone: -1 }] },
                    { id: 'cry', text: '아무에게도 말 못 한다', result: '속상한 마음이 그대로 남았어요.', impact: [{ who: '나', text: '마음이 힘들어요', tone: -1 }] },
                  ] } },
                { id: 'lie', text: '엄마께 다른 곳이라 말한다', result: '가족은 내가 어디 있는지 잘못 알았어요.', impact: [{ who: '가족', text: '도와줄 수 없어요', tone: -1 }] },
              ] }, [['ask', 'firm']],
            [{ id: 'secret', text: '비밀로 하자는 부탁은 위험해서' }, { id: 'brave', text: '확인하는 것이 용기라서' }, { id: 'friend', text: '친한 형이니까 괜찮아서', why: '친한 사람이어도 보호자 모르게 멀리 가지 않아요.' }], ['secret', 'brave'], 0.3, { conclude: '아는 사람이어도 데려가거나 비밀로 하자는 부탁은 "확인해 볼게요" 하고 보호자께 물어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '거절하는 말을 완성해요.', text: '"싫어요. 엄마께 먼저 ___ 볼게요."', answer: '확인해' }] },
      }),
      C({
        id: 'saf-life.e34.g3-crowd-trust.wrap.trust-check', type: 'wrap', title: '내 안전 약속 점검표',
        method: '내 안전 약속 점검표', tool: 'kitchen', minutes: 7,
        levels: { easy: '점검 칸 2개에 표시한다.', base: '점검 칸 3개에 표시한다.', challenge: '점검 칸 4개에 표시한다.' },
        wrap: {
          teacher: '"오늘 정한 약속 가운데 집에 가서 가족과 함께할 것은 무엇인가요?" 점검표를 함께 읽고 할 수 있는 것에 표시하게 한다. 연락처를 외우는 칸에서 실제 번호를 말하게 하지 않는다. 출구 2번에서 "따라가요"를 고른 학생에게 "아는 사람이어도 무엇을 먼저 할까요?"라고 되묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title: '내 안전 약속', items: [{ id: 'meet', text: '만날 곳 정하기' }, { id: 'number', text: '보호자 연락처 외우기' }, { id: 'check', text: '부탁은 확인하기' }] }, prompt: '내가 지킬 약속에 표시해요.', target: { selfCheck: true }, difficulty: 0.1,
              levels: { easy: { toolOptions: { items: [{ id: 'meet', text: '만날 곳 정하기' }, { id: 'check', text: '부탁은 확인하기' }] } }, challenge: { toolOptions: { items: [{ id: 'meet', text: '만날 곳 정하기' }, { id: 'number', text: '보호자 연락처 외우기' }, { id: 'check', text: '부탁은 확인하기' }, { id: 'no', text: '"싫어요" 말하기' }] } } } },
            { type: 'choice', prompt: '아는 어른이 같이 가자고 할 때 먼저 할 일은?', options: ['바로 따라가요', '보호자께 확인해요', '몰래 가요'], answer: 1, difficulty: 0.1, explain: '아는 사람이어도 보호자께 먼저 확인해요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '나를 지키는 약속',
          items: [
            { type: 'check', prompt: '가족과 함께 정할 것에 표시해요.', options: ['사람 많은 곳에서 만날 곳', '데리러 올 사람', '확인하는 방법'] },
            { type: 'short', prompt: '부탁을 거절할 때 쓸 말을 한 줄로 써요.' },
          ],
          easy: { note: '"싫어요, 안 돼요, 물어볼게요"를 떠올려요.', items: [{ type: 'choice', prompt: '모르는 곳에 가자고 하면?', options: ['물어볼게요', '따라가요'], answer: '물어볼게요' }] },
        },
        notes: '보호자 연락처는 외우는 연습만 하고, 실제 번호를 말하거나 쓰게 하지 않는다.',
      }),
      C({
        id: 'saf-life.e34.g3-crowd-trust.wrap.trust-feel', type: 'wrap', title: '거절하고 확인한 나의 마음',
        method: '거절한 나의 마음', tool: 'emotion', minutes: 7,
        levels: { easy: '장면 1개에 마음 카드를 짝 짓는다.', base: '장면 2개에 마음 카드를 짝 짓는다.', challenge: '장면 3개에 짝 짓고 한 장면의 까닭을 말한다.' },
        wrap: {
          teacher: '"부탁을 거절하고 엄마께 확인했을 때 내 마음은 어땠을까요?" 장면마다 마음 카드를 짝 짓고 까닭을 한 명씩 말하게 한다. "미안했어요"라는 학생에게 그 마음도 괜찮다고 말해 주고 "그래도 확인했더니 무엇이 좋아졌나요?"라고 묻는다. 마지막에 "싫어요, 안 돼요, 물어볼게요"를 한 목소리로 말한다.',
          exitTicket: [
            { type: 'tool', tool: 'emotion', options: { mode: 'match', slots: [{ id: 's1', label: '부탁을 거절하고 확인함' }, { id: 's2', label: '길을 잃고 직원에게 감' }], cards: ['뿌듯함', '편안함', '고마움', '신남'] }, prompt: '장면과 내 마음을 이어요.', target: { match: { s1: ['뿌듯함', '편안함'], s2: ['고마움', '편안함'] } }, difficulty: 0.15,
              levels: { easy: { toolOptions: { slots: [{ id: 's1', label: '부탁을 거절하고 확인함' }] }, target: { match: { s1: ['뿌듯함', '편안함'] } } }, challenge: { toolOptions: { slots: [{ id: 's1', label: '부탁을 거절하고 확인함' }, { id: 's2', label: '길을 잃고 직원에게 감' }, { id: 's3', label: '만날 곳에서 가족을 만남' }] }, target: { match: { s1: ['뿌듯함', '편안함'], s2: ['고마움', '편안함'], s3: ['편안함', '신남', '고마움'] } } } } },
            { type: 'choice', prompt: '부탁을 거절할 때 쓸 수 있는 말은?', options: ['"물어볼게요"', '"몰래 갈게요"', '"아무 데나요"'], answer: 0, difficulty: 0.1, explain: '"싫어요, 안 돼요, 물어볼게요"로 나를 지켜요.' },
            { type: 'short', prompt: '거절한 친구에게 해 줄 칭찬 한마디를 써요.' },
          ],
        },
        worksheet: {
          title: '싫어요, 안 돼요, 물어볼게요',
          items: [
            { type: 'blank', prompt: '거절하는 말을 따라 써요.', text: '싫어요, 안 돼요, ___!', answer: '물어볼게요' },
            { type: 'draw', prompt: '확인하고 안심하는 내 모습을 그려요.' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 4학년 · 승강기·공공시설에서 끼임과 갇힘 (별표 2 초등 생활안전 1)
  // ======================================================================================================
  {
    const C = T('g4-lift-facility', 4);
    const LIFT = {
      title: '승강기 안', grid: [4, 4],
      regions: [
        { name: '문', cells: [[0, 0], [1, 0], [2, 0], [3, 0]] }, { name: '층 버튼', cells: [[3, 1]] }, { name: '열림 버튼', cells: [[3, 2]] }, { name: '닫힘 버튼', cells: [[3, 3]] },
        { name: '비상 버튼', cells: [[2, 1]] }, { name: '인터폰', cells: [[2, 2]] }, { name: '손잡이', cells: [[0, 1], [0, 2], [0, 3]] }, { name: '바닥', cells: [[1, 1], [1, 2], [1, 3], [2, 3]] },
      ],
    };
    const STATS = [['승강기', 12], ['자동문', 9], ['회전문', 3], ['에스컬레이터', 6]];
    const BAR = { type: 'bar', title: '자주 쓰는 시설(가상의 우리 반 조사)', unit: '명', xLabel: '시설', yLabel: '친구 수', max: 14, scale: 2 };
    M.push(
      C({
        id: 'saf-life.e34.g4-lift-facility.intro.door-scene', type: 'intro', title: '현관 그림에서 끼이기 쉬운 곳',
        method: '시설 장면에서 끼임 위험 고르기', tool: 'emotion', minutes: 6,
        levels: { easy: '끼이기 쉬운 곳 2곳(자동문 사이, 승강기 문)을 함께 고른다.', base: '끼이기 쉬운 곳 3곳을 스스로 고른다.', challenge: '3곳을 고르고 왜 끼이기 쉬운지 까닭을 말한다.' },
        intro: {
          teacher: '"아파트 현관 그림이에요. 손이나 옷이 끼이기 쉬운 곳은 어디일까요?" 시연 단추로 위험한 장면 카드가 바구니에 담기는 것을 보이고 장면마다 까닭을 묻는다. "자동문은 사람이 있으면 절대 안 닫혀요"라는 말이 나오면 "문 사이에 오래 서 있거나 아주 작은 물건이 끼면 문이 알아챌 수 있을까요?"라고 되묻는다.',
          student: '현관 그림에서 손이나 옷이 끼이기 쉬운 곳을 고르고, 까닭을 짝에게 말해 보아요.',
          demo: { tool: 'emotion', options: { mode: 'pick', basket: '끼이기 쉬워요', cards: [{ id: 'auto', text: '자동문 사이 서기' }, { id: 'wait', text: '문 다 열림 기다림' }, { id: 'rev', text: '회전문 밀며 뛰기' }, { id: 'lean', text: '승강기 문 기대기' }, { id: 'rail', text: '손잡이 잡기' }], shuffle: false }, sequence: [{ pick: ['auto', 'rev', 'lean'] }] },
          art: { draw: 'a paper apartment lobby with an automatic sliding door, a revolving door and an elevator door, small paper children walking slowly', banner: '문 사이를 조심해요', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
      }),
      C({
        id: 'saf-life.e34.g4-lift-facility.intro.button-map', type: 'intro', title: '승강기 안 비상 버튼 찾기',
        method: '승강기 안 버튼 찾기', tool: 'map', minutes: 5,
        levels: { easy: '비상 버튼 한 곳에 핀이 꽂히는 것을 함께 본다.', base: '비상 버튼·인터폰 두 곳을 보고 하는 일을 말한다.', challenge: '두 곳과 열림 버튼까지 보고 언제 누르는지 짝에게 말한다.' },
        intro: {
          teacher: '"승강기가 멈추면 어느 버튼을 눌러야 할까요?" 시연 단추로 비상 버튼·인터폰·열림 버튼에 핀이 차례로 꽂히는 것을 보이고 버튼마다 하는 일을 묻는다. "문을 힘으로 열면 돼요"라는 말이 나오면 "승강기가 층 사이에 멈춰 있으면 문 밖은 어떨까요?"라고 되묻는다. 우리 아파트·학교 승강기에서는 비상 버튼이 어디인지 떠올려 보게 한다.',
          student: '그림에서 비상 버튼과 인터폰이 어디에 있는지 보고, 언제 누르는지 짝에게 말해 보아요.',
          demo: { tool: 'map', options: LIFT, sequence: [{ pin: [2, 1] }, { pin: [2, 2] }, { pin: [3, 2] }] },
          art: { draw: 'the inside of a paper elevator with a panel of round paper buttons, a bell shaped emergency button and an intercom grille', banner: '비상 버튼은 여기', extra: [{ motif: 'leaf', x: 300, y: 222 }] },
        },
      }),
      C({
        id: 'saf-life.e34.g4-lift-facility.activity.stuck-order', type: 'activity', title: '승강기에 갇혔을 때 차례',
        method: '승강기에 갇혔을 때 차례', tool: 'story', minutes: 14,
        levels: { easy: '장면 3장, 놓으면 바로 맞는지 알려 준다.', base: '장면 4장을 차례대로 놓은 뒤 확인한다.', challenge: '틀린 장면 1장이 섞인 5장에서 그것을 빼고 4장을 놓는다.' },
        activity: {
          title: '갇히고 끼였을 때 차례', tool: 'story',
          teacher: '"승강기가 멈췄을 때 맨 먼저 할 일은 무엇일까요?" 카드를 다 놓은 뒤 모둠이 장면을 짧게 역할극으로 해 본다(숨 고르기 → 비상 버튼 → 인터폰에 "본관 승강기에 갇혔어요"). "문을 두드리고 소리 질러요"를 앞에 두는 학생에게 "인터폰으로 말하면 누가 듣고 와 줄까요?"라고 묻는다.',
          task: '장면 카드를 하는 차례대로 놓아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORD('승강기가 멈췄어요. 차례로 놓아요.', {}, [{ id: 'calm', text: '숨 고르고 침착' }, { id: 'bell', text: '비상 버튼 누르기' }, { id: 'talk', text: '인터폰에 위치 말함' }, { id: 'wait', text: '구조를 기다리기' }], 0, { id: 'force', text: '문 억지로 열기', why: '층 사이에 멈춘 승강기 문을 열면 떨어질 수 있어요.' }, 0.15),
            ORD('승강기 문에 가방이 끼었어요. 차례로 놓아요.', {}, [{ id: 'nohand', text: '손 넣지 않기' }, { id: 'open', text: '열림 버튼 누르기' }, { id: 'pull', text: '가방 빼기' }, { id: 'step', text: '문에서 떨어져 서기' }], 3, { id: 'grab', text: '손으로 문 잡기', why: '손으로 문을 잡으면 손이 끼일 수 있어요.' }, 0.2),
            ORD('회전문을 지나갈 때 차례로 놓아요.', {}, [{ id: 'gap', text: '앞사람과 거리 두기' }, { id: 'in', text: '한 칸에 들어가기' }, { id: 'slow', text: '문 따라 천천히' }, { id: 'out', text: '나와서 비켜 서기' }], 2, { id: 'rush', text: '문 밀며 뛰기', why: '밀며 뛰면 문이 빨라져 끼이거나 부딪혀요.' }, 0.25, { conclude: '갇히면 침착하게 비상 버튼과 인터폰, 끼이면 손 대신 열림 버튼이에요.' }),
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '승강기에 갇히면 ___ 버튼을 누르고 인터폰으로 말해요.', answer: '비상' }] },
      }),
      C({
        id: 'saf-life.e34.g4-lift-facility.activity.facility-sort', type: 'activity', title: '시설마다 지킬 행동',
        method: '시설별 지킬 행동', tool: 'mindmap', minutes: 13,
        levels: { easy: '카드 4장, 놓으면 바로 맞는지 알려 준다.', base: '카드 6장을 다 놓은 뒤 확인한다.', challenge: '헷갈리는 카드 2장이 더해진 8장을 나눈다.' },
        activity: {
          title: '시설마다 지킬 행동 나누기', tool: 'mindmap',
          teacher: '"이 행동은 어느 시설에서 꼭 지켜야 할까요?" 카드를 놓은 뒤 그 시설에서 안 지키면 어디가 끼이거나 부딪히는지 짝과 말하게 한다. "자동문은 그냥 지나가면 돼요"라는 학생에게 "문이 다 열리기 전에 들어가면 어떻게 될까요?"라고 묻는다.',
          task: '행동 카드를 자동문·회전문·승강기 가운데 맞는 시설에 놓아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORT('시설마다 지킬 행동을 나누어요.', { topic: '지킬 행동' }, ['자동문', '회전문', '승강기'], [['다 열린 뒤 지나가기', '문 사이 서 있지 않기'], ['한 칸에 한 사람씩', '문 따라 천천히'], ['문에 기대지 않기', '열림 버튼 쓰기']], [1, 2, 1], [['유리에 손 안 대기'], [], ['안에서 뛰지 않기']], 0.15),
            SORT('조심할 행동이 어느 시설 일인지 나누어요.', { topic: '조심할 행동' }, ['자동문', '회전문', '승강기'], [['닫히는 문에 뛰어듦', '센서 앞 장난'], ['문 날개 세게 밀기', '두 사람 한 칸'], ['문틈에 손 넣기', '안에서 쿵쿵 뛰기']], [2, 1, 1], [[], ['문 날개에 발 넣기'], ['버튼 모두 누르기']], 0.2),
            SORT('끼이거나 갇혔을 때 할 일을 나누어요.', { topic: '이럴 때 할 일' }, ['자동문', '회전문', '승강기'], [['옷 끼면 멈춰 섬', '경비실에 알리기'], ['멈추라고 소리침', '다음 칸 기다리기'], ['비상 버튼 누르기', '인터폰으로 말하기']], [1, 1, 2], [['유리문 두드리지 않기'], ['문 날개 잡지 않기'], []], 0.25, { conclude: '시설마다 끼이는 자리가 달라요. 천천히, 다 열린 뒤, 버튼으로 다뤄요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '자동문을 지날 때 바른 행동은?', options: ['문이 다 열린 뒤 지나가요', '닫히는 문에 뛰어들어요', '문 사이에 서서 기다려요'], answer: '문이 다 열린 뒤 지나가요' }] },
      }),
      C({
        id: 'saf-life.e34.g4-lift-facility.activity.stuck-dilemma', type: 'activity', title: '갈림길: 승강기가 멈췄어요',
        method: '갈림길: 승강기가 멈췄어요', tool: 'dilemma', minutes: 14,
        levels: { easy: '갈림 1번, 보기 2개 가운데 고르고 결과를 본다.', base: '갈림 2번, 보기 3개씩 고르며 결과를 따라간다.', challenge: '갈림 2번을 지난 뒤 근거 카드 3장 가운데 알맞은 것을 고른다.' },
        activity: {
          title: '갈림길: 문 앞에서 생긴 일', tool: 'dilemma',
          teacher: '"무서울 때 우리 몸은 문을 열고 싶어져요. 그렇게 하면 어떻게 될까요?" 보기를 고르고 결과를 읽은 뒤, 인터폰에 할 말을 짝과 소리 내어 연습한다. 문을 두드리는 쪽을 고른 학생을 나무라지 않고 "두드리면 누가 들을 수 있을까요? 더 빨리 알리는 버튼은 무엇일까요?"라고 되묻는다.',
          task: '장면을 읽고 보기를 골라요. 결과를 보고 다음 장면에서 또 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL('승강기가 층 사이에서 멈췄어요.', {
              text: '혼자 탄 승강기가 덜컹하더니 층 사이에서 멈췄어요.', motif: 'house',
              choices: [
                { id: 'pry', text: '문틈을 손으로 벌린다', result: '문이 조금 열렸는데 밖은 벽이었어요.', impact: [{ who: '나', text: '떨어질 수 있어요', tone: -1 }] },
                { id: 'bell', text: '비상 버튼을 누른다', result: '"무슨 일이세요?" 인터폰에서 목소리가 들렸어요.', ending: '비상 버튼을 눌러 도움을 불렀어요.', next: {
                  text: '인터폰에서 "어디 승강기예요?"라고 물어요.', choices: [
                    { id: 'where', text: '어느 승강기인지 말한다', result: '"곧 갈게요, 문에서 떨어져 기다려요."', impact: [{ who: '나', text: '곧 구조돼요', tone: 1 }], ending: '위치를 말하고 침착하게 기다렸어요.' },
                    { id: 'cry', text: '울기만 한다', result: '어디인지 몰라 찾는 데 오래 걸려요.', impact: [{ who: '나', text: '오래 기다려요', tone: -1 }] },
                    { id: 'jump', text: '바닥을 쿵쿵 뛴다', result: '승강기가 흔들려 더 무서워졌어요.', impact: [{ who: '나', text: '다칠 수 있어요', tone: -1 }] },
                  ] } },
                { id: 'kick', text: '문을 발로 찬다', result: '발이 아프고 밖에서는 아무도 몰라요.', impact: [{ who: '나', text: '다쳤어요', tone: -1 }] },
              ] }, [['bell', 'where']],
            [{ id: 'gap', text: '층 사이에서 문을 열면 위험해서' }, { id: 'help', text: '비상 버튼이 도와줄 사람을 불러서' }, { id: 'fast', text: '문을 열면 빨리 나가니까', why: '빨리 나가려다 떨어질 수 있어요.' }], ['gap', 'help'], 0.2),
            DIL('친구가 닫히는 승강기로 뛰어와요.', {
              text: '승강기 문이 닫히는데 친구가 "잠깐만!" 하며 뛰어와요.', motif: 'star',
              choices: [
                { id: 'hand', text: '손을 넣어 문을 막는다', result: '문이 손을 꽉 눌렀어요.', impact: [{ who: '나', text: '손이 끼였어요', tone: -1 }] },
                { id: 'open', text: '열림 버튼을 누른다', result: '문이 다시 열렸어요.', ending: '손 대신 열림 버튼을 눌러 아무도 다치지 않았어요.', next: {
                  text: '친구가 숨을 헐떡이며 뛰어 들어오려 해요.', choices: [
                    { id: 'walk', text: '"천천히 들어와" 말한다', result: '친구가 걸어서 안전하게 탔어요.', impact: [{ who: '친구', text: '안전해요', tone: 1 }], ending: '버튼으로 문을 열고 천천히 타게 했어요.' },
                    { id: 'close', text: '장난으로 닫힘을 누른다', result: '문이 친구 쪽으로 닫혔어요.', impact: [{ who: '친구', text: '끼일 수 있어요', tone: -1 }] },
                    { id: 'leg', text: '발을 내밀어 문을 막는다', result: '문이 발을 눌렀어요.', impact: [{ who: '나', text: '발이 끼였어요', tone: -1 }] },
                  ] } },
                { id: 'bag', text: '가방을 문 사이에 끼운다', result: '가방 끈이 끼여 문이 덜컹했어요.', impact: [{ who: '나', text: '끌려갈 수 있어요', tone: -1 }] },
              ] }, [['open', 'walk']],
            [{ id: 'button', text: '버튼이 문을 안전하게 열어서' }, { id: 'body', text: '손발을 넣으면 끼일 수 있어서' }, { id: 'stop', text: '문은 사람이면 꼭 멈춰서', why: '문이 늘 알아채는 것은 아니에요. 손발을 넣지 않아요.' }], ['button', 'body'], 0.25),
            DIL('자동문 사이에서 친구가 장난쳐요.', {
              text: '마트 자동문 사이에서 친구가 문을 열었다 닫았다 장난쳐요.', motif: 'house',
              choices: [
                { id: 'join', text: '같이 문 사이에 선다', result: '문이 닫히며 어깨를 툭 쳤어요.', impact: [{ who: '나', text: '부딪혔어요', tone: -1 }] },
                { id: 'say', text: '"위험해, 나오자" 말한다', result: '친구가 문 밖으로 나왔어요.', ending: '장난을 멈추게 해 둘 다 다치지 않았어요.', next: {
                  text: '친구가 "재밌는데 왜?"라며 다시 하려 해요.', choices: [
                    { id: 'why', text: '끼일 수 있다고 까닭을 말한다', result: '친구가 고개를 끄덕였어요.', impact: [{ who: '친구', text: '알게 됐어요', tone: 1 }], ending: '까닭을 말해 친구도 스스로 멈췄어요.' },
                    { id: 'push', text: '친구를 문 쪽으로 민다', result: '친구가 문에 부딪혔어요.', impact: [{ who: '친구', text: '다쳤어요', tone: -1 }] },
                    { id: 'ignore', text: '모른 척 들어간다', result: '친구가 혼자 장난을 계속해요.', impact: [{ who: '친구', text: '다칠 수 있어요', tone: -1 }] },
                  ] } },
                { id: 'laugh', text: '옆에서 웃으며 본다', result: '친구가 더 신나서 장난을 해요.', impact: [{ who: '친구', text: '다칠 수 있어요', tone: -1 }] },
              ] }, [['say', 'why']],
            [{ id: 'pinch', text: '문 사이는 끼이는 자리라서' }, { id: 'reason', text: '까닭을 알면 친구도 멈춰서' }, { id: 'fun', text: '재미있으면 괜찮아서', why: '재미있어도 다치면 소용없어요.' }], ['pinch', 'reason'], 0.3, { conclude: '문 앞에서는 손발 대신 버튼, 장난 대신 까닭을 말해 함께 지켜요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '승강기에 갇혔을 때 하지 말아야 할 것은?', options: ['비상 버튼 누르기', '문 억지로 열기', '인터폰으로 말하기'], answer: '문 억지로 열기' }] },
      }),
      C({
        id: 'saf-life.e34.g4-lift-facility.activity.facility-chart', type: 'activity', title: '자주 쓰는 시설 막대그래프',
        method: '우리 동네 시설 이용 막대그래프', tool: 'chart', minutes: 14,
        levels: { easy: '시설 3개, 첫 막대는 미리 그려져 있다.', base: '시설 4개의 막대를 모두 그려 완성한다.', challenge: '시설 4개를 완성하고, 두 시설을 견주는 물음에도 답한 뒤 그 시설의 안전 수칙을 말한다.' },
        activity: {
          title: '자주 쓰는 시설 막대그래프', tool: 'chart',
          teacher: '"눈금 한 칸은 몇 명일까요? 9명은 어디까지 그릴까요?" 표의 수를 소리 내어 읽고 막대를 그리게 한다. 눈금 한 칸을 1명으로 세는 학생에게 "눈금 숫자를 다시 볼까요? 한 칸에 몇씩 커지나요?"라고 묻는다. 가장 많이 쓰는 시설을 찾으면 그 시설의 안전 수칙을 한 가지씩 말하게 한다.',
          task: '표를 보고 막대그래프를 완성한 뒤, 그래프를 읽고 물음에 답해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '표를 보고 시설 막대그래프를 완성해요.', toolOptions: Object.assign({}, BAR, { mode: 'build', data: STATS }), target: { build: true }, difficulty: 0.2,
              levels: { easy: { prompt: '표를 보고 시설 3개의 막대그래프를 완성해요.', toolOptions: { data: STATS.slice(0, 3), given: [0] }, target: { build: true } } } },
            { prompt: '그래프에서 가장 많은 친구가 쓰는 시설은?', toolOptions: Object.assign({}, BAR, { mode: 'read', data: STATS, question: '가장 많이 쓰는 시설은?', choices: ['승강기', '자동문', '회전문', '에스컬레이터'] }), target: { pick: 0 }, difficulty: 0.15 },
            { prompt: '자동문과 에스컬레이터 가운데 더 많이 쓰는 것은?', toolOptions: Object.assign({}, BAR, { mode: 'read', data: STATS, question: '둘 가운데 더 많이 쓰는 것은?', choices: ['자동문', '에스컬레이터'] }), target: { pick: 0 }, difficulty: 0.2, conclude: '많이 쓰는 시설일수록 그 시설의 안전 수칙을 잘 알아 두어요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '표를 보고 빈칸을 채워요.', columns: ['시설', '친구 수(명)'], cells: [['승강기', '12'], ['자동문', ''], ['회전문', '3']], answer: '9' }] },
      }),
      C({
        id: 'saf-life.e34.g4-lift-facility.wrap.facility-check', type: 'wrap', title: '시설 이용 약속 점검표',
        method: '시설 이용 점검표', tool: 'kitchen', minutes: 7,
        levels: { easy: '점검 칸 2개에 표시한다.', base: '점검 칸 3개에 표시한다.', challenge: '점검 칸 4개에 표시한다.' },
        wrap: {
          teacher: '"오늘 배운 것 가운데 내일 승강기나 자동문을 쓸 때 지킬 것은 무엇인가요?" 점검표를 함께 읽고 지킬 수 있는 것에 표시하게 한다. 출구 2번에서 "손으로 막아요"를 고른 학생에게 "손 대신 무엇을 누르면 문이 열렸나요?"라고 되묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title: '시설 이용 약속', items: [{ id: 'open', text: '문 다 열린 뒤 지나기' }, { id: 'nohand', text: '문틈에 손 넣지 않기' }, { id: 'bell', text: '갇히면 비상 버튼' }] }, prompt: '내가 지킬 약속에 표시해요.', target: { selfCheck: true }, difficulty: 0.1,
              levels: { easy: { toolOptions: { items: [{ id: 'open', text: '문 다 열린 뒤 지나기' }, { id: 'bell', text: '갇히면 비상 버튼' }] } }, challenge: { toolOptions: { items: [{ id: 'open', text: '문 다 열린 뒤 지나기' }, { id: 'nohand', text: '문틈에 손 넣지 않기' }, { id: 'bell', text: '갇히면 비상 버튼' }, { id: 'slow', text: '회전문은 천천히' }] } } } },
            { type: 'choice', prompt: '승강기 문이 닫힐 때 다시 열려면?', options: ['손으로 막아요', '열림 버튼을 눌러요', '발을 넣어요'], answer: 1, difficulty: 0.1, explain: '손발을 넣지 말고 열림 버튼을 눌러요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '승강기·자동문·회전문 약속',
          items: [
            { type: 'check', prompt: '지킬 약속에 표시해요.', options: ['문이 다 열린 뒤 지나가요', '갇히면 비상 버튼을 눌러요', '회전문은 천천히 걸어요'] },
            { type: 'short', prompt: '학교 승강기에 갇혔다면 인터폰에 할 말을 한 줄로 써요(예: 본관 승강기예요).' },
          ],
          easy: { note: '손발 대신 버튼을 떠올려요.', items: [{ type: 'choice', prompt: '갇히면 누를 버튼은?', options: ['비상 버튼', '닫힘 버튼'], answer: '비상 버튼' }] },
        },
      }),
      C({
        id: 'saf-life.e34.g4-lift-facility.wrap.facility-self', type: 'wrap', title: '갇혔을 때 차례 다시 맞추기',
        method: '갇혔을 때 차례 스스로 점검', tool: 'timer', minutes: 7,
        levels: { easy: '차례 카드 3장을 맞춘다.', base: '차례 카드 4장을 맞춘다.', challenge: '섞인 카드 4장을 맞춘다(첫 카드가 바른 자리에 있지 않다).' },
        wrap: {
          teacher: '"오늘 배운 갇혔을 때 차례를 기억하나요?" 카드를 맞춘 뒤 자리에서 손으로 비상 버튼을 누르는 흉내와 인터폰에 할 말을 짝과 한 번 더 해 본다. 비상 버튼보다 기다리기를 먼저 놓은 학생에게 "버튼을 누르지 않고 기다리면 누가 내가 갇힌 것을 알까요?"라고 묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '갇혔을 때 차례', cards: ['기다리기', '비상 버튼', '침착하기', '인터폰에 말하기'] }, prompt: '승강기에 갇혔을 때 할 일을 차례대로 맞춰요.', target: { order: ['침착하기', '비상 버튼', '인터폰에 말하기', '기다리기'] }, difficulty: 0.15,
              levels: {
                easy: { prompt: '승강기에 갇혔을 때 할 일 3장을 차례대로 맞춰요.', toolOptions: { cards: ['기다리기', '침착하기', '비상 버튼'] }, target: { order: ['침착하기', '비상 버튼', '기다리기'] } },
                challenge: { toolOptions: { cards: ['인터폰에 말하기', '기다리기', '비상 버튼', '침착하기'] } },
              } },
            { type: 'choice', prompt: '인터폰으로 꼭 말할 것은?', options: ['내가 있는 곳', '좋아하는 노래', '친구 이름'], answer: 0, difficulty: 0.1, explain: '어디 승강기인지 말해야 빨리 도와주러 와요.' },
            { type: 'short', prompt: '갇혔을 때 인터폰에 할 말을 한 줄로 써요.' },
          ],
        },
        worksheet: {
          title: '갇혔을 때 차례',
          items: [
            { type: 'table', prompt: '차례대로 번호를 써요.', columns: ['할 일', '차례'], cells: [['비상 버튼 누르기', ''], ['침착하기', ''], ['기다리기', ''], ['인터폰에 말하기', '']], answer: '2, 1, 4, 3' },
            { type: 'draw', prompt: '비상 버튼을 누르고 침착하게 기다리는 모습을 그려요.' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 4학년 · 콘센트·멀티탭 안전 (별표 2 초등 생활안전 1)
  // ======================================================================================================
  {
    const C = T('g4-electric', 4);
    const HOUSE = {
      title: '우리 집 전기 지도', grid: [6, 3],
      regions: [
        { name: '욕실 세면대', cells: [[0, 0], [1, 0]] }, { name: '부엌 개수대', cells: [[2, 0], [3, 0]] }, { name: '베란다', cells: [[4, 0], [5, 0]] },
        { name: '거실 소파', cells: [[0, 1], [1, 1], [0, 2], [1, 2]] }, { name: '거실 텔레비전', cells: [[2, 1], [3, 1]] }, { name: '현관', cells: [[2, 2], [3, 2]] },
        { name: '내 방 책상', cells: [[4, 1], [5, 1]] }, { name: '내 방 침대', cells: [[4, 2], [5, 2]] },
      ],
    };
    M.push(
      C({
        id: 'saf-life.e34.g4-electric.intro.plug-scene', type: 'intro', title: '방 그림에서 전기 위험 찾기',
        method: '방 장면에서 전기 위험 찾기', tool: 'emotion', minutes: 6,
        levels: { easy: '위험한 곳 2곳(문어발 멀티탭, 물컵 옆 충전기)을 함께 고른다.', base: '위험한 곳 3곳을 스스로 고른다.', challenge: '위험한 곳 4곳을 고르고 짝에게 까닭을 말한다.' },
        intro: {
          teacher: '"이 방에서 불이 나거나 감전될 수 있는 곳은 어디일까요?" 시연 단추로 위험한 장면이 바구니에 담기는 것을 보이고 장면마다 까닭을 묻는다. "구멍만 남아 있으면 얼마든지 꽂아도 돼요"라는 말이 나오면 "한 멀티탭에 많이 꽂으면 전선은 어떻게 될까요? 만져 보면 어떨까요?"라고 되묻는다.',
          student: '방 그림에서 전기 때문에 위험한 곳을 고르고, 까닭을 짝에게 말해 보아요.',
          demo: { tool: 'emotion', options: { mode: 'pick', basket: '전기 위험', cards: [{ id: 'octo', text: '문어발 멀티탭' }, { id: 'cover', text: '덮개 있는 콘센트' }, { id: 'under', text: '가구 밑 전선' }, { id: 'cup', text: '물컵 옆 충전기' }, { id: 'wet', text: '젖은 손으로 플러그' }, { id: 'neat', text: '정리된 전선' }], shuffle: false }, sequence: [{ pick: ['octo', 'under', 'cup', 'wet'] }] },
          art: { draw: 'a paper bedroom with an overloaded power strip full of plugs, a cable squashed under a dresser and a phone charger beside a glass of water', banner: '전기, 어디가 위험할까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
      }),
      C({
        id: 'saf-life.e34.g4-electric.intro.plug-guess', type: 'intro', title: '플러그 뽑는 차례 보기',
        method: '플러그 뽑는 장면 차례 놓기', tool: 'story', minutes: 5,
        levels: { easy: '장면 카드 3장(손 말리기·끄기·뽑기)이 놓이는 것을 함께 본다.', base: '장면 카드 4장이 차례로 놓이는 것을 보고 따라 말한다.', challenge: '섞인 4장을 보고 차례를 먼저 짝과 말해 본 뒤 시연과 견준다.' },
        intro: {
          teacher: '"플러그를 뽑을 때 전선을 잡아당겨도 될까요?" 시연 단추로 손 말리기 → 스위치 끄기 → 플러그 머리 잡고 뽑기 → 전선 정리 카드가 차례로 놓이는 것을 보이고, 장면마다 왜 그렇게 하는지 묻는다. "전선을 당기면 더 빨라요"라는 말이 나오면 "전선을 당기면 안쪽 줄은 어떻게 될까요?"라고 되묻는다.',
          student: '플러그를 뽑는 바른 차례를 보고, 손으로 따라 해 보아요.',
          demo: { tool: 'story', options: { mode: 'order', slots: ['처음', '다음', '그다음', '끝'], cards: [{ id: 'wrap', text: '전선 정리' }, { id: 'dry', text: '손 말리기' }, { id: 'pull', text: '머리 잡고 뽑기' }, { id: 'off', text: '스위치 끄기' }] }, sequence: [{ order: ['dry', 'off', 'pull', 'wrap'] }] },
          art: { draw: 'a dry paper hand gently pulling a plug out by its head from a paper wall socket, a neatly coiled paper cable beside it', banner: '플러그는 머리를 잡고', extra: [{ motif: 'leaf', x: 300, y: 222 }] },
        },
      }),
      C({
        id: 'saf-life.e34.g4-electric.activity.plug-sort4', type: 'activity', title: '전기 바른 사용·위험한 사용',
        method: '바른 사용/위험한 사용', tool: 'mindmap', minutes: 14,
        levels: { easy: '카드 4장, 놓으면 바로 맞는지 알려 준다.', base: '카드 6장을 다 놓은 뒤 확인한다.', challenge: '헷갈리는 카드 2장이 더해진 8장을 나누고 까닭을 말한다.' },
        activity: {
          title: '전기 쓰는 장면 나누기', tool: 'mindmap',
          teacher: '"이 장면에서 전기는 안전하게 쓰이고 있나요?" 카드를 놓을 때마다 왜 그런지 짝과 말하게 한다. "전선을 가구 밑에 깔면 정리돼서 안전해요"라는 학생에게 "무거운 가구가 전선을 오래 누르면 전선 껍질은 어떻게 될까요?"라고 묻는다.',
          task: '전기 쓰는 장면 카드를 바른 사용과 위험한 사용으로 나누어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORT('콘센트를 쓰는 장면을 나누어요.', { topic: '콘센트' }, ['바른 사용', '위험한 사용'], [['빈 곳에 덮개', '마른 손으로 꽂기', '끝까지 꽂기'], ['젓가락 넣기', '젖은 손으로 꽂기', '반쯤 꽂아 두기']], 2, [['헐거우면 어른께'], ['불꽃 나도 계속']], 0.15),
            SORT('멀티탭을 쓰는 장면을 나누어요.', { topic: '멀티탭' }, ['바른 사용', '위험한 사용'], [['안 쓰면 스위치 끔', '먼지 닦기', '바닥에 바르게'], ['문어발로 꽂기', '멀티탭에 멀티탭', '가구 밑에 깔기']], 2, [['뜨거우면 쓰지 않음'], ['이불 속에 두기']], 0.2),
            SORT('충전기·전선을 쓰는 장면을 나누어요.', { topic: '충전기와 전선' }, ['바른 사용', '위험한 사용'], [['머리 잡고 뽑기', '물에서 멀리', '다 되면 뽑기'], ['전선 당겨 뽑기', '이불 속 충전', '전선 꽁꽁 묶기']], 2, [['벗겨지면 알리기'], ['욕실에서 충전']], 0.25, { conclude: '많이 꽂지 않고, 젖은 손은 말리고, 뜨겁거나 벗겨지면 쓰지 말고 어른께 알려요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '바르면 ○, 위험하면 ×를 써요.', columns: ['장면', '○ / ×'], cells: [['문어발로 꽂기', ''], ['마른 손으로 꽂기', ''], ['가구 밑에 깔기', ''], ['머리 잡고 뽑기', '']], answer: '×, ○, ×, ○' }] },
      }),
      C({
        id: 'saf-life.e34.g4-electric.activity.room-map4', type: 'activity', title: '우리 집 지도에 전기 위험 핀',
        method: '우리 집 지도에서 전기 위험 핀', tool: 'map', minutes: 13,
        levels: { easy: '핀을 놓으면 그 칸의 이름이 바로 보인다.', base: '지도의 이름을 보고 알맞은 곳에 핀을 꽂는다.', challenge: '핀을 꽂은 뒤 그곳에서 지킬 행동도 보기에서 고른다.' },
        activity: {
          title: '집 지도에 전기 위험 핀 꽂기', tool: 'map',
          teacher: '"우리 집에서 물과 전기가 가까이 있는 곳은 어디일까요?" 핀을 꽂기 전에 그곳에 어떤 전기 제품이 있는지 떠올려 말하게 한다. 침대를 고르는 학생에게 "침대 옆에서는 무엇을 조심해야 할까요? 이불 속 충전기는 어떨까요?"라고 되묻는다. 집마다 구조가 다르니 우리 집에서는 어디인지 생각해 보게 한다.',
          task: '집 지도를 보고 물음에 맞는 곳에 핀을 꽂아요.', levels: { easy: { readout: true }, base: {}, challenge: {} },
          items: [
            PIN(HOUSE, '젖은 손으로 헤어드라이어 플러그를 만지기 쉬운 곳에 꽂아요.', '욕실 세면대', { q: '이곳에서 지킬 행동은?', choices: ['손을 말리고 만져요', '물 묻은 채 꽂아요', '욕조 옆에서 써요'], answer: 0 }, 0.15),
            PIN(HOUSE, '무거운 가구가 전선을 누르기 쉬운 곳에 꽂아요.', '거실 소파', { q: '이곳 전선은 어떻게 할까요?', choices: ['소파 밑에 깔아 둬요', '눌리지 않게 빼 둬요', '꽁꽁 묶어요'], answer: 1 }, 0.2),
            PIN(HOUSE, '물이 튀는 곳 바로 옆 콘센트에 꽂아요.', '부엌 개수대', { q: '이곳에서 지킬 행동은?', choices: ['젖은 손은 닦고 써요', '물을 뿌려 닦아요', '젓가락으로 만져요'], answer: 0 }, 0.2),
            PIN(HOUSE, '충전기 여러 개를 한 멀티탭에 꽂기 쉬운 곳에 꽂아요.', '내 방 책상', { q: '이곳에서 지킬 행동은?', choices: ['다 꽂아 둬요', '다 된 충전기는 뽑아요', '이불 속에 둬요'], answer: 1 }, 0.25, { conclude: '물 가까운 곳, 가구 밑, 많이 꽂는 곳이 전기 위험 자리예요. 우리 집에서도 찾아봐요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '욕실에서 헤어드라이어를 쓰기 전에 할 일은?', options: ['손을 말려요', '물을 틀어 둬요', '젖은 손으로 꽂아요'], answer: '손을 말려요' }] },
      }),
      C({
        id: 'saf-life.e34.g4-electric.activity.hot-dilemma', type: 'activity', title: '갈림길: 멀티탭에서 탄 냄새',
        method: '갈림길: 멀티탭에서 탄 냄새가 나요', tool: 'dilemma', minutes: 14,
        levels: { easy: '갈림 1번, 보기 2개 가운데 고르고 결과를 본다.', base: '갈림 2번, 보기 3개씩 고르며 결과를 따라간다.', challenge: '갈림 2번을 지난 뒤 근거 카드 3장 가운데 알맞은 것을 고른다.' },
        activity: {
          title: '갈림길: 전기가 이상할 때', tool: 'dilemma',
          teacher: '"냄새가 나도 게임을 끝까지 하고 싶을 수 있어요. 그러면 어떻게 될까요?" 보기를 고르고 결과를 읽은 뒤, 바른 길에서 어른께 할 말을 짝과 연습한다. "물을 부으면 꺼져요"라는 학생에게 "전기가 흐르는 곳에 물이 닿으면 어떻게 될까요?"라고 묻는다. 뜨겁거나 냄새가 나면 만지지 말고 어른께 알린다는 점을 짚는다.',
          task: '장면을 읽고 보기를 골라요. 결과를 보고 다음 장면에서 또 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL('멀티탭에서 탄 냄새가 나요.', {
              text: '게임을 하는데 책상 밑 멀티탭에서 탄 냄새가 나요.', motif: 'cloud',
              choices: [
                { id: 'keep', text: '게임을 끝까지 한다', result: '냄새가 더 심해지고 멀티탭이 뜨거워졌어요.', impact: [{ who: '가족', text: '불이 날 수 있어요', tone: -1 }] },
                { id: 'off', text: '스위치를 끄고 어른께 알린다', result: '어른이 오셔서 멀티탭을 살펴보셨어요.', ending: '끄고 알려서 불이 나기 전에 막았어요.', next: {
                  text: '어른이 "많이 꽂아서 그래"라고 하세요. 다음엔 어떻게 할까요?', choices: [
                    { id: 'fewer', text: '꼭 필요한 것만 꽂는다', result: '멀티탭이 더는 뜨거워지지 않았어요.', impact: [{ who: '가족', text: '안전해요', tone: 1 }], ending: '많이 꽂지 않는 습관으로 같은 일을 막았어요.' },
                    { id: 'more', text: '멀티탭을 하나 더 잇는다', result: '전선이 더 뜨거워질 수 있어요.', impact: [{ who: '가족', text: '불이 날 수 있어요', tone: -1 }] },
                    { id: 'hide', text: '이불로 덮어 둔다', result: '열이 빠지지 못해 더 뜨거워졌어요.', impact: [{ who: '가족', text: '불이 날 수 있어요', tone: -1 }] },
                  ] } },
                { id: 'water', text: '물을 부어 식힌다', result: '물이 닿자 지지직 소리가 났어요.', impact: [{ who: '나', text: '감전될 수 있어요', tone: -1 }] },
              ] }, [['off', 'fewer']],
            [{ id: 'heat', text: '탄 냄새는 불이 날 수 있다는 신호라서' }, { id: 'many', text: '많이 꽂으면 뜨거워져서' }, { id: 'game', text: '게임을 끝내야 해서', why: '게임보다 불을 막는 것이 먼저예요.' }], ['heat', 'many'], 0.2),
            DIL('젖은 손으로 충전기를 뽑으려 해요.', {
              text: '손을 씻고 나오자 휴대폰 충전이 다 됐다는 소리가 나요.', motif: 'rain',
              choices: [
                { id: 'now', text: '젖은 손으로 바로 뽑는다', result: '손끝이 찌릿했어요.', impact: [{ who: '나', text: '감전될 수 있어요', tone: -1 }] },
                { id: 'dry', text: '수건으로 손을 말린다', result: '손이 보송보송해졌어요.', ending: '손을 말리고 뽑아 안전했어요.', next: {
                  text: '이제 충전기를 뽑을 차례예요. 어떻게 뽑을까요?', choices: [
                    { id: 'head', text: '플러그 머리를 잡고 뽑는다', result: '플러그가 쏙 빠졌어요.', impact: [{ who: '나', text: '안전해요', tone: 1 }], ending: '마른 손으로 머리를 잡고 뽑았어요.' },
                    { id: 'cord', text: '전선을 잡아당긴다', result: '전선 이음매가 헐거워졌어요.', impact: [{ who: '가족', text: '전선이 망가져요', tone: -1 }] },
                    { id: 'yank', text: '휴대폰째 홱 당긴다', result: '콘센트에서 플러그가 반쯤 빠진 채 걸렸어요.', impact: [{ who: '나', text: '위험해요', tone: -1 }] },
                  ] } },
                { id: 'shake', text: '손을 털고 뽑는다', result: '손에 물기가 남아 있었어요.', impact: [{ who: '나', text: '감전될 수 있어요', tone: -1 }] },
              ] }, [['dry', 'head']],
            [{ id: 'water', text: '물은 전기가 잘 흐르게 해서' }, { id: 'head', text: '전선을 당기면 망가져서' }, { id: 'quick', text: '빨리 뽑으면 괜찮아서', why: '빨리 해도 젖은 손은 위험해요. 먼저 말려요.' }], ['water', 'head'], 0.25),
            DIL('동생이 콘센트에 젓가락을 넣으려 해요.', {
              text: '거실에서 동생이 콘센트 구멍에 젓가락을 대려고 해요.', motif: 'house',
              choices: [
                { id: 'watch', text: '무슨 일이 생기나 본다', result: '동생 손이 콘센트에 점점 가까워졌어요.', impact: [{ who: '동생', text: '감전될 수 있어요', tone: -1 }] },
                { id: 'stop', text: '"안 돼!" 하고 젓가락을 받는다', result: '동생이 놀라 손을 멈췄어요.', ending: '바로 멈추게 해 동생을 지켰어요.', next: {
                  text: '동생이 또 할 것 같아요. 어떻게 할까요?', choices: [
                    { id: 'adult', text: '어른께 알려 덮개를 끼운다', result: '빈 콘센트에 덮개가 생겼어요.', impact: [{ who: '동생', text: '안전해요', tone: 1 }], ending: '어른께 알려 덮개로 위험을 막았어요.' },
                    { id: 'scold', text: '동생을 크게 혼낸다', result: '동생이 울고, 콘센트는 그대로예요.', impact: [{ who: '동생', text: '또 할 수 있어요', tone: -1 }] },
                    { id: 'nothing', text: '다시 놀러 간다', result: '동생이 혼자 콘센트 앞에 남았어요.', impact: [{ who: '동생', text: '위험해요', tone: -1 }] },
                  ] } },
                { id: 'show', text: '내가 먼저 해 보인다', result: '젓가락이 구멍에 닿자 불꽃이 튀었어요.', impact: [{ who: '나', text: '감전될 수 있어요', tone: -1 }] },
              ] }, [['stop', 'adult']],
            [{ id: 'metal', text: '쇠붙이는 전기가 잘 흘러서' }, { id: 'cover', text: '덮개로 다시 못 하게 막아서' }, { id: 'small', text: '구멍이 작아서 괜찮아서', why: '작은 구멍이어도 쇠붙이가 닿으면 감전돼요.' }], ['metal', 'cover'], 0.3, { conclude: '냄새·뜨거움·물기·쇠붙이는 전기 위험 신호예요. 만지지 말고 끄고 어른께 알려요.' }),
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '멀티탭에서 탄 냄새가 나면 스위치를 끄고 ___께 알려요.', answer: '어른' }] },
      }),
      C({
        id: 'saf-life.e34.g4-electric.activity.home-check4', type: 'activity', title: '집 전기 안전 점검표',
        method: '집 전기 안전 점검표', tool: 'kitchen', minutes: 14,
        levels: { easy: '점검 칸 2개 가운데 할 일만 표시한다.', base: '점검 칸 4개 가운데 할 일만 골라 표시한다.', challenge: '칸 4개를 표시한 뒤 고칠 방법을 짝과 비교해 말한다.' },
        activity: {
          title: '전기 안전 할 일만 표시하기', tool: 'kitchen',
          teacher: '"우리 집에서 이렇게 하고 있나요? 이 칸대로 하면 안전해질까요?" 점검표를 한 칸씩 읽고 안전해지는 일에만 표시하게 한다. "멀티탭에 멀티탭을 이으면 많이 꽂을 수 있어요"를 누르는 학생에게 "한 줄에 전기를 너무 많이 쓰면 어떻게 될까요?"라고 묻는다. 집에서 실제로 고치는 일은 어른과 함께 한다는 점을 짚는다.',
          task: '점검표에서 전기를 안전하게 쓰는 일만 골라 표시해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            CHK('멀티탭을 안전하게 쓰는 일만 표시해요.', '멀티탭 점검', [{ id: 'few', text: '꼭 필요한 것만', ok: true }, { id: 'chain', text: '멀티탭에 멀티탭', ok: false }, { id: 'switch', text: '안 쓰면 스위치 끔', ok: true }, { id: 'dust', text: '먼지 닦아 두기', ok: true }], [0, 1], 0.15),
            CHK('물 가까운 곳에서 할 일만 표시해요.', '물 가까운 곳', [{ id: 'dry', text: '손 말리고 만지기', ok: true }, { id: 'bath', text: '욕실에서 충전', ok: false }, { id: 'cup', text: '물컵은 멀리', ok: true }, { id: 'spray', text: '물 뿌려 닦기', ok: false }], [0, 3], 0.2),
            CHK('전선과 콘센트에서 할 일만 표시해요.', '전선·콘센트', [{ id: 'cover', text: '빈 곳에 덮개', ok: true }, { id: 'under', text: '가구 밑에 깔기', ok: false }, { id: 'peel', text: '벗겨지면 알리기', ok: true }, { id: 'pull', text: '전선 당겨 뽑기', ok: false }], [0, 1], 0.25, { conclude: '점검표로 집 전기를 살피고, 고칠 일은 어른과 함께 해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'check', prompt: '집에 가서 어른과 함께 살펴볼 것에 표시해요.', options: ['멀티탭에 많이 꽂혀 있나요', '빈 콘센트에 덮개가 있나요', '가구 밑에 전선이 있나요'] }] },
      }),
      C({
        id: 'saf-life.e34.g4-electric.wrap.elec-self', type: 'wrap', title: '전기 안전 스스로 점검',
        method: '전기 안전 스스로 점검', tool: 'timer', minutes: 7,
        levels: { easy: '점검 칸 2개에 표시한다.', base: '점검 칸 3개에 표시한다.', challenge: '점검 칸 4개에 표시한다.' },
        wrap: {
          teacher: '"오늘 배운 전기 안전 가운데 내가 지금부터 할 수 있는 것은 무엇인가요?" 점검 칸을 함께 읽고 표시하게 한다. 출구 2번에서 "물을 부어요"를 고른 학생에게 "물과 전기가 만나면 어떻게 된다고 했나요?"라고 되묻는다.',
          exitTicket: [
            SELF('전기 안전 점검', ['젖은 손은 말리고 만져요', '많이 꽂지 않아요', '플러그 머리를 잡아요', '뜨거우면 어른께 알려요']),
            { type: 'choice', prompt: '충전기 전선이 뜨거우면 어떻게 할까요?', options: ['물을 부어요', '쓰지 않고 어른께 알려요', '이불로 덮어요'], answer: 1, difficulty: 0.1, explain: '뜨거운 전선은 쓰지 말고 어른께 알려요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '전기를 안전하게',
          items: [
            { type: 'check', prompt: '지킬 것에 표시해요.', options: ['마른 손으로 만지기', '멀티탭에 조금만', '플러그 머리 잡고 뽑기'] },
            { type: 'short', prompt: '우리 집에서 고치고 싶은 전기 위험을 한 줄로 써요.' },
          ],
          easy: { note: '물, 많이 꽂기, 뜨거움을 떠올려요.', items: [{ type: 'choice', prompt: '플러그는 어디를 잡고 뽑나요?', options: ['머리', '전선'], answer: '머리' }] },
        },
      }),
      C({
        id: 'saf-life.e34.g4-electric.wrap.elec-story', type: 'wrap', title: '가족에게 알려 주는 전기 안전',
        method: '가족에게 알려 주는 말', tool: 'story', minutes: 7,
        levels: { easy: '말풍선 빈칸 1개를 채운다.', base: '말풍선 빈칸 2개를 채운다.', challenge: '말풍선 빈칸 3개를 채운다.' },
        wrap: {
          teacher: '"오늘 배운 것을 집에 가서 가족에게 알려 준다면 뭐라고 말할까요?" 말풍선을 채운 뒤 짝에게 가족에게 말하듯 읽어 주게 한다. 어른에게 명령하듯 말하는 학생에게 "가족이 기분 좋게 들으려면 어떻게 말하면 좋을까요?"라고 묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'story', options: { mode: 'fill', slots: [{ id: 'e1', who: '나', label: '멀티탭에 ___ 꽂지 마세요.' }, { id: 'e2', who: '나', label: '플러그는 ___ 잡고 뽑아요.' }], cards: ['너무 많이', '머리를', '전선을', '말린 손'] }, prompt: '가족에게 알려 줄 말을 완성해요.', target: { fill: { e1: '너무 많이', e2: '머리를' } }, difficulty: 0.15,
              levels: {
                easy: { prompt: '가족에게 알려 줄 말 한 칸을 채워요.', toolOptions: { slots: [{ id: 'e1', who: '나', label: '멀티탭에 ___ 꽂지 마세요.' }], cards: ['너무 많이', '하나만'] }, target: { fill: { e1: '너무 많이' } } },
                challenge: { prompt: '가족에게 알려 줄 말 세 칸을 채워요.', toolOptions: { slots: [{ id: 'e1', who: '나', label: '멀티탭에 ___ 꽂지 마세요.' }, { id: 'e2', who: '나', label: '플러그는 ___ 잡고 뽑아요.' }, { id: 'e3', who: '나', label: '___으로 만져요.' }], cards: ['너무 많이', '머리를', '전선을', '말린 손', '젖은 손'] }, target: { fill: { e1: '너무 많이', e2: '머리를', e3: '말린 손' } } },
              } },
            { type: 'choice', prompt: '가족에게 알려 줄 때 알맞은 말은?', options: ['"우리 같이 살펴봐요"', '"왜 그것도 몰라요"', '말하지 않아요'], answer: 0, difficulty: 0.1, explain: '함께 살펴보자고 말하면 가족도 기분 좋게 들어요.' },
            { type: 'short', prompt: '가족과 함께 지킬 전기 약속을 하나 써요.' },
          ],
        },
        worksheet: {
          title: '가족에게 알려 줄 전기 안전',
          items: [
            { type: 'blank', prompt: '말풍선을 채워요.', text: '"젖은 손은 ___ 플러그를 만져요."', answer: '말리고' },
            { type: 'draw', prompt: '가족에게 전기 안전을 알려 주는 모습을 그려요.' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 4학년 · 커터칼·송곳·글루건 쓰기 (별표 2 초등 생활안전 2)
  // ======================================================================================================
  {
    const C = T('g4-craft-tools', 4);
    const TL = { mode: 'sort', axis: ['먼저', '나중'] };
    const PHASE = [{ id: 'before', label: '만들기 전' }, { id: 'during', label: '만들기 중' }, { id: 'after', label: '만들기 후' }];
    M.push(
      C({
        id: 'saf-life.e34.g4-craft-tools.intro.craft-scene', type: 'intro', title: '만들기 책상에서 위험 찾기',
        method: '만들기 책상에서 위험 찾기', tool: 'emotion', minutes: 6,
        levels: { easy: '위험한 곳 2곳(길게 뺀 칼날, 눕혀 둔 글루건)을 함께 고른다.', base: '위험한 곳 3곳을 스스로 고른다.', challenge: '3곳을 고르고 어떻게 바꾸면 되는지 까닭과 함께 말한다.' },
        intro: {
          teacher: '"만들기 책상 그림이에요. 이대로 두면 누가 어떻게 다칠 수 있을까요?" 시연 단추로 위험한 장면이 바구니에 담기는 것을 보이고 장면마다 까닭을 묻는다. "글루건은 끄면 바로 식어요"라는 말이 나오면 "끈 지 얼마 안 된 글루건 끝을 만지면 어떨까요?"라고 되묻는다.',
          student: '만들기 책상 그림에서 위험한 곳을 고르고, 어떻게 바꾸면 좋을지 짝에게 말해 보아요.',
          demo: { tool: 'emotion', options: { mode: 'pick', basket: '위험해요', cards: [{ id: 'long', text: '길게 뺀 칼날' }, { id: 'stand', text: '받침대 위 글루건' }, { id: 'lying', text: '눕혀 둔 글루건' }, { id: 'ruler', text: '자 대고 자르기' }, { id: 'awl', text: '받침 없는 송곳' }], shuffle: false }, sequence: [{ pick: ['long', 'lying', 'awl'] }] },
          art: { draw: 'a paper craft table with a cutter knife with a long blade out, a hot glue gun lying on its side and an awl on a paper box without a board', banner: '만들기 책상 살피기', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
      }),
      C({
        id: 'saf-life.e34.g4-craft-tools.intro.burn-body', type: 'intro', title: '도구에 다치기 쉬운 몸 자리',
        method: '다치기 쉬운 손 부위', tool: 'body', minutes: 5,
        levels: { easy: '글루건 끝이 닿기 쉬운 피부 한 곳을 함께 짚는다.', base: '피부와 칼날 앞에 놓이기 쉬운 손목, 두 곳을 짚는다.', challenge: '무릎 위에서 자를 때 다치는 허벅지까지 세 곳을 짚는다.' },
        intro: {
          teacher: '"글루건이나 커터칼을 쓸 때 우리 몸의 어디를 다치기 쉬울까요?" 시연 단추로 종이 몸에서 피부(글루건 끝·녹은 풀) → 손목(종이를 잡은 손이 칼날 앞) → 허벅지(무릎 위에 놓고 자를 때)가 차례로 짚이는 것을 보인다. "손가락만 조심하면 돼요"라는 말이 나오면 "무릎 위에 종이를 올려놓고 자르다 미끄러지면 칼날이 어디로 갈까요?"라고 되묻는다.',
          student: '도구를 쓸 때 다치기 쉬운 몸 자리를 보고, 책상 위에서만 쓰기로 약속해 보아요.',
          demo: { tool: 'body', options: { mode: 'parts', parts: ['손목', '피부', '팔꿈치', '가슴', '허벅지', '무릎'], names: true }, sequence: [{ parts: ['피부'] }, { parts: ['피부', '손목'] }, { parts: ['피부', '손목', '허벅지'] }] },
          art: { draw: 'a paper body figure working at a craft desk, small paper warning stars on the wrist and the thigh, a glue gun standing on its stand', banner: '책상 위에서만 써요', extra: [{ motif: 'leaf', x: 300, y: 222 }] },
        },
      }),
      C({
        id: 'saf-life.e34.g4-craft-tools.activity.craft-match', type: 'activity', title: '도구와 바른 쓰기 잇기',
        method: '도구와 바른 쓰기 잇기', tool: 'mindmap', minutes: 14,
        levels: { easy: '가지 2개에 카드를 잇는다.', base: '가지 3개(커터칼·송곳·글루건)에 카드를 잇는다.', challenge: '가지 3개에 잇고, 남는 함정 카드 하나를 가려낸다.' },
        activity: {
          title: '도구와 바른 쓰기 잇기', tool: 'mindmap',
          teacher: '"이 도구를 쓸 때 가장 조심할 것은 무엇일까요?" 한 가지를 이을 때마다 왜 그렇게 써야 하는지 짝에게 말하게 한다. "커터칼 날은 길게 빼야 잘 잘려요"라는 학생에게 "날이 길면 휘거나 부러질 때 어떻게 될까요?"라고 묻는다.',
          task: '도구 가지마다 알맞은 카드를 하나씩 이어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            MATCH('도구마다 바른 쓰기를 이어요.', { topic: '바른 쓰기' }, [['커터칼', '칼날 한두 칸만'], ['송곳', '받침 나무 대기'], ['글루건', '받침대에 세우기']], '칼날 길게 빼기', 0.15),
            MATCH('도구마다 조심할 점을 이어요.', { topic: '조심할 점' }, [['커터칼', '날이 부러질 수 있음'], ['송곳', '끝이 손을 찌름'], ['글루건', '끝과 풀이 뜨거움']], '맛이 이상함', 0.2),
            MATCH('도구마다 다 쓴 뒤 할 일을 이어요.', { topic: '다 쓴 뒤' }, [['커터칼', '날 넣고 잠그기'], ['송곳', '뚜껑 씌우기'], ['글루건', '끄고 식히기']], '주머니에 넣기', 0.25, { conclude: '도구마다 다치는 자리가 달라요. 쓰기·조심·정리 세 가지를 함께 기억해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '도구와 바른 쓰기를 이어 써요.', columns: ['도구', '바른 쓰기'], cells: [['커터칼', ''], ['글루건', '']], answer: '칼날 한두 칸만, 받침대에 세우기' }] },
      }),
      C({
        id: 'saf-life.e34.g4-craft-tools.activity.glue-order', type: 'activity', title: '만들기 도구 쓰는 차례',
        method: '글루건 쓰는 차례', tool: 'kitchen', minutes: 13,
        levels: { easy: '카드 3장, 놓으면 바로 맞는지 알려 준다.', base: '카드 4장을 차례대로 놓은 뒤 확인한다.', challenge: '함정 카드 1장이 섞인 5장에서 그것을 빼고 4장을 놓는다.' },
        activity: {
          title: '만들기 도구 쓰는 차례', tool: 'kitchen',
          teacher: '"글루건을 켜기 전에 먼저 할 일은 무엇일까요?" 카드를 다 놓은 뒤 차례대로 읽으며 손으로 흉내를 내 본다(세우기 → 기다리기 → 쓰기 → 끄고 식히기). 쓰자마자 정리하는 카드를 앞에 놓는 학생에게 "끈 글루건을 바로 통에 넣으면 무엇이 녹을까요?"라고 묻는다.',
          task: '카드를 하는 차례대로 놓아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORD('글루건을 쓰는 차례로 놓아요.', { autoMotif: false }, [{ id: 'stand', text: '받침대에 세우기' }, { id: 'heat', text: '켜고 데워지길 기다림' }, { id: 'use', text: '끝은 아래로 쓰기' }, { id: 'cool', text: '끄고 식히기' }], 2, { id: 'touch', text: '끝 만져 보기', why: '글루건 끝과 녹은 풀은 뜨거워서 데어요.' }, 0.15),
            ORD('커터칼로 자르는 차례로 놓아요.', { autoMotif: false }, [{ id: 'mat', text: '받침판 깔기' }, { id: 'blade', text: '칼날 한두 칸만' }, { id: 'ruler', text: '자 대고 자르기' }, { id: 'lock', text: '날 넣고 잠그기' }], 0, { id: 'knee', text: '무릎 위에서 자르기', why: '무릎 위에서 자르다 미끄러지면 다리를 다쳐요.' }, 0.2),
            ORD('송곳으로 구멍을 뚫는 차례로 놓아요.', { autoMotif: false }, [{ id: 'board', text: '받침 나무 대기' }, { id: 'side', text: '잡은 손은 옆으로' }, { id: 'twist', text: '천천히 돌려 뚫기' }, { id: 'cap', text: '뚜껑 씌우기' }], 1, { id: 'hand', text: '손바닥 위에서 뚫기', why: '손바닥 위에서 뚫으면 송곳 끝이 손을 찔러요.' }, 0.25, { conclude: '쓰기 전 준비, 바른 쓰기, 다 쓴 뒤 정리까지가 도구 쓰는 차례예요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '커터칼 칼날은 얼마나 뺄까요?', options: ['한두 칸만', '끝까지 다', '빼지 않고 자르기'], answer: '한두 칸만' }] },
      }),
      C({
        id: 'saf-life.e34.g4-craft-tools.activity.cut-dilemma', type: 'activity', title: '갈림길: 손가락이 살짝 베였어요',
        method: '갈림길: 손가락을 살짝 베였어요', tool: 'dilemma', minutes: 14,
        levels: { easy: '갈림 1번, 보기 2개 가운데 고르고 결과를 본다.', base: '갈림 2번, 보기 3개씩 고르며 결과를 따라간다.', challenge: '갈림 2번을 지난 뒤 근거 카드 3장 가운데 알맞은 것을 고른다.' },
        activity: {
          title: '갈림길: 만들기 시간에 생긴 일', tool: 'dilemma',
          teacher: '"조금 다쳤을 때 숨기고 싶은 마음이 들 수 있어요. 숨기면 어떻게 될까요?" 보기를 고르고 결과를 읽은 뒤, 선생님께 알리는 말을 짝과 연습한다("선생님, 손가락이 조금 베였어요"). 숨기는 쪽을 고른 학생에게 "선생님은 작은 상처도 알고 싶어 하세요. 알리면 무엇이 좋아질까요?"라고 묻는다.',
          task: '장면을 읽고 보기를 골라요. 결과를 보고 다음 장면에서 또 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL('커터칼에 손가락이 살짝 베였어요.', {
              text: '상자를 자르다 커터칼에 손가락이 살짝 베여 피가 조금 나요.', motif: 'star',
              choices: [
                { id: 'hide', text: '주먹을 쥐고 숨긴다', result: '피가 멈추지 않고 손이 욱신거려요.', impact: [{ who: '나', text: '상처가 더러워질 수 있어요', tone: -1 }] },
                { id: 'tell', text: '칼을 내려놓고 선생님께 알린다', result: '선생님이 상처를 살펴보셨어요.', ending: '바로 알려서 상처를 깨끗이 돌봤어요.', next: {
                  text: '선생님이 "보건실에 가자"고 하세요. 칼은 어떻게 할까요?', choices: [
                    { id: 'lock', text: '날을 넣고 잠가 둔다', result: '짝이 칼에 닿지 않았어요.', impact: [{ who: '짝', text: '안전해요', tone: 1 }], ending: '칼을 잠가 두고 보건실에 가 상처를 돌봤어요.' },
                    { id: 'open', text: '날을 뺀 채 둔다', result: '짝이 책상을 짚다 칼에 닿을 뻔했어요.', impact: [{ who: '짝', text: '베일 수 있어요', tone: -1 }] },
                    { id: 'carry', text: '칼을 들고 간다', result: '복도에서 칼을 든 채 걷게 됐어요.', impact: [{ who: '복도 친구', text: '다칠 수 있어요', tone: -1 }] },
                  ] } },
                { id: 'lick', text: '입으로 빨고 계속한다', result: '상처에 침이 묻고 피가 또 났어요.', impact: [{ who: '나', text: '상처가 덧날 수 있어요', tone: -1 }] },
              ] }, [['tell', 'lock']],
            [{ id: 'care', text: '알려야 상처를 깨끗이 돌봐서' }, { id: 'tool', text: '칼을 잠가야 다른 친구도 안전해서' }, { id: 'shame', text: '창피하니까 숨겨서', why: '다친 것은 창피한 일이 아니에요. 알리는 것이 먼저예요.' }], ['care', 'tool'], 0.2),
            DIL('글루건 풀이 손등에 떨어졌어요.', {
              text: '글루건으로 붙이다 뜨거운 풀이 손등에 톡 떨어졌어요.', motif: 'sun',
              choices: [
                { id: 'peel', text: '풀을 손톱으로 뜯는다', result: '살갗까지 같이 뜯겨 아팠어요.', impact: [{ who: '나', text: '더 다쳤어요', tone: -1 }] },
                { id: 'tell', text: '글루건을 세우고 바로 알린다', result: '선생님이 오셔서 손을 살펴보셨어요.', ending: '세워 두고 알려서 손을 바로 돌봤어요.', next: {
                  text: '선생님이 손을 돌봐 주시는 동안 글루건은 켜져 있어요.', choices: [
                    { id: 'off', text: '짝에게 꺼 달라고 한다', result: '짝이 받침대 위 글루건을 껐어요.', impact: [{ who: '모둠', text: '안전해요', tone: 1 }], ending: '글루건을 끄고 손을 돌봐 둘 다 안전해졌어요.' },
                    { id: 'lie', text: '책상에 눕혀 둔다', result: '눕힌 글루건 끝이 종이를 녹였어요.', impact: [{ who: '모둠', text: '불이 날 수 있어요', tone: -1 }] },
                    { id: 'pass', text: '짝에게 켠 채 넘긴다', result: '짝이 끝을 잡을 뻔했어요.', impact: [{ who: '짝', text: '델 수 있어요', tone: -1 }] },
                  ] } },
                { id: 'shake', text: '손을 마구 턴다', result: '풀이 옆 친구 옷에 튀었어요.', impact: [{ who: '옆 친구', text: '델 수 있어요', tone: -1 }] },
              ] }, [['tell', 'off']],
            [{ id: 'hot', text: '글루건 풀은 뜨거워서' }, { id: 'stand', text: '세워 둬야 다른 곳이 안 녹아서' }, { id: 'small', text: '작은 방울이니 괜찮아서', why: '작은 방울도 살갗을 데게 해요.' }], ['hot', 'stand'], 0.25),
            DIL('친구가 커터칼 날을 길게 빼고 장난쳐요.', {
              text: '짝이 커터칼 날을 끝까지 빼고 칼싸움 흉내를 내요.', motif: 'flower',
              choices: [
                { id: 'join', text: '자로 같이 칼싸움한다', result: '칼날이 휘청하며 책상에 부딪혔어요.', impact: [{ who: '짝과 나', text: '다칠 수 있어요', tone: -1 }] },
                { id: 'stop', text: '"날 넣어, 위험해" 말한다', result: '짝이 멈칫하며 칼을 내려다봐요.', ending: '장난을 멈추게 해 둘 다 다치지 않았어요.', next: {
                  text: '짝이 "괜찮아, 조심할게" 하며 다시 날을 흔들어요.', choices: [
                    { id: 'teacher', text: '선생님께 알린다', result: '선생님이 짝과 함께 칼을 정리하셨어요.', impact: [{ who: '짝', text: '안전해요', tone: 1 }], ending: '어른께 알려 위험한 장난을 멈췄어요.' },
                    { id: 'grab', text: '칼을 빼앗는다', result: '빼앗다가 날이 내 손을 스쳤어요.', impact: [{ who: '나', text: '베일 수 있어요', tone: -1 }] },
                    { id: 'watch', text: '구경한다', result: '장난이 더 커졌어요.', impact: [{ who: '둘레 친구', text: '다칠 수 있어요', tone: -1 }] },
                  ] } },
                { id: 'laugh', text: '웃으며 본다', result: '짝이 신나서 더 크게 흔들어요.', impact: [{ who: '짝', text: '다칠 수 있어요', tone: -1 }] },
              ] }, [['stop', 'teacher']],
            [{ id: 'snap', text: '긴 날은 부러져 튈 수 있어서' }, { id: 'adult', text: '빼앗기보다 어른께 알리는 게 안전해서' }, { id: 'tattle', text: '이르면 친구가 싫어해서', why: '위험한 일을 알리는 것은 친구를 지키는 일이에요.' }], ['snap', 'adult'], 0.3, { conclude: '다치면 숨기지 말고 알리고, 도구는 세우거나 잠가 둬요. 위험한 장난은 어른께 알려요.' }),
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '만들기 하다 다치면 숨기지 말고 선생님께 바로 ___.', answer: '알려요' }] },
      }),
      C({
        id: 'saf-life.e34.g4-craft-tools.activity.tool-tl4', type: 'activity', title: '만들기 시간 전·중·후 할 일',
        method: '만들기 시간 전·중·후', tool: 'timeline', minutes: 14,
        levels: { easy: '카드 4장, 놓으면 바로 맞는지 알려 준다.', base: '카드 6장을 세 구간에 나눈다.', challenge: '카드 8장을 세 구간에 나눈다.' },
        activity: {
          title: '만들기 시간 전·중·후 할 일', tool: 'timeline',
          teacher: '"이 일은 만들기 시작 전에 할까요, 하는 동안에 할까요, 끝난 뒤에 할까요?" 카드를 다 놓으면 구간마다 소리 내어 읽게 한다. 글루건 끄기를 만들기 중에 놓는 학생에게 "다 쓰고 끈 글루건은 바로 치울 수 있을까요?"라고 묻는다.',
          task: '할 일 카드를 만들기 전·만들기 중·만들기 후 구간에 나누어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORT('글루건을 쓰는 날의 할 일을 나누어요.', TL, PHASE, [['받침대 놓기', '둘레 종이 치우기'], ['끝은 아래로', '쓸 때만 손에'], ['끄고 식히기', '식은 뒤 통에']], [1, 2, 1], [['전선 걸림 살피기'], [], ['코드 뽑기']], 0.15),
            SORT('커터칼을 쓰는 날의 할 일을 나누어요.', TL, PHASE, [['받침판 깔기', '자 준비하기'], ['날 한두 칸만', '자 대고 자르기'], ['날 넣고 잠그기', '부러진 날 감싸기']], [2, 1, 1], [['책상 비우기'], ['손은 날 뒤에'], []], 0.2),
            SORT('송곳을 쓰는 날의 할 일을 나누어요.', TL, PHASE, [['받침 나무 대기', '뚜껑 확인'], ['천천히 돌리기', '잡은 손은 옆에'], ['뚜껑 씌우기', '도구 통에 넣기']], [1, 1, 2], [[], ['몸 쪽으로 안 누름'], ['나무 부스러기 쓸기']], 0.25, { conclude: '만들기 전에는 자리를 준비하고, 하는 동안에는 바르게 쓰고, 끝나면 식히고 잠가 정리해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '언제 할 일인지 써요.', columns: ['할 일', '전 / 중 / 후'], cells: [['받침판 깔기', ''], ['자 대고 자르기', ''], ['끄고 식히기', '']], answer: '전, 중, 후' }] },
      }),
      C({
        id: 'saf-life.e34.g4-craft-tools.wrap.craft-check', type: 'wrap', title: '만들기 도구 스스로 점검',
        method: '도구 사용 스스로 점검', tool: 'timer', minutes: 7,
        levels: { easy: '점검 칸 2개에 표시한다.', base: '점검 칸 3개에 표시한다.', challenge: '점검 칸 4개에 표시한다.' },
        wrap: {
          teacher: '"오늘 칼날은 한두 칸만 뺐나요? 글루건은 받침대에 세웠나요?" 점검 칸을 함께 읽고 표시하게 한다. 출구 2번에서 "끄면 바로 넣어요"를 고른 학생에게 "끈 지 얼마 안 된 글루건 끝은 어떨까요?"라고 되묻는다.',
          exitTicket: [
            SELF('만들기 도구 점검', ['칼날은 한두 칸만', '글루건은 받침대에', '다 쓰고 전원을 껐어요', '도구를 정리했어요']),
            { type: 'choice', prompt: '글루건을 끈 뒤에는?', options: ['바로 통에 넣어요', '식을 때까지 세워 둬요', '끝을 만져 봐요'], answer: 1, difficulty: 0.1, explain: '글루건은 끈 뒤에도 한동안 뜨거워서 식을 때까지 세워 둬요.' },
            { type: 'short', prompt: '다음 만들기 시간에 더 조심할 점을 하나 써요.' },
          ],
        },
        worksheet: {
          title: '만들기 도구 바르게',
          items: [
            { type: 'check', prompt: '오늘 지킨 것에 표시해요.', options: ['칼날 한두 칸만', '글루건은 받침대에', '송곳은 받침 나무 위에서'] },
            { type: 'draw', prompt: '도구를 정리한 내 책상을 그려요.' },
          ],
          easy: { note: '칼날·전원·정리를 떠올려요.', items: [{ type: 'choice', prompt: '다 쓴 커터칼은?', options: ['날 넣고 잠가요', '날 뺀 채 둬요'], answer: '날 넣고 잠가요' }] },
        },
      }),
      C({
        id: 'saf-life.e34.g4-craft-tools.wrap.craft-feel', type: 'wrap', title: '다친 것을 알린 나의 마음',
        method: '알린 나의 마음', tool: 'emotion', minutes: 7,
        levels: { easy: '장면 1개에 마음 카드를 짝 짓는다.', base: '장면 2개에 마음 카드를 짝 짓는다.', challenge: '장면 3개에 짝 짓고 한 장면의 까닭을 말한다.' },
        wrap: {
          teacher: '"다친 것을 바로 알렸을 때 내 마음은 어땠을까요?" 장면마다 마음 카드를 짝 짓고 까닭을 한 명씩 말하게 한다. "혼날까 봐 걱정됐어요"라는 학생에게 그 마음도 괜찮다고 말해 주고 "알리고 나서는 마음이 어떻게 바뀌었을까요?"라고 묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'emotion', options: { mode: 'match', slots: [{ id: 's1', label: '다친 것을 바로 알림' }, { id: 's2', label: '짝의 장난을 멈추게 함' }], cards: ['편안함', '뿌듯함', '고마움', '신남'] }, prompt: '장면과 내 마음을 이어요.', target: { match: { s1: ['편안함', '고마움'], s2: ['뿌듯함', '편안함'] } }, difficulty: 0.15,
              levels: { easy: { toolOptions: { slots: [{ id: 's1', label: '다친 것을 바로 알림' }] }, target: { match: { s1: ['편안함', '고마움'] } } }, challenge: { toolOptions: { slots: [{ id: 's1', label: '다친 것을 바로 알림' }, { id: 's2', label: '짝의 장난을 멈추게 함' }, { id: 's3', label: '도구를 다 정리함' }] }, target: { match: { s1: ['편안함', '고마움'], s2: ['뿌듯함', '편안함'], s3: ['뿌듯함', '편안함', '신남'] } } } } },
            { type: 'choice', prompt: '만들기 하다 조금 다치면?', options: ['숨기고 계속해요', '선생님께 바로 알려요', '입으로 빨아요'], answer: 1, difficulty: 0.1, explain: '작은 상처도 바로 알려야 깨끗하게 돌볼 수 있어요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '다치면 바로 알려요',
          items: [
            { type: 'blank', prompt: '알리는 말을 완성해요.', text: '"선생님, 손가락이 조금 ___."', answer: '베였어요' },
            { type: 'draw', prompt: '다친 것을 선생님께 알리는 모습을 그려요.' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 4학년 · 과학실 준비와 보호 장구 (별표 2 초등 생활안전 3)
  // ======================================================================================================
  {
    const C = T('g4-lab-prep', 4);
    const LAB4 = {
      title: '4학년 과학실', grid: [6, 4],
      regions: [
        { name: '출입문', cells: [[0, 3]] }, { name: '소화기', cells: [[1, 3]] }, { name: '눈 씻는 곳', cells: [[5, 0]] }, { name: '개수대', cells: [[5, 1], [5, 2]] },
        { name: '선생님 실험대', cells: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0]] }, { name: '1모둠', cells: [[0, 1], [1, 1]] }, { name: '2모둠', cells: [[3, 1], [4, 1]] },
        { name: '3모둠', cells: [[0, 2], [1, 2]] }, { name: '4모둠', cells: [[3, 2], [4, 2]] }, { name: '통로', cells: [[2, 1], [2, 2], [2, 3], [3, 3], [4, 3], [5, 3]] },
      ],
    };
    M.push(
      C({
        id: 'saf-life.e34.g4-lab-prep.intro.gear-pick', type: 'intro', title: '가열 실험에 필요한 보호 장구',
        method: '보호 장구 그림 고르기', tool: 'emotion', minutes: 6,
        levels: { easy: '보호 장구 2개(보안경·실험복)를 함께 고른다.', base: '보호 장구 3개를 스스로 고른다.', challenge: '3개를 고르고, 필요 없는 그림(슬리퍼·목도리)은 왜 빼는지 말한다.' },
        intro: {
          teacher: '"오늘은 알코올램프로 물을 데우는 실험을 한다고 생각해 봐요. 무엇을 입고 써야 할까요?" 시연 단추로 보호 장구가 바구니에 담기는 것을 보이고 장구마다 몸의 어디를 지키는지 묻는다. "보호 장구는 위험한 실험에만 잠깐 쓰면 돼요"라는 말이 나오면 "실험이 끝나고 정리할 때 뜨거운 기구를 만지면 어떨까요?"라고 되묻는다.',
          student: '가열 실험에 필요한 보호 장구를 고르고, 그 장구가 몸의 어디를 지키는지 짝에게 말해 보아요.',
          demo: { tool: 'emotion', options: { mode: 'pick', basket: '가열 실험 준비물', cards: [{ id: 'goggle', text: '보안경' }, { id: 'slipper', text: '슬리퍼' }, { id: 'coat', text: '실험복' }, { id: 'scarf', text: '긴 목도리' }, { id: 'glove', text: '내열 장갑' }], shuffle: false }, sequence: [{ pick: ['goggle', 'coat', 'glove'] }] },
          art: { draw: 'a paper child wearing safety goggles, a lab coat and heat resistant gloves beside a paper alcohol lamp and a beaker on a stand', banner: '보호 장구 먼저', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
      }),
      C({
        id: 'saf-life.e34.g4-lab-prep.intro.lab-map4', type: 'intro', title: '과학실 지도에서 비상 물품',
        method: '과학실 지도에서 비상 물품', tool: 'map', minutes: 5,
        levels: { easy: '소화기 한 곳에 핀이 꽂히는 것을 함께 본다.', base: '소화기·눈 씻는 곳 두 곳을 보고 언제 쓰는지 말한다.', challenge: '출입문까지 세 곳을 보고 우리 모둠 자리에서 가는 길을 말한다.' },
        intro: {
          teacher: '"눈에 무엇이 튀면 어디로 가야 할까요? 불이 나면 어디로 나가야 할까요?" 시연 단추로 소화기·눈 씻는 곳·출입문에 핀이 차례로 꽂히는 것을 보이고, 우리 과학실에서는 어디인지 손으로 가리키게 한다. "소화기는 내가 바로 쓰면 돼요"라는 말이 나오면 "불이 나면 먼저 누구에게 알려야 할까요?"라고 되묻는다.',
          student: '지도에서 소화기·눈 씻는 곳·출입문을 찾아보고, 우리 모둠 자리에서 가는 길을 짝과 말해 보아요.',
          demo: { tool: 'map', options: LAB4, sequence: [{ pin: [1, 3] }, { pin: [5, 0] }, { pin: [0, 3] }] },
          art: { draw: 'a paper cut floor plan of a science room with an eye wash station, a fire extinguisher and an exit door marked with paper pins', banner: '비상 물품 자리 알기', extra: [{ motif: 'leaf', x: 300, y: 222 }] },
        },
      }),
      C({
        id: 'saf-life.e34.g4-lab-prep.activity.prep-order', type: 'activity', title: '과학실 준비 순서 놓기',
        method: '과학실 준비 순서', tool: 'story', minutes: 14,
        levels: { easy: '장면 3장, 놓으면 바로 맞는지 알려 준다.', base: '장면 4장을 차례대로 놓은 뒤 확인한다.', challenge: '틀린 장면 1장이 섞인 5장에서 그것을 빼고 4장을 놓는다.' },
        activity: {
          title: '과학실 준비 순서 놓기', tool: 'story',
          teacher: '"보호 장구는 설명을 듣기 전에 쓸까요, 듣고 나서 쓸까요?" 카드를 다 놓은 뒤 모둠이 차례대로 준비를 몸으로 해 본다(머리 묶기 → 보안경 쓰기 → 설명 듣기 → 재료 확인). 재료부터 만지는 카드를 앞에 놓는 학생에게 "무엇을 하는 실험인지 모르고 재료를 만지면 어떻게 될까요?"라고 묻는다.',
          task: '장면 카드를 하는 차례대로 놓아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORD('과학실에 들어가 준비하는 차례로 놓아요.', {}, [{ id: 'hair', text: '긴 머리 묶기' }, { id: 'gear', text: '보호 장구 쓰기' }, { id: 'listen', text: '실험 설명 듣기' }, { id: 'check', text: '재료 확인하기' }], 0, { id: 'mix', text: '재료부터 섞기', why: '설명을 듣기 전에 섞으면 무엇이 생길지 몰라요.' }, 0.15),
            ORD('가열 실험을 시작하는 차례로 놓아요.', {}, [{ id: 'clear', text: '실험대 비우기' }, { id: 'goggle', text: '보안경 쓰기' }, { id: 'ok', text: '선생님 확인 받기' }, { id: 'light', text: '함께 불 붙이기' }], 2, { id: 'alone', text: '혼자 먼저 불 켜기', why: '선생님 확인 없이 불을 켜면 위험해요.' }, 0.2),
            ORD('가열 실험을 마치는 차례로 놓아요.', {}, [{ id: 'cap', text: '뚜껑 덮어 불 끄기' }, { id: 'wait', text: '식을 때까지 기다림' }, { id: 'tidy', text: '기구 제자리에' }, { id: 'wash', text: '손 씻기' }], 3, { id: 'grab', text: '뜨거운 비커 잡기', why: '방금 데운 비커는 뜨거워서 바로 잡으면 데어요.' }, 0.25, { conclude: '준비 → 보호 장구 → 설명 → 확인 차례를 지키고, 끝나면 식힌 뒤 정리해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '알코올램프는 입으로 불지 않고 ___을 덮어 꺼요.', answer: '뚜껑' }] },
      }),
      C({
        id: 'saf-life.e34.g4-lab-prep.activity.gear-match', type: 'activity', title: '실험과 보호 장구 잇기',
        method: '실험과 보호 장구 잇기', tool: 'mindmap', minutes: 13,
        levels: { easy: '가지 2개에 카드를 잇는다.', base: '가지 3개에 카드를 잇는다.', challenge: '가지 3개에 잇고, 남는 함정 카드 하나를 가려낸 뒤 까닭을 말한다.' },
        activity: {
          title: '실험과 보호 장구 잇기', tool: 'mindmap',
          teacher: '"이 장구는 몸의 어디를 지켜 줄까요?" 한 가지를 이을 때마다 그 실험에서 무엇이 위험한지 짝과 말하게 한다. "보안경은 불 쓸 때만 써요"라는 학생에게 "식초나 물감 물이 튀어도 눈에 들어갈 수 있을까요?"라고 묻는다.',
          task: '가지마다 알맞은 카드를 하나씩 이어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            MATCH('보호 장구마다 지키는 곳을 이어요.', { topic: '장구가 지키는 곳' }, [['보안경', '눈을 지켜요'], ['실험복', '옷과 몸을 지켜요'], ['내열 장갑', '뜨거울 때 손을']], '발을 따뜻하게', 0.15),
            MATCH('실험 장면마다 꼭 필요한 장구를 이어요.', { topic: '장면과 장구' }, [['뜨거운 비커 옮김', '내열 장갑'], ['눈에 튈 수 있는 액체', '보안경'], ['옷에 물드는 재료', '실험복']], '슬리퍼', 0.2),
            MATCH('장구를 바르게 쓰는 방법을 이어요.', { topic: '바르게 쓰기' }, [['보안경', '눈에 꼭 맞게'], ['긴 머리', '뒤로 묶기'], ['실험복 소매', '걷거나 여미기']], '목에 걸어 두기', 0.25, { conclude: '실험마다 위험한 곳이 달라요. 그곳을 지키는 장구를 실험 내내 바르게 써요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '장구와 지키는 곳을 이어 써요.', columns: ['장구', '지키는 곳'], cells: [['보안경', ''], ['내열 장갑', '']], answer: '눈, 손' }] },
      }),
      C({
        id: 'saf-life.e34.g4-lab-prep.activity.lamp-dilemma', type: 'activity', title: '갈림길: 알코올램프를 끌 때',
        method: '갈림길: 알코올램프를 끌 때', tool: 'dilemma', minutes: 14,
        levels: { easy: '갈림 1번, 보기 2개 가운데 고르고 결과를 본다.', base: '갈림 2번, 보기 3개씩 고르며 결과를 따라간다.', challenge: '갈림 2번을 지난 뒤 근거 카드 3장 가운데 알맞은 것을 고른다.' },
        activity: {
          title: '갈림길: 불과 연기를 다룰 때', tool: 'dilemma',
          teacher: '"생일 초는 불어서 끄는데, 알코올램프는 왜 다를까요?" 보기를 고르고 결과를 읽은 뒤 뚜껑을 덮는 동작을 손으로 따라 해 본다. 입으로 부는 쪽을 고른 학생에게 "불어서 불꽃이 내 쪽으로 오거나 알코올이 튀면 어떻게 될까요?"라고 묻는다. 이상한 냄새·연기가 나면 멈추고 알린다는 점을 함께 짚는다.',
          task: '장면을 읽고 보기를 골라요. 결과를 보고 다음 장면에서 또 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL('실험이 끝나 알코올램프를 꺼요.', {
              text: '물 데우기 실험이 끝났어요. 알코올램프를 꺼야 해요.', motif: 'sun',
              choices: [
                { id: 'blow', text: '입으로 훅 분다', result: '불꽃이 흔들리며 내 쪽으로 기울었어요.', impact: [{ who: '나', text: '델 수 있어요', tone: -1 }] },
                { id: 'cap', text: '옆에서 뚜껑을 덮는다', result: '불이 조용히 꺼졌어요.', ending: '뚜껑을 덮어 안전하게 불을 껐어요.', next: {
                  text: '불은 꺼졌는데 삼발이와 비커가 아직 뜨거워요.', choices: [
                    { id: 'wait', text: '식을 때까지 기다린다', result: '기구가 식은 뒤 안전하게 치웠어요.', impact: [{ who: '모둠', text: '안전해요', tone: 1 }], ending: '불을 끄고 식힌 뒤 정리했어요.' },
                    { id: 'touch', text: '맨손으로 바로 치운다', result: '손끝이 뜨거워 깜짝 놀랐어요.', impact: [{ who: '나', text: '델 수 있어요', tone: -1 }] },
                    { id: 'water', text: '찬물을 붓는다', result: '뜨거운 유리가 쩍 금이 갔어요.', impact: [{ who: '모둠', text: '유리에 다칠 수 있어요', tone: -1 }] },
                  ] } },
                { id: 'paper', text: '종이로 부채질한다', result: '종이 끝에 불이 옮겨붙을 뻔했어요.', impact: [{ who: '모둠', text: '불이 날 수 있어요', tone: -1 }] },
              ] }, [['cap', 'wait']],
            [{ id: 'cap', text: '뚜껑을 덮으면 불이 숨을 못 쉬어서' }, { id: 'hot', text: '불이 꺼져도 기구는 뜨거워서' }, { id: 'cake', text: '생일 초처럼 불면 되니까', why: '알코올램프는 불면 불꽃이 커지거나 튈 수 있어요.' }], ['cap', 'hot'], 0.2),
            DIL('가열 중에 짝의 소매가 불 가까이 가요.', {
              text: '알코올램프로 데우는데 짝의 실험복 소매가 불 쪽으로 늘어졌어요.', motif: 'star',
              choices: [
                { id: 'quiet', text: '괜찮겠지 하고 둔다', result: '소매 끝이 불꽃에 가까워졌어요.', impact: [{ who: '짝', text: '옷에 불이 붙을 수 있어요', tone: -1 }] },
                { id: 'say', text: '"소매 조심!" 바로 말한다', result: '짝이 깜짝 놀라 팔을 뺐어요.', ending: '바로 말해 짝의 소매에 불이 닿지 않았어요.', next: {
                  text: '짝이 소매를 어떻게 할지 물어요.', choices: [
                    { id: 'roll', text: '소매를 걷어 여민다', result: '소매가 더는 늘어지지 않아요.', impact: [{ who: '짝', text: '안전해요', tone: 1 }], ending: '소매를 여며 다시 위험해지지 않게 했어요.' },
                    { id: 'lean', text: '불 위로 몸을 숙인다', result: '머리카락이 불 쪽으로 쏠렸어요.', impact: [{ who: '짝', text: '델 수 있어요', tone: -1 }] },
                    { id: 'keep', text: '그냥 계속한다', result: '소매가 또 늘어졌어요.', impact: [{ who: '짝', text: '위험해요', tone: -1 }] },
                  ] } },
                { id: 'pull', text: '짝의 팔을 홱 당긴다', result: '실험대가 흔들려 비커가 기울었어요.', impact: [{ who: '모둠', text: '뜨거운 물에 델 수 있어요', tone: -1 }] },
              ] }, [['say', 'roll']],
            [{ id: 'cloth', text: '옷은 불에 쉽게 타서' }, { id: 'calm', text: '확 당기면 실험대가 흔들려서' }, { id: 'none', text: '내 소매가 아니라서', why: '모둠 친구의 안전도 함께 지켜요.' }], ['cloth', 'calm'], 0.25),
            DIL('실험 중에 이상한 냄새와 연기가 나요.', {
              text: '모둠 실험대 비커에서 매운 냄새와 하얀 연기가 올라와요.', motif: 'cloud',
              choices: [
                { id: 'sniff', text: '코를 대고 맡아 본다', result: '목이 따갑고 기침이 났어요.', impact: [{ who: '나', text: '숨쉬기가 힘들 수 있어요', tone: -1 }] },
                { id: 'stop', text: '멈추고 선생님께 알린다', result: '선생님이 불을 끄고 창문을 여셨어요.', ending: '멈추고 알려 연기를 빨리 빼냈어요.', next: {
                  text: '선생님이 "모두 떨어져"라고 하세요. 어떻게 할까요?', choices: [
                    { id: 'back', text: '실험대에서 떨어져 선다', result: '모둠 모두 연기에서 멀어졌어요.', impact: [{ who: '모둠', text: '안전해요', tone: 1 }], ending: '말씀대로 떨어져서 모두 안전했어요.' },
                    { id: 'look', text: '가까이 가서 구경한다', result: '연기를 더 들이마셨어요.', impact: [{ who: '나', text: '목이 아파요', tone: -1 }] },
                    { id: 'fan', text: '공책으로 부채질한다', result: '연기가 옆 모둠으로 퍼졌어요.', impact: [{ who: '옆 모둠', text: '연기를 마셔요', tone: -1 }] },
                  ] } },
                { id: 'more', text: '재료를 더 넣어 본다', result: '연기가 더 많이 났어요.', impact: [{ who: '모둠', text: '위험해요', tone: -1 }] },
              ] }, [['stop', 'back']],
            [{ id: 'signal', text: '냄새·연기는 이상하다는 신호라서' }, { id: 'adult', text: '선생님이 안전하게 멈출 수 있어서' }, { id: 'curious', text: '궁금하니까 더 해 봐서', why: '이상할 때는 더 해 보지 말고 멈춰요.' }], ['signal', 'adult'], 0.3, { conclude: '알코올램프는 뚜껑으로 끄고, 이상하면 멈추고 알리고, 뜨거운 기구는 식힌 뒤 만져요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '실험 중 이상한 냄새가 나면?', options: ['코를 대고 맡아요', '멈추고 선생님께 알려요', '재료를 더 넣어요'], answer: '멈추고 선생님께 알려요' }] },
      }),
      C({
        id: 'saf-life.e34.g4-lab-prep.activity.prep-check', type: 'activity', title: '모둠 실험 준비 점검표',
        method: '모둠 실험 준비 점검표', tool: 'kitchen', minutes: 14,
        levels: { easy: '점검 칸 2개 가운데 할 일만 표시한다.', base: '점검 칸 4개 가운데 할 일만 골라 표시한다.', challenge: '칸 4개를 표시한 뒤 모둠 역할(장구 확인·자리 정리·물 준비)을 나눠 서로 확인한다.' },
        activity: {
          title: '모둠 준비 할 일만 표시하기', tool: 'kitchen',
          teacher: '"우리 모둠은 실험할 준비가 되었나요? 누가 무엇을 확인할까요?" 점검표를 한 칸씩 읽고, 모둠원이 실제로 확인한 칸에만 표시하게 한다. 물 준비 칸을 빼먹는 모둠에게 "눈에 무엇이 튀거나 손에 묻으면 무엇이 필요할까요?"라고 묻는다.',
          task: '점검표에서 모둠 실험 전에 할 일만 골라 표시해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            CHK('보호 장구에서 할 일만 표시해요.', '보호 장구 점검', [{ id: 'goggle', text: '보안경 모두 썼나', ok: true }, { id: 'coat', text: '실험복 여몄나', ok: true }, { id: 'later', text: '장구는 나중에', ok: false }, { id: 'glove', text: '장갑 크기 맞나', ok: true }], [0, 2], 0.15),
            CHK('실험대에서 할 일만 표시해요.', '실험대 점검', [{ id: 'bag', text: '가방 치우기', ok: true }, { id: 'paper', text: '종이 쌓아 두기', ok: false }, { id: 'space', text: '불 둘레 비우기', ok: true }, { id: 'snack', text: '간식 꺼내 두기', ok: false }], [0, 1], 0.2),
            CHK('비상 준비에서 할 일만 표시해요.', '비상 준비 점검', [{ id: 'water', text: '물 받아 두기', ok: true }, { id: 'where', text: '소화기 자리 알기', ok: true }, { id: 'lock', text: '출입문 잠그기', ok: false }, { id: 'role', text: '알릴 사람 정하기', ok: true }], [1, 2], 0.25, { conclude: '모둠원이 역할을 나눠 장구·실험대·비상 준비를 서로 확인하고 시작해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'check', prompt: '우리 모둠이 확인한 것에 표시해요.', options: ['모두 보안경을 썼어요', '실험대를 비웠어요', '물을 받아 두었어요'] }] },
      }),
      C({
        id: 'saf-life.e34.g4-lab-prep.wrap.gear-self', type: 'wrap', title: '보호 장구 스스로 점검',
        method: '보호 장구 스스로 점검', tool: 'timer', minutes: 7,
        levels: { easy: '점검 칸 2개에 표시한다.', base: '점검 칸 3개에 표시한다.', challenge: '점검 칸 4개에 표시한다.' },
        wrap: {
          teacher: '"오늘 보호 장구를 실험이 끝날 때까지 바르게 썼나요?" 점검 칸을 함께 읽고 표시하게 한다. 보안경을 이마에 올렸던 학생에게 "보안경이 이마에 있으면 눈을 지켜 줄까요?"라고 묻고 다음에 바꿀 점으로 잇는다.',
          exitTicket: [
            SELF('보호 장구 점검', ['보안경을 눈에 맞게 썼어요', '실험복을 여몄어요', '긴 머리를 묶었어요', '끝날 때까지 벗지 않았어요']),
            { type: 'choice', prompt: '알코올램프를 끄는 바른 방법은?', options: ['입으로 불어요', '뚜껑을 덮어요', '물을 부어요'], answer: 1, difficulty: 0.1, explain: '알코올램프는 옆에서 뚜껑을 덮어 꺼요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '보호 장구 바르게',
          items: [
            { type: 'check', prompt: '오늘 쓴 장구에 표시해요.', options: ['보안경', '실험복', '내열 장갑'] },
            { type: 'short', prompt: '다음 실험에서 장구를 쓸 때 더 잘할 점을 써요.' },
          ],
          easy: { note: '눈·몸·손을 지키는 장구를 떠올려요.', items: [{ type: 'choice', prompt: '눈을 지키는 장구는?', options: ['보안경', '실험복'], answer: '보안경' }] },
        },
      }),
      C({
        id: 'saf-life.e34.g4-lab-prep.wrap.lab-tl4', type: 'wrap', title: '실험 전·중·후 할 일 정리',
        method: '실험 전·중·후 정리', tool: 'timeline', minutes: 7,
        levels: { easy: '할 일 카드 3장을 실험 전·중·후에 하나씩 놓는다.', base: '카드 5장을 세 구간에 나눈다.', challenge: '카드 6장을 세 구간에 나눈다.' },
        wrap: {
          teacher: '"오늘 배운 할 일을 실험 전·실험 중·실험 후로 정리해 볼까요?" 카드를 다 놓으면 구간마다 한 목소리로 읽는다. 뚜껑 덮기를 실험 전에 놓는 학생에게 "불을 켜기 전에 뚜껑을 덮을 일이 있을까요? 언제 덮었나요?"라고 묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'timeline', options: { mode: 'sort', axis: ['먼저', '나중'], slots: [{ id: 'before', label: '실험 전' }, { id: 'during', label: '실험 중' }, { id: 'after', label: '실험 후' }], cards: ['보안경 쓰기', '불 옆 장난 안 함', '뚜껑 덮어 끄기', '설명 듣기', '식힌 뒤 정리'] }, prompt: '할 일 카드를 실험 전·중·후에 나누어요.', target: { sort: { before: ['보안경 쓰기', '설명 듣기'], during: ['불 옆 장난 안 함'], after: ['뚜껑 덮어 끄기', '식힌 뒤 정리'] } }, difficulty: 0.15,
              levels: {
                easy: { prompt: '할 일 카드를 실험 전·중·후에 하나씩 놓아요.', toolOptions: { cards: ['보안경 쓰기', '불 옆 장난 안 함', '식힌 뒤 정리'] }, target: { sort: { before: ['보안경 쓰기'], during: ['불 옆 장난 안 함'], after: ['식힌 뒤 정리'] } } },
                challenge: { prompt: '할 일 카드 6장을 실험 전·중·후에 나누어요.', toolOptions: { cards: ['보안경 쓰기', '불 옆 장난 안 함', '뚜껑 덮어 끄기', '설명 듣기', '이상하면 멈춤', '식힌 뒤 정리'] }, target: { sort: { before: ['보안경 쓰기', '설명 듣기'], during: ['불 옆 장난 안 함', '이상하면 멈춤'], after: ['뚜껑 덮어 끄기', '식힌 뒤 정리'] } } },
              } },
            { type: 'choice', prompt: '보호 장구는 언제까지 쓸까요?', options: ['불 켤 때만', '정리까지 끝날 때', '설명 들을 때만'], answer: 1, difficulty: 0.1, explain: '정리할 때도 뜨겁거나 튈 수 있어 끝날 때까지 써요.' },
            { type: 'short', prompt: '실험 후에 꼭 할 일을 한 줄로 써요.' },
          ],
        },
        worksheet: {
          title: '실험 전·중·후',
          items: [
            { type: 'table', prompt: '언제 할 일인지 써요.', columns: ['할 일', '전 / 중 / 후'], cells: [['보안경 쓰기', ''], ['이상하면 멈춤', ''], ['식힌 뒤 정리', '']], answer: '전, 중, 후' },
            { type: 'draw', prompt: '보호 장구를 바르게 쓴 우리 모둠을 그려요.' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 4학년 · 물놀이와 산·들 체험 판단 (별표 2 초등 생활안전 4)
  // ======================================================================================================
  {
    const C = T('g4-water-outdoor', 4);
    const CAMP = {
      title: '여름 캠프장', grid: [6, 4],
      regions: [
        { name: '계곡 물가', cells: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0]] }, { name: '개울 가운데 모래톱', cells: [[2, 1], [3, 1]] },
        { name: '얕은 물놀이터', cells: [[0, 1], [1, 1]] }, { name: '미끄러운 바위', cells: [[4, 1], [5, 1]] },
        { name: '큰 나무 그늘', cells: [[0, 2], [1, 2]] }, { name: '쉼터(텐트)', cells: [[2, 2], [3, 2], [2, 3], [3, 3]] },
        { name: '산길 입구', cells: [[4, 2], [5, 2]] }, { name: '주차장', cells: [[0, 3], [1, 3], [4, 3], [5, 3]] },
      ],
    };
    const PACK = (prompt, title, items, easyIdx, hard, d, more) => {
      const ok = (list) => list.filter((x) => x.ok).map((x) => x.id);
      const bare = (list) => list.map((x) => ({ id: x.id, text: x.text }));
      const easy = easyIdx.map((i) => items[i]); const all = items.concat([hard]);
      return {
        prompt, toolOptions: { mode: 'checklist', title, items: bare(items) }, target: { checklist: ok(items) }, difficulty: d,
        levels: { easy: { prompt: `${strip(prompt)}(3칸).`, toolOptions: { items: bare(easy) }, target: { checklist: ok(easy) } }, challenge: { prompt: `${strip(prompt)}(5칸).`, toolOptions: { items: bare(all) }, target: { checklist: ok(all) } } },
        ...more,
      };
    };
    M.push(
      C({
        id: 'saf-life.e34.g4-water-outdoor.intro.valley-scene', type: 'intro', title: '계곡 그림에서 위험한 곳',
        method: '계곡 장면에서 위험 고르기', tool: 'emotion', minutes: 6,
        levels: { easy: '위험한 곳 2곳(바위 위 뛰기, 깊은 물)을 함께 고른다.', base: '위험한 곳 3곳을 스스로 고른다.', challenge: '3곳을 고르고 어떻게 바꾸면 되는지 까닭과 함께 말한다.' },
        intro: {
          teacher: '"계곡에 놀러 왔어요. 이 그림에서 위험한 곳은 어디일까요?" 시연 단추로 위험한 장면이 바구니에 담기는 것을 보이고 장면마다 까닭을 묻는다. "수영을 잘하면 구명조끼가 필요 없어요"라는 말이 나오면 "물살이 세거나 발이 미끄러지면 수영을 잘해도 어떨까요?"라고 되묻는다.',
          student: '계곡 그림에서 위험한 곳을 고르고, 어떻게 바꾸면 좋을지 짝에게 말해 보아요.',
          demo: { tool: 'emotion', options: { mode: 'pick', basket: '위험해요', cards: [{ id: 'rock', text: '바위 위 뛰기' }, { id: 'vest', text: '구명조끼 입기' }, { id: 'deep', text: '깊은 물 들어가기' }, { id: 'adult', text: '어른 곁에서 놀기' }, { id: 'alone', text: '혼자 물에 들어감' }], shuffle: false }, sequence: [{ pick: ['rock', 'deep', 'alone'] }] },
          art: { draw: 'a paper valley stream with slippery paper rocks, a child in a bright life jacket playing in shallow water next to an adult, and a deep blue pool further away', banner: '계곡에서는 어른 곁에', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
      }),
      C({
        id: 'saf-life.e34.g4-water-outdoor.intro.heat-body4', type: 'intro', title: '더위가 보내는 몸 신호',
        method: '더위 몸 신호', tool: 'body', minutes: 5,
        levels: { easy: '피부·배 두 곳의 신호를 함께 짚는다.', base: '피부·배·가슴 세 곳의 신호를 짚는다.', challenge: '세 곳을 짚고, 신호가 오면 할 일(그늘·물·어른께 알리기)을 말한다.' },
        intro: {
          teacher: '"더운 날 밖에서 오래 놀면 몸이 어떤 신호를 보낼까요?" 시연 단추로 종이 몸에서 피부(뜨겁고 땀이 많이 남) → 배(속이 메스꺼움) → 가슴(숨이 가쁘고 두근거림)이 차례로 짚이는 것을 보인다. "조금 더 놀면 괜찮아져요"라는 말이 나오면 "몸이 신호를 보낼 때 계속 놀면 어떻게 될까요? 무엇을 먼저 할까요?"라고 되묻는다.',
          student: '더위가 보내는 몸 신호를 보고, 신호가 오면 할 일 세 가지를 짝과 말해 보아요.',
          demo: { tool: 'body', options: { mode: 'parts', parts: ['피부', '배', '가슴', '무릎', '발목', '손목'], names: true }, sequence: [{ parts: ['피부'] }, { parts: ['피부', '배'] }, { parts: ['피부', '배', '가슴'] }] },
          art: { draw: 'a paper child resting in the shade of a big paper tree, drinking water from a bottle while the sun shines hot over a field', banner: '그늘에서 쉬고 물 마시기', extra: [{ motif: 'sun', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '더위 신호는 일반적인 안내 수준으로만 다룬다. 몸이 이상하면 어른께 알린다는 것을 가장 크게 짚는다.',
      }),
      C({
        id: 'saf-life.e34.g4-water-outdoor.activity.water-dilemma4', type: 'activity', title: '갈림길: 계곡물이 불어나요',
        method: '갈림길: 비가 와서 계곡물이 불어나요', tool: 'dilemma', minutes: 14,
        levels: { easy: '갈림 1번, 보기 2개 가운데 고르고 결과를 본다.', base: '갈림 2번, 보기 3개씩 고르며 결과를 따라간다.', challenge: '갈림 2번을 지난 뒤 근거 카드 3장 가운데 알맞은 것을 고른다.' },
        activity: {
          title: '갈림길: 물가와 더위 속에서', tool: 'dilemma',
          teacher: '"더 놀고 싶은 마음이 들 때, 물과 하늘은 어떤 신호를 보내고 있을까요?" 보기를 고르고 결과를 읽은 뒤 짝과 어떤 신호를 보고 판단했는지 말하게 한다. "맑은 날 계곡은 언제나 안전해요"라는 학생에게 "위쪽 산에 비가 오면 여기 물은 어떻게 될까요?"라고 묻는다. 친구가 물에 빠지면 직접 뛰어들지 않고 어른을 부른다는 점을 짚는다.',
          task: '장면을 읽고 보기를 골라요. 결과를 보고 다음 장면에서 또 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL('비가 와서 계곡물이 불어나요.', {
              text: '계곡에서 노는데 비가 내리고 물이 흙탕물로 불어나기 시작했어요.', motif: 'rain',
              choices: [
                { id: 'stay', text: '조금만 더 논다', result: '물이 무릎까지 빠르게 차올랐어요.', impact: [{ who: '나', text: '떠내려갈 수 있어요', tone: -1 }] },
                { id: 'out', text: '바로 물에서 나온다', result: '물가로 나와 어른 곁에 섰어요.', ending: '신호를 보고 바로 나와 안전했어요.', next: {
                  text: '어른이 "짐을 챙기자"고 하세요. 어디로 갈까요?', choices: [
                    { id: 'high', text: '물에서 먼 높은 곳으로', result: '쉼터로 올라가 물을 피했어요.', impact: [{ who: '가족', text: '모두 안전해요', tone: 1 }], ending: '물에서 멀리, 높은 곳으로 함께 옮겼어요.' },
                    { id: 'sand', text: '개울 가운데 모래톱으로', result: '물이 둘레를 둘러싸 갇혔어요.', impact: [{ who: '가족', text: '고립될 수 있어요', tone: -1 }] },
                    { id: 'toy', text: '떠내려간 공을 쫓아간다', result: '물살이 센 곳으로 다가갔어요.', impact: [{ who: '나', text: '위험해요', tone: -1 }] },
                  ] } },
                { id: 'rock', text: '바위 위로 올라간다', result: '바위 둘레로 물이 불어나 내려올 수 없게 됐어요.', impact: [{ who: '나', text: '고립될 수 있어요', tone: -1 }] },
              ] }, [['out', 'high']],
            [{ id: 'rise', text: '계곡물은 갑자기 불어날 수 있어서' }, { id: 'high', text: '물에서 멀고 높은 곳이 안전해서' }, { id: 'sunny', text: '조금 전까지 맑았으니까', why: '맑았어도 비가 오면 계곡물은 빠르게 불어나요.' }], ['rise', 'high'], 0.2),
            DIL('친구가 깊은 곳에서 허우적거려요.', {
              text: '수영장에서 친구가 깊은 쪽으로 가더니 허우적거려요.', motif: 'cloud',
              choices: [
                { id: 'jump', text: '내가 뛰어들어 구한다', result: '친구가 나를 붙잡아 둘 다 가라앉을 뻔했어요.', impact: [{ who: '친구와 나', text: '함께 위험해요', tone: -1 }] },
                { id: 'call', text: '큰 소리로 어른을 부른다', result: '안전 요원이 달려왔어요.', ending: '뛰어들지 않고 어른을 불러 친구를 도왔어요.', next: {
                  text: '안전 요원이 오는 동안 내 옆에 튜브가 있어요.', choices: [
                    { id: 'throw', text: '튜브를 친구 쪽으로 던진다', result: '친구가 튜브를 붙잡았어요.', impact: [{ who: '친구', text: '물에 떠 있어요', tone: 1 }], ending: '어른을 부르고 뜨는 것을 던져 도왔어요.' },
                    { id: 'swim', text: '튜브를 끼고 헤엄쳐 간다', result: '깊은 곳에서 나도 힘이 빠졌어요.', impact: [{ who: '나', text: '위험해요', tone: -1 }] },
                    { id: 'watch', text: '가만히 지켜본다', result: '친구가 붙잡을 것이 없어요.', impact: [{ who: '친구', text: '위험해요', tone: -1 }] },
                  ] } },
                { id: 'leave', text: '무서워서 자리를 떠난다', result: '아무도 친구를 보지 못했어요.', impact: [{ who: '친구', text: '도움을 못 받아요', tone: -1 }] },
              ] }, [['call', 'throw']],
            [{ id: 'adult', text: '어른이 구해야 둘 다 안전해서' }, { id: 'float', text: '뜨는 것을 던지면 붙잡을 수 있어서' }, { id: 'hero', text: '내가 구하면 멋있어서', why: '직접 뛰어들면 나도 위험해져요. 어른을 불러요.' }], ['adult', 'float'], 0.25),
            DIL('산길에서 머리가 어지럽고 속이 메스꺼워요.', {
              text: '더운 날 산길을 오르는데 땀이 많이 나고 속이 메스꺼워요.', motif: 'sun',
              choices: [
                { id: 'push', text: '참고 끝까지 오른다', result: '다리에 힘이 빠지고 더 어지러워졌어요.', impact: [{ who: '나', text: '쓰러질 수 있어요', tone: -1 }] },
                { id: 'tell', text: '멈추고 선생님께 알린다', result: '선생님이 그늘로 데려가 주셨어요.', ending: '멈추고 알려서 몸을 돌볼 수 있었어요.', next: {
                  text: '그늘에 앉았어요. 이제 무엇을 할까요?', choices: [
                    { id: 'rest', text: '쉬면서 물을 조금씩 마신다', result: '몸이 조금씩 편안해졌어요.', impact: [{ who: '나', text: '나아지고 있어요', tone: 1 }], ending: '그늘에서 쉬며 물을 마셔 몸을 돌봤어요.' },
                    { id: 'run', text: '괜찮다며 바로 뛰어간다', result: '다시 어지러워 주저앉았어요.', impact: [{ who: '나', text: '더 아플 수 있어요', tone: -1 }] },
                    { id: 'sun', text: '햇볕 아래 눕는다', result: '몸이 더 뜨거워졌어요.', impact: [{ who: '나', text: '더 아플 수 있어요', tone: -1 }] },
                  ] } },
                { id: 'quiet', text: '말없이 혼자 쉰다', result: '모둠이 앞서가고 나만 남았어요.', impact: [{ who: '나', text: '도움을 못 받아요', tone: -1 }] },
              ] }, [['tell', 'rest']],
            [{ id: 'signal', text: '몸이 보내는 더위 신호라서' }, { id: 'help', text: '알려야 어른이 도와줄 수 있어서' }, { id: 'tough', text: '참는 것이 씩씩해서', why: '더위 신호는 참지 말고 알려야 해요.' }], ['signal', 'help'], 0.3, { conclude: '물이 불어나면 바로 나와 높은 곳으로, 친구가 빠지면 어른을 부르고, 더위 신호가 오면 멈추고 알려요.' }),
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '친구가 물에 빠지면 뛰어들지 않고 큰 소리로 ___을 불러요.', answer: '어른' }] },
      }),
      C({
        id: 'saf-life.e34.g4-water-outdoor.activity.water-sort4', type: 'activity', title: '물놀이·산행 약속 나누기',
        method: '물놀이·산행 약속 나누기', tool: 'mindmap', minutes: 13,
        levels: { easy: '카드 4장, 놓으면 바로 맞는지 알려 준다.', base: '카드 6장을 다 놓은 뒤 확인한다.', challenge: '헷갈리는 카드 2장이 더해진 8장을 나눈다.' },
        activity: {
          title: '물놀이·산행 약속 나누기', tool: 'mindmap',
          teacher: '"이 약속은 물놀이할 때 지킬까요, 산과 들에서 지킬까요?" 카드를 놓을 때마다 그 약속을 안 지키면 무슨 일이 생기는지 짝과 말하게 한다. 구명조끼를 산·들에 놓는 학생에게 "구명조끼는 어떤 위험에서 나를 지켜 줄까요?"라고 묻는다.',
          task: '약속 카드를 물놀이 약속과 산·들 약속으로 나누어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORT('놀기 전 약속을 나누어요.', { topic: '놀기 전' }, ['물놀이', '산·들'], [['구명조끼 입기', '물에 들기 전 몸 풀기', '깊이 확인하기'], ['정해진 길 알기', '모자 쓰기', '모일 곳 정하기']], 2, [['물 온도 손으로'], ['긴 옷 챙기기']], 0.15),
            SORT('노는 동안 약속을 나누어요.', { topic: '노는 동안' }, ['물놀이', '산·들'], [['어른 곁에서 놀기', '바위에서 뛰지 않기', '튜브 믿고 멀리 안 감'], ['낯선 열매 안 먹기', '벌집 멀리하기', '길 밖으로 안 감']], 2, [['물살 센 곳 피하기'], ['버섯 만지지 않기']], 0.2),
            SORT('이럴 때 할 일을 나누어요.', { topic: '이럴 때' }, ['물놀이', '산·들'], [['물 불면 바로 나옴', '입술 파라면 쉼', '빠진 친구 어른 부름'], ['길 잃으면 멈춤', '더우면 그늘에', '벌 오면 천천히']], 2, [['쥐 나면 물 밖으로'], ['천둥 치면 내려옴']], 0.25, { conclude: '물놀이는 구명조끼와 어른 곁, 산·들은 정해진 길과 낯선 것 멀리가 약속이에요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '물놀이 약속이면 "물", 산·들 약속이면 "산"을 써요.', columns: ['약속', '물 / 산'], cells: [['구명조끼 입기', ''], ['정해진 길 알기', ''], ['어른 곁에서 놀기', ''], ['낯선 열매 안 먹기', '']], answer: '물, 산, 물, 산' }] },
      }),
      C({
        id: 'saf-life.e34.g4-water-outdoor.activity.camp-map', type: 'activity', title: '캠프장 지도에서 안전한 자리',
        method: '캠프장 지도에서 안전한 자리', tool: 'map', minutes: 14,
        levels: { easy: '핀을 놓으면 그 칸의 이름이 바로 보인다.', base: '지도의 이름을 보고 알맞은 곳에 핀을 꽂는다.', challenge: '핀을 꽂은 뒤 그곳을 고른 까닭도 보기에서 고른다(피할 곳 포함).' },
        activity: {
          title: '캠프장 지도에 핀 꽂기', tool: 'map',
          teacher: '"물가에서 쉴 자리를 정할 때 무엇을 먼저 따져야 할까요?" 핀을 꽂기 전에 물과의 거리, 그늘, 어른이 볼 수 있는지를 짝과 따져 보게 한다. 모래톱을 쉴 곳으로 고르는 학생에게 "물이 불어나면 그곳은 어떻게 될까요?"라고 묻는다.',
          task: '캠프장 지도를 보고 물음에 맞는 곳에 핀을 꽂아요.', levels: { easy: { readout: true }, base: {}, challenge: {} },
          items: [
            PIN(CAMP, '물가에서 떨어져 쉴 곳에 핀을 꽂아요.', '쉼터(텐트)', { q: '이곳이 좋은 까닭은?', choices: ['물에서 멀고 어른이 있어서', '물이 가까워서', '바위가 많아서'], answer: 0 }, 0.15),
            PIN(CAMP, '한낮 더위를 피할 그늘에 핀을 꽂아요.', '큰 나무 그늘', { q: '그늘에서 함께 할 일은?', choices: ['물 마시며 쉬기', '뛰어다니기', '모자 벗고 눕기'], answer: 0 }, 0.2),
            PIN(CAMP, '비가 오면 물에 둘러싸일 수 있는 곳에 꽂아요.', '개울 가운데 모래톱', { q: '이곳에서는 어떻게 할까요?', choices: ['텐트를 친다', '머물지 않는다', '혼자 건너간다'], answer: 1 }, 0.25),
            PIN(CAMP, '구명조끼를 입고 어른과 놀 곳에 핀을 꽂아요.', '얕은 물놀이터', { q: '이곳에서 지킬 약속은?', choices: ['혼자 깊은 데 가기', '어른 곁에서 놀기', '바위에서 뛰기'], answer: 1 }, 0.25, { conclude: '쉴 곳은 물에서 멀리, 놀 곳은 얕고 어른이 보는 곳, 모래톱과 바위는 피해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '캠프장에서 텐트를 칠 곳으로 알맞은 곳은?', options: ['개울 가운데 모래톱', '물에서 먼 쉼터', '미끄러운 바위 위'], answer: '물에서 먼 쉼터' }] },
      }),
      C({
        id: 'saf-life.e34.g4-water-outdoor.activity.pack-check', type: 'activity', title: '물놀이·체험 준비물 점검표',
        method: '물놀이·체험 준비물 점검표', tool: 'kitchen', minutes: 14,
        levels: { easy: '점검 칸 3개 가운데 챙길 것만 표시한다.', base: '점검 칸 4개 가운데 챙길 것만 표시한다.', challenge: '점검 칸 5개 가운데 챙길 것을 고르고, 왜 필요한지 짝에게 말한다.' },
        activity: {
          title: '챙길 준비물만 표시하기', tool: 'kitchen',
          teacher: '"이 준비물은 어떤 위험에서 나를 지켜 줄까요?" 점검표를 한 칸씩 읽고 챙길 것에만 표시하게 한다. 튜브만 챙기면 된다는 학생에게 "튜브는 뒤집히거나 바람이 빠질 수 있어요. 몸에 꼭 맞게 입는 것은 무엇일까요?"라고 묻는다.',
          task: '점검표에서 챙길 준비물만 골라 표시해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            PACK('계곡 물놀이에 챙길 것만 표시해요.', '계곡 물놀이 가방', [{ id: 'vest', text: '몸에 맞는 구명조끼', ok: true }, { id: 'shoes', text: '물놀이 신발', ok: true }, { id: 'tube', text: '튜브 하나면 끝', ok: false }, { id: 'towel', text: '여벌옷·수건', ok: true }], [0, 1, 2], { id: 'snack', text: '물에서 먹을 간식', ok: false }, 0.15),
            PACK('여름 산행에 챙길 것만 표시해요.', '여름 산행 가방', [{ id: 'hat', text: '챙 넓은 모자', ok: true }, { id: 'water', text: '물병', ok: true }, { id: 'slipper', text: '슬리퍼', ok: false }, { id: 'sleeve', text: '얇은 긴소매', ok: true }], [1, 2, 3], { id: 'perfume', text: '진한 향수', ok: false }, 0.2),
            PACK('들판 체험 학습에 챙길 것만 표시해요.', '들판 체험 가방', [{ id: 'cap', text: '모자', ok: true }, { id: 'bottle', text: '물병', ok: true }, { id: 'jar', text: '열매 담을 통', ok: false }, { id: 'map', text: '모일 곳 적은 쪽지', ok: true }], [0, 2, 3], { id: 'spare', text: '여벌 양말', ok: true }, 0.25, { conclude: '준비물마다 막아 주는 위험이 있어요. 왜 필요한지 알고 챙겨요.' }),
          ],
        },
        worksheet: { items: [{ type: 'check', prompt: '물놀이 가방에 넣을 것에 표시해요.', options: ['몸에 맞는 구명조끼', '여벌옷과 수건', '물놀이 신발'] }] },
      }),
      C({
        id: 'saf-life.e34.g4-water-outdoor.wrap.water-self', type: 'wrap', title: '물놀이 전 스스로 점검',
        method: '물놀이 전 스스로 점검', tool: 'timer', minutes: 7,
        levels: { easy: '점검 칸 2개에 표시한다.', base: '점검 칸 3개에 표시한다.', challenge: '점검 칸 4개에 표시한다.' },
        wrap: {
          teacher: '"다음에 물놀이를 간다면 물에 들어가기 전에 무엇을 할 건가요?" 점검 칸을 함께 읽고 할 수 있는 것에 표시하게 한다. 출구 2번에서 "더 놀아요"를 고른 학생에게 "흙탕물이 불어나는 것은 무슨 신호라고 했나요?"라고 되묻는다.',
          exitTicket: [
            SELF('물놀이 전 점검', ['준비운동을 해요', '구명조끼를 입어요', '어른 곁에서 놀아요', '물이 불면 바로 나와요']),
            { type: 'choice', prompt: '계곡물이 흙탕물로 불어나면?', options: ['조금 더 놀아요', '바로 나와 높은 곳으로', '바위 위로 올라가요'], answer: 1, difficulty: 0.1, explain: '계곡물이 불어나면 바로 나와 물에서 먼 높은 곳으로 가요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '물놀이 전 점검',
          items: [
            { type: 'check', prompt: '물에 들어가기 전에 할 것에 표시해요.', options: ['준비운동', '구명조끼 입기', '어른께 말하기'] },
            { type: 'short', prompt: '친구가 물에 빠졌을 때 내가 할 일을 한 줄로 써요.' },
          ],
          easy: { note: '구명조끼와 어른 곁을 떠올려요.', items: [{ type: 'choice', prompt: '물놀이할 때 입는 것은?', options: ['구명조끼', '두꺼운 외투'], answer: '구명조끼' }] },
        },
      }),
      C({
        id: 'saf-life.e34.g4-water-outdoor.wrap.water-feel4', type: 'wrap', title: '물놀이 약속 마음 눈금',
        method: '물놀이 약속 마음 크기', tool: 'emotion', minutes: 7,
        levels: { easy: '마음 눈금 3칸에서 고른다.', base: '마음 눈금 5칸에서 고른다.', challenge: '눈금 5칸에서 고르고 그 칸을 고른 까닭을 짝에게 말한다.' },
        wrap: {
          teacher: '"구명조끼 입기와 어른 곁에서 놀기, 나는 얼마나 지킬 수 있을까요?" 눈금을 고른 뒤 왜 그 칸인지 말하게 한다. 낮은 칸을 고른 학생을 나무라지 않고 "어떤 때 지키기 어려울 것 같나요? 그때 무엇이 도와줄까요?"라고 묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'emotion', options: { mode: 'scale', situation: '구명조끼를 입고 어른 곁에서 놀 수 있어요', feeling: '뿌듯함', steps: 5, scaleLabels: { 1: '조금', 5: '아주 잘' } }, prompt: '물놀이 약속을 얼마나 지킬 수 있는지 골라요.', target: { level: 'any' }, difficulty: 0.1,
              levels: { easy: { toolOptions: { steps: 3, scaleLabels: { 1: '조금', 3: '아주 잘' } } } } },
            { type: 'choice', prompt: '수영을 잘해도 구명조끼를 입는 까닭은?', options: ['멋있어서', '물살·미끄러짐에 대비해서', '어른이 시켜서'], answer: 1, difficulty: 0.15, explain: '물살이 세거나 미끄러지면 수영을 잘해도 위험해요.' },
            { type: 'short', prompt: '물놀이 약속을 지키기 어려울 때 나를 도와줄 방법을 써요.' },
          ],
        },
        worksheet: {
          title: '물놀이 약속',
          items: [
            { type: 'blank', prompt: '약속을 완성해요.', text: '물놀이할 때는 ___을 입고 어른 곁에서 놀아요.', answer: '구명조끼' },
            { type: 'draw', prompt: '물놀이 약속을 지키는 내 모습을 그려요.' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 4학년 · 혼자 있는 시간과 꾀는 말 (별표 2 초등 생활안전 5)
  // ======================================================================================================
  {
    const C = T('g4-alone-lure', 4);
    // 꾀는 말 나누기: 쉬움 칸마다 1장, 기본 칸마다 2장, 도전 = 안전한 말(어느 칸에도 넣지 않고 카드 칸에 남김) 2장이 더해진다
    const LURE = (prompt, base, slots, groups, safe, d, more) => {
      const easyG = groups.map((g) => g.slice(0, 1));
      const p = strip(prompt);
      return {
        prompt, toolOptions: Object.assign({}, base, { slots, cards: mix(groups) }), target: sortT(slots, groups), difficulty: d,
        levels: {
          easy: { prompt: `${p}(3장).`, toolOptions: { cards: mix(easyG) }, target: sortT(slots, easyG) },
          challenge: { prompt: `${p}. 꾀는 말이 아닌 카드 2장은 남겨요.`, toolOptions: { cards: mix(groups).concat(safe) }, target: sortT(slots, groups) },
        },
        ...more,
      };
    };
    M.push(
      C({
        id: 'saf-life.e34.g4-alone-lure.intro.door-bell', type: 'intro', title: '혼자 있을 때 초인종이 울려요',
        method: '초인종 장면의 마음', tool: 'emotion', minutes: 6,
        levels: { easy: '마음 카드 2장(걱정·궁금함) 가운데 내 마음을 고른다.', base: '마음 카드 4장 가운데 내 마음을 고르고 까닭을 말한다.', challenge: '마음을 고른 뒤 그 마음일 때 할 수 있는 행동도 짝과 고른다.' },
        intro: {
          teacher: '"집에 혼자 있는데 초인종이 울렸어요. 어떤 마음이 들까요?" 시연 단추로 마음 카드가 바구니에 담기는 것을 보이고, 어떤 마음이든 들 수 있다고 말해 준다. "택배 아저씨면 문을 열어도 돼요"라는 말이 나오면 "문을 열지 않고도 택배를 받을 수 있는 방법이 있을까요?"라고 되묻는다. 오늘은 혼자 있을 때 문을 열지 않는 방법과 꾀는 말을 알아차리는 법을 배운다고 밝힌다.',
          student: '초인종이 울리는 장면을 보고 내 마음을 고른 뒤, 할 수 있는 행동을 짝과 말해 보아요.',
          demo: { tool: 'emotion', options: { mode: 'pick', basket: '내 마음', cards: [{ id: 'worry', text: '걱정' }, { id: 'curious', text: '궁금함' }, { id: 'fear', text: '무서움' }, { id: 'calm', text: '편안함' }], shuffle: false }, sequence: [{ pick: ['worry', 'curious'] }] },
          art: { draw: 'a paper child standing inside a paper apartment door, a doorbell ringing with paper sound waves, a phone on the shoe cabinet', banner: '문을 열기 전에', extra: [{ motif: 'house', x: 300, y: 96 }] },
        },
        notes: '혼자 있다가 무서웠던 일을 묻지 않는다. 그림 속 장면으로만 이야기한다.',
      }),
      C({
        id: 'saf-life.e34.g4-alone-lure.intro.alone-clock', type: 'intro', title: '보호자가 오는 시각 맞추기',
        method: '보호자 오는 시각', tool: 'clock', minutes: 5,
        levels: { easy: '정각(5시) 바늘을 함께 읽는다.', base: '30분(5시 30분) 바늘을 맞춰 본다.', challenge: '5시 30분을 맞추고, 지금 시각(4시 30분)부터 남은 시간을 말한다.' },
        intro: {
          teacher: '"엄마는 5시 30분에 오신대요. 그때까지 나는 무엇을 지킬까요?" 시연 단추로 시계 바늘이 5시 30분으로 움직이는 것을 보이고, 그 전까지 지킬 약속을 두세 가지 묻는다(기다릴 반응: "문 안 열기", "모르는 전화에 혼자라고 안 하기"). "늦게 오시면 찾으러 나가요"라는 말이 나오면 "집 밖에서 길이 엇갈리면 어떻게 될까요? 먼저 전화하면 어떨까요?"라고 되묻는다.',
          student: '보호자가 오는 시각을 시계로 맞춰 보고, 그때까지 지킬 약속을 짝에게 말해 보아요.',
          demo: { tool: 'clock', options: { showDigital: true }, sequence: [{ h: 4, m: 30 }, { h: 5, m: 30 }] },
          art: { draw: 'a paper wall clock showing half past five above a paper living room, a child doing homework at a table', banner: '5시 30분까지 지킬 약속', extra: [{ motif: 'moon', x: 300, y: 96 }] },
        },
      }),
      C({
        id: 'saf-life.e34.g4-alone-lure.activity.door-order4', type: 'activity', title: '초인종이 울렸을 때 차례',
        method: '초인종이 울렸을 때 차례', tool: 'story', minutes: 14,
        levels: { easy: '장면 3장, 놓으면 바로 맞는지 알려 준다.', base: '장면 4장을 차례대로 놓은 뒤 확인한다.', challenge: '틀린 장면 1장이 섞인 5장에서 그것을 빼고 4장을 놓는다.' },
        activity: {
          title: '혼자 있을 때 차례 놓기', tool: 'story',
          teacher: '"문 너머 사람이 누군지 모를 때 맨 먼저 할 일은 무엇일까요?" 카드를 다 놓은 뒤 짝과 문 안·밖 역할을 나눠 해 본다(문을 열지 않고 "지금은 열 수 없어요, 나중에 오세요"). "혼자 있어요"라고 말하는 학생에게 "혼자라는 것을 모르는 사람이 알아도 될까요?"라고 묻는다.',
          task: '장면 카드를 하는 차례대로 놓아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORD('혼자 있는데 초인종이 울려요. 차례로 놓아요.', {}, [{ id: 'shut', text: '문 열지 않기' }, { id: 'who', text: '문 너머로 누군지 묻기' }, { id: 'call', text: '보호자께 전화' }, { id: 'later', text: '나중에 오라고 말함' }], 1, { id: 'peek', text: '문 열고 확인하기', why: '누구인지 모를 때 문을 열면 위험해요.' }, 0.15),
            ORD('택배 기사라며 문을 열어 달래요. 차례로 놓아요.', {}, [{ id: 'closed', text: '문은 닫은 채로' }, { id: 'leave', text: '"문 앞에 두세요"' }, { id: 'tell', text: '보호자께 알리기' }, { id: 'together', text: '보호자와 들이기' }], 2, { id: 'sign', text: '서명하러 문 열기', why: '제복을 입었어도 혼자일 때는 문을 열지 않아요.' }, 0.2),
            ORD('모르는 사람이 전화로 엄마를 찾아요. 차례로 놓아요.', {}, [{ id: 'alone', text: '혼자라고 안 하기' }, { id: 'info', text: '이름·집 말하지 않기' }, { id: 'hang', text: '정중히 끊기' }, { id: 'report', text: '보호자께 알리기' }], 1, { id: 'addr', text: '집 주소 알려 주기', why: '모르는 사람에게 집 주소를 알려 주지 않아요.' }, 0.25, { conclude: '혼자 있을 때는 문을 열지 않고, 혼자라는 것과 집 정보를 말하지 않고, 보호자께 알려요.' }),
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '혼자 있을 때 초인종이 울리면 문을 ___ 보호자께 전화해요.', answer: '열지 않고' }] },
      }),
      C({
        id: 'saf-life.e34.g4-alone-lure.activity.lure-sort4', type: 'activity', title: '꾀는 말 알아차리기',
        method: '꾀는 말 알아차리기', tool: 'mindmap', minutes: 13,
        levels: { easy: '카드 3장을 선물·도움 요청·급한 일에 하나씩 놓는다.', base: '카드 6장을 세 가지로 나눈다.', challenge: '꾀는 말이 아닌 안전한 말 2장이 섞인 8장에서 그것은 남기고 6장을 나눈다.' },
        activity: {
          title: '꾀는 말 세 가지로 나누기', tool: 'mindmap',
          teacher: '"이 말은 무엇으로 마음을 끌고 있나요? 선물인가요, 도와 달라는 부탁인가요, 급하다는 말인가요?" 카드를 놓을 때마다 그 말을 들으면 어떻게 대답할지 짝과 말하게 한다. "어른이 도와 달라는데 거절하면 예의가 없어요"라는 학생에게 "어른이 도움이 필요하면 누구에게 부탁하는 것이 맞을까요?"라고 묻는다.',
          task: '말 카드를 꾀는 말의 세 가지(선물·도움 요청·급한 일)로 나누어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            LURE('놀이터에서 들은 말을 나누어요.', { topic: '놀이터에서' }, ['선물', '도움 요청', '급한 일'], [['선물 줄게, 따라와', '게임 아이템 줄게'], ['길 좀 알려 줘', '짐 좀 들어 줄래?'], ['엄마가 아파, 가자', '빨리 타, 급해']], ['같이 그네 탈래?', '줄 서서 타자'], 0.15),
            LURE('학교 앞에서 들은 말을 나누어요.', { topic: '학교 앞에서' }, ['선물', '도움 요청', '급한 일'], [['예쁜 스티커 줄게', '맛있는 거 사 줄게'], ['강아지 같이 찾자', '차까지 들어 줘'], ['집에 불났어, 타', '선생님이 부르셔']], ['안녕, 잘 가', '횡단보도 건너렴'], 0.2),
            LURE('휴대폰 메시지로 온 말을 나누어요.', { topic: '휴대폰 메시지' }, ['선물', '도움 요청', '급한 일'], [['선물 보낼게, 주소', '용돈 줄게, 만나자'], ['사진 좀 보내 줘', '내 숙제 도와줘, 와'], ['큰일 났어, 나와', '지금 바로 와야 해']], ['내일 학교에서 봐', '숙제 범위 알려 줄게'], 0.25, { conclude: '선물·도움 요청·급한 일로 데려가려는 말은 꾀는 말이에요. "싫어요, 물어볼게요"로 거절해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '꾀는 말이면 ○, 아니면 ×를 써요.', columns: ['말', '○ / ×'], cells: [['선물 줄게, 따라와', ''], ['안녕, 잘 가', ''], ['엄마가 아파, 가자', ''], ['줄 서서 타자', '']], answer: '○, ×, ○, ×' }] },
      }),
      C({
        id: 'saf-life.e34.g4-alone-lure.activity.lure-dilemma4', type: 'activity', title: '갈림길: 강아지를 같이 찾아 줘',
        method: '갈림길: "강아지를 잃어버렸어, 같이 찾아 줘"', tool: 'dilemma', minutes: 14,
        levels: { easy: '갈림 1번, 보기 2개 가운데 고르고 결과를 본다.', base: '갈림 2번, 보기 3개씩 고르며 결과를 따라간다.', challenge: '갈림 2번을 지난 뒤 거절한 근거를 카드 3장 가운데 고른다.' },
        activity: {
          title: '갈림길: 꾀는 말을 들었을 때', tool: 'dilemma',
          teacher: '"도와주고 싶은 마음은 좋은 마음이에요. 그런데 왜 따라가면 안 될까요?" 보기를 고르고 결과를 읽은 뒤, 거절하는 말을 짝과 소리 내어 연습한다("싫어요, 어른께 말씀드릴게요"). 따라가는 쪽을 고른 학생을 나무라지 않고 "도움이 필요한 어른은 아이 대신 누구에게 부탁할 수 있을까요?"라고 되물어 다른 길로 가 보게 한다.',
          task: '장면을 읽고 보기를 골라요. 결과를 보고 다음 장면에서 또 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL('처음 보는 어른이 강아지를 같이 찾자고 해요.', {
              text: '공원에서 처음 보는 어른이 "강아지를 잃어버렸어, 같이 찾아 줘" 해요.', motif: 'tree',
              choices: [
                { id: 'follow', text: '불쌍해서 따라간다', result: '어른이 사람 없는 쪽으로 자꾸 가요.', impact: [{ who: '나', text: '위험할 수 있어요', tone: -1 }] },
                { id: 'refuse', text: '"싫어요, 어른께 말씀드릴게요"', result: '그 어른이 "잠깐이면 돼" 하며 다시 부탁해요.', ending: '도와 달라는 말에도 따라가지 않아 나를 지켰어요.', next: {
                  text: '그 어른이 계속 따라오며 부탁해요. 어떻게 할까요?', choices: [
                    { id: 'run', text: '사람 많은 곳으로 가 알린다', result: '공원 관리소 어른께 알렸어요.', impact: [{ who: '나', text: '안전해요', tone: 1 }], ending: '사람 많은 곳으로 가서 어른께 알렸어요.' },
                    { id: 'give', text: '미안해서 따라간다', result: '아무도 내가 어디 있는지 몰라요.', impact: [{ who: '나', text: '위험할 수 있어요', tone: -1 }] },
                    { id: 'hide', text: '덤불 뒤에 혼자 숨는다', result: '사람 없는 곳에 혼자 남았어요.', impact: [{ who: '나', text: '도움을 못 받아요', tone: -1 }] },
                  ] } },
                { id: 'phone', text: '휴대폰 번호를 알려 준다', result: '그 어른에게서 계속 연락이 왔어요.', impact: [{ who: '나', text: '위험할 수 있어요', tone: -1 }] },
              ] }, [['refuse', 'run']],
            [{ id: 'adult', text: '어른의 일은 어른께 부탁해야 해서' }, { id: 'lure', text: '도움 요청은 꾀는 말일 수 있어서' }, { id: 'rude', text: '거절하면 나쁜 아이라서', why: '나를 지키는 거절은 나쁜 일이 아니에요.' }], ['adult', 'lure'], 0.2),
            DIL('"엄마가 다쳐서 병원에 있어, 빨리 가자"래요.', {
              text: '학교 앞에서 처음 보는 사람이 "엄마가 다쳤어, 빨리 차에 타" 해요.', motif: 'house',
              choices: [
                { id: 'ride', text: '놀라서 바로 탄다', result: '엄마는 다치지 않았고 나를 찾고 계셨어요.', impact: [{ who: '나', text: '위험할 수 있어요', tone: -1 }] },
                { id: 'check', text: '"선생님께 확인할게요"', result: '그 사람이 "시간 없어!" 하며 재촉해요.', ending: '급하다는 말에도 먼저 확인하겠다고 했어요.', next: {
                  text: '그 사람이 팔을 잡으려 해요. 어떻게 할까요?', choices: [
                    { id: 'shout', text: '"싫어요!" 외치고 학교로', result: '선생님이 나와서 엄마께 전화하셨어요.', impact: [{ who: '나', text: '안전해요', tone: 1 }], ending: '크게 거절하고 학교 어른께 갔어요.' },
                    { id: 'quiet', text: '조용히 따라간다', result: '확인하지 못한 채 차 쪽으로 갔어요.', impact: [{ who: '나', text: '위험할 수 있어요', tone: -1 }] },
                    { id: 'argue', text: '그 자리에서 말다툼한다', result: '그 사람이 계속 잡아끌었어요.', impact: [{ who: '나', text: '위험할 수 있어요', tone: -1 }] },
                  ] } },
                { id: 'cry', text: '그 자리에서 울기만 한다', result: '그 사람이 달래며 차 쪽으로 데려가려 해요.', impact: [{ who: '나', text: '위험할 수 있어요', tone: -1 }] },
              ] }, [['check', 'shout']],
            [{ id: 'urgent', text: '급하다는 말도 꾀는 말일 수 있어서' }, { id: 'school', text: '학교 어른이 사실을 확인해 줄 수 있어서' }, { id: 'scared', text: '무서우니까 시키는 대로 해서', why: '무서울수록 크게 거절하고 어른께 가요.' }], ['urgent', 'school'], 0.25),
            DIL('게임 아이템을 줄 테니 만나자는 메시지가 왔어요.', {
              text: '게임에서 알게 된 사람이 "아이템 줄게, 내일 놀이터 뒤에서 만나자" 해요.', motif: 'star',
              choices: [
                { id: 'meet', text: '아이템이 갖고 싶어 간다', result: '처음 보는 사람이 놀이터 뒤에서 기다렸어요.', impact: [{ who: '나', text: '위험할 수 있어요', tone: -1 }] },
                { id: 'stop', text: '대답하지 않고 보호자께 보여 드린다', result: '보호자가 메시지를 함께 읽으셨어요.', ending: '선물로 꾀는 말을 보호자께 알려 나를 지켰어요.', next: {
                  text: '그 사람이 또 "비밀로 하고 와" 하고 보내요.', choices: [
                    { id: 'block', text: '보호자와 차단하고 신고', result: '그 사람의 메시지가 더 오지 않아요.', impact: [{ who: '나', text: '안전해요', tone: 1 }], ending: '보호자와 함께 차단하고 알렸어요.' },
                    { id: 'reply', text: '"한 번만 갈게" 답장', result: '그 사람이 시간과 장소를 정해 버렸어요.', impact: [{ who: '나', text: '위험할 수 있어요', tone: -1 }] },
                    { id: 'secret', text: '비밀이니까 혼자 간직', result: '아무도 그 메시지를 몰라요.', impact: [{ who: '나', text: '도움을 못 받아요', tone: -1 }] },
                  ] } },
                { id: 'photo', text: '내 사진을 먼저 보낸다', result: '그 사람이 사진을 더 보내 달라고 해요.', impact: [{ who: '나', text: '위험할 수 있어요', tone: -1 }] },
              ] }, [['stop', 'block']],
            [{ id: 'gift', text: '선물로 만나자는 말은 꾀는 말이라서' }, { id: 'secret', text: '비밀로 하자는 말은 알려야 해서' }, { id: 'online', text: '게임 친구니까 아는 사람이라서', why: '온라인에서만 안 사람은 처음 보는 사람과 같아요.' }], ['gift', 'secret'], 0.3, { conclude: '도움·급한 일·선물로 데려가려는 말은 거절하고, 사람 많은 곳의 어른과 보호자께 알려요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '처음 보는 어른이 같이 찾아 달라고 하면?', options: ['따라가서 도와줘요', '"싫어요" 하고 어른께 알려요', '휴대폰 번호를 줘요'], answer: '"싫어요" 하고 어른께 알려요' }] },
      }),
      C({
        id: 'saf-life.e34.g4-alone-lure.activity.home-rule-table', type: 'activity', title: '혼자 있을 때 약속 표',
        method: '혼자 있을 때 약속 표', tool: 'kitchen', minutes: 14,
        levels: { easy: '표 줄 2개에 카드를 맞춰 넣는다.', base: '표 줄 3개에 카드를 맞춰 넣는다.', challenge: '줄 3개에 남는 함정 카드가 하나 섞이고, 채운 표를 짝과 비교한다.' },
        activity: {
          title: '상황·할 일 표 채우기', tool: 'kitchen',
          teacher: '"이 상황에서 나는 무엇을 할까요?" 한 줄을 채울 때마다 "○○하면 ○○해요."로 짝에게 말하게 한다. 타는 냄새 줄에 "혼자 불을 끄기"를 넣으려는 학생에게 "혼자 끄려다 연기를 마시면 어떻게 될까요? 먼저 무엇을 할까요?"라고 묻는다. 우리 집 약속은 가족과 함께 정한다는 점을 짚는다.',
          task: '표의 줄마다 알맞은 카드를 넣어 혼자 있을 때 약속 표를 완성해요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            MATCH('상황에 맞는 할 일을 넣어요.', { autoMotif: false, title: '상황 → 할 일' }, [['초인종이 울려요', '문 열지 않기'], ['모르는 전화가 와요', '혼자라고 말 안 함'], ['타는 냄새가 나요', '밖으로 나가 알림']], '문 열고 확인', 0.15),
            MATCH('들은 말에 맞는 대답을 넣어요.', { autoMotif: false, title: '들은 말 → 대답' }, [['"택배 왔어요"', '"문 앞에 두세요"'], ['"엄마 계시니?"', '"지금 통화 어려워요"'], ['"문 좀 열어 볼래?"', '"열 수 없어요"']], '"저 혼자예요"', 0.2),
            MATCH('이럴 때 연락할 곳을 넣어요.', { autoMotif: false, title: '이럴 때 → 연락' }, [['보호자가 늦어요', '보호자께 전화'], ['문 앞에 낯선 사람', '경비실에 연락'], ['수도에서 물이 넘쳐요', '물 잠그고 연락']], '친구 집에 감', 0.25, { conclude: '혼자 있을 때 약속을 표로 정해 두면 놀라도 차례대로 할 수 있어요. 가족과 함께 정해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '상황에 맞는 할 일을 써요.', columns: ['상황', '할 일'], cells: [['초인종이 울려요', ''], ['모르는 전화가 와요', '']], answer: '문 열지 않기, 혼자라고 말하지 않기' }] },
      }),
      C({
        id: 'saf-life.e34.g4-alone-lure.wrap.alone-check', type: 'wrap', title: '혼자 있는 시간 스스로 점검',
        method: '혼자 있는 시간 스스로 점검', tool: 'timer', minutes: 7,
        levels: { easy: '점검 칸 2개에 표시한다.', base: '점검 칸 3개에 표시한다.', challenge: '점검 칸 4개에 표시한다.' },
        wrap: {
          teacher: '"오늘 정한 약속 가운데 내가 꼭 지킬 것은 무엇인가요?" 점검 칸을 함께 읽고 지킬 수 있는 것에 표시하게 한다. 출구 2번에서 "제복이면 열어요"를 고른 학생에게 "혼자 있을 때는 누구라도 어떻게 하기로 했나요?"라고 되묻는다.',
          exitTicket: [
            SELF('혼자 있는 시간 점검', ['문은 열지 않아요', '혼자라고 말하지 않아요', '보호자께 전화해요', '꾀는 말은 거절해요']),
            { type: 'choice', prompt: '혼자 있는데 제복 입은 사람이 문을 열어 달래요.', options: ['제복이면 열어요', '열지 않고 보호자께 전화', '혼자라고 말해요'], answer: 1, difficulty: 0.15, explain: '제복을 입었어도 혼자일 때는 문을 열지 않고 보호자께 알려요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '혼자 있을 때 약속',
          items: [
            { type: 'check', prompt: '지킬 약속에 표시해요.', options: ['문 열지 않기', '혼자라고 말하지 않기', '보호자께 전화하기'] },
            { type: 'short', prompt: '가족과 함께 정하고 싶은 우리 집 약속을 하나 써요.' },
          ],
          easy: { note: '"문, 말, 전화" 세 가지를 떠올려요.', items: [{ type: 'choice', prompt: '혼자 있을 때 초인종이 울리면?', options: ['문 열지 않기', '문 열기'], answer: '문 열지 않기' }] },
        },
      }),
      C({
        id: 'saf-life.e34.g4-alone-lure.wrap.refuse-story', type: 'wrap', title: '거절하는 말 완성하기',
        method: '거절하는 말 완성', tool: 'story', minutes: 7,
        levels: { easy: '말풍선 빈칸 1개를 채운다.', base: '말풍선 빈칸 2개를 채운다.', challenge: '말풍선 빈칸 3개를 채운다.' },
        wrap: {
          teacher: '"꾀는 말을 들었을 때 뭐라고 말할까요?" 말풍선을 채운 뒤 짝과 큰 목소리로 거절하는 말을 해 본다. 작게 웅얼거리는 학생에게 "둘레 사람이 들을 수 있게 또박또박 크게 말해 볼까요?"라고 말해 준다. 마지막에 "싫어요, 안 돼요, 물어볼게요"를 한 목소리로 외친다.',
          exitTicket: [
            { type: 'tool', tool: 'story', options: { mode: 'fill', slots: [{ id: 'r1', who: '나', label: '싫어요, ___.' }, { id: 'r2', who: '나', label: '보호자께 ___.' }], cards: ['따라가지 않아요', '먼저 물어볼게요', '같이 갈게요', '비밀로 할게요'] }, prompt: '거절하는 말을 완성해요.', target: { fill: { r1: '따라가지 않아요', r2: '먼저 물어볼게요' } }, difficulty: 0.15,
              levels: {
                easy: { prompt: '거절하는 말 한 칸을 채워요.', toolOptions: { slots: [{ id: 'r1', who: '나', label: '싫어요, ___.' }], cards: ['따라가지 않아요', '같이 갈게요'] }, target: { fill: { r1: '따라가지 않아요' } } },
                challenge: { prompt: '거절하는 말 세 칸을 채워요.', toolOptions: { slots: [{ id: 'r1', who: '나', label: '싫어요, ___.' }, { id: 'r2', who: '나', label: '보호자께 ___.' }, { id: 'r3', who: '나', label: '문은 ___.' }], cards: ['따라가지 않아요', '먼저 물어볼게요', '같이 갈게요', '열 수 없어요', '비밀로 할게요'] }, target: { fill: { r1: '따라가지 않아요', r2: '먼저 물어볼게요', r3: '열 수 없어요' } } },
              } },
            { type: 'choice', prompt: '거절하는 말은 어떻게 할까요?', options: ['작게 웅얼웅얼', '또박또박 크게', '웃으면서 장난처럼'], answer: 1, difficulty: 0.1, explain: '또박또박 크게 말해야 내 뜻이 전해지고 둘레 사람도 들어요.' },
            { type: 'short', prompt: '꾀는 말을 들었을 때 내가 쓸 거절하는 말을 써요.' },
          ],
        },
        worksheet: {
          title: '싫어요, 안 돼요, 물어볼게요',
          items: [
            { type: 'blank', prompt: '거절하는 말을 완성해요.', text: '"싫어요, 보호자께 먼저 ___."', answer: '물어볼게요' },
            { type: 'draw', prompt: '또박또박 거절하는 내 모습을 그려요.' },
          ],
        },
      }),
    );
  }

  PaperLessons.registerModules(M);
})();
