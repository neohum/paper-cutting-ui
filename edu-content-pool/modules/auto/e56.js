/* 창체 자율·자치활동 — 초5-6 모듈 내용(edu-module.v1). 형식·작성 규칙: MODULES_BUILD.md, 계획: framework/events-auto.json 의 auto 초5-6.
 * 근거: 교육부 고시 제2022-33호 [별책 40] 창의적 체험활동 교육과정 <표 2>(p.8)·<표 5>(p.13-14)·p.15 —
 *       자율활동(주제 탐구·적응 및 개척·프로젝트형 봉사), 자치활동(기본생활습관 형성·관계 형성 및 소통·공동체 자치) — sources/changche/research-changche.md.
 * 초5-6 기준: 원인과 결과 잇기, 자기 점검표, 작은 실천 계획, 간단한 자료(그래프) 읽기, 모둠 토의, 갈림길 상황(dilemma)·기준표 글쓰기(rubric-writing).
 *   학급·학생 자치·봉사·탐구 장면은 모두 가상 학교의 지어낸 장면이다(가명 한두 글자). 학생 자신의 가정·성적·친구 관계를 묻거나 채점하지 않는다.
 *   특정 학교·지역·단체 이름을 쓰지 않는다(협력 기관은 '주민센터'처럼 종류 이름만). 선거·회의는 학급 자치 수준이며 정당·정치인을 다루지 않는다.
 *   그래프 수치·예산 값은 모두 수업용 가상 값이다(화면에 '가상'이라고 적는다). 시간 값(공부 20분 등)은 '우리 반 약속'이다.
 * 주제 12개(5학년 6 · 6학년 6) × 도입 2 · 활동 4 · 정리 2 = 계획 모듈 96개 전부. 추천 조합은 체계도 sequences(학년마다 12차시).
 *
 * 사람 확인: 근거 파일(research-changche.md)에는 활동 영역 이름만 있고 아래 내용은 없다. 일반 교육 내용으로 썼으니 사람이 확인한다.
 *   - g5-self(선거) 전체: 보통·평등·직접·비밀 선거 원칙의 뜻과 장면, 선거 절차(후보 등록→선거 운동→투표→개표→발표) — 중앙선거관리위원회 선거교육 자료·초등 사회 교과서로 확인.
 *   - g6-adapt.intro.diff: 초등 한 시간 40분·중학교 45분 — 초·중등학교 교육과정 총론(교육부 고시) 편제·시간 배당 기준으로 확인.
 *   - g6-adapt.activity.change: 중학교에서 달라지는 점(교과 교실·과목별 선생님·수행평가) — 시·도교육청 초6 중학교 진학 안내 자료로 확인(학교마다 다름).
 *   - g6-habit.activity.timer / g6-habit.activity.cycle: '20분 공부·5분 쉬기'와 계획·실행·점검 흐름 — 연습용 우리 반 약속 값이다(근거 수치 아님).
 *   - g6-rel.activity.steps / g6-rel.wrap.role / g6-rel.activity.dilemma: 또래 조정 절차(규칙 안내→각자 이야기→마음 확인→해결 찾기→약속) — 교육부·시도교육청 학교폭력 예방 또래 조정 안내 자료로 확인.
 *   - g6-self.activity.route / g6-self.activity.write: 학급 회의→학생 자치회→학교→답변 건의 절차와 건의서 꼴 — 학교마다 학생자치 규정이 다르므로 그 학교 규정으로 확인.
 *   - g5-rel.activity.debate: 찬반 토론 순서(주장→반론→정리) — 우리 반 토론 약속으로 적었다.
 *   - g6-serve.activity.partner: 주민센터·복지관·도서관·보건소가 할 수 있는 일 — 지역마다 다르므로 협력 기관에 미리 확인.
 */
