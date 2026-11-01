/* 법정교육 영양·식생활 — 초1-2 모듈 내용(edu-module.v1). 형식·작성 규칙: MODULES_BUILD.md, 계획: framework/mandatory.json 의 food 초1-2.
 * 근거: 학교급식법 제13조·식생활교육지원법 제26조 — 연 2회 이상(research-mandatory §1), §2 보건교육 초: 건강한 식생활.
 * 주제 3개(1학년 five-groups · 2학년 snack-pick · thanks-table) × 계획 모듈 24개.
 * 초1-2 기준: 소리로 읽어 주는 짧은 문항, 카드 6자 안팎, 따라 하기·노래·좋아요 고르기. 인물은 동물·가명 한두 글자(가상)이다.
 * 지킨 것:
 *  - 음식을 좋다/나쁘다로 가르지 않는다. 간식은 '자주·가끔', 식판은 '골고루예요·더 채워요'로 말한다(계획의 '안돼요' 칸은 식판에 쓰지 않음).
 *  - 학생 자신의 식습관·몸무게·건강·가정 형편을 묻거나 채점하지 않는다. 채점 문항은 모두 가상 인물(곰·토끼·하나·도윤)의 장면이다.
 *    '먹어 볼 음식'·'지킬 약속'처럼 내 선택은 short·활동지·말하기로만 받고 맞고 틀림을 매기지 않는다.
 *  - 영양 수치·권장량·하루 몇 번·몇 분은 근거 파일에 없어 쓰지 않는다. 씹기 횟수(다섯·열 번)는 계획의 연습 값이라 화면에 '우리 반 약속'으로 밝힌다.
 *    가게 놀이 값(100원·200원)은 놀이 값이다(실제 가격 아님).
 *  - 같은 학년군 생활안전(saf-life/e12.js g1-tools-hands·g2-food)의 손 씻기 차례·먹기 전 살피기·상한 음식 고르기·간식 그래프 장면은 되풀이하지 않는다.
 *    급식 차례(meal-steps)의 '손 씻기'는 차례 카드 한 장으로만 둔다.
 * 사람 확인(일반 지식 — 근거 파일에 세부 내용 없음, 식품의약품안전처·농림축산식품부 식생활교육 자료·교육부 학교급식 지침에서 확인):
 *  - food.e12.five-groups.*: 식판 다섯 칸(밥·고기생선달걀·채소·과일·우유)은 주제 concepts 를 따른 것이다. 공식 식품군 구분(곡류·고기·생선·달걀·콩류·채소류·과일류·우유·유제품류·유지·당류)과 다르니 '식품군'이라고 부르지 않았다.
 *  - food.e12.five-groups.activity.color-pattern: "여러 색 채소·과일을 먹으면 좋아요"(계획 문구) — 색별 영양 효능은 단정하지 않았다.
 *  - food.e12.five-groups.intro.tired-bear: "한 가지만 먹으면 힘이 없을 수 있어요" — 이야기 속 장면으로만, 의학적 단정 없이.
 *  - food.e12.snack-pick.*: 단 음료·사탕·과자는 '가끔', 과일·우유·물은 '자주' 먹는 간식으로 나눴다(주제 objective). 당류 권장량은 쓰지 않았다.
 *  - food.e12.snack-pick.intro.snack-face: "단 음료를 많이 마시면 밥이 잘 안 들어갈 수 있어요" — 가상 인물 장면, 단정 아님.
 *  - food.e12.snack-pick.activity.bite-timer: 꼭꼭 씹기 다섯·열 번은 우리 반 약속(계획 연습 값). 권장 횟수가 아니다.
 *  - food.e12.thanks-table.intro.rice-journey: 모심기 → 벼 자람 → 거두기 → 밥 짓기(일반 지식, 도정 단계는 생략).
 *  - food.e12.thanks-table.activity.right-amount: 배고픔에 맞춰 먹을 만큼 담기 — 양(g)·숟가락 수는 쓰지 않았다. */
