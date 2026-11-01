/* 창체 자율·자치활동 — 초3-4 모듈 내용(edu-module.v1). 형식·작성 규칙: MODULES_BUILD.md, 계획: framework/events-auto.json 의 auto 초3-4.
 * 근거: sources/changche/research-changche.md — 교육부 고시 제2022-33호 [별책 40] 창의적 체험활동 교육과정
 *   <표 2>(p.8) 자율활동(주제 탐구·적응 및 개척·프로젝트형 봉사활동), 자치활동(기본생활습관 형성·관계 형성 및 소통·공동체 자치),
 *   <표 5>(p.13-14) 초등 운영 중점, p.15 "일상생활에 필요한 질서와 예절을 익혀 기본 생활 습관을 형성".
 * 초3-4 기준: 상황 판단(그림+짧은 글), 차례 정하기, 고른 이유 말하기, 짝 토의, 간단한 표·그림그래프. 법 조문·통계 해석·긴 글쓰기는 쓰지 않는다.
 * 학급 규칙·역할·회의·봉사·탐구는 모두 가상의 학급과 가명(한두 글자)으로 한다. 학생 자신의 가정·성적·친구 관계를 묻거나 채점하지 않는다
 *   (고르는 문항은 그림 속 가상 인물의 일이고, 내 다짐·내 마음은 채점하지 않는 talk·short·mood·스스로 점검으로만 받는다).
 *   특정 학교·지역·단체 이름은 쓰지 않는다(기관은 '주민센터'·'소방서'처럼 보통 이름만). 그래프·투표·기록 자료는 모두 가상이며 화면 제목에 '가상'을 밝힌다.
 *   시간·횟수·값(타이머 분·초, 예산 원)은 근거 자료의 수치가 아니라 '우리 반 약속'·'가상 값'이다.
 * 주제 12개(3학년 6 · 4학년 6) × 도입 2 · 활동 4 · 정리 2 = 계획 모듈 96개.
 *
 * 체계도 계획대로 하지 못해 바꾼 것(교구 한계 — levels 글은 실제 설정대로 적었다):
 *   - g4-adapt.intro.body: body 교구에 '손' 칸이 없어 가슴(심장)·배·어깨로 짚고, 손은 학생이 자기 손을 쥐었다 펴며 짚는다(notes).
 *   - map 모듈(g3-adapt.activity.where 등): 문항마다 핀 하나. '상황 1·2·3개'는 쉬움 = 핀 자리 이름 읽기 글자, 기본 = 이름만, 도전 = '왜 여기' 보기 고르기로 나눴다.
 *   - wordcards '하나 고르기'(g3-habit.wrap.pick 등): 내 다짐은 채점하지 않으므로, 교구는 좋은 습관 카드 담기(함정 카드 빼기)로 채점하고 고른 하나는 짝에게 말하기·활동지로 받는다.
 *   - collage '감사 문구·응원 문구·하는 일 넣기': 판에 글을 쓸 수 없어 스스로 점검 칸('말로 붙였어요')과 활동지 글쓰기로 받는다.
 *   - timer '사진 기록'(g3-serve.activity.do·g4-serve.wrap.do): 사진은 교사가 장소 전·후만 찍는다(학생 얼굴 없이). 학생은 기록판 그리기로 남긴다.
 *   - emotion branch '두 장면': 문항(장면)은 단계마다 같은 수다. 도전은 결과·마음이 고른 뒤에만 보이게(revealAfterCheck) 했다.
 *   - story·timeline '빠뜨린 장면 찾기·말풍선·날짜 붙이기': 도전 단계에 틀린 카드 한 장이 섞이는 판으로 했다(날짜는 셋째 문항의 '주' 칸 잇기).
 *
 * 사람 확인: (근거 파일 research-changche.md 에 세부 수칙이 없어 일반 생활 지식으로 쓴 문장 — 발행 전 확인처에서 대조)
 *   - auto.e34.g3-adapt.intro.diff: "3학년부터 과학·사회·영어(·도덕·체육·음악·미술)를 따로 배운다" — 교육부 2022 개정 초등학교 교육과정 총론 교과 편제.
 *   - auto.e34.g3-adapt.activity.where: 다쳤을 때 보건실·보건 선생님, 책은 도서관·사서 선생님, 음식 알레르기는 영양 선생님께 — 학교마다 담당이 다를 수 있음(학교 업무 분장 확인).
 *   - auto.e34.g3-habit.activity.save·wrap.bar: 빈 교실 불 끄기, 냉방 중 창문 닫기, 안 쓰는 기기·충전기 플러그 뽑기 — 한국에너지공단 에너지 절약 안내.
 *   - auto.e34.g3-habit.activity.recycle: 분리배출 차례(비우기→헹구기→라벨·뚜껑 떼기→갈래별로), 종이컵은 일반 종이와 따로 모으기,
 *       깨진 유리는 학생이 만지지 않기 — 환경부 「재활용품 분리배출 가이드라인」·지자체 배출 안내(지역마다 갈래가 다를 수 있음).
 *   - auto.e34.g3-rel.activity.steps·change, wrap.practice: 나-전달법 세 부분(일어난 일·내 마음·바라는 것) — 상담·생활지도 일반 기법(교육부·시도교육청 인성교육 자료).
 *   - auto.e34.g3-self.intro.bad·activity.three: 좋은 규칙의 세 조건(공평·지킬 수 있음·구체적) — 체계도 concepts 의 정리이며 출처 자료 대조 필요.
 *   - auto.e34.g3-inq.activity.library: 도서관 갈래 표지(분류 번호)로 책 찾기 — 한국십진분류법(KDC)·학교도서관 안내.
 *   - auto.e34.g3-inq.wrap.source: 출처에 제목·만든 곳(지은이·누리집)·찾은 날짜를 남긴다 — 국립중앙도서관·학교도서관 정보 활용 교육 자료.
 *   - auto.e34.g3-serve.activity.sort·do, g4-serve.intro.safe·activity.sort·wrap.do: 봉사 안전(장갑·집게 쓰기, 깨진 유리·전선·찻길은 어른께 알리기,
 *       선생님과 함께 다니기) — 국민재난안전포털 생활안전·학교 현장체험 안전 안내.
 *   - auto.e34.g4-adapt.intro.body·activity.relax: 긴장하면 가슴이 두근거리고 배가 아프거나 어깨가 굳을 수 있다, 천천히 숨쉬기·어깨 돌리기로 풀 수 있다
 *       — 국가정신건강정보포털·학생정신건강 지원 자료. 숨쉬기 횟수·시간은 우리 반 약속 값이다.
 *   - auto.e34.g4-habit.intro.pet·activity.order·duty: 물고기 먹이는 알맞은 양만, 돌보기 전후 손 씻기, 당번 기록 — 일반 사육 안내(과학 교과서 동물 기르기).
 *   - auto.e34.g4-self.activity.order·meet·record: 학급 회의 절차(개회→안건 알리기→토의→표결→결과 발표→폐회)와 사회자·기록자가 하는 말 — 체계도 method 의 절차이며
 *       시도교육청 학생자치 안내 자료와 대조 필요.
 *   - auto.e34.g4-serve.activity.who·sort: 소방서(불·구조), 경찰서(안전·길), 주민센터(동네 생활 민원), 도서관(책 빌려줌), 고장 난 가로등·놀이기구는
 *       관할 기관에 알린다 — 실제 신고처는 지자체·안전신문고 안내로 확인(기관 이름만 쓰고 전화번호는 쓰지 않았다).
 *   - auto.e34.g4-serve.activity.tools: 준비물 값(장갑·봉투·집게 등)은 모두 가상 값이다.
 */
