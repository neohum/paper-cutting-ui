/* 계기교육 독도교육 — 초3-4 모듈 내용(edu-module.v1). 형식·작성 규칙: MODULES_BUILD.md, 계획: framework/events-auto.json 의 dokdo 초3-4.
 * 근거: 교육부 「독도교육 활성화 계획」(2025, 교과·창체 통합 연 10시간 이상 권장), 초등 내용체계(2011): 독도의 중요성
 *   (자연환경·지리적 특성·역사·환경적 특성·정치·군사·경제적 가치) — research-days §2. 동북아역사재단 초3-4(모양·위치, 바위·동식물).
 * 사실(거리·주소·시설·생물 이름)은 이미 발행된 단원 lessons/units/g3-cc-dokdo.js·g4-cc-dokdo.js(외교부 독도 누리집·동북아역사재단
 *   독도 자료 서술)에 있는 것만 썼다: 울릉도에서 87.4km·일본 오키섬에서 157.5km, 울릉도의 남동쪽, 동해, 경상북도 울릉군 울릉읍 독도리,
 *   동도 독도이사부길·서도 독도안용복길, 동도(등대·독도경비대·선착장)·서도(주민 숙소, 더 높고 뾰족함), 바다 밑 화산 활동으로 생긴 화산섬,
 *   천연보호구역, 괭이갈매기·바다제비·슴새, 해국·땅채송화·섬기린초, 난류·한류, 미역·전복·소라, 주민·독도경비대원·등대관리원.
 *   면적·높이·지정 연도·생물 수 같은 수치는 근거에 없어 쓰지 않는다.
 * 초3-4 기준: 상황 판단(그림+짧은 글), 차례 정하기, 고른 이유 말하기, 짝 토의, 간단한 표·그림그래프.
 * 정치적 중립: 대한민국 정부의 공식 자료(외교부·동북아역사재단)의 사실로 차분히 말하고, 다른 나라나 그 나라 사람을 탓하거나 미워하게 하는 말은 쓰지 않는다.
 *   오키섬은 거리를 견주는 기준점으로만 쓴다. 인물은 가명의 가상 인물이고, 실제 근무자(경비대원·등대관리원)의 말이나 마음을 지어 붙이지 않는다.
 * 주제 10개(3학년 5 · 4학년 5) × 도입 2 · 활동 4 · 정리 2 = 계획 모듈 80개.
 * 체계도 계획대로 못 한 것(교구 한계) — levels 글은 실제 설정대로 적었다:
 *   - g3-volcano.intro.earth: earth 교구에는 지구 속 겹을 여는 모드가 없다. 지구 그림(spin, 잠금) + 보기 고르기(ask)로 하고,
 *     겹 그림은 교사가 과학 교과서 그림을 따로 보인다.
 *   - g3-dist.intro.ruler: ruler 는 물건 띠만 잰다. '지도 위 두 섬 사이에 놓은 종이 띠'를 재는 연습으로 했다.
 *   - g3-dist.activity.bar: 막대 그리기 단추로 87.4·157.5를 만들 수 없어, 10km 단위 어림값(90·160km)으로 그리고
 *     읽기 문항·활동지·결론은 외교부 자료의 정확한 값으로 했다(화면 제목에 '어림'을 밝힘).
 *   - g3-dist.activity.scale: 칸 지도 축척은 칸 수 × 한 칸 값이라, '한 칸 약 20km' 어림 지도(울릉도→독도 4칸·약 80km,
 *     독도→오키섬 8칸·약 160km)로 했다. 자료의 거리와 다르다는 것을 교사 발문·메모에 밝혔다.
 *   - g3-isle.activity.place: mapcompass place 판정은 설명에 없는 빈 터가 하나 더 있어야 오답을 만든다 — 단계마다 빈 터를 하나 더 두었다.
 *   - g3-isle.activity.legend: 독도 확대 지도의 시설 기호가 4개뿐이라 도전 '6개'는 빈칸 4개 + 헷갈리는 이름 2개(보기 6개)로 했다.
 *   - g3-isle.intro.photo·g4-protect.intro.sign·g3-isle.wrap.quiz: 교구가 사진·표지판·기호 그림을 그리지 못해 카드에 말로 적고 교사가 실물을 보인다.
 *   - g4-life.intro.sound: wordcards 듣기는 영어 발음이라 쓰지 않고, 교사가 이름을 부르면 카드를 고르는 pick 으로 했다.
 *   - g3-volcano.activity.build·g3-sign.activity.mail 등 collage: 가위로 떼어 내기가 없어 '깎인 자리'는 파란 조각을 겹쳐 나타내고,
 *     '주소 조각'은 흰 긴 네모 조각(글 없음)으로 하고 쓸 말은 활동지에 쓴다.
 *   - 단계별 문항 수는 같아야 해서 '세 장면'·'n장면' 같은 계획은 보기 수·결과 보이기(revealAfterCheck)·카드 수로 단계를 나눴다.
 *   - 정리(출구) 질문은 단계별 판이 없는 것이 있어(선택형) 단계 차이는 첫 교구 문항과 교사 진행으로만 난다.
 * 사람 확인(발행 전): 근거 단원(g3·g4-cc-dokdo)에 없는 일반 지식이나 가상 자료로 쓴 것. 확인처는 괄호 안.
 *   - g3-dir.intro.walk: 교실 8방위 걷기 진행(안전) — 교사 판단.
 *   - g3-volcano.*: '지구 속은 뜨겁고 화산은 그 뜨거운 것이 나오는 곳', 구멍 난 바위가 생기는 차례(파도가 부딪쳐 약한 곳에 틈 → 구멍),
 *     '지금도 깎이고 있어요' (교육부 과학 교과서 4학년 화산과 지진, 동북아역사재단 독도 자연 자료)
 *   - g3-sign.activity.region: 칸 지도의 도 경계는 줄인 그림 / 독도 주소 '경상북도 울릉군 울릉읍 독도리'·도로명 (외교부 독도 누리집, 울릉군)
 *   - g4-protect.*: 천연보호구역에서의 행동 약속(돌·식물 가져가지 않기, 먹이 주지 않기, 둥지 멀리서 보기) (문화재청(국가유산청) 천연기념물 안내, 외교부 독도 누리집)
 *   - g4-life.*: 해국 '연보라 꽃·바다의 국화', 땅채송화 '잎이 통통·땅에 낮게', 섬기린초 '울릉도·독도에서 자람', 괭이갈매기 이름의 '괭이(고양이)',
 *     바다제비·슴새 습성(바다 위에서 지내다 섬에서 새끼를 기름), 괭이갈매기 한 해 차례와 계절(봄 둥지·알, 여름 새끼) (국립생물자원관, 동북아역사재단 독도 생물 자료)
 *     / 식물 키 그림그래프(뼘)는 가상
 *   - g4-sea.*: 난류(남쪽에서 올라옴)·한류(북쪽에서 내려옴)가 독도 둘레에서 만남, 만나는 곳에 먹이·물고기가 많음, 먹이 차례(해조류→작은 바다 동물→물고기),
 *     전복이 해조류를 먹음, 해조류 숲의 역할(먹이·숨는 곳·알 낳는 곳), 바다 생물 예(다시마·김·오징어) (외교부 독도 누리집 자연환경, 국립수산과학원)
 *   - g4-people.*: 등대지기 하루 장면·6시 30분은 이해를 돕는 가상 이야기 / '물·생활용품을 배로 날라 옴', '주민은 서도 숙소에서 지냄' (외교부 독도 누리집)
 *   - g4-eco.*: 바닷가 쓰레기 그림그래프 수(8·6·4·2개)는 가상 / 쓰레기가 강·바다를 따라 먼 바다로 감 (해양수산부 해양쓰레기 자료)
 */
