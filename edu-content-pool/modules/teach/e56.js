/* 창체 교육활동 존중(침해 예방) — 초5-6 모듈 내용(edu-module.v1). 형식·작성 규칙: MODULES_BUILD.md, 계획: framework/mandatory.json 의 teach 초5-6.
 * 근거: 교원지위법 제24조·시행령 제21조 — 교육활동 침해행위 예방교육 초·중·고 연 1회 이상, 학생 활동 중심 예방교육
 *       (research-mandatory §1), §2 디지털 시민 초: 예절, 노동인권·인권(해당 시도): 학생 권리와 책임 — sources/changche/research-mandatory.md.
 *       법 이름·조항 번호는 이 주석에만 쓰고 학생이 보는 글에는 쓰지 않는다.
 * 초5-6 기준: 사례의 원인과 결과, 자기 점검표, 작은 실천 계획, 간단한 자료(그래프) 읽기, 모둠 토의, 갈림길(dilemma)·기준표 글쓰기(rubric-writing).
 *   그래프 수치는 모두 가상(화면에 '가상'). 장면·인물은 지어낸 것이다(가명: 지호·도·결·봄·강·솔빛 — 솔빛은 쓰지 않음, 한두 글자만).
 * 이 영역의 처신(모든 모듈):
 *   - 교육활동 침해(수업 방해·욕설·몰래 촬영·녹음·무단 게시·비방 글)는 가상 장면으로만 쓴다. 특정 교사·학생을 탓하지 않고 '그 행동'을 짚는다.
 *   - 학생에게 겪은 일·본 일을 묻지 않는다. 말하기 문항은 가상 인물이나 '우리 반 약속'에 대해 말하게 한다.
 *   - 속상한 마음 자체는 잘못이 아니라는 틀을 지키고, 그 마음을 전하는 '방법'을 바꾸게 한다(의견을 말하는 것은 학생의 권리).
 *   - 실제 앱·서비스 이름 없이 '단체방·게시판·영상'으로만 쓴다.
 * 주제 3개(5학년 1 · 6학년 1 · 5-6학년 공통 1) × 도입 2 · 활동 4 · 정리 2 = 계획 모듈 24개 전부. 추천 조합은 체계도 sequences(학년마다 1차시).
 *
 * 계획과 다르게 한 곳(교구 한계 — levels 글은 실제 설정대로 적었다):
 *  - 갈림길(project-choice·video-choice): 계획의 '쉬움 갈림 2번·기본 3번'을 갈림길 공통 틀(쉬움 1번·기본 2번·도전 3번)로 맞췄다.
 *    도전의 '친구를 설득할 말'·'이미 퍼진 뒤 할 행동'은 둘째·셋째 갈림 장면으로 넣었다.
 *  - think-route: 계획의 도전 '조건 블록으로 짧게'는 판이 짧아 조건 블록이 더 짧아지지 않아, 가장 적은 블록 수(8개) 안에서 도착하기로 바꿨다.
 *    거북이 판에는 칸 이름이 없어 별·집·바위 칸의 뜻은 칠판과 활동지에 적어 준다(교사 메모).
 *  - priority-budget: economy 교구는 돈(원)만 센다. '노력 점수 1점 = 100원'으로 두고 예산 1000원(=10점), 쉬움 600원(=6점)으로 했다(화면 글에 밝힘).
 *  - collage(digital-campaign·charter-board): 조각에 글자를 붙이지 못해 구호·헌장 문장은 활동지에 쓰고 판에는 자리만 남긴 뒤 점검 칸에 표시한다.
 *  - month-check: timer 기록판 칸에 헌장 문장마다 첫 주 목표 날 수를 적는다(주별 표시는 활동지 표). '서로 점검할 짝'은 스스로 점검 칸으로.
 *  - 카드 한 장의 정답 칸은 하나라, 칸이 갈리는 카드('허락 먼저'인지 '안 됨'인지 등)는 모둠 말하기 문항으로 옮겼다.
 *  - 정리(출구) 질문의 단계 차이 가운데 판이 바뀌지 않는 것은 교사 진행 방식으로 적었다.
 *
 * 사람 확인: 근거 파일에는 법정 교육 항목 제목만 있다. 아래 문장은 일반 교육 내용으로 썼으니 공식 안내처
 *  (교육부 교육활동 보호 안내·교권 보호 자료, 시도교육청 교육활동보호센터 자료, 방송통신위원회 디지털 윤리 자료)에서 문구를 확인한다.
 *  - opinion-polite.*: 교사에게 하는 욕설·수업 중 몰래 촬영·녹음이 교육활동을 해치는 행동이라는 예시 / 그 결과(선생님 마음의 상처·수업 중단·서로 믿지 못함)
 *    / 의견 전하는 차례(마음 가라앉히기 → 시간 정해 찾아가기 → 나-전달법 → 함께 방법 찾기 → 고마움) / 나-전달법(있었던 일·내 마음·바라는 점) — 교육부 교육활동 보호 안내.
 *  - opinion-polite.intro.way-graph: '속상할 때 의견 전하는 방법' 설문 수치는 가상이다.
 *  - online-respect.*: 선생님 사진·영상을 허락 없이 찍거나 올리는 것, 흉내·비방 글이 교육활동 침해가 될 수 있다는 예시 / '허락 먼저'(찍힌 사람의 허락)
 *    / 퍼진 게시물은 다 지우기 어렵다 / 문제 글은 반응하지 않고 어른께 알린다 — 교육부 교육활동 보호 안내·방송통신위원회 디지털 윤리 자료.
 *  - online-respect.intro.spread-graph: 한 명이 세 명에게 보내는 3·9·27·81 은 셈 연습용 가상 모형이다(실제 퍼짐 통계 아님).
 *  - class-charter.*: 학생의 배울 권리와 교사의 가르치는 일이 함께 존중되어야 한다는 설명 / 학급 회의 차례(안건 소개 → 모둠 발표 → 질문 → 투표 → 확정)
 *    — 교육부 교육활동 보호 안내·학생 인권과 책임 관련 시도교육청 자료(해당 시도). '수업이 멈춘 횟수' 그래프는 가상이다.
 */
