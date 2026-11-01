/* 창체 법정교육 다문화 이해 — 중학교(7~9학년) 모듈 내용(edu-module.v1). 작성 규칙: MODULES_BUILD.md, 계획: framework/mandatory.json 의 multi 중.
 * 근거: 다문화가족지원법 제5조·시행령 제10조의2(다문화 이해교육 — 연 2시간, 교육부 지침), research-mandatory §1·§2
 *   (다문화 이해 중: 편견·차별 사례, 다문화 가정 이해). 주제마다 source 는 체계도에 있다.
 * 주제 4개(7학년 1·8학년 2·9학년 1) × 8모듈 = 32모듈.
 * 지킨 틀:
 *   - 특정 나라·민족·종교를 고정관념으로 묶지 않는다. 사례 속 나라는 '가 나라'·'○○'처럼 이름을 비우고, 종교는 이름을 들지 않는다('종교적 이유').
 *   - 다른 문화를 이국적 볼거리로 그리지 않는다(음식·옷 체험 나열 대신 한 사람으로 보기·판단 기준·대화).
 *   - 혐오·비하 표현은 쓰지 않는다. 혐오 표현 예시는 '○○ 사람들은 나가라'처럼 대상을 비운 꼴로, 가려내고 바로잡는 카드로만 쓴다(실제 멸칭·밈 문구 금지).
 *   - 이주·난민 같은 논쟁적 정책은 정답을 정하지 않는다 — 찬반 어느 쪽 '정책 의견'도 의견 칸에 두고, 가르는 기준은 '집단을 겨냥해 낮추는가'다.
 *   - 학생 자신이나 가족의 출신·국적·가족 형태를 묻지 않는다(가족 지도·대화 장면은 모두 가상 인물). 피해 경험을 묻지 않는다.
 *   - 법·제도는 근거 파일에 있는 것(다문화가족지원법 제5조 — 다문화 이해교육)만. 차별 상담·구제 기관 이름과 번호는 쓰지 않고
 *     '[학교가 확인해 넣는 차별 상담·구제 기관]' 자리로 둔다(교사가 확인해 판서·활동지에 적는다).
 *   - 통계는 근거 파일에 없다 — 그래프 수치는 모두 지어낸 가상 자료이고 화면 제목에 '가상'을 밝힌다.
 * 교구 한계로 계획 글을 바꾼 곳(모듈 levels 글은 실제 설정대로):
 *   - 문항 수는 단계마다 같다: '문장 3개·6개', '항목 1개·2개' 같은 계획은 카드 장 수·눈금 칸 수·교사 진행으로 나눴다.
 *   - collage 는 글자를 넣을 수 없다: 가족 지도·캠페인 카드 뉴스의 바탕(모양·색)만 꾸미고 글은 활동지에 쓴다. 가족 지도의 조각은 가상 가족 카드를 뜻한다.
 *   - wordcards 는 영어 낱말 교구라 fill·pick·sort(한국어 글 카드)만 쓴다(소리 없음).
 *   - map 은 문항마다 핀 하나: 도움 받을 곳 두 곳은 출구 질문 두 개로 나눴다.
 *   - emotion scale 은 정답이 없는 자기 점검(level 'any')이다.
 *
 * 사람 확인: 근거 파일(research-*.md)에 없는 일반 사실·개념 문장. 확인처를 함께 적는다(모듈 id 는 multi.m. 뒤).
 *   - generalize 전반: 고정관념(생각)·편견(감정·태도)·차별(행동)의 구별, 한 사례로 집단을 판단하는 성급한 일반화 — 교육부·국가인권위원회 다문화·인권교육 자료
 *   - generalize.activity.sample-chart: 만난 사람 수별 '친절했다' 비율(0·70·82%)은 가상이다. '표본이 작으면 일반화가 틀리기 쉽다'는 통계 일반 원칙
 *   - family 전반: 다문화 가정은 다양한 가족 형태의 하나이며, 출신을 거듭 묻기·"한국말 잘하네" 같은 말이 상대를 이방인으로 대하는 무심한 말(미세한 차별)이 될 수 있다 — 교육부 다문화교육 자료·국가인권위원회 안내
 *   - family.activity.family-data: 가족 모습 막대(가상 마을 100가구)는 가상이다. 실제 가구 구성은 통계청 인구총조사로 확인
 *   - culture-rights 전반: 문화 다양성은 존중하되 인권을 침해하는 관습은 어떤 문화(우리 문화 포함)에서도 허용되지 않는다(문화 상대주의의 한계·보편적 인권) — 국가인권위원회 인권교육 자료·유네스코 문화다양성 소개 자료
 *   - culture-rights.activity.food-plan: 신념에 따라 고기를 먹지 않음·채식·땅콩 알레르기를 함께 고려한 식단 원칙 — 학교급식 알레르기 표시 안내(식품의약품안전처·교육청 급식 안내)
 *   - culture-rights.wrap.recheck: 반 전체 눈금 집계(18·9·10·19명)는 가상이다
 *   - hate-speech 전반: 혐오 표현(출신·피부색·언어 등을 이유로 집단을 겨냥해 낮추거나 차별·배제를 부추기는 표현)과 정당한 의견의 구별 — 국가인권위원회 혐오 표현 안내
 *   - hate-speech.intro.spread-chart: 시간별 본 사람 수(20~6000명)는 가상이다
 *   - hate-speech.activity.response-order: 대응 차례(퍼뜨리지 않기 → 화면 기록 → 플랫폼 신고 → 믿을 어른에게 알리기 → 대상이 된 친구 곁에 서기) — 방송통신위원회·국가인권위원회 온라인 혐오 표현 대응 안내(신고 메뉴 이름은 서비스마다 다름)
 *   - hate-speech.wrap.help-map: 학교 밖 차별 상담·구제 기관 — 학교가 확인해 넣는다(이 파일에는 이름·번호를 쓰지 않았다)
 */
