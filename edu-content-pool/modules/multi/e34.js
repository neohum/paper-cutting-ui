/* 법정교육 다문화 이해 — 초3-4 모듈 내용(edu-module.v1). 형식·작성 규칙: MODULES_BUILD.md, 계획: framework/mandatory.json 의 multi 초3-4.
 * 근거: 다문화가족지원법 제5조·시행령 제10조의2(연 2시간, 교육부 지침) — research-mandatory §1,
 *   초등 주제(다름 존중, 세계 문화 체험) — research-mandatory §2.
 * 초3-4 기준: 상황 판단(그림+짧은 글), 차례 정하기, 고른 이유 말하기, 짝 토의, 간단한 표·그림그래프. 법 조문·통계 해석·긴 글쓰기는 쓰지 않는다.
 * 이 영역의 틀(모든 모듈):
 *   - 다른 문화를 이국적인 볼거리나 신기한 것으로 그리지 않는다. 명절·인사·놀이는 '그 나라에서 볼 수 있는 것 하나'로만 소개하고,
 *     "그 나라 사람은 모두 ~해"로 묶지 않는다(사람마다·집마다 다르다는 말을 교사 발문에 늘 붙인다).
 *   - 편견의 말("그 나라 사람은 다 ~해", "너희 나라 말 해 봐")은 바로잡는 카드·함정 카드로만 쓴다. 비하 표현은 쓰지 않는다.
 *   - 한 나라를 더 낫다·이상하다로 견주지 않는다. 다름은 틀림이 아니고, '틀림'은 때리기·놀리기처럼 누군가를 아프게 하는 행동뿐이다.
 *   - 학생 자신이나 가족의 출신·국적·언어 배경을 묻지 않는다. 다문화 배경 친구를 반에서 짚어 예로 들거나 발표시키지 않는다.
 *     장면 속 친구(하나·레오·미나·아라·린)는 모두 가명의 가상 인물이고, 편견 장면의 나라는 '그 나라'로만 쓴다.
 * 주제 3개(3학년 2 · 4학년 1) — 계획 모듈 24개(holidays 2·4·2, bias-words 2·4·2, play-together 2·4·2).
 * 체계도 계획대로 못 한 것(교구 한계) — levels 글은 실제 설정대로 적었다:
 *   - compare-table: chart 는 글 표를 못 그려, 칠판 표(음식·놀이·가족 모임)를 함께 채운 뒤 '그 일을 하는 명절 수'를 막대그래프로 만들고 읽는 것으로 바꿨다.
 *   - holiday-map·world-tour: 문항마다 핀 하나라 '두 곳/네 곳'은 시연에서 핀이 꽂히는 곳 수로 나눴다(도입).
 *   - respect-poster: 콜라주에 말풍선 모양이 없어 말풍선 = 동그라미 조각으로 정하고 칠판에 적게 했다. 말풍선 글은 활동지에 쓴다.
 *   - mix-game: 거북이 판 칸에 이름을 달 수 없어 별 칸 = 우리 놀이(징검다리)·친구 나라 놀이, 집 = 함께 놀이, 바위 = "너는 빠져"로 정하고 칠판에 적게 했다.
 *   - 정리(출구) 질문은 단계별 판이 없어 play-check '항목 1개/2개'·play-plan '시간 하나/둘'은 교사 진행으로 나눈다.
 * 사람 확인: 근거 파일에는 교육 주제 이름뿐이라 아래 사실은 일반 지식으로 썼다. 확인처는 괄호 안
 *   (교육부·중앙다문화교육센터 다문화 이해교육 자료, 외교부 국가별 정보, 각국 주한 대사관·문화원 안내).
 *   - holidays.*: 중국 춘절·베트남 뗏·몽골 차강사르가 음력 새해 명절이라는 것, 춘절의 만두·빨간 봉투 용돈·빨간 장식·새 옷, 미국 추수감사절(11월, 가족 모임·추수 감사),
 *     사방치기와 비슷한 칸 뛰기 놀이가 여러 나라에 있다는 것과 그 규칙 차례(돌 던지기 → 돌 칸 건너 뛰기 → 돌아오며 줍기) (외교부 국가별 정보·중앙다문화교육센터)
 *   - play-together.world-tour: 태국 두 손 모아 하는 인사("사와디"), 케냐 스와힐리어 인사 "잠보", 멕시코 피냐타 놀이, 베트남 쌀국수(퍼) (외교부 국가별 정보·대사관 문화 안내)
 *   - play-together.diff-wrong: 젓가락·포크·손으로 먹기, 고개 숙여 인사·악수가 나라·집에 따라 다른 식사·인사 방법이라는 것 (중앙다문화교육센터)
 *   - 그래프 자료(좋아하는 운동·명절 견주기 수)는 가상이거나 칠판 표를 센 것이고 화면 제목에 밝혔다.
 */