(function () {
  const M = [];
  // 모듈 머리: mk('opinion-polite', [5])('intro.score-branch', {...}) → id·type·topic·grades 를 채운다
  const mk = (topic, grades) => (suffix, o) => Object.assign({
    id: `teach.e56.${topic}.${suffix}`, schema: 'edu-module.v1', type: suffix.split('.')[0],
    domain: 'teach', band: '초5-6', topic: `teach.e56.${topic}`, grades,
  }, o);
  const art = (draw, banner, motif = 'star', color = 'buttercup') => ({ draw, banner, extra: [{ motif, x: 300, y: 96, color }] });
  const cut = (p) => String(p).replace(/[.?]$/, '');
  const inter = (slots, g) => { const out = []; const n = Math.max(0, ...slots.map((s) => (g[s] || []).length)); for (let i = 0; i < n; i++) for (const s of slots) if ((g[s] || [])[i]) out.push(g[s][i]); return out; };

  // ---- 카드 판 문항(mindmap) ----
  const SORT = (prompt, { topic, slots, groups, easy = 2, extra = {}, traps = [], mode }, d, more) => {
    const take = (n) => Object.fromEntries(slots.map((s, i) => [s, groups[s].slice(0, Array.isArray(n) ? n[i] : n)]));
    const full = Object.fromEntries(slots.map((s) => [s, [...groups[s], ...(extra[s] || [])]]));
    const base = Object.assign(topic ? { topic } : {}, { slots, cards: inter(slots, groups) }); if (mode) base.mode = mode;
    const ez = take(easy); const fullCards = inter(slots, full); fullCards.splice(1, 0, ...traps.slice(0, 1)); if (traps[1]) fullCards.push(traps[1]);
    const count = (g) => Object.values(g).reduce((a, b) => a + b.length, 0);
    const lv = { easy: { prompt: `${cut(prompt)}(카드 ${count(ez)}장).`, toolOptions: { cards: inter(slots, ez) }, target: { sort: ez } } };
    if (Object.keys(extra).length || traps.length) lv.challenge = { prompt: `${cut(prompt)}(카드 ${fullCards.length}장${traps.length ? ', 넣지 않을 카드도 있어요' : ''}).`, toolOptions: { cards: fullCards }, target: { sort: full } };
    return Object.assign({ prompt, toolOptions: base, target: { sort: groups }, difficulty: d, levels: lv }, more);
  };
  // 고르기(pick): good = 담을 카드, traps = 남길 카드
  const PICK = (prompt, basket, good, traps, { easy = 1, easyTraps = 1, extraTraps = [], mode = 'pick', topic } = {}, d, more) => {
    const mixIn = (g, t) => { const out = g.slice(); t.forEach((x, i) => out.splice(Math.min(out.length, 1 + i * 2), 0, x)); return out; };
    const o = Object.assign({ mode, basket }, topic ? { topic } : {}, { cards: mixIn(good, traps) });
    const lv = { easy: { prompt: `${cut(prompt)}(${easy}장).`, toolOptions: { cards: mixIn(good.slice(0, easy), traps.slice(0, easyTraps)) }, target: { pick: good.slice(0, easy) } } };
    if (extraTraps.length) lv.challenge = { prompt: `${cut(prompt)}(헷갈리는 카드도 있어요).`, toolOptions: { cards: mixIn(good, [...traps, ...extraTraps]) }, target: { pick: good } };
    return Object.assign({ prompt, toolOptions: o, target: { pick: good }, difficulty: d, levels: lv }, more);
  };
  // 말풍선 빈칸(story fill): blanks = [[말풍선 글('___' 자리), 넣을 카드]…3], 쉬움 1·기본 2·도전 3칸
  const FILL = (prompt, who, blanks, cards, title, d, more) => {
    const sl = blanks.map(([label], i) => ({ id: `b${i + 1}`, who, label }));
    const tg = (n) => ({ fill: Object.fromEntries(blanks.slice(0, n).map(([, c], i) => [`b${i + 1}`, c])) });
    return Object.assign({
      prompt, toolOptions: { mode: 'fill', title, slots: sl.slice(0, 2), cards }, target: tg(2), difficulty: d,
      levels: { easy: { prompt: `${cut(prompt)}(빈칸 하나).`, toolOptions: { slots: sl.slice(0, 1) }, target: tg(1) }, challenge: { prompt: `${cut(prompt)}(빈칸 셋).`, toolOptions: { slots: sl }, target: tg(3) } },
    }, more);
  };

  // ---- 갈림길(dilemma) ----
  const imp = (list) => (list || []).map(([who, text, tone]) => ({ who, text, tone }));
  const TREE = (steps, depth, ending) => {
    const build = (i) => {
      const s = steps[i];
      const ok = (g) => { const o = { id: g[0], text: g[1], result: g[2], impact: imp(g[3]) }; if (i === depth - 1) o.ending = ending; else o.next = build(i + 1); return o; };
      const no = (b) => ({ id: b[0], text: b[1], result: b[2], why: b[3], impact: imp(b[4]), ending: b[5] || '다른 길을 골랐다면 어땠을지 되돌아가 견주어 봐요.' });
      const list = [no(s.bad), ok(s.good), s.mid ? no(s.mid) : null].filter(Boolean);
      const r = i % list.length;
      return { text: s.text, ask: s.ask || '어떻게 할까요?', motif: s.motif || 'house', choices: [...list.slice(r), ...list.slice(0, r)] };
    };
    return build(0);
  };
  const goodPath = (steps, n) => steps.slice(0, n).map((s) => s.good[0]);
  const DIL = ({ steps, ending, reasons, good, title, talk, conclude }) => {
    const opt = (n) => ({ title, scene: TREE(steps, n, ending), reasons });
    return [
      { prompt: `‘${title}’ 갈림길마다 알맞은 선택을 고르고, 끝에서 근거를 골라요.`, toolOptions: opt(2), target: { path: [goodPath(steps, 2)], reasons: good.slice(0, 2), some: true }, difficulty: 0.3,
        levels: {
          easy: { prompt: `‘${title}’ 갈림길 한 번에서 알맞은 선택을 고르고 근거를 골라요.`, toolOptions: opt(1), target: { path: [goodPath(steps, 1)], reasons: [good[0]], some: true } },
          challenge: { prompt: `‘${title}’ 갈림길 세 번을 지나 끝까지 가고, 알맞은 근거를 모두 골라요.`, toolOptions: opt(3), target: { path: [goodPath(steps, 3)], reasons: good } },
        } },
      { prompt: `‘${title}’에서 되돌아가 다른 선택도 끝까지 가 보고 결과를 견주어요.`, toolOptions: opt(2), target: { explore: 2 }, difficulty: 0.25,
        levels: { easy: { toolOptions: opt(1) }, challenge: { prompt: `‘${title}’에서 서로 다른 끝 장면 세 곳을 가 보고 결과를 견주어요.`, toolOptions: opt(3), target: { explore: 3 } } }, conclude },
      { prompt: talk, free: true, talk: true, toolOptions: opt(2) },
    ];
  };

  // ---- 기준표 글쓰기(rubric-writing) ----
  const RUB = (prompt, { topic, starter, crit, must, chars = [20, 160], title, sents, chCrit = '한 군데 이상 고쳐 썼다', chPrompt }, d, more) => {
    const sn = (k) => (sents ? { sentences: [sents[k], 6] } : {});
    return Object.assign({
      prompt, toolOptions: { topic, minChars: chars[0], maxChars: chars[1], title }, target: Object.assign({ selfCheck: crit.slice(0, 3), chars }, sn(1)), difficulty: d,
      levels: {
        easy: { prompt: `${cut(prompt)}(문장 틀을 써도 돼요).`, toolOptions: { starter }, target: Object.assign({ selfCheck: crit.slice(0, 2), chars: [Math.max(10, chars[0] - 10), chars[1]] }, sn(0)) },
        challenge: { prompt: chPrompt || `${cut(prompt)}. 다 쓰면 한 군데 고쳐 써요.`, target: Object.assign({ selfCheck: [...crit.slice(0, 3), chCrit], chars: [chars[0] + 10, chars[1]], mustInclude: must }, sn(2)) },
      },
    }, more);
  };
  const EX = (tool, it) => Object.assign({ type: 'tool', tool, options: it.toolOptions, prompt: it.prompt, target: it.target, difficulty: it.difficulty || 0.15 }, it.levels ? { levels: it.levels } : {});
  const RUBX = (prompt, spec) => EX('rubric-writing', RUB(prompt, spec, 0.2));
  // 점검표(kitchen checklist): good = 표시할 항목, traps = 표시하지 않을 항목. 쉬움 = 앞 easy개, 기본 = 앞 base개, 도전 = good 전부
  const CHK = (prompt, title, good, traps, { easy = 2, base = 3 } = {}, d = 0.15) => {
    const it = (list) => list.map((t) => ({ id: `k${good.indexOf(t) >= 0 ? good.indexOf(t) : 10 + traps.indexOf(t)}`, text: t }));
    const mixIn = (g) => { const out = g.slice(); traps.forEach((t, i) => out.splice(Math.min(out.length, 1 + i * 2), 0, t)); return out; };
    const ids = (g) => g.map((t) => `k${good.indexOf(t)}`);
    const lv = { easy: { prompt: `${cut(prompt)}(${easy}칸).`, toolOptions: { items: it(mixIn(good.slice(0, easy))) }, target: { checklist: ids(good.slice(0, easy)) } } };
    if (good.length > base) lv.challenge = { prompt: `${cut(prompt)}(${good.length}칸).`, toolOptions: { items: it(mixIn(good)) }, target: { checklist: ids(good) } };
    return { prompt, toolOptions: { mode: 'checklist', title, items: it(mixIn(good.slice(0, base))) }, target: { checklist: ids(good.slice(0, base)) }, difficulty: d, levels: lv };
  };
  // 자기 점검표(timer selfCheck)
  const SELF = (title, list, prompt, { easy = 2, base = 3 } = {}) => {
    const lv = { easy: { prompt: `${cut(prompt)}(${easy}칸).`, target: { selfCheck: list.slice(0, easy) } } };
    if (list.length > base) lv.challenge = { prompt: `${cut(prompt)}(${list.length}칸).`, target: { selfCheck: list } };
    return { type: 'tool', tool: 'timer', options: { title }, prompt, target: { selfCheck: list.slice(0, base) }, difficulty: 0.1, levels: lv };
  };
  // 그래프 읽기(chart read) 시연
  const CHART = (type, title, data, question, pick, { unit = '명', xLabel, yLabel } = {}) => ({
    tool: 'chart', options: Object.assign({ type, mode: 'read', title, unit, data, question, choices: data.map((x) => x[0]) }, xLabel ? { xLabel } : {}, yLabel ? { yLabel } : {}), sequence: [{ pick }],
  });
  // 콜라주 판(스스로 점검)
  const SHAPES = ['square', 'rect', 'triangle', 'diamond', 'semi', 'circle', 'star', 'heart'];
  const COLORS = ['빨강', '주황', '노랑', '초록', '파랑', '보라', '분홍', '하양'];
  const COLX = (prompt, crit, add = {}) => ({
    type: 'tool', tool: 'collage', options: { shapes: SHAPES, colors: COLORS, maxPieces: 16 }, prompt, target: { selfCheck: crit.slice(0, 3), minPieces: 5 }, difficulty: 0.1,
    levels: {
      easy: { prompt: `${cut(prompt)}(조각 3개 이상).`, target: { selfCheck: crit.slice(0, 2), minPieces: 3 } },
      challenge: { prompt: `${cut(prompt)}(점검 네 칸).`, target: Object.assign({ selfCheck: crit.slice(0, 4), minPieces: 5 }, add) },
    },
  });

  // ======== 5학년 · 선생님께 의견을 바르게 전하기 (research-mandatory §1 교육활동 침해행위 예방교육) ========
  {
    const X = mk('opinion-polite', [5]);
    const PROJ = [
      { text: '모둠 과제 점수가 낮게 나왔어요. 도가 "선생님 욕하는 글을 단체방에 올리자"고 해요.', motif: 'cloud',
        good: ['wait', '"올리지 말고 까닭부터 여쭤보자"고 한다', '모둠이 잠깐 멈추고 생각해요.', [['선생님', '상처받지 않아요', 1], ['모둠', '바른 방법을 찾아요', 1]]],
        bad: ['post', '같이 욕하는 글을 올린다', '글이 캡처되어 다른 반까지 퍼져요.', '욕하는 글은 선생님 마음을 다치게 하고 수업을 해쳐요.', [['선생님', '마음에 상처를 입어요', -1], ['모둠', '믿음을 잃어요', -1]]],
        mid: ['quiet', '아무 말 없이 나만 빠진다', '나는 빠졌지만 글은 올라가요.', '빠진 마음은 좋아요. 친구도 멈추게 말하면 더 좋아요.', [['선생님', '상처를 입어요', -1]]] },
      { text: '도가 "말해 봤자 안 바뀌어. 그냥 올리자"라고 해요.', motif: 'house',
        good: ['persuade', '"쉬는 시간에 같이 기준을 여쭤보자"고 한다', '도가 "그럼 같이 가 보자"고 해요.', [['도', '다른 길을 알게 돼요', 1]]],
        bad: ['giveup', '"그럼 마음대로 해"라고 한다', '도가 혼자 글을 올려요.', '설득을 멈추면 친구가 후회할 길로 가요.', [['도', '후회할 일을 해요', -1]]] },
      { text: '쉬는 시간, 모둠이 선생님께 찾아갔어요.', motif: 'sun',
        good: ['ask', '채점 기준을 여쭙고 고칠 점을 묻는다', '선생님이 기준을 보여 주고 다음 방법을 알려 줘요.', [['모둠', '다음에 더 잘할 수 있어요', 1], ['선생님', '의견을 반갑게 들어요', 1]]],
        bad: ['yell', '"점수 올려 주세요!"라고 소리친다', '선생님이 당황하고 이야기가 멈춰요.', '소리치면 내 의견이 잘 전해지지 않아요.', [['선생님', '당황해요', -1], ['모둠', '답을 못 들어요', -1]]] },
    ];
    const PROJ_R = [
      { id: 'respect', text: '서로 존중해야 배움이 이어진다' },
      { id: 'way', text: '바른 방법이라야 의견이 전해진다' },
      { id: 'result', text: '욕하는 글은 모두에게 상처를 남긴다' },
      { id: 'secret', text: '단체방은 우리끼리라 괜찮다', why: '단체방 글도 캡처되어 퍼질 수 있어요.' },
      { id: 'angry', text: '화가 나면 욕해도 이해받는다', why: '속상한 마음은 괜찮지만, 욕은 상처를 줘요.' },
    ];
    const STEPS6 = ['마음 가라앉히기', '시간 정해 찾아가기', '나-전달법으로 말하기', '답이 늦으면 다시 약속', '함께 방법 찾기', '고마움 전하기'];
    const S5 = STEPS6.filter((_, i) => i !== 3);
    M.push(
      X('intro.score-branch', {
        title: '점수에 속상한 지호', method: '점수에 속상한 지호 장면', tool: 'emotion', minutes: 6,
        levels: { easy: '교사가 두 선택(소리친다·찾아가 묻는다)의 결과만 함께 읽고 견준다.', base: '세 선택(소리친다·찾아가 묻는다·몰래 녹음한다)의 결과와 지호·선생님 마음을 말한다.', challenge: '선택마다 다음 날 교실 분위기가 어떨지 짝과 견주어 말한다.' },
        intro: {
          teacher: '"지어낸 친구 지호가 수행평가 점수를 받고 속상해해요. 지호는 어떻게 하면 좋을까요?" 시연 단추로 \'쉬는 시간에 찾아가 묻는다\'를 고르고 결과를 읽어 준다. "화가 나면 교실에서 소리쳐도 이해받아요"라는 말이 나오면 "속상한 마음은 당연해요. 그런데 소리치면 수업은 어떻게 될까요? 선생님은 지호 말을 들을 수 있을까요?"라고 되묻는다. "몰래 녹음해 두면 증거가 되잖아요"에는 "허락 없이 녹음하면 선생님은 어떤 마음일까요? 서로 믿을 수 있을까요?"라고 묻는다. 오늘은 의견을 바르게 전하는 방법을 배운다고 밝힌다.',
          student: '지호가 고를 수 있는 세 가지 길의 결과를 읽고, 지호와 선생님의 마음이 가장 편한 길을 골라 보아요.',
          demo: { tool: 'emotion', options: { mode: 'branch', situation: '지호가 수행평가 점수를 보고 속상해요.', ask: '지호는 어떻게 할까요?', motif: 'cloud', choices: [
            { id: 'shout', text: '교실에서 "말도 안 돼!" 소리친다', result: '수업이 멈추고 친구들이 놀라요.', mood: '걱정' },
            { id: 'ask', text: '쉬는 시간에 찾아가 기준을 묻는다', result: '선생님이 기준을 보여 주고 함께 방법을 찾아요.', mood: '편안함' },
            { id: 'record', text: '몰래 녹음해 증거로 남긴다', result: '알게 된 선생님과 서로 믿기 어려워져요.', mood: '걱정' }] }, sequence: [{ choice: 'ask' }] },
          art: art('a paper child holding a paper test sheet with a small frown, three paper arrows pointing to three different doors', '지호는 어떻게 할까?', 'cloud', 'sky'),
        },
        notes: '지호는 지어낸 인물이다. 학생에게 점수 때문에 비슷한 일을 한 적이 있는지 묻지 않는다.',
      }),
      X('intro.way-graph', {
        title: '의견 전하는 방법 그래프', method: '의견 전하는 방법 그래프', tool: 'chart', minutes: 6,
        levels: { easy: '교사가 가장 큰 막대(참기)만 짚어 읽게 한다.', base: '네 막대를 견주어 읽고 방법마다 생길 결과를 말한다.', challenge: '가장 좋은 방법(직접 찾아가기)이 왜 적은지 모둠이 원인을 짐작해 말한다.' },
        intro: {
          teacher: '"이 막대그래프는 수업용으로 지은 가상 설문이에요. 속상할 때 학생들은 어떻게 의견을 전했을까요?" 시연 단추로 가장 긴 막대 \'참기\'를 고르는 모습을 보인다. "참는 게 제일 좋아요"라는 말에는 "참기만 하면 선생님은 지호 마음을 알 수 있을까요? 마음이 쌓이면 어떻게 될까요?"라고 되묻는다. \'단체방에 쓰기\'는 선생님이 모르는 채 말이 퍼질 수 있다는 점을 짚는다.',
          student: '그래프(가상)에서 가장 많은 방법을 찾고, 그 방법을 쓰면 어떤 결과가 생길지 짝에게 말해 보아요.',
          demo: CHART('bar', '속상할 때 의견 전하는 방법(가상 설문)', [['직접 찾아가기', 5], ['쪽지 쓰기', 4], ['참기', 9], ['단체방에 쓰기', 7]], '가장 많은 방법은?', 2, { unit: '명', xLabel: '방법', yLabel: '학생 수' }),
          art: art('a paper bar chart with four bars, the tallest bar wearing a tiny paper zipper mouth', '의견을 어떻게 전할까?', 'star', 'buttercup'),
        },
        notes: '그래프 수치는 수업용 가상 자료다.',
      }),
      X('activity.cause-result', {
        title: '욕설·몰래 촬영의 원인과 결과', method: '욕설·몰래 촬영의 원인과 결과', tool: 'mindmap', minutes: 14,
        levels: { easy: '원인·결과 가지에 카드를 하나씩(2장) 잇는다.', base: '원인 3장과 결과 3장을 가지에 나누어 잇는다.', challenge: '원인·결과·다른 선택 가지에 카드 8장을 나누고, 원인마다 바꿀 선택을 말한다.' },
        activity: {
          title: '원인과 결과 생각그물', tool: 'mindmap',
          teacher: '"선생님께 욕을 하거나 몰래 찍게 되는 까닭은 무엇일까요? 그러면 어떤 일이 생길까요?" 카드를 붙일 때마다 "~때문에 → ~가 생겼다"로 이어 말하게 한다. "장난으로 찍은 거니까 괜찮아요"라는 말에는 "찍힌 선생님이 장난이라고 느낄까요? 결과 가지를 보세요"라고 되묻는다. 원인이 있어도 행동은 바꿀 수 있다는 점을 짚는다.',
          task: '가운데 행동에서 원인 가지와 결과 가지로 카드를 이어 생각그물을 완성해요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
          items: [
            { prompt: '‘선생님께 한 욕설’의 원인과 결과 카드를 가지에 이어요.', toolOptions: { topic: '선생님께 한 욕설', slots: ['원인', '결과'], cards: ['화가 남', '선생님 마음의 상처', '친구에게 보이려고', '수업이 멈춤', '장난으로', '서로 믿지 못함'] },
              target: { sort: { 원인: ['화가 남', '친구에게 보이려고', '장난으로'], 결과: ['선생님 마음의 상처', '수업이 멈춤', '서로 믿지 못함'] } }, difficulty: 0.2,
              levels: {
                easy: { prompt: '‘선생님께 한 욕설’의 원인과 결과 카드를 가지에 이어요(카드 2장).', toolOptions: { cards: ['선생님 마음의 상처', '화가 남'] }, target: { sort: { 원인: ['화가 남'], 결과: ['선생님 마음의 상처'] } } },
                challenge: { prompt: '원인·결과·다른 선택 가지에 카드를 이어요(카드 8장).', toolOptions: { slots: ['원인', '결과', '다른 선택'], cards: ['화가 남', '선생님 마음의 상처', '숨 고르고 기다리기', '친구에게 보이려고', '수업이 멈춤', '쉬는 시간에 말하기', '장난으로', '서로 믿지 못함'] },
                  target: { sort: { 원인: ['화가 남', '친구에게 보이려고', '장난으로'], 결과: ['선생님 마음의 상처', '수업이 멈춤', '서로 믿지 못함'], '다른 선택': ['숨 고르고 기다리기', '쉬는 시간에 말하기'] } } },
              } },
            SORT('‘수업 중 몰래 찍은 영상’의 원인과 결과를 이어요.', { topic: '수업 중 몰래 찍은 영상', slots: ['원인', '결과'], groups: { 원인: ['재미있어 보여서', '증거로 남기려고'], 결과: ['선생님이 불안해함', '수업에 집중 못 함'] }, easy: 1, extra: { 원인: ['친구가 시켜서'], 결과: ['영상이 퍼질 수 있음'] } }, 0.25,
              { conclude: '욕설과 몰래 촬영은 선생님 마음에 상처를 주고 모두의 수업을 멈추게 해요. 원인이 있어도 다른 선택을 할 수 있어요.' }),
            { prompt: '모둠에서 원인 하나를 골라, 그때 할 수 있는 다른 선택을 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '수업 중 몰래 찍으면 생길 수 있는 결과 하나를 써요.' }] },
      }),
      X('activity.project-choice', {
        title: '모둠 과제 점수 갈림길', method: '모둠 과제 점수 갈림길', tool: 'dilemma', minutes: 14,
        levels: { easy: '갈림 1번(욕하는 글을 올릴지)에서 고르고 근거 한 장을 고른다.', base: '갈림 2번(친구 설득하기)까지 지나 근거를 고른다.', challenge: '갈림 3번(선생님께 찾아가 말하기)까지 지나 근거를 모두 고르고 다른 길의 결과와 견준다.' },
        activity: {
          title: '갈림길: 모둠 점수가 낮아요', tool: 'dilemma',
          teacher: '"모둠 점수가 낮아서 속상해요. 친구가 선생님 욕하는 글을 올리자고 하면 어떻게 할까요?" 고를 때마다 결과와 영향을 소리 내어 읽게 한다. "우리 단체방이니까 괜찮아요"라는 말에는 "단체방 글이 캡처되면 어디까지 갈 수 있을까요?"라고 되묻는다. 속상한 마음은 잘못이 아니고, 의견은 바른 방법으로 전하면 된다는 점을 짚는다.',
          task: '갈림길마다 고르고 결과를 읽은 뒤, 끝에서 내 선택의 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: DIL({
            title: '모둠 점수가 낮게 나왔어요', steps: PROJ, ending: '바른 방법으로 물어본 덕분에 다음 과제를 더 잘 준비하게 됐어요.',
            reasons: PROJ_R, good: ['respect', 'way', 'result'],
            talk: '모둠에서 "속상할 때 선생님께 의견을 전하는 좋은 방법"을 하나씩 말해요.',
            conclude: '속상할 때도 욕하는 글 대신 바른 방법으로 물어보면 의견이 전해져요.',
          }),
        },
        worksheet: { items: [{ type: 'choice', prompt: '친구가 선생님 욕하는 글을 올리자고 해요. 알맞은 말은?', options: ['"좋아, 같이 올리자"', '"올리지 말고 같이 여쭤보자"', '"나는 모르는 척할게"'], answer: '"올리지 말고 같이 여쭤보자"' }] },
        notes: '도는 지어낸 인물이다. 글을 올리자고 한 친구를 탓하지 않고 그 행동을 멈추게 하는 말에 초점을 둔다.',
      }),
      X('activity.opinion-note', {
        title: '선생님께 보내는 의견 쪽지', method: '선생님께 보내는 의견 쪽지', tool: 'rubric-writing', minutes: 14,
        levels: { easy: '문장 틀을 보고 두 문장 이상 쓰고 기준 2개(사실·예의)를 점검한다.', base: '네 문장(있었던 일·내 마음·바라는 점·고마움)을 쓰고 기준 3개를 점검한다.', challenge: '네 문장을 쓰고 한 군데 고쳐 쓴 뒤(\'바라\'·\'부탁\'을 넣음), 짝과 바꿔 기준으로 서로 점검한다.' },
        activity: {
          title: '의견 쪽지 쓰고 점검하기', tool: 'rubric-writing',
          teacher: '"지호가 되어 선생님께 쪽지를 써 볼까요? 있었던 일, 내 마음, 바라는 점, 고마움 네 문장이에요." 칠판에 네 칸 틀을 적어 둔다. "점수가 이상해요"처럼 쓰는 학생에게 "무엇이 궁금했는지 사실로 써 볼까요? \'과제 3번의 점수 기준이 궁금해요\'처럼요"라고 말해 준다. 탓하는 말(\'선생님이 잘못했어요\') 대신 내 마음을 쓰는 것이 나-전달법이라는 점을 짚는다.',
          task: '지호가 되어 선생님께 네 문장 의견 쪽지를 쓰고, 기준표로 점검해요(이름은 쓰지 않아요).', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RUB('지호가 되어 선생님께 네 문장 의견 쪽지를 써요', { topic: '지호가 되어 수행평가 점수에 대한 의견 쪽지를 써요: 있었던 일 / 내 마음 / 바라는 점 / 고마움(이름은 쓰지 않아요).', starter: '___ 점수를 받았어요. 저는 ___ 마음이 들었어요. ___을 알려 주시면 좋겠어요. 늘 ___ 고맙습니다.', crit: ['있었던 일을 사실로 썼다', '예의 바른 말로 썼다', '바라는 점이 분명하다'], must: [['바라', '부탁', '좋겠']], chars: [30, 220], title: '의견 쪽지', sents: [2, 4, 4] }, 0.25),
            RUB('가상 쪽지 "점수 이상해요. 다시 해 주세요."를 고쳐 써요', { topic: '가상 친구가 쓴 쪽지 "점수 이상해요. 다시 해 주세요."를 사실·마음·바라는 점이 들어가게 고쳐 써요.', starter: '___ 점수가 궁금해요. 저는 ___. ___ 알려 주실 수 있나요?', crit: ['사실을 넣었다', '내 마음을 넣었다', '탓하는 말을 뺐다'], chars: [20, 180], title: '쪽지 고쳐 쓰기', sents: [2, 3, 3] }, 0.2),
            { prompt: '짝과 쪽지를 바꿔 읽고, 기준 하나를 골라 잘된 점을 말해 줘요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '의견 쪽지의 네 칸을 채워요.', columns: ['있었던 일', '내 마음', '바라는 점', '고마움'], cells: [['', '', '', '']] }] },
        notes: '쪽지는 실제로 보내지 않는 연습 글이다. 실제 의견이 있는 학생은 교사가 따로 시간을 내어 듣는다.',
      }),
      X('activity.tell-order', {
        title: '의견을 전하는 차례', method: '의견을 전하는 차례', tool: 'story', minutes: 14,
        levels: { easy: '장면 카드 3장(가라앉히기·찾아가기·나-전달법)을 차례로 놓는다.', base: '장면 카드 5장을 차례로 놓고, 둘째 문항에서 나-전달법 말풍선 빈칸 2개를 채운다.', challenge: '선생님 대답이 바로 어려울 때의 장면을 더한 6장을 차례로 놓고, 말풍선 빈칸 3개를 채운다.' },
        activity: {
          title: '의견을 전하는 차례 놓기', tool: 'story',
          teacher: '"속상한 마음이 들면 바로 말하러 가는 게 좋을까요?" 첫 장면에서 숨을 고르는 까닭을 묻는다. "수업 중에 바로 손 들고 따지면 돼요"라는 학생에게 "다른 친구들의 수업은 어떻게 될까요? 쉬는 시간처럼 시간을 정해 찾아가면 어때요?"라고 되묻는다. 선생님이 바로 답하기 어려우면 다시 시간을 약속해도 된다는 점을 짚는다.',
          task: '의견을 바르게 전하는 장면 카드를 차례로 놓고, 나-전달법 말풍선을 채워요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '의견을 바르게 전하는 장면 카드를 차례로 놓아요.', toolOptions: { mode: 'order', slots: 5, cards: [S5[2], S5[0], S5[4], S5[3], S5[1]] }, target: { order: S5 }, difficulty: 0.2,
              levels: {
                easy: { prompt: '의견을 바르게 전하는 장면 카드를 차례로 놓아요(카드 3장).', toolOptions: { slots: 3, cards: [S5[2], S5[0], S5[1]] }, target: { order: S5.slice(0, 3) } },
                challenge: { prompt: '선생님 답이 바로 어려울 때 장면을 더해 차례로 놓아요(카드 6장).', toolOptions: { slots: 6, cards: [STEPS6[2], STEPS6[0], STEPS6[5], STEPS6[3], STEPS6[4], STEPS6[1]] }, target: { order: STEPS6 } },
              } },
            FILL('지호의 나-전달법 말풍선 빈칸을 알맞은 카드로 채워요.', '지호', [['과제 점수를 보고 저는 ___.', '조금 속상했어요'], ['채점 기준을 ___.', '알려 주시면 좋겠어요'], ['들어 주셔서 ___.', '고맙습니다']], ['조금 속상했어요', '선생님이 틀렸어요', '알려 주시면 좋겠어요', '고맙습니다'], '지호의 말(지어낸 장면)', 0.2,
              { conclude: '마음을 가라앉히고, 시간을 정해 찾아가, 내 마음과 바라는 점을 말해요.' }),
            { prompt: '짝과 지호와 선생님 역할을 나누어 말풍선을 소리 내어 말해 봐요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '의견을 전하는 차례를 써요.', columns: ['1', '2', '3', '4', '5'], cells: [['', '', '', '', '']], answer: '마음 가라앉히기, 시간 정해 찾아가기, 나-전달법으로 말하기, 함께 방법 찾기, 고마움 전하기' }] },
      }),
      X('wrap.my-words', {
        title: '나의 말 점검표', method: '나의 말 점검표', tool: 'kitchen', minutes: 6,
        levels: { easy: '점검 칸 2개(욕하지 않기·몰래 찍지 않기)를 고른다.', base: '점검 칸 3개(의견은 차례대로 더함)를 고른다.', challenge: '점검 칸 4개를 고르고, 지키기 어려울 때 대신할 행동을 쓴다.' },
        wrap: {
          teacher: '"이번 주에 지킬 나의 말 점검표를 만들어요. 지킬 것만 골라 표시해요." 함정 칸(\'화나면 단체방에 쓰기\')을 고른 학생에게 "그 글을 선생님이 보면 어떤 마음일까요? 단체방 대신 무엇을 할 수 있을까요?"라고 묻는다. 출구 2번에서 \'증거로 몰래 찍기\'를 고른 학생에게는 "궁금한 것은 찍지 않고 여쭤보면 돼요"라고 말해 준다.',
          exitTicket: [
            EX('kitchen', CHK('이번 주 지킬 나의 말 점검표에 표시해요.', '나의 말 점검표', ['선생님께 욕하지 않기', '몰래 찍지 않기', '의견은 차례대로', '속상하면 숨 고르기'], ['화나면 단체방에 쓰기'], { easy: 2, base: 3 })),
            { type: 'choice', prompt: '점수가 궁금할 때 가장 알맞은 행동은?', options: ['증거로 몰래 찍어 둔다', '쉬는 시간에 찾아가 묻는다', '수업 중에 큰 소리로 따진다'], answer: 1, difficulty: 0.15, explain: '시간을 정해 찾아가 물으면 의견이 잘 전해져요.' },
            { type: 'short', prompt: '지키기 어려울 때 대신할 행동 하나를 써요.' },
          ],
        },
        worksheet: {
          title: '나의 말 점검표',
          items: [
            { type: 'table', prompt: '이번 주 지킨 날에 ○를 써요.', columns: ['점검', '월', '화', '수', '목', '금'], cells: [['욕하지 않기', '', '', '', '', ''], ['몰래 찍지 않기', '', '', '', '', ''], ['의견은 차례대로', '', '', '', '', '']] },
            { type: 'short', prompt: '선생님께 의견을 전할 때 쓸 첫마디를 써요.' },
          ],
          easy: { note: '속상하면 먼저 숨을 고르고, 쉬는 시간에 말해요.', items: [{ type: 'draw', prompt: '선생님께 차분히 말하는 내 모습을 그려요.' }] },
        },
      }),
      X('wrap.after-scale', {
        title: '바르게 전한 뒤의 마음', method: '의견을 바르게 전한 뒤 마음', tool: 'emotion', minutes: 6,
        levels: { easy: '교사가 지호의 마음 크기만 함께 고르고, 선생님 마음은 말로 짚는다.', base: '지호와 선생님의 마음 크기를 각각 고른다.', challenge: '두 사람의 마음 크기를 고르고, 반 분위기가 어떻게 바뀌었을지 한 문장으로 쓴다.' },
        wrap: {
          teacher: '"지호가 쉬는 시간에 찾아가 차분히 의견을 말했어요. 지호 마음은 얼마나 편해졌을까요? 선생님은요?" 눈금을 고른 까닭을 말하게 한다. "말해 봤자 점수는 그대로니 소용없어요"라는 말에는 "점수가 그대로여도 기준을 알게 됐고, 서로 마음을 알게 됐어요. 그것도 바뀐 거예요"라고 말해 준다.',
          exitTicket: [
            { type: 'tool', tool: 'emotion', options: { mode: 'scale', situation: '지호가 쉬는 시간에 찾아가 차분히 의견을 말했어요', feeling: '편안함', steps: 5, scaleLabels: { 1: '조금', 5: '아주 많이' }, after: '바르게 전하면 내 마음도 가벼워져요.' }, prompt: '의견을 전한 뒤 지호의 마음은 얼마나 편할까요? 눈금을 골라요.', target: { level: [3, 5] }, difficulty: 0.1 },
            { type: 'tool', tool: 'emotion', options: { mode: 'scale', situation: '선생님이 지호의 쪽지와 말을 들었어요', feeling: '고마움', steps: 5, scaleLabels: { 1: '조금', 5: '아주 많이' }, after: '예의 바른 의견은 선생님도 반갑게 들어요.' }, prompt: '지호의 말을 들은 선생님은 얼마나 고마울까요? 눈금을 골라요.', target: { level: [3, 5] }, difficulty: 0.1 },
            { type: 'short', prompt: '지호가 바르게 의견을 전한 다음 날 반 분위기를 한 문장으로 써요.' },
          ],
        },
        worksheet: {
          title: '바르게 전하면 마음이 가벼워요',
          items: [
            { type: 'choice', prompt: '나-전달법으로 말한 것은?', options: ['선생님이 틀렸어요', '저는 기준이 궁금했어요', '다들 이상하대요'], answer: '저는 기준이 궁금했어요' },
            { type: 'short', prompt: '의견을 바르게 전하면 좋은 점 하나를 써요.' },
          ],
        },
      }),
    );
  }

  // ======== 6학년 · 온라인에서도 선생님을 존중해요 (research-mandatory §1 교육활동 침해행위 예방교육, §2 디지털 시민 초: 예절) ========
  {
    const X = mk('online-respect', [6]);
    const VIDEO = [
      { text: '결이 선생님이 칠판 앞에서 넘어질 뻔한 장면을 몰래 찍었어요. 반 단체방에 올리려 해요.', motif: 'cloud',
        good: ['stop', '"허락 없이 찍은 거니 올리지 마"라고 말린다', '결이 올리려던 손을 멈춰요.', [['선생님', '보호받아요', 1], ['결', '후회할 일을 멈춰요', 1]]],
        bad: ['share', '같이 올리고 웃음 표시를 단다', '영상이 몇 분 만에 여러 사람에게 퍼져요.', '허락 없이 찍고 올리면 선생님을 해치고 수업을 흔들어요.', [['선생님', '마음에 큰 상처', -1]]],
        mid: ['watch', '올리지는 않고 영상만 받아 본다', '영상을 받은 사람이 늘어 다시 퍼져요.', '안 올린 것은 좋아요. 받아 보는 것도 퍼짐을 돕고 있어요.', [['선생님', '여전히 걱정돼요', -1]]] },
      { text: '결이 "재미로 그런 건데 뭐 어때?"라고 해요.', motif: 'house',
        good: ['erase', '"지우고 선생님께 사과하자"고 한다', '결이 영상을 지우고 사과할 마음을 먹어요.', [['결', '바로잡을 수 있어요', 1]]],
        bad: ['okay', '"그렇긴 하네" 하고 넘긴다', '결이 다음에도 몰래 찍어요.', '재미여도 찍힌 사람이 싫으면 상처예요. 멈추게 말해 줘요.', [['선생님', '또 찍힐까 불안해요', -1]]] },
      { text: '그런데 영상이 벌써 옆 반 친구에게 갔대요.', motif: 'storm',
        good: ['tell', '선생님께 알리고 받은 친구에게 지워 달라고 한다', '선생님과 함께 받은 사람들에게 지워 달라고 부탁해요.', [['선생님', '도움을 받아요', 1], ['반', '믿음을 되찾아요', 1]]],
        bad: ['hide', '모른 척하고 내 휴대폰에서만 지운다', '옆 반에서 영상이 계속 돌아요.', '내 휴대폰에서 지워도 퍼진 영상은 남아요. 어른께 알려요.', [['선생님', '모르는 사이 퍼져요', -1]]] },
    ];
    const VIDEO_R = [
      { id: 'consent', text: '허락 없이 찍고 올리면 해가 된다' },
      { id: 'spread', text: '한 번 퍼지면 다 지우기 어렵다' },
      { id: 'stopit', text: '멈추게 말하는 것도 존중이다' },
      { id: 'face', text: '다 아는 선생님 얼굴이라 괜찮다', why: '아는 얼굴이어도 허락 없이 올리면 안 돼요.' },
      { id: 'room', text: '우리 반 단체방은 비밀이다', why: '단체방 글도 저장·전달되어 퍼져요.' },
    ];
    // 거북이 판: 별 = 멈춤 → 허락받았나 → 누가 상처받나, 집 = 올리지 않음, 바위 = 바로 올리기
    const ROUTE = { cols: 5, rows: 4, start: { x: 0, y: 3, dir: 'E' }, goal: { x: 3, y: 3 }, stars: [[1, 3], [1, 2], [2, 2]], rocks: [[2, 3]], maxBlocks: 12 };
    const BUGGY = ['fwd', 'fwd', 'fwd', 'right', 'fwd', 'fwd', 'right', 'fwd'];
    M.push(
      X('intro.post-or-not', {
        title: '올려도 될까 나누기', method: '올려도 될까 나누기', tool: 'sortboard', minutes: 6,
        levels: { easy: '교사가 카드 4장으로 \'올려도 됨\'과 \'안 됨\' 두 칸만 함께 나눈다.', base: '카드 8장을 \'올려도 됨·안 됨·허락 먼저\' 세 칸에 나눈다.', challenge: '\'허락 먼저\' 카드마다 누구의 허락이 필요한지 말한다.' },
        intro: {
          teacher: '"이 사진과 영상, 올려도 될까요?" 시연 단추로 카드가 \'올려도 됨·안 됨·허락 먼저\' 바구니에 들어가는 모습을 보인다. "선생님 얼굴은 다 아니까 올려도 돼요"라는 말에는 "아는 얼굴이면 허락이 필요 없을까요? 내 얼굴이 허락 없이 올라가면 어떨까요?"라고 되묻는다. 오늘은 온라인에서도 선생님을 존중하는 방법을 배운다고 밝힌다.',
          student: '사진과 영상 카드를 보고 \'올려도 됨·안 됨·허락 먼저\' 가운데 어디일지 짝과 먼저 정해 보아요.',
          demo: { tool: 'sortboard', options: { slots: ['올려도 됨', '안 됨', '허락 먼저'], cards: ['내가 그린 그림', '몰래 찍은 수업 영상', '친구 얼굴이 나온 사진', '허락받은 반 단체 사진', '선생님 흉내 놀림 영상', '선생님과 함께 찍은 사진', '내가 만든 작품 사진', '선생님 실수 장면'] },
            sequence: [{ sort: { '올려도 됨': ['내가 그린 그림'], '안 됨': ['몰래 찍은 수업 영상'], '허락 먼저': ['친구 얼굴이 나온 사진'] } }, { sort: { '올려도 됨': ['내가 그린 그림', '허락받은 반 단체 사진', '내가 만든 작품 사진'], '안 됨': ['몰래 찍은 수업 영상', '선생님 흉내 놀림 영상', '선생님 실수 장면'], '허락 먼저': ['친구 얼굴이 나온 사진', '선생님과 함께 찍은 사진'] } }] },
          art: art('three paper baskets on a paper shelf labelled with a check, a cross and a raised hand, with small paper photo cards above', '올려도 될까?', 'star', 'mint'),
        },
        notes: '학생에게 선생님 사진을 올린 적이 있는지 묻지 않는다. 카드 장면은 모두 지어낸 것이다.',
      }),
      X('intro.spread-graph', {
        title: '게시물이 퍼지는 막대그래프', method: '게시물이 퍼지는 막대그래프', tool: 'chart', minutes: 6,
        levels: { easy: '교사가 1·2단계 막대(3명·9명)만 함께 그린다.', base: '네 단계 막대(3·9·27·81명)를 완성하고 늘어나는 모양을 말한다.', challenge: '지우려면 몇 명에게 부탁해야 할지(3+9+27+81명) 짐작해 말한다.' },
        intro: {
          teacher: '"한 명이 세 명에게 보내고, 받은 사람이 또 세 명에게 보내면 몇 명이 볼까요? 셈 연습용 가상 모형이에요." 시연 단추로 막대가 3·9·27·81로 커지는 모습을 보인다. "지우면 되잖아요"라는 말에는 "81명이 받은 뒤에 내 것만 지우면 다 사라질까요?"라고 되묻는다. 몇 단계 만에 학교 전체가 볼 수 있을지 짐작하게 한다.',
          student: '단계마다 보는 사람이 몇 명으로 늘어나는지 막대를 읽고, 지우기가 왜 어려운지 짝에게 말해 보아요.',
          demo: { tool: 'chart', options: { type: 'bar', mode: 'build', title: '한 명이 세 명에게 보내면(가상 모형)', unit: '명', xLabel: '보낸 단계', yLabel: '받은 사람 수', data: [['1단계', 3], ['2단계', 9], ['3단계', 27], ['4단계', 81]], max: 90, scale: 10, step: 1 }, sequence: [{ build: true }] },
          art: art('a paper phone sending small paper arrows that split into three, then nine, then many more, like a growing paper tree', '한 번 올리면 얼마나 퍼질까?', 'cloud', 'sky'),
        },
        notes: '3·9·27·81 은 곱셈으로 지은 가상 모형이다. 실제 퍼짐 통계가 아니라고 밝힌다.',
      }),
      X('activity.video-choice', {
        title: '수업 중 찍힌 영상 갈림길', method: '수업 중 찍힌 영상 갈림길', tool: 'dilemma', minutes: 14,
        levels: { easy: '갈림 1번(올릴지 말릴지)에서 고르고 근거 한 장을 고른다.', base: '갈림 2번("재미로 그런 건데"라는 말)까지 지나 근거를 고른다.', challenge: '갈림 3번(이미 퍼진 뒤 할 행동)까지 따라가 근거를 모두 고르고 다른 길과 견준다.' },
        activity: {
          title: '갈림길: 수업 중 찍힌 영상', tool: 'dilemma',
          teacher: '"친구가 선생님 실수 장면을 찍어 올리려 해요. 나는 어떻게 할까요?" 고를 때마다 결과와 영향을 읽게 한다. "올린 건 친구니까 나는 상관없어요"라는 말에는 "받아 보고 웃음 표시를 다는 것도 퍼짐을 키울까요?"라고 되묻는다. 이미 퍼졌어도 어른께 알리면 함께 멈출 수 있고, 알린 사람은 잘한 것이라는 점을 짚는다.',
          task: '갈림길마다 고르고 결과를 읽은 뒤, 끝에서 내 선택의 근거를 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: DIL({
            title: '수업 중 찍힌 영상', steps: VIDEO, ending: '말리고 알린 덕분에 영상이 멈추고 반의 믿음이 돌아왔어요.',
            reasons: VIDEO_R, good: ['consent', 'spread', 'stopit'],
            talk: '모둠에서 "선생님 영상을 받았을 때 할 일"을 차례대로 말해요.',
            conclude: '허락 없이 찍은 영상은 올리지 않고, 퍼졌다면 어른께 알려 함께 멈춰요.',
          }),
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '선생님 사진·영상은 ___ 없이 찍거나 올리지 않아요.', answer: '허락' }] },
        notes: '결은 지어낸 인물이다. 실제 영상을 찍은 학생을 찾거나 탓하는 활동으로 쓰지 않는다.',
      }),
      X('activity.think-route', {
        title: '게시 전 생각 경로 코딩', method: '게시 전 생각 경로 코딩', tool: 'block-coding', minutes: 14,
        levels: { easy: '작은 판(별 칸 2개: 멈춤·허락받았나)에서 블록 6개 이내로 거북이를 집 칸에 닿게 한다.', base: '큰 판에서 별 칸 3개(멈춤·허락받았나·누가 상처받나)를 지나 바위(바로 올리기)를 피해 집(올리지 않음)에 닿게 하고, 둘째 문항에서 바위에 부딪히는 프로그램을 한 블록만 고친다.', challenge: '같은 큰 판을 블록 8개 이하로 지나 집에 닿게 한다.' },
        activity: {
          title: '거북이의 생각 경로', tool: 'block-coding',
          teacher: '"별 칸은 차례로 멈춤, 허락받았나, 누가 상처받나예요. 집 칸은 올리지 않음, 바위는 바로 올리기예요." 칠판에 판을 그리고 칸 이름을 적어 둔다(교구 판에는 칸 이름이 없다). "곧장 가면 빠른데요"라는 학생에게 "곧장 가면 바위(바로 올리기)에 부딪혀요. 올리기 전에 멈추고 생각하는 길로 돌아가요"라고 말해 준다. 블록을 붙인 뒤 실행을 눌러 확인하게 한다.',
          task: '거북이가 별 칸(멈춤·허락받았나·누가 상처받나)을 지나 집(올리지 않음)에 닿도록 블록을 놓아요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '별 칸 세 곳을 모두 지나 바위를 피해 집 칸에 닿도록 블록을 놓아요.', toolOptions: ROUTE, target: { reach: true, stars: true }, difficulty: 0.25,
              levels: {
                easy: { prompt: '별 칸 두 곳을 지나 집 칸에 닿도록 블록을 6개 이내로 놓아요.', toolOptions: { cols: 4, rows: 3, start: { x: 0, y: 2, dir: 'E' }, goal: { x: 3, y: 2 }, stars: [[1, 2], [2, 2]], rocks: [[2, 0]], maxBlocks: 6 }, target: { reach: true, stars: true, maxBlocks: 6 } },
                challenge: { prompt: '별 칸 세 곳을 지나 집에 닿되, 블록을 8개 이하로 놓아요.', target: { reach: true, stars: true, maxBlocks: 8 } },
              } },
            { prompt: '바위(바로 올리기)에 부딪히는 프로그램을 한 블록만 고쳐 집에 닿게 해요.', toolOptions: ROUTE, state: { program: BUGGY }, target: { reach: true, stars: true, maxEdits: 1, from: BUGGY }, difficulty: 0.3,
              conclude: '올리기 전에 멈추고, 허락받았는지, 누가 상처받을지 생각하면 바로 올리지 않게 돼요.' },
            { prompt: '별 칸 세 곳의 뜻을 차례대로 짝에게 말하고, 바위를 피하는 까닭도 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '올리기 전 생각 경로를 차례대로 써요.', columns: ['1', '2', '3', '4'], cells: [['', '', '', '']], answer: '멈춤, 허락받았나, 누가 상처받나, 올리지 않음' }] },
        notes: '거북이 판에는 칸 이름이 없다. 별·집·바위 칸의 뜻은 칠판과 활동지에 적어 준다.',
      }),
      X('activity.slander-result', {
        title: '비방 글의 원인과 결과', method: '비방 글의 원인과 결과', tool: 'mindmap', minutes: 14,
        levels: { easy: '원인·결과 가지에 카드를 하나씩(2장) 잇는다.', base: '원인·결과·바른 대안 가지에 카드 9장을 나누고, 둘째 문항에서 가장 좋은 대안 카드를 고른다.', challenge: '함정 카드가 섞인 판에서 나누고, 둘째 문항에서 헷갈리는 대안을 가려 고른 뒤 까닭을 말한다.' },
        activity: {
          title: '비방 글 생각그물', tool: 'mindmap',
          teacher: '"게시판에 선생님을 깎아내리는 글이 올라왔다고 생각해 봐요. 왜 그런 글을 쓰게 될까요? 그 뒤엔 무슨 일이 생길까요?" 실제 비방 문구는 화면과 칠판에 쓰지 않는다. "익명이라 아무도 몰라요"라는 말에는 "읽은 선생님의 마음은 어떨까요? 쓴 사람도 나중에 후회하지 않을까요?"라고 되묻는다. 화가 난 마음은 바른 대안으로 전할 수 있다는 점을 짚는다.',
          task: '가운데 \'선생님 비방 글\'에서 원인·결과·대안 가지로 카드를 나누고, 가장 좋은 대안을 골라요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORT('‘선생님 비방 글’의 원인·결과·대안 카드를 가지에 나누어요.', { topic: '선생님 비방 글', slots: ['원인', '결과', '바른 대안'], groups: { 원인: ['화가 남', '남을 따라 함', '재미로'], 결과: ['선생님 마음의 상처', '학교 믿음이 깨짐', '쓴 사람도 후회'], '바른 대안': ['직접 의견 말하기', '쪽지로 전하기', '믿는 어른과 의논'] }, easy: 1, traps: ['익명이면 괜찮음'] }, 0.25),
            PICK('비방 글을 쓰고 싶을 만큼 화날 때 가장 좋은 대안을 골라요.', '가장 좋은 대안', ['숨 고르고 직접 말하기'], ['더 센 글 쓰기', '모른 척 참기만 하기'], { easy: 1, easyTraps: 1, extraTraps: ['친구에게 대신 쓰게 하기'], mode: 'pick' }, 0.2,
              { conclude: '비방 글은 선생님과 학교의 믿음, 쓴 사람 모두에게 상처를 남겨요. 화난 마음은 바른 대안으로 전해요.' }),
            { prompt: '모둠에서 고른 대안이 왜 가장 좋은지 까닭을 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '선생님 비방 글을 보았을 때 할 수 있는 바른 행동 하나를 써요.' }] },
      }),
      X('activity.digital-campaign', {
        title: '디지털 존중 캠페인 카드', method: '디지털 존중 캠페인 카드', tool: 'collage', minutes: 14,
        levels: { easy: '틀(멈춤 표시 자리)에 조각 3개 이상을 붙이고 점검 칸 2개를 표시한다.', base: '빨간 동그라미 멈춤 표시를 넣어 조각 5개 이상으로 카드를 만들고 점검 칸 3개를 표시한다.', challenge: '점검 칸 4개를 표시하고, 둘째 문항에서 동생들용 쉬운 카드를 한 장 더 만든다.' },
        activity: {
          title: '캠페인 카드 꾸미기', tool: 'collage',
          teacher: '"학년 게시판에 붙일 디지털 존중 캠페인 카드를 만들어요. 구호, 멈춤 그림, 대안 행동 세 가지가 들어가요." 판에는 글자를 붙일 수 없어 구호는 활동지에 쓰고 판에는 구호 자리만 남긴다고 알려 준다. 멈춤 표시는 빨간 동그라미 조각으로 만든다. "멋있으면 된 거죠"라는 학생에게 "이 카드를 본 동생이 무엇을 하면 될지 알 수 있을까요?"라고 묻는다.',
          task: '멈춤 표시와 대안 행동 그림을 조각으로 붙여 캠페인 카드를 만들고, 점검 칸에 표시해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '빨간 동그라미 멈춤 표시를 넣어 캠페인 카드를 꾸미고 점검해요.', toolOptions: { shapes: SHAPES, colors: COLORS, maxPieces: 16 }, target: { selfCheck: ['멈춤 표시를 붙였다', '대안 행동 그림을 붙였다', '구호 자리를 남겼다'], minPieces: 5, has: [{ shape: 'circle', color: '빨강', min: 1 }] }, difficulty: 0.15,
              levels: {
                easy: { prompt: '틀에 조각을 3개 이상 붙여 캠페인 카드를 꾸며요.', target: { selfCheck: ['멈춤 표시를 붙였다', '대안 행동 그림을 붙였다'], minPieces: 3 } },
                challenge: { prompt: '멈춤 표시를 넣어 카드를 꾸미고 점검 네 칸을 표시해요.', target: { selfCheck: ['멈춤 표시를 붙였다', '대안 행동 그림을 붙였다', '구호 자리를 남겼다', '멀리서도 잘 보인다'], minPieces: 5, has: [{ shape: 'circle', color: '빨강', min: 1 }] } },
              } },
            { prompt: '동생들이 알아보기 쉬운 캠페인 카드를 한 장 더 꾸며요.', toolOptions: { shapes: SHAPES, colors: COLORS, maxPieces: 12 }, target: { selfCheck: ['그림만 봐도 뜻을 안다', '색을 밝게 썼다'], minPieces: 3 }, difficulty: 0.1,
              conclude: '멈춤 표시와 대안 행동이 함께 있으면 보는 사람이 무엇을 할지 알 수 있어요.' },
            { prompt: '모둠 구호를 정해 활동지에 쓰고, 카드와 함께 소리 내어 읽어요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '우리 모둠 디지털 존중 구호를 써요.' }] },
        notes: '콜라주 판에는 글자를 붙일 수 없어 구호는 활동지에 쓴다.',
      }),
      X('wrap.account-check', {
        title: '내 계정 존중 점검표', method: '내 계정 존중 점검표', tool: 'kitchen', minutes: 6,
        levels: { easy: '점검 칸 2개(허락 없이 찍지 않기·올리기 전 멈추기)를 고른다.', base: '점검 칸 4개를 모두 고른다.', challenge: '점검 칸 4개를 고르고, 반 단체방 규칙 제안 한 줄을 쓴다.' },
        wrap: {
          teacher: '"내 계정과 단체방에서 지킬 것을 점검해요." 함정 칸(\'재미있는 영상은 바로 공유\')을 고른 학생에게 "그 영상 속 사람에게 허락을 받았나요?"라고 묻는다. 출구 2번에서 \'모른 척한다\'를 고른 학생에게 "모른 척하면 영상이 계속 퍼져요. 어른께 알리는 건 고자질이 아니라 돕는 일이에요"라고 말해 준다.',
          exitTicket: [
            EX('kitchen', CHK('내 계정에서 지킬 것에 표시해요.', '내 계정 존중 점검표', ['허락 없이 찍지 않기', '올리기 전 멈추기', '비방 글에 반응 안 하기', '문제 글은 어른께 알리기'], ['재미있는 영상은 바로 공유'], { easy: 2, base: 4 })),
            { type: 'choice', prompt: '단체방에 선생님 몰래 찍은 영상이 올라왔어요. 알맞은 행동은?', options: ['웃음 표시를 단다', '모른 척한다', '반응하지 않고 어른께 알린다'], answer: 2, difficulty: 0.15, explain: '반응하지 않고 어른께 알리면 퍼짐을 멈출 수 있어요.' },
            { type: 'short', prompt: '우리 반 단체방 규칙으로 제안할 한 줄을 써요.' },
          ],
        },
        worksheet: {
          title: '내 계정 존중 점검',
          items: [
            { type: 'check', prompt: '내가 지킬 것에 표시해요.', options: ['허락 없이 찍지 않기', '올리기 전 멈추기', '비방 글에 반응 안 하기', '문제 글은 어른께 알리기'] },
            { type: 'short', prompt: '올리기 전에 나에게 물어볼 질문 하나를 써요.' },
          ],
          easy: { note: '올리기 전에 멈추고, 허락을 받았는지 생각해요.', items: [{ type: 'draw', prompt: '올리기 전에 멈추는 내 모습을 그려요.' }] },
        },
      }),
      X('wrap.pledge', {
        title: '디지털 존중 다짐 두 문장', method: '디지털 존중 다짐 두 문장', tool: 'rubric-writing', minutes: 6,
        levels: { easy: '문장 틀을 보고 한 문장 이상 쓰고 기준 2개를 점검한다.', base: '두 문장 이상 쓰고 기준 3개(구체적 행동·지킬 수 있음·때)를 점검한다.', challenge: '세 문장 이상 쓰고 친구에게 권하는 문장(\'함께\'·\'우리\'를 넣음)을 더해 기준 4개를 점검한다.' },
        wrap: {
          teacher: '"중학생이 되어서도 지킬 디지털 존중 다짐을 두 문장으로 써 볼까요?" 문장 틀을 칠판에 적어 둔다. "선생님을 존중하겠다"처럼 막연하게 쓴 학생에게 "무엇을 하거나 하지 않으면 존중일까요? \'허락 없이 찍지 않겠다\'처럼 행동으로 써 봐요"라고 묻는다.',
          exitTicket: [
            RUBX('중학생이 되어서도 지킬 디지털 존중 다짐을 써요', { topic: '중학생이 되어서도 지킬 디지털 존중 다짐을 써요(이름은 쓰지 않아요).', starter: '나는 ___ 때 ___ 하겠다. 나는 ___ 하지 않겠다.', crit: ['구체적인 행동을 썼다', '내가 지킬 수 있다', '언제 할지 썼다'], must: [['함께', '우리']], chars: [20, 180], title: '디지털 존중 다짐', sents: [1, 2, 3], chCrit: '친구에게 권하는 문장을 넣었다', chPrompt: '다짐 두 문장을 쓰고, 친구에게 권하는 문장도 더해요.' }),
            { type: 'choice', prompt: '구체적인 다짐은?', options: ['선생님을 잘 존중하겠다', '허락 없이 사진을 찍지 않겠다', '착하게 살겠다'], answer: 1, difficulty: 0.15, explain: '무엇을 할지 행동으로 쓰면 지키기 쉬워요.' },
          ],
        },
        worksheet: {
          title: '디지털 존중 다짐',
          items: [
            { type: 'short', prompt: '내 디지털 존중 다짐 두 문장을 써요.' },
            { type: 'short', prompt: '친구에게 권하고 싶은 디지털 존중 행동 하나를 써요.' },
          ],
        },
      }),
    );
  }

  // ======== 5-6학년 · 서로 존중하는 학급 헌장 만들기 (research-mandatory §1 교육활동 침해행위 예방교육, §2 학생 권리와 책임) ========
  {
    const X = mk('class-charter', [5, 6]);
    const MEET = ['안건 소개', '모둠 발표', '질문 나누기', '투표하기', '헌장 확정'];
    const B = {
      sit: { id: 'sit', text: '종이 치면 자리에 앉기', price: 300 },
      hand: { id: 'hand', text: '말할 때 손 들기', price: 200 },
      listen: { id: 'listen', text: '설명을 끝까지 듣기', price: 300 },
      photo: { id: 'photo', text: '허락 없이 찍지 않기', price: 200 },
      word: { id: 'word', text: '서로 고운 말 쓰기', price: 300 },
      clean: { id: 'clean', text: '날마다 1시간 청소', price: 600 },
      quiet: { id: 'quiet', text: '하루 종일 말 안 하기', price: 500 },
    };
    M.push(
      X('intro.index-graph', {
        title: '가상 학급 존중 기록 그래프', method: '가상 학급 존중 기록 그래프', tool: 'chart', minutes: 6,
        levels: { easy: '교사가 1주와 4주 두 점만 짚어 견주게 한다.', base: '네 주의 흐름을 읽고 헌장을 만든 뒤(2주부터) 어떻게 바뀌었는지 말한다.', challenge: '수업이 멈춘 횟수가 줄어든 원인을 모둠이 짐작해 말한다.' },
        intro: {
          teacher: '"이 꺾은선그래프는 지어낸 학급의 \'수업이 멈춘 횟수\'를 주마다 센 가상 자료예요. 이 반은 2주 째에 학급 헌장을 만들었어요." 시연 단추로 가장 적은 4주를 고르는 모습을 보인다. "헌장은 종이일 뿐이라 바뀌는 게 없어요"라는 말에는 "1주와 4주의 점을 견주어 볼까요? 무엇이 달라졌을까요?"라고 되묻는다. 헌장은 함께 지킬 때 힘이 생긴다는 데로 잇는다.',
          student: '그래프(가상)에서 수업이 멈춘 횟수가 주마다 어떻게 바뀌었는지 읽고, 그 까닭을 짝과 짐작해 보아요.',
          demo: CHART('line', '수업이 멈춘 횟수(가상 학급)', [['1주', 9], ['2주', 7], ['3주', 4], ['4주', 2]], '가장 적은 주는?', 3, { unit: '번', xLabel: '주', yLabel: '멈춘 횟수' }),
          art: art('a paper line chart going down step by step, with a small paper scroll labelled with a heart beside the second point', '헌장을 만든 뒤 무엇이 바뀌었을까?', 'star', 'buttercup'),
        },
        notes: '그래프 수치는 수업용 가상 자료다. 우리 반의 기록으로 바꾸지 않는다(특정 학생을 떠올리게 할 수 있다).',
      }),
      X('intro.both-feeling', {
        title: '학생과 선생님 모두의 마음', method: '학생과 선생님 모두의 마음', tool: 'emotion', minutes: 6,
        levels: { easy: '교사가 학생 칸 하나에만 마음 카드를 함께 짝 짓는다.', base: '학생과 선생님 칸에 마음 카드를 각각 짝 짓는다.', challenge: '두 사람이 바라는 것이 같은 점(조용히 배우고 가르치는 시간)을 고른다.' },
        intro: {
          teacher: '"수업이 자주 멈추는 교실이에요. 배우고 싶은 학생과 가르치는 선생님은 각각 어떤 마음일까요?" 시연 단추로 학생 칸에 \'속상함\', 선생님 칸에 \'걱정\'이 붙는 모습을 보인다. "선생님은 어른이라 괜찮아요"라는 말에는 "선생님도 수업이 멈추면 마음이 어떨까요? 어른도 마음이 있어요"라고 되묻는다. 두 사람이 바라는 것이 같다는 점을 짚는다.',
          student: '수업이 자주 멈추는 교실에서 학생과 선생님의 마음을 각각 골라 보고, 둘이 바라는 것이 같은 점을 찾아보아요.',
          demo: { tool: 'emotion', options: { mode: 'match', slots: [{ id: 's1', label: '배우고 싶은 학생의 마음' }, { id: 's2', label: '가르치는 선생님의 마음' }], cards: ['속상함', '걱정', '신남', '뿌듯함'], shuffle: false }, sequence: [{ match: { s1: '속상함' } }, { match: { s1: '속상함', s2: '걱정' } }] },
          art: art('a paper classroom with a teacher and students both looking at a paused paper clock, with small paper hearts above both', '모두의 마음은?', 'heart', 'peach'),
        },
      }),
      X('activity.rights-branches', {
        title: '배울 권리·가르치는 일 가지', method: '배울 권리·가르치는 일 가지', tool: 'mindmap', minutes: 14,
        levels: { easy: '가지 2개(학생이 바라는 것·선생님이 바라는 것)에 카드를 나눈다.', base: '가지 3개(함께 지킬 것 더함)에 카드 6장을 나눈다.', challenge: '카드 8장을 나누고, 셋째 문항에서 함께 지킬 것 카드를 모둠이 직접 만들어 말한다.' },
        activity: {
          title: '서로 존중하는 교실 생각그물', tool: 'mindmap',
          teacher: '"가운데는 \'서로 존중하는 교실\'이에요. 학생이 바라는 것과 선생님이 바라는 것은 무엇일까요?" 카드를 붙일 때마다 누가 바라는지 말하게 한다. "권리는 학생에게만 있어요"라는 말에는 "선생님이 끝까지 설명할 수 있어야 우리가 배울 수 있지 않을까요?"라고 되묻는다. 함께 지킬 것은 두 바람을 모두 지키는 약속이라는 점을 짚는다.',
          task: '가운데 \'서로 존중하는 교실\'에서 가지마다 알맞은 카드를 나누어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
          items: [
            { prompt: '학생이 바라는 것·선생님이 바라는 것·함께 지킬 것 가지에 카드를 나누어요.', toolOptions: { topic: '서로 존중하는 교실', slots: ['학생이 바라는 것', '선생님이 바라는 것', '함께 지킬 것'], cards: ['조용히 배우는 시간', '끝까지 설명할 시간', '말할 때 차례 지키기', '궁금한 걸 물을 기회', '집중하는 교실', '고운 말 쓰기'] },
              target: { sort: { '학생이 바라는 것': ['조용히 배우는 시간', '궁금한 걸 물을 기회'], '선생님이 바라는 것': ['끝까지 설명할 시간', '집중하는 교실'], '함께 지킬 것': ['말할 때 차례 지키기', '고운 말 쓰기'] } }, difficulty: 0.2,
              levels: {
                easy: { prompt: '학생이 바라는 것·선생님이 바라는 것 가지에 카드를 나누어요(카드 4장).', toolOptions: { slots: ['학생이 바라는 것', '선생님이 바라는 것'], cards: ['조용히 배우는 시간', '끝까지 설명할 시간', '궁금한 걸 물을 기회', '집중하는 교실'] }, target: { sort: { '학생이 바라는 것': ['조용히 배우는 시간', '궁금한 걸 물을 기회'], '선생님이 바라는 것': ['끝까지 설명할 시간', '집중하는 교실'] } } },
                challenge: { prompt: '세 가지에 카드를 나누어요(카드 8장).', toolOptions: { cards: ['조용히 배우는 시간', '끝까지 설명할 시간', '말할 때 차례 지키기', '궁금한 걸 물을 기회', '집중하는 교실', '고운 말 쓰기', '안전한 교실', '허락 없이 찍지 않기'] },
                  target: { sort: { '학생이 바라는 것': ['조용히 배우는 시간', '궁금한 걸 물을 기회', '안전한 교실'], '선생님이 바라는 것': ['끝까지 설명할 시간', '집중하는 교실'], '함께 지킬 것': ['말할 때 차례 지키기', '고운 말 쓰기', '허락 없이 찍지 않기'] } } },
              } },
            SORT('수업 장면 카드를 배울 권리를 지킴·해침 가지에 나누어요.', { topic: '배울 권리', slots: ['지킴', '해침'], groups: { 지킴: ['설명 중 끼어들지 않기', '모둠 활동에 함께하기'], 해침: ['수업 중 큰 소리 장난', '선생님 말 흉내 내기'] }, easy: 1, extra: { 지킴: ['궁금하면 손 들고 묻기'], 해침: ['몰래 수업 찍기'] } }, 0.2,
              { conclude: '학생의 배울 권리와 선생님의 가르치는 일은 함께 지켜야 둘 다 지켜져요.' }),
            { prompt: '모둠에서 \'함께 지킬 것\' 카드를 하나 새로 만들어 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '가지마다 하나씩 써요.', columns: ['학생이 바라는 것', '선생님이 바라는 것', '함께 지킬 것'], cells: [['', '', '']] }] },
      }),
      X('activity.priority-budget', {
        title: '약속 고르기 점수 예산', method: '약속 고르기 점수 예산', tool: 'economy', minutes: 14,
        levels: { easy: '예산 600원(=6점) 안에서 \'설명을 끝까지 듣기\'를 넣어 약속 카드를 고른다.', base: '예산 1000원(=10점) 안에서 꼭 넣을 약속 하나를 넣고, 지키기 어려운 카드는 빼고 고른다.', challenge: '다른 모둠 후보 둘(허락 없이 찍지 않기·서로 고운 말 쓰기)을 꼭 넣어 1000원 안에서 다시 고른다.' },
        activity: {
          title: '헌장 후보 약속 고르기', tool: 'economy',
          teacher: '"약속 카드마다 지키는 데 드는 노력 점수가 있어요. 교구는 돈으로 세니까 1점을 100원으로 볼게요. 10점, 곧 1000원 안에서 골라요." 칠판에 1점 = 100원이라고 적어 둔다. "많이 고를수록 좋은 헌장이에요"라는 학생에게 "다 고르면 지킬 수 있을까요? 꼭 필요한 것부터 골라요"라고 묻는다. \'날마다 1시간 청소\'처럼 지키기 어려운 약속은 헌장에 맞지 않는다는 점을 짚는다.',
          task: '노력 점수(1점 = 100원) 예산 안에서 우리 모둠 헌장 후보 약속을 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '10점(1000원) 안에서 \'설명을 끝까지 듣기\'를 넣고, 너무 어려운 약속은 빼고 골라요.', toolOptions: { mode: 'budget', budget: 1000, items: [B.sit, B.clean, B.hand, B.listen, B.quiet, B.photo, B.word], ask: '노력 점수 10점(1점=100원) 안에서' }, target: { budget: { max: 1000, must: ['listen'], not: ['clean', 'quiet'] } }, difficulty: 0.25,
              levels: {
                easy: { prompt: '6점(600원) 안에서 \'설명을 끝까지 듣기\'를 넣어 골라요.', toolOptions: { budget: 600, ask: '노력 점수 6점(1점=100원) 안에서' }, target: { budget: { max: 600, must: ['listen'], not: ['clean', 'quiet'] } } },
                challenge: { prompt: '다른 모둠 후보 \'찍지 않기\'·\'고운 말\'을 넣어 10점 안에서 다시 골라요.', target: { budget: { max: 1000, must: ['photo', 'word'], not: ['clean', 'quiet'] } } },
              } },
            { prompt: '예산이 5점(500원)으로 줄었어요. 수업을 지키는 데 가장 필요한 것을 골라요.', toolOptions: { mode: 'budget', budget: 500, items: [B.sit, B.clean, B.hand, B.listen, B.quiet], ask: '노력 점수 5점(1점=100원) 안에서' }, target: { budget: { max: 500, must: ['listen'], not: ['clean', 'quiet'] } }, difficulty: 0.3,
              conclude: '헌장 약속은 많이보다 꼭 필요하고 지킬 수 있는 것으로 골라요.' },
            { prompt: '모둠이 고른 약속과 그 까닭을 다른 모둠에게 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '우리 모둠이 헌장 후보로 고른 약속과 까닭을 써요.' }] },
        notes: 'economy 교구는 돈(원)만 세어, 노력 점수 1점을 100원으로 두었다. 칠판에 1점 = 100원을 적어 두고 점수로 말한다.',
      }),
      X('activity.charter-write', {
        title: '학급 헌장 문장 쓰기', method: '학급 헌장 문장 쓰기', tool: 'rubric-writing', minutes: 14,
        levels: { easy: '문장 틀을 보고 두 문장 이상 쓰고 기준 2개를 점검한다.', base: '헌장 문장 세 개를 쓰고 기준 3개(모두 해당·지킬 수 있음·구체적)를 점검한다.', challenge: '세 문장에 헌장을 어겼을 때 다시 돌아보는 방법 한 문장을 더하고(\'다시\'·\'돌아보\'를 넣음) 기준 4개를 점검한다.' },
        activity: {
          title: '헌장 문장 쓰고 점검하기', tool: 'rubric-writing',
          teacher: '"우리 반 헌장 문장 세 개를 써요. 학생과 선생님 모두에게 해당하는 문장이어야 해요." 칠판에 문장 틀을 적어 둔다. "떠들지 않는다"처럼 학생만 겨냥한 문장에는 "선생님과 학생이 함께 지킬 수 있게 바꿀 수 있을까요? \'우리는 서로 말할 때 끝까지 듣는다\'처럼요"라고 말해 준다. "헌장은 한 번 쓰면 끝이에요"라는 말에는 "지키지 못한 날은 어떻게 할까요?"라고 되묻는다.',
          task: '모둠이 함께 지킬 학급 헌장 문장을 쓰고, 기준표로 점검해요(이름은 쓰지 않아요).', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RUB('학생과 선생님 모두 지킬 학급 헌장 문장 세 개를 써요', { topic: '학생과 선생님이 함께 지킬 학급 헌장 문장 세 개를 써요(이름은 쓰지 않아요).', starter: '우리는 ___ 한다. 우리는 ___ 하지 않는다. 우리는 ___ 때 ___ 한다.', crit: ['학생·선생님 모두 해당한다', '지킬 수 있다', '구체적이다'], must: [['다시', '돌아보']], chars: [30, 220], title: '학급 헌장', sents: [2, 3, 4], chCrit: '어겼을 때 돌아보는 방법을 썼다', chPrompt: '헌장 세 문장에 어겼을 때 다시 돌아보는 방법 한 문장을 더해요.' }, 0.25),
            RUB('가상 헌장 "떠들지 않는다."를 모두에게 해당하게 고쳐 써요', { topic: '가상 학급 헌장 "떠들지 않는다."를 학생·선생님 모두에게 해당하고 구체적인 문장으로 고쳐 써요.', starter: '우리는 ___ 때 ___ 한다.', crit: ['모두에게 해당한다', '언제인지 넣었다', '할 행동으로 썼다'], chars: [15, 140], title: '헌장 고쳐 쓰기', sents: [1, 1, 2] }, 0.2),
            { prompt: '모둠이 쓴 헌장 문장 가운데 하나를 골라 다른 모둠에 소리 내어 읽어요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '우리 모둠 헌장 문장 하나를 써요.' }] },
      }),
      X('activity.meeting-order', {
        title: '학급 회의 진행 차례', method: '학급 회의 진행 차례', tool: 'story', minutes: 14,
        levels: { easy: '회의 장면 카드 3장(안건 소개·모둠 발표·질문 나누기)을 차례로 놓는다.', base: '장면 카드 5장을 차례로 놓고, 둘째 문항에서 사회자 말풍선 빈칸 2개를 채운다.', challenge: '틀린 장면 카드 하나를 빼고 5장을 놓고, 의견이 갈릴 때 사회자가 할 말까지 말풍선 빈칸 3개를 채운다.' },
        activity: {
          title: '학급 회의 차례와 사회자 말', tool: 'story',
          teacher: '"헌장을 확정하는 학급 회의를 해요. 무엇부터 할까요?" 장면 카드를 놓을 때마다 왜 그 차례인지 말하게 한다. "투표부터 하면 빨라요"라는 학생에게 "모둠 발표와 질문 없이 투표하면 무엇을 보고 고를까요?"라고 되묻는다. 의견이 갈릴 때 사회자는 편들지 않고 양쪽 까닭을 듣게 한다는 점을 짚는다.',
          task: '학급 회의 장면 카드를 차례로 놓고, 사회자 말풍선을 채워요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '헌장을 정하는 학급 회의 장면 카드를 차례로 놓아요.', toolOptions: { mode: 'order', slots: 5, cards: [MEET[2], MEET[0], MEET[4], MEET[3], MEET[1]] }, target: { order: MEET }, difficulty: 0.2,
              levels: {
                easy: { prompt: '학급 회의 장면 카드를 차례로 놓아요(카드 3장).', toolOptions: { slots: 3, cards: [MEET[2], MEET[0], MEET[1]] }, target: { order: MEET.slice(0, 3) } },
                challenge: { prompt: '학급 회의 장면 카드를 차례로 놓아요(틀린 카드 하나는 빼요).', toolOptions: { cards: [MEET[2], MEET[0], MEET[4], MEET[3], MEET[1], '사회자 혼자 결정'] } },
              } },
            FILL('사회자 말풍선 빈칸을 알맞은 카드로 채워요.', '사회자', [['오늘 안건은 ___입니다.', '학급 헌장 정하기'], ['질문이 있으면 ___.', '손 들고 말해 주세요'], ['의견이 갈리니 ___.', '양쪽 까닭을 들어 봐요']], ['학급 헌장 정하기', '제 생각대로 할게요', '손 들고 말해 주세요', '양쪽 까닭을 들어 봐요'], '학급 회의(지어낸 장면)', 0.2,
              { conclude: '안건 소개 → 모둠 발표 → 질문 → 투표 → 확정 차례로 하면 모두의 의견이 헌장에 담겨요.' }),
            { prompt: '모둠에서 사회자 역할을 돌아가며 맡아 첫마디를 말해 봐요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '학급 회의 차례를 써요.', columns: ['1', '2', '3', '4', '5'], cells: [['', '', '', '', '']], answer: '안건 소개, 모둠 발표, 질문 나누기, 투표하기, 헌장 확정' }] },
      }),
      X('wrap.month-check', {
        title: '한 달 실천 점검판', method: '한 달 실천 점검판', tool: 'timer', minutes: 6,
        levels: { easy: '헌장 문장 1개의 첫 주 목표 날 수를 기록판에 적는다.', base: '헌장 문장 3개의 첫 주 목표 날 수를 적는다.', challenge: '문장 3개의 목표를 적고, 둘째 질문에서 서로 점검할 짝 정하기까지 표시한다.' },
        wrap: {
          teacher: '"헌장은 쓰고 끝이 아니라 지키면서 자라요. 문장마다 이번 주 며칠 지킬지 목표를 적어요." 기록판 칸에 1~5일을 적게 한다. "다섯 날 다 지킬 거예요"라는 학생에게 "처음부터 다섯 날이 어렵다면 세 날부터 시작해도 돼요. 지킬 수 있는 목표가 좋은 목표예요"라고 말해 준다. 주별 표시는 활동지 표에 한다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '헌장 첫 주 목표', unit: '일', fields: [{ label: '헌장 1번 목표', unit: '일', max: 5 }, { label: '헌장 2번 목표', unit: '일', max: 5 }, { label: '헌장 3번 목표', unit: '일', max: 5 }] }, prompt: '헌장 문장마다 이번 주 지킬 날 수(1~5일)를 적어요.', target: { records: true }, difficulty: 0.1,
              levels: { easy: { prompt: '헌장 1번 문장의 이번 주 목표 날 수를 적어요.', toolOptions: { fields: [{ label: '헌장 1번 목표', unit: '일', max: 5 }] }, target: { records: true } } } },
            SELF('실천 점검 준비', ['첫 주 목표를 정했다', '점검판 둘 곳을 정했다', '서로 점검할 짝을 정했다'], '실천을 위해 준비한 것에 스스로 표시해요.', { easy: 2, base: 2 }),
            { type: 'choice', prompt: '헌장을 지키지 못한 날에는 어떻게 할까요?', options: ['헌장을 버린다', '다시 돌아보고 다음 날 지킨다', '못 지킨 친구를 탓한다'], answer: 1, difficulty: 0.15, explain: '돌아보고 다시 하면 헌장이 자라요.' },
          ],
        },
        worksheet: {
          title: '한 달 실천 점검판',
          items: [
            { type: 'table', prompt: '주마다 지킨 날 수를 써요.', columns: ['헌장 문장', '1주', '2주', '3주', '4주'], cells: [['1번', '', '', '', ''], ['2번', '', '', '', ''], ['3번', '', '', '', '']] },
            { type: 'short', prompt: '첫 주에 가장 먼저 지킬 헌장 문장을 써요.' },
          ],
          easy: { note: '한 문장부터 지켜도 괜찮아요.', items: [{ type: 'draw', prompt: '헌장을 지키는 우리 반 모습을 그려요.' }] },
        },
      }),
      X('wrap.charter-board', {
        title: '헌장 게시판 꾸미기', method: '헌장 게시판 꾸미기', tool: 'collage', minutes: 6,
        levels: { easy: '조각 3개 이상을 붙이고 점검 칸 2개를 표시한다.', base: '헌장 문장 자리와 모둠 그림 조각을 붙여 조각 5개 이상, 점검 칸 3개를 표시한다.', challenge: '구호 띠 자리(긴 네모 조각)까지 붙이고 점검 칸 4개를 표시한다.' },
        wrap: {
          teacher: '"확정된 헌장을 게시판에 붙일 판을 꾸며요. 헌장 문장은 활동지에 쓰고, 판에는 문장 자리와 모둠 그림을 붙여요." 판에 글자를 붙일 수 없다고 알려 준다. "예쁘게만 꾸미면 돼요"라는 학생에게 "지나가는 친구가 헌장이 있다는 걸 알아볼 수 있을까요?"라고 묻는다.',
          exitTicket: [
            COLX('헌장 게시판 판을 꾸미고 점검해요.', ['헌장 문장 자리를 남겼다', '모둠 그림 조각을 붙였다', '멀리서도 잘 보인다', '구호 띠 자리를 붙였다'], { has: [{ shape: 'rect', min: 1 }] }),
            { type: 'choice', prompt: '헌장 게시판을 붙이는 까닭으로 알맞은 것은?', options: ['예쁘게 보이려고', '함께 보며 지키려고', '선생님만 보려고'], answer: 1, difficulty: 0.15, explain: '늘 보이는 곳에 두면 함께 떠올리고 지킬 수 있어요.' },
          ],
        },
        worksheet: {
          title: '우리 반 헌장',
          items: [
            { type: 'short', prompt: '게시판에 붙일 헌장 문장 하나를 써요.' },
            { type: 'short', prompt: '헌장을 알리는 구호 한 줄을 써요.' },
          ],
        },
        notes: '콜라주 판에는 글자를 붙일 수 없어 헌장 문장과 구호는 활동지에 써서 실제 게시판에 함께 붙인다.',
      }),
    );
  }

  PaperLessons.registerModules(M);
})();
