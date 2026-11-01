/* 창체 안전교육 응급처치 — 초5-6 모듈 내용(edu-module.v1). 형식·작성 규칙: MODULES_BUILD.md, 계획: framework/safety-b.json 의 saf-firstaid 초5-6.
 * 근거: 「학교안전교육 실시 기준 등에 관한 고시」(교육부고시 제2023-33호) 별표 2 초등학교 응급처치 2(심폐소생술·자동제세동기)·4(일상생활 속 응급처치),
 *       표준안 응급처치(기도폐쇄·화상·염좌) — sources/changche/research-safety.md.
 *   심폐소생술·AED 주제(cpr-aed)는 all_market 시뮬레이션 templates/lesson-materials/visual-series/src/cpr-aed/story.md·CHECK.md 와 문구·차례·수치를 맞췄다:
 *   주변 안전 → 어깨 두드리며 반응 확인 → 사람을 콕 집어 119·AED 부탁 → 호흡 확인 → 가슴 압박 / AED 전원 → 패드 두 장 → 분석 중 떨어지기 → 충격이 필요하다고 할 때만 버튼 → 바로 압박 다시.
 *   숫자로 쓰는 지침은 성인 가슴 압박 '깊이 약 5cm·분당 100~120회' 둘뿐이다(질병관리청·대한심폐소생협회 2025 가이드라인 브리핑). 교대 주기·AED 재분석 간격은 '공식 지침'으로만 적는다.
 *   타이머 값(압박 30초 등)은 '우리 반 연습값'이며 공식 지침 수치가 아니라고 화면에 밝힌다. 연습은 마네킹·쿠션·몸짓으로만 한다.
 * 초5-6 기준: 사례의 원인과 결과, 자기 점검, 갈림길(dilemma)·기준표 글쓰기(rubric-writing). 다친 모습·피는 그리거나 묘사하지 않는다(장면 이름만).
 * 주제 2개(5학년 1 · 6학년 1) × 도입 2 · 활동 4 · 정리 2 = 계획 모듈 16개 전부. 추천 조합은 체계도 sequences(학년마다 2차시).
 *
 * 사람 확인: 근거 파일에는 고시 항목 제목뿐이다. 아래 문장은 확인할 곳과 함께 적는다(질병관리청·대한심폐소생협회, 소방청 119 안내, 국민재난안전포털 응급처치, 대한적십자사).
 *   - cpr-aed 전체: CPR 시뮬레이션 CHECK.md '사람 확인 필요' 1~7 그대로 — 깊이·빠르기 원문 PDF 대조, 교대 주기(흔히 '2분'으로 알려짐, 숫자 안 씀), AED 재분석 간격(숫자 안 씀),
 *     패드 자리 문구, AED 음성 안내 문구, '분석 중 떨어지는 까닭' 설명, '헐떡이듯 이상하게 쉬면 심정지로 본다', 초등학생이 실제 상황에서 압박까지 할지(학교 안전 계획·교사 판단).
 *   - cpr-aed.activity.aed-order: 각 단계에서 외칠 말("모두 떨어지세요!" 등)은 일반 교육 자료의 표현이다. 학교 AED 기종의 실제 음성 안내와 견준다.
 *   - cpr-aed.intro.heart-find: '심장은 피를 온몸에 보낸다, 폐는 숨을 쉬어 산소를 받는다, 심장이 멈추면 피가 돌지 않는다'는 과학 교과 수준 설명이다.
 *   - choking-daily.intro.lunch-branch·activity.choke-order: 기도막힘 신호(두 손으로 목을 감싸 쥠·말이나 기침을 못 함), '기침할 수 있으면 기침하게 둔다', '물을 마시게 하지 않는다',
 *     '큰 소리로 어른을 부르고 119에 알린다'. 등 두드리기·배 밀어내기(하임리히법)의 차례와 횟수는 쓰지 않았다 — 배운 어른이 한다고만 적었다. '등을 세게 친다' 보기는 틀렸다고 단정하지 않고 '먼저 어른을 부른다'로만 피드백한다.
 *     혼자 있을 때 할 일은 말하기 문항으로만 두었다(공식 안내 확인 뒤 교사가 알려 준다).
 *   - choking-daily 데임: '흐르는 시원한 물로 충분히 식힌다', '얼음을 바로 대지 않는다', '물집을 터뜨리지 않는다' — 식히는 시간(분)은 쓰지 않았다.
 *   - choking-daily 삠: '움직이지 않게 받친다', '주무르지 않는다', '차갑게 할 때 얼음은 수건에 싸서 댄다', '아프면 계속 걷지 않고 어른께 알린다'.
 *   - choking-daily 코피: '고개를 살짝 앞으로 숙이고 콧방울을 누른다', '고개를 뒤로 젖히지 않는다'. 벌 쏘임: '그 자리를 벗어나 어른께 알린다', '숨쉬기 힘들거나 얼굴이 부으면 바로 119'.
 *   - choking-daily.activity.home-kit: 가정 구급함 물품 목록(밴드·거즈·붕대·가위·체온계·일회용 장갑)과 '사용 기한 날짜 확인'. 약은 목록에 넣지 않았다(약물 안전은 다른 영역).
 */
