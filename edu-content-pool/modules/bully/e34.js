/* 법정교육 학교폭력 예방 — 초3-4 모듈 내용(edu-module.v1). 형식·작성 규칙: MODULES_BUILD.md, 계획: framework/mandatory.json 의 bully 초3-4.
 * 근거: 학교폭력예방법 제15조·시행령 제17조(학기별 1회 이상, 지침 연 11시간·사이버폭력 예방 3차시 이상) — research-mandatory §1,
 *   초등 주제(폭력의 종류 알기, 놀림·따돌림 구별, 방관자에서 조력자로, 도움 요청) — research-mandatory §2.
 * 초3-4 기준: 상황 판단(그림+짧은 글), 차례 정하기, 고른 이유 말하기, 짝 토의, 간단한 표·그림그래프. 법 조문·통계 해석·긴 글쓰기는 쓰지 않는다.
 * 이 영역의 틀(모든 모듈):
 *   - 피해 경험을 묻지 않는다. 장면은 모두 가명(두 글자)의 가상 인물 이야기이고 짧고 자세하지 않게 쓴다.
 *   - 잘못은 폭력을 한 쪽 한 사람에게 있고, 싫다고 말하거나 어른께 알린 어린이는 잘한 것이다. 참은 길을 고른 학생도 나무라지 않는다.
 *   - 낙인 없이 행동을 바로잡는다: '나쁜 아이'가 아니라 '그 행동'을 멈추고 고친다(회복 질문·진짜 사과·응원 말).
 *   - 단톡방·게임·댓글·사진 같은 사이버폭력 장면에 실제 앱·게임 이름을 쓰지 않는다('단체 대화방', '팀 게임', '그림 올리는 곳').
 *   - 도움 받을 곳은 체계도 concepts 의 것만: 담임 선생님·상담 선생님·보호자(믿을 어른)와 학교가 알려 준 도움 경로.
 *     신고·상담 전화번호는 체계도에 없어 쓰지 않고 '[학교가 확인해 넣는 학교폭력 신고·상담 번호]' 자리로 둔다(계획 그대로).
 *   - 같은 학년군 안전교육 폭력예방(saf-violence/e34)의 장면(느림보 별명·가방 숨기기·심부름·117 차례·여섯 종류 이름 짝)은 되풀이하지 않았다.
 * 주제 12개(3학년 6 · 4학년 6) × 도입 2 · 활동 3 · 정리 2 = 계획 모듈 84개.
 * 체계도 계획대로 못 한 것(교구 한계) — levels 글은 실제 설정대로 적었다:
 *   - g3-many-faces.activity.seven-sort: sortboard 바구니는 2~4개라 '상자 7개'를 상자 4개 판 + 상자 3개 판 + '폭력이에요/아니에요' 판으로 나눴다.
 *     '두 가지에 걸치는 카드'는 카드 한 장에 정답 바구니가 하나라 도전 단계 짝 토의(교사 진행)로 돌렸다.
 *   - collage 정리(포스터·배지): 칸 판이 없어 '칸 n개'는 붙일 조각 수(minPieces)와 점검 항목으로 바꿨다.
 *   - 정리(출구) 질문은 단계별 판이 없어 '규칙 n개·약속 n개'는 출구 교구 문항의 단계별 점검 칸 수로만 나뉜다.
 *   - g3-rumor-chain.activity.rumor-order: 카드 판에 '가위 표시'가 없어, 끊는 곳은 '끊는 말' 짝 잇기 문항으로 했다.
 * 사람 확인: 근거 파일에는 교육 주제 이름뿐이라 아래 수칙·문장은 일반 지식으로 썼다. 확인처는 괄호 안
 *   (교육부 학교폭력 예방 교육자료·학교폭력 사안처리 가이드북, 교육부 어울림 프로그램, 방송통신위원회·한국지능정보사회진흥원 사이버폭력 예방 자료).
 *   - g3-many-faces.*: 일곱 가지 모습(신체·언어·따돌림·사이버·빼앗기·억지로 시키기·몸을 함부로 만지기)의 나눔과 카드 배정(단톡방에서 한 명 빼기 → 사이버폭력,
 *     '옷을 들추는 장난' → 몸을 함부로 만지기), '다치지 않아도 폭력' / 어른 눈이 덜 닿는 곳에서 '친구와 함께 다니기' (교육부 학교폭력 예방 교육자료)
 *   - g3-rumor-chain.*: 소문 끊는 말("확실하지 않잖아"·"본인 없을 때 말하지 말자"·"나는 안 전할게") / '사실이어도 본인 없을 때 퍼뜨리지 않기' /
 *     퍼짐 그래프 1·2·4·8명은 '한 사람이 2명에게'라는 가상 약속 (교육부 어울림 프로그램)
 *   - g3-chatroom-rules.*: 대화방 규칙 예(한 명 빼지 않기·비웃는 이모티콘·밤 9시 뒤 안 보내기 — 시각은 우리 반 약속 예) / 줄임말 욕 "ㅂㅅ"을 화면에 보이는 것이
 *     괜찮은지(계획 문구 그대로) / 단체 대화방 한 명 빼기·몰아가기 = 사이버폭력 (방송통신위원회·한국지능정보사회진흥원 사이버폭력 예방 자료)
 *   - g3-hidden-camera.*: 계획의 차례 '멈추고 → 지우고 → 알리기'를 따랐다. 같은 학년군 saf-violence/e34 online-requests 는 '화면 저장 → 보호자께 보여 주기'이고
 *     '지우고 숨기기'를 함정 카드로 둔다 — 두 영역의 차례를 하나로 맞출지(지우기 전에 어른께 보여 드리기) 확인 필요 / '찍기 전에 묻기' (방송통신위원회·경찰청)
 *   - g3-onlooker-helper.*: 안전한 도움 세 가지(곁에 가기·데려가기·알리기), '혼자 뛰어들지 않기', 하굣길 '지킴이 선생님'(학교마다 이름 다름) (교육부 학교폭력 예방 교육자료)
 *   - g3-anger-repair.*: 화 온도계 3단계, 멈추기 3초·들이쉬기 4초·내쉬기 4초·3번(우리 반 연습값) / 회복 질문 네 가지 문장은 계획 그대로
 *     (회복적 생활교육 관련 교육청 자료와 대조)
 *   - g4-looks-teasing.*: 장난과 폭력의 두 기준(서로 즐거운가·멈춰 달라면 멈추는가 — 체계도 concepts) / 존중 말 바꾸기 예시 문장 (교육부 어울림 프로그램)
 *   - g4-subtle-exclusion.*: 은근한 따돌림 신호(대답 안 함·자리 옮기기·귓속말·한숨·대화방 무시) / '누구와 놀지는 자유, 여럿이 한 명을 계속 빼면 따돌림' 구분
 *   - g4-game-chat.*: 대처 차례 '멈추기 → 화면 남기기 → 차단하기 → 어른께 보여 주기'(계획 그대로), 맞대응 금지, 게임 시간·다툼 그래프는 가상이며 인과 아님
 *     (방송통신위원회·한국지능정보사회진흥원)
 *   - g4-comment-account.*: 댓글 전 세 질문(계획 문장) / 비밀번호는 보호자 말고는 나누지 않기, 열린 계정은 로그아웃 후 친구에게 알리기 (한국인터넷진흥원 개인정보 안내)
 *   - g4-stop-together.*: 신고(지키려고)와 고자질(혼내려고) 구분 / '함께 말리기'가 더 잘 된다는 그래프는 가상 이야기 자료 / 도움 경로(담임·상담 선생님·보호자·학교가 알려 준 도움 기관)
 *     / 신고·상담 전화번호는 넣지 않았다 — wrap.help-numbers 활동지의 '[학교가 확인해 넣는 학교폭력 신고·상담 번호]' 자리를 학교가 채운다 (교육부·학교 안내문)
 *   - g4-real-apology.*: 진짜 사과 네 가지(인정·마음 읽기·약속·바로잡기 — 계획 그대로), '사과받아도 억지로 괜찮다고 하지 않아도 된다', 낙인 말·응원 말 예
 *   - 그래프 자료(손들기·퍼짐·투표·도움 방법·싫은 말·게임 시간·댓글·함께 말리기)는 모두 가상이고 화면 제목에 '가상'을 밝혔다.
 */
(function () {
  const BASE = { schema: 'edu-module.v1', domain: 'bully', band: '초3-4' };
  const T = (topic, grade) => (o) => Object.assign({}, BASE, { topic: `bully.e34.${topic}`, grades: [grade] }, o);
  const M = [];
  const strip = (p) => String(p).replace(/[.?!]$/, '');
  const idOf = (c) => (typeof c === 'string' ? c : c.id);
  const mix = (groups) => { const out = []; const n = Math.max(...groups.map((g) => g.length)); for (let i = 0; i < n; i++) for (const g of groups) if (g[i] != null) out.push(g[i]); return out; };
  const count = (groups) => groups.reduce((a, g) => a + g.length, 0);
  const slotId = (s) => (typeof s === 'string' ? s : s.id);
  const sortT = (slots, groups) => ({ sort: Object.fromEntries(slots.map((s, i) => [slotId(s), groups[i].map(idOf)])) });
  const plain = (list) => list.map((x) => ({ id: x.id, text: x.text }));

  // 나누기(sortboard·mindmap sort): 기본 = groups, 쉬움 = 칸마다 앞에서 ne장, 도전 = 칸마다 hard 카드를 더함
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

  // 차례 놓기(timeline·story order): 기본 = 카드 전부, 쉬움 = keep 번째 카드들만, 도전 = 틀린 카드(trap) 한 장이 섞인다
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

  // 갈림길(dilemma): 기본 = 장면 둘(보기 3개), 쉬움 = 첫 장면만(바른 보기 + 첫 틀린 보기)
  //   도전: extra.reasons 가 있으면 끝에서 근거 카드 고르기, extra.third 가 있으면 바른 길 끝에 셋째 장면이 이어진다(extra.pick = 그 장면의 바른 보기).
  // good: 받는 길 목록(첫 길의 첫 선택이 쉬움 단계의 바른 보기). 바른 첫 보기에는 쉬움 단계 끝 글(ending)을 적는다.
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
    const challenge = extra.third
      ? { prompt: `${p}. 셋째 장면까지 가요.`, toolOptions: { scene: deepen(scene, good[0], extra.third) }, target: { path: good.map((g) => g.concat(extra.pick)) } }
      : { prompt: `${p}. 끝에서 근거도 골라요.`, toolOptions: { reasons: extra.reasons }, target: { path: good, reasons: extra.ok } };
    return {
      prompt, toolOptions: { scene }, target: { path: good }, difficulty: d,
      levels: { easy: { prompt: `${p}(한 번 골라요).`, toolOptions: { scene: easySceneOf(scene, g0) }, target: { path: [[g0]] } }, challenge },
      ...more,
    };
  };

  // 짝 잇기(wordcards·timeline·story match): rows = [[칸 글, 카드 글], …] 기본 nBase줄, 쉬움 nEasy줄, 도전 = 전부 + 함정 카드
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

  // 바구니에 고르기(emotion·wordcards pick): cards = [{ id, text, ok? }], 쉬움 = easyIds 카드만, 도전 = hard 카드를 더함
  const PICK = (prompt, base, cards, easyIds, hard, d, more) => {
    const ok = (list) => list.filter((c) => c.ok).map((c) => c.id);
    const easy = cards.filter((c) => easyIds.includes(c.id));
    const all = cards.concat(hard || []);
    const lv = { easy: { prompt: `${strip(prompt)}(${easy.length}장).`, toolOptions: { cards: plain(easy) }, target: { pick: ok(easy) } } };
    if (hard && hard.length) lv.challenge = { prompt: `${strip(prompt)}(${all.length}장).`, toolOptions: { cards: plain(all) }, target: { pick: ok(all) } };
    return { prompt, toolOptions: Object.assign({ mode: 'pick' }, base, { cards: plain(cards) }), target: { pick: ok(cards) }, difficulty: d, levels: lv, ...more };
  };

  // 말풍선 채우기(story fill): rows = [[말풍선 글(___ 빈칸), 정답 카드], …], wrong = 함정 카드. 쉬움 = 첫 칸, 기본 = 앞 두 칸, 도전 = 전부
  //   FILLN: 쉬움 = 앞 e칸, 기본 = 앞 b칸, 도전 = 전부
  const FILLN = (prompt, who, rows, wrong, e, b, d, more) => {
    const slots = rows.map((r, i) => ({ id: `b${i + 1}`, who: Array.isArray(who) ? who[i] : who, label: r[0] }));
    const tg = (k) => ({ fill: Object.fromEntries(rows.slice(0, k).map((r, i) => [`b${i + 1}`, r[1]])) });
    const cardsOf = (k) => rows.slice(0, k).map((r) => r[1]).concat(wrong.slice(0, Math.max(1, k - 1))).reverse();
    const p = strip(prompt);
    const n = Math.min(b, rows.length);
    return {
      prompt, toolOptions: { mode: 'fill', slots: slots.slice(0, n), cards: cardsOf(n) }, target: tg(n), difficulty: d,
      levels: {
        easy: { prompt: `${p}(${e}칸).`, toolOptions: { slots: slots.slice(0, e), cards: cardsOf(e) }, target: tg(e) },
        challenge: { prompt: `${p}(${rows.length}칸).`, toolOptions: { slots, cards: cardsOf(rows.length) }, target: tg(rows.length) },
      },
      ...more,
    };
  };
  const FILL = (prompt, who, rows, wrong, d, more) => FILLN(prompt, who, rows, wrong, 1, 2, d, more);

  // 칸 지도 핀: 쉬움 = 핀 자리 이름이 바로 보임(readout은 activity.levels), 도전 = 보기 고르기를 함께 한다(ask)
  const PIN = (map, prompt, region, why, d, more) => ({
    prompt, toolOptions: map, target: { region }, difficulty: d,
    levels: { challenge: { prompt: `${strip(prompt)}. ${why.tail || '까닭도 골라요.'}`, toolOptions: { ask: { q: why.q, choices: why.choices } }, target: { region, pick: why.answer } } },
    ...more,
  });

  // 스스로 점검(timer selfCheck) 출구 질문: 쉬움 앞 2칸, 기본 앞 baseN칸(기본 3), 도전 4칸
  const SELF = (title, checks, prompt, baseN) => ({
    type: 'tool', tool: 'timer', options: { title }, prompt: prompt || '오늘 한 것에 스스로 표시해요.', target: { selfCheck: checks.slice(0, baseN || 3) }, difficulty: 0.1,
    levels: { easy: { target: { selfCheck: checks.slice(0, 2) } }, challenge: { target: { selfCheck: checks.slice(0, 4) } } },
  });
  // 콜라주 포스터·배지 출구 질문: 쉬움 easyN조각, 기본 baseN조각, 도전 baseN조각 + 점검 한 칸 더
  const POSTER = (prompt, options, checks, extraCheck, easyN, baseN) => ({
    type: 'tool', tool: 'collage', options, prompt, target: { selfCheck: checks, minPieces: baseN }, difficulty: 0.1,
    levels: { easy: { target: { selfCheck: checks, minPieces: easyN } }, challenge: { target: { selfCheck: checks.concat(extraCheck), minPieces: baseN } } },
  });
  // 활동 문항 모양 → 출구 교구 질문 모양
  const EX = (tool, it) => ({ type: 'tool', tool, prompt: it.prompt, options: it.toolOptions, target: it.target, difficulty: it.difficulty, levels: it.levels });
  const MOOD = { type: 'mood', prompt: '오늘 공부를 마친 내 마음은 어떤가요?' };
  const PEOPLE = [{ value: 5, name: '5명' }, { value: 1, name: '1명' }];
  const CARD_LV = { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } };
  const BOARD_LV = { easy: { instant: true, showCount: true }, base: {}, challenge: { shuffle: true } };
  const FICTION = '장면의 인물은 모두 가명의 가상 인물이다. "이런 일 겪어 봤어요?"처럼 겪은 일을 묻지 않고, 우리 반 실제 친구 이름을 장면에 넣지 않는다.';

  // ======================================================================================================
  // 3학년 · 학교폭력의 여러 얼굴 (research-mandatory §2 초: 폭력의 종류 알기)
  // ======================================================================================================
  {
    const C = T('g3-many-faces', 3);
    const SURVEY = [['그렇다', 18], ['아니다', 8], ['모르겠다', 4]];
    const SCHOOL = {
      title: '우리 학교(가상)', grid: [6, 4],
      regions: [
        { name: '교실', cells: [[0, 0], [1, 0], [0, 1], [1, 1]] }, { name: '복도', cells: [[2, 0], [3, 0], [4, 0], [5, 0]] },
        { name: '화장실', cells: [[2, 1], [3, 1]] }, { name: '급식실', cells: [[4, 1], [5, 1], [4, 2], [5, 2]] },
        { name: '운동장', cells: [[0, 2], [1, 2], [2, 2], [3, 2], [0, 3], [1, 3]] }, { name: '학원 버스 정류장', cells: [[2, 3], [3, 3], [4, 3], [5, 3]] },
      ],
    };
    const SAFE_ASK = { q: '이곳에서 안전하려면?', choices: ['친구와 함께 다녀요', '혼자 구석에 가요', '어른 가까이 있어요'], answer: 0 };
    M.push(
      C({
        id: 'bully.e34.g3-many-faces.intro.situation-flash', type: 'intro', title: '세 장면 속 지우의 마음',
        method: '짧은 상황 글 읽고 마음 짐작하기', tool: 'emotion', minutes: 6,
        levels: { easy: '상황 2개(발 걸기·놀이에서 빼기)에 지우의 마음 카드를 함께 놓는다.', base: '상황 3개에 지우의 마음 카드를 하나씩 놓고 까닭을 짝에게 말한다.', challenge: '상황마다 어울리는 마음 두 가지와 까닭 한 줄을 짝에게 말한다.' },
        intro: {
          teacher: '"민호가 지우가 지나갈 때마다 발을 걸어요. 지우는 어떤 마음일까요?" 세 장면을 한 줄씩 읽고 시연 단추로 마음 카드가 장면마다 놓이는 것을 보인다(기다릴 반응: "무서워요", "외로워요"). "안 넘어졌으면 괜찮아요"라는 말이 나오면 "넘어지지 않아도 지우 마음은 어떨까요? 날마다 그러면요?"라고 되묻는다. 오늘은 학교폭력이 한 가지 모습만 있는 게 아니라는 것을 배운다고 밝힌다.',
          student: '세 장면을 읽고 지우의 마음 카드를 골라요. 왜 그 마음인지 짝에게 말해 보아요.',
          demo: { tool: 'emotion', options: { mode: 'match', slots: [{ id: 's1', label: '지나갈 때마다 발을 걸어요' }, { id: 's2', label: '"넌 빠져" 하고 놀이에서 빼요' }, { id: 's3', label: '공책을 가져가 안 돌려줘요' }], cards: ['무서움', '외로움', '속상함', '신남', '편안함'], shuffle: false }, sequence: [{ match: { s1: '무서움' } }, { match: { s1: '무서움', s2: '외로움' } }, { match: { s1: '무서움', s2: '외로움', s3: '속상함' } }] },
          art: { draw: 'three small paper panels: a paper child stretching out a foot in a hallway, a group of paper children turning their backs on one child at a ball game, and a paper child holding a notebook away from its owner', banner: '지우는 어떤 마음일까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: FICTION,
      }),
      C({
        id: 'bully.e34.g3-many-faces.intro.class-survey', type: 'intro', title: '"이건 폭력일까?" 손들기 그래프',
        method: '"이건 폭력일까?" 손들기 결과 그래프 읽기', tool: 'chart', minutes: 6,
        levels: { easy: '"그렇다"와 "아니다" 두 막대만 함께 견준다.', base: '세 막대(그렇다·아니다·모르겠다)를 읽고 가장 많은 대답을 고른다.', challenge: '생각이 갈린 까닭을 짐작하고 내 생각을 "왜냐하면"으로 짝에게 말한다.' },
        intro: {
          teacher: '"가상의 3학년 반 30명에게 \'놀리는 별명은 폭력이다\'를 물었어요. 그렇다가 몇 명일까요?" 시연 단추로 가장 큰 막대가 골라지는 것을 보이고, 18명·8명·4명을 함께 읽는다. "아니다"를 고른 친구 생각도 짐작해 보게 한다(기다릴 반응: "장난이라고 생각해서요"). "놀리는 쪽이 장난이면 괜찮아요"라는 말이 나오면 "별명을 듣는 친구가 싫어하면 어떨까요?"라고 되묻는다. 자료는 가상이라고 꼭 밝힌다.',
          student: '가상의 반 30명이 손든 그래프를 읽어요. 왜 생각이 갈렸을지 짝과 이야기해 보아요.',
          demo: { tool: 'chart', options: { type: 'bar', mode: 'read', title: '"놀리는 별명은 폭력이다"(가상의 30명 반)', unit: '명', xLabel: '대답', yLabel: '친구 수', data: SURVEY, max: 20, scale: 2, showValues: true, question: '가장 많은 대답은?', choices: SURVEY.map((x) => x[0]) }, sequence: [{ pick: 0 }] },
          art: { draw: 'a paper classroom with thirty small paper hands raised in three groups, a paper bar chart with three bars beside the blackboard', banner: '이건 폭력일까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '그래프는 가상 자료다. 실제 반에서 손들기를 할 때는 눈을 감고 하거나 쪽지로 해서 누가 어떻게 답했는지 드러나지 않게 한다.',
      }),
      C({
        id: 'bully.e34.g3-many-faces.activity.seven-sort', type: 'activity', title: '일곱 가지 모습으로 상황 나누기',
        method: '일곱 가지 모습으로 상황 나누기', tool: 'sortboard', minutes: 14,
        levels: { easy: '판마다 카드 6장 안팎, 놓으면 바로 맞는지 알려 주고 바구니마다 든 장 수가 보인다.', base: '일곱 가지 모습을 바구니 4개 판(카드 8장)과 바구니 3개 판(카드 6장)에 나누고, 셋째 판에서 다치지 않아도 폭력인 카드를 가른다.', challenge: '판마다 헷갈리는 카드가 더해지고, 두 모습에 걸치는 카드 하나를 골라 짝과 토의한다(교사 진행).' },
        activity: {
          title: '일곱 가지 모습으로 상황 나누기', tool: 'sortboard',
          teacher: '"이 상황은 몸으로 한 일인가요, 말인가요, 화면 속 일인가요?" 카드를 놓을 때마다 고른 까닭을 한 문장으로 말하게 한다. "단톡방에서 한 명 빼기"를 어디에 넣을지 망설이면 "빼는 것은 따돌림이고, 그 일이 화면 속에서 일어나면 사이버폭력이에요. 둘 다 맞는 말이에요"라고 짚고 이 판에서는 사이버폭력에 둔다고 정한다. 셋째 판에서 "안 다쳤으니 폭력 아니에요"라는 학생에게 "몸은 안 다쳤어도 마음은 어떨까요?"라고 묻는다.',
          task: '상황 카드를 학교폭력의 모습별 바구니에 나누어 넣어요.', levels: BOARD_LV,
          items: [
            SORT('상황 카드를 네 가지 모습으로 나누어요.', {}, ['몸으로 하는 폭력', '말로 하는 폭력', '따돌림', '사이버폭력'],
              [['일부러 밀치기', '지나갈 때 발 걸기'], ['외모로 놀리기', '겁주는 말 하기'], ['놀이에서 일부러 빼기', '모둠에서 혼자 두기'], ['단톡방에서 한 명 빼기', '사진에 놀림 글 달기']],
              [2, 2, 1, 1], [['꼬집고 도망가기'], [], ['말 걸면 다 같이 무시'], []], 0.15),
            SORT('상황 카드를 세 가지 모습으로 나누어요.', {}, ['빼앗기', '억지로 시키기', '몸을 함부로 만지기'],
              [['빌린다며 용돈 가져가기', '필통 뺏고 안 주기'], ['숙제 대신 하라고 시키기', '싫은 심부름 강요'], ['싫다는데 몸 만지기', '싫다는데 계속 껴안기']],
              [2, 2, 1], [['"빌려줘" 하고 안 갚기'], ['"안 하면 안 놀아"'], ['옷을 들추는 장난']], 0.2),
            SORT('폭력인 것과 아닌 것을 나누어요.', {}, ['폭력이에요', '폭력이 아니에요'],
              [['안 다쳐도 매일 놀림', '흉보는 귓속말', '단톡방에서 비웃기'], ['같이 정한 술래 놀이', '"그만" 하자 멈춤', '서로 웃는 하이파이브']],
              2, [['"재밌잖아" 하며 계속'], ['허락받고 사진 찍기']], 0.25,
              { conclude: '몸·말·따돌림·화면 속 폭력·빼앗기·억지로 시키기·몸을 함부로 만지기 — 다치지 않아도 모두 학교폭력이에요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '몸을 다치지 않아도 학교폭력일 수 있나요?', options: ['네, 마음을 아프게 해도 폭력이에요', '아니요, 다쳐야 폭력이에요'], answer: '네, 마음을 아프게 해도 폭력이에요' }] },
        notes: FICTION,
      }),
      C({
        id: 'bully.e34.g3-many-faces.activity.change-board', type: 'activity', title: '상황 바꿔 쓰기 그림판',
        method: '상황 바꿔 쓰기 그림판', tool: 'story', minutes: 14,
        levels: { easy: '장면마다 말풍선 1칸을 바꿔 채운다.', base: '장면마다 말풍선 2칸을 바꿔 채운다.', challenge: '말풍선 3칸을 채우고 마지막 칸에서 바뀐 장면 속 친구의 마음까지 고른다.' },
        activity: {
          title: '상황 바꿔 쓰기 그림판', tool: 'story',
          teacher: '"서아가 공을 혼자 갖고 라온이만 못 끼게 해요. 서아가 어떤 말을 하면 장면이 바뀔까요?" 말풍선을 채운 뒤 바뀐 이야기를 짝과 역할을 나눠 읽게 한다. 함정 카드("너는 빠져")를 넣는 학생에게 "이 말을 들은 라온이는 끼고 싶을까요?"라고 묻는다. 서아를 "못된 아이"라고 부르는 말이 나오면 "서아가 아니라 서아가 한 행동을 바꾸는 거예요"라고 바로잡는다.',
          task: '그림 이야기의 말풍선을 모두가 함께하는 말로 바꿔 채워요.', levels: CARD_LV,
          items: [
            FILL('쉬는 시간 공놀이 장면의 말을 바꿔요.', ['서아', '서아', '라온'], [['"___ 같이 하자."', '라온아, 너도'], ['"공은 ___ 차자."', '돌아가면서'], ['"끼워 줘서 ___"', '고마워']], ['너는 빠져', '내 공이야'], 0.15),
            FILL('줄넘기 놀이 장면의 말을 바꿔요.', ['이안', '이안', '다온'], [['"다온이도 ___"', '같이 넘자'], ['"줄은 ___ 돌리자."', '번갈아'], ['"같이 하니 ___"', '더 재밌어']], ['넌 못하잖아', '구경이나 해'], 0.2),
            FILL('모둠 그림 장면의 말을 바꿔요.', ['시우', '시우', '하람'], [['"하람아, ___"', '네 생각은 어때?'], ['"색칠은 ___ 하자."', '나눠서'], ['"내 그림도 넣어서 ___"', '뿌듯해']], ['넌 가만있어', '우리끼리 할게'], 0.25,
              { conclude: '한 사람을 빼던 말을 함께하는 말로 바꾸면 모두의 마음이 달라져요.' }),
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 함께하는 말을 써요.', text: '"라온아, 너도 ___"', answer: '같이 하자' }] },
        notes: FICTION,
      }),
      C({
        id: 'bully.e34.g3-many-faces.activity.case-map', type: 'activity', title: '학교 지도에서 위험 장면 장소 찾기',
        method: '학교 지도에서 위험 장면 장소 찾기', tool: 'map', minutes: 26,
        levels: { easy: '핀을 놓으면 그 칸의 장소 이름이 바로 보인다(장면 5개).', base: '장면 5개마다 일어난 곳에 핀을 꽂고, 짝과 반 약속 하나를 세운다.', challenge: '핀을 꽂은 뒤 어른이 잘 안 보는 곳에서 할 안전 행동을 보기에서 고른다.' },
        activity: {
          title: '학교 지도에서 위험 장면 장소 찾기', tool: 'map',
          teacher: '"이 장면은 학교 어디에서 일어났을까요? 그곳에는 어른이 자주 있나요?" 핀을 꽂을 때마다 그곳에 누가 있는지 함께 말한다. "화장실은 원래 위험한 곳이에요"라는 말이 나오면 "장소가 나쁜 게 아니라 어른 눈이 덜 닿는 곳이에요. 그럴 때 무엇을 하면 좋을까요?"라고 되묻는다. 마지막 문항에서 짝과 세운 약속(예: "화장실은 친구와 함께")을 칠판에 모은다.',
          task: '장면 카드를 읽고, 학교 칸 지도에서 그 일이 일어난 곳에 핀을 꽂아요.', levels: { easy: { readout: true }, base: {}, challenge: {} },
          items: [
            PIN(SCHOOL, '"돈 있으면 내놔" 한 곳은 화장실이에요. 핀을 꽂아요.', '화장실', SAFE_ASK, 0.15),
            PIN(SCHOOL, '줄 서다 발을 건 일이 생긴 곳에 핀을 꽂아요.', '급식실', { q: '이곳에서 안전하려면?', choices: ['선생님께 바로 알려요', '똑같이 발을 걸어요', '모른 척 먹어요'], answer: 0 }, 0.15),
            PIN(SCHOOL, '쉬는 시간 놀림 쪽지가 돈 곳에 핀을 꽂아요.', '교실', { q: '쪽지를 받으면?', choices: ['더 돌려요', '안 돌리고 선생님께', '쪽지에 더 써요'], answer: 1 }, 0.2),
            PIN(SCHOOL, '운동장 구석에서 공을 뺏은 곳에 핀을 꽂아요.', '운동장', SAFE_ASK, 0.2),
            PIN(SCHOOL, '학원 버스를 기다리며 가방을 뺏은 곳에 핀을 꽂아요.', '학원 버스 정류장', { q: '이곳에서 안전하려면?', choices: ['기사님·어른 가까이 서요', '혼자 멀리 가요', '가방을 던져요'], answer: 0, tail: '할 행동도 골라요.' }, 0.25,
              { conclude: '어른 눈이 덜 닿는 곳에서는 친구와 함께 다니고, 일이 생기면 가까운 어른께 바로 알려요.' }),
            { prompt: '짝과 어른이 잘 안 보는 곳에서 지킬 반 약속을 하나 정해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '어른이 잘 안 보는 곳에서 지킬 우리 반 약속을 한 줄로 써요.' }, { type: 'choice', prompt: '어른 눈이 덜 닿는 곳에서 안전한 행동은?', options: ['친구와 함께 다녀요', '혼자 구석에 가요'], answer: '친구와 함께 다녀요' }] },
        notes: '지도는 가상의 학교다. 우리 학교의 실제 장소를 "위험한 곳"으로 못 박지 않고, 어른 눈이 덜 닿는 곳에서 할 행동에 초점을 둔다.',
      }),
      C({
        id: 'bully.e34.g3-many-faces.wrap.seven-poster', type: 'wrap', title: '"일곱 가지 하지 않기" 포스터',
        method: '"일곱 가지 하지 않기" 포스터', tool: 'collage', minutes: 6,
        levels: { easy: '조각 4개 이상을 붙이고 점검 3칸에 표시한다.', base: '일곱 가지 모습마다 대신 할 행동을 떠올리며 조각 7개 이상을 붙이고 점검 3칸에 표시한다.', challenge: '조각 7개 이상을 붙이고 포스터 제목을 짝과 정해 점검 4칸에 표시한다.' },
        wrap: {
          teacher: '"일곱 가지 모습 대신 우리가 할 행동은 무엇일까요? 밀치는 대신? 빼는 대신?" 모습 하나에 조각 하나씩, 대신 할 행동(손잡기 하트·함께하는 동그라미 등)을 떠올리며 붙이게 한다. 출구 2번에서 "다치지 않았으니 괜찮다"를 고른 학생에게 "오늘 셋째 판에서 무엇을 나눴는지 떠올려 볼까요?"라고 되묻는다.',
          exitTicket: [
            POSTER('색종이 조각으로 "일곱 가지 하지 않기" 포스터를 꾸며요.', { maxPieces: 14 }, ['일곱 가지 모습을 떠올렸어요', '대신 할 행동을 붙였어요', '짝과 함께 보았어요'], '포스터 제목을 정했어요', 4, 7),
            { type: 'choice', prompt: '친구 몸을 안 다치게 했지만 날마다 놀렸어요. 학교폭력일까요?', options: ['네, 학교폭력이에요', '아니요, 안 다쳤어요', '놀린 사람만 알아요'], answer: 0, difficulty: 0.15, explain: '말로 마음을 아프게 하는 것도 학교폭력이에요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '일곱 가지 하지 않기',
          items: [
            { type: 'table', prompt: '하지 않을 모습 대신 할 행동을 써요.', columns: ['하지 않을 모습', '대신 할 행동'], cells: [['밀치기', ''], ['놀이에서 빼기', ''], ['억지로 시키기', '']], answer: '비켜 주기, 같이 하자고 하기, 부탁하고 기다리기' },
            { type: 'draw', prompt: '우리 반 "하지 않기" 포스터를 그려요.' },
          ],
        },
      }),
      C({
        id: 'bully.e34.g3-many-faces.wrap.quiz-cards', type: 'wrap', title: '학교폭력 낱말 짝 맞추기',
        method: '낱말 카드 짝 맞추기 퀴즈', tool: 'wordcards', minutes: 6,
        levels: { easy: '낱말 3개에 뜻 카드를 잇는다.', base: '낱말 5개에 뜻 카드를 잇는다.', challenge: '낱말 7개에 남는 카드 하나를 가려 잇고, 하나는 예를 들어 짝에게 말한다(교사 진행).' },
        wrap: {
          teacher: '"\'따돌림\'은 무슨 뜻이었죠? 오늘 본 장면 가운데 어떤 것이었나요?" 짝을 이은 뒤 낱말 하나를 골라 예를 들게 한다. 사이버폭력을 "게임만"이라고 하는 학생에게 "단체 대화방이나 사진에 단 글은요?"라고 되묻는다.',
          exitTicket: [
            EX('wordcards', MATCH('낱말과 뜻 카드를 이어요.', {}, [['따돌림', '일부러 놀이에서 빼기'], ['억지로 시키기', '싫은 일을 시키기'], ['말로 하는 폭력', '욕·놀림으로 아프게'], ['사이버폭력', '화면 속 놀림·따돌림'], ['몸으로 하는 폭력', '밀치고 때리기'], ['빼앗기', '물건·돈 가져가기'], ['몸을 함부로 만지기', '싫다는 몸 만지기']], 3, 5, '서로 웃는 장난', 0.2)),
            { type: 'choice', prompt: '단체 대화방에서 한 친구만 빼고 새 방을 만들었어요. 무엇일까요?', options: ['사이버폭력이에요', '그냥 대화예요', '게임 규칙이에요'], answer: 0, difficulty: 0.15, explain: '화면 속에서 한 명을 빼는 것도 학교폭력(사이버폭력)이에요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '학교폭력 낱말',
          items: [
            { type: 'choice', prompt: '"싫다는 일을 억지로 시키기"는 어떤 모습인가요?', options: ['억지로 시키기', '따돌림', '빼앗기'], answer: '억지로 시키기' },
            { type: 'short', prompt: '오늘 배운 낱말 하나를 골라 예를 한 줄로 써요.' },
          ],
          easy: { note: '오늘 나눈 장면 카드를 떠올려요.', items: [{ type: 'choice', prompt: '놀이에서 일부러 빼는 것은?', options: ['따돌림', '장난'], answer: '따돌림' }] },
        },
      }),
    );
  }

  // ======================================================================================================
  // 3학년 · 뒷말과 소문이 커지는 길 끊기 (research-mandatory §2 초: 놀림·따돌림 구별)
  // ======================================================================================================
  {
    const C = T('g3-rumor-chain', 3);
    const SPREAD = [['1단계', 1], ['2단계', 2], ['3단계', 4], ['4단계', 8]];
    const SPREAD_OPT = { type: 'bar', title: '한 사람이 2명에게 전하면(가상)', unit: '명', xLabel: '전한 차례', yLabel: '새로 들은 사람', max: 10, scale: 1 };
    M.push(
      C({
        id: 'bully.e34.g3-rumor-chain.intro.telephone-game', type: 'intro', title: '귓속말 전달 놀이',
        method: '귓속말 전달 놀이로 말 바뀜 느끼기', tool: 'timer', minutes: 6,
        levels: { easy: '세 명이 차례로 전하고(타이머 3번), 처음 문장과 견준다.', base: '다섯 명이 차례로 전하고(타이머 5번), 바뀐 낱말 수를 기록판에 적는다.', challenge: '다섯 명이 전한 뒤 어느 차례에서 말이 바뀌었는지 모둠이 함께 찾는다.' },
        intro: {
          teacher: '"\'내일 체육 시간에 줄넘기 해\'를 귓속말로 다섯 명에게 전해 볼게요. 끝 사람에게는 무슨 말이 닿을까요?" 시연 단추로 타이머가 한 사람 10초씩 5번으로 맞춰지고, 기록판에 바뀐 낱말 수가 적히는 것을 보인다. 놀이 문장은 반 친구 이야기가 아닌 평범한 문장만 쓴다. 끝 문장이 달라지면 "말은 전할수록 바뀌어요. 친구에 대한 말이 이렇게 바뀌면 어떻게 될까요?"라고 물어 오늘 주제로 잇는다.',
          student: '모둠이 짧은 문장을 귓속말로 차례로 전해요. 끝 사람의 문장이 처음과 같은지 견주어 보아요.',
          demo: { tool: 'timer', options: { title: '귓속말 전달 놀이', plan: { work: 10, rest: 5, rounds: 3 }, fields: [{ label: '바뀐 낱말 수', unit: '개', step: 1 }] }, sequence: [{ plan: { work: 10, rest: 5, rounds: 5 } }, { plan: { work: 10, rest: 5, rounds: 5 }, records: [2] }] },
          art: { draw: 'a line of five paper children whispering into each other\'s ears, a paper speech bubble changing shape as it travels down the line', banner: '말이 어떻게 바뀔까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '귓속말 놀이 문장은 교사가 정한 평범한 문장만 쓴다. 반 친구 이름이나 흉이 든 문장으로 놀이하지 않는다.',
      }),
      C({
        id: 'bully.e34.g3-rumor-chain.intro.rumor-feelings', type: 'intro', title: '소문을 들은 소희의 마음',
        method: '소문을 들은 친구 마음 짐작', tool: 'emotion', minutes: 6,
        levels: { easy: '마음 카드 2장을 소희 칸에 함께 놓아 본다.', base: '마음 카드 6장 가운데 소희의 마음을 고르고 까닭을 말한다.', challenge: '소문을 전한 친구의 마음도 짐작해 칸에 놓고 두 마음을 견준다.' },
        intro: {
          teacher: '"\'소희가 시험을 베꼈대\'라는 말이 반에 퍼졌어요. 소희는 그런 적이 없어요. 소희는 어떤 마음일까요?" 시연 단추로 소희 칸과 전한 친구 칸에 마음 카드가 놓이는 것을 보인다(기다릴 반응: "억울해요", "외로워요"). "그냥 말만 한 건데요"라는 말이 나오면 "말 한마디가 반 전체로 가면 소희에게는 어떤 일이 될까요?"라고 되묻는다.',
          student: '소문이 퍼진 장면을 읽고 소희의 마음 카드를 골라요. 왜 그런 마음일지 말해 보아요.',
          demo: { tool: 'emotion', options: { mode: 'match', slots: [{ id: 'heard', label: '소문을 들은 소희' }, { id: 'told', label: '소문을 전한 친구' }], cards: ['억울함', '외로움', '신남', '걱정', '미안함', '편안함'], shuffle: false }, sequence: [{ match: { heard: '억울함' } }, { match: { heard: '억울함', told: '미안함' } }] },
          art: { draw: 'a paper classroom where small paper speech bubbles float from desk to desk toward one paper child sitting alone with a puzzled, sad face', banner: '소희는 어떤 마음일까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: FICTION,
      }),
      C({
        id: 'bully.e34.g3-rumor-chain.activity.rumor-order', type: 'activity', title: '소문이 커지는 차례 놓기',
        method: '소문이 커지는 차례 놓기', tool: 'timeline', minutes: 14,
        levels: { easy: '장면 4장을 차례대로 놓고, 놓으면 바로 맞는지 알려 준다.', base: '장면 5장을 차례대로 놓고, 셋째 문항에서 끊는 곳마다 할 말 3줄을 잇는다.', challenge: '틀린 장면 한 장을 빼고 5장을 놓고, 끊는 말 잇기에서 남는 카드를 가려낸다.' },
        activity: {
          title: '소문이 커지는 차례 놓기', tool: 'timeline',
          teacher: '"처음에는 몇 명이 알았나요? 맨 끝에는요?" 카드를 다 놓으면 차례대로 소리 내어 읽고, "어디에서 끊으면 소희가 덜 아플까요?"라고 묻는다. "단톡방에 올린 사람만 잘못이에요"라는 말이 나오면 "수군대며 전한 사람이 없었다면 단톡방까지 갔을까요?"라고 되묻는다. 끊는 곳은 맨 처음일수록 좋지만, 어느 차례에서든 끊을 수 있다는 것을 짚는다.',
          task: '소문이 퍼지는 장면 카드를 일어난 차례대로 놓고, 끊는 말을 이어요.', levels: CARD_LV,
          items: [
            ORD('소희 소문이 퍼진 차례대로 놓아요.', { axis: ['처음', '나중'] },
              [{ id: 'guess', text: '한 명이 짐작해요' }, { id: 'whisper', text: '둘이 수군대요' }, { id: 'post', text: '단톡방에 올려요' }, { id: 'all', text: '반 전체가 알아요' }, { id: 'alone', text: '소희가 혼자 앉아요' }],
              [0, 1, 2, 3], { id: 'ask', text: '소희에게 물어봐요', why: '본인에게 확인하는 것은 소문이 커지는 차례가 아니에요.' }, 0.15),
            ORD('운동화 소문이 퍼진 차례대로 놓아요.', { axis: ['처음', '나중'] },
              [{ id: 'see', text: '새 운동화를 봐요' }, { id: 'make', text: '"훔친 거래" 지어내요' }, { id: 'pass', text: '쉬는 시간에 전해요' }, { id: 'grow', text: '"경찰 왔대"로 커져요' }, { id: 'hide', text: '친구가 신발을 숨겨요' }],
              [1, 2, 3, 4], { id: 'stop', text: '"확실하지 않잖아"', why: '이 말은 소문을 끊는 말이라 커지는 차례에 들어가지 않아요.' }, 0.2),
            MATCH('소문이 커지는 곳마다 끊는 말을 이어요.', {}, [['한 명이 짐작할 때', '확실하지 않잖아'], ['둘이 수군댈 때', '본인 없을 때 말 말자'], ['단톡방에 올릴 때', '나는 안 올릴게'], ['반 전체가 알 때', '선생님께 알리자']], 2, 3, '더 재밌게 전해 줘', 0.25,
              { conclude: '소문은 전할수록 커져요. 어느 차례에서든 "나는 안 전할게"로 끊을 수 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 소문을 끊는 말을 써요.', text: '"그거 확실하지 않잖아. 나는 ___."', answer: '안 전할게' }] },
        notes: FICTION,
      }),
      C({
        id: 'bully.e34.g3-rumor-chain.activity.rumor-graph', type: 'activity', title: '소문이 퍼지는 수 그래프',
        method: '소문이 퍼지는 수 그래프 그리기', tool: 'chart', minutes: 14,
        levels: { easy: '세 단계(1·2·4명) 막대를 완성한다(첫 막대는 미리 놓여 있다).', base: '네 단계(1·2·4·8명) 막대를 완성하고 4단계에 새로 들은 사람 수를 읽는다.', challenge: '2단계에서 모두 멈추면 소문을 아는 사람이 모두 몇 명에서 끝나는지 고른다.' },
        activity: {
          title: '소문이 퍼지는 수 그래프', tool: 'chart',
          teacher: '"한 사람이 두 명에게만 전해도, 들은 사람이 또 두 명씩 전하면 어떻게 될까요?" 표의 수를 함께 읽으며 막대를 쌓는다. 막대가 한 칸씩만 커진다고 생각하는 학생에게 "2명이 각자 2명에게 전하면 몇 명일까요?"라고 손가락으로 세어 보게 한다. 셋째 문항에서 "일찍 멈출수록 소문을 아는 사람이 적다"는 것을 짚는다. 자료는 가상의 약속(한 사람이 2명에게)으로 만든 것이라고 밝힌다.',
          task: '표를 보고 소문이 퍼지는 막대그래프를 완성하고, 그래프를 읽어 답을 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '표를 보고 소문이 퍼지는 막대그래프를 완성해요.', toolOptions: Object.assign({}, SPREAD_OPT, { mode: 'build', data: SPREAD, showTable: true }), target: { build: true }, difficulty: 0.2,
              levels: { easy: { prompt: '표를 보고 세 단계 막대그래프를 완성해요.', toolOptions: { data: SPREAD.slice(0, 3), given: [0] }, target: { build: true } } } },
            { prompt: '4단계에서 새로 들은 사람은 몇 명인가요?', toolOptions: Object.assign({}, SPREAD_OPT, { mode: 'read', data: SPREAD, question: '4단계에 새로 들은 사람은?', choices: ['4명', '6명', '8명'] }), target: { pick: 2 }, difficulty: 0.2 },
            { prompt: '2단계에서 모두 멈추면 소문을 아는 사람은 모두 몇 명일까요?', toolOptions: Object.assign({}, SPREAD_OPT, { mode: 'read', data: SPREAD, question: '1단계 + 2단계는 모두 몇 명?', choices: ['3명', '8명', '15명'] }), target: { pick: 0 }, difficulty: 0.3,
              conclude: '소문은 전할수록 빠르게 늘어요. 일찍 멈출수록 아는 사람이 적어요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '한 사람이 2명에게 전할 때 새로 듣는 사람 수를 채워요.', columns: ['단계', '새로 들은 사람(명)'], cells: [['1단계', '1'], ['2단계', '2'], ['3단계', ''], ['4단계', '']], answer: '4, 8' }] },
        notes: '그래프는 "한 사람이 2명에게 전한다"는 가상의 약속으로 만든 자료다. 실제 소문이 이렇게 퍼진다는 통계가 아니라고 말해 준다.',
      }),
      C({
        id: 'bully.e34.g3-rumor-chain.activity.rumor-dilemma', type: 'activity', title: '갈림길: 단짝이 비밀을 전할 때',
        method: '갈림길: 단짝이 비밀을 전할 때', tool: 'dilemma', minutes: 26,
        levels: { easy: '갈림 1번, 보기 2개 가운데 고르고 결과를 본다.', base: '갈림 2번, 보기 3개씩 고르며 결과를 따라간다(장면 셋).', challenge: '갈림 3번 — 바른 길 끝에 소희에게 할 수 있는 일을 고르는 셋째 장면이 이어진다.' },
        activity: {
          title: '갈림길: 단짝이 비밀을 전할 때', tool: 'dilemma',
          teacher: '"이 길을 고르면 소희에게 무슨 일이 생길까요? 나와 다온이 사이는요?" 결과 장면을 소리 내어 읽고 다음 장면에서 다시 고른다. 같이 수군대는 길을 고른 학생을 나무라지 않고 "단짝 말이라 끊기 어렵죠. 그 길 끝에서 소희는 어땠나요?"라고 되물어 다른 길도 가 보게 한다. "사실이면 말해도 돼요"라는 말에는 "사실이어도 본인이 없는 곳에서 퍼뜨리면 소희는 어떤 마음일까요?"라고 묻는다.',
          task: '장면을 읽고 보기를 골라요. 결과를 보고 다음 장면에서 또 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL('단짝이 "이거 비밀인데…" 하며 소희 이야기를 해요.', {
              text: '단짝 다온이가 "이거 비밀인데, 소희가 시험 베꼈대" 하고 속삭여요.', motif: 'cloud',
              choices: [
                { id: 'join', text: '같이 수군댄다', result: '둘이 웃는 사이 옆 친구도 듣게 됐어요.', impact: [{ who: '소희', text: '소문이 커져요', tone: -1 }], why: '함께 수군대면 소문이 커져요.' },
                { id: 'stop', text: '"확실하지 않은 말은 전하지 말자"', result: '다온이가 잠깐 멈칫했어요.', ending: '내가 멈추자 소문이 한 사람 앞에서 멈췄어요.', next: {
                  text: '다온이가 "다른 애들은 벌써 다 알아" 해요.', choices: [
                    { id: 'firm', text: '"그래도 나는 안 전할래"', result: '다온이도 "나도 그만할게" 했어요.', impact: [{ who: '소희', text: '소문이 덜 퍼졌어요', tone: 1 }], ending: '"다들 안다"는 말에도 흔들리지 않고 끊었어요.' },
                    { id: 'ok', text: '"그럼 나도 들은 대로 말할래"', result: '소문이 나를 거쳐 또 퍼졌어요.', impact: [{ who: '소희', text: '더 억울해요', tone: -1 }], why: '다들 안다고 해도 내가 전하면 더 퍼져요.' },
                    { id: 'tease', text: '소희에게 가서 놀린다', result: '소희가 울음을 참았어요.', impact: [{ who: '소희', text: '마음을 크게 다쳤어요', tone: -1 }], why: '소문을 사실처럼 놀리면 언어폭력이 돼요.' },
                  ] } },
                { id: 'pass', text: '듣고 다른 친구에게 전한다', result: '쉬는 시간이 끝나기 전에 다섯 명이 알았어요.', impact: [{ who: '소희', text: '반에서 외로워져요', tone: -1 }], why: '들은 말을 옮기면 나도 소문을 키우는 사람이 돼요.' },
              ] }, [['stop', 'firm']],
            { third: { text: '다음 날 소희가 혼자 앉아 있어요.', choices: [
              { id: 'near', text: '곁에 가서 "나는 안 믿어" 한다', result: '소희가 고개를 들었어요.', impact: [{ who: '소희', text: '혼자가 아니에요', tone: 1 }], ending: '소문을 끊고 소희 곁에도 가 주었어요.' },
              { id: 'askit', text: '"진짜 베꼈어?" 묻는다', result: '소희 얼굴이 굳었어요.', impact: [{ who: '소희', text: '또 의심받아 속상해요', tone: -1 }], why: '소문 내용을 다시 묻는 것도 상처가 돼요.' },
              { id: 'ignore', text: '모른 척 지나간다', result: '소희는 계속 혼자였어요.', impact: [{ who: '소희', text: '외로워요', tone: -1 }], why: '곁에 가 주는 것만으로도 힘이 돼요.' },
            ] }, pick: 'near' }, 0.2),
            DIL('단체 대화방에 소문 글이 올라왔어요.', {
              text: '반 단체 대화방에 "소희 베낀 거 다 앎ㅋ"이라는 글이 올라왔어요.', motif: 'house',
              choices: [
                { id: 'laugh', text: '웃는 이모티콘을 단다', result: '글 밑에 이모티콘이 줄줄이 달렸어요.', impact: [{ who: '소희', text: '더 많은 친구가 비웃는 것 같아요', tone: -1 }], why: '이모티콘 하나도 소문을 키워요.' },
                { id: 'write', text: '"확실하지 않은 말 올리지 말자" 쓴다', result: '대화방이 잠깐 조용해졌어요.', ending: '내 한 줄이 대화방 분위기를 바꿨어요.', next: {
                  text: '올린 친구가 "장난인데 왜 그래" 하고 글을 지우지 않아요.', choices: [
                    { id: 'tell', text: '화면을 보여 드리며 선생님께 알린다', result: '선생님이 글을 내리게 하고 반과 이야기하셨어요.', impact: [{ who: '소희', text: '보호받았어요', tone: 1 }], ending: '알렸더니 소문 글이 내려갔어요. 알린 것은 잘한 일이에요.' },
                    { id: 'fight', text: '올린 친구 욕을 쓴다', result: '대화방에서 말다툼이 커졌어요.', impact: [{ who: '나와 친구들', text: '다툼이 생겼어요', tone: -1 }], why: '욕으로 맞서면 또 다른 폭력이 돼요.' },
                    { id: 'leave', text: '대화방을 나가 버린다', result: '글은 그대로 남았어요.', impact: [{ who: '소희', text: '글이 계속 보여요', tone: 0 }], why: '나가기 전에 어른께 알리면 글을 내릴 수 있어요.' },
                  ] } },
                { id: 'share', text: '다른 대화방에 옮긴다', result: '다른 반 친구들까지 알게 됐어요.', impact: [{ who: '소희', text: '모르는 친구들도 수군대요', tone: -1 }], why: '옮기면 소문이 더 멀리 가요.' },
              ] }, [['write', 'tell']],
            { third: { text: '그날 저녁 소희에게 무엇을 보낼까요?', choices: [
              { id: 'cheer', text: '"네 편이야, 선생님도 아셔"', result: '소희가 "고마워" 하고 답했어요.', impact: [{ who: '소희', text: '마음이 놓여요', tone: 1 }], ending: '소문을 끊고, 알리고, 친구 곁에도 섰어요.' },
              { id: 'copy', text: '소문 글을 캡처해 보내 준다', result: '소희가 그 글을 또 보고 울었어요.', impact: [{ who: '소희', text: '다시 아파요', tone: -1 }], why: '상처 준 글을 다시 보내지 않아요.' },
              { id: 'none', text: '아무것도 안 보낸다', result: '소희는 혼자라고 느꼈어요.', impact: [{ who: '소희', text: '외로워요', tone: 0 }] },
            ] }, pick: 'cheer' }, 0.25),
            DIL('"그거 사실이래" 하며 계속 말해요.', {
              text: '시우가 "소희가 어제 혼난 거 사실이야. 사실이니까 말해도 되지?" 해요.', motif: 'star',
              choices: [
                { id: 'fine', text: '"사실이면 괜찮지" 한다', result: '시우가 다른 친구들에게도 말했어요.', impact: [{ who: '소희', text: '창피하고 속상해요', tone: -1 }], why: '사실이어도 본인 없을 때 퍼뜨리면 상처가 돼요.' },
                { id: 'not', text: '"사실이어도 소희 없을 때 말하지 말자"', result: '시우가 "그런가?" 하고 생각했어요.', ending: '사실이어도 퍼뜨리지 않는 것이 친구를 지키는 일이에요.', next: {
                  text: '시우가 "그럼 뭐 하고 놀지?" 해요.', choices: [
                    { id: 'play', text: '"소희도 불러서 같이 놀자"', result: '셋이 함께 공놀이를 했어요.', impact: [{ who: '소희', text: '반가워요', tone: 1 }], ending: '뒷말 대신 함께 노는 길을 골랐어요.' },
                    { id: 'other', text: '다른 친구 이야기를 꺼낸다', result: '또 다른 뒷말이 시작됐어요.', impact: [{ who: '다른 친구', text: '흉이 생겨요', tone: -1 }], why: '주인공만 바뀐 뒷말도 상처가 돼요.' },
                    { id: 'quiet', text: '말없이 자리를 뜬다', result: '시우는 혼자 남아 머쓱했어요.', impact: [{ who: '시우', text: '어리둥절해요', tone: 0 }] },
                  ] } },
                { id: 'more', text: '"더 자세히 말해 봐"', result: '이야기가 부풀려졌어요.', impact: [{ who: '소희', text: '없던 일까지 생겼어요', tone: -1 }], why: '캐물으면 소문이 더 부풀어요.' },
              ] }, [['not', 'play']],
            { third: { text: '다음 날 소희가 "나 무슨 소문 있어?" 하고 물어요.', choices: [
              { id: 'kind', text: '"뒷말은 멈췄어. 걱정 마"', result: '소희가 안심했어요.', impact: [{ who: '소희', text: '편안해졌어요', tone: 1 }], ending: '소문을 끊고 소희 마음도 살폈어요.' },
              { id: 'tellall', text: '들은 말을 다 들려준다', result: '소희가 더 걱정하게 됐어요.', impact: [{ who: '소희', text: '불안해요', tone: -1 }], why: '상처 주는 말을 다시 옮기지 않아요.' },
              { id: 'lie', text: '"몰라" 하고 피한다', result: '소희는 계속 궁금해했어요.', impact: [{ who: '소희', text: '걱정돼요', tone: 0 }] },
            ] }, pick: 'kind' }, 0.3, { conclude: '확실하지 않은 말도, 사실인 말도 본인 없는 곳에서 퍼뜨리지 않아요. "나는 안 전할게"가 소문을 끊어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '친구 이야기가 사실이라면 퍼뜨려도 될까요?', options: ['네, 사실이니까요', '아니요, 사실이어도 상처가 돼요'], answer: '아니요, 사실이어도 상처가 돼요' }, { type: 'short', prompt: '단짝이 소문을 전할 때 내가 할 말을 한 줄로 써요.' }] },
        notes: FICTION,
      }),
      C({
        id: 'bully.e34.g3-rumor-chain.wrap.stop-words', type: 'wrap', title: '소문을 끊는 말 카드',
        method: '소문을 끊는 말 카드', tool: 'wordcards', minutes: 6,
        levels: { easy: '상황 2개에 끊는 말 카드를 잇는다.', base: '상황 3개에 끊는 말 카드를 잇는다.', challenge: '상황 4개에 남는 카드를 가려 잇고, 내 말로 한 문장을 더 만들어 짝에게 말한다(출구 2번).' },
        wrap: {
          teacher: '"이럴 때 소문을 끊는 한마디는 무엇일까요?" 카드를 이은 뒤 짝과 한 번씩 소리 내어 말해 보게 한다. "그런 말 하면 친구가 나를 싫어할 거예요"라는 걱정에는 "끊는 말은 친구를 나무라는 말이 아니라 \'나는 안 할게\'라는 내 약속이에요"라고 말해 준다.',
          exitTicket: [
            EX('wordcards', MATCH('상황에 맞는 소문 끊는 말을 이어요.', {}, [['"소희가 베꼈대" 들을 때', '확실하지 않잖아'], ['친구 흉을 보기 시작할 때', '본인 없을 때 말 말자'], ['"너도 전해 봐" 할 때', '나는 안 전할게'], ['소문 글이 올라올 때', '선생님께 알리자']], 2, 3, '더 재밌게 전해 줘', 0.15)),
            { type: 'short', prompt: '소문을 끊는 말을 내 말로 한 문장 만들어 써요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '소문을 끊는 말',
          items: [
            { type: 'check', prompt: '소문을 끊는 말에 표시해요.', options: ['확실하지 않잖아', '나는 안 전할게', '더 말해 봐', '본인 없을 때 말하지 말자'] },
            { type: 'short', prompt: '소문을 들었을 때 내가 할 말을 한 줄로 써요.' },
          ],
          easy: { note: '"나는 안 전할게"를 떠올려요.', items: [{ type: 'choice', prompt: '소문을 들으면?', options: ['안 전해요', '더 전해요'], answer: '안 전해요' }] },
        },
      }),
      C({
        id: 'bully.e34.g3-rumor-chain.wrap.scissors-pattern', type: 'wrap', title: '"듣고 멈추고 안 전하기" 규칙 띠',
        method: '"듣고 → 멈추고 → 안 전하기" 규칙 띠', tool: 'pattern', minutes: 6,
        levels: { easy: '규칙 띠에서 틀린 조각 1개를 찾고, 빈칸 1개를 바른 조각으로 채운다.', base: '틀린 조각을 찾고, 빈칸 2개를 바른 조각으로 바꿔 채운다.', challenge: '틀린 조각을 찾은 뒤 빈칸 3개를 채우고, 나만의 규칙 띠는 활동지에 그린다.' },
        wrap: {
          teacher: '"우리 규칙 띠는 \'들어요 → 멈춰요 → 안 전해\'가 되풀이돼요. 규칙을 깬 조각은 어디일까요?" 틀린 조각을 찾으면 "이 자리에 무엇이 와야 할까요?"라고 묻고 빈칸을 채우게 한다. "들으면 전하는 게 자연스러워요"라는 말에는 "들은 다음에 한 번 멈추면, 전할지 말지 고를 수 있어요"라고 말해 준다.',
          exitTicket: [
            { type: 'tool', tool: 'pattern', options: { mode: 'odd', seq: ['들어요', '멈춰요', '안 전해', '들어요', '멈춰요', '전해요', '들어요', '멈춰요', '안 전해'] }, prompt: '규칙 띠에서 규칙을 깬 조각을 찾아요.', target: { odd: 5 }, difficulty: 0.15,
              levels: { easy: { toolOptions: { seq: ['들어요', '멈춰요', '안 전해', '들어요', '멈춰요', '전해요'] }, target: { odd: 5 } } } },
            { type: 'tool', tool: 'pattern', options: { seq: ['들어요', '멈춰요', '안 전해', '들어요', null, '안 전해', '들어요', '멈춰요', null], palette: ['들어요', '멈춰요', '안 전해', '전해요'] }, prompt: '빈칸에 규칙에 맞는 조각을 채워요.', target: { fill: ['멈춰요', '안 전해'] }, difficulty: 0.2,
              levels: {
                easy: { prompt: '빈칸 하나에 규칙에 맞는 조각을 채워요.', toolOptions: { seq: ['들어요', '멈춰요', '안 전해', '들어요', '멈춰요', null] }, target: { fill: ['안 전해'] } },
                challenge: { prompt: '빈칸 셋에 규칙에 맞는 조각을 채워요.', toolOptions: { seq: ['들어요', null, '안 전해', '들어요', '멈춰요', null, null, '멈춰요', '안 전해'] }, target: { fill: ['멈춰요', '안 전해', '들어요'] } },
              } },
            { type: 'choice', prompt: '친구 소문을 들은 다음에 먼저 할 일은?', options: ['바로 전해요', '멈추고 생각해요', '더 물어봐요'], answer: 1, difficulty: 0.1, explain: '듣고 멈추면 전하지 않기를 고를 수 있어요.' },
          ],
        },
        worksheet: {
          title: '듣고 → 멈추고 → 안 전하기',
          items: [
            { type: 'blank', prompt: '규칙 띠의 빈칸을 채워요.', text: '들어요 → 멈춰요 → ___ → 들어요 → 멈춰요 → 안 전해', answer: '안 전해' },
            { type: 'draw', prompt: '나만의 "소문 끊기" 규칙 띠를 그림으로 그려요.' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 3학년 · 우리 반 단톡방 첫 규칙과 이모티콘 (사이버폭력 예방 — research-mandatory §1 지침 3차시 이상)
  // ======================================================================================================
  {
    const C = T('g3-chatroom-rules', 3);
    const VOTE = [['한 명 빼지 않기', 9], ['비웃는 이모티콘 금지', 7], ['밤 9시 뒤 안 보내기', 5], ['허락 없이 사진 금지', 3], ['줄임말 욕 안 쓰기', 1]];
    const VPIC = { type: 'picture', title: '대화방 규칙 투표(가상의 3학년 반 25명)', unit: '명', xLabel: '규칙 후보', yLabel: '표 수', icons: PEOPLE, icon: 'person' };
    const RULES = ['한 명도 빼지 않아요', '비웃는 이모티콘을 안 써요', '밤 9시 뒤엔 안 보내요', '줄임말 욕을 안 써요'];
    M.push(
      C({
        id: 'bully.e34.g3-chatroom-rules.intro.emoji-feelings', type: 'intro', title: '이모티콘을 받은 친구 마음',
        method: '이모티콘 받은 친구 마음 고르기', tool: 'emotion', minutes: 6,
        levels: { easy: '대화 2개(비웃는 이모티콘 줄·생일 축하 하트)에 받은 친구 마음을 함께 놓는다.', base: '대화 3개에 받은 친구 마음 카드를 하나씩 놓고 까닭을 말한다.', challenge: '같은 "ㅋㅋ"가 다른 뜻이 되는 두 대화를 견주어 짝에게 말한다(교사 진행).' },
        intro: {
          teacher: '"다온이가 대화방에 그림을 올렸더니 \'ㅋㅋㅋ\'와 입을 가리고 웃는 이모티콘이 줄줄이 달렸어요. 다온이 마음은요?" 시연 단추로 대화마다 마음 카드가 놓이는 것을 보인다(기다릴 반응: "창피해요", "속상해요"). "이모티콘은 말이 아니라 괜찮아요"라는 말이 나오면 "얼굴을 보고 비웃는 것과 이모티콘으로 비웃는 것, 받는 마음은 다를까요?"라고 되묻는다. 오늘은 우리 반 대화방 첫 규칙을 함께 정한다고 밝힌다.',
          student: '대화방 그림 세 개를 보고 받은 친구의 마음 카드를 골라요. 왜 그 마음인지 말해 보아요.',
          demo: { tool: 'emotion', options: { mode: 'match', slots: [{ id: 'c1', label: '그림 밑에 비웃는 이모티콘 줄줄이' }, { id: 'c2', label: '"생일 축하해"와 하트' }, { id: 'c3', label: '말할 때마다 "ㅋㅋ"만 달림' }], cards: ['창피함', '기쁨', '속상함', '신남', '편안함'], shuffle: false }, sequence: [{ match: { c1: '창피함' } }, { match: { c1: '창피함', c2: '기쁨' } }, { match: { c1: '창피함', c2: '기쁨', c3: '속상함' } }] },
          art: { draw: 'a large paper phone screen showing a class group chat with a child\'s drawing and a long line of small laughing face stickers under it, one paper child looking at the screen with a sad face', banner: '이모티콘도 말이에요', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '대화방·앱 이름은 쓰지 않고 "단체 대화방"이라고만 한다. 학생에게 실제 대화방 내용을 보여 달라고 하지 않는다.',
      }),
      C({
        id: 'bully.e34.g3-chatroom-rules.intro.chat-time-clock', type: 'intro', title: '대화방 쉬는 시각 정하기',
        method: '대화방 쉬는 시각 정하기', tool: 'clock', minutes: 6,
        levels: { easy: '정각(밤 9시)에 바늘이 맞춰지는 것을 함께 본다.', base: '30분 단위(밤 8시 30분)로 바늘을 맞춘 시각을 함께 읽는다.', challenge: '보내기를 멈추는 시각과 다시 여는 시각(아침 7시 30분) 두 개를 읽고 까닭을 말한다.' },
        intro: {
          teacher: '"우리 반 대화방에 밤늦게 메시지가 오면 친구는 어떨까요?" 시연 단추로 시계가 밤 9시, 8시 30분, 아침 7시 30분으로 차례로 움직이는 것을 보인다. 시각마다 "이때부터 보내지 않으면 무엇이 좋을까요?"라고 묻는다(기다릴 반응: "잠을 잘 자요", "깨지 않아요"). "늦게 보내도 답 안 하면 되잖아요"라는 말이 나오면 "알림 소리에 깬 친구는요? 밤에 혼자 읽은 놀림 글은요?"라고 되묻는다. 시각은 우리 반이 정하는 약속이라고 밝힌다.',
          student: '시계 바늘이 가리키는 시각을 읽고, 대화방을 쉬기 좋은 시각을 짝과 정해 보아요.',
          demo: { tool: 'clock', options: { showDigital: true }, sequence: [{ h: 9, m: 0 }, { h: 8, m: 30 }, { h: 7, m: 30 }] },
          art: { draw: 'a paper alarm clock showing nine o\'clock beside a paper phone resting face down on a bedside table under a paper moon', banner: '대화방도 쉬는 시간', extra: [{ motif: 'moon', x: 300, y: 96 }] },
        },
        notes: '"밤 9시"는 우리 반이 정하는 약속 시각의 예다. 학급에서 보호자와 의논해 다른 시각으로 정해도 된다.',
      }),
      C({
        id: 'bully.e34.g3-chatroom-rules.activity.rule-rank', type: 'activity', title: '규칙 후보 투표 그래프',
        method: '규칙 후보 투표 그래프 만들기', tool: 'chart', minutes: 14,
        levels: { easy: '후보 3개의 그림그래프를 완성한다(첫 후보 그림은 미리 놓여 있다).', base: '후보 5개의 그림그래프를 완성하고 1위·2위 규칙을 고른다.', challenge: '1·2위를 고른 뒤 표가 가장 적은 규칙도 필요한 까닭을 짝과 말한다(넷째 문항).' },
        activity: {
          title: '규칙 후보 투표 그래프', tool: 'chart',
          teacher: '"가상의 우리 반 25명이 대화방 규칙 후보에 투표했어요. 큰 그림 하나는 몇 명이었나요?" 표의 수를 함께 읽고 그림그래프를 완성한다. 큰 그림을 1명으로 세는 학생에게 "큰 사람 그림은 5명이에요. 9명은 큰 그림 몇 개와 작은 그림 몇 개일까요?"라고 묻는다. 1·2위를 찾은 뒤 "줄임말 욕은 1표뿐이니 규칙이 필요 없을까요?"라고 물어 표 수와 필요는 다르다는 것을 짚는다.',
          task: '투표 표를 보고 그림그래프를 완성한 뒤, 1위·2위 규칙을 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '표를 보고 대화방 규칙 투표 그림그래프를 완성해요.', toolOptions: Object.assign({}, VPIC, { mode: 'build', data: VOTE, showTable: true }), target: { build: true }, difficulty: 0.25,
              levels: { easy: { prompt: '표를 보고 후보 3개의 그림그래프를 완성해요.', toolOptions: { data: VOTE.slice(0, 3), given: [0] }, target: { build: true } } } },
            { prompt: '표를 가장 많이 받은 1위 규칙은?', toolOptions: Object.assign({}, VPIC, { mode: 'read', data: VOTE, question: '1위 규칙은?', choices: VOTE.map((x) => x[0]) }), target: { pick: 0 }, difficulty: 0.15 },
            { prompt: '두 번째로 많은 2위 규칙은?', toolOptions: Object.assign({}, VPIC, { mode: 'read', data: VOTE, question: '2위 규칙은?', choices: VOTE.map((x) => x[0]) }), target: { pick: 1 }, difficulty: 0.2 },
            { prompt: '표가 가장 적은 규칙도 필요한 까닭을 짝과 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '투표 표의 빈칸을 채워요.', columns: ['규칙 후보', '표 수(명)'], cells: [['한 명 빼지 않기', '9'], ['비웃는 이모티콘 금지', ''], ['밤 9시 뒤 안 보내기', '5']], answer: '7' }] },
        notes: '투표 자료는 가상이다. 실제 학급 투표를 할 때는 후보만 칠판에 적고 손들기나 스티커로 한다. 특정 친구를 떠올리게 하는 후보는 넣지 않는다.',
      }),
      C({
        id: 'bully.e34.g3-chatroom-rules.activity.chat-sort', type: 'activity', title: '괜찮아요/상처예요 대화 나누기',
        method: '괜찮아요/상처예요 대화 나누기', tool: 'sortboard', minutes: 14,
        levels: { easy: '판마다 카드 4장, 놓으면 바로 맞는지 알려 주고 바구니마다 든 장 수가 보인다.', base: '판마다 카드 6장을 두 바구니에 나눈다(대화·이모티콘과 줄임말·한 명 빼기).', challenge: '판마다 카드 2장이 더해지고, 애매한 "ㅋㅋ"를 어디에 둘지 짝과 토의한다(교사 진행).' },
        activity: {
          title: '괜찮아요/상처예요 대화 나누기', tool: 'sortboard',
          teacher: '"이 말풍선을 받은 친구는 어떤 마음일까요?" 카드마다 받는 친구의 얼굴을 떠올리고 까닭을 한 문장으로 말하게 한다. "다들 쓰는 줄임말이에요"라는 학생에게 "줄여 써도 그 뜻은 그대로일까요?"라고 묻는다. 도전 단계에서 "ㅋㅋ"는 함께 웃을 때는 괜찮지만, 한 사람을 두고 줄줄이 달면 비웃음이 된다는 것을 짚는다.',
          task: '대화방 말풍선 카드를 "괜찮아요"와 "상처예요" 바구니에 나누어요.', levels: BOARD_LV,
          items: [
            SORT('대화 말풍선을 두 바구니에 나누어요.', {}, ['괜찮아요', '상처예요'],
              [['생일 축하해', '내일 준비물 알림', '"고마워" 답장'], ['너만 빼고 새 방 만들자', '"너는 말하지 마"', '사진에 놀림 글']], 2, [['"늦었다, 내일 봐"'], ['"쟤 또 왔네"']], 0.15),
            SORT('이모티콘과 줄임말을 두 바구니에 나누어요.', {}, ['괜찮아요', '상처예요'],
              [['하트 이모티콘 답장', '엄지 척 이모티콘', '"ㄱㅅ"(고마워)'], ['비웃는 얼굴 도배', '"ㅂㅅ" 줄임말', '욕을 초성으로 쓰기']], 2, [['같이 웃는 "ㅋㅋ"'], ['한 명에게만 "ㅋㅋ" 도배']], 0.2),
            SORT('한 명을 빼거나 몰아가는 말을 가려 나누어요.', {}, ['같이해요', '한 명 빼기·몰아가기'],
              [['새 친구도 초대해요', '모두에게 묻고 정해요', '"너는 어때?" 물어요'], ['한 명만 빼고 새 방', '"쟤 말엔 답 말자"', '한 명 말에 다 같이 비웃음']], 2, [['늦게 온 친구에게 정리해 줌'], ['"쟤 내보내자" 투표']], 0.25,
              { conclude: '이모티콘도, 줄임말도, 한 명을 빼는 것도 화면 속 말이에요. 받는 친구가 상처받으면 사이버폭력이에요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '"ㅂㅅ"처럼 줄여 쓴 욕은 어떨까요?', options: ['줄였으니 괜찮아요', '줄여도 욕이라 상처가 돼요'], answer: '줄여도 욕이라 상처가 돼요' }] },
        notes: '줄임말 욕은 계획에 있는 "ㅂㅅ" 하나만 화면에 보이고, 교사는 그 뜻을 소리 내어 풀어 말하지 않는다. 학생에게 다른 줄임말 욕을 말해 보라고 하지 않는다.',
      }),
      C({
        id: 'bully.e34.g3-chatroom-rules.activity.chat-dilemma', type: 'activity', title: '갈림길: 대화방 놀림',
        method: '갈림길: 대화방에서 한 친구를 놀릴 때', tool: 'dilemma', minutes: 26,
        levels: { easy: '갈림 1번, 보기 2개 가운데 고르고 결과를 본다.', base: '갈림 2번, 보기 3개씩 고르며 다음 장면·결과를 따라간다(장면 셋).', challenge: '갈림 3번 — 바른 길 끝에 놀림 받은 친구에게 보낼 말을 고르는 셋째 장면이 이어진다.' },
        activity: {
          title: '갈림길: 대화방 놀림', tool: 'dilemma',
          teacher: '"내가 이모티콘 하나를 달면 사진 속 친구에게는 어떻게 보일까요?" 결과 장면을 소리 내어 읽고 다음 장면에서 다시 고른다. "아무것도 안 하면 나는 잘못 없어요"라는 말에는 "그 길 끝에서 사진은 어떻게 됐나요?"라고 되물어 끝까지 가 보게 한다. 놀린 친구를 "나쁜 애"라고 부르는 말이 나오면 "그 친구가 한 행동을 멈추게 하는 거예요"라고 바로잡는다. 놀림을 멈추게 하고 알린 사람은 잘한 것이라고 꼭 말한다.',
          task: '대화방 장면을 읽고 보기를 골라요. 결과를 보고 다음 장면에서 또 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL('친구 사진에 웃는 이모티콘이 달려요.', {
              text: '반 대화방에 라온이가 하품하는 사진이 올라오고, 친구들이 웃는 이모티콘을 줄줄이 달아요.', motif: 'house',
              choices: [
                { id: 'add', text: '나도 이모티콘을 단다', result: '이모티콘이 하나 더 늘었어요.', impact: [{ who: '라온이', text: '모두 비웃는 것 같아요', tone: -1 }], why: '이모티콘 하나도 놀림에 힘을 보태요.' },
                { id: 'stop', text: '"그만하자" 쓰고 선생님께 알린다', result: '이모티콘이 멈추고 선생님이 사진을 내리게 하셨어요.', ending: '"그만하자" 한 줄과 알린 일이 라온이를 지켰어요.', next: {
                  text: '한 친구가 "고자질쟁이" 하고 따로 메시지를 보냈어요.', choices: [
                    { id: 'show', text: '그 메시지도 선생님께 보여 드린다', result: '선생님이 반 친구들과 대화방 약속을 다시 정하셨어요.', impact: [{ who: '반 친구들', text: '대화방이 편해졌어요', tone: 1 }], ending: '알리는 것은 고자질이 아니라 친구를 지키는 일이에요.' },
                    { id: 'back', text: '나도 욕으로 답한다', result: '말다툼이 커졌어요.', impact: [{ who: '나', text: '다툼에 휘말려요', tone: -1 }], why: '욕으로 맞서면 또 다른 폭력이 돼요.' },
                    { id: 'sorry', text: '"미안, 다시는 안 알릴게"', result: '다음 놀림 때 아무도 멈추지 않았어요.', impact: [{ who: '라온이', text: '또 혼자예요', tone: -1 }], why: '알린 것은 잘한 일이라 사과할 일이 아니에요.' },
                  ] } },
                { id: 'none', text: '아무것도 안 한다', result: '사진과 이모티콘이 대화방에 그대로 남았어요.', impact: [{ who: '라온이', text: '계속 창피해요', tone: -1 }], why: '보고만 있으면 놀림이 계속돼요.' },
              ] }, [['stop', 'show']],
            { third: { text: '그날 저녁 라온이에게 무엇을 보낼까요?', choices: [
              { id: 'cheer', text: '"사진 내려갔어, 네 편이야"', result: '라온이가 "고마워"라고 답했어요.', impact: [{ who: '라온이', text: '마음이 놓여요', tone: 1 }], ending: '멈추고, 알리고, 친구 곁에도 섰어요.' },
              { id: 'again', text: '그 사진을 다시 보내 준다', result: '라온이가 또 속상해했어요.', impact: [{ who: '라온이', text: '다시 아파요', tone: -1 }], why: '상처 준 사진은 다시 보내지 않아요.' },
              { id: 'joke', text: '"근데 좀 웃기긴 했어"', result: '라온이가 답을 하지 않았어요.', impact: [{ who: '라온이', text: '서운해요', tone: -1 }], why: '위로하는 말에 놀림을 섞지 않아요.' },
            ] }, pick: 'cheer' }, 0.2),
            DIL('대화방에서 한 친구 말에만 줄임말 욕이 달려요.', {
              text: '시우가 말할 때마다 몇몇 친구가 줄임말 욕을 달아요.', motif: 'cloud',
              choices: [
                { id: 'laugh', text: '"ㅋㅋ"를 단다', result: '줄임말 욕이 더 이어졌어요.', impact: [{ who: '시우', text: '말하기가 무서워요', tone: -1 }], why: '"ㅋㅋ"도 욕에 맞장구치는 말이 돼요.' },
                { id: 'rule', text: '"우리 욕 안 쓰기로 했잖아" 쓴다', result: '몇몇이 "알겠어" 하고 멈췄어요.', ending: '규칙을 떠올려 주자 대화방이 조용해졌어요.', next: {
                  text: '한 명은 계속 시우 말에 줄임말 욕을 달아요.', choices: [
                    { id: 'adult', text: '화면을 보여 드리며 어른께 알린다', result: '선생님이 그 친구와 따로 이야기하셨어요.', impact: [{ who: '시우', text: '안심했어요', tone: 1 }], ending: '말로 안 멈추면 어른께 알려요. 잘한 일이에요.' },
                    { id: 'many', text: '여럿이 그 친구를 욕한다', result: '이번엔 그 친구가 몰리게 됐어요.', impact: [{ who: '그 친구', text: '몰려요', tone: -1 }], why: '몰아가기로 갚으면 또 다른 폭력이에요.' },
                    { id: 'quit', text: '대화방을 나간다', result: '시우는 혼자 남았어요.', impact: [{ who: '시우', text: '외로워요', tone: 0 }], why: '나가기 전에 어른께 알리면 멈출 수 있어요.' },
                  ] } },
                { id: 'quiet', text: '못 본 척 다른 말을 쓴다', result: '시우는 대화방에서 말이 없어졌어요.', impact: [{ who: '시우', text: '혼자 참아요', tone: -1 }], why: '못 본 척하면 몰아가기가 계속돼요.' },
              ] }, [['rule', 'adult']],
            { third: { text: '시우가 "나 대화방 나갈까?" 하고 따로 물어요.', choices: [
              { id: 'stay', text: '"선생님이 도와주셔. 같이 있자"', result: '시우가 대화방에 남았어요.', impact: [{ who: '시우', text: '든든해요', tone: 1 }], ending: '시우가 혼자 떠나지 않게 곁에 있었어요.' },
              { id: 'go', text: '"응, 나가는 게 낫겠다"', result: '시우만 대화방에서 빠졌어요.', impact: [{ who: '시우', text: '빠진 사람이 됐어요', tone: -1 }], why: '놀림 받은 친구가 빠질 일이 아니에요. 멈출 쪽은 놀린 행동이에요.' },
              { id: 'idk', text: '"몰라, 네가 알아서 해"', result: '시우는 더 막막해했어요.', impact: [{ who: '시우', text: '막막해요', tone: -1 }] },
            ] }, pick: 'stay' }, 0.25),
            DIL('"쟤 빼고 새 방 만들자"는 말이 올라와요.', {
              text: '대화방에 "하람이 빼고 새 방 만들자, 찬성?"이라는 글이 올라왔어요.', motif: 'star',
              choices: [
                { id: 'yes', text: '"찬성" 누른다', result: '하람이만 빠진 새 방이 생겼어요.', impact: [{ who: '하람이', text: '혼자 남았어요', tone: -1 }], why: '찬성 하나로 한 명 빼기가 이루어져요.' },
                { id: 'no', text: '"한 명 빼는 건 안 돼" 쓴다', result: '찬성이 더 늘지 않았어요.', ending: '반대 한 줄로 한 명 빼기를 막았어요.', next: {
                  text: '글을 올린 친구가 "그럼 너도 빠지든가" 해요.', choices: [
                    { id: 'teacher', text: '선생님께 대화방 일을 알린다', result: '선생님이 반 대화방 규칙을 함께 정하자고 하셨어요.', impact: [{ who: '하람이와 나', text: '보호받아요', tone: 1 }], ending: '겁주는 말에도 알렸어요. 알린 것은 잘한 일이에요.' },
                    { id: 'give', text: '겁이 나서 찬성으로 바꾼다', result: '하람이는 결국 빠졌어요.', impact: [{ who: '하람이', text: '외로워요', tone: -1 }], why: '겁날 때는 혼자 버티지 말고 어른께 알려요.' },
                    { id: 'fight', text: '그 친구 흉을 다른 방에 쓴다', result: '또 다른 뒷말이 생겼어요.', impact: [{ who: '그 친구', text: '흉이 퍼져요', tone: -1 }], why: '흉으로 갚으면 또 다른 폭력이에요.' },
                  ] } },
                { id: 'skip', text: '읽고 답하지 않는다', result: '다른 친구들이 찬성을 눌렀어요.', impact: [{ who: '하람이', text: '빠지게 됐어요', tone: -1 }], why: '읽고 지나치면 한 명 빼기를 막지 못해요.' },
              ] }, [['no', 'teacher']],
            { third: { text: '하람이가 "내가 뭘 잘못했어?" 하고 물어요.', choices: [
              { id: 'notyou', text: '"네 잘못 아니야. 같이 있자"', result: '하람이가 고개를 끄덕였어요.', impact: [{ who: '하람이', text: '힘이 나요', tone: 1 }], ending: '한 명 빼기를 막고, 친구 마음도 지켰어요.' },
              { id: 'maybe', text: '"너도 좀 고쳐 봐"', result: '하람이가 자기 탓을 했어요.', impact: [{ who: '하람이', text: '더 아파요', tone: -1 }], why: '빼는 행동이 잘못이지 빠진 친구 탓이 아니에요.' },
              { id: 'shrug', text: '"나도 몰라"', result: '하람이는 혼자 걱정했어요.', impact: [{ who: '하람이', text: '걱정돼요', tone: 0 }] },
            ] }, pick: 'notyou' }, 0.3, { conclude: '대화방에서 한 명을 놀리거나 빼면 "그만하자"를 쓰고 어른께 알려요. 알린 사람은 잘한 거예요.' }),
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '대화방에서 한 친구를 놀리면 "___" 쓰고 선생님께 알려요.', answer: '그만하자' }, { type: 'short', prompt: '놀림 받은 친구에게 보낼 위로 메시지를 한 줄로 써요.' }] },
        notes: FICTION,
      }),
      C({
        id: 'bully.e34.g3-chatroom-rules.wrap.rule-poster', type: 'wrap', title: '우리 반 대화방 규칙 포스터',
        method: '우리 반 대화방 규칙 포스터', tool: 'collage', minutes: 6,
        levels: { easy: '정한 규칙 2개를 떠올리며 조각 3개 이상(하트 1개 포함)을 붙인다.', base: '정한 규칙 3개를 떠올리며 조각 5개 이상(하트 1개 포함)을 붙인다.', challenge: '조각 5개 이상을 붙이고 "어기면 어떻게 할까" 칸을 활동지에 더해 점검 4칸에 표시한다.' },
        wrap: {
          teacher: '"오늘 정한 대화방 규칙 세 가지는 무엇이었나요?" 규칙 하나에 조각 하나씩 — 말풍선(동그라미)·자물쇠(네모)·하트를 붙이며 규칙을 소리 내어 말하게 한다. "어기면 벌을 주자"는 말이 나오면 "벌보다 먼저, 어긴 친구가 무엇을 바로잡으면 좋을까요?"라고 되물어 회복으로 잇는다.',
          exitTicket: [
            { type: 'tool', tool: 'collage', options: { shapes: ['circle', 'square', 'heart', 'star', 'rect'], maxPieces: 12 }, prompt: '말풍선·자물쇠·하트 조각으로 대화방 규칙 포스터를 꾸며요.', target: { has: [{ shape: 'heart', min: 1 }], selfCheck: ['규칙을 떠올렸어요', '조각을 붙였어요', '짝과 함께 보았어요'], minPieces: 5 }, difficulty: 0.1,
              levels: { easy: { target: { has: [{ shape: 'heart', min: 1 }], selfCheck: ['규칙을 떠올렸어요', '조각을 붙였어요'], minPieces: 3 } }, challenge: { target: { has: [{ shape: 'heart', min: 1 }], selfCheck: ['규칙을 떠올렸어요', '조각을 붙였어요', '짝과 함께 보았어요', '"어기면" 칸을 정했어요'], minPieces: 5 } } } },
            { type: 'choice', prompt: '대화방 규칙을 정하는 까닭은?', options: ['모두 편하게 말하려고', '한 명을 빼려고', '선생님이 시켜서'], answer: 0, difficulty: 0.1, explain: '규칙은 대화방에서 아무도 상처받지 않게 하려고 정해요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '우리 반 대화방 규칙',
          items: [
            { type: 'table', prompt: '우리 반이 정한 대화방 규칙을 써요.', columns: ['번호', '규칙'], cells: [['1', ''], ['2', ''], ['3', '']], answer: '예: 한 명도 빼지 않아요, 비웃는 이모티콘을 안 써요, 밤 9시 뒤엔 안 보내요' },
            { type: 'short', prompt: '규칙을 어겼을 때 어떻게 바로잡을지 한 줄로 써요.' },
          ],
        },
      }),
      C({
        id: 'bully.e34.g3-chatroom-rules.wrap.rule-check', type: 'wrap', title: '대화방 규칙 스스로 점검',
        method: '대화방 규칙 스스로 점검', tool: 'timer', minutes: 6,
        levels: { easy: '규칙 2개를 읽고 "지킬 수 있어요"에 표시한다.', base: '규칙 3개를 읽고 표시한다.', challenge: '규칙 4개에 표시하고, 지키기 어려운 규칙 하나와 방법을 출구 3번에 쓴다.' },
        wrap: {
          teacher: '"규칙을 하나씩 읽어 볼게요. 내가 지킬 수 있는 것에 표시해요." 점검 칸을 함께 소리 내어 읽고 스스로 표시하게 한다. "다 지킬 수 있어요"라고 서두르는 학생에게 "그중 가장 어려울 것 같은 규칙은 무엇일까요? 어려울 때 무엇을 할까요?"라고 묻는다. 출구 2번에서 "다들 쓰니까 괜찮다"를 고른 학생에게 오늘 나눈 줄임말 판을 떠올리게 한다.',
          exitTicket: [
            SELF('대화방 규칙 점검', RULES, '정한 규칙을 하나씩 읽고 지킬 수 있는 것에 표시해요.'),
            { type: 'choice', prompt: '다들 쓰는 줄임말 욕이면 괜찮을까요?', options: ['다들 쓰면 괜찮아요', '줄여도 욕이라 안 써요', '선생님만 없으면 돼요'], answer: 1, difficulty: 0.1, explain: '여럿이 써도, 줄여 써도 욕은 상처가 돼요.' },
            { type: 'short', prompt: '지키기 어려운 규칙 하나와 지킬 방법을 한 줄로 써요.' },
          ],
        },
        worksheet: {
          title: '대화방 규칙 점검표',
          items: [
            { type: 'check', prompt: '내가 지킬 규칙에 표시해요.', options: RULES },
            { type: 'short', prompt: '이번 주 대화방에서 내가 쓸 고운 말 하나를 써요.' },
          ],
          easy: { note: '"한 명도 빼지 않아요"부터 떠올려요.', items: [{ type: 'choice', prompt: '대화방에서 한 명만 빼면?', options: ['안 돼요', '괜찮아요'], answer: '안 돼요' }] },
        },
      }),
    );
  }

  // ======================================================================================================
  // 3학년 · 몰래 찍은 사진·영상 멈추기 (사이버폭력 예방 — research-mandatory §1 지침 3차시 이상)
  // ======================================================================================================
  {
    const C = T('g3-hidden-camera', 3);
    const SEEN = [['처음', 1], ['1시간 뒤', 3], ['2시간 뒤', 9]];
    // 세 단계 차례: 쉬움 = 세 장만, 기본 = 틀린 카드 한 장이 섞임, 도전 = 틀린 카드 두 장이 섞임
    const STEP3 = (prompt, steps, trap, trap2, d, more) => {
      const ids = steps.map((c) => c.id);
      const p = strip(prompt);
      return {
        prompt, toolOptions: { mode: 'order', axis: ['먼저', '나중'], slots: NAMES[3], cards: shuffled(steps).concat(trap) }, target: { order: ids }, difficulty: d,
        levels: {
          easy: { prompt: `${p}(3장).`, toolOptions: { cards: shuffled(steps) }, target: { order: ids } },
          challenge: { prompt: `${p}. 틀린 카드 두 장은 빼요.`, toolOptions: { cards: [trap2].concat(shuffled(steps), trap) }, target: { order: ids } },
        },
        ...more,
      };
    };
    M.push(
      C({
        id: 'bully.e34.g3-hidden-camera.intro.secret-photo-feel', type: 'intro', title: '몰래 찍힌 친구의 마음',
        method: '몰래 찍힌 친구 마음', tool: 'emotion', minutes: 6,
        levels: { easy: '마음 카드 2장을 찍힌 이안이 칸에 함께 놓아 본다.', base: '마음 카드 6장 가운데 찍힌 이안이의 마음을 고르고 까닭을 말한다.', challenge: '사진을 돌려 본 친구들의 마음도 짐작해 칸에 놓고 두 마음을 견준다.' },
        intro: {
          teacher: '"이안이가 급식을 먹다 입을 크게 벌린 순간이 몰래 찍혔어요. 그 사진이 돌고 있대요. 이안이 마음은요?" 시연 단추로 이안이 칸과 돌려 본 친구 칸에 마음 카드가 놓이는 것을 보인다(기다릴 반응: "창피해요", "화나요"). "재미로 찍은 건데요"라는 말이 나오면 "찍는 사람이 재미있으면, 찍힌 사람도 괜찮을까요? 이안이에게 물어봤나요?"라고 되묻는다.',
          student: '몰래 찍힌 사진이 돌아다니는 장면을 읽고, 찍힌 이안이의 마음 카드를 골라요.',
          demo: { tool: 'emotion', options: { mode: 'match', slots: [{ id: 'shot', label: '몰래 찍힌 이안이' }, { id: 'saw', label: '사진을 돌려 본 친구들' }], cards: ['창피함', '화남', '걱정', '신남', '미안함', '편안함'], shuffle: false }, sequence: [{ match: { shot: '창피함' } }, { match: { shot: '창피함', saw: '미안함' } }] },
          art: { draw: 'a paper school cafeteria where one paper child eats lunch while, in the background, another paper child secretly holds up a small paper phone; a paper speech bubble with a camera shape floats above', banner: '찍힌 친구는 어떤 마음일까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: FICTION + ' 사진 장면은 급식·하품처럼 가벼운 순간만 쓰고, 몸이 드러나는 장면은 쓰지 않는다.',
      }),
      C({
        id: 'bully.e34.g3-hidden-camera.intro.who-saw-chart', type: 'intro', title: '사진이 몇 명에게 갔을까',
        method: '사진이 몇 명에게 갔을까 그래프 읽기', tool: 'chart', minutes: 6,
        levels: { easy: '"처음"과 "1시간 뒤" 두 막대만 함께 읽는다.', base: '세 막대(1명·3명·9명)를 읽고 2시간 뒤 사진을 본 사람 수를 고른다.', challenge: '어느 막대에서 멈췄어야 하는지 고르고 까닭을 짝에게 말한다(교사 진행).' },
        intro: {
          teacher: '"처음엔 찍은 친구 한 명만 가진 사진이었어요. 1시간 뒤에는 몇 명이 봤나요? 2시간 뒤에는요?" 시연 단추로 2시간 뒤 막대가 골라지는 것을 보이고, 1명→3명→9명을 함께 읽는다. "지우면 다 없어지잖아요"라는 말이 나오면 "내 것을 지워도 이미 받은 9명의 화면에는 남아 있을까요?"라고 되묻는다. 자료는 가상이라고 밝힌다.',
          student: '가상의 그래프를 읽고, 사진이 시간이 지나며 몇 명에게 갔는지 말해 보아요.',
          demo: { tool: 'chart', options: { type: 'bar', mode: 'read', title: '몰래 찍은 사진을 본 사람(가상)', unit: '명', xLabel: '시간', yLabel: '본 사람', data: SEEN, max: 10, scale: 1, showValues: true, question: '2시간 뒤 사진을 본 사람은?', choices: ['1명', '3명', '9명'] }, sequence: [{ pick: 2 }] },
          art: { draw: 'a paper bar chart with three growing bars, small paper phones multiplying beside each bar, a paper clock above', banner: '사진은 빨리 퍼져요', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '그래프는 가상 자료다. 실제 퍼지는 속도를 보여 주는 통계가 아니라고 말해 준다.',
      }),
      C({
        id: 'bully.e34.g3-hidden-camera.activity.three-steps', type: 'activity', title: '멈추고·지우고·알리기 차례',
        method: '멈추고·지우고·알리기 차례', tool: 'timeline', minutes: 14,
        levels: { easy: '세 단계 카드 3장만 차례대로 놓고, 놓으면 바로 맞는지 알려 준다.', base: '세 단계 카드에 틀린 카드 한 장이 섞여, 그것을 빼고 3장을 놓는다.', challenge: '틀린 카드 두 장을 빼고 놓고, 셋째 문항에서 알릴 때 할 말의 차례까지 놓는다.' },
        activity: {
          title: '멈추고·지우고·알리기 차례', tool: 'timeline',
          teacher: '"몰래 찍힌 사진을 받았어요. 맨 먼저 할 일은요?" 카드를 다 놓으면 "멈춰요 → 지워요 → 알려요"를 손가락 셋을 접으며 함께 말한다. "퍼뜨리기" 카드를 넣으려는 학생에게 "한 명에게만 보내도 그 친구가 또 보내면 몇 명이 될까요?"라고 묻는다. 누가 찍었는지 몰라도, 이미 많이 퍼졌어도 어른께 알리면 된다는 것을 짚는다. 받은 사람은 잘못이 없고, 알린 사람은 잘한 것이라고 말한다.',
          task: '몰래 찍힌 사진·영상을 받았을 때 할 일 카드를 차례대로 놓아요.', levels: CARD_LV,
          items: [
            STEP3('몰래 찍힌 친구 사진을 받았을 때 차례로 놓아요.', [{ id: 'stop', text: '더 보내지 않고 멈춰요' }, { id: 'erase', text: '내 화면에서 지워요' }, { id: 'tell', text: '어른께 알려요' }], { id: 'send', text: '친구에게 또 보내요', why: '또 보내면 사진이 더 퍼져요.' }, { id: 'caption', text: '웃긴 글을 붙여요', why: '글을 붙이면 놀림이 더 커져요.' }, 0.15),
            STEP3('친구가 넘어지는 영상을 받았을 때 차례로 놓아요.', [{ id: 'stop', text: '보던 것을 멈춰요' }, { id: 'erase', text: '받은 영상을 지워요' }, { id: 'tell', text: '선생님께 알려요' }], { id: 'like', text: '"ㅋㅋ" 답장해요', why: '웃는 답장은 찍은 친구를 더 신나게 해요.' }, { id: 'save', text: '내 앨범에 모아 둬요', why: '모아 두면 언제든 또 퍼질 수 있어요.' }, 0.2),
            ORD('어른께 알릴 때 할 말을 차례로 놓아요.', { axis: ['먼저', '나중'] }, [{ id: 'what', text: '"사진을 받았어요"' }, { id: 'who', text: '"누가 찍혔어요"' }, { id: 'where', text: '"이 방에서 돌아요"' }, { id: 'help', text: '"도와주세요"' }], [0, 1, 3], { id: 'blame', text: '"제가 잘못했어요"', why: '사진을 받은 것은 내 잘못이 아니에요.' }, 0.25,
              { conclude: '몰래 찍힌 사진·영상을 받으면 멈추고, 지우고, 어른께 알려요. 받은 나는 잘못이 없어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '몰래 찍힌 사진을 받으면 멈추고 → 지우고 → ___.', answer: '어른께 알려요' }] },
        notes: '"지우기" 차례는 체계도 계획을 따랐다. 어른이 확인해야 할 때는 지우기 전에 보여 드려도 된다고 말해 준다(사람 확인 목록 참고).',
      }),
      C({
        id: 'bully.e34.g3-hidden-camera.activity.camera-dilemma', type: 'activity', title: '갈림길: 친구가 몰래 찍자고 할 때',
        method: '갈림길: 친구가 몰래 찍자고 할 때', tool: 'dilemma', minutes: 14,
        levels: { easy: '갈림 1번, 보기 2개 가운데 고르고 결과를 본다.', base: '갈림 2번, 보기 3개씩 고르며 결과를 따라간다(말리고 알리는 길은 한 번에 끝난다).', challenge: '끝 장면에서 고른 까닭을 근거 카드 3장 가운데 고른다.' },
        activity: {
          title: '갈림길: 친구가 몰래 찍자고 할 때', tool: 'dilemma',
          teacher: '"\'싫다\'고만 말했을 때와, 말리고 선생님께 알렸을 때 결과가 어떻게 달랐나요?" 결과를 소리 내어 읽고 다른 길도 끝까지 가 보게 한다. "같이 안 찍으면 친구가 삐져요"라는 말에는 "친구가 잠깐 삐지는 것과, 찍힌 친구가 오래 아픈 것을 견주어 볼까요?"라고 묻는다. 찍자고 한 친구도 행동을 멈추면 바로잡을 수 있다는 것을 짚는다.',
          task: '장면을 읽고 보기를 골라요. 결과를 보고 다음 장면에서 또 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL('"쟤 자는 거 찍어서 올리자" 해요.', {
              text: '쉬는 시간, 책상에 엎드려 자는 다온이를 보고 친구가 "찍어서 올리자" 해요.', motif: 'house',
              choices: [
                { id: 'no', text: '"싫어, 찍지 마" 말한다', result: '친구가 "그럼 나 혼자 찍을래" 해요.', ending: '싫다고 분명히 말했어요. 잘한 일이에요.', next: {
                  text: '친구가 휴대폰을 꺼내 다온이 쪽으로 들어요.', choices: [
                    { id: 'tell', text: '선생님께 바로 알린다', result: '선생님이 오셔서 사진을 찍지 않게 하셨어요.', impact: [{ who: '다온이', text: '지켜졌어요', tone: 1 }], ending: '말로 안 멈추면 어른께 알려요.' },
                    { id: 'grab', text: '휴대폰을 뺏는다', result: '실랑이하다 휴대폰이 떨어졌어요.', impact: [{ who: '나와 친구', text: '다툼이 생겼어요', tone: -1 }], why: '뺏지 말고 어른께 알려요.' },
                    { id: 'look', text: '모른 척 자리로 간다', result: '사진이 대화방에 올라갔어요.', impact: [{ who: '다온이', text: '창피해요', tone: -1 }], why: '말린 뒤에도 멈추지 않으면 알려야 해요.' },
                  ] } },
                { id: 'join', text: '같이 찍는다', result: '사진이 대화방에 올라가 웃음거리가 됐어요.', impact: [{ who: '다온이', text: '창피하고 화나요', tone: -1 }], why: '함께 찍으면 나도 몰래 찍기를 한 사람이 돼요.' },
                { id: 'stop', text: '말리고 선생님께 알린다', result: '친구가 멈췄고, 선생님이 반과 "찍기 전에 묻기"를 약속하셨어요.', impact: [{ who: '다온이', text: '지켜졌어요', tone: 1 }], ending: '말리고 알려서 몰래 찍기를 막았어요.' },
              ] }, [['no', 'tell'], ['stop']],
            { reasons: [{ id: 'ask', text: '사진은 찍히는 사람에게 먼저 물어야 해서' }, { id: 'spread', text: '올리면 순식간에 퍼져서' }, { id: 'fun', text: '다들 재미있어하니까', why: '여럿이 웃어도 찍힌 친구는 아파요.' }], ok: ['ask', 'spread'] }, 0.2),
            DIL('넘어진 친구 영상을 찍자고 해요.', {
              text: '체육 시간에 하람이가 넘어지자 옆 친구가 "다시 넘어지면 영상 찍자" 해요.', motif: 'sun',
              choices: [
                { id: 'no', text: '"그러지 마, 하람이 아파" 말한다', result: '친구가 "그냥 장난이야" 해요.', ending: '하람이 마음을 먼저 생각했어요.', next: {
                  text: '친구가 하람이 쪽으로 휴대폰을 들고 기다려요.', choices: [
                    { id: 'tell', text: '체육 선생님께 알린다', result: '선생님이 휴대폰을 넣게 하고 하람이를 살피셨어요.', impact: [{ who: '하람이', text: '안심했어요', tone: 1 }], ending: '"장난"이라는 말에도 알렸어요. 잘한 일이에요.' },
                    { id: 'laugh', text: '같이 웃으며 본다', result: '하람이가 고개를 숙였어요.', impact: [{ who: '하람이', text: '창피해요', tone: -1 }], why: '웃으며 보면 찍기를 돕는 것이 돼요.' },
                    { id: 'yell', text: '친구에게 소리 지른다', result: '둘이 다투게 됐어요.', impact: [{ who: '나와 친구', text: '다툼이 생겼어요', tone: -1 }], why: '다투지 말고 어른께 알려요.' },
                  ] } },
                { id: 'film', text: '내가 먼저 찍는다', result: '영상이 반에 돌았어요.', impact: [{ who: '하람이', text: '체육 시간이 싫어졌어요', tone: -1 }], why: '아픈 순간을 찍으면 상처를 키워요.' },
                { id: 'stop', text: '말리고 선생님께 알린다', result: '선생님이 오셔서 하람이를 일으켜 주셨어요.', impact: [{ who: '하람이', text: '도움을 받았어요', tone: 1 }], ending: '말리고 알려서 하람이를 지켰어요.' },
              ] }, [['no', 'tell'], ['stop']],
            { reasons: [{ id: 'hurt', text: '하람이가 아프고 창피할 수 있어서' }, { id: 'ask', text: '찍히는 사람이 허락하지 않아서' }, { id: 'joke', text: '장난이면 괜찮아서', why: '찍는 사람에게 장난이어도 찍히는 사람은 아파요.' }], ok: ['hurt', 'ask'] }, 0.25),
            DIL('우는 친구를 찍자고 해요.', {
              text: '시우가 속상해서 울자 한 친구가 "우는 거 찍어서 보내자" 해요.', motif: 'cloud',
              choices: [
                { id: 'no', text: '"싫어, 안 찍을래" 말한다', result: '친구가 머쓱해서 휴대폰을 넣었다 꺼냈다 해요.', ending: '싫다고 말해 시우를 지켰어요.', next: {
                  text: '친구가 결국 사진을 찍어 버렸어요.', choices: [
                    { id: 'tell', text: '선생님께 알리고 지우게 해 달라고 한다', result: '선생님이 사진을 지우게 하고 시우를 위로하셨어요.', impact: [{ who: '시우', text: '마음이 놓여요', tone: 1 }], ending: '찍힌 뒤에도 알리면 퍼지기 전에 멈출 수 있어요.' },
                    { id: 'want', text: '"나한테도 보내 줘"', result: '사진이 나에게도 왔어요.', impact: [{ who: '시우', text: '더 퍼졌어요', tone: -1 }], why: '받으려고 하면 퍼뜨리기를 돕게 돼요.' },
                    { id: 'leave', text: '그냥 둔다', result: '사진이 저녁에 대화방에 올라갔어요.', impact: [{ who: '시우', text: '더 속상해요', tone: -1 }], why: '찍힌 것을 알았으면 어른께 알려요.' },
                  ] } },
                { id: 'join', text: '"좋아, 같이 보내자"', result: '사진이 여러 방에 퍼졌어요.', impact: [{ who: '시우', text: '학교 오기 싫어요', tone: -1 }], why: '우는 모습을 퍼뜨리면 큰 상처가 돼요.' },
                { id: 'stop', text: '말리고 시우 곁에서 선생님을 부른다', result: '선생님이 오셔서 시우 이야기를 들어 주셨어요.', impact: [{ who: '시우', text: '위로받았어요', tone: 1 }], ending: '말리고, 곁에 있고, 알렸어요.' },
              ] }, [['no', 'tell'], ['stop']],
            { reasons: [{ id: 'feel', text: '힘든 순간은 더 지켜 줘야 해서' }, { id: 'stay', text: '사진은 지워도 남을 수 있어서' }, { id: 'none', text: '내가 찍은 게 아니니까', why: '찍지 않았어도 멈추게 돕고 알릴 수 있어요.' }], ok: ['feel', 'stay'] }, 0.3, { conclude: '친구가 몰래 찍자고 하면 "싫어"라고 말하고, 말리고, 어른께 알려요. 사진은 찍히는 사람에게 먼저 물어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '친구가 "몰래 찍자"고 하면?', options: ['같이 찍어요', '싫다고 말하고 알려요', '나중에 받아 봐요'], answer: '싫다고 말하고 알려요' }] },
        notes: FICTION,
      }),
      C({
        id: 'bully.e34.g3-hidden-camera.activity.camera-role', type: 'activity', title: '사진 받은 친구 역할놀이 대본',
        method: '사진 받은 친구 역할놀이 대본 고르기', tool: 'story', minutes: 26,
        levels: { easy: '대본마다 말풍선 2칸을 채운다.', base: '대본마다 말풍선 3칸(찍힌 친구·찍은 친구·선생님에게 할 말)을 채운다.', challenge: '말풍선 4칸 — 찍은 친구가 바로잡는 말까지 채우고 넷째 문항에서 짝과 역할을 나눠 읽는다.' },
        activity: {
          title: '사진 받은 친구 역할놀이 대본', tool: 'story',
          teacher: '"사진을 받은 내가 찍힌 친구에게, 찍은 친구에게, 선생님께 각각 무슨 말을 할까요?" 말풍선을 채운 뒤 짝과 역할을 나눠 읽게 한다. 찍은 친구 역할에게 "찍은 친구가 \'미안해, 지울게\'라고 하면 그다음은 어떻게 될까요?"라고 물어 행동을 바로잡는 길을 보여 준다. 역할놀이에서는 실제 친구 이름 대신 대본의 이름만 쓴다.',
          task: '사진을 받은 주인공의 말풍선을 알맞은 말 카드로 채워요.', levels: CARD_LV,
          items: [
            FILLN('급식 사진을 받은 주인공의 말을 채워요.', ['나 → 이안', '나 → 찍은 친구', '나 → 선생님', '찍은 친구'], [['"___ 나는 안 퍼뜨릴게."', '걱정 마.'], ['"사진 ___"', '지워 줘.'], ['"선생님, ___"', '사진이 돌아요.'], ['"이안아, ___"', '미안해, 지울게.']], ['나도 보내 줘.', '웃기긴 하다.', '그냥 둬.'], 2, 3, 0.15),
            FILLN('하품 영상을 받은 주인공의 말을 채워요.', ['나 → 라온', '나 → 찍은 친구', '나 → 선생님', '찍은 친구'], [['"라온아, ___"', '네 편이야.'], ['"찍기 전에 ___"', '먼저 물어봐.'], ['"선생님, ___"', '도와주세요.'], ['"다음엔 ___"', '꼭 물어볼게.']], ['더 찍어 줘.', '다들 봤대.', '몰라.'], 2, 3, 0.2),
            FILLN('체육복 사진을 받은 주인공의 말을 채워요.', ['나 → 하람', '나 → 찍은 친구', '나 → 선생님', '찍은 친구'], [['"하람아, ___"', '네 잘못 아니야.'], ['"그만 ___"', '보내.'], ['"선생님, ___"', '이 방이에요.'], ['"하람아, ___"', '내가 잘못했어.']], ['또 찍자.', '재밌잖아.', '네가 왜 찍혔어.'], 2, 3, 0.25),
            { prompt: '짝과 역할을 나눠 대본 하나를 소리 내어 읽어요.', free: true, talk: true, conclude: '사진을 받으면 찍힌 친구에게는 "네 편이야", 찍은 친구에게는 "지워 줘", 선생님께는 "도와주세요"라고 말해요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '몰래 찍힌 친구에게 해 줄 말을 한 줄로 써요.' }] },
        notes: FICTION + ' 체육복 사진 장면은 "갈아입는 모습"이 아니라 "체육복 입고 웃긴 자세"로만 말한다.',
      }),
      C({
        id: 'bully.e34.g3-hidden-camera.wrap.camera-poster', type: 'wrap', title: '"찍기 전에 물어요" 배지',
        method: '"찍기 전에 물어요" 배지', tool: 'collage', minutes: 6,
        levels: { easy: '카메라(동그라미·네모) 조각을 넣어 조각 3개 이상을 붙인다.', base: '카메라·물음표·엑스를 떠올리게 하는 조각 5개 이상을 붙인다.', challenge: '조각 5개 이상을 붙이고 배지 문구를 정해 점검 4칸에 표시한다.' },
        wrap: {
          teacher: '"사진을 찍기 전에 무엇을 해야 할까요?" 동그라미(렌즈)와 네모(카메라 몸)를 붙이고, 물음표와 엑스는 세모·긴 네모 조각으로 꾸며 보게 한다. 출구 2번에서 "재미로 찍으면 괜찮다"를 고른 학생에게 "찍힌 이안이 마음 카드를 떠올려 볼까요?"라고 되묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'collage', options: { shapes: ['circle', 'square', 'triangle', 'rect', 'star'], maxPieces: 12 }, prompt: '조각으로 "찍기 전에 물어요" 배지를 꾸며요.', target: { has: [{ shape: 'circle', min: 1 }], selfCheck: ['카메라 조각을 붙였어요', '물음표를 꾸몄어요', '짝과 함께 보았어요'], minPieces: 5 }, difficulty: 0.1,
              levels: { easy: { target: { has: [{ shape: 'circle', min: 1 }], selfCheck: ['카메라 조각을 붙였어요', '짝과 함께 보았어요'], minPieces: 3 } }, challenge: { target: { has: [{ shape: 'circle', min: 1 }], selfCheck: ['카메라 조각을 붙였어요', '물음표를 꾸몄어요', '짝과 함께 보았어요', '배지 문구를 정했어요'], minPieces: 5 } } } },
            { type: 'choice', prompt: '친구 사진을 찍고 싶을 때 먼저 할 일은?', options: ['몰래 찍어요', '"찍어도 돼?" 물어요', '찍고 나서 말해요'], answer: 1, difficulty: 0.1, explain: '사진은 찍히는 사람에게 먼저 묻고, 싫다고 하면 찍지 않아요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '찍기 전에 물어요',
          items: [
            { type: 'choice', prompt: '친구가 "찍지 마"라고 하면?', options: ['안 찍어요', '몰래 찍어요'], answer: '안 찍어요' },
            { type: 'draw', prompt: '"찍기 전에 물어요" 배지를 그리고 문구를 써요.' },
          ],
        },
      }),
      C({
        id: 'bully.e34.g3-hidden-camera.wrap.camera-words', type: 'wrap', title: '사진 약속 낱말 잇기',
        method: '사진 약속 낱말 잇기', tool: 'wordcards', minutes: 6,
        levels: { easy: '낱말 2개에 약속 카드를 잇는다.', base: '낱말 3개에 약속 카드를 잇는다.', challenge: '낱말 4개에 남는 카드 하나를 가려 잇는다.' },
        wrap: {
          teacher: '"\'몰래 찍기\'에 이어질 약속은 무엇일까요?" 이은 뒤 약속을 "몰래 찍기는 하지 않아요"처럼 한 문장으로 소리 내어 읽게 한다. "단톡방에 올려요" 카드를 잇는 학생에게 "올린 사진은 몇 명에게 갈까요? 아까 그래프를 떠올려 볼까요?"라고 묻는다.',
          exitTicket: [
            EX('wordcards', MATCH('사진 낱말과 약속 카드를 이어요.', {}, [['몰래 찍기', '하지 않아요'], ['받은 사진', '퍼뜨리지 않아요'], ['찍고 싶을 때', '먼저 물어봐요'], ['몰래 찍힌 걸 보면', '어른께 알려요']], 2, 3, '대화방에 올려요', 0.15)),
            { type: 'choice', prompt: '몰래 찍힌 친구 사진을 받은 나는 잘못했나요?', options: ['받기만 했으니 잘못이 없어요', '받았으니 내 잘못이에요'], answer: 0, difficulty: 0.1, explain: '받은 사람은 잘못이 없어요. 멈추고 지우고 알리면 돼요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '사진 약속',
          items: [
            { type: 'check', prompt: '사진 약속에 표시해요.', options: ['몰래 찍지 않아요', '받은 사진을 퍼뜨리지 않아요', '찍기 전에 물어요', '재밌으면 올려요'] },
            { type: 'short', prompt: '사진을 찍기 전에 친구에게 할 말을 한 줄로 써요.' },
          ],
          easy: { note: '"찍어도 돼?"를 떠올려요.', items: [{ type: 'choice', prompt: '찍기 전에?', options: ['물어봐요', '몰래 찍어요'], answer: '물어봐요' }] },
        },
      }),
    );
  }

  // ======================================================================================================
  // 3학년 · 구경꾼에서 도움꾼으로 (research-mandatory §2 초: 방관자에서 조력자로)
  // ======================================================================================================
  {
    const C = T('g3-onlooker-helper', 3);
    const HELP = [['곁에 가기', 8], ['어른께 알리기', 10], ['같이 데려가기', 5], ['혼자 싸워 말리기', 2]];
    M.push(
      C({
        id: 'bully.e34.g3-onlooker-helper.intro.crowd-picture', type: 'intro', title: '둘러서서 구경하는 친구들',
        method: '구경하는 친구들 그림 보기', tool: 'emotion', minutes: 6,
        levels: { easy: '놀림 받는 친구 칸에 마음 카드 1장, 구경하는 친구 칸에 1장을 함께 놓는다.', base: '세 칸(놀림 받는 친구·구경하는 친구·놀리는 친구)에 마음 카드를 놓는다.', challenge: '구경꾼이 웃으면 놀리는 친구 마음이 어떻게 될지 고르고 까닭을 말한다.' },
        intro: {
          teacher: '"복도에서 한 친구가 놀림을 받고, 여럿이 둘러서서 보고 있어요. 놀림 받는 친구는 어떤 마음일까요? 구경하는 친구들은요?" 시연 단추로 세 칸에 마음 카드가 놓이는 것을 보인다. "구경만 했으니 잘못 없어요"라는 말이 나오면 "구경꾼이 웃으면 놀리는 친구는 그만둘까요, 더 할까요?"라고 되묻는다. 오늘은 구경꾼에서 도움꾼이 되는 안전한 방법을 배운다고 밝힌다.',
          student: '그림 속 세 사람의 마음 카드를 하나씩 골라요. 구경하는 친구는 무엇을 할 수 있을까요?',
          demo: { tool: 'emotion', options: { mode: 'match', slots: [{ id: 'target', label: '놀림 받는 친구' }, { id: 'crowd', label: '구경하는 친구들' }, { id: 'teaser', label: '구경꾼이 웃자 놀리는 친구' }], cards: ['외로움', '걱정', '신남', '편안함', '뿌듯함'], shuffle: false }, sequence: [{ match: { target: '외로움' } }, { match: { target: '외로움', crowd: '걱정' } }, { match: { target: '외로움', crowd: '걱정', teaser: '신남' } }] },
          art: { draw: 'a paper school hallway where several paper children stand in a half circle watching, one paper child in the middle looking down, and one paper child at the edge starting to step forward', banner: '구경꾼일까, 도움꾼일까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: FICTION,
      }),
      C({
        id: 'bully.e34.g3-onlooker-helper.intro.help-poll', type: 'intro', title: '"어떻게 도울까" 생각 그래프',
        method: '"어떻게 도울 수 있을까" 생각 그래프', tool: 'chart', minutes: 6,
        levels: { easy: '방법 3개(곁에 가기·알리기·데려가기) 그림을 함께 센다.', base: '방법 4개의 그림그래프를 읽고 가장 많이 나온 방법을 고른다.', challenge: '안전하지 않은 방법(혼자 싸워 말리기)을 골라 까닭을 말한다(교사 진행).' },
        intro: {
          teacher: '"가상의 모둠들이 고른 도움 방법이에요. 가장 많이 나온 것은요?" 시연 단추로 "어른께 알리기"가 골라지는 것을 보이고 큰 그림·작은 그림을 함께 센다. "혼자 싸워 말리기"를 보고 "그게 제일 용감해요"라는 말이 나오면 "형들이 여럿이면 나도 다칠 수 있어요. 용기는 안전한 방법을 고르는 것이기도 해요"라고 말해 준다. 자료는 가상이라고 밝힌다.',
          student: '가상의 그림그래프를 읽고, 가장 많이 나온 도움 방법을 찾아 짝에게 말해 보아요.',
          demo: { tool: 'chart', options: { type: 'picture', mode: 'read', title: '어떻게 도울까(가상의 모둠 생각)', unit: '명', xLabel: '도움 방법', yLabel: '고른 친구', icons: PEOPLE, icon: 'person', data: HELP, question: '가장 많이 나온 방법은?', choices: HELP.map((x) => x[0]) }, sequence: [{ pick: 1 }] },
          art: { draw: 'a paper picture graph with rows of small paper people beside four labels, a paper child pointing to the longest row', banner: '어떻게 도울 수 있을까?', extra: [{ motif: 'sun', x: 300, y: 96 }] },
        },
        notes: '그래프는 가상 자료다. 실제 반에서 모을 때는 붙임 쪽지로 하고 누가 무엇을 골랐는지 드러나지 않게 한다.',
      }),
      C({
        id: 'bully.e34.g3-onlooker-helper.activity.role-sort', type: 'activity', title: '구경꾼/도움꾼 행동 나누기',
        method: '구경꾼/도움꾼 행동 나누기', tool: 'sortboard', minutes: 14,
        levels: { easy: '판마다 카드 4장, 놓으면 바로 맞는지 알려 주고 바구니마다 든 장 수가 보인다.', base: '판마다 카드 6장(복도·운동장·대화방)을 구경꾼과 도움꾼 바구니에 나눈다.', challenge: '판마다 카드 2장이 더해지고, "모른 척 지나가기"를 어디에 둘지 짝과 토의한다(교사 진행).' },
        activity: {
          title: '구경꾼/도움꾼 행동 나누기', tool: 'sortboard',
          teacher: '"이 행동을 하면 놀림 받는 친구가 덜 외로워질까요?" 카드를 놓을 때마다 까닭을 한 문장으로 말하게 한다. "동영상 찍기는 증거니까 도움꾼이에요"라는 말이 나오면 "찍은 영상이 돌면 친구는 어떨까요? 도움은 어른께 바로 알리는 거예요"라고 바로잡는다. "모른 척 지나가기"는 구경꾼 쪽이지만, 무서워서 그럴 수 있으니 "그럴 때는 멀리서라도 어른께 알려요"라고 말해 준다.',
          task: '행동 카드를 "구경꾼"과 "도움꾼" 바구니에 나누어요.', levels: BOARD_LV,
          items: [
            SORT('복도 장면의 행동을 나누어요.', {}, ['구경꾼', '도움꾼'],
              [['웃으며 보기', '동영상 찍기', '"더 해!" 외치기'], ['곁에 가서 "같이 가자"', '선생님 부르기', '다음 날 말 걸어 주기']], 2, [['모른 척 지나가기'], ['친구 여럿과 함께 알리기']], 0.15),
            SORT('운동장 장면의 행동을 나누어요.', {}, ['구경꾼', '도움꾼'],
              [['멀리서 손가락질', '"재밌다" 웃기', '구경하러 모이기'], ['"선생님!" 부르러 뛰기', '친구 손잡고 데려가기', '놀이에 끼워 주기']], 2, [['구경하는 친구 더 부르기'], ['보건실에 같이 가기']], 0.2),
            SORT('대화방 장면의 행동을 나누어요.', {}, ['구경꾼', '도움꾼'],
              [['비웃는 글에 좋아요', '놀림 글 캡처해 돌리기', '읽고 답 안 하기'], ['"그만하자" 쓰기', '선생님께 화면 보여 드리기', '친구에게 따로 위로']], 2, [['다른 방에 옮기기'], ['보호자께 함께 말하기']], 0.25,
              { conclude: '구경꾼은 놀림에 힘을 보태고, 도움꾼은 곁에 가고·데려가고·알려요. 안전한 도움이 진짜 도움이에요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '놀림을 보고 웃으며 구경하면?', options: ['놀리는 친구가 더 신나요', '아무 일도 없어요', '놀림이 멈춰요'], answer: '놀리는 친구가 더 신나요' }] },
        notes: FICTION,
      }),
      C({
        id: 'bully.e34.g3-onlooker-helper.activity.safe-help-dilemma', type: 'activity', title: '갈림길: 형들이 친구를 둘러쌀 때',
        method: '갈림길: 형들이 친구를 둘러쌀 때', tool: 'dilemma', minutes: 14,
        levels: { easy: '갈림 1번, 보기 2개 가운데 고르고 결과를 본다.', base: '갈림 2번, 보기 3개씩 고르며 결과를 따라간다.', challenge: '갈림 3번 — 바른 길 끝에 나중에 그 친구에게 해 줄 말을 고르는 셋째 장면이 이어진다.' },
        activity: {
          title: '갈림길: 형들이 친구를 둘러쌀 때', tool: 'dilemma',
          teacher: '"혼자 뛰어들면 어떻게 될까요? 친구들과 함께 선생님을 부르면요?" 결과 장면을 소리 내어 읽고 다른 길도 가 보게 한다. 혼자 뛰어드는 길을 고른 학생의 마음을 먼저 인정하고 "친구를 지키고 싶은 마음은 멋져요. 그런데 나도 다치지 않는 방법은 무엇일까요?"라고 묻는다. 그냥 가는 길을 고른 학생도 나무라지 않고 "무서웠을 수 있어요. 그럴 때도 할 수 있는 한 가지는?"이라고 되묻는다.',
          task: '장면을 읽고 보기를 골라요. 결과를 보고 다음 장면에서 또 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL('운동장에서 형들이 친구를 둘러쌌어요.', {
              text: '점심시간 운동장 구석에서 덩치 큰 형들이 시우를 둘러싸고 공을 안 돌려줘요.', motif: 'sun',
              choices: [
                { id: 'call', text: '친구들과 함께 선생님을 부른다', result: '선생님이 오시자 형들이 공을 돌려줬어요.', ending: '함께 어른을 불러 모두 안전하게 끝났어요.', next: {
                  text: '선생님을 기다리는 동안 시우가 혼자 서 있어요.', choices: [
                    { id: 'near', text: '형들과 떨어진 곳에서 "시우야, 이리 와" 부른다', result: '시우가 무리에서 빠져나왔어요.', impact: [{ who: '시우', text: '혼자가 아니에요', tone: 1 }], ending: '안전한 곳에서 친구를 데려왔어요.' },
                    { id: 'push', text: '형들 사이로 밀고 들어간다', result: '형이 나를 밀쳐 넘어졌어요.', impact: [{ who: '나', text: '다칠 수 있어요', tone: -1 }], why: '힘센 무리 사이로 들어가면 나도 다쳐요.' },
                    { id: 'film', text: '멀리서 영상을 찍는다', result: '시우는 계속 혼자였어요.', impact: [{ who: '시우', text: '도움을 못 받았어요', tone: -1 }], why: '찍기보다 어른을 부르는 게 도움이에요.' },
                  ] } },
                { id: 'solo', text: '혼자 뛰어든다', result: '형들에게 밀려 나도 넘어졌어요.', impact: [{ who: '나', text: '다쳤어요', tone: -1 }], why: '혼자 맞서면 나도 다칠 수 있어요. 함께 어른을 불러요.' },
                { id: 'go', text: '그냥 간다', result: '시우는 공을 끝내 못 받았어요.', impact: [{ who: '시우', text: '외롭고 무서워요', tone: -1 }], why: '무서워도 어른께 알리는 것은 할 수 있어요.' },
              ] }, [['call', 'near']],
            { third: { text: '다음 날 시우가 교실에서 말없이 앉아 있어요.', choices: [
              { id: 'with', text: '"어제 괜찮았어? 같이 놀자"', result: '시우가 웃으며 일어났어요.', impact: [{ who: '시우', text: '힘이 나요', tone: 1 }], ending: '도움꾼은 다음 날도 곁에 있어요.' },
              { id: 'ask', text: '"형들한테 왜 찍혔어?"', result: '시우가 자기 탓을 했어요.', impact: [{ who: '시우', text: '속상해요', tone: -1 }], why: '괴롭힌 쪽의 잘못이지 시우 탓이 아니에요.' },
              { id: 'skip', text: '모른 척한다', result: '시우는 혼자였어요.', impact: [{ who: '시우', text: '외로워요', tone: 0 }] },
            ] }, pick: 'with' }, 0.2),
            DIL('하굣길에 여럿이 한 친구를 놀려요.', {
              text: '하굣길 골목에서 다른 반 친구 셋이 다온이 가방을 툭툭 치며 놀려요.', motif: 'house',
              choices: [
                { id: 'adult', text: '가까운 어른(지킴이 선생님)께 알린다', result: '어른이 오시자 놀림이 멈췄어요.', ending: '가까운 어른께 알려 다온이를 지켰어요.', next: {
                  text: '어른이 "누구 가방이니?" 물으세요.', choices: [
                    { id: 'tell', text: '본 대로 차분히 말씀드린다', result: '어른이 다온이를 집까지 데려다주셨어요.', impact: [{ who: '다온이', text: '안전해요', tone: 1 }], ending: '본 것을 말한 것도 도움이에요.' },
                    { id: 'run', text: '무서워서 도망간다', result: '어른이 무슨 일인지 몰라 헤맸어요.', impact: [{ who: '다온이', text: '도움이 늦어요', tone: -1 }], why: '알린 뒤에는 본 것을 말해 줘요.' },
                    { id: 'blame', text: '"다온이가 먼저 그랬어요" 지어낸다', result: '다온이가 억울해했어요.', impact: [{ who: '다온이', text: '억울해요', tone: -1 }], why: '본 대로 말해야 바르게 도울 수 있어요.' },
                  ] } },
                { id: 'yell', text: '"야! 그만해!" 하며 혼자 달려간다', result: '셋이 나를 둘러쌌어요.', impact: [{ who: '나', text: '위험해요', tone: -1 }], why: '여럿 앞에 혼자 가지 말고 어른을 불러요.' },
                { id: 'watch', text: '멈춰서 구경한다', result: '놀림이 더 길어졌어요.', impact: [{ who: '다온이', text: '더 창피해요', tone: -1 }], why: '구경은 놀림에 힘을 보태요.' },
              ] }, [['adult', 'tell']],
            { third: { text: '다음 날 다온이가 "어제 봤어?" 하고 물어요.', choices: [
              { id: 'yes', text: '"응, 어른께 알렸어. 네 편이야"', result: '다온이가 고마워했어요.', impact: [{ who: '다온이', text: '든든해요', tone: 1 }], ending: '알리고, 친구에게 마음도 전했어요.' },
              { id: 'no', text: '"아니, 못 봤어"', result: '다온이는 혼자라고 느꼈어요.', impact: [{ who: '다온이', text: '외로워요', tone: 0 }] },
              { id: 'funny', text: '"좀 웃기더라"', result: '다온이가 고개를 숙였어요.', impact: [{ who: '다온이', text: '상처받았어요', tone: -1 }], why: '놀림을 웃음거리로 말하지 않아요.' },
            ] }, pick: 'yes' }, 0.25),
            DIL('복도에서 여럿이 한 친구 흉내를 내요.', {
              text: '복도에서 친구 넷이 하람이 걸음걸이를 흉내 내며 따라가요.', motif: 'star',
              choices: [
                { id: 'together', text: '친구와 함께 하람이 곁에 가서 같이 걷는다', result: '흉내 내던 친구들이 멈칫했어요.', ending: '곁에 가 준 것만으로 흉내가 멈췄어요.', next: {
                  text: '흉내가 다음 쉬는 시간에도 이어져요.', choices: [
                    { id: 'teacher', text: '함께 담임 선생님께 알린다', result: '선생님이 반 친구들과 이야기를 나누셨어요.', impact: [{ who: '하람이', text: '마음이 놓여요', tone: 1 }], ending: '되풀이되는 놀림은 어른께 알려요.' },
                    { id: 'copy', text: '흉내 내는 친구를 흉내 낸다', result: '흉내 싸움이 됐어요.', impact: [{ who: '모두', text: '다툼이 생겼어요', tone: -1 }], why: '똑같이 갚으면 폭력이 커져요.' },
                    { id: 'tired', text: '"또야?" 하고 지나간다', result: '흉내가 계속됐어요.', impact: [{ who: '하람이', text: '지쳐요', tone: -1 }], why: '계속되면 꼭 어른께 알려요.' },
                  ] } },
                { id: 'join', text: '같이 흉내 낸다', result: '하람이가 교실로 뛰어 들어갔어요.', impact: [{ who: '하람이', text: '부끄럽고 아파요', tone: -1 }], why: '함께 흉내 내면 나도 놀림을 하는 사람이 돼요.' },
                { id: 'laugh', text: '옆에서 웃는다', result: '흉내가 더 커졌어요.', impact: [{ who: '하람이', text: '모두가 놀리는 것 같아요', tone: -1 }], why: '웃음도 놀림에 힘을 줘요.' },
              ] }, [['together', 'teacher']],
            { third: { text: '흉내 내던 친구 하나가 "나 그만할래" 해요.', choices: [
              { id: 'good', text: '"그래, 같이 놀자"', result: '그 친구도 함께 놀게 됐어요.', impact: [{ who: '그 친구', text: '바뀔 수 있었어요', tone: 1 }], ending: '행동을 멈춘 친구도 다시 함께할 수 있어요.' },
              { id: 'label', text: '"넌 원래 나쁜 애잖아"', result: '그 친구가 다시 무리로 갔어요.', impact: [{ who: '그 친구', text: '바뀌기 어려워요', tone: -1 }], why: '사람이 아니라 행동을 바로잡아요.' },
              { id: 'ignore', text: '대답하지 않는다', result: '그 친구는 머쓱해했어요.', impact: [{ who: '그 친구', text: '어색해요', tone: 0 }] },
            ] }, pick: 'good' }, 0.3, { conclude: '혼자 뛰어들지 말고, 친구와 함께 곁에 가고, 어른께 알려요. 다음 날도 곁에 있는 것이 도움꾼이에요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '형들이 친구를 둘러쌌을 때 안전한 도움은?', options: ['혼자 뛰어들기', '친구들과 함께 어른 부르기', '멀리서 구경하기'], answer: '친구들과 함께 어른 부르기' }] },
        notes: FICTION + ' "지킴이 선생님"은 학교마다 이름이 다르니 우리 학교의 하굣길 어른(배움터 지킴이 등)으로 바꿔 말한다.',
      }),
      C({
        id: 'bully.e34.g3-onlooker-helper.activity.helper-script', type: 'activity', title: '도움꾼 짧은 역할극 대본',
        method: '도움꾼 짧은 역할극 대본 고르기', tool: 'story', minutes: 26,
        levels: { easy: '장면마다 도움꾼 말풍선 1칸을 채운다.', base: '장면마다 도움꾼 말풍선 2칸을 채운다(쉬는 시간·급식실·하굣길).', challenge: '장면마다 말풍선 3칸 — 놀리던 친구에게 할 말까지 채우고 넷째 문항에서 짝과 번갈아 읽는다.' },
        activity: {
          title: '도움꾼 짧은 역할극 대본', tool: 'story',
          teacher: '"도움꾼은 어떤 말로 곁에 갈까요?" 장면마다 말풍선을 채운 뒤 짝과 번갈아 읽게 한다. 놀리던 친구에게 "너 나빠!"를 넣으려는 학생에게 "사람을 나쁘다고 하면 그 친구가 행동을 바꿀까요? \'그만하자\'처럼 행동을 말해 볼까요?"라고 묻는다. 놀리는 역할은 대본에 적힌 짧은 말만 쓰게 한다.',
          task: '장면마다 도움꾼의 말풍선을 알맞은 말 카드로 채워요.', levels: CARD_LV,
          items: [
            FILL('쉬는 시간 장면의 도움꾼 말을 채워요.', ['도움꾼 → 라온', '도움꾼 → 라온', '도움꾼 → 놀리던 친구'], [['"라온아, ___"', '같이 가자.'], ['"우리 ___ 놀자."', '저쪽에서'], ['"___ 싫어하잖아."', '그만하자, 라온이가']], ['구경하자.', '나랑 상관없어.'], 0.15),
            FILL('급식실 장면의 도움꾼 말을 채워요.', ['도움꾼 → 이안', '도움꾼 → 선생님', '도움꾼 → 놀리던 친구'], [['"이안아, ___"', '여기 앉아.'], ['"선생님, ___"', '이안이가 힘들어요.'], ['"다음엔 ___"', '같이 먹자.']], ['혼자 먹어.', '모른 척할게.'], 0.2),
            FILL('하굣길 장면의 도움꾼 말을 채워요.', ['도움꾼 → 다온', '도움꾼 → 지킴이 선생님', '도움꾼 → 놀리던 친구'], [['"다온아, ___"', '같이 걸어가자.'], ['"저기 ___"', '도와주세요.'], ['"가방 치는 건 ___"', '그만하자.']], ['빨리 가.', '재밌다.'], 0.25),
            { prompt: '짝과 번갈아 도움꾼과 친구 역할로 대본을 읽어요.', free: true, talk: true, conclude: '도움꾼은 "같이 가자"로 곁에 가고, 어른께 "도와주세요"라고 알리고, 놀리던 친구에게는 "그만하자"라고 행동을 말해요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '놀림 받는 친구 곁에 갈 때 할 말을 한 줄로 써요.' }, { type: 'choice', prompt: '놀리던 친구에게 할 말로 알맞은 것은?', options: ['그만하자', '너 나빠!'], answer: '그만하자' }] },
        notes: FICTION,
      }),
      C({
        id: 'bully.e34.g3-onlooker-helper.wrap.helper-promise', type: 'wrap', title: '도움꾼 약속 스스로 점검',
        method: '도움꾼 약속 스스로 점검', tool: 'timer', minutes: 6,
        levels: { easy: '약속 2개(곁에 가요·같이 데려가요)를 읽고 할 수 있는 것에 표시한다.', base: '약속 3개를 읽고 표시한다.', challenge: '약속 4칸에 표시하고, 오늘부터 할 한 가지를 짝에게 말한다.' },
        wrap: {
          teacher: '"도움꾼 약속 가운데 나는 무엇을 할 수 있을까요?" 약속을 하나씩 소리 내어 읽고 스스로 표시하게 한다. "저는 무서워서 못 할 것 같아요"라는 학생에게 "그럼 셋 가운데 가장 쉬운 것은요? 어른께 알리는 건 멀리서도 할 수 있어요"라고 말해 준다.',
          exitTicket: [
            SELF('도움꾼 약속 점검', ['곁에 가요', '같이 데려가요', '어른께 알려요', '오늘부터 할 일을 정했어요'], '도움꾼 약속을 읽고 할 수 있는 것에 표시해요.'),
            { type: 'choice', prompt: '돕는 방법은 직접 싸워 말리는 것뿐일까요?', options: ['네, 싸워야 해요', '아니요, 곁에 가고 알려도 돼요'], answer: 1, difficulty: 0.1, explain: '곁에 가기·데려가기·알리기 모두 안전한 도움이에요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '도움꾼 약속',
          items: [
            { type: 'check', prompt: '내가 할 수 있는 도움꾼 약속에 표시해요.', options: ['곁에 가요', '같이 데려가요', '어른께 알려요'] },
            { type: 'short', prompt: '오늘부터 내가 할 도움꾼 행동 한 가지를 써요.' },
          ],
          easy: { note: '가장 쉬운 약속 하나를 골라요.', items: [{ type: 'choice', prompt: '놀림을 보면?', options: ['어른께 알려요', '웃으며 봐요'], answer: '어른께 알려요' }] },
        },
      }),
      C({
        id: 'bully.e34.g3-onlooker-helper.wrap.helper-badge', type: 'wrap', title: '도움꾼 배지 만들기',
        method: '도움꾼 배지 만들기', tool: 'collage', minutes: 6,
        levels: { easy: '별 조각을 넣어 조각 3개 이상을 붙인다.', base: '방패·손·별을 떠올리게 하는 조각 5개 이상을 붙인다.', challenge: '조각 5개 이상을 붙이고 배지에 넣을 다짐 말을 정해 점검 4칸에 표시한다.' },
        wrap: {
          teacher: '"도움꾼 배지에는 어떤 모양이 어울릴까요?" 별(용기)·하트(마음)·마름모(방패)를 붙이며 배지 모양마다 뜻을 말하게 한다. 출구 2번에서 "구경만 하면 잘못이 없다"를 고른 학생에게 "구경꾼이 웃을 때 놀리는 친구 마음 카드를 떠올려 볼까요?"라고 되묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'collage', options: { shapes: ['star', 'heart', 'diamond', 'circle', 'leaf'], maxPieces: 12 }, prompt: '별·하트·방패 조각으로 도움꾼 배지를 꾸며요.', target: { has: [{ shape: 'star', min: 1 }], selfCheck: ['별 조각을 붙였어요', '모양마다 뜻을 말했어요', '짝과 함께 보았어요'], minPieces: 5 }, difficulty: 0.1,
              levels: { easy: { target: { has: [{ shape: 'star', min: 1 }], selfCheck: ['별 조각을 붙였어요', '짝과 함께 보았어요'], minPieces: 3 } }, challenge: { target: { has: [{ shape: 'star', min: 1 }], selfCheck: ['별 조각을 붙였어요', '모양마다 뜻을 말했어요', '짝과 함께 보았어요', '다짐 말을 정했어요'], minPieces: 5 } } } },
            { type: 'choice', prompt: '놀림을 구경만 하면 잘못이 없을까요?', options: ['구경만 했으니 괜찮아요', '구경도 놀림에 힘을 줘요'], answer: 1, difficulty: 0.1, explain: '구경꾼이 웃으면 놀리는 친구가 더 신나요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '나는 도움꾼',
          items: [
            { type: 'choice', prompt: '도움꾼이 할 일은?', options: ['곁에 가서 함께 어른께 알리기', '멀리서 영상 찍기'], answer: '곁에 가서 함께 어른께 알리기' },
            { type: 'draw', prompt: '도움꾼 배지를 그리고 다짐 말을 써요.' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 3학년 · 화가 날 때 주먹 대신, 회복 질문 네 가지 (research-mandatory §2 초: 폭력의 종류 알기·도움 요청 — 갈등을 폭력 없이)
  // ======================================================================================================
  {
    const C = T('g3-anger-repair', 3);
    const QS = [{ id: 'q1', text: '무슨 일이 있었니?' }, { id: 'q2', text: '누가 어떤 마음이었니?' }, { id: 'q3', text: '무엇이 필요하니?' }, { id: 'q4', text: '앞으로 어떻게 할까?' }];
    const CHANT = ['q', 'q', 'q', 'qr', 'e', 'e', 'q', 'q', 'qr', 'e', 'e', 'q', 'q', 'qr', 'e', 'e', 'e', 'e', 'q', 'qr'];
    M.push(
      C({
        id: 'bully.e34.g3-anger-repair.intro.anger-thermo', type: 'intro', title: '화 온도계 단계 고르기',
        method: '화 온도계 단계 고르기', tool: 'emotion', minutes: 6,
        levels: { easy: '화 온도계를 "조금"과 "폭발" 두 끝만 함께 짚어 본다.', base: '세 단계(조금·많이·폭발)에 바늘이 차례로 놓이는 것을 보고 내 단계를 말한다.', challenge: '단계를 고른 뒤 온도를 낮출 방법을 하나 말한다.' },
        intro: {
          teacher: '"친구가 줄에서 새치기했어요. 내 화 온도는 몇 단계일까요?" 시연 단추로 화 온도계가 조금 → 많이 → 폭발로 올라가는 것을 보이고, 단계마다 몸 신호를 묻는다(기다릴 반응: "얼굴이 빨개져요", "주먹을 쥐어요"). "화나면 때려도 어쩔 수 없어요"라는 말이 나오면 "화가 나는 마음은 괜찮아요. 그런데 주먹이 나가기 전에 몸이 보내는 신호가 있어요. 그때 무엇을 할 수 있을까요?"라고 되묻는다. 화는 나쁜 마음이 아니라 다루는 마음이라는 것을 짚는다.',
          student: '새치기 장면을 읽고 내 화 온도는 몇 단계일지, 몸에 어떤 신호가 오는지 말해 보아요.',
          demo: { tool: 'emotion', options: { mode: 'scale', situation: '친구가 급식 줄에서 내 앞으로 새치기했어요.', feeling: '화남', steps: 3, scaleLabels: { 1: '조금', 2: '많이', 3: '폭발' } }, sequence: [{ level: 1 }, { level: 2 }, { level: 3 }] },
          art: { draw: 'a tall paper thermometer with three colored bands, a paper child in a lunch line with a red face and clenched hands next to it', banner: '내 화 온도는?', extra: [{ motif: 'sun', x: 300, y: 96 }] },
        },
        notes: '"화가 나서 친구를 때린 적 있나요?"처럼 겪은 일을 묻지 않는다. 장면 속 가상 친구의 화 온도만 이야기한다.',
      }),
      C({
        id: 'bully.e34.g3-anger-repair.intro.stop-breath', type: 'intro', title: '멈춤-숨쉬기 구간 타이머',
        method: '멈춤-숨쉬기 구간 타이머', tool: 'timer', minutes: 6,
        levels: { easy: '들이쉬기 4초·내쉬기 4초를 두 번 되풀이한다.', base: '멈추기 → 들이쉬기 4초 → 내쉬기 4초 차례를 맞추고 세 번 되풀이한다.', challenge: '되풀이 횟수를 내가 맞춰 계획하고 기분이 어떻게 달라졌는지 말한다.' },
        intro: {
          teacher: '"화가 폭발하기 전에 몸에 \'멈춤\' 단추를 눌러 볼게요." 시연 단추로 멈추기 → 들이쉬기 → 내쉬기 카드 차례와 타이머(들이쉬기 4초·내쉬기 4초·세 번)가 맞춰지는 것을 보이고, 함께 손을 배에 올리고 따라 한다. "숨 쉬는 건 시시해요"라는 말이 나오면 "숨을 천천히 쉬면 주먹 쥔 손이 어떻게 되는지 느껴 볼까요?"라고 묻는다. 끝나면 "처음과 지금, 온도가 달라졌나요?"를 묻는다.',
          student: '타이머에 맞춰 멈추고, 천천히 들이쉬고 내쉬어요. 끝나고 내 마음 온도를 살펴보아요.',
          demo: { tool: 'timer', options: { title: '멈춤-숨쉬기', plan: { work: 4, rest: 4, rounds: 2 }, workStep: 1, restStep: 1, cards: ['내쉬기 4초', '멈추기 3초', '들이쉬기 4초'] }, sequence: [{ order: ['멈추기 3초', '들이쉬기 4초', '내쉬기 4초'] }, { order: ['멈추기 3초', '들이쉬기 4초', '내쉬기 4초'], plan: { work: 4, rest: 4, rounds: 3 } }] },
          art: { draw: 'a paper child sitting calmly with hands on the belly, a paper balloon growing and shrinking beside a small paper timer', banner: '멈추고, 숨 쉬고', extra: [{ motif: 'leaf', x: 300, y: 96 }] },
        },
        notes: '3초·4초·세 번은 우리 반 연습용 약속 값이다. 숨쉬기가 불편한 학생은 눈으로 타이머만 따라가도 된다.',
      }),
      C({
        id: 'bully.e34.g3-anger-repair.activity.fist-or-words', type: 'activity', title: '갈림길: 폭발 직전',
        method: '갈림길: 화가 폭발하기 직전', tool: 'dilemma', minutes: 14,
        levels: { easy: '갈림 1번, 보기 2개 가운데 고르고 결과를 본다.', base: '갈림 2번, 보기 3개씩 고르며 결과를 따라간다.', challenge: '갈림 3번 — 바른 길 끝에 상대 친구 쪽 이야기를 듣는 셋째 장면이 이어진다.' },
        activity: {
          title: '갈림길: 폭발 직전', tool: 'dilemma',
          teacher: '"밀어 버리면 그다음은 어떻게 될까요? 멈추고 숨 쉰 다음에는요?" 결과 장면을 소리 내어 읽고 다음 장면에서 다시 고른다. 밀어 버리는 길을 고른 학생도 나무라지 않고 "그만큼 화가 났구나. 그 길 끝에서 둘은 어떻게 됐나요?"라고 되물어 다른 길을 끝까지 가 보게 한다. 셋째 장면에서 상대 친구 이야기를 들으면 "내가 짐작한 것과 같았나요?"라고 묻는다.',
          task: '화가 난 장면을 읽고 보기를 골라요. 결과를 보고 다음 장면에서 또 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL('축구 중에 친구가 일부러 민 것 같아요.', {
              text: '축구를 하다 이안이가 나를 세게 밀었어요. 일부러 그런 것 같아 화가 확 나요.', motif: 'sun',
              choices: [
                { id: 'breath', text: '멈추고 숨을 쉰다', result: '주먹 쥔 손이 조금 풀렸어요.', ending: '멈추고 숨 쉬어 주먹 대신 말을 고를 수 있게 됐어요.', next: {
                  text: '숨을 쉬었지만 아직 마음이 뜨거워요.', choices: [
                    { id: 'say', text: '"아까 밀어서 화났어"라고 말한다', result: '이안이가 "어? 미안, 공만 봤어" 해요.', impact: [{ who: '나와 이안이', text: '다시 같이 뛰어요', tone: 1 }], ending: '화난 까닭을 말로 하니 오해가 풀렸어요.' },
                    { id: 'push', text: '그래도 밀어 버린다', result: '이안이가 넘어져 무릎을 다쳤어요.', impact: [{ who: '이안이', text: '다쳤어요', tone: -1 }], why: '밀면 친구가 다치고 다툼이 커져요.' },
                    { id: 'sulk', text: '말없이 경기에서 빠진다', result: '화난 마음이 오래 남았어요.', impact: [{ who: '나', text: '계속 속상해요', tone: 0 }], why: '빠지기보다 화난 까닭을 말로 전해요.' },
                  ] } },
                { id: 'shove', text: '밀어 버린다', result: '둘이 엉켜 넘어지고 경기가 멈췄어요.', impact: [{ who: '나와 이안이', text: '둘 다 다칠 수 있어요', tone: -1 }], why: '주먹이나 밀기는 화를 풀지 못하고 폭력이 돼요.' },
                { id: 'shout', text: '욕하며 소리 지른다', result: '이안이도 소리를 질러 싸움이 됐어요.', impact: [{ who: '모두', text: '경기가 망가졌어요', tone: -1 }], why: '욕도 말로 하는 폭력이에요.' },
              ] }, [['breath', 'say']],
            { third: { text: '이안이가 "나도 할 말 있어"라고 해요.', choices: [
              { id: 'listen', text: '끝까지 들어 본다', result: '이안이도 뒤에서 밀려 넘어질 뻔했대요.', impact: [{ who: '이안이와 나', text: '서로 알게 됐어요', tone: 1 }], ending: '상대 이야기를 들으니 일부러가 아니었어요.' },
              { id: 'cut', text: '"변명하지 마"', result: '이안이가 입을 다물었어요.', impact: [{ who: '이안이', text: '억울해요', tone: -1 }], why: '상대 이야기도 들어야 오해가 풀려요.' },
              { id: 'leave', text: '돌아선다', result: '오해가 그대로 남았어요.', impact: [{ who: '둘 다', text: '어색해요', tone: 0 }] },
            ] }, pick: 'listen' }, 0.2),
            DIL('친구가 내 지우개를 말없이 가져갔어요.', {
              text: '수업 시간에 짝 다온이가 내 새 지우개를 말없이 가져가 쓰고 있어요.', motif: 'house',
              choices: [
                { id: 'breath', text: '멈추고 숨을 쉰다', result: '목소리가 차분해졌어요.', ending: '멈추니 소리 지르지 않고 말할 수 있었어요.', next: {
                  text: '다온이는 아직 내 지우개를 쓰고 있어요.', choices: [
                    { id: 'say', text: '"말없이 가져가서 화났어. 물어봐 줘"', result: '다온이가 "미안, 빌려도 돼?" 해요.', impact: [{ who: '나와 다온이', text: '편해졌어요', tone: 1 }], ending: '바라는 것을 말로 전했어요.' },
                    { id: 'grab', text: '확 낚아챈다', result: '지우개가 바닥에 떨어지고 다온이 손이 긁혔어요.', impact: [{ who: '다온이', text: '아파요', tone: -1 }], why: '낚아채면 다치고 다툼이 커져요.' },
                    { id: 'take', text: '다온이 연필을 몰래 가져온다', result: '서로 물건을 숨기게 됐어요.', impact: [{ who: '둘 다', text: '사이가 나빠져요', tone: -1 }], why: '똑같이 갚으면 다툼이 커져요.' },
                  ] } },
                { id: 'hit', text: '팔을 툭 친다', result: '다온이가 놀라 울음을 터뜨렸어요.', impact: [{ who: '다온이', text: '아프고 놀랐어요', tone: -1 }], why: '화가 나도 몸으로 치지 않아요.' },
                { id: 'name', text: '"도둑!" 하고 외친다', result: '반 친구들이 다온이를 쳐다봤어요.', impact: [{ who: '다온이', text: '창피해요', tone: -1 }], why: '나쁜 이름을 붙이면 또 다른 상처가 돼요.' },
              ] }, [['breath', 'say']],
            { third: { text: '다온이가 "내 지우개를 잃어버려서 급했어" 해요.', choices: [
              { id: 'share', text: '"그랬구나, 다음엔 물어봐"', result: '다온이가 고개를 끄덕였어요.', impact: [{ who: '다온이', text: '이해받았어요', tone: 1 }], ending: '까닭을 듣고 약속을 정했어요.' },
              { id: 'still', text: '"그래도 넌 도둑이야"', result: '다온이가 고개를 숙였어요.', impact: [{ who: '다온이', text: '낙인찍혀 아파요', tone: -1 }], why: '사람이 아니라 행동을 말해요.' },
              { id: 'nothing', text: '아무 말 안 한다', result: '둘 사이가 어색했어요.', impact: [{ who: '둘 다', text: '어색해요', tone: 0 }] },
            ] }, pick: 'share' }, 0.25),
            DIL('친구가 내 그림을 보고 비웃었어요.', {
              text: '미술 시간에 시우가 내 그림을 보고 "이게 뭐야, ㅋㅋ" 했어요. 얼굴이 뜨거워져요.', motif: 'star',
              choices: [
                { id: 'breath', text: '멈추고 숨을 쉰다', result: '뜨거운 얼굴이 조금 식었어요.', ending: '멈추니 붓을 던지지 않았어요.', next: {
                  text: '시우가 아직 웃고 있어요.', choices: [
                    { id: 'say', text: '"웃으니까 속상해. 그만해 줘"', result: '시우가 "아, 미안" 하고 웃음을 멈췄어요.', impact: [{ who: '나와 시우', text: '다시 그려요', tone: 1 }], ending: '내 마음을 말로 전했어요.' },
                    { id: 'tear', text: '시우 그림을 찢는다', result: '시우가 울고 선생님이 오셨어요.', impact: [{ who: '시우', text: '그림을 잃었어요', tone: -1 }], why: '물건을 망가뜨리면 폭력이 돼요.' },
                    { id: 'mock', text: '"네 그림이 더 이상해"', result: '서로 흉보는 말이 이어졌어요.', impact: [{ who: '둘 다', text: '상처받았어요', tone: -1 }], why: '흉으로 갚으면 상처가 커져요.' },
                  ] } },
                { id: 'throw', text: '붓을 던진다', result: '물감이 튀어 옆 친구 옷이 더러워졌어요.', impact: [{ who: '옆 친구', text: '속상해요', tone: -1 }], why: '물건을 던지면 다른 친구도 다칠 수 있어요.' },
                { id: 'cry', text: '참다가 엎드려 운다', result: '시우는 왜 우는지 몰랐어요.', impact: [{ who: '나', text: '혼자 속상해요', tone: 0 }], why: '참지 말고 마음을 말로 전하거나 선생님께 말해요.' },
              ] }, [['breath', 'say']],
            { third: { text: '시우가 "나는 웃기려고 한 건데" 해요.', choices: [
              { id: 'explain', text: '"나한텐 웃기지 않았어"', result: '시우가 "다음엔 안 그럴게" 했어요.', impact: [{ who: '시우', text: '알게 됐어요', tone: 1 }], ending: '서로 마음이 다르다는 것을 알았어요.' },
              { id: 'never', text: '"너랑 다신 안 놀아"', result: '시우가 놀라 자리로 갔어요.', impact: [{ who: '둘 다', text: '멀어졌어요', tone: -1 }], why: '관계를 끊기보다 바라는 것을 말해요.' },
              { id: 'fine', text: '"괜찮아" 하고 참는다', result: '속상한 마음이 남았어요.', impact: [{ who: '나', text: '마음이 무거워요', tone: 0 }] },
            ] }, pick: 'explain' }, 0.3, { conclude: '화가 나도 주먹·밀기·욕 대신 멈추고, 숨 쉬고, "○○해서 화났어"라고 말해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '화가 나면 멈추고, 숨 쉬고, "○○해서 ___"라고 말해요.', answer: '화났어' }] },
        notes: FICTION,
      }),
      C({
        id: 'bully.e34.g3-anger-repair.activity.repair-order', type: 'activity', title: '회복 질문 네 가지 차례',
        method: '회복 질문 네 가지 차례', tool: 'timeline', minutes: 14,
        levels: { easy: '질문 카드 3장을 차례대로 놓고(놓으면 바로 알림), 짝 잇기는 2줄이다.', base: '질문 카드 4장을 차례대로 놓고, 질문마다 알맞은 대답 카드 3줄을 잇는다.', challenge: '틀린 질문 카드("누가 잘못했니?")를 빼고 4장을 놓고, 대답 잇기 4줄에서 남는 카드를 가려낸다.' },
        activity: {
          title: '회복 질문 네 가지 차례', tool: 'timeline',
          teacher: '"다툰 뒤 친구와 다시 이야기할 때 먼저 물을 것은 무엇일까요?" 질문 카드를 놓은 뒤 함께 소리 내어 읽는다. "누가 잘못했니?"를 넣으려는 학생에게 "그 질문을 들으면 둘 다 어떤 마음이 될까요? 회복 질문은 범인을 찾는 게 아니라 다시 잘 지내는 길을 찾는 거예요"라고 말해 준다. 대답 잇기에서는 질문마다 "그 질문에 이 대답이 맞을까?"를 짝과 확인하게 한다.',
          task: '회복 질문 카드를 차례대로 놓고, 질문마다 알맞은 대답 카드를 이어요.', levels: CARD_LV,
          items: [
            ORD('회복 질문 네 가지를 차례대로 놓아요.', { axis: ['먼저', '나중'] }, QS, [0, 1, 3], { id: 'who', text: '누가 잘못했니?', why: '회복 질문은 잘못한 사람을 찾는 질문이 아니에요.' }, 0.15),
            MATCH('새치기 장면에서 질문과 대답을 이어요.', {}, [['무슨 일이 있었니?', '줄에서 새치기했어'], ['누가 어떤 마음이었니?', '나는 화났어'], ['무엇이 필요하니?', '차례를 지켜 줘'], ['앞으로 어떻게 할까?', '뒤에 서서 기다릴게']], 2, 3, '네가 먼저 그랬잖아', 0.2),
            MATCH('공을 뺏은 장면에서 질문과 대답을 이어요.', {}, [['무슨 일이 있었니?', '공을 확 뺏었어'], ['누가 어떤 마음이었니?', '나는 속상했어'], ['무엇이 필요하니?', '같이 차고 싶어'], ['앞으로 어떻게 할까?', '번갈아 차자']], 2, 3, '다시는 안 놀아', 0.25,
              { conclude: '무슨 일이 → 어떤 마음 → 무엇이 필요 → 앞으로 어떻게. 회복 질문은 다시 함께 지내는 길을 찾아요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '회복 질문을 차례대로 써요.', columns: ['차례', '회복 질문'], cells: [['1', '무슨 일이 있었니?'], ['2', ''], ['3', '무엇이 필요하니?'], ['4', '']], answer: '누가 어떤 마음이었니?, 앞으로 어떻게 할까?' }] },
        notes: '회복 질문 네 가지는 체계도 계획의 문장을 그대로 썼다. "누가 잘못했니?"는 함정 카드로만 쓴다.',
      }),
      C({
        id: 'bully.e34.g3-anger-repair.activity.repair-role', type: 'activity', title: '회복 대화 짝 역할극',
        method: '회복 대화 짝 역할극', tool: 'story', minutes: 26,
        levels: { easy: '질문 2개(무슨 일·어떤 마음)에 두 친구의 대답 말풍선을 채운다.', base: '질문 3개(+무엇이 필요)에 대답 말풍선을 채운다.', challenge: '질문 4개 — 앞으로의 약속까지 채우고 넷째 문항에서 짝과 역할을 나눠 읽는다.' },
        activity: {
          title: '회복 대화 짝 역할극', tool: 'story',
          teacher: '"질문 차례대로 두 친구의 대답을 넣어 볼까요?" 말풍선을 채운 뒤 한 사람은 질문하는 친구, 한 사람은 대답하는 친구가 되어 읽게 한다. 대답에 "네가 다 잘못했어"를 넣으려는 학생에게 "이 대답을 들으면 약속까지 갈 수 있을까요?"라고 묻는다. 새치기한 친구를 "새치기쟁이"라고 부르는 말이 나오면 "사람이 아니라 \'새치기한 행동\'을 말해요"라고 바로잡는다.',
          task: '회복 질문 차례대로 두 친구의 대답 말풍선을 채워요.', levels: CARD_LV,
          items: [
            FILLN('새치기 장면의 회복 대화를 채워요.', ['서아(무슨 일?)', '서아(어떤 마음?)', '서아(무엇이 필요?)', '라온(앞으로?)'], [['"라온이가 ___"', '줄에 끼어들었어.'], ['"나는 ___"', '화가 났어.'], ['"___ 좋겠어."', '차례를 지켜 주면'], ['"다음엔 ___"', '뒤에 설게.']], ['네가 늦었잖아.', '몰라.', '또 할 거야.'], 2, 3, 0.15),
            FILLN('밀친 장면의 회복 대화를 채워요.', ['이안(무슨 일?)', '이안(어떤 마음?)', '이안(무엇이 필요?)', '시우(앞으로?)'], [['"시우가 ___"', '복도에서 밀었어.'], ['"나는 ___"', '아프고 놀랐어.'], ['"___ 좋겠어."', '미안하다고 하면'], ['"다음엔 ___"', '천천히 걸을게.']], ['원래 그런 애야.', '별거 아냐.', '너도 밀어.'], 2, 3, 0.2),
            FILLN('놀림 장면의 회복 대화를 채워요.', ['하람(무슨 일?)', '하람(어떤 마음?)', '하람(무엇이 필요?)', '다온(앞으로?)'], [['"다온이가 ___"', '내 이름을 놀렸어.'], ['"나는 ___"', '창피했어.'], ['"___ 좋겠어."', '이름을 바로 불러 주면'], ['"다음엔 ___"', '이름을 바로 부를게.']], ['장난이었잖아.', '참아.', '또 놀릴래.'], 2, 3, 0.25),
            { prompt: '짝과 질문하는 친구·대답하는 친구가 되어 대화 하나를 읽어요.', free: true, talk: true, conclude: '회복 대화는 무슨 일이·어떤 마음·무엇이 필요·앞으로 어떻게 — 네 질문으로 다시 함께 지내는 약속까지 가요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '"무엇이 필요하니?"에 대한 대답을 한 줄로 써요.' }, { type: 'choice', prompt: '회복 질문에서 맨 끝에 묻는 것은?', options: ['앞으로 어떻게 할까?', '누가 잘못했니?'], answer: '앞으로 어떻게 할까?' }] },
        notes: FICTION + ' 역할극에서는 대본의 이름과 말만 쓰고, 실제로 있었던 반의 다툼을 꺼내지 않는다.',
      }),
      C({
        id: 'bully.e34.g3-anger-repair.wrap.cool-tools', type: 'wrap', title: '나의 화 식히기 생각그물',
        method: '나의 화 식히기 방법 생각그물', tool: 'mindmap', minutes: 6,
        levels: { easy: '가지 2개(멈추기·숨쉬기)에 방법 카드를 잇는다.', base: '가지 4개(멈추기·숨쉬기·물 마시기·말하기)에 방법 카드를 잇는다.', challenge: '가지 4개에 잇고 남는 카드(주먹으로 치기)를 가려낸 뒤 가지마다 언제 쓸지 장면을 짝에게 말한다.' },
        wrap: {
          teacher: '"화가 날 때 쓸 수 있는 나만의 도구는 무엇일까요?" 가운데 "화가 날 때"에서 가지를 하나씩 잇고, 가지마다 "이건 언제 쓸까요?"라고 묻는다. "주먹으로 책상 치기" 카드를 넣으려는 학생에게 "책상은 괜찮아도 옆 친구가 놀라거나 손이 다치면요?"라고 되묻는다.',
          exitTicket: [
            EX('mindmap', MATCH('화가 날 때 가지에 방법 카드를 이어요.', { topic: '화가 날 때' }, [['멈추기', '하던 것을 멈춰요'], ['숨쉬기', '천천히 네 번 숨'], ['물 마시기', '물 한 컵 마셔요'], ['말하기', '"나 화났어" 말해요']], 2, 4, '주먹으로 책상 치기', 0.15)),
            { type: 'choice', prompt: '화가 나서 친구를 때리는 건 어쩔 수 없을까요?', options: ['화가 나면 어쩔 수 없어요', '화가 나도 멈출 수 있어요'], answer: 1, difficulty: 0.1, explain: '화는 괜찮은 마음이지만, 때리지 않고 멈추고 말로 할 수 있어요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '나의 화 식히기 도구',
          items: [
            { type: 'check', prompt: '내가 쓸 화 식히기 방법에 표시해요.', options: ['멈추기', '숨쉬기', '물 마시기', '"나 화났어" 말하기'] },
            { type: 'short', prompt: '화가 날 때 내가 가장 먼저 할 일을 한 줄로 써요.' },
          ],
          easy: { note: '"멈추기"부터 떠올려요.', items: [{ type: 'choice', prompt: '화가 나면 먼저?', options: ['멈춰요', '밀어요'], answer: '멈춰요' }] },
        },
      }),
      C({
        id: 'bully.e34.g3-anger-repair.wrap.repair-song', type: 'wrap', title: '회복 질문 리듬 구호',
        method: '회복 질문 리듬 구호', tool: 'keyboard', minutes: 6,
        levels: { easy: '"무슨 일? 어떤 마음?" 두 마디 리듬 블록을 따라 놓는다.', base: '네 질문 구호 네 마디 리듬 블록을 따라 놓는다.', challenge: '네 마디를 놓은 뒤 박에 맞춰 질문을 차례대로 소리 내어 말한다(교사 진행).' },
        wrap: {
          teacher: '"회복 질문을 리듬에 맞춰 외쳐 볼게요. 무-슨-일(쉼), 어-떤-마-음(쉼)…" 손뼉으로 한 번 들려준 뒤 리듬 블록을 놓게 한다. 블록을 다 놓으면 반 전체가 박에 맞춰 네 질문을 외친다. 질문 차례를 헷갈리는 학생에게 "먼저 일어난 일, 그다음 마음, 그다음 필요, 끝은 앞으로"라고 손가락으로 짚어 준다.',
          exitTicket: [
            { type: 'tool', tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 4, blocks: ['q', 'e', 'qr'], pattern: CHANT }, prompt: '회복 질문 구호 리듬을 듣고 블록으로 따라 놓아요.', target: { rhythm: CHANT }, difficulty: 0.25,
              levels: { easy: { toolOptions: { measures: 2, pattern: CHANT.slice(0, 9) }, target: { rhythm: CHANT.slice(0, 9) } } } },
            { type: 'choice', prompt: '회복 질문에서 맨 먼저 묻는 것은?', options: ['무슨 일이 있었니?', '누가 잘못했니?', '앞으로 어떻게 할까?'], answer: 0, difficulty: 0.1, explain: '먼저 무슨 일이 있었는지 물어요. 잘못한 사람을 찾는 질문은 하지 않아요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '회복 질문 구호',
          items: [
            { type: 'blank', prompt: '구호의 빈칸을 채워요.', text: '무슨 일? → 어떤 마음? → ___ → 어떻게 할까?', answer: '뭐가 필요?' },
            { type: 'short', prompt: '회복 질문을 쓰면 다툰 친구와 무엇이 달라질지 한 줄로 써요.' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 4학년 · 외모·말투 놀림, 장난과 폭력의 선 (research-mandatory §2 초: 놀림·따돌림 구별)
  // ======================================================================================================
  {
    const C = T('g4-looks-teasing', 4);
    const DISLIKE = [['키 놀림', 21], ['말투 흉내', 17], ['칭찬처럼 한 외모 말', 11]];
    const LINE = ['친구도 함께 웃었어요', '싫다면 바로 멈췄어요', '외모·말투를 놀리지 않았어요', '바꿀 행동 하나를 정했어요'];
    M.push(
      C({
        id: 'bully.e34.g4-looks-teasing.intro.line-check', type: 'intro', title: '"선 넘었나?" 표정 신호 읽기',
        method: '"선 넘었나?" 표정 신호 읽기', tool: 'emotion', minutes: 6,
        levels: { easy: '상황 2개에 듣는 친구의 표정 신호 카드를 함께 놓는다.', base: '상황 3개에 표정 신호 카드를 놓고 선을 넘었는지 말한다.', challenge: '처음엔 괜찮다가 선을 넘는 지점(셋째 상황)을 찾아 까닭을 짝에게 말한다.' },
        intro: {
          teacher: '"민호가 친구 말투를 흉내 냈어요. 듣는 친구 얼굴을 보면 선을 넘었는지 알 수 있을까요?" 세 상황을 읽고 시연 단추로 표정 신호 카드가 놓이는 것을 보인다(같이 웃음 → 얼굴이 굳음 → 자리를 피함). "웃었으니 괜찮아요"라는 말이 나오면 "처음엔 웃었는데 세 번째에도 웃었나요? 웃음이 사라지면 무엇을 해야 할까요?"라고 되묻는다. 오늘은 장난과 폭력을 가르는 선 두 가지(서로 즐거운가·멈춰 달라면 멈추는가)를 배운다고 밝힌다.',
          student: '말투 흉내 상황 셋을 읽고 듣는 친구의 표정 신호 카드를 골라요. 어디서 선을 넘었을까요?',
          demo: { tool: 'emotion', options: { mode: 'match', slots: [{ id: 's1', label: '함께 정한 성대모사 놀이' }, { id: 's2', label: '하지 말래도 또 흉내' }, { id: 's3', label: '반 친구들 앞에서 흉내' }], cards: ['같이 웃어요', '얼굴이 굳어요', '자리를 피해요', '박수 쳐요'], shuffle: false }, sequence: [{ match: { s1: '같이 웃어요' } }, { match: { s1: '같이 웃어요', s2: '얼굴이 굳어요' } }, { match: { s1: '같이 웃어요', s2: '얼굴이 굳어요', s3: '자리를 피해요' } }] },
          art: { draw: 'three paper panels of two children talking: in the first both laugh, in the second one child\'s face turns stiff, in the third that child walks away from a laughing group', banner: '선 넘었을까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: FICTION,
      }),
      C({
        id: 'bully.e34.g4-looks-teasing.intro.teasing-chart', type: 'intro', title: '"이 말 들으면 기분은?" 그래프',
        method: '"이 말 들으면 기분은?" 그래프 읽기', tool: 'chart', minutes: 6,
        levels: { easy: '두 막대(키 놀림·말투 흉내)를 함께 견준다.', base: '세 막대를 읽고 싫다는 친구가 가장 많은 말을 고른다.', challenge: '가장 큰 막대와 가장 작은 막대의 차이(10명)를 말하고, 작은 막대도 싫은 친구가 있다는 것을 짚는다.' },
        intro: {
          teacher: '"가상의 4학년 25명에게 \'이 말을 들으면 싫다\'를 물었어요. 가장 많은 친구가 싫다고 한 말은?" 시연 단추로 키 놀림 막대가 골라지는 것을 보이고 세 막대를 함께 읽는다. "\'얼굴 작다\'는 칭찬인데요?"라는 말이 나오면 "칭찬처럼 들려도 11명은 싫다고 했어요. 좋은지 싫은지는 누가 정할까요?"라고 되묻는다. 자료는 가상이라고 밝힌다.',
          student: '가상의 4학년 그래프를 읽고, 많은 친구가 싫어하는 말이 무엇인지 짝에게 말해 보아요.',
          demo: { tool: 'chart', options: { type: 'bar', mode: 'read', title: '이 말을 들으면 싫다(가상의 4학년 25명)', unit: '명', xLabel: '말', yLabel: '싫다는 친구', data: DISLIKE, max: 25, scale: 5, showValues: true, question: '싫다는 친구가 가장 많은 말은?', choices: DISLIKE.map((x) => x[0]) }, sequence: [{ pick: 0 }] },
          art: { draw: 'a paper bar chart with three bars, small paper speech bubbles above each bar, a paper child reading the chart with a magnifier', banner: '이 말 들으면 기분은?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '그래프는 가상 자료다. 반에서 직접 조사하지 않고, 특정 친구의 외모를 떠올리게 하는 항목은 쓰지 않는다.',
      }),
      C({
        id: 'bully.e34.g4-looks-teasing.activity.two-rules-sort', type: 'activity', title: '두 기준으로 장면 나누기',
        method: '두 기준으로 장면 나누기', tool: 'sortboard', minutes: 14,
        levels: { easy: '판마다 카드 4장, 놓으면 바로 맞는지 알려 주고 바구니마다 든 장 수가 보인다.', base: '판마다 카드 6장(외모·말투·별명)을 장난과 폭력 바구니에 나눈다.', challenge: '판마다 애매한 카드 2장이 더해지고, 고른 기준을 짝과 토의해 정한다.' },
        activity: {
          title: '두 기준으로 장면 나누기', tool: 'sortboard',
          teacher: '"이 장면, 둘 다 즐거운가요? \'그만\' 하면 멈추나요?" 카드를 놓을 때마다 두 기준 가운데 무엇으로 정했는지 말하게 한다. "사투리 흉내는 재밌는 장난이에요"라는 학생에게 "그 친구가 같이 웃었나요? 하지 말라고 했는데도 계속했나요?"라고 묻는다. 놀린 친구를 "나쁜 애"로 부르지 않고 "그 행동은 선을 넘었어요"라고 말하게 한다.',
          task: '장면 카드를 "장난"과 "폭력" 바구니에 두 기준으로 나누어요.', levels: BOARD_LV,
          items: [
            SORT('외모 장면을 두 기준으로 나누어요.', {}, ['장난: 서로 즐겁고 멈춰요', '폭력: 한쪽만 즐겁거나 계속'],
              [['서로 머리띠 바꿔 쓰기', '함께 웃는 얼굴 그리기', '"그만" 하자 멈춘 장난'], ['키를 매일 놀리기', '몸집으로 별명 붙이기', '싫다는데 머리 만지기']], 2, [['허락받고 머리 땋기'], ['"칭찬이야" 하며 얼굴 놀림']], 0.15),
            SORT('말투 장면을 두 기준으로 나누어요.', {}, ['장난: 서로 즐겁고 멈춰요', '폭력: 한쪽만 즐겁거나 계속'],
              [['서로 정한 성대모사', '번갈아 하는 목소리 놀이', '"싫어" 하자 멈춤'], ['사투리 따라 하며 웃기', '말할 때마다 흉내', '반 앞에서 말투 흉내']], 2, [['함께 만든 사투리 노래'], ['"재밌잖아" 하며 또 흉내']], 0.2),
            SORT('별명 장면을 두 기준으로 나누어요.', {}, ['장난: 서로 즐겁고 멈춰요', '폭력: 한쪽만 즐겁거나 계속'],
              [['본인이 좋아하는 별명', '서로 지어 준 모둠 이름', '싫다 하자 이름 부르기'], ['외모로 지은 별명', '싫다는 별명 계속', '여럿이 같은 별명 외치기']], 2, [['처음 듣는 별명은 물어보기'], ['칭찬처럼 들리는 놀림 별명']], 0.25,
              { conclude: '서로 즐겁고, "그만" 하면 바로 멈추면 장난. 한쪽만 즐겁거나 계속하면 폭력이에요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '장면이 장난이면 "장", 폭력이면 "폭"을 써요.', columns: ['장면', '장 / 폭'], cells: [['서로 정한 성대모사', ''], ['키를 매일 놀리기', ''], ['싫다는 별명 계속', '']], answer: '장, 폭, 폭' }] },
        notes: FICTION + ' 외모 카드는 키·몸집·머리처럼 일반적인 것만 쓰고, 반에 있는 특정 친구를 떠올리게 하지 않는다.',
      }),
      C({
        id: 'bully.e34.g4-looks-teasing.activity.stop-line-dilemma', type: 'activity', title: '갈림길: 흉내가 반 유행이 될 때',
        method: '갈림길: 웃긴 흉내가 반 유행이 될 때', tool: 'dilemma', minutes: 14,
        levels: { easy: '갈림 1번, 보기 2개 가운데 고르고 결과를 본다.', base: '갈림 2번, 보기 3개씩 고르며 며칠 뒤 장면까지 따라간다.', challenge: '갈림 3번 — 바른 길 끝에 흉내 낸 친구가 바뀌는 셋째 장면이 이어진다.' },
        activity: {
          title: '갈림길: 흉내가 반 유행이 될 때', tool: 'dilemma',
          teacher: '"반 전체가 흉내를 따라 하면, 흉내의 주인공은 하루에 몇 번 그 소리를 들을까요?" 결과를 소리 내어 읽고 며칠 뒤 장면까지 따라간다. "나 하나 안 한다고 달라져요?"라는 말에는 "\'안 할래\' 하는 친구가 하나둘 늘면 유행은 어떻게 될까요?"라고 묻는다. 셋째 장면에서는 흉내 낸 친구도 멈추고 사과하면 다시 함께할 수 있다는 것을 짚는다.',
          task: '장면을 읽고 보기를 골라요. 결과를 보고 다음 장면에서 또 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL('한 친구 말투 흉내가 반에서 유행해요.', {
              text: '반에서 하람이 말투("그러니까아~")를 따라 하는 게 유행이에요. 하람이는 웃지 않아요.', motif: 'cloud',
              choices: [
                { id: 'stop', text: '"하람이가 싫대, 그만하자"', result: '옆 친구 둘이 "그러네" 하고 멈췄어요.', ending: '"그만하자" 한마디로 흉내가 줄었어요.', next: {
                  text: '며칠 뒤에도 몇몇이 쉬는 시간마다 흉내를 내요.', choices: [
                    { id: 'teacher', text: '하람이와 함께 선생님께 알린다', result: '선생님이 반과 "말투도 그 사람의 일부"를 이야기하셨어요.', impact: [{ who: '하람이', text: '마음이 놓였어요', tone: 1 }], ending: '되풀이되는 흉내는 어른께 알려 멈췄어요.' },
                    { id: 'mock', text: '흉내 내는 친구 말투를 흉내 낸다', result: '흉내 싸움이 됐어요.', impact: [{ who: '반 친구들', text: '서로 상처받아요', tone: -1 }], why: '똑같이 흉내 내면 놀림이 늘어나요.' },
                    { id: 'give', text: '"어쩔 수 없지" 하고 둔다', result: '하람이가 반에서 말을 하지 않게 됐어요.', impact: [{ who: '하람이', text: '말하기가 겁나요', tone: -1 }], why: '계속되면 꼭 어른께 알려요.' },
                  ] } },
                { id: 'copy', text: '나도 따라 한다', result: '흉내가 더 퍼졌어요.', impact: [{ who: '하람이', text: '반 전체가 놀리는 것 같아요', tone: -1 }], why: '유행이어도 한 사람을 놀리면 폭력이에요.' },
                { id: 'skip', text: '나는 안 하고 가만있는다', result: '나는 안 했지만 흉내는 계속됐어요.', impact: [{ who: '하람이', text: '여전히 힘들어요', tone: 0 }], why: '안 하는 것도 좋지만, "그만하자"고 말하면 더 빨리 멈춰요.' },
              ] }, [['stop', 'teacher']],
            { third: { text: '흉내를 내던 이안이가 "나 그런 줄 몰랐어" 해요.', choices: [
              { id: 'chance', text: '"하람이한테 미안하다고 해 볼래?"', result: '이안이가 하람이에게 사과하고 흉내를 멈췄어요.', impact: [{ who: '이안이와 하람이', text: '다시 함께해요', tone: 1 }], ending: '행동을 바로잡은 친구는 다시 함께할 수 있어요.' },
              { id: 'label', text: '"넌 원래 못된 애야"', result: '이안이가 화를 내며 자리를 떴어요.', impact: [{ who: '이안이', text: '바뀌기 어려워요', tone: -1 }], why: '사람이 아니라 행동을 바로잡아요.' },
              { id: 'cold', text: '대답하지 않는다', result: '이안이는 어떻게 할지 몰랐어요.', impact: [{ who: '이안이', text: '어리둥절해요', tone: 0 }] },
            ] }, pick: 'chance' }, 0.2),
            DIL('키 놀림이 반 놀이가 됐어요.', {
              text: '키가 작은 서아 앞에서 친구들이 "안 보여~" 하며 손을 이마에 대는 놀이가 생겼어요.', motif: 'sun',
              choices: [
                { id: 'stop', text: '"서아가 싫어해, 그만하자"', result: '놀이를 하던 친구 몇 명이 손을 내렸어요.', ending: '그만하자는 말에 놀이가 줄었어요.', next: {
                  text: '한 친구가 "장난인데 왜 진지해?" 해요.', choices: [
                    { id: 'explain', text: '"서아가 웃지 않잖아. 장난은 같이 웃는 거야"', result: '그 친구가 서아 얼굴을 보고 멈췄어요.', impact: [{ who: '서아', text: '편해졌어요', tone: 1 }], ending: '장난의 선을 말로 알려 주었어요.' },
                    { id: 'quiet', text: '"그래, 장난이지" 한다', result: '놀이가 다시 시작됐어요.', impact: [{ who: '서아', text: '또 놀림받아요', tone: -1 }], why: '"장난"이라는 말에 선을 지우지 않아요.' },
                    { id: 'angry', text: '그 친구 키를 놀린다', result: '말다툼이 커졌어요.', impact: [{ who: '모두', text: '다툼이 생겼어요', tone: -1 }], why: '놀림으로 갚으면 또 다른 놀림이에요.' },
                  ] } },
                { id: 'laugh', text: '같이 웃는다', result: '놀이가 더 커졌어요.', impact: [{ who: '서아', text: '창피해요', tone: -1 }], why: '웃음도 놀림에 힘을 줘요.' },
                { id: 'leave', text: '못 본 척한다', result: '놀이는 계속됐어요.', impact: [{ who: '서아', text: '혼자예요', tone: -1 }], why: '못 본 척하면 놀림이 계속돼요.' },
              ] }, [['stop', 'explain']],
            { third: { text: '다음 날 놀리던 친구가 서아 옆에서 머뭇거려요.', choices: [
              { id: 'invite', text: '"같이 앞자리에서 보자" 둘 다 부른다', result: '셋이 함께 앉아 웃었어요.', impact: [{ who: '서아와 친구', text: '사이가 좋아졌어요', tone: 1 }], ending: '바뀐 친구도 함께할 자리를 만들었어요.' },
              { id: 'remind', text: '"또 놀리려고?"', result: '친구가 머쓱해서 돌아갔어요.', impact: [{ who: '그 친구', text: '바뀔 기회를 잃어요', tone: -1 }], why: '멈춘 친구에게는 다시 함께할 기회를 줘요.' },
              { id: 'pass', text: '모른 척한다', result: '어색함이 남았어요.', impact: [{ who: '모두', text: '어색해요', tone: 0 }] },
            ] }, pick: 'invite' }, 0.25),
            DIL('칭찬처럼 들리는 외모 말이 계속돼요.', {
              text: '친구들이 다온이를 볼 때마다 "와, 얼굴 진짜 작다~" 하며 웃어요. 다온이는 듣기 싫대요.', motif: 'star',
              choices: [
                { id: 'stop', text: '"다온이가 싫대. 외모 말은 그만"', result: '친구들이 "칭찬인데?" 하며 멈칫했어요.', ending: '칭찬처럼 들려도 싫다면 멈추자고 말했어요.', next: {
                  text: '친구들이 "칭찬도 하면 안 돼?" 하고 물어요.', choices: [
                    { id: 'other', text: '"외모 말고 한 일을 칭찬하자"', result: '친구들이 "그림 잘 그렸다"로 바꿨어요.', impact: [{ who: '다온이', text: '기뻐요', tone: 1 }], ending: '외모 대신 한 일을 칭찬하는 법을 찾았어요.' },
                    { id: 'yes', text: '"그럼 해도 돼"', result: '외모 말이 계속됐어요.', impact: [{ who: '다온이', text: '불편해요', tone: -1 }], why: '듣는 사람이 싫다면 칭찬이어도 멈춰요.' },
                    { id: 'tease', text: '"너희 얼굴은 크잖아"', result: '외모 놀림이 더 늘었어요.', impact: [{ who: '모두', text: '기분이 상해요', tone: -1 }], why: '외모로 맞받아치면 놀림이 커져요.' },
                  ] } },
                { id: 'join', text: '"맞아, 진짜 작다~" 따라 한다', result: '다온이가 고개를 숙였어요.', impact: [{ who: '다온이', text: '듣기 싫어요', tone: -1 }], why: '듣는 사람이 싫다면 놀림이에요.' },
                { id: 'nothing', text: '칭찬이니 괜찮다고 여긴다', result: '다온이는 계속 불편했어요.', impact: [{ who: '다온이', text: '혼자 참아요', tone: -1 }], why: '좋은지 싫은지는 듣는 사람이 정해요.' },
              ] }, [['stop', 'other']],
            { third: { text: '다온이가 "고마워, 근데 말하기 어려웠어" 해요.', choices: [
              { id: 'support', text: '"다음엔 같이 말해 줄게"', result: '다온이가 마음이 놓였대요.', impact: [{ who: '다온이', text: '든든해요', tone: 1 }], ending: '말하기 어려운 친구 곁에서 함께 선을 지켰어요.' },
              { id: 'weak', text: '"그 정도는 혼자 말해야지"', result: '다온이가 다시 말이 없어졌어요.', impact: [{ who: '다온이', text: '외로워요', tone: -1 }], why: '함께 말해 주는 것이 도움이에요.' },
              { id: 'joke', text: '"근데 진짜 작긴 해"', result: '다온이가 서운해했어요.', impact: [{ who: '다온이', text: '서운해요', tone: -1 }], why: '멈추기로 한 말은 다시 하지 않아요.' },
            ] }, pick: 'support' }, 0.3, { conclude: '유행이어도, 칭찬처럼 들려도 듣는 친구가 싫다면 선을 넘은 거예요. "그만하자"고 말하고, 계속되면 알려요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '칭찬처럼 들리는 외모 말을 친구가 싫어하면?', options: ['칭찬이니 계속해요', '싫다면 멈춰요'], answer: '싫다면 멈춰요' }] },
        notes: FICTION,
      }),
      C({
        id: 'bully.e34.g4-looks-teasing.activity.better-words', type: 'activity', title: '놀림 말을 존중 말로 바꾸기',
        method: '놀림 말을 존중 말로 바꾸기', tool: 'wordcards', minutes: 26,
        levels: { easy: '판마다 놀림 말 3개에 존중 말 카드를 잇는다.', base: '판마다 놀림 말 5개에 존중 말 카드를 잇는다.', challenge: '판마다 6개를 남는 카드 하나를 가려 잇고, 넷째 문항에서 내 말로 바꾼 문장을 짝에게 들려준다.' },
        activity: {
          title: '놀림 말을 존중 말로 바꾸기', tool: 'wordcards',
          teacher: '"\'키 작아서 안 보여~\'를 듣는 친구가 편해지려면 어떻게 바꿀까요?" 이은 뒤 바꾼 말을 짝에게 소리 내어 들려주게 한다. "존중 말은 오글거려요"라는 학생에게 "그럼 내 말로 편하게 바꿔 볼까요? 뜻만 지키면 돼요"라고 말해 준다. 존중 말은 외모 대신 행동·생각·도움을 말한다는 것을 짚는다.',
          task: '놀림 말 카드에 그 말을 바꾼 존중 말 카드를 이어요.', levels: CARD_LV,
          items: [
            MATCH('외모 놀림 말을 존중 말로 이어요.', {}, [['"키 작아서 안 보여~"', '앞자리로 와, 잘 보이게'], ['"너 몸집 크다~"', '힘이 세서 든든해'], ['"머리 이상해"', '머리 새로 했구나'], ['"얼굴 빨개졌대요"', '덥니? 창문 열까?'], ['"안경 쓴 박사님"', '이름 불러 줄게'], ['"이빨 토끼"', '웃는 모습 좋아']], 3, 5, '진짜 작긴 해', 0.15),
            MATCH('말투 흉내를 존중 말로 이어요.', {}, [['"그러니까아~" 흉내', '네 말 끝까지 들을게'], ['사투리 따라 하기', '그 말 뜻 알려 줄래?'], ['"목소리 왜 그래"', '목소리 또렷하다'], ['"말 느려 터졌어"', '천천히 말해도 돼'], ['"발음 이상해"', '한 번 더 말해 줄래?'], ['말할 때마다 웃기', '고개 끄덕이며 듣기']], 3, 5, '한 번만 더 흉내', 0.2),
            MATCH('칭찬처럼 들리는 놀림을 진짜 칭찬으로 이어요.', {}, [['"얼굴 진짜 작다~"', '그림 정말 멋지다'], ['"피부 하얗다, 귀신 같아"', '발표 목소리 좋았어'], ['"키 커서 전봇대네"', '높은 데 꺼내 줘서 고마워'], ['"마른 게 부럽다~"', '달리기 열심이더라'], ['"눈 작아서 웃기다"', '네 생각 재밌어'], ['"머리 커서 똑똑하겠다"', '문제 푸는 방법 좋아']], 3, 5, '칭찬이니 괜찮아', 0.25,
              { conclude: '존중 말은 외모 대신 그 친구가 한 일·생각·도움을 말해요. 칭찬도 듣는 친구가 싫다면 바꿔요.' }),
            { prompt: '놀림 말 하나를 내 말로 바꿔 짝에게 들려줘요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '놀림 말을 존중 말로 바꿔 써요.', text: '"키 작아서 안 보여~" → "___"', answer: '앞자리로 와, 잘 보이게' }, { type: 'short', prompt: '친구의 외모 대신 칭찬할 수 있는 것을 하나 써요.' }] },
        notes: '놀림 말 카드는 존중 말로 바꾸기 위해서만 보여 준다. 학생이 놀림 말을 친구에게 소리 내어 따라 하는 활동은 하지 않고, 존중 말만 소리 내어 말한다.',
      }),
      C({
        id: 'bully.e34.g4-looks-teasing.wrap.line-check-list', type: 'wrap', title: '장난 선 점검표 표시',
        method: '장난 선 점검표 표시', tool: 'timer', minutes: 6,
        levels: { easy: '점검 2개(친구도 웃었나·싫다면 멈췄나)에 오늘의 나를 표시한다.', base: '점검 3개에 표시한다.', challenge: '점검 4칸에 표시하고 바꿀 행동 하나를 출구 3번에 쓴다.' },
        wrap: {
          teacher: '"오늘의 나를 떠올려 볼까요? 친구도 같이 웃었나요? 싫다고 하면 바로 멈췄나요?" 점검 칸을 하나씩 읽고 스스로 표시하게 한다. 다 표시하지 못한 학생을 나무라지 않고 "바꿀 행동 하나를 찾은 것도 오늘 배운 거예요"라고 말해 준다.',
          exitTicket: [
            SELF('장난 선 점검', LINE, '오늘의 나를 떠올리며 장난 선 점검표에 표시해요.'),
            { type: 'choice', prompt: '사투리 흉내를 친구가 싫어하면?', options: ['재밌으니 계속해요', '바로 멈춰요', '더 크게 해요'], answer: 1, difficulty: 0.1, explain: '듣는 친구가 싫다면 바로 멈추는 것이 장난의 선이에요.' },
            { type: 'short', prompt: '내가 바꿀 행동 하나를 한 줄로 써요.' },
          ],
        },
        worksheet: {
          title: '장난의 선 점검',
          items: [
            { type: 'check', prompt: '장난의 선을 지켰는지 표시해요.', options: LINE.slice(0, 3) },
            { type: 'short', prompt: '친구가 "싫어"라고 할 때 내가 할 말을 써요.' },
          ],
          easy: { note: '친구 얼굴을 떠올려요.', items: [{ type: 'choice', prompt: '친구가 웃지 않으면?', options: ['멈춰요', '계속해요'], answer: '멈춰요' }] },
        },
      }),
      C({
        id: 'bully.e34.g4-looks-teasing.wrap.respect-poster', type: 'wrap', title: '"다 달라서 좋아" 포스터',
        method: '"다 달라서 좋아" 포스터', tool: 'collage', minutes: 6,
        levels: { easy: '서로 다른 얼굴·말풍선 조각 3개 이상을 붙인다.', base: '조각 5개 이상을 붙이고 점검 3칸에 표시한다.', challenge: '따뜻한 색과 차가운 색 조각을 맞대어 붙이고 포스터 제목을 정한다.' },
        wrap: {
          teacher: '"우리 반은 얼굴도, 말투도, 키도 다 달라요. 다른 모양·색 조각으로 \'다 달라서 좋아\'를 보여 줄까요?" 서로 다른 모양과 색을 고르게 하고, 도전 단계는 따뜻한 색(빨강·주황·노랑)과 차가운 색(파랑·초록·보라)을 맞대게 한다. "다 똑같으면 편해요"라는 말이 나오면 "모두 같은 색 포스터와 여러 색 포스터, 어느 쪽이 더 눈에 띌까요?"라고 묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'collage', options: { shapes: ['circle', 'heart', 'star', 'leaf', 'semi'], maxPieces: 12 }, prompt: '서로 다른 조각으로 "다 달라서 좋아" 포스터를 꾸며요.', target: { selfCheck: ['다른 모양을 골랐어요', '다른 색을 골랐어요', '짝과 함께 보았어요'], minPieces: 5 }, difficulty: 0.1,
              levels: { easy: { target: { selfCheck: ['다른 모양을 골랐어요', '짝과 함께 보았어요'], minPieces: 3 } }, challenge: { target: { contrast: 'warm-cool', selfCheck: ['다른 모양을 골랐어요', '다른 색을 맞대었어요', '포스터 제목을 정했어요'], minPieces: 5 } } } },
            { type: 'choice', prompt: '친구의 말투가 나와 다르면?', options: ['흉내 내요', '그대로 존중해요', '고치라고 해요'], answer: 1, difficulty: 0.1, explain: '말투도 그 친구의 일부예요. 다름은 놀릴 거리가 아니에요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '다 달라서 좋아',
          items: [
            { type: 'short', prompt: '친구와 내가 다른 점 하나와 그래서 좋은 점을 써요.' },
            { type: 'draw', prompt: '"다 달라서 좋아" 포스터를 그리고 제목을 써요.' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 4학년 · 은근한 따돌림 알아차리기 (research-mandatory §2 초: 놀림·따돌림 구별)
  // ======================================================================================================
  {
    const C = T('g4-subtle-exclusion', 4);
    const ROOM = {
      title: '우리 교실(가상)', grid: [6, 4],
      regions: [
        { name: '1모둠', cells: [[0, 0], [1, 0], [0, 1], [1, 1]] }, { name: '2모둠', cells: [[2, 0], [3, 0], [2, 1], [3, 1]] },
        { name: '3모둠', cells: [[0, 2], [1, 2], [0, 3], [1, 3]] }, { name: '4모둠', cells: [[2, 2], [3, 2], [2, 3], [3, 3]] },
        { name: '혼자 떨어진 자리', cells: [[5, 3]] }, { name: '복도 쪽', cells: [[4, 0], [5, 0], [4, 1], [5, 1], [4, 2], [5, 2], [4, 3]] },
      ],
    };
    M.push(
      C({
        id: 'bully.e34.g4-subtle-exclusion.intro.spot-signals', type: 'intro', title: '그림 속 은근한 신호 찾기',
        method: '그림 속 은근한 신호 찾기', tool: 'emotion', minutes: 6,
        levels: { easy: '신호 카드 2장(대답 안 함·자리 옮기기)을 함께 바구니에 담는다.', base: '신호 3장을 찾아 담고, 그 친구의 마음을 말한다.', challenge: '신호 4장을 찾고, 그 친구가 느낄 마음 두 가지를 짝에게 말한다.' },
        intro: {
          teacher: '"모둠 활동 그림이에요. 한 친구에게만 일어나는 일이 있어요. 찾아볼까요?" 시연 단추로 은근한 신호 카드가 바구니에 담기는 것을 보인다(말해도 대답 안 함 → 자리 옮기기 → 귓속말 뒤 웃기). "때리거나 욕한 건 없는데요?"라는 말이 나오면 "아무도 때리지 않았는데, 이 친구는 어떤 마음일까요?"라고 되묻는다. 오늘은 눈에 잘 안 띄는 따돌림을 알아차리고 끼워 주는 법을 배운다고 밝힌다.',
          student: '모둠 그림에서 한 친구에게만 생기는 은근한 신호를 찾아 골라요.',
          demo: { tool: 'emotion', options: { mode: 'pick', basket: '은근한 신호', cards: [{ id: 'noans', text: '말해도 대답 안 함' }, { id: 'move', text: '옆자리를 옮겨 감' }, { id: 'whisper', text: '귓속말 뒤 웃음' }, { id: 'eye', text: '눈짓하며 피함' }, { id: 'with', text: '"같이 하자" 함' }, { id: 'hello', text: '웃으며 인사함' }], shuffle: false }, sequence: [{ pick: ['noans'] }, { pick: ['noans', 'move'] }, { pick: ['noans', 'move', 'whisper'] }] },
          art: { draw: 'a paper classroom group table where four paper children lean together whispering while one paper child at the end raises a hand to speak and is not looked at', banner: '보이지 않는 신호', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: FICTION,
      }),
      C({
        id: 'bully.e34.g4-subtle-exclusion.intro.group-seat-map', type: 'intro', title: '모둠 자리 지도에서 혼자인 자리',
        method: '모둠 자리 지도에서 혼자인 자리 찾기', tool: 'map', minutes: 6,
        levels: { easy: '모둠 두 곳과 혼자 떨어진 자리를 함께 짚는다.', base: '모둠 네 곳 가운데 혼자 떨어진 자리를 찾고, 끼워 줄 모둠으로 핀이 옮겨지는 것을 본다.', challenge: '핀을 옮긴 모둠이 혼자 자리에서 어느 쪽(위·왼쪽)인지 말한다.' },
        intro: {
          teacher: '"가상의 교실 자리 지도예요. 모둠마다 친구들이 모여 있어요. 혼자 떨어진 자리는 어디일까요?" 시연 단추로 혼자 떨어진 자리에 핀이 꽂혔다가 4모둠으로 옮겨지는 것을 보인다. "혼자 앉고 싶은 걸 수도 있어요"라는 말이 나오면 "좋은 생각이에요. 그럴 때는 어떻게 알 수 있을까요? \'같이 할래?\' 하고 물어보면 돼요"라고 말해 준다.',
          student: '교실 칸 지도에서 혼자 떨어진 자리를 찾고, 끼워 줄 모둠 자리를 짝과 정해 보아요.',
          demo: { tool: 'map', options: ROOM, sequence: [{ pin: [5, 3] }, { pin: [3, 3] }] },
          art: { draw: 'a paper cut classroom seating map with four group tables of paper chairs and one single paper chair in a far corner, a small paper pin moving toward a group', banner: '혼자인 자리는 어디?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '지도는 가상의 교실이다. 우리 반 실제 자리 배치나 특정 친구 자리를 띄우지 않는다.',
      }),
      C({
        id: 'bully.e34.g4-subtle-exclusion.activity.subtle-sort', type: 'activity', title: '드러나는/은근한 따돌림 나누기',
        method: '드러나는/은근한 따돌림 나누기', tool: 'sortboard', minutes: 14,
        levels: { easy: '판마다 카드 4장, 놓으면 바로 맞는지 알려 주고 바구니마다 든 장 수가 보인다.', base: '판마다 카드 6장(놀이·교실·대화방)을 드러나는·은근한 바구니에 나눈다.', challenge: '판마다 카드 2장이 더해지고, 두 바구니 모두 따돌림이라는 것을 짝과 말로 정리한다(교사 진행).' },
        activity: {
          title: '드러나는/은근한 따돌림 나누기', tool: 'sortboard',
          teacher: '"이 행동은 누가 봐도 알 수 있나요, 잘 안 보이나요?" 카드를 놓을 때마다 까닭을 말하게 한다. "은근한 건 따돌림이 아니에요"라는 학생에게 "두 바구니의 친구 마음은 다를까요?"라고 묻는다. "안 노는 건 내 자유예요"라는 말이 나오면 "누구와 놀지 고르는 것은 자유예요. 그런데 여럿이 짜고 한 명만 계속 빼면 무엇이 될까요?"라고 구분해 준다.',
          task: '따돌림 카드를 "드러나는"과 "은근한" 바구니에 나누어요.', levels: BOARD_LV,
          items: [
            SORT('놀이 장면의 따돌림을 나누어요.', {}, ['드러나는 따돌림', '은근한 따돌림'],
              [['"넌 빠져" 대놓고 빼기', '놀이에서 밀어내기', '"너랑 안 놀아" 외치기'], ['말 걸면 못 들은 척', '같은 편 안 하기', '오면 다 같이 흩어지기']], 2, [['이름을 빼고 편 짜기'], ['눈짓하고 피하기']], 0.15),
            SORT('교실 장면의 따돌림을 나누어요.', {}, ['드러나는 따돌림', '은근한 따돌림'],
              [['"쟤랑 짝 싫어" 말하기', '책상을 떼어 놓기', '모둠에서 "나가" 하기'], ['짝 바꿀 때 한숨', '발표 때 다 같이 딴청', '나눔 간식 일부러 빼기']], 2, [['물건을 대놓고 피하기'], ['귓속말 뒤 쳐다보며 웃기']], 0.2),
            SORT('대화방 장면의 따돌림을 나누어요.', {}, ['드러나는 따돌림', '은근한 따돌림'],
              [['"쟤 내보내" 글 쓰기', '한 명만 빼고 새 방', '말할 때마다 "꺼져"'], ['그 친구 말에만 답 안 함', '읽고 모두 침묵', '그 친구 빼고 약속 잡기']], 2, [['대놓고 강퇴하기'], ['그 친구 글만 안 보이게 숨김']], 0.25,
              { conclude: '드러나든 은근하든 한 친구를 일부러 계속 빼면 모두 따돌림이에요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '때리거나 욕하지 않고 말을 계속 무시하면?', options: ['따돌림이 아니에요', '은근한 따돌림이에요'], answer: '은근한 따돌림이에요' }] },
        notes: FICTION,
      }),
      C({
        id: 'bully.e34.g4-subtle-exclusion.activity.include-dilemma', type: 'activity', title: '갈림길: 짝 바꾸는 날의 한숨',
        method: '갈림길: 짝 바꾸는 날의 한숨', tool: 'dilemma', minutes: 14,
        levels: { easy: '갈림 1번, 보기 2개 가운데 고르고 결과를 본다.', base: '갈림 2번, 보기 3개씩 고르며 결과를 따라간다.', challenge: '갈림 3번 — 바른 길 끝에 한 주 뒤 장면이 이어진다.' },
        activity: {
          title: '갈림길: 짝 바꾸는 날의 한숨', tool: 'dilemma',
          teacher: '"한숨 한 번이 그 친구에게는 어떻게 들릴까요?" 결과 장면을 소리 내어 읽고 다음 장면에서 다시 고른다. 한숨을 쉰 길을 고른 학생도 나무라지 않고 "솔직한 마음이었을 수 있어요. 그 마음을 그 친구가 들으면 어떨까요?"라고 되묻는다. 한 주 뒤 장면에서 인사 한 번이 반 분위기를 바꾼다는 것을 짚는다.',
          task: '장면을 읽고 보기를 골라요. 결과를 보고 다음 장면에서 또 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL('짝을 바꾸는데 다들 한숨을 쉬어요.', {
              text: '짝 바꾸는 날, 시우 옆자리가 나오자 친구들이 "아~" 하고 한숨을 쉬어요. 내가 시우 짝이 됐어요.', motif: 'cloud',
              choices: [
                { id: 'hello', text: '"시우야, 잘 부탁해" 반갑게 인사한다', result: '시우 얼굴이 밝아졌어요.', ending: '반가운 인사 한 번이 한숨을 덮었어요.', next: {
                  text: '쉬는 시간에 친구들이 "너 불쌍하다" 하고 놀려요.', choices: [
                    { id: 'stop', text: '"시우랑 짝 좋은데? 한숨은 그만하자"', result: '친구들이 머쓱해하며 멈췄어요.', impact: [{ who: '시우', text: '마음이 놓여요', tone: 1 }], ending: '은근한 따돌림을 말로 멈췄어요.' },
                    { id: 'agree', text: '"그러게" 하고 웃는다', result: '시우가 들었어요.', impact: [{ who: '시우', text: '상처받았어요', tone: -1 }], why: '맞장구도 따돌림에 힘을 줘요.' },
                    { id: 'change', text: '자리를 바꿔 달라고 한다', result: '시우는 또 혼자 남았어요.', impact: [{ who: '시우', text: '외로워요', tone: -1 }], why: '자리를 피하면 시우만 빠지게 돼요.' },
                  ] } },
                { id: 'sigh', text: '나도 한숨을 쉰다', result: '시우가 고개를 숙였어요.', impact: [{ who: '시우', text: '반 모두가 싫어하는 것 같아요', tone: -1 }], why: '한숨도 은근한 따돌림이 될 수 있어요.' },
                { id: 'later', text: '말없이 앉고, 나중에 친구들에게 그만하자고 한다', result: '그날 시우는 혼자 속상했어요.', impact: [{ who: '시우', text: '그날은 외로웠어요', tone: 0 }], why: '그 자리에서 인사하면 시우가 덜 외로워요.' },
              ] }, [['hello', 'stop']],
            { third: { text: '한 주 뒤, 시우가 모둠 발표를 맡게 됐어요.', choices: [
              { id: 'cheer', text: '"같이 연습하자" 한다', result: '시우가 발표를 잘 해냈어요.', impact: [{ who: '시우와 모둠', text: '함께 뿌듯해요', tone: 1 }], ending: '한 주 동안 곁에 있었더니 모둠이 함께 웃었어요.' },
              { id: 'doubt', text: '"시우가 할 수 있을까?"', result: '모둠이 시우를 또 빼려 했어요.', impact: [{ who: '시우', text: '자신이 없어요', tone: -1 }], why: '의심하는 말도 빼는 쪽으로 이끌어요.' },
              { id: 'skip', text: '모른 척한다', result: '시우는 혼자 준비했어요.', impact: [{ who: '시우', text: '외로워요', tone: 0 }] },
            ] }, pick: 'cheer' }, 0.2),
            DIL('친구가 오면 모두 흩어져요.', {
              text: '쉬는 시간, 서아가 놀이에 오면 친구들이 눈짓하고 하나둘 흩어져요.', motif: 'sun',
              choices: [
                { id: 'stay', text: '자리에 남아 "서아야, 같이 하자"', result: '서아가 웃으며 놀이에 들어왔어요.', ending: '흩어지지 않고 남아 서아를 끼워 줬어요.', next: {
                  text: '흩어진 친구들이 멀리서 쳐다봐요.', choices: [
                    { id: 'call', text: '"너희도 와, 같이 하자" 부른다', result: '친구 몇 명이 다시 왔어요.', impact: [{ who: '서아와 친구들', text: '함께 놀아요', tone: 1 }], ending: '끼워 주는 말로 모두를 다시 모았어요.' },
                    { id: 'leave', text: '나도 그쪽으로 간다', result: '서아만 혼자 남았어요.', impact: [{ who: '서아', text: '버려진 것 같아요', tone: -1 }], why: '나까지 가면 서아가 혼자 남아요.' },
                    { id: 'mock', text: '흩어진 친구들을 흉본다', result: '다른 다툼이 생겼어요.', impact: [{ who: '모두', text: '서먹해요', tone: -1 }], why: '흉보기 대신 같이 하자고 불러요.' },
                  ] } },
                { id: 'follow', text: '나도 같이 흩어진다', result: '서아가 혼자 서 있었어요.', impact: [{ who: '서아', text: '외로워요', tone: -1 }], why: '함께 흩어지면 은근한 따돌림에 끼는 거예요.' },
                { id: 'watch', text: '멀리서 지켜본다', result: '서아는 다른 데로 갔어요.', impact: [{ who: '서아', text: '혼자예요', tone: -1 }], why: '보고만 있으면 따돌림이 계속돼요.' },
              ] }, [['stay', 'call']],
            { third: { text: '한 주 뒤, 흩어지던 친구 하나가 서아에게 먼저 "같이 할래?" 해요.', choices: [
              { id: 'welcome', text: '"좋아, 셋이 하자"', result: '셋이 함께 놀았어요.', impact: [{ who: '모두', text: '편해졌어요', tone: 1 }], ending: '먼저 끼워 준 행동이 반에 퍼졌어요.' },
              { id: 'grudge', text: '"너 전에 피했잖아"', result: '그 친구가 머쓱해서 돌아갔어요.', impact: [{ who: '그 친구', text: '바뀌기 어려워요', tone: -1 }], why: '바뀐 행동은 반갑게 받아 줘요.' },
              { id: 'pass', text: '대답 없이 논다', result: '어색함이 남았어요.', impact: [{ who: '모두', text: '어색해요', tone: 0 }] },
            ] }, pick: 'welcome' }, 0.25),
            DIL('대화방에서 한 친구 말에만 답이 없어요.', {
              text: '모둠 대화방에서 하람이가 말하면 아무도 답하지 않고, 다른 친구 말에는 바로 답해요.', motif: 'house',
              choices: [
                { id: 'reply', text: '하람이 말에 "좋은 생각이야" 답한다', result: '하람이가 이어서 의견을 냈어요.', ending: '답 한 줄이 하람이를 대화에 끼워 줬어요.', next: {
                  text: '한 친구가 따로 "왜 답해? 우리끼리 무시하기로 했잖아" 해요.', choices: [
                    { id: 'no', text: '"무시는 따돌림이야. 나는 안 할래"', result: '그 친구가 "그런가…" 했어요.', impact: [{ who: '하람이', text: '대화에 함께해요', tone: 1 }], ending: '"나는 안 할래"로 은근한 따돌림을 끊었어요.' },
                    { id: 'yes', text: '"알겠어" 하고 답을 멈춘다', result: '하람이가 대화방에서 말이 없어졌어요.', impact: [{ who: '하람이', text: '외로워요', tone: -1 }], why: '짜고 무시하는 것은 따돌림이에요.' },
                    { id: 'expose', text: '그 메시지를 대화방에 올린다', result: '대화방이 시끄러워졌어요.', impact: [{ who: '모두', text: '다툼이 생겼어요', tone: -1 }], why: '공개하기보다 "안 할래"라고 말하고, 계속되면 어른께 알려요.' },
                  ] } },
                { id: 'silent', text: '나도 답하지 않는다', result: '하람이가 "다들 바빠?" 하고 혼자 썼어요.', impact: [{ who: '하람이', text: '서운해요', tone: -1 }], why: '함께 답하지 않으면 은근한 따돌림이에요.' },
                { id: 'later', text: '나중에 따로 답한다', result: '대화방에선 여전히 하람이만 답을 못 받았어요.', impact: [{ who: '하람이', text: '여전히 외로워요', tone: 0 }], why: '모두가 보는 곳에서 답하면 더 힘이 돼요.' },
              ] }, [['reply', 'no']],
            { third: { text: '한 주 뒤에도 몇몇이 하람이 말만 계속 무시해요.', choices: [
              { id: 'adult', text: '하람이와 함께 선생님께 알린다', result: '선생님이 모둠 대화 약속을 다시 정하셨어요.', impact: [{ who: '하람이', text: '보호받아요', tone: 1 }], ending: '되풀이되는 은근한 따돌림은 어른께 알려요.' },
              { id: 'tired', text: '"나도 지쳤어" 하고 그만둔다', result: '하람이는 다시 혼자가 됐어요.', impact: [{ who: '하람이', text: '외로워요', tone: -1 }], why: '혼자 지칠 때는 어른과 함께해요.' },
              { id: 'scold', text: '무시하는 친구들을 대화방에서 혼낸다', result: '말다툼이 커졌어요.', impact: [{ who: '모두', text: '서먹해요', tone: -1 }], why: '혼내기보다 어른께 알려 함께 바로잡아요.' },
            ] }, pick: 'adult' }, 0.3, { conclude: '한숨·흩어지기·무시처럼 은근한 따돌림도 따돌림이에요. 인사하고, 끼워 주고, 계속되면 어른께 알려요.' }),
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 끼워 주는 말을 써요.', text: '짝이 된 친구에게 "___, 잘 부탁해."', answer: '(친구 이름)야' }] },
        notes: FICTION,
      }),
      C({
        id: 'bully.e34.g4-subtle-exclusion.activity.include-plan', type: 'activity', title: '끼워 주는 말 차례 연습',
        method: '끼워 주는 말 차례 연습', tool: 'timer', minutes: 26,
        levels: { easy: '문항마다 차례 카드 2장(이름 부르기 → 같이 하자)을 놓는다.', base: '문항마다 차례 카드 3장(이름 → 같이 하자 → 역할 나누기)을 놓고, 넷째 문항에서 짝과 따라 말한다.', challenge: '셋째 문항(거절당했을 때 다시 해 볼 말 차례)까지 놓고 짝과 상황마다 따라 말한다.' },
        activity: {
          title: '끼워 주는 말 차례 연습', tool: 'timer',
          teacher: '"끼워 줄 때 맨 먼저 무엇을 할까요? 이름을 불러 주면 그 친구 마음은요?" 카드를 놓은 뒤 짝과 실제로 따라 말하게 한다. "거절당하면 창피해요"라는 학생에게 "거절은 그 친구 마음이고, 다시 물어볼 기회는 또 있어요"라고 말해 준다. 연습에서는 서로의 진짜 이름 대신 장면 속 이름을 쓴다.',
          task: '끼워 주는 말 카드를 하는 차례대로 놓고, 짝과 따라 말해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '놀이에 끼워 줄 때 말 차례를 놓아요.', toolOptions: { title: '놀이에 끼워 주기', cards: ['"술래 해 볼래?"', '"시우야!" 부르기', '"같이 하자"'] }, target: { order: ['"시우야!" 부르기', '"같이 하자"', '"술래 해 볼래?"'] }, difficulty: 0.15,
              levels: { easy: { prompt: '놀이에 끼워 줄 때 말 차례를 놓아요(2장).', toolOptions: { cards: ['"같이 하자"', '"시우야!" 부르기'] }, target: { order: ['"시우야!" 부르기', '"같이 하자"'] } } } },
            { prompt: '모둠 활동에 끼워 줄 때 말 차례를 놓아요.', toolOptions: { title: '모둠에 끼워 주기', cards: ['"색칠 맡아 줄래?"', '"같이 만들자"', '"하람아" 부르기'] }, target: { order: ['"하람아" 부르기', '"같이 만들자"', '"색칠 맡아 줄래?"'] }, difficulty: 0.2,
              levels: { easy: { prompt: '모둠 활동에 끼워 줄 때 말 차례를 놓아요(2장).', toolOptions: { cards: ['"같이 만들자"', '"하람아" 부르기'] }, target: { order: ['"하람아" 부르기', '"같이 만들자"'] } } } },
            { prompt: '"싫어"라고 거절당했을 때 다시 해 볼 차례를 놓아요.', toolOptions: { title: '거절당했을 때', cards: ['다음 놀이 때 또 묻기', '"그래, 알겠어"', '잠깐 기다리기'] }, target: { order: ['"그래, 알겠어"', '잠깐 기다리기', '다음 놀이 때 또 묻기'] }, difficulty: 0.25,
              levels: { easy: { prompt: '거절당했을 때 다시 해 볼 차례를 놓아요(2장).', toolOptions: { cards: ['다음 놀이 때 또 묻기', '"그래, 알겠어"'] }, target: { order: ['"그래, 알겠어"', '다음 놀이 때 또 묻기'] } } } },
            { prompt: '짝과 장면 하나를 골라 끼워 주는 말을 차례대로 따라 말해요.', free: true, toolOptions: { title: '짝 연습', doneLabel: '짝과 끼워 주는 말을 해 보았어요' },
              conclude: '이름 부르기 → "같이 하자" → 역할 나누기. 거절당해도 "알겠어" 하고 다음에 또 물어요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '끼워 주는 말 차례를 써요.', columns: ['차례', '할 말'], cells: [['1', '이름 부르기'], ['2', ''], ['3', '역할 나누기']], answer: '"같이 하자"' }, { type: 'short', prompt: '거절당했을 때 내가 할 말을 한 줄로 써요.' }] },
        notes: '연습에서는 장면 속 이름(시우·하람)만 쓴다. 실제로 반에서 혼자 있는 친구를 짚어 연습 상대로 삼지 않는다.',
      }),
      C({
        id: 'bully.e34.g4-subtle-exclusion.wrap.include-words', type: 'wrap', title: '끼워 주는 말 카드',
        method: '끼워 주는 말 카드', tool: 'wordcards', minutes: 6,
        levels: { easy: '카드 4장 가운데 끼워 주는 말 2장을 고른다.', base: '카드 6장 가운데 끼워 주는 말 3장을 고른다.', challenge: '카드 8장 가운데 끼워 주는 말을 고르고, 내 말 하나를 더 만들어 출구 2번에 쓴다.' },
        wrap: {
          teacher: '"어떤 말이 친구를 끼워 줄까요?" 카드를 고른 뒤 고른 말을 짝에게 소리 내어 해 보게 한다. "혼자가 편하지?"를 고른 학생에게 "그 말을 들으면 끼고 싶을까요, 빠지고 싶을까요?"라고 되묻는다.',
          exitTicket: [
            EX('wordcards', PICK('친구를 끼워 주는 말을 골라요.', { basket: '끼워 주는 말' }, [{ id: 'with', text: '같이 할래?', ok: true }, { id: 'full', text: '자리 다 찼어' }, { id: 'idea', text: '네 생각은 어때?', ok: true }, { id: 'later', text: '넌 다음에' }, { id: 'seat', text: '여기 자리 있어', ok: true }, { id: 'us', text: '우리끼리 할게' }], ['with', 'full', 'idea', 'later'], [{ id: 'sit', text: '같이 앉을래?', ok: true }, { id: 'alone', text: '혼자가 편하지?' }], 0.15)),
            { type: 'short', prompt: '친구를 끼워 주는 내 말을 하나 만들어 써요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '끼워 주는 말',
          items: [
            { type: 'check', prompt: '끼워 주는 말에 표시해요.', options: ['같이 할래?', '네 생각은 어때?', '우리끼리 할게', '여기 자리 있어'] },
            { type: 'short', prompt: '내일 쓰고 싶은 끼워 주는 말을 써요.' },
          ],
          easy: { note: '"같이 할래?"를 떠올려요.', items: [{ type: 'choice', prompt: '끼워 주는 말은?', options: ['같이 할래?', '넌 빠져'], answer: '같이 할래?' }] },
        },
      }),
      C({
        id: 'bully.e34.g4-subtle-exclusion.wrap.include-collage', type: 'wrap', title: '모두의 둥근 원 꾸미기',
        method: '모두의 둥근 원 꾸미기', tool: 'collage', minutes: 6,
        levels: { easy: '큰 동그라미 하나와 친구 조각을 붙여 조각 4개 이상을 만든다.', base: '큰 동그라미 안에 서로 다른 친구 조각을 붙여 조각 6개 이상을 만든다.', challenge: '조각 6개 이상을 붙이고, 원 밖 조각을 안으로 옮기며 할 말을 정해 점검 4칸에 표시한다.' },
        wrap: {
          teacher: '"큰 동그라미는 우리 반이에요. 빈틈없이 모두를 안에 넣어 볼까요?" 서로 다른 모양·색 조각을 원 안에 붙이게 하고, 원 밖에 하나를 두었다가 옮기며 "같이 하자"를 말하게 한다. "자리가 모자라요"라는 말이 나오면 "조금씩 당기면 한 명 더 들어올 자리가 생길까요?"라고 묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'collage', options: { shapes: ['circle', 'heart', 'star', 'leaf', 'triangle'], maxPieces: 14 }, prompt: '큰 동그라미 안에 친구 조각을 빈틈없이 붙여 "모두의 원"을 만들어요.', target: { has: [{ shape: 'circle', size: 'l', min: 1 }], selfCheck: ['큰 원을 놓았어요', '다른 조각을 넣었어요', '짝과 함께 보았어요'], minPieces: 6 }, difficulty: 0.1,
              levels: { easy: { target: { has: [{ shape: 'circle', size: 'l', min: 1 }], selfCheck: ['큰 원을 놓았어요', '짝과 함께 보았어요'], minPieces: 4 } }, challenge: { target: { has: [{ shape: 'circle', size: 'l', min: 1 }], selfCheck: ['큰 원을 놓았어요', '다른 조각을 넣었어요', '짝과 함께 보았어요', '옮기며 할 말을 정했어요'], minPieces: 6 } } } },
            { type: 'choice', prompt: '"안 노는 건 내 자유"라며 여럿이 한 명만 계속 빼면?', options: ['자유라 괜찮아요', '따돌림이 돼요'], answer: 1, difficulty: 0.15, explain: '누구와 놀지는 고를 수 있지만, 여럿이 한 명을 계속 빼면 따돌림이에요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '모두의 원',
          items: [
            { type: 'short', prompt: '원 밖에 있는 친구를 안으로 부를 때 할 말을 써요.' },
            { type: 'draw', prompt: '우리 반 "모두의 원"을 그려요.' },
          ],
        },
      }),
    );
  }

  // ======================================================================================================
  // 4학년 · 게임 채팅의 욕설·강퇴·몰아가기 (사이버폭력 예방 — research-mandatory §1 지침 3차시 이상)
  // ======================================================================================================
  {
    const C = T('g4-game-chat', 4);
    const PLAY = [['30분', 1], ['1시간', 2], ['2시간', 5], ['3시간', 7]];
    M.push(
      C({
        id: 'bully.e34.g4-game-chat.intro.chat-log-read', type: 'intro', title: '게임 채팅 기록 읽고 마음 짐작',
        method: '게임 채팅 기록 읽고 마음 짐작', tool: 'emotion', minutes: 6,
        levels: { easy: '채팅 기록 3줄을 함께 읽고 몰린 친구 칸에 마음 카드를 놓는다.', base: '기록 5줄을 읽고 몰린 친구의 마음을 놓고 까닭을 말한다.', challenge: '"찬성"을 누른 친구들의 마음도 짐작해 칸에 놓고 두 마음을 견준다.' },
        intro: {
          teacher: '"팀 게임 채팅 기록이에요. \'너 때문에 짐\', \'강퇴하자\', \'ㅋㅋ 찬성\'… 다온이는 어떤 마음일까요?" 기록을 한 줄씩 읽고 시연 단추로 마음 카드가 놓이는 것을 보인다(기다릴 반응: "억울해요", "창피해요"). "게임은 원래 다 그래요"라는 말이 나오면 "화면 너머 다온이 마음도 원래 괜찮을까요?"라고 되묻는다. 게임 이름은 말하지 않고 "팀 게임"이라고만 한다.',
          student: '팀 게임 채팅 기록을 읽고 몰린 다온이의 마음 카드를 골라요. 왜 그런 마음일까요?',
          demo: { tool: 'emotion', options: { mode: 'match', slots: [{ id: 'target', label: '채팅에서 몰린 다온이' }, { id: 'yes', label: '"찬성" 누른 친구들' }], cards: ['억울함', '창피함', '신남', '걱정', '편안함', '미안함'], shuffle: false }, sequence: [{ match: { target: '억울함' } }, { match: { target: '억울함', yes: '걱정' } }] },
          art: { draw: 'a paper game screen with a chat box full of short paper speech bubbles, one paper child in front of the screen with slumped shoulders', banner: '채팅 너머의 마음', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: FICTION + ' 실제 게임 이름은 쓰지 않는다. 학생에게 자기 게임 채팅을 보여 달라고 하지 않는다.',
      }),
      C({
        id: 'bully.e34.g4-game-chat.intro.game-time-chart', type: 'intro', title: '게임 시간과 다툼 그래프',
        method: '게임 시간과 다툼 그래프 읽기', tool: 'chart', minutes: 6,
        levels: { easy: '두 막대(30분·3시간)를 함께 견준다.', base: '네 막대를 읽고 가장 많이 다툰 구간을 고른다.', challenge: '가장 많이 다툰 구간을 찾고 까닭(지침·예민해짐)을 짐작해 말한다.' },
        intro: {
          teacher: '"가상의 반 친구 이야기를 모은 자료예요. 게임을 오래 한 날, 다툰 횟수는 어땠나요?" 시연 단추로 3시간 막대가 골라지는 것을 보인다. "게임이 나쁜 거예요?"라는 말이 나오면 "게임이 나쁘다는 게 아니라, 오래 하면 지치고 예민해질 수 있어요. 그래서 쉬는 시간이 필요해요"라고 말해 준다. 자료는 가상이고 실제 통계가 아니라고 밝힌다.',
          student: '가상의 그래프를 읽고, 게임 중간에 쉬는 시간이 왜 필요한지 짝과 말해 보아요.',
          demo: { tool: 'chart', options: { type: 'bar', mode: 'read', title: '게임 시간과 다툰 횟수(가상의 반 이야기)', unit: '번', xLabel: '게임 시간', yLabel: '다툰 횟수', data: PLAY, max: 8, scale: 1, showValues: true, question: '가장 많이 다툰 구간은?', choices: PLAY.map((x) => x[0]) }, sequence: [{ pick: 3 }] },
          art: { draw: 'a paper bar chart with four growing bars, a small paper game controller and a paper clock beside it', banner: '쉬어 가며 해요', extra: [{ motif: 'sun', x: 300, y: 96 }] },
        },
        notes: '그래프는 가상 자료이고 게임 시간이 다툼의 원인이라는 통계가 아니다. 학생의 실제 게임 시간을 묻거나 비교하지 않는다.',
      }),
      C({
        id: 'bully.e34.g4-game-chat.activity.game-sort', type: 'activity', title: '멋진 플레이/사이버폭력 나누기',
        method: '멋진 플레이/사이버폭력 나누기', tool: 'sortboard', minutes: 14,
        levels: { easy: '판마다 카드 4장, 놓으면 바로 맞는지 알려 주고 바구니마다 든 장 수가 보인다.', base: '판마다 카드 6장(채팅·팀·실수했을 때)을 두 바구니에 나눈다.', challenge: '판마다 카드 2장이 더해지고, "농담처럼 쓴 욕"을 어디에 둘지 짝과 토의한다(교사 진행).' },
        activity: {
          title: '멋진 플레이/사이버폭력 나누기', tool: 'sortboard',
          teacher: '"이 채팅을 받은 친구는 다음 판도 하고 싶을까요?" 카드를 놓을 때마다 까닭을 말하게 한다. "강퇴는 게임 규칙이에요"라는 학생에게 "규칙대로 한 번 나가는 것과, 한 명만 계속 몰아서 내보내는 것은 같을까요?"라고 묻는다. 도전 단계의 "농담처럼 쓴 욕"은 쓰는 사람이 농담이어도 받는 사람에게는 욕이라는 것을 짚는다.',
          task: '게임 채팅·행동 카드를 "멋진 플레이"와 "사이버폭력" 바구니에 나누어요.', levels: BOARD_LV,
          items: [
            SORT('게임 채팅을 두 바구니에 나누어요.', {}, ['멋진 플레이', '사이버폭력'],
              [['"잘했다!" 응원', '"괜찮아, 다음 판"', '"고마워, 살렸어"'], ['실수하면 욕하기', '"너 때문에 졌어" 도배', '외모 놀림 채팅']], 2, [['"좋은 게임이었어"'], ['농담처럼 쓴 욕']], 0.15),
            SORT('팀 행동을 두 바구니에 나누어요.', {}, ['멋진 플레이', '사이버폭력'],
              [['같이 작전 짜기', '처음 온 친구 도와주기', '돌아가며 역할 바꾸기'], ['한 명만 계속 강퇴', '"쟤 받지 마" 몰아가기', '일부러 한 명 버리기']], 2, [['진 팀에 "수고했어"'], ['팀 방에서 한 명 몰래 빼기']], 0.2),
            SORT('친구가 실수했을 때 행동을 나누어요.', {}, ['멋진 플레이', '사이버폭력'],
              [['"괜찮아" 말하기', '방법 알려 주기', '쉬었다 다시 하기'], ['실수 화면 캡처해 퍼뜨리기', '별명 붙여 놀리기', '강퇴 투표 열기']], 2, [['다음 판에 먼저 부르기'], ['따라다니며 계속 공격']], 0.25,
              { conclude: '게임에서도 욕·강퇴 몰이·몰아가기는 사이버폭력이에요. 응원과 작전이 멋진 플레이예요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '"게임은 원래 다 욕해"라는 말은?', options: ['맞아요, 괜찮아요', '아니에요, 게임에서도 욕은 상처가 돼요'], answer: '아니에요, 게임에서도 욕은 상처가 돼요' }] },
        notes: FICTION,
      }),
      C({
        id: 'bully.e34.g4-game-chat.activity.respond-order', type: 'activity', title: '놀림을 만났을 때 대처 차례',
        method: '놀림을 만났을 때 대처 차례', tool: 'timeline', minutes: 14,
        levels: { easy: '카드 3장을 차례대로 놓고, 놓으면 바로 맞는지 알려 준다.', base: '카드 4장(멈추기 → 화면 남기기 → 차단하기 → 어른께 보여 주기)을 놓는다.', challenge: '맞대응 카드 한 장을 빼고 4장을 놓고, 그 카드가 왜 빠져야 하는지 짝에게 말한다.' },
        activity: {
          title: '놀림을 만났을 때 대처 차례', tool: 'timeline',
          teacher: '"게임 채팅에서 욕을 들었어요. 맨 먼저 할 일은요?" 카드를 다 놓으면 차례대로 소리 내어 읽는다. "똑같이 욕해 줘야 안 당해요"라는 말이 나오면 "맞대응하면 채팅이 멈출까요, 커질까요? 그리고 내 화면에는 나도 욕한 기록이 남아요"라고 말해 준다. 화면 남기기는 어른께 보여 드리기 위한 것이고 다른 데 퍼뜨리지 않는다는 것을 짚는다.',
          task: '게임에서 놀림·욕·몰아가기를 만났을 때 할 일 카드를 차례대로 놓아요.', levels: CARD_LV,
          items: [
            ORD('채팅으로 욕을 들었을 때 차례로 놓아요.', { axis: ['먼저', '나중'] }, [{ id: 'stop', text: '게임을 멈춰요' }, { id: 'shot', text: '채팅 화면 남겨요' }, { id: 'block', text: '그 사람 차단해요' }, { id: 'show', text: '어른께 보여 드려요' }], [0, 1, 3], { id: 'back', text: '똑같이 욕해요', why: '맞대응하면 다툼이 커지고 나도 폭력을 하게 돼요.' }, 0.15),
            ORD('강퇴 몰이를 당했을 때 차례로 놓아요.', { axis: ['먼저', '나중'] }, [{ id: 'stop', text: '방에서 나와요' }, { id: 'shot', text: '투표 화면 남겨요' }, { id: 'block', text: '몰아간 사람 차단' }, { id: 'show', text: '보호자께 보여 드려요' }], [0, 2, 3], { id: 'new', text: '새 계정으로 다시 가요', why: '다시 가서 맞서면 몰아가기가 더 커질 수 있어요.' }, 0.2),
            ORD('친구가 몰리는 걸 봤을 때 차례로 놓아요.', { axis: ['먼저', '나중'] }, [{ id: 'no', text: '"그만하자" 채팅' }, { id: 'shot', text: '채팅 화면 남겨요' }, { id: 'msg', text: '친구에게 위로해요' }, { id: 'show', text: '선생님께 보여 드려요' }], [0, 1, 3], { id: 'join', text: '같이 "찬성" 눌러요', why: '찬성 하나로 친구가 쫓겨나요.' }, 0.25,
              { conclude: '멈추기 → 화면 남기기 → 차단하기 → 어른께 보여 주기. 맞대응은 하지 않아요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '게임에서 욕을 들으면 맞대응해야 할까요?', options: ['네, 똑같이 해요', '아니요, 멈추고 남기고 알려요'], answer: '아니요, 멈추고 남기고 알려요' }] },
        notes: '"화면 남기기"는 어른께 보여 드리기 위한 것이다. 남긴 화면을 대화방이나 다른 친구에게 퍼뜨리지 않는다고 함께 말해 준다.',
      }),
      C({
        id: 'bully.e34.g4-game-chat.activity.team-dilemma', type: 'activity', title: '갈림길: 팀이 몰아갈 때',
        method: '갈림길: 우리 팀이 한 명을 몰아갈 때', tool: 'dilemma', minutes: 26,
        levels: { easy: '갈림 1번, 보기 2개 가운데 고르고 결과를 본다.', base: '갈림 2번, 보기 3개씩 고르며 결과를 따라간다(장면 셋).', challenge: '갈림 3번 — 바른 길 끝에 다음 날 학교 장면이 이어진다.' },
        activity: {
          title: '갈림길: 팀이 몰아갈 때', tool: 'dilemma',
          teacher: '"찬성을 누르면 화면 너머 친구는 어떻게 될까요? 다음 날 학교에서 그 친구를 만나면요?" 결과 장면을 소리 내어 읽고 다음 장면에서 다시 고른다. "게임에서 일어난 일은 게임 일이에요"라는 말이 나오면 "다음 날 교실에서 그 친구 표정은 어떨까요?"라고 되묻는다. 반대한 친구, 멈추고 어른께 말한 친구는 잘한 것이라고 꼭 말한다.',
          task: '팀 게임 장면을 읽고 보기를 골라요. 결과를 보고 다음 장면에서 또 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL('우리 팀이 실수한 친구를 강퇴하자고 해요.', {
              text: '팀 게임에서 다온이가 실수하자 팀 채팅에 "강퇴하자, 찬성?"이 올라왔어요.', motif: 'house',
              choices: [
                { id: 'yes', text: '"찬성" 누른다', result: '다온이가 게임에서 쫓겨났어요.', impact: [{ who: '다온이', text: '창피하고 외로워요', tone: -1 }], why: '찬성 하나가 몰아가기를 완성해요.' },
                { id: 'no', text: '반대하고 "다시 하자" 한다', result: '찬성이 멈추고 몇몇이 "그래" 했어요.', ending: '반대 한 줄로 강퇴 몰이를 막았어요.', next: {
                  text: '한 팀원이 다온이에게 계속 욕을 보내요.', choices: [
                    { id: 'adult', text: '게임을 멈추고 화면을 어른께 보여 드린다', result: '보호자가 함께 차단과 신고를 도와주셨어요.', impact: [{ who: '다온이', text: '보호받아요', tone: 1 }], ending: '멈추고 알려서 욕이 끝났어요.' },
                    { id: 'curse', text: '그 팀원에게 똑같이 욕한다', result: '채팅이 욕으로 가득 찼어요.', impact: [{ who: '모두', text: '상처받았어요', tone: -1 }], why: '맞대응하면 폭력이 커져요.' },
                    { id: 'ignore', text: '못 본 척 계속 게임한다', result: '다온이가 게임을 나갔어요.', impact: [{ who: '다온이', text: '혼자 참아요', tone: -1 }], why: '욕이 계속되면 멈추고 어른께 알려요.' },
                  ] } },
                { id: 'stop', text: '게임을 멈추고 어른께 말한다', result: '보호자가 채팅 기록을 보고 함께 신고하셨어요.', impact: [{ who: '다온이', text: '보호받아요', tone: 1 }], ending: '바로 멈추고 알렸어요. 잘한 일이에요.' },
              ] }, [['no', 'adult'], ['stop']],
            { third: { text: '다음 날 학교에서 다온이가 혼자 앉아 있어요.', choices: [
              { id: 'near', text: '"어제 같이 못 해서 아쉬웠어. 오늘 같이 하자"', result: '다온이가 웃었어요.', impact: [{ who: '다온이', text: '다시 함께해요', tone: 1 }], ending: '게임 밖에서도 곁에 있었어요.' },
              { id: 'tease', text: '"어제 강퇴당했지?" 놀린다', result: '반 친구들이 다온이를 쳐다봤어요.', impact: [{ who: '다온이', text: '교실에서도 창피해요', tone: -1 }], why: '게임 일을 교실까지 끌고 와 놀리지 않아요.' },
              { id: 'skip', text: '모른 척한다', result: '다온이는 계속 혼자였어요.', impact: [{ who: '다온이', text: '외로워요', tone: 0 }] },
            ] }, pick: 'near' }, 0.2),
            DIL('처음 온 친구에게 "초보 꺼져"가 쏟아져요.', {
              text: '우리 팀에 처음 온 서아가 길을 헤매자 팀원들이 "초보 꺼져"를 줄줄이 써요.', motif: 'star',
              choices: [
                { id: 'join', text: '나도 "꺼져"를 쓴다', result: '서아가 아무 말 없이 나갔어요.', impact: [{ who: '서아', text: '게임이 무서워요', tone: -1 }], why: '여럿이 쓰는 욕은 몰아가기예요.' },
                { id: 'help', text: '"처음이잖아, 내가 알려 줄게" 쓴다', result: '서아가 "고마워" 하고 따라왔어요.', ending: '알려 주는 한 줄이 서아를 지켰어요.', next: {
                  text: '팀원 하나가 "너도 초보 편드냐" 하며 나도 욕해요.', choices: [
                    { id: 'block', text: '화면을 남기고 차단한 뒤 어른께 보여 드린다', result: '보호자가 함께 신고를 도와주셨어요.', impact: [{ who: '서아와 나', text: '안전해요', tone: 1 }], ending: '남기고, 차단하고, 알렸어요.' },
                    { id: 'fight', text: '"너나 꺼져" 맞받아친다', result: '욕 싸움이 이어졌어요.', impact: [{ who: '나', text: '더 화가 나요', tone: -1 }], why: '맞대응 대신 멈추고 알려요.' },
                    { id: 'quit', text: '서아를 두고 나간다', result: '서아는 혼자 남았어요.', impact: [{ who: '서아', text: '외로워요', tone: -1 }], why: '나갈 때 서아에게도 "같이 나가자"를 말해요.' },
                  ] } },
                { id: 'quiet', text: '못 본 척한다', result: '욕이 계속 쏟아졌어요.', impact: [{ who: '서아', text: '창피해요', tone: -1 }], why: '보고만 있으면 몰아가기가 계속돼요.' },
              ] }, [['help', 'block']],
            { third: { text: '다음 날 서아가 "나 게임 그만둘까?" 하고 물어요.', choices: [
              { id: 'with', text: '"우리 반 친구들이랑 같이 하자"', result: '서아가 반 친구들과 다시 게임을 즐겼어요.', impact: [{ who: '서아', text: '즐거워요', tone: 1 }], ending: '안전한 팀을 함께 찾아 주었어요.' },
              { id: 'yes', text: '"응, 그만두는 게 낫겠다"', result: '서아는 혼자 게임을 접었어요.', impact: [{ who: '서아', text: '서운해요', tone: -1 }], why: '멈출 쪽은 욕한 행동이지 서아가 아니에요.' },
              { id: 'joke', text: '"초보라 그래"', result: '서아가 더 속상해했어요.', impact: [{ who: '서아', text: '자신이 없어요', tone: -1 }], why: '서아 탓으로 돌리지 않아요.' },
            ] }, pick: 'with' }, 0.25),
            DIL('친구 실수 화면을 캡처해 퍼뜨리자고 해요.', {
              text: '팀원이 이안이 실수 장면을 캡처해 "이안 바보 장면ㅋ"으로 반 대화방에 올리자고 해요.', motif: 'cloud',
              choices: [
                { id: 'no', text: '"올리지 말자, 이안이가 싫어할 거야"', result: '팀원이 "그냥 웃기잖아" 해요.', ending: '올리지 말자고 말했어요.', next: {
                  text: '팀원이 결국 캡처를 반 대화방에 올렸어요.', choices: [
                    { id: 'tell', text: '선생님께 알려 내리게 한다', result: '선생님이 글을 내리게 하고 반과 이야기하셨어요.', impact: [{ who: '이안이', text: '안심했어요', tone: 1 }], ending: '알려서 퍼지는 것을 멈췄어요.' },
                    { id: 'laugh', text: '"ㅋㅋ"를 단다', result: '캡처가 더 많이 퍼졌어요.', impact: [{ who: '이안이', text: '반 전체가 웃는 것 같아요', tone: -1 }], why: '웃음 하나도 놀림을 퍼뜨려요.' },
                    { id: 'skip', text: '모른 척한다', result: '캡처가 다음 날까지 남았어요.', impact: [{ who: '이안이', text: '창피해요', tone: -1 }], why: '올라간 것을 보면 어른께 알려요.' },
                  ] } },
                { id: 'ok', text: '"좋아, 올려"', result: '반 전체가 이안이 실수를 봤어요.', impact: [{ who: '이안이', text: '학교 가기 싫어요', tone: -1 }], why: '실수를 퍼뜨리면 사이버폭력이에요.' },
                { id: 'self', text: '내가 먼저 올린다', result: '이안이가 나에게 크게 실망했어요.', impact: [{ who: '이안이', text: '배신감이 들어요', tone: -1 }], why: '친구 실수를 웃음거리로 만들지 않아요.' },
              ] }, [['no', 'tell']],
            { third: { text: '다음 날 이안이가 "누가 올렸어?" 하고 화를 내요.', choices: [
              { id: 'calm', text: '"선생님이 내려 주셨어. 같이 이야기해 보자"', result: '이안이가 숨을 고르고 선생님께 갔어요.', impact: [{ who: '이안이', text: '마음이 가라앉았어요', tone: 1 }], ending: '친구 마음을 살피고 어른과 함께 풀었어요.' },
              { id: 'blame', text: '"쟤가 올렸어, 혼내 줘"', result: '교실에서 큰 다툼이 났어요.', impact: [{ who: '모두', text: '다툼이 커졌어요', tone: -1 }], why: '편 가르기보다 어른과 함께 바로잡아요.' },
              { id: 'shrug', text: '"몰라"', result: '이안이는 혼자 화를 삭였어요.', impact: [{ who: '이안이', text: '답답해요', tone: 0 }] },
            ] }, pick: 'calm' }, 0.3, { conclude: '게임에서 한 명을 몰아가면 "찬성" 대신 반대하고, 멈추고, 화면을 어른께 보여 드려요. 게임 일은 다음 날 교실에도 이어져요.' }),
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '팀이 한 명을 강퇴하자고 하면 "찬성" 대신 ___ 해요.', answer: '반대' }, { type: 'choice', prompt: '게임에서 한 명을 몰아갈 때 할 일은?', options: ['찬성 누르기', '반대하고 어른께 알리기'], answer: '반대하고 어른께 알리기' }] },
        notes: FICTION,
      }),
      C({
        id: 'bully.e34.g4-game-chat.wrap.fair-badge', type: 'wrap', title: '"고운 말 게이머" 배지',
        method: '"고운 말 게이머" 배지', tool: 'collage', minutes: 6,
        levels: { easy: '별·방패·말풍선 조각 3개 이상을 붙인다.', base: '조각 5개 이상을 붙이고 게임 고운 말 하나를 정한다.', challenge: '조각 5개 이상을 붙이고 팀 응원 구호까지 정해 점검 4칸에 표시한다.' },
        wrap: {
          teacher: '"게임에서 쓰는 고운 말 하나를 배지에 넣는다면?" 별(멋진 플레이)·마름모(방패)·동그라미(말풍선) 조각을 붙이며 고운 말을 정하게 한다(예: "괜찮아, 다음 판"). 출구 2번에서 "강퇴는 게임 규칙"을 고른 학생에게 "한 명만 계속 내보내는 것도 규칙일까요?"라고 되묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'collage', options: { shapes: ['star', 'diamond', 'circle', 'heart', 'rect'], maxPieces: 12 }, prompt: '별·방패·말풍선 조각으로 "고운 말 게이머" 배지를 꾸며요.', target: { has: [{ shape: 'star', min: 1 }], selfCheck: ['별 조각을 붙였어요', '고운 말을 정했어요', '짝과 함께 보았어요'], minPieces: 5 }, difficulty: 0.1,
              levels: { easy: { target: { has: [{ shape: 'star', min: 1 }], selfCheck: ['별 조각을 붙였어요', '짝과 함께 보았어요'], minPieces: 3 } }, challenge: { target: { has: [{ shape: 'star', min: 1 }], selfCheck: ['별 조각을 붙였어요', '고운 말을 정했어요', '짝과 함께 보았어요', '응원 구호를 정했어요'], minPieces: 5 } } } },
            { type: 'choice', prompt: '팀에서 한 명만 계속 강퇴하는 것은?', options: ['게임 규칙일 뿐이에요', '몰아가기, 사이버폭력이에요'], answer: 1, difficulty: 0.15, explain: '한 명을 계속 몰아서 내보내면 사이버폭력이에요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '고운 말 게이머',
          items: [
            { type: 'short', prompt: '게임에서 쓸 고운 말 하나를 써요.' },
            { type: 'draw', prompt: '"고운 말 게이머" 배지를 그려요.' },
          ],
        },
      }),
      C({
        id: 'bully.e34.g4-game-chat.wrap.game-check', type: 'wrap', title: '게임 약속 스스로 점검',
        method: '게임 약속 스스로 점검', tool: 'timer', minutes: 6,
        levels: { easy: '약속 2개(욕하지 않기·강퇴 몰이 안 하기)에 표시한다.', base: '약속 3개(+시간 지키기)에 표시한다.', challenge: '약속 4칸에 표시하고 지키기 어려운 약속에 방법을 붙여 출구 3번에 쓴다.' },
        wrap: {
          teacher: '"게임 약속을 하나씩 읽어 볼게요. 지킬 수 있는 것에 표시해요." 점검 칸을 함께 읽고 스스로 표시하게 한다. "시간 지키기는 어려워요"라는 학생에게 "어려운 약속에는 방법을 붙여요. 시계 알람? 끝나는 판을 미리 정하기?"라고 말해 준다.',
          exitTicket: [
            SELF('게임 약속 점검', ['욕하지 않아요', '강퇴 몰이를 안 해요', '정한 시간을 지켜요', '어려운 약속에 방법을 붙였어요'], '게임 약속을 읽고 지킬 수 있는 것에 표시해요.'),
            { type: 'choice', prompt: '게임 채팅에서 욕을 들으면 먼저?', options: ['똑같이 욕해요', '멈추고 화면을 남겨요', '참고 계속해요'], answer: 1, difficulty: 0.1, explain: '멈추고, 화면을 남기고, 차단하고, 어른께 보여 드려요.' },
            { type: 'short', prompt: '지키기 어려운 게임 약속과 지킬 방법을 써요.' },
          ],
        },
        worksheet: {
          title: '게임 약속 점검표',
          items: [
            { type: 'check', prompt: '내가 지킬 게임 약속에 표시해요.', options: ['욕하지 않아요', '강퇴 몰이를 안 해요', '정한 시간을 지켜요'] },
            { type: 'short', prompt: '팀 친구가 실수했을 때 쓸 말을 써요.' },
          ],
          easy: { note: '"괜찮아, 다음 판"을 떠올려요.', items: [{ type: 'choice', prompt: '친구가 실수하면?', options: ['"괜찮아"', '"너 때문이야"'], answer: '"괜찮아"' }] },
        },
      }),
    );
  }

  // ======================================================================================================
  // 4학년 · 댓글 하나의 무게, 친구 계정 몰래 쓰지 않기 (사이버폭력 예방 — research-mandatory §1 지침 3차시 이상)
  // ======================================================================================================
  {
    const C = T('g4-comment-account', 4);
    const COMMENTS = [['좋은 댓글', 9], ['웃음만 단 댓글', 3], ['나쁜 댓글', 1]];
    const THINK = [{ id: 'fact', text: '사실인가?' }, { id: 'read', text: '친구가 읽으면 어떨까?' }, { id: 'face', text: '얼굴 보고도 할 말인가?' }];
    M.push(
      C({
        id: 'bully.e34.g4-comment-account.intro.comment-feel', type: 'intro', title: '댓글을 읽은 친구의 마음',
        method: '댓글을 읽은 친구 마음', tool: 'emotion', minutes: 6,
        levels: { easy: '댓글 2개("멋지다"·"이게 그림?")에 친구 마음을 함께 놓는다.', base: '댓글 3개에 친구 마음 카드를 놓고 까닭을 말한다.', challenge: '나쁜 댓글 하나를 바꾸면 마음이 어떻게 될지 고르고 짝에게 말한다.' },
        intro: {
          teacher: '"서아가 그림 올리는 곳에 그림을 올렸어요. 댓글이 셋 달렸어요. 서아 마음은 댓글마다 어떨까요?" 시연 단추로 댓글마다 마음 카드가 놓이는 것을 보인다. "댓글은 금방 사라져요"라는 말이 나오면 "서아는 그 댓글을 몇 번이나 다시 볼 수 있을까요?"라고 되묻는다. 오늘은 댓글을 쓰기 전에 생각하는 법과 친구 계정을 지키는 법을 배운다고 밝힌다.',
          student: '그림에 달린 댓글 셋을 읽고 서아의 마음 카드를 골라요. 어느 댓글이 오래 남을까요?',
          demo: { tool: 'emotion', options: { mode: 'match', slots: [{ id: 'c1', label: '"멋지다!"' }, { id: 'c2', label: '"이게 그림?"' }, { id: 'c3', label: '"ㅋㅋㅋ" 만' }], cards: ['기쁨', '속상함', '걱정', '신남', '화남'], shuffle: false }, sequence: [{ match: { c1: '기쁨' } }, { match: { c1: '기쁨', c2: '속상함' } }, { match: { c1: '기쁨', c2: '속상함', c3: '걱정' } }] },
          art: { draw: 'a paper drawing pinned on a paper screen with three small paper comment cards under it, a paper child reading them with mixed feelings', banner: '댓글 하나의 무게', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: FICTION + ' 그림 올리는 곳·앱 이름은 쓰지 않는다.',
      }),
      C({
        id: 'bully.e34.g4-comment-account.intro.comment-count', type: 'intro', title: '나쁜 댓글 하나가 남기는 기억',
        method: '나쁜 댓글 하나가 남기는 기억 그래프', tool: 'chart', minutes: 6,
        levels: { easy: '두 막대(좋은 댓글 9·나쁜 댓글 1)를 함께 견준다.', base: '세 막대를 읽고 가장 많은 댓글을 고른 뒤, 어느 댓글이 오래 기억날지 짝과 말한다.', challenge: '나쁜 댓글이 한 개뿐인데 왜 크게 느껴지는지 말한다(교사 진행).' },
        intro: {
          teacher: '"서아 그림에 좋은 댓글 9개, 웃음만 단 댓글 3개, 나쁜 댓글 1개가 달렸어요. 가장 많은 댓글은요?" 시연 단추로 좋은 댓글 막대가 골라지는 것을 보인 뒤 "그런데 서아는 잠자기 전에 어느 댓글이 떠오를까요?"라고 묻는다(기다릴 반응: "나쁜 댓글이요"). "하나뿐인데 뭐 어때요"라는 말이 나오면 "하나여도 마음에 오래 남을 수 있어요"라고 말해 준다. 자료는 가상이라고 밝힌다.',
          student: '가상의 댓글 그래프를 읽고, 어떤 댓글이 더 오래 기억날지 짝과 이야기해 보아요.',
          demo: { tool: 'chart', options: { type: 'bar', mode: 'read', title: '서아 그림에 달린 댓글(가상)', unit: '개', xLabel: '댓글', yLabel: '개수', data: COMMENTS, max: 10, scale: 1, showValues: true, question: '가장 많은 댓글은?', choices: COMMENTS.map((x) => x[0]) }, sequence: [{ pick: 0 }] },
          art: { draw: 'a paper bar chart with one tall bar of small paper hearts and one tiny bar with a dark paper cloud, the dark cloud casting a long paper shadow', banner: '하나여도 오래 남아요', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '그래프는 가상 자료다.',
      }),
      C({
        id: 'bully.e34.g4-comment-account.activity.think-steps', type: 'activity', title: '댓글 전 세 질문',
        method: '댓글 쓰기 전 세 질문 차례', tool: 'timeline', minutes: 14,
        levels: { easy: '질문 카드 2장을 차례대로 놓고(놓으면 바로 알림), 예시 댓글 하나에 질문 2줄을 잇는다.', base: '질문 카드 3장을 놓고, 예시 댓글 둘에 세 질문의 답 카드를 잇는다.', challenge: '틀린 질문 카드를 빼고 3장을 놓고, 예시 댓글마다 남는 카드를 가려낸다.' },
        activity: {
          title: '댓글 전 세 질문', tool: 'timeline',
          teacher: '"댓글을 쓰기 전에 세 가지를 물어볼게요. 사실인가? 친구가 읽으면 어떨까? 얼굴 보고도 할 말인가?" 카드를 놓은 뒤 예시 댓글에 질문을 하나씩 대어 보게 한다. "\'더 웃기게 쓸까?\'도 물어봐야죠"라는 학생에게 "그 질문은 누구를 위한 걸까요? 읽는 친구를 위한 질문만 남겨요"라고 말해 준다.',
          task: '댓글 쓰기 전 세 질문 카드를 차례대로 놓고, 예시 댓글에 질문을 대어 보아요.', levels: CARD_LV,
          items: [
            ORD('댓글 쓰기 전 세 질문을 차례대로 놓아요.', { axis: ['먼저', '나중'] }, THINK, [0, 1], { id: 'funny', text: '더 웃기게 쓸까?', why: '읽는 친구가 아니라 쓰는 나만을 위한 질문이에요.' }, 0.15),
            MATCH('"이게 그림?" 댓글에 세 질문을 대어 이어요.', {}, [['사실인가?', '그림 맞아요'], ['친구가 읽으면 어떨까?', '속상할 거예요'], ['얼굴 보고도 할 말인가?', '못 할 말이에요']], 2, 3, '다들 그렇게 써요', 0.2),
            MATCH('"색이 밝아서 좋아!" 댓글에 세 질문을 대어 이어요.', {}, [['사실인가?', '정말 밝아요'], ['친구가 읽으면 어떨까?', '기쁠 거예요'], ['얼굴 보고도 할 말인가?', '얼굴 보고도 해요']], 2, 3, '아무도 안 봐요', 0.25,
              { conclude: '사실인가 → 친구가 읽으면 어떨까 → 얼굴 보고도 할 말인가. 세 질문을 지나야 댓글을 올려요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '댓글 쓰기 전 세 질문을 차례대로 써요.', columns: ['차례', '질문'], cells: [['1', '사실인가?'], ['2', ''], ['3', '']], answer: '친구가 읽으면 어떨까?, 얼굴 보고도 할 말인가?' }] },
        notes: '세 질문은 체계도 계획의 문장을 그대로 썼다.',
      }),
      C({
        id: 'bully.e34.g4-comment-account.activity.account-dilemma', type: 'activity', title: '갈림길: 친구 계정이 열려 있을 때',
        method: '갈림길: 친구 비밀번호를 알게 되었을 때', tool: 'dilemma', minutes: 14,
        levels: { easy: '갈림 1번, 보기 2개 가운데 고르고 결과를 본다.', base: '갈림 2번, 보기 3개씩 고르며 결과를 따라간다(친구에게 알려 주는 길은 한 번에 끝난다).', challenge: '끝 장면에서 고른 까닭과 친구에게 할 말을 근거 카드에서 고른다.' },
        activity: {
          title: '갈림길: 친구 계정이 열려 있을 때', tool: 'dilemma',
          teacher: '"친구 계정으로 글을 올리면, 다른 친구들은 그 글을 누가 쓴 거라고 생각할까요?" 결과 장면을 소리 내어 읽고 다른 길도 끝까지 가 보게 한다. "장난으로 한 번쯤은 괜찮아요"라는 말에는 "내 이름으로 내가 안 쓴 글이 올라가면 나는 어떨까요?"라고 묻는다. 비밀번호는 가족 말고는 알려 주지 않고, 알게 되면 잊고 친구에게 바꾸라고 알려 준다는 것을 짚는다.',
          task: '장면을 읽고 보기를 골라요. 결과를 보고 다음 장면에서 또 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL('친구가 로그아웃을 안 하고 갔어요.', {
              text: '컴퓨터실에서 이안이가 계정을 켜 둔 채 나갔어요. 옆 친구가 "이걸로 웃긴 글 올리자" 해요.', motif: 'house',
              choices: [
                { id: 'out', text: '로그아웃해 준다', result: '옆 친구가 "에이, 재미없어" 해요.', ending: '로그아웃해 이안이 계정을 지켰어요.', next: {
                  text: '옆 친구가 "비밀번호 봤어, 나중에 들어가자" 해요.', choices: [
                    { id: 'tell', text: '이안이에게 비밀번호를 바꾸라고 알려 준다', result: '이안이가 비밀번호를 바꿨어요.', impact: [{ who: '이안이', text: '계정이 안전해요', tone: 1 }], ending: '친구 계정을 끝까지 지켰어요.' },
                    { id: 'keep', text: '비밀번호를 적어 둔다', result: '며칠 뒤 이안이 계정에 이상한 글이 올라왔어요.', impact: [{ who: '이안이', text: '억울해요', tone: -1 }], why: '남의 비밀번호는 적어 두지 않고 잊어요.' },
                    { id: 'ok', text: '"그래, 나중에 하자"', result: '친구가 몰래 들어가 글을 올렸어요.', impact: [{ who: '이안이', text: '오해를 받아요', tone: -1 }], why: '나중에도 남의 계정은 쓰지 않아요.' },
                  ] } },
                { id: 'post', text: '같이 웃긴 글을 올린다', result: '이안이 이름으로 이상한 글이 퍼졌어요.', impact: [{ who: '이안이', text: '친구들에게 오해받아요', tone: -1 }], why: '남의 계정으로 글을 쓰면 사이버폭력이에요.' },
                { id: 'tell', text: '이안이를 불러 알려 준다', result: '이안이가 와서 로그아웃하고 고맙다고 했어요.', impact: [{ who: '이안이', text: '고마워요', tone: 1 }], ending: '친구에게 바로 알려 계정을 지켰어요.' },
              ] }, [['out', 'tell'], ['tell']],
            { reasons: [{ id: 'own', text: '계정은 그 친구만의 것이라서' }, { id: 'say', text: '"계정 열려 있었어, 바꿔"라고 말해 주려고' }, { id: 'once', text: '한 번쯤은 장난이니까', why: '한 번이어도 친구 이름으로 글이 남아요.' }], ok: ['own', 'say'] }, 0.2),
            DIL('친구가 비밀번호를 알려 줬어요.', {
              text: '친한 서아가 "우리 친하니까" 하며 자기 비밀번호를 알려 줬어요. 다른 친구가 "그걸로 서아 사진 보자" 해요.', motif: 'star',
              choices: [
                { id: 'forget', text: '"안 볼래, 나는 잊을게"', result: '다른 친구가 아쉬워했어요.', ending: '친구가 알려 준 비밀번호도 쓰지 않았어요.', next: {
                  text: '그 친구가 "그럼 나한테 알려 줘" 해요.', choices: [
                    { id: 'advise', text: '거절하고 서아에게 비밀번호를 바꾸라고 한다', result: '서아가 "고마워, 바꿀게" 했어요.', impact: [{ who: '서아', text: '안전해요', tone: 1 }], ending: '비밀번호는 친한 사이에도 나누지 않는다는 것을 알려 줬어요.' },
                    { id: 'give', text: '알려 준다', result: '그 친구가 서아 계정에 들어갔어요.', impact: [{ who: '서아', text: '사생활이 드러났어요', tone: -1 }], why: '남의 비밀번호는 누구에게도 옮기지 않아요.' },
                    { id: 'later', text: '"나중에 생각해 볼게"', result: '그 친구가 계속 졸랐어요.', impact: [{ who: '나', text: '곤란해요', tone: 0 }], why: '분명히 거절하고 서아에게 알려요.' },
                  ] } },
                { id: 'peek', text: '같이 몰래 들어가 본다', result: '서아 사진과 대화를 다 봤어요.', impact: [{ who: '서아', text: '믿음이 깨졌어요', tone: -1 }], why: '알려 준 비밀번호여도 몰래 들어가면 안 돼요.' },
                { id: 'tell', text: '서아에게 "비밀번호는 바꿔" 하고 바로 말한다', result: '서아가 바로 바꿨어요.', impact: [{ who: '서아', text: '고마워요', tone: 1 }], ending: '친한 사이에도 비밀번호는 지키자고 알려 줬어요.' },
              ] }, [['forget', 'advise'], ['tell']],
            { reasons: [{ id: 'family', text: '비밀번호는 가족 말고는 나누지 않아서' }, { id: 'trust', text: '서아 믿음을 지키려고' }, { id: 'close', text: '친하면 봐도 되니까', why: '친해도 몰래 보면 믿음이 깨져요.' }], ok: ['family', 'trust'] }, 0.25),
            DIL('친구 계정으로 다른 친구에게 메시지를 보내자고 해요.', {
              text: '시우 태블릿이 켜져 있어요. 친구가 "시우인 척 하람이한테 \'너 싫어\' 보내자" 해요.', motif: 'cloud',
              choices: [
                { id: 'no', text: '"그건 안 돼" 하고 화면을 끈다', result: '친구가 "장난인데" 하며 투덜댔어요.', ending: '시우와 하람이 둘 다를 지켰어요.', next: {
                  text: '친구가 다른 날 또 해 보겠다고 해요.', choices: [
                    { id: 'adult', text: '선생님께 미리 알린다', result: '선생님이 반과 "남의 계정 쓰지 않기"를 약속하셨어요.', impact: [{ who: '반 친구들', text: '모두 안전해요', tone: 1 }], ending: '미리 알려서 다음 장난도 막았어요.' },
                    { id: 'watch', text: '그날은 내가 지켜보면 된다고 생각한다', result: '내가 없을 때 메시지가 보내졌어요.', impact: [{ who: '하람이와 시우', text: '서로 오해해요', tone: -1 }], why: '혼자 막기 어려우면 어른께 알려요.' },
                    { id: 'join', text: '"그때는 나도 할게"', result: '하람이와 시우가 크게 다퉜어요.', impact: [{ who: '하람이와 시우', text: '사이가 깨졌어요', tone: -1 }], why: '남인 척 보내는 메시지는 두 친구를 다 아프게 해요.' },
                  ] } },
                { id: 'send', text: '같이 보낸다', result: '하람이가 시우에게 상처받고 울었어요.', impact: [{ who: '하람이와 시우', text: '둘 다 상처받았어요', tone: -1 }], why: '남인 척 보내면 두 사람을 동시에 다치게 해요.' },
                { id: 'tell', text: '시우에게 태블릿이 켜져 있다고 알린다', result: '시우가 와서 잠그고 고마워했어요.', impact: [{ who: '시우', text: '안심했어요', tone: 1 }], ending: '친구에게 알려 계정을 지켰어요.' },
              ] }, [['no', 'adult'], ['tell']],
            { reasons: [{ id: 'two', text: '남인 척하면 두 친구가 다쳐서' }, { id: 'say', text: '"켜져 있었어, 잠가"라고 말해 주려고' }, { id: 'funny', text: '재밌으면 괜찮아서', why: '재밌는 건 쓰는 사람뿐이에요.' }], ok: ['two', 'say'] }, 0.3, { conclude: '친구 계정은 장난으로도 쓰지 않아요. 열려 있으면 로그아웃해 주고, 친구에게 알려 비밀번호를 바꾸게 해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '친구 계정이 열려 있으면?', options: ['장난으로 글을 올려요', '로그아웃하고 친구에게 알려요'], answer: '로그아웃하고 친구에게 알려요' }] },
        notes: FICTION + ' 학생에게 자기 비밀번호나 계정 이름을 말하게 하지 않는다.',
      }),
      C({
        id: 'bully.e34.g4-comment-account.activity.comment-rewrite', type: 'activity', title: '댓글 바꿔 쓰기 카드',
        method: '댓글 바꿔 쓰기 카드', tool: 'wordcards', minutes: 26,
        levels: { easy: '판마다 댓글 2개에 바꾼 댓글 카드를 잇는다.', base: '판마다 댓글 3개에 바꾼 댓글 카드를 잇는다.', challenge: '판마다 4개를 남는 카드 하나를 가려 잇고, 넷째 문항에서 내가 만든 댓글을 짝이 세 질문으로 점검한다.' },
        activity: {
          title: '댓글 바꿔 쓰기 카드', tool: 'wordcards',
          teacher: '"\'이게 그림?\'을 세 질문에 통과하는 댓글로 바꾸면?" 이은 뒤 바꾼 댓글을 소리 내어 읽게 한다. "좋은 말만 쓰면 거짓말이잖아요"라는 학생에게 "솔직한 생각도 \'다음엔 ~도 그려 줘\'처럼 바라는 것으로 말하면 돼요"라고 말해 준다. 넷째 문항에서는 짝이 쓴 댓글에 세 질문을 하나씩 대어 보게 한다.',
          task: '상처 주는 댓글 카드에 세 질문을 통과하게 바꾼 댓글 카드를 이어요.', levels: CARD_LV,
          items: [
            MATCH('그림에 달린 댓글을 바꾼 댓글과 이어요.', {}, [['"이게 그림?"', '색이 밝아서 좋아'], ['"ㅋㅋㅋ 못 그림"', '다음엔 배경도 그려 줘'], ['"내가 더 잘 그려"', '나도 같이 그려 볼래'], ['"따라 그렸지?"', '어떻게 그렸어?']], 2, 3, '솔직히 별로야', 0.15),
            MATCH('노래 영상에 달린 댓글을 바꾼 댓글과 이어요.', {}, [['"목소리 왜 그래"', '목소리 또렷해'], ['"음 틀렸네ㅋ"', '끝까지 불러서 멋져'], ['"이걸 왜 올려"', '올려 줘서 고마워'], ['"듣다가 껐음"', '다음 노래도 기대돼']], 2, 3, '그냥 웃겨서', 0.2),
            MATCH('발표 사진에 달린 댓글을 바꾼 댓글과 이어요.', {}, [['"얼굴 빨개진 것 봐"', '떨렸을 텐데 잘했어'], ['"말 더듬었지?"', '자료가 알찼어'], ['"지루했음"', '그 부분 더 알고 싶어'], ['"표정 웃김"', '발표 수고했어']], 2, 3, '사실이잖아', 0.25,
              { conclude: '바꾼 댓글은 사실이고, 읽는 친구가 기쁘고, 얼굴 보고도 할 수 있는 말이에요.' }),
            { prompt: '내가 만든 댓글 하나를 짝이 세 질문으로 점검해 줘요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '댓글을 바꿔 써요.', text: '"이게 그림?" → "___"', answer: '색이 밝아서 좋아' }] },
        notes: '상처 주는 댓글 카드는 바꾸기 위해서만 보여 준다. 학생이 만든 댓글을 실제 누리집에 올리는 활동은 하지 않는다.',
      }),
      C({
        id: 'bully.e34.g4-comment-account.wrap.lock-poster', type: 'wrap', title: '"내 계정 자물쇠" 포스터',
        method: '"내 계정 자물쇠" 포스터', tool: 'collage', minutes: 6,
        levels: { easy: '자물쇠(반원+네모) 조각을 넣어 조각 3개 이상을 붙인다.', base: '자물쇠·열쇠·방패 조각 5개 이상을 붙인다.', challenge: '조각 5개 이상을 붙이고 계정 지키기 약속 문장을 정해 점검 4칸에 표시한다.' },
        wrap: {
          teacher: '"반원 위에 네모를 붙이면 자물쇠가 돼요. 내 계정을 지키는 자물쇠 포스터를 만들어 볼까요?" 자물쇠·열쇠(긴 네모)·방패(마름모)를 붙이며 계정 약속을 말하게 한다. 출구 2번에서 "친한 친구에게는 알려 줘도 된다"를 고른 학생에게 "아까 서아 장면에서 비밀번호가 어디까지 갔나요?"라고 되묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'collage', options: { shapes: ['semi', 'square', 'rect', 'diamond', 'circle'], maxPieces: 12 }, prompt: '자물쇠·열쇠·방패 조각으로 "내 계정 자물쇠" 포스터를 꾸며요.', target: { has: [{ shape: 'semi', min: 1 }, { shape: 'square', min: 1 }], selfCheck: ['자물쇠를 만들었어요', '열쇠·방패를 붙였어요', '짝과 함께 보았어요'], minPieces: 5 }, difficulty: 0.1,
              levels: { easy: { target: { has: [{ shape: 'semi', min: 1 }, { shape: 'square', min: 1 }], selfCheck: ['자물쇠를 만들었어요', '짝과 함께 보았어요'], minPieces: 3 } }, challenge: { target: { has: [{ shape: 'semi', min: 1 }, { shape: 'square', min: 1 }], selfCheck: ['자물쇠를 만들었어요', '열쇠·방패를 붙였어요', '짝과 함께 보았어요', '약속 문장을 정했어요'], minPieces: 5 } } } },
            { type: 'choice', prompt: '비밀번호는 누구와 나눠도 될까요?', options: ['친한 친구', '보호자(가족)', '반 친구 모두'], answer: 1, difficulty: 0.1, explain: '비밀번호는 보호자 말고는 나누지 않아요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '내 계정 자물쇠',
          items: [
            { type: 'check', prompt: '계정 지키기 약속에 표시해요.', options: ['비밀번호를 친구에게 안 알려요', '다 쓰면 로그아웃해요', '남의 계정은 안 써요', '친하면 알려 줘요'] },
            { type: 'draw', prompt: '"내 계정 자물쇠" 포스터를 그리고 약속을 써요.' },
          ],
        },
      }),
      C({
        id: 'bully.e34.g4-comment-account.wrap.comment-check', type: 'wrap', title: '댓글 약속 스스로 점검',
        method: '댓글 약속 스스로 점검', tool: 'timer', minutes: 6,
        levels: { easy: '약속 2개(세 질문 하기·남의 계정 안 쓰기)에 표시한다.', base: '약속 3개(+비밀번호 안 알려 주기)에 표시한다.', challenge: '약속 4칸에 표시하고 집에서 가족과 할 약속을 출구 3번에 쓴다.' },
        wrap: {
          teacher: '"댓글·계정 약속을 하나씩 읽어 볼게요." 점검 칸을 함께 읽고 스스로 표시하게 한다. 출구 2번에서 "댓글은 금방 사라진다"를 고른 학생에게 "서아가 나쁜 댓글을 몇 번이나 다시 볼 수 있었나요?"라고 되묻는다. 가족과 할 약속(예: 계정 비밀번호는 보호자와 함께 관리)은 집에서 이야기해 보게 한다.',
          exitTicket: [
            SELF('댓글 약속 점검', ['세 질문을 하고 써요', '남의 계정을 안 써요', '비밀번호를 안 알려 줘요', '가족과 할 약속을 골랐어요'], '댓글·계정 약속을 읽고 지킬 수 있는 것에 표시해요.'),
            { type: 'choice', prompt: '댓글은 금방 사라질까요?', options: ['금방 사라져요', '오래 남아 다시 볼 수 있어요'], answer: 1, difficulty: 0.1, explain: '댓글은 오래 남아 친구가 몇 번이고 다시 볼 수 있어요.' },
            { type: 'short', prompt: '집에서 가족과 할 계정 약속을 한 줄로 써요.' },
          ],
        },
        worksheet: {
          title: '댓글·계정 약속',
          items: [
            { type: 'check', prompt: '내가 지킬 약속에 표시해요.', options: ['세 질문을 하고 써요', '남의 계정을 안 써요', '비밀번호를 안 알려 줘요'] },
            { type: 'short', prompt: '친구 그림에 달고 싶은 댓글을 세 질문에 맞게 써요.' },
          ],
          easy: { note: '"사실인가?"부터 물어요.', items: [{ type: 'choice', prompt: '친구 계정이 열려 있으면?', options: ['로그아웃해 줘요', '글을 올려요'], answer: '로그아웃해 줘요' }] },
        },
      }),
    );
  }

  // ======================================================================================================
  // 4학년 · 혼자보다 함께 말리기, 신고는 고자질이 아니에요 (research-mandatory §2 초: 방관자에서 조력자로·도움 요청)
  // ======================================================================================================
  {
    const C = T('g4-stop-together', 4);
    const TOGETHER = [['혼자 말렸을 때', 2], ['둘이 말렸을 때', 5], ['셋이 함께 말렸을 때', 8]];
    const ROUTE = {
      title: '우리 학교와 동네(가상)', grid: [6, 4],
      regions: [
        { name: '교실(담임 선생님)', cells: [[0, 0], [1, 0], [0, 1], [1, 1]] }, { name: '상담실(상담 선생님)', cells: [[2, 0], [3, 0]] },
        { name: '교무실', cells: [[4, 0], [5, 0]] }, { name: '운동장', cells: [[2, 1], [3, 1], [4, 1], [5, 1], [2, 2], [3, 2]] },
        { name: '우리 집(보호자)', cells: [[0, 2], [1, 2], [0, 3], [1, 3]] }, { name: '학교가 알려 준 도움 기관', cells: [[4, 2], [5, 2], [4, 3], [5, 3]] },
        { name: '학원 앞', cells: [[2, 3], [3, 3]] },
      ],
    };
    M.push(
      C({
        id: 'bully.e34.g4-stop-together.intro.tell-or-tattle-feel', type: 'intro', title: '고자질과 신고 장면 비교',
        method: '고자질과 신고 장면 비교', tool: 'emotion', minutes: 6,
        levels: { easy: '장면 2개(연필 일러바치기·계속 맞는 걸 알리기)에 친구 마음을 함께 놓는다.', base: '장면 3개에 친구 마음 카드를 놓고 까닭을 말한다.', challenge: '두 장면의 다른 점(혼내려고·지키려고)을 짝에게 말한다.' },
        intro: {
          teacher: '"장면 1은 \'선생님, 쟤 수업 시간에 연필 깎아요!\' 일러바치기, 장면 2는 \'라온이가 쉬는 시간마다 맞아요\' 알리기예요. 두 장면의 친구 마음은요?" 시연 단추로 장면마다 마음 카드가 놓이는 것을 보인다. "둘 다 이르는 거니까 똑같아요"라는 말이 나오면 "장면 1은 누구를 위한 말이고, 장면 2는 누구를 위한 말일까요?"라고 되묻는다. 오늘은 알리는 것이 고자질이 아니라 지키는 일이라는 것을 배운다고 밝힌다.',
          student: '두 장면(일러바치기·알리기)을 읽고 친구들의 마음 카드를 골라요. 무엇이 다를까요?',
          demo: { tool: 'emotion', options: { mode: 'match', slots: [{ id: 's1', label: '연필 깎는다고 일러바침' }, { id: 's2', label: '계속 맞는 걸 알려 줌' }, { id: 's3', label: '대화방 놀림을 알려 줌' }], cards: ['억울함', '안심', '고마움', '신남', '화남'], shuffle: false }, sequence: [{ match: { s1: '억울함' } }, { match: { s1: '억울함', s2: '안심' } }, { match: { s1: '억울함', s2: '안심', s3: '고마움' } }] },
          art: { draw: 'two paper panels: on the left a paper child pointing at a classmate sharpening a pencil, on the right a paper child walking a hurt friend to a teacher', banner: '고자질일까, 지키기일까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: FICTION,
      }),
      C({
        id: 'bully.e34.g4-stop-together.intro.together-chart', type: 'intro', title: '"혼자와 함께" 말린 결과 그래프',
        method: '"혼자와 함께" 말린 결과 그래프', tool: 'chart', minutes: 6,
        levels: { easy: '두 막대(혼자·셋이 함께)를 함께 견준다.', base: '세 막대를 읽고 가장 많이 멈춘 경우를 고른다.', challenge: '왜 함께가 더 잘 되는지 짐작해 말한다(교사 진행).' },
        intro: {
          teacher: '"가상의 이야기 열 개를 모았어요. 혼자 말렸을 때 놀림이 멈춘 건 몇 번? 셋이 함께 말렸을 때는요?" 시연 단추로 셋이 함께 막대가 골라지는 것을 보인다. "혼자 말려야 진짜 용기예요"라는 말이 나오면 "혼자일 때와 셋일 때, 놀리던 친구는 누구 말을 더 들을까요?"라고 되묻는다. 자료는 가상이라고 밝힌다.',
          student: '가상의 그래프를 읽고, 혼자 말릴 때와 함께 말릴 때 무엇이 다른지 말해 보아요.',
          demo: { tool: 'chart', options: { type: 'bar', mode: 'read', title: '말려서 놀림이 멈춘 횟수(가상 이야기 10개)', unit: '번', xLabel: '말린 사람', yLabel: '멈춘 횟수', data: TOGETHER, max: 10, scale: 1, showValues: true, question: '가장 많이 멈춘 것은?', choices: TOGETHER.map((x) => x[0]) }, sequence: [{ pick: 2 }] },
          art: { draw: 'three paper panels: one paper child alone raising a hand, two paper children side by side, three paper children holding hands standing tall', banner: '혼자보다 함께', extra: [{ motif: 'sun', x: 300, y: 96 }] },
        },
        notes: '그래프는 가상의 이야기 자료다. 실제 연구 수치가 아니라고 밝힌다.',
      }),
      C({
        id: 'bully.e34.g4-stop-together.activity.tell-sort', type: 'activity', title: '신고/고자질 나누기',
        method: '신고/고자질 나누기', tool: 'sortboard', minutes: 14,
        levels: { easy: '판마다 카드 4장, 놓으면 바로 맞는지 알려 주고 바구니마다 든 장 수가 보인다.', base: '판마다 카드 6장(교실·운동장·대화방)을 신고와 고자질 바구니에 나눈다.', challenge: '판마다 애매한 카드 2장이 더해지고, 짝과 토의해 정한다.' },
        activity: {
          title: '신고/고자질 나누기', tool: 'sortboard',
          teacher: '"이 말은 누군가를 지키려는 걸까요, 혼내 주려는 걸까요?" 카드를 놓을 때마다 "누구를 위해서?"를 묻는다. "알리면 고자질쟁이가 돼요"라는 학생에게 "다치거나 계속 괴롭힘을 받는 친구를 알리는 건, 그 친구를 지키는 신고예요"라고 말해 준다. 애매한 카드는 "그대로 두면 누가 다칠까?"를 기준으로 정하게 한다.',
          task: '상황 카드를 "지키려고 알림(신고)"과 "혼내려고 일러바침(고자질)"으로 나누어요.', levels: BOARD_LV,
          items: [
            SORT('교실 상황을 두 바구니에 나누어요.', {}, ['지키려고 알림(신고)', '혼내려고 일러바침(고자질)'],
              [['계속 맞는 친구를 알림', '돈을 뺏긴 걸 알림', '억지로 시키는 걸 알림'], ['연필 깎는다고 이름', '숙제 늦게 낸 걸 이름', '짝이 하품했다고 이름']], 2, [['겁주는 쪽지를 알림'], ['몰래 사탕 먹었다고 이름']], 0.15),
            SORT('운동장 상황을 두 바구니에 나누어요.', {}, ['지키려고 알림(신고)', '혼내려고 일러바침(고자질)'],
              [['형들이 둘러싼 걸 알림', '다친 친구를 알림', '한 명만 계속 빼는 걸 알림'], ['줄 한 번 늦게 섰다고 이름', '공 놓쳤다고 이름', '모자 안 썼다고 이름']], 2, [['밀쳐서 넘어뜨린 걸 알림'], ['내가 진 게 분해서 이름']], 0.2),
            SORT('대화방 상황을 두 바구니에 나누어요.', {}, ['지키려고 알림(신고)', '혼내려고 일러바침(고자질)'],
              [['몰래 찍은 사진 돈 걸 알림', '한 명 빼고 새 방 알림', '욕 도배를 알림'], ['밤에 답장 늦었다고 이름', '오타 냈다고 이름', '이모티콘 많이 썼다고 이름']], 2, [['겁주는 메시지를 알림'], ['나랑 안 놀아서 이름']], 0.25,
              { conclude: '누군가를 지키려고 알리면 신고, 혼내 주려고 일러바치면 고자질이에요. 신고는 잘한 일이에요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '친구가 계속 괴롭힘을 받는 걸 선생님께 알리면?', options: ['고자질이에요', '친구를 지키는 신고예요'], answer: '친구를 지키는 신고예요' }] },
        notes: FICTION,
      }),
      C({
        id: 'bully.e34.g4-stop-together.activity.together-dilemma', type: 'activity', title: '갈림길: 셋이 놀림을 보았을 때',
        method: '갈림길: 친구가 놀림 받는 것을 셋이 보았을 때', tool: 'dilemma', minutes: 14,
        levels: { easy: '갈림 1번, 보기 2개 가운데 고르고 결과를 본다.', base: '갈림 2번, 보기 3개씩 고르며 결과를 따라간다.', challenge: '갈림 3번 — 바른 길 끝에 놀림 받은 친구의 장면이 이어진다.' },
        activity: {
          title: '갈림길: 셋이 놀림을 보았을 때', tool: 'dilemma',
          teacher: '"셋이 같이 봤어요. 셋이 할 일을 나누면 어떻게 될까요?" 결과 장면을 소리 내어 읽고 다음 장면에서 다시 고른다. "놀리는 친구를 놀려 주면 공평해요"라는 말에는 "그러면 놀림이 하나에서 둘이 될까요, 없어질까요?"라고 묻는다. 셋째 장면에서 놀림 받은 친구에게 "알려 줘서 고마워"라는 말을 듣는 장면으로 알린 것이 잘한 일임을 짚는다.',
          task: '장면을 읽고 보기를 골라요. 결과를 보고 다음 장면에서 또 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL('셋이 같이 친구가 놀림 받는 걸 봤어요.', {
              text: '나와 친구 둘이 복도에서 라온이가 여럿에게 놀림 받는 것을 함께 보았어요.', motif: 'house',
              choices: [
                { id: 'split', text: '둘은 곁에 가고 한 명은 선생님께 간다', result: '곁에 간 둘 덕분에 놀림이 줄고, 곧 선생님이 오셨어요.', ending: '셋이 할 일을 나눠 함께 멈추게 했어요.', next: {
                  text: '놀리던 친구가 "너희가 뭔데?" 해요.', choices: [
                    { id: 'calm', text: '"라온이가 싫대. 그만하자" 차분히 말한다', result: '놀리던 친구가 선생님을 보고 멈췄어요.', impact: [{ who: '라온이', text: '안심했어요', tone: 1 }], ending: '함께 차분히 말하고 어른을 기다렸어요.' },
                    { id: 'yell', text: '"너 나빠!" 소리친다', result: '말싸움이 커졌어요.', impact: [{ who: '모두', text: '다툼이 커졌어요', tone: -1 }], why: '사람이 아니라 행동을 멈추게 해요.' },
                    { id: 'back', text: '겁이 나서 물러난다', result: '라온이가 다시 혼자가 됐어요.', impact: [{ who: '라온이', text: '외로워요', tone: -1 }], why: '셋이 함께면 곁에 있을 수 있어요. 어른이 곧 오세요.' },
                  ] } },
                { id: 'ignore', text: '각자 모른 척한다', result: '놀림이 쉬는 시간 내내 이어졌어요.', impact: [{ who: '라온이', text: '외로워요', tone: -1 }], why: '셋이 있으면 함께 도울 수 있어요.' },
                { id: 'mock', text: '놀리는 친구를 놀린다', result: '놀림이 두 줄이 됐어요.', impact: [{ who: '모두', text: '상처가 늘었어요', tone: -1 }], why: '놀림으로 갚으면 폭력이 커져요.' },
              ] }, [['split', 'calm']],
            { third: { text: '다음 날 라온이가 "어제 고마웠어, 근데 고자질했다고 할까 봐 걱정돼" 해요.', choices: [
              { id: 'safe', text: '"지키려고 알린 거야. 잘한 거래"', result: '라온이가 마음을 놓았어요.', impact: [{ who: '라온이', text: '안심했어요', tone: 1 }], ending: '알리는 것은 고자질이 아니라 지키는 일이에요.' },
              { id: 'regret', text: '"그러게, 알리지 말걸"', result: '라온이가 다음엔 말하지 않기로 했어요.', impact: [{ who: '라온이', text: '혼자 참게 돼요', tone: -1 }], why: '지키려고 알린 것은 후회할 일이 아니에요.' },
              { id: 'shrug', text: '"몰라"', result: '라온이는 계속 걱정했어요.', impact: [{ who: '라온이', text: '걱정돼요', tone: 0 }] },
            ] }, pick: 'safe' }, 0.2),
            DIL('셋이 대화방 놀림을 같이 봤어요.', {
              text: '나와 친구 둘이 반 대화방에서 하람이 사진에 놀림 글이 달리는 것을 봤어요.', motif: 'cloud',
              choices: [
                { id: 'split', text: '둘은 "그만하자" 쓰고 한 명은 선생님께 알린다', result: '놀림 글이 멈추고 선생님이 사진을 내리게 하셨어요.', ending: '함께 나눠 해서 빨리 멈췄어요.', next: {
                  text: '놀림 글을 단 친구가 "누가 일렀냐" 하며 찾아요.', choices: [
                    { id: 'together', text: '"우리 셋이 함께 알렸어" 한다', result: '그 친구가 더 따지지 못했어요.', impact: [{ who: '우리 셋', text: '든든해요', tone: 1 }], ending: '함께 알리면 한 명만 표적이 되지 않아요.' },
                    { id: 'deny', text: '"나 아니야" 하고 친구 탓을 한다', result: '친구 하나만 몰렸어요.', impact: [{ who: '그 친구', text: '억울해요', tone: -1 }], why: '함께 한 일은 함께 말해요.' },
                    { id: 'scared', text: '무서워서 대화방을 나간다', result: '하람이가 혼자 남았어요.', impact: [{ who: '하람이', text: '외로워요', tone: -1 }], why: '겁날 때도 셋이 함께 어른과 이야기해요.' },
                  ] } },
                { id: 'none', text: '셋 다 읽기만 한다', result: '놀림 글이 계속 달렸어요.', impact: [{ who: '하람이', text: '창피해요', tone: -1 }], why: '읽기만 하면 놀림이 계속돼요.' },
                { id: 'curse', text: '셋이 놀린 친구에게 욕을 단다', result: '대화방이 욕으로 뒤덮였어요.', impact: [{ who: '모두', text: '상처받았어요', tone: -1 }], why: '욕으로 맞서면 또 다른 폭력이에요.' },
              ] }, [['split', 'together']],
            { third: { text: '하람이가 "나 때문에 너희가 곤란해졌지?" 해요.', choices: [
              { id: 'notyou', text: '"아니, 놀린 쪽이 잘못이야"', result: '하람이가 고개를 들었어요.', impact: [{ who: '하람이', text: '힘이 나요', tone: 1 }], ending: '잘못은 놀린 쪽에 있다고 분명히 말했어요.' },
              { id: 'yes', text: '"좀 곤란하긴 했어"', result: '하람이가 미안해했어요.', impact: [{ who: '하람이', text: '자기 탓을 해요', tone: -1 }], why: '놀림 받은 친구 탓이 아니에요.' },
              { id: 'leave', text: '대답하지 않는다', result: '하람이는 혼자 걱정했어요.', impact: [{ who: '하람이', text: '걱정돼요', tone: 0 }] },
            ] }, pick: 'notyou' }, 0.25),
            DIL('셋이 학원 앞에서 돈을 뺏기는 친구를 봤어요.', {
              text: '학원 앞에서 다른 학교 형이 시우에게 "돈 좀 빌려줘" 하며 붙잡고 있는 걸 셋이 봤어요.', motif: 'star',
              choices: [
                { id: 'adult', text: '한 명은 학원 선생님을 부르고, 둘은 떨어져서 지켜본다', result: '학원 선생님이 나오시자 형이 갔어요.', ending: '가까운 어른을 불러 안전하게 끝났어요.', next: {
                  text: '형이 "내일 또 온다" 하고 갔어요.', choices: [
                    { id: 'home', text: '보호자와 담임 선생님께도 알린다', result: '어른들이 함께 하굣길을 살피기로 하셨어요.', impact: [{ who: '시우', text: '안전해요', tone: 1 }], ending: '학교 밖 일도 보호자와 선생님께 알려요.' },
                    { id: 'guard', text: '내일 셋이 형을 혼내 주기로 한다', result: '다음 날 다툼이 커졌어요.', impact: [{ who: '우리 셋', text: '다칠 수 있어요', tone: -1 }], why: '직접 맞서지 말고 어른께 알려요.' },
                    { id: 'forget', text: '"이제 끝났겠지" 하고 넘긴다', result: '다음 날 시우가 또 붙잡혔어요.', impact: [{ who: '시우', text: '무서워요', tone: -1 }], why: '"또 온다"는 말은 꼭 어른께 알려요.' },
                  ] } },
                { id: 'rush', text: '셋이 달려가 형을 밀친다', result: '형이 화를 내며 우리를 밀쳤어요.', impact: [{ who: '우리 셋', text: '다칠 뻔했어요', tone: -1 }], why: '힘센 사람에게 직접 맞서지 말고 어른을 불러요.' },
                { id: 'walk', text: '못 본 척 지나간다', result: '시우는 돈을 뺏겼어요.', impact: [{ who: '시우', text: '무섭고 억울해요', tone: -1 }], why: '셋이면 어른을 부를 수 있어요.' },
              ] }, [['adult', 'home']],
            { third: { text: '시우가 "엄마한테 말하면 혼날까 봐 무서워" 해요.', choices: [
              { id: 'with', text: '"같이 가서 말씀드리자. 네 잘못 아니야"', result: '시우 보호자가 "말해 줘서 고마워" 하셨어요.', impact: [{ who: '시우', text: '마음이 놓여요', tone: 1 }], ending: '말한 친구는 혼날 일이 아니라 잘한 거예요.' },
              { id: 'hide', text: '"그럼 비밀로 하자"', result: '시우는 혼자 걱정을 안고 갔어요.', impact: [{ who: '시우', text: '무서워요', tone: -1 }], why: '돈을 뺏기는 일은 비밀로 두지 않아요.' },
              { id: 'pay', text: '"우리가 돈 모아 줄게"', result: '형은 계속 돈을 달라고 했어요.', impact: [{ who: '시우', text: '계속 붙잡혀요', tone: -1 }], why: '돈을 대 주면 멈추지 않아요. 어른께 알려요.' },
            ] }, pick: 'with' }, 0.3, { conclude: '여럿이 보았다면 할 일을 나눠요 — 곁에 가고, 어른을 부르고, 함께 알려요. 알린 사람은 잘한 거예요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '셋이 놀림을 보았을 때 가장 좋은 방법은?', options: ['각자 모른 척하기', '곁에 가고 어른께 알리기를 나눠 하기', '놀리는 친구를 놀리기'], answer: '곁에 가고 어른께 알리기를 나눠 하기' }] },
        notes: FICTION,
      }),
      C({
        id: 'bully.e34.g4-stop-together.activity.help-route-map', type: 'activity', title: '도움 경로 지도',
        method: '도움 경로 지도 그리기', tool: 'map', minutes: 26,
        levels: { easy: '핀을 놓으면 그 칸의 장소 이름이 바로 보인다(상황 4개).', base: '상황 4개(교실·상담·집·학교 밖)마다 갈 곳에 핀을 꽂는다.', challenge: '핀을 꽂은 뒤 학교 밖 상황에서 할 일까지 보기에서 고르고, 다섯째 문항에서 짝과 우리 학교의 도움 경로를 말한다.' },
        activity: {
          title: '도움 경로 지도', tool: 'map',
          teacher: '"이럴 때는 누구에게, 어디로 가면 될까요?" 핀을 꽂기 전에 손가락으로 길을 따라가 보게 한다. "선생님은 바쁘셔서 말하면 안 돼요"라는 말이 나오면 "선생님은 이런 이야기를 들으려고 계신 거예요"라고 말해 준다. "학교가 알려 준 도움 기관" 칸은 우리 학교가 안내하는 곳과 번호를 교사가 확인해 말로 채운다(이 자료에는 번호를 적지 않았다).',
          task: '학교·동네 칸 지도에서 상황마다 도움을 받으러 갈 곳에 핀을 꽂아요.', levels: { easy: { readout: true }, base: {}, challenge: {} },
          items: [
            PIN(ROUTE, '쉬는 시간 놀림을 알리고 싶을 때 갈 곳에 핀을 꽂아요.', '교실(담임 선생님)', { q: '왜 이곳일까요?', choices: ['날마다 만나는 믿을 어른이라서', '놀이 기구가 있어서', '아무도 없어서'], answer: 0 }, 0.15),
            PIN(ROUTE, '마음이 오래 힘들어 이야기하고 싶을 때 갈 곳에 핀을 꽂아요.', '상담실(상담 선생님)', { q: '상담 선생님께는?', choices: ['마음 이야기를 해도 돼요', '공부만 물어봐요', '가면 혼나요'], answer: 0 }, 0.2),
            PIN(ROUTE, '저녁에 대화방 놀림을 보았을 때 갈 곳에 핀을 꽂아요.', '우리 집(보호자)', { q: '보호자께 무엇을 보여 드릴까요?', choices: ['남겨 둔 화면', '내 비밀번호', '아무것도 안 보여 줘요'], answer: 0 }, 0.2),
            PIN(ROUTE, '학원 앞에서 위험해 보이는 일을 보았을 때 갈 곳에 핀을 꽂아요.', '학교가 알려 준 도움 기관', { q: '학교 밖에서 먼저 할 일은?', choices: ['가까운 어른을 불러요', '혼자 맞서요', '그냥 지나가요'], answer: 0, tail: '할 일도 골라요.' }, 0.25,
              { conclude: '담임 선생님·상담 선생님·보호자, 그리고 학교가 알려 준 도움 기관. 도움 경로는 여러 갈래예요.' }),
            { prompt: '짝과 우리 학교에서 도움을 청할 사람과 곳을 차례로 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '상황마다 도움을 청할 사람을 써요.', columns: ['상황', '도움을 청할 사람'], cells: [['쉬는 시간 놀림', ''], ['마음이 오래 힘들 때', ''], ['저녁 대화방 놀림', '']], answer: '담임 선생님, 상담 선생님, 보호자' }, { type: 'short', prompt: '우리 학교에서 마음 이야기를 할 수 있는 곳을 써요.' }] },
        notes: '지도는 가상이다. "학교가 알려 준 도움 기관"은 학교가 실제 안내하는 곳(이름·번호)을 교사가 확인해 말로 채운다. 학생의 실제 집 위치를 묻지 않는다.',
      }),
      C({
        id: 'bully.e34.g4-stop-together.wrap.class-charter', type: 'wrap', title: '우리 반 평화 헌장 판',
        method: '우리 반 평화 헌장 판', tool: 'collage', minutes: 6,
        levels: { easy: '약속 2개(함께 말려요·지키려고 알려요)를 떠올리며 조각 3개 이상을 붙인다.', base: '약속 3개(+고운 말)를 떠올리며 조각 5개 이상을 붙인다.', challenge: '조각 5개 이상을 붙이고 약속을 어겼을 때 할 회복 방법을 정해 점검 4칸에 표시한다.' },
        wrap: {
          teacher: '"우리 반 평화 헌장에 넣을 약속 세 가지는 무엇일까요?" 긴 네모(헌장 판) 위에 약속마다 조각을 붙이며 소리 내어 말하게 한다. "어기면 벌 주기"를 넣자는 말이 나오면 "벌보다, 어긴 친구가 무엇을 바로잡으면 다시 평화로워질까요?"라고 되물어 회복 방법으로 잇는다.',
          exitTicket: [
            { type: 'tool', tool: 'collage', options: { shapes: ['rect', 'heart', 'star', 'circle', 'leaf'], maxPieces: 12 }, prompt: '헌장 판(긴 네모)에 약속 조각을 붙여 평화 헌장을 꾸며요.', target: { has: [{ shape: 'rect', min: 1 }], selfCheck: ['함께 말려요', '지키려고 알려요', '고운 말을 써요'], minPieces: 5 }, difficulty: 0.1,
              levels: { easy: { target: { has: [{ shape: 'rect', min: 1 }], selfCheck: ['함께 말려요', '지키려고 알려요'], minPieces: 3 } }, challenge: { target: { has: [{ shape: 'rect', min: 1 }], selfCheck: ['함께 말려요', '지키려고 알려요', '고운 말을 써요', '회복 방법을 정했어요'], minPieces: 5 } } } },
            { type: 'choice', prompt: '친구를 지키려고 알리면 고자질쟁이가 될까요?', options: ['네, 고자질이에요', '아니요, 잘한 신고예요'], answer: 1, difficulty: 0.1, explain: '누군가를 지키려고 알리는 것은 고자질이 아니라 신고예요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '우리 반 평화 헌장',
          items: [
            { type: 'table', prompt: '우리 반 평화 헌장 약속을 써요.', columns: ['번호', '약속'], cells: [['1', '함께 말려요'], ['2', ''], ['3', '']], answer: '지키려고 알려요, 고운 말을 써요' },
            { type: 'short', prompt: '약속을 어겼을 때 다시 평화로워지는 방법을 써요.' },
          ],
        },
      }),
      C({
        id: 'bully.e34.g4-stop-together.wrap.help-numbers', type: 'wrap', title: '도움 경로 카드와 학교 신고·상담 번호',
        method: '도움 경로 카드와 [학교가 확인해 넣는 학교폭력 신고·상담 번호]', tool: 'wordcards', minutes: 6,
        levels: { easy: '상황 2개에 도움 경로 카드를 잇는다.', base: '상황 3개(담임·상담 선생님·보호자)에 카드를 잇는다.', challenge: '학교 밖 상황까지 4개를 남는 카드 하나를 가려 잇는다.' },
        wrap: {
          teacher: '"이럴 때는 누구에게 알릴까요?" 카드를 이은 뒤, 학교가 안내하는 학교폭력 신고·상담 번호를 칠판에 적어 함께 읽고 활동지 빈칸에 옮겨 쓰게 한다(교사가 학교 안내문에서 확인해 적는다). "번호는 어른만 쓰는 거예요"라는 말이 나오면 "어린이도 보호자와 함께 쓸 수 있어요"라고 말해 준다.',
          exitTicket: [
            EX('wordcards', MATCH('상황에 맞는 도움 경로 카드를 이어요.', {}, [['쉬는 시간 놀림을 봤을 때', '담임 선생님'], ['마음이 오래 힘들 때', '상담 선생님'], ['집에서 대화방 놀림을 볼 때', '보호자'], ['학교 밖에서 위험할 때', '학교 안내 번호']], 2, 3, '혼자 참기', 0.15)),
            { type: 'choice', prompt: '학교폭력 신고·상담 번호는 어디서 확인할까요?', options: ['학교가 알려 준 안내', '모르는 사람의 글', '친구의 짐작'], answer: 0, difficulty: 0.1, explain: '번호는 학교가 알려 준 안내에서 확인하고, 보호자와 함께 써요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '나의 도움 경로',
          items: [
            { type: 'table', prompt: '도움을 청할 사람과 학교 안내 번호를 써요.', columns: ['도움 경로', '쓸 것'], cells: [['담임 선생님', '교실'], ['상담 선생님', '상담실'], ['학교 안내 번호', '[학교가 확인해 넣는 학교폭력 신고·상담 번호]']], answer: '선생님이 알려 준 번호를 옮겨 써요' },
            { type: 'short', prompt: '도움이 필요할 때 가장 먼저 말할 사람을 써요.' },
          ],
        },
        notes: '신고·상담 번호는 체계도 concepts 에 없어 화면에 적지 않았다. "[학교가 확인해 넣는 학교폭력 신고·상담 번호]" 자리는 학교가 확인해 활동지에 채운다.',
      }),
    );
  }

  // ======================================================================================================
  // 4학년 · 진짜 사과의 네 가지 (research-mandatory §2 초: 놀림·따돌림 구별 — 낙인 없이 관계 회복)
  // ======================================================================================================
  {
    const C = T('g4-real-apology', 4);
    const SORRY = [{ id: 'own', text: '"내가 ~했어"' }, { id: 'feel', text: '"속상했지?"' }, { id: 'promise', text: '"다신 안 할게"' }, { id: 'fix', text: '"내가 고칠게"' }];
    const CHANT = ['e', 'e', 'q', 'q', 'qr', 'e', 'e', 'q', 'q', 'qr', 'e', 'e', 'q', 'q', 'qr', 'e', 'e', 'q', 'q', 'qr'];
    const RUB = ['잘못한 일을 말했어요', '친구 마음을 읽었어요', '다시 안 할 약속을 했어요', '바로잡을 일을 썼어요'];
    const RW = (prompt, topic, sample, d, more) => ({
      prompt, toolOptions: { topic, minChars: 20, maxChars: 160, minSentences: 2, maxSentences: 3, starter: '○○아, 내가 ~해서 미안해.', placeholder: '친구 이름 대신 "○○아"라고 써요.', sample }, target: { selfCheck: RUB, mustInclude: ['미안'] }, difficulty: d,
      levels: {
        easy: { prompt: `${strip(prompt)}(한 문장).`, toolOptions: { minChars: 8, minSentences: 1, maxSentences: 2 }, target: { selfCheck: RUB.slice(0, 2), mustInclude: ['미안'] } },
        challenge: { prompt: `${strip(prompt)}. 받는 친구 입장에서 다시 고쳐요.`, toolOptions: { minChars: 30, maxSentences: 4 }, target: { selfCheck: RUB.concat('받는 친구 입장에서 고쳐 썼어요'), mustInclude: ['미안'] } },
      },
      ...more,
    });
    M.push(
      C({
        id: 'bully.e34.g4-real-apology.intro.two-sorries', type: 'intro', title: '두 사과 듣고 마음 비교',
        method: '두 사과 듣고 마음 비교', tool: 'emotion', minutes: 6,
        levels: { easy: '사과 2개를 듣고 받은 친구 마음을 함께 놓는다.', base: '사과 3개에 받은 친구 마음 카드를 놓고 까닭을 말한다.', challenge: '두 사과의 다른 점(무엇을·마음·약속·바로잡기)을 짝과 말한다.' },
        intro: {
          teacher: '"이안이가 다온이 물감을 엎었어요. 사과가 둘이에요. \'아 미안 됐지?\'와 \'네 물감을 엎어서 미안해, 속상했지? 새로 사 줄게.\' 다온이 마음은요?" 시연 단추로 사과마다 마음 카드가 놓이는 것을 보인다. "\'미안\' 한마디면 끝이에요"라는 말이 나오면 "두 사과 가운데 다온이가 다시 웃을 수 있는 건 어느 쪽일까요?"라고 되묻는다. 오늘은 진짜 사과의 네 가지를 배운다고 밝힌다.',
          student: '사과 셋을 읽고 받은 다온이의 마음 카드를 골라요. 어떤 사과가 마음에 닿을까요?',
          demo: { tool: 'emotion', options: { mode: 'match', slots: [{ id: 'a', label: '"아 미안 됐지?"' }, { id: 'b', label: '"엎어서 미안해, 사 줄게"' }, { id: 'c', label: '"미안~" 하고 또 웃음' }], cards: ['서운함', '고마움', '화남', '편안함', '신남'], shuffle: false }, sequence: [{ match: { a: '서운함' } }, { match: { a: '서운함', b: '고마움' } }, { match: { a: '서운함', b: '고마움', c: '화남' } }] },
          art: { draw: 'a paper art table with a spilled paper paint cup, one paper child bowing slightly and holding out a new paint set to another paper child', banner: '진짜 사과는 무엇이 다를까?', extra: [{ motif: 'heart', x: 300, y: 96, color: 'rose' }] },
        },
        notes: FICTION,
      }),
      C({
        id: 'bully.e34.g4-real-apology.intro.apology-rhythm', type: 'intro', title: '사과 네 단계 리듬 구호',
        method: '사과 네 단계 리듬 구호', tool: 'keyboard', minutes: 6,
        levels: { easy: '두 마디("인정해요, 마음 읽어")를 함께 따라 외친다.', base: '네 마디 구호를 리듬 블록으로 보고 따라 외친다.', challenge: '구호를 쉼표 자리를 바꿔 다시 짜 보고 짝과 외친다(교사 진행).' },
        intro: {
          teacher: '"진짜 사과의 네 가지를 리듬으로 외워 볼게요. 인-정-해-요(쉼), 마-음-읽-어(쉼), 약-속-해-요(쉼), 바-로-잡-아(쉼)." 시연 단추로 리듬 블록 네 마디가 놓이는 것을 보이고 손뼉을 치며 따라 외친다. "사과는 말만 하면 돼요"라는 말이 나오면 "넷째 \'바로잡아\'는 말이 아니라 행동이에요. 엎은 물감은 어떻게 바로잡을까요?"라고 묻는다.',
          student: '리듬 블록을 보며 사과 네 단계 구호를 손뼉에 맞춰 따라 외쳐 보아요.',
          demo: { tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 4, blocks: ['q', 'e', 'qr'], pattern: CHANT }, sequence: [{ rhythm: CHANT.slice(0, 10) }, { rhythm: CHANT }] },
          art: { draw: 'four paper rhythm blocks in a row with small paper notes, paper children clapping hands beside them', banner: '인정·마음·약속·바로잡기', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
      }),
      C({
        id: 'bully.e34.g4-real-apology.activity.apology-order', type: 'activity', title: '사과 네 가지 차례 놓기',
        method: '사과 네 가지 차례 놓기', tool: 'timeline', minutes: 14,
        levels: { easy: '사과 말 카드 3장을 차례대로 놓고, 놓으면 바로 맞는지 알려 준다.', base: '사과 말 카드 4장을 인정 → 마음 → 약속 → 바로잡기 차례로 놓는다.', challenge: '빠진 단계를 메우는 대신 끼어든 핑계 카드 한 장을 빼고 4장을 놓는다.' },
        activity: {
          title: '사과 네 가지 차례 놓기', tool: 'timeline',
          teacher: '"사과할 때 맨 먼저 할 말은? 내가 무엇을 했는지 말하기예요." 카드를 놓은 뒤 처음부터 끝까지 사과하듯 소리 내어 읽게 한다. "\'근데 너도 그랬잖아\'" 카드를 넣으려는 학생에게 "이 말이 들어가면 사과일까요, 따지기일까요?"라고 묻는다. 사과는 "나는 나쁜 아이"라고 말하는 게 아니라 "내가 한 행동"을 말하는 것이라고 짚는다.',
          task: '상황에 맞는 사과 말 카드를 인정 → 마음 → 약속 → 바로잡기 차례로 놓아요.', levels: CARD_LV,
          items: [
            ORD('친구 공책에 낙서했을 때 사과를 차례로 놓아요.', { axis: ['먼저', '나중'] }, [{ id: 'own', text: '"공책에 낙서했어"' }, { id: 'feel', text: '"속상했지?"' }, { id: 'promise', text: '"다신 안 할게"' }, { id: 'fix', text: '"지우개로 지울게"' }], [0, 1, 3], { id: 'but', text: '"근데 너도 그랬잖아"', why: '핑계가 들어가면 사과가 아니라 따지기가 돼요.' }, 0.15),
            ORD('친구 물감을 엎었을 때 사과를 차례로 놓아요.', { axis: ['먼저', '나중'] }, [{ id: 'own', text: '"물감을 엎었어"' }, { id: 'feel', text: '"아까웠지?"' }, { id: 'promise', text: '"조심할게"' }, { id: 'fix', text: '"새로 나눠 줄게"' }], [0, 2, 3], { id: 'luck', text: '"운이 나빴네"', why: '내가 한 일을 운 탓으로 돌리지 않아요.' }, 0.2),
            ORD('별명을 불렀을 때 사과를 차례로 놓아요.', { axis: ['먼저', '나중'] }, [{ id: 'own', text: '"별명을 불렀어"' }, { id: 'feel', text: '"창피했지?"' }, { id: 'promise', text: '"이름만 부를게"' }, { id: 'fix', text: '"애들한테도 말할게"' }], [0, 1, 2], { id: 'joke', text: '"장난인데 왜 그래"', why: '장난이었어도 친구가 아팠다면 사과해요.' }, 0.25,
              { conclude: '진짜 사과는 인정("내가 ~했어") → 마음 읽기 → 다시 안 할 약속 → 바로잡기예요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '진짜 사과의 네 가지를 차례로 써요.', columns: ['차례', '사과의 단계'], cells: [['1', '인정'], ['2', ''], ['3', '약속'], ['4', '']], answer: '마음 읽기, 바로잡기' }] },
      }),
      C({
        id: 'bully.e34.g4-real-apology.activity.apology-rubric', type: 'activity', title: '사과 쪽지 쓰고 기준표로 점검',
        method: '사과 쪽지 쓰고 기준표로 점검', tool: 'rubric-writing', minutes: 14,
        levels: { easy: '사과 쪽지를 한 문장으로 쓰고 기준 2개(잘못한 일·마음)에 표시한다.', base: '두세 문장으로 쓰고 기준 4개(잘못·마음·약속·바로잡기)에 표시한다.', challenge: '받는 친구 입장에서 한 번 더 고쳐 쓰고 기준 5개에 표시한다.' },
        activity: {
          title: '사과 쪽지 쓰고 기준표로 점검', tool: 'rubric-writing',
          teacher: '"가상의 상황이에요. 급식 줄에서 내가 밀쳐 친구가 넘어졌어요. 쪽지에 무엇을 넣으면 진짜 사과가 될까요?" 쓰기 전에 네 가지 기준을 함께 읽는다. 기준을 다 표시했는데 "미안" 한마디뿐인 학생에게 "마음 읽기 문장은 어디 있나요?"라고 묻는다. 쪽지에는 실제 친구 이름 대신 "○○아"라고 쓰게 하고, 실제로 있었던 일은 쓰지 않는다.',
          task: '가상의 상황에 맞는 사과 쪽지를 쓰고, 네 가지 기준표에 스스로 표시해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RW('급식 줄에서 밀쳐 친구가 넘어졌어요. 사과 쪽지를 써요.', '급식 줄에서 내가 밀쳐 친구가 넘어진 가상의 상황이에요. 사과 쪽지를 써요.', '○○아, 급식 줄에서 내가 밀어서 넘어지게 해서 미안해. 무릎이 아프고 놀랐지? 다음엔 줄에서 밀지 않을게. 보건실에 같이 가 줄게.', 0.2),
            RW('친구 공책에 낙서했어요. 사과 쪽지를 써요.', '내가 친구 공책에 장난으로 낙서한 가상의 상황이에요. 사과 쪽지를 써요.', '○○아, 네 공책에 낙서해서 미안해. 아끼는 공책이라 속상했지? 다시는 허락 없이 쓰지 않을게. 내가 지우개로 지워 줄게.', 0.25),
            RW('친구를 놀이에서 뺐어요. 사과 쪽지를 써요.', '쉬는 시간 놀이에서 내가 친구를 일부러 뺀 가상의 상황이에요. 사과 쪽지를 써요.', '○○아, 놀이에서 너를 빼서 미안해. 혼자 서 있어서 외로웠지? 앞으로는 먼저 같이 하자고 할게. 내일 쉬는 시간에 같이 놀자.', 0.3,
              { conclude: '진짜 사과 쪽지에는 잘못한 일·친구 마음·다시 안 할 약속·바로잡을 일이 모두 들어가요.' }),
          ],
        },
        worksheet: { items: [{ type: 'check', prompt: '내 사과 쪽지에 들어간 것에 표시해요.', options: RUB }] },
        notes: '모든 상황은 가상이다. 쪽지에 실제 친구 이름이나 실제로 있었던 일을 쓰지 않게 하고, 쓴 쪽지를 친구에게 실제로 건네게 하지 않는다.',
      }),
      C({
        id: 'bully.e34.g4-real-apology.activity.accept-dilemma', type: 'activity', title: '갈림길: 사과를 받았을 때',
        method: '갈림길: 사과를 받았을 때', tool: 'dilemma', minutes: 26,
        levels: { easy: '갈림 1번, 보기 2개 가운데 고르고 결과를 본다.', base: '갈림 2번, 보기 3개씩 고르며 결과를 따라간다(장면 셋).', challenge: '갈림 3번 — 바른 길 끝에 실수한 친구가 바뀐 다음 장면이 이어진다.' },
        activity: {
          title: '갈림길: 사과를 받았을 때', tool: 'dilemma',
          teacher: '"사과를 받았는데 아직 속상하면, 꼭 \'괜찮아\'라고 해야 할까요?" 결과 장면을 소리 내어 읽고 다음 장면에서 다시 고른다. "사과받으면 무조건 괜찮다고 해야 해요"라는 말에는 "속상한 마음이 금방 사라지지 않을 수도 있어요. \'아직 속상하지만 사과는 고마워\'도 괜찮은 대답이에요"라고 말해 준다. 흉을 보는 길을 고른 학생에게 "그러면 사과한 친구는 다시 바뀔 기회가 있을까요?"라고 묻는다.',
          task: '사과를 받은 장면을 읽고 보기를 골라요. 결과를 보고 다음 장면에서 또 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL('사과를 받았지만 아직 속상해요.', {
              text: '이안이가 "물감 엎어서 미안해, 새로 나눠 줄게"라고 사과했어요. 다온이는 아직 속상해요. 내가 다온이라면?', motif: 'cloud',
              choices: [
                { id: 'force', text: '억지로 "괜찮아" 한다', result: '속상한 마음이 그대로 남았어요.', impact: [{ who: '다온이', text: '마음이 무거워요', tone: 0 }], why: '아직 속상하면 그 마음을 말해도 돼요.' },
                { id: 'honest', text: '"아직 속상하지만 사과는 고마워"', result: '이안이가 "기다릴게" 했어요.', ending: '솔직하게 말하고 사과도 받았어요.', next: {
                  text: '이안이가 새 물감을 들고 와 "같이 다시 그릴래?" 해요.', choices: [
                    { id: 'yes', text: '"응, 같이 그리자"', result: '둘이 함께 새 그림을 완성했어요.', impact: [{ who: '다온이와 이안이', text: '다시 친해졌어요', tone: 1 }], ending: '사과와 바로잡기가 마음을 풀었어요.' },
                    { id: 'later', text: '"오늘은 혼자 그릴래, 내일 같이 하자"', result: '이안이가 고개를 끄덕였어요.', impact: [{ who: '다온이', text: '마음을 정리했어요', tone: 1 }], ending: '내 마음 속도에 맞춰 대답했어요.' },
                    { id: 'throw', text: '물감을 밀어낸다', result: '이안이가 머쓱해서 돌아갔어요.', impact: [{ who: '이안이', text: '바로잡을 기회를 잃었어요', tone: -1 }], why: '바로잡으려는 행동은 받아 주거나 다음을 약속해요.' },
                  ] } },
                { id: 'gossip', text: '다른 친구들에게 이안이 흉을 본다', result: '반에 이안이 흉이 퍼졌어요.', impact: [{ who: '이안이', text: '낙인찍혀요', tone: -1 }], why: '흉을 보면 사과한 친구가 바뀔 기회를 잃어요.' },
              ] }, [['honest', 'yes'], ['honest', 'later']],
            { third: { text: '일주일 뒤, 이안이가 미술 시간에 물감을 조심히 옮겨요.', choices: [
              { id: 'notice', text: '"요즘 조심히 하네, 고마워"', result: '이안이가 환하게 웃었어요.', impact: [{ who: '이안이', text: '뿌듯해요', tone: 1 }], ending: '바뀐 행동을 알아봐 주니 둘 다 편해졌어요.' },
              { id: 'remind', text: '"또 엎지 마"', result: '이안이가 움찔했어요.', impact: [{ who: '이안이', text: '아직 의심받아요', tone: -1 }], why: '바뀐 행동은 낙인 대신 응원해요.' },
              { id: 'pass', text: '아무 말 안 한다', result: '평소처럼 지나갔어요.', impact: [{ who: '둘 다', text: '그대로예요', tone: 0 }] },
            ] }, pick: 'notice' }, 0.2),
            DIL('"미안" 한마디만 하고 또 웃어요.', {
              text: '시우가 내 별명을 부르고 "미안~" 하며 또 웃었어요. 진짜 사과 같지 않아요.', motif: 'star',
              choices: [
                { id: 'say', text: '"웃으면서 하면 사과 같지 않아"', result: '시우가 웃음을 멈췄어요.', ending: '사과가 마음에 닿지 않는다고 말했어요.', next: {
                  text: '시우가 "그럼 어떻게 해?" 하고 물어요.', choices: [
                    { id: 'teach', text: '"뭘 했는지 말하고, 다시 안 하겠다고 해 줘"', result: '시우가 "별명 불러서 미안해, 이제 이름만 부를게" 했어요.', impact: [{ who: '나와 시우', text: '마음이 풀렸어요', tone: 1 }], ending: '바라는 사과를 말하니 진짜 사과가 왔어요.' },
                    { id: 'never', text: '"됐어, 너랑 안 놀아"', result: '시우가 다시 웃으며 가 버렸어요.', impact: [{ who: '둘 다', text: '멀어졌어요', tone: -1 }], why: '바라는 것을 말하면 사과가 바뀔 수 있어요.' },
                    { id: 'hit', text: '시우 팔을 친다', result: '이번엔 내가 사과할 일이 생겼어요.', impact: [{ who: '시우', text: '아파요', tone: -1 }], why: '화가 나도 몸으로 갚지 않아요.' },
                  ] } },
                { id: 'okay', text: '"응, 괜찮아" 하고 넘긴다', result: '다음 날 시우가 또 별명을 불렀어요.', impact: [{ who: '나', text: '또 속상해요', tone: -1 }], why: '진짜 사과가 아니면 괜찮다고 하지 않아도 돼요.' },
                { id: 'tell', text: '친구들에게 "시우는 원래 그래" 한다', result: '시우에게 나쁜 이름표가 붙었어요.', impact: [{ who: '시우', text: '낙인찍혀요', tone: -1 }], why: '사람이 아니라 행동을 말해요.' },
              ] }, [['say', 'teach']],
            { third: { text: '다음 날 시우가 반에서 내 이름을 바르게 불러요.', choices: [
              { id: 'thanks', text: '"이름 불러 줘서 고마워"', result: '시우가 쑥스럽게 웃었어요.', impact: [{ who: '시우', text: '바뀐 게 기뻐요', tone: 1 }], ending: '바뀐 행동을 알아봐 주었어요.' },
              { id: 'test', text: '"얼마나 가나 보자"', result: '시우가 기운이 빠졌어요.', impact: [{ who: '시우', text: '의심받아요', tone: -1 }], why: '바뀐 행동을 의심하면 다시 돌아가기 쉬워요.' },
              { id: 'nothing', text: '모른 척한다', result: '평소처럼 지나갔어요.', impact: [{ who: '둘 다', text: '그대로예요', tone: 0 }] },
            ] }, pick: 'thanks' }, 0.25),
            DIL('친구가 사과했는데 다른 친구들이 계속 놀려요.', {
              text: '하람이가 서아를 놀이에서 뺀 일을 사과했어요. 그런데 반 친구들이 "하람이는 원래 빼는 애"라고 해요.', motif: 'house',
              choices: [
                { id: 'defend', text: '"하람이 사과했어. 그 말은 그만하자"', result: '친구들이 "그래?" 하고 멈췄어요.', ending: '사과한 친구에게 붙은 이름표를 떼 주었어요.', next: {
                  text: '서아가 "나는 아직 좀 서운해" 해요.', choices: [
                    { id: 'both', text: '"서운한 마음도 괜찮아. 천천히 같이 놀자"', result: '셋이 조금씩 다시 어울렸어요.', impact: [{ who: '서아와 하람이', text: '사이가 풀려 가요', tone: 1 }], ending: '서운한 마음과 바뀔 기회를 함께 지켰어요.' },
                    { id: 'push', text: '"사과했잖아, 빨리 괜찮다고 해"', result: '서아가 더 서운해했어요.', impact: [{ who: '서아', text: '마음을 몰라줘요', tone: -1 }], why: '사과받은 친구에게 괜찮다고 서두르게 하지 않아요.' },
                    { id: 'side', text: '"그럼 하람이랑 놀지 마"', result: '하람이가 다시 혼자가 됐어요.', impact: [{ who: '하람이', text: '외로워요', tone: -1 }], why: '편을 가르면 회복이 어려워요.' },
                  ] } },
                { id: 'agree', text: '"맞아, 원래 그래" 맞장구친다', result: '하람이가 고개를 숙였어요.', impact: [{ who: '하람이', text: '바뀔 기회를 잃어요', tone: -1 }], why: '"원래 그래"는 낙인이에요.' },
                { id: 'quiet', text: '모른 척한다', result: '놀림이 계속됐어요.', impact: [{ who: '하람이', text: '혼자 견뎌요', tone: -1 }], why: '사과한 친구를 계속 놀리면 또 다른 폭력이 돼요.' },
              ] }, [['defend', 'both']],
            { third: { text: '한 달 뒤, 하람이가 새로 온 친구를 먼저 놀이에 끼워 줘요.', choices: [
              { id: 'cheer', text: '"하람아, 멋지다!" 한다', result: '하람이가 더 신나서 친구를 챙겼어요.', impact: [{ who: '하람이', text: '자신감이 생겼어요', tone: 1 }], ending: '낙인 대신 응원이 행동을 바꿨어요.' },
              { id: 'old', text: '"너 예전엔 뺐잖아"', result: '하람이가 움츠러들었어요.', impact: [{ who: '하람이', text: '아파요', tone: -1 }], why: '바뀐 친구에게 지난 일로 이름표를 붙이지 않아요.' },
              { id: 'silent', text: '아무 말 안 한다', result: '평소처럼 지나갔어요.', impact: [{ who: '모두', text: '그대로예요', tone: 0 }] },
            ] }, pick: 'cheer' }, 0.3, { conclude: '사과를 받아도 아직 속상할 수 있어요. 솔직하게 말하되, 사과한 친구에게 이름표를 붙이지 않고 바뀔 기회를 줘요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '사과를 받았는데 아직 속상하면?', options: ['억지로 괜찮다고 해요', '"아직 속상하지만 사과는 고마워"', '흉을 봐요'], answer: '"아직 속상하지만 사과는 고마워"' }, { type: 'short', prompt: '사과한 친구가 바뀌었을 때 해 줄 응원 말을 써요.' }] },
        notes: FICTION,
      }),
      C({
        id: 'bully.e34.g4-real-apology.wrap.apology-check', type: 'wrap', title: '진짜 사과 점검표',
        method: '진짜 사과 점검표', tool: 'timer', minutes: 6,
        levels: { easy: '오늘 연습한 사과에 기준 2개(잘못·마음)를 점검한다.', base: '기준 4개를 점검하고 부족한 하나를 출구 2번에 쓴다.', challenge: '기준 4개를 점검하고, 부족한 기준을 채운 말을 짝에게 들려준다(교사 진행).' },
        wrap: {
          teacher: '"오늘 쓴 사과 쪽지를 떠올려 볼까요? 네 가지 가운데 들어간 것에 표시해요." 점검 칸을 하나씩 읽고 스스로 표시하게 한다. 부족한 기준이 있는 학생을 나무라지 않고 "찾은 것이 바로 다음 사과를 더 좋게 만드는 열쇠예요"라고 말해 준다.',
          exitTicket: [
            SELF('진짜 사과 점검', RUB, '오늘 연습한 사과에 들어간 것에 표시해요.', 4),
            { type: 'short', prompt: '내 사과에서 가장 부족했던 기준 하나와 채울 말을 써요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '진짜 사과 점검',
          items: [
            { type: 'check', prompt: '진짜 사과에 들어갈 것에 표시해요.', options: RUB.concat('"근데 너도 그랬잖아"') },
            { type: 'short', prompt: '"미안" 한마디 사과를 진짜 사과로 바꿔 써요.' },
          ],
          easy: { note: '"내가 ~했어"부터 떠올려요.', items: [{ type: 'choice', prompt: '진짜 사과의 첫 말은?', options: ['"내가 ~했어"', '"근데 너도"'], answer: '"내가 ~했어"' }] },
        },
      }),
      C({
        id: 'bully.e34.g4-real-apology.wrap.no-label', type: 'wrap', title: '낙인 말과 응원 말 나누기',
        method: '낙인 말과 응원 말 나누기', tool: 'wordcards', minutes: 6,
        levels: { easy: '카드 2장을 낙인 말과 응원 말 바구니에 나눈다.', base: '카드 4장을 나눈다.', challenge: '카드 6장을 나누고, 낙인 카드 하나를 응원 말로 바꿔 출구 2번에 쓴다.' },
        wrap: {
          teacher: '"\'쟤는 원래 그래\'를 들은 친구는 바뀌고 싶을까요?" 카드를 나눈 뒤 낙인 말과 응원 말을 하나씩 소리 내어 견주게 한다. "사실이니까 말해도 돼요"라는 학생에게 "지난 행동이 그 친구의 전부일까요? 응원 말은 다음 행동을 바꿔요"라고 말해 준다.',
          exitTicket: [
            EX('wordcards', SORT('카드를 낙인 말과 응원 말로 나누어요.', { mode: 'sort' }, ['낙인 말', '응원 말'], [['쟤는 원래 그래', '또 너지?'], ['다음엔 잘할 거야', '바뀐 거 멋지다']], 1, [['그런 애랑 놀지 마'], ['같이 해 보자']], 0.15)),
            { type: 'short', prompt: '낙인 말 하나를 응원 말로 바꿔 써요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '낙인 대신 응원',
          items: [
            { type: 'table', prompt: '낙인 말을 응원 말로 바꿔 써요.', columns: ['낙인 말', '응원 말'], cells: [['쟤는 원래 그래', ''], ['또 너지?', '']], answer: '다음엔 잘할 거야, 바뀐 거 멋지다' },
            { type: 'short', prompt: '사과한 친구에게 해 줄 응원 말을 써요.' },
          ],
          easy: { note: '"다음엔 잘할 거야"를 떠올려요.', items: [{ type: 'choice', prompt: '응원 말은?', options: ['다음엔 잘할 거야', '쟤는 원래 그래'], answer: '다음엔 잘할 거야' }] },
        },
      }),
    );
  }


  PaperLessons.registerModules(M);
})();
