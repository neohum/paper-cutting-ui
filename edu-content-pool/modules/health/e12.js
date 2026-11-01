/* 법정교육 보건 — 초1-2 모듈 내용(edu-module.v1). 형식·작성 규칙: MODULES_BUILD.md, 계획: framework/safety-b.json 의 health 초1-2.
 * 근거: 학교보건법 제9조·제9조의2(보건교육 연 17차시, research-mandatory §1), §2 초 보건: 개인위생·손씻기, 감염병 예방, 응급처치 기초.
 *   1·2학년은 시수 배정이 0이라 추천 조합이 없다(학교가 이 학년을 고를 때 쓰는 모듈). 주제 6개(1·2학년 공통) × 계획 모듈 42개.
 * 초1-2 기준: 소리로 읽어 주는 짧은 문항, 카드 6자 안팎, 따라 하기·좋아요/안돼요 고르기. 인물은 가명 한두 글자(가상)이다.
 * 지킨 것:
 *  - 학생 자신의 건강 상태·아픈 경험·몸·가정 형편을 묻거나 채점하지 않는다. 채점 문항은 모두 가상 인물(수아·준·하늘·민)의 장면이고,
 *    '해 본 것'·'지킬 약속' 점검은 selfCheck(맞고 틀림 없음)로만 받는다.
 *  - 수치는 쓰지 않는다: 손 씻기·양치 시간(초·분), 하루 양치 횟수, 잠 시간, 화면과 눈 사이 거리는 근거 파일에 없다.
 *    타이머는 '구간 수·번갈아 하는 수'로만 맞춘다. 잘 시각 9시·8시 30분은 가상 인물 하늘이네 약속이며 권장 시각이 아니다.
 *  - 질병은 사실 수준으로만: "감기는 옮을 수 있어요", "병균은 눈에 안 보여요". 약 이름·치료법은 쓰지 않는다.
 *  - 같은 학년군 생활안전(saf-life/e12.js g1-tools-hands)의 손 씻기 차례(물→비누→헹굼, 헹군 뒤 말리기)·손 씻을 곳 짚기(손바닥·손등·손가락 사이·손톱 밑)·
 *    먹기 전 할 일 바구니·"비누, 쓱쓱, 헹궈요" 구호를 되풀이하지 않는다. 이 파일의 손 씻기는 '언제 씻나'(화장실·코 푼 뒤·강아지 만진 뒤 장면별 차례),
 *    '잘 안 씻기는 곳 퀴즈'(손톱 밑·엄지·손가락 사이를 보기로), '손바닥·손등' 노래 몸짓으로 장면을 바꿨다.
 *  - 종이 몸(body)에는 손가락·입술·이·눈썹·눈꺼풀·머리 칸이 없다: 손은 손목 + 보기 고르기, 입은 몸속 기관 '입'(find), 이·눈꺼풀은 학생이 자기 몸을 짚게 하고 notes 에 적었다.
 * 사람 확인(일반 지식 — 근거 파일에 세부 수칙 없음, 질병관리청·교육부 학생건강정보센터·대한치과의사협회 자료에서 확인):
 *  - health.e12.hand-wash.*: 손 씻을 때(화장실 다녀와서·밥 먹기 전·코 푼 뒤·동물 만진 뒤·밖에서 놀고 와서), 비누로 문지르기, 엄지·손톱 밑·손가락 사이가 잘 안 씻긴다(질병관리청 손씻기).
 *    씻는 단계 수·시간은 교사가 최신 공식 지침으로 보여 준다(wash-order notes).
 *  - health.e12.cough-manners.*: 기침·재채기는 소매(팔꿈치 안쪽)나 휴지로 입과 코를 가린다, 쓴 휴지는 휴지통에, 그 뒤 손 씻기, 기침이 나면 마스크(질병관리청 기침예절).
 *  - health.e12.teeth.*: 밥 먹은 뒤·자기 전 이 닦기, 앞니·어금니·안쪽 구석구석, 치약 묻히기 → 닦기 → 헹구기(대한치과의사협회·질병관리청 구강 건강). 횟수·시간은 쓰지 않았다.
 *  - health.e12.sleep-move.*: 자기 전 화면 보지 않기·불 끄고 눕기·양치하고 눕기, 밖에서 뛰어놀기(교육부 학생건강정보센터). 잠 시간 권장량은 쓰지 않았다.
 *  - health.e12.sleep-move.activity.move-body: 뛰기=무릎·발목, 던지기=어깨·팔꿈치, 매달리기=어깨·손목 — 놀이할 때 많이 쓰는 곳으로 단순화했다.
 *  - health.e12.tell-pain.*: 아프면 담임 선생님께 말하고 보건실에 간다, 보건실은 다쳤을 때만이 아니라 아플 때도 간다(학교 보건실 이용 안내 — 학교마다 절차 확인).
 *  - health.e12.eyes.*: 밝은 곳에서 보기, 화면·책에 얼굴을 바짝 대지 않기, 멀리 보며 눈 쉬기, 눈 비비지 않기(교육부 학생건강정보센터·대한안과학회). 거리(cm)·시간 규칙(예: 20-20-20)은 쓰지 않았다. */