(function () {
  const BASE = { schema: 'edu-module.v1', domain: 'auto', band: '초3-4' };
  const T = (topic, grade) => (o) => Object.assign({}, BASE, { topic: `auto.e34.${topic}`, grades: [grade] }, o);
  const M = [];
  const strip = (p) => String(p).replace(/[.?!]$/, '');
  const rev = (a) => a.slice().reverse();
  const idOf = (c) => (typeof c === 'string' ? c : c.id);
  const mix = (groups) => { const out = []; const n = Math.max(...groups.map((g) => g.length)); for (let i = 0; i < n; i++) for (const g of groups) if (g[i] != null) out.push(g[i]); return out; };
  const count = (groups) => groups.reduce((a, g) => a + g.length, 0);
  const slotId = (s) => (typeof s === 'string' ? s : s.id);
  const sortT = (slots, groups) => ({ sort: Object.fromEntries(slots.map((s, i) => [slotId(s), groups[i].map(idOf)])) });
  const MOOD = { type: 'mood', prompt: '오늘 공부를 마친 내 마음은 어떤가요?' };
  const CH = (prompt, options, answer, explain, d) => ({ type: 'choice', prompt, options, answer, difficulty: d || 0.15, explain });

  // 나누기(sortboard 글 카드·mindmap sort): 기본 = groups, 쉬움 = 칸마다 앞에서 ne장, 도전 = 칸마다 hard 카드를 더함
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

  // 차례 놓기(story·timeline order): 기본 = 장면 전부, 쉬움 = drop 번째를 뺀 판, 도전 = 틀린 카드(trap) 한 장이 섞여 그것을 빼고 놓는다
  //   base.named = 이야기 칸 이름(처음·다음·끝)을 쓴다(story). 없으면 자리 수만 준다(timeline).
  const NAMED = { 2: ['처음', '끝'], 3: ['처음', '다음', '끝'], 4: ['처음', '다음', '그다음', '끝'] };
  const ORD = (prompt, base, steps, drop, trap, d, more) => {
    const o = Object.assign({}, base); const named = o.named; delete o.named;
    const sl = (n) => (named ? NAMED[n] : n);
    const ids = steps.map((c) => c.id);
    const easy = steps.filter((_, i) => i !== drop);
    const mixed = steps.slice(); mixed.splice(Math.min(2, mixed.length), 0, trap);
    const p = strip(prompt);
    return {
      prompt, toolOptions: Object.assign(o, { mode: 'order', slots: sl(steps.length), cards: rev(steps) }), target: { order: ids }, difficulty: d,
      levels: {
        easy: { prompt: `${p}(${easy.length}장).`, toolOptions: { slots: sl(easy.length), cards: rev(easy) }, target: { order: easy.map((c) => c.id) } },
        challenge: { prompt: `${p}. 틀린 카드 한 장은 빼요.`, toolOptions: { cards: rev(mixed) }, target: { order: ids } },
      },
      ...more,
    };
  };

  // 짝 잇기(emotion·story·timeline match): rows = [[왼쪽 말, 카드 글], …]. 쉬움 = 앞 ne줄, 기본 = 앞 nb줄, 도전 = 모든 줄(+ 함정 카드 trap)
  const MT = (prompt, base, rows, ne, nb, trap, d, more) => {
    const slots = rows.map((r, i) => ({ id: `r${i + 1}`, label: r[0] }));
    const tg = (n) => ({ match: Object.fromEntries(rows.slice(0, n).map((r, i) => [`r${i + 1}`, r[1]])) });
    const cardsOf = (n, t) => { const c = rows.slice(0, n).map((r) => r[1]); if (t) c.splice(1, 0, t); return rev(c); };
    const p = strip(prompt); const nc = rows.length;
    const lv = { easy: { prompt: `${p}(${ne}줄).`, toolOptions: { slots: slots.slice(0, ne), cards: cardsOf(ne) }, target: tg(ne) } };
    if (nc > nb || trap) lv.challenge = { prompt: `${p}${nc > nb ? `(${nc}줄)` : ''}${trap ? '. 남는 카드가 하나 있어요' : ''}.`, toolOptions: { slots, cards: cardsOf(nc, trap) }, target: tg(nc) };
    return { prompt, toolOptions: Object.assign({}, base, { mode: 'match', slots: slots.slice(0, nb), cards: cardsOf(nb) }), target: tg(nb), difficulty: d, levels: lv, ...more };
  };

  // 말풍선 채우기(story fill): rows = [[말풍선 글(___ 빈칸), 정답 카드], …], wrong = 함정 카드. 쉬움 = 앞 e칸, 기본 = 앞 b칸, 도전 = 전부
  const FILLN = (prompt, base, who, rows, wrong, e, b, d, more) => {
    const slots = rows.map((r, i) => ({ id: `b${i + 1}`, who, label: r[0] }));
    const tg = (k) => ({ fill: Object.fromEntries(rows.slice(0, k).map((r, i) => [`b${i + 1}`, r[1]])) });
    const cardsOf = (k) => rev(rows.slice(0, k).map((r) => r[1]).concat(wrong.slice(0, Math.max(1, k - 1))));
    const p = strip(prompt);
    return {
      prompt, toolOptions: Object.assign({}, base, { mode: 'fill', slots: slots.slice(0, b), cards: cardsOf(b) }), target: tg(b), difficulty: d,
      levels: {
        easy: { prompt: `${p}(${e}칸).`, toolOptions: { slots: slots.slice(0, e), cards: cardsOf(e) }, target: tg(e) },
        challenge: { prompt: `${p}(${rows.length}칸).`, toolOptions: { slots, cards: cardsOf(rows.length) }, target: tg(rows.length) },
      },
      ...more,
    };
  };

  // 담기(wordcards·emotion·kitchen pick): good = 담을 카드, bad = 함정 카드. 쉬움 = good 앞 ne[0]장 + bad 앞 ne[1]장, 도전 = 함정 카드 extra 를 더함
  const PICK = (prompt, base, good, bad, ne, extra, d, more) => {
    const eg = good.slice(0, ne[0]); const eb = bad.slice(0, ne[1]);
    const p = strip(prompt);
    const lv = { easy: { prompt: `${p}(${eg.length + eb.length}장).`, toolOptions: { cards: mix([eg, eb]) }, target: { pick: eg.map(idOf) } } };
    if (extra && extra.length) lv.challenge = { prompt: `${p}(${good.length + bad.length + extra.length}장).`, toolOptions: { cards: mix([good, bad.concat(extra)]) }, target: { pick: good.map(idOf) } };
    return { prompt, toolOptions: Object.assign({ mode: 'pick' }, base, { cards: mix([good, bad]) }), target: { pick: good.map(idOf) }, difficulty: d, levels: lv, ...more };
  };

  // 어떻게 할까 고르기(emotion branch): ok = 바른 보기 id(또는 목록). 쉬움 = 바른 보기 + 첫 틀린 보기, 도전 = 결과·마음은 맞힌 뒤에만 보인다
  const BR = (prompt, situation, choices, ok, d, more) => {
    const oks = [].concat(ok);
    const easy = [choices.find((c) => c.id === oks[0]), choices.find((c) => !oks.includes(c.id))];
    return {
      prompt, toolOptions: { mode: 'branch', situation, choices }, target: { choice: ok }, difficulty: d,
      levels: { easy: { toolOptions: { choices: easy }, target: { choice: oks[0] } }, challenge: { toolOptions: { revealAfterCheck: true } } },
      ...more,
    };
  };

  // 칸 지도 핀: 도전 단계는 '왜 여기일까' 보기 고르기를 함께 한다(ask)
  const PIN = (map, prompt, target, why, d, more) => ({
    prompt, toolOptions: map, target, difficulty: d,
    levels: { challenge: { prompt: `${strip(prompt)}. 까닭도 골라요.`, toolOptions: { ask: { q: why.q, choices: why.choices } }, target: Object.assign({}, target, { pick: why.answer }) } },
    ...more,
  });

  // 스스로 점검(timer selfCheck) 출구 질문: 쉬움 앞 e칸, 기본 앞 b칸, 도전 전부
  const SELF = (title, checks, prompt, e, b) => ({
    type: 'tool', tool: 'timer', options: { title }, prompt: prompt || '오늘 한 것에 스스로 표시해요.', target: { selfCheck: checks.slice(0, b || 3) }, difficulty: 0.1,
    levels: { easy: { target: { selfCheck: checks.slice(0, e || 2) } }, challenge: { target: { selfCheck: checks.slice() } } },
  });
  // 활동 문항의 스스로 점검(timer selfCheck): 쉬움 앞 e칸, 기본 앞 b칸, 도전 전부
  const SCHK = (prompt, title, checks, e, b, d, more) => {
    const p = strip(prompt);
    return {
      prompt, toolOptions: { title }, target: { selfCheck: checks.slice(0, b) }, difficulty: d,
      levels: { easy: { prompt: `${p}(${e}칸).`, target: { selfCheck: checks.slice(0, e) } }, challenge: { prompt: `${p}(${checks.length}칸).`, target: { selfCheck: checks.slice() } } },
      ...more,
    };
  };
  // 순서 카드(timer order): steps = 바른 차례. 쉬움 = drop 번째를 뺀 판, 도전 = 기본 그대로(또는 extra 단계까지)
  const TORD = (prompt, title, steps, drop, d, more) => {
    const easy = steps.filter((_, i) => i !== drop);
    const sh = (a) => (a.length < 3 ? rev(a) : a.slice(1).concat(a.slice(0, 1)).reverse());
    return {
      prompt, toolOptions: { title, cards: sh(steps) }, target: { order: steps.slice() }, difficulty: d,
      levels: { easy: { prompt: `${strip(prompt)}(${easy.length}장).`, toolOptions: { cards: sh(easy) }, target: { order: easy } } },
      ...more,
    };
  };
  // 활동 전 안전 점검(timer safety): 쉬움 = 앞 e칸만 보이는 점검표
  const SAFE = (prompt, title, list, e, d, more) => ({
    prompt, toolOptions: { title, safety: list }, target: { safety: true }, difficulty: d,
    levels: { easy: { prompt: `${strip(prompt)}(${e}칸).`, toolOptions: { safety: list.slice(0, e) } } },
    ...more,
  });

  // 그래프(chart): 그림그래프·막대그래프 판. rows = [[이름, 가상 값], …]
  const PIC = (title, rows, o) => Object.assign({ type: 'picture', title: `${title}(가상)`, unit: '명', icon: 'person', icons: [{ value: 1, name: '1명' }], data: rows }, o || {});
  const BAR = (title, rows, o) => Object.assign({ type: 'bar', title: `${title}(가상)`, unit: '번', max: 10, scale: 1, data: rows }, o || {});
  const topOf = (rows) => rows.reduce((b, r, i) => (r[1] > rows[b][1] ? i : b), 0);
  const VOTE = (title, rows, question) => ({ tool: 'chart', options: PIC(title, rows, { mode: 'read', xLabel: '고른 카드', yLabel: '고른 친구 수', question, choices: rows.map((r) => r[0]) }), sequence: [{ pick: topOf(rows) }] });

  // 학교 칸 지도(가상의 학교 — 칸 자리는 서로의 위치만 살린다)
  const SCHOOL = {
    title: '가상의 우리 학교', grid: [6, 4],
    regions: [
      { name: '교실', cells: [[0, 0], [1, 0]] }, { name: '보건실', cells: [[2, 0]] }, { name: '교무실', cells: [[3, 0]] }, { name: '도서관', cells: [[4, 0], [5, 0]] },
      { name: '복도', cells: [[0, 1], [1, 1], [2, 1], [3, 1], [4, 1], [5, 1]] },
      { name: '신발장', cells: [[0, 2]] }, { name: '급식실', cells: [[1, 2], [2, 2]] }, { name: '체육관', cells: [[3, 2], [4, 2]] }, { name: '화장실', cells: [[5, 2]] },
      { name: '화단', cells: [[0, 3], [1, 3]] }, { name: '운동장', cells: [[2, 3], [3, 3], [4, 3], [5, 3]] },
    ],
  };
  const CARD_LV = { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } };
  const BOARD_LV = { easy: { instant: true, showCount: true }, base: {}, challenge: { shuffle: true } };
  const MAP_LV = { easy: { readout: true }, base: {}, challenge: {} };
  const SAME = { easy: {}, base: {}, challenge: {} };

  // ======================================================================================================
  // 3학년 · 학교생활과 도움 청하기 (자율활동 — 적응 및 개척 활동)
  // ======================================================================================================
  {
    const C = T('g3-adapt', 3);
    const HARD = [['긴 수업 시간', 5], ['새 과목 공부', 8], ['준비물 챙기기', 6], ['특별실 찾아가기', 3]];
    const HARD_Q = (o) => PIC('3학년이 되어 어려운 점', HARD, Object.assign({ mode: 'read', xLabel: '어려운 점', yLabel: '고른 친구 수' }, o));
    M.push(
      C({
        id: 'auto.e34.g3-adapt.intro.diff', type: 'intro', title: '2학년과 3학년, 무엇이 달라졌을까',
        method: '2학년·3학년 달라진 점 고르기', tool: 'sortboard', minutes: 6,
        levels: { easy: '카드 4장(과학·영어·국어·급식)이 바구니에 나뉘는 것을 함께 본다.', base: '카드 6장이 "달라졌어요/같아요"로 나뉘는 것을 보고 하나씩 따라 말한다.', challenge: '나뉜 카드 하나를 골라 왜 달라졌는지(또는 같은지) 까닭을 짝에게 말한다.' },
        intro: {
          teacher: '"3학년이 되고 나서 2학년 때와 무엇이 달라졌나요?" 두세 명의 생각을 듣고(기다릴 반응: "과학을 배워요", "영어 시간이 생겼어요") 시연 단추로 카드가 "달라졌어요/같아요" 바구니에 나뉘는 모습을 보인다. "다 바뀌어서 어려워요"라는 말이 나오면 "그래도 그대로인 것도 있어요. 급식이나 국어는 어떤가요?"라고 되물어 달라진 것과 같은 것을 함께 본다. 오늘은 달라진 점에 맞는 적응 방법을 세운다고 밝힌다.',
          student: '2학년 때와 견주어 달라진 것과 같은 것을 나누어 보고, 가장 크게 달라진 것을 짝에게 말해 보아요.',
          demo: { tool: 'sortboard', options: { slots: ['달라졌어요', '같아요'], cards: ['과학을 배워요', '급식을 먹어요', '영어를 배워요', '국어를 배워요', '사회를 배워요', '아침에 등교해요'] }, sequence: [{ sort: { 달라졌어요: ['과학을 배워요', '영어를 배워요'], 같아요: ['급식을 먹어요', '국어를 배워요'] } }, { sort: { 달라졌어요: ['과학을 배워요', '영어를 배워요', '사회를 배워요'], 같아요: ['급식을 먹어요', '국어를 배워요', '아침에 등교해요'] } }] },
          art: { draw: 'a paper cut classroom door with a sign showing grade three, paper children holding new science and english books walking in', banner: '3학년, 무엇이 달라졌을까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '학생 개인의 2학년 때 일(담임·성적·친구)을 묻지 않고, 학년 전체에 같은 교과·생활 변화만 다룬다.',
      }),
      C({
        id: 'auto.e34.g3-adapt.intro.people', type: 'intro', title: '학교에서 일하는 분과 일터 잇기',
        method: '학교에서 일하는 분 그림 짝 짓기', tool: 'emotion', minutes: 6,
        levels: { easy: '보건 선생님·사서 선생님, 두 짝이 이어지는 것을 함께 본다.', base: '영양 선생님까지 세 짝이 이어지는 것을 보고 하는 일을 하나씩 말한다.', challenge: '담임 선생님까지 네 짝을 보고, 그분께 언제 도움을 청할지 짝에게 말한다.' },
        intro: {
          teacher: '"학교에는 우리를 돕는 분들이 많아요. 보건 선생님은 어디에 계실까요?" 시연 단추로 보건 선생님·사서 선생님·영양 선생님·담임 선생님이 일터와 차례로 이어지는 모습을 보인다. 짝이 이어질 때마다 "이분께는 언제 찾아가면 될까요?"라고 묻는다(기다릴 반응: "다쳤을 때요", "책을 찾을 때요"). "모르는 어른께 말하면 혼나요"라는 말이 나오면 "학교에서 일하는 분들은 우리를 도우려고 계세요. 찾아가서 \'도와주세요\' 하면 돼요"라고 짚는다.',
          student: '학교에서 일하는 분과 그분이 계신 곳을 이어 보고, 언제 찾아가면 좋을지 짝에게 말해 보아요.',
          demo: { tool: 'emotion', options: { mode: 'match', slots: [{ id: 'nurse', label: '보건 선생님' }, { id: 'lib', label: '사서 선생님' }, { id: 'food', label: '영양 선생님' }, { id: 'home', label: '담임 선생님' }], cards: ['교실', '급식실', '도서관', '보건실'], weather: false }, sequence: [{ match: { nurse: '보건실', lib: '도서관' } }, { match: { nurse: '보건실', lib: '도서관', food: '급식실' } }, { match: { nurse: '보건실', lib: '도서관', food: '급식실', home: '교실' } }] },
          art: { draw: 'a paper cut school building cut away into rooms, a nurse room with a bed, a library with shelves and a cafeteria with trays, a paper teacher waving from each room', banner: '누가 어디에서 도와줄까?', extra: [{ motif: 'heart', x: 300, y: 96 }] },
        },
        notes: '학교마다 담당 이름(보건교사·사서교사·영양교사 등)이 다를 수 있다. 우리 학교에서 부르는 이름으로 바꿔 말한다.',
      }),
      C({
        id: 'auto.e34.g3-adapt.activity.chart', type: 'activity', title: '어려운 점 그림그래프',
        method: '반 친구들이 어려운 점 그림그래프', tool: 'chart', minutes: 14,
        levels: { easy: '어려운 점 3칸의 그림그래프를 채우고 3칸 가운데에서 읽는다.', base: '어려운 점 4칸의 그림그래프를 채우고 가장 많은 것과 한 칸의 수를 읽는다.', challenge: '4칸을 채운 뒤 두 번째로 많은 것과, 가장 많은 것과 가장 적은 것의 차이까지 읽는다.' },
        activity: {
          title: '어려운 점 그림그래프', tool: 'chart',
          teacher: '"가상의 3학년 한 반 22명이 \'3학년이 되어 가장 어려운 점\'을 하나씩 골랐어요. 사람 그림 하나가 친구 한 명이에요." 이 자료는 수업을 위해 지은 가상의 조사라고 먼저 말한다. 표의 수를 소리 내어 읽으며 그림을 채운다. "가장 많은 것만 중요해요"라는 학생에게 "3명이 고른 \'특별실 찾아가기\'도 그 친구들에게는 어려운 일이에요. 같이 도울 방법이 있을까요?"라고 묻는다. 다음 활동에서 이 가운데 하나를 골라 적응 방법을 세운다고 밝힌다.',
          task: '가상의 반 조사 표를 보고 그림그래프를 채운 뒤, 많이 고른 어려운 점을 읽어요.', levels: SAME,
          items: [
            { prompt: '표를 보고 어려운 점 그림그래프를 채워요.', toolOptions: PIC('3학년이 되어 어려운 점', HARD, { mode: 'build', showTable: true, xLabel: '어려운 점', yLabel: '고른 친구 수' }), target: { build: true }, difficulty: 0.15,
              levels: { easy: { prompt: '표를 보고 어려운 점 3칸을 채워요.', toolOptions: { data: HARD.slice(0, 3), given: [0] } } } },
            { prompt: '가장 많은 친구가 고른 어려운 점은 무엇일까요?', toolOptions: HARD_Q({ question: '가장 많이 고른 것은?', choices: HARD.map((r) => r[0]) }), target: { pick: 1 }, difficulty: 0.15,
              levels: { easy: { prompt: '세 칸 가운데 가장 많이 고른 것은?', toolOptions: { data: HARD.slice(0, 3), choices: HARD.slice(0, 3).map((r) => r[0]) } }, challenge: { prompt: '두 번째로 많이 고른 어려운 점은 무엇일까요?', toolOptions: { question: '두 번째로 많은 것은?' }, target: { pick: 2 } } } },
            { prompt: '\'준비물 챙기기\'를 고른 친구는 몇 명일까요?', toolOptions: HARD_Q({ question: '준비물 챙기기는 몇 명?', choices: ['5명', '6명', '8명'] }), target: { pick: 1 }, difficulty: 0.2,
              levels: { easy: { toolOptions: { data: HARD.slice(0, 3) } }, challenge: { prompt: '가장 많은 것과 가장 적은 것은 몇 명 차이일까요?', toolOptions: { question: '8명과 3명의 차이는?', choices: ['3명', '5명', '11명'] }, target: { pick: 1 } } },
              conclude: '많이 고른 어려움도, 적게 고른 어려움도 적응 방법을 세우면 줄일 수 있어요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '그래프를 보고 친구 수를 써요.', columns: ['어려운 점', '친구 수(명)'], cells: [['새 과목 공부', ''], ['준비물 챙기기', ''], ['특별실 찾아가기', '']], answer: '8, 6, 3' }] },
        notes: '자료는 가상이다. 우리 반 실제 조사를 하려면 이름 없이 손들기로 하고, 어려운 점을 고르지 않아도 되게 한다.',
      }),
      C({
        id: 'auto.e34.g3-adapt.activity.plan', type: 'activity', title: '적응 방법 차례 놓기',
        method: '적응 방법 고르고 실천 차례 놓기', tool: 'story', minutes: 13,
        levels: { easy: '방법 카드 2장(처음·끝)을 차례로 놓는다. 놓으면 바로 맞는지 알려 준다.', base: '방법 카드 3장을 처음·다음·끝 차례로 놓는다.', challenge: '맞지 않는 카드 한 장이 섞인 4장에서 그것을 빼고 3장을 놓은 뒤, 그 차례인 까닭을 짝에게 말한다.' },
        activity: {
          title: '적응 방법 차례 놓기', tool: 'story',
          teacher: '"\'새 과목 공부\'가 어렵다면 맨 먼저 무엇을 하면 좋을까요?" 카드를 다 놓으면 "처음에 ○○하고, 다음에 ○○하고, 끝으로 ○○해요." 틀로 짝에게 말하게 한다. "그냥 참으면 돼요"라는 카드를 고르려는 학생에게 "참기만 하면 다음 시간에는 덜 어려울까요? 누구에게 물어볼 수 있을까요?"라고 묻는다. 적응은 혼자 견디는 것이 아니라 방법을 세우고 도움을 청하는 것이라는 점을 짚는다.',
          task: '어려운 점 하나를 보고, 그것을 줄이는 방법 카드를 해 볼 차례대로 놓아요.', levels: CARD_LV,
          items: [
            ORD('\'새 과목 공부\'가 어려울 때 차례로 놓아요.', { named: true, title: '새 과목 공부' }, [{ id: 'mark', text: '모르는 곳 표시하기' }, { id: 'ask', text: '선생님께 여쭤보기' }, { id: 'again', text: '배운 곳 다시 읽기' }], 1, { id: 'bear', text: '그냥 참고 넘기기', why: '참고 넘기면 모르는 것이 쌓여요. 표시하고 여쭤봐요.' }, 0.15),
            ORD('\'준비물 챙기기\'가 어려울 때 차례로 놓아요.', { named: true, title: '준비물 챙기기' }, [{ id: 'table', text: '내일 시간표 보기' }, { id: 'list', text: '준비물 적기' }, { id: 'bag', text: '전날 가방에 넣기' }], 1, { id: 'morning', text: '아침에 급히 찾기', why: '아침에 급히 찾으면 빠뜨리기 쉬워요. 전날 챙겨요.' }, 0.2),
            ORD('\'특별실 찾아가기\'가 어려울 때 차례로 놓아요.', { named: true, title: '특별실 찾아가기' }, [{ id: 'board', text: '학교 안내도 보기' }, { id: 'together', text: '친구와 함께 가기' }, { id: 'alone', text: '다음엔 혼자 가 보기' }], 2, { id: 'wander', text: '아무 데나 돌아다니기', why: '아무 데나 다니면 길을 잃고 늦어요. 안내도부터 봐요.' }, 0.25, { conclude: '어려운 점은 방법을 세워 차례대로 해 보면 줄어들어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '공부하다 모르는 곳이 있으면 표시하고 선생님께 ___.', answer: '여쭤봐요' }] },
      }),
      C({
        id: 'auto.e34.g3-adapt.activity.where', type: 'activity', title: '도움 청할 곳 지도에서 찾기',
        method: '상황에 맞는 도움 청할 곳 지도에서 찾기', tool: 'map', minutes: 14,
        levels: { easy: '핀을 꽂으면 그 자리 이름이 바로 보인다(읽기 글자).', base: '상황 글만 보고 이름이 적힌 학교 지도에 핀을 꽂는다.', challenge: '핀을 꽂은 뒤 "왜 그곳일까요?" 보기에서 까닭도 고른다.' },
        activity: {
          title: '도움 청할 곳 찾기', tool: 'map',
          teacher: '"쉬는 시간에 운동장에서 넘어져 무릎이 까졌어요. 어디로 가야 할까요?" 핀을 꽂을 때마다 "그곳에서 누가 도와주실까요? 무엇이라고 말할까요?"를 함께 묻는다. 다쳤는데 교실로 가서 참겠다는 학생에게 "다친 곳은 누가 가장 잘 살펴 주실까요?"라고 묻는다. 갈 곳을 모를 때는 담임 선생님께 먼저 여쭈면 된다는 것도 짚는다.',
          task: '그림 속 친구에게 일어난 일을 읽고, 도움을 청하러 갈 곳에 핀을 꽂아요.', levels: MAP_LV,
          items: [
            PIN(SCHOOL, '하늘이가 넘어져 무릎이 까졌어요. 어디로 갈까요?', { region: '보건실' }, { q: '왜 보건실일까요?', choices: ['다친 곳을 살펴 주셔서', '조용히 쉴 수 있어서', '책이 많아서'], answer: 0 }, 0.15),
            PIN(SCHOOL, '하늘이가 곤충 책을 찾고 싶어요. 어디로 갈까요?', { region: '도서관' }, { q: '누가 도와주실까요?', choices: ['영양 선생님', '사서 선생님', '보건 선생님'], answer: 1 }, 0.2),
            PIN(SCHOOL, '하늘이가 못 먹는 음식이 급식에 나왔어요. 어디로 갈까요?', { region: '급식실' }, { q: '누구께 여쭐까요?', choices: ['영양 선생님', '사서 선생님', '체육 선생님'], answer: 0 }, 0.25, { conclude: '갈 곳을 알면 혼자 참지 않고 알맞은 분께 도움을 청할 수 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '이럴 때 갈 곳을 써요.', columns: ['이런 일', '갈 곳'], cells: [['넘어져 다쳤어요', ''], ['책을 찾고 싶어요', '']], answer: '보건실, 도서관' }] },
        notes: '"다쳐 본 적 있나요?"처럼 겪은 일을 묻지 않는다. 그림 속 가상의 친구(하늘이) 일로만 말한다.',
      }),
      C({
        id: 'auto.e34.g3-adapt.activity.ask', type: 'activity', title: '도움 청하는 말 역할놀이',
        method: '도움 청하는 말 역할놀이', tool: 'timer', minutes: 13,
        levels: { easy: '말 차례 카드 3장(부르기·일 말하기·고맙습니다)을 놓고, 말틀을 보며 한 번 해 본다.', base: '말 차례 카드 4장을 놓고, 짝과 역할을 바꿔 2번 해 보게 타이머를 맞춘 뒤 해 본 것을 표시한다.', challenge: '4장을 놓고 3번(새 상황 하나 더) 하게 맞추며, 새 상황에서 해 본 것까지 표시한다.' },
        activity: {
          title: '도움 청하는 말 연습', tool: 'timer',
          teacher: '"\'저, 보건 선생님\' 하고 부른 다음, 무슨 일인지 말하고, 바라는 것을 말해요. 다 듣고 나면 \'고맙습니다\'예요." 교사가 학교 직원 역할을 맡아 한 번 보인 뒤, 짝끼리 학생·직원 역할로 말해 보게 한다. 타이머가 울리면 역할을 바꾼다. "그냥 \'아파요\'만 말하면 돼요"라는 학생에게 "선생님이 어디가 어떻게 아픈지 아실까요? 무슨 일이 있었는지도 말해 볼까요?"라고 묻는다. 도움을 청하는 것은 창피한 일이 아니라 나를 지키는 일이라는 점을 짚는다.',
          task: '도움 청하는 말의 차례를 맞추고, 짝과 역할을 바꾸며 말해 본 뒤 표시해요.', levels: SAME,
          items: [
            TORD('도움 청하는 말의 차례를 놓아요.', '도움 청하는 말', ['"저, 선생님" 부르기', '무슨 일인지 말하기', '바라는 것 말하기', '"고맙습니다"'], 2, 0.1),
            { prompt: '말하기 1분, 바꾸기 10초로 2번 하게 맞춰요.', toolOptions: { title: '역할놀이(우리 반 약속)', labels: ['말하기', '바꾸기'], plan: { work: 30, rest: 5, rounds: 1 } }, target: { plan: { work: 60, rest: 10, rounds: 2 } }, difficulty: 0.15,
              hints: ['말하기·바꾸기·번 칸을 차례로 봐요.', '말하기 칸은 초로 맞춰요. 1분은 60초예요.', '문제 글의 시간과 횟수를 그대로 맞춰요.'],
              levels: { easy: { prompt: '말하기 1분으로 1번 하게 맞춰요.', target: { plan: { work: 60, rounds: 1 } } }, challenge: { prompt: '새 상황까지 3번 하게 맞춰요.', target: { plan: { work: 60, rest: 10, rounds: 3 } } } } },
            SCHK('역할놀이에서 해 본 것에 표시해요.', '역할놀이 점검', ['선생님을 불렀어요', '무슨 일인지 말했어요', '"고맙습니다" 했어요', '새 상황도 해 봤어요'], 2, 3, 0.15, { conclude: '부르고, 무슨 일인지 말하고, 바라는 것을 말하고, 고맙다고 해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '말틀의 빈칸을 채워요.', text: '"저, 선생님. 운동장에서 넘어졌어요. 다친 곳을 ___ 주세요."', answer: '봐' }] },
        notes: '교사가 진행하는 역할놀이다. 말하기 시간(1분)은 우리 반 약속 값이다. 말하기 어려운 학생은 말틀 카드를 보고 읽어도 된다.',
      }),
      C({
        id: 'auto.e34.g3-adapt.wrap.check', type: 'wrap', title: '적응 계획 스스로 점검',
        method: '적응 계획 스스로 점검표', tool: 'timer', minutes: 7,
        levels: { easy: '해 볼 방법 2칸에 스스로 표시한다.', base: '해 볼 방법 3칸에 스스로 표시한다.', challenge: '3칸에 표시하고, 짝이 서로의 점검표를 보고 확인해 준 칸까지 표시한다.' },
        wrap: {
          teacher: '"오늘 세운 방법 가운데 이번 주에 해 볼 것은 무엇인가요?" 점검 칸을 함께 읽고 스스로 표시하게 한다. 표시는 잘했는지가 아니라 해 볼 마음을 정하는 것이라고 밝힌다. 출구 2번에서 "도움을 청하면 창피해요"를 고른 학생에게 "선생님도 모르는 것이 있으면 다른 선생님께 여쭤봐요. 묻는 사람이 더 빨리 배워요"라고 말해 준다. 일주일 뒤 같은 점검표로 다시 돌아본다.',
          exitTicket: [
            SELF('이번 주 적응 계획', ['모르는 곳을 표시할게요', '전날 가방을 챙길게요', '안내도를 보고 갈게요', '짝과 서로 확인했어요'], '이번 주에 해 볼 방법에 표시해요.'),
            CH('3학년 생활이 어려울 때 바른 생각은?', ['혼자 참아야 해요', '방법을 세우고 도움을 청해요', '도움을 청하면 창피해요'], 1, '어려울 때 방법을 세우고 도움을 청하는 것이 적응이에요.'),
            MOOD,
          ],
        },
        worksheet: {
          title: '3학년 적응 계획',
          items: [
            { type: 'check', prompt: '이번 주에 해 볼 방법에 표시해요.', options: ['모르는 곳 표시하고 여쭤보기', '전날 가방 챙기기', '안내도 보고 특별실 가기'] },
            { type: 'short', prompt: '내가 해 볼 적응 방법 하나를 한 줄로 써요.' },
          ],
          easy: { note: '"처음에 ○○하고, 다음에 ○○해요."로 써 봐요.', items: [{ type: 'draw', prompt: '전날 가방을 챙기는 내 모습을 그려요.' }] },
        },
      }),
      C({
        id: 'auto.e34.g3-adapt.wrap.thanks', type: 'wrap', title: '도와주시는 분께 감사 카드',
        method: '도와주시는 분께 감사 카드', tool: 'collage', minutes: 7,
        levels: { easy: '조각 2개 이상으로 감사 카드를 꾸미고 표시한다.', base: '조각 4개 이상으로 꾸미고 표시한다.', challenge: '조각 4개 이상으로 꾸미고, 그분이 하시는 일을 말로 넣은 것까지 표시한다(글은 활동지에 쓴다).' },
        wrap: {
          teacher: '"오늘 알아본 분들 가운데 한 분께 감사 카드를 만들어 볼까요? 그분은 우리를 위해 무슨 일을 하시나요?" 조각을 붙이며 그분이 하시는 일을 한 문장으로 말하게 한다(예: "다친 곳을 치료해 주셔서 고맙습니다"). 출구 2번에서 사서 선생님을 고르지 못한 학생에게 "책이 많은 곳은 어디였나요? 그곳에 계신 분은요?"라고 되묻는다. 완성한 카드 글은 활동지에 옮겨 써 실제로 전해도 된다.',
          exitTicket: [
            { type: 'tool', tool: 'collage', options: { shapes: ['heart', 'star', 'circle', 'leaf', 'rect'], colors: ['빨강', '분홍', '노랑', '초록', '파랑'], sizes: ['s', 'm', 'l'] }, prompt: '감사 카드를 조각으로 꾸며요.', target: { selfCheck: ['카드를 꾸몄어요', '고마운 분을 정했어요'], minPieces: 4 }, difficulty: 0.1,
              levels: { easy: { target: { selfCheck: ['카드를 꾸몄어요', '고마운 분을 정했어요'], minPieces: 2 } }, challenge: { target: { selfCheck: ['카드를 꾸몄어요', '고마운 분을 정했어요', '하시는 일을 말했어요'], minPieces: 4 } } } },
            CH('책을 찾을 때 도와주시는 분은?', ['영양 선생님', '사서 선생님', '보건 선생님'], 1, '도서관의 사서 선생님이 책 찾기를 도와주세요.'),
            MOOD,
          ],
        },
        worksheet: {
          title: '고마운 분께',
          items: [
            { type: 'short', prompt: '감사 카드에 쓸 말을 한 줄로 써요.' },
            { type: 'table', prompt: '하시는 일을 써요.', columns: ['고마운 분', '하시는 일'], cells: [['보건 선생님', ''], ['사서 선생님', '']], answer: '다친 곳을 살펴 주세요, 책 찾기를 도와주세요' },
          ],
          easy: { note: '"○○해 주셔서 고맙습니다."로 써 봐요.', items: [{ type: 'draw', prompt: '고마운 분께 드릴 카드를 그려요.' }] },
        },
      }),
    );
  }

  // ======================================================================================================
  // 3학년 · 준비물·과제 스스로, 전기와 분리배출 (자치활동 — 기본생활습관 형성 활동: 자기 관리·환경⋅생태의식)
  // ======================================================================================================
  {
    const C = T('g3-habit', 3);
    const ROOM = {
      title: '가상의 우리 교실', grid: [6, 4],
      regions: [
        { name: '텔레비전', cells: [[0, 0]] }, { name: '칠판', cells: [[1, 0], [2, 0], [3, 0]] }, { name: '컴퓨터', cells: [[4, 0], [5, 0]] },
        { name: '창문', cells: [[0, 1], [0, 2], [0, 3]] }, { name: '책상', cells: [[1, 1], [2, 1], [3, 1], [4, 1], [1, 2], [2, 2], [3, 2], [4, 2]] },
        { name: '전등 스위치', cells: [[5, 1]] }, { name: '사물함', cells: [[1, 3], [2, 3], [3, 3], [4, 3]] }, { name: '냉난방기', cells: [[5, 2], [5, 3]] },
      ],
    };
    const LIGHT = [['월', 3], ['화', 5], ['수', 2], ['목', 6], ['금', 4]];
    M.push(
      C({
        id: 'auto.e34.g3-habit.intro.bag', type: 'intro', title: '내일 시간표 보고 준비물 담기',
        method: '내일 준비물 고르기', tool: 'kitchen', minutes: 6,
        levels: { easy: '미술 시간 준비물 2개가 바구니에 담기는 것을 함께 본다.', base: '미술·체육 준비물 4개가 담기는 것을 보고 시간표와 하나씩 견준다.', challenge: '담긴 것 가운데 내일 필요 없는 물건(장난감)을 찾아 빼야 하는 까닭을 말한다.' },
        intro: {
          teacher: '"가상의 친구 나래의 내일 시간표는 국어·미술·체육이에요. 가방에 무엇을 넣어야 할까요?" 시연 단추로 준비물 카드가 바구니에 담기는 모습을 보인다. "다 넣어 가면 되잖아요"라는 말이 나오면 "가방이 무거워지고, 정말 필요한 것을 찾기 어려워요. 시간표에 맞는 것만 넣으려면 무엇을 먼저 볼까요?"라고 되묻는다. 오늘은 준비물과 과제를 점검표로 스스로 챙기는 법을 배운다고 밝힌다.',
          student: '가상의 친구 나래의 내일 시간표를 보고 가방에 넣을 준비물을 골라 보아요.',
          demo: { tool: 'kitchen', options: { mode: 'pick', basket: '내일 준비물', autoMotif: false, cards: [{ id: 'crayon', text: '크레파스' }, { id: 'toy', text: '장난감 자동차' }, { id: 'paper', text: '도화지' }, { id: 'gym', text: '체육복' }, { id: 'game', text: '게임기' }, { id: 'kor', text: '국어책' }] }, sequence: [{ pick: ['crayon', 'paper'] }, { pick: ['crayon', 'paper', 'gym', 'kor'] }] },
          art: { draw: 'a paper cut school bag open on a desk beside a paper timetable card, crayons, drawing paper and a gym shirt waiting to be packed', banner: '내일 무엇이 필요할까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '학생의 실제 가방·집 형편을 묻지 않는다. 가상의 친구(나래) 시간표로만 한다. 준비물을 마련하기 어려운 학생이 드러나지 않게 학급 공용 준비물을 둔다.',
      }),
      C({
        id: 'auto.e34.g3-habit.intro.light', type: 'intro', title: '교실에서 전기 쓰는 곳 찾기',
        method: '교실 전기 쓰는 곳 찾기', tool: 'map', minutes: 6,
        levels: { easy: '교실 지도에서 전등 스위치·컴퓨터 두 곳에 핀이 꽂히는 것을 본다.', base: '텔레비전까지 세 곳에 핀이 꽂히는 것을 보고 무엇에 쓰는지 말한다.', challenge: '냉난방기까지 네 곳을 보고 그 가운데 아낄 수 있는 곳을 짝에게 말한다.' },
        intro: {
          teacher: '"우리 교실에서 전기를 쓰는 물건은 어디에 있을까요?" 시연 단추로 가상의 교실 칸 지도에 핀이 차례로 꽂히는 모습을 보인다. 핀마다 "이것은 언제 쓰나요? 쓰지 않을 때는 어떻게 할까요?"라고 묻는다(기다릴 반응: "끄면 돼요", "플러그를 뽑아요"). "전기는 아무리 써도 없어지지 않아요"라는 말이 나오면 "전기를 만들려면 무엇이 들까요? 우리가 아끼면 무엇이 줄어들까요?"라고 되물어 전기를 아끼는 것이 환경을 지키는 일과 이어진다는 것을 짚는다.',
          student: '교실 지도에서 전기를 쓰는 곳을 찾아보고, 쓰지 않을 때 어떻게 하면 좋을지 말해 보아요.',
          demo: { tool: 'map', options: ROOM, sequence: [{ pin: [5, 1] }, { pin: [4, 0] }, { pin: [0, 0] }, { pin: [5, 2] }] },
          art: { draw: 'a paper cut classroom seen from above with a light switch, a computer, a television and an air conditioner, small paper pins standing on each', banner: '전기는 어디에서 쓸까?', extra: [{ motif: 'sun', x: 300, y: 96 }] },
        },
      }),
      C({
        id: 'auto.e34.g3-habit.activity.list', type: 'activity', title: '과제 점검표 채우기',
        method: '과제 점검표 채우기', tool: 'timer', minutes: 14,
        levels: { easy: '점검표 2칸만 보이고, 과제 수 2칸을 옮겨 적고, 해 본 것 2칸에 표시한다.', base: '점검표 3칸을 다 확인하고, 과제 수 3칸을 옮겨 적고, 해 본 것 3칸에 표시한다.', challenge: '점검표 4칸을 확인하고, 과제 수 4칸을 옮겨 적고, 해 본 것 4칸에 표시한다.' },
        activity: {
          title: '과제 점검표 채우기', tool: 'timer',
          teacher: '"알림장에 적힌 과제를 점검표로 옮기면 빠뜨리지 않아요." 가상의 친구 나래의 알림장을 함께 읽고 점검표 칸을 하나씩 확인한다. "과제는 생각날 때 하면 돼요"라는 학생에게 "생각이 안 나면 어떻게 될까요? 적어 두면 무엇이 좋을까요?"라고 묻는다. 셋째 문항은 오늘 내가 실제로 해 본 것만 표시하고, 못 한 칸은 비워 두어도 된다고 밝힌다.',
          task: '가상의 친구 나래의 알림장을 보고 점검표를 확인하고, 과제 수를 옮겨 적어요.', levels: SAME,
          items: [
            { prompt: '가방 싸기 전 점검표를 모두 확인해요.', toolOptions: { title: '나래의 점검표', safety: ['알림장을 읽었어요', '숙제를 넣었어요', '준비물을 넣었어요'] }, target: { safety: true }, difficulty: 0.1,
              levels: { easy: { prompt: '가방 싸기 전 점검표 2칸을 확인해요.', toolOptions: { safety: ['알림장을 읽었어요', '숙제를 넣었어요'] } }, challenge: { prompt: '가방 싸기 전 점검표 4칸을 확인해요.', toolOptions: { safety: ['알림장을 읽었어요', '숙제를 넣었어요', '준비물을 넣었어요', '가정통신문을 넣었어요'] } } } },
            { prompt: '알림장(국어 1, 수학 2, 받아쓰기 1)을 옮겨 적어요.', toolOptions: { title: '나래의 과제 수(가상)', unit: '개', fields: ['국어', '수학', '받아쓰기'] }, target: { records: [1, 2, 1] }, difficulty: 0.15,
              levels: { easy: { prompt: '알림장(국어 1, 수학 2)을 옮겨 적어요.', toolOptions: { fields: ['국어', '수학'] }, target: { records: [1, 2] } }, challenge: { prompt: '알림장(국어 1, 수학 2, 받아쓰기 1, 독서 1)을 옮겨 적어요.', toolOptions: { fields: ['국어', '수학', '받아쓰기', '독서'] }, target: { records: [1, 2, 1, 1] } } } },
            SCHK('오늘 내가 해 본 것에 표시해요.', '내 점검(스스로)', ['알림장을 읽었어요', '과제를 점검표에 옮겼어요', '빠진 것을 찾아봤어요', '가방에 넣었어요'], 2, 3, 0.15, { conclude: '과제는 생각날 때가 아니라, 점검표로 확인하고 스스로 마쳐요.' }),
          ],
        },
        worksheet: { items: [{ type: 'check', prompt: '가방 싸기 전 점검표를 만들어요. 넣을 것에 표시해요.', options: ['알림장', '숙제', '준비물', '장난감'] }] },
        notes: '과제를 다 했는지·성적을 채점하지 않는다. 가상의 친구 알림장으로 옮겨 적기를 하고, 셋째 문항은 스스로 점검이다.',
      }),
      C({
        id: 'auto.e34.g3-habit.activity.order', type: 'activity', title: '과제 마치는 차례 놓기',
        method: '과제 마치는 차례 놓기', tool: 'story', minutes: 13,
        levels: { easy: '장면 3장을 처음·다음·끝으로 놓는다. 놓으면 바로 맞는지 알려 준다.', base: '장면 4장을 차례대로 놓은 뒤 확인한다.', challenge: '방해 요소 카드(텔레비전 켜 놓기 같은) 한 장이 섞인 5장에서 그것을 빼고 4장을 놓는다.' },
        activity: {
          title: '과제 마치는 차례 놓기', tool: 'story',
          teacher: '"과제를 끝까지 마치려면 무엇부터 할까요?" 카드를 다 놓으면 반 전체가 차례대로 따라 말한다. 방해 카드를 넣으려는 학생에게 "텔레비전을 켜 놓고 하면 과제가 빨리 끝날까요? 다시 보기를 할 수 있을까요?"라고 묻는다. 마지막 장면이 \'가방에 넣기\'인 까닭(다 해도 두고 오면 낼 수 없다)을 짚는다.',
          task: '과제를 마치는 장면 카드를 하는 차례대로 놓아요.', levels: CARD_LV,
          items: [
            ORD('수학 익힘 과제를 마치는 차례로 놓아요.', { named: true, title: '수학 익힘 과제' }, [{ id: 'check', text: '알림장 확인하기' }, { id: 'do', text: '과제 풀기' }, { id: 'review', text: '다시 보기' }, { id: 'bag', text: '가방에 넣기' }], 2, { id: 'tv', text: '텔레비전 켜 놓기', why: '텔레비전을 켜 두면 마음이 흩어져 과제가 늦어져요.' }, 0.15),
            ORD('독서록 과제를 마치는 차례로 놓아요.', { named: true, title: '독서록 과제' }, [{ id: 'pick', text: '읽을 책 고르기' }, { id: 'read', text: '책 읽기' }, { id: 'write', text: '독서록 쓰기' }, { id: 'pack', text: '공책 챙기기' }], 1, { id: 'game', text: '게임 먼저 하기', why: '게임을 먼저 하면 읽을 시간이 모자라요.' }, 0.2),
            ORD('준비물 과제를 마치는 차례로 놓아요.', { named: true, title: '준비물 과제' }, [{ id: 'note', text: '준비물 적기' }, { id: 'find', text: '준비물 찾기' }, { id: 'tick', text: '점검표에 표시' }, { id: 'put', text: '가방에 넣기' }], 2, { id: 'later', text: '내일 아침에 하기', why: '아침으로 미루면 바빠서 빠뜨리기 쉬워요.' }, 0.25, { conclude: '확인하고, 하고, 다시 보고, 가방에 넣으면 과제를 스스로 마친 거예요.' }),
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '알림장 확인 → 과제 하기 → 다시 보기 → ___에 넣기', answer: '가방' }] },
      }),
      C({
        id: 'auto.e34.g3-habit.activity.save', type: 'activity', title: '전기 아끼는 행동 가려내기',
        method: '전기 아끼는 행동 가려내기', tool: 'sortboard', minutes: 14,
        levels: { easy: '카드 4장, 틀린 바구니에 넣으면 까닭을 말하고 되돌아온다. 바구니에 든 장 수가 보인다.', base: '카드 6장을 다 넣은 뒤 확인한다.', challenge: '헷갈리는 카드 2장이 더해진 8장을 나누고, 고른 까닭을 짝에게 말한다.' },
        activity: {
          title: '전기 아끼는 행동 가려내기', tool: 'sortboard',
          teacher: '"이 행동은 전기를 아끼는 행동일까요, 버리는 행동일까요?" 카드를 넣을 때마다 "왜 그럴까요?"를 한 문장으로 말하게 한다. \'창문 열고 냉방하기\'를 아낀다에 넣는 학생에게 "시원한 바람이 창문으로 나가면 냉방기는 더 오래 돌까요, 덜 돌까요?"라고 묻는다. 끄기·닫기·뽑기 세 가지로 정리한다.',
          task: '교실과 학교에서 하는 행동 카드를 전기를 아끼는 행동과 버리는 행동으로 나누어요.', levels: BOARD_LV,
          items: [
            SORT('교실에서 하는 행동을 나누어요.', {}, ['아껴요', '버려요'], [['빈 교실 불 끄기', '안 쓰는 컴퓨터 끄기', '냉방 중 창문 닫기'], ['창문 열고 냉방하기', '빈 교실 TV 켜 두기', '아무도 없는데 불 켜기']], 2, [['햇빛 밝을 때 창가 불 끄기'], ['충전 끝난 충전기 꽂아 두기']], 0.15),
            SORT('쉬는 시간과 하교할 때 행동을 나누어요.', {}, ['아껴요', '버려요'], [['나갈 때 불 끄기', '모니터 끄고 나가기', '플러그 뽑아 두기'], ['컴퓨터 켜 두고 하교', '선풍기 켜 두고 나가기', '전등 켜 두고 체육관 가기']], 2, [['마지막 사람이 스위치 확인'], ['문 열어 둔 채 난방']], 0.2),
            SORT('특별실에서 하는 행동을 나누어요.', {}, ['아껴요', '버려요'], [['다 쓴 기계 끄기', '쓰는 자리만 불 켜기', '안 보는 화면 끄기'], ['안 보는 화면 켜 두기', '빈 자리 불 다 켜기', '쓴 기계 켜 두고 가기']], 2, [['낮엔 창가 쪽 불 끄기'], ['문 열고 냉방기 켜기']], 0.25, { conclude: '쓰지 않으면 끄고, 냉난방할 때는 닫고, 다 쓰면 뽑아요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '냉방기를 켤 때 전기를 아끼는 행동은?', options: ['창문을 열어요', '창문을 닫아요', '문을 활짝 열어요'], answer: '창문을 닫아요' }] },
      }),
      C({
        id: 'auto.e34.g3-habit.activity.recycle', type: 'activity', title: '분리배출 해 보기',
        method: '쓰레기 분리배출 해 보기', tool: 'timer', minutes: 13,
        levels: { easy: '분리배출 차례 카드 3장을 놓고, 종이·플라스틱·캔 3갈래에 넣은 개수를 적는다.', base: '차례 카드 4장을 놓고, 유리까지 4갈래 개수를 적은 뒤 해 본 것 3칸에 표시한다.', challenge: '4갈래를 적고, 헷갈린 물건(종이컵 등)을 모둠에 말해 본 것까지 4칸에 표시한다.' },
        activity: {
          title: '분리배출 해 보기', tool: 'timer',
          teacher: '"선생님이 깨끗이 씻어 온 재활용품이에요. 모둠마다 바구니 네 개에 나누어 넣어 볼까요?" 넣기 전에 차례 카드를 맞추고, 깨진 유리는 학생이 만지지 않는다는 약속을 먼저 말한다. "종이컵은 종이니까 종이에 넣어요"라는 학생에게 "종이컵 안쪽을 만져 보세요. 매끈한 막이 있지요? 일반 종이와 따로 모아요"라고 말해 준다. 모둠이 넣은 개수를 기록판에 적고 다른 모둠과 견주어 본다.',
          task: '분리배출 차례를 맞추고, 모둠이 갈래마다 넣은 개수를 적은 뒤 해 본 것에 표시해요.', levels: SAME,
          items: [
            TORD('분리배출 차례를 놓아요.', '분리배출 차례', ['내용물 비우기', '물로 헹구기', '라벨·뚜껑 떼기', '갈래별로 넣기'], 2, 0.15),
            { prompt: '모둠이 갈래마다 넣은 개수를 모두 적어요.', toolOptions: { title: '우리 모둠 분리배출 기록', unit: '개', fields: ['종이', '플라스틱', '캔', '유리'] }, target: { records: true }, difficulty: 0.15,
              levels: { easy: { prompt: '모둠이 세 갈래에 넣은 개수를 적어요.', toolOptions: { fields: ['종이', '플라스틱', '캔'] } } } },
            SCHK('분리배출에서 해 본 것에 표시해요.', '분리배출 점검', ['깨끗이 비웠어요', '갈래대로 넣었어요', '모둠과 함께 점검했어요', '헷갈린 것을 말했어요'], 2, 3, 0.2, { conclude: '비우고, 헹구고, 떼고, 나누어 넣어요. 헷갈리면 모둠과 함께 물어봐요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '안쪽에 매끈한 막이 있는 종이컵은?', options: ['일반 종이와 함께', '일반 종이와 따로'], answer: '일반 종이와 따로' }] },
        notes: '교사가 미리 깨끗이 씻고 날카로운 것을 뺀 재활용품만 쓴다. 깨진 유리·뾰족한 캔 뚜껑은 학생이 만지지 않는다. 우리 지역 분리배출 갈래가 다르면 지역 안내에 맞춰 바구니 이름을 바꾼다.',
      }),
      C({
        id: 'auto.e34.g3-habit.wrap.bar', type: 'wrap', title: '전기 아끼기 기록 그래프',
        method: '우리 반 전기 아끼기 기록 그래프', tool: 'chart', minutes: 7,
        levels: { easy: '3일(월·화·수) 막대를 완성한다.', base: '5일 막대를 완성한다.', challenge: '5일을 완성하고, 가장 많은 날과 그날 무엇을 했을지 짝에게 말한다(출구 2번).' },
        wrap: {
          teacher: '"가상의 우리 반이 일주일 동안 빈 교실 불 끄기를 몇 번 했는지 적었어요. 막대로 나타내 볼까요?" 표의 수를 함께 읽으며 막대를 쌓는다. 막대 높이를 눈대중으로 맞추는 학생에게 "눈금을 하나씩 세어 볼까요?"라고 묻는다. 출구 2번에서 가장 많은 날을 찾은 뒤 "그날처럼 하려면 우리 반은 무엇을 약속하면 좋을까요?"라고 물어 다음 주 약속으로 잇는다. 이 기록은 가상 자료이고, 우리 반 기록은 다음 주부터 함께 적는다고 밝힌다.',
          exitTicket: [
            { type: 'tool', tool: 'chart', options: BAR('우리 반 불 끄기 횟수', LIGHT, { mode: 'build', showTable: true, xLabel: '요일', yLabel: '불 끈 횟수' }), prompt: '표를 보고 불 끄기 막대를 완성해요.', target: { build: true }, difficulty: 0.15,
              levels: { easy: { prompt: '표를 보고 3일 막대를 완성해요.', toolOptions: { data: LIGHT.slice(0, 3) } } } },
            CH('불 끄기를 가장 많이 한 날은?', ['월요일', '화요일', '목요일'], 2, '목요일에 6번으로 가장 많아요.'),
            MOOD,
          ],
        },
        worksheet: {
          title: '전기를 아끼는 우리 반',
          items: [
            { type: 'table', prompt: '그래프를 보고 횟수를 써요.', columns: ['요일', '불 끈 횟수(번)'], cells: [['월', ''], ['목', '']], answer: '3, 6' },
            { type: 'short', prompt: '다음 주 우리 반 전기 아끼기 약속을 한 줄로 써요.' },
          ],
          easy: { note: '"쓰지 않으면 끄기"를 떠올려요.', items: [{ type: 'draw', prompt: '빈 교실 불을 끄는 모습을 그려요.' }] },
        },
      }),
      C({
        id: 'auto.e34.g3-habit.wrap.pick', type: 'wrap', title: '이번 주 실천 하나 고르기',
        method: '이번 주 실천 하나 고르기', tool: 'wordcards', minutes: 7,
        levels: { easy: '보기 2장(좋은 습관 1·아닌 것 1) 가운데 좋은 습관을 담는다.', base: '보기 4장 가운데 좋은 습관 2장을 담고, 그 가운데 내가 할 하나를 짝에게 말한다.', challenge: '보기 4장을 담은 뒤, 고른 하나에 까닭을 붙여 활동지에 쓴다.' },
        wrap: {
          teacher: '"오늘 배운 습관 가운데 좋은 습관 카드만 바구니에 담아 볼까요? 그다음 이번 주에 내가 할 것 하나를 정해요." 카드를 담은 뒤 "나는 이번 주에 ○○을 할 거예요. 왜냐하면 ○○이기 때문이에요." 틀로 짝에게 말하게 한다. 무엇을 골랐는지는 채점하지 않고, 정한 하나를 지킬 수 있게 구체적으로 말하는지 듣는다. 출구 2번에서 "종이"를 고른 학생에게 종이컵 안쪽의 막을 다시 떠올리게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'wordcards', options: { mode: 'pick', basket: '좋은 습관', cards: ['전날 가방 챙기기', '아침에 급히 찾기', '나갈 때 불 끄기', '창문 열고 냉방'] }, prompt: '좋은 습관 카드만 담아요.', target: { pick: ['전날 가방 챙기기', '나갈 때 불 끄기'] }, difficulty: 0.1,
              levels: { easy: { toolOptions: { cards: ['전날 가방 챙기기', '아침에 급히 찾기'] }, target: { pick: ['전날 가방 챙기기'] } } } },
            CH('종이컵은 어떻게 모을까요?', ['일반 종이와 함께', '일반 종이와 따로', '아무 데나'], 1, '종이컵은 안쪽 막 때문에 일반 종이와 따로 모아요.'),
            MOOD,
          ],
        },
        worksheet: {
          title: '이번 주 나의 실천',
          items: [
            { type: 'short', prompt: '이번 주에 실천할 습관 하나를 써요.' },
            { type: 'short', prompt: '그 습관을 고른 까닭을 한 줄로 써요.' },
          ],
          easy: { note: '"나는 이번 주에 ○○을 할 거예요."로 써 봐요.', items: [{ type: 'draw', prompt: '이번 주 실천하는 내 모습을 그려요.' }] },
        },
      }),
    );
  }

  // ======================================================================================================
  // 3학년 · 모둠 협력과 나-전달법 (자치활동 — 관계 형성 및 소통 활동)
  // ======================================================================================================
  {
    const C = T('g3-rel', 3);
    M.push(
      C({
        id: 'auto.e34.g3-rel.intro.team', type: 'intro', title: '모둠 역할 그림 고르기',
        method: '모둠 역할 그림 고르기', tool: 'wordcards', minutes: 6,
        levels: { easy: '역할 카드 하나(이끄미)가 바구니에 담기는 것을 보고 하는 일을 함께 말한다.', base: '역할 카드 두 장이 담기는 것을 보고, 해 보고 싶은 역할 하나를 짝에게 말한다.', challenge: '해 보고 싶은 역할과 그 까닭을 "왜냐하면"을 넣어 말한다.' },
        intro: {
          teacher: '"모둠 활동을 할 때 모두가 같은 일을 하면 어떻게 될까요?" 시연 단추로 역할 카드가 바구니에 담기는 모습을 보이고 역할마다 하는 일을 짧게 소개한다(이끄미: 차례 정하기, 기록이: 생각 적기, 발표이: 반에 알리기, 챙기미: 준비물 나누기). "잘하는 사람이 다 하면 빨라요"라는 말이 나오면 "그러면 다른 친구들은 무엇을 배울까요? 다 같이 하면 무엇이 좋아질까요?"라고 되묻는다. 어떤 역할을 고르든 맞고 틀린 것이 없다고 밝힌다.',
          student: '모둠 역할 카드를 보고 해 보고 싶은 역할을 하나 골라 짝에게 까닭과 함께 말해 보아요.',
          demo: { tool: 'wordcards', options: { mode: 'pick', basket: '해 보고 싶은 역할', cards: ['이끄미', '기록이', '발표이', '챙기미'] }, sequence: [{ pick: ['이끄미'] }, { pick: ['이끄미', '기록이'] }] },
          art: { draw: 'a paper cut group table with four paper children, each wearing a small paper badge shaped like a flag, a pencil, a microphone and a basket', banner: '모둠에는 역할이 있어요', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
      }),
      C({
        id: 'auto.e34.g3-rel.intro.scene', type: 'intro', title: '이럴 때 내 마음은?',
        method: '속상한 장면 보고 마음 고르기', tool: 'emotion', minutes: 6,
        levels: { easy: '마음 카드 2장(속상함·당황함)이 담기는 것을 함께 본다.', base: '마음 카드 3장이 담기는 것을 보고 그림 속 친구의 마음을 말해 본다.', challenge: '그 마음이 얼마나 클지(조금·아주 많이) 손가락 다섯 개로 나타내 본다.' },
        intro: {
          teacher: '"그림 속 하늘이의 지우개를 짝이 아무 말 없이 가져갔어요. 하늘이 마음은 어떨까요?" 시연 단추로 마음 카드가 바구니에 담기는 모습을 보인다(기다릴 반응: "속상해요", "놀랐어요"). "그럼 확 뺏어 오면 돼요"라는 말이 나오면 "그러면 둘의 마음은 어떻게 될까요? 내 마음을 말로 알려 주는 방법은 없을까요?"라고 되묻는다. 오늘은 내 마음을 상대가 다치지 않게 전하는 말, 나-전달법을 배운다고 밝힌다.',
          student: '그림 속 하늘이의 마음 카드를 골라 보고, 하늘이가 어떤 말을 하면 좋을지 생각해 보아요.',
          demo: { tool: 'emotion', options: { mode: 'pick', basket: '하늘이의 마음', cards: ['속상함', '기쁨', '당황함', '신남', '서운함'] }, sequence: [{ pick: ['속상함', '당황함'] }, { pick: ['속상함', '당황함', '서운함'] }] },
          art: { draw: 'a paper cut desk with two paper children, one reaching for an eraser on the other\'s side without a word, the other looking surprised with a small storm cloud above', banner: '말없이 가져가면?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '"친구가 내 물건을 가져간 적 있나요?"처럼 겪은 일을 묻지 않는다. 그림 속 가상의 친구 일로만 이야기한다.',
      }),
      C({
        id: 'auto.e34.g3-rel.activity.roles', type: 'activity', title: '역할과 할 일 잇기',
        method: '역할과 할 일 잇기', tool: 'emotion', minutes: 14,
        levels: { easy: '역할 3줄에 할 일 카드를 잇는다. 놓으면 바로 맞는지 알려 준다.', base: '역할 4줄에 할 일 카드를 잇는다.', challenge: '역할 4줄에 맞지 않는 카드 한 장이 섞여 있어, 그 카드를 빼고 잇는다.' },
        activity: {
          title: '역할과 할 일 잇기', tool: 'emotion',
          teacher: '"이끄미는 무슨 일을 할까요? 모든 일을 혼자 다 하는 사람일까요?" 짝을 이을 때마다 "그 역할이 그 일을 하면 모둠에 무엇이 좋을까요?"를 한 문장으로 말하게 한다. \'혼자 다 하기\' 카드를 이끄미에 놓는 학생에게 "이끄미가 다 하면 기록이와 발표이는 무엇을 할까요?"라고 묻는다. 역할은 나누어 맡고 서로 돕는 것이라는 점을 짚는다.',
          task: '모둠 역할 카드와 그 역할이 하는 일을 이어요.', levels: CARD_LV,
          items: [
            MT('모둠 역할과 할 일을 이어요.', { weather: false }, [['이끄미', '차례 정하기'], ['기록이', '생각 적기'], ['발표이', '반에 알리기'], ['챙기미', '준비물 나누기']], 3, 4, '혼자 다 하기', 0.15),
            MT('그림 그리기 활동에서 역할과 할 일을 이어요.', { weather: false }, [['이끄미', '모두 말하게 돕기'], ['기록이', '정한 색 적기'], ['발표이', '그림 소개하기'], ['챙기미', '크레파스 나누기']], 3, 4, '남의 그림 고치기', 0.2),
            MT('이런 일이 생기면 어느 역할이 할까요? 이어요.', { weather: false }, [['한 친구만 말하고 있어요', '이끄미'], ['정한 것을 잊었어요', '기록이'], ['반에 결과를 알려야 해요', '발표이'], ['풀이 모자라요', '챙기미']], 3, 4, '선생님', 0.25, { conclude: '역할을 나누어 맡으면 모두가 모둠 일에 함께할 수 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '역할이 하는 일을 써요.', columns: ['역할', '하는 일'], cells: [['이끄미', ''], ['기록이', '']], answer: '차례 정하기, 생각 적기' }] },
      }),
      C({
        id: 'auto.e34.g3-rel.activity.tower', type: 'activity', title: '종이컵 탑 협력 놀이',
        method: '종이컵 탑 쌓기 협력 놀이', tool: 'timer', minutes: 13,
        levels: { easy: '탑 쌓기 3분으로 타이머를 맞추고, 쌓은 컵 수 1칸을 적고, 협력 점검 2칸에 표시한다.', base: '탑 쌓기 5분으로 맞추고, 두 번 쌓은 컵 수를 적고, 협력 점검 3칸에 표시한다.', challenge: '5분으로 맞추고 두 번째는 말 없이 손짓으로만 쌓은 뒤, 그것까지 협력 점검 4칸에 표시한다.' },
        activity: {
          title: '종이컵 탑 쌓기', tool: 'timer',
          teacher: '"모둠마다 종이컵으로 가장 높은 탑을 쌓아 볼까요? 쌓기 전에 누가 컵을 건네고, 누가 쌓고, 누가 잡아 줄지 정해요." 타이머가 끝나면 모두 손을 떼고 컵 수를 센다. "제가 다 쌓으면 더 높아요"라는 학생에게 "한 사람이 다 하면 다른 친구들은 기다리기만 할까요? 건네주는 사람이 있으면 무엇이 빨라질까요?"라고 묻는다. 높이 겨루기가 아니라 협력하는 말과 행동을 돌아보는 놀이라는 점을 마지막에 짚는다.',
          task: '모둠이 역할을 나누어 종이컵 탑을 쌓고, 쌓은 컵 수와 협력한 것을 적어요.', levels: SAME,
          items: [
            { prompt: '탑 쌓기 5분, 점검 1분으로 1번 하게 맞춰요.', toolOptions: { title: '탑 쌓기(우리 반 약속)', timeUnit: 'min', labels: ['쌓기', '점검'], plan: { work: 2, rest: 2, rounds: 2 } }, target: { plan: { work: 5, rest: 1, rounds: 1 } }, difficulty: 0.15,
              hints: ['쌓기·점검·번 칸을 차례로 봐요.', '이 타이머는 분으로 맞춰요.', '문제 글의 분과 횟수를 그대로 맞춰요.'],
              levels: { easy: { prompt: '탑 쌓기 3분, 점검 1분으로 1번 하게 맞춰요.', target: { plan: { work: 3, rest: 1, rounds: 1 } } } } },
            { prompt: '두 번 쌓은 컵 수를 모두 적어요.', toolOptions: { title: '우리 모둠 탑 기록', unit: '개', fields: ['1번째', '2번째'] }, target: { records: true }, difficulty: 0.15,
              levels: { easy: { prompt: '쌓은 컵 수를 적어요.', toolOptions: { fields: ['쌓은 컵'] } } } },
            SCHK('협력한 것에 표시해요.', '협력 점검', ['역할을 나눴어요', '차례를 지켰어요', '"좋아, 잘했어" 말했어요', '말 없이 손짓으로 했어요'], 2, 3, 0.15, { conclude: '역할을 나누고, 차례를 지키고, 서로 힘이 되는 말을 하면 협력이에요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '탑을 쌓을 때 모둠 친구에게 들은 힘이 되는 말을 하나 써요.' }] },
        notes: '교사가 진행하는 놀이다. 쌓기 시간(3분·5분)은 우리 반 약속 값이다. 모둠끼리 높이를 겨루어 순위를 매기지 않는다.',
      }),
      C({
        id: 'auto.e34.g3-rel.activity.steps', type: 'activity', title: '나-전달법 세 칸 채우기',
        method: '나-전달법 세 칸 채우기', tool: 'story', minutes: 14,
        levels: { easy: '"일어난 일·내 마음" 2칸에 카드를 넣는다. 놓으면 바로 맞는지 알려 준다.', base: '"일어난 일·내 마음·바라는 것" 3칸에 카드를 넣는다.', challenge: '3칸에 넣되, 상대를 탓하는 말 카드 한 장이 섞여 있어 그것을 빼고 넣은 뒤, 내 말로 바꿔 짝에게 말한다.' },
        activity: {
          title: '나-전달법 세 칸', tool: 'story',
          teacher: '"나-전달법은 \'네가 ○○해서, 나는 ○○했어. ○○해 줄래?\' 세 부분이에요." 칸마다 카드를 넣은 뒤 세 칸을 이어 소리 내어 읽게 한다. \'너는 왜 맨날 그래?\' 카드를 넣으려는 학생에게 "이 말을 들은 친구는 내 마음을 알게 될까요, 화가 날까요?"라고 묻는다. 탓하는 말 대신 일어난 일만 말하고, 내 마음과 바라는 것을 붙이면 된다는 점을 짚는다.',
          task: '그림 속 친구의 일을 보고, 나-전달법 세 칸에 알맞은 말 카드를 넣어요.', levels: CARD_LV,
          items: [
            MT('지우개를 말없이 가져갔을 때 세 칸을 채워요.', { title: '지우개 일' }, [['일어난 일', '말없이 지우개를 가져가서'], ['내 마음', '나는 당황했어'], ['바라는 것', '다음엔 먼저 물어봐 줘']], 2, 3, '너는 왜 맨날 그래?', 0.15),
            MT('줄에 끼어들었을 때 세 칸을 채워요.', { title: '줄서기 일' }, [['일어난 일', '내 앞에 끼어들어서'], ['내 마음', '나는 속상했어'], ['바라는 것', '뒤에 줄 서 줄래?']], 2, 3, '저리 비켜!', 0.2),
            MT('모둠 그림에 줄을 그었을 때 세 칸을 채워요.', { title: '모둠 그림 일' }, [['일어난 일', '내 그림에 줄을 그어서'], ['내 마음', '나는 화가 났어'], ['바라는 것', '그리기 전에 말해 줘']], 2, 3, '너 때문에 다 망했어', 0.25, { conclude: '일어난 일, 내 마음, 바라는 것을 차례로 말하면 다투지 않고 마음을 전할 수 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '나-전달법의 빈칸을 채워요.', text: '네가 말없이 가져가서, 나는 ___했어. 다음엔 먼저 물어봐 줘.', answer: '당황' }] },
      }),
      C({
        id: 'auto.e34.g3-rel.activity.change', type: 'activity', title: '너-전달법을 나-전달법으로',
        method: '너-전달법을 나-전달법으로 바꾸기', tool: 'sortboard', minutes: 13,
        levels: { easy: '말 카드 4장을 나눈다. 틀린 바구니에 넣으면 까닭을 말하고 되돌아온다.', base: '말 카드 6장을 다 넣은 뒤 확인한다.', challenge: '헷갈리는 카드 2장이 더해진 8장을 나누고, 너-전달법 카드 하나를 내 말로 나-전달법으로 바꿔 짝에게 말한다.' },
        activity: {
          title: '너-전달법을 나-전달법으로', tool: 'sortboard',
          teacher: '"\'너 때문에 늦었잖아!\'와 \'네가 늦게 와서 나는 걱정했어\'는 무엇이 다를까요?" 카드를 넣을 때마다 "이 말에 \'나는\'이 들어 있나요? 상대를 탓하나요?"를 묻는다. \'나는 네가 싫어\'를 나-전달법에 넣는 학생에게 "\'나는\'으로 시작해도 일어난 일과 바라는 것이 있나요? 친구는 무엇을 바꾸면 될지 알까요?"라고 묻는다. 도전 단계 학생은 너-전달법 하나를 골라 나-전달법으로 바꿔 말한다.',
          task: '말 카드를 상대를 탓하는 너-전달법과 내 마음을 전하는 나-전달법으로 나누어요.', levels: BOARD_LV,
          items: [
            SORT('놀이 시간에 한 말을 나누어요.', {}, ['너-전달법', '나-전달법'], [['너 때문에 졌잖아!', '너는 맨날 반칙해', '왜 너만 해?'], ['공을 안 줘서 나는 서운해', '규칙을 바꿔서 나는 헷갈려', '나도 차례가 있으면 좋겠어']], 2, [['너는 못하잖아'], ['네가 웃어서 나는 창피했어']], 0.15),
            SORT('모둠 활동 때 한 말을 나누어요.', {}, ['너-전달법', '나-전달법'], [['너는 아무것도 안 해', '네 생각은 이상해', '너 때문에 늦었어'], ['같이 해 주면 나는 든든해', '내 말도 들어 주면 좋겠어', '늦어서 나는 걱정됐어']], 2, [['넌 왜 그것도 몰라?'], ['나는 네가 싫어']], 0.2),
            SORT('교실에서 한 말을 나누어요.', {}, ['너-전달법', '나-전달법'], [['시끄러워, 조용히 해!', '너 또 내 거 썼지?', '넌 정리를 안 해'], ['소리가 커서 나는 집중이 안 돼', '내 연필은 물어보고 써 줘', '같이 치우면 나는 기뻐']], 2, [['너는 원래 그래'], ['책상이 젖어서 나는 곤란해']], 0.25, { conclude: '\'너는\'으로 탓하는 말을 \'나는\'으로 마음과 바라는 것을 전하는 말로 바꿔요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '"너 때문에 졌잖아!"를 나-전달법으로 바꿔 써요.' }] },
        notes: '\'나는 네가 싫어\'는 \'나는\'으로 시작하지만 일어난 일·바라는 것이 없어 나-전달법이 아니다(도전 카드). 바구니는 너-전달법에 둔다.',
      }),
      C({
        id: 'auto.e34.g3-rel.wrap.practice', type: 'wrap', title: '짝과 나-전달법 연습',
        method: '짝과 나-전달법 연습', tool: 'timer', minutes: 7,
        levels: { easy: '장면 1개를 짝과 해 보게 타이머를 1번으로 맞춘다.', base: '장면 2개를 하게 2번으로 맞춘다.', challenge: '장면 3개를 하게 3번으로 맞춘다.' },
        wrap: {
          teacher: '"선생님이 장면 카드를 보여 주면, 한 사람은 나-전달법으로 말하고 짝은 \'알려 줘서 고마워, 다음엔 그렇게 할게\'로 대답해요." 타이머 한 번에 장면 하나씩, 역할을 바꿔 가며 한다. 출구 2번에서 너-전달법을 고른 학생에게 "그 말을 들으면 마음이 열릴까요, 닫힐까요?"라고 되묻는다. 짝의 말을 평가하지 않고 들은 그대로 따라 말해 주게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '나-전달법 연습(우리 반 약속)', labels: ['말하기', '바꾸기'], plan: { work: 30, rest: 10, rounds: 1 } }, prompt: '장면 2개를 하게 2번으로 맞춰요.', target: { plan: { rounds: 2 } }, difficulty: 0.1,
              levels: { easy: { prompt: '장면 1개를 하게 맞춰요. 말하기를 40초로요.', target: { plan: { work: 40, rounds: 1 } } }, challenge: { prompt: '장면 3개를 하게 3번으로 맞춰요.', target: { plan: { rounds: 3 } } } } },
            CH('나-전달법으로 한 말은?', ['너 때문에 망쳤어!', '네가 밀어서 나는 아팠어', '넌 원래 그래'], 1, '일어난 일과 내 마음을 말하는 것이 나-전달법이에요.'),
            MOOD,
          ],
        },
        worksheet: {
          title: '나-전달법으로 말해요',
          items: [
            { type: 'blank', prompt: '나-전달법 세 부분을 써요.', text: '일어난 일 → 내 ___ → 바라는 것', answer: '마음' },
            { type: 'short', prompt: '짝에게 들은 대답 가운데 좋았던 말을 한 줄로 써요.' },
          ],
          easy: { note: '"네가 ○○해서, 나는 ○○했어."로 말해 봐요.', items: [{ type: 'draw', prompt: '짝과 나-전달법으로 말하는 모습을 그려요.' }] },
        },
      }),
      C({
        id: 'auto.e34.g3-rel.wrap.check', type: 'wrap', title: '협력하는 말 별점',
        method: '협력하는 말 별점', tool: 'collage', minutes: 7,
        levels: { easy: '오늘 쓴 협력하는 말만큼 별을 1개 이상 붙인다.', base: '별을 2개 이상 붙이고 그 말을 짝에게 들려준다.', challenge: '별을 3개 이상 붙이고, 별마다 어떤 말이었는지 짝에게 말한다.' },
        wrap: {
          teacher: '"오늘 모둠에서 \'같이 하자\', \'고마워\', \'괜찮아\' 같은 협력하는 말을 몇 번 했나요? 그만큼 별을 붙여 볼까요?" 별을 다 붙이면 가장 기억에 남는 말 하나를 짝에게 들려준다. 별이 적다고 속상해하는 학생에게 "오늘 별 하나도 좋은 시작이에요. 다음 모둠 활동에서 하나 더 해 볼까요?"라고 말해 준다. 별 수로 친구끼리 겨루지 않는다고 미리 밝힌다.',
          exitTicket: [
            { type: 'tool', tool: 'collage', options: { shapes: ['star', 'heart', 'circle'], colors: ['노랑', '분홍', '주황', '파랑'], sizes: ['s', 'm', 'l'] }, prompt: '오늘 한 협력하는 말만큼 별을 붙여요.', target: { has: [{ shape: 'star', min: 2 }] }, difficulty: 0.1,
              levels: { easy: { prompt: '협력하는 말을 떠올리며 별을 붙여요.', target: { has: [{ shape: 'star', min: 1 }] } }, challenge: { prompt: '별 3개 이상을 붙이고 말을 떠올려요.', target: { has: [{ shape: 'star', min: 3 }] } } } },
            CH('모둠에서 협력하는 말은?', ['내가 다 할게, 비켜', '같이 해 볼까?', '너는 빠져'], 1, '"같이 해 볼까?"는 모두를 함께하게 하는 말이에요.'),
            MOOD,
          ],
        },
        worksheet: {
          title: '협력하는 말',
          items: [
            { type: 'check', prompt: '협력하는 말에 표시해요.', options: ['같이 하자', '고마워', '너는 빠져', '괜찮아'] },
            { type: 'short', prompt: '다음 모둠 활동에서 꼭 할 협력하는 말을 써요.' },
          ],
          easy: { note: '"같이 하자", "고마워"를 떠올려요.', items: [{ type: 'draw', prompt: '협력하는 말을 하는 우리 모둠을 그려요.' }] },
        },
      }),
    );
  }

  // ======================================================================================================
  // 3학년 · 좋은 학급 규칙과 1인 1역 (자치활동 — 공동체 자치활동)
  // ======================================================================================================
  {
    const C = T('g3-self', 3);
    const JOBS = [['칠판 지우기', 7], ['우유 나르기', 3], ['화분 물 주기', 6], ['불 끄기', 4], ['책 정리', 2]];
    const WHEEL = { shapes: ['circle', 'triangle', 'star', 'heart', 'square'], colors: ['빨강', '주황', '노랑', '초록', '파랑', '보라'], sizes: ['s', 'm', 'l'] };
    M.push(
      C({
        id: 'auto.e34.g3-self.intro.bad', type: 'intro', title: '이상한 규칙 찾기',
        method: '이상한 규칙 찾기', tool: 'sortboard', minutes: 6,
        levels: { easy: '규칙 카드 4장이 "좋은 규칙/고칠 규칙"으로 나뉘는 것을 함께 본다.', base: '규칙 카드 6장이 나뉘는 것을 보고 고칠 규칙을 하나씩 소리 내어 읽는다.', challenge: '고칠 규칙 하나를 골라 왜 고쳐야 하는지 까닭을 짝에게 말한다.' },
        intro: {
          teacher: '"가상의 3학년 한 반이 만든 규칙이에요. \'착하게 살자\'는 지키기 좋은 규칙일까요?" 시연 단추로 규칙 카드가 "좋은 규칙/고칠 규칙"으로 나뉘는 모습을 보인다. "규칙은 많을수록 좋아요"라는 말이 나오면 "규칙이 서른 개면 다 기억하고 지킬 수 있을까요?"라고 되묻는다. \'착하게\'는 무엇을 하라는지 분명하지 않고, \'1모둠만 청소\'는 공평하지 않다는 것을 짚으며 오늘 좋은 규칙의 조건을 배운다고 밝힌다.',
          student: '가상의 반 규칙 카드를 좋은 규칙과 고칠 규칙으로 나누어 보고, 고칠 까닭을 짝에게 말해 보아요.',
          demo: { tool: 'sortboard', options: { slots: ['좋은 규칙', '고칠 규칙'], cards: ['복도에서는 걸어요', '착하게 살자', '쓴 물건은 제자리에', '청소는 1모둠만', '말할 때는 손 들기', '쉬는 시간 화장실 금지'] }, sequence: [{ sort: { '좋은 규칙': ['복도에서는 걸어요', '쓴 물건은 제자리에'], '고칠 규칙': ['착하게 살자', '청소는 1모둠만'] } }, { sort: { '좋은 규칙': ['복도에서는 걸어요', '쓴 물건은 제자리에', '말할 때는 손 들기'], '고칠 규칙': ['착하게 살자', '청소는 1모둠만', '쉬는 시간 화장실 금지'] } }] },
          art: { draw: 'a paper cut classroom notice board with rule cards pinned on it, some with a green paper check and some with a small paper pencil ready to fix them', banner: '이 규칙, 괜찮을까?', extra: [{ motif: 'leaf', x: 300, y: 96 }] },
        },
      }),
      C({
        id: 'auto.e34.g3-self.intro.jobs', type: 'intro', title: '하고 싶은 역할 투표 그래프',
        method: '우리 반 역할 목록 그래프', tool: 'chart', minutes: 6,
        levels: { easy: '역할 3칸의 그림그래프를 함께 읽는다.', base: '역할 5칸의 그림그래프에서 가장 많은 역할을 찾는다.', challenge: '여러 명이 같은 역할에 몰린 칸(겹친 역할)을 찾고, 어떻게 정하면 좋을지 짝에게 말한다.' },
        intro: {
          teacher: '"가상의 반 22명이 해 보고 싶은 1인 1역에 손을 들었어요. 그래프를 보면 무엇이 보이나요?" 시연 단추로 가장 많은 역할이 골라지는 모습을 보인다. "칠판 지우기는 7명인데 자리는 하나예요. 어떻게 하면 좋을까요?"라고 물어(기다릴 반응: "가위바위보요", "돌아가며 해요") 다음 활동의 \'공정하게 정하기\'로 잇는다. "인기 없는 역할은 안 해도 돼요"라는 말이 나오면 "책 정리를 아무도 안 하면 우리 반 책꽂이는 어떻게 될까요?"라고 되묻는다.',
          student: '가상의 반 역할 투표 그래프를 보고, 여러 명이 몰린 역할을 어떻게 정하면 좋을지 생각해 보아요.',
          demo: VOTE('하고 싶은 1인 1역', JOBS, '가장 많은 역할은?'),
          art: { draw: 'a paper cut picture graph on a board with little paper people stacked above job cards like a chalkboard eraser, a milk crate and a watering can', banner: '어떤 역할에 몰렸을까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
      }),
      C({
        id: 'auto.e34.g3-self.activity.three', type: 'activity', title: '규칙의 세 조건 짝 짓기',
        method: '규칙의 세 조건 짝 짓기', tool: 'emotion', minutes: 14,
        levels: { easy: '규칙 2줄에 빠진 조건 카드를 잇는다. 놓으면 바로 맞는지 알려 준다.', base: '규칙 3줄에 빠진 조건(공평·지킬 수 있음·구체적) 카드를 잇는다.', challenge: '맞지 않는 카드 한 장이 섞인 판에서 3줄을 잇고, 셋째 문항(고친 규칙 잇기)을 활동지에 고쳐 쓴다.' },
        activity: {
          title: '규칙의 세 조건', tool: 'emotion',
          teacher: '"좋은 규칙은 공평하고, 지킬 수 있고, 무엇을 할지 구체적이에요. 이 규칙에는 무엇이 빠졌을까요?" 짝을 이을 때마다 "어떻게 고치면 그 조건을 갖출까요?"를 묻는다. \'착하게 지내요\'에 \'공평하지 않아요\'를 놓는 학생에게 "이 규칙을 보고 내일 무엇을 해야 할지 알 수 있나요?"라고 되묻는다. 셋째 문항에서는 고친 규칙을 이어 보고 세 조건을 다 갖췄는지 함께 따져 본다.',
          task: '고칠 규칙 카드에 빠진 조건 카드를 잇고, 고친 규칙도 이어요.', levels: CARD_LV,
          items: [
            MT('규칙에 빠진 조건을 이어요.', { weather: false }, [['착하게 지내요', '구체적이지 않아요'], ['청소는 1모둠만 해요', '공평하지 않아요'], ['쉬는 시간 화장실 금지', '지킬 수 없어요']], 2, 3, '조건을 다 갖췄어요', 0.15),
            MT('이 규칙에는 무엇이 빠졌을까요? 이어요.', { weather: false }, [['교실을 깨끗이 해요', '구체적이지 않아요'], ['우유는 남자만 날라요', '공평하지 않아요'], ['하루 종일 말하지 않기', '지킬 수 없어요']], 2, 3, '아주 좋은 규칙이에요', 0.2),
            MT('고칠 규칙과 고친 규칙을 이어요.', { weather: false }, [['착하게 지내요', '친구 말을 끝까지 들어요'], ['청소는 1모둠만 해요', '청소는 모둠이 돌아가며'], ['쉬는 시간 화장실 금지', '수업 중엔 손 들고 가요']], 2, 3, '규칙은 없애요', 0.25, { conclude: '좋은 규칙은 공평하고, 지킬 수 있고, 무엇을 할지 구체적이에요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '"교실을 깨끗이 해요"를 구체적인 규칙으로 고쳐 써요.' }] },
      }),
      C({
        id: 'auto.e34.g3-self.activity.meet', type: 'activity', title: '모둠 규칙 정하기 회의',
        method: '모둠 규칙 정하기 회의', tool: 'timer', minutes: 13,
        levels: { easy: '회의 차례 카드 3장을 놓고, 후보 2개의 손든 수를 적는다.', base: '회의 차례 카드 3장을 놓고, 후보 3개의 손든 수를 적은 뒤 해 본 것 3칸에 표시한다.', challenge: '\'조건 확인하기\'가 들어간 차례 카드 4장을 놓고, 정하기 전에 세 조건을 확인한 것까지 4칸에 표시한다.' },
        activity: {
          title: '모둠 규칙 정하기 회의', tool: 'timer',
          teacher: '"모둠마다 \'우리 모둠 규칙\' 후보를 하나씩 말하고, 손을 들어 하나를 정해요. 정한 규칙은 기록판에 적어요." 교사가 회의 차례를 칠판에 붙이고 모둠을 돌며 돕는다. 가장 목소리 큰 친구의 후보로 바로 정하려는 모둠에 "다른 친구들의 후보도 들어 보았나요? 손을 들어 정하면 무엇이 좋을까요?"라고 묻는다. 도전 모둠은 정하기 전에 세 조건(공평·지킬 수 있음·구체적)을 먼저 살펴본다.',
          task: '회의 차례를 맞추고, 가상의 모둠 투표 결과를 옮겨 적은 뒤 우리 모둠 회의에서 한 것에 표시해요.', levels: SAME,
          items: [
            { prompt: '모둠 회의 차례를 놓아요.', toolOptions: { title: '모둠 회의 차례', cards: ['기록판에 적기', '손들어 정하기', '후보 말하기'] }, target: { order: ['후보 말하기', '손들어 정하기', '기록판에 적기'] }, difficulty: 0.1,
              levels: { challenge: { prompt: '조건 확인까지 넣어 회의 차례를 놓아요.', toolOptions: { cards: ['기록판에 적기', '조건 확인하기', '손들어 정하기', '후보 말하기'] }, target: { order: ['후보 말하기', '조건 확인하기', '손들어 정하기', '기록판에 적기'] } } } },
            { prompt: '가상 모둠의 손든 수(가 3명, 나 2명, 다 1명)를 적어요.', toolOptions: { title: '후보별 손든 수(가상)', unit: '명', fields: ['가 후보', '나 후보', '다 후보'] }, target: { records: [3, 2, 1] }, difficulty: 0.15,
              levels: { easy: { prompt: '가상 모둠의 손든 수(가 4명, 나 2명)를 적어요.', toolOptions: { fields: ['가 후보', '나 후보'] }, target: { records: [4, 2] } } } },
            SCHK('우리 모둠 회의에서 한 것에 표시해요.', '모둠 회의 점검', ['후보를 말했어요', '친구 후보를 들었어요', '손들어 정했어요', '조건을 확인했어요'], 2, 3, 0.15, { conclude: '후보를 다 듣고, 조건을 살피고, 손을 들어 정하면 모두가 지킬 규칙이 돼요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '우리 모둠이 정한 규칙을 써요.' }] },
        notes: '교사가 진행하는 모둠 회의다. 정한 규칙이 세 조건에 맞지 않으면 교사가 질문으로 다시 생각하게 하고, 학생 의견을 점수로 매기지 않는다.',
      }),
      C({
        id: 'auto.e34.g3-self.activity.fair', type: 'activity', title: '역할 정하는 방법 고르기',
        method: '역할 정하는 방법 고르고 결과 보기', tool: 'emotion', minutes: 14,
        levels: { easy: '장면마다 보기 2개(바른 것 1·아닌 것 1) 가운데 골라 결과와 친구 마음을 본다.', base: '장면마다 보기 3개 가운데 골라 결과와 친구 마음을 본다.', challenge: '보기 3개 가운데 고르되 결과·마음은 고르고 확인한 뒤에만 보여, 먼저 까닭을 짝에게 말한다.' },
        activity: {
          title: '역할 정하는 방법 고르기', tool: 'emotion',
          teacher: '"칠판 지우기를 7명이 하고 싶어요. 먼저 말한 사람에게 주면 다른 친구들 마음은 어떨까요?" 보기를 고를 때마다 결과 글을 소리 내어 읽고, 누가 기쁘고 누가 서운한지 말하게 한다. "목소리 큰 사람이 하면 빨라요"라는 학생에게 "빠른 것과 공평한 것 가운데 무엇이 더 오래 지켜질까요?"라고 묻는다. 돌아가며 하기와 뽑기는 모두에게 기회가 같다는 점을 짚는다.',
          task: '가상의 반에서 생긴 일을 읽고 역할을 정하는 방법을 골라, 결과와 친구들의 마음을 보아요.', levels: SAME,
          items: [
            BR('칠판 지우기를 7명이 하고 싶어요. 어떻게 정할까요?', '칠판 지우기는 한 사람인데 7명이 손을 들었어요.', [
              { id: 'first', text: '먼저 말한 사람이 해요', result: '늦게 말한 친구들은 기회가 없었어요.', mood: '서운함' },
              { id: 'turn', text: '한 주씩 돌아가며 해요', result: '7명 모두 차례가 생겼어요.', mood: '편안함' },
              { id: 'loud', text: '목소리 큰 사람이 해요', result: '조용한 친구는 말도 못 했어요.', mood: '속상함' },
            ], 'turn', 0.15),
            BR('우유 나르기를 아무도 안 하려 해요. 어떻게 할까요?', '우유 나르기에 손을 든 친구가 없어요.', [
              { id: 'force', text: '힘센 친구에게 시켜요', result: '그 친구 혼자 매일 날랐어요.', mood: '서운함' },
              { id: 'skip', text: '아무도 안 해요', result: '우유가 교실에 오지 않았어요.', mood: '걱정' },
              { id: 'rotate', text: '모두 돌아가며 해요', result: '한 사람이 한 번씩만 하면 됐어요.', mood: '편안함' },
            ], 'rotate', 0.2),
            BR('화분 물 주기를 두 명이 하고 싶어요. 어떻게 할까요?', '화분 물 주기를 하고 싶은 친구가 두 명이에요.', [
              { id: 'draw', text: '뽑기로 먼저 할 사람 정해요', result: '뽑힌 친구가 먼저, 다른 친구는 다음 주에 해요.', mood: '편안함' },
              { id: 'fight', text: '서로 하겠다고 다퉈요', result: '다투는 사이 화분이 말랐어요.', mood: '속상함' },
              { id: 'teacher', text: '선생님이 좋아하는 친구가 해요', result: '다른 친구는 이유도 모른 채 못 했어요.', mood: '서운함' },
            ], 'draw', 0.25, { conclude: '돌아가며 하기, 뽑기처럼 모두에게 기회가 같은 방법이 공정해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '하고 싶은 친구가 많은 역할을 공정하게 정하는 방법은?', options: ['먼저 말한 사람', '돌아가며 하기', '힘센 사람'], answer: '돌아가며 하기' }] },
      }),
      C({
        id: 'auto.e34.g3-self.activity.wheel', type: 'activity', title: '역할 돌림판 꾸미기',
        method: '역할 돌림판 꾸미기', tool: 'collage', minutes: 13,
        levels: { easy: '큰 동그라미 1개에 역할 칸 조각 3개를 붙이고, 역할 그림 별 3개를 붙인다.', base: '역할 칸 조각 5개와 역할 그림 별 5개를 붙이고, 돌아가는 차례를 정한 것을 표시한다.', challenge: '5칸을 꾸민 뒤 칸마다 이름 칸(작은 네모)을 남긴 것까지 표시한다.' },
        activity: {
          title: '역할 돌림판 꾸미기', tool: 'collage',
          teacher: '"큰 동그라미를 돌림판으로 하고, 세모 조각으로 역할 칸을 나눠요. 칸마다 역할 그림 별을 붙이면 한 주마다 돌려서 맡는 판이 돼요." 조각을 붙일 때마다 "이 칸은 어떤 역할이에요?"라고 묻는다. 칸 수와 역할 수가 맞지 않는 학생에게 "역할이 다섯 개면 칸은 몇 개가 필요할까요?"라고 묻는다. 돌림판은 누구나 모든 역할을 한 번씩 맡게 해 주는 공정한 방법이라는 점을 짚는다.',
          task: '돌림판에 역할 칸과 역할 그림 조각을 붙여, 돌아가며 맡는 역할 돌림판을 만들어요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '큰 동그라미 위에 역할 칸 세모 5개를 붙여요.', toolOptions: WHEEL, target: { has: [{ shape: 'circle', size: 'l', min: 1 }, { shape: 'triangle', min: 5 }] }, difficulty: 0.1,
              levels: { easy: { prompt: '큰 동그라미 위에 역할 칸 세모 3개를 붙여요.', target: { has: [{ shape: 'circle', size: 'l', min: 1 }, { shape: 'triangle', min: 3 }] } } } },
            { prompt: '역할 칸마다 역할 그림 별을 붙여요(5개).', toolOptions: WHEEL, target: { has: [{ shape: 'star', min: 5 }] }, difficulty: 0.15,
              levels: { easy: { prompt: '역할 칸마다 역할 그림 별을 붙여요(3개).', target: { has: [{ shape: 'star', min: 3 }] } } } },
            { prompt: '돌림판을 꾸미고 한 것에 표시해요.', toolOptions: WHEEL, target: { selfCheck: ['역할 칸을 나눴어요', '돌아가는 차례를 정했어요'], minPieces: 5 }, difficulty: 0.15,
              levels: { easy: { prompt: '조각 3개 이상으로 꾸미고 표시해요.', target: { selfCheck: ['역할 칸을 나눴어요', '돌아가는 차례를 정했어요'], minPieces: 3 } }, challenge: { prompt: '이름 칸까지 꾸미고 표시해요.', target: { selfCheck: ['역할 칸을 나눴어요', '돌아가는 차례를 정했어요', '이름 칸을 남겼어요'], has: [{ shape: 'square', size: 's', min: 5 }] } } },
              conclude: '돌림판을 돌리면 모두가 모든 역할을 한 번씩 맡을 수 있어요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '우리 반 역할 돌림판 칸을 채워요.', columns: ['칸', '역할'], cells: [['1', ''], ['2', ''], ['3', '']], answer: '칠판 지우기, 화분 물 주기, 불 끄기(학급마다 다름)' }] },
      }),
      C({
        id: 'auto.e34.g3-self.wrap.check', type: 'wrap', title: '맡은 역할 스스로 점검',
        method: '맡은 역할 스스로 점검', tool: 'timer', minutes: 7,
        levels: { easy: '3일(월·화·수) 칸에 맡은 역할을 했는지 스스로 표시한다.', base: '5일 칸에 스스로 표시한다.', challenge: '5일 칸에 표시하고, 짝이 내 점검표를 보고 확인해 준 칸까지 표시한다.' },
        wrap: {
          teacher: '"다음 주에 맡을 역할을 하루하루 스스로 점검할 거예요. 오늘은 점검표에 어떻게 표시하는지 연습해 볼까요?" 점검 칸을 함께 읽고 표시하게 한다. 하지 못한 날이 있어도 괜찮고, 왜 못 했는지 생각해 보는 것이 점검이라고 밝힌다. 출구 2번에서 "규칙은 많을수록 좋다"를 고른 학생에게 "오늘 만든 우리 모둠 규칙은 몇 개였나요? 그 정도면 다 지킬 수 있겠지요?"라고 되묻는다.',
          exitTicket: [
            SELF('맡은 역할 점검(연습)', ['월요일에 했어요', '화요일에 했어요', '수요일에 했어요', '목요일에 했어요', '금요일에 했어요', '짝이 확인해 줬어요'], '맡은 역할을 한 날에 표시해 봐요.', 3, 5),
            CH('좋은 학급 규칙은 어떤 규칙일까요?', ['많을수록 좋은 규칙', '공평하고 지킬 수 있는 규칙', '어려울수록 좋은 규칙'], 1, '좋은 규칙은 공평하고, 지킬 수 있고, 구체적이에요.'),
            MOOD,
          ],
        },
        worksheet: {
          title: '내 역할 점검표',
          items: [
            { type: 'table', prompt: '내가 맡은 역할을 한 날에 ○를 해요.', columns: ['월', '화', '수', '목', '금'], cells: [['', '', '', '', '']], answer: '(스스로 표시)' },
            { type: 'short', prompt: '역할을 잘 해내려면 무엇을 하면 좋을지 한 줄로 써요.' },
          ],
          easy: { note: '맡은 역할을 잊지 않게 사물함에 그림을 붙여 봐요.', items: [{ type: 'draw', prompt: '내가 맡은 역할을 하는 모습을 그려요.' }] },
        },
      }),
      C({
        id: 'auto.e34.g3-self.wrap.pick', type: 'wrap', title: '꼭 지킬 우리 반 규칙',
        method: '우리 반 규칙 하나 고르기', tool: 'wordcards', minutes: 7,
        levels: { easy: '보기 2장(좋은 규칙 1·고칠 규칙 1) 가운데 좋은 규칙을 담는다.', base: '보기 3장 가운데 좋은 규칙 2장을 담고, 그 가운데 내가 꼭 지킬 하나를 짝에게 말한다.', challenge: '담은 뒤 꼭 지킬 하나와 그 까닭을 활동지에 쓴다.' },
        wrap: {
          teacher: '"오늘 정한 규칙 가운데 세 조건을 갖춘 좋은 규칙만 담아 볼까요? 그다음 내가 꼭 지킬 것 하나를 정해요." 카드를 담은 뒤 "나는 ○○을 꼭 지킬 거예요. 왜냐하면 ○○이기 때문이에요." 틀로 짝에게 말하게 한다. 무엇을 골랐는지는 채점하지 않는다. 출구 2번에서 \'목소리 큰 사람\'을 고른 학생에게 "그러면 조용한 친구는 기회가 있을까요?"라고 되묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'wordcards', options: { mode: 'pick', basket: '좋은 규칙', cards: ['복도에서는 걸어요', '청소는 1모둠만', '쓴 물건은 제자리에'] }, prompt: '세 조건을 갖춘 좋은 규칙만 담아요.', target: { pick: ['복도에서는 걸어요', '쓴 물건은 제자리에'] }, difficulty: 0.1,
              levels: { easy: { toolOptions: { cards: ['복도에서는 걸어요', '청소는 1모둠만'] }, target: { pick: ['복도에서는 걸어요'] } } } },
            CH('1인 1역을 공정하게 정하는 방법은?', ['목소리 큰 사람이 해요', '돌아가며 맡아요', '하고 싶은 사람만 해요'], 1, '돌아가며 맡으면 모두에게 기회가 같아요.'),
            MOOD,
          ],
        },
        worksheet: {
          title: '꼭 지킬 우리 반 규칙',
          items: [
            { type: 'short', prompt: '내가 꼭 지킬 우리 반 규칙 하나를 써요.' },
            { type: 'short', prompt: '그 규칙을 고른 까닭을 한 줄로 써요.' },
          ],
          easy: { note: '"나는 ○○을 꼭 지킬 거예요."로 써 봐요.', items: [{ type: 'draw', prompt: '규칙을 지키는 내 모습을 그려요.' }] },
        },
      }),
    );
  }

  // ======================================================================================================
  // 3학년 · 탐구 질문 만들고 자료 찾기 (자율활동 — 주제 탐구 활동)
  // ======================================================================================================
  {
    const C = T('g3-inq', 3);
    const TOPIC = [['동물', 8], ['날씨', 4], ['놀이', 6], ['음식', 5]];
    M.push(
      C({
        id: 'auto.e34.g3-inq.intro.topic', type: 'intro', title: '관심 주제 생각그물',
        method: '관심 주제 생각그물', tool: 'mindmap', minutes: 6,
        levels: { easy: '가지 2개(동물·날씨)에 궁금한 카드가 붙는 것을 함께 본다.', base: '가지 3개(동물·날씨·놀이)에 카드가 붙는 것을 보고 하나를 소리 내어 읽는다.', challenge: '내가 좋아하는 것 하나를 떠올려 그 가지에 붙일 질문을 짝에게 말한다.' },
        intro: {
          teacher: '"가운데 \'내가 좋아하는 것\'이 있어요. 좋아하는 것에는 궁금한 것이 숨어 있어요. 고양이를 좋아하면 무엇이 궁금할까요?" 시연 단추로 궁금한 카드가 가지에 붙는 모습을 보인다(기다릴 반응: "왜 잠을 많이 자요?", "무엇을 먹어요?"). "궁금한 게 없어요"라는 말이 나오면 "좋아하는 놀이를 떠올려 봐요. 팽이는 왜 오래 돌까요?"처럼 \'왜\'를 붙여 보게 한다. 오늘은 궁금한 것을 알아볼 수 있는 탐구 질문으로 바꾼다고 밝힌다.',
          student: '좋아하는 것을 떠올리고, 그것에 대해 궁금한 것을 가지에 붙여 보아요.',
          demo: { tool: 'mindmap', options: { topic: '내가 좋아하는 것', slots: ['동물', '날씨', '놀이'], cards: ['고양이는 왜 많이 잘까?', '무지개는 왜 생길까?', '팽이는 왜 오래 돌까?', '개미는 무엇을 먹을까?', '눈은 왜 하얄까?', '공은 왜 튈까?'], shuffle: false }, sequence: [{ sort: { 동물: ['고양이는 왜 많이 잘까?'], 날씨: ['무지개는 왜 생길까?'] } }, { sort: { 동물: ['고양이는 왜 많이 잘까?', '개미는 무엇을 먹을까?'], 날씨: ['무지개는 왜 생길까?', '눈은 왜 하얄까?'], 놀이: ['팽이는 왜 오래 돌까?', '공은 왜 튈까?'] } }] },
          art: { draw: 'a paper cut mind map with a heart in the middle and paper branches leading to a cat, a rainbow and a spinning top, small paper question marks floating around', banner: '무엇이 궁금할까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
      }),
      C({
        id: 'auto.e34.g3-inq.intro.where', type: 'intro', title: '자료 찾을 곳 고르기',
        method: '자료 찾을 곳 그림 고르기', tool: 'wordcards', minutes: 6,
        levels: { easy: '알맞은 곳 카드 2장(책·백과사전)이 담기는 것을 함께 본다.', base: '알맞은 곳 3장(어른께 여쭤보기까지)이 담기는 것을 보고 하나씩 따라 말한다.', challenge: '직접 관찰하기까지 4장이 담기는 것을 보고, 담기지 않은 카드는 왜 빠졌는지 말한다.' },
        intro: {
          teacher: '"\'개미는 무엇을 먹을까?\'를 알아보려면 어디에서 자료를 찾을까요?" 시연 단추로 자료 찾을 곳 카드가 바구니에 담기는 모습을 보인다. 담기지 않은 \'아무 글이나 믿기\'를 가리키며 "누가 썼는지 모르는 글도 다 맞을까요?"라고 묻는다. "인터넷에 있는 건 다 맞아요"라는 말이 나오면 "인터넷에도 틀린 글이 있어요. 그래서 책이나 어른께 한 번 더 확인해요"라고 짚는다.',
          student: '궁금한 것을 알아볼 때 자료를 찾을 수 있는 곳을 골라 보고, 어디가 좋을지 짝과 말해 보아요.',
          demo: { tool: 'wordcards', options: { mode: 'pick', basket: '자료 찾을 곳', cards: ['책', '아무 글이나 믿기', '백과사전', '어른께 여쭤보기', '친구 말만 듣기', '직접 관찰하기'] }, sequence: [{ pick: ['책', '백과사전'] }, { pick: ['책', '백과사전', '어른께 여쭤보기'] }, { pick: ['책', '백과사전', '어른께 여쭤보기', '직접 관찰하기'] }] },
          art: { draw: 'a paper cut library corner with a stack of books, an open encyclopedia, a paper adult talking with a child and a magnifying glass over a small paper ant', banner: '어디에서 찾을까?', extra: [{ motif: 'leaf', x: 300, y: 96 }] },
        },
      }),
      C({
        id: 'auto.e34.g3-inq.activity.good', type: 'activity', title: '좋은 탐구 질문 가려내기',
        method: '좋은 탐구 질문 가려내기', tool: 'sortboard', minutes: 14,
        levels: { easy: '질문 카드 4장, 틀린 바구니에 넣으면 까닭을 말하고 되돌아온다. 바구니에 든 장 수가 보인다.', base: '질문 카드 6장을 다 넣은 뒤 확인한다.', challenge: '헷갈리는 카드 2장이 더해진 8장을 나누고, \'너무 넓어요\' 카드 하나를 알아볼 수 있게 활동지에 고쳐 쓴다.' },
        activity: {
          title: '좋은 탐구 질문 가려내기', tool: 'sortboard',
          teacher: '"\'동물은 어떻게 살까?\'는 하루 이틀에 알아볼 수 있을까요?" 카드를 넣을 때마다 "이 질문은 무엇을 찾아보면 답할 수 있나요?"를 묻는다. 넓은 질문을 \'알아볼 수 있어요\'에 넣는 학생에게 "동물이 몇 종류나 될까요? 그중 하나만 고르면 어떨까요?"라고 되묻는다. 좋은 탐구 질문은 대상이 하나로 좁고, 찾거나 관찰해서 답할 수 있다는 점을 짚는다.',
          task: '탐구 질문 카드를 알아볼 수 있는 질문과 너무 넓은 질문으로 나누어요.', levels: BOARD_LV,
          items: [
            SORT('동물에 대한 질문을 나누어요.', {}, ['알아볼 수 있어요', '너무 넓어요'], [['개미는 무엇을 먹을까?', '달팽이는 어디에 살까?', '참새는 알을 몇 개 낳을까?'], ['동물은 어떻게 살까?', '세상의 모든 벌레', '생물은 왜 있을까?']], 2, [['금붕어는 언제 잘까?'], ['동물에 대해 다 알기']], 0.15),
            SORT('날씨에 대한 질문을 나누어요.', {}, ['알아볼 수 있어요', '너무 넓어요'], [['무지개는 왜 생길까?', '고드름은 언제 생길까?', '비 온 뒤 왜 웅덩이가 생길까?'], ['날씨는 왜 있을까?', '하늘의 모든 것', '지구는 어떻게 될까?']], 2, [['서리는 언제 생길까?'], ['우주는 얼마나 클까?']], 0.2),
            SORT('놀이에 대한 질문을 나누어요.', {}, ['알아볼 수 있어요', '너무 넓어요'], [['팽이는 왜 오래 돌까?', '종이비행기는 왜 날까?', '공은 왜 튈까?'], ['놀이는 왜 재미있을까?', '모든 놀이의 규칙', '옛날 사람은 어떻게 살았을까?']], 2, [['연은 왜 하늘에 뜰까?'], ['세계의 놀이 다 알기']], 0.25, { conclude: '좋은 탐구 질문은 대상을 하나로 좁히고, 찾거나 관찰해서 답할 수 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '"동물은 어떻게 살까?"를 알아볼 수 있는 질문으로 고쳐 써요.' }] },
      }),
      C({
        id: 'auto.e34.g3-inq.activity.make', type: 'activity', title: '내 탐구 질문 빈칸 채우기',
        method: '내 탐구 질문 빈칸 채우기', tool: 'story', minutes: 13,
        levels: { easy: '질문 말풍선 1칸에 낱말 카드를 넣는다. 놓으면 바로 맞는지 알려 준다.', base: '질문 말풍선 2칸에 낱말 카드를 넣는다.', challenge: '질문 말풍선 3칸(질문 둘 이상)에 낱말 카드를 넣고, 남는 카드는 왜 안 맞는지 짝에게 말한다.' },
        activity: {
          title: '내 탐구 질문 만들기', tool: 'story',
          teacher: '"\'___는 왜 ___할까?\'에 낱말을 넣으면 탐구 질문이 돼요." 빈칸마다 카드를 넣은 뒤 완성된 질문을 소리 내어 읽게 한다. 말이 되지 않는 카드를 넣은 학생에게 "완성된 질문을 읽어 보세요. 우리가 알아볼 수 있는 말이 되나요?"라고 묻는다. 활동이 끝나면 내가 좋아하는 것으로 같은 틀의 질문 하나를 활동지에 써 보게 한다.',
          task: '탐구 질문 말풍선의 빈칸에 알맞은 낱말 카드를 넣어 질문을 완성해요.', levels: CARD_LV,
          items: [
            FILLN('동물 탐구 질문의 빈칸을 채워요.', { title: '동물 탐구 질문' }, '나래', [['___는 왜 밤에 울까?', '부엉이'], ['___는 왜 겨울잠을 잘까?', '곰'], ['개구리는 왜 ___ 울까?', '비 오면']], ['책상', '연필'], 1, 2, 0.15),
            FILLN('식물 탐구 질문의 빈칸을 채워요.', { title: '식물 탐구 질문' }, '나래', [['___는 왜 해를 따라 돌까?', '해바라기'], ['나팔꽃은 왜 ___ 필까?', '아침에'], ['___은 왜 가을에 떨어질까?', '나뭇잎']], ['자동차', '구름'], 1, 2, 0.2),
            FILLN('놀이 탐구 질문의 빈칸을 채워요.', { title: '놀이 탐구 질문' }, '나래', [['___는 왜 멀리 날까?', '종이비행기'], ['팽이는 왜 ___ 돌까?', '오래'], ['___은 왜 하늘에 뜰까?', '연']], ['급식', '숙제'], 1, 2, 0.25, { conclude: '"___는 왜 ___할까?" 틀에 넣으면 궁금한 것이 탐구 질문이 돼요.' }),
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '내가 좋아하는 것으로 탐구 질문을 만들어요.', text: '___는 왜 ___할까?', answer: '(학생마다 다름)' }] },
      }),
      C({
        id: 'auto.e34.g3-inq.activity.method', type: 'activity', title: '질문과 자료 찾기 방법 잇기',
        method: '질문과 자료 찾기 방법 잇기', tool: 'emotion', minutes: 14,
        levels: { easy: '질문 2줄에 알맞은 방법 카드를 잇는다. 놓으면 바로 맞는지 알려 준다.', base: '질문 3줄에 방법 카드를 잇는다.', challenge: '질문 4줄에 방법 카드를 잇는다.' },
        activity: {
          title: '질문과 자료 찾기 방법', tool: 'emotion',
          teacher: '"\'개미는 무엇을 먹을까?\'는 책으로도 알 수 있지만, 직접 보면 더 잘 알 수 있어요. 질문마다 가장 알맞은 방법은 무엇일까요?" 짝을 이을 때마다 "왜 그 방법이 알맞을까요?"를 묻는다. 모든 질문에 \'인터넷 찾기\'만 놓으려는 학생에게 "공룡이 살던 때는 직접 관찰할 수 있을까요? 우리 반 친구가 좋아하는 과일은 어디에 적혀 있을까요?"라고 묻는다. 질문에 따라 알맞은 방법이 다르다는 점을 짚는다.',
          task: '탐구 질문 카드와 그 질문에 알맞은 자료 찾기 방법 카드를 이어요.', levels: CARD_LV,
          items: [
            MT('질문에 알맞은 방법을 이어요.', { weather: false }, [['공룡은 언제 살았을까?', '백과사전 찾기'], ['개미는 무엇을 먹을까?', '직접 관찰하기'], ['학교 화단은 언제 생겼을까?', '어른께 여쭤보기'], ['친구들이 좋아하는 과일은?', '설문 조사하기']], 2, 3, null, 0.15),
            MT('이 질문은 어떻게 알아볼까요? 이어요.', { weather: false }, [['고래는 몇 년을 살까?', '책에서 찾기'], ['강낭콩은 며칠 만에 싹틀까?', '심어서 기록하기'], ['옛날 놀이는 무엇이 있었을까?', '어른께 여쭤보기'], ['반 친구들이 좋아하는 놀이는?', '손들어 세어 보기']], 2, 3, null, 0.2),
            MT('질문과 찾는 방법을 이어요.', { weather: false }, [['달은 왜 모양이 바뀔까?', '과학 책 찾기'], ['화단에 무슨 곤충이 있을까?', '돋보기로 관찰하기'], ['급식실은 몇 명이 일할까?', '영양 선생님께 여쭙기'], ['친구들은 몇 시에 잘까?', '설문 조사하기']], 2, 3, null, 0.25, { conclude: '질문마다 알맞은 방법이 달라요. 찾기, 관찰하기, 여쭤보기, 조사하기를 골라 써요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '"강낭콩은 며칠 만에 싹틀까?"에 가장 알맞은 방법은?', options: ['심어서 기록하기', '친구에게 묻기', '아무 글 보기'], answer: '심어서 기록하기' }] },
      }),
      C({
        id: 'auto.e34.g3-inq.activity.library', type: 'activity', title: '도서관에서 자료 찾기',
        method: '도서관에서 자료 찾기', tool: 'timer', minutes: 13,
        levels: { easy: '책 찾는 차례 카드 3장을 놓고, 찾은 책 1권을 기록판에 적고, 해 본 것 2칸에 표시한다.', base: '차례 카드 4장을 놓고, 찾은 책 2권을 적은 뒤 해 본 것 3칸에 표시한다.', challenge: '차례 카드 4장을 놓고, 찾은 책 수와 답이 있는 쪽수까지 적은 뒤 4칸에 표시한다.' },
        activity: {
          title: '도서관에서 자료 찾기', tool: 'timer',
          teacher: '"오늘은 선생님과 학교 도서관에 가서 모둠 탐구 질문에 맞는 책을 찾아요. 책꽂이에 붙은 번호 표지는 책의 갈래를 알려 줘요." 출발 전에 차례 카드를 맞추고, 도서관에서는 작은 소리로 말하고 꺼낸 책은 제자리에 둔다는 약속을 함께 말한다. 아무 책이나 많이 꺼내는 모둠에 "이 책에 우리 질문의 답이 있을까요? 차례(목차)를 먼저 볼까요?"라고 묻는다. 찾은 책 이름은 기록판에 적고, 돌아와서 출처 남기기로 잇는다.',
          task: '도서관에서 책 찾는 차례를 맞추고, 찾은 책 수를 적은 뒤 해 본 것에 표시해요.', levels: SAME,
          items: [
            TORD('도서관에서 책 찾는 차례를 놓아요.', '책 찾는 차례', ['찾을 낱말 정하기', '갈래 표지 보기', '목차 살펴보기', '책 이름 적기'], 2, 0.1),
            { prompt: '모둠이 찾은 책 2권의 수를 적어요.', toolOptions: { title: '우리 모둠 자료 기록', fields: [{ label: '찾은 책', unit: '권' }] }, target: { records: [2] }, difficulty: 0.15,
              levels: { easy: { prompt: '모둠이 찾은 책 1권의 수를 적어요.', target: { records: [1] } }, challenge: { prompt: '찾은 책 수와 답이 있는 쪽수를 모두 적어요.', toolOptions: { fields: [{ label: '찾은 책', unit: '권' }, { label: '답이 있는 쪽', unit: '쪽' }] }, target: { records: true } } } },
            SCHK('도서관에서 해 본 것에 표시해요.', '도서관 점검', ['책을 찾았어요', '책 이름을 적었어요', '작은 소리로 말했어요', '쪽수까지 적었어요'], 2, 3, 0.15, { conclude: '찾을 낱말을 정하고, 갈래 표지와 목차를 보면 알맞은 책을 빨리 찾아요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '찾은 책을 적어요.', columns: ['책 이름', '쪽'], cells: [['', ''], ['', '']], answer: '(모둠마다 다름)' }] },
        notes: '교사가 인솔하는 활동이다. 도서관 이용 시간은 사서 선생님과 미리 정한다. 책을 찾지 못한 모둠도 찾는 차례를 해 본 것을 인정한다.',
      }),
      C({
        id: 'auto.e34.g3-inq.wrap.source', type: 'wrap', title: '출처 남기는 차례',
        method: '출처 남기는 차례 놓기', tool: 'story', minutes: 7,
        levels: { easy: '출처 남기기 2단계(자료 찾기·제목 적기)를 놓는다.', base: '3단계(자료 찾기·제목 적기·만든 곳 적기)를 놓는다.', challenge: '찾은 날짜 적기까지 4단계를 놓는다.' },
        wrap: {
          teacher: '"오늘 찾은 자료를 친구에게 알려 줄 때 \'어디서 봤어?\'라고 물으면 어떻게 답할까요? 그래서 출처를 남겨요." 카드를 놓은 뒤 활동지 출처 칸을 함께 채운다. "그냥 내가 알아낸 거라고 하면 돼요"라는 학생에게 "그 책을 쓴 사람이 알면 어떤 마음일까요? 다른 친구가 같은 책을 찾고 싶으면요?"라고 되묻는다. 출구 2번의 \'인터넷 글은 다 맞다\' 보기를 고른 학생에게는 오늘 도입에서 본 \'아무 글이나 믿기\' 카드를 다시 떠올리게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'story', options: { mode: 'order', slots: ['처음', '다음', '끝'], cards: [{ id: 'maker', text: '만든 곳 적기' }, { id: 'title', text: '제목 적기' }, { id: 'find', text: '자료 찾기' }] }, prompt: '출처를 남기는 차례로 놓아요.', target: { order: ['find', 'title', 'maker'] }, difficulty: 0.1,
              levels: { easy: { toolOptions: { slots: ['처음', '끝'], cards: [{ id: 'title', text: '제목 적기' }, { id: 'find', text: '자료 찾기' }] }, target: { order: ['find', 'title'] } }, challenge: { prompt: '날짜까지 넣어 차례로 놓아요.', toolOptions: { slots: ['처음', '다음', '그다음', '끝'], cards: [{ id: 'date', text: '찾은 날짜 적기' }, { id: 'maker', text: '만든 곳 적기' }, { id: 'title', text: '제목 적기' }, { id: 'find', text: '자료 찾기' }] }, target: { order: ['find', 'title', 'maker', 'date'] } } } },
            CH('인터넷에서 찾은 글은?', ['다 맞으니 그대로 믿어요', '책이나 어른께 한 번 더 확인해요', '출처를 지워요'], 1, '인터넷 글도 틀릴 수 있어서 다른 자료로 한 번 더 확인해요.'),
            MOOD,
          ],
        },
        worksheet: {
          title: '탐구 질문과 출처',
          items: [
            { type: 'table', prompt: '찾은 자료의 출처를 써요.', columns: ['제목', '만든 곳(지은이)', '찾은 날'], cells: [['', '', '']], answer: '(모둠마다 다름)' },
            { type: 'short', prompt: '우리 모둠의 탐구 질문을 한 줄로 써요.' },
          ],
          easy: { note: '책 표지에서 제목과 지은이를 찾아 옮겨 써요.', items: [{ type: 'draw', prompt: '오늘 찾은 책의 표지를 그려요.' }] },
        },
      }),
      C({
        id: 'auto.e34.g3-inq.wrap.tally', type: 'wrap', title: '반 탐구 주제 그래프',
        method: '반 탐구 주제 그래프', tool: 'chart', minutes: 7,
        levels: { easy: '탐구 주제 3갈래(동물·날씨·놀이) 막대를 완성한다.', base: '4갈래(음식까지) 막대를 완성한다.', challenge: '4갈래를 완성하고, 가장 많은 갈래와 같은 갈래 친구끼리 모둠을 만들면 좋은 까닭을 말한다(출구 2번).' },
        wrap: {
          teacher: '"가상의 우리 반 친구들이 고른 탐구 주제의 갈래를 막대그래프로 나타내 볼까요?" 표의 수를 함께 읽으며 막대를 쌓는다. 출구 2번에서 가장 많은 갈래를 찾은 뒤 "같은 갈래를 고른 친구끼리 모이면 무엇이 좋을까요?"라고 물어 다음 시간 모둠 공동 탐구로 잇는다. 적게 고른 갈래도 좋은 주제라는 것을 짚는다.',
          exitTicket: [
            { type: 'tool', tool: 'chart', options: BAR('반 탐구 주제 갈래', TOPIC, { unit: '명', mode: 'build', showTable: true, xLabel: '갈래', yLabel: '고른 친구 수' }), prompt: '표를 보고 탐구 주제 막대를 완성해요.', target: { build: true }, difficulty: 0.15,
              levels: { easy: { prompt: '표를 보고 세 갈래 막대를 완성해요.', toolOptions: { data: TOPIC.slice(0, 3) } } } },
            CH('가장 많이 고른 탐구 갈래는?', ['날씨', '동물', '음식'], 1, '동물이 8명으로 가장 많아요.'),
            MOOD,
          ],
        },
        worksheet: {
          title: '우리 반 탐구 주제',
          items: [
            { type: 'table', prompt: '그래프를 보고 친구 수를 써요.', columns: ['갈래', '친구 수(명)'], cells: [['동물', ''], ['놀이', '']], answer: '8, 6' },
            { type: 'short', prompt: '내가 알아보고 싶은 탐구 갈래와 질문을 써요.' },
          ],
          easy: { note: '막대의 끝이 닿은 눈금을 읽어요.', items: [{ type: 'draw', prompt: '알아보고 싶은 것을 그려요.' }] },
        },
      }),
    );
  }

  // ======================================================================================================
  // 3학년 · 학교 안 불편한 곳 바꾸기 봉사 (자율활동 — 프로젝트형 봉사활동)
  // ======================================================================================================
  {
    const C = T('g3-serve', 3);
    const SPOT = [['신발장', 7], ['화단', 4], ['복도 게시판', 5], ['급식실 앞', 3]];
    const SPOT_Q = (o) => BAR('불편한 곳 반 투표', SPOT, Object.assign({ unit: '명', mode: 'read', xLabel: '불편한 곳', yLabel: '고른 친구 수' }, o));
    const BOARD = { shapes: ['rect', 'square', 'star', 'heart', 'leaf', 'circle'], colors: ['빨강', '노랑', '초록', '파랑', '분홍', '갈색'], sizes: ['s', 'm', 'l'] };
    M.push(
      C({
        id: 'auto.e34.g3-serve.intro.walk', type: 'intro', title: '학교 지도에서 불편한 곳 찾기',
        method: '학교 지도에서 불편한 곳 표시', tool: 'map', minutes: 6,
        levels: { easy: '가상의 학교 지도에서 신발장 한 곳에 핀이 꽂히는 것을 본다.', base: '신발장·화단 두 곳에 핀이 꽂히는 것을 보고 무엇이 불편할지 말한다.', challenge: '복도까지 세 곳을 보고, 우리 학교에서 불편할 만한 곳을 하나 더 떠올려 짝에게 말한다.' },
        intro: {
          teacher: '"그림 속 가상의 학교를 둘러봐요. 신발장에 신발이 뒤섞여 있으면 누가 불편할까요?" 시연 단추로 불편한 곳에 핀이 차례로 꽂히는 모습을 보이고, 곳마다 "누가, 왜 불편할까요?"를 묻는다(기다릴 반응: "1학년 동생이 신발을 못 찾아요", "꽃이 시들어요"). "불편한 건 어른들이 고치는 거예요"라는 말이 나오면 "우리가 할 수 있는 일도 있을까요? 위험해서 어른께 알려야 할 일은요?"라고 되물어 오늘의 봉사로 잇는다.',
          student: '가상의 학교 지도에서 불편한 곳을 찾아보고, 누가 왜 불편할지 짝에게 말해 보아요.',
          demo: { tool: 'map', options: SCHOOL, sequence: [{ pin: [0, 2] }, { pin: [0, 3] }, { pin: [3, 1] }] },
          art: { draw: 'a paper cut school map with a messy shoe rack, a dry flower bed and a hallway notice board with fallen papers, small paper pins standing on each', banner: '어디가 불편할까?', extra: [{ motif: 'leaf', x: 300, y: 96 }] },
        },
        notes: '학생에게 학교에서 불편했던 일·다친 일을 꺼내게 하지 않는다. 그림 속 가상의 학교를 보며 이야기하고, 우리 학교 이야기는 하고 싶은 학생만 한다.',
      }),
      C({
        id: 'auto.e34.g3-serve.intro.plan', type: 'intro', title: '봉사할 시각 맞추기',
        method: '봉사 계획표 칸 어림하기', tool: 'clock', minutes: 6,
        levels: { easy: '정각(12시)에 바늘이 맞춰지는 것을 함께 읽는다.', base: '30분(12시 30분)에 맞춰진 시각을 함께 읽는다.', challenge: '쉬는 시간(10시 30분)과 점심시간(12시 30분) 두 시각을 읽고 어느 때가 봉사하기 알맞은지 말한다.' },
        intro: {
          teacher: '"봉사는 언제 할까요? 수업 시간에 하면 어떻게 될까요?" 시연 단추로 시계가 12시, 12시 30분, 10시 30분으로 차례로 움직이는 것을 보인다. 시각마다 "이때는 무슨 시간이에요? 봉사할 시간이 넉넉할까요?"라고 묻는다(기다릴 반응: "점심 먹고 나서요", "쉬는 시간은 짧아요"). "아무 때나 하면 돼요"라는 말이 나오면 "언제 할지 정하지 않으면 모둠 친구가 모두 모일 수 있을까요?"라고 되물어 계획표에 \'언제\' 칸이 필요한 까닭을 짚는다. 시각은 가상의 시간표 예라고 밝힌다.',
          student: '시계 바늘이 가리키는 시각을 읽고, 봉사하기 알맞은 시간을 짝과 정해 보아요.',
          demo: { tool: 'clock', options: { showDigital: true }, sequence: [{ h: 12, m: 0 }, { h: 12, m: 30 }, { h: 10, m: 30 }] },
          art: { draw: 'a paper cut wall clock above a paper planning chart with empty boxes for who, when, where and what, a paper child pointing at the clock', banner: '언제 봉사할까?', extra: [{ motif: 'sun', x: 300, y: 96 }] },
        },
        notes: '시각은 가상의 시간표에 맞춘 예다. 우리 학교 쉬는 시간·점심시간에 맞춰 바꾼다.',
      }),
      C({
        id: 'auto.e34.g3-serve.activity.sort', type: 'activity', title: '우리가 할 일·어른께 알릴 일',
        method: '우리가 할 일·어른께 알릴 일 가르기', tool: 'sortboard', minutes: 14,
        levels: { easy: '카드 4장, 틀린 바구니에 넣으면 까닭을 말하고 되돌아온다. 바구니에 든 장 수가 보인다.', base: '카드 6장을 다 넣은 뒤 확인한다.', challenge: '헷갈리는 카드 2장이 더해진 8장을 나누고, 고른 까닭을 짝에게 말한다.' },
        activity: {
          title: '우리가 할 일·어른께 알릴 일', tool: 'sortboard',
          teacher: '"떨어진 쓰레기는 우리가 주울 수 있어요. 깨진 창문은 어떨까요?" 카드를 넣을 때마다 "우리가 하면 다칠 수 있나요? 도구나 어른의 힘이 필요한가요?"를 묻는다. \'깨진 창문\'을 우리가 할 일에 넣는 학생에게 "유리 조각을 맨손으로 만지면 어떻게 될까요? 누구에게 알리면 고칠 수 있을까요?"라고 묻는다. 위험하거나 고치는 도구가 필요한 일은 어른께 알리는 것까지가 우리의 봉사라는 점을 짚는다.',
          task: '학교 안 불편한 곳 카드를 우리가 할 일과 어른께 알릴 일로 나누어요.', levels: BOARD_LV,
          items: [
            SORT('교실과 복도의 불편한 곳을 나누어요.', {}, ['우리가 할 일', '어른께 알릴 일'], [['떨어진 쓰레기 줍기', '흐트러진 신발장 정리', '떨어진 게시물 다시 붙이기'], ['깨진 창문', '고장 난 수도꼭지', '흔들리는 책상 다리']], 2, [['빈 화분 물 주기'], ['전선이 나온 콘센트']], 0.15),
            SORT('운동장과 화단의 불편한 곳을 나누어요.', {}, ['우리가 할 일', '어른께 알릴 일'], [['화단 쓰레기 줍기', '흩어진 공 바구니에 넣기', '시든 꽃에 물 주기'], ['부서진 그네 줄', '깨진 유리 조각', '뾰족하게 튀어나온 못']], 2, [['운동장 낙엽 쓸기'], ['흔들리는 철봉']], 0.2),
            SORT('급식실과 화장실의 불편한 곳을 나누어요.', {}, ['우리가 할 일', '어른께 알릴 일'], [['흘린 물 닦는 것 돕기', '줄 서는 표시 알리기', '손 씻기 안내판 붙이기'], ['막힌 변기', '꺼진 전등', '고장 난 손 건조기']], 2, [['휴지 아껴 쓰자 알리기'], ['물이 새는 수도관']], 0.25, { conclude: '우리가 안전하게 할 수 있는 일은 하고, 위험하거나 고쳐야 하는 일은 어른께 알려요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '깨진 유리 조각을 보면?', options: ['맨손으로 줍는다', '어른께 알린다', '발로 밀어 둔다'], answer: '어른께 알린다' }] },
      }),
      C({
        id: 'auto.e34.g3-serve.activity.survey', type: 'activity', title: '불편한 곳 투표 그래프',
        method: '불편한 곳 반 투표 그래프', tool: 'chart', minutes: 13,
        levels: { easy: '불편한 곳 3곳의 막대를 완성하고 3곳 가운데에서 읽는다.', base: '4곳의 막대를 완성하고 가장 많은 곳과 한 곳의 수를 읽는다.', challenge: '4곳을 완성하고 두 번째로 많은 곳(대안)과 그 차이까지 읽는다.' },
        activity: {
          title: '불편한 곳 투표 그래프', tool: 'chart',
          teacher: '"가상의 우리 반 19명이 가장 바꾸고 싶은 곳에 손을 들었어요. 막대그래프로 나타내 볼까요?" 표를 함께 읽으며 막대를 쌓는다. 가장 많은 곳을 찾은 뒤 "그곳이 봉사하기 어렵다면 다음으로 어디를 할까요?"라고 물어 두 번째 대안을 함께 본다. "표가 적은 곳은 안 바꿔도 돼요"라는 학생에게 "그곳을 고른 3명은 왜 골랐을까요? 다음 봉사에서 할 수 있을까요?"라고 묻는다. 자료는 가상이라고 밝힌다.',
          task: '가상의 반 투표 표로 막대그래프를 완성하고, 봉사할 곳과 대안을 읽어요.', levels: SAME,
          items: [
            { prompt: '표를 보고 불편한 곳 투표 막대를 완성해요.', toolOptions: BAR('불편한 곳 반 투표', SPOT, { unit: '명', mode: 'build', showTable: true, xLabel: '불편한 곳', yLabel: '고른 친구 수' }), target: { build: true }, difficulty: 0.15,
              levels: { easy: { prompt: '표를 보고 세 곳의 막대를 완성해요.', toolOptions: { data: SPOT.slice(0, 3), given: [0] } } } },
            { prompt: '가장 많은 친구가 고른 곳은 어디일까요?', toolOptions: SPOT_Q({ question: '가장 많이 고른 곳은?', choices: SPOT.map((r) => r[0]) }), target: { pick: 0 }, difficulty: 0.15,
              levels: { easy: { prompt: '세 곳 가운데 가장 많이 고른 곳은?', toolOptions: { data: SPOT.slice(0, 3), choices: SPOT.slice(0, 3).map((r) => r[0]) } }, challenge: { prompt: '두 번째로 많이 고른 곳(대안)은 어디일까요?', toolOptions: { question: '두 번째로 많은 곳은?' }, target: { pick: 2 } } } },
            { prompt: '\'화단\'을 고른 친구는 몇 명일까요?', toolOptions: SPOT_Q({ question: '화단은 몇 명?', choices: ['3명', '4명', '5명'] }), target: { pick: 1 }, difficulty: 0.2,
              levels: { easy: { toolOptions: { data: SPOT.slice(0, 3) } }, challenge: { prompt: '신발장과 복도 게시판은 몇 명 차이일까요?', toolOptions: { question: '7명과 5명의 차이는?', choices: ['2명', '5명', '12명'] }, target: { pick: 0 } } },
              conclude: '가장 많이 고른 곳을 먼저 하고, 어려우면 두 번째 곳을 대안으로 정해요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '그래프를 보고 친구 수를 써요.', columns: ['불편한 곳', '친구 수(명)'], cells: [['신발장', ''], ['복도 게시판', '']], answer: '7, 5' }] },
      }),
      C({
        id: 'auto.e34.g3-serve.activity.who', type: 'activity', title: '봉사 계획표 생각그물',
        method: '누가·언제·어디서·무엇을 계획표', tool: 'mindmap', minutes: 14,
        levels: { easy: '가지 2개(누가·무엇을)에 카드를 붙인다. 놓으면 바로 맞는지 알려 준다.', base: '가지 4개(누가·언제·어디서·무엇을)에 카드를 붙인다.', challenge: '가지 4개에 준비물 가지 하나를 더해 5가지에 카드를 붙인다.' },
        activity: {
          title: '봉사 계획표', tool: 'mindmap',
          teacher: '"가운데에 봉사 이름이 있어요. 누가, 언제, 어디서, 무엇을 할지 가지를 채우면 계획표가 돼요." 카드를 붙일 때마다 그 가지의 물음(누가?·언제?)을 소리 내어 묻고 답하게 한다. \'점심시간\'을 \'어디서\'에 붙이는 학생에게 "점심시간은 장소일까요, 때일까요?"라고 묻는다. 도전 단계는 준비물 가지까지 채워, 빠뜨리면 봉사를 못 하는 것이 무엇인지 짚는다.',
          task: '가운데 봉사 이름을 보고, 누가·언제·어디서·무엇을 가지에 알맞은 카드를 붙여요.', levels: CARD_LV,
          items: [
            { prompt: '신발장 정리 봉사 계획을 채워요.', toolOptions: { topic: '신발장 정리 봉사', slots: ['누가', '언제', '어디서', '무엇을'], cards: ['우리 모둠', '점심시간', '1층 신발장', '신발 짝 맞추기'] }, target: { sort: { 누가: ['우리 모둠'], 언제: ['점심시간'], 어디서: ['1층 신발장'], 무엇을: ['신발 짝 맞추기'] } }, difficulty: 0.15,
              levels: { easy: { prompt: '신발장 정리 봉사의 누가·무엇을을 채워요.', toolOptions: { slots: ['누가', '무엇을'], cards: ['우리 모둠', '신발 짝 맞추기'] }, target: { sort: { 누가: ['우리 모둠'], 무엇을: ['신발 짝 맞추기'] } } }, challenge: { prompt: '준비물까지 신발장 정리 봉사 계획을 채워요.', toolOptions: { slots: ['누가', '언제', '어디서', '무엇을', '준비물'], cards: ['우리 모둠', '점심시간', '1층 신발장', '신발 짝 맞추기', '이름 붙임 딱지'] }, target: { sort: { 누가: ['우리 모둠'], 언제: ['점심시간'], 어디서: ['1층 신발장'], 무엇을: ['신발 짝 맞추기'], 준비물: ['이름 붙임 딱지'] } } } } },
            { prompt: '화단 물 주기 봉사 계획을 채워요.', toolOptions: { topic: '화단 물 주기 봉사', slots: ['누가', '언제', '어디서', '무엇을'], cards: ['2모둠', '아침 등교 뒤', '정문 옆 화단', '시든 꽃에 물 주기'] }, target: { sort: { 누가: ['2모둠'], 언제: ['아침 등교 뒤'], 어디서: ['정문 옆 화단'], 무엇을: ['시든 꽃에 물 주기'] } }, difficulty: 0.2,
              levels: { easy: { prompt: '화단 물 주기 봉사의 누가·무엇을을 채워요.', toolOptions: { slots: ['누가', '무엇을'], cards: ['2모둠', '시든 꽃에 물 주기'] }, target: { sort: { 누가: ['2모둠'], 무엇을: ['시든 꽃에 물 주기'] } } }, challenge: { prompt: '준비물까지 화단 물 주기 봉사 계획을 채워요.', toolOptions: { slots: ['누가', '언제', '어디서', '무엇을', '준비물'], cards: ['2모둠', '아침 등교 뒤', '정문 옆 화단', '시든 꽃에 물 주기', '물뿌리개'] }, target: { sort: { 누가: ['2모둠'], 언제: ['아침 등교 뒤'], 어디서: ['정문 옆 화단'], 무엇을: ['시든 꽃에 물 주기'], 준비물: ['물뿌리개'] } } } } },
            { prompt: '복도 안내판 봉사 계획을 채워요.', toolOptions: { topic: '복도 안내판 봉사', slots: ['누가', '언제', '어디서', '무엇을'], cards: ['3모둠', '쉬는 시간', '2층 복도', '"걸어요" 안내판 붙이기'] }, target: { sort: { 누가: ['3모둠'], 언제: ['쉬는 시간'], 어디서: ['2층 복도'], 무엇을: ['"걸어요" 안내판 붙이기'] } }, difficulty: 0.25,
              levels: { easy: { prompt: '복도 안내판 봉사의 누가·무엇을을 채워요.', toolOptions: { slots: ['누가', '무엇을'], cards: ['3모둠', '"걸어요" 안내판 붙이기'] }, target: { sort: { 누가: ['3모둠'], 무엇을: ['"걸어요" 안내판 붙이기'] } } }, challenge: { prompt: '준비물까지 복도 안내판 봉사 계획을 채워요.', toolOptions: { slots: ['누가', '언제', '어디서', '무엇을', '준비물'], cards: ['3모둠', '쉬는 시간', '2층 복도', '"걸어요" 안내판 붙이기', '도화지와 테이프'] }, target: { sort: { 누가: ['3모둠'], 언제: ['쉬는 시간'], 어디서: ['2층 복도'], 무엇을: ['"걸어요" 안내판 붙이기'], 준비물: ['도화지와 테이프'] } } } },
              conclude: '누가·언제·어디서·무엇을 정하면, 모두가 같은 계획으로 봉사할 수 있어요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '우리 모둠 봉사 계획표를 채워요.', columns: ['누가', '언제', '어디서', '무엇을'], cells: [['', '', '', '']], answer: '(모둠마다 다름)' }] },
      }),
      C({
        id: 'auto.e34.g3-serve.activity.do', type: 'activity', title: '모둠 봉사 실천',
        method: '모둠 봉사 실천', tool: 'timer', minutes: 13,
        levels: { easy: '선생님과 함께 안전 점검 2칸을 확인하고, 한 일 1칸을 적는다.', base: '모둠이 스스로 안전 점검 4칸을 확인하고, 한 일 2칸을 적은 뒤 해 본 것 3칸에 표시한다.', challenge: '4칸을 확인하고 한 일을 적은 뒤, 전·후 모습을 기록판에 그린 것까지 4칸에 표시한다.' },
        activity: {
          title: '모둠 봉사 실천', tool: 'timer',
          teacher: '"봉사하러 가기 전에 안전 점검부터 해요. 선생님이 확인하면 출발해요." 모둠마다 계획한 곳(신발장·화단·복도)으로 가서 정리하거나 안내판을 붙인다. 위험한 것을 직접 치우려는 학생에게 "그건 오늘 \'어른께 알릴 일\' 바구니였지요? 누구에게 알릴까요?"라고 묻는다. 돌아와서 한 일을 기록판에 적고, 사진은 선생님이 장소의 전·후 모습만 찍는다.',
          task: '봉사 전에 안전 점검을 하고, 모둠이 한 일을 적은 뒤 해 본 것에 표시해요.', levels: SAME,
          items: [
            SAFE('봉사 전 안전 점검을 모두 확인해요.', '봉사 전 안전 점검', ['선생님과 장소를 정했어요', '장갑을 꼈어요', '날카로운 것은 안 만져요', '위험하면 바로 알려요'], 2, 0.1),
            { prompt: '모둠이 한 일 두 가지의 수를 적어요.', toolOptions: { title: '우리 모둠 봉사 기록', fields: [{ label: '정리한 칸', unit: '칸' }, { label: '붙인 안내판', unit: '장' }] }, target: { records: true }, difficulty: 0.15,
              levels: { easy: { prompt: '모둠이 정리한 칸 수를 적어요.', toolOptions: { fields: [{ label: '정리한 칸', unit: '칸' }] } } } },
            SCHK('봉사에서 해 본 것에 표시해요.', '봉사 점검', ['계획한 곳에서 했어요', '역할대로 했어요', '위험한 것은 알렸어요', '전·후 모습을 그렸어요'], 2, 3, 0.15, { conclude: '안전 점검을 하고, 계획대로 하고, 위험한 것은 알리면 안전한 봉사예요.' }),
          ],
        },
        worksheet: { items: [{ type: 'draw', prompt: '봉사한 곳의 전·후 모습을 그려요.' }] },
        notes: '교사가 진행하는 실천 활동이다. 사진은 교사가 장소만 찍고 학생 얼굴은 찍지 않는다. 할 수 없는 날은 교실 신발장·사물함 정리로 바꾼다.',
      }),
      C({
        id: 'auto.e34.g3-serve.wrap.reflect', type: 'wrap', title: '봉사 뒤 마음 돌아보기',
        method: '봉사 뒤 돌아보기 마음 고르기', tool: 'emotion', minutes: 7,
        levels: { easy: '"봉사한 나"·"신발장을 쓰는 동생" 2줄에 마음 카드를 짝 짓는다.', base: '"교실을 쓰는 친구들"까지 3줄에 마음 카드를 짝 짓는다.', challenge: '3줄을 짝 지은 뒤, 다음 봉사에서 바꿀 점을 고른다(출구 2번).' },
        wrap: {
          teacher: '"봉사를 하고 나니 내 마음은 어때요? 정리된 신발장을 본 1학년 동생은 어떤 마음일까요?" 줄마다 마음 카드를 짝 짓고 까닭을 한 명씩 말하게 한다. "힘들기만 했어요"라는 학생에게도 그 마음을 인정하고 "힘들었지만 누가 편해졌을까요?"라고 묻는다. 출구 2번에서 다음 봉사에 바꿀 점을 고른 뒤 모둠 계획표에 덧붙인다.',
          exitTicket: [
            { type: 'tool', tool: 'emotion', options: { mode: 'match', slots: [{ id: 's1', label: '봉사한 나' }, { id: 's2', label: '신발장을 쓰는 동생' }], cards: ['뿌듯함', '고마움', '편안함', '화남'] }, prompt: '봉사한 뒤의 마음을 이어요.', target: { match: { s1: ['뿌듯함', '편안함'], s2: ['고마움', '편안함'] } }, difficulty: 0.15,
              levels: { challenge: { toolOptions: { slots: [{ id: 's1', label: '봉사한 나' }, { id: 's2', label: '신발장을 쓰는 동생' }, { id: 's3', label: '교실을 쓰는 친구들' }] }, target: { match: { s1: ['뿌듯함', '편안함'], s2: ['고마움', '편안함'], s3: ['고마움', '편안함'] } } } } },
            CH('다음 봉사에서 바꿀 점으로 알맞은 것은?', ['위험한 것도 우리가 고쳐요', '준비물을 미리 챙겨요', '혼자 다 해요'], 1, '준비물을 미리 챙기면 봉사를 더 잘할 수 있어요. 위험한 것은 어른께 알려요.'),
            MOOD,
          ],
        },
        worksheet: {
          title: '봉사를 돌아보아요',
          items: [
            { type: 'short', prompt: '봉사를 하고 난 내 마음을 한 줄로 써요.' },
            { type: 'short', prompt: '다음 봉사에서 바꿀 점 하나를 써요.' },
          ],
          easy: { note: '"봉사를 하니 ○○했어요."로 써 봐요.', items: [{ type: 'draw', prompt: '봉사를 마친 우리 모둠을 그려요.' }] },
        },
      }),
      C({
        id: 'auto.e34.g3-serve.wrap.report', type: 'wrap', title: '봉사 알림판 꾸미기',
        method: '봉사 알림판 꾸미기', tool: 'collage', minutes: 7,
        levels: { easy: '전·후 그림 조각 2개 이상으로 알림판을 꾸미고 표시한다.', base: '조각 4개 이상으로 꾸미고 표시한다.', challenge: '조각 4개 이상으로 꾸미고, 감사 문구를 말로 붙인 것까지 표시한다(문구는 활동지에 쓴다).' },
        wrap: {
          teacher: '"우리 봉사를 다른 반에도 알려 볼까요? 왼쪽에는 봉사 전, 오른쪽에는 봉사 뒤 모습을 조각으로 꾸며요." 조각을 붙이며 "무엇이 달라졌나요?"를 한 문장으로 말하게 한다. 감사 문구(예: "신발장을 깨끗이 써 주셔서 고맙습니다")는 활동지에 써서 알림판 아래에 붙인다. 출구 2번에서 \'위험한 고장\'을 우리가 고친다고 고른 학생에게 "오늘 어른께 알렸던 일을 다시 떠올려 볼까요?"라고 되묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'collage', options: BOARD, prompt: '봉사 전·후 모습을 조각으로 꾸며요.', target: { selfCheck: ['전 모습을 꾸몄어요', '뒤 모습을 꾸몄어요'], minPieces: 4 }, difficulty: 0.1,
              levels: { easy: { target: { selfCheck: ['전 모습을 꾸몄어요', '뒤 모습을 꾸몄어요'], minPieces: 2 } }, challenge: { target: { selfCheck: ['전 모습을 꾸몄어요', '뒤 모습을 꾸몄어요', '감사 문구를 정했어요'], minPieces: 4 } } } },
            CH('흔들리는 철봉을 보면 어떻게 할까요?', ['우리가 고쳐요', '어른께 알려요', '매달려 봐요'], 1, '위험한 고장은 우리가 고치지 않고 어른께 알려요.'),
            MOOD,
          ],
        },
        worksheet: {
          title: '봉사 알림판',
          items: [
            { type: 'short', prompt: '알림판에 붙일 감사 문구를 써요.' },
            { type: 'table', prompt: '봉사 전과 뒤를 견주어 써요.', columns: ['봉사 전', '봉사 뒤'], cells: [['', '']], answer: '(모둠마다 다름)' },
          ],
          easy: { note: '"○○해 주셔서 고맙습니다."로 써 봐요.', items: [{ type: 'draw', prompt: '봉사한 뒤 깨끗해진 곳을 그려요.' }] },
        },
      }),
    );
  }

  // ======================================================================================================
  // 4학년 · 학기 목표와 걱정 다루기 (자율활동 — 적응 및 개척 활동: 정서 지원)
  // ======================================================================================================
  {
    const C = T('g4-adapt', 4);
    const DAYS = [['월', 2], ['화', 3], ['수', 1], ['목', 4], ['금', 3]];
    const CARD = { shapes: ['star', 'heart', 'circle', 'rect', 'triangle', 'leaf'], colors: ['빨강', '주황', '노랑', '초록', '파랑', '보라'], sizes: ['s', 'm', 'l'] };
    M.push(
      C({
        id: 'auto.e34.g4-adapt.intro.dream', type: 'intro', title: '이번 학기 하고 싶은 일',
        method: '이번 학기 하고 싶은 일 고르기', tool: 'wordcards', minutes: 6,
        levels: { easy: '보기 3장 가운데 한 장이 바구니에 담기는 것을 보고 함께 읽는다.', base: '보기 5장을 보고 내가 하고 싶은 일 하나를 짝에게 말한다.', challenge: '하고 싶은 일 하나와 그 까닭을 "왜냐하면"을 넣어 말한다.' },
        intro: {
          teacher: '"4학년 이번 학기에 꼭 해 보고 싶은 일이 있나요?" 시연 단추로 하고 싶은 일 카드 하나가 바구니에 담기는 모습을 보인다(예: 줄넘기 2단 뛰기). 친구의 고른 일을 두고 "그건 쉬워요" "그건 못 해요"라고 평가하는 말이 나오면 "하고 싶은 일은 사람마다 달라요. 오늘은 고른 일을 해낼 수 있게 나누는 법을 배워요"라고 짚는다. 어떤 일을 골랐는지는 맞고 틀린 것이 없다고 밝힌다.',
          student: '이번 학기에 해 보고 싶은 일 카드 하나를 골라 짝에게 말해 보아요. 고른 일에는 맞고 틀린 것이 없어요.',
          demo: { tool: 'wordcards', options: { mode: 'pick', basket: '하고 싶은 일', cards: ['줄넘기 2단 뛰기', '책 10권 읽기', '리코더 한 곡', '종이접기 배우기', '새 친구와 놀기'] }, sequence: [{ pick: ['줄넘기 2단 뛰기'] }] },
          art: { draw: 'a paper cut path climbing up a gentle hill with small paper flags, a paper child holding a jump rope at the bottom looking up at a star on top', banner: '이번 학기 나의 목표는?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '고른 목표를 견주거나 점수로 매기지 않는다. 성적 목표(시험 몇 점)는 다루지 않고 생활·놀이·습관 목표로 한다.',
      }),
      C({
        id: 'auto.e34.g4-adapt.intro.body', type: 'intro', title: '긴장하면 달라지는 몸',
        method: '긴장하면 달라지는 몸 찾기', tool: 'body', minutes: 6,
        levels: { easy: '종이 몸에서 가슴(두근거리는 심장) 한 곳이 짚이는 것을 본다.', base: '가슴·배 두 곳이 짚이는 것을 보고 어떻게 달라지는지 말한다.', challenge: '가슴·배·어깨 세 곳을 보고, 자기 손을 꽉 쥐었다 펴며 손도 달라질 수 있음을 몸으로 보인다.' },
        intro: {
          teacher: '"발표 차례를 기다리는 그림 속 나래는 몸이 어떻게 달라질까요?" 시연 단추로 종이 몸의 가슴·배·어깨가 차례로 짚이는 모습을 보인다(기다릴 반응: "심장이 쿵쿵해요", "배가 아파요"). 종이 몸에는 손 칸이 없어서, 모두 손을 꽉 쥐었다 펴 보며 "손에 땀이 나거나 떨리기도 해요"라고 말해 준다. "긴장하면 이상한 거예요"라는 말이 나오면 "긴장은 누구나 해요. 몸이 \'중요한 일이야\' 하고 알려 주는 거예요"라고 짚는다.',
          student: '긴장할 때 달라질 수 있는 몸의 자리를 찾아 짚어 보고, 내 손을 쥐었다 펴 보아요.',
          demo: { tool: 'body', options: { mode: 'parts', parts: ['가슴', '배', '어깨', '무릎', '발목', '목'], names: true }, sequence: [{ parts: ['가슴'] }, { parts: ['가슴', '배'] }, { parts: ['가슴', '배', '어깨'] }] },
          art: { draw: 'a paper body figure standing behind a small paper podium, a tiny paper heart beating on the chest and soft wavy lines around the shoulders', banner: '긴장하면 몸이 알려 줘요', extra: [{ motif: 'heart', x: 300, y: 96 }] },
        },
        notes: 'body 교구에 손 칸이 없어 가슴(심장)·배·어깨로 짚고, 손은 학생이 자기 손을 쥐었다 펴며 짚는다. "언제 긴장했나요?"처럼 겪은 일을 꺼내게 하지 않는다.',
      }),
      C({
        id: 'auto.e34.g4-adapt.activity.good', type: 'activity', title: '해낼 수 있는 목표 가려내기',
        method: '해낼 수 있는 목표 가려내기', tool: 'sortboard', minutes: 14,
        levels: { easy: '목표 카드 4장, 틀린 바구니에 넣으면 까닭을 말하고 되돌아온다. 바구니에 든 장 수가 보인다.', base: '목표 카드 6장을 다 넣은 뒤 확인한다.', challenge: '헷갈리는 카드 2장이 더해진 8장을 나누고, \'고쳐야 해요\' 카드 하나를 해낼 수 있게 활동지에 고쳐 쓴다.' },
        activity: {
          title: '해낼 수 있는 목표', tool: 'sortboard',
          teacher: '"\'책 많이 읽기\'와 \'하루 10쪽 읽기\' 가운데 내일 해냈는지 알 수 있는 것은 무엇일까요?" 카드를 넣을 때마다 "이 목표는 언제, 얼마나 할지 나와 있나요? 내 힘으로 할 수 있나요?"를 묻는다. \'세계 최고 되기\'를 해낼 수 있어요에 넣는 학생에게 "이번 학기 안에 할 수 있을까요? 그 꿈을 위해 이번 주에 할 작은 일은 무엇일까요?"라고 되묻는다. 목표는 크게 세울수록 좋은 것이 아니라, 해낸 것을 알 수 있게 작고 분명해야 한다는 점을 짚는다.',
          task: '목표 카드를 해낼 수 있는 목표와 고쳐야 할 목표로 나누어요.', levels: BOARD_LV,
          items: [
            SORT('책 읽기 목표를 나누어요.', {}, ['해낼 수 있어요', '고쳐야 해요'], [['하루 10쪽 읽기', '한 주에 책 1권', '잠자기 전 15분 읽기'], ['책 많이 읽기', '도서관 책 다 읽기', '하루에 책 20권']], 2, [['읽은 책 제목 적기'], ['책 잘 읽기']], 0.15),
            SORT('운동 목표를 나누어요.', {}, ['해낼 수 있어요', '고쳐야 해요'], [['줄넘기 매일 50번', '점심에 운동장 한 바퀴', '한 주에 3번 걷기'], ['운동 열심히 하기', '세계 최고 선수 되기', '하루 10시간 운동']], 2, [['쉬는 시간 계단 걷기'], ['몸 튼튼하게']], 0.2),
            SORT('생활 습관 목표를 나누어요.', {}, ['해낼 수 있어요', '고쳐야 해요'], [['밤 10시 전에 자기', '아침에 물 한 컵', '책상 매일 정리'], ['착하게 살기', '절대 늦잠 안 자기', '하루 종일 공부']], 2, [['양치 3분 하기'], ['부지런해지기']], 0.25, { conclude: '해낼 수 있는 목표는 언제, 얼마나 할지 분명하고, 내 힘으로 할 수 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '"책 많이 읽기"를 해낼 수 있는 목표로 고쳐 써요.' }] },
      }),
      C({
        id: 'auto.e34.g4-adapt.activity.steps', type: 'activity', title: '목표를 세 단계로 나누기',
        method: '목표를 세 단계로 나누기', tool: 'timeline', minutes: 13,
        levels: { easy: '이번 주·이번 달 2칸에 단계 카드를 잇는다. 놓으면 바로 맞는지 알려 준다.', base: '이번 주·이번 달·학기 말 3칸에 단계 카드를 잇는다.', challenge: '점검하는 날 칸까지 4칸에 단계 카드를 잇는다.' },
        activity: {
          title: '목표를 세 단계로', tool: 'timeline',
          teacher: '"\'줄넘기 2단 뛰기\'를 학기 말에 해내려면, 이번 주에는 무엇부터 할까요?" 칸마다 카드를 이은 뒤 "이번 주에 ○○, 이번 달에 ○○, 학기 말에 ○○"로 소리 내어 읽게 한다. 학기 말 카드를 이번 주에 놓는 학생에게 "처음부터 그게 될까요? 그 전에 할 작은 단계는 무엇일까요?"라고 묻는다. 도전 단계는 언제 점검할지까지 정해야 목표를 잊지 않는다는 점을 짚는다.',
          task: '목표 하나를 이번 주·이번 달·학기 말 단계로 나누어 카드를 이어요.', levels: CARD_LV,
          items: [
            MT('\'줄넘기 2단 뛰기\'를 단계로 나누어요.', { axis: ['먼저', '나중'] }, [['이번 주', '1단 뛰기 50번'], ['이번 달', '2단 한 번 성공'], ['학기 말', '2단 10번 잇기'], ['점검하는 날', '금요일마다 세기']], 2, 3, null, 0.15),
            MT('\'책 10권 읽기\'를 단계로 나누어요.', { axis: ['먼저', '나중'] }, [['이번 주', '읽을 책 고르기'], ['이번 달', '책 3권 읽기'], ['학기 말', '10권 다 읽기'], ['점검하는 날', '월말에 목록 보기']], 2, 3, null, 0.2),
            MT('\'리코더 한 곡\'을 단계로 나누어요.', { axis: ['먼저', '나중'] }, [['이번 주', '계이름 익히기'], ['이번 달', '앞 소절 불기'], ['학기 말', '한 곡 끝까지 불기'], ['점검하는 날', '토요일에 불어 보기']], 2, 3, null, 0.25, { conclude: '큰 목표도 이번 주에 할 작은 단계부터 나누면 해낼 수 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '내 목표를 세 단계로 나누어 써요.', columns: ['이번 주', '이번 달', '학기 말'], cells: [['', '', '']], answer: '(학생마다 다름)' }] },
      }),
      C({
        id: 'auto.e34.g4-adapt.activity.thought', type: 'activity', title: '도움 되는 생각 고르기',
        method: '도움 되는 생각 고르고 결과 보기', tool: 'emotion', minutes: 14,
        levels: { easy: '장면마다 보기 2개(도움 되는 생각 1·아닌 것 1) 가운데 골라 결과와 마음을 본다.', base: '장면마다 보기 3개 가운데 골라 결과와 마음을 본다.', challenge: '보기 3개 가운데 고르되 결과·마음은 고르고 확인한 뒤에만 보여, 먼저 까닭을 짝에게 말한다.' },
        activity: {
          title: '도움 되는 생각 고르기', tool: 'emotion',
          teacher: '"발표 전에 \'나는 망칠 거야\'라고 생각하면 마음이 어떻게 될까요? \'떨려도 연습한 만큼 하면 돼\'라고 생각하면요?" 보기를 고를 때마다 결과 글을 함께 읽고, 같은 상황에서도 생각에 따라 마음과 행동이 달라진다는 것을 짚는다. "걱정이 없어야 정상이에요"라는 학생에게 "걱정은 누구나 해요. 걱정을 없애는 게 아니라 도움이 되는 생각으로 다루는 거예요"라고 말해 준다.',
          task: '그림 속 친구가 걱정하는 장면을 읽고, 도움이 되는 생각을 골라 이어지는 결과를 보아요.', levels: SAME,
          items: [
            BR('발표 차례가 다가와요. 어떤 생각이 도움이 될까요?', '나래가 반 앞에서 발표할 차례가 다가와요. 가슴이 두근거려요.', [
              { id: 'fail', text: '"나는 분명히 망칠 거야"', result: '걱정이 더 커져서 말이 막혔어요.', mood: '걱정' },
              { id: 'ok', text: '"떨려도 연습한 만큼 하면 돼"', result: '숨을 고르고 천천히 말을 시작했어요.', mood: '편안함' },
              { id: 'run', text: '"아프다고 하고 빠질까?"', result: '발표를 피했지만 다음에 더 떨렸어요.', mood: '불안함' },
            ], 'ok', 0.15),
            BR('새 모둠의 첫날이에요. 어떤 생각이 도움이 될까요?', '나래가 처음 만난 친구들과 모둠이 되었어요. 말을 걸기가 떨려요.', [
              { id: 'hello', text: '"먼저 인사 한마디만 해 보자"', result: '인사를 했더니 친구가 웃으며 받아 주었어요.', mood: '기쁨' },
              { id: 'hate', text: '"다들 나를 싫어할 거야"', result: '한마디도 못 하고 혼자 앉아 있었어요.', mood: '외로움' },
              { id: 'wait', text: '"누가 말 걸 때까지 숨자"', result: '모둠 활동 내내 아무도 몰랐어요.', mood: '서운함' },
            ], 'hello', 0.2),
            BR('줄넘기 대회 전이에요. 어떤 생각이 도움이 될까요?', '반 줄넘기 대회를 앞두고 나래가 걸릴까 봐 걱정해요.', [
              { id: 'only', text: '"한 번도 걸리면 안 돼"', result: '몸이 굳어서 처음부터 걸렸어요.', mood: '속상함' },
              { id: 'quit', text: '"어차피 안 되니 안 할래"', result: '연습도 안 하고 구경만 했어요.', mood: '서운함' },
              { id: 'try', text: '"걸려도 다시 뛰면 돼"', result: '걸렸지만 다시 뛰어 끝까지 했어요.', mood: '뿌듯함' },
            ], 'try', 0.25, { conclude: '걱정은 누구나 해요. 도움이 되는 생각으로 바꾸면 마음과 행동이 달라져요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '발표 전 걱정될 때 도움이 되는 생각은?', options: ['나는 망칠 거야', '떨려도 연습한 만큼 하면 돼', '아프다고 하고 빠지자'], answer: '떨려도 연습한 만큼 하면 돼' }] },
        notes: '장면은 그림 속 가상의 친구(나래) 일이다. 학생 자신의 걱정을 발표시키지 않는다. 걱정이 지나치게 큰 학생은 따로 살피고 상담 선생님과 잇는다.',
      }),
      C({
        id: 'auto.e34.g4-adapt.activity.relax', type: 'activity', title: '긴장 풀기 몸 활동',
        method: '긴장 풀기 몸 활동', tool: 'timer', minutes: 13,
        levels: { easy: '긴장 풀기 1가지(천천히 숨쉬기)를 3번 하게 타이머를 맞추고, 해 본 것 2칸에 표시한다.', base: '2가지(숨쉬기·어깨 돌리기)의 차례를 놓고 함께 해 본 뒤 3칸에 표시한다.', challenge: '3가지(손 쥐었다 펴기까지)의 차례를 놓고 해 본 뒤 4칸에 표시한다.' },
        activity: {
          title: '긴장 풀기 몸 활동', tool: 'timer',
          teacher: '"긴장할 때 몸으로 풀 수 있는 방법을 함께 해 봐요. 코로 천천히 들이마시고, 입으로 후 내쉬어요." 타이머에 맞춰 교사가 동작을 이끌고 학생은 따라 한다. 너무 빨리 숨을 몰아쉬는 학생에게 "풍선을 천천히 불듯이 길게 내쉬어 볼까요?"라고 말해 준다. 어지럽거나 불편하면 언제든 멈추고 편히 앉아 있어도 된다고 먼저 밝힌다. 오늘 익힌 방법은 발표나 시합 전에 혼자서도 쓸 수 있다는 점을 짚는다.',
          task: '긴장 풀기 활동의 횟수와 차례를 맞추고, 선생님과 함께 해 본 뒤 표시해요.', levels: SAME,
          items: [
            { prompt: '숨쉬기 10초, 쉬기 5초로 3번 하게 맞춰요.', toolOptions: { title: '천천히 숨쉬기(우리 반 약속)', labels: ['숨쉬기', '쉬기'], plan: { work: 5, rest: 10, rounds: 1 } }, target: { plan: { work: 10, rest: 5, rounds: 3 } }, difficulty: 0.1,
              hints: ['숨쉬기·쉬기·번 칸을 차례로 봐요.', '숨쉬기 칸과 쉬기 칸은 초로 맞춰요.', '문제 글의 초와 횟수를 그대로 맞춰요.'],
              levels: { easy: { prompt: '숨쉬기 10초로 3번 하게 맞춰요.', target: { plan: { work: 10, rounds: 3 } } } } },
            TORD('긴장 풀기 차례를 놓아요.', '긴장 풀기 차례', ['천천히 숨쉬기', '어깨 돌리기', '손 쥐었다 펴기'], 2, 0.15),
            SCHK('긴장 풀기에서 해 본 것에 표시해요.', '긴장 풀기 점검', ['천천히 숨 쉬었어요', '어깨를 돌렸어요', '편하게 앉았어요', '손을 쥐었다 폈어요'], 2, 3, 0.15, { conclude: '긴장될 때는 천천히 숨쉬기, 어깨 돌리기, 손 쥐었다 펴기로 몸을 풀 수 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'check', prompt: '긴장될 때 해 볼 방법에 표시해요.', options: ['천천히 숨쉬기', '어깨 돌리기', '손 쥐었다 펴기'] }] },
        notes: '교사가 이끄는 몸 활동이다. 숨쉬기 시간·횟수는 우리 반 약속 값이다. 숨을 오래 참게 하지 않으며, 불편하면 언제든 멈춘다.',
      }),
      C({
        id: 'auto.e34.g4-adapt.wrap.track', type: 'wrap', title: '목표 실천 기록 그래프',
        method: '목표 실천 기록 그래프', tool: 'chart', minutes: 7,
        levels: { easy: '3일(월·화·수) 막대를 완성한다.', base: '5일 막대를 완성한다.', challenge: '5일을 완성하고 가장 많이 한 날을 찾아 그날 무엇이 도왔을지 말한다(출구 2번).' },
        wrap: {
          teacher: '"가상의 친구 나래가 \'줄넘기 50번\'을 일주일 동안 몇 번 했는지 적었어요. 막대로 나타내 볼까요?" 표를 함께 읽으며 막대를 쌓는다. 수요일처럼 적게 한 날을 보고 "실패한 걸까요?"라고 묻고, "적게 한 날도 기록하면 다음 날 무엇을 바꿀지 보여요"라고 짚는다. 다음 주부터는 내 목표를 같은 방법으로 기록해 볼 수 있다고 안내하되, 내 기록은 다른 친구와 견주지 않는다.',
          exitTicket: [
            { type: 'tool', tool: 'chart', options: BAR('나래의 목표 실천 횟수', DAYS, { mode: 'build', showTable: true, max: 5, xLabel: '요일', yLabel: '실천 횟수' }), prompt: '표를 보고 실천 기록 막대를 완성해요.', target: { build: true }, difficulty: 0.15,
              levels: { easy: { prompt: '표를 보고 3일 막대를 완성해요.', toolOptions: { data: DAYS.slice(0, 3) } } } },
            CH('나래가 가장 많이 실천한 날은?', ['화요일', '수요일', '목요일'], 2, '목요일에 4번으로 가장 많아요.'),
            MOOD,
          ],
        },
        worksheet: {
          title: '나의 목표 실천 기록',
          items: [
            { type: 'table', prompt: '이번 주에 내 목표를 실천한 날에 ○를 해요.', columns: ['월', '화', '수', '목', '금'], cells: [['', '', '', '', '']], answer: '(스스로 표시)' },
            { type: 'short', prompt: '실천이 적은 날, 다음에 바꿀 방법을 한 줄로 써요.' },
          ],
          easy: { note: '막대 끝이 닿은 눈금을 읽어요.', items: [{ type: 'draw', prompt: '목표를 실천하는 내 모습을 그려요.' }] },
        },
      }),
      C({
        id: 'auto.e34.g4-adapt.wrap.card', type: 'wrap', title: '내 목표 카드 꾸미기',
        method: '내 목표 카드 꾸미기', tool: 'collage', minutes: 7,
        levels: { easy: '목표·단계 조각 2개 이상으로 카드를 꾸미고 표시한다.', base: '조각 4개 이상(목표 별 1·단계 조각 3)으로 꾸미고 표시한다.', challenge: '조각 4개 이상으로 꾸미고, 응원 문구를 말로 정한 것까지 표시한다(문구는 활동지에 쓴다).' },
        wrap: {
          teacher: '"큰 별은 학기 말 목표, 작은 조각 셋은 이번 주·이번 달·학기 말 단계예요. 내 목표 카드를 꾸며 볼까요?" 조각을 붙이며 단계를 한 문장씩 말하게 한다. 응원 문구는 활동지에 써서 카드 아래에 붙인다(예: "걸려도 다시 뛰면 돼"). 출구 2번에서 \'걱정은 없어야 한다\'를 고른 학생에게 "오늘 배운 긴장 풀기를 떠올려 볼까요? 걱정은 다루는 것이었지요?"라고 되묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'collage', options: CARD, prompt: '목표 별과 단계 조각으로 카드를 꾸며요.', target: { selfCheck: ['목표를 정했어요', '단계를 나눴어요'], minPieces: 4 }, difficulty: 0.1,
              levels: { easy: { target: { selfCheck: ['목표를 정했어요', '단계를 나눴어요'], minPieces: 2 } }, challenge: { target: { selfCheck: ['목표를 정했어요', '단계를 나눴어요', '응원 문구를 정했어요'], minPieces: 4 } } } },
            CH('걱정에 대한 바른 생각은?', ['걱정은 없어야 정상이에요', '걱정은 누구나 하고 다룰 수 있어요', '걱정되면 무조건 피해요'], 1, '걱정은 누구나 해요. 도움 되는 생각과 몸 풀기로 다룰 수 있어요.'),
            MOOD,
          ],
        },
        worksheet: {
          title: '나의 학기 목표 카드',
          items: [
            { type: 'short', prompt: '내 학기 목표를 해낼 수 있게 한 줄로 써요.' },
            { type: 'short', prompt: '나에게 해 줄 응원 문구를 써요.' },
          ],
          easy: { note: '"이번 학기에 나는 ○○을 할 거예요."로 써 봐요.', items: [{ type: 'draw', prompt: '목표를 해낸 내 모습을 그려요.' }] },
        },
      }),
    );
  }

  // ======================================================================================================
  // 4학년 · 교실 생물 돌봄과 함께 쓰는 물건 (자치활동 — 기본생활습관 형성 활동: 생명존중·민주시민 의식)
  // ======================================================================================================
  {
    const C = T('g4-habit', 4);
    const BROKEN = [['공', 3], ['줄넘기', 2], ['가위', 5], ['풀', 1]];
    M.push(
      C({
        id: 'auto.e34.g4-habit.intro.pet', type: 'intro', title: '물고기에게 필요한 것',
        method: '교실 생물 그림 보고 필요한 것 고르기', tool: 'wordcards', minutes: 6,
        levels: { easy: '필요한 것 2장(깨끗한 물·알맞은 먹이)이 바구니에 담기는 것을 함께 본다.', base: '3장(알맞은 온도까지)이 담기는 것을 보고 하나씩 까닭을 말한다.', challenge: '4장(조용한 자리까지)이 담기는 것을 보고, 담기지 않은 \'먹이 많이 주기\'가 왜 빠졌는지 말한다.' },
        intro: {
          teacher: '"가상의 우리 반 어항에 물고기가 살아요. 물고기가 건강하려면 무엇이 필요할까요?" 시연 단추로 필요한 것 카드가 바구니에 담기는 모습을 보인다. "먹이를 많이 주면 더 잘 커요"라는 말이 나오면 "물고기가 다 못 먹은 먹이는 물속에서 어떻게 될까요? 물이 더러워지면요?"라고 되물어 알맞은 양이 중요하다는 것을 짚는다. 생물을 돌보는 일은 생명을 지키는 책임이라고 밝힌다.',
          student: '어항 속 물고기에게 필요한 것을 골라 보고, 왜 필요한지 짝에게 말해 보아요.',
          demo: { tool: 'wordcards', options: { mode: 'pick', basket: '물고기에게 필요한 것', cards: ['깨끗한 물', '먹이 많이 주기', '알맞은 먹이', '어항 두드리기', '알맞은 온도', '조용한 자리'] }, sequence: [{ pick: ['깨끗한 물', '알맞은 먹이'] }, { pick: ['깨끗한 물', '알맞은 먹이', '알맞은 온도'] }, { pick: ['깨끗한 물', '알맞은 먹이', '알맞은 온도', '조용한 자리'] }] },
          art: { draw: 'a paper cut classroom fish tank on a shelf with two small paper fish, green paper water plants and a tiny paper food jar beside it', banner: '물고기에게 무엇이 필요할까?', extra: [{ motif: 'leaf', x: 300, y: 96 }] },
        },
      }),
      C({
        id: 'auto.e34.g4-habit.intro.share', type: 'intro', title: '함께 쓰는 물건이 있는 곳',
        method: '함께 쓰는 물건 찾기', tool: 'map', minutes: 6,
        levels: { easy: '학교 지도에서 도서관·체육관 두 곳에 핀이 꽂히는 것을 본다.', base: '교실까지 세 곳을 보고 그곳에서 함께 쓰는 물건을 말한다.', challenge: '화장실까지 네 곳을 보고, 함께 쓰는 물건을 아끼는 방법을 짝에게 말한다.' },
        intro: {
          teacher: '"학교에는 나 혼자가 아니라 모두 함께 쓰는 물건이 많아요. 어디에 있을까요?" 시연 단추로 가상의 학교 지도에 핀이 차례로 꽂히는 모습을 보이고, 곳마다 "여기서는 무엇을 함께 쓰나요?"라고 묻는다(기다릴 반응: "책이요", "공이요", "휴지요"). "함께 쓰는 건 내 것이 아니니 막 써도 돼요"라는 말이 나오면 "그 공을 다음에 쓸 사람은 누구일까요? 바람 빠진 공을 받으면 어떨까요?"라고 되묻는다.',
          student: '학교 지도에서 함께 쓰는 물건이 있는 곳을 찾아보고, 그곳의 물건을 어떻게 쓰면 좋을지 말해 보아요.',
          demo: { tool: 'map', options: SCHOOL, sequence: [{ pin: [4, 0] }, { pin: [3, 2] }, { pin: [0, 0] }, { pin: [5, 2] }] },
          art: { draw: 'a paper cut school map with a library shelf of books, a gym basket of balls, a classroom crayon box and a restroom tissue holder, small paper pins standing on each', banner: '함께 쓰는 물건은 어디에?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
      }),
      C({
        id: 'auto.e34.g4-habit.activity.order', type: 'activity', title: '먹이 주기 당번 차례',
        method: '먹이 주기 당번 차례 놓기', tool: 'story', minutes: 14,
        levels: { easy: '장면 3장을 처음·다음·끝으로 놓는다. 놓으면 바로 맞는지 알려 준다.', base: '장면 4장을 차례대로 놓은 뒤 확인한다.', challenge: '빠뜨리면 안 되는 장면을 놓치게 하는 틀린 카드 한 장이 섞인 5장에서 그것을 빼고 4장을 놓는다.' },
        activity: {
          title: '돌봄 당번 차례', tool: 'story',
          teacher: '"먹이 주기 당번이 맨 먼저 할 일은 무엇일까요? 손을 씻는 까닭은 무엇일까요?" 카드를 다 놓으면 모둠이 차례대로 손짓으로 따라 한다. \'기록하기\'를 빼먹는 학생에게 "다음 당번은 오늘 먹이를 줬는지 어떻게 알까요? 두 번 주면 어떻게 될까요?"라고 묻는다. 돌봄은 하는 것뿐 아니라 기록해서 다음 사람에게 넘기는 것까지라는 점을 짚는다.',
          task: '교실 생물을 돌보는 장면 카드를 하는 차례대로 놓아요.', levels: CARD_LV,
          items: [
            ORD('물고기 먹이 주기 차례로 놓아요.', { named: true, title: '물고기 먹이 주기' }, [{ id: 'wash', text: '손 씻기' }, { id: 'feed', text: '알맞은 양 주기' }, { id: 'watch', text: '먹는지 살펴보기' }, { id: 'note', text: '기록판에 적기' }], 2, { id: 'pour', text: '먹이 한 통 붓기', why: '먹이를 많이 부으면 남은 먹이에 물이 더러워져요.' }, 0.15),
            ORD('강낭콩 화분 물 주기 차례로 놓아요.', { named: true, title: '강낭콩 화분 돌보기' }, [{ id: 'soil', text: '흙이 말랐는지 보기' }, { id: 'water', text: '알맞게 물 주기' }, { id: 'sun', text: '햇빛 드는 곳에 두기' }, { id: 'rec', text: '자란 모습 적기' }], 1, { id: 'flood', text: '물 넘치게 붓기', why: '물을 너무 많이 주면 뿌리가 상할 수 있어요.' }, 0.2),
            ORD('어항 둘레 돌보기 차례로 놓아요.', { named: true, title: '어항 둘레 돌보기' }, [{ id: 'look', text: '물이 탁한지 보기' }, { id: 'tell', text: '선생님께 알리기' }, { id: 'help', text: '선생님과 물 갈기' }, { id: 'write', text: '기록판에 적기' }], 2, { id: 'tap', text: '어항 두드리기', why: '어항을 두드리면 물고기가 놀라고 힘들어해요.' }, 0.25, { conclude: '돌봄은 손 씻기부터 기록하기까지, 생명을 지키는 차례를 지키는 거예요.' }),
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '손 씻기 → 알맞은 양 주기 → 살펴보기 → ___에 적기', answer: '기록판' }] },
        notes: '어항 물 갈기는 교사와 함께 한다. 생물을 기르기 어려운 학급은 그림 속 가상의 교실로만 해도 된다.',
      }),
      C({
        id: 'auto.e34.g4-habit.activity.duty', type: 'activity', title: '당번 기록판 쓰기',
        method: '당번 기록판 쓰기', tool: 'timer', minutes: 13,
        levels: { easy: '기록판 1칸(먹이 준 횟수)을 옮겨 적고, 당번 차례 카드 3장을 놓는다.', base: '기록판 3칸(날짜·먹이·물 확인)을 옮겨 적고, 차례 카드 4장을 놓은 뒤 해 본 것 3칸에 표시한다.', challenge: '3칸을 적고 차례 4장을 놓은 뒤, 다음 당번에게 안내한 것까지 4칸에 표시한다.' },
        activity: {
          title: '당번 기록판 쓰기', tool: 'timer',
          teacher: '"오늘 당번 나래가 한 일을 기록판에 옮겨 볼까요? 날짜, 먹이 준 횟수, 물 확인을 적어요." 교사가 실제 학급 기록판을 보이며 칸마다 무엇을 적는지 함께 읽는다. 날짜 칸을 비워 두는 학생에게 "날짜가 없으면 언제 한 일인지 다음 당번이 알 수 있을까요?"라고 묻는다. 당번의 책임은 다음 사람이 이어받을 수 있게 남기는 것까지라는 점을 짚는다.',
          task: '가상의 당번 나래가 한 일을 기록판에 옮겨 적고, 당번 차례를 맞춘 뒤 해 본 것에 표시해요.', levels: SAME,
          items: [
            { prompt: '나래의 기록(12일, 먹이 1번, 물 확인 2번)을 옮겨 적어요.', toolOptions: { title: '돌봄 당번 기록판(가상)', fields: [{ label: '날짜', unit: '일' }, { label: '먹이', unit: '번' }, { label: '물 확인', unit: '번' }] }, target: { records: [12, 1, 2] }, difficulty: 0.15,
              levels: { easy: { prompt: '나래가 먹이 준 횟수(1번)를 옮겨 적어요.', toolOptions: { fields: [{ label: '먹이', unit: '번' }] }, target: { records: [1] } } } },
            TORD('당번이 하는 일의 차례를 놓아요.', '당번 차례', ['기록판 먼저 보기', '돌봄 하기', '기록판에 적기', '다음 당번에게 알리기'], 3, 0.15),
            SCHK('당번 일에서 해 본 것에 표시해요.', '당번 점검', ['기록판을 봤어요', '날짜를 적었어요', '한 일을 적었어요', '다음 당번에게 알렸어요'], 2, 3, 0.15, { conclude: '당번은 하고, 적고, 다음 사람에게 알려 주는 것까지 책임져요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '돌봄 기록판을 채워요.', columns: ['날짜', '한 일', '당번'], cells: [['', '', '']], answer: '(학급마다 다름)' }] },
        notes: '교사와 함께 쓰는 기록판이다. 당번 이름은 가명이나 번호로 적고, 기록을 친구끼리 견주지 않는다.',
      }),
      C({
        id: 'auto.e34.g4-habit.activity.judge', type: 'activity', title: '함께 쓰는 물건 상황 판단',
        method: '함께 쓰는 물건 상황 판단', tool: 'emotion', minutes: 14,
        levels: { easy: '장면마다 보기 2개(바른 것 1·아닌 것 1) 가운데 골라 다음 사람 마음을 본다.', base: '장면마다 보기 3개 가운데 골라 결과와 다음 사람 마음을 본다.', challenge: '보기 3개 가운데 고르되 결과·마음은 고르고 확인한 뒤에만 보여, 먼저 까닭을 짝에게 말한다.' },
        activity: {
          title: '함께 쓰는 물건 상황', tool: 'emotion',
          teacher: '"빌려 쓴 공이 바람이 빠졌어요. 그냥 바구니에 넣으면 다음 사람은 어떨까요?" 보기를 고를 때마다 결과와 다음 사람의 마음을 소리 내어 읽게 한다. "내가 망가뜨린 게 아니면 상관없어요"라는 학생에게 "다음 사람이 망가진 걸 모르고 쓰다 다치면 어떻게 될까요?"라고 묻는다. 함께 쓰는 물건은 다음 사람을 생각하며 쓰고, 고장 나면 알리는 것이 책임이라는 점을 짚는다.',
          task: '함께 쓰는 물건을 쓰는 장면을 읽고 행동을 골라, 다음 사람의 마음을 보아요.', levels: SAME,
          items: [
            BR('빌려 쓴 공이 바람이 빠졌어요. 어떻게 할까요?', '체육관 공을 빌려 썼는데 바람이 빠졌어요.', [
              { id: 'hide', text: '바구니 맨 아래에 넣어요', result: '다음 반 친구가 쓰려다 못 썼어요.', mood: '속상함' },
              { id: 'tell', text: '선생님께 알리고 돌려줘요', result: '선생님이 바람을 넣어 두셨어요.', mood: '고마움' },
              { id: 'throw', text: '구석에 던져 둬요', result: '공이 굴러다녀 누가 밟을 뻔했어요.', mood: '걱정' },
            ], 'tell', 0.15),
            BR('모둠 줄넘기가 엉켰어요. 어떻게 할까요?', '쉬는 시간에 쓴 줄넘기가 엉켜 있어요. 종이 쳤어요.', [
              { id: 'leave', text: '엉킨 채 두고 들어가요', result: '다음 사람이 푸느라 놀지 못했어요.', mood: '서운함' },
              { id: 'pull', text: '세게 잡아당겨요', result: '줄이 끊어져 못 쓰게 됐어요.', mood: '속상함' },
              { id: 'untie', text: '풀어서 제자리에 걸어요', result: '다음 사람이 바로 쓸 수 있었어요.', mood: '편안함' },
            ], 'untie', 0.2),
            BR('도서관 책 한 쪽이 찢어져 있어요. 어떻게 할까요?', '빌린 도서관 책을 펼쳤더니 한 쪽이 찢어져 있어요.', [
              { id: 'say', text: '반납할 때 사서 선생님께 말해요', result: '선생님이 책을 고쳐 다음 사람이 읽었어요.', mood: '고마움' },
              { id: 'tape', text: '몰래 가위로 잘라 내요', result: '그 쪽 이야기가 사라졌어요.', mood: '속상함' },
              { id: 'quiet', text: '모르는 척 반납해요', result: '다음 사람이 자기가 찢은 줄 알고 걱정했어요.', mood: '걱정' },
            ], 'say', 0.25, { conclude: '함께 쓰는 물건은 다음 사람을 생각하며 쓰고, 고장 나면 숨기지 않고 알려요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '빌려 쓴 물건이 고장 났을 때 할 일은?', options: ['몰래 돌려놓아요', '선생님께 알려요', '버려요'], answer: '선생님께 알려요' }] },
      }),
      C({
        id: 'auto.e34.g4-habit.activity.sort', type: 'activity', title: '아끼는 행동·아닌 행동',
        method: '아끼는 행동·아닌 행동 나누기', tool: 'sortboard', minutes: 13,
        levels: { easy: '행동 카드 4장, 틀린 바구니에 넣으면 까닭을 말하고 되돌아온다. 바구니에 든 장 수가 보인다.', base: '행동 카드 6장을 다 넣은 뒤 확인한다.', challenge: '헷갈리는 카드 2장이 더해진 8장을 나누고, 고른 까닭을 짝에게 말한다.' },
        activity: {
          title: '아끼는 행동 나누기', tool: 'sortboard',
          teacher: '"공원 의자에 올라가 뛰는 것은 함께 쓰는 물건을 아끼는 행동일까요?" 카드를 넣을 때마다 "이렇게 하면 다음 사람은 어떻게 될까요?"를 묻는다. \'휴지 많이 뽑아 쓰기\'를 아끼는 행동에 넣는 학생에게 "다음 사람이 쓸 휴지가 남을까요?"라고 되묻는다. 공공장소의 물건은 모두의 것이라 더 아껴 써야 한다는 점을 짚는다.',
          task: '학교와 공공장소에서 하는 행동 카드를 아끼는 행동과 아닌 행동으로 나누어요.', levels: BOARD_LV,
          items: [
            SORT('학교에서 하는 행동을 나누어요.', {}, ['아껴요', '아니에요'], [['쓴 공을 바구니에', '책을 제자리에 꽂기', '물은 쓸 만큼 틀기'], ['책에 낙서하기', '휴지 많이 뽑아 쓰기', '크레파스 부러뜨리기']], 2, [['고장 나면 알리기'], ['수도꼭지 틀어 두기']], 0.15),
            SORT('공원에서 하는 행동을 나누어요.', {}, ['아껴요', '아니에요'], [['의자에 바르게 앉기', '쓰레기는 쓰레기통에', '꽃밭 밖으로 걷기'], ['의자에 올라가 뛰기', '놀이기구에 낙서', '나뭇가지 꺾기']], 2, [['그네 차례 지키기'], ['음료 쏟고 그냥 가기']], 0.2),
            SORT('도서관에서 하는 행동을 나누어요.', {}, ['아껴요', '아니에요'], [['책장 살살 넘기기', '빌린 날까지 돌려주기', '책을 깨끗한 손으로'], ['책 접어서 표시하기', '책 위에 음료 두기', '빌린 책 오래 두기']], 2, [['찢어진 곳 알리기'], ['책 던져서 반납']], 0.25, { conclude: '함께 쓰는 물건과 공공장소는 모두의 것이에요. 다음 사람을 위해 아껴 써요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '우리 반에서 함께 쓰는 물건 하나와 그것을 아끼는 방법을 써요.' }] },
      }),
      C({
        id: 'auto.e34.g4-habit.wrap.graph', type: 'wrap', title: '고장 난 물건 수 그래프',
        method: '고장 난 물건 수 그래프', tool: 'chart', minutes: 7,
        levels: { easy: '물건 3종(공·줄넘기·가위)의 막대를 완성한다.', base: '4종(풀까지)의 막대를 완성한다.', challenge: '4종을 완성하고, 가장 많은 물건을 줄일 방법을 고른다(출구 2번).' },
        wrap: {
          teacher: '"가상의 우리 반이 학급 물건을 점검했더니 고장 난 것이 이만큼 나왔어요. 막대로 나타내 볼까요?" 표를 함께 읽으며 막대를 쌓는다. 가장 많은 물건을 찾은 뒤 "가위가 왜 많이 망가졌을까요? 무엇을 바꾸면 줄어들까요?"라고 묻는다. 누가 망가뜨렸는지 찾지 않고, 앞으로 아낄 방법을 정하는 데 쓰는 그래프라고 밝힌다.',
          exitTicket: [
            { type: 'tool', tool: 'chart', options: BAR('학급 물건 점검 — 고장 난 수', BROKEN, { unit: '개', mode: 'build', showTable: true, xLabel: '물건', yLabel: '고장 난 수' }), prompt: '점검 표를 보고 고장 난 물건 막대를 완성해요.', target: { build: true }, difficulty: 0.15,
              levels: { easy: { prompt: '점검 표를 보고 3종의 막대를 완성해요.', toolOptions: { data: BROKEN.slice(0, 3) } } } },
            CH('가위 고장을 줄일 방법으로 알맞은 것은?', ['쓴 뒤 날 닫아 통에 넣어요', '아무 데나 둬요', '고장 나면 숨겨요'], 0, '쓴 뒤 정리하면 물건이 덜 망가져요.'),
            MOOD,
          ],
        },
        worksheet: {
          title: '함께 쓰는 물건 아끼기',
          items: [
            { type: 'table', prompt: '그래프를 보고 고장 난 수를 써요.', columns: ['물건', '고장 난 수(개)'], cells: [['공', ''], ['가위', '']], answer: '3, 5' },
            { type: 'short', prompt: '고장 난 물건을 줄일 우리 반 약속을 한 줄로 써요.' },
          ],
          easy: { note: '막대 끝이 닿은 눈금을 읽어요.', items: [{ type: 'draw', prompt: '학급 물건을 제자리에 두는 모습을 그려요.' }] },
        },
      }),
      C({
        id: 'auto.e34.g4-habit.wrap.pledge', type: 'wrap', title: '돌봄 다짐 하나 고르기',
        method: '돌봄 다짐 하나 고르기', tool: 'wordcards', minutes: 7,
        levels: { easy: '보기 2장(바른 다짐 1·아닌 것 1) 가운데 바른 다짐을 담는다.', base: '보기 3장 가운데 바른 다짐 2장을 담고, 내가 지킬 하나를 짝에게 말한다.', challenge: '담은 뒤 내가 지킬 다짐과 그 까닭을 활동지에 쓴다.' },
        wrap: {
          teacher: '"생물을 돌보고 물건을 아끼는 다짐 가운데 바른 다짐만 담아 볼까요? 그다음 내가 꼭 지킬 하나를 정해요." 카드를 담은 뒤 "나는 ○○을 다짐해요. 왜냐하면 ○○이기 때문이에요." 틀로 짝에게 말하게 한다. 무엇을 골랐는지는 채점하지 않는다. 출구 2번에서 \'내 것이 아니니 괜찮다\'를 고른 학생에게 오늘 본 다음 사람의 마음을 다시 떠올리게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'wordcards', options: { mode: 'pick', basket: '돌봄 다짐', cards: ['먹이는 알맞게 줘요', '어항을 두드려요', '고장 나면 알려요'] }, prompt: '바른 돌봄 다짐만 담아요.', target: { pick: ['먹이는 알맞게 줘요', '고장 나면 알려요'] }, difficulty: 0.1,
              levels: { easy: { toolOptions: { cards: ['먹이는 알맞게 줘요', '어항을 두드려요'] }, target: { pick: ['먹이는 알맞게 줘요'] } } } },
            CH('함께 쓰는 물건에 대한 바른 생각은?', ['내 것이 아니니 막 써도 돼요', '다음 사람을 위해 아껴 써요', '고장 나면 숨겨요'], 1, '함께 쓰는 물건은 다음 사람을 생각하며 아껴 써요.'),
            MOOD,
          ],
        },
        worksheet: {
          title: '나의 돌봄 다짐',
          items: [
            { type: 'short', prompt: '내가 지킬 돌봄 다짐 하나를 써요.' },
            { type: 'short', prompt: '그 다짐을 고른 까닭을 한 줄로 써요.' },
          ],
          easy: { note: '"나는 ○○을 다짐해요."로 써 봐요.', items: [{ type: 'draw', prompt: '교실 생물을 돌보는 내 모습을 그려요.' }] },
        },
      }),
    );
  }

  // ======================================================================================================
  // 4학년 · 까닭 붙여 말하기와 갈등 풀기 (자치활동 — 관계 형성 및 소통 활동: 토의⋅토론)
  // ======================================================================================================
  {
    const C = T('g4-rel', 4);
    const WAYS = [['번갈아 하기', 5], ['같이 하기', 3], ['가위바위보', 2], ['시간 나누기', 4]];
    M.push(
      C({
        id: 'auto.e34.g4-rel.intro.why', type: 'intro', title: '의견과 까닭 짝 고르기',
        method: '의견과 까닭 짝 고르기', tool: 'emotion', minutes: 6,
        levels: { easy: '의견 2줄에 까닭 카드가 이어지는 것을 함께 본다.', base: '의견 3줄에 까닭이 이어지는 것을 보고 "왜냐하면"을 넣어 읽는다.', challenge: '의견 4줄을 보고, 하나에 다른 까닭을 붙여 짝에게 말한다.' },
        intro: {
          teacher: '"\'급식 전에 손 씻자!\' 이렇게만 말하면 친구들이 왜 그래야 하는지 알까요?" 시연 단추로 의견에 까닭 카드가 이어지는 모습을 보이고, "○○하자. 왜냐하면 ○○이기 때문이야." 틀로 함께 읽는다. "까닭은 안 말해도 돼요"라는 말이 나오면 "까닭이 없으면 다른 친구가 내 의견에 찬성할까요?"라고 되묻는다. 오늘은 까닭을 붙여 말하고, 다른 의견도 존중하며 듣는 법을 배운다고 밝힌다.',
          student: '의견 카드와 알맞은 까닭 카드를 이어 보고, "왜냐하면"을 넣어 소리 내어 읽어 보아요.',
          demo: { tool: 'emotion', options: { mode: 'match', slots: [{ id: 'hand', label: '급식 전에 손 씻자' }, { id: 'walk', label: '복도에서는 걷자' }, { id: 'quiet', label: '도서관에선 조용히' }, { id: 'turn', label: '그네는 차례로 타자' }], cards: ['모두 탈 수 있어서', '읽는 친구를 위해', '부딪히지 않게', '병균을 없애려고'], weather: false }, sequence: [{ match: { hand: '병균을 없애려고', walk: '부딪히지 않게' } }, { match: { hand: '병균을 없애려고', walk: '부딪히지 않게', quiet: '읽는 친구를 위해' } }, { match: { hand: '병균을 없애려고', walk: '부딪히지 않게', quiet: '읽는 친구를 위해', turn: '모두 탈 수 있어서' } }] },
          art: { draw: 'a paper cut classroom with two paper children talking, one holding a speech bubble card and the other a card with a small paper key, as if the reason unlocks the idea', banner: '까닭을 붙여 말해요', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
      }),
      C({
        id: 'auto.e34.g4-rel.intro.conflict', type: 'intro', title: '갈등 장면에서 문제 찾기',
        method: '갈등 장면 그림에서 문제 찾기', tool: 'wordcards', minutes: 6,
        levels: { easy: '보기 2장 가운데 문제 카드 하나가 담기는 것을 함께 본다.', base: '보기 3장 가운데 문제 카드가 담기는 것을 보고 까닭을 말한다.', challenge: '장면에 숨은 문제 두 가지가 담기는 것을 보고, 둘이 어떻게 이어지는지 말한다.' },
        intro: {
          teacher: '"그림 속 모둠이 포스터를 만들다 다투고 있어요. 무엇이 문제일까요?" 시연 단추로 문제 카드가 바구니에 담기는 모습을 보인다(기다릴 반응: "둘 다 색칠하고 싶어해요", "서로 말을 안 들어요"). "다른 의견을 말하는 친구는 나를 싫어하는 거예요"라는 말이 나오면 "생각이 다른 것과 싫어하는 것은 같을까요?"라고 되물어, 갈등은 생각이 다를 때 생기는 자연스러운 일이고 풀 수 있다는 것을 짚는다.',
          student: '그림 속 모둠이 다투는 장면을 보고 무엇이 문제인지 골라 보아요.',
          demo: { tool: 'wordcards', options: { mode: 'pick', basket: '이 장면의 문제', cards: ['둘 다 색칠하고 싶어요', '포스터 종이가 커요', '서로 말을 안 들어요', '날씨가 맑아요'] }, sequence: [{ pick: ['둘 다 색칠하고 싶어요'] }, { pick: ['둘 다 색칠하고 싶어요', '서로 말을 안 들어요'] }] },
          art: { draw: 'a paper cut group table with a large paper poster, two paper children pulling the same crayon box with small storm clouds above, two others watching', banner: '무엇이 문제일까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '"친구와 다툰 적 있나요?"처럼 학생의 친구 관계를 묻지 않는다. 그림 속 가상의 모둠 일로만 이야기한다.',
      }),
      C({
        id: 'auto.e34.g4-rel.activity.ok', type: 'activity', title: '까닭 있는 말·없는 말',
        method: '까닭 있는 말·없는 말 나누기', tool: 'sortboard', minutes: 14,
        levels: { easy: '말 카드 4장, 틀린 바구니에 넣으면 까닭을 말하고 되돌아온다. 바구니에 든 장 수가 보인다.', base: '말 카드 6장을 다 넣은 뒤 확인한다.', challenge: '헷갈리는 카드 2장이 더해진 8장을 나누고, \'까닭 없어요\' 카드 하나에 까닭을 붙여 활동지에 쓴다.' },
        activity: {
          title: '까닭 있는 말·없는 말', tool: 'sortboard',
          teacher: '"\'피구 하자, 그냥!\'과 \'피구 하자, 모두 함께 할 수 있으니까\' 가운데 어느 말에 찬성하고 싶나요?" 카드를 넣을 때마다 "이 말에 \'왜냐하면\'이 들어 있나요? 숨어 있나요?"를 묻는다. \'내가 하고 싶으니까\'를 까닭 있어요에 넣으려는 학생에게 "그 까닭은 다른 친구도 고개를 끄덕일까요?"라고 되물어, 까닭은 듣는 사람도 받아들일 수 있어야 한다는 점을 짚는다.',
          task: '학급 회의에서 나온 말 카드를 까닭이 있는 말과 없는 말로 나누어요.', levels: BOARD_LV,
          items: [
            SORT('놀이 정하기에서 나온 말을 나누어요.', {}, ['까닭 있어요', '까닭 없어요'], [['피구 하자, 모두 할 수 있으니까', '술래잡기 하자, 운동장이 넓어', '실내 놀이 하자, 비가 오니까'], ['피구 하자, 그냥!', '무조건 술래잡기야', '내 말대로 해']], 2, [['줄넘기 하자, 줄이 많으니까'], ['다들 내 편이지?']], 0.15),
            SORT('교실 꾸미기에서 나온 말을 나누어요.', {}, ['까닭 있어요', '까닭 없어요'], [['파란색 하자, 차분해지니까', '창가에 화분 두자, 햇빛이 드니까', '게시판 낮추자, 모두 보게'], ['빨간색이 무조건 좋아', '그냥 여기 두자', '싫어, 그건 별로야']], 2, [['책장 옮기자, 길이 넓어지니까'], ['내가 하고 싶으니까']], 0.2),
            SORT('현장 체험 장소 정하기에서 나온 말을 나누어요.', {}, ['까닭 있어요', '까닭 없어요'], [['박물관 가자, 사회와 이어져', '숲에 가자, 곤충을 볼 수 있어', '과학관 가자, 비가 와도 되니까'], ['놀이공원! 끝!', '거긴 재미없어', '아무 데나 가']], 2, [['가까운 데 가자, 오래 보게'], ['내가 가 봤으니까']], 0.25, { conclude: '의견에 까닭을 붙이면, 다른 친구가 내 생각을 알고 함께 고를 수 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '"피구 하자, 그냥!"에 까닭을 붙여 다시 써요.' }] },
      }),
      C({
        id: 'auto.e34.g4-rel.activity.talk', type: 'activity', title: '짝 의견 되짚어 듣기',
        method: '짝 의견 말하기·되짚어 듣기', tool: 'timer', minutes: 13,
        levels: { easy: '말하고 되짚는 차례 카드 3장을 놓고, 1번 해 보게 타이머를 맞춘다.', base: '차례 카드 4장을 놓고, 2번 하게 맞춘 뒤 해 본 것 3칸에 표시한다.', challenge: '4장을 놓고 역할을 바꿔 3번 하게 맞춘 뒤, 바꿔서 해 본 것까지 4칸에 표시한다.' },
        activity: {
          title: '짝 의견 되짚어 듣기', tool: 'timer',
          teacher: '"짝이 의견과 까닭을 말하면, 듣는 사람은 \'네 말은 ○○라는 거지?\' 하고 되짚어요. 맞으면 짝이 \'응\' 하고 끝나요." 교사가 시간을 알리고, 신호가 오면 말하는 사람과 듣는 사람을 바꾼다. 짝의 말을 듣자마자 "아니야, 그건 틀렸어"라고 하는 학생에게 "먼저 짝의 말을 되짚어 주면 짝은 어떤 마음일까요? 내 의견은 그다음에 말해도 돼요"라고 말해 준다. 되짚어 듣기는 찬성한다는 뜻이 아니라 잘 들었다는 표시라는 점을 짚는다.',
          task: '말하고 되짚어 듣는 차례를 맞추고, 짝과 역할을 바꾸며 해 본 뒤 표시해요.', levels: SAME,
          items: [
            TORD('말하고 되짚어 듣는 차례를 놓아요.', '되짚어 듣기 차례', ['의견 말하기', '까닭 말하기', '"네 말은 ○○지?"', '"응, 맞아"'], 3, 0.1),
            { prompt: '말하기 40초, 바꾸기 10초로 2번 하게 맞춰요.', toolOptions: { title: '짝 대화(우리 반 약속)', labels: ['말하기', '바꾸기'], plan: { work: 20, rest: 5, rounds: 1 } }, target: { plan: { work: 40, rest: 10, rounds: 2 } }, difficulty: 0.15,
              hints: ['말하기·바꾸기·번 칸을 차례로 봐요.', '말하기 칸과 바꾸기 칸은 초로 맞춰요.', '문제 글의 초와 횟수를 그대로 맞춰요.'],
              levels: { easy: { prompt: '말하기 40초로 1번 하게 맞춰요.', target: { plan: { work: 40, rounds: 1 } } }, challenge: { prompt: '역할을 바꿔 3번 하게 맞춰요.', target: { plan: { work: 40, rest: 10, rounds: 3 } } } } },
            SCHK('짝 대화에서 해 본 것에 표시해요.', '되짚어 듣기 점검', ['까닭을 붙여 말했어요', '끝까지 들었어요', '"네 말은 ○○지?" 했어요', '역할을 바꿔 했어요'], 2, 3, 0.15, { conclude: '까닭을 붙여 말하고, 되짚어 들으면 생각이 달라도 서로 존중할 수 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '되짚어 듣는 말을 채워요.', text: '"네 말은 ___라는 거지?"', answer: '(짝의 의견)' }] },
        notes: '교사가 시간을 알리는 짝 활동이다. 말하기 시간은 우리 반 약속 값이다. 짝 대화 주제는 "쉬는 시간 놀이"처럼 가벼운 것으로 하고, 친구 관계나 가정 이야기는 고르지 않는다.',
      }),
      C({
        id: 'auto.e34.g4-rel.activity.steps', type: 'activity', title: '갈등 푸는 단계 놓기',
        method: '갈등 푸는 단계 놓기', tool: 'story', minutes: 14,
        levels: { easy: '단계 카드 3장을 처음·다음·끝으로 놓는다. 놓으면 바로 맞는지 알려 준다.', base: '단계 카드 4장(멈추기·마음 말하기·방법 찾기·정하기)을 차례대로 놓는다.', challenge: '단계가 아닌 말풍선 카드 한 장이 섞인 5장에서 그것을 빼고 4장을 놓는다.' },
        activity: {
          title: '갈등 푸는 단계', tool: 'story',
          teacher: '"다툼이 생기면 먼저 멈춰요. 그다음 서로의 마음을 말하고, 방법을 찾고, 함께 정해요." 카드를 다 놓으면 모둠이 단계마다 할 말을 한마디씩 붙여 본다(예: 멈추기 — "잠깐, 우리 멈추자"). \'방법 찾기\'를 맨 앞에 놓는 학생에게 "서로 마음을 모른 채 방법을 정하면 둘 다 받아들일까요?"라고 묻는다. 끝 단계 \'정하기\'는 한 사람이 이기는 것이 아니라 둘 다 받아들이는 방법을 고르는 것이라는 점을 짚는다.',
          task: '그림 속 갈등 장면을 보고, 갈등을 푸는 단계 카드를 차례대로 놓아요.', levels: CARD_LV,
          items: [
            ORD('모둠 포스터 갈등을 푸는 단계로 놓아요.', { named: true, title: '포스터 색칠 다툼' }, [{ id: 'stop', text: '멈추기' }, { id: 'feel', text: '서로 마음 말하기' }, { id: 'find', text: '방법 찾기' }, { id: 'agree', text: '함께 정하기' }], 1, { id: 'yell', text: '"내가 먼저야!"', why: '소리치면 갈등이 더 커져요. 먼저 멈춰요.' }, 0.15),
            ORD('피구 규칙 갈등을 푸는 단계로 놓아요.', { named: true, title: '피구 규칙 다툼' }, [{ id: 'stop', text: '공을 내려놓기' }, { id: 'feel', text: '"나는 이래서 속상해"' }, { id: 'find', text: '규칙 고칠 방법 찾기' }, { id: 'agree', text: '모두 손들어 정하기' }], 2, { id: 'quit', text: '"안 해!" 하고 가기', why: '그냥 가 버리면 갈등이 풀리지 않고 남아요.' }, 0.2),
            ORD('자리 바꾸기 갈등을 푸는 단계로 놓아요.', { named: true, title: '창가 자리 다툼' }, [{ id: 'stop', text: '말다툼 멈추기' }, { id: 'feel', text: '서로 까닭 듣기' }, { id: 'find', text: '번갈아 앉기 생각' }, { id: 'agree', text: '둘 다 좋다고 정하기' }], 3, { id: 'push', text: '먼저 앉아 버티기', why: '버티면 한 사람만 이기고 다른 사람은 속상해요.' }, 0.25, { conclude: '멈추고, 마음을 말하고, 방법을 찾고, 둘 다 받아들이는 것으로 정해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '갈등 푸는 단계를 채워요.', text: '멈추기 → 마음 말하기 → 방법 찾기 → ___', answer: '함께 정하기' }] },
      }),
      C({
        id: 'auto.e34.g4-rel.activity.choose', type: 'activity', title: '서로 받아들일 방법 고르기',
        method: '서로 받아들일 방법 고르고 결과 보기', tool: 'emotion', minutes: 13,
        levels: { easy: '장면마다 보기 2개(바른 것 1·아닌 것 1) 가운데 골라 두 친구의 마음을 본다.', base: '장면마다 보기 3개 가운데 골라 결과와 두 친구의 마음을 본다.', challenge: '보기 3개 가운데 고르되 결과·마음은 고르고 확인한 뒤에만 보여, 먼저 까닭을 짝에게 말한다.' },
        activity: {
          title: '서로 받아들일 방법', tool: 'emotion',
          teacher: '"그네가 하나인데 두 친구가 동시에 타고 싶어요. 어떤 방법이면 두 친구 모두 웃을까요?" 보기를 고를 때마다 결과와 두 친구의 마음을 읽게 한다. 힘센 친구가 타는 보기를 고른 학생에게 "다른 친구는 다음에도 같은 일이 생기면 어떤 마음일까요?"라고 묻는다. 좋은 방법은 한 사람만 이기는 것이 아니라 두 사람이 다 받아들이는 방법이라는 점을 짚는다.',
          task: '그림 속 두 친구의 갈등 장면을 읽고 방법을 골라, 두 친구의 마음을 보아요.', levels: SAME,
          items: [
            BR('그네 하나를 두 친구가 타고 싶어요. 어떻게 할까요?', '쉬는 시간, 그네는 하나인데 하늘이와 도윤이가 동시에 왔어요.', [
              { id: 'force', text: '힘센 사람이 먼저 타요', result: '한 친구는 쉬는 시간 내내 기다렸어요.', mood: '속상함' },
              { id: 'turn', text: '10번씩 번갈아 타요', result: '둘 다 그네를 탈 수 있었어요.', mood: '기쁨' },
              { id: 'none', text: '둘 다 안 타요', result: '아무도 놀지 못했어요.', mood: '서운함' },
            ], 'turn', 0.15),
            BR('모둠 발표를 둘 다 하고 싶어요. 어떻게 할까요?', '모둠 발표를 나래와 하늘이가 둘 다 하고 싶어해요.', [
              { id: 'split', text: '앞뒤로 나눠 같이 발표해요', result: '둘 다 발표하고 모둠도 기뻤어요.', mood: '뿌듯함' },
              { id: 'grab', text: '먼저 일어선 사람이 해요', result: '늦은 친구는 모둠 활동이 싫어졌어요.', mood: '서운함' },
              { id: 'cry', text: '울면 양보해 줘요', result: '다음에도 다툼이 또 생겼어요.', mood: '걱정' },
            ], 'split', 0.2),
            BR('읽고 싶은 책이 한 권뿐이에요. 어떻게 할까요?', '학급 문고의 인기 있는 책 한 권을 두 친구가 동시에 집었어요.', [
              { id: 'pull', text: '서로 잡아당겨요', result: '책이 찢어질 뻔했어요.', mood: '화남' },
              { id: 'hide', text: '몰래 가방에 넣어요', result: '다른 친구가 책을 찾다 속상했어요.', mood: '속상함' },
              { id: 'list', text: '읽을 차례를 정해 적어요', result: '둘 다 차례대로 읽었어요.', mood: '편안함' },
            ], 'list', 0.25, { conclude: '두 사람이 다 받아들이는 방법을 고르면 갈등이 풀리고 사이도 지켜져요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '그네 하나를 두 친구가 타고 싶을 때 서로 받아들일 방법은?', options: ['힘센 사람이 먼저', '번갈아 타기', '둘 다 안 타기'], answer: '번갈아 타기' }] },
      }),
      C({
        id: 'auto.e34.g4-rel.wrap.role', type: 'wrap', title: '갈등 풀기 모둠 역할극',
        method: '갈등 풀기 모둠 역할극', tool: 'timer', minutes: 7,
        levels: { easy: '선생님이 준 장면으로 역할극을 하고 해 본 단계 2칸에 표시한다.', base: '모둠이 고른 장면으로 하고 3칸에 표시한다.', challenge: '결말을 바꾸어 다시 하고, 바꾼 결말까지 4칸에 표시한다.' },
        wrap: {
          teacher: '"모둠마다 갈등 장면을 단계대로 연기해요. 보는 모둠은 \'멈추기 했다, 마음 말하기 했다\'를 손가락으로 세어 주세요." 한 모둠이 1분 정도 연기하고, 다른 모둠이 단계를 확인해 준다. 역할극에서 친구를 놀리거나 실제 반 친구 이야기를 넣는 모둠에 "그림 속 가상의 친구 이야기로 바꿔 볼까요?"라고 말해 준다. 출구 2번에서 \'한 사람이 이기면 끝\'을 고른 학생에게 오늘 그네 장면을 다시 떠올리게 한다.',
          exitTicket: [
            SELF('역할극 점검', ['멈추기를 했어요', '마음을 말했어요', '함께 정했어요', '결말을 바꿔 봤어요'], '역할극에서 해 본 단계에 표시해요.'),
            CH('갈등을 잘 푼 것은 어떤 때일까요?', ['한 사람이 이겼을 때', '둘 다 받아들였을 때', '말을 안 할 때'], 1, '둘 다 받아들이는 방법으로 정하면 갈등을 잘 푼 거예요.'),
            MOOD,
          ],
        },
        worksheet: {
          title: '갈등을 풀어요',
          items: [
            { type: 'table', prompt: '역할극 장면에서 단계마다 한 말을 써요.', columns: ['단계', '한 말'], cells: [['멈추기', ''], ['마음 말하기', ''], ['함께 정하기', '']], answer: '(모둠마다 다름)' },
            { type: 'short', prompt: '다른 모둠 역할극에서 좋았던 점 하나를 써요.' },
          ],
          easy: { note: '"잠깐, 멈추자."부터 말해 봐요.', items: [{ type: 'draw', prompt: '갈등을 풀고 웃는 두 친구를 그려요.' }] },
        },
        notes: '역할극은 그림 속 가상의 장면으로만 한다. 실제 반 친구의 일·이름을 넣지 않는다.',
      }),
      C({
        id: 'auto.e34.g4-rel.wrap.vote', type: 'wrap', title: '가장 좋은 방법 반 그래프',
        method: '가장 좋은 방법 반 그래프', tool: 'chart', minutes: 7,
        levels: { easy: '해결 방법 3갈래의 막대를 완성한다.', base: '4갈래(시간 나누기까지)의 막대를 완성한다.', challenge: '4갈래를 완성하고, 가장 많은 방법을 고른 까닭을 고른다(출구 2번).' },
        wrap: {
          teacher: '"가상의 우리 반 모둠들이 그네 갈등에 가장 좋다고 고른 방법이에요. 막대로 나타내 볼까요?" 표를 함께 읽으며 막대를 쌓는다. 가장 많은 방법을 찾은 뒤 "왜 많은 모둠이 이 방법을 골랐을까요?"라고 물어 까닭을 읽는다. "적게 나온 방법은 나쁜 방법이에요"라는 학생에게 "가위바위보가 더 알맞은 장면은 없을까요?"라고 되물어, 장면에 따라 좋은 방법이 달라질 수 있다는 것을 짚는다.',
          exitTicket: [
            { type: 'tool', tool: 'chart', options: BAR('그네 갈등 해결 방법 고르기', WAYS, { unit: '모둠', mode: 'build', showTable: true, xLabel: '방법', yLabel: '고른 모둠 수' }), prompt: '표를 보고 해결 방법 막대를 완성해요.', target: { build: true }, difficulty: 0.15,
              levels: { easy: { prompt: '표를 보고 세 갈래 막대를 완성해요.', toolOptions: { data: WAYS.slice(0, 3) } } } },
            CH('\'번갈아 하기\'가 가장 많은 까닭은?', ['한 사람만 타서', '둘 다 탈 수 있어서', '빨리 끝나서'], 1, '번갈아 하면 두 친구 모두 받아들일 수 있어요.'),
            MOOD,
          ],
        },
        worksheet: {
          title: '서로 받아들이는 방법',
          items: [
            { type: 'table', prompt: '그래프를 보고 모둠 수를 써요.', columns: ['방법', '모둠 수'], cells: [['번갈아 하기', ''], ['시간 나누기', '']], answer: '5, 4' },
            { type: 'short', prompt: '내가 가장 좋다고 생각하는 방법과 까닭을 써요.' },
          ],
          easy: { note: '"○○이 좋아요. 왜냐하면 ○○이기 때문이에요."로 써 봐요.', items: [{ type: 'draw', prompt: '번갈아 그네를 타는 두 친구를 그려요.' }] },
        },
      }),
    );
  }

  // ======================================================================================================
  // 4학년 · 학급 회의 절차와 안건 (자치활동 — 공동체 자치활동: 학급회의)
  // ======================================================================================================
  {
    const C = T('g4-self', 4);
    const WORRY = [['쉬는 시간 놀이', 7], ['복도가 시끄러움', 5], ['학급 문고 정리', 4], ['급식 줄 서기', 3]];
    const PROC = [{ id: 'open', text: '개회' }, { id: 'issue', text: '안건 알리기' }, { id: 'talk', text: '토의' }, { id: 'vote', text: '표결' }, { id: 'tell', text: '결과 발표' }, { id: 'close', text: '폐회' }];
    M.push(
      C({
        id: 'auto.e34.g4-self.intro.roles', type: 'intro', title: '회의 장면에서 역할 찾기',
        method: '회의 장면에서 역할 고르기', tool: 'wordcards', minutes: 6,
        levels: { easy: '회의 그림 속 사회자 1명 카드가 담기는 것을 함께 본다.', base: '사회자·기록자 2명 카드가 담기는 것을 보고 누구인지 말한다.', challenge: '두 사람이 하는 일을 한 가지씩 짝에게 말한다.' },
        intro: {
          teacher: '"그림 속 가상의 반이 학급 회의를 하고 있어요. 앞에서 \'다음 의견 있나요?\' 하고 차례를 정하는 사람은 누구일까요? 칠판에 적는 사람은요?" 시연 단추로 회의를 이끄는 사람 카드가 바구니에 담기는 모습을 보인다. "사회자는 반장만 할 수 있어요"라는 말이 나오면 "사회자 대본이 있으면 누구나 해 볼 수 있어요. 오늘 우리도 돌아가며 해 볼 거예요"라고 짚는다.',
          student: '회의 그림에서 회의를 이끄는 사람과 적는 사람을 찾아 고르고, 하는 일을 말해 보아요.',
          demo: { tool: 'wordcards', options: { mode: 'pick', basket: '회의를 이끄는 사람', cards: ['차례를 정하는 사회자', '손 든 친구', '칠판에 적는 기록자', '창밖 보는 친구'] }, sequence: [{ pick: ['차례를 정하는 사회자'] }, { pick: ['차례를 정하는 사회자', '칠판에 적는 기록자'] }] },
          art: { draw: 'a paper cut classroom meeting with a paper child standing at the front holding a script, another writing on the board, and seated children raising paper hands', banner: '회의를 이끄는 사람은?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
      }),
      C({
        id: 'auto.e34.g4-self.intro.issue', type: 'intro', title: '반 고민 카드 투표 그래프',
        method: '반 고민 카드 투표 그래프', tool: 'chart', minutes: 6,
        levels: { easy: '고민 3칸의 그림그래프를 함께 읽는다.', base: '고민 4칸의 그림그래프에서 가장 많은 고민을 찾는다.', challenge: '두 번째로 많은 고민도 찾고, 다음 회의 안건으로 이어 말한다.' },
        intro: {
          teacher: '"가상의 반 친구들이 학급의 고민을 카드에 써서 냈어요. 그림그래프를 보면 가장 많이 나온 고민은 무엇일까요?" 시연 단추로 가장 많은 고민이 골라지는 모습을 보인다. "많이 나온 고민만 중요해요"라는 말이 나오면 "적게 나온 고민은 회의 말고 다른 방법으로 풀 수도 있어요. 무엇이 회의 안건이 될까요?"라고 되물어 오늘의 안건 가려내기로 잇는다. 그래프 자료는 가상이라고 밝힌다.',
          student: '가상의 반 고민 카드 그래프를 보고 가장 많은 고민을 찾아, 회의에서 다룰지 생각해 보아요.',
          demo: VOTE('우리 반 고민 카드', WORRY, '가장 많은 고민은?'),
          art: { draw: 'a paper cut suggestion box with folded paper cards spilling out beside a small picture graph of paper people', banner: '우리 반 고민은?', extra: [{ motif: 'leaf', x: 300, y: 96 }] },
        },
      }),
      C({
        id: 'auto.e34.g4-self.activity.order', type: 'activity', title: '회의 절차 차례 놓기',
        method: '회의 절차 차례 놓기', tool: 'timeline', minutes: 14,
        levels: { easy: '절차 카드 4장(개회·토의·표결·폐회)을 차례로 놓는다. 놓으면 바로 맞는지 알려 준다.', base: '절차 카드 6장을 차례로 놓고, 절차마다 하는 말과 역할도 잇는다.', challenge: '틀린 카드 한 장이 섞인 절차를 놓고, 절차·역할 잇기에서도 남는 카드를 뺀다.' },
        activity: {
          title: '회의 절차', tool: 'timeline',
          teacher: '"회의는 \'지금부터 회의를 시작하겠습니다\'로 열고, \'마치겠습니다\'로 닫아요. 그 사이에는 무엇이 있을까요?" 카드를 놓은 뒤 반 전체가 절차를 차례로 읽는다. \'표결\'을 \'토의\' 앞에 놓는 학생에게 "의견을 나누기도 전에 손을 들면 무엇을 보고 고를까요?"라고 묻는다. 둘째·셋째 문항에서는 절차마다 사회자가 하는 말과 역할을 이어, 절차에는 다 까닭이 있다는 것을 짚는다.',
          task: '학급 회의 절차 카드를 차례대로 놓고, 절차마다 하는 말과 역할을 이어요.', levels: CARD_LV,
          items: [
            { prompt: '학급 회의 절차를 차례로 놓아요.', toolOptions: { mode: 'order', axis: ['먼저', '나중'], slots: 6, cards: rev(PROC) }, target: { order: PROC.map((c) => c.id) }, difficulty: 0.15,
              levels: {
                easy: { prompt: '학급 회의 절차를 차례로 놓아요(4장).', toolOptions: { slots: 4, cards: rev([PROC[0], PROC[2], PROC[3], PROC[5]]) }, target: { order: ['open', 'talk', 'vote', 'close'] } },
                challenge: { prompt: '학급 회의 절차를 놓아요. 틀린 카드 한 장은 빼요.', toolOptions: { cards: rev(PROC.slice(0, 3).concat([{ id: 'fight', text: '말다툼하기' }], PROC.slice(3))) }, target: { order: PROC.map((c) => c.id) } },
              } },
            MT('절차와 사회자가 하는 말을 이어요.', { axis: ['먼저', '나중'] }, [['개회', '"회의를 시작합니다"'], ['토의', '"의견 있나요?"'], ['표결', '"찬성하면 손 드세요"'], ['폐회', '"회의를 마치겠습니다"']], 2, 3, '"빨리 끝내자"', 0.2),
            MT('회의 역할과 하는 일을 이어요.', { axis: ['먼저', '나중'] }, [['사회자', '차례 정하기'], ['기록자', '결정 적기'], ['참여자', '손 들고 말하기']], 2, 3, '혼자 정하기', 0.25, { conclude: '개회부터 폐회까지 절차를 지키고 역할을 나누면 모두의 의견으로 정할 수 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '회의 절차를 채워요.', text: '개회 → 안건 알리기 → 토의 → ___ → 결과 발표 → 폐회', answer: '표결' }] },
      }),
      C({
        id: 'auto.e34.g4-self.activity.meet', type: 'activity', title: '학급 회의 해 보기',
        method: '사회자와 함께 학급 회의 해 보기', tool: 'timer', minutes: 13,
        levels: { easy: '선생님이 사회를 보는 회의에서 토의 5분 타이머를 맞추고, 표결 결과 1칸을 적는다.', base: '학생 사회자가 이끄는 회의에서 토의 5분·표결 1분을 맞추고, 찬성·반대 수를 적은 뒤 해 본 것 3칸에 표시한다.', challenge: '같은 회의에서 기록자가 결과를 발표한 것까지 4칸에 표시한다.' },
        activity: {
          title: '학급 회의 해 보기', tool: 'timer',
          teacher: '"오늘 안건은 \'쉬는 시간 놀이 정하기\'예요. 사회자는 대본을 보고 \'지금부터 회의를 시작하겠습니다\'로 열어 주세요." 교사가 사회자 대본을 나눠 주고 학생 사회자·기록자를 세운다(쉬움 단계 반은 교사가 사회). 한 친구가 계속 말하면 사회자가 "다른 의견도 들어 볼까요?"라고 말하도록 대본을 짚어 준다. 표결 뒤 진 쪽 학생에게 "오늘 정한 것을 한 주 해 보고, 다음 회의에서 다시 이야기할 수 있어요"라고 말해 준다.',
          task: '회의 시간을 타이머로 맞추고, 가상의 표결 결과를 옮겨 적은 뒤 회의에서 한 것에 표시해요.', levels: SAME,
          items: [
            { prompt: '토의 5분, 표결 1분으로 1번 하게 맞춰요.', toolOptions: { title: '학급 회의 시간(우리 반 약속)', timeUnit: 'min', labels: ['토의', '표결'], plan: { work: 3, rest: 3, rounds: 2 } }, target: { plan: { work: 5, rest: 1, rounds: 1 } }, difficulty: 0.15,
              hints: ['토의·표결·번 칸을 차례로 봐요.', '이 타이머는 분으로 맞춰요.', '문제 글의 분과 횟수를 그대로 맞춰요.'],
              levels: { easy: { prompt: '토의 5분으로 1번 하게 맞춰요.', target: { plan: { work: 5, rounds: 1 } } } } },
            { prompt: '가상의 표결(찬성 15명, 반대 7명)을 옮겨 적어요.', toolOptions: { title: '표결 결과(가상)', unit: '명', fields: ['찬성', '반대'] }, target: { records: [15, 7] }, difficulty: 0.15,
              levels: { easy: { prompt: '가상의 표결 찬성 수(15명)를 옮겨 적어요.', toolOptions: { fields: ['찬성'] }, target: { records: [15] } } } },
            SCHK('학급 회의에서 해 본 것에 표시해요.', '학급 회의 점검', ['손 들고 말했어요', '다른 의견을 들었어요', '표결에 참여했어요', '기록을 발표했어요'], 2, 3, 0.15, { conclude: '사회자의 진행에 따라 말하고 듣고 표결하면, 모두가 함께 정한 결정이 돼요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '오늘 회의에서 정한 것을 한 줄로 써요.' }] },
        notes: '교사가 진행을 돕는 회의다. 시간(토의 5분·표결 1분)은 우리 반 약속 값이다. 사회자·기록자는 돌아가며 맡고, 표결에서 누가 어느 쪽에 손을 들었는지 기록하지 않는다.',
      }),
      C({
        id: 'auto.e34.g4-self.activity.agenda', type: 'activity', title: '안건과 다른 방법으로 풀 일',
        method: '안건과 다른 방법으로 풀 일 가르기', tool: 'sortboard', minutes: 14,
        levels: { easy: '고민 카드 4장, 틀린 바구니에 넣으면 까닭을 말하고 되돌아온다. 바구니에 든 장 수가 보인다.', base: '고민 카드 6장을 다 넣은 뒤 확인한다.', challenge: '헷갈리는 카드 2장이 더해진 8장을 나누고, 고른 까닭을 짝에게 말한다.' },
        activity: {
          title: '안건 가려내기', tool: 'sortboard',
          teacher: '"\'두 친구가 다퉜어요\'를 반 전체 회의에서 이야기하면 그 두 친구는 어떤 마음일까요?" 카드를 넣을 때마다 "이 일은 반 모두에게 관련 있나요? 모두가 함께 정할 수 있나요?"를 묻는다. 개인 다툼을 안건에 넣는 학생에게 "그 일은 두 친구가 선생님과 따로 이야기하는 것이 더 좋지 않을까요?"라고 묻는다. 안건은 반 모두와 관련 있고 함께 정할 수 있는 일이라는 점을 짚는다.',
          task: '반 고민 카드를 학급 회의 안건과 다른 방법으로 풀 일로 나누어요.', levels: BOARD_LV,
          items: [
            SORT('교실 고민 카드를 나누어요.', {}, ['회의 안건', '다른 방법'], [['쉬는 시간 놀이 정하기', '학급 문고 정리 방법', '교실 꾸미기 주제'], ['두 친구의 다툼', '내 연필 잃어버림', '한 친구의 속상한 일']], 2, [['자리 바꾸는 방법'], ['짝과 말다툼']], 0.15),
            SORT('복도·급식 고민 카드를 나누어요.', {}, ['회의 안건', '다른 방법'], [['복도에서 조용히 다니기', '급식 줄 서는 차례', '우유 당번 정하기'], ['내 우유가 터짐', '두 친구가 밀친 일', '한 친구가 늦게 옴']], 2, [['급식 남기지 않기 약속'], ['내 신발이 바뀜']], 0.2),
            SORT('행사 고민 카드를 나누어요.', {}, ['회의 안건', '다른 방법'], [['학급 잔치 놀이 정하기', '체육 대회 응원 구호', '학기 말 발표회 순서'], ['내 생일 선물 고르기', '친구가 나를 놀림', '내 숙제 도와주기']], 2, [['잔치 준비 역할 나누기'], ['한 친구만 상 주기']], 0.25, { conclude: '반 모두와 관련 있고 함께 정할 수 있는 일이 안건이에요. 개인 일은 선생님이나 당사자와 따로 풀어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '학급 회의 안건으로 알맞은 것은?', options: ['두 친구의 다툼', '쉬는 시간 놀이 정하기', '내 연필 잃어버림'], answer: '쉬는 시간 놀이 정하기' }] },
        notes: '\'친구가 나를 놀림\'처럼 괴롭힘이 걱정되는 일은 회의가 아니라 선생님께 바로 알리는 일이라는 것을 함께 말해 준다.',
      }),
      C({
        id: 'auto.e34.g4-self.activity.record', type: 'activity', title: '회의 기록 빈칸 채우기',
        method: '회의 기록 빈칸 채우기', tool: 'story', minutes: 13,
        levels: { easy: '회의 기록 말풍선 2칸(안건·결정)에 낱말 카드를 넣는다. 놓으면 바로 맞는지 알려 준다.', base: '3칸(까닭까지)에 넣는다.', challenge: '4칸(다음에 할 일까지)에 넣는다.' },
        activity: {
          title: '회의 기록 채우기', tool: 'story',
          teacher: '"기록자는 무엇을 적어야 다음 주에도 무엇을 정했는지 알 수 있을까요? 안건, 결정, 까닭, 다음에 할 일이에요." 칸마다 카드를 넣은 뒤 완성된 기록을 소리 내어 읽게 한다. 결정 칸에 의견 하나만 넣으려는 학생에게 "표결로 정해진 것이 무엇이었는지 다시 볼까요?"라고 묻는다. 기록은 누가 무엇을 말했는지 이름을 적는 것이 아니라, 정한 내용을 남기는 것이라는 점을 짚는다.',
          task: '가상의 반 회의 기록 말풍선의 빈칸에 알맞은 낱말 카드를 넣어요.', levels: CARD_LV,
          items: [
            FILLN('놀이 회의 기록을 채워요.', { title: '회의 기록 — 놀이' }, '기록자', [['안건: ___ 정하기', '쉬는 시간 놀이'], ['결정: ___로 정했어요', '피구'], ['까닭: ___ 할 수 있어서', '모두 함께'], ['다음에: ___에 다시 봐요', '다음 회의']], ['급식', '숙제', '반장'], 2, 3, 0.15),
            FILLN('복도 회의 기록을 채워요.', { title: '회의 기록 — 복도' }, '기록자', [['안건: 복도에서 ___ 다니기', '조용히'], ['결정: ___ 걷기로 했어요', '오른쪽으로'], ['까닭: ___ 않게', '부딪히지'], ['다음에: ___ 지켰는지 봐요', '한 주 뒤']], ['뛰어서', '크게', '내 맘대로'], 2, 3, 0.2),
            FILLN('학급 문고 회의 기록을 채워요.', { title: '회의 기록 — 학급 문고' }, '기록자', [['안건: 학급 문고 ___ 방법', '정리'], ['결정: ___ 당번을 두어요', '요일별'], ['까닭: ___ 찾기 쉬워서', '책을'], ['다음에: ___에 점검해요', '금요일']], ['아무렇게나', '버리기', '혼자'], 2, 3, 0.25, { conclude: '안건, 결정, 까닭, 다음에 할 일을 적어 두면 모두가 정한 것을 지킬 수 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '우리 반 회의 기록을 채워요.', columns: ['안건', '결정', '까닭'], cells: [['', '', '']], answer: '(학급마다 다름)' }] },
      }),
      C({
        id: 'auto.e34.g4-self.wrap.check', type: 'wrap', title: '회의 참여 스스로 점검',
        method: '회의 참여 스스로 점검', tool: 'timer', minutes: 7,
        levels: { easy: '말하기·듣기 2칸에 스스로 표시한다.', base: '말하기·듣기·결정 따르기 3칸에 스스로 표시한다.', challenge: '3칸에 표시하고, 짝이 확인해 준 칸까지 표시한다.' },
        wrap: {
          teacher: '"오늘 회의에서 나는 말하기, 듣기, 결정 따르기를 했나요?" 점검 칸을 함께 읽고 스스로 표시하게 한다. 말하지 못한 학생에게 "다음 회의에서는 \'저는 ○○에 찬성합니다\' 한마디부터 해 볼까요?"라고 말해 준다. 출구 2번에서 \'개인 다툼도 안건\'을 고른 학생에게 오늘 안건 가려내기에서 다툼 카드를 어디에 넣었는지 다시 떠올리게 한다.',
          exitTicket: [
            SELF('회의 참여 점검', ['의견을 말했어요', '끝까지 들었어요', '결정에 따랐어요', '짝이 확인해 줬어요']),
            CH('학급 회의 안건에 대한 바른 생각은?', ['개인 다툼도 다 안건이에요', '반 모두와 관련 있는 일이 안건이에요', '반장이 안건을 정해요'], 1, '안건은 반 모두와 관련 있고 함께 정할 수 있는 일이에요.'),
            MOOD,
          ],
        },
        worksheet: {
          title: '학급 회의 돌아보기',
          items: [
            { type: 'check', prompt: '회의에서 한 것에 표시해요.', options: ['의견을 말했어요', '끝까지 들었어요', '결정에 따랐어요'] },
            { type: 'short', prompt: '다음 회의에서 더 잘하고 싶은 것을 한 줄로 써요.' },
          ],
          easy: { note: '"저는 ○○에 찬성합니다."를 따라 말해 봐요.', items: [{ type: 'draw', prompt: '손 들고 의견을 말하는 내 모습을 그려요.' }] },
        },
      }),
      C({
        id: 'auto.e34.g4-self.wrap.face', type: 'wrap', title: '회의 뒤 마음과 다음 안건',
        method: '회의 뒤 마음과 다음 안건', tool: 'emotion', minutes: 7,
        levels: { easy: '"회의 뒤 내 마음" 1줄에 마음 카드를 짝 짓는다.', base: '"다음에 다룰 안건"까지 2줄에 카드를 짝 짓는다.', challenge: '2줄을 짝 지은 뒤 그 안건을 고른 까닭을 고른다(출구 2번).' },
        wrap: {
          teacher: '"회의를 마치고 나니 마음이 어때요? 다음 회의에서는 어떤 안건을 다루면 좋을까요?" 카드를 짝 지은 뒤 한두 명의 까닭을 듣는다. 표결에서 진 쪽이라 \'속상함\'을 고른 학생에게 그 마음을 인정하고 "속상해도 함께 정한 것을 해 보고, 다음 회의에서 다시 말할 수 있어요"라고 말해 준다. 다음 안건은 오늘 가려낸 \'회의 안건\' 바구니에서 고른다.',
          exitTicket: [
            { type: 'tool', tool: 'emotion', options: { mode: 'match', slots: [{ id: 'feel', label: '회의 뒤 내 마음' }, { id: 'next', label: '다음에 다룰 안건' }], cards: ['뿌듯함', '복도 통행 약속', '편안함', '두 친구 다툼'] }, prompt: '회의 뒤 마음과 다음 안건을 이어요.', target: { match: { feel: ['뿌듯함', '편안함'], next: '복도 통행 약속' } }, difficulty: 0.15,
              levels: { easy: { prompt: '회의 뒤 내 마음을 이어요.', toolOptions: { slots: [{ id: 'feel', label: '회의 뒤 내 마음' }], cards: ['뿌듯함', '편안함', '화남'] }, target: { match: { feel: ['뿌듯함', '편안함'] } } } } },
            CH('\'복도 통행 약속\'이 안건이 되는 까닭은?', ['한 친구의 일이라서', '반 모두와 관련 있어서', '선생님이 정해서'], 1, '복도는 모두가 쓰니 함께 정할 안건이에요.'),
            MOOD,
          ],
        },
        worksheet: {
          title: '다음 회의 준비',
          items: [
            { type: 'short', prompt: '다음 회의에서 다룰 안건을 한 줄로 써요.' },
            { type: 'short', prompt: '그 안건을 고른 까닭을 써요.' },
          ],
          easy: { note: '"반 모두와 관련 있는 일"을 떠올려요.', items: [{ type: 'draw', prompt: '다음 회의에서 다룰 일을 그려요.' }] },
        },
      }),
    );
  }

  // ======================================================================================================
  // 4학년 · 모둠 공동 탐구와 발표 (자율활동 — 주제 탐구 활동: 소집단 공동 연구)
  // ======================================================================================================
  {
    const C = T('g4-inq', 4);
    const BUG = [['개미', 9], ['나비', 3], ['무당벌레', 4], ['벌', 2]];
    const BUG_Q = (o) => BAR('화단 곤충 관찰 수', BUG, Object.assign({ unit: '마리', mode: 'read', xLabel: '곤충', yLabel: '본 수' }, o));
    const POSTER = { shapes: ['rect', 'square', 'circle', 'star', 'triangle', 'leaf'], colors: ['빨강', '노랑', '초록', '파랑', '보라', '하양'], sizes: ['s', 'm', 'l'] };
    M.push(
      C({
        id: 'auto.e34.g4-inq.intro.topic', type: 'intro', title: '모둠 주제 정하기 생각그물',
        method: '모둠 주제 정하기 생각그물', tool: 'mindmap', minutes: 6,
        levels: { easy: '가지 2개(생물·날씨)에 주제 카드가 붙는 것을 함께 본다.', base: '가지 3개(우리 학교까지)에 카드가 붙는 것을 보고 모둠 주제 하나를 고른다.', challenge: '고른 주제에 탐구 질문 하나를 붙여 짝에게 말한다.' },
        intro: {
          teacher: '"이번에는 모둠이 함께 탐구해요. 가운데 \'우리 모둠 탐구\'에 어떤 주제가 붙을 수 있을까요?" 시연 단추로 주제 카드가 가지에 붙는 모습을 보인다. 모둠에서 한 사람이 주제를 바로 정하려 하면 "모둠 친구 모두의 관심을 가지에 붙여 보고 정하면 어떨까요?"라고 말해 준다. 지난 학년에 배운 \'좋은 탐구 질문\'(좁고, 알아볼 수 있는 질문)을 떠올리게 한다.',
          student: '모둠 친구들의 관심 주제를 가지에 붙여 보고, 함께 탐구할 주제 하나를 골라 보아요.',
          demo: { tool: 'mindmap', options: { topic: '우리 모둠 탐구', slots: ['생물', '날씨', '우리 학교'], cards: ['화단 곤충', '구름 모양', '급식 잔반', '강낭콩 키', '하루 기온', '운동장 그늘'], shuffle: false }, sequence: [{ sort: { 생물: ['화단 곤충'], 날씨: ['구름 모양'] } }, { sort: { 생물: ['화단 곤충', '강낭콩 키'], 날씨: ['구름 모양', '하루 기온'], '우리 학교': ['급식 잔반', '운동장 그늘'] } }] },
          art: { draw: 'a paper cut group of four children around a mind map sheet with branches to a ladybug, a cloud and a small school building, paper pencils in their hands', banner: '우리 모둠은 무엇을 탐구할까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
      }),
      C({
        id: 'auto.e34.g4-inq.intro.look', type: 'intro', title: '좋은 발표·아쉬운 발표',
        method: '좋은 발표·아쉬운 발표 그림 나누기', tool: 'sortboard', minutes: 6,
        levels: { easy: '발표 장면 카드 4장이 "좋은 발표/아쉬운 발표"로 나뉘는 것을 함께 본다.', base: '6장이 나뉘는 것을 보고 좋은 발표의 모습을 따라 말한다.', challenge: '아쉬운 발표 카드 하나를 골라 어떻게 바꾸면 좋을지 까닭과 함께 말한다.' },
        intro: {
          teacher: '"그림 속 가상의 모둠들이 발표를 해요. 친구들을 보며 또박또박 말하는 발표와 종이만 보고 작게 읽는 발표, 어느 쪽이 잘 들릴까요?" 시연 단추로 발표 장면 카드가 나뉘는 모습을 보인다. "발표는 잘하는 한 사람만 하면 돼요"라는 말이 나오면 "모둠이 함께 탐구했으면 발표는 누구의 몫일까요? 한 부분씩 나누면 어떨까요?"라고 되묻는다.',
          student: '발표 장면 카드를 좋은 발표와 아쉬운 발표로 나누어 보고, 좋은 발표의 모습을 따라 해 보아요.',
          demo: { tool: 'sortboard', options: { slots: ['좋은 발표', '아쉬운 발표'], cards: ['친구들을 보며 말해요', '종이만 보고 읽어요', '그래프를 가리켜요', '혼자 다 말해요', '모둠이 나눠 말해요', '너무 작게 말해요'] }, sequence: [{ sort: { '좋은 발표': ['친구들을 보며 말해요', '그래프를 가리켜요'], '아쉬운 발표': ['종이만 보고 읽어요', '혼자 다 말해요'] } }, { sort: { '좋은 발표': ['친구들을 보며 말해요', '그래프를 가리켜요', '모둠이 나눠 말해요'], '아쉬운 발표': ['종이만 보고 읽어요', '혼자 다 말해요', '너무 작게 말해요'] } }] },
          art: { draw: 'a paper cut classroom front with a group of paper children presenting a poster with a bar graph, one pointing at the graph and others holding cue cards', banner: '어떤 발표가 잘 들릴까?', extra: [{ motif: 'sun', x: 300, y: 96 }] },
        },
      }),
      C({
        id: 'auto.e34.g4-inq.activity.roles', type: 'activity', title: '탐구 역할과 할 일 잇기',
        method: '역할과 할 일 잇기', tool: 'emotion', minutes: 14,
        levels: { easy: '탐구 역할 3줄에 할 일 카드를 잇는다. 놓으면 바로 맞는지 알려 준다.', base: '탐구 역할 4줄에 할 일 카드를 잇는다.', challenge: '맞지 않는 카드 한 장이 섞인 판에서 4줄을 잇고, 내가 맡을 역할을 짝에게 말한다.' },
        activity: {
          title: '탐구 역할 나누기', tool: 'emotion',
          teacher: '"공동 탐구에는 자료를 찾는 사람, 정리하는 사람, 발표 자료를 만드는 사람, 발표하는 사람이 필요해요. 역할마다 무슨 일을 할까요?" 짝을 이을 때마다 "그 역할이 그 일을 빠뜨리면 탐구는 어떻게 될까요?"를 묻는다. \'구경하기\' 카드를 어느 역할에 넣으려는 학생에게 "모둠에서 구경만 하는 역할도 있을까요?"라고 되묻는다. 역할은 나누되 서로 돕는다는 점을 짚는다.',
          task: '모둠 공동 탐구의 역할 카드와 그 역할이 하는 일을 이어요.', levels: CARD_LV,
          items: [
            MT('공동 탐구 역할과 할 일을 이어요.', { weather: false }, [['자료 찾기', '책·누리집 찾아보기'], ['정리하기', '찾은 것 표로 적기'], ['발표 자료', '그래프와 그림 붙이기'], ['발표하기', '친구들 앞에서 말하기']], 3, 4, '구경하기', 0.15),
            MT('곤충 관찰 탐구에서 역할과 할 일을 이어요.', { weather: false }, [['관찰하기', '화단 곤충 세기'], ['기록하기', '본 수를 표에 적기'], ['그래프 만들기', '표로 막대 그리기'], ['발표하기', '알게 된 점 말하기']], 3, 4, '곤충 잡아 오기', 0.2),
            MT('이런 일이 생기면 어느 역할이 할까요? 이어요.', { weather: false }, [['자료가 모자라요', '자료 찾기'], ['표가 뒤죽박죽이에요', '정리하기'], ['발표판이 비었어요', '발표 자료'], ['발표 차례예요', '발표하기']], 3, 4, '선생님', 0.25, { conclude: '공동 탐구는 역할을 나누어 맡고, 막히면 서로 도와 함께 해내요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '우리 모둠의 탐구 역할을 정해 써요.', columns: ['역할', '맡은 사람(가명·번호)'], cells: [['자료 찾기', ''], ['정리하기', ''], ['발표하기', '']], answer: '(모둠마다 다름)' }] },
      }),
      C({
        id: 'auto.e34.g4-inq.activity.plan', type: 'activity', title: '탐구 차례 시간 띠',
        method: '탐구 차례 시간 띠', tool: 'timeline', minutes: 13,
        levels: { easy: '탐구 차례 카드 3장을 시간 띠에 놓는다. 놓으면 바로 맞는지 알려 준다.', base: '탐구 차례 카드 4장(질문 정하기~발표하기)을 놓는다.', challenge: '틀린 카드 한 장이 섞인 판에서 4장을 놓고, 셋째 문항에서 단계마다 날짜(주)를 붙인다.' },
        activity: {
          title: '탐구 차례 시간 띠', tool: 'timeline',
          teacher: '"모둠 탐구는 질문 정하기부터 발표까지 몇 단계일까요? 시간 띠의 왼쪽이 먼저예요." 카드를 놓은 뒤 모둠이 단계마다 맡을 역할을 말해 본다. \'발표 자료 만들기\'를 \'자료 찾기\' 앞에 놓는 학생에게 "찾은 것이 없는데 무엇으로 발표판을 채울까요?"라고 묻는다. 셋째 문항에서 단계마다 언제 할지(첫째 주·둘째 주…) 붙이면 계획이 된다는 점을 짚는다.',
          task: '모둠 공동 탐구의 차례 카드를 시간 띠에 먼저부터 놓고, 단계마다 할 주를 이어요.', levels: CARD_LV,
          items: [
            ORD('곤충 관찰 탐구의 차례를 놓아요.', { axis: ['먼저', '나중'] }, [{ id: 'q', text: '질문 정하기' }, { id: 'find', text: '관찰·자료 찾기' }, { id: 'sort', text: '표와 그래프로 정리' }, { id: 'show', text: '발표하기' }], 1, { id: 'copy', text: '남의 발표 베끼기', why: '남의 것을 베끼면 우리가 알아낸 것이 없어요.' }, 0.15),
            ORD('하루 기온 탐구의 차례를 놓아요.', { axis: ['먼저', '나중'] }, [{ id: 'q', text: '질문과 역할 정하기' }, { id: 'measure', text: '하루 세 번 재기' }, { id: 'graph', text: '꺾은선으로 정리' }, { id: 'show', text: '알게 된 점 발표' }], 2, { id: 'guess', text: '재지 않고 짐작하기', why: '짐작은 탐구 자료가 아니에요. 직접 재어요.' }, 0.2),
            MT('탐구 단계와 할 주를 이어요.', { axis: ['먼저', '나중'] }, [['첫째 주', '질문 정하기'], ['둘째 주', '자료 찾기'], ['셋째 주', '정리하기'], ['넷째 주', '발표하기']], 3, 4, '아무 때나', 0.25, { conclude: '탐구는 질문 → 자료 찾기 → 정리 → 발표 차례로, 날짜를 붙이면 계획이 돼요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '우리 모둠 탐구 계획을 써요.', columns: ['주', '할 일'], cells: [['첫째 주', ''], ['둘째 주', ''], ['셋째 주', '']], answer: '(모둠마다 다름)' }] },
      }),
      C({
        id: 'auto.e34.g4-inq.activity.data', type: 'activity', title: '모은 자료로 그래프 만들기',
        method: '모은 자료로 그래프 만들기', tool: 'chart', minutes: 14,
        levels: { easy: '곤충 3칸의 막대를 완성하고 3칸 가운데에서 읽는다.', base: '곤충 4칸의 막대를 완성하고 가장 많은 곤충과 한 칸의 수를 읽는다.', challenge: '4칸을 완성한 뒤, 그래프에서 알게 된 점으로 알맞은 것을 고른다.' },
        activity: {
          title: '자료로 그래프 만들기', tool: 'chart',
          teacher: '"가상의 모둠이 화단에서 30분 동안 본 곤충 수를 표에 적었어요. 막대그래프로 바꾸면 무엇이 한눈에 보일까요?" 표를 함께 읽으며 막대를 쌓는다. 막대를 눈대중으로 그리는 학생에게 "눈금 한 칸이 몇 마리인지 먼저 볼까요?"라고 묻는다. 셋째 문항(도전)에서 \'개미가 가장 힘이 세다\'처럼 그래프에 없는 말을 고르는 학생에게 "그래프가 알려 주는 것은 수예요. 힘은 그래프에서 알 수 있을까요?"라고 되묻는다.',
          task: '가상의 모둠 관찰 표로 막대그래프를 완성하고, 그래프를 읽어 알게 된 점을 골라요.', levels: SAME,
          items: [
            { prompt: '관찰 표를 보고 곤충 수 막대를 완성해요.', toolOptions: BAR('화단 곤충 관찰 수', BUG, { unit: '마리', mode: 'build', showTable: true, xLabel: '곤충', yLabel: '본 수' }), target: { build: true }, difficulty: 0.15,
              levels: { easy: { prompt: '관찰 표를 보고 세 곤충의 막대를 완성해요.', toolOptions: { data: BUG.slice(0, 3), given: [0] } } } },
            { prompt: '가장 많이 본 곤충은 무엇일까요?', toolOptions: BUG_Q({ question: '가장 많이 본 곤충은?', choices: BUG.map((r) => r[0]) }), target: { pick: 0 }, difficulty: 0.15,
              levels: { easy: { prompt: '세 곤충 가운데 가장 많이 본 것은?', toolOptions: { data: BUG.slice(0, 3), choices: BUG.slice(0, 3).map((r) => r[0]) } } } },
            { prompt: '무당벌레는 몇 마리 보았을까요?', toolOptions: BUG_Q({ question: '무당벌레는 몇 마리?', choices: ['3마리', '4마리', '9마리'] }), target: { pick: 1 }, difficulty: 0.2,
              levels: { easy: { toolOptions: { data: BUG.slice(0, 3) } }, challenge: { prompt: '그래프에서 알게 된 점으로 알맞은 것은?', toolOptions: { question: '알게 된 점은?', choices: ['개미가 가장 힘이 세요', '개미를 가장 많이 봤어요', '벌은 화단에 없어요'] }, target: { pick: 1 } } },
              conclude: '모은 자료를 그래프로 바꾸면 많고 적음이 한눈에 보여요. 그래프에 있는 것만 알게 된 점으로 말해요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '그래프를 보고 알게 된 점을 한 문장으로 써요.' }] },
        notes: '자료는 가상의 관찰 기록이다. 실제로 관찰할 때 곤충을 잡거나 해치지 않고 눈으로만 센다.',
      }),
      C({
        id: 'auto.e34.g4-inq.activity.poster', type: 'activity', title: '발표 자료 꾸미기',
        method: '발표 자료 꾸미기', tool: 'collage', minutes: 13,
        levels: { easy: '제목 띠(큰 긴 네모) 1개와 그래프 막대 조각 2개 이상을 붙이고, 조각 3개 이상으로 꾸민다.', base: '제목 띠와 그래프 막대 3개 이상을 붙이고, 조각 5개 이상으로 꾸민 뒤 표시한다.', challenge: '조각 5개 이상으로 꾸미고, 발표 차례 번호(작은 동그라미 3개)를 붙인 것까지 표시한다.' },
        activity: {
          title: '발표판 꾸미기', tool: 'collage',
          teacher: '"발표판 맨 위에는 제목, 가운데에는 그래프, 옆에는 그림을 붙여요. 멀리서도 보이게 크게!" 조각을 붙일 때마다 "이 조각은 발표판에서 무엇을 나타내요?"라고 묻는다. 조각을 빽빽하게 붙여 그래프가 가려지는 학생에게 "뒤에 앉은 친구도 그래프가 보일까요? 무엇을 덜어 낼까요?"라고 묻는다. 도전 단계는 발표할 차례대로 번호 조각을 붙여 모둠 친구가 한 부분씩 맡게 한다.',
          task: '제목·그래프·그림 조각을 붙여 모둠 발표판을 꾸며요.', levels: SAME,
          items: [
            { prompt: '제목 띠(큰 긴 네모) 1개와 그림 조각 2개를 붙여요.', toolOptions: POSTER, target: { has: [{ shape: 'rect', size: 'l', n: 1 }], pieces: { min: 3 } }, difficulty: 0.1 },
            { prompt: '그래프 막대 조각(긴 네모) 3개를 붙여요.', toolOptions: POSTER, target: { has: [{ shape: 'rect', size: 'm', min: 3 }] }, difficulty: 0.15,
              levels: { easy: { prompt: '그래프 막대 조각(긴 네모) 2개를 붙여요.', target: { has: [{ shape: 'rect', size: 'm', min: 2 }] } } } },
            { prompt: '발표판을 꾸미고 한 것에 표시해요.', toolOptions: POSTER, target: { selfCheck: ['제목을 붙였어요', '그래프가 잘 보여요'], minPieces: 5 }, difficulty: 0.15,
              levels: { easy: { prompt: '조각 3개 이상으로 꾸미고 표시해요.', target: { selfCheck: ['제목을 붙였어요', '그래프가 잘 보여요'], minPieces: 3 } }, challenge: { prompt: '차례 번호까지 꾸미고 표시해요.', target: { selfCheck: ['제목을 붙였어요', '그래프가 잘 보여요', '차례 번호를 붙였어요'], has: [{ shape: 'circle', size: 's', min: 3 }], pieces: { min: 5 } } } },
              conclude: '발표판은 제목·그래프·그림이 멀리서도 잘 보이게 꾸며요.' },
          ],
        },
        worksheet: { items: [{ type: 'draw', prompt: '우리 모둠 발표판의 밑그림을 그려요(제목·그래프·그림 자리).' }] },
      }),
      C({
        id: 'auto.e34.g4-inq.wrap.present', type: 'wrap', title: '모둠 발표와 질문·칭찬',
        method: '모둠 발표와 질문·칭찬', tool: 'timer', minutes: 7,
        levels: { easy: '발표 2분으로 타이머를 맞추고 발표만 한다.', base: '발표 2분·질문 1분으로 맞추고 질문 하나를 받는다.', challenge: '발표 2분·질문 1분으로 맞추고 질문 하나와 칭찬 하나를 받는다(칭찬은 보는 모둠이 한다).' },
        wrap: {
          teacher: '"모둠마다 2분 동안 발표하고, 다른 모둠은 질문 하나, 칭찬 하나를 해 주세요. 선생님이 시간을 잴게요." 발표가 끝날 때마다 보는 모둠이 "○○가 궁금해요", "○○가 좋았어요"로 말하게 한다. "잘했어"만 말하는 학생에게 "무엇이 좋았는지 하나만 콕 집어 말해 볼까요?"라고 말해 준다. 발표 순위를 매기지 않는다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '모둠 발표 시간(우리 반 약속)', timeUnit: 'min', labels: ['발표', '질문'], plan: { work: 1, rest: 3, rounds: 1 } }, prompt: '발표 2분, 질문 1분으로 맞춰요.', target: { plan: { work: 2, rest: 1 } }, difficulty: 0.1,
              levels: { easy: { prompt: '발표 2분으로 맞춰요.', target: { plan: { work: 2 } } } } },
            CH('친구 발표를 듣고 하는 좋은 질문은?', ['그건 틀렸어', '개미는 왜 화단에 많을까요?', '빨리 끝내'], 1, '궁금한 것을 물으면 발표한 모둠도 더 생각해 볼 수 있어요.'),
            MOOD,
          ],
        },
        worksheet: {
          title: '모둠 발표 돌아보기',
          items: [
            { type: 'short', prompt: '다른 모둠 발표에서 궁금했던 것을 질문으로 써요.' },
            { type: 'short', prompt: '다른 모둠 발표에서 좋았던 점을 구체적으로 써요.' },
          ],
          easy: { note: '"○○가 궁금해요.", "○○가 좋았어요."로 써 봐요.', items: [{ type: 'draw', prompt: '우리 모둠이 발표하는 모습을 그려요.' }] },
        },
        notes: '발표 시간(2분)·질문 시간(1분)은 우리 반 약속 값이다.',
      }),
      C({
        id: 'auto.e34.g4-inq.wrap.feedback', type: 'wrap', title: '구체적인 칭찬 고르기',
        method: '구체적인 칭찬 고르기', tool: 'wordcards', minutes: 7,
        levels: { easy: '보기 2장(구체적인 칭찬 1·"잘했어" 1) 가운데 구체적인 칭찬을 담는다.', base: '보기 3장 가운데 구체적인 칭찬 2장을 담는다.', challenge: '담은 뒤 다른 모둠에게 할 구체적인 칭찬을 내 말로 활동지에 쓴다.' },
        wrap: {
          teacher: '"\'잘했어\'와 \'그래프에 색을 달리해서 잘 보였어\' 가운데 어느 칭찬이 다음 발표에 더 도움이 될까요?" 카드를 담은 뒤 구체적인 칭찬은 무엇이 좋았는지 콕 집어 말한다는 점을 짚는다. 칭찬을 꾸며 낸 말로 하는 학생에게 "정말 보고 들은 것에서 하나를 골라 볼까요?"라고 말해 준다. 출구 2번에서 \'발표는 한 사람만\'을 고른 학생에게 오늘 차례 번호를 붙인 발표판을 다시 떠올리게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'wordcards', options: { mode: 'pick', basket: '구체적인 칭찬', cards: ['그래프 색이 잘 보였어', '잘했어', '큰 소리로 또박또박 말했어'] }, prompt: '구체적인 칭찬만 담아요.', target: { pick: ['그래프 색이 잘 보였어', '큰 소리로 또박또박 말했어'] }, difficulty: 0.1,
              levels: { easy: { toolOptions: { cards: ['그래프 색이 잘 보였어', '잘했어'] }, target: { pick: ['그래프 색이 잘 보였어'] } } } },
            CH('모둠 발표는 누가 하면 좋을까요?', ['잘하는 한 사람만', '모둠이 나누어 함께', '아무도 안 해요'], 1, '함께 탐구했으니 발표도 나누어 맡아요.'),
            MOOD,
          ],
        },
        worksheet: {
          title: '구체적으로 칭찬해요',
          items: [
            { type: 'short', prompt: '다른 모둠에게 해 줄 구체적인 칭찬을 내 말로 써요.' },
            { type: 'short', prompt: '우리 모둠이 들은 칭찬 가운데 기억에 남는 것을 써요.' },
          ],
          easy: { note: '"○○해서 좋았어."로 써 봐요.', items: [{ type: 'draw', prompt: '칭찬을 주고받는 두 모둠을 그려요.' }] },
        },
      }),
    );
  }

  // ======================================================================================================
  // 4학년 · 우리 마을 봉사 프로젝트 (자율활동 — 프로젝트형 봉사활동: 공동 프로젝트형, 지역 사회 연계)
  // ======================================================================================================
  {
    const C = T('g4-serve', 4);
    // 가상의 마을 칸 지도(실제 지역이 아니다)
    const TOWN = {
      title: '가상의 우리 마을', grid: [6, 4],
      places: [
        { name: '학교', icon: 'school', at: [1, 1] }, { name: '공원', icon: 'park', at: [4, 0] }, { name: '버스 정류장', icon: 'bus', at: [3, 2] },
        { name: '도서관', icon: 'library', at: [0, 3] }, { name: '주민센터', icon: 'office', at: [5, 3] }, { name: '시장', icon: 'market', at: [2, 3] },
      ],
      roads: [[[0, 2], [1, 2], [2, 2], [3, 2], [4, 2], [5, 2]], [[3, 0], [3, 1], [3, 2], [3, 3]]],
    };
    const ITEMS = (more) => [{ id: 'glove', text: '장갑', price: 1000 }, { id: 'bag', text: '쓰레기봉투', price: 500 }, { id: 'tong', text: '집게', price: 1500 }].concat(more || []);
    M.push(
      C({
        id: 'auto.e34.g4-serve.intro.map', type: 'intro', title: '마을 지도에서 불편한 곳',
        method: '마을 지도에서 불편한 곳 핀', tool: 'map', minutes: 6,
        levels: { easy: '가상의 마을 지도에서 공원 한 곳에 핀이 꽂히는 것을 본다.', base: '공원·버스 정류장 두 곳에 핀이 꽂히는 것을 보고 무엇이 불편할지 말한다.', challenge: '시장까지 세 곳을 보고, 그 가운데 우리가 도울 수 있는 곳을 짝에게 말한다.' },
        intro: {
          teacher: '"그림 속 가상의 마을이에요. 공원에 쓰레기가 많으면 누가 불편할까요? 버스 정류장 의자가 부서져 있으면요?" 시연 단추로 불편한 곳에 핀이 차례로 꽂히는 모습을 보인다(기다릴 반응: "놀러 온 동생들이요", "할머니 할아버지요"). "마을 일은 어른들만의 일이에요"라는 말이 나오면 "우리도 마을에 살아요. 우리가 할 수 있는 일과 어른께 알릴 일을 나누어 볼까요?"라고 되물어 오늘의 봉사로 잇는다.',
          student: '가상의 마을 지도에서 불편한 곳을 찾아보고, 누가 왜 불편할지 짝에게 말해 보아요.',
          demo: { tool: 'map', options: TOWN, sequence: [{ pin: [4, 0] }, { pin: [3, 2] }, { pin: [2, 3] }] },
          art: { draw: 'a paper cut small town map with a park with scattered litter, a bus stop with a broken bench and a market street, small paper pins standing on each', banner: '우리 마을, 어디가 불편할까?', extra: [{ motif: 'house', x: 300, y: 96 }] },
        },
        notes: '지도는 실제 지역이 아닌 가상의 마을이다. 학생의 집 위치·사는 동네를 묻거나 표시하게 하지 않는다.',
      }),
      C({
        id: 'auto.e34.g4-serve.intro.safe', type: 'intro', title: '봉사 안전 수칙 고르기',
        method: '봉사 안전 수칙 그림 고르기', tool: 'wordcards', minutes: 6,
        levels: { easy: '꼭 필요한 안전 수칙 2장(어른과 함께·장갑 끼기)이 담기는 것을 본다.', base: '3장(찻길에 안 들어가기까지)이 담기는 것을 보고 까닭을 말한다.', challenge: '4장(깨진 유리는 알리기까지)이 담기는 것을 보고, 담기지 않은 카드가 왜 위험한지 말한다.' },
        intro: {
          teacher: '"마을로 봉사를 나가기 전에 꼭 지킬 안전 수칙은 무엇일까요?" 시연 단추로 안전 수칙 카드가 바구니에 담기는 모습을 보인다. \'혼자 멀리 가기\'를 가리키며 "봉사하다 혼자 다른 곳에 가면 무슨 일이 생길 수 있을까요?"라고 묻는다. "봉사는 착한 일이니 위험하지 않아요"라는 말이 나오면 "좋은 일을 하다가도 다칠 수 있어요. 그래서 안전 수칙을 먼저 정해요"라고 짚는다.',
          student: '마을 봉사를 나가기 전에 꼭 지킬 안전 수칙을 골라 보고, 까닭을 짝에게 말해 보아요.',
          demo: { tool: 'wordcards', options: { mode: 'pick', basket: '봉사 안전 수칙', cards: ['어른과 함께 다니기', '혼자 멀리 가기', '장갑 끼기', '찻길에 안 들어가기', '맨손으로 줍기', '깨진 유리는 알리기'] }, sequence: [{ pick: ['어른과 함께 다니기', '장갑 끼기'] }, { pick: ['어른과 함께 다니기', '장갑 끼기', '찻길에 안 들어가기'] }, { pick: ['어른과 함께 다니기', '장갑 끼기', '찻길에 안 들어가기', '깨진 유리는 알리기'] }] },
          art: { draw: 'a paper cut line of children wearing gloves walking on a sidewalk behind a paper teacher, each holding a small paper tong and bag, a crosswalk ahead', banner: '안전하게 봉사해요', extra: [{ motif: 'sun', x: 300, y: 96 }] },
        },
      }),
      C({
        id: 'auto.e34.g4-serve.activity.sort', type: 'activity', title: '우리가 할 일·기관에 알릴 일',
        method: '우리가 할 일·기관에 알릴 일', tool: 'sortboard', minutes: 14,
        levels: { easy: '마을 문제 카드 4장, 틀린 바구니에 넣으면 까닭을 말하고 되돌아온다. 바구니에 든 장 수가 보인다.', base: '카드 6장을 다 넣은 뒤 확인한다.', challenge: '헷갈리는 카드 2장이 더해진 8장을 나누고, 알릴 일마다 어느 기관에 알릴지 짝에게 말한다(다음 활동과 이어짐).' },
        activity: {
          title: '할 일·알릴 일 나누기', tool: 'sortboard',
          teacher: '"공원의 떨어진 휴지는 우리가 주울 수 있어요. 부서진 놀이기구는 어떨까요?" 카드를 넣을 때마다 "우리가 하면 다칠 수 있나요? 고치려면 도구나 허락이 필요한가요?"를 묻는다. \'꺼진 가로등\'을 우리가 할 일에 넣는 학생에게 "가로등을 우리가 고칠 수 있을까요? 누가 고칠까요?"라고 되묻는다. 기관에 알리는 것도 마을을 위한 봉사라는 점을 짚는다.',
          task: '가상의 마을 문제 카드를 우리가 할 일과 기관에 알릴 일로 나누어요.', levels: BOARD_LV,
          items: [
            SORT('공원의 문제를 나누어요.', {}, ['우리가 할 일', '기관에 알릴 일'], [['떨어진 휴지 줍기', '"쓰레기는 쓰레기통에" 안내판', '화단 꽃에 물 주기'], ['부서진 놀이기구', '꺼진 가로등', '깨진 의자 판자']], 2, [['비둘기 먹이 주지 않기 알림'], ['쓰러진 큰 나무']], 0.15),
            SORT('버스 정류장의 문제를 나누어요.', {}, ['우리가 할 일', '기관에 알릴 일'], [['정류장 둘레 쓰레기 줍기', '줄 서기 안내 그림 붙이기', '의자 위 낙엽 쓸기'], ['부서진 정류장 의자', '깨진 안내판 유리', '고장 난 신호등']], 2, [['"차례로 타요" 포스터'], ['움푹 꺼진 보도블록']], 0.2),
            SORT('시장 골목의 문제를 나누어요.', {}, ['우리가 할 일', '기관에 알릴 일'], [['담배꽁초 대신 휴지 줍기', '"골목 깨끗이" 포스터 붙이기', '재활용품 갈래 알려 주기'], ['막힌 하수구', '늘어진 전깃줄', '불법으로 버린 큰 쓰레기']], 2, [['상인께 인사 카드 드리기'], ['물이 새는 수도관']], 0.25, { conclude: '안전하게 할 수 있는 일은 우리가 하고, 고치거나 위험한 일은 기관에 알리는 것까지가 봉사예요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '공원의 부서진 놀이기구를 보면?', options: ['우리가 고쳐요', '기관에 알려요', '그냥 타요'], answer: '기관에 알려요' }] },
        notes: '\'담배꽁초\'처럼 위생에 위험한 쓰레기는 학생이 줍지 않는다(카드에도 \'대신 휴지\'로 적었다). 실제 봉사에서는 집게와 장갑을 쓴다.',
      }),
      C({
        id: 'auto.e34.g4-serve.activity.who', type: 'activity', title: '기관과 하는 일 잇기',
        method: '기관과 하는 일 잇기', tool: 'emotion', minutes: 13,
        levels: { easy: '기관 2줄에 하는 일 카드를 잇는다. 놓으면 바로 맞는지 알려 준다.', base: '기관 3줄에 하는 일 카드를 잇는다.', challenge: '기관 4줄에 하는 일 카드를 잇는다.' },
        activity: {
          title: '기관과 하는 일', tool: 'emotion',
          teacher: '"불이 나면 어디에서 도와줄까요? 마을의 생활 불편은 어디에 알릴까요?" 짝을 이을 때마다 "그 기관은 우리 마을에서 무엇을 지켜 줄까요?"를 묻는다. 모든 문제를 \'경찰서\'에 이으려는 학생에게 "부서진 정류장 의자도 경찰관이 고칠까요? 마을 생활 일을 맡는 곳은 어디일까요?"라고 되묻는다. 기관마다 맡는 일이 달라서 알맞은 곳에 알려야 빨리 고쳐진다는 점을 짚는다.',
          task: '마을의 기관 카드와 그 기관이 맡는 일 카드를 이어요.', levels: CARD_LV,
          items: [
            MT('마을 기관과 맡는 일을 이어요.', { weather: false }, [['소방서', '불을 끄고 구해요'], ['경찰서', '마을 안전을 지켜요'], ['주민센터', '마을 생활 일을 도와요'], ['도서관', '책을 빌려줘요']], 2, 3, null, 0.15),
            MT('이 문제는 어느 기관에 알릴까요? 이어요.', { weather: false }, [['연기가 나요', '소방서'], ['길 잃은 아이가 있어요', '경찰서'], ['정류장 의자가 부서졌어요', '주민센터'], ['빌린 책이 찢어졌어요', '도서관']], 2, 3, null, 0.2),
            MT('기관에 알릴 때 할 말을 이어요.', { weather: false }, [['소방서', '"연기가 나요, 도와주세요"'], ['경찰서', '"아이가 길을 잃었어요"'], ['주민센터', '"의자가 부서졌어요"'], ['도서관', '"책이 찢어져 있어요"']], 2, 3, null, 0.25, { conclude: '기관마다 맡는 일이 달라요. 알맞은 기관에 무엇이 어디서 어떤지 알리면 빨리 고쳐져요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '문제를 알릴 기관을 써요.', columns: ['문제', '알릴 기관'], cells: [['연기가 나요', ''], ['정류장 의자가 부서졌어요', '']], answer: '소방서, 주민센터' }] },
        notes: '실제로 기관에 알리는 일은 보호자나 선생님과 함께 한다. 기관 이름만 다루고 전화번호는 쓰지 않았다(급할 때 119·112는 체계도 안전 영역에서 다룬다). 고장 신고처는 지자체마다 다를 수 있다.',
      }),
      C({
        id: 'auto.e34.g4-serve.activity.plan', type: 'activity', title: '봉사 계획 네 가지',
        method: '봉사 계획 네 가지 생각그물', tool: 'mindmap', minutes: 14,
        levels: { easy: '가지 2개(목표·준비물)에 카드를 붙인다. 놓으면 바로 맞는지 알려 준다.', base: '가지 4개(목표·역할·준비물·안전)에 카드를 붙인다.', challenge: '날짜 가지를 더해 5가지에 카드를 붙인다.' },
        activity: {
          title: '봉사 계획 생각그물', tool: 'mindmap',
          teacher: '"가운데 봉사 이름이 있어요. 무엇을 이루고 싶은지(목표), 누가 무엇을 맡을지(역할), 무엇이 필요한지(준비물), 무엇을 조심할지(안전)를 채우면 계획이 돼요." 카드를 붙일 때마다 그 가지의 물음을 소리 내어 묻는다. \'장갑 끼기\'를 준비물에 붙이는 학생에게 "장갑은 준비물이고, \'장갑 끼기\'는 지킬 약속이에요. 어느 가지가 알맞을까요?"라고 묻는다. 안전 가지를 비우면 봉사를 떠날 수 없다는 점을 짚는다.',
          task: '가운데 봉사 이름을 보고, 목표·역할·준비물·안전 가지에 알맞은 카드를 붙여요.', levels: CARD_LV,
          items: [
            { prompt: '공원 쓰레기 줍기 봉사 계획을 채워요.', toolOptions: { topic: '공원 쓰레기 줍기', slots: ['목표', '역할', '준비물', '안전'], cards: ['깨끗한 공원', '집게·봉투 나눔이', '장갑과 집게', '선생님과 함께 다니기'] }, target: { sort: { 목표: ['깨끗한 공원'], 역할: ['집게·봉투 나눔이'], 준비물: ['장갑과 집게'], 안전: ['선생님과 함께 다니기'] } }, difficulty: 0.15,
              levels: { easy: { prompt: '공원 쓰레기 줍기 봉사의 목표·준비물을 채워요.', toolOptions: { slots: ['목표', '준비물'], cards: ['깨끗한 공원', '장갑과 집게'] }, target: { sort: { 목표: ['깨끗한 공원'], 준비물: ['장갑과 집게'] } } }, challenge: { prompt: '날짜까지 공원 쓰레기 줍기 봉사 계획을 채워요.', toolOptions: { slots: ['목표', '역할', '준비물', '안전', '날짜'], cards: ['깨끗한 공원', '집게·봉투 나눔이', '장갑과 집게', '선생님과 함께 다니기', '다음 주 수요일'] }, target: { sort: { 목표: ['깨끗한 공원'], 역할: ['집게·봉투 나눔이'], 준비물: ['장갑과 집게'], 안전: ['선생님과 함께 다니기'], 날짜: ['다음 주 수요일'] } } } } },
            { prompt: '정류장 안내 포스터 봉사 계획을 채워요.', toolOptions: { topic: '정류장 안내 포스터', slots: ['목표', '역할', '준비물', '안전'], cards: ['차례로 타는 정류장', '그림 그리기 맡기', '도화지와 테이프', '찻길 쪽에 서지 않기'] }, target: { sort: { 목표: ['차례로 타는 정류장'], 역할: ['그림 그리기 맡기'], 준비물: ['도화지와 테이프'], 안전: ['찻길 쪽에 서지 않기'] } }, difficulty: 0.2,
              levels: { easy: { prompt: '정류장 안내 포스터 봉사의 목표·준비물을 채워요.', toolOptions: { slots: ['목표', '준비물'], cards: ['차례로 타는 정류장', '도화지와 테이프'] }, target: { sort: { 목표: ['차례로 타는 정류장'], 준비물: ['도화지와 테이프'] } } }, challenge: { prompt: '날짜까지 정류장 안내 포스터 봉사 계획을 채워요.', toolOptions: { slots: ['목표', '역할', '준비물', '안전', '날짜'], cards: ['차례로 타는 정류장', '그림 그리기 맡기', '도화지와 테이프', '찻길 쪽에 서지 않기', '이번 주 금요일'] }, target: { sort: { 목표: ['차례로 타는 정류장'], 역할: ['그림 그리기 맡기'], 준비물: ['도화지와 테이프'], 안전: ['찻길 쪽에 서지 않기'], 날짜: ['이번 주 금요일'] } } } } },
            { prompt: '도서관 책 정리 돕기 봉사 계획을 채워요.', toolOptions: { topic: '도서관 책 정리 돕기', slots: ['목표', '역할', '준비물', '안전'], cards: ['찾기 쉬운 책장', '번호대로 꽂기 맡기', '갈래 번호 목록', '높은 칸은 어른이'] }, target: { sort: { 목표: ['찾기 쉬운 책장'], 역할: ['번호대로 꽂기 맡기'], 준비물: ['갈래 번호 목록'], 안전: ['높은 칸은 어른이'] } }, difficulty: 0.25,
              levels: { easy: { prompt: '도서관 책 정리 돕기 봉사의 목표·준비물을 채워요.', toolOptions: { slots: ['목표', '준비물'], cards: ['찾기 쉬운 책장', '갈래 번호 목록'] }, target: { sort: { 목표: ['찾기 쉬운 책장'], 준비물: ['갈래 번호 목록'] } } }, challenge: { prompt: '날짜까지 도서관 책 정리 돕기 봉사 계획을 채워요.', toolOptions: { slots: ['목표', '역할', '준비물', '안전', '날짜'], cards: ['찾기 쉬운 책장', '번호대로 꽂기 맡기', '갈래 번호 목록', '높은 칸은 어른이', '방학 전 월요일'] }, target: { sort: { 목표: ['찾기 쉬운 책장'], 역할: ['번호대로 꽂기 맡기'], 준비물: ['갈래 번호 목록'], 안전: ['높은 칸은 어른이'], 날짜: ['방학 전 월요일'] } } } },
              conclude: '목표·역할·준비물·안전을 정하면, 모두가 같은 계획으로 안전하게 봉사할 수 있어요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '우리 모둠 마을 봉사 계획을 써요.', columns: ['목표', '역할', '준비물', '안전'], cells: [['', '', '', '']], answer: '(모둠마다 다름)' }] },
      }),
      C({
        id: 'auto.e34.g4-serve.activity.tools', type: 'activity', title: '준비물 예산 맞추기',
        method: '준비물 예산 맞추기', tool: 'economy', minutes: 13,
        levels: { easy: '꼭 필요한 물건 하나를 넣고 예산 안에서 2개를 고른다.', base: '꼭 필요한 물건 하나를 넣고, 필요 없는 물건은 빼고 예산 안에서 3개를 고른다.', challenge: '3개를 고르되 예산을 남기게(정한 값보다 적게) 고른다.' },
        activity: {
          title: '준비물 예산 맞추기', tool: 'economy',
          teacher: '"우리 반 봉사 예산은 가상의 값으로 4000원이에요. 무엇을 먼저 넣어야 할까요?" 고를 때마다 "이것은 봉사에 꼭 필요한가요, 있으면 좋은 것인가요?"를 묻는다. 사탕부터 담는 학생에게 "사탕을 사면 장갑을 살 돈이 남을까요?"라고 묻는다. 필요한 것을 먼저 고르고, 남는 돈은 다음 봉사를 위해 아낄 수 있다는 점을 짚는다. 값은 모두 가상의 값이라고 밝힌다.',
          task: '가상의 봉사 예산 안에서 꼭 필요한 준비물부터 골라요.', levels: SAME,
          items: [
            { prompt: '예산 4000원(가상). 장갑은 꼭 넣고, 사탕은 빼고 3개를 골라요.', toolOptions: { mode: 'budget', budget: 4000, items: ITEMS([{ id: 'candy', text: '사탕', price: 1000 }, { id: 'tissue', text: '물티슈', price: 1000 }]) }, target: { budget: { must: ['glove'], not: ['candy'], count: 3 } }, difficulty: 0.15,
              levels: { easy: { prompt: '예산 4000원(가상). 장갑은 꼭 넣고 2개를 골라요.', toolOptions: { items: ITEMS() }, target: { budget: { must: ['glove'], count: 2 } } }, challenge: { prompt: '예산 4000원(가상). 장갑은 꼭 넣고 3개를 고르되 1000원은 남겨요.', target: { budget: { max: 3000, must: ['glove'], not: ['candy'], count: 3 } } } } },
            { prompt: '예산 5000원(가상). 도화지는 꼭 넣고, 장난감은 빼고 3개를 골라요.', toolOptions: { mode: 'budget', budget: 5000, items: [{ id: 'paper', text: '도화지', price: 1000 }, { id: 'tape', text: '테이프', price: 1500 }, { id: 'pen', text: '사인펜', price: 2000 }, { id: 'toy', text: '장난감', price: 2500 }, { id: 'sticker', text: '스티커', price: 1000 }] }, target: { budget: { must: ['paper'], not: ['toy'], count: 3 } }, difficulty: 0.2,
              levels: { easy: { prompt: '예산 5000원(가상). 도화지는 꼭 넣고 2개를 골라요.', toolOptions: { items: [{ id: 'paper', text: '도화지', price: 1000 }, { id: 'tape', text: '테이프', price: 1500 }, { id: 'pen', text: '사인펜', price: 2000 }] }, target: { budget: { must: ['paper'], count: 2 } } }, challenge: { prompt: '예산 5000원(가상). 도화지는 꼭 넣고 3개를 고르되 1000원은 남겨요.', target: { budget: { max: 4000, must: ['paper'], not: ['toy'], count: 3 } } } } },
            { prompt: '예산 6000원(가상). 물뿌리개는 꼭 넣고, 과자는 빼고 3개를 골라요.', toolOptions: { mode: 'budget', budget: 6000, items: [{ id: 'can', text: '물뿌리개', price: 3000 }, { id: 'seed', text: '꽃씨', price: 1000 }, { id: 'shovel', text: '모종삽', price: 1500 }, { id: 'snack', text: '과자', price: 2000 }, { id: 'tag', text: '이름표', price: 500 }] }, target: { budget: { must: ['can'], not: ['snack'], count: 3 } }, difficulty: 0.25,
              levels: { easy: { prompt: '예산 6000원(가상). 물뿌리개는 꼭 넣고 2개를 골라요.', toolOptions: { items: [{ id: 'can', text: '물뿌리개', price: 3000 }, { id: 'seed', text: '꽃씨', price: 1000 }, { id: 'shovel', text: '모종삽', price: 1500 }] }, target: { budget: { must: ['can'], count: 2 } } }, challenge: { prompt: '예산 6000원(가상). 물뿌리개는 꼭 넣고 3개를 고르되 1000원은 남겨요.', target: { budget: { max: 5000, must: ['can'], not: ['snack'], count: 3 } } } },
              conclude: '봉사 준비물은 꼭 필요한 것부터 예산 안에서 고르고, 남는 돈은 아껴 둬요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '우리 모둠이 고른 준비물과 값을 써요.', columns: ['준비물', '값(원)'], cells: [['', ''], ['', ''], ['', '']], answer: '(모둠마다 다름)' }] },
        notes: '예산·값은 모두 가상이다. 학생이 실제로 돈을 내거나 가져오게 하지 않는다. 학생 가정의 용돈·형편을 묻지 않는다.',
      }),
      C({
        id: 'auto.e34.g4-serve.wrap.do', type: 'wrap', title: '학교 둘레 줍기 봉사',
        method: '학교 둘레 줍기 봉사', tool: 'timer', minutes: 7,
        levels: { easy: '선생님과 함께 안전 점검 2칸을 확인한다.', base: '모둠 역할대로 안전 점검 4칸을 확인한다.', challenge: '안전 점검 4칸을 확인하고, 결과는 선생님이 찍은 전·후 사진(장소만)으로 함께 돌아본다.' },
        wrap: {
          teacher: '"오늘 정리 시간에는 선생님과 학교 정문 둘레로 나가 쓰레기를 주워요. 나가기 전에 안전 점검부터 해요." 점검표를 모두 확인한 모둠만 출발한다. 찻길 쪽으로 가는 학생이 있으면 바로 멈추게 하고 "우리 약속은 무엇이었지요?"라고 묻는다. 돌아와서 주운 봉투 수를 기록판에 적고, 사진은 선생님이 장소의 전·후만 찍는다. 출구 2번에서 \'깨진 유리를 줍는다\'를 고른 학생에게 안전 수칙 카드를 다시 보여 준다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', options: { title: '줍기 봉사 전 안전 점검', safety: ['선생님과 함께 나가요', '찻길 쪽에 안 가요', '장갑과 집게를 써요', '깨진 것은 알려요'] }, prompt: '줍기 봉사 전 안전 점검을 모두 확인해요.', target: { safety: true }, difficulty: 0.1,
              levels: { easy: { prompt: '줍기 봉사 전 안전 점검 2칸을 확인해요.', toolOptions: { safety: ['선생님과 함께 나가요', '찻길 쪽에 안 가요'] } } } },
            CH('줍기 봉사 중 깨진 유리를 보면?', ['맨손으로 줍는다', '선생님께 알린다', '발로 찬다'], 1, '깨진 유리는 줍지 않고 선생님께 알려요.'),
            MOOD,
          ],
        },
        worksheet: {
          title: '마을 봉사 돌아보기',
          items: [
            { type: 'check', prompt: '봉사하며 지킨 안전 수칙에 표시해요.', options: ['선생님과 함께 다녔어요', '찻길 쪽에 안 갔어요', '장갑과 집게를 썼어요'] },
            { type: 'short', prompt: '봉사를 하고 나서 달라진 곳을 한 줄로 써요.' },
          ],
          easy: { note: '"○○이 깨끗해졌어요."로 써 봐요.', items: [{ type: 'draw', prompt: '봉사를 마친 정문 둘레를 그려요.' }] },
        },
        notes: '교사가 인솔하는 실천 활동이다(학교 정문 둘레, 찻길에서 떨어진 곳). 날씨·안전 여건이 안 되면 교내 화단 정리로 바꾼다. 사진은 장소만 찍고 학생 얼굴은 찍지 않는다.',
      }),
      C({
        id: 'auto.e34.g4-serve.wrap.letter', type: 'wrap', title: '기관에 알리는 글 채우기',
        method: '기관에 알리는 글 빈칸 채우기', tool: 'story', minutes: 7,
        levels: { easy: '알리는 글 2칸(장소·문제)에 카드를 넣는다.', base: '3칸(바라는 것까지)에 카드를 넣는다.', challenge: '3칸을 채운 뒤, 같은 틀로 내 말로 쓴 알리는 글을 활동지에 쓴다.' },
        wrap: {
          teacher: '"기관에 알릴 때는 어디서, 무엇이 문제인지, 무엇을 바라는지 말해야 빨리 고쳐져요." 칸마다 카드를 넣은 뒤 완성된 글을 소리 내어 읽게 한다. 바라는 것 칸에 \'빨리 와!\'처럼 명령하는 말을 넣으려는 학생에게 "받는 분이 기분 좋게 도와주시려면 어떻게 부탁하면 좋을까요?"라고 묻는다. 실제로 보내는 글은 선생님과 함께 다듬어 보낸다고 밝힌다. 출구 2번에서 \'마을 일은 어른들만\'을 고른 학생에게 오늘 우리가 한 봉사를 떠올리게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'story', options: { mode: 'fill', slots: [{ id: 'b1', who: '우리 반', label: '___에서 알려 드려요.' }, { id: 'b2', who: '우리 반', label: '정류장 ___가 부서졌어요.' }, { id: 'b3', who: '우리 반', label: '___ 주시면 고맙겠습니다.' }], cards: ['고쳐', '버스 정류장', '빨리 와!', '의자'] }, prompt: '기관에 알리는 글의 빈칸을 채워요.', target: { fill: { b1: '버스 정류장', b2: '의자', b3: '고쳐' } }, difficulty: 0.15,
              levels: { easy: { prompt: '알리는 글의 장소·문제 칸을 채워요.', toolOptions: { slots: [{ id: 'b1', who: '우리 반', label: '___에서 알려 드려요.' }, { id: 'b2', who: '우리 반', label: '정류장 ___가 부서졌어요.' }], cards: ['버스 정류장', '의자', '빨리 와!'] }, target: { fill: { b1: '버스 정류장', b2: '의자' } } } } },
            CH('마을 일에 대한 바른 생각은?', ['어른들만의 일이에요', '우리도 할 일과 알릴 일이 있어요', '아무도 안 해도 돼요'], 1, '우리도 마을에 살아요. 안전한 일은 하고, 고칠 일은 알려요.'),
            MOOD,
          ],
        },
        worksheet: {
          title: '기관에 알리는 글',
          items: [
            { type: 'blank', prompt: '알리는 글의 틀을 채워요.', text: '어디서 → 무엇이 문제 → 무엇을 ___', answer: '바라는지' },
            { type: 'short', prompt: '마을의 불편한 곳 하나를 골라 기관에 알리는 글을 두 문장으로 써요.' },
          ],
          easy: { note: '"○○에서 ○○가 부서졌어요. 고쳐 주세요."로 써 봐요.', items: [{ type: 'draw', prompt: '고쳐진 마을 모습을 그려요.' }] },
        },
      }),
    );
  }


  PaperLessons.registerModules(M);
})();