(function () {
  const BASE = { schema: 'edu-module.v1', domain: 'dokdo', band: '초3-4' };
  const T = (topic, grade) => (o) => Object.assign({}, BASE, { topic: `dokdo.e34.${topic}`, grades: [grade] }, o);
  const M = [];
  const strip = (p) => String(p).replace(/[.?!]$/, '');
  const idOf = (c) => (typeof c === 'string' ? c : c.id);
  const mix = (groups) => { const out = []; const n = Math.max(...groups.map((g) => g.length)); for (let i = 0; i < n; i++) for (const g of groups) if (g[i] != null) out.push(g[i]); return out; };
  const count = (groups) => groups.reduce((a, g) => a + g.length, 0);
  const slotId = (s) => (typeof s === 'string' ? s : s.id);
  const sortT = (slots, groups) => ({ sort: Object.fromEntries(slots.map((s, i) => [slotId(s), groups[i].map(idOf)])) });
  const plain = (list) => list.map((x) => ({ id: x.id, text: x.text }));

  // 나누기(sortboard·mindmap·story sort): 기본 = groups, 쉬움 = 칸마다 앞에서 ne장, 도전 = 칸마다 hard 카드를 더함
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

  // 차례 놓기(timeline·story·lifecycle order): 기본 = 카드 전부, 쉬움 = keep 번째 카드들만, 도전 = 틀린 카드(trap) 한 장이 섞인다
  const NAMES = { 2: ['먼저', '다음'], 3: ['처음', '다음', '끝'], 4: ['처음', '다음', '그다음', '끝'], 5: ['처음', '다음', '그다음', '그 뒤', '끝'] };
  const shuffled = (list) => list.slice(1).concat(list[0]).reverse();
  const ORD = (prompt, base, steps, keep, trap, d, more, noSlots) => {
    const ids = steps.map((c) => c.id);
    const easy = keep.map((i) => steps[i]);
    const p = strip(prompt);
    const sl = (n) => (noSlots ? { slots: n } : { slots: NAMES[n] });
    return {
      prompt, toolOptions: Object.assign({}, base, { mode: 'order' }, sl(steps.length), { cards: shuffled(steps) }), target: { order: ids }, difficulty: d,
      levels: {
        easy: { prompt: `${p}(${easy.length}장).`, toolOptions: Object.assign({}, sl(easy.length), { cards: shuffled(easy) }), target: { order: easy.map((c) => c.id) } },
        challenge: { prompt: `${p}. 틀린 카드 한 장은 빼요.`, toolOptions: { cards: shuffled(steps).concat(trap) }, target: { order: ids } },
      },
      ...more,
    };
  };

  // 짝 잇기(wordcards·emotion·mindmap match): rows = [[칸 글, 카드 글], …] 기본 nBase줄, 쉬움 nEasy줄, 도전 = nHard줄(기본 전부) + 함정 카드
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

  // 바구니에 고르기(wordcards·emotion·mindmap pick): cards = [{ id, text, ok? }], 쉬움 = easyIds 카드만, 도전 = hard 카드를 더함
  const PICK = (prompt, base, cards, easyIds, hard, d, more) => {
    const ok = (list) => list.filter((c) => c.ok).map((c) => c.id);
    const easy = cards.filter((c) => easyIds.includes(c.id));
    const all = cards.concat(hard || []);
    const lv = { easy: { prompt: `${strip(prompt)}(${easy.length}장).`, toolOptions: { cards: plain(easy) }, target: { pick: ok(easy) } } };
    if (hard && hard.length) lv.challenge = { prompt: `${strip(prompt)}(${all.length}장).`, toolOptions: { cards: plain(all) }, target: { pick: ok(all) } };
    return { prompt, toolOptions: Object.assign({ mode: 'pick' }, base, { cards: plain(cards) }), target: { pick: ok(cards) }, difficulty: d, levels: lv, ...more };
  };

  // 빈칸 채우기(wordcards·story fill): rows = [[빈칸 글(___), 정답 카드], …], wrong = 함정 카드 목록.
  //   쉬움 = 앞 e칸 + 함정 we장, 기본 = 앞 b칸 + 함정 wb장, 도전 = 전부 + 함정 전부
  const FILLN = (prompt, who, rows, wrong, e, b, d, more, w) => {
    const ws = w || [1, Math.min(wrong.length, 3)];
    const slots = rows.map((r, i) => Object.assign({ id: `b${i + 1}`, label: r[0] }, who ? { who: Array.isArray(who) ? who[i] : who } : {}));
    const tg = (k) => ({ fill: Object.fromEntries(rows.slice(0, k).map((r, i) => [`b${i + 1}`, r[1]])) });
    const cardsOf = (k, nw) => rows.slice(0, k).map((r) => r[1]).concat(wrong.slice(0, nw)).reverse();
    const p = strip(prompt);
    return {
      prompt, toolOptions: { mode: 'fill', slots: slots.slice(0, b), cards: cardsOf(b, ws[1]) }, target: tg(b), difficulty: d,
      levels: {
        easy: { prompt: `${p}(${e}칸).`, toolOptions: { slots: slots.slice(0, e), cards: cardsOf(e, ws[0]) }, target: tg(e) },
        challenge: { prompt: `${p}(${rows.length}칸).`, toolOptions: { slots, cards: cardsOf(rows.length, wrong.length) }, target: tg(rows.length) },
      },
      ...more,
    };
  };

  // 스스로 점검(timer selfCheck) 출구 질문: 쉬움 앞 2칸, 기본 앞 baseN칸(기본 3), 도전 4칸
  const SELF = (title, checks, prompt, baseN) => ({
    type: 'tool', tool: 'timer', options: { title }, prompt: prompt || '오늘 한 것에 스스로 표시해요.', target: { selfCheck: checks.slice(0, baseN || 3) }, difficulty: 0.1,
    levels: { easy: { target: { selfCheck: checks.slice(0, 2) } }, challenge: { target: { selfCheck: checks.slice(0, 4) } } },
  });
  // 콜라주 꾸미기 문항: 쉬움 easyN조각, 기본 baseN조각, 도전 hardN조각 + 점검 한 칸 더
  const MAKE = (prompt, options, checks, extraCheck, n, d, more) => ({
    prompt, toolOptions: options, target: { selfCheck: checks, minPieces: n[1] }, difficulty: d || 0.1,
    levels: { easy: { prompt: `${strip(prompt)}(${n[0]}조각).`, target: { selfCheck: checks, minPieces: n[0] } }, challenge: { prompt: `${strip(prompt)}(${n[2]}조각).`, target: { selfCheck: checks.concat(extraCheck), minPieces: n[2] } } },
    ...more,
  });
  // 활동 문항 모양 → 출구 교구 질문 모양
  const EX = (tool, it) => ({ type: 'tool', tool, prompt: it.prompt, options: it.toolOptions, target: it.target, difficulty: it.difficulty, levels: it.levels });
  const MOOD = { type: 'mood', prompt: '오늘 공부를 마친 내 마음은 어떤가요?' };
  const CARD_LV = { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } };
  const BOARD_LV = { easy: { instant: true, showCount: true }, base: {}, challenge: { shuffle: true } };
  const MAP_LV = { easy: { readout: true }, base: {}, challenge: {} };
  const PLAIN_LV = { easy: {}, base: {}, challenge: {} };
  const FACT = '거리·주소·시설 이름은 외교부 독도 누리집과 동북아역사재단 자료에 있는 것만 말한다. 학생이 짐작한 숫자는 "어느 자료에서 보았나요?"라고 되물어 자료로 확인하게 한다.';
  const CALM = '독도는 대한민국 정부 자료의 사실로 차분히 말한다. 다른 나라나 그 나라 사람을 탓하거나 놀리는 말이 나오면 "우리는 자료의 사실로 말해요"라고 바로잡는다.';

  // ---------- 지도(칸 지도 — 칸 자리는 위치 관계만 살린 줄인 그림) ----------
  // 우리나라 칸 지도 6×9: 서울 [2,5], 울릉도 [4,4], 독도 [5,5](울릉도의 남동쪽 · 서울과 같은 줄의 동쪽 바다), 제주도 [1,8]
  const KOR_LAND = [[1, 0], [2, 0], [3, 0], [4, 0], [1, 1], [2, 1], [3, 1], [4, 1], [1, 2], [2, 2], [3, 2], [4, 2],
    [1, 3], [2, 3], [3, 3], [1, 4], [2, 4], [3, 4], [1, 5], [2, 5], [3, 5], [1, 6], [2, 6], [3, 6], [1, 7], [2, 7], [3, 7]];
  const KOR_SEA = [[0, 3], [0, 4], [0, 5], [0, 6], [0, 7], [0, 8], [4, 3], [4, 4], [4, 5], [4, 6], [4, 7], [4, 8],
    [5, 2], [5, 3], [5, 4], [5, 5], [5, 6], [5, 7], [5, 8], [1, 8], [2, 8], [3, 8]];
  const KOR = (places, more) => Object.assign({ grid: [6, 9], title: '우리나라 칸 지도', regions: [{ name: '우리나라 땅', cells: KOR_LAND, color: 'mint' }], regionNames: false, sea: KOR_SEA, places }, more || {});
  const P = {
    seoul: { name: '서울', icon: 'capital', at: [2, 5] }, busan: { name: '부산', icon: 'port', at: [3, 7] },
    jeju: { name: '제주도', icon: 'island', at: [1, 8] }, baekdu: { name: '백두산', icon: 'mountain', at: [2, 0] },
    ulleung: { name: '울릉도', icon: 'island', at: [4, 4] }, dokdo: { name: '독도', icon: 'island', at: [5, 5] },
    pohang: { name: '포항', icon: 'port', at: [3, 6] },
  };
  // 활동지 전용 작은 지도(6×4)
  const KORW_LAND = [[1, 0], [2, 0], [3, 0], [1, 1], [2, 1], [3, 1], [1, 2], [2, 2], [3, 2], [2, 3], [3, 3]];
  const KORW_SEA = [[0, 2], [0, 3], [4, 0], [4, 1], [4, 2], [4, 3], [5, 0], [5, 1], [5, 2], [5, 3], [1, 3]];
  const KORW = (places, more) => Object.assign({ grid: [6, 4], regions: [{ name: '우리나라 땅', cells: KORW_LAND, color: 'mint' }], regionNames: false, sea: KORW_SEA, places }, more || {});
  const PW = {
    seoul: { name: '서울', icon: 'capital', at: [2, 1] }, ulleung: { name: '울릉도', icon: 'island', at: [4, 1] }, dokdo: { name: '독도', icon: 'island', at: [5, 2] },
  };
  // 독도 확대 칸 지도 6×4(서쪽 서도, 동쪽 동도)
  const DK_SEO = [[1, 1], [1, 2], [2, 2]];
  const DK_DONG = [[3, 1], [4, 1], [4, 2]];
  const DK_SEA = [];
  for (let r = 0; r < 4; r++) for (let c = 0; c < 6; c++) if (![...DK_SEO, ...DK_DONG].some(([x, y]) => x === c && y === r)) DK_SEA.push([c, r]);
  const DK = (places, more) => Object.assign({ grid: [6, 4], title: '독도 확대 지도', regions: [{ name: '서도', cells: DK_SEO, color: 'mint' }, { name: '동도', cells: DK_DONG, color: 'peach' }], sea: DK_SEA, places }, more || {});
  // 독도 시설 — 동도: 등대·독도경비대·선착장, 서도: 주민 숙소
  const F = {
    light: { name: '독도 등대', icon: 'lighthouse', at: [4, 1] },
    guard: { name: '독도경비대', icon: 'police', at: [3, 1] },
    port: { name: '선착장', icon: 'port', at: [4, 2] },
    house: { name: '주민 숙소', icon: 'house', at: [1, 2] },
  };

  // ======================================================================================================
  // 3학년 · 8방위로 독도 자리 읽기 (초 내용체계: 지리적 특성 — 동북아역사재단 3-4 모양·위치)
  // ======================================================================================================
  {
    const C = T('g3-dir', 3);
    const DIR_ROWS = [['북쪽과 동쪽 사이', '북동'], ['남쪽과 동쪽 사이', '남동'], ['남쪽과 서쪽 사이', '남서'], ['북쪽과 서쪽 사이', '북서'],
      ['해가 뜨는 쪽', '동'], ['해가 지는 쪽', '서'], ['북쪽의 반대쪽', '남'], ['남쪽의 반대쪽', '북']];
    const OPP_ROWS = [['남동의 반대쪽', '북서'], ['북동의 반대쪽', '남서'], ['북서의 반대쪽', '남동'], ['남서의 반대쪽', '북동'],
      ['동의 반대쪽', '서'], ['북의 반대쪽', '남'], ['서의 반대쪽', '동'], ['남의 반대쪽', '북']];
    M.push(
      C({
        id: 'dokdo.e34.g3-dir.intro.rose', type: 'intro', title: '방위표 돌려 방위 맞히기',
        method: '방위표 돌려 맞히기', tool: 'mapcompass', minutes: 6,
        levels: { easy: '학교에서 본 시청(북쪽)처럼 4방위 하나만 함께 맞힌다.', base: '학교에서 본 병원이 북서쪽인 것을 8방위로 맞히는 모습을 본다.', challenge: '병원에 이어 학교에서 본 기차역(남동쪽)도 짝과 먼저 말해 본다.' },
        intro: {
          teacher: '"종이 마을 학교에서 보면 병원은 어느 쪽에 있을까요?" 대답을 듣고(기다릴 반응: "위쪽이요", "왼쪽 위요") 시연 단추로 방위표 바늘이 북서를 가리키는 모습을 보인다. "위쪽"이라는 대답에는 "지도에서 위쪽은 북쪽이라고 약속해요. 위와 왼쪽 사이는 북쪽과 서쪽 사이, 북서예요"라고 바로잡는다. 오늘은 이 8방위로 독도가 어디에 있는지 읽는다고 밝힌다.',
          student: '학교에서 본 병원이 어느 쪽인지 방위표 낱말로 말해 보아요. 위·아래 대신 북·남으로 말해요.',
          demo: { tool: 'mapcompass', options: { mode: 'direction', points: 8, from: '학교', to: '병원' }, sequence: [{ direction: '북서' }] },
          art: { draw: 'a paper compass rose with eight points lying on a small paper village map with a school in the middle and a hospital to the upper left', banner: '어느 쪽일까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
      }),
      C({
        id: 'dokdo.e34.g3-dir.intro.walk', type: 'intro', title: '교실 8방위 걷기',
        method: '교실 8방위 걷기', tool: 'timer', minutes: 6,
        levels: { easy: '동·서·남·북 4방위를 한 번씩(4번) 부르며 걷는다.', base: '8방위를 한 번씩(8번) 부르며 걷는다.', challenge: '8번을 마친 뒤 짝이 방위를 부르고 내가 걷는다.' },
        intro: {
          teacher: '바닥에 북·북동·동·남동·남·남서·서·북서 종이를 미리 붙여 둔다(북쪽은 실제 북쪽에 맞춘다). "선생님이 부르는 방위로 한 걸음 가고, 멈춤 신호에 서요." 시연 단추로 걷기 10초·멈춤 5초가 8번으로 맞춰지는 것을 보인다. 칠판 쪽을 무조건 북쪽이라고 여기는 학생에게는 "교실의 북쪽은 나침반이 정해요. 칠판이 늘 북쪽은 아니에요"라고 짚는다. 걸을 때는 뛰지 않고 친구와 부딪히지 않게 한다.',
          student: '선생님이 부르는 방위로 한 걸음씩 걸어요. 멈춤 신호가 나면 그 자리에서 방위 이름을 말해요.',
          demo: { tool: 'timer', options: { title: '8방위 걷기', labels: ['걷기', '멈춤'], plan: { work: 10, rest: 5, rounds: 4 } }, sequence: [{ plan: { work: 10, rest: 5, rounds: 8 } }] },
          art: { draw: 'paper children standing on eight paper direction cards laid on a classroom floor in a circle, one child stepping toward the southeast card', banner: '8방위로 걸어요', extra: [{ motif: 'star', x: 70, y: 110, color: 'mint', s: 0.6 }] },
        },
        notes: '교실 북쪽은 나침반이나 스마트 기기 나침반으로 미리 확인한다. 좁은 교실은 모둠별로 차례를 나눈다.',
      }),
      C({
        id: 'dokdo.e34.g3-dir.activity.read', type: 'activity', title: '울릉도에서 본 독도 방위 읽기',
        method: '울릉도에서 본 독도 방위 읽기', tool: 'map', minutes: 14,
        levels: { easy: '방위표를 돌리는 대신 보기 2개 가운데 방위를 고른다.', base: '방위표를 지도 북쪽에 맞추고 8방위 가운데 방위를 고른다.', challenge: '8방위로 고른 뒤 서울에서 본 독도 방위도 함께 고른다.' },
        activity: {
          title: '울릉도에서 본 독도 방위 읽기', tool: 'map',
          teacher: '"방위표의 북쪽을 지도의 북쪽 화살표에 맞추었나요?" 출발 섬에 손가락을 두고 도착 섬 쪽으로 선을 그어 보게 한다. 독도에서 울릉도를 볼 때도 \'남동\'을 고르는 학생에게는 "출발이 바뀌면 방위도 반대가 돼요"라고 짚는다. "오른쪽 아래"라고 말하는 학생에게는 방위표 글자로 다시 말하게 한다.',
          task: '방위표를 지도 북쪽에 맞추고, 출발한 곳에서 본 도착한 곳의 방위를 골라요.', levels: MAP_LV,
          items: [
            { prompt: '울릉도에서 독도는 어느 방위에 있나요?', toolOptions: KOR([P.ulleung, P.dokdo, P.seoul], { mode: 'compass', points: 8 }), target: { from: '울릉도', to: '독도' }, difficulty: 0.2,
              levels: {
                easy: { prompt: '울릉도에서 독도는 어느 쪽인지 골라요(보기 2개).', toolOptions: { readOnly: true, ask: { q: '울릉도에서 본 독도는?', choices: ['남동쪽', '북서쪽'] } }, target: { pick: 0 } },
                challenge: { prompt: '울릉도에서 독도 방위를 고르고, 서울에서 본 독도도 골라요.', toolOptions: { ask: { q: '서울에서 독도는?', choices: ['동쪽', '서쪽', '북쪽'] } }, target: { from: '울릉도', to: '독도', pick: 0 } },
              } },
            { prompt: '독도에서 울릉도는 어느 방위에 있나요?', toolOptions: KOR([P.ulleung, P.dokdo, P.busan], { mode: 'compass', points: 8 }), target: { from: '독도', to: '울릉도' }, difficulty: 0.25,
              levels: {
                easy: { prompt: '독도에서 울릉도는 어느 쪽인지 골라요(보기 2개).', toolOptions: { readOnly: true, ask: { q: '독도에서 본 울릉도는?', choices: ['남동쪽', '북서쪽'] } }, target: { pick: 1 } },
                challenge: { prompt: '독도에서 울릉도 방위를 고르고, 독도에서 본 서울도 골라요.', toolOptions: { places: [P.ulleung, P.dokdo, P.seoul], ask: { q: '독도에서 서울은?', choices: ['동쪽', '서쪽', '남쪽'] } }, target: { from: '독도', to: '울릉도', pick: 1 } },
              },
              conclude: '울릉도에서 독도는 남동쪽, 독도에서 울릉도는 북서쪽이에요.' },
            { prompt: '제주도에서 독도는 어느 방위에 있나요?', toolOptions: KOR([P.jeju, P.dokdo, P.ulleung], { mode: 'compass', points: 8 }), target: { from: '제주도', to: '독도' }, difficulty: 0.3,
              levels: {
                easy: { prompt: '제주도에서 독도는 어느 쪽인지 골라요(보기 2개).', toolOptions: { readOnly: true, ask: { q: '제주도에서 본 독도는?', choices: ['북동쪽', '남서쪽'] } }, target: { pick: 0 } },
                challenge: { prompt: '제주도에서 독도 방위를 고르고, 서울에서 본 독도도 골라요.', toolOptions: { places: [P.jeju, P.dokdo, P.seoul], ask: { q: '서울에서 독도는?', choices: ['서쪽', '동쪽', '남쪽'] } }, target: { from: '제주도', to: '독도', pick: 1 } },
              } },
          ],
        },
        worksheet: { items: [{ type: 'figure', wide: true, prompt: '울릉도에서 독도로 화살표를 그리고 방위를 써요.', tool: 'map', figures: [{ options: KORW([PW.ulleung, PW.dokdo, PW.seoul]), caption: '우리나라 칸 지도' }], answer: '남동' }] },
        notes: '칸 지도는 위치 관계만 살린 줄인 그림이다. 실제 지도(사회과 부도)에서도 울릉도의 남동쪽에 독도가 있는지 함께 확인한다.',
      }),
      C({
        id: 'dokdo.e34.g3-dir.activity.words', type: 'activity', title: '8방위 낱말 짝 짓기',
        method: '8방위 낱말 짝 짓기', tool: 'wordcards', minutes: 13,
        levels: { easy: '방위 낱말 카드 4장을 뜻 칸에 잇고, 놓으면 바로 맞는지 알려 준다.', base: '방위 낱말 카드 6장을 뜻 칸에 다 이은 뒤 확인한다.', challenge: '카드 8장과 남는 카드 한 장 가운데 알맞은 것을 가려 잇는다.' },
        activity: {
          title: '8방위 낱말 짝 짓기', tool: 'wordcards',
          teacher: '"남동은 남쪽과 동쪽 사이예요." 두 팔을 남쪽과 동쪽으로 벌린 뒤 그 가운데를 가리키게 한다. \'동남\'이라고 쓰는 학생에게는 방위표에서는 남·북을 앞에 쓰는 약속이 있다고 알려 준다. 반대쪽 방위는 방위표 가운데를 지나 맞은편을 손가락으로 따라가게 한다.',
          task: '방위 낱말 카드를 뜻 칸에 잇고, 독도의 자리를 바르게 말한 카드를 골라요.', levels: CARD_LV,
          items: [
            MATCH('방위 낱말을 뜻 칸에 이어요.', {}, DIR_ROWS, 4, 6, '가운데', 0.15),
            MATCH('반대쪽 방위를 이어요.', {}, OPP_ROWS, 4, 6, '위쪽', 0.25),
            PICK('독도의 자리를 바르게 말한 카드를 골라요.', { basket: '독도의 자리' },
              [{ id: 'se', text: '울릉도의 남동쪽', ok: true }, { id: 'east', text: '서울의 동쪽', ok: true }, { id: 'w', text: '울릉도의 서쪽' }, { id: 'jeju', text: '제주도의 남쪽' },
                { id: 'sea', text: '동해에 있어요', ok: true }, { id: 'nw', text: '울릉도의 북서쪽' }],
              ['se', 'east', 'w', 'jeju'], [{ id: 'right', text: '울릉도의 오른쪽' }, { id: 'jne', text: '제주도의 북동쪽', ok: true }], 0.25,
              { conclude: '독도는 울릉도의 남동쪽, 서울의 동쪽 바다인 동해에 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '두 방위 사이의 이름을 써요.', columns: ['사이', '방위'], cells: [['남쪽과 동쪽', ''], ['북쪽과 서쪽', ''], ['북쪽과 동쪽', '']], answer: '남동, 북서, 북동' }] },
        notes: '"울릉도의 오른쪽"은 지도를 돌리면 달라지는 말이라 도전 단계의 함정 카드로 두었다. 방위는 지도를 돌려도 바뀌지 않는다는 것을 짚는다.',
      }),
      C({
        id: 'dokdo.e34.g3-dir.activity.pin', type: 'activity', title: '설명대로 핀 꽂기',
        method: '설명대로 핀 꽂기', tool: 'map', minutes: 14,
        levels: { easy: '핀을 꽂으면 그 칸의 이름이 바로 보여 칸 수를 맞게 셌는지 안다.', base: '설명(기준·방위·칸 수)만 읽고 핀을 꽂는다.', challenge: '설명 두 개를 이어서 따라가 마지막 자리에 핀을 꽂는다.' },
        activity: {
          title: '설명대로 핀 꽂기', tool: 'map',
          teacher: '"기준이 되는 곳을 먼저 찾고, 방위대로 칸을 세요." 출발 칸에 손가락을 두고 한 칸씩 옮기며 소리 내어 세게 한다. 출발 칸까지 세어 한 칸 모자라게 가는 학생에게는 "출발한 칸은 세지 않아요. 옮긴 칸만 세요"라고 짚는다. 도전 단계에서는 첫 설명이 끝난 칸이 두 번째 설명의 기준이 된다는 것을 먼저 함께 짚는다.',
          task: '설명 글의 기준·방위·칸 수를 차례로 따라가 알맞은 칸에 핀을 꽂아요.', levels: MAP_LV,
          items: [
            { prompt: '울릉도에서 남동쪽으로 1칸 가요. 핀을 꽂아요.', toolOptions: KOR([P.ulleung, P.dokdo, P.jeju, P.baekdu]), target: { from: '울릉도', dir: '남동', steps: 1 }, difficulty: 0.2,
              levels: { challenge: { prompt: '울릉도에서 남동쪽 1칸, 거기서 서쪽 3칸 가요.', target: { at: [2, 5] } } } },
            { prompt: '주민 숙소에서 동쪽으로 3칸 가요. 핀을 꽂아요.', toolOptions: DK([F.house, F.port, F.light, F.guard]), target: { from: '주민 숙소', dir: '동', steps: 3 }, difficulty: 0.25,
              levels: { challenge: { prompt: '주민 숙소에서 동쪽 3칸, 거기서 북쪽 1칸 가요.', target: { at: [4, 1] } } } },
            { prompt: '독도 등대에서 서쪽으로 1칸 가요. 핀을 꽂아요.', toolOptions: DK([F.house, F.port, F.light, F.guard]), target: { from: '독도 등대', dir: '서', steps: 1 }, difficulty: 0.25,
              levels: { challenge: { prompt: '독도 등대에서 서쪽 1칸, 거기서 남쪽 1칸 가요.', target: { at: [3, 2] } } },
              conclude: '기준을 먼저 찾고, 방위를 따라 옮긴 칸만 세면 자리를 찾을 수 있어요.' },
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸을 채워요.', text: '독도는 울릉도에서 ___쪽으로 1칸 간 곳에 있어요.', answer: '남동' }] },
      }),
      C({
        id: 'dokdo.e34.g3-dir.activity.fix', type: 'activity', title: '틀린 방위 설명 고치기',
        method: '틀린 방위 설명 고치기', tool: 'sortboard', minutes: 13,
        levels: { easy: '설명 카드 2장을 맞아요·고쳐요로 나누고, 틀린 바구니에 넣으면 바로 알려 준다.', base: '설명 카드 4장을 나눈 뒤 확인하고, 고칠 방위 낱말을 고른다.', challenge: '설명 카드 6장을 나누고, 고쳐요 카드를 활동지에 바르게 고쳐 쓴다.' },
        activity: {
          title: '틀린 방위 설명 고치기', tool: 'sortboard',
          teacher: '"이 설명대로 가면 정말 그 섬에 닿을까요?" 카드마다 지도에서 출발 섬에 손가락을 두고 확인하게 한다. "울릉도의 북서쪽"을 맞아요에 넣는 학생에게는 "출발이 울릉도예요, 독도예요?"라고 묻는다. 고쳐요 카드는 어느 낱말을 바꾸면 맞는 설명이 되는지 짝과 말하게 한다.',
          task: '방위 설명 카드를 맞아요·고쳐요 바구니에 나누고, 고칠 낱말을 골라요.', levels: BOARD_LV,
          items: [
            SORT('울릉도와 독도의 방위 설명을 나누어요.', {}, ['맞아요', '고쳐요'],
              [['독도는 울릉도의 남동쪽', '울릉도는 독도의 북서쪽'], ['독도는 울릉도의 북서쪽', '울릉도는 독도의 남동쪽']], 1,
              [['독도는 서울의 동쪽'], ['독도는 서울의 서쪽']], 0.2),
            SORT('독도 확대 지도의 방위 설명을 나누어요.', {}, ['맞아요', '고쳐요'],
              [['동도는 서도의 동쪽', '서도는 동도의 서쪽'], ['동도는 서도의 서쪽', '서도는 동도의 동쪽']], 1,
              [['선착장은 동도에 있어요'], ['등대는 서도에 있어요']], 0.25),
            SORT('"독도는 울릉도의 북서쪽"을 고칠 낱말을 나누어요.', {}, ['바꿀 낱말', '그대로 둘 낱말'],
              [['북서쪽'], ['독도는', '울릉도의']], [1, 1], [[], ['동해에']], 0.25,
              { conclude: '출발한 곳을 먼저 정하면 방위 설명이 맞는지 알 수 있어요. 북서쪽은 남동쪽으로 고쳐요.' }),
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '틀린 설명을 바르게 고쳐 써요.', text: '독도는 울릉도의 북서쪽 → 독도는 울릉도의 ___쪽', answer: '남동' }] },
      }),
      C({
        id: 'dokdo.e34.g3-dir.wrap.tell', type: 'wrap', title: '짝에게 방위 문제 내기',
        method: '짝에게 방위 문제 내기', tool: 'timer', minutes: 7,
        levels: { easy: '짝에게 방위 문제 1개를 내고 답한 뒤 점검 칸 2개에 표시한다.', base: '문제 2개를 주고받고 점검 칸 3개에 표시한다.', challenge: '문제 3개를 주고받고 점검 칸 4개에 표시한다.' },
        wrap: {
          teacher: '"지도에서 두 곳을 고르고 \'○○에서 △△는 어느 쪽?\'으로 짝에게 물어요." 문제 틀을 칠판에 쓴다. 답을 "오른쪽"으로 하는 짝에게는 방위표 낱말로 다시 말하게 한다. 출구 2번에서 \'북서\'를 고른 학생에게는 출발 섬이 울릉도인지 다시 보게 한다.',
          exitTicket: [
            SELF('방위 문제 점검', ['짝에게 문제 1개를 냈어요', '짝의 문제에 방위로 답했어요', '문제를 2개 주고받았어요', '문제를 3개 주고받았어요']),
            { type: 'choice', prompt: '울릉도에서 독도로 가는 배는 어느 방위로 가나요?', options: ['남동쪽', '북서쪽', '남서쪽'], answer: 0, difficulty: 0.15, explain: '독도는 울릉도의 남동쪽에 있어요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '짝과 방위 문제',
          items: [
            { type: 'table', prompt: '짝과 주고받은 방위 문제를 써요.', columns: ['출발', '도착', '방위'], cells: [['울릉도', '독도', ''], ['', '', '']], answer: '남동, (짝과 정한 문제)' },
            { type: 'choice', prompt: '독도에서 울릉도는 어느 쪽인가요?', options: ['북서쪽', '남동쪽', '동쪽'], answer: '북서쪽' },
          ],
          easy: { note: '방위표를 보며 써요.', items: [{ type: 'choice', prompt: '울릉도에서 독도는 어느 쪽인가요?', options: ['남동쪽', '북서쪽'], answer: '남동쪽' }] },
        },
      }),
      C({
        id: 'dokdo.e34.g3-dir.wrap.sum', type: 'wrap', title: '오늘 배운 방위 한 줄 고르기',
        method: '오늘 배운 방위 한 줄 고르기', tool: 'wordcards', minutes: 7,
        levels: { easy: '빈칸 하나에 보기 2개 가운데 알맞은 방위를 넣는다.', base: '빈칸 하나에 보기 4개 가운데 알맞은 방위를 넣는다.', challenge: '울릉도 기준과 서울 기준 두 빈칸을 모두 채운다.' },
        wrap: {
          teacher: '"오늘 배운 것을 한 줄로 말하면 무엇일까요?" 빈칸 문장을 함께 소리 내어 읽는다. \'오른쪽\'을 넣고 싶어 하는 학생에게는 "지도를 돌려도 바뀌지 않는 말은 무엇이었지요?"라고 묻는다. 도전 단계는 기준이 서울로 바뀌면 방위가 달라진다는 것을 짚는다.',
          exitTicket: [
            EX('wordcards', FILLN('빈칸에 알맞은 방위 카드를 넣어요.', null, [['독도는 울릉도의 ___쪽', '남동'], ['독도는 서울의 ___쪽', '동']], ['북서', '오른', '남서'], 1, 1, 0.15, {}, [1, 3])),
            { type: 'choice', prompt: '방위를 말할 때 바른 것은?', options: ['방위표의 낱말로 말해요', '오른쪽·왼쪽으로 말해요', '느낌으로 말해요'], answer: 0, difficulty: 0.15, explain: '지도를 돌려도 바뀌지 않게 방위표 낱말로 말해요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '독도는 울릉도의 남동쪽',
          items: [
            { type: 'blank', prompt: '빈칸을 채워요.', text: '독도는 울릉도의 ___쪽, 울릉도는 독도의 ___쪽에 있어요.', answer: '남동, 북서' },
            { type: 'short', prompt: '우리 학교에서 남동쪽에 있는 곳을 하나 찾아 써요.' },
          ],
          easy: { note: '방위표를 보며 써요.', items: [{ type: 'choice', prompt: '독도는 울릉도의 어느 쪽인가요?', options: ['남동쪽', '북서쪽'], answer: '남동쪽' }] },
        },
      }),
    );
  }

  // 독도 둘레 어림 지도 9×7 — 한 칸 약 20km 약속(어림). 울릉도→독도 4칸(약 80km), 독도→일본 오키섬 8칸(약 160km)
  // 외교부 자료의 실제 거리는 87.4km·157.5km — 칸 지도는 어림이라 조금 다르다는 것을 화면 글에 밝힌다.
  const EAST_LAND = [[0, 0], [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6]];
  const EAST_SEA = [];
  for (let r = 0; r < 7; r++) for (let c = 1; c < 9; c++) EAST_SEA.push([c, r]);
  const EP = { ulleung: { name: '울릉도', icon: 'island', at: [1, 0] }, dokdo: { name: '독도', icon: 'island', at: [3, 2] }, oki: { name: '일본 오키섬', icon: 'island', at: [7, 6] } };
  const EAST = (more) => Object.assign({ grid: [9, 7], title: '독도 둘레 어림 지도', regions: [{ name: '우리나라 땅', cells: EAST_LAND, color: 'mint' }], regionNames: false, sea: EAST_SEA, places: [EP.ulleung, EP.dokdo, EP.oki] }, more || {});
  const DIST_REAL = [['울릉도에서', 87.4], ['오키섬에서', 157.5]];
  const DIST_ROUND = [['울릉도에서', 90], ['오키섬에서', 160]];
  const DIST_READ = { type: 'bar', mode: 'read', title: '독도까지 거리(외교부 자료)', unit: 'km', xLabel: '출발하는 곳', yLabel: '거리', data: DIST_REAL, max: 180, scale: 20, showValues: true };

  // ======================================================================================================
  // 3학년 · 울릉도와 오키섬, 어디가 가까울까 (초 내용체계: 지리적 특성 — 거리는 외교부 자료 87.4km·157.5km)
  // ======================================================================================================
  {
    const C = T('g3-dist', 3);
    M.push(
      C({
        id: 'dokdo.e34.g3-dist.intro.guess', type: 'intro', title: '두 섬 중 가까운 쪽 어림하기',
        method: '두 섬 중 가까운 쪽 어림하기', tool: 'map', minutes: 6,
        levels: { easy: '보기 2개(울릉도·일본 오키섬) 가운데 가까운 섬을 손들어 고른다.', base: '가까운 섬을 고른 뒤 "칸이 적어서" 같은 까닭을 함께 고른다.', challenge: '가까운 섬을 고른 까닭을 짝에게 한 문장으로 말한다.' },
        intro: {
          teacher: '"독도와 더 가까운 섬은 울릉도일까요, 일본 오키섬일까요? 먼저 눈으로 어림해 봐요." 손을 들게 한 뒤 시연 단추로 울릉도가 골라지는 모습을 보인다(기다릴 반응: "울릉도요", "칸이 적어요"). "섬이 크게 그려져 있어서 가까워요"라는 대답에는 "섬의 크기와 떨어진 거리는 다른 것이에요. 사이에 칸이 몇 개인지 볼까요?"라고 되묻는다. 오늘은 외교부 자료의 숫자로 어림이 맞았는지 확인한다고 밝힌다.',
          student: '지도를 보고 독도와 더 가까운 섬을 먼저 어림해 골라요. 왜 그렇게 생각했는지 말해 보아요.',
          demo: { tool: 'map', options: EAST({ readOnly: true, ask: { q: '독도와 더 가까운 섬은?', choices: ['울릉도', '일본 오키섬'] } }), sequence: [{ pick: 0 }] },
          art: { draw: 'a paper sea map with a green island at the upper left, a small rocky islet in the middle and another island far to the lower right, a paper child holding a magnifier', banner: '어느 섬이 가까울까?', extra: [{ motif: 'wave', y: 240 }] },
        },
        notes: CALM,
      }),
      C({
        id: 'dokdo.e34.g3-dist.intro.ruler', type: 'intro', title: '종이 자로 길이 재기 연습',
        method: '자로 지도 거리 재기 연습', tool: 'ruler', minutes: 6,
        levels: { easy: '띠의 왼쪽 끝을 0에 맞추고 cm 눈금만 읽는다.', base: '0에 맞추었는지 확인하며 눈금을 읽고, 1cm가 작은 눈금 10칸(mm)인 것을 짚는다.', challenge: '같은 띠를 한 번 더 재어 두 번 잰 값이 같은지 견준다.' },
        intro: {
          teacher: '"지도 위 두 섬 사이에 종이 띠를 놓았어요. 띠의 길이를 어떻게 재면 될까요?" 대답을 듣고(기다릴 반응: "자를 대요") 시연 단추로 띠의 왼쪽 끝이 0에 맞춰지고 4cm를 읽는 모습을 보인다. 1에 맞추고 끝 눈금을 그대로 읽는 학생에게는 "시작을 0에 맞추었나요?"라고 묻는다. 지도에서 잰 길이가 길수록 실제로도 더 멀다는 것을 다음 활동에서 쓴다고 알려 준다.',
          student: '종이 띠의 왼쪽 끝을 자의 0에 맞추고, 오른쪽 끝의 눈금을 읽어 몇 cm인지 말해 보아요.',
          demo: { tool: 'ruler', options: { item: 'ribbon', len: 4 }, sequence: [{ length: 4, zero: true }] },
          art: { draw: 'a paper ruler laid across a paper sea map between a green island and a small rocky islet, a paper ribbon stretched along the ruler', banner: '0에 맞춰 재요', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
      }),
      C({
        id: 'dokdo.e34.g3-dist.activity.bar', type: 'activity', title: '거리 막대그래프 완성하기',
        method: '거리 막대그래프 완성하기', tool: 'chart', minutes: 14,
        levels: { easy: '눈금 한 칸이 20km인 그래프에 어림한 거리 막대를 그리고, 막대 끝에 지금 값이 보인다.', base: '눈금 한 칸이 10km인 그래프에 막대를 그리고, 더 짧은 막대를 고른다.', challenge: '막대를 그리고 두 거리의 차이가 약 몇 km인지 읽는다.' },
        activity: {
          title: '거리 막대그래프 완성하기', tool: 'chart',
          teacher: '"외교부 자료의 87.4km와 157.5km를 10km 단위로 어림하면 얼마일까요?" 표의 어림값을 함께 읽고 막대를 그린다. 막대가 더 긴 쪽이 가깝다고 말하는 학생에게는 "막대는 떨어진 거리예요. 막대가 길면 더 먼 거예요"라고 짚는다. 어림한 값과 자료의 정확한 값은 다르다는 것을 꼭 밝히고, 글로 쓸 때는 자료의 숫자(87.4km·157.5km)를 쓰게 한다.',
          task: '어림한 거리 표를 보고 막대그래프를 완성하고, 더 가까운 곳을 그래프로 읽어요.', levels: PLAIN_LV,
          items: [
            { prompt: '어림한 거리 표를 보고 막대그래프를 그려요.', toolOptions: { type: 'bar', mode: 'build', title: '독도까지 거리(10km 단위 어림)', unit: 'km', xLabel: '출발하는 곳', yLabel: '거리', data: DIST_ROUND, max: 180, scale: 10, step: 10, showTable: true }, target: { build: true }, difficulty: 0.2,
              levels: { easy: { prompt: '어림한 거리로 막대를 그려요(한 칸 20km).', toolOptions: { scale: 20, step: 10, showValues: true } } } },
            { prompt: '외교부 자료 그래프에서 독도와 더 가까운 곳은?', toolOptions: Object.assign({}, DIST_READ, { question: '독도와 더 가까운 곳은?', choices: ['울릉도', '일본 오키섬'] }), target: { pick: 0 }, difficulty: 0.15,
              levels: { challenge: { prompt: '그래프에서 두 거리의 차이를 어림해 골라요.', toolOptions: { question: '두 거리는 약 몇 km 차이?', choices: ['약 70km', '약 160km', '약 10km'] }, target: { pick: 0 } } } },
            { prompt: '막대가 더 긴 쪽은 독도에서 어떤가요?', toolOptions: Object.assign({}, DIST_READ, { question: '막대가 긴 쪽은?', choices: ['더 멀어요', '더 가까워요', '거리가 같아요'] }), target: { pick: 0 }, difficulty: 0.2,
              conclude: '막대는 떨어진 거리예요. 울릉도 막대(87.4km)가 더 짧으니 독도는 울릉도에 더 가까워요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '외교부 자료의 거리를 써요.', columns: ['출발', '독도까지 거리'], cells: [['울릉도', ''], ['일본 오키섬', '']], answer: '87.4km, 157.5km' }] },
        notes: '막대그래프의 90km·160km는 학생이 그리기 쉽게 10km 단위로 어림한 값이다. 정확한 거리(외교부 자료)는 87.4km·157.5km이고, 활동지와 글에는 정확한 값을 쓴다.',
      }),
      C({
        id: 'dokdo.e34.g3-dist.activity.scale', type: 'activity', title: '어림 지도로 거리 구하기',
        method: '축척으로 거리 구하기', tool: 'map', minutes: 13,
        levels: { easy: '길 위 칸마다 번호가 보여, 칸 수를 세어 20km씩 더한다.', base: '번호 없이 칸 수를 세고 "한 칸 약 20km"로 거리를 구한다.', challenge: '두 거리를 구한 뒤 어림한 두 거리의 차이를 고른다.' },
        activity: {
          title: '어림 지도로 거리 구하기', tool: 'map',
          teacher: '"이 지도에서는 한 칸을 약 20km로 약속했어요. 울릉도에서 독도까지 몇 칸인가요?" 출발 칸에 손가락을 두고 건너간 칸만 세게 한다. 출발 칸까지 세어 한 칸 많게 구하는 학생에게는 "건너간 칸만 세어요"라고 짚는다. 구한 값(약 80km·약 160km)이 자료의 거리(87.4km·157.5km)와 조금 다른 까닭은 칸 지도가 어림이기 때문이라고 말해 준다.',
          task: '어림 지도에서 칸 수를 세고, 한 칸 약 20km로 독도까지의 거리를 구해요.', levels: { easy: { showCells: true }, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            { prompt: '울릉도에서 독도까지 어림한 거리를 넣어요.', toolOptions: EAST({ mode: 'scale', scale: { cell: 20, unit: 'km' }, distStep: 20 }), target: { from: '울릉도', to: '독도' }, difficulty: 0.2 },
            { prompt: '독도에서 일본 오키섬까지 어림한 거리를 넣어요.', toolOptions: EAST({ mode: 'scale', scale: { cell: 20, unit: 'km' }, distStep: 20 }), target: { from: '독도', to: '일본 오키섬' }, difficulty: 0.25 },
            { prompt: '어림한 두 거리를 견주어 골라요.', toolOptions: EAST({ mode: 'scale', scale: { cell: 20, unit: 'km' }, readOnly: true, ask: { q: '독도와 더 가까운 섬은?', choices: ['울릉도', '일본 오키섬'] } }), target: { pick: 0 }, difficulty: 0.2,
              levels: { challenge: { prompt: '어림한 두 거리의 차이를 골라요.', toolOptions: { ask: { q: '약 80km와 약 160km의 차이는?', choices: ['약 80km', '약 240km', '약 20km'] } }, target: { pick: 0 } } },
              conclude: '칸을 세어 어림해도, 자료의 숫자로 보아도 독도는 울릉도에 더 가까워요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '어림 지도에서 구한 거리를 써요(한 칸 약 20km).', columns: ['길', '칸 수', '어림한 거리'], cells: [['울릉도→독도', '', ''], ['독도→오키섬', '', '']], answer: '4칸 약 80km, 8칸 약 160km' }] },
        notes: '칸 지도의 "한 칸 약 20km"는 이 활동을 위한 어림 약속이다. 3학년 수학의 곱셈(한 자리 수 곱하기)과 이어 쓸 수 있다.',
      }),
      C({
        id: 'dokdo.e34.g3-dist.activity.sentence', type: 'activity', title: '견주는 문장 완성하기',
        method: '견주는 문장 완성하기', tool: 'wordcards', minutes: 14,
        levels: { easy: '빈칸 2개에 카드 2장(함정 없음)을 넣는다.', base: '빈칸 2개에 카드 4장(함정 2장) 가운데 알맞은 것을 넣는다.', challenge: '빈칸 3개 — 자료를 낸 곳(출처) 칸까지 채운다.' },
        activity: {
          title: '견주는 문장 완성하기', tool: 'wordcards',
          teacher: '"두 곳을 견주는 문장은 \'○○보다 △△에 더 가까워요\'처럼 써요." 칠판에 틀을 쓰고 함께 읽는다. 두 빈칸을 바꾸어 넣는 학생에게는 "더 가까운 곳이 어느 칸에 들어가야 할까요?"라고 묻는다. 도전 단계는 문장 끝에 자료를 낸 곳을 넣어야 믿을 수 있는 글이 된다는 것을 짚는다.',
          task: '빈칸에 알맞은 카드를 넣어 두 거리를 견주는 문장을 완성해요.', levels: CARD_LV,
          items: [
            FILLN('독도가 어디에 더 가까운지 문장을 완성해요.', null, [['독도는 ___보다', '오키섬'], ['___에 더 가까워요', '울릉도'], ['자료를 낸 곳: ___', '외교부']], ['제주도', '부산', '친구 짐작'], 2, 2, 0.2, {}, [0, 2]),
            FILLN('거리 숫자를 넣어 문장을 완성해요.', null, [['울릉도에서 독도까지 ___', '87.4km'], ['오키섬에서 독도까지 ___', '157.5km'], ['맑은 날 ___에서 독도가 보여요', '울릉도']], ['874km', '15.7km', '서울'], 2, 2, 0.25, {}, [0, 2]),
            FILLN('거리를 견주는 말을 넣어요.', null, [['거리는 수가 ___ 가까워요', '작을수록'], ['막대가 짧으면 ___', '가까워요'], ['숫자에는 ___를 붙여요', '단위 km']], ['클수록', '멀어요', '느낌'], 2, 2, 0.25, { conclude: '독도는 일본 오키섬(157.5km)보다 울릉도(87.4km)에 더 가까워요(외교부 자료).' }, [0, 2]),
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸을 채워 문장을 완성해요.', text: '독도는 ___보다 ___에 더 가까워요.', answer: '오키섬, 울릉도' }] },
        notes: FACT,
      }),
      C({
        id: 'dokdo.e34.g3-dist.activity.pair', type: 'activity', title: '짝과 그래프 보고 설명하기',
        method: '짝과 그래프 보고 설명하기', tool: 'timer', minutes: 13,
        levels: { easy: '짝에게 그래프의 짧은 막대를 가리키며 "여기가 가까워요"라고 말한다.', base: '그래프를 가리키며 한 문장("독도는 ○○보다 △△에 더 가까워요")으로 말한다.', challenge: '한 문장에 자료의 숫자를 넣은 두 번째 문장까지 말한다.' },
        activity: {
          title: '짝과 그래프 보고 설명하기', tool: 'timer',
          teacher: '"짝이 말할 때는 그래프를 함께 보고 끝까지 들어요." 타이머로 말하기 30초·바꾸기 10초를 2번 맞추고 시작한다. 그래프를 보지 않고 말하는 학생에게는 손가락으로 막대를 짚게 한다. 짝이 "오키섬이 가까워요"라고 말하면 "막대가 짧은 쪽은 어디였나요?"라고 물어 스스로 고치게 한다.',
          task: '짝과 번갈아 그래프를 가리키며 어느 곳이 가까운지 설명하고, 한 일에 표시해요.', levels: PLAIN_LV,
          items: [
            { prompt: '말하기 30초, 바꾸기 10초, 2번으로 맞춰요.', toolOptions: { title: '짝 설명 시간', labels: ['말하기', '바꾸기'], plan: { work: 20, rest: 5, rounds: 1 }, workStep: 10, restStep: 5 }, target: { plan: { work: 30, rest: 10, rounds: 2 } }, difficulty: 0.15 },
            { prompt: '그래프로 설명하는 차례를 놓아요.', toolOptions: { title: '설명하는 차례', cards: ['한 문장으로 말해요', '짧은 막대를 찾아요', '짝이 맞는지 말해요', '그래프 제목을 읽어요'] }, target: { order: ['그래프 제목을 읽어요', '짧은 막대를 찾아요', '한 문장으로 말해요', '짝이 맞는지 말해요'] }, difficulty: 0.2 },
            { prompt: '짝과 설명하며 한 일에 표시해요.', toolOptions: { title: '짝 설명 점검' }, target: { selfCheck: ['그래프를 가리켰어요', '짝의 말을 끝까지 들었어요', '한 문장으로 말했어요'] }, difficulty: 0.1,
              levels: { easy: { prompt: '짝과 설명하며 한 일에 표시해요(2칸).', target: { selfCheck: ['그래프를 가리켰어요', '짝의 말을 끝까지 들었어요'] } }, challenge: { prompt: '짝과 설명하며 한 일에 표시해요(4칸).', target: { selfCheck: ['그래프를 가리켰어요', '짝의 말을 끝까지 들었어요', '한 문장으로 말했어요', '숫자를 넣어 말했어요'] } } },
              conclude: '그래프를 가리키며 자료의 숫자로 말하면 누구나 확인할 수 있어요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '짝에게 말한 문장을 그대로 써요.' }] },
      }),
      C({
        id: 'dokdo.e34.g3-dist.wrap.source', type: 'wrap', title: '자료를 만든 곳 고르기',
        method: '자료를 만든 곳 고르기', tool: 'sortboard', minutes: 7,
        levels: { easy: '카드 2장을 믿을 만한 곳·다시 확인할 곳으로 나눈다.', base: '카드 4장을 나눈다.', challenge: '카드 6장을 나누고, 다시 확인할 곳을 고른 까닭을 짝에게 말한다(교사 진행).' },
        wrap: {
          teacher: '"오늘 쓴 거리 숫자는 어디에서 왔나요?" 외교부 독도 누리집 화면을 잠깐 보여 준다. "친구가 그렇대요"를 믿을 만한 곳에 넣는 학생에게는 "그 친구는 어디에서 보았을까요? 처음 낸 곳을 찾아봐요"라고 묻는다. 다시 확인할 곳이라고 틀린 것은 아니고, 처음 낸 곳을 찾아 확인하면 된다는 것을 짚는다.',
          exitTicket: [
            EX('sortboard', SORT('거리 자료를 낸 곳을 나누어요.', {}, ['믿을 만한 곳', '다시 확인할 곳'],
              [['외교부 독도 누리집', '동북아역사재단 자료'], ['이름 없는 댓글', '친구의 짐작']], 1,
              [['사회과 부도'], ['출처 없는 사진 글']], 0.2)),
            { type: 'choice', prompt: '독도까지 거리를 글에 쓸 때 바른 것은?', options: ['자료를 낸 곳과 숫자를 써요', '짐작한 숫자를 써요', '숫자 없이 써요'], answer: 0, difficulty: 0.15, explain: '자료를 낸 곳을 밝히면 누구나 확인할 수 있어요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '거리 자료는 어디에서?',
          items: [
            { type: 'choice', prompt: '"울릉도에서 87.4km"를 확인할 수 있는 곳은?', options: ['외교부 독도 누리집', '이름 없는 댓글', '친구의 짐작'], answer: '외교부 독도 누리집' },
            { type: 'short', prompt: '자료를 낸 곳을 밝혀야 하는 까닭을 써요.' },
          ],
          easy: { note: '오늘 본 누리집을 떠올려요.', items: [{ type: 'choice', prompt: '믿을 만한 자료를 낸 곳은?', options: ['외교부', '이름 없는 댓글'], answer: '외교부' }] },
        },
      }),
      C({
        id: 'dokdo.e34.g3-dist.wrap.sum', type: 'wrap', title: '그래프 다시 보고 한 문장 고르기',
        method: '그래프 다시 보고 한 문장 고르기', tool: 'chart', minutes: 7,
        levels: { easy: '그래프를 보고 맞는 설명을 보기 2개 가운데 고른다.', base: '맞는 설명을 보기 3개 가운데 고른다.', challenge: '보기 3개 가운데 틀린 설명을 골라 짝과 바르게 고쳐 말한다.' },
        wrap: {
          teacher: '"그래프를 다시 보고, 오늘 알게 된 것을 한 문장으로 골라요." 고른 문장을 소리 내어 읽게 한다. "오키섬이 더 가까워요"를 고른 학생에게는 막대의 길이를 손가락으로 견주게 한다. 도전 단계에서 틀린 설명을 고른 뒤에는 어느 낱말을 바꾸면 맞는지 말하게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'chart', prompt: '그래프를 보고 맞는 설명을 골라요.', options: Object.assign({}, DIST_READ, { question: '맞는 설명은?', choices: ['독도는 울릉도에 더 가까워요', '독도는 오키섬에 더 가까워요', '두 거리가 같아요'] }), target: { pick: 0 }, difficulty: 0.15,
              levels: {
                easy: { toolOptions: { choices: ['독도는 울릉도에 더 가까워요', '독도는 오키섬에 더 가까워요'] }, target: { pick: 0 } },
                challenge: { prompt: '그래프를 보고 틀린 설명을 골라요.', toolOptions: { question: '틀린 설명은?', choices: ['울릉도에서 87.4km예요', '오키섬 막대가 더 짧아요', '오키섬에서 157.5km예요'] }, target: { pick: 1 } },
              } },
            { type: 'choice', prompt: '울릉도에서 독도까지 외교부 자료의 거리는?', options: ['87.4km', '874km', '8.74km'], answer: 0, difficulty: 0.15, explain: '외교부 자료에 따르면 울릉도에서 87.4km예요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '울릉도에서 87.4km',
          items: [
            { type: 'blank', prompt: '빈칸을 채워요.', text: '독도는 울릉도에서 ___km, 일본 오키섬에서 ___km 떨어져 있어요.', answer: '87.4, 157.5' },
            { type: 'short', prompt: '그래프를 보고 알게 된 것을 한 문장으로 써요.' },
          ],
          easy: { note: '그래프의 짧은 막대를 찾아요.', items: [{ type: 'choice', prompt: '독도와 더 가까운 곳은?', options: ['울릉도', '일본 오키섬'], answer: '울릉도' }] },
        },
      }),
    );
  }

  // ======================================================================================================
  // 3학년 · 동도와 서도, 범례로 읽기 (초 내용체계: 지리적 특성·인문환경 — 시설은 외교부 독도 누리집 서술)
  // ======================================================================================================
  {
    const C = T('g3-isle', 3);
    const ISLE = [['더 높고 뾰족해요', '주민 숙소가 있어요', '독도안용복길'], ['등대가 있어요', '독도경비대가 있어요', '선착장이 있어요']];
    const DK_MEAN = { lighthouse: '독도 등대', police: '독도경비대', port: '선착장', house: '주민 숙소' };
    const KOR_MEAN = { island: '섬', capital: '수도(서울)', port: '항구', mountain: '산' };
    M.push(
      C({
        id: 'dokdo.e34.g3-isle.intro.photo', type: 'intro', title: '두 섬 그림 다른 점 찾기',
        method: '두 섬 그림 다른 점 찾기', tool: 'sortboard', minutes: 6,
        levels: { easy: '카드 2장(높고 뾰족해요·등대)만 함께 바구니에 넣어 본다.', base: '카드 4장을 동도·서도 바구니에 나누는 모습을 본다.', challenge: '카드 6장을 보고, 나누기 전에 짝과 먼저 어느 섬인지 말한다.' },
        intro: {
          teacher: '"독도는 섬 하나일까요?" 대답을 듣고(기다릴 반응: "하나요", "두 개요") 독도는 동도와 서도 두 큰 섬과 둘레의 바위섬으로 되어 있다고 알려 준다. 시연 단추로 카드가 동도·서도 바구니에 나뉘는 모습을 보인다. "두 섬은 똑같아요"라는 대답에는 "서도가 더 높고 뾰족해요. 동도에는 등대와 독도경비대가 있어요"라고 그림을 가리키며 말해 준다.',
          student: '동도와 서도 그림을 보고 다른 점을 찾아요. 더 높은 섬은 어느 쪽인지 짝에게 말해 보아요.',
          demo: { tool: 'sortboard', options: { slots: ['서도', '동도'], cards: mix(ISLE) }, sequence: [{ sort: { 서도: ISLE[0], 동도: ISLE[1] } }] },
          art: { draw: 'two paper islands side by side in a blue paper sea, the western one taller and pointed, the eastern one lower with a small white lighthouse on top', banner: '동도와 서도', extra: [{ motif: 'wave', y: 240 }] },
        },
      }),
      C({
        id: 'dokdo.e34.g3-isle.intro.symbol', type: 'intro', title: '생활 속 기호 맞히기',
        method: '생활 속 기호 맞히기', tool: 'mapcompass', minutes: 6,
        levels: { easy: '범례 빈칸 3곳(병원·학교·우체국)에 기호 스티커가 붙는 모습을 본다.', base: '빈칸 5곳에 스티커가 붙기 전에 학생이 기호 모양으로 뜻을 먼저 맞힌다.', challenge: '빈칸 7곳을 맞히고, 기호가 그 곳의 무엇을 닮았는지 말한다.' },
        intro: {
          teacher: '"우체국 기호는 왜 편지 봉투 모양일까요?" 대답을 듣고(기다릴 반응: "편지를 보내는 곳이라서요") 지도에 쓰는 작은 그림을 기호, 기호의 뜻을 모아 둔 곳을 범례라고 알려 준다. 시연 단추로 범례 빈칸에 스티커가 붙는 모습을 보인다. "기호는 마음대로 그려도 돼요"라는 대답에는 "모두가 같은 뜻으로 읽으려면 약속이 필요해요"라고 짚는다. 오늘은 독도 지도의 기호도 범례로 읽는다고 밝힌다.',
          student: '종이 마을 지도의 기호를 보고 무엇을 닮았는지 말해 보아요. 범례 빈칸에 어떤 기호가 들어갈지 맞혀요.',
          demo: { tool: 'mapcompass', options: { mode: 'legend', blank: ['병원', '학교', '우체국'] }, sequence: [{ legend: { 병원: 'cross', 학교: 'flag', 우체국: 'envelope' } }] },
          art: { draw: 'a small paper village map with tiny symbols on buildings and a paper legend box at the corner with three empty slots', banner: '기호와 범례', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
      }),
      C({
        id: 'dokdo.e34.g3-isle.activity.legend', type: 'activity', title: '독도 지도 범례 채우기',
        method: '독도 지도 범례 채우기', tool: 'map', minutes: 14,
        levels: { easy: '범례 빈칸 2개(등대·주민 숙소)의 뜻을 고른다.', base: '범례 빈칸 4개의 뜻을 고른다.', challenge: '빈칸 4개에 헷갈리는 이름 2개가 더해진 보기 6개 가운데 뜻을 고른다.' },
        activity: {
          title: '독도 지도 범례 채우기', tool: 'map',
          teacher: '"이 기호는 무엇을 닮았나요?" 기호 모양에서 뜻을 짐작하게 한 뒤 범례에 채운다. 경비대 기호(방패 모양)를 집으로 고르는 학생에게는 "지붕이 있나요? 방패는 무엇을 지키는 물건일까요?"라고 묻는다. 셋째 문항은 이름 없이 기호만 보고 섬을 찾게 해 범례가 왜 필요한지 느끼게 한다.',
          task: '독도 확대 지도와 우리나라 칸 지도의 범례 빈칸에 기호의 뜻을 골라 채워요.', levels: PLAIN_LV,
          items: [
            { prompt: '독도 확대 지도의 범례 빈칸을 채워요.', toolOptions: DK([F.light, F.guard, F.port, F.house], { mode: 'legend', meanings: DK_MEAN }), target: { legend: DK_MEAN }, difficulty: 0.2,
              levels: {
                easy: { prompt: '독도 확대 지도의 범례 빈칸 2개를 채워요.', toolOptions: { places: [F.light, F.house], meanings: { lighthouse: '독도 등대', house: '주민 숙소' } }, target: { legend: { lighthouse: '독도 등대', house: '주민 숙소' } } },
                challenge: { prompt: '보기 6개 가운데 골라 범례 빈칸을 채워요.', toolOptions: { extra: ['학교', '공항'] }, target: { legend: DK_MEAN } },
              } },
            { prompt: '우리나라 칸 지도의 범례 빈칸을 채워요.', toolOptions: KOR([P.ulleung, P.seoul, P.busan, P.baekdu], { mode: 'legend', meanings: KOR_MEAN }), target: { legend: KOR_MEAN }, difficulty: 0.2,
              levels: {
                easy: { prompt: '우리나라 칸 지도의 범례 빈칸 2개를 채워요.', toolOptions: { places: [P.ulleung, P.seoul], meanings: { island: '섬', capital: '수도(서울)' } }, target: { legend: { island: '섬', capital: '수도(서울)' } } },
                challenge: { prompt: '보기 6개 가운데 골라 범례 빈칸을 채워요.', toolOptions: { extra: ['등대', '시장'] }, target: { legend: KOR_MEAN } },
              } },
            { prompt: '범례를 보고 독도경비대가 있는 섬에 핀을 꽂아요.', toolOptions: DK([F.light, F.guard, F.port, F.house], { names: false }), target: { region: '동도' }, difficulty: 0.25,
              levels: { challenge: { prompt: '범례를 보고 주민 숙소가 있는 섬에 핀을 꽂아요.', target: { region: '서도' } } },
              conclude: '범례가 있으면 이름이 없어도 기호로 시설을 찾을 수 있어요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '기호의 뜻과 있는 섬을 써요.', columns: ['기호', '뜻', '있는 섬'], cells: [['등대 모양', '', ''], ['방패 모양', '', ''], ['집 모양', '', '']], answer: '독도 등대·동도, 독도경비대·동도, 주민 숙소·서도' }] },
        notes: '칸 지도의 시설 자리는 위치 관계(동도·서도)만 살린 그림이다. 실제 사진이나 외교부 독도 누리집의 지도를 함께 보이면 좋다.',
      }),
      C({
        id: 'dokdo.e34.g3-isle.activity.facility', type: 'activity', title: '섬과 시설 짝 짓기',
        method: '섬과 시설 짝 짓기', tool: 'emotion', minutes: 13,
        levels: { easy: '시설과 하는 일 2짝을 잇고, 놓으면 바로 맞는지 알려 준다.', base: '3짝을 잇고 시설을 동도·서도 칸에 나눈다.', challenge: '4짝과 남는 카드 한 장을 가려 잇는다.' },
        activity: {
          title: '섬과 시설 짝 짓기', tool: 'emotion',
          teacher: '"이 시설은 어느 섬에 있고, 무슨 일을 할까요?" 카드를 이을 때마다 "○○은 △△에 있어서 □□해요"로 말하게 한다. 주민 숙소를 동도에 넣는 학생에게는 확대 지도를 다시 보여 준다. 선착장을 \'배를 만드는 곳\'으로 고르는 학생에게는 "선착장은 배가 와서 닿는 곳이에요"라고 짚는다.',
          task: '독도의 시설과 하는 일을 잇고, 시설을 동도·서도로 나누어요.', levels: CARD_LV,
          items: [
            MATCH('시설과 하는 일을 이어요.', {}, [['독도 등대', '밤바다에 불빛을 비춰요'], ['선착장', '배가 와서 닿아요'], ['주민 숙소', '주민이 지내요'], ['독도경비대', '독도를 지켜요']], 2, 3, '배를 만들어요', 0.2),
            SORT('시설을 있는 섬 칸에 나누어요.', { mode: 'sort' }, [{ id: 'east', label: '동도' }, { id: 'west', label: '서도' }],
              [['독도 등대', '독도경비대'], ['주민 숙소']], [1, 1], [['선착장'], []], 0.2),
            MATCH('섬의 생김새와 이름을 이어요.', {}, [['더 높고 뾰족한 섬', '서도'], ['등대가 있는 섬', '동도']], 1, 2, '울릉도', 0.25,
              { conclude: '동도에는 등대·독도경비대·선착장이, 서도에는 주민 숙소가 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '주민 숙소가 있는 섬은?', options: ['서도', '동도', '울릉도'], answer: '서도' }] },
      }),
      C({
        id: 'dokdo.e34.g3-isle.activity.place', type: 'activity', title: '범례 보고 빈 터에 기호 붙이기',
        method: '범례 보고 빈 터에 기호 붙이기', tool: 'mapcompass', minutes: 14,
        levels: { easy: '빈 터 3곳 가운데 설명한 2곳을 찾아 기호 스티커를 붙인다.', base: '빈 터 4곳 가운데 설명한 3곳에 붙인다.', challenge: '빈 터 5곳 가운데 설명한 4곳에 붙이고, 헷갈리는 스티커 2장이 더 섞인다.' },
        activity: {
          title: '범례 보고 빈 터에 기호 붙이기', tool: 'mapcompass',
          teacher: '"설명에서 \'학교의 북서쪽\'을 먼저 찾고, 범례에서 그 시설의 기호를 찾아요." 학교에 손가락을 두고 방위를 따라가게 한다. 기호를 범례와 다르게 붙이는 학생에게는 "범례와 모양이 같나요?"라고 견주게 한다. 활동을 마치면 "독도 지도에도 이런 약속이 있었지요?"라고 물어 앞 활동과 잇는다.',
          task: '설명한 자리를 빈 터 가운데에서 찾고, 범례의 기호를 붙여요. 설명에 없는 빈 터는 비워 둬요.', levels: PLAIN_LV,
          items: [
            { prompt: '학교의 북서쪽은 병원, 북동쪽은 우체국, 남쪽은 도서관이에요.', toolOptions: { mode: 'place', points: 8, hidden: ['병원', '우체국', '도서관', '기차역'] }, target: { place: { 병원: 'cross', 우체국: 'envelope', 도서관: 'book' } }, difficulty: 0.2,
              levels: {
                easy: { prompt: '학교의 북서쪽은 병원, 북동쪽은 우체국이에요.', toolOptions: { hidden: ['병원', '우체국', '기차역'] }, target: { place: { 병원: 'cross', 우체국: 'envelope' } } },
                challenge: { prompt: '북서쪽 병원, 북동쪽 우체국, 남쪽 도서관, 서쪽 경찰서예요.', toolOptions: { hidden: ['병원', '우체국', '도서관', '경찰서', '기차역'], extra: ['fire', 'tree'] }, target: { place: { 병원: 'cross', 우체국: 'envelope', 도서관: 'book', 경찰서: 'shield' } } },
              } },
            { prompt: '학교의 남서쪽은 소방서, 동쪽은 공원, 남동쪽은 기차역이에요.', toolOptions: { mode: 'place', points: 8, hidden: ['소방서', '공원', '기차역', '병원'] }, target: { place: { 소방서: 'fire', 공원: 'tree', 기차역: 'rail' } }, difficulty: 0.25,
              levels: {
                easy: { prompt: '학교의 남서쪽은 소방서, 동쪽은 공원이에요.', toolOptions: { hidden: ['소방서', '공원', '병원'] }, target: { place: { 소방서: 'fire', 공원: 'tree' } } },
                challenge: { prompt: '남서쪽 소방서, 동쪽 공원, 남동쪽 기차역, 북쪽 시청이에요.', toolOptions: { hidden: ['소방서', '공원', '기차역', '시청', '병원'], extra: ['cross', 'book'] }, target: { place: { 소방서: 'fire', 공원: 'tree', 기차역: 'rail', 시청: 'dcircle' } } },
              } },
            { prompt: '학교의 북쪽은 시청, 서쪽은 경찰서, 남쪽은 도서관이에요.', toolOptions: { mode: 'place', points: 8, hidden: ['시청', '경찰서', '도서관', '공원'] }, target: { place: { 시청: 'dcircle', 경찰서: 'shield', 도서관: 'book' } }, difficulty: 0.25,
              levels: {
                easy: { prompt: '학교의 북쪽은 시청, 서쪽은 경찰서예요.', toolOptions: { hidden: ['시청', '경찰서', '공원'] }, target: { place: { 시청: 'dcircle', 경찰서: 'shield' } } },
                challenge: { prompt: '북쪽 시청, 서쪽 경찰서, 남쪽 도서관, 북서쪽 병원이에요.', toolOptions: { hidden: ['시청', '경찰서', '도서관', '병원', '공원'], extra: ['envelope', 'rail'] }, target: { place: { 시청: 'dcircle', 경찰서: 'shield', 도서관: 'book', 병원: 'cross' } } },
              },
              conclude: '기준과 방위로 자리를 찾고, 범례와 같은 기호를 붙이면 누구나 같은 뜻으로 읽어요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '독도 확대 지도에 기호를 하나 더 넣는다면 무엇을 넣을지, 어떤 모양으로 할지 써요.' }] },
        notes: '종이 마을은 지어낸 곳이다. 기호 약속을 익힌 뒤 독도 확대 지도의 기호와 잇는다.',
      }),
      C({
        id: 'dokdo.e34.g3-isle.activity.mind', type: 'activity', title: '동도·서도 생각그물',
        method: '동도·서도 생각그물', tool: 'mindmap', minutes: 13,
        levels: { easy: '가지 2개(동도·서도)에 카드를 붙이고, 놓으면 바로 맞는지 알려 준다.', base: '가지 4개(동도·서도·두 섬 모두·도로 이름)에 카드를 붙인다.', challenge: '가지 4개에 \'지도 약속\' 가지가 하나 더 생기고 카드가 늘어난다.' },
        activity: {
          title: '동도·서도 생각그물', tool: 'mindmap',
          teacher: '"이 카드는 한 섬만의 이야기일까요, 두 섬 모두의 이야기일까요?" 카드를 붙일 때마다 까닭을 한 문장으로 말하게 한다. \'화산섬이에요\'를 동도에만 붙이는 학생에게는 "서도는 어떻게 생겼을까요?"라고 묻는다. 도로 이름 가지는 3학년 사회의 주소 공부와 이어진다고 알려 준다.',
          task: '가운데 "독도"에서 뻗은 가지에 동도·서도의 특징 카드를 붙여요.', levels: CARD_LV,
          items: [
            { prompt: '동도와 서도 가지에 카드를 붙여요.', toolOptions: { mode: 'sort', topic: '독도', slots: ['동도', '서도', '두 섬 모두', '도로 이름'], cards: ['독도 등대', '주민 숙소', '화산섬이에요', '독도이사부길', '독도경비대', '더 높고 뾰족해요', '동해에 있어요', '독도안용복길'] },
              target: { sort: { 동도: ['독도 등대', '독도경비대'], 서도: ['주민 숙소', '더 높고 뾰족해요'], '두 섬 모두': ['화산섬이에요', '동해에 있어요'], '도로 이름': ['독도이사부길', '독도안용복길'] } }, difficulty: 0.25,
              levels: {
                easy: { prompt: '동도와 서도 가지에 카드를 붙여요(4장).', toolOptions: { slots: ['동도', '서도'], cards: ['독도 등대', '주민 숙소', '독도경비대', '더 높고 뾰족해요'] }, target: { sort: { 동도: ['독도 등대', '독도경비대'], 서도: ['주민 숙소', '더 높고 뾰족해요'] } } },
                challenge: { prompt: '가지 5개에 카드를 붙여요(10장).', toolOptions: { slots: ['동도', '서도', '두 섬 모두', '도로 이름', '지도 약속'], cards: ['독도 등대', '주민 숙소', '화산섬이에요', '독도이사부길', '범례', '독도경비대', '더 높고 뾰족해요', '동해에 있어요', '독도안용복길', '방위표'] },
                  target: { sort: { 동도: ['독도 등대', '독도경비대'], 서도: ['주민 숙소', '더 높고 뾰족해요'], '두 섬 모두': ['화산섬이에요', '동해에 있어요'], '도로 이름': ['독도이사부길', '독도안용복길'], '지도 약속': ['범례', '방위표'] } } },
              } },
            MATCH('설명과 알맞은 카드를 이어요.', { topic: '독도 낱말' }, [['동도에 있는 길', '독도이사부길'], ['서도에 있는 길', '독도안용복길'], ['기호의 뜻을 모은 곳', '범례'], ['배가 와서 닿는 곳', '선착장']], 2, 3, '울릉순환로', 0.25),
            PICK('동도와 서도에 대해 맞는 말을 골라요.', { topic: '맞는 말', basket: '맞는 말' },
              [{ id: 'two', text: '두 큰 섬이 있어요', ok: true }, { id: 'same', text: '두 섬은 똑같아요' }, { id: 'tall', text: '서도가 더 높아요', ok: true }, { id: 'light', text: '등대는 서도에 있어요' }],
              ['two', 'same'], [{ id: 'guard', text: '경비대는 동도에 있어요', ok: true }, { id: 'none', text: '시설이 하나도 없어요' }], 0.25,
              { conclude: '동도와 서도는 생김새와 시설이 달라요. 둘 다 동해의 화산섬이에요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '동도와 서도를 견주어 써요.', columns: ['', '동도', '서도'], cells: [['시설', '', ''], ['도로 이름', '', '']], answer: '등대·독도경비대·선착장 / 주민 숙소, 독도이사부길 / 독도안용복길' }] },
      }),
      C({
        id: 'dokdo.e34.g3-isle.wrap.guide', type: 'wrap', title: '짝에게 지도 안내하기',
        method: '짝에게 지도 안내하기', tool: 'timer', minutes: 7,
        levels: { easy: '짝이 고른 기호 1개를 지도에서 찾아 주고, 점검 칸 2개에 표시한다.', base: '기호 2개를 찾아 뜻을 말하고 점검 칸 3개에 표시한다.', challenge: '기호 3개를 찾아 뜻과 있는 섬까지 말하고 점검 칸 4개에 표시한다.' },
        wrap: {
          teacher: '"짝이 범례에서 기호 하나를 고르면, 나는 지도에서 그 기호를 찾아 뜻을 말해 줘요." 차례를 바꾸어 한 번씩 해 보게 한다. 기호를 찾지 못하는 짝에게 바로 알려 주지 말고 "어느 섬부터 찾아볼까?"처럼 도움말을 주게 한다. 출구 2번에서 등대를 서도로 고른 학생에게는 범례와 확대 지도를 다시 함께 본다.',
          exitTicket: [
            SELF('지도 안내 점검', ['기호 1개를 찾아 주었어요', '기호의 뜻을 말했어요', '기호 2개를 찾았어요', '기호 3개와 섬을 말했어요']),
            { type: 'choice', prompt: '독도 등대가 있는 섬은 어디인가요?', options: ['동도', '서도', '울릉도'], answer: 0, difficulty: 0.15, explain: '등대와 독도경비대는 동도에 있어요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '짝에게 지도 안내하기',
          items: [
            { type: 'table', prompt: '짝에게 안내한 기호를 써요.', columns: ['기호 모양', '뜻', '있는 섬'], cells: [['', '', ''], ['', '', '']], answer: '(예) 등대 모양·독도 등대·동도' },
            { type: 'choice', prompt: '기호의 뜻을 모아 둔 곳은?', options: ['범례', '방위표', '제목'], answer: '범례' },
          ],
          easy: { note: '범례를 보며 써요.', items: [{ type: 'choice', prompt: '주민 숙소가 있는 섬은?', options: ['서도', '동도'], answer: '서도' }] },
        },
      }),
      C({
        id: 'dokdo.e34.g3-isle.wrap.quiz', type: 'wrap', title: '기호 뜻 퀴즈',
        method: '기호 뜻 퀴즈', tool: 'wordcards', minutes: 7,
        levels: { easy: '기호 모양 2개에 뜻 카드를 잇는다.', base: '기호 모양 3개에 뜻 카드를 잇는다.', challenge: '기호 모양 4개에 남는 카드 한 장을 가려 잇는다.' },
        wrap: {
          teacher: '"이 모양의 기호는 무엇을 뜻했지요?" 기호 모양 말을 읽은 뒤 화면이나 칠판에 실제 기호 그림을 함께 보인다. 방패 모양을 \'집\'으로 잇는 학생에게는 범례를 다시 보게 한다. "기호는 모두가 같은 뜻으로 읽기로 한 약속"이라는 말로 정리한다.',
          exitTicket: [
            EX('wordcards', MATCH('기호 모양과 뜻 카드를 이어요.', {}, [['등대 모양 기호', '독도 등대'], ['방패 모양 기호', '독도경비대'], ['편지 봉투 모양', '우체국'], ['펼친 책 모양', '도서관']], 2, 3, '주차장', 0.2)),
            { type: 'choice', prompt: '지도에 기호를 쓰는 까닭은?', options: ['좁은 지도에 약속한 그림으로 알리려고', '지도를 예쁘게 하려고', '아무렇게나 그리려고'], answer: 0, difficulty: 0.15, explain: '기호는 모두가 같은 뜻으로 읽도록 약속한 그림이에요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '기호와 범례',
          items: [
            { type: 'choice', prompt: '방패 모양 기호의 뜻은?', options: ['독도경비대', '주민 숙소', '선착장'], answer: '독도경비대' },
            { type: 'draw', prompt: '독도 등대를 나타내는 기호를 그리고 뜻을 써요.' },
          ],
          easy: { note: '범례를 보며 골라요.', items: [{ type: 'choice', prompt: '등대 모양 기호의 뜻은?', options: ['독도 등대', '학교'], answer: '독도 등대' }] },
        },
      }),
    );
  }

  // ======================================================================================================
  // 3학년 · 화산섬 독도가 생긴 차례 (초 내용체계: 자연환경 — 동북아역사재단 3-4 바위)
  // ======================================================================================================
  {
    const C = T('g3-volcano', 3);
    const AGE = ['아주 오래전', '오늘날'];
    const BORN = [{ id: 'erupt', text: '바다 밑 화산이 터져요' }, { id: 'rise', text: '섬이 바다 위로 솟아요' }, { id: 'wear', text: '파도와 바람에 깎여요' }, { id: 'now', text: '오늘의 독도 모습' }];
    const ROCK = [{ id: 'big', text: '커다란 바위가 있어요' }, { id: 'hit', text: '파도가 자꾸 부딪쳐요' }, { id: 'gap', text: '약한 곳에 틈이 생겨요' }, { id: 'hole', text: '구멍 난 바위가 돼요' }];
    M.push(
      C({
        id: 'dokdo.e34.g3-volcano.intro.rock', type: 'intro', title: '바위 그림 보고 생긴 까닭 어림하기',
        method: '바위 그림 보고 생긴 까닭 어림하기', tool: 'wordcards', minutes: 6,
        levels: { easy: '까닭 카드 2장 가운데 하나를 함께 고른다.', base: '까닭 카드 3장 가운데 그럴듯한 것을 고르는 모습을 본다.', challenge: '카드를 고르기 전에 왜 그렇게 생겼을지 짝에게 먼저 말한다.' },
        intro: {
          teacher: '"이 바위에는 왜 구멍이 났을까요?" 구멍 난 바위 그림을 보이고 대답을 듣는다(기다릴 반응: "누가 뚫었어요", "파도 때문에요"). 시연 단추로 \'파도에 깎였어요\'·\'바람에 깎였어요\' 카드가 바구니에 담기는 모습을 보인다. "처음부터 그렇게 생겼어요"라는 대답에는 "아주 오랫동안 파도와 바람이 부딪치면 바위는 어떻게 될까요?"라고 되묻는다. 오늘은 독도가 어떻게 생겨 지금 모습이 되었는지 차례로 알아본다고 밝힌다.',
          student: '구멍 난 바위 그림을 보고 왜 그렇게 생겼을지 어림해 카드를 골라요. 고른 까닭을 말해 보아요.',
          demo: { tool: 'wordcards', options: { mode: 'pick', basket: '바위가 생긴 까닭', cards: [{ id: 'wave', text: '파도에 깎였어요' }, { id: 'man', text: '사람이 뚫었어요' }, { id: 'wind', text: '바람에 깎였어요' }, { id: 'born', text: '처음부터 그랬어요' }], shuffle: false }, sequence: [{ pick: ['wave', 'wind'] }] },
          art: { draw: 'a tall paper rock standing in a blue paper sea with a round hole through it, paper waves splashing at its foot', banner: '왜 구멍이 났을까?', extra: [{ motif: 'wave', y: 240 }] },
        },
        notes: '그림의 바위는 독도의 어느 바위인지 이름을 붙이지 않는다(확인한 자료의 바위 이름만 쓴다).',
      }),
      C({
        id: 'dokdo.e34.g3-volcano.intro.earth', type: 'intro', title: '지구 속 뜨거운 곳 보기',
        method: '지구 속 뜨거운 곳 보기', tool: 'earth', minutes: 6,
        levels: { easy: '지구 그림을 보며 겉(땅·바다)과 속 두 곳 가운데 뜨거운 곳을 고른다.', base: '보기 세 곳(지구 속·하늘의 구름·바닷물) 가운데 화산의 뜨거운 것이 오는 곳을 고른다.', challenge: '고른 뒤 "뜨거운 것이 바다 밑에서 나오면?"을 짝과 말해 화산섬과 잇는다.' },
        intro: {
          teacher: '"지구 겉은 땅과 바다예요. 그럼 지구 속 깊은 곳은 어떨까요?" 대답을 듣고(기다릴 반응: "차가워요", "뜨거워요") 지구 속 깊은 곳은 아주 뜨겁고, 그 뜨거운 것이 땅이나 바다 밑을 뚫고 나오는 것이 화산이라고 알려 준다. 시연 단추로 보기 \'지구 속 깊은 곳\'이 골라지는 모습을 보인다. "화산은 산에만 있어요"라는 대답에는 "바다 밑에서도 화산이 터질 수 있어요. 독도가 그렇게 생겼어요"라고 잇는다. 이 교구는 지구 속 겹을 열어 보이지 못하므로 과학 교과서의 지구 속 그림을 함께 보인다.',
          student: '지구 그림을 보며 화산에서 나오는 뜨거운 것이 어디에서 오는지 골라요. 바다 밑에서 나오면 무엇이 생길지 말해 보아요.',
          demo: { tool: 'earth', options: { mode: 'spin', readOnly: true, ask: { q: '화산의 뜨거운 것은 어디에서 올까요?', choices: ['지구 속 깊은 곳', '하늘의 구름', '바닷물'] } }, sequence: [{ pick: 0 }] },
          art: { draw: 'a paper globe cut open like an onion with warm orange layers inside, a tiny paper volcano rising from the blue sea on its surface', banner: '지구 속은 뜨거워요', extra: [{ motif: 'sun', x: 70, y: 110, s: 0.5 }] },
        },
        notes: '지구 속 구조(겹 이름)는 4학년 과학에서 다룬다. 여기서는 "속은 뜨겁고, 화산은 그 뜨거운 것이 나오는 곳"까지만 말한다.',
      }),
      C({
        id: 'dokdo.e34.g3-volcano.activity.order', type: 'activity', title: '화산섬이 생긴 차례 놓기',
        method: '화산섬이 생긴 차례 놓기', tool: 'timeline', minutes: 14,
        levels: { easy: '장면 카드 3장을 차례로 놓고, 놓으면 바로 맞는지 알려 준다.', base: '장면 카드 4장을 차례로 놓은 뒤 확인한다.', challenge: '4장에 틀린 카드 한 장이 섞이고, 그 카드를 뺀 까닭을 짝에게 말한다.' },
        activity: {
          title: '화산섬이 생긴 차례 놓기', tool: 'timeline',
          teacher: '"섬이 먼저 생겼을까요, 깎이는 일이 먼저일까요?" 카드를 놓을 때마다 앞 장면이 있어야 다음 장면이 생길 수 있는지 묻는다. 깎이는 장면을 맨 앞에 두는 학생에게는 "깎이려면 먼저 무엇이 있어야 할까요?"라고 묻는다. 섬의 나이를 숫자로 지어 말하는 학생에게는 "아주 오래전"이라고만 말하게 한다.',
          task: '독도와 바위가 생긴 장면 카드를 일어난 차례대로 시간 띠에 놓아요.', levels: CARD_LV,
          items: [
            ORD('독도가 생긴 차례대로 놓아요.', { axis: AGE }, BORN, [0, 2, 3], { id: 'pile', text: '사람이 돌을 쌓아요', why: '독도는 사람이 생기기 훨씬 전에 자연이 만든 섬이에요.' }, 0.2),
            ORD('구멍 난 바위가 생긴 차례대로 놓아요.', { axis: AGE }, ROCK, [0, 1, 3], { id: 'drill', text: '사람이 구멍을 뚫어요', why: '바위의 구멍은 파도와 바람이 오랫동안 깎아 생겨요.' }, 0.25),
            SORT('섬이 생길 때와 생긴 뒤의 일을 나누어요.', { mode: 'sort', axis: AGE }, [{ id: 'make', label: '섬이 생길 때' }, { id: 'after', label: '섬이 생긴 뒤' }],
              [['화산이 터져요', '섬이 솟아요'], ['파도에 깎여요', '바람에 깎여요']], 1, [['뜨거운 것이 굳어요'], ['바위에 틈이 나요']], 0.25,
              { conclude: '독도는 바다 밑 화산 활동으로 생기고, 파도와 바람에 깎여 오늘의 모습이 되었어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '독도가 생긴 차례대로 번호를 써요.', columns: ['장면', '차례'], cells: [['파도와 바람에 깎여요', ''], ['바다 밑 화산이 터져요', ''], ['섬이 바다 위로 솟아요', '']], answer: '3, 1, 2' }] },
        notes: '"아주 오래전"이라고만 말하고 몇만 년 같은 숫자는 쓰지 않는다(근거 자료에서 확인한 수치만 쓴다).',
      }),
      C({
        id: 'dokdo.e34.g3-volcano.activity.feature', type: 'activity', title: '화산섬 특징 고르기',
        method: '화산섬 특징 고르기', tool: 'sortboard', minutes: 13,
        levels: { easy: '카드 4장을 맞아요·아니에요 바구니에 나누고, 틀린 바구니에 넣으면 바로 알려 준다.', base: '카드 6장을 나눈 뒤 확인한다.', challenge: '카드 8장을 나누고, 아니에요 카드 하나를 골라 까닭을 짝에게 말한다.' },
        activity: {
          title: '화산섬 특징 고르기', tool: 'sortboard',
          teacher: '"화산섬이라서 독도에 바위가 많아요." 카드를 넣을 때마다 원인과 결과를 이어 말하게 한다. \'지금도 불이 나요\'를 맞아요에 넣는 학생에게는 "독도를 만든 것은 아주 오래전의 화산 활동이에요"라고 말해 준다. 아니에요 바구니에 넣은 카드는 어떻게 고치면 맞는 말이 되는지 묻는다.',
          task: '카드가 화산섬 독도에 맞는 말인지 나누어 바구니에 넣어요.', levels: BOARD_LV,
          items: [
            SORT('화산섬 독도에 맞는 말을 나누어요.', {}, ['맞아요', '아니에요'],
              [['바다 밑 화산으로 생겼어요', '바위가 많아요', '깎인 바위가 있어요'], ['모래가 쌓여 생겼어요', '사람이 만든 섬이에요', '지금도 불이 나요']], 2,
              [['오래전에 생겼어요'], ['처음부터 지금 모양']], 0.2),
            SORT('무엇이 만든 모습인지 나누어요.', {}, ['화산이 만든 것', '파도·바람이 만든 것'],
              [['바다 위로 솟은 섬', '단단한 바위', '두 큰 섬'], ['구멍 난 바위', '깎인 바위 틈', '둥글어진 돌']], 2,
              [['섬의 처음 모양'], ['작아진 바위']], 0.25),
            SORT('독도가 생긴 이야기로 맞는 말을 나누어요.', {}, ['맞는 말', '고칠 말'],
              [['아주 오래전 일이에요', '자연이 만들었어요', '지금도 깎이고 있어요'], ['어제 생긴 섬이에요', '누가 돌을 쌓았어요', '늘 같은 모양이에요']], 2,
              [['파도가 바위를 깎아요'], ['바람은 바위를 못 깎아요']], 0.25,
              { conclude: '독도는 바다 밑 화산이 만든 화산섬이고, 파도와 바람이 오랫동안 깎아 지금 모습이 되었어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '독도는 어떻게 생긴 섬인가요?', options: ['바다 밑 화산 활동으로', '모래가 쌓여서', '사람이 만들어서'], answer: '바다 밑 화산 활동으로' }] },
      }),
      C({
        id: 'dokdo.e34.g3-volcano.activity.wave', type: 'activity', title: '파도에 깎이는 모습 흉내',
        method: '파도에 깎이는 모습 흉내', tool: 'timer', minutes: 14,
        levels: { easy: '파도 10초 놀이를 1번 하고, 안전 약속과 차례를 확인한다.', base: '파도 10초 놀이를 2번 하고, 차례를 놓은 뒤 한 일에 표시한다.', challenge: '2번 놀이한 뒤 바위가 깎이는 까닭을 한 문장으로 설명해 점검 칸을 하나 더 채운다.' },
        activity: {
          title: '파도에 깎이는 모습 흉내', tool: 'timer',
          teacher: '모둠에서 두세 명은 바위, 나머지는 파도가 된다. "파도는 바위에 부드럽게 다가갔다 물러나요. 파도가 다가올 때마다 바위는 몸을 조금씩 움츠려요." 타이머 신호에 맞춰 움직이고 쉬기 신호에 멈춘다. 친구를 세게 미는 학생이 있으면 바로 멈추고 "진짜 파도처럼 오래, 조금씩 깎는 거예요"라고 짚는다. 놀이가 끝나면 "한 번에 깎였나요, 여러 번에 걸쳐 깎였나요?"라고 묻는다.',
          task: '파도·바위 역할로 깎이는 모습을 몸으로 나타내요. 안전 약속과 차례를 먼저 정해요.', levels: PLAIN_LV,
          items: [
            { prompt: '놀이 전 안전 약속을 모두 확인해요.', toolOptions: { title: '파도 놀이 안전', safety: ['책상을 벽 쪽으로 밀어 두었어요', '친구를 세게 밀지 않아요', '천천히 걸어 움직여요'] }, target: { safety: true }, difficulty: 0.1 },
            { prompt: '파도 10초, 쉬기 5초, 2번으로 맞춰요.', toolOptions: { title: '파도 놀이 시간', labels: ['파도', '쉬기'], plan: { work: 5, rest: 5, rounds: 1 }, workStep: 5, restStep: 5 }, target: { plan: { work: 10, rest: 5, rounds: 2 } }, difficulty: 0.15,
              levels: { easy: { prompt: '파도 10초, 쉬기 5초, 1번으로 맞춰요.', target: { plan: { work: 10, rest: 5, rounds: 1 } } } } },
            { prompt: '파도 놀이의 차례를 놓아요.', toolOptions: { title: '파도 놀이 차례', cards: ['바위가 조금 작아져요', '바위 역할이 서요', '깎인 모습으로 멈춰요', '파도가 다가갔다 물러나요'] }, target: { order: ['바위 역할이 서요', '파도가 다가갔다 물러나요', '바위가 조금 작아져요', '깎인 모습으로 멈춰요'] }, difficulty: 0.2 },
            { prompt: '놀이에서 한 일에 표시해요.', toolOptions: { title: '파도 놀이 점검' }, target: { selfCheck: ['역할을 맡아 움직였어요', '신호에 맞춰 멈췄어요', '조금씩 깎이는 모습을 보았어요'] }, difficulty: 0.1,
              levels: {
                easy: { prompt: '놀이에서 한 일에 표시해요(2칸).', target: { selfCheck: ['역할을 맡아 움직였어요', '신호에 맞춰 멈췄어요'] } },
                challenge: { prompt: '놀이에서 한 일에 표시해요(4칸).', target: { selfCheck: ['역할을 맡아 움직였어요', '신호에 맞춰 멈췄어요', '조금씩 깎이는 모습을 보았어요', '깎이는 까닭을 설명했어요'] } },
              },
              conclude: '파도는 한 번에 깎지 않아요. 아주 오랫동안 여러 번 부딪쳐 바위를 깎아요.' },
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸을 채워요.', text: '바위는 파도와 ___이 아주 오랫동안 부딪쳐 조금씩 깎여요.', answer: '바람' }] },
        notes: '몸으로 하는 놀이라 공간을 먼저 확보하고, 밀거나 잡아당기지 않게 한다. 몸이 불편한 학생은 바위 역할이나 신호 주는 역할을 맡는다.',
      }),
      C({
        id: 'dokdo.e34.g3-volcano.activity.build', type: 'activity', title: '색종이로 깎인 바위섬 만들기',
        method: '색종이로 깎인 바위섬 만들기', tool: 'collage', minutes: 13,
        levels: { easy: '두 단계: 큰 조각 2개로 섬을 놓고, 파도 조각 2개로 깎인 자리를 나타낸 뒤 짝에게 보여 준다.', base: '세 단계: 큰 조각 섬 → 파도 조각으로 깎인 자리 → 둘레에 작은 바위 조각 2개 더하기.', challenge: '깎이기 전 섬과 깎인 섬을 나란히 만들어 견주어 말한다.' },
        activity: {
          title: '색종이로 깎인 바위섬 만들기', tool: 'collage',
          teacher: '"큰 조각으로 처음 솟은 섬을 놓아 볼까요? 이제 파도가 깎은 자리에 파란 조각을 겹쳐 보세요." 가위 대신 파란 조각을 겹쳐 깎인 자리를 나타낸다고 알려 준다. 조각을 아무 데나 붙이는 학생에게는 "파도는 섬의 어느 쪽에 먼저 닿을까요?"라고 묻는다. 작은 갈색 조각은 섬에서 떨어져 나온 바위라고 말해 준다.',
          task: '색종이 조각으로 바위섬을 만들고, 파도에 깎인 모습을 조각으로 나타내요.', levels: PLAIN_LV,
          items: [
            { prompt: '큰 조각 2개로 바다 위 바위섬을 놓아요.', toolOptions: { shapes: ['triangle', 'semi', 'rect', 'circle'], colors: ['갈색', '검정', '초록', '파랑'], sizes: ['s', 'm', 'l'] }, target: { has: [{ size: 'l', min: 2 }] }, difficulty: 0.1 },
            { prompt: '작은 파란 조각 2개를 섬에 겹쳐 깎인 자리를 나타내요.', toolOptions: { shapes: ['triangle', 'semi', 'rect', 'circle'], colors: ['갈색', '검정', '초록', '파랑'], sizes: ['s', 'm', 'l'] }, target: { has: [{ size: 'l', min: 1 }, { color: '파랑', size: 's', min: 2 }], overlap: 1 }, difficulty: 0.15 },
            { prompt: '섬 둘레에 떨어져 나온 작은 갈색 바위 2개를 더해요.', toolOptions: { shapes: ['triangle', 'semi', 'rect', 'circle'], colors: ['갈색', '검정', '초록', '파랑'], sizes: ['s', 'm', 'l'] }, target: { has: [{ size: 'l', min: 1 }, { color: '갈색', size: 's', min: 2 }] }, difficulty: 0.15,
              levels: {
                easy: { prompt: '만든 섬을 짝에게 보여 주고 표시해요.', target: { selfCheck: ['섬을 짝에게 보여 주었어요'], minPieces: 1 } },
                challenge: { prompt: '깎이기 전 섬과 깎인 섬을 나란히 만들어요.', target: { has: [{ size: 'l', min: 2 }, { color: '파랑', size: 's', min: 2 }], selfCheck: ['전과 후를 견주어 말했어요'] } },
              },
              conclude: '처음 솟은 섬이 파도와 바람에 깎이고 떨어져 나가 오늘의 바위섬이 되었어요.' },
          ],
        },
        worksheet: { items: [{ type: 'draw', prompt: '깎이기 전 섬과 깎인 뒤 섬을 나란히 그려요.' }] },
      }),
      C({
        id: 'dokdo.e34.g3-volcano.wrap.tell', type: 'wrap', title: '생긴 차례 한 문장 고르기',
        method: '생긴 차례 한 문장 고르기', tool: 'wordcards', minutes: 7,
        levels: { easy: '빈칸 하나에 보기 2개 가운데 알맞은 카드를 넣는다.', base: '빈칸 하나에 보기 3개 가운데 알맞은 카드를 넣는다.', challenge: '두 문장의 빈칸을 모두 채운다.' },
        wrap: {
          teacher: '"독도가 생긴 이야기를 한 문장으로 말해 볼까요?" 빈칸 문장을 함께 읽는다. \'사람의 손\'을 넣으려는 학생에게는 "사람이 생기기 훨씬 전이었지요?"라고 묻는다. 출구 2번에서 깎이는 일을 먼저 고른 학생에게는 섬이 먼저 솟아야 한다는 점을 다시 짚는다.',
          exitTicket: [
            EX('wordcards', FILLN('빈칸에 알맞은 카드를 넣어요.', null, [['독도는 바다 밑 ___로 생겼어요', '화산 활동'], ['그 뒤 파도와 ___에 깎였어요', '바람']], ['사람의 손', '모래 쌓기', '강물'], 1, 1, 0.15, {}, [1, 2])),
            { type: 'choice', prompt: '먼저 일어난 일은 무엇인가요?', options: ['섬이 바다 위로 솟았어요', '파도에 깎였어요', '구멍 난 바위가 됐어요'], answer: 0, difficulty: 0.15, explain: '섬이 먼저 솟아야 파도와 바람이 깎을 수 있어요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '화산섬 독도',
          items: [
            { type: 'blank', prompt: '빈칸을 채워요.', text: '독도는 바다 밑 ___ 활동으로 생긴 화산섬이에요.', answer: '화산' },
            { type: 'short', prompt: '독도가 생긴 차례를 세 문장으로 써요.' },
          ],
          easy: { note: '시간 띠 카드를 떠올려요.', items: [{ type: 'choice', prompt: '독도는 무엇으로 생겼나요?', options: ['화산 활동', '사람의 손'], answer: '화산 활동' }] },
        },
      }),
      C({
        id: 'dokdo.e34.g3-volcano.wrap.check', type: 'wrap', title: '차례 다시 놓기',
        method: '차례 다시 놓기', tool: 'timeline', minutes: 7,
        levels: { easy: '그림 설명 카드 3장을 차례로 놓는다.', base: '카드 4장을 차례로 놓는다.', challenge: '카드 4장에 섞인 틀린 설명 카드 한 장을 빼고 놓는다.' },
        wrap: {
          teacher: '"오늘 몸과 색종이로 해 본 차례를 다시 놓아 볼까요?" 카드를 다 놓으면 차례대로 소리 내어 읽게 한다. 깎이는 카드를 맨 앞에 놓는 학생에게는 "무엇이 있어야 깎일 수 있었지요?"라고 묻는다. 틀린 설명 카드를 빼는 까닭은 짝에게 말하게 한다.',
          exitTicket: [
            EX('timeline', ORD('독도가 지금 모습이 된 차례대로 놓아요.', { axis: AGE },
              [{ id: 'hot', text: '뜨거운 것이 바다 밑에서 솟아요' }, { id: 'land', text: '바다 위에 섬이 생겨요' }, { id: 'long', text: '오랫동안 파도가 깎아요' }, { id: 'today', text: '두 큰 섬과 바위섬이 돼요' }],
              [0, 1, 3], { id: 'same', text: '처음 모양 그대로예요', why: '독도는 깎여서 모습이 바뀌었어요.' }, 0.2)),
            { type: 'choice', prompt: '"독도는 처음부터 지금 모양이었다"는 말은?', options: ['고쳐야 해요', '맞아요', '알 수 없어요'], answer: 0, difficulty: 0.15, explain: '파도와 바람에 오랫동안 깎여 지금 모습이 되었어요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '독도가 생긴 차례',
          items: [
            { type: 'table', prompt: '차례대로 번호를 써요.', columns: ['장면', '차례'], cells: [['두 큰 섬과 바위섬이 돼요', ''], ['뜨거운 것이 바다 밑에서 솟아요', ''], ['오랫동안 파도가 깎아요', ''], ['바다 위에 섬이 생겨요', '']], answer: '4, 1, 3, 2' },
            { type: 'short', prompt: '"독도는 처음부터 지금 모양이었다"를 바르게 고쳐 써요.' },
          ],
          easy: { note: '시간 띠를 떠올려요.', items: [{ type: 'choice', prompt: '먼저 생긴 것은?', options: ['섬', '구멍 난 바위'], answer: '섬' }] },
        },
      }),
    );
  }

  // 바다 이름 점(우리나라 칸 지도)
  const SEA = { east: { name: '동해', icon: 'dot', at: [5, 3] }, west: { name: '서해', icon: 'dot', at: [0, 4] }, south: { name: '남해', icon: 'dot', at: [2, 8] } };
  // 행정 구역 칸 지도 — 울릉도·독도는 경상북도 칸(울릉군)
  const KOR_GB = (places, more) => KOR(places, Object.assign({ regionNames: true, regions: [
    { name: '경상북도', cells: [[3, 5], [3, 6], [4, 4], [5, 5]], color: 'peach' },
    { name: '강원도', cells: [[3, 3], [3, 4]], color: 'sky' },
    { name: '경기도', cells: [[1, 4], [2, 4], [1, 5]], color: 'lavender' },
  ] }, more || {}));
  const KOR_GB_PLAIN = (places, more) => KOR(places, Object.assign({ regionNames: true, regions: [
    { name: '경상북도', cells: [[3, 5], [3, 6], [4, 4], [5, 5]], color: 'mint' },
    { name: '강원도', cells: [[3, 3], [3, 4]], color: 'mint' },
    { name: '경기도', cells: [[1, 4], [2, 4], [1, 5]], color: 'mint' },
  ] }, more || {}));

  // ======================================================================================================
  // 3학년 · 주소와 동해, 독도 안내판 (초 내용체계: 지리적 특성 — 주소는 g3-cc-dokdo 재료: 경상북도 울릉군 울릉읍 독도리)
  // ======================================================================================================
  {
    const C = T('g3-sign', 3);
    const ADDR = [{ id: 'gb', text: '경상북도' }, { id: 'gun', text: '울릉군' }, { id: 'eup', text: '울릉읍' }, { id: 'ri', text: '독도리' }];
    M.push(
      C({
        id: 'dokdo.e34.g3-sign.intro.sea', type: 'intro', title: '바다 이름 찾기',
        method: '바다 이름 찾기', tool: 'map', minutes: 6,
        levels: { easy: '동해 한 곳에 핀이 꽂히는 모습을 보고 이름을 따라 말한다.', base: '동해와 서해 두 곳을 보고 어느 쪽 바다인지 방위로 말한다.', challenge: '동해·서해·남해 세 곳을 보고 독도가 있는 바다를 짝에게 말한다.' },
        intro: {
          teacher: '"우리나라는 세 쪽이 바다로 둘러싸여 있어요. 바다 이름을 아나요?" 대답을 듣고(기다릴 반응: "동해요", "서해요", "남해요") 시연 단추로 동해·서해·남해 점에 차례로 핀이 꽂히는 모습을 보인다. 동해와 남해를 헷갈리는 학생에게는 "해가 뜨는 쪽 바다가 동해예요"라고 방위와 잇는다. 오늘은 독도가 어느 바다에, 어느 고장에 속하는지 찾는다고 밝힌다.',
          student: '지도에서 우리나라 둘레의 바다 이름을 찾아요. 독도가 떠 있는 바다는 어느 쪽인지 말해 보아요.',
          demo: { tool: 'map', options: KOR([SEA.east, SEA.west, SEA.south, P.dokdo]), sequence: [{ pin: [5, 3] }, { pin: [0, 4] }, { pin: [2, 8] }] },
          art: { draw: 'a paper map of a peninsula surrounded by three blue paper seas on the east, west and south, a small rocky islet in the eastern sea', banner: '독도가 있는 바다', extra: [{ motif: 'wave', y: 240 }] },
        },
      }),
      C({
        id: 'dokdo.e34.g3-sign.intro.addr', type: 'intro', title: '주소 차례 놓기',
        method: '주소 차례 놓기', tool: 'story', minutes: 6,
        levels: { easy: '경상북도·울릉군 카드 2장을 큰 곳부터 놓는 모습을 본다.', base: '경상북도→울릉군→울릉읍 3장을 놓는 모습을 본다.', challenge: '3장에 이어 독도리까지 4장을 큰 곳부터 놓고 따라 읽는다.' },
        intro: {
          teacher: '"우리 학교 주소는 어떻게 시작하나요?" 대답을 듣고(기다릴 반응: "○○시요") 주소는 큰 곳부터 작은 곳 차례로 쓴다고 알려 준다. 시연 단추로 경상북도→울릉군→울릉읍→독도리 카드가 차례로 놓이는 모습을 보인다. "독도에는 주소가 없어요"라는 대답에는 "독도에도 주소가 있어요. 동도에는 독도이사부길, 서도에는 독도안용복길이라는 도로 이름도 있어요"라고 말해 준다.',
          student: '독도의 주소 카드를 큰 곳부터 작은 곳 차례로 놓아 보아요. 우리 학교 주소의 차례와 견주어 보아요.',
          demo: { tool: 'story', options: { mode: 'order', slots: ['가장 큰 곳', '다음', '그다음', '가장 작은 곳'], cards: [ADDR[2], ADDR[0], ADDR[3], ADDR[1]], shuffle: false }, sequence: [{ order: ['gb', 'gun', 'eup', 'ri'] }] },
          art: { draw: 'a paper envelope with four stacked paper address labels, from a big province label at the top to a small village label at the bottom, a tiny rocky islet stamp in the corner', banner: '큰 곳부터 작은 곳', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
      }),
      C({
        id: 'dokdo.e34.g3-sign.activity.region', type: 'activity', title: '지도에서 행정 구역 칸 찾기',
        method: '지도에서 행정 구역 칸 찾기', tool: 'map', minutes: 14,
        levels: { easy: '도마다 색이 다른 지도에서 독도 칸과 같은 색의 도를 찾는다(핀을 꽂으면 이름이 보인다).', base: '모든 도가 같은 색인 지도에서 도 이름만 보고 찾는다.', challenge: '같은 색 지도에서 찾고, 울릉도와 독도가 함께 속한 군(울릉군)도 고른다.' },
        activity: {
          title: '지도에서 행정 구역 칸 찾기', tool: 'map',
          teacher: '"독도 칸과 같은 도에 들어 있는 곳은 어디인가요?" 울릉도와 독도가 경상북도에 함께 들어 있음을 확인하게 한다. 강원도에 꽂는 학생에게는 "독도 칸이 들어 있는 도의 이름을 다시 읽어 볼까요?"라고 묻는다. 칸 지도는 도의 경계를 줄여 그린 그림이라고 밝히고, 사회과 부도의 실제 지도도 함께 펼친다.',
          task: '칸 지도에서 독도가 속한 행정 구역과 바다를 찾아 핀을 꽂아요.', levels: MAP_LV,
          items: [
            { prompt: '독도가 속한 도에 핀을 꽂아요.', toolOptions: KOR_GB_PLAIN([P.dokdo, P.ulleung, P.seoul]), target: { region: '경상북도' }, difficulty: 0.2,
              levels: {
                easy: { prompt: '독도 칸과 같은 색인 도에 핀을 꽂아요.', toolOptions: { regions: KOR_GB([]).regions } },
                challenge: { prompt: '독도가 속한 도에 핀을 꽂고, 군 이름도 골라요.', toolOptions: { ask: { q: '울릉도와 독도가 함께 속한 군은?', choices: ['울릉군', '포항시', '강원도'] } }, target: { region: '경상북도', pick: 0 } },
              } },
            { prompt: '경상북도에 속한 섬 가운데 독도에 핀을 꽂아요.', toolOptions: KOR_GB_PLAIN([P.dokdo, P.ulleung, P.pohang]), target: { place: '독도' }, difficulty: 0.15,
              levels: {
                easy: { prompt: '경상북도 색 칸에서 독도에 핀을 꽂아요.', toolOptions: { regions: KOR_GB([]).regions } },
                challenge: { prompt: '독도에 핀을 꽂고, 독도가 속한 읍도 골라요.', toolOptions: { ask: { q: '독도가 속한 읍은?', choices: ['울릉읍', '포항읍', '서울읍'] } }, target: { place: '독도', pick: 0 } },
              } },
            { prompt: '독도가 떠 있는 바다 이름 점에 핀을 꽂아요.', toolOptions: KOR([SEA.east, SEA.west, SEA.south, P.dokdo]), target: { place: '동해' }, difficulty: 0.2,
              levels: { challenge: { prompt: '독도가 있는 바다에 핀을 꽂고, 어느 쪽 바다인지 골라요.', toolOptions: { ask: { q: '동해는 우리나라의 어느 쪽?', choices: ['동쪽', '서쪽', '남쪽'] } }, target: { place: '동해', pick: 0 } } },
              conclude: '독도는 경상북도 울릉군 울릉읍에 속하고, 우리나라 동쪽 바다인 동해에 있어요.' },
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸을 채워요.', text: '독도의 주소는 ___ 울릉군 ___ 독도리예요.', answer: '경상북도, 울릉읍' }] },
        notes: '칸 지도는 도 경계를 줄여 그린 그림이다. 실제 행정 구역 지도(사회과 부도)로 한 번 더 확인한다.',
      }),
      C({
        id: 'dokdo.e34.g3-sign.activity.mail', type: 'activity', title: '독도로 보내는 편지 봉투 꾸미기',
        method: '독도로 보내는 편지 봉투 꾸미기', tool: 'collage', minutes: 13,
        levels: { easy: '봉투에 주소 줄 조각 2개(도·군)와 우표를 붙인다.', base: '주소 줄 조각 3개(도·군·읍)와 우표를 붙인다.', challenge: '주소 줄 3개와 우표에 \'보내는 사람\' 칸 조각까지 붙이고, 주소를 큰 곳부터 짝에게 읽어 준다.' },
        activity: {
          title: '독도로 보내는 편지 봉투 꾸미기', tool: 'collage',
          teacher: '"봉투의 주소 줄은 위에서부터 큰 곳 차례로 붙여요." 흰 긴 네모 조각 한 줄이 주소 한 칸이라고 약속한다. 우표를 아무 데나 붙이는 학생에게는 "우표는 봉투 오른쪽 위에 붙이기로 약속해요"라고 알려 준다. 봉투를 다 꾸민 뒤 줄마다 무엇을 쓸지(경상북도·울릉군·울릉읍) 짝에게 말하게 한다. 이 봉투는 수업 놀이이고 실제로 보내지 않는다.',
          task: '색종이 조각으로 봉투를 꾸미고, 주소 줄 조각을 큰 곳부터 붙여요.', levels: PLAIN_LV,
          items: [
            { prompt: '큰 흰 조각으로 봉투를 놓고, 작은 노란 조각 2개로 테두리를 꾸며요.', toolOptions: { shapes: ['rect', 'square', 'heart', 'star'], colors: ['하양', '노랑', '파랑', '빨강'], sizes: ['s', 'm', 'l'] }, target: { has: [{ shape: 'rect', color: '하양', size: 'l', min: 1 }, { color: '노랑', size: 's', min: 2 }] }, difficulty: 0.1 },
            MAKE('봉투에 주소 줄 조각을 붙여요.', { shapes: ['rect', 'square', 'heart', 'star'], colors: ['하양', '노랑', '파랑', '빨강'], sizes: ['s', 'm', 'l'] }, ['주소 줄을 큰 곳부터 붙였어요'], '보내는 사람 칸을 붙였어요', [3, 4, 5], 0.15),
            { prompt: '오른쪽 위에 우표 조각을 붙이고 표시해요.', toolOptions: { shapes: ['rect', 'square', 'heart', 'star'], colors: ['하양', '노랑', '파랑', '빨강'], sizes: ['s', 'm', 'l'] }, target: { has: [{ shape: 'square', size: 's', min: 1 }], selfCheck: ['주소를 큰 곳부터 말했어요'] }, difficulty: 0.1,
              levels: { challenge: { prompt: '우표를 붙이고 주소를 짝에게 읽어 줘요.', target: { has: [{ shape: 'square', size: 's', min: 1 }], selfCheck: ['주소를 큰 곳부터 말했어요', '짝에게 주소를 읽어 주었어요'] } } },
              conclude: '주소는 경상북도 → 울릉군 → 울릉읍 → 독도리처럼 큰 곳부터 써요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '봉투의 주소 줄에 쓸 말을 차례로 써요.', columns: ['줄', '쓸 말'], cells: [['첫째 줄(도)', ''], ['둘째 줄(군)', ''], ['셋째 줄(읍)', '']], answer: '경상북도, 울릉군, 울릉읍' }] },
        notes: '편지 봉투는 주소 차례를 익히는 놀이다. 실제 우편을 보내는 활동으로 넓힐 때는 학교가 받는 곳과 방법을 확인한다.',
      }),
      C({
        id: 'dokdo.e34.g3-sign.activity.fill', type: 'activity', title: '안내판 빈칸 채우기',
        method: '안내판 빈칸 채우기', tool: 'story', minutes: 14,
        levels: { easy: '안내판 말풍선 빈칸 2칸을 채운다.', base: '빈칸 4칸을 채운다.', challenge: '빈칸 6칸을 채우고 함정 카드를 모두 가려낸다.' },
        activity: {
          title: '안내판 빈칸 채우기', tool: 'story',
          teacher: '"안내판은 처음 온 사람이 꼭 알아야 할 사실을 알려 줘요. 이 빈칸에는 어떤 사실이 들어가야 할까요?" 지난 차시의 지도와 표를 펴 놓고 확인하며 채우게 한다. \'874km\'를 넣는 학생에게는 점(소수점)의 자리를 다시 보게 한다. 숫자를 짐작해 넣는 학생에게는 "이 숫자는 어느 자료에서 보았나요?"라고 묻는다.',
          task: '독도 안내판의 빈칸에 알맞은 낱말 카드를 넣어 안내 글을 완성해요.', levels: CARD_LV,
          items: [
            FILLN('안내판의 위치 빈칸을 채워요.', '안내판', [['독도는 ___에 있어요', '동해'], ['울릉도의 ___쪽이에요', '남동'], ['울릉도에서 ___ 떨어져 있어요', '87.4km'], ['주소는 경상북도 ___', '울릉군'], ['울릉군 ___ 독도리예요', '울릉읍'], ['맑은 날 ___에서 보여요', '울릉도']], ['서해', '북서', '874km', '서울'], 2, 4, 0.2, {}, [1, 3]),
            FILLN('안내판의 생김새 빈칸을 채워요.', '안내판', [['___와 서도 두 큰 섬이에요', '동도'], ['___가 더 높고 뾰족해요', '서도'], ['바다 밑 ___로 생겼어요', '화산 활동'], ['동도에는 ___가 있어요', '독도 등대'], ['서도에는 ___가 있어요', '주민 숙소'], ['배는 ___에 닿아요', '선착장']], ['울릉도', '모래 쌓기', '공항'], 2, 4, 0.25, {}, [1, 2]),
            ORD('안내판 글의 차례를 놓아요.', { mode: 'order' }, [{ id: 'title', text: '제목: 독도' }, { id: 'where', text: '어디에 있나요' }, { id: 'look', text: '어떻게 생겼나요' }, { id: 'ask', text: '지켜 주세요' }], [0, 1, 2], { id: 'feel', text: '내 기분 일기', why: '안내판에는 처음 온 사람이 알아야 할 사실을 써요.' }, 0.25,
              { conclude: '안내판에는 위치·거리·생김새처럼 자료로 확인한 사실을 차례대로 써요.' }),
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '안내판 글을 완성해요.', text: '독도는 ___에 있는 섬으로, 울릉도의 ___쪽 87.4km에 있어요.', answer: '동해, 남동' }] },
        notes: FACT,
      }),
      C({
        id: 'dokdo.e34.g3-sign.activity.choose', type: 'activity', title: '안내판에 넣을 문장 고르기',
        method: '안내판에 넣을 문장 고르기', tool: 'sortboard', minutes: 13,
        levels: { easy: '문장 카드 4장을 넣을 문장·뺄 문장으로 나누고, 틀린 바구니에 넣으면 바로 알려 준다.', base: '문장 카드 6장을 나눈 뒤 확인한다.', challenge: '카드 8장을 나누고, 뺄 문장 하나를 사실 문장으로 고쳐 활동지에 쓴다.' },
        activity: {
          title: '안내판에 넣을 문장 고르기', tool: 'sortboard',
          teacher: '"안내판에 들어갈 문장은 누구나 자료로 확인할 수 있는 사실이어야 해요." 사실과 느낌·짐작을 가르게 한다. \'100km쯤 될걸요\'를 넣을 문장에 두는 학생에게는 "이 숫자는 어느 자료에서 보았나요?"라고 묻는다. 느낌 문장이 나쁜 것은 아니고 안내판이 아닌 일기나 편지에 쓴다고 말해 준다.',
          task: '안내판에 넣을 문장(사실)과 뺄 문장(느낌·짐작)을 바구니에 나누어요.', levels: BOARD_LV,
          items: [
            SORT('독도 안내판에 넣을 문장을 나누어요.', {}, ['넣을 문장', '뺄 문장'],
              [['동해에 있는 섬이에요', '울릉도에서 87.4km예요', '동도와 서도가 있어요'], ['100km쯤 될걸요', '내가 제일 좋아해요', '아마 아주 클 거예요']], 2,
              [['주소는 울릉군 울릉읍'], ['친구가 그렇대요']], 0.2),
            SORT('시설을 알리는 문장을 나누어요.', {}, ['넣을 문장', '뺄 문장'],
              [['동도에 등대가 있어요', '서도에 주민 숙소가 있어요', '배는 선착장에 닿아요'], ['등대가 제일 멋져요', '숙소가 많을 거예요', '공항이 있을걸요']], 2,
              [['동도에 독도경비대가 있어요'], ['가 보고 싶어요']], 0.25),
            SORT('생김새를 알리는 문장을 나누어요.', {}, ['넣을 문장', '뺄 문장'],
              [['화산 활동으로 생겼어요', '서도가 더 높아요', '바위가 많은 섬이에요'], ['아주 신기하게 생겼어요', '모래섬일 거예요', '그림처럼 예뻐요']], 2,
              [['파도에 깎인 바위가 있어요'], ['산이 엄청 높을걸요']], 0.25,
              { conclude: '안내판에는 누구나 확인할 수 있는 사실을 넣어요. 느낌은 일기나 편지에 써요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '뺄 문장 하나를 골라 자료로 확인한 사실 문장으로 고쳐 써요.' }] },
      }),
      C({
        id: 'dokdo.e34.g3-sign.wrap.walk', type: 'wrap', title: '교실 안내판 돌아보기',
        method: '교실 안내판 돌아보기', tool: 'timer', minutes: 7,
        levels: { easy: '다른 모둠 안내판 1곳을 1분 동안 보고 칭찬 스티커를 붙인다.', base: '안내판 3곳을 1분씩 돌아보고 칭찬 스티커를 붙인다.', challenge: '우리 반 모든 모둠(6모둠 기준) 안내판을 1분씩 돌아본다.' },
        wrap: {
          teacher: '모둠 안내판을 교실 벽에 붙이고, 타이머 신호에 맞춰 시계 방향으로 한 곳씩 옮겨 가며 본다. "칭찬 스티커는 사실을 바르게 쓴 문장 옆에 붙여요." 느낌만 쓴 문장에 붙이려는 학생에게는 "이 문장은 자료에서 확인할 수 있나요?"라고 묻는다. 돌아본 뒤 출구 2번으로 안내판에 꼭 들어갈 것을 다시 고른다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', prompt: '보기 1분, 옮기기 10초, 3곳으로 맞춰요.', options: { title: '안내판 돌아보기', labels: ['보기', '옮기기'], plan: { work: 30, rest: 10, rounds: 1 }, workStep: 30, restStep: 10 }, target: { plan: { work: 60, rest: 10, rounds: 3 } }, difficulty: 0.15,
              levels: {
                easy: { prompt: '보기 1분, 옮기기 10초, 1곳으로 맞춰요.', target: { plan: { work: 60, rest: 10, rounds: 1 } } },
                challenge: { prompt: '보기 1분, 옮기기 10초, 6곳으로 맞춰요.', target: { plan: { work: 60, rest: 10, rounds: 6 } } },
              } },
            { type: 'choice', prompt: '독도 안내판에 꼭 들어갈 것은?', options: ['자료로 확인한 위치와 생김새', '내가 짐작한 숫자', '내 기분 일기'], answer: 0, difficulty: 0.15, explain: '안내판에는 누구나 확인할 수 있는 사실을 써요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '안내판 돌아보기',
          items: [
            { type: 'table', prompt: '돌아본 안내판에서 잘 쓴 문장을 적어요.', columns: ['모둠', '잘 쓴 사실 문장'], cells: [['', ''], ['', '']], answer: '(모둠마다 다름)' },
            { type: 'choice', prompt: '안내판에 알맞은 문장은?', options: ['독도는 동해에 있어요', '독도는 100km쯤 될걸요'], answer: '독도는 동해에 있어요' },
          ],
          easy: { note: '한 곳만 써도 돼요.', items: [{ type: 'short', prompt: '친구 안내판에서 잘 쓴 문장 하나를 써요.' }] },
        },
        notes: '모둠 수가 6이 아니면 도전 단계의 6곳을 우리 반 모둠 수로 바꾸어 말한다(교구 판은 6곳).',
      }),
      C({
        id: 'dokdo.e34.g3-sign.wrap.sum', type: 'wrap', title: '3학년 독도 지리 생각그물',
        method: '3학년 독도 지리 생각그물', tool: 'mindmap', minutes: 7,
        levels: { easy: '가지 2개(위치·거리)에 카드를 한 장씩 붙인다.', base: '가지 3개(위치·거리·생김새)에 카드를 한 장씩 붙인다.', challenge: '가지 3개에 카드를 두 장씩 붙인다.' },
        wrap: {
          teacher: '"독도를 지도로 설명한다면 무엇부터 말할까요?" 위치·거리·생김새 가지를 함께 읽는다. \'87.4km\'를 위치에 붙이는 학생에게는 "숫자와 km가 붙어 있으면 무엇을 말하는 카드일까요?"라고 묻는다. 출구 2번으로 한 해 동안 배운 독도 지리를 한 문장으로 고른다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', prompt: '독도 지리 카드를 가지에 붙여요.', options: { mode: 'sort', topic: '3학년 독도 지리', slots: ['위치', '거리', '생김새'], cards: ['동해에 있어요', '울릉도에서 87.4km', '동도와 서도', '100km쯤 될걸요'] },
              target: { sort: { 위치: ['동해에 있어요'], 거리: ['울릉도에서 87.4km'], 생김새: ['동도와 서도'] } }, difficulty: 0.2,
              levels: {
                easy: { toolOptions: { slots: ['위치', '거리'], cards: ['동해에 있어요', '울릉도에서 87.4km', '100km쯤 될걸요'] }, target: { sort: { 위치: ['동해에 있어요'], 거리: ['울릉도에서 87.4km'] } } },
                challenge: { toolOptions: { cards: ['동해에 있어요', '울릉도에서 87.4km', '동도와 서도', '울릉도의 남동쪽', '오키섬에서 157.5km', '화산섬이에요', '100km쯤 될걸요'] },
                  target: { sort: { 위치: ['동해에 있어요', '울릉도의 남동쪽'], 거리: ['울릉도에서 87.4km', '오키섬에서 157.5km'], 생김새: ['동도와 서도', '화산섬이에요'] } } },
              } },
            { type: 'choice', prompt: '3학년 독도 공부를 한 문장으로 고르면?', options: ['동해의 독도는 울릉도에서 87.4km예요', '독도는 서해에 있어요', '독도는 주소가 없어요'], answer: 0, difficulty: 0.15, explain: '독도는 동해에 있고 울릉도에서 87.4km 떨어져 있어요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '3학년 독도 지리',
          items: [
            { type: 'table', prompt: '독도를 세 가지로 설명해요.', columns: ['갈래', '설명'], cells: [['위치', ''], ['거리', ''], ['생김새', '']], answer: '동해·울릉도의 남동쪽, 울릉도에서 87.4km, 동도와 서도·화산섬' },
            { type: 'short', prompt: '독도를 처음 보는 친구에게 한 문장으로 소개해요.' },
          ],
          easy: { note: '생각그물 카드를 보며 써요.', items: [{ type: 'choice', prompt: '독도가 있는 바다는?', options: ['동해', '서해'], answer: '동해' }] },
        },
        notes: '\'100km쯤 될걸요\'는 자료로 확인하지 않은 짐작이라 어느 가지에도 붙이지 않는 함정 카드다. 확인하지 않은 말은 붙이지 않는다는 것을 짚는다.',
      }),
    );
  }

  // 독도 확대 지도 위 '자연을 볼 수 있는 곳'(이해를 돕는 그림 자리 — 실제 둥지·꽃 자리를 그린 것이 아니다)
  const NAT = {
    bird: { name: '바닷새 쉼터', icon: 'dot', at: [1, 1] }, aster: { name: '해국 바위틈', icon: 'dot', at: [2, 2] },
    sedum: { name: '땅채송화 바위틈', icon: 'dot', at: [3, 1] }, kirin: { name: '섬기린초 바위틈', icon: 'dot', at: [4, 2] },
  };
  const BRANCH_LV = { easy: {}, base: {}, challenge: { revealAfterCheck: true } };

  // ======================================================================================================
  // 4학년 · 천연보호구역 독도 (초 내용체계: 자연환경 — g4-cc-dokdo 재료)
  // ======================================================================================================
  {
    const C = T('g4-protect', 4);
    M.push(
      C({
        id: 'dokdo.e34.g4-protect.intro.sign', type: 'intro', title: '보호 표지판 그림 보고 뜻 고르기',
        method: '보호 표지판 그림 보고 뜻 고르기', tool: 'wordcards', minutes: 6,
        levels: { easy: '뜻 카드 2장 가운데 알맞은 하나를 함께 고른다.', base: '뜻 카드 3장 가운데 알맞은 뜻을 고르는 모습을 본다.', challenge: '뜻을 고른 뒤 "왜 보호할까?"를 짝과 먼저 말한다.' },
        intro: {
          teacher: '"\'천연보호구역\'이라고 쓴 표지판을 본 적이 있나요? 무슨 뜻일까요?" 표지판 그림(화면이나 칠판)을 보이고 대답을 듣는다(기다릴 반응: "아무도 못 들어가요", "자연을 지켜요"). 시연 단추로 \'자연을 아끼며 지키는 곳\' 카드가 골라지는 모습을 보인다. "사람이 아예 못 가는 곳이에요"라는 대답에는 "정해진 약속을 지키며 아끼는 곳이에요"라고 바로잡는다. 독도도 천연보호구역으로 지정되어 보호받는다고 알려 준다.',
          student: '보호구역 표지판 그림을 보고 뜻 카드를 골라요. 왜 이런 곳을 정해 지키는지 생각해 보아요.',
          demo: { tool: 'wordcards', options: { mode: 'pick', basket: '천연보호구역의 뜻', cards: [{ id: 'keep', text: '자연을 아끼며 지키는 곳' }, { id: 'none', text: '아무도 못 가는 곳' }, { id: 'trash', text: '쓰레기를 모으는 곳' }], shuffle: false }, sequence: [{ pick: ['keep'] }] },
          art: { draw: 'a paper signboard standing on a rocky paper island with a seabird and a small purple flower beside it, blue paper waves around', banner: '천연보호구역', extra: [{ motif: 'bird', x: 340, y: 96 }] },
        },
        notes: '표지판은 교구가 그리지 못하므로 화면이나 칠판에 보호구역 표지판 사진·그림을 따로 보인다. 지정 연도·번호는 확인한 자료에서만 말한다.',
      }),
      C({
        id: 'dokdo.e34.g4-protect.intro.map', type: 'intro', title: '보호받는 곳 지도에 표시',
        method: '보호받는 곳 지도에 표시', tool: 'map', minutes: 6,
        levels: { easy: '바닷새 쉼터·해국 바위틈 2곳에 핀이 꽂히는 모습을 본다.', base: '3곳(바닷새·해국·땅채송화)에 핀이 꽂히는 모습을 보고 무엇이 사는지 말한다.', challenge: '4곳(섬기린초까지)을 보고, 두 섬 어디에나 지킬 것이 있다는 것을 짝과 말한다.' },
        intro: {
          teacher: '"독도에서 보호받는 것은 무엇일까요?" 대답을 듣고(기다릴 반응: "새요", "꽃이요") 시연 단추로 독도 확대 지도의 바닷새 쉼터와 바위틈 식물 자리에 핀이 꽂히는 모습을 보인다. 지도의 자리는 이해를 돕는 그림이고 실제 둥지 자리를 그린 것은 아니라고 밝힌다. "바위는 지킬 것이 아니에요"라는 대답에는 "화산이 만든 바위의 모습도 소중한 자연이에요"라고 짚는다.',
          student: '독도 확대 지도에서 보호받는 자연이 있는 곳을 찾아요. 동도와 서도 어디에 무엇이 있는지 말해 보아요.',
          demo: { tool: 'map', options: DK([NAT.bird, NAT.aster, NAT.sedum, NAT.kirin]), sequence: [{ pin: [1, 1] }, { pin: [2, 2] }, { pin: [3, 1] }, { pin: [4, 2] }] },
          art: { draw: 'a paper map of two rocky islets with tiny paper seabirds, purple asters and yellow sedum flowers tucked into the rock crevices', banner: '지켜야 할 자연', extra: [{ motif: 'bird', x: 120, y: 100 }] },
        },
      }),
      C({
        id: 'dokdo.e34.g4-protect.activity.why', type: 'activity', title: '보호하는 까닭 원인·결과 잇기',
        method: '보호하는 까닭 원인·결과 잇기', tool: 'emotion', minutes: 14,
        levels: { easy: '원인 카드와 결과 카드 2짝을 잇고, 놓으면 바로 맞는지 알려 준다.', base: '3짝을 잇는다.', challenge: '4짝과 남는 카드 한 장을 가려 잇는다.' },
        activity: {
          title: '보호하는 까닭 원인·결과 잇기', tool: 'emotion',
          teacher: '"독도의 이 모습이 있어서, 그래서 무엇을 해야 할까요?" 카드를 이을 때마다 "○○ 때문에 △△해야 해요"로 말하게 한다. \'바닷새가 많아요\'를 \'새를 잡아요\'와 잇는 학생에게는 "새가 많아서 지키는 거예요, 잡는 거예요?"라고 묻는다. 셋째 문항에서 보호구역을 출입 금지로만 여기는 친구에게 해 줄 말을 고르게 한다.',
          task: '독도의 자연(원인)과 지켜야 할 일(결과)을 잇고, 보호구역의 뜻을 바르게 말해요.', levels: CARD_LV,
          items: [
            MATCH('원인 카드에 결과 카드를 이어요.', {}, [['바닷새가 많이 깃들어요', '둥지 가까이 안 가요'], ['바위틈에 식물이 자라요', '식물을 밟지 않아요'], ['화산이 만든 바위예요', '돌을 가져가지 않아요'], ['바닷속 생물이 많아요', '바다를 깨끗이 해요']], 2, 3, '새를 잡아 길러요', 0.2),
            SORT('독도의 자연과 그래서 할 일을 나누어요.', { mode: 'sort' }, [{ id: 'nat', label: '독도의 자연' }, { id: 'do', label: '그래서 할 일' }],
              [['괭이갈매기 둥지', '해국 바위틈'], ['멀리서 지켜봐요', '정해진 길로 다녀요']], 1, [['깎인 바위'], ['쓰레기는 되가져가요']], 0.2),
            { prompt: '친구 말에 알맞게 대답해요.', toolOptions: { mode: 'branch', situation: '친구가 "보호구역이면 아무도 못 가는 곳이지?" 해요.', who: '친구', choices: [{ id: 'rule', text: '약속을 지키며 아끼는 곳이야', result: '친구가 고개를 끄덕여요.' }, { id: 'yes', text: '응, 아무도 못 가', result: '친구가 잘못 알게 돼요.', why: '보호구역은 약속을 지키며 아끼는 곳이에요.' }, { id: 'any', text: '마음대로 해도 돼', result: '자연이 망가질 수 있어요.', why: '보호구역에서는 정해진 약속을 지켜요.' }] }, target: { choice: 'rule' }, difficulty: 0.2,
              levels: { easy: { prompt: '친구 말에 알맞게 대답해요(보기 2개).', toolOptions: { choices: [{ id: 'rule', text: '약속을 지키며 아끼는 곳이야', result: '친구가 고개를 끄덕여요.' }, { id: 'yes', text: '응, 아무도 못 가', result: '친구가 잘못 알게 돼요.', why: '보호구역은 약속을 지키며 아끼는 곳이에요.' }] }, target: { choice: 'rule' } } },
              conclude: '독도의 생물과 바위는 한번 망가지면 되돌리기 어려워서 천연보호구역으로 지켜요.' },
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸을 채워요.', text: '독도는 ___보호구역으로 지정되어 생물과 바위를 지켜요.', answer: '천연' }] },
      }),
      C({
        id: 'dokdo.e34.g4-protect.activity.rule', type: 'activity', title: '보호구역 약속 지켜요·안 돼요',
        method: '보호구역 약속 좋아요·안돼요', tool: 'sortboard', minutes: 13,
        levels: { easy: '행동 카드 4장을 지켜요·안 돼요로 나누고, 틀린 바구니에 넣으면 바로 알려 준다.', base: '카드 6장을 나눈 뒤 확인한다.', challenge: '카드 8장을 나누고, 안 돼요 카드마다 까닭을 짝에게 말한다.' },
        activity: {
          title: '보호구역 약속 지켜요·안 돼요', tool: 'sortboard',
          teacher: '"이 행동을 모두가 하면 독도는 어떻게 될까요?" 카드를 넣을 때마다 까닭을 말하게 한다. \'새에게 먹이를 줘요\'를 지켜요에 넣는 학생에게는 "사람이 주는 먹이에 길들면 새는 어떻게 될까요?"라고 묻는다. \'예쁜 돌 하나쯤\'이라는 말에는 "모두가 하나씩 가져가면 바위는 어떻게 될까요?"라고 되묻는다.',
          task: '천연보호구역에서 하는 행동 카드를 지켜요·안 돼요 바구니에 나누어요.', levels: BOARD_LV,
          items: [
            SORT('땅에서 하는 행동을 나누어요.', {}, ['지켜요', '안 돼요'],
              [['정해진 길로 다녀요', '쓰레기는 되가져가요', '바위를 눈으로만 봐요'], ['돌을 기념품으로 가져가요', '꽃을 꺾어요', '바위에 낙서해요']], 2,
              [['안내하는 분 말을 들어요'], ['길 밖 풀숲에 들어가요']], 0.2),
            SORT('바닷새 곁에서 하는 행동을 나누어요.', {}, ['지켜요', '안 돼요'],
              [['멀리서 지켜봐요', '조용히 말해요', '둥지를 피해 걸어요'], ['과자를 던져 줘요', '새를 쫓아가요', '알을 만져 봐요']], 2,
              [['사진은 멀리서 찍어요'], ['크게 소리쳐요']], 0.25),
            SORT('바다에서 하는 행동을 나누어요.', {}, ['지켜요', '안 돼요'],
              [['비닐을 바다에 안 버려요', '배에서 쓰레기를 모아요', '해조류를 눈으로 봐요'], ['병을 바다에 던져요', '미역을 마구 뜯어요', '전복을 가져가요']], 2,
              [['바닷물을 깨끗이 지켜요'], ['남은 음식을 버려요']], 0.25,
              { conclude: '보호구역의 약속은 독도의 생물과 바위를 오래 지키기 위한 것이에요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '안 돼요 행동과 까닭을 써요.', columns: ['안 돼요', '까닭'], cells: [['돌을 가져가요', ''], ['과자를 던져 줘요', '']], answer: '돌도 소중한 자연이라서, 새의 건강을 해쳐서' }] },
      }),
      C({
        id: 'dokdo.e34.g4-protect.activity.choose', type: 'activity', title: '방문객이 되어 행동 고르기',
        method: '방문객이 되어 행동 고르기', tool: 'emotion', minutes: 14,
        levels: { easy: '장면마다 보기 2개 가운데 행동을 고르고 결과를 바로 본다.', base: '장면마다 보기 3개 가운데 고르고 결과를 본다.', challenge: '보기 3개에서 고르고 결과는 맞힌 뒤에만 보이며, 세 장면을 이어 짝에게 말한다.' },
        activity: {
          title: '방문객이 되어 행동 고르기', tool: 'emotion',
          teacher: '"내가 독도에 간 방문객이라면 어떻게 할까요?" 고를 때마다 결과 글을 소리 내어 읽고, 다른 보기를 골랐다면 어땠을지 견주게 한다. 둥지에 가까이 가는 보기를 고른 학생을 나무라지 않고 "새는 어떤 마음일까요? 결과를 함께 읽어 봐요"라고 되묻는다. 장면 속 방문객 \'한별\'은 가상의 인물이다.',
          task: '독도에 간 장면을 읽고 행동을 골라 이어지는 결과를 보아요.', levels: BRANCH_LV,
          items: [
            { prompt: '한별이가 괭이갈매기 둥지를 보았어요.', toolOptions: { mode: 'branch', situation: '선착장 옆 바위에 괭이갈매기 둥지가 보여요.', who: '한별', choices: [{ id: 'far', text: '멀리서 조용히 봐요', result: '어미 새가 둥지를 떠나지 않아요.', mood: '편안함' }, { id: 'near', text: '가까이 가서 찍어요', result: '어미 새가 놀라 날아가요.', mood: '걱정', why: '둥지 가까이 가면 새가 놀라요.' }, { id: 'touch', text: '알을 만져 봐요', result: '알이 다칠 수 있어요.', mood: '걱정', why: '알은 만지지 않아요.' }] }, target: { choice: 'far' }, difficulty: 0.2,
              levels: { easy: { prompt: '한별이가 둥지를 보았어요(보기 2개).', toolOptions: { choices: [{ id: 'far', text: '멀리서 조용히 봐요', result: '어미 새가 둥지를 떠나지 않아요.', mood: '편안함' }, { id: 'near', text: '가까이 가서 찍어요', result: '어미 새가 놀라 날아가요.', mood: '걱정', why: '둥지 가까이 가면 새가 놀라요.' }] }, target: { choice: 'far' } } } },
            { prompt: '한별이가 예쁜 돌을 보았어요.', toolOptions: { mode: 'branch', situation: '바닷가에 동글동글 예쁜 돌이 있어요.', who: '한별', choices: [{ id: 'photo', text: '사진으로만 남겨요', result: '돌이 그 자리에 남아요.', mood: '뿌듯함' }, { id: 'take', text: '하나만 가져가요', result: '모두 가져가면 바위가 줄어요.', mood: '걱정', why: '돌도 보호구역의 자연이에요.' }, { id: 'throw', text: '바다로 던져요', result: '돌이 제자리를 잃어요.', mood: '속상함', why: '자연은 있는 그대로 둬요.' }] }, target: { choice: 'photo' }, difficulty: 0.2,
              levels: { easy: { prompt: '한별이가 예쁜 돌을 보았어요(보기 2개).', toolOptions: { choices: [{ id: 'photo', text: '사진으로만 남겨요', result: '돌이 그 자리에 남아요.', mood: '뿌듯함' }, { id: 'take', text: '하나만 가져가요', result: '모두 가져가면 바위가 줄어요.', mood: '걱정', why: '돌도 보호구역의 자연이에요.' }] }, target: { choice: 'photo' } } } },
            { prompt: '한별이 손에 과자 봉지가 남았어요.', toolOptions: { mode: 'branch', situation: '간식을 먹고 빈 과자 봉지가 남았어요.', who: '한별', choices: [{ id: 'bag', text: '가방에 넣어 가져가요', result: '바다와 바위가 깨끗해요.', mood: '뿌듯함' }, { id: 'rock', text: '바위틈에 끼워 둬요', result: '바람에 날려 바다로 가요.', mood: '걱정', why: '쓰레기는 되가져가요.' }, { id: 'feed', text: '과자를 새에게 줘요', result: '새가 사람 먹이에 길들어요.', mood: '걱정', why: '새에게 먹이를 주지 않아요.' }] }, target: { choice: 'bag' }, difficulty: 0.25,
              levels: { easy: { prompt: '과자 봉지가 남았어요(보기 2개).', toolOptions: { choices: [{ id: 'bag', text: '가방에 넣어 가져가요', result: '바다와 바위가 깨끗해요.', mood: '뿌듯함' }, { id: 'rock', text: '바위틈에 끼워 둬요', result: '바람에 날려 바다로 가요.', mood: '걱정', why: '쓰레기는 되가져가요.' }] }, target: { choice: 'bag' } } },
              conclude: '멀리서 보고, 있는 그대로 두고, 쓰레기는 되가져가면 독도의 자연을 지킬 수 있어요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '독도에 간다면 꼭 지킬 행동 하나와 그 까닭을 써요.' }] },
        notes: '장면 속 한별은 가상의 인물이다. 독도 방문이 실제로 어떤 절차로 이루어지는지는 이 활동에서 다루지 않는다.',
      }),
      C({
        id: 'dokdo.e34.g4-protect.activity.poster', type: 'activity', title: '보호구역 알림판 꾸미기',
        method: '보호구역 알림판 꾸미기', tool: 'collage', minutes: 13,
        levels: { easy: '새·꽃 조각과 약속 글 조각을 모두 3조각 붙인다.', base: '모두 5조각 붙인다.', challenge: '5조각을 붙이고 약속 글 조각 2개에 넣을 약속 두 가지를 짝에게 말한다.' },
        activity: {
          title: '보호구역 알림판 꾸미기', tool: 'collage',
          teacher: '"알림판을 보는 사람이 무엇을 지켜야 하는지 한눈에 알 수 있게 꾸며요." 나뭇잎·하트 조각은 꽃과 새, 긴 네모 조각은 약속 글 자리로 쓴다고 약속한다. 조각만 많이 붙이는 학생에게는 "약속 글 자리는 어디인가요?"라고 묻는다. 다 꾸민 뒤 약속 글 자리에 쓸 말을 활동지에 쓴다.',
          task: '새·꽃 조각과 약속 글 조각으로 천연보호구역 알림판을 꾸며요.', levels: PLAIN_LV,
          items: [
            { prompt: '나뭇잎 조각으로 바위틈 꽃을 붙여요.', toolOptions: { shapes: ['leaf', 'heart', 'rect', 'circle', 'triangle'], colors: ['보라', '노랑', '하양', '초록', '갈색'], sizes: ['s', 'm', 'l'] }, target: { has: [{ shape: 'leaf', min: 2 }] }, difficulty: 0.1 },
            { prompt: '긴 네모 조각으로 약속 글 자리를 붙여요.', toolOptions: { shapes: ['leaf', 'heart', 'rect', 'circle', 'triangle'], colors: ['보라', '노랑', '하양', '초록', '갈색'], sizes: ['s', 'm', 'l'] }, target: { has: [{ shape: 'rect', min: 1 }, { shape: 'leaf', min: 1 }] }, difficulty: 0.15,
              levels: { challenge: { prompt: '약속 글 자리 2개와 꽃 조각을 붙여요.', target: { has: [{ shape: 'rect', min: 2 }, { shape: 'leaf', min: 1 }] } } } },
            MAKE('새·꽃·약속 조각으로 알림판을 완성해요.', { shapes: ['leaf', 'heart', 'rect', 'circle', 'triangle'], colors: ['보라', '노랑', '하양', '초록', '갈색'], sizes: ['s', 'm', 'l'] }, ['지킬 약속을 정했어요'], '약속 두 가지를 짝에게 말했어요', [3, 5, 5], 0.1,
              { conclude: '알림판은 누구나 약속을 한눈에 알 수 있게 해 줘요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '알림판의 약속 글 자리에 쓸 말을 써요.', columns: ['약속', '까닭'], cells: [['', ''], ['', '']], answer: '(예) 돌을 가져가지 않아요 · 돌도 소중한 자연이라서' }] },
      }),
      C({
        id: 'dokdo.e34.g4-protect.wrap.pair', type: 'wrap', title: '짝과 약속 하나씩 말하기',
        method: '짝과 약속 하나씩 말하기', tool: 'timer', minutes: 7,
        levels: { easy: '짝과 번갈아 약속 1개씩 말하고 점검 칸 2개에 표시한다.', base: '약속 2개씩 말하고 점검 칸 3개에 표시한다.', challenge: '약속마다 까닭까지 말하고 점검 칸 4개에 표시한다.' },
        wrap: {
          teacher: '"\'독도를 지키려고 나는 ○○할게\' 틀로 짝과 번갈아 말해요." 짝의 약속을 따라 하지 말고 새로운 약속을 말하게 한다. "독도에 못 가니까 할 게 없어요"라는 학생에게는 "학교에서 비닐을 줄이는 것도 바다를 지키는 일이에요"라고 짚는다. 출구 2번에서 \'아무도 못 가는 곳\'을 고른 학생에게는 보호구역의 뜻을 다시 묻는다.',
          exitTicket: [
            SELF('약속 말하기 점검', ['약속 1개를 말했어요', '짝의 약속을 들었어요', '약속 2개를 말했어요', '약속의 까닭까지 말했어요']),
            { type: 'choice', prompt: '천연보호구역은 어떤 곳인가요?', options: ['약속을 지키며 자연을 아끼는 곳', '아무도 못 가는 곳', '마음대로 해도 되는 곳'], answer: 0, difficulty: 0.15, explain: '정해진 약속을 지키며 자연을 아끼는 곳이에요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '독도를 지키는 약속',
          items: [
            { type: 'blank', prompt: '빈칸에 내 약속을 써요.', text: '독도를 지키려고 나는 ___할게요.', answer: '(예) 쓰레기를 되가져가기' },
            { type: 'choice', prompt: '보호구역에서 알맞은 행동은?', options: ['새를 멀리서 봐요', '돌을 가져가요', '꽃을 꺾어요'], answer: '새를 멀리서 봐요' },
          ],
          easy: { note: '알림판을 보며 써요.', items: [{ type: 'choice', prompt: '지켜요 행동은?', options: ['쓰레기를 되가져가요', '꽃을 꺾어요'], answer: '쓰레기를 되가져가요' }] },
        },
      }),
      C({
        id: 'dokdo.e34.g4-protect.wrap.sum', type: 'wrap', title: '까닭 한 문장 고르기',
        method: '까닭 한 문장 고르기', tool: 'wordcards', minutes: 7,
        levels: { easy: '빈칸 하나에 보기 2개 가운데 알맞은 까닭을 넣는다.', base: '빈칸 하나에 보기 3개 가운데 넣는다.', challenge: '빈칸 두 개에 까닭 두 가지를 넣는다.' },
        wrap: {
          teacher: '"독도를 왜 천연보호구역으로 지킬까요? 한 문장으로 말해 볼까요?" 빈칸 문장을 함께 읽는다. \'사람이 못 가서\'를 넣는 학생에게는 "보호구역은 어떤 곳이었지요?"라고 다시 묻는다. 도전 단계는 생물과 바위, 두 가지 까닭을 함께 말하게 한다.',
          exitTicket: [
            EX('wordcards', FILLN('빈칸에 알맞은 까닭 카드를 넣어요.', null, [['독도를 보호하는 까닭은 ___', '생물이 많이 살아서'], ['또 바위가 ___', '되돌리기 어려워서']], ['사람이 못 가서', '심심해서', '돌이 많아서'], 1, 1, 0.15, {}, [1, 2])),
            { type: 'choice', prompt: '천연보호구역 독도에서 바른 행동은?', options: ['쓰레기를 되가져가요', '꽃을 꺾어 가요', '새에게 과자를 줘요'], answer: 0, difficulty: 0.15, explain: '독도의 자연을 있는 그대로 두는 행동이 바른 행동이에요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '독도를 지키는 까닭',
          items: [
            { type: 'blank', prompt: '빈칸을 채워요.', text: '독도의 생물과 바위는 한번 망가지면 ___ 어려워서 보호해요.', answer: '되돌리기' },
            { type: 'short', prompt: '독도를 보호하는 까닭을 한 문장으로 써요.' },
          ],
          easy: { note: '오늘 고른 카드를 떠올려요.', items: [{ type: 'choice', prompt: '독도를 보호하는 까닭은?', options: ['소중한 자연이라서', '심심해서'], answer: '소중한 자연이라서' }] },
        },
      }),
    );
  }

  // ======================================================================================================
  // 4학년 · 바닷새와 바위섬 식물 (초 내용체계: 자연환경 — 생물 이름은 g4-cc-dokdo 재료)
  // ======================================================================================================
  {
    const C = T('g4-life', 4);
    const WIND3 = [['바람 센 바위섬', 2], ['바람 중간 언덕', 4], ['바람 약한 들판', 6]];
    const GULL = [{ id: 'nest', text: '바위에 둥지를 틀어요' }, { id: 'egg', text: '알을 낳아 품어요' }, { id: 'chick', text: '새끼를 길러요' }, { id: 'leave', text: '자란 새가 떠나요' }];
    M.push(
      C({
        id: 'dokdo.e34.g4-life.intro.sound', type: 'intro', title: '새 이름 듣고 그림 고르기',
        method: '새 이름 듣고 그림 고르기', tool: 'wordcards', minutes: 6,
        levels: { easy: '새 카드 2장 가운데 선생님이 부른 이름의 카드를 고른다.', base: '새 카드 3장 가운데 고른다.', challenge: '새 카드 4장(바닷새가 아닌 새 하나 섞임) 가운데 고르고, 바닷새가 아닌 새를 가려낸다.' },
        intro: {
          teacher: '선생님이 "괭이갈매기!" 하고 이름을 부르면 학생은 그 카드를 손가락으로 가리킨다. 시연 단추로 괭이갈매기·바다제비·슴새 카드가 바구니에 담기는 모습을 보인다. "독도에는 갈매기만 있어요"라는 대답에는 "바다제비와 슴새처럼 바다 위에서 지내다 독도에서 새끼를 기르는 새도 있어요"라고 알려 준다. 참새 카드를 담는 학생에게는 "참새는 바다 위에서 먹이를 찾을까요?"라고 묻는다. 새 사진이나 울음소리 자료는 교사가 따로 보이거나 들려준다.',
          student: '선생님이 부르는 바닷새 이름을 듣고 알맞은 카드를 골라요. 독도의 바닷새가 아닌 새도 찾아보아요.',
          demo: { tool: 'wordcards', options: { mode: 'pick', basket: '독도의 바닷새', cards: [{ id: 'gull', text: '괭이갈매기', motif: 'bird' }, { id: 'sparrow', text: '참새', motif: 'bird' }, { id: 'petrel', text: '바다제비', motif: 'bird' }, { id: 'shear', text: '슴새', motif: 'bird' }], shuffle: false }, sequence: [{ pick: ['gull'] }, { pick: ['gull', 'petrel', 'shear'] }] },
          art: { draw: 'three paper seabirds flying over a rocky paper islet and blue paper waves, one white gull, one small dark petrel and one long-winged shearwater', banner: '독도의 바닷새', extra: [{ motif: 'bird', x: 120, y: 100 }] },
        },
        notes: '이 교구는 한국어 이름을 소리 내어 읽지 않는다(영어 발음 교구). 이름은 교사가 읽어 준다.',
      }),
      C({
        id: 'dokdo.e34.g4-life.intro.wind', type: 'intro', title: '바람 센 곳 식물 키 어림하기',
        method: '바람 센 곳 식물 키 어림하기', tool: 'chart', minutes: 6,
        levels: { easy: '두 칸(바람 센 바위섬·바람 약한 들판) 그림그래프에서 키가 더 낮은 쪽을 고른다.', base: '세 칸 그림그래프에서 가장 낮은 쪽을 고른다.', challenge: '고른 뒤 바람이 센 곳에서 키가 작은 까닭을 짝과 말한다.' },
        intro: {
          teacher: '"바람이 아주 센 곳에 사는 식물은 키가 클까요, 작을까요?" 대답을 듣고(기다릴 반응: "커요", "작아요") 시연 단추로 그림그래프에서 바람 센 바위섬 칸이 골라지는 모습을 보인다. 그래프는 이해를 돕는 가상 자료라고 꼭 밝힌다. "식물은 흙이 많은 곳에서만 자라요"라는 대답에는 "독도의 해국·땅채송화·섬기린초는 흙이 적은 바위틈에서 자라요"라고 알려 준다.',
          student: '그림그래프에서 바람이 센 곳 식물과 약한 곳 식물의 키를 견주어요. 왜 다를지 생각해 보아요.',
          demo: { tool: 'chart', options: { type: 'picture', mode: 'read', title: '곳에 따른 식물 키(가상)', unit: '뼘', xLabel: '자라는 곳', yLabel: '키', data: WIND3, icons: [{ value: 1, name: '1뼘' }], icon: 'circle', question: '키가 가장 낮은 곳은?', choices: WIND3.map((x) => x[0]) }, sequence: [{ pick: 0 }] },
          art: { draw: 'a paper picture graph with short paper flowers on a windy rocky islet and tall paper flowers in a calm field, paper wind swirls blowing', banner: '바람 센 곳의 식물', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '그림그래프의 키(뼘)는 이해를 돕는 가상 자료다. 독도 식물의 실제 키 수치는 쓰지 않는다. 두 칸만 보이려면(쉬움) 들판 칸만 견주어 말한다.',
      }),
      C({
        id: 'dokdo.e34.g4-life.activity.match', type: 'activity', title: '새와 특징 잇기',
        method: '새와 특징 잇기', tool: 'emotion', minutes: 14,
        levels: { easy: '바닷새와 특징 2짝을 잇고, 놓으면 바로 맞는지 알려 준다.', base: '3짝을 잇는다.', challenge: '4짝과 남는 카드 한 장을 가려 잇는다.' },
        activity: {
          title: '새와 특징 잇기', tool: 'emotion',
          teacher: '"이 새는 어떤 특징이 있었지요?" 카드를 이을 때마다 "○○는 △△해요"로 말하게 한다. 바다제비를 제비와 같은 새로 여기는 학생에게는 "이름은 닮았지만 바다 위에서 지내는 다른 새예요"라고 말해 준다. 괭이갈매기 이름의 \'괭이\'가 고양이를 뜻하는 옛말이라는 것을 알려 주면 기억하기 쉽다.',
          task: '독도의 바닷새와 특징 카드를 잇고, 바닷새가 사는 모습을 나누어요.', levels: CARD_LV,
          items: [
            MATCH('바닷새와 특징을 이어요.', {}, [['괭이갈매기', '고양이 같은 울음소리'], ['바다제비', '제비와 다른 바닷새'], ['슴새', '바다 위를 날며 지내요'], ['바닷새 모두', '바다에서 먹이를 찾아요']], 2, 3, '숲속 나무에만 살아요', 0.2),
            SORT('바닷새가 하는 일을 곳에 따라 나누어요.', { mode: 'sort' }, [{ id: 'sea', label: '바다에서' }, { id: 'rock', label: '바위섬에서' }],
              [['먹이를 찾아요', '물 위를 날아요'], ['둥지를 틀어요', '새끼를 길러요']], 1, [['물고기를 잡아요'], ['쉬어요']], 0.2),
            { prompt: '바닷새에게 위험한 것을 골라요.', toolOptions: { mode: 'branch', situation: '바다 위에 비닐봉지가 둥둥 떠 있어요.', who: '바닷새', choices: [{ id: 'eat', text: '먹이로 알고 삼킬 수 있어요', result: '그래서 비닐을 바다에 버리지 않아요.' }, { id: 'ok', text: '새에게는 아무 일 없어요', why: '바다 쓰레기는 바닷새에게 위험해요.' }, { id: 'good', text: '새 둥지 재료가 돼요', why: '비닐은 새에게 해로워요.' }] }, target: { choice: 'eat' }, difficulty: 0.25,
              conclude: '바닷새는 바다에서 먹이를 찾고 독도 바위섬에서 둥지를 틀어 새끼를 길러요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '독도의 바닷새와 특징을 써요.', columns: ['바닷새', '특징'], cells: [['괭이갈매기', ''], ['바다제비', '']], answer: '고양이 같은 울음소리, 제비와 다른 바닷새' }] },
      }),
      C({
        id: 'dokdo.e34.g4-life.activity.plant', type: 'activity', title: '식물과 살아가는 모습 잇기',
        method: '식물과 살아가는 모습 잇기', tool: 'sortboard', minutes: 13,
        levels: { easy: '바구니 2칸(해국·땅채송화)에 카드를 나누고, 틀리면 바로 알려 준다.', base: '바구니 3칸(섬기린초까지)에 카드를 나눈다.', challenge: '3칸에 나누고, 어느 식물에도 맞지 않는 틀린 카드를 빼고 둔다.' },
        activity: {
          title: '식물과 살아가는 모습 잇기', tool: 'sortboard',
          teacher: '"흙이 적고 바닷바람이 센 독도에서 이 식물은 어떻게 살아갈까요?" 이름의 뜻으로 기억하게 한다(해국: 바다의 국화, 땅채송화: 땅에 붙어 자라는 채송화, 섬기린초: 섬에서 자라는 기린초). \'키가 커요\'를 넣는 학생에게는 "바람이 셀 때 키 큰 식물에게 무슨 일이 생길까요?"라고 묻는다. 식물 사진은 교사가 따로 보인다.',
          task: '해국·땅채송화·섬기린초 바구니에 살아가는 모습 카드를 나누어요.', levels: BOARD_LV,
          items: [
            { prompt: '식물 이름 바구니에 카드를 나누어요.', toolOptions: { slots: ['해국', '땅채송화', '섬기린초'], cards: ['바다의 국화라는 이름', '땅에 낮게 붙어 자라요', '이름에 섬이 들어가요', '연보라 꽃이 피어요', '잎이 통통해요', '울릉도·독도에서 자라요'] },
              target: { sort: { 해국: ['바다의 국화라는 이름', '연보라 꽃이 피어요'], 땅채송화: ['땅에 낮게 붙어 자라요', '잎이 통통해요'], 섬기린초: ['이름에 섬이 들어가요', '울릉도·독도에서 자라요'] } }, difficulty: 0.25,
              levels: {
                easy: { prompt: '해국과 땅채송화 바구니에 카드를 나누어요(4장).', toolOptions: { slots: ['해국', '땅채송화'], cards: ['바다의 국화라는 이름', '땅에 낮게 붙어 자라요', '연보라 꽃이 피어요', '잎이 통통해요'] }, target: { sort: { 해국: ['바다의 국화라는 이름', '연보라 꽃이 피어요'], 땅채송화: ['땅에 낮게 붙어 자라요', '잎이 통통해요'] } } },
                challenge: { prompt: '틀린 카드는 빼고 바구니 3칸에 나누어요.', toolOptions: { more: ['키 큰 나무예요'] } },
              } },
            SORT('바위섬과 들판의 모습을 나누어요.', {}, ['바위섬 독도', '흙 많은 들판'],
              [['흙이 적어요', '바닷바람이 세요', '바위틈이 많아요'], ['흙이 많아요', '바람이 약해요', '키 큰 풀이 많아요']], 2,
              [['바닷물이 튀어요'], ['물이 고여요']], 0.2),
            SORT('바위섬 식물이 하는 일을 나누어요.', {}, ['식물이 하는 일', '하지 않는 일'],
              [['흙을 붙잡아요', '곤충의 쉼터가 돼요', '새의 둥지 둘레가 돼요'], ['바위를 깎아요', '바닷물을 데워요', '파도를 만들어요']], 2,
              [['섬을 푸르게 해요'], ['바람을 만들어요']], 0.25,
              { conclude: '해국·땅채송화·섬기린초는 흙이 적고 바람이 센 바위틈에서 낮게 자라며 섬의 흙을 붙잡아요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '식물 이름의 뜻을 써요.', columns: ['식물', '이름의 뜻'], cells: [['해국', ''], ['땅채송화', '']], answer: '바다의 국화, 땅에 붙어 자라는 채송화' }] },
      }),
      C({
        id: 'dokdo.e34.g4-life.activity.why', type: 'activity', title: '바닷새가 독도에 오는 까닭',
        method: '바닷새가 독도에 오는 까닭', tool: 'mindmap', minutes: 14,
        levels: { easy: '가지 2개(먹이·둥지 자리)에 까닭 카드를 붙이고, 놓으면 바로 맞는지 알려 준다.', base: '가지 3개(먹이·둥지 자리·쉼터)에 카드를 붙인다.', challenge: '가지마다 근거 카드를 잇고, 근거가 아닌 카드를 가려낸다.' },
        activity: {
          title: '바닷새가 독도에 오는 까닭', tool: 'mindmap',
          teacher: '"바닷새는 왜 하필 독도에 모일까요?" 가운데 \'바닷새\'에서 가지를 따라 까닭을 말하게 한다. \'사람이 먹이를 줘서\'를 붙이는 학생에게는 "독도에서는 먹이를 주지 않기로 약속했지요?"라고 묻는다. 먹이가 많은 까닭은 다음 주제(난류와 한류)에서 더 알아본다고 예고한다.',
          task: '가운데 "바닷새"에서 뻗은 가지에 독도에 오는 까닭 카드를 붙여요.', levels: CARD_LV,
          items: [
            { prompt: '바닷새가 독도에 오는 까닭을 가지에 붙여요.', toolOptions: { mode: 'sort', topic: '바닷새', slots: ['먹이', '둥지 자리', '쉼터'], cards: ['둘레 바다에 물고기가 많아요', '바위 위가 넓어요', '바다 한가운데 섬이에요', '작은 바다 생물이 많아요', '바위틈이 있어요', '날다 쉬어 갈 수 있어요', '사람이 먹이를 줘요'] },
              target: { sort: { 먹이: ['둘레 바다에 물고기가 많아요', '작은 바다 생물이 많아요'], '둥지 자리': ['바위 위가 넓어요', '바위틈이 있어요'], 쉼터: ['바다 한가운데 섬이에요', '날다 쉬어 갈 수 있어요'] } }, difficulty: 0.25,
              levels: {
                easy: { prompt: '먹이와 둥지 자리 가지에 카드를 붙여요(4장).', toolOptions: { slots: ['먹이', '둥지 자리'], cards: ['둘레 바다에 물고기가 많아요', '바위 위가 넓어요', '작은 바다 생물이 많아요', '바위틈이 있어요'] }, target: { sort: { 먹이: ['둘레 바다에 물고기가 많아요', '작은 바다 생물이 많아요'], '둥지 자리': ['바위 위가 넓어요', '바위틈이 있어요'] } } },
              } },
            MATCH('까닭과 근거 카드를 이어요.', { topic: '까닭의 근거' }, [['먹이가 많아요', '두 바닷물이 만나요'], ['둥지 틀기 좋아요', '바위섬이에요'], ['방해가 적어요', '보호구역이에요']], 2, 3, '사람이 먹이를 줘요', 0.25,
              { hints: ['까닭마다 그렇게 말할 수 있는 근거를 찾아요.'] }),
            PICK('바닷새가 독도에 오는 까닭으로 맞는 것만 골라요.', { topic: '맞는 까닭', basket: '맞는 까닭' },
              [{ id: 'food', text: '먹이가 많아서', ok: true }, { id: 'feed', text: '과자를 줘서' }, { id: 'nest', text: '둥지 틀 바위가 있어서', ok: true }, { id: 'warm', text: '늘 따뜻해서' }],
              ['food', 'feed'], [{ id: 'rest', text: '바다 위 쉼터라서', ok: true }, { id: 'tree', text: '큰 숲이 있어서' }], 0.25,
              { conclude: '먹이가 많은 바다와 둥지를 틀 바위가 바닷새를 독도로 불러요.' }),
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸을 채워요.', text: '바닷새는 ___가 많은 바다와 ___를 틀 바위가 있어 독도에 와요.', answer: '먹이, 둥지' }] },
        notes: '근거 카드의 \'두 바닷물이 만나요\'는 다음 주제(g4-sea 난류와 한류)와 이어진다. \'늘 따뜻해서\'처럼 확인하지 않은 까닭은 고르지 않게 한다.',
      }),
      C({
        id: 'dokdo.e34.g4-life.activity.cycle', type: 'activity', title: '괭이갈매기 한 해 차례 놓기',
        method: '괭이갈매기 한 해 차례 놓기', tool: 'lifecycle', minutes: 13,
        levels: { easy: '한 해 장면 3장(둥지·새끼·떠나기)을 고리에 차례로 놓고, 놓으면 바로 맞는지 알려 준다.', base: '장면 4장을 차례로 놓는다.', challenge: '장면 4장을 놓고 장면마다 계절 카드를 잇는다.' },
        activity: {
          title: '괭이갈매기 한 해 차례 놓기', tool: 'lifecycle',
          teacher: '"괭이갈매기는 한 해 동안 독도에서 무엇을 할까요?" 둥지 틀기에서 시작해 차례를 놓게 한다. 새끼 기르기를 알 낳기보다 앞에 두는 학생에게는 "새끼는 어디에서 나올까요?"라고 묻는다. 계절은 대략의 흐름(봄에 둥지·알, 여름에 새끼)만 말하고 정확한 날짜는 말하지 않는다.',
          task: '괭이갈매기의 한 해를 고리 위에 차례대로 놓고, 장면과 계절을 이어요.', levels: CARD_LV,
          items: [
            ORD('괭이갈매기의 한 해를 차례대로 놓아요.', { center: '괭이갈매기의 한 해', cycle: true }, GULL, [0, 2, 3], { id: 'tree', text: '나무에 집을 지어요', why: '괭이갈매기는 바위섬에 둥지를 틀어요.' }, 0.2, {}, true),
            ORD('새끼가 자라는 차례를 놓아요.', { center: '새끼가 자라요', cycle: false }, [{ id: 'hatch', text: '알에서 깨어나요' }, { id: 'fed', text: '어미가 먹이를 줘요' }, { id: 'wing', text: '날개가 자라요' }, { id: 'fly', text: '스스로 날아요' }], [0, 1, 3], { id: 'swim', text: '물고기처럼 헤엄쳐요', why: '새끼 새는 날개가 자라 날게 돼요.' }, 0.25, {}, true),
            MATCH('장면과 계절을 이어요.', { center: '장면과 계절', cycle: false, spin: false }, [['둥지 틀고 알 낳기', '봄'], ['새끼 기르기', '여름'], ['자란 새가 떠나기', '가을']], 2, 3, '한겨울 눈 속', 0.25,
              { conclude: '괭이갈매기는 봄에 독도 바위에 둥지를 틀고 알을 낳아, 여름 동안 새끼를 길러요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '괭이갈매기의 한 해를 차례로 써요.', columns: ['차례', '하는 일'], cells: [['1', ''], ['2', ''], ['3', ''], ['4', '']], answer: '둥지 틀기, 알 낳기, 새끼 기르기, 떠나기' }] },
      }),
      C({
        id: 'dokdo.e34.g4-life.wrap.book', type: 'wrap', title: '도감 한 쪽 꾸미기',
        method: '도감 한 쪽 꾸미기', tool: 'collage', minutes: 7,
        levels: { easy: '생물 1종을 고르고 조각 2개 이상으로 도감 쪽을 꾸민다.', base: '생물 2종을 조각 4개 이상으로 꾸민다.', challenge: '2종을 꾸미고 사는 곳(바다·바위틈) 조각까지 붙인다.' },
        wrap: {
          teacher: '"오늘 알게 된 생물을 도감 한 쪽에 꾸며요. 이름 자리도 꼭 만들어요." 하트·나뭇잎 조각은 생물, 긴 네모 조각은 이름 자리라고 약속한다. 그림만 꾸미는 학생에게는 "이 쪽을 본 친구가 생물 이름을 알 수 있을까요?"라고 묻는다. 출구 2번으로 바위틈에서 자라는 식물을 다시 고른다.',
          exitTicket: [
            { type: 'tool', tool: 'collage', prompt: '생물 조각과 이름 자리로 도감 쪽을 꾸며요.', options: { shapes: ['leaf', 'heart', 'circle', 'rect', 'triangle'], colors: ['보라', '노랑', '하양', '초록', '파랑', '갈색'], sizes: ['s', 'm', 'l'] }, target: { selfCheck: ['생물을 골랐어요', '이름 자리를 만들었어요'], minPieces: 4 }, difficulty: 0.1,
              levels: { easy: { target: { selfCheck: ['생물을 골랐어요', '이름 자리를 만들었어요'], minPieces: 2 } }, challenge: { target: { selfCheck: ['생물을 골랐어요', '이름 자리를 만들었어요', '사는 곳 조각을 붙였어요'], minPieces: 5 } } } },
            { type: 'choice', prompt: '독도 바위틈에서 자라는 식물은?', options: ['해국', '벼', '소나무 숲'], answer: 0, difficulty: 0.15, explain: '해국·땅채송화·섬기린초가 독도 바위틈에서 자라요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '나의 독도 생물 도감',
          items: [
            { type: 'table', prompt: '도감 쪽에 쓸 내용을 채워요.', columns: ['이름', '사는 곳', '특징'], cells: [['', '', '']], answer: '(예) 괭이갈매기 · 독도 바위 · 고양이 같은 울음소리' },
            { type: 'draw', prompt: '도감 쪽에 들어갈 생물을 그려요.' },
          ],
          easy: { note: '한 가지 생물만 써도 돼요.', items: [{ type: 'short', prompt: '도감에 꾸민 생물의 이름을 써요.' }] },
        },
      }),
      C({
        id: 'dokdo.e34.g4-life.wrap.tell', type: 'wrap', title: '짝에게 도감 소개',
        method: '짝에게 도감 소개', tool: 'timer', minutes: 7,
        levels: { easy: '짝에게 도감 쪽을 보여 주며 특징 1개를 말하고 점검 칸 2개에 표시한다.', base: '특징 2개를 말하고 점검 칸 3개에 표시한다.', challenge: '특징과 그렇게 사는 까닭까지 말하고 점검 칸 4개에 표시한다.' },
        wrap: {
          teacher: '"\'이 생물은 ○○이고, ○○에 살아요. 특징은 ○○예요.\' 틀로 짝에게 소개해요." 소개를 듣는 짝은 궁금한 것 하나를 묻게 한다. 확인하지 않은 특징을 지어 말하는 학생에게는 "오늘 카드에서 본 특징인가요?"라고 묻는다. 출구 2번에서 \'흙이 많은 곳에서만 자라요\'를 고른 학생에게는 바위틈 식물을 다시 떠올리게 한다.',
          exitTicket: [
            SELF('도감 소개 점검', ['도감 쪽을 보여 주었어요', '특징 1개를 말했어요', '특징 2개를 말했어요', '그렇게 사는 까닭을 말했어요']),
            { type: 'choice', prompt: '독도 바위섬 식물에 대해 맞는 말은?', options: ['흙이 적은 바위틈에서도 자라요', '흙이 많은 곳에서만 자라요', '키가 아주 큰 나무예요'], answer: 0, difficulty: 0.15, explain: '바위섬 식물은 흙이 적고 바람이 센 바위틈에서 낮게 자라요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '짝에게 도감 소개',
          items: [
            { type: 'blank', prompt: '소개 틀을 채워요.', text: '이 생물은 ___이고, ___에 살아요.', answer: '(예) 해국, 독도 바위틈' },
            { type: 'short', prompt: '짝이 소개한 생물의 특징 하나를 써요.' },
          ],
          easy: { note: '도감 쪽을 보며 써요.', items: [{ type: 'choice', prompt: '독도의 바닷새는?', options: ['괭이갈매기', '참새'], answer: '괭이갈매기' }] },
        },
      }),
    );
  }

  // 두 바닷물 흐름 칸 지도 — 남쪽에서 올라오는 따뜻한 바닷물(난류)과 북쪽에서 내려오는 차가운 바닷물(한류)이 독도 둘레에서 만난다(줄인 그림)
  const CUR = {
    warm: { name: '따뜻한 바닷물', icon: 'dot', at: [4, 8] }, cold: { name: '차가운 바닷물', icon: 'dot', at: [5, 2] },
  };
  const CUR_LINES = [[[4, 8], [4, 7], [4, 6], [5, 6], [5, 5]], [[5, 2], [5, 3], [5, 4], [5, 5]]];
  const CURMAP = (more) => KOR([CUR.warm, CUR.cold, P.dokdo, P.ulleung], Object.assign({ title: '두 바닷물의 흐름(줄인 그림)', rivers: CUR_LINES }, more || {}));

  // ======================================================================================================
  // 4학년 · 난류와 한류가 만나는 바다 (초 내용체계: 자연환경)
  // ======================================================================================================
  {
    const C = T('g4-sea', 4);
    // 먹이 차례(story order): 기본 = base 장면, 쉬움 = 앞 2장, 도전 = 끝에 '사람' 장면이 붙는다
    const FOOD = (prompt, steps, last, d, more) => {
      const ids = steps.map((c) => c.id);
      const p = strip(prompt);
      return {
        prompt, toolOptions: { mode: 'order', slots: NAMES[steps.length], cards: shuffled(steps) }, target: { order: ids }, difficulty: d,
        levels: {
          easy: { prompt: `${p}(2장).`, toolOptions: { slots: NAMES[2], cards: shuffled(steps.slice(0, 2)) }, target: { order: ids.slice(0, 2) } },
          challenge: { prompt: `${p}. 사람 카드도 놓아요.`, toolOptions: { slots: NAMES[steps.length + 1], cards: shuffled(steps.concat(last)) }, target: { order: ids.concat(last.id) } },
        },
        ...more,
      };
    };
    M.push(
      C({
        id: 'dokdo.e34.g4-sea.intro.temp', type: 'intro', title: '따뜻한 물·차가운 물 나누기',
        method: '따뜻한 물·차가운 물 그림 나누기', tool: 'sortboard', minutes: 6,
        levels: { easy: '카드 4장(목욕물·얼음물·여름·겨울 바닷물)을 나누는 모습을 본다.', base: '카드 6장을 나누는 모습을 보고, 바닷물도 따뜻한 물과 차가운 물이 있다는 것을 말한다.', challenge: '나눈 뒤 \'난류\'·\'한류\'라는 바닷물 이름까지 따라 말한다.' },
        intro: {
          teacher: '"바닷물에도 따뜻한 물과 차가운 물이 있다는 것을 아나요?" 대답을 듣고(기다릴 반응: "여름 바다는 따뜻해요") 시연 단추로 카드가 따뜻한 물·차가운 물 바구니에 나뉘는 모습을 보인다. 남쪽에서 올라오는 따뜻한 바닷물을 난류, 북쪽에서 내려오는 차가운 바닷물을 한류라고 알려 준다. "차가운 바다에는 생물이 안 살아요"라는 대답에는 "차가운 물을 좋아하는 물고기도 있어요"라고 바로잡는다.',
          student: '물 그림 카드를 따뜻한 물과 차가운 물로 나누어 보아요. 바닷물에도 따뜻한 물과 차가운 물이 있는지 생각해요.',
          demo: { tool: 'sortboard', options: { slots: ['따뜻한 물', '차가운 물'], cards: ['목욕물', '얼음물', '여름 바닷물', '겨울 바닷물', '남쪽에서 온 바닷물', '북쪽에서 온 바닷물'] }, sequence: [{ sort: { '따뜻한 물': ['목욕물', '여름 바닷물', '남쪽에서 온 바닷물'], '차가운 물': ['얼음물', '겨울 바닷물', '북쪽에서 온 바닷물'] } }] },
          art: { draw: 'two paper water streams, a warm orange one flowing up from the south and a cool blue one flowing down from the north, meeting around a small rocky islet', banner: '따뜻한 물, 차가운 물', extra: [{ motif: 'wave', y: 240 }] },
        },
      }),
      C({
        id: 'dokdo.e34.g4-sea.intro.arrow', type: 'intro', title: '지도에서 두 바닷물 흐름 찾기',
        method: '지도에서 두 바닷물 흐름 찾기', tool: 'map', minutes: 6,
        levels: { easy: '두 흐름 선을 손가락으로 따라가며 만나는 칸을 함께 찾는다(핀을 꽂으면 이름이 보인다).', base: '흐름 선만 보고 두 바닷물이 만나는 칸을 찾는 모습을 본다.', challenge: '만나는 칸이 독도 둘레라는 것을 찾고, 그 바다에 물고기가 많은 까닭을 짐작해 말한다.' },
        intro: {
          teacher: '"따뜻한 바닷물은 남쪽에서, 차가운 바닷물은 북쪽에서 와요. 두 물은 어디에서 만날까요?" 두 선을 손가락으로 따라가게 한 뒤 시연 단추로 만나는 칸에 핀이 꽂히는 모습을 보인다(기다릴 반응: "독도요"). 지도의 선은 흐름을 줄여 그린 그림이라고 밝힌다. 다음 활동에서 두 바닷물이 만나는 곳에 물고기가 많은 까닭을 찾는다고 예고한다.',
          student: '지도에서 따뜻한 바닷물과 차가운 바닷물의 선을 따라가요. 두 선이 만나는 곳은 어디인지 말해 보아요.',
          demo: { tool: 'map', options: CURMAP(), sequence: [{ pin: [5, 5] }] },
          art: { draw: 'a paper map of the east sea with a warm orange paper arrow coming from the south and a cool blue paper arrow coming from the north, meeting at a small islet with many paper fish', banner: '두 바닷물이 만나요', extra: [{ motif: 'wave', y: 240 }] },
        },
      }),
      C({
        id: 'dokdo.e34.g4-sea.activity.cause', type: 'activity', title: '물고기가 많은 까닭 잇기',
        method: '물고기가 많은 까닭 잇기', tool: 'emotion', minutes: 14,
        levels: { easy: '원인과 결과 2짝을 잇고, 놓으면 바로 맞는지 알려 준다.', base: '3짝을 잇는다.', challenge: '4짝과 남는 카드 한 장을 가려 잇는다.' },
        activity: {
          title: '물고기가 많은 까닭 잇기', tool: 'emotion',
          teacher: '"두 바닷물이 만나는 곳에 왜 물고기가 많을까요?" 카드를 이을 때마다 "○○해서 △△해요"로 이어 말하게 한다. 따뜻한 물을 좋아하는 물고기와 차가운 물을 좋아하는 물고기가 함께 모인다는 점을 짚는다. 난류·한류를 거꾸로 말하는 학생에게는 "난(따뜻할 난), 한(찰 한)"으로 기억하게 한다.',
          task: '두 바닷물이 만나는 독도 바다의 원인과 결과 카드를 잇고, 난류와 한류를 구별해요.', levels: CARD_LV,
          items: [
            MATCH('원인 카드에 결과 카드를 이어요.', {}, [['두 바닷물이 만나요', '먹이가 많아져요'], ['먹이가 많아요', '물고기가 모여요'], ['좋아하는 물이 다른 물고기', '한곳에 함께 모여요'], ['물고기가 많아요', '바닷새가 먹이를 찾아요']], 2, 3, '바다가 텅 비어요', 0.2),
            SORT('난류와 한류의 모습을 나누어요.', { mode: 'sort' }, [{ id: 'warm', label: '난류' }, { id: 'cold', label: '한류' }],
              [['따뜻한 바닷물', '남쪽에서 올라와요'], ['차가운 바닷물', '북쪽에서 내려와요']], 1, [['따뜻할 난'], ['찰 한']], 0.2),
            { prompt: '친구 말에 알맞게 대답해요.', toolOptions: { mode: 'branch', situation: '친구가 "차가운 바다에는 생물이 안 살아" 해요.', who: '친구', choices: [{ id: 'live', text: '차가운 물 물고기도 살아', result: '친구가 "그렇구나" 해요.' }, { id: 'yes', text: '맞아, 아무것도 없어', why: '차가운 물을 좋아하는 생물도 살아요.' }, { id: 'warm', text: '따뜻하면 다 죽어', why: '따뜻한 물을 좋아하는 생물도 있어요.' }] }, target: { choice: 'live' }, difficulty: 0.2,
              levels: { easy: { prompt: '친구 말에 알맞게 대답해요(보기 2개).', toolOptions: { choices: [{ id: 'live', text: '차가운 물 물고기도 살아', result: '친구가 "그렇구나" 해요.' }, { id: 'yes', text: '맞아, 아무것도 없어', why: '차가운 물을 좋아하는 생물도 살아요.' }] }, target: { choice: 'live' } } },
              conclude: '난류와 한류가 만나는 독도 바다에는 좋아하는 물이 다른 물고기들이 함께 모여 물고기가 많아요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '난류와 한류를 견주어 써요.', columns: ['', '난류', '한류'], cells: [['물의 온도', '', ''], ['오는 쪽', '', '']], answer: '따뜻해요 / 차가워요, 남쪽 / 북쪽' }] },
      }),
      C({
        id: 'dokdo.e34.g4-sea.activity.food', type: 'activity', title: '바다 생물 먹이 차례 놓기',
        method: '바다 생물 먹이 차례 놓기', tool: 'story', minutes: 13,
        levels: { easy: '먹이 장면 2장(해조류→작은 동물)을 차례로 놓고, 놓으면 바로 맞는지 알려 준다.', base: '장면 3장을 먹고 먹히는 차례로 놓는다.', challenge: '장면 3장 끝에 사람 장면까지 4장을 놓는다.' },
        activity: {
          title: '바다 생물 먹이 차례 놓기', tool: 'story',
          teacher: '"누가 누구를 먹을까요? 먹히는 쪽부터 놓아요." 카드를 놓을 때마다 "○○를 △△가 먹어요"로 말하게 한다. 물고기를 맨 앞에 두는 학생에게는 "물고기는 무엇을 먹고 자랄까요?"라고 묻는다. 도전 단계의 사람 카드는 우리도 바다에서 먹을 것을 얻으니 바다를 지켜야 한다는 것과 잇는다.',
          task: '바다 생물 장면 카드를 먹히는 쪽부터 먹는 쪽 차례로 놓아요.', levels: CARD_LV,
          items: [
            FOOD('해조류부터 먹이 차례로 놓아요.', [{ id: 'weed', text: '바위의 해조류' }, { id: 'small', text: '작은 바다 동물' }, { id: 'fish', text: '물고기' }], { id: 'man', text: '사람' }, 0.2),
            FOOD('작은 생물부터 먹이 차례로 놓아요.', [{ id: 'tiny', text: '아주 작은 바다 생물' }, { id: 'sfish', text: '작은 물고기' }, { id: 'gull', text: '괭이갈매기' }], { id: 'man2', text: '사람이 바다를 지켜요' }, 0.25),
            MATCH('생물과 먹이를 이어요.', { mode: 'match' }, [['전복', '해조류를 먹어요'], ['괭이갈매기', '물고기를 먹어요'], ['물고기', '작은 동물을 먹어요']], 2, 3, '돌을 먹어요', 0.25,
              { conclude: '바다 생물은 먹고 먹히며 서로 이어져 살아요. 하나가 사라지면 다른 생물도 힘들어져요.' }),
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸을 채워요.', text: '해조류 → 작은 바다 동물 → ___', answer: '물고기' }] },
        notes: '먹이 차례는 이해를 돕는 단순한 줄이다. 실제 바다에서는 여러 생물이 그물처럼 얽혀 있다는 것을 다음 활동(먹이 그물)에서 다룬다.',
      }),
      C({
        id: 'dokdo.e34.g4-sea.activity.group', type: 'activity', title: '바다 동물·해조류 나누기',
        method: '바다 동물·해조류 나누기', tool: 'sortboard', minutes: 14,
        levels: { easy: '카드 4장을 바다 동물·해조류 바구니에 나누고, 틀리면 바로 알려 준다.', base: '카드 6장을 나눈 뒤 확인한다.', challenge: '카드 8장을 나눈다.' },
        activity: {
          title: '바다 동물·해조류 나누기', tool: 'sortboard',
          teacher: '"이 생물은 스스로 움직이나요, 바위에 붙어 자라나요?" 카드를 넣을 때마다 까닭을 말하게 한다. 전복을 해조류에 넣는 학생에게는 "전복은 천천히 기어 다니는 동물이에요"라고 말해 준다. "해조류는 물고기예요"라는 말에는 "해조류는 바다에서 자라는 풀 같은 생물이에요"라고 바로잡는다.',
          task: '바다 생물 카드를 바다 동물과 해조류 바구니에 나누어요.', levels: BOARD_LV,
          items: [
            SORT('바다 생물을 동물과 해조류로 나누어요.', {}, ['바다 동물', '해조류'],
              [['전복', '소라', '물고기'], ['미역', '다시마', '김']], 2, [['오징어'], ['바위에 붙은 풀']], 0.2),
            SORT('생물의 모습을 동물과 해조류로 나누어요.', {}, ['바다 동물', '해조류'],
              [['스스로 움직여요', '먹이를 먹어요', '헤엄치거나 기어요'], ['바위에 붙어 자라요', '바닷속 숲을 이뤄요', '풀처럼 흔들려요']], 2,
              [['껍데기가 있어요'], ['미역국 재료가 돼요']], 0.25),
            SORT('해조류 숲이 하는 일을 나누어요.', {}, ['하는 일', '하지 않는 일'],
              [['먹이가 돼요', '작은 생물이 숨어요', '알을 낳는 곳이 돼요'], ['바닷물을 데워요', '물고기를 잡아요', '바위를 깎아요']], 2,
              [['바닷속 숲이 돼요'], ['파도를 만들어요']], 0.25,
              { conclude: '해조류는 바닷속 숲을 이뤄 먹이가 되고 작은 생물이 숨는 곳이 돼요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '바다 동물이면 ○, 해조류면 △ 하세요.', columns: ['생물', '○ / △'], cells: [['전복', ''], ['미역', ''], ['소라', ''], ['다시마', '']], answer: '○, △, ○, △' }] },
        notes: '카드의 생물(전복·소라·미역 등)은 바다 생물을 나누는 예이다. 독도 바다의 생물 목록은 외교부·동북아역사재단 자료로 확인해 더한다.',
      }),
      C({
        id: 'dokdo.e34.g4-sea.activity.net', type: 'activity', title: '먹이 그물 생각그물',
        method: '먹이 그물 생각그물', tool: 'mindmap', minutes: 13,
        levels: { easy: '가운데 \'물고기\'에서 가지 2개(먹는 것·먹히는 것)에 카드를 붙인다.', base: '가지 3개(먹는 것·먹는 생물·숨는 곳)에 카드를 붙인다.', challenge: '가지 4개(사라지면 생길 일까지)에 카드를 붙인다.' },
        activity: {
          title: '먹이 그물 생각그물', tool: 'mindmap',
          teacher: '"물고기는 무엇을 먹고, 누구에게 먹힐까요?" 가지를 따라가며 "○○ → 물고기 → △△"로 말하게 한다. 한 생물만 없어지는 것은 괜찮다고 여기는 학생에게는 "해조류 숲이 사라지면 숨을 곳이 없어진 작은 물고기는 어떻게 될까요?"라고 따라가 보게 한다. 먹이 그물은 여러 줄이 얽혀 있어 하나가 끊기면 여러 생물이 힘들어진다고 짚는다.',
          task: '가운데 생물에서 뻗은 가지에 먹는 것·먹는 생물·숨는 곳 카드를 붙여요.', levels: CARD_LV,
          items: [
            { prompt: '물고기의 먹이 그물을 만들어요.', toolOptions: { mode: 'sort', topic: '물고기', slots: ['물고기가 먹는 것', '물고기를 먹는 생물', '숨는 곳'], cards: ['작은 바다 동물', '괭이갈매기', '해조류 숲', '아주 작은 생물', '사람', '바위틈', '구름'] },
              target: { sort: { '물고기가 먹는 것': ['작은 바다 동물', '아주 작은 생물'], '물고기를 먹는 생물': ['괭이갈매기', '사람'], '숨는 곳': ['해조류 숲', '바위틈'] } }, difficulty: 0.25,
              levels: {
                easy: { prompt: '물고기가 먹는 것과 먹는 생물을 붙여요(4장).', toolOptions: { slots: ['물고기가 먹는 것', '물고기를 먹는 생물'], cards: ['작은 바다 동물', '괭이갈매기', '아주 작은 생물', '사람'] }, target: { sort: { '물고기가 먹는 것': ['작은 바다 동물', '아주 작은 생물'], '물고기를 먹는 생물': ['괭이갈매기', '사람'] } } },
                challenge: { prompt: '가지 4개에 카드를 붙여요(9장).', toolOptions: { slots: ['물고기가 먹는 것', '물고기를 먹는 생물', '숨는 곳', '물고기가 사라지면'], cards: ['작은 바다 동물', '괭이갈매기', '해조류 숲', '아주 작은 생물', '사람', '바위틈', '바닷새 먹이가 줄어요', '구름', '먹을 것이 줄어요'] },
                  target: { sort: { '물고기가 먹는 것': ['작은 바다 동물', '아주 작은 생물'], '물고기를 먹는 생물': ['괭이갈매기', '사람'], '숨는 곳': ['해조류 숲', '바위틈'], '물고기가 사라지면': ['바닷새 먹이가 줄어요', '먹을 것이 줄어요'] } } },
              } },
            { prompt: '전복의 먹이 그물을 만들어요.', toolOptions: { mode: 'sort', topic: '전복', slots: ['전복이 먹는 것', '전복이 사는 곳'], cards: ['미역', '바위', '다시마', '바닷속 바위틈', '하늘', '모래사막'] },
              target: { sort: { '전복이 먹는 것': ['미역', '다시마'], '전복이 사는 곳': ['바위', '바닷속 바위틈'] } }, difficulty: 0.25,
              levels: {
                easy: { prompt: '전복이 먹는 것과 사는 곳을 붙여요(4장).', toolOptions: { cards: ['미역', '바위', '다시마', '바닷속 바위틈'] } },
                challenge: { prompt: '전복의 가지 3개에 카드를 붙여요(8장).', toolOptions: { slots: ['전복이 먹는 것', '전복이 사는 곳', '해조류가 사라지면'], cards: ['미역', '바위', '다시마', '바닷속 바위틈', '먹이가 없어져요', '하늘', '숨을 곳이 줄어요', '모래사막'] },
                  target: { sort: { '전복이 먹는 것': ['미역', '다시마'], '전복이 사는 곳': ['바위', '바닷속 바위틈'], '해조류가 사라지면': ['먹이가 없어져요', '숨을 곳이 줄어요'] } } },
              } },
            PICK('해조류 숲이 사라지면 생길 일만 골라요.', { topic: '해조류가 사라지면', basket: '생길 일' },
              [{ id: 'food', text: '전복의 먹이가 줄어요', ok: true }, { id: 'more', text: '물고기가 늘어요' }, { id: 'hide', text: '숨을 곳이 줄어요', ok: true }, { id: 'none', text: '아무 일 없어요' }],
              ['food', 'more'], [{ id: 'bird', text: '바닷새 먹이도 줄어요', ok: true }, { id: 'warm', text: '바닷물이 데워져요' }], 0.25,
              { conclude: '바다 생물은 그물처럼 이어져 있어 하나가 사라지면 여러 생물이 힘들어져요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '해조류 숲이 사라지면 어떤 일이 생길지 이어서 써요.' }] },
      }),
      C({
        id: 'dokdo.e34.g4-sea.wrap.act', type: 'wrap', title: '먹이 이어짐 역할놀이',
        method: '먹이 이어짐 역할놀이', tool: 'timer', minutes: 7,
        levels: { easy: '세 역할(해조류·작은 동물·물고기)로 줄을 잇고 점검 칸 2개에 표시한다.', base: '네 역할(바닷새까지)로 줄을 잇고 하나가 빠진 뒤를 해 보며 점검 칸 3개에 표시한다.', challenge: '빠지는 역할을 바꿔 한 번 더 해 보고 점검 칸 4개에 표시한다.' },
        wrap: {
          teacher: '모둠이 역할 이름표를 달고 털실(또는 손)로 "먹히는 쪽 → 먹는 쪽" 줄을 잇는다. "해조류가 빠지면 누구의 손이 비게 될까요?" 해조류 역할이 줄을 놓으면 이어진 친구들이 차례로 손을 내리게 한다. 줄을 세게 잡아당기지 않게 하고, 놀이 뒤 출구 2번으로 결과를 다시 고른다.',
          exitTicket: [
            SELF('먹이 이어짐 놀이 점검', ['역할을 맡아 줄을 이었어요', '먹는 쪽과 먹히는 쪽을 말했어요', '하나가 빠진 뒤를 해 보았어요', '빠지는 역할을 바꿔 보았어요']),
            { type: 'choice', prompt: '해조류가 사라지면 어떻게 될까요?', options: ['이어진 생물도 힘들어져요', '아무 일도 없어요', '물고기가 더 많아져요'], answer: 0, difficulty: 0.15, explain: '먹이로 이어진 생물이 차례로 힘들어져요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '먹이로 이어진 바다',
          items: [
            { type: 'blank', prompt: '빈칸을 채워요.', text: '해조류 → 작은 바다 동물 → ___ → 바닷새', answer: '물고기' },
            { type: 'short', prompt: '놀이에서 한 역할이 빠졌을 때 생긴 일을 써요.' },
          ],
          easy: { note: '놀이를 떠올려요.', items: [{ type: 'choice', prompt: '물고기는 무엇을 먹나요?', options: ['작은 바다 동물', '돌'], answer: '작은 바다 동물' }] },
        },
      }),
      C({
        id: 'dokdo.e34.g4-sea.wrap.sum', type: 'wrap', title: '한 문장으로 정리',
        method: '한 문장으로 정리', tool: 'wordcards', minutes: 7,
        levels: { easy: '빈칸 하나에 보기 2개 가운데 까닭 카드를 넣는다.', base: '빈칸 하나에 보기 3개 가운데 넣는다.', challenge: '빈칸 두 개에 까닭 두 가지를 넣는다.' },
        wrap: {
          teacher: '"독도 바다에 물고기가 많은 까닭을 낱말 \'만나서\'를 넣어 말해 볼까요?" 빈칸 문장을 함께 읽는다. \'차가워서\'를 넣는 학생에게는 "따뜻한 물과 차가운 물 가운데 하나만 있었나요?"라고 묻는다. 도전 단계는 먹이가 많아지는 까닭까지 두 가지를 잇게 한다.',
          exitTicket: [
            EX('wordcards', FILLN('빈칸에 알맞은 까닭 카드를 넣어요.', null, [['물고기가 많은 까닭은 ___', '두 바닷물이 만나서'], ['그래서 ___도 많아요', '먹이']], ['바닷물이 늘 같아서', '차가워서', '사람이 키워서'], 1, 1, 0.15, {}, [1, 2])),
            { type: 'choice', prompt: '난류는 어떤 바닷물인가요?', options: ['남쪽에서 오는 따뜻한 바닷물', '북쪽에서 오는 차가운 바닷물', '강에서 오는 물'], answer: 0, difficulty: 0.15, explain: '난류는 따뜻한 바닷물, 한류는 차가운 바닷물이에요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '난류와 한류가 만나는 바다',
          items: [
            { type: 'blank', prompt: '빈칸을 채워요.', text: '독도 바다는 ___와 ___가 만나 물고기가 많아요.', answer: '난류, 한류' },
            { type: 'short', prompt: '독도 바다에 물고기가 많은 까닭을 한 문장으로 써요.' },
          ],
          easy: { note: '지도의 두 흐름을 떠올려요.', items: [{ type: 'choice', prompt: '차가운 바닷물은?', options: ['한류', '난류'], answer: '한류' }] },
        },
      }),
    );
  }

  // ======================================================================================================
  // 4학년 · 독도에서 일하는 사람들의 하루 (초 내용체계: 정치·군사·경제적 가치 — 거주 갈래는 외교부 자료: 주민·독도경비대원·등대관리원)
  // ======================================================================================================
  {
    const C = T('g4-people', 4);
    const DAY = [{ id: 'note', text: '아침에 기록을 정리해요' }, { id: 'check', text: '낮에 등불과 기계를 살펴요' }, { id: 'dusk', text: '해 질 녘 불빛을 확인해요' }, { id: 'night', text: '밤새 불빛을 지켜봐요' }, { id: 'dawn', text: '해 뜨면 불빛이 꺼졌는지 봐요' }];
    // 하루 차례(timeline order): 쉬움 3장, 기본 4장(새벽 장면 뺌), 도전 5장 전부
    const DAYORD = (prompt, d, more) => {
      const p = strip(prompt);
      const pick = (idx) => idx.map((i) => DAY[i]);
      const o = (list) => ({ mode: 'order', axis: ['아침', '밤'], slots: list.length, cards: shuffled(list) });
      return {
        prompt, toolOptions: o(pick([0, 1, 2, 3])), target: { order: pick([0, 1, 2, 3]).map((c) => c.id) }, difficulty: d,
        levels: {
          easy: { prompt: `${p}(3장).`, toolOptions: o(pick([1, 2, 3])), target: { order: pick([1, 2, 3]).map((c) => c.id) } },
          challenge: { prompt: `${p}(5장).`, toolOptions: o(DAY), target: { order: DAY.map((c) => c.id) } },
        },
        ...more,
      };
    };
    M.push(
      C({
        id: 'dokdo.e34.g4-people.intro.who', type: 'intro', title: '사람과 일터 잇기',
        method: '사람 그림과 일터 잇기', tool: 'wordcards', minutes: 6,
        levels: { easy: '두 사람(경비대원·등대관리원)과 일터 카드를 잇는 모습을 본다.', base: '세 사람(주민까지)과 일터 3곳을 잇는 모습을 본다.', challenge: '이은 뒤 사람마다 하는 일 하나를 짝에게 말한다.' },
        intro: {
          teacher: '"독도에는 누가 지낼까요?" 대답을 듣고(기다릴 반응: "아무도 없어요", "군인이요") 외교부 자료에 따르면 독도에는 주민과 독도경비대원, 등대관리원 등이 지낸다고 알려 준다. 시연 단추로 사람 카드와 일터 카드가 이어지는 모습을 보인다. "독도에서는 관광 안내만 해요"라는 대답에는 "섬을 지키는 일, 배의 길을 밝히는 일도 있어요"라고 덧붙인다. 그림 속 사람은 실제 근무자가 아닌 이해를 돕는 그림이라고 밝힌다.',
          student: '사람 카드와 일터 카드를 이어 보아요. 그 사람은 독도에서 무슨 일을 할지 생각해 보아요.',
          demo: { tool: 'wordcards', options: { mode: 'match', slots: [{ id: 'guard', label: '독도경비대원' }, { id: 'keeper', label: '등대관리원' }, { id: 'res', label: '주민' }], cards: ['주민 숙소', '독도경비대', '독도 등대'], shuffle: false }, sequence: [{ match: { guard: '독도경비대', keeper: '독도 등대', res: '주민 숙소' } }] },
          art: { draw: 'three small paper figures standing on a rocky paper islet, one beside a white lighthouse, one beside a guard post and one beside a small house, blue paper waves around', banner: '독도에서 지내는 사람들', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: CALM,
      }),
      C({
        id: 'dokdo.e34.g4-people.intro.clock', type: 'intro', title: '등대지기 하루 시계 보기',
        method: '등대지기 하루 시계 보기', tool: 'clock', minutes: 6,
        levels: { easy: '정각(6시)에 바늘이 맞춰지는 모습을 보고 시각을 읽는다.', base: '30분 단위(6시 30분)로 맞춰지는 모습을 보고 시각을 읽는다.', challenge: '해 질 녘(6시 30분)과 해 뜰 녘 두 시각을 견주어 말한다.' },
        intro: {
          teacher: '"등대 불빛은 언제부터 밤바다를 비출까요?" 대답을 듣고(기다릴 반응: "밤이요", "해 질 때요") 시연 단추로 시계 바늘이 해 질 녘 6시 30분에 맞춰지는 모습을 보인다. 이 시각은 이해를 돕는 이야기 속 시각이고 계절마다 해 지는 때가 달라진다고 밝힌다. "등대는 저절로 켜져서 사람이 필요 없어요"라는 대답에는 "불빛이 늘 제대로 빛나도록 사람이 살피고 기록해요"라고 알려 준다.',
          student: '시계를 보고 해 질 녘 시각을 읽어요. 그때 등대지기는 무엇을 할지 짝에게 말해 보아요.',
          demo: { tool: 'clock', options: { minuteStep: 30 }, sequence: [{ h: 6, m: 30 }] },
          art: { draw: 'a paper lighthouse on a rocky islet at sunset with its beam starting to shine, a big paper clock face floating in the orange sky', banner: '해 질 녘 등대', extra: [{ motif: 'sun', x: 70, y: 110, s: 0.5 }] },
        },
        notes: '시계의 시각과 하루 장면은 이해를 돕는 가상의 이야기다. 실제 근무 방식이나 근무 시간은 자료로 확인한 것만 말한다.',
      }),
      C({
        id: 'dokdo.e34.g4-people.activity.day', type: 'activity', title: '등대지기 하루 차례 놓기',
        method: '등대지기 하루 차례 놓기', tool: 'timeline', minutes: 14,
        levels: { easy: '하루 장면 3장을 아침부터 밤 차례로 놓고, 놓으면 바로 맞는지 알려 준다.', base: '장면 4장을 차례로 놓는다.', challenge: '새벽 장면까지 5장을 차례로 놓는다.' },
        activity: {
          title: '등대지기 하루 차례 놓기', tool: 'timeline',
          teacher: '"낮에 미리 살피는 일이 밤에 왜 중요할까요?" 카드를 놓을 때마다 앞 일이 다음 일과 어떻게 이어지는지 말하게 한다. 기록하는 장면을 맨 끝에 두는 학생에게는 "무엇을 살핀 다음에 적을까요?"라고 묻는다. 장면은 이해를 돕는 이야기이고 실제 근무표가 아니라고 밝힌다.',
          task: '등대를 지키는 사람의 하루 장면 카드를 아침부터 밤 차례로 놓아요.', levels: CARD_LV,
          items: [
            DAYORD('등대지기의 하루를 차례대로 놓아요.', 0.2),
            PICK('등대 불빛이 지켜 주는 사람만 골라요.', { basket: '등대가 지켜요' },
              [{ id: 'fish', text: '밤바다의 어부', ok: true }, { id: 'none', text: '아무도 없어요' }, { id: 'ship', text: '여객선 승객', ok: true }, { id: 'city', text: '서울의 버스 기사' }],
              ['fish', 'none'], [{ id: 'isle', text: '독도에서 지내는 사람', ok: true }, { id: 'sky', text: '하늘의 새만' }], 0.2),
            SORT('낮에 하는 일과 밤에 하는 일을 나누어요.', { mode: 'sort', axis: ['낮', '밤'] }, [{ id: 'day', label: '낮' }, { id: 'night', label: '밤' }],
              [['등불을 닦아요', '기계를 살펴요'], ['불빛을 지켜봐요', '배가 길을 찾아요']], 1, [['기록을 정리해요'], ['밤바다를 비춰요']], 0.25,
              { conclude: '낮에 미리 살펴 두어야 밤새 불빛이 배에게 길을 알려 줄 수 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '등대지기 하루를 차례로 써요.', columns: ['때', '하는 일'], cells: [['낮', ''], ['해 질 녘', ''], ['밤', '']], answer: '등불과 기계를 살펴요, 불빛을 확인해요, 불빛을 지켜봐요' }] },
        notes: '하루 장면은 이해를 돕는 가상의 이야기다. 실제 등대관리원의 말이나 마음을 지어 붙이지 않는다.',
      }),
      C({
        id: 'dokdo.e34.g4-people.activity.link', type: 'activity', title: '하는 일과 도움 받는 사람 잇기',
        method: '하는 일과 도움 받는 사람 잇기', tool: 'emotion', minutes: 13,
        levels: { easy: '하는 일과 결과 2짝을 잇고, 놓으면 바로 맞는지 알려 준다.', base: '3짝을 잇는다.', challenge: '4짝과 남는 카드 한 장을 가려 잇는다.' },
        activity: {
          title: '하는 일과 도움 받는 사람 잇기', tool: 'emotion',
          teacher: '"이 일을 하면 누가 도움을 받을까요?" 카드를 이을 때마다 "○○해서 △△해요"로 말하게 한다. 등대의 도움을 독도 사람에게만 한정하는 학생에게는 "밤바다를 지나는 배는 누가 타고 있을까요?"라고 넓혀 묻는다. 셋째 문항에서 불빛이 꺼진 밤에 생길 일을 골라 일의 중요함을 느끼게 한다.',
          task: '독도에서 하는 일과 그 일 덕분에 생기는 결과를 잇고, 도움 받는 사람을 나누어요.', levels: CARD_LV,
          items: [
            MATCH('하는 일과 결과를 이어요.', {}, [['등대 불빛을 살펴요', '밤바다의 배가 길을 찾아요'], ['독도경비대가 지켜요', '독도가 안전해요'], ['등대 기계를 돌봐요', '불빛이 꺼지지 않아요'], ['주민이 섬에서 지내요', '독도에 삶이 이어져요']], 2, 3, '배가 길을 잃어요', 0.2),
            SORT('등대 불빛 덕분에 도움 받는 사람을 나누어요.', { mode: 'sort' }, [{ id: 'sea', label: '바다 위의 사람' }, { id: 'isle', label: '독도의 사람' }],
              [['어부', '여객선 승객'], ['주민', '경비대원']], 1, [['배를 모는 선장'], ['등대관리원']], 0.2),
            { prompt: '불빛이 꺼진 밤을 생각해 골라요.', toolOptions: { mode: 'branch', situation: '안개 낀 밤, 등대 불빛이 꺼져 있다면?', choices: [{ id: 'lost', text: '배가 길을 찾기 어려워요', result: '그래서 낮에 미리 살펴요.' }, { id: 'same', text: '아무 일도 없어요', why: '불빛이 없으면 배가 길을 찾기 어려워요.' }, { id: 'fast', text: '배가 더 빨리 가요', why: '어두우면 배는 더 조심해야 해요.' }] }, target: { choice: 'lost' }, difficulty: 0.2,
              levels: { easy: { prompt: '불빛이 꺼진 밤을 생각해 골라요(보기 2개).', toolOptions: { choices: [{ id: 'lost', text: '배가 길을 찾기 어려워요', result: '그래서 낮에 미리 살펴요.' }, { id: 'same', text: '아무 일도 없어요', why: '불빛이 없으면 배가 길을 찾기 어려워요.' }] }, target: { choice: 'lost' } } },
              conclude: '독도에서 하는 일은 바다를 지나는 배와 독도에서 지내는 사람 모두를 도와요.' },
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸을 채워요.', text: '등대 불빛 덕분에 밤바다의 ___가 길을 찾아요.', answer: '배' }] },
      }),
      C({
        id: 'dokdo.e34.g4-people.activity.job', type: 'activity', title: '세 사람의 일 나누기',
        method: '세 사람의 일 나누기', tool: 'sortboard', minutes: 14,
        levels: { easy: '바구니 2칸(독도경비대원·등대관리원)에 일 카드를 나누고, 틀리면 바로 알려 준다.', base: '바구니 3칸(주민까지)에 나눈다.', challenge: '3칸에 나누고, 어느 사람의 일도 아닌 틀린 카드를 빼고 둔다.' },
        activity: {
          title: '세 사람의 일 나누기', tool: 'sortboard',
          teacher: '"이 일을 하는 사람은 누구일까요?" 카드를 넣을 때마다 사람마다 하는 일을 한 문장으로 말하게 한다. 주민을 방문객과 섞는 학생에게는 "주민은 독도에 주소를 두고 지내는 사람이에요"라고 말해 준다. 섬 생활의 어려움을 쉽게 여기는 학생에게는 "마실 물과 생활용품은 어떻게 구할까요?"라고 묻는다.',
          task: '독도에서 하는 일 카드를 주민·독도경비대원·등대관리원 바구니에 나누어요.', levels: BOARD_LV,
          items: [
            { prompt: '일 카드를 사람 바구니에 나누어요.', toolOptions: { slots: ['주민', '독도경비대원', '등대관리원'], cards: ['독도에 주소를 두고 살아요', '독도를 지켜요', '등대 불빛을 살펴요', '서도 숙소에서 지내요', '동도 경비대에서 지내요', '등대 기계를 돌봐요'] },
              target: { sort: { 주민: ['독도에 주소를 두고 살아요', '서도 숙소에서 지내요'], 독도경비대원: ['독도를 지켜요', '동도 경비대에서 지내요'], 등대관리원: ['등대 불빛을 살펴요', '등대 기계를 돌봐요'] } }, difficulty: 0.25,
              levels: {
                easy: { prompt: '일 카드를 두 사람 바구니에 나누어요(4장).', toolOptions: { slots: ['독도경비대원', '등대관리원'], cards: ['독도를 지켜요', '등대 불빛을 살펴요', '동도 경비대에서 지내요', '등대 기계를 돌봐요'] }, target: { sort: { 독도경비대원: ['독도를 지켜요', '동도 경비대에서 지내요'], 등대관리원: ['등대 불빛을 살펴요', '등대 기계를 돌봐요'] } } },
                challenge: { prompt: '틀린 카드는 빼고 바구니 3칸에 나누어요.', toolOptions: { more: ['관광 안내만 해요'] } },
              } },
            SORT('바위섬 생활의 어려움과 해결을 나누어요.', {}, ['어려움', '해결'],
              [['마실 물이 귀해요', '가게가 없어요', '바람이 세요'], ['배로 물을 날라 와요', '배로 생활용품을 받아요', '튼튼한 건물에서 지내요']], 2,
              [['배가 못 오는 날이 있어요'], ['미리 넉넉히 받아 둬요']], 0.25),
            SORT('독도에서 지내는 사람과 다녀가는 사람을 나누어요.', {}, ['지내는 사람', '다녀가는 사람'],
              [['주민', '독도경비대원', '등대관리원'], ['구경 온 방문객', '배를 타고 온 관광객', '사진 찍으러 온 사람']], 2,
              [['주소를 둔 사람'], ['하루 다녀간 사람']], 0.25,
              { conclude: '독도에는 주민·독도경비대원·등대관리원 등이 지내며 섬을 지키고 배의 길을 밝혀요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '세 사람이 하는 일을 써요.', columns: ['사람', '하는 일'], cells: [['주민', ''], ['독도경비대원', ''], ['등대관리원', '']], answer: '독도에 주소를 두고 지내요, 독도를 지켜요, 등대 불빛을 살펴요' }] },
        notes: CALM,
      }),
      C({
        id: 'dokdo.e34.g4-people.activity.letter', type: 'activity', title: '고마운 분께 엽서 꾸미기',
        method: '고마운 분께 엽서 꾸미기', tool: 'collage', minutes: 13,
        levels: { easy: '엽서에 그림 조각과 인사 조각을 모두 2조각 붙인다.', base: '모두 4조각 붙인다.', challenge: '4조각을 붙이고, 그분이 하는 일을 넣은 인사말을 짝에게 말한다.' },
        activity: {
          title: '고마운 분께 엽서 꾸미기', tool: 'collage',
          teacher: '"독도에서 일하는 분께 엽서를 보낸다면 어떤 그림과 인사를 넣을까요?" 등대·바다 조각과 인사 글 자리(긴 네모 조각)를 함께 꾸미게 한다. "고맙습니다"만 쓰려는 학생에게는 "무엇이 고마운지 하는 일을 넣어 볼까요?"라고 묻는다. 엽서는 수업 활동이고, 실제로 보낼 때는 학교가 받는 곳을 먼저 알아본다.',
          task: '그림 조각과 인사 조각으로 독도에서 일하는 분께 보낼 엽서를 꾸며요.', levels: PLAIN_LV,
          items: [
            { prompt: '엽서에 등대 조각(흰 긴 네모와 노란 세모)을 붙여요.', toolOptions: { shapes: ['rect', 'triangle', 'circle', 'heart', 'star'], colors: ['하양', '노랑', '파랑', '빨강', '초록'], sizes: ['s', 'm', 'l'] }, target: { has: [{ shape: 'rect', color: '하양', min: 1 }, { shape: 'triangle', color: '노랑', min: 1 }] }, difficulty: 0.1 },
            { prompt: '파란 조각으로 바다를 붙여요.', toolOptions: { shapes: ['rect', 'triangle', 'circle', 'heart', 'star'], colors: ['하양', '노랑', '파랑', '빨강', '초록'], sizes: ['s', 'm', 'l'] }, target: { has: [{ color: '파랑', min: 2 }] }, difficulty: 0.1 },
            MAKE('그림과 인사 조각으로 엽서를 완성해요.', { shapes: ['rect', 'triangle', 'circle', 'heart', 'star'], colors: ['하양', '노랑', '파랑', '빨강', '초록'], sizes: ['s', 'm', 'l'] }, ['인사 글 자리를 만들었어요'], '하는 일을 넣어 인사말을 말했어요', [2, 4, 4], 0.1,
              { conclude: '하는 일을 넣어 인사하면 고마운 마음이 더 잘 전해져요.' }),
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '엽서에 쓸 인사말을 완성해요.', text: '___을 해 주셔서 고맙습니다.', answer: '(예) 밤바다의 길을 밝히는 일' }] },
      }),
      C({
        id: 'dokdo.e34.g4-people.wrap.interview', type: 'wrap', title: '역할 인터뷰 놀이',
        method: '역할 인터뷰 놀이', tool: 'timer', minutes: 7,
        levels: { easy: '기자가 질문 1개를 하고 점검 칸 2개에 표시한다.', base: '질문 2개를 주고받고 점검 칸 3개에 표시한다.', challenge: '질문 3개를 주고받고 점검 칸 4개에 표시한다.' },
        wrap: {
          teacher: '짝이 기자와 등대관리원 역할을 맡는다. "대답은 오늘 배운 사실로만 해요. 지어낸 이야기는 \'아마\'를 붙여 말해요." 질문 틀(예 "낮에는 무엇을 하세요?", "불빛은 누구를 도와요?")을 칠판에 쓴다. 역할 대답은 실제 근무자의 말이 아닌 놀이라는 것을 먼저 밝힌다. 출구 2번에서 \'관광 안내만 해요\'를 고른 학생에게는 하루 장면 카드를 다시 보게 한다.',
          exitTicket: [
            SELF('인터뷰 놀이 점검', ['질문 1개를 했어요', '배운 사실로 대답했어요', '질문 2개를 주고받았어요', '질문 3개를 주고받았어요']),
            { type: 'choice', prompt: '등대관리원이 하는 일로 알맞은 것은?', options: ['등대 불빛을 살펴요', '관광 안내만 해요', '물고기를 팔아요'], answer: 0, difficulty: 0.15, explain: '등대관리원은 불빛이 제대로 빛나도록 살피고 기록해요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '역할 인터뷰',
          items: [
            { type: 'table', prompt: '주고받은 질문과 대답을 써요.', columns: ['질문', '대답'], cells: [['낮에는 무엇을 하세요?', ''], ['', '']], answer: '(예) 등불과 기계를 살펴요' },
            { type: 'choice', prompt: '독도에서 지내는 사람이 아닌 것은?', options: ['하루 다녀간 관광객', '독도경비대원', '주민'], answer: '하루 다녀간 관광객' },
          ],
          easy: { note: '하루 장면 카드를 보며 써요.', items: [{ type: 'short', prompt: '등대관리원에게 하고 싶은 질문 하나를 써요.' }] },
        },
      }),
      C({
        id: 'dokdo.e34.g4-people.wrap.sum', type: 'wrap', title: '가장 중요한 일 고르고 까닭',
        method: '가장 중요한 일 고르고 까닭', tool: 'wordcards', minutes: 7,
        levels: { easy: '빈칸 하나(가장 중요한 일)에 보기 2개 가운데 넣는다.', base: '빈칸 두 개(일·까닭)에 보기 3개씩 가운데 넣는다.', challenge: '빈칸 세 개(일·까닭 두 가지)를 채운다.' },
        wrap: {
          teacher: '"세 사람의 일 가운데 내가 가장 중요하다고 생각하는 일을 고르고 까닭을 붙여요." 어느 일을 골라도 되고, 까닭이 그 일과 이어지면 된다고 말해 준다. \'관광 안내만 해요\'를 고르는 학생에게는 하루 장면 카드를 다시 보게 한다. 고른 일이 서로 달라도 모두 독도를 위한 일이라는 것으로 정리한다.',
          exitTicket: [
            { type: 'tool', tool: 'wordcards', prompt: '가장 중요한 일과 까닭 카드를 넣어요.', options: { mode: 'fill', slots: [{ id: 'job', label: '가장 중요한 일: ___' }, { id: 'why', label: '까닭: ___' }], cards: ['배의 길 밝히기', '관광 안내만 하기', '독도 지키기', '배가 안전해서', '심심해서', '독도가 안전해서'] },
              target: { fill: { job: ['배의 길 밝히기', '독도 지키기'], why: ['배가 안전해서', '독도가 안전해서'] } }, difficulty: 0.15,
              levels: {
                easy: { toolOptions: { slots: [{ id: 'job', label: '가장 중요한 일: ___' }], cards: ['배의 길 밝히기', '관광 안내만 하기'] }, target: { fill: { job: ['배의 길 밝히기'] } } },
                challenge: { toolOptions: { slots: [{ id: 'job', label: '가장 중요한 일: ___' }, { id: 'why', label: '까닭: ___' }, { id: 'why2', label: '또 다른 까닭: ___' }], cards: ['배의 길 밝히기', '관광 안내만 하기', '독도 지키기', '배가 안전해서', '심심해서', '독도가 안전해서', '어부를 도와서'] },
                  target: { fill: { job: ['배의 길 밝히기', '독도 지키기'], why: ['배가 안전해서', '독도가 안전해서', '어부를 도와서'], why2: ['배가 안전해서', '독도가 안전해서', '어부를 도와서'] } } },
              } },
            { type: 'choice', prompt: '독도에서 하는 일에 대해 맞는 말은?', options: ['섬을 지키고 배의 길을 밝혀요', '관광 안내뿐이에요', '아무 일도 없어요'], answer: 0, difficulty: 0.15, explain: '독도경비대원은 섬을 지키고, 등대관리원은 배의 길을 밝혀요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '독도에서 하는 일',
          items: [
            { type: 'blank', prompt: '내 생각을 써요.', text: '가장 중요한 일은 ___이에요. 왜냐하면 ___이기 때문이에요.', answer: '(학생마다 다름)' },
            { type: 'choice', prompt: '독도를 지키는 일을 하는 사람은?', options: ['독도경비대원', '관광객'], answer: '독도경비대원' },
          ],
          easy: { note: '카드를 보며 써요.', items: [{ type: 'choice', prompt: '등대가 하는 일은?', options: ['배의 길 밝히기', '관광 안내'], answer: '배의 길 밝히기' }] },
        },
        notes: '어느 일을 골라도 정답이다(채점은 일과 까닭이 이어지는지만 본다). 주민의 일을 고르고 싶어 하는 학생은 활동지에 써서 말하게 한다.',
      }),
    );
  }

  // ======================================================================================================
  // 4학년 · 독도 생태 지킴이 실천 (초 내용체계: 자연환경 — g4-cc-dokdo 재료)
  // ======================================================================================================
  {
    const C = T('g4-eco', 4);
    const TRASH = [['플라스틱 병', 8], ['비닐봉지', 6], ['그물 조각', 4], ['캔', 2]];
    const VOTE = (n) => [1, 2, 3].slice(0, n).map((i) => ({ label: `후보 ${i}`, unit: '명', step: 1 }));
    M.push(
      C({
        id: 'dokdo.e34.g4-eco.intro.scene', type: 'intro', title: '독도 여행 장면 보고 문제 찾기',
        method: '독도 여행 장면 보고 문제 찾기', tool: 'sortboard', minutes: 6,
        levels: { easy: '장면 카드 2장(해로운 1·괜찮은 1)을 나누는 모습을 본다.', base: '장면 카드 4장을 나누는 모습을 보고, 해로운 행동을 손들어 고른다.', challenge: '장면 카드 6장을 보고 해로운 행동마다 바꿀 행동을 짝과 먼저 말한다.' },
        intro: {
          teacher: '"배를 타고 독도 둘레를 여행하는 장면이에요. 생태에 해로운 행동은 무엇일까요?" 장면 그림을 보이고 대답을 듣는다(기다릴 반응: "쓰레기를 버려요", "새에게 과자를 줘요"). 시연 단추로 카드가 해로운 행동·괜찮은 행동 바구니에 나뉘는 모습을 보인다. "한 사람이 조금 버리는 건 괜찮아요"라는 대답에는 "배에 탄 모두가 조금씩 버리면 바다는 어떻게 될까요?"라고 되묻는다. 장면 속 인물은 가상이다.',
          student: '독도 여행 장면을 보고 생태에 해로운 행동을 찾아요. 어떻게 바꾸면 좋을지 생각해 보아요.',
          demo: { tool: 'sortboard', options: { slots: ['해로운 행동', '괜찮은 행동'], cards: ['과자 봉지를 바다에 던져요', '쓰레기를 가방에 넣어요', '갈매기에게 과자를 줘요', '새를 멀리서 봐요', '음료 캔을 배 밖에 둬요', '다회용 물병을 써요'] }, sequence: [{ sort: { '해로운 행동': ['과자 봉지를 바다에 던져요', '갈매기에게 과자를 줘요', '음료 캔을 배 밖에 둬요'], '괜찮은 행동': ['쓰레기를 가방에 넣어요', '새를 멀리서 봐요', '다회용 물병을 써요'] } }] },
          art: { draw: 'a paper ferry sailing near a rocky islet with paper passengers on deck, one tossing a snack bag toward a seagull while another puts trash into a bag', banner: '무엇이 문제일까?', extra: [{ motif: 'bird', x: 340, y: 96 }] },
        },
      }),
      C({
        id: 'dokdo.e34.g4-eco.intro.count', type: 'intro', title: '바닷가 쓰레기 그림그래프 읽기',
        method: '바닷가 쓰레기 그림그래프 읽기', tool: 'chart', minutes: 6,
        levels: { easy: '세 종류(병·비닐·그물)만 견주어 가장 많은 것을 고른다.', base: '네 종류 가운데 가장 많은 쓰레기를 고르는 모습을 본다.', challenge: '가장 많은 것에 이어 두 번째로 많은 것도 짝과 찾는다.' },
        intro: {
          teacher: '"어느 바닷가에서 주운 쓰레기를 그림그래프로 나타냈어요. 가장 많은 것은 무엇일까요?" 그림 수를 함께 센 뒤 시연 단추로 \'플라스틱 병\'이 골라지는 모습을 보인다. 이 그래프는 이해를 돕는 가상 자료이고 독도에서 잰 수가 아니라고 꼭 밝힌다. "바다 쓰레기는 바다에서 생겨요"라는 대답에는 "병과 비닐은 누가 쓰던 것일까요?"라고 물어 생활과 잇는다.',
          student: '그림그래프에서 그림 수를 세어 가장 많은 쓰레기를 찾아요. 그 쓰레기는 어디에서 왔을지 말해 보아요.',
          demo: { tool: 'chart', options: { type: 'picture', mode: 'read', title: '어느 바닷가에서 주운 쓰레기(가상)', unit: '개', xLabel: '종류', yLabel: '개수', data: TRASH, icons: [{ value: 1, name: '1개' }], icon: 'circle', question: '가장 많은 쓰레기는?', choices: TRASH.map((x) => x[0]) }, sequence: [{ pick: 0 }] },
          art: { draw: 'a paper beach with small paper bottles, plastic bags and net pieces sorted into rows like a picture graph, a paper child counting them', banner: '무엇이 가장 많을까?', extra: [{ motif: 'wave', y: 240 }] },
        },
        notes: '그래프의 수는 이해를 돕는 가상 자료다. 실제 바다 쓰레기 조사 결과를 쓰려면 해양수산부·지자체 등 공식 자료에서 확인한다.',
      }),
      C({
        id: 'dokdo.e34.g4-eco.activity.choose', type: 'activity', title: '상황 속 행동 고르고 결과 보기',
        method: '상황 속 행동 고르고 결과 보기', tool: 'emotion', minutes: 14,
        levels: { easy: '장면마다 보기 2개 가운데 행동을 고르고 결과를 바로 본다.', base: '장면마다 보기 3개 가운데 고르고 결과를 본다.', challenge: '보기 3개에서 고르고 결과는 맞힌 뒤에만 보이며, 세 장면의 결과를 이어 짝에게 말한다.' },
        activity: {
          title: '상황 속 행동 고르고 결과 보기', tool: 'emotion',
          teacher: '"독도에 가지 않아도 독도 바다를 지킬 수 있을까요?" 학교·집·바닷가 장면에서 행동을 고르고 결과 글을 소리 내어 읽는다. \'나 하나쯤\' 보기를 고른 학생을 나무라지 않고 "우리 반 모두가 그렇게 하면 어떻게 될까요?"라고 되묻는다. 비닐과 병이 강과 바다를 따라 먼 바다까지 갈 수 있다는 것을 짚는다. 장면 속 \'다온\'은 가상의 인물이다.',
          task: '학교·집·바닷가 장면을 읽고 행동을 골라 이어지는 결과를 보아요.', levels: BRANCH_LV,
          items: [
            { prompt: '다온이가 소풍 도시락을 싸요.', toolOptions: { mode: 'branch', situation: '소풍 날 도시락과 물을 챙겨요.', who: '다온', choices: [{ id: 'box', text: '다회용 통과 물병에 담아요', result: '쓰레기가 거의 남지 않아요.', mood: '뿌듯함' }, { id: 'plastic', text: '일회용 병을 여러 개 사요', result: '버릴 병이 많이 생겨요.', mood: '걱정', why: '일회용 병은 쓰레기가 돼요.' }, { id: 'one', text: '나 하나쯤 괜찮아요', result: '모두 그러면 쓰레기가 쌓여요.', mood: '걱정', why: '한 사람의 행동도 모이면 커져요.' }] }, target: { choice: 'box' }, difficulty: 0.2,
              levels: { easy: { prompt: '다온이가 도시락을 싸요(보기 2개).', toolOptions: { choices: [{ id: 'box', text: '다회용 통과 물병에 담아요', result: '쓰레기가 거의 남지 않아요.', mood: '뿌듯함' }, { id: 'plastic', text: '일회용 병을 여러 개 사요', result: '버릴 병이 많이 생겨요.', mood: '걱정', why: '일회용 병은 쓰레기가 돼요.' }] }, target: { choice: 'box' } } } },
            { prompt: '다온이가 가게에서 물건을 샀어요.', toolOptions: { mode: 'branch', situation: '가게에서 과자 하나를 샀어요. 비닐봉지를 줄까 물어요.', who: '다온', choices: [{ id: 'no', text: '"괜찮아요" 하고 가방에 넣어요', result: '비닐봉지 하나가 줄었어요.', mood: '뿌듯함' }, { id: 'yes', text: '봉지에 담아 달라고 해요', result: '봉지는 금방 쓰레기가 돼요.', mood: '걱정', why: '작은 물건은 가방에 넣을 수 있어요.' }, { id: 'two', text: '봉지를 두 장 받아요', result: '쓰레기가 두 배가 돼요.', mood: '걱정', why: '필요 없는 봉지는 받지 않아요.' }] }, target: { choice: 'no' }, difficulty: 0.2,
              levels: { easy: { prompt: '다온이가 물건을 샀어요(보기 2개).', toolOptions: { choices: [{ id: 'no', text: '"괜찮아요" 하고 가방에 넣어요', result: '비닐봉지 하나가 줄었어요.', mood: '뿌듯함' }, { id: 'yes', text: '봉지에 담아 달라고 해요', result: '봉지는 금방 쓰레기가 돼요.', mood: '걱정', why: '작은 물건은 가방에 넣을 수 있어요.' }] }, target: { choice: 'no' } } } },
            { prompt: '다온이 가족이 바닷가에 놀러 갔어요.', toolOptions: { mode: 'branch', situation: '바닷가에서 놀고 나니 쓰레기가 남았어요.', who: '다온', choices: [{ id: 'home', text: '모아서 집으로 가져가요', result: '바닷가가 깨끗해요.', mood: '뿌듯함' }, { id: 'sand', text: '모래에 묻어 둬요', result: '파도에 쓸려 바다로 가요.', mood: '걱정', why: '묻은 쓰레기도 바다로 가요.' }, { id: 'leave', text: '그 자리에 두고 가요', result: '바닷새가 먹이로 알 수 있어요.', mood: '걱정', why: '쓰레기는 되가져가요.' }] }, target: { choice: 'home' }, difficulty: 0.25,
              levels: { easy: { prompt: '바닷가에 쓰레기가 남았어요(보기 2개).', toolOptions: { choices: [{ id: 'home', text: '모아서 집으로 가져가요', result: '바닷가가 깨끗해요.', mood: '뿌듯함' }, { id: 'sand', text: '모래에 묻어 둬요', result: '파도에 쓸려 바다로 가요.', mood: '걱정', why: '묻은 쓰레기도 바다로 가요.' }] }, target: { choice: 'home' } } },
              conclude: '한 사람의 작은 행동도 모이면 커요. 쓰레기를 줄이면 먼 독도 바다까지 지킬 수 있어요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '오늘부터 내가 바꿀 행동 하나를 써요.' }] },
      }),
      C({
        id: 'dokdo.e34.g4-eco.activity.dex', type: 'activity', title: '생물 도감 카드 잇기',
        method: '생물 도감 카드 잇기', tool: 'mindmap', minutes: 13,
        levels: { easy: '생물 1종(괭이갈매기)의 갈래·사는 곳·특징 가지에 카드를 붙인다.', base: '생물 2종(괭이갈매기·해국) 가지에 카드를 나누어 붙인다.', challenge: '생물 3종(전복까지) 가지에 카드를 나누어 붙인다.' },
        activity: {
          title: '생물 도감 카드 잇기', tool: 'mindmap',
          teacher: '"도감 카드에는 이름·갈래·사는 곳·특징이 들어가요." 카드를 붙일 때마다 그 생물에 맞는지 지난 차시 공책을 펴고 확인하게 한다. 특징을 다른 생물과 바꾸는 학생에게는 "이 생물은 날 수 있나요, 물속에 사나요?"라고 묻는다. 셋째 문항에서 도감에는 확인된 사실만 쓴다는 것을 짚는다.',
          task: '생물 이름 가지에 갈래·사는 곳·특징 카드를 붙여 도감 카드를 만들어요.', levels: CARD_LV,
          items: [
            { prompt: '생물 가지에 도감 카드를 나누어 붙여요.', toolOptions: { mode: 'sort', topic: '독도 생물 도감', slots: ['괭이갈매기', '해국'], cards: ['바닷새', '식물', '바위 위 둥지', '바위틈', '고양이 같은 울음', '바다의 국화'] },
              target: { sort: { 괭이갈매기: ['바닷새', '바위 위 둥지', '고양이 같은 울음'], 해국: ['식물', '바위틈', '바다의 국화'] } }, difficulty: 0.25,
              levels: {
                easy: { prompt: '괭이갈매기 도감 가지에 카드를 붙여요.', toolOptions: { mode: 'match', topic: '괭이갈매기 도감', slots: [{ id: 'kind', label: '갈래' }, { id: 'home', label: '사는 곳' }, { id: 'feat', label: '특징' }], cards: ['바닷새', '바위 위 둥지', '고양이 같은 울음', '숲속 나무'] }, target: { match: { kind: '바닷새', home: '바위 위 둥지', feat: '고양이 같은 울음' } } },
                challenge: { prompt: '생물 3종 가지에 도감 카드를 나누어요(9장).', toolOptions: { slots: ['괭이갈매기', '해국', '전복'], cards: ['바닷새', '식물', '바다 동물', '바위 위 둥지', '바위틈', '바닷속 바위', '고양이 같은 울음', '바다의 국화', '해조류를 먹음'] },
                  target: { sort: { 괭이갈매기: ['바닷새', '바위 위 둥지', '고양이 같은 울음'], 해국: ['식물', '바위틈', '바다의 국화'], 전복: ['바다 동물', '바닷속 바위', '해조류를 먹음'] } } },
              } },
            MATCH('생물과 갈래를 이어요.', { topic: '생물의 갈래' }, [['괭이갈매기', '바닷새'], ['땅채송화', '식물'], ['소라', '바다 동물'], ['미역', '해조류']], 2, 3, '돌멩이', 0.2),
            PICK('도감에 쓸 사실 문장만 골라요.', { topic: '도감에 쓸 문장', basket: '사실 문장' },
              [{ id: 'f1', text: '해국은 바위틈에 자라요', ok: true }, { id: 'o1', text: '해국이 제일 예뻐요' }, { id: 'f2', text: '괭이갈매기는 바닷새예요', ok: true }, { id: 'o2', text: '아마 천 마리쯤 살걸요' }],
              ['f1', 'o1'], [{ id: 'f3', text: '전복은 해조류를 먹어요', ok: true }, { id: 'o3', text: '전복은 심심할 거예요' }], 0.25,
              { conclude: '도감에는 이름·갈래·사는 곳·특징을 확인한 사실로 써요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '나의 도감 카드를 채워요.', columns: ['이름', '갈래', '사는 곳', '특징'], cells: [['', '', '', '']], answer: '(예) 해국 · 식물 · 바위틈 · 바다의 국화' }] },
      }),
      C({
        id: 'dokdo.e34.g4-eco.activity.plan', type: 'activity', title: '우리 반 실천 계획 차례 놓기',
        method: '우리 반 실천 계획 차례 놓기', tool: 'story', minutes: 14,
        levels: { easy: '계획 2단계(정하기→해 보기)를 차례로 놓고, 놓으면 바로 맞는지 알려 준다.', base: '계획 3단계(정하기→해 보기→세어 보기)를 놓고, 모둠 역할 3개를 잇는다.', challenge: '3단계에 섞인 틀린 카드를 빼고 놓고, 역할 잇기에서 남는 카드를 가려낸다.' },
        activity: {
          title: '우리 반 실천 계획 차례 놓기', tool: 'story',
          teacher: '"계획은 무엇을 할지 정하고, 해 보고, 얼마나 되었는지 세어 보는 차례로 세워요." 카드를 놓은 뒤 차례대로 소리 내어 읽게 한다. 세어 보기를 맨 앞에 두는 학생에게는 "해 보지도 않고 셀 수 있을까요?"라고 묻는다. 역할을 정할 때는 모든 친구가 한 가지씩 맡게 한다.',
          task: '쓰레기 줄이기 실천 계획을 차례대로 놓고, 모둠 역할을 이어요.', levels: CARD_LV,
          items: [
            ORD('쓰레기 줄이기 계획을 차례대로 놓아요.', { mode: 'order' }, [{ id: 'pick', text: '줄일 쓰레기를 정해요' }, { id: 'do', text: '한 주 동안 해 봐요' }, { id: 'count', text: '얼마나 줄었는지 세요' }], [0, 1], { id: 'skip', text: '하지 않고 끝내요', why: '계획은 해 보고 세어 봐야 해요.' }, 0.2),
            ORD('비닐 줄이기 계획을 차례대로 놓아요.', { mode: 'order' }, [{ id: 'bag', text: '장바구니를 챙겨요' }, { id: 'use', text: '가게에서 장바구니를 써요' }, { id: 'tell', text: '줄인 봉지 수를 알려요' }], [0, 1], { id: 'more', text: '봉지를 더 받아요', why: '비닐 줄이기와 반대되는 행동이에요.' }, 0.25),
            MATCH('모둠 역할과 하는 일을 이어요.', { mode: 'match' }, [['기록이', '줄인 수를 적어요'], ['알림이', '반에 결과를 알려요'], ['정리이', '모은 쓰레기를 나눠요']], 2, 3, '구경만 해요', 0.25,
              { conclude: '정하고, 해 보고, 세어 보는 계획을 모둠이 역할을 나누어 함께 실천해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '우리 모둠 실천 계획을 써요.', columns: ['차례', '할 일'], cells: [['1. 정하기', ''], ['2. 해 보기', ''], ['3. 세어 보기', '']], answer: '(모둠마다 다름)' }] },
      }),
      C({
        id: 'dokdo.e34.g4-eco.activity.art', type: 'activity', title: '생태 지킴이 포스터 꾸미기',
        method: '생태 지킴이 포스터 꾸미기', tool: 'collage', minutes: 13,
        levels: { easy: '생물·약속 조각을 모두 3조각 붙인다.', base: '모두 5조각 붙인다.', challenge: '5조각을 붙이고 별·하트 조각으로 포스터 제목 자리를 꾸민다.' },
        activity: {
          title: '생태 지킴이 포스터 꾸미기', tool: 'collage',
          teacher: '"포스터를 본 친구가 무엇을 하면 되는지 바로 알 수 있게 만들어요." 생물 조각과 약속 글 자리(긴 네모)를 꼭 넣게 한다. 겁을 주는 그림(죽은 새 등)보다 지킬 행동을 보여 주는 그림이 좋다고 알려 준다. 다 꾸미면 약속 글 자리에 쓸 말을 활동지에 쓴다.',
          task: '생물 조각과 약속 조각으로 독도 생태 지킴이 포스터를 꾸며요.', levels: PLAIN_LV,
          items: [
            { prompt: '하트·나뭇잎 조각으로 독도 생물을 붙여요.', toolOptions: { shapes: ['heart', 'leaf', 'circle', 'rect', 'star'], colors: ['하양', '보라', '노랑', '파랑', '초록'], sizes: ['s', 'm', 'l'] }, target: { has: [{ shape: 'heart', min: 1 }, { shape: 'leaf', min: 1 }] }, difficulty: 0.1 },
            { prompt: '파란 조각 2개로 바다를, 긴 네모로 약속 자리를 붙여요.', toolOptions: { shapes: ['heart', 'leaf', 'circle', 'rect', 'star'], colors: ['하양', '보라', '노랑', '파랑', '초록'], sizes: ['s', 'm', 'l'] }, target: { has: [{ color: '파랑', min: 2 }, { shape: 'rect', color: '하양', min: 1 }] }, difficulty: 0.15 },
            { prompt: '조각을 모아 포스터를 완성해요.', toolOptions: { shapes: ['heart', 'leaf', 'circle', 'rect', 'star'], colors: ['하양', '보라', '노랑', '파랑', '초록'], sizes: ['s', 'm', 'l'] }, target: { selfCheck: ['지킬 약속을 정했어요'], minPieces: 5 }, difficulty: 0.1,
              levels: {
                easy: { prompt: '조각을 모아 포스터를 완성해요(3조각).', target: { selfCheck: ['지킬 약속을 정했어요'], minPieces: 3 } },
                challenge: { prompt: '별 조각 2개로 제목 자리를 꾸며 완성해요.', target: { has: [{ shape: 'star', min: 2 }], selfCheck: ['지킬 약속을 정했어요', '제목 자리를 꾸몄어요'], minPieces: 5 } },
              },
              conclude: '포스터는 지킬 행동을 한눈에 보여 줘야 해요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '포스터 제목과 약속 글을 써요.' }] },
      }),
      C({
        id: 'dokdo.e34.g4-eco.wrap.vote', type: 'wrap', title: '반 약속 손들어 정하기',
        method: '반 약속 손들어 정하기', tool: 'timer', minutes: 7,
        levels: { easy: '모둠 약속 후보 2개에 손든 수를 적어 반 약속을 정한다.', base: '후보 3개에 손든 수를 적어 정한다.', challenge: '후보 3개에 손든 수를 적고, 가장 많은 후보를 고른 까닭을 발표한다.' },
        wrap: {
          teacher: '모둠마다 약속 후보를 하나씩 말하고 칠판에 후보 1·2·3으로 쓴다. "한 사람이 한 번만 손들어요." 손든 수를 세어 기록 칸에 넣는다. 적은 후보를 낸 모둠도 다음 달 약속으로 이어 갈 수 있다고 말해 준다. 출구 2번으로 한 사람의 행동도 영향이 있다는 것을 다시 고른다.',
          exitTicket: [
            { type: 'tool', tool: 'timer', prompt: '약속 후보마다 손든 수를 적어요.', options: { title: '반 약속 정하기', fields: VOTE(3) }, target: { records: true }, difficulty: 0.1,
              levels: { easy: { prompt: '약속 후보 2개에 손든 수를 적어요.', toolOptions: { fields: VOTE(2) }, target: { records: true } } } },
            { type: 'choice', prompt: '"한 사람의 행동은 아무 영향이 없다"는 말은?', options: ['고쳐야 해요', '맞아요', '알 수 없어요'], answer: 0, difficulty: 0.15, explain: '한 사람의 행동도 모이면 바다를 지키는 큰 힘이 돼요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '우리 반 독도 생태 약속',
          items: [
            { type: 'table', prompt: '약속 후보와 손든 수를 써요.', columns: ['후보', '약속', '손든 수'], cells: [['1', '', ''], ['2', '', ''], ['3', '', '']], answer: '(반마다 다름)' },
            { type: 'blank', prompt: '정한 반 약속을 써요.', text: '우리 반은 ___을 지켜요.', answer: '(반마다 다름)' },
          ],
          easy: { note: '칠판의 후보를 보며 써요.', items: [{ type: 'short', prompt: '우리 반이 정한 약속을 써요.' }] },
        },
        notes: '손들기는 무기명이 아니므로 결과로 친구를 평가하지 않는다. 손들기가 어려운 반은 쪽지 투표로 바꾼다.',
      }),
      C({
        id: 'dokdo.e34.g4-eco.wrap.sum', type: 'wrap', title: '4학년 독도 생태 정리',
        method: '4학년 독도 생태 정리', tool: 'sortboard', minutes: 7,
        levels: { easy: '바구니 2칸(생물·바다)에 카드를 나눈다.', base: '바구니 3칸(생물·바다·사람)에 카드 6장을 나눈다.', challenge: '바구니 3칸에 카드 9장을 나눈다.' },
        wrap: {
          teacher: '"독도의 새, 바다, 사람은 서로 어떻게 이어져 있을까요?" 카드를 나눈 뒤 바구니끼리 잇는 문장을 말하게 한다(예 "바다가 깨끗해야 바닷새가 먹이를 찾아요"). 난류·한류를 생물에 넣는 학생에게는 "살아 있는 것인가요, 바닷물의 흐름인가요?"라고 묻는다. 출구 2번으로 한 해 동안 배운 독도 생태를 한 문장으로 고른다.',
          exitTicket: [
            { type: 'tool', tool: 'sortboard', prompt: '독도 생태 카드를 바구니에 나누어요.', options: { slots: ['생물', '바다', '사람'], cards: ['괭이갈매기', '난류와 한류', '독도경비대원', '해국', '해조류 숲', '등대관리원'] },
              target: { sort: { 생물: ['괭이갈매기', '해국'], 바다: ['난류와 한류', '해조류 숲'], 사람: ['독도경비대원', '등대관리원'] } }, difficulty: 0.2,
              levels: {
                easy: { toolOptions: { slots: ['생물', '바다'], cards: ['괭이갈매기', '난류와 한류', '해국', '해조류 숲'] }, target: { sort: { 생물: ['괭이갈매기', '해국'], 바다: ['난류와 한류', '해조류 숲'] } } },
                challenge: { toolOptions: { cards: ['괭이갈매기', '난류와 한류', '독도경비대원', '해국', '해조류 숲', '등대관리원', '슴새', '두 바닷물이 만나요', '주민'] },
                  target: { sort: { 생물: ['괭이갈매기', '해국', '슴새'], 바다: ['난류와 한류', '해조류 숲', '두 바닷물이 만나요'], 사람: ['독도경비대원', '등대관리원', '주민'] } } },
              } },
            { type: 'choice', prompt: '4학년 독도 공부를 한 문장으로 고르면?', options: ['독도의 생물·바다·사람은 서로 이어져 있어요', '독도에는 생물이 없어요', '독도 바다는 우리와 상관없어요'], answer: 0, difficulty: 0.15, explain: '바다가 건강해야 생물이 살고, 사람도 그 바다와 함께 지내요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '4학년 독도 생태',
          items: [
            { type: 'table', prompt: '독도 생태를 세 갈래로 써요.', columns: ['갈래', '배운 것'], cells: [['생물', ''], ['바다', ''], ['사람', '']], answer: '괭이갈매기·해국 등, 난류와 한류·해조류 숲, 주민·독도경비대원·등대관리원' },
            { type: 'short', prompt: '독도 생태를 지키려고 내가 할 일을 한 문장으로 써요.' },
          ],
          easy: { note: '바구니 카드를 보며 써요.', items: [{ type: 'choice', prompt: '독도의 바닷새는?', options: ['괭이갈매기', '참새'], answer: '괭이갈매기' }] },
        },
      }),
    );
  }

  PaperLessons.registerModules(M);
}());