(function () {
  const ALL = [];
  // 주제마다 공통 칸을 채우는 모듈 틀. sid = '<intro|activity|wrap>.<이름>'
  const MK = (topic, grades) => (sid, o) => Object.assign({ id: `multi.m.${topic}.${sid}`, schema: 'edu-module.v1', type: sid.split('.')[0], domain: 'multi', band: '중', topic: `multi.m.${topic}`, grades }, o);
  const sid = (s) => (typeof s === 'string' ? s : s.id || s.label);

  // ---- 카드 판 문항 조각: { prompt, toolOptions, target } 을 돌려준다(문항 levels[단계] 에도 그대로 쓴다) ----
  // 나누기: cards [{ id, text, to: 칸id }] — to 가 없으면 남겨야 하는 함정 카드
  const strip = (cards) => cards.map((c) => { const x = Object.assign({}, c); delete x.to; delete x.ok; return x; });
  const sortOf = (slots, cards) => Object.fromEntries(slots.map((s) => [sid(s), cards.filter((c) => c.to === sid(s)).map((c) => c.id)]));
  const SB = (prompt, slots, cards, opt) => ({ prompt, toolOptions: Object.assign({ mode: 'sort', slots, cards: strip(cards) }, opt), target: { sort: sortOf(slots, cards) } });
  // 종이 분류판(sortboard 글 카드 모드): mode 없이 slots·cards
  const BOARD = (prompt, slots, cards, opt) => ({ prompt, toolOptions: Object.assign({ slots, cards: strip(cards) }, opt), target: { sort: sortOf(slots, cards) } });
  // 차례: cards 를 바른 차례로 적는다(화면에서는 섞여 나온다). trap = 함정 카드
  const OB = (prompt, cards, opt, trap) => ({ prompt, toolOptions: Object.assign({ mode: 'order', slots: cards.length, cards: [...cards, ...(trap || [])] }, opt), target: { order: cards.map((c) => c.id) } });
  // 짝: pairs [[칸 글, 카드 글]] + 함정 카드 글
  const MB = (prompt, pairs, extra, opt) => ({ prompt, toolOptions: Object.assign({ mode: 'match', slots: pairs.map((p, i) => ({ id: `s${i + 1}`, label: p[0] })), cards: [...pairs.map((p, i) => ({ id: `k${i + 1}`, text: p[1] })), ...(extra || []).map((t, i) => ({ id: `x${i + 1}`, text: t }))] }, opt), target: { match: Object.fromEntries(pairs.map((p, i) => [`s${i + 1}`, `k${i + 1}`])) } });
  // 빈칸: pairs [['…___…', 카드 글]] — 칸 하나에 카드 한 장
  const FB = (prompt, pairs, extra, opt) => ({ prompt, toolOptions: Object.assign({ mode: 'fill', slots: pairs.map((p, i) => ({ id: `f${i + 1}`, label: p[0] })), cards: [...pairs.map((p, i) => ({ id: `w${i + 1}`, text: p[1] })), ...(extra || []).map((t, i) => ({ id: `y${i + 1}`, text: t }))] }, opt), target: { fill: Object.fromEntries(pairs.map((p, i) => [`f${i + 1}`, `w${i + 1}`])) } });
  // 고르기: cards [{ id, text, ok }] — ok 인 카드만 바구니에
  const PB = (prompt, basket, cards, opt) => ({ prompt, toolOptions: Object.assign({ mode: 'pick', basket, cards: strip(cards) }, opt), target: { pick: cards.filter((c) => c.ok).map((c) => c.id) } });
  // 점검표(kitchen checklist): items [{ id, text, ok }] — ok 인 것만 표시해야 맞음
  const CL = (prompt, title, items, opt) => ({ prompt, toolOptions: Object.assign({ mode: 'checklist', title, items: strip(items) }, opt), target: { checklist: items.filter((c) => c.ok).map((c) => c.id) } });
  // 문항 = 기본 조각 + 단계별 조각
  const IT = (base, easy, challenge, more) => Object.assign({}, base, { levels: Object.assign({}, easy ? { easy } : {}, challenge ? { challenge } : {}) }, more);
  const pickCards = (cards, ids) => ids.map((i) => cards.find((c) => c.id === i));
  // 출구 질문 교구 문항: 조각 → { type: 'tool', tool, prompt, options, target }
  const X = (tool, frag, more) => Object.assign({ type: 'tool', tool, prompt: frag.prompt, options: frag.toolOptions, target: frag.target }, more);

  // ---- 갈림길(dilemma): 깊이 3 나무 하나로 쉬움(선택 1번)·기본(선택 2번)·도전(선택 3번) 판을 만든다 ----
  // 선택에 next 가 있으면 end = 그 단계에서 잘렸을 때 보일 마무리 글
  const cut = (sc, d) => Object.assign({}, sc, { choices: sc.choices.map((c) => {
    const x = Object.assign({}, c); delete x.end;
    if (c.next && d > 1) x.next = cut(c.next, d - 1);
    else { delete x.next; if (c.next) x.ending = c.end || '다음 단계에서 이어지는 장면을 따라가 봐요.'; }
    return x;
  }) });
  // good = 도전 단계의 바른 길 목록 [[a, b, c], [d]] — 단계마다 그 깊이까지 자른다
  const paths = (good, d) => { const out = []; for (const g of good) { const p = g.slice(0, d); if (!out.some((q) => q.join('>') === p.join('>'))) out.push(p); } return out; };
  // p = { easy, base, challenge } 문항 글, R = 근거 카드, ok = 맞는 근거 id, more = { reasons, ok, explore? } 도전에만 더할 근거·탐색 수
  const DIL = (p, title, tree, good, R, ok, more, extra) => Object.assign({
    prompt: p.base, toolOptions: { title, scene: cut(tree, 2), reasons: R, compare: true }, target: { path: paths(good, 2), reasons: ok, some: true },
    levels: {
      easy: { prompt: p.easy, toolOptions: { scene: cut(tree, 1), reasons: [] }, target: { path: paths(good, 1) } },
      challenge: { prompt: p.challenge, toolOptions: { scene: cut(tree, 3), reasons: [...R, ...((more && more.reasons) || [])] }, target: Object.assign({ path: paths(good, 3), reasons: [...ok, ...((more && more.ok) || [])], some: true }, more && more.explore ? { explore: more.explore } : {}) },
    },
  }, extra);
  // 한 장면(깊이 1) 갈림길 문항 조각
  const ONE = (prompt, title, scene, good, R, ok, more) => Object.assign({ prompt, toolOptions: { title, scene, reasons: R || [], compare: true }, target: Object.assign({ path: good.map((g) => [].concat(g)) }, R && R.length ? { reasons: ok, some: true } : {}) }, more);
  // 도입 시연용 갈림길: 깊이 d 판 + 바른 길 하나
  const DEMO_DIL = (title, tree, good, R, d) => ({ tool: 'dilemma', options: { title, scene: cut(tree, d || 2), reasons: R || [] }, sequence: [{ path: paths(good, d || 2)[0], reasons: R && R.length ? [R[0].id] : [] }] });

  // ---- 그래프 읽기 ----
  const RD = (prompt, opt, target) => ({ prompt, toolOptions: Object.assign({ mode: 'read' }, opt), target });
  // ---- 기준표 글쓰기: o = { topic, min, max, s:[최소, 최대], title?, starter? } ----
  const RW = (prompt, o, checks, must, more) => Object.assign({ prompt, toolOptions: Object.assign({ topic: o.topic, minChars: o.min, maxChars: o.max, minSentences: o.s[0], maxSentences: o.s[1] }, o.title ? { title: o.title } : {}, o.starter ? { starter: o.starter } : {}), target: Object.assign({ selfCheck: checks }, must ? { mustInclude: must } : {}) }, more);
  // ---- 마음 눈금(emotion scale) 자기 점검: 정답 없음 ----
  const SCALE = (prompt, situation, steps, more) => Object.assign({ type: 'tool', tool: 'emotion', prompt, options: { mode: 'scale', situation, feeling: '자신 있음', steps: steps || 5, scaleLabels: { 1: '아직 어려워요', [steps || 5]: '자신 있어요' } }, target: { level: 'any' } }, more);
  // ---- 시계 ----
  const H = (h, m) => ({ h, m });

  const SAFE_NOTE = '모든 인물·장면은 가상이다. 학생 자신이나 가족의 출신·국적·가족 형태를 묻지 않고 "가상 인물이라면"으로만 이야기한다.';
  const NATION_NOTE = '사례 속 나라는 이름을 비워 두었다(가 나라·○○). 학생이 실제 나라·민족 이름을 넣어 말하면 "한 나라 사람 전체가 아니라 그 한 사람"으로 바꿔 말하게 한다.';
  const LOCAL = '[학교가 확인해 넣는 차별 상담·구제 기관]';

  // ==== 7학년 · 한 사람으로 나라를 판단하지 않기 (multi.m.generalize) ====
  {
    const M = MK('generalize', [7]);
    const TRI = ['고정관념(생각)', '편견(감정·태도)', '차별(행동)'];
    const TRI_C = [
      { id: 'g1', text: '가 나라 사람은 다 게으르다고 생각한다', to: '고정관념(생각)' }, { id: 'f1', text: '가 나라 출신 친구가 괜히 불편하다', to: '편견(감정·태도)' },
      { id: 'd1', text: '출신을 이유로 모둠에 끼워 주지 않는다', to: '차별(행동)' }, { id: 'g2', text: '피부색이 다르면 한국말을 못 한다고 여긴다', to: '고정관념(생각)' },
      { id: 'f2', text: '억양이 다르면 왠지 믿음이 덜 간다', to: '편견(감정·태도)' }, { id: 'd2', text: '억양을 흉내 내며 놀린다', to: '차별(행동)' },
    ];
    const MEET = [['1명 만남', 0], ['10명 만남', 70], ['100명 만남', 82]];
    const MEET_O = { type: 'bar', title: '여행에서 만난 사람 가운데 "친절했다" 비율(수업용 가상 자료)', unit: '%', xLabel: '만난 사람 수', yLabel: '친절했다 비율', max: 100, data: MEET };
    // 뉴스 댓글 갈림길(깊이 3)
    const NEWS = { text: '"가 나라 출신 관광객이 가게 물건을 망가뜨렸다"는 기사에 "가 나라 사람은 다 저래"라는 댓글이 맨 위에 있다. 공감이 120개 달렸다.', ask: '나는 어떻게 할까?', motif: 'house', choices: [
      { id: 'like', text: '공감을 누른다', result: '그 댓글이 더 위로 올라가고 비슷한 댓글이 늘어난다.', impact: [{ who: '우리 동네의 가 나라 출신 이웃', text: '한 사람 일로 함께 비난받는다', tone: -1 }], why: '공감 하나도 일반화를 키우는 힘이 돼요.', end: '공감을 눌러 일반화가 커졌어요.',
        next: { text: '친구가 "너도 공감 눌렀네?"라고 묻는다.', ask: '어떻게 할까?', choices: [
          { id: 'cancel', text: '공감을 취소하고 "한 사람 일로 다 묶은 건 아닌 것 같아"라고 말한다', result: '친구도 다시 생각해 본다.', impact: [{ who: '친구', text: '일반화를 알아챈다', tone: 1 }] },
          { id: 'more', text: '"맞잖아"라며 나도 비슷한 댓글을 단다', result: '댓글창이 출신 비난으로 가득 찬다.', impact: [{ who: '가 나라 출신 이웃', text: '더 많은 비난을 본다', tone: -1 }] }] } },
      { id: 'reply', text: '반박 댓글을 단다', result: '몇몇이 "다시 생각해 보자"는 댓글을 단다.', impact: [{ who: '댓글을 읽는 사람들', text: '다른 관점을 본다', tone: 1 }], end: '반박 댓글로 다른 관점을 보였어요.',
        next: { text: '내 댓글에 "너 가 나라 편이냐?"라는 답글이 달린다.', ask: '어떻게 할까?', choices: [
          { id: 'insult', text: '욕으로 맞받아친다', result: '댓글창이 말싸움으로 번지고 처음 말한 내용은 묻힌다.', impact: [{ who: '나', text: '내 말의 힘이 약해진다', tone: -1 }], why: '욕으로 답하면 싸움만 커지고 일반화의 문제는 가려져요.' },
          { id: 'calm', text: '편이 아니라 기준의 문제라고 짧게 다시 답한다', result: '읽는 사람들이 내 기준을 본다.', impact: [{ who: '댓글을 읽는 사람들', text: '판단 기준을 생각한다', tone: 1 }], end: '편 가르기 대신 기준으로 답했어요.',
            next: { text: '마지막으로 한 문장을 더 남기려 한다.', ask: '어떤 문장이 좋을까?', choices: [
              { id: 'safe', text: '"잘못은 그 사람의 책임이에요. 출신으로 묶지 말아요."', result: '공감이 조금씩 붙는다.', impact: [{ who: '가 나라 출신 이웃', text: '한 사람으로 존중받는다', tone: 1 }] },
              { id: 'attack', text: '"이런 댓글 쓰는 사람은 다 무식해."', result: '댓글 쓴 사람들이 화를 내며 더 몰려온다.', impact: [{ who: '댓글창', text: '편 가르기가 커진다', tone: -1 }], why: '이번엔 댓글 쓴 사람들을 한데 묶는 일반화예요. 사람이 아니라 말을 짚어요.' }] } }] } },
      { id: 'pass', text: '그냥 지나친다', result: '댓글창 분위기는 그대로이고 공감이 계속 늘어난다.', impact: [{ who: '가 나라 출신 이웃', text: '비난이 그대로 남는다', tone: 0 }], why: '지나치는 것도 선택이지만, 공감 수가 커지면 그 말이 사실처럼 보여요.', ending: '아무 반응 없이 지나쳤어요.' }] };
    const NEWS_R = [{ id: 'r1', text: '한 사람의 잘못은 그 사람의 책임이다' }, { id: 'r2', text: '출신으로 묶으면 상관없는 이웃이 상처받는다' },
      { id: 'r3', text: '기사에 나왔으니 그 나라 사람은 다 그렇다', why: '기사는 한 사람의 일을 말해요. 나라 전체의 성격을 말하지 않아요.' }, { id: 'r4', text: '공감 수가 많으면 맞는 말이다', why: '많이 눌렀다고 사실이 되지는 않아요.' }];
    const NEWS_C = { reasons: [{ id: 'r5', text: '반박할 때는 사람이 아니라 말과 기준을 짚는다' }], ok: ['r5'] };
    const CB = ['어떤 일반화', '누가 상처받나', '사실은', '바꾼 말'];
    const CASE1 = [
      { id: 'a1', text: '"가 나라 사람은 다 불친절해"', to: '어떤 일반화' }, { id: 'b1', text: '반에 있는 가 나라 출신 친구', to: '누가 상처받나' },
      { id: 'c1', text: '여행에서 만난 가게 주인 한 명이 불친절했다', to: '사실은' }, { id: 'e1', text: '"내가 만난 가게 주인은 불친절했어"', to: '바꾼 말' },
      { id: 't1', text: '한 번 겪었으면 다 안다' },
    ];
    const CASE2 = [
      { id: 'a1', text: '"○○ 말 쓰는 애들은 공부를 못해"', to: '어떤 일반화' }, { id: 'b1', text: '○○ 말을 함께 쓰는 친구', to: '누가 상처받나' },
      { id: 'c1', text: '한 친구가 시험 한 번을 못 봤다', to: '사실은' }, { id: 'e1', text: '"그 친구가 이번 시험을 어려워했어"', to: '바꾼 말' },
      { id: 't1', text: '두 언어를 쓰면 원래 헷갈린다' },
    ];
    const SWAP = [['"가 나라 사람은 다 불친절해" → ___', '"내가 만난 그 가게 주인은 불친절했어"'], ['"○○ 출신은 다 시끄러워" → ___', '"옆 테이블 사람들이 오늘 시끄러웠어"'], ['바꾼 까닭: ___', '한 사람의 일을 집단 전체로 묶지 않으려고']];

    ALL.push(
      // ---- 도입 ----
      M('intro.three-words', {
        title: '고정관념·편견·차별 구별', method: '고정관념·편견·차별 구별', tool: 'sortboard', minutes: 6,
        levels: { easy: '교사가 문장 3장(g1·f1·d1)을 읽고 생각·감정·행동 가운데 무엇인지 함께 고른다.', base: '문장 6장이 세 바구니에 나뉘는 시연을 보고 셋이 어떻게 이어지는지 짝과 말한다.', challenge: '세 칸이 이어지는 사례 하나(생각 → 감정 → 행동)를 짝과 지어 말한다.' },
        intro: {
          teacher: '"\'가 나라 사람은 다 게으르다\'는 생각, 머릿속에만 있으면 괜찮을까요?" 시연 단추로 문장 6장이 고정관념(생각)·편견(감정·태도)·차별(행동) 바구니에 나뉘는 모습을 보인다. "생각은 자유잖아요"라는 말이 나오면 "그 생각이 \'괜히 불편한 마음\'이 되고, 모둠에 끼워 주지 않는 행동이 되면 누가 상처를 받을까요?"라고 되묻는다. 오늘은 한 사람의 일로 나라 전체를 판단하는 일반화를 따져 본다고 밝힌다.',
          student: '출신에 대한 문장 6장을 고정관념(생각)·편견(감정·태도)·차별(행동)으로 나누어 보고, 셋이 어떻게 이어지는지 말해요.',
          demo: { tool: 'sortboard', options: { slots: TRI, cards: strip(TRI_C) }, sequence: [{ sort: sortOf(TRI, TRI_C) }] },
          art: { draw: 'a paper-cut staircase of three steps labeled with a thought bubble, a frowning face and a hand pushing away, students of different backgrounds standing at the bottom looking up', banner: '생각이 행동이 될 때', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: NATION_NOTE,
      }),
      M('intro.one-case', {
        title: '한 번의 경험, 전체의 판단', method: '한 번의 경험, 전체의 판단', tool: 'story', minutes: 6,
        levels: { easy: '교사가 장면 2장(불친절한 가게 주인·"다 불친절해" 말)을 읽고 문제가 있는 장면을 함께 고른다.', base: '장면 3장을 넘겨 보며 문제가 시작된 장면을 바구니에 담는 시연을 따라 고르고 까닭을 말한다.', challenge: '같은 일이 "그 학교 학생은 다 그래"라는 우리 학교 이야기라면 어떨지 견주어 말한다.' },
        intro: {
          teacher: '"여행에서 불친절한 가게 주인을 한 명 만났어요. 돌아와서 \'그 나라 사람은 다 불친절해\'라고 말한다면?" 가상 장면 세 장을 넘겨 보이고, 시연 단추로 둘째 장면(나라 전체로 말하는 장면)이 바구니에 담기는 모습을 보인다. "직접 겪었으니까 맞는 말 아니에요?"라는 말이 나오면 "누군가 우리 학교 학생 한 명을 보고 \'그 학교 애들은 다 그래\'라고 하면 어떨까요?"라고 되묻는다.',
          student: '가상 인물의 여행 이야기 장면 3장을 보고, 문제가 시작된 장면을 골라요. 왜 문제인지 한 줄로 말해요.',
          demo: { tool: 'story', options: { mode: 'pick', basket: '문제가 시작된 장면', title: '가상 인물 하루의 여행 이야기', cards: [
            { id: 's1', text: '여행 중 가게 주인 한 명이 불친절했다', motif: 'house' }, { id: 's2', text: '돌아와 "그 나라 사람은 다 불친절해"라고 한다', motif: 'cloud' },
            { id: 's3', text: '친구들이 그 말을 듣고 따라 한다', motif: 'leaf' }], shuffle: false }, sequence: [{ pick: ['s2'] }] },
          art: { draw: 'a paper-cut travel scene with one shopkeeper behind a counter, and a speech bubble growing larger to cover a whole paper city full of different people', banner: '한 명이 모두일까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: NATION_NOTE,
      }),

      // ---- 활동 ----
      M('activity.sample-chart', {
        title: '표본 크기와 판단 자료', method: '표본 크기와 판단 자료', tool: 'chart', minutes: 15,
        levels: { easy: '막대 2개(1명·100명 만남)만 있는 그래프에서 값을 보며 읽는다.', base: '막대 3개(1명·10명·100명)를 견주어 읽고 차이를 쓴 뒤, 일반화가 틀리는 까닭을 고른다.', challenge: '셋째 문항에서 이 자료로도 알 수 없는 것(자료의 한계)을 고른다.' },
        activity: {
          title: '표본 크기와 판단 자료', tool: 'chart',
          teacher: '"한 명을 만났을 때 \'친절했다\'는 0%, 백 명을 만났을 때는 82%예요. 어느 쪽 판단을 더 믿을 수 있을까요?" 수업용 가상 자료라고 먼저 밝히고 막대를 함께 읽는다. "100명이면 그 나라를 다 아는 거네요"라는 학생에게 "100명을 만나도 82%예요. 남은 18%, 그리고 만나지 않은 수많은 사람은 어떨까요?"라고 되묻는다. 많이 만날수록 판단은 나아지지만, 결국 한 사람은 한 사람으로 봐야 한다는 점을 짚는다.',
          task: '여행에서 만난 사람 수에 따라 "친절했다" 비율이 달라지는 가상 그래프를 읽고, 한 사례로 판단하면 왜 틀리기 쉬운지 찾아요.',
          levels: { easy: { showValues: true }, base: {}, challenge: {} },
          items: [
            IT(RD('세 막대 가운데 그 나라 사람들에 대해 가장 믿을 만한 정보를 주는 막대를 고르세요.', Object.assign({}, MEET_O, { question: '가장 믿을 만한 막대는?', choices: MEET.map((d) => d[0]) }), { pick: 2 }),
              RD('두 막대 가운데 더 믿을 만한 정보를 주는 막대를 고르세요.', Object.assign({}, MEET_O, { data: [MEET[0], MEET[2]], question: '더 믿을 만한 막대는?', choices: [MEET[0][0], MEET[2][0]] }), { pick: 1 })),
            IT(RD('"100명 만남"의 비율은 "1명 만남"보다 몇 %p 높은지 읽어 쓰세요.', Object.assign({}, MEET_O, { question: '몇 %p 높은가요?' }), { value: 82 }),
              RD('"100명 만남"의 비율은 "1명 만남"보다 몇 %p 높은지 읽어 쓰세요.', Object.assign({}, MEET_O, { data: [MEET[0], MEET[2]], question: '몇 %p 높은가요?' }), { value: 82 })),
            IT(RD('"1명 만남"만 보고 "그 나라 사람은 다 불친절해"라고 하면 왜 틀리기 쉬운지 고르세요.', Object.assign({}, MEET_O, { question: '틀리기 쉬운 까닭은?', choices: ['한 명은 많은 사람을 대표하지 못한다', '1명은 숫자가 작아서 계산이 어렵다', '불친절한 사람만 여행지에 산다'] }), { pick: 0 }),
              RD('"1명 만남"만 보고 판단하면 왜 틀리기 쉬운지 고르세요.', Object.assign({}, MEET_O, { data: [MEET[0], MEET[2]], question: '틀리기 쉬운 까닭은?', choices: ['한 명은 많은 사람을 대표하지 못한다', '1명은 숫자가 작아서 계산이 어렵다'] }), { pick: 0 }),
              RD('이 가상 자료로도 알 수 없는 것을 고르세요.', Object.assign({}, MEET_O, { question: '이 자료로 알 수 없는 것은?', choices: ['내가 앞으로 만날 그 나라 사람 한 명이 친절할지', '만난 사람이 늘수록 비율이 어떻게 바뀌었는지', '1명 만남의 비율'] }), { pick: 0 }),
              { conclude: '한 사례는 집단을 대표하지 못해요. 자료가 많아도 다음에 만날 한 사람은 그 사람 자신으로 봐야 해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '한 사람을 보고 나라 전체를 판단하면 왜 틀리기 쉬운지 그래프를 근거로 한 문장으로 써요(가상 자료임을 밝혀요).' }],
          easy: [{ type: 'choice', prompt: '더 믿을 만한 판단은?', options: ['100명을 만나고 내린 판단', '1명을 만나고 내린 판단'], answer: '100명을 만나고 내린 판단' }] },
        notes: '그래프 수치(0·70·82%)는 수업용 가상 값이다. 실제 나라 이름을 붙이지 않는다.',
      }),
      M('activity.news-dilemma', {
        title: '뉴스 댓글 갈림길', method: '뉴스 댓글 갈림길', tool: 'dilemma', minutes: 15,
        levels: { easy: '첫 문항은 선택 1번만 하고 결과(댓글창 분위기)를 본다. 둘째·셋째 문항은 한 장면에서 고른다.', base: '첫 문항에서 선택 2번을 끝까지 가고 근거 카드를 고른다.', challenge: '첫 문항에서 선택 3번까지 가서 안전한 반박 문장을 고르고, 그 근거까지 고른다.' },
        activity: {
          title: '뉴스 댓글 갈림길', tool: 'dilemma',
          teacher: '"\'가 나라 사람은 다 저래\' 댓글에 공감이 120개예요. 공감 하나 누르는 게 무슨 상관일까요?" 학생마다 한 길을 끝까지 가 본 뒤 되돌아가 다른 길의 댓글창 분위기와 견주게 한다. "반박하면 싸움만 나요"라는 학생에게 "욕으로 맞받는 반박과 기준을 짚는 반박, 댓글을 읽는 다른 사람에게 어떻게 다르게 보일까요?"라고 되묻는다. 온라인에서 반박할 때는 내 개인정보를 드러내지 않는다는 점도 짚는다.',
          task: '외국인 관련 기사의 일반화 댓글 장면에서 길을 골라 댓글창 분위기를 따라가고, 끝에서 내 선택의 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL({ easy: '"가 나라 사람은 다 저래" 댓글을 봤어요. 한 번 골라 결과를 보세요.', base: '"가 나라 사람은 다 저래" 댓글을 봤어요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '세 번 골라 안전한 반박 문장까지 고르고 근거도 고르세요.' },
              '뉴스 댓글창', NEWS, [['reply', 'calm', 'safe']], NEWS_R, ['r1', 'r2'], NEWS_C),
            ONE('친구가 단톡방에 그 기사를 올리며 일반화하는 말을 했어요. 내가 할 말을 고르세요.', '단톡방의 기사', { text: '친구가 반 단톡방에 그 기사를 올리며 "역시 가 나라 사람들"이라고 썼다. 반에는 가 나라 출신 보호자가 있는 친구도 있다.', ask: '나는 뭐라고 할까?', motif: 'house', choices: [
              { id: 'point', text: '"기사 속 한 사람 이야기야. 나라로 묶진 말자"라고 쓴다', result: '친구가 "그건 그렇네"라며 말을 고친다.', impact: [{ who: '가 나라와 이어진 친구', text: '덜 상처받는다', tone: 1 }], ending: '한 사람의 일을 한 사람의 일로 되돌렸어요.' },
              { id: 'laugh', text: '웃는 이모티콘을 단다', result: '비슷한 말이 몇 개 더 올라온다.', impact: [{ who: '가 나라와 이어진 친구', text: '단톡방에서 말이 없어진다', tone: -1 }], why: '웃음 하나도 그 말에 힘을 실어 줘요.' },
              { id: 'expose', text: '"우리 반 ○○도 가 나라 쪽이잖아"라고 쓴다', result: '그 친구가 반 전체 앞에서 지목된다.', impact: [{ who: '지목된 친구', text: '원치 않게 드러난다', tone: -1 }], why: '친구의 가족 배경은 그 친구가 말할 일이에요. 함부로 드러내지 않아요.' }] }, ['point']),
            ONE('"가 나라 사람들"이라는 말을 들었을 때 머릿속에서 먼저 할 일을 고르세요.', '판단 멈추기', { text: '뉴스를 보고 나도 모르게 "역시 그 나라 사람들은…"이라는 생각이 들었다.', ask: '먼저 무엇을 할까?', motif: 'house', choices: [
              { id: 'stop', text: '"이건 한 사람의 일인가, 나라 전체의 일인가?" 스스로 묻는다', result: '기사가 한 사람의 일이라는 것을 다시 본다.', impact: [{ who: '나', text: '판단을 고친다', tone: 1 }], ending: '판단 전에 한 번 멈췄어요.' },
              { id: 'search', text: '그 나라 사람의 다른 나쁜 뉴스를 찾아본다', result: '생각이 더 굳어진다.', impact: [{ who: '나', text: '고정관념이 굳는다', tone: -1 }], why: '맞는 것만 골라 찾으면 일반화가 더 단단해져요.' },
              { id: 'share', text: '친구에게 내 생각을 바로 말한다', result: '친구도 같은 생각을 하게 된다.', impact: [{ who: '친구', text: '일반화를 배운다', tone: -1 }], why: '퍼뜨리기 전에 한 번 멈춰 따져 봐요.' }] }, ['stop'], null, null,
              { conclude: '한 사람의 잘못은 그 사람의 책임이에요. 공감·웃음·침묵도 일반화에 힘을 실을 수 있어요. 반박할 때는 사람이 아니라 말과 기준을 짚어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '일반화 댓글에 반박하는 문장으로 가장 알맞은 것은?', options: ['"잘못은 그 사람의 책임이에요. 출신으로 묶지 말아요."', '"이런 댓글 쓰는 사람은 다 무식해."', '"너희 나라로 가."'], answer: '"잘못은 그 사람의 책임이에요. 출신으로 묶지 말아요."' }] },
        notes: '기사·댓글은 모두 가상이다. 실제 사건·나라 이름을 쓰지 않는다. ' + NATION_NOTE,
      }),
      M('activity.case-analysis', {
        title: '일반화 사례 분석표', method: '일반화 사례 분석표', tool: 'mindmap', minutes: 15,
        levels: { easy: '가지 2개(어떤 일반화·사실은)에 카드를 나누고, 틀린 가지에 놓으면 바로 알려 준다.', base: '사례 하나에 가지 4개(어떤 일반화·누가 상처받나·사실은·바꾼 말)를 채운다(함정 1장).', challenge: '셋째 문항에서 두 사례에 함께 들어 있는 잘못을 골라 견준다.' },
        activity: {
          title: '일반화 사례 분석표', tool: 'mindmap',
          teacher: '"\'가 나라 사람은 다 불친절해\'라는 말에서 실제로 있었던 일은 무엇이고, 덧붙인 판단은 무엇일까요?" 카드를 가지에 놓을 때마다 \'있었던 일\'인지 \'덧붙인 판단\'인지 소리 내어 말하게 한다. "한 번 겪었으면 다 안다"는 함정 카드를 고른 학생에게 "내가 우리 학교 학생 한 명으로 판단받는다면 공평할까요?"라고 되묻는다. 바꾼 말은 \'그 나라 사람은\' 대신 \'내가 만난 그 사람은\'으로 시작한다는 점을 짚는다.',
          task: '일반화 사례 하나를 가운데 두고 "어떤 일반화·누가 상처받나·사실은·바꾼 말" 가지에 카드를 나누어 분석해요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
          items: [
            IT(SB('사례 "여행 뒤 \'그 나라 사람은 다 불친절해\'"를 네 가지로 분석하세요. 맞지 않는 카드는 남겨요.', CB, CASE1, { topic: '여행 뒤의 한마디' }),
              SB('사례를 두 가지로 분석하세요.', ['어떤 일반화', '사실은'], pickCards(CASE1, ['a1', 'c1', 't1']), { topic: '여행 뒤의 한마디' })),
            IT(SB('사례 "시험 한 번으로 \'○○ 말 쓰는 애들은 공부를 못해\'"를 네 가지로 분석하세요.', CB, CASE2, { topic: '시험 뒤의 한마디' }),
              SB('사례를 두 가지로 분석하세요.', ['어떤 일반화', '사실은'], pickCards(CASE2, ['a1', 'c1', 't1']), { topic: '시험 뒤의 한마디' })),
            IT(PB('일반화를 바꾼 말로 알맞은 것을 골라 담으세요.', '바꾼 말', [
              { id: 'p1', text: '"내가 만난 그 사람은 불친절했어"', ok: true }, { id: 'p2', text: '"그 친구가 이번 시험을 어려워했어"', ok: true },
              { id: 'p3', text: '"그 나라 사람들은 대체로 불친절해"' }, { id: 'p4', text: '"○○ 말 쓰는 애들은 원래 그래"' }], { topic: '바꾼 말 고르기' }),
              null,
              PB('두 사례에 함께 들어 있는 잘못을 골라 담으세요.', '두 사례의 공통 잘못', [
                { id: 'q1', text: '한 사람의 일을 집단 전체의 성격으로 바꿨다', ok: true }, { id: 'q2', text: '출신·언어 같은 배경으로 사람을 묶었다', ok: true },
                { id: 'q3', text: '두 사례 모두 공식 자료로 확인했다' }, { id: 'q4', text: '말한 사람이 직접 겪었으니 문제없다' }], { topic: '두 사례 견주기' }),
              { conclude: '일반화는 있었던 한 사람의 일에 \'다\'를 붙이는 순간 생겨요. \'내가 만난 그 사람은\'으로 바꾸면 사실만 남아요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '사례 하나를 골라 분석표를 채워요.', columns: ['가지', '내가 찾은 내용'], cells: [['어떤 일반화', ''], ['누가 상처받나', ''], ['사실은', ''], ['바꾼 말', '']], answer: '(예) 그 나라 사람은 다 불친절 / 그 나라 출신 친구 / 가게 주인 한 명이 불친절 / 내가 만난 그 사람은 불친절했어' }],
          easy: [{ type: 'choice', prompt: '"그 나라 사람은 다 불친절해"를 바꾼 말로 알맞은 것은?', options: ['"내가 만난 그 사람은 불친절했어"', '"그 나라 사람은 대체로 불친절해"'], answer: '"내가 만난 그 사람은 불친절했어"' }] },
        notes: NATION_NOTE,
      }),
      M('activity.short-essay', {
        title: '"한 사람은 한 사람이다" 짧은 글', method: '"한 사람은 한 사람이다" 짧은 글', tool: 'rubric-writing', minutes: 15,
        levels: { easy: '셋째 문항에서 문장 틀을 따라 3~4문장 글을 쓴다.', base: '셋째 문항에서 5~6문장 글을 쓰고 기준표(구체적 사례·근거·존중의 표현)로 점검한다.', challenge: '셋째 문항에서 반론("직접 겪었는데?")과 재반론을 넣어 쓰고 기준 하나를 더 점검한다.' },
        activity: {
          title: '"한 사람은 한 사람이다" 짧은 글', tool: 'rubric-writing',
          teacher: '"\'한 사람은 한 사람이다\', 이 말을 친구에게 설득하려면 어떤 사례와 근거가 필요할까요?" 오늘 본 여행·시험·댓글 사례와 가상 그래프를 근거로 쓰게 한다. "직접 겪은 건 믿어도 되잖아요"라는 반론이 나오면 "겪은 일은 믿어도 돼요. 그 일을 \'나라 전체\'로 넓히는 게 문제예요"라고 구별해 준다. 실제 나라·친구 이름은 쓰지 않는다.',
          task: '한 사례로 집단을 판단하는 일반화를 반박하는 짧은 글을 쓰고, 기준표로 스스로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT(RW('첫 부분: 일반화 사례 하나와 그것이 왜 문제인지 두 문장으로 쓰세요.', { topic: '오늘 본 일반화 사례(여행·시험·댓글) 하나를 소개하고, 왜 문제인지 두 문장으로 쓰세요.', min: 25, max: 160, s: [2, 3], title: '글 ① 사례' }, ['구체적 사례를 들었다', '왜 문제인지 썼다']),
              RW('틀을 채워 사례 문장을 쓰세요.', { topic: '일반화 사례와 문제를 쓰세요.', min: 15, max: 120, s: [2, 3], starter: '어떤 사람은 ___ 일로 "___ 사람은 다 ___"라고 말했다. 이 말은 ___ 때문에 문제다.' }, ['구체적 사례를 들었다', '왜 문제인지 썼다'])),
            IT(RW('가운데: 일반화가 틀리는 근거를 두 문장으로 쓰세요.', { topic: '한 사람이 집단을 대표할 수 없는 근거(오늘 읽은 가상 그래프 등)를 두 문장으로 쓰세요.', min: 25, max: 160, s: [2, 3], title: '글 ② 근거' }, ['근거를 들었다', '존중하는 말로 썼다']),
              RW('틀을 채워 근거 문장을 쓰세요.', { topic: '일반화가 틀리는 근거를 쓰세요.', min: 15, max: 120, s: [2, 3], starter: '한 사람은 ___ 을(를) 대표하지 못한다. 왜냐하면 ___.' }, ['근거를 들었다', '존중하는 말로 썼다'])),
            IT(RW('앞의 내용을 이어 "한 사람은 한 사람이다" 글을 5~6문장으로 완성하세요.', { topic: '"한 사람은 한 사람이다"라는 제목으로, 사례·근거·존중하는 말을 넣어 5~6문장 글을 완성하세요.', min: 80, max: 400, s: [5, 6], title: '한 사람은 한 사람이다' }, ['구체적 사례를 들었다', '근거를 들었다', '존중하는 말로 썼다'], [['한 사람', '그 사람']]),
              RW('틀을 따라 3~4문장 글을 완성하세요.', { topic: '"한 사람은 한 사람이다" 글을 3~4문장으로 완성하세요.', min: 40, max: 260, s: [3, 4], starter: '___ 일로 "___ 사람은 다 ___"라고 하면 안 된다. 한 사람은 ___ 을(를) 대표하지 못한다. 그래서 "___"라고 바꿔 말해야 한다.' }, ['구체적 사례를 들었다', '존중하는 말로 썼다'], [['한 사람', '그 사람']]),
              RW('반론과 재반론을 넣어 글을 완성하세요.', { topic: '"한 사람은 한 사람이다" 글에 반론("직접 겪었는데 왜 안 돼?")과 그에 대한 재반론을 넣어 6문장 안팎으로 완성하세요.', min: 90, max: 440, s: [5, 6], title: '반론과 재반론' }, ['구체적 사례를 들었다', '근거를 들었다', '존중하는 말로 썼다', '반론에 재반론으로 답했다'], [['한 사람', '그 사람']]),
              { conclude: '겪은 일은 그 사람과의 일이에요. 그 일을 나라 전체로 넓히지 않고 한 사람을 한 사람으로 보는 것이 존중이에요.' }),
          ],
        },
        worksheet: { items: [{ type: 'check', prompt: '짝의 글을 읽고 들어 있는 것에 표시해요.', options: ['구체적 사례', '근거', '존중의 표현', '실제 나라·친구 이름 없음'] }] },
        notes: NATION_NOTE,
      }),

      // ---- 정리 ----
      M('wrap.swap-card', {
        title: '바꾼 문장 카드', method: '바꾼 문장 카드', tool: 'wordcards', minutes: 7,
        levels: { easy: '일반화 문장 1장을 "내가 만난 그 사람은" 문장으로 바꾸는 빈칸을 채운다.', base: '일반화 문장 2장을 바꾸는 빈칸을 채운다.', challenge: '문장 2장에 \'바꾼 까닭\' 칸을 더 채운다.' },
        wrap: {
          teacher: '"\'그 나라 사람은\'을 \'내가 만난 그 사람은\'으로 바꾸면 무엇이 남고 무엇이 빠질까요?" 낱말 카드로 빈칸을 채운 뒤 내 카드를 한 장 써서 게시판에 붙이게 한다. "바꾸면 말이 길어져요"라는 학생에게 "말이 조금 길어지는 대신 누가 상처받지 않게 될까요?"라고 되묻는다. 카드에는 실제 나라 이름을 쓰지 않는다.',
          exitTicket: [
            IT(X('wordcards', FB('일반화 문장 두 장을 바꾼 문장으로 채워요.', SWAP.slice(0, 2), ['"그 나라 사람은 대체로 불친절해"', '"○○ 출신은 원래 그래"'])),
              FB('일반화 문장 한 장을 바꾼 문장으로 채워요.', SWAP.slice(0, 1), ['"그 나라 사람은 대체로 불친절해"']),
              FB('일반화 문장 두 장과 바꾼 까닭을 채워요.', SWAP, ['"그 나라 사람은 대체로 불친절해"', '"○○ 출신은 원래 그래"', '말이 짧아지니까']), { difficulty: 0.2 }),
            { type: 'choice', prompt: '고정관념·편견·차별 가운데 "행동"에 해당하는 것은?', options: ['차별', '고정관념', '편견'], answer: 0, difficulty: 0.15, explain: '고정관념은 생각, 편견은 감정·태도, 차별은 행동이에요.' },
            { type: 'short', prompt: '게시판에 붙일 나의 바꾼 문장 카드를 한 줄로 써요.' },
          ],
        },
        worksheet: {
          title: '바꾼 문장 카드',
          items: [
            { type: 'table', prompt: '일반화 문장을 바꿔 써요.', columns: ['일반화 문장', '바꾼 문장'], cells: [['"그 나라 사람은 다 불친절해"', ''], ['', '']], answer: '(예) "내가 만난 그 가게 주인은 불친절했어"' },
            { type: 'short', prompt: '문장을 바꾸면 무엇이 달라지는지 한 문장으로 써요.' },
          ],
        },
        notes: NATION_NOTE,
      }),
      M('wrap.bias-check', {
        title: '내 판단 습관 점검', method: '내 판단 습관 점검', tool: 'emotion', minutes: 7,
        levels: { easy: '가상 상황 하나에 눈금 3칸으로 표시하고, 다음 행동 보기 2개 가운데 고른다.', base: '눈금 5칸으로 표시하고 다음 행동 보기 3개 가운데 고른다.', challenge: '셋째 질문에서 실천을 확인할 방법을 고른다.' },
        wrap: {
          teacher: '"가상 인물 하루처럼, 한 번의 일로 \'다 그래\'라고 말하고 싶어질 때가 있을까요? 눈금에는 정답이 없어요." 눈금을 표시한 뒤 다음에 그런 생각이 들 때 할 행동을 고르게 한다. "저는 그런 적 없어요"라는 학생에게 "나라가 아니어도 \'그 학교 애들은\', \'요즘 애들은\'처럼 묶는 말은 어떨까요?"라고 넓혀 묻는다. 학생 자신의 실제 사례를 발표시키지 않는다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'emotion', prompt: '가상 상황에서 "다 그래"라고 말하고 싶은 마음은 얼마나 될 것 같나요?', options: { mode: 'scale', situation: '처음 간 동네에서 불친절한 사람을 한 명 만났다', feeling: '걱정', steps: 5, scaleLabels: { 1: '거의 없다', 5: '아주 크다' } }, target: { level: 'any' }, difficulty: 0.1 },
              { toolOptions: { steps: 3, scaleLabels: { 1: '거의 없다', 3: '아주 크다' } } }),
            IT({ type: 'tool', tool: 'emotion', prompt: '그런 생각이 들 때 할 행동을 골라요.', options: { mode: 'branch', situation: '"그 동네 사람들은 다 불친절해"라는 생각이 든다.', ask: '나는 무엇을 할까?', choices: [
              { id: 'stop', text: '"한 사람의 일인가?" 스스로 묻는다', result: '판단을 그 사람 한 명에게만 둔다.' },
              { id: 'say', text: '친구들에게 바로 말한다', result: '친구들도 그 동네를 같은 눈으로 본다.', why: '퍼뜨리기 전에 먼저 멈춰요.' },
              { id: 'find', text: '그 동네의 나쁜 소문을 더 찾아본다', result: '생각이 더 굳어진다.', why: '맞는 것만 찾으면 일반화가 굳어요.' }] }, target: { choice: 'stop' }, difficulty: 0.15 },
              { toolOptions: { choices: [
                { id: 'stop', text: '"한 사람의 일인가?" 스스로 묻는다', result: '판단을 그 사람 한 명에게만 둔다.' },
                { id: 'say', text: '친구들에게 바로 말한다', result: '친구들도 그 동네를 같은 눈으로 본다.', why: '퍼뜨리기 전에 먼저 멈춰요.' }] } }),
            { type: 'choice', prompt: '"멈추고 묻기"를 실천했는지 확인할 방법으로 알맞은 것은?', options: ['한 주 동안 "다 그래"라고 말할 뻔한 때를 활동지에 표시한다', '친구가 일반화할 때마다 혼낸다', '확인할 필요 없다'], answer: 0, difficulty: 0.2, explain: '내 말을 스스로 적어 보면 습관을 알아챌 수 있어요.' },
          ],
        },
        worksheet: {
          title: '내 판단 습관',
          items: [
            { type: 'check', prompt: '다음에 해 볼 행동에 표시해요.', options: ['"한 사람의 일인가?" 스스로 묻기', '"내가 만난 그 사람은"으로 바꿔 말하기', '일반화 댓글에 공감 누르지 않기'] },
            { type: 'short', prompt: '"다 그래"라고 말하고 싶을 때 대신 할 말을 한 문장으로 써요.' },
          ],
        },
      }),
    );
  }

  // ==== 8학년 · 다문화 가정 친구와 나누는 대화 (multi.m.family) ====
  {
    const M = MK('family', [8]);
    const QS = ['괜찮은 질문', '불편할 수 있는 질문'];
    const QCARD = [
      { id: 'o1', text: '"주말에 뭐 했어?"', to: '괜찮은 질문' }, { id: 'u1', text: '"너 진짜 한국인이야?"', to: '불편할 수 있는 질문' },
      { id: 'o2', text: '"요즘 어떤 노래 들어?"', to: '괜찮은 질문' }, { id: 'u2', text: '"엄마는 어느 나라 사람이야?"', to: '불편할 수 있는 질문' },
      { id: 'o3', text: '"이번 모둠 주제 뭐가 좋을까?"', to: '괜찮은 질문' }, { id: 'u3', text: '"한국말 진짜 잘하네!"', to: '불편할 수 있는 질문' },
    ];
    // 새 학기 첫 대화 갈림길(깊이 3). 가상 인물: 새 짝 이안(어머니가 다른 나라 출신이라는 것을 다른 친구에게 들었다)
    const PAIR = { text: '새 학기, 새 짝 이안과 처음 나란히 앉았다. 쉬는 시간에 다른 친구가 "이안이네 엄마 외국 분이래"라고 귓속말했다.', ask: '이안에게 처음 건넬 말은?', motif: 'house', choices: [
      { id: 'origin', text: '"엄마 나라 말 한번 해 봐!"라고 한다', result: '이안이 웃는 듯하다가 "그냥 한국말 해"라며 고개를 돌린다.', impact: [{ who: '이안', text: '또 출신으로 불린다', tone: -1 }], why: '처음 만난 친구에게 출신부터 묻거나 시키면 그 친구를 \'다른 사람\'으로 대하게 돼요.', end: '첫마디가 출신 이야기였어요.',
        next: { text: '이안이 말이 없어졌다. 점심시간, 이안이 혼자 급식실로 간다.', ask: '어떻게 할까?', choices: [
          { id: 'again', text: '"아까 그 나라 이야기 더 해 줘"라며 따라간다', result: '이안이 걸음을 빨리한다.', impact: [{ who: '이안', text: '피하고 싶어진다', tone: -1 }] },
          { id: 'sorry', text: '"아까 갑자기 시켜서 미안해. 같이 밥 먹을래?"라고 한다', result: '이안이 "응"이라며 옆자리를 비운다.', impact: [{ who: '이안', text: '사과를 받는다', tone: 1 }] }] } },
      { id: 'interest', text: '"너는 쉬는 시간에 주로 뭐 해?"라고 묻는다', result: '이안이 "웹툰 봐. 너는?"이라고 되묻는다.', impact: [{ who: '이안', text: '한 사람으로 대화한다', tone: 1 }], end: '관심사를 물어 대화가 시작됐어요.',
        next: { text: '웹툰 이야기가 이어지다 다른 친구가 와서 "이안, 너 엄마 나라 어디야?"라고 끼어든다.', ask: '나는 어떻게 할까?', choices: [
          { id: 'join', text: '나도 궁금해서 이안을 쳐다보며 기다린다', result: '이안이 두 사람의 눈길에 대답을 떠밀린다.', impact: [{ who: '이안', text: '말하고 싶지 않은 것을 떠밀린다', tone: -1 }], why: '가족 이야기는 이안이 원할 때 말할 일이에요. 함께 떠밀지 않아요.' },
          { id: 'back', text: '"우리 웹툰 이야기하던 중이야"라며 이야기를 돌린다', result: '이안이 안도한 듯 웹툰 이야기를 이어 간다.', impact: [{ who: '이안', text: '말할지 스스로 정한다', tone: 1 }], end: '이안이 말할지 정할 수 있게 했어요.',
            next: { text: '며칠 뒤, 이안이 먼저 "우리 엄마가 만든 간식인데 먹어 볼래?"라고 한다.', ask: '어떻게 반응할까?', choices: [
              { id: 'listen', text: '"맛있다! 무슨 간식이야?"라고 묻고 이안의 이야기를 듣는다', result: '이안이 간식 이야기와 함께 가족 이야기를 조금 들려준다.', impact: [{ who: '이안', text: '원할 때 원하는 만큼 말한다', tone: 1 }] },
              { id: 'weird', text: '"이상한 냄새 난다"며 얼굴을 찡그린다', result: '이안이 간식을 얼른 가방에 넣는다.', impact: [{ who: '이안', text: '부끄러움을 느낀다', tone: -1 }], why: '낯선 음식을 \'이상하다\'고 하면 그 가족의 문화를 낮추게 돼요.' }] } }] } },
      { id: 'avoid', text: '어색해서 말을 걸지 않는다', result: '이안과 한 주 동안 한마디도 하지 않는다.', impact: [{ who: '이안', text: '짝과 멀어진다', tone: -1 }], why: '피하는 것도 \'다른 사람\'으로 대하는 거예요. 다른 짝에게 하듯 말을 걸면 돼요.', ending: '어색함에 피해 버렸어요.' }] };
    const PAIR_R = [{ id: 'r1', text: '출신보다 그 사람 자신에게 관심을 둔다' }, { id: 'r2', text: '가족 이야기는 본인이 원할 때 원하는 만큼 말한다' },
      { id: 'r3', text: '다문화 가정 친구는 외국 이야기를 좋아한다', why: '좋아하는 이야기는 사람마다 달라요. 출신으로 정하지 않아요.' }, { id: 'r4', text: '궁금하면 언제든 물어봐도 된다', why: '궁금한 마음보다 상대가 말하고 싶은지가 먼저예요.' }];
    const PAIR_C = { reasons: [{ id: 'r5', text: '실수했을 때는 바로 사과하고 다시 시작한다' }], ok: ['r5'], explore: 3 };
    const FAM = [['부부와 자녀', 30], ['혼자 사는 가구', 32], ['부부만', 21], ['한부모와 자녀', 10], ['조부모와 손자녀 등', 7]];
    const FAM_O = { type: 'bar', title: '가상 마을 100가구의 가족 모습(수업용 가상 자료)', unit: '가구', xLabel: '가족 모습', yLabel: '가구 수', data: FAM };
    // 가상 인물 이안의 여러 면
    const IAN = ['취미', '꿈', '잘하는 것', '싫어하는 것'];
    const IAN_C = [
      { id: 'h1', text: '웹툰 보기', to: '취미' }, { id: 'h2', text: '자전거 타고 한강 가기', to: '취미' },
      { id: 'd1', text: '게임 개발자', to: '꿈' }, { id: 's1', text: '수학 문제 빨리 풀기', to: '잘하는 것' },
      { id: 's2', text: '친구 고민 들어 주기', to: '잘하는 것' }, { id: 'x1', text: '아침 일찍 일어나기', to: '싫어하는 것' },
      { id: 'n1', text: '엄마 나라 이야기를 늘 하고 싶어 한다' },
    ];
    const SUA = [
      { id: 'h1', text: '피아노 치기', to: '취미' }, { id: 'd1', text: '수의사', to: '꿈' },
      { id: 's1', text: '그림 그리기', to: '잘하는 것' }, { id: 'x1', text: '시끄러운 곳', to: '싫어하는 것' },
      { id: 'h2', text: '고양이 사진 모으기', to: '취미' }, { id: 'n1', text: '다문화 가정이라 늘 외로울 것이다' },
    ];
    const PHRASE = [{ id: 'p1', text: '"요즘 빠져 있는 거 있어?"', ok: true }, { id: 'p2', text: '"이번 주말에 같이 도서관 갈래?"', ok: true },
      { id: 'x1', text: '"너는 어느 나라 사람이야?"' }, { id: 'x2', text: '"한국말 진짜 잘하네!"' }, { id: 'x3', text: '"엄마 나라 말 해 봐!"' }];

    ALL.push(
      // ---- 도입 ----
      M('intro.family-forms', {
        title: '여러 가족의 모습', method: '여러 가족의 모습', tool: 'collage', minutes: 6,
        levels: { easy: '시연에서 가족 조각 3개(조부모·한부모·다문화 가족 카드)가 지도에 놓이는 것을 보고 함께 읽는다.', base: '가족 조각 5개(입양·부부만 가족 포함)가 고르게 놓이는 시연을 보고 가족마다 이름을 붙여 말한다.', challenge: '가족들의 공통점(함께 돌보고 아끼는 사람들)을 한 줄로 짝에게 말한다.' },
        intro: {
          teacher: '"\'보통 가족\'이라고 하면 어떤 모습이 떠오르나요?" 시연 단추로 조부모와 손자녀·한부모·다문화·입양·부부만 사는 가상 가족 조각이 \'가상 반 가족 지도\'에 고르게 놓이는 모습을 보인다. "다문화 가족은 특별한 가족이잖아요"라는 말이 나오면 "이 다섯 가족 가운데 \'특별하지 않은\' 가족은 어느 것일까요?"라고 되묻는다. 이 지도는 가상 가족이며 학생 자기 가족을 그리거나 말하게 하지 않는다고 밝힌다.',
          student: '가상 반 가족 지도에 여러 가족 모습(조부모·한부모·다문화·입양·부부만 가족)이 놓이는 것을 보고, 가족들의 공통점을 생각해요.',
          demo: { tool: 'collage', options: { maxPieces: 8, shapes: ['circle', 'square', 'heart', 'star', 'leaf'] }, sequence: [{ has: [{ shape: 'heart', color: '분홍', n: 1 }, { shape: 'circle', color: '노랑', n: 1 }, { shape: 'star', color: '파랑', n: 1 }, { shape: 'leaf', color: '초록', n: 1 }, { shape: 'square', color: '보라', n: 1 }] }] },
          art: { draw: 'a paper-cut village map with five small paper houses, each with a different family inside: grandparents with a grandchild, a single parent with a child, parents from two different countries with children, an adoptive family and a couple', banner: '가족은 여러 모습', extra: [{ motif: 'house', x: 300, y: 222 }] },
        },
        notes: '가족 조각은 가상 가족 카드를 뜻한다(조각에 글자를 넣을 수 없어 교사가 조각마다 가족 이름을 말해 준다). 학생의 가족 형태를 묻거나 발표시키지 않는다. ' + SAFE_NOTE,
      }),
      M('intro.question-sort', {
        title: '괜찮은 질문, 불편한 질문', method: '괜찮은 질문, 불편한 질문', tool: 'sortboard', minutes: 6,
        levels: { easy: '교사가 질문 4장(o1·u1·o2·u2)을 읽고 학생이 손을 들어 고른다.', base: '질문 6장이 두 바구니에 나뉘는 시연을 보고, 하나를 골라 왜 불편할 수 있는지 말한다.', challenge: '불편할 수 있는 질문 하나를 괜찮은 질문으로 바꿔 짝에게 말한다.' },
        intro: {
          teacher: '"\'한국말 진짜 잘하네!\'는 칭찬일까요?" 시연 단추로 질문 6장이 \'괜찮은 질문\'·\'불편할 수 있는 질문\' 바구니에 나뉘는 모습을 보인다. "칭찬인데 왜 불편해요?"라는 말이 나오면 "한국에서 태어나 한국말로 자란 친구가 그 말을 날마다 듣는다면, 그 친구는 자신이 어디 사람이라고 느낄까요?"라고 되묻는다. 질문의 뜻보다 듣는 사람이 그것을 몇 번째 듣는지, 어떤 기분인지를 함께 본다고 짚는다.',
          student: '친구에게 건네는 질문 6장을 괜찮은 질문과 불편할 수 있는 질문으로 나누어 보고, 하나를 골라 까닭을 말해요.',
          demo: { tool: 'sortboard', options: { slots: QS, cards: strip(QCARD) }, sequence: [{ sort: sortOf(QS, QCARD) }] },
          art: { draw: 'a paper-cut school hallway with two students talking, above them floating speech bubbles, some bright and open, some with small thorns on their edges', banner: '이 질문, 괜찮을까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: SAFE_NOTE,
      }),

      // ---- 활동 ----
      M('activity.micro-dilemma', {
        title: '새 학기 첫 대화 갈림길', method: '새 학기 첫 대화 갈림길', tool: 'dilemma', minutes: 15,
        levels: { easy: '첫 문항은 선택 1번만 하고 이안의 반응을 본다. 둘째·셋째 문항은 한 장면에서 고른다.', base: '첫 문항에서 선택 2번을 끝까지 가고 근거 카드를 고른다.', challenge: '첫 문항에서 선택 3번까지 가고, 서로 다른 결말 세 개를 견주어 대화 원칙(실수하면 사과)까지 근거로 고른다.' },
        activity: {
          title: '새 학기 첫 대화 갈림길', tool: 'dilemma',
          teacher: '"새 짝 이안의 어머니가 외국 분이라는 말을 들었어요. 첫마디로 무엇을 물어볼까요?" 학생마다 한 길을 끝까지 가 보고 되돌아가 이안의 반응을 견주게 한다. "관심 있어서 묻는 건데요"라는 학생에게 "처음 만난 날 \'너희 집은 어떤 가족이야?\'부터 들으면 나는 어떨까요?"라고 되묻는다. 관심은 출신이 아니라 그 사람에게 두고, 가족 이야기는 본인이 꺼낼 때 듣는다는 점을 짚는다.',
          task: '새 짝 이안과의 첫 대화 장면에서 길을 골라 이안의 반응과 관계를 따라가고, 끝에서 대화의 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL({ easy: '새 짝 이안에게 첫마디를 건네요. 한 번 골라 결과를 보세요.', base: '새 짝 이안에게 첫마디를 건네요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '세 번 골라 끝까지 가고, 다른 결말도 모두 가 본 뒤 근거를 고르세요.' },
              '새 학기 첫 대화', PAIR, [['interest', 'back', 'listen']], PAIR_R, ['r1', 'r2'], PAIR_C),
            ONE('수행평가 발표 때 선생님 말씀에 대해 내가 할 행동을 고르세요.', '"네 나라" 발표', { text: '사회 시간, 한 선생님이 "이안이 엄마 나라 문화를 소개해 보자"고 하셨다. 이안은 당황한 얼굴이다.', ask: '나는 어떻게 할까?', motif: 'house', choices: [
              { id: 'check', text: '쉬는 시간에 이안에게 괜찮은지 묻고, 원하면 함께 선생님께 말씀드린다', result: '이안이 "나는 다른 주제를 하고 싶어"라고 말하고 함께 말씀드린다.', impact: [{ who: '이안', text: '자기 주제를 고른다', tone: 1 }], ending: '이안이 스스로 정하게 도왔어요.' },
              { id: 'cheer', text: '"좋겠다, 해 봐!"라며 박수를 친다', result: '이안이 거절하기 더 어려워진다.', impact: [{ who: '이안', text: '원치 않는 발표를 떠맡는다', tone: -1 }], why: '출신을 대표해 발표하는 일은 본인이 원할 때만 해요.' },
              { id: 'nothing', text: '내 일이 아니라며 모른 척한다', result: '이안은 혼자 고민한다.', impact: [{ who: '이안', text: '혼자 감당한다', tone: -1 }], why: '짝으로서 괜찮은지 묻는 한마디는 할 수 있어요.' }] }, ['check']),
            ONE('"한국말 잘하네"라고 말해 버린 뒤 할 행동을 고르세요.', '말실수 뒤', { text: '이안의 발표가 끝나고 나도 모르게 "와, 한국말 진짜 잘하네"라고 말했다. 이안이 "나 여기서 태어났는데"라고 했다.', ask: '어떻게 할까?', motif: 'house', choices: [
              { id: 'sorry', text: '"아, 내가 잘못 말했다. 미안해. 발표 내용 좋았어"라고 한다', result: '이안이 "괜찮아, 고마워"라며 웃는다.', impact: [{ who: '이안', text: '사과와 진짜 칭찬을 듣는다', tone: 1 }], ending: '실수를 바로 인정하고 내용을 칭찬했어요.' },
              { id: 'excuse', text: '"칭찬한 건데 왜 그래?"라고 한다', result: '이안이 더 말하지 않는다.', impact: [{ who: '이안', text: '또 외국인 취급을 받는다', tone: -1 }], why: '칭찬하려던 마음과 상대가 받은 느낌은 다를 수 있어요. 먼저 사과해요.' },
              { id: 'joke', text: '웃으며 넘어가려고 장난을 친다', result: '어색함이 그대로 남는다.', impact: [{ who: '이안', text: '불편함이 남는다', tone: -1 }], why: '장난보다 짧은 사과가 관계를 지켜요.' }] }, ['sorry'], null, null,
              { conclude: '처음 만난 친구에게는 출신보다 그 사람에게 관심을 두고, 가족 이야기는 본인이 원할 때 들어요. 실수했으면 바로 사과하면 돼요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '새 짝과의 첫 대화에서 건넬 질문 하나와 피할 질문 하나를 까닭과 함께 써요.' }],
          easy: [{ type: 'choice', prompt: '새 짝에게 처음 건네기 좋은 말은?', options: ['"쉬는 시간에 주로 뭐 해?"', '"엄마 나라 말 해 봐!"'], answer: '"쉬는 시간에 주로 뭐 해?"' }] },
        notes: SAFE_NOTE + ' ' + NATION_NOTE,
      }),
      M('activity.script', {
        title: '대화 역할극 대본', method: '대화 역할극 대본', tool: 'rubric-writing', minutes: 15,
        levels: { easy: '셋째 문항에서 문장 틀을 따라 4줄 안팎(4~5문장) 대본을 쓴다.', base: '셋째 문항에서 6줄 안팎(5~6문장) 대본을 쓰고 기준표(출신보다 사람·사생활 존중·질문 대신 경청)로 점검한다.', challenge: '셋째 문항에서 실수한 뒤 사과하는 대사를 넣어 쓰고 기준 하나를 더 점검한다.' },
        activity: {
          title: '대화 역할극 대본', tool: 'rubric-writing',
          teacher: '"첫 만남 대본에서 \'질문\'보다 \'듣기\'가 많으면 대화가 어떻게 달라질까요?" 대본에 맞장구·되묻기 같은 듣는 말을 넣게 한다. "그럼 출신 이야기는 아예 하면 안 돼요?"라는 학생에게 "상대가 먼저 꺼내면 귀 기울여 듣는 건 좋아요. 내가 먼저 캐묻는 것과 무엇이 다를까요?"라고 되묻는다. 대본 속 인물은 가상 인물(이안·나)이고 실제 친구 이름은 쓰지 않는다.',
          task: '가상 인물 이안과 처음 만나는 대화 대본을 쓰고, 출신보다 사람·사생활 존중·경청 기준으로 스스로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT(RW('첫 장면: 이안의 관심사를 묻는 대사 두 줄을 쓰세요.', { topic: '처음 만난 이안에게 출신이 아니라 관심사를 묻는 대사와 이안의 대답을 두 줄로 쓰세요.', min: 20, max: 140, s: [2, 3], title: '대본 ① 관심사 묻기' }, ['출신이 아니라 관심사를 물었다', '실제 친구 이름을 쓰지 않았다']),
              RW('틀을 채워 첫 대사를 쓰세요.', { topic: '이안의 관심사를 묻는 대사를 쓰세요.', min: 15, max: 120, s: [2, 3], starter: '나: "이안아, 너는 요즘 ___?" / 이안: "나는 ___."' }, ['출신이 아니라 관심사를 물었다', '실제 친구 이름을 쓰지 않았다'])),
            IT(RW('둘째 장면: 이안의 말에 귀 기울이는 대사 두 줄을 쓰세요.', { topic: '이안이 관심사 이야기를 할 때, 새 질문을 쏟아내지 않고 맞장구치거나 되물으며 듣는 대사 두 줄을 쓰세요.', min: 20, max: 140, s: [2, 3], title: '대본 ② 듣기' }, ['맞장구나 되묻기로 들었다', '사생활을 캐묻지 않았다']),
              RW('틀을 채워 듣는 대사를 쓰세요.', { topic: '이안의 이야기를 듣는 대사를 쓰세요.', min: 15, max: 120, s: [2, 3], starter: '이안: "___." / 나: "오, ___ 구나! 그래서 ___?"' }, ['맞장구나 되묻기로 들었다', '사생활을 캐묻지 않았다'])),
            IT(RW('앞의 대사를 이어 6줄 안팎의 첫 만남 대본을 완성하세요.', { topic: '이안과 나의 첫 만남 대본을, 관심사 묻기·듣기·다음 약속까지 6줄 안팎으로 완성하세요.', min: 60, max: 360, s: [5, 6], title: '첫 만남 대본' }, ['출신보다 그 사람에게 관심을 두었다', '사생활을 캐묻지 않았다', '질문보다 듣는 대사가 많다']),
              RW('틀을 따라 4줄 안팎의 대본을 완성하세요.', { topic: '이안과 나의 첫 만남 대본을 4줄 안팎으로 완성하세요.', min: 40, max: 260, s: [4, 5], starter: '나: "___?" / 이안: "___." / 나: "오, ___! 그럼 ___?" / 이안: "___."' }, ['출신보다 그 사람에게 관심을 두었다', '사생활을 캐묻지 않았다']),
              RW('실수한 뒤 사과하는 대사를 넣어 대본을 완성하세요.', { topic: '첫 만남 대본에, 내가 무심한 질문("너 진짜 한국인이야?")을 했다가 바로 사과하고 대화를 이어 가는 장면을 넣어 6줄 안팎으로 완성하세요.', min: 70, max: 400, s: [5, 6], title: '실수와 사과가 있는 대본' }, ['출신보다 그 사람에게 관심을 두었다', '사생활을 캐묻지 않았다', '질문보다 듣는 대사가 많다', '실수를 인정하고 사과했다'], [['미안', '사과']]),
              { conclude: '좋은 첫 대화는 출신보다 그 사람에게 관심을 두고, 캐묻기보다 들어요. 실수하면 바로 사과하고 이어 가요.' }),
          ],
        },
        worksheet: { items: [{ type: 'check', prompt: '짝의 대본을 읽고 들어 있는 것에 표시해요.', options: ['관심사를 묻는 말', '맞장구·되묻기', '사생활을 캐묻지 않음', '실제 친구 이름 없음'] }] },
        notes: SAFE_NOTE,
      }),
      M('activity.family-data', {
        title: '다양한 가족 자료 읽기', method: '다양한 가족 자료 읽기', tool: 'chart', minutes: 15,
        levels: { easy: '막대 3개(부부와 자녀·혼자 사는 가구·부부만)만 있는 그래프에서 값을 보며 읽는다.', base: '막대 5개를 읽고, 가장 많은 모습이 몇 가구인지 쓴 뒤 "보통 가족"이라는 말의 문제를 고른다.', challenge: '셋째 문항에서 이 자료의 한계(가상·다문화 여부는 칸에 없음)를 짚는 보기를 고른다.' },
        activity: {
          title: '다양한 가족 자료 읽기', tool: 'chart',
          teacher: '"가상 마을 100가구 가운데 \'부부와 자녀\' 가족은 몇 가구일까요? 절반이 넘을까요?" 수업용 가상 자료라고 먼저 밝히고 막대를 함께 읽는다. "그래도 부부와 자녀가 보통 가족이잖아요"라는 학생에게 "100가구 가운데 70가구가 다른 모습이라면, \'보통\'이라는 말은 누구를 빼놓게 될까요?"라고 되묻는다. 다문화 가족은 이 다섯 모습 어디에나 있을 수 있는, 가족의 배경 가운데 하나라는 점을 짚는다.',
          task: '가상 마을 100가구의 가족 모습 막대그래프를 읽고, "보통 가족"이라는 말이 왜 문제인지 찾아요.',
          levels: { easy: { showValues: true }, base: {}, challenge: {} },
          items: [
            IT(RD('가상 마을에서 가장 많은 가족 모습을 고르세요.', Object.assign({}, FAM_O, { question: '가장 많은 가족 모습은?', choices: FAM.map((d) => d[0]) }), { pick: 1 }),
              RD('막대 3개 가운데 가장 많은 가족 모습을 고르세요.', Object.assign({}, FAM_O, { data: FAM.slice(0, 3), question: '가장 많은 가족 모습은?', choices: FAM.slice(0, 3).map((d) => d[0]) }), { pick: 1 })),
            IT(RD('"부부와 자녀"가 아닌 가구는 모두 몇 가구인지 쓰세요.', Object.assign({}, FAM_O, { question: '모두 몇 가구인가요?' }), { value: 70 }),
              RD('"부부와 자녀"는 몇 가구인지 읽어 쓰세요.', Object.assign({}, FAM_O, { data: FAM.slice(0, 3), question: '몇 가구인가요?' }), { value: 30 })),
            IT(RD('이 자료로 볼 때 "보통 가족"이라는 말의 문제를 고르세요.', Object.assign({}, FAM_O, { question: '"보통 가족"이라는 말의 문제는?', choices: ['많은 가족을 "보통이 아닌" 가족으로 만든다', '부부와 자녀 가족이 가장 많다는 뜻이다', '아무 문제가 없다'] }), { pick: 0 }),
              RD('이 자료로 볼 때 "보통 가족"이라는 말의 문제를 고르세요.', Object.assign({}, FAM_O, { data: FAM.slice(0, 3), question: '"보통 가족"이라는 말의 문제는?', choices: ['다른 모습의 가족을 빼놓는다', '아무 문제가 없다'] }), { pick: 0 }),
              RD('이 자료만으로는 알 수 없는 것을 고르세요.', Object.assign({}, FAM_O, { question: '이 자료로 알 수 없는 것은?', choices: ['다문화 가족이 몇 가구인지', '혼자 사는 가구가 몇 가구인지', '가장 적은 가족 모습'] }), { pick: 0 }),
              { conclude: '가족의 모습은 여러 가지이고, 어느 하나가 \'보통\'이 아니에요. 다문화 가족도 그 여러 가족의 하나예요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '"보통 가족"이라는 말 대신 쓸 수 있는 표현과 그 까닭을 한 문장으로 써요(가상 자료임을 밝혀요).' }],
          easy: [{ type: 'choice', prompt: '가상 마을에서 가장 많은 가족 모습은?', options: ['혼자 사는 가구', '부부만'], answer: '혼자 사는 가구' }] },
        notes: '가구 수(30·32·21·10·7)는 수업용 가상 값이다. 실제 가구 구성은 통계청 인구총조사로 확인해 교사가 덧붙인다. 학생 자기 가족이 어느 막대인지 묻지 않는다.',
      }),
      M('activity.strength-map', {
        title: '친구를 한 사람으로 보기', method: '친구를 한 사람으로 보기', tool: 'mindmap', minutes: 15,
        levels: { easy: '가지 3개(취미·꿈·잘하는 것)에 카드를 나누고, 틀린 가지에 놓으면 바로 알려 준다.', base: '이안과 수아의 가지 4개(취미·꿈·잘하는 것·싫어하는 것)를 채운다(함정 1장씩).', challenge: '셋째 문항에서 \'나와 같은 점\' 가지가 더해져, 가상 인물 유준과 이안의 같은 점과 다른 점을 가른다.' },
        activity: {
          title: '친구를 한 사람으로 보기', tool: 'mindmap',
          teacher: '"이안을 한 줄로 소개한다면 \'엄마가 외국 분인 친구\'일까요, \'게임 개발자가 꿈인 수학 잘하는 친구\'일까요?" 가지를 채울 때마다 그 카드가 이안의 어떤 면인지 말하게 한다. "엄마 나라 이야기를 늘 하고 싶어 한다"는 함정 카드를 고른 학생에게 "그건 이안이 말했나요, 우리가 짐작했나요?"라고 되묻는다. 한 사람에게는 출신 말고도 수많은 면이 있다는 점을 짚는다.',
          task: '가상 인물 이안과 수아를 가운데 두고 취미·꿈·잘하는 것·싫어하는 것 가지를 채워, 출신 말고도 많은 면이 있음을 확인해요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
          items: [
            IT(SB('이안의 여러 면을 가지에 나누세요. 이안이 말한 적 없는 짐작 카드는 남겨요.', IAN, IAN_C, { topic: '이안' }),
              SB('이안의 여러 면을 가지 세 개에 나누세요.', ['취미', '꿈', '잘하는 것'], pickCards(IAN_C, ['h1', 'd1', 's1', 'n1']), { topic: '이안' })),
            IT(SB('수아의 여러 면을 가지에 나누세요. 짐작 카드는 남겨요.', IAN, SUA, { topic: '수아' }),
              SB('수아의 여러 면을 가지 세 개에 나누세요.', ['취미', '꿈', '잘하는 것'], pickCards(SUA, ['h1', 'd1', 's1', 'n1']), { topic: '수아' })),
            IT(PB('이안을 소개하는 말로 알맞은 것을 골라 담으세요.', '이안 소개', [
              { id: 'p1', text: '"게임 개발자가 꿈인 수학 잘하는 친구"', ok: true }, { id: 'p2', text: '"친구 고민을 잘 들어 주는 웹툰 좋아하는 친구"', ok: true },
              { id: 'p3', text: '"엄마가 외국 분인 친구"' }, { id: 'p4', text: '"다문화 친구"' }], { topic: '이안 소개하기' }),
              null,
              SB('가상 인물 유준은 웹툰과 수학을 좋아하고 꿈은 요리사예요. 이안과 같은 점·다른 점을 가르세요.', ['나(유준)와 같은 점', '이안만의 점'], [
                { id: 'q1', text: '웹툰 보기를 좋아한다', to: '나(유준)와 같은 점' }, { id: 'q2', text: '수학 문제 빨리 풀기', to: '나(유준)와 같은 점' },
                { id: 'q3', text: '게임 개발자가 꿈이다', to: '이안만의 점' }, { id: 'q4', text: '자전거로 한강 가기를 좋아한다', to: '이안만의 점' },
                { id: 'q5', text: '출신이 달라 공통점이 없다' }], { topic: '같은 점과 다른 점' }),
              { conclude: '친구를 출신 하나로 소개하면 그 친구의 다른 면이 모두 사라져요. 한 사람은 취미·꿈·잘하는 것이 모인 한 사람이에요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '이안을 출신이 아닌 다른 면으로 소개하는 한 문장을 써요.' }],
          easy: [{ type: 'choice', prompt: '이안을 소개하는 말로 알맞은 것은?', options: ['게임 개발자가 꿈인 친구', '엄마가 외국 분인 친구'], answer: '게임 개발자가 꿈인 친구' }] },
        notes: SAFE_NOTE,
      }),

      // ---- 정리 ----
      M('wrap.phrase-card', {
        title: '존중의 대화 문장 카드', method: '존중의 대화 문장 카드', tool: 'wordcards', minutes: 7,
        levels: { easy: '질문 카드 3장(존중 1·함정 2) 가운데 존중의 질문 1장을 담는다.', base: '질문 카드 5장 가운데 존중의 질문 2장을 담는다.', challenge: '첫 질문이 빈칸 채우기로 바뀌어, 바꾼 질문 옆에 원래 질문을 함께 채운다.' },
        wrap: {
          teacher: '"오늘 고른 존중의 질문 두 개를 반 게시판에 붙인다면 무엇일까요?" 질문 카드를 담은 뒤 활동지에 내 카드를 써서 붙이게 한다. "궁금한 걸 물어보는 게 왜 나빠요?"라는 학생에게 "궁금한 건 나쁘지 않아요. 그 질문을 처음 만난 날 하는지, 친해진 뒤 상대가 이야기를 꺼낼 때 듣는지가 달라요"라고 구별해 준다.',
          exitTicket: [
            IT(X('wordcards', PB('존중의 대화를 여는 질문 카드만 바구니에 담아요.', '존중의 질문', PHRASE)),
              PB('존중의 대화를 여는 질문 카드 하나를 담아요.', '존중의 질문', pickCards(PHRASE, ['p1', 'x1', 'x2'])),
              FB('바꾼 질문과 그 원래 질문을 짝지어 채워요.', [['원래 질문 "너는 어느 나라 사람이야?" → 바꾼 질문: ___', '"요즘 빠져 있는 거 있어?"'], ['원래 질문 "엄마 나라 말 해 봐!" → 바꾼 질문: ___', '"이번 주말에 같이 도서관 갈래?"']], ['"한국말 진짜 잘하네!"']), { difficulty: 0.2 }),
            { type: 'choice', prompt: '"한국말 잘하네"가 불편할 수 있는 까닭은?', options: ['상대를 한국 사람이 아닌 사람으로 여기는 말일 수 있다', '칭찬은 언제나 불편하다', '말이 너무 짧다'], answer: 0, difficulty: 0.2, explain: '한국에서 나고 자란 친구에게는 \'넌 여기 사람이 아니야\'라는 뜻으로 들릴 수 있어요.' },
            { type: 'short', prompt: '게시판에 붙일 나의 존중의 질문 카드를 한 줄로 써요.' },
          ],
        },
        worksheet: {
          title: '존중의 대화 문장',
          items: [
            { type: 'table', prompt: '불편할 수 있는 질문을 존중의 질문으로 바꿔 써요.', columns: ['원래 질문', '바꾼 질문'], cells: [['"너 진짜 한국인이야?"', ''], ['"엄마 나라 말 해 봐!"', '']], answer: '(예) "요즘 빠져 있는 거 있어?" / "주말에 같이 놀래?"' },
            { type: 'short', prompt: '내가 고른 존중의 질문 두 개를 써요.' },
          ],
        },
      }),
      M('wrap.talk-check', {
        title: '대화 습관 점검', method: '대화 습관 점검', tool: 'emotion', minutes: 7,
        levels: { easy: '첫 항목("출신부터 묻지 않는다")만 눈금 3칸으로 표시하고, 둘째 항목은 교사가 장면 예시와 함께 읽어 준다.', base: '두 항목에 눈금 5칸으로 확신 정도를 표시한다.', challenge: '눈금 7칸으로 표시하고, 셋째 질문에서 다음 대화에서 할 일을 고른다.' },
        wrap: {
          teacher: '"\'출신부터 묻지 않는다\', \'사생활을 존중한다\', 다음 새 친구를 만나면 할 자신이 얼마나 있나요?" 눈금에는 정답이 없고 낮게 표시한 항목이 연습할 항목이라고 말해 준다. "궁금한 걸 참는 게 어려워요"라는 학생에게 "궁금한 마음을 \'요즘 뭐 좋아해?\'로 바꿔 보면 어떨까요?"라고 제안한다. 점검 결과는 걷지 않는다.',
          exitTicket: [
            IT(SCALE('"처음 만난 친구에게 출신부터 묻지 않는다"를 할 자신이 얼마나 있나요?', '새 친구와 처음 이야기할 때 관심사부터 묻기', 5, { difficulty: 0.1 }),
              { toolOptions: { steps: 3, scaleLabels: { 1: '아직 어려워요', 3: '자신 있어요' } } },
              { toolOptions: { steps: 7, scaleLabels: { 1: '아직 어려워요', 7: '자신 있어요' } } }),
            IT(SCALE('"가족 이야기는 친구가 원할 때 듣는다"를 할 자신이 얼마나 있나요?', '친구의 가족·배경을 캐묻지 않고 기다리기', 5, { difficulty: 0.1 }),
              { toolOptions: { steps: 3, scaleLabels: { 1: '아직 어려워요', 3: '자신 있어요' } } },
              { toolOptions: { steps: 7, scaleLabels: { 1: '아직 어려워요', 7: '자신 있어요' } } }),
            { type: 'choice', prompt: '다음 새 친구와의 대화에서 할 일로 가장 알맞은 것은?', options: ['관심사를 묻고, 상대가 꺼낸 이야기를 끝까지 듣는다', '출신을 먼저 알아 두고 이야기한다', '어색하면 말을 걸지 않는다'], answer: 0, difficulty: 0.2, explain: '관심사로 시작하고 끝까지 들으면 한 사람으로 만나게 돼요.' },
          ],
        },
        worksheet: {
          title: '나의 대화 습관',
          items: [
            { type: 'check', prompt: '내가 이미 하는 대화 습관에 표시해요.', options: ['관심사부터 묻는다', '출신을 캐묻지 않는다', '끝까지 듣는다', '실수하면 사과한다'] },
            { type: 'short', prompt: '낮게 표시한 항목을 다음에 어떻게 연습할지 한 문장으로 써요.' },
          ],
        },
      }),
    );
  }

  // ==== 8학년 · 문화 다양성과 인권의 기준 (multi.m.culture-rights) ====
  {
    const M = MK('culture-rights', [8]);
    const CR = ['존중할 문화', '멈출 행동(인권 침해)'];
    const CRC = [
      { id: 'c1', text: '신념에 따라 어떤 음식을 먹지 않는다', to: '존중할 문화' }, { id: 'h1', text: '"우리 집 방식"이라며 가족을 때린다', to: '멈출 행동(인권 침해)' },
      { id: 'c2', text: '명절에 가족과 고유한 음식을 나눈다', to: '존중할 문화' }, { id: 'h2', text: '본인이 원하지 않는 결혼을 집안이 정한다', to: '멈출 행동(인권 침해)' },
      { id: 'c3', text: '종교적 이유로 머리에 천을 두른다', to: '존중할 문화' }, { id: 'h3', text: '"동아리 전통"이라며 후배에게 체벌한다', to: '멈출 행동(인권 침해)' },
    ];
    const AGREE = { mode: 'scale', situation: '"문화라면 무엇이든 존중해야 한다"', feeling: '생각', steps: 5, scaleLabels: { 1: '전혀 아니다', 5: '매우 그렇다' } };
    // 체육복 규정과 종교적 옷차림(가상). 가상 인물: 종교적 이유로 머리에 천을 두르는 학생 아린
    const PE = { text: '가상 중학교 규정: "체육 시간에는 모자·머리 장식을 벗는다(안전)". 종교적 이유로 머리에 천을 두르는 아린이 이 규정 때문에 체육 시간마다 견학만 하고 있다. 나는 학생회 임원이다.', ask: '학생회는 어떤 의견을 낼까?', motif: 'house', choices: [
      { id: 'rule', text: '"규정은 규정"이라며 그대로 두자고 한다', result: '아린은 한 학기 내내 체육에 참여하지 못한다.', impact: [{ who: '아린', text: '체육 시간에 배울 권리를 잃는다', tone: -1 }], why: '규정의 목적(안전)을 지킬 다른 방법이 있는지 먼저 따져요.', end: '규정을 그대로 두어 아린이 계속 빠졌어요.',
        next: { text: '아린이 "벗지 않고 안전하게 할 방법은 없을까요?"라고 학생회에 묻는다.', ask: '어떻게 답할까?', choices: [
          { id: 'no', text: '"한 명 때문에 규정을 바꿀 수 없어"라고 답한다', result: '아린은 더 묻지 않는다.', impact: [{ who: '아린', text: '참여를 포기한다', tone: -1 }] },
          { id: 'look', text: '규정의 목적(안전)을 다시 살펴보자고 한다', result: '목적은 \'걸려 넘어지지 않게\'라는 것을 확인한다.', impact: [{ who: '아린', text: '대안을 찾을 길이 열린다', tone: 1 }] }] } },
      { id: 'allow', text: '아린의 옷차림을 허용하자고 제안한다', result: '아린이 체육에 참여한다. 몇몇 학생이 "왜 아린만?"이라고 한다.', impact: [{ who: '아린', text: '체육에 참여한다', tone: 1 }], end: '허용해 아린이 참여했어요.',
        next: { text: '"왜 아린만 봐줘?"라는 말이 학급에 퍼진다.', ask: '학생회는 어떻게 할까?', choices: [
          { id: 'hide', text: '설명 없이 그냥 넘어간다', result: '아린을 향한 수군거림이 이어진다.', impact: [{ who: '아린', text: '눈총을 받는다', tone: -1 }], why: '설명하지 않으면 존중이 \'특별 대우\'로 오해받아요.' },
          { id: 'explain', text: '규정의 목적은 안전이고, 안전하면 누구든 같은 기준으로 허용된다고 설명한다', result: '"아, 기준이 같구나"라는 반응이 나온다.', impact: [{ who: '반 학생들', text: '기준을 이해한다', tone: 1 }], end: '같은 기준이라는 것을 설명했어요.',
            next: { text: '학생회가 규정을 어떻게 남길지 정해야 한다.', ask: '어떻게 할까?', choices: [
              { id: 'rule2', text: '"안전하면 신념에 따른 옷차림을 허용한다"로 규정을 고치자고 건의한다', result: '다음에 오는 학생도 따로 허락받지 않아도 된다.', impact: [{ who: '앞으로 올 학생들', text: '같은 기준으로 존중받는다', tone: 1 }] },
              { id: 'keep', text: '아린 한 명만 예외로 계속 둔다', result: '다음 학생은 또 처음부터 허락을 받아야 한다.', impact: [{ who: '앞으로 올 학생들', text: '매번 따로 설득해야 한다', tone: 0 }], why: '한 사람만의 예외로 두기보다 같은 기준을 규정에 담으면 모두가 예측할 수 있어요.' }] } }] } },
      { id: 'together', text: '아린·보호자·체육 선생님이 함께 안전한 대안을 찾자고 한다', result: '운동할 때 몸에 붙는 천을 쓰기로 함께 정한다.', impact: [{ who: '아린', text: '신념과 안전을 함께 지킨다', tone: 1 }], ending: '당사자와 함께 신념과 안전을 둘 다 지키는 방법을 찾았어요.' }] };
    const PE_R = [{ id: 'r1', text: '아무도 해치지 않는 신념은 존중한다' }, { id: 'r2', text: '규정의 목적을 지킬 다른 방법이 있으면 바꿀 수 있다' },
      { id: 'r3', text: '다수와 다르면 따라야 한다', why: '다르다는 것만으로 멈출 이유가 되지 않아요. 누가 해를 입는지를 봐요.' }, { id: 'r4', text: '종교는 학교와 상관없다', why: '학교는 누구나 자기 신념을 지키며 배울 수 있는 곳이어야 해요.' }];
    const PE_C = { reasons: [{ id: 'r5', text: '같은 기준을 규정에 담으면 다음 사람도 존중받는다' }], ok: ['r5'], explore: 3 };
    const KI = ['누가 피해를 보나', '스스로 선택했나', '몸과 마음이 안전한가'];
    const CLUB = [
      { id: 'a1', text: '맞는 후배가 다친다', to: '누가 피해를 보나' }, { id: 'b1', text: '후배는 거절할 수 없다', to: '스스로 선택했나' },
      { id: 'e1', text: '몸과 마음에 상처가 남는다', to: '몸과 마음이 안전한가' }, { id: 't1', text: '오래된 전통이다' },
    ];
    const FOOD = [
      { id: 'a1', text: '피해를 보는 사람이 없다', to: '누가 피해를 보나' }, { id: 'b1', text: '스스로 고른 신념이다', to: '스스로 선택했나' },
      { id: 'e1', text: '건강을 해치지 않는다', to: '몸과 마음이 안전한가' }, { id: 't1', text: '우리와 달라서 낯설다' },
    ];
    const VERD = ['존중한다', '멈춘다'];
    const CASES = [
      { id: 'v1', text: '명절에 어른께 큰절을 한다', to: '존중한다' }, { id: 'v2', text: '"동아리 전통"이라며 후배를 때린다', to: '멈춘다' },
      { id: 'v3', text: '신념에 따라 어떤 음식을 먹지 않는다', to: '존중한다' }, { id: 'v4', text: '본인이 원하지 않는 결혼을 정한다', to: '멈춘다' },
    ];
    const CASES_MORE = [{ id: 'v5', text: '가족 행사에 아이가 원치 않아도 꼭 참석시킨다', to: '존중한다' }, { id: 'v6', text: '자녀를 학교에 보내지 않고 일만 시킨다', to: '멈춘다' }];
    const MENU1 = [
      { id: 'm1', text: '두부 채소조림', ok: true }, { id: 'm2', text: '불고기' },
      { id: 'm3', text: '땅콩조림' }, { id: 'm4', text: '달걀말이' }, { id: 'm5', text: '나물 비빔밥', ok: true },
    ];
    const MENU1E = [
      { id: 'm1', text: '두부 채소조림', ok: true }, { id: 'm2', text: '불고기' },
      { id: 'm3', text: '땅콩조림' }, { id: 'm4', text: '달걀말이', ok: true },
    ];
    const MENU2 = [
      { id: 's1', text: '소고기 미역국' }, { id: 's2', text: '채소 된장국', ok: true },
      { id: 's3', text: '우유 푸딩' }, { id: 's4', text: '제철 과일', ok: true }, { id: 's5', text: '땅콩 쿠키' },
    ];
    const MARK = [
      { id: 'k1', text: '알레르기 유발 재료를 표시한다', ok: true }, { id: 'k2', text: '고기·달걀·우유가 든 반찬을 표시한다', ok: true },
      { id: 'k3', text: '못 먹는 학생 이름을 식단표에 적는다' }, { id: 'k4', text: '못 먹는 학생은 도시락을 싸 오게 한다' },
    ];
    const COST = [
      { id: 'q1', text: '모두 먹는 반찬을 한두 가지 늘린다', ok: true }, { id: 'q2', text: '양념·고명을 따로 담아 고르게 한다', ok: true },
      { id: 'q3', text: '학생마다 다른 식단을 날마다 따로 만든다' }, { id: 'q4', text: '조건이 있는 학생은 급식에서 뺀다' },
    ];
    const RECHECK = [['수업 전: 문화는 모두 존중', 18], ['수업 후: 문화는 모두 존중', 9], ['수업 전: 인권 기준이 먼저', 10], ['수업 후: 인권 기준이 먼저', 19]];
    const RECHECK_O = { type: 'bar', mode: 'read', title: '우리 반 판단 눈금 견주기(28명, 수업용 가상 집계)', unit: '명', xLabel: '응답', yLabel: '학생 수', data: RECHECK };
    const RULES = [['원칙 1: 다른 문화의 ___은(는) 존중한다', '음식·옷·명절 같은 생활 방식'], ['원칙 2: ___ 행동은 어떤 문화라도 멈춘다', '누군가의 몸과 마음을 해치는'], ['원칙이 적용되는 예: ___', '"전통"이라며 후배를 때리는 일을 멈춘다']];

    ALL.push(
      // ---- 도입 ----
      M('intro.culture-sort', {
        title: '존중할 문화, 멈출 행동', method: '존중할 문화, 멈출 행동', tool: 'sortboard', minutes: 6,
        levels: { easy: '교사가 사례 4장(c1·h1·c2·h2)을 읽고 학생이 손을 들어 고른다.', base: '사례 6장이 두 바구니에 나뉘는 시연을 보고, 우리 문화 사례(동아리 체벌)도 멈출 행동에 들어감을 확인한다.', challenge: '애매한 사례(가족 행사에 꼭 참석시키기)의 쟁점을 짝과 말한다(누가 해를 입나·스스로 고를 수 있나).' },
        intro: {
          teacher: '"다른 나라의 문화라면 무엇이든 존중해야 할까요? 우리 문화라면 무엇이든 괜찮을까요?" 시연 단추로 사례 6장이 \'존중할 문화\'·\'멈출 행동\' 바구니에 나뉘는 모습을 보인다. "다른 문화는 판단하면 안 되잖아요"라는 말이 나오면 "\'동아리 전통\'이라며 후배를 때리는 건 우리 문화니까 괜찮을까요?"라고 되묻는다. 기준은 \'어느 나라 것인가\'가 아니라 \'누군가의 몸과 마음을 해치는가\'라는 점을 짚는다.',
          student: '문화 사례 6장을 존중할 문화와 멈출 행동(인권 침해)으로 나누어 보고, 나눈 기준을 한 줄로 말해요.',
          demo: { tool: 'sortboard', options: { slots: CR, cards: strip(CRC) }, sequence: [{ sort: sortOf(CR, CRC) }] },
          art: { draw: 'a paper-cut world of small paper houses with different roofs and festival lanterns, and in the middle a paper shield symbol protecting a person, two baskets in the foreground', banner: '어디까지 존중할까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '사례 속 문화는 특정 나라·종교 이름을 붙이지 않았다. ' + NATION_NOTE,
      }),
      M('intro.scale-pick', {
        title: '나의 판단 눈금', method: '나의 판단 눈금', tool: 'emotion', minutes: 6,
        levels: { easy: '"문화라면 무엇이든 존중해야 한다"에 동의 눈금을 고르는 시연을 보고 손가락(1~5)으로 내 눈금을 든다.', base: '눈금을 고른 뒤 그 까닭을 짝에게 한마디로 말한다.', challenge: '내 눈금과 반대쪽 끝을 고른 사람의 까닭도 하나 떠올려 말한다.' },
        intro: {
          teacher: '"\'문화라면 무엇이든 존중해야 한다\', 1부터 5까지 얼마나 동의하나요? 정답은 없어요." 시연 단추로 눈금이 3에 놓이는 모습을 보이고, 학생마다 손가락으로 눈금을 들게 한 뒤 교사가 반 전체 분포를 칠판에 바를 정(正) 자로 적는다. "5요, 무조건 존중해야죠"라는 학생에게 "그 문화가 누군가를 다치게 한다면요?"라고, "1이요"라는 학생에게 "그럼 누가 어떤 문화가 옳은지 정할까요?"라고 양쪽을 다 되묻는다. 수업 끝에 같은 질문을 다시 본다고 알린다.',
          student: '"문화라면 무엇이든 존중해야 한다"에 내가 얼마나 동의하는지 눈금(1~5)을 고르고, 그 까닭을 한마디로 말해요. 수업 끝에 다시 볼 거예요.',
          demo: { tool: 'emotion', options: AGREE, sequence: [{ level: 3 }] },
          art: { draw: 'a paper-cut five-step scale bar on a classroom board with a small paper marker in the middle, students holding up fingers from one to five', banner: '나는 얼마나 동의할까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '반 전체 분포는 칠판에 손으로 센다(이름 없이). 정리 모듈 recheck 의 그래프는 가상 집계이며, 교사가 실제로 센 반 수치로 바꾸어 말해도 된다.',
      }),

      // ---- 활동 ----
      M('activity.case-dilemma', {
        title: '학교 규칙과 문화 갈림길', method: '학교 규칙과 문화 갈림길', tool: 'dilemma', minutes: 15,
        levels: { easy: '첫 문항은 선택 1번만 하고 결과를 본다. 둘째·셋째 문항은 한 장면에서 고른다.', base: '첫 문항에서 선택 2번을 끝까지 가고 인권 근거 카드를 고른다.', challenge: '첫 문항에서 선택 3번까지 가고, 서로 다른 결말 세 개를 견주어 기준(같은 기준을 규정에 담기)까지 근거로 고른다.' },
        activity: {
          title: '학교 규칙과 문화 갈림길', tool: 'dilemma',
          teacher: '"\'체육 시간엔 머리 장식을 벗는다\'는 규정, 왜 생겼을까요? 그 목적을 지키면서 아린도 참여할 길은 없을까요?" 학생마다 한 길을 끝까지 가 보고 되돌아가 다른 결말과 견주게 한다. "한 명 때문에 규정을 바꾸면 다들 예외를 원할 거예요"라는 학생에게 "같은 기준(안전하면 허용)을 모두에게 쓰면, 그건 예외일까요, 규칙일까요?"라고 되묻는다. 이 사례는 가상이며 특정 종교를 가리키지 않는다고 밝힌다.',
          task: '체육 시간 규정과 종교적 이유의 옷차림이 부딪히는 가상 사례에서 길을 골라 결과를 따라가고, 인권의 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL({ easy: '아린이 체육 시간마다 견학만 해요. 한 번 골라 결과를 보세요.', base: '아린이 체육 시간마다 견학만 해요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '세 번 골라 끝까지 가고, 다른 결말도 모두 가 본 뒤 기준에 관한 근거까지 고르세요.' },
              '체육 시간 규정', PE, [['allow', 'explain', 'rule2'], ['together']], PE_R, ['r1', 'r2'], PE_C),
            ONE('"동아리 전통"이라는 말에 대해 학생회가 낼 의견을 고르세요.', '동아리 전통', { text: '한 운동부에 "선배 말을 어기면 엎드려뻗쳐"라는 오래된 전통이 있다. 선배들은 "우리 문화니까 존중해 달라"고 한다.', ask: '학생회는 어떤 의견을 낼까?', motif: 'house', choices: [
              { id: 'stop', text: '몸과 마음을 해치는 전통은 멈추고 다른 규칙을 만들자고 한다', result: '운동부가 서로 존중하는 새 규칙을 정한다.', impact: [{ who: '후배들', text: '안전하게 운동한다', tone: 1 }], ending: '해치는 전통은 우리 문화라도 멈췄어요.' },
              { id: 'respect', text: '그 부의 문화이니 간섭하지 말자고 한다', result: '체벌이 이어진다.', impact: [{ who: '후배들', text: '계속 다친다', tone: -1 }], why: '사람을 해치는 행동은 어느 문화의 것이든 존중의 대상이 아니에요.' },
              { id: 'soft', text: '횟수만 줄이자고 한다', result: '체벌은 줄었지만 남아 있다.', impact: [{ who: '후배들', text: '여전히 거절할 수 없다', tone: -1 }], why: '줄이는 것이 아니라 멈춰야 하는 행동이에요.' }] }, ['stop']),
            ONE('급식 시간 친구의 말에 대해 내가 할 말을 고르세요.', '급식 시간', { text: '급식 시간, 신념에 따라 고기를 먹지 않는 친구에게 다른 친구가 "그거 그냥 편식이잖아"라며 웃는다.', ask: '나는 뭐라고 할까?', motif: 'house', choices: [
              { id: 'respect', text: '"그건 그 친구가 정한 거야. 놀릴 일 아니야"라고 한다', result: '웃던 친구가 머쓱해하며 그만둔다.', impact: [{ who: '고기를 먹지 않는 친구', text: '존중받는다', tone: 1 }], ending: '아무도 해치지 않는 선택을 존중했어요.' },
              { id: 'laugh', text: '같이 웃는다', result: '친구가 급식을 서둘러 먹고 자리를 뜬다.', impact: [{ who: '고기를 먹지 않는 친구', text: '놀림거리가 된다', tone: -1 }], why: '누구도 해치지 않는 신념을 놀리면 존중이 아니에요.' },
              { id: 'force', text: '"한 입만 먹어 봐"라며 고기를 덜어 준다', result: '친구가 곤란해한다.', impact: [{ who: '고기를 먹지 않는 친구', text: '자기 결정을 무시당한다', tone: -1 }], why: '먹을지 말지는 그 친구가 정해요.' }] }, ['respect'], null, null,
              { conclude: '아무도 해치지 않는 문화와 신념은 존중하고, 누군가를 해치는 행동은 어느 문화의 것이든 멈춰요. 같은 기준을 모두에게 써요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '아린의 사례에서 학생회가 고를 의견과 그 근거를 한 문장으로 써요.' }],
          easy: [{ type: 'choice', prompt: '규정을 다시 살필 때 먼저 볼 것은?', options: ['규정의 목적(안전)을 지킬 다른 방법이 있는지', '다수가 무엇을 원하는지'], answer: '규정의 목적(안전)을 지킬 다른 방법이 있는지' }] },
        notes: '사례는 가상이며 특정 종교 이름을 쓰지 않는다. 학생에게 자기 종교나 신념을 밝히게 하지 않는다. ' + SAFE_NOTE,
      }),
      M('activity.criteria-map', {
        title: '판단 기준 지도', method: '판단 기준 지도', tool: 'mindmap', minutes: 15,
        levels: { easy: '기준 가지 2개(누가 피해를 보나·스스로 선택했나)에 카드를 나누고, 틀리면 바로 알려 준다.', base: '기준 가지 3개에 두 사례의 판단 근거를 나누고(함정 1장씩), 사례 4장을 존중·멈춤으로 판정한다.', challenge: '셋째 문항에 기준끼리 부딪히는 사례 2장이 더해져 판정한다.' },
        activity: {
          title: '판단 기준 지도', tool: 'mindmap',
          teacher: '"\'존중할까?\'를 판단할 때 물어야 할 질문 세 가지는 무엇일까요?" 사례마다 세 기준 가지에 근거를 놓게 한다. "오래된 전통이니까 존중해야죠"라는 함정 카드를 고른 학생에게 "오래됐다는 것이 누가 다치는지를 바꿔 줄까요?"라고 되묻는다. 셋째 문항에서 \'가족 행사에 꼭 참석시키기\'처럼 애매한 사례는 기준마다 답이 다를 수 있으니 모둠에서 근거를 들어 토의하게 한다.',
          task: '"존중할까?"를 가운데 두고 누가 피해를 보나·스스로 선택했나·몸과 마음이 안전한가 기준 가지를 만들어 사례를 판단해요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
          items: [
            IT(SB('사례 "동아리 전통이라며 후배 체벌"의 판단 근거를 세 기준에 나누세요. 맞지 않는 카드는 남겨요.', KI, CLUB, { topic: '존중할까? — 동아리 전통' }),
              SB('사례 "동아리 전통이라며 후배 체벌"의 판단 근거를 두 기준에 나누세요.', KI.slice(0, 2), pickCards(CLUB, ['a1', 'b1', 't1']), { topic: '존중할까? — 동아리 전통' })),
            IT(SB('사례 "신념에 따라 어떤 음식을 먹지 않음"의 판단 근거를 세 기준에 나누세요.', KI, FOOD, { topic: '존중할까? — 먹지 않는 음식' }),
              SB('사례 "신념에 따라 어떤 음식을 먹지 않음"의 판단 근거를 두 기준에 나누세요.', KI.slice(0, 2), pickCards(FOOD, ['a1', 'b1', 't1']), { topic: '존중할까? — 먹지 않는 음식' })),
            IT(SB('세 기준으로 사례 4장을 존중·멈춤으로 판정하세요.', VERD, CASES, { topic: '세 기준으로 판정' }),
              null,
              SB('세 기준으로 사례 6장을 판정하세요. 기준끼리 부딪히는 사례도 있어요.', VERD, [...CASES, ...CASES_MORE], { topic: '세 기준으로 판정' }),
              { conclude: '누가 피해를 보나·스스로 선택했나·몸과 마음이 안전한가를 물으면, 어느 나라 문화인지와 상관없이 같은 기준으로 판단할 수 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '사례 하나를 골라 세 기준으로 판단해요.', columns: ['기준', '판단'], cells: [['누가 피해를 보나', ''], ['스스로 선택했나', ''], ['몸과 마음이 안전한가', ''], ['결론(존중·멈춤)', '']], answer: '(예) 동아리 체벌: 후배 / 거절 못 함 / 아니다 → 멈춤' }],
          easy: [{ type: 'choice', prompt: '"오래된 전통이다"는 판단 근거가 될까?', options: ['아니다 — 누가 피해를 보는지가 기준이다', '그렇다 — 오래되면 존중해야 한다'], answer: '아니다 — 누가 피해를 보는지가 기준이다' }] },
        notes: '애매한 사례(v5)는 기준을 들어 토의할 거리이며, 판정은 \'본인이 원하지 않아도 함께하는 가족 행사는 해를 입히지 않는 한 존중\'으로 잡았다. 다른 판단이 나오면 근거를 듣는다.',
      }),
      M('activity.food-plan', {
        title: '모두를 위한 급식 식단', method: '모두를 위한 급식 식단', tool: 'kitchen', minutes: 15,
        levels: { easy: '조건 2개(고기 안 먹음·땅콩 알레르기)만 보고 모두 먹을 수 있는 반찬을 표시한다.', base: '조건 3개(고기 안 먹음·달걀·우유도 안 먹는 채식·땅콩 알레르기)로 반찬·국·후식을 점검하고, 식단표에 표시할 것을 고른다.', challenge: '셋째 문항이 비용과 준비 부담을 줄이는 방법 고르기로 바뀐다.' },
        activity: {
          title: '모두를 위한 급식 식단', tool: 'kitchen',
          teacher: '"고기를 먹지 않는 친구, 달걀·우유도 먹지 않는 친구, 땅콩 알레르기가 있는 친구가 한 식탁에 앉아요. 모두 함께 먹을 수 있는 반찬은?" 조건을 하나씩 짚으며 점검표에 표시하게 한다. "못 먹는 사람이 도시락 싸 오면 되잖아요"라는 학생에게 "급식 시간에 혼자 다른 도시락을 꺼내는 친구는 어떤 기분일까요?"라고 되묻는다. 식단표에 학생 이름을 적지 않는 것도 존중이라는 점을 짚는다.',
          task: '신념·채식·알레르기 조건이 있는 친구들이 함께 먹을 수 있는 급식 식단을 점검표로 골라요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT(CL('조건: 고기를 먹지 않음, 달걀·우유도 먹지 않음, 땅콩 알레르기. 세 친구가 모두 먹을 수 있는 반찬만 표시하세요.', '모두 먹는 반찬', MENU1),
              CL('조건: 고기를 먹지 않음, 땅콩 알레르기. 두 친구가 모두 먹을 수 있는 반찬만 표시하세요.', '모두 먹는 반찬', MENU1E)),
            IT(CL('같은 세 조건으로, 국과 후식 가운데 모두 먹을 수 있는 것만 표시하세요.', '모두 먹는 국·후식', MENU2)),
            IT(CL('식단표를 만들 때 해야 할 것만 표시하세요.', '식단표에 할 일', MARK),
              null,
              CL('비용과 준비 부담을 줄이면서 모두가 함께 먹는 방법만 표시하세요.', '부담 줄이기', COST),
              { conclude: '모두를 위한 식단은 다름을 따로 떼어 놓지 않고, 함께 먹을 수 있는 것을 늘리고 재료를 알려 주는 식단이에요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '모두를 위한 하루 급식 식단을 짜요.', columns: ['칸', '음식'], cells: [['밥', ''], ['국', ''], ['반찬', ''], ['후식', '']], answer: '(예) 나물 비빔밥 / 채소 된장국 / 두부 채소조림 / 제철 과일' }],
          easy: [{ type: 'choice', prompt: '땅콩 알레르기가 있는 친구가 먹을 수 없는 것은?', options: ['땅콩조림', '두부 채소조림'], answer: '땅콩조림' }] },
        notes: '조건은 가상 친구의 것이다. 학생에게 자기 식사 제한·신념·알레르기를 밝히게 하지 않는다. 실제 급식 알레르기 표시는 학교 급식 안내를 함께 보인다. ' + SAFE_NOTE,
      }),
      M('activity.opinion', {
        title: '짧은 의견 글', method: '짧은 의견 글', tool: 'rubric-writing', minutes: 15,
        levels: { easy: '셋째 문항에서 문장 틀을 따라 3~4문장 의견 글을 쓴다.', base: '셋째 문항에서 5~6문장 의견 글을 쓰고 기준표(기준 제시·사례·반대 의견 고려)로 점검한다.', challenge: '셋째 문항에서 내 생각이 바뀐 지점(도입 눈금과 견주어)을 넣어 쓰고 기준 하나를 더 점검한다.' },
        activity: {
          title: '짧은 의견 글', tool: 'rubric-writing',
          teacher: '"\'존중과 인권의 기준\'에 대한 내 의견을 한 문장으로 먼저 말해 볼까요?" 첫 문장에 내 기준을, 가운데에 사례를, 끝에 반대 의견을 넣게 한다. "다른 문화를 판단하면 차별 아니에요?"라는 반대 의견이 나오면 "판단의 기준이 \'우리와 다르다\'라면 차별이 될 수 있어요. 기준이 \'누가 해를 입나\'라면요?"라고 구별해 준다. 실제 나라·종교 이름은 쓰지 않는다.',
          task: '"존중과 인권의 기준"에 대한 짧은 의견 글을 쓰고, 기준 제시·사례·반대 의견 고려로 스스로 점검해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT(RW('첫 부분: 내가 생각하는 판단 기준을 두 문장으로 쓰세요.', { topic: '어떤 문화는 존중하고 어떤 행동은 멈춰야 할지, 내가 생각하는 판단 기준을 두 문장으로 쓰세요.', min: 25, max: 160, s: [2, 3], title: '의견 ① 기준' }, ['판단 기준을 밝혔다', '실제 나라·종교 이름을 쓰지 않았다']),
              RW('틀을 채워 기준 문장을 쓰세요.', { topic: '내 판단 기준을 쓰세요.', min: 15, max: 120, s: [2, 3], starter: '나는 ___ 문화는 존중해야 한다고 생각한다. 하지만 ___ 행동은 멈춰야 한다.' }, ['판단 기준을 밝혔다', '실제 나라·종교 이름을 쓰지 않았다'])),
            IT(RW('가운데: 기준을 보여 주는 사례 하나를 두 문장으로 쓰세요.', { topic: '오늘 본 사례(체육 시간 규정·동아리 전통·급식) 하나로 내 기준을 보여 주는 두 문장을 쓰세요.', min: 25, max: 160, s: [2, 3], title: '의견 ② 사례' }, ['사례를 들었다', '사례가 기준과 이어진다']),
              RW('틀을 채워 사례 문장을 쓰세요.', { topic: '기준을 보여 주는 사례를 쓰세요.', min: 15, max: 120, s: [2, 3], starter: '예를 들어 ___ 은(는) ___ 때문에 존중(멈춤)해야 한다.' }, ['사례를 들었다', '사례가 기준과 이어진다'])),
            IT(RW('앞의 내용을 이어 5~6문장 의견 글을 완성하세요(반대 의견 넣기).', { topic: '"존중과 인권의 기준"에 대한 내 의견 글을 기준·사례·반대 의견과 답을 넣어 5~6문장으로 완성하세요.', min: 80, max: 400, s: [5, 6], title: '존중과 인권의 기준' }, ['판단 기준을 밝혔다', '사례를 들었다', '반대 의견을 고려했다'], [['기준', '인권']]),
              RW('틀을 따라 3~4문장 의견 글을 완성하세요.', { topic: '"존중과 인권의 기준" 의견 글을 3~4문장으로 완성하세요.', min: 40, max: 260, s: [3, 4], starter: '나는 ___ 은(는) 존중하지만 ___ 은(는) 멈춰야 한다고 생각한다. 예를 들어 ___. 어떤 사람은 ___ 라고 하지만, ___.' }, ['판단 기준을 밝혔다', '사례를 들었다', '반대 의견을 고려했다'], [['기준', '인권']]),
              RW('내 생각이 바뀐 지점을 넣어 의견 글을 완성하세요.', { topic: '의견 글에, 수업 처음 고른 판단 눈금과 견주어 내 생각이 바뀐(또는 그대로인) 지점과 까닭을 넣어 6문장 안팎으로 완성하세요.', min: 90, max: 440, s: [5, 6], title: '바뀐 생각까지 담은 의견 글' }, ['판단 기준을 밝혔다', '사례를 들었다', '반대 의견을 고려했다', '생각이 바뀐 지점을 썼다'], [['기준', '인권']]),
              { conclude: '좋은 의견 글은 기준을 밝히고, 사례로 보여 주고, 반대 의견까지 다뤄요. 기준은 \'다르다\'가 아니라 \'해를 입히는가\'예요.' }),
          ],
        },
        worksheet: { items: [{ type: 'check', prompt: '짝의 의견 글을 읽고 들어 있는 것에 표시해요.', options: ['판단 기준', '사례', '반대 의견과 답', '실제 나라·종교 이름 없음'] }] },
        notes: NATION_NOTE,
      }),

      // ---- 정리 ----
      M('wrap.recheck', {
        title: '판단 눈금 다시 보기', method: '판단 눈금 다시 보기', tool: 'chart', minutes: 7,
        levels: { easy: '막대 2개(수업 전·후 "문화는 모두 존중")만 값을 보며 견준다.', base: '막대 4개를 견주어 가장 많이 바뀐 응답을 고르고, 바뀐 까닭을 고른다.', challenge: '넷째 질문에서 생각이 바뀌지 않은 사람의 까닭도 쓴다.' },
        wrap: {
          teacher: '"수업 처음에 고른 눈금과 지금 눈금을 견주어 볼까요?" 화면의 가상 집계 그래프를 읽은 뒤, 칠판에 센 우리 반 수치와도 견준다. "생각이 바뀌면 처음에 틀린 거예요?"라는 학생에게 "근거를 듣고 생각을 고치는 것도, 근거를 들어 생각을 지키는 것도 모두 좋은 판단이에요"라고 말해 준다. 개인의 눈금은 묻지 않는다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'chart', prompt: '가상 집계 그래프에서 수업 뒤 가장 많이 늘어난 응답을 골라요.', options: Object.assign({}, RECHECK_O, { question: '가장 많이 늘어난 응답은?', choices: ['수업 후: 인권 기준이 먼저', '수업 후: 문화는 모두 존중'] }), target: { pick: 0 }, difficulty: 0.2 },
              { prompt: '두 막대 가운데 수업 뒤의 막대를 보고, 몇 명이 되었는지 골라요.', toolOptions: { data: RECHECK.slice(0, 2), showValues: true, question: '수업 후 "문화는 모두 존중"은 몇 명?', choices: ['9명', '18명'] }, target: { pick: 0 } }),
            { type: 'choice', prompt: '생각이 바뀐 까닭으로 가장 알맞은 것은?', options: ['문화라도 누군가를 해치면 멈춰야 한다는 기준을 알게 됐다', '다른 문화는 모두 나쁘다는 것을 알게 됐다', '선생님이 정답을 알려 줬다'], answer: 0, difficulty: 0.2, explain: '기준(해를 입히는가)을 세우면 존중할 것과 멈출 것을 가를 수 있어요.' },
            { type: 'short', prompt: '내 눈금이 바뀌었다면 그 까닭을, 그대로라면 그대로인 까닭을 한 문장으로 써요.' },
            { type: 'short', prompt: '생각이 바뀌지 않은 사람이 있다면 어떤 까닭일지 하나 써요.' },
          ],
        },
        worksheet: {
          title: '판단 눈금 다시 보기',
          items: [
            { type: 'table', prompt: '수업 전과 후의 내 생각을 써요(눈금 숫자는 쓰지 않아도 돼요).', columns: ['때', '내 생각'], cells: [['수업 전', ''], ['수업 후', '']], answer: '(예) 문화는 다 존중 / 해를 입히지 않는 문화는 존중, 해치는 행동은 멈춤' },
            { type: 'short', prompt: '생각을 바꾸게(또는 지키게) 한 근거 하나를 써요.' },
          ],
        },
        notes: '그래프 수치(18·9·10·19명)는 수업용 가상 집계다. 교사가 도입에서 센 우리 반 수치를 칠판에 함께 적어 견주어도 된다(이름 없이).',
      }),
      M('wrap.rule-card', {
        title: '우리 반 존중 원칙 카드', method: '우리 반 존중 원칙 카드', tool: 'wordcards', minutes: 7,
        levels: { easy: '원칙 카드 1장(존중할 것)의 빈칸을 채운다.', base: '원칙 카드 2장(존중할 것·멈출 것)의 빈칸을 채운다.', challenge: '원칙 2장에 \'원칙이 적용되는 예\' 칸을 더 채운다.' },
        wrap: {
          teacher: '"오늘 정한 판단 기준을 우리 반 원칙 두 줄로 만든다면?" 낱말 카드로 빈칸을 채운 뒤 활동지에 원칙 카드를 써서 게시판에 붙이게 한다. "원칙이 너무 뻔해요"라는 학생에게 "뻔한 원칙도 \'예\'를 하나 붙이면 실제로 쓸 수 있어요. 오늘 본 사례 가운데 어떤 예가 좋을까요?"라고 되묻는다.',
          exitTicket: [
            IT(X('wordcards', FB('우리 반 존중 원칙 두 장의 빈칸을 채워요.', RULES.slice(0, 2), ['우리와 다른', '오래된 전통인'])),
              FB('우리 반 존중 원칙 한 장의 빈칸을 채워요.', RULES.slice(0, 1), ['우리와 다른']),
              FB('존중 원칙 두 장과 적용되는 예를 채워요.', RULES, ['우리와 다른', '오래된 전통인', '다른 나라 음식은 먹지 않는다']), { difficulty: 0.2 }),
            { type: 'choice', prompt: '"내 문화가 기준이다"라는 생각의 문제로 알맞은 것은?', options: ['나와 다르다는 이유만으로 남의 문화를 낮추게 된다', '내 문화를 아끼게 된다', '아무 문제가 없다'], answer: 0, difficulty: 0.2, explain: '기준은 \'나와 같은가\'가 아니라 \'누군가를 해치는가\'예요.' },
          ],
        },
        worksheet: {
          title: '우리 반 존중 원칙',
          items: [
            { type: 'short', prompt: '우리 반 존중 원칙 두 줄을 써요.' },
            { type: 'short', prompt: '원칙이 적용되는 예를 하나 써요.' },
          ],
        },
      }),
    );
  }

  // ==== 9학년 · 혐오 표현을 가려내고 대응하기 (multi.m.hate-speech) ====
  {
    const M = MK('hate-speech', [9]);
    // 정책 의견은 찬반 어느 쪽이든 의견 칸 — 가르는 기준은 '집단을 겨냥해 낮추는가'
    const OH = ['의견', '혐오 표현'];
    const OHC = [
      { id: 'o1', text: '"이 지원 정책은 보완이 필요하다"', to: '의견' }, { id: 'x1', text: '"○○ 사람들은 다 나가라"', to: '혐오 표현' },
      { id: 'o2', text: '"난민 심사를 더 엄격히 해야 한다"', to: '의견' }, { id: 'x2', text: '"○○ 출신은 다 범죄자다"', to: '혐오 표현' },
      { id: 'o3', text: '"난민을 더 받아들여야 한다"', to: '의견' }, { id: 'x3', text: '"○○ 말 쓰는 애들은 더럽다"', to: '혐오 표현' },
    ];
    const SPREAD = [['1시간', 20], ['3시간', 150], ['6시간', 900], ['12시간', 3000], ['24시간', 6000]];
    const HB = ['집단을 겨냥', '차별을 부추김', '사람을 낮춤'];
    const HC1 = [
      { id: 'a1', text: '한 사람이 아니라 출신 전체를 가리킨다', to: '집단을 겨냥' }, { id: 'b1', text: '"쫓아내자"며 행동을 부추긴다', to: '차별을 부추김' },
      { id: 'c1', text: '사람을 더러운 것에 빗대어 낮춘다', to: '사람을 낮춤' }, { id: 't1', text: '말투가 거칠지 않다' },
    ];
    const HC2 = [
      { id: 'a1', text: '피부색이 같은 사람 모두를 묶는다', to: '집단을 겨냥' }, { id: 'b1', text: '"가게에 들이지 말자"고 한다', to: '차별을 부추김' },
      { id: 'c1', text: '"사람 취급 할 필요 없다"고 한다', to: '사람을 낮춤' }, { id: 't1', text: '농담이라고 덧붙였다' },
    ];
    const JUDGE = [
      { id: 'j1', text: '"○○ 출신은 이 동네에 살면 안 된다"', ok: true }, { id: 'j2', text: '"○○ 말투 흉내 내기" 밈', ok: true },
      { id: 'j3', text: '"이주민 지원 예산을 공개하자"' }, { id: 'j4', text: '"그 가게 주인이 오늘 불친절했다"' },
    ];
    const JUDGE_C = [
      { id: 'j1', text: '"○○ 출신은 이 동네에 살면 안 된다"', ok: true }, { id: 'j2', text: '"○○ 말투 흉내 내기" 밈', ok: true },
      { id: 'j3', text: '"이주민 지원 예산을 공개하자"' }, { id: 'j4', text: '"그 가게 주인이 오늘 불친절했다"' },
      { id: 'j5', text: '"요즘 ○○ 사람들 많아져서 무섭다"', ok: true }, { id: 'j6', text: '"외국인 노동자 근로 기준을 다시 보자"' },
    ];
    // 단체 대화방 혐오 밈 갈림길(깊이 3). 밈의 내용은 쓰지 않는다
    const MEME = { text: '반 단체 대화방에 친구 준서가 특정 출신을 조롱하는 밈을 올렸다. 반에는 그 출신과 이어진 친구 하은도 있다. 벌써 웃음 이모티콘이 몇 개 달렸다.', ask: '나는 어떻게 할까?', motif: 'house', choices: [
      { id: 'laugh', text: '웃음 이모티콘을 단다', result: '밈이 다른 대화방으로도 퍼진다.', impact: [{ who: '하은', text: '반 전체가 웃는 것처럼 느낀다', tone: -1 }], why: '웃음 하나도 혐오 밈을 퍼뜨리는 힘이 돼요.', end: '웃음으로 밈이 퍼졌어요.',
        next: { text: '하은이 아무 말 없이 대화방을 나갔다.', ask: '어떻게 할까?', choices: [
          { id: 'shrug', text: '"장난인데 예민하네"라고 쓴다', result: '하은을 탓하는 말이 이어진다.', impact: [{ who: '하은', text: '두 번 상처받는다', tone: -1 }] },
          { id: 'sorryh', text: '하은에게 개인 메시지로 "웃어서 미안해"라고 사과한다', result: '하은이 "말해 줘서 고마워"라고 답한다.', impact: [{ who: '하은', text: '혼자가 아니라고 느낀다', tone: 1 }] }] } },
      { id: 'dm', text: '준서에게 개인 메시지로 "그 밈은 출신을 조롱하는 거야, 내려 줘"라고 한다', result: '준서가 "농담인데?"라고 답한다.', impact: [{ who: '준서', text: '문제를 처음 듣는다', tone: 0 }], end: '올린 친구에게 따로 말했어요.',
        next: { text: '준서가 "다들 웃었는데 왜 나한테만 그래?"라고 한다.', ask: '어떻게 할까?', choices: [
          { id: 'give', text: '"알았어, 됐어"라며 물러선다', result: '밈이 그대로 남는다.', impact: [{ who: '하은', text: '밈을 계속 본다', tone: -1 }], why: '한 번 거절당했다고 멈추면 밈은 그대로 남아요. 다른 방법이 있어요.' },
          { id: 'explain', text: '"농담이어도 대상이 된 친구는 상처받아"라며 다시 부탁한다', result: '준서가 망설이지만 아직 내리지 않는다.', impact: [{ who: '준서', text: '다시 생각해 본다', tone: 1 }], end: '까닭을 들어 다시 부탁했어요.',
            next: { text: '한 시간이 지나도 밈이 내려가지 않고 다른 친구들이 퍼 나르기 시작했다.', ask: '이제 어떻게 할까?', choices: [
              { id: 'report', text: '화면을 기록해 두고 플랫폼에 신고한 뒤 담임 선생님께 알린다', result: '밈이 내려가고 선생님이 반 전체와 이야기를 나눈다.', impact: [{ who: '하은', text: '보호받는다', tone: 1 }] },
              { id: 'shame', text: '준서를 망신 주려고 다른 대화방에 퍼뜨린다', result: '혐오 밈이 더 많은 사람에게 보인다.', impact: [{ who: '하은', text: '더 많은 사람이 밈을 본다', tone: -1 }], why: '망신을 주려고 퍼뜨려도 혐오 밈은 더 퍼져요. 기록은 신고에만 써요.' }] } }] } },
      { id: 'report', text: '화면을 기록해 두고 바로 플랫폼에 신고한다', result: '밈이 가려지고, 신고 사실은 올린 사람에게 알려지지 않는다.', impact: [{ who: '하은', text: '더 퍼지지 않는다', tone: 1 }], ending: '기록하고 신고해 퍼지는 것을 막았어요.' }] };
    const MEME_R = [{ id: 'r1', text: '농담이어도 집단을 낮추면 혐오 표현이다' }, { id: 'r2', text: '퍼뜨리지 않는 것이 확산을 끊는 첫걸음이다' },
      { id: 'r3', text: '혐오 표현도 표현의 자유니까 괜찮다', why: '표현의 자유도 다른 사람을 낮추고 차별을 부추기는 데까지 보호하지 않아요.' }, { id: 'r4', text: '모두 웃었으면 문제없다', why: '여럿이 웃었다고 대상이 된 사람의 상처가 사라지지 않아요.' }];
    const MEME_C = { reasons: [{ id: 'r5', text: '말하기·기록·신고·어른에게 알리기를 함께 쓴다' }, { id: 'r6', text: '기록은 퍼뜨리는 데가 아니라 신고에만 쓴다' }], ok: ['r5', 'r6'] };
    const STEPS = [
      { id: 's1', text: '퍼뜨리지 않기(공감·공유·웃음 안 누르기)' }, { id: 's2', text: '기록하기(화면 저장, 남에게 보내지 않기)' },
      { id: 's3', text: '플랫폼에 신고하기' }, { id: 's4', text: '믿을 어른에게 알리기' }, { id: 's5', text: '대상이 된 친구 곁에 서기' },
    ];
    const STEPS3 = [STEPS[0], STEPS[2], STEPS[3]];
    const STEP_TRAP = [{ id: 'z1', text: '맞받아 욕 댓글 달기' }, { id: 'z2', text: '올린 사람 개인정보 퍼뜨리기' }];
    const SIDE = [
      { id: 'q1', text: '"네 잘못 아니야. 같이 선생님께 갈까?"', ok: true }, { id: 'q2', text: '"필요한 거 있으면 말해 줘"', ok: true },
      { id: 'q3', text: '"그냥 무시해, 별거 아니야"' }, { id: 'q4', text: '"너도 좀 참아"' },
    ];
    // 학교 칸 지도 — 도움 받을 곳
    const SCH = { grid: [6, 4], title: '가상의 우리 학교와 학교 밖 도움 칸', places: [
      { name: '우리 교실', icon: 'school', at: [0, 0] }, { name: '교무실(담임 선생님)', icon: 'office', at: [2, 0] },
      { name: '상담실(Wee 클래스)', icon: 'house', at: [4, 0] }, { name: '보건실', icon: 'hospital', at: [1, 2] },
      { name: '도서관', icon: 'library', at: [3, 2] }, { name: '차별 상담·구제 기관(학교가 확인)', icon: 'office', at: [5, 3] },
    ] };
    const MAPQ = (ask) => Object.assign({}, SCH, ask ? { ask } : {});

    ALL.push(
      // ---- 도입 ----
      M('intro.opinion-or-hate', {
        title: '의견일까 혐오일까', method: '의견일까 혐오일까', tool: 'sortboard', minutes: 6,
        levels: { easy: '교사가 문장 4장(o1·x1·o2·x2)을 읽고 학생이 손을 들어 고른다.', base: '문장 6장이 의견·혐오 표현 바구니에 나뉘는 시연을 보고, 서로 반대인 두 정책 의견(o2·o3)이 모두 의견 칸에 든 까닭을 말한다.', challenge: '의견과 혐오 표현을 가르는 기준을 한 줄로 짝과 정해 말한다.' },
        intro: {
          teacher: '"\'난민 심사를 더 엄격히 해야 한다\'와 \'난민을 더 받아들여야 한다\', 둘 중 하나는 혐오 표현일까요?" 시연 단추로 문장 6장이 의견·혐오 표현 바구니에 나뉘고, 서로 반대인 두 정책 의견이 모두 의견 칸에 드는 모습을 보인다. "제 생각과 반대면 혐오 아니에요?"라는 말이 나오면 "정책에 찬성하거나 반대하는 것과, 어떤 출신 사람 전체를 \'나가라\'·\'범죄자\'로 낮추는 것은 무엇이 다를까요?"라고 되묻는다. 이 수업은 정책의 정답을 정하지 않고, 사람을 낮추는 말을 가려내는 기준을 세운다고 밝힌다.',
          student: '문장 6장을 의견과 혐오 표현으로 나누어 보고, 서로 반대인 정책 의견이 모두 의견 칸에 드는 까닭을 말해요.',
          demo: { tool: 'sortboard', options: { slots: OH, cards: strip(OHC) }, sequence: [{ sort: sortOf(OH, OHC) }] },
          art: { draw: 'a paper-cut debate stage with two students holding opposite opinion signs calmly, and on the side a crumpled paper speech bubble being stopped by a paper hand', banner: '의견일까, 혐오일까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '혐오 표현 예시는 대상을 비운 꼴(○○)로만 쓴다. 학생이 실제 집단 이름을 넣어 읽지 않게 한다. 정책 의견(o1·o2·o3)은 찬반 어느 쪽도 정답이 아니다.',
      }),
      M('intro.spread-chart', {
        title: '혐오 게시물 확산 그래프', method: '혐오 게시물 확산 그래프', tool: 'chart', minutes: 6,
        levels: { easy: '시연에서 시점 3개(1·6·24시간)를 함께 읽는다.', base: '시점 5개의 꺾은선을 읽는 시연을 보고, 가장 가파르게 늘어난 때를 말한다.', challenge: '확산을 끊을 수 있는 지점(처음 한두 시간)과 그때 할 행동을 짝과 말한다.' },
        intro: {
          teacher: '"혐오 게시물 하나가 처음 1시간에 20명에게 보였어요. 하루 뒤에는 몇 명일까요?" 수업용 가상 자료임을 밝히고, 시연 단추로 꺾은선그래프에서 24시간 시점(6000명)을 고르는 모습을 보인다. "저 하나 공유한다고 뭐가 달라져요?"라는 말이 나오면 "처음 1시간에 본 20명이 아무도 공유하지 않았다면, 이 선은 어떻게 됐을까요?"라고 되묻는다.',
          student: '혐오 게시물이 공유될 때 시간마다 본 사람 수(가상 자료)를 꺾은선그래프로 읽고, 확산을 끊을 수 있는 때를 생각해요.',
          demo: { tool: 'chart', options: { type: 'line', mode: 'read', title: '혐오 게시물을 본 사람 수(수업용 가상 자료)', unit: '명', xLabel: '올린 뒤 시간', yLabel: '본 사람 수', data: SPREAD, question: '24시간 뒤 본 사람은?', choices: ['6000명', '900명', '20명'] }, sequence: [{ pick: 0 }] },
          art: { draw: 'a paper-cut line chart rising steeply like a hill on a phone screen, small paper share arrows multiplying along the line, and one paper hand pressing a pause button at the start', banner: '어디서 끊을 수 있을까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '본 사람 수(20~6000명)는 수업용 가상 값이다.',
      }),

      // ---- 활동 ----
      M('activity.criteria', {
        title: '혐오 표현 판단 기준 만들기', method: '혐오 표현 판단 기준 만들기', tool: 'mindmap', minutes: 15,
        levels: { easy: '기준 가지 2개(집단을 겨냥·사람을 낮춤)에 카드를 나누고, 틀리면 바로 알려 준다.', base: '기준 가지 3개(집단을 겨냥·차별을 부추김·사람을 낮춤)에 두 사례의 특징을 나누고(함정 1장씩), 혐오 표현을 골라 담는다.', challenge: '셋째 문항에 기준이 애매한 사례 2장이 더해져 고르고, 모둠에서 근거를 들어 토의한다.' },
        activity: {
          title: '혐오 표현 판단 기준 만들기', tool: 'mindmap',
          teacher: '"\'말투가 거칠지 않다\'면 혐오 표현이 아닐까요?" 사례마다 세 기준 가지에 특징을 놓게 한다. "농담이라고 덧붙였잖아요"라는 함정 카드를 고른 학생에게 "농담이라는 말이 붙으면 그 말을 들은 출신 사람의 기분이 바뀔까요?"라고 되묻는다. 셋째 문항에서 \'요즘 ○○ 사람들 많아져서 무섭다\'처럼 애매한 문장은 기준(집단을 겨냥해 두려움과 배제를 부추기는가)을 들어 모둠에서 토의하게 한다.',
          task: '"혐오 표현"을 가운데 두고 집단을 겨냥·차별을 부추김·사람을 낮춤 기준 가지를 만들어 사례의 특징을 나누고, 혐오 표현을 가려내요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
          items: [
            IT(SB('사례 "○○ 사람들은 다 나가라, 더럽다"의 특징을 세 기준에 나누세요. 기준이 아닌 카드는 남겨요.', HB, HC1, { topic: '혐오 표현 — 사례 1' }),
              SB('사례의 특징을 두 기준에 나누세요.', ['집단을 겨냥', '사람을 낮춤'], pickCards(HC1, ['a1', 'c1', 't1']), { topic: '혐오 표현 — 사례 1' })),
            IT(SB('사례 "피부색 다른 사람은 가게에 들이지 말자, 농담이야"의 특징을 세 기준에 나누세요.', HB, HC2, { topic: '혐오 표현 — 사례 2' }),
              SB('사례의 특징을 두 기준에 나누세요.', ['집단을 겨냥', '사람을 낮춤'], pickCards(HC2, ['a1', 'c1', 't1']), { topic: '혐오 표현 — 사례 2' })),
            IT(PB('세 기준으로 볼 때 혐오 표현인 것만 골라 담으세요.', '혐오 표현', JUDGE, { topic: '가려내기' }),
              null,
              PB('세 기준으로 볼 때 혐오 표현인 것만 골라 담으세요. 애매한 문장도 있어요.', '혐오 표현', JUDGE_C, { topic: '가려내기' }),
              { conclude: '혐오 표현은 한 사람이 아니라 출신·피부색·언어 같은 집단을 겨냥해, 사람을 낮추고 차별을 부추기는 말이에요. 말투가 부드럽거나 농담이라고 해도 같아요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '우리 모둠의 혐오 표현 판단 기준을 정리해요.', columns: ['기준', '물을 질문'], cells: [['집단을 겨냥', ''], ['차별을 부추김', ''], ['사람을 낮춤', '']], answer: '(예) 한 사람이 아니라 출신 전체를 가리키나? / 쫓아내자·들이지 말자고 하나? / 사람을 더러운 것·물건에 빗대나?' }],
          easy: [{ type: 'choice', prompt: '혐오 표현인 것은?', options: ['"○○ 출신은 이 동네에 살면 안 된다"', '"이주민 지원 예산을 공개하자"'], answer: '"○○ 출신은 이 동네에 살면 안 된다"' }] },
        notes: '애매한 문장(j5)은 \'집단을 겨냥해 두려움·배제를 부추김\'으로 혐오 표현 쪽에 두었다. 모둠 토의에서 다른 의견이 나오면 기준을 들어 듣는다. 정책 의견(j3·j6)은 찬반과 상관없이 의견이다.',
      }),
      M('activity.online-dilemma', {
        title: '단체 대화방 혐오 밈 갈림길', method: '단체 대화방 혐오 밈 갈림길', tool: 'dilemma', minutes: 15,
        levels: { easy: '첫 문항은 선택 1번만 하고 결과를 본다. 둘째·셋째 문항은 한 장면에서 고른다.', base: '첫 문항에서 선택 2번을 끝까지 가고 근거 카드를 고른다.', challenge: '첫 문항에서 선택 3번까지 가서 말하기·기록·신고·알리기를 묶은 대응 길을 가 보고, 그 근거까지 고른다.' },
        activity: {
          title: '단체 대화방 혐오 밈 갈림길', tool: 'dilemma',
          teacher: '"친구가 올린 밈이 특정 출신을 조롱해요. 웃음 이모티콘 하나 다는 게 큰일일까요?" 학생마다 한 길을 끝까지 가 보고 되돌아가 다른 길과 견주게 한다. "신고하면 친구를 고자질하는 거잖아요"라는 학생에게 "신고는 친구를 벌주려는 게 아니라 하은이 그 밈을 계속 보지 않게 하는 거예요. 그 밈을 보는 하은의 입장은 어떨까요?"라고 되묻는다. 화면 기록은 신고에만 쓰고 절대 다시 퍼뜨리지 않는다는 점을 짚는다.',
          task: '반 단체 대화방에 출신을 조롱하는 밈이 올라온 장면에서 길을 골라 결과를 따라가고, 끝에서 대응의 근거를 골라요.',
          levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
          items: [
            DIL({ easy: '단체 대화방에 혐오 밈이 올라왔어요. 한 번 골라 결과를 보세요.', base: '단체 대화방에 혐오 밈이 올라왔어요. 두 번 골라 끝까지 가고 근거를 고르세요.', challenge: '세 번 골라 여러 대응을 묶은 길까지 가 보고 근거도 고르세요.' },
              '단체 대화방 밈', MEME, [['dm', 'explain', 'report'], ['report']], MEME_R, ['r1', 'r2'], MEME_C),
            ONE('밈이 올라온 다음 날, 하은에게 할 말을 고르세요.', '다음 날 교실', { text: '다음 날 아침, 하은이 평소보다 조용히 혼자 앉아 있다. 밈은 신고로 내려갔다.', ask: '나는 하은에게 뭐라고 할까?', motif: 'house', choices: [
              { id: 'side', text: '"어제 일, 네 잘못 아니야. 필요한 거 있으면 말해 줘"라고 한다', result: '하은이 작게 고개를 끄덕인다.', impact: [{ who: '하은', text: '혼자가 아니라고 느낀다', tone: 1 }], ending: '대상이 된 친구 곁에 섰어요.' },
              { id: 'ask', text: '"너희 집 진짜 그 나라 출신이야?"라고 묻는다', result: '하은이 더 움츠러든다.', impact: [{ who: '하은', text: '또 출신으로 불린다', tone: -1 }], why: '위로하려다 출신을 캐물으면 상처를 다시 건드려요.' },
              { id: 'skip', text: '어색해서 모른 척한다', result: '하은은 반 전체가 같은 생각이라고 느낀다.', impact: [{ who: '하은', text: '혼자라고 느낀다', tone: -1 }], why: '짧은 한마디가 \'모두가 그렇지는 않다\'는 신호가 돼요.' }] }, ['side']),
            ONE('"혐오 표현도 표현의 자유"라는 친구의 말에 답할 문장을 고르세요.', '표현의 자유', { text: '준서가 "혐오 표현도 표현의 자유잖아"라고 말한다.', ask: '어떤 답이 알맞을까?', motif: 'house', choices: [
              { id: 'limit', text: '"정책 반대는 자유지만, 출신 전체를 낮추고 쫓아내자는 건 다른 사람의 존엄을 해쳐"', result: '준서가 "의견과는 다르다는 거지?"라고 되묻는다.', impact: [{ who: '준서', text: '기준을 듣는다', tone: 1 }], ending: '의견과 혐오의 기준을 구별해 답했어요.' },
              { id: 'shout', text: '"너 같은 애는 말할 자격 없어"', result: '말싸움이 커진다.', impact: [{ who: '준서', text: '방어적으로 굳는다', tone: -1 }], why: '사람을 깎아내리면 기준 이야기가 사라져요.' },
              { id: 'agree', text: '"그렇네, 자유니까 괜찮지"', result: '밈이 또 올라온다.', impact: [{ who: '하은', text: '같은 일을 또 겪는다', tone: -1 }], why: '표현의 자유는 다른 사람을 낮추고 차별을 부추기는 데까지 보호하지 않아요.' }] }, ['limit'], null, null,
              { conclude: '혐오 밈 앞에서는 퍼뜨리지 않고, 올린 친구에게 말하고, 안 되면 기록해 신고하고 어른에게 알려요. 그리고 대상이 된 친구 곁에 서요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '혐오 밈의 화면 기록을 쓰는 알맞은 방법은?', options: ['신고하거나 선생님께 알릴 때만 쓴다', '올린 친구를 망신 주려고 다른 방에 보낸다', '재미있으니 저장해 둔다'], answer: '신고하거나 선생님께 알릴 때만 쓴다' }] },
        notes: '밈의 내용은 쓰지 않고 \'출신을 조롱하는 밈\'으로만 말한다. 실제 밈을 화면에 보이지 않는다. 학생에게 본 적 있는 혐오 표현을 말하게 하지 않는다. ' + SAFE_NOTE,
      }),
      M('activity.response-order', {
        title: '온라인 대응 차례', method: '온라인 대응 차례', tool: 'timeline', minutes: 15,
        levels: { easy: '첫 문항에서 대응 카드 3장(퍼뜨리지 않기·신고·어른에게 알리기)을 차례로 놓는다.', base: '대응 카드 5장을 차례로 놓고(함정 2장), 단계마다 주의점을 잇는다.', challenge: '셋째 문항이 대상이 된 친구 곁에 서는 말 고르기로 바뀌고, 활동지에 단계마다 주의점을 내 말로 단다.' },
        activity: {
          title: '온라인 대응 차례', tool: 'timeline',
          teacher: '"혐오 게시물을 봤을 때 가장 먼저 할 일은 신고일까요, 퍼뜨리지 않기일까요?" 카드를 놓을 때마다 왜 그 차례인지 말하게 한다. "기록하려면 친구한테 보내 둬야죠"라는 학생에게 "보내는 순간 그 게시물은 한 명에게 더 퍼져요. 기록은 내 기기에만 남겨요"라고 짚는다. \'맞받아 욕 댓글\'·\'올린 사람 개인정보 퍼뜨리기\' 같은 함정 카드는 왜 안 되는지 함께 말한다.',
          task: '혐오 표현을 온라인에서 봤을 때 할 대응 카드를 차례로 놓고, 단계마다 주의할 점을 이어요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
          items: [
            IT(OB('혐오 게시물을 봤을 때 할 대응 카드를 차례로 놓으세요. 하면 안 되는 카드는 남겨요.', STEPS, { axis: ['먼저', '나중'] }, STEP_TRAP),
              OB('대응 카드 3장을 차례로 놓으세요.', STEPS3, { axis: ['먼저', '나중'] })),
            IT(MB('대응 단계마다 주의할 점을 이어 보세요.', [['퍼뜨리지 않기', '비판하려는 공유도 하지 않는다'], ['기록하기', '저장한 화면은 남에게 보내지 않는다'], ['플랫폼 신고', '서비스의 신고 메뉴를 쓴다'], ['어른에게 알리기', '언제·어디서·무엇을 봤는지 말한다']], ['올린 사람 이름을 반 전체에 알린다']),
              MB('대응 단계 두 개의 주의점을 이어 보세요.', [['퍼뜨리지 않기', '비판하려는 공유도 하지 않는다'], ['기록하기', '저장한 화면은 남에게 보내지 않는다']], [])),
            IT(OB('같은 대응을 친구에게 알려 준다면, 꼭 넣을 세 단계를 차례로 놓으세요.', [STEPS[0], STEPS[2], STEPS[4]], { axis: ['먼저', '나중'] }, [STEP_TRAP[0]]),
              null,
              PB('대상이 된 친구 곁에 서는 말을 골라 담으세요.', '곁에 서는 말', SIDE),
              { conclude: '퍼뜨리지 않고, 기록하고, 신고하고, 어른에게 알리고, 대상이 된 친구 곁에 서요. 맞받아치거나 개인정보를 퍼뜨리면 피해가 커져요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '대응 단계와 주의점을 정리해요.', columns: ['차례', '단계', '주의점'], cells: [['1', '퍼뜨리지 않기', ''], ['2', '기록하기', ''], ['3', '플랫폼 신고', ''], ['4', '어른에게 알리기', ''], ['5', '친구 곁에 서기', '']], answer: '(예) 비판 공유도 안 함 / 남에게 안 보냄 / 신고 메뉴 / 언제·어디서·무엇 / "네 잘못 아니야"' }],
          easy: [{ type: 'choice', prompt: '혐오 게시물을 봤을 때 가장 먼저 할 일은?', options: ['퍼뜨리지 않기', '맞받아 욕 댓글 달기'], answer: '퍼뜨리지 않기' }] },
        notes: '신고 메뉴 이름은 서비스마다 다르다. 실제 서비스 이름은 쓰지 않는다.',
      }),
      M('activity.counter-campaign', {
        title: '혐오에 맞서는 캠페인', method: '혐오에 맞서는 캠페인', tool: 'collage', minutes: 15,
        levels: { easy: '카드 뉴스 장면 2개(문제·행동)의 바탕을 조각 3개 이상으로 꾸민다.', base: '장면 4개(문제·숫자·행동·다짐)를 생각하며 조각 5개 이상으로 꾸미고 대비를 넣는다. 글은 활동지에 쓴다.', challenge: '셋째 문항에서 카드 뉴스를 볼 대상과 올릴 곳을 활동지에 정하고 점검한다.' },
        activity: {
          title: '혐오에 맞서는 캠페인', tool: 'collage',
          teacher: '"\'퍼뜨리지 않기\' 카드 뉴스를 본 친구가 다음에 혐오 게시물을 보면 무엇을 하게 될까요?" 장면마다 조각으로 바탕을 꾸미고, 글은 활동지에 쓰게 한다(교구에는 글자를 넣을 수 없다). "혐오 표현 예시를 크게 넣어야 눈에 띄죠"라는 학생에게 "그 예시를 또 보는 대상이 된 사람은 어떨까요? 예시 대신 \'할 행동\'을 크게 보여 줘요"라고 짚는다. 실제 혐오 문구·밈·사람 사진은 넣지 않는다.',
          task: '"퍼뜨리지 않기" 캠페인 카드 뉴스의 장면 바탕을 조각으로 꾸미고, 장면마다 들어갈 글은 활동지에 써요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            IT({ prompt: '첫 장면(문제)과 둘째 장면(할 행동)을 떠올리며 바탕을 꾸미세요. 글 자리는 비워요.', toolOptions: { maxPieces: 14 }, target: { selfCheck: ['글 자리를 비워 두었다', '장면 글을 활동지에 썼다', '혐오 문구를 넣지 않았다'], minPieces: 5 } },
              { prompt: '장면 두 개의 바탕을 조각 3개 이상으로 꾸미세요.', target: { selfCheck: ['글 자리를 비워 두었다', '장면 글을 활동지에 썼다'], minPieces: 3 } }),
            IT({ prompt: '\'멈춤\'을 보여 줄 조각(손바닥 대신 네모·동그라미)과 밝은·어두운 색 대비를 넣어 꾸미세요.', toolOptions: { maxPieces: 14 }, target: { contrast: 'light-dark', selfCheck: ['멈춤을 보여 주는 자리를 두었다', '멀리서도 보이게 대비를 주었다'], minPieces: 4 } },
              { prompt: '\'멈춤\'을 보여 줄 조각을 넣어 꾸미세요.', target: { selfCheck: ['멈춤을 보여 주는 자리를 두었다'], minPieces: 3 } }),
            IT({ prompt: '완성한 카드 뉴스를 기준으로 점검하세요.', toolOptions: { maxPieces: 14 }, target: { selfCheck: ['혐오 예시보다 할 행동이 크게 보인다', '특정 출신·나라를 넣지 않았다', '확산 숫자 하나를 활동지에 썼다'], minPieces: 4 } },
              null,
              { prompt: '카드 뉴스를 볼 대상과 올릴 곳을 활동지에 정하고 점검하세요.', target: { selfCheck: ['혐오 예시보다 할 행동이 크게 보인다', '특정 출신·나라를 넣지 않았다', '볼 대상과 올릴 곳을 정했다'], minPieces: 4 } },
              { conclude: '혐오에 맞서는 캠페인은 혐오를 다시 보여 주지 않고, 퍼뜨리지 않기라는 행동을 크게 보여 줘요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '카드 뉴스 장면마다 들어갈 글을 써요.', columns: ['장면', '글'], cells: [['1 문제', ''], ['2 숫자', ''], ['3 할 행동', ''], ['4 다짐', '']], answer: '(예) 혐오 게시물은 공유될수록 커져요 / 하루 만에 6000명(가상) / 공감·공유 대신 신고 / 나는 퍼뜨리지 않아요' }] },
        notes: '교구는 글자를 넣지 못해 장면 바탕만 꾸미고 글은 활동지에 쓴다. 숫자는 도입 가상 그래프의 값을 쓰며 \'가상\'이라고 밝힌다.',
      }),

      // ---- 정리 ----
      M('wrap.pledge-write', {
        title: '세계시민 다짐 글', method: '세계시민 다짐 글', tool: 'rubric-writing', minutes: 7,
        levels: { easy: '다짐을 한 문장으로 쓰고 기준 2개(구체적 행동·존중의 언어)를 점검한다.', base: '다짐 세 문장을 쓰고 기준 2개를 점검한다.', challenge: '다짐을 지키기 어려운 상황과 대처를 넣어 네 문장으로 쓰고 기준 3개를 점검한다.' },
        wrap: {
          teacher: '"\'혐오 표현을 하지 않겠다\'보다 더 구체적인 다짐은 무엇일까요?" \'공감 누르지 않기\', \'화면 기록 뒤 신고\'처럼 행동이 보이는 다짐을 쓰게 한다. "친구가 하면 말리기 어려워요"라는 학생에게 "그럴 때 할 수 있는 가장 작은 행동은 무엇일까요? 웃음 이모티콘을 누르지 않는 것부터예요"라고 말해 준다. 다짐 글에 실제 계정 이름은 쓰지 않는다.',
          exitTicket: [
            IT({ type: 'tool', tool: 'rubric-writing', options: { topic: '온라인에서 혐오 표현을 만났을 때 지킬 다짐을 세 문장으로 쓰세요.', minChars: 35, maxChars: 240, minSentences: 3, maxSentences: 3, title: '세계시민 다짐' },
              prompt: '온라인에서 지킬 다짐 세 문장을 쓰고 기준표에 표시해요.', target: { selfCheck: ['구체적인 행동을 썼다', '존중하는 말로 썼다'] }, difficulty: 0.25 },
              { prompt: '온라인에서 지킬 다짐 한 문장을 쓰고 기준표에 표시해요.', toolOptions: { minChars: 12, minSentences: 1, maxSentences: 1, starter: '나는 혐오 게시물을 보면 ___ 하겠다.' } },
              { prompt: '다짐 세 문장에 지키기 어려운 상황과 대처를 더해 네 문장으로 쓰고 기준표에 표시해요.', toolOptions: { minChars: 50, maxChars: 320, minSentences: 4, maxSentences: 4 }, target: { selfCheck: ['구체적인 행동을 썼다', '존중하는 말로 썼다', '지키기 어려운 상황과 대처를 썼다'] } }),
            { type: 'choice', prompt: '세계시민으로서의 다짐으로 가장 알맞은 것은?', options: ['출신을 낮추는 게시물에 공감·공유를 누르지 않고 신고한다', '내 생각과 다른 정책 의견은 모두 혐오라고 신고한다', '혐오 표현을 보면 같은 말로 맞받아친다'], answer: 0, difficulty: 0.2, explain: '정책 의견은 의견이에요. 사람을 낮추는 표현에 힘을 싣지 않는 것이 다짐이에요.' },
          ],
        },
        worksheet: {
          title: '세계시민 다짐',
          items: [
            { type: 'short', prompt: '온라인에서 지킬 다짐 세 문장을 써요.' },
            { type: 'check', prompt: '내 다짐을 점검해요.', options: ['구체적인 행동이 있다', '존중하는 말로 썼다', '실제 계정 이름을 쓰지 않았다'] },
          ],
        },
      }),
      M('wrap.help-map', {
        title: '도움 받을 곳 지도', method: '도움 받을 곳 지도', tool: 'map', minutes: 7,
        levels: { easy: '첫 질문에서 학교 안 한 곳(상담실)에만 핀을 꽂는다(둘째 질문은 교사와 함께 학교 밖 칸을 읽는다).', base: '학교 안(상담실)과 학교 밖(차별 상담·구제 기관) 두 곳에 핀을 꽂고, 하는 일과 번호 확인 방법을 고른다.', challenge: '셋째 질문에서 친구에게 안내할 말을 고르고, 넷째 질문에서 내 말로 쓴다.' },
        wrap: {
          teacher: `"혐오 표현의 대상이 된 친구가 도움을 받을 수 있는 곳은 학교 안 어디, 학교 밖 어디일까요?" 가상 학교 칸 지도에 핀을 꽂게 한다. 학교 밖 기관은 학교가 확인해 ${LOCAL} 칸에 적어 두었다고 알리고, 인터넷에서 아무 번호나 찾지 않게 한다. "어른에게 알리면 일이 커진다"는 걱정에는 "상담은 대상이 된 친구의 뜻을 물으며 함께 정하는 거예요"라고 짚는다.`,
          exitTicket: [
            IT({ type: 'tool', tool: 'map', options: MAPQ({ q: '상담실에서 하는 일은?', choices: ['비밀을 지키며 이야기를 듣고 방법을 함께 찾는다', '잘잘못을 따져 바로 벌을 준다', '반 전체에 알린다'], why: ['', '상담은 벌을 주는 곳이 아니에요.', '상담은 비밀을 지켜요.'] }), prompt: '학교 안에서 도움을 청할 곳에 핀을 꽂고, 그곳에서 하는 일을 골라요.', target: { place: '상담실(Wee 클래스)', pick: 0 }, difficulty: 0.15 },
              { prompt: '학교 안에서 도움을 청할 곳(상담실)에 핀을 꽂아요.', toolOptions: { ask: null }, target: { place: '상담실(Wee 클래스)' } }),
            IT({ type: 'tool', tool: 'map', options: MAPQ({ q: '이 기관의 번호는 어떻게 알까?', choices: ['학교가 확인해 적어 둔 칸을 본다', '인터넷에서 아무 번호나 찾는다', '단체 대화방에 물어본다'], why: ['', '확인하지 않은 번호는 틀릴 수 있어요.', '대화방에 물으면 일이 퍼질 수 있어요.'] }), prompt: '학교 밖에서 도움을 청할 곳에 핀을 꽂고, 번호를 아는 방법을 골라요.', target: { place: '차별 상담·구제 기관(학교가 확인)', pick: 0 }, difficulty: 0.2 },
              { prompt: '학교 밖에서 도움을 청할 곳에 핀을 꽂아요.', toolOptions: { ask: null }, target: { place: '차별 상담·구제 기관(학교가 확인)' } }),
            { type: 'choice', prompt: '혐오 표현의 대상이 된 친구에게 안내할 말로 알맞은 것은?', options: ['"네 뜻을 물어볼게. 원하면 상담실에 같이 가자"', '"내가 대신 다 신고해 둘게, 넌 몰라도 돼"', '"그냥 참으면 지나갈 거야"'], answer: 0, difficulty: 0.2, explain: '친구의 뜻을 묻고, 원하면 함께 가요.' },
            { type: 'short', prompt: '친구에게 도움 받을 곳을 안내하는 말을 내 말로 한 문장 써요.' },
          ],
        },
        worksheet: {
          title: '도움 받을 곳',
          items: [
            { type: 'table', prompt: '도움 받을 곳과 하는 일을 써요.', columns: ['곳', '하는 일'], cells: [['담임 선생님', ''], ['상담실(Wee 클래스)', ''], [`학교 밖 기관 ${LOCAL}`, '']], answer: '(예) 알리고 함께 방법 찾기 / 비밀을 지키며 이야기 듣기 / 차별 상담·구제 지원' },
            { type: 'short', prompt: '친구에게 도움 받을 곳을 안내할 때 먼저 할 일을 써요.' },
          ],
        },
        notes: `지도는 가상 학교다. 학교 밖 차별 상담·구제 기관의 이름과 번호는 수업 전에 학교가 확인해 ${LOCAL} 칸과 활동지에 적는다(이 모듈에는 쓰지 않았다). 문항마다 핀 하나라서 두 곳을 출구 질문 두 개로 나누었다. ` + SAFE_NOTE,
      }),
    );
  }

  PaperLessons.registerModules(ALL);
})();
