/* 창체 안전교육 재난안전 — 중학교(7~9학년) 모듈 내용(edu-module.v1). 형식·작성 규칙: MODULES_BUILD.md, 계획: framework/safety-b.json 의 saf-disaster 중.
 * 근거: 「학교안전교육 실시 기준 등에 관한 고시」(교육부고시 제2023-33호) 별표 2 중학교 재난안전 다섯 항목
 *   (1 화재의 원인 및 대피·대응요령, 신고, 전파요령 / 2 화상 대처 요령 / 3 각종 자연 재난과 안전한 행동 / 4 폭발 및 붕괴, 테러 위협 유형별 대처 요령 / 5 각종 재난 유형별 대비 훈련)
 *   + 별표 1 참고5(재난 대비 훈련 포함, 유형을 달리해 매 학년도 2종류 이상). 주제마다 source 는 체계도에 있다.
 * 주제 12개 × 7~8모듈 = 90모듈. 7학년(화재 원인·장소별 지진·화상 처치·태풍 호우), 8학년(소화기 판단·붕괴 폭발·폭염 한파·화상 종류), 9학년(가정 대피 계획·테러 위협·재난문자·산사태 대설 낙뢰).
 * 그래프·지도·문자·인물·장면은 모두 지어낸 가상 자료다(화면 제목에 '가상'을 밝힘, 가명). 피해 경험은 묻지 않는다. 전화번호는 119(체계도 개념)만 쓴다.
 * 몸 그림(body)에 손·머리 칸이 없어 손목으로 대신하거나 말로 짚는다(notes 에 적음). 칸 지도는 핀만 꽂으므로 '경로 그리기'는 경로 지점을 차례로 꽂는 문항으로 바꿨다.
 *
 * 사람 확인: 근거 파일(research-*.md)에 고시 항목 제목만 있고 세부 수칙은 없어, 아래 일반 안전 수칙은 공식 안내처에서 확인해야 한다.
 *   [소방청·국민재난안전포털]
 *   - fire-cause.*: 불을 보면 먼저 "불이야" 알리기→비상벨→계단 대피, 엘리베이터 쓰지 않기, 연기 새는 문 열지 않기, 소지품 챙기지 않기, 119 신고에 건물·층·타는 것·사람 유무 말하기, 주변 전파
 *   - extinguisher.*: 소화기 사용 순서(안전핀→노즐을 불 밑부분→손잡이→쓸듯 뿌리기), 탈출로를 등 뒤에 두기, 끌지 피할지 기준(불 크기·연기·탈출로), 전기 기구 불에 물 붓지 않기, 끈 뒤 불씨 확인
 *   - home-escape.*: 방문 손잡이를 손등으로 확인해 뜨거우면 열지 않고 문틈 막기, 창가에서 위치 알리며 구조 기다리기(뛰어내리지 않기), 낮은 자세로 대피, 집 밖 집결 장소, 다시 들어가지 않기,
 *     화재경보기 시험 단추·건전지, 출구 앞 짐, 멀티탭 겹쳐 꽂기, 베란다 대피 공간(집마다 다름)
 *   - quake-places.*: 흔들릴 때 책상 아래·머리 보호·떨어질 것에서 멀어지기, 멈춘 뒤 계단으로 넓은 곳(건물·담장·유리에서 떨어짐), 엘리베이터 쓰지 않기, 안전 안내 전 건물 재진입 금지
 *   - collapse-explosion.*: 붕괴 징후(금이 길어짐·이상한 소리·문틀 변형·부스러기·바닥 기울어짐), 가스 냄새 시 전기 스위치·불 쓰지 않기·환기·밖에서 신고·이웃에 알리기
 *   [소방청·대한적십자사·질병관리청 응급처치 안내]
 *   - burn-care.*·burn-types.*: 흐르는 찬물로 식히기(식히는 시간은 일부러 적지 않음 — 교사가 최신 공식 지침 확인), 부풀기 전 장신구 빼기, 깨끗한 천으로 덮기, 된장·치약·버터·얼음·물집 터뜨리기는 오해,
 *     병원 판단 기준(넓은 물집·관절 부위·감전), 화학 화상은 닦지 않고 흐르는 물로 충분히 씻으며 묻은 옷 벗기기·약품 이름 챙기기, 전기 화상은 전원 먼저·맨손 금지·겉보다 속 손상·병원
 *   [기상청·질병관리청]
 *   - heat-cold.*: 온열질환 신호(어지러움·메스꺼움·많은 땀·근육 경련·붉고 뜨거운 몸), 한랭질환 신호(떨림·하얗고 무딘 피부·손가락 굳음·말 느려짐·졸림), 그늘·물·젖은 수건, 언 곳 문지르지 않기, 밝은 옷, 겹쳐 입기
 *   [기상청·행정안전부·국민재난안전포털·산림청]
 *   - storm-flood.*: 호우 때 하천변·지하차도·반지하 피하기, 흐르는 물 건너지 않기, 비 그친 뒤에도 하천 위험, 물웅덩이 전선 피하기, 태풍 전 창문 고정·배수구 살피기(어른과)·비상 가방
 *   - landslide-snow.*: 산사태 징후(흙탕물·돌 굴러 내림·나무 기울어짐·땅 갈라짐), 비탈·계곡 피하기, 천둥 들리면 건물 안·천둥 그칠 때까지 기다리기, 나무 아래·쇠 골대·우산 위험, 대설 때 이동 미루기·눈 쌓인 지붕 곁 피하기
 *   - disaster-text.*: 재난문자 종류 이름(위급재난문자·긴급재난문자·안전안내문자)과 종류별 기준·알림 방식 — 교사가 행정안전부 공식 기준으로 제시, 휴대전화 수신 설정 메뉴(기종마다 다름)
 *   [경찰청·국민재난안전포털]
 *   - terror-threat.*: 수상한 물건 만지지 않고 거리 두기·사진보다 신고·위치/모양/시각 말하기, 위협 반대쪽 출구, 바로 못 나가면 문 닫히는 곳에 숨기, 안내 따르기. 사람 신호는 행동으로만(겉모습·집단 언급 없음)
 *   [가상 수치 — 실제 통계 아님] fire-cause.intro.cause-chart(원인별 건수), home-escape.intro.time-chart(시간대별 건수), storm-flood.intro.rain-line(mm), heat-cold.intro.temp-line(°C),
 *     disaster-text.intro.kind-chart(받은 문자 수), landslide-snow.activity.snow-chart(cm). 우선순위 차례 문항(storm-flood.activity.prep-check, home-check)은 수업용 예시. */
(function () {
  const ALL = [];
  // 주제마다 공통 칸을 채우는 모듈 틀. sid = '<intro|activity|wrap>.<이름>'
  const MK = (topic, grades) => (sid, o) => Object.assign({ id: `saf-disaster.m.${topic}.${sid}`, schema: 'edu-module.v1', type: sid.split('.')[0], domain: 'saf-disaster', band: '중', topic: `saf-disaster.m.${topic}`, grades }, o);
  const sid = (s) => (typeof s === 'string' ? s : s.id || s.label);

  // ---- 카드 판 문항 조각: { prompt, toolOptions, target } (문항 levels[단계] 에도 그대로 쓴다) ----
  const strip = (cards) => cards.map((c) => { const x = Object.assign({}, c); delete x.to; delete x.ok; return x; });
  // 나누기: cards [{ id, text, to: 칸id }] — to 가 없으면 남겨야 하는 함정 카드
  const SB = (prompt, slots, cards, opt) => ({ prompt, toolOptions: Object.assign({ mode: 'sort', slots, cards: strip(cards) }, opt), target: { sort: Object.fromEntries(slots.map((s) => [sid(s), cards.filter((c) => c.to === sid(s)).map((c) => c.id)])) } });
  // 차례: cards 를 바른 차례로 적는다. trap = 차례 칸에 넣지 않는 함정 카드
  const OB = (prompt, cards, opt, trap) => ({ prompt, toolOptions: Object.assign({ mode: 'order', slots: cards.length, cards: [...cards, ...(trap || [])] }, opt), target: { order: cards.map((c) => c.id) } });
  // 짝: pairs [[칸 글, 카드 글]] + 함정 카드 글
  const MB = (prompt, pairs, extra, opt) => ({ prompt, toolOptions: Object.assign({ mode: 'match', slots: pairs.map((p, i) => ({ id: `s${i + 1}`, label: p[0] })), cards: [...pairs.map((p, i) => ({ id: `k${i + 1}`, text: p[1] })), ...(extra || []).map((t, i) => ({ id: `x${i + 1}`, text: t }))] }, opt), target: { match: Object.fromEntries(pairs.map((p, i) => [`s${i + 1}`, `k${i + 1}`])) } });
  // 고르기: cards [{ id, text, ok }] — ok 인 카드만 바구니에
  const PB = (prompt, basket, cards, opt) => ({ prompt, toolOptions: Object.assign({ mode: 'pick', basket, cards: strip(cards) }, opt), target: { pick: cards.filter((c) => c.ok).map((c) => c.id) } });
  // 점검표(kitchen checklist): items [{ id, text, ok }] — ok 인 것만 표시해야 맞음
  const CL = (prompt, title, items, opt) => ({ prompt, toolOptions: Object.assign({ mode: 'checklist', title, items: strip(items) }, opt), target: { checklist: items.filter((c) => c.ok).map((c) => c.id) } });
  // 문항 = 기본 조각 + 단계별 조각
  const IT = (base, easy, challenge, more) => Object.assign({}, base, { levels: Object.assign({}, easy ? { easy } : {}, challenge ? { challenge } : {}) }, more);
  const pickCards = (cards, ids) => ids.map((i) => cards.find((c) => c.id === i));

  // ---- 갈림길(dilemma): 깊이 3 나무 하나로 쉬움(1단)·기본(2단)·도전(3단) 판을 만든다 ----
  // 선택에 next 가 있으면 end = 그 단계에서 잘렸을 때 보일 마무리 글
  const cut = (sc, d) => Object.assign({}, sc, { choices: sc.choices.map((c) => {
    const x = Object.assign({}, c); delete x.end;
    if (c.next && d > 1) x.next = cut(c.next, d - 1);
    else { delete x.next; if (c.next) x.ending = c.end || '다음 단계에서 이어지는 장면을 따라가 봐요.'; }
    return x;
  }) });
  const paths = (good, d) => { const out = []; for (const g of good) { const p = g.slice(0, d); if (!out.some((q) => q.join('>') === p.join('>'))) out.push(p); } return out; };
  // p = { easy, base, challenge } 문항 글, good = 도전 단계의 바른 길 목록, R = 근거 카드, ok = 맞는 근거 id, more = { reasons, ok } 도전에만 더할 근거
  const DIL = (p, title, tree, good, R, ok, more, extra) => Object.assign({
    prompt: p.base, toolOptions: { title, scene: cut(tree, 2), reasons: R, compare: true }, target: { path: paths(good, 2), reasons: ok, some: true },
    levels: {
      easy: { prompt: p.easy, toolOptions: { scene: cut(tree, 1), reasons: [] }, target: { path: paths(good, 1) } },
      challenge: { prompt: p.challenge, toolOptions: { scene: cut(tree, 3), reasons: [...R, ...((more && more.reasons) || [])] }, target: { path: paths(good, 3), reasons: [...ok, ...((more && more.ok) || [])], some: true } },
    },
  }, extra);

  // ---- 칸 지도 ----
  const PIN = (prompt, opt, target, more) => Object.assign({ prompt, toolOptions: opt, target }, more);
  // ---- 기준표 글쓰기: 기본·쉬움(문장 틀)·도전(기준 하나 더) ----
  const RW = (prompt, opt, checks, easy, ch, more) => IT({ prompt, toolOptions: opt, target: { selfCheck: checks } },
    easy ? { prompt: easy.prompt, toolOptions: { starter: easy.starter } } : null,
    ch ? { prompt: ch.prompt, toolOptions: ch.toolOptions || {}, target: { selfCheck: [...checks, ...ch.add] } } : null, more);
  // ---- 분류판(sortboard 글 카드 모드): cards [{ id, text, to: 칸 이름 }] — to 없는 카드는 함정 ----
  // 쉬움 = 앞의 n장만(limit), 도전 = more 카드(함정 포함)를 더한다. 단계마다 target 을 다시 셈한다.
  const sortOf = (slots, cards) => Object.fromEntries(slots.map((s) => [s, cards.filter((c) => c.to === s).map((c) => c.id)]));
  const SBT = (p, slots, cards, n, more, opt) => ({
    prompt: p.base, toolOptions: Object.assign({ slots, cards: strip(cards) }, opt), target: { sort: sortOf(slots, cards) },
    levels: Object.assign({},
      n ? { easy: { prompt: p.easy, toolOptions: { limit: n }, target: { sort: sortOf(slots, cards.slice(0, n)) } } } : {},
      more && more.length ? { challenge: { prompt: p.challenge, toolOptions: { more: strip(more) }, target: { sort: sortOf(slots, [...cards, ...more]) } } } : {}),
  });
  const EXSB = (p, slots, cards, n, more) => { const x = SBT(p, slots, cards, n, more); return { type: 'tool', tool: 'sortboard', options: x.toolOptions, prompt: x.prompt, target: x.target, levels: x.levels, difficulty: 0.2 }; };

  // ==== 7학년 · 화재 원인 사례 분석과 대응·신고·전파 (saf-disaster.m.fire-cause) ====
  {
    const M = MK('fire-cause', [7]);
    // 가상 자료 — 실제 통계가 아니다(화면 제목에 밝힌다)
    const CAUSE = [['전기 기구·멀티탭', 9], ['담배 등 불씨', 6], ['요리 중 자리 비움', 5], ['난로·열기구', 4], ['불장난', 2]];
    // 가상 중학교 2층 칸 지도
    const FLOOR = { grid: [6, 4], title: '가상의 우리 중학교 2층', regions: [
      { name: '서쪽 계단', cells: [[0, 0], [0, 1]] }, { name: '과학실', cells: [[1, 0], [2, 0]] }, { name: '우리 반', cells: [[3, 0], [4, 0]] },
      { name: '동쪽 계단', cells: [[5, 0], [5, 1]] }, { name: '복도', cells: [[1, 1], [2, 1], [3, 1], [4, 1]] },
      { name: '화장실', cells: [[0, 2], [1, 2]] }, { name: '엘리베이터', cells: [[2, 2]] }, { name: '도서실', cells: [[3, 2], [4, 2], [5, 2]] },
      { name: '운동장 집결지', cells: [[0, 3], [1, 3], [2, 3], [3, 3], [4, 3], [5, 3]] },
    ] };
    const D1 = { text: '쉬는 시간, 복도 끝 쓰레기통에서 연기가 조금씩 올라온다. 주변에는 친구 몇 명뿐이다.', ask: '가장 먼저 무엇을 할까?', motif: 'cloud', choices: [
      { id: 'alone', text: '혼자 물병 물을 부어 끄려 한다', result: '연기가 오히려 더 퍼지고 불씨가 그대로 남는다.', impact: [{ who: '나', text: '연기를 마신다', tone: -1 }], why: '불을 처음 본 사람은 먼저 "불이야" 하고 크게 알려야 해요. 혼자 끄려다 알릴 때를 놓쳐요.', end: '혼자 끄려다 알릴 때를 놓쳤어요.',
        next: { text: '불씨가 쓰레기통 옆 종이 상자로 옮겨붙었다.', choices: [
          { id: 'keep', text: '물을 더 가져와 계속 끈다', result: '연기가 복도에 가득 찬다.', impact: [{ who: '같은 층 친구들', text: '불이 난 줄 모른다', tone: -1 }], why: '끄다가 안 되면 더 하지 않고 바로 알리고 피해요.' },
          { id: 'late', text: '그제야 "불이야"를 외치고 피한다', result: '늦게나마 사람들이 움직인다.', impact: [{ who: '같은 층 친구들', text: '대피가 늦어진다', tone: -1 }] }] } },
      { id: 'shout', text: '"불이야!" 크게 외치고 가까운 선생님께 알린다', result: '복도에 있던 친구들이 고개를 돌리고 선생님이 뛰어온다.', impact: [{ who: '같은 층 친구들', text: '불이 난 것을 안다', tone: 1 }], end: '크게 알려 모두가 알았어요.',
        next: { text: '선생님이 소화기를 가지러 가며 "비상벨 눌러!"라고 한다.', choices: [
          { id: 'bell', text: '가까운 비상벨을 누르고 친구들과 계단 쪽으로 간다', result: '경보가 울리고 다른 반도 대피를 시작한다.', impact: [{ who: '다른 반', text: '함께 대피한다', tone: 1 }], end: '경보를 울리고 대피했어요.',
            next: { text: '계단을 내려가는데 친구가 "가방 가지러 교실에 갔다 오자"고 한다.', choices: [
              { id: 'go', text: '가방을 가지러 교실로 돌아간다', result: '연기가 짙어진 복도로 다시 들어간다.', impact: [{ who: '나와 친구', text: '연기 속에 갇힐 수 있다', tone: -1 }], why: '대피할 때는 소지품을 챙기지 않아요. 물건은 다시 살 수 있어요.' },
              { id: 'out', text: '"물건은 두고 가자"며 집결지로 간다', result: '집결지에서 인원 확인에 바로 답한다.', impact: [{ who: '담임 선생님', text: '인원을 빨리 확인한다', tone: 1 }] }] } },
          { id: 'watch', text: '불이 어떻게 되나 옆에서 지켜본다', result: '연기를 마시며 기침이 난다.', impact: [{ who: '나', text: '연기를 마신다', tone: -1 }], why: '알린 뒤에는 불에서 떨어져 대피해요. 구경하는 동안 연기를 마셔요.' }] } },
      { id: 'phone', text: '누군가 신고했겠지 하고 사진만 찍는다', result: '아무도 신고하지 않은 채 시간이 흐른다.', impact: [{ who: '모두', text: '대피가 늦어진다', tone: -1 }], why: '"누군가 했겠지"라고 생각하면 아무도 하지 않을 수 있어요. 본 사람이 알려요.', ending: '모두가 남이 했을 거라 여겨 늦어졌어요.' }] };
    const R1 = [{ id: 'r1', text: '불을 처음 본 사람이 알려야 모두가 피할 시간을 얻는다' }, { id: 'r2', text: '연기는 불보다 먼저 사람을 다치게 한다' },
      { id: 'r3', text: '불이 작으면 알리지 않고 혼자 꺼도 된다', why: '작은 불도 순식간에 커져요. 먼저 알리고, 끌지는 어른과 판단해요.' }, { id: 'r4', text: '누군가 이미 신고했을 것이다', why: '본 사람이 직접 알리고 신고해야 해요.' }];
    const R1MORE = { reasons: [{ id: 'r5', text: '대피할 때 소지품보다 사람이 먼저다' }], ok: ['r5'] };
    const D2 = { text: '방과 후 과학실 앞을 지나는데 문틈으로 타는 냄새와 연기가 새어 나온다. 안에는 아무도 없어 보인다.', ask: '어떻게 할까?', motif: 'cloud', choices: [
      { id: 'open', text: '문을 활짝 열고 들어가 살펴본다', result: '문을 열자 연기가 확 밀려 나온다.', impact: [{ who: '나', text: '연기를 크게 마신다', tone: -1 }], why: '연기가 새는 문을 함부로 열면 연기와 불길이 밀려 나와요. 열지 말고 알려요.', end: '문을 열었다가 연기를 마셨어요.',
        next: { text: '기침이 나고 눈이 따갑다.', choices: [
          { id: 'stay', text: '그래도 안을 더 살핀다', result: '연기 속에서 방향을 잃는다.', impact: [{ who: '나', text: '갇힐 수 있다', tone: -1 }] },
          { id: 'back', text: '문을 닫고 물러나 소리쳐 알린다', result: '교무실 선생님이 소리를 듣고 나온다.', impact: [{ who: '선생님', text: '불이 난 것을 안다', tone: 1 }] }] } },
      { id: 'tell', text: '문을 열지 않고 "불이야!" 외치며 교무실로 알린다', result: '선생님들이 나와 비상벨을 누른다.', impact: [{ who: '학교에 남은 사람', text: '대피를 시작한다', tone: 1 }], end: '열지 않고 알려 모두 피했어요.',
        next: { text: '선생님이 "119에 신고해 줄래?"라고 한다.', choices: [
          { id: 'call', text: '안전한 곳으로 나와 119에 학교 이름·층·무엇이 타는지 말한다', result: '소방대가 바로 위치를 찾는다.', impact: [{ who: '소방대', text: '빨리 도착한다', tone: 1 }], end: '정확히 신고해 소방대가 빨리 왔어요.',
            next: { text: '신고를 마쳤는데 운동장에 동아리 친구들이 아직 모르고 있다.', choices: [
              { id: 'spread', text: '친구들에게 "과학실에 불났어, 건물에서 떨어져"라고 알린다', result: '친구들이 건물에서 멀리 떨어진다.', impact: [{ who: '동아리 친구들', text: '피한다', tone: 1 }] },
              { id: 'quiet', text: '괜히 놀랄까 봐 말하지 않는다', result: '친구들이 건물 입구로 다가간다.', impact: [{ who: '동아리 친구들', text: '위험한 쪽으로 간다', tone: -1 }], why: '주변에 알리는 것(전파)도 대응의 한 부분이에요.' }] } },
          { id: 'hang', text: '"잘 모르는데요" 하고 바로 끊는다', result: '소방대가 위치를 다시 물어야 한다.', impact: [{ who: '소방대', text: '늦게 도착한다', tone: -1 }], why: '신고할 때는 어디서·무엇이 타는지·사람이 있는지를 침착하게 말해요.' }] } },
      { id: 'leave', text: '내 일이 아니니 그냥 집에 간다', result: '아무도 모른 채 연기가 복도로 번진다.', impact: [{ who: '학교에 남은 사람', text: '대피가 늦어진다', tone: -1 }], why: '불을 본 사람이 알리지 않으면 아무도 모를 수 있어요.', ending: '알리지 않아 대피가 늦어졌어요.' }] };
    const R2 = [{ id: 'r1', text: '연기가 새는 문은 열지 말고 알린다' }, { id: 'r2', text: '신고는 위치와 상황을 정확히 말해야 빨리 도움이 온다' },
      { id: 'r3', text: '안을 확인해야 신고할 수 있다', why: '확인하려다 다쳐요. 본 것만으로 알리고 신고해요.' }, { id: 'r4', text: '아무도 없는 곳의 불은 알릴 필요가 없다', why: '불은 번져서 사람이 있는 곳까지 가요.' }];
    const R2MORE = { reasons: [{ id: 'r5', text: '모르는 사람에게 알리는 것(전파)도 대응이다' }], ok: ['r5'] };
    const DRILL = [{ id: 'd1', text: '경보 듣고 하던 일 멈추기' }, { id: 'd2', text: '자세 낮추고 코·입 가리기' }, { id: 'd3', text: '계단으로 이동하기' }, { id: 'd4', text: '집결지에서 인원 확인' }];
    const DSAFE = ['복도·계단에 걸릴 물건이 없다', '비상구 문이 잠기지 않았다', '뛰지 않고 밀지 않기로 약속했다', '몸이 불편한 친구를 도울 사람을 정했다'];
    const REVIEW = [{ id: 'v1', text: '경보를 듣고 하던 일을 바로 멈췄다' }, { id: 'v2', text: '코와 입을 가리고 자세를 낮췄다' }, { id: 'v3', text: '뛰지 않고 밀지 않았다' },
      { id: 'v4', text: '엘리베이터 대신 계단을 썼다' }, { id: 'v5', text: '집결지 인원 확인에 바로 답했다' }];

    ALL.push(
      // ---- 도입 ----
      M('intro.cause-chart', {
        title: '가상 그래프로 화재 원인 읽기', method: '예시 그래프로 화재 원인 읽기', tool: 'chart', minutes: 6,
        levels: { easy: '교사가 막대 3개(위 세 원인)만 손으로 짚으며 가장 긴 막대를 함께 찾는다.', base: '막대 5개를 모두 읽고 가장 많은 원인과 우리 학교에서 생길 만한 원인을 고른다.', challenge: '막대 2개를 견주어 우리 반 예방 우선순위를 한 줄로 말한다.' },
        intro: {
          teacher: '"이 그래프에서 가장 긴 막대는 무엇이고, 그 원인은 우리 학교에도 있을까요?" 가상 막대그래프를 띄우고 이 자료는 수업용으로 지어낸 예시이며 실제 통계가 아니라고 먼저 밝힌다. 시연 단추로 가장 긴 막대가 골라지는 모습을 보인다. "불은 담배나 불장난 때문에만 난다"는 말이 나오면 "교실 뒤 멀티탭에 충전기가 여러 개 꽂혀 있다면 어떨까요?"라고 되묻는다.',
          student: '가상 그래프에서 가장 많은 화재 원인을 찾고, 그 가운데 우리 학교에서 생길 만한 원인을 하나 골라 까닭을 말해요.',
          demo: { tool: 'chart', options: { type: 'bar', mode: 'read', title: '화재 원인(가상 예시 자료)', unit: '건', xLabel: '원인', yLabel: '건수', data: CAUSE, question: '가장 많은 원인은?', choices: CAUSE.map((d) => d[0]) }, sequence: [{ pick: 0 }] },
          art: { draw: 'a paper-cut classroom wall with an overloaded power strip, a portable heater and a bar chart poster beside it', banner: '불은 어디에서 시작될까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '그래프 수치는 모두 지어낸 예시다. 실제 통계를 보이려면 소방청 국가화재정보시스템 자료로 교사가 바꾼다.',
      }),
      M('intro.cause-map', {
        title: '우리 학교 불씨 연상 지도', method: '교실 속 불씨 연상 지도', tool: 'mindmap', minutes: 6,
        levels: { easy: '가지 3개(전기·열기구·불씨)에 교사가 예 카드를 하나씩 함께 붙인다.', base: '가지 3개에 교실에서 본 예를 하나씩 더 말해 붙인다.', challenge: '가지마다 예방 행동 하나를 덧붙여 말한다.' },
        intro: {
          teacher: '"우리 교실에서 불씨가 될 수 있는 것을 세 가지 가지로 나눠 볼까요?" 시연 단추로 예 카드가 전기·열기구·불씨 가지에 붙는 모습을 보인다. "학교는 선생님이 관리하니 불이 안 난다"는 말에는 "쉬는 시간에 교실 뒤 충전기를 보는 사람은 누구일까요?"라고 되묻는다. 원인을 알면 막을 길도 보인다는 점을 오늘의 열쇠로 적는다.',
          student: '\'우리 학교 불씨\' 가지에 교실과 복도에서 본 불씨 예를 떠올려 붙이고, 짝과 한 가지씩 더 말해요.',
          demo: { tool: 'mindmap', options: { mode: 'sort', topic: '우리 학교 불씨', slots: ['전기', '열기구', '불씨'], cards: [
            { id: 'e1', text: '문어발 멀티탭' }, { id: 'h1', text: '교무실 전기난로' }, { id: 'f1', text: '버려진 담배꽁초' }, { id: 'e2', text: '뜨거워진 충전기' }] }, sequence: [{ sort: { 전기: ['e1', 'e2'], 열기구: ['h1'], 불씨: ['f1'] } }] },
          art: { draw: 'a paper-cut mind map on a classroom board with three branches showing a plug, a small heater and a match', banner: '우리 학교 불씨는?', extra: [{ motif: 'leaf', x: 300, y: 96 }] },
        },
      }),

      // ---- 활동 ----
      M('activity.first-minute', {
        title: '불을 본 첫 순간 갈림길', method: '불을 본 첫 순간 갈림길', tool: 'dilemma', minutes: 15,
        levels: { easy: '갈림길 1번에서 고르고 결과 장면을 본다.', base: '갈림길 2번을 끝까지 가 본 뒤 근거 카드를 고른다.', challenge: '갈림길 3번까지 가고, 끝에서 \'다른 선택을 했다면\' 칸을 보며 결과를 견준다(근거 카드가 하나 더 섞인다).' },
        activity: {
          title: '불을 본 첫 순간 갈림길', tool: 'dilemma',
          teacher: '"쓰레기통에서 연기가 나는 걸 본 사람이 나 혼자라면, 가장 먼저 무엇을 해야 할까요?" 학생마다 한 길을 끝까지 가 본 뒤 되돌아가 다른 길과 견주게 한다. "작은 불은 혼자 끄면 된다"는 학생에게 "끄다가 안 되면 그때 알려도 늦지 않을까요?"라고 되묻는다. "누군가 신고했겠지"라는 생각이 왜 위험한지 끝 장면에서 함께 짚는다.',
          task: '불을 처음 본 상황에서 길을 골라 결과를 따라가고, 끝에서 내 선택의 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL({ easy: '복도 쓰레기통에서 연기가 나요. 한 번 골라 결과를 보세요.', base: '복도 쓰레기통에서 연기가 나요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '복도 쓰레기통에서 연기가 나요. 세 번 골라 끝까지 가고 근거를 모두 고르세요.' },
              '복도 끝 연기', D1, [['shout', 'bell', 'out']], R1, ['r1', 'r2'], R1MORE),
            DIL({ easy: '과학실 문틈으로 연기가 새요. 한 번 골라 결과를 보세요.', base: '과학실 문틈으로 연기가 새요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '과학실 문틈으로 연기가 새요. 세 번 골라 끝까지 가고, 주변에 알리기까지 생각한 근거도 고르세요.' },
              '방과 후 과학실', D2, [['tell', 'call', 'spread']], R2, ['r1', 'r2'], R2MORE),
            { prompt: '짝과 두 상황에서 "가장 먼저 한 일"이 무엇이었는지, 왜 그 차례인지 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '불을 처음 보았을 때 가장 먼저 할 일은?', options: ['혼자 끄기', '크게 "불이야" 외쳐 알리기', '사진 찍기'], answer: '크게 "불이야" 외쳐 알리기' }] },
        notes: '갈림길 결과 장면은 가상이다. 실제 화재 경험은 묻지 않는다.',
      }),
      M('activity.report-write', {
        title: '119 신고 문장 쓰기', method: '119 신고 문장 쓰고 기준표 점검', tool: 'rubric-writing', minutes: 15,
        levels: { easy: '문장 틀("여기는 ___입니다. ___에서 불이 났습니다. 사람이 ___")의 빈칸을 채워 쓴다.', base: '신고 문장을 직접 쓰고 기준 3개(어디·무엇이·사람 있음)를 스스로 점검한다.', challenge: '마지막 문항에서 신고 문장에 같은 층 사람에게 알리는 전파 문장까지 더해 쓰고 기준 하나를 더 점검한다.' },
        activity: {
          title: '119 신고 문장 쓰기', tool: 'rubric-writing',
          teacher: '"\'불났어요, 빨리 와 주세요!\'만 말하면 소방대는 어디로 가야 할까요?" 두 신고 문장을 견주어 읽은 뒤 가상 장면마다 신고 문장을 쓰게 한다. "신고는 어른만 하는 것"이라는 학생에게 "불을 본 사람이 나뿐이라면 누가 해야 할까요?"라고 되묻는다. 신고 문장에는 실제 내 집 주소나 이름이 아니라 가상 장소를 쓰게 한다.',
          task: '가상 화재 장면을 보고 119에 할 신고 문장(어디·무엇이·사람 있음)을 쓰고 기준표로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RW('가상 장면의 119 신고 문장을 쓰세요: ○○중학교 2층 과학실에서 연기가 나고, 복도에 학생들이 있다.',
              { topic: '○○중학교 2층 과학실에서 연기가 나고 복도에 학생들이 있어요. 119에 할 신고 문장을 쓰세요.', minChars: 25, maxChars: 160, minSentences: 2, maxSentences: 4, title: '119 신고 문장' },
              ['어디인지(건물·층)를 썼다', '무엇이 타는지·연기가 나는지 썼다', '사람이 있는지 썼다'],
              { prompt: '틀을 따라 과학실 장면의 신고 문장을 쓰세요.', starter: '여기는 ___입니다. ___에서 불이 났습니다. 사람이 ___.' }),
            RW('가상 장면의 119 신고 문장을 쓰세요: 아파트 3층 복도 끝 쓰레기통에서 불이 났고 이웃은 모른다.',
              { topic: '아파트 3층 복도 끝 쓰레기통에서 불이 났고 이웃은 아직 몰라요. 119에 할 신고 문장을 쓰세요.', minChars: 25, maxChars: 160, minSentences: 2, maxSentences: 4, title: '119 신고 문장' },
              ['어디인지(건물·층)를 썼다', '무엇이 타는지 썼다', '사람이 있는지 썼다'],
              { prompt: '틀을 따라 아파트 장면의 신고 문장을 쓰세요.', starter: '여기는 ___입니다. ___에서 불이 났습니다. 이웃이 ___.' }),
            RW('신고를 마친 뒤 같은 층 사람들에게 알리는 말을 두 문장으로 쓰세요.',
              { topic: '아파트 3층 화재를 신고한 뒤, 같은 층 이웃에게 알리는 말을 두 문장으로 쓰세요.', minChars: 20, maxChars: 140, minSentences: 2, maxSentences: 3, title: '주변에 알리기' },
              ['무슨 일이 났는지 썼다', '어떻게 피하라고 할지 썼다', '짧고 크게 말할 수 있게 썼다'],
              { prompt: '틀을 따라 이웃에게 알리는 말을 쓰세요.', starter: '불이야! ___에서 불이 났어요. ___로 피하세요.' },
              { prompt: '신고 문장과 같은 층에 알리는 전파 문장을 이어서 쓰고 기준표를 모두 점검하세요.', toolOptions: { maxSentences: 5, minSentences: 3 }, add: ['신고 문장과 알리는 말을 모두 썼다'] },
              { conclude: '신고는 어디·무엇이·사람 있음을 침착하게 말하고, 신고한 뒤에는 주변에도 알려 함께 피해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '119 신고에 꼭 넣을 것을 써요.', columns: ['칸', '내 신고 문장'], cells: [['어디', ''], ['무엇이', ''], ['사람 있음', '']], answer: '건물·층 / 타는 것·연기 / 사람이 있는지' }],
          easy: [{ type: 'choice', prompt: '신고할 때 꼭 말할 것에 ○ 해요.', options: ['불이 난 곳(어디)', '내 기분'], answer: '불이 난 곳(어디)' }] },
      }),
      M('activity.route-map', {
        title: '학교 지도에 대피 경로 핀', method: '학교 지도에 대피 경로·비상구 표시', tool: 'map', minutes: 15,
        levels: { easy: '핀을 놓으면 그 칸 이름이 바로 읽히고, 주 경로(우리 반→가까운 계단→집결지)만 차례로 꽂는다.', base: '주 경로 핀을 꽂고, 가까운 계단을 쓸 수 없을 때의 보조 경로 계단도 꽂는다.', challenge: '마지막 문항에서 동쪽 계단이 연기로 막힌 조건으로 보조 경로를 다시 정하고, 엘리베이터를 쓰지 않는 까닭을 고른다.' },
        activity: {
          title: '학교 지도에 대피 경로 핀', tool: 'map',
          teacher: '"우리 반에서 가장 가까운 계단은 어디이고, 그 계단이 막히면 어디로 갈까요?" 칸 지도에서 우리 반을 먼저 찾게 한 뒤 경로 지점을 차례로 핀으로 꽂게 한다. "엘리베이터가 더 빠르다"는 학생에게 "불이 나 전기가 끊기면 엘리베이터 안은 어떻게 될까요?"라고 되묻는다. 경로는 늘 두 갈래를 알아 두어야 한다는 점을 짚는다.',
          task: '가상 학교 2층 칸 지도에서 우리 반·가까운 계단·집결지를 차례로 핀으로 꽂고, 계단이 막혔을 때 다른 길도 정해요.',
          levels: { easy: { readout: true }, base: {}, challenge: {} },
          items: [
            PIN('먼저 지도에서 우리 반 자리에 핀을 꽂으세요.', FLOOR, { region: '우리 반' }),
            PIN('우리 반에서 가장 가까운 계단에 핀을 꽂으세요.', FLOOR, { region: '동쪽 계단' }),
            PIN('계단으로 내려간 뒤 모두가 모일 곳에 핀을 꽂으세요.', FLOOR, { region: '운동장 집결지' }),
            IT(PIN('과학실 쪽에서 연기가 나요. 그쪽을 피해 쓸 계단에 핀을 꽂으세요.', FLOOR, { region: '동쪽 계단' }),
              null,
              { prompt: '동쪽 계단이 연기로 막혔어요. 엘리베이터를 쓰지 않고 다시 고를 계단에 핀을 꽂고, 그 까닭을 고르세요.', toolOptions: { ask: { q: '엘리베이터를 쓰지 않는 까닭은?', choices: ['전기가 끊기면 안에 갇힐 수 있다', '엘리베이터는 느리다', '사람이 많아 답답하다'] } }, target: { region: '서쪽 계단', pick: 0 } },
              { conclude: '대피 경로는 가까운 길과 막혔을 때의 길 두 가지를 알아 두고, 불이 나면 엘리베이터 대신 계단을 써요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '우리 반 대피 경로를 써요(실제 학교 안내도를 보고).', columns: ['경로', '지나는 곳'], cells: [['주 경로', ''], ['막혔을 때', '']] }] },
        notes: '칸 지도는 가상 학교다. 활동지에는 실제 우리 학교 피난 안내도를 보고 쓰게 한다.',
      }),
      M('activity.drill-run', {
        title: '화재 대피 훈련 순서와 실행', method: '화재 대피 훈련 순서와 실행', tool: 'timer', minutes: 15,
        levels: { easy: '순서 카드 3장(멈추기·자세 낮추기·계단 이동)만 차례로 놓는다.', base: '순서 카드 4장을 놓고 훈련 전 안전 점검 4개를 표시한 뒤 훈련하고 \'해 보았어요\'를 누른다.', challenge: '모둠 역할(앞장·끝에서 확인)을 맡아 훈련하고, 마지막 문항에서 모둠이 집결지까지 걸린 시간을 초시계로 재어 적는다.' },
        activity: {
          title: '화재 대피 훈련 순서와 실행', tool: 'timer',
          teacher: '"경보가 울리면 가장 먼저 무엇을 할까요? 가방을 챙기는 것은 몇 번째일까요?" 순서 카드를 놓은 뒤 안전 점검을 소리 내어 하나씩 읽고 표시하게 한다. "훈련이니까 대충 걸어 나가도 된다"는 학생에게 "진짜 연기 속에서는 연습한 만큼만 몸이 움직여요"라고 말해 준다. 훈련 중에는 뛰지 않고 밀지 않는 것이 시간보다 먼저라고 짚는다.',
          task: '화재 대피 순서 카드를 차례로 놓고 훈련 전 안전 점검을 한 뒤, 실제로 훈련하고 \'해 보았어요\'를 눌러요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT({ prompt: '화재 대피 순서 카드를 차례대로 놓고, 훈련 전 안전 점검을 모두 표시하세요.', toolOptions: { title: '화재 대피 순서', cards: [DRILL[2].text, DRILL[0].text, DRILL[3].text, DRILL[1].text], safety: DSAFE }, target: { order: DRILL.map((c) => c.text), safety: true } },
              { prompt: '화재 대피 순서 세 단계를 차례대로 놓으세요.', toolOptions: { cards: [DRILL[2].text, DRILL[0].text, DRILL[1].text], safety: [] }, target: { order: DRILL.slice(0, 3).map((c) => c.text) } }),
            { prompt: '선생님 안내에 따라 실제로 화재 대피 훈련을 하고 돌아와 표시하세요.', free: true, toolOptions: { doneLabel: '훈련을 해 보았어요' } },
            IT({ prompt: '훈련을 마친 뒤 할 일을 차례대로 놓으세요.', toolOptions: { title: '훈련 뒤 할 일', cards: ['잘된 점·고칠 점 나누기', '집결지에서 인원 확인', '선생님께 우리 반 인원 보고'] }, target: { order: ['집결지에서 인원 확인', '선생님께 우리 반 인원 보고', '잘된 점·고칠 점 나누기'] } },
              null,
              { prompt: '모둠이 집결지까지 걸린 시간을 초시계로 재어 적으세요(빠르기보다 안전이 먼저예요).', toolOptions: { title: '우리 모둠 기록', cards: [], fields: [{ label: '걸린 시간', unit: '초', step: 1 }], stopwatch: true }, target: { records: true } },
              { conclude: '대피 훈련은 멈추기→자세 낮추기→계단→인원 확인 차례를 몸에 익히는 일이에요. 빠르기보다 밀지 않는 것이 먼저예요.' }),
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '불이 나면 엘리베이터 대신 ___으로 대피해요.', answer: '계단' }] },
        notes: '실제 훈련은 학교 재난 대비 훈련 계획에 맞춰 한다(학교안전교육 고시 별표 1 참고5: 유형을 달리해 매 학년도 2종류 이상).',
      }),

      // ---- 정리 ----
      M('wrap.drill-review', {
        title: '화재 훈련 돌아보기 점검표', method: '훈련 돌아보기 점검표', tool: 'kitchen', minutes: 9,
        levels: { easy: '점검 항목 3개에 내가 한 것을 표시한다.', base: '점검 항목 5개에 내가 한 것을 표시한다.', challenge: '항목 5개를 표시한 뒤 다음 훈련에서 고칠 점을 한 줄로 쓴다.' },
        wrap: {
          teacher: '"오늘 훈련에서 내가 정말로 한 것만 표시해 볼까요? 못 한 것은 다음에 고칠 점이에요." 점검 항목을 한 줄씩 읽어 주고 스스로 표시하게 한다. "다 잘했다"고만 쓰는 학생에게 "코와 입을 가린 손은 집결지까지 계속 그대로였나요?"라고 되묻는다. 친구의 잘못을 지적하는 시간이 아니라 내 행동을 돌아보는 시간이라고 말해 준다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title: '오늘 화재 대피 훈련', items: REVIEW }, prompt: '오늘 훈련에서 내가 한 것에 스스로 표시해요.', target: { selfCheck: true }, difficulty: 0.1 },
              { prompt: '오늘 훈련에서 내가 한 것 세 가지에 표시해요.', toolOptions: { items: REVIEW.slice(0, 3) } }),
            { type: 'choice', prompt: '대피하다 친구가 "가방 가지러 가자"고 할 때 알맞은 말은?', options: ['빨리 갔다 오자', '물건은 두고 집결지로 가자', '나는 기다릴게'], answer: 1, difficulty: 0.15, explain: '대피할 때는 소지품을 챙기지 않아요.' },
            { type: 'short', prompt: '다음 화재 대피 훈련에서 내가 고칠 점 한 가지를 써요.' },
          ],
        },
        worksheet: {
          title: '화재 대피 훈련 돌아보기',
          items: [
            { type: 'check', prompt: '오늘 훈련에서 내가 한 것에 표시해요.', options: ['하던 일 멈추기', '코·입 가리고 자세 낮추기', '계단으로 이동', '인원 확인에 답하기'] },
            { type: 'short', prompt: '다음 훈련에서 고칠 점을 한 문장으로 써요.' },
          ],
        },
      }),
      M('wrap.prevent-sort', {
        title: '원인별 예방 행동 바구니', method: '원인별 예방 행동 정리', tool: 'sortboard', minutes: 9,
        levels: { easy: '예방 카드 4장을 전기·열기구·불씨 바구니에 나누고, 틀린 바구니에 넣으면 까닭을 듣고 되돌아온다.', base: '예방 카드 6장을 세 바구니에 나누고, 우리 반이 지킬 하나를 고른다.', challenge: '함정 카드 2장이 더 섞인 판에서 나누고, 빠진 예방 행동 하나를 직접 만들어 쓴다.' },
        wrap: {
          teacher: '"오늘 찾은 원인마다 우리가 막을 수 있는 행동은 무엇일까요?" 바구니에 다 나누면 우리 반이 이번 주에 꼭 지킬 하나를 손을 들어 정하고 칠판에 별을 그린다. "불조심은 선생님 몫"이라는 말에는 "교실 뒤 충전기를 매일 뽑을 수 있는 사람은 누구일까요?"라고 되묻는다.',
          exitTicket: [
            EXSB({ base: '예방 행동 카드를 원인 바구니에 나눠요.', easy: '예방 행동 카드 네 장을 원인 바구니에 나눠요.', challenge: '함정 카드는 남기고 예방 행동 카드를 원인 바구니에 나눠요.' },
              ['전기', '열기구', '불씨'], [
                { id: 'e1', text: '멀티탭에 플러그 겹겹이 꽂지 않기', to: '전기' }, { id: 'h1', text: '전기난로 곁에 옷·종이 두지 않기', to: '열기구' },
                { id: 'f1', text: '성냥·라이터로 장난치지 않기', to: '불씨' }, { id: 'e2', text: '쓰지 않는 충전기 뽑아 두기', to: '전기' },
                { id: 'h2', text: '난로 켠 채 자리 비우지 않기', to: '열기구' }, { id: 'f2', text: '버려진 담배꽁초 보면 어른께 알리기', to: '불씨' }], 4,
              [{ id: 't1', text: '불 끄는 연습으로 종이 태워 보기' }, { id: 't2', text: '뜨거운 충전기는 이불로 덮어 식히기' }]),
            { type: 'choice', prompt: '우리 교실에서 오늘부터 가장 쉽게 지킬 수 있는 예방 행동은?', options: ['쓰지 않는 충전기 뽑아 두기', '소화기 새로 사기', '전기 공사하기'], answer: 0, difficulty: 0.15, explain: '학생이 매일 할 수 있는 예방부터 시작해요.' },
            { type: 'short', prompt: '바구니에 없던 예방 행동 하나를 직접 만들어 써요.' },
          ],
        },
        worksheet: {
          title: '화재 원인과 예방',
          items: [
            { type: 'table', prompt: '원인마다 예방 행동을 하나씩 써요.', columns: ['원인', '예방 행동'], cells: [['전기', ''], ['열기구', ''], ['불씨', '']], answer: '플러그 겹쳐 꽂지 않기 / 난로 곁에 물건 두지 않기 / 불장난하지 않기' },
            { type: 'short', prompt: '우리 반이 이번 주에 지킬 예방 행동 하나를 써요.' },
          ],
        },
      }),
    );
  }

  // ==== 7학년 · 장소별 지진 행동 판단 (saf-disaster.m.quake-places) ====
  {
    const M = MK('quake-places', [7]);
    const SCHOOL = { grid: [6, 4], title: '가상의 우리 중학교 1층', regions: [
      { name: '교실', cells: [[0, 0], [1, 0], [0, 1], [1, 1]] }, { name: '복도', cells: [[2, 0], [3, 0], [2, 1], [3, 1]] },
      { name: '계단', cells: [[4, 0], [4, 1]] }, { name: '엘리베이터', cells: [[5, 0]] }, { name: '매점', cells: [[5, 1]] },
      { name: '현관 유리문', cells: [[0, 2], [1, 2]] }, { name: '담장 옆 화단', cells: [[2, 2], [3, 2]] }, { name: '체육관', cells: [[4, 2], [5, 2]] },
      { name: '운동장 가운데', cells: [[0, 3], [1, 3], [2, 3], [3, 3], [4, 3], [5, 3]] },
    ] };
    const SCENES = [{ id: 's1', text: '교실이 흔들리기 시작한다', motif: 'house' }, { id: 's2', text: '책상 아래에서 머리를 감싸고 다리를 잡는다', motif: 'star' },
      { id: 's3', text: '흔들림이 멈춘다', motif: 'cloud' }, { id: 's4', text: '가방으로 머리를 가리고 계단으로 운동장에 간다', motif: 'sun' }];
    const D1 = { text: '점심시간, 매점 진열대 앞에서 줄을 서 있는데 바닥이 크게 흔들리기 시작한다.', ask: '흔들리는 동안 어떻게 할까?', motif: 'house', choices: [
      { id: 'run', text: '곧바로 출입문 밖으로 뛰어나간다', result: '흔들리는 바닥에서 넘어지고, 문 위 간판 조각이 떨어진다.', impact: [{ who: '나', text: '넘어지거나 맞을 수 있다', tone: -1 }], why: '흔들리는 동안 뛰어나가면 넘어지거나 떨어지는 물건에 맞아요. 먼저 몸을 보호해요.', end: '뛰어나가다 넘어질 뻔했어요.',
        next: { text: '문 앞에 사람들이 몰려 서로 밀친다.', choices: [
          { id: 'push', text: '앞사람을 밀며 빠져나간다', result: '여럿이 함께 넘어진다.', impact: [{ who: '앞사람', text: '넘어진다', tone: -1 }] },
          { id: 'crouch', text: '진열대에서 떨어져 몸을 낮추고 머리를 감싼다', result: '흔들림이 멈출 때까지 버틴다.', impact: [{ who: '나', text: '머리를 지킨다', tone: 1 }] }] } },
      { id: 'cover', text: '진열대에서 떨어져 몸을 낮추고 가방으로 머리를 감싼다', result: '진열대에서 과자 상자가 떨어지지만 몸에 닿지 않는다.', impact: [{ who: '나', text: '머리를 지킨다', tone: 1 }], end: '진열대에서 떨어져 머리를 지켰어요.',
        next: { text: '흔들림이 멈췄다. 친구가 "엘리베이터 타고 내려가자"고 한다.', choices: [
          { id: 'lift', text: '엘리베이터를 탄다', result: '다시 흔들리자 엘리베이터가 멈춰 안에 갇힌다.', impact: [{ who: '나와 친구', text: '갇힌다', tone: -1 }], why: '지진 뒤에는 엘리베이터가 멈출 수 있어요. 계단을 써요.' },
          { id: 'stairs', text: '계단으로 걸어 내려가자고 한다', result: '천천히 계단을 내려간다.', impact: [{ who: '친구', text: '갇히지 않는다', tone: 1 }], end: '계단으로 내려갔어요.',
            next: { text: '건물 밖으로 나왔다. 현관 앞 유리문과 담장 옆에 학생들이 모여 있다.', choices: [
              { id: 'wall', text: '담장 옆 그늘에서 기다린다', result: '여진에 담장 벽돌이 흔들린다.', impact: [{ who: '나', text: '벽돌에 다칠 수 있다', tone: -1 }], why: '건물·담장·유리 가까이는 무너지거나 깨진 것이 떨어질 수 있어요.' },
              { id: 'field', text: '건물과 담장에서 떨어진 운동장 가운데로 간다', result: '선생님 안내에 따라 인원 확인을 받는다.', impact: [{ who: '선생님', text: '인원을 확인한다', tone: 1 }] }] } }] } },
      { id: 'freeze', text: '놀라서 진열대 앞에 그대로 서 있는다', result: '진열대 위 물건이 쏟아져 어깨에 맞는다.', impact: [{ who: '나', text: '다친다', tone: -1 }], why: '떨어질 것이 많은 곳에서 떨어져 몸을 낮춰야 해요.', ending: '진열대 앞에 서 있다가 물건에 맞았어요.' }] };
    const R1 = [{ id: 'r1', text: '흔들릴 때는 떨어질 것에서 멀어져 머리를 보호한다' }, { id: 'r2', text: '흔들림이 멈춘 뒤 계단으로 넓은 곳에 간다' },
      { id: 'r3', text: '흔들리면 바로 밖으로 뛰어나가야 산다', why: '흔들리는 동안 움직이면 넘어지고 떨어지는 것에 맞아요.' }, { id: 'r4', text: '엘리베이터가 빠르니 탄다', why: '지진 때 엘리베이터는 멈출 수 있어요.' }];
    const R1MORE = { reasons: [{ id: 'r5', text: '건물 밖에서도 담장·유리 가까이는 위험하다' }], ok: ['r5'] };
    const D2 = { text: '쉬는 시간, 계단을 내려가는 중에 흔들림이 시작된다. 계단에는 학생이 많다.', ask: '흔들리는 동안 어떻게 할까?', motif: 'house', choices: [
      { id: 'dash', text: '빨리 끝까지 뛰어 내려간다', result: '앞사람과 부딪쳐 함께 미끄러진다.', impact: [{ who: '앞사람', text: '넘어진다', tone: -1 }], why: '계단에서 뛰면 여럿이 함께 넘어져요. 멈춰서 몸을 보호해요.', end: '뛰다가 앞사람과 부딪쳤어요.',
        next: { text: '계단 아래에 학생들이 엉켜 있다.', choices: [
          { id: 'over', text: '엉킨 사람들 사이를 비집고 지나간다', result: '더 많은 사람이 넘어진다.', impact: [{ who: '아래 학생들', text: '밟힐 수 있다', tone: -1 }] },
          { id: 'stop', text: '그 자리에서 손잡이를 잡고 몸을 낮춘다', result: '흔들림이 멈출 때까지 버틴다.', impact: [{ who: '나', text: '넘어지지 않는다', tone: 1 }] }] } },
      { id: 'hold', text: '멈춰서 손잡이를 잡고 몸을 낮추며 가방으로 머리를 가린다', result: '흔들리는 동안 넘어지지 않는다.', impact: [{ who: '나', text: '머리를 지킨다', tone: 1 }], end: '멈춰서 손잡이를 잡았어요.',
        next: { text: '흔들림이 멈추고 안내 방송이 나온다.', choices: [
          { id: 'follow', text: '방송에 따라 한 줄로 걸어 내려가 운동장으로 간다', result: '서로 밀지 않고 밖으로 나간다.', impact: [{ who: '계단의 학생들', text: '엉키지 않는다', tone: 1 }], end: '방송을 따라 운동장으로 갔어요.',
            next: { text: '운동장에 모였는데 친구가 "교실에 휴대전화 두고 왔어"라고 한다.', choices: [
              { id: 'fetch', text: '함께 교실로 다시 가 준다', result: '여진이 와서 계단에서 다시 흔들린다.', impact: [{ who: '나와 친구', text: '위험한 건물로 돌아간다', tone: -1 }], why: '안전하다는 안내가 있기 전에는 건물에 다시 들어가지 않아요.' },
              { id: 'tellt', text: '선생님께 말씀드리고 안내를 기다리자고 한다', result: '선생님이 안전 점검 뒤에 가져오자고 한다.', impact: [{ who: '친구', text: '건물에 들어가지 않는다', tone: 1 }] }] } },
          { id: 'back', text: '교실로 다시 올라가 가방을 챙긴다', result: '복도 천장 조각이 떨어져 있다.', impact: [{ who: '나', text: '위험한 곳에 머문다', tone: -1 }], why: '흔들림이 멈추면 소지품보다 대피가 먼저예요.' }] } },
      { id: 'sit', text: '계단 가운데에 그냥 주저앉는다', result: '뒤에서 내려오던 사람이 걸려 넘어진다.', impact: [{ who: '뒷사람', text: '걸려 넘어진다', tone: -1 }], why: '계단에서는 손잡이 쪽으로 붙어 몸을 낮춰 다른 사람의 길을 막지 않아요.', ending: '계단 가운데를 막아 뒷사람이 넘어졌어요.' }] };
    const R2 = [{ id: 'r1', text: '계단에서는 멈춰 손잡이를 잡고 머리를 보호한다' }, { id: 'r2', text: '흔들림이 멈춘 뒤 안내에 따라 한 줄로 대피한다' },
      { id: 'r3', text: '어디서든 같은 행동을 하면 된다', why: '교실·계단·매점은 떨어질 것과 넘어질 위험이 달라요.' }, { id: 'r4', text: '소지품을 챙겨야 나중에 편하다', why: '물건보다 몸이 먼저예요.' }];
    const R2MORE = { reasons: [{ id: 'r5', text: '안전 안내가 있기 전에는 건물에 다시 들어가지 않는다' }], ok: ['r5'] };
    const QDRILL = ['책상 아래에서 머리 감싸고 다리 잡기', '흔들림이 멈출 때까지 기다리기', '가방으로 머리 가리고 계단으로 운동장 이동'];
    const QSAFE = ['책상 아래에 들어갈 공간을 비웠다', '창가·사물함 위 떨어질 물건을 치웠다', '운동장 가운데 모일 자리를 안다', '뛰지 않고 밀지 않기로 약속했다'];
    const QCHK = [{ id: 'q1', text: '흔들릴 때 돌아다니지 않았다' }, { id: 'q2', text: '머리를 감싸 보호했다' }, { id: 'q3', text: '엘리베이터 대신 계단을 썼다' },
      { id: 'q4', text: '담장·유리에서 떨어진 곳에 모였다' }, { id: 'q5', text: '인원 확인에 바로 답했다' }];

    ALL.push(
      // ---- 도입 ----
      M('intro.where-pin', {
        title: '지금 있는 곳 핀과 위험물', method: '지금 있는 곳 핀 꽂고 위험물 찾기', tool: 'map', minutes: 6,
        levels: { easy: '교사가 매점 한 곳에 핀을 꽂고, 그 둘레의 떨어질 것을 함께 말한다.', base: '교실·매점 두 곳에 핀을 꽂고 곳마다 떨어질 것·넘어질 것을 말한다.', challenge: '두 곳의 위험을 견주어 어디가 더 위험한지와 그 까닭을 말한다.' },
        intro: {
          teacher: '"지금 이 순간 땅이 흔들린다면, 여러분 둘레에서 떨어질 것은 무엇일까요?" 가상 학교 칸 지도를 띄우고 시연 단추로 교실과 매점에 핀이 꽂히는 모습을 보인다. "지진은 어디서나 똑같이 행동하면 된다"는 말이 나오면 "교실 책상 아래와 매점 진열대 앞은 같은 자리일까요?"라고 되묻는다. 오늘은 있는 곳에 따라 달라지는 지진 행동을 판단한다고 밝힌다.',
          student: '지도에서 교실과 매점에 핀을 꽂는다고 생각하고, 그 자리 둘레에서 떨어지거나 넘어질 것을 짝에게 말해요.',
          demo: { tool: 'map', options: SCHOOL, sequence: [{ region: '교실' }, { region: '매점' }] },
          art: { draw: 'a paper-cut school map seen from above with a classroom, a snack shop with tall shelves, stairs and a wide playground', banner: '흔들린다면, 여기서는?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
      }),
      M('intro.quake-story', {
        title: '흔들림부터 대피까지 장면', method: '흔들림 시작부터 대피까지 장면 차례', tool: 'story', minutes: 6,
        levels: { easy: '교사가 장면 3장(흔들림·몸 보호·운동장)을 함께 차례로 놓는다.', base: '장면 4장을 차례로 놓고 \'흔들릴 때\'와 \'멈춘 뒤\'의 경계를 말한다.', challenge: '장면마다 주의할 점 하나씩을 덧붙여 말한다.' },
        intro: {
          teacher: '"흔들림이 시작된 순간과 흔들림이 멈춘 순간, 해야 할 일은 같을까요?" 시연 단추로 네 장면이 차례대로 놓이는 모습을 보인 뒤 \'흔들릴 때\'와 \'멈춘 뒤\' 사이에 손을 짚게 한다. "흔들리면 바로 밖으로 나가야 한다"는 말이 나오면 "흔들리는 계단을 뛰어 내려가면 어떻게 될까요?"라고 되묻는다.',
          student: '네 장면을 보고 흔들릴 때 할 일과 흔들림이 멈춘 뒤 할 일이 어디서 갈리는지 짝과 말해요.',
          demo: { tool: 'story', options: { mode: 'order', slots: 4, cards: [SCENES[2], SCENES[0], SCENES[3], SCENES[1]], title: '지진, 그 순간부터' }, sequence: [{ order: SCENES.map((c) => c.id) }] },
          art: { draw: 'a paper-cut four-panel strip: a shaking classroom, a student under a desk holding its leg, a calm room, students walking out to a playground with bags over their heads', banner: '흔들릴 때 · 멈춘 뒤', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
      }),

      // ---- 활동 ----
      M('activity.place-choice', {
        title: '매점·계단 지진 갈림길', method: '엘리베이터·계단·매점 갈림길', tool: 'dilemma', minutes: 15,
        levels: { easy: '두 장소(매점·계단)에서 갈림길 1번씩 고르고 결과를 본다.', base: '두 장소에서 갈림길 2번을 끝까지 가 보며 엘리베이터를 만나고 근거 카드를 고른다.', challenge: '두 장소에서 갈림길 3번까지 가고 \'건물 밖 위험\' 근거까지 고른다.' },
        activity: {
          title: '매점·계단 지진 갈림길', tool: 'dilemma',
          teacher: '"매점 진열대 앞과 계단 한가운데, 흔들릴 때 해야 할 일은 같을까요?" 장소마다 한 길을 끝까지 가 본 뒤 다른 길과 견주게 한다. "엘리베이터가 빠르니 타면 된다"는 학생에게 "여진이 와서 엘리베이터가 멈추면 어떻게 될까요?"라고 되묻는다. 흔들릴 때(몸 보호)와 멈춘 뒤(계단으로 넓은 곳)의 행동을 장면마다 나누어 짚는다.',
          task: '매점과 계단에서 흔들림이 시작되는 상황을 차례로 겪으며 행동을 고르고, 끝에서 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL({ easy: '매점 진열대 앞에서 흔들려요. 한 번 골라 결과를 보세요.', base: '매점 진열대 앞에서 흔들려요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '매점 진열대 앞에서 흔들려요. 세 번 골라 건물 밖까지 가고 근거를 모두 고르세요.' },
              '매점 진열대 앞', D1, [['cover', 'stairs', 'field']], R1, ['r1', 'r2'], R1MORE),
            DIL({ easy: '계단을 내려가다 흔들려요. 한 번 골라 결과를 보세요.', base: '계단을 내려가다 흔들려요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '계단을 내려가다 흔들려요. 세 번 골라 운동장까지 가고 근거를 모두 고르세요.' },
              '계단 한가운데', D2, [['hold', 'follow', 'tellt']], R2, ['r1', 'r2'], R2MORE),
            { prompt: '짝과 두 장소에서 "흔들릴 때" 한 행동이 어떻게 달랐는지 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '흔들림이 멈춘 뒤 건물을 나갈 때 쓸 길은?', options: ['엘리베이터', '계단', '창문'], answer: '계단' }] },
      }),
      M('activity.drill-run', {
        title: '지진 대피 훈련 실행', method: '지진 대피 훈련 실행', tool: 'timer', minutes: 15,
        levels: { easy: '순서 카드 3장을 차례로 놓는다(안전 점검 칸은 없다).', base: '순서 카드 3장을 놓고 훈련 전 안전 점검 4개를 표시한 뒤 훈련하고 \'해 보았어요\'를 누른다.', challenge: '마지막 문항에서 모둠별로 운동장까지 걸린 시간을 초시계로 재어 적고 다른 모둠과 견준다.' },
        activity: {
          title: '지진 대피 훈련 실행', tool: 'timer',
          teacher: '"경보가 울렸을 때 책상 아래로 들어가는 것과 운동장으로 나가는 것, 무엇이 먼저일까요?" 순서 카드를 놓은 뒤 안전 점검 칸을 함께 읽고 표시하게 한다. "흔들림이 멈추면 뛰어서 빨리 나가야 한다"는 학생에게 "계단에 모두가 뛰어들면 어떻게 될까요?"라고 되묻는다. 훈련 중 책상 다리를 잡는 손과 머리를 감싼 팔을 직접 확인해 준다.',
          task: '지진 대피 순서 카드를 차례로 놓고 훈련 전 안전 점검을 한 뒤, 실제로 훈련하고 \'해 보았어요\'를 눌러요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT({ prompt: '지진 대피 순서 카드를 차례대로 놓고, 훈련 전 안전 점검을 모두 표시하세요.', toolOptions: { title: '지진 대피 순서', cards: [QDRILL[2], QDRILL[0], QDRILL[1]], safety: QSAFE }, target: { order: QDRILL, safety: true } },
              { prompt: '지진 대피 순서 카드 세 장을 차례대로 놓으세요.', toolOptions: { safety: [] }, target: { order: QDRILL } }),
            { prompt: '선생님 신호에 따라 실제로 지진 대피 훈련을 하고 돌아와 표시하세요.', free: true, toolOptions: { doneLabel: '지진 훈련을 해 보았어요' } },
            IT({ prompt: '운동장에 모인 뒤 할 일을 차례대로 놓으세요.', toolOptions: { title: '운동장에 모인 뒤', cards: ['안전 안내가 나올 때까지 기다리기', '반별로 줄 서서 인원 확인', '건물·담장에서 떨어져 서기'] }, target: { order: ['건물·담장에서 떨어져 서기', '반별로 줄 서서 인원 확인', '안전 안내가 나올 때까지 기다리기'] } },
              null,
              { prompt: '우리 모둠이 교실에서 운동장까지 걸린 시간을 초시계로 재어 적으세요.', toolOptions: { title: '모둠 이동 기록', cards: [], fields: [{ label: '우리 모둠', unit: '초', step: 1 }], stopwatch: true }, target: { records: true } },
              { conclude: '지진 훈련은 흔들릴 때 몸 보호, 멈춘 뒤 계단으로 넓은 곳, 모인 뒤 인원 확인 차례를 몸에 익히는 일이에요.' }),
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '흔들림이 멈추면 건물과 담장에서 떨어진 ___로 가요.', answer: '운동장(넓은 곳)' }] },
        notes: '실제 훈련은 학교 재난 대비 훈련 계획에 맞춰 한다. 몸이 불편한 학생의 이동은 미리 도울 사람을 정한다.',
      }),
      M('activity.drill-essay', {
        title: '지진 훈련 소감과 개선점', method: '훈련 소감과 개선점 쓰기', tool: 'rubric-writing', minutes: 15,
        levels: { easy: '문장 틀을 따라 잘된 점·위험했던 점을 두 문장으로 쓴다.', base: '세 문장으로 쓰고 기준표(구체적 장면·이유·개선안)를 스스로 점검한다.', challenge: '마지막 문항에서 개선안을 우리 반 규칙 한 줄로 바꾸어 쓰고 기준 하나를 더 점검한다.' },
        activity: {
          title: '지진 훈련 소감과 개선점', tool: 'rubric-writing',
          teacher: '"\'훈련 잘했다\'와 \'계단에서 앞 반과 만나 멈춰 섰다, 반마다 내려가는 차례를 정하면 좋겠다\' 가운데 어느 글이 다음 훈련을 바꿀까요?" 두 글을 견주어 읽은 뒤 쓰게 한다. "친구가 장난쳤다고 쓰면 된다"는 학생에게 탓할 사람이 아니라 바꿀 장면을 쓰는 글이라고 말해 준다. 친구 이름은 쓰지 않게 한다.',
          task: '오늘 지진 훈련에서 잘된 점과 위험했던 장면을 쓰고, 고칠 방법을 기준표로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RW('오늘 지진 훈련에서 잘된 점 하나를 구체적인 장면으로 쓰세요.',
              { topic: '오늘 지진 대피 훈련에서 잘된 점을 장면이 보이게 두 문장으로 쓰세요.', minChars: 20, maxChars: 150, minSentences: 2, maxSentences: 3, title: '잘된 점' },
              ['언제·어디 장면인지 썼다', '왜 잘되었는지 이유를 썼다', '친구 이름 대신 \'한 친구\'처럼 썼다'],
              { prompt: '틀을 따라 잘된 점을 쓰세요.', starter: '___할 때 ___ 해서 잘되었다. 왜냐하면 ___.' }),
            RW('훈련에서 위험했던 장면과 고칠 방법을 세 문장으로 쓰세요.',
              { topic: '오늘 지진 대피 훈련에서 위험했던 장면과 그 까닭, 고칠 방법을 세 문장으로 쓰세요.', minChars: 30, maxChars: 200, minSentences: 3, maxSentences: 4, title: '위험했던 점과 개선안' },
              ['위험했던 장면을 구체적으로 썼다', '왜 위험했는지 이유를 썼다', '고칠 방법(개선안)을 썼다'],
              { prompt: '틀을 따라 위험했던 점을 쓰세요.', starter: '___에서 ___ 위험했다. ___ 때문이다. 다음에는 ___.' },
              { prompt: '개선안을 우리 반 규칙 한 줄로 바꾸어 덧붙이고 기준표를 모두 점검하세요.', toolOptions: { maxSentences: 5 }, add: ['개선안을 우리 반 규칙 한 줄로 썼다'] },
              { conclude: '훈련 소감은 잘된 장면과 위험했던 장면을 구체적으로 적어, 다음 훈련에서 바꿀 일을 찾는 글이에요.' }),
            { prompt: '모둠에서 서로의 개선안을 듣고, 가장 먼저 바꿀 것 하나를 정해 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '다음 지진 훈련에서 우리 반이 바꿀 것 한 가지를 써요.' }] },
      }),

      // ---- 정리 ----
      M('wrap.place-map', {
        title: '장소별 지진 행동 지도', method: '장소별 행동 연상 지도로 정리', tool: 'mindmap', minutes: 9,
        levels: { easy: '가지 3개(교실·복도·운동장)에 행동 카드를 하나씩 잇는다.', base: '가지 4개(교실·복도·운동장·집)에 핵심 행동을 하나씩 잇는다.', challenge: '가지 4개에 잇되, \'하지 말 것\' 함정 카드 3장을 가지에 넣지 않고 남긴다.' },
        wrap: {
          teacher: '"\'지진\' 가운데에서 교실·복도·운동장·집 가지로 뻗어 나가면 가지마다 무엇을 붙일까요?" 학생이 다 이으면 가지 하나씩을 골라 흔들릴 때인지 멈춘 뒤인지 말하게 한다. "집에서는 현관문 밖으로 뛰어나가면 된다"는 말에는 "흔들리는 동안 계단과 문 앞은 안전할까요?"라고 되묻는다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '지진', slots: ['교실', '복도', '운동장', '집'], cards: [
              { id: 'c', text: '책상 아래서 머리 감싸기' }, { id: 'h', text: '벽 쪽에 몸 낮추고 머리 가리기' }, { id: 'f', text: '건물·담장에서 떨어져 서기' }, { id: 'o', text: '탁자 아래 들어가 다리 잡기' }] },
              prompt: '장소마다 알맞은 지진 행동을 하나씩 이어요.', target: { match: { 교실: 'c', 복도: 'h', 운동장: 'f', 집: 'o' } }, difficulty: 0.2 },
            { prompt: '세 장소에 알맞은 지진 행동을 하나씩 이어요.', toolOptions: { slots: ['교실', '복도', '운동장'], cards: [{ id: 'c', text: '책상 아래서 머리 감싸기' }, { id: 'h', text: '벽 쪽에 몸 낮추고 머리 가리기' }, { id: 'f', text: '건물·담장에서 떨어져 서기' }] }, target: { match: { 교실: 'c', 복도: 'h', 운동장: 'f' } } },
            { toolOptions: { cards: [{ id: 'c', text: '책상 아래서 머리 감싸기' }, { id: 'h', text: '벽 쪽에 몸 낮추고 머리 가리기' }, { id: 'f', text: '건물·담장에서 떨어져 서기' }, { id: 'o', text: '탁자 아래 들어가 다리 잡기' },
              { id: 't1', text: '엘리베이터로 내려가기' }, { id: 't2', text: '흔들릴 때 밖으로 뛰기' }, { id: 't3', text: '창가에 서서 밖 살피기' }] } }),
            { type: 'choice', prompt: '"어디서든 같은 행동을 하면 된다"는 말에 대한 반박으로 알맞은 것은?', options: ['지진은 드물다', '있는 곳마다 떨어질 것과 넘어질 위험이 달라 행동도 달라진다', '선생님이 알려 준다'], answer: 1, difficulty: 0.2, explain: '교실·계단·매점은 위험이 달라요.' },
            { type: 'short', prompt: '내가 자주 있는 곳 한 곳에서 흔들릴 때 할 행동을 한 문장으로 써요.' },
          ],
        },
        worksheet: {
          title: '장소별 지진 행동',
          items: [
            { type: 'table', prompt: '장소마다 흔들릴 때 할 행동을 써요.', columns: ['장소', '흔들릴 때'], cells: [['교실', ''], ['계단', ''], ['운동장', '']], answer: '책상 아래 머리 보호 / 손잡이 잡고 몸 낮추기 / 건물·담장에서 떨어지기' },
            { type: 'choice', prompt: '흔들림이 멈춘 뒤 쓸 길은?', options: ['엘리베이터', '계단'], answer: '계단' },
          ],
        },
      }),
      M('wrap.drill-check', {
        title: '지진 훈련 점검표', method: '지진 훈련 점검표', tool: 'kitchen', minutes: 9,
        levels: { easy: '점검 항목 3개에 내가 한 것을 표시한다.', base: '점검 항목 5개에 내가 한 것을 표시한다.', challenge: '항목 5개를 표시하고 집에서 할 지진 대비 점검 하나를 쓴다.' },
        wrap: {
          teacher: '"오늘 훈련에서 흔들리는 동안 내 손은 어디에 있었나요?" 점검 항목을 한 줄씩 읽고 내가 정말 한 것만 표시하게 한다. "다 했어요"만 말하는 학생에게 "운동장에서 담장과 얼마나 떨어져 섰는지 떠올려 볼까요?"라고 되묻는다. 집에서 할 점검(무거운 물건 위치 등)은 집안 형편을 자세히 말하게 하지 않는다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title: '오늘 지진 대피 훈련', items: QCHK }, prompt: '오늘 지진 훈련에서 내가 한 것에 스스로 표시해요.', target: { selfCheck: true }, difficulty: 0.1 },
              { prompt: '오늘 지진 훈련에서 내가 한 것 세 가지에 표시해요.', toolOptions: { items: QCHK.slice(0, 3) } }),
            { type: 'choice', prompt: '운동장에 모였을 때 서 있기 알맞은 곳은?', options: ['담장 바로 옆 그늘', '건물·담장에서 떨어진 운동장 가운데', '현관 유리문 앞'], answer: 1, difficulty: 0.15, explain: '무너지거나 떨어질 것이 없는 넓은 곳에 서요.' },
            { type: 'short', prompt: '집에서 할 지진 대비 점검 한 가지를 써요(예: 높은 곳 무거운 물건 내리기).' },
          ],
        },
        worksheet: {
          title: '지진 대피 훈련 점검',
          items: [
            { type: 'check', prompt: '오늘 훈련에서 내가 한 것에 표시해요.', options: ['흔들릴 때 머리 보호', '멈춘 뒤 계단 이용', '넓은 곳에 모이기', '인원 확인에 답하기'] },
            { type: 'short', prompt: '집에서 할 지진 대비 점검 한 가지를 써요.' },
          ],
        },
      }),
      M('activity.during-after', {
        title: '흔들릴 때·멈춘 뒤 나누기', method: '흔들릴 때와 멈춘 뒤 행동 나누고 이유 쓰기', tool: 'sortboard', minutes: 15,
        levels: { easy: '행동 카드 4장을 두 바구니에 나누고, 틀리면 까닭을 듣고 되돌아온다.', base: '행동 카드 6장을 흔들릴 때·멈춘 뒤 바구니에 나누고, 헷갈린 카드 하나의 이유를 활동지에 쓴다.', challenge: '함정 카드가 더 섞인 판에서 나누고, 헷갈린 카드 두 장의 이유를 쓴다.' },
        activity: {
          title: '흔들릴 때·멈춘 뒤 나누기', tool: 'sortboard',
          teacher: '"\'계단으로 내려가기\'는 흔들릴 때 할 일일까요, 멈춘 뒤에 할 일일까요?" 카드를 넣을 때마다 그 바구니인 까닭을 한 사람씩 말하게 한다. "흔들리면 바로 밖으로 나가야 한다"는 학생에게 "흔들리는 계단을 뛰어 내려가면 어떻게 될까요?"라고 되묻는다. 헷갈린 카드는 칠판에 따로 적어 두고 마지막에 다 함께 이유를 정리한다.',
          task: '지진 행동 카드를 \'흔들릴 때\'와 \'멈춘 뒤\' 바구니에 나누고, 헷갈린 카드의 이유를 적어요.',
          levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
          items: [
            SBT({ base: '교실 지진 행동 카드를 두 바구니에 나누세요.', easy: '교실 지진 행동 카드 네 장을 두 바구니에 나누세요.', challenge: '함정 카드는 남기고 교실 지진 행동 카드를 두 바구니에 나누세요.' },
              ['흔들릴 때', '멈춘 뒤'], [
                { id: 'd1', text: '책상 아래로 들어가 다리 잡기', to: '흔들릴 때' }, { id: 'a1', text: '가방으로 머리 가리고 계단으로', to: '멈춘 뒤' },
                { id: 'd2', text: '창가·사물함에서 떨어지기', to: '흔들릴 때' }, { id: 'a2', text: '운동장 가운데에서 인원 확인', to: '멈춘 뒤' },
                { id: 'd3', text: '머리를 팔로 감싸고 기다리기', to: '흔들릴 때' }, { id: 'a3', text: '문을 열어 나갈 길 확보하기', to: '멈춘 뒤' }], 4,
              [{ id: 't1', text: '흔들리자마자 복도로 뛰어나가기' }, { id: 't2', text: '엘리베이터 타고 내려가기' }]),
            SBT({ base: '학교 밖 장소의 지진 행동 카드를 두 바구니에 나누세요.', easy: '학교 밖 지진 행동 카드 네 장을 두 바구니에 나누세요.', challenge: '함정 카드는 남기고 학교 밖 지진 행동 카드를 두 바구니에 나누세요.' },
              ['흔들릴 때', '멈춘 뒤'], [
                { id: 'o1', text: '매점 진열대에서 떨어져 몸 낮추기', to: '흔들릴 때' }, { id: 'o2', text: '건물·담장에서 떨어진 곳으로 이동', to: '멈춘 뒤' },
                { id: 'o3', text: '계단에서 손잡이 잡고 멈추기', to: '흔들릴 때' }, { id: 'o4', text: '안내 방송 들으며 한 줄로 대피', to: '멈춘 뒤' },
                { id: 'o5', text: '길에서는 가방으로 머리 보호', to: '흔들릴 때' }, { id: 'o6', text: '안전 안내 전엔 건물에 다시 안 들어가기', to: '멈춘 뒤' }], 4,
              [{ id: 't3', text: '담장 옆 그늘에서 쉬기' }]),
            { prompt: '짝과 가장 헷갈린 카드 하나를 골라 그 바구니인 이유를 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '가장 헷갈린 행동 카드 하나와 그 바구니에 넣은 이유를 써요.' }],
          easy: [{ type: 'choice', prompt: '흔들릴 때 할 일에 ○ 해요.', options: ['책상 아래로 들어가기', '계단으로 뛰어 내려가기'], answer: '책상 아래로 들어가기' }] },
      }),
    );
  }

  // ==== 7학년 · 화상 처치와 흔한 오해 (saf-disaster.m.burn-care) ====
  {
    const M = MK('burn-care', [7]);
    const CARE = [{ id: 'cool', text: '흐르는 찬물로 식히기' }, { id: 'ring', text: '부풀기 전 반지·시계 빼기' }, { id: 'cover', text: '깨끗한 천으로 덮기' }, { id: 'judge', text: '병원 갈지 판단하기' }];
    const MYTH = [{ id: 'm1', text: '된장·치약 바르기' }, { id: 'm2', text: '얼음 바로 대기' }, { id: 'm3', text: '물집 터뜨리기' }];
    const SPILL = [{ id: 'sp', text: '뜨거운 라면 국물이 다리에 쏟아진다', motif: 'cloud' }, { id: 'away', text: '냄비에서 떨어져 젖은 옷을 살살 뗀다', motif: 'leaf' },
      { id: 'water', text: '데인 곳을 흐르는 찬물로 식힌다', motif: 'rain' }, { id: 'paste', text: '할머니 말씀대로 된장을 바른다', motif: 'house' }];
    const D1 = { text: '집에서 냄비 손잡이에 손목을 데었다. 처음엔 작아 보였는데, 저녁이 되자 물집이 넓게 생겼다.', ask: '어떻게 할까?', motif: 'house', choices: [
      { id: 'pop', text: '물집을 바늘로 터뜨려 둔다', result: '물집 속 살이 드러나 따갑고 지저분해진다.', impact: [{ who: '나', text: '상처가 덧날 수 있다', tone: -1 }], why: '물집은 그 아래 살을 지켜 줘요. 일부러 터뜨리지 않아요.', end: '물집을 터뜨려 상처가 드러났어요.',
        next: { text: '다음 날 데인 곳이 붉게 부어오른다.', choices: [
          { id: 'wait', text: '좀 더 두고 본다', result: '붓기가 더 심해진다.', impact: [{ who: '나', text: '늦게 치료받는다', tone: -1 }] },
          { id: 'clinic', text: '보호자와 병원에 간다', result: '진료를 받고 상처 관리법을 듣는다.', impact: [{ who: '나', text: '치료를 받는다', tone: 1 }] }] } },
      { id: 'tell', text: '보호자에게 물집이 넓어졌다고 말하고 보인다', result: '보호자가 상처를 보고 병원에 갈지 이야기한다.', impact: [{ who: '보호자', text: '상황을 안다', tone: 1 }], end: '보호자에게 알렸어요.',
        next: { text: '보호자가 "약국 연고 바르고 내일 보자"고 한다. 물집은 손목을 거의 덮었다.', choices: [
          { id: 'ok', text: '그냥 연고만 바르고 잔다', result: '밤새 따갑고 물집이 더 커진다.', impact: [{ who: '나', text: '치료가 늦어진다', tone: -1 }], why: '물집이 넓거나 관절 가까이 데었으면 병원 진료를 받아요.' },
          { id: 'ask', text: '"넓게 데면 병원에 가야 한대요"라고 말하고 함께 간다', result: '병원에서 상처를 소독하고 덮어 준다.', impact: [{ who: '나', text: '알맞게 치료받는다', tone: 1 }], end: '병원에서 치료를 받았어요.',
            next: { text: '다음 날 학교에서 친구가 "치약 바르면 금방 나아"라고 한다.', choices: [
              { id: 'paste', text: '친구 말대로 치약을 덧바른다', result: '상처가 따갑고 붉어진다.', impact: [{ who: '나', text: '상처가 덧난다', tone: -1 }], why: '치약·된장 같은 민간요법은 상처를 더럽혀요. 병원 안내대로 해요.' },
              { id: 'explain', text: '"병원 안내대로 덮어 두는 게 맞대"라고 알려 준다', result: '친구도 바른 처치를 알게 된다.', impact: [{ who: '친구', text: '오해를 바로잡는다', tone: 1 }] }] } }] } },
      { id: 'ignore', text: '아무에게도 말하지 않고 소매로 가린다', result: '상처가 옷에 쓸려 더 아프다.', impact: [{ who: '나', text: '덧난다', tone: -1 }], why: '데인 것이 커지면 혼자 숨기지 말고 어른에게 알려요.', ending: '혼자 숨겨서 상처가 덧났어요.' }] };
    const R1 = [{ id: 'r1', text: '물집이 넓거나 관절 가까이 데면 병원 진료가 필요하다' }, { id: 'r2', text: '물집은 아래 살을 지켜 주니 터뜨리지 않는다' },
      { id: 'r3', text: '작아 보였으니 끝까지 괜찮다', why: '화상은 시간이 지나며 더 넓어 보일 수 있어요.' }, { id: 'r4', text: '병원은 너무 아플 때만 간다', why: '아픈 정도만이 아니라 넓이·부위를 보고 판단해요.' }];
    const R1MORE = { reasons: [{ id: 'r5', text: '민간요법은 상처를 더럽혀 덧나게 할 수 있다' }], ok: ['r5'] };
    const D2 = { text: '가사실 실습 중 친구 지호가 뜨거운 프라이팬에 팔꿈치 안쪽을 데었다. 붉어지고 작은 물집이 하나 생겼다.', ask: '가장 먼저 어떻게 할까?', motif: 'house', choices: [
      { id: 'cool', text: '불을 끄고 지호를 개수대로 데려가 흐르는 찬물에 식히게 한다', result: '지호가 조금 덜 화끈거린다고 한다.', impact: [{ who: '지호', text: '열이 빠진다', tone: 1 }], end: '먼저 흐르는 찬물로 식혔어요.',
        next: { text: '식히는 동안 지호가 "괜찮아, 실습 마저 하자"고 한다.', choices: [
          { id: 'nurse', text: '선생님께 알리고 보건실에 함께 간다', result: '보건 선생님이 상처를 보고 덮어 준다.', impact: [{ who: '지호', text: '알맞은 처치를 받는다', tone: 1 }], end: '보건실에서 처치를 받았어요.',
            next: { text: '보건 선생님이 "관절 쪽이라 병원에 가 보는 게 좋겠다"고 한다. 지호는 귀찮아한다.', choices: [
              { id: 'report', text: '담임 선생님이 보호자께 연락하도록 함께 알린다', result: '보호자가 와서 병원에 데려간다.', impact: [{ who: '지호', text: '진료를 받는다', tone: 1 }] },
              { id: 'skip', text: '지호 말대로 그냥 교실로 돌아간다', result: '움직일 때마다 물집이 쓸린다.', impact: [{ who: '지호', text: '덧날 수 있다', tone: -1 }], why: '관절 가까이 데었으면 병원 진료를 받아요.' }] } },
          { id: 'go', text: '지호 말대로 실습을 마저 한다', result: '팔꿈치가 계속 화끈거리고 물집이 커진다.', impact: [{ who: '지호', text: '처치가 늦어진다', tone: -1 }], why: '식힌 뒤에는 어른에게 알리고 상처를 살펴요.' }] } },
      { id: 'ice', text: '냉동실 얼음을 꺼내 바로 댄다', result: '살갗이 하얗게 질리며 더 아프다.', impact: [{ who: '지호', text: '살갗이 더 상할 수 있다', tone: -1 }], why: '얼음을 바로 대면 살갗이 더 상할 수 있어요. 흐르는 찬물로 식혀요.', end: '얼음을 대서 더 아팠어요.',
        next: { text: '지호가 얼음을 떼고 울상이다.', choices: [
          { id: 'water2', text: '흐르는 찬물로 바꿔 식힌다', result: '조금씩 화끈거림이 가라앉는다.', impact: [{ who: '지호', text: '열이 빠진다', tone: 1 }] },
          { id: 'paste2', text: '치약을 발라 준다', result: '상처가 끈적이고 따갑다.', impact: [{ who: '지호', text: '덧날 수 있다', tone: -1 }] }] } },
      { id: 'laugh', text: '"조심 좀 하지" 하고 실습을 계속한다', result: '지호가 혼자 팔을 감싸고 참는다.', impact: [{ who: '지호', text: '처치를 못 받는다', tone: -1 }], why: '데었을 때는 탓하기보다 먼저 식히고 알려요.', ending: '지호가 처치를 받지 못했어요.' }] };
    const R2 = [{ id: 'r1', text: '데면 먼저 흐르는 찬물로 식힌다' }, { id: 'r2', text: '관절 가까이 데면 병원 진료를 받아 본다' },
      { id: 'r3', text: '작은 물집 하나면 그냥 둬도 된다', why: '부위가 관절이면 작아도 살펴봐야 해요.' }, { id: 'r4', text: '얼음이 가장 빨리 식힌다', why: '얼음은 살갗을 더 상하게 할 수 있어요.' }];
    const R2MORE = { reasons: [{ id: 'r5', text: '다친 친구가 괜찮다고 해도 어른에게 알린다' }], ok: ['r5'] };
    const NOTICE = ['하지 말아야 할 것을 하나 이상 썼다', '왜 하면 안 되는지 근거를 썼다', '가족이 읽기 쉬운 말로 썼다'];

    ALL.push(
      // ---- 도입 ----
      M('intro.burn-parts', {
        title: '조리·다림질 때 데기 쉬운 곳', method: '화상이 잦은 몸 부위 고르기', tool: 'body', minutes: 6,
        levels: { easy: '교사가 손목·허벅지 2곳을 짚어 주고 함께 까닭을 말한다.', base: '손목·허벅지·가슴 3곳을 고르고 곳마다 데기 쉬운 장면을 말한다.', challenge: '고른 3곳마다 미리 막는 방법을 한 가지씩 말한다.' },
        intro: {
          teacher: '"라면을 끓이거나 다림질을 할 때, 몸의 어디가 가장 먼저 뜨거운 것에 닿을까요?" 종이 몸을 띄우고 시연 단추로 손목·허벅지·가슴이 골라지는 모습을 보인다. 이 몸 그림에는 손 칸이 없어 손목으로 대신 짚는다고 말해 준다. "데는 건 조심 안 한 사람만"이라는 말이 나오면 "냄비 손잡이가 바깥으로 나와 있으면 누가 칠까요?"라고 되묻는다.',
          student: '몸 그림에서 조리·다림질 때 데기 쉬운 곳을 골라 보고, 왜 그곳인지 짝에게 말해요.',
          demo: { tool: 'body', options: { mode: 'parts', parts: ['눈', '목', '가슴', '배', '손목', '허벅지', '무릎', '발목'], names: true }, sequence: [{ parts: ['손목', '허벅지', '가슴'] }] },
          art: { draw: 'a paper-cut kitchen with a pot of boiling ramen on a stove and an iron on a board, a teenager reaching toward the pot handle', banner: '어디가 데기 쉬울까?', extra: [{ motif: 'sun', x: 300, y: 96 }] },
        },
        notes: '몸 그림에 손·손가락 칸이 없어 손목으로 대신한다. 학생 본인의 화상 경험은 묻지 않는다.',
      }),
      M('intro.spill-scene', {
        title: '국물 쏟은 뒤 이어질 장면', method: '뜨거운 국 엎지른 장면 다음 고르기', tool: 'story', minutes: 6,
        levels: { easy: '교사가 쏟은 장면 다음에 올 장면 1장(식히기)을 함께 고른다.', base: '쏟은 장면 뒤에 올 장면 2장을 차례로 고른다.', challenge: '고른 뒤 \'된장 바르기\' 장면이 왜 틀렸는지 고쳐 말한다.' },
        intro: {
          teacher: '"뜨거운 국물을 다리에 쏟았다면, 가장 먼저 무엇이 이어져야 할까요?" 시연 단추로 쏟은 장면 뒤에 \'떨어지기\'와 \'흐르는 물로 식히기\'가 차례로 놓이는 모습을 보인다. "어른들은 된장이나 치약을 바르라던데요"라는 말이 나오면 "데인 곳에 무언가를 바르면 상처는 깨끗해질까요, 더러워질까요?"라고 되묻는다.',
          student: '라면 국물을 쏟은 장면 뒤에 올 행동 장면을 차례로 골라요. 빠뜨리면 안 되는 장면이 무엇인지 생각해요.',
          demo: { tool: 'story', options: { mode: 'order', slots: 3, cards: [SPILL[2], SPILL[3], SPILL[0], SPILL[1]], title: '국물을 쏟았어요' }, sequence: [{ order: ['sp', 'away', 'water'] }] },
          art: { draw: 'a paper-cut scene of a spilled bowl of hot ramen soup on a table and a teenager stepping back toward a running kitchen tap', banner: '쏟았다! 그다음은?', extra: [{ motif: 'rain', x: 300, y: 96 }] },
        },
      }),

      // ---- 활동 ----
      M('activity.care-order', {
        title: '화상 처치 순서 놓기', method: '화상 처치 순서 놓기', tool: 'kitchen', minutes: 15,
        levels: { easy: '처치 카드 3장(식히기·장신구 빼기·덮기)을 차례로 놓고, 놓으면 바로 맞는지 알려 준다.', base: '처치 카드 4장을 차례로 놓고, 오해 카드가 섞인 판에서도 바른 차례만 놓는다.', challenge: '마지막 문항에서 순서를 바꿔 \'덮기\'부터 하면 생기는 문제를 골라 담는다.' },
        activity: {
          title: '화상 처치 순서 놓기', tool: 'kitchen',
          teacher: '"데었을 때 덮는 것이 먼저일까요, 식히는 것이 먼저일까요?" 카드를 놓을 때마다 그 차례인 까닭을 한 사람씩 말하게 한다. "반지는 나중에 빼도 된다"는 학생에게 "데인 곳이 부어오르면 반지는 빠질까요?"라고 되묻는다. 식히는 시간은 교사가 국민재난안전포털·질병관리청 등의 최신 공식 안내를 확인해 말해 준다.',
          task: '화상을 입었을 때의 처치 카드를 바른 차례로 놓고, 오해 카드는 차례에 넣지 않아요.',
          levels: { easy: { live: true, instant: true, autoMotif: false }, base: { autoMotif: false }, challenge: { autoMotif: false, shuffle: true } },
          items: [
            IT(OB('화상 처치 카드를 바른 차례대로 놓으세요.', CARE),
              OB('화상 처치 카드 세 장을 바른 차례대로 놓으세요.', CARE.slice(0, 3))),
            IT(OB('오해 카드는 빼고, 화상 처치 카드만 바른 차례대로 놓으세요.', CARE, {}, MYTH),
              OB('오해 카드 한 장은 빼고, 처치 카드 세 장만 차례대로 놓으세요.', CARE.slice(0, 3), {}, [MYTH[0]])),
            IT(MB('상황마다 가장 먼저 할 일을 이어 보세요.', [['다리에 뜨거운 국물이 쏟아짐', '젖은 옷을 살살 떼고 찬물로 식히기'], ['다리미에 손목이 닿음', '흐르는 찬물로 식히기'], ['데인 손가락에 반지가 있음', '부풀기 전에 반지 빼기']], ['얼음을 바로 대기']),
              MB('두 상황에 가장 먼저 할 일을 이어 보세요.', [['다리미에 손목이 닿음', '흐르는 찬물로 식히기'], ['데인 손가락에 반지가 있음', '부풀기 전에 반지 빼기']], []),
              PB('순서를 바꿔 식히기 전에 천으로 덮기부터 하면 생기는 문제를 골라 담으세요.', '생기는 문제', [
                { id: 'p1', text: '열이 빠지지 않아 더 깊이 덴다', ok: true }, { id: 'p2', text: '덮은 천이 상처에 달라붙는다', ok: true },
                { id: 'p3', text: '상처가 더 빨리 낫는다' }, { id: 'p4', text: '아무 문제 없다' }]),
              { conclude: '화상은 먼저 흐르는 찬물로 식히고, 부풀기 전에 장신구를 뺀 뒤 깨끗이 덮고 병원 갈지 판단해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '화상 처치 차례를 써요.', columns: ['차례', '할 일'], cells: [['1', ''], ['2', ''], ['3', ''], ['4', '']], answer: '찬물로 식히기, 장신구 빼기, 깨끗이 덮기, 병원 판단' }],
          easy: [{ type: 'choice', prompt: '데었을 때 가장 먼저 할 일에 ○ 해요.', options: ['흐르는 찬물로 식히기', '된장 바르기'], answer: '흐르는 찬물로 식히기' }] },
        notes: '식히는 시간(분)은 이 모듈에 적지 않았다. 교사가 최신 공식 안내를 확인해 말한다.',
      }),
      M('activity.hospital-choice', {
        title: '물집 넓은 화상, 병원 갈까', method: '물집 넓은 화상, 병원 갈까', tool: 'dilemma', minutes: 15,
        levels: { easy: '두 상황(집·가사실)에서 갈림길 1번씩 고르고 결과를 본다.', base: '두 상황에서 갈림길 2번을 끝까지 가 보고 판단 근거 카드를 고른다.', challenge: '두 상황에서 갈림길 3번까지 가 친구의 오해·귀찮음까지 만나고, 근거 카드를 모두 고른다.' },
        activity: {
          title: '물집 넓은 화상, 병원 갈까', tool: 'dilemma',
          teacher: '"아프지 않으면 병원에 안 가도 될까요? 무엇을 보고 정해야 할까요?" 한 길을 끝까지 가 본 뒤 다른 길과 견주게 한다. "물집은 터뜨려야 빨리 낫는다"는 학생에게 "물집 아래 드러난 살은 무엇이 지켜 줄까요?"라고 되묻는다. 병원 판단은 아픈 정도만이 아니라 넓이·부위·물집을 함께 본다는 점을 짚는다.',
          task: '물집이 넓게 생긴 화상 상황에서 길을 골라 결과를 따라가고, 끝에서 판단 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL({ easy: '물집이 넓게 생겼어요. 한 번 골라 결과를 보세요.', base: '물집이 넓게 생겼어요. 두 번 골라 끝까지 가고 판단 근거를 고르세요.', challenge: '물집이 넓게 생겼어요. 세 번 골라 끝까지 가고 판단 근거를 모두 고르세요.' },
              '넓어진 물집', D1, [['tell', 'ask', 'explain']], R1, ['r1', 'r2'], R1MORE),
            DIL({ easy: '가사실에서 친구가 데었어요. 한 번 골라 결과를 보세요.', base: '가사실에서 친구가 데었어요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '가사실에서 친구가 데었어요. 세 번 골라 끝까지 가고 근거를 모두 고르세요.' },
              '가사실 실습 중', D2, [['cool', 'nurse', 'report']], R2, ['r1', 'r2'], R2MORE),
            { prompt: '짝과 "병원에 갈지 정할 때 볼 것" 세 가지를 말로 정리해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '화상을 입었을 때 병원에 갈지 정하려면 무엇을 봐야 하는지 한 문장으로 써요.' }] },
        notes: '병원 판단 기준(넓이·부위·물집·감전)은 일반 안내다. 교사가 공식 응급처치 안내로 확인한다.',
      }),

      // ---- 정리 ----
      M('wrap.myth-notice', {
        title: '화상 오해 바로잡는 안내글', method: '오해 바로잡는 안내글', tool: 'rubric-writing', minutes: 9,
        levels: { easy: '문장 틀을 따라 두 문장으로 쓴다.', base: '세 문장으로 쓰고 기준 3개(하지 말 것·근거·쉬운 말)를 점검한다.', challenge: '세 문장에 대신 할 행동까지 넣고 기준 4개를 점검한다.' },
        wrap: {
          teacher: '"할머니가 \'데면 된장 발라라\'고 하신다면, 우리 가족에게 뭐라고 알려 드릴까요?" 꾸짖는 말이 아니라 까닭을 들어 부드럽게 알리는 안내글을 쓰게 한다. "어른 말씀이 틀릴 리 없다"는 학생에게 예전에는 그렇게 알려졌지만 지금은 상처를 더럽혀 덧나게 한다고 안내한다고 말해 준다. 가족 이름은 쓰지 않게 한다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'rubric-writing', options: { topic: '가족에게 보낼 \'화상에 하지 말아야 할 것\' 안내글을 세 문장으로 쓰세요.', minChars: 30, maxChars: 200, minSentences: 3, maxSentences: 4, title: '화상 안내글' },
              prompt: '가족에게 보낼 화상 안내글을 세 문장으로 쓰고 기준표에 표시해요.', target: { selfCheck: NOTICE }, difficulty: 0.3 },
            { prompt: '틀을 따라 화상 안내글을 두 문장으로 쓰고 기준표에 표시해요.', toolOptions: { minSentences: 2, starter: '데었을 때 ___는 하지 마세요. ___ 때문이에요.' } },
            { prompt: '하지 말 것과 대신 할 행동까지 넣어 안내글을 쓰고 기준표에 표시해요.', target: { selfCheck: [...NOTICE, '대신 할 바른 행동을 썼다'] } }),
            { type: 'choice', prompt: '데인 곳에 얼음을 바로 대지 않는 까닭으로 알맞은 것은?', options: ['너무 차가워 살을 더 다치게 할 수 있다', '얼음이 비싸다', '얼음은 효과가 너무 좋다'], answer: 0, difficulty: 0.2, explain: '얼음은 피부를 더 상하게 할 수 있어 흐르는 찬물로 식혀요.' },
            { type: 'short', prompt: '오늘 바로잡은 오해 하나와 바른 처치를 한 문장으로 써요.' },
          ],
        },
        worksheet: {
          title: '화상, 이것만은 하지 마세요',
          items: [
            { type: 'table', prompt: '오해와 바른 처치를 써요.', columns: ['오해', '바른 처치'], cells: [['된장·치약 바르기', ''], ['얼음 바로 대기', ''], ['물집 터뜨리기', '']], answer: '바르지 않고 흐르는 찬물로 식히기 / 흐르는 찬물 / 물집은 두고 깨끗이 덮기' },
            { type: 'short', prompt: '가족에게 보낼 화상 안내글을 세 문장으로 써요.' },
          ],
          easy: { note: '"데었을 때 ___는 하지 마세요. ___ 때문이에요." 틀을 써도 돼요.', items: [{ type: 'blank', prompt: '틀을 채워 써요.', text: '데었을 때 ___는 하지 마세요. ___ 때문이에요.', answer: '(예) 된장 바르기, 상처가 더러워져 덧나기' }] },
        },
      }),
      M('wrap.self-check', {
        title: '화상 처치 스스로 점검', method: '화상 처치 스스로 점검', tool: 'timer', minutes: 9,
        levels: { easy: '점검 항목 2개에 스스로 표시한다.', base: '점검 항목 3개에 스스로 표시한다.', challenge: '점검 항목 4개(가족에게 알리기 포함)에 스스로 표시한다.' },
        wrap: {
          teacher: '"지금 누가 데었다고 하면, 가장 먼저 떠오르는 행동은 무엇인가요?" 점검 항목을 한 줄씩 읽고 내가 할 수 있는 것만 표시하게 한다. 표시하지 못한 항목은 활동지 표를 다시 보며 채우게 한다. "알지만 막상 하면 당황할 것 같다"는 학생에게 차례 하나(식히기)만 먼저 몸에 익혀도 된다고 말해 준다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'timer', options: { title: '화상 처치 점검' }, prompt: '오늘 배운 화상 처치를 스스로 점검해 표시해요.', target: { selfCheck: ['데면 흐르는 찬물로 식히기를 먼저 떠올린다', '오해 하나를 까닭과 함께 설명할 수 있다', '병원 갈지 볼 것을 말할 수 있다'] }, difficulty: 0.1 },
              { prompt: '오늘 배운 화상 처치 두 가지를 스스로 점검해 표시해요.', target: { selfCheck: ['데면 흐르는 찬물로 식히기를 먼저 떠올린다', '오해 하나를 까닭과 함께 설명할 수 있다'] } },
              { prompt: '오늘 배운 화상 처치 네 가지를 스스로 점검해 표시해요.', target: { selfCheck: ['데면 흐르는 찬물로 식히기를 먼저 떠올린다', '오해 하나를 까닭과 함께 설명할 수 있다', '병원 갈지 볼 것을 말할 수 있다', '가족에게 바른 처치를 알릴 수 있다'] } }),
            { type: 'choice', prompt: '데인 손가락에 반지가 있다면 언제 빼는 것이 좋을까요?', options: ['다 나은 뒤', '부어오르기 전에 되도록 빨리', '병원에 가서'], answer: 1, difficulty: 0.2, explain: '부어오르면 빼기 어려워져요.' },
            { type: 'mood', prompt: '오늘 수업을 마친 내 마음은 어떤가요?' },
          ],
        },
        worksheet: {
          title: '화상 처치 점검',
          items: [
            { type: 'check', prompt: '내가 할 수 있는 것에 표시해요.', options: ['흐르는 찬물로 식히기', '부풀기 전 장신구 빼기', '깨끗한 천으로 덮기', '병원 갈지 판단하기'] },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '물집은 아래 살을 지켜 주므로 일부러 ___ 않아요.', answer: '터뜨리지' },
          ],
        },
      }),
      M('activity.myth-sort', {
        title: '화상 오해와 바른 처치 가르기', method: '오해와 바른 처치 가르기', tool: 'sortboard', minutes: 15,
        levels: { easy: '카드 4장을 오해·바른 처치 바구니에 나누고, 틀리면 까닭을 듣고 되돌아온다.', base: '카드 6장을 나누고, 카드를 잘못 넣으면 그 카드가 왜 오해인지 한 줄 근거를 듣는다.', challenge: '헷갈리는 카드가 더 섞인 판에서 나누고, 오해마다 왜 위험한지 활동지에 쓴다.' },
        activity: {
          title: '화상 오해와 바른 처치 가르기', tool: 'sortboard',
          teacher: '"된장·치약은 예전부터 써 왔는데, 왜 지금은 바르지 말라고 할까요?" 카드를 넣을 때마다 근거를 한 줄씩 말하게 한다. "얼음이 더 빨리 식힌다"는 학생에게 "너무 차가운 것이 다친 살갗에 닿으면 어떻게 될까요?"라고 되묻는다. 가족의 민간요법을 놀리지 않고, 까닭을 알려 드리는 쪽으로 이야기한다.',
          task: '화상 처치 카드를 \'오해\'와 \'바른 처치\' 바구니에 나누고, 오해마다 근거를 생각해요.',
          levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
          items: [
            SBT({ base: '화상 처치 카드를 오해와 바른 처치로 나누세요.', easy: '화상 처치 카드 네 장을 오해와 바른 처치로 나누세요.', challenge: '헷갈리는 카드까지 화상 처치 카드를 오해와 바른 처치로 나누세요.' },
              ['오해', '바른 처치'], [
                { id: 'm1', text: '된장·치약 바르기', to: '오해', why: '상처를 더럽혀 덧나게 할 수 있어요.' }, { id: 'c1', text: '흐르는 찬물로 식히기', to: '바른 처치' },
                { id: 'm2', text: '물집 터뜨리기', to: '오해', why: '물집은 아래 살을 지켜 줘요.' }, { id: 'c2', text: '깨끗한 천으로 덮기', to: '바른 처치' },
                { id: 'm3', text: '얼음 바로 대기', to: '오해', why: '너무 차가워 살갗을 더 상하게 할 수 있어요.' }, { id: 'c3', text: '부풀기 전에 반지·시계 빼기', to: '바른 처치' }], 4,
              [{ id: 'm4', text: '버터·기름 발라 열 식히기', to: '오해', why: '기름은 열을 가두고 상처를 더럽혀요.' }, { id: 'c4', text: '넓게 데면 병원 진료 받기', to: '바른 처치' }]),
            SBT({ base: '데었을 때 바로 할 일과 하지 말 일을 나누세요.', easy: '카드 네 장을 바로 할 일과 하지 말 일로 나누세요.', challenge: '헷갈리는 카드까지 바로 할 일과 하지 말 일로 나누세요.' },
              ['바로 할 일', '하지 말 일'], [
                { id: 'n1', text: '뜨거운 것에서 바로 떨어지기', to: '바로 할 일' }, { id: 'n2', text: '데인 곳을 손으로 비비기', to: '하지 말 일' },
                { id: 'n3', text: '어른에게 알리기', to: '바로 할 일' }, { id: 'n4', text: '아무 연고나 두껍게 바르기', to: '하지 말 일' },
                { id: 'n5', text: '젖은 옷은 살살 떼기', to: '바로 할 일' }, { id: 'n6', text: '붙은 옷을 억지로 잡아떼기', to: '하지 말 일' }], 4,
              [{ id: 'n7', text: '혼자 참고 숨기기', to: '하지 말 일' }]),
            { prompt: '짝과 오해 하나를 골라 왜 위험한지 근거를 들어 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '오해마다 왜 위험한지 써요.', columns: ['오해', '왜 위험할까'], cells: [['된장·치약', ''], ['물집 터뜨리기', ''], ['얼음 바로 대기', '']], answer: '상처를 더럽힘 / 아래 살이 드러나 덧남 / 살갗을 더 상하게 함' }],
          easy: [{ type: 'choice', prompt: '바른 처치에 ○ 해요.', options: ['흐르는 찬물로 식히기', '된장 바르기'], answer: '흐르는 찬물로 식히기' }] },
      }),
    );
  }

  // ==== 7학년 · 태풍·호우 대비와 판단 (saf-disaster.m.storm-flood) ====
  {
    const M = MK('storm-flood', [7]);
    // 가상 자료 — 실제 관측값이 아니다
    const RAIN = [['6시', 5], ['8시', 20], ['10시', 45], ['12시', 30], ['14시', 10]];
    const RAIN_B = [['6시', 15], ['8시', 35], ['10시', 25], ['12시', 10], ['14시', 5]];
    const TOWN = { grid: [6, 4], title: '가상의 우리 동네', rivers: [[[0, 1], [1, 1], [2, 1], [3, 1], [4, 1], [5, 1]]], regions: [
      { name: '우리 집', cells: [[0, 0]] }, { name: '언덕 위 큰길', cells: [[1, 0], [2, 0], [3, 0], [4, 0]] }, { name: '학교', cells: [[5, 0]] },
      { name: '하천변 산책로', cells: [[0, 2], [1, 2], [2, 2]] }, { name: '지하차도', cells: [[3, 2]] }, { name: '반지하 상가', cells: [[4, 2], [5, 2]] },
      { name: '낮은 공터', cells: [[0, 3], [1, 3], [2, 3]] }, { name: '주민센터', cells: [[3, 3], [4, 3], [5, 3]] },
    ] };
    const PREP = [{ id: 'p1', text: '창문을 단단히 닫고 고정하기', ok: true }, { id: 'p2', text: '어른과 집 앞 배수구 막힘 살피기', ok: true },
      { id: 'p3', text: '가족 비상 연락 방법 정하기', ok: true }, { id: 'p4', text: '손전등·보조 배터리 챙겨 두기', ok: true },
      { id: 'p5', text: '태풍 구경하러 바닷가 가기' }, { id: 'p6', text: '베란다 화분을 밖에 그대로 두기' }];
    const D1 = { text: '호우 특보가 내린 아침, 등굣길이 두 갈래다. 하천변 산책로는 10분 빠르고, 언덕 위 큰길은 돌아간다.', ask: '어느 길로 갈까?', motif: 'rain', choices: [
      { id: 'river', text: '빠른 하천변 산책로로 간다', result: '산책로 옆 하천 물이 불어 길 끝이 물에 잠겨 있다.', impact: [{ who: '나', text: '물에 휩쓸릴 수 있다', tone: -1 }], why: '호우 때 하천변은 물이 갑자기 불어나요. 빠른 길보다 높은 길을 골라요.', end: '하천변으로 갔다가 물에 잠긴 길을 만났어요.',
        next: { text: '물에 잠긴 곳은 발목 정도로 얕아 보인다.', choices: [
          { id: 'wade', text: '얕아 보이니 건너간다', result: '흐르는 물살에 발이 미끄러진다.', impact: [{ who: '나', text: '넘어져 휩쓸릴 수 있다', tone: -1 }], why: '흐르는 물은 얕아도 사람을 넘어뜨려요. 건너지 않아요.' },
          { id: 'turn', text: '되돌아가 큰길로 간다', result: '조금 늦지만 안전하게 학교에 닿는다.', impact: [{ who: '나', text: '안전하다', tone: 1 }] }] } },
      { id: 'hill', text: '돌아가더라도 언덕 위 큰길로 간다', result: '빗길이지만 물이 고이지 않은 길로 걷는다.', impact: [{ who: '나', text: '안전하게 걷는다', tone: 1 }], end: '언덕 위 큰길로 안전하게 갔어요.',
        next: { text: '큰길 끝에서 친구가 "지하차도로 가로질러 가자, 금방이야"라고 한다.', choices: [
          { id: 'under', text: '친구를 따라 지하차도로 내려간다', result: '지하차도 바닥에 물이 빠르게 차오른다.', impact: [{ who: '나와 친구', text: '갇힐 수 있다', tone: -1 }], why: '호우 때 지하차도·지하 공간은 물이 순식간에 차요. 들어가지 않아요.' },
          { id: 'stay', text: '"지하차도는 물이 차"라며 위쪽 길로 가자고 한다', result: '둘 다 위쪽 길로 학교에 간다.', impact: [{ who: '친구', text: '위험을 피한다', tone: 1 }], end: '친구와 위쪽 길로 갔어요.',
            next: { text: '학교에 닿았는데 오후에 비가 그치자 친구들이 "하천 구경 가자"고 한다.', choices: [
              { id: 'look', text: '비가 그쳤으니 하천 구경을 간다', result: '상류에서 내려온 물로 하천이 여전히 거세다.', impact: [{ who: '나', text: '물가에서 미끄러질 수 있다', tone: -1 }], why: '비가 그쳐도 상류 물이 내려와 하천은 한동안 위험해요.' },
              { id: 'home', text: '특보가 풀렸는지 확인하고 하천에는 가지 않는다', result: '안전하게 집으로 간다.', impact: [{ who: '친구들', text: '함께 위험을 피한다', tone: 1 }] }] } }] } },
      { id: 'skip', text: '가족에게 알리지 않고 혼자 집에 남는다', result: '학교와 가족이 연락이 안 돼 걱정한다.', impact: [{ who: '가족', text: '걱정한다', tone: -1 }], why: '등교가 어려우면 가족·학교와 연락하고 안내를 따라요.', ending: '알리지 않아 모두 걱정했어요.' }] };
    const R1 = [{ id: 'r1', text: '호우 때는 빠른 길보다 물이 모이지 않는 높은 길이 안전하다' }, { id: 'r2', text: '지하차도·하천변은 물이 갑자기 불어난다' },
      { id: 'r3', text: '지름길이면 물이 고인 길도 괜찮다', why: '고인 물 아래는 보이지 않고, 흐르는 물은 얕아도 위험해요.' }, { id: 'r4', text: '태풍은 바다 근처만 위험하다', why: '호우는 동네 하천·지하 공간도 위험하게 만들어요.' }];
    const R1MORE = { reasons: [{ id: 'r5', text: '비가 그쳐도 하천에는 바로 가지 않는다' }], ok: ['r5'] };
    const WIRE = { text: '등굣길 물웅덩이에 끊어진 전선이 늘어져 있다. 옆 친구가 "막대로 치우자"고 한다.', ask: '어떻게 할까?', motif: 'rain', choices: [
      { id: 'poke', text: '막대로 전선을 치운다', result: '물을 타고 전기가 흐를 수 있어 위험하다.', impact: [{ who: '나와 친구', text: '감전될 수 있다', tone: -1 }], why: '물과 전선이 닿은 곳은 가까이 가지 않아요.', ending: '감전될 뻔했어요.' },
      { id: 'away', text: '멀리 돌아가며 친구도 말린다', result: '둘 다 웅덩이에서 떨어진다.', impact: [{ who: '친구', text: '위험을 피한다', tone: 1 }], end: '멀리 돌아가 위험을 피했어요.', next: { text: '학교에 닿았다. 전선은 그대로 늘어져 있다.', choices: [
        { id: 'report', text: '선생님께 위치를 말해 신고를 부탁한다', result: '관련 기관에 신고가 들어간다.', impact: [{ who: '다른 등굣길 학생', text: '위험을 피한다', tone: 1 }], ending: '알려서 다른 사람도 피했어요.' },
        { id: 'forget', text: '그냥 교실로 간다', result: '다른 학생들이 그 길로 지나간다.', impact: [{ who: '다른 등굣길 학생', text: '위험해진다', tone: -1 }], why: '본 위험은 어른에게 알려 다른 사람도 피하게 해요.', ending: '알리지 않아 다른 사람이 위험했어요.' }] } }] };
    const MSG = ['미리 할 일을 하나 이상 썼다', '언제 할지(시간)를 썼다', '연락 방법을 썼다'];

    ALL.push(
      // ---- 도입 ----
      M('intro.rain-line', {
        title: '가상 강수 꺾은선 읽기', method: '예시 강수 꺾은선 읽기', tool: 'chart', minutes: 6,
        levels: { easy: '교사가 눈금 한 칸이 얼마인지 함께 읽고 가장 높은 점을 손으로 짚는다.', base: '가장 비가 많은 때를 찾고 비가 늘었다 줄어드는 변화를 말한다.', challenge: '교사가 다른 지역(가상) 꺾은선을 더 보이면 두 지역의 가장 위험한 때를 견주어 말한다.' },
        intro: {
          teacher: '"이 꺾은선에서 비가 가장 많이 오는 때는 언제이고, 그때 나는 어디에 있으면 안 될까요?" 가상 시간별 강수 꺾은선을 띄우고 실제 관측값이 아닌 수업용 예시라고 밝힌다. 시연 단추로 10시가 골라지는 모습을 보인다. "비가 줄어들기 시작하면 이제 괜찮다"는 말이 나오면 "12시에도 비가 꽤 오는데, 하천 물은 바로 줄어들까요?"라고 되묻는다.',
          student: '가상 꺾은선에서 비가 가장 많이 오는 때를 찾고, 그 시간에 피해야 할 곳과 할 일을 짝에게 말해요.',
          demo: { tool: 'chart', options: { type: 'line', mode: 'read', title: '시간별 강수량(가상 예시)', unit: 'mm', xLabel: '시각', yLabel: '강수량', data: RAIN, question: '비가 가장 많은 때는?', choices: RAIN.map((d) => d[0]) }, sequence: [{ pick: 2 }] },
          art: { draw: 'a paper-cut rainy town with dark clouds, a swollen stream and a line graph poster rising and falling', banner: '비가 가장 많은 때는?', extra: [{ motif: 'rain', x: 300, y: 96 }] },
        },
        notes: '꺾은선 값은 지어낸 예시다. 실제 예보는 기상청 날씨누리에서 교사가 보인다.',
      }),
      M('intro.typhoon-map', {
        title: '태풍·호우 떠올리기', method: '태풍 떠올리기 연상 지도', tool: 'mindmap', minutes: 6,
        levels: { easy: '교사가 가지 3개(바람·비·물)에 위험 카드를 하나씩 함께 붙인다.', base: '가지 4개(바람·비·물·전기)에 떠오르는 위험을 붙인다.', challenge: '가지마다 미리 할 준비 행동을 하나씩 덧붙여 말한다.' },
        intro: {
          teacher: '"태풍이 온다는 소식을 들으면 무엇이 가장 걱정되나요? 바람, 비, 물, 전기로 나눠 볼까요?" 시연 단추로 위험 카드가 가지에 붙는 모습을 보인다. "태풍은 바닷가 사람들만 걱정하면 된다"는 말이 나오면 "우리 동네 지하차도나 하천은 어떨까요?"라고 되묻는다.',
          student: '\'태풍·호우\' 가지에 바람·비·물·전기로 떠오르는 위험을 붙이고, 우리 동네에서 걱정되는 곳 하나를 말해요.',
          demo: { tool: 'mindmap', options: { mode: 'sort', topic: '태풍·호우', slots: ['바람', '비', '물', '전기'], cards: [
            { id: 'w1', text: '떨어지는 간판' }, { id: 'r1', text: '앞이 안 보이는 빗길' }, { id: 'f1', text: '물이 차는 지하차도' }, { id: 'e1', text: '끊어져 늘어진 전선' }] }, sequence: [{ sort: { 바람: ['w1'], 비: ['r1'], 물: ['f1'], 전기: ['e1'] } }] },
          art: { draw: 'a paper-cut typhoon swirl over a small town with a swinging shop sign, heavy rain and a flooded underpass', banner: '태풍이 오면 무엇이 위험할까?', extra: [{ motif: 'wind', x: 300, y: 96 }] },
        },
      }),

      // ---- 활동 ----
      M('activity.prep-check', {
        title: '태풍 오기 전 준비 점검', method: '태풍 오기 전 준비 점검', tool: 'kitchen', minutes: 15,
        levels: { easy: '준비 항목 4개(함정 없음) 가운데 집에서 할 것을 모두 표시한다.', base: '함정 2개가 섞인 항목 6개에서 해야 할 것만 표시한다.', challenge: '마지막 문항에서 준비 행동 네 가지의 우선순위를 차례로 놓는다.' },
        activity: {
          title: '태풍 오기 전 준비 점검', tool: 'kitchen',
          teacher: '"태풍이 오기 하루 전, 우리 집에서 해야 할 일은 무엇일까요? 하지 말아야 할 일도 섞여 있어요." 항목을 소리 내어 읽고 표시하게 한다. "준비는 어른만 하는 것"이라는 학생에게 "가족 연락 방법을 정하는 일은 누구 몫일까요?"라고 되묻는다. 배수구 살피기처럼 위험할 수 있는 일은 꼭 어른과 함께 한다고 짚는다.',
          task: '태풍 오기 전 준비 목록에서 집에서 해야 할 것만 골라 표시해요. 함정 항목은 표시하지 않아요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT(CL('태풍 오기 전 집에서 해야 할 준비만 표시하세요.', '태풍 오기 하루 전', PREP),
              CL('태풍 오기 전 집에서 해야 할 준비를 모두 표시하세요.', '태풍 오기 하루 전', PREP.slice(0, 4))),
            IT(CL('비상 가방에 넣을 것만 표시하세요.', '우리 집 비상 가방', [
              { id: 'b1', text: '손전등', ok: true }, { id: 'b2', text: '마실 물', ok: true }, { id: 'b3', text: '보조 배터리', ok: true }, { id: 'b4', text: '비상 연락처 쪽지', ok: true },
              { id: 'b5', text: '게임기' }, { id: 'b6', text: '무거운 책 꾸러미' }]),
              CL('비상 가방에 넣을 것을 모두 표시하세요.', '우리 집 비상 가방', [{ id: 'b1', text: '손전등', ok: true }, { id: 'b2', text: '마실 물', ok: true }, { id: 'b3', text: '보조 배터리', ok: true }, { id: 'b4', text: '비상 연락처 쪽지', ok: true }])),
            IT(CL('태풍이 지나가는 동안 할 일만 표시하세요.', '태풍이 지나가는 동안', [
              { id: 'd1', text: '외출하지 않고 집 안에 있기', ok: true }, { id: 'd2', text: '창문에서 떨어져 지내기', ok: true }, { id: 'd3', text: '재난 안내 방송·문자 확인하기', ok: true },
              { id: 'd4', text: '바람 구경하러 옥상 가기' }, { id: 'd5', text: '물에 잠긴 길로 심부름 가기' }]),
              null,
              { prompt: '준비 행동 네 가지를 먼저 할 것부터 차례대로 놓으세요.', toolOptions: { mode: 'order', slots: 4, autoMotif: false, cards: [{ id: 'o3', text: '비상 가방 챙기기' }, { id: 'o1', text: '예보·특보 확인하기' }, { id: 'o4', text: '창문 고정·물건 들여놓기' }, { id: 'o2', text: '가족 연락 방법 정하기' }] }, target: { order: ['o1', 'o2', 'o4', 'o3'] } },
              { conclude: '태풍 전에는 예보를 보고 집과 가족을 준비하고, 지나가는 동안에는 밖에 나가지 않고 안내를 확인해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'check', prompt: '태풍 전에 우리 집에서 할 일에 표시해요.', options: ['창문 고정', '가족 연락 방법 정하기', '손전등·보조 배터리', '배수구 살피기(어른과)'] }] },
        notes: '우선순위 차례는 수업용 예시다. 집마다 형편에 따라 다를 수 있다고 말해 준다.',
      }),
      M('activity.route-choice', {
        title: '특보 중 등굣길 갈림길', method: '특보 중 등굣길 갈림길', tool: 'dilemma', minutes: 15,
        levels: { easy: '갈림길 1번에서 길을 고르고 결과를 본다.', base: '갈림길 2번을 끝까지 가 보고 근거 카드를 고른다.', challenge: '갈림길 3번(비가 그친 오후)까지 가고 근거 카드를 모두 고른다.' },
        activity: {
          title: '특보 중 등굣길 갈림길', tool: 'dilemma',
          teacher: '"10분 빠른 하천변 길과 돌아가는 언덕길, 호우 특보가 내린 날에는 무엇을 보고 골라야 할까요?" 한 길을 끝까지 가 본 뒤 다른 길과 견주게 한다. "물이 발목밖에 안 차면 건너도 된다"는 학생에게 "물이 흐르고 있다면 발목 물도 나를 넘어뜨릴 수 있을까요?"라고 되묻는다. 비가 그친 뒤의 하천이 왜 아직 위험한지도 끝 장면에서 짚는다.',
          task: '호우 특보가 내린 아침 등굣길을 골라 결과를 따라가고, 끝에서 내 선택의 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL({ easy: '호우 특보가 내린 아침이에요. 한 번 골라 결과를 보세요.', base: '호우 특보가 내린 아침이에요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '호우 특보가 내린 아침이에요. 세 번 골라 오후까지 가고 근거를 모두 고르세요.' },
              '호우 특보 등굣길', D1, [['hill', 'stay', 'home']], R1, ['r1', 'r2'], R1MORE),
            { prompt: '같은 아침, 물웅덩이에 끊어진 전선이 늘어져 있어요. 두 번 골라 끝까지 가세요.', toolOptions: { title: '물웅덩이 전선', scene: cut(WIRE, 2), reasons: [] }, target: { path: [['away', 'report']] },
              levels: { easy: { prompt: '물웅덩이에 끊어진 전선이 늘어져 있어요. 한 번 골라 결과를 보세요.', toolOptions: { scene: cut(WIRE, 1) }, target: { path: [['away']] } } } },
            { prompt: '짝과 "호우 특보가 내린 날 가지 않을 곳" 세 곳을 말로 정해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '호우 특보 때 피해야 할 곳이 아닌 것은?', options: ['지하차도', '하천변 산책로', '물이 고이지 않는 높은 큰길'], answer: '물이 고이지 않는 높은 큰길' }] },
      }),
      M('activity.flood-map', {
        title: '동네 지도 침수 위험 칸', method: '동네 지도에서 침수 위험 칸 찾기', tool: 'map', minutes: 15,
        levels: { easy: '핀을 놓으면 칸 이름이 바로 읽히고, 위험 칸 2곳(하천변·지하차도)만 꽂는다.', base: '위험 칸 3곳을 꽂고, 우리 집에서 학교까지 안전한 길의 칸을 꽂는다.', challenge: '마지막 문항에서 두 경로를 견주어 더 안전한 경로를 까닭과 함께 고른다.' },
        activity: {
          title: '동네 지도 침수 위험 칸', tool: 'map',
          teacher: '"이 동네에서 비가 많이 오면 물이 가장 먼저 모이는 곳은 어디일까요?" 하천과 높낮이를 먼저 함께 읽고 핀을 꽂게 한다. "반지하 상가는 건물 안이니 안전하다"는 학생에게 "물은 높은 곳에서 낮은 곳 중 어디로 흐를까요?"라고 되묻는다. 위험 칸을 다 찾은 뒤에는 그곳을 피해 가는 길을 정하게 한다.',
          task: '가상 동네 칸 지도에서 침수 위험이 큰 칸에 핀을 꽂고, 그곳을 피해 학교까지 가는 안전한 길을 골라요.',
          levels: { easy: { readout: true }, base: {}, challenge: {} },
          items: [
            PIN('하천 물이 불어날 때 가장 먼저 잠길 길에 핀을 꽂으세요.', TOWN, { region: '하천변 산책로' }),
            PIN('호우 때 물이 순식간에 차는 지하 공간에 핀을 꽂으세요.', TOWN, { region: '지하차도' }),
            PIN('건물 안이지만 물이 들어오기 쉬운 곳에 핀을 꽂으세요.', TOWN, { region: '반지하 상가' }),
            IT(PIN('우리 집에서 학교까지 물이 모이지 않는 길에 핀을 꽂으세요.', TOWN, { region: '언덕 위 큰길' }),
              null,
              { prompt: '두 경로를 견주어 보세요. 더 안전한 경로를 고르고 그 칸에 핀을 꽂으세요.', toolOptions: { ask: { q: '더 안전한 경로는?', choices: ['언덕 위 큰길로 돌아가기', '하천변 산책로로 지름길', '지하차도로 가로지르기'] } }, target: { region: '언덕 위 큰길', pick: 0 } },
              { conclude: '호우 때는 하천변·지하·낮은 곳을 피하고, 조금 돌아가더라도 높은 길로 가요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '우리 동네에서 호우 때 피할 곳과 안전한 길을 써요.', columns: ['구분', '곳'], cells: [['피할 곳', ''], ['안전한 길', '']] }] },
        notes: '칸 지도는 가상 동네다. 실제 침수 위험 지역은 지방자치단체가 공개한 재해 지도로 교사가 확인한다.',
      }),

      // ---- 정리 ----
      M('wrap.family-msg', {
        title: '가족에게 보낼 준비 메시지', method: '가족에게 보낼 준비 메시지', tool: 'rubric-writing', minutes: 9,
        levels: { easy: '문장 틀을 따라 두 문장으로 쓴다.', base: '세 문장으로 쓰고 기준 3개(할 일·시간·연락)를 점검한다.', challenge: '세 문장에 연락이 끊겼을 때 다시 만날 방법까지 넣고 기준 4개를 점검한다.' },
        wrap: {
          teacher: '"\'태풍 와, 조심해\'라는 메시지를 받으면 가족은 무엇을 해야 할지 알까요?" 할 일·시간·연락 방법이 들어간 메시지와 견주어 읽은 뒤 쓰게 한다. "가족은 이미 다 안다"는 학생에게 오늘 배운 지하차도·하천변 이야기를 가족도 알고 있을지 되묻는다. 실제 전화번호·주소는 쓰지 않게 한다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'rubric-writing', options: { topic: '태풍 오기 전날 가족에게 보낼 준비 메시지를 세 문장으로 쓰세요(전화번호·주소는 쓰지 않아요).', minChars: 30, maxChars: 200, minSentences: 3, maxSentences: 4, title: '가족 준비 메시지' },
              prompt: '태풍 전날 가족에게 보낼 준비 메시지를 쓰고 기준표에 표시해요.', target: { selfCheck: MSG }, difficulty: 0.3 },
            { prompt: '틀을 따라 준비 메시지를 두 문장으로 쓰고 기준표에 표시해요.', toolOptions: { minSentences: 2, starter: '내일 태풍이 와요. ___까지 ___ 해 두어요.' } },
            { prompt: '연락이 끊겼을 때 다시 만날 방법까지 넣어 메시지를 쓰고 기준표에 표시해요.', target: { selfCheck: [...MSG, '연락이 끊겼을 때 만날 곳이나 방법을 썼다'] } }),
            { type: 'choice', prompt: '"비가 그쳤으니 하천에 가 보자"는 말에 대한 답으로 알맞은 것은?', options: ['그래, 구경 가자', '비가 그쳐도 하천 물은 한동안 거세니 가지 말자', '사진만 찍고 오자'], answer: 1, difficulty: 0.2, explain: '상류 물이 내려와 하천은 한동안 위험해요.' },
            { type: 'short', prompt: '호우 특보 때 우리 동네에서 내가 피할 곳 한 곳을 써요.' },
          ],
        },
        worksheet: {
          title: '태풍·호우 준비 메시지',
          items: [
            { type: 'short', prompt: '가족에게 보낼 태풍 준비 메시지를 세 문장으로 써요(할 일·시간·연락).' },
            { type: 'check', prompt: '내 메시지를 점검해요.', options: ['할 일이 있다', '언제 할지 있다', '연락 방법이 있다'] },
          ],
          easy: { note: '"내일 태풍이 와요. ___까지 ___ 해 두어요." 틀을 써도 돼요.', items: [{ type: 'blank', prompt: '틀을 채워 써요.', text: '내일 태풍이 와요. ___까지 ___ 해 두어요.', answer: '(예) 오늘 밤, 창문 고정' }] },
        },
      }),
      M('wrap.phase-sort', {
        title: '태풍 전·중·후 할 일 바구니', method: '전·중·후 할 일 정리', tool: 'sortboard', minutes: 9,
        levels: { easy: '카드 4장을 전·중·후 바구니에 나누고, 틀리면 까닭을 듣고 되돌아온다.', base: '카드 6장을 태풍 전·중·후 바구니에 나눈다.', challenge: '함정 카드가 섞인 판에서 나누고, 빠진 행동 하나를 직접 써 더한다.' },
        wrap: {
          teacher: '"오늘 배운 일을 태풍 전·태풍이 지나가는 동안·지나간 뒤로 나눠 볼까요?" 바구니에 다 나누면 \'뒤\' 바구니를 함께 읽고, 지나간 뒤에도 끊어진 전선·불어난 하천이 남아 있다는 점을 짚는다. "태풍이 지나가면 끝"이라는 말에는 "지나간 뒤 물웅덩이에 늘어진 전선은 안전할까요?"라고 되묻는다.',
          exitTicket: [
            EXSB({ base: '할 일 카드를 태풍 전·중·후 바구니에 나눠요.', easy: '할 일 카드 네 장을 태풍 전·중·후 바구니에 나눠요.', challenge: '함정 카드는 남기고 할 일 카드를 태풍 전·중·후 바구니에 나눠요.' },
              ['태풍 전', '지나가는 동안', '지나간 뒤'], [
                { id: 'b1', text: '창문 고정하고 물건 들여놓기', to: '태풍 전' }, { id: 'd1', text: '외출하지 않고 창가에서 떨어지기', to: '지나가는 동안' },
                { id: 'a1', text: '끊어진 전선·물웅덩이 피하기', to: '지나간 뒤' }, { id: 'b2', text: '가족 연락 방법 정하기', to: '태풍 전' },
                { id: 'd2', text: '재난 안내 방송·문자 확인하기', to: '지나가는 동안' }, { id: 'a2', text: '불어난 하천에 가까이 가지 않기', to: '지나간 뒤' }], 4,
              [{ id: 't1', text: '바람 구경하러 옥상 가기' }, { id: 't2', text: '비 그치자 바로 하천 구경 가기' }]),
            { type: 'choice', prompt: '태풍이 지나간 뒤에도 조심할 것으로 알맞은 것은?', options: ['끊어진 전선과 불어난 하천', '맑은 하늘', '새로 핀 꽃'], answer: 0, difficulty: 0.15, explain: '지나간 뒤에도 전선·하천·약해진 시설이 위험해요.' },
            { type: 'short', prompt: '바구니에 없던 태풍 대비 행동 하나를 써요.' },
          ],
        },
        worksheet: {
          title: '태풍 전·중·후',
          items: [
            { type: 'table', prompt: '때마다 할 일을 하나씩 써요.', columns: ['때', '할 일'], cells: [['태풍 전', ''], ['지나가는 동안', ''], ['지나간 뒤', '']], answer: '창문 고정·연락 방법 / 외출 안 하기·안내 확인 / 전선·하천 피하기' },
            { type: 'short', prompt: '우리 가족이 태풍 전에 할 일 한 가지를 써요.' },
          ],
        },
      }),
    );
  }

  // ==== 8학년 · 소화기 사용 판단: 끌 것인가 피할 것인가 (saf-disaster.m.extinguisher) ====
  {
    const M = MK('extinguisher', [8]);
    const SPREAD = [{ id: 'g1', text: '휴지통 속 작은 불' }, { id: 'g2', text: '옆 커튼·가구로 번짐' }, { id: 'g3', text: '불길이 천장에 닿음' }, { id: 'g4', text: '방 전체가 연기와 불길' }];
    const USE = [{ id: 'u1', text: '안전핀 뽑기' }, { id: 'u2', text: '노즐을 불 쪽으로 향하기' }, { id: 'u3', text: '손잡이 꽉 움켜쥐기' }, { id: 'u4', text: '비로 쓸듯 골고루 뿌리기' }];
    const ESC = { id: 'u0', text: '탈출로를 등 뒤에 두고 서기' };
    const GEAR = { grid: [6, 4], title: '가상의 우리 중학교 3층', regions: [
      { name: '서쪽 비상구', cells: [[0, 0]] }, { name: '우리 반', cells: [[1, 0], [2, 0]] }, { name: '복도 소화기 함', cells: [[3, 0]] }, { name: '음악실', cells: [[4, 0], [5, 0]] },
      { name: '복도', cells: [[0, 1], [1, 1], [2, 1], [3, 1], [4, 1], [5, 1]] }, { name: '옥내 소화전', cells: [[5, 2]] }, { name: '과학실', cells: [[0, 2], [1, 2], [2, 2]] },
      { name: '과학실 소화기', cells: [[3, 2]] }, { name: '동쪽 비상구', cells: [[4, 2]] }, { name: '계단 아래 창고', cells: [[0, 3], [1, 3], [2, 3], [3, 3], [4, 3], [5, 3]] },
    ] };
    const D1 = { text: '과학실 실험 중 휴지통에서 불길이 무릎 높이로 올라온다. 선생님은 옆 반에 계시고, 문 가까이에 소화기가 있다.', ask: '먼저 무엇을 할까?', motif: 'sun', choices: [
      { id: 'grab', text: '아무 말 없이 소화기부터 집어 든다', result: '다른 친구들은 불이 난 줄 모르고 실험을 계속한다.', impact: [{ who: '같은 반 친구들', text: '대피가 늦어진다', tone: -1 }], why: '끄기 전에 먼저 "불이야" 하고 알려야 모두가 피할 수 있어요.', end: '알리지 않고 소화기부터 들었어요.',
        next: { text: '소화기를 들었는데 불길이 커튼 쪽으로 번지기 시작한다.', choices: [
          { id: 'more', text: '끝까지 혼자 끈다', result: '연기가 짙어져 문 쪽이 안 보인다.', impact: [{ who: '나', text: '갇힐 수 있다', tone: -1 }] },
          { id: 'run2', text: '소화기를 놓고 "불이야" 외치며 나간다', result: '늦었지만 친구들이 함께 나간다.', impact: [{ who: '같은 반 친구들', text: '피한다', tone: 1 }] }] } },
      { id: 'alarm', text: '"불이야!" 외치고 친구에게 선생님을 불러 달라고 한다', result: '친구들이 문 쪽으로 물러나고 한 명이 옆 반으로 뛰어간다.', impact: [{ who: '같은 반 친구들', text: '불이 난 것을 안다', tone: 1 }], end: '먼저 크게 알렸어요.',
        next: { text: '불은 아직 휴지통 안에 있고, 문은 내 등 뒤에 있다. 연기는 많지 않다.', choices: [
          { id: 'fight', text: '문을 등지고 서서 소화기로 끈다', result: '분말이 덮이며 휴지통 불이 꺼진다.', impact: [{ who: '같은 반 친구들', text: '불이 번지지 않는다', tone: 1 }], end: '탈출로를 등 뒤에 두고 작은 불을 껐어요.',
            next: { text: '불이 꺼진 것 같지만 휴지통에서 연기가 다시 조금 피어오른다.', choices: [
              { id: 'again', text: '불이 다시 커질 때까지 지켜본다', result: '다시 불씨가 살아난다.', impact: [{ who: '나', text: '다시 위험해진다', tone: -1 }], why: '끈 뒤에도 불씨가 남을 수 있어요. 선생님께 알리고 확인을 맡겨요.' },
              { id: 'handover', text: '물러나 도착한 선생님께 상황을 알리고 확인을 맡긴다', result: '선생님이 불씨를 확인하고 환기한다.', impact: [{ who: '선생님', text: '정확히 확인한다', tone: 1 }] }] } },
          { id: 'close', text: '불길 가까이 다가가 위에서 뿌린다', result: '연기를 마시며 불길 위로만 분말이 날린다.', impact: [{ who: '나', text: '연기를 마신다', tone: -1 }], why: '불 위가 아니라 불이 타는 밑부분을 향해, 너무 다가가지 않고 뿌려요.' }] } },
      { id: 'hide', text: '겁이 나서 실험대 아래에 숨는다', result: '연기가 실험대 아래까지 퍼진다.', impact: [{ who: '나', text: '빠져나오기 어렵다', tone: -1 }], why: '불이 나면 숨지 않고 알리고 나가요.', ending: '숨어 있다가 연기에 갇힐 뻔했어요.' }] };
    const R1 = [{ id: 'r1', text: '끄기 전에 먼저 알려 모두가 피할 시간을 만든다' }, { id: 'r2', text: '불이 작고 연기가 적으며 탈출로가 등 뒤에 있을 때만 끈다' },
      { id: 'r3', text: '소화기만 있으면 어떤 불도 끈다', why: '천장에 닿은 불은 소화기로 끄기 어려워요. 대피가 먼저예요.' }, { id: 'r4', text: '끄다가 안 되면 더 해 본다', why: '끄다가 안 되면 바로 피해요.' }];
    const R1MORE = { reasons: [{ id: 'r5', text: '끈 뒤에도 불씨가 남을 수 있어 어른이 확인한다' }], ok: ['r5'] };
    const D2 = { text: '집 거실에서 전기난로 옆 이불에 불이 붙었다. 불길이 벌써 내 키만큼 올라오고 연기가 천장에 모인다.', ask: '어떻게 할까?', motif: 'house', choices: [
      { id: 'fight2', text: '현관 소화기를 가져와 끈다', result: '소화기를 가져오는 사이 불이 커튼으로 번진다.', impact: [{ who: '나', text: '연기에 갇힐 수 있다', tone: -1 }], why: '불길이 키만큼 크고 연기가 천장에 모이면 끄지 말고 피해요.', end: '끄려다 불이 더 커졌어요.',
        next: { text: '연기가 내려와 앞이 잘 안 보인다.', choices: [
          { id: 'stay2', text: '계속 뿌린다', result: '숨쉬기가 어려워진다.', impact: [{ who: '나', text: '연기를 마신다', tone: -1 }] },
          { id: 'low', text: '자세를 낮추고 현관으로 나간다', result: '겨우 밖으로 나온다.', impact: [{ who: '나', text: '빠져나온다', tone: 1 }] }] } },
      { id: 'flee', text: '"불이야!" 외쳐 가족을 깨우고 자세를 낮춰 나간다', result: '가족이 모두 현관으로 나온다.', impact: [{ who: '가족', text: '함께 피한다', tone: 1 }], end: '가족과 함께 피했어요.',
        next: { text: '현관 밖으로 나왔다. 아빠가 "휴대전화 가지러 다시 들어갈게"라고 한다.', choices: [
          { id: 'back2', text: '함께 다시 들어간다', result: '연기가 복도까지 차 있다.', impact: [{ who: '가족', text: '위험한 곳으로 돌아간다', tone: -1 }], why: '대피한 뒤에는 다시 들어가지 않아요.' },
          { id: 'call2', text: '"들어가지 말아요" 하고 밖에서 119에 신고한다', result: '소방대가 출동하고 이웃에게도 알린다.', impact: [{ who: '이웃', text: '함께 피한다', tone: 1 }], end: '밖에서 신고했어요.',
            next: { text: '신고를 마쳤다. 아파트 복도에 이웃들이 아직 모르고 있다.', choices: [
              { id: 'knock', text: '"불이야!" 외치며 복도에 알리고 계단으로 내려간다', result: '이웃들이 계단으로 대피한다.', impact: [{ who: '이웃', text: '피한다', tone: 1 }] },
              { id: 'lift2', text: '엘리베이터를 타고 먼저 내려간다', result: '엘리베이터가 연기 찬 층에 멈춘다.', impact: [{ who: '가족', text: '갇힐 수 있다', tone: -1 }], why: '불이 나면 엘리베이터 대신 계단을 써요.' }] } }] } },
      { id: 'water', text: '물을 떠다 붓는다', result: '전기난로 쪽에서 불꽃이 튄다.', impact: [{ who: '나', text: '감전·화상 위험', tone: -1 }], why: '전기 기구 불에 물을 부으면 감전될 수 있어요.', ending: '전기 불에 물을 부어 위험했어요.' }] };
    const R2 = [{ id: 'r1', text: '불길이 키만큼 크고 연기가 많으면 끄지 말고 피한다' }, { id: 'r2', text: '대피한 뒤에는 다시 들어가지 않는다' },
      { id: 'r3', text: '집에 있는 소화기는 꼭 써야 한다', why: '소화기는 작은 불일 때만 써요. 크면 대피가 먼저예요.' }, { id: 'r4', text: '연기는 위험하지 않다', why: '연기는 불보다 먼저 사람을 다치게 해요.' }];
    const R2MORE = { reasons: [{ id: 'r5', text: '신고한 뒤 주변에 알리고 계단으로 내려간다' }], ok: ['r5'] };
    const XDRILL = ['"불이야" 외쳐 알리기', '탈출로를 등지고 소화기 자세 잡기', '불이 커지면 소화기 놓고 대피'];
    const XSAFE = ['모의 소화기(연습용)를 쓴다', '탈출로를 등 뒤에 두었다', '친구들과 충분히 떨어졌다', '선생님 신호에 맞춰 시작한다'];
    const CRIT = ['끌 때의 조건을 썼다', '피할 때의 조건을 썼다', '조건마다 까닭을 썼다'];

    ALL.push(
      // ---- 도입 ----
      M('intro.spread-line', {
        title: '불이 번지는 단계 시간축', method: '불이 번지는 단계 시간축', tool: 'timeline', minutes: 6,
        levels: { easy: '교사가 단계 3장(작은 불·번짐·방 전체)을 함께 시간축에 놓는다.', base: '단계 4장을 시간축에 놓고 소화기로 끌 수 있는 구간이 어디까지인지 말한다.', challenge: '단계마다 \'끈다/피한다\' 판단과 그 까닭을 말한다.' },
        intro: {
          teacher: '"불은 처음부터 방을 가득 채울까요? 소화기를 쓸 수 있는 때는 언제까지일까요?" 시연 단추로 네 단계가 시간축에 차례로 놓이는 모습을 보인 뒤, 소화기로 끌 수 있는 구간 끝에 손을 짚게 한다. "소화기가 있으면 언제든 끌 수 있다"는 말이 나오면 "천장에 닿은 불길 앞에서 소화기 한 대로 버틸 수 있을까요?"라고 되묻는다.',
          student: '불이 번지는 네 단계를 시간 차례로 놓고, 소화기로 끌 수 있는 때가 어디까지인지 짝과 말해요.',
          demo: { tool: 'timeline', options: { mode: 'order', axis: ['불이 날 때', '번진 뒤'], slots: 4, cards: [SPREAD[2], SPREAD[0], SPREAD[3], SPREAD[1]] }, sequence: [{ order: SPREAD.map((c) => c.id) }] },
          art: { draw: 'a paper-cut four-step strip of a small wastebasket fire growing to curtains, then the ceiling, then a whole room filled with smoke', banner: '언제까지 끌 수 있을까?', extra: [{ motif: 'sun', x: 300, y: 96 }] },
        },
      }),
      M('intro.first-feel', {
        title: '끌까 피할까 첫 판단', method: '끌까 피할까 첫 판단 고르기', tool: 'emotion', minutes: 6,
        levels: { easy: '교사가 장면 2개(작은 불·큰 불)를 차례로 읽고 학생이 손을 들어 고른다.', base: '장면 3개(작은 불·연기 많은 불·전기 불)를 차례로 보며 끈다/피한다/모르겠다를 고르고 까닭을 한 낱말로 말한다.', challenge: '세 장면의 판단을 견주어 무엇이 판단을 바꾸었는지 말한다.' },
        intro: {
          teacher: '"지금 이 장면이라면 여러분은 끄겠어요, 피하겠어요?" 첫 장면을 판에 띄우고 손을 들어 고르게 한 뒤, 시연 단추로 \'피한다\'가 골라지는 모습을 보인다. 나머지 장면은 교사가 말로 바꿔 읽어 준다(연기가 많은 불, 전기 기구 불). "끄는 게 더 용감하다"는 말에는 "끄다가 탈출로가 막히면 그 용기는 누구를 지킬까요?"라고 되묻는다.',
          student: '장면을 보고 끌지 피할지 첫 판단을 골라요. 고른 까닭을 한 낱말(불 크기·연기·탈출로)로 짝에게 말해요.',
          demo: { tool: 'emotion', options: { mode: 'branch', situation: '거실 전기난로 옆 이불의 불길이 내 키만큼 올라오고 연기가 천장에 모인다.', ask: '나는 어떻게 할까?', motif: 'house', choices: [
            { id: 'fight', text: '소화기로 끈다', result: '끄는 사이 불이 커튼으로 번진다.' }, { id: 'flee', text: '알리고 피한다', result: '가족과 함께 밖으로 나온다.' }, { id: 'unsure', text: '모르겠다', result: '망설이는 사이 연기가 내려온다.' }] }, sequence: [{ choice: 'flee' }] },
          art: { draw: 'a paper-cut living room with a portable heater and a burning blanket, smoke gathering under the ceiling, a fire extinguisher by the door', banner: '끌까, 피할까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
      }),

      // ---- 활동 ----
      M('activity.fight-or-flee', {
        title: '끌까 피할까 갈림길', method: '끌 것인가 피할 것인가 갈림길', tool: 'dilemma', minutes: 15,
        levels: { easy: '두 상황(과학실·거실)에서 갈림길 1번씩 고르고 결과를 본다.', base: '두 상황에서 갈림길 2번을 끝까지 가 보고 판단 기준 카드를 고른다.', challenge: '두 상황에서 갈림길 3번까지 가 끈 뒤·대피한 뒤의 장면까지 보고 기준 카드를 모두 고른다.' },
        activity: {
          title: '끌까 피할까 갈림길', tool: 'dilemma',
          teacher: '"과학실 휴지통 불과 거실 이불 불, 같은 소화기라도 판단은 왜 달라질까요?" 한 길을 끝까지 가 본 뒤 다른 길과 견주게 한다. "끄다가 안 되면 더 해 보면 된다"는 학생에게 "더 하는 동안 연기와 불길은 기다려 줄까요?"라고 되묻는다. 판단 기준은 불의 크기·연기의 양·등 뒤의 탈출로 세 가지라는 점을 칠판에 적는다.',
          task: '과학실과 거실의 불 앞에서 끌지 피할지 골라 결과를 따라가고, 끝에서 판단 기준을 골라요.',
          levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL({ easy: '과학실 휴지통에 불이 났어요. 한 번 골라 결과를 보세요.', base: '과학실 휴지통에 불이 났어요. 두 번 골라 끝까지 가고 판단 기준을 고르세요.', challenge: '과학실 휴지통에 불이 났어요. 세 번 골라 끈 뒤까지 가고 판단 기준을 모두 고르세요.' },
              '과학실 휴지통 불', D1, [['alarm', 'fight', 'handover']], R1, ['r1', 'r2'], R1MORE),
            DIL({ easy: '거실 이불에 큰 불이 붙었어요. 한 번 골라 결과를 보세요.', base: '거실 이불에 큰 불이 붙었어요. 두 번 골라 끝까지 가고 판단 기준을 고르세요.', challenge: '거실 이불에 큰 불이 붙었어요. 세 번 골라 대피한 뒤까지 가고 판단 기준을 모두 고르세요.' },
              '거실 이불 불', D2, [['flee', 'call2', 'knock']], R2, ['r1', 'r2'], R2MORE),
            { prompt: '짝과 두 상황의 판단이 왜 달랐는지 불 크기·연기·탈출로로 나눠 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '두 상황의 판단을 써요.', columns: ['상황', '판단과 까닭'], cells: [['과학실 휴지통 불', ''], ['거실 이불 불', '']], answer: '작고 연기 적고 탈출로 있음 → 알리고 끔 / 크고 연기 많음 → 알리고 피함' }] },
      }),
      M('activity.use-order', {
        title: '소화기 사용 순서 놓기', method: '소화기 사용 순서 놓기', tool: 'kitchen', minutes: 15,
        levels: { easy: '순서 카드 3장(핀 뽑기·노즐 향하기·손잡이 쥐기)을 차례로 놓고, 놓으면 바로 맞는지 알려 준다.', base: '순서 카드 4장을 놓고, 틀린 방법 카드가 섞인 판에서 바른 차례만 놓는다.', challenge: '첫 문항에서 \'탈출로를 등 뒤에 두고 서기\' 카드까지 넣어 5장의 차례를 놓는다.' },
        activity: {
          title: '소화기 사용 순서 놓기', tool: 'kitchen',
          teacher: '"안전핀을 뽑지 않고 손잡이부터 누르면 어떻게 될까요?" 카드를 놓을 때마다 교실 소화기 실물을 들어 그 부분을 짚어 보인다. "불길 위쪽 연기에 뿌리면 된다"는 학생에게 "타고 있는 것은 불길 위일까요, 밑부분일까요?"라고 되묻는다. 소화기를 들기 전, 서는 자리(탈출로를 등 뒤에)가 순서의 시작이라는 점을 짚는다.',
          task: '소화기 쓰는 순서 카드를 바른 차례로 놓고, 틀린 방법 카드는 차례에 넣지 않아요.',
          levels: { easy: { live: true, instant: true, autoMotif: false }, base: { autoMotif: false }, challenge: { autoMotif: false, shuffle: true } },
          items: [
            IT(OB('소화기 쓰는 순서 카드를 바른 차례대로 놓으세요.', USE),
              OB('소화기 쓰는 순서 카드 세 장을 바른 차례대로 놓으세요.', USE.slice(0, 3)),
              OB('서는 자리부터 시작해 소화기 쓰는 순서 카드 다섯 장을 차례대로 놓으세요.', [ESC, ...USE])),
            IT(OB('틀린 방법 카드는 빼고, 소화기 쓰는 순서만 차례대로 놓으세요.', USE, {}, [{ id: 't1', text: '불길 위 연기에 뿌리기' }, { id: 't2', text: '불 속으로 바짝 다가가기' }]),
              OB('틀린 방법 카드 한 장은 빼고, 순서 카드 세 장만 차례대로 놓으세요.', USE.slice(0, 3), {}, [{ id: 't1', text: '불길 위 연기에 뿌리기' }])),
            IT(MB('순서마다 그렇게 하는 까닭을 이어 보세요.', [['안전핀 뽑기', '핀이 꽂혀 있으면 손잡이가 눌리지 않는다'], ['노즐을 불 밑부분으로', '타고 있는 곳에 약제가 닿게 한다'], ['탈출로를 등 뒤에', '불이 커지면 바로 빠져나간다']], ['멋있게 보이려고']),
              MB('두 순서의 까닭을 이어 보세요.', [['안전핀 뽑기', '핀이 꽂혀 있으면 손잡이가 눌리지 않는다'], ['탈출로를 등 뒤에', '불이 커지면 바로 빠져나간다']], []),
              null, { conclude: '소화기는 탈출로를 등 뒤에 두고 서서, 안전핀을 뽑고 노즐을 불 밑부분에 향해 손잡이를 쥐고 쓸듯 뿌려요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '소화기 쓰는 차례를 써요.', columns: ['차례', '할 일'], cells: [['1', ''], ['2', ''], ['3', ''], ['4', '']], answer: '안전핀 뽑기, 노즐을 불 쪽으로, 손잡이 쥐기, 쓸듯 뿌리기' }],
          easy: [{ type: 'choice', prompt: '소화기를 쓸 때 가장 먼저 할 일에 ○ 해요.', options: ['안전핀 뽑기', '손잡이 누르기'], answer: '안전핀 뽑기' }] },
        notes: '교실·복도 소화기 실물로 부분 이름을 보인다. 실제 분사는 하지 않는다.',
      }),
      M('activity.gear-map', {
        title: '소화기·소화전·비상구 지도', method: '소화기·소화전·대피로 위치 지도', tool: 'map', minutes: 15,
        levels: { easy: '핀을 놓으면 칸 이름이 바로 읽히고, 우리 반에서 가까운 소화기만 찾는다.', base: '가까운 소화기와 비상구를 핀으로 찾는다.', challenge: '소화기·비상구·소화전 세 가지를 찾고, 마지막 문항에서 가까운 비상구가 막혔을 때의 다른 비상구를 정한다.' },
        activity: {
          title: '소화기·소화전·비상구 지도', tool: 'map',
          teacher: '"우리 반에서 소화기까지 몇 걸음일까요? 매일 지나다니면서 본 적 있나요?" 칸 지도에서 우리 반을 먼저 찾게 한 뒤 하나씩 핀을 꽂게 한다. "불이 나면 그때 찾으면 된다"는 학생에게 "연기로 앞이 안 보일 때도 찾을 수 있을까요?"라고 되묻는다. 지도 활동이 끝나면 실제 우리 층 소화기 자리를 쉬는 시간에 확인해 오게 한다.',
          task: '가상 학교 3층 칸 지도에서 우리 반과 가장 가까운 소화기·비상구·소화전을 핀으로 찾아요.',
          levels: { easy: { readout: true }, base: {}, challenge: {} },
          items: [
            PIN('우리 반에서 가장 가까운 소화기 자리에 핀을 꽂으세요.', GEAR, { region: '복도 소화기 함' }),
            PIN('과학실에서 불이 났을 때 과학실 안에서 쓸 소화기에 핀을 꽂으세요.', GEAR, { region: '과학실 소화기' }),
            PIN('우리 반에서 가장 가까운 비상구에 핀을 꽂으세요.', GEAR, { region: '서쪽 비상구' }),
            IT(PIN('큰 불을 끌 때 소방대가 쓰는 소화전 자리에 핀을 꽂으세요.', GEAR, { region: '옥내 소화전' }),
              null,
              { prompt: '서쪽 비상구 앞에서 불이 났어요. 우리 반이 대신 쓸 비상구에 핀을 꽂으세요.', target: { region: '동쪽 비상구' } },
              { conclude: '소화기·소화전·비상구 자리는 불이 나기 전에 알아 두어야 연기 속에서도 찾을 수 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '실제 우리 층에서 찾은 자리를 써요.', columns: ['시설', '자리'], cells: [['소화기', ''], ['비상구', ''], ['소화전', '']] }] },
        notes: '칸 지도는 가상 학교다. 활동지에는 실제 우리 층 시설 자리를 직접 확인해 쓰게 한다.',
      }),
      M('activity.drill-run', {
        title: '초기 대응·대피 훈련', method: '초기 대응·대피 훈련', tool: 'timer', minutes: 15,
        levels: { easy: '순서 카드 3장(알리기·소화기 자세·대피 전환)을 차례로 놓는다(안전 점검 칸은 없다).', base: '순서 카드 3장을 놓고 안전 점검 4개를 표시한 뒤 모의 소화기로 훈련하고 \'해 보았어요\'를 누른다.', challenge: '알리기·소화·안내 역할을 바꿔 두 번 훈련하고, 마지막 문항에서 역할을 바꿔 해 본 횟수를 적는다.' },
        activity: {
          title: '초기 대응·대피 훈련', tool: 'timer',
          teacher: '"소화기를 든 친구가 끄는 동안, 나머지 친구들은 무엇을 해야 할까요?" 순서 카드를 놓은 뒤 안전 점검을 소리 내어 읽게 한다. "소화기를 든 사람이 끝까지 꺼야 한다"는 학생에게 "불이 커지면 소화기를 내려놓는 것도 순서에 들어 있을까요?"라고 되묻는다. 모의 소화기로 자세만 연습하고 실제 분사는 하지 않는다.',
          task: '초기 대응 순서 카드를 차례로 놓고 안전 점검을 한 뒤, 모의 소화기로 훈련하고 \'해 보았어요\'를 눌러요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT({ prompt: '초기 대응 순서 카드를 차례대로 놓고, 훈련 전 안전 점검을 모두 표시하세요.', toolOptions: { title: '초기 대응 순서', cards: [XDRILL[1], XDRILL[2], XDRILL[0]], safety: XSAFE }, target: { order: XDRILL, safety: true } },
              { prompt: '초기 대응 순서 카드 세 장을 차례대로 놓으세요.', toolOptions: { safety: [] }, target: { order: XDRILL } }),
            { prompt: '모둠에서 알리기·소화·안내 역할을 정해 모의 소화기로 훈련하고 돌아와 표시하세요.', free: true, toolOptions: { doneLabel: '초기 대응 훈련을 해 보았어요' } },
            IT({ prompt: '소화기 담당이 "불이 커졌다"고 느꼈을 때 할 일을 차례대로 놓으세요.', toolOptions: { title: '대피로 바꿀 때', cards: ['계단으로 대피하기', '소화기 내려놓기', '"피해!" 외치기'] }, target: { order: ['"피해!" 외치기', '소화기 내려놓기', '계단으로 대피하기'] } },
              null,
              { prompt: '역할을 바꿔 다시 훈련하고, 역할을 바꿔 해 본 횟수를 적으세요.', toolOptions: { title: '역할 바꾸기 기록', cards: [], fields: [{ label: '역할 바꿔 해 본 횟수', unit: '번', step: 1 }] }, target: { records: true } },
              { conclude: '초기 대응은 알리기·끄기·안내를 나눠 맡고, 불이 커지면 소화기를 내려놓고 대피로 바꾸는 것까지 연습해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '소화기로 끄다가 대피로 바꿔야 할 때는 언제인지 한 문장으로 써요.' }] },
        notes: '훈련은 모의(연습용) 소화기로 자세만 익힌다. 실제 분사 체험은 소방서 체험 시설을 이용한다.',
      }),

      // ---- 정리 ----
      M('wrap.criteria-write', {
        title: '끌까 피할까 내 판단 기준', method: '내 판단 기준 세 줄', tool: 'rubric-writing', minutes: 9,
        levels: { easy: '문장 틀을 따라 두 줄로 쓴다.', base: '세 줄로 쓰고 기준 3개(끌 조건·피할 조건·까닭)를 점검한다.', challenge: '세 줄에 내 기준이 맞지 않는 반례 하나까지 넣고 기준 4개를 점검한다.' },
        wrap: {
          teacher: '"\'작으면 끈다\'만으로 충분할까요? 작지만 연기가 많다면요?" 오늘 갈림길에서 고른 판단 기준을 떠올리며 세 줄로 쓰게 한다. "무조건 피하는 게 정답"이라는 학생에게 탈출로가 있고 아주 작은 불이면 알린 뒤 끌 수도 있다는 점을 견주어 말해 준다. 쓴 기준은 짝과 바꿔 읽고 빠진 조건을 찾아 주게 한다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'rubric-writing', options: { topic: '"이럴 때는 끄고, 이럴 때는 피한다" 내 판단 기준을 세 문장으로 쓰세요.', minChars: 30, maxChars: 220, minSentences: 3, maxSentences: 4, title: '내 판단 기준' },
              prompt: '소화기로 끌지 피할지 내 판단 기준을 세 문장으로 쓰고 기준표에 표시해요.', target: { selfCheck: CRIT }, difficulty: 0.3 },
            { prompt: '틀을 따라 판단 기준을 두 문장으로 쓰고 기준표에 표시해요.', toolOptions: { minSentences: 2, starter: '불이 ___ 때는 알리고 끈다. 불이 ___ 때는 바로 피한다.' } },
            { prompt: '내 기준이 맞지 않는 반례까지 넣어 판단 기준을 쓰고 기준표에 표시해요.', toolOptions: { maxSentences: 5 }, target: { selfCheck: [...CRIT, '내 기준이 맞지 않는 반례를 썼다'] } }),
            { type: 'choice', prompt: '소화기로 꺼도 되는 경우로 가장 알맞은 것은?', options: ['불길이 천장에 닿았다', '연기가 방에 가득하다', '휴지통 속 작은 불이고 탈출로가 등 뒤에 있다'], answer: 2, difficulty: 0.2, explain: '작은 불이고 연기가 적으며 탈출로가 있을 때만 알린 뒤 꺼요.' },
            { type: 'short', prompt: '우리 반 소화기 자리를 한 문장으로 써요.' },
          ],
        },
        worksheet: {
          title: '끌까, 피할까',
          items: [
            { type: 'table', prompt: '내 판단 기준을 써요.', columns: ['판단', '조건'], cells: [['끈다', ''], ['피한다', '']], answer: '작은 불·연기 적음·탈출로 있음 / 불이 큼·연기 많음·탈출로 막힘' },
            { type: 'short', prompt: '내 판단 기준을 세 문장으로 써요.' },
          ],
          easy: { note: '"불이 ___ 때는 끈다. 불이 ___ 때는 피한다." 틀을 써도 돼요.', items: [{ type: 'blank', prompt: '틀을 채워 써요.', text: '불이 ___ 때는 알리고 끈다. 불이 ___ 때는 바로 피한다.', answer: '(예) 작고 연기가 적을, 크거나 연기가 많을' }] },
        },
      }),
      M('wrap.case-sort', {
        title: '끈다·피한다 상황 바구니', method: '끈다·피한다 상황 분류', tool: 'sortboard', minutes: 9,
        levels: { easy: '상황 카드 4장을 끈다·피한다 바구니에 나누고, 틀리면 까닭을 듣고 되돌아온다.', base: '상황 카드 6장을 나눈다.', challenge: '경계에 있는 상황 카드 2장이 더 섞인 판에서 나누고, 경계 카드 하나의 까닭을 쓴다.' },
        wrap: {
          teacher: '"오늘 훈련에서 정한 기준(불 크기·연기·탈출로)으로 이 상황들을 나눠 볼까요?" 바구니에 다 나누면 가장 헷갈린 카드를 골라 기준 세 가지 가운데 무엇이 판단을 갈랐는지 말하게 한다. "끄는 쪽이 용감하다"는 말에는 피하는 판단도 모두를 지키는 용기라고 짚는다.',
          exitTicket: [
            EXSB({ base: '상황 카드를 끈다·피한다 바구니에 나눠요.', easy: '상황 카드 네 장을 끈다·피한다 바구니에 나눠요.', challenge: '경계에 있는 상황까지 끈다·피한다 바구니에 나눠요.' },
              ['알리고 끈다', '알리고 피한다'], [
                { id: 'f1', text: '휴지통 속 작은 불, 문이 등 뒤에 있음', to: '알리고 끈다' }, { id: 'r1', text: '불길이 천장에 닿음', to: '알리고 피한다' },
                { id: 'f2', text: '프라이팬 기름에 막 붙은 작은 불, 출구가 가까움', to: '알리고 끈다' }, { id: 'r2', text: '검은 연기가 방에 가득함', to: '알리고 피한다' },
                { id: 'f3', text: '쓰레기통 종이에 붙은 불, 연기 적음', to: '알리고 끈다' }, { id: 'r3', text: '불이 출구 쪽에서 타오름', to: '알리고 피한다' }], 4,
              [{ id: 'r4', text: '작은 불이지만 소화기가 어디 있는지 모름', to: '알리고 피한다' }, { id: 'r5', text: '끄다가 불이 커지기 시작함', to: '알리고 피한다' }]),
            { type: 'choice', prompt: '불 크기·연기·탈출로 가운데 하나라도 나쁘면?', options: ['조금 더 끄며 지켜본다', '알리고 바로 피한다', '물을 더 가져온다'], answer: 1, difficulty: 0.2, explain: '하나라도 나쁘면 대피가 먼저예요.' },
            { type: 'short', prompt: '가장 헷갈린 상황 하나와 그렇게 나눈 까닭을 써요.' },
          ],
        },
        worksheet: {
          title: '끈다·피한다',
          items: [
            { type: 'table', prompt: '판단 기준 세 가지를 써요.', columns: ['기준', '끌 때', '피할 때'], cells: [['불 크기', '', ''], ['연기', '', ''], ['탈출로', '', '']], answer: '작다/크다, 적다/많다, 등 뒤에 있다/막혔다' },
            { type: 'short', prompt: '오늘 훈련에서 내가 맡은 역할과 잘한 점을 써요.' },
          ],
        },
        notes: '기름 불에 물을 붓지 않는 것 등 불 종류별 소화 방법은 교사가 소방청 안내로 확인해 덧붙인다.',
      }),
    );
  }

  // ==== 8학년 · 붕괴·폭발 징후와 대피 (saf-disaster.m.collapse-explosion) ====
  {
    const M = MK('collapse-explosion', [8]);
    const SIGN = [{ id: 'k1', text: '기둥의 금이 며칠 새 길어졌다', motif: 'house' }, { id: 'k2', text: '천장에서 "뚝뚝" 소리가 난다', motif: 'cloud' },
      { id: 'k3', text: '늘 닫히던 문이 갑자기 안 닫힌다', motif: 'leaf' }, { id: 'k4', text: '복도 바닥이 한쪽으로 기운 느낌', motif: 'star' }];
    // 가상 상가 건물 1층 칸 지도 — 위험 구역은 이름에 (위험)으로 밝힌다
    const MALL = { grid: [6, 4], title: '가상의 상가 건물 1층(도상 훈련)', regions: [
      { name: '우리 모둠 자리', cells: [[0, 0]] }, { name: '복도', cells: [[1, 0], [2, 0], [3, 0], [4, 0]] }, { name: '금 간 기둥 구역(위험)', cells: [[5, 0], [5, 1]] },
      { name: '서쪽 출입구', cells: [[0, 1]] }, { name: '가게', cells: [[1, 1], [2, 1]] }, { name: '천장 처진 구역(위험)', cells: [[3, 1], [4, 1]] },
      { name: '동쪽 출입구', cells: [[5, 2]] }, { name: '주차장', cells: [[0, 2], [1, 2], [2, 2], [3, 2], [4, 2]] },
      { name: '건너편 공터 집결지', cells: [[0, 3], [1, 3], [2, 3]] }, { name: '건물 옆 좁은 골목', cells: [[3, 3], [4, 3], [5, 3]] },
    ] };
    const MALL2 = Object.assign({}, MALL, { title: '가상의 상가 건물 1층(위험 구역이 늘어남)', regions: MALL.regions.map((r) => (r.name === '서쪽 출입구' ? { name: '막힌 서쪽 출입구(위험)', cells: r.cells } : r.name === '동쪽 출입구' ? { name: '동쪽 출입구', cells: r.cells } : r)) });
    const D1 = { text: '학원을 마치고 집에 왔는데 현관문을 열자 가스 냄새가 진하게 난다. 집 안은 어둡다.', ask: '가장 먼저 어떻게 할까?', motif: 'house', choices: [
      { id: 'light', text: '어두우니 전등 스위치부터 켠다', result: '스위치를 켜는 순간 작은 불꽃이 튈 수 있다.', impact: [{ who: '나와 이웃', text: '폭발 위험', tone: -1 }], why: '가스 냄새가 나면 전등·전기 스위치를 켜거나 끄지 않아요. 작은 불꽃도 위험해요.', end: '스위치를 켜 위험했어요.',
        next: { text: '다행히 아무 일도 없었다. 냄새는 그대로다.', choices: [
          { id: 'cook', text: '가스레인지를 켜서 새는지 확인한다', result: '불꽃이 가스에 닿을 수 있다.', impact: [{ who: '나', text: '폭발 위험', tone: -1 }] },
          { id: 'window', text: '창문을 열고 밖으로 나간다', result: '바깥 공기가 들어오고 밖으로 나온다.', impact: [{ who: '나', text: '위험을 피한다', tone: 1 }] }] } },
      { id: 'open', text: '불·스위치는 건드리지 않고 창문과 문을 열어 환기한다', result: '바람이 들어오며 냄새가 조금 옅어진다.', impact: [{ who: '나', text: '위험이 줄어든다', tone: 1 }], end: '스위치를 건드리지 않고 환기했어요.',
        next: { text: '환기하는 중이다. 신고는 어디서 할까?', choices: [
          { id: 'inside', text: '집 안에서 휴대전화로 바로 신고한다', result: '가스가 남은 곳에서 전화를 오래 쓴다.', impact: [{ who: '나', text: '위험한 곳에 머문다', tone: -1 }], why: '환기했으면 밖으로 나가 안전한 곳에서 신고해요.' },
          { id: 'outside', text: '밖으로 나가 떨어진 곳에서 보호자와 119에 알린다', result: '소방대와 가스 안전 담당이 출동한다.', impact: [{ who: '이웃', text: '함께 보호받는다', tone: 1 }], end: '밖에서 신고했어요.',
            next: { text: '신고를 마쳤다. 옆집 사람들은 아무것도 모르고 있다.', choices: [
              { id: 'knock', text: '옆집에 알리고 함께 건물 밖에서 기다린다', result: '이웃도 불을 켜지 않고 밖으로 나온다.', impact: [{ who: '이웃', text: '위험을 피한다', tone: 1 }] },
              { id: 'game', text: '편의점에서 기다리며 게임을 한다', result: '이웃은 냄새를 모른 채 가스레인지를 켠다.', impact: [{ who: '이웃', text: '폭발 위험', tone: -1 }], why: '가스 냄새는 이웃에게도 알려야 해요.' }] } }] } },
      { id: 'ignore', text: '냄새가 곧 빠지겠지 하고 방에 들어간다', result: '냄새가 점점 짙어진다.', impact: [{ who: '나', text: '가스를 마신다', tone: -1 }], why: '가스 냄새는 그냥 두지 않고 환기하고 알려요.', ending: '냄새를 무시해 위험했어요.' }] };
    const R1 = [{ id: 'r1', text: '가스 냄새가 나면 불꽃이 생길 일을 하지 않는다' }, { id: 'r2', text: '환기한 뒤 밖으로 나가 안전한 곳에서 신고한다' },
      { id: 'r3', text: '불을 켜 봐야 새는 곳을 안다', why: '불을 켜거나 스위치를 쓰는 순간 폭발할 수 있어요.' }, { id: 'r4', text: '냄새가 옅으면 신고하지 않아도 된다', why: '옅어도 새는 것이니 알려요.' }];
    const R1MORE = { reasons: [{ id: 'r5', text: '같은 건물 이웃에게도 알린다' }], ok: ['r5'] };
    const D2 = { text: '학교 체육관 옆 창고 벽에 금이 가 있다. 오늘 보니 금이 지난주보다 길어지고 벽 아래에 부스러기가 떨어져 있다.', ask: '어떻게 할까?', motif: 'house', choices: [
      { id: 'pass', text: '원래 있던 금이니 그냥 지나간다', result: '친구들이 계속 그 벽에 기대 쉰다.', impact: [{ who: '친구들', text: '위험한 곳에 머문다', tone: -1 }], why: '금이 길어지거나 부스러기가 떨어지면 징후예요. 무시하지 않아요.', ending: '알리지 않아 친구들이 위험한 곳에 머물렀어요.' },
      { id: 'tell2', text: '사진은 찍지 않고 선생님께 위치와 변화를 알린다', result: '선생님이 창고 주변을 막고 점검을 요청한다.', impact: [{ who: '친구들', text: '위험한 곳에서 떨어진다', tone: 1 }], end: '알려서 주변을 막았어요.',
        next: { text: '점검을 기다리는 동안 친구가 "막아 놓은 줄 넘어가 공 가져오자"고 한다.', choices: [
          { id: 'cross', text: '잠깐이니 줄을 넘어간다', result: '벽에서 작은 조각이 떨어진다.', impact: [{ who: '나와 친구', text: '맞을 수 있다', tone: -1 }], why: '막아 둔 곳은 점검이 끝날 때까지 들어가지 않아요.' },
          { id: 'waitc', text: '선생님께 공을 꺼내 달라고 부탁한다', result: '선생님이 안전을 확인하고 대신 꺼내 준다.', impact: [{ who: '친구', text: '다치지 않는다', tone: 1 }] }] } },
      { id: 'push', text: '벽을 밀어 얼마나 튼튼한지 확인한다', result: '부스러기가 더 떨어진다.', impact: [{ who: '나', text: '다칠 수 있다', tone: -1 }], why: '징후가 있는 벽은 건드리지 말고 떨어져 알려요.', ending: '벽을 밀어 위험했어요.' }] };
    const R2 = [{ id: 'r1', text: '금이 길어지거나 부스러기가 떨어지면 붕괴 징후다' }, { id: 'r2', text: '징후를 보면 건드리지 말고 떨어져 어른에게 알린다' },
      { id: 'r3', text: '작은 금은 무시해도 된다', why: '금이 자라거나 소리가 나면 작은 금도 징후예요.' }, { id: 'r4', text: '붕괴는 갑자기 일어나 징후가 없다', why: '금·소리·문틀 변형 같은 징후가 먼저 나타나기도 해요.' }];
    const REPORT = ['고른 대피 경로를 썼다', '그 경로를 고른 까닭(위험 구역)을 썼다', '신고할 내용(어디·무엇)을 썼다'];
    const SIGNCHK = [{ id: 'c1', text: '벽·기둥 금이 길어지는지', ok: true }, { id: 'c2', text: '문·창문이 갑자기 안 닫히는지', ok: true }, { id: 'c3', text: '천장·벽에서 이상한 소리', ok: true },
      { id: 'c4', text: '가스 냄새가 나는지', ok: true }, { id: 'c5', text: '바닥이 기운 느낌이 드는지', ok: true }, { id: 'c6', text: '벽 색깔이 마음에 드는지' }, { id: 'c7', text: '복도 게시판이 바뀌었는지' }];

    ALL.push(
      // ---- 도입 ----
      M('intro.sign-scene', {
        title: '건물 징후 장면 살피기', method: '건물 징후 장면 살피기', tool: 'story', minutes: 6,
        levels: { easy: '교사가 장면 2장(금·소리)을 함께 읽고 이상한 점을 짚는다.', base: '장면 4장을 넘겨 보며 이상한 장면을 모두 골라 담는다.', challenge: '고른 장면을 위험한 차례로 말하고 그 까닭을 덧붙인다.' },
        intro: {
          teacher: '"건물이 무너지기 전에 건물은 우리에게 신호를 보낼까요?" 가상 장면 카드를 넘겨 보이고 시연 단추로 이상한 장면이 바구니에 담기는 모습을 보인다. "붕괴는 갑자기 일어나 알 수 없다"는 말이 나오면 "며칠 새 길어진 금이나 갑자기 안 닫히는 문은 무엇을 알려 줄까요?"라고 되묻는다.',
          student: '장면 카드를 보고 건물이 보내는 이상한 신호를 골라요. 무엇이 이상한지 짝에게 한 줄로 말해요.',
          demo: { tool: 'story', options: { mode: 'pick', basket: '이상한 신호', title: '건물이 보내는 신호', cards: [...SIGN, { id: 'ok1', text: '새로 칠한 복도 벽', motif: 'sun' }], shuffle: false }, sequence: [{ pick: ['k1', 'k2', 'k3', 'k4'] }] },
          art: { draw: 'a paper-cut building corridor with a growing crack on a pillar, a door that will not close and dust falling from the ceiling', banner: '건물이 보내는 신호', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '실제 붕괴·폭발 사고 이름과 피해자 이야기는 꺼내지 않고 가상 장면으로만 다룬다.',
      }),
      M('intro.word-map', {
        title: '붕괴·폭발 떠올리기', method: '붕괴·폭발 떠올리기', tool: 'mindmap', minutes: 6,
        levels: { easy: '교사가 가지 2개(징후·행동)에 카드를 함께 붙인다.', base: '가지 3개(원인·징후·행동)에 아는 것을 붙인다.', challenge: '가지를 채운 뒤 아직 모르는 것을 질문 하나로 말한다.' },
        intro: {
          teacher: '"붕괴와 폭발에 대해 이미 아는 것을 원인·징후·행동으로 나눠 볼까요?" 시연 단추로 카드가 가지에 붙는 모습을 보인 뒤, 학생들이 아는 것을 말로 더하게 한다. "가스 냄새가 나면 불을 켜고 확인한다"는 말이 나오면 "불꽃이 가스를 만나면 어떻게 될까요?"라고 되묻고, 오늘 도상 훈련에서 확인하자고 한다.',
          student: '\'붕괴·폭발\' 가지에 원인·징후·행동으로 아는 것을 붙이고, 아직 모르는 것 하나를 질문으로 말해요.',
          demo: { tool: 'mindmap', options: { mode: 'sort', topic: '붕괴·폭발', slots: ['원인', '징후', '행동'], cards: [
            { id: 'a1', text: '새는 가스' }, { id: 'b1', text: '길어지는 벽의 금' }, { id: 'c1', text: '불 켜지 않고 환기' }, { id: 'c2', text: '떨어져서 신고' }] }, sequence: [{ sort: { 원인: ['a1'], 징후: ['b1'], 행동: ['c1', 'c2'] } }] },
          art: { draw: 'a paper-cut mind map with three branches showing a gas valve, a cracked wall and a person walking out to call for help', banner: '붕괴·폭발, 무엇을 알까?', extra: [{ motif: 'leaf', x: 300, y: 96 }] },
        },
      }),

      // ---- 활동 ----
      M('activity.gas-choice', {
        title: '가스 냄새·벽 금 갈림길', method: '가스 냄새 갈림길', tool: 'dilemma', minutes: 15,
        levels: { easy: '두 상황(가스 냄새·벽의 금)에서 갈림길 1번씩 고르고 결과를 본다.', base: '두 상황에서 갈림길 2번을 끝까지 가 보고 근거 카드를 고른다.', challenge: '가스 냄새 상황은 갈림길 3번(이웃에게 알리기)까지 가고 근거 카드를 모두 고른다.' },
        activity: {
          title: '가스 냄새·벽 금 갈림길', tool: 'dilemma',
          teacher: '"어두운 집에 가스 냄새가 난다면, 손이 먼저 가는 곳은 어디인가요? 그게 왜 위험할까요?" 한 길을 끝까지 가 본 뒤 다른 길과 견주게 한다. "냄새 확인하려면 불을 켜 봐야 한다"는 학생에게 "스위치를 켤 때 생기는 작은 불꽃은 가스를 만나면 어떻게 될까요?"라고 되묻는다. 벽의 금 상황에서는 사진을 찍어 올리기보다 어른에게 위치와 변화를 알리는 것이 먼저라고 짚는다.',
          task: '가스 냄새와 길어진 벽의 금 상황에서 길을 골라 결과를 따라가고, 끝에서 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL({ easy: '집에 가스 냄새가 나요. 한 번 골라 결과를 보세요.', base: '집에 가스 냄새가 나요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '집에 가스 냄새가 나요. 세 번 골라 이웃까지 생각하고 근거를 모두 고르세요.' },
              '어두운 집 가스 냄새', D1, [['open', 'outside', 'knock']], R1, ['r1', 'r2'], R1MORE),
            DIL({ easy: '창고 벽 금이 길어졌어요. 한 번 골라 결과를 보세요.', base: '창고 벽 금이 길어졌어요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '창고 벽 금이 길어졌어요. 두 번 골라 끝까지 가고 근거를 고르세요.' },
              '길어진 벽의 금', D2, [['tell2', 'waitc']], R2, ['r1', 'r2']),
            { prompt: '짝과 가스 냄새가 날 때 "하지 않을 일" 세 가지를 말로 정해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '가스 냄새가 날 때 하지 않을 일은?', options: ['창문 열기', '전등 스위치 켜기', '밖에 나가 알리기'], answer: '전등 스위치 켜기' }] },
      }),
      M('activity.tabletop-map', {
        title: '붕괴 도상 훈련 대피 경로', method: '붕괴 도상 훈련: 칸 지도 대피 경로', tool: 'map', minutes: 15,
        levels: { easy: '핀을 놓으면 칸 이름이 바로 읽히고, 출입구·집결지 두 지점만 꽂는다.', base: '위험 구역을 피한 출입구·집결지·신고할 자리를 차례로 꽂는다.', challenge: '마지막 문항에서 서쪽 출입구까지 막힌(위험 구역이 늘어난) 지도로 출입구를 다시 정한다.' },
        activity: {
          title: '붕괴 도상 훈련 대피 경로', tool: 'map',
          teacher: '"도상 훈련은 지도 위에서 미리 몸을 움직여 보는 훈련이에요. 위험 구역을 지나지 않고 나가는 길은 어디일까요?" 지도에서 (위험) 칸을 먼저 손으로 짚게 한 뒤 핀을 꽂게 한다. "건물 옆 골목이 가까우니 거기서 기다리면 된다"는 학생에게 "건물이 무너지면 바로 옆 골목은 안전할까요?"라고 되묻는다. 신고는 건물에서 떨어진 곳에서 한다는 점을 짚는다.',
          task: '가상 상가 칸 지도에서 (위험) 구역을 피해 나갈 출입구·집결지·신고할 자리를 핀으로 정해요.',
          levels: { easy: { readout: true }, base: {}, challenge: {} },
          items: [
            PIN('우리 모둠 자리에서 위험 구역을 지나지 않고 나갈 출입구에 핀을 꽂으세요.', MALL, { region: '서쪽 출입구' }),
            PIN('건물에서 충분히 떨어진 집결지에 핀을 꽂으세요.', MALL, { region: '건너편 공터 집결지' }),
            PIN('119에 신고할 자리로 알맞은 곳(건물에서 떨어진 곳)에 핀을 꽂으세요.', MALL, { region: '건너편 공터 집결지' }, { toolOptions: Object.assign({}, MALL, { ask: { q: '신고할 때 꼭 말할 것은?', choices: ['건물 이름·위치와 본 징후', '내 기분', '건물 주인 이름'] } }), target: { region: '건너편 공터 집결지', pick: 0 } }),
            IT(PIN('건물 옆 좁은 골목과 건너편 공터 가운데, 기다리기 알맞은 곳에 핀을 꽂으세요.', MALL, { region: '건너편 공터 집결지' }, { toolOptions: Object.assign({}, MALL, { ask: { q: '골목이 알맞지 않은 까닭은?', choices: ['건물에 너무 가까워 무너지면 위험하다', '골목은 어둡다', '골목은 멀다'] } }), target: { region: '건너편 공터 집결지', pick: 0 } }),
              null,
              { prompt: '서쪽 출입구도 막혔어요(위험). 남은 출입구에 핀을 꽂으세요.', toolOptions: MALL2, target: { region: '동쪽 출입구' } },
              { conclude: '붕괴 징후가 있으면 위험 구역을 피해 나가고, 건물에서 충분히 떨어진 곳에 모여 신고해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '도상 훈련에서 정한 것을 써요.', columns: ['칸', '내가 정한 곳'], cells: [['나갈 출입구', ''], ['집결지', ''], ['신고할 자리', '']] }] },
        notes: '도상 훈련(지도 위 훈련)이다. 실제 우리 학교 건물로 바꿔 하려면 학교 피난 안내도를 칸 지도로 옮긴다.',
      }),
      M('activity.tabletop-report', {
        title: '도상 훈련 보고서 쓰기', method: '도상 훈련 보고서', tool: 'rubric-writing', minutes: 15,
        levels: { easy: '문장 틀을 따라 경로·까닭 두 항목을 쓴다.', base: '경로·까닭·신고 내용 세 항목을 쓰고 기준표로 점검한다.', challenge: '마지막 문항에서 남은 위험(아직 해결 못 한 점)까지 써서 기준 하나를 더 점검한다.' },
        activity: {
          title: '도상 훈련 보고서 쓰기', tool: 'rubric-writing',
          teacher: '"보고서를 읽은 다른 모둠이 우리 경로를 그대로 따라 할 수 있을까요?" 경로와 까닭, 신고 내용을 나누어 쓰게 한다. "그냥 \'서쪽으로 나갔다\'면 된다"는 학생에게 "왜 동쪽이 아니었는지 적지 않으면 읽는 사람이 알 수 있을까요?"라고 되묻는다. 보고서는 사실(본 것)과 판단(고른 까닭)을 나누어 쓰게 한다.',
          task: '도상 훈련에서 정한 대피 경로와 그 까닭, 신고 내용을 짧은 보고서로 쓰고 기준표로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RW('도상 훈련에서 고른 대피 경로와 그 까닭을 두 문장으로 쓰세요.',
              { topic: '가상 상가 도상 훈련에서 고른 대피 경로와 그 까닭을 두 문장으로 쓰세요.', minChars: 25, maxChars: 160, minSentences: 2, maxSentences: 3, title: '대피 경로' },
              ['지나간 곳을 차례로 썼다', '피한 위험 구역을 썼다', '고른 까닭을 썼다'],
              { prompt: '틀을 따라 대피 경로와 까닭을 쓰세요.', starter: '우리는 ___로 나가 ___에 모였다. ___를 피했기 때문이다.' }),
            RW('집결지에서 119에 할 신고 내용을 두 문장으로 쓰세요.',
              { topic: '도상 훈련 집결지에서 119에 할 신고 내용(어디·본 징후·사람)을 두 문장으로 쓰세요.', minChars: 25, maxChars: 160, minSentences: 2, maxSentences: 3, title: '신고 내용' },
              ['건물 이름·위치를 썼다', '본 징후를 썼다', '안에 남은 사람이 있는지 썼다'],
              { prompt: '틀을 따라 신고 내용을 쓰세요.', starter: '여기는 ___입니다. ___ 징후를 보았습니다. 안에 ___.' }),
            RW('경로·까닭·신고를 묶어 도상 훈련 보고서를 세 문장으로 쓰세요.',
              { topic: '도상 훈련 보고서: 경로·까닭·신고 내용을 세 문장으로 묶어 쓰세요.', minChars: 40, maxChars: 240, minSentences: 3, maxSentences: 4, title: '도상 훈련 보고서' },
              REPORT,
              { prompt: '틀을 따라 보고서를 세 문장으로 쓰세요.', starter: '경로: ___. 까닭: ___. 신고: ___.' },
              { prompt: '보고서에 남은 위험(아직 해결 못 한 점)까지 더해 쓰고 기준표를 모두 점검하세요.', toolOptions: { maxSentences: 5 }, add: ['남은 위험을 썼다'] },
              { conclude: '도상 훈련 보고서는 경로·까닭·신고를 나누어 써야 다른 사람도 같은 판단을 따라 할 수 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '우리 모둠 도상 훈련 보고서를 세 문장으로 써요(경로·까닭·신고).' }] },
      }),

      // ---- 정리 ----
      M('wrap.sign-check', {
        title: '건물 징후 점검표', method: '건물 징후 점검표', tool: 'kitchen', minutes: 9,
        levels: { easy: '징후 항목 3개(함정 없음)를 모두 표시한다.', base: '함정 2개가 섞인 항목 7개에서 살펴볼 징후 5개만 표시한다.', challenge: '징후를 표시한 뒤 이상을 발견하면 알릴 곳을 써 낸다.' },
        wrap: {
          teacher: '"우리 학교와 집에서 오늘부터 눈여겨볼 것은 무엇일까요?" 항목을 함께 읽고 살펴볼 징후만 표시하게 한다. "징후를 보면 내가 고쳐야 한다"는 학생에게 우리가 할 일은 고치기가 아니라 떨어져서 알리는 것이라고 말해 준다. 집 구조나 주소를 자세히 말하게 하지 않는다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title: '눈여겨볼 건물 징후', items: strip(SIGNCHK) }, prompt: '우리 학교·집에서 살펴볼 징후만 표시해요.', target: { checklist: SIGNCHK.filter((c) => c.ok).map((c) => c.id) }, difficulty: 0.2 },
              { prompt: '살펴볼 징후 세 가지를 모두 표시해요.', toolOptions: { items: strip(SIGNCHK.slice(0, 3)) }, target: { checklist: ['c1', 'c2', 'c3'] } }),
            { type: 'choice', prompt: '복도 벽 금이 길어진 것을 보았을 때 알맞은 행동은?', options: ['손으로 눌러 본다', '사진을 찍어 올린다', '떨어져서 선생님께 위치를 알린다'], answer: 2, difficulty: 0.15, explain: '징후는 건드리지 말고 떨어져서 어른에게 알려요.' },
            { type: 'short', prompt: '학교에서 이상한 징후를 보면 누구에게 알릴지 써요.' },
          ],
        },
        worksheet: {
          title: '건물 징후 살피기',
          items: [
            { type: 'check', prompt: '내가 살펴볼 징후에 표시해요.', options: ['벽·기둥 금', '안 닫히는 문', '이상한 소리', '가스 냄새'] },
            { type: 'short', prompt: '징후를 보았을 때 내가 할 행동을 한 문장으로 써요.' },
          ],
        },
      }),
      M('wrap.tabletop-check', {
        title: '도상 훈련 스스로 점검', method: '도상 훈련 스스로 점검', tool: 'timer', minutes: 9,
        levels: { easy: '점검 항목 2개에 스스로 표시한다.', base: '점검 항목 3개에 스스로 표시한다.', challenge: '점검 항목 4개(남은 위험 찾기 포함)에 스스로 표시한다.' },
        wrap: {
          teacher: '"오늘 지도 위에서 한 판단을 실제 건물에서도 할 수 있을까요?" 점검 항목을 한 줄씩 읽고 내가 한 것만 표시하게 한다. "지도 놀이였을 뿐"이라는 학생에게 실제 상황에서는 생각할 시간이 없어 미리 판단해 둔 길만 떠오른다고 말해 준다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'timer', options: { title: '도상 훈련 점검' }, prompt: '오늘 도상 훈련에서 내가 한 것을 스스로 점검해 표시해요.', target: { selfCheck: ['위험 구역을 피한 경로를 골랐다', '건물에서 떨어진 집결지를 골랐다', '신고 내용을 정했다'] }, difficulty: 0.1 },
              { prompt: '오늘 도상 훈련에서 내가 한 것 두 가지를 점검해 표시해요.', target: { selfCheck: ['위험 구역을 피한 경로를 골랐다', '신고 내용을 정했다'] } },
              { prompt: '오늘 도상 훈련에서 내가 한 것 네 가지를 점검해 표시해요.', target: { selfCheck: ['위험 구역을 피한 경로를 골랐다', '건물에서 떨어진 집결지를 골랐다', '신고 내용을 정했다', '남은 위험을 하나 찾았다'] } }),
            { type: 'choice', prompt: '붕괴 징후가 있는 건물에서 나온 뒤 기다리기 알맞은 곳은?', options: ['건물 바로 옆 골목', '건물에서 충분히 떨어진 공터', '건물 입구 앞'], answer: 1, difficulty: 0.15, explain: '무너질 때 닿지 않을 만큼 떨어진 곳에 모여요.' },
            { type: 'mood', prompt: '오늘 수업을 마친 내 마음은 어떤가요?' },
          ],
        },
        worksheet: {
          title: '도상 훈련 돌아보기',
          items: [
            { type: 'check', prompt: '오늘 내가 한 것에 표시해요.', options: ['위험 구역 피하기', '떨어진 집결지 고르기', '신고 내용 정하기'] },
            { type: 'short', prompt: '도상 훈련에서 아직 남은 위험 하나를 써요.' },
          ],
        },
      }),
      M('activity.sign-sort', {
        title: '붕괴 징후와 일상 구분', method: '징후와 정상 구분하고 이유 쓰기', tool: 'sortboard', minutes: 15,
        levels: { easy: '장면 카드 4장을 위험 징후·일상 바구니에 나누고, 틀리면 까닭을 듣고 되돌아온다.', base: '장면 카드 6장을 나누고, 위험 징후마다 이유를 활동지에 쓴다.', challenge: '애매한 카드가 더 섞인 판에서 나누고, 애매한 카드 하나를 모둠에서 토의한다.' },
        activity: {
          title: '붕괴 징후와 일상 구분', tool: 'sortboard',
          teacher: '"벽에 있는 금이 모두 위험 신호일까요? 무엇이 달라야 징후일까요?" 카드를 넣을 때마다 \'변했는가\'(길어졌나, 갑자기 생겼나)를 기준으로 말하게 한다. "작은 금은 무시해도 된다"는 학생에게 "며칠 새 길어지는 금도 무시해도 될까요?"라고 되묻는다. 애매한 카드는 \'일단 어른에게 알린다\'로 정리한다.',
          task: '건물 장면 카드를 \'위험 징후\'와 \'일상\' 바구니에 나누고, 위험 징후마다 그 까닭을 생각해요.',
          levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
          items: [
            SBT({ base: '건물 장면 카드를 위험 징후와 일상으로 나누세요.', easy: '건물 장면 카드 네 장을 위험 징후와 일상으로 나누세요.', challenge: '애매한 카드까지 건물 장면 카드를 위험 징후와 일상으로 나누세요.' },
              ['위험 징후', '일상'], [
                { id: 's1', text: '기둥의 금이 며칠 새 길어짐', to: '위험 징후' }, { id: 'n1', text: '새로 칠한 복도 벽', to: '일상' },
                { id: 's2', text: '늘 닫히던 문이 갑자기 안 닫힘', to: '위험 징후' }, { id: 'n2', text: '청소 뒤 젖은 복도 바닥', to: '일상' },
                { id: 's3', text: '천장에서 "뚝뚝" 갈라지는 소리', to: '위험 징후' }, { id: 'n3', text: '쉬는 시간 복도의 웅성거림', to: '일상' }], 4,
              [{ id: 's4', text: '벽 아래에 부스러기가 계속 떨어짐', to: '위험 징후' }, { id: 's5', text: '바닥이 한쪽으로 기운 느낌', to: '위험 징후' }]),
            SBT({ base: '가스·폭발 장면 카드를 위험 징후와 일상으로 나누세요.', easy: '가스 장면 카드 네 장을 위험 징후와 일상으로 나누세요.', challenge: '애매한 카드까지 가스 장면 카드를 위험 징후와 일상으로 나누세요.' },
              ['위험 징후', '일상'], [
                { id: 'g1', text: '현관에 들어서자 진한 가스 냄새', to: '위험 징후' }, { id: 'g2', text: '요리 중 냄비에서 나는 김', to: '일상' },
                { id: 'g3', text: '가스관 근처에서 "쉬익" 새는 소리', to: '위험 징후' }, { id: 'g4', text: '보일러가 켜질 때 나는 작은 소리', to: '일상' },
                { id: 'g5', text: '건물 밖 가스 배관이 휘어 있음', to: '위험 징후' }, { id: 'g6', text: '저녁 무렵 밥 짓는 냄새', to: '일상' }], 4,
              [{ id: 'g7', text: '가스레인지 불꽃이 평소와 달리 붉고 흔들림', to: '위험 징후' }]),
            { prompt: '모둠에서 가장 애매했던 카드 하나를 골라, 어떻게 판단할지 토의해 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '위험 징후 하나를 골라 왜 위험한지 한 문장으로 써요.' }],
          easy: [{ type: 'choice', prompt: '위험 징후에 ○ 해요.', options: ['며칠 새 길어지는 금', '새로 칠한 벽'], answer: '며칠 새 길어지는 금' }] },
        notes: '불꽃 색처럼 전문 판단이 필요한 징후는 \'어른·관리자에게 알린다\'로만 다룬다.',
      }),
    );
  }

  // ==== 8학년 · 폭염·한파 건강 위험 (saf-disaster.m.heat-cold) ====
  {
    const M = MK('heat-cold', [8]);
    // 가상 자료 — 실제 관측값이 아니다
    const DAY = [['6시', 24], ['9시', 28], ['12시', 33], ['15시', 35], ['18시', 31]];
    const D1 = { text: '더운 날 오후 체육 시간, 운동장에서 이어달리기 연습 중 친구 서아가 "어지럽고 속이 메스꺼워"라고 한다.', ask: '어떻게 할까?', motif: 'sun', choices: [
      { id: 'cheer', text: '"조금만 참아, 곧 끝나" 하고 계속 뛰게 한다', result: '서아가 비틀거리며 주저앉는다.', impact: [{ who: '서아', text: '더 위험해진다', tone: -1 }], why: '더위 속 어지러움은 몸이 보내는 위험 신호예요. 참고 운동하지 않아요.', end: '참게 했다가 서아가 주저앉았어요.',
        next: { text: '서아가 주저앉아 땀을 많이 흘린다.', choices: [
          { id: 'leave', text: '다른 친구들과 연습을 마저 한다', result: '서아가 혼자 땡볕에 앉아 있다.', impact: [{ who: '서아', text: '더 나빠진다', tone: -1 }] },
          { id: 'shade1', text: '그늘로 옮기고 선생님을 부른다', result: '선생님이 와서 서아를 살핀다.', impact: [{ who: '서아', text: '도움을 받는다', tone: 1 }] }] } },
      { id: 'shade', text: '연습을 멈추고 서아와 그늘로 가며 선생님께 알린다', result: '선생님이 연습을 멈추고 서아에게 온다.', impact: [{ who: '서아', text: '쉴 수 있다', tone: 1 }], end: '그늘로 가며 알렸어요.',
        next: { text: '그늘에 앉은 서아가 여전히 어지럽다고 한다. 선생님이 "물과 젖은 수건 좀 가져와 줄래?"라고 한다.', choices: [
          { id: 'cool', text: '물과 젖은 수건을 가져와 선생님을 돕는다', result: '서아가 물을 조금씩 마시고 몸을 식힌다.', impact: [{ who: '서아', text: '몸이 식는다', tone: 1 }], end: '몸을 식히도록 도왔어요.',
            next: { text: '쉬고 나서 서아가 "이제 괜찮아, 다시 뛸게"라고 한다. 아직 얼굴이 붉다.', choices: [
              { id: 'run2', text: '괜찮다니 다시 뛰자고 한다', result: '다시 어지러워진다.', impact: [{ who: '서아', text: '다시 위험해진다', tone: -1 }], why: '나아진 것 같아도 오늘은 더 운동하지 않고 보건실에서 살펴요.' },
              { id: 'nurse', text: '"오늘은 쉬고 보건실에 가 보자"고 한다', result: '보건 선생님이 상태를 살핀다.', impact: [{ who: '서아', text: '안전하게 쉰다', tone: 1 }] }] } },
          { id: 'fan', text: '그늘에 두고 혼자 연습하러 돌아간다', result: '서아 곁에 아무도 없다.', impact: [{ who: '서아', text: '혼자 남는다', tone: -1 }], why: '어지러운 친구 곁에는 누군가 있어 상태를 살펴야 해요.' }] } },
      { id: 'water', text: '물 한 모금 주고 다시 연습한다', result: '서아가 다시 뛰다 어지러워 멈춘다.', impact: [{ who: '서아', text: '나아지지 않는다', tone: -1 }], why: '물만 마시고 계속 뛰면 몸이 식지 않아요. 멈추고 그늘에서 쉬어요.', ending: '물만 주고 계속 뛰게 해 위험했어요.' }] };
    const R1 = [{ id: 'r1', text: '더위 속 어지러움·메스꺼움은 위험 신호다' }, { id: 'r2', text: '멈추고 그늘에서 식히며 어른에게 알린다' },
      { id: 'r3', text: '어지러워도 참고 운동해야 체력이 는다', why: '참고 운동하면 쓰러질 수 있어요.' }, { id: 'r4', text: '목마를 때만 물을 마시면 된다', why: '더운 날은 목마르기 전에도 물을 자주 마셔요.' }];
    const R1MORE = { reasons: [{ id: 'r5', text: '나아진 것 같아도 그날은 더 운동하지 않고 살핀다' }], ok: ['r5'] };
    const D2 = { text: '한파 특보가 내린 아침, 버스 정류장에서 30분째 기다리는 중이다. 귀와 코끝이 하얗게 되고 감각이 무디다.', ask: '어떻게 할까?', motif: 'cloud', choices: [
      { id: 'rub', text: '세게 문질러 녹인다', result: '감각이 없는 피부가 쓸려 상처가 난다.', impact: [{ who: '나', text: '피부가 상할 수 있다', tone: -1 }], why: '감각이 무딘 피부는 세게 문지르지 않아요. 따뜻한 곳으로 가요.', ending: '세게 문질러 피부가 상했어요.' },
      { id: 'inside', text: '가까운 건물 안으로 들어가 몸을 녹이며 기다린다', result: '따뜻한 곳에서 서서히 감각이 돌아온다.', impact: [{ who: '나', text: '몸이 녹는다', tone: 1 }], end: '따뜻한 곳으로 들어갔어요.',
        next: { text: '버스를 타고 학교에 가니 친구가 "젊으면 이 정도 추위는 괜찮아"라며 얇은 옷만 입고 있다.', choices: [
          { id: 'ok', text: '"그러게" 하고 넘어간다', result: '친구가 쉬는 시간마다 떨고 있다.', impact: [{ who: '친구', text: '몸이 식는다', tone: -1 }], why: '나이가 어려도 한파에는 체온이 떨어질 수 있어요.' },
          { id: 'layer', text: '"겹쳐 입고 목·귀를 감싸야 해"라고 알려 준다', result: '친구가 내일은 목도리를 챙기겠다고 한다.', impact: [{ who: '친구', text: '대비한다', tone: 1 }] }] } },
      { id: 'wait', text: '곧 오겠지 하고 계속 바깥에서 기다린다', result: '손발이 떨리고 몸이 굳는다.', impact: [{ who: '나', text: '체온이 떨어진다', tone: -1 }], why: '떨림과 감각 둔해짐은 한파의 위험 신호예요.', ending: '바깥에서 버티다 몸이 굳었어요.' }] };
    const R2 = [{ id: 'r1', text: '하얗게 되고 감각이 무디면 따뜻한 곳으로 간다' }, { id: 'r2', text: '한파에는 겹쳐 입고 목·귀·손을 감싼다' },
      { id: 'r3', text: '젊으면 한파에 괜찮다', why: '누구나 체온이 떨어질 수 있어요.' }, { id: 'r4', text: '언 곳은 세게 문지른다', why: '세게 문지르면 피부가 상할 수 있어요.' }];
    const NOTICE = ['오늘 날씨의 위험을 썼다', '해야 할 행동을 썼다', '몸이 이상하면 누구에게 알릴지 썼다'];
    const HOT = [{ id: 'h1', text: '물병 챙기기', ok: true }, { id: 'h2', text: '모자·양산 챙기기', ok: true }, { id: 'h3', text: '밝고 헐렁한 옷 입기', ok: true }, { id: 'h4', text: '한낮 일정 미루기', ok: true },
      { id: 'h5', text: '검은 긴 옷 겹쳐 입기' }, { id: 'h6', text: '목마를 때만 물 마시기로 하기' }];
    const COLD = [{ id: 'c1', text: '옷 여러 겹 겹쳐 입기', ok: true }, { id: 'c2', text: '목도리로 목 감싸기', ok: true }, { id: 'c3', text: '장갑·모자 챙기기', ok: true }, { id: 'c4', text: '미끄럼 덜한 신발 신기', ok: true },
      { id: 'c5', text: '젖은 옷 그대로 입기' }, { id: 'c6', text: '얇은 옷 하나만 입기' }];

    ALL.push(
      // ---- 도입 ----
      M('intro.temp-line', {
        title: '가상 기온 꺾은선 읽기', method: '예시 기온 꺾은선 읽기', tool: 'chart', minutes: 6,
        levels: { easy: '교사가 가장 높은 점(가장 더운 시간)을 함께 찾는다.', base: '가장 더운 때와 가장 시원한 때를 찾고 그때 피할 활동을 말한다.', challenge: '교사가 겨울 하루 꺾은선(가상)을 말로 덧붙이면 여름과 견주어 위험한 때가 어떻게 다른지 말한다.' },
        intro: {
          teacher: '"이 꺾은선에서 가장 더운 때는 몇 시이고, 그때 우리 학교 일정은 무엇인가요?" 가상 하루 기온 꺾은선을 띄우고 실제 관측값이 아닌 수업용 예시라고 밝힌다. 시연 단추로 15시가 골라지는 모습을 보인다. "아침이 더 더울 것 같다"는 말이 나오면 꺾은선의 오르내림을 손으로 따라가게 한다.',
          student: '가상 기온 꺾은선에서 가장 더운 때를 찾고, 그 시간에 피하거나 바꿀 활동을 짝에게 말해요.',
          demo: { tool: 'chart', options: { type: 'line', mode: 'read', title: '여름 어느 날 기온(가상 예시)', unit: '°C', xLabel: '시각', yLabel: '기온', data: DAY, from: 20, question: '가장 더운 때는?', choices: DAY.map((d) => d[0]) }, sequence: [{ pick: 3 }] },
          art: { draw: 'a paper-cut hot summer schoolyard with a blazing sun, a shaded bench under a tree and a line graph rising toward the afternoon', banner: '가장 더운 때는 언제?', extra: [{ motif: 'sun', x: 300, y: 96 }] },
        },
        notes: '기온 값은 지어낸 예시다. 실제 폭염·한파 특보는 기상청 날씨누리로 교사가 보인다.',
      }),
      M('intro.body-signal', {
        title: '더위·추위 신호가 오는 몸', method: '더위·추위 신호가 오는 몸 부위', tool: 'body', minutes: 6,
        levels: { easy: '교사가 피부·귀 2곳을 짚어 주고 어떤 신호인지 함께 말한다.', base: '피부·귀·코 3곳을 고르고 더위 신호인지 추위 신호인지 말한다.', challenge: '고른 3곳마다 신호 이름(땀·창백·감각 무딤 등)을 붙여 말한다.' },
        intro: {
          teacher: '"아주 덥거나 추운 날, 몸은 어디에서 먼저 신호를 보낼까요?" 종이 몸을 띄우고 시연 단추로 피부·귀·코가 골라지는 모습을 보인다. 어지러움처럼 머리에서 오는 신호는 그림에 칸이 없어 말로 짚는다. "젊으면 더위·추위를 잘 견딘다"는 말이 나오면 "귀 끝이 하얗게 되는 데 나이가 상관있을까요?"라고 되묻는다.',
          student: '몸 그림에서 더위·추위의 신호가 오는 곳을 골라 보고, 어떤 신호인지 짝에게 말해요.',
          demo: { tool: 'body', options: { mode: 'parts', parts: ['눈', '귀', '코', '피부', '목', '가슴', '배', '무릎'], names: true }, sequence: [{ parts: ['피부', '귀', '코'] }] },
          art: { draw: 'a paper-cut figure split in half, one side sweating under the sun and the other side shivering in the snow with red ears and nose', banner: '몸이 보내는 신호', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '몸 그림에 머리 칸이 없어 어지러움·두통은 말로 짚는다.',
      }),

      // ---- 활동 ----
      M('activity.pe-choice', {
        title: '체육 시간 어지러운 친구', method: '체육 시간 어지러운 친구', tool: 'dilemma', minutes: 15,
        levels: { easy: '두 상황(폭염 체육·한파 정류장)에서 갈림길 1번씩 고르고 결과를 본다.', base: '두 상황에서 갈림길 2번을 끝까지 가 보고 근거 카드를 고른다.', challenge: '폭염 체육 상황은 갈림길 3번(다시 뛰겠다는 친구)까지 가고 근거 카드를 모두 고른다.' },
        activity: {
          title: '체육 시간 어지러운 친구', tool: 'dilemma',
          teacher: '"친구가 \'괜찮아, 다시 뛸게\'라고 하면 정말 괜찮은 걸까요?" 한 길을 끝까지 가 본 뒤 다른 길과 견주게 한다. "물만 마시면 금방 낫는다"는 학생에게 "땡볕 아래에서 물만 마시면 몸이 식을까요?"라고 되묻는다. 친구를 돕는 사람도 혼자 하지 말고 어른을 함께 부른다는 점을 짚는다.',
          task: '폭염 체육 시간과 한파 정류장 상황에서 길을 골라 결과를 따라가고, 끝에서 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL({ easy: '더운 날 체육 중 친구가 어지러워해요. 한 번 골라 결과를 보세요.', base: '더운 날 체육 중 친구가 어지러워해요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '더운 날 체육 중 친구가 어지러워해요. 세 번 골라 끝까지 가고 근거를 모두 고르세요.' },
              '폭염 속 체육 시간', D1, [['shade', 'cool', 'nurse']], R1, ['r1', 'r2'], R1MORE),
            DIL({ easy: '한파 속 정류장에서 귀·코가 하얘졌어요. 한 번 골라 결과를 보세요.', base: '한파 속 정류장에서 귀·코가 하얘졌어요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '한파 속 정류장에서 귀·코가 하얘졌어요. 두 번 골라 끝까지 가고 근거를 고르세요.' },
              '한파 속 정류장', D2, [['inside', 'layer']], R2, ['r1', 'r2']),
            { prompt: '짝과 폭염과 한파의 위험 신호를 하나씩 말하고, 그때 할 행동을 정해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '더운 날 체육 중 친구가 어지럽다고 할 때 먼저 할 일은?', options: ['조금만 참게 한다', '멈추고 그늘로 옮기며 선생님께 알린다', '물만 주고 계속 뛰게 한다'], answer: '멈추고 그늘로 옮기며 선생님께 알린다' }] },
        notes: '증상과 처치는 일반 안내다. 교사가 질병관리청 온열·한랭질환 안내로 확인한다.',
      }),
      M('activity.outing-check', {
        title: '폭염·한파 외출 준비 점검', method: '외출 준비물 점검', tool: 'kitchen', minutes: 15,
        levels: { easy: '폭염 준비 항목 4개(함정 없음)를 모두 표시한다.', base: '함정 2개가 섞인 항목 6개에서 알맞은 준비만 표시한다.', challenge: '폭염 판과 한파 판을 둘 다 함정이 섞인 채로 점검한다.' },
        activity: {
          title: '폭염·한파 외출 준비 점검', tool: 'kitchen',
          teacher: '"폭염 특보가 내린 토요일에 친구와 놀이공원에 간다면 무엇을 챙길까요?" 항목을 소리 내어 읽고 표시하게 한다. "검은 옷이 햇빛을 막아 시원하다"는 학생에게 "검은 옷과 흰 옷 가운데 햇볕에 더 뜨거워지는 것은 무엇일까요?"라고 되묻는다. 준비물을 살 형편을 묻지 않고, 집에 있는 것으로 할 수 있는 준비를 고르게 한다.',
          task: '폭염·한파 날 외출 준비 목록에서 알맞은 것만 골라 표시해요. 함정 항목은 표시하지 않아요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT(CL('폭염 특보 날 외출 준비로 알맞은 것만 표시하세요.', '폭염 날 외출', HOT),
              CL('폭염 특보 날 외출 준비를 모두 표시하세요.', '폭염 날 외출', HOT.slice(0, 4))),
            IT(CL('한파 특보 날 외출 준비로 알맞은 것만 표시하세요.', '한파 날 외출', COLD),
              CL('한파 특보 날 외출 준비를 모두 표시하세요.', '한파 날 외출', COLD.slice(0, 4))),
            IT(CL('폭염 날 학교에서 지킬 것만 표시하세요.', '폭염 날 학교에서', [
              { id: 's1', text: '쉬는 시간마다 물 마시기', ok: true }, { id: 's2', text: '어지러우면 바로 선생님께 알리기', ok: true }, { id: 's3', text: '그늘에서 쉬기', ok: true },
              { id: 's4', text: '점심시간 땡볕에서 축구하기' }, { id: 's5', text: '어지러워도 참고 수업 듣기' }]),
              CL('폭염 날 학교에서 지킬 것을 모두 표시하세요.', '폭염 날 학교에서', [{ id: 's1', text: '쉬는 시간마다 물 마시기', ok: true }, { id: 's2', text: '어지러우면 바로 선생님께 알리기', ok: true }, { id: 's3', text: '그늘에서 쉬기', ok: true }]),
              CL('폭염·한파 둘 다에 알맞은 준비만 표시하세요.', '폭염·한파 공통', [
                { id: 'b1', text: '예보·특보 확인하기', ok: true }, { id: 'b2', text: '몸이 이상하면 바로 알리기', ok: true }, { id: 'b3', text: '날씨에 맞게 옷 고르기', ok: true },
                { id: 'b4', text: '젊으니 괜찮다고 생각하기' }, { id: 'b5', text: '바깥 활동을 더 늘리기' }]),
              { conclude: '폭염에는 물·그늘·밝은 옷, 한파에는 겹쳐 입기·목과 손 감싸기, 둘 다 예보를 보고 몸 신호를 알리는 것이 먼저예요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '날씨마다 챙길 것을 써요.', columns: ['날씨', '챙길 것'], cells: [['폭염', ''], ['한파', '']], answer: '물병·모자·밝은 옷 / 겹쳐 입기·목도리·장갑' }] },
      }),

      // ---- 정리 ----
      M('wrap.class-notice', {
        title: '폭염·한파 반 게시 안내문', method: '반 게시 안내문 쓰기', tool: 'rubric-writing', minutes: 9,
        levels: { easy: '문장 틀을 따라 두 문장으로 쓴다.', base: '세 문장으로 쓰고 기준 3개(위험·행동·연락)를 점검한다.', challenge: '세 문장에 친구를 돕는 방법까지 넣고 기준 4개를 점검한다.' },
        wrap: {
          teacher: '"오늘 같은 날 교실 문에 붙일 안내문이라면, 친구들이 읽고 바로 무엇을 하게 될까요?" 폭염과 한파 가운데 하나를 골라 안내문을 쓰게 한다. "\'더우니 조심하세요\'면 충분하다"는 학생에게 무엇을 조심할지, 몸이 이상하면 누구에게 알릴지가 들어가야 한다고 말해 준다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'rubric-writing', options: { topic: '폭염 또는 한파 날 우리 반 문에 붙일 안내문을 세 문장으로 쓰세요.', minChars: 30, maxChars: 200, minSentences: 3, maxSentences: 4, title: '반 게시 안내문' },
              prompt: '폭염 또는 한파 날 반 게시 안내문을 세 문장으로 쓰고 기준표에 표시해요.', target: { selfCheck: NOTICE }, difficulty: 0.3 },
            { prompt: '틀을 따라 안내문을 두 문장으로 쓰고 기준표에 표시해요.', toolOptions: { minSentences: 2, starter: '오늘은 ___ 특보가 내렸어요. ___ 하고, 몸이 이상하면 ___에게 알려요.' } },
            { prompt: '친구를 돕는 방법까지 넣어 안내문을 쓰고 기준표에 표시해요.', target: { selfCheck: [...NOTICE, '친구가 아플 때 돕는 방법을 썼다'] } }),
            { type: 'choice', prompt: '더운 날 물 마시기로 가장 알맞은 것은?', options: ['목마를 때만 마신다', '목마르지 않아도 자주 조금씩 마신다', '점심때 한 번에 많이 마신다'], answer: 1, difficulty: 0.2, explain: '더운 날은 목마르기 전에도 자주 마셔요.' },
            { type: 'short', prompt: '오늘 배운 위험 신호 하나와 그때 할 행동을 한 문장으로 써요.' },
          ],
        },
        worksheet: {
          title: '폭염·한파 안내문',
          items: [
            { type: 'short', prompt: '우리 반에 붙일 폭염 또는 한파 안내문을 세 문장으로 써요.' },
            { type: 'check', prompt: '내 안내문을 점검해요.', options: ['위험이 있다', '할 행동이 있다', '알릴 사람이 있다'] },
          ],
          easy: { note: '"오늘은 ___ 특보가 내렸어요. ___ 해요." 틀을 써도 돼요.', items: [{ type: 'blank', prompt: '틀을 채워 써요.', text: '오늘은 ___ 특보가 내렸어요. ___ 해요.', answer: '(예) 폭염, 물을 자주 마시고 그늘에서 쉬어요' }] },
        },
      }),
      M('wrap.summary-map', {
        title: '폭염·한파 정리 지도', method: '폭염·한파 정리 연상 지도', tool: 'mindmap', minutes: 9,
        levels: { easy: '가지 2개(폭염·한파)에 카드를 2장씩 나눈다.', base: '가지 4개(폭염 신호·폭염 예방·한파 신호·한파 예방)에 카드를 나눈다.', challenge: '가지 4개에 \'돕는 행동\' 가지를 더해 5개로 나눈다.' },
        wrap: {
          teacher: '"폭염과 한파, 몸이 보내는 신호와 미리 막는 행동을 나눠 볼까요?" 학생이 다 나누면 가지 하나씩을 골라 오늘 갈림길 장면 가운데 어디에 나왔는지 말하게 한다. "추위 신호와 더위 신호는 비슷하다"는 말에는 땀과 떨림, 붉음과 창백함을 견주어 짚는다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'mindmap', options: { mode: 'sort', topic: '폭염·한파', slots: ['폭염 신호', '폭염 예방', '한파 신호', '한파 예방'], cards: [
              { id: 'a1', text: '어지러움·메스꺼움' }, { id: 'a2', text: '땀을 아주 많이 흘림' }, { id: 'b1', text: '자주 물 마시기' }, { id: 'b2', text: '한낮에 그늘에서 쉬기' },
              { id: 'c1', text: '몸이 계속 떨림' }, { id: 'c2', text: '귀·코끝이 하얗고 무딤' }, { id: 'd1', text: '옷 겹쳐 입기' }, { id: 'd2', text: '목·귀·손 감싸기' }] },
              prompt: '폭염·한파의 신호와 예방 카드를 알맞은 가지에 나눠요.', target: { sort: { '폭염 신호': ['a1', 'a2'], '폭염 예방': ['b1', 'b2'], '한파 신호': ['c1', 'c2'], '한파 예방': ['d1', 'd2'] } }, difficulty: 0.2 },
            { prompt: '폭염·한파 카드를 두 가지에 나눠요.', toolOptions: { slots: ['폭염', '한파'], cards: [{ id: 'a1', text: '어지러움·메스꺼움' }, { id: 'b1', text: '자주 물 마시기' }, { id: 'c1', text: '몸이 계속 떨림' }, { id: 'd1', text: '옷 겹쳐 입기' }] }, target: { sort: { 폭염: ['a1', 'b1'], 한파: ['c1', 'd1'] } } },
            { prompt: '폭염·한파 카드를 돕는 행동 가지까지 다섯 가지에 나눠요.', toolOptions: { slots: ['폭염 신호', '폭염 예방', '한파 신호', '한파 예방', '돕는 행동'], cards: [
              { id: 'a1', text: '어지러움·메스꺼움' }, { id: 'a2', text: '땀을 아주 많이 흘림' }, { id: 'b1', text: '자주 물 마시기' }, { id: 'b2', text: '한낮에 그늘에서 쉬기' },
              { id: 'c1', text: '몸이 계속 떨림' }, { id: 'c2', text: '귀·코끝이 하얗고 무딤' }, { id: 'd1', text: '옷 겹쳐 입기' }, { id: 'd2', text: '목·귀·손 감싸기' }, { id: 'e1', text: '곁에 있으며 어른 부르기' }] },
              target: { sort: { '폭염 신호': ['a1', 'a2'], '폭염 예방': ['b1', 'b2'], '한파 신호': ['c1', 'c2'], '한파 예방': ['d1', 'd2'], '돕는 행동': ['e1'] } } }),
            { type: 'choice', prompt: '"젊으면 한파에 괜찮다"는 말에 대한 반박으로 알맞은 것은?', options: ['어른만 추위를 탄다', '나이와 상관없이 오래 추위에 있으면 체온이 떨어질 수 있다', '겨울엔 원래 춥다'], answer: 1, difficulty: 0.2, explain: '누구나 체온이 떨어질 수 있어요.' },
            { type: 'short', prompt: '폭염 또는 한파 날 내가 지킬 행동 하나를 써요.' },
          ],
        },
        worksheet: {
          title: '폭염·한파 정리',
          items: [
            { type: 'table', prompt: '폭염과 한파의 신호와 예방을 써요.', columns: ['구분', '신호', '예방'], cells: [['폭염', '', ''], ['한파', '', '']], answer: '어지러움·땀 / 물·그늘, 떨림·창백 / 겹쳐 입기·감싸기' },
            { type: 'short', prompt: '친구가 더위·추위 신호를 보일 때 내가 할 일을 써요.' },
          ],
        },
      }),
      M('activity.symptom-sort', {
        title: '폭염·한파 증상 나누기', method: '폭염·한파 증상 나누기', tool: 'sortboard', minutes: 15,
        levels: { easy: '증상 카드 4장을 폭염·한파 바구니에 나누고, 틀리면 까닭을 듣고 되돌아온다.', base: '증상 카드 6장을 나누고, 이어서 폭염·한파 때 도울 행동 카드를 나눈다.', challenge: '헷갈리는 카드가 더 섞인 판에서 나누고, 바로 어른을 불러야 할 증상을 짝과 정한다.' },
        activity: {
          title: '폭염·한파 증상 나누기', tool: 'sortboard',
          teacher: '"\'어지럽다\'는 더위의 신호일까요, 추위의 신호일까요?" 카드를 넣을 때마다 그 증상이 몸 어디에서 오는지 함께 짚는다. "증상이 약하면 참아도 된다"는 학생에게 "약한 신호를 지나치면 다음 신호는 무엇일까요?"라고 되묻는다. 증상이 하나라도 있으면 혼자 참지 말고 어른에게 알린다는 점을 매번 덧붙인다.',
          task: '증상 카드를 \'폭염\'과 \'한파\' 바구니에 나누고, 그때 도울 행동도 나눠요.',
          levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
          items: [
            SBT({ base: '증상 카드를 폭염과 한파 바구니에 나누세요.', easy: '증상 카드 네 장을 폭염과 한파 바구니에 나누세요.', challenge: '헷갈리는 카드까지 증상 카드를 폭염과 한파 바구니에 나누세요.' },
              ['폭염', '한파'], [
                { id: 'h1', text: '어지럽고 속이 메스꺼움', to: '폭염' }, { id: 'c1', text: '몸이 멈추지 않고 떨림', to: '한파' },
                { id: 'h2', text: '땀을 아주 많이 흘림', to: '폭염' }, { id: 'c2', text: '귀·코끝이 하얗고 감각이 무딤', to: '한파' },
                { id: 'h3', text: '다리 근육이 쥐가 난 듯 당김', to: '폭염' }, { id: 'c3', text: '손가락이 굳어 잘 안 움직임', to: '한파' }], 4,
              [{ id: 'h4', text: '얼굴이 붉고 몸이 뜨거움', to: '폭염' }, { id: 'c4', text: '말이 느려지고 졸림', to: '한파' }]),
            SBT({ base: '도울 행동 카드를 폭염과 한파 바구니에 나누세요.', easy: '도울 행동 카드 네 장을 폭염과 한파 바구니에 나누세요.', challenge: '함정 카드는 남기고 도울 행동 카드를 나누세요.' },
              ['폭염', '한파'], [
                { id: 'p1', text: '그늘·시원한 곳으로 옮기기', to: '폭염' }, { id: 'q1', text: '따뜻한 실내로 들어가기', to: '한파' },
                { id: 'p2', text: '젖은 수건으로 몸 식히기', to: '폭염' }, { id: 'q2', text: '젖은 옷 갈아입고 담요 덮기', to: '한파' },
                { id: 'p3', text: '물을 조금씩 마시게 하기', to: '폭염' }, { id: 'q3', text: '언 곳은 문지르지 않고 감싸기', to: '한파' }], 4,
              [{ id: 't1', text: '참고 계속 운동하게 하기' }, { id: 't2', text: '언 곳을 세게 문지르기' }]),
            { prompt: '짝과 "바로 어른을 불러야 할 증상"이 무엇인지 하나씩 골라 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '증상과 도울 행동을 써요.', columns: ['날씨', '증상', '도울 행동'], cells: [['폭염', '', ''], ['한파', '', '']], answer: '어지러움·많은 땀 / 그늘·물·식히기, 떨림·창백 / 실내·담요·감싸기' }],
          easy: [{ type: 'choice', prompt: '폭염 때 나타나기 쉬운 증상에 ○ 해요.', options: ['어지럽고 메스꺼움', '귀가 하얗게 됨'], answer: '어지럽고 메스꺼움' }] },
        notes: '증상과 돕는 행동은 일반 안내다. 교사가 질병관리청 온열·한랭질환 안내로 확인한다.',
      }),
    );
  }

  // ==== 8학년 · 열·화학·전기 화상 처치 차이 (saf-disaster.m.burn-types) ====
  {
    const M = MK('burn-types', [8]);
    const D1 = { text: '교실 뒤 멀티탭에 충전기를 꽂던 친구 도윤이 "앗!" 하더니 손이 멀티탭에 붙은 채 몸을 떨고 있다.', ask: '가장 먼저 어떻게 할까?', motif: 'house', choices: [
      { id: 'pull', text: '도윤의 팔을 맨손으로 잡아당긴다', result: '내 손으로도 전기가 흘러 함께 쓰러질 수 있다.', impact: [{ who: '나', text: '함께 감전될 수 있다', tone: -1 }], why: '감전된 사람을 맨손으로 만지면 구하는 사람도 감전돼요. 전원부터 끊어요.', end: '맨손으로 잡아 함께 위험했어요.',
        next: { text: '둘 다 바닥에 쓰러졌다. 다른 친구들이 놀라 모여든다.', choices: [
          { id: 'crowd', text: '친구들이 다가와 흔든다', result: '전기가 아직 흐르고 있어 더 위험하다.', impact: [{ who: '친구들', text: '감전될 수 있다', tone: -1 }] },
          { id: 'switch2', text: '누군가 차단기를 내리고 119에 신고한다', result: '전기가 끊기고 구조가 시작된다.', impact: [{ who: '도윤', text: '구조된다', tone: 1 }] }] } },
      { id: 'power', text: '"만지지 마!" 외치고 벽 스위치·차단기로 전원을 끊는다', result: '전기가 끊기고 도윤의 손이 떨어진다.', impact: [{ who: '도윤', text: '감전에서 벗어난다', tone: 1 }], end: '전원부터 끊었어요.',
        next: { text: '도윤이 손바닥 쪽이 조금 검게 그을렸다며 "별거 아니야"라고 한다.', choices: [
          { id: 'fine', text: '겉이 작으니 그냥 둔다', result: '도윤이 수업 중 가슴이 두근거린다고 한다.', impact: [{ who: '도윤', text: '속 손상을 놓친다', tone: -1 }], why: '전기 화상은 겉보다 속이 더 다칠 수 있어요. 작아 보여도 병원에 가요.' },
          { id: 'report', text: '선생님께 알리고 119에 신고해 병원으로 가게 한다', result: '구급대가 와서 도윤을 살핀다.', impact: [{ who: '도윤', text: '속 손상까지 살핀다', tone: 1 }], end: '신고해서 병원에 갔어요.',
            next: { text: '구급대를 기다리는 동안 친구가 "그을린 데 연고 바르자"고 한다.', choices: [
              { id: 'cream', text: '연고를 두껍게 바른다', result: '상처가 가려져 구급대가 보기 어렵다.', impact: [{ who: '도윤', text: '상처를 살피기 어렵다', tone: -1 }], why: '병원 가기 전에는 무엇을 바르지 않고 깨끗하게 덮어 둬요.' },
              { id: 'cover', text: '깨끗한 천으로 가볍게 덮고 곁에 있는다', result: '구급대가 바로 상처를 살핀다.', impact: [{ who: '도윤', text: '안심한다', tone: 1 }] }] } }] } },
      { id: 'water', text: '물을 끼얹어 떼어 낸다', result: '물을 타고 전기가 더 퍼질 수 있다.', impact: [{ who: '모두', text: '감전 위험이 커진다', tone: -1 }], why: '전기에는 물을 쓰지 않아요. 전원부터 끊어요.', ending: '물을 끼얹어 더 위험했어요.' }] };
    const R1 = [{ id: 'r1', text: '감전 사고는 전원을 끊는 것이 먼저다' }, { id: 'r2', text: '구하는 사람이 다치지 않아야 구할 수 있다' },
      { id: 'r3', text: '감전된 사람은 바로 잡아당긴다', why: '맨손으로 잡으면 나도 감전돼요.' }, { id: 'r4', text: '겉이 작으면 병원에 안 가도 된다', why: '전기 화상은 겉보다 속이 더 다칠 수 있어요.' }];
    const R1MORE = { reasons: [{ id: 'r5', text: '병원 가기 전에는 바르지 않고 깨끗하게 덮는다' }], ok: ['r5'] };
    const D2 = { text: '과학실에서 시약병을 옮기다 약품이 손목과 소매에 튀었다. 따끔거리기 시작한다.', ask: '어떻게 할까?', motif: 'star', choices: [
      { id: 'wipe', text: '휴지로 문질러 닦아 낸다', result: '약품이 피부에 더 넓게 번진다.', impact: [{ who: '나', text: '화상이 넓어진다', tone: -1 }], why: '화학약품은 닦지 않고 흐르는 물로 충분히 씻어 내요.', ending: '닦다가 약품이 번졌어요.' },
      { id: 'rinse', text: '선생님께 알리고 개수대의 흐르는 물로 씻어 낸다', result: '따끔거림이 조금 줄어든다.', impact: [{ who: '나', text: '약품이 씻겨 나간다', tone: 1 }], end: '흐르는 물로 씻었어요.',
        next: { text: '씻는 동안 약품이 묻은 소매가 계속 손목에 닿는다.', choices: [
          { id: 'sleeve', text: '선생님 도움을 받아 묻은 소매를 걷거나 벗고 계속 씻는다', result: '약품이 더 닿지 않는다.', impact: [{ who: '나', text: '더 다치지 않는다', tone: 1 }] },
          { id: 'stop', text: '조금 씻었으니 그만하고 실험을 마저 한다', result: '소매의 약품이 다시 피부에 닿는다.', impact: [{ who: '나', text: '다시 다친다', tone: -1 }], why: '씻을 때는 충분히, 묻은 옷도 벗기며 씻어요.' }] } }] };
    const R2 = [{ id: 'r1', text: '화학약품은 흐르는 물로 충분히 씻어 낸다' }, { id: 'r2', text: '약품이 묻은 옷은 벗겨 더 닿지 않게 한다' },
      { id: 'r3', text: '화학약품은 닦아 내면 된다', why: '닦으면 번져요. 흐르는 물로 씻어요.' }, { id: 'r4', text: '따끔거림이 줄면 다 나은 것이다', why: '약품 이름을 알려 진료를 받아 봐요.' }];
    const DIFF = ['세 화상의 원인을 썼다', '종류마다 첫 처치를 썼다', '처치가 다른 까닭을 썼다'];
    const CHEM = [{ id: 'e1', text: '실험을 멈추고 선생님께 알린다', motif: 'star' }, { id: 'e2', text: '흐르는 물로 충분히 씻어 낸다', motif: 'rain' },
      { id: 'e3', text: '묻은 옷을 벗기며 계속 씻는다', motif: 'leaf' }, { id: 'e4', text: '약품 이름을 챙겨 진료를 받는다', motif: 'house' }];

    ALL.push(
      // ---- 도입 ----
      M('intro.cause-map', {
        title: '세 가지 화상 원인 지도', method: '세 가지 화상 원인 연상 지도', tool: 'mindmap', minutes: 6,
        levels: { easy: '교사가 가지 2개(열·전기)에 원인 카드를 함께 붙인다.', base: '가지 3개(열·화학·전기)에 생활 속 원인을 붙인다.', challenge: '가지마다 미리 막는 방법을 하나씩 덧붙여 말한다.' },
        intro: {
          teacher: '"화상은 뜨거운 것에만 데는 걸까요? 약품이나 전기로도 데요." 시연 단추로 원인 카드가 열·화학·전기 가지에 붙는 모습을 보인다. "화상은 다 같은 방법으로 처치하면 된다"는 말이 나오면 "감전된 친구에게 찬물부터 끼얹으면 어떻게 될까요?"라고 되묻는다. 오늘은 원인에 따라 첫 처치가 어떻게 다른지 견준다고 밝힌다.',
          student: '\'화상\' 가지에 열·화학·전기로 생기는 생활 속 원인을 붙이고, 우리 학교에서 생길 만한 것 하나를 말해요.',
          demo: { tool: 'mindmap', options: { mode: 'sort', topic: '화상', slots: ['열', '화학', '전기'], cards: [
            { id: 'h1', text: '끓는 라면 국물' }, { id: 'c1', text: '튄 과학실 시약' }, { id: 'e1', text: '젖은 손으로 만진 콘센트' }, { id: 'h2', text: '뜨거운 다리미' }] }, sequence: [{ sort: { 열: ['h1', 'h2'], 화학: ['c1'], 전기: ['e1'] } }] },
          art: { draw: 'a paper-cut mind map with three branches showing a steaming pot, a tipped chemical bottle and a sparking power strip', banner: '화상은 열만이 아니다', extra: [{ motif: 'sun', x: 300, y: 96 }] },
        },
      }),
      M('intro.body-find', {
        title: '사례 속 화상 부위 고르기', method: '화상 부위 고르기', tool: 'body', minutes: 6,
        levels: { easy: '사례 1개(라면 국물)의 다친 곳을 교사가 함께 짚는다.', base: '사례 2개(국물·시약)를 읽어 주면 다친 곳을 차례로 고른다.', challenge: '사례 3개(국물·시약·멀티탭)의 다친 곳을 고르고 원인을 말한다.' },
        intro: {
          teacher: '"라면 국물을 무릎 위로 쏟았다면 어디를 데었을까요? 시약이 손목에 튀었다면요?" 교사가 사례를 하나씩 읽고, 시연 단추로 첫 사례의 부위가 골라지는 모습을 보인다. 몸 그림에 손 칸이 없어 손목으로 대신 짚는다고 말해 준다. "부위는 중요하지 않다"는 말에는 관절이나 얼굴 가까이 데면 병원 판단이 달라진다고 짚는다.',
          student: '선생님이 읽어 주는 사례를 듣고 몸 그림에서 다친 곳을 골라요. 어떤 원인의 화상인지도 말해요.',
          demo: { tool: 'body', options: { mode: 'parts', parts: ['눈', '목', '가슴', '배', '팔꿈치', '손목', '허벅지', '무릎'], names: true }, sequence: [{ parts: ['허벅지', '무릎'] }] },
          art: { draw: 'a paper-cut figure with small paper markers on the knee, the wrist and the forearm next to a pot, a test tube and a plug', banner: '어디를 다쳤을까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '몸 그림에 손 칸이 없어 손목으로 대신한다. 학생의 화상 경험은 묻지 않는다.',
      }),

      // ---- 활동 ----
      M('activity.shock-choice', {
        title: '감전 화상 갈림길', method: '감전 화상 갈림길', tool: 'dilemma', minutes: 15,
        levels: { easy: '두 상황(감전·시약)에서 갈림길 1번씩 고르고 결과를 본다.', base: '두 상황에서 갈림길 2번을 끝까지 가 보고 근거 카드를 고른다.', challenge: '감전 상황은 갈림길 3번(구급대 기다리기)까지 가고 근거 카드를 모두 고른다.' },
        activity: {
          title: '감전 화상 갈림길', tool: 'dilemma',
          teacher: '"친구가 감전되어 떨고 있다면, 내 손은 어디로 먼저 가야 할까요?" 한 길을 끝까지 가 본 뒤 다른 길과 견주게 한다. "빨리 떼어 내는 게 친구를 구하는 길"이라는 학생에게 "내가 같이 감전되면 누가 신고할까요?"라고 되묻는다. 시약 상황에서는 닦지 않고 흐르는 물로 씻는다는 점을 견주어 짚는다.',
          task: '감전과 시약 화상 상황에서 길을 골라 결과를 따라가고, 끝에서 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL({ easy: '친구가 멀티탭에 감전됐어요. 한 번 골라 결과를 보세요.', base: '친구가 멀티탭에 감전됐어요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '친구가 멀티탭에 감전됐어요. 세 번 골라 구급대가 올 때까지 가고 근거를 모두 고르세요.' },
              '교실 멀티탭 감전', D1, [['power', 'report', 'cover']], R1, ['r1', 'r2'], R1MORE),
            DIL({ easy: '과학실에서 약품이 튀었어요. 한 번 골라 결과를 보세요.', base: '과학실에서 약품이 튀었어요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '과학실에서 약품이 튀었어요. 두 번 골라 끝까지 가고 근거를 고르세요.' },
              '과학실 시약', D2, [['rinse', 'sleeve']], R2, ['r1', 'r2']),
            { prompt: '짝과 감전과 시약 화상에서 "가장 먼저 한 일"이 왜 달랐는지 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '감전된 사람을 보았을 때 가장 먼저 할 일은?', options: ['맨손으로 잡아당긴다', '전원을 끊는다', '물을 끼얹는다'], answer: '전원을 끊는다' }] },
        notes: '처치 내용은 일반 안내다. 교사가 소방청·대한적십자사 응급처치 안내로 확인한다.',
      }),
      M('activity.type-match', {
        title: '화상 종류와 첫 처치 짝', method: '화상 종류와 첫 처치 짝', tool: 'kitchen', minutes: 15,
        levels: { easy: '화상 2종류(열·전기)에 첫 처치 카드를 짝짓고, 놓으면 바로 맞는지 알려 준다.', base: '화상 3종류에 첫 처치 카드를 짝짓는다.', challenge: '함정 처치 카드 2장이 섞인 판에서 3종류를 짝짓는다.' },
        activity: {
          title: '화상 종류와 첫 처치 짝', tool: 'kitchen',
          teacher: '"열 화상에 하는 처치를 전기 화상에 그대로 하면 어떻게 될까요?" 카드를 놓을 때마다 그 처치가 왜 그 화상에 맞는지 말하게 한다. "모든 화상은 찬물이 먼저"라는 학생에게 "전기가 아직 흐르는 사람에게 물을 끼얹으면요?"라고 되묻는다. 공통점(병원 판단·바르지 않기)과 차이점(먼저 할 일)을 칠판에 나누어 적는다.',
          task: '열·화학·전기 화상 칸마다 알맞은 첫 처치 카드를 짝지어 놓아요. 함정 카드는 놓지 않아요.',
          levels: { easy: { live: true, instant: true, autoMotif: false }, base: { autoMotif: false }, challenge: { autoMotif: false, shuffle: true } },
          items: [
            IT(MB('화상 종류마다 가장 먼저 할 처치를 이어 보세요.', [['열 화상', '흐르는 찬물로 식히기'], ['화학 화상', '흐르는 물로 충분히 씻어 내기'], ['전기 화상', '전원부터 끊기']], []),
              MB('두 화상 종류에 가장 먼저 할 처치를 이어 보세요.', [['열 화상', '흐르는 찬물로 식히기'], ['전기 화상', '전원부터 끊기']], []),
              MB('함정 카드는 빼고, 화상 종류마다 가장 먼저 할 처치를 이어 보세요.', [['열 화상', '흐르는 찬물로 식히기'], ['화학 화상', '흐르는 물로 충분히 씻어 내기'], ['전기 화상', '전원부터 끊기']], ['휴지로 문질러 닦기', '감전된 사람 잡아당기기'])),
            IT(MB('사례마다 화상 종류를 이어 보세요.', [['다리미에 손목이 닿음', '열 화상'], ['락스가 손등에 튐', '화학 화상'], ['젖은 손으로 콘센트를 만짐', '전기 화상']], []),
              MB('두 사례의 화상 종류를 이어 보세요.', [['다리미에 손목이 닿음', '열 화상'], ['젖은 손으로 콘센트를 만짐', '전기 화상']], []),
              MB('사례마다 화상 종류를 이어 보세요(헷갈리는 카드 포함).', [['다리미에 손목이 닿음', '열 화상'], ['락스가 손등에 튐', '화학 화상'], ['젖은 손으로 콘센트를 만짐', '전기 화상']], ['햇볕 화상만'])),
            IT(MB('화상 종류마다 처치 뒤 주의할 점을 이어 보세요.', [['열 화상', '물집은 터뜨리지 않기'], ['화학 화상', '약품 이름을 알려 진료받기'], ['전기 화상', '겉이 작아도 병원 가기']], []),
              MB('두 화상 종류의 주의할 점을 이어 보세요.', [['열 화상', '물집은 터뜨리지 않기'], ['전기 화상', '겉이 작아도 병원 가기']], []),
              MB('함정 카드는 빼고, 화상 종류마다 주의할 점을 이어 보세요.', [['열 화상', '물집은 터뜨리지 않기'], ['화학 화상', '약품 이름을 알려 진료받기'], ['전기 화상', '겉이 작아도 병원 가기']], ['된장 바르기', '얼음 바로 대기']),
              { conclude: '열 화상은 식히기, 화학 화상은 씻어 내기, 전기 화상은 전원 끊기가 먼저이고, 셋 다 바르지 않고 병원 판단을 해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '화상 종류마다 첫 처치를 써요.', columns: ['종류', '첫 처치'], cells: [['열', ''], ['화학', ''], ['전기', '']], answer: '흐르는 찬물로 식히기 / 흐르는 물로 씻어 내기 / 전원 끊기' }] },
      }),
      M('activity.diff-write', {
        title: '화상 처치 차이 설명문', method: '처치 차이 설명문', tool: 'rubric-writing', minutes: 15,
        levels: { easy: '문장 틀을 따라 두 종류(열·전기)의 처치 차이를 쓴다.', base: '세 종류의 원인·첫 처치·까닭을 세 문장으로 쓰고 기준표로 점검한다.', challenge: '마지막 문항에서 구하는 사람의 안전까지 넣어 쓰고 기준 하나를 더 점검한다.' },
        activity: {
          title: '화상 처치 차이 설명문', tool: 'rubric-writing',
          teacher: '"동생에게 설명한다면, \'화상은 찬물\'과 \'화상은 원인마다 먼저 할 일이 달라\' 가운데 무엇이 더 정확할까요?" 오늘 짝지은 표를 보며 설명문을 쓰게 한다. "처치만 쓰면 된다"는 학생에게 왜 다른지까지 써야 읽는 사람이 헷갈리지 않는다고 말해 준다.',
          task: '열·화학·전기 화상의 첫 처치가 어떻게 다른지 설명하는 짧은 글을 쓰고 기준표로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RW('열 화상과 전기 화상의 첫 처치 차이를 두 문장으로 쓰세요.',
              { topic: '열 화상과 전기 화상의 첫 처치가 어떻게 다른지 두 문장으로 쓰세요.', minChars: 25, maxChars: 160, minSentences: 2, maxSentences: 3, title: '두 화상 비교' },
              ['두 화상의 첫 처치를 썼다', '처치가 다른 까닭을 썼다', '틀린 처치를 하나 들었다'],
              { prompt: '틀을 따라 두 화상의 차이를 쓰세요.', starter: '열 화상은 먼저 ___. 전기 화상은 먼저 ___. ___ 때문이다.' }),
            RW('세 화상(열·화학·전기)의 첫 처치 차이를 세 문장으로 설명하세요.',
              { topic: '열·화학·전기 화상의 원인과 첫 처치가 어떻게 다른지 세 문장으로 설명하세요.', minChars: 40, maxChars: 240, minSentences: 3, maxSentences: 4, title: '화상 처치 설명문' },
              DIFF,
              { prompt: '틀을 따라 세 화상의 차이를 쓰세요.', starter: '열 화상은 ___. 화학 화상은 ___. 전기 화상은 ___.' },
              { prompt: '구하는 사람의 안전까지 넣어 세 화상의 차이를 설명하고 기준표를 모두 점검하세요.', toolOptions: { maxSentences: 5 }, add: ['구하는 사람이 지킬 안전을 썼다'] },
              { conclude: '화상은 원인에 따라 먼저 할 일이 달라요. 처치와 함께 그 까닭을 알아야 헷갈리지 않아요.' }),
            { prompt: '짝과 설명문을 바꿔 읽고, 빠진 화상 종류나 까닭이 있으면 알려 줘요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '세 화상의 첫 처치가 어떻게 다른지 세 문장으로 써요.' }] },
      }),

      // ---- 정리 ----
      M('wrap.case-order', {
        title: '시약 튄 사례 처치 차례', method: '사례 처치 장면 차례', tool: 'story', minutes: 9,
        levels: { easy: '처치 장면 3장을 차례로 놓는다.', base: '처치 장면 4장을 차례로 놓는다.', challenge: '\'휴지로 닦기\' 함정 장면을 빼고 4장을 차례로 놓은 뒤 병원 판단을 고른다.' },
        wrap: {
          teacher: '"과학실에서 시약이 튀었다면, 오늘 배운 차례대로 장면을 놓아 볼까요?" 학생이 장면을 다 놓으면 한 장씩 소리 내어 읽게 한다. "약품은 금방 닦으면 된다"는 말에는 닦기와 씻어 내기가 어떻게 다른지 다시 묻는다. 학생이 실제로 다친 일은 묻지 않는다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'story', options: { mode: 'order', slots: 4, title: '시약이 튀었어요', cards: [CHEM[2], CHEM[0], CHEM[3], CHEM[1]] }, prompt: '시약이 튄 사례의 처치 장면을 차례대로 놓아요.', target: { order: CHEM.map((c) => c.id) }, difficulty: 0.2 },
              { prompt: '시약이 튄 사례의 처치 장면 세 장을 차례대로 놓아요.', toolOptions: { slots: 3, cards: [CHEM[1], CHEM[2], CHEM[0]] }, target: { order: ['e1', 'e2', 'e3'] } },
              { prompt: '함정 장면은 빼고 시약이 튄 사례의 처치 장면을 차례대로 놓아요.', toolOptions: { cards: [CHEM[2], { id: 'x1', text: '휴지로 문질러 닦는다', motif: 'cloud' }, CHEM[0], CHEM[3], CHEM[1]] } }),
            { type: 'choice', prompt: '시약 화상을 씻은 뒤 병원에 갈 때 챙기면 좋은 것은?', options: ['약품 이름(병 이름표)', '실험 보고서', '아무것도 필요 없다'], answer: 0, difficulty: 0.2, explain: '어떤 약품인지 알면 알맞은 진료를 받을 수 있어요.' },
            { type: 'short', prompt: '세 화상 가운데 하나를 골라 첫 처치를 한 문장으로 써요.' },
          ],
        },
        worksheet: {
          title: '화상 종류별 처치',
          items: [
            { type: 'table', prompt: '시약이 튀었을 때 처치 차례를 써요.', columns: ['차례', '할 일'], cells: [['1', ''], ['2', ''], ['3', ''], ['4', '']], answer: '알리기, 흐르는 물로 씻기, 묻은 옷 벗기며 씻기, 약품 이름 챙겨 진료' },
            { type: 'choice', prompt: '화학약품이 튀었을 때 하지 않을 일은?', options: ['흐르는 물로 씻기', '휴지로 문질러 닦기'], answer: '휴지로 문질러 닦기' },
          ],
        },
      }),
      M('wrap.self-check', {
        title: '화상 종류 스스로 점검', method: '화상 종류 스스로 점검', tool: 'timer', minutes: 9,
        levels: { easy: '점검 항목 2개에 스스로 표시한다.', base: '점검 항목 3개에 스스로 표시한다.', challenge: '점검 항목 4개(구하는 사람 안전 포함)에 스스로 표시한다.' },
        wrap: {
          teacher: '"열·화학·전기, 세 화상의 첫 처치를 지금 바로 말할 수 있나요?" 점검 항목을 하나씩 읽고 말할 수 있는 것만 표시하게 한다. 표시 못 한 항목은 활동지 표를 다시 보며 채우게 한다. "헷갈려도 찬물이면 된다"는 학생에게 전기 화상만큼은 전원이 먼저라는 점을 다시 짚는다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'timer', options: { title: '화상 종류 점검' }, prompt: '오늘 배운 화상 종류별 처치를 스스로 점검해 표시해요.', target: { selfCheck: ['세 화상의 첫 처치를 말할 수 있다', '화학 화상은 닦지 않고 씻는 까닭을 안다', '전기 화상은 전원부터 끊는 까닭을 안다'] }, difficulty: 0.1 },
              { prompt: '오늘 배운 화상 처치 두 가지를 스스로 점검해 표시해요.', target: { selfCheck: ['세 화상의 첫 처치를 말할 수 있다', '전기 화상은 전원부터 끊는 까닭을 안다'] } },
              { prompt: '오늘 배운 화상 처치 네 가지를 스스로 점검해 표시해요.', target: { selfCheck: ['세 화상의 첫 처치를 말할 수 있다', '화학 화상은 닦지 않고 씻는 까닭을 안다', '전기 화상은 전원부터 끊는 까닭을 안다', '구하는 사람이 먼저 안전해야 하는 까닭을 안다'] } }),
            { type: 'choice', prompt: '전기 화상이 겉으로 작아 보여도 병원에 가는 까닭은?', options: ['겉보다 속이 더 다칠 수 있어서', '연고가 없어서', '학교 규칙이라서'], answer: 0, difficulty: 0.2, explain: '전기는 몸속을 지나며 다치게 할 수 있어요.' },
            { type: 'mood', prompt: '오늘 수업을 마친 내 마음은 어떤가요?' },
          ],
        },
        worksheet: {
          title: '화상 종류 점검',
          items: [
            { type: 'check', prompt: '내가 말할 수 있는 것에 표시해요.', options: ['열 화상 첫 처치', '화학 화상 첫 처치', '전기 화상 첫 처치', '구하는 사람의 안전'] },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '감전 사고에서는 사람을 만지기 전에 ___부터 끊어요.', answer: '전원' },
          ],
        },
      }),
    );
  }

  // ==== 9학년 · 가정 화재 대피 계획 세우기 (saf-disaster.m.home-escape) ====
  {
    const M = MK('home-escape', [9]);
    // 가상 자료 — 실제 통계가 아니다
    const HOURS = [['0~4시', 4], ['4~8시', 3], ['8~12시', 5], ['12~16시', 6], ['16~20시', 7], ['20~24시', 5]];
    // 예시 집(가상) 칸 지도 — 학생 집 구조를 묻지 않는다
    const HOME = { grid: [6, 4], title: '예시 집(가상) 평면', regions: [
      { name: '내 방', cells: [[0, 0], [1, 0]] }, { name: '베란다', cells: [[2, 0], [3, 0]] }, { name: '안방', cells: [[4, 0], [5, 0]] },
      { name: '거실', cells: [[0, 1], [1, 1], [2, 1], [3, 1]] }, { name: '부엌', cells: [[4, 1], [5, 1]] },
      { name: '현관', cells: [[0, 2]] }, { name: '복도 계단', cells: [[1, 2], [2, 2]] }, { name: '욕실', cells: [[3, 2]] }, { name: '작은방', cells: [[4, 2], [5, 2]] },
      { name: '아파트 앞 놀이터(집결 장소)', cells: [[0, 3], [1, 3], [2, 3]] }, { name: '주차장', cells: [[3, 3], [4, 3], [5, 3]] },
    ] };
    const D1 = { text: '한밤중, 화재경보기 소리와 탄 냄새에 잠이 깼다. 방문 틈으로 연기가 조금 들어온다.', ask: '먼저 무엇을 할까?', motif: 'house', choices: [
      { id: 'hide', text: '무서워서 이불을 덮고 침대 밑에 숨는다', result: '연기가 방 안에 점점 찬다.', impact: [{ who: '나', text: '빠져나오기 어려워진다', tone: -1 }], why: '연기가 나면 숨지 않고 알리고 나갈 길을 찾아요. 숨은 곳은 구조대도 찾기 어려워요.', ending: '숨어 있다가 연기에 갇힐 뻔했어요.' },
      { id: 'check', text: '"불이야!" 외치고 손등으로 방문 손잡이를 살짝 대 본다', result: '손잡이가 뜨겁다.', impact: [{ who: '가족', text: '불이 난 것을 안다', tone: 1 }], end: '알리고 손잡이를 확인했어요.',
        next: { text: '손잡이가 뜨겁다. 문 너머 거실에 불이 난 것 같다.', choices: [
          { id: 'open', text: '그래도 문을 열고 거실로 나간다', result: '문을 열자 연기와 열기가 확 밀려든다.', impact: [{ who: '나', text: '연기를 크게 마신다', tone: -1 }], why: '손잡이가 뜨거우면 문 너머에 불이 있어요. 열지 말고 다른 길을 찾아요.' },
          { id: 'block', text: '문을 닫아 둔 채 젖은 천으로 틈을 막고 다른 길을 찾는다', result: '연기가 덜 들어온다.', impact: [{ who: '나', text: '시간을 번다', tone: 1 }], end: '문틈을 막고 다른 길을 찾았어요.',
            next: { text: '방에는 창문이 있다. 휴대전화도 손에 있다.', choices: [
              { id: 'signal', text: '창문을 열고 밖에 도움을 외치며 119에 내 방 위치를 알린다', result: '구조대가 내 방 위치를 알고 출동한다.', impact: [{ who: '구조대', text: '빨리 찾는다', tone: 1 }] },
              { id: 'jump', text: '창문으로 뛰어내린다', result: '높은 층에서 뛰어내리면 크게 다친다.', impact: [{ who: '나', text: '크게 다칠 수 있다', tone: -1 }], why: '높은 곳에서 뛰어내리지 않고, 창가에서 위치를 알리며 구조를 기다려요.' }] } }] } },
      { id: 'cool', text: '"불이야!" 외치고 손잡이를 대 보니 뜨겁지 않다', result: '문 너머가 아직 괜찮아 보인다.', impact: [{ who: '가족', text: '불이 난 것을 안다', tone: 1 }], end: '알리고 손잡이를 확인했어요.',
        next: { text: '손잡이가 뜨겁지 않아 문을 살짝 열었다. 복도 천장 쪽에 연기가 깔려 있다.', choices: [
          { id: 'stand', text: '똑바로 서서 빨리 뛰어 현관으로 간다', result: '천장 쪽 연기를 마시며 기침이 난다.', impact: [{ who: '나', text: '연기를 마신다', tone: -1 }], why: '연기는 위로 모여요. 자세를 낮추고 코·입을 가려요.' },
          { id: 'low', text: '코·입을 가리고 자세를 낮춰 현관으로 나간다', result: '연기를 덜 마시며 현관에 닿는다.', impact: [{ who: '나', text: '빠져나온다', tone: 1 }], end: '낮은 자세로 나왔어요.',
            next: { text: '밖으로 나왔다. 동생이 "인형 가지러 다시 들어갈래"라고 한다.', choices: [
              { id: 'meet', text: '동생 손을 잡고 집결 장소로 가 가족을 확인하고 119에 신고한다', result: '가족이 모두 모였고 소방대가 출동한다.', impact: [{ who: '동생', text: '안전하다', tone: 1 }] },
              { id: 'back', text: '동생과 함께 다시 들어간다', result: '연기가 더 짙어져 있다.', impact: [{ who: '동생과 나', text: '위험한 곳으로 돌아간다', tone: -1 }], why: '한번 나왔으면 다시 들어가지 않아요.' }] } }] } }] };
    const R1 = [{ id: 'r1', text: '문 손잡이가 뜨거우면 열지 않고 다른 길을 찾는다' }, { id: 'r2', text: '연기는 위로 모이니 자세를 낮춰 나간다' },
      { id: 'r3', text: '연기가 나면 숨는 것이 안전하다', why: '숨으면 연기에 갇히고 구조대도 찾기 어려워요.' }, { id: 'r4', text: '빨리 나가려면 똑바로 서서 뛴다', why: '서 있으면 위로 모인 연기를 마셔요.' }];
    const R1MORE = { reasons: [{ id: 'r5', text: '한번 나왔으면 물건 때문에 다시 들어가지 않는다' }], ok: ['r5'] };
    const PLAN = ['방마다 두 갈래 대피로를 썼다', '집 밖 집결 장소를 썼다', '가족마다 맡을 역할을 썼다'];
    const HCHK = [{ id: 'h1', text: '화재경보기가 울리는지 시험 단추로 확인', ok: true }, { id: 'h2', text: '소화기 자리를 가족 모두 안다', ok: true },
      { id: 'h3', text: '현관·베란다 출구 앞에 짐이 없다', ok: true }, { id: 'h4', text: '멀티탭에 플러그를 겹겹이 꽂지 않았다', ok: true },
      { id: 'h5', text: '현관 비밀번호를 가족끼리 바꿔 쓴다' }, { id: 'h6', text: '화재경보기 건전지를 빼 두었다' }];
    const HDRILL = ['"불이야" 외쳐 가족 깨우기', '자세 낮추고 코·입 가리기', '정해 둔 출구로 나가기', '집결 장소에서 가족 확인'];
    const STORY = [{ id: 'p1', text: '화재경보기가 울린다', motif: 'star' }, { id: 'p2', text: '"불이야" 외쳐 가족을 깨운다', motif: 'house' },
      { id: 'p3', text: '방문 손잡이를 손등으로 확인한다', motif: 'leaf' }, { id: 'p4', text: '자세를 낮춰 정해 둔 출구로 나간다', motif: 'cloud' }, { id: 'p5', text: '집결 장소에서 가족을 확인하고 신고한다', motif: 'sun' }];

    ALL.push(
      // ---- 도입 ----
      M('intro.time-chart', {
        title: '시간대별 가정 화재 그래프', method: '예시 시간대별 가정 화재 그래프', tool: 'chart', minutes: 6,
        levels: { easy: '교사가 막대 4개(0~16시)만 짚으며 밤 시간 막대를 함께 찾는다.', base: '막대 6개를 읽고 밤 시간대 화재가 수는 적어도 대피가 어려운 까닭을 말한다.', challenge: '교사가 \'시간대별 다친 사람(가상)\'을 말로 덧붙이면 두 자료를 견주어 밤 대피 계획이 필요한 까닭을 말한다.' },
        intro: {
          teacher: '"이 그래프에서 불이 가장 적게 나는 때는 밤이에요. 그럼 밤에는 대피 계획이 필요 없을까요?" 가상 막대그래프를 띄우고 실제 통계가 아닌 예시 자료라고 밝힌다. 시연 단추로 0~4시 막대가 골라지는 모습을 보인다. "밤에는 불이 나지 않는다"는 말이 나오면 "자는 동안 불이 나면 누가 가장 먼저 알아챌까요?"라고 되묻는다.',
          student: '가상 그래프에서 밤 시간대 막대를 찾고, 수가 적어도 밤 화재가 더 위험할 수 있는 까닭을 짝에게 말해요.',
          demo: { tool: 'chart', options: { type: 'bar', mode: 'read', title: '시간대별 가정 화재(가상 예시 자료)', unit: '건', xLabel: '시간대', yLabel: '건수', data: HOURS, question: '자는 시간에 가장 가까운 막대는?', choices: HOURS.map((d) => d[0]) }, sequence: [{ pick: 0 }] },
          art: { draw: 'a paper-cut apartment at night with a smoke alarm glowing on the ceiling and a family asleep, a bar chart beside it', banner: '밤에 불이 나면?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '수치는 지어낸 예시다. 실제 자료는 소방청 국가화재정보시스템에서 교사가 찾아 바꾼다.',
      }),
      M('intro.home-map', {
        title: '예시 집 평면에 출구 표시', method: '우리 집 평면 칸 지도에 출구 표시', tool: 'map', minutes: 6,
        levels: { easy: '교사가 현관 출구 한 곳에 핀을 꽂아 보인다.', base: '내 방에서 나가는 두 갈래(현관·베란다)를 핀으로 짚는다.', challenge: '방마다 두 갈래가 있는지 학생이 짚으며 말한다.' },
        intro: {
          teacher: '"이 집에서 내 방에 불길이 막히면, 현관 말고 갈 곳이 있을까요?" 예시 집 칸 지도를 띄우고 시연 단추로 현관과 베란다에 핀이 꽂히는 모습을 보인다. "우리 집은 출구가 하나뿐이라 계획이 필요 없다"는 말이 나오면 "출구가 하나면 그 길이 막혔을 때 할 일을 더 꼼꼼히 정해야 하지 않을까요?"라고 되묻는다. 각자의 집 구조는 발표하지 않고 활동지에만 쓰게 한다.',
          student: '예시 집 지도에서 내 방에서 나가는 두 갈래 길을 찾아보고, 한쪽이 막히면 어디로 갈지 생각해요.',
          demo: { tool: 'map', options: HOME, sequence: [{ region: '현관' }, { region: '베란다' }] },
          art: { draw: 'a paper-cut floor plan of a small apartment seen from above with two exit arrows, one toward the front door and one toward the balcony', banner: '나가는 길은 두 갈래', extra: [{ motif: 'leaf', x: 300, y: 96 }] },
        },
        notes: '학생 집 구조·주소는 묻지 않는다. 베란다 대피 공간·경량 칸막이 유무는 집마다 달라 교사가 소방청 안내로 확인해 말한다.',
      }),

      // ---- 활동 ----
      M('activity.plan-write', {
        title: '가족 대피 계획서 쓰기', method: '가족 대피 계획서 쓰기', tool: 'rubric-writing', minutes: 15,
        levels: { easy: '문장 틀을 따라 대피로·집결 장소 두 항목을 쓴다.', base: '대피로·집결 장소·가족 역할 세 항목을 쓰고 기준표로 점검한다.', challenge: '마지막 문항에서 도움이 필요한 가족(어린 동생·어르신 등)을 위한 계획까지 넣고 기준 하나를 더 점검한다.' },
        activity: {
          title: '가족 대피 계획서 쓰기', tool: 'rubric-writing',
          teacher: '"\'불나면 나간다\'는 계획일까요? 어디로, 누구와, 어디서 만날지가 있어야 계획이에요." 예시 집 지도를 떠올리며 계획서를 쓰게 한다. "집결 장소는 집 앞 현관이면 된다"는 학생에게 "불이 난 건물 바로 앞에서 기다리면 안전할까요?"라고 되묻는다. 실제 주소·가족 이름은 쓰지 않고 \'보호자\', \'동생\'처럼 쓰게 한다.',
          task: '예시 집(또는 우리 집)을 떠올리며 대피로·집결 장소·가족 역할을 담은 가족 대피 계획서를 쓰고 기준표로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RW('내 방에서 나가는 두 갈래 대피로를 두 문장으로 쓰세요.',
              { topic: '내 방에서 나가는 두 갈래 대피로를 두 문장으로 쓰세요(주소는 쓰지 않아요).', minChars: 20, maxChars: 150, minSentences: 2, maxSentences: 3, title: '두 갈래 대피로' },
              ['첫째 길을 썼다', '첫째 길이 막혔을 때의 둘째 길을 썼다', '주소 대신 방 이름으로 썼다'],
              { prompt: '틀을 따라 두 갈래 대피로를 쓰세요.', starter: '첫째 길은 ___로 나간다. 그 길이 막히면 ___.' }),
            RW('가족이 집 밖에서 만날 집결 장소와 그곳을 고른 까닭을 쓰세요.',
              { topic: '가족이 집 밖에서 만날 집결 장소와 그곳을 고른 까닭을 두 문장으로 쓰세요.', minChars: 20, maxChars: 150, minSentences: 2, maxSentences: 3, title: '집결 장소' },
              ['집 밖 집결 장소를 썼다', '건물에서 떨어진 곳인지 썼다', '가족 모두 아는 곳인지 썼다'],
              { prompt: '틀을 따라 집결 장소를 쓰세요.', starter: '우리 가족은 ___에서 만난다. ___ 때문이다.' }),
            RW('대피로·집결 장소·가족 역할을 담은 가족 대피 계획서를 세 문장으로 쓰세요.',
              { topic: '가족 대피 계획서: 대피로·집결 장소·가족 역할을 세 문장으로 쓰세요(가족 이름 대신 \'보호자\', \'동생\'처럼).', minChars: 40, maxChars: 260, minSentences: 3, maxSentences: 5, title: '가족 대피 계획서' },
              PLAN,
              { prompt: '틀을 따라 가족 대피 계획서를 쓰세요.', starter: '대피로: ___. 집결 장소: ___. 역할: ___.' },
              { prompt: '도움이 필요한 가족을 위한 계획까지 넣어 계획서를 쓰고 기준표를 모두 점검하세요.', toolOptions: { maxSentences: 6 }, add: ['도움이 필요한 가족을 누가 도울지 썼다'] },
              { conclude: '가족 대피 계획은 두 갈래 길·집 밖 집결 장소·사람마다 역할이 있어야 실제로 움직일 수 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '우리 가족 대피 계획을 써요(주소·이름은 쓰지 않아요).', columns: ['칸', '내용'], cells: [['첫째 길', ''], ['둘째 길', ''], ['집결 장소', ''], ['내 역할', '']] }] },
        notes: '가정마다 사정이 다르므로 계획서는 발표하지 않고 집에 가져가 가족과 함께 고치게 한다.',
      }),
      M('activity.night-choice', {
        title: '밤중 연기 갈림길', method: '밤중 연기 갈림길', tool: 'dilemma', minutes: 15,
        levels: { easy: '갈림길 1번에서 고르고 결과를 본다(손잡이가 뜨거운 길과 아닌 길이 함께 있다).', base: '갈림길 2번을 끝까지 가 보고 근거 카드를 고른다.', challenge: '갈림길 3번까지 가 창가 구조 요청·다시 들어가지 않기까지 보고 근거 카드를 모두 고른다.' },
        activity: {
          title: '밤중 연기 갈림길', tool: 'dilemma',
          teacher: '"손잡이가 뜨거울 때와 뜨겁지 않을 때, 같은 문 앞에서 왜 다르게 해야 할까요?" 학생마다 한 길을 끝까지 가 본 뒤 되돌아가 손잡이가 다른 길도 가 보게 한다. "연기가 나면 침대 밑에 숨는 게 안전하다"는 학생에게 "숨은 사람을 연기 속에서 구조대가 찾을 수 있을까요?"라고 되묻는다. 높은 곳에서 뛰어내리지 않고 창가에서 위치를 알린다는 점도 짚는다.',
          task: '한밤중 연기에 깬 상황에서 길을 골라 결과를 따라가고, 끝에서 내 선택의 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL({ easy: '한밤중 연기에 깼어요. 한 번 골라 결과를 보세요.', base: '한밤중 연기에 깼어요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '한밤중 연기에 깼어요. 세 번 골라 끝까지 가고 근거를 모두 고르세요.' },
              '한밤중 연기', D1, [['check', 'block', 'signal'], ['cool', 'low', 'meet']], R1, ['r1', 'r2'], R1MORE),
            IT({ prompt: '같은 상황에서 서로 다른 끝 장면 두 개를 끝까지 가 보세요.', toolOptions: { title: '두 갈래 끝까지', scene: cut(D1, 2), reasons: [] }, target: { explore: 2 } },
              { prompt: '같은 상황에서 서로 다른 끝 장면 두 개를 가 보세요.', toolOptions: { scene: cut(D1, 1) } },
              { prompt: '같은 상황에서 서로 다른 끝 장면 세 개를 끝까지 가 보세요.', toolOptions: { scene: cut(D1, 3) }, target: { explore: 3 } }),
            { prompt: '짝과 손잡이가 뜨거울 때와 아닐 때 행동이 왜 달랐는지 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '방문 손잡이가 뜨거울 때 알맞은 행동은?', options: ['문을 열고 나간다', '문을 닫아 둔 채 틈을 막고 다른 길을 찾는다', '침대 밑에 숨는다'], answer: '문을 닫아 둔 채 틈을 막고 다른 길을 찾는다' }] },
        notes: '손잡이 확인·문틈 막기·창가 구조 요청은 일반 안내다. 교사가 소방청 가정 화재 대피 안내로 확인한다.',
      }),
      M('activity.home-check', {
        title: '가정 소방 점검', method: '가정 소방 점검', tool: 'kitchen', minutes: 15,
        levels: { easy: '점검 항목 4개(함정 없음)를 모두 표시한다.', base: '함정 2개가 섞인 항목 6개에서 해야 할 점검만 표시한다.', challenge: '마지막 문항에서 고칠 점 네 가지를 먼저 할 것부터 차례로 놓는다.' },
        activity: {
          title: '가정 소방 점검', tool: 'kitchen',
          teacher: '"우리 집 화재경보기는 지금 울릴 수 있을까요? 마지막으로 확인한 게 언제인가요?" 항목을 소리 내어 읽고 해야 할 점검만 표시하게 한다. "경보기가 시끄러워 건전지를 빼 두었다"는 말이 나오면 "자는 동안 연기를 맡고 깰 수 있을까요?"라고 되묻는다. 집 형편을 묻거나 비교하지 않고, 집에 가서 가족과 함께 해 볼 일이라고 말해 준다.',
          task: '가정 소방 점검 목록에서 해야 할 점검만 표시해요. 함정 항목은 표시하지 않아요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT(CL('가정 소방 점검으로 알맞은 것만 표시하세요.', '우리 집 소방 점검', HCHK),
              CL('가정 소방 점검을 모두 표시하세요.', '우리 집 소방 점검', HCHK.slice(0, 4))),
            IT(CL('잠들기 전 확인할 것만 표시하세요.', '잠들기 전 확인', [
              { id: 'n1', text: '가스 불이 꺼졌는지', ok: true }, { id: 'n2', text: '전기난로·다리미 전원이 꺼졌는지', ok: true }, { id: 'n3', text: '현관 앞 통로가 비었는지', ok: true },
              { id: 'n4', text: '충전기를 이불 위에 두기' }, { id: 'n5', text: '촛불 켜 둔 채 자기' }]),
              CL('잠들기 전 확인할 것을 모두 표시하세요.', '잠들기 전 확인', [{ id: 'n1', text: '가스 불이 꺼졌는지', ok: true }, { id: 'n2', text: '전기난로·다리미 전원이 꺼졌는지', ok: true }, { id: 'n3', text: '현관 앞 통로가 비었는지', ok: true }])),
            IT(CL('가족과 함께 정해 둘 것만 표시하세요.', '가족과 정할 것', [
              { id: 'f1', text: '집 밖 집결 장소', ok: true }, { id: 'f2', text: '방마다 두 갈래 대피로', ok: true }, { id: 'f3', text: '누가 누구를 도울지', ok: true },
              { id: 'f4', text: '불나면 챙길 귀중품 목록' }]),
              null,
              { prompt: '점검에서 찾은 고칠 점을 먼저 할 것부터 차례대로 놓으세요.', toolOptions: { mode: 'order', slots: 4, autoMotif: false, cards: [{ id: 'o3', text: '출구 앞 짐 치우기' }, { id: 'o1', text: '경보기 건전지 다시 넣기' }, { id: 'o4', text: '멀티탭 겹쳐 꽂기 풀기' }, { id: 'o2', text: '가족 집결 장소 정하기' }] }, target: { order: ['o1', 'o2', 'o3', 'o4'] } },
              { conclude: '가정 화재 대비는 경보기가 울리는지, 나갈 길이 비었는지, 가족이 어디서 만날지를 미리 확인하는 데서 시작해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'check', prompt: '집에 가서 가족과 함께 해 볼 점검에 표시해요.', options: ['화재경보기 시험 단추 누르기', '소화기 자리 확인', '출구 앞 짐 치우기', '집결 장소 정하기'] }] },
        notes: '고칠 순서는 수업용 예시다. 집마다 가장 급한 일이 다를 수 있다고 말해 준다.',
      }),
      M('activity.drill-run', {
        title: '가정 계획대로 대피 연습', method: '가정 계획대로 대피 연습', tool: 'timer', minutes: 15,
        levels: { easy: '계획 순서 카드 3장(깨우기·자세 낮추기·출구)을 차례로 놓는다.', base: '계획 순서 카드 4장을 놓고 교실에서 모의로 연습한 뒤 \'해 보았어요\'를 누른다.', challenge: '마지막 문항에서 첫째 길이 막힌 보조 경로 순서 카드를 놓고 다시 연습한다.' },
        activity: {
          title: '가정 계획대로 대피 연습', tool: 'timer',
          teacher: '"계획서에 쓴 대로 몸이 움직일까요? 교실을 우리 집이라 생각하고 연습해 봐요." 순서 카드를 놓은 뒤, 교실 문을 현관·창가를 베란다로 정해 모둠별로 모의 연습을 하게 한다. "집에서 연습하는 건 어색하다"는 학생에게 가족과 한 번만 걸어 봐도 실제 상황에서 길이 떠오른다고 말해 준다. 실제로 뛰거나 기어서 부딪히지 않게 공간을 넓게 비운다.',
          task: '가족 대피 계획 순서 카드를 차례로 놓고 교실에서 모의로 연습한 뒤 \'해 보았어요\'를 눌러요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT({ prompt: '가족 대피 계획 순서 카드를 차례대로 놓으세요.', toolOptions: { title: '우리 집 대피 순서', cards: [HDRILL[2], HDRILL[0], HDRILL[3], HDRILL[1]] }, target: { order: HDRILL } },
              { prompt: '가족 대피 계획 순서 카드 세 장을 차례대로 놓으세요.', toolOptions: { cards: [HDRILL[2], HDRILL[0], HDRILL[1]] }, target: { order: HDRILL.slice(0, 3) } }),
            { prompt: '교실을 예시 집으로 정해 모둠별로 모의 대피를 연습하고 돌아와 표시하세요.', free: true, toolOptions: { doneLabel: '모의 대피를 해 보았어요' } },
            IT({ prompt: '집결 장소에 모인 뒤 할 일을 차례대로 놓으세요.', toolOptions: { title: '집결 장소에서', cards: ['다시 들어가지 않고 소방대 기다리기', '가족이 다 왔는지 확인', '119에 신고(아직 안 했다면)'] }, target: { order: ['가족이 다 왔는지 확인', '119에 신고(아직 안 했다면)', '다시 들어가지 않고 소방대 기다리기'] } },
              null,
              { prompt: '현관 쪽이 막혔어요. 보조 경로 순서 카드를 차례대로 놓으세요.', toolOptions: { title: '보조 경로', cards: ['창가에서 위치 알리며 구조 기다리기', '방문 닫고 젖은 천으로 틈 막기', '"불이야" 외쳐 가족 깨우기'] }, target: { order: ['"불이야" 외쳐 가족 깨우기', '방문 닫고 젖은 천으로 틈 막기', '창가에서 위치 알리며 구조 기다리기'] } },
              { conclude: '대피 계획은 한 번이라도 몸으로 걸어 봐야 실제 상황에서 순서가 떠올라요. 첫째 길이 막힐 때의 순서도 연습해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '집에서 가족과 대피 연습을 한다면 언제, 어떻게 할지 한 문장으로 써요.' }] },
      }),

      // ---- 정리 ----
      M('wrap.role-map', {
        title: '가족 역할 연상 지도', method: '가족 역할 연상 지도', tool: 'mindmap', minutes: 9,
        levels: { easy: '역할 가지 2개(나·보호자)에 할 일 카드를 나눈다.', base: '역할 가지 3개(나·보호자·동생 돕기)에 할 일 카드를 나눈다.', challenge: '\'보호자가 없을 때\' 가지를 더해 4개로 나누고 대안을 정한다.' },
        wrap: {
          teacher: '"불이 나면 우리 가족은 누가 무엇을 맡을까요? 예시 가족으로 먼저 나눠 봐요." 학생이 다 나누면 \'보호자가 집에 없을 때\'를 물어 내가 맡을 일이 어떻게 바뀌는지 말하게 한다. "역할은 어른이 정하는 것"이라는 말에는 중학생인 내가 맡을 수 있는 일이 꼭 있다고 짚는다. 실제 가족 구성은 묻지 않는다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'mindmap', options: { mode: 'sort', topic: '예시 가족 대피', slots: ['나', '보호자', '동생 돕기'], cards: [
              { id: 'a1', text: '"불이야" 외쳐 깨우기' }, { id: 'a2', text: '집결 장소로 먼저 가 기다리기' }, { id: 'b1', text: '119에 신고하기' }, { id: 'b2', text: '할머니 부축해 나가기' },
              { id: 'c1', text: '동생 손잡고 함께 나가기' }, { id: 'c2', text: '동생이 다시 들어가지 않게 붙잡기' }] },
              prompt: '예시 가족의 할 일 카드를 역할 가지에 나눠요.', target: { sort: { 나: ['a1', 'a2'], 보호자: ['b1', 'b2'], '동생 돕기': ['c1', 'c2'] } }, difficulty: 0.25 },
            { prompt: '예시 가족의 할 일 카드를 두 역할 가지에 나눠요.', toolOptions: { slots: ['나', '보호자'], cards: [{ id: 'a1', text: '"불이야" 외쳐 깨우기' }, { id: 'a2', text: '집결 장소로 먼저 가 기다리기' }, { id: 'b1', text: '119에 신고하기' }, { id: 'b2', text: '할머니 부축해 나가기' }] }, target: { sort: { 나: ['a1', 'a2'], 보호자: ['b1', 'b2'] } } },
            { prompt: '보호자가 없을 때 가지까지 넣어 할 일 카드를 나눠요.', toolOptions: { slots: ['나', '보호자', '동생 돕기', '보호자가 없을 때'], cards: [
              { id: 'a1', text: '"불이야" 외쳐 깨우기' }, { id: 'a2', text: '집결 장소로 먼저 가 기다리기' }, { id: 'b1', text: '119에 신고하기' }, { id: 'b2', text: '할머니 부축해 나가기' },
              { id: 'c1', text: '동생 손잡고 함께 나가기' }, { id: 'c2', text: '동생이 다시 들어가지 않게 붙잡기' }, { id: 'd1', text: '밖에 나와 내가 119에 신고' }, { id: 'd2', text: '이웃 어른께 도움 청하기' }] },
              target: { sort: { 나: ['a1', 'a2'], 보호자: ['b1', 'b2'], '동생 돕기': ['c1', 'c2'], '보호자가 없을 때': ['d1', 'd2'] } } }),
            { type: 'choice', prompt: '"밤에는 불이 나지 않는다"는 말에 대한 반박으로 알맞은 것은?', options: ['밤에는 모두 깨어 있다', '밤에도 불이 나며, 자는 동안이라 알아채기 더 어렵다', '밤에는 소방서가 쉰다'], answer: 1, difficulty: 0.2, explain: '자는 동안 불이 나면 경보기와 계획이 더 중요해요.' },
            { type: 'short', prompt: '우리 가족 대피에서 내가 맡을 역할 하나를 써요.' },
          ],
        },
        worksheet: {
          title: '우리 가족 대피 역할',
          items: [
            { type: 'table', prompt: '우리 가족 대피 역할을 써요(이름 대신 \'보호자\', \'동생\'처럼).', columns: ['누가', '할 일'], cells: [['나', ''], ['보호자', ''], ['보호자가 없을 때', '']] },
            { type: 'short', prompt: '집에 가서 가족과 정할 것 한 가지를 써요.' },
          ],
        },
      }),
      M('wrap.plan-story', {
        title: '대피 계획 장면 정리', method: '대피 계획 장면 정리', tool: 'story', minutes: 9,
        levels: { easy: '계획 장면 3장을 차례로 놓는다.', base: '계획 장면 4장을 차례로 놓는다.', challenge: '계획 장면 5장을 차례로 놓고 가족에게 설명할 한 줄을 쓴다.' },
        wrap: {
          teacher: '"오늘 세운 계획을 가족에게 설명한다면 어떤 장면 순서로 말할까요?" 학생이 장면을 다 놓으면 짝에게 장면을 보며 30초 동안 설명해 보게 한다. "손잡이 확인은 빼도 된다"는 말에는 손잡이가 뜨거울 때 갈림길에서 무슨 일이 있었는지 다시 떠올리게 한다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'story', options: { mode: 'order', slots: 4, title: '우리 집 대피 계획', cards: [STORY[2], STORY[0], STORY[3], STORY[1]] }, prompt: '가족 대피 계획 장면을 차례대로 놓아요.', target: { order: ['p1', 'p2', 'p3', 'p4'] }, difficulty: 0.2 },
              { prompt: '가족 대피 계획 장면 세 장을 차례대로 놓아요.', toolOptions: { slots: 3, cards: [STORY[1], STORY[3], STORY[0]] }, target: { order: ['p1', 'p2', 'p4'] } },
              { prompt: '가족 대피 계획 장면 다섯 장을 차례대로 놓아요.', toolOptions: { slots: 5, cards: [STORY[4], STORY[2], STORY[0], STORY[3], STORY[1]] }, target: { order: ['p1', 'p2', 'p3', 'p4', 'p5'] } }),
            { type: 'choice', prompt: '가족이 집결 장소에 모였는데 한 명이 보이지 않는다면?', options: ['찾으러 다시 들어간다', '소방대에 그 사람이 안에 있을 수 있다고 알린다', '집에 갔겠지 하고 기다린다'], answer: 1, difficulty: 0.2, explain: '다시 들어가지 않고 구조대에 알려요.' },
            { type: 'short', prompt: '가족에게 우리 집 대피 계획을 설명할 한 줄을 써요.' },
          ],
        },
        worksheet: {
          title: '우리 집 대피 계획',
          items: [
            { type: 'table', prompt: '대피 계획 차례를 써요.', columns: ['차례', '할 일'], cells: [['1', ''], ['2', ''], ['3', ''], ['4', ''], ['5', '']], answer: '경보, 깨우기, 손잡이 확인, 낮은 자세로 출구, 집결·신고' },
            { type: 'short', prompt: '가족에게 대피 계획을 설명할 말을 두 문장으로 써요.' },
          ],
        },
      }),
    );
  }

  // ==== 9학년 · 테러 위협 유형별 대처와 신고 (saf-disaster.m.terror-threat) ====
  {
    const M = MK('terror-threat', [9]);
    // 가상 쇼핑몰 칸 지도(도상 훈련) — 위협 위치는 (위협)으로 밝힌다
    const MALL = { grid: [6, 4], title: '가상의 쇼핑몰 1층(도상 훈련)', regions: [
      { name: '북쪽 출구', cells: [[0, 0]] }, { name: '서점', cells: [[1, 0], [2, 0]] }, { name: '수상한 가방(위협)', cells: [[3, 0], [4, 0]] }, { name: '남쪽 계단', cells: [[5, 0]] },
      { name: '중앙 광장', cells: [[0, 1], [1, 1], [2, 1], [3, 1], [4, 1], [5, 1]] }, { name: '서쪽 출구', cells: [[0, 2]] }, { name: '직원 전용 창고', cells: [[1, 2], [2, 2]] },
      { name: '안내 데스크', cells: [[3, 2]] }, { name: '식당가', cells: [[4, 2], [5, 2]] }, { name: '바깥 공원 집결지', cells: [[0, 3], [1, 3], [2, 3]] }, { name: '지하 주차장 입구', cells: [[3, 3], [4, 3], [5, 3]] },
    ] };
    const MALL2 = Object.assign({}, MALL, { title: '가상의 쇼핑몰 1층(서쪽 출구가 막힘)', regions: MALL.regions.map((r) => (r.name === '서쪽 출구' ? { name: '막힌 서쪽 출구', cells: r.cells } : r)) });
    const D1 = { text: '역 대합실 의자 아래에 주인 없는 가방이 30분째 놓여 있다. 지퍼 틈으로 전선 같은 것이 보인다.', ask: '어떻게 할까?', motif: 'house', choices: [
      { id: 'open', text: '누구 것인지 보려고 가방을 열어 본다', result: '가방을 건드리는 순간 무슨 일이 생길지 아무도 모른다.', impact: [{ who: '대합실 사람들', text: '위험해진다', tone: -1 }], why: '수상한 물건은 만지거나 열지 않아요. 멀리 떨어져 알려요.', end: '가방을 열려다 위험했어요.',
        next: { text: '가방 안을 보던 중 역무원이 "만지지 마세요!"라고 외친다.', choices: [
          { id: 'keep', text: '조금만 더 본다', result: '역무원이 사람들을 급히 물린다.', impact: [{ who: '나', text: '가장 가까이 남는다', tone: -1 }] },
          { id: 'step', text: '손을 떼고 멀리 물러난다', result: '역무원이 주변을 막는다.', impact: [{ who: '나', text: '거리를 둔다', tone: 1 }] }] } },
      { id: 'photo', text: '사진을 찍어 단체방에 올린다', result: '사진이 퍼지며 "폭탄이래" 같은 말이 돈다.', impact: [{ who: '대합실 사람들', text: '혼란에 빠진다', tone: -1 }], why: '사진부터 찍어 올리면 혼란만 커지고 신고가 늦어져요. 거리를 두고 신고해요.', end: '사진을 올려 혼란이 커졌어요.',
        next: { text: '단체방에서 "진짜야? 가서 더 찍어 봐"라고 한다.', choices: [
          { id: 'closer', text: '더 가까이 가서 찍는다', result: '가방 바로 앞까지 다가간다.', impact: [{ who: '나', text: '위험해진다', tone: -1 }] },
          { id: 'report2', text: '찍기를 멈추고 역무원에게 알린다', result: '역무원이 안내를 시작한다.', impact: [{ who: '대합실 사람들', text: '안내를 받는다', tone: 1 }] }] } },
      { id: 'away', text: '만지지 않고 멀리 떨어진 뒤 역무원에게 알린다', result: '역무원이 가방 둘레를 비우고 신고한다.', impact: [{ who: '대합실 사람들', text: '거리를 둔다', tone: 1 }], end: '떨어져서 알렸어요.',
        next: { text: '역무원이 "직접 본 내용을 경찰에 말해 줄 수 있니?"라고 묻는다.', choices: [
          { id: 'vague', text: '"가방 같은 게 있어요"라고만 말한다', result: '경찰이 위치와 모양을 다시 물어야 한다.', impact: [{ who: '경찰', text: '확인이 늦어진다', tone: -1 }], why: '신고는 위치·모양·본 시각을 구체적으로 말해요.' },
          { id: 'detail', text: '"대합실 3번 의자 아래, 검은 가방, 30분 전부터, 전선이 보였다"고 말한다', result: '경찰이 바로 위치를 알고 대응한다.', impact: [{ who: '경찰', text: '빨리 대응한다', tone: 1 }], end: '위치·모양·시각을 말했어요.',
            next: { text: '역 안에 "안내에 따라 대피하세요"라는 방송이 나온다. 친구는 기차를 놓칠까 걱정한다.', choices: [
              { id: 'follow', text: '방송 안내대로 대피하고 기차 시간은 나중에 알아본다', result: '사람들이 질서 있게 역 밖으로 나간다.', impact: [{ who: '친구', text: '함께 안전하다', tone: 1 }] },
              { id: 'board', text: '방송을 무시하고 승강장으로 뛰어간다', result: '대피하는 사람들과 부딪친다.', impact: [{ who: '대피하는 사람들', text: '혼잡해진다', tone: -1 }], why: '위협 상황에서는 안내를 따르는 것이 모두를 지켜요.' }] } }] } }] };
    const R1 = [{ id: 'r1', text: '수상한 물건은 만지지 않고 멀리 떨어진다' }, { id: 'r2', text: '신고는 위치·모양·본 시각을 구체적으로 말한다' },
      { id: 'r3', text: '수상한 가방은 열어 확인해야 신고할 수 있다', why: '본 것만으로 신고할 수 있어요. 열지 않아요.' }, { id: 'r4', text: '신고는 확실할 때만 한다', why: '확실하지 않아도 알리면, 확인은 맡은 사람이 해요.' }];
    const R1MORE = { reasons: [{ id: 'r5', text: '대피 안내가 나오면 내 일정보다 안내를 따른다' }], ok: ['r5'] };
    const RPT = ['어디인지 구체적으로 썼다', '무엇을(모양·색·크기) 보았는지 썼다', '언제부터 보았는지 썼다'];
    const TORDER = ['물건에서 멀리 거리 두기', '반대쪽 출구로 대피하기', '안전한 곳에서 신고하기', '안내 방송·직원 안내 따르기'];
    const TCHK = [{ id: 'k1', text: '위협 위치 반대쪽 출구를 골랐다' }, { id: 'k2', text: '안전한 곳에서 신고하기로 정했다' }, { id: 'k3', text: '신고 내용(위치·모양·시각)을 정했다' },
      { id: 'k4', text: '사진 찍기보다 대피를 먼저 했다' }, { id: 'k5', text: '모둠이 안내에 따라 함께 움직였다' }];

    ALL.push(
      // ---- 도입 ----
      M('intro.scene-feel', {
        title: '수상한 상황 첫 판단', method: '수상한 상황 그림 첫 판단', tool: 'emotion', minutes: 6,
        levels: { easy: '교사가 장면 2개(대합실 가방·공원 벤치 도시락 가방)를 차례로 읽고 학생이 손을 들어 고른다.', base: '장면 3개를 차례로 보며 괜찮다/이상하다/모르겠다를 고르고 까닭을 말한다.', challenge: '세 장면을 견주어 무엇이 \'이상하다\'의 기준이었는지 말한다.' },
        intro: {
          teacher: '"이 장면, 괜찮아 보이나요, 이상해 보이나요?" 첫 장면을 판에 띄우고 손을 들어 고르게 한 뒤 시연 단추로 \'이상하다\'가 골라지는 모습을 보인다. 나머지 장면(공원 벤치의 도시락 가방, 지하철 선반의 우산)은 교사가 말로 바꿔 읽는다. "주인 없는 가방은 다 위험하다"는 말에는 "언제부터 있었는지, 무엇이 보이는지에 따라 판단이 달라질까요?"라고 되묻는다. 실제 사건 이야기는 꺼내지 않는다.',
          student: '장면을 보고 괜찮은지, 이상한지 첫 판단을 골라요. 그렇게 고른 까닭을 짝에게 한 줄로 말해요.',
          demo: { tool: 'emotion', options: { mode: 'branch', situation: '역 대합실 의자 아래에 주인 없는 가방이 30분째 놓여 있고, 지퍼 틈으로 전선 같은 것이 보인다.', ask: '이 장면은 어떤가요?', motif: 'house', choices: [
            { id: 'fine', text: '괜찮다', result: '그냥 지나치면 아무도 알리지 않을 수 있다.' }, { id: 'odd', text: '이상하다', result: '오래 놓였고 전선이 보여 알릴 만하다.' }, { id: 'unsure', text: '모르겠다', result: '모를 때도 만지지 않고 직원에게 물어볼 수 있다.' }] }, sequence: [{ choice: 'odd' }] },
          art: { draw: 'a paper-cut railway station waiting room with an unattended black bag under a bench and people walking by', banner: '괜찮을까, 이상할까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '실제 테러 사건·특정 집단을 언급하지 않는다. 학생의 불안을 키우지 않도록 \'알아보고 알리기\'에 초점을 둔다.',
      }),
      M('intro.threat-map', {
        title: '위협 유형 연상 지도', method: '위협 유형 연상 지도', tool: 'mindmap', minutes: 6,
        levels: { easy: '교사가 가지 2개(물건·상황)에 신호 카드를 함께 붙인다.', base: '가지 3개(물건·사람·상황)에 알아볼 신호를 붙인다.', challenge: '가지마다 내가 할 대처를 한 가지씩 덧붙여 말한다.' },
        intro: {
          teacher: '"\'수상하다\'는 느낌은 어디에서 올까요? 물건·사람·상황으로 나눠 볼까요?" 시연 단추로 신호 카드가 가지에 붙는 모습을 보인다. 공식 행동요령은 교사가 국민재난안전포털·경찰청의 최신 자료로 보여 준다. "옷차림이나 생김새로 수상한 사람을 알 수 있다"는 말이 나오면 "겉모습이 아니라 어떤 행동이 이상한지를 봐야 하지 않을까요?"라고 되묻는다.',
          student: '\'테러 위협\' 가지에 물건·사람·상황으로 알아볼 신호를 붙이고, 그 신호를 보면 할 일 하나를 말해요.',
          demo: { tool: 'mindmap', options: { mode: 'sort', topic: '테러 위협', slots: ['물건', '사람', '상황'], cards: [
            { id: 'o1', text: '오래 놓인 주인 없는 가방' }, { id: 'p1', text: '출입 막힌 곳을 계속 살피는 행동' }, { id: 's1', text: '갑자기 퍼지는 이상한 냄새' }, { id: 'o2', text: '전선이 보이는 상자' }] }, sequence: [{ sort: { 물건: ['o1', 'o2'], 사람: ['p1'], 상황: ['s1'] } }] },
          art: { draw: 'a paper-cut mind map with three branches showing an unattended bag, a figure peeking around a closed door and a cloud of strange smell in a hallway', banner: '무엇이 위협 신호일까?', extra: [{ motif: 'leaf', x: 300, y: 96 }] },
        },
        notes: '사람 신호는 겉모습(옷차림·생김새·국적)이 아니라 행동으로만 다룬다.',
      }),

      // ---- 활동 ----
      M('activity.bag-choice', {
        title: '주인 없는 가방 갈림길', method: '주인 없는 가방 갈림길', tool: 'dilemma', minutes: 15,
        levels: { easy: '갈림길 1번에서 고르고 결과를 본다.', base: '갈림길 2번을 끝까지 가 보고 근거 카드를 고른다.', challenge: '갈림길 3번(대피 방송)까지 가고 근거 카드를 모두 고른 뒤, 다른 길의 결과와 견준다.' },
        activity: {
          title: '주인 없는 가방 갈림길', tool: 'dilemma',
          teacher: '"사진부터 찍어 올리는 것과 역무원에게 알리는 것, 어느 쪽이 대합실 사람들을 지킬까요?" 한 길을 끝까지 가 본 뒤 다른 길과 견주게 한다. "확실하지 않은데 신고하면 혼난다"는 학생에게 "확인은 누가 맡는 일일까요?"라고 되묻는다. 신고 문장에 위치·모양·시각이 왜 필요한지 끝 장면에서 짚는다.',
          task: '역 대합실의 주인 없는 가방 앞에서 길을 골라 결과를 따라가고, 끝에서 내 선택의 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL({ easy: '대합실에 주인 없는 가방이 있어요. 한 번 골라 결과를 보세요.', base: '대합실에 주인 없는 가방이 있어요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '대합실에 주인 없는 가방이 있어요. 세 번 골라 대피 방송까지 가고 근거를 모두 고르세요.' },
              '역 대합실 가방', D1, [['away', 'detail', 'follow']], R1, ['r1', 'r2'], R1MORE),
            IT({ prompt: '대합실 가방 상황에서 서로 다른 끝 장면 두 개를 끝까지 가 보며 결과를 견주세요.', toolOptions: { title: '다른 길도 끝까지', scene: cut(D1, 2), reasons: [] }, target: { explore: 2 } },
              { prompt: '대합실 가방 상황에서 서로 다른 끝 장면 두 개를 가 보세요.', toolOptions: { scene: cut(D1, 1) } },
              { prompt: '대합실 가방 상황에서 서로 다른 끝 장면 세 개를 끝까지 가 보세요.', toolOptions: { scene: cut(D1, 3) }, target: { explore: 3 } }),
            { prompt: '짝과 "사진부터 찍기"가 왜 위험한지 두 가지 까닭을 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '수상한 가방을 보았을 때 가장 알맞은 행동은?', options: ['열어서 확인한다', '사진을 찍어 올린다', '만지지 않고 멀리 떨어져 알린다'], answer: '만지지 않고 멀리 떨어져 알린다' }] },
      }),
      M('activity.report-write', {
        title: '수상한 물건 신고 문장', method: '신고 문장 쓰고 점검', tool: 'rubric-writing', minutes: 15,
        levels: { easy: '문장 틀의 빈칸(어디·무엇·언제)을 채워 쓴다.', base: '신고 문장을 직접 쓰고 기준 3개(위치·모양·시각)를 점검한다.', challenge: '마지막 문항에서 주변 사람에게 알리는 말까지 더해 쓰고 기준 하나를 더 점검한다.' },
        activity: {
          title: '수상한 물건 신고 문장', tool: 'rubric-writing',
          teacher: '"\'이상한 게 있어요\'만 들으면 출동하는 사람은 어디로 가야 할지 알까요?" 가상 장면마다 위치·모양·시각을 넣어 쓰게 한다. "추측도 함께 말해야 한다"는 학생에게 본 것(사실)과 짐작은 나누어, 본 것을 먼저 말한다고 짚는다. 실제 장소 이름 대신 가상 장소를 쓰게 한다.',
          task: '가상 장면을 보고 위치·모양·시각을 담은 신고 문장을 쓰고 기준표로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RW('가상 장면의 신고 문장을 쓰세요: 쇼핑몰 1층 서점 앞에 검은 상자가 1시간째 놓여 있다.',
              { topic: '가상 쇼핑몰 1층 서점 앞에 검은 상자가 1시간째 놓여 있어요. 신고 문장을 쓰세요.', minChars: 25, maxChars: 160, minSentences: 2, maxSentences: 4, title: '신고 문장' },
              RPT, { prompt: '틀을 따라 서점 앞 장면의 신고 문장을 쓰세요.', starter: '___에 ___이 있어요. ___부터 놓여 있었어요.' }),
            RW('가상 장면의 신고 문장을 쓰세요: 지하철역 화장실 앞에 줄이 나온 종이 상자가 아침부터 있다.',
              { topic: '가상 지하철역 화장실 앞에 줄이 삐져나온 종이 상자가 아침부터 있어요. 신고 문장을 쓰세요.', minChars: 25, maxChars: 160, minSentences: 2, maxSentences: 4, title: '신고 문장' },
              RPT, { prompt: '틀을 따라 지하철역 장면의 신고 문장을 쓰세요.', starter: '___에 ___이 있어요. ___부터 있었어요.' }),
            RW('신고한 뒤 둘레 사람들에게 알리는 말을 두 문장으로 쓰세요.',
              { topic: '수상한 상자를 신고한 뒤 둘레 사람들에게 알리는 말을 두 문장으로 쓰세요.', minChars: 20, maxChars: 140, minSentences: 2, maxSentences: 3, title: '둘레에 알리기' },
              ['무엇이 있는지 짧게 알렸다', '어떻게 하라고(떨어지기) 썼다', '겁주는 말 대신 침착한 말로 썼다'],
              { prompt: '틀을 따라 둘레에 알리는 말을 쓰세요.', starter: '저기 수상한 ___이 있어요. ___로 떨어져 주세요.' },
              { prompt: '신고 문장과 둘레에 알리는 말을 이어서 쓰고 기준표를 모두 점검하세요.', toolOptions: { minSentences: 3, maxSentences: 5 }, add: ['신고 문장과 알리는 말을 모두 썼다'] },
              { conclude: '신고는 위치·모양·시각을 본 대로 말하고, 신고한 뒤에는 둘레 사람을 침착하게 떨어지게 해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '신고 문장에 넣을 것을 써요(가상 장면).', columns: ['칸', '내용'], cells: [['어디', ''], ['무엇(모양·색)', ''], ['언제부터', '']] }] },
      }),
      M('activity.tabletop-map', {
        title: '쇼핑몰 도상 훈련 대피 경로', method: '도상 훈련: 쇼핑몰 지도 대피 경로', tool: 'map', minutes: 15,
        levels: { easy: '핀을 놓으면 칸 이름이 바로 읽히고, 반대쪽 출구·집결지 두 곳만 꽂는다.', base: '반대쪽 출구·집결지·잠시 몸을 숨길 곳을 차례로 꽂는다.', challenge: '마지막 문항에서 서쪽 출구가 막힌 지도로 다른 출구를 다시 정한다.' },
        activity: {
          title: '쇼핑몰 도상 훈련 대피 경로', tool: 'map',
          teacher: '"위협이 있는 곳에서 가장 먼 출구는 어디일까요? 가장 가까운 출구가 늘 답일까요?" 지도에서 (위협) 칸을 먼저 손으로 짚게 한 뒤 핀을 꽂게 한다. "지하 주차장으로 내려가면 숨기 좋다"는 학생에게 "나갈 길이 하나뿐인 곳에 갇히면 어떻게 될까요?"라고 되묻는다. 바로 나갈 수 없을 때만 문이 닫히는 곳에 잠시 몸을 숨긴다고 짚는다.',
          task: '가상 쇼핑몰 칸 지도에서 위협 위치를 보고 반대쪽 출구·숨을 곳·집결지를 핀으로 정해요.',
          levels: { easy: { readout: true }, base: {}, challenge: {} },
          items: [
            PIN('위협 위치에서 먼 반대쪽 출구에 핀을 꽂으세요.', MALL, { region: '서쪽 출구' }),
            PIN('밖으로 나간 뒤 모일 곳에 핀을 꽂으세요.', MALL, { region: '바깥 공원 집결지' }),
            PIN('바로 나갈 수 없을 때 잠시 몸을 숨길, 문이 닫히는 곳에 핀을 꽂으세요.', MALL, { region: '직원 전용 창고' }, { toolOptions: Object.assign({}, MALL, { ask: { q: '숨을 곳으로 지하 주차장이 알맞지 않은 까닭은?', choices: ['나갈 길이 적어 갇힐 수 있다', '어둡다', '너무 멀다'] } }), target: { region: '직원 전용 창고', pick: 0 } }),
            IT(PIN('신고는 어디에서 하면 좋을지, 알맞은 곳에 핀을 꽂으세요.', MALL, { region: '바깥 공원 집결지' }),
              null,
              { prompt: '서쪽 출구가 막혔어요. 위협을 지나지 않고 나갈 다른 출구에 핀을 꽂으세요.', toolOptions: MALL2, target: { region: '북쪽 출구' } },
              { conclude: '위협이 있으면 그곳에서 먼 출구로 나가고, 바로 못 나가면 문이 닫히는 곳에 숨었다가 안전한 곳에서 신고해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '도상 훈련에서 정한 곳을 써요.', columns: ['칸', '정한 곳'], cells: [['나갈 출구', ''], ['숨을 곳', ''], ['집결지', '']] }] },
        notes: '도상 훈련(지도 위 훈련)이다. \'숨기\'는 바로 대피할 수 없을 때의 대안으로만 다룬다. 공식 행동요령은 교사가 확인한다.',
      }),
      M('activity.tabletop-order', {
        title: '도상 훈련 행동 순서', method: '도상 훈련 행동 순서', tool: 'timer', minutes: 15,
        levels: { easy: '행동 순서 카드 3장(거리 두기·대피·신고)을 차례로 놓는다.', base: '행동 순서 카드 4장을 놓고 모둠이 지도 위에서 짚어 보며 \'해 보았어요\'를 누른다.', challenge: '마지막 문항에서 모둠 역할(알리기·안내·신고)을 나누어 맡는 차례를 놓는다.' },
        activity: {
          title: '도상 훈련 행동 순서', tool: 'timer',
          teacher: '"수상한 물건을 본 뒤, 신고와 대피 가운데 무엇이 먼저일까요?" 순서 카드를 놓은 뒤 모둠별로 쇼핑몰 지도를 펼쳐 손가락으로 길을 짚어 보게 한다. "그 자리에서 바로 신고하면 빠르다"는 학생에게 "물건 바로 옆에서 전화하는 동안 나는 어디에 있게 될까요?"라고 되묻는다. 순서마다 걸리는 말 한 줄(\'떨어져!\', \'이쪽으로!\')을 함께 정하게 한다.',
          task: '위협 상황의 행동 순서 카드를 차례로 놓고, 모둠이 지도 위에서 짚어 본 뒤 \'해 보았어요\'를 눌러요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT({ prompt: '위협 상황의 행동 순서 카드를 차례대로 놓으세요.', toolOptions: { title: '위협 상황 행동 순서', cards: [TORDER[2], TORDER[0], TORDER[3], TORDER[1]] }, target: { order: TORDER } },
              { prompt: '위협 상황의 행동 순서 카드 세 장을 차례대로 놓으세요.', toolOptions: { cards: [TORDER[2], TORDER[0], TORDER[1]] }, target: { order: TORDER.slice(0, 3) } }),
            { prompt: '모둠이 쇼핑몰 지도 위에서 손가락으로 길을 짚으며 순서대로 말해 보고 표시하세요.', free: true, toolOptions: { doneLabel: '지도 위에서 짚어 보았어요' } },
            IT({ prompt: '신고 전화에서 말할 차례를 놓으세요.', toolOptions: { title: '신고 전화', cards: ['본 시각', '정확한 위치', '물건의 모양·색'] }, target: { order: ['정확한 위치', '물건의 모양·색', '본 시각'] } },
              null,
              { prompt: '모둠 역할을 맡는 차례대로 놓으세요.', toolOptions: { title: '모둠 역할 차례', cards: ['신고 담당: 집결지에서 신고', '알리기 담당: "떨어져!" 외치기', '안내 담당: 반대쪽 출구로 이끌기'] }, target: { order: ['알리기 담당: "떨어져!" 외치기', '안내 담당: 반대쪽 출구로 이끌기', '신고 담당: 집결지에서 신고'] } },
              { conclude: '위협 상황에서는 거리 두기 → 반대쪽 출구 대피 → 안전한 곳에서 신고 → 안내 따르기 차례를 지켜요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '위협 상황 행동 순서를 써요.', columns: ['차례', '할 일'], cells: [['1', ''], ['2', ''], ['3', ''], ['4', '']], answer: '거리 두기, 반대쪽 출구로 대피, 안전한 곳에서 신고, 안내 따르기' }] },
      }),

      // ---- 정리 ----
      M('wrap.campaign', {
        title: '신고 캠페인 포스터', method: '신고 캠페인 포스터', tool: 'collage', minutes: 9,
        levels: { easy: '모양 조각 3개 이상으로 포스터 바탕을 꾸민다.', base: '모양 조각 5개 이상으로 꾸미고 점검 항목 3개를 표시한다.', challenge: '조각 5개 이상에 문구 놓을 자리를 비워 두고, 활동지에 문구를 직접 쓴다.' },
        wrap: {
          teacher: '"\'만지지 말고, 멀리, 신고\' 세 마디를 한눈에 보여 주려면 어떤 모양이 좋을까요?" 조각으로 포스터 바탕을 꾸미고 문구는 활동지에 쓰게 한다(교구에는 글자를 넣을 수 없다). "무서운 그림이어야 사람들이 본다"는 학생에게 겁주는 그림보다 무엇을 할지 보이는 그림이 행동을 바꾼다고 말해 준다. 실제 사건·인물·특정 집단을 떠올리게 하는 그림은 쓰지 않는다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'collage', options: { maxPieces: 12 }, prompt: '모양 조각으로 "만지지 말고, 멀리, 신고" 캠페인 포스터 바탕을 꾸미고 점검해요.', target: { selfCheck: ['세 마디(만지지 말고·멀리·신고)를 보여 줄 모양을 골랐다', '겁주는 그림 대신 할 일이 보이게 했다', '문구를 놓을 자리를 비워 두었다'], minPieces: 5 }, difficulty: 0.2 },
              { prompt: '모양 조각 3개 이상으로 캠페인 포스터 바탕을 꾸미고 점검해요.', target: { selfCheck: ['할 일이 보이게 꾸몄다', '겁주는 그림을 쓰지 않았다'], minPieces: 3 } },
              { prompt: '조각 5개 이상으로 꾸미고 문구 자리를 정해 점검해요.', target: { selfCheck: ['세 마디(만지지 말고·멀리·신고)를 보여 줄 모양을 골랐다', '겁주는 그림 대신 할 일이 보이게 했다', '문구를 놓을 자리를 비워 두었다', '활동지에 문구를 직접 썼다'], minPieces: 5 } }),
            { type: 'choice', prompt: '캠페인 문구로 가장 알맞은 것은?', options: ['수상한 사람을 조심하세요!', '수상한 물건, 만지지 말고 멀리서 신고해요', '테러는 무서워요'], answer: 1, difficulty: 0.2, explain: '할 행동(만지지 않기·거리·신고)이 들어가야 해요.' },
            { type: 'short', prompt: '내 포스터에 넣을 캠페인 문구 한 줄을 써요.' },
          ],
        },
        worksheet: {
          title: '신고 캠페인 포스터',
          items: [
            { type: 'short', prompt: '내 포스터의 캠페인 문구를 써요("만지지 말고, 멀리, 신고"가 드러나게).' },
            { type: 'check', prompt: '내 포스터를 점검해요.', options: ['할 일이 보인다', '겁주는 그림이 없다', '특정 사람·집단을 그리지 않았다'] },
          ],
        },
      }),
      M('wrap.tabletop-check', {
        title: '테러 도상 훈련 점검표', method: '도상 훈련 점검표', tool: 'kitchen', minutes: 9,
        levels: { easy: '점검 항목 3개에 내가 한 것을 표시한다.', base: '점검 항목 4개에 내가 한 것을 표시한다.', challenge: '점검 항목 5개에 내가 한 것을 표시한다.' },
        wrap: {
          teacher: '"오늘 지도 위에서 내가 정말로 한 판단에만 표시해 볼까요?" 점검 항목을 한 줄씩 읽어 주고 스스로 표시하게 한다. "다 했어요"만 말하는 학생에게 "신고 내용 세 가지를 지금 말해 볼 수 있나요?"라고 되묻는다. 불안해하는 학생이 있으면 오늘 배운 행동이 바로 불안을 줄이는 방법이라고 말해 준다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title: '오늘 도상 훈련', items: TCHK.slice(0, 4) }, prompt: '오늘 도상 훈련에서 내가 한 것에 스스로 표시해요.', target: { selfCheck: true }, difficulty: 0.1 },
              { prompt: '오늘 도상 훈련에서 내가 한 것 세 가지에 표시해요.', toolOptions: { items: TCHK.slice(0, 3) } },
              { prompt: '오늘 도상 훈련에서 내가 한 것 다섯 가지에 표시해요.', toolOptions: { items: TCHK } }),
            { type: 'choice', prompt: '위협이 있는 쇼핑몰에서 숨을 곳으로 알맞은 곳은?', options: ['나갈 길이 하나뿐인 지하 주차장', '문이 닫히는 방(바로 나갈 수 없을 때)', '위협 바로 옆 가게'], answer: 1, difficulty: 0.2, explain: '바로 나갈 수 없을 때만 문이 닫히는 곳에 잠시 숨어요.' },
            { type: 'short', prompt: '수상한 물건을 신고할 때 말할 세 가지를 써요.' },
          ],
        },
        worksheet: {
          title: '테러 대피 도상 훈련 돌아보기',
          items: [
            { type: 'check', prompt: '오늘 내가 한 것에 표시해요.', options: ['반대쪽 출구 고르기', '숨을 곳 고르기', '신고 내용 정하기'] },
            { type: 'short', prompt: '다음 도상 훈련에서 더 해 볼 것 하나를 써요.' },
          ],
        },
      }),
    );
  }

  // ==== 9학년 · 재난문자 종류 읽고 행동 정하기 (saf-disaster.m.disaster-text) ====
  {
    const M = MK('disaster-text', [9]);
    // 가상 자료 — 종류 이름은 교사가 공식 기준(행정안전부 안내)으로 확인해 설명한다
    const KINDS = [['위급재난문자', 1], ['긴급재난문자', 2], ['안전안내문자', 5]];
    const MSGS = [{ id: 'm1', text: '오전 7시 · 호우 주의 안내' }, { id: 'm2', text: '오후 1시 · 하천변 출입 통제' }, { id: 'm3', text: '오후 4시 · 산사태 우려 대피 안내' }, { id: 'm4', text: '오후 8시 · 비 그친 뒤 피해 신고 안내' }];
    const D1 = { text: '오후 3시, "[안전안내] 호우로 하천 수위 상승 중. 하천변·지하차도 이용 자제 바랍니다" 문자가 왔다. 학원은 하천 건너편이다.', ask: '어떻게 할까?', motif: 'rain', choices: [
      { id: 'skip', text: '문자를 읽지 않고 넘긴 채 평소처럼 하천변으로 간다', result: '하천변 길이 통제선으로 막혀 있다.', impact: [{ who: '나', text: '위험한 길에 선다', tone: -1 }], why: '재난문자는 끝까지 읽고, 내가 있는 곳과 가는 길에 맞춰 행동을 정해요.', end: '읽지 않고 갔다가 막힌 길을 만났어요.',
        next: { text: '통제선 너머 길이 물에 조금 잠겨 있다. 친구가 "여기만 건너면 금방이야"라고 한다.', choices: [
          { id: 'cross', text: '통제선을 넘어 건넌다', result: '물살에 발이 미끄러진다.', impact: [{ who: '나', text: '휩쓸릴 수 있다', tone: -1 }] },
          { id: 'turn', text: '되돌아가 높은 길로 돌아간다', result: '조금 늦지만 안전하다.', impact: [{ who: '나', text: '위험을 피한다', tone: 1 }] }] } },
      { id: 'read', text: '문자를 끝까지 읽고 하천변·지하차도를 피해 갈 길을 정한다', result: '하천을 건너는 다리 대신 큰길 육교를 고른다.', impact: [{ who: '나', text: '안전한 길로 간다', tone: 1 }], end: '문자를 읽고 길을 바꿨어요.',
        next: { text: '학원에 가는 중 보호자에게서 "괜찮니?"라는 연락이 왔다.', choices: [
          { id: 'ok', text: '"응" 한 글자만 보낸다', result: '보호자는 어디로 가는지 몰라 걱정한다.', impact: [{ who: '보호자', text: '걱정한다', tone: -1 }], why: '어디로, 어떤 길로 가는지 알리면 가족이 안심하고 필요하면 도울 수 있어요.' },
          { id: 'tell', text: '받은 문자 내용과 내가 고른 길을 함께 알린다', result: '보호자가 안심하고 "도착하면 연락해"라고 한다.', impact: [{ who: '보호자', text: '안심한다', tone: 1 }], end: '가족에게 길을 알렸어요.',
            next: { text: '학원 수업 중 "[긴급재난] 산사태 우려, ○○동 주민은 즉시 대피소로 대피" 문자가 왔다. 학원은 ○○동이 아니다.', choices: [
              { id: 'ignore', text: '우리 동네가 아니니 그냥 넘긴다', result: '집이 ○○동 옆이라는 것을 나중에 알게 된다.', impact: [{ who: '가족', text: '대비가 늦어진다', tone: -1 }], why: '내 지역이 아니어도 집·가족이 있는 곳, 가는 길과 관계가 있는지 확인해요.' },
              { id: 'check', text: '집과 가족이 있는 곳과 관계가 있는지 확인하고 가족에게 전한다', result: '가족이 대피소 위치를 미리 확인한다.', impact: [{ who: '가족', text: '미리 대비한다', tone: 1 }] }] } }] } },
      { id: 'panic', text: '무서워서 단체방에 "큰일 났대!"라고만 올린다', result: '친구들이 놀라 서로 다른 말을 퍼뜨린다.', impact: [{ who: '친구들', text: '혼란스럽다', tone: -1 }], why: '문자 내용을 그대로 정확히 전해야 혼란이 줄어요.', ending: '내용 없이 퍼뜨려 혼란만 커졌어요.' }] };
    const R1 = [{ id: 'r1', text: '재난문자는 끝까지 읽고 위치·시간·행동 정보를 찾는다' }, { id: 'r2', text: '받은 내용과 내 행동을 가족에게 정확히 전한다' },
      { id: 'r3', text: '재난문자는 다 똑같으니 넘겨도 된다', why: '문자마다 지역·위험·행동이 달라요.' }, { id: 'r4', text: '내 지역이 아니면 상관없다', why: '가족·집·가는 길과 관계가 있을 수 있어요.' }];
    const R1MORE = { reasons: [{ id: 'r5', text: '다른 지역 문자도 집·가족과 관계있는지 확인한다' }], ok: ['r5'] };
    const RELAY = ['무슨 위험인지 썼다', '어디·언제인지 썼다', '가족이 할 행동을 썼다'];
    const SET = [{ id: 's1', text: '재난문자 수신 설정이 켜져 있다' }, { id: 's2', text: '가족 비상 연락 방법을 정했다' }, { id: 's3', text: '우리 동네 대피소 위치를 안다' }, { id: 's4', text: '문자를 받으면 끝까지 읽기로 했다' }];

    ALL.push(
      // ---- 도입 ----
      M('intro.kind-chart', {
        title: '재난문자 종류 자료 읽기', method: '재난문자 종류 표 읽기', tool: 'chart', minutes: 6,
        levels: { easy: '교사가 종류 2개(긴급·안전안내)만 짚으며 막대를 함께 읽는다.', base: '종류 3개의 막대를 읽고, 교사가 공식 기준으로 알려 준 종류별 차이를 찾는다.', challenge: '교사가 예시 문자 두세 개를 읽어 주면 어느 종류일지 말로 나눈다.' },
        intro: {
          teacher: '"재난문자는 다 똑같은 소리로 올까요? 어떤 문자는 소리가 더 크게 울리죠." 가상 막대그래프(어느 하루 받은 예시 문자 수)를 띄우고 시연 단추로 가장 많은 종류가 골라지는 모습을 보인다. 이 수치는 수업용 가상 자료라고 밝힌다. 종류마다 무엇이 다른지(위험의 크기·알림 방식)는 교사가 행정안전부·국민재난안전포털의 최신 공식 기준으로 칠판에 적어 준다. "많이 오는 문자는 중요하지 않다"는 말에는 "자주 온다고 해서 내 행동과 관계없을까요?"라고 되묻는다.',
          student: '가상 자료에서 가장 많이 받은 문자 종류를 찾고, 선생님이 알려 준 기준으로 종류마다 무엇이 다른지 짝과 말해요.',
          demo: { tool: 'chart', options: { type: 'bar', mode: 'read', title: '어느 하루 받은 재난문자(가상 예시)', unit: '건', xLabel: '종류', yLabel: '받은 수', data: KINDS, question: '가장 많이 받은 종류는?', choices: KINDS.map((d) => d[0]) }, sequence: [{ pick: 2 }] },
          art: { draw: 'a paper-cut smartphone showing three stacked alert messages with different border colors, raindrops falling around it', banner: '재난문자, 다 같을까?', extra: [{ motif: 'rain', x: 300, y: 96 }] },
        },
        notes: '재난문자 종류 이름과 기준(위급·긴급·안전안내, 알림 방식)은 교사가 행정안전부 공식 안내로 확인해 제시한다. 막대 수치는 가상이다.',
      }),
      M('intro.day-line', {
        title: '하루 동안 받은 문자 차례', method: '하루 동안 받은 문자 차례', tool: 'timeline', minutes: 6,
        levels: { easy: '교사가 문자 카드 3장을 함께 시각 차례로 놓는다.', base: '문자 카드 4장을 시각 차례로 놓고 가장 급한 문자를 고른다.', challenge: '가장 급한 문자를 고른 까닭을 위치·행동 정보로 말한다.' },
        intro: {
          teacher: '"하루 동안 이런 문자들이 왔다면, 가장 급하게 움직여야 할 문자는 무엇일까요?" 시연 단추로 예시 문자 카드가 시각 차례대로 놓이는 모습을 보인다. 그다음 카드마다 \'지금 무엇을 하라는지\'를 소리 내어 읽게 한다. "마지막에 온 문자가 가장 중요하다"는 말이 나오면 "대피하라는 문자와 피해 신고 안내 문자 가운데 무엇이 더 급할까요?"라고 되묻는다.',
          student: '예시 문자 카드를 받은 시각 차례로 놓고, 가장 급하게 움직여야 할 문자와 그 까닭을 짝에게 말해요.',
          demo: { tool: 'timeline', options: { mode: 'order', axis: ['아침', '밤'], slots: 4, cards: [MSGS[2], MSGS[0], MSGS[3], MSGS[1]] }, sequence: [{ order: MSGS.map((c) => c.id) }] },
          art: { draw: 'a paper-cut timeline from morning sun to night moon with four small phone message cards pinned along it', banner: '가장 급한 문자는?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '문자 카드는 지어낸 예시다. 실제 문자 문구를 쓰려면 교사가 최근 공식 발송 예시로 바꾼다.',
      }),

      // ---- 활동 ----
      M('activity.text-choice', {
        title: '안전안내 문자와 학원 길', method: '안전안내 문자 받고 학원 가는 길', tool: 'dilemma', minutes: 15,
        levels: { easy: '갈림길 1번에서 고르고 결과를 본다.', base: '갈림길 2번을 끝까지 가 보고 근거 카드를 고른다.', challenge: '갈림길 3번(다른 지역 긴급 문자)까지 가고 근거 카드를 모두 고른다.' },
        activity: {
          title: '안전안내 문자와 학원 길', tool: 'dilemma',
          teacher: '"문자에서 \'어디\'와 \'무엇을 하라\'는 부분에 밑줄을 그으면 무엇이 남을까요?" 장면마다 문자 문장을 소리 내어 읽은 뒤 고르게 한다. "우리 동네 문자가 아니면 상관없다"는 학생에게 "집이나 가족이 그 근처에 있다면요?"라고 되묻는다. 문자를 가족에게 전할 때는 내 말로 바꾸되 위치·행동 정보는 빼지 않는다고 짚는다.',
          task: '안전안내 문자를 받은 오후에 학원 가는 길을 고르고, 다음 문자에 따라 다시 고르며 끝에서 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL({ easy: '호우 안전안내 문자가 왔어요. 한 번 골라 결과를 보세요.', base: '호우 안전안내 문자가 왔어요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '호우 안전안내 문자가 왔어요. 세 번 골라 다음 문자까지 가고 근거를 모두 고르세요.' },
              '안전안내 문자가 왔다', D1, [['read', 'tell', 'check']], R1, ['r1', 'r2'], R1MORE),
            IT({ prompt: '문자 상황에서 서로 다른 끝 장면 두 개를 끝까지 가 보며 결과를 견주세요.', toolOptions: { title: '다른 길도 끝까지', scene: cut(D1, 2), reasons: [] }, target: { explore: 2 } },
              { prompt: '문자 상황에서 서로 다른 끝 장면 두 개를 가 보세요.', toolOptions: { scene: cut(D1, 1) } },
              { prompt: '문자 상황에서 서로 다른 끝 장면 세 개를 끝까지 가 보세요.', toolOptions: { scene: cut(D1, 3) }, target: { explore: 3 } }),
            { prompt: '짝과 문자에서 "위치·시간·행동" 정보가 무엇이었는지 하나씩 짚어 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '재난문자를 받았을 때 가장 먼저 할 일은?', options: ['읽지 않고 넘긴다', '끝까지 읽고 내 위치·가는 길과 맞춰 본다', '단체방에 "큰일 났대"라고 올린다'], answer: '끝까지 읽고 내 위치·가는 길과 맞춰 본다' }] },
      }),
      M('activity.relay-write', {
        title: '가족에게 문자 전달 문장', method: '가족에게 전달 문장', tool: 'rubric-writing', minutes: 15,
        levels: { easy: '문장 틀을 따라 한 문장으로 전한다.', base: '두 문장으로 전하고 기준 3개(위험·어디/언제·행동)를 점검한다.', challenge: '마지막 문항에서 휴대전화를 잘 안 보시는 할머니께 맞춘 쉬운 말로 바꾸어 쓰고 기준 하나를 더 점검한다.' },
        activity: {
          title: '가족에게 문자 전달 문장', tool: 'rubric-writing',
          teacher: '"재난문자를 그대로 복사해 보내는 것과 내 말로 바꿔 보내는 것, 무엇이 가족에게 더 잘 전해질까요?" 예시 문자를 읽고 위치·시간·행동을 찾은 뒤 전달 문장을 쓰게 한다. "\'조심해\'면 다 전해진다"는 학생에게 "무엇을, 어디서 조심하라는지 빠지면 할머니는 무엇을 하실까요?"라고 되묻는다. 실제 가족 이름·연락처는 쓰지 않는다.',
          task: '예시 재난문자를 가족에게 쉽게 전하는 문장으로 바꿔 쓰고 기준표로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            RW('예시 문자를 가족에게 전하는 말로 바꿔 쓰세요: "[안전안내] 오늘 18시까지 강풍. 외출 자제, 간판·공사장 주변 통행 주의."',
              { topic: '예시 문자 "[안전안내] 오늘 18시까지 강풍. 외출 자제, 간판·공사장 주변 통행 주의."를 가족에게 전하는 말 두 문장으로 쓰세요.', minChars: 20, maxChars: 150, minSentences: 2, maxSentences: 3, title: '가족에게 전하기' },
              RELAY, { prompt: '틀을 따라 강풍 문자를 한 문장으로 전하세요.', starter: '___까지 ___가 세대요. ___ 하세요.' }),
            RW('예시 문자를 가족에게 전하는 말로 바꿔 쓰세요: "[긴급재난] 산사태 우려. ○○동 주민은 즉시 △△초등학교 대피소로 대피."',
              { topic: '예시 문자 "[긴급재난] 산사태 우려. ○○동 주민은 즉시 △△초등학교 대피소로 대피."를 가족에게 전하는 말 두 문장으로 쓰세요.', minChars: 20, maxChars: 150, minSentences: 2, maxSentences: 3, title: '가족에게 전하기' },
              RELAY, { prompt: '틀을 따라 산사태 문자를 한 문장으로 전하세요.', starter: '___ 때문에 ___ 사람은 ___로 대피하래요.' },
              { prompt: '휴대전화를 잘 안 보시는 할머니께 맞춘 쉬운 말로 산사태 문자를 전하고 기준표를 모두 점검하세요.', add: ['할머니가 알아듣기 쉬운 말로 바꾸었다'] }),
            { prompt: '짝과 전달 문장을 바꿔 읽고, 빠진 정보(위치·시간·행동)가 있으면 알려 줘요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '예시 재난문자 하나를 골라 가족에게 전하는 말을 두 문장으로 써요.' }] },
      }),

      // ---- 정리 ----
      M('wrap.setting-check', {
        title: '내 휴대폰 알림 점검', method: '내 휴대폰 알림 점검', tool: 'kitchen', minutes: 9,
        levels: { easy: '점검 항목 2개에 내가 한 것을 표시한다.', base: '점검 항목 3개에 내가 한 것을 표시한다.', challenge: '점검 항목 4개에 내가 한 것을 표시한다.' },
        wrap: {
          teacher: '"내 휴대전화는 지금 재난문자를 받을 수 있게 되어 있을까요?" 설정 메뉴 이름은 기종마다 달라 교사가 대표 예를 화면으로 보이고, 학생은 자기 휴대전화를 보며 스스로 확인해 표시하게 한다. 휴대전화가 없는 학생은 집 가족 휴대전화로 확인할 항목에 표시하게 한다. "알림이 시끄러워 껐다"는 학생에게 "가장 급한 순간에 그 알림이 없으면 어떻게 될까요?"라고 되묻는다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title: '내 재난문자 점검', items: SET.slice(0, 3) }, prompt: '재난문자를 받을 준비가 되었는지 스스로 점검해 표시해요.', target: { selfCheck: true }, difficulty: 0.1 },
              { prompt: '재난문자를 받을 준비 두 가지를 스스로 점검해 표시해요.', toolOptions: { items: SET.slice(0, 2) } },
              { prompt: '재난문자를 받을 준비 네 가지를 스스로 점검해 표시해요.', toolOptions: { items: SET } }),
            { type: 'choice', prompt: '재난문자 알림이 시끄럽다고 끄면 생길 수 있는 일은?', options: ['아무 일도 없다', '급한 대피 안내를 놓칠 수 있다', '휴대전화가 빨라진다'], answer: 1, difficulty: 0.15, explain: '가장 급한 순간의 안내를 놓칠 수 있어요.' },
            { type: 'short', prompt: '오늘 집에 가서 가족과 확인할 것 한 가지를 써요.' },
          ],
        },
        worksheet: {
          title: '재난문자 준비 점검',
          items: [
            { type: 'check', prompt: '내가 한 것에 표시해요.', options: ['수신 설정 확인', '가족 연락 방법 정하기', '대피소 위치 알기', '끝까지 읽기'] },
            { type: 'short', prompt: '우리 동네 대피소를 어디서 찾아볼 수 있는지 써요.' },
          ],
        },
        notes: '휴대전화 설정 메뉴 이름은 기종·통신사마다 다르다. 교사가 대표 기종 화면으로 안내한다.',
      }),
      M('wrap.summary-map', {
        title: '재난문자 읽는 법 정리', method: '문자 읽는 법 정리', tool: 'mindmap', minutes: 9,
        levels: { easy: '가지 2개(정보·행동)에 카드를 나눈다.', base: '가지 3개(종류·정보·행동)에 카드를 나눈다.', challenge: '가지 3개에 함정 카드 2장이 섞인 판에서 나눈다.' },
        wrap: {
          teacher: '"재난문자를 받으면 머릿속에서 어떤 세 가지 질문을 던져야 할까요?" 학생이 다 나누면 \'어디·언제·무엇을\' 세 질문을 칠판에 적고 오늘 갈림길의 문자에 대어 보게 한다. "종류는 몰라도 된다"는 말에는 종류에 따라 얼마나 급한지가 달라진다고 짚는다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'mindmap', options: { mode: 'sort', topic: '재난문자', slots: ['종류', '정보', '행동'], cards: [
              { id: 'k1', text: '긴급재난문자' }, { id: 'k2', text: '안전안내문자' }, { id: 'i1', text: '어느 지역인지' }, { id: 'i2', text: '언제까지인지' },
              { id: 'a1', text: '하천변·지하차도 피하기' }, { id: 'a2', text: '가족에게 전하기' }] },
              prompt: '재난문자 카드를 종류·정보·행동 가지에 나눠요.', target: { sort: { 종류: ['k1', 'k2'], 정보: ['i1', 'i2'], 행동: ['a1', 'a2'] } }, difficulty: 0.2 },
            { prompt: '재난문자 카드를 정보·행동 가지에 나눠요.', toolOptions: { slots: ['정보', '행동'], cards: [{ id: 'i1', text: '어느 지역인지' }, { id: 'i2', text: '언제까지인지' }, { id: 'a1', text: '하천변·지하차도 피하기' }, { id: 'a2', text: '가족에게 전하기' }] }, target: { sort: { 정보: ['i1', 'i2'], 행동: ['a1', 'a2'] } } },
            { toolOptions: { cards: [{ id: 'k1', text: '긴급재난문자' }, { id: 'k2', text: '안전안내문자' }, { id: 'i1', text: '어느 지역인지' }, { id: 'i2', text: '언제까지인지' },
              { id: 'a1', text: '하천변·지하차도 피하기' }, { id: 'a2', text: '가족에게 전하기' }, { id: 't1', text: '읽지 않고 지우기' }, { id: 't2', text: '내용 없이 "큰일 났대" 퍼뜨리기' }] } }),
            { type: 'choice', prompt: '"재난문자는 다 똑같다"는 말에 대한 반박으로 알맞은 것은?', options: ['문자는 매일 온다', '문자마다 지역·위험·할 행동이 달라 끝까지 읽어야 한다', '문자는 어른만 받는다'], answer: 1, difficulty: 0.2, explain: '문자마다 담긴 정보가 달라요.' },
            { type: 'short', prompt: '재난문자를 받으면 내가 던질 질문 세 가지를 써요.' },
          ],
        },
        worksheet: {
          title: '재난문자 읽는 법',
          items: [
            { type: 'table', prompt: '재난문자에서 찾을 정보를 써요.', columns: ['질문', '찾을 것'], cells: [['어디', ''], ['언제', ''], ['무엇을', '']], answer: '지역·장소 / 시각·기간 / 할 행동' },
            { type: 'short', prompt: '재난문자를 가족에게 전할 때 빠뜨리지 않을 것을 써요.' },
          ],
        },
      }),
      M('activity.info-sort', {
        title: '문자 속 정보 나누기', method: '문자 속 정보 나누기', tool: 'sortboard', minutes: 15,
        levels: { easy: '문장 조각 4개를 장소·시간·할 일 바구니에 나누고, 틀리면 까닭을 듣고 되돌아온다.', base: '문장 조각 6개를 세 바구니에 나눈다.', challenge: '정보가 아닌 함정 조각이 더 섞인 판에서 나누고, 빠진 정보가 무엇인지 활동지에 쓴다.' },
        activity: {
          title: '문자 속 정보 나누기', tool: 'sortboard',
          teacher: '"이 문자에서 \'어디\'에 해당하는 말은 어디까지일까요?" 예시 문자를 소리 내어 읽은 뒤 조각을 바구니에 나누게 한다. "문자는 첫 줄만 읽으면 된다"는 학생에게 "할 일이 맨 끝에 있다면요?"라고 되묻는다. 바구니 하나가 비어 있으면 그 문자에 빠진 정보가 무엇인지 함께 말해 본다.',
          task: '예시 재난문자의 문장 조각을 \'장소\'·\'시간\'·\'할 일\' 바구니에 나눠요.',
          levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
          items: [
            SBT({ base: '호우 문자 조각을 장소·시간·할 일 바구니에 나누세요.', easy: '호우 문자 조각 네 개를 바구니에 나누세요.', challenge: '함정 조각은 남기고 호우 문자 조각을 바구니에 나누세요.' },
              ['장소', '시간', '할 일'], [
                { id: 'l1', text: '○○천 하천변 산책로', to: '장소' }, { id: 't1', text: '오늘 밤 9시까지', to: '시간' },
                { id: 'a1', text: '하천변 출입 금지', to: '할 일' }, { id: 'l2', text: '△△동 지하차도', to: '장소' },
                { id: 't2', text: '내일 아침 6시부터', to: '시간' }, { id: 'a2', text: '차량·보행 우회', to: '할 일' }], 4,
              [{ id: 'x1', text: '[발신] ○○시청' }, { id: 'x2', text: '많은 비가 예상됩니다' }]),
            SBT({ base: '산사태 문자 조각을 장소·시간·할 일 바구니에 나누세요.', easy: '산사태 문자 조각 네 개를 바구니에 나누세요.', challenge: '함정 조각은 남기고 산사태 문자 조각을 바구니에 나누세요.' },
              ['장소', '시간', '할 일'], [
                { id: 'l3', text: '□□산 아래 주택가', to: '장소' }, { id: 't3', text: '지금 즉시', to: '시간' },
                { id: 'a3', text: '가까운 대피소로 대피', to: '할 일' }, { id: 'l4', text: '△△초등학교 대피소', to: '장소' },
                { id: 't4', text: '해제 문자가 올 때까지', to: '시간' }, { id: 'a4', text: '이웃 어르신께도 알리기', to: '할 일' }], 4,
              [{ id: 'x3', text: '[긴급재난문자]' }]),
            { prompt: '짝과 두 문자에서 비어 있던 바구니가 있었는지, 빠진 정보가 무엇인지 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '예시 문자에서 찾은 정보를 써요.', columns: ['정보', '문자에서 찾은 말'], cells: [['장소', ''], ['시간', ''], ['할 일', '']] }],
          easy: [{ type: 'choice', prompt: '\'할 일\'에 해당하는 조각에 ○ 해요.', options: ['하천변 출입 금지', '오늘 밤 9시까지'], answer: '하천변 출입 금지' }] },
        notes: '문자 조각은 지어낸 예시다(○○·△△ 같은 가상 지명).',
      }),
    );
  }

  // ==== 9학년 · 산사태·대설·낙뢰 판단 (saf-disaster.m.landslide-snow) ====
  {
    const M = MK('landslide-snow', [9]);
    // 가상 지형 칸 지도 — 높이 0~4
    const HILL = { mode: 'terrain', grid: [6, 4], title: '가상의 산 아래 마을', heights: [[4, 4, 3, 2, 1, 1], [3, 3, 2, 1, 1, 0], [2, 2, 1, 0, 0, 0], [1, 1, 0, 0, 0, 0]],
      places: [{ name: '경사지 아래 집', icon: 'house', at: [2, 1] }, { name: '계곡 야영장', icon: 'forest', at: [1, 2] }, { name: '마을 회관', icon: 'office', at: [4, 3] }, { name: '산 위 전망대', icon: 'mountain', at: [0, 0] }, { name: '평지 학교', icon: 'school', at: [5, 2] }] };
    // 가상 자료 — 실제 관측값이 아니다
    const SNOW = [['6시', 1], ['9시', 4], ['12시', 7], ['15시', 5], ['18시', 2]];
    const D1 = { text: '방과 후 운동장에서 축구를 하는데 멀리서 천둥소리가 들리고 하늘이 어두워진다. 비는 아직 오지 않는다.', ask: '어떻게 할까?', motif: 'storm', choices: [
      { id: 'play', text: '비가 안 오니 경기를 계속한다', result: '천둥이 점점 가까워지고 번개가 친다.', impact: [{ who: '나와 친구들', text: '넓은 운동장에 남는다', tone: -1 }], why: '천둥이 들리면 번개가 닿을 수 있는 거리예요. 비가 오지 않아도 건물 안으로 가요.', end: '경기를 계속하다 번개를 만났어요.',
        next: { text: '번개가 번쩍이고 비가 쏟아지기 시작한다.', choices: [
          { id: 'goal', text: '골대 옆에 모여 비를 피한다', result: '쇠 골대 곁은 번개에 더 위험하다.', impact: [{ who: '나와 친구들', text: '위험한 곳에 모인다', tone: -1 }] },
          { id: 'run', text: '바로 학교 건물로 들어간다', result: '건물 안에서 비와 번개를 피한다.', impact: [{ who: '나와 친구들', text: '안전하다', tone: 1 }] }] } },
      { id: 'tree', text: '운동장 끝 큰 나무 아래로 간다', result: '높은 나무는 번개를 맞기 쉬워 곁에 있으면 위험하다.', impact: [{ who: '나와 친구들', text: '번개 피해를 입을 수 있다', tone: -1 }], why: '나무 아래는 낙뢰에 안전하지 않아요. 건물 안으로 가요.', end: '나무 아래로 가 위험했어요.',
        next: { text: '나무 아래에서 친구가 "우산 펴자"고 한다.', choices: [
          { id: 'umbrella', text: '우산을 높이 펼쳐 든다', result: '뾰족한 쇠붙이를 높이 들면 더 위험하다.', impact: [{ who: '친구', text: '위험해진다', tone: -1 }] },
          { id: 'inside2', text: '나무에서 떨어져 건물로 간다', result: '건물 안으로 들어간다.', impact: [{ who: '나와 친구들', text: '안전하다', tone: 1 }] }] } },
      { id: 'building', text: '경기를 멈추고 바로 학교 건물 안으로 들어간다', result: '건물 안에서 창밖으로 번개가 치는 것을 본다.', impact: [{ who: '나와 친구들', text: '안전하다', tone: 1 }], end: '바로 건물 안으로 들어갔어요.',
        next: { text: '20분쯤 뒤 비가 그쳤다. 친구가 "이제 다시 하자"고 하는데 멀리서 아직 천둥이 울린다.', choices: [
          { id: 'again', text: '비가 그쳤으니 다시 나간다', result: '다시 번개가 친다.', impact: [{ who: '나와 친구들', text: '다시 위험해진다', tone: -1 }], why: '천둥이 아직 들리면 끝난 것이 아니에요. 천둥이 그칠 때까지 기다려요.' },
          { id: 'wait', text: '천둥이 그칠 때까지 건물 안에서 기다린다', result: '하늘이 개고 천둥도 그친다.', impact: [{ who: '나와 친구들', text: '안전하게 기다린다', tone: 1 }], end: '천둥이 그칠 때까지 기다렸어요.',
            next: { text: '집에 가는 길, 학교 뒷산 비탈에서 흙탕물이 흐르고 작은 돌이 굴러 내린다.', choices: [
              { id: 'short', text: '평소처럼 뒷산 비탈 지름길로 간다', result: '흙과 돌이 더 쏟아진다.', impact: [{ who: '나', text: '산사태에 휩쓸릴 수 있다', tone: -1 }], why: '흙탕물·돌 굴러 내림은 산사태 징후예요. 비탈에서 멀리 떨어져요.' },
              { id: 'away', text: '비탈을 피해 큰길로 가며 선생님께 알린다', result: '학교가 뒷산 길을 막는다.', impact: [{ who: '다른 학생들', text: '위험한 길을 피한다', tone: 1 }] }] } }] } }] };
    const R1 = [{ id: 'r1', text: '천둥이 들리면 비가 없어도 건물 안으로 간다' }, { id: 'r2', text: '천둥이 그칠 때까지 밖에 나가지 않는다' },
      { id: 'r3', text: '나무 아래는 낙뢰에 안전하다', why: '높은 나무는 번개를 맞기 쉬워 곁이 위험해요.' }, { id: 'r4', text: '비가 그치면 끝난 것이다', why: '천둥이 들리는 동안은 아직 위험해요.' }];
    const R1MORE = { reasons: [{ id: 'r5', text: '흙탕물·돌 굴러 내림은 산사태 징후라 비탈을 피한다' }], ok: ['r5'] };
    const GUIDE = ['산사태 때 할 행동을 썼다', '대설 때 할 행동을 썼다', '낙뢰 때 할 행동을 썼다'];

    ALL.push(
      // ---- 도입 ----
      M('intro.slope-map', {
        title: '높이 칸 지도 위험 칸 찾기', method: '높이 칸 지도에서 위험 칸 찾기', tool: 'map', minutes: 6,
        levels: { easy: '교사가 경사지 아래 집 한 곳에 핀을 꽂아 보인다.', base: '경사지 아래 집과 계곡 야영장 두 곳에 핀을 꽂으며 왜 위험한지 말한다.', challenge: '위험한 두 곳과 함께, 비가 많이 올 때 갈 안전한 곳을 짚어 말한다.' },
        intro: {
          teacher: '"비가 며칠 내린 뒤라면, 이 마을에서 가장 걱정되는 곳은 어디일까요?" 높이 층이 그려진 가상 칸 지도를 띄우고 시연 단추로 경사지 아래 집과 계곡 야영장에 핀이 꽂히는 모습을 보인다. "비가 그치면 산사태 걱정이 없다"는 말이 나오면 "땅에 스민 물은 비가 그친 뒤에도 남아 있을까요?"라고 되묻는다.',
          student: '높이 칸 지도에서 산사태나 물에 위험한 칸을 찾아보고, 왜 그곳이 위험한지 짝에게 말해요.',
          demo: { tool: 'map', options: HILL, sequence: [{ place: '경사지 아래 집' }, { place: '계곡 야영장' }] },
          art: { draw: 'a paper-cut layered hillside village with a house at the foot of a steep slope, a valley campsite and a flat schoolyard below', banner: '어디가 위험할까?', extra: [{ motif: 'rain', x: 300, y: 96 }] },
        },
        notes: '칸 지도는 가상 마을이다. 실제 산사태 위험 지역은 산림청 산사태정보시스템에서 교사가 찾아 보인다.',
      }),
      M('intro.scene-feel', {
        title: '낙뢰·대설 장면 첫 판단', method: '낙뢰·대설 장면 첫 판단', tool: 'emotion', minutes: 6,
        levels: { easy: '교사가 장면 2개(천둥 치는 운동장·눈 쌓인 지붕 아래)를 읽고 학생이 손을 들어 고른다.', base: '장면 3개를 차례로 보며 안전/위험을 고르고 까닭을 한 낱말로 말한다.', challenge: '세 장면을 견주어 공통으로 피할 곳의 특징을 말한다.' },
        intro: {
          teacher: '"이 장면, 안전해 보이나요, 위험해 보이나요?" 첫 장면을 판에 띄우고 손을 들어 고르게 한 뒤 시연 단추로 \'위험\'이 골라지는 모습을 보인다. 나머지 장면(눈이 두껍게 쌓인 비닐하우스 곁, 언덕길 빙판)은 교사가 말로 읽어 준다. "눈 쌓인 지붕은 튼튼해 괜찮다"는 말에는 "눈이 계속 쌓이면 지붕이 견디는 무게도 늘어날까요?"라고 되묻는다.',
          student: '장면을 보고 안전한지 위험한지 첫 판단을 골라요. 고른 까닭을 한 낱말로 짝에게 말해요.',
          demo: { tool: 'emotion', options: { mode: 'branch', situation: '천둥이 치기 시작한 운동장, 친구들이 큰 나무 아래로 모여 비를 피하려 한다.', ask: '이 장면은 어떤가요?', motif: 'storm', choices: [
            { id: 'safe', text: '안전하다', result: '나무 아래는 번개를 맞기 쉬운 곳이다.' }, { id: 'risk', text: '위험하다', result: '나무를 떠나 건물 안으로 가야 한다.' }] }, sequence: [{ choice: 'risk' }] },
          art: { draw: 'a paper-cut school playground under dark storm clouds with lightning in the distance and students gathering under a tall tree', banner: '안전할까, 위험할까?', extra: [{ motif: 'storm', x: 300, y: 96 }] },
        },
      }),

      // ---- 활동 ----
      M('activity.thunder-choice', {
        title: '운동장 축구 중 천둥', method: '운동장 축구 중 천둥', tool: 'dilemma', minutes: 15,
        levels: { easy: '갈림길 1번에서 고르고 결과를 본다.', base: '갈림길 2번을 끝까지 가 보고 근거 카드를 고른다.', challenge: '갈림길 3번(하굣길 비탈의 산사태 징후)까지 가고 근거 카드를 모두 고른다.' },
        activity: {
          title: '운동장 축구 중 천둥', tool: 'dilemma',
          teacher: '"비가 아직 안 오는데 천둥이 들린다면, 경기를 멈춰야 할까요?" 한 길을 끝까지 가 본 뒤 다른 길과 견주게 한다. "나무 아래가 비도 피하고 안전하다"는 학생에게 "운동장에서 가장 높이 솟은 것은 무엇일까요? 번개는 어디로 갈까요?"라고 되묻는다. 비가 그쳐도 천둥이 들리는 동안은 밖에 나가지 않는다는 점과, 하굣길 비탈의 징후도 끝 장면에서 짚는다.',
          task: '운동장에서 축구하다 천둥을 만난 상황에서 길을 골라 결과를 따라가고, 끝에서 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL({ easy: '축구 중 천둥이 울려요. 한 번 골라 결과를 보세요.', base: '축구 중 천둥이 울려요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '축구 중 천둥이 울려요. 세 번 골라 하굣길까지 가고 근거를 모두 고르세요.' },
              '운동장의 천둥', D1, [['building', 'wait', 'away']], R1, ['r1', 'r2'], R1MORE),
            IT({ prompt: '천둥 상황에서 서로 다른 끝 장면 두 개를 끝까지 가 보며 결과를 견주세요.', toolOptions: { title: '다른 길도 끝까지', scene: cut(D1, 2), reasons: [] }, target: { explore: 2 } },
              { prompt: '천둥 상황에서 서로 다른 끝 장면 두 개를 가 보세요.', toolOptions: { scene: cut(D1, 1) } },
              { prompt: '천둥 상황에서 서로 다른 끝 장면 세 개를 끝까지 가 보세요.', toolOptions: { scene: cut(D1, 3) }, target: { explore: 3 } }),
            { prompt: '짝과 낙뢰 때 "피할 곳" 세 곳과 "갈 곳" 한 곳을 말로 정해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '천둥이 들릴 때 가장 알맞은 곳은?', options: ['큰 나무 아래', '쇠 골대 옆', '학교 건물 안'], answer: '학교 건물 안' }] },
        notes: '낙뢰·산사태 행동요령은 일반 안내다. 교사가 국민재난안전포털·산림청 안내로 확인한다.',
      }),
      M('activity.snow-chart', {
        title: '가상 적설 그래프로 이동 판단', method: '예시 적설 막대 읽고 판단', tool: 'chart', minutes: 15,
        levels: { easy: '막대 3개(6·9·12시)만 보고 눈이 가장 많이 온 때를 고른다.', base: '막대 5개를 읽고 가장 많이 온 때와 이동을 미룰 때를 고른다.', challenge: '마지막 문항에서 이동을 미룬 판단의 근거를 고른다(쌓인 양만이 아니라 길 상태까지).' },
        activity: {
          title: '가상 적설 그래프로 이동 판단', tool: 'chart',
          teacher: '"눈이 가장 많이 오는 때와 길이 가장 미끄러운 때는 같을까요?" 가상 막대그래프를 띄우고 실제 관측값이 아니라고 밝힌다. 막대를 읽을 때마다 그 시간 길 상태를 함께 상상하게 한다. "눈이 그치면 바로 다녀도 된다"는 학생에게 "쌓인 눈은 그친 뒤에 어떻게 될까요? 얼지는 않을까요?"라고 되묻는다.',
          task: '가상의 시간별 적설 막대그래프를 읽고, 이동을 미루면 좋을 시간대를 정해요.',
          levels: { easy: { showValues: true }, base: {}, challenge: {} },
          items: [
            IT({ prompt: '그래프에서 눈이 가장 많이 온 시간을 고르세요.', toolOptions: { type: 'bar', mode: 'read', title: '시간별 적설(가상 예시)', unit: 'cm', xLabel: '시각', yLabel: '새로 쌓인 눈', data: SNOW, question: '눈이 가장 많이 온 때는?', choices: SNOW.map((d) => d[0]) }, target: { pick: 2 } },
              { prompt: '막대 3개 가운데 눈이 가장 많이 온 시간을 고르세요.', toolOptions: { data: SNOW.slice(0, 3), choices: SNOW.slice(0, 3).map((d) => d[0]) }, target: { pick: 2 } }),
            IT({ prompt: '12시에 새로 쌓인 눈은 몇 cm인지 그래프에서 읽어 쓰세요.', toolOptions: { type: 'bar', mode: 'read', title: '시간별 적설(가상 예시)', unit: 'cm', xLabel: '시각', yLabel: '새로 쌓인 눈', data: SNOW, question: '12시에 쌓인 눈은?' }, target: { value: 7 } },
              { prompt: '9시에 새로 쌓인 눈은 몇 cm인지 그래프에서 읽어 쓰세요.', toolOptions: { data: SNOW.slice(0, 3), question: '9시에 쌓인 눈은?' }, target: { value: 4 } }),
            IT({ prompt: '학원 가는 시간을 하나 고른다면, 이동을 미루는 것이 가장 좋은 때를 고르세요.', toolOptions: { type: 'bar', mode: 'read', title: '시간별 적설(가상 예시)', unit: 'cm', xLabel: '시각', yLabel: '새로 쌓인 눈', data: SNOW, question: '이동을 미룰 때는?', choices: ['6시', '12시 무렵', '18시'] }, target: { pick: 1 } },
              { toolOptions: { data: SNOW.slice(0, 3), choices: ['6시', '12시 무렵', '9시 전'] } },
              { prompt: '이동을 12시 무렵에서 미룬 판단의 근거로 가장 알맞은 것을 고르세요.', toolOptions: { question: '판단의 근거는?', choices: ['눈이 가장 많이 와 앞이 안 보이고 길이 미끄럽다', '그래프 막대가 예쁘다', '12시는 점심시간이다'] }, target: { pick: 0 } },
              { conclude: '대설 때는 눈이 가장 많이 오는 때 이동을 미루고, 그친 뒤에도 얼어붙은 길을 조심해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '가상 그래프를 보고 이동을 미룰 시간과 그 까닭을 한 문장으로 써요.' }] },
        notes: '적설 값은 지어낸 예시다. 실제 대설 특보는 기상청 날씨누리로 교사가 보인다.',
      }),

      // ---- 정리 ----
      M('wrap.guide-write', {
        title: '재난별 행동 한 장 안내', method: '재난별 행동 한 장 안내', tool: 'rubric-writing', minutes: 9,
        levels: { easy: '재난 2개(낙뢰·대설)의 행동을 문장 틀로 쓴다.', base: '재난 3개(산사태·대설·낙뢰)의 행동을 세 문장으로 쓰고 기준 3개를 점검한다.', challenge: '세 재난의 행동에 징후(알아차릴 신호)까지 넣고 기준 4개를 점검한다.' },
        wrap: {
          teacher: '"동생 방에 붙여 줄 한 장 안내라면, 세 재난마다 한 줄씩 무엇을 쓸까요?" 오늘 갈림길과 그래프에서 고른 판단을 떠올리며 쓰게 한다. "\'조심하세요\'를 세 번 쓰면 된다"는 학생에게 재난마다 다른 행동(건물 안·비탈 피하기·이동 미루기)을 써야 동생이 알 수 있다고 말해 준다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'rubric-writing', options: { topic: '산사태·대설·낙뢰 때 할 행동을 한 장 안내로 세 문장 쓰세요.', minChars: 30, maxChars: 220, minSentences: 3, maxSentences: 4, title: '한 장 안내' },
              prompt: '산사태·대설·낙뢰 때 할 행동을 세 문장으로 쓰고 기준표에 표시해요.', target: { selfCheck: GUIDE }, difficulty: 0.3 },
            { prompt: '틀을 따라 낙뢰·대설 때 할 행동을 두 문장으로 쓰고 기준표에 표시해요.', toolOptions: { minSentences: 2, starter: '천둥이 들리면 ___. 눈이 많이 오면 ___.' }, target: { selfCheck: ['낙뢰 때 할 행동을 썼다', '대설 때 할 행동을 썼다'] } },
            { prompt: '세 재난의 징후까지 넣어 한 장 안내를 쓰고 기준표에 표시해요.', toolOptions: { maxSentences: 6 }, target: { selfCheck: [...GUIDE, '재난마다 알아차릴 징후를 썼다'] } }),
            { type: 'choice', prompt: '산사태 징후로 알맞은 것은?', options: ['비탈에서 흙탕물이 흐르고 돌이 굴러 내린다', '하늘이 맑다', '바람이 시원하다'], answer: 0, difficulty: 0.2, explain: '흙탕물·돌 굴러 내림·나무 기울어짐 같은 신호가 보이면 비탈을 피해요.' },
            { type: 'short', prompt: '세 재난 가운데 우리 동네에서 가장 걱정되는 것과 내 행동을 써요.' },
          ],
        },
        worksheet: {
          title: '산사태·대설·낙뢰 한 장 안내',
          items: [
            { type: 'table', prompt: '재난마다 행동을 써요.', columns: ['재난', '할 행동'], cells: [['산사태', ''], ['대설', ''], ['낙뢰', '']], answer: '비탈·계곡에서 멀리 / 이동 미루고 빙판 조심 / 건물 안으로' },
            { type: 'short', prompt: '동생 방에 붙일 한 장 안내를 세 문장으로 써요.' },
          ],
          easy: { note: '"천둥이 들리면 ___. 눈이 많이 오면 ___." 틀을 써도 돼요.', items: [{ type: 'blank', prompt: '틀을 채워 써요.', text: '천둥이 들리면 ___. 눈이 많이 오면 ___.', answer: '(예) 건물 안으로 들어가요, 이동을 미뤄요' }] },
        },
      }),
      M('wrap.self-check', {
        title: '자연 재난 판단 스스로 점검', method: '판단 스스로 점검', tool: 'timer', minutes: 9,
        levels: { easy: '점검 항목 2개에 스스로 표시한다.', base: '점검 항목 3개에 스스로 표시한다.', challenge: '점검 항목 4개(징후 알아차리기 포함)에 스스로 표시한다.' },
        wrap: {
          teacher: '"지금 갑자기 천둥이 울린다면, 여러분은 어디로 가겠어요?" 점검 항목을 하나씩 읽고 말할 수 있는 것만 표시하게 한다. 표시 못 한 항목은 한 장 안내 표를 다시 보게 한다. "산사태는 산골에서만 일어난다"는 학생에게 학교 뒷산·아파트 옆 비탈도 비가 많이 오면 살펴야 한다고 말해 준다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'timer', options: { title: '자연 재난 판단 점검' }, prompt: '오늘 배운 자연 재난 판단을 스스로 점검해 표시해요.', target: { selfCheck: ['낙뢰 때 갈 곳을 안다', '산사태 위험 칸을 알아본다', '대설 때 이동을 미룰 때를 안다'] }, difficulty: 0.1 },
              { prompt: '오늘 배운 자연 재난 판단 두 가지를 점검해 표시해요.', target: { selfCheck: ['낙뢰 때 갈 곳을 안다', '대설 때 이동을 미룰 때를 안다'] } },
              { prompt: '오늘 배운 자연 재난 판단 네 가지를 점검해 표시해요.', target: { selfCheck: ['낙뢰 때 갈 곳을 안다', '산사태 위험 칸을 알아본다', '대설 때 이동을 미룰 때를 안다', '산사태 징후를 말할 수 있다'] } }),
            { type: 'choice', prompt: '"나무 아래는 낙뢰에 안전하다"는 말에 대한 반박으로 알맞은 것은?', options: ['나무는 비를 막아 준다', '높이 솟은 나무는 번개를 맞기 쉬워 곁이 위험하다', '나무는 시원하다'], answer: 1, difficulty: 0.2, explain: '나무를 떠나 건물 안으로 가요.' },
            { type: 'mood', prompt: '오늘 수업을 마친 내 마음은 어떤가요?' },
          ],
        },
        worksheet: {
          title: '자연 재난 판단 점검',
          items: [
            { type: 'check', prompt: '내가 할 수 있는 것에 표시해요.', options: ['낙뢰 때 건물 안으로', '산사태 징후 알아차리기', '대설 때 이동 미루기'] },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '천둥이 아직 들리면 비가 그쳐도 ___ 안에서 기다려요.', answer: '건물' },
          ],
        },
      }),
      M('activity.act-sort', {
        title: '산사태·대설·낙뢰 행동 나누기', method: '재난별 행동 나누기', tool: 'sortboard', minutes: 15,
        levels: { easy: '행동 카드 4장을 세 바구니에 나누고, 틀리면 까닭을 듣고 되돌아온다.', base: '행동 카드 6장을 산사태·대설·낙뢰 바구니에 나눈다.', challenge: '함정 카드가 더 섞인 판에서 나누고, 세 재난에 공통인 행동을 짝과 정한다.' },
        activity: {
          title: '산사태·대설·낙뢰 행동 나누기', tool: 'sortboard',
          teacher: '"\'건물 안으로 들어가기\'는 세 재난 가운데 어디에 가장 잘 맞을까요?" 카드를 넣을 때마다 그 재난에서만 하는 까닭을 말하게 한다. "나무 아래는 어느 재난에도 안전하다"는 학생에게 "번개가 칠 때와 비탈에서 흙이 흘러내릴 때, 나무 곁은 어떨까요?"라고 되묻는다. 마지막에 세 재난 모두에 맞는 행동(예보 확인·어른에게 알리기)을 칠판에 따로 적는다.',
          task: '행동 카드를 \'산사태\'·\'대설\'·\'낙뢰\' 바구니에 나누고, 세 재난에 공통인 행동을 찾아요.',
          levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
          items: [
            SBT({ base: '행동 카드를 산사태·대설·낙뢰 바구니에 나누세요.', easy: '행동 카드 네 장을 세 바구니에 나누세요.', challenge: '함정 카드는 남기고 행동 카드를 세 바구니에 나누세요.' },
              ['산사태', '대설', '낙뢰'], [
                { id: 's1', text: '비탈·계곡에서 멀리 떨어지기', to: '산사태' }, { id: 'w1', text: '눈이 많이 올 때 이동 미루기', to: '대설' },
                { id: 'l1', text: '천둥이 들리면 건물 안으로', to: '낙뢰' }, { id: 's2', text: '흙탕물·돌 굴러 내림 보면 알리기', to: '산사태' },
                { id: 'w2', text: '눈 쌓인 지붕·비닐하우스 곁 피하기', to: '대설' }, { id: 'l2', text: '우산·쇠막대 높이 들지 않기', to: '낙뢰' }], 4,
              [{ id: 't1', text: '큰 나무 아래에서 비 피하기' }, { id: 't2', text: '비 그치자마자 계곡 놀러 가기' }]),
            SBT({ base: '징후 카드를 산사태·대설·낙뢰 바구니에 나누세요.', easy: '징후 카드 네 장을 세 바구니에 나누세요.', challenge: '헷갈리는 카드까지 징후 카드를 세 바구니에 나누세요.' },
              ['산사태', '대설', '낙뢰'], [
                { id: 'g1', text: '비탈에서 흙탕물이 흘러내림', to: '산사태' }, { id: 'g2', text: '지붕 위 눈이 두껍게 쌓임', to: '대설' },
                { id: 'g3', text: '하늘이 어두워지고 천둥이 울림', to: '낙뢰' }, { id: 'g4', text: '비탈의 나무가 한쪽으로 기울어짐', to: '산사태' },
                { id: 'g5', text: '길이 하얗게 얼어붙음', to: '대설' }, { id: 'g6', text: '먼 곳에서 번쩍이는 빛', to: '낙뢰' }], 4,
              [{ id: 'g7', text: '비탈 아래 땅이 갈라지거나 부풀어 오름', to: '산사태' }]),
            { prompt: '짝과 세 재난에 공통으로 할 행동 두 가지를 정해 말해요.', free: true, talk: true },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '산사태·대설·낙뢰에 공통으로 할 행동 하나를 써요.' }],
          easy: [{ type: 'choice', prompt: '낙뢰 때 할 행동에 ○ 해요.', options: ['건물 안으로 들어가기', '큰 나무 아래로 가기'], answer: '건물 안으로 들어가기' }] },
      }),
    );
  }

  PaperLessons.registerModules(ALL);
})();