(function () {
  const M = [];
  const mk = (topic, grade) => (suffix, o) => Object.assign({
    id: `saf-firstaid.e56.${topic}.${suffix}`, schema: 'edu-module.v1', type: suffix.split('.')[0],
    domain: 'saf-firstaid', band: '초5-6', topic: `saf-firstaid.e56.${topic}`, grades: [grade],
  }, o);
  const art = (draw, banner, motif = 'star', color = 'buttercup') => ({ draw, banner, extra: [{ motif, x: 300, y: 96, color }] });
  const cut = (p) => String(p).replace(/[.?]$/, '');
  const EX = (tool, item) => ({ type: 'tool', tool, options: item.toolOptions, prompt: item.prompt, target: item.target, difficulty: item.difficulty, levels: item.levels });

  // ---- 카드 판 나누기(sortboard 글 카드·mindmap sort) ----
  // groups = { 칸: [카드…] }. 쉬움 = easySlots 칸만(칸마다 앞 2장), 기본 = 모든 칸, 도전 = extra 카드 + 함정 카드(어느 칸에도 넣지 않음)
  const inter = (slots, g) => { const out = []; const n = Math.max(...slots.map((s) => (g[s] || []).length)); for (let i = 0; i < n; i++) for (const s of slots) if ((g[s] || [])[i]) out.push(g[s][i]); return out; };
  const SORTX = (prompt, { slots, groups, easySlots, easy = 2, extra = {}, traps = [], topic }, d, more) => {
    const es = easySlots || slots;
    const ez = Object.fromEntries(es.map((s) => [s, groups[s].slice(0, easy)]));
    const full = Object.fromEntries(slots.map((s) => [s, [...groups[s], ...(extra[s] || [])]]));
    const fullCards = inter(slots, full); traps.forEach((t, i) => fullCards.splice(Math.min(fullCards.length, 1 + i * 3), 0, t));
    const count = (g) => Object.values(g).reduce((a, b) => a + b.length, 0);
    const base = Object.assign({ slots, cards: inter(slots, groups) }, topic ? { topic } : {});
    return Object.assign({
      prompt, toolOptions: base, target: { sort: groups }, difficulty: d,
      levels: {
        easy: { prompt: `${cut(prompt)}(칸 ${es.length}개·카드 ${count(ez)}장).`, toolOptions: { slots: es, cards: inter(es, ez) }, target: { sort: ez } },
        challenge: { prompt: `${cut(prompt)}(카드 ${fullCards.length}장${traps.length ? ', 넣지 않을 카드도 있어요' : ''}).`, toolOptions: { cards: fullCards }, target: { sort: full } },
      },
    }, more);
  };
  // 차례(story·kitchen order): steps = 바른 차례. easy = 쉬움에 남길 칸 번호, trap = 도전에서 끼우는 틀린 카드
  const mix = (list) => [list[2], list[0], ...list.slice(3), list[1]].filter((x) => x != null);
  const ORDER = (prompt, steps, { easy = [0, 1, 2], trap, motifs = [], mode, title } = {}, d, more) => {
    const cards = steps.map((t, i) => (motifs[i] ? { id: t, text: t, motif: motifs[i] } : t));
    const ez = easy.map((i) => cards[i]);
    const lv = { easy: { prompt: `${cut(prompt)}(카드 ${ez.length}장).`, toolOptions: { slots: ez.length, cards: mix(ez) }, target: { order: easy.map((i) => steps[i]) } } };
    if (trap) lv.challenge = { prompt: `${cut(prompt)}(틀린 카드 하나는 빼요).`, toolOptions: { slots: steps.length, cards: [...mix(cards), trap] }, target: { order: steps } };
    return Object.assign({ prompt, toolOptions: Object.assign(mode ? { mode } : {}, title ? { title } : {}, { slots: steps.length, cards: mix(cards) }), target: { order: steps }, difficulty: d, levels: lv }, more);
  };
  // 점검표(kitchen checklist): good = 표시할 항목, traps = 표시하지 않을 항목. 쉬움 = good 앞 easy개 + 함정 1, 기본 = good 앞 base개 + 함정 2, 도전 = good 전부 + 함정 전부
  const CHK = (prompt, title, good, traps, { easy = 3, base = 5 } = {}, d, more) => {
    const id = (t) => (good.indexOf(t) >= 0 ? `k${good.indexOf(t)}` : `t${traps.indexOf(t)}`);
    const build = (g, tr) => { const out = g.slice(); tr.forEach((t, i) => out.splice(Math.min(out.length, 1 + i * 2), 0, t)); return out.map((t) => ({ id: id(t), text: t })); };
    const ids = (g) => g.map(id);
    const lv = { easy: { prompt: `${cut(prompt)}(${easy}칸).`, toolOptions: { items: build(good.slice(0, easy), traps.slice(0, 1)) }, target: { checklist: ids(good.slice(0, easy)) } } };
    if (good.length > base || traps.length > 2) lv.challenge = { prompt: `${cut(prompt)}(${good.length}칸, 넣지 않을 것도 있어요).`, toolOptions: { items: build(good, traps) }, target: { checklist: ids(good) } };
    return Object.assign({ prompt, toolOptions: { mode: 'checklist', title, items: build(good.slice(0, base), traps.slice(0, 2)) }, target: { checklist: ids(good.slice(0, base)) }, difficulty: d, levels: lv }, more);
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
  // 갈림길 활동 문항 셋: ① 안전한 길 + 근거(쉬움 1번·기본 2번·도전 max번) ② 다른 길 끝까지 가 보고 견주기 ③ 모둠 토의(말하기)
  const DIL = ({ steps, ending, reasons, good, title, talk, conclude, max = 3 }) => {
    const opt = (n) => ({ title, scene: TREE(steps, n, ending), reasons });
    return [
      { prompt: `‘${title}’ 갈림길마다 안전한 선택을 고르고, 끝에서 근거를 골라요.`, toolOptions: opt(2), target: { path: [goodPath(steps, 2)], reasons: good.slice(0, 1), some: true }, difficulty: 0.3,
        levels: {
          easy: { prompt: `‘${title}’ 갈림길 한 번에서 안전한 선택을 고르고 근거를 골라요.`, toolOptions: opt(1), target: { path: [goodPath(steps, 1)], reasons: good.slice(0, 1), some: true } },
          challenge: { prompt: `‘${title}’ 갈림길 ${max === 3 ? '세' : '두'} 번을 지나 안전한 끝까지 가고, 알맞은 근거를 모두 골라요.`, toolOptions: opt(max), target: { path: [goodPath(steps, max)], reasons: good } },
        } },
      { prompt: `‘${title}’에서 되돌아가 다른 선택도 끝까지 가 보고 결과를 견주어요.`, toolOptions: opt(2), target: { explore: 2 }, difficulty: 0.25,
        levels: { easy: { toolOptions: opt(1) }, challenge: { prompt: `‘${title}’에서 서로 다른 끝 장면 세 곳을 가 보고 결과를 견주어요.`, toolOptions: opt(max), target: { explore: 3 } } }, conclude },
      { prompt: talk, free: true, talk: true, toolOptions: opt(2) },
    ];
  };

  // ---- 기준표 글쓰기(rubric-writing) 출구 ----
  // 쉬움 = 기준 2개 + 문장 틀 + 문장 수 sent[0], 기본 = 기준 3개 + 문장 수 sent[1], 도전 = 기준 3개 + crit[3](덧붙인 기준) + 꼭 넣을 낱말
  const RUBX = (prompt, { topic, starter, crit, must, chars = [30, 220], title, sent }) => ({
    type: 'tool', tool: 'rubric-writing', prompt, difficulty: 0.2,
    options: { topic, minChars: chars[0], maxChars: chars[1], title },
    target: { selfCheck: crit.slice(0, 3), chars, sentences: sent[1] },
    levels: {
      easy: { prompt: `${cut(prompt)}(문장 틀을 써도 돼요).`, toolOptions: { starter }, target: { selfCheck: crit.slice(0, 2), chars: [Math.max(15, chars[0] - 15), chars[1]], sentences: sent[0] } },
      challenge: { prompt: `${cut(prompt)}. ${crit[3]}`, target: { selfCheck: crit.slice(0, 4), chars: [chars[0] + 10, chars[1]], sentences: sent[1], mustInclude: must } },
    },
  });


  // ======== 5학년 · 심폐소생술과 AED 사용 순서 (별표 2 초등 응급처치 2) ========
  {
    const X = mk('cpr-aed', 5);
    const CASE = [
      { id: 'fall', text: '공원에서 어른이 갑자기 쓰러짐', motif: 'tree' },
      { id: 'ask', text: '"당신은 119, 당신은 AED" 부탁', motif: 'star' },
      { id: 'press', text: '옆 사람이 바로 가슴 압박 시작', motif: 'house' },
      { id: 'pass', text: '구급대가 와서 이어 받음', motif: 'sun' },
    ];
    const CPR = ['주변이 안전한지 보기', '어깨 두드려 반응 확인', '119·AED 콕 집어 부탁', '호흡 확인', '가슴 압박 시작'];
    M.push(
      X('intro.case-story', {
        title: '쓰러진 사람 이야기 차례', method: '심정지 가상 사례의 원인과 결과 장면', tool: 'story', minutes: 5,
        levels: { easy: '교사가 장면 3장(쓰러짐·부탁·구급대)을 함께 놓는다.', base: '장면 4장을 학생이 차례대로 놓도록 묻는다.', challenge: '장면 4장을 놓은 뒤 "아무도 압박하지 않았다면" 하고 한 장을 바꿔 놓아 결과를 말하게 한다.' },
        intro: {
          teacher: '"지어낸 이야기예요. 공원에서 어른이 쓰러졌을 때 주변 사람들은 어떤 차례로 움직였을까요?" 시연 단추로 장면 4장이 차례대로 놓이는 모습을 보인다. "119가 올 때까지 기다리면 돼요"라는 말이 나오면 "구급대가 오는 동안 심장이 멈춘 사람의 몸에는 피가 돌까요? 옆 사람이 바로 압박해야 사슬이 이어져요"라고 되묻는다. 오늘은 신고·가슴 압박·AED의 차례와 까닭을 배운다고 밝힌다.',
          student: '이야기에서 결과를 바꾼 행동은 무엇이었는지 한 가지 골라 짝에게 말해 보아요.',
          demo: { tool: 'story', options: { mode: 'order', slots: 4, cards: [CASE[2], CASE[0], CASE[3], CASE[1]], title: '공원에서 생긴 일(가상 사례)' }, sequence: [{ order: CASE.map((c) => c.id) }] },
          art: art('a paper-cut park path with a paper adult lying down, one paper person pointing and calling, another kneeling beside with hands on the chest', '누가 무엇을 했을까?', 'star', 'peach'),
        },
        notes: '쓰러진 모습만 말하고 다친 모습은 다루지 않는다. 사례는 지어낸 것이다.',
      }),
      X('intro.heart-find', {
        title: '심장과 폐가 하는 일', method: '심장과 폐가 하는 일 찾기', tool: 'body', minutes: 5,
        levels: { easy: '교사가 심장만 함께 눌러 찾고 이름을 보여 준다.', base: '심장과 폐를 차례로 찾고 하는 일을 말하게 한다.', challenge: '심장·폐를 찾은 뒤 "심장이 멈추면 무슨 일이 생길까?"에 답하게 한다.' },
        intro: {
          teacher: '"가슴 속에서 쉬지 않고 일하는 기관은 무엇일까요?" 시연 단추로 종이 몸의 심장 → 폐가 골라지는 모습을 보인다. "심장이 멈추면 숨만 쉬게 해 주면 돼요"라는 말에는 "피를 온몸에 보내는 것은 어느 기관이었죠? 그래서 가슴을 눌러 피가 돌게 하는 거예요"라고 되묻는다.',
          student: '내 가슴에 손을 얹어 심장이 뛰는 것을 느껴 보고, 심장이 하는 일을 한 가지 말해 보아요.',
          demo: { tool: 'body', options: { mode: 'find', organs: ['뇌', '심장', '폐', '위'], jobs: { 심장: '피를 온몸에 보내요', 폐: '숨을 쉬어 산소를 받아요' }, names: true }, sequence: [{ sel: '심장' }, { sel: '폐' }] },
          art: art('a paper body cut-out with a red paper heart and two pink paper lungs, arrows showing blood flowing around', '심장이 멈추면?', 'star', 'peach'),
        },
      }),
      X('activity.cpr-timer', {
        title: '심폐소생술 순서와 구간 연습', method: '심폐소생술 순서 놓고 구간 연습', tool: 'timer', minutes: 14,
        levels: { easy: '순서 카드 3장(반응 확인·119와 AED 부탁·가슴 압박)을 놓고, 압박 연습 구간을 1번 맞춘다.', base: '순서 카드 4장을 놓고 압박·쉬기 구간을 2번 되풀이하도록 맞추고, 연습 안전 점검을 한다.', challenge: '순서 카드 5장(호흡 확인 포함)을 놓고, 쉬기 칸을 교대 준비로 써서 짝과 번갈아 4번 하도록 맞춘다.' },
        activity: {
          title: '순서 카드와 압박 연습 타이머', tool: 'timer',
          teacher: '"쓰러진 사람을 보면 가장 먼저 무엇을 할까요? 바로 누를까요?" 카드를 놓은 뒤 "주변 안전 → 반응 확인 → 콕 집어 부탁"을 소리 내어 따라 하게 한다. 압박은 마네킹이나 쿠션으로만, 가슴 정중앙에 두 손을 겹쳐 팔을 곧게 펴고 한다. 공식 지침은 깊이 약 5cm, 분당 100~120회라고 알려 주고, 타이머 값은 우리 반 연습값이라고 밝힌다. "연습처럼 쉬어도 돼요"라는 학생에게 "실제로는 구급대가 올 때까지 멈추지 않고 교대하며 이어 가요"라고 짚는다.',
          task: '심폐소생술 순서 카드를 놓고, 연습 안전을 점검한 뒤 압박 연습 타이머를 맞춰요.', levels: { easy: {}, base: {}, challenge: { showTotal: true } },
          items: [
            { prompt: '쓰러진 사람을 보았을 때 할 일 카드를 차례대로 놓아요.', toolOptions: { title: '심폐소생술 차례', cards: mix(CPR.filter((_, i) => i !== 3)) }, target: { order: CPR.filter((_, i) => i !== 3) }, difficulty: 0.25,
              levels: {
                easy: { prompt: '쓰러진 사람을 보았을 때 할 일 카드를 차례대로 놓아요(3장).', toolOptions: { cards: mix([CPR[1], CPR[2], CPR[4]]) }, target: { order: [CPR[1], CPR[2], CPR[4]] } },
                challenge: { prompt: '쓰러진 사람을 보았을 때 할 일 카드를 차례대로 놓아요(5장).', toolOptions: { cards: mix(CPR) }, target: { order: CPR } },
              } },
            { prompt: '마네킹 연습 전에 안전 점검 칸을 모두 확인해요.', toolOptions: { title: '연습 전 안전 점검', safety: ['마네킹이나 쿠션으로만 연습해요', '친구 몸을 누르지 않아요', '두 손을 겹치고 팔을 곧게 펴요'] }, target: { safety: true }, difficulty: 0.1 },
            { prompt: '압박 30초·쉬기 30초를 2번 하도록 맞춰요(우리 반 연습값).', toolOptions: { title: '압박 연습(우리 반 연습값)', plan: { work: 10, rest: 10, rounds: 1 }, workStep: 10, restStep: 10 }, target: { plan: { work: 30, rest: 30, rounds: 2 } }, difficulty: 0.2,
              levels: {
                easy: { prompt: '압박 20초를 1번 하도록 맞춰요(우리 반 연습값).', target: { plan: { work: 20, rounds: 1 } } },
                challenge: { prompt: '짝과 번갈아 압박 30초·교대 준비 10초를 4번 맞춰요(연습값).', target: { plan: { work: 30, rest: 10, rounds: 4 } } },
              },
              conclude: '연습값은 공식 지침이 아니에요. 실제로는 구급대가 올 때까지 교대하며 멈추지 않아요.' },
            { prompt: '짝과 "실제로는 왜 쉬지 않고 교대할까?"를 이야기해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '쓰러진 사람을 보면 먼저 주변이 ___ 보고, 어깨를 두드려 반응을 확인해요.', answer: '안전한지' }] },
        notes: '압박 깊이·빠르기는 공식 지침(성인 깊이 약 5cm, 분당 100~120회)으로 말로 안내하고, 타이머 칸에는 숫자로 넣지 않는다. 교대 주기는 최신 공식 지침으로 교사가 확인해 안내한다.',
      }),
      X('activity.aed-order', {
        title: 'AED 사용 차례 카드', method: 'AED 사용 순서 4장', tool: 'kitchen', minutes: 14,
        levels: { easy: 'AED 차례 카드 3장(전원·패드·분석 중 떨어지기)을 놓는다.', base: 'AED 차례 카드 4장을 놓고 충격 뒤 할 일 차례도 놓는다.', challenge: 'AED 카드 4장 사이의 틀린 카드를 빼고 놓은 뒤, 단계마다 외칠 말 카드를 세 칸에 잇는다.' },
        activity: {
          title: 'AED 차례 놓고 외칠 말 잇기', tool: 'kitchen',
          teacher: '"AED가 오면 무엇부터 할까요? 상자를 열고 전원을 켜면 기계가 말로 알려 줘요." 카드를 놓은 뒤 반 전체가 차례를 손동작으로 따라 하게 한다. "AED가 사람을 다치게 할 수 있어요"라는 학생에게 "AED는 스스로 심장 리듬을 분석해서 필요할 때만 충격 버튼을 켜요. 안내를 따르고 분석·충격 때만 떨어지면 돼요"라고 말해 준다. 충격 뒤에는 바로 압박을 다시 한다는 점을 짚는다.',
          task: 'AED를 쓰는 차례 카드를 놓고, 단계마다 외칠 말을 이어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORDER('AED가 도착했어요. 쓰는 차례대로 카드를 놓아요.', ['AED 전원 켜기', '패드 두 장 붙이기', '분석 중 모두 떨어지기', '안내에 따라 버튼 누르기'], { mode: 'order', easy: [0, 1, 2], trap: '분석 중 계속 누르기' }, 0.25),
            ORDER('충격 버튼을 누른 뒤 할 일을 차례대로 놓아요.', ['버튼 누를 때 모두 떨어지기', '바로 가슴 압박 다시', '구급대가 올 때까지 이어 가기'], { mode: 'order', easy: [0, 1] }, 0.2),
            { prompt: 'AED 단계마다 외칠 말 카드를 이어요.', toolOptions: { mode: 'match', slots: [{ id: 'm1', label: '전원을 켤 때' }, { id: 'm2', label: '분석할 때' }, { id: 'm3', label: '버튼 누르기 전' }], cards: ['"AED 켤게요!"', '"모두 떨어지세요!"', '"충격합니다, 떨어지세요!"', '"계속 누르세요!"'] }, target: { match: { m1: '"AED 켤게요!"', m2: '"모두 떨어지세요!"', m3: '"충격합니다, 떨어지세요!"' } }, difficulty: 0.3,
              levels: {
                easy: { prompt: 'AED 분석할 때 외칠 말 카드를 이어요.', toolOptions: { slots: [{ id: 'm2', label: '분석할 때' }], cards: ['"모두 떨어지세요!"', '"계속 누르세요!"'] }, target: { match: { m2: '"모두 떨어지세요!"' } } },
              },
              conclude: '분석할 때와 충격할 때는 모두 몸에서 떨어지도록 크게 외쳐요.' },
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: 'AED가 분석하는 동안 어떻게 해요?', options: ['계속 가슴을 누른다', '모두 몸에서 떨어진다', '패드를 다시 붙인다'], answer: '모두 몸에서 떨어진다' }] },
        notes: '패드 자리는 패드에 그려진 그림대로 붙인다고만 안내한다. 학교 AED 위치를 미리 알려 주면 좋다.',
      }),
      X('activity.bystander', {
        title: '구경꾼 갈림길: 역할 정하기', method: '구경꾼 갈림길: 역할을 정해 주기', tool: 'dilemma', minutes: 14,
        levels: { easy: '갈림 1번(지켜볼지 콕 집어 부탁할지)에서 고르고 근거 한 장을 고른다.', base: '갈림 2번(AED 부탁)을 지나 근거를 고른다.', challenge: '갈림 3번(교대 준비)까지 지나 알맞은 근거를 모두 고르고, 다른 길의 결과와 견준다.' },
        activity: {
          title: '갈림길: 모두 쳐다보기만 해요', tool: 'dilemma',
          teacher: '"사람이 많으면 누군가 신고했겠지, 하고 생각하기 쉬워요. 그러면 어떻게 될까요?" 고를 때마다 결과 칸을 소리 내어 읽게 한다. "어린이는 할 수 있는 게 없어요"라는 학생에게 "\'파란 옷 입은 분, 119에 신고해 주세요\'처럼 사람을 콕 집어 부탁하는 것은 누구나 할 수 있어요"라고 말해 준다. 압박을 멈추면 피가 돌지 않아 교대를 미리 준비한다는 점을 짚는다.',
          task: '사람들이 쳐다보기만 하는 장면에서 갈림길마다 고르고, 내 선택의 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: DIL({
            title: '모두 쳐다보기만 해요',
            steps: [
              { text: '광장에서 어른이 쓰러졌는데 사람들이 모여 쳐다보기만 해요.', motif: 'star',
                good: ['point', '"파란 옷 입은 분, 119에 신고해 주세요!"', '부탁받은 분이 바로 신고해요.', [['쓰러진 사람', '도움이 빨리 와요', 1]]],
                bad: ['watch', '누군가 신고했겠지 하고 지켜본다', '아무도 신고하지 않은 채 시간이 흘러요.', '모두 그렇게 생각하면 아무도 신고하지 않아요.', [['쓰러진 사람', '도움이 늦어요', -1]]] },
              { text: '신고는 됐어요. 그런데 AED가 아직 없어요.', motif: 'house',
                good: ['aed', '다른 사람을 콕 집어 AED를 부탁한다', '역 안내소에서 AED를 가져와요.', [['쓰러진 사람', 'AED를 빨리 써요', 1]]],
                bad: ['wait', '119가 올 때까지 기다린다', 'AED 없이 시간이 지나요.', '기다리는 동안에도 AED와 압박이 필요해요.', [['쓰러진 사람', '도움이 늦어요', -1]]] },
              { text: '배운 어른이 가슴 압박을 하는데 점점 지쳐 보여요.', motif: 'sun',
                good: ['swap', '교대할 사람을 콕 집어 옆에 준비시킨다', '"하나, 둘, 셋, 교대" 하고 빨리 바꿔요.', [['쓰러진 사람', '압박이 끊기지 않아요', 1]]],
                bad: ['stop', '잠깐 멈추고 쉬자고 한다', '압박이 멈춘 동안 피가 돌지 않아요.', '교대는 미리 준비해서 멈추지 않게 해요.', [['쓰러진 사람', '압박이 끊겨요', -1]]] },
            ],
            ending: '역할을 나눈 덕분에 구급대가 올 때까지 사슬이 이어졌어요.',
            reasons: [{ id: 'point', text: '사람을 콕 집어 부탁하면 바로 움직인다' }, { id: 'chain', text: '압박을 멈추지 않아야 사슬이 이어진다' }, { id: 'someone', text: '누군가 이미 신고했을 것이다', why: '모두 그렇게 생각하면 아무도 신고하지 않아요.' }, { id: 'wait', text: '119가 올 때까지 기다리면 된다', why: '구급대가 오는 동안 옆 사람이 도와야 해요.' }],
            good: ['point', 'chain'],
            talk: '모둠에서 "사람을 콕 집어 부탁하는 말"을 한 문장씩 만들어 말해요.',
            conclude: '쳐다보기만 하지 말고 사람을 콕 집어 119와 AED를 부탁해요.',
          }),
        },
        worksheet: { items: [{ type: 'short', prompt: '쓰러진 사람을 보았을 때 옆 사람에게 콕 집어 할 부탁 말을 써요.' }] },
      }),
      X('activity.do-dont', {
        title: 'AED 해도 되는 일·안 되는 일', method: 'AED 할 때 해도 되는 일·안 되는 일', tool: 'sortboard', minutes: 14,
        levels: { easy: '카드 4장을 두 바구니에 나누고, 틀린 바구니에 넣으면 까닭을 듣고 되돌아온다.', base: '카드 6장을 두 바구니에 나눈다.', challenge: '카드 8장을 나누고, 안 되는 일의 까닭을 모둠 말하기 문항에서 말한다.' },
        activity: {
          title: '해도 되는 일·안 되는 일 바구니', tool: 'sortboard',
          teacher: '"패드를 붙이고 계속 만지고 있으면 어떻게 될까요?" 카드를 넣을 때마다 까닭을 한 문장으로 말하게 한다. "AED가 무서우니 상자째 두는 게 안전해요"라는 학생에게 "AED는 안내 음성을 따라 하면 되고, 필요할 때만 충격 버튼이 켜져요"라고 말해 준다. 분석 중에 누르거나 만지면 기계가 리듬을 바르게 읽지 못한다는 점을 짚는다.',
          task: 'AED와 심폐소생술 카드를 해도 되는 일과 안 되는 일 바구니에 나누어요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORTX('AED를 쓸 때 카드를 두 바구니에 나누어요.', { slots: ['해도 되는 일', '안 되는 일'],
              groups: { '해도 되는 일': ['분석할 때 몸에서 떨어지기', '안내 음성대로 따라 하기', '패드를 그림 자리에 붙이기'], '안 되는 일': ['패드 붙이고 계속 만지기', '분석 중 가슴 누르기', '버튼을 아무 때나 누르기'] },
              extra: { '해도 되는 일': ['충격 뒤 바로 압박 다시'], '안 되는 일': ['무서워서 상자째 두기'] } }, 0.25),
            SORTX('심폐소생술을 할 때 카드를 두 바구니에 나누어요.', { slots: ['해도 되는 일', '안 되는 일'],
              groups: { '해도 되는 일': ['어깨 두드려 반응 확인', '가슴 정중앙에 두 손 겹치기', '지치기 전에 교대하기'], '안 되는 일': ['119 올 때까지 지켜보기만', '교대하며 오래 멈추기', '친구 몸으로 압박 연습'] },
              extra: { '해도 되는 일': ['사람 콕 집어 신고 부탁'], '안 되는 일': ['누군가 했겠지 하고 가기'] } }, 0.3, { conclude: '안내를 따르고, 분석·충격 때는 떨어지고, 압박은 멈추지 않아요.' }),
            { prompt: '모둠에서 \'안 되는 일\' 카드 하나를 골라 왜 안 되는지 까닭을 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '해도 되는 일이면 ○, 안 되는 일이면 ×를 써요.', columns: ['행동', '○ / ×'], cells: [['분석할 때 몸에서 떨어지기', ''], ['패드 붙이고 계속 만지기', ''], ['충격 뒤 바로 압박 다시', '']], answer: '○, ×, ○' }] },
      }),
      X('wrap.my-help', {
        title: '내가 할 수 있는 도움 쓰기', method: '내가 할 수 있는 도움 세 문장 쓰기', tool: 'rubric-writing', minutes: 8,
        levels: { easy: '문장 틀을 쓰고 2문장, 기준 2개(순서·까닭)로 점검한다.', base: '3문장을 쓰고 기준 3개(순서·까닭·실천 가능)로 점검한다.', challenge: '3문장을 쓰고 기준 3개에 더해 친구 글 하나를 기준표로 점검했는지 표시한다.' },
        wrap: {
          teacher: '"심정지 상황에서 내가 할 수 있는 일을 차례대로 세 문장으로 써 볼까요?" 기준표를 함께 읽고 쓴 뒤 스스로 점검하게 한다. "나는 어려서 아무것도 못 해요"라고 쓰려는 학생에게 "콕 집어 부탁하기, AED 가져오기, 어른과 교대 준비하기는 어떨까요?"라고 묻는다. 도전 학생은 짝 글의 순서가 맞는지 기준표로 봐 준다.',
          exitTicket: [
            RUBX('"심정지 상황에서 나는 …"으로 내가 할 수 있는 도움을 써요.', { topic: '심정지 상황에서 내가 할 수 있는 도움(차례와 까닭)', title: '내가 할 수 있는 도움', starter: '심정지 상황에서 나는 먼저 ~. 그다음 ~. 왜냐하면 ~', crit: ['순서가 맞다', '까닭을 썼다', '내가 실천할 수 있다', '친구 글 하나를 기준표로 점검했다'], must: [['119', 'AED', '압박']], chars: [40, 240], sent: [[2, 3], [3, 4]] }),
            { type: 'choice', prompt: '쓰러진 사람을 보았을 때 가장 먼저 할 일은 무엇인가요?', options: ['바로 가슴을 누른다', '주변이 안전한지 본다', '사진을 찍는다'], answer: 1, difficulty: 0.2, explain: '먼저 주변이 안전한지 보고, 어깨를 두드려 반응을 확인해요.' },
            { type: 'mood', prompt: '오늘 공부를 마친 내 마음은 어떤가요?' },
          ],
        },
        worksheet: {
          title: '나도 도울 수 있어요',
          items: [
            { type: 'short', prompt: '심정지 상황에서 내가 할 수 있는 도움 한 가지를 까닭과 함께 써요.' },
            { type: 'check', prompt: '내 글을 점검해요.', options: ['순서가 맞나요', '까닭이 있나요', '실천할 수 있나요'] },
          ],
          easy: { note: '안전 확인 → 반응 확인 → 부탁 → 압박 차례를 떠올려요.', items: [{ type: 'draw', prompt: '사람을 콕 집어 119를 부탁하는 내 모습을 그려요.' }] },
        },
      }),
      X('wrap.chain-sum', {
        title: '생명을 살리는 사슬 정리', method: '생명을 살리는 사슬 정리', tool: 'mindmap', minutes: 8,
        levels: { easy: '가지 2개(신고·가슴 압박)에 행동 카드 4장을 넣는다.', base: '가지 4개(신고·가슴 압박·AED·전문 치료)에 행동 카드 8장을 넣는다.', challenge: '가지 4개에 카드 10장과 함정 카드를 나누고, 사슬 한 고리가 끊기면 생기는 일을 말로 덧붙인다.' },
        wrap: {
          teacher: '"오늘 배운 행동을 사슬 고리마다 넣어 볼까요?" 가지에 카드를 넣은 뒤 고리 하나를 빼면 어떻게 되는지 말하게 한다. "구급대만 오면 앞 고리는 없어도 돼요"라는 학생에게 "구급대가 오기 전까지 신고·압박·AED가 없으면 사슬이 이어질까요?"라고 되묻는다.',
          exitTicket: [
            EX('mindmap', SORTX('생명을 살리는 사슬 가지에 행동 카드를 넣어요.', { topic: '생명을 살리는 사슬', slots: ['신고', '가슴 압박', 'AED', '전문 치료'], easySlots: ['신고', '가슴 압박'],
              groups: { 신고: ['119에 신고하기', '사람 콕 집어 부탁'], '가슴 압박': ['가슴 정중앙 누르기', '지치기 전 교대'], AED: ['전원 켜고 패드 붙이기', '분석 중 떨어지기'], '전문 치료': ['구급대에 이어 주기', '병원에서 치료받기'] },
              extra: { 신고: ['119 안내 따라 하기'], AED: ['충격 뒤 바로 압박'] }, traps: ['쳐다보기만 하기'] }, 0.2)),
            { type: 'choice', prompt: '사슬이 끊기지 않으려면 어떻게 해야 하나요?', options: ['구급대가 올 때까지 기다린다', '신고·압박·AED를 이어서 한다', '한 사람이 다 한다'], answer: 1, difficulty: 0.15, explain: '고리가 이어져야 구급대와 병원까지 도움이 닿아요.' },
            { type: 'short', prompt: '사슬 고리 하나가 빠지면 생기는 일을 한 문장으로 써요.' },
          ],
        },
        worksheet: {
          title: '생명을 살리는 사슬',
          items: [
            { type: 'table', prompt: '고리마다 할 일을 하나씩 써요.', columns: ['신고', '가슴 압박', 'AED', '전문 치료'], cells: [['', '', '', '']] },
            { type: 'short', prompt: '우리 학교 AED가 어디에 있는지 써요.' },
          ],
        },
      }),
    );
  }

  // ======== 6학년 · 기도막힘·삠·데임 등 일상 응급 (별표 2 초등 응급처치 4 + 표준안 기도폐쇄) ========
  {
    const X = mk('choking-daily', 6);
    M.push(
      X('intro.lunch-branch', {
        title: '급식 시간, 말을 못해요', method: '급식 시간: 친구가 목을 잡고 말을 못해요', tool: 'emotion', minutes: 5,
        levels: { easy: '교사가 보기 2개(물 마시게 하기·어른 부르기)를 읽어 주고 고르게 한다.', base: '보기 3개 가운데 골라 결과를 함께 읽는다.', challenge: '보기 3개 가운데 고른 뒤, 기도막힘 신호(목을 감싸 쥠·말이나 기침을 못 함)를 말하게 한다.' },
        intro: {
          teacher: '"급식 시간에 친구가 두 손으로 목을 감싸 쥐고 말을 못 해요. 어떻게 할까요?" 시연 단추로 \'어른을 크게 부른다\'를 고르고 결과가 나오는 모습을 보인다. "물을 마시게 하면 넘어가요"라는 말에는 "숨길이 막혀 있는데 물이 들어가면 어떻게 될까요? 물은 주지 않아요"라고 되묻는다. 오늘은 생활 속 응급 상황에서 처음 할 일과 하지 말 일을 가린다고 밝힌다.',
          student: '친구가 목을 감싸 쥐고 말을 못 할 때 내가 할 첫마디를 짝에게 말해 보아요.',
          demo: { tool: 'emotion', options: { mode: 'branch', situation: '급식 시간, 친구가 두 손으로 목을 감싸 쥐고 말을 못 해요.', ask: '어떻게 할까요?', motif: 'house', choices: [
            { id: 'water', text: '물을 마시게 한다', result: '숨길이 막혀 있으면 물이 더 힘들게 해요.', mood: '걱정' },
            { id: 'back', text: '혼자 등을 세게 친다', result: '혼자 판단하기보다 먼저 어른을 불러 함께 도와요.', mood: '놀람' },
            { id: 'help', text: '"기침해 봐!" 하고 어른을 크게 부른다', result: '선생님이 바로 달려와 도와요.', mood: '편안함' }] }, sequence: [{ choice: 'help' }] },
          art: art('a paper-cut school cafeteria with a paper child holding both hands at the throat and a friend waving and calling a teacher', '말을 못 해요, 어떻게 할까?', 'cloud', 'sky'),
        },
        notes: '등 두드리기·배 밀어내기의 차례와 횟수는 다루지 않는다. 배운 어른이 한다고 안내한다.',
      }),
      X('intro.sprain-parts', {
        title: '삐기 쉬운 곳 고르기', method: '삐기 쉬운 곳 고르기', tool: 'body', minutes: 5,
        levels: { easy: '교사가 두 곳(발목·손목)을 짚어 주고 함께 고른다.', base: '삐기 쉬운 세 곳(발목·손목·무릎)을 스스로 고른다.', challenge: '세 곳을 고르고 곳마다 삐기 쉬운 운동 상황을 말한다.' },
        intro: {
          teacher: '"뛰다가 발을 잘못 디디면 어디를 삐기 쉬울까요?" 시연 단추로 종이 몸의 발목 → 손목 → 무릎이 차례로 골라지는 모습을 보인다. "삔 곳은 주물러야 빨리 나아요"라는 말에는 "아픈 곳을 주무르면 더 붓지 않을까요? 오늘 활동에서 함께 알아봐요"라고 되묻는다.',
          student: '운동하다 삐기 쉬운 곳 한 군데를 내 몸에서 짚어 보고, 어떤 운동 때인지 말해 보아요.',
          demo: { tool: 'body', options: { mode: 'parts', parts: ['목', '어깨', '손목', '허리', '무릎', '발목'], names: true }, sequence: [{ parts: ['발목'] }, { parts: ['발목', '손목'] }, { parts: ['발목', '손목', '무릎'] }] },
          art: art('paper children playing basketball and jumping rope, with small paper stars marking ankles, wrists and knees', '어디를 삐기 쉬울까?', 'star', 'peach'),
        },
        notes: '종이 몸에는 손가락 칸이 없어 손가락은 손목 자리로 이야기한다.',
      }),
      X('activity.choke-order', {
        title: '기도막힘 도움 차례 연습', method: '기도막힘 도움 순서 연습', tool: 'timer', minutes: 14,
        levels: { easy: '도움 차례 카드 2장을 놓고, 연습 안전 점검과 역할극 시간 1번을 맞춘다.', base: '도움 차례 카드 3장을 놓고, 짝과 번갈아 역할극 2번을 맞춘다.', challenge: '카드 3장과 역할극 3번을 맞춘 뒤, 혼자 있을 때 도움을 부를 방법을 말하기 문항에서 덧붙인다.' },
        activity: {
          title: '도움 차례 카드와 역할극 타이머', tool: 'timer',
          teacher: '"친구가 목을 감싸 쥐면 무엇부터 할까요?" 카드를 놓은 뒤 짝과 역할극을 한다. 한 사람은 목을 감싸 쥐는 신호만 몸짓으로 보이고, 다른 사람은 "기침해 봐!", "선생님!" 하고 부른다. "배를 세게 밀어 줘야 해요"라는 학생에게 "그것은 배운 어른이 하는 방법이에요. 우리는 친구에게 실제로 누르지 않고, 크게 불러 어른이 오게 해요"라고 말해 준다. 시간은 우리 반 연습값이라고 밝힌다.',
          task: '기도막힘 도움 차례 카드를 놓고, 안전을 점검한 뒤 역할극 시간을 맞춰요.', levels: { easy: {}, base: {}, challenge: { showTotal: true } },
          items: [
            { prompt: '친구가 목을 감싸 쥐고 말을 못 해요. 도움 카드를 차례대로 놓아요.', toolOptions: { title: '기도막힘 도움 차례', cards: mix(['목 감싼 신호 알아차리기', '"기침해 봐!" 하고 묻기', '어른 크게 부르고 119']) }, target: { order: ['목 감싼 신호 알아차리기', '"기침해 봐!" 하고 묻기', '어른 크게 부르고 119'] }, difficulty: 0.25,
              levels: { easy: { prompt: '친구가 목을 감싸 쥐었어요. 도움 카드를 차례대로 놓아요(2장).', toolOptions: { cards: ['어른 크게 부르고 119', '"기침해 봐!" 하고 묻기'] }, target: { order: ['"기침해 봐!" 하고 묻기', '어른 크게 부르고 119'] } } } },
            { prompt: '역할극 전에 안전 점검 칸을 모두 확인해요.', toolOptions: { title: '역할극 안전 점검', safety: ['인형이나 몸짓으로만 해요', '친구 배·등을 실제로 누르지 않아요', '"그만" 하면 바로 멈춰요'] }, target: { safety: true }, difficulty: 0.1 },
            { prompt: '짝과 1분씩 번갈아 역할극을 2번 하도록 맞춰요(우리 반 연습값).', toolOptions: { title: '역할극 시간(우리 반 연습값)', plan: { work: 30, rest: 0, rounds: 1 }, workStep: 10 }, target: { plan: { work: 60, rounds: 2 } }, difficulty: 0.2,
              levels: { easy: { prompt: '역할극 1분을 1번 하도록 맞춰요(우리 반 연습값).', target: { plan: { work: 60, rounds: 1 } } }, challenge: { prompt: '모둠에서 1분씩 번갈아 3번 하도록 맞춰요(우리 반 연습값).', target: { plan: { work: 60, rounds: 3 } } } },
              conclude: '기침할 수 있으면 기침하게 두고, 말을 못 하면 바로 어른을 크게 불러요.' },
            { prompt: '짝과 "혼자 있을 때 목에 걸리면 어떻게 도움을 부를까?"를 이야기해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '목에 음식이 걸린 친구에게 하지 말 일은?', options: ['어른을 크게 부른다', '물을 마시게 한다', '"기침해 봐" 하고 묻는다'], answer: '물을 마시게 한다' }] },
        notes: '배 밀어내기(하임리히법)는 학생끼리 실제로 하지 않는다. 혼자일 때 할 일은 최신 공식 안내를 확인한 뒤 교사가 알려 준다.',
      }),
      X('activity.case-link', {
        title: '상황과 처음 할 일 잇기', method: '상황과 처치 잇기', tool: 'mindmap', minutes: 14,
        levels: { easy: '가지 2개(데임·삠)에 처음 할 일 카드를 넣고 하지 말 일은 카드 칸에 남긴다.', base: '가지 4개(데임·삠·코피·벌 쏘임)에 처음 할 일 카드를 넣는다.', challenge: '가지 4개에 함정 카드가 더 섞인 판을 나누고, 근거 잇기 문항에서 가지마다 근거 카드를 하나씩 잇는다.' },
        activity: {
          title: '상황 가지에 처음 할 일 넣기', tool: 'mindmap',
          teacher: '"데인 곳에 얼음을 바로 대면 어떨까요?" 카드를 넣을 때마다 왜 처음 할 일인지 말하게 한다. "삔 곳은 주물러야 나아요"라는 학생에게 "아픈 곳을 움직이고 주무르면 더 부을 수 있어요. 움직이지 않게 받치고 어른께 알려요"라고 말해 준다. 하지 말 일 카드는 가지에 넣지 않고 카드 칸에 남긴다는 규칙을 먼저 알려 준다.',
          task: '상황 가지마다 처음 할 일 카드만 넣고, 하지 말 일 카드는 카드 칸에 남겨요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORTX('상황 가지에 처음 할 일만 넣어요. 하지 말 일은 남겨요.', { topic: '처음 할 일', slots: ['데임', '삠', '코피', '벌 쏘임'], easySlots: ['데임', '삠'], easy: 1,
              groups: { 데임: ['흐르는 시원한 물로 식히기'], 삠: ['움직이지 않게 받치기'], 코피: ['고개 앞으로 숙이고 콧방울 누르기'], '벌 쏘임': ['그 자리 벗어나 어른께 알리기'] },
              extra: { 데임: ['물집 터뜨리지 않고 두기'], 삠: ['수건에 싼 얼음으로 식히기'] }, traps: ['데인 곳에 얼음 바로 대기', '삔 곳 주무르기'] }, 0.3),
            { prompt: '상황 가지마다 그렇게 하는 근거 카드를 하나씩 이어요.', toolOptions: { topic: '왜 그렇게 할까?', mode: 'match', slots: ['데임', '삠', '코피'], cards: ['열을 빨리 식혀야 해서', '움직이면 더 다칠 수 있어서', '피가 목으로 넘어가지 않게', '빨리 낫는 주문이라서'] }, target: { match: { 데임: '열을 빨리 식혀야 해서', 삠: '움직이면 더 다칠 수 있어서', 코피: '피가 목으로 넘어가지 않게' } }, difficulty: 0.3,
              hints: ['처음 할 일 카드를 떠올리고, 그 일이 무엇을 막는지 생각해요.'],
              levels: { easy: { prompt: '두 상황 가지에 근거 카드를 하나씩 이어요.', toolOptions: { slots: ['데임', '삠'], cards: ['열을 빨리 식혀야 해서', '움직이면 더 다칠 수 있어서', '빨리 낫는 주문이라서'] }, target: { match: { 데임: '열을 빨리 식혀야 해서', 삠: '움직이면 더 다칠 수 있어서' } } } },
              conclude: '처음 할 일을 하고, 하지 말 일은 피하고, 어른께 꼭 알려요.' },
            { prompt: '모둠에서 하지 말 일 카드 하나를 골라 왜 하면 안 되는지 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '상황마다 처음 할 일과 하지 말 일을 써요.', columns: ['상황', '처음 할 일', '하지 말 일'], cells: [['데임', '', ''], ['삠', '', '']] }] },
        notes: '코피는 낱말로만 다루고 그림이나 자세한 모습은 보이지 않는다. 숨쉬기 힘들거나 얼굴이 부으면 바로 119에 알린다고 덧붙인다.',
      }),
      X('activity.camp-dilemma', {
        title: '체험학습 산길, 발목을 삐었어요', method: '체험학습 갈림길: 발목을 삐었어요', tool: 'dilemma', minutes: 14,
        levels: { easy: '갈림 1번(계속 걸을지 멈출지)에서 고르고 근거 한 장을 고른다.', base: '갈림 2번(주물러 달라는 친구)을 지나 근거를 고른다.', challenge: '갈림 3번(선생님을 기다리는 동안)까지 지나 알맞은 근거를 모두 고르고, 다른 길과 견준다.' },
        activity: {
          title: '갈림길: 산길에서 삔 발목', tool: 'dilemma',
          teacher: '"일정이 늦어질까 봐 그냥 걸으면 발목은 어떻게 될까요?" 고를 때마다 결과 칸을 소리 내어 읽게 한다. "주물러 주면 금방 나아요"라는 학생에게 "삔 곳을 주무르면 더 부을 수 있어요. 움직이지 않게 받치고 기다려요"라고 말해 준다. 얼음은 맨살에 바로 대지 않고 수건에 싸서 댄다는 점, 무엇보다 선생님께 바로 알린다는 점을 짚는다.',
          task: '체험학습 산길에서 친구가 발목을 삔 상황의 갈림길마다 고르고, 내 선택의 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: DIL({
            title: '산길에서 삔 발목',
            steps: [
              { text: '체험학습 산길에서 친구 하랑이가 발목을 접질려 아프대요. 일행이 앞서가요.', motif: 'tree',
                good: ['stop', '멈춰서 앉히고 선생님께 알린다', '선생님이 곧 오신대요.', [['하랑', '더 다치지 않아요', 1]]],
                bad: ['walk', '늦으면 안 되니 참고 걷자고 한다', '걸을수록 발목이 더 아파요.', '아픈 발목으로 계속 걸으면 더 다칠 수 있어요.', [['하랑', '더 아파요', -1]]] },
              { text: '하랑이가 "발목 좀 주물러 줘"라고 해요.', motif: 'leaf',
                good: ['hold', '주무르지 않고 움직이지 않게 받친다', '발목이 덜 움직여 조금 편해 보여요.', [['하랑', '붓기를 줄여요', 1]]],
                bad: ['rub', '세게 주물러 준다', '발목이 더 붓는 것 같아요.', '삔 곳은 주무르지 않아요.', [['하랑', '더 부어요', -1]]] },
              { text: '선생님이 오시는 동안 차가운 물병이 있어요.', motif: 'sun',
                good: ['wrap', '수건에 싸서 발목에 대 준다', '시원해서 조금 덜 아프대요.', [['하랑', '편해져요', 1]]],
                bad: ['bare', '차가운 것을 맨살에 오래 댄다', '살갗이 너무 차가워 따가워요.', '차가운 것은 수건에 싸서 대요.', [['하랑', '살갗이 따가워요', -1]]] },
            ],
            ending: '멈추고 알리고 받쳐 준 덕분에 하랑이가 안전하게 내려왔어요.',
            reasons: [{ id: 'still', text: '삔 곳은 움직이지 않게 해야 한다' }, { id: 'tell', text: '다치면 바로 어른께 알린다' }, { id: 'rub', text: '주무르면 빨리 낫는다', why: '삔 곳을 주무르면 더 부을 수 있어요.' }, { id: 'late', text: '일정에 늦지 않는 것이 먼저다', why: '몸이 일정보다 먼저예요.' }],
            good: ['still', 'tell'],
            talk: '모둠에서 "체험학습 때 다치면 누구에게 어떻게 알릴까?"를 정해 말해요.',
            conclude: '삔 곳은 움직이지 않게 받치고, 주무르지 말고, 바로 어른께 알려요.',
          }),
        },
        worksheet: { items: [{ type: 'choice', prompt: '발목을 삔 친구에게 알맞은 도움은?', options: ['세게 주물러 준다', '움직이지 않게 받치고 알린다', '참고 걷게 한다'], answer: '움직이지 않게 받치고 알린다' }] },
        notes: '하랑은 지어낸 인물이다. 다친 모습은 "아프다"까지만 다룬다.',
      }),
      X('activity.home-kit', {
        title: '가정 구급함 점검표', method: '가정 구급함 점검표 만들기', tool: 'kitchen', minutes: 14,
        levels: { easy: '구급함 물품 4칸(함정 1칸 섞임)에서 둘 것을 고른다.', base: '구급함 물품 6칸(함정 2칸 섞임)에서 고르고 점검할 것을 표시한다.', challenge: '함정이 더 섞인 6칸 점검표에서 고르고, 빠진 물품을 채울 계획을 모둠에서 말한다.' },
        activity: {
          title: '구급함에 둘 것과 점검할 것', tool: 'kitchen',
          teacher: '"구급함에는 무엇을 넣어 둘까요? 사탕이나 장난감은 어떨까요?" 점검표를 소리 내어 읽고 고르게 한다. "한 번 채워 두면 계속 쓸 수 있어요"라는 학생에게 "밴드 포장에도 사용 기한 날짜가 있어요. 가끔 날짜와 포장을 확인해야 해요"라고 말해 준다. 약은 오늘 목록에 넣지 않고, 약은 보호자가 관리한다는 점을 짚는다.',
          task: '가정 구급함에 둘 물품을 고르고, 점검할 때 볼 것을 표시해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            CHK('가정 구급함에 둘 물품만 표시해요.', '우리 집 구급함', ['일회용 밴드', '소독한 거즈', '붕대', '작은 가위', '체온계', '일회용 장갑'], ['사탕', '장난감', '오래된 영수증'], { easy: 4, base: 6 }, 0.2),
            CHK('구급함을 점검할 때 볼 것만 표시해요.', '구급함 점검할 것', ['사용 기한 날짜', '포장이 뜯기지 않았는지', '가족 모두가 자리를 아는지', '다 쓴 물품이 있는지'], ['상자 색깔', '상자 크기', '산 가게 이름'], { easy: 3, base: 4 }, 0.25, { conclude: '구급함은 채워 두고, 날짜와 포장을 가끔 확인해요.' }),
            { prompt: '모둠에서 빠진 물품을 어떻게 채울지 계획을 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '우리 집 구급함을 점검해 써요.', columns: ['물품', '있음·없음', '날짜 확인'], cells: [['일회용 밴드', '', ''], ['거즈', '', ''], ['붕대', '', '']] }] },
        notes: '약은 목록에 넣지 않는다. 집에서는 보호자와 함께 점검하게 한다.',
      }),
      X('wrap.myth-sort', {
        title: '응급처치 오해와 바른 방법', method: '응급처치 오해·바른 방법 나누기', tool: 'sortboard', minutes: 8,
        levels: { easy: '카드 4장을 오해·바른 방법 바구니에 나눈다.', base: '카드 6장을 나눈다.', challenge: '카드 8장을 나누고, 오해 하나를 바르게 고쳐 쓴다.' },
        wrap: {
          teacher: '"오늘 배운 것 가운데 사람들이 흔히 잘못 아는 것은 무엇이었나요?" 바구니에 나눈 뒤 오해 카드 하나를 골라 바른 방법으로 고쳐 말하게 한다. "코피가 나면 고개를 뒤로 젖혀요"를 바른 방법에 넣는 학생에게 "고개를 젖히면 피가 목으로 넘어갈 수 있어요. 앞으로 살짝 숙여요"라고 말해 준다.',
          exitTicket: [
            EX('sortboard', SORTX('응급처치 카드를 오해와 바른 방법 바구니에 나누어요.', { slots: ['오해', '바른 방법'],
              groups: { 오해: ['삔 곳 주무르기', '데인 곳에 얼음 바로 대기', '목에 걸리면 물 마시기'], '바른 방법': ['데인 곳 흐르는 물로 식히기', '삔 곳 움직이지 않게 하기', '목에 걸리면 어른 크게 부르기'] },
              extra: { 오해: ['코피 날 때 고개 뒤로 젖히기'], '바른 방법': ['코피 날 때 고개 앞으로 숙이기'] } }, 0.2)),
            { type: 'choice', prompt: '데인 곳에 처음 할 일로 알맞은 것은 무엇인가요?', options: ['얼음을 바로 댄다', '흐르는 시원한 물로 식힌다', '물집을 터뜨린다'], answer: 1, difficulty: 0.15, explain: '흐르는 시원한 물로 식히고 어른께 알려요.' },
            { type: 'short', prompt: '오해 카드 하나를 골라 바른 방법으로 고쳐 써요.' },
          ],
        },
        worksheet: {
          title: '오해를 바로잡아요',
          items: [
            { type: 'table', prompt: '오해를 바른 방법으로 고쳐 써요.', columns: ['오해', '바른 방법'], cells: [['삔 곳 주무르기', ''], ['목에 걸리면 물 마시기', '']] },
            { type: 'short', prompt: '가족에게 알려 주고 싶은 바른 방법 하나를 써요.' },
          ],
        },
      }),
      X('wrap.family-guide', {
        title: '가족에게 보낼 안내문', method: '가족에게 알려 줄 안내문 쓰기', tool: 'rubric-writing', minutes: 8,
        levels: { easy: '문장 틀을 쓰고 3문장, 기준 2개(정확한가·순서)로 점검한다.', base: '4문장을 쓰고 기준 3개(정확한가·순서·하지 말 일)로 점검한다.', challenge: '4문장을 쓰고 기준 3개에 더해 그림으로 나타낼 장면을 한 문장 넣었는지 점검한다.' },
        wrap: {
          teacher: '"오늘 배운 응급 상황 하나를 골라 가족에게 알려 줄 안내문을 써 볼까요?" 기준표를 함께 읽고 쓴 뒤 스스로 점검하게 한다. "조심하세요"로만 쓴 학생에게 "무엇을 먼저 하고, 무엇은 하지 말아야 하나요?"라고 물어 차례와 하지 말 일을 넣게 한다. 가족 이름이나 연락처는 쓰지 않는다.',
          exitTicket: [
            RUBX('가족에게 알려 줄 응급처치 안내문을 써요.', { topic: '가족에게 알려 줄 응급처치 안내문(데임·삠·기도막힘 가운데 하나)', title: '우리 집 응급처치 안내', starter: '~할 때는 먼저 ~. 그다음 ~. ~은 하지 마세요.', crit: ['방법이 정확하다', '순서대로 썼다', '하지 말 일을 썼다', '그림으로 나타낼 장면을 한 문장 썼다'], must: [['하지 마', '하지 않']], chars: [50, 300], sent: [[3, 4], [4, 5]] }),
            { type: 'choice', prompt: '안내문에 꼭 넣으면 좋은 것은 무엇인가요?', options: ['내 이름과 전화번호', '하지 말 일', '좋아하는 음식'], answer: 1, difficulty: 0.15, explain: '하지 말 일을 함께 써야 잘못된 처치를 막을 수 있어요.' },
            { type: 'mood', prompt: '오늘 공부를 마친 내 마음은 어떤가요?' },
          ],
        },
        worksheet: {
          title: '우리 집 응급처치 안내',
          items: [
            { type: 'table', prompt: '안내문의 뼈대를 써요.', columns: ['상황', '먼저 할 일', '하지 말 일'], cells: [['', '', '']] },
            { type: 'check', prompt: '내 안내문을 점검해요.', options: ['정확한가요', '순서대로인가요', '하지 말 일이 있나요'] },
          ],
          easy: { note: '상황 → 먼저 할 일 → 하지 말 일 차례로 써요.', items: [{ type: 'draw', prompt: '데인 곳을 흐르는 물로 식히는 모습을 그려요.' }] },
        },
      }),
    );
  }

  PaperLessons.registerModules(M);
})();
