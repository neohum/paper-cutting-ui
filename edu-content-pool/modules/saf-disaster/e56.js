/* 창체 안전교육 재난안전 — 초5-6 모듈 내용(edu-module.v1). 형식·작성 규칙: MODULES_BUILD.md, 계획: framework/safety-b.json 의 saf-disaster 초5-6.
 * 근거: 「학교안전교육 실시 기준 등에 관한 고시」(교육부고시 제2023-33호) 별표 2 초등학교 재난안전 1~5(화재 원인·대피·신고·전파 / 화상 대처 /
 *       자연 재난과 안전한 행동 / 폭발·붕괴·테러 위협 대처 / 유형별 대비 훈련), 별표 1 참고5(재난 대비 훈련 포함, 유형을 달리해 2종류 이상) — sources/changche/research-safety.md.
 * 소화기 주제(fire-extinguisher)의 문구·차례는 all_market visual-series 'fire-extinguisher/story.md' 와 맞췄다
 *   (먼저 알리기 "불이야!"·비상벨 → 안전한 곳에서 119(장소·상황·이름) → 어린이는 대피가 먼저 / 소화기: 안전핀 뽑기 → 노즐을 불 쪽으로 → 손잡이 움켜쥐기 → 빗자루로 쓸듯이, 압력계 초록 칸).
 * 초5-6 기준: 원인과 결과, 자기 점검표, 작은 실천 계획, 간단한 자료(그래프) 읽기, 모둠 토의, 갈림길(dilemma)·기준표 글쓰기(rubric-writing).
 *   법 조문 번호·형량은 쓰지 않는다. 그래프 수치는 모두 가상(화면에 '가상'). 구간 타이머 값은 '우리 반 약속' 연습값이다. 장면·인물은 지어낸 것이다.
 * 주제 8개(5학년 4 · 6학년 4), 계획 모듈 60개 전부. 분류판(sortboard) 8개는 글 카드 모드로 파일 끝에 모아 두었다.
 *
 * 사람 확인: 근거 파일에는 고시 항목 제목만 있다. 아래 수칙 문장은 일반 안전 수칙으로 썼으니 공식 안내처에서 확인한다.
 *  - fire-extinguisher.*: 불을 보면 먼저 "불이야" 외치고 비상벨(화재경보기 발신기)을 누른다 / 119에 장소·상황·이름을 말한다 / 어린이는 소화기보다 대피가 먼저,
 *    소화기는 어른이 불이 작을 때만 / 소화기 순서(안전핀 → 노즐 → 손잡이 → 쓸듯이)·압력계 초록 칸 / 불 아랫부분을 겨눈다 / 바람을 등지고 뿌린다 /
 *    불이 천장에 닿으면 끄지 말고 문을 닫고 대피 / 연기 속에서는 코·입을 가리고 몸을 낮춘다 / 대피 때 엘리베이터를 쓰지 않는다 — 소방청·국민재난안전포털.
 *  - quake-plan.*: 흔들릴 때 책상 아래 머리 보호·책상 다리 잡기 / 흔들림이 멈추면 계단으로 넓은 곳(운동장)에 대피, 엘리베이터 금지 /
 *    건물·담장·유리창에서 떨어지기 / 마트에서는 진열대에서 떨어져 바구니 등으로 머리 보호 / 엘리베이터 안이면 모든 층 단추 누르고 먼저 열리는 층에서 내림 /
 *    가구 고정·비상용품(손전등·물·구급약·휴대용 라디오) / 멈춘 뒤 바로 집에 들어가지 않고 안내를 기다림 — 행정안전부 국민재난안전포털.
 *  - burn-degree.*: 흐르는 물로 식히기(시간은 수치 없이 '충분히') / 붙은 옷은 떼지 않고 그대로 식히기 / 반지·시계 빼기 / 깨끗한 천으로 덮기 /
 *    된장·소주·치약 등 민간요법 하지 않기 / 넓게·얼굴·손·옷이 붙은 화상은 어른이 119·병원 — 질병관리청·소방청 응급처치 안내, 대한화상학회.
 *  - landslide-flood.*: 산사태 징후(돌·흙이 굴러 내림, 비탈에서 물이 솟음, 나무가 기울어짐, 땅 울림) / 비탈에서 먼 높은 곳으로 피함 /
 *    계곡·냇가 가지 않기, 물이 불면 구경하지 않음 / 비가 그쳐도 땅이 물을 머금어 위험이 남음 / 캠핑장에서는 비 예보·재난문자에 미리 떠남 — 국민재난안전포털·산림청.
 *  - school-route-map.*: 1차·2차 대피 경로와 집결 장소 / 엘리베이터 쓰지 않기 / 문 닫고 나오기 / 인원 확인 / 훈련 평가는 빠르기보다 안전 — 소방청·교육부 학교 안전 매뉴얼.
 *  - collapse-terror.*: 붕괴 징후(벽·기둥의 큰 금, 문이 잘 안 닫힘, 우두둑 소리) / 수상한 물건은 만지지 않고 멀리 떨어져 112·119에 알림 /
 *    갇히면 코·입 가리고 힘 아끼기, 두드려 위치 알리기, 휴대전화로 위치 알리기 / 라이터·성냥 쓰지 않기 — 국민재난안전포털·경찰청 테러 대응 안내.
 *  - disaster-text.*: 재난문자 끝까지 읽고 장소·시간 확인 / 호우 문자에 하천·지하차도 피하기 / 가족에게 알리기 — 행정안전부 재난문자 안내. 예시 문자는 지어낸 것.
 *  - heatwave.*: 온열질환(열사병·열탈진)·한랭질환(동상·저체온증) / 목마르지 않아도 물 자주 / 한낮 활동 피하기·그늘 / 얇은 옷 여러 겹 /
 *    언 곳은 문지르지 않고 미지근한 물로 천천히 녹이기 / 혼자 사는 이웃 안부 — 질병관리청 온열·한랭질환 안내.
 */
