/* 6학년 창체 법정교육 — 교육활동 존중(침해 예방) (1차시). 근거: 교원의 지위 향상 및 교육활동 보호를 위한 특별법 제24조·시행령 제21조(연 1회 이상). 온라인 공간의 존중에 초점, 장면·인물은 가상(가명 한 글자).
 */
(function () {
  const G = 6, CODE = 'teach';
  const UNIT = `g${G}-창체-${CODE}`;
  const TITLE = '교육활동 존중(침해 예방)';
  const base = (n) => ({
    id: `g${G}-cc-${CODE}-0${n}`, schema: 'edu-lesson.v1',
    catalog: { unit: UNIT, lesson: n },
    grade: G, subject: '창체', unitTitle: TITLE,
    standards: [],
    minutes: 40,
    formats: ['chromebook', 'projector', 'print'],
  });
  const PROMPT = (what) => `Layered paper-cut illustration of ${what}, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.`;
  const SCENE = (text, extra = []) => ({ viewBox: [480, 270], layers: [
    { motif: 'sun', x: 410, y: 58, s: 0.8 }, { motif: 'cloud', x: 120, y: 52 }, { motif: 'hills', y: 204 },
    { motif: 'house', x: 96, y: 214, color: 'sky', s: 0.9 }, { motif: 'tree', x: 380, y: 214 }, ...extra,
    { motif: 'text', x: 240, y: 140, text, size: 22 },
  ] });
  const MS = (prompt, topic, slots, cards, sort, d, more) => ({ prompt, toolOptions: { topic, slots, cards }, target: { sort }, difficulty: d, ...more });
  const MM = (prompt, topic, slots, cards, match, d, more) => ({ prompt, toolOptions: { mode: 'match', topic, slots, cards }, target: { match }, difficulty: d, ...more });
  const MP = (prompt, topic, cards, pick, d, more) => ({ prompt, toolOptions: { mode: 'pick', topic, basket: topic, cards }, target: { pick }, difficulty: d, ...more });
  const EB = (prompt, situation, choices, choice, d, more) => ({ prompt, toolOptions: { mode: 'branch', situation, choices }, target: { choice }, difficulty: d, ...more });
  const EM = (prompt, slots, cards, match, d, more) => ({ prompt, toolOptions: { mode: 'match', slots, cards }, target: { match }, difficulty: d, ...more });
  const ES = (prompt, slots, cards, sort, d, more) => ({ prompt, toolOptions: { mode: 'sort', slots, cards, weather: false }, target: { sort }, difficulty: d, ...more });
  const EP = (prompt, basket, cards, pick, d, more) => ({ prompt, toolOptions: { mode: 'pick', basket, cards, weather: false }, target: { pick }, difficulty: d, ...more });
  const SO = (prompt, title, slots, cards, order, d, more) => ({ prompt, toolOptions: { title, slots, cards }, target: { order }, difficulty: d, ...more });
  const SF = (prompt, slots, cards, fill, d, more) => ({ prompt, toolOptions: { mode: 'fill', slots, cards }, target: { fill }, difficulty: d, ...more });
  const LV = { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } };
  const LVB = { easy: { showBack: true }, base: {}, challenge: {} };
  const MOOD = { type: 'mood', prompt: '오늘 공부를 마친 내 마음은 어떤가요?' };
  // 도입 6 + 전개 27 + 정리 7 = 40분
  const LESSON = (n, o) => Object.assign(base(n), {
    title: o.title, objective: o.objective,
    illustration: { prompt: PROMPT(o.draw), scene: SCENE(o.banner, o.extra) },
    stages: [
      { id: 'intro', title: '도입', minutes: 6, teacher: o.intro.teacher, student: o.intro.student, demo: o.intro.demo },
      { id: 'main', title: '전개', minutes: 27, activities: o.acts },
      { id: 'wrapup', title: '정리', minutes: 7, teacher: o.wrap.teacher, exitTicket: o.wrap.exit },
    ],
    worksheet: o.ws, differentiation: o.diff, teacherNotes: o.notes,
  });
  const DIFF = (easy, challenge) => ({ easy, base: '모든 카드를 놓거나 보기를 고른 뒤 확인을 눌러 스스로 고쳐요.', challenge });

  PaperLessons.registerUnit({
    id: `g${G}-cc-${CODE}`, schema: 'edu-unit.v1', catalogUnit: UNIT,
    grade: G, subject: '창체', unitTitle: TITLE,
    flow: '6학년 교육활동 존중 단원은 교실 밖 온라인 공간까지 존중을 넓히는 1차시입니다. 선생님의 모습을 허락 없이 찍거나 올리는 일, 단체 대화방·SNS에 선생님을 비방하는 글을 쓰거나 퍼 나르는 일이 왜 교육활동을 해치는지 사례로 따지고, 불만이 있을 때 바른 경로로 의견을 전하는 디지털 행동을 정합니다. 근거는 「교원의 지위 향상 및 교육활동 보호를 위한 특별법」 제24조·같은 법 시행령 제21조의 학생 대상 교육활동 침해행위 예방교육(연 1회 이상)이며, 실제 사건이나 반 학생을 예로 들지 않고 가상 사례로만 다룹니다. 4학년(수업 시간의 배움 지키기), 5학년(선생님께 의견 바르게 전하기)에서 이어지는 단원이고, 같은 학년 사이버폭력 예방 차시(g6-cc-saf-violence 3차시 퍼 나르기)와 연계해 지도할 수 있습니다.',
    refs: {},
    lessons: [
      LESSON(1, {
        title: '선생님 사진·글 사례로 온라인 존중 따져 보기',
        objective: '선생님의 모습을 허락 없이 찍거나 올리고 비방 글을 퍼 나르는 행동이 교육활동 침해임을 사례로 판단하고, 존중하는 디지털 행동을 정할 수 있다.',
        draw: 'a paper smartphone screen showing a respectful chat bubble with a heart, beside a paper classroom where a teacher and students smile together',
        banner: '온라인에서도 존중해요', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }],
        intro: {
          teacher: '"교실에서는 하지 않을 말을 단체 대화방에서는 쉽게 쓰게 되는 까닭은 무엇일까요?" 두세 명의 대답을 듣고(기다릴 반응: "얼굴이 안 보여서요", "다들 쓰니까요") 시연 단추로 존중하는 디지털 행동과 침해하는 행동이 나뉘는 모습을 보여 준다. "선생님은 그 방에 없으니 모르잖아요"가 나오면 "캡처 한 장이면 누구에게나 퍼질 수 있지 않을까요?"라고 되묻는다. 오늘은 온라인에서도 선생님을 존중하는 행동을 사례로 따진다고 밝힌다.',
          student: '온라인에서 쓴 글이 교실에서 한 말과 다른 점을 짝과 한 가지씩 말해 봅시다.',
          demo: { tool: 'mindmap', options: { topic: '온라인에서', slots: ['존중해요', '침해해요'], cards: ['감사 메시지를 보내요', '몰래 찍어 올려요'], shuffle: false }, sequence: [{ sort: { '존중해요': ['감사 메시지를 보내요'], '침해해요': ['몰래 찍어 올려요'] } }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 온라인 행동을 존중과 침해로 가르기', minutes: 13, tool: 'mindmap',
            teacher: '"이 행동은 선생님의 교육활동과 마음에 어떤 영향을 줄까요?" 1번에서 수업 장면을 "재미로" 찍어 올리는 것도 허락 없는 촬영·게시라는 점을 짚는다. 2번에서 다른 사람이 쓴 비방 글을 "나는 퍼 나르기만 했다"고 여기는 학생에게 공유도 피해를 키운다는 점을 말한다. 3번은 합성·편집 사진이 장난이 아니라 심각한 침해가 될 수 있음을 분명히 한다.',
            task: '온라인 행동 카드를 존중하는 행동과 침해하는 행동으로 나누어요.',
            levels: LV,
            items: [
              MS('온라인 행동을 존중하는 것과 침해하는 것으로 나누어 보세요.', '온라인 행동', ['존중해요', '침해해요'], ['수업 장면 몰래 찍기', '학급 누리집에 감사 글', '선생님 흉보는 글 쓰기', '공지 확인 후 답장하기'], { '존중해요': ['학급 누리집에 감사 글', '공지 확인 후 답장하기'], '침해해요': ['수업 장면 몰래 찍기', '선생님 흉보는 글 쓰기'] }, 0.15),
              MS('비방 글을 보았을 때의 행동을 피해를 멈추는 것과 키우는 것으로 나누어 보세요.', '비방 글을 보았을 때', ['피해를 멈춰요', '피해를 키워요'], ['캡처해서 다른 방에 공유', '"그만 쓰자"고 말하기', '웃는 이모티콘 달기', '어른에게 알리기'], { '피해를 멈춰요': ['"그만 쓰자"고 말하기', '어른에게 알리기'], '피해를 키워요': ['캡처해서 다른 방에 공유', '웃는 이모티콘 달기'] }, 0.2),
              MP('교육활동을 침해하는 심각한 행동만 골라 담아 보세요.', '심각한 침해', ['선생님 얼굴 합성 사진', '수업 영상 무단 게시', '질문을 메시지로 보내기', '과제 기한 확인하기'], ['선생님 얼굴 합성 사진', '수업 영상 무단 게시'], 0.25,
                { conclude: '허락 없는 촬영·게시, 비방 글 쓰기와 퍼 나르기는 온라인에서도 교육활동을 해쳐요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 사례 속 갈림길에서 존중하는 길 고르기', minutes: 14, tool: 'emotion',
            teacher: '"이렇게 하면 선생님과 우리 반에는 어떤 일이 생길까요?" 결과 칸을 읽고 까닭을 말하게 한다. 1번은 숙제가 많다는 불만을 단체 대화방 비방 대신 바른 경로로 전하는 상황이다. 2번에서 "이미 다 봤으니 늦었다"는 생각을 짚어, 지금이라도 지우고 알리는 것이 피해를 줄인다고 말한다. 3번은 선생님 말실수 영상을 올리자는 친구를 거절하는 상황으로 또래 압력 속 선택을 다룬다.',
            task: '온라인에서 생긴 상황에서 어떻게 할지 고르고, 그 결과를 살펴봐요.',
            levels: LVB,
            items: [
              EB('숙제가 너무 많다고 느낀 준이가 불만을 표현하려 해요. 어떻게 할까요?', '준이는 이번 주 숙제가 너무 많다고 느껴 반 단체 대화방에 불만을 쓰고 싶어요.', [
                { id: 'rant', text: '대화방에 선생님 흉을 써요', result: '글이 캡처되어 퍼지고 선생님과 반 모두 상처받아요.', mood: '속상함', why: '흉보는 글은 불만을 해결하지 못하고 상처만 남겨요.' },
                { id: 'propose', text: '학급 회의에서 의견을 제안해요', result: '선생님이 의견을 듣고 숙제 양을 함께 조정해요.', mood: '뿌듯함' },
                { id: 'anon', text: '익명 계정으로 불만을 올려요', result: '누가 썼는지 의심이 퍼져 반 분위기가 나빠져요.', mood: '불안', why: '익명 뒤에 숨어도 피해는 똑같이 생겨요.' }], 'propose', 0.15),
              EB('선생님을 비방하는 글이 반 대화방에 올라와 벌써 여럿이 봤어요. 하는 어떻게 할까요?', '누군가 반 대화방에 선생님을 비방하는 글을 올렸고, 벌써 여럿이 읽었다고 표시돼요.', [
                { id: 'late', text: '이미 다 봤으니 그냥 둬요', result: '글이 다른 방으로 계속 퍼져요.', mood: '걱정', why: '지금이라도 멈추고 알리면 피해가 줄어요.' },
                { id: 'stop', text: '"이건 지우자" 하고 어른에게 알려요', result: '글이 지워지고 선생님과 반이 함께 이야기를 나눠요.', mood: '안심' },
                { id: 'react', text: '웃는 이모티콘을 달아요', result: '더 많은 친구가 따라 반응해 글이 커져요.', mood: '불편함', why: '반응 하나도 비방에 힘을 실어 줘요.' }], 'stop', 0.2),
              EB('친구가 선생님 말실수 장면을 찍어 올리자고 해요. 서는 어떻게 할까요?', '쉬는 시간, 친구가 "아까 선생님 말실수한 거 영상으로 만들어 올리자"라고 해요.', [
                { id: 'join', text: '재밌겠다며 함께 편집해요', result: '영상이 퍼져 선생님이 큰 상처를 받고 문제가 커져요.', mood: '슬픔', why: '허락 없는 촬영·게시는 심각한 교육활동 침해예요.' },
                { id: 'refuse', text: '"그건 선생님께 상처야" 하고 거절해요', result: '친구도 생각을 바꾸고 영상은 만들어지지 않아요.', mood: '안심' },
                { id: 'watch', text: '나는 보기만 하겠다고 해요', result: '친구는 혼자서라도 영상을 올려요.', mood: '걱정', why: '말리고, 그래도 멈추지 않으면 어른에게 알려요.' }], 'refuse', 0.25,
                { conclude: '불만은 바른 경로로 말하고, 침해를 보면 멈추게 하고 알리는 것이 온라인에서의 존중이에요.' }),
            ],
          },
        ],
        wrap: {
          teacher: '"온라인에서 선생님을 존중하는 우리 반 약속을 하나 정해 볼까요?" 두세 개를 칠판에 적는다. 출구 1번에서 "공유만 하는 것"을 괜찮은 쪽에 놓은 학생에게 퍼 나르기도 피해를 키운다는 점을 짚는다. 2번에서 "익명이면 괜찮다"를 고른 학생에게는 익명이어도 피해는 같다는 점을 다시 말해 준다.',
          exit: [
            { type: 'tool', tool: 'mindmap', options: { topic: '어떤 행동일까', slots: ['존중해요', '침해해요'], cards: ['비방 글 퍼 나르기', '궁금한 점 정중히 묻기', '수업 몰래 녹음해 올리기', '감사 편지 쓰기'] }, state: { at: {} }, prompt: '온라인 행동을 존중하는 것과 침해하는 것으로 나누어 보세요.',
              target: { sort: { '존중해요': ['궁금한 점 정중히 묻기', '감사 편지 쓰기'], '침해해요': ['비방 글 퍼 나르기', '수업 몰래 녹음해 올리기'] } }, difficulty: 0.2 },
            { type: 'choice', prompt: '선생님에게 불만이 있을 때 알맞은 행동은 무엇인가요?', options: ['익명 계정으로 올려요', '학급 회의나 면담으로 정중히 말해요', '단체 대화방에 흉을 써요'], answer: 1, difficulty: 0.1, explain: '불만은 바른 경로로 정중하게 전해야 해결될 수 있어요.' },
            { type: 'short', prompt: '온라인에서 선생님을 존중하기 위해 내가 지킬 약속을 한 문장으로 쓰세요.' },
            MOOD,
          ],
        },
        ws: {
          title: '온라인에서도 선생님을 존중해요',
          items: [
            { type: 'table', prompt: '존중하는 행동이면 ○, 침해하는 행동이면 ×를 쓰세요.', columns: ['행동', '○ / ×'], cells: [['수업 장면 몰래 찍기', ''], ['감사 글 남기기', ''], ['비방 글 퍼 나르기', ''], ['정중히 질문 보내기', '']], answer: '×, ○, ×, ○' },
            { type: 'choice', prompt: '반 대화방에 비방 글이 올라왔을 때 알맞은 행동에 ○ 하세요.', options: ['웃는 이모티콘 달기', '"지우자" 말하고 어른에게 알리기', '다른 방에 공유하기'], answer: '"지우자" 말하고 어른에게 알리기' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '허락 없이 선생님 모습을 찍어 올리는 것은 교육활동 ___이에요.', answer: '침해' },
            { type: 'short', prompt: '불만이 생겼을 때 바르게 의견을 전하는 방법을 두 가지 쓰세요.' },
          ],
          easy: {
            note: '"이 글을 선생님이 보면 어떤 마음일까?"를 떠올려 보세요.',
            items: [
              { type: 'choice', prompt: '존중하는 행동에 ○ 하세요.', options: ['감사 글 남기기', '흉보는 글 쓰기'], answer: '감사 글 남기기' },
              { type: 'table', prompt: '좋은 행동이면 ○, 아니면 ×를 쓰세요.', columns: ['행동', '○ / ×'], cells: [['몰래 찍기', ''], ['정중히 묻기', ''], ['퍼 나르기', '']], answer: '×, ○, ×' },
              { type: 'draw', prompt: '선생님께 보낼 감사 메시지 화면을 그려 보세요.' },
              { type: 'short', prompt: '선생님께 전하고 싶은 고마운 말을 쓰세요.' },
            ],
          },
        },
        diff: DIFF('카드는 맞는 칸에 놓으면 바로 알려 주고, 갈림길 결과가 처음부터 보여요.', '"보기만 할게"처럼 책임을 피하는 보기를 가려내고, 카드 순서가 섞여 나와요.'),
        notes: '자주 보이는 어려움: ① 선생님이 없는 방에서 쓴 글은 괜찮다고 여긴다 → 캡처와 공유로 언제든 퍼질 수 있음을 짚는다. ② 퍼 나르기·이모티콘 반응은 책임이 없다고 여긴다 → 반응과 공유도 피해를 키운다는 점을 말한다. ③ 익명이면 괜찮다고 여긴다 → 익명이어도 피해와 책임은 남는다는 점을 분명히 한다. 실제 사건·반 학생을 사례로 들지 않으며, 선생님에 대한 학생의 불만을 공개적으로 모으지 않는다.',
      }),
    ],
  });
})();