(function () {
  const MOD = (topic) => (o) => Object.assign({ schema: 'edu-module.v1', domain: 'health', band: '초1-2', topic, grades: [1, 2] }, o);
  const MOOD = { type: 'mood', prompt: '오늘 공부를 마친 내 마음은 어떤가요?' };
  const C = (id, text, x) => Object.assign({ id, text }, x || {});
  const cut = (p) => p.replace(/\.$/, '');
  const OKNO = ['좋아요', '안돼요'];

  // 두 바구니 나누기(sortboard 글 카드): 기본 5~6장, 쉬움 앞 n장(limit)+바로 알림, 도전 more 카드 더
  const SORTB = (slots, prompt, a, b, more2, moreTo, easyN, d, more) => {
    const cards = []; const n = Math.max(a.length, b.length);
    for (let i = 0; i < n; i++) { if (a[i]) cards.push(a[i]); if (b[i]) cards.push(b[i]); }
    const ids = (xs) => xs.map((x) => (typeof x === 'string' ? x : x.id));
    const easyCards = cards.slice(0, easyN);
    const inA = (x) => a.includes(x);
    const S = (xa, xb) => ({ [slots[0]]: ids(xa), [slots[1]]: ids(xb) });
    const toA = moreTo === 0 ? more2 : []; const toB = moreTo === 1 ? more2 : [];
    return {
      prompt, toolOptions: { slots, cards }, target: { sort: S(a, b) }, difficulty: d,
      levels: {
        easy: { prompt: `${cut(prompt)}(${easyN}장).`, toolOptions: { limit: easyN }, target: { sort: S(easyCards.filter(inA), easyCards.filter((x) => !inA(x))) } },
        challenge: { prompt: `${cut(prompt)}(${cards.length + more2.length}장).`, toolOptions: { more: more2 }, target: { sort: S([...a, ...toA], [...b, ...toB]) } },
      },
      ...more,
    };
  };
  // 장면 차례(story·kitchen order 공용): 기본 3장, 쉬움 첫 장면이 놓여 있음, 도전 끼어든 카드 1장을 빼고 놓기
  const ORDER3 = (prompt, cards, wrong, d, more) => {
    const ids = cards.map((c) => c.id);
    const lv = { easy: { state: { at: { [ids[0]]: 0, [ids[1]]: null, [ids[2]]: null } } } };
    if (wrong) lv.challenge = { toolOptions: { cards: [cards[2], wrong, cards[0], cards[1]] } };
    return { prompt, toolOptions: { slots: ['먼저', '다음', '끝'], cards: [cards[2], cards[0], cards[1]] }, target: { order: ids }, difficulty: d, levels: lv, ...more };
  };
  // 정리 출구용 장면 차례(story) — 출구는 단계별 판이 없어 3장 그대로
  const STORY_EXIT = (prompt, cards) => ({ type: 'tool', tool: 'story', options: { mode: 'order', slots: ['먼저', '다음', '끝'], cards: [cards[2], cards[0], cards[1]] }, prompt, target: { order: cards.map((c) => c.id) }, difficulty: 0.1 });
  const CHECK = (title, items, prompt) => ({ type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title, items }, prompt: prompt || '해 볼 약속에 표시해요.', target: { selfCheck: true }, difficulty: 0.1 });

  // =====================================================================================================
  // 손 씻기
  const WASH = MOD('health.e12.hand-wash');
  const T_WASH = [
    WASH({
      id: 'health.e12.hand-wash.intro.dirty-hand', type: 'intro', title: '그림 속 손에 숨은 병균 찾기',
      method: '그림 속 손에 숨은 병균 찾기', tool: 'emotion', minutes: 5,
      levels: { easy: '교사가 모래 놀이 장면 하나만 읽어 주고 병균이 붙었을 손을 함께 고른다.', base: '모래 놀이·코 닦기 두 장면을 듣고 병균이 붙었을 손을 고르는 시연을 본다.', challenge: '두 장면을 본 뒤 "언제 씻을까요?"에 한마디로 답한다.' },
      intro: {
        teacher: '"준이가 모래 놀이를 하고, 코를 닦고, 공을 만졌어요. 병균이 붙었을 것 같은 손은 어느 것일까요?" 시연 단추로 손 카드가 바구니에 담기는 모습을 보인다(기다릴 반응: "흙 만진 손이요"). "깨끗해 보이면 병균이 없어요"라는 말이 나오면 "병균은 눈에 보일 만큼 클까요?"라고 되묻는다. 오늘은 손을 씻어야 할 때를 알아본다고 밝힌다.',
        student: '준이의 손 가운데 병균이 붙었을 것 같은 손을 하나 골라 말해요.',
        demo: { tool: 'emotion', options: { mode: 'pick', basket: '병균이 있을 손', cards: [C('sand', '모래 만진 손'), C('soap', '비누로 씻은 손'), C('nose', '코 닦은 손'), C('ball', '공 잡은 손')], shuffle: false }, sequence: [{ pick: ['sand', 'nose', 'ball'] }] },
        art: { draw: 'a paper child with sandy hands after playing in a sandbox, tiny cut-paper germ dots visible only through a big paper magnifying glass', banner: '병균은 안 보여요', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
      },
      notes: '병균을 무섭게 그리지 않는다. "보이지 않으니 씻어요" 수준에 머문다.',
    }),
    WASH({
      id: 'health.e12.hand-wash.intro.song', type: 'intro', title: '손바닥·손등 노래 몸짓',
      method: '손 씻기 노래 따라 부르기', tool: 'timer', minutes: 5,
      levels: { easy: '"손바닥 쓱쓱" 한 가지 몸짓만 노래에 맞춰 따라 한다.', base: '"손바닥 쓱쓱, 손등 쓱쓱" 두 가지 몸짓을 차례대로 따라 한다.', challenge: '"깍지 끼고 쓱쓱"(손가락 사이)까지 세 가지 몸짓을 이어 한다.' },
      intro: {
        teacher: '"손바닥 쓱쓱! (두 손바닥 비비기) 손등 쓱쓱! (한 손바닥으로 다른 손등) 깍지 끼고 쓱쓱! (손가락 사이)" 시연 단추로 몸짓 카드가 차례대로 놓이는 모습을 보이고 반 전체가 노래하며 세 번 따라 한다. 다 한 학생은 손을 들어 "해 보았어요"를 보인다. "손바닥만 비비면 돼요"라는 말이 나오면 "손등에 묻은 흙은 어디로 갈까요?"라고 되묻는다.',
        student: '선생님을 따라 "손바닥 쓱쓱, 손등 쓱쓱" 몸짓을 해 보아요.',
        demo: { tool: 'timer', options: { title: '손 씻기 노래 몸짓', cards: ['깍지 쓱쓱', '손바닥 쓱쓱', '손등 쓱쓱'] }, sequence: [{ order: ['손바닥 쓱쓱', '손등 쓱쓱', '깍지 쓱쓱'] }] },
        art: { draw: 'paper children singing and rubbing their palms, then the backs of their hands, then interlacing fingers, with cut-paper soap bubbles floating around', banner: '손바닥 쓱쓱, 손등 쓱쓱', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
      },
      notes: '노래 길이로 씻는 시간을 정하지 않는다(근거 파일에 시간 기준이 없다).',
    }),
    WASH({
      id: 'health.e12.hand-wash.activity.when-sort', type: 'activity', title: '손 씻을 때 고르기',
      method: '손 씻을 때 고르기', tool: 'sortboard', minutes: 14,
      levels: { easy: '카드 3장을 나누고, 틀린 바구니에 넣으면 바로 알려 준다.', base: '카드 5장을 "씻어요"·"괜찮아요" 바구니에 나눈 뒤 확인한다.', challenge: '카드 2장이 더 나와 7장을 나누고, 하나를 골라 왜 씻는지 짝에게 말한다.' },
      activity: {
        title: '손 씻을 때 카드 나누기', tool: 'sortboard',
        teacher: '"이럴 때 손을 씻어야 할까요?" 카드를 넣을 때마다 반 전체가 "씻어요!" 또는 "괜찮아요!"를 외친다. "강아지는 귀여우니까 안 씻어도 돼요"라는 학생에게 "강아지 털에 묻은 흙이 내 손에 옮지 않을까요?"라고 묻는다. 책 볼 때처럼 꼭 씻지 않아도 되는 때도 있다는 점을 짚어, 아무 때나가 아니라 "씻어야 할 때"를 아는 것이 중요하다고 말한다.',
        task: '카드를 씻어요·괜찮아요 바구니에 나누어요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
        items: [
          SORTB(['씻어요', '괜찮아요'], '학교에서 손 씻을 때는?', ['화장실 다녀와서', '밥 먹기 전', '운동장 놀이 뒤'], ['책 볼 때', '노래 부를 때'], ['코 푼 뒤', '그림 그릴 때'], null, 3, 0.1),
          SORTB(['씻어요', '괜찮아요'], '집에서 손 씻을 때는?', ['밖에서 와서', '간식 먹기 전', '강아지 만진 뒤'], ['동화 들을 때', '잠옷 입을 때'], ['쓰레기 버린 뒤', '노래 들을 때'], null, 3, 0.15),
          SORTB(['씻어요', '괜찮아요'], '나들이에서 손 씻을 때는?', ['흙 만진 뒤', '도시락 먹기 전', '기침 가린 뒤'], ['구름 볼 때', '걸어갈 때'], ['동물 먹이 준 뒤', '사진 찍을 때'], null, 3, 0.2, { conclude: '화장실 다녀와서, 먹기 전, 밖에서 놀고 와서 손을 씻어요.' }),
        ].map((it) => fixMore(it)),
      },
      worksheet: { items: [{ type: 'table', prompt: '씻어야 하면 ○, 괜찮으면 △를 써요.', columns: ['때', '○ / △'], cells: [['화장실 다녀와서', ''], ['책 볼 때', ''], ['밥 먹기 전', '']], answer: '○, △, ○' }] },
    }),
    WASH({
      id: 'health.e12.hand-wash.activity.wash-order', type: 'activity', title: '손 씻는 차례 3장 놓기',
      method: '손 씻는 차례 3장 놓기', tool: 'kitchen', minutes: 14,
      levels: { easy: '첫 장면이 놓여 있어 남은 카드 2장만 놓고, 놓으면 바로 맞는지 알려 준다.', base: '카드 3장(물 묻히기 → 비누 거품 → 헹구고 닦기)을 차례대로 놓는다.', challenge: '"손 털고 끝"처럼 비누를 건너뛴 카드가 섞여 있어, 비누 카드를 찾아 넣고 그 카드는 뺀다.' },
      activity: {
        title: '장면마다 손 씻는 차례 놓기', tool: 'kitchen',
        teacher: '"화장실에 다녀왔어요. 세면대 앞에서 맨 먼저 할 일은 무엇일까요?" 장면마다 카드를 놓은 뒤 반 전체가 차례대로 흉내 낸다. "물만 묻히면 깨끗해요"라는 학생에게 "물만으로 손에 묻은 기름이 빠질까요? 무엇이 더 필요할까요?"라고 묻는다. 씻는 단계 수와 시간은 교사가 최신 공식 손씻기 안내(질병관리청)를 화면에 보여 주며 덧붙인다.',
        task: '장면마다 손 씻는 차례로 카드를 놓아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          ORDER3('화장실에 다녀왔어요. 차례로.', [C('wet', '물 묻히기'), C('soap', '비누 거품'), C('rinse', '헹구고 닦기')], C('shake', '손 털고 끝'), 0.1, { toolOptions: { mode: 'order', slots: 3, cards: [C('rinse', '헹구고 닦기'), C('wet', '물 묻히기'), C('soap', '비누 거품')] } }),
          ORDER3('코를 풀었어요. 차례로 놓아요.', [C('tap', '물 틀어 적시기'), C('rub', '비누로 문지르기'), C('dry', '헹궈 말리기')], C('pants', '바지에 닦기'), 0.15, { toolOptions: { mode: 'order', slots: 3, cards: [C('dry', '헹궈 말리기'), C('tap', '물 틀어 적시기'), C('rub', '비누로 문지르기')] } }),
          ORDER3('강아지를 만졌어요. 차례로.', [C('sleeve', '소매 걷기'), C('foam', '비누 칠하기'), C('wipe', '헹구고 수건')], C('lick', '그냥 먹기'), 0.2, { toolOptions: { mode: 'order', slots: 3, cards: [C('wipe', '헹구고 수건'), C('sleeve', '소매 걷기'), C('foam', '비누 칠하기')] }, conclude: '물을 묻히고, 비누로 문지르고, 헹군 뒤 닦아요.' }),
        ].map((it) => fixOrder(it)),
      },
      worksheet: { items: [{ type: 'choice', prompt: '손을 씻을 때 꼭 쓰는 것에 ○ 해요.', options: ['비누', '바지'], answer: '비누' }] },
      notes: '씻는 단계 수·시간은 이 근거 파일에 없다. 교사가 최신 공식 지침(질병관리청 손씻기)을 보여 준다. 세 장면 모두 차례는 같고, 장면(언제 씻나)이 다르다.',
    }),
    WASH({
      id: 'health.e12.hand-wash.activity.hand-parts', type: 'activity', title: '잘 안 씻기는 손 부분 찾기',
      method: '잘 안 씻기는 손 부분 고르기', tool: 'body', minutes: 14,
      levels: { easy: '종이 몸에서 손목을 고르고(이름이 바로 보임), 잘 안 씻기는 곳 보기 2개 가운데 고른다.', base: '손목을 고르고 보기 2개 가운데 손톱 밑·엄지·손가락 사이를 문항마다 하나씩 고른다.', challenge: '보기 3개 가운데 고르고, 고른 곳을 문지르는 몸짓을 짝에게 보인다.' },
      activity: {
        title: '잘 안 씻기는 곳 퀴즈', tool: 'body',
        teacher: '"손을 씻을 때 자주 빠뜨리는 곳이 있대요. 어디일까요?" 종이 몸에는 손가락 칸이 없으니 손목을 짚고, 보기에서 잘 안 씻기는 곳을 고른다. 고른 뒤 모두 자기 손을 펴서 그곳을 짚어 보게 한다. "손바닥 가운데가 제일 더러워요"라는 학생에게 "손바닥은 비빌 때 늘 닿아요. 잘 안 닿는 곳은 어디일까요?"라고 묻는다.',
        task: '손목을 고르고 잘 안 씻기는 곳을 골라요.', levels: { easy: { names: true }, base: {}, challenge: {} },
        items: [
          { prompt: '손목을 고르고 보기도요.', toolOptions: { mode: 'parts', parts: ['목', '손목', '팔꿈치', '무릎'], ask: { q: '흙이 잘 남는 곳은?', choices: ['손톱 밑', '손바닥 가운데'] } }, target: { parts: ['손목'], pick: 0 }, difficulty: 0.1,
            levels: { challenge: { prompt: '손목을 고르고 셋 중 골라요.', toolOptions: { ask: { q: '흙이 잘 남는 곳은?', choices: ['손바닥 가운데', '손톱 밑', '손등 가운데'] } }, target: { parts: ['손목'], pick: 1 } } } },
          { prompt: '손목을 고르고 보기도요.', toolOptions: { mode: 'parts', parts: ['어깨', '팔꿈치', '손목', '허리'], ask: { q: '자주 빠뜨리는 손가락은?', choices: ['엄지', '손바닥'] } }, target: { parts: ['손목'], pick: 0 }, difficulty: 0.15,
            levels: { challenge: { prompt: '손목을 고르고 셋 중 골라요.', toolOptions: { ask: { q: '자주 빠뜨리는 손가락은?', choices: ['손바닥', '손등', '엄지'] } }, target: { parts: ['손목'], pick: 2 } } } },
          { prompt: '손목을 고르고 보기도요.', toolOptions: { mode: 'parts', parts: ['손목', '목', '어깨', '발목'], ask: { q: '거품이 덜 가는 곳은?', choices: ['손바닥', '손가락 사이'] } }, target: { parts: ['손목'], pick: 1 }, difficulty: 0.2,
            levels: { challenge: { prompt: '손목을 고르고 셋 중 골라요.', toolOptions: { ask: { q: '거품이 덜 가는 곳은?', choices: ['손가락 사이', '손바닥', '손등'] } }, target: { parts: ['손목'], pick: 0 } } },
            conclude: '손톱 밑, 엄지, 손가락 사이와 손목까지 문질러요.' },
        ],
      },
      worksheet: { items: [{ type: 'check', prompt: '씻을 때 빠뜨리지 않을 곳에 ✓ 해요.', options: ['손톱 밑', '엄지', '손가락 사이'] }] },
      notes: '종이 몸에는 손가락·손톱 칸이 없다 — 손목을 고르고, 잘 안 씻기는 곳은 보기로 고른 뒤 학생이 자기 손을 짚는다.',
    }),
    WASH({
      id: 'health.e12.hand-wash.wrap.story', type: 'wrap', title: '손 씻고 간식 먹는 이야기',
      method: '손 씻고 간식 먹는 이야기', tool: 'story', minutes: 8,
      levels: { easy: '교사가 첫 장면을 놓아 주고 남은 두 장면을 함께 놓는다.', base: '세 장면(밖에서 놀아요 → 손 씻어요 → 간식 먹어요)을 스스로 놓는다.', challenge: '장면을 놓은 뒤 장면마다 한마디("손 씻으러 가자!")를 덧붙여 말한다.' },
      wrap: {
        teacher: '"수아가 밖에서 놀고 들어와 간식을 먹으려고 해요. 무엇부터 할까요?" 출구 1번에서 장면 카드를 차례대로 놓고 반 전체가 장면마다 한마디씩 붙여 말한다. 출구 2번에서 "깨끗해 보이면 안 씻어요"를 고른 학생에게 "병균은 눈에 안 보여요. 놀고 오면 씻어요"라고 말해 준다.',
        exitTicket: [
          STORY_EXIT('수아 이야기를 차례로 놓아요.', [C('play', '밖에서 놀아요', { motif: 'sun' }), C('wash', '손 씻어요'), C('eat', '간식 먹어요')]),
          { type: 'choice', prompt: '손이 깨끗해 보이면?', options: ['안 씻어요', '놀고 왔으면 씻어요'], answer: 1, difficulty: 0.1, explain: '병균은 눈에 안 보여요. 놀고 오면 씻어요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '놀고 와서 손 씻기',
        items: [
          { type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '밖에서 놀고 와서 ___을 씻어요.', answer: '손' },
          { type: 'draw', prompt: '손 씻고 간식 먹는 장면을 그려요.' },
        ],
        easy: { note: '"놀고 → 씻고 → 먹고"를 떠올려요.', items: [{ type: 'draw', prompt: '비누 거품 묻은 손을 그려요.' }] },
      },
    }),
    WASH({
      id: 'health.e12.hand-wash.wrap.promise', type: 'wrap', title: '손 씻기 약속 꾸미기',
      method: '손 씻기 약속 꾸미기', tool: 'collage', minutes: 8,
      levels: { easy: '"밥 먹기 전 손 씻어요" 판에 비누방울 조각 2개를 붙인다(출구는 4개 이상이 통과 — 교사가 2개부터 붙이게 돕는다).', base: '비누방울 4개 이상을 붙인다.', challenge: '방울을 붙인 뒤 집에서 씻을 때 그림 하나를 활동지에 더 그린다.' },
      wrap: {
        teacher: '"밥 먹기 전 손 씻기 약속을 비누방울로 꾸며 볼까요?" 출구 1번에서 하늘색 동그라미(비누방울)를 붙이며 "밥 먹기 전, 화장실 다녀와서…"처럼 씻을 때를 하나씩 말하게 한다. 방울을 붙이지 못한 학생은 교사가 손을 잡고 함께 붙인다. 출구 2번에서 "물만 묻혀요"를 고른 학생에게 "비누가 있어야 거품이 손가락 사이까지 가요"라고 말해 준다.',
        exitTicket: [
          { type: 'tool', tool: 'collage', options: { shapes: ['circle', 'star', 'heart'], colors: ['파랑', '하양', '분홍', '노랑'] }, prompt: '비누방울 넷을 붙여요.', target: { has: [{ shape: 'circle', min: 4 }] }, difficulty: 0.1 },
          { type: 'choice', prompt: '손은 무엇으로 씻어요?', options: ['물만 묻혀요', '비누로 문질러요'], answer: 1, difficulty: 0.1, explain: '비누로 문질러 씻어요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '손 씻기 약속',
        items: [
          { type: 'check', prompt: '손을 씻을 때에 ✓ 해요.', options: ['밥 먹기 전', '화장실 다녀와서', '밖에서 놀고 와서'] },
          { type: 'draw', prompt: '비누방울로 손 씻기 약속을 꾸며요.' },
        ],
      },
    }),
  ];

  // =====================================================================================================
  // 기침 예절과 감기 옮기지 않기
  const COUGH = MOD('health.e12.cough-manners');
  const ROOM = [{ name: '휴지통', icon: 'dot', at: [0, 2] }, { name: '세면대', icon: 'dot', at: [3, 2] }, { name: '칠판', icon: 'dot', at: [1, 0] }, { name: '문', icon: 'dot', at: [3, 0] }];
  const ROOM_MORE = [{ name: '사물함', icon: 'dot', at: [0, 0] }, { name: '책꽂이', icon: 'dot', at: [2, 2] }];
  const T_COUGH = [
    COUGH({
      id: 'health.e12.cough-manners.intro.sneeze-scene', type: 'intro', title: '재채기 장면 보고 마음 고르기',
      method: '재채기 장면 보고 마음 고르기', tool: 'emotion', minutes: 5,
      levels: { easy: '옆 친구 마음 보기 2개(걱정돼요·신나요) 가운데 함께 고른다.', base: '보기 3개 가운데 고르는 시연을 본다.', challenge: '보기 3개를 본 뒤 옆 친구가 바라는 말("소매로 가려 줘")을 따라 말한다.' },
      intro: {
        teacher: '"민이가 손으로 가리지 않고 \'에취!\' 재채기를 했어요. 옆에 앉은 친구 마음은 어떨까요?" 시연 단추로 보기 가운데 하나가 골라지고 결과가 나오는 모습을 보인다(기다릴 반응: "싫어요", "걱정돼요"). "재채기는 참을 수 없으니 괜찮아요"라는 말이 나오면 "참지는 못해도 무엇으로 가릴 수 있을까요?"라고 되묻는다. 오늘은 기침·재채기를 가리는 법을 익힌다고 밝힌다.',
        student: '옆 친구라면 어떤 마음일지 생각해 손을 들어 말해요.',
        demo: { tool: 'emotion', options: { mode: 'branch', situation: '민이가 안 가리고 재채기했어요.', ask: '옆 친구 마음은?', choices: [{ id: 'worry', text: '걱정돼요', result: '병균이 옮을까 걱정돼요.', mood: '걱정' }, { id: 'fun', text: '신나요', result: '옆 친구는 놀랐어요.', mood: '놀람' }, { id: 'none', text: '아무렇지 않아요', result: '옆 친구 얼굴에 튀었어요.', mood: '걱정' }] }, sequence: [{ choice: 'worry' }] },
        art: { draw: 'a paper child sneezing without covering, tiny cut-paper droplets flying toward a surprised classmate, and the same child next to it sneezing into the inside of the elbow', banner: '에취! 가려 주세요', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
      },
      notes: '재채기한 친구를 놀리거나 탓하지 않는다. 가리는 법을 배우는 장면이다.',
    }),
    COUGH({
      id: 'health.e12.cough-manners.intro.mouth-nose', type: 'intro', title: '병균이 나오는 곳 찾기',
      method: '병균이 나오는 곳 찾기', tool: 'body', minutes: 5,
      levels: { easy: '종이 몸에서 입 하나를 함께 찾는다.', base: '입과 코를 차례로 찾는 시연을 본다.', challenge: '입·코를 찾은 뒤 손으로 만지면 안 되는 눈을 학생이 자기 얼굴에서 짚는다.' },
      intro: {
        teacher: '"기침·재채기를 하면 병균이 어디서 나올까요?" 시연 단추로 종이 몸의 입과 코가 차례로 골라지는 모습을 보인다(기다릴 반응: "입이요", "코요"). "손바닥으로 막으면 돼요"라는 말이 나오면 "그 손으로 문고리를 잡으면 병균은 어디로 갈까요?"라고 되묻는다. 끝으로 기침한 손으로 눈을 비비지 않는다는 점을 자기 눈을 짚으며 말한다.',
        student: '내 얼굴에서 입과 코를 손가락으로 짚어 보아요.',
        demo: { tool: 'body', options: { mode: 'find', organs: ['뇌', '코', '입', '폐'], names: true }, sequence: [{ sel: '입' }, { sel: '코' }] },
        art: { draw: 'a paper face with the mouth and nose highlighted by soft cut-paper circles, and a paper sleeve ready to cover them', banner: '입과 코를 가려요' },
      },
      notes: '종이 몸 몸속 기관 칸의 입·코를 쓴다. 눈은 학생이 자기 얼굴을 짚는다.',
    }),
    COUGH({
      id: 'health.e12.cough-manners.activity.elbow-copy', type: 'activity', title: '소매로 가리기 따라 하기',
      method: '소매로 가리기 따라 하기', tool: 'timer', minutes: 14,
      levels: { easy: '가리기 차례 카드 3장을 놓고, 교사와 한 번 따라 하도록 타이머를 맞춘다.', base: '차례 카드를 놓고, 짝과 세 번 번갈아 하도록 타이머를 맞춘다.', challenge: '휴지로 가리고 버리기까지 넣은 차례 카드 4장을 놓는다.' },
      activity: {
        title: '팔꿈치 안쪽으로 가리기 따라 하기', tool: 'timer',
        teacher: '"에취가 나오려고 해요! 팔을 굽혀 팔꿈치 안쪽에 입과 코를 묻어요." 차례 카드를 놓은 뒤 타이머의 따라 하기 칸 하나를 한 번으로 정하고, 시작 단추를 누르면 짝과 번갈아 흉내 낸다. 손바닥으로 막는 학생에게 "그 손으로 연필을 잡으면 어떻게 될까요?"라고 묻는다. 휴지가 있으면 휴지로 가리고 바로 버린다는 점도 함께 짚는다.',
        task: '가리는 차례를 놓고 따라 할 횟수를 맞춰요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          { prompt: '가리는 차례로 놓아요.', toolOptions: { title: '소매로 가리기', cards: ['"에취!"', '고개 돌리기', '팔 굽히기'] }, target: { order: ['고개 돌리기', '팔 굽히기', '"에취!"'] }, difficulty: 0.1,
            levels: { challenge: { prompt: '휴지까지 차례로 놓아요.', toolOptions: { cards: ['휴지통에 버리기', '고개 돌리기', '휴지로 가리기', '"에취!"'] }, target: { order: ['고개 돌리기', '휴지로 가리기', '"에취!"', '휴지통에 버리기'] } } } },
          { prompt: '짝과 세 번 하게 맞춰요.', toolOptions: { title: '번갈아 따라 하기', labels: ['따라 하기', '쉬기'], plan: { work: 10, rest: 5, rounds: 1 } }, target: { plan: { rounds: 3 } }, difficulty: 0.15,
            hints: ['한 번 따라 하기가 한 칸이에요.', '되풀이 횟수가 따라 하는 수예요.', '되풀이 횟수를 3에 맞춰요.'],
            levels: { easy: { prompt: '선생님과 두 번 하게 맞춰요.', target: { plan: { rounds: 2 } } }, challenge: { prompt: '짝과 네 번 하게 맞춰요.', target: { plan: { rounds: 4 } } } } },
          { prompt: '기침한 뒤 차례로 놓아요.', toolOptions: { title: '기침한 뒤', cards: ['자리로 가기', '손 씻기', '휴지 버리기'] }, target: { order: ['휴지 버리기', '손 씻기', '자리로 가기'] }, difficulty: 0.2, conclude: '소매나 휴지로 입과 코를 가리고, 휴지는 버리고, 손을 씻어요.' },
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '재채기는 어디로 가려요?', options: ['손바닥', '팔꿈치 안쪽'], answer: '팔꿈치 안쪽' }] },
    }),
    COUGH({
      id: 'health.e12.cough-manners.activity.ok-no', type: 'activity', title: '기침 행동 좋아요·안돼요',
      method: '기침 행동 좋아요·안돼요', tool: 'sortboard', minutes: 14,
      levels: { easy: '카드 4장을 나누고, 틀린 바구니에 넣으면 바로 알려 준다.', base: '카드 6장을 좋아요·안돼요 바구니에 나눈 뒤 확인한다.', challenge: '헷갈리는 카드 2장이 더 나와 8장을 나누고, 안돼요 하나를 좋아요로 바꿔 말한다.' },
      activity: {
        title: '기침·재채기 행동 두 바구니로 나누기', tool: 'sortboard',
        teacher: '"이렇게 하면 좋아요일까요, 안돼요일까요?" 카드를 넣을 때마다 반 전체가 소리 내어 읽고 그 몸짓을 흉내 낸다. "손바닥으로 막아요"를 좋아요에 둔 학생에게 "손바닥에 묻은 것은 어디로 갈까요?"라고 묻는다. 안돼요 카드 하나를 골라 "이렇게 바꾸면 좋아요"로 말해 보게 한다.',
        task: '기침 행동 카드를 두 바구니에 나누어요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
        items: [
          SORTB(OKNO, '교실에서 기침할 때는?', ['소매로 가리기', '휴지로 가리기', '고개 돌리기'], ['친구 쪽 기침', '그냥 기침', '손에 대고 기침'], ['마스크 쓰기', '휴지 책상에 두기'], null, 4, 0.1),
          SORTB(OKNO, '급식실에서 재채기할 때는?', ['식판 밖으로 고개', '팔꿈치에 에취', '휴지 버리기'], ['반찬 쪽 에취', '수저에 대고', '손으로 막고 먹기'], ['손 씻고 먹기', '쓴 휴지 주머니'], null, 4, 0.15),
          SORTB(OKNO, '콧물이 나올 때는?', ['휴지로 닦기', '휴지통에 버리기', '손 씻기'], ['소매로 쓱 닦기', '휴지 바닥에', '손으로 훔치기'], ['마스크 쓰기', '휴지 다시 쓰기'], null, 4, 0.2, { conclude: '소매나 휴지로 가리고, 휴지는 버리고, 손을 씻어요.' }),
        ].map((it) => fixMore(it, ['휴지 책상에 두기', '쓴 휴지 주머니', '휴지 다시 쓰기'])),
      },
      worksheet: { items: [{ type: 'table', prompt: '좋으면 ○, 안 되면 ×를 써요.', columns: ['행동', '○ / ×'], cells: [['소매로 가리기', ''], ['친구 쪽으로 기침', ''], ['휴지는 휴지통에', '']], answer: '○, ×, ○' }] },
    }),
    COUGH({
      id: 'health.e12.cough-manners.activity.tissue-check', type: 'activity', title: '기침한 뒤 할 일 점검',
      method: '기침한 뒤 할 일 점검', tool: 'kitchen', minutes: 14,
      levels: { easy: '항목 2개(휴지 버리기·손 씻기) 가운데 할 일에 표시한다.', base: '항목 3개 가운데 할 일에만 표시한다(하면 안 되는 항목이 섞임).', challenge: '항목 4개 가운데 표시하고, 마지막 문항에서 집에서 할 일 하나를 스스로 점검한다.' },
      activity: {
        title: '기침한 뒤 할 일 목록에 표시하기', tool: 'kitchen',
        teacher: '"하늘이가 휴지로 가리고 기침을 했어요. 그다음에 할 일은 무엇일까요?" 목록을 하나씩 읽어 주고 할 일에만 표시하게 한다. "쓴 휴지는 주머니에 넣어요"에 표시한 학생에게 "주머니에 넣은 휴지를 나중에 만지면 손은 어떻게 될까요?"라고 묻는다. 마지막 문항은 내가 해 볼 것을 표시하는 것이라 맞고 틀림이 없다고 말해 준다.',
        task: '하늘이가 기침한 뒤 할 일에 표시해요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          { prompt: '휴지로 가렸어요. 할 일은?', toolOptions: { mode: 'checklist', title: '기침한 뒤', items: [C('bin', '휴지 버리기'), C('pocket', '주머니에 넣기'), C('wash', '손 씻기')] }, target: { checklist: ['bin', 'wash'] }, difficulty: 0.1,
            levels: { easy: { toolOptions: { items: [C('bin', '휴지 버리기'), C('wash', '손 씻기')] }, target: { checklist: ['bin', 'wash'] } },
              challenge: { toolOptions: { items: [C('bin', '휴지 버리기'), C('pocket', '주머니에 넣기'), C('wash', '손 씻기'), C('desk', '책상에 두기')] }, target: { checklist: ['bin', 'wash'] } } } },
          { prompt: '기침이 계속 나요. 할 일은?', toolOptions: { mode: 'checklist', title: '기침이 계속 날 때', items: [C('mask', '마스크 쓰기'), C('near', '친구와 바짝'), C('tell', '선생님께 말하기')] }, target: { checklist: ['mask', 'tell'] }, difficulty: 0.15,
            levels: { easy: { toolOptions: { items: [C('mask', '마스크 쓰기'), C('tell', '선생님께 말하기')] }, target: { checklist: ['mask', 'tell'] } },
              challenge: { toolOptions: { items: [C('mask', '마스크 쓰기'), C('near', '친구와 바짝'), C('tell', '선생님께 말하기'), C('share', '컵 나눠 쓰기')] }, target: { checklist: ['mask', 'tell'] } } } },
          { prompt: '내가 해 볼 일에 표시해요.', toolOptions: { mode: 'checklist', title: '내가 해 볼 일', items: [C('sleeve', '소매로 가리기'), C('bin', '휴지 버리기'), C('wash', '손 씻기')] }, target: { selfCheck: true }, difficulty: 0.2,
            levels: { easy: { toolOptions: { items: [C('sleeve', '소매로 가리기'), C('wash', '손 씻기')] } },
              challenge: { prompt: '집에서 해 볼 일도 표시해요.', toolOptions: { items: [C('sleeve', '소매로 가리기'), C('bin', '휴지 버리기'), C('wash', '손 씻기'), C('home', '집에서도 가리기')] } } },
            conclude: '기침한 뒤에는 휴지를 버리고 손을 씻어요.' },
        ],
      },
      worksheet: { items: [{ type: 'check', prompt: '기침한 뒤 할 일에 ✓ 해요.', options: ['휴지를 휴지통에', '손을 씻어요', '휴지를 주머니에'] }] },
      notes: '셋째 문항은 스스로 점검이다. 학생이 실제로 기침을 하는지, 아픈지 묻지 않는다.',
    }),
    COUGH({
      id: 'health.e12.cough-manners.wrap.cold-story', type: 'wrap', title: '감기 옮기지 않는 이야기',
      method: '감기 옮기지 않는 이야기', tool: 'story', minutes: 8,
      levels: { easy: '교사가 첫 장면을 놓아 주고 남은 두 장면을 함께 놓는다.', base: '세 장면(기침이 나요 → 소매로 가려요 → 손 씻어요)을 스스로 놓는다.', challenge: '장면을 놓은 뒤 출구 2번에서 친구에게 할 말을 고른다.' },
      wrap: {
        teacher: '"준이가 감기에 걸려 기침이 나요. 친구에게 옮기지 않으려면?" 출구 1번에서 장면 카드를 차례대로 놓고 장면마다 몸짓을 한다. 출구 2번에서 "기침하지 마!"를 고른 학생에게 "기침은 참기 어려워요. 가려 달라고 부탁하는 말은 무엇일까요?"라고 묻는다. 감기는 옮을 수 있으니 서로 가려 주는 것이 친구를 지키는 일이라고 짚는다.',
        exitTicket: [
          STORY_EXIT('준이 이야기를 차례로 놓아요.', [C('cough', '기침이 나요'), C('cover', '소매로 가려요'), C('wash', '손 씻어요')]),
          { type: 'choice', prompt: '기침하는 친구에게 할 말은?', options: ['"기침하지 마!"', '"소매로 가려 줘"', '"저리 가!"'], answer: 1, difficulty: 0.1, explain: '"소매로 가려 줘"라고 부드럽게 말해요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '감기 옮기지 않기',
        items: [
          { type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '기침이 나면 ___로 가려요.', answer: '소매' },
          { type: 'draw', prompt: '소매로 입과 코를 가린 모습을 그려요.' },
        ],
      },
    }),
    COUGH({
      id: 'health.e12.cough-manners.wrap.class-map', type: 'wrap', title: '교실 휴지통·세면대 찾기',
      method: '교실 휴지통·세면대 찾기', tool: 'map', minutes: 8,
      levels: { easy: '교실 지도에서 휴지통에 핀을 꽂는다.', base: '휴지통에 꽂은 뒤 출구 2번에서 세면대 자리를 고른다.', challenge: '꽂은 뒤 내 자리에서 실제 세면대까지 가는 길을 손으로 따라가 본다.' },
      wrap: {
        teacher: '"쓴 휴지는 어디에 버릴까요? 손은 어디서 씻을까요?" 출구 1번에서 교실 칸 지도에 핀을 꽂은 뒤, 실제 우리 교실의 휴지통과 세면대(또는 가장 가까운 세면대)를 손으로 가리키게 한다. 세면대가 교실에 없으면 화장실 세면대로 바꾸어 말한다. 출구 2번을 함께 읽고 고른다.',
        exitTicket: [
          { type: 'tool', tool: 'map', options: { grid: [4, 3], places: ROOM, title: '우리 교실' }, prompt: '쓴 휴지 버릴 곳에 꽂아요.', target: { place: '휴지통' }, difficulty: 0.1 },
          { type: 'choice', prompt: '기침한 뒤 손 씻을 곳은?', options: ['칠판', '세면대', '사물함'], answer: 1, difficulty: 0.1, explain: '세면대에서 비누로 손을 씻어요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '우리 교실 휴지통·세면대',
        items: [
          { type: 'draw', prompt: '우리 교실 휴지통이 있는 곳을 그려요.' },
          { type: 'choice', prompt: '쓴 휴지는 어디에 버려요?', options: ['휴지통', '책상 서랍'], answer: '휴지통' },
        ],
      },
      notes: '지도 칸 자리는 예시 교실이다. 우리 교실 자리와 다르면 실제 자리를 짚게 한다.',
    }),
  ];

  // =====================================================================================================
  // 이 닦기
  const TEETH = MOD('health.e12.teeth');
  const T_TEETH = [
    TEETH({
      id: 'health.e12.teeth.intro.sweet-teeth', type: 'intro', title: '이가 아픈 친구 마음 크기',
      method: '이가 아픈 친구 마음 크기', tool: 'emotion', minutes: 5,
      levels: { easy: '교사가 눈금 세 칸(조금·보통·많이)만 읽어 주며 함께 고른다.', base: '눈금 다섯 칸에서 친구의 아픈 마음 크기를 고르는 시연을 본다.', challenge: '고른 크기를 말하고 친구에게 해 줄 말("같이 이 닦자")을 덧붙인다.' },
      intro: {
        teacher: '"하늘이가 사탕을 먹고 이를 안 닦고 잤더니 이가 아프대요. 하늘이 마음은 얼마나 속상할까요?" 시연 단추로 눈금이 골라지는 모습을 보인다. "물만 마시면 돼요"라는 말이 나오면 "물만 마시면 이 사이에 낀 것도 빠질까요?"라고 되묻는다. 오늘은 이를 닦을 때와 구석구석 닦는 차례를 배운다고 밝힌다.',
        student: '하늘이에게 해 주고 싶은 말을 하나 떠올려 짝에게 말해요.',
        demo: { tool: 'emotion', options: { mode: 'scale', situation: '하늘이가 이가 아파요.', feeling: '속상함', steps: 5, scaleLabels: { 1: '조금', 5: '아주 많이' } }, sequence: [{ level: 4 }] },
        art: { draw: 'a paper child holding a cheek with a sad face next to a candy wrapper, and a paper toothbrush and toothpaste waiting on a shelf', banner: '이가 아파요' },
      },
      notes: '학생 자신의 충치·치과 경험을 묻지 않는다. 가상 인물 하늘이의 장면이다.',
    }),
    TEETH({
      id: 'health.e12.teeth.intro.mouth-find', type: 'intro', title: '입 안에서 이 찾기',
      method: '입 안에서 이 찾기', tool: 'body', minutes: 5,
      levels: { easy: '종이 몸에서 입을 찾고, 거울로 내 앞니를 본다.', base: '입을 찾은 뒤 내 앞니와 어금니를 혀로 짚어 본다.', challenge: '어금니의 울퉁불퉁한 씹는 면까지 혀로 짚어 본다.' },
      intro: {
        teacher: '"이는 어디에 있을까요?" 시연 단추로 종이 몸의 입이 골라지는 모습을 보인 뒤, 모두 입을 다물고 혀로 앞니 → 옆니 → 맨 안쪽 어금니를 차례로 짚어 보게 한다. "앞니만 닦으면 돼요"라는 말이 나오면 "음식을 씹는 이는 앞니일까요, 안쪽 어금니일까요?"라고 되묻는다. 어금니 씹는 면은 울퉁불퉁해서 음식이 잘 낀다는 점을 짚는다.',
        student: '혀로 내 앞니와 맨 안쪽 어금니를 짚어 보아요.',
        demo: { tool: 'body', options: { mode: 'find', organs: ['코', '입', '식도', '위'], names: true }, sequence: [{ sel: '입' }] },
        art: { draw: 'a big paper smile showing front teeth and back molars cut from white paper, with a paper toothbrush pointing to the back teeth', banner: '앞니도, 어금니도' },
      },
      notes: '종이 몸에는 이 칸이 없다 — 입(몸속 기관)을 찾고, 앞니·어금니는 학생이 혀로 짚는다. 다른 친구 입 안을 들여다보지 않는다.',
    }),
    TEETH({
      id: 'health.e12.teeth.activity.brush-order', type: 'activity', title: '이 닦는 차례 3장',
      method: '이 닦는 차례 3장', tool: 'kitchen', minutes: 14,
      levels: { easy: '첫 카드가 놓여 있어 남은 2장만 놓고, 놓으면 바로 알려 준다.', base: '카드 3장(치약 묻히기 → 구석구석 닦기 → 헹구기)을 차례대로 놓는다.', challenge: '끼어든 "바로 자기" 같은 카드를 빼고 3장을 놓는다.' },
      activity: {
        title: '이 닦는 차례 카드 놓기', tool: 'kitchen',
        teacher: '"칫솔을 들었어요. 맨 먼저 할 일은 무엇일까요?" 카드를 놓은 뒤 칫솔 잡는 흉내로 차례대로 따라 한다. "헹구고 바로 자요"처럼 끼어든 카드를 넣는 학생에게 "그 카드는 이 닦는 차례일까요?"라고 묻는다. 닦을 때는 앞니만이 아니라 어금니·안쪽까지 구석구석이라는 점을 짚는다.',
        task: '이 닦는 차례로 카드를 놓아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          ORDER3('저녁 먹고 이를 닦아요.', [C('paste', '치약 묻히기'), C('brush', '구석구석 닦기'), C('rinse', '물로 헹구기')], C('sleep', '바로 자기'), 0.1, { toolOptions: { mode: 'order', slots: 3, cards: [C('rinse', '물로 헹구기'), C('paste', '치약 묻히기'), C('brush', '구석구석 닦기')] } }),
          ORDER3('구석구석 닦는 차례예요.', [C('front', '앞니 닦기'), C('back', '어금니 닦기'), C('in', '안쪽 닦기')], C('candy', '사탕 먹기'), 0.15, { toolOptions: { mode: 'order', slots: 3, cards: [C('in', '안쪽 닦기'), C('front', '앞니 닦기'), C('back', '어금니 닦기')] } }),
          ORDER3('다 닦은 뒤 차례예요.', [C('spit', '물 뱉기'), C('wash', '칫솔 씻기'), C('dry', '칫솔 세워 두기')], C('share', '칫솔 빌려주기'), 0.2, { toolOptions: { mode: 'order', slots: 3, cards: [C('dry', '칫솔 세워 두기'), C('spit', '물 뱉기'), C('wash', '칫솔 씻기')] }, conclude: '치약을 묻혀 앞니·어금니·안쪽을 닦고, 헹군 뒤 칫솔을 씻어 둬요.' }),
        ].map((it) => fixOrder(it)),
      },
      worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '앞니도 닦고 ___도 닦아요.', answer: '어금니' }] },
      notes: '양치 시간·하루 횟수는 근거 파일에 없어 쓰지 않는다. 칫솔은 혼자 쓴다는 점은 도전 카드(칫솔 빌려주기)로 짚는다.',
    }),
    TEETH({
      id: 'health.e12.teeth.activity.brush-copy', type: 'activity', title: '칫솔질 몸짓 따라 하기',
      method: '칫솔질 몸짓 따라 하기', tool: 'timer', minutes: 14,
      levels: { easy: '구간 타이머를 앞니 한 구간에 맞추고 몸짓을 따라 한다.', base: '앞니·어금니 두 구간에 맞추고 구간마다 몸짓을 따라 한다.', challenge: '안쪽까지 세 구간에 맞추고, 닦는 곳 카드 차례도 놓는다.' },
      activity: {
        title: '구간마다 닦는 곳 바꿔 따라 하기', tool: 'timer',
        teacher: '"타이머가 한 구간 돌면 닦는 곳을 바꿔요. 앞니 → 어금니 → 안쪽!" 구간 수를 맞춘 뒤 시작 단추를 누르고, 칫솔 쥔 손 흉내로 구간마다 닦는 곳을 바꾼다. 구간 길이는 몸짓 연습용이며 몇 분 닦으라는 뜻이 아니라고 먼저 말한다. 앞니만 오래 닦는 학생에게 "어금니 차례에는 어디를 닦을까요?"라고 묻는다. 다 하면 "해 보았어요"를 보인다.',
        task: '닦는 곳 구간 수를 맞추고 몸짓을 따라 해요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          { prompt: '앞니·어금니 두 구간에 맞춰요.', toolOptions: { title: '칫솔질 구간', labels: ['닦기', '바꾸기'], plan: { work: 10, rest: 5, rounds: 1 } }, target: { plan: { rounds: 2 } }, difficulty: 0.1,
            hints: ['닦는 곳 하나가 한 구간이에요.', '되풀이 횟수가 구간 수예요.', '되풀이 횟수를 2에 맞춰요.'],
            levels: { easy: { prompt: '앞니 한 구간에 맞춰요.', target: { plan: { rounds: 1 } }, state: { plan: { work: 10, rest: 5, rounds: 3 } } }, challenge: { prompt: '안쪽까지 세 구간에 맞춰요.', target: { plan: { rounds: 3 } } } } },
          { prompt: '닦는 곳 차례로 놓아요.', toolOptions: { title: '닦는 곳 차례', cards: ['어금니', '앞니', '안쪽'] }, target: { order: ['앞니', '어금니', '안쪽'] }, difficulty: 0.15,
            levels: { easy: { prompt: '닦는 곳 두 장을 놓아요.', toolOptions: { cards: ['어금니', '앞니'] }, target: { order: ['앞니', '어금니'] } } } },
          { prompt: '닦을 곳을 다 했나 점검해요.', toolOptions: { title: '구석구석 점검', safety: ['앞니를 닦았어요', '어금니를 닦았어요', '안쪽을 닦았어요'] }, target: { safety: true }, difficulty: 0.2,
            levels: { easy: { toolOptions: { safety: ['앞니를 닦았어요', '어금니를 닦았어요'] } } },
            conclude: '앞니, 어금니, 안쪽까지 구석구석 닦아요.' },
        ],
      },
      worksheet: { items: [{ type: 'check', prompt: '닦을 곳에 ✓ 해요.', options: ['앞니', '어금니', '안쪽'] }] },
      notes: '구간 길이는 몸짓 연습용이다. 양치 시간을 권장하지 않는다.',
    }),
    TEETH({
      id: 'health.e12.teeth.activity.when-sort', type: 'activity', title: '이 닦을 때 고르기',
      method: '이 닦을 때 고르기', tool: 'sortboard', minutes: 14,
      levels: { easy: '카드 3장을 나누고, 틀린 바구니에 넣으면 바로 알려 준다.', base: '카드 5장을 "닦아요"·"아니에요" 바구니에 나눈 뒤 확인한다.', challenge: '카드 2장이 더 나와 7장을 나누고, 학교에서 닦을 때를 짝에게 말한다.' },
      activity: {
        title: '이 닦을 때 카드 나누기', tool: 'sortboard',
        teacher: '"이럴 때 이를 닦을까요?" 카드를 넣을 때마다 "닦아요!" 또는 "아니에요!"를 함께 외친다. "아침에 일어나면 바로 사탕 먹고 닦아요"처럼 말하는 학생에게 "닦은 뒤에 단 것을 먹으면 이는 어떻게 될까요?"라고 묻는다. 학교에서는 점심을 먹은 뒤가 이 닦을 때라는 것을 짚는다(학교마다 양치 시간이 다르면 우리 학교 약속을 말한다).',
        task: '카드를 닦아요·아니에요 바구니에 나누어요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
        items: [
          SORTB(['닦아요', '아니에요'], '이를 닦을 때는?', ['밥 먹은 뒤', '자기 전', '간식 먹은 뒤'], ['놀이 중', '책 읽을 때'], ['점심 먹고', '그림 그릴 때'], null, 3, 0.1),
          SORTB(['닦아요', '아니에요'], '집에서 이 닦을 때는?', ['아침 먹고', '잠자기 전', '단것 먹은 뒤'], ['텔레비전 볼 때', '놀이터에서'], ['저녁 먹고', '줄넘기할 때'], null, 3, 0.15),
          SORTB(['닦아요', '아니에요'], '학교에서 이 닦을 때는?', ['점심 먹고', '우유 마시고', '과일 먹고'], ['수업 시간', '줄 설 때'], ['간식 먹고', '체육 시간'], null, 3, 0.2, { conclude: '밥이나 간식을 먹은 뒤, 그리고 자기 전에 이를 닦아요.' }),
        ].map((it) => fixMore(it)),
      },
      worksheet: { items: [{ type: 'table', prompt: '닦을 때면 ○, 아니면 ×를 써요.', columns: ['때', '○ / ×'], cells: [['밥 먹은 뒤', ''], ['놀이 중', ''], ['자기 전', '']], answer: '○, ×, ○' }] },
    }),
    TEETH({
      id: 'health.e12.teeth.wrap.day-line', type: 'wrap', title: '하루 중 이 닦는 때 줄에 놓기',
      method: '하루 중 이 닦는 때 줄에 놓기', tool: 'timeline', minutes: 8,
      levels: { easy: '교사가 아침·자기 전 두 때를 먼저 읽어 주고 함께 놓는다.', base: '아침밥 뒤·점심밥 뒤·자기 전 세 때 카드를 하루 줄에 차례대로 놓는다.', challenge: '놓은 뒤 출구 2번에서 간식 뒤에도 닦는지 고른다.' },
      wrap: {
        teacher: '"하루 동안 이를 닦는 때를 줄에 놓아 볼까요?" 출구 1번에서 아침 → 낮 → 밤 차례로 칫솔질 카드를 놓고, 놓을 때마다 칫솔질 흉내를 한다. 하루 몇 번이라고 숫자로 정하지 않고 "먹은 뒤와 자기 전"으로 말한다. 출구 2번에서 "아니요"를 고른 학생에게 "간식을 먹은 뒤에도 이 사이에 무엇이 남을까요?"라고 묻는다.',
        exitTicket: [
          { type: 'tool', tool: 'timeline', options: { mode: 'order', axis: ['아침', '밤'], slots: ['먼저', '다음', '끝'], cards: [C('night', '자기 전 닦기'), C('am', '아침밥 뒤 닦기'), C('noon', '점심밥 뒤 닦기')] }, prompt: '이 닦는 때를 차례로 놓아요.', target: { order: ['am', 'noon', 'night'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '간식 먹은 뒤에도 닦아요?', options: ['네, 닦아요', '아니요'], answer: 0, difficulty: 0.1, explain: '간식을 먹은 뒤에도 이를 닦아요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '하루 중 이 닦는 때',
        items: [
          { type: 'check', prompt: '이를 닦는 때에 ✓ 해요.', options: ['아침밥 먹고', '점심밥 먹고', '자기 전'] },
          { type: 'draw', prompt: '자기 전에 이 닦는 내 모습을 그려요.' },
        ],
      },
      notes: '하루 양치 횟수는 근거 파일에 없어 숫자로 말하지 않는다. 학생이 집에서 몇 번 닦는지 묻지 않는다.',
    }),
    TEETH({
      id: 'health.e12.teeth.wrap.smile', type: 'wrap', title: '반짝 이 얼굴 꾸미기',
      method: '반짝 이 얼굴 꾸미기', tool: 'collage', minutes: 8,
      levels: { easy: '웃는 얼굴에 흰 네모 이 4개를 붙인다(출구 통과 기준 4개).', base: '흰 이 8개를 위아래로 붙인다(교사가 8개까지 붙이도록 안내).', challenge: '이를 붙인 뒤 내가 닦을 때 그림을 활동지에 그린다.' },
      wrap: {
        teacher: '"반짝반짝 깨끗한 이를 붙여 웃는 얼굴을 만들어 볼까요?" 출구 1번에서 하얀 네모 조각을 붙이며 "앞니, 어금니…"라고 이름을 말하게 한다. 4개를 붙인 학생에게는 위아래로 8개까지 붙여 보자고 권한다. 출구 2번에서 "앞니만"을 고른 학생에게 "음식을 씹는 어금니도 닦아요"라고 말해 준다.',
        exitTicket: [
          { type: 'tool', tool: 'collage', options: { shapes: ['square', 'semi', 'star'], colors: ['하양', '빨강', '분홍', '노랑'] }, prompt: '흰 네모 이를 넷 붙여요.', target: { has: [{ shape: 'square', color: '하양', min: 4 }] }, difficulty: 0.1 },
          { type: 'choice', prompt: '어느 이를 닦아요?', options: ['앞니만', '앞니와 어금니'], answer: 1, difficulty: 0.1, explain: '앞니도 어금니도 구석구석 닦아요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '반짝 이 얼굴',
        items: [
          { type: 'draw', prompt: '이를 닦고 웃는 얼굴을 그려요.' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '자기 ___에 이를 닦아요.', answer: '전' },
        ],
      },
    }),
  ];

  // =====================================================================================================
  // 잘 자고 잘 움직이기
  const SLEEP = MOD('health.e12.sleep-move');
  const T_SLEEP = [
    SLEEP({
      id: 'health.e12.sleep-move.intro.sleepy-face', type: 'intro', title: '졸린 얼굴·개운한 얼굴 고르기',
      method: '졸린 얼굴·개운한 얼굴 고르기', tool: 'emotion', minutes: 5,
      levels: { easy: '교사가 한 장면(일찍 잔 아침)만 읽어 주고 얼굴 카드를 함께 고른다.', base: '두 장면(늦게 잔 아침·일찍 잔 아침)에 얼굴 카드를 짝 짓는 시연을 본다.', challenge: '두 아침이 어떻게 다른지 한마디로 말한다.' },
      intro: {
        teacher: '"준이는 어젯밤 늦게까지 놀다 잤고, 수아는 일찍 잤어요. 아침에 두 친구 얼굴은 어떨까요?" 시연 단추로 장면과 얼굴 카드가 짝 지어지는 모습을 보인다(기다릴 반응: "준이는 졸려요"). "늦게 자도 아침에 괜찮아요"라는 말이 나오면 "아침에 눈이 잘 안 떠지면 학교 갈 때 기분이 어떨까요?"라고 되묻는다. 오늘은 잠자기 전 습관과 몸을 움직이는 놀이를 알아본다고 밝힌다.',
        student: '수아처럼 개운한 아침이면 어떤 기분일지 짝에게 말해요.',
        demo: { tool: 'emotion', options: { mode: 'match', slots: [{ id: 'late', label: '늦게 잔 준이' }, { id: 'early', label: '일찍 잔 수아' }], cards: ['걱정', '편안함'] }, sequence: [{ match: { late: '걱정', early: '편안함' } }] },
        art: { draw: 'two paper bedrooms at morning: one child yawning with heavy eyes next to a glowing tablet, the other child stretching happily by a sunny window', banner: '잘 자면 개운해요', extra: [{ motif: 'sun', x: 300, y: 96 }] },
      },
      notes: '학생이 몇 시에 자는지 묻지 않는다. 가상 인물의 아침이다.',
    }),
    SLEEP({
      id: 'health.e12.sleep-move.intro.stretch', type: 'intro', title: '기지개 몸풀기 따라 하기',
      method: '기지개 몸풀기 따라 하기', tool: 'timer', minutes: 5,
      levels: { easy: '기지개 한 동작을 교사와 함께 한다.', base: '기지개 → 제자리 걷기 두 동작을 차례대로 따라 한다.', challenge: '기지개 → 제자리 걷기 → 팔 돌리기 세 동작을 이어 한다.' },
      intro: {
        teacher: '"자리에서 일어나 볼까요? 두 팔 쭉 기지개! 제자리 콩콩 걷기! 팔 빙글빙글!" 시연 단추로 동작 카드가 차례대로 놓이는 모습을 보이고 반 전체가 따라 한 뒤 손을 들어 "해 보았어요"를 보인다. 둘레 친구와 팔이 닿지 않게 거리를 띄운다. "가만히 앉아 있는 게 편해요"라는 말이 나오면 "몸을 쭉 펴고 나니 몸이 어떤 느낌인가요?"라고 되묻는다.',
        student: '선생님을 따라 기지개를 쭉 켜 보아요.',
        demo: { tool: 'timer', options: { title: '몸풀기 동작', cards: ['팔 돌리기', '기지개', '제자리 걷기'] }, sequence: [{ order: ['기지개', '제자리 걷기', '팔 돌리기'] }] },
        art: { draw: 'paper children standing beside their desks stretching both arms high, marching in place and circling their arms, with soft cut-paper motion lines', banner: '쭉쭉 기지개!' },
      },
      notes: '몸이 불편한 학생은 앉아서 팔만 펴도 된다고 말한다.',
    }),
    SLEEP({
      id: 'health.e12.sleep-move.activity.bed-sort', type: 'activity', title: '잠자기 전 좋아요·안돼요',
      method: '잠자기 전 좋아요·안돼요', tool: 'sortboard', minutes: 14,
      levels: { easy: '카드 4장을 나누고, 틀린 바구니에 넣으면 바로 알려 준다.', base: '카드 6장을 좋아요·안돼요 바구니에 나눈 뒤 확인한다.', challenge: '카드 2장이 더 나와 8장을 나누고, 내가 바꿔 볼 것 하나를 짝에게 말한다.' },
      activity: {
        title: '잠자기 전 행동 두 바구니로 나누기', tool: 'sortboard',
        teacher: '"잠자기 전에 이렇게 하면 좋아요일까요, 안돼요일까요?" 카드를 넣을 때마다 함께 읽는다. "누워서 영상 보면 잠이 잘 와요"라는 학생에게 "화면 불빛이 눈앞에서 반짝이면 눈이 쉴 수 있을까요?"라고 묻는다. 끝으로 내가 바꿔 볼 것을 하나 말하게 하되, 우리 집 잠자리를 자세히 묻지 않는다.',
        task: '잠자기 전 행동 카드를 두 바구니에 나누어요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
        items: [
          SORTB(OKNO, '하늘이의 잠자기 전이에요.', ['불 끄고 눕기', '양치하고 눕기', '그림책 읽기'], ['누워서 게임', '이불 속 영상', '침대에서 뛰기'], ['잠옷 갈아입기', '밤늦게 과자'], null, 4, 0.1),
          SORTB(OKNO, '준이의 잠자기 전이에요.', ['씻고 잠옷 입기', '가방 챙기기', '조용한 노래'], ['늦게까지 놀기', '무서운 영상', '불 켜고 눕기'], ['물 한 모금', '이불 속 게임'], 1, 4, 0.15),
          SORTB(OKNO, '수아의 잠자기 전이에요.', ['인형 안고 눕기', '"잘 자요" 인사', '방 정리하기'], ['자기 전 단것', '화면 보며 눕기', '큰 소리로 놀기'], ['양치하기', '밤늦게 뛰기'], null, 4, 0.2, { conclude: '자기 전에는 씻고, 화면을 끄고, 불을 끄고 누워요.' }),
        ].map((it) => fixMore(it, ['밤늦게 과자', '이불 속 게임', '밤늦게 뛰기'])),
      },
      worksheet: { items: [{ type: 'table', prompt: '좋으면 ○, 안 되면 ×를 써요.', columns: ['행동', '○ / ×'], cells: [['불 끄고 눕기', ''], ['누워서 게임', ''], ['양치하고 눕기', '']], answer: '○, ×, ○' }] },
    }),
    SLEEP({
      id: 'health.e12.sleep-move.activity.move-body', type: 'activity', title: '놀이할 때 쓰는 몸 고르기',
      method: '놀이할 때 쓰는 몸 고르기', tool: 'body', minutes: 14,
      levels: { easy: '고를 곳이 네 곳뿐이고, 고르면 이름이 바로 보인다.', base: '일곱 곳 가운데 놀이(뛰기·던지기·매달리기)마다 많이 쓰는 두 곳을 고른다.', challenge: '열 곳 가운데 고르고, 고른 곳을 움직이는 몸짓을 짝에게 보인다.' },
      activity: {
        title: '놀이마다 많이 쓰는 몸 고르기', tool: 'body',
        teacher: '"깡충깡충 뛸 때는 어디를 굽혔다 펼까요?" 고르기 전에 그 자리에서 놀이 몸짓을 해 보고 어디가 움직였는지 느끼게 한다. 뛰기에 어깨를 고른 학생에게 "뛰어 볼까요? 가장 많이 굽혀지는 곳은 어디였나요?"라고 묻는다. 몸을 여러 곳 골고루 쓰는 놀이를 하면 몸이 튼튼해진다고 말해 준다.',
        task: '놀이할 때 많이 쓰는 몸 두 곳을 골라요.', levels: { easy: { names: true }, base: {}, challenge: {} },
        items: [
          { prompt: '뛸 때 굽히는 두 곳은?', toolOptions: { mode: 'parts', parts: ['목', '어깨', '팔꿈치', '손목', '허리', '무릎', '발목'] }, target: { parts: ['무릎', '발목'] }, difficulty: 0.1,
            levels: { easy: { toolOptions: { parts: ['어깨', '손목', '무릎', '발목'] } }, challenge: { toolOptions: { parts: ['눈', '귀', '목', '어깨', '팔꿈치', '손목', '허리', '허벅지', '무릎', '발목'] } } } },
          { prompt: '공 던질 때 쓰는 두 곳은?', toolOptions: { mode: 'parts', parts: ['목', '어깨', '팔꿈치', '손목', '허리', '무릎', '발목'] }, target: { parts: ['어깨', '팔꿈치'] }, difficulty: 0.15,
            levels: { easy: { toolOptions: { parts: ['어깨', '팔꿈치', '무릎', '발목'] } }, challenge: { toolOptions: { parts: ['눈', '귀', '목', '어깨', '팔꿈치', '손목', '허리', '허벅지', '무릎', '발목'] } } } },
          { prompt: '철봉에 매달릴 때 두 곳은?', toolOptions: { mode: 'parts', parts: ['목', '어깨', '팔꿈치', '손목', '허리', '무릎', '발목'] }, target: { parts: ['어깨', '손목'] }, difficulty: 0.2,
            levels: { easy: { toolOptions: { parts: ['어깨', '손목', '무릎', '발목'] } }, challenge: { toolOptions: { parts: ['눈', '귀', '목', '어깨', '팔꿈치', '손목', '허리', '허벅지', '무릎', '발목'] } } },
            conclude: '뛰고, 던지고, 매달리며 몸 여러 곳을 골고루 움직여요.' },
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '뛸 때 많이 굽히는 곳은?', options: ['무릎', '귀'], answer: '무릎' }] },
      notes: '놀이마다 많이 쓰는 곳을 단순화한 것이다(허벅지 등 다른 곳도 쓰인다고 말해 준다). 몸이 불편한 학생은 할 수 있는 몸짓으로 한다.',
    }),
    SLEEP({
      id: 'health.e12.sleep-move.activity.bed-clock', type: 'activity', title: '잘 시간 시계 맞추기',
      method: '잘 시간 시계 맞추기', tool: 'clock', minutes: 14,
      levels: { easy: '정각만 움직이는 시계로 하늘이네 약속 시각(정시) 하나를 맞춘다.', base: '정시 두 개(씻는 시각·잘 시각)를 맞추고 시계를 읽는다.', challenge: '30분 단위로 "8시 30분"·"9시 30분"까지 맞추고 읽는다.' },
      activity: {
        title: '하늘이네 잠자리 약속 시각 맞추기', tool: 'clock',
        teacher: '"하늘이네 가족은 잘 시각을 약속으로 정했어요. 시곗바늘을 그 시각에 맞춰 볼까요?" 맞춘 뒤 "그 전에 무엇을 할까요?"라고 물어 양치·잠옷·화면 끄기를 말하게 한다. 이 시각은 하늘이네 약속이고 집마다 다르다는 점을 먼저 말한다. 짧은바늘과 긴바늘을 바꿔 놓는 학생에게 "짧은바늘은 몇 시, 긴바늘은 몇 분을 가리켜요"라고 짚는다.',
        task: '하늘이네 약속 시각에 바늘을 맞춰요.', levels: { easy: { hourOnly: true, hourZone: true }, base: { minuteStep: 30 }, challenge: { minuteStep: 30, showMinuteMarks: false } },
        items: [
          { prompt: '9시에 자요. 바늘을 맞춰요.', toolOptions: {}, target: { h: 9, m: 0 }, difficulty: 0.1,
            levels: { challenge: { prompt: '9시 30분에 자요. 맞춰요.', target: { h: 9, m: 30 } } } },
          { prompt: '8시에 씻어요. 바늘을 맞춰요.', toolOptions: {}, target: { h: 8, m: 0 }, difficulty: 0.15,
            levels: { challenge: { prompt: '8시 30분에 씻어요. 맞춰요.', target: { h: 8, m: 30 } } } },
          { prompt: '불 끄는 시각을 골라요.', toolOptions: { readOnly: true, start: { h: 9, m: 0 }, ask: '하늘이가 불 끄는 시각은?', choices: ['8시', '9시', '10시'] }, target: { pick: 1 }, difficulty: 0.2,
            levels: { challenge: { toolOptions: { start: { h: 9, m: 30 }, choices: ['9시', '9시 30분', '6시 45분'] }, target: { pick: 1 } } },
            conclude: '약속한 시각 전에 씻고, 화면을 끄고, 불을 끄고 누워요.' },
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '자기 전에 할 일에 ○ 해요.', options: ['양치하기', '게임하기'], answer: '양치하기' }] },
      notes: '9시·8시 30분은 가상 인물 하늘이네 약속이다. 권장 취침 시각으로 말하지 않고, 학생에게 우리 집 잘 시각을 묻지 않는다.',
    }),
    SLEEP({
      id: 'health.e12.sleep-move.wrap.night-story', type: 'wrap', title: '잠자리 이야기 차례',
      method: '잠자리 이야기 차례', tool: 'story', minutes: 8,
      levels: { easy: '교사가 첫 장면을 놓아 주고 남은 두 장면을 함께 놓는다.', base: '세 장면(양치해요 → 불 꺼요 → 잠들어요)을 스스로 놓는다.', challenge: '놓은 뒤 이어질 아침 장면("개운하게 일어나요")을 말로 덧붙인다.' },
      wrap: {
        teacher: '"수아가 잠자리에 들어요. 무엇부터 할까요?" 출구 1번에서 장면 카드를 놓고 장면마다 몸짓(칫솔질 → 스위치 끄기 → 두 손 모아 볼에 대기)을 한다. 출구 2번에서 "누워서 화면 봐요"를 고른 학생에게 "화면을 끄면 눈과 몸이 쉴 준비를 해요"라고 말해 준다. 이어질 아침이 어떨지 함께 말하며 마친다.',
        exitTicket: [
          STORY_EXIT('수아 잠자리를 차례로 놓아요.', [C('brush', '양치해요'), C('off', '불 꺼요'), C('sleep', '잠들어요', { motif: 'cloud' })]),
          { type: 'choice', prompt: '잠자기 전에는 어떻게 해요?', options: ['누워서 화면 봐요', '화면 끄고 누워요'], answer: 1, difficulty: 0.1, explain: '화면을 끄고 불을 끄고 누워요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '잠자리 차례',
        items: [
          { type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '양치하고, 불 끄고, ___어요.', answer: '잠들' },
          { type: 'draw', prompt: '개운하게 일어난 아침을 그려요.' },
        ],
      },
    }),
    SLEEP({
      id: 'health.e12.sleep-move.wrap.my-check', type: 'wrap', title: '잘 자고 움직이기 약속 점검',
      method: '잘 자고 움직이기 약속 점검', tool: 'kitchen', minutes: 8,
      levels: { easy: '교사가 약속 두 개(밖에서 뛰어놀기·일찍 눕기)를 읽어 주고 함께 표시한다.', base: '약속 세 개를 스스로 읽고 지킬 것에 표시한다.', challenge: '표시한 뒤 가족과 함께 할 약속 하나를 활동지에 쓴다.' },
      wrap: {
        teacher: '"오늘 배운 약속 가운데 내가 지켜 볼 것은 무엇인가요?" 출구 1번 점검표를 함께 읽고 지킬 것에 표시하게 한다. 표시한 수로 비교하지 않는다. 출구 2번에서 "가만히 누워 있기"를 고른 학생에게 "밖에서 뛰어놀면 밤에 몸이 쉬고 싶어져요"라고 말해 준다.',
        exitTicket: [
          CHECK('잘 자고 움직이기', [C('play', '밖에서 뛰놀기'), C('early', '일찍 눕기'), C('off', '자기 전 화면 끄기')], '지켜 볼 약속에 표시해요.'),
          { type: 'choice', prompt: '쉬는 시간 몸을 위해서는?', options: ['가만히 누워 있기', '밖에서 뛰어놀기'], answer: 1, difficulty: 0.1, explain: '밖에서 뛰어놀며 몸을 움직여요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '잘 자고 잘 움직이기',
        items: [
          { type: 'check', prompt: '지킬 약속에 ✓ 해요.', options: ['밖에서 뛰어놀아요', '자기 전 화면을 꺼요', '불 끄고 누워요'] },
          { type: 'short', prompt: '가족과 함께 할 약속을 써요.' },
        ],
      },
      notes: '점검표는 다짐이다. 학생의 잠 시간·화면 시간을 묻거나 기록하지 않는다.',
    }),
  ];

  // =====================================================================================================
  // 아플 때 말하기·보건실 가기
  const PAIN = MOD('health.e12.tell-pain');
  const SCHOOL = [{ name: '우리 교실', icon: 'school', at: [0, 0] }, { name: '보건실', icon: 'hospital', at: [3, 2] }, { name: '도서관', icon: 'library', at: [3, 0] }, { name: '운동장', icon: 'park', at: [0, 2] }];
  const SCHOOL_MORE = [{ name: '복도', icon: 'dot', at: [1, 1] }, { name: '급식실', icon: 'dot', at: [2, 1] }];
  const PIN = (prompt, place, d, more) => ({ prompt, toolOptions: { grid: [4, 3], places: SCHOOL, title: '우리 학교' }, target: { place }, difficulty: d, levels: { challenge: { toolOptions: { places: [...SCHOOL, ...SCHOOL_MORE] } } }, ...more });
  // 갈림길(dilemma): 기본 2번 갈림, 쉬움 첫 갈림만, 도전 끝에서 까닭 카드 고르기
  const DILEMMA = (prompt, scene, path, reasons, good, d, more) => {
    const first = Object.assign({}, scene, { choices: scene.choices.map((c) => { const x = Object.assign({}, c); if (x.next) { delete x.next; x.ending = c.easyEnding || '잘 골랐어요.'; } delete x.easyEnding; return x; }) });
    const clean = Object.assign({}, scene, { choices: scene.choices.map((c) => { const x = Object.assign({}, c); delete x.easyEnding; return x; }) });
    return {
      prompt, toolOptions: { title: '어떻게 할까요?', scene: clean }, target: { path: [path] }, difficulty: d,
      levels: {
        easy: { prompt: `${cut(prompt)}(한 번).`, toolOptions: { scene: first }, target: { path: [[path[0]]] } },
        challenge: { prompt: `${cut(prompt)}, 까닭도요.`, toolOptions: { reasons, maxReasons: 1 }, target: { path: [path], reasons: [good] } },
      },
      ...more,
    };
  };
  const T_PAIN = [
    PAIN({
      id: 'health.e12.tell-pain.intro.ouch-face', type: 'intro', title: '아픈 친구 얼굴 고르기',
      method: '아픈 친구 얼굴 고르기', tool: 'emotion', minutes: 5,
      levels: { easy: '교사가 배가 아픈 수아 장면 하나만 읽어 주고 마음 카드를 함께 고른다.', base: '두 장면(배가 아픈 수아·목이 아픈 준)에 마음 카드를 짝 짓는 시연을 본다.', challenge: '두 친구가 선생님께 할 말("배가 아파요")을 골라 따라 말한다.' },
      intro: {
        teacher: '"수아가 수업 중에 배가 아파요. 준이는 목이 아파요. 두 친구 마음은 어떨까요?" 시연 단추로 장면과 마음 카드가 짝 지어지는 모습을 보인다(기다릴 반응: "걱정돼요", "속상해요"). "아파도 참으면 씩씩한 거예요"라는 말이 나오면 "참고 있으면 선생님이 수아가 아픈 걸 알 수 있을까요?"라고 되묻는다. 오늘은 아플 때 말하는 법과 보건실 가는 길을 배운다고 밝힌다.',
        student: '수아라면 선생님께 뭐라고 말할지 짝에게 말해 보아요.',
        demo: { tool: 'emotion', options: { mode: 'match', slots: [{ id: 'tummy', label: '배가 아픈 수아' }, { id: 'throat', label: '목이 아픈 준' }], cards: ['걱정', '속상함'] }, sequence: [{ match: { tummy: '걱정', throat: '속상함' } }] },
        art: { draw: 'a paper child at a desk holding a tummy with a worried face, raising a hand toward a kind paper teacher, a small red-cross door in the background', banner: '아프면 말해요' },
      },
      notes: '학생 자신이 아팠던 일을 묻지 않는다. 가상 인물의 장면으로만 이야기한다.',
    }),
    PAIN({
      id: 'health.e12.tell-pain.intro.where-hurts', type: 'intro', title: '아픈 곳 몸에서 가리키기',
      method: '아픈 곳 몸에서 가리키기', tool: 'body', minutes: 5,
      levels: { easy: '교사가 말하는 두 곳(배·목)을 종이 몸에서 함께 누른다.', base: '"배·목·무릎·귀가 아파요"를 듣고 네 곳을 차례로 누르는 시연을 본다.', challenge: '"여기가 아파요"라고 말하며 내 몸의 그곳을 짚는다.' },
      intro: {
        teacher: '"선생님이 말하는 곳을 종이 몸에서 찾아볼까요? 배가 아파요! 목이 아파요!" 시연 단추로 종이 몸에서 그곳이 차례로 골라지는 모습을 보인 뒤, 모두 "여기가 아파요" 하며 자기 몸의 그곳을 짚는다. "아픈 곳은 말 안 해도 알아요"라는 말이 나오면 "선생님이 내 배 속을 볼 수 있을까요?"라고 되묻는다. 머리가 아플 때는 종이 몸에 칸이 없으니 자기 머리를 짚는다.',
        student: '"여기가 아파요" 하며 내 배를 손으로 짚어 보아요.',
        demo: { tool: 'body', options: { mode: 'parts', parts: ['눈', '귀', '목', '배', '무릎', '발목'], names: true }, sequence: [{ parts: ['배'] }, { parts: ['배', '목'] }, { parts: ['배', '목', '무릎'] }, { parts: ['배', '목', '무릎', '귀'] }] },
        art: { draw: 'a paper body figure with soft glowing circles on the tummy, throat, knee and ear, and a paper child pointing to the tummy while talking to a teacher', banner: '여기가 아파요' },
      },
      notes: '종이 몸에는 머리 칸이 없다 — 머리는 학생이 자기 몸을 짚는다.',
    }),
    PAIN({
      id: 'health.e12.tell-pain.activity.say-play', type: 'activity', title: '"선생님, 아파요" 역할놀이',
      method: '"선생님, 아파요" 역할놀이', tool: 'timer', minutes: 14,
      levels: { easy: '말하는 차례 카드 2장을 놓고, 교사와 함께 한 번 해 보도록 타이머를 맞춘다.', base: '짝과 아픈 친구·선생님 역할을 번갈아 두 번 하도록 맞춘다.', challenge: '"아침부터요"처럼 언제부터 아팠는지 말하는 카드까지 3장을 놓는다.' },
      activity: {
        title: '짝과 아픈 친구·선생님 역할 바꿔 하기', tool: 'timer',
        teacher: '"아플 때는 손을 들고 \'선생님!\' 부른 뒤 \'배가 아파요\'라고 말해요." 차례 카드를 놓은 뒤 타이머 구간마다 짝과 역할을 바꾸어 실제로 말해 본다(선생님 역은 "어디가 아프니?"라고 묻는다). 작게 말하는 학생에게 "선생님이 들을 수 있게 또박또박 말해 볼까요?"라고 한다. 역할놀이 속 아픈 곳은 꾸며 낸 것이라 실제 아픈 곳을 말하지 않아도 된다고 알린다.',
        task: '말하는 차례를 놓고 역할놀이 횟수를 맞춰요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          { prompt: '아플 때 말하는 차례로 놓아요.', toolOptions: { title: '아플 때 말하기', cards: ['"배가 아파요"', '"선생님!"'] }, target: { order: ['"선생님!"', '"배가 아파요"'] }, difficulty: 0.1,
            levels: { challenge: { prompt: '언제부터인지도 넣어 놓아요.', toolOptions: { cards: ['"아침부터요"', '"배가 아파요"', '"선생님!"'] }, target: { order: ['"선생님!"', '"배가 아파요"', '"아침부터요"'] } } } },
          { prompt: '역할 바꿔 두 번 하게 맞춰요.', toolOptions: { title: '역할 바꾸기', labels: ['아픈 역', '선생님 역'], plan: { work: 20, rest: 20, rounds: 1 } }, target: { plan: { rounds: 2 } }, difficulty: 0.15,
            hints: ['한 번 하고 역할을 바꿔요.', '되풀이 횟수가 하는 횟수예요.', '되풀이 횟수를 2에 맞춰요.'],
            levels: { easy: { prompt: '선생님과 한 번 하게 맞춰요.', target: { plan: { rounds: 1 } }, state: { plan: { work: 20, rest: 20, rounds: 3 } } }, challenge: { prompt: '역할 바꿔 세 번 하게 맞춰요.', target: { plan: { rounds: 3 } } } } },
          { prompt: '보건실에서 말하는 차례예요.', toolOptions: { title: '보건실에서', cards: ['아픈 곳 말하기', '문 두드리기', '반 말하기'] }, target: { order: ['문 두드리기', '반 말하기', '아픈 곳 말하기'] }, difficulty: 0.2,
            levels: { easy: { prompt: '보건실 차례 두 장을 놓아요.', toolOptions: { cards: ['아픈 곳 말하기', '문 두드리기'] }, target: { order: ['문 두드리기', '아픈 곳 말하기'] } } },
            conclude: '"선생님!" 부르고, 아픈 곳과 언제부터인지 말해요.' },
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '"선생님, ___가 아파요."', answer: '배' }] },
      notes: '역할놀이 속 아픈 곳은 꾸며 낸 것이다. 학생의 실제 아픈 곳·병을 묻지 않는다.',
    }),
    PAIN({
      id: 'health.e12.tell-pain.activity.nurse-map', type: 'activity', title: '보건실 가는 길 찾기',
      method: '보건실 가는 길 찾기', tool: 'map', minutes: 14,
      levels: { easy: '핀을 놓으면 그 칸의 이름이 바로 보여 보건실을 찾는다.', base: '우리 교실 → 보건실로 가는 차례대로 장소에 핀을 꽂는다.', challenge: '복도·급식실까지 여섯 곳이 있는 지도에서 꽂고, 지나는 곳 하나를 말한다.' },
      activity: {
        title: '학교 칸 지도에서 보건실 찾기', tool: 'map',
        teacher: '"배가 아파서 보건실에 가요. 우리 학교 보건실은 어디일까요?" 핀을 꽂은 뒤 실제 우리 학교 보건실이 몇 층 어디에 있는지 함께 말한다(지도는 예시 학교). "보건실은 다쳤을 때만 가요"라는 학생에게 "배가 아프거나 열이 날 때는 누가 도와줄까요?"라고 묻는다. 보건실에 갈 때는 담임 선생님께 먼저 말한다는 점을 짚는다.',
        task: '학교 지도에서 알맞은 곳에 핀을 꽂아요.', levels: { easy: { readout: true }, base: {}, challenge: {} },
        items: [
          PIN('보건실에 핀을 꽂아요.', '보건실', 0.1),
          PIN('출발하는 우리 교실을 꽂아요.', '우리 교실', 0.15),
          PIN('아픈 곳 말하러 갈 곳을 꽂아요.', '보건실', 0.2, { levels: { easy: { prompt: '보건 선생님이 계신 곳은?' }, challenge: { toolOptions: { places: [...SCHOOL, ...SCHOOL_MORE] } } }, conclude: '아프면 담임 선생님께 말하고 보건실에 가요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '배가 아프면 어디에 가요?', options: ['보건실', '운동장'], answer: '보건실' }] },
      notes: '지도는 예시 학교다. 우리 학교 보건실 자리를 실제로 짚어 주고, 가능하면 다음 쉬는 시간에 함께 걸어가 본다.',
    }),
    PAIN({
      id: 'health.e12.tell-pain.activity.tell-choose', type: 'activity', title: '참을까 말할까 갈림길',
      method: '참을까 말할까 갈림길', tool: 'dilemma', minutes: 14,
      levels: { easy: '첫 갈림에서 보기 2개 가운데 한 번만 고른다.', base: '고른 뒤 이어지는 장면에서 한 번 더 고른다(갈림 2번).', challenge: '갈림 2번을 지나 끝에서 잘한 까닭 카드 3장 가운데 하나를 고른다.' },
      activity: {
        title: '아플 때 참을까, 말할까?', tool: 'dilemma',
        teacher: '"수아가 수업 중에 배가 아파요. 수아는 어떻게 할까요?" 보기를 읽어 주고(소리로 읽어 주기) 반 전체가 손을 들어 어느 쪽인지 먼저 보이게 한다. "참으면 수업을 계속 들을 수 있어요"를 고른 학생에게 "참는 동안 배가 더 아파지면 어떻게 될까요?"라고 묻는다. 고른 뒤 \'처음부터 다른 길\'로 다른 결과도 함께 보고, 말하는 것이 씩씩한 것이라고 짚는다.',
        task: '장면마다 할 일을 고르고 결과를 봐요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          DILEMMA('수아가 배가 아파요. 골라요.', { text: '수업 중에 수아 배가 아파요.', motif: 'house', choices: [
            { id: 'hold', text: '꾹 참아요', result: '배가 점점 더 아파졌어요.', why: '참으면 아무도 몰라요. 선생님께 말해요.' },
            { id: 'tell', text: '손 들고 말해요', result: '선생님이 "어디가 아프니?" 물으셨어요.', easyEnding: '선생님이 보건실에 데려다주셨어요.', next: { text: '선생님이 "어디가 아프니?" 물으셨어요.', choices: [
              { id: 'say', text: '"배가 아파요"', result: '선생님과 보건실에 갔어요.', ending: '말해서 도움을 받았어요.' },
              { id: 'fine', text: '"괜찮아요"', result: '선생님이 그냥 자리로 보내셨어요.', why: '아픈 곳을 그대로 말해요.' }] } }] },
          ['tell', 'say'], [{ id: 'help', text: '말해야 도와줘요' }, { id: 'brave', text: '참는 게 멋져서요', why: '말하는 것이 씩씩한 거예요.' }, { id: 'class', text: '수업이 끝나서요', why: '수업 중에도 아프면 말해요.' }], 'help', 0.15),
          DILEMMA('준이 목이 아파요. 골라요.', { text: '쉬는 시간, 준이 목이 따끔해요.', motif: 'house', choices: [
            { id: 'play', text: '그냥 놀아요', result: '목이 더 따끔거렸어요.', why: '아프면 놀이를 멈추고 말해요.' },
            { id: 'tell', text: '선생님께 가요', result: '선생님이 보건실에 가 보자고 하셨어요.', easyEnding: '보건 선생님이 살펴 주셨어요.', next: { text: '보건실 문 앞이에요.', choices: [
              { id: 'knock', text: '똑똑, 들어가요', result: '보건 선생님이 "어디가 아프니?" 물으셨어요.', ending: '아픈 곳을 말하고 쉬었어요.' },
              { id: 'back', text: '그냥 돌아가요', result: '목은 계속 따끔거렸어요.', why: '보건실에 들어가 말해요.' }] } }] },
          ['tell', 'knock'], [{ id: 'nurse', text: '보건 선생님이 도와줘요' }, { id: 'hurt', text: '다쳐야만 가서요', why: '아플 때도 보건실에 가요.' }, { id: 'shy', text: '부끄러워서요', why: '부끄러워도 말하면 도와주세요.' }], 'nurse', 0.2),
          DILEMMA('도윤이 귀가 아파요. 골라요.', { text: '집에 와서 도윤이 귀가 아파요.', motif: 'house', choices: [
            { id: 'hide', text: '혼자 참아요', result: '밤에 귀가 더 아팠어요.', why: '집에서는 가족에게 말해요.' },
            { id: 'family', text: '가족에게 말해요', result: '엄마가 "어느 쪽이 아프니?" 물으셨어요.', easyEnding: '엄마가 살펴보고 돌봐 주셨어요.', next: { text: '엄마가 "어느 쪽이 아프니?" 물으셨어요.', choices: [
              { id: 'point', text: '아픈 귀를 가리켜요', result: '엄마가 돌봐 주셨어요.', ending: '가족에게 말해서 도움을 받았어요.' },
              { id: 'nothing', text: '"몰라요"', result: '엄마가 어디인지 몰라 걱정하셨어요.', why: '아픈 곳을 가리켜 알려요.' }] } }] },
          ['family', 'point'], [{ id: 'tellfam', text: '말하면 돌봐 줘요' }, { id: 'alone', text: '혼자 낫고 싶어서요', why: '아프면 어른께 도움을 받아요.' }, { id: 'scold', text: '혼날까 봐서요', why: '아픈 것은 혼날 일이 아니에요.' }], 'tellfam', 0.25, { conclude: '아프면 참지 말고 선생님·보건 선생님·가족에게 말해요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '수업 중에 배가 아프면?', options: ['꾹 참아요', '선생님께 말해요'], answer: '선생님께 말해요' }] },
      notes: '정답 길이 있는 갈림길이다. 다른 길도 끝까지 가 보게 해서 결과를 견주게 한다. 가상 인물의 장면이며 약 이야기는 하지 않는다.',
    }),
    PAIN({
      id: 'health.e12.tell-pain.wrap.nurse-story', type: 'wrap', title: '보건실 가는 이야기',
      method: '보건실 가는 이야기', tool: 'story', minutes: 8,
      levels: { easy: '교사가 첫 장면을 놓아 주고 남은 두 장면을 함께 놓는다.', base: '세 장면(배가 아파요 → 선생님께 말해요 → 보건실에 가요)을 스스로 놓는다.', challenge: '놓은 뒤 출구 2번에서 보건 선생님께 할 말을 고른다.' },
      wrap: {
        teacher: '"준이가 아파서 보건실에 가요. 어떤 차례일까요?" 출구 1번에서 장면 카드를 놓고, 장면마다 반 전체가 한마디씩 말한다("아파요", "선생님!", "똑똑"). 출구 2번에서 "아무 말 안 해요"를 고른 학생에게 "보건 선생님은 말해 줘야 어디가 아픈지 알아요"라고 말해 준다.',
        exitTicket: [
          STORY_EXIT('준이 이야기를 차례로 놓아요.', [C('ouch', '배가 아파요'), C('tell', '선생님께 말해요'), C('go', '보건실에 가요')]),
          { type: 'choice', prompt: '보건 선생님께 할 말은?', options: ['아무 말 안 해요', '"배가 아파요"'], answer: 1, difficulty: 0.1, explain: '아픈 곳을 그대로 말해요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '보건실 가는 이야기',
        items: [
          { type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '아프면 ___께 말해요.', answer: '선생님' },
          { type: 'draw', prompt: '보건실에 가는 모습을 그려요.' },
        ],
      },
    }),
    PAIN({
      id: 'health.e12.tell-pain.wrap.who-web', type: 'wrap', title: '아플 때 말할 사람 그물',
      method: '아플 때 말할 사람 그물', tool: 'mindmap', minutes: 8,
      levels: { easy: '교사와 함께 두 가지(학교에서·집에서)에 사람 카드 두 장을 잇는다.', base: '사람 카드 네 장을 학교에서·집에서 가지에 나눠 잇는다.', challenge: '이은 뒤 집에서 말할 어른을 활동지에 쓴다(이름 대신 "엄마", "할머니"처럼).' },
      wrap: {
        teacher: '"아플 때 말할 사람은 누구일까요? 학교에서는? 집에서는?" 출구 1번에서 가운데 "아플 때"에 사람 카드를 가지별로 잇는다. 가족 모습은 집마다 다르니 "나를 돌봐 주는 어른"도 같은 가지라고 말해 준다. 출구 2번에서 "아무에게도 안 해요"를 고른 학생에게 "말하면 도와줄 사람이 이렇게 많아요"라고 그물을 가리킨다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '아플 때', slots: ['학교에서', '집에서'], cards: [C('hr', '담임 선생님'), C('fam', '가족'), C('nurse', '보건 선생님'), C('care', '돌봐 주는 어른')] }, prompt: '말할 사람을 가지에 이어요.', target: { sort: { 학교에서: ['hr', 'nurse'], 집에서: ['fam', 'care'] } }, difficulty: 0.1 },
          { type: 'choice', prompt: '아플 때 누구에게 말해요?', options: ['아무에게도 안 해요', '선생님·가족'], answer: 1, difficulty: 0.1, explain: '선생님, 보건 선생님, 가족에게 말해요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '아플 때 말할 사람',
        items: [
          { type: 'check', prompt: '아플 때 말할 사람에 ✓ 해요.', options: ['담임 선생님', '보건 선생님', '가족'] },
          { type: 'short', prompt: '집에서 말할 어른을 써요(예: 엄마).' },
        ],
      },
      notes: '가족 형태를 묻거나 짐작하지 않는다. 활동지에 실명 대신 부르는 말을 쓰게 한다.',
    }),
  ];

  // =====================================================================================================
  // 눈 아끼기
  const EYES = MOD('health.e12.eyes');
  // 눈 쉬기 무늬 조각: 책 보기 = 복숭아 네모, 멀리 보기 = 민트 세모(산), 눈 감기 = 라벤더 동그라미
  const BK = 'square:peach'; const FAR = 'triangle:mint'; const SHUT = 'circle:lavender';
  const T_EYES = [
    EYES({
      id: 'health.e12.eyes.intro.close-screen', type: 'intro', title: '화면에 붙은 아이 장면',
      method: '화면에 붙은 아이 장면', tool: 'emotion', minutes: 5,
      levels: { easy: '눈의 마음 보기 2개(힘들어요·신나요) 가운데 함께 고른다.', base: '보기 3개 가운데 고르는 시연을 본다.', challenge: '고른 뒤 바른 자세("등 펴고 떨어져 앉기")를 몸으로 보이며 말한다.' },
      intro: {
        teacher: '"민이가 태블릿에 얼굴을 바짝 대고 오래 보고 있어요. 민이 눈은 어떤 마음일까요?" 시연 단추로 보기가 골라지고 결과가 나오는 모습을 보인다(기다릴 반응: "힘들어요", "아파요"). "가까이 볼수록 잘 보여요"라는 말이 나오면 "가까이서 오래 보면 눈은 쉴 수 있을까요?"라고 되묻는다. 오늘은 눈을 아끼는 자세와 쉬는 법을 배운다고 밝힌다.',
        student: '등을 펴고 화면에서 조금 떨어져 앉는 자세를 해 보아요.',
        demo: { tool: 'emotion', options: { mode: 'branch', situation: '민이가 화면에 얼굴을 바짝 댔어요.', ask: '민이 눈의 마음은?', choices: [{ id: 'tired', text: '힘들어요', result: '눈이 쉬고 싶어해요.', mood: '걱정' }, { id: 'fun', text: '신나요', result: '눈은 지쳐 가요.', mood: '걱정' }, { id: 'ok', text: '편해요', result: '바짝 대면 눈이 힘들어요.', mood: '걱정' }] }, sequence: [{ choice: 'tired' }] },
        art: { draw: 'a paper child hunched with the face almost touching a glowing tablet, and beside it the same child sitting upright at a comfortable distance in a bright room', banner: '눈이 쉬고 싶어요' },
      },
      notes: '화면과 눈 사이 거리(cm)는 근거 파일에 없어 숫자로 말하지 않는다. 안경을 쓴 친구를 놀리지 않게 한다.',
    }),
    EYES({
      id: 'health.e12.eyes.intro.eye-find', type: 'intro', title: '얼굴에서 눈 찾기',
      method: '얼굴에서 눈 찾기', tool: 'body', minutes: 5,
      levels: { easy: '종이 몸에서 눈을 함께 찾는다.', base: '눈을 찾은 뒤 내 눈썹을 손가락으로 짚어 본다.', challenge: '눈꺼풀을 살짝 감았다 뜨며 눈꺼풀이 하는 일(눈 덮기)을 말한다.' },
      intro: {
        teacher: '"종이 몸에서 눈은 어디일까요?" 시연 단추로 눈이 골라지는 모습을 보인 뒤, 모두 손가락으로 내 눈썹을 짚고 눈을 살짝 감았다 떠 보게 한다(눈은 누르거나 비비지 않는다). "눈이 가려우면 비벼요"라는 말이 나오면 "손에 묻은 병균이 눈에 들어가면 어떻게 될까요?"라고 되묻는다. 눈꺼풀은 눈을 덮어 쉬게 한다는 점을 짚는다.',
        student: '내 눈썹을 손가락으로 짚고, 눈을 살짝 감았다 떠 보아요.',
        demo: { tool: 'body', options: { mode: 'parts', parts: ['눈', '귀', '코', '혀'], names: true }, sequence: [{ parts: ['눈'] }] },
        art: { draw: 'a calm paper face with gently closed eyelids, cut-paper eyebrows, and a little paper hand stopping before rubbing the eye', banner: '눈은 소중해요' },
      },
      notes: '종이 몸에는 눈썹·눈꺼풀 칸이 없다 — 학생이 자기 얼굴을 짚는다(눈은 누르지 않는다).',
    }),
    EYES({
      id: 'health.e12.eyes.activity.eye-sort', type: 'activity', title: '눈에 좋아요·안돼요',
      method: '눈에 좋아요·안돼요', tool: 'sortboard', minutes: 14,
      levels: { easy: '카드 4장을 나누고, 틀린 바구니에 넣으면 바로 알려 준다.', base: '카드 6장을 좋아요·안돼요 바구니에 나눈 뒤 확인한다.', challenge: '카드 2장이 더 나와 8장을 나누고, 안돼요 하나를 좋아요로 바꿔 말한다.' },
      activity: {
        title: '눈을 아끼는 행동 두 바구니로 나누기', tool: 'sortboard',
        teacher: '"이렇게 하면 눈에 좋아요일까요, 안돼요일까요?" 카드를 넣을 때마다 그 행동을 흉내 낸다(멀리 보기 → 창밖 보기, 눈 비비기 → 손 멈추기). "어두운 데서 읽어도 잘 보여요"라는 학생에게 "어두우면 눈이 더 애써야 하지 않을까요?"라고 묻는다. 안돼요 카드 하나를 골라 좋아요로 바꿔 말하게 한다.',
        task: '눈 행동 카드를 두 바구니에 나누어요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
        items: [
          SORTB(OKNO, '책 읽을 때 눈에는?', ['밝은 곳에서', '등 펴고 읽기', '쉬며 멀리 보기'], ['어두운 데서', '책에 코 대기', '누워서 읽기'], ['불 켜고 읽기', '흔들리는 차에서'], null, 4, 0.1),
          SORTB(OKNO, '화면 볼 때 눈에는?', ['떨어져 앉기', '쉬며 눈 감기', '밝은 방에서'], ['화면에 바짝', '불 끄고 보기', '쉬지 않고 보기'], ['창밖 보기', '이불 속 화면'], null, 4, 0.15),
          SORTB(OKNO, '눈이 가려울 때는?', ['손 씻기', '어른께 말하기', '눈 감고 쉬기'], ['손으로 비비기', '친구 안약 쓰기', '눈 꾹 누르기'], ['깨끗한 손', '모래 손으로'], null, 4, 0.2, { conclude: '밝은 곳에서 바르게 보고, 멀리 보며 쉬고, 눈은 비비지 않아요.' }),
        ].map((it) => fixMore(it, ['흔들리는 차에서', '이불 속 화면', '모래 손으로'])),
      },
      worksheet: { items: [{ type: 'table', prompt: '좋으면 ○, 안 되면 ×를 써요.', columns: ['행동', '○ / ×'], cells: [['멀리 보기', ''], ['눈 비비기', ''], ['밝은 곳에서 읽기', '']], answer: '○, ×, ○' }] },
      notes: '"친구 안약 쓰기"는 약을 함께 쓰지 않는다는 사실 수준에서만 다룬다. 약 이름은 말하지 않는다.',
    }),
    EYES({
      id: 'health.e12.eyes.activity.far-near', type: 'activity', title: '멀리 보기·눈 감기 쉬는 몸짓',
      method: '멀리 보기·눈 감기 쉬는 몸짓', tool: 'timer', minutes: 14,
      levels: { easy: '멀리 보기·눈 감기를 한 번 하도록 구간 타이머를 맞춘다.', base: '두 번 번갈아 하도록 맞추고 신호에 맞춰 따라 한다.', challenge: '두 번에 맞춘 뒤 짝에게 "멀리!" "감아!" 신호를 주며 함께 한다.' },
      activity: {
        title: '창밖 멀리 보기와 눈 감기 번갈아 하기', tool: 'timer',
        teacher: '"책을 보다가 눈이 피곤하면 어떻게 쉴까요? 창밖 멀리 나무를 보고, 눈을 살짝 감아요." 타이머 횟수를 맞춘 뒤 시작 단추를 누르면 반 전체가 신호에 맞춰 창밖 보기와 눈 감기를 번갈아 한다. 구간 길이는 연습용이며 정해진 쉬는 시간 규칙이 아니라고 말한다. 눈을 꾹 감는 학생에게 "힘을 빼고 살짝 감아 볼까요?"라고 한다.',
        task: '쉬는 몸짓 횟수를 맞추고 따라 해요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          { prompt: '두 번 번갈아 하게 맞춰요.', toolOptions: { title: '눈 쉬기', labels: ['멀리 보기', '눈 감기'], plan: { work: 10, rest: 10, rounds: 1 } }, target: { plan: { rounds: 2 } }, difficulty: 0.1,
            hints: ['멀리 보고 감기가 한 번이에요.', '되풀이 횟수를 맞춰요.', '되풀이 횟수를 2에 맞춰요.'],
            levels: { easy: { prompt: '한 번 하게 맞춰요.', target: { plan: { rounds: 1 } }, state: { plan: { work: 10, rest: 10, rounds: 3 } } }, challenge: { prompt: '두 번 하고 짝에게 신호 줘요.', target: { plan: { rounds: 2 } } } } },
          { prompt: '눈 쉬는 차례로 놓아요.', toolOptions: { title: '눈 쉬는 차례', cards: ['눈 감기', '책 내려놓기', '창밖 보기'] }, target: { order: ['책 내려놓기', '창밖 보기', '눈 감기'] }, difficulty: 0.15,
            levels: { easy: { prompt: '눈 쉬는 차례 두 장 놓아요.', toolOptions: { cards: ['창밖 보기', '책 내려놓기'] }, target: { order: ['책 내려놓기', '창밖 보기'] } } } },
          { prompt: '눈 쉬기 했나 점검해요.', toolOptions: { title: '눈 쉬기 점검', safety: ['멀리 보았어요', '살짝 감았어요', '비비지 않았어요'] }, target: { safety: true }, difficulty: 0.2,
            levels: { easy: { toolOptions: { safety: ['멀리 보았어요', '살짝 감았어요'] } } },
            conclude: '오래 보았으면 멀리 보고, 살짝 눈을 감아 쉬어요.' },
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '눈이 피곤하면 어떻게 쉬어요?', options: ['멀리 보아요', '더 가까이 보아요'], answer: '멀리 보아요' }] },
      notes: '쉬는 간격·시간(분·초)은 근거 파일에 없어 권장하지 않는다. 구간 길이는 몸짓 연습용이다.',
    }),
    EYES({
      id: 'health.e12.eyes.activity.rest-pattern', type: 'activity', title: '책 보기·멀리 보기 무늬 잇기',
      method: '책 보기·멀리 보기 무늬 잇기', tool: 'pattern', minutes: 14,
      levels: { easy: '책 보기·멀리 보기 두 칸이 번갈아 나오는 무늬의 다음 칸을 채운다.', base: '책 보기·멀리 보기·눈 감기 세 칸 무늬의 다음 칸을 채운다.', challenge: '세 칸 무늬의 가운데 빈칸 두 곳을 채운다.' },
      activity: {
        title: '눈 쉬는 무늬 다음 칸 고르기', tool: 'pattern',
        teacher: '"복숭아색 네모는 책 보기, 초록 세모는 창밖 산 멀리 보기, 보라 동그라미는 눈 감기예요." 줄을 손가락으로 짚으며 "책, 멀리, 책, 멀리…" 소리 내어 읽게 한다. 책 보기만 이어 넣는 학생에게 "책만 계속 보면 눈은 언제 쉴까요?"라고 묻는다. 책을 보다가 사이사이 멀리 보는 것이 눈 쉬는 무늬라고 짚는다.',
        task: '눈 쉬는 무늬의 빈칸을 채워요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          { prompt: '책·멀리 무늬 다음은?', toolOptions: { mode: 'fill', seq: [BK, FAR, SHUT, BK, FAR, SHUT, null, null, null], palette: [BK, FAR, SHUT] }, target: { fill: [BK, FAR, SHUT] }, difficulty: 0.1,
            levels: { easy: { prompt: '책·멀리 두 칸 무늬 다음은?', toolOptions: { seq: [BK, FAR, BK, FAR, BK, FAR, null, null], palette: [BK, FAR] }, target: { fill: [BK, FAR] } },
              challenge: { prompt: '가운데 빈칸 두 곳을 채워요.', toolOptions: { seq: [BK, FAR, SHUT, null, FAR, SHUT, BK, null, SHUT] }, target: { fill: [BK, FAR] } } } },
          { prompt: '그림 그리기 쉬는 무늬예요.', toolOptions: { mode: 'fill', seq: [BK, BK, FAR, BK, BK, FAR, null, null, null], palette: [BK, FAR] }, target: { fill: [BK, BK, FAR] }, difficulty: 0.15,
            levels: { easy: { prompt: '그리다 멀리 보는 무늬예요.', toolOptions: { seq: [BK, FAR, BK, FAR, BK, FAR, null, null] }, target: { fill: [BK, FAR] } },
              challenge: { prompt: '가운데 빈칸 두 곳을 채워요.', toolOptions: { seq: [BK, BK, FAR, BK, null, FAR, BK, BK, null] }, target: { fill: [BK, FAR] } } } },
          { prompt: '화면 보기 쉬는 무늬예요.', toolOptions: { mode: 'fill', seq: [BK, SHUT, FAR, BK, SHUT, FAR, null, null, null], palette: [BK, FAR, SHUT] }, target: { fill: [BK, SHUT, FAR] }, difficulty: 0.2,
            levels: { easy: { prompt: '보다가 눈 감는 무늬예요.', toolOptions: { seq: [BK, SHUT, BK, SHUT, BK, SHUT, null, null], palette: [BK, SHUT] }, target: { fill: [BK, SHUT] } },
              challenge: { prompt: '가운데 빈칸 두 곳을 채워요.', toolOptions: { seq: [BK, SHUT, null, BK, SHUT, FAR, null, SHUT, FAR] }, target: { fill: [FAR, BK] } } },
            conclude: '보다가 사이사이 멀리 보고 눈을 감아 쉬어요.' },
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '책 보기, 멀리 보기, 책 보기, ___', answer: '멀리 보기' }] },
      notes: '무늬의 칸 수는 쉬는 간격 규칙이 아니라 규칙 찾기 놀이다.',
    }),
    EYES({
      id: 'health.e12.eyes.wrap.eye-story', type: 'wrap', title: '눈을 아끼는 이야기',
      method: '눈을 아끼는 이야기', tool: 'story', minutes: 8,
      levels: { easy: '교사가 첫 장면을 놓아 주고 남은 두 장면을 함께 놓는다.', base: '세 장면(책을 봐요 → 멀리 봐요 → 눈이 편해요)을 스스로 놓는다.', challenge: '놓은 뒤 장면마다 한마디("이제 멀리 보자")를 덧붙여 말한다.' },
      wrap: {
        teacher: '"수아가 그림책을 한참 봤어요. 눈이 편해지려면?" 출구 1번에서 장면 카드를 놓고 장면마다 몸짓(책 보기 → 창밖 보기 → 웃기)을 한다. 출구 2번에서 "손으로 비벼요"를 고른 학생에게 "손에 묻은 것이 눈에 들어갈 수 있어요. 살짝 감고 쉬어요"라고 말해 준다.',
        exitTicket: [
          STORY_EXIT('수아 이야기를 차례로 놓아요.', [C('read', '책을 봐요'), C('far', '멀리 봐요'), C('ok', '눈이 편해요', { motif: 'sun' })]),
          { type: 'choice', prompt: '눈이 가려우면?', options: ['손으로 비벼요', '어른께 말해요'], answer: 1, difficulty: 0.1, explain: '비비지 말고 어른께 말해요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '눈을 아끼는 이야기',
        items: [
          { type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '눈이 피곤하면 ___ 봐요.', answer: '멀리' },
          { type: 'draw', prompt: '창밖 멀리 보는 내 모습을 그려요.' },
        ],
      },
    }),
    EYES({
      id: 'health.e12.eyes.wrap.glasses', type: 'wrap', title: '눈 지킴이 안경 꾸미기',
      method: '눈 지킴이 안경 꾸미기', tool: 'collage', minutes: 8,
      levels: { easy: '종이 안경 알 두 개(동그라미)를 붙인다.', base: '안경 알 두 개와 "멀리 봐요" 약속 그림(초록 세모 산) 하나를 붙인다(출구 기준).', challenge: '붙인 뒤 집에서 지킬 약속 그림을 활동지에 하나 더 그린다.' },
      wrap: {
        teacher: '"눈 지킴이 안경을 만들어 볼까요? 동그란 안경 알 두 개에 \'멀리 봐요\' 산 그림을 붙여요." 출구 1번에서 파란 동그라미 둘과 초록 세모를 붙이며 약속을 소리 내어 말한다. 이 안경은 약속 안경이며, 진짜 안경을 쓴 친구를 놀리지 않는다고 말해 준다. 출구 2번을 함께 읽고 고른다.',
        exitTicket: [
          { type: 'tool', tool: 'collage', options: { shapes: ['circle', 'triangle', 'star'], colors: ['파랑', '초록', '노랑', '분홍'] }, prompt: '안경 알 둘과 산 하나를 붙여요.', target: { has: [{ shape: 'circle', color: '파랑', min: 2 }, { shape: 'triangle', color: '초록', min: 1 }] }, difficulty: 0.1 },
          { type: 'choice', prompt: '책은 어디에서 읽어요?', options: ['어두운 곳', '밝은 곳'], answer: 1, difficulty: 0.1, explain: '밝은 곳에서 바른 자세로 읽어요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '눈 지킴이 약속',
        items: [
          { type: 'check', prompt: '지킬 약속에 ✓ 해요.', options: ['밝은 곳에서 읽어요', '멀리 보며 쉬어요', '눈을 비비지 않아요'] },
          { type: 'draw', prompt: '눈 지킴이 안경을 그려요.' },
        ],
      },
      notes: '안경을 쓴 학생이 소외되지 않게 한다. 시력·안경 여부를 묻지 않는다.',
    }),
  ];

  // 도전 카드(more)가 어느 바구니로 가는지: moreTo 를 안 준 문항은 '첫 바구니로 갈 카드'와 '둘째 바구니로 갈 카드'를 이름으로 가린다
  function fixMore(it, toSecond) {
    const slots = it.toolOptions.slots; const more = it.levels.challenge.toolOptions.more;
    const sec = new Set(toSecond || []);
    const second = more.filter((x) => sec.has(x) || isSecondDefault(slots, x));
    const first = more.filter((x) => !second.includes(x));
    const base = it.target.sort;
    it.levels.challenge.target = { sort: { [slots[0]]: [...base[slots[0]], ...first], [slots[1]]: [...base[slots[1]], ...second] } };
    return it;
  }
  // 손 씻기·이 닦기 when-sort: 도전 카드 둘 가운데 둘째는 '괜찮아요·아니에요' 쪽(그림 그릴 때·노래 들을 때 등)
  function isSecondDefault(slots, x) { return /그릴 때|들을 때|찍을 때|할 때|체육 시간/.test(x) && (slots[1] === '괜찮아요' || slots[1] === '아니에요'); }
  // kitchen order: ORDER3 의 story 꼴 카드 판을 kitchen order 판으로(쉬움 첫 카드 놓임, 도전 끼어든 카드)
  function fixOrder(it) {
    const cards = it.toolOptions.cards; const slots = it.toolOptions.slots;
    it.toolOptions = { mode: 'order', slots, cards };
    if (it.levels.challenge) it.levels.challenge.toolOptions = { cards: it.levels.challenge.toolOptions.cards };
    return it;
  }

  PaperLessons.registerModules([...T_WASH, ...T_COUGH, ...T_TEETH, ...T_SLEEP, ...T_PAIN, ...T_EYES]);
})();