(function () {
  const MOD = (topic, grades) => (o) => Object.assign({ schema: 'edu-module.v1', domain: 'food', band: '초1-2', topic, grades }, o);
  const MOOD = { type: 'mood', prompt: '오늘 공부를 마친 내 마음은 어떤가요?' };
  const C = (id, text, x) => Object.assign({ id, text }, x || {});
  const CHANT = (title, cards, prompt) => ({ type: 'tool', tool: 'timer', options: { title, cards: [cards[2], cards[0], cards[1]] }, prompt: prompt || '구호를 차례대로 놓아요.', target: { order: cards }, difficulty: 0.1 });

  // =====================================================================================================
  // 1학년 · 골고루 먹어요
  const FIVE = MOD('food.e12.five-groups', [1]);
  // 식판 다섯 칸(kitchen sort, 칸 이름은 주제 concepts 그대로 — 공식 식품군 이름을 쓰지 않는다)
  const TRAY5 = [{ id: 'rice', label: '밥·빵' }, { id: 'main', label: '고기·생선·달걀' }, { id: 'veg', label: '채소' }, { id: 'fruit', label: '과일' }, { id: 'milk', label: '우유' }];
  const TRAY3 = [TRAY5[0], TRAY5[2], TRAY5[4]];
  // r·m·v·f·k = 다섯 칸 카드, x = [더 담을 채소, 더 담을 과일](도전)
  const TRAYSORT = (prompt, r, m, v, f, k, x, d, more) => ({
    prompt, toolOptions: { slots: TRAY5, cards: [f, r, k, v, m] }, target: { sort: { rice: [r], main: [m], veg: [v], fruit: [f], milk: [k] } }, difficulty: d,
    levels: {
      easy: { prompt: `${prompt.replace(/\.$/, '')}(세 칸).`, toolOptions: { slots: TRAY3, cards: [k, r, v] }, target: { sort: { rice: [r], veg: [v], milk: [k] } } },
      challenge: { prompt: `${prompt.replace(/\.$/, '')}(일곱 장).`, toolOptions: { cards: [f, x[0], r, k, v, x[1], m] }, target: { sort: { rice: [r], main: [m], veg: [v, x[0]], fruit: [f, x[1]], milk: [k] } } },
    },
    ...more,
  });
  // 음식 무늬 조각(pattern): 모양·색으로 음식을 나타낸다(화면 글로 이름을 밝힌다)
  const P = { tomato: 'circle:red', broc: 'triangle:mint', egg: 'square:buttercup', carrot: 'circle:peach', eggplant: 'diamond:lavender', corn: 'square:buttercup', apple: 'heart:red', banana: 'star:buttercup', berry: 'circle:sky' };
  const PAT = (prompt, a, b, c, d, more) => ({
    prompt, toolOptions: { mode: 'fill', seq: [a, b, c, a, b, c, null, null, null], palette: [a, b, c] }, target: { fill: [a, b, c] }, difficulty: d,
    levels: {
      easy: { prompt: `${prompt.replace(/\.$/, '')}(두 가지).`, toolOptions: { seq: [a, b, a, b, a, b, null, null], palette: [a, b] }, target: { fill: [a, b] } },
      challenge: { prompt: '세 가지로 내 무늬를 만들어요.', toolOptions: { mode: 'make', palette: [a, b, c], length: 9 }, target: { rule: 'repeat', minRepeats: 2, uses: 3 } },
    },
    ...more,
  });
  // 식판 콜라주 조각: 밥 하양 반원 · 반찬 갈색 네모 · 채소 초록 잎 · 과일 빨강 하트 · 우유 파랑 긴 네모
  const PC = { rice: { shape: 'semi', color: '하양' }, main: { shape: 'square', color: '갈색' }, veg: { shape: 'leaf', color: '초록' }, fruit: { shape: 'heart', color: '빨강' }, milk: { shape: 'rect', color: '파랑' } };
  const HAS = (...ks) => ks.map((k) => Object.assign({ min: 1 }, PC[k]));
  const T_FIVE = [
    FIVE({
      id: 'food.e12.five-groups.intro.tray-song', type: 'intro', title: '"밥 한 칸, 반찬 두 칸" 식판 노래',
      method: '식판 노래 따라 하기', tool: 'keyboard', minutes: 6,
      levels: { easy: '앞 두 마디("밥 한 칸, 반찬 두 칸")만 교사와 함께 손뼉으로 따라 친다.', base: '네 마디 노래를 듣고 리듬 블록이 놓이는 대로 손뼉을 친다.', challenge: '가사를 부르며 손가락으로 식판 칸(밥·반찬·과일·우유)을 차례로 짚는다.' },
      intro: {
        teacher: '"밥 한 칸, 반찬 두 칸, 과일 한 칸, 우유 한 컵!" 시연 단추로 리듬 블록이 한 마디씩 놓이는 모습을 보이며 반 전체가 손뼉으로 따라 친다. 노래가 끝나면 "식판에 칸이 몇 개나 있었나요?"라고 묻고(기다릴 반응: "많아요", "다섯 개요") 칸마다 다른 음식이 들어간다는 것을 짚는다. "좋아하는 것만 가득 담으면 돼요"라는 말이 나오면 "그러면 다른 칸은 어떻게 될까요?"라고 되묻는다.',
        student: '선생님을 따라 "밥 한 칸, 반찬 두 칸" 노래에 맞춰 손뼉을 쳐요.',
        demo: { tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 4, blocks: ['q', 'e', 'h'] }, sequence: [{ rhythm: ['q', 'q', 'h', 'e', 'e', 'q', 'h', 'e', 'e', 'q', 'h', 'e', 'e', 'q', 'h'] }] },
        art: { draw: 'a paper school lunch tray with five compartments holding rice, fish, spinach, an apple and a carton of milk, paper children clapping and singing around it with cut-paper musical notes', banner: '밥 한 칸, 반찬 두 칸', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
      },
      notes: '노래 가사는 칸을 세는 놀이다. 칸마다 먹을 양을 정하는 것이 아니다.',
    }),
    FIVE({
      id: 'food.e12.five-groups.intro.tired-bear', type: 'intro', title: '힘이 없는 곰 이야기',
      method: '힘이 없는 곰 이야기', tool: 'story', minutes: 6,
      levels: { easy: '교사가 첫 장면과 끝 장면 두 장만 놓아 보이고 무엇이 달라졌는지 말한다.', base: '시연을 보며 세 장면(한 가지만 먹음 → 힘이 없음 → 골고루 먹고 놂)의 차례를 함께 말한다.', challenge: '곰에게 더 권할 음식을 하나씩 말해 본다.' },
      intro: {
        teacher: '"곰돌이가 날마다 과자만 먹었어요. 곰돌이는 어떻게 되었을까요?" 시연 단추로 장면 세 장이 차례대로 놓이는 모습을 보인다(기다릴 반응: "힘이 없어요", "놀기 싫어요"). "과자는 나쁜 음식이에요"라는 말이 나오면 "과자가 나쁜 걸까요, 과자 한 가지만 먹은 게 문제일까요?"라고 되묻는다. 오늘은 여러 음식을 골고루 담는 식판을 꾸며 본다고 밝힌다.',
        student: '곰돌이에게 함께 먹으라고 권할 음식을 하나 떠올려 짝에게 말해요.',
        demo: { tool: 'story', options: { mode: 'order', slots: ['먼저', '다음', '끝'], cards: [C('play', '골고루 먹고 신나요', { motif: 'sun' }), C('snack', '과자만 먹어요'), C('tired', '힘이 없어요', { motif: 'cloud' })] }, sequence: [{ order: ['snack', 'tired', 'play'] }] },
        art: { draw: 'a sleepy paper bear sitting next to a pile of snack bags, then the same bear running happily after eating rice, vegetables and fruit from a paper tray', banner: '골고루 먹으면 힘이 나요' },
      },
      notes: '과자를 나쁜 음식이라 하지 않는다. "한 가지만 먹는 것"이 문제라는 점에 머문다.',
    }),
    FIVE({
      id: 'food.e12.five-groups.activity.tray-sort', type: 'activity', title: '식판 칸에 음식 나누기',
      method: '식판 칸에 음식 나누기', tool: 'kitchen', minutes: 13,
      levels: { easy: '칸 세 개(밥·빵, 채소, 우유)에 카드 세 장을 놓고, 놓으면 바로 맞는지 알려 준다.', base: '다섯 칸에 카드 다섯 장을 하나씩 놓은 뒤 확인한다.', challenge: '빈 칸을 더 채울 채소·과일 카드 두 장이 더 나와 일곱 장을 알맞은 칸에 놓는다.' },
      activity: {
        title: '식판 다섯 칸에 음식 카드 놓기', tool: 'kitchen',
        teacher: '"이 음식은 식판 어느 칸에 들어갈까요?" 카드를 놓을 때마다 음식 이름을 소리 내어 읽게 한다. 우유를 "반찬 칸"에 놓는 학생에게 "우유는 마시는 칸이 따로 있어요. 어디일까요?"라고 묻는다. 칸마다 다른 음식이 들어가야 골고루 먹을 수 있다는 점을 짚는다.',
        task: '음식 카드를 식판 칸에 하나씩 놓아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          TRAYSORT('곰돌이 식판을 채워요.', '밥', '생선', '시금치', '사과', '우유', ['당근', '귤'], 0.1),
          TRAYSORT('토끼 식판을 채워요.', '빵', '달걀', '오이', '바나나', '치즈', ['김치', '딸기'], 0.15),
          TRAYSORT('다람쥐 식판을 채워요.', '국수', '닭고기', '당근', '포도', '요구르트', ['시금치', '사과'], 0.2, { conclude: '밥, 고기·생선·달걀, 채소, 과일, 우유를 칸마다 골고루 담아요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '채소 칸에 들어갈 음식에 ○ 해요.', options: ['시금치', '우유', '빵'], answer: '시금치' }] },
    }),
    FIVE({
      id: 'food.e12.five-groups.activity.color-pattern', type: 'activity', title: '알록달록 음식 무늬',
      method: '알록달록 음식 무늬', tool: 'pattern', minutes: 14,
      levels: { easy: '두 가지 음식이 번갈아 나오는 무늬(AB)의 빈칸을 채운다.', base: '세 가지 음식이 되풀이되는 무늬(ABC)의 빈칸 세 개를 채운다.', challenge: '세 가지 음식 조각으로 되풀이 무늬를 직접 만든다.' },
      activity: {
        title: '여러 색 음식으로 무늬 잇기', tool: 'pattern',
        teacher: '"빨간 동그라미는 토마토, 초록 세모는 브로콜리, 노란 네모는 달걀이에요. 다음에는 무엇이 올까요?" 빈칸을 채우기 전에 줄을 손가락으로 짚으며 소리 내어 읽게 한다("토마토, 브로콜리, 달걀…"). 같은 색만 넣는 학생에게 "앞에서 어떤 차례로 되풀이되었나요?"라고 묻는다. 식탁에 여러 색 음식이 있으면 여러 가지를 먹게 된다고 짚는다.',
        task: '음식 무늬의 다음 칸을 채워요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          PAT('토마토·브로콜리·달걀 무늬예요.', P.tomato, P.broc, P.egg, 0.1),
          PAT('당근·가지·옥수수 무늬예요.', P.carrot, P.eggplant, P.corn, 0.15),
          PAT('사과·바나나·블루베리 무늬예요.', P.apple, P.banana, P.berry, 0.2, { conclude: '여러 색 음식을 차례로 먹으면 여러 가지를 골고루 먹어요.' }),
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '토마토, 브로콜리, 토마토, ___', answer: '브로콜리' }] },
      notes: '조각의 모양·색이 어떤 음식인지 문항 글과 교사 말로 밝힌다. 색마다 영양 효능을 단정하지 않는다.',
    }),
    FIVE({
      id: 'food.e12.five-groups.activity.tray-collage', type: 'activity', title: '내 식판 꾸미기',
      method: '내 식판 꾸미기', tool: 'collage', minutes: 13,
      levels: { easy: '밥·채소·과일 조각 세 개를 붙인다.', base: '다섯 칸(밥·반찬·채소·과일·우유) 조각 다섯 개를 붙인다.', challenge: '친구 식판(조각 네 개가 붙어 있음)에서 빠진 칸을 찾아 그 조각을 붙인다.' },
      activity: {
        title: '색종이 조각으로 다섯 칸 식판 꾸미기', tool: 'collage',
        teacher: '"하얀 반달은 밥, 갈색 네모는 반찬, 초록 잎은 채소, 빨간 하트는 과일, 파란 긴 네모는 우유예요." 조각 뜻을 칠판에 붙여 두고 붙일 때마다 무슨 음식인지 말하게 한다. 같은 조각만 여러 개 붙이는 학생에게 "이 식판에 아직 비어 있는 칸은 어디일까요?"라고 묻는다. 꾸민 식판은 먹은 것을 적는 것이 아니라 골고루 담는 연습이라고 말해 준다.',
        task: '색종이 조각을 붙여 식판을 꾸며요.', levels: { easy: { shapes: ['semi', 'leaf', 'heart'] }, base: { shapes: ['semi', 'square', 'leaf', 'heart', 'rect'] }, challenge: { shapes: ['semi', 'square', 'leaf', 'heart', 'rect'] } },
        items: [
          { prompt: '다섯 칸 음식을 다 붙여요.', toolOptions: {}, target: { has: HAS('rice', 'main', 'veg', 'fruit', 'milk') }, difficulty: 0.1,
            levels: {
              easy: { prompt: '밥·채소·과일을 붙여요.', target: { has: HAS('rice', 'veg', 'fruit') } },
              challenge: { prompt: '친구 식판에 빠진 칸을 붙여요.', state: { pieces: [{ shape: 'semi', color: '하양', size: 'm', x: 160, y: 140, r: 0 }, { shape: 'square', color: '갈색', size: 'm', x: 280, y: 140, r: 0 }, { shape: 'leaf', color: '초록', size: 'm', x: 400, y: 140, r: 0 }, { shape: 'rect', color: '파랑', size: 'm', x: 280, y: 280, r: 0 }] }, target: { has: HAS('rice', 'main', 'veg', 'fruit', 'milk') } },
            } },
          { prompt: '채소 잎을 두 개 붙여요.', toolOptions: {}, target: { has: [{ shape: 'leaf', color: '초록', min: 2 }, Object.assign({ min: 1 }, PC.rice)] }, difficulty: 0.15,
            levels: {
              easy: { prompt: '채소 잎을 하나 붙여요.', target: { has: [{ shape: 'leaf', color: '초록', min: 1 }] } },
              challenge: { prompt: '채소 둘에 우유도 붙여요.', target: { has: [{ shape: 'leaf', color: '초록', min: 2 }, Object.assign({ min: 1 }, PC.milk), Object.assign({ min: 1 }, PC.rice)] } },
            } },
          { prompt: '식판을 꾸미고 표시해요.', toolOptions: {}, target: { selfCheck: ['칸마다 붙였어요', '짝에게 말했어요'], minPieces: 5 }, difficulty: 0.2,
            levels: {
              easy: { prompt: '조각 3개로 꾸미고 표시해요.', target: { selfCheck: ['칸마다 붙였어요', '짝에게 말했어요'], minPieces: 3 } },
              challenge: { prompt: '꾸미고 빠진 칸도 봐요.', target: { selfCheck: ['칸마다 붙였어요', '빠진 칸을 봤어요'], minPieces: 5 } },
            },
            conclude: '밥, 반찬, 채소, 과일, 우유를 골고루 담은 식판이에요.' },
        ],
      },
      worksheet: { items: [{ type: 'draw', prompt: '다섯 칸 식판에 골고루 음식을 그려요.' }] },
    }),
    FIVE({
      id: 'food.e12.five-groups.activity.good-bad', type: 'activity', title: '이런 식판, 좋아요·더 채워요',
      method: '좋아요/안돼요: 이런 식판', tool: 'emotion', minutes: 14,
      levels: { easy: '식판 그림 2장을 좋아요·더 채워요로 나누고, 고칠 음식 보기는 2개다.', base: '식판 그림 4장을 나누고, 고칠 음식 보기 3개 가운데 고른다.', challenge: '식판 그림 6장을 나누고, 보기 3개에서 고친 뒤에야 결과를 본다.' },
      activity: {
        title: '골고루 담은 식판 고르고 고치기', tool: 'emotion',
        teacher: '"이 식판은 골고루 담았나요, 더 채워야 하나요?" 식판 그림을 하나씩 읽어 주고 반 전체가 엄지(좋아요)나 손바닥(더 채워요)으로 먼저 보이게 한다. 과자만 담긴 식판을 보고 "과자는 나빠요"라고 하는 학생에게 "과자 말고 무엇이 더 있으면 골고루가 될까요?"라고 되묻는다. 음식이 아니라 식판에 무엇이 빠졌는지를 본다는 점을 짚는다.',
        task: '식판 그림을 듣고 나누거나 더 담을 음식을 골라요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
        items: [
          { prompt: '식판을 두 칸에 나누어요.', toolOptions: { mode: 'sort', slots: [{ id: 'ok', label: '좋아요' }, { id: 'more', label: '더 채워요' }], cards: [C('all', '골고루 담김'), C('chips', '과자만 담김'), C('mix', '밥·채소·우유'), C('rice', '밥만 가득')] }, target: { sort: { ok: ['all', 'mix'], more: ['chips', 'rice'] } }, difficulty: 0.1,
            levels: {
              easy: { prompt: '식판 두 장을 나누어요.', toolOptions: { cards: [C('all', '골고루 담김'), C('chips', '과자만 담김')] }, target: { sort: { ok: ['all'], more: ['chips'] } } },
              challenge: { prompt: '식판 여섯 장을 나누어요.', toolOptions: { cards: [C('all', '골고루 담김'), C('chips', '과자만 담김'), C('meat', '고기만 가득'), C('mix', '밥·채소·우유'), C('rice', '밥만 가득'), C('five', '다섯 칸 다')] }, target: { sort: { ok: ['all', 'mix', 'five'], more: ['chips', 'rice', 'meat'] } } },
            } },
          { prompt: '밥만 있어요. 무엇을 담을까요?', toolOptions: { mode: 'branch', situation: '식판에 밥만 가득 담겼어요.', choices: [{ id: 'veg', text: '채소 반찬', result: '밥과 채소가 함께 있어요.', mood: '기쁨' }, { id: 'rice', text: '밥 한 그릇 더', result: '아직 밥만 있어요.', mood: '걱정' }] }, target: { choice: 'veg' }, difficulty: 0.15,
            levels: { base: { toolOptions: { choices: [{ id: 'veg', text: '채소 반찬', result: '밥과 채소가 함께 있어요.', mood: '기쁨' }, { id: 'rice', text: '밥 한 그릇 더', result: '아직 밥만 있어요.', mood: '걱정' }, { id: 'none', text: '그대로 둬요', result: '빈 칸이 그대로예요.', mood: '걱정' }] } },
              challenge: { toolOptions: { choices: [{ id: 'veg', text: '채소 반찬', result: '밥과 채소가 함께 있어요.', mood: '기쁨' }, { id: 'rice', text: '밥 한 그릇 더', result: '아직 밥만 있어요.', mood: '걱정' }, { id: 'none', text: '그대로 둬요', result: '빈 칸이 그대로예요.', mood: '걱정' }] } } } },
          { prompt: '과자만 있어요. 무엇을 담을까요?', toolOptions: { mode: 'branch', situation: '식판에 과자만 담겼어요.', choices: [{ id: 'meal', text: '밥과 반찬', result: '든든한 식판이 되었어요.', mood: '기쁨' }, { id: 'candy', text: '사탕 더', result: '아직 다른 칸이 비었어요.', mood: '걱정' }] }, target: { choice: 'meal' }, difficulty: 0.2,
            levels: { base: { toolOptions: { choices: [{ id: 'meal', text: '밥과 반찬', result: '든든한 식판이 되었어요.', mood: '기쁨' }, { id: 'candy', text: '사탕 더', result: '아직 다른 칸이 비었어요.', mood: '걱정' }, { id: 'juice', text: '음료수 더', result: '아직 다른 칸이 비었어요.', mood: '걱정' }] } },
              challenge: { toolOptions: { choices: [{ id: 'meal', text: '밥과 반찬', result: '든든한 식판이 되었어요.', mood: '기쁨' }, { id: 'candy', text: '사탕 더', result: '아직 다른 칸이 비었어요.', mood: '걱정' }, { id: 'juice', text: '음료수 더', result: '아직 다른 칸이 비었어요.', mood: '걱정' }] } } },
            conclude: '빈 칸이 있으면 다른 음식을 더 담아 골고루 먹어요.' },
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '골고루 담은 식판에 ○ 해요.', options: ['밥·채소·과일·우유', '밥만 가득'], answer: '밥·채소·과일·우유' }] },
      notes: '계획의 "안돼요" 칸은 "더 채워요"로 바꿨다 — 음식이나 그 음식을 먹는 친구가 잘못이 아니라 식판에 빈 칸이 있다는 뜻으로 말한다.',
    }),
    FIVE({
      id: 'food.e12.five-groups.wrap.yum-chant', type: 'wrap', title: '"골고루 냠냠" 구호',
      method: '"골고루 냠냠" 구호', tool: 'timer', minutes: 6,
      levels: { easy: '교사가 구호 카드를 들어 보이며 한 번 함께 외친다.', base: '구호 카드 차례를 맞추고 씹는 흉내와 함께 두 번 외친다.', challenge: '구호에 어울리는 동작을 하나 더 만들어 반 친구들과 함께 한다.' },
      wrap: {
        teacher: '"밥도 냠! (숟가락 흉내) 채소도 냠! (포크 흉내) 골고루 냠냠! (꼭꼭 씹기 흉내)" 출구 1번에서 구호 카드를 차례대로 놓은 뒤 손뼉에 맞춰 반 전체가 외친다. 출구 2번에서 "좋아하는 것만"을 고른 학생에게 "좋아하는 음식도 먹고, 다른 음식도 한 칸씩 먹어 봐요"라고 말해 준다. 오늘 급식에서 구호를 떠올려 보자고 한다.',
        exitTicket: [
          CHANT('골고루 냠냠 구호', ['밥도 냠', '채소도 냠', '골고루 냠냠']),
          { type: 'choice', prompt: '어떻게 먹으면 좋을까요?', options: ['좋아하는 것만', '골고루 먹어요', '과자만 먹어요'], answer: 1, difficulty: 0.1, explain: '여러 음식을 골고루 먹어요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '골고루 냠냠',
        items: [
          { type: 'blank', prompt: '구호를 따라 써요.', text: '밥도 냠, 채소도 냠, ___ 냠냠!', answer: '골고루' },
          { type: 'draw', prompt: '골고루 먹는 내 모습을 그려요.' },
        ],
        easy: { note: '"밥도 냠, 채소도 냠"을 떠올려요.', items: [{ type: 'draw', prompt: '식판에 채소를 하나 그려요.' }] },
      },
    }),
    FIVE({
      id: 'food.e12.five-groups.wrap.try-one', type: 'wrap', title: '먹어 볼 음식 하나',
      method: '먹어 볼 음식 하나', tool: 'sortboard', minutes: 6,
      levels: { easy: '하나가 아직 안 먹은 음식 하나를 "먹어 볼래요" 칸에 넣는 모습을 교사와 함께 본다.', base: '하나가 안 먹은 음식 두 장을 "먹어 볼래요" 칸에 넣는다.', challenge: '카드를 나눈 뒤, 집에서도 먹어 볼 음식을 활동지에 하나 더 쓴다.' },
      wrap: {
        teacher: '"하나가 밥과 생선은 먹었는데 시금치와 버섯은 아직 안 먹었어요. 하나가 먹어 볼 음식은 무엇일까요?" 출구 1번을 함께 읽고 카드를 넣는다. 출구 2번에는 내가 오늘 급식에서 먹어 볼 음식을 쓰게 하되, 고른 음식은 맞고 틀림이 없다고 말한다. "먹기 싫어요"라는 학생에게는 "한 입만 냄새 맡아 보는 것부터 해도 좋아요"라고 말해 준다.',
        exitTicket: [
          { type: 'tool', tool: 'sortboard', options: { slots: ['먹어 볼래요', '벌써 먹었어요'], cards: [C('spinach', '시금치'), C('rice', '밥'), C('mush', '버섯'), C('fish', '생선')] }, prompt: '하나가 안 먹은 것을 넣어요.', target: { sort: { '먹어 볼래요': ['spinach', 'mush'], '벌써 먹었어요': ['rice', 'fish'] } }, difficulty: 0.1 },
          { type: 'short', prompt: '오늘 먹어 볼 음식을 써요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '먹어 볼 음식 하나',
        items: [
          { type: 'draw', prompt: '오늘 먹어 볼 음식을 하나 그려요.' },
          { type: 'check', prompt: '해 볼 것에 ✓ 해요.', options: ['냄새 맡아 보기', '한 입 먹어 보기', '맛을 말해 보기'] },
        ],
        easy: { note: '그림 하나만 그려도 좋아요.', items: [{ type: 'draw', prompt: '먹어 볼 음식을 그려요.' }] },
      },
      notes: '출구 2번과 활동지는 학생의 선택이다 — 채점하지 않고, 먹었는지 확인하거나 남긴 음식을 묻지 않는다.',
    }),
  ];

  // =====================================================================================================
  // 2학년 · 편식 줄이고 간식 고르기
  const SNACK = MOD('food.e12.snack-pick', [2]);
  // 간식 가게(economy budget): 놀이 값 100원·200원, 쉬움 동전 두 개(200원)·두 개, 기본 동전 세 개(300원)·두 개, 도전 300원·세 개
  const SHOP = (prompt, items, not, d, more) => ({
    prompt, toolOptions: { mode: 'budget', budget: 300, ask: '동전 세 개 안에서 골라요(놀이 값)', items }, target: { budget: { count: 2, not } }, difficulty: d,
    levels: {
      easy: { prompt: `${prompt.replace(/\.$/, '')}(동전 두 개).`, toolOptions: { budget: 200, ask: '동전 두 개 안에서 골라요(놀이 값)' }, target: { budget: { count: 2, not } } },
      challenge: { prompt: '자주 간식 세 개, 까닭도 말해요.', target: { budget: { count: 3, not } } },
    },
    ...more,
  });
  const IT = (id, text, price) => ({ id, text, price });
  // 자주·가끔(sortboard): 기본 6장, 쉬움 4장(limit), 도전 8장(가끔 대신 먹을 것 2장 더)
  const OFTEN = ['자주 먹어요', '가끔 먹어요'];
  const OFT = (prompt, often, some, more2, d, more) => ({
    prompt, toolOptions: { slots: OFTEN, cards: [often[0], some[0], often[1], some[1], often[2], some[2]] }, target: { sort: { '자주 먹어요': often, '가끔 먹어요': some } }, difficulty: d,
    levels: {
      easy: { prompt: `${prompt.replace(/\.$/, '')}(4장).`, toolOptions: { limit: 4 }, target: { sort: { '자주 먹어요': often.slice(0, 2), '가끔 먹어요': some.slice(0, 2) } } },
      challenge: { prompt: `${prompt.replace(/\.$/, '')}(8장).`, toolOptions: { more: more2 }, target: { sort: { '자주 먹어요': [...often, ...more2], '가끔 먹어요': some } } },
    },
    ...more,
  });
  const T_SNACK = [
    SNACK({
      id: 'food.e12.snack-pick.intro.one-bite', type: 'intro', title: '당근 한 입 도전 이야기',
      method: '한 입 도전 이야기', tool: 'story', minutes: 6,
      levels: { easy: '교사가 첫 장면과 끝 장면 두 장만 놓아 보이고 토끼의 얼굴이 어떻게 바뀌었는지 말한다.', base: '세 장면(싫어요 → 한 입 → 맛을 말해요)의 차례를 시연과 함께 말한다.', challenge: '토끼가 한 입 먹고 한 말("아삭해요", "생각보다 달아요")을 골라 따라 말한다.' },
      intro: {
        teacher: '"토끼 토토는 당근이 싫었어요. 그런데 한 입 먹어 보았대요." 시연 단추로 장면 세 장이 차례대로 놓이는 모습을 보인 뒤 "토토는 한 입 먹고 뭐라고 했을까요?"라고 묻는다(기다릴 반응: "아삭해요", "맛있어요"). "싫은 건 안 먹어도 돼요"라는 말이 나오면 "한 입만 먹어 보고 맛을 말해 보는 건 어떨까요? 맛이 없어도 괜찮아요"라고 되묻는다. 오늘은 한 입 도전과 간식 고르기를 해 본다고 밝힌다.',
        student: '토토처럼 한 입 먹어 보고 싶은 음식을 하나 떠올려 짝에게 말해요.',
        demo: { tool: 'story', options: { mode: 'order', slots: ['먼저', '다음', '끝'], cards: [C('say', '"아삭해요!"', { motif: 'sun' }), C('no', '당근 싫어'), C('bite', '한 입 먹어요', { motif: 'carrot' })] }, sequence: [{ order: ['no', 'bite', 'say'] }] },
        art: { draw: 'a paper rabbit frowning at a carrot, then taking one small bite, then smiling and saying it is crunchy, three paper panels in a row', banner: '한 입 도전!' },
      },
      notes: '한 입을 먹고 맛이 없다고 말해도 칭찬한다. 먹기를 억지로 시키지 않는다(알레르기가 있는 음식은 빼고 이야기한다).',
    }),
    SNACK({
      id: 'food.e12.snack-pick.intro.snack-face', type: 'intro', title: '간식 먹고 난 기분',
      method: '간식 먹고 난 기분', tool: 'emotion', minutes: 6,
      levels: { easy: '교사가 한 장면(과일을 먹고 뛰논 민이)만 읽어 주고 마음 카드를 함께 고른다.', base: '두 장면을 듣고 장면마다 민이의 마음 카드를 짝 짓는 시연을 본다.', challenge: '두 장면의 마음이 왜 다른지 한마디로 말한다.' },
      intro: {
        teacher: '"민이가 단 음료를 잔뜩 마셨더니 점심밥이 잘 안 들어갔어요. 다음 날은 사과를 먹고 뛰어놀았더니 점심밥도 맛있었어요." 시연 단추로 장면과 마음 카드가 짝 지어지는 모습을 보인다. "단 음료는 나쁜 거예요"라는 말이 나오면 "단 음료를 가끔 조금 마시는 것과 잔뜩 마시는 것은 어떻게 다를까요?"라고 되묻는다. 간식은 먹는 때와 양을 생각해 고른다고 밝힌다.',
        student: '민이의 두 장면을 듣고 어느 쪽 마음이 더 편할지 손을 들어 보아요.',
        demo: { tool: 'emotion', options: { mode: 'match', slots: [{ id: 'drink', label: '밥이 안 들어가요' }, { id: 'fruit', label: '밥도 맛있어요' }], cards: ['걱정', '기쁨'] }, sequence: [{ match: { drink: '걱정', fruit: '기쁨' } }] },
        art: { draw: 'two paper panels: a child holding a big sweet drink looking at a full lunch tray without appetite, and the same child after eating an apple happily eating lunch', banner: '간식을 먹고 나면?' },
      },
      notes: '가상 인물 민이의 장면이다. 학생에게 오늘 무엇을 마셨는지 묻지 않는다.',
    }),
    SNACK({
      id: 'food.e12.snack-pick.activity.snack-shop', type: 'activity', title: '간식 가게 놀이',
      method: '간식 가게 놀이', tool: 'economy', minutes: 13,
      levels: { easy: '동전 두 개(놀이 값 200원) 안에서 자주 먹는 간식 두 개를 고른다.', base: '동전 세 개(300원) 안에서 자주 먹는 간식 두 개를 고른다.', challenge: '동전 세 개 안에서 자주 먹는 간식 세 개를 고르고 고른 까닭을 짝에게 말한다.' },
      activity: {
        title: '동전 안에서 자주 먹는 간식 고르기', tool: 'economy',
        teacher: '"오늘 가게 값은 놀이 값이에요. 동전 안에서 자주 먹기 좋은 간식을 골라 볼까요?" 고를 때마다 막대가 얼마나 찼는지 함께 본다. 탄산음료를 고른 학생에게 "탄산음료는 가끔 먹는 간식이에요. 자주 먹을 간식으로는 무엇이 있을까요?"라고 묻는다. 사탕·과자를 먹으면 안 된다는 뜻이 아니라 자주 먹을 것과 가끔 먹을 것을 나눈다는 점을 짚는다.',
        task: '동전 안에서 자주 먹는 간식을 골라요.', levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
        items: [
          SHOP('쉬는 시간 간식을 골라요.', [IT('apple', '사과', 100), IT('candy', '사탕', 100), IT('milk', '우유', 100), IT('soda', '탄산음료', 200), IT('banana', '바나나', 100), IT('chips', '과자', 200)], ['candy', 'soda', 'chips'], 0.1),
          SHOP('운동한 뒤 간식을 골라요.', [IT('water', '물', 100), IT('soda', '탄산음료', 200), IT('milk', '우유', 100), IT('candy', '사탕', 100), IT('tang', '귤', 100), IT('cookie', '쿠키', 200)], ['soda', 'candy', 'cookie'], 0.15),
          SHOP('친구와 나눌 간식을 골라요.', [IT('sweet', '고구마', 100), IT('jelly', '젤리', 100), IT('grape', '포도', 100), IT('cake', '케이크', 200), IT('yogurt', '요구르트', 100), IT('soda', '탄산음료', 200)], ['jelly', 'cake', 'soda'], 0.2, { conclude: '과일·우유·물은 자주, 사탕·과자·단 음료는 가끔 먹어요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '자주 먹을 간식에 ○ 해요.', options: ['사과', '사탕'], answer: '사과' }] },
      notes: '가격은 놀이 값이다. 집에서 받는 용돈이나 사 먹는 간식을 묻지 않는다.',
    }),
    SNACK({
      id: 'food.e12.snack-pick.activity.bite-timer', type: 'activity', title: '꼭꼭 씹기 연습',
      method: '꼭꼭 씹기 연습', tool: 'timer', minutes: 14,
      levels: { easy: '씹기 타이머를 우리 반 약속 다섯 번에 맞추고 차례 카드 세 장을 놓는다.', base: '씹기 타이머를 우리 반 약속 열 번에 맞추고 차례 카드 세 장을 놓는다.', challenge: '열 번에 맞춘 뒤 한 입 도전 차례를 짝에게 말로 알려 준다.' },
      activity: {
        title: '"한 입 → 꼭꼭 → 꿀꺽" 따라 하기', tool: 'timer',
        teacher: '"한 입 넣고, 꼭꼭 씹고, 꿀꺽!" 차례 카드를 놓은 뒤 타이머의 씹기 칸 하나를 한 번 씹기로 정하고, 시작 단추를 누르면 반 전체가 입을 다물고 씹는 흉내를 낸다. 씹기 횟수는 우리 반 약속이라고 먼저 말한다. "빨리 삼키면 빨리 놀 수 있어요"라는 학생에게 "꼭꼭 씹으면 음식 맛이 어떻게 달라질까요?"라고 묻는다.',
        task: '씹는 차례를 놓고 씹기 횟수를 맞춰요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          { prompt: '먹는 차례로 놓아요.', toolOptions: { title: '꼭꼭 씹기 차례', cards: ['꿀꺽', '한 입', '꼭꼭 씹기'] }, target: { order: ['한 입', '꼭꼭 씹기', '꿀꺽'] }, difficulty: 0.1 },
          { prompt: '씹기 열 번에 맞춰요(약속).', toolOptions: { title: '씹기 횟수(우리 반 약속)', labels: ['씹기', '쉬기'], plan: { work: 5, rest: 5, rounds: 1 } }, target: { plan: { rounds: 10 } }, difficulty: 0.15,
            hints: ['꼭꼭 한 번이 한 칸이에요.', '되풀이 횟수가 씹는 횟수예요.', '되풀이 횟수를 10에 맞춰요.'],
            levels: {
              easy: { prompt: '씹기 다섯 번에 맞춰요(약속).', target: { plan: { rounds: 5 } } },
              challenge: { prompt: '열 번 맞추고 짝에게 알려요.', target: { plan: { rounds: 10 } } },
            } },
          { prompt: '한 입 도전 차례로 놓아요.', toolOptions: { title: '한 입 도전', cards: ['맛 말하기', '냄새 맡기', '한 입 먹기'] }, target: { order: ['냄새 맡기', '한 입 먹기', '맛 말하기'] }, difficulty: 0.2, conclude: '한 입 넣고 꼭꼭 씹어 맛을 느끼고, 맛을 말해 봐요.' },
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '한 입, ___ 씹기, 꿀꺽!', answer: '꼭꼭' }] },
      notes: '씹기 다섯·열 번은 이 수업의 우리 반 약속(계획 연습 값)이다. 권장 횟수로 말하지 않는다.',
    }),
    SNACK({
      id: 'food.e12.snack-pick.activity.snack-sort', type: 'activity', title: '자주·가끔 간식 나누기',
      method: '자주·가끔 간식 나누기', tool: 'sortboard', minutes: 13,
      levels: { easy: '카드 4장을 나누고, 틀린 바구니에 넣으면 바로 알려 준다.', base: '카드 6장을 두 바구니에 나눈 뒤 확인한다.', challenge: '가끔 간식 대신 먹을 카드 2장이 더 나와 8장을 나눈다.' },
      activity: {
        title: '간식 카드를 자주·가끔 바구니에 나누기', tool: 'sortboard',
        teacher: '"이 간식은 자주 먹을까요, 가끔 먹을까요?" 카드를 넣을 때마다 반 전체가 소리 내어 읽는다. 아이스크림을 "안 먹는 간식"이라고 하는 학생에게 "먹으면 안 되는 게 아니라 가끔 먹는 간식이에요"라고 바로잡는다. 가끔 간식 대신 먹을 것(과일·우유·물)을 떠올리게 한다.',
        task: '간식 카드를 두 바구니에 나누어요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
        items: [
          OFT('쉬는 시간 간식을 나누어요.', ['사과', '우유', '물'], ['사탕', '탄산음료', '아이스크림'], ['방울토마토', '바나나'], 0.1),
          OFT('놀이 뒤 간식을 나누어요.', ['귤', '요구르트', '삶은 달걀'], ['초콜릿', '과자', '젤리'], ['고구마', '포도'], 0.15),
          OFT('집에 와서 간식을 나누어요.', ['딸기', '치즈', '옥수수'], ['도넛', '케이크', '단 음료'], ['오이', '우유'], 0.2, { conclude: '과일·우유·물은 자주, 단 간식은 가끔 먹어요.' }),
        ],
      },
      worksheet: { items: [{ type: 'table', prompt: '자주면 ○, 가끔이면 △를 써요.', columns: ['간식', '○ / △'], cells: [['사과', ''], ['사탕', ''], ['우유', ''], ['탄산음료', '']], answer: '○, △, ○, △' }] },
    }),
    SNACK({
      id: 'food.e12.snack-pick.activity.veggie-song', type: 'activity', title: '"당근은 아삭" 채소 노래',
      method: '채소 노래', tool: 'keyboard', minutes: 14,
      levels: { easy: '세 음 가락을 듣고(건반이 비춰 줌) 따라 친다.', base: '다섯 음 가락을 듣고 따라 친다.', challenge: '좋아하는 채소로 가사를 바꿔 부르며 다섯 음 가락을 직접 짓는다.' },
      activity: {
        title: '채소 노래 가락 따라 치기', tool: 'keyboard',
        teacher: '"당근은 아삭(도 미 솔), 오이는 시원(솔 미 도)!" 가락 듣기 단추를 누르고 반 전체가 가사를 먼저 부른 뒤 건반으로 따라 친다. "채소는 맛없어요"라는 학생에게 "아삭, 시원, 달콤… 채소마다 어떤 소리가 날까요?"라고 묻고 가사에 넣어 보게 한다. 채소 맛을 말로 나타내 보는 것도 한 입 도전이라고 짚는다.',
        task: '채소 노래 가락을 듣고 건반으로 따라 쳐요.', levels: { easy: { from: '도', to: '높은도', showWhileListening: true }, base: { from: '도', to: '높은도' }, challenge: { from: '도', to: '높은도' } },
        items: [
          { prompt: '"당근은 아삭"을 따라 쳐요.', toolOptions: { melody: ['도', '미', '솔', '미', '도'] }, target: { notes: ['도', '미', '솔', '미', '도'] }, difficulty: 0.1,
            levels: { easy: { prompt: '"아삭" 세 음을 따라 쳐요.', toolOptions: { melody: ['도', '미', '솔'] }, target: { notes: ['도', '미', '솔'] } },
              challenge: { prompt: '도로 끝나는 가락을 지어요.', target: { compose: { length: 5, endOn: '도' } } } } },
          { prompt: '"오이는 시원"을 따라 쳐요.', toolOptions: { melody: ['솔', '솔', '미', '레', '도'] }, target: { notes: ['솔', '솔', '미', '레', '도'] }, difficulty: 0.15,
            levels: { easy: { prompt: '"시원" 세 음을 따라 쳐요.', toolOptions: { melody: ['미', '레', '도'] }, target: { notes: ['미', '레', '도'] } },
              challenge: { prompt: '솔로 시작하는 가락을 지어요.', target: { compose: { length: 5, startOn: '솔' } } } } },
          { prompt: '"가지는 말랑"을 따라 쳐요.', toolOptions: { melody: ['미', '미', '솔', '라', '솔'] }, target: { notes: ['미', '미', '솔', '라', '솔'] }, difficulty: 0.2,
            levels: { easy: { prompt: '"말랑" 세 음을 따라 쳐요.', toolOptions: { melody: ['솔', '라', '솔'] }, target: { notes: ['솔', '라', '솔'] } },
              challenge: { prompt: '내 채소 가락 다섯 음 지어요.', target: { compose: { length: 5, startOn: '미', endOn: '솔' } } } },
            conclude: '채소마다 맛과 소리가 달라요. 한 입 먹고 맛을 말해 봐요.' },
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '내가 좋아하는 채소로 바꿔 써요.', text: '___는 아삭!', answer: '(채소 이름)' }] },
    }),
    SNACK({
      id: 'food.e12.snack-pick.wrap.snack-check', type: 'wrap', title: '오늘 간식 약속 점검표',
      method: '오늘 간식 약속', tool: 'kitchen', minutes: 6,
      levels: { easy: '교사가 점검표 두 칸(한 입 먹어 보기·과일 간식)을 읽어 주고 함께 표시한다.', base: '세 칸을 스스로 읽고 해 볼 약속에 표시한다.', challenge: '표시한 뒤 집에서 지킬 칸 하나를 골라 활동지에 별을 그린다.' },
      wrap: {
        teacher: '"오늘 배운 간식 약속 가운데 나는 무엇을 해 볼 수 있을까요?" 점검표 칸을 함께 읽고 해 볼 것에 표시하게 한다. 표시한 칸 수로 잘했다 못했다를 말하지 않는다. 출구 2번에서 "단 음료를 자주"를 고른 학생에게 "목마를 때는 물을 먼저 마셔 봐요"라고 말해 준다.',
        exitTicket: [
          { type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title: '오늘 간식 약속', items: [C('bite', '한 입 먹어 보기'), C('fruit', '과일 간식'), C('water', '물 마시기')] }, prompt: '해 볼 약속에 표시해요.', target: { selfCheck: true }, difficulty: 0.1 },
          { type: 'choice', prompt: '목이 마를 때 먼저 마실 것은?', options: ['단 음료를 자주', '물을 마셔요'], answer: 1, difficulty: 0.1, explain: '목마를 때는 물을 먼저 마셔요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '오늘 간식 약속',
        items: [
          { type: 'check', prompt: '해 볼 약속에 ✓ 해요.', options: ['싫은 음식도 한 입 먹어 봐요', '간식으로 과일을 골라요', '목마르면 물을 마셔요'] },
          { type: 'draw', prompt: '내가 고른 간식을 그려요.' },
        ],
      },
      notes: '점검표는 다짐이다. 집에서 먹는 간식이나 식습관을 묻지 않는다.',
    }),
    SNACK({
      id: 'food.e12.snack-pick.wrap.cheer', type: 'wrap', title: '"한 입 도전!" 구호',
      method: '"한 입 도전!" 구호', tool: 'timer', minutes: 6,
      levels: { easy: '교사가 구호 카드를 들어 보이며 한 번 함께 외친다.', base: '구호 카드 차례를 맞추고 동작과 함께 두 번 외친다.', challenge: '구호에 손뼉 박자를 넣어 모둠별로 외친다.' },
      wrap: {
        teacher: '"한 입! (손가락 하나) 도전! (주먹 들기) 맛을 말해요! (입 가리키기)" 출구 1번에서 구호 카드를 차례대로 놓은 뒤 반 전체가 동작과 함께 외친다. 출구 2번에서 "안 먹어요"를 고른 학생에게 "한 입 먹어 보고 맛이 없으면 그렇다고 말해도 괜찮아요"라고 말해 준다.',
        exitTicket: [
          CHANT('한 입 도전 구호', ['한 입', '도전', '맛을 말해요']),
          { type: 'choice', prompt: '처음 보는 채소가 나오면?', options: ['안 먹어요', '한 입 먹어 봐요', '버려요'], answer: 1, difficulty: 0.1, explain: '한 입 먹어 보고 맛을 말해요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '한 입 도전!',
        items: [
          { type: 'blank', prompt: '구호를 따라 써요.', text: '한 입 도전, ___을 말해요!', answer: '맛' },
          { type: 'draw', prompt: '한 입 도전할 채소를 그려요.' },
        ],
      },
    }),
  ];

  // =====================================================================================================
  // 2학년 · 고마운 밥상, 바른 예절
  const THANKS = MOD('food.e12.thanks-table', [2]);
  const T_THANKS = [
    THANKS({
      id: 'food.e12.thanks-table.intro.rice-journey', type: 'intro', title: '쌀이 밥이 되기까지',
      method: '쌀이 밥이 되기까지', tool: 'lifecycle', minutes: 6,
      levels: { easy: '교사가 세 장면(벼 자람 → 거두기 → 밥 짓기)을 놓아 보이고 함께 말한다.', base: '네 장면(모심기 → 벼 자람 → 거두기 → 밥 짓기)의 차례를 시연과 함께 말한다.', challenge: '장면마다 도와준 사람(농부·조리사)을 말로 붙인다.' },
      intro: {
        teacher: '"오늘 먹을 밥은 어디서 왔을까요?" 시연 단추로 모심기 → 벼가 자람 → 벼 거두기 → 밥 짓기 장면이 차례대로 놓이는 모습을 보인다(기다릴 반응: "마트요", "밥솥이요"). "밥은 밥솥에서 생겨요"라는 말이 나오면 "밥솥에 넣는 쌀은 어디서 자랐을까요?"라고 되묻는다. 밥 한 그릇에 여러 사람의 손길이 담겨 있다는 점을 짚는다.',
        student: '밥이 되기까지 도와준 사람을 한 명 떠올려 짝에게 말해요.',
        demo: { tool: 'lifecycle', options: { center: '쌀이 밥이 되기까지', cycle: false, slots: 4, cards: [C('cook', '밥 짓기', { motif: 'pot' }), C('plant', '모심기', { motif: 'sprout' }), C('harvest', '벼 거두기'), C('grow', '벼가 자라요')] }, sequence: [{ order: ['plant', 'grow', 'harvest', 'cook'] }] },
        art: { draw: 'a paper rice field with a farmer planting seedlings, golden rice stalks growing, a harvest basket, and a cook steaming rice in a pot, connected by cut-paper arrows', banner: '밥 한 그릇의 여행', extra: [{ motif: 'sun', x: 300, y: 96 }] },
      },
    }),
    THANKS({
      id: 'food.e12.thanks-table.intro.thanks-song', type: 'intro', title: '"잘 먹겠습니다" 감사 노래',
      method: '감사 노래', tool: 'keyboard', minutes: 6,
      levels: { easy: '"잘 먹겠습니다" 한 줄 가락을 함께 부른다.', base: '"잘 먹겠습니다, 잘 먹었습니다" 두 줄 가락을 듣고 따라 부른다.', challenge: '가사에 감사할 사람(조리사님·농부님)을 넣어 바꿔 부른다.' },
      intro: {
        teacher: '"밥 먹기 전에는 무슨 인사를 할까요? 다 먹고 나서는요?" 가락 시연 단추로 "잘 먹겠습니다"(솔 솔 미 미 레 도) 가락을 들려주고 반 전체가 따라 부른다. "인사는 안 해도 밥 먹을 수 있어요"라는 말이 나오면 "인사를 들은 조리사님 마음은 어떨까요?"라고 되묻는다. 오늘은 급식 시간의 차례와 감사 인사를 익힌다고 밝힌다.',
        student: '"잘 먹겠습니다" 가락을 선생님을 따라 불러요.',
        demo: { tool: 'keyboard', options: { from: '도', to: '높은도', melody: ['솔', '솔', '미', '미', '레', '도'] }, sequence: [{ notes: ['솔', '솔', '미', '미', '레', '도'] }] },
        art: { draw: 'paper children sitting at a lunch table bowing politely with hands together before eating, a smiling cook in a white hat behind the serving counter', banner: '잘 먹겠습니다!', extra: [{ motif: 'heart', x: 300, y: 96, color: 'rose' }] },
      },
    }),
    THANKS({
      id: 'food.e12.thanks-table.activity.meal-steps', type: 'activity', title: '급식 차례 따라 하기',
      method: '급식 차례 따라 하기', tool: 'timer', minutes: 13,
      levels: { easy: '급식 차례 카드 세 장(손 씻기·줄 서기·감사 인사)을 놓는다.', base: '다섯 장(손 씻기·줄 서기·감사 인사·꼭꼭 씹기·정리)을 놓고 타이머에 맞춰 동작으로 따라 한다.', challenge: '빠져 있던 단계 카드 한 장("잘 먹었습니다")이 더 나와 그 자리까지 넣어 놓는다.' },
      activity: {
        title: '급식 시간 차례 맞추고 동작으로 따라 하기', tool: 'timer',
        teacher: '"급식실에 가면 맨 먼저 무엇을 할까요?" 차례를 맞춘 뒤 타이머의 따라 하기 칸 하나를 한 단계로 정하고, 시작 단추를 누르면 반 전체가 단계마다 동작을 한다(손 비비기 → 줄 서기 → 꾸벅 → 씹기 → 식판 들기). "인사는 다 먹고 해요"라는 학생에게 "먹기 전 인사와 다 먹은 뒤 인사는 어떻게 다를까요?"라고 묻는다.',
        task: '급식 차례 카드를 놓고 동작으로 따라 해요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          { prompt: '급식 차례로 놓아요.', toolOptions: { title: '급식 차례', cards: ['감사 인사', '꼭꼭 씹기', '손 씻기', '정리', '줄 서기'] }, target: { order: ['손 씻기', '줄 서기', '감사 인사', '꼭꼭 씹기', '정리'] }, difficulty: 0.1,
            levels: {
              easy: { prompt: '급식 차례로 놓아요(3장).', toolOptions: { cards: ['감사 인사', '손 씻기', '줄 서기'] }, target: { order: ['손 씻기', '줄 서기', '감사 인사'] } },
              challenge: { prompt: '빠진 인사까지 넣어 놓아요.', toolOptions: { cards: ['감사 인사', '꼭꼭 씹기', '잘 먹었습니다', '손 씻기', '정리', '줄 서기'] }, target: { order: ['손 씻기', '줄 서기', '감사 인사', '꼭꼭 씹기', '잘 먹었습니다', '정리'] } },
            } },
          { prompt: '다섯 단계 따라 하기에 맞춰요.', toolOptions: { title: '단계 따라 하기', labels: ['따라 하기', '쉬기'], plan: { work: 10, rest: 5, rounds: 1 } }, target: { plan: { rounds: 5 } }, difficulty: 0.15,
            hints: ['단계 하나가 한 번이에요.', '되풀이 횟수가 단계 수예요.', '되풀이 횟수를 5에 맞춰요.'],
            levels: {
              easy: { prompt: '세 단계 따라 하기에 맞춰요.', target: { plan: { rounds: 3 } } },
              challenge: { prompt: '여섯 단계 따라 하기에 맞춰요.', target: { plan: { rounds: 6 } } },
            } },
          { prompt: '다 먹은 뒤 차례로 놓아요.', toolOptions: { title: '다 먹은 뒤', cards: ['식판 넣기', '"잘 먹었습니다"', '수저 모으기'] }, target: { order: ['"잘 먹었습니다"', '수저 모으기', '식판 넣기'] }, difficulty: 0.2, conclude: '손 씻고, 줄 서고, 인사하고, 꼭꼭 씹고, 정리해요.' },
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '먹기 전에 "잘 ___습니다" 인사해요.', answer: '먹겠' }] },
    }),
    THANKS({
      id: 'food.e12.thanks-table.activity.right-amount', type: 'activity', title: '먹을 만큼 담기',
      method: '먹을 만큼 담기', tool: 'kitchen', minutes: 14,
      levels: { easy: '배고픔 그림 두 칸에 밥 카드 두 장만 나눠 담는다.', base: '밥·반찬 카드 네 장을 배고픔 그림 두 칸에 나눠 담는다.', challenge: '"산더미 밥" 같은 함정 카드가 섞이고, 남기지 않는 방법 카드를 더 고른다.' },
      activity: {
        title: '배고픔에 맞춰 먹을 만큼 담기', tool: 'kitchen',
        teacher: '"도윤이는 조금 배고파요. 밥을 얼마나 담을까요?" 카드를 놓을 때마다 "먹을 만큼!"이라고 함께 말한다. "많이 담으면 좋아요"라는 학생에게 "다 못 먹고 남으면 음식은 어디로 갈까요?"라고 묻는다. 모자라면 더 받으면 되니 처음에는 먹을 만큼 담는다는 점을 짚는다.',
        task: '배고픔 그림에 맞춰 먹을 만큼 담아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          { prompt: '배고픔에 맞게 담아요.', toolOptions: { slots: [{ id: 'little', label: '조금 배고파요' }, { id: 'much', label: '많이 배고파요' }], cards: [C('r1', '밥 조금'), C('s2', '반찬 보통'), C('r2', '밥 보통'), C('s1', '반찬 조금')] }, target: { sort: { little: ['r1', 's1'], much: ['r2', 's2'] } }, difficulty: 0.1,
            levels: {
              easy: { prompt: '배고픔에 맞게 밥만 담아요.', toolOptions: { cards: [C('r2', '밥 보통'), C('r1', '밥 조금')] }, target: { sort: { little: ['r1'], much: ['r2'] } } },
              challenge: { prompt: '함정은 빼고 담아요.', toolOptions: { cards: [C('r1', '밥 조금'), C('heap', '산더미 밥'), C('s2', '반찬 보통'), C('r2', '밥 보통'), C('s1', '반찬 조금')] }, target: { sort: { little: ['r1', 's1'], much: ['r2', 's2'] } } },
            } },
          { prompt: '국과 과일도 맞게 담아요.', toolOptions: { slots: [{ id: 'little', label: '조금 배고파요' }, { id: 'much', label: '많이 배고파요' }], cards: [C('g2', '국 한 그릇'), C('f1', '귤 하나'), C('g1', '국 반 그릇'), C('f2', '귤 둘')] }, target: { sort: { little: ['g1', 'f1'], much: ['g2', 'f2'] } }, difficulty: 0.15,
            levels: {
              easy: { prompt: '국만 맞게 담아요.', toolOptions: { cards: [C('g2', '국 한 그릇'), C('g1', '국 반 그릇')] }, target: { sort: { little: ['g1'], much: ['g2'] } } },
              challenge: { prompt: '함정은 빼고 국·과일 담아요.', toolOptions: { cards: [C('g2', '국 한 그릇'), C('f1', '귤 하나'), C('all', '국 세 그릇'), C('g1', '국 반 그릇'), C('f2', '귤 둘')] }, target: { sort: { little: ['g1', 'f1'], much: ['g2', 'f2'] } } },
            } },
          { prompt: '남기지 않는 방법을 골라요.', toolOptions: { mode: 'pick', basket: '남기지 않게', cards: [C('enough', '먹을 만큼'), C('full', '가득 담기'), C('again', '모자라면 더'), C('throw', '몰래 버리기')] }, target: { pick: ['enough', 'again'] }, difficulty: 0.2,
            levels: {
              easy: { prompt: '남기지 않는 방법 하나 골라요.', toolOptions: { cards: [C('enough', '먹을 만큼'), C('full', '가득 담기')] }, target: { pick: ['enough'] } },
              challenge: { prompt: '남기지 않는 방법을 다 골라요.', toolOptions: { cards: [C('enough', '먹을 만큼'), C('full', '가득 담기'), C('again', '모자라면 더'), C('throw', '몰래 버리기'), C('ask', '"조금만요"')] }, target: { pick: ['enough', 'again', 'ask'] } },
            },
            conclude: '처음엔 먹을 만큼 담고, 모자라면 더 받아요.' },
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '남기지 않으려면?', options: ['먹을 만큼 담아요', '가득 담아요'], answer: '먹을 만큼 담아요' }] },
      notes: '배고픔 그림은 가상 인물 도윤이의 것이다. 학생이 얼마나 먹는지 묻거나 비교하지 않는다. 먹는 양은 사람마다 다르다고 말해 준다.',
    }),
    THANKS({
      id: 'food.e12.thanks-table.activity.manner-pick', type: 'activity', title: '좋아요·안돼요: 급식 시간',
      method: '좋아요/안돼요: 급식 시간', tool: 'emotion', minutes: 13,
      levels: { easy: '장면 카드 3장을 좋아요·안돼요에 나누고, 놓으면 바로 알려 준다.', base: '장면 카드 5장을 나눈 뒤 확인한다.', challenge: '장면 5장을 나누고, 안돼요 장면을 고칠 행동을 골라 결과를 본다.' },
      activity: {
        title: '급식 시간 장면 나누고 고치기', tool: 'emotion',
        teacher: '"이 장면은 좋아요일까요, 안돼요일까요?" 장면 카드를 하나씩 읽어 주고 반 전체가 엄지나 X 손으로 먼저 보이게 한다. "돌아다니며 먹으면 친구랑 놀 수 있어요"라는 학생에게 "식판을 들고 다니다 부딪히면 어떻게 될까요?"라고 묻는다. 안돼요 장면을 어떻게 고치면 좋을지 함께 말해 본다.',
        task: '급식 장면을 나누고 고칠 행동을 골라요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { revealAfterCheck: true } },
        items: [
          { prompt: '급식 장면을 나누어요.', toolOptions: { mode: 'sort', slots: [{ id: 'ok', label: '좋아요' }, { id: 'no', label: '안돼요' }], cards: [C('walk', '돌아다니며 먹기'), C('thanks', '감사 인사'), C('throw', '음식 던지기'), C('chew', '꼭꼭 씹기'), C('sit', '앉아서 먹기')] }, target: { sort: { ok: ['thanks', 'chew', 'sit'], no: ['walk', 'throw'] } }, difficulty: 0.1,
            levels: {
              easy: { prompt: '급식 장면 3장을 나누어요.', toolOptions: { cards: [C('walk', '돌아다니며 먹기'), C('thanks', '감사 인사'), C('chew', '꼭꼭 씹기')] }, target: { sort: { ok: ['thanks', 'chew'], no: ['walk'] } } },
            } },
          { prompt: '친구가 음식을 던져요. 어떻게?', toolOptions: { mode: 'branch', situation: '옆 친구가 반찬을 던지려 해요.', choices: [{ id: 'stop', text: '"그만해" 말해요', result: '친구가 멈췄어요.', mood: '뿌듯함' }, { id: 'join', text: '나도 던져요', result: '음식이 바닥에 떨어졌어요.', mood: '걱정' }] }, target: { choice: 'stop' }, difficulty: 0.15,
            levels: { challenge: { toolOptions: { choices: [{ id: 'stop', text: '"그만해" 말해요', result: '친구가 멈췄어요.', mood: '뿌듯함' }, { id: 'join', text: '나도 던져요', result: '음식이 바닥에 떨어졌어요.', mood: '걱정' }, { id: 'laugh', text: '보고 웃어요', result: '친구가 또 던졌어요.', mood: '걱정' }] } } } },
          { prompt: '돌아다니며 먹어요. 어떻게?', toolOptions: { mode: 'branch', situation: '친구가 식판 들고 돌아다녀요.', choices: [{ id: 'sit', text: '"앉아서 먹자"', result: '함께 앉아 먹었어요.', mood: '편안함' }, { id: 'follow', text: '따라다녀요', result: '부딪혀 국이 쏟아졌어요.', mood: '놀람' }] }, target: { choice: 'sit' }, difficulty: 0.2,
            levels: { challenge: { toolOptions: { choices: [{ id: 'sit', text: '"앉아서 먹자"', result: '함께 앉아 먹었어요.', mood: '편안함' }, { id: 'follow', text: '따라다녀요', result: '부딪혀 국이 쏟아졌어요.', mood: '놀람' }, { id: 'run', text: '뛰어서 잡아요', result: '둘 다 넘어질 뻔했어요.', mood: '걱정' }] } } },
            conclude: '앉아서 꼭꼭 씹고, 감사 인사를 하고, 음식은 던지지 않아요.' },
        ],
      },
      worksheet: { items: [{ type: 'table', prompt: '좋으면 ○, 안 되면 ×를 써요.', columns: ['장면', '○ / ×'], cells: [['감사 인사', ''], ['음식 던지기', ''], ['앉아서 먹기', '']], answer: '○, ×, ○' }] },
    }),
    THANKS({
      id: 'food.e12.thanks-table.activity.thanks-card', type: 'activity', title: '고마움 카드 꾸미기',
      method: '고마움 카드 꾸미기', tool: 'collage', minutes: 14,
      levels: { easy: '하트 조각 2개를 붙인다.', base: '하트·잎(농부)·동그라미(조리사 모자) 조각 4개를 붙인다.', challenge: '조각을 붙이고, 카드에 붙일 고마움 말("맛있게 먹었어요")을 점검 칸에서 골라 표시한다.' },
      activity: {
        title: '조리사님·농부님께 고마움 카드 꾸미기', tool: 'collage',
        teacher: '"오늘 밥을 먹게 도와주신 분은 누구일까요?" 분홍 하트는 고마운 마음, 초록 잎은 농부님, 하얀 동그라미는 조리사님 모자로 정하고 칠판에 붙여 둔다. 하트만 잔뜩 붙이는 학생에게 "이 카드는 누구에게 드릴까요? 그분을 나타낼 조각도 붙여 볼까요?"라고 묻는다. 꾸민 뒤 카드에 쓸 말을 짝과 소리 내어 말해 본다.',
        task: '색종이 조각으로 고마움 카드를 꾸며요.', levels: { easy: { shapes: ['heart', 'leaf', 'circle'] }, base: { shapes: ['heart', 'leaf', 'circle', 'star', 'square'] }, challenge: {} },
        items: [
          { prompt: '분홍 하트 넷을 붙여요.', toolOptions: {}, target: { has: [{ shape: 'heart', color: '분홍', min: 4 }] }, difficulty: 0.1,
            levels: { easy: { prompt: '분홍 하트 둘을 붙여요.', target: { has: [{ shape: 'heart', color: '분홍', min: 2 }] } },
              challenge: { prompt: '하트 넷, 잎 둘을 붙여요.', target: { has: [{ shape: 'heart', color: '분홍', min: 4 }, { shape: 'leaf', color: '초록', min: 2 }] } } } },
          { prompt: '잎 둘, 하얀 모자 둘을 붙여요.', toolOptions: {}, target: { has: [{ shape: 'leaf', color: '초록', min: 2 }, { shape: 'circle', color: '하양', min: 2 }] }, difficulty: 0.15,
            levels: { easy: { prompt: '잎과 하얀 모자를 붙여요.', target: { has: [{ shape: 'leaf', color: '초록', min: 1 }, { shape: 'circle', color: '하양', min: 1 }] } } } },
          { prompt: '카드를 꾸미고 표시해요.', toolOptions: {}, target: { selfCheck: ['고마운 분을 붙였어요', '고마움을 말했어요'], minPieces: 4 }, difficulty: 0.2,
            levels: { easy: { prompt: '조각 2개로 꾸미고 표시해요.', target: { selfCheck: ['고마운 분을 붙였어요', '고마움을 말했어요'], minPieces: 2 } },
              challenge: { prompt: '꾸미고 고마움 말을 골라요.', target: { selfCheck: ['고마운 분을 붙였어요', '"맛있게 먹었어요"', '"고맙습니다"'], minPieces: 4 } } },
            conclude: '밥 한 그릇에는 농부님, 조리사님의 손길이 담겨 있어요.' },
        ],
      },
      worksheet: { items: [{ type: 'short', prompt: '고마운 분께 한마디 써요.' }] },
    }),
    THANKS({
      id: 'food.e12.thanks-table.wrap.clean-tray', type: 'wrap', title: '빈 식판 약속',
      method: '빈 식판 약속', tool: 'sortboard', minutes: 6,
      levels: { easy: '교사와 함께 약속 카드 하나를 "지킬래요" 바구니에 넣어 본다.', base: '약속 카드를 "지킬래요"·"안 해요" 바구니에 나누고, 내가 지킬 약속 둘을 활동지에 표시한다.', challenge: '집 식탁에서 지킬 약속도 하나 골라 쓴다.' },
      wrap: {
        teacher: '"오늘 배운 급식 약속을 바구니에 넣어 볼까요?" 출구 1번에서 약속 카드를 함께 읽고 나눈다. 출구 2번에는 내가 꼭 지킬 약속 하나를 쓰게 하되, 고른 약속은 맞고 틀림이 없다고 말한다. 남긴 음식이 있었는지 묻지 않고, "먹을 만큼 담으면 식판이 깨끗해져요"라고 말해 준다.',
        exitTicket: [
          { type: 'tool', tool: 'sortboard', options: { slots: ['지킬래요', '안 해요'], cards: [C('wash', '손 씻기'), C('throw', '음식 던지기'), C('thanks', '감사 인사'), C('dump', '몰래 버리기'), C('enough', '먹을 만큼')] }, prompt: '약속을 바구니에 나누어요.', target: { sort: { 지킬래요: ['wash', 'thanks', 'enough'], '안 해요': ['throw', 'dump'] } }, difficulty: 0.1 },
          { type: 'short', prompt: '내가 지킬 약속을 써요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '빈 식판 약속',
        items: [
          { type: 'check', prompt: '내가 지킬 약속에 ✓ 해요.', options: ['손 씻고 먹어요', '"잘 먹겠습니다" 인사해요', '먹을 만큼 담아요'] },
          { type: 'draw', prompt: '깨끗한 빈 식판을 그려요.' },
        ],
        easy: { note: '약속 하나만 골라도 좋아요.', items: [{ type: 'draw', prompt: '감사 인사하는 내 모습을 그려요.' }] },
      },
      notes: '빈 식판을 채점하거나 남긴 학생을 가리키지 않는다. 먹지 못하는 음식(알레르기 등)은 남겨도 된다고 말해 준다.',
    }),
    THANKS({
      id: 'food.e12.thanks-table.wrap.bow', type: 'wrap', title: '감사 인사 함께 하기',
      method: '감사 인사 함께 하기', tool: 'timer', minutes: 6,
      levels: { easy: '"잘 먹었습니다" 인사만 신호에 맞춰 함께 한다.', base: '인사 카드와 식판 정리 카드의 차례를 맞추고 동작으로 함께 한다.', challenge: '차례를 맞춘 뒤 옆 친구에게 고마움 한마디("같이 먹어서 좋았어")를 더한다.' },
      wrap: {
        teacher: '"선생님이 손뼉을 치면 다 같이 인사해요." 출구 1번에서 차례 카드를 놓은 뒤 신호에 맞춰 "잘 먹었습니다" 인사 → 수저 모으기 흉내 → 식판 들기 흉내를 한다. 출구 2번에서 "그냥 일어나요"를 고른 학생에게 "인사 한마디가 조리사님께 힘이 돼요"라고 말해 준다.',
        exitTicket: [
          CHANT('다 먹은 뒤 차례', ['"잘 먹었습니다"', '수저 모아요', '식판 정리']),
          { type: 'choice', prompt: '다 먹고 나면 무엇을 해요?', options: ['그냥 일어나요', '인사하고 정리해요'], answer: 1, difficulty: 0.1, explain: '"잘 먹었습니다" 인사하고 식판을 정리해요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '잘 먹었습니다',
        items: [
          { type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '다 먹고 나서 "잘 ___습니다" 인사해요.', answer: '먹었' },
          { type: 'draw', prompt: '식판을 정리하는 내 모습을 그려요.' },
        ],
      },
    }),
  ];

  PaperLessons.registerModules([...T_FIVE, ...T_SNACK, ...T_THANKS]);
})();
