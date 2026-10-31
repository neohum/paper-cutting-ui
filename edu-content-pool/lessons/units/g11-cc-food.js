/* 고2 창체 법정교육 — 영양·식생활 (2차시). 근거: 학교급식법 제13조·식생활교육지원법 제26조(건강한 식생활·영양교육 연 2회 이상). 영양성분 표시의 기준량과 1일 영양성분 기준치 비율, 배달·외식 메뉴 고르기를 다룬다. 제품별 수치는 지어낸 예시이며 실제 제품을 가리키지 않는다.
 * 장면·인물은 이 단원을 위해 직접 지은 것이다(가명). 학생 자신의 경험을 털어놓게 하는 문항은 두지 않는다. */
(function () {
  const G = 11; const CODE = 'food';
  const UNIT = `g${G}-창체-${CODE}`;
  const TITLE = '영양·식생활';
  const base = (n) => ({
    id: `g${G}-cc-${CODE}-${String(n).padStart(2, '0')}`, schema: 'edu-lesson.v1',
    catalog: { unit: UNIT, lesson: n },
    grade: G, subject: '창체', unitTitle: TITLE,
    standards: [],
    minutes: 40,
    formats: ['chromebook', 'projector', 'print'],
  });
  const PROMPT = (what) => `Layered paper-cut illustration of ${what}, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.`;
  const SCENE = (text, extra = []) => ({ viewBox: [480, 270], layers: [
    { motif: 'sun', x: 410, y: 58, s: 0.8 }, { motif: 'cloud', x: 120, y: 52 }, { motif: 'hills', y: 204 },
    { motif: 'house', x: 96, y: 214, color: 'buttercup', s: 0.9 }, { motif: 'tree', x: 380, y: 214 }, ...extra,
    { motif: 'text', x: 240, y: 140, text, size: 22 },
  ] });
  // 활동 문항 — 한 활동은 교구 하나로만 돈다(mindmap: MS·MM·MP / emotion: EB·ES / story: SO)
  const MS = (prompt, topic, slots, cards, sort, d, more) => ({ prompt, toolOptions: { mode: 'sort', topic, slots, cards }, target: { sort }, difficulty: d, ...more });
  const MM = (prompt, topic, slots, cards, match, d, more) => ({ prompt, toolOptions: { mode: 'match', topic, slots, cards }, target: { match }, difficulty: d, ...more });
  const MP = (prompt, topic, cards, pick, d, more) => ({ prompt, toolOptions: { mode: 'pick', topic, basket: topic, cards }, target: { pick }, difficulty: d, ...more });
  const EB = (prompt, situation, choices, choice, d, more) => ({ prompt, toolOptions: { mode: 'branch', situation, choices }, target: { choice }, difficulty: d, ...more });
  const ES = (prompt, situation, feeling, level, d, more) => ({ prompt, toolOptions: { mode: 'scale', situation, feeling }, target: { level }, difficulty: d, ...more });
  const SO = (prompt, title, slots, cards, order, d, more) => ({ prompt, toolOptions: { mode: 'order', title, slots, cards }, target: { order }, difficulty: d, ...more });
  const SF = (prompt, title, slots, cards, fill, d, more) => ({ prompt, toolOptions: { mode: 'fill', title, slots, cards }, target: { fill }, difficulty: d, ...more });
  const C = (id, text, motif) => ({ id, text, motif });
  const TALK = (prompt) => ({ prompt, free: true, talk: true, difficulty: 0 });
  const LV = { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } };
  const LVB = { easy: { showBack: true }, base: {}, challenge: {} };
  // 출구 질문
  const XS = (prompt, topic, slots, cards, sort, d = 0.2) => ({ type: 'tool', tool: 'mindmap', options: { mode: 'sort', topic, slots, cards }, state: { at: {} }, prompt, target: { sort }, difficulty: d });
  const XB = (prompt, situation, choices, choice, d = 0.2) => ({ type: 'tool', tool: 'emotion', options: { mode: 'branch', situation, choices }, state: { choice: null }, prompt, target: { choice }, difficulty: d });
  const XM = (prompt, topic, slots, cards, match, d = 0.2) => ({ type: 'tool', tool: 'mindmap', options: { mode: 'match', topic, slots, cards }, state: { at: {} }, prompt, target: { match }, difficulty: d });
  const XO = (prompt, title, slots, cards, order, d = 0.2) => ({ type: 'tool', tool: 'story', options: { mode: 'order', title, slots, cards }, state: { at: {} }, prompt, target: { order }, difficulty: d });
  const XC = (prompt, options, answer, explain, d = 0.2) => ({ type: 'choice', prompt, options, answer, difficulty: d, explain });
  const XT = (prompt) => ({ type: 'short', prompt });
  const MOOD = { type: 'mood', prompt: '오늘 수업을 마친 내 마음은 어떤가요?' };
  // 도입 시연
  const DEMO = (topic, slots, cards, sort) => ({ tool: 'mindmap', options: { mode: 'sort', topic, slots, cards, shuffle: false }, sequence: [{ sort }] });
  const DIFF = {
    easy: '맞는 칸에 놓은 카드에 초록 테두리가 생기고, 갈림길 문항은 결과 칸이 처음부터 보여요.',
    base: '모든 카드를 놓은 뒤 확인을 눌러 스스로 고쳐요.',
    challenge: '카드 순서가 섞여 나오고, 그럴듯하지만 맞지 않는 보기를 근거를 들어 가려내요.',
  };
  // 도입 6 + 전개 27 + 정리 7 = 40분
  const LESSON = (n, o) => Object.assign(base(n), {
    title: o.title, objective: o.objective,
    illustration: { prompt: PROMPT(o.draw), scene: SCENE(o.banner, o.extra) },
    stages: [
      { id: 'intro', title: '도입', minutes: 6, teacher: o.intro.teacher, student: o.intro.student, demo: o.intro.demo },
      { id: 'main', title: '전개', minutes: 27, activities: o.acts },
      { id: 'wrapup', title: '정리', minutes: 7, teacher: o.wrap.teacher, exitTicket: o.wrap.exit },
    ],
    worksheet: o.ws, differentiation: o.diff || DIFF, teacherNotes: o.notes,
  });

  PaperLessons.registerUnit({
    id: `g${G}-cc-${CODE}`, schema: 'edu-unit.v1', catalogUnit: UNIT,
    grade: G, subject: '창체', unitTitle: TITLE,
    flow: '고2 식생활 단원은 표시를 "읽는 것"에서 "제대로 비교하는 것"으로 나아갑니다. 1차시에는 영양성분 표시가 총 내용량 기준인지, 100g당인지, 단위 내용량 기준인지에 따라 같은 숫자도 뜻이 달라진다는 점을 확인하고, 1일 영양성분 기준치에 대한 비율(%)을 읽어 두 제품을 공정하게 비교합니다. 2차시에는 배달 앱과 외식 메뉴판에서 짜고 기름진 메뉴를 줄이는 선택, 양을 나누는 방법을 갈림길로 비교합니다. 중학교 영양성분표 비교와 고1 편의점 한 끼를 이어받으며, 숫자는 모두 지어낸 예시로 다룹니다.',
    refs: {},
    lessons: [
      LESSON(1, {
        title: '기준량이 다른 영양성분 표시를 공정하게 비교하기',
        objective: '영양성분 표시의 기준량(총 내용량·100g당·단위 내용량)을 확인하고 1일 영양성분 기준치에 대한 비율을 읽어 두 식품을 공정하게 비교할 수 있다.',
        draw: 'two paper-cut snack packages side by side with magnifying glass over their nutrition labels',
        banner: '기준부터 확인해요', extra: [{ motif: 'star', x: 330, y: 100, color: 'buttercup', s: 0.6 }],
        intro: {
          teacher: '"과자 ㄱ은 나트륨 200mg, 과자 ㄴ은 나트륨 300mg이라고 적혀 있어요. 어느 쪽이 덜 짤까요?" 대부분 ㄱ을 고르면, ㄱ은 100g당, ㄴ은 한 봉지(총 내용량 60g) 기준이라는 조건을 덧붙인다(가상 수치). "숫자가 작으면 덜 짠 거죠"라는 생각에 "무엇을 기준으로 잰 숫자인지 먼저 봐야 하지 않을까요?"라고 되묻는다. 오늘은 기준을 맞춰 비교하는 법을 익힌다고 밝힌다.',
          student: '과자 봉지 뒷면에서 가장 먼저 눈이 가는 숫자가 무엇인지 짝과 말해 봅시다.',
          demo: DEMO('영양성분 표시의 기준', ['기준량', '영양성분'], ['총 내용량 60g', '나트륨 300mg'], { '기준량': ['총 내용량 60g'], '영양성분': ['나트륨 300mg'] }),
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 표시의 기준량 찾고 뜻 잇기', minutes: 13, tool: 'mindmap',
            teacher: '"이 숫자는 얼마만큼을 먹었을 때의 양일까요?" 표 맨 위 기준량 칸을 먼저 손가락으로 짚게 한다. 2번에서 "1일 영양성분 기준치에 대한 비율"을 "하루에 이만큼 먹어야 한다"로 잇는 학생에게 "하루 기준치 가운데 이 제품이 차지하는 몫이에요"라고 바로잡는다. 비율이 높을수록 그 영양성분이 많다는 뜻이라는 점을 짚는다.',
            task: '영양성분 표시의 기준량과 비율이 알려 주는 것을 이어요.',
            levels: LV,
            items: [
              MM('표시와 그 뜻을 이어 보세요. 맞지 않는 카드는 남겨요.', '기준량 읽기', [{ id: 'b1', label: '총 내용량 기준' }, { id: 'b2', label: '100g당' }, { id: 'b3', label: '1개(30g)당' }], ['한 봉지를 다 먹을 때의 양', '100g을 먹을 때의 양', '한 개를 먹을 때의 양', '하루에 먹어야 할 양'], { b1: '한 봉지를 다 먹을 때의 양', b2: '100g을 먹을 때의 양', b3: '한 개를 먹을 때의 양' }, 0.25),
              MS('영양성분 표시 문장을 맞는 것과 틀린 것으로 나누어 보세요.', '% 기준치 읽기', ['맞는 해석', '틀린 해석'], ['비율이 높으면 그 성분이 많아요', '하루 기준치 중 이 제품의 몫', '비율만큼 꼭 먹어야 해요', '%가 작으면 무조건 건강해요'], { '맞는 해석': ['비율이 높으면 그 성분이 많아요', '하루 기준치 중 이 제품의 몫'], '틀린 해석': ['비율만큼 꼭 먹어야 해요', '%가 작으면 무조건 건강해요'] }, 0.3),
              MP('두 제품을 공정하게 비교하려고 먼저 확인할 것만 골라 담아 보세요.', '공정한 비교', ['두 표시의 기준량', '실제로 먹을 양', '같은 성분의 % 비율', '포장 색깔'], ['두 표시의 기준량', '실제로 먹을 양', '같은 성분의 % 비율'], 0.25,
                { conclude: '기준량이 다르면 숫자를 바로 비교할 수 없어요. 기준을 맞추거나 % 비율을 함께 봐요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 가상 제품 비교로 판단하기', minutes: 14, tool: 'mindmap',
            teacher: '"한 봉지를 다 먹는다면 실제로는 얼마를 먹는 걸까요?" 가상의 표시를 보며 한 봉지를 다 먹는 상황과 반만 먹는 상황을 비교하게 한다. 1번에서 100g당 숫자를 그대로 비교하는 학생에게 "총 내용량이 50g이면 100g당 숫자의 절반을 먹는 거예요"라고 짚는다. 3번은 짝과 말로 나눈다.',
            task: '가상의 제품 표시를 보고 상황에 맞게 판단해요.',
            levels: LV,
            items: [
              MM('상황과 알맞은 판단을 이어 보세요. 맞지 않는 카드는 남겨요.', '표시로 판단하기', [{ id: 'q1', label: '50g 봉지·100g당 400mg' }, { id: 'q2', label: '1개당 당류 10g, 하루 3개' }, { id: 'q3', label: '총 내용량 기준 열량 500kcal' }], ['한 봉지에 나트륨 200mg', '하루 당류 30g', '다 먹으면 500kcal', '한 봉지에 나트륨 800mg'], { q1: '한 봉지에 나트륨 200mg', q2: '하루 당류 30g', q3: '다 먹으면 500kcal' }, 0.35),
              MS('비교 방법을 두 가지로 나누어 보세요.', '두 과자 비교하기', ['공정한 비교', '잘못된 비교'], ['같은 100g 기준으로 바꿔요', '% 기준치를 나란히 봐요', '기준이 달라도 숫자만 봐요', '앞면 "저염" 글자만 믿어요'], { '공정한 비교': ['같은 100g 기준으로 바꿔요', '% 기준치를 나란히 봐요'], '잘못된 비교': ['기준이 달라도 숫자만 봐요', '앞면 "저염" 글자만 믿어요'] }, 0.3,
                { conclude: '앞면 광고 문구보다 뒷면 표시의 기준량과 비율이 더 정확한 정보예요.' }),
              TALK('짝과 함께 "간식을 고를 때 뒷면에서 확인할 세 가지"를 차례대로 정해 말하고 "다 했어요"를 누르세요.'),
            ],
          },
        ],
        wrap: {
          teacher: '"다음에 과자를 고를 때 가장 먼저 볼 칸은 어디인가요?" 출구 1번에서 숫자만 보고 고른 학생에게는 기준량 칸을 다시 짚게 한다. 계산이 어려운 학생에게는 "기준이 같은지만 확인해도 절반은 성공이에요"라고 말해 준다.',
          exit: [
            XM('표시와 그 뜻을 이어 보세요. 맞지 않는 카드는 남겨요.', '표시 다시 읽기', [{ id: 'e1', label: '1일 영양성분 기준치 비율' }, { id: 'e2', label: '총 내용량' }], ['하루 기준 가운데 이 제품의 몫', '포장 안에 든 전체 양', '꼭 먹어야 할 양'], { e1: '하루 기준 가운데 이 제품의 몫', e2: '포장 안에 든 전체 양' }),
            XC('기준량이 다른 두 제품을 비교하는 방법으로 알맞은 것은?', ['숫자가 작은 쪽을 고른다', '같은 기준으로 바꾸거나 % 비율을 비교한다', '포장이 큰 쪽을 고른다'], 1, '기준을 맞춰야 공정한 비교가 돼요.'),
            XT('100g당 표시만 있는 과자를 한 봉지 다 먹을 때 확인해야 할 것을 한 문장으로 쓰세요.'),
          ],
        },
        ws: {
          title: '기준량과 % 기준치 읽기',
          items: [
            { type: 'table', prompt: '기준량에 따라 뜻을 쓰세요.', columns: ['표시', '뜻'], cells: [['총 내용량 기준', ''], ['100g당', ''], ['1개당', '']], answer: '한 봉지 전체 / 100g 먹을 때 / 한 개 먹을 때' },
            { type: 'choice', prompt: '100g당 나트륨 400mg인 과자 50g 한 봉지의 나트륨은?', options: ['200mg', '400mg', '800mg'], answer: '200mg' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '1일 영양성분 기준치에 대한 비율은 하루 기준치 가운데 이 제품이 차지하는 ___이다.', answer: '몫(비율)' },
            { type: 'short', prompt: '앞면 광고 문구보다 뒷면 표시를 먼저 보아야 하는 까닭을 쓰세요.' },
          ],
        },
        notes: '자주 보이는 어려움: ① 기준량을 확인하지 않고 숫자만 비교한다 → 표 맨 위 기준량부터 짚게 한다. ② % 기준치를 섭취 목표로 오해한다 → 하루 기준 가운데 몫이라는 뜻을 반복한다. ③ 수치는 모두 가상이며 실제 제품명을 쓰지 않는다. 계산이 부담인 학생은 "기준이 같은가"만 판단하게 한다.',
      }),
      LESSON(2, {
        title: '배달 앱과 메뉴판에서 덜 짜고 덜 기름진 선택 하기',
        objective: '배달·외식 메뉴의 영양 정보와 조리법을 보고 짜고 기름진 선택을 줄이며, 양을 나누고 채소를 더하는 방법을 고를 수 있다.',
        draw: 'a smartphone delivery app screen made of layered paper next to a menu board and a bowl of bibimbap',
        banner: '메뉴를 고르는 힘', extra: [{ motif: 'flower', x: 320, y: 222, color: 'rose' }],
        intro: {
          teacher: '"친구들과 배달 음식을 시킬 때 무엇을 기준으로 메뉴를 고르나요?" 대답을 듣고(기다릴 반응: "맛이요", "가격이요", "리뷰요") 칠판에 적는다. "건강은 집밥에서 챙기면 돼요"라는 말이 나오면 "고등학생이 일주일에 몇 번쯤 밖에서 먹을까요? 그 끼니도 내 몸이 되지 않을까요?"라고 되묻는다. 오늘은 메뉴판에서도 몸을 챙기는 선택을 해 본다고 밝힌다.',
          student: '자주 먹는 외식 메뉴 하나를 떠올리고, 그 메뉴가 짤지 기름질지 짝과 짐작해 봅시다.',
          demo: DEMO('조리법', ['기름을 적게 써요', '기름을 많이 써요'], ['찜', '튀김'], { '기름을 적게 써요': ['찜'], '기름을 많이 써요': ['튀김'] }),
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 조리법과 곁들임으로 메뉴 읽기', minutes: 12, tool: 'mindmap',
            teacher: '"메뉴 이름에서 조리법을 알 수 있을까요?" 튀김·볶음·구이·찜·무침 같은 말에서 기름과 소스의 양을 짐작하게 한다. 2번에서 소스를 "따로" 받는 것이 왜 좋은지 묻고, 찍어 먹으면 양을 스스로 정할 수 있다는 점을 짚는다. 외식 메뉴를 나쁘다고 단정하지 않는다.',
            task: '메뉴 이름과 주문 방법을 보고 덜 짜고 덜 기름진 쪽을 가려요.',
            levels: LV,
            items: [
              MS('메뉴를 조리법에 따라 나누어 보세요.', '메뉴 이름 속 조리법', ['기름을 적게 써요', '기름을 많이 써요'], ['닭가슴살 구이', '두부찜', '모둠 튀김', '치즈 돈가스'], { '기름을 적게 써요': ['닭가슴살 구이', '두부찜'], '기름을 많이 써요': ['모둠 튀김', '치즈 돈가스'] }, 0.2),
              MP('나트륨과 지방을 줄이는 주문 방법만 골라 담아 보세요.', '주문할 때 한마디', ['소스는 따로 주세요', '국물은 적게 주세요', '채소를 더해 주세요', '치즈 추가해 주세요'], ['소스는 따로 주세요', '국물은 적게 주세요', '채소를 더해 주세요'], 0.25),
              MM('메뉴와 곁들이면 좋은 것을 이어 보세요. 맞지 않는 카드는 남겨요.', '곁들임으로 채우기', [{ id: 'm1', label: '짜장면' }, { id: 'm2', label: '치킨' }, { id: 'm3', label: '떡볶이' }], ['오이 무침', '양배추 샐러드', '삶은 달걀', '감자튀김'], { m1: '오이 무침', m2: '양배추 샐러드', m3: '삶은 달걀' }, 0.3,
                { conclude: '조리법을 읽고, 소스를 따로 받고, 채소·단백질을 곁들이면 외식도 균형에 가까워져요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 배달·외식 갈림길에서 고르기', minutes: 15, tool: 'emotion',
            teacher: '"이 선택은 오늘 저녁과 내일 아침의 몸에 어떤 영향을 줄까요?" 결과 칸을 읽고 이유를 말하게 한다. 2번에서 "남기면 아까우니 다 먹는다"를 고른 학생에게 "남는 음식을 덜어 두는 방법은 없을까요?"라고 묻는다. 친구와의 식사 분위기를 해치지 않으면서 고를 수 있는 말을 함께 찾는다.',
            task: '배달·외식 장면에서 몸을 챙기는 선택을 골라요.',
            levels: LVB,
            items: [
              EB('어떤 메뉴를 고를까요?', '야자 뒤 친구들이 늦은 밤 야식으로 치킨과 피자를 시키자고 해요.', [{ id: 'all', text: '두 판 다 시켜 밤늦게 먹어요', result: '속이 더부룩해 잠을 설쳐요', mood: '걱정', why: '늦은 밤 기름진 음식은 잠을 방해해요.' }, { id: 'light', text: '한 가지만 나누고 샐러드를 더해요', result: '즐겁게 먹고 편히 자요', mood: '평온' }], 'light', 0.2),
              EB('남은 음식을 어떻게 할까요?', '분식 2인분을 혼자 시켰더니 양이 너무 많아요.', [{ id: 'finish', text: '아까워서 끝까지 다 먹어요', result: '배가 너무 불러 힘들어요', mood: '속상함', why: '배부름을 넘겨 먹으면 몸에 부담이 돼요.' }, { id: 'save', text: '덜어서 냉장 보관해요', result: '다음 끼니에 알맞게 먹어요', mood: '평온' }, { id: 'trash', text: '남은 것은 바로 버려요', result: '음식물 쓰레기가 늘어요', mood: '걱정', why: '안전하게 보관하면 버리지 않아도 돼요.' }], 'save', 0.25),
              EB('무엇이라고 주문할까요?', '국밥집에서 주문하는데, 하윤이는 요즘 짜게 먹는 것이 마음에 걸려요.', [{ id: 'salt', text: '소금·양념을 더 넣어 먹어요', result: '물을 계속 찾게 돼요', mood: '걱정', why: '양념을 더하면 나트륨이 크게 늘어요.' }, { id: 'less', text: '간은 따로 하고 국물은 남겨요', result: '맛있게 먹고 덜 짜요', mood: '평온' }], 'less', 0.3,
                { conclude: '양을 나누고, 간을 스스로 정하고, 남은 음식은 안전하게 보관하는 것이 외식 시대의 식생활 기술이에요.' }),
            ],
          },
        ],
        wrap: {
          teacher: '"다음 주 외식이나 배달에서 써 볼 한마디는 무엇인가요?" 출구 1번에서 튀김을 "적게 써요"에 넣은 학생에게는 조리법 낱말을 다시 읽게 한다. 친구들과의 식사는 즐거움도 중요하니 한 가지씩 바꿔 보자고 말해 준다.',
          exit: [
            XS('주문 방법을 두 가지로 나누어 보세요.', '외식할 때', ['몸을 챙겨요', '부담을 키워요'], ['소스 따로 받기', '채소 곁들이기', '국물 다 마시기', '야식 두 판 시키기'], { '몸을 챙겨요': ['소스 따로 받기', '채소 곁들이기'], '부담을 키워요': ['국물 다 마시기', '야식 두 판 시키기'] }),
            XC('외식에서 나트륨을 줄이는 방법으로 가장 알맞은 것은?', ['양념을 더 넣는다', '국물은 남기고 간은 스스로 정한다', '짠 반찬을 더 받는다'], 1, '국물과 양념 조절이 나트륨을 줄이는 가장 쉬운 방법이에요.'),
            XT('친구들과 배달 음식을 시킬 때 몸을 챙기며 할 수 있는 말을 한 문장으로 쓰세요.'),
          ],
        },
        ws: {
          title: '배달·외식 메뉴 고르기',
          items: [
            { type: 'table', prompt: '메뉴 이름에서 조리법을 찾아 쓰세요.', columns: ['메뉴', '조리법', '기름 양'], cells: [['두부찜', '', ''], ['모둠 튀김', '', ''], ['닭가슴살 구이', '', '']], answer: '찜·적음 / 튀김·많음 / 구이·적음' },
            { type: 'choice', prompt: '지방과 나트륨을 줄이는 주문에 ○ 하세요.', options: ['치즈 추가', '소스 따로', '양념 더'], answer: '소스 따로' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '남은 음식은 덜어서 ___ 보관하면 다음 끼니에 알맞게 먹을 수 있다.', answer: '냉장' },
            { type: 'short', prompt: '외식할 때 나만의 식생활 원칙 두 가지를 쓰세요.' },
          ],
        },
        notes: '자주 보이는 어려움: ① 외식은 무조건 나쁘다고 여긴다 → 조리법·곁들임·양 조절로 바꿀 수 있음을 보여 준다. ② 남기면 낭비라며 과식한다 → 안전한 보관을 대안으로 제시한다. ③ 가정의 식사 형편을 묻거나 발표시키지 않는다.',
      }),
    ],
  });
})();