(function () {
  const M = [];
  // 모듈 머리: mk('g5-adapt', 5)('intro.graph', {...}) → id·type·topic·grades 를 채운다
  const mk = (topic, grade) => (suffix, o) => Object.assign({
    id: `auto.e56.${topic}.${suffix}`, schema: 'edu-module.v1', type: suffix.split('.')[0],
    domain: 'auto', band: '초5-6', topic: `auto.e56.${topic}`, grades: [grade],
  }, o);
  const art = (draw, banner, motif = 'star', color = 'buttercup') => ({ draw, banner, extra: [{ motif, x: 300, y: 96, color }] });
  const cut = (p) => String(p).replace(/[.?]$/, '');
  const C = (id, text) => ({ id, text });
  // 정리 출구 질문: 활동 문항 모양을 출구 교구 질문으로 바꾼다
  const EX = (tool, it) => Object.assign({ type: 'tool', tool, options: it.toolOptions, prompt: it.prompt, target: it.target, difficulty: it.difficulty ?? 0.15 }, it.levels ? { levels: it.levels } : {});

  // ---- 나누기(sortboard 글 카드·mindmap sort) ----
  // groups = { 칸: [카드…] }. 쉬움 = 칸마다 앞 easy장, 도전 = extra 카드 + 함정 카드(어느 칸에도 넣지 않음)
  const SORT = (prompt, { topic, slots, groups, easy = 1, extra = {}, traps = [] }, d, more) => {
    const inter = (g) => { const out = []; const n = Math.max(...slots.map((s) => (g[s] || []).length)); for (let i = 0; i < n; i++) for (const s of slots) if ((g[s] || [])[i]) out.push(g[s][i]); return out; };
    const take = (n) => Object.fromEntries(slots.map((s, i) => [s, groups[s].slice(0, Array.isArray(n) ? n[i] : n)]));
    const full = Object.fromEntries(slots.map((s) => [s, [...groups[s], ...(extra[s] || [])]]));
    const base = Object.assign(topic ? { topic } : {}, { slots, cards: inter(groups) });
    const ez = take(easy); const fullCards = inter(full); fullCards.splice(1, 0, ...traps.slice(0, 1)); if (traps[1]) fullCards.push(traps[1]);
    const count = (g) => Object.values(g).reduce((a, b) => a + b.length, 0);
    const lv = { easy: { prompt: `${cut(prompt)}(카드 ${count(ez)}장).`, toolOptions: { cards: inter(ez) }, target: { sort: ez } } };
    if (Object.keys(extra).length || traps.length) lv.challenge = { prompt: `${cut(prompt)}(카드 ${fullCards.length}장${traps.length ? ', 넣지 않을 카드도 있어요' : ''}).`, toolOptions: { cards: fullCards }, target: { sort: full } };
    return Object.assign({ prompt, toolOptions: base, target: { sort: groups }, difficulty: d, levels: lv }, more);
  };
  // 생각그물 가지 수 단계(mindmap sort): pairs = [[가지, [카드…]]…], n = { easy, base, challenge } 가지 수
  const BRANCH = (prompt, topic, pairs, n, traps = [], d, more) => {
    const opt = (k, tr) => {
      const p = pairs.slice(0, k); const cards = []; const m = Math.max(...p.map((x) => x[1].length));
      for (let i = 0; i < m; i++) for (const [, c] of p) if (c[i]) cards.push(c[i]);
      if (tr) cards.splice(1, 0, ...tr);
      return { topic, slots: p.map((x) => x[0]), cards };
    };
    const tg = (k) => ({ sort: Object.fromEntries(pairs.slice(0, k)) });
    return Object.assign({ prompt, toolOptions: opt(n.base), target: tg(n.base), difficulty: d, levels: {
      easy: { prompt: `${cut(prompt)}(가지 ${n.easy}개).`, toolOptions: opt(n.easy), target: tg(n.easy) },
      challenge: { prompt: `${cut(prompt)}(가지 ${n.challenge}개${traps.length ? ', 넣지 않을 카드도 있어요' : ''}).`, toolOptions: opt(n.challenge, traps.length ? traps : null), target: tg(n.challenge) },
    } }, more);
  };
  // 차례(timeline order): base·easy·challenge = 바른 차례 카드 글 목록. trap = 도전에서 끼우는, 카드 칸에 남겨야 하는 카드
  const SEQ = (prompt, base, easy, challenge, { axis, trap, chPrompt } = {}, d, more) => {
    const mix = (l) => (l.length < 3 ? [l[1], l[0]] : [l[2], l[0], ...l.slice(3), l[1]]);
    const o = (l, ex = []) => Object.assign({ mode: 'order', slots: l.length, cards: [...mix(l), ...ex] }, axis ? { axis } : {});
    return Object.assign({ prompt, toolOptions: o(base), target: { order: base }, difficulty: d, levels: {
      easy: { prompt: `${cut(prompt)}(카드 ${easy.length}장).`, toolOptions: o(easy), target: { order: easy } },
      challenge: { prompt: chPrompt || `${cut(prompt)}(카드 ${challenge.length}장${trap ? ', 넣지 않을 카드도 있어요' : ''}).`, toolOptions: o(challenge, trap ? [trap] : []), target: { order: challenge } },
    } }, more);
  };
  // 짝 잇기(emotion match): pairs = [[장면 칸 글, 카드 글]…]. 쉬움·기본·도전 짝 수, 도전에 함정 카드
  const MATCH = (prompt, pairs, { easy = 2, base = 3, challenge = 4, traps = [] } = {}, d, more) => {
    const sl = pairs.map(([label], i) => ({ id: `s${i + 1}`, label }));
    const cards = (k, tr) => { const c = pairs.slice(0, k).map((p) => p[1]); return [...c.slice(1), c[0], ...(tr || [])]; };
    const tg = (k) => ({ match: Object.fromEntries(pairs.slice(0, k).map(([, c], i) => [`s${i + 1}`, c])) });
    const op = (k, tr) => ({ slots: sl.slice(0, k), cards: cards(k, tr) });
    return Object.assign({ prompt, toolOptions: op(base), target: tg(base), difficulty: d, levels: {
      easy: { prompt: `${cut(prompt)}(${easy}짝).`, toolOptions: op(easy), target: tg(easy) },
      challenge: { prompt: `${cut(prompt)}(${challenge}짝${traps.length ? ', 남는 카드도 있어요' : ''}).`, toolOptions: op(challenge, traps), target: tg(challenge) },
    } }, more);
  };

  // ---- 갈림길(dilemma) ----
  // steps[i] = { text, ask?, motif?, good: [id, 글, 결과, [[누구, 영향, tone]…]], bad: [id, 글, 결과, 틀렸을 때 한 문장, [[…]], 끝 글?] }
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
  // 갈림길 활동 문항 셋: ① 알맞은 길 + 근거(쉬움 1번·기본 2번·도전 3번 갈림) ② 다른 길 끝까지 가 보고 견주기 ③ 모둠 토의(말하기)
  const DIL = ({ steps, ending, reasons, good, title, talk, conclude, word }) => {
    const opt = (n) => ({ title, scene: TREE(steps, n, ending), reasons });
    return [
      { prompt: `‘${title}’ 갈림길마다 ${word} 선택을 고르고, 끝에서 근거를 골라요.`, toolOptions: opt(2), target: { path: [goodPath(steps, 2)], reasons: good.slice(0, 2), some: true }, difficulty: 0.3,
        levels: {
          easy: { prompt: `‘${title}’ 갈림길 한 번에서 ${word} 선택을 고르고 근거를 골라요.`, toolOptions: opt(1), target: { path: [goodPath(steps, 1)], reasons: [good[0]], some: true } },
          challenge: { prompt: `‘${title}’ 갈림길 세 번을 지나 끝까지 가고, 알맞은 근거를 모두 골라요.`, toolOptions: opt(3), target: { path: [goodPath(steps, 3)], reasons: good } },
        } },
      { prompt: `‘${title}’에서 되돌아가 다른 선택도 끝까지 가 보고 결과를 견주어요.`, toolOptions: opt(2), target: { explore: 2 }, difficulty: 0.25,
        levels: { easy: { toolOptions: opt(1) }, challenge: { prompt: `‘${title}’에서 서로 다른 끝 장면 세 곳을 가 보고 결과를 견주어요.`, toolOptions: opt(3), target: { explore: 3 } } }, conclude },
      { prompt: talk, free: true, talk: true, toolOptions: opt(2) },
    ];
  };

  // ---- 기준표 글쓰기(rubric-writing) ----
  // 쉬움 = 기준 2개 + 문장 틀, 기본 = 기준 base개, 도전 = 기준 base개 + ch.crit + 꼭 넣을 낱말(must)
  const RUB = (prompt, { topic, starter, crit, base = 3, ch, must, chars = [20, 160], sentences, title, sample }, d, more) => {
    const tg = (list, c, extra) => Object.assign({ selfCheck: list, chars: c }, sentences ? { sentences } : {}, extra || {});
    const chT = tg([...crit.slice(0, base), ch.crit], [chars[0] + 10, chars[1] + 40], must ? { mustInclude: must } : {});
    if (chT.sentences) chT.sentences = [chT.sentences[0], chT.sentences[1] + 1];
    return Object.assign({
      prompt, toolOptions: Object.assign({ topic, minChars: chars[0], maxChars: chars[1] + 40, title }, sample ? { sample } : {}), target: tg(crit.slice(0, base), chars), difficulty: d,
      levels: {
        easy: { prompt: `${cut(prompt)}(문장 틀을 써도 돼요).`, toolOptions: { starter }, target: { selfCheck: crit.slice(0, 2), chars: [Math.max(10, chars[0] - 10), chars[1]] } },
        challenge: { prompt: ch.prompt, target: chT },
      },
    }, more);
  };
  // 스스로 점검(timer selfCheck): list = 점검 칸 글, n = [쉬움, 기본, 도전] 칸 수
  const SELF = (prompt, title, list, n = [2, 3, 4], d = 0.1, more) => Object.assign({
    prompt, toolOptions: { title }, target: { selfCheck: list.slice(0, n[1]) }, difficulty: d,
    levels: { easy: { prompt: `${cut(prompt)}(${n[0]}칸).`, target: { selfCheck: list.slice(0, n[0]) } }, challenge: { prompt: `${cut(prompt)}(${n[2]}칸).`, target: { selfCheck: list.slice(0, n[2]) } } },
  }, more);

  // ======== 5학년 · 고학년 마음 변화와 새 반 관계 (<표 2> 자율활동 — 적응 및 개척 활동, <표 5> 사춘기 적응) ========
  {
    const X = mk('g5-adapt', 5);
    const MOOD = [['아침', 3], ['1교시', 4], ['점심 전', 2], ['점심 뒤', 5], ['하교', 4]];
    M.push(
      X('intro.graph', {
        title: '하루 마음 꺾은선 읽기', method: '하루 마음 변화 꺾은선 읽기', tool: 'chart', minutes: 6,
        levels: { easy: '교사가 점 3개(아침·점심 전·점심 뒤)만 짚으며 오르내림을 함께 읽는다.', base: '점 5개를 모두 읽고 가장 크게 바뀐 구간을 스스로 고른다.', challenge: '가장 크게 바뀐 구간에서 마음이 바뀐 까닭(배고픔·쉬는 시간 등)을 어림해 말한다.' },
        intro: {
          teacher: '"이 그래프는 가상의 친구 \'솔\'이 하루 동안 적은 마음 점수예요. 언제 가장 크게 바뀌었을까요?" 시연 단추로 점심 전→점심 뒤 구간이 골라지는 모습을 보인다. "마음이 이렇게 오르내리면 솔이 이상한 거예요"라는 말이 나오면 "배가 고프거나 잠이 모자라면 누구나 마음이 바뀌어요. 고학년이 되면 더 자주 그래요"라고 짚는다.',
          student: '그래프에서 마음 점수가 가장 크게 바뀐 때를 찾아보고, 왜 그랬을지 어림해 보아요.',
          demo: { tool: 'chart', options: { type: 'line', mode: 'read', title: '솔의 하루 마음 점수(가상)', unit: '점', data: MOOD, max: 5, question: '가장 크게 바뀐 때는?', choices: ['아침→1교시', '1교시→점심 전', '점심 전→점심 뒤', '점심 뒤→하교'], showValues: true }, sequence: [{ pick: 2 }] },
          art: art('a paper line graph pinned on a classroom board with a small paper child pointing at the highest jump between two dots', '마음은 하루에도 바뀌어요', 'cloud', 'sky'),
        },
        notes: '그래프는 가상 인물의 수업용 자료다. 학생의 실제 마음 점수를 걷거나 발표시키지 않는다.',
      }),
      X('intro.circle', {
        title: '새 반 쉬는 시간 장면 보기', method: '새 반 쉬는 시간 장면 보기', tool: 'wordcards', minutes: 6,
        levels: { easy: '교사가 보기 2개(혼자 앉은 친구·공놀이 무리)만 짚어 고르게 한다.', base: '보기 3개 넘게 있는 장면에서 눈에 띄는 것을 스스로 고른다.', challenge: '고른 장면 속 친구의 마음을 어림해 한 문장으로 말한다.' },
        intro: {
          teacher: '"새 반 첫 주 쉬는 시간 그림이에요. 무엇이 가장 먼저 눈에 띄나요?" 시연 단추로 \'혼자 앉은 친구\' 카드가 바구니에 담기는 모습을 보인다. "혼자 있는 건 그 친구가 좋아서예요"라는 말이 나오면 "그럴 수도 있어요. 그런데 끼고 싶은데 말을 못 꺼낸 것이라면요? 물어보면 알 수 있어요"라고 되묻는다.',
          student: '그림에서 가장 먼저 눈에 띄는 장면 하나를 고르고, 그 친구라면 어떤 마음일지 생각해 보아요.',
          demo: { tool: 'wordcards', options: { mode: 'pick', basket: '눈에 띄는 장면', cards: [C('alone', '혼자 앉은 친구'), C('ball', '공놀이 하는 무리'), C('sky', '창밖 구름'), C('game', '보드게임 모둠'), C('book', '책 읽는 친구')], shuffle: false }, sequence: [{ pick: ['alone'] }] },
          art: art('a paper classroom at break time with groups of paper children playing and one child sitting alone by the window', '쉬는 시간, 무엇이 보이나요?', 'house', 'peach'),
        },
      }),
      X('activity.cause', {
        title: '마음 변화 원인·결과 잇기', method: '마음 변화 원인·결과 잇기', tool: 'emotion', minutes: 14,
        levels: { easy: '원인 칸 2개에 마음 카드를 하나씩 잇는다.', base: '원인 칸 3개에 마음 카드를 잇는다.', challenge: '원인 칸 4개에 잇고, 남는 마음 카드(함정)는 바구니에 두지 않는다.' },
        activity: {
          title: '마음이 바뀐 원인과 결과 잇기', tool: 'emotion',
          teacher: '"잠이 모자란 날 아침에는 마음이 어떨까요?" 원인 칸을 소리 내어 읽고 어울리는 마음 카드를 잇게 한다. "마음이 갑자기 바뀌는 건 내가 이상해서예요"라는 학생에게 "원인을 찾아보니 잠·배고픔·일이 있었죠? 원인이 있으면 다룰 방법도 있어요"라고 말해 준다.',
          task: '가상 친구에게 생긴 일(원인)과 그때 생긴 마음(결과)을 이어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
          items: [
            MATCH('생긴 일과 그때의 마음을 이어요.', [['잠이 모자란 아침', '짜증'], ['발표를 잘 마쳤다', '뿌듯함'], ['내 말을 끊고 지나갔다', '속상함'], ['내일 처음 해 보는 일', '걱정']], { traps: ['신남'] }, 0.2),
            MATCH('몸과 생활이 바뀔 때의 마음을 이어요.', [['키가 부쩍 자랐다', '어색함'], ['좋아하는 노래를 들었다', '편안함'], ['내 생각이 모둠에서 뽑혔다', '신남'], ['기다린 약속이 미뤄졌다', '실망']], { traps: ['화남'] }, 0.25, { conclude: '마음은 잠·몸·생긴 일 때문에 바뀌어요. 원인을 알면 다룰 수 있어요.' }),
            { prompt: '짝과 "마음이 자주 바뀌는 것은 이상할까?"를 이야기해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '고학년이 되며 마음이 자주 바뀌는 것은 ___ 변화예요.', answer: '자연스러운' }] },
      }),
      X('activity.ways', {
        title: '마음 다루기 자기 점검표', method: '마음 다루기 자기 점검표', tool: 'timer', minutes: 13,
        levels: { easy: '마음 다루기 방법 3칸을 읽고 표시한다.', base: '방법 5칸을 읽고 표시한 뒤 숨 고르기 타이머를 맞춘다.', challenge: '5칸에 더해 \'새로 해 볼 방법과 이유 말하기\' 칸까지 표시하고 짝에게 이유를 말한다.' },
        activity: {
          title: '마음 다루기 방법 점검과 숨 고르기', tool: 'timer',
          teacher: '"마음이 출렁일 때 쓸 수 있는 방법을 하나씩 읽어 볼까요?" 점검 칸은 \'알고 해 볼 수 있는 방법\'에 표시하는 것이지 잘하고 못함을 매기는 것이 아니라고 먼저 말한다. "화가 나면 참기만 하면 돼요"라는 학생에게 "꾹 참기만 하면 마음이 어디로 갈까요? 말로 꺼내거나 몸을 쉬게 하는 방법도 있어요"라고 묻는다.',
          task: '마음 다루기 방법을 읽고 표시한 뒤, 숨 고르기 시간을 맞춰 함께 해 봐요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            SELF('해 볼 수 있는 마음 다루기 방법에 표시해요.', '마음 다루기 방법', ['천천히 숨 고르기', '마음 이름 붙이기', '믿는 어른에게 말하기', '잠깐 걷거나 물 마시기', '마음 일기 한 줄 쓰기', '새로 해 볼 방법 이유 말하기'], [3, 5, 6], 0.1),
            { prompt: '숨 고르기 30초, 쉬기 10초를 3번 하도록 맞춰요(우리 반 연습값).', toolOptions: { title: '숨 고르기(우리 반 약속)', labels: ['숨 고르기', '쉬기'], plan: { work: 10, rest: 5, rounds: 1 } }, target: { plan: { work: 30, rest: 10, rounds: 3 } }, difficulty: 0.2,
              levels: { easy: { prompt: '숨 고르기 30초를 1번 하도록 맞춰요(우리 반 연습값).', target: { plan: { work: 30, rounds: 1 } } } } },
            { prompt: '숨 고르기 전과 한 뒤의 내 마음 점수(1~5)를 적어요.', toolOptions: { title: '숨 고르기 기록', fields: [{ label: '하기 전', unit: '점' }, { label: '한 뒤', unit: '점' }] }, target: { records: true }, difficulty: 0.1, conclude: '마음이 출렁일 때 쓸 방법을 미리 정해 두면 덜 흔들려요.' },
          ],
        },
        worksheet: { items: [{ type: 'check', prompt: '이번 주에 해 볼 마음 다루기 방법에 표시해요.', options: ['천천히 숨 고르기', '마음 이름 붙이기', '믿는 어른에게 말하기', '잠깐 걷기'] }] },
        notes: '마음 점수 기록은 학생 본인만 보는 것이다. 걷거나 발표시키지 않는다.',
      }),
      X('activity.dilemma', {
        title: '모둠에 끼지 못한 친구', method: '갈림길: 모둠에 끼지 못한 친구, 어떻게 할까', tool: 'dilemma', minutes: 14,
        levels: { easy: '갈림 1번에서 고르고 근거 한 장을 고른다.', base: '갈림 2번(선생님께 여쭙기 → 모둠 친구 설득)을 지나 근거를 고른다.', challenge: '갈림 3번(역할 나누기까지)을 지나 알맞은 근거를 모두 고르고, 다른 길의 결과와 견준다.' },
        activity: {
          title: '갈림길: 모둠에 끼지 못한 친구', tool: 'dilemma',
          teacher: '"우리 모둠은 다 찼는데 윤이 혼자 서 있어요. 어떻게 할까요?" 고를 때마다 결과와 영향 칸을 소리 내어 읽게 한다. "우리 모둠이 먼저 정했으니 상관없어요"라는 학생에게 "혼자 남은 윤은 그 시간을 어떻게 보낼까요? 규칙을 지키면서도 함께할 길이 있을까요?"라고 묻는다.',
          task: '갈림길마다 고르고, 결과를 읽은 뒤 내 선택의 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: DIL({
            title: '혼자 남은 윤', word: '모두가 함께하는',
            steps: [
              { text: '모둠을 정하는데 전학 온 윤이 혼자 서 있어요. 우리 모둠은 벌써 네 명이에요.', motif: 'house',
                good: ['ask', '선생님께 다섯 명도 되는지 여쭌다', '선생님이 다섯 명도 된다고 하셨어요.', [['윤', '함께할 길이 생겨요', 1]]],
                bad: ['skip', '우리끼리 빨리 시작한다', '윤은 끝까지 혼자 서 있어요.', '혼자 남은 친구의 마음도 생각해요.', [['윤', '소외감을 느껴요', -1]]] },
              { text: '그런데 모둠 친구 다온이 "다섯 명은 불편해"라며 표정이 굳었어요.', motif: 'cloud',
                good: ['tell', '역할이 하나 더 늘어 좋다고 말한다', '다온이 고개를 끄덕여요.', [['다온', '걱정이 줄어요', 1], ['윤', '반겨 준다고 느껴요', 1]]],
                bad: ['drop', '다온 눈치를 보고 없던 일로 한다', '윤은 다시 혼자가 돼요.', '한 사람의 불편 때문에 다른 사람을 빼면 안 돼요.', [['윤', '더 서운해요', -1]]] },
              { text: '활동을 시작했는데 윤이 말을 거의 하지 않아요.', motif: 'star',
                good: ['role', '윤에게 맡고 싶은 역할을 묻는다', '윤이 그림 그리기를 맡았어요.', [['윤', '할 일이 생겨요', 1]]],
                bad: ['leave', '말이 없으니 그냥 둔다', '윤은 구경만 하다 끝나요.', '말이 없을 때는 먼저 물어봐요.', [['윤', '여전히 겉돌아요', -1]]] },
            ],
            ending: '모두가 한 가지씩 맡아 모둠 활동을 끝냈어요.',
            reasons: [{ id: 'all', text: '누구도 소외되지 않아야 모두 편하다' }, { id: 'role', text: '맡은 역할이 있으면 함께하기 쉽다' }, { id: 'fast', text: '빨리 끝내는 것이 가장 중요하다', why: '빨리 끝내도 혼자 남은 친구가 있으면 함께한 것이 아니에요.' }, { id: 'close', text: '친한 친구끼리만 해야 즐겁다', why: '새 친구와 함께해도 즐거울 수 있어요.' }],
            good: ['all', 'role'],
            talk: '모둠에서 "혼자 있는 친구에게 먼저 건넬 말"을 하나씩 이야기해요.',
            conclude: '규칙 안에서 함께할 길을 찾고, 말이 없는 친구에게는 먼저 물어봐요.',
          }),
        },
        worksheet: { items: [{ type: 'short', prompt: '혼자 있는 친구에게 건넬 말을 한 문장으로 써요.' }] },
      }),
      X('activity.game', {
        title: '모두 참여하는 협력 놀이', method: '모두 참여하는 협력 놀이', tool: 'timer', minutes: 13,
        levels: { easy: '놀이 3분을 1판 하도록 타이머를 맞춘다.', base: '놀이 3분·쉬기 1분을 2판 하도록 맞추고 차례 카드를 놓는다.', challenge: '모둠이 규칙 하나를 바꿔 3판 하도록 맞추고, 참여 점검까지 한다.' },
        activity: {
          title: '협력 놀이 계획과 참여 점검', tool: 'timer',
          teacher: '"오늘 놀이의 규칙은 하나예요. 판마다 모두 한 번씩 역할을 바꿔요." 타이머를 맞춘 뒤 교사가 신호를 주어 실제로 놀이(예: 모둠 탑 쌓기)를 한다. "잘하는 사람이 계속 하면 이겨요"라는 학생에게 "이기는 것과 모두 해 보는 것 가운데 오늘 놀이의 목표는 무엇일까요?"라고 묻는다.',
          task: '협력 놀이 시간을 맞추고, 차례대로 놀이한 뒤 모두 참여했는지 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '놀이 3분, 쉬기 1분을 2판 하도록 타이머를 맞춰요(분).', toolOptions: { title: '협력 놀이 타이머', timeUnit: 'min', labels: ['놀이', '쉬기'], plan: { work: 1, rest: 2, rounds: 1 } }, target: { plan: { work: 3, rest: 1, rounds: 2 } }, difficulty: 0.2,
              levels: { easy: { prompt: '놀이 3분을 1판 하도록 타이머를 맞춰요(분).', target: { plan: { work: 3, rounds: 1 } } }, challenge: { prompt: '규칙을 하나 바꿔 놀이 3분, 쉬기 1분을 3판 하도록 맞춰요(분).', target: { plan: { work: 3, rest: 1, rounds: 3 } } } } },
            { prompt: '협력 놀이를 하는 차례대로 카드를 놓아요.', toolOptions: { title: '놀이 차례', cards: ['놀이하기', '역할 정하기', '역할 바꾸기', '규칙 듣기'] }, target: { order: ['규칙 듣기', '역할 정하기', '놀이하기', '역할 바꾸기'] }, difficulty: 0.15 },
            SELF('놀이가 끝나면 모둠의 참여를 점검해요.', '참여 점검', ['모두 한 번씩 역할을 맡았다', '혼자 남은 사람이 없었다', '규칙을 함께 지켰다', '바꾼 규칙을 모두 알았다'], [2, 3, 4], 0.1, { conclude: '모두 한 번씩 해 보는 놀이가 새 반을 함께 만드는 놀이예요.' }),
          ],
        },
        worksheet: { items: [{ type: 'check', prompt: '협력 놀이에서 우리 모둠이 지킨 것에 표시해요.', options: ['모두 역할을 맡았다', '혼자 남은 사람이 없었다', '규칙을 지켰다'] }] },
        notes: '놀이는 교실 안에서 할 수 있는 탑 쌓기·이어 그리기처럼 몸을 세게 부딪치지 않는 것으로 고른다.',
      }),
      X('wrap.plan', {
        title: '이번 주 어울리기 실천 계획', method: '이번 주 실천 계획', tool: 'rubric-writing', minutes: 7,
        levels: { easy: '문장 틀(이번 주 ~에 ~를 해 보겠다)을 보고 기준 2개로 점검한다.', base: '두 문장으로 쓰고 기준 3개(무엇·언제·해낼 수 있음)로 점검한다.', challenge: '점검할 요일을 넣어 쓰고 기준 4개로 점검한다.' },
        wrap: {
          teacher: '"이번 주에 해 볼 마음 다루기나 어울리기 실천을 두 문장으로 써 볼까요?" "친구를 많이 사귀겠다"처럼 쓴 학생에게 "언제, 무엇을 하면 그렇게 될까요? 쉬는 시간에 한 사람에게 먼저 말 걸기처럼 해낼 수 있게 줄여 봐요"라고 말해 준다.',
          exitTicket: [
            EX('rubric-writing', RUB('이번 주 실천 계획을 두 문장으로 쓰고 점검해요.', { topic: '이번 주에 해 볼 마음 다루기나 어울리기 실천을 두 문장으로 써요.', starter: '이번 주 ___에 ___를 해 보겠다.', crit: ['무엇을 할지 썼다', '언제 할지 썼다', '해낼 수 있는 일이다'], ch: { prompt: '점검할 요일을 넣어 실천 계획을 쓰고 점검해요.', crit: '점검할 요일을 넣었다' }, must: [['요일', '월', '화', '수', '목', '금']], chars: [20, 120], sentences: [2, 3], title: '이번 주 실천 계획' }, 0.2)),
            { type: 'choice', prompt: '마음이 자주 바뀔 때 알맞은 생각은 무엇인가요?', options: ['내가 이상한 것이다', '자라면서 생기는 자연스러운 변화다', '아무에게도 말하면 안 된다'], answer: 1, difficulty: 0.15, explain: '고학년이 되면 마음이 자주 바뀌는 것은 자연스러워요.' },
          ],
        },
        worksheet: {
          title: '이번 주 실천 계획',
          items: [
            { type: 'short', prompt: '이번 주에 해 볼 실천 하나와 그 날을 써요.' },
            { type: 'check', prompt: '내 계획이 갖춘 것에 표시해요.', options: ['무엇을 할지', '언제 할지', '해낼 수 있는 일'] },
          ],
          easy: { note: '이번 주 ___에 ___를 해 보겠다.', items: [{ type: 'draw', prompt: '실천하는 내 모습을 그려요.' }] },
        },
      }),
      X('wrap.mind', {
        title: '새 반 좋은 점 생각그물', method: '새 반 좋은 점 생각그물', tool: 'mindmap', minutes: 7,
        levels: { easy: '가지 2개(함께 놀기·서로 돕기)에 카드를 붙인다.', base: '가지 3개에 카드를 붙인다.', challenge: '가지 4개에 붙이고, 어느 가지에도 맞지 않는 카드는 남긴다.' },
        wrap: {
          teacher: '"새 반이 된 지 얼마 안 됐지만 벌써 좋은 점이 있어요. 어느 가지에 붙일까요?" 카드마다 왜 그 가지인지 말하게 한다. "아직 친한 친구가 없으니 좋은 점이 없어요"라는 학생에게 "친한 친구가 없어도 함께 노는 시간, 돕는 장면은 있었죠?"라고 되묻는다.',
          exitTicket: [
            EX('mindmap', BRANCH('새 반 좋은 점 카드를 가지에 붙여요.', '우리 반', [['함께 놀기', ['쉬는 시간 보드게임', '점심시간 공놀이']], ['서로 돕기', ['모르는 문제 알려 주기', '떨어진 연필 주워 주기']], ['함께 배우기', ['모둠 발표 준비']], ['함께 정한 약속', ['줄 설 때 차례 지키기']]], { easy: 2, base: 3, challenge: 4 }, ['혼자 먼저 끝내기'], 0.15)),
            { type: 'choice', prompt: '새 반에서 모두가 어울리려면 어떻게 하면 좋을까요?', options: ['친한 친구하고만 논다', '혼자 있는 친구에게 먼저 말을 건다', '놀이 규칙을 내 마음대로 바꾼다'], answer: 1, difficulty: 0.1, explain: '먼저 말을 건네면 소외되는 친구가 줄어요.' },
            { type: 'short', prompt: '우리 반의 좋은 점 하나를 한 문장으로 써요.' },
          ],
        },
        worksheet: {
          title: '우리 반 좋은 점',
          items: [
            { type: 'table', prompt: '가지마다 우리 반의 좋은 점을 하나씩 써요.', columns: ['함께 놀기', '서로 돕기', '함께 배우기'], cells: [['', '', '']] },
            { type: 'short', prompt: '우리 반이 더 좋아지려면 내가 할 일 하나를 써요.' },
          ],
        },
      }),
    );
  }

  // ======== 5학년 · 우선순위 계획과 일회용품 줄이기 (<표 2> 자치활동 — 기본생활습관 형성: 자기 관리·환경⋅생태의식 함양) ========
  {
    const X = mk('g5-habit', 5);
    const CUP = [['종이컵', 18], ['빨대', 12], ['비닐봉지', 9], ['나무젓가락', 6]];
    M.push(
      X('intro.list', {
        title: '할 일 많은 하루 장면 보기', method: '할 일 많은 하루 장면 보기', tool: 'wordcards', minutes: 6,
        levels: { easy: '교사가 보기 3개만 짚어 먼저 할 것을 함께 고른다.', base: '보기 5개에서 먼저 할 것을 스스로 어림해 고른다.', challenge: '고른 것을 먼저 해야 하는 까닭(마감·중요함)을 말한다.' },
        intro: {
          teacher: '"가상의 친구 \'건\'은 오늘 할 일이 다섯 가지예요. 무엇부터 할까요?" 시연 단추로 \'내일 낼 숙제\'와 \'내일 준비물 챙기기\'가 바구니에 담기는 모습을 보인다. "알림이 온 게임 보상부터 받아야 해요, 곧 사라지니까요"라는 말이 나오면 "곧 사라지는 것은 급한 일이죠. 그런데 중요한 일일까요?"라고 되묻는다.',
          student: '건의 할 일 카드 가운데 먼저 할 것을 어림해 고르고, 왜 그런지 생각해 보아요.',
          demo: { tool: 'wordcards', options: { mode: 'pick', basket: '먼저 할 일', cards: [C('hw', '내일 낼 숙제'), C('game', '알림 온 게임 보상'), C('card', '다음 주 생일 카드'), C('bag', '내일 준비물 챙기기'), C('video', '새 영상 보기')], shuffle: false }, sequence: [{ pick: ['hw', 'bag'] }] },
          art: art('a paper child at a desk surrounded by floating paper cards with tasks, a clock and a calendar', '무엇부터 할까?', 'sun', 'buttercup'),
        },
      }),
      X('intro.trash', {
        title: '교실 쓰레기통 속 일회용품', method: '교실 쓰레기통 속 일회용품 찾기', tool: 'kitchen', minutes: 6,
        levels: { easy: '교사가 일회용품 2개(종이컵·빨대)를 짚어 주고 함께 담는다.', base: '일회용품 4개를 스스로 골라 담는다.', challenge: '4개를 담고 저마다 대신 쓸 물건(개인 컵·장바구니 등)을 말한다.' },
        intro: {
          teacher: '"이 그림은 가상 교실의 하루 쓰레기통이에요. 한 번 쓰고 버린 물건은 무엇일까요?" 시연 단추로 종이컵·빨대·나무젓가락·비닐봉지가 바구니에 담기는 모습을 보인다. "종이로 만든 건 일회용품이 아니에요"라는 말에는 "종이컵도 한 번 쓰고 버리죠? 재료가 아니라 한 번 쓰고 버리는지가 기준이에요"라고 짚는다.',
          student: '그림 속 쓰레기 가운데 한 번 쓰고 버린 물건을 골라 보아요.',
          demo: { tool: 'kitchen', options: { mode: 'pick', basket: '일회용품', autoMotif: false, cards: [C('cup', '종이컵'), C('peel', '연필 깎은 밥'), C('straw', '플라스틱 빨대'), C('chop', '나무젓가락'), C('paper', '이면지 낙서'), C('bag', '비닐봉지')], shuffle: false }, sequence: [{ pick: ['cup', 'straw', 'chop', 'bag'] }] },
          art: art('a paper classroom trash bin with paper cups, straws and plastic bags peeking out, a magnifying glass above it', '한 번 쓰고 버린 것은?', 'leaf', 'mint'),
        },
        notes: '실제 쓰레기통을 뒤지게 하지 않는다. 그림으로만 찾는다.',
      }),
      X('activity.four', {
        title: '할 일 네 칸 나누기', method: '할 일 네 칸(중요·급함) 나누기', tool: 'sortboard', minutes: 14,
        levels: { easy: '카드 4장을 네 칸에 한 장씩 나누고, 틀린 칸에 넣으면 까닭을 알려 주며 돌아온다.', base: '카드 8장을 네 칸에 나눈다.', challenge: '카드 10장을 나누고, 고른 칸의 까닭을 모둠에서 말한다.' },
        activity: {
          title: '중요·급함 네 칸에 할 일 나누기', tool: 'sortboard',
          teacher: '"\'급하다\'는 곧 해야 한다는 뜻이고, \'중요하다\'는 나에게 꼭 필요하다는 뜻이에요." 카드를 하나씩 소리 내어 읽고 두 번 물어 나누게 한다: 꼭 필요한가? 곧 해야 하는가? "알림 온 게임 보상은 급하니까 중요해요"라는 학생에게 "놓치면 아쉽지만 나에게 꼭 필요한 일일까요? 급함과 중요함은 따로 따져요"라고 말해 준다.',
          task: '건의 할 일 카드를 중요한지, 급한지 따져 네 칸에 나누어요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
          items: [
            SORT('건의 이번 주 할 일 카드를 네 칸에 나누어요.', { slots: ['중요·급함', '중요·안 급함', '안 중요·급함', '안 중요·안 급함'], groups: { '중요·급함': ['내일 낼 수학 숙제', '한 시간 뒤 발표 준비'], '중요·안 급함': ['다음 달 줄넘기 대회 연습', '날마다 책 20쪽 읽기'], '안 중요·급함': ['곧 끝나는 게임 이벤트', '방금 온 단체 대화 구경'], '안 중요·안 급함': ['같은 영상 또 보기', '휴대폰 배경 바꾸기'] }, extra: { '중요·급함': ['내일 아침 체육복 챙기기'], '중요·안 급함': ['2주 뒤 과학 탐구 준비'] } }, 0.25),
            SORT('건의 방학 첫 주 할 일 카드를 네 칸에 나누어요.', { slots: ['중요·급함', '중요·안 급함', '안 중요·급함', '안 중요·안 급함'], groups: { '중요·급함': ['오늘 끝나는 도서 반납', '내일 모둠 과제 마감'], '중요·안 급함': ['방학 독서 계획 세우기', '줄넘기 날마다 하기'], '안 중요·급함': ['오늘만 파는 스티커 사기', '알림 온 영상 바로 보기'], '안 중요·안 급함': ['만화책 다시 보기', '게임 캐릭터 옷 고르기'] }, extra: { '중요·안 급함': ['개학 전 일기 정리'], '안 중요·급함': ['친구가 보낸 퀴즈 풀기'] } }, 0.3, { conclude: '급한 일이 언제나 중요한 것은 아니에요. 중요한 일을 먼저, 미리 해요.' }),
            { prompt: '모둠에서 가장 헷갈린 카드 하나를 골라 그 칸에 넣은 까닭을 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '네 칸에 내 할 일을 하나씩 써요.', columns: ['중요·급함', '중요·안 급함', '안 중요·급함', '안 중요·안 급함'], cells: [['', '', '', '']] }] },
      }),
      X('activity.week', {
        title: '일주일 계획 시간 띠', method: '일주일 계획 시간 띠', tool: 'timeline', minutes: 13,
        levels: { easy: '마감이 적힌 카드 3장을 월→금 띠에 마감 차례로 놓는다.', base: '카드 5장을 마감 차례로 놓는다.', challenge: '카드 6장을 놓되 맨 끝에 \'여유 시간\' 카드를 넣고, 마감이 없는 함정 카드는 남긴다.' },
        activity: {
          title: '마감 차례로 일주일 계획 놓기', tool: 'timeline',
          teacher: '"네 칸에서 \'중요·급함\'으로 나눈 일을 요일 띠에 놓아 볼까요? 마감이 가까운 일부터 앞에 놓아요." 카드마다 마감 요일을 소리 내어 읽게 한다. "금요일 발표가 가장 중요하니 맨 앞이에요"라는 학생에게 "중요한 일이라도 마감이 금요일이면, 화요일 마감 일을 먼저 끝내야 하지 않을까요?"라고 묻는다. 도전에서는 일이 밀릴 때를 위해 여유 시간을 남겨 두는 까닭을 짚는다.',
          task: '마감이 적힌 할 일 카드를 마감이 가까운 차례로 요일 띠에 놓아요.', levels: { easy: { live: true }, base: {}, challenge: {} },
          items: [
            SEQ('건의 할 일 카드를 마감이 가까운 차례로 놓아요.', ['월: 준비물 사기', '화: 수학 익힘 내기', '수: 독서록 내기', '목: 과학 조사 내기', '금: 모둠 발표'], ['화: 수학 익힘 내기', '수: 독서록 내기', '금: 모둠 발표'], ['월: 준비물 사기', '화: 수학 익힘 내기', '수: 독서록 내기', '목: 과학 조사 내기', '금: 모둠 발표', '토: 밀린 일 여유 시간'], { axis: ['월', '토'], trap: '마감 없음: 영상 보기', chPrompt: '맨 끝에 여유 시간을 넣어 마감 차례로 놓아요(넣지 않을 카드도 있어요).' }, 0.2),
            SEQ('솔의 할 일 카드를 마감이 가까운 차례로 놓아요.', ['월: 학급 회의 안건 내기', '화: 줄넘기 기록 재기', '수: 그림 숙제 내기', '목: 모둠 역할 정하기', '금: 탐구 발표'], ['월: 학급 회의 안건 내기', '수: 그림 숙제 내기', '금: 탐구 발표'], ['월: 학급 회의 안건 내기', '화: 줄넘기 기록 재기', '수: 그림 숙제 내기', '목: 모둠 역할 정하기', '금: 탐구 발표', '토: 밀린 일 여유 시간'], { axis: ['월', '토'], trap: '마감 없음: 만화 보기', chPrompt: '솔의 계획 맨 끝에 여유 시간을 넣어 놓아요(넣지 않을 카드도 있어요).' }, 0.25, { conclude: '마감이 가까운 일부터 놓고, 밀릴 때를 위해 여유 시간을 남겨요.' }),
            { prompt: '짝과 "여유 시간을 왜 남겨 둘까?"를 이야기해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '다음 주 요일마다 할 일 하나씩 써요.', columns: ['월', '화', '수', '목', '금'], cells: [['', '', '', '', '']] }] },
      }),
      X('activity.survey', {
        title: '학급 일회용품 조사 그래프', method: '학급 일회용품 조사 막대그래프', tool: 'chart', minutes: 14,
        levels: { easy: '일회용품 3종의 막대를 완성한다.', base: '4종의 막대를 완성하고 가장 많은 것을 읽는다.', challenge: '4종을 견주어 먼저 줄일 것과 그 까닭을 고른다.' },
        activity: {
          title: '가상 조사표로 막대그래프 완성·읽기', tool: 'chart',
          teacher: '"이 조사표는 가상의 5학년 반이 일주일 동안 센 일회용품 수예요. 표의 수를 막대로 옮겨 볼까요?" 눈금 한 칸이 몇 개인지 먼저 읽게 한다. "가장 많은 것만 줄이면 끝이에요"라는 학생에게 "가장 많은 것부터 줄이면 효과가 크죠. 그런데 나머지도 줄일 수 있다면요?"라고 되묻는다.',
          task: '가상 조사표를 막대그래프로 옮기고, 먼저 줄일 일회용품을 찾아요.', levels: { easy: { showValues: true }, base: {}, challenge: {} },
          items: [
            { prompt: '조사표를 보고 막대그래프를 완성해요(가상 자료).', toolOptions: { type: 'bar', mode: 'build', title: '일주일 일회용품 수(가상)', unit: '개', data: CUP, given: [0], scale: 2 }, target: { build: true }, difficulty: 0.25,
              levels: { easy: { prompt: '조사표를 보고 막대 세 개를 완성해요(가상 자료).', toolOptions: { data: CUP.slice(0, 3) } } } },
            { prompt: '가상 반에서 가장 많이 쓴 일회용품은 무엇인가요?', toolOptions: { type: 'bar', mode: 'read', title: '일주일 일회용품 수(가상)', unit: '개', data: CUP, choices: CUP.map((x) => x[0]), question: '가장 많은 것은?' }, target: { pick: 0 }, difficulty: 0.15 },
            { prompt: '그래프를 근거로 먼저 줄일 것과 까닭을 골라요(가상 자료).', toolOptions: { type: 'bar', mode: 'read', title: '일주일 일회용품 수(가상)', unit: '개', data: CUP, choices: ['종이컵, 가장 많이 써서', '나무젓가락, 가장 적어서', '빨대, 색이 예뻐서'], question: '먼저 줄일 것은?', why: ['', '가장 적은 것을 먼저 줄이면 줄어드는 양도 적어요.', '색은 그래프와 관계없어요.'] }, target: { pick: 0 }, difficulty: 0.3, conclude: '조사 자료에서 가장 많은 것부터 줄이면 효과가 커요.' },
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '가상 조사에서 두 번째로 많이 쓴 일회용품은?', options: ['종이컵', '빨대', '비닐봉지', '나무젓가락'], answer: '빨대' }] },
        notes: '조사 수치는 수업용 가상 자료다.',
      }),
      X('activity.count', {
        title: '교실 일회용품 실제 세기', method: '교실 일회용품 실제 세기', tool: 'timer', minutes: 13,
        levels: { easy: '종이컵 1종만 세어 기록판에 적는다.', base: '3종(종이컵·빨대·비닐봉지)을 세어 적는다.', challenge: '두 날(월·금)의 종이컵 수를 적어 견준다.' },
        activity: {
          title: '세기 약속 점검과 기록판 쓰기', tool: 'timer',
          teacher: '"오늘 하루 우리 반에서 일회용품을 쓸 때마다 모둠 기록자가 바를 정(正) 자로 세어요. 쓰레기통은 뒤지지 않아요." 기록판에는 수만 적고 누가 썼는지는 적지 않는다고 먼저 약속한다. "많이 쓴 사람을 찾아야 해요"라는 학생에게 "우리는 누가 아니라 얼마나를 알아보는 거예요. 반 전체가 함께 줄이려는 조사예요"라고 말해 준다.',
          task: '세기 약속을 점검하고, 하루 동안 센 일회용품 수를 기록판에 적어요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '세기 전에 우리 반 조사 약속을 모두 확인해요.', toolOptions: { title: '조사 약속', safety: ['쓰레기통을 뒤지지 않는다', '누가 썼는지 적지 않는다', '모둠 기록자를 정했다'] }, target: { safety: true }, difficulty: 0.1 },
            { prompt: '하루 동안 센 일회용품 수를 기록판에 적어요.', toolOptions: { title: '오늘 센 일회용품', fields: [{ label: '종이컵', unit: '개' }, { label: '빨대', unit: '개' }, { label: '비닐봉지', unit: '개' }] }, target: { records: true }, difficulty: 0.15,
              levels: { easy: { prompt: '하루 동안 센 종이컵 수를 기록판에 적어요.', toolOptions: { fields: [{ label: '종이컵', unit: '개' }] } }, challenge: { prompt: '월요일과 금요일에 센 종이컵 수를 적어 견주어요.', toolOptions: { fields: [{ label: '월 종이컵', unit: '개' }, { label: '금 종이컵', unit: '개' }] } } } },
            { prompt: '모둠에서 센 수를 보고 가장 많은 것이 무엇인지 이야기해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '오늘 센 일회용품 수를 써요.', columns: ['종류', '센 수'], cells: [['종이컵', ''], ['빨대', ''], ['비닐봉지', '']] }] },
        notes: '세기는 하루 수업 시간 동안 모둠 기록자가 바를 정 자로 센다. 개인을 지목하지 않는다.',
      }),
      X('wrap.plan', {
        title: '일회용품 줄이기 계획 쓰기', method: '줄이기 실천 계획 쓰기', tool: 'rubric-writing', minutes: 7,
        levels: { easy: '문장 틀(___를 줄이려고 ___를 쓰겠다)을 보고 기준 2개로 점검한다.', base: '세 문장으로 쓰고 기준 3개(줄일 것·대신 쓸 것·언제)로 점검한다.', challenge: '조사 결과(그래프·센 수)를 근거로 넣어 쓰고 기준 4개로 점검한다.' },
        wrap: {
          teacher: '"조사에서 가장 많았던 일회용품을 무엇으로 바꿀 수 있을까요?" "일회용품을 절대 안 쓰겠다"라고 쓴 학생에게 "정말 해낼 수 있을까요? 이번 주 종이컵 대신 개인 컵처럼 하나부터 정해 봐요"라고 말해 준다.',
          exitTicket: [
            EX('rubric-writing', RUB('일회용품 줄이기 계획을 세 문장으로 쓰고 점검해요.', { topic: '우리 반 일회용품을 줄이는 실천 계획을 세 문장으로 써요.', starter: '___를 줄이려고 ___ 대신 ___를 쓰겠다.', crit: ['줄일 것을 썼다', '대신 쓸 것을 썼다', '언제 할지 썼다'], ch: { prompt: '조사 결과를 근거로 넣어 줄이기 계획을 쓰고 점검해요.', crit: '조사 결과를 근거로 썼다' }, must: [['조사', '그래프', '개']], chars: [30, 160], sentences: [2, 4], title: '줄이기 계획' }, 0.2)),
            { type: 'choice', prompt: '일회용품을 줄이는 계획으로 가장 알맞은 것은?', options: ['종이컵 대신 개인 컵을 쓴다', '종이컵을 두 개씩 겹쳐 쓴다', '쓰고 바로 버린다'], answer: 0, difficulty: 0.1, explain: '여러 번 쓰는 물건으로 바꾸면 일회용품이 줄어요.' },
          ],
        },
        worksheet: {
          title: '일회용품 줄이기 계획',
          items: [
            { type: 'short', prompt: '내가 줄일 일회용품과 대신 쓸 물건을 써요.' },
            { type: 'check', prompt: '내 계획이 갖춘 것에 표시해요.', options: ['줄일 것', '대신 쓸 것', '언제 할지'] },
          ],
          easy: { note: '___를 줄이려고 ___ 대신 ___를 쓰겠다.', items: [{ type: 'draw', prompt: '일회용품 대신 쓸 물건을 그려요.' }] },
        },
      }),
      X('wrap.check', {
        title: '실천 계획 자기 점검표', method: '계획 자기 점검표', tool: 'timer', minutes: 7,
        levels: { easy: '점검 칸 3개를 읽고 실천한 것에 표시한다.', base: '점검 칸 5개에 표시한다.', challenge: '5칸에 더해 \'고칠 점 하나 정하기\' 칸까지 표시하고 고칠 점을 쓴다.' },
        wrap: {
          teacher: '"일주일 전에 세운 계획을 얼마나 해냈는지 스스로 점검해요. 여기에는 정답이 없고, 한 것만 솔직하게 표시해요." 표시가 적은 학생에게 "다 못 했어도 괜찮아요. 무엇이 어려웠는지 알면 다음 계획을 고칠 수 있어요"라고 말해 준다.',
          exitTicket: [
            EX('timer', SELF('일주일 동안 해낸 것에 스스로 표시해요.', '계획 점검', ['중요한 일을 먼저 했다', '마감 전에 끝냈다', '개인 컵을 썼다', '일회용 빨대를 덜 썼다', '여유 시간을 남겼다', '고칠 점 하나를 정했다'], [3, 5, 6], 0.1)),
            { type: 'choice', prompt: '계획을 다 지키지 못했을 때 알맞은 생각은?', options: ['계획은 쓸모없다', '어려웠던 점을 찾아 다음 계획을 고친다', '다음부터 계획을 세우지 않는다'], answer: 1, difficulty: 0.1, explain: '점검은 다음 계획을 더 좋게 만들려고 해요.' },
            { type: 'short', prompt: '다음 주 계획에서 고칠 점 하나를 써요.' },
          ],
        },
        worksheet: {
          title: '일주일 계획 점검',
          items: [
            { type: 'check', prompt: '이번 주에 해낸 것에 표시해요.', options: ['중요한 일 먼저 하기', '마감 지키기', '일회용품 줄이기'] },
            { type: 'short', prompt: '가장 어려웠던 점과 고칠 방법을 써요.' },
          ],
        },
        notes: '점검 결과는 학생 스스로 보는 것이다. 점수를 매기거나 비교하지 않는다.',
      }),
    );
  }

  // ======== 5학년 · 근거 있는 주장과 온라인 소통 예절 (<표 2> 자치활동 — 관계 형성 및 소통 활동: 토의⋅토론) ========
  {
    const X = mk('g5-rel', 5);
    M.push(
      X('intro.claim', {
        title: '주장과 근거 짝 고르기', method: '주장과 근거 짝 고르기', tool: 'emotion', minutes: 6,
        levels: { easy: '교사가 주장 2개를 읽어 주고 근거 카드를 함께 잇는다.', base: '주장 3개에 근거 카드를 스스로 잇는다.', challenge: '주장 3개에 잇고, 주장과 관계없는 약한 근거 카드를 골라 뺀다.' },
        intro: {
          teacher: '"\'쉬는 시간을 10분 늘리자\'는 주장에 어울리는 근거는 무엇일까요?" 시연 단추로 주장 칸마다 근거 카드가 이어지는 모습을 보인다. "내가 원하니까요"를 근거로 고르는 학생에게 "원하는 마음은 주장이에요. 다른 사람도 고개를 끄덕일 까닭이 근거예요"라고 짚는다.',
          student: '주장 카드를 읽고, 다른 사람을 설득할 수 있는 근거를 짝 지어 보아요.',
          demo: { tool: 'emotion', options: { slots: [{ id: 's1', label: '쉬는 시간을 늘리자' }, { id: 's2', label: '교실에 식물을 두자' }, { id: 's3', label: '급식 남기지 말자' }], cards: ['화분이 공기를 맑게 한다', '화장실 줄이 길어 늦는다', '남은 음식이 쓰레기가 된다', '내가 원하니까'] }, sequence: [{ match: { s1: '화장실 줄이 길어 늦는다', s2: '화분이 공기를 맑게 한다', s3: '남은 음식이 쓰레기가 된다' } }] },
          art: art('two paper speech bubbles on a board, one labeled claim and one labeled reason, joined by a paper string', '주장에는 근거가 필요해요', 'star', 'lavender'),
        },
      }),
      X('intro.chat', {
        title: '단체 대화방 장면 보기', method: '단체 대화방 장면 보기', tool: 'wordcards', minutes: 6,
        levels: { easy: '교사가 불편한 말 1개를 함께 짚고 고르게 한다.', base: '불편한 말 2개를 스스로 고른다.', challenge: '2개를 고르고 왜 불편한지(놀림·따돌림) 까닭을 말한다.' },
        intro: {
          teacher: '"가상 반의 학급 대화방이에요. 읽는 사람이 불편할 말은 무엇일까요?" 시연 단추로 \'ㅋㅋ 또 틀렸네\'와 \'너만 빼고 모이자\'가 바구니에 담기는 모습을 보인다. "대화방 글은 금방 위로 올라가서 사라져요"라는 말에는 "위로 올라가도 지워질까요? 누구나 다시 볼 수 있고 저장할 수도 있어요"라고 되묻는다.',
          student: '대화방 글 가운데 읽는 친구가 불편할 말을 골라 보아요.',
          demo: { tool: 'wordcards', options: { mode: 'pick', basket: '불편한 말', cards: [C('c1', 'ㅋㅋ 또 틀렸네'), C('c2', '오늘 발표 수고했어!'), C('c3', '너만 빼고 모이자'), C('c4', '내일 준비물 뭐야?'), C('c5', '사진 고마워')], shuffle: false }, sequence: [{ pick: ['c1', 'c3'] }] },
          art: art('a big paper smartphone showing a class group chat with colorful paper speech bubbles, one bubble crossed out', '읽는 친구의 마음은?', 'cloud', 'sky'),
        },
      }),
      X('activity.debate', {
        title: '모둠 찬반 짧은 토론', method: '모둠 찬반 짧은 토론', tool: 'timer', minutes: 14,
        levels: { easy: '찬반 1번씩 발언(근거 1개)하도록 타이머를 맞추고 근거 수를 적는다.', base: '찬반 2번씩(근거 2개) 발언하도록 맞추고 토론 차례를 놓는다.', challenge: '반론까지 찬반 3번씩 발언하도록 맞추고 근거·반론 수를 적는다.' },
        activity: {
          title: '찬반 토론 시간과 차례 맞추기', tool: 'timer',
          teacher: '"오늘 주제는 \'쉬는 시간에 교실에서 공놀이를 허용하자\'예요. 한 사람이 1분씩, 찬성과 반대가 번갈아 말해요." 타이머를 맞춘 뒤 실제로 모둠 토론을 진행한다. "반론은 상대를 이기려고 하는 거예요"라는 학생에게 "반론은 상대 근거의 빈 곳을 짚어 더 나은 결론을 찾으려는 거예요. 사람이 아니라 근거에 대해 말해요"라고 말해 준다.',
          task: '토론 시간을 맞추고 차례대로 토론한 뒤, 나온 근거 수를 적어요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '한 사람 60초 말하고 10초 쉬기, 찬반 2번씩(4번)이 되게 맞춰요.', toolOptions: { title: '찬반 토론(우리 반 약속)', labels: ['발언', '쉬기'], plan: { work: 30, rest: 5, rounds: 2 } }, target: { plan: { work: 60, rest: 10, rounds: 4 } }, difficulty: 0.2,
              levels: { easy: { prompt: '한 사람 60초 말하고 10초 쉬기, 찬반 1번씩(2번)이 되게 맞춰요.', target: { plan: { work: 60, rest: 10, rounds: 2 } } }, challenge: { prompt: '반론까지 60초씩 10초 쉬며 찬반 3번씩(6번)이 되게 맞춰요.', target: { plan: { work: 60, rest: 10, rounds: 6 } } } } },
            { prompt: '우리 반 토론 약속의 차례대로 카드를 놓아요.', toolOptions: { title: '토론 차례(우리 반 약속)', cards: ['반대 주장', '찬성 반론', '찬성 주장', '정리 발언', '반대 반론'] }, target: { order: ['찬성 주장', '반대 주장', '찬성 반론', '반대 반론', '정리 발언'] }, difficulty: 0.25 },
            { prompt: '토론에서 나온 근거 수를 쪽마다 적어요.', toolOptions: { title: '근거 수 기록', fields: [{ label: '찬성 근거', unit: '개' }, { label: '반대 근거', unit: '개' }] }, target: { records: true }, difficulty: 0.1,
              levels: { challenge: { prompt: '토론에서 나온 근거와 반론 수를 쪽마다 적어요.', toolOptions: { fields: [{ label: '찬성 근거', unit: '개' }, { label: '반대 근거', unit: '개' }, { label: '반론', unit: '개' }] } } }, conclude: '토론은 사람이 아니라 근거를 견주는 시간이에요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '토론 주제에 대한 내 생각과 근거를 써요.', columns: ['찬성 / 반대', '근거'], cells: [['', '']] }] },
      }),
      X('activity.rebut', {
        title: '예의 있는 반론 말 고르기', method: '예의 있는 반론 말 고르기', tool: 'sortboard', minutes: 13,
        levels: { easy: '반론 말 카드 4장을 두 바구니에 나누고, 틀리면 까닭을 알려 주며 돌아온다.', base: '카드 6장을 나눈다.', challenge: '카드 8장을 나누고, \'상처 줘요\' 카드 하나를 예의 있게 고쳐 말한다.' },
        activity: {
          title: '반론 말을 두 바구니에 나누기', tool: 'sortboard',
          teacher: '"\'네 말은 틀렸어\'와 \'그 근거는 이런 경우에 맞지 않을 것 같아\'는 무엇이 다를까요?" 카드를 소리 내어 읽고 듣는 사람 마음을 떠올리게 한다. "솔직하게 세게 말하는 게 좋은 반론이에요"라는 학생에게 "솔직함은 좋아요. 그런데 사람을 깎아내리면 듣는 사람은 근거를 듣지 않게 돼요"라고 말해 준다.',
          task: '반론 말 카드를 예의 있는 말과 상처 주는 말로 나누어요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
          items: [
            SORT('토론에서 나온 반론 말을 두 바구니에 나누어요.', { slots: ['예의 있어요', '상처 줘요'], groups: { '예의 있어요': ['그 근거는 이럴 때 맞지 않아', '네 말도 일리가 있지만', '다른 자료도 볼까?'], '상처 줘요': ['그것도 몰라?', '네 말은 들을 필요 없어', '또 엉뚱한 소리 하네'] }, easy: 2, extra: { '예의 있어요': ['한 가지만 물어봐도 될까?'], '상처 줘요': ['너는 늘 틀리잖아'] } }, 0.2),
            SORT('학급 회의에서 나온 반론 말을 두 바구니에 나누어요.', { slots: ['예의 있어요', '상처 줘요'], groups: { '예의 있어요': ['그러면 비 오는 날은 어떡해?', '좋은 생각인데 걱정이 하나 있어', '내 생각은 조금 달라'], '상처 줘요': ['말도 안 되는 소리야', '그런 걸 왜 말해?', '너 때문에 회의가 길어져'] }, easy: 2, extra: { '예의 있어요': ['근거를 하나만 더 들어 줄래?'], '상처 줘요': ['그만 좀 말해'] } }, 0.25, { conclude: '반론은 사람이 아니라 근거를 향해, 존중하는 말로 해요.' }),
            { prompt: '짝과 \'상처 줘요\' 카드 하나를 예의 있게 고쳐 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '"그것도 몰라?"를 예의 있는 반론 말로 고쳐 써요.' }] },
      }),
      X('activity.dilemma', {
        title: '대화방에 친구 놀리는 글', method: '갈림길: 대화방에서 친구를 놀리는 글을 봤을 때', tool: 'dilemma', minutes: 14,
        levels: { easy: '갈림 1번에서 고르고 근거 한 장을 고른다.', base: '갈림 2번(따라 웃지 않기 → 올린 친구에게 말하기)을 지나 근거를 고른다.', challenge: '갈림 3번(어른께 알리기까지)을 지나 알맞은 근거를 모두 고르고, 다른 길의 결과와 견준다.' },
        activity: {
          title: '갈림길: 대화방의 놀림 글', tool: 'dilemma',
          teacher: '"가상 반 대화방에 친구 별명을 놀리는 글이 올라왔어요. 나는 어떻게 할까요?" 고를 때마다 영향 칸에서 누가 어떤 마음일지 읽게 한다. "가만히 있으면 나는 잘못한 게 없어요"라는 학생에게 "읽고 지나간 사람이 많을수록 놀림 글은 어떻게 될까요? 내가 할 수 있는 작은 행동은 무엇일까요?"라고 묻는다.',
          task: '갈림길마다 고르고, 결과를 읽은 뒤 내 선택의 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: DIL({
            title: '대화방의 놀림 글', word: '존중하는',
            steps: [
              { text: '학급 대화방에 "우리 반 거북이 또 늦음 ㅋㅋ"라는 글이 올라왔어요. 다들 웃는 표시를 달아요.', motif: 'cloud',
                good: ['no', '웃는 표시를 달지 않는다', '놀림 글에 힘을 보태지 않았어요.', [['놀림받는 친구', '덜 외로워요', 1]]],
                bad: ['laugh', '나도 웃는 표시를 단다', '웃는 표시가 늘어 글이 더 퍼져요.', '함께 웃으면 놀림이 커져요.', [['놀림받는 친구', '더 상처받아요', -1]]] },
              { text: '그런데 글을 올린 친구가 "장난인데 뭐 어때"라고 또 써요.', motif: 'house',
                good: ['say', '"그 별명은 놀림 같아, 지우자"라고 쓴다', '올린 친구가 잠시 멈춰요.', [['올린 친구', '다시 생각해요', 0], ['놀림받는 친구', '편이 생겨요', 1]]],
                bad: ['quiet', '괜히 끼어들지 않고 나간다', '놀림 글이 계속 남아 있어요.', '글은 지우기 전까지 남아 누구나 다시 볼 수 있어요.', [['놀림받는 친구', '혼자 견뎌요', -1]]] },
              { text: '올린 친구가 글을 지우지 않고 다른 놀림 글을 또 올렸어요.', motif: 'star',
                good: ['adult', '화면을 남겨 담임 선생님께 알린다', '선생님이 함께 해결해 주세요.', [['놀림받는 친구', '보호받아요', 1], ['반 친구들', '대화방 약속을 다시 세워요', 1]]],
                bad: ['fight', '똑같이 놀리는 글로 되갚는다', '대화방이 싸움판이 됐어요.', '되갚으면 놀림이 더 커져요.', [['반 친구들', '모두 불편해요', -1]]] },
            ],
            ending: '선생님과 함께 대화방 약속을 다시 세웠어요.',
            reasons: [{ id: 'stay', text: '대화방 글은 지우기 전까지 남는다' }, { id: 'respect', text: '읽는 친구의 마음을 지켜야 한다' }, { id: 'joke', text: '장난이면 괜찮다', why: '장난이라도 듣는 사람이 상처받으면 놀림이에요.' }, { id: 'all', text: '다들 웃으니까 따라 해도 된다', why: '여럿이 웃을수록 상처는 더 커져요.' }],
            good: ['respect', 'stay'],
            talk: '모둠에서 "대화방에서 친구를 지키는 짧은 한마디"를 하나씩 만들어 말해요.',
            conclude: '대화방 글은 남아요. 놀림에는 함께 웃지 않고, 멈추자고 말하고, 어른께 알려요.',
          }),
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '단체 대화방 글은 금방 사라지지 않고 ___.', answer: '남는다' }] },
      }),
      X('activity.rules', {
        title: '우리 반 온라인 예절 그물', method: '우리 반 온라인 예절 생각그물', tool: 'mindmap', minutes: 13,
        levels: { easy: '가지 2개(글 올리기 전·사진과 영상)에 예절 카드를 붙인다.', base: '가지 3개에 카드를 붙인다.', challenge: '가지 4개에 붙이고, 예절이 아닌 함정 카드는 남긴다.' },
        activity: {
          title: '학급 대화방 예절 가지 붙이기', tool: 'mindmap',
          teacher: '"우리 반 대화방에서 지킬 예절을 언제·무엇에 따라 나눠 볼까요?" 카드를 붙일 때마다 왜 그 가지인지 말하게 한다. "밤늦게 보내도 읽는 사람이 알아서 안 보면 돼요"라는 학생에게 "알림이 울리면 쉬던 친구가 깰 수도 있죠. 보내는 사람이 먼저 시간을 생각해요"라고 말해 준다.',
          task: '대화방 예절 카드를 알맞은 가지에 붙여 우리 반 약속 그물을 만들어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
          items: [
            BRANCH('대화방 예절 카드를 알맞은 가지에 붙여요.', '학급 대화방', [['글 올리기 전', ['한 번 더 읽고 보내기', '누가 읽을지 생각하기']], ['사진과 영상', ['허락받고 올리기', '얼굴 나온 사진 조심']], ['늦은 시간', ['밤에는 보내지 않기']], ['다툼이 생기면', ['대화방 말고 만나서 말하기']]], { easy: 2, base: 3, challenge: 4 }, ['읽고 답 안 하면 따지기'], 0.2),
            BRANCH('모둠 과제 대화방 예절을 가지에 붙여요.', '모둠 과제 대화방', [['역할 나눌 때', ['맡을 일 먼저 묻기', '한 사람에게 몰지 않기']], ['자료 올릴 때', ['출처 함께 적기', '파일 이름 알아보게']], ['답이 늦을 때', ['기다렸다 한 번만 묻기']], ['의견이 다를 때', ['근거로 이야기하기']]], { easy: 2, base: 3, challenge: 4 }, ['안 하는 친구 이름 올리기'], 0.25, { conclude: '대화방 예절은 읽는 사람을 먼저 생각하는 약속이에요.' }),
            { prompt: '모둠에서 우리 반 대화방 약속 하나를 정해 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'check', prompt: '우리 반 대화방에서 지킬 예절에 표시해요.', options: ['보내기 전 한 번 더 읽기', '허락받고 사진 올리기', '밤에는 보내지 않기', '다툼은 만나서 말하기'] }] },
      }),
      X('wrap.write', {
        title: '근거 있는 주장 글 쓰기', method: '근거 있는 주장 글', tool: 'rubric-writing', minutes: 7,
        levels: { easy: '문장 틀(나는 ~에 찬성한다. 왜냐하면 ~)을 보고 기준 2개로 점검한다.', base: '주장 하나에 근거 둘을 넣어 세 문장으로 쓰고 기준 3개로 점검한다.', challenge: '반대 의견을 한 번 언급하고 답하는 문장까지 넣어 기준 4개로 점검한다.' },
        wrap: {
          teacher: '"오늘 토론 주제에 대한 내 주장을 근거 둘과 함께 써 볼까요?" "그냥 좋으니까"라고 쓴 학생에게 "좋다는 마음은 주장이에요. 왜 좋은지, 다른 사람도 끄덕일 까닭을 하나 더 써 봐요"라고 말해 준다.',
          exitTicket: [
            EX('rubric-writing', RUB('주장 하나에 근거 둘을 넣어 쓰고 점검해요.', { topic: '쉬는 시간 교실 공놀이 허용에 대한 내 주장을 근거 둘과 함께 써요.', starter: '나는 ___에 찬성(반대)한다. 왜냐하면 ___. 또 ___.', crit: ['주장을 첫 문장에 썼다', '근거를 두 개 썼다', '예의 있는 말로 썼다'], ch: { prompt: '반대 의견에 답하는 문장까지 넣어 쓰고 점검해요.', crit: '반대 의견에 답했다' }, must: [['물론', '하지만', '그러나']], chars: [40, 200], sentences: [3, 4], title: '근거 있는 주장 글' }, 0.2)),
            { type: 'choice', prompt: '예의 있는 반론으로 알맞은 것은 무엇인가요?', options: ['그것도 몰라?', '그 근거는 비 오는 날엔 맞지 않을 것 같아', '네 말은 들을 필요 없어'], answer: 1, difficulty: 0.1, explain: '반론은 사람이 아니라 근거를 향해 말해요.' },
          ],
        },
        worksheet: {
          title: '근거 있는 주장',
          items: [
            { type: 'short', prompt: '내 주장 한 문장과 근거 두 개를 써요.' },
            { type: 'check', prompt: '내 글이 갖춘 것에 표시해요.', options: ['주장', '근거 두 개', '예의 있는 말'] },
          ],
          easy: { note: '나는 ___에 찬성(반대)한다. 왜냐하면 ___.', items: [{ type: 'short', prompt: '내 근거 하나를 써요.' }] },
        },
      }),
      X('wrap.msg', {
        title: '예절 있는 댓글 쓰기', method: '예절 있는 댓글 쓰기', tool: 'rubric-writing', minutes: 7,
        levels: { easy: '댓글 틀(○○한 점이 좋았어. ~)을 보고 기준 2개로 점검한다.', base: '칭찬과 제안을 담은 두 문장 댓글을 쓰고 기준 3개로 점검한다.', challenge: '제안에 까닭까지 넣어 쓰고 기준 4개로 점검한다.' },
        wrap: {
          teacher: '"가상 반 누리집에 친구가 \'우리 반 텃밭 일기\'를 올렸어요. 칭찬 하나, 제안 하나를 담아 댓글을 달아 볼까요?" "별로다"처럼 쓴 학생에게 "어느 부분이 어떻게 바뀌면 더 좋을지 쓰면 친구가 고칠 수 있어요"라고 말해 준다.',
          exitTicket: [
            EX('rubric-writing', RUB('친구 글에 칭찬과 제안을 담은 댓글을 쓰고 점검해요.', { topic: '가상 반 누리집의 \'텃밭 일기\' 글에 칭찬과 제안을 담은 댓글을 두 문장으로 써요.', starter: '___한 점이 좋았어. ___하면 더 좋을 것 같아.', crit: ['구체적으로 칭찬했다', '제안을 하나 썼다', '읽는 사람을 존중했다'], ch: { prompt: '제안에 까닭까지 넣어 댓글을 쓰고 점검해요.', crit: '제안의 까닭을 썼다' }, must: [['왜냐하면', '때문에', '그러면']], chars: [20, 120], sentences: [2, 3], title: '예절 있는 댓글' }, 0.2)),
            { type: 'choice', prompt: '누리집 댓글을 달기 전에 할 일로 알맞은 것은?', options: ['읽는 사람을 떠올리며 한 번 더 읽는다', '가장 먼저 달려고 빨리 쓴다', '모르는 사람이니 아무렇게나 쓴다'], answer: 0, difficulty: 0.1, explain: '보내기 전에 한 번 더 읽으면 상처 주는 말을 거를 수 있어요.' },
          ],
        },
        worksheet: {
          title: '예절 있는 댓글',
          items: [
            { type: 'short', prompt: '친구 글에 달 칭찬 한 문장을 써요.' },
            { type: 'short', prompt: '친구 글에 달 제안 한 문장을 써요.' },
          ],
          easy: { note: '___한 점이 좋았어. ___하면 더 좋을 것 같아.', items: [{ type: 'check', prompt: '좋은 댓글에 들어갈 것에 표시해요.', options: ['칭찬', '제안', '놀림'] }] },
        },
      }),
    );
  }

  // ======== 5학년 · 학급 임원 선거와 공약 (<표 2> 자치활동 — 공동체 자치활동: 학급 중심의 자치활동) ========
  {
    const X = mk('g5-self', 5);
    const VOTE = [['기호 1', 9], ['기호 2', 13], ['기호 3', 6]];
    M.push(
      X('intro.why', {
        title: '대표가 필요한 까닭 고르기', method: '대표가 필요한 까닭 고르기', tool: 'wordcards', minutes: 6,
        levels: { easy: '교사가 보기 2개를 짚어 주고 함께 고른다.', base: '보기 3개를 스스로 고른다.', challenge: '고른 까닭 하나를 들어 대표가 할 일을 말한다.' },
        intro: {
          teacher: '"학급 회의를 이끌거나 반의 의견을 모아 전할 사람이 없다면 어떻게 될까요?" 시연 단추로 \'회의를 이끈다\'·\'반 의견을 모아 전한다\'·\'약속을 함께 챙긴다\'가 바구니에 담기는 모습을 보인다. "대표는 반에서 가장 인기 많은 사람이 하는 거예요"라는 말에는 "대표가 하는 일을 보면, 인기와 그 일을 잘 해내는 것은 같을까요?"라고 되묻는다.',
          student: '우리 반에 대표가 필요한 까닭을 카드에서 골라 보아요.',
          demo: { tool: 'wordcards', options: { mode: 'pick', basket: '대표가 필요한 까닭', cards: [C('lead', '회의를 이끈다'), C('pop', '가장 인기 있다'), C('voice', '반 의견을 모아 전한다'), C('boss', '친구들에게 시킨다'), C('keep', '약속을 함께 챙긴다')], shuffle: false }, sequence: [{ pick: ['lead', 'voice', 'keep'] }] },
          art: art('a paper classroom meeting with one paper child holding a small gavel and others raising hands', '대표는 왜 필요할까?', 'star', 'buttercup'),
        },
      }),
      X('intro.promise', {
        title: '공약 보고 첫인상 고르기', method: '공약 보고 첫인상 고르기', tool: 'emotion', minutes: 6,
        levels: { easy: '공약 카드 2개를 함께 읽고 하나에 눈금을 고른다.', base: '공약 카드 3개를 읽고 끌리는 정도를 눈금으로 고른다.', challenge: '눈금을 고른 까닭이 \'해낼 수 있어서\'인지 \'재미있어 보여서\'인지 말한다.' },
        intro: {
          teacher: '"가상 후보들의 공약이에요. \'쉬는 시간마다 간식 파티\', \'놀이 도구 함께 정리 당번\', \'고장 난 사물함 건의\' — 어느 것에 마음이 끌리나요?" 시연 단추로 한 공약에 끌리는 정도 눈금이 골라지는 모습을 보인다. 끌림에는 정답이 없다고 먼저 말하고, "간식 파티가 제일 좋아요"라는 말에는 "끌리는 것과 정말 해낼 수 있는 것은 같을까요? 오늘은 그걸 따져 봐요"라고 되묻는다.',
          student: '공약 카드를 읽고 마음이 얼마나 끌리는지 눈금으로 골라 보아요. 정답은 없어요.',
          demo: { tool: 'emotion', options: { mode: 'scale', situation: '공약: 놀이 도구 함께 정리 당번 만들기', feeling: '기대', steps: 5, scaleLabels: { 1: '조금', 5: '아주 많이' } }, sequence: [{ level: 4 }] },
          art: art('three paper promise cards pinned on a class board with tiny paper stars of different sizes', '어떤 공약에 끌리나요?', 'star', 'peach'),
        },
      }),
      X('activity.order', {
        title: '선거 절차 시간 띠', method: '선거 절차 시간 띠', tool: 'timeline', minutes: 14,
        levels: { easy: '절차 카드 3장(후보 등록·투표·발표)을 차례로 놓는다.', base: '절차 카드 5장을 차례로 놓는다.', challenge: '5장을 놓되 함정 카드(인기 투표로 미리 정하기)는 남기고, 단계마다 맡는 사람 카드를 잇는다.' },
        activity: {
          title: '학급 선거 절차 차례 놓기', tool: 'timeline',
          teacher: '"학급 임원 선거는 어떤 차례로 할까요?" 카드를 놓을 때마다 그 단계에서 누가 무엇을 하는지 말하게 한다. "투표하고 나서 공약을 들어도 돼요"라는 학생에게 "공약을 모르고 투표하면 무엇을 보고 고를까요? 그래서 선거 운동(공약 발표)이 투표보다 먼저예요"라고 말해 준다.',
          task: '학급 선거 절차 카드를 차례로 놓고, 단계마다 맡는 사람을 이어요.', levels: { easy: { live: true }, base: {}, challenge: {} },
          items: [
            SEQ('학급 임원 선거 절차 카드를 차례로 놓아요.', ['후보 등록', '선거 운동(공약 발표)', '투표', '개표', '당선자 발표'], ['후보 등록', '투표', '당선자 발표'], ['후보 등록', '선거 운동(공약 발표)', '투표', '개표', '당선자 발표'], { trap: '인기 투표로 미리 정하기' }, 0.2),
            { prompt: '선거 단계마다 맡는 사람 카드를 이어요.', toolOptions: { mode: 'match', slots: [{ id: 'reg', label: '후보 등록' }, { id: 'speech', label: '공약 발표' }, { id: 'vote', label: '투표' }, { id: 'count', label: '개표' }], cards: ['투표하는 반 친구 모두', '후보', '나서는 사람', '개표 도우미'] }, target: { match: { reg: '나서는 사람', speech: '후보', vote: '투표하는 반 친구 모두', count: '개표 도우미' } }, difficulty: 0.25,
              levels: { easy: { prompt: '선거 단계마다 맡는 사람 카드를 이어요(2짝).', toolOptions: { slots: [{ id: 'speech', label: '공약 발표' }, { id: 'vote', label: '투표' }], cards: ['투표하는 반 친구 모두', '후보'] }, target: { match: { speech: '후보', vote: '투표하는 반 친구 모두' } } } }, conclude: '공약을 듣고, 모두 투표하고, 함께 세어 발표해요.' },
            { prompt: '짝과 "공약 발표가 투표보다 먼저인 까닭"을 이야기해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '후보 등록 → 선거 운동 → ___ → 개표 → 당선자 발표', answer: '투표' }] },
      }),
      X('activity.rules', {
        title: '선거 원칙과 장면 잇기', method: '선거 원칙과 장면 잇기', tool: 'emotion', minutes: 13,
        levels: { easy: '원칙 2개(평등·비밀)에 지킨 장면을 잇는다.', base: '네 원칙에 지킨 장면을 잇는다.', challenge: '네 원칙에 잇고, 어긴 장면마다 어긴 원칙을 이은 뒤 고칠 방법을 말한다.' },
        activity: {
          title: '네 가지 선거 원칙 장면 잇기', tool: 'emotion',
          teacher: '"보통 선거는 모두가, 평등 선거는 한 사람 한 표, 직접 선거는 내가 직접, 비밀 선거는 아무도 모르게 투표하는 거예요." 원칙 칸을 읽고 장면 카드를 잇게 한다. "친한 친구가 대신 써 줘도 같은 표예요"라는 학생에게 "그건 내가 고른 것일까요? 직접 선거를 어긴 장면이에요"라고 말해 준다.',
          task: '선거 원칙 칸에 그 원칙을 지킨 장면, 어긴 장면 카드를 이어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
          items: [
            MATCH('선거 원칙에 그 원칙을 지킨 장면을 이어요.', [['평등 선거', '누구나 한 표씩 낸다'], ['비밀 선거', '가림판 뒤에서 쓴다'], ['보통 선거', '반 친구 모두 투표한다'], ['직접 선거', '내 표는 내가 쓴다']], { easy: 2, base: 4, challenge: 4, traps: ['인기 많은 친구는 두 표'] }, 0.2),
            MATCH('어긴 장면에 어긴 원칙을 이어요.', [['반장은 두 표씩 낸다', '평등 선거'], ['짝이 내 표를 대신 쓴다', '직접 선거'], ['누구 찍었는지 보여 준다', '비밀 선거'], ['지각한 친구는 못 낸다', '보통 선거']], { easy: 2, base: 4, challenge: 4 }, 0.3, { conclude: '네 원칙을 지켜야 모두가 같은 힘으로 대표를 뽑아요.' }),
            { prompt: '모둠에서 어긴 장면 하나를 골라 원칙에 맞게 고쳐 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '선거 원칙의 뜻을 짧게 써요.', columns: ['원칙', '뜻'], cells: [['보통 선거', ''], ['평등 선거', ''], ['직접 선거', ''], ['비밀 선거', '']] }] },
      }),
      X('activity.good', {
        title: '실천할 수 있는 공약 가려내기', method: '실천할 수 있는 공약 가려내기', tool: 'sortboard', minutes: 14,
        levels: { easy: '공약 카드 3장을 세 바구니에 한 장씩 나누고, 틀리면 까닭을 알려 주며 돌아온다.', base: '공약 카드 6장을 나눈다.', challenge: '공약 카드 8장을 나누고, \'해내기 어려워요\' 공약 하나를 해낼 수 있게 고쳐 말한다.' },
        activity: {
          title: '공약을 세 바구니에 가려내기', tool: 'sortboard',
          teacher: '"공약은 뽑히면 지켜야 하는 약속이에요. 반 임원이 정말 해낼 수 있을까? 모두에게 좋을까? 두 번 따져 봐요." 카드를 하나씩 읽고 따지게 한다. "숙제 없애기 공약이 제일 좋아요"라는 학생에게 "반 임원이 숙제를 없앨 수 있을까요? 끌리지만 해내기 어려운 공약이에요"라고 말해 준다.',
          task: '공약 카드를 해낼 수 있고 모두를 위한 것, 해내기 어려운 것, 몇 사람만 좋은 것으로 나누어요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
          items: [
            SORT('가상 후보들의 공약 카드를 세 바구니에 나누어요.', { slots: ['해낼 수 있고 모두를 위해요', '해내기 어려워요', '몇 사람만 좋아요'], groups: { '해낼 수 있고 모두를 위해요': ['놀이 도구 함께 정리 당번', '고장 난 사물함 건의하기'], '해내기 어려워요': ['숙제 모두 없애기', '날마다 간식 파티'], '몇 사람만 좋아요': ['내 모둠 먼저 급식', '친한 친구만 청소 빼 주기'] }, extra: { '해낼 수 있고 모두를 위해요': ['학급 회의 안건함 만들기'], '해내기 어려워요': ['운동장 새로 짓기'] } }, 0.25),
            SORT('다른 가상 반의 공약 카드를 세 바구니에 나누어요.', { slots: ['해낼 수 있고 모두를 위해요', '해내기 어려워요', '몇 사람만 좋아요'], groups: { '해낼 수 있고 모두를 위해요': ['책 나눔 상자 만들기', '쉬는 시간 놀이 순서표'], '해내기 어려워요': ['시험 모두 없애기', '수업 시간 줄이기'], '몇 사람만 좋아요': ['축구부만 공 먼저 쓰기', '임원 자리는 창가로'] }, extra: { '해낼 수 있고 모두를 위해요': ['학급 인사 약속 정하기'], '몇 사람만 좋아요': ['내 친구만 발표 먼저'] } }, 0.3, { conclude: '좋은 공약은 임원이 해낼 수 있고 반 모두를 위한 약속이에요.' }),
            { prompt: '짝과 \'해내기 어려워요\' 공약 하나를 해낼 수 있게 고쳐 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '\'숙제 모두 없애기\'를 해낼 수 있는 공약으로 고쳐 써요.' }] },
        notes: '계획의 \'할 수 있어요/어려워요/모두를 위해요\' 세 칸은 한 카드가 두 칸에 맞을 수 있어(분류판은 카드마다 정답 칸 하나), \'해낼 수 있고 모두를 위해요/해내기 어려워요/몇 사람만 좋아요\'로 바꿨다.',
      }),
      X('activity.mock', {
        title: '모의 투표와 개표', method: '모의 투표와 개표', tool: 'timer', minutes: 13,
        levels: { easy: '가상 후보 2명(기호 1·2)의 표 수를 기록판에 적는다.', base: '투표 차례 카드를 놓고, 가상 후보 3명의 표 수를 적는다.', challenge: '3명의 표 수를 적고, 개표 도우미 점검 칸까지 표시한다.' },
        activity: {
          title: '모의 투표 차례와 개표 기록', tool: 'timer',
          teacher: '"오늘은 이름 없이 공약만 적힌 가상 후보 기호 1·2·3 가운데 한 명에게 비밀 투표를 해요." 투표용지는 공약만 적힌 종이로 나눠 주고, 가림판 뒤에서 쓰게 한 뒤 실제로 개표한다. "누구 찍었는지 말해 줘도 되죠?"라는 학생에게 "비밀 선거라서 내 표는 나만 알아요. 그래야 눈치 보지 않고 고를 수 있어요"라고 말해 준다.',
          task: '투표 차례를 놓고, 공약만 보고 비밀 투표를 한 뒤 개표 결과를 적어요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '모의 투표를 하는 차례대로 카드를 놓아요.', toolOptions: { title: '투표 차례', cards: ['투표함에 넣기', '투표용지 받기', '결과 발표', '가림판 뒤에서 쓰기', '함께 개표하기'] }, target: { order: ['투표용지 받기', '가림판 뒤에서 쓰기', '투표함에 넣기', '함께 개표하기', '결과 발표'] }, difficulty: 0.2 },
            { prompt: '개표한 표 수를 가상 후보마다 기록판에 적어요.', toolOptions: { title: '개표 기록', fields: [{ label: '기호 1', unit: '표' }, { label: '기호 2', unit: '표' }, { label: '기호 3', unit: '표' }] }, target: { records: true }, difficulty: 0.15,
              levels: { easy: { prompt: '개표한 표 수를 가상 후보 둘에게 적어요.', toolOptions: { fields: [{ label: '기호 1', unit: '표' }, { label: '기호 2', unit: '표' }] } } } },
            SELF('개표 도우미가 지킨 것을 점검해요.', '개표 도우미 점검', ['표를 소리 내어 읽었다', '두 사람이 함께 셌다', '알아볼 수 없는 표는 따로 뒀다', '센 수를 다시 맞춰 봤다'], [2, 3, 4], 0.1, { conclude: '비밀 투표와 함께 세는 개표가 선거를 믿을 수 있게 해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '모의 투표 개표 결과를 써요.', columns: ['기호 1', '기호 2', '기호 3'], cells: [['', '', '']] }] },
        notes: '반 친구 이름이 아니라 공약만 적힌 가상 후보로 투표한다(친구 사이 인기 비교를 피한다).',
      }),
      X('wrap.result', {
        title: '개표 결과 막대그래프', method: '개표 결과 막대그래프', tool: 'chart', minutes: 7,
        levels: { easy: '가상 후보 2명의 막대를 완성한다.', base: '3명의 막대를 완성하고 가장 많은 표를 읽는다.', challenge: '3명의 막대를 완성하고 1·2위의 표 차이를 고른다.' },
        wrap: {
          teacher: '"가상 개표 결과를 막대그래프로 나타내 볼까요?" 막대를 완성한 뒤 가장 높은 막대를 읽게 한다. "표가 적은 후보의 공약은 버려요"라는 학생에게 "적게 뽑혀도 그 공약을 좋아한 친구가 있어요. 좋은 공약은 학급 회의에서 다시 이야기할 수 있어요"라고 말해 준다.',
          exitTicket: [
            { type: 'tool', tool: 'chart', options: { type: 'bar', mode: 'build', title: '모의 투표 결과(가상)', unit: '표', data: VOTE, given: [0] }, prompt: '가상 개표 결과로 막대그래프를 완성해요.', target: { build: true }, difficulty: 0.2,
              levels: { easy: { prompt: '가상 개표 결과로 막대 두 개를 완성해요.', toolOptions: { data: VOTE.slice(0, 2) } } } },
            { type: 'tool', tool: 'chart', options: { type: 'bar', mode: 'read', title: '모의 투표 결과(가상)', unit: '표', data: VOTE, choices: ['기호 1', '기호 2', '기호 3'], question: '가장 많은 표를 받은 후보는?' }, prompt: '가상 결과에서 가장 많은 표를 받은 후보를 골라요.', target: { pick: 1 }, difficulty: 0.15,
              levels: { challenge: { prompt: '가상 결과에서 1위와 2위의 표 차이를 골라요.', toolOptions: { choices: ['2표', '4표', '7표'], question: '1위와 2위의 차이는?' }, target: { pick: 1 } } } },
            { type: 'choice', prompt: '표를 적게 받은 후보의 좋은 공약은 어떻게 할까요?', options: ['모두 잊는다', '학급 회의에서 다시 이야기할 수 있다', '뽑힌 사람만 정한다'], answer: 1, difficulty: 0.1, explain: '좋은 의견은 선거가 끝나도 함께 살릴 수 있어요.' },
          ],
        },
        worksheet: {
          title: '개표 결과 읽기',
          items: [
            { type: 'choice', prompt: '가상 결과에서 두 번째로 많은 표를 받은 후보는?', options: ['기호 1', '기호 2', '기호 3'], answer: '기호 1' },
            { type: 'short', prompt: '선거 결과를 받아들이는 알맞은 태도를 한 문장으로 써요.' },
          ],
        },
        notes: '그래프 수치는 수업용 가상 결과다. 모의 투표 실제 결과로 바꿔 그려도 된다.',
      }),
      X('wrap.reflect', {
        title: '공약으로 고른 까닭 쓰기', method: '공약으로 고른 까닭 쓰기', tool: 'rubric-writing', minutes: 7,
        levels: { easy: '문장 틀(나는 ~ 공약을 보고 골랐다. 왜냐하면 ~)을 보고 기준 2개로 점검한다.', base: '두 문장으로 쓰고 기준 3개로 점검한다.', challenge: '지킨 선거 원칙 하나를 넣어 쓰고 기준 4개로 점검한다.' },
        wrap: {
          teacher: '"모의 투표에서 어떤 공약을 보고 골랐는지 써 볼까요? 누구를 뽑았는지는 쓰지 않아도 돼요." "그냥 좋아서"라고 쓴 학생에게 "그 공약이 우리 반에 어떤 도움이 되는지 쓰면 까닭이 돼요"라고 말해 준다.',
          exitTicket: [
            EX('rubric-writing', RUB('공약을 근거로 고른 까닭을 두 문장으로 쓰고 점검해요.', { topic: '모의 투표에서 어떤 공약을 보고 골랐는지, 그 까닭을 두 문장으로 써요(후보 기호는 쓰지 않아요).', starter: '나는 ___ 공약을 보고 골랐다. 왜냐하면 ___.', crit: ['고른 공약을 썼다', '까닭을 썼다', '반 모두에게 좋은 점을 썼다'], ch: { prompt: '지킨 선거 원칙을 넣어 고른 까닭을 쓰고 점검해요.', crit: '선거 원칙 하나를 넣었다' }, must: [['보통', '평등', '직접', '비밀']], chars: [20, 140], sentences: [2, 3], title: '공약으로 고른 까닭' }, 0.2)),
            { type: 'choice', prompt: '임원을 뽑을 때 가장 알맞은 기준은 무엇인가요?', options: ['가장 인기 있는 친구', '해낼 수 있고 모두를 위한 공약', '나와 가장 친한 친구'], answer: 1, difficulty: 0.1, explain: '선거는 인기가 아니라 공약을 보고 고르는 거예요.' },
          ],
        },
        worksheet: {
          title: '공약으로 골라요',
          items: [
            { type: 'short', prompt: '내가 고른 공약과 그 까닭을 써요.' },
            { type: 'check', prompt: '오늘 모의 투표에서 지킨 원칙에 표시해요.', options: ['보통 선거', '평등 선거', '직접 선거', '비밀 선거'] },
          ],
        },
      }),
    );
  }

  // ======== 5학년 · 개인 탐구 계획서와 믿을 만한 자료 (<표 2> 자율활동 — 주제 탐구 활동: 개인 연구) ========
  {
    const X = mk('g5-inq', 5);
    const BIRD = [['참새', 14], ['비둘기', 9], ['까치', 6], ['직박구리', 4]];
    M.push(
      X('intro.q', {
        title: '궁금한 것 생각그물', method: '궁금한 것 생각그물', tool: 'mindmap', minutes: 6,
        levels: { easy: '교사가 가지 2개(사는 곳·먹이)에 궁금한 것을 함께 붙인다.', base: '가지 3개에 궁금한 것 카드를 스스로 붙인다.', challenge: '카드 하나를 \'왜·어떻게\'로 시작하는 탐구 질문으로 바꿔 말한다.' },
        intro: {
          teacher: '"학교 둘레의 새에 대해 궁금한 것을 펼쳐 볼까요?" 시연 단추로 궁금한 것 카드가 사는 곳·먹이·생김새 가지에 붙는 모습을 보인다. "궁금한 건 그냥 인터넷에 치면 끝나요"라는 말에는 "검색 한 번으로 답이 나오는 질문과 내가 직접 알아봐야 하는 질문은 무엇이 다를까요?"라고 되묻는다.',
          student: '관심 있는 분야 하나를 떠올리고, 그것에 대해 궁금한 것을 가지처럼 펼쳐 보아요.',
          demo: { tool: 'mindmap', options: { topic: '학교 둘레의 새', slots: ['사는 곳', '먹이', '생김새'], cards: ['어디에 둥지를 틀까?', '겨울엔 무엇을 먹을까?', '깃털 색은 왜 다를까?', '물가에도 살까?'] }, sequence: [{ sort: { '사는 곳': ['어디에 둥지를 틀까?', '물가에도 살까?'], 먹이: ['겨울엔 무엇을 먹을까?'], 생김새: ['깃털 색은 왜 다를까?'] } }] },
          art: art('a paper tree in a schoolyard with small paper birds and floating question marks around the branches', '무엇이 궁금한가요?', 'tree', 'mint'),
        },
      }),
      X('intro.two', {
        title: '두 자료 중 믿을 것 고르기', method: '두 자료 중 믿을 것 고르기', tool: 'wordcards', minutes: 6,
        levels: { easy: '교사가 자료 카드 2장의 출처를 함께 읽고 고른다.', base: '자료 카드 3장 넘게 있는 가운데 믿을 만한 것을 어림해 고른다.', challenge: '고른 까닭을 출처·작성 시기로 말한다.' },
        intro: {
          teacher: '"같은 주제인 \'우리나라 텃새\'에 대한 자료 카드예요. 어느 것을 믿을 수 있을까요?" 시연 단추로 \'기관 누리집·올해 자료\'와 \'도감·작성 날짜 있음\'이 바구니에 담기는 모습을 보인다. "조회 수가 많으면 맞는 자료예요"라는 말이 나오면 "많이 본 것과 맞는 것은 같을까요? 누가 언제 썼는지 봐요"라고 되묻는다.',
          student: '자료 카드에서 누가 언제 만든 자료인지 보고, 믿을 만한 것을 골라 보아요.',
          demo: { tool: 'wordcards', options: { mode: 'pick', basket: '믿을 만한 자료', cards: [C('org', '기관 누리집·올해 자료'), C('view', '조회 수 많은 짧은 영상'), C('book', '도감·작성 날짜 있음'), C('anon', '글쓴이 모르는 글'), C('old', '20년 전 신문 한 줄')], shuffle: false }, sequence: [{ pick: ['org', 'book'] }] },
          art: art('two paper documents side by side on a desk, one with a stamp and a date, one torn with no name, and a paper magnifier', '어느 자료를 믿을까?', 'leaf', 'lavender'),
        },
      }),
      X('activity.parts', {
        title: '탐구 계획서 네 칸 채우기', method: '계획서 네 칸 채우기', tool: 'story', minutes: 14,
        levels: { easy: '계획서 2칸(질문·방법)에 카드를 넣는다.', base: '계획서 4칸(질문·방법·일정·자료)에 카드를 넣는다.', challenge: '4칸을 채우되 계획서에 맞지 않는 함정 카드는 남기고, 한 칸을 내 말로 바꿔 말한다.' },
        activity: {
          title: '가상 친구의 탐구 계획서 채우기', tool: 'story',
          teacher: '"탐구 계획서에는 무엇을 알고 싶은지(질문), 어떻게 알아볼지(방법), 언제 할지(일정), 무엇을 볼지(자료)가 들어가요." 칸 이름을 소리 내어 읽고 카드를 넣게 한다. "방법은 \'열심히 하기\'라고 쓰면 돼요"라는 학생에게 "열심히는 마음이에요. 관찰·설문·책 찾기처럼 무엇을 할지가 방법이에요"라고 말해 준다.',
          task: '가상 친구의 탐구 계획서 빈칸에 알맞은 카드를 넣어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
          items: [
            { prompt: '솔의 \'학교 둘레 새\' 탐구 계획서 빈칸에 카드를 넣어요.', toolOptions: { mode: 'fill', title: '솔의 탐구 계획서', slots: [{ id: 'q', label: '탐구 질문: ___' }, { id: 'how', label: '방법: ___' }, { id: 'when', label: '일정: ___' }, { id: 'src', label: '자료: ___' }], cards: ['쉬는 시간마다 2주 동안', '새 도감과 기관 누리집', '어떤 새가 가장 많이 올까?', '날마다 같은 곳에서 세기'] }, target: { fill: { q: '어떤 새가 가장 많이 올까?', how: '날마다 같은 곳에서 세기', when: '쉬는 시간마다 2주 동안', src: '새 도감과 기관 누리집' } }, difficulty: 0.25,
              levels: {
                easy: { prompt: '솔의 탐구 계획서 질문·방법 칸에 카드를 넣어요.', toolOptions: { slots: [{ id: 'q', label: '탐구 질문: ___' }, { id: 'how', label: '방법: ___' }], cards: ['날마다 같은 곳에서 세기', '어떤 새가 가장 많이 올까?'] }, target: { fill: { q: '어떤 새가 가장 많이 올까?', how: '날마다 같은 곳에서 세기' } } },
                challenge: { prompt: '솔의 탐구 계획서 네 칸을 채워요(넣지 않을 카드도 있어요).', toolOptions: { cards: ['쉬는 시간마다 2주 동안', '열심히 하기', '새 도감과 기관 누리집', '어떤 새가 가장 많이 올까?', '날마다 같은 곳에서 세기'] } },
              } },
            { prompt: '건의 \'교실 식물\' 탐구 계획서 빈칸에 카드를 넣어요.', toolOptions: { mode: 'fill', title: '건의 탐구 계획서', slots: [{ id: 'q', label: '탐구 질문: ___' }, { id: 'how', label: '방법: ___' }, { id: 'when', label: '일정: ___' }, { id: 'src', label: '자료: ___' }], cards: ['식물 기르기 책', '햇빛 따라 키가 다를까?', '창가·복도 화분 키 재기', '월·목 아침 3주'] }, target: { fill: { q: '햇빛 따라 키가 다를까?', how: '창가·복도 화분 키 재기', when: '월·목 아침 3주', src: '식물 기르기 책' } }, difficulty: 0.3,
              levels: {
                easy: { prompt: '건의 탐구 계획서 질문·방법 칸에 카드를 넣어요.', toolOptions: { slots: [{ id: 'q', label: '탐구 질문: ___' }, { id: 'how', label: '방법: ___' }], cards: ['창가·복도 화분 키 재기', '햇빛 따라 키가 다를까?'] }, target: { fill: { q: '햇빛 따라 키가 다를까?', how: '창가·복도 화분 키 재기' } } },
                challenge: { prompt: '건의 탐구 계획서 네 칸을 채워요(넣지 않을 카드도 있어요).', toolOptions: { cards: ['식물 기르기 책', '햇빛 따라 키가 다를까?', '아무 때나 생각날 때', '창가·복도 화분 키 재기', '월·목 아침 3주'] } },
              }, conclude: '계획서에는 질문·방법·일정·자료가 모두 들어가야 해요.' },
            { prompt: '짝에게 계획서 한 칸을 내 말로 바꿔 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '내 탐구 계획서의 네 칸을 짧게 써요.', columns: ['질문', '방법', '일정', '자료'], cells: [['', '', '', '']] }] },
      }),
      X('activity.when', {
        title: '탐구 일정 시간 띠', method: '탐구 일정 시간 띠', tool: 'timeline', minutes: 13,
        levels: { easy: '탐구 단계 카드 3장을 차례로 놓는다.', base: '단계 카드 4장을 차례로 놓는다.', challenge: '발표 전에 \'여유 날\'을 넣어 5장을 놓고, 함정 카드는 남긴다.' },
        activity: {
          title: '탐구 단계 차례 놓기', tool: 'timeline',
          teacher: '"탐구는 어떤 차례로 할까요?" 카드를 놓을 때마다 앞 단계가 끝나야 다음 단계를 할 수 있는지 묻는다. "자료는 발표 전날 한꺼번에 모으면 돼요"라는 학생에게 "하루에 다 모으지 못하면 어떻게 될까요? 그래서 여유 날을 남겨 둬요"라고 말해 준다.',
          task: '탐구 단계 카드를 먼저 할 것부터 차례로 놓아요.', levels: { easy: { live: true }, base: {}, challenge: {} },
          items: [
            SEQ('솔의 새 탐구 단계를 차례로 놓아요.', ['탐구 질문 정하기', '2주 동안 새 세기', '표·그래프로 정리', '발표하기'], ['탐구 질문 정하기', '2주 동안 새 세기', '발표하기'], ['탐구 질문 정하기', '2주 동안 새 세기', '표·그래프로 정리', '여유 날: 빠진 것 채우기', '발표하기'], { axis: ['시작', '발표'], trap: '발표 뒤 질문 정하기', chPrompt: '발표 전에 여유 날을 넣어 솔의 단계를 놓아요(넣지 않을 카드도 있어요).' }, 0.2),
            SEQ('건의 식물 탐구 단계를 차례로 놓아요.', ['화분 두 곳 정하기', '3주 동안 키 재기', '잰 값을 표로 정리', '알게 된 점 쓰기'], ['화분 두 곳 정하기', '3주 동안 키 재기', '알게 된 점 쓰기'], ['화분 두 곳 정하기', '3주 동안 키 재기', '잰 값을 표로 정리', '여유 날: 다시 재기', '알게 된 점 쓰기'], { axis: ['시작', '끝'], trap: '재기 전에 결론 쓰기', chPrompt: '쓰기 전에 여유 날을 넣어 건의 단계를 놓아요(넣지 않을 카드도 있어요).' }, 0.25, { conclude: '탐구 일정은 차례대로, 여유 날을 남겨 짜요.' }),
            { prompt: '짝과 "여유 날이 없으면 어떤 일이 생길까?"를 이야기해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '내 탐구 일정을 주마다 써요.', columns: ['1주', '2주', '3주'], cells: [['', '', '']] }] },
      }),
      X('activity.judge', {
        title: '자료 믿을 만함 가려내기', method: '자료 믿을 만함 가려내기', tool: 'sortboard', minutes: 14,
        levels: { easy: '자료 카드 4장을 두 바구니에 나누고, 틀리면 까닭을 알려 주며 돌아온다.', base: '자료 카드 6장을 나눈다.', challenge: '자료 카드 8장을 나누고, \'따져 봐야 해요\' 카드마다 무엇을 더 확인할지 말한다.' },
        activity: {
          title: '출처·시기로 자료 나누기', tool: 'sortboard',
          teacher: '"자료를 믿기 전에 두 가지를 봐요. 누가 만들었나(출처), 언제 만들었나(작성 시기)." 카드마다 두 질문을 소리 내어 묻게 한다. "오래된 자료도 책에 있으니 늘 맞아요"라는 학생에게 "20년 전 학교 둘레 새 수가 지금과 같을까요? 바뀌는 내용은 최근 자료를 봐요"라고 말해 준다.',
          task: '자료 카드를 출처와 작성 시기로 따져 믿을 만한 것과 따져 볼 것으로 나누어요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
          items: [
            SORT('새 탐구 자료 카드를 두 바구니에 나누어요.', { slots: ['믿을 만해요', '따져 봐야 해요'], groups: { '믿을 만해요': ['기관 누리집 올해 조사', '날짜 있는 새 도감', '우리가 직접 센 기록'], '따져 봐야 해요': ['글쓴이 없는 블로그', '20년 전 새 수 자료', '조회 수 많은 짧은 영상'] }, easy: 2, extra: { '믿을 만해요': ['박물관 안내 책자'], '따져 봐야 해요': ['날짜 없는 사진 한 장'] } }, 0.2),
            SORT('식물 탐구 자료 카드를 두 바구니에 나누어요.', { slots: ['믿을 만해요', '따져 봐야 해요'], groups: { '믿을 만해요': ['식물원 누리집 안내', '올해 나온 식물 책', '우리가 잰 키 기록'], '따져 봐야 해요': ['"카더라" 단체 대화', '출처 없는 그림 카드', '오래된 광고 전단'] }, easy: 2, extra: { '믿을 만해요': ['과학관 해설 자료'], '따져 봐야 해요': ['날짜 없는 퍼온 글'] } }, 0.25, { conclude: '자료는 누가, 언제 만들었는지 보고 믿을지 정해요.' }),
            { prompt: '모둠에서 \'따져 봐야 해요\' 카드 하나를 골라 더 확인할 것을 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'check', prompt: '자료를 믿기 전에 볼 것에 표시해요.', options: ['누가 만들었나', '언제 만들었나', '조회 수가 많은가', '그림이 예쁜가'] }] },
      }),
      X('activity.table', {
        title: '모은 자료 그래프로 정리', method: '모은 자료 표·그래프로 정리', tool: 'chart', minutes: 13,
        levels: { easy: '새 3종의 막대를 완성한다.', base: '새 4종의 막대를 완성하고 가장 많은 새를 읽는다.', challenge: '4종을 완성하고 그래프로 알게 된 점을 고른다.' },
        activity: {
          title: '가상 관찰 기록 막대그래프', tool: 'chart',
          teacher: '"솔이 2주 동안 센 새 수(가상 기록)를 표에서 막대로 옮겨 볼까요?" 눈금 한 칸의 크기를 먼저 읽게 한다. "그래프로 그리면 끝이에요"라는 학생에게 "그래프를 보고 무엇을 알게 됐는지 말할 수 있어야 탐구가 끝나요"라고 말해 준다.',
          task: '가상 관찰 기록 표를 막대그래프로 옮기고 알게 된 점을 찾아요.', levels: { easy: { showValues: true }, base: {}, challenge: {} },
          items: [
            { prompt: '관찰 기록 표를 보고 막대그래프를 완성해요(가상 자료).', toolOptions: { type: 'bar', mode: 'build', title: '2주 동안 센 새(가상)', unit: '마리', data: BIRD, given: [0], scale: 2 }, target: { build: true }, difficulty: 0.25,
              levels: { easy: { prompt: '관찰 기록 표를 보고 막대 세 개를 완성해요(가상 자료).', toolOptions: { data: BIRD.slice(0, 3) } } } },
            { prompt: '가상 기록에서 가장 많이 온 새는 무엇인가요?', toolOptions: { type: 'bar', mode: 'read', title: '2주 동안 센 새(가상)', unit: '마리', data: BIRD, choices: BIRD.map((x) => x[0]), question: '가장 많이 온 새는?' }, target: { pick: 0 }, difficulty: 0.15 },
            { prompt: '그래프로 알게 된 점으로 알맞은 것을 골라요(가상 자료).', toolOptions: { type: 'bar', mode: 'read', title: '2주 동안 센 새(가상)', unit: '마리', data: BIRD, choices: ['참새가 직박구리보다 많이 왔다', '까치가 가장 많이 왔다', '새는 겨울에 모두 떠난다'], question: '알게 된 점은?', why: ['', '까치 막대는 세 번째예요.', '그래프는 2주 기록이라 계절을 알 수 없어요.'] }, target: { pick: 0 }, difficulty: 0.3, conclude: '그래프에서 알게 된 점은 그래프에 있는 것만으로 말해요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '가상 그래프에서 알게 된 점 하나를 써요.' }] },
        notes: '관찰 수치는 수업용 가상 기록이다.',
      }),
      X('wrap.write', {
        title: '내 탐구 계획서 쓰기', method: '탐구 계획서 쓰기', tool: 'rubric-writing', minutes: 7,
        levels: { easy: '문장 틀을 보고 질문·방법 두 기준으로 점검한다.', base: '네 칸(질문·방법·일정·자료)을 모두 써서 기준 4개로 점검한다.', challenge: '자료의 출처를 어떻게 확인할지까지 써서 기준 5개로 점검한다.' },
        wrap: {
          teacher: '"오늘 배운 네 칸으로 내 탐구 계획서를 써 볼까요?" "동물에 대해 알아보기"처럼 넓게 쓴 학생에게 "동물 가운데 무엇의, 무엇이 궁금한가요? 하나로 좁히면 방법이 보여요"라고 말해 준다.',
          exitTicket: [
            EX('rubric-writing', RUB('내 탐구 계획서를 쓰고 기준표로 점검해요.', { topic: '내가 알아보고 싶은 것으로 탐구 계획서를 써요(질문·방법·일정·자료).', starter: '질문: ___ / 방법: ___ / 일정: ___ / 자료: ___', crit: ['탐구 질문을 썼다', '방법을 썼다', '일정을 썼다', '자료를 썼다'], base: 4, ch: { prompt: '자료 출처를 확인할 방법까지 넣어 계획서를 쓰고 점검해요.', crit: '출처 확인 방법을 썼다' }, must: [['출처', '누리집', '도감', '책']], chars: [40, 200], title: '내 탐구 계획서' }, 0.2)),
            { type: 'choice', prompt: '탐구 계획서의 \'방법\'으로 알맞은 것은?', options: ['열심히 하기', '2주 동안 같은 곳에서 세기', '재미있게 하기'], answer: 1, difficulty: 0.1, explain: '방법은 무엇을 어떻게 할지 적어요.' },
          ],
        },
        worksheet: {
          title: '내 탐구 계획서',
          items: [
            { type: 'table', prompt: '내 탐구 계획서를 써요.', columns: ['질문', '방법', '일정', '자료'], cells: [['', '', '', '']] },
            { type: 'short', prompt: '자료가 믿을 만한지 어떻게 확인할지 써요.' },
          ],
          easy: { note: '질문: ___ / 방법: ___', items: [{ type: 'short', prompt: '내가 궁금한 것 하나를 질문으로 써요.' }] },
        },
      }),
      X('wrap.peer', {
        title: '짝 계획서 서로 보기', method: '짝 계획서 서로 보기', tool: 'timer', minutes: 7,
        levels: { easy: '짝 계획서에서 1칸(질문)만 보고 표시해 준다.', base: '4칸(질문·방법·일정·자료)을 보고 표시해 준다.', challenge: '4칸을 표시하고 \'제안 하나 말하기\' 칸까지 표시한다.' },
        wrap: {
          teacher: '"짝과 계획서를 바꿔 기준표 칸에 표시해 주세요. 빠진 칸이 있으면 무엇이 빠졌는지만 알려 줘요." "다 좋아"만 말하는 학생에게 "어느 칸이 왜 좋은지, 무엇을 더하면 좋을지 하나만 말해 줘요"라고 말해 준다.',
          exitTicket: [
            EX('timer', SELF('짝 계획서에 있는 칸을 보고 표시해 줘요.', '짝 계획서 보기', ['탐구 질문이 있다', '방법이 있다', '일정이 있다', '자료가 있다', '제안 하나를 말했다'], [1, 4, 5], 0.1)),
            { type: 'choice', prompt: '짝 계획서에 해 줄 말로 알맞은 것은?', options: ['그냥 별로야', '일정에 여유 날을 넣으면 좋겠어', '네 건 볼 필요 없어'], answer: 1, difficulty: 0.1, explain: '무엇을 어떻게 바꾸면 좋을지 말해 주면 도움이 돼요.' },
            { type: 'short', prompt: '짝에게 받은 제안 하나를 써요.' },
          ],
        },
        worksheet: {
          title: '짝 계획서 보기',
          items: [
            { type: 'check', prompt: '짝 계획서에 있는 칸에 표시해요.', options: ['질문', '방법', '일정', '자료'] },
            { type: 'short', prompt: '짝에게 해 줄 제안 하나를 써요.' },
          ],
        },
      }),
    );
  }

  // ======== 5학년 · 개인 프로젝트형 봉사 설계와 평가 (<표 2> 자율활동 — 프로젝트형 봉사활동: 개인 프로젝트형 봉사활동) ========
  {
    const X = mk('g5-serve', 5);
    const LOG = [['1주', 3], ['2주', 3], ['3주', 0], ['4주', 1]];
    M.push(
      X('intro.respect', {
        title: '봉사받는 사람 마음 고르기', method: '봉사 장면 받는 사람 마음 고르기', tool: 'emotion', minutes: 6,
        levels: { easy: '교사가 장면 2개를 읽어 주고 마음 카드를 함께 잇는다.', base: '장면 3개에 받는 사람 마음 카드를 스스로 잇는다.', challenge: '장면마다 그 마음이 생긴 까닭을 말한다.' },
        intro: {
          teacher: '"도서관에서 책을 나르는 사서 선생님을 돕는 세 장면이에요. 받는 사람 마음은 어땠을까요?" 시연 단추로 장면마다 마음 카드가 이어지는 모습을 보인다. "도와주기만 하면 다 고마워해요"라는 말에는 "묻지 않고 마음대로 옮겼더니 찾던 책이 사라졌다면요?"라고 되묻는다.',
          student: '봉사 장면을 보고 도움을 받는 사람의 마음을 골라 보아요.',
          demo: { tool: 'emotion', options: { slots: [{ id: 's1', label: '"도와드릴까요?" 묻고 도와요' }, { id: 's2', label: '묻지 않고 책을 옮겨요' }, { id: 's3', label: '말한 곳에 정리해요' }], cards: ['당황함', '고마움', '편안함'] }, sequence: [{ match: { s1: '고마움', s2: '당황함', s3: '편안함' } }] },
          art: art('a paper child asking a paper librarian before carrying a stack of paper books, with a small heart above them', '받는 사람은 어떤 마음일까?', 'heart', 'peach'),
        },
      }),
      X('intro.log', {
        title: '가상 봉사 기록 그래프 읽기', method: '가상 봉사 기록 그래프 읽기', tool: 'chart', minutes: 6,
        levels: { easy: '교사가 1·2주 막대만 짚어 함께 읽는다.', base: '4주 막대를 모두 읽고 꾸준했는지 고른다.', challenge: '3주에 줄어든 까닭을 어림하고 바꿀 점을 말한다.' },
        intro: {
          teacher: '"가상의 친구 \'윤\'이 4주 동안 한 봉사 횟수예요. 꾸준히 했을까요?" 시연 단추로 \'3주에 멈췄다가 4주에 조금 했다\'가 골라지는 모습을 보인다. "한 번 많이 하면 꾸준한 거예요"라는 말에는 "1주에 많이 하고 그다음에 멈추면, 받는 사람은 어떨까요?"라고 되묻는다.',
          student: '그래프에서 주마다 봉사 횟수를 읽고, 꾸준했는지 생각해 보아요.',
          demo: { tool: 'chart', options: { type: 'bar', mode: 'read', title: '윤의 주별 봉사 횟수(가상)', unit: '번', data: LOG, showValues: true, question: '윤의 봉사는 어땠나요?', choices: ['4주 내내 같았다', '3주에 멈췄다가 4주에 조금 했다', '점점 늘었다'] }, sequence: [{ pick: 1 }] },
          art: art('a paper calendar with four weekly boxes and small paper hearts stacked in each box, one box empty', '봉사는 꾸준했을까?', 'heart', 'mint'),
        },
        notes: '그래프는 가상 인물의 수업용 기록이다.',
      }),
      X('activity.dilemma', {
        title: '도움을 원하지 않을 때', method: '갈림길: 돕고 싶은데 상대가 원하지 않을 때', tool: 'dilemma', minutes: 14,
        levels: { easy: '갈림 1번에서 고르고 근거 한 장을 고른다.', base: '갈림 2번(묻기 → 원하는 도움 듣기)을 지나 근거를 고른다.', challenge: '갈림 3번(봉사 계획 고치기까지)을 지나 알맞은 근거를 모두 고르고, 다른 길의 결과와 견준다.' },
        activity: {
          title: '갈림길: 원하지 않는 도움', tool: 'dilemma',
          teacher: '"윤은 1학년 동생들의 신발장 정리를 돕기로 했어요. 그런데 한 동생이 \'내가 할래요\'라고 해요." 고를 때마다 영향 칸에서 동생의 마음을 읽게 한다. "도와주는 거니까 그냥 해 주면 돼요"라는 학생에게 "봉사는 내가 주고 싶은 것을 주는 것일까요, 받는 사람에게 필요한 것을 하는 것일까요?"라고 묻는다.',
          task: '갈림길마다 고르고, 결과를 읽은 뒤 내 선택의 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: DIL({
            title: '내가 할래요', word: '받는 사람을 존중하는',
            steps: [
              { text: '신발장 정리를 도우러 갔는데 1학년 동생이 "내가 할래요"라고 해요.', motif: 'house',
                good: ['wait', '"그럼 지켜볼게, 필요하면 불러"라고 한다', '동생이 혼자 정리하며 뿌듯해해요.', [['동생', '스스로 해내요', 1]]],
                bad: ['force', '빨리 끝내려고 대신 정리해 준다', '동생이 시무룩해져요.', '받는 사람이 원하지 않는 도움은 부담이 돼요.', [['동생', '서운해요', -1]]] },
              { text: '동생이 높은 칸에 손이 닿지 않아 나를 쳐다봐요.', motif: 'star',
                good: ['ask', '"어떻게 도와줄까?" 하고 묻는다', '동생이 "위 칸만 해 주세요"라고 말해요.', [['동생', '원하는 도움을 받아요', 1]]],
                bad: ['all', '아예 처음부터 다 다시 정리한다', '동생이 한 정리가 없어졌어요.', '도울 때는 필요한 만큼만 해요.', [['동생', '애쓴 것이 사라져요', -1]]] },
              { text: '돌아와서 다음 주 봉사 계획을 다시 봐요.', motif: 'sun',
                good: ['fix', '계획에 "먼저 묻기"를 넣어 고친다', '다음 봉사가 더 알맞아질 거예요.', [['동생들', '원하는 도움을 받아요', 1], ['나', '봉사가 나아져요', 1]]],
                bad: ['same', '계획은 그대로 두고 더 빨리 한다', '같은 일이 또 생겨요.', '실천해 보고 알게 된 점은 계획에 반영해요.', [['동생들', '또 서운해요', -1]]] },
            ],
            ending: '받는 사람에게 먼저 묻는 봉사로 계획을 고쳤어요.',
            reasons: [{ id: 'need', text: '봉사는 받는 사람에게 필요한 것을 한다' }, { id: 'ask', text: '먼저 물어야 원하는 도움을 안다' }, { id: 'fast', text: '빨리 끝내는 봉사가 좋은 봉사다', why: '빨리 끝내도 받는 사람이 원하지 않으면 도움이 아니에요.' }, { id: 'me', text: '내가 주고 싶은 것을 주면 된다', why: '봉사는 받는 사람의 마음과 필요를 먼저 생각해요.' }],
            good: ['need', 'ask'],
            talk: '모둠에서 "도움을 거절당했을 때 할 수 있는 말"을 하나씩 이야기해요.',
            conclude: '봉사는 받는 사람에게 먼저 묻고, 필요한 만큼 도와요.',
          }),
        },
        worksheet: { items: [{ type: 'short', prompt: '봉사하기 전에 받는 사람에게 할 질문 하나를 써요.' }] },
      }),
      X('activity.design', {
        title: '내 봉사 설계 생각그물', method: '내 봉사 설계 생각그물', tool: 'mindmap', minutes: 13,
        levels: { easy: '가지 2개(누구를·무엇을)에 카드를 붙인다.', base: '가지 4개(누구를·무엇을·얼마나 자주·어떻게)에 카드를 붙인다.', challenge: '\'점검 방법\' 가지까지 5개에 붙이고, 함정 카드는 남긴다.' },
        activity: {
          title: '가상 친구의 봉사 설계 가지 붙이기', tool: 'mindmap',
          teacher: '"봉사를 설계할 때는 누구를, 무엇을, 얼마나 자주, 어떻게 할지 정해요." 카드마다 어느 가지인지 묻는다. "얼마나 자주는 \'시간 날 때\'라고 쓰면 돼요"라는 학생에게 "시간 날 때만 하면 받는 사람은 언제 기다려야 할까요? 일주일에 몇 번처럼 정해요"라고 말해 준다.',
          task: '가상 친구의 봉사 설계 카드를 알맞은 가지에 붙여요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
          items: [
            BRANCH('솔의 \'학급 도서 정리\' 봉사 설계 카드를 가지에 붙여요.', '솔의 학급 도서 봉사', [['누구를', ['책 빌리는 반 친구']], ['무엇을', ['흩어진 책 제자리 꽂기']], ['얼마나 자주', ['화·금 쉬는 시간']], ['어떻게', ['분류 번호 보고 꽂기']], ['점검 방법', ['날마다 기록표 쓰기']]], { easy: 2, base: 4, challenge: 5 }, ['생각날 때 아무렇게나'], 0.2),
            BRANCH('건의 \'복도 화분 물 주기\' 봉사 설계 카드를 가지에 붙여요.', '건의 화분 봉사', [['누구를', ['복도를 쓰는 모두']], ['무엇을', ['화분 흙 보고 물 주기']], ['얼마나 자주', ['월·수·금 아침']], ['어떻게', ['흙이 마르면 조금씩']], ['점검 방법', ['잎 상태 사진 기록']]], { easy: 2, base: 4, challenge: 5 }, ['물을 한 번에 많이'], 0.25, { conclude: '봉사 설계에는 누구를·무엇을·얼마나 자주·어떻게가 모두 들어가요.' }),
            { prompt: '짝에게 내가 해 볼 봉사의 \'누구를·무엇을\'을 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '내 봉사 설계를 써요.', columns: ['누구를', '무엇을', '얼마나 자주', '어떻게'], cells: [['', '', '', '']] }] },
      }),
      X('activity.week', {
        title: '4주 봉사 실천 시간 띠', method: '봉사 실천 시간 띠', tool: 'timeline', minutes: 14,
        levels: { easy: '실천 카드 2장(1주·2주)을 차례로 놓는다.', base: '실천 카드 4장(1~4주)을 차례로 놓는다.', challenge: '4주 사이에 \'점검 날\' 카드를 넣어 5장을 놓고, 함정 카드는 남긴다.' },
        activity: {
          title: '4주 봉사 실천 차례 놓기', tool: 'timeline',
          teacher: '"4주 봉사는 첫 주에 무엇부터 할까요?" 카드를 놓을 때마다 앞 주가 끝나야 다음 주를 할 수 있는지 묻는다. "4주 동안 똑같이 하면 돼요"라는 학생에게 "2주쯤 해 보고 받는 사람에게 물어보면 바꿀 점이 보이지 않을까요? 그래서 점검 날을 둬요"라고 말해 준다.',
          task: '봉사 실천 카드를 1주부터 4주까지 차례로 놓아요.', levels: { easy: { live: true }, base: {}, challenge: {} },
          items: [
            SEQ('솔의 학급 도서 봉사 4주 계획을 차례로 놓아요.', ['1주: 필요한 일 묻기', '2주: 책 꽂기 시작', '3주: 분류표 붙이기', '4주: 돌아보기 쓰기'], ['1주: 필요한 일 묻기', '2주: 책 꽂기 시작'], ['1주: 필요한 일 묻기', '2주: 책 꽂기 시작', '점검 날: 친구들께 묻기', '3주: 분류표 붙이기', '4주: 돌아보기 쓰기'], { axis: ['1주', '4주'], trap: '마지막 날 몰아서 하기', chPrompt: '2주 뒤에 점검 날을 넣어 솔의 계획을 놓아요(넣지 않을 카드도 있어요).' }, 0.2),
            SEQ('건의 화분 봉사 4주 계획을 차례로 놓아요.', ['1주: 화분 상태 살피기', '2주: 물 주기 시작', '3주: 물 주는 표 붙이기', '4주: 잎 사진 견주기'], ['1주: 화분 상태 살피기', '2주: 물 주기 시작'], ['1주: 화분 상태 살피기', '2주: 물 주기 시작', '점검 날: 선생님께 묻기', '3주: 물 주는 표 붙이기', '4주: 잎 사진 견주기'], { axis: ['1주', '4주'], trap: '한 번에 물 많이 주기', chPrompt: '2주 뒤에 점검 날을 넣어 건의 계획을 놓아요(넣지 않을 카드도 있어요).' }, 0.25, { conclude: '봉사는 차례대로, 중간에 점검하며 꾸준히 해요.' }),
            { prompt: '짝과 "점검 날에 누구에게 무엇을 물을까?"를 이야기해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '내 4주 봉사 계획을 써요.', columns: ['1주', '2주', '3주', '4주'], cells: [['', '', '', '']] }] },
      }),
      X('activity.do', {
        title: '봉사 실천 확인과 기록', method: '봉사 실천 확인과 기록', tool: 'timer', minutes: 13,
        levels: { easy: '이번 주 봉사 횟수 1칸만 기록판에 적는다.', base: '1~4주 봉사 횟수 4칸을 적는다.', challenge: '4칸을 적고, \'한 일과 소감 한 줄\' 점검 칸까지 표시한다.' },
        activity: {
          title: '봉사 기록판 쓰기', tool: 'timer',
          teacher: '"지난주에 계획한 봉사를 몇 번 했는지 기록판에 적어요. 적은 수가 많고 적음으로 평가하지 않아요." 기록을 적은 뒤 한 일을 짝에게 한 문장으로 말하게 한다. "못 했으니 그냥 0이라 적기 싫어요"라는 학생에게 "0도 소중한 기록이에요. 왜 못 했는지 알면 계획을 고칠 수 있어요"라고 말해 준다.',
          task: '이번 주까지 한 봉사 횟수를 기록판에 적고, 한 일을 돌아봐요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '주마다 한 봉사 횟수를 기록판에 적어요.', toolOptions: { title: '봉사 기록판', fields: [{ label: '1주', unit: '번' }, { label: '2주', unit: '번' }, { label: '3주', unit: '번' }, { label: '4주', unit: '번' }] }, target: { records: true }, difficulty: 0.1,
              levels: { easy: { prompt: '이번 주에 한 봉사 횟수를 기록판에 적어요.', toolOptions: { fields: [{ label: '이번 주', unit: '번' }] } } } },
            SELF('기록을 보며 돌아본 것에 표시해요.', '봉사 돌아보기', ['계획한 날에 했다', '받는 사람에게 먼저 물었다', '한 일과 소감 한 줄을 썼다'], [1, 2, 3], 0.1),
            { prompt: '짝에게 이번 주에 한 봉사를 한 문장으로 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '이번 주 봉사 기록을 써요.', columns: ['날', '한 일', '소감 한 줄'], cells: [['', '', ''], ['', '', '']] }] },
        notes: '사진 기록은 받는 사람의 얼굴이 나오지 않게 하고, 허락받은 경우에만 찍는다.',
      }),
      X('wrap.eval', {
        title: '봉사 스스로 평가 글', method: '스스로 평가 글', tool: 'rubric-writing', minutes: 7,
        levels: { easy: '문장 틀(잘한 점은 ~. 고칠 점은 ~)을 보고 기준 2개로 점검한다.', base: '실천 기록을 근거로 세 문장을 쓰고 기준 3개로 점검한다.', challenge: '다음 계획에 바꿀 점까지 넣어 쓰고 기준 4개로 점검한다.' },
        wrap: {
          teacher: '"기록판을 보며 잘한 점과 고칠 점을 써 볼까요?" "열심히 했다"라고만 쓴 학생에게 "기록판의 몇 번, 어느 주를 보면 그렇게 말할 수 있나요? 기록을 근거로 써요"라고 말해 준다.',
          exitTicket: [
            EX('rubric-writing', RUB('실천 기록을 근거로 스스로 평가 글을 쓰고 점검해요.', { topic: '내 봉사 실천 기록을 보고 잘한 점과 고칠 점을 세 문장으로 써요.', starter: '잘한 점은 ___. 고칠 점은 ___.', crit: ['잘한 점을 썼다', '고칠 점을 썼다', '기록을 근거로 썼다'], ch: { prompt: '다음 계획에 바꿀 점까지 넣어 평가 글을 쓰고 점검해요.', crit: '다음 계획에 바꿀 점을 썼다' }, must: [['다음', '앞으로']], chars: [30, 180], sentences: [2, 4], title: '봉사 스스로 평가' }, 0.2)),
            { type: 'choice', prompt: '봉사를 스스로 평가할 때 알맞은 것은?', options: ['기록을 보고 잘한 점과 고칠 점을 쓴다', '친구와 횟수를 견주어 순위를 정한다', '좋았다고만 쓴다'], answer: 0, difficulty: 0.1, explain: '스스로 평가는 다음 계획을 더 좋게 만들려고 해요.' },
          ],
        },
        worksheet: {
          title: '봉사 돌아보기',
          items: [
            { type: 'short', prompt: '내 봉사에서 잘한 점 하나를 써요.' },
            { type: 'short', prompt: '다음 계획에서 바꿀 점 하나를 써요.' },
          ],
          easy: { note: '잘한 점은 ___. 고칠 점은 ___.', items: [{ type: 'draw', prompt: '봉사하는 내 모습을 그려요.' }] },
        },
      }),
      X('wrap.share', {
        title: '봉사 이야기 나누기', method: '봉사 이야기 나누기', tool: 'timer', minutes: 7,
        levels: { easy: '말틀(나는 ~를 도왔다. ~했다)을 보고 모둠 4명이 30초씩 말하도록 타이머를 맞춘다.', base: '모둠 4명이 1분씩 말하도록 맞춘다.', challenge: '1분 말하고 30초 질문받기를 4명이 하도록 맞춘다.' },
        wrap: {
          teacher: '"모둠에서 한 사람씩 1분 동안 봉사 이야기를 하고, 듣는 친구는 칭찬 하나를 해 줘요." 타이머를 맞춘 뒤 실제로 나누게 한다. "많이 한 사람이 잘한 거예요"라는 학생에게 "횟수보다 받는 사람을 어떻게 생각했는지가 더 중요해요. 그 부분을 칭찬해 줘요"라고 말해 준다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '봉사 이야기(우리 반 약속)', labels: ['말하기', '칭찬'], plan: { work: 20, rest: 5, rounds: 2 } }, prompt: '한 사람 60초 말하고 10초 칭찬, 모둠 4명이 되게 맞춰요.', target: { plan: { work: 60, rest: 10, rounds: 4 } }, difficulty: 0.2,
              levels: { easy: { prompt: '말틀을 보며 한 사람 30초 말하고 10초 칭찬, 4명이 되게 맞춰요.', target: { plan: { work: 30, rest: 10, rounds: 4 } } }, challenge: { prompt: '60초 말하고 30초 질문받기를 4명이 하도록 맞춰요.', toolOptions: { labels: ['말하기', '질문'] }, target: { plan: { work: 60, rest: 30, rounds: 4 } } } } },
            { type: 'choice', prompt: '친구 봉사 이야기에 해 줄 칭찬으로 알맞은 것은?', options: ['먼저 물어보고 도운 점이 멋져', '나보다 횟수가 적네', '그건 봉사가 아니야'], answer: 0, difficulty: 0.1, explain: '받는 사람을 존중한 점을 구체적으로 칭찬해요.' },
            { type: 'short', prompt: '친구에게 받은 칭찬 하나를 써요.' },
          ],
        },
        worksheet: {
          title: '봉사 이야기 나누기',
          items: [
            { type: 'short', prompt: '모둠 친구 봉사에서 배우고 싶은 점 하나를 써요.' },
            { type: 'check', prompt: '이야기를 나누며 한 것에 표시해요.', options: ['1분 동안 말했다', '친구에게 칭찬했다', '질문을 받았다'] },
          ],
          easy: { note: '나는 ___를 도왔다. ___했다.', items: [{ type: 'short', prompt: '말틀을 채워 써요.' }] },
        },
      }),
    );
  }

  // ======== 6학년 · 최고 학년 역할과 중학교 준비 (<표 2> 자율활동 — 적응 및 개척 활동: 학교 이해·관계 형성) ========
  {
    const X = mk('g6-adapt', 6);
    const P = (name, icon, at) => ({ name, icon, at });
    const SCHOOL = [P('1학년 교실', 'school', [0, 0]), P('도서관', 'library', [2, 0]), P('급식실', 'house', [4, 0]), P('교무실', 'office', [3, 2]), P('보건실', 'hospital', [5, 2]), P('운동장', 'park', [1, 3])];
    const MORE = [P('2학년 교실', 'school', [0, 1]), P('과학실', 'dot', [4, 3])];
    const PIN = (prompt, place, d, more) => Object.assign({
      prompt, toolOptions: { grid: [6, 4], title: '우리 학교(가상)', places: SCHOOL, legend: false }, target: { place }, difficulty: d,
      levels: { easy: { toolOptions: { readout: true } }, challenge: { prompt: `${cut(prompt)}(비슷한 곳이 더 있어요).`, toolOptions: { places: [...SCHOOL, ...MORE] } } },
    }, more);
    M.push(
      X('intro.roles', {
        title: '6학년이 할 수 있는 일 고르기', method: '6학년이 할 수 있는 일 고르기', tool: 'wordcards', minutes: 6,
        levels: { easy: '교사가 보기 2개를 짚어 주고 함께 고른다.', base: '보기 3개를 스스로 고른다.', challenge: '고른 일을 6학년이 맡으면 좋은 까닭을 말한다.' },
        intro: {
          teacher: '"우리 학교 행사 그림이에요. 6학년이 맡을 수 있는 일은 무엇일까요?" 시연 단추로 \'1학년 급식 줄 돕기\'·\'운동회 경기 진행 돕기\'·\'동생에게 책 읽어 주기\'가 바구니에 담기는 모습을 보인다. "최고 학년이니까 동생들에게 시키면 돼요"라는 말에는 "최고 학년의 역할은 시키는 것일까요, 먼저 돕고 보여 주는 것일까요?"라고 되묻는다.',
          student: '6학년이 학교에서 맡을 수 있는 일을 카드에서 골라 보아요.',
          demo: { tool: 'wordcards', options: { mode: 'pick', basket: '6학년이 할 일', cards: [C('line', '1학년 급식 줄 돕기'), C('test', '시험 문제 내기'), C('sport', '운동회 경기 진행 돕기'), C('read', '동생에게 책 읽어 주기'), C('boss', '동생들에게 심부름 시키기')], shuffle: false }, sequence: [{ pick: ['line', 'sport', 'read'] }] },
          art: art('a paper school sports day with older paper students guiding small first graders along a paper track', '최고 학년이 할 일은?', 'star', 'buttercup'),
        },
      }),
      X('intro.diff', {
        title: '초·중 한 시간 길이 견주기', method: '초·중 하루 시간표 견주기', tool: 'clock', minutes: 6,
        levels: { easy: '교사가 초등 한 시간이 끝나는 시각(9시 40분) 시계 하나만 함께 본다.', base: '초등(9시 40분)과 중학교(9시 45분) 끝나는 시각 시계 두 개를 견준다.', challenge: '쉬는 시간 10분 뒤 다음 시간이 시작하는 시각도 견준다.' },
        intro: {
          teacher: '"9시에 수업이 시작하면 초등학교 한 시간은 9시 40분, 중학교 한 시간은 9시 45분에 끝나요." 시연 단추로 두 시각이 차례로 맞춰지는 모습을 보인다. "중학교 준비는 졸업할 때 하면 돼요"라는 말에는 "5분 길어진 수업처럼 달라지는 것이 여럿이에요. 미리 알면 덜 당황해요"라고 짚는다.',
          student: '두 시계를 보고, 초등학교와 중학교 한 시간 길이가 얼마나 다른지 견주어 보아요.',
          demo: { tool: 'clock', options: { minuteStep: 5, showDigital: true }, sequence: [{ h: 9, m: 40 }, { h: 9, m: 45 }] },
          art: art('two paper clocks side by side, one in front of a paper elementary school and one in front of a taller paper middle school', '한 시간은 몇 분일까?', 'sun', 'sky'),
        },
      }),
      X('activity.map', {
        title: '학교에서 도움 줄 곳 지도', method: '학교에서 도움 줄 곳 지도', tool: 'map', minutes: 14,
        levels: { easy: '장소 이름이 보이고 핀을 놓으면 칸 이름도 읽어 준다.', base: '장소 이름만 보고 도울 곳에 핀을 꽂는다.', challenge: '2학년 교실·과학실처럼 헷갈리는 장소가 더해진 지도에서 핀을 꽂는다.' },
        activity: {
          title: '6학년 도움 지도에 핀 꽂기', tool: 'map',
          teacher: '"6학년이 동생들을 도울 수 있는 곳을 지도에서 찾아볼까요?" 문항을 소리 내어 읽고 그 일이 일어나는 장소를 떠올리게 한다. "도울 곳은 교실뿐이에요"라는 학생에게 "점심시간과 체육 시간 뒤에는 어디가 바쁠까요?"라고 묻는다. 도울 때도 동생에게 먼저 물어본다는 점을 짚는다.',
          task: '도울 일을 읽고, 그 일을 하는 곳에 핀을 꽂아요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            PIN('점심시간 1학년 식판 정리를 돕는 곳에 핀을 꽂아요.', '급식실', 0.15),
            PIN('아침 독서 시간에 책 정리를 돕는 곳에 핀을 꽂아요.', '도서관', 0.15),
            PIN('체육 시간 뒤 놀이 기구 정리를 돕는 곳에 핀을 꽂아요.', '운동장', 0.2),
            PIN('1학년 동생에게 그림책을 읽어 주는 곳에 핀을 꽂아요.', '1학년 교실', 0.25, { conclude: '최고 학년은 학교 곳곳에서 먼저 돕고 본을 보여요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '우리 학교에서 6학년이 도울 수 있는 곳과 할 일을 써요.' }] },
      }),
      X('activity.goal', {
        title: '한 해 목표 쓰기', method: '한 해 목표 쓰기', tool: 'rubric-writing', minutes: 13,
        levels: { easy: '문장 틀을 보고 쓰고 기준 2개로 점검한다.', base: '공동체 역할 하나·개인 목표 하나를 두 문장으로 쓰고 기준 3개로 점검한다.', challenge: '목표를 이룰 실천 단계(먼저·그다음)까지 쓰고 기준 4개로 점검한다.' },
        activity: {
          title: '공동체 역할과 개인 목표 쓰기', tool: 'rubric-writing',
          teacher: '"올해 학교를 위해 맡을 역할 하나, 나를 위한 목표 하나를 써 봐요." "최고의 6학년이 되겠다"라고 쓴 학생에게 "최고의 6학년은 무엇을 하는 사람일까요? 1학년 급식 줄 돕기처럼 눈에 보이는 일로 바꿔 봐요"라고 말해 준다. 개인 목표에 성적 숫자는 쓰지 않게 한다.',
          task: '공동체 역할 하나와 개인 목표 하나를 쓰고, 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RUB('올해 맡을 공동체 역할과 개인 목표를 두 문장으로 써요.', { topic: '6학년 한 해 동안 학교를 위해 맡을 역할 하나와 나를 위한 목표 하나를 써요.', starter: '나는 학교에서 ___를 맡겠다. 나를 위해서는 ___를 하겠다.', crit: ['공동체 역할을 썼다', '개인 목표를 썼다', '해낼 수 있는 목표다'], ch: { prompt: '목표를 이룰 실천 단계까지 넣어 쓰고 점검해요.', crit: '실천 단계를 썼다' }, must: [['먼저', '그다음', '첫째']], chars: [30, 180], sentences: [2, 4], title: '한 해 목표' }, 0.2),
            RUB('목표를 위해 이번 주에 할 첫 실천을 한 문장으로 써요.', { topic: '내 한 해 목표를 위해 이번 주에 할 첫 실천 하나를 써요.', starter: '이번 주 ___에 ___를 하겠다.', crit: ['무엇을 할지 썼다', '언제 할지 썼다', '이번 주에 할 수 있다'], ch: { prompt: '첫 실천을 쓰고, 해냈는지 확인할 방법도 써요.', crit: '확인할 방법을 썼다' }, must: [['확인', '표시', '기록']], chars: [15, 100], title: '첫 실천' }, 0.2, { conclude: '좋은 목표는 눈에 보이는 일로, 해낼 수 있게 써요.' }),
            { prompt: '짝에게 내 공동체 역할을 말하고 응원 한마디를 들어요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '내 한 해 목표를 써요.', columns: ['공동체 역할', '개인 목표', '첫 실천'], cells: [['', '', '']] }] },
      }),
      X('activity.change', {
        title: '중학교에서 달라지는 점 잇기', method: '달라지는 점과 대처 잇기', tool: 'emotion', minutes: 14,
        levels: { easy: '달라지는 점 2개에 대처 카드를 잇는다.', base: '달라지는 점 3개에 대처 카드를 잇는다.', challenge: '4개에 잇고, 대처가 아닌 함정 카드는 남긴다.' },
        activity: {
          title: '달라지는 점과 대처 방법 잇기', tool: 'emotion',
          teacher: '"중학교에서는 과목마다 선생님이 바뀌어요. 그러면 무엇을 준비하면 좋을까요?" 달라지는 점을 읽고 대처 카드를 잇게 한다. "중학교는 가 보면 알아요"라는 학생에게 "미리 알고 대처를 정해 두면 첫 주가 덜 당황스러워요. 그래서 지금 연습해요"라고 말해 준다.',
          task: '중학교에서 달라지는 점에 알맞은 대처 카드를 이어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
          items: [
            MATCH('중학교에서 달라지는 점에 대처 카드를 이어요.', [['과목마다 선생님이 바뀐다', '과목별 준비물 따로 챙기기'], ['교실을 옮겨 다닐 때가 있다', '시간표 보고 미리 이동'], ['수행평가 안내가 많다', '안내 날짜를 수첩에 적기'], ['한 시간이 45분이다', '쉬는 시간에 다음 준비']], { traps: ['졸업식 날 한꺼번에 준비'] }, 0.25),
            MATCH('달라질 때 생기는 마음에 도움 되는 방법을 이어요.', [['새 친구가 낯설다', '먼저 이름 묻고 인사하기'], ['과제가 많아 걱정된다', '할 일 목록 쓰기'], ['길을 잃을까 걱정된다', '학교 안내도 미리 보기'], ['모르는 것이 생겼다', '담임 선생님께 묻기']], { traps: ['혼자 끝까지 참기'] }, 0.3, { conclude: '달라지는 점을 미리 알면 대처할 방법도 미리 정할 수 있어요.' }),
            { prompt: '모둠에서 중학교 생활에서 가장 궁금한 것 하나를 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '중학교에서 달라지는 점과 내 대처를 써요.', columns: ['달라지는 점', '내 대처'], cells: [['', ''], ['', '']] }] },
        notes: '중학교마다 운영이 다르다. 진학할 중학교 안내 자료가 있으면 함께 본다.',
      }),
      X('activity.plan', {
        title: '지금 준비할 일 시간 띠', method: '지금 준비할 일 시간 띠', tool: 'timeline', minutes: 13,
        levels: { easy: '준비 카드 2장(9월·10월)을 차례로 놓는다.', base: '준비 카드 4장(9~12월)을 달 차례로 놓는다.', challenge: '\'10월 말 점검 날\' 카드를 넣어 5장을 놓고, 함정 카드는 남긴다.' },
        activity: {
          title: '2학기 준비 계획 달별로 놓기', tool: 'timeline',
          teacher: '"2학기 넉 달 동안 무엇을 준비할까요? 달이 적힌 카드를 차례로 놓아요." 카드마다 왜 그 달에 하면 좋은지 말하게 한다. "준비는 12월에 한꺼번에 하면 돼요"라는 학생에게 "한꺼번에 하면 무엇을 빠뜨릴까요? 나눠서 하고 중간에 점검하면 빠진 것을 채울 수 있어요"라고 말해 준다.',
          task: '중학교 준비 카드를 달 차례로 놓아요.', levels: { easy: { live: true }, base: {}, challenge: {} },
          items: [
            SEQ('솔의 2학기 중학교 준비 카드를 달 차례로 놓아요.', ['9월: 중학교 생활 알아보기', '10월: 스스로 공부 계획 세우기', '11월: 6학년 역할 마무리', '12월: 동생들에게 역할 넘기기'], ['9월: 중학교 생활 알아보기', '10월: 스스로 공부 계획 세우기'], ['9월: 중학교 생활 알아보기', '10월: 스스로 공부 계획 세우기', '10월 말: 점검 날', '11월: 6학년 역할 마무리', '12월: 동생들에게 역할 넘기기'], { axis: ['9월', '12월'], trap: '졸업 뒤에 처음 시작', chPrompt: '10월 말 점검 날을 넣어 솔의 준비 카드를 놓아요(넣지 않을 카드도 있어요).' }, 0.2),
            SEQ('건의 2학기 생활 습관 준비 카드를 달 차례로 놓아요.', ['9월: 아침 기상 시간 정하기', '10월: 준비물 스스로 챙기기', '11월: 일주일 계획 세우기', '12월: 한 학기 돌아보기'], ['9월: 아침 기상 시간 정하기', '10월: 준비물 스스로 챙기기'], ['9월: 아침 기상 시간 정하기', '10월: 준비물 스스로 챙기기', '10월 말: 점검 날', '11월: 일주일 계획 세우기', '12월: 한 학기 돌아보기'], { axis: ['9월', '12월'], trap: '방학 때 몰아서 하기', chPrompt: '10월 말 점검 날을 넣어 건의 준비 카드를 놓아요(넣지 않을 카드도 있어요).' }, 0.25, { conclude: '중학교 준비는 지금부터 나눠서, 점검하며 해요.' }),
            { prompt: '짝과 "점검 날에 무엇을 확인할까?"를 이야기해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '내 2학기 준비 계획을 달마다 써요.', columns: ['9월', '10월', '11월', '12월'], cells: [['', '', '', '']] }] },
      }),
      X('wrap.buddy', {
        title: '1학년 짝 돕기 활동', method: '1학년 짝 돕기 활동', tool: 'timer', minutes: 7,
        levels: { easy: '선생님과 함께 1학년 교실에 가서 책을 읽어 주고, 읽어 준 책 수를 적는다.', base: '짝과 둘이 읽어 주고 기록판과 점검 칸 3개를 표시한다.', challenge: '점검 칸 4개(소감 한 줄 쓰기 포함)를 표시한다.' },
        wrap: {
          teacher: '"오늘은 1학년 동생에게 그림책을 읽어 주고 와서 기록해요." 미리 1학년 담임 선생님과 시간을 정해 두고, 실제 방문 뒤 기록판을 쓰게 한다. "동생이 집중을 안 하면 화내도 돼요"라는 학생에게 "동생 눈높이에서 그림을 가리키며 물어보면 어떨까요? 6학년은 먼저 참는 본을 보여요"라고 말해 준다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '짝 돕기 기록', fields: [{ label: '읽어 준 책', unit: '권' }] }, prompt: '1학년 동생에게 읽어 준 책 수를 기록판에 적어요.', target: { records: true }, difficulty: 0.1 },
            EX('timer', SELF('짝 돕기에서 해낸 것에 표시해요.', '짝 돕기 점검', ['동생 눈높이에 맞춰 앉았다', '그림을 가리키며 물었다', '동생 말을 끝까지 들었다', '소감 한 줄을 썼다'], [2, 3, 4], 0.1)),
            { type: 'short', prompt: '동생을 도우며 느낀 점을 한 문장으로 써요.' },
          ],
        },
        worksheet: {
          title: '1학년 짝 돕기',
          items: [
            { type: 'short', prompt: '읽어 준 책 제목과 동생이 좋아한 장면을 써요.' },
            { type: 'check', prompt: '짝 돕기에서 한 것에 표시해요.', options: ['눈높이 맞추기', '물어보며 읽기', '끝까지 듣기'] },
          ],
        },
        notes: '1학년 방문은 담임 선생님끼리 미리 정한 시간에 한다. 동생 이름은 기록하지 않는다.',
      }),
      X('wrap.letter', {
        title: '중학생이 된 나에게 편지', method: '중학생이 된 나에게 편지', tool: 'rubric-writing', minutes: 7,
        levels: { easy: '편지 틀(중학생이 된 나에게, ~)을 보고 기준 2개로 점검한다.', base: '세 문장 편지를 쓰고 기준 3개(구체적 다짐·지금 할 준비·나에게 하는 말투)로 점검한다.', challenge: '한 해 목표를 넣어 쓰고 기준 4개로 점검한다.' },
        wrap: {
          teacher: '"내년 이맘때 중학생이 된 나에게 짧은 편지를 써요. 다짐은 구체적일수록 좋아요." "잘 지내"만 쓴 학생에게 "중학생이 된 내가 이 편지를 읽고 무엇을 떠올리면 좋을까요? 지금 준비하는 일 하나를 적어 봐요"라고 말해 준다.',
          exitTicket: [
            EX('rubric-writing', RUB('중학생이 된 나에게 세 문장 편지를 쓰고 점검해요.', { topic: '중학생이 된 나에게 다짐과 지금 할 준비를 담아 세 문장 편지를 써요.', starter: '중학생이 된 나에게, 나는 지금 ___를 준비하고 있어. 너는 ___.', crit: ['구체적인 다짐을 썼다', '지금 할 준비를 썼다', '나에게 하는 말투로 썼다'], ch: { prompt: '한 해 목표를 넣어 편지를 쓰고 점검해요.', crit: '한 해 목표를 넣었다' }, must: [['목표']], chars: [30, 180], sentences: [3, 4], title: '중학생이 된 나에게' }, 0.2)),
            { type: 'choice', prompt: '중학교 준비를 시작하기 알맞은 때는?', options: ['졸업식 날', '지금부터 조금씩', '중학교 첫날'], answer: 1, difficulty: 0.1, explain: '지금부터 나눠 준비하면 덜 당황해요.' },
          ],
        },
        worksheet: {
          title: '중학생이 된 나에게',
          items: [
            { type: 'short', prompt: '중학생이 된 나에게 할 다짐 하나를 써요.' },
            { type: 'short', prompt: '그 다짐을 위해 지금 준비할 일 하나를 써요.' },
          ],
          easy: { note: '중학생이 된 나에게, 나는 지금 ___를 준비하고 있어.', items: [{ type: 'draw', prompt: '중학생이 된 내 모습을 그려요.' }] },
        },
      }),
    );
  }

  // ======== 6학년 · 스스로 공부하기와 차별 없는 말 (<표 2> 자치활동 — 기본생활습관 형성: 자기 관리·민주시민 의식 함양) ========
  {
    const X = mk('g6-habit', 6);
    M.push(
      X('intro.desk', {
        title: '집중 잘되는 책상 고르기', method: '집중 잘되는 책상 고르기', tool: 'wordcards', minutes: 6,
        levels: { easy: '교사가 보기 2개를 짚어 주고 함께 고른다.', base: '보기 3개 넘게 있는 가운데 집중을 돕는 것을 스스로 고른다.', challenge: '고른 것이 왜 집중을 돕는지 까닭을 말한다.' },
        intro: {
          teacher: '"두 책상 그림 가운데 어느 쪽에서 공부가 더 잘될까요?" 시연 단추로 \'필요한 책만 둔 책상\'·\'밝은 스탠드\'가 바구니에 담기는 모습을 보인다. "알림이 와도 안 보면 괜찮아요"라는 말에는 "알림이 울리면 눈이 먼저 가지 않나요? 집중은 마음만이 아니라 환경도 도와줘요"라고 되묻는다.',
          student: '책상 그림을 보고 집중을 돕는 것과 방해하는 것을 생각해 보아요.',
          demo: { tool: 'wordcards', options: { mode: 'pick', basket: '집중을 돕는 것', cards: [C('tidy', '필요한 책만 둔 책상'), C('game', '켜진 게임기'), C('light', '밝은 스탠드'), C('snack', '간식 가득한 책상'), C('phone', '알림 울리는 휴대폰')], shuffle: false }, sequence: [{ pick: ['tidy', 'light'] }] },
          art: art('two paper desks side by side, one tidy with a lamp and one cluttered with a buzzing paper phone and snacks', '어느 책상이 집중이 잘될까?', 'sun', 'buttercup'),
        },
      }),
      X('intro.hear', {
        title: '들은 말 장면 마음 고르기', method: '들은 말 장면 보고 마음 고르기', tool: 'emotion', minutes: 6,
        levels: { easy: '교사가 장면 2개를 읽어 주고 마음 카드를 함께 잇는다.', base: '장면 3개에 듣는 사람 마음 카드를 스스로 잇는다.', challenge: '장면마다 듣는 사람이 그런 마음이 든 까닭을 말한다.' },
        intro: {
          teacher: '"가상 반 체육 시간이에요. 윤이 \'여자가 무슨 축구야\'라는 말을 들었어요. 마음이 어땠을까요?" 시연 단추로 장면마다 마음 카드가 이어지는 모습을 보인다. "장난으로 한 말이니까 괜찮아요"라는 말에는 "말한 사람이 장난이라도 듣는 사람이 속상하면 어떨까요? 성별로 할 수 있는 일을 막는 말은 차별이에요"라고 짚는다.',
          student: '말을 들은 친구의 마음을 골라 보고, 그 말이 왜 그런 마음을 만들었는지 생각해 보아요.',
          demo: { tool: 'emotion', options: { slots: [{ id: 's1', label: '"여자가 무슨 축구야"를 들었다' }, { id: 's2', label: '"같이 하자, 패스!"를 들었다' }, { id: 's3', label: '"남자가 왜 울어"를 들었다' }], cards: ['신남', '속상함', '서운함'] }, sequence: [{ match: { s1: '속상함', s2: '신남', s3: '서운함' } }] },
          art: art('paper children on a paper soccer field with two speech bubbles, one sharp and gray and one round and warm', '그 말을 들으면 어떤 마음일까?', 'cloud', 'peach'),
        },
      }),
      X('activity.cycle', {
        title: '계획·실행·점검 차례 놓기', method: '계획·실행·점검 차례 놓기', tool: 'timeline', minutes: 14,
        levels: { easy: '카드 3장(계획·실행·점검)을 차례로 놓는다.', base: '카드 4장(고치기까지)을 차례로 놓는다.', challenge: '\'다시 계획\' 카드까지 5장을 놓아 되풀이를 나타내고, 함정 카드는 남긴다.' },
        activity: {
          title: '스스로 공부하는 흐름 놓기', tool: 'timeline',
          teacher: '"스스로 공부는 계획하고, 해 보고, 점검하고, 고쳐서 다시 계획하는 흐름이에요." 카드를 놓을 때마다 앞 단계가 없으면 무엇이 어려운지 묻는다. "점검은 선생님이 하는 거예요"라는 학생에게 "내가 한 것을 내가 표시해 보면 다음에 무엇을 바꿀지 알 수 있어요. 스스로 공부의 핵심이에요"라고 말해 준다.',
          task: '스스로 공부하는 흐름 카드를 차례로 놓아요.', levels: { easy: { live: true }, base: {}, challenge: {} },
          items: [
            SEQ('솔의 수학 복습 흐름 카드를 차례로 놓아요.', ['계획: 복습할 쪽 정하기', '실행: 타이머 켜고 풀기', '점검: 틀린 문제 표시', '고치기: 다음 계획 바꾸기'], ['계획: 복습할 쪽 정하기', '실행: 타이머 켜고 풀기', '점검: 틀린 문제 표시'], ['계획: 복습할 쪽 정하기', '실행: 타이머 켜고 풀기', '점검: 틀린 문제 표시', '고치기: 다음 계획 바꾸기', '다시 계획: 고친 대로'], { axis: ['시작', '되풀이'], trap: '점검 없이 계속 풀기' }, 0.2),
            SEQ('건의 영어 낱말 외우기 흐름 카드를 차례로 놓아요.', ['계획: 하루 낱말 5개', '실행: 소리 내어 쓰기', '점검: 짝과 낱말 퀴즈', '고치기: 틀린 낱말 다시'], ['계획: 하루 낱말 5개', '실행: 소리 내어 쓰기', '점검: 짝과 낱말 퀴즈'], ['계획: 하루 낱말 5개', '실행: 소리 내어 쓰기', '점검: 짝과 낱말 퀴즈', '고치기: 틀린 낱말 다시', '다시 계획: 내일 낱말 정하기'], { axis: ['시작', '되풀이'], trap: '외운 척 넘어가기' }, 0.25, { conclude: '계획·실행·점검·고치기를 되풀이하면 스스로 공부가 자라요.' }),
            { prompt: '짝과 "점검을 빼면 어떤 일이 생길까?"를 이야기해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '계획 → 실행 → ___ → 고치기', answer: '점검' }] },
      }),
      X('activity.timer', {
        title: '집중 시간 타이머 맞추기', method: '집중 시간 타이머 맞추기', tool: 'timer', minutes: 13,
        levels: { easy: '공부 20분을 1번 하도록 타이머를 맞춘다.', base: '공부 20분·쉬기 5분을 2번 하도록 맞추고 집중 환경을 점검한다.', challenge: '공부 20분·쉬기 5분을 3번 하도록 맞추고 전체 시간을 어림해 확인한다.' },
        activity: {
          title: '공부·쉬기 타이머와 집중 환경 점검', tool: 'timer',
          teacher: '"우리 반 약속은 공부 20분, 쉬기 5분이에요. 오래 앉아 있는 것보다 집중한 시간이 중요해요." 타이머를 맞춘 뒤 실제로 한 번 해 보게 한다. "쉬지 않고 오래 하면 더 많이 해요"라는 학생에게 "한 시간 내내 집중할 수 있을까요? 짧게 집중하고 쉬는 것을 되풀이하면 더 오래 이어져요"라고 말해 준다.',
          task: '공부·쉬기 시간을 타이머로 맞추고, 집중을 돕는 환경을 점검해요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            { prompt: '공부 20분, 쉬기 5분을 2번 하도록 맞춰요(분, 우리 반 약속).', toolOptions: { title: '집중 타이머(우리 반 약속)', timeUnit: 'min', labels: ['공부', '쉬기'], plan: { work: 10, rest: 10, rounds: 1 } }, target: { plan: { work: 20, rest: 5, rounds: 2 } }, difficulty: 0.2,
              levels: { easy: { prompt: '공부 20분을 1번 하도록 맞춰요(분, 우리 반 약속).', target: { plan: { work: 20, rounds: 1 } } }, challenge: { prompt: '공부 20분, 쉬기 5분을 3번 하도록 맞추고 전체 시간을 확인해요(분).', toolOptions: { showTotal: true }, target: { plan: { work: 20, rest: 5, rounds: 3 } } } } },
            { prompt: '공부를 시작하기 전에 집중 환경을 모두 확인해요.', toolOptions: { title: '집중 환경 점검', safety: ['책상에 필요한 것만 두었다', '휴대폰 알림을 껐다', '물 한 컵을 준비했다'] }, target: { safety: true }, difficulty: 0.1 },
            { prompt: '짝과 쉬는 5분 동안 할 일을 정해 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '공부 20분, 쉬기 5분을 2번 하면 모두 몇 분인가요?', options: ['40분', '45분', '50분'], answer: '45분' }] },
      }),
      X('activity.sort', {
        title: '차별하는 말·존중하는 말', method: '차별하는 말·존중하는 말 나누기', tool: 'sortboard', minutes: 14,
        levels: { easy: '말 카드 4장을 두 바구니에 나누고, 틀리면 까닭을 알려 주며 돌아온다.', base: '말 카드 6장을 나눈다.', challenge: '말 카드 8장을 나누고, 차별하는 말마다 무엇을 차별하는지 말한다.' },
        activity: {
          title: '말 카드 두 바구니에 나누기', tool: 'sortboard',
          teacher: '"성별·생김새·어디서 왔는지로 할 수 있는 일을 막거나 깎아내리는 말이 차별하는 말이에요." 카드를 소리 내어 읽고 듣는 사람 마음을 떠올리게 한다. "장난으로 한 말은 차별이 아니에요"라는 학생에게 "말한 사람의 뜻보다 듣는 사람이 무엇을 못 하게 되는지가 중요해요"라고 말해 준다.',
          task: '말 카드를 차별하는 말과 존중하는 말로 나누어요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
          items: [
            SORT('체육 시간에 들은 말 카드를 두 바구니에 나누어요.', { slots: ['차별하는 말', '존중하는 말'], groups: { '차별하는 말': ['여자가 무슨 축구야', '남자가 왜 울어', '키 작으면 빠져'], '존중하는 말': ['같이 하자, 패스!', '울어도 괜찮아', '누구나 해 볼 수 있어'] }, easy: 2, extra: { '차별하는 말': ['안경 썼으니 공부만 해'], '존중하는 말': ['네 방법도 좋다'] } }, 0.2),
            SORT('모둠 활동에서 들은 말 카드를 두 바구니에 나누어요.', { slots: ['차별하는 말', '존중하는 말'], groups: { '차별하는 말': ['여자는 기록이나 해', '말투가 이상하니 빼자', '남자는 꾸미는 거 몰라'], '존중하는 말': ['잘하는 것으로 나누자', '어디서 왔든 반가워', '네 생각도 들려줘'] }, easy: 2, extra: { '차별하는 말': ['전학생은 맨 끝에 서'], '존중하는 말': ['처음이면 같이 하자'] } }, 0.25, { conclude: '성별·생김새·출신으로 막거나 깎아내리는 말은 장난이어도 차별이에요.' }),
            { prompt: '모둠에서 차별하는 말 하나를 골라 무엇을 차별하는지 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '차별하는 말이면 ×, 존중하는 말이면 ○를 써요.', columns: ['말', '○ / ×'], cells: [['여자가 무슨 축구야', ''], ['누구나 해 볼 수 있어', ''], ['남자가 왜 울어', '']], answer: '×, ○, ×' }] },
      }),
      X('activity.change', {
        title: '차별하는 말 바꿔 쓰기', method: '차별하는 말 바꿔 쓰기', tool: 'rubric-writing', minutes: 13,
        levels: { easy: '문장 틀을 보고 한 말을 바꿔 쓰고 기준 2개로 점검한다.', base: '차별하는 말 두 개를 존중하는 말로 바꿔 쓰고 기준 3개로 점검한다.', challenge: '바꾼 까닭까지 쓰고 기준 4개로 점검한다.' },
        activity: {
          title: '차별하는 말을 존중하는 말로', tool: 'rubric-writing',
          teacher: '"\'여자가 무슨 축구야\'를 듣는 사람이 함께할 수 있게 바꾸면 어떤 말이 될까요?" 바꾼 말을 소리 내어 읽고 듣는 사람이 무엇을 할 수 있게 됐는지 묻는다. "그냥 그 말을 안 하면 돼요"라는 학생에게 "안 하는 것도 좋지만, 함께하자는 말로 바꾸면 듣는 친구가 더 힘이 나요"라고 말해 준다.',
          task: '차별하는 말을 존중하는 말로 바꿔 쓰고, 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RUB('"여자가 무슨 축구야", "남자가 왜 울어"를 존중하는 말로 바꿔 써요.', { topic: '두 말을 듣는 친구가 함께할 수 있게 존중하는 말로 바꿔 쓰세요.', starter: '"___" 대신 "___"라고 말하겠다.', crit: ['차별하는 말을 골랐다', '존중하는 말로 바꿨다', '듣는 사람을 생각했다'], ch: { prompt: '두 말을 바꿔 쓰고, 바꾼 까닭까지 써요.', crit: '바꾼 까닭을 썼다' }, must: [['왜냐하면', '때문에']], chars: [20, 160], sentences: [2, 3], title: '존중하는 말로 바꾸기' }, 0.2),
            RUB('"키 작으면 빠져", "말투가 이상하니 빼자"를 존중하는 말로 바꿔 써요.', { topic: '모둠 활동에서 나온 두 말을 모두가 함께할 수 있는 말로 바꿔 쓰세요.', starter: '"___" 대신 "___"라고 말하겠다.', crit: ['차별하는 말을 골랐다', '함께하자는 말로 바꿨다', '깎아내리는 말이 없다'], ch: { prompt: '두 말을 바꿔 쓰고, 바꾼 말이 무엇을 바꾸는지 써요.', crit: '바꾼 까닭을 썼다' }, must: [['왜냐하면', '때문에']], chars: [20, 160], sentences: [2, 3], title: '함께하는 말로 바꾸기' }, 0.25, { conclude: '차별하는 말을 멈추고, 함께하자는 말로 바꿔요.' }),
            { prompt: '짝에게 바꾼 말 하나를 소리 내어 들려줘요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '"남자가 왜 울어"를 존중하는 말로 바꿔 써요.' }] },
      }),
      X('wrap.check', {
        title: '공부 습관 자기 점검', method: '공부 습관 자기 점검', tool: 'timer', minutes: 7,
        levels: { easy: '점검 칸 3개를 읽고 실천한 것에 표시한다.', base: '점검 칸 5개에 표시한다.', challenge: '5칸에 더해 \'고칠 점 하나 정하기\' 칸까지 표시하고 고칠 점을 쓴다.' },
        wrap: {
          teacher: '"지난 일주일 동안 스스로 공부를 어떻게 했는지 표시해요. 한 만큼만 표시하고, 다른 친구와 견주지 않아요." 표시가 적은 학생에게 "어느 단계가 어려웠나요? 계획이 너무 컸다면 줄여서 다시 세우면 돼요"라고 말해 준다.',
          exitTicket: [
            EX('timer', SELF('일주일 스스로 공부에서 해낸 것에 표시해요.', '공부 습관 점검', ['계획을 먼저 세웠다', '타이머로 집중했다', '공부 뒤 점검했다', '쉬는 시간을 지켰다', '알림을 끄고 했다', '고칠 점 하나를 정했다'], [3, 5, 6], 0.1)),
            { type: 'choice', prompt: '스스로 공부에서 점검을 하는 까닭은 무엇인가요?', options: ['선생님께 혼나지 않으려고', '다음 계획을 고치려고', '친구와 견주려고'], answer: 1, difficulty: 0.1, explain: '점검하면 무엇을 바꿀지 알 수 있어요.' },
            { type: 'short', prompt: '다음 주 공부 계획에서 바꿀 점 하나를 써요.' },
          ],
        },
        worksheet: {
          title: '공부 습관 점검',
          items: [
            { type: 'check', prompt: '이번 주에 해낸 것에 표시해요.', options: ['계획 세우기', '타이머로 집중', '공부 뒤 점검'] },
            { type: 'short', prompt: '집중이 가장 잘된 때와 그 까닭을 써요.' },
          ],
        },
        notes: '점검은 학생 스스로 보는 것이다. 성적이나 공부 시간을 걷지 않는다.',
      }),
      X('wrap.campaign', {
        title: '존중하는 말 캠페인 판', method: '존중하는 말 캠페인 판 꾸미기', tool: 'collage', minutes: 7,
        levels: { easy: '종이 조각 2개를 붙이고 점검 칸 2개를 표시한다.', base: '조각 4개를 붙이고 점검 칸 2개를 표시한다.', challenge: '조각 4개를 붙이고 \'제목 자리 꾸미기\'까지 점검 칸 3개를 표시한다.' },
        wrap: {
          teacher: '"조각 하나마다 존중하는 말 하나를 정해 붙여요. 교구에는 글을 쓸 수 없으니, 정한 말은 활동지 칸에 써서 나중에 실물 판에 옮겨요." "제일 예쁜 판이 이기는 거예요"라는 학생에게 "캠페인 판은 보는 사람이 존중하는 말을 떠올리게 하려는 거예요. 무슨 말을 담았는지가 중요해요"라고 말해 준다.',
          exitTicket: [
            { type: 'tool', tool: 'collage', options: { maxPieces: 12, shapes: ['heart', 'star', 'circle', 'leaf', 'square'] }, prompt: '존중하는 말을 담을 조각 4개를 붙여 캠페인 판을 꾸며요.', target: { selfCheck: ['조각마다 존중하는 말을 정했다', '판 가운데에 제목 자리를 뒀다'], minPieces: 4 }, difficulty: 0.15,
              levels: { easy: { prompt: '존중하는 말을 담을 조각 2개를 붙여 판을 꾸며요.', target: { selfCheck: ['조각마다 존중하는 말을 정했다', '판 가운데에 제목 자리를 뒀다'], minPieces: 2 } }, challenge: { prompt: '조각 4개를 붙이고 제목 자리까지 꾸며요.', target: { selfCheck: ['조각마다 존중하는 말을 정했다', '판 가운데에 제목 자리를 뒀다', '제목 자리를 꾸몄다'], minPieces: 4 } } } },
            { type: 'choice', prompt: '캠페인 판에 담기 알맞은 말은 무엇인가요?', options: ['누구나 해 볼 수 있어', '여자는 기록이나 해', '키 작으면 빠져'], answer: 0, difficulty: 0.1, explain: '모두가 함께할 수 있게 하는 말이 존중하는 말이에요.' },
          ],
        },
        worksheet: {
          title: '존중하는 말 캠페인',
          items: [
            { type: 'table', prompt: '조각에 담을 존중하는 말을 써요.', columns: ['조각 1', '조각 2', '조각 3', '조각 4'], cells: [['', '', '', '']] },
            { type: 'short', prompt: '캠페인 판 제목을 써요.' },
          ],
        },
        notes: '꾸민 판은 화면 그림이다. 실물 캠페인 판은 활동지에 쓴 말을 옮겨 교실에 붙인다.',
      }),
    );
  }

  // ======== 6학년 · 합의하는 토의와 또래 조정 (<표 2> 자치활동 — 관계 형성 및 소통 활동: 토의⋅토론·협력) ========
  {
    const X = mk('g6-rel', 6);
    const PLACE2 = [['과학관', 7], ['숲 체험장', 9], ['놀이공원', 6]];
    const PLACE3 = [['과학관', 11], ['숲 체험장', 10], ['놀이공원', 8]];
    const MEDIATE = ['규칙 안내', '각자 이야기', '마음 확인', '해결 찾기', '약속하기'];
    M.push(
      X('intro.pick', {
        title: '반 소풍 장소 의견 보기', method: '반 소풍 장소 의견 보기', tool: 'wordcards', minutes: 6,
        levels: { easy: '교사가 의견 카드 2개를 읽어 주고 끌리는 곳을 고르게 한다.', base: '의견 카드 3개 넘게 있는 가운데 먼저 끌리는 곳을 고른다.', challenge: '끌리는 까닭을 말하고, 다른 친구는 왜 다른 곳을 골랐을지 어림한다.' },
        intro: {
          teacher: '"가상 반 친구들이 낸 소풍 장소 의견이에요. 먼저 끌리는 곳은 어디인가요? 여기에는 정답이 없어요." 시연 단추로 한 곳이 골라지는 모습을 보인다. "제일 많이 고른 곳으로 하면 끝이에요"라는 말에는 "다수결도 한 방법이에요. 그런데 안전이나 비용처럼 모두가 따질 기준으로 견주면 결과가 바뀔 수도 있어요"라고 되묻는다.',
          student: '친구들이 낸 장소 의견 가운데 먼저 끌리는 곳을 골라 보아요. 정답은 없어요.',
          demo: { tool: 'wordcards', options: { mode: 'pick', basket: '먼저 끌리는 곳', cards: [C('sci', '과학관'), C('forest', '숲 체험장'), C('park', '놀이공원'), C('museum', '박물관')], shuffle: false }, sequence: [{ pick: ['forest'] }] },
          art: art('paper sticky notes with place names on a class board, with paper children pointing at different notes', '어디로 갈까?', 'tree', 'mint'),
        },
      }),
      X('intro.scene', {
        title: '친구 다툼 장면 문제 찾기', method: '친구 다툼 장면 보고 문제 찾기', tool: 'emotion', minutes: 6,
        levels: { easy: '교사가 두 친구의 말을 읽어 주고 마음 카드를 함께 잇는다.', base: '장면 3개에 각자의 마음 카드를 스스로 잇는다.', challenge: '두 친구가 저마다 바라는 것이 무엇인지 말한다.' },
        intro: {
          teacher: '"가상 반에서 준과 솔이 도서관 자리를 두고 다퉜어요. 둘은 각자 어떤 마음일까요?" 시연 단추로 장면마다 마음 카드가 이어지는 모습을 보인다. "먼저 앉은 사람이 이긴 거예요"라는 말에는 "누가 이겼는지보다, 둘 다 바라는 것이 무엇인지 알면 해결이 보여요"라고 짚는다.',
          student: '다툰 두 친구가 각자 어떤 마음일지, 무엇을 바랄지 생각해 보아요.',
          demo: { tool: 'emotion', options: { slots: [{ id: 's1', label: '가방을 두고 간 자리에 솔이 앉았다는 준' }, { id: 's2', label: '빈자리인 줄 알고 앉았다는 솔' }, { id: 's3', label: '둘 다 큰 소리를 냈다' }], cards: ['억울함', '당황함', '미안함'] }, sequence: [{ match: { s1: '억울함', s2: '당황함', s3: '미안함' } }] },
          art: art('two paper children standing by one paper library chair with a schoolbag on it, small storm cloud above', '두 친구는 어떤 마음일까?', 'cloud', 'lavender'),
        },
      }),
      X('activity.table', {
        title: '의견 장단점 점수 견주기', method: '의견 장단점 표 견주기', tool: 'chart', minutes: 14,
        levels: { easy: '두 안(과학관·숲 체험장)의 점수 막대를 완성하고 견준다.', base: '세 안의 점수 막대를 완성하고 가장 높은 안을 찾는다.', challenge: '비용 기준을 하나 더 넣은 점수로 다시 견주어 결과가 바뀌는 것을 찾는다.' },
        activity: {
          title: '기준 점수로 의견 견주기(가상)', tool: 'chart',
          teacher: '"가상 반이 \'배울 거리\'와 \'안전\' 두 기준으로 장소마다 점수를 매겼어요. 막대로 그려 볼까요?" 점수는 기준마다 모둠이 정한 것이라고 짚는다. "점수가 한 번 나오면 바뀌지 않아요"라는 학생에게 "비용 기준을 더하면 어떻게 될까요? 어떤 기준으로 견주느냐가 합의의 핵심이에요"라고 말해 준다.',
          task: '가상 기준 점수 표를 막대그래프로 옮기고, 가장 높은 안을 찾아요.', levels: { easy: { showValues: true }, base: {}, challenge: {} },
          items: [
            { prompt: '기준 점수 표를 보고 막대그래프를 완성해요(가상 자료).', toolOptions: { type: 'bar', mode: 'build', title: '기준 두 개 점수 합(가상)', unit: '점', data: PLACE2, given: [0] }, target: { build: true }, difficulty: 0.2,
              levels: { easy: { prompt: '두 안의 점수 막대를 완성해요(가상 자료).', toolOptions: { data: PLACE2.slice(0, 2) } } } },
            { prompt: '기준 두 개 점수로 가장 높은 안은 무엇인가요?(가상 자료)', toolOptions: { type: 'bar', mode: 'read', title: '기준 두 개 점수 합(가상)', unit: '점', data: PLACE2, choices: PLACE2.map((x) => x[0]), question: '가장 높은 안은?' }, target: { pick: 1 }, difficulty: 0.15 },
            { prompt: '비용 기준을 더한 점수로 가장 높은 안을 골라요(가상 자료).', toolOptions: { type: 'bar', mode: 'read', title: '비용까지 기준 세 개 점수 합(가상)', unit: '점', data: PLACE3, choices: PLACE3.map((x) => x[0]), question: '가장 높은 안은?', why: ['', '숲 체험장은 비용 점수가 낮아 두 번째가 됐어요.', '놀이공원 막대가 가장 낮아요.'] }, target: { pick: 0 }, difficulty: 0.3, conclude: '어떤 기준으로 견주느냐에 따라 합의안이 달라져요. 기준부터 함께 정해요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '우리 모둠이 정한 기준과 안마다 점수를 써요.', columns: ['안', '기준 1', '기준 2', '합'], cells: [['', '', '', ''], ['', '', '', '']] }] },
        notes: '점수는 수업용 가상 자료다.',
      }),
      X('activity.agree', {
        title: '모둠 합의 토의', method: '모둠 합의 토의', tool: 'timer', minutes: 13,
        levels: { easy: '기준 1개를 정하고 토의 차례 카드를 놓은 뒤, 점검 칸 1개를 표시한다.', base: '기준 2개를 정해 토의하고 점검 칸 2개를 표시한다.', challenge: '소수 의견을 합의안에 반영했는지까지 점검 칸 3개를 표시한다.' },
        activity: {
          title: '합의 토의 차례와 점검', tool: 'timer',
          teacher: '"오늘은 다수결 전에 기준을 먼저 정하고, 안마다 장단점을 말한 뒤 합의안을 만들어요." 타이머를 맞춘 뒤 실제로 모둠 토의를 하고 합의안을 기록판에 적게 한다. "다수결만이 민주적이에요"라는 학생에게 "다수결도 민주적인 방법이에요. 그 전에 소수 의견까지 듣고 고칠 수 있다면 더 많은 사람이 받아들일 수 있어요"라고 말해 준다.',
          task: '합의 토의 차례를 놓고, 시간을 맞춰 토의한 뒤 합의 과정을 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '합의 토의를 하는 차례대로 카드를 놓아요.', toolOptions: { title: '합의 토의 차례', cards: ['합의안 정하기', '기준 정하기', '기준으로 견주기', '안마다 장단점 말하기'] }, target: { order: ['기준 정하기', '안마다 장단점 말하기', '기준으로 견주기', '합의안 정하기'] }, difficulty: 0.2 },
            { prompt: '토의 8분, 정리 2분을 1번 하도록 타이머를 맞춰요(분).', toolOptions: { title: '모둠 합의 토의(우리 반 약속)', timeUnit: 'min', labels: ['토의', '정리'], plan: { work: 3, rest: 1, rounds: 2 } }, target: { plan: { work: 8, rest: 2, rounds: 1 } }, difficulty: 0.15 },
            SELF('합의 토의에서 해낸 것에 표시해요.', '합의 점검', ['기준을 하나 정했다', '기준을 두 개 정했다', '소수 의견을 합의안에 담았다'], [1, 2, 3], 0.1, { conclude: '기준을 정하고 소수 의견까지 담으면 모두가 받아들이는 합의안이 돼요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '우리 모둠 합의안과 그 기준을 써요.' }] },
      }),
      X('activity.steps', {
        title: '또래 조정 절차 놓기', method: '또래 조정 절차 놓기', tool: 'timeline', minutes: 14,
        levels: { easy: '절차 카드 3장(규칙 안내·각자 이야기·약속하기)을 차례로 놓는다.', base: '절차 카드 5장을 차례로 놓고, 조정자 말 카드도 차례로 놓는다.', challenge: '5장을 놓되 함정 카드(조정자가 잘잘못 정하기)는 남긴다.' },
        activity: {
          title: '또래 조정 절차와 조정자 말 놓기', tool: 'timeline',
          teacher: '"또래 조정은 조정자가 판결하는 것이 아니라 두 친구가 스스로 해결을 찾게 돕는 거예요." 카드를 놓을 때마다 그 단계에서 조정자가 무엇을 하는지 묻는다. "조정자가 누가 잘못했는지 정해 주면 빨라요"라는 학생에게 "조정자가 정하면 두 친구가 받아들일까요? 둘이 찾은 해결이어야 약속을 지켜요"라고 말해 준다.',
          task: '또래 조정 절차 카드와 조정자 말 카드를 차례로 놓아요.', levels: { easy: { live: true }, base: {}, challenge: {} },
          items: [
            SEQ('또래 조정 절차 카드를 차례로 놓아요.', MEDIATE, ['규칙 안내', '각자 이야기', '약속하기'], MEDIATE, { trap: '조정자가 잘잘못 정하기' }, 0.2),
            SEQ('준과 솔의 조정에서 조정자 말 카드를 차례로 놓아요.', ['"말을 끊지 않기로 해요"', '"준, 무슨 일이 있었니?"', '"솔은 어떤 마음이었니?"', '"둘이 바라는 해결은?"', '"정한 약속을 읽어 볼게"'], ['"말을 끊지 않기로 해요"', '"준, 무슨 일이 있었니?"', '"정한 약속을 읽어 볼게"'], ['"말을 끊지 않기로 해요"', '"준, 무슨 일이 있었니?"', '"솔은 어떤 마음이었니?"', '"둘이 바라는 해결은?"', '"정한 약속을 읽어 볼게"'], { trap: '"준이 잘못했네"' }, 0.25, { conclude: '조정자는 판결하지 않고, 두 친구가 스스로 해결을 찾게 차례대로 돕는 사람이에요.' }),
            { prompt: '짝과 "조정자가 판결하지 않는 까닭"을 이야기해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '규칙 안내 → 각자 이야기 → 마음 확인 → ___ → 약속하기', answer: '해결 찾기' }] },
      }),
      X('activity.dilemma', {
        title: '조정자인데 친한 친구가 한쪽', method: '갈림길: 조정자인데 친한 친구가 한쪽일 때', tool: 'dilemma', minutes: 13,
        levels: { easy: '갈림 1번에서 고르고 근거 한 장을 고른다.', base: '갈림 2번(공정하게 듣기 → 편들기 부탁 거절)을 지나 근거를 고른다.', challenge: '갈림 3번(조정자 바꾸기 제안까지)을 지나 알맞은 근거를 모두 고르고, 다른 길의 결과와 견준다.' },
        activity: {
          title: '갈림길: 친한 친구의 조정', tool: 'dilemma',
          teacher: '"내가 조정자인데, 다툰 두 친구 가운데 한 명이 가장 친한 친구예요." 고를 때마다 영향 칸에서 두 친구가 조정자를 믿을지 읽게 한다. "친한 친구 편을 드는 게 의리예요"라는 학생에게 "다른 친구는 그 조정을 믿을까요? 조정자의 의리는 두 사람 모두에게 공정한 거예요"라고 말해 준다.',
          task: '갈림길마다 고르고, 결과를 읽은 뒤 내 선택의 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: DIL({
            title: '친한 친구의 조정', word: '공정한',
            steps: [
              { text: '조정을 시작했는데 다툰 친구 하나가 나와 가장 친한 다온이에요.', motif: 'house',
                good: ['both', '두 친구에게 똑같이 말할 시간을 준다', '두 친구가 차례로 이야기했어요.', [['다온', '말할 기회가 있어요', 1], ['다른 친구', '믿고 말해요', 1]]],
                bad: ['side', '다온 이야기를 먼저 길게 듣는다', '다른 친구가 입을 다물었어요.', '조정자는 두 사람에게 똑같이 기회를 줘요.', [['다른 친구', '믿지 못해요', -1]]] },
              { text: '쉬는 시간에 다온이 "내 편 들어 줄 거지?"라고 귓속말을 해요.', motif: 'cloud',
                good: ['no', '"조정자는 누구 편도 안 들어"라고 답한다', '다온이 조금 서운해하지만 알겠다고 해요.', [['다온', '조금 서운해요', 0], ['조정', '믿을 수 있어요', 1]]],
                bad: ['yes', '"당연하지"라고 약속한다', '조정이 한쪽으로 기울었어요.', '편들기 약속은 조정을 망쳐요.', [['다른 친구', '억울해요', -1]]] },
              { text: '다른 친구가 "넌 다온 친구잖아"라며 조정자를 못 믿겠다고 해요.', motif: 'star',
                good: ['swap', '다른 조정자로 바꾸자고 제안한다', '새 조정자와 둘이 해결을 찾았어요.', [['두 친구', '공정하다고 느껴요', 1]]],
                bad: ['keep', '"내가 공정하게 할게"라며 그냥 한다', '다른 친구는 끝까지 마음을 열지 않아요.', '한쪽이 못 믿으면 조정자를 바꾸는 것도 공정해요.', [['다른 친구', '여전히 불안해요', -1]]] },
            ],
            ending: '두 친구 모두 믿을 수 있는 조정으로 약속을 정했어요.',
            reasons: [{ id: 'fair', text: '조정자는 두 사람 모두에게 공정해야 한다' }, { id: 'trust', text: '둘 다 믿어야 해결을 받아들인다' }, { id: 'loyal', text: '친한 친구 편을 드는 것이 의리다', why: '조정에서 편을 들면 다른 친구는 해결을 믿지 못해요.' }, { id: 'quick', text: '빨리 끝내는 것이 가장 중요하다', why: '빨리 끝내도 한쪽이 억울하면 다툼이 다시 생겨요.' }],
            good: ['fair', 'trust'],
            talk: '모둠에서 "공정한 조정자가 하지 않는 말" 하나를 정해 이야기해요.',
            conclude: '조정자는 친한 친구 앞에서도 두 사람에게 똑같이 공정해야 해요.',
          }),
        },
        worksheet: { items: [{ type: 'short', prompt: '친한 친구가 "내 편 들어 줘"라고 할 때 조정자로서 할 말을 써요.' }] },
      }),
      X('wrap.role', {
        title: '또래 조정 역할극', method: '또래 조정 역할극', tool: 'timer', minutes: 7,
        levels: { easy: '대본을 보며 세 명이 역할을 바꿔 가며 연기하도록 타이머를 맞추고 점검 칸 2개를 표시한다.', base: '대본 없이 연기하고 점검 칸 3개를 표시한다.', challenge: '조정자 점검표 4칸까지 표시한다.' },
        wrap: {
          teacher: '"세 명이 조정자·두 친구 역할을 맡아 2분씩 연기하고, 1분 동안 역할을 바꿔요." 타이머를 맞춘 뒤 실제로 역할극을 한다. 조정자 역할이 "네가 잘못했네"라고 말하면 멈추고 "조정자는 판결하지 않아요. 이럴 때 무엇을 물을까요?"라고 되묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '조정 역할극(우리 반 약속)', timeUnit: 'min', labels: ['역할극', '바꾸기'], plan: { work: 1, rest: 2, rounds: 1 } }, prompt: '역할극 2분, 바꾸기 1분을 세 번 하도록 맞춰요(분).', target: { plan: { work: 2, rest: 1, rounds: 3 } }, difficulty: 0.15 },
            EX('timer', SELF('조정자 역할에서 해낸 것에 표시해요.', '조정자 점검표', ['규칙을 먼저 안내했다', '두 사람에게 똑같이 물었다', '판결하지 않았다', '약속을 정리해 읽었다'], [2, 3, 4], 0.1)),
            { type: 'short', prompt: '조정자 역할을 해 보며 어려웠던 점을 한 문장으로 써요.' },
          ],
        },
        worksheet: {
          title: '또래 조정 역할극',
          items: [
            { type: 'check', prompt: '역할극에서 조정자가 한 것에 표시해요.', options: ['규칙 안내', '두 사람에게 똑같이 묻기', '판결하지 않기', '약속 정리'] },
            { type: 'short', prompt: '두 친구 역할을 해 보며 느낀 점을 써요.' },
          ],
        },
        notes: '역할극 장면은 지어낸 장면(자리 다툼 등)으로 하고, 반에서 실제 있었던 다툼은 쓰지 않는다.',
      }),
      X('wrap.reflect', {
        title: '공정한 조정자 태도 쓰기', method: '공정한 조정자 태도 쓰기', tool: 'rubric-writing', minutes: 7,
        levels: { easy: '문장 틀을 보고 할 말 하나를 쓰고 기준 2개로 점검한다.', base: '공정한 조정자가 할 말 두 개를 쓰고 기준 3개로 점검한다.', challenge: '그 말이 공정한 까닭까지 쓰고 기준 4개로 점검한다.' },
        wrap: {
          teacher: '"공정한 조정자라면 어떤 말을 할까요? 두 가지를 써 봐요." "잘 해결해"처럼 쓴 학생에게 "조정자가 실제로 입으로 할 말을 따옴표 안에 써 보면 어떨까요?"라고 말해 준다.',
          exitTicket: [
            EX('rubric-writing', RUB('공정한 조정자가 할 말 두 개를 쓰고 점검해요.', { topic: '또래 조정에서 공정한 조정자가 할 말 두 개를 따옴표로 써요.', starter: '조정자는 "___"라고 말한다. 또 "___"라고 말한다.', crit: ['조정자가 할 말을 썼다', '두 사람 모두를 생각했다', '판결하는 말이 없다'], ch: { prompt: '할 말 두 개와 그 말이 공정한 까닭까지 쓰고 점검해요.', crit: '공정한 까닭을 썼다' }, must: [['왜냐하면', '때문에']], chars: [20, 160], sentences: [2, 3], title: '공정한 조정자' }, 0.2)),
            { type: 'choice', prompt: '조정자가 친한 친구 편을 들면 어떻게 될까요?', options: ['조정이 빨리 끝난다', '다른 친구가 조정을 믿지 못한다', '두 친구 모두 기뻐한다'], answer: 1, difficulty: 0.1, explain: '조정자는 두 사람 모두에게 공정해야 믿음을 얻어요.' },
          ],
        },
        worksheet: {
          title: '공정한 조정자',
          items: [
            { type: 'short', prompt: '공정한 조정자가 할 말 하나를 써요.' },
            { type: 'short', prompt: '조정자가 하지 말아야 할 말 하나와 그 까닭을 써요.' },
          ],
          easy: { note: '조정자는 "___"라고 말한다.', items: [{ type: 'short', prompt: '조정자가 할 말을 빈칸에 써요.' }] },
        },
      }),
    );
  }

  // ======== 6학년 · 학생 자치회 건의와 회의 이끌기 (<표 2> 자치활동 — 공동체 자치활동: 학급⋅학년⋅학교 자치) ========
  {
    const X = mk('g6-self', 6);
    const NEED = [['운동장 그늘막', 12], ['물 마시는 곳', 8], ['놀이 도구', 7], ['책 나눔 상자', 5]];
    const KEEP = [['1주', 14], ['2주', 18], ['3주', 16], ['4주', 23]];
    M.push(
      X('intro.need', {
        title: '학교에 바라는 것 그래프', method: '학교에 바라는 것 투표 그래프', tool: 'chart', minutes: 6,
        levels: { easy: '교사가 막대 3개를 짚어 주며 함께 읽는다.', base: '막대 4개를 읽고 가장 많은 것을 고른다.', challenge: '두 번째로 많은 것까지 찾고 건의할 순서를 말한다.' },
        intro: {
          teacher: '"가상 반 친구들이 학교에 바라는 것에 투표한 결과예요. 가장 많은 것은 무엇일까요?" 시연 단추로 가장 높은 막대가 골라지는 모습을 보인다. "바라는 걸 선생님께 그냥 말하면 돼요"라는 말에는 "반 전체 의견을 모아 정해진 길로 전하면 학교가 더 잘 들을 수 있어요. 오늘은 그 길을 배워요"라고 되묻는다.',
          student: '그래프에서 친구들이 가장 많이 바라는 것을 찾아보아요.',
          demo: { tool: 'chart', options: { type: 'bar', mode: 'read', title: '학교에 바라는 것(가상 반 투표)', unit: '명', data: NEED, showValues: true, question: '가장 많은 것은?', choices: NEED.map((x) => x[0]) }, sequence: [{ pick: 0 }] },
          art: art('a paper bar chart on a class board with paper children placing sticky votes under a paper sunshade drawing', '학교에 무엇을 바랄까?', 'sun', 'sky'),
        },
        notes: '그래프는 가상 반의 수업용 자료다.',
      }),
      X('intro.mc', {
        title: '사회자 말 고르기', method: '사회자 말 고르기', tool: 'wordcards', minutes: 6,
        levels: { easy: '교사가 보기 2개를 짚어 주고 함께 고른다.', base: '보기 3개를 스스로 고른다.', challenge: '소수 의견을 묻는 사회자 말을 골라 왜 필요한지 말한다.' },
        intro: {
          teacher: '"학급 회의 사회자가 할 알맞은 말은 무엇일까요?" 시연 단추로 \'오늘 안건은 ~예요\'·\'다른 의견 있나요?\'·\'아직 말 안 한 사람?\'이 바구니에 담기는 모습을 보인다. "사회자는 자기 생각대로 정하면 돼요"라는 말에는 "사회자는 정하는 사람일까요, 모두가 말하게 돕는 사람일까요?"라고 되묻는다.',
          student: '회의를 이끄는 사회자가 할 알맞은 말을 골라 보아요.',
          demo: { tool: 'wordcards', options: { mode: 'pick', basket: '사회자가 할 말', cards: [C('open', '오늘 안건은 ~예요'), C('mine', '내 생각대로 정할게요'), C('other', '다른 의견 있나요?'), C('hurry', '빨리 끝내요'), C('few', '아직 말 안 한 사람?')], shuffle: false }, sequence: [{ pick: ['open', 'other', 'few'] }] },
          art: art('a paper student standing at the front of a paper classroom with a small paper agenda board, others raising paper hands', '사회자는 무엇을 말할까?', 'star', 'lavender'),
        },
      }),
      X('activity.route', {
        title: '건의 절차 시간 띠', method: '건의 절차 시간 띠', tool: 'timeline', minutes: 14,
        levels: { easy: '건의 절차 카드 3장을 차례로 놓는다.', base: '절차 카드 4장을 차례로 놓고, 단계마다 할 일 카드를 잇는다.', challenge: '4장을 놓되 함정 카드(건의 없이 불평 글 올리기)는 남긴다.' },
        activity: {
          title: '학급 의견이 학교에 닿는 길', tool: 'timeline',
          teacher: '"우리 반 의견은 어떤 길로 학교에 닿을까요?" 카드를 놓을 때마다 그 단계에서 누가 무엇을 하는지 말하게 한다. "건의는 불평을 말하는 거예요"라는 학생에게 "불평은 마음을 말하는 것이고, 건의는 현황·까닭·바라는 점을 정해진 길로 전해 바꾸려는 거예요"라고 말해 준다.',
          task: '건의 절차 카드를 차례로 놓고, 단계마다 할 일을 이어요.', levels: { easy: { live: true }, base: {}, challenge: {} },
          items: [
            SEQ('학급 의견을 학교에 건의하는 절차 카드를 차례로 놓아요.', ['학급 회의에서 의견 모으기', '학생 자치회에 안건 내기', '학교에 건의서 내기', '답변 듣고 반에 알리기'], ['학급 회의에서 의견 모으기', '학교에 건의서 내기', '답변 듣고 반에 알리기'], ['학급 회의에서 의견 모으기', '학생 자치회에 안건 내기', '학교에 건의서 내기', '답변 듣고 반에 알리기'], { trap: '건의 없이 불평 글 올리기' }, 0.2),
            { prompt: '건의 단계마다 할 일 카드를 이어요.', toolOptions: { mode: 'match', slots: [{ id: 'cls', label: '학급 회의' }, { id: 'stu', label: '학생 자치회' }, { id: 'sch', label: '학교' }, { id: 'back', label: '답변 뒤' }], cards: ['건의서 살펴 답하기', '반 의견 표결하기', '결과를 반에 알리기', '다른 반 의견과 모으기'] }, target: { match: { cls: '반 의견 표결하기', stu: '다른 반 의견과 모으기', sch: '건의서 살펴 답하기', back: '결과를 반에 알리기' } }, difficulty: 0.25,
              levels: { easy: { prompt: '건의 단계마다 할 일 카드를 이어요(2짝).', toolOptions: { slots: [{ id: 'cls', label: '학급 회의' }, { id: 'back', label: '답변 뒤' }], cards: ['결과를 반에 알리기', '반 의견 표결하기'] }, target: { match: { cls: '반 의견 표결하기', back: '결과를 반에 알리기' } } } }, conclude: '건의는 학급 회의 → 자치회 → 학교 → 답변 알리기의 길로 전해요.' },
            { prompt: '짝과 "건의와 불평은 무엇이 다를까?"를 이야기해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '학급 회의 → ___ → 학교 → 답변 알리기', answer: '학생 자치회' }] },
        notes: '건의 절차는 학교마다 학생자치 규정이 다르다. 우리 학교 규정에 맞춰 카드를 고쳐 쓴다.',
      }),
      X('activity.write', {
        title: '학교에 낼 건의서 쓰기', method: '건의서 쓰기', tool: 'rubric-writing', minutes: 13,
        levels: { easy: '빈칸 건의서 틀을 보고 쓰고 기준 2개로 점검한다.', base: '네 칸(현황·까닭·바라는 점·우리가 할 일)을 써서 기준 4개로 점검한다.', challenge: '설문·조사 자료를 근거로 넣어 쓰고 기준 5개로 점검한다.' },
        activity: {
          title: '네 칸 건의서 쓰기', tool: 'rubric-writing',
          teacher: '"건의서에는 지금 어떤지(현황), 왜 바꿔야 하는지(까닭), 무엇을 바라는지, 우리가 할 일이 들어가요." "그늘막 해 주세요"만 쓴 학생에게 "학교가 왜 그늘막이 필요한지 알 수 있을까요? 우리 반 투표 결과처럼 근거를 써 봐요. 우리가 할 일도 함께 쓰면 더 힘이 생겨요"라고 말해 준다.',
          task: '네 칸이 들어간 건의서를 쓰고 기준표로 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RUB('\'운동장 그늘막\' 건의서를 네 칸을 넣어 써요.', { topic: '운동장 그늘막 설치를 바라는 건의서를 써요(현황·까닭·바라는 점·우리가 할 일).', starter: '현황: ___ / 까닭: ___ / 바라는 점: ___ / 우리가 할 일: ___', crit: ['현황을 썼다', '까닭을 썼다', '바라는 점을 썼다', '우리가 할 일을 썼다'], base: 4, ch: { prompt: '설문 자료를 근거로 넣어 그늘막 건의서를 쓰고 점검해요.', crit: '자료를 근거로 썼다' }, must: [['설문', '조사', '투표', '명']], chars: [40, 220], title: '그늘막 건의서' }, 0.25),
            RUB('건의서 맨 위에 붙일 제목을 한 문장으로 써요.', { topic: '읽는 사람이 무엇을 바라는지 한눈에 알 수 있는 건의서 제목을 써요.', starter: '___을(를) 바랍니다', crit: ['바라는 것이 드러난다', '정중한 말로 썼다', '한 문장이다'], ch: { prompt: '건의서 제목에 누가 바라는지까지 넣어 써요.', crit: '누가 바라는지 넣었다' }, must: [['학생', '우리 반', '6학년']], chars: [8, 60], title: '건의서 제목' }, 0.15, { conclude: '건의서는 현황·까닭·바라는 점·우리가 할 일을 정중하게 담아요.' }),
            { prompt: '짝에게 내 건의서를 읽어 주고 빠진 칸이 있는지 들어요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '건의서 네 칸을 써요.', columns: ['현황', '까닭', '바라는 점', '우리가 할 일'], cells: [['', '', '', '']] }] },
      }),
      X('activity.lead', {
        title: '학생 사회자 학급 회의', method: '학생 사회자 학급 회의', tool: 'timer', minutes: 14,
        levels: { easy: '사회자가 대본을 보며 회의 차례 카드를 놓고 회의하고, 점검 칸 2개를 표시한다.', base: '대본 없이 회의를 이끌고 점검 칸 3개를 표시한다.', challenge: '회의 기록을 발표하는 데까지 점검 칸 4개를 표시한다.' },
        activity: {
          title: '회의 차례·발언 시간·사회자 점검', tool: 'timer',
          teacher: '"오늘 학급 회의는 학생 사회자가 이끌어요. 선생님은 아직 말하지 않은 친구에게 기회가 갔는지 살펴요." 회의 차례 카드와 타이머를 맞춘 뒤 실제 안건(예: 쉬는 시간 놀이 도구 쓰는 차례)으로 회의한다. 사회자가 다수 의견만 받아 적으면 "반대 의견을 한 번 더 물어볼까요?"라고 짚는다.',
          task: '회의 차례를 놓고 발언 시간을 맞춘 뒤, 회의를 마치고 사회자가 한 일을 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '학급 회의 차례대로 카드를 놓아요.', toolOptions: { title: '학급 회의 차례', cards: ['안건 토의', '개회', '표결', '지난 실천 확인', '폐회', '결과 발표'] }, target: { order: ['개회', '지난 실천 확인', '안건 토의', '표결', '결과 발표', '폐회'] }, difficulty: 0.25 },
            { prompt: '한 사람 30초 발언하고 5초 기록하기를 8번 하도록 맞춰요.', toolOptions: { title: '발언 시간(우리 반 약속)', labels: ['발언', '기록'], plan: { work: 20, rest: 10, rounds: 2 } }, target: { plan: { work: 30, rest: 5, rounds: 8 } }, difficulty: 0.2 },
            SELF('사회자가 회의에서 해낸 것에 표시해요.', '사회자 점검', ['안건을 먼저 알렸다', '반대 의견도 물었다', '말 안 한 친구에게 기회를 줬다', '결정과 기록을 발표했다'], [2, 3, 4], 0.1, { conclude: '사회자는 정하는 사람이 아니라 모두가 말하게 돕는 사람이에요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '오늘 회의 기록을 써요.', columns: ['안건', '나온 의견', '결정'], cells: [['', '', '']] }] },
      }),
      X('activity.minor', {
        title: '소수 의견 존중 장면 고르기', method: '소수 의견 존중 장면 고르기', tool: 'emotion', minutes: 13,
        levels: { easy: '장면 2개에 마음 카드를 잇는다.', base: '장면 3개에 마음 카드를 잇고, 사회자 말 갈림길에서 고른다.', challenge: '장면 4개에 잇고 남는 카드는 남긴 뒤, 갈림길에서 사회자 말을 고쳐 고른다.' },
        activity: {
          title: '소수 의견 장면과 사회자 말', tool: 'emotion',
          teacher: '"두 명만 다른 의견을 냈을 때, 사회자가 \'다수니까 넘어갈게요\'라고 하면 두 친구는 어떤 마음일까요?" 장면마다 마음 카드를 잇게 한다. "소수 의견은 어차피 안 되니까 안 들어도 돼요"라는 학생에게 "소수 의견에 좋은 점이 있으면 합의안을 더 낫게 만들 수 있어요. 듣는 것부터가 존중이에요"라고 말해 준다.',
          task: '소수 의견이 무시된 장면과 존중된 장면에 마음 카드를 잇고, 사회자 말을 골라요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
          items: [
            MATCH('회의 장면과 소수 의견을 낸 친구의 마음을 이어요.', [['"소수 의견은 넘어갈게요"', '서운함'], ['"반대 까닭도 들어 볼게요"', '편안함'], ['손 든 친구를 못 본 척했다', '속상함'], ['소수 의견을 기록에 남겼다', '뿌듯함']], { traps: ['신남'] }, 0.2),
            { prompt: '두 명만 다른 의견이에요. 사회자로서 할 말을 골라요.', toolOptions: { mode: 'branch', situation: '학급 회의에서 두 명만 다른 의견을 냈어요.', who: '사회자', choices: [{ id: 'skip', text: '"다수니까 넘어갈게요"', result: '두 친구가 다음부터 손을 들지 않아요.', why: '소수 의견도 들어야 좋은 결정이 나와요.' }, { id: 'hear', text: '"두 사람 의견도 들어 볼게요"', result: '두 친구의 생각이 합의안에 하나 더해졌어요.' }, { id: 'vote', text: '"바로 표결할게요"', result: '두 친구는 까닭을 말할 기회가 없었어요.', why: '표결 전에 까닭을 들을 기회를 줘요.' }] }, target: { choice: 'hear' }, difficulty: 0.2, conclude: '소수 의견을 듣고 기록하는 것이 회의의 존중이에요.' },
            { prompt: '모둠에서 소수 의견을 존중하는 사회자 말을 하나씩 만들어 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '소수 의견을 낸 친구에게 사회자가 할 말을 써요.' }] },
      }),
      X('wrap.eval', {
        title: '결정 실천 평가 그래프', method: '결정 실천 평가 꺾은선그래프', tool: 'chart', minutes: 7,
        levels: { easy: '1·2주 점을 찍어 꺾은선을 완성한다.', base: '4주 점을 모두 찍어 완성하고 변화를 읽는다.', challenge: '3주에 줄어든 것을 찾고 고칠 점을 고른다.' },
        wrap: {
          teacher: '"가상 반이 회의에서 정한 \'복도 걷기\' 약속을 지킨 친구 수를 4주 동안 셌어요. 꺾은선으로 나타내 볼까요?" "한 번 정하면 끝이에요"라는 학생에게 "정한 뒤에 잘 지켜지는지 보고, 줄면 다시 이야기해요. 그것까지가 자치예요"라고 말해 준다.',
          exitTicket: [
            { type: 'tool', tool: 'chart', options: { type: 'line', mode: 'build', title: '복도 걷기 약속 지킨 친구 수(가상)', unit: '명', data: KEEP, given: [0], scale: 2 }, prompt: '가상 점검표를 보고 꺾은선그래프를 완성해요.', target: { build: true }, difficulty: 0.2,
              levels: { easy: { prompt: '가상 점검표를 보고 1·2주 점을 찍어요.', toolOptions: { data: KEEP.slice(0, 2), given: [] } } } },
            { type: 'tool', tool: 'chart', options: { type: 'line', mode: 'read', title: '복도 걷기 약속 지킨 친구 수(가상)', unit: '명', data: KEEP, choices: ['꾸준히 줄었다', '3주에 줄었다가 4주에 늘었다', '4주 내내 같았다'], question: '어떻게 바뀌었나요?' }, prompt: '가상 그래프에서 4주 동안의 변화를 골라요.', target: { pick: 1 }, difficulty: 0.15,
              levels: { challenge: { prompt: '3주에 줄었을 때 할 일로 알맞은 것을 골라요.', toolOptions: { choices: ['회의에서 까닭을 다시 이야기한다', '약속을 없앤다', '못 지킨 친구 이름을 붙인다'], question: '고칠 점은?' }, target: { pick: 0 } } } },
            { type: 'choice', prompt: '회의에서 정한 결정을 평가하는 까닭은 무엇인가요?', options: ['결정이 잘 지켜지는지 보고 고치려고', '못 지킨 사람을 찾으려고', '회의를 다시 안 하려고'], answer: 0, difficulty: 0.1, explain: '실천을 평가해야 더 나은 결정으로 고칠 수 있어요.' },
          ],
        },
        worksheet: {
          title: '결정 실천 평가',
          items: [
            { type: 'choice', prompt: '가상 그래프에서 약속을 지킨 친구가 가장 많은 주는?', options: ['1주', '2주', '3주', '4주'], answer: '4주' },
            { type: 'short', prompt: '우리 반 결정 하나를 정해 어떻게 실천을 평가할지 써요.' },
          ],
        },
        notes: '그래프 수치는 수업용 가상 자료다. 실천 점검은 몇 명인지만 세고 이름을 적지 않는다.',
      }),
      X('wrap.reflect', {
        title: '학급 회의 성찰 쓰기', method: '회의 성찰 쓰기', tool: 'rubric-writing', minutes: 7,
        levels: { easy: '문장 틀(잘된 점은 ~. 아쉬운 점은 ~)을 보고 기준 2개로 점검한다.', base: '두 문장으로 쓰고 기준 3개로 점검한다.', challenge: '다음 회의 제안까지 넣어 기준 4개로 점검한다.' },
        wrap: {
          teacher: '"오늘 회의에서 잘된 점과 아쉬운 점을 하나씩 써요. 친구 이름은 쓰지 않고 일어난 일을 써요." "다 좋았다"라고 쓴 학생에게 "다음 회의에서 하나만 바꾼다면 무엇을 바꿀까요?"라고 묻는다.',
          exitTicket: [
            EX('rubric-writing', RUB('오늘 회의에서 잘된 점과 아쉬운 점을 두 문장으로 써요.', { topic: '오늘 학급 회의에서 잘된 점과 아쉬운 점을 두 문장으로 써요(친구 이름은 쓰지 않아요).', starter: '잘된 점은 ___. 아쉬운 점은 ___.', crit: ['잘된 점을 썼다', '아쉬운 점을 썼다', '이름 없이 일어난 일을 썼다'], ch: { prompt: '다음 회의 제안까지 넣어 쓰고 점검해요.', crit: '다음 회의 제안을 썼다' }, must: [['다음', '제안']], chars: [20, 160], sentences: [2, 3], title: '회의 성찰' }, 0.2)),
            { type: 'choice', prompt: '회의 성찰을 쓸 때 알맞은 것은 무엇인가요?', options: ['말을 많이 한 친구 이름을 쓴다', '일어난 일과 다음에 바꿀 점을 쓴다', '좋았다고만 쓴다'], answer: 1, difficulty: 0.1, explain: '성찰은 다음 회의를 더 낫게 하려고 써요.' },
          ],
        },
        worksheet: {
          title: '회의 돌아보기',
          items: [
            { type: 'short', prompt: '오늘 회의에서 잘된 점 하나를 써요.' },
            { type: 'short', prompt: '다음 회의에서 바꿀 점 하나를 써요.' },
          ],
          easy: { note: '잘된 점은 ___. 아쉬운 점은 ___.', items: [{ type: 'check', prompt: '오늘 회의에서 있었던 것에 표시해요.', options: ['안건 알리기', '반대 의견 듣기', '표결', '결과 발표'] }] },
        },
      }),
    );
  }

  // ======== 6학년 · 프로젝트 탐구 설계와 평가 (<표 2> 자율활동 — 주제 탐구 활동: 소집단 공동 연구·프로젝트) ========
  {
    const X = mk('g6-inq', 6);
    const SCORE = [['핵심 질문', 5], ['자료 출처', 2], ['읽기 쉬움', 4], ['역할 나눔', 3]];
    M.push(
      X('intro.ex', {
        title: '프로젝트 산출물 예 고르기', method: '프로젝트 산출물 예 고르기', tool: 'wordcards', minutes: 6,
        levels: { easy: '교사가 보기 2개(포스터·짧은 영상)를 보여 주고 고르게 한다.', base: '보기 4개 넘게 있는 가운데 해 보고 싶은 산출물을 고른다.', challenge: '고른 산출물이 우리 질문에 왜 알맞은지 말한다.' },
        intro: {
          teacher: '"프로젝트 탐구를 마치면 알게 된 것을 무엇으로 보여 줄까요? 해 보고 싶은 것을 골라 봐요. 정답은 없어요." 시연 단추로 \'포스터\'가 골라지는 모습을 보인다. "멋진 영상이 제일 좋은 산출물이에요"라는 말에는 "산출물은 핵심 질문의 답을 잘 보여 주는 것이 좋아요. 질문에 따라 알맞은 것이 달라요"라고 되묻는다.',
          student: '프로젝트 산출물 예 가운데 해 보고 싶은 것을 골라 보아요. 정답은 없어요.',
          demo: { tool: 'wordcards', options: { mode: 'pick', basket: '해 보고 싶은 산출물', cards: [C('poster', '포스터'), C('video', '짧은 영상'), C('model', '모형'), C('book', '작은 책'), C('play', '역할극')], shuffle: false }, sequence: [{ pick: ['poster'] }] },
          art: art('a paper table showing a small paper poster, a paper model house, a tiny paper book and a paper film strip', '무엇으로 보여 줄까?', 'star', 'peach'),
        },
      }),
      X('intro.rubric', {
        title: '기준표 읽고 수준 고르기', method: '평가 기준표 읽고 수준 고르기', tool: 'sortboard', minutes: 6,
        levels: { easy: '교사가 산출물 예 3장을 하나씩 읽어 주며 함께 나눈다.', base: '산출물 예 6장을 기준표 수준으로 스스로 어림해 나눈다.', challenge: '나눈 까닭을 기준(질문에 답·출처·읽기 쉬움)으로 말한다.' },
        intro: {
          teacher: '"기준표의 세 기준은 질문에 답했나, 출처를 밝혔나, 읽기 쉬운가예요. 셋 다면 잘함, 둘이면 보통, 하나 이하면 노력이에요." 시연 단추로 예 카드가 수준 바구니에 나뉘는 모습을 보인다. "예쁘게 꾸미면 잘함이에요"라는 말에는 "기준표에 \'예쁨\'이 있나요? 기준표를 먼저 읽으면 무엇에 힘쓸지 보여요"라고 되묻는다.',
          student: '기준표의 세 기준을 읽고, 산출물 예가 어느 수준일지 어림해 보아요.',
          demo: { tool: 'sortboard', options: { slots: ['잘함', '보통', '노력'], cards: ['답·출처·읽기 쉬움 다 갖춤', '답·출처 있고 글씨가 작음', '예쁘지만 질문에 답이 없음', '답 있고 읽기 쉬움, 출처 없음', '질문 답·출처 밝힘·큰 글씨', '그림만 있고 글 없음'] }, sequence: [{ sort: { 잘함: ['답·출처·읽기 쉬움 다 갖춤', '질문 답·출처 밝힘·큰 글씨'], 보통: ['답·출처 있고 글씨가 작음', '답 있고 읽기 쉬움, 출처 없음'], 노력: ['예쁘지만 질문에 답이 없음', '그림만 있고 글 없음'] } }] },
          art: art('a paper rubric table with three columns and small paper posters sliding into each column', '기준표로 보면 어떤 수준일까?', 'leaf', 'mint'),
        },
      }),
      X('activity.design', {
        title: '프로젝트 설계 생각그물', method: '프로젝트 설계 생각그물', tool: 'mindmap', minutes: 14,
        levels: { easy: '가지 2개(핵심 질문·방법)에 카드를 붙인다.', base: '가지 4개(핵심 질문·방법·산출물·일정)에 카드를 붙인다.', challenge: '\'역할\' 가지까지 5개에 붙이고, 함정 카드는 남긴다.' },
        activity: {
          title: '가상 모둠의 프로젝트 설계 붙이기', tool: 'mindmap',
          teacher: '"프로젝트 설계에는 핵심 질문, 방법, 산출물, 일정이 들어가요. 모둠이라면 역할도요." 카드마다 어느 가지인지 묻는다. "핵심 질문은 \'급식\'처럼 낱말 하나면 돼요"라는 학생에게 "급식의 무엇이 궁금한가요? \'잔반을 어떻게 줄일까?\'처럼 답을 찾아갈 수 있는 물음으로 써요"라고 말해 준다.',
          task: '가상 모둠의 프로젝트 설계 카드를 알맞은 가지에 붙여요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
          items: [
            BRANCH('\'잔반 줄이기\' 프로젝트 설계 카드를 가지에 붙여요.', '잔반 줄이기 프로젝트', [['핵심 질문', ['잔반을 어떻게 줄일까?']], ['방법', ['2주 잔반 양 기록']], ['산출물', ['잔반 줄이기 포스터']], ['일정', ['4주 동안 주마다 한 단계']], ['역할', ['기록·그림·발표 나누기']]], { easy: 2, base: 4, challenge: 5 }, ['급식 메뉴 바꾸라고 하기'], 0.2),
            BRANCH('\'교실 물 아끼기\' 프로젝트 설계 카드를 가지에 붙여요.', '물 아끼기 프로젝트', [['핵심 질문', ['손 씻을 때 물을 얼마나 쓸까?']], ['방법', ['컵으로 받아 양 재기']], ['산출물', ['수도꼭지 옆 안내문']], ['일정', ['3주 동안 재고 1주 만들기']], ['역할', ['재기·기록·안내문 나누기']]], { easy: 2, base: 4, challenge: 5 }, ['물을 아예 안 쓰기'], 0.25, { conclude: '프로젝트 설계는 핵심 질문에서 시작해 방법·산출물·일정·역할로 이어져요.' }),
            { prompt: '모둠에서 우리 프로젝트의 핵심 질문을 하나 정해 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '우리 모둠 프로젝트 설계를 써요.', columns: ['핵심 질문', '방법', '산출물', '일정'], cells: [['', '', '', '']] }] },
      }),
      X('activity.sched', {
        title: '프로젝트 일정 시간 띠', method: '프로젝트 일정 시간 띠', tool: 'timeline', minutes: 13,
        levels: { easy: '주별 단계 카드 3장(1~3주)을 차례로 놓는다.', base: '단계 카드 4장(1~4주)을 차례로 놓는다.', challenge: '2주 뒤 \'점검 날\'을 넣어 5장을 놓고, 함정 카드는 남긴다.' },
        activity: {
          title: '프로젝트 단계 주별로 놓기', tool: 'timeline',
          teacher: '"4주 프로젝트는 한 주에 한 단계씩 해요. 무엇부터 할까요?" 카드를 놓을 때마다 그 주에 끝내야 다음 주가 되는지 묻는다. "산출물부터 만들고 질문은 나중에 정해요"라는 학생에게 "질문이 없으면 무엇을 보여 줄지 어떻게 정할까요?"라고 말해 준다.',
          task: '프로젝트 단계 카드를 주별 차례로 놓아요.', levels: { easy: { live: true }, base: {}, challenge: {} },
          items: [
            SEQ('\'잔반 줄이기\' 프로젝트 단계를 주별로 놓아요.', ['1주: 핵심 질문 정하기', '2주: 잔반 양 기록하기', '3주: 포스터 만들기', '4주: 발표·평가하기'], ['1주: 핵심 질문 정하기', '2주: 잔반 양 기록하기', '3주: 포스터 만들기'], ['1주: 핵심 질문 정하기', '2주: 잔반 양 기록하기', '점검 날: 기준표로 중간 점검', '3주: 포스터 만들기', '4주: 발표·평가하기'], { axis: ['1주', '4주'], trap: '발표 전날 처음 시작', chPrompt: '2주 뒤에 점검 날을 넣어 단계를 놓아요(넣지 않을 카드도 있어요).' }, 0.2),
            SEQ('\'물 아끼기\' 프로젝트 단계를 주별로 놓아요.', ['1주: 물 쓰는 양 재기', '2주: 잰 값 정리하기', '3주: 안내문 만들기', '4주: 붙이고 다시 재기'], ['1주: 물 쓰는 양 재기', '2주: 잰 값 정리하기', '3주: 안내문 만들기'], ['1주: 물 쓰는 양 재기', '2주: 잰 값 정리하기', '점검 날: 기준표로 중간 점검', '3주: 안내문 만들기', '4주: 붙이고 다시 재기'], { axis: ['1주', '4주'], trap: '재지 않고 안내문부터', chPrompt: '2주 뒤에 점검 날을 넣어 물 아끼기 단계를 놓아요(넣지 않을 카드도 있어요).' }, 0.25, { conclude: '프로젝트는 주마다 한 단계씩, 중간 점검을 넣어 짜요.' }),
            { prompt: '짝과 "중간 점검 날에 기준표로 무엇을 볼까?"를 이야기해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '우리 프로젝트 일정을 주마다 써요.', columns: ['1주', '2주', '3주', '4주'], cells: [['', '', '', '']] }] },
      }),
      X('activity.self', {
        title: '기준표로 스스로 평가', method: '스스로 평가 글', tool: 'rubric-writing', minutes: 14,
        levels: { easy: '기준표 2항목(핵심 질문·자료 출처)을 점검하고 문장 틀로 쓴다.', base: '기준표 4항목을 모두 점검하고 고칠 점을 쓴다.', challenge: '점검한 수준마다 근거 문장을 넣어 쓴다.' },
        activity: {
          title: '내 산출물 기준표 점검과 고칠 점', tool: 'rubric-writing',
          teacher: '"내 산출물을 기준표 항목마다 보고, 고칠 점을 써요. 점수를 매기는 것이 아니라 더 좋게 만들 곳을 찾는 거예요." "다 잘했다"라고 쓴 학생에게 "출처 칸을 다시 볼까요? 산출물 어디에 출처가 있나요? 근거를 찾아 쓰면 평가가 정확해져요"라고 말해 준다.',
          task: '내 산출물을 기준표 항목별로 점검하고, 고칠 점을 글로 써요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RUB('내 산출물을 기준표 항목별로 점검하고 고칠 점을 써요.', { topic: '내 프로젝트 산출물을 기준표 항목(핵심 질문·자료 출처·읽기 쉬움·역할 나눔)별로 보고 고칠 점을 써요.', starter: '___ 항목은 잘했다. ___ 항목은 ___를 고치겠다.', crit: ['핵심 질문 항목을 봤다', '자료 출처 항목을 봤다', '읽기 쉬움 항목을 봤다', '역할 나눔 항목을 봤다'], base: 4, ch: { prompt: '항목마다 근거 문장을 넣어 스스로 평가 글을 써요.', crit: '근거 문장을 넣었다' }, must: [['왜냐하면', '때문에', '보면']], chars: [40, 220], title: '스스로 평가' }, 0.25),
            RUB('가장 고칠 항목 하나와 고칠 방법을 한 문장으로 써요.', { topic: '기준표에서 가장 고칠 항목 하나와 그 방법을 써요.', starter: '___ 항목을 ___ 방법으로 고치겠다.', crit: ['고칠 항목을 골랐다', '고칠 방법을 썼다', '이번 주에 할 수 있다'], ch: { prompt: '고칠 방법과 언제 고칠지까지 써요.', crit: '언제 고칠지 썼다' }, must: [['이번 주', '내일', '요일']], chars: [15, 120], title: '고칠 점 하나' }, 0.2, { conclude: '스스로 평가는 기준표를 근거로 더 좋게 만들 곳을 찾는 거예요.' }),
            { prompt: '짝에게 내가 고칠 항목을 말하고 도울 방법을 들어요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '내 산출물을 기준표로 점검해요(잘함·보통·노력).', columns: ['핵심 질문', '자료 출처', '읽기 쉬움', '역할 나눔'], cells: [['', '', '', '']] }] },
      }),
      X('activity.peer', {
        title: '모둠 서로 평가와 피드백', method: '모둠 서로 평가와 피드백', tool: 'timer', minutes: 13,
        levels: { easy: '한 모둠 산출물을 보고 수준(1~3)을 기록판에 적는다.', base: '세 모둠 산출물을 돌아보며 수준을 적는다.', challenge: '세 모둠 수준을 적고, 구체적 제안을 남겼는지 점검 칸까지 표시한다.' },
        activity: {
          title: '모둠 돌아보기 기록과 피드백 점검', tool: 'timer',
          teacher: '"모둠 산출물을 돌아보며 기준표 수준(잘함 3·보통 2·노력 1)을 적고, 구체적 피드백 하나를 붙임 종이로 남겨요." 실제로 교실을 한 바퀴 돌게 한다. "좋아요라고만 쓰면 돼요"라는 학생에게 "\'좋아요\'를 받은 모둠은 무엇을 고칠지 알 수 있을까요? 어느 부분이 왜 좋은지, 무엇을 더하면 좋을지 써요"라고 말해 준다.',
          task: '다른 모둠 산출물을 기준표로 보고 수준을 적은 뒤, 구체적 피드백을 남겨요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '돌아본 모둠의 기준표 수준(1~3)을 기록판에 적어요.', toolOptions: { title: '모둠 돌아보기', fields: [{ label: '가 모둠', unit: '점' }, { label: '나 모둠', unit: '점' }, { label: '다 모둠', unit: '점' }] }, target: { records: true }, difficulty: 0.1,
              levels: { easy: { prompt: '한 모둠의 기준표 수준(1~3)을 기록판에 적어요.', toolOptions: { fields: [{ label: '가 모둠', unit: '점' }] } } } },
            SELF('내가 남긴 피드백을 점검해요.', '피드백 점검', ['좋은 점을 구체적으로 썼다', '기준표 항목을 짚었다', '고칠 제안을 하나 남겼다'], [1, 2, 3], 0.1),
            { prompt: '모둠에서 받은 피드백 가운데 가장 도움 된 것을 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '다른 모둠에 남길 피드백을 써요.', columns: ['모둠', '좋은 점', '제안'], cells: [['', '', ''], ['', '', '']] }] },
      }),
      X('wrap.score', {
        title: '반 평가 결과 그래프', method: '반 평가 결과 그래프', tool: 'chart', minutes: 7,
        levels: { easy: '두 항목 막대만 보고 더 약한 항목을 고른다.', base: '네 항목 막대를 읽고 가장 약한 항목을 찾는다.', challenge: '가장 약한 항목을 고칠 방법을 고른다.' },
        wrap: {
          teacher: '"가상 반 여섯 모둠 가운데 항목마다 \'잘함\'을 받은 모둠 수예요. 가장 약한 항목은 무엇일까요?" "약한 항목은 우리 모둠 탓이에요"라는 학생에게 "반 전체가 함께 약한 곳이에요. 다음 프로젝트에서 모두 함께 힘쓸 곳을 찾는 거예요"라고 말해 준다.',
          exitTicket: [
            { type: 'tool', tool: 'chart', options: { type: 'bar', mode: 'read', title: '항목별 잘함 모둠 수(가상, 6모둠)', unit: '모둠', data: SCORE, choices: SCORE.map((x) => x[0]), question: '가장 약한 항목은?' }, prompt: '가상 반 평가 결과에서 가장 약한 항목을 골라요.', target: { pick: 1 }, difficulty: 0.15,
              levels: { easy: { prompt: '두 항목 가운데 더 약한 항목을 골라요(가상).', toolOptions: { data: SCORE.slice(0, 2), choices: ['핵심 질문', '자료 출처'] }, target: { pick: 1 } }, challenge: { prompt: '가장 약한 항목을 고칠 방법으로 알맞은 것을 골라요(가상).', toolOptions: { choices: ['자료마다 누가·언제 만들었는지 적기', '포스터 색을 바꾸기', '발표 시간을 늘리기'], question: '고칠 방법은?' }, target: { pick: 0 } } } },
            { type: 'choice', prompt: '반 평가 결과를 보는 까닭으로 알맞은 것은?', options: ['못한 모둠을 찾으려고', '다음 프로젝트에서 함께 힘쓸 곳을 찾으려고', '순위를 매기려고'], answer: 1, difficulty: 0.1, explain: '평가 결과는 다음을 더 좋게 하려고 봐요.' },
            { type: 'short', prompt: '다음 프로젝트에서 내가 더 힘쓸 항목 하나를 써요.' },
          ],
        },
        worksheet: {
          title: '반 평가 결과',
          items: [
            { type: 'choice', prompt: '가상 결과에서 \'잘함\'을 가장 많이 받은 항목은?', options: ['핵심 질문', '자료 출처', '읽기 쉬움', '역할 나눔'], answer: '핵심 질문' },
            { type: 'short', prompt: '가장 약한 항목을 고칠 방법 하나를 써요.' },
          ],
        },
        notes: '그래프 수치는 수업용 가상 자료다. 실제 모둠 평가 결과는 모둠 이름 없이 항목별로만 모은다.',
      }),
      X('wrap.fb', {
        title: '구체적 피드백 고르기', method: '구체적 피드백 고르기', tool: 'emotion', minutes: 7,
        levels: { easy: '피드백 장면 2개에 듣는 사람 마음 카드를 잇는다.', base: '장면 3개에 잇는다.', challenge: '장면 3개에 잇고 남는 카드는 남긴 뒤, \'좋아요\'를 구체적 피드백으로 바꿔 쓴다.' },
        wrap: {
          teacher: '"\'좋아요\'만 들었을 때와 \'질문이 또렷해서 좋아\'를 들었을 때 마음이 어떻게 다를까요?" 장면마다 마음 카드를 잇게 한다. "피드백은 좋다·나쁘다만 말하면 돼요"라는 학생에게 "어디가 왜 좋은지, 무엇을 더하면 좋을지 말해 주면 듣는 사람이 고칠 수 있어요"라고 말해 준다.',
          exitTicket: [
            EX('emotion', MATCH('피드백을 들은 사람의 마음을 이어요.', [['"좋아요"만 들었다', '아쉬움'], ['"질문이 또렷해서 좋아"', '뿌듯함'], ['"출처를 넣으면 더 좋겠어"', '고마움']], { easy: 2, base: 3, challenge: 3, traps: ['화남'] }, 0.15)),
            { type: 'choice', prompt: '구체적 피드백으로 알맞은 것은 무엇인가요?', options: ['좋아요', '그래프 제목이 있으면 더 읽기 쉽겠어', '별로야'], answer: 1, difficulty: 0.1, explain: '어디를 어떻게 하면 좋을지 말하는 것이 구체적 피드백이에요.' },
            { type: 'short', prompt: '"좋아요"를 구체적 피드백으로 바꿔 써요.' },
          ],
        },
        worksheet: {
          title: '구체적 피드백',
          items: [
            { type: 'short', prompt: '친구 산출물에 줄 구체적 칭찬 하나를 써요.' },
            { type: 'short', prompt: '친구 산출물에 줄 구체적 제안 하나를 써요.' },
          ],
        },
      }),
    );
  }

  // ======== 6학년 · 지역 연계 봉사 프로젝트 (<표 2> 자율활동 — 프로젝트형 봉사활동: 공동 프로젝트형, 자치활동 — 지역 사회 연계 자치활동) ========
  {
    const X = mk('g6-serve', 6);
    const TOWN = [{ name: '공원', icon: 'park', at: [1, 1] }, { name: '버스 정류장', icon: 'bus', at: [4, 0] }, { name: '도서관', icon: 'library', at: [3, 2] }, { name: '시장', icon: 'market', at: [5, 3] }, { name: '학교', icon: 'school', at: [0, 3] }];
    const SURVEY = [['공원 쓰레기', 16], ['자전거 길 막힘', 11], ['정류장 낙서', 7], ['어두운 골목', 5]];
    const GOAL = [['봉지 목표', 10], ['봉지 결과', 8], ['안내문 목표', 20], ['안내문 결과', 22]];
    const BUY = [{ id: 'glove', text: '목장갑 10켤레', price: 5000 }, { id: 'bag', text: '종량제 봉투 10장', price: 3000 }, { id: 'snack', text: '과자 파티', price: 8000 }, { id: 'tong', text: '집게 5개', price: 7500 }, { id: 'poster', text: '안내문 인쇄', price: 4000 }, { id: 'banner', text: '큰 현수막', price: 15000 }];
    M.push(
      X('intro.map', {
        title: '마을 문제 지도 표시', method: '마을 문제 지도 표시', tool: 'map', minutes: 6,
        levels: { easy: '교사가 공원 한 곳에 핀을 꽂는 것을 함께 본다.', base: '공원·버스 정류장 두 곳의 문제를 핀으로 짚어 본다.', challenge: '세 곳(공원·정류장·도서관 앞)의 문제를 짚고 가장 급한 곳을 말한다.' },
        intro: {
          teacher: '"가상 마을 지도예요. 학교 둘레에서 고치고 싶은 문제가 있는 곳은 어디일까요?" 시연 단추로 공원에 핀이 꽂히는 모습을 보인다. "마을 문제는 어른들이 하는 일이에요"라는 말에는 "우리가 매일 지나는 곳이에요. 협력할 기관과 함께라면 초등학생도 할 수 있는 일이 있어요"라고 되묻는다.',
          student: '가상 마을 지도에서 문제가 있을 것 같은 곳을 찾아보아요.',
          demo: { tool: 'map', options: { grid: [6, 4], title: '가상 마을', places: TOWN, legend: false }, sequence: [{ place: '공원' }] },
          art: art('a paper town map with a park, a bus stop and a library, small paper trash pieces scattered in the park', '우리 마을의 문제는?', 'tree', 'mint'),
        },
      }),
      X('intro.data', {
        title: '마을 문제 설문 그래프 읽기', method: '마을 문제 자료 그래프 읽기', tool: 'chart', minutes: 6,
        levels: { easy: '교사가 막대 3개를 짚어 주며 함께 읽는다.', base: '막대 4개를 읽고 가장 큰 문제를 고른다.', challenge: '두 번째로 큰 문제까지 찾고 둘을 견준다.' },
        intro: {
          teacher: '"가상 마을 사람들에게 \'고치고 싶은 문제\'를 물은 설문이에요. 가장 많이 고른 문제는 무엇일까요?" 시연 단추로 가장 높은 막대가 골라지는 모습을 보인다. "우리가 생각한 문제가 마을 사람 생각과 같을 거예요"라는 말에는 "같을 수도, 다를 수도 있어요. 그래서 자료로 확인해요"라고 되묻는다.',
          student: '가상 설문 그래프에서 마을 사람들이 가장 많이 고른 문제를 찾아보아요.',
          demo: { tool: 'chart', options: { type: 'bar', mode: 'read', title: '고치고 싶은 마을 문제(가상 설문)', unit: '명', data: SURVEY, showValues: true, question: '가장 큰 문제는?', choices: SURVEY.map((x) => x[0]) }, sequence: [{ pick: 0 }] },
          art: art('a paper survey board in a paper town square with colored bars and small paper neighbors pointing', '마을 사람들은 무엇을 바랄까?', 'sun', 'sky'),
        },
        notes: '설문 수치는 수업용 가상 자료다.',
      }),
      X('activity.cause', {
        title: '마을 문제 원인·결과 그물', method: '원인과 결과 생각그물', tool: 'mindmap', minutes: 14,
        levels: { easy: '가지 2개(원인·결과)에 카드를 붙인다.', base: '가지 3개(원인·결과·해결)에 카드를 붙인다.', challenge: '\'함께할 곳\' 가지까지 4개에 붙이고, 함정 카드는 남긴다.' },
        activity: {
          title: '마을 문제 원인·결과·해결 붙이기', tool: 'mindmap',
          teacher: '"공원에 쓰레기가 많은 까닭은 무엇일까요? 그래서 무슨 일이 생길까요?" 카드마다 원인인지 결과인지 묻는다. "사람들이 나빠서 버리는 거예요"라는 학생에게 "쓰레기통이 멀거나 안내가 없으면 어떨까요? 원인을 넓게 보면 바꿀 방법이 보여요"라고 말해 준다.',
          task: '마을 문제 카드를 원인·결과·해결·함께할 곳 가지에 붙여요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
          items: [
            BRANCH('\'공원 쓰레기\' 카드를 가지에 붙여요.', '공원 쓰레기', [['원인', ['쓰레기통이 멀다', '버릴 곳 안내가 없다']], ['결과', ['냄새가 난다', '새가 쓰레기를 먹는다']], ['해결', ['안내문 붙이기']], ['함께할 곳', ['주민센터에 알리기']]], { easy: 2, base: 3, challenge: 4 }, ['사람들을 혼내기'], 0.2),
            BRANCH('\'자전거 길 막힘\' 카드를 가지에 붙여요.', '자전거 길 막힘', [['원인', ['길에 세워 둔 물건', '표시가 지워졌다']], ['결과', ['자전거가 차도로 간다', '걷는 사람과 부딪친다']], ['해결', ['표시 다시 그리기 건의']], ['함께할 곳', ['주민센터에 건의하기']]], { easy: 2, base: 3, challenge: 4 }, ['자전거를 타지 않기'], 0.25, { conclude: '원인을 찾아야 알맞은 해결과 함께할 곳이 보여요.' }),
            { prompt: '모둠에서 해결할 문제 하나를 정하고 그 원인을 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '우리 모둠이 고른 마을 문제를 정리해요.', columns: ['문제', '원인', '결과', '해결'], cells: [['', '', '', '']] }] },
      }),
      X('activity.partner', {
        title: '협력 기관과 할 일 잇기', method: '협력 기관과 할 일 잇기', tool: 'emotion', minutes: 13,
        levels: { easy: '기관 2곳에 함께할 일 카드를 잇는다.', base: '기관 3곳에 잇는다.', challenge: '기관 4곳에 잇고, 협력이 아닌 함정 카드는 남긴다.' },
        activity: {
          title: '협력 기관과 함께할 일 잇기', tool: 'emotion',
          teacher: '"주민센터, 복지관, 도서관, 보건소는 저마다 하는 일이 달라요. 우리 봉사와 어떻게 함께할 수 있을까요?" 기관 칸을 읽고 할 일 카드를 잇게 한다. "우리끼리 몰래 하면 더 멋져요"라는 학생에게 "기관과 함께하면 허락·안전·필요한 곳을 알 수 있어요. 봉사가 받는 사람에게 정말 필요한지도 알 수 있어요"라고 말해 준다.',
          task: '협력 기관 칸에 함께할 수 있는 일 카드를 이어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
          items: [
            MATCH('협력 기관과 함께할 일을 이어요.', [['주민센터', '마을 청소 날 함께 정하기'], ['복지관', '어르신께 편지 전하기'], ['도서관', '책 읽어 주기 자리 빌리기'], ['보건소', '손 씻기 안내 자료 받기']], { traps: ['허락 없이 혼자 하기'] }, 0.2),
            MATCH('봉사 준비 때 기관에 물을 것을 이어요.', [['장소를 써도 될까?', '사용 허락'], ['언제가 좋을까?', '알맞은 날짜'], ['무엇이 필요할까?', '받는 사람의 필요'], ['안전은 어떻게?', '안전 수칙']], { traps: ['우리가 하고 싶은 것만'] }, 0.25, { conclude: '협력 기관과 함께하면 필요한 곳에, 안전하게 봉사할 수 있어요.' }),
            { prompt: '모둠에서 우리 프로젝트와 함께할 기관 한 곳과 그 까닭을 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '우리 봉사와 함께할 기관과 그곳에 물을 질문 하나를 써요.' }] },
        notes: '기관이 하는 일은 지역마다 다르다. 실제 협력 전에 그 기관에 먼저 확인한다.',
      }),
      X('activity.budget', {
        title: '봉사 준비 예산 짜기', method: '봉사 준비 예산 짜기', tool: 'economy', minutes: 14,
        levels: { easy: '물건 4개 가운데 꼭 필요한 2개(장갑·봉투)를 1만 원 안에서 고른다.', base: '물건 6개 가운데 필요한 4개를 2만 원 안에서 고르고 필요 없는 것은 뺀다.', challenge: '1만 5천 원 안에서 1만 2천 원어치 넘게 고르고 남은 돈을 말한다.' },
        activity: {
          title: '정해진 예산 안에서 준비물 고르기', tool: 'economy',
          teacher: '"마을 공원 쓰레기 줍기 봉사 준비물이에요. 가상 예산 안에서 꼭 필요한 것부터 골라요." 고를 때마다 봉사 목표에 꼭 필요한지 묻는다. "과자 파티도 있어야 신나요"라는 학생에게 "예산은 봉사 목표를 이루려고 쓰는 돈이에요. 목표에 꼭 필요한 것은 무엇일까요?"라고 말해 준다.',
          task: '예산 막대를 넘지 않게, 봉사 목표에 필요한 준비물을 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '2만 원 안에서 필요한 준비물 4개를 고르고, 과자·현수막은 빼요.', toolOptions: { mode: 'budget', budget: 20000, items: BUY, ask: '공원 줍기 준비물(가상 값)' }, target: { budget: { must: ['glove', 'bag', 'tong', 'poster'], not: ['snack', 'banner'] } }, difficulty: 0.25,
              levels: {
                easy: { prompt: '1만 원 안에서 장갑과 봉투를 고르고 과자는 빼요.', toolOptions: { budget: 10000, items: BUY.slice(0, 4) }, target: { budget: { must: ['glove', 'bag'], not: ['snack'] } } },
                challenge: { prompt: '1만 5천 원 안에서 1만 2천 원어치 넘게, 장갑·봉투는 꼭 넣어요.', toolOptions: { budget: 15000 }, target: { budget: { min: 12000, must: ['glove', 'bag'], not: ['snack', 'banner'] } } },
              } },
            { prompt: '1만 원 안에서 안내문과 봉투를 넣고 과자는 빼요.', toolOptions: { mode: 'budget', budget: 10000, items: [{ id: 'paper', text: '안내문 인쇄', price: 4000 }, { id: 'tape', text: '붙이는 테이프', price: 1500 }, { id: 'candy', text: '사탕 한 봉지', price: 3000 }, { id: 'bag2', text: '종량제 봉투 5장', price: 1500 }, { id: 'balloon', text: '풍선 장식', price: 5000 }], ask: '안내문 붙이기 준비물(가상 값)' }, target: { budget: { must: ['paper', 'bag2'], not: ['candy', 'balloon'] } }, difficulty: 0.25, conclude: '예산은 봉사 목표에 꼭 필요한 것부터 써요.' },
            { prompt: '모둠에서 남은 돈을 어떻게 할지 이야기해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '우리 봉사 준비물 예산표를 써요.', columns: ['준비물', '값', '꼭 필요한 까닭'], cells: [['', '', ''], ['', '', '']] }] },
        notes: '물건 값은 수업용 가상 값이다.',
      }),
      X('activity.do', {
        title: '지역 연계 봉사 실천', method: '지역 연계 봉사 실천', tool: 'timer', minutes: 13,
        levels: { easy: '선생님과 함께 안전 점검을 하고 주운 봉지 수만 기록한다.', base: '모둠 역할대로 안전 점검을 하고 봉지·안내문 두 칸을 기록한다.', challenge: '지난번과 견준 수까지 세 칸을 기록해 결과를 잰다.' },
        activity: {
          title: '안전 점검과 봉사 결과 기록', tool: 'timer',
          teacher: '"출발 전에 안전 점검을 모두 해요. 협력 기관 선생님 안내를 듣고, 정해진 곳에서만 움직여요." 실제 봉사는 교사와 협력 기관 안내에 따라 하고, 돌아와서 결과를 기록판에 적게 한다. "빨리 많이 주우려고 길 건너까지 가도 돼요"라는 학생에게 "정해진 곳을 벗어나면 안전을 지킬 수 없어요. 봉사보다 안전이 먼저예요"라고 말해 준다.',
          task: '출발 전 안전 점검을 하고, 봉사한 뒤 결과를 기록판에 적어요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '출발 전에 봉사 안전 점검을 모두 확인해요.', toolOptions: { title: '봉사 안전 점검', safety: ['장갑을 꼈다', '집게로만 줍는다', '차도 쪽으로 가지 않는다', '선생님 곁에서 움직인다'] }, target: { safety: true }, difficulty: 0.1 },
            { prompt: '봉사 결과를 기록판에 적어요.', toolOptions: { title: '봉사 결과 기록', fields: [{ label: '주운 봉지', unit: '개' }, { label: '붙인 안내문', unit: '장' }] }, target: { records: true }, difficulty: 0.15,
              levels: { easy: { prompt: '주운 봉지 수를 기록판에 적어요.', toolOptions: { fields: [{ label: '주운 봉지', unit: '개' }] } }, challenge: { prompt: '봉사 결과와 지난번 봉지 수를 함께 적어요.', toolOptions: { fields: [{ label: '주운 봉지', unit: '개' }, { label: '붙인 안내문', unit: '장' }, { label: '지난번 봉지', unit: '개' }] } } } },
            { prompt: '모둠에서 봉사하며 본 마을의 변화를 이야기해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '봉사 결과를 써요.', columns: ['한 일', '수', '본 변화'], cells: [['', '', ''], ['', '', '']] }] },
        notes: '학교 밖 봉사는 학교 계획·보호자 안내·협력 기관 허락을 거쳐 교사 인솔로 한다. 사진은 사람 얼굴이 나오지 않게 찍는다.',
      }),
      X('wrap.eval', {
        title: '목표와 결과 견주기 그래프', method: '목표와 결과 견주기 그래프', tool: 'chart', minutes: 7,
        levels: { easy: '봉지 목표·결과 두 막대(1항목)를 완성한다.', base: '봉지·안내문 목표와 결과 네 막대(2항목)를 완성한다.', challenge: '목표에 못 미친 항목과 그 까닭을 고른다.' },
        wrap: {
          teacher: '"가상 모둠의 목표와 실제 결과를 막대로 견주어 볼까요?" 목표 막대와 결과 막대를 나란히 읽게 한다. "목표를 못 채웠으니 실패예요"라는 학생에게 "왜 모자랐는지 알면 다음 계획을 고칠 수 있어요. 견주는 까닭이 그거예요"라고 말해 준다.',
          exitTicket: [
            { type: 'tool', tool: 'chart', options: { type: 'bar', mode: 'build', title: '목표와 결과(가상)', unit: '개', data: GOAL, given: [0] }, prompt: '가상 모둠의 목표와 결과로 막대그래프를 완성해요.', target: { build: true }, difficulty: 0.2,
              levels: { easy: { prompt: '봉지 목표와 결과 막대를 완성해요(가상).', toolOptions: { data: GOAL.slice(0, 2) } } } },
            { type: 'tool', tool: 'chart', options: { type: 'bar', mode: 'read', title: '목표와 결과(가상)', unit: '개', data: GOAL, choices: ['봉지', '안내문'], question: '목표에 못 미친 항목은?' }, prompt: '가상 결과에서 목표에 못 미친 항목을 골라요.', target: { pick: 0 }, difficulty: 0.15,
              levels: { challenge: { prompt: '봉지가 목표에 못 미친 까닭으로 알맞은 것을 골라요(가상).', toolOptions: { choices: ['비가 와서 봉사 시간이 줄었다', '안내문을 너무 많이 붙였다', '목표가 없었다'], question: '까닭은?' }, target: { pick: 0 } } } },
            { type: 'choice', prompt: '목표와 결과를 견주는 까닭으로 알맞은 것은?', options: ['다음 계획을 고치려고', '잘한 모둠에 상을 주려고', '봉사를 끝내려고'], answer: 0, difficulty: 0.1, explain: '견주어 보면 다음에 무엇을 바꿀지 알 수 있어요.' },
          ],
        },
        worksheet: {
          title: '목표와 결과',
          items: [
            { type: 'choice', prompt: '가상 결과에서 목표보다 더 해낸 항목은?', options: ['봉지', '안내문'], answer: '안내문' },
            { type: 'short', prompt: '우리 모둠 봉사의 목표와 결과를 견주어 한 문장으로 써요.' },
          ],
        },
        notes: '그래프 수치는 수업용 가상 자료다.',
      }),
      X('wrap.report', {
        title: '봉사 평가와 지속 방법 글', method: '평가와 지속 방법 글', tool: 'rubric-writing', minutes: 7,
        levels: { easy: '문장 틀(목표는 ~. 결과는 ~. 앞으로 ~)을 보고 기준 2개로 점검한다.', base: '목표·결과·지속 방법을 넣어 세 문장으로 쓰고 기준 3개로 점검한다.', challenge: '다음 학년에 넘길 점까지 넣어 기준 4개로 점검한다.' },
        wrap: {
          teacher: '"봉사는 한 번 하면 끝일까요? 목표와 결과를 견주고, 어떻게 이어 갈지 써 봐요." "다음에 또 하겠다"라고만 쓴 학생에게 "누가, 언제, 어떻게 이어 갈까요? 5학년 동생들에게 넘겨줄 수도 있어요"라고 말해 준다.',
          exitTicket: [
            EX('rubric-writing', RUB('목표·결과·지속 방법을 넣어 평가 글을 세 문장으로 써요.', { topic: '우리 모둠 지역 봉사의 목표와 결과를 견주고, 이어 갈 방법을 세 문장으로 써요.', starter: '목표는 ___였다. 결과는 ___였다. 앞으로 ___.', crit: ['목표를 썼다', '결과를 썼다', '이어 갈 방법을 썼다'], ch: { prompt: '다음 학년에 넘길 점까지 넣어 평가 글을 쓰고 점검해요.', crit: '다음 학년에 넘길 점을 썼다' }, must: [['다음 학년', '5학년', '동생']], chars: [30, 200], sentences: [3, 4], title: '봉사 평가와 지속' }, 0.2)),
            { type: 'choice', prompt: '지역 봉사를 이어 가는 방법으로 알맞은 것은?', options: ['한 번 하고 끝낸다', '동생 학년에 방법과 기록을 넘긴다', '결과를 숨긴다'], answer: 1, difficulty: 0.1, explain: '기록과 방법을 넘기면 봉사가 계속 이어져요.' },
          ],
        },
        worksheet: {
          title: '봉사 평가와 지속',
          items: [
            { type: 'short', prompt: '우리 봉사를 이어 갈 방법 하나를 써요.' },
            { type: 'short', prompt: '다음 학년 동생들에게 넘길 점 하나를 써요.' },
          ],
          easy: { note: '목표는 ___였다. 결과는 ___였다. 앞으로 ___.', items: [{ type: 'check', prompt: '평가 글에 넣을 것에 표시해요.', options: ['목표', '결과', '이어 갈 방법'] }] },
        },
      }),
    );
  }

  PaperLessons.registerModules(M);
})();