(function () {
  const M = [];
  const mk = (topic, grade) => (suffix, o) => Object.assign({
    id: `saf-disaster.e56.${topic}.${suffix}`, schema: 'edu-module.v1', type: suffix.split('.')[0],
    domain: 'saf-disaster', band: '초5-6', topic: `saf-disaster.e56.${topic}`, grades: [grade],
  }, o);
  const art = (draw, banner, motif = 'star', color = 'buttercup') => ({ draw, banner, extra: [{ motif, x: 300, y: 96, color }] });
  const cut = (p) => String(p).replace(/[.?]$/, '');
  // 활동 문항 모양을 정리 출구 질문(교구) 모양으로 옮긴다
  const EX = (tool, it) => Object.assign({ type: 'tool', tool, options: it.toolOptions, prompt: it.prompt, target: it.target, difficulty: it.difficulty || 0.2 }, it.levels ? { levels: it.levels } : {});

  // ---- 카드 판 문항 ----
  // 나누기: groups = { 칸: [카드…] }. 쉬움 = 칸마다 앞 easy장, 도전 = extra 카드 + 함정 카드(어느 칸에도 넣지 않음)
  const SORT = (prompt, { topic, slots, groups, easy = 2, extra = {}, traps = [], mode }, d, more) => {
    const inter = (g) => { const out = []; const n = Math.max(...slots.map((s) => (g[s] || []).length)); for (let i = 0; i < n; i++) for (const s of slots) if ((g[s] || [])[i]) out.push(g[s][i]); return out; };
    const take = (n) => Object.fromEntries(slots.map((s, i) => [s, groups[s].slice(0, Array.isArray(n) ? n[i] : n)]));
    const full = Object.fromEntries(slots.map((s) => [s, [...groups[s], ...(extra[s] || [])]]));
    const base = { slots, cards: inter(groups) }; if (topic) base.topic = topic; if (mode) base.mode = mode;
    const ez = take(easy); const fullCards = inter(full); fullCards.splice(1, 0, ...traps.slice(0, 1)); if (traps[1]) fullCards.push(traps[1]);
    const count = (g) => Object.values(g).reduce((a, b) => a + b.length, 0);
    const lv = { easy: { prompt: `${cut(prompt)}(카드 ${count(ez)}장).`, toolOptions: { cards: inter(ez) }, target: { sort: ez } } };
    if (Object.keys(extra).length || traps.length) lv.challenge = { prompt: `${cut(prompt)}(카드 ${fullCards.length}장${traps.length ? ', 넣지 않을 카드도 있어요' : ''}).`, toolOptions: { cards: fullCards }, target: { sort: full } };
    return Object.assign({ prompt, toolOptions: base, target: { sort: groups }, difficulty: d, levels: lv }, more);
  };
  // 차례: steps = [카드 글…](바른 차례). easy = 쉬움에 남길 칸 번호, trap = 도전에서 끼우는 틀린 장면
  const ORDER = (prompt, steps, { easy = [0, 1, 2], trap, motifs = [], mode, extraOpt } = {}, d, more) => {
    const cards = steps.map((t, i) => (motifs[i] ? { id: t, text: t, motif: motifs[i] } : t));
    const mix = (list) => [list[2], list[0], ...list.slice(3), list[1]].filter((x) => x != null);
    const ez = easy.map((i) => cards[i]); const ezIds = easy.map((i) => steps[i]);
    const lv = { easy: { prompt: `${cut(prompt)}(카드 ${ez.length}장).`, toolOptions: { slots: ez.length, cards: mix(ez) }, target: { order: ezIds } } };
    if (trap) lv.challenge = { prompt: `${cut(prompt)}(틀린 카드 하나는 빼요).`, toolOptions: { slots: steps.length, cards: [...mix(cards), trap] }, target: { order: steps } };
    return Object.assign({ prompt, toolOptions: Object.assign(mode ? { mode } : {}, extraOpt || {}, { slots: steps.length, cards: mix(cards) }), target: { order: steps }, difficulty: d, levels: lv }, more);
  };

  // ---- 갈림길(dilemma) ----
  const imp = (list) => (list || []).map(([who, text, tone]) => ({ who, text, tone }));
  const TREE = (steps, depth, ending) => {
    const build = (i) => {
      const s = steps[i];
      const good = { id: s.good[0], text: s.good[1], result: s.good[2], impact: imp(s.good[3]) };
      if (i === depth - 1) good.ending = ending; else good.next = build(i + 1);
      const bad = { id: s.bad[0], text: s.bad[1], result: s.bad[2], why: s.bad[3], impact: imp(s.bad[4]), ending: s.bad[5] || '다른 길을 골랐다면 어땠을지 되돌아가 견주어 봐요.' };
      return { text: s.text, ask: s.ask || '어떻게 할까요?', motif: s.motif || 'house', choices: i % 2 ? [good, bad] : [bad, good] };
    };
    return build(0);
  };
  const goodPath = (steps, n) => steps.slice(0, n).map((s) => s.good[0]);
  // 갈림길 활동 문항 셋: ① 안전한 길 + 근거(쉬움 1번·기본 2번·도전 3번 갈림) ② 다른 길 끝까지 가 보고 견주기 ③ 모둠 토의(말하기)
  const DIL = ({ steps, ending, reasons, good, title, talk, conclude }) => {
    const opt = (n) => ({ title, scene: TREE(steps, n, ending), reasons });
    const r0 = [good[0]];
    return [
      { prompt: `‘${title}’ 갈림길마다 안전한 선택을 고르고, 끝에서 근거를 골라요.`, toolOptions: opt(2), target: { path: [goodPath(steps, 2)], reasons: good.slice(0, 2), some: true }, difficulty: 0.3,
        levels: {
          easy: { prompt: `‘${title}’ 갈림길 한 번에서 안전한 선택을 고르고 근거를 골라요.`, toolOptions: opt(1), target: { path: [goodPath(steps, 1)], reasons: r0, some: true } },
          challenge: { prompt: `‘${title}’ 갈림길 세 번을 지나 안전한 끝까지 가고, 근거를 모두 골라요.`, toolOptions: opt(3), target: { path: [goodPath(steps, 3)], reasons: good } },
        } },
      { prompt: `‘${title}’에서 되돌아가 다른 선택도 끝까지 가 보고 결과를 견주어요.`, toolOptions: opt(2), target: { explore: 2 }, difficulty: 0.25,
        levels: { easy: { toolOptions: opt(1) }, challenge: { prompt: `‘${title}’에서 서로 다른 끝 장면 세 곳을 가 보고 결과를 견주어요.`, toolOptions: opt(3), target: { explore: 3 } } }, conclude },
      { prompt: talk, free: true, talk: true, toolOptions: opt(2) },
    ];
  };
  const DEMO_DIL = (spec, n = 2) => ({ tool: 'dilemma', options: { title: spec.title, scene: TREE(spec.steps, n, spec.ending), reasons: spec.reasons }, sequence: [{ path: goodPath(spec.steps, n), reasons: spec.good.slice(0, 1) }] });

  // ---- 기준표 글쓰기(rubric-writing) ----
  const RUB = (prompt, { topic, starter, crit, must, chars = [20, 160], title }, d, more) => ({
    prompt, toolOptions: { topic, minChars: chars[0], maxChars: chars[1], title }, target: { selfCheck: crit.slice(0, 3), chars }, difficulty: d,
    levels: {
      easy: { prompt: `${cut(prompt)}(문장 틀을 써도 돼요).`, toolOptions: { starter }, target: { selfCheck: crit.slice(0, 2), chars: [Math.max(10, chars[0] - 10), chars[1]] } },
      challenge: { prompt: `${cut(prompt)}. 다 쓰면 한 군데 고쳐 써요.`, target: { selfCheck: [...crit.slice(0, 3), '한 군데 이상 고쳐 썼다'], chars: [chars[0] + 10, chars[1]], mustInclude: must } },
    },
    ...more,
  });
  const RUBX = (prompt, spec) => EX('rubric-writing', RUB(prompt, spec, 0.2));
  // 점검표(kitchen checklist): good = 표시할 항목, traps = 표시하지 않을 항목. 쉬움 = 앞 easy개, 기본 = 앞 base개, 도전 = good 전부
  const CHK = (prompt, title, good, traps, { easy = 3, base = 4 } = {}, d, more) => {
    const it = (list) => list.map((t) => ({ id: `k${good.indexOf(t) >= 0 ? good.indexOf(t) : 10 + traps.indexOf(t)}`, text: t }));
    const mixIn = (g) => { const out = g.slice(); traps.forEach((t, i) => out.splice(Math.min(out.length, 1 + i * 2), 0, t)); return out; };
    const ids = (g) => g.map((t) => `k${good.indexOf(t)}`);
    const lv = { easy: { prompt: `${cut(prompt)}(${easy}칸).`, toolOptions: { items: it(mixIn(good.slice(0, easy))) }, target: { checklist: ids(good.slice(0, easy)) } } };
    if (good.length > base) lv.challenge = { prompt: `${cut(prompt)}(${good.length}칸).`, toolOptions: { items: it(mixIn(good)) }, target: { checklist: ids(good) } };
    return Object.assign({ prompt, toolOptions: { mode: 'checklist', title, items: it(mixIn(good.slice(0, base))) }, target: { checklist: ids(good.slice(0, base)) }, difficulty: d, levels: lv }, more);
  };
  // 스스로 점검(kitchen checklist selfCheck — 실제로 한 일, 틀린 답 없음): 쉬움 easy칸 · 기본 base칸 · 도전 전부
  const SELFK = (prompt, title, list, { easy = 2, base = 3 } = {}) => {
    const it = (n) => list.slice(0, n).map((t, i) => ({ id: `s${i}`, text: t }));
    return { prompt, toolOptions: { mode: 'checklist', title, items: it(base) }, target: { selfCheck: true }, difficulty: 0.1,
      levels: { easy: { prompt: `${cut(prompt)}(${easy}칸).`, toolOptions: { items: it(easy) } }, challenge: { prompt: `${cut(prompt)}(${list.length}칸).`, toolOptions: { items: it(list.length) } } } };
  };

  // ---- 훈련 판(timer) ----
  // 순서 카드 + 안전 점검: steps 바른 차례, safety 점검 칸. 쉬움 = 카드 앞 3장·점검 앞 2칸, 기본 = 카드 4장·점검 3칸, 도전 = 점검 전부
  const DRILL_ORDER = (prompt, title, steps, safety, d = 0.25, more) => {
    const mix = (l) => [l[2], l[0], ...l.slice(3), l[1]].filter((x) => x != null);
    const lv = { easy: { prompt: `${cut(prompt)}(카드 3장·점검 2칸).`, toolOptions: { cards: mix(steps.slice(0, 3)), safety: safety.slice(0, 2) }, target: { order: steps.slice(0, 3), safety: true } } };
    if (safety.length > 3) lv.challenge = { prompt: `${cut(prompt)}(점검 ${safety.length}칸).`, toolOptions: { safety }, target: { order: steps.slice(0, 4), safety: true } };
    return Object.assign({ prompt, toolOptions: { title, cards: mix(steps.slice(0, 4)), safety: safety.slice(0, 3) }, target: { order: steps.slice(0, 4), safety: true }, difficulty: d, levels: lv }, more);
  };
  // 훈련 뒤 스스로 점검(timer selfCheck): 쉬움 2칸 · 기본 3칸 · 도전 4칸 이상
  const DRILL_SELF = (prompt, title, list, more) => Object.assign({
    prompt, toolOptions: { title }, target: { selfCheck: list.slice(0, 3) }, difficulty: 0.1,
    levels: { easy: { prompt: `${cut(prompt)}(두 칸).`, target: { selfCheck: list.slice(0, 2) } }, challenge: { prompt: `${cut(prompt)}(${list.length}칸).`, target: { selfCheck: list } } },
  }, more);
  // 정리용 스스로 점검(timer selfCheck 출구)
  const SELF = (title, list, prompt = '오늘 해낸 것에 스스로 표시해요.') => EX('timer', DRILL_SELF(prompt, title, list));

  // ======== 5학년 · 신고·전파와 소화기 사용 순서 (별표 2 초등 재난안전 1·5) ========
  {
    const X = mk('fire-extinguisher', 5);
    const FIRE = {
      title: '복도 쓰레기통에 불',
      steps: [
        { text: '쉬는 시간, 복도 쓰레기통에서 작은 불꽃과 연기가 보여요. 둘레에 어른은 없어요.', motif: 'sun',
          good: ['shout', '"불이야!" 외치고 비상벨을 누른다', '건물 안 모두가 불이 난 것을 알았어요.', [['옆 반 친구들', '바로 대피를 시작해요', 1], ['선생님', '불이 난 곳을 알아요', 1]]],
          bad: ['put', '혼자 끄려고 소화기를 찾으러 간다', '찾는 사이 불이 커지고 아무도 몰라요.', '혼자 끄려는 동안 아무도 불이 난 줄 몰라요. 먼저 알려요.', [['옆 반 친구들', '대피가 늦어요', -1]]] },
        { text: '비상벨이 울려요. 선생님이 "119에 신고했니?" 하고 물어요.', motif: 'house',
          good: ['call', '안전한 곳에서 119에 장소·상황·이름을 말한다', '소방관이 어디로 와야 하는지 알았어요.', [['소방관', '빨리 올 수 있어요', 1]]],
          bad: ['skip', '비상벨을 눌렀으니 신고는 안 한다', '소방서는 아직 불이 난 줄 몰라요.', '비상벨은 건물 안에 알리는 것이고, 소방서에는 119로 따로 알려요.', [['소방관', '출동이 늦어요', -1]]] },
        { text: '불이 쓰레기통보다 커져 천장 가까이 올라가요.', motif: 'cloud',
          good: ['leave', '끄려 하지 않고 문을 닫고 대피한다', '연기가 덜 번지고 모두 운동장에 모였어요.', [['나와 친구들', '안전하게 나와요', 1]]],
          bad: ['fight', '가까이 가서 끝까지 끄려고 한다', '연기에 숨이 막히고 길이 막혀요.', '불이 크면 끄려 하지 말고 문을 닫고 대피해요.', [['나', '연기에 갇혀요', -1]]] },
      ],
      ending: '먼저 알리고, 신고하고, 대피한 덕분에 모두 안전했어요.',
      reasons: [{ id: 'tell', text: '먼저 알려야 모두가 대피할 수 있다' }, { id: 'kid', text: '어린이는 끄기보다 대피가 먼저다' }, { id: 'alone', text: '작은 불은 혼자 끄는 것이 빠르다', why: '혼자 끄는 동안 불은 금방 커지고 아무도 몰라요.' }, { id: 'call', text: '119만 하면 둘레에 안 알려도 된다', why: '건물 안 사람은 외치기와 비상벨로만 알아요.' }],
      good: ['tell', 'kid'],
    };
    M.push(
      X('intro.find-fork', {
        title: '불을 보면 끌까, 알릴까', method: '불 발견 갈림길: 끌까 알릴까', tool: 'dilemma', minutes: 6,
        levels: { easy: '교사가 첫 갈림길(끄기/알리기)만 함께 고르고 결과를 소리 내어 읽는다.', base: '두 갈림길(알리기 → 119 신고)의 결과를 따라가고 근거를 고른다.', challenge: '갈림길을 지난 뒤 어른이 곁에 있을 때와 없을 때 할 일이 어떻게 다른지 말한다.' },
        intro: {
          teacher: '"복도 쓰레기통에서 작은 불을 봤어요. 가장 먼저 할 일은 무엇일까요?" 손을 들게 한 뒤 시연 단추로 \'외치고 비상벨\'을 고르는 길을 보인다. "작은 불이니 제가 끄면 돼요"라는 말이 나오면 "끄러 가는 동안 옆 반 친구들은 불이 난 걸 알까요?"라고 되묻는다. 오늘은 알리기·신고·대피의 차례와 소화기 순서를 배운다고 밝힌다.',
          student: '불을 본 순간을 떠올려 보아요. 끄는 것과 알리는 것 가운데 무엇이 먼저일지 짝에게 말해 보아요.',
          demo: DEMO_DIL(FIRE, 2),
          art: art('a paper school hallway with a small paper flame rising from a trash bin and a paper child pressing a red alarm button', '끌까, 알릴까?', 'sun', 'peach'),
        },
        notes: '실제 불 장면 사진·영상은 쓰지 않는다. 학교 비상벨(화재경보기 발신기) 위치를 수업 전에 확인해 두고 말해 준다.',
      }),
      X('intro.case-story', {
        title: '작은 불이 커진 이야기', method: '작은 불이 커진 사례 카드 읽기', tool: 'story', minutes: 5,
        levels: { easy: '원인 장면 2개에 결과 카드를 짝 짓는 모습을 시연으로 함께 본다.', base: '원인 장면 3개에 결과 카드를 짝 짓는다.', challenge: '짝을 지은 뒤 불이 커지기 전에 막을 수 있었던 순간 하나를 고르고 까닭을 말한다.' },
        intro: {
          teacher: '"이 이야기에서 작은 불은 왜 커졌을까요?" 시연 단추로 \'아무도 외치지 않음\' → \'옆 반이 늦게 앎\', \'혼자 끄려고 함\' → \'불이 커짐\' 짝이 놓이는 모습을 보인다. "불이 커진 건 운이 나빠서예요"라는 말에는 "이야기 속 누가 무엇을 했다면 달라졌을까요?"라고 되물어 원인과 결과를 잇게 한다.',
          student: '이야기 장면을 읽고, 무엇이 불을 키웠는지 원인 한 가지를 짝에게 말해 보아요.',
          demo: { tool: 'story', options: { mode: 'match', title: '작은 불이 커진 이야기(지어낸 이야기)', slots: [{ id: 'c1', label: '아무도 외치지 않았어요' }, { id: 'c2', label: '혼자 끄려고 했어요' }, { id: 'c3', label: '문을 열어 두고 나왔어요' }], cards: [{ id: 'late', text: '옆 반이 늦게 알았어요' }, { id: 'big', text: '그 사이 불이 커졌어요' }, { id: 'smoke', text: '연기가 복도로 번졌어요' }] }, sequence: [{ match: { c1: 'late', c2: 'big', c3: 'smoke' } }] },
          art: art('three paper story cards in a row showing a small flame, a child walking away, and thick paper smoke filling a hallway', '왜 불이 커졌을까?', 'cloud', 'lavender'),
        },
        notes: '사례는 지어낸 이야기다. 실제 사고 피해 장면·부상은 다루지 않는다.',
      }),
      X('activity.ext-order', {
        title: '소화기 쓰는 순서', method: '소화기 사용 순서 놓기', tool: 'timeline', minutes: 14,
        levels: { easy: '카드 3장(노즐·손잡이·쓸듯이)을 놓고, 첫 단계 \'안전핀 뽑기\'는 교사가 빈 소화기로 먼저 보인다.', base: '카드 4장(안전핀 → 노즐 → 손잡이 → 쓸듯이)을 차례대로 놓는다.', challenge: '섞인 틀린 카드(불꽃 위쪽에 뿌리기)를 빼고 놓은 뒤, 바람을 등지고 서는 까닭을 말한다.' },
        activity: {
          title: '소화기 쓰는 순서 놓기', tool: 'timeline',
          teacher: '교육용 빈 소화기를 들고 "안전핀 뽑기, 노즐을 불 쪽으로, 손잡이 움켜쥐기, 빗자루로 쓸듯이" 하고 동작을 하나씩 보인다. "손잡이부터 누르면 돼요"라는 학생에게 "안전핀이 꽂혀 있으면 손잡이가 눌릴까요?"라고 묻는다. "불꽃 꼭대기를 맞혀요"에는 "불은 아래에서 타올라요. 아랫부분을 쓸듯이 뿌려요"라고 짚는다. 소화기는 불이 작을 때 어른이 쓰는 것이고 우리는 순서를 익혀 두는 것임을 덧붙인다.',
          task: '소화기 사용 카드를 순서대로 놓고, 쓰기 전과 쓸 때 할 일을 나누어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORDER('소화기를 쓰는 순서대로 카드를 놓아요.', ['안전핀 뽑기', '노즐을 불 쪽으로', '손잡이 움켜쥐기', '빗자루로 쓸듯이'], { easy: [1, 2, 3], trap: '불꽃 위쪽에 뿌리기' }, 0.2),
            ORDER('불을 보았을 때 어린이가 할 일을 차례대로 놓아요.', ['"불이야!" 외치기', '비상벨 누르기', '안전한 곳에서 119', '선생님 따라 대피'], { easy: [0, 1, 3], trap: '혼자 소화기 찾기' }, 0.25),
            { prompt: '소화기를 쓰기 전과 쓸 때 할 일을 나누어요.', toolOptions: { mode: 'sort', slots: ['쓰기 전', '쓸 때'], axis: ['먼저', '나중'], cards: ['압력계 초록 칸 보기', '불 아랫부분 겨누기', '불이 작은지 보기', '바람을 등지고 서기'] }, target: { sort: { '쓰기 전': ['압력계 초록 칸 보기', '불이 작은지 보기'], '쓸 때': ['불 아랫부분 겨누기', '바람을 등지고 서기'] } }, difficulty: 0.25,
              levels: { easy: { prompt: '소화기를 쓰기 전과 쓸 때 할 일을 나누어요(카드 2장).', toolOptions: { cards: ['압력계 초록 칸 보기', '불 아랫부분 겨누기'] }, target: { sort: { '쓰기 전': ['압력계 초록 칸 보기'], '쓸 때': ['불 아랫부분 겨누기'] } } } },
              conclude: '소화기는 안전핀 뽑기 → 노즐을 불 쪽으로 → 손잡이 움켜쥐기 → 빗자루로 쓸듯이. 어린이는 알리고 대피가 먼저예요.' },
            { prompt: '짝에게 바람을 등지고 뿌려야 하는 까닭을 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '안전핀 뽑기 → 노즐을 불 쪽으로 → 손잡이 움켜쥐기 → 빗자루로 ___', answer: '쓸듯이' }] },
        notes: '시연은 교육용 빈 소화기나 그림으로만 한다. 실제 약제를 뿌리는 체험은 소방서 안전체험관 등 전문 시설에서 한다.',
      }),
      X('activity.spread-web', {
        title: '불을 알리는 방법 모으기', method: '신고·전파 방법 모으기', tool: 'mindmap', minutes: 13,
        levels: { easy: '가지 2개(외치기·비상벨)에 주의할 점 카드를 한 장씩 붙인다.', base: '가지 4개(외치기·비상벨·119·옆 반 알리기)에 주의할 점 카드를 붙인다.', challenge: '가지 4개에 카드를 붙인 뒤, 가지마다 무엇을 먼저 할지 차례를 매긴다.' },
        activity: {
          title: '불 발견 알리기 그물', tool: 'mindmap',
          teacher: '"불이 난 것을 알리는 방법은 몇 가지일까요?" 가운데 \'불 발견\'에서 가지를 하나씩 읽고 카드를 놓게 한다. "119에 신고하면 학교 사람들도 다 알아요"라는 학생에게 "119는 소방서에 알리는 거예요. 같은 건물 친구들은 무엇으로 알까요?"라고 묻는다. 신고는 연기가 없는 안전한 곳에서 한다는 점을 짚는다.',
          task: '‘불 발견’ 가지마다 알맞은 주의할 점 카드를 붙여요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORT('알리는 방법 가지에 주의할 점 카드를 붙여요.', { topic: '불 발견', slots: ['외치기', '비상벨', '119 신고', '옆 반 알리기'], groups: { 외치기: ['"불이야!" 크게'], 비상벨: ['빨간 단추 꾹 누르기'], '119 신고': ['장소부터 또박또박'], '옆 반 알리기': ['문 두드리며 알리기'] }, easy: [1, 1, 0, 0], traps: ['조용히 혼자 끄기'] }, 0.2),
            SORT('119에 말할 내용을 가지에 나누어요.', { topic: '119 신고', slots: ['장소', '상황', '나'], groups: { 장소: ['학교 이름', '몇 층 어디'], 상황: ['무엇이 타는지', '남은 사람'], 나: ['내 이름'] }, easy: [1, 1, 1], extra: { 상황: ['불이 얼마나 큰지'] }, traps: ['좋아하는 과목'] }, 0.25),
            ORDER('불 발견 뒤 알리는 차례를 놓아요.', ['"불이야!" 외치기', '비상벨 누르기', '안전한 곳에서 119'], { easy: [0, 1, 2], mode: 'order' }, 0.25, { conclude: '외치고 비상벨로 건물 안에 알리고, 안전한 곳에서 119에 신고해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '119 신고를 했어요. 같은 건물 친구들은 무엇으로 알까요?', options: ['저절로 안다', '외치기와 비상벨', '다음 날 방송'], answer: '외치기와 비상벨' }] },
      }),
      X('activity.drill-board', {
        title: '화재 대피 훈련: 역할과 점검', method: '화재 대피 훈련 판: 역할 나누기와 점검', tool: 'timer', minutes: 15,
        levels: { easy: '대피 순서 카드 3장과 안전 점검 2칸, 스스로 점검 2칸을 표시한다.', base: '순서 카드 4장, 안전 점검 3칸, 스스로 점검 3칸을 표시한다.', challenge: '점검을 모두 표시하고, 구간 타이머로 우리 반 집결 목표 시간을 정한다.' },
        activity: {
          title: '화재 대피 훈련 판', tool: 'timer',
          teacher: '"모둠에서 앞장설 사람, 인원 셀 사람, 마지막에 문 닫을 사람을 정해 볼까요?" 역할을 정한 뒤 순서 카드를 맞추고 훈련을 한다. "빨리 뛰어 나가는 게 1등이에요"라는 학생에게 "뛰다가 계단에서 넘어지면 어떻게 될까요? 훈련은 빠르기보다 안전이 먼저예요"라고 말해 준다. 훈련 뒤 스스로 점검 칸을 정직하게 표시하게 한다.',
          task: '대피 순서 카드를 맞추고 안전 점검에 표시한 뒤, 훈련 뒤 스스로 점검해요.', levels: { easy: {}, base: {}, challenge: { showTotal: true } },
          items: [
            DRILL_ORDER('화재 대피 순서 카드를 맞추고 안전 점검에 표시해요.', '화재 대피 훈련', ['코·입 가리기', '몸 낮추기', '계단으로 내려가기', '운동장에 모이기'], ['앞장설 사람을 정했어요', '인원 셀 사람을 정했어요', '문 닫을 사람을 정했어요', '엘리베이터를 안 써요'], 0.25),
            DRILL_SELF('훈련을 마치고 스스로 점검해요.', '훈련 뒤 스스로 점검', ['뛰지 않고 걸었다', '말하지 않고 들었다', '맡은 역할을 했다', '모인 곳에서 인원 확인을 도왔다']),
            { prompt: '집결까지 걸을 시간 90초를 1번 맞춰요(우리 반 약속 연습값).', toolOptions: { title: '집결 목표 시간(우리 반 약속)', plan: { work: 30, rest: 0, rounds: 1 }, workStep: 10 }, target: { plan: { work: 90, rounds: 1 } }, difficulty: 0.2,
              conclude: '목표 시간은 우리 반 약속이에요. 빠르기보다 다치지 않고 모두 모이는 것이 먼저예요.' },
            { prompt: '모둠에서 훈련 때 가장 잘된 점과 고칠 점을 하나씩 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '우리 모둠 역할을 써요.', columns: ['역할', '맡은 사람(별명)'], cells: [['앞장서기', ''], ['인원 세기', ''], ['문 닫기', '']] }] },
        notes: '집결 목표 시간은 실제 기준이 아니라 우리 반이 정하는 연습값이다. 학교 화재 대피 훈련 계획(대피로·집결 장소)에 맞추어 카드를 바꿔 쓴다.',
      }),
      X('activity.cause-chart', {
        title: '화재 원인 그래프 읽기(가상)', method: '화재 원인 막대그래프 읽기(예시 자료)', tool: 'chart', minutes: 13,
        levels: { easy: '막대 3개를 읽고 값이 화면에 보인다.', base: '막대 5개를 견주어 가장 많은 원인과 예방 행동을 고른다.', challenge: '막대 5개를 읽고 두 원인의 차이를 견주는 문장을 고른 뒤 까닭을 말한다.' },
        activity: {
          title: '가상 화재 원인 그래프 읽기', tool: 'chart',
          teacher: '"이 그래프는 실제 통계가 아니라 수업을 위해 만든 예시 자료예요. 가장 긴 막대는 무엇일까요?" 막대 끝을 눈금에 맞춰 읽게 한다. "막대가 짧은 원인은 조심 안 해도 돼요"라는 학생에게 "짧아도 한 번 나면 큰불이 될 수 있어요. 막대마다 막는 행동이 있어요"라고 말해 준다.',
          task: '예시 그래프에서 가장 많은 원인을 찾고, 알맞은 예방 행동을 골라요.', levels: { easy: { showValues: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: (() => {
            const D = [['전기 기구', 9], ['불장난', 4], ['요리 중 자리 비움', 7], ['난방 기구', 5], ['촛불', 2]];
            const base = { type: 'bar', mode: 'read', title: '화재 원인(가상 예시 자료)', unit: '건', xLabel: '원인', yLabel: '건수' };
            const E = [D[0], D[1], D[2]];
            return [
              { prompt: '가장 많은 화재 원인은 무엇인가요?(가상 자료)', toolOptions: Object.assign({}, base, { data: D, choices: D.map((x) => x[0]), question: '가장 많은 원인은?' }), target: { pick: 0 }, difficulty: 0.15,
                levels: { easy: { toolOptions: { data: E, choices: E.map((x) => x[0]) } } } },
              { prompt: '가장 많은 원인을 막는 행동을 골라요(가상 자료).', toolOptions: Object.assign({}, base, { data: D, choices: ['문어발 콘센트 쓰지 않기', '촛불 끄고 자기', '난로 옆 빨래 치우기'], question: '막는 행동은?', why: ['', '촛불은 막대가 가장 짧아요.', '난방 기구는 가장 많은 원인이 아니에요.'] }), target: { pick: 0 }, difficulty: 0.2,
                levels: { easy: { toolOptions: { data: E } } } },
              { prompt: '두 원인을 바르게 견준 문장을 골라요(가상 자료).', toolOptions: Object.assign({}, base, { data: D, choices: ['요리 중 자리 비움이 불장난보다 많다', '촛불이 난방 기구보다 많다', '불장난이 전기 기구보다 많다'], question: '바른 문장은?', why: ['', '촛불 막대가 더 짧아요.', '전기 기구 막대가 더 길어요.'] }), target: { pick: 0 }, difficulty: 0.3,
                levels: { easy: { toolOptions: { data: E, choices: ['요리 중 자리 비움이 불장난보다 많다', '불장난이 전기 기구보다 많다'] } } },
                conclude: '그래프는 예시 자료예요. 원인마다 막는 행동이 있어요 — 콘센트·요리·난방 기구를 살펴요.' },
          ]; })(),
        },
        worksheet: { items: [{ type: 'short', prompt: '우리 집에서 화재를 막기 위해 살펴볼 곳 하나를 써요.' }] },
        notes: '그래프 수치는 실제 통계가 아닌 예시 자료다(화면에 \'가상\'). 실제 화재 원인 통계는 소방청 국가화재정보시스템에서 확인해 보여 줄 수 있다.',
      }),
      X('wrap.call-rubric', {
        title: '119 신고 말 쓰고 점검', method: '119 신고 말 쓰고 기준표 점검', tool: 'rubric-writing', minutes: 7,
        levels: { easy: '문장 틀("여기는 ~이에요. ~가 타고 있어요.")을 채우고 기준 2개로 점검한다.', base: '두세 문장을 쓰고 장소·상황·내 이름 기준 3개로 점검한다.', challenge: '기준 3개로 점검한 뒤, 주소를 모를 때 쓸 문장(둘레에 보이는 건물)을 넣어 고쳐 쓴다.' },
        wrap: {
          teacher: '"119에 전화가 연결되면 무엇부터 말할까요?" 기준표(장소·상황·내 이름)를 함께 읽고 쓰게 한다. "불났어요, 빨리 와 주세요!"만 쓴 학생에게 "소방관은 어디로 가야 할까요? 장소가 먼저예요"라고 되묻는다. 진짜 전화번호나 집 주소는 쓰지 않고 학교 이름과 층으로 쓰게 한다.',
          exitTicket: [
            RUBX('119에 말할 내용을 두세 문장으로 쓰고 기준표로 점검해요.', { topic: '복도 쓰레기통 불을 119에 알리는 말(두세 문장)', title: '119 신고 말', starter: '여기는 ~초등학교 ~층 ~이에요. ~가 타고 있어요.', crit: ['장소를 먼저 말했다', '무엇이 타는지 말했다', '내 이름을 말했다'], must: [['보이는', '옆에', '앞에']], chars: [20, 140] }),
            { type: 'choice', prompt: '119에 신고했어요. 같은 건물 친구들에게는 어떻게 하나요?', options: ['따로 알리지 않는다', '외치고 비상벨로 알린다', '문자로 천천히 알린다'], answer: 1, difficulty: 0.2, explain: '119는 소방서에 알리는 것이에요. 건물 안은 외치기와 비상벨로 알려요.' },
            { type: 'mood', prompt: '오늘 공부를 마친 내 마음은 어떤가요?' },
          ],
        },
        worksheet: {
          title: '먼저 알리고, 119, 대피',
          items: [
            { type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '119에는 ___ · 상황 · 내 이름을 말해요.', answer: '장소' },
            { type: 'check', prompt: '불을 보았을 때 어린이가 할 일에 표시해요.', options: ['"불이야!" 외치기', '비상벨 누르기', '안전한 곳에서 119', '선생님 따라 대피'] },
          ],
          easy: { note: '불을 보면 먼저 "불이야!" 외쳐요.', items: [{ type: 'draw', prompt: '비상벨을 누르는 내 모습을 그려요.' }] },
        },
      }),
    );
  }

  // ======== 5학년 · 장소별 지진 판단과 대피 (별표 2 초등 재난안전 3·5) ========
  {
    const X = mk('quake-plan', 5);
    const QUAKE = {
      title: '지진이 난 날',
      steps: [
        { text: '마트에서 장을 보는데 바닥이 흔들리고 진열대 물건이 떨어져요.', motif: 'house',
          good: ['shelf', '진열대에서 떨어져 바구니로 머리를 가린다', '떨어지는 물건을 피했어요.', [['나', '머리를 지켜요', 1]]],
          bad: ['run', '흔들리는 중에 출구로 뛴다', '사람들과 부딪히고 물건에 걸려 넘어질 뻔해요.', '흔들리는 동안 뛰면 넘어지고 다칠 수 있어요. 먼저 몸을 보호해요.', [['나', '넘어질 위험', -1]]] },
        { text: '흔들림이 멈췄어요. 건물 밖으로 나가려는데 엘리베이터가 바로 앞이에요.', motif: 'star',
          good: ['stairs', '엘리베이터 대신 계단으로 나간다', '계단으로 천천히 밖에 나왔어요.', [['나와 가족', '갇히지 않아요', 1]]],
          bad: ['lift', '빠르니까 엘리베이터를 탄다', '다시 흔들리자 엘리베이터가 멈춰 갇혔어요.', '지진 뒤에는 엘리베이터가 멈출 수 있어요. 계단을 써요.', [['나와 가족', '안에 갇혀요', -1]]] },
        { text: '밖으로 나왔어요. 어디에서 기다릴까요?', motif: 'tree',
          good: ['open', '건물·담장에서 먼 넓은 곳에 선다', '떨어지는 유리나 간판을 피했어요.', [['나', '안전하게 기다려요', 1]]],
          bad: ['wall', '건물 벽에 붙어 서 있는다', '위에서 유리 조각이 떨어져요.', '건물 옆은 유리·간판이 떨어질 수 있어요. 넓은 곳으로 가요.', [['나', '다칠 위험', -1]]] },
      ],
      ending: '몸을 보호하고, 멈춘 뒤 계단으로 넓은 곳에 대피해 모두 무사했어요.',
      reasons: [{ id: 'protect', text: '흔들릴 때는 먼저 머리를 보호한다' }, { id: 'open', text: '멈춘 뒤 계단으로 넓은 곳에 간다' }, { id: 'fast', text: '흔들리는 중에 빨리 나가야 안전하다', why: '흔들리는 동안 움직이면 넘어지고 다쳐요.' }, { id: 'home', text: '멈추면 바로 집에 들어가도 된다', why: '다시 흔들릴 수 있어 안내를 기다려요.' }],
      good: ['protect', 'open'],
    };
    const YARD = [
      { name: '본관 건물', cells: [[0, 0], [1, 0], [2, 0], [3, 0]] }, { name: '담장 옆', cells: [[0, 1], [0, 2]] },
      { name: '골대 옆', cells: [[3, 1], [3, 2]] }, { name: '운동장 가운데', cells: [[1, 1], [2, 1], [1, 2], [2, 2]] },
    ];
    M.push(
      X('intro.places-story', {
        title: '세 곳에서 흔들릴 때', method: '집·학교·마트 지진 장면 읽기', tool: 'story', minutes: 6,
        levels: { easy: '교사가 장면 2개(집·학교)를 읽어 주고 위험한 행동을 함께 고른다.', base: '장면 3개(집·학교·마트)를 읽고 가장 위험한 행동을 스스로 고른다.', challenge: '위험한 행동을 고른 뒤 그 행동을 어떻게 고치면 안전한지 말한다.' },
        intro: {
          teacher: '"집, 학교, 마트에서 땅이 흔들려요. 이 가운데 가장 위험한 행동은 무엇일까요?" 장면 카드를 읽은 뒤 시연 단추로 \'흔들리는 중에 엘리베이터 타기\'·\'창가로 달려가기\'가 바구니에 담기는 모습을 보인다. "흔들리면 무조건 밖으로 뛰어야 해요"라는 말에는 "흔들리는 동안 뛰면 무엇에 부딪힐까요? 먼저 몸을 보호해요"라고 되묻는다.',
          student: '집·학교·마트 가운데 한 곳을 골라, 흔들릴 때 내가 숨을 자리를 짝에게 말해 보아요.',
          demo: { tool: 'story', options: { mode: 'pick', basket: '위험한 행동', title: '세 곳의 흔들림(지어낸 장면)', cards: [{ id: 'desk', text: '교실: 책상 아래로' }, { id: 'lift', text: '집: 엘리베이터 타기', motif: 'house' }, { id: 'cart', text: '마트: 바구니로 머리' }, { id: 'window', text: '마트: 창가로 달려감' }] }, sequence: [{ pick: ['lift', 'window'] }] },
          art: art('three small paper scenes side by side: a home, a classroom and a supermarket, each with gently shaking paper lines', '어디서든 먼저 몸을 보호해요', 'house', 'sky'),
        },
      }),
      X('intro.open-map', {
        title: '넓은 곳 찾기', method: '학교 칸 지도에서 넓은 곳 찾기', tool: 'map', minutes: 5,
        levels: { easy: '칸 6개 지도에서 교사가 건물·담장을 짚어 준 뒤 넓은 곳을 고른다.', base: '칸 8개 지도에서 건물·담장·골대에서 떨어진 넓은 곳을 스스로 고른다.', challenge: '넓은 곳을 고른 뒤, 그곳이 막혔을 때 갈 두 번째 대피 장소를 말한다.' },
        intro: {
          teacher: '"흔들림이 멈추면 어디로 가야 할까요?" 학교 칸 지도를 보이고 시연 단추로 핀이 \'운동장 가운데\'로 가는 모습을 보인다. "건물 바로 앞 그늘이 시원하고 좋아요"라는 말에는 "건물에서 유리나 벽돌이 떨어지면 어떻게 될까요? 담장과 골대도 넘어질 수 있어요"라고 되묻는다.',
          student: '우리 학교 운동장을 떠올리고, 건물과 담장에서 가장 먼 곳이 어디인지 말해 보아요.',
          demo: { tool: 'map', options: { grid: [4, 3], regions: YARD, title: '우리 학교(칸 지도)' }, sequence: [{ region: '운동장 가운데' }] },
          art: art('a paper school map seen from above with a big empty playground in the middle and a paper pin standing in the center', '건물에서 먼 넓은 곳으로', 'tree', 'mint'),
        },
        notes: '실제 학교 배치도와 견주어 우리 학교 지진 대피 장소를 함께 확인한다.',
      }),
      X('activity.cycle', {
        title: '지진 전·중·후 순환판', method: '지진 전·중·후 행동 순환 놓기', tool: 'lifecycle', minutes: 14,
        levels: { easy: '단계 카드 3장(대비 → 보호 → 대피)을 순환판에 놓는다.', base: '단계 카드 4장(대비 → 보호 → 대피 → 점검)을 놓고 단계마다 학교 행동을 짝 짓는다.', challenge: '4단계를 놓고 학교 행동·집 행동을 단계마다 하나씩 짝 짓는다(섞인 틀린 카드는 뺀다).' },
        activity: {
          title: '지진 전·중·후 순환판 놓기', tool: 'lifecycle',
          teacher: '"지진은 흔들릴 때만 조심하면 될까요?" 순환판에 단계를 놓게 하고, 점검이 끝나면 다시 대비로 이어진다는 화살표를 짚는다. "대비는 어른만 하는 거예요"라는 학생에게 "내 책상 밑을 비워 두는 것도 대비예요. 내가 할 수 있는 대비는 무엇일까요?"라고 묻는다.',
          task: '지진 대비 → 보호 → 대피 → 점검 단계를 순환판에 놓고, 단계마다 할 일을 짝 지어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: (() => {
            const S = [{ id: '대비', text: '대비: 가구 고정' }, { id: '보호', text: '보호: 머리 감싸기' }, { id: '대피', text: '대피: 넓은 곳으로' }, { id: '점검', text: '점검: 다친 곳 살피기' }];
            const slotsN = [{ id: 'p1', label: '대비' }, { id: 'p2', label: '보호' }, { id: 'p3', label: '대피' }, { id: 'p4', label: '점검' }];
            return [
              { prompt: '지진 대비 단계를 순환판에 차례대로 놓아요.', toolOptions: { center: '지진 대비 순환', cards: [S[2], S[0], S[3], S[1]] }, target: { order: ['대비', '보호', '대피', '점검'], cyclic: true }, difficulty: 0.2,
                levels: { easy: { prompt: '지진 대비 단계를 순환판에 차례대로 놓아요(카드 3장).', toolOptions: { cards: [S[2], S[0], S[1]] }, target: { order: ['대비', '보호', '대피'], cyclic: true } } } },
              { prompt: '단계마다 학교에서 할 일 카드를 짝 지어요.', toolOptions: { mode: 'match', center: '학교에서', slots: slotsN, cards: ['책상 밑 비워 두기', '책상 다리 잡기', '계단으로 운동장', '인원 확인하기'] }, target: { match: { p1: '책상 밑 비워 두기', p2: '책상 다리 잡기', p3: '계단으로 운동장', p4: '인원 확인하기' } }, difficulty: 0.25,
                levels: { easy: { prompt: '단계마다 학교에서 할 일 카드를 짝 지어요(단계 3개).', toolOptions: { slots: slotsN.slice(0, 3), cards: ['책상 밑 비워 두기', '책상 다리 잡기', '계단으로 운동장'] }, target: { match: { p1: '책상 밑 비워 두기', p2: '책상 다리 잡기', p3: '계단으로 운동장' } } },
                  challenge: { prompt: '단계마다 학교에서 할 일을 짝 지어요(틀린 카드는 빼요).', toolOptions: { cards: ['책상 밑 비워 두기', '책상 다리 잡기', '엘리베이터 타기', '계단으로 운동장', '인원 확인하기'] } } } },
              { prompt: '단계마다 집에서 할 일 카드를 짝 지어요.', toolOptions: { mode: 'match', center: '집에서', slots: slotsN, cards: ['비상용품 챙겨 두기', '탁자 아래 머리 보호', '문 열고 계단으로', '가스·전기 살피기'] }, target: { match: { p1: '비상용품 챙겨 두기', p2: '탁자 아래 머리 보호', p3: '문 열고 계단으로', p4: '가스·전기 살피기' } }, difficulty: 0.3,
                levels: { easy: { prompt: '단계마다 집에서 할 일 카드를 짝 지어요(단계 3개).', toolOptions: { slots: slotsN.slice(0, 3), cards: ['비상용품 챙겨 두기', '탁자 아래 머리 보호', '문 열고 계단으로'] }, target: { match: { p1: '비상용품 챙겨 두기', p2: '탁자 아래 머리 보호', p3: '문 열고 계단으로' } } } },
                conclude: '지진은 대비 → 보호 → 대피 → 점검, 그리고 다시 대비로 이어져요.' },
            ];
          })(),
        },
        worksheet: { items: [{ type: 'table', prompt: '지진 단계마다 내가 할 일을 하나씩 써요.', columns: ['대비', '보호', '대피', '점검'], cells: [['', '', '', '']] }] },
        notes: '가스·전기 살피기는 어른과 함께 한다고 말해 준다.',
      }),
      X('activity.place-fork', {
        title: '장소마다 다른 지진 판단', method: '장소별 갈림길', tool: 'dilemma', minutes: 13,
        levels: { easy: '마트 장면 갈림길 1번에서 고르고 근거 한 장을 고른다.', base: '마트 → 엘리베이터 앞 갈림길 2번을 지나 근거를 고른다.', challenge: '마트 → 엘리베이터 앞 → 바깥 갈림길 3번을 지나 근거를 모두 고르고 다른 길과 견준다.' },
        activity: {
          title: '갈림길: 마트에서 지진', tool: 'dilemma',
          teacher: '"흔들리는 마트에서 출구로 뛰면 어떻게 될까요?" 고를 때마다 결과 칸을 소리 내어 읽게 한다. "엘리베이터가 빠르니까 타요"라는 학생에게 "다시 흔들리면 엘리베이터는 멈출 수 있어요. 그 안에 있으면 어떻게 될까요?"라고 묻는다. 밖에 나와서도 건물 옆은 위험하다는 점을 짚는다.',
          task: '장소가 바뀔 때마다 고르고, 결과를 읽은 뒤 내 선택의 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: DIL(Object.assign({}, QUAKE, { talk: '모둠에서 "멈추면 바로 집에 들어가도 될까?"를 이야기해요.', conclude: '흔들릴 때는 몸을 보호하고, 멈춘 뒤 계단으로 넓은 곳에 가요.' })),
        },
        worksheet: { items: [{ type: 'choice', prompt: '흔들림이 멈춘 뒤 건물에서 나갈 때 무엇을 쓰나요?', options: ['엘리베이터', '계단', '창문'], answer: '계단' }] },
      }),
      X('activity.drill-board', {
        title: '지진 대피 훈련: 순서와 점검', method: '지진 대피 훈련 판: 순서와 구간 점검', tool: 'timer', minutes: 15,
        levels: { easy: '순서 카드 3장(보호 → 멈춤 확인 → 계단)과 안전 점검 2칸을 표시한다.', base: '순서 카드 4장과 안전 점검 3칸, 훈련 뒤 스스로 점검 3칸을 표시한다.', challenge: '점검을 모두 표시하고, 구간 타이머로 보호 자세 유지 연습(우리 반 약속)을 맞춘다.' },
        activity: {
          title: '지진 대피 훈련 판', tool: 'timer',
          teacher: '"흔들림이 멈춘 걸 어떻게 알 수 있을까요? 선생님 신호를 기다려요." 순서 카드를 맞춘 뒤 훈련을 한다. "흔들리자마자 문 쪽으로 가요"라는 학생에게 "흔들리는 동안 걸으면 넘어지고 물건이 떨어져요. 먼저 책상 아래에서 머리를 보호해요"라고 말해 준다. 계단에서는 뛰지 않고 한 줄로 내려가게 한다.',
          task: '지진 대피 순서 카드를 맞추고 안전 점검에 표시한 뒤, 훈련을 마치고 스스로 점검해요.', levels: { easy: {}, base: {}, challenge: { showTotal: true } },
          items: [
            DRILL_ORDER('지진 대피 순서 카드를 맞추고 안전 점검에 표시해요.', '지진 대피 훈련', ['책상 아래 머리 보호', '흔들림 멈춤 확인', '계단으로 내려가기', '운동장 가운데 모이기'], ['책상 다리를 잡았어요', '가방으로 머리를 가려요', '엘리베이터를 안 써요', '건물·담장에서 떨어져요'], 0.25),
            DRILL_SELF('지진 대피 훈련 뒤 내가 한 일에 표시해요.', '지진 훈련 스스로 점검', ['신호까지 보호 자세를 지켰다', '계단에서 뛰지 않았다', '운동장 가운데에 모였다', '선생님 말씀을 끝까지 들었다']),
            { prompt: '보호 자세 20초, 쉬기 10초를 3번 하도록 맞춰요(우리 반 연습값).', toolOptions: { title: '보호 자세 연습(우리 반 약속)', plan: { work: 10, rest: 5, rounds: 1 } }, target: { plan: { work: 20, rest: 10, rounds: 3 } }, difficulty: 0.2,
              conclude: '연습 시간은 우리 반 약속이에요. 실제로는 흔들림이 멈출 때까지 보호 자세를 지켜요.' },
            { prompt: '모둠에서 훈련 때 보호 자세가 흐트러진 순간을 이야기해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'check', prompt: '지진 대피 훈련에서 지킨 것에 표시해요.', options: ['책상 아래 머리 보호', '멈춘 뒤 계단으로', '운동장 가운데 모이기'] }] },
        notes: '연습 시간(20초·10초·3번)은 실제 기준이 아니라 반에서 정한 연습값이다. 학교 지진 대피 훈련 계획에 맞추어 쓴다.',
      }),
      X('wrap.kit-check', {
        title: '우리 집 비상용품 점검', method: '우리 집 비상용품 점검표', tool: 'kitchen', minutes: 7,
        levels: { easy: '비상용품 항목 3개를 고른다.', base: '비상용품 항목 6개를 고르고 우리 집에 있는 것에 표시한다.', challenge: '6개를 고르고 우리 집에 있는 것을 표시한 뒤, 가족과 정할 만날 장소 하나를 쓴다.' },
        wrap: {
          teacher: '"지진 뒤 전기가 끊기면 무엇이 필요할까요?" 점검표를 읽고 비상용품만 고르게 한다. 게임기·과자 상자를 고른 학생에게 "그것이 없으면 위험해질까요? 꼭 필요한 것부터 챙겨요"라고 묻는다. 집에 가서 가족과 함께 우리 집에 있는 것을 확인해 보자고 한다.',
          exitTicket: [
            EX('kitchen', CHK('지진에 대비한 비상용품만 표시해요.', '비상용품 고르기', ['손전등', '마실 물', '구급약', '휴대용 라디오', '여분 건전지', '호루라기'], ['게임기', '과자 상자'], { easy: 3, base: 6 }, 0.2)),
            EX('kitchen', SELFK('우리 집에 이미 있는 비상용품에 표시해요.', '우리 집에 있는 것', ['손전등', '마실 물', '구급약', '휴대용 라디오'])),
            { type: 'short', prompt: '가족과 정할 만날 장소 하나를 써요(주소 말고 장소 이름).' },
          ],
        },
        worksheet: {
          title: '비상용품을 챙겨요',
          items: [
            { type: 'table', prompt: '비상용품을 우리 집에 있는 것과 더 챙길 것으로 나누어 써요.', columns: ['있는 것', '더 챙길 것'], cells: [['', ''], ['', '']] },
            { type: 'short', prompt: '지진이 멈춘 뒤 가족과 만날 곳을 써요.' },
          ],
          easy: { note: '손전등·물·구급약을 먼저 떠올려요.', items: [{ type: 'draw', prompt: '우리 집 비상용품 가방을 그려요.' }] },
        },
      }),
      X('wrap.plan-rubric', {
        title: '내 대피 계획 3줄', method: '장소 하나 골라 대피 계획 3줄 쓰기', tool: 'rubric-writing', minutes: 7,
        levels: { easy: '문장 틀(흔들릴 때 ~, 멈춘 뒤 ~, 모일 곳은 ~)을 채우고 기준 2개로 점검한다.', base: '장소 하나를 골라 세 줄을 쓰고 기준 3개(흔들릴 때·멈춘 뒤·모일 곳)로 점검한다.', challenge: '세 줄을 쓰고 기준 3개로 점검한 뒤 고쳐 쓰며, 두 번째 장소 계획을 말로 더한다.' },
        wrap: {
          teacher: '"집·학교·학원 가운데 한 곳을 골라 지진 대피 계획을 세 줄로 써 볼까요?" 기준표를 함께 읽고 쓰게 한다. "조심한다"처럼 막연하게 쓴 학생에게 "어디에 들어가서 무엇을 잡을까요? 행동이 보이게 써 봐요"라고 묻는다. 집 주소는 쓰지 않게 한다.',
          exitTicket: [
            RUBX('장소 하나를 골라 지진 대피 계획을 세 줄로 쓰고 점검해요.', { topic: '내가 고른 장소의 지진 대피 계획(흔들릴 때·멈춘 뒤·모일 곳)', title: '지진 대피 계획', starter: '흔들릴 때는 ~. 멈춘 뒤에는 ~. 모일 곳은 ~.', crit: ['흔들릴 때 할 일을 썼다', '멈춘 뒤 할 일을 썼다', '모일 곳을 썼다'], must: [['계단', '넓은 곳', '운동장']], chars: [30, 180] }),
            { type: 'choice', prompt: '흔들림이 멈췄어요. 바로 집에 들어가도 될까요?', options: ['네, 바로 들어간다', '아니요, 안내를 기다린다', '물건만 가지러 들어간다'], answer: 1, difficulty: 0.2, explain: '다시 흔들릴 수 있어요. 넓은 곳에서 안내를 기다려요.' },
            { type: 'mood', prompt: '오늘 공부를 마친 내 마음은 어떤가요?' },
          ],
        },
        worksheet: {
          title: '나의 지진 대피 계획',
          items: [
            { type: 'table', prompt: '내가 고른 장소의 계획을 써요.', columns: ['흔들릴 때', '멈춘 뒤', '모일 곳'], cells: [['', '', '']] },
            { type: 'choice', prompt: '지진 뒤 건물에서 나와 기다릴 곳은?', options: ['건물 벽 옆', '넓은 곳', '엘리베이터 앞'], answer: '넓은 곳' },
          ],
        },
      }),
    );
  }

  // ======== 5학년 · 화상 정도와 처치·병원 판단 (별표 2 초등 재난안전 2) ========
  {
    const X = mk('burn-degree', 5);
    const REMEDY = {
      title: '데인 손목에 된장?',
      steps: [
        { text: '라면 물이 손목에 튀어 데었어요. 할머니가 "된장을 바르면 열이 빠진다"고 하세요.', motif: 'house',
          good: ['water', '먼저 흐르는 찬물로 충분히 식힌다', '화끈거림이 줄어들었어요.', [['나', '덜 아파요', 1]]],
          bad: ['paste', '된장을 바로 바른다', '열이 빠지지 않고 데인 곳이 더러워졌어요.', '민간요법은 열을 빼 주지 않고 덧날 수 있어요. 흐르는 물로 식혀요.', [['나', '덧날 위험', -1]]] },
        { text: '식혔는데 데인 곳에 작은 물집이 생겼어요.', motif: 'cloud',
          good: ['cover', '터뜨리지 않고 깨끗한 천으로 덮는다', '물집이 그대로 보호돼요.', [['나', '덧나지 않아요', 1]]],
          bad: ['pop', '바늘로 물집을 터뜨린다', '데인 곳이 쓰라리고 빨개져요.', '물집을 터뜨리면 덧날 수 있어요. 덮고 어른께 알려요.', [['나', '더 아파요', -1]]] },
        { text: '할머니가 "그래도 된장이 좋은데" 하며 걱정하세요. 어떻게 말할까요?', motif: 'leaf',
          good: ['kind', '"걱정해 주셔서 고마워요. 물로 식혔어요"', '할머니도 고개를 끄덕이셨어요.', [['할머니', '마음이 놓여요', 1]]],
          bad: ['rude', '"그건 틀렸어요!" 하고 화낸다', '할머니가 서운해하세요.', '맞는 말도 고마운 마음을 담아 정중하게 말해요.', [['할머니', '서운해요', -1]]] },
      ],
      ending: '흐르는 물로 식히고 깨끗이 덮어서, 화상이 덧나지 않았어요.',
      reasons: [{ id: 'cool', text: '화상은 먼저 흐르는 물로 식힌다' }, { id: 'clean', text: '데인 곳은 깨끗이 덮어 보호한다' }, { id: 'paste', text: '된장·치약이 열을 빼 준다', why: '민간요법은 열을 빼지 못하고 덧날 수 있어요.' }, { id: 'pop', text: '물집은 터뜨려야 빨리 낫는다', why: '물집을 터뜨리면 덧날 수 있어요.' }],
      good: ['cool', 'clean'],
    };
    M.push(
      X('intro.where-parts', {
        title: '병원이 필요한 데인 곳', method: '병원 판단이 필요한 부위 고르기', tool: 'body', minutes: 6,
        levels: { easy: '이름이 보이는 종이 몸에서 교사와 함께 1곳(눈 둘레 — 얼굴)을 고른다.', base: '얼굴 쪽(눈)과 손 쪽(손목) 2곳을 스스로 고른다.', challenge: '2곳을 고른 뒤, 얼굴·손을 데면 왜 어른이 병원을 정해야 하는지 말한다.' },
        intro: {
          teacher: '"데었을 때 집에서 식히기만 하면 될 때도 있고, 병원에 가야 할 때도 있어요. 어디를 데면 더 조심해야 할까요?" 시연 단추로 눈(얼굴)과 손목(손 쪽)이 표시되는 모습을 보인다. "안 아프면 병원 안 가도 돼요"라는 말에는 "아프지 않아도 깊게 데었을 수 있어요. 얼굴·손이나 넓게 데면 어른이 병원을 정해요"라고 되묻는다. 종이 몸에 없는 얼굴·손은 자기 얼굴과 손바닥을 짚어 보게 한다.',
          student: '내 얼굴과 손을 짚어 보며, 이곳을 데면 왜 더 조심해야 할지 짝에게 말해 보아요.',
          demo: { tool: 'body', options: { mode: 'parts', parts: ['눈', '코', '목', '손목', '배', '무릎'], names: true }, sequence: [{ parts: ['눈', '손목'] }] },
          art: art('a paper body outline with soft glowing circles around the face and the hands, and a paper first aid box beside it', '어디를 데면 병원에 갈까?', 'star', 'peach'),
        },
        notes: '종이 몸 교구에는 얼굴·손·손가락 칸이 없다. 눈(얼굴 쪽)·손목(손 쪽)으로 대신 고르고, 학생이 자기 얼굴과 손을 짚게 한다.',
      }),
      X('intro.remedy-story', {
        title: '데인 곳에 무엇을 바를까', method: '민간요법 권유 이야기 읽기', tool: 'story', minutes: 5,
        levels: { easy: '교사가 장면을 읽어 주고 반응 카드 2장 가운데 맞는 것을 함께 고른다.', base: '반응 카드 4장 가운데 맞는 반응 2장을 스스로 고른다.', challenge: '맞는 반응을 고른 뒤 민간요법이 왜 위험한지 까닭을 말한다.' },
        intro: {
          teacher: '"데인 곳에 무엇을 바르자는 말을 들어 본 적 있나요?" 장면을 읽고 시연 단추로 \'흐르는 물로 식히기\'와 \'어른께 알리기\'가 바구니에 담기는 모습을 보인다. "옛날부터 된장을 발랐으니 괜찮아요"라는 말에는 "바르면 열이 빠질까요, 데인 곳이 더러워질까요?"라고 되묻는다. 걱정해 주는 어른의 마음은 고맙게 받자고 덧붙인다.',
          student: '데인 곳에 무엇을 바르자는 말을 들으면 어떻게 대답할지 짝에게 말해 보아요.',
          demo: { tool: 'story', options: { mode: 'pick', basket: '맞는 반응', title: '데인 곳에 된장?(지어낸 장면)', cards: ['흐르는 물로 식히기', '된장 바르기', '어른께 알리기', '치약 바르기'] }, sequence: [{ pick: ['흐르는 물로 식히기', '어른께 알리기'] }] },
          art: art('a paper grandmother holding a small paper jar while a paper child holds a wrist under a running paper tap', '바를까, 식힐까?', 'wave', 'sky'),
        },
      }),
      X('activity.care-order', {
        title: '화상 처치 차례', method: '처치 차례 놓기', tool: 'timeline', minutes: 10,
        levels: { easy: '차례 카드 4장(떨어지기 → 식히기 → 덮기 → 어른이 119)을 놓는다.', base: '차례 카드 5장(장신구 빼기까지)을 놓는다.', challenge: '카드 5장에 섞인 틀린 카드(된장 바르기)를 빼고 놓은 뒤, 단계를 건너뛰면 생길 일을 말한다.' },
        activity: {
          title: '화상 처치 차례 놓기', tool: 'timeline',
          teacher: '"데었어요. 가장 먼저 할 일은 무엇일까요?" 카드를 놓을 때마다 그 단계가 왜 필요한지 말하게 한다. "식히기 전에 반지부터 빼요"라는 학생에게 "뜨거운 것 옆에 있으면 더 데겠죠? 먼저 떨어지고 식히면서 붓기 전에 빼요"라고 말해 준다. 옷이 몸에 붙었으면 떼지 말고 그대로 식히는 까닭도 묻는다.',
          task: '화상을 입었을 때 처치 카드를 차례대로 놓고, 할 일과 하지 말 일을 나누어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORDER('화상을 입었을 때 처치 차례대로 카드를 놓아요.', ['뜨거운 것에서 떨어지기', '흐르는 물로 식히기', '반지·시계 빼기', '깨끗한 천으로 덮기', '크면 어른이 119'], { easy: [0, 1, 3, 4], trap: '된장 바르기' }, 0.2),
            { prompt: '옷 위로 뜨거운 물을 쏟았어요. 할 일과 하지 말 일을 나누어요.', toolOptions: { mode: 'sort', slots: ['할 일', '하지 말 일'], axis: ['할 일', '하지 말 일'], cards: ['옷 위로 물 흘려 식히기', '붙은 옷 억지로 떼기', '어른 부르기', '물집 터뜨리기'] }, target: { sort: { '할 일': ['옷 위로 물 흘려 식히기', '어른 부르기'], '하지 말 일': ['붙은 옷 억지로 떼기', '물집 터뜨리기'] } }, difficulty: 0.25,
              levels: { easy: { prompt: '옷 위로 뜨거운 물을 쏟았어요. 할 일과 하지 말 일을 나누어요(카드 2장).', toolOptions: { cards: ['옷 위로 물 흘려 식히기', '붙은 옷 억지로 떼기'] }, target: { sort: { '할 일': ['옷 위로 물 흘려 식히기'], '하지 말 일': ['붙은 옷 억지로 떼기'] } } } },
              conclude: '떨어지고 → 흐르는 물로 식히고 → 장신구 빼고 → 깨끗이 덮고, 크면 어른이 119에 알려요.' },
            { prompt: '짝에게 식히기를 건너뛰면 어떻게 될지 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '데었을 때는 먼저 ___ 물로 식혀요.', answer: '흐르는' }] },
      }),
      X('activity.remedy-fork', {
        title: '민간요법을 권할 때', method: '민간요법 권유 갈림길', tool: 'dilemma', minutes: 8,
        levels: { easy: '갈림길 1번(된장 바르기/물로 식히기)에서 고르고 근거 한 장을 고른다.', base: '갈림길 2번(물집이 생겼을 때)을 지나 근거를 고른다.', challenge: '갈림길 3번(어른께 정중하게 말하는 문장)까지 지나 근거를 모두 고른다.' },
        activity: {
          title: '갈림길: 된장을 바르자고 해요', tool: 'dilemma',
          teacher: '"할머니는 왜 된장을 바르자고 하셨을까요? 걱정하는 마음이죠. 그래도 무엇을 먼저 할까요?" 결과 칸을 소리 내어 읽게 한다. "어른 말씀이니 따라야 해요"라는 학생에게 "고마운 마음은 받고, 처치는 흐르는 물로 해요. 어떻게 말하면 서운하지 않을까요?"라고 묻는다.',
          task: '갈림길마다 고르고, 결과를 읽은 뒤 내 선택의 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: DIL(Object.assign({}, REMEDY, { talk: '모둠에서 민간요법을 권하는 어른께 할 정중한 말을 정해요.', conclude: '데인 곳에는 아무것도 바르지 않고 흐르는 물로 식힌 뒤 깨끗이 덮어요.' })),
        },
        worksheet: { items: [{ type: 'choice', prompt: '데인 곳에 된장을 바르자고 하면 어떻게 할까요?', options: ['바로 바른다', '고맙다고 하고 물로 식힌다', '치약을 바른다'], answer: '고맙다고 하고 물로 식힌다' }] },
      }),
      X('wrap.reason-rubric', {
        title: '병원에 가야 할 때 쓰기', method: '판단 근거 짧게 쓰기', tool: 'rubric-writing', minutes: 7,
        levels: { easy: '문장 틀("~를 데었거나 ~하면 어른이 병원을 정해요.")을 채우고 기준 2개로 점검한다.', base: '두 문장을 쓰고 부위·넓이·처치 기준 3개로 점검한다.', challenge: '기준 3개로 점검하고 고쳐 쓴 뒤, 짝의 글에 빠진 기준 하나를 말로 덧붙여 준다.' },
        wrap: {
          teacher: '"화상일 때 병원에 가야 하는지는 무엇을 보고 판단할까요?" 기준표(부위·넓이·처치)를 읽고 두 문장으로 쓰게 한다. "아프면 병원 가요"만 쓴 학생에게 "어디를, 얼마나 넓게 데었는지도 봐야 해요. 그리고 병원에 가기 전에 무엇을 하죠?"라고 묻는다.',
          exitTicket: [
            RUBX('‘병원에 가야 할 때’를 두 문장으로 쓰고 기준표로 점검해요.', { topic: '화상일 때 병원·119가 필요한 경우(두 문장)', title: '병원 판단 쓰기', starter: '~를 데었거나 넓게 데면 어른이 병원을 정해요. 그 전에 ~', crit: ['데인 부위를 썼다', '데인 넓이를 썼다', '먼저 할 처치를 썼다'], must: [['얼굴', '손', '넓게']], chars: [20, 140] }),
            { type: 'choice', prompt: '데인 곳이 아프지 않아요. 바른 생각은 무엇인가요?', options: ['안 아프니 괜찮다', '넓거나 얼굴·손이면 어른께 알린다', '된장을 바르고 기다린다'], answer: 1, difficulty: 0.2, explain: '아프지 않아도 깊게 데었을 수 있어요. 어른께 알려요.' },
            { type: 'mood', prompt: '오늘 공부를 마친 내 마음은 어떤가요?' },
          ],
        },
        worksheet: {
          title: '화상, 식히고 알려요',
          items: [
            { type: 'short', prompt: '화상일 때 병원에 가야 하는 경우 하나를 써요.' },
            { type: 'check', prompt: '내 글을 점검해요.', options: ['부위를 썼나요', '넓이를 썼나요', '처치를 썼나요'] },
          ],
          easy: { note: '얼굴·손이나 넓게 데면 어른께 알려요.', items: [{ type: 'draw', prompt: '흐르는 물로 식히는 모습을 그려요.' }] },
        },
      }),
      X('wrap.care-web', {
        title: '화상 대처 정리 그물', method: '화상 대처 정리', tool: 'mindmap', minutes: 7,
        levels: { easy: '카드 2장을 처치·하지 말 일 가지에 붙인다.', base: '카드 6장을 처치·하지 말 일·병원 판단 세 가지에 붙인다.', challenge: '카드 6장과 섞인 틀린 카드를 가려 붙인 뒤, 가지마다 까닭을 한 낱말로 말한다.' },
        wrap: {
          teacher: '"오늘 배운 화상 대처를 세 가지로 정리해 볼까요?" 가운데 \'화상\'에서 가지마다 카드를 붙이게 한다. \'된장 바르기\'를 처치 가지에 놓은 학생에게 "그것은 데인 곳을 더 상하게 할 수 있어요. 어느 가지가 맞을까요?"라고 묻는다.',
          exitTicket: [
            EX('mindmap', SORT('‘화상’ 가지마다 알맞은 카드를 붙여요.', { topic: '화상', slots: ['처치', '하지 말 일', '병원 판단'], groups: { 처치: ['흐르는 물로 식히기', '깨끗한 천으로 덮기'], '하지 말 일': ['된장 바르기', '물집 터뜨리기'], '병원 판단': ['얼굴·손을 데었을 때', '넓게 데었을 때'] }, easy: [1, 1, 0], traps: ['아프지 않으면 끝'] }, 0.2)),
            { type: 'choice', prompt: '데인 곳에 옷이 붙었어요. 어떻게 하나요?', options: ['억지로 뗀다', '떼지 않고 그대로 식힌다', '된장을 바른다'], answer: 1, difficulty: 0.2, explain: '붙은 옷은 떼지 말고 그 위로 흐르는 물로 식혀요.' },
            { type: 'short', prompt: '가족에게 알려 줄 화상 대처 하나를 써요.' },
          ],
        },
        worksheet: {
          title: '화상 대처 그물',
          items: [
            { type: 'table', prompt: '가지마다 하나씩 써요.', columns: ['처치', '하지 말 일', '병원 판단'], cells: [['', '', '']] },
            { type: 'choice', prompt: '화상을 입으면 가장 먼저 하는 처치는?', options: ['흐르는 물로 식히기', '된장 바르기', '물집 터뜨리기'], answer: '흐르는 물로 식히기' },
          ],
        },
      }),
    );
  }

  // ======== 5학년 · 호우·산사태 위험 원인과 결과 (별표 2 초등 재난안전 3) ========
  {
    const X = mk('landslide-flood', 5);
    const RAIN = [['첫째 날', 30], ['둘째 날', 80], ['셋째 날', 120]];
    const CAMP = {
      title: '계곡 캠핑장에 비',
      steps: [
        { text: '가족과 계곡 캠핑장에 왔어요. 비가 계속 오고 호우 재난문자가 왔어요.', motif: 'wave',
          good: ['leave', '보호자께 문자를 알리고 일찍 떠나자고 한다', '물이 불기 전에 짐을 챙겨 나왔어요.', [['가족', '안전하게 떠나요', 1]]],
          bad: ['stay', '텐트 안이 안전하니 그대로 있는다', '밤사이 계곡 물이 텐트 가까이 불어났어요.', '계곡은 물이 금방 불어요. 문자를 받으면 미리 떠나요.', [['가족', '물에 갇힐 위험', -1]]] },
        { text: '차로 나가는 길에 계곡 물이 흙탕물로 크게 불어 있어요.', motif: 'cloud',
          good: ['go', '구경하지 않고 높은 길로 간다', '물가에서 멀어졌어요.', [['가족', '물을 피해요', 1]]],
          bad: ['look', '내려서 불어난 물을 구경한다', '물가 흙이 무너져 발이 미끄러져요.', '불어난 물은 구경하지 않고 멀리 떨어져요.', [['나', '휩쓸릴 위험', -1]]] },
        { text: '길옆 비탈에서 작은 돌과 흙이 굴러 내려와요.', motif: 'tree',
          good: ['away', '비탈에서 멀어지고 어른이 119에 알린다', '산사태 징후를 빨리 알렸어요.', [['다른 차들', '길을 피해요', 1]]],
          bad: ['photo', '사진을 찍으러 비탈에 다가간다', '흙이 더 쏟아져 내려요.', '돌이 굴러 내리면 산사태 징후예요. 멀어지고 알려요.', [['나', '다칠 위험', -1]]] },
      ],
      ending: '미리 떠나고 물과 비탈에서 멀어져서 가족 모두 안전했어요.',
      reasons: [{ id: 'early', text: '호우 때는 계곡에서 미리 떠난다' }, { id: 'sign', text: '징후를 보면 멀어지고 알린다' }, { id: 'tent', text: '텐트 안은 물에도 안전하다', why: '계곡 물은 금방 불어 텐트까지 닿을 수 있어요.' }, { id: 'stop', text: '비가 그치면 위험도 끝난다', why: '땅이 물을 머금어 비가 그친 뒤에도 무너질 수 있어요.' }],
      good: ['early', 'sign'],
    };
    const HEIGHTS = [[3, 3, 2, 1, 1, 2], [3, 2, 1, 1, 1, 2], [2, 1, 0, 0, 1, 2], [1, 0, 0, 0, 0, 1]];
    const VP = (extra = []) => [
      { name: '비탈 아래 집', icon: 'house', at: [1, 2] }, { name: '냇가 캠핑장', icon: 'park', at: [2, 3] },
      { name: '마을회관(대피소)', icon: 'office', at: [5, 1] }, ...extra,
    ];
    const VMAP = (prompt, place, d, more) => Object.assign({
      prompt, toolOptions: { mode: 'terrain', grid: [6, 4], heights: HEIGHTS, heightNames: ['냇가', '낮은 땅', '언덕', '산'], title: '우리 마을(칸 지도)', places: VP() }, target: { place }, difficulty: d,
      levels: {
        easy: { toolOptions: { mode: 'pin', readout: true } },
        challenge: { toolOptions: { places: VP([{ name: '언덕 위 정자', icon: 'park', at: [0, 0] }]) } },
      },
    }, more);
    M.push(
      X('intro.rain-chart', {
        title: '사흘 동안 온 비(가상)', method: '사흘 비 온 양 막대그래프 읽기(예시 자료)', tool: 'chart', minutes: 6,
        levels: { easy: '막대 3개를 교사와 함께 읽고 비가 가장 많이 온 날을 고른다.', base: '막대 3개를 읽고 사흘 동안 온 비를 합해 위험이 커지는 날을 고른다.', challenge: '막대를 읽은 뒤, 비가 그친 넷째 날에도 조심해야 하는 까닭을 말한다.' },
        intro: {
          teacher: '"이 그래프는 실제 기록이 아니라 수업용 예시 자료예요. 비가 가장 많이 온 날은 언제일까요?" 시연 단추로 \'셋째 날\'이 골라지는 모습을 보인다. "넷째 날 비가 그치면 산도 괜찮아요"라는 말에는 "사흘 동안 땅이 물을 머금었어요. 물을 잔뜩 먹은 흙은 어떻게 될까요?"라고 되묻는다.',
          student: '그래프를 보고 비가 날마다 어떻게 변했는지 한 문장으로 짝에게 말해 보아요.',
          demo: { tool: 'chart', options: { type: 'bar', mode: 'read', title: '사흘 동안 온 비(가상 예시)', unit: 'mm', xLabel: '날', yLabel: '비 온 양', data: RAIN, question: '비가 가장 많이 온 날은?', choices: RAIN.map((d) => d[0]) }, sequence: [{ pick: 2 }] },
          art: art('a paper bar chart of three rising blue paper bars next to a paper hillside soaked with rain', '비가 계속 오면?', 'wave', 'sky'),
        },
        notes: '그래프 수치는 예시 자료다. 실제 강수량 기준(호우주의보 등)은 기상청 안내로 확인해 말한다.',
      }),
      X('intro.slope-scene', {
        title: '비 온 뒤 산비탈 징후', method: '산비탈 장면에서 징후 찾기', tool: 'emotion', minutes: 5,
        levels: { easy: '교사가 짚어 주는 징후 1개(돌이 굴러 내림)를 함께 고른다.', base: '징후 2개(돌이 굴러 내림·비탈에서 물이 솟음)를 스스로 고른다.', challenge: '징후를 고른 뒤 징후마다 할 일(멀어지기·알리기)을 말한다.' },
        intro: {
          teacher: '"비가 많이 온 뒤 산비탈에서 이런 모습을 보면 무엇을 뜻할까요?" 시연 단추로 \'돌이 굴러 내려요\'와 \'비탈에서 물이 솟아요\'가 바구니에 담기는 모습을 보인다. "작은 돌은 괜찮아요"라는 말에는 "작은 돌이 굴러 내리는 것은 흙이 무너지기 시작한다는 신호일 수 있어요"라고 되묻는다.',
          student: '그림에서 산사태가 날 수 있다는 신호를 찾아 짝에게 짚어 보아요.',
          demo: { tool: 'emotion', options: { mode: 'pick', basket: '산사태 징후', cards: [{ id: 'rock', text: '돌이 굴러 내려요' }, { id: 'bird', text: '새가 울어요' }, { id: 'spring', text: '비탈에서 물이 솟아요' }, { id: 'rainbow', text: '무지개가 떴어요' }], shuffle: false }, sequence: [{ pick: ['rock', 'spring'] }] },
          art: art('a paper hillside after rain with small paper stones rolling down and a thin stream bursting out of the slope', '산이 보내는 신호', 'tree', 'mint'),
        },
      }),
      X('activity.cause-web', {
        title: '많은 비 → 산사태·침수', method: '원인→결과 이어 그리기', tool: 'mindmap', minutes: 10,
        levels: { easy: '결과 가지 2개(산사태·침수)에 원인 카드를 한 장씩 붙인다.', base: '가지 2개에 카드 4장을 붙이고 원인이 결과로 이어지는 차례를 놓는다.', challenge: '카드를 붙이고 차례를 놓은 뒤, 결과마다 막는 행동 카드를 짝 짓는다.' },
        activity: {
          title: '많은 비 원인·결과 그물', tool: 'mindmap',
          teacher: '"많은 비가 오면 무슨 일이 이어질까요?" 가운데 \'많은 비\'에서 산사태 쪽과 침수 쪽 가지에 카드를 붙이게 한다. "비가 그치면 다 끝나요"라는 학생에게 "물을 머금은 흙은 비가 그친 뒤에도 무너질 수 있어요. 그래서 그친 뒤에도 비탈을 피해요"라고 말해 준다.',
          task: '‘많은 비’에서 이어지는 일을 산사태·침수 가지에 붙이고, 차례와 막는 행동을 이어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORT('‘많은 비’에서 이어지는 일을 가지에 붙여요.', { topic: '많은 비', slots: ['산사태 쪽', '침수 쪽'], groups: { '산사태 쪽': ['땅이 물을 머금어요', '비탈 흙이 무너져요'], '침수 쪽': ['냇물이 넘쳐요', '낮은 길이 잠겨요'] }, easy: 1, extra: { '침수 쪽': ['지하차도에 물이 차요'] } }, 0.2),
            ORDER('많은 비가 산사태로 이어지는 차례를 놓아요.', ['많은 비', '땅이 물을 머금음', '흙이 약해짐', '산사태'], { mode: 'order', easy: [0, 1, 3] }, 0.25),
            { prompt: '결과마다 막는 행동을 짝 지어요.', toolOptions: { mode: 'match', topic: '많은 비', slots: [{ id: 'm1', label: '산사태' }, { id: 'm2', label: '침수' }], cards: ['비탈에서 멀리 피하기', '높은 곳으로 가기', '불어난 물 구경하기'] }, target: { match: { m1: '비탈에서 멀리 피하기', m2: '높은 곳으로 가기' } }, difficulty: 0.25,
              conclude: '많은 비는 땅을 약하게 해 산사태를, 물을 넘치게 해 침수를 불러요. 비탈과 물가에서 멀어져요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '비가 그친 뒤에도 산비탈을 조심해야 하는 까닭을 써요.' }] },
      }),
      X('activity.village-map', {
        title: '마을 지도에서 피할 곳', method: '마을 칸 지도에서 위험 구역과 높은 곳 핀', tool: 'map', minutes: 10,
        levels: { easy: '이름이 보이는 마을 지도에서 핀을 놓으면 칸 이름이 보인다(지형 층 없이).', base: '지형 층과 높이 범례가 있는 지도에서 위험한 곳과 피할 곳에 핀을 꽂는다.', challenge: '헷갈리는 장소(언덕 위 정자)가 더해진 지도에서 고르고, 대피소로 가는 두 길 가운데 안전한 길을 고른다.' },
        activity: {
          title: '마을 지형 지도 핀 꽂기', tool: 'map',
          teacher: '"높이 범례를 보면 어디가 낮고 어디가 높을까요?" 지형 층의 색을 먼저 읽게 한다. "높은 곳이면 산 위로 가면 돼요"라는 학생에게 "산 위는 비탈이라 흙이 무너질 수 있어요. 비탈에서 멀고 물에 잠기지 않는 곳은 어디일까요?"라고 묻는다. 우리 동네 대피소 위치를 국민재난안전포털에서 찾아볼 수 있다고 알려 준다.',
          task: '마을 칸 지도에서 위험한 곳과 피할 곳을 찾아 핀을 꽂아요.', levels: { easy: { readout: true }, base: {}, challenge: {} },
          items: [
            VMAP('호우 때 피할 곳(대피소)에 핀을 꽂아요.', '마을회관(대피소)', 0.2),
            VMAP('산사태 위험이 가장 큰 곳에 핀을 꽂아요.', '비탈 아래 집', 0.25),
            VMAP('냇물이 넘치면 먼저 잠길 곳에 핀을 꽂아요.', '냇가 캠핑장', 0.25),
            { prompt: '대피소로 가는 두 길 가운데 안전한 길을 골라요.', toolOptions: { mode: 'terrain', grid: [6, 4], heights: HEIGHTS, title: '우리 마을(칸 지도)', places: VP(), ask: { q: '안전한 길은?', choices: ['냇가를 따라가는 길', '비탈에서 먼 큰길'], why: ['냇가는 물이 넘칠 수 있어요.', ''] } }, target: { pick: 1 }, difficulty: 0.3,
              conclude: '호우 때는 비탈 아래와 냇가를 피하고, 비탈에서 먼 큰길로 대피소에 가요.' },
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '호우 때 가장 위험한 곳은?', options: ['비탈 아래 집', '마을회관', '큰길'], answer: '비탈 아래 집' }] },
        notes: '마을 지도는 지어낸 것이다. 우리 지역 대피소는 국민재난안전포털에서 찾아 함께 확인한다.',
      }),
      X('activity.camp-fork', {
        title: '캠핑장에 비가 계속 와요', method: '캠핑장 비 갈림길', tool: 'dilemma', minutes: 8,
        levels: { easy: '갈림길 1번(머물기/떠나기)에서 고르고 근거 한 장을 고른다.', base: '갈림길 2번(불어난 물 앞)을 지나 근거를 고른다.', challenge: '갈림길 3번(돌이 굴러 내리는 비탈)까지 지나 근거를 모두 고르고 설명한다.' },
        activity: {
          title: '갈림길: 계곡 캠핑장에 비', tool: 'dilemma',
          teacher: '"재난문자가 왔는데 텐트에 있으면 안전할까요?" 결과 칸을 소리 내어 읽게 한다. "물 구경은 신기해요"라는 학생에게 "불어난 물가의 흙은 금방 무너져요. 구경하는 동안 무슨 일이 생길까요?"라고 묻는다. 어린이는 보호자에게 문자를 알리고 함께 정하는 것임을 짚는다.',
          task: '캠핑장 상황의 갈림길마다 고르고, 내 선택의 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: DIL(Object.assign({}, CAMP, { talk: '모둠에서 "호우 예보가 있는 날 캠핑을 가면?"을 이야기해요.', conclude: '호우 때는 계곡·냇가에서 미리 떠나고, 불어난 물과 비탈에서 멀어져요.' })),
        },
        worksheet: { items: [{ type: 'choice', prompt: '계곡 물이 불어나면 어떻게 하나요?', options: ['가까이 가서 구경한다', '멀리 떨어져 높은 곳으로 간다', '물에 발을 담근다'], answer: '멀리 떨어져 높은 곳으로 간다' }] },
      }),
      X('wrap.plan-check', {
        title: '호우 때 실천 점검', method: '호우 때 실천 계획 점검', tool: 'kitchen', minutes: 7,
        levels: { easy: '실천 항목 3개를 고른다.', base: '실천 항목 5개(재난 소식·계곡·비탈·가족·지하차도)를 고른다.', challenge: '5개를 고른 뒤, 나만의 스스로 점검 항목 하나를 만들어 쓴다.' },
        wrap: {
          teacher: '"호우 소식이 있는 날 나는 무엇을 할 수 있을까요?" 점검표를 읽고 실천할 것만 고르게 한다. \'불어난 냇가 구경\'을 고른 학생에게 "구경도 물가에 가는 거예요. 무엇이 위험할까요?"라고 묻는다. 마지막에 나만의 점검 항목을 하나 만들어 보게 한다.',
          exitTicket: [
            EX('kitchen', CHK('호우 때 실천할 것만 표시해요.', '호우 때 실천', ['재난 소식 확인하기', '계곡·냇가 가지 않기', '비탈 피해 다니기', '가족에게 알리기', '물 찬 지하차도 피하기'], ['불어난 냇가 구경'], { easy: 3, base: 5 }, 0.2)),
            { type: 'choice', prompt: '사흘 내린 비가 그쳤어요. 바른 생각은?', options: ['이제 산비탈도 안전하다', '땅이 물을 머금어 아직 조심한다', '계곡에 놀러 간다'], answer: 1, difficulty: 0.2, explain: '물을 머금은 흙은 비가 그친 뒤에도 무너질 수 있어요.' },
            { type: 'short', prompt: '나만의 호우 때 스스로 점검 항목 하나를 만들어 써요.' },
          ],
        },
        worksheet: {
          title: '호우 때 이렇게 해요',
          items: [
            { type: 'check', prompt: '호우 때 내가 할 실천에 표시해요.', options: ['재난 소식 확인하기', '계곡·냇가 가지 않기', '비탈 피해 다니기', '가족에게 알리기'] },
            { type: 'short', prompt: '산사태 징후를 하나 쓰고, 보면 할 일을 써요.' },
          ],
          easy: { note: '비가 많이 오면 물가와 비탈에서 멀어져요.', items: [{ type: 'draw', prompt: '높은 곳으로 피하는 모습을 그려요.' }] },
        },
      }),
    );
  }

  // ======== 6학년 · 우리 학교 대피 경로 지도로 계획하고 훈련 (별표 2 초등 재난안전 1·5) ========
  {
    const X = mk('school-route-map', 6);
    const FLOOR = (extra = []) => [
      { name: '우리 교실', icon: 'house', at: [1, 1], legend: '우리 교실' }, { name: '서쪽 계단', icon: 'dot', at: [0, 2] },
      { name: '동쪽 계단', icon: 'dot', at: [5, 2] }, { name: '엘리베이터', icon: 'office', at: [2, 0] }, ...extra,
    ];
    const YARD = (extra = []) => [
      { name: '본관 현관', icon: 'school', at: [1, 0] }, { name: '운동장 집결 장소', icon: 'park', at: [3, 2] },
      { name: '주차장', icon: 'dot', at: [5, 0] }, ...extra,
    ];
    const TIMES = [['1반', 150], ['2반', 180], ['3반', 120], ['4반', 210], ['5반', 160]];
    M.push(
      X('intro.blocked-story', {
        title: '늘 쓰던 계단이 막혔어요', method: '대피로가 막힌 장면 읽기', tool: 'story', minutes: 6,
        levels: { easy: '교사가 장면을 읽어 주고 보기 2개 가운데 다음 행동을 함께 고른다.', base: '보기 3개 가운데 다음 행동을 스스로 고른다.', challenge: '다음 행동을 고른 뒤, 대피 경로가 두 개 있어야 하는 까닭을 말한다.' },
        intro: {
          teacher: '"화재 경보가 울려 늘 쓰던 계단으로 갔더니 연기가 가득해요. 어떻게 할까요?" 장면을 읽고 시연 단추로 \'다른 계단(2차 경로)으로\'가 바구니에 담기는 모습을 보인다. "대피 길은 하나만 알면 돼요"라는 말에는 "그 길이 막히면 어디로 가죠? 그래서 두 번째 길을 미리 정해 둬요"라고 되묻는다.',
          student: '우리 교실에서 나가는 길을 떠올리고, 그 길이 막히면 어디로 갈지 짝에게 말해 보아요.',
          demo: { tool: 'story', options: { mode: 'pick', basket: '다음 행동', title: '연기로 막힌 계단(지어낸 장면)', cards: ['다른 계단으로 간다', '연기 속을 지나간다', '엘리베이터를 탄다'] }, sequence: [{ pick: ['다른 계단으로 간다'] }] },
          art: art('a paper school staircase filled with grey paper smoke, and a paper arrow pointing to a second staircase at the other end of the hallway', '길이 막히면 두 번째 길로', 'cloud', 'lavender'),
        },
      }),
      X('intro.gather-compass', {
        title: '집결 장소는 어느 쪽?', method: '집결 장소 방위 읽기', tool: 'mapcompass', minutes: 5,
        levels: { easy: '방위표 4방위로 학교에서 공원(학교 밖 집결 장소)이 어느 쪽인지 고른다.', base: '방위표 8방위로 학교에서 두 번째 집결 장소의 방위를 고른다.', challenge: '두 집결 장소의 방위를 견주어, 바람이 불어오는 쪽을 피해 고를 곳을 말한다.' },
        intro: {
          teacher: '"이 마을 지도에서 학교 밖 집결 장소인 공원은 학교의 어느 쪽일까요?" 방위표를 지도 북쪽에 맞추는 법을 먼저 보이고, 시연 단추로 바늘이 \'동\'에 멈추는 모습을 보인다. "오른쪽이 늘 동쪽이에요"라는 말에는 "지도를 돌리면 오른쪽도 바뀌어요. 방위표의 북쪽을 먼저 봐요"라고 되묻는다.',
          student: '우리 학교의 집결 장소가 교실에서 어느 쪽인지 손으로 가리키며 짝에게 말해 보아요.',
          demo: { tool: 'mapcompass', options: { mode: 'direction', points: 4, from: '학교', to: '공원' }, sequence: [{ direction: '동' }] },
          art: art('a paper village map with a compass rose, a paper school in the center and a paper park with a flag on the east side', '집결 장소는 어느 쪽?', 'star', 'buttercup'),
        },
        notes: '마을 지도는 교구의 지어낸 마을이다. 실제 학교 집결 장소의 방위를 학교 배치도로 함께 확인한다.',
      }),
      X('activity.route-plan', {
        title: '1차·2차 대피 경로 계획', method: '학교 칸 지도에 1차·2차 경로 그리기', tool: 'map', minutes: 14,
        levels: { easy: '이름이 보이는 층 지도에서 1차 경로(가까운 계단)에 핀을 꽂고, 핀을 놓으면 칸 이름이 보인다.', base: '1차 경로 계단, 1차가 막혔을 때의 2차 경로 계단, 집결 장소에 차례로 핀을 꽂는다.', challenge: '막힌 칸(연기)과 헷갈리는 장소가 더해진 지도에서 다시 계획하고, 엘리베이터를 쓰지 않는 까닭을 고른다.' },
        activity: {
          title: '1·2차 경로 핀 꽂기', tool: 'map',
          teacher: '"우리 교실에서 가장 가까운 계단은 어디일까요? 칸을 세어 봐요." 1차 경로를 정한 뒤 "그 계단이 막히면?"이라고 물어 2차 경로를 정하게 한다. "엘리베이터가 더 가까워요"라는 학생에게 "불이 나면 전기가 끊겨 멈추거나 연기가 들어올 수 있어요"라고 말해 준다. 활동 뒤 실제 우리 학교 층 배치도와 견주어 본다.',
          task: '층 지도에서 1차·2차 대피 경로의 계단과 집결 장소에 핀을 꽂아요.', levels: { easy: { readout: true }, base: {}, challenge: {} },
          items: [
            { prompt: '우리 교실에서 가장 가까운 계단(1차 경로)에 핀을 꽂아요.', toolOptions: { grid: [6, 3], title: '우리 층(칸 지도)', places: FLOOR(), legend: false }, target: { place: '서쪽 계단' }, difficulty: 0.2,
              levels: { challenge: { toolOptions: { places: FLOOR([{ name: '화장실', icon: 'dot', at: [0, 0] }]) } } } },
            { prompt: '서쪽 계단이 연기로 막혔어요. 2차 경로 계단에 핀을 꽂아요.', toolOptions: { grid: [6, 3], title: '우리 층(칸 지도)', places: FLOOR([{ name: '연기로 막힘', icon: 'fire', at: [0, 1] }]), legend: false }, target: { place: '동쪽 계단' }, difficulty: 0.25,
              levels: { challenge: { toolOptions: { places: FLOOR([{ name: '연기로 막힘', icon: 'fire', at: [0, 1] }, { name: '화장실', icon: 'dot', at: [0, 0] }]) } } } },
            { prompt: '건물 밖으로 나온 뒤 모일 집결 장소에 핀을 꽂아요.', toolOptions: { grid: [6, 3], title: '학교 운동장(칸 지도)', places: YARD(), legend: false }, target: { place: '운동장 집결 장소' }, difficulty: 0.2,
              levels: { challenge: { toolOptions: { places: YARD([{ name: '건물 옆 화단', icon: 'park', at: [0, 1] }]) } } } },
            { prompt: '대피 때 엘리베이터를 쓰지 않는 까닭을 골라요.', toolOptions: { grid: [6, 3], title: '우리 층(칸 지도)', places: FLOOR(), ask: { q: '엘리베이터를 쓰지 않는 까닭은?', choices: ['멈추거나 연기가 들어올 수 있어서', '계단이 더 넓어서 보기 좋아서', '엘리베이터가 느려서'], why: ['', '보기 좋은 것과는 상관없어요.', '빠르기보다 멈출 수 있다는 점이 위험해요.'] } }, target: { pick: 0 }, difficulty: 0.25,
              conclude: '1차 경로가 막히면 2차 경로로 가고, 엘리베이터는 쓰지 않으며, 정한 집결 장소에 모여요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '우리 반 대피 경로를 써요.', columns: ['1차 경로', '2차 경로', '집결 장소'], cells: [['', '', '']] }] },
        notes: '층 지도는 지어낸 것이다. 실제 학교 대피 경로도(복도 게시물)를 보이며 우리 반 1차·2차 경로를 함께 정한다.',
      }),
      X('activity.drill-board', {
        title: '경로 계획 따라 대피 훈련', method: '화재 대피 훈련(경로 계획) 판', tool: 'timer', minutes: 15,
        levels: { easy: '대피 순서 카드 3장과 안전 점검 2칸을 표시한다.', base: '순서 카드 4장과 안전 점검 3칸을 표시하고, 구간 타이머를 구간 2개로 맞춘다.', challenge: '안전 점검을 모두 표시하고 구간 3개로 맞춘 뒤, 스스로 점검 4칸을 표시한다.' },
        activity: {
          title: '경로 계획 대피 훈련 판', tool: 'timer',
          teacher: '"계획한 1차 경로로 걸어 볼까요? 구간마다 걸린 시간을 재어 다음 훈련 계획에 써요." 순서 카드와 안전 점검을 확인한 뒤 훈련을 한다. "시간을 줄이려면 뛰어야 해요"라는 학생에게 "시간 목표는 우리 반 약속일 뿐이에요. 뛰다 넘어지면 모두가 늦어져요"라고 말해 준다. 훈련 뒤 2차 경로도 걸어 보게 한다.',
          task: '대피 순서와 안전 점검을 표시하고, 구간 타이머를 맞춘 뒤 훈련을 스스로 점검해요.', levels: { easy: {}, base: {}, challenge: { showTotal: true } },
          items: [
            DRILL_ORDER('경로 계획대로 대피 순서 카드를 맞추고 점검해요.', '경로 계획 대피 훈련', ['문 닫고 나오기', '복도 벽 따라 걷기', '계단은 한 줄로', '집결 장소 인원 확인'], ['1차 경로를 확인했어요', '2차 경로를 확인했어요', '엘리베이터를 안 써요', '손수건을 챙겼어요'], 0.25),
            { prompt: '한 구간 40초를 2구간 하도록 맞춰요(우리 반 약속 연습값).', toolOptions: { title: '구간 타이머(우리 반 약속)', plan: { work: 20, rest: 0, rounds: 1 } }, target: { plan: { work: 40, rounds: 2 } }, difficulty: 0.2,
              levels: { easy: { prompt: '한 구간 40초를 1구간 하도록 맞춰요(우리 반 약속 연습값).', target: { plan: { work: 40, rounds: 1 } } }, challenge: { prompt: '한 구간 40초를 3구간 하도록 맞춰요(우리 반 약속 연습값).', target: { plan: { work: 40, rounds: 3 } } } } },
            DRILL_SELF('경로 훈련을 마치고 내가 지킨 것에 표시해요.', '경로 훈련 스스로 점검', ['1차 경로로 걸었다', '계단에서 한 줄로 걸었다', '집결 장소에서 줄을 섰다', '2차 경로도 걸어 보았다']),
            { prompt: '모둠에서 구간마다 늦어진 곳과 그 까닭을 이야기해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '훈련 구간을 적어요.', columns: ['구간', '어디부터 어디까지'], cells: [['1', ''], ['2', '']] }] },
        notes: '구간 시간은 실제 기준이 아니라 반에서 정한 연습값이다. 학교 화재 대피 훈련과 함께 한다.',
      }),
      X('activity.eval-rubric', {
        title: '훈련 평가 글 쓰기', method: '훈련 평가 글 쓰기', tool: 'rubric-writing', minutes: 13,
        levels: { easy: '문장 틀("잘된 점은 ~. 고칠 점은 ~.")을 채우고 기준 2개로 점검한다.', base: '세 문장을 쓰고 경로·행동·안전 기준 3개로 점검한다.', challenge: '기준 3개로 점검하고 고쳐 쓴 뒤, 고칠 점마다 고치는 방법을 덧붙인다.' },
        activity: {
          title: '대피 훈련 돌아보는 글', tool: 'rubric-writing',
          teacher: '"오늘 훈련에서 잘된 점과 고칠 점을 세 문장으로 써 볼까요?" 기준표(경로·행동·안전)를 함께 읽는다. "다 잘했어요"만 쓴 학생에게 "어느 구간에서, 무엇을 잘했나요? 고칠 점도 하나 찾아봐요"라고 묻는다. 친구 이름을 들어 탓하지 않고 \'우리 반\'으로 쓰게 한다.',
          task: '대피 훈련에서 잘된 점과 고칠 점을 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RUB('훈련에서 잘된 점과 고칠 점을 세 문장으로 쓰고 점검해요.', { topic: '우리 반 화재 대피 훈련의 잘된 점과 고칠 점(세 문장)', title: '훈련 평가', starter: '잘된 점은 ~이다. 고칠 점은 ~이다. 다음에는 ~', crit: ['경로에 대해 썼다', '행동에 대해 썼다', '안전에 대해 썼다'], must: [['다음에', '고칠', '바꿀']], chars: [40, 220] }, 0.25),
            RUB('고칠 점 하나를 골라 고치는 방법을 두 문장으로 써요.', { topic: '훈련에서 고칠 점과 고치는 방법(두 문장)', title: '고치는 방법', starter: '고칠 점은 ~이다. 그래서 ~하겠다.', crit: ['고칠 점을 하나 썼다', '고치는 방법을 썼다', '누가 할지 썼다'], must: [['하겠다', '할 것이다', '하기로']], chars: [25, 160] }, 0.3),
            { prompt: '짝과 글을 바꿔 읽고 빠진 기준 하나를 말해 줘요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '다음 훈련에서 우리 반이 고칠 점 하나를 써요.' }] },
      }),
      X('wrap.time-chart', {
        title: '반별 대피 시간(가상)', method: '반별 대피 시간 그래프 읽기(예시 자료)', tool: 'chart', minutes: 7,
        levels: { easy: '막대 3개를 읽고 값이 보인다.', base: '막대 5개를 읽고 가장 오래 걸린 반과 그 까닭을 고른다.', challenge: '막대를 읽은 뒤 빠르기보다 안전이 중요한 까닭을 고른다.' },
        wrap: {
          teacher: '"이 그래프는 실제 기록이 아닌 예시 자료예요. 가장 오래 걸린 반은 어디일까요?" 막대를 읽고 그 까닭을 짐작하게 한다. "가장 빠른 반이 가장 잘한 반이에요"라는 말에는 "빨리 왔지만 뛰다 넘어진 친구가 있었다면요? 다치지 않고 모두 모이는 것이 먼저예요"라고 되묻는다.',
          exitTicket: [
            EX('chart', { prompt: '집결까지 가장 오래 걸린 반은?(가상 자료)', toolOptions: { type: 'bar', mode: 'read', title: '반별 집결 시간(가상 예시)', unit: '초', xLabel: '반', yLabel: '걸린 시간', data: TIMES, choices: TIMES.map((t) => t[0]), question: '가장 오래 걸린 반은?' }, target: { pick: 3 }, difficulty: 0.15,
              levels: { easy: { prompt: '세 반 가운데 집결까지 가장 오래 걸린 반은?(가상 자료)', toolOptions: { data: TIMES.slice(1, 4), choices: TIMES.slice(1, 4).map((t) => t[0]) }, target: { pick: 2 } } } }),
            { type: 'choice', prompt: '4반이 오래 걸린 까닭으로 알맞은 짐작은?(가상 자료)', options: ['계단이 멀고 1차 길이 막혔다', '4반은 원래 느리다', '그래프가 틀렸다'], answer: 0, difficulty: 0.2, explain: '경로와 상황을 보고 까닭을 찾아요. 반을 탓하지 않아요.' },
            { type: 'choice', prompt: '대피 훈련에서 가장 중요한 것은?', options: ['가장 빨리 오기', '다치지 않고 모두 모이기', '다른 반 이기기'], answer: 1, difficulty: 0.15, explain: '빠르기보다 모두 안전하게 모이는 것이 먼저예요.' },
          ],
        },
        worksheet: {
          title: '빠르기보다 안전',
          items: [
            { type: 'short', prompt: '우리 반 대피가 늦어진 구간과 그 까닭을 써요.' },
            { type: 'choice', prompt: '훈련을 평가할 때 먼저 볼 것은?', options: ['걸린 시간만', '다친 사람 없이 모였는지', '누가 1등인지'], answer: '다친 사람 없이 모였는지' },
          ],
        },
        notes: '그래프 수치는 예시 자료다. 우리 학교 훈련 기록을 쓸 때도 반을 서로 비교해 탓하지 않는다.',
      }),
      X('wrap.next-web', {
        title: '다음 훈련 계획 그물', method: '다음 훈련 계획 정리', tool: 'mindmap', minutes: 7,
        levels: { easy: '카드 2장을 경로·역할 가지에 붙인다.', base: '카드 6장을 경로·역할·연습할 행동 세 가지에 붙인다.', challenge: '카드 6장과 섞인 틀린 카드를 가려 붙인 뒤, 가지마다 담당을 정한다.' },
        wrap: {
          teacher: '"다음 훈련 때 무엇을 바꾸면 좋을까요?" 가운데 \'다음 훈련\'에 경로·역할·연습할 행동 가지를 붙이게 한다. \'다른 반보다 빨리 뛰기\'를 놓은 학생에게 "그것은 우리가 연습할 행동일까요? 안전을 떠올려 봐요"라고 묻는다. 정한 계획을 교실 게시판에 붙이자고 한다.',
          exitTicket: [
            EX('mindmap', SORT('‘다음 훈련’ 가지마다 알맞은 카드를 붙여요.', { topic: '다음 훈련', slots: ['경로', '역할', '연습할 행동'], groups: { 경로: ['2차 경로 걸어 보기', '집결 장소 다시 확인'], 역할: ['앞장설 사람 정하기', '인원 셀 사람 정하기'], '연습할 행동': ['코·입 가리고 낮추기', '계단 한 줄로 걷기'] }, easy: [1, 1, 0], traps: ['다른 반보다 빨리 뛰기'] }, 0.2)),
            { type: 'choice', prompt: '1차 경로가 막혔을 때를 위해 할 일은?', options: ['2차 경로를 미리 걸어 본다', '1차 경로만 외운다', '막히면 교실에서 기다린다'], answer: 0, difficulty: 0.2, explain: '두 번째 길을 미리 걸어 보면 막혔을 때 바로 갈 수 있어요.' },
            { type: 'mood', prompt: '오늘 공부를 마친 내 마음은 어떤가요?' },
          ],
        },
        worksheet: {
          title: '다음 훈련 계획',
          items: [
            { type: 'table', prompt: '다음 훈련 계획을 써요.', columns: ['경로', '역할', '연습할 행동'], cells: [['', '', '']] },
            { type: 'short', prompt: '내가 맡을 일 하나를 써요.' },
          ],
          easy: { note: '1차 길이 막히면 2차 길로 가요.', items: [{ type: 'draw', prompt: '우리 반 대피 길을 그려요.' }] },
        },
      }),
    );
  }

  // ======== 6학년 · 붕괴·테러 위협 대처 (별표 2 초등 재난안전 4·5) ========
  {
    const X = mk('collapse-terror', 6);
    const THREAT = {
      title: '대합실의 주인 없는 상자',
      steps: [
        { text: '기차역 대합실 의자 밑에 주인 없는 상자가 있어요. 한참 지나도 아무도 가져가지 않아요.', motif: 'house',
          good: ['away', '만지지 않고 멀리 떨어진다', '상자에서 떨어져 보호자 곁에 섰어요.', [['나와 보호자', '위험에서 멀어져요', 1]]],
          bad: ['open', '무엇이 들었는지 열어 본다', '상자를 건드려 둘레 사람들이 놀라요.', '수상한 물건은 직접 확인하지 않아요. 만지지 말고 떨어져요.', [['둘레 사람들', '위험해져요', -1]]] },
        { text: '멀리 떨어졌어요. 이제 무엇을 할까요?', motif: 'star',
          good: ['report', '보호자와 역무원께 알리고 112에 신고한다', '역무원이 둘레를 비우고 경찰이 왔어요.', [['역 사람들', '안전하게 피해요', 1]]],
          bad: ['post', '사진을 찍어 친구들에게 올린다', '아무도 신고하지 않은 채 시간이 흘러요.', '사진보다 신고가 먼저예요. 어른과 112에 알려요.', [['역 사람들', '위험을 몰라요', -1]]] },
        { text: '상자 가까이 다른 사람이 다가가려 해요.', motif: 'leaf',
          good: ['warn', '"그 상자 만지지 마세요" 하고 알린다', '그 사람도 상자에서 멀어졌어요.', [['그 사람', '위험을 피해요', 1]]],
          bad: ['quiet', '모른 척하고 자리를 뜬다', '그 사람이 상자를 들어 올려요.', '둘레 사람에게도 알리면 모두 안전해져요.', [['그 사람', '위험해져요', -1]]] },
      ],
      ending: '만지지 않고, 멀리 떨어져, 신고하고 알린 덕분에 모두 안전했어요.',
      reasons: [{ id: 'notouch', text: '수상한 물건은 만지지 않는다' }, { id: 'report', text: '멀리 떨어져 어른·112에 알린다' }, { id: 'check', text: '직접 확인한 뒤 신고해야 정확하다', why: '확인하려고 만지는 것이 가장 위험해요.' }, { id: 'photo', text: '사진을 올리면 신고한 것과 같다', why: '사진은 신고가 아니에요. 112에 알려요.' }],
      good: ['notouch', 'report'],
    };
    M.push(
      X('intro.crack-scene', {
        title: '건물이 보내는 위험 신호', method: '붕괴 징후 장면 고르기', tool: 'emotion', minutes: 6,
        levels: { easy: '교사가 짚어 주는 징후 1개(벽의 큰 금)를 함께 고른다.', base: '징후 2개(벽의 큰 금·우두둑 소리)를 스스로 고른다.', challenge: '징후를 고른 뒤 그것을 보면 할 일(어른께 알리고 밖으로)을 말한다.' },
        intro: {
          teacher: '"건물이 무너지기 전에는 신호가 있을 수 있어요. 이 그림에서 이상한 곳은 어디일까요?" 시연 단추로 \'벽의 큰 금\'과 \'우두둑 소리\'가 바구니에 담기는 모습을 보인다. "금은 원래 있는 거예요"라는 말에는 "갑자기 커지거나 소리가 나면 달라요. 어른께 바로 알려요"라고 되묻는다.',
          student: '건물에서 이상한 모습을 보면 누구에게 먼저 알릴지 짝에게 말해 보아요.',
          demo: { tool: 'emotion', options: { mode: 'pick', basket: '붕괴 징후', cards: [{ id: 'crack', text: '벽의 큰 금' }, { id: 'poster', text: '새로 붙인 포스터' }, { id: 'sound', text: '우두둑 소리' }, { id: 'plant', text: '창가 화분' }], shuffle: false }, sequence: [{ pick: ['crack', 'sound'] }] },
          art: art('a paper building wall with a long zigzag crack and small paper sound marks near a pillar', '건물이 보내는 신호', 'cloud', 'lavender'),
        },
        notes: '실제 붕괴 사고 사진·피해 장면은 보이지 않는다.',
      }),
      X('intro.news-story', {
        title: '주인 없는 상자를 보면', method: '수상한 물건 발견 장면 읽기', tool: 'story', minutes: 5,
        levels: { easy: '교사가 장면을 읽어 주고 보기 2개 가운데 첫 행동을 함께 고른다.', base: '보기 3개 가운데 첫 행동을 스스로 고른다.', challenge: '첫 행동을 고른 뒤 그 까닭을 말한다.' },
        intro: {
          teacher: '"역 대합실에서 오랫동안 주인이 없는 상자를 봤어요. 가장 먼저 할 일은?" 시연 단추로 \'만지지 않고 멀리 떨어지기\'가 바구니에 담기는 모습을 보인다. "무엇인지 알아야 신고할 수 있어요"라는 말에는 "확인하려고 만지는 것이 가장 위험해요. 떨어져서 알리면 어른과 경찰이 확인해요"라고 되묻는다.',
          student: '주인 없는 물건을 보았을 때 첫 행동을 한 문장으로 짝에게 말해 보아요.',
          demo: { tool: 'story', options: { mode: 'pick', basket: '첫 행동', title: '주인 없는 상자(지어낸 장면)', cards: ['만지지 않고 떨어지기', '열어서 확인하기', '발로 밀어 보기'] }, sequence: [{ pick: ['만지지 않고 떨어지기'] }] },
          art: art('a paper train station waiting hall with a lonely paper box under a bench and a paper child stepping back beside a parent', '만지지 말고 멀리', 'star', 'sky'),
        },
        notes: '테러 사건 뉴스 영상·피해 장면은 쓰지 않는다. 주인을 기다리는 물건일 수도 있으니 사람을 의심해 몰아세우지 않게 한다.',
      }),
      X('activity.threat-fork', {
        title: '수상한 물건 앞에서', method: '위협 상황 갈림길', tool: 'dilemma', minutes: 14,
        levels: { easy: '갈림길 1번(만지기/거리 두기)에서 고르고 근거 한 장을 고른다.', base: '갈림길 2번(신고 방법)을 지나 근거를 고른다.', challenge: '갈림길 3번(둘레 사람에게 알리는 말)까지 지나 근거를 모두 고르고 다른 길과 견준다.' },
        activity: {
          title: '갈림길: 주인 없는 상자', tool: 'dilemma',
          teacher: '"상자를 열어 보면 무엇이 달라질까요?" 결과 칸을 소리 내어 읽게 한다. "사진을 올리면 다들 알게 되니까 신고한 거예요"라는 학생에게 "사진을 본 친구가 경찰일까요? 112에 알려야 경찰이 와요"라고 묻는다. 신고는 보호자·역무원과 함께 하고, 거리를 둔 곳에서 한다는 점을 짚는다.',
          task: '갈림길마다 고르고, 결과를 읽은 뒤 내 선택의 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: DIL(Object.assign({}, THREAT, { talk: '모둠에서 "수상한 물건을 보면 왜 직접 확인하지 않을까?"를 이야기해요.', conclude: '수상한 물건은 만지지 않고, 멀리 떨어져, 어른과 112·119에 알려요.' })),
        },
        worksheet: { items: [{ type: 'choice', prompt: '주인 없는 수상한 가방을 보면 먼저 할 일은?', options: ['열어 본다', '만지지 않고 멀리 떨어진다', '들고 역무실에 간다'], answer: '만지지 않고 멀리 떨어진다' }] },
      }),
      X('activity.drill-board', {
        title: '붕괴·테러 도상 훈련', method: '붕괴·테러 대피 도상 훈련 판', tool: 'timer', minutes: 15,
        levels: { easy: '대피 순서 카드 3장과 안전 점검 2칸(인원·신고)을 표시한다.', base: '순서 카드 4장과 안전 점검 3칸(인원·신고·멀리 떨어짐)을 표시한다.', challenge: '안전 점검 4칸을 모두 표시하고 스스로 점검 4칸을 표시한다.' },
        activity: {
          title: '붕괴·테러 도상 훈련 판', tool: 'timer',
          teacher: '"오늘은 실제로 걷지 않고 학교 배치도 위에서 손가락으로 대피 길을 따라가는 도상 훈련을 해요." 순서 카드를 맞추고, 모인 뒤 확인할 점검을 표시하게 한다. "밖에 나왔으면 끝이에요"라는 학생에게 "건물 가까이 있으면 무너지는 것에 다칠 수 있어요. 멀리 떨어졌는지, 모두 모였는지, 신고됐는지 확인해요"라고 말해 준다.',
          task: '도상 훈련 순서 카드를 맞추고, 모인 뒤 확인할 점검과 스스로 점검에 표시해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DRILL_ORDER('붕괴·테러 대피 순서 카드를 맞추고 모인 뒤 점검해요.', '붕괴·테러 도상 훈련', ['이상한 점 알아차리기', '만지지 않고 멀어지기', '계단으로 밖에 나가기', '멀리 모여 신고 확인'], ['모두 모였는지 셌어요', '112·119 신고를 확인했어요', '건물에서 멀리 떨어졌어요', '엘리베이터를 안 써요'], 0.25),
            DRILL_SELF('도상 훈련에서 내가 해낸 것에 스스로 표시해요.', '도상 훈련 스스로 점검', ['배치도에서 대피 길을 짚었다', '만지지 않기를 말했다', '신고할 번호를 말했다', '모일 곳을 말했다']),
            { prompt: '모둠에서 학교 배치도를 보며 대피 길을 손가락으로 따라가요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'check', prompt: '모인 뒤 확인할 것에 표시해요.', options: ['인원', '신고', '건물에서 멀리 떨어짐'] }] },
        notes: '도상 훈련은 학교 배치도(대피 경로도) 위에서 한다. 실제 대피 훈련은 학교 재난 대비 훈련 계획에 따른다.',
      }),
      X('activity.trapped-order', {
        title: '갇혔을 때 할 일 차례', method: '갇혔을 때 차례 놓기', tool: 'timeline', minutes: 13,
        levels: { easy: '차례 카드 3장(코·입 가리기 → 힘 아끼기 → 두드려 알리기)을 놓는다.', base: '차례 카드 4장(휴대전화로 위치 알리기까지)을 놓는다.', challenge: '카드 4장에 섞인 틀린 카드(라이터 켜 보기)를 빼고 놓은 뒤, 라이터·성냥을 쓰지 않는 까닭을 말한다.' },
        activity: {
          title: '갇혔을 때 차례 놓기', tool: 'timeline',
          teacher: '"무너진 곳에 갇혔다면 가장 먼저 무엇을 할까요?" 카드를 놓을 때마다 왜 그 차례인지 말하게 한다. "계속 소리치고 막힌 것을 밀어야 해요"라는 학생에게 "힘을 다 쓰면 오래 버틸 수 없어요. 두드려서 알리는 것이 힘을 아껴요"라고 말해 준다. 먼지가 많을 때 코·입을 가리는 까닭도 묻는다.',
          task: '갇혔을 때 할 일 카드를 차례대로 놓고, 할 일과 하지 말 일을 나누어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORDER('갇혔을 때 할 일을 차례대로 놓아요.', ['코·입 가리기', '힘 아끼기', '두드려 위치 알리기', '휴대전화로 위치 알리기'], { easy: [0, 1, 2], trap: '라이터 켜 보기' }, 0.2),
            { prompt: '갇혔을 때 할 일과 하지 말 일을 나누어요.', toolOptions: { mode: 'sort', slots: ['할 일', '하지 말 일'], axis: ['할 일', '하지 말 일'], cards: ['벽·관 두드리기', '계속 소리치기', '손수건으로 코·입', '성냥 켜기'] }, target: { sort: { '할 일': ['벽·관 두드리기', '손수건으로 코·입'], '하지 말 일': ['계속 소리치기', '성냥 켜기'] } }, difficulty: 0.25,
              levels: { easy: { prompt: '갇혔을 때 할 일과 하지 말 일을 나누어요(카드 2장).', toolOptions: { cards: ['벽·관 두드리기', '계속 소리치기'] }, target: { sort: { '할 일': ['벽·관 두드리기'], '하지 말 일': ['계속 소리치기'] } } } },
              conclude: '갇히면 코·입을 가리고 힘을 아끼며, 두드리거나 휴대전화로 위치를 알려요. 불은 켜지 않아요.' },
            { prompt: '짝에게 갇혔을 때 라이터를 켜지 않는 까닭을 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '갇히면 계속 소리치기보다 벽을 ___ 위치를 알려요.', answer: '두드려' }] },
      }),
      X('wrap.action-rubric', {
        title: '수상한 물건 대처 쓰기', method: '대처 순서 짧게 쓰고 점검', tool: 'rubric-writing', minutes: 7,
        levels: { easy: '문장 틀("먼저 ~. 그리고 ~. 마지막으로 ~.")을 채우고 기준 2개로 점검한다.', base: '세 문장을 쓰고 만지지 않기·거리·신고 기준 3개로 점검한다.', challenge: '기준 3개로 점검하고 고쳐 쓴 뒤, 붕괴 징후를 보았을 때의 문장 하나를 더한다.' },
        wrap: {
          teacher: '"수상한 물건을 보았을 때 할 일을 세 문장으로 써 볼까요?" 기준표를 함께 읽는다. "조심한다"만 쓴 학생에게 "무엇을 하지 않고, 어디로 가고, 누구에게 알릴까요?"라고 묻는다. 신고 번호 112·119를 바르게 썼는지 짚는다.',
          exitTicket: [
            RUBX('수상한 물건을 보았을 때 할 일을 세 문장으로 쓰고 점검해요.', { topic: '주인 없는 수상한 물건을 보았을 때 할 일(세 문장)', title: '수상한 물건 대처', starter: '먼저 ~. 그리고 ~. 마지막으로 ~.', crit: ['만지지 않는다고 썼다', '멀리 떨어진다고 썼다', '어른·112·119에 알린다고 썼다'], must: [['금', '무너', '소리']], chars: [30, 180] }),
            { type: 'choice', prompt: '갇혔을 때 힘을 아끼며 위치를 알리는 방법은?', options: ['계속 소리친다', '벽이나 관을 두드린다', '막힌 것을 힘껏 민다'], answer: 1, difficulty: 0.2, explain: '두드리기는 힘을 아끼면서 위치를 알릴 수 있어요.' },
            { type: 'mood', prompt: '오늘 공부를 마친 내 마음은 어떤가요?' },
          ],
        },
        worksheet: {
          title: '만지지 말고, 멀리, 알리기',
          items: [
            { type: 'short', prompt: '수상한 물건을 보았을 때 할 일을 차례대로 써요.' },
            { type: 'choice', prompt: '건물 벽에 갑자기 큰 금이 생겼어요. 할 일은?', options: ['사진만 찍는다', '어른께 알리고 밖으로 나간다', '금을 손으로 눌러 본다'], answer: '어른께 알리고 밖으로 나간다' },
          ],
          easy: { note: '만지지 말고, 멀리 떨어지고, 알려요.', items: [{ type: 'draw', prompt: '수상한 물건에서 멀리 떨어진 모습을 그려요.' }] },
        },
      }),
      X('wrap.self-check', {
        title: '도상 훈련 스스로 점검', method: '도상 훈련 스스로 점검', tool: 'kitchen', minutes: 7,
        levels: { easy: '점검 항목 2개(만지지 않기·멀리 떨어지기)에 스스로 표시한다.', base: '점검 항목 4개(알리기·둘레에 알리기까지)에 스스로 표시한다.', challenge: '점검 항목 4개에 표시한 뒤, 다음 훈련에서 연습할 항목 하나를 정해 쓴다.' },
        wrap: {
          teacher: '"오늘 도상 훈련에서 나는 무엇을 해냈을까요? 정직하게 표시해요." 점검표를 스스로 읽고 표시하게 한다. 출구 2번에서 \'직접 열어 확인\'을 고른 학생에게 "확인은 경찰이 해요. 우리는 떨어져서 알려요"라고 말해 준다. 표시하지 못한 항목을 다음 훈련 연습 항목으로 고르게 한다.',
          exitTicket: [
            EX('kitchen', SELFK('도상 훈련에서 해낸 것에 스스로 표시해요.', '도상 훈련 점검', ['만지지 않았어요', '멀리 떨어졌어요', '어른·112·119에 알렸어요', '둘레 사람에게 알렸어요'], { easy: 2, base: 4 })),
            { type: 'choice', prompt: '수상한 물건을 신고하는 바른 방법은?', options: ['직접 열어 확인한 뒤 신고', '멀리 떨어져 어른과 112에 알림', '사진을 찍어 올림'], answer: 1, difficulty: 0.2, explain: '확인은 경찰이 해요. 떨어져서 알려요.' },
            { type: 'short', prompt: '다음 훈련에서 연습할 항목 하나를 써요.' },
          ],
        },
        worksheet: {
          title: '도상 훈련 돌아보기',
          items: [
            { type: 'check', prompt: '오늘 훈련에서 해낸 것에 표시해요.', options: ['만지지 않기', '멀리 떨어지기', '112·119에 알리기', '둘레에 알리기'] },
            { type: 'short', prompt: '다음 훈련에서 더 연습할 것을 써요.' },
          ],
        },
      }),
    );
  }

  // ======== 6학년 · 재난문자 읽고 할 일 정하기 (별표 2 초등 재난안전 3) ========
  {
    const X = mk('disaster-text', 6);
    const TEXT = {
      title: '하굣길 호우 문자',
      steps: [
        { text: '하굣길에 휴대전화가 울려요. "[예시] 오늘 오후 호우경보, 하천 산책로 출입을 삼가세요."', motif: 'wave',
          good: ['read', '끝까지 읽고 하천 길 대신 큰길로 간다', '물이 불어난 하천을 피했어요.', [['나', '안전하게 걸어요', 1]]],
          bad: ['ignore', '읽지 않고 늘 가던 하천 길로 간다', '산책로에 물이 차오르기 시작해요.', '재난문자는 끝까지 읽고 장소를 확인해요.', [['나', '물에 갇힐 위험', -1]]] },
        { text: '큰길로 가는데 앞 지하차도에 물이 고여 있어요.', motif: 'cloud',
          good: ['around', '돌아서 다른 길로 간다', '물이 찬 곳을 피해 집 근처에 왔어요.', [['나', '물을 피해요', 1]]],
          bad: ['cross', '얕아 보이니 빨리 건넌다', '생각보다 물이 깊고 빨라 휘청여요.', '물이 찬 지하차도는 얕아 보여도 건너지 않아요.', [['나', '휩쓸릴 위험', -1]]] },
        { text: '보호자가 아직 직장에 계세요. 어떻게 알릴까요?', motif: 'house',
          good: ['tell', '보호자께 문자로 지금 있는 곳과 갈 길을 알린다', '보호자가 안심하고 답장을 보냈어요.', [['보호자', '마음이 놓여요', 1]]],
          bad: ['silent', '연락 없이 친구 집에 간다', '보호자가 걱정하며 나를 찾아요.', '재난 때는 가족에게 내가 있는 곳을 알려요.', [['보호자', '걱정해요', -1]]] },
      ],
      ending: '문자를 끝까지 읽고 할 일을 하고 가족에게 알려서 모두 안심했어요.',
      reasons: [{ id: 'read', text: '재난문자는 끝까지 읽고 장소·시간을 본다' }, { id: 'family', text: '가족에게 내가 있는 곳을 알린다' }, { id: 'adult', text: '재난문자는 어른만 읽으면 된다', why: '나에게 온 문자는 나도 읽고 할 일을 해요.' }, { id: 'freeze', text: '문자가 오면 무서워 가만히 있는다', why: '문자는 할 일을 알려 줘요. 침착하게 따라 해요.' }],
      good: ['read', 'family'],
    };
    M.push(
      X('intro.text-story', {
        title: '수업 중 재난문자가 왔어요', method: '재난문자 받은 장면 읽기', tool: 'story', minutes: 6,
        levels: { easy: '교사가 장면을 읽어 주고 보기 2개 가운데 먼저 할 일을 함께 고른다.', base: '보기 3개 가운데 먼저 할 일을 스스로 고른다.', challenge: '먼저 할 일을 고른 뒤 그 까닭을 말한다.' },
        intro: {
          teacher: '"수업 중에 휴대전화들이 한꺼번에 크게 울렸어요. 재난문자예요. 먼저 무엇을 할까요?" 시연 단추로 \'선생님 안내 듣고 끝까지 읽기\'가 바구니에 담기는 모습을 보인다. "재난문자는 어른만 보면 돼요"라는 말에는 "문자에는 지금 할 일이 쓰여 있어요. 나도 읽고 따를 수 있어요"라고 되묻는다.',
          student: '재난문자가 오면 가장 먼저 무엇을 할지 짝에게 한 문장으로 말해 보아요.',
          demo: { tool: 'story', options: { mode: 'pick', basket: '먼저 할 일', title: '수업 중 재난문자(지어낸 장면)', cards: ['안내 듣고 끝까지 읽기', '놀라서 밖으로 뛰기', '알림 끄고 놀기'] }, sequence: [{ pick: ['안내 듣고 끝까지 읽기'] }] },
          art: art('a paper classroom where several paper phones light up at once with a paper message bubble and a calm paper teacher raising a hand', '문자가 오면 먼저 읽어요', 'star', 'buttercup'),
        },
      }),
      X('intro.text-feel', {
        title: '문자 받은 순간의 마음', method: '문자 받은 순간 마음과 할 일 고르기', tool: 'emotion', minutes: 5,
        levels: { easy: '마음 카드 1장과 할 일 카드 1장을 교사와 함께 고른다.', base: '마음 카드 2장과 침착하게 할 일 카드 2장을 고른다.', challenge: '마음과 할 일을 고른 뒤, 놀란 친구를 안심시키는 말을 고른다.' },
        intro: {
          teacher: '"재난문자 알림 소리를 들으면 마음이 어떤가요? 놀라는 건 자연스러워요." 시연 단추로 마음 카드(놀람·걱정)와 할 일 카드(끝까지 읽기·어른께 보여 드리기)가 함께 담기는 모습을 보인다. "무서우면 아무것도 안 하는 게 나아요"라는 말에는 "놀란 마음은 그대로 두고, 할 일 하나를 하면 마음이 가라앉아요"라고 되묻는다.',
          student: '문자 알림을 들은 순간 내 마음과 그다음 할 일 하나를 짝에게 말해 보아요.',
          demo: { tool: 'emotion', options: { mode: 'pick', basket: '마음과 할 일', cards: [{ id: 'surprise', text: '놀람' }, { id: 'read', text: '끝까지 읽기' }, { id: 'yell', text: '소리 지르기' }, { id: 'worry', text: '걱정' }, { id: 'show', text: '어른께 보여 드리기' }, { id: 'off', text: '휴대전화 끄기' }], shuffle: false }, sequence: [{ pick: ['surprise', 'worry', 'read', 'show'] }] },
          art: art('a paper child holding a buzzing paper phone, with a small paper storm cloud of surprise turning into a calm paper sun', '놀라도 할 일 하나', 'cloud', 'sky'),
        },
      }),
      X('activity.text-fork', {
        title: '하굣길에 호우 문자', method: '문자 받고 갈림길', tool: 'dilemma', minutes: 10,
        levels: { easy: '갈림길 1번(문자를 읽고 길 바꾸기)에서 고르고 근거 한 장을 고른다.', base: '갈림길 2번(물이 고인 지하차도)을 지나 근거를 고른다.', challenge: '갈림길 3번(가족에게 연락하는 방법)까지 지나 근거를 모두 고른다.' },
        activity: {
          title: '갈림길: 하굣길 호우 문자', tool: 'dilemma',
          teacher: '"문자에 \'하천 산책로\'라고 쓰여 있어요. 내가 가는 길과 상관이 있을까요?" 결과 칸을 소리 내어 읽게 한다. "물이 얕아 보이면 건너도 돼요"라는 학생에게 "물이 고인 곳은 깊이와 빠르기를 눈으로 알기 어려워요. 돌아가요"라고 말해 준다. 가족에게 알릴 때 내 위치와 갈 길을 함께 쓰게 한다.',
          task: '호우 문자를 받은 하굣길의 갈림길마다 고르고, 내 선택의 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: DIL(Object.assign({}, TEXT, { talk: '모둠에서 재난문자를 받고 가족에게 보낼 문자를 함께 정해요.', conclude: '재난문자는 끝까지 읽고 장소·시간을 확인해 할 일을 하고, 가족에게 알려요.' })),
        },
        worksheet: { items: [{ type: 'choice', prompt: '물이 고인 지하차도 앞이에요. 어떻게 할까요?', options: ['빨리 건넌다', '돌아서 다른 길로 간다', '물 깊이를 발로 재 본다'], answer: '돌아서 다른 길로 간다' }] },
        notes: '예시 문자는 지어낸 것이다. 실제 재난문자 모양은 행정안전부 안내 자료로 보여 줄 수 있다.',
      }),
      X('activity.do-order', {
        title: '문자 읽고 할 일 차례', method: '문자 읽고 할 일 차례 놓기', tool: 'kitchen', minutes: 8,
        levels: { easy: '차례 카드 3장(끝까지 읽기 → 할 일 하기 → 가족에게 알리기)을 놓는다.', base: '차례 카드 4장(장소·시간 확인까지)을 놓고, 문자에서 확인할 것을 고른다.', challenge: '카드 4장에 섞인 틀린 카드를 빼고 놓은 뒤, 모르는 낱말이 있을 때 할 일을 말한다.' },
        activity: {
          title: '재난문자 할 일 차례 놓기', tool: 'kitchen',
          teacher: '"문자를 받았어요. 읽기 → 확인 → 할 일 → 알리기, 어떤 차례가 좋을까요?" 카드를 놓은 뒤 문자에서 꼭 확인할 것을 고르게 한다. "문자는 첫 줄만 보면 돼요"라는 학생에게 "할 일과 장소는 뒤쪽에 쓰여 있을 때가 많아요. 끝까지 읽어요"라고 말해 준다. \'경보\'·\'대피\'처럼 모르는 낱말은 어른께 물어보자고 한다.',
          task: '재난문자를 받았을 때 할 일 카드를 차례대로 놓고, 문자에서 확인할 것을 골라요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORDER('재난문자를 받았을 때 할 일 차례대로 놓아요.', ['끝까지 읽기', '장소·시간 확인', '할 일 하기', '가족에게 알리기'], { mode: 'order', easy: [0, 2, 3], trap: '읽지 않고 지우기' }, 0.2),
            CHK('재난문자에서 꼭 확인할 것만 표시해요.', '문자에서 확인할 것', ['어떤 재난인지', '어느 장소인지', '언제인지', '할 일이 무엇인지'], ['보낸 시각의 초', '글자 색'], { easy: 3, base: 4 }, 0.2),
            { prompt: '짝에게 문자에 모르는 낱말이 있으면 어떻게 할지 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '재난문자는 ___ 읽고 장소와 시간을 확인해요.', answer: '끝까지' }] },
      }),
      X('wrap.todo-rubric', {
        title: '예시 문자에 할 일 쓰기', method: '예시 문자에 할 일 쓰기', tool: 'rubric-writing', minutes: 7,
        levels: { easy: '문장 틀("나는 ~에서 ~을 하겠다.")을 채우고 기준 2개로 점검한다.', base: '두 문장을 쓰고 무엇을·어디서·누구에게 기준 3개로 점검한다.', challenge: '세 문장을 쓰고 기준 3개로 점검해 고쳐 쓰며, 가족에게 알리는 문장을 넣는다.' },
        wrap: {
          teacher: '"예시 문자 \'오늘 낮 폭염경보, 한낮 바깥 활동을 줄이세요\'를 받았다면 나는 무엇을 할까요?" 기준표를 읽고 쓰게 한다. "조심하겠다"만 쓴 학생에게 "무엇을, 어디서 하고, 누구에게 알릴까요?"라고 묻는다. 집 주소나 전화번호는 쓰지 않게 한다.',
          exitTicket: [
            RUBX('예시 폭염 문자를 받았을 때 할 일을 두 문장으로 쓰고 점검해요.', { topic: '[예시] "오늘 낮 폭염경보, 한낮 바깥 활동을 줄이세요"를 받았을 때 할 일', title: '문자 받고 할 일', starter: '나는 ~에서 ~을 하겠다. 그리고 ~에게 알리겠다.', crit: ['무엇을 할지 썼다', '어디서 할지 썼다', '누구에게 알릴지 썼다'], must: [['가족', '보호자', '부모님']], chars: [20, 160] }),
            { type: 'choice', prompt: '재난문자를 받고 겁이 나요. 바른 행동은?', options: ['아무것도 하지 않는다', '끝까지 읽고 할 일 하나를 한다', '문자를 지운다'], answer: 1, difficulty: 0.2, explain: '문자는 할 일을 알려 줘요. 할 일 하나를 하면 마음도 가라앉아요.' },
            { type: 'mood', prompt: '오늘 공부를 마친 내 마음은 어떤가요?' },
          ],
        },
        worksheet: {
          title: '재난문자, 읽고 하고 알리고',
          items: [
            { type: 'short', prompt: '예시 호우 문자를 받으면 할 일을 한 문장으로 써요.' },
            { type: 'check', prompt: '내 글을 점검해요.', options: ['무엇을', '어디서', '누구에게'] },
          ],
          easy: { note: '문자는 끝까지 읽어요.', items: [{ type: 'draw', prompt: '재난문자를 어른께 보여 드리는 모습을 그려요.' }] },
        },
      }),
      X('wrap.text-web', {
        title: '문자 종류별 할 일 그물', method: '문자 종류별 할 일 정리', tool: 'mindmap', minutes: 7,
        levels: { easy: '카드 2장을 호우·폭염 가지에 붙인다.', base: '카드 6장을 호우·폭염·지진 세 가지에 붙인다.', challenge: '카드 6장과 섞인 틀린 카드를 가려 붙인 뒤, 가지마다 하지 말 일 하나를 말한다.' },
        wrap: {
          teacher: '"재난문자의 종류마다 할 일이 달라요. 가운데 \'재난문자\'에서 정리해 볼까요?" 가지마다 카드를 붙이게 한다. \'물 자주 마시기\'를 지진 가지에 놓은 학생에게 "지진 문자를 받으면 먼저 무엇을 지켜야 할까요?"라고 묻는다.',
          exitTicket: [
            EX('mindmap', SORT('‘재난문자’ 종류 가지마다 할 일 카드를 붙여요.', { topic: '재난문자', slots: ['호우', '폭염', '지진'], groups: { 호우: ['하천·계곡 피하기', '지하차도 피하기'], 폭염: ['물 자주 마시기', '한낮 바깥 활동 줄이기'], 지진: ['머리 보호하기', '멈춘 뒤 넓은 곳으로'] }, easy: [1, 1, 0], traps: ['문자 바로 지우기'] }, 0.2)),
            { type: 'choice', prompt: '호우 문자를 받았을 때 하지 말 일은?', options: ['하천 산책로에 가기', '큰길로 다니기', '가족에게 알리기'], answer: 0, difficulty: 0.2, explain: '호우 때 하천은 물이 금방 불어요.' },
            { type: 'short', prompt: '재난문자를 받으면 가족에게 보낼 문자 한 줄을 써요.' },
          ],
        },
        worksheet: {
          title: '문자 종류별 할 일',
          items: [
            { type: 'table', prompt: '문자 종류마다 할 일을 써요.', columns: ['호우', '폭염', '지진'], cells: [['', '', '']] },
            { type: 'choice', prompt: '지진 문자를 받으면 먼저 할 일은?', options: ['머리 보호하기', '물 마시기', '하천 피하기'], answer: '머리 보호하기' },
          ],
        },
      }),
    );
  }

  // ======== 6학년 · 폭염·한파 건강 위험과 실천 계획 (별표 2 초등 재난안전 3) ========
  {
    const X = mk('heatwave', 6);
    const SUMMER = [['월', 29], ['화', 31], ['수', 34], ['목', 36], ['금', 33]];
    const NOON = {
      title: '폭염 한낮의 축구',
      steps: [
        { text: '폭염경보가 내린 날 점심시간, 친구가 "운동장에서 축구 계속하자!"고 해요.', motif: 'sun',
          good: ['shade', '그늘에서 쉬고 실내 놀이를 하자고 한다', '땀이 식고 몸이 편해졌어요.', [['나와 친구', '열을 피해요', 1]]],
          bad: ['play', '뙤약볕에서 계속 뛴다', '머리가 띵하고 어지러워요.', '폭염 한낮에 오래 뛰면 온열질환이 생길 수 있어요.', [['나와 친구', '어지러워요', -1]]] },
        { text: '그늘에 왔는데 한 친구가 어지럽고 얼굴이 빨개요.', motif: 'leaf',
          good: ['help', '선생님께 알리고 시원한 곳에서 물을 마시게 한다', '친구가 조금씩 괜찮아졌어요.', [['친구', '빨리 도움을 받아요', 1]]],
          bad: ['wait', '쉬면 낫겠지 하고 그냥 둔다', '친구가 더 힘들어해요.', '어지러워하면 바로 어른께 알려요.', [['친구', '더 아파요', -1]]] },
        { text: '내일도 덥대요. 모두가 받아들일 대안은 무엇일까요?', motif: 'star',
          good: ['plan', '아침 시원할 때 짧게 하고 자주 쉬기로 한다', '모두 함께 즐겁게 놀 수 있었어요.', [['우리 반', '안전하게 놀아요', 1]]],
          bad: ['force', '그래도 한낮에 오래 하자고 우긴다', '친구들이 하나둘 지쳐 빠져요.', '더운 날은 시간을 바꾸고 자주 쉬는 대안이 있어요.', [['우리 반', '지쳐요', -1]]] },
      ],
      ending: '한낮을 피하고 자주 쉬는 대안으로 모두 건강하게 놀았어요.',
      reasons: [{ id: 'heat', text: '폭염 한낮 활동은 온열질환을 부른다' }, { id: 'tell', text: '어지러워하면 바로 어른께 알린다' }, { id: 'thirst', text: '목마를 때만 물을 마시면 된다', why: '목마르지 않아도 자주 마셔요.' }, { id: 'strong', text: '튼튼하면 더워도 괜찮다', why: '누구나 온열질환이 생길 수 있어요.' }],
      good: ['heat', 'tell'],
    };
    M.push(
      X('intro.temp-chart', {
        title: '여름 한 주 기온(가상)', method: '여름·겨울 기온 꺾은선 읽기(예시 자료)', tool: 'chart', minutes: 6,
        levels: { easy: '교사와 함께 점 3개(월·수·목)를 읽고 가장 더운 날을 고른다.', base: '점 5개를 읽고 가장 더운 날을 고른다.', challenge: '여름 꺾은선을 읽은 뒤, 겨울 한 주 꺾은선(교사가 보이는 예시)과 견주는 문장을 말한다.' },
        intro: {
          teacher: '"이 꺾은선은 실제 기록이 아니라 수업용 예시 자료예요. 가장 더운 날은 언제일까요?" 시연 단추로 \'목\'이 골라지는 모습을 보인다. "더운 날은 물만 마시면 괜찮아요"라는 말에는 "가장 더운 날 한낮에 오래 뛰면 몸은 어떻게 될까요?"라고 되묻고, 겨울에는 반대로 추위가 몸을 상하게 한다는 점을 잇는다.',
          student: '꺾은선을 보고 가장 더운 날 내가 바꿀 행동 하나를 짝에게 말해 보아요.',
          demo: { tool: 'chart', options: { type: 'line', mode: 'read', title: '여름 한 주 낮 기온(가상 예시)', unit: '°C', xLabel: '요일', yLabel: '기온', from: 25, data: SUMMER, question: '가장 더운 날은?', choices: SUMMER.map((d) => d[0]) }, sequence: [{ pick: 3 }] },
          art: art('a paper line graph climbing like a hill under a big paper sun, with a small paper snowflake waiting at the side', '더위와 추위가 몸에 주는 일', 'sun', 'peach'),
        },
        notes: '그래프 수치는 예시 자료다. 실제 폭염·한파 특보 기준은 기상청 안내로 확인해 말한다. 도전 단계의 겨울 꺾은선은 교사가 같은 모양으로 그려 보인다.',
      }),
      X('intro.body-parts', {
        title: '추위에 먼저 상하는 곳', method: '추위에 먼저 상하기 쉬운 부위 고르기', tool: 'body', minutes: 5,
        levels: { easy: '이름이 보이는 종이 몸에서 교사와 함께 1곳(귀)을 고른다.', base: '3곳(귀·손목·발목)을 스스로 고른다.', challenge: '3곳을 고른 뒤 곳마다 보호 방법(귀마개·장갑·두꺼운 양말)을 짝 지어 말한다.' },
        intro: {
          teacher: '"한파가 오면 몸에서 어디가 먼저 차가워질까요?" 시연 단추로 귀·손목·발목이 표시되는 모습을 보인다. 종이 몸에 없는 손가락·발가락은 자기 손발을 만져 보게 한다. "언 손은 비비면 빨리 녹아요"라는 말에는 "언 살갗을 문지르면 더 상할 수 있어요. 미지근한 물로 천천히 녹여요"라고 되묻는다.',
          student: '추운 날 내 몸에서 가장 먼저 시렸던 곳을 떠올려 보호 방법 하나를 말해 보아요.',
          demo: { tool: 'body', options: { mode: 'parts', parts: ['귀', '코', '목', '손목', '배', '발목'], names: true }, sequence: [{ parts: ['귀', '손목', '발목'] }] },
          art: art('a paper child in a winter coat with soft blue glows on the ears, wrists and ankles, under falling paper snowflakes', '추위는 끝부터', 'snow', 'sky'),
        },
        notes: '종이 몸 교구에는 손가락·발가락 칸이 없다. 손목·발목으로 대신 고르고, 학생이 자기 손발 끝을 짚게 한다.',
      }),
      X('activity.illness-web', {
        title: '온열질환·한랭질환 그물', method: '온열질환·한랭질환 원인-결과 정리', tool: 'mindmap', minutes: 10,
        levels: { easy: '폭염·한파 가지에 질환 카드를 한 장씩 붙인다.', base: '가지마다 질환 카드를 붙이고, 원인 → 몸에 생기는 일 → 막는 행동 차례를 놓는다.', challenge: '차례를 놓은 뒤, 질환마다 빠진 막는 행동을 골라 짝 짓는다.' },
        activity: {
          title: '폭염·한파 원인과 결과 잇기', tool: 'mindmap',
          teacher: '"폭염이 몸에 남기는 병과 한파가 남기는 병은 무엇이 다를까요?" 가지에 카드를 붙이고 원인에서 결과로 이어 말하게 한다. "목마를 때만 물 마시면 돼요"라는 학생에게 "목이 마르다는 건 이미 몸에 물이 모자란 거예요. 미리 자주 마셔요"라고 말해 준다.',
          task: '폭염·한파 가지에 질환을 붙이고, 원인 → 몸에 생기는 일 → 막는 행동을 이어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORT('폭염·한파 가지에 생길 수 있는 병을 붙여요.', { topic: '날씨와 몸', slots: ['폭염', '한파'], groups: { 폭염: ['열사병', '열탈진'], 한파: ['동상', '저체온증'] }, easy: 1 }, 0.2),
            ORDER('폭염이 열사병으로 이어지는 차례를 놓아요.', ['뙤약볕에 오래 있음', '몸에 열이 쌓임', '어지럽고 열이 남', '그늘·물로 막기'], { mode: 'order', easy: [0, 1, 2] }, 0.25),
            { prompt: '병마다 막는 행동을 짝 지어요.', toolOptions: { mode: 'match', topic: '날씨와 몸', slots: [{ id: 'h1', label: '열사병' }, { id: 'h2', label: '동상' }], cards: ['그늘에서 쉬고 물 마시기', '장갑·귀마개 하기', '언 곳 문지르기'] }, target: { match: { h1: '그늘에서 쉬고 물 마시기', h2: '장갑·귀마개 하기' } }, difficulty: 0.25,
              conclude: '폭염은 열사병·열탈진을, 한파는 동상·저체온증을 부를 수 있어요. 물·그늘, 옷 겹쳐 입기로 막아요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '병과 막는 행동을 써요.', columns: ['병', '막는 행동'], cells: [['열사병', ''], ['동상', '']] }] },
      }),
      X('activity.plan-check', {
        title: '나의 폭염·한파 실천 점검표', method: '나의 실천 점검표 만들기', tool: 'kitchen', minutes: 8,
        levels: { easy: '실천 항목 3개를 고른다.', base: '실천 항목 5개를 고르고, 이번 주에 할 항목에 스스로 표시한다.', challenge: '항목을 고르고 표시한 뒤, 이웃을 돕는 항목 하나를 더 정해 말한다.' },
        activity: {
          title: '이번 주 실천 점검표', tool: 'kitchen',
          teacher: '"이번 주에 내가 정말 할 수 있는 실천은 무엇일까요?" 실천 목록에서 바른 실천만 고른 뒤, 이번 주에 할 항목에 스스로 표시하게 한다. \'언 손 비비기\'를 고른 학생에게 "언 곳은 문지르지 않고 미지근한 물로 천천히 녹여요"라고 말해 준다. 혼자 사는 이웃 어르신께 안부를 묻는 것도 실천이 될 수 있다고 덧붙인다.',
          task: '폭염·한파 때 바른 실천을 고르고, 이번 주에 할 항목을 정해 표시해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            CHK('폭염·한파 때 바른 실천만 표시해요.', '폭염·한파 실천', ['물 자주 마시기', '한낮 바깥 활동 줄이기', '얇은 옷 여러 겹 입기', '장갑·귀마개 하기', '언 곳 천천히 녹이기'], ['언 손 세게 비비기', '목마를 때만 물'], { easy: 3, base: 5 }, 0.2),
            SELFK('이번 주에 내가 할 실천에 스스로 표시해요.', '이번 주 내 실천', ['물병 들고 다니기', '쉬는 시간 그늘 찾기', '외출 전 기온 보기', '목도리 챙기기']),
            { prompt: '모둠에서 이웃을 돕는 실천 하나를 정해 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'check', prompt: '이번 주에 할 실천에 표시해요.', options: ['물 자주 마시기', '한낮 활동 줄이기', '옷 여러 겹 입기'] }] },
      }),
      X('wrap.neighbor-rubric', {
        title: '이웃 돕기 계획 쓰기', method: '이웃 돕기 계획 쓰기', tool: 'rubric-writing', minutes: 7,
        levels: { easy: '문장 틀("나는 ~께 ~을 하겠다.")을 채우고 기준 2개로 점검한다.', base: '두 문장을 쓰고 누구·무엇·안전 기준 3개로 점검한다.', challenge: '기준 3개로 점검하고 고쳐 쓴 뒤, 한파 때 계획 하나를 더한다.' },
        wrap: {
          teacher: '"폭염 때 혼자 계신 이웃 어르신을 어떻게 도울 수 있을까요?" 기준표(누구·무엇·안전)를 함께 읽는다. 어린이 혼자 모르는 집에 들어가겠다고 쓴 학생에게 "보호자와 함께하는 게 안전해요. 누구와 할지도 써요"라고 묻는다. 이웃의 이름·주소는 쓰지 않게 한다.',
          exitTicket: [
            RUBX('폭염 때 이웃을 도울 계획을 두 문장으로 쓰고 점검해요.', { topic: '폭염 때 혼자 계신 이웃 어르신을 도울 계획(두 문장)', title: '이웃 돕기 계획', starter: '나는 보호자와 함께 ~께 ~을 하겠다. 왜냐하면 ~', crit: ['누구를 도울지 썼다', '무엇을 할지 썼다', '보호자와 함께 한다고 썼다'], must: [['한파', '추운', '겨울']], chars: [20, 160] }),
            { type: 'choice', prompt: '언 손을 녹이는 바른 방법은?', options: ['세게 문지른다', '미지근한 물로 천천히 녹인다', '뜨거운 난로에 바로 댄다'], answer: 1, difficulty: 0.2, explain: '언 곳은 문지르지 않고 미지근한 물로 천천히 녹여요.' },
            { type: 'mood', prompt: '오늘 공부를 마친 내 마음은 어떤가요?' },
          ],
        },
        worksheet: {
          title: '나와 이웃을 지켜요',
          items: [
            { type: 'short', prompt: '폭염 때 이웃을 도울 방법 하나를 써요.' },
            { type: 'check', prompt: '내 계획을 점검해요.', options: ['누구를', '무엇을', '보호자와 함께'] },
          ],
          easy: { note: '더운 날 물을 자주 마셔요.', items: [{ type: 'draw', prompt: '이웃께 물병을 전하는 모습을 그려요.' }] },
        },
      }),
      X('wrap.noon-fork', {
        title: '폭염 한낮에 축구?', method: '한낮 운동 갈림길', tool: 'dilemma', minutes: 7,
        levels: { easy: '갈림길 1번(계속 뛰기/그늘 쉬기)에서 고르고 근거 한 장을 고른다.', base: '갈림길 2번(어지러운 친구)을 지나 근거를 고른다.', challenge: '갈림길 3번(모두가 받아들일 대안)까지 지나 근거를 모두 고른다.' },
        wrap: {
          teacher: '"친구가 축구를 계속하자고 하면 어떻게 말할까요?" 갈림길을 고르고 결과를 읽게 한다. "튼튼하니까 괜찮아요"라는 학생에게 "온열질환은 누구에게나 생길 수 있어요. 시간을 바꾸면 놀이도 지킬 수 있어요"라고 말해 준다. 마지막에 이번 여름 나의 다짐을 한 줄로 쓰게 한다.',
          exitTicket: [
            EX('dilemma', DIL(Object.assign({}, NOON, { talk: '', conclude: '' }))[0]),
            { type: 'choice', prompt: '폭염 날 물은 언제 마시나요?', options: ['목마를 때만', '목마르지 않아도 자주', '집에 가서 한꺼번에'], answer: 1, difficulty: 0.2, explain: '목마르기 전에 자주 마셔야 몸에 물이 모자라지 않아요.' },
            { type: 'short', prompt: '이번 여름 나의 폭염 다짐 한 줄을 써요.' },
          ],
        },
        worksheet: {
          title: '더운 날은 시간을 바꿔요',
          items: [
            { type: 'choice', prompt: '폭염 한낮에 놀고 싶을 때 좋은 대안은?', options: ['한낮에 오래 뛴다', '시원할 때 짧게 하고 자주 쉰다', '물 없이 참는다'], answer: '시원할 때 짧게 하고 자주 쉰다' },
            { type: 'short', prompt: '친구가 어지러워하면 할 일을 써요.' },
          ],
        },
      }),
    );
  }

  // ======== 분류판(sortboard 글 카드 모드) 모듈 — 주제마다 하나씩 ========
  {
    const F = mk('fire-extinguisher', 5); const Q = mk('quake-plan', 5); const B = mk('burn-degree', 5); const L = mk('landslide-flood', 5);
    const R = mk('school-route-map', 6); const C = mk('collapse-terror', 6); const T = mk('disaster-text', 6); const H = mk('heatwave', 6);
    M.push(
      F('wrap.who-sort', {
        title: '어린이 할 일, 어른 할 일', method: '어린이가 할 일/어른이 할 일 나누기', tool: 'sortboard', minutes: 7,
        levels: { easy: '카드 4장을 어린이·어른 바구니에 나눈다.', base: '카드 5장을 나눈다.', challenge: '카드 7장(넣지 않을 카드 포함)을 나눈 뒤, 둘 다 할 일을 고르고 까닭을 말한다.' },
        wrap: {
          teacher: '"불이 났을 때 어린이가 할 일과 어른이 할 일은 같을까요?" 바구니에 카드를 나누게 한다. \'소화기 쓰기\'를 어린이 바구니에 넣은 학생에게 "혼자 끄는 동안 불은 금방 커져요. 어린이는 알리고 대피하는 것이 먼저예요"라고 말해 준다. 119 신고와 대피는 어린이와 어른 모두 할 일이라는 점을 출구 2번으로 짚는다.',
          exitTicket: [
            EX('sortboard', SORT('불이 났을 때 할 일을 어린이·어른 바구니에 나누어요.', { slots: ['어린이가 할 일', '어른이 할 일'], groups: { '어린이가 할 일': ['"불이야!" 외치기', '비상벨 누르기', '선생님 따라 대피'], '어른이 할 일': ['작은 불에 소화기 쓰기', '남은 사람 확인하기'] }, easy: 2, extra: { '어른이 할 일': ['소방관에게 상황 알리기'] }, traps: ['연기 속에서 물건 챙기기'] }, 0.2)),
            { type: 'choice', prompt: '어린이와 어른 모두 할 일은 무엇인가요?', options: ['안전한 곳에서 119 신고', '혼자 소화기로 끄기', '엘리베이터로 대피'], answer: 0, difficulty: 0.2, explain: '119 신고와 대피는 누구나 해요. 소화기는 어른이 작은 불일 때만 써요.' },
            { type: 'mood', prompt: '오늘 공부를 마친 내 마음은 어떤가요?' },
          ],
        },
        worksheet: {
          title: '어린이는 대피가 먼저',
          items: [
            { type: 'table', prompt: '할 일을 하나씩 써요.', columns: ['어린이가 할 일', '어른이 할 일'], cells: [['', '']] },
            { type: 'choice', prompt: '복도에서 작은 불을 본 어린이가 가장 먼저 할 일은?', options: ['소화기 찾기', '"불이야!" 외치기', '사진 찍기'], answer: '"불이야!" 외치기' },
          ],
          easy: { note: '어린이는 알리고 대피해요.', items: [{ type: 'draw', prompt: '선생님을 따라 대피하는 모습을 그려요.' }] },
        },
      }),
      Q('activity.place-sort', {
        title: '장소마다 다른 지진 행동', method: '장소별 판단 카드 나누기', tool: 'sortboard', minutes: 13,
        levels: { easy: '카드 4장을 교실·바깥 바구니에 나눈다(틀리면 되돌아온다).', base: '카드 6장을 교실·집·바깥 바구니에 나눈다.', challenge: '맞지 않는 카드(엘리베이터 타기·창가로 뛰기)를 골라내고 나눈 뒤, 두 장소에서 할 일이 다른 까닭을 말한다.' },
        activity: {
          title: '장소별 지진 행동 바구니', tool: 'sortboard',
          teacher: '"교실에서 할 일을 운동장에서도 할 수 있을까요? 운동장에는 책상이 없죠." 카드를 바구니에 나누며 장소마다 까닭을 말하게 한다. "어디서든 밖으로 뛰면 돼요"라는 학생에게 "흔들리는 동안 뛰면 넘어지고 물건에 맞을 수 있어요. 먼저 그 자리에서 몸을 보호해요"라고 말해 준다.',
          task: '지진 때 할 일 카드를 장소 바구니에 나누고, 어느 장소에도 맞지 않는 카드는 골라내요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
          items: [
            Object.assign(SORT('지진 때 할 일을 장소 바구니에 나누어요.', { slots: ['교실', '집', '바깥'], groups: { 교실: ['책상 아래 머리 보호', '책상 다리 잡기'], 집: ['탁자 아래로 들어가기', '문 열어 나갈 길 만들기'], 바깥: ['건물·담장에서 떨어지기', '가방으로 머리 가리기'] }, traps: ['엘리베이터 타기', '창가로 뛰기'] }, 0.2), { levels: { easy: { prompt: '지진 때 할 일을 교실·바깥 바구니에 나누어요(카드 4장).', toolOptions: { slots: ['교실', '바깥'], cards: ['책상 아래 머리 보호', '건물·담장에서 떨어지기', '책상 다리 잡기', '가방으로 머리 가리기'] }, target: { sort: { 교실: ['책상 아래 머리 보호', '책상 다리 잡기'], 바깥: ['건물·담장에서 떨어지기', '가방으로 머리 가리기'] } } }, challenge: { prompt: '지진 때 할 일을 장소 바구니에 나누어요(넣지 않을 카드도 있어요).', toolOptions: { cards: ['책상 아래 머리 보호', '엘리베이터 타기', '탁자 아래로 들어가기', '건물·담장에서 떨어지기', '책상 다리 잡기', '문 열어 나갈 길 만들기', '가방으로 머리 가리기', '창가로 뛰기'] }, target: { sort: { 교실: ['책상 아래 머리 보호', '책상 다리 잡기'], 집: ['탁자 아래로 들어가기', '문 열어 나갈 길 만들기'], 바깥: ['건물·담장에서 떨어지기', '가방으로 머리 가리기'] } } } } }),
            SORT('마트와 엘리베이터 안에서 할 일을 나누어요.', { slots: ['마트', '엘리베이터 안'], groups: { 마트: ['진열대에서 떨어지기', '바구니로 머리 가리기'], '엘리베이터 안': ['모든 층 단추 누르기', '열리는 층에서 내리기'] }, easy: 1, traps: ['문 억지로 열기'] }, 0.25, { conclude: '장소마다 할 일은 달라도, 흔들릴 때 몸을 보호하고 멈춘 뒤 넓은 곳에 가는 것은 같아요.' }),
            { prompt: '짝에게 교실과 운동장에서 할 일이 다른 까닭을 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '장소마다 지진 때 할 일을 하나씩 써요.', columns: ['교실', '집', '바깥'], cells: [['', '', '']] }] },
      }),
      B('activity.level-sort', {
        title: '집에서 식히기? 병원·119?', method: '집에서 식히기/병원·119 필요 나누기', tool: 'sortboard', minutes: 10,
        levels: { easy: '카드 4장을 두 바구니에 나눈다(틀리면 되돌아온다).', base: '카드 6장을 두 바구니에 나눈다.', challenge: '카드 7장(넣지 않을 카드 포함)을 나누고 나눈 근거(부위·넓이)를 말한다.' },
        activity: {
          title: '화상 판단 바구니', tool: 'sortboard',
          teacher: '"데었을 때 무엇을 보고 병원에 갈지 정할까요? 어디를, 얼마나 넓게 데었는지 봐요." 카드를 바구니에 나누게 한다. "아프지 않으면 집에서 끝나요"라는 학생에게 "깊게 데면 오히려 덜 아플 수도 있어요. 넓게 데었거나 얼굴·손이면 어른이 병원을 정해요"라고 말해 준다. 어느 경우든 먼저 흐르는 물로 식힌다는 점을 짚는다.',
          task: '화상 장면 카드를 집에서 식히기와 병원·119 필요 바구니에 나누어요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
          items: [
            SORT('화상 장면을 두 바구니에 나누어요.', { slots: ['집에서 식히기', '병원·119 필요'], groups: { '집에서 식히기': ['손등 끝이 살짝 빨개짐', '좁은 곳이 잠깐 화끈'], '병원·119 필요': ['넓게 데임', '얼굴을 데임', '옷이 몸에 붙음', '손 전체를 데임'] }, easy: [1, 3], traps: ['된장 바르면 집에서 끝'] }, 0.2),
            SORT('화상일 때 먼저 할 처치와 하지 말 일을 나누어요.', { slots: ['먼저 할 처치', '하지 말 일'], groups: { '먼저 할 처치': ['흐르는 물로 식히기', '반지·시계 빼기'], '하지 말 일': ['물집 터뜨리기', '된장·치약 바르기'] }, easy: 1 }, 0.2, { conclude: '어떤 화상이든 먼저 흐르는 물로 식히고, 넓거나 얼굴·손이면 어른이 병원·119를 정해요.' }),
            { prompt: '짝에게 카드를 그 바구니에 넣은 근거를 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '얼굴을 데었어요. 어떻게 하나요?', options: ['집에서 그냥 둔다', '식히고 어른이 병원·119를 정한다', '된장을 바른다'], answer: '식히고 어른이 병원·119를 정한다' }] },
        notes: '정도(넓이·깊이) 기준은 수치 없이 다룬다. 최신 기준은 질병관리청·대한화상학회 안내로 교사가 덧붙인다.',
      }),
      L('wrap.sign-sort', {
        title: '징후를 보면 이렇게', method: '징후/행동 짝 나누기', tool: 'sortboard', minutes: 7,
        levels: { easy: '징후 카드 2장을 할 일 바구니에 나눈다.', base: '징후 카드 4장을 나눈다.', challenge: '카드 7장(넣지 않을 카드 포함)을 나누고, 가족에게 먼저 알릴 징후를 고른다.' },
        wrap: {
          teacher: '"이 징후를 보면 어디로 가야 할까요?" 징후 카드를 할 일 바구니(비탈에서 멀리·높은 곳으로)에 나누게 한다. "물이 불면 높은 곳이니 산 위로 가요"라는 학생에게 "산비탈은 흙이 무너질 수 있어요. 비탈에서 멀고 물에 잠기지 않는 곳이에요"라고 말해 준다.',
          exitTicket: [
            EX('sortboard', SORT('징후 카드를 할 일 바구니에 나누어요.', { slots: ['비탈에서 멀리 피해요', '높은 곳으로 가요'], groups: { '비탈에서 멀리 피해요': ['돌이 굴러 내려요', '비탈에서 물이 솟아요'], '높은 곳으로 가요': ['냇물이 흙탕물로 불어요', '지하차도에 물이 차요'] }, easy: 1, extra: { '비탈에서 멀리 피해요': ['나무가 기울어요'], '높은 곳으로 가요': ['산책로가 물에 잠겨요'] }, traps: ['무지개가 떴어요'] }, 0.2)),
            { type: 'choice', prompt: '집 뒤 비탈에서 돌이 굴러 내려요. 가족에게 할 말은?', options: ['"비탈에서 돌이 굴러요, 피해요!"', '"구경하러 가요"', '"비 그치면 괜찮아요"'], answer: 0, difficulty: 0.2, explain: '산사태 징후는 바로 가족에게 알리고 함께 피해요.' },
            { type: 'short', prompt: '산사태 징후 하나와 그것을 보면 할 일을 써요.' },
          ],
        },
        worksheet: {
          title: '징후를 보면 피하고 알려요',
          items: [
            { type: 'table', prompt: '징후와 할 일을 짝 지어 써요.', columns: ['징후', '할 일'], cells: [['돌이 굴러 내려요', ''], ['냇물이 불어요', '']] },
            { type: 'choice', prompt: '비탈에서 물이 솟으면?', options: ['가까이 가서 본다', '비탈에서 멀리 피한다', '물을 막는다'], answer: '비탈에서 멀리 피한다' },
          ],
        },
      }),
      R('activity.route-sort', {
        title: '좋은 경로, 피할 경로', method: '경로 계획 점검 항목 나누기', tool: 'sortboard', minutes: 13,
        levels: { easy: '카드 4장을 두 바구니에 나눈다(틀리면 되돌아온다).', base: '카드 6장을 두 바구니에 나눈다.', challenge: '카드 8장(넣지 않을 카드 포함)을 나누고 우리 학교 실제 계단·복도와 이어 말한다.' },
        activity: {
          title: '대피 경로 점검 바구니', tool: 'sortboard',
          teacher: '"대피 길로 좋은 곳과 피할 곳을 나누어 볼까요?" 카드를 바구니에 나눈 뒤 우리 학교 어디가 그런지 떠올리게 한다. "엘리베이터는 가까우니 좋은 경로예요"라는 학생에게 "불이 나면 멈추거나 연기가 들어올 수 있어요. 가까워도 피해요"라고 말해 준다. 복도에 물건이 쌓인 곳을 찾으면 담임에게 알리자고 한다.',
          task: '경로 카드를 좋은 경로와 피할 경로로 나누고, 1차·2차 경로 점검 항목을 나누어요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
          items: [
            SORT('경로 카드를 좋은 경로와 피할 경로 바구니에 나누어요.', { slots: ['좋은 경로', '피할 경로'], groups: { '좋은 경로': ['연기 없는 계단', '넓은 복도', '바깥으로 열린 비상구'], '피할 경로': ['엘리베이터', '잠긴 문', '물건 쌓인 좁은 복도'] }, extra: { '피할 경로': ['연기 가득한 계단'] }, traps: ['교실 창문'] }, 0.2),
            SORT('1차·2차 경로를 위해 점검할 것을 나누어요.', { slots: ['1차 경로 점검', '2차 경로 점검'], groups: { '1차 경로 점검': ['가장 가까운 계단 확인', '비상구 표시 확인'], '2차 경로 점검': ['반대쪽 계단 확인', '막혔을 때 갈 길 정하기'] }, easy: 1 }, 0.25, { conclude: '좋은 경로는 연기 없는 계단·넓은 복도이고, 1차가 막히면 미리 정한 2차 경로로 가요.' }),
            { prompt: '모둠에서 우리 학교의 좋은 경로와 피할 경로를 실제 이름으로 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '우리 학교에서 찾아 써요.', columns: ['좋은 경로', '피할 경로'], cells: [['', '']] }] },
      }),
      C('activity.sign-sort', {
        title: '붕괴 징후와 테러 의심', method: '붕괴 징후/테러 의심 상황 나누기', tool: 'sortboard', minutes: 13,
        levels: { easy: '카드 4장을 두 바구니에 나눈다(틀리면 되돌아온다).', base: '카드 6장을 두 바구니에 나눈다.', challenge: '카드 7장(넣지 않을 카드 포함)을 나누고, 두 바구니 공통 행동을 찾아 말한다.' },
        activity: {
          title: '붕괴·테러 의심 바구니', tool: 'sortboard',
          teacher: '"이 카드는 건물이 무너질 신호일까요, 누군가 놓고 간 위험한 물건일까요?" 카드를 바구니에 나누게 한다. "주인 없는 가방은 열어 보면 알아요"라는 학생에게 "확인은 경찰이 해요. 우리는 만지지 않고 떨어져서 알려요"라고 말해 준다. 두 경우 모두 멀리 떨어지고 어른·112·119에 알린다는 공통점을 찾게 한다.',
          task: '상황 카드를 붕괴 징후와 테러 의심 바구니에 나누고, 보았을 때 할 일도 나누어요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
          items: [
            SORT('상황 카드를 붕괴 징후와 테러 의심 바구니에 나누어요.', { slots: ['붕괴 징후', '테러 의심 상황'], groups: { '붕괴 징후': ['벽·기둥의 큰 금', '문이 잘 안 닫힘', '우두둑 소리'], '테러 의심 상황': ['오래 주인 없는 가방', '이상한 냄새 나는 상자', '전선이 삐져나온 물건'] }, traps: ['새로 칠한 벽'] }, 0.2),
            SORT('보았을 때 할 일을 바구니에 나누어요.', { slots: ['붕괴 징후를 보면', '수상한 물건을 보면'], groups: { '붕괴 징후를 보면': ['어른께 알리고 밖으로', '계단으로 나가기'], '수상한 물건을 보면': ['만지지 않기', '멀리 떨어져 112'] }, easy: 1 }, 0.25, { conclude: '붕괴 징후든 수상한 물건이든 멀리 떨어지고 어른·112·119에 알려요.' }),
            { prompt: '모둠에서 두 바구니에 공통으로 할 일을 찾아 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '벽의 큰 금과 주인 없는 가방, 공통으로 할 일은?', options: ['멀리 떨어져 알리기', '직접 확인하기', '사진 찍기'], answer: '멀리 떨어져 알리기' }] },
      }),
      T('activity.type-sort', {
        title: '재난문자 종류 나누기', method: '재난문자 종류 나누기', tool: 'sortboard', minutes: 10,
        levels: { easy: '예시 문자 카드 3장을 호우·폭염·지진 바구니에 한 장씩 나눈다.', base: '예시 문자 카드 6장을 나눈다.', challenge: '카드 7장(재난문자가 아닌 카드 포함)을 나누고, 문자 속 장소·시간 낱말을 나눈다.' },
        activity: {
          title: '예시 재난문자 바구니', tool: 'sortboard',
          teacher: '"이 문자는 어떤 재난을 알리는 걸까요? 낱말 하나로 알 수 있어요." 교사가 만든 예시 문자 카드를 바구니에 나누게 한다. \'물 자주 마시기\'를 호우에 넣은 학생에게 "비가 많이 올 때보다 더울 때 하는 일이에요"라고 말해 준다. 이어 문자 속 장소·시간 낱말을 찾게 한다.',
          task: '예시 재난문자 카드를 호우·폭염·지진 바구니에 나누고, 장소·시간 낱말을 찾아요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
          items: [
            SORT('예시 재난문자 카드를 종류 바구니에 나누어요.', { slots: ['호우', '폭염', '지진'], groups: { 호우: ['하천 산책로 출입 삼가', '지하차도 통행 주의'], 폭염: ['한낮 바깥 활동 자제', '물을 자주 마시세요'], 지진: ['흔들림 멈추면 넓은 곳', '떨어지는 물건 주의'] }, easy: 1, traps: ['내일 급식 메뉴 안내'] }, 0.2),
            SORT('문자 속 낱말을 장소와 시간 바구니에 나누어요.', { slots: ['장소 낱말', '시간 낱말'], groups: { '장소 낱말': ['하천 산책로', '지하차도'], '시간 낱말': ['오늘 오후', '내일 새벽'] }, easy: 1 }, 0.25, { conclude: '재난문자는 종류를 보고, 장소와 시간 낱말을 찾아 할 일을 정해요.' }),
            { prompt: '짝과 예시 문자 하나를 골라 지금 할 일을 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '예시 문자 "오늘 오후 호우경보, 하천 산책로 출입 삼가"에서 장소 낱말을 써요.' }] },
        notes: '예시 문자는 지어낸 것이다.',
      }),
      H('activity.act-sort', {
        title: '폭염 실천, 한파 실천', method: '폭염/한파 실천 나누기', tool: 'sortboard', minutes: 10,
        levels: { easy: '카드 4장을 폭염·한파 바구니에 나눈다(틀리면 되돌아온다).', base: '카드 6장을 나눈다.', challenge: '카드 8장(잘못된 실천 2장 포함)을 나누고, 둘 다에 맞는 실천을 따로 나눈다.' },
        activity: {
          title: '폭염·한파 실천 바구니', tool: 'sortboard',
          teacher: '"이 실천은 더운 날 할까요, 추운 날 할까요?" 카드를 바구니에 나누게 한다. \'언 손 세게 비비기\'를 한파에 넣은 학생에게 "언 살갗은 문지르면 더 상해요. 미지근한 물로 천천히 녹여요"라고 말해 준다. 날씨 소식 미리 보기처럼 둘 다에 맞는 실천도 있다는 점을 두 번째 문항으로 짚는다.',
          task: '실천 카드를 폭염과 한파 바구니에 나누고, 둘 다에 맞는 실천도 찾아요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
          items: [
            SORT('실천 카드를 폭염과 한파 바구니에 나누어요.', { slots: ['폭염', '한파'], groups: { 폭염: ['물 자주 마시기', '한낮 활동 피하기', '그늘에서 쉬기'], 한파: ['얇은 옷 겹쳐 입기', '언 곳 미지근한 물로 천천히', '장갑·귀마개 하기'] }, traps: ['언 손 세게 비비기', '목마를 때만 물 마시기'] }, 0.2),
            SORT('실천 카드를 폭염·한파·둘 다 바구니에 나누어요.', { slots: ['폭염', '한파', '둘 다'], groups: { 폭염: ['선풍기 아래 쉬기'], 한파: ['목도리 두르기'], '둘 다': ['날씨 소식 미리 보기', '혼자 계신 이웃 안부'] }, easy: [1, 1, 1] }, 0.25, { conclude: '폭염엔 물·그늘, 한파엔 옷 겹쳐 입기. 날씨 소식과 이웃 안부는 둘 다 챙겨요.' }),
            { prompt: '모둠에서 우리 집에서 바꿀 실천 하나씩을 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '실천을 하나씩 써요.', columns: ['폭염', '한파'], cells: [['', '']] }] },
      }),
    );
  }

  PaperLessons.registerModules(M);
})();
