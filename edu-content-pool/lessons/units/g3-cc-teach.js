/* 3학년 창체 법정교육 — 교육활동 존중 (1차시).
 * 근거: 교원의 지위 향상 및 교육활동 보호를 위한 특별법 제24조·같은 법 시행령 제21조(연 1회 이상 학생 대상 교육활동 침해행위 예방교육)(research-mandatory.md 표).
 * 3학년 범위: 수업 중 허락 없이 찍기·올리기, 무례한 말과 행동이 선생님과 친구의 배움을 해칠 수 있음을 알고, 속상하거나 불만이 있을 때는 바른 방법(때와 장소·고운 말·보호자와 함께)으로 말한다.
 * 처벌로 겁주지 않는다. 1학년(듣기·손 들기)·2학년(배움 방해하지 않기)과 겹치지 않게 '존중하며 내 생각 전하기'에 맞춘다. 장면·인물은 지은 것이다(가명 한 글자). */
(function () {
  const ID = 'g3-cc-teach', GRADE = 3, TITLE = '교육활동 존중';
  const UNIT = `g${GRADE}-창체-${ID.replace(/^g\d+-cc-/, '')}`;
  const base = (n) => ({
    id: `${ID}-${String(n).padStart(2, '0')}`, schema: 'edu-lesson.v1',
    catalog: { unit: UNIT, lesson: n },
    grade: GRADE, subject: '창체', unitTitle: TITLE,
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
  // 문항 틀: MS 나누기, MM 잇기, MP 고르기(mindmap) / EB 갈림길, ES 나누기, EM 잇기, EP 고르기(emotion) / SO 차례, SF 말풍선(story) / KS 식판 나누기, KP 고르기, KO 차례(kitchen) / TO 시간 띠 차례, TS 시간 띠 나누기(timeline) / WS·WF 낱말 카드(wordcards)
  const MS = (prompt, topic, slots, cards, sort, d, more) => ({ prompt, toolOptions: { topic, slots, cards }, target: { sort }, difficulty: d, ...more });
  const MM = (prompt, topic, slots, cards, match, d, more) => ({ prompt, toolOptions: { mode: 'match', topic, slots, cards }, target: { match }, difficulty: d, ...more });
  const MP = (prompt, topic, cards, pick, d, more) => ({ prompt, toolOptions: { mode: 'pick', topic, basket: topic, cards }, target: { pick }, difficulty: d, ...more });
  const EB = (prompt, situation, choices, choice, d, more) => ({ prompt, toolOptions: { mode: 'branch', situation, choices }, target: { choice }, difficulty: d, ...more });
  const ES = (prompt, slots, cards, sort, d, more) => ({ prompt, toolOptions: { mode: 'sort', slots, cards, weather: false }, target: { sort }, difficulty: d, ...more });
  const EM = (prompt, slots, cards, match, d, more) => ({ prompt, toolOptions: { mode: 'match', slots, cards }, target: { match }, difficulty: d, ...more });
  const EP = (prompt, basket, cards, pick, d, more) => ({ prompt, toolOptions: { mode: 'pick', basket, cards, weather: false }, target: { pick }, difficulty: d, ...more });
  const SO = (prompt, title, slots, cards, order, d, more) => ({ prompt, toolOptions: { title, slots, cards }, target: { order }, difficulty: d, ...more });
  const SF = (prompt, slots, cards, fill, d, more) => ({ prompt, toolOptions: { mode: 'fill', slots, cards }, target: { fill }, difficulty: d, ...more });
  const KS = (prompt, slots, cards, sort, d, more) => ({ prompt, toolOptions: slots ? { slots, groups: false, cards } : { cards }, target: { sort }, difficulty: d, ...more });
  const KP = (prompt, basket, cards, pick, d, more) => ({ prompt, toolOptions: { mode: 'pick', basket, cards }, target: { pick }, difficulty: d, ...more });
  const KO = (prompt, cards, order, d, more) => ({ prompt, toolOptions: { mode: 'order', cards }, target: { order }, difficulty: d, ...more });
  const TO = (prompt, axis, cards, order, d, more) => ({ prompt, toolOptions: { axis, cards }, target: { order }, difficulty: d, ...more });
  const TS = (prompt, axis, slots, cards, sort, d, more) => ({ prompt, toolOptions: { mode: 'sort', axis, slots, cards }, target: { sort }, difficulty: d, ...more });
  const C = (id, text, motif) => ({ id, text, motif });
  const LV = { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } };
  const LVB = { easy: { showBack: true }, base: {}, challenge: {} };
  const ACT = (id, title, minutes, tool, teacher, task, items) => ({
    id, title, minutes, tool, teacher, task, items,
    levels: items.some((it) => it.toolOptions && it.toolOptions.mode === 'branch') ? LVB : LV,
  });
  // 출구: XT 교구, XC 고르기, XS 짧은 글, MOOD 마음
  const XT = (tool, options, prompt, target, d = 0.2) => ({ type: 'tool', tool, options, ...(options.mode === 'branch' ? {} : { state: { at: {} } }), prompt, target, difficulty: d });
  const XC = (prompt, options, answer, explain, d = 0.15) => ({ type: 'choice', prompt, options, answer, difficulty: d, explain });
  const XS = (prompt) => ({ type: 'short', prompt });
  const MOOD = { type: 'mood', prompt: '오늘 공부를 마친 내 마음은 어떤가요?' };
  // 활동지
  const WT = (prompt, columns, cells, answer) => ({ type: 'table', prompt, columns, cells, answer });
  const WC = (prompt, options, answer) => ({ type: 'choice', prompt, options, answer });
  const WB = (prompt, text, answer) => ({ type: 'blank', prompt, text, answer });
  const WS = (prompt) => ({ type: 'short', prompt });
  const WD = (prompt) => ({ type: 'draw', prompt });
  const DIFF = {
    easy: '맞는 칸에 놓은 카드에 초록 테두리가 생기고, 갈림길 문항은 결과가 처음부터 보여요.',
    base: '모든 카드를 놓거나 보기를 고른 뒤 스스로 확인하고 고쳐요.',
    challenge: '카드 순서가 섞여 나오고, 그럴듯하지만 알맞지 않은 보기를 가려내요.',
  };
  // 도입 6 + 전개 27(활동 14+13) + 정리 7 = 40분
  const LESSON = (n, o) => Object.assign(base(n), {
    title: o.title, objective: o.objective,
    illustration: { prompt: PROMPT(o.draw), scene: SCENE(o.banner, o.extra || []) },
    stages: [
      { id: 'intro', title: '도입', minutes: 6, teacher: o.intro, student: o.student },
      { id: 'main', title: '전개', minutes: 27, activities: o.acts },
      { id: 'wrapup', title: '정리', minutes: 7, teacher: o.wrap, exitTicket: [...o.exit, MOOD] },
    ],
    worksheet: { title: o.wsTitle, items: o.ws }, differentiation: o.diff || DIFF, teacherNotes: o.notes,
  });
  PaperLessons.registerUnit({
    id: ID, schema: 'edu-unit.v1', catalogUnit: UNIT,
    grade: GRADE, subject: '창체', unitTitle: TITLE,
    flow: '3학년 교육활동 존중 단원은 선생님이 가르치고 친구가 배우는 시간을 해치는 행동을 알아보고, 속상하거나 생각이 다를 때도 존중하며 내 생각을 전하는 방법을 익히는 1차시입니다. 수업 중 허락 없이 사진·영상을 찍거나 올리기, 선생님께 무례한 말 하기, 친구의 발표를 비웃기가 왜 모두의 배움을 해치는지 까닭을 말하고, 불만이 있을 때 알맞은 때·고운 말·보호자와 함께 말하는 길을 갈림길에서 고릅니다. 근거는 교원의 지위 향상 및 교육활동 보호를 위한 특별법 제24조·같은 법 시행령 제21조(연 1회 이상 학생 대상 예방교육)입니다. 학급 규칙 만들기(자율·자치)와 정보통신윤리 학습과 연계해 운영할 수 있습니다(학교 결정).',
    refs: {},
    lessons: [
      LESSON(1, {
        title: '허락 없이 찍지 않고, 속상할 땐 바르게 말하기',
        objective: '허락 없는 촬영과 무례한 말이 선생님과 친구의 배움을 해칠 수 있음을 알고, 불만을 바른 방법으로 말할 수 있다.',
        draw: 'a paper classroom where a child lowers a tablet instead of filming the teacher, and another child talks politely with the teacher after class',
        banner: '존중하며 말해요', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }],
        intro: '"누가 허락 없이 내 모습을 찍어서 다른 사람에게 보여 주면 어떤 마음일까요?" 두세 명의 대답을 듣고(기다릴 반응: "싫어요", "부끄러워요") "선생님도, 친구도 똑같은 마음이에요"라고 말한다. "재밌으니까 괜찮아요"라는 반응에는 "찍힌 사람도 웃고 있을까요?"라고 되묻는다. 오늘은 모두의 배움을 지키는 행동과 속상할 때 바르게 말하는 방법을 알아본다고 밝힌다.',
        student: '선생님이나 친구에게 존중받는다고 느꼈던 때를 짝에게 하나 말해 봐요.',
        acts: [
          ACT('a1', '활동 1. 배움을 지키는 행동 가려내기', 14, 'mindmap',
            '"이 행동은 선생님과 친구의 배움을 지킬까요, 해칠까요?" 1번에서 "몰래 찍어 단체방에 올려요"를 장난으로 여기는 학생에게 "찍힌 사람이 원하지 않으면 마음을 다치게 하고 수업도 멈춰요"라고 짚는다. 2번은 까닭을 잇는 문항이다. 3번은 선생님께 하는 말을 존중하는 말과 무례한 말로 고른다.',
            '교실 행동을 나누고 그 까닭을 이어요.', [
              MS('행동을 배움을 지키는 것과 해치는 것으로 나누어 보세요.', '수업 시간', ['배움을 지켜요', '배움을 해쳐요'], ['허락받고 사진 찍기', '몰래 찍어 올리기', '발표 친구 비웃기', '질문은 손 들고'], { '배움을 지켜요': ['허락받고 사진 찍기', '질문은 손 들고'], '배움을 해쳐요': ['몰래 찍어 올리기', '발표 친구 비웃기'] }, 0.15),
              MM('행동과 그 까닭을 이어 보세요. 맞지 않는 카드는 남겨요.', '왜 안 될까', [{ id: 's1', label: '수업 장면을 몰래 찍어요' }, { id: 's2', label: '선생님께 비꼬는 말을 해요' }, { id: 's3', label: '발표 중 친구를 흉내 내요' }], ['찍힌 사람이 다쳐요', '선생님 마음이 다쳐요', '친구가 발표를 멈춰요', '아무 일 없어요'], { s1: '찍힌 사람이 다쳐요', s2: '선생님 마음이 다쳐요', s3: '친구가 발표를 멈춰요' }, 0.2),
              MP('선생님께 할 존중하는 말만 골라 담아 보세요.', '존중하는 말', ['"다시 설명해 주세요"', '"제 생각은 달라요"', '"그걸 왜 해요?"', '"재미없어요"'], ['"다시 설명해 주세요"', '"제 생각은 달라요"'], 0.25,
                { conclude: '허락 없이 찍지 않고, 생각이 달라도 존중하는 말로 해요.' }),
            ]),
          ACT('a2', '활동 2. 속상할 때 바르게 말하는 갈림길', 13, 'emotion',
            '"속상한 마음은 그대로 둘 수 없어요. 어떻게 전하면 좋을까요?" 결과 칸을 읽고 까닭을 짝에게 말하게 한다. 1번은 모둠 점수에 속상한 장면, 2번은 친구가 수업 장면을 찍자고 하는 장면, 3번은 집에 가서 보호자에게 속상함을 말하는 장면이다. 3번에서 보호자와 함께 선생님께 차분히 여쭙는 길이 있다는 점을 짚는다.',
            '속상할 때 어떻게 말할지 고르고 결과를 봐요.', [
              EB('모둠 점수가 생각보다 낮아 속상해요.', '준이 모둠이 열심히 했는데 점수가 생각보다 낮아요. 준이가 속상해요.', [
                { id: 'shout', text: '수업 중에 "불공평해요!" 소리쳐요', result: '수업이 멈추고 교실 분위기가 굳어요.', mood: '놀람', why: '속상할 때는 알맞은 때에 고운 말로 여쭤요.' },
                { id: 'ask', text: '쉬는 시간에 까닭을 여쭤요', result: '선생님이 기준을 설명해 주시고 준이가 다음 방법을 알게 돼요.', mood: '편안함' },
              ], 'ask', 0.15),
              EB('친구가 수업 장면을 찍자고 해요.', '실험 시간에 친구가 "선생님 실수하는 거 찍어서 올리자" 하고 귓속말을 해요.', [
                { id: 'no', text: '"허락 없이 찍으면 안 돼" 해요', result: '친구가 기기를 내려놓고 함께 실험해요.', mood: '뿌듯함' },
                { id: 'yes', text: '같이 찍어요', result: '영상이 퍼져 선생님과 반 모두 마음이 무거워져요.', mood: '슬픔', why: '허락 없이 찍고 올리면 사람의 마음을 다치게 해요.' },
              ], 'no', 0.2),
              EB('집에서 보호자에게 속상한 일을 이야기해요.', '하나가 오늘 자리 바꾸기가 속상했다고 보호자에게 말해요.', [
                { id: 'together', text: '함께 선생님께 차분히 여쭤요', result: '선생님이 까닭을 알려 주시고 하나 마음이 풀려요.', mood: '고마움' },
                { id: 'post', text: '단체방에 선생님 흉을 봐요', result: '소문이 퍼지고 하나도 선생님도 마음이 다쳐요.', mood: '속상함', why: '흉보기 대신 직접 차분히 여쭤요.' },
                { id: 'hide', text: '아무 말 없이 참아요', result: '속상함이 계속 마음에 남아요.', mood: '걱정', why: '속상한 마음은 바른 방법으로 말해도 괜찮아요.' },
              ], 'together', 0.25, { conclude: '속상할 때는 알맞은 때에, 고운 말로, 필요하면 보호자와 함께 여쭤요.' }),
            ]),
        ],
        wrap: '"오늘 알게 된 바르게 말하는 방법 세 가지는 무엇이었나요?" 알맞은 때·고운 말·보호자와 함께를 칠판에 쓴다. 출구 1번에서 몰래 찍는 쪽을 고른 학생에게 찍힌 사람의 마음을 다시 떠올리게 한다. 2번은 생각이 달라도 존중하며 말할 수 있다는 점으로 정리한다.',
        exit: [
          XT('emotion', { mode: 'branch', situation: '체육 시간에 친구가 넘어진 선생님을 찍으려고 해요.', choices: [{ id: 'a', text: '"찍지 말자" 말해요', result: '친구가 기기를 넣고 선생님께 괜찮으시냐고 여쭤요.', mood: '고마움' }, { id: 'b', text: '모르는 척해요', result: '영상이 퍼져 선생님이 속상해하세요.', mood: '속상함', why: '허락 없이 찍는 것을 말려요.' }] }, '어떻게 하면 좋을까요?', { choice: 'a' }, 0.15),
          XC('선생님 생각과 내 생각이 다를 때는 어떻게 할까요?', ['소리쳐 따져요', '"제 생각은 달라요" 하고 고운 말로 말해요', '단체방에 흉봐요'], 1, '생각이 달라도 존중하는 말로 전할 수 있어요.'),
          XS('속상한 일이 있을 때 내가 쓸 바른 말하기 방법을 한 가지 쓰세요.'),
        ],
        wsTitle: '존중하며 말해요',
        ws: [
          WT('배움을 지키면 ○, 해치면 ×를 쓰세요.', ['행동', '○ / ×'], [['허락받고 사진 찍기', ''], ['몰래 찍어 올리기', ''], ['"다시 설명해 주세요"', ''], ['발표 친구 흉내 내기', '']], '○, ×, ○, ×'),
          WC('모둠 점수가 속상할 때 알맞은 행동에 ○ 하세요.', ['수업 중 소리치기', '쉬는 시간에 여쭤 보기', '단체방에 흉보기'], '쉬는 시간에 여쭤 보기'),
          WB('빈칸에 알맞은 말을 쓰세요.', '다른 사람을 찍을 때는 먼저 ___를 받아요.', '허락'),
          WS('"그걸 왜 해요?"를 존중하는 말로 바꾸어 쓰세요.'),
        ],
        notes: '자주 보이는 어려움: ① 촬영·게시를 장난으로 여긴다 → 찍힌 사람의 마음과 수업이 멈추는 결과를 보게 한다. ② 존중을 "참기"로 여긴다 → 속상한 마음은 바른 방법으로 말해도 된다는 점을 분명히 한다. 법적 처벌로 겁주지 않고, 특정 학생이나 실제 사건을 예로 들지 않는다.',
      }),
    ],
  });
})();