(function () {
  const BASE = { schema: 'edu-module.v1', domain: 'multi', band: '초3-4' };
  const T = (topic, grade) => (o) => Object.assign({}, BASE, { topic: `multi.e34.${topic}`, grades: [grade] }, o);
  const M = [];
  const strip = (p) => String(p).replace(/[.?!]$/, '');
  const idOf = (c) => (typeof c === 'string' ? c : c.id);
  const mix = (groups) => { const out = []; const n = Math.max(...groups.map((g) => g.length)); for (let i = 0; i < n; i++) for (const g of groups) if (g[i] != null) out.push(g[i]); return out; };
  const count = (groups) => groups.reduce((a, g) => a + g.length, 0);
  const slotId = (s) => (typeof s === 'string' ? s : s.id);
  const sortT = (slots, groups) => ({ sort: Object.fromEntries(slots.map((s, i) => [slotId(s), groups[i].map(idOf)])) });
  const plain = (list) => list.map((x) => ({ id: x.id, text: x.text }));

  // 나누기(sortboard·wordcards sort): 기본 = groups, 쉬움 = 칸마다 앞에서 ne장, 도전 = 칸마다 hard 카드를 더함
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
  // 가지 수가 달라지는 나누기(mindmap): 쉬움 = 앞 k가지만, 기본 = 전부, 도전 = 카드 더함 + 함정 카드
  const SORTK = (prompt, base, slots, groups, k, hard, traps, d, more) => {
    const p = strip(prompt);
    const hardG = groups.map((g, i) => g.concat(hard[i] || []));
    return {
      prompt, toolOptions: Object.assign({}, base, { slots, cards: mix(groups) }), target: sortT(slots, groups), difficulty: d,
      levels: {
        easy: { prompt: `${p}(가지 ${k}개).`, toolOptions: { slots: slots.slice(0, k), cards: mix(groups.slice(0, k)) }, target: sortT(slots.slice(0, k), groups.slice(0, k)) },
        challenge: { prompt: `${p}. 남는 카드가 있어요.`, toolOptions: { cards: mix(hardG).concat(traps) }, target: sortT(slots, hardG) },
      },
      ...more,
    };
  };

  // 차례 놓기(timeline order): 기본 = 카드 전부, 쉬움 = keep 번째 카드들만, 도전 = 틀린 카드(trap) 한 장이 섞인다
  const NAMES = { 2: ['먼저', '다음'], 3: ['처음', '다음', '끝'], 4: ['처음', '다음', '그다음', '끝'], 5: ['처음', '다음', '그다음', '그 뒤', '끝'] };
  const shuffled = (list) => list.slice(1).concat(list[0]).reverse();
  const ORD = (prompt, base, steps, keep, trap, d, more) => {
    const ids = steps.map((c) => c.id);
    const easy = keep.map((i) => steps[i]);
    const p = strip(prompt);
    return {
      prompt, toolOptions: Object.assign({}, base, { mode: 'order', slots: NAMES[steps.length], cards: shuffled(steps) }), target: { order: ids }, difficulty: d,
      levels: {
        easy: { prompt: `${p}(${easy.length}장).`, toolOptions: { slots: NAMES[easy.length], cards: shuffled(easy) }, target: { order: easy.map((c) => c.id) } },
        challenge: { prompt: `${p}. 틀린 카드 한 장은 빼요.`, toolOptions: { cards: shuffled(steps).concat(trap) }, target: { order: ids } },
      },
      ...more,
    };
  };
  // 도전 단계에 한 단계를 더 넣는 차례 놓기: steps 기본 카드, extra = [넣을 자리 번호, 카드], 쉬움 = 앞 3장
  const ORD5 = (prompt, base, steps, extra, d, more) => {
    const ids = steps.map((c) => c.id);
    const five = steps.slice(0, extra[0]).concat(extra[1], steps.slice(extra[0]));
    const p = strip(prompt);
    const easy = steps.slice(0, 3);
    return {
      prompt, toolOptions: Object.assign({}, base, { mode: 'order', slots: NAMES[4], cards: shuffled(steps) }), target: { order: ids }, difficulty: d,
      levels: {
        easy: { prompt: `${p}(3장).`, toolOptions: { slots: NAMES[3], cards: shuffled(easy) }, target: { order: easy.map((c) => c.id) } },
        challenge: { prompt: `${p}. "${extra[1].text}"도 넣어 5장을 놓아요.`, toolOptions: { slots: NAMES[5], cards: shuffled(five) }, target: { order: five.map((c) => c.id) } },
      },
      ...more,
    };
  };

  // 갈림길(dilemma): 기본 = 장면 둘(보기 3개), 쉬움 = 첫 장면만(바른 보기 + 첫 틀린 보기), 도전 = 바른 길 끝에 셋째 장면(extra.third, 바른 보기 extra.pick)
  const easySceneOf = (scene, g0) => Object.assign({}, scene, {
    choices: scene.choices.filter((c) => c.id === g0 || c.id === scene.choices.find((x) => x.id !== g0).id)
      .map((c) => (c.id === g0 ? { id: c.id, text: c.text, result: c.result, impact: c.impact, ending: c.ending } : c)),
  });
  const deepen = (scene, path, third) => Object.assign({}, scene, {
    choices: scene.choices.map((c) => {
      if (c.id !== path[0]) return c;
      if (path.length > 1) return Object.assign({}, c, { next: deepen(c.next, path.slice(1), third) });
      const out = Object.assign({}, c, { next: third }); delete out.ending; return out;
    }),
  });
  const DIL = (prompt, scene, good, extra, d, more) => {
    const g0 = good[0][0];
    const p = strip(prompt);
    return {
      prompt, toolOptions: { scene }, target: { path: good }, difficulty: d,
      levels: {
        easy: { prompt: `${p}(한 번 골라요).`, toolOptions: { scene: easySceneOf(scene, g0) }, target: { path: [[g0]] } },
        challenge: { prompt: `${p}. 셋째 장면까지 가요.`, toolOptions: { scene: deepen(scene, good[0], extra.third) }, target: { path: good.map((g) => g.concat(extra.pick)) } },
      },
      ...more,
    };
  };

  // 짝 잇기(wordcards·timeline match): rows = [[칸 글, 카드 글], …] 기본 nBase줄, 쉬움 nEasy줄, 도전 = 전부 + 함정 카드
  const MATCH = (prompt, base, rows, nEasy, nBase, trap, d, more) => {
    const slots = rows.map((r, i) => ({ id: `r${i + 1}`, label: r[0] }));
    const cardsOf = (n) => rows.slice(0, n).map((r) => r[1]).reverse();
    const tg = (n) => ({ match: Object.fromEntries(rows.slice(0, n).map((r, i) => [`r${i + 1}`, r[1]])) });
    const p = strip(prompt);
    return {
      prompt, toolOptions: Object.assign({}, base, { mode: 'match', slots: slots.slice(0, nBase), cards: cardsOf(nBase) }), target: tg(nBase), difficulty: d,
      levels: {
        easy: { prompt: `${p}(${nEasy}줄).`, toolOptions: { slots: slots.slice(0, nEasy), cards: cardsOf(nEasy) }, target: tg(nEasy) },
        challenge: { prompt: `${p}(${rows.length}줄). 남는 카드가 있어요.`, toolOptions: { slots, cards: [trap].concat(cardsOf(rows.length)) }, target: tg(rows.length) },
      },
      ...more,
    };
  };

  // 바구니에 고르기(wordcards pick): cards = [{ id, text, ok? }], 쉬움 = easyIds 카드만, 도전 = hard 카드를 더함
  const PICK = (prompt, base, cards, easyIds, hard, d, more) => {
    const ok = (list) => list.filter((c) => c.ok).map((c) => c.id);
    const easy = cards.filter((c) => easyIds.includes(c.id));
    const all = cards.concat(hard || []);
    const lv = { easy: { prompt: `${strip(prompt)}(${easy.length}장).`, toolOptions: { cards: plain(easy) }, target: { pick: ok(easy) } } };
    if (hard && hard.length) lv.challenge = { prompt: `${strip(prompt)}(${all.length}장).`, toolOptions: { cards: plain(all) }, target: { pick: ok(all) } };
    return { prompt, toolOptions: Object.assign({ mode: 'pick' }, base, { cards: plain(cards) }), target: { pick: ok(cards) }, difficulty: d, levels: lv, ...more };
  };

  // 콜라주 판 출구 질문: 쉬움 easyN조각, 기본 baseN조각, 도전 baseN조각 + 점검 한 칸 더
  const POSTER = (prompt, options, checks, extraCheck, easyN, baseN) => ({
    type: 'tool', tool: 'collage', options, prompt, target: { selfCheck: checks, minPieces: baseN }, difficulty: 0.1,
    levels: { easy: { target: { selfCheck: checks, minPieces: easyN } }, challenge: { target: { selfCheck: checks.concat(extraCheck), minPieces: baseN } } },
  });
  const MOOD = { type: 'mood', prompt: '오늘 공부를 마친 내 마음은 어떤가요?' };
  const CARD_LV = { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } };
  const BOARD_LV = { easy: { instant: true, showCount: true }, base: {}, challenge: { shuffle: true } };
  const FICTION = '장면 속 친구(하나·레오·미나·아라·린)는 모두 가명의 가상 인물이다. "너희 집은 어느 나라에서 왔니?"처럼 학생이나 가족의 출신·국적·언어 배경을 묻지 않고, 우리 반 실제 친구를 예로 짚거나 그 나라 말·문화를 발표시키지 않는다.';
  const NOT_ALL = '나라를 소개할 때마다 "그 나라에서 볼 수 있는 것 하나예요. 그 나라 사람이 모두 이렇게 하지는 않아요. 우리나라도 집마다 다르죠?"라고 덧붙인다.';

  // ======================================================================================================
  // 3학년 · 여러 나라의 명절과 놀이 (research-mandatory §2 초: 세계 문화 체험)
  // ======================================================================================================
  {
    const C = T('holidays', 3);
    const WORLD = {
      title: '세계 명절 지도(칸 지도)', grid: [6, 4],
      places: [
        { name: '한국 설날', icon: 'house', at: [4, 1] }, { name: '중국 춘절', icon: 'city', at: [3, 1] },
        { name: '베트남 뗏', icon: 'city', at: [3, 2] }, { name: '몽골 차강사르', icon: 'city', at: [3, 0] },
        { name: '미국 추수감사절', icon: 'city', at: [0, 1] },
      ],
    };
    const D3 = [['가족이 모여요', 3], ['특별한 음식', 3], ['새해를 맞아요', 2], ['어른이 용돈 줘요', 2], ['추수에 감사해요', 1]];
    const D2 = [['가족이 모여요', 2], ['특별한 음식', 2], ['새해를 맞아요', 2], ['어른이 용돈 줘요', 2]];
    const CMP = { type: 'bar', title: '명절에 하는 일 세기(칠판 표)', unit: '개', xLabel: '하는 일', yLabel: '그 일을 하는 명절 수', max: 3, scale: 1 };
    M.push(
      C({
        id: 'multi.e34.holidays.intro.holiday-map', type: 'intro', title: '세계 명절 지도 둘러보기',
        method: '세계 명절 지도', tool: 'map', minutes: 6,
        levels: { easy: '지도에서 두 곳(중국 춘절·미국 추수감사절)에 핀이 꽂히는 것을 보고 이름을 함께 읽는다.', base: '네 곳에 핀이 차례로 꽂히는 것을 보고 명절 이름과 짧은 설명을 듣는다.', challenge: '우리 설날과 비슷한 때(음력 새해)에 맞는 명절을 지도에서 찾아 말한다.' },
        intro: {
          teacher: '"세계 여러 나라에도 우리 설날·추석 같은 명절이 있어요. 지도에서 함께 찾아볼까요?" 시연 단추로 중국 춘절 → 베트남 뗏 → 몽골 차강사르 → 미국 추수감사절 차례로 핀이 꽂히는 것을 보이고, 곳마다 한 줄씩 소개한다(춘절·뗏·차강사르는 음력 새해 명절, 추수감사절은 가을걷이에 감사하는 명절). ' + NOT_ALL + ' "이상한 명절이에요"라는 말이 나오면 "우리 명절에서 비슷한 점을 찾아볼까요?"라고 되묻는다.',
          student: '세계 명절 지도에 꽂히는 핀을 보며 명절 이름을 읽어요. 우리 설날과 비슷한 때 맞는 명절을 찾아보아요.',
          demo: { tool: 'map', options: WORLD, sequence: [{ place: '중국 춘절' }, { place: '베트남 뗏' }, { place: '몽골 차강사르' }, { place: '미국 추수감사절' }] },
          art: { draw: 'a simple paper cut world map made of colored grid squares, small paper pins with festive lanterns, a round rice cake and a harvest basket standing on different places', banner: '세계의 명절', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: FICTION,
      }),
      C({
        id: 'multi.e34.holidays.intro.our-holiday', type: 'intro', title: '우리 설날 떠올리기',
        method: '우리 명절 떠올리기', tool: 'mindmap', minutes: 6,
        levels: { easy: '"설날" 가운데 칸에서 음식·놀이 가지 2개에 카드가 붙는 것을 본다.', base: '음식·놀이·옷·인사 가지 4개에 카드가 붙는 것을 보고 더 떠올려 말한다.', challenge: '추석이라면 가지마다 무엇이 달라질지 짝과 견주어 말한다(교사 진행).' },
        intro: {
          teacher: '"설날에는 무엇을 먹고, 어떤 놀이를 하나요?" 시연 단추로 음식·놀이·옷·인사 가지에 카드가 붙는 것을 보인다(기다릴 반응: "떡국이요", "윷놀이요"). "우리 집은 한복 안 입어요"라는 말이 나오면 "맞아요. 같은 나라 안에서도 집마다 명절을 다르게 보내요"라고 받아 준다. 오늘은 다른 나라 명절과 우리 명절을 견주어 같은 점과 다른 점을 찾는다고 밝힌다.',
          student: '가운데 "설날"에서 음식·놀이·옷·인사 가지에 붙는 카드를 보고, 내가 아는 설날 모습을 떠올려 말해 보아요.',
          demo: { tool: 'mindmap', options: { topic: '설날', slots: ['음식', '놀이', '옷', '인사'], cards: ['떡국', '윷놀이', '한복', '세배', '연날리기', '"새해 복 많이"'], shuffle: false },
            sequence: [{ sort: { 음식: ['떡국'], 놀이: ['윷놀이'], 옷: [], 인사: [] } }, { sort: { 음식: ['떡국'], 놀이: ['윷놀이', '연날리기'], 옷: ['한복'], 인사: ['세배', '"새해 복 많이"'] } }] },
          art: { draw: 'a paper mind map with a paper rice cake soup bowl in the middle and branches holding a yut game, a hanbok, children bowing and a paper kite', banner: '우리 설날', extra: [{ motif: 'sun', x: 300, y: 96 }] },
        },
        notes: '학생에게 "너희 집은 명절에 무엇을 하니?"를 돌아가며 묻지 않는다. 떠올린 것을 말하고 싶은 학생만 말하게 한다.',
      }),
      C({
        id: 'multi.e34.holidays.activity.compare-table', type: 'activity', title: '명절 견주기 표와 그래프',
        method: '명절 견주기 표', tool: 'chart', minutes: 13,
        levels: { easy: '두 명절(설날·춘절)을 센 막대그래프를 완성하고(첫 막대는 미리 놓임), 두 명절 모두에 있는 일을 고른다.', base: '세 명절(설날·춘절·추수감사절)을 센 막대그래프를 완성하고 모두에 있는 일, 한 명절에만 있는 일을 고른다.', challenge: '그래프를 읽은 뒤 같은 점이 생긴 까닭을 짝과 말한다(넷째 문항).' },
        activity: {
          title: '명절 견주기 표와 그래프', tool: 'chart',
          teacher: '칠판에 설날·춘절·추수감사절 세 줄과 "가족 모임·특별한 음식·새해·어른이 주는 용돈·추수 감사" 칸을 그린 표를 함께 채운다(춘절에는 만두를 먹고 빨간 봉투에 용돈을 주는 집이 많고, 추수감사절에는 가족이 모여 가을걷이에 감사한다). "이 일을 하는 명절은 몇 개일까요?" 센 수로 막대그래프를 만든다. ' + NOT_ALL + ' "춘절은 우리 설날을 따라 한 거예요"라는 말이 나오면 "누가 누구를 따라 한 게 아니라, 여러 나라가 새해를 가족과 함께 맞는 것이 비슷한 거예요"라고 말해 준다.',
          task: '칠판 표에서 센 수로 "그 일을 하는 명절 수" 막대그래프를 완성하고, 그래프를 읽어 같은 점을 찾아요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '센 수를 보고 명절 견주기 막대그래프를 완성해요.', toolOptions: Object.assign({}, CMP, { mode: 'build', data: D3, showTable: true }), target: { build: true }, difficulty: 0.15,
              levels: { easy: { prompt: '설날·춘절 두 명절을 센 막대그래프를 완성해요.', toolOptions: { data: D2, max: 2, given: [0] }, target: { build: true } } } },
            { prompt: '그래프에서 세 명절 모두에 있는 일을 골라요.', toolOptions: Object.assign({}, CMP, { mode: 'read', data: D3, question: '세 명절 모두에 있는 일은?', choices: ['가족이 모여요', '새해를 맞아요', '추수에 감사해요'] }), target: { pick: 0 }, difficulty: 0.15,
              levels: { easy: { prompt: '그래프에서 여러 명절에 있는 일을 골라요.', toolOptions: { choices: ['가족이 모여요', '추수에 감사해요'] }, target: { pick: 0 } } } },
            { prompt: '그래프에서 한 명절에만 있는 일을 골라요.', toolOptions: Object.assign({}, CMP, { mode: 'read', data: D3, question: '한 명절에만 있는 일은?', choices: ['특별한 음식', '어른이 용돈 줘요', '추수에 감사해요'] }), target: { pick: 2 }, difficulty: 0.2 },
            { prompt: '세 명절에 같은 점이 생긴 까닭을 짝과 말해요.', free: true, talk: true,
              conclude: '나라마다 명절 날짜와 음식은 달라도, 가족이 모이고 특별한 음식을 나누는 것은 같아요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '두 명절의 같은 점과 다른 점을 하나씩 써요.', columns: ['', '설날', '춘절'], cells: [['음식', '떡국', ''], ['같은 점', '', '']], answer: '만두, 가족이 모여 새해를 맞아요' }] },
        notes: '칠판 표의 내용(춘절 만두·빨간 봉투, 추수감사절)은 많은 집이 하는 모습 하나다. 그 나라 출신 학생이 반에 있어도 "맞니?"라고 확인을 시키지 않는다.',
      }),
      C({
        id: 'multi.e34.holidays.activity.game-try', type: 'activity', title: '여러 나라 칸 뛰기 놀이',
        method: '세계 놀이 규칙 따라 하기', tool: 'timer', minutes: 14,
        levels: { easy: '놀이 규칙 카드 3장을 차례로 놓고, 타이머를 30초 한 번으로 맞춘다.', base: '규칙 카드 4장을 차례로 놓고, 타이머를 30초 두 번으로 맞춰 따라 해 본다.', challenge: '안전 점검 뒤 우리 놀이와 섞은 새 놀이 규칙을 짝과 정해 해 본다(넷째 문항).' },
        activity: {
          title: '여러 나라 칸 뛰기 놀이', tool: 'timer',
          teacher: '"우리 사방치기와 비슷한 칸 뛰기 놀이가 여러 나라에 있어요. 이름과 칸 모양은 조금씩 달라도 돌을 던지고 한 발로 뛰는 것은 비슷해요." 규칙 카드를 차례로 놓은 뒤 교실 바닥에 테이프로 칸을 그려 30초씩 따라 해 본다. "우리 놀이가 원조예요"라는 말이 나오면 "어느 쪽이 먼저인지보다, 멀리 떨어진 나라 아이들도 비슷한 놀이를 한다는 게 재미있지 않나요?"라고 되묻는다. 셋째 문항 안전 점검을 꼭 하고 시작한다.',
          task: '칸 뛰기 놀이 규칙을 차례로 놓고, 타이머를 맞춰 안전하게 따라 해 보아요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '칸 뛰기 놀이 규칙을 하는 차례로 놓아요.', toolOptions: { title: '칸 뛰기 놀이', cards: ['돌아오며 돌 줍기', '칸에 돌 던지기', '끝에서 돌아서기', '돌 칸 건너 뛰기'] }, target: { order: ['칸에 돌 던지기', '돌 칸 건너 뛰기', '끝에서 돌아서기', '돌아오며 돌 줍기'] }, difficulty: 0.15,
              levels: { easy: { prompt: '칸 뛰기 놀이 규칙을 하는 차례로 놓아요(3장).', toolOptions: { cards: ['돌아오며 돌 줍기', '칸에 돌 던지기', '돌 칸 건너 뛰기'] }, target: { order: ['칸에 돌 던지기', '돌 칸 건너 뛰기', '돌아오며 돌 줍기'] } } } },
            { prompt: '30초 놀이를 두 번 하도록 타이머를 맞춰요.', toolOptions: { title: '놀이 시간', labels: ['놀이', '쉬기'], plan: { work: 10, rest: 15, rounds: 1 } }, target: { plan: { work: 30, rounds: 2 } }, difficulty: 0.15,
              levels: { easy: { prompt: '30초 놀이를 한 번 하도록 타이머를 맞춰요.', target: { plan: { work: 30, rounds: 1 } } } } },
            { prompt: '놀이를 시작하기 전에 안전 점검 칸을 모두 확인해요.', toolOptions: { title: '놀이 전 점검', safety: ['둘레 물건을 치웠어요', '차례를 지켜요', '부딪히지 않게 떨어져요'] }, target: { safety: true }, difficulty: 0.1 },
            { prompt: '짝과 우리 놀이와 섞은 새 놀이 규칙을 정해 해 보아요.', free: true, toolOptions: { title: '섞은 놀이', doneLabel: '짝과 섞은 놀이를 해 보았어요' },
              conclude: '나라마다 이름과 규칙은 조금씩 달라도 비슷한 놀이가 많아요. 서로의 놀이를 배우면 더 재미있어요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '우리 놀이와 다른 나라 놀이를 섞은 새 놀이 규칙을 한 줄로 써요.' }] },
        notes: '교실에서 할 때는 책상을 밀고 테이프로 칸을 그린다. 실내에서는 뛰지 않고 한 발로 천천히 옮겨 디디게 해도 된다.',
      }),
      C({
        id: 'multi.e34.holidays.activity.holiday-order', type: 'activity', title: '새해 명절 하루의 차례',
        method: '명절 하루 차례 정하기', tool: 'timeline', minutes: 13,
        levels: { easy: '명절 하루 카드 3장을 차례로 놓는다(놓으면 바로 맞는지 알려 줌).', base: '춘절·설날 하루 카드 4장(준비 → 가족 모임 → 음식 → 놀이)을 차례로 놓고, 두 명절의 비슷한 것 3줄을 잇는다.', challenge: '틀린 카드 한 장을 빼고 4장을 놓고, 비슷한 것 잇기에서 남는 카드를 가려낸다.' },
        activity: {
          title: '새해 명절 하루의 차례', tool: 'timeline',
          teacher: '"린의 가족(가상)이 춘절을 맞는 하루예요. 맨 먼저 무엇을 할까요?" 카드를 다 놓으면 우리 설날 하루와 나란히 견주게 한다. "춘절도 설날이랑 똑같네요"라는 말이 나오면 "비슷한 점이 많아요. 그럼 다른 점은 무엇일까요? 떡국과 만두처럼요"라고 되묻는다. ' + NOT_ALL,
          task: '새해 명절 하루의 카드를 일어나는 차례대로 놓고, 두 명절의 비슷한 것을 이어요.', levels: CARD_LV,
          items: [
            ORD('린의 가족(가상)이 춘절을 맞는 하루를 차례로 놓아요.', { axis: ['아침', '저녁'] },
              [{ id: 'clean', text: '집 청소·장식하기' }, { id: 'gather', text: '가족이 모이기' }, { id: 'food', text: '만두 함께 먹기' }, { id: 'play', text: '함께 놀이하기' }],
              [0, 1, 2], { id: 'school', text: '학교에 가기', why: '명절은 학교를 쉬고 가족과 지내는 날이에요.' }, 0.15),
            ORD('우리 설날 하루를 차례로 놓아요.', { axis: ['아침', '저녁'] },
              [{ id: 'dress', text: '새 옷 입기' }, { id: 'bow', text: '웃어른께 세배' }, { id: 'soup', text: '떡국 먹기' }, { id: 'yut', text: '윷놀이하기' }],
              [0, 1, 2], { id: 'swim', text: '바다 수영하기', why: '설날은 추운 겨울이라 바다 수영은 하지 않아요.' }, 0.2),
            MATCH('설날과 춘절에서 비슷한 것끼리 이어요.', { axis: ['설날', '춘절'] },
              [['설날 떡국', '춘절 만두'], ['설날 세뱃돈', '빨간 봉투 용돈'], ['설날 새 옷', '춘절 새 옷'], ['설날 세배', '웃어른께 새해 인사']],
              2, 3, '칠면조 요리', 0.25, { conclude: '나라마다 음식과 모습은 달라도 새해를 가족과 함께 맞는 하루의 차례는 비슷해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '두 명절의 비슷한 것을 써요.', columns: ['설날', '춘절'], cells: [['떡국', ''], ['세뱃돈', '']], answer: '만두, 빨간 봉투 용돈' }] },
        notes: FICTION,
      }),
      C({
        id: 'multi.e34.holidays.activity.holiday-pattern', type: 'activity', title: '명절 장식 띠 무늬',
        method: '명절 장식 무늬 만들기', tool: 'pattern', minutes: 14,
        levels: { easy: '두 가지 조각(별·동그라미)이 되풀이되는 장식 띠의 빈칸을 채우고 틀린 조각을 찾는다.', base: '세 가지 조각(별·동그라미·하트)이 되풀이되는 띠의 빈칸 2개를 채우고 틀린 조각을 찾는다.', challenge: '빈칸 3개를 채운 뒤, 셋째 문항에서 세 가지 조각 이상을 써서 내 장식 띠 규칙을 만든다.' },
        activity: {
          title: '명절 장식 띠 무늬', tool: 'pattern',
          teacher: '"여러 나라 명절에는 등·깃발·꽃 장식을 줄지어 달아요. 이 장식 띠는 어떤 규칙으로 되풀이될까요?" 빈칸 앞의 조각을 손가락으로 짚으며 묶음을 소리 내어 읽게 한다(별-동그라미-하트, 별-동그라미-하트). 규칙을 깬 조각을 찾으면 "이 자리에 무엇이 와야 할까요?"라고 묻는다. 셋째 문항에서는 내가 만든 띠를 짝이 읽어 규칙을 맞히게 한다. 장식 무늬를 특정 나라 것이라고 짚지 않는다.',
          task: '명절 장식 띠의 되풀이 규칙을 찾아 빈칸을 채우고, 틀린 조각을 찾고, 내 장식 띠를 만들어요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '장식 띠의 빈칸에 규칙에 맞는 조각을 채워요.', toolOptions: { seq: ['star:buttercup', 'circle:red', 'heart:rose', 'star:buttercup', 'circle:red', null, 'star:buttercup', null, 'heart:rose'] }, target: { fill: ['heart:rose', 'circle:red'] }, difficulty: 0.15,
              levels: {
                easy: { prompt: '두 가지 조각 장식 띠의 빈칸을 채워요.', toolOptions: { seq: ['star:buttercup', 'circle:red', 'star:buttercup', 'circle:red', 'star:buttercup', null] }, target: { fill: ['circle:red'] } },
                challenge: { prompt: '장식 띠의 빈칸 3개를 규칙에 맞게 채워요.', toolOptions: { seq: ['star:buttercup', null, 'heart:rose', 'star:buttercup', 'circle:red', null, null, 'circle:red', 'heart:rose'] }, target: { fill: ['circle:red', 'heart:rose', 'star:buttercup'] } },
              } },
            { prompt: '장식 띠에서 규칙을 깬 조각을 찾아요.', toolOptions: { mode: 'odd', seq: ['star:buttercup', 'circle:red', 'heart:rose', 'star:buttercup', 'circle:red', 'heart:rose', 'star:buttercup', 'heart:rose', 'heart:rose'] }, target: { odd: 7 }, difficulty: 0.2,
              levels: { easy: { prompt: '두 가지 조각 장식 띠에서 규칙을 깬 조각을 찾아요.', toolOptions: { seq: ['star:buttercup', 'circle:red', 'star:buttercup', 'circle:red', 'circle:red', 'circle:red'] }, target: { odd: 4 } } } },
            { prompt: '세 가지 조각으로 되풀이되는 내 장식 띠를 만들어요.', toolOptions: { mode: 'make', palette: ['star:buttercup', 'circle:red', 'heart:rose', 'diamond:sky'], length: 9 }, target: { rule: 'repeat', minRepeats: 2, uses: 3 }, difficulty: 0.25,
              conclude: '장식 띠는 같은 묶음이 되풀이돼요. 나라마다 장식 모양은 달라도 명절을 꾸미는 마음은 같아요.' },
          ],
        },
        worksheet: { items: [{ type: 'draw', prompt: '내가 만든 명절 장식 띠를 그리고 되풀이 묶음에 동그라미를 해요.' }] },
      }),
      C({
        id: 'multi.e34.holidays.wrap.same-diff', type: 'wrap', title: '같은 점·다른 점 한 줄 말하기',
        method: '같은 점·다른 점 한 줄 말하기', tool: 'sortboard', minutes: 6,
        levels: { easy: '카드 2장을 "같은 점"·"다른 점"에 나눈다(넣으면 바로 알려 줌).', base: '카드 4장을 나누고 하나를 골라 짝에게 한 줄로 말한다.', challenge: '카드를 나눈 뒤 고른 까닭까지 한 줄로 쓴다(출구 2번).' },
        wrap: {
          teacher: '"오늘 견준 명절에서 같은 점과 다른 점은 무엇이었나요?" 카드를 나눈 뒤 "설날과 춘절은 ○○이 같고, ○○이 달라요." 틀로 짝에게 말하게 한다. "다른 점이 있으니 이상해요"라는 말에는 "다른 것은 이상한 게 아니라 다양한 거예요. 우리도 집마다 다르죠?"라고 말해 준다.',
          exitTicket: [
            { type: 'tool', tool: 'sortboard', options: { slots: ['같은 점', '다른 점'], cards: ['가족이 모여요', '먹는 음식 종류', '명절 음식을 나눠요', '명절 이름'] }, prompt: '명절 카드를 같은 점과 다른 점으로 나누어요.', target: { sort: { '같은 점': ['가족이 모여요', '명절 음식을 나눠요'], '다른 점': ['먹는 음식 종류', '명절 이름'] } }, difficulty: 0.15,
              levels: { easy: { toolOptions: { cards: ['가족이 모여요', '먹는 음식 종류'], instant: true }, target: { sort: { '같은 점': ['가족이 모여요'], '다른 점': ['먹는 음식 종류'] } } } } },
            { type: 'short', prompt: '"○○이 같고, ○○이 달라요"를 한 줄로 쓰고 까닭을 덧붙여요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '명절의 같은 점과 다른 점',
          items: [
            { type: 'table', prompt: '두 명절을 견주어 써요.', columns: ['같은 점', '다른 점'], cells: [['', '']], answer: '가족이 모여요, 먹는 음식이 달라요' },
            { type: 'short', prompt: '다른 나라 명절에서 해 보고 싶은 것을 한 줄로 써요.' },
          ],
          easy: { note: '"가족이 모여요"를 떠올려요.', items: [{ type: 'choice', prompt: '여러 나라 명절의 같은 점은?', options: ['가족이 모여요', '음식이 똑같아요'], answer: '가족이 모여요' }] },
        },
      }),
      C({
        id: 'multi.e34.holidays.wrap.holiday-card', type: 'wrap', title: '명절 축하 카드 꾸미기',
        method: '친구 명절 축하 카드', tool: 'collage', minutes: 6,
        levels: { easy: '조각 2개 이상으로 축하 카드를 꾸미고 점검 3칸에 표시한다.', base: '조각 4개 이상으로 축하 카드를 꾸미고 점검 3칸에 표시한다.', challenge: '조각 4개 이상으로 꾸미고, 그 명절 인사말을 활동지 카드에 써 붙인 뒤 점검 4칸에 표시한다.' },
        wrap: {
          teacher: '"오늘 알게 된 명절 하나를 골라, 그 명절을 맞는 친구에게 보낼 축하 카드를 꾸며 볼까요?" 조각을 붙이며 무엇을 나타냈는지 짝에게 말하게 한다. 카드는 반 친구 누구에게나 보낼 수 있는 축하로 만들고, 특정 친구를 그 나라 사람으로 짚어 주게 하지 않는다. 출구 2번에서 "다른 나라 명절은 이상해요"를 고른 학생에게 "오늘 찾은 같은 점을 떠올려 볼까요?"라고 되묻는다.',
          exitTicket: [
            POSTER('색종이 조각으로 명절 축하 카드를 꾸며요.', { maxPieces: 12 }, ['명절 하나를 골랐어요', '축하하는 마음을 담았어요', '짝에게 카드를 소개했어요'], '그 명절 인사말을 썼어요', 2, 4),
            { type: 'choice', prompt: '다른 나라 명절을 알게 되었을 때 알맞은 생각은?', options: ['우리 것과 비슷한 점이 있네', '다른 나라 명절은 이상해', '우리 명절만 좋아'], answer: 0, difficulty: 0.1, explain: '명절은 달라도 가족과 함께 기뻐하는 마음은 비슷해요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '명절 축하 카드',
          items: [
            { type: 'short', prompt: '축하 카드를 받을 명절 이름과 축하하는 말을 써요.' },
            { type: 'draw', prompt: '명절 축하 카드를 그려요.' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 3학년 · 편견의 말을 존중의 말로 (research-mandatory §2 초: 다름 존중)
  // ======================================================================================================
  {
    const C = T('bias-words', 3);
    const SPORT = [['축구', 8], ['줄넘기', 6], ['피구', 5], ['수영', 3]];
    const SPIC = { type: 'picture', title: '우리 반이 좋아하는 운동(가상의 22명)', unit: '명', xLabel: '운동', yLabel: '친구 수', icons: [{ value: 5, name: '5명' }, { value: 1, name: '1명' }], icon: 'person' };
    const CHANT = ['e', 'e', 'q', 'q', 'qr', 'q', 'q', 'q', 'qr'];
    const BUBBLE = { shapes: ['circle', 'rect', 'star', 'heart'], maxPieces: 14 };
    M.push(
      C({
        id: 'multi.e34.bias-words.intro.all-same', type: 'intro', title: '"모두 그럴까?" 그림 보기',
        method: '"모두 그럴까?" 그림 보기', tool: 'emotion', minutes: 6,
        levels: { easy: '가상의 나라 친구 넷 그림 1장을 보고 "다 같다/다 다르다"를 함께 고른다.', base: '음식·놀이 그림 2장을 보고 "다 다르다"를 고른 까닭을 말한다.', challenge: '우리 반도 좋아하는 것이 다 같은지 다른지 고르고 까닭을 말한다(교사 진행).' },
        intro: {
          teacher: '"가온나라(가상의 나라) 친구 넷이 좋아하는 음식을 그렸어요. 가온나라 사람은 다 같은 음식을 좋아할까요?" 그림을 보며 떡볶이·국수·빵·과일을 함께 읽고, 시연 단추로 "다 달라요"가 골라지는 것을 보인다. 놀이 그림(축구·그림 그리기·춤·책 읽기)도 같은 방법으로 묻는다. "그래도 그 나라 사람은 대부분 그렇잖아요"라는 말이 나오면 "우리 반 친구들은 다 같은 음식을 좋아하나요?"라고 되묻는다. 오늘은 "다 그래"라는 말을 살펴본다고 밝힌다.',
          student: '가온나라 친구 넷이 좋아하는 음식 그림을 보고 "다 같아요"와 "다 달라요" 가운데 골라요. 왜 그렇게 골랐는지 말해 보아요.',
          demo: { tool: 'emotion', options: { mode: 'branch', situation: '가온나라(가상) 친구 넷이 좋아하는 음식이 다 달라요.', feeling: '놀람', choices: [{ id: 'same', text: '다 같아요', result: '다시 보면 떡볶이·국수·빵·과일로 달라요.', mood: '놀람' }, { id: 'diff', text: '다 달라요', result: '맞아요. 한 나라 사람도 좋아하는 것이 저마다 달라요.', mood: '기쁨' }] }, sequence: [{ choice: 'diff' }] },
          art: { draw: 'four paper children from the same imaginary country standing in a row, each holding a different food: spicy rice cakes, noodles, bread and fruit', banner: '모두 그럴까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '가온나라는 지어낸 나라다. 편견을 다루는 장면에서는 실제 나라 이름을 쓰지 않는다.',
      }),
      C({
        id: 'multi.e34.bias-words.intro.class-likes', type: 'intro', title: '"우리 반은 다 축구?" 그래프',
        method: '우리 반 좋아하는 것 그림그래프', tool: 'chart', minutes: 6,
        levels: { easy: '운동 3가지(축구·줄넘기·피구) 그림만 함께 세어 본다.', base: '운동 4가지 그림그래프를 읽고 "우리 반은 다 축구를 좋아해"가 맞는지 고른다.', challenge: '"다"라는 말이 틀린 까닭을 그래프의 수로 짝에게 말한다(교사 진행).' },
        intro: {
          teacher: '"가상의 우리 반 22명이 좋아하는 운동이에요. 축구가 가장 많네요. 그럼 \'우리 반은 다 축구를 좋아해\'라는 말은 맞을까요?" 시연 단추로 "틀려요"가 골라지는 것을 보이고, 축구가 아닌 친구가 몇 명인지 함께 센다(6명·5명·3명). "가장 많으니까 다라고 해도 돼요"라는 말이 나오면 "줄넘기를 좋아하는 6명은 \'다\'라는 말을 들으면 어떨까요?"라고 되묻는다. 자료는 가상이라고 밝힌다.',
          student: '우리 반 운동 그림그래프를 읽고 "우리 반은 다 축구를 좋아해"가 맞는지 골라요. 왜 그런지 짝과 말해 보아요.',
          demo: { tool: 'chart', options: Object.assign({}, SPIC, { mode: 'read', data: SPORT, question: '"우리 반은 다 축구를 좋아해"는?', choices: ['맞아요', '틀려요'] }), sequence: [{ pick: 1 }] },
          art: { draw: 'a paper picture graph on a classroom board with small paper person icons in rows for soccer, jump rope, dodgeball and swimming, a speech bubble saying everyone likes soccer with a question mark', banner: '정말 다 그럴까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '그래프는 가상 자료다.',
      }),
      C({
        id: 'multi.e34.bias-words.activity.word-change', type: 'activity', title: '편견 말을 존중 말로 바꾸기',
        method: '편견 말 바꾸기', tool: 'wordcards', minutes: 13,
        levels: { easy: '편견 말 2개에 바꾼 말 카드를 잇고, 카드 4장을 나누고, 카드 3장에서 존중의 말을 고른다.', base: '편견 말 3개에 바꾼 말을 잇고, 카드 6장을 편견·존중으로 나누고, 5장에서 존중의 말을 고른다.', challenge: '편견 말 4개에 남는 카드를 가려 잇고, 헷갈리는 카드가 더해진 판에서 나누고 고른다.' },
        activity: {
          title: '편견 말을 존중 말로 바꾸기', tool: 'wordcards',
          teacher: '"\'그 나라 사람은 다 ~해\'라는 말을 그 친구 한 사람에게 묻는 말로 바꾸면 어떻게 될까요?" 카드를 이은 뒤 바꾼 말을 짝과 소리 내어 주고받게 한다. "너희 나라 말 해 봐"를 존중의 말로 고르는 학생에게 "친구가 하고 싶지 않은데 여럿 앞에서 해 보라고 하면 어떨까요? 신기한 구경거리처럼 느낄 수 있어요"라고 말해 준다. 편견의 말은 바꾸기 위해서만 읽고, 실제 친구에게 쓰지 않는다는 것을 먼저 약속한다.',
          task: '편견의 말을 그 친구 한 사람을 존중하는 말로 바꾸고, 존중의 말을 골라요.', levels: CARD_LV,
          items: [
            MATCH('편견의 말과 바꾼 존중의 말을 이어요.', {},
              [['"그 나라 사람은 다 매운 걸 먹어"', '"너는 뭘 즐겨 먹어?"'], ['"그 나라 애들은 다 춤을 잘 춰"', '"너는 뭘 잘해?"'], ['"그 나라 사람은 다 키가 커"', '"사람마다 키는 달라"'], ['"외국에서 왔으니 한국어 못하지?"', '"어떤 말로 얘기할까?"']],
              2, 3, '"너희 나라는 이상해"', 0.15),
            SORT('말 카드를 편견의 말과 존중의 말로 나누어요.', { mode: 'sort' }, ['편견의 말', '존중의 말'],
              [['"다 그렇대"', '"원래 그 나라는"', '"그 나라는 다 시골"'], ['"너는 어때?"', '"사람마다 달라"', '"알려 줄래?"']],
              2, [['"그 나라 사람답네"'], ['"직접 물어볼게"']], 0.2),
            PICK('그 친구를 존중하는 말만 바구니에 담아요.', { basket: '존중의 말' },
              [{ id: 'name', text: '"이름이 뭐야?"', ok: true }, { id: 'show', text: '"너희 나라 말 해 봐"' }, { id: 'play', text: '"같이 할래?"', ok: true }, { id: 'same', text: '"너희는 다 똑같지?"' }, { id: 'like', text: '"너는 뭘 좋아해?"', ok: true }],
              ['name', 'show', 'play'], [{ id: 'ask', text: '"궁금한데 물어봐도 돼?"', ok: true }, { id: 'strange', text: '"신기하게 생겼다"' }], 0.25,
              { conclude: '"그 나라 사람은 다"가 아니라 "너는?" 하고 한 사람에게 물어요. 친구는 구경거리가 아니에요.' }),
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '편견의 말을 존중의 말로 바꿔 써요.', text: '"그 나라 사람은 다 매운 걸 먹어" → "너는 ___?"', answer: '뭘 즐겨 먹어' }] },
        notes: '편견의 말 카드는 바로잡기 위해서만 읽는다. 학생에게 "들어 본 말"을 말하게 할 때는 가상의 예로만 하고, 누가 누구에게 한 말인지 묻지 않는다.',
      }),
      C({
        id: 'multi.e34.bias-words.activity.bias-judge', type: 'activity', title: '갈림길: 그 말, 그대로 할까?',
        method: '그림+짧은 글 상황 판단', tool: 'dilemma', minutes: 14,
        levels: { easy: '갈림 1번, 보기 2개 가운데 고르고 결과를 본다.', base: '갈림 2번 — 편견의 말을 바꾼 뒤 이어지는 대화에서 할 말을 고른다(보기 3개씩).', challenge: '갈림 3번 — 옆 친구가 편견의 말을 할 때 내가 할 말까지 고른다.' },
        activity: {
          title: '갈림길: 그 말, 그대로 할까?', tool: 'dilemma',
          teacher: '"이 말을 들은 친구는 어떤 마음일까요? 바꿔 물으면 무엇이 달라질까요?" 결과 장면을 소리 내어 읽고 다음 장면에서 다시 고른다. 편견의 말을 그대로 한 길을 고른 학생을 나무라지 않고 "궁금한 마음은 좋아요. 그 궁금함을 친구 한 사람에게 묻는 말로 바꾸면 어떨까요?"라고 되묻는다. "우리나라 음식이 최고야" 같은 보기가 나오면 "음식에는 더 낫고 못한 것이 없어요. 서로 다를 뿐이에요"라고 짚는다.',
          task: '장면을 읽고 보기를 골라요. 결과를 보고 다음 장면에서 또 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL('전학 온 하나에게 무엇을 물을까요?', {
              text: '다른 나라에서 전학 온 하나와 점심을 먹어요. "너희 나라는 다 매운 거 먹지?"라고 물으려 해요.', motif: 'sun',
              choices: [
                { id: 'say', text: '그대로 묻는다', result: '하나가 "나는 매운 거 못 먹어" 하며 웃음이 사라졌어요.', impact: [{ who: '하나', text: '한 사람으로 안 봐 줘서 서운해요', tone: -1 }], why: '"다"로 묶어 물으면 하나 한 사람을 보지 못해요.' },
                { id: 'change', text: '"너는 뭘 좋아해?"로 묻는다', result: '하나가 "나는 감자 요리 좋아해!" 했어요.', ending: '바꿔 물으니 하나에 대해 알게 됐어요.', next: {
                  text: '하나가 "너는 뭐 좋아해?" 하고 되물어요.', choices: [
                    { id: 'share', text: '"나는 김밥! 같이 먹어 보자"', result: '둘이 반찬을 나누며 이야기했어요.', impact: [{ who: '하나와 나', text: '가까워졌어요', tone: 1 }], ending: '서로 묻고 나누니 친구가 되었어요.' },
                    { id: 'best', text: '"우리나라 음식이 최고야"', result: '하나가 머쓱하게 웃었어요.', impact: [{ who: '하나', text: '불편해요', tone: -1 }], why: '어느 나라 음식이 더 낫다고 견주지 않아요.' },
                    { id: 'odd', text: '"감자 요리? 이상해"', result: '하나가 말을 멈췄어요.', impact: [{ who: '하나', text: '속상해요', tone: -1 }], why: '나와 다른 것을 이상하다고 하지 않아요.' },
                  ] } },
                { id: 'avoid', text: '말을 걸지 않는다', result: '하나는 혼자 조용히 밥을 먹었어요.', impact: [{ who: '하나', text: '외로워요', tone: -1 }], why: '편견이 걱정되면 한 사람에게 묻는 말로 다가가요.' },
              ] }, [['change', 'share']],
            { third: { text: '옆 친구가 "그 나라 애들은 원래 그래" 해요.', choices: [
              { id: 'one', text: '"하나는 하나야. 직접 물어봐"', result: '옆 친구도 하나에게 직접 물어봤어요.', impact: [{ who: '하나', text: '존중받아요', tone: 1 }], ending: '편견의 말을 들었을 때 "한 사람씩"이라고 말했어요.' },
              { id: 'agree', text: '"맞아, 원래 그래"', result: '하나가 고개를 숙였어요.', impact: [{ who: '하나', text: '서운해요', tone: -1 }], why: '"원래 그래"는 한 사람을 묶어 버리는 말이에요.' },
              { id: 'laugh', text: '같이 웃는다', result: '하나 얼굴이 굳었어요.', impact: [{ who: '하나', text: '창피해요', tone: -1 }], why: '편견의 말에 웃으면 그 말이 더 커져요.' },
            ] }, pick: 'one' }, 0.2),
            DIL('달리기 선수를 어떻게 뽑을까요?', {
              text: '반 대표 달리기 선수를 뽑아요. 누가 "레오는 그 나라 사람이라 잘 뛸 거야" 해요.', motif: 'star',
              choices: [
                { id: 'agree', text: '"그럼 레오가 나가"', result: '레오가 "나 달리기 자신 없는데…" 했어요.', impact: [{ who: '레오', text: '부담스러워요', tone: -1 }], why: '나라를 보고 잘하는 것을 짐작하면 그 사람을 보지 못해요.' },
                { id: 'fair', text: '"사람마다 달라. 기록으로 정하자"', result: '모두 같은 거리를 달려 기록을 쟀어요.', ending: '나라가 아니라 한 사람씩 기록으로 정했어요.', next: {
                  text: '재 보니 레오는 줄넘기를 더 잘해요. 어떻게 할까요?', choices: [
                    { id: 'ask', text: '레오에게 하고 싶은 것을 묻는다', result: '레오가 "줄넘기 대표 할래!" 했어요.', impact: [{ who: '레오', text: '신나요', tone: 1 }], ending: '레오가 잘하고 좋아하는 것을 레오에게 물었어요.' },
                    { id: 'force', text: '"그래도 달리기 해"', result: '레오가 힘없이 고개를 끄덕였어요.', impact: [{ who: '레오', text: '속상해요', tone: -1 }], why: '하고 싶지 않은 것을 억지로 맡기지 않아요.' },
                    { id: 'tease', text: '"그 나라 사람인데 왜 못 뛰어?"', result: '레오 얼굴이 빨개졌어요.', impact: [{ who: '레오', text: '창피해요', tone: -1 }], why: '편견에 안 맞는다고 놀리면 또 다른 편견이에요.' },
                  ] } },
                { id: 'laugh', text: '웃고 넘어간다', result: '레오가 대표로 정해져 버렸어요.', impact: [{ who: '레오', text: '부담스러워요', tone: -1 }], why: '편견의 말을 그냥 넘기면 그 말대로 정해져요.' },
              ] }, [['fair', 'ask']],
            { third: { text: '다음 날 다른 친구가 "그 나라 애들은 다 줄넘기 잘하나 봐" 해요.', choices: [
              { id: 'each', text: '"레오가 잘하는 거야. 다는 아니야"', result: '친구가 "아, 그렇네" 했어요.', impact: [{ who: '레오', text: '한 사람으로 존중받아요', tone: 1 }], ending: '한 사람이 잘하는 것을 나라 전체로 묶지 않았어요.' },
              { id: 'yes', text: '"응, 다 그런가 봐"', result: '새 편견이 또 생겼어요.', impact: [{ who: '레오', text: '부담스러워요', tone: -1 }], why: '한 사람을 보고 "다"라고 하면 다시 편견이 돼요.' },
              { id: 'quiet', text: '아무 말 안 한다', result: '그 말이 반에 퍼졌어요.', impact: [{ who: '레오', text: '불편해요', tone: 0 }], why: '"다는 아니야" 한마디로 편견을 멈출 수 있어요.' },
            ] }, pick: 'each' }, 0.25),
            DIL('미나가 한국어를 천천히 말해요.', {
              text: '새로 온 미나가 한국어를 천천히 말해요. 누가 "외국에서 온 애들은 다 한국어 못해" 해요.', motif: 'cloud',
              choices: [
                { id: 'agree', text: '"맞아, 말 걸지 말자"', result: '미나는 쉬는 시간에 혼자 있었어요.', impact: [{ who: '미나', text: '외로워요', tone: -1 }], why: '천천히 말해도 함께 이야기할 수 있어요.' },
                { id: 'learn', text: '"미나는 한국어를 배우는 중이야"', result: '친구들이 미나 곁으로 왔어요.', ending: '편견 대신 미나 한 사람을 알려 줬어요.', next: {
                  text: '미나가 천천히 "같이… 놀래?" 해요.', choices: [
                    { id: 'wait', text: '끝까지 듣고 "좋아!" 한다', result: '미나가 활짝 웃었어요.', impact: [{ who: '미나', text: '기뻐요', tone: 1 }], ending: '끝까지 들어 주니 미나도 마음 편히 말했어요.' },
                    { id: 'cut', text: '말을 가로채 대신 말한다', result: '미나가 하려던 말을 멈췄어요.', impact: [{ who: '미나', text: '답답해요', tone: -1 }], why: '친구가 스스로 말할 때까지 기다려요.' },
                    { id: 'mimic', text: '말투를 따라 한다', result: '미나 얼굴이 빨개졌어요.', impact: [{ who: '미나', text: '창피해요', tone: -1 }], why: '말투를 흉내 내면 놀림이 돼요.' },
                  ] } },
                { id: 'loud', text: '아주 크게 또박또박 말한다', result: '미나가 놀라 뒤로 물러섰어요.', impact: [{ who: '미나', text: '놀랐어요', tone: -1 }], why: '크게 말하기보다 쉬운 말로 천천히 말해요.' },
              ] }, [['learn', 'wait']],
            { third: { text: '다른 친구가 "미나 나라 말로 인사는 뭐야?" 하고 궁금해해요.', choices: [
              { id: 'ask', text: '미나에게 알려 줄 수 있는지 묻는다', result: '미나가 좋다며 인사말을 알려 줬어요.', impact: [{ who: '미나', text: '뿌듯해요', tone: 1 }], ending: '궁금한 것은 친구에게 먼저 묻고, 친구가 좋다고 할 때 배웠어요.' },
              { id: 'guess', text: '"다 \'헬로\' 아니야?" 한다', result: '미나가 고개를 저었어요.', impact: [{ who: '미나', text: '서운해요', tone: -1 }], why: '나라마다 쓰는 말이 달라요. 짐작하지 말고 물어요.' },
              { id: 'make', text: '"해 봐, 해 봐!" 조른다', result: '미나가 쑥스러워 말을 못 했어요.', impact: [{ who: '미나', text: '부담스러워요', tone: -1 }], why: '여럿이 조르면 구경거리가 돼요. 하고 싶은지 먼저 물어요.' },
            ] }, pick: 'ask' }, 0.3, { conclude: '"다 그래" 대신 그 친구에게 직접 묻고, 편견의 말을 들으면 "한 사람씩 달라"라고 말해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '"그 나라 애들은 원래 그래"를 들으면?', options: ['"한 사람씩 달라"라고 말해요', '같이 웃어요', '"맞아"라고 해요'], answer: '"한 사람씩 달라"라고 말해요' }] },
        notes: FICTION,
      }),
      C({
        id: 'multi.e34.bias-words.activity.pair-why', type: 'activity', title: '짝 토의: 왜 편견일까',
        method: '짝 토의: 왜 편견일까', tool: 'mindmap', minutes: 13,
        levels: { easy: '편견 문장 가운데 칸에서 가지 2개(왜 틀렸나·듣는 친구 마음)에 카드를 붙인다(놓으면 바로 알려 줌).', base: '가지 3개(왜 틀렸나·듣는 친구 마음·바꾼 말)에 카드를 붙인다.', challenge: '카드가 더해지고 남는 카드를 가려내며, 셋째 문항에서 두 편견 문장을 견주어 짝과 말한다.' },
        activity: {
          title: '짝 토의: 왜 편견일까', tool: 'mindmap',
          teacher: '"이 말은 왜 틀렸을까요? 이 말을 들은 친구는 어떤 마음일까요? 어떻게 바꿔 말할까요?" 짝과 가지마다 카드를 하나씩 번갈아 붙이게 한다. "몇 명은 진짜 그렇던데요"라는 학생에게 "몇 명을 보고 모두라고 하면 나머지 친구는 어떨까요?"라고 묻는다. 셋째 문항에서 두 문장의 같은 점(모두 "다"로 묶는다)을 짝이 찾아 말하게 한다.',
          task: '가운데 편견 문장에서 "왜 틀렸나·듣는 친구 마음·바꾼 말" 가지에 카드를 짝과 붙여요.', levels: CARD_LV,
          items: [
            SORTK('"그 나라 사람은 다 매운 걸 먹어"를 짝과 살펴요.', { topic: '"다 매운 걸 먹어"' }, ['왜 틀렸나', '듣는 친구 마음', '바꾼 말'],
              [['사람마다 달라서', '몇 명만 봐서'], ['속상함', '억울함'], ['"너는 뭘 즐겨 먹어?"', '"사람마다 달라"']],
              2, [['직접 안 물어봐서'], ['외로움'], ['"알려 줄래?"']], [{ id: 'fact', text: '다 사실이라서', why: '한 나라 사람도 좋아하는 음식은 저마다 달라요.' }], 0.15),
            SORTK('"그 나라 애들은 다 춤을 잘 춰"를 짝과 살펴요.', { topic: '"다 춤을 잘 춰"' }, ['왜 틀렸나', '듣는 친구 마음', '바꾼 말'],
              [['춤 못 추는 사람도 있어', '한 명만 봐서'], ['부담됨', '창피함'], ['"너는 뭘 잘해?"', '"추고 싶으면 해"']],
              2, [['나라로 짐작해서'], ['걱정']], [{ id: 'praise', text: '칭찬이니까 괜찮아', why: '좋은 말이어도 "다"로 묶으면 그렇지 않은 친구가 부담을 느껴요.' }], 0.2),
            { prompt: '두 편견 문장의 같은 점을 짝과 찾아 말해요.', free: true, talk: true,
              conclude: '편견은 몇 사람을 보고 "다"라고 묶는 말이에요. 칭찬처럼 들려도 한 사람 한 사람을 보지 못해요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '"그 나라 애들은 다 춤을 잘 춰"가 편견인 까닭을 한 줄로 써요.' }] },
      }),
      C({
        id: 'multi.e34.bias-words.activity.respect-poster', type: 'activity', title: '존중의 말 게시판',
        method: '존중의 말 게시판', tool: 'collage', minutes: 14,
        levels: { easy: '말풍선(동그라미) 2개를 붙이고, 색 2가지로 꾸미고, 점검 2칸에 표시한다.', base: '말풍선 4개를 붙이고, 색 4가지로 저마다 다르게 꾸미고, 점검 2칸에 표시한다.', challenge: '말풍선 4개와 색 4가지로 꾸미고, 게시판 제목을 정해 점검 3칸에 표시한다.' },
        activity: {
          title: '존중의 말 게시판', tool: 'collage',
          teacher: '"오늘 바꾼 존중의 말을 교실 게시판에 붙여 볼까요? 동그라미는 말풍선이에요." 말풍선 하나에 존중의 말 하나를 떠올리고, 그 말은 활동지에 적게 한다. 둘째 문항에서 "말풍선마다 색이 다르면 무엇이 생각나나요?"라고 물어 한 사람 한 사람이 다르다는 것과 잇는다. 편견의 말을 말풍선에 붙이려는 학생에게 "게시판에는 들으면 마음이 편해지는 말만 붙여요"라고 말해 준다.',
          task: '존중의 말 말풍선(동그라미) 조각을 게시판 판에 붙여 우리 반 존중의 말 게시판을 꾸며요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '존중의 말 말풍선(동그라미)을 게시판에 붙여요.', toolOptions: BUBBLE, target: { has: [{ shape: 'circle', min: 4 }] }, difficulty: 0.1,
              levels: { easy: { prompt: '존중의 말 말풍선(동그라미)을 2개 붙여요.', target: { has: [{ shape: 'circle', min: 2 }] } } } },
            { prompt: '말풍선 색을 빨강·파랑·노랑·초록으로 저마다 다르게 붙여요.', toolOptions: BUBBLE, target: { has: [{ shape: 'circle', color: '빨강', min: 1 }, { shape: 'circle', color: '파랑', min: 1 }, { shape: 'circle', color: '노랑', min: 1 }, { shape: 'circle', color: '초록', min: 1 }] }, difficulty: 0.15,
              levels: { easy: { prompt: '말풍선 색을 빨강·파랑 두 가지로 붙여요.', target: { has: [{ shape: 'circle', color: '빨강', min: 1 }, { shape: 'circle', color: '파랑', min: 1 }] } } } },
            { prompt: '완성한 게시판을 보고 점검 칸에 표시해요.', toolOptions: BUBBLE, target: { selfCheck: ['존중의 말을 떠올렸어요', '짝과 말을 읽었어요'], minPieces: 4 }, difficulty: 0.1,
              levels: { easy: { prompt: '말풍선 2개 이상 붙인 게시판을 보고 점검 칸에 표시해요.', target: { selfCheck: ['존중의 말을 떠올렸어요', '짝과 말을 읽었어요'], minPieces: 2 } }, challenge: { prompt: '게시판 제목도 정하고 점검 칸에 표시해요.', target: { selfCheck: ['존중의 말을 떠올렸어요', '짝과 말을 읽었어요', '게시판 제목을 정했어요'], minPieces: 4 } } },
              conclude: '말풍선 색이 다 다르듯 우리도 한 사람 한 사람 달라요. 존중의 말은 그 다름을 반겨요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '게시판 말풍선에 넣은 존중의 말을 두 개 써요.' }] },
        notes: '콜라주에는 말풍선 모양이 없다. 동그라미 조각 = 말풍선이라고 칠판에 적고, 말풍선의 글은 활동지에 쓰게 한다.',
      }),
      C({
        id: 'multi.e34.bias-words.wrap.respect-chant', type: 'wrap', title: '"다 아니고 한 명씩" 구호',
        method: '"다 아니고 한 명씩" 구호', tool: 'keyboard', minutes: 6,
        levels: { easy: '구호 두 마디 리듬 블록을 따라 놓고 한 번 외친다.', base: '구호 네 마디(두 번) 리듬 블록을 따라 놓고 두 번 외친다.', challenge: '구호를 외치며 "다"에서 두 팔을 벌리고 "한 명씩"에서 손가락을 하나 드는 동작을 붙인다(교사 진행).' },
        wrap: {
          teacher: '"오늘 배운 것을 구호로 외쳐 볼게요. 다-아-니-고(쉼), 한-명-씩(쉼)." 손뼉으로 한 번 들려준 뒤 리듬 블록을 놓게 한다. 블록을 다 놓으면 반 전체가 박에 맞춰 두 번 외친다. 출구 2번에서 "다 그래"를 고른 학생에게 "오늘 그래프에서 축구가 아닌 친구가 몇 명이었는지 떠올려 볼까요?"라고 되묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 4, blocks: ['q', 'e', 'qr'], pattern: CHANT.concat(CHANT) }, prompt: '"다 아니고 한 명씩" 구호 리듬을 듣고 블록으로 따라 놓아요.', target: { rhythm: CHANT.concat(CHANT) }, difficulty: 0.2,
              levels: { easy: { toolOptions: { measures: 2, pattern: CHANT }, target: { rhythm: CHANT } } } },
            { type: 'choice', prompt: '"그 나라 사람은 다 ~해"를 바꾼 말로 알맞은 것은?', options: ['"다 그래"', '"너는 어때?"', '"원래 그래"'], answer: 1, difficulty: 0.1, explain: '한 사람에게 직접 물어요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '다 아니고 한 명씩',
          items: [
            { type: 'blank', prompt: '구호의 빈칸을 채워요.', text: '다 아니고 ___!', answer: '한 명씩' },
            { type: 'short', prompt: '"다 아니고 한 명씩"이 무슨 뜻인지 내 말로 한 줄 써요.' },
          ],
        },
      }),
      C({
        id: 'multi.e34.bias-words.wrap.why-pick', type: 'wrap', title: '고른 말과 그 이유',
        method: '고른 말과 이유 말하기', tool: 'sortboard', minutes: 6,
        levels: { easy: '이유 카드 2장을 "좋은 이유" 바구니에 넣는다(넣으면 바로 알려 줌).', base: '이유 카드 5장을 "좋은 이유"와 "이유가 아니에요"로 나누고, 오늘 바꾼 말 하나와 이유를 쓴다.', challenge: '카드를 나누고 쓴 말과 이유를 짝에게 말한다(교사 진행).' },
        wrap: {
          teacher: '"편견의 말을 바꿔야 하는 까닭은 무엇일까요?" 카드를 나눈 뒤 "나는 ○○을 ○○로 바꿀래요. 왜냐하면 ○○이기 때문이에요." 틀로 쓰고 짝에게 말하게 한다. "혼날까 봐서"를 좋은 이유에 넣는 학생에게 "혼나지 않는 곳에서는 그 말을 해도 될까요? 들은 친구 마음은 같지 않을까요?"라고 되묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'sortboard', options: { slots: ['좋은 이유', '이유가 아니에요'], cards: [{ id: 'each', text: '한 사람씩 달라서' }, { id: 'scold', text: '혼날까 봐서', why: '혼나지 않아도 들은 친구 마음은 다쳐요.' }, { id: 'fact', text: '"다"는 사실이 아니라서' }, { id: 'weird', text: '그 나라가 이상해서', why: '다른 나라는 이상한 게 아니라 다른 거예요.' }, { id: 'hurt', text: '친구 마음이 다쳐서' }] },
              prompt: '편견의 말을 바꾸는 이유 카드를 나누어요.', target: { sort: { '좋은 이유': ['each', 'fact', 'hurt'], '이유가 아니에요': ['scold', 'weird'] } }, difficulty: 0.15,
              levels: { easy: { toolOptions: { cards: [{ id: 'each', text: '한 사람씩 달라서' }, { id: 'hurt', text: '친구 마음이 다쳐서' }], instant: true }, target: { sort: { '좋은 이유': ['each', 'hurt'], '이유가 아니에요': [] } } } } },
            { type: 'short', prompt: '오늘 바꾼 말 하나와 바꾼 이유를 "왜냐하면"으로 써요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '내가 바꾼 존중의 말',
          items: [
            { type: 'table', prompt: '편견의 말과 내가 바꾼 말을 써요.', columns: ['편견의 말', '바꾼 말'], cells: [['"그 나라 애들은 다 춤을 잘 춰"', '']], answer: '"너는 뭘 잘해?"' },
            { type: 'short', prompt: '"나는 ○○로 바꿀래요. 왜냐하면 ○○" 틀로 한 줄을 써요.' },
          ],
          easy: { note: '"너는 어때?"를 떠올려요.', items: [{ type: 'choice', prompt: '편견의 말을 바꾸는 까닭은?', options: ['사람마다 달라서', '혼날까 봐서'], answer: '사람마다 달라서' }] },
        },
      }),
    );
  }

  // ======================================================================================================
  // 4학년 · 말이 달라도 함께 놀아요 (research-mandatory §2 초: 다름 존중, 세계 문화 체험)
  // ======================================================================================================
  {
    const C = T('play-together', 4);
    const GLOBE = {
      title: '세계 문화 여행 지도(칸 지도)', grid: [6, 4],
      regions: [
        { name: '북아메리카', cells: [[0, 0], [1, 0], [0, 1]] }, { name: '남아메리카', cells: [[1, 2], [1, 3]] },
        { name: '유럽', cells: [[2, 0], [3, 0]] }, { name: '아프리카', cells: [[2, 1], [3, 1], [2, 2], [3, 2]] },
        { name: '아시아', cells: [[4, 0], [5, 0], [4, 1], [5, 1]] }, { name: '오세아니아', cells: [[4, 3], [5, 3]] },
      ],
    };
    const PLAYGROUND = { cols: 5, rows: 4, start: { x: 0, y: 3, dir: 'E' }, goal: { x: 2, y: 1 }, stars: [[1, 3], [3, 2]], rocks: [[3, 1]], blocks: ['fwd', 'left', 'right'], maxBlocks: 12 };
    const BUGGY = ['fwd', 'fwd', 'right', 'fwd', 'fwd'];
    M.push(
      C({
        id: 'multi.e34.play-together.intro.world-tour', type: 'intro', title: '세계 문화 여행 지도',
        method: '세계 문화 여행 지도', tool: 'map', minutes: 6,
        levels: { easy: '지도에서 두 곳(아시아·아프리카)에 핀이 꽂히고 인사 카드 2장을 듣는다.', base: '네 곳에 핀이 차례로 꽂히며 인사·음식·놀이 카드를 하나씩 듣는다.', challenge: '들은 카드 가운데 우리 동네와 비슷한 점을 하나 찾아 짝에게 말한다(교사 진행).' },
        intro: {
          teacher: '"오늘은 지도를 따라 세계 문화 여행을 떠나요." 시연 단추로 아시아 → 아프리카 → 북아메리카 → 아시아 차례로 핀이 꽂힐 때마다 카드를 한 장씩 읽어 준다: 태국에서는 두 손을 모으고 "사와디" 하고 인사하기도 해요 / 케냐에서는 "잠보" 하고 인사하기도 해요 / 멕시코에서는 생일에 사탕이 든 피냐타를 터뜨리는 놀이를 하기도 해요 / 베트남에서는 쌀국수를 즐겨 먹기도 해요. ' + NOT_ALL + ' "신기해요, 웃겨요"라는 말이 나오면 "우리 세배도 다른 나라 친구에게는 처음 보는 인사일 거예요"라고 되묻는다.',
          student: '세계 지도에 핀이 꽂힐 때마다 인사·음식·놀이 카드를 들어요. 우리 동네와 비슷한 점을 하나 찾아보아요.',
          demo: { tool: 'map', options: GLOBE, sequence: [{ pin: [5, 0] }, { pin: [2, 2] }, { pin: [0, 1] }, { pin: [4, 1] }] },
          art: { draw: 'a paper cut world map made of colored grid blocks with a paper airplane flying between small cards showing two hands pressed together, a waving hand, a paper pinata and a noodle bowl', banner: '세계 문화 여행', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: FICTION,
      }),
      C({
        id: 'multi.e34.play-together.intro.diff-wrong', type: 'intro', title: '다름일까, 틀림일까',
        method: '다름과 틀림 가르기', tool: 'sortboard', minutes: 6,
        levels: { easy: '카드 3장(젓가락·포크·손으로 먹기)이 "다름" 바구니에 들어가는 것을 본다.', base: '카드 5장(먹는 방법·인사 방법)이 모두 "다름"에 들어가는 것을 보고 까닭을 말한다.', challenge: '진짜 "틀림"인 카드(친구 때리기)가 "틀림"에 들어가는 것을 보고 다름과 견준다.' },
        intro: {
          teacher: '"젓가락으로 먹는 것, 포크로 먹는 것, 손으로 먹는 것 가운데 틀린 것이 있을까요?" 시연 단추로 먹는 방법·인사 방법 카드가 모두 "다름" 바구니에 들어가는 것을 보인다. "손으로 먹는 건 더러워요"라는 말이 나오면 "손으로 먹는 곳에서는 먹기 전에 손을 깨끗이 씻어요. 우리도 김밥·과자는 손으로 먹죠?"라고 되묻는다. 마지막에 "친구 때리기"가 "틀림"에 들어가는 것을 보이고, 틀림은 누군가를 아프게 하는 행동이라는 것을 짚는다.',
          student: '먹는 방법과 인사 방법 카드가 "다름"인지 "틀림"인지 바구니를 보며 생각해요. 진짜 틀림은 무엇인지 말해 보아요.',
          demo: { tool: 'sortboard', options: { slots: ['다름', '틀림'], cards: ['젓가락으로 먹기', '포크로 먹기', '손으로 먹기', '고개 숙여 인사', '악수로 인사', '친구 때리기'] },
            sequence: [{ sort: { 다름: ['젓가락으로 먹기', '포크로 먹기', '손으로 먹기'], 틀림: [] } }, { sort: { 다름: ['젓가락으로 먹기', '포크로 먹기', '손으로 먹기', '고개 숙여 인사', '악수로 인사'], 틀림: [] } }, { sort: { 다름: ['젓가락으로 먹기', '포크로 먹기', '손으로 먹기', '고개 숙여 인사', '악수로 인사'], 틀림: ['친구 때리기'] } }] },
          art: { draw: 'two paper baskets on a shelf labeled different and wrong, paper cards with chopsticks, a fork, a clean hand, a bowing child and a handshake all going into the different basket', banner: '다름은 틀림이 아니에요', extra: [{ motif: 'heart', x: 300, y: 96 }] },
        },
      }),
      C({
        id: 'multi.e34.play-together.activity.talk-way', type: 'activity', title: '말 대신 몸짓으로 놀이 설명',
        method: '말 대신 몸짓·그림으로 놀이 설명', tool: 'timer', minutes: 13,
        levels: { easy: '몸짓 설명 타이머를 30초 두 번으로 맞추고, 설명 차례 카드 2장을 놓는다.', base: '몸짓 설명 타이머를 1분 두 번으로 맞추고, 설명 차례 카드 3장을 놓은 뒤 짝과 바꿔 해 본다.', challenge: '1분 설명에 그림 카드(칠판·활동지 그림)를 함께 쓰며 짝과 바꿔 해 본다(교사 진행).' },
        activity: {
          title: '말 대신 몸짓으로 놀이 설명', tool: 'timer',
          teacher: '"말이 잘 통하지 않는 친구에게 놀이를 알려 주려면 어떻게 할까요? 오늘은 말을 쓰지 않고 몸짓으로만 설명해 봐요." 교사가 먼저 "얼음땡"을 몸짓으로 보여 준다. 짝끼리 1분씩 설명하고 바꾼다. 설명이 잘 안 될 때 "말을 못 하니까 놀 수 없어요"라는 학생에게 "동작을 먼저 보여 주고 함께 따라 하면 어땠나요?"라고 묻는다. 끝나면 말이 서툰 친구의 마음을 짝과 짧게 나눈다.',
          task: '타이머를 맞추고, 말 대신 몸짓으로 짝에게 놀이를 설명해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '몸짓 설명을 1분씩 두 번 하도록 타이머를 맞춰요.', toolOptions: { title: '몸짓 설명', labels: ['몸짓', '바꾸기'], plan: { work: 20, rest: 10, rounds: 1 } }, target: { plan: { work: 60, rounds: 2 } }, difficulty: 0.15,
              levels: { easy: { prompt: '몸짓 설명을 30초씩 두 번 하도록 타이머를 맞춰요.', target: { plan: { work: 30, rounds: 2 } } } } },
            { prompt: '몸짓으로 놀이를 알려 주는 차례로 놓아요.', toolOptions: { title: '몸짓으로 알려 주기', cards: ['엄지로 "됐어?" 묻기', '동작 먼저 보여 주기', '함께 따라 하기'] }, target: { order: ['동작 먼저 보여 주기', '함께 따라 하기', '엄지로 "됐어?" 묻기'] }, difficulty: 0.15,
              levels: { easy: { prompt: '몸짓으로 놀이를 알려 주는 차례로 놓아요(2장).', toolOptions: { cards: ['함께 따라 하기', '동작 먼저 보여 주기'] }, target: { order: ['동작 먼저 보여 주기', '함께 따라 하기'] } } } },
            { prompt: '짝과 역할을 바꿔 가며 몸짓으로 놀이를 설명해 보아요.', free: true, toolOptions: { title: '짝 연습', doneLabel: '짝과 몸짓으로 놀이를 설명해 보았어요' },
              conclude: '말이 달라도 동작을 보여 주고, 함께 따라 하고, 표정으로 물으면 함께 놀 수 있어요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '몸짓으로 설명할 때 가장 도움이 된 방법을 한 줄로 써요.' }] },
        notes: '몸짓 설명은 놀이 규칙으로만 한다. 다른 나라 사람의 말투·몸짓을 흉내 내는 놀이로 바뀌지 않게 한다.',
      }),
      C({
        id: 'multi.e34.play-together.activity.join-dilemma', type: 'activity', title: '갈림길: 놀이에 끼고 싶은 친구',
        method: '놀이에 끼고 싶은 친구', tool: 'dilemma', minutes: 14,
        levels: { easy: '갈림 1번, 보기 2개 가운데 고르고 결과를 본다.', base: '갈림 2번 — "같이 하자" 손짓한 뒤 규칙을 어떻게 알려 줄지 고른다(보기 3개씩).', challenge: '갈림 3번 — 친구가 잘하는 놀이를 알려 주겠다고 할 때 함께 배우는 길까지 간다.' },
        activity: {
          title: '갈림길: 놀이에 끼고 싶은 친구', tool: 'dilemma',
          teacher: '"아라는 놀이를 바라보고 있어요. 아라는 어떤 마음일까요? 무엇을 하면 함께 놀 수 있을까요?" 결과 장면을 소리 내어 읽고 다음 장면에서 다시 고른다. "말이 안 통하니까 못 놀아요"라는 학생에게 "손짓, 동작, 쉬운 말이 있었죠? 오늘 몸짓 설명에서 해 봤어요"라고 말해 준다. 셋째 장면에서는 우리가 가르쳐 주기만 하는 것이 아니라 친구에게서 배울 수도 있다는 것을 짚는다.',
          task: '장면을 읽고 보기를 골라요. 결과를 보고 다음 장면에서 또 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL('아라가 피구 놀이를 바라보고 있어요.', {
              text: '한국어가 아직 서툰 전학생 아라가 쉬는 시간 피구 놀이를 바라보고 있어요.', motif: 'sun',
              choices: [
                { id: 'ignore', text: '우리끼리 그냥 논다', result: '아라는 쉬는 시간 내내 혼자 서 있었어요.', impact: [{ who: '아라', text: '외로워요', tone: -1 }], why: '바라보는 친구는 함께하고 싶을 수 있어요.' },
                { id: 'wave', text: '"같이 하자" 손짓한다', result: '아라가 웃으며 다가왔어요.', ending: '손짓 하나로 아라가 놀이에 들어왔어요.', next: {
                  text: '아라가 피구 규칙을 잘 모르는 것 같아요.', choices: [
                    { id: 'show', text: '동작으로 보여 주고 규칙을 쉽게', result: '아라가 금방 따라 하며 공을 피했어요.', impact: [{ who: '아라', text: '즐거워요', tone: 1 }], ending: '쉬운 규칙과 몸짓으로 함께 놀았어요.' },
                    { id: 'fast', text: '"알아서 해" 하고 바로 시작한다', result: '아라가 처음에 바로 맞고 나갔어요.', impact: [{ who: '아라', text: '당황했어요', tone: -1 }], why: '처음 하는 친구에게는 규칙을 보여 주고 시작해요.' },
                    { id: 'out', text: '"모르면 구경해" 한다', result: '아라가 다시 줄 밖으로 나갔어요.', impact: [{ who: '아라', text: '서운해요', tone: -1 }], why: '모르면 알려 주면 돼요. 빼지 않아요.' },
                  ] } },
                { id: 'tease', text: '"한국말 못 해서 안 돼" 한다', result: '아라가 고개를 숙이고 돌아섰어요.', impact: [{ who: '아라', text: '속상해요', tone: -1 }], why: '말이 서툴러도 함께 놀 수 있어요. 말로 빼지 않아요.' },
              ] }, [['wave', 'show']],
            { third: { text: '놀이가 끝나고 아라가 손짓으로 "내가 아는 놀이 알려 줄까?" 해요.', choices: [
              { id: 'learn', text: '"좋아, 알려 줘!"', result: '아라가 알려 준 놀이로 다 같이 웃었어요.', impact: [{ who: '모두', text: '새 놀이를 배웠어요', tone: 1 }], ending: '서로의 놀이를 가르치고 배우며 함께 놀았어요.' },
              { id: 'only', text: '"우리 놀이만 하자"', result: '아라가 아쉬워했어요.', impact: [{ who: '아라', text: '아쉬워요', tone: -1 }], why: '친구가 아는 놀이도 함께 해 보면 서로 배울 수 있어요.' },
              { id: 'weird', text: '"그런 놀이 이상해"', result: '아라가 말을 멈췄어요.', impact: [{ who: '아라', text: '속상해요', tone: -1 }], why: '처음 보는 놀이는 이상한 게 아니라 다른 거예요.' },
            ] }, pick: 'learn' }, 0.2),
            DIL('레오가 줄넘기 옆에 서 있어요.', {
              text: '긴 줄넘기를 하는데, 이번 주에 온 레오가 줄 옆에 서서 바라봐요.', motif: 'star',
              choices: [
                { id: 'name', text: '"레오야, 같이 넘을래?"', result: '레오가 고개를 끄덕였어요.', ending: '이름을 불러 주니 레오가 반가워했어요.', next: {
                  text: '레오가 줄에 들어갈 때를 잘 몰라요.', choices: [
                    { id: 'count', text: '"하나, 둘, 셋!" 손으로 신호한다', result: '레오가 신호에 맞춰 줄에 들어갔어요.', impact: [{ who: '레오', text: '신나요', tone: 1 }], ending: '보이는 신호로 알려 주니 함께 넘었어요.' },
                    { id: 'laugh', text: '걸릴 때마다 웃는다', result: '레오가 그만하겠다고 했어요.', impact: [{ who: '레오', text: '창피해요', tone: -1 }], why: '처음 하는 친구가 걸려도 웃지 않고 기다려요.' },
                    { id: 'skip', text: '레오 차례를 건너뛴다', result: '레오는 줄만 돌리게 됐어요.', impact: [{ who: '레오', text: '서운해요', tone: -1 }], why: '차례는 모두에게 똑같이 줘요.' },
                  ] } },
                { id: 'rope', text: '"너는 줄만 돌려" 한다', result: '레오는 한 번도 넘지 못했어요.', impact: [{ who: '레오', text: '서운해요', tone: -1 }], why: '한 친구에게만 줄 돌리기를 맡기지 않아요.' },
                { id: 'none', text: '모른 척 계속한다', result: '레오가 다른 곳으로 갔어요.', impact: [{ who: '레오', text: '외로워요', tone: -1 }], why: '먼저 이름을 불러 함께하자고 해요.' },
              ] }, [['name', 'count']],
            { third: { text: '레오가 "우리 나라에서는 노래하며 넘어" 해요.', choices: [
              { id: 'sing', text: '"그 노래 알려 줘!"', result: '레오 노래에 맞춰 다 같이 넘었어요.', impact: [{ who: '모두', text: '즐거워요', tone: 1 }], ending: '친구가 아는 방법도 배워 놀이가 더 재미있어졌어요.' },
              { id: 'ours', text: '"여기선 우리 식대로 해"', result: '레오가 조용해졌어요.', impact: [{ who: '레오', text: '서운해요', tone: -1 }], why: '한 가지 방법만 고집하지 말고 서로 배워요.' },
              { id: 'mock', text: '노래를 흉내 내며 웃는다', result: '레오 얼굴이 빨개졌어요.', impact: [{ who: '레오', text: '창피해요', tone: -1 }], why: '친구 나라 노래를 흉내 내며 웃으면 놀림이 돼요.' },
            ] }, pick: 'sing' }, 0.25),
            DIL('미나가 공기놀이를 처음 봐요.', {
              text: '공기놀이를 하는데 미나가 "처음 봐" 하며 신기해해요.', motif: 'heart',
              choices: [
                { id: 'teach', text: '"내가 알려 줄게, 해 볼래?"', result: '미나가 공기 하나를 집어 들었어요.', ending: '먼저 물어보고 알려 주니 미나도 함께했어요.', next: {
                  text: '미나가 공기를 자꾸 떨어뜨려요.', choices: [
                    { id: 'slow', text: '하나씩 천천히 보여 준다', result: '미나가 하나를 성공하고 웃었어요.', impact: [{ who: '미나', text: '뿌듯해요', tone: 1 }], ending: '천천히 보여 주니 미나가 해냈어요.' },
                    { id: 'take', text: '"내가 할게" 하고 가져간다', result: '미나는 구경만 했어요.', impact: [{ who: '미나', text: '아쉬워요', tone: -1 }], why: '친구가 스스로 해 볼 수 있게 기다려요.' },
                    { id: 'sigh', text: '"그것도 못 해?" 한다', result: '미나가 공기를 내려놓았어요.', impact: [{ who: '미나', text: '속상해요', tone: -1 }], why: '처음 하는 것은 누구나 서툴러요.' },
                  ] } },
                { id: 'show', text: '"우리 놀이 대단하지?" 자랑만 한다', result: '미나는 구경만 하다 갔어요.', impact: [{ who: '미나', text: '심심해요', tone: 0 }], why: '자랑보다 함께 해 보자고 해요.' },
                { id: 'skip', text: '"어려워서 너는 못 해" 한다', result: '미나가 뒤로 물러났어요.', impact: [{ who: '미나', text: '서운해요', tone: -1 }], why: '해 보기 전에 못 한다고 정하지 않아요.' },
              ] }, [['teach', 'slow']],
            { third: { text: '미나가 "우리 나라에도 돌 줍는 놀이가 있어" 해요.', choices: [
              { id: 'try', text: '"그 놀이도 해 보자!"', result: '두 놀이를 번갈아 하며 놀았어요.', impact: [{ who: '모두', text: '즐거워요', tone: 1 }], ending: '서로의 놀이를 번갈아 하며 함께 놀았어요.' },
              { id: 'ours', text: '"공기놀이가 더 재밌어"', result: '미나가 입을 다물었어요.', impact: [{ who: '미나', text: '서운해요', tone: -1 }], why: '어느 놀이가 더 낫다고 견주지 않아요.' },
              { id: 'copy', text: '"그거 공기 따라 한 거지?"', result: '미나가 당황했어요.', impact: [{ who: '미나', text: '억울해요', tone: -1 }], why: '비슷한 놀이가 여러 나라에 있어요. 누가 따라 한 것이 아니에요.' },
            ] }, pick: 'try' }, 0.3, { conclude: '이름을 부르고, "같이 하자" 손짓하고, 쉽게 보여 주고, 친구의 놀이도 배우면 말이 달라도 함께 놀 수 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '한국어가 서툰 친구가 놀이를 바라볼 때 할 일은?', options: ['"같이 하자" 손짓해요', '"구경해" 해요', '모른 척해요'], answer: '"같이 하자" 손짓해요' }] },
        notes: FICTION,
      }),
      C({
        id: 'multi.e34.play-together.activity.game-steps', type: 'activity', title: '함께 놀이 차례 정하기',
        method: '함께 놀이 차례 정하기', tool: 'timeline', minutes: 13,
        levels: { easy: '함께 놀이 차례 카드 3장을 놓는다(놓으면 바로 맞는지 알려 줌).', base: '차례 카드 4장(이름 묻기 → 놀이 고르기 → 규칙 보여 주기 → 함께 놀기)을 놓는다.', challenge: '첫 문항은 "친구 놀이 배우기"를 넣어 5장을 놓고, 둘째·셋째 문항은 틀린 카드 한 장을 빼고 놓는다.' },
        activity: {
          title: '함께 놀이 차례 정하기', tool: 'timeline',
          teacher: '"새로 온 친구와 놀이를 시작할 때 맨 먼저 할 일은 무엇일까요?" 카드를 놓은 뒤 처음부터 끝까지 짝과 역할을 나눠 말해 보게 한다. 셋째 문항에서 "부르기 어려운 이름은 쉬운 별명으로 불러 줘요"라는 학생에게 "내 이름을 친구가 마음대로 바꿔 부르면 어떨까요? 천천히 따라 말하고 맞는지 다시 물으면 돼요"라고 말해 준다. 둘째 문항의 "한국 음식 먹을 줄 알아?"는 친구를 손님처럼 시험하는 말이라는 것을 짚는다.',
          task: '새로 온 친구와 함께 노는 차례 카드를 처음부터 끝까지 차례대로 놓아요.', levels: CARD_LV,
          items: [
            ORD5('새로 온 친구와 함께 노는 차례로 놓아요.', { axis: ['먼저', '나중'] },
              [{ id: 'name', text: '이름 묻기' }, { id: 'choose', text: '놀이 고르기' }, { id: 'show', text: '규칙 보여 주기' }, { id: 'play', text: '함께 놀기' }],
              [4, { id: 'learn', text: '친구 놀이 배우기' }], 0.15),
            ORD('전학생과 점심시간에 어울리는 차례로 놓아요.', { axis: ['먼저', '나중'] },
              [{ id: 'hi', text: '"이름이 뭐야?"' }, { id: 'eat', text: '"같이 먹을래?"' }, { id: 'like', text: '좋아하는 것 묻기' }, { id: 'next', text: '다음 약속 정하기' }],
              [0, 1, 3], { id: 'test', text: '"한국 음식 먹을 줄 알아?"', why: '친구를 시험하듯 묻지 말고 좋아하는 것을 물어요.' }, 0.2),
            ORD('친구 이름을 바르게 불러 주는 차례로 놓아요.', { axis: ['먼저', '나중'] },
              [{ id: 'ask', text: '이름 묻기' }, { id: 'repeat', text: '천천히 따라 말하기' }, { id: 'check', text: '"맞아?" 다시 묻기' }, { id: 'call', text: '이름 불러 인사하기' }],
              [0, 1, 3], { id: 'nick', text: '쉬운 별명 지어 주기', why: '친구 이름을 바꾸지 말고 바르게 불러요.' }, 0.25,
              { conclude: '이름을 묻고 바르게 불러 주고, 놀이를 함께 고르고, 친구의 놀이도 배우면 함께 노는 차례가 완성돼요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '함께 노는 차례를 써요.', columns: ['차례', '할 일'], cells: [['1', '이름 묻기'], ['2', ''], ['3', '규칙 보여 주기'], ['4', '']], answer: '놀이 고르기, 함께 놀기' }] },
      }),
      C({
        id: 'multi.e34.play-together.activity.mix-game', type: 'activity', title: '두 나라 놀이 섞은 길 코딩',
        method: '두 나라 놀이 섞기', tool: 'block-coding', minutes: 14,
        levels: { easy: '작은 판(한 줄)에서 블록 3개로 우리 놀이 칸을 지나 함께 놀이 집에 닿게 한다.', base: '큰 판에서 블록 5개 이하로 우리 놀이 칸(별)을 지나 함께 놀이 집에 닿게 하고, 둘째 문항에서 한 블록이 틀린 프로그램을 고친다.', challenge: '큰 판에서 별 두 개(우리 놀이·친구 나라 놀이)를 모두 지나 바위("너는 빠져")를 피해 집에 닿게 짠다.' },
        activity: {
          title: '두 나라 놀이 섞은 길 코딩', tool: 'block-coding',
          teacher: '칠판에 판을 그리고 칸 뜻을 적어 둔다(교구 판에는 칸 이름이 없다): 첫 별 = 우리 놀이(징검다리), 둘째 별 = 친구 나라 놀이, 집 = 함께 놀이, 바위 = "너는 빠져". "거북이가 두 놀이 칸을 차례로 지나 함께 놀이 집에 가려면 블록을 어떻게 놓을까요?" 블록을 붙인 뒤 실행을 눌러 확인하게 한다. 바위에 부딪히면 "\'너는 빠져\'를 지나면 함께 놀이에 닿을 수 있을까요?"라고 묻는다. 셋째 문항에서 두 놀이를 섞은 규칙을 짝과 말하게 한다.',
          task: '거북이가 우리 놀이 칸과 친구 나라 놀이 칸(별)을 지나 함께 놀이 집에 닿도록 블록을 놓아요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '우리 놀이 칸(별)을 지나 함께 놀이 집에 닿도록 블록을 5개 이하로 놓아요.', toolOptions: PLAYGROUND, target: { reach: true, maxBlocks: 5 }, difficulty: 0.2,
              levels: {
                easy: { prompt: '우리 놀이 칸을 지나 집에 닿도록 블록을 3개 놓아요.', toolOptions: { cols: 4, rows: 2, start: { x: 0, y: 1, dir: 'E' }, goal: { x: 3, y: 1 }, stars: [[1, 1]], rocks: [], maxBlocks: 6 }, target: { reach: true, maxBlocks: 3 } },
                challenge: { prompt: '별 두 개를 모두 지나 바위를 피해 집에 닿도록 블록을 놓아요.', target: { reach: true, stars: true } },
              } },
            { prompt: '판 밖으로 나가는 프로그램을 한 블록만 고쳐 집에 닿게 해요.', toolOptions: PLAYGROUND, state: { program: BUGGY }, target: { reach: true, maxEdits: 1, from: BUGGY }, difficulty: 0.25 },
            { prompt: '두 별 칸의 놀이를 섞은 새 놀이 규칙을 짝과 말해요.', free: true, talk: true,
              conclude: '우리 놀이와 친구 나라 놀이를 차례로 섞으면 모두가 아는 놀이가 생겨요. "너는 빠져"는 피해 가요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '징검다리와 친구 나라 놀이를 섞은 새 놀이 이름과 규칙을 한 줄로 써요.' }] },
        notes: '거북이 판에는 칸 이름이 없다. 별·집·바위 칸의 뜻은 칠판과 활동지에 적어 준다.',
      }),
      C({
        id: 'multi.e34.play-together.wrap.play-check', type: 'wrap', title: '함께 놀기 점검 눈금',
        method: '함께 놀기 점검 눈금', tool: 'emotion', minutes: 6,
        levels: { easy: '첫 항목("이름을 불렀다")에만 눈금(1~3)을 고르고, 둘째 항목은 교사와 함께 한다.', base: '두 항목(이름을 불렀다·같이 하자고 했다)에 눈금을 고른다.', challenge: '두 항목에 눈금을 고르고 다음에 할 행동을 고른다(출구 3번).' },
        wrap: {
          teacher: '"오늘 놀이와 연습에서 친구 이름을 불렀나요? 같이 하자고 말하거나 손짓했나요?" 눈금은 나를 돌아보는 것이지 점수가 아니라고 말한다. 눈금을 1로 고른 학생에게 "솔직하게 골랐어요. 내일 쉬는 시간에 한 가지만 해 본다면 무엇을 할까요?"라고 묻는다. 출구 3번에서 "기다린다"를 고른 학생에게 "친구가 먼저 오기를 기다리는 것보다 먼저 이름을 부르면 어떨까요?"라고 되묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'emotion', options: { mode: 'scale', situation: '오늘 친구 이름을 불러 주었나요?', feeling: '뿌듯함', steps: 3, scaleLabels: { 1: '아직', 2: '조금', 3: '잘했어요' } }, prompt: '이름을 불렀는지 눈금을 골라요.', target: { level: 'any' }, difficulty: 0.1 },
            { type: 'tool', tool: 'emotion', options: { mode: 'scale', situation: '"같이 하자"고 말하거나 손짓했나요?', feeling: '기쁨', steps: 3, scaleLabels: { 1: '아직', 2: '조금', 3: '잘했어요' } }, prompt: '같이 하자고 했는지 눈금을 골라요.', target: { level: 'any' }, difficulty: 0.1 },
            { type: 'choice', prompt: '내일 쉬는 시간에 혼자 있는 친구를 보면?', options: ['이름을 부르고 "같이 하자"', '친구가 먼저 오기를 기다려요', '모른 척해요'], answer: 0, difficulty: 0.1, explain: '먼저 이름을 부르고 같이 하자고 해요.' },
          ],
        },
        worksheet: {
          title: '함께 놀기 점검',
          items: [
            { type: 'check', prompt: '오늘 한 것에 표시해요.', options: ['친구 이름을 불렀어요', '"같이 하자"고 했어요', '몸짓으로 알려 주었어요'] },
            { type: 'short', prompt: '내일 쉬는 시간에 해 볼 행동을 한 가지 써요.' },
          ],
          easy: { note: '"같이 하자"를 떠올려요.', items: [{ type: 'choice', prompt: '놀이를 바라보는 친구에게?', options: ['"같이 하자"', '"구경해"'], answer: '"같이 하자"' }] },
        },
      }),
      C({
        id: 'multi.e34.play-together.wrap.play-plan', type: 'wrap', title: '쉬는 시간 함께 놀이 약속',
        method: '쉬는 시간 함께 놀이 약속', tool: 'clock', minutes: 6,
        levels: { easy: '쉬는 시간 한 번(10시 40분)을 시계에 맞추고 놀이를 고른다.', base: '쉬는 시간과 점심시간 두 번(10시 40분·12시 50분)을 시계에 맞추고 놀이를 고른다.', challenge: '두 시각을 맞추고 누구를 초대할지(장면 속 친구) 활동지에 쓴다(교사 진행).' },
        wrap: {
          teacher: '"가상의 우리 반 쉬는 시간은 10시 40분, 점심 놀이 시간은 12시 50분이에요. 그때 무엇을 하고 놀까요?" 시계 바늘을 맞춘 뒤 함께 할 놀이를 고르게 한다. 쉬움 단계 학생은 첫 시각만 맞춘다. 출구 3번에서 "내가 좋아하는 놀이만"을 고른 학생에게 "새로 온 친구에게도 하고 싶은 놀이를 물어보면 어떨까요?"라고 되묻는다. 시각은 예로 든 가상의 시간표다.',
          exitTicket: [
            { type: 'tool', tool: 'clock', options: { minuteStep: 10 }, prompt: '쉬는 시간 10시 40분을 시계에 맞춰요.', target: { h: 10, m: 40 }, difficulty: 0.15 },
            { type: 'tool', tool: 'clock', options: { minuteStep: 10 }, prompt: '점심 놀이 시간 12시 50분을 시계에 맞춰요.', target: { h: 12, m: 50 }, difficulty: 0.15 },
            { type: 'choice', prompt: '새로 온 친구와 놀 놀이를 고를 때 좋은 방법은?', options: ['친구에게 하고 싶은 놀이 묻기', '내가 좋아하는 놀이만', '규칙 어려운 놀이 고르기'], answer: 0, difficulty: 0.1, explain: '함께할 친구에게 하고 싶은 놀이를 물어요.' },
          ],
        },
        worksheet: {
          title: '함께 놀이 약속',
          items: [
            { type: 'table', prompt: '함께 놀 시간과 놀이를 써요.', columns: ['시간', '놀이'], cells: [['10시 40분', ''], ['12시 50분', '']], answer: '얼음땡, 칸 뛰기 놀이' },
            { type: 'short', prompt: '함께 놀자고 할 때 할 말을 한 줄로 써요.' },
          ],
        },
      }),
    );
  }

  PaperLessons.registerModules(M);
})();
