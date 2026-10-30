/* 1학년 1학기 통합교과 1. 학교 — 48차시
 * 1~12차시 [슬기로운 생활] 학교 안팎 탐색: 궁금한 곳 물음 만들기(1~4) → 둘러보며 그림·안내판으로 기록(5~8) → 알아낸 것 차례대로 말하고 안전한 길 짚기(9~12)
 * 13~36차시 [즐거운 생활] 소리: 빠르기·세기 듣고 가르기(13~16) → 따라 내고 바꾸어 내기(17~20) → 바꾼 소리 돌아보기(21~24)
 *           → 목소리·악기·몸 소리 고르기(25~28) → 네 박 소리 짓고 짝과 겹치기(29~32) → 혼자와 함께 견주기(33~36)
 * 37~48차시 [즐거운 생활] 관찰과 상상: 눈에 띄는 곳 짚고 닮은 것 떠올리기(37~40) → 크게 꾸미고 상상 덧붙이기(41~44) → 돌아보고 다시 하기·단원 정리(45~48)
 * 성취기준: units-map 단원 목록이 비어 있고 미확인(standardsVerified:false)이라 모든 차시 standards: [] (지어내지 않는다).
 * 소리 흉내말·가락·예문은 모두 직접 지었다(교과서 지문·노래 가사를 옮기지 않았다). 학생 이름은 가명(민지·준호·하준·서아)만 쓴다.
 */
(function () {
  var UNIT = 'g1-통합교과-1학기-1';
  var TITLE = '1. 학교';
  var HEAD = 'Layered paper-cut illustration of ';
  var TAIL = ', with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.';
  function two(n) { return (n < 10 ? '0' : '') + n; }
  // 차시 머리(같은 칸)를 채운다 — 차시마다 다른 내용은 x에 그대로 적는다
  function L(n, x) {
    var head = {
      id: 'g1-int-1-01-' + two(n), schema: 'edu-lesson.v1', catalog: { unit: UNIT, lesson: n },
      grade: 1, subject: '통합교과', unitTitle: TITLE,
    };
    var tail = { standards: [], minutes: 40, formats: ['chromebook', 'projector', 'print'] };
    var out = {};
    [head, { title: x.title, objective: x.objective }, tail].forEach(function (o) { for (var k in o) out[k] = o[k]; });
    for (var k in x) if (!(k in out)) out[k] = x[k];
    return out;
  }
  // 그림: prompt 틀 + 벡터 장면(배경 + 차시 모티프 + 한 줄 글)
  function ART(what, text, more) {
    return {
      prompt: HEAD + what + TAIL,
      scene: { viewBox: [480, 270], layers: [
        { motif: 'sun', x: 410, y: 56, s: 0.8 }, { motif: 'cloud', x: 110, y: 52 }, { motif: 'hills', y: 204 },
      ].concat(more || []).concat([{ motif: 'text', x: 240, y: 140, text: text, size: 22 }]) },
    };
  }
  var MOOD = { type: 'mood', prompt: '오늘 공부를 마친 내 마음은 어떤가요?' };
  // 카드 판 교구 단계: 쉬움은 맞는 칸에 초록 테두리·틀린 칸은 바로 되돌림, 도전은 문항마다 함정 카드를 더 넣는다
  var CARD_LV = { easy: { live: true, instant: true }, base: {}, challenge: {} };
  // 리듬 블록: 쉬움은 한 마디·박 수 표시, 기본은 두 마디, 도전은 8분쉼표까지
  var RHY_LV = {
    easy: { mode: 'rhythm', meter: 4, measures: 1, blocks: ['q', 'h', 'qr'], showBeats: true },
    base: { mode: 'rhythm', meter: 4, measures: 2, blocks: ['q', 'e', 'h', 'qr'] },
    challenge: { mode: 'rhythm', meter: 4, measures: 2, blocks: ['q', 'e', 'h', 'qr', 'er'] },
  };
  // 걸어 다니며 살펴보는 차시의 안전 약속
  var WALK_SAFE = ['복도와 계단에서는 오른쪽으로 천천히 걸어요.', '다른 반이 공부할 때는 작은 소리로 말해요.', '선생님과 함께 다니고, 혼자 다른 곳으로 가지 않아요.'];
  // 몸으로 소리 내는 차시의 안전 약속
  var BODY_SAFE = ['친구와 팔을 벌려 닿지 않을 만큼 떨어져요.', '발 구르기는 바닥이 울리지 않게 살살 해요.', '친구 귀 가까이에서 큰 소리를 내지 않아요.'];
  // 가위·풀을 쓰는 차시의 안전 약속
  var CUT_SAFE = ['가위는 앉아서만 쓰고, 날을 닫아서 들고 다녀요.', '가위를 건넬 때는 손잡이를 친구 쪽으로 내밀어요.', '종이를 잡은 손가락은 가위 날에서 멀리 둬요.'];

  var lessons = [];

  // ───────────────────────── 1~4차시: 학교에서 궁금한 것 물음 만들기 ─────────────────────────

  lessons.push(L(1, {
    title: '학교에서 궁금한 곳 골라 물음 만들기',
    objective: '학교에서 궁금한 곳을 하나 골라 "여기는 무엇을 하는 곳일까?"처럼 끝이 묻는 말로 끝나는 물음을 만들 수 있다.',
    illustration: ART('a friendly paper school building with many doors and windows, small children pointing at a door with a big question mark floating above it', '여기는 무엇을 하는 곳일까?', [
      { motif: 'house', x: 120, y: 214, color: 'buttercup' }, { motif: 'house', x: 360, y: 216, color: 'sky', s: 0.9 }, { motif: 'tree', x: 240, y: 214 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 7,
        teacher: '"우리 학교에서 아직 들어가 보지 못한 곳이 있나요?" 손을 든 학생 두세 명에게 그곳 이름을 듣는다. "학교는 다 알아요"라는 학생에게 "그럼 보건실 서랍에는 무엇이 들었을까요? 급식실에서 밥은 누가 만들까요?"라고 되묻는다. 시연 단추로 묻는 말 카드만 바구니에 들어가는 모습을 보여 주며 "궁금한 것을 끝이 \'~까?\'로 끝나게 말하면 물음이 돼요"라고 짚는다.',
        student: '우리 학교에서 아직 가 보지 않은 곳을 하나 떠올려 짝에게 말해 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'pick', basket: '묻는 말', cards: ['보건실은 무엇을 하는 곳일까?', '보건실은 1층에 있어요.'], shuffle: false }, sequence: [{ pick: ['보건실은 무엇을 하는 곳일까?'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 25,
        activities: [
          {
            id: 'a1', title: '활동 1. 묻는 말 골라내기', minutes: 12, tool: 'mindmap',
            teacher: '"이 말은 친구에게 대답을 듣고 싶은 말인가요, 내가 아는 것을 알려 주는 말인가요?" 카드를 한 장씩 소리 내어 읽게 한다. 끝을 올려 읽으면 묻는 말이 된다는 것을 선생님이 두 가지 억양으로 들려준다. \'궁금해요\'로 끝나는 말을 묻는 말로 고르는 학생에게 "이 말에 친구가 무엇이라고 대답할 수 있을까요?"라고 묻는다.',
            task: '카드를 읽고 끝이 묻는 말로 끝나는 카드만 바구니에 넣어요.',
            levels: CARD_LV,
            items: [
              { prompt: '묻는 말 카드만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', basket: '묻는 말', cards: ['도서실에는 어떤 책이 있을까?', '도서실은 조용해요.', '보건 선생님은 어떤 일을 하실까?', '교실 창문이 커요.'] },
                target: { pick: ['도서실에는 어떤 책이 있을까?', '보건 선생님은 어떤 일을 하실까?'] }, difficulty: 0.05 },
              { prompt: '묻는 말 카드를 모두 골라 보세요.', toolOptions: { mode: 'pick', basket: '묻는 말', cards: ['급식실에서는 누가 밥을 만들까?', '운동장이 넓어요.', '교문은 몇 시에 열릴까?', '나는 그네가 좋아요.', '과학실에는 무엇이 있을까?'] },
                target: { pick: ['급식실에서는 누가 밥을 만들까?', '교문은 몇 시에 열릴까?', '과학실에는 무엇이 있을까?'] }, difficulty: 0.15,
                levels: { easy: { prompt: '묻는 말 카드를 모두 골라 보세요. 끝 글자 \'까\'를 찾아요.', toolOptions: { cards: ['급식실에서는 누가 밥을 만들까?', '운동장이 넓어요.', '교문은 몇 시에 열릴까?', '나는 그네가 좋아요.'] }, target: { pick: ['급식실에서는 누가 밥을 만들까?', '교문은 몇 시에 열릴까?'] } } } },
              { prompt: '방송실 카드 가운데 묻는 말만 골라 보세요.', toolOptions: { mode: 'pick', basket: '묻는 말', cards: ['방송실이 궁금해요.', '방송실에서는 무엇을 할까?', '방송실 문은 빨개요.', '방송은 누가 할까?'] },
                target: { pick: ['방송실에서는 무엇을 할까?', '방송은 누가 할까?'] }, difficulty: 0.25,
                hints: ['친구가 대답해 줄 수 있는 말인지 하나씩 읽어 봐요.', '\'궁금해요\'로 끝나는 말은 내 마음을 알려 주는 말이에요. 끝이 \'~까?\'인지 봐요.', '끝이 \'할까?\', \'누가 할까?\'처럼 묻는 카드 두 장만 바구니에 넣어요.'],
                predict: { q: '"방송실이 궁금해요."는 묻는 말일까요?', options: ['묻는 말이에요', '묻는 말이 아니에요'], answer: 1 },
                conclude: '궁금한 마음을 "~일까?"처럼 끝을 바꾸어 말해야 묻는 말이 돼요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 곳에 어울리는 물음 잇기', minutes: 13, tool: 'mindmap',
            teacher: '"보건실에서 궁금한 것은 무엇일까요?" 장소 가지마다 그곳에서 알아볼 수 있는 물음을 잇게 한다. 다 이은 뒤 짝과 "나는 ○○실이 궁금해. ○○○일까?" 꼴로 물음을 하나씩 직접 지어 말하게 한다. 장소와 물음이 맞지 않게 이은 학생에게 "이 물음의 답은 어디에 가야 알 수 있을까요?"라고 되묻는다.',
            task: '곳 이름 가지에 그곳에서 알아볼 물음 카드를 이어요. 그리고 내 물음을 짝에게 말해요.',
            levels: CARD_LV,
            items: [
              { prompt: '세 곳에 어울리는 물음 카드를 이어 보세요.', toolOptions: { mode: 'match', topic: '어디가 궁금할까?', slots: [{ id: 's1', label: '보건실' }, { id: 's2', label: '도서실' }, { id: 's3', label: '급식실' }], cards: ['다쳤을 때 무엇을 해 줄까?', '책은 어떻게 빌릴까?', '반찬은 어디에서 만들까?'] },
                target: { match: { s1: '다쳤을 때 무엇을 해 줄까?', s2: '책은 어떻게 빌릴까?', s3: '반찬은 어디에서 만들까?' } }, difficulty: 0.1 },
              { prompt: '운동장, 교무실, 화장실에 어울리는 물음을 이어 보세요.', toolOptions: { mode: 'match', topic: '어디가 궁금할까?', slots: [{ id: 's1', label: '운동장' }, { id: 's2', label: '교무실' }, { id: 's3', label: '화장실' }], cards: ['철봉은 몇 개 있을까?', '선생님들은 여기서 무슨 일을 하실까?', '손 씻는 물은 어디서 나올까?'] },
                target: { match: { s1: '철봉은 몇 개 있을까?', s2: '선생님들은 여기서 무슨 일을 하실까?', s3: '손 씻는 물은 어디서 나올까?' } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['철봉은 몇 개 있을까?', '선생님들은 여기서 무슨 일을 하실까?', '손 씻는 물은 어디서 나올까?', '운동장이 넓어요.'] } } } },
              { prompt: '내가 궁금한 곳을 골라 "○○는 무엇을 하는 곳일까?"로 물음을 지어 짝에게 말해요. 다 하면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 지은 물음 가운데 가장 알고 싶은 것은 무엇인가요?" 서너 명의 물음을 칠판에 적어 두고, 다음 시간에 그 물음을 풀려면 무엇을 살펴야 할지 함께 정한다고 예고한다. 출구 1번에서 \'궁금해요\' 카드를 고른 학생은 끝말을 바꾸어 다시 말해 보게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'pick', basket: '묻는 말', cards: ['음악실에는 어떤 악기가 있을까?', '음악실이 궁금해요.', '음악실은 2층이에요.'] }, prompt: '묻는 말 카드만 골라 보세요.', target: { pick: ['음악실에는 어떤 악기가 있을까?'] }, difficulty: 0.15 },
          { type: 'choice', prompt: '"학교는 다 알아서 궁금한 것이 없어요." 이 말은 맞을까요?', options: ['맞아요', '아니에요, 아직 모르는 곳이 있어요'], answer: 1, difficulty: 0.1, explain: '보건실 서랍, 급식실 조리실처럼 아직 들어가 보지 못한 곳이 많아요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '학교에서 궁금한 곳',
      items: [
        { type: 'choice', prompt: '묻는 말에 ○ 하세요.', options: ['교무실은 무엇을 하는 곳일까?', '교무실은 넓어요.', '교무실이 궁금해요.'], answer: '교무실은 무엇을 하는 곳일까?' },
        { type: 'blank', prompt: '빈칸에 알맞은 말을 써서 물음을 만드세요.', text: '도서실에서는 책을 어떻게 빌릴___?', answer: '까' },
        { type: 'short', prompt: '내가 궁금한 곳 이름을 쓰세요.' },
        { type: 'short', prompt: '그곳에 대한 내 물음을 쓰세요. (끝은 \'~까?\')' },
        { type: 'draw', prompt: '내가 궁금한 곳의 문을 그려 보세요.' },
      ],
      easy: {
        note: '끝이 \'~까?\'로 끝나면 묻는 말이에요.',
        items: [
          { type: 'choice', prompt: '묻는 말에 ○ 하세요.', options: ['보건실은 무엇을 할까?', '보건실은 하얘요.'], answer: '보건실은 무엇을 할까?' },
          { type: 'short', prompt: '궁금한 곳 이름을 쓰세요.' },
          { type: 'draw', prompt: '궁금한 곳을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 카드를 넣으면 초록 테두리가 생기고, 틀린 카드는 돌아와요. 카드 수가 적어요.',
      base: '모두 고른 뒤 확인을 눌러 스스로 고쳐요.',
      challenge: '\'궁금해요\'처럼 묻는 말처럼 보이는 함정 카드와 장소 잇기의 남는 카드를 골라내요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 학교는 다 안다고 여겨 궁금한 것이 없다고 한다 → 보건실 서랍·급식실 조리실처럼 들어가 보지 못한 곳을 구체적으로 묻는다. ② "궁금해요"를 물음으로 여긴다 → 친구가 대답할 수 있는지 직접 대답해 보게 한다. ③ 물음 끝을 올려 읽지 못한다 → 선생님이 두 억양으로 들려주고 따라 하게 한다. 학생이 지은 물음은 다음 시간에 다시 쓰니 칠판 사진이나 종이로 남겨 둔다.',
  }));

  lessons.push(L(2, {
    title: '물음을 풀려면 어디서 무엇을 살필지 정하기',
    objective: '학교에 대한 물음을 보고 답을 알 수 있는 곳과 살펴볼 것(보기, 여쭤보기, 안내판 읽기)을 고를 수 있다.',
    illustration: ART('children holding a paper question card in front of a library door with a small notice board, one child looking through a paper magnifier', '어디서 알아볼까?', [
      { motif: 'house', x: 110, y: 214, color: 'lavender' }, { motif: 'tree', x: 380, y: 214 }, { motif: 'flower', x: 300, y: 228 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '지난 시간 칠판에 적은 물음을 다시 읽는다. "\'급식실에서 밥은 누가 만들까?\' 이 물음의 답은 교실에 앉아서 알 수 있을까요?" 대답을 들은 뒤 "답을 알려면 그곳에 가서 보거나, 그곳에 계신 분께 여쭤봐야 해요"라고 짚는다. 시연 단추로 물음 카드가 \'급식실\' 가지에 이어지는 모습을 보여 준다.',
        student: '지난 시간에 내가 지은 물음을 짝에게 다시 말해 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '어디서 알아볼까?', slots: [{ id: 's1', label: '밥은 누가 만들까?' }], cards: ['급식실', '음악실'], shuffle: false }, sequence: [{ match: { s1: '급식실' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 답을 알 수 있는 곳 잇기', minutes: 13, tool: 'mindmap',
            teacher: '"이 물음의 답은 어디에 가면 알 수 있을까요?" 물음을 소리 내어 읽고 장소를 고르게 한다. 물음 속 낱말(책, 다친, 악기)에 손가락을 대게 하면 장소를 찾기 쉽다. "아무 데나 가면 돼요"라고 하는 학생에게 "운동장에 가면 책 빌리는 방법을 알 수 있을까요?"라고 묻는다.',
            task: '물음을 읽고, 답을 알 수 있는 곳 카드를 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '물음마다 답을 알 수 있는 곳을 이어 보세요.', toolOptions: { mode: 'match', topic: '어디서 알아볼까?', slots: [{ id: 's1', label: '책은 몇 권 빌릴 수 있을까?' }, { id: 's2', label: '다치면 무엇을 발라 줄까?' }] , cards: ['도서실', '보건실'] },
                target: { match: { s1: '도서실', s2: '보건실' } }, difficulty: 0.05 },
              { prompt: '세 물음에 답을 알 수 있는 곳을 이어 보세요.', toolOptions: { mode: 'match', topic: '어디서 알아볼까?', slots: [{ id: 's1', label: '북과 실로폰이 있을까?' }, { id: 's2', label: '식판은 어디에 둘까?' }, { id: 's3', label: '미끄럼틀은 몇 개일까?' }], cards: ['음악실', '급식실', '놀이터'] },
                target: { match: { s1: '음악실', s2: '급식실', s3: '놀이터' } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['음악실', '급식실', '놀이터', '우리 집'] } } } },
              { prompt: '교실에 앉아서는 답을 알 수 없는 물음만 골라 보세요.', toolOptions: { mode: 'pick', basket: '가서 알아볼 물음', cards: ['보건실 침대는 몇 개일까?', '우리 교실 칠판은 무슨 색일까?', '급식실 조리실에는 무엇이 있을까?', '우리 교실 창문은 몇 개일까?'] },
                target: { pick: ['보건실 침대는 몇 개일까?', '급식실 조리실에는 무엇이 있을까?'] }, difficulty: 0.25,
                hints: ['지금 우리 교실에서 고개만 돌려도 보이는지 하나씩 떠올려 봐요.', '\'우리 교실\'에 대한 물음은 지금 바로 볼 수 있어요. 다른 곳에 대한 물음을 찾아요.', '보건실과 급식실 조리실은 그곳에 가야 알 수 있어요. 그 두 장을 넣어요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 어떻게 알아볼지 나누기', minutes: 13, tool: 'mindmap',
            teacher: '"답을 알아보는 방법은 여러 가지예요. 눈으로 세어 볼 수도 있고, 그곳에 계신 분께 여쭤볼 수도 있어요." 숫자를 세는 물음은 \'세어 봐요\', 하시는 일을 묻는 물음은 \'여쭤봐요\'로 나눈다. 다 나눈 뒤 짝과 "보건 선생님, 무엇을 하세요?"처럼 여쭤보는 말을 직접 연습하게 한다.',
            task: '물음을 읽고, 세어 볼 물음과 여쭤볼 물음으로 나누어요. 여쭤보는 말을 짝과 연습해요.',
            levels: CARD_LV,
            items: [
              { prompt: '물음 카드를 세어 볼 물음과 여쭤볼 물음으로 나누어 보세요.', toolOptions: { topic: '어떻게 알아볼까?', slots: ['가서 세어 봐요', '그곳 어른께 여쭤봐요'], cards: ['신발장은 몇 칸일까?', '보건 선생님은 무슨 일을 하실까?', '그네는 몇 개일까?', '조리사님은 밥을 몇 시에 지으실까?'] },
                target: { sort: { '가서 세어 봐요': ['신발장은 몇 칸일까?', '그네는 몇 개일까?'], '그곳 어른께 여쭤봐요': ['보건 선생님은 무슨 일을 하실까?', '조리사님은 밥을 몇 시에 지으실까?'] } }, difficulty: 0.15 },
              { prompt: '도서실 물음을 세어 볼 것과 여쭤볼 것으로 나누어 보세요.', toolOptions: { topic: '도서실 알아보기', slots: ['가서 세어 봐요', '그곳 어른께 여쭤봐요'], cards: ['책상은 몇 개일까?', '사서 선생님은 책을 어떻게 고르실까?', '창문은 몇 개일까?', '책은 언제까지 돌려줘야 할까?'] },
                target: { sort: { '가서 세어 봐요': ['책상은 몇 개일까?', '창문은 몇 개일까?'], '그곳 어른께 여쭤봐요': ['사서 선생님은 책을 어떻게 고르실까?', '책은 언제까지 돌려줘야 할까?'] } }, difficulty: 0.2,
                levels: { challenge: { toolOptions: { cards: ['책상은 몇 개일까?', '사서 선생님은 책을 어떻게 고르실까?', '창문은 몇 개일까?', '책은 언제까지 돌려줘야 할까?', '도서실은 조용해요.'] } } } },
              { prompt: '짝과 "○○ 선생님, ○○○○?" 하고 여쭤보는 말을 번갈아 연습해요. 다 하면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"내 물음은 어디에 가서, 어떻게 알아볼 건가요?" 두세 명이 \'곳\'과 \'방법\'을 함께 말하게 한다. 교실에 앉아서 알 수 있는 물음과 가 봐야 아는 물음이 다르다는 것을 다시 짚고, 5차시에 직접 둘러본다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '어디서 알아볼까?', slots: [{ id: 'e1', label: '공은 어디에 넣어 둘까?' }, { id: 'e2', label: '열이 나면 어떻게 해 줄까?' }], cards: ['체육 창고', '보건실'] }, prompt: '물음마다 답을 알 수 있는 곳을 이어 보세요.', target: { match: { e1: '체육 창고', e2: '보건실' } }, difficulty: 0.15 },
          { type: 'choice', prompt: '"조리사님은 몇 시에 밥을 지으실까?"는 어떻게 알아볼까요?', options: ['교실에서 짐작해요', '조리사님께 여쭤봐요', '운동장에서 세어 봐요'], answer: 1, difficulty: 0.15, explain: '하시는 일과 때는 그분께 여쭤보면 알 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '어디서 무엇을 알아볼까',
      items: [
        { type: 'figure', wide: true, prompt: '물음과 답을 알 수 있는 곳을 선으로 이으세요.', tool: 'mindmap', figures: [{ options: { mode: 'match', topic: '어디서?', slots: [{ id: 's1', label: '책은 어떻게 빌릴까?' }, { id: 's2', label: '식판은 어디에 둘까?' }], cards: ['도서실', '급식실'] }, caption: '' }], answer: '책-도서실, 식판-급식실' },
        { type: 'choice', prompt: '가서 세어 보아야 알 수 있는 물음에 ○ 하세요.', options: ['그네는 몇 개일까?', '보건 선생님은 무슨 일을 하실까?'], answer: '그네는 몇 개일까?' },
        { type: 'table', prompt: '내 물음과 알아볼 곳, 방법을 쓰세요.', columns: ['내 물음', '알아볼 곳', '세어 봐요 / 여쭤봐요'], rows: 2 },
        { type: 'short', prompt: '어른께 여쭤볼 때 할 말을 쓰세요.' },
      ],
      easy: {
        note: '물음 속 낱말(책, 다친, 식판)을 찾으면 곳이 보여요.',
        items: [
          { type: 'choice', prompt: '책을 빌리는 방법은 어디서 알 수 있나요?', options: ['도서실', '운동장'], answer: '도서실' },
          { type: 'choice', prompt: '하시는 일은 어떻게 알아볼까요?', options: ['여쭤봐요', '세어 봐요'], answer: '여쭤봐요' },
          { type: 'draw', prompt: '어른께 여쭤보는 내 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 놓으면 초록 테두리가 생기고, 틀리면 카드가 돌아와요.',
      base: '다 놓은 뒤 확인을 눌러요. 나눈 까닭을 짝에게 말해요.',
      challenge: '우리 집처럼 관계없는 곳 카드와 물음이 아닌 카드가 섞여 있어 골라내야 해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 어떤 물음이든 교실에서 짐작해 답한다 → "그곳에 가 보면 어떨까?"로 직접 살필 곳을 정하게 한다. ② 세어 볼 것과 여쭤볼 것을 가르지 못한다 → "몇 개?"는 세고 "무슨 일?"은 여쭤본다는 낱말 실마리를 준다. ③ 어른께 여쭤보는 말이 반말이 된다 → "○○ 선생님, ~하세요?" 꼴을 함께 따라 말한다. 5차시 둘러보기 전에 보건실·급식실에 방문 시간을 미리 여쭤 둔다.',
  }));

  lessons.push(L(3, {
    title: '운동장과 교문 둘레에서 궁금한 것 찾기',
    objective: '학교 밖 운동장·화단·교문 둘레의 지도를 보고 궁금한 것이 있는 곳을 찾아 핀을 꽂고, 그곳에 대한 물음을 말할 수 있다.',
    illustration: ART('a simple paper map of a school yard with a gate, a flower bed, a playground and a crosswalk outside the gate, small paper pins standing on it', '밖에도 궁금한 것이 있어요', [
      { motif: 'tree', x: 90, y: 214 }, { motif: 'flower', x: 330, y: 228, color: 'rose' }, { motif: 'house', x: 400, y: 216, color: 'peach', s: 0.8 }]),
    safety: WALK_SAFE,
    stages: [
      {
        id: 'intro', title: '도입', minutes: 7,
        teacher: '"학교 건물 밖에도 학교가 있을까요?" 창밖으로 운동장과 화단을 함께 내다본다. 칸 지도를 띄우고 교문·운동장·화단 자리를 함께 짚는다. 시연 단추로 핀이 \'화단\'에 꽂히는 모습을 보여 주며 "화단에 핀 꽃 이름이 궁금하면 여기에 핀을 꽂아요"라고 말한다. 지도가 처음인 학생에게 우리 교실 창문에서 보이는 곳부터 찾게 한다.',
        student: '창밖으로 보이는 학교의 바깥 곳을 하나 골라 이름을 말해 봐요.',
        demo: { tool: 'map', options: { grid: [5, 3], places: [{ name: '교문', icon: 'dot', at: [0, 2] }, { name: '화단', icon: 'forest', at: [2, 1] }, { name: '운동장', icon: 'park', at: [4, 0] }] }, sequence: [{ place: '화단' }] },
      },
      {
        id: 'main', title: '전개', minutes: 25,
        activities: [
          {
            id: 'a1', title: '활동 1. 물음에 맞는 곳에 핀 꽂기', minutes: 13, tool: 'map',
            teacher: '"물음을 잘 읽어요. 이 물음의 답은 지도 어디에 있을까요?" 물음 속 낱말(꽃, 공, 신호등)에 밑줄을 긋듯 손가락을 대게 한 뒤 핀을 꽂게 한다. 이름만 보고 아무 곳에나 꽂는 학생에게 "물음에서 무엇이 궁금하다고 했지요?"라고 되묻는다.',
            task: '물음을 읽고, 그 답을 알아볼 곳에 핀을 꽂아요.',
            levels: {
              easy: { grid: [4, 3] },
              base: { grid: [5, 3] },
              challenge: { grid: [6, 4] },
            },
            items: [
              { prompt: '"빨간 꽃의 이름은 무엇일까?" 이 물음을 알아볼 곳에 핀을 꽂아 보세요.', toolOptions: { places: [{ name: '교문', icon: 'dot', at: [0, 2] }, { name: '화단', icon: 'forest', at: [1, 1] }, { name: '체육 창고', icon: 'house', at: [3, 0] }] }, target: { place: '화단' }, difficulty: 0.05 },
              { prompt: '"줄넘기와 공은 어디에 넣어 둘까?" 알아볼 곳에 핀을 꽂아 보세요.', toolOptions: { places: [{ name: '체육 창고', icon: 'house', at: [3, 2] }, { name: '화단', icon: 'forest', at: [1, 0] }, { name: '놀이터', icon: 'park', at: [2, 1] }] }, target: { place: '체육 창고' }, difficulty: 0.1 },
              { prompt: '"학교 앞 길을 건널 때 무엇을 보고 건널까?" 알아볼 곳에 핀을 꽂아 보세요.', toolOptions: { places: [{ name: '놀이터', icon: 'park', at: [0, 0] }, { name: '교문 앞 건널목', icon: 'dot', at: [2, 2] }, { name: '화단', icon: 'forest', at: [3, 1] }] }, target: { place: '교문 앞 건널목' }, difficulty: 0.15,
                conclude: '학교 밖 길도 우리가 날마다 지나는 곳이라 꼭 알아봐야 해요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 바깥 곳의 물음 짓기', minutes: 12, tool: 'mindmap',
            teacher: '"화단에서는 무엇이 궁금할까요? 꽃 이름, 누가 물을 주는지…" 곳마다 어울리는 물음을 잇게 한 뒤, 학생이 직접 바깥 곳 물음을 하나 지어 말하게 한다. 물음이 아니라 "꽃이 예뻐요"처럼 느낌을 말하면 "그 꽃에 대해 궁금한 것은 무엇일까?" 하고 바꾸어 말하도록 돕는다.',
            task: '바깥 곳 가지에 어울리는 물음 카드를 잇고, 내 물음을 하나 지어 말해요.',
            levels: CARD_LV,
            items: [
              { prompt: '바깥 곳마다 어울리는 물음을 이어 보세요.', toolOptions: { mode: 'match', topic: '학교 밖이 궁금해', slots: [{ id: 's1', label: '화단' }, { id: 's2', label: '놀이터' }, { id: 's3', label: '교문' }], cards: ['꽃에 물은 누가 줄까?', '그네는 몇 명이 탈 수 있을까?', '교문은 언제 닫힐까?'] },
                target: { match: { s1: '꽃에 물은 누가 줄까?', s2: '그네는 몇 명이 탈 수 있을까?', s3: '교문은 언제 닫힐까?' } }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { cards: ['꽃에 물은 누가 줄까?', '그네는 몇 명이 탈 수 있을까?', '교문은 언제 닫힐까?', '꽃이 예뻐요.'] } } } },
              { prompt: '바깥 곳에 대한 묻는 말만 골라 보세요.', toolOptions: { mode: 'pick', basket: '학교 밖 물음', cards: ['운동장 흙은 왜 노랄까?', '나무가 커요.', '텃밭에는 무엇을 심었을까?', '건널목 신호등은 언제 바뀔까?', '놀이터가 좋아요.'] },
                target: { pick: ['운동장 흙은 왜 노랄까?', '텃밭에는 무엇을 심었을까?', '건널목 신호등은 언제 바뀔까?'] }, difficulty: 0.2 },
              { prompt: '창밖 바깥 곳 하나를 골라 "○○에서는 ○○○까?" 물음을 지어 짝에게 말해요. 다 하면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"학교 건물 밖에서 가장 궁금한 곳은 어디인가요?" 학생들이 고른 곳을 칠판 지도에 붙임 쪽지로 붙인다. 건널목처럼 학교 밖 길도 살펴볼 곳이라는 것을 짚고, 다음 시간에는 안전과 관련된 물음을 만든다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'map', options: { grid: [5, 3], places: [{ name: '텃밭', icon: 'field', at: [1, 1] }, { name: '교문', icon: 'dot', at: [0, 2] }, { name: '놀이터', icon: 'park', at: [4, 0] }] }, prompt: '"상추는 언제 자랄까?" 이 물음을 알아볼 곳에 핀을 꽂아 보세요.', target: { place: '텃밭' }, difficulty: 0.15 },
          { type: 'choice', prompt: '"나무가 커요."를 묻는 말로 바꾼 것은?', options: ['나무는 몇 살일까?', '나무가 정말 커요.', '나무를 좋아해요.'], answer: 0, difficulty: 0.15, explain: '끝이 \'~까?\'로 끝나야 묻는 말이에요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '학교 밖이 궁금해요',
      items: [
        { type: 'figure', wide: true, prompt: '꽃 이름을 알아볼 곳에 ○ 하세요.', tool: 'map', figures: [{ options: { grid: [5, 3], places: [{ name: '교문', icon: 'dot', at: [0, 2] }, { name: '화단', icon: 'forest', at: [2, 1] }, { name: '체육 창고', icon: 'house', at: [4, 0] }] }, caption: '' }], answer: '화단' },
        { type: 'choice', prompt: '바깥 곳에 대한 물음에 ○ 하세요.', options: ['그네는 몇 개일까?', '교실 칠판은 무슨 색일까?'], answer: '그네는 몇 개일까?' },
        { type: 'short', prompt: '학교 밖에서 궁금한 곳의 이름을 쓰세요.' },
        { type: 'short', prompt: '그곳에 대한 내 물음을 쓰세요.' },
        { type: 'draw', prompt: '창밖으로 보이는 학교 바깥 모습을 그려 보세요.' },
      ],
      easy: {
        note: '물음 속 낱말(꽃, 공, 신호등)을 찾으면 곳이 보여요.',
        items: [
          { type: 'choice', prompt: '공을 넣어 두는 곳에 ○ 하세요.', options: ['체육 창고', '화단'], answer: '체육 창고' },
          { type: 'choice', prompt: '묻는 말에 ○ 하세요.', options: ['꽃 이름은 무엇일까?', '꽃이 예뻐요.'], answer: '꽃 이름은 무엇일까?' },
          { type: 'draw', prompt: '학교 밖에서 궁금한 곳을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '지도가 작아(4×3칸) 곳을 찾기 쉬워요. 잇기에서는 맞는 칸에 초록 테두리가 생겨요.',
      base: '5×3칸 지도에서 물음을 읽고 핀을 꽂아요.',
      challenge: '6×4칸 지도에서 찾고, 물음이 아닌 느낌 카드를 골라내요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 학교는 건물 안만이라고 여긴다 → 창밖의 운동장·화단·교문을 함께 짚는다. ② 물음 대신 "예뻐요, 좋아요" 같은 느낌을 말한다 → 그 느낌에서 궁금한 것을 끌어내는 질문을 이어 준다. ③ 지도 칸과 실제 곳을 잇지 못한다 → 교실 창문에서 보이는 곳부터 지도에 짚어 본다. 칸 지도는 실제 학교 모양이 아니니 우리 학교 이야기는 말로 덧붙인다.',
  }));

  lessons.push(L(4, {
    title: '안전이 궁금한 곳에서 물음과 약속 만들기',
    objective: '계단·복도·건널목처럼 다치기 쉬운 곳에서 "왜 ~하면 안 될까?" 물음을 만들고, 그 물음에 맞는 안전 약속을 고를 수 있다.',
    illustration: ART('paper children walking slowly on the right side of school stairs holding the handrail, with a soft question mark and a check mark floating nearby', '왜 뛰면 안 될까?', [
      { motif: 'house', x: 120, y: 214, color: 'mint' }, { motif: 'tree', x: 380, y: 214 }, { motif: 'star', x: 330, y: 84, s: 0.6 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"복도에 \'뛰지 마세요\'라고 쓰여 있어요. 왜 뛰면 안 될까요?" 학생들의 짐작을 두세 개 듣는다. "이렇게 \'왜 ~할까?\' 하고 물으면 안전 약속의 까닭을 알게 돼요." 시연 단추로 물음 카드와 약속 카드가 이어지는 모습을 보여 준다. 다친 경험을 말할 때 친구 이름을 대지 않게 한다.',
        student: '학교에서 넘어지거나 부딪힐 뻔했던 곳을 하나 떠올려 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '왜 그럴까?', slots: [{ id: 's1', label: '계단에서 왜 뛰면 안 될까?' }], cards: ['구르면 크게 다쳐요', '계단이 예뻐요'], shuffle: false }, sequence: [{ match: { s1: '구르면 크게 다쳐요' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 안전 물음과 까닭 잇기', minutes: 13, tool: 'mindmap',
            teacher: '"이 물음의 답, 곧 까닭은 무엇일까요?" 물음을 읽고 까닭 카드를 잇게 한다. "선생님이 하지 말라고 하니까요"라는 대답이 나오면 "선생님이 안 계셔도 지켜야 할까요? 왜일까요?"라고 다시 묻는다. 까닭에 \'다쳐요, 부딪혀요\'처럼 몸에 생기는 일이 들어 있는지 살피게 한다.',
            task: '안전 물음을 읽고 알맞은 까닭 카드를 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '물음마다 알맞은 까닭을 이어 보세요.', toolOptions: { mode: 'match', topic: '왜 그럴까?', slots: [{ id: 's1', label: '복도 모퉁이에서 왜 천천히 걸을까?' }, { id: 's2', label: '젖은 바닥에서 왜 조심할까?' }], cards: ['보이지 않는 친구와 부딪혀요', '미끄러져 넘어져요'] },
                target: { match: { s1: '보이지 않는 친구와 부딪혀요', s2: '미끄러져 넘어져요' } }, difficulty: 0.1 },
              { prompt: '세 물음에 알맞은 까닭을 이어 보세요.', toolOptions: { mode: 'match', topic: '왜 그럴까?', slots: [{ id: 's1', label: '그네 앞을 왜 지나가면 안 될까?' }, { id: 's2', label: '왜 신호등 초록불에 건널까?' }, { id: 's3', label: '문틈에 왜 손을 넣지 않을까?' }], cards: ['그네에 부딪혀 다쳐요', '차가 멈춘 때라서요', '문에 손이 끼어요'] },
                target: { match: { s1: '그네에 부딪혀 다쳐요', s2: '차가 멈춘 때라서요', s3: '문에 손이 끼어요' } }, difficulty: 0.2,
                levels: { challenge: { toolOptions: { cards: ['그네에 부딪혀 다쳐요', '차가 멈춘 때라서요', '문에 손이 끼어요', '선생님이 화내셔요'] } } } },
              { prompt: '안전의 까닭을 묻는 물음만 골라 보세요.', toolOptions: { mode: 'pick', basket: '안전 물음', cards: ['계단 손잡이는 왜 있을까?', '계단은 몇 칸일까?', '왜 교실에서 공을 차면 안 될까?', '공은 무슨 색일까?'] },
                target: { pick: ['계단 손잡이는 왜 있을까?', '왜 교실에서 공을 차면 안 될까?'] }, difficulty: 0.25,
                hints: ['물음의 답이 \'다치지 않으려고\'와 관계있는지 떠올려 봐요.', '몇 칸, 무슨 색을 묻는 물음은 안전과 관계없어요.', '손잡이와 교실 공차기를 묻는 물음 두 장을 넣어요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 위험한 때 어떻게 할까', minutes: 13, tool: 'emotion',
            teacher: '"이럴 때 어떻게 할까요? 고른 것을 하면 어떤 일이 생길까요?" 보기를 고른 뒤 결과 칸을 소리 내어 읽게 한다. 복도에서 친구가 뛰어오는 장면은 교실 뒤에서 직접 \'걷는 사람\'과 \'멈추는 사람\'이 되어 천천히 몸으로 해 본다.',
            task: '위험한 때를 읽고 어떻게 할지 고른 뒤, 몸으로 천천히 해 봐요.',
            levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
            items: [
              { prompt: '쉬는 시간에 친구가 복도를 뛰자고 해요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '종이 울리자 친구가 "운동장까지 뛰어가자!" 하고 말해요.', choices: [
                { id: 'run', text: '같이 뛰어가요', result: '모퉁이에서 다른 반 친구와 부딪혀요.', mood: '속상함', why: '모퉁이 너머가 보이나요?' },
                { id: 'walk', text: '"걸어서 가자" 하고 말해요', result: '둘 다 다치지 않고 운동장에 가요.', mood: '편안함' }] }, target: { choice: 'walk' }, difficulty: 0.05 },
              { prompt: '계단을 내려가는데 뒤에서 친구가 밀어요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '계단을 내려가는데 뒤 친구가 장난으로 등을 밀어요.', choices: [
                { id: 'push', text: '나도 돌아서 밀어요', result: '둘 다 계단에서 넘어질 수 있어요.', mood: '무서움', why: '계단에서 밀면 어떻게 될까요?' },
                { id: 'say', text: '손잡이를 잡고 "밀지 마" 하고 말해요', result: '친구가 멈추고 둘 다 안전하게 내려가요.', mood: '편안함' },
                { id: 'hurry', text: '빨리 뛰어 내려가요', result: '발을 헛디뎌 구를 수 있어요.', mood: '무서움', why: '계단을 뛰면 발이 어떻게 될까요?' }] }, target: { choice: 'say' }, difficulty: 0.15 },
              { prompt: '교실 뒤에서 \'뛰는 친구를 보고 멈추기\'를 짝과 천천히 몸으로 해 봐요. 다 하면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 만든 안전 물음 가운데 우리 반 약속으로 삼고 싶은 것은 무엇인가요?" 두세 개를 골라 \'왜 ~할까? → 그래서 ~해요\' 꼴로 칠판에 적는다. 다음 시간부터 학교를 둘러보며 물음의 답을 찾는다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '왜 그럴까?', slots: [{ id: 'e1', label: '가위는 왜 날을 닫아 들고 다닐까?' }, { id: 'e2', label: '급식실에서 왜 뛰지 않을까?' }], cards: ['날에 친구가 찔려요', '국물에 데거나 미끄러져요'] }, prompt: '물음마다 알맞은 까닭을 이어 보세요.', target: { match: { e1: '날에 친구가 찔려요', e2: '국물에 데거나 미끄러져요' } }, difficulty: 0.15 },
          { type: 'choice', prompt: '안전 약속을 지키는 까닭으로 알맞은 것은?', options: ['선생님께 혼나지 않으려고', '나와 친구가 다치지 않으려고', '빨리 가려고'], answer: 1, difficulty: 0.1, explain: '선생님이 안 계셔도 다치지 않으려고 지켜요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '안전 물음 만들기',
      items: [
        { type: 'figure', wide: true, prompt: '물음과 까닭을 선으로 이으세요.', tool: 'mindmap', figures: [{ options: { mode: 'match', topic: '왜?', slots: [{ id: 's1', label: '계단에서 왜 뛰지 않을까?' }, { id: 's2', label: '젖은 바닥은 왜 조심할까?' }], cards: ['미끄러져요', '굴러서 다쳐요'] }, caption: '' }], answer: '계단-굴러서 다쳐요, 젖은 바닥-미끄러져요' },
        { type: 'blank', prompt: '빈칸에 알맞은 말을 써서 안전 물음을 만드세요.', text: '복도에서 ___ 뛰면 안 될까?', answer: '왜' },
        { type: 'check', prompt: '내가 지킬 안전 약속에 ✓ 하세요.', options: ['계단 손잡이를 잡아요', '복도에서 걸어요', '초록불에 건너요', '문틈에 손을 넣지 않아요'] },
        { type: 'short', prompt: '학교에서 안전이 궁금한 곳의 물음을 하나 쓰세요.' },
      ],
      easy: {
        note: '\'왜 ~할까?\'로 물어요.',
        items: [
          { type: 'choice', prompt: '계단에서 바른 행동에 ○ 하세요.', options: ['손잡이를 잡아요', '뛰어 내려가요'], answer: '손잡이를 잡아요' },
          { type: 'choice', prompt: '안전 물음에 ○ 하세요.', options: ['왜 복도에서 뛰지 않을까?', '복도는 길어요.'], answer: '왜 복도에서 뛰지 않을까?' },
          { type: 'draw', prompt: '안전하게 계단을 다니는 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '까닭 잇기에서 맞으면 초록 테두리가 생겨요. 어떻게 할까 고르기는 보기가 둘이에요.',
      base: '모두 이은 뒤 확인을 눌러요. 고른 까닭을 짝에게 말해요.',
      challenge: '\'선생님이 화내셔요\'처럼 진짜 까닭이 아닌 카드와 그럴듯한 보기를 골라내요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 약속의 까닭을 "혼나니까"라고 여긴다 → 몸에 생기는 일(부딪힘·미끄러짐)로 까닭을 바꾸어 말하게 한다. ② 안전과 상관없는 물음(몇 칸?)을 안전 물음으로 고른다 → 답이 \'다치지 않으려고\'와 이어지는지 묻는다. ③ 몸으로 해 보기에서 장난으로 실제로 뛴다 → 아주 느린 걸음으로만 하고, 교사가 먼저 시범을 보인다. 다친 경험을 나눌 때 친구 이름을 말하지 않게 한다.',
  }));

  // ───────────────────────── 5~8차시: 둘러보며 그림·안내판으로 기록하기 ─────────────────────────

  lessons.push(L(5, {
    title: '특별실을 둘러보고 본 물건으로 곳 나누기',
    objective: '특별실을 둘러보며 본 물건을 그 곳에 맞게 나누고, 본 물건 하나를 색종이 조각으로 꾸며 기록할 수 있다.',
    illustration: ART('a line of paper children with clipboards peeking into a music room with a drum and a nurse room with a first aid box', '무엇을 보았나요?', [
      { motif: 'house', x: 110, y: 214, color: 'rose' }, { motif: 'house', x: 370, y: 216, color: 'lavender', s: 0.9 }, { motif: 'flower', x: 240, y: 228 }]),
    safety: WALK_SAFE,
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"오늘은 지난 시간 물음을 들고 보건실·음악실·도서실을 둘러봐요. 무엇을 보면 그곳이 어떤 곳인지 알 수 있을까요?" 둘러볼 때 지킬 약속(오른쪽으로 천천히, 작은 소리로)을 먼저 함께 말한다. 시연 단추로 \'실로폰\' 카드가 \'음악실\' 가지에 들어가는 모습을 보여 준다. 둘러보기는 선생님과 줄을 서서 15분 안에 다녀온다.',
        student: '둘러볼 때 무엇을 살펴볼지 내 물음을 다시 떠올려 봐요.',
        demo: { tool: 'mindmap', options: { topic: '어디에서 보았을까?', slots: ['음악실', '보건실'], cards: ['실로폰', '붕대'], shuffle: false }, sequence: [{ sort: { '음악실': ['실로폰'], '보건실': ['붕대'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 본 물건으로 곳 나누기', minutes: 12, tool: 'mindmap',
            teacher: '둘러보고 돌아와서 "음악실에서 무엇을 보았나요?" 하고 본 것을 서너 개 듣는다. "그 물건이 있으면 왜 음악실이라는 걸 알 수 있을까요?" 물건이 하는 일로 까닭을 말하게 한다. 벽시계처럼 어느 곳에나 있는 물건을 한 곳에 넣는 학생에게 "우리 교실에도 시계가 있나요?"라고 묻는다.',
            task: '둘러보며 본 물건 카드를 그 물건이 있던 곳 가지에 나누어 놓아요.',
            levels: CARD_LV,
            items: [
              { prompt: '본 물건을 세 곳으로 나누어 놓아 보세요.', toolOptions: { topic: '어디에서 보았을까?', slots: ['보건실', '음악실', '도서실'], cards: ['붕대와 연고', '누워 쉬는 침대', '실로폰', '큰북', '그림책 꽂이', '책 빌리는 자리'] },
                target: { sort: { '보건실': ['붕대와 연고', '누워 쉬는 침대'], '음악실': ['실로폰', '큰북'], '도서실': ['그림책 꽂이', '책 빌리는 자리'] } }, difficulty: 0.1,
                levels: { easy: { prompt: '본 물건을 두 곳으로 나누어 놓아 보세요.', toolOptions: { slots: ['보건실', '음악실'], cards: ['붕대와 연고', '누워 쉬는 침대', '실로폰', '큰북'] }, target: { sort: { '보건실': ['붕대와 연고', '누워 쉬는 침대'], '음악실': ['실로폰', '큰북'] } } } } },
              { prompt: '급식실과 교무실에서 본 것을 나누어 놓아 보세요.', toolOptions: { topic: '어디에서 보았을까?', slots: ['급식실', '교무실'], cards: ['쌓아 둔 식판', '큰 국솥', '교감 선생님 자리', '선생님 책상 여러 개'] },
                target: { sort: { '급식실': ['쌓아 둔 식판', '큰 국솥'], '교무실': ['교감 선생님 자리', '선생님 책상 여러 개'] } }, difficulty: 0.15 },
              { prompt: '그곳에서만 본 물건을 나누어 보세요. 어디서나 볼 수 있는 물건은 남겨 두세요.', toolOptions: { topic: '그곳에만 있어요', slots: ['보건실', '음악실'], cards: ['체온계', '탬버린', '벽시계', '키 재는 막대', '피아노', '형광등'] },
                target: { sort: { '보건실': ['체온계', '키 재는 막대'], '음악실': ['탬버린', '피아노'] } }, difficulty: 0.25,
                predict: { q: '벽시계를 보면 어느 곳인지 알 수 있을까요?', options: ['알 수 있어요', '알 수 없어요'], answer: 1 },
                conclude: '어느 곳에나 있는 물건보다 그곳에서만 쓰는 물건이 그곳을 알려 줘요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 본 물건을 그림으로 남기기', minutes: 15, tool: 'collage',
            teacher: '"본 것을 그림으로 남기면 그것도 훌륭한 기록이에요. 다음에 보면 무엇을 보았는지 떠오르거든요." 판에서 본 물건을 색종이 조각으로 꾸민 뒤, 활동지에 실제로 본 물건 하나를 그리게 한다. "그림은 자료가 아니에요"라는 학생에게 지난주 칠판 사진을 보여 주며 "이 사진만 봐도 무엇을 했는지 기억나지요?"라고 말한다.',
            task: '본 물건을 색종이 조각으로 꾸미고, 활동지에 실제로 본 것을 하나 그려요.',
            levels: {
              easy: { shapes: ['circle', 'square', 'rect'], colors: ['빨강', '하양', '갈색', '노랑', '파랑'], sizes: ['m', 'l'] },
              base: { shapes: ['circle', 'square', 'rect', 'triangle', 'semi'] },
              challenge: {},
            },
            items: [
              { prompt: '보건실 구급상자예요. 하양 큰 네모 하나에 빨강 긴 네모 두 개로 십자를 꾸며 보세요.', target: { has: [{ shape: 'square', color: '하양', size: 'l', n: 1 }, { shape: 'rect', color: '빨강', n: 2 }] }, difficulty: 0.1,
                hints: ['구급상자 몸통과 십자 무늬를 어떤 조각으로 만들지 먼저 정해요.', '몸통은 큰 네모 한 장이에요. 십자는 긴 네모 두 장을 하나는 돌려서 겹쳐요.', '하양 네모를 크게 붙이고, 빨강 긴 네모 두 장을 붙인 뒤 한 장을 돌려요.'] },
              { prompt: '음악실 큰북이에요. 갈색 큰 동그라미 하나와 갈색 긴 네모 북채 두 개를 붙여 보세요.', target: { has: [{ shape: 'circle', color: '갈색', size: 'l', n: 1 }, { shape: 'rect', color: '갈색', n: 2 }] }, difficulty: 0.15 },
              { prompt: '도서실 책꽂이예요. 긴 네모 책을 네 권 이상 나란히 꽂아 보세요.', target: { has: [{ shape: 'rect', min: 4 }] }, difficulty: 0.15 },
              { prompt: '둘러본 곳에서 본 물건 하나를 활동지에 크게 그려요. 다 그리면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 내 물음의 답을 찾았나요? 무엇을 보고 알았나요?" 두세 명이 본 물건과 답을 함께 말하게 한다. 그린 그림을 교실 뒤 \'학교 둘러보기\' 판에 붙여 두고, 다음 시간에는 안내판과 표지를 읽어 알아본다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '어디에서 보았을까?', slots: [{ id: 'e1', label: '피아노' }, { id: 'e2', label: '책 돌려주는 상자' }], cards: ['음악실', '도서실'] }, prompt: '물건과 그 물건이 있는 곳을 이어 보세요.', target: { match: { e1: '음악실', e2: '도서실' } }, difficulty: 0.1 },
          { type: 'choice', prompt: '본 물건을 그림으로 그려 둔 것도 기록일까요?', options: ['네, 기록이에요', '아니요, 글만 기록이에요'], answer: 0, difficulty: 0.15, explain: '그림을 보면 무엇을 보았는지 다시 떠올릴 수 있어서 기록이에요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '둘러보며 본 것',
      items: [
        { type: 'figure', wide: true, prompt: '본 물건과 곳을 선으로 이으세요.', tool: 'mindmap', figures: [{ options: { mode: 'match', topic: '어디에서?', slots: [{ id: 's1', label: '실로폰' }, { id: 's2', label: '체온계' }], cards: ['음악실', '보건실'] }, caption: '' }], answer: '실로폰-음악실, 체온계-보건실' },
        { type: 'table', prompt: '둘러본 곳과 본 물건을 쓰세요.', columns: ['둘러본 곳', '본 물건'], cells: [['보건실', ''], ['음악실', ''], ['도서실', '']] },
        { type: 'choice', prompt: '어디서나 볼 수 있는 물건에 ○ 하세요.', options: ['벽시계', '큰북', '붕대'], answer: '벽시계' },
        { type: 'draw', prompt: '둘러본 곳에서 본 물건 하나를 크게 그리세요.' },
      ],
      easy: {
        note: '그곳에서만 쓰는 물건을 떠올려요.',
        items: [
          { type: 'choice', prompt: '음악실에서 본 것에 ○ 하세요.', options: ['큰북', '붕대'], answer: '큰북' },
          { type: 'choice', prompt: '보건실에서 본 것에 ○ 하세요.', options: ['침대', '실로폰'], answer: '침대' },
          { type: 'draw', prompt: '본 물건 하나를 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '두 곳으로만 나누고, 맞으면 초록 테두리가 생겨요. 꾸미기 조각은 모양 세 가지예요.',
      base: '세 곳으로 나누고, 어디서나 있는 물건을 남겨 둬요.',
      challenge: '모든 모양·색 조각에서 필요한 것을 골라 꾸미고, 함정 카드를 골라내요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 그림으로 남긴 것은 자료가 아니라고 여긴다 → 칠판 사진·친구 그림으로 기억이 되살아나는 경험을 하게 한다. ② 벽시계·형광등처럼 어디에나 있는 물건으로 곳을 정한다 → 우리 교실에도 있는지 견주게 한다. ③ 둘러보기 중 다른 반 앞에서 떠든다 → 손가락 입술 신호를 미리 정한다. 특별실 방문은 미리 그 곳 선생님께 시간을 여쭈어 둔다.',
  }));

  lessons.push(L(6, {
    title: '학교 안내판과 표지 읽고 뜻 알아내기',
    objective: '학교에 붙은 표지 그림의 뜻을 알아내고, 안내판 글을 읽어 새로 알게 된 것을 말할 수 있다.',
    illustration: ART('a school hallway with simple paper signs on the wall: a green exit sign with a running figure, a hand washing sign and a quiet sign with a finger on lips', '표지가 알려 줘요', [
      { motif: 'house', x: 120, y: 214, color: 'mint' }, { motif: 'star', x: 340, y: 86, s: 0.6 }, { motif: 'tree', x: 400, y: 214 }]),
    safety: WALK_SAFE,
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"글자를 읽지 못하는 동생도 이 그림을 보면 무슨 뜻인지 알 수 있을까요?" 비상구 표지 사진을 보여 주고 무엇이 보이는지(초록 바탕, 문, 달리는 사람) 하나씩 말하게 한다. "그림 하나하나가 뜻을 알려 줘요. 이런 그림을 표지라고 해요." 시연 단추로 표지와 뜻이 이어지는 모습을 보여 준다.',
        student: '우리 교실 안이나 복도에서 본 표지를 하나 떠올려 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '표지의 뜻', slots: [{ id: 's1', label: '입에 손가락을 댄 그림' }], cards: ['조용히 해요', '손을 씻어요'], shuffle: false }, sequence: [{ match: { s1: '조용히 해요' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 표지 그림과 뜻 잇기', minutes: 12, tool: 'mindmap',
            teacher: '"표지 그림에서 무엇이 보이나요? 그것이 무엇을 알려 줄까요?" 그림 설명을 소리 내어 읽고 몸짓으로 흉내 내 보게 한다(손가락을 입에, 손 비비기). 빨간 빗금이 있는 표지를 \'해요\'로 읽는 학생에게 "빨간 줄이 그어지면 어떤 뜻일까요?"라고 묻는다.',
            task: '표지 그림 설명을 읽고 알맞은 뜻 카드를 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '표지 그림과 뜻을 이어 보세요.', toolOptions: { mode: 'match', topic: '표지의 뜻', slots: [{ id: 's1', label: '초록 바탕, 문으로 달려 나가는 사람' }, { id: 's2', label: '물방울과 두 손 그림' }], cards: ['위험할 때 나가는 문', '손을 씻어요'] },
                target: { match: { s1: '위험할 때 나가는 문', s2: '손을 씻어요' } }, difficulty: 0.1 },
              { prompt: '세 표지와 뜻을 이어 보세요.', toolOptions: { mode: 'match', topic: '표지의 뜻', slots: [{ id: 's1', label: '뛰는 사람에 빨간 빗금' }, { id: 's2', label: '하얀 바탕에 빨간 십자' }, { id: 's3', label: '펼친 책 그림' }], cards: ['뛰지 마세요', '보건실', '도서실'] },
                target: { match: { s1: '뛰지 마세요', s2: '보건실', s3: '도서실' } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['뛰지 마세요', '보건실', '도서실', '뛰어도 돼요'] } } } },
              { prompt: '빨간 빗금이 있는 표지만 골라 보세요.', toolOptions: { mode: 'pick', basket: '하지 말아요 표지', cards: ['공에 빨간 빗금', '두 손 비비는 그림', '휴대 전화에 빨간 빗금', '변기 그림'] },
                target: { pick: ['공에 빨간 빗금', '휴대 전화에 빨간 빗금'] }, difficulty: 0.2,
                conclude: '빨간 빗금이 그어진 표지는 그 일을 하지 말라는 뜻이에요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 안내판 글 읽고 알게 된 것', minutes: 14, tool: 'story',
            teacher: '"안내판에 쓰인 글을 선생님과 함께 읽어요." 문항의 안내판 글을 손가락으로 짚으며 같이 읽은 뒤 빈칸에 알맞은 카드를 넣게 한다. 짐작으로 고르는 학생에게 "안내판 어디에 그 말이 있었지요? 손가락으로 짚어 봐요"라고 한다. 마지막에 복도 안내판 하나를 모둠별로 찾아 읽고 온다(교실 앞 복도까지만).',
            task: '안내판 글을 읽고 빈칸에 알맞은 카드를 넣어요. 복도 안내판도 직접 찾아 읽어요.',
            levels: CARD_LV,
            items: [
              { prompt: '안내판: "도서실은 아침 9시에 문을 열어요. 한 번에 2권 빌려요." 빈칸을 채워 보세요.', toolOptions: { mode: 'fill', slots: [{ id: 'f1', label: '도서실은 ___에 문을 열어요.' }, { id: 'f2', label: '책은 한 번에 ___ 빌려요.' }], cards: ['9시', '12시', '2권', '5권'] },
                target: { fill: { f1: '9시', f2: '2권' } }, difficulty: 0.1 },
              { prompt: '안내판: "1학년은 11시 50분에 먹어요. 식판은 두 손으로 들어요." 빈칸을 채워 보세요.', toolOptions: { mode: 'fill', slots: [{ id: 'f1', label: '1학년은 ___에 먹어요.' }, { id: 'f2', label: '식판은 ___ 들어요.' }], cards: ['11시 50분', '12시 30분', '두 손으로', '한 손으로'] },
                target: { fill: { f1: '11시 50분', f2: '두 손으로' } }, difficulty: 0.15 },
              { prompt: '안내판: "보건실: 다쳤을 때 오세요. 점심시간에는 2층 교무실로." 안내판으로 답을 알 수 있는 물음만 골라 보세요.', toolOptions: { mode: 'pick', basket: '안내판으로 알 수 있어요', cards: ['언제 보건실에 갈까?', '점심시간에는 어디로 갈까?', '보건 선생님은 몇 살일까?', '침대는 몇 개일까?'] },
                target: { pick: ['언제 보건실에 갈까?', '점심시간에는 어디로 갈까?'] }, difficulty: 0.25,
                hints: ['안내판에 쓰인 말을 한 줄씩 다시 읽어 봐요.', '안내판에 없는 것(나이, 침대 수)은 안내판으로 알 수 없어요.', '\'다쳤을 때\'와 \'점심시간에는\'이 쓰여 있어요. 그 두 물음을 골라요.'] },
              { prompt: '모둠과 교실 앞 복도의 안내판 하나를 찾아 읽고, 알게 된 것을 짝에게 말해요. 다 하면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"복도에서 찾은 안내판에서 무엇을 새로 알게 되었나요?" 모둠마다 한 가지씩 말하게 한다. 표지는 그림으로, 안내판은 글로 알려 준다는 것을 견주어 짚는다. 다음 시간에는 학교 지도의 기호를 읽어 본다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '표지의 뜻', slots: [{ id: 'e1', label: '휴지와 휴지통 그림' }, { id: 'e2', label: '신발에 빨간 빗금' }], cards: ['쓰레기는 휴지통에', '신발 신고 들어오지 마세요'] }, prompt: '표지 그림과 뜻을 이어 보세요.', target: { match: { e1: '쓰레기는 휴지통에', e2: '신발 신고 들어오지 마세요' } }, difficulty: 0.15 },
          { type: 'choice', prompt: '안내판: "음악실 악기는 선생님과 함께 써요." 이 글로 알 수 있는 것은?', options: ['악기는 혼자 꺼내 써요', '악기는 선생님과 함께 써요', '음악실은 3층이에요'], answer: 1, difficulty: 0.15, explain: '안내판에 \'선생님과 함께\'라고 쓰여 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '표지와 안내판 읽기',
      items: [
        { type: 'figure', wide: true, prompt: '표지 그림과 뜻을 선으로 이으세요.', tool: 'mindmap', figures: [{ options: { mode: 'match', topic: '표지', slots: [{ id: 's1', label: '입에 손가락' }, { id: 's2', label: '빨간 십자' }], cards: ['보건실', '조용히 해요'] }, caption: '' }], answer: '입에 손가락-조용히 해요, 빨간 십자-보건실' },
        { type: 'choice', prompt: '"뛰지 마세요" 표지에 ○ 하세요.', options: ['뛰는 사람에 빨간 빗금', '두 손 비비는 그림', '펼친 책 그림'], answer: '뛰는 사람에 빨간 빗금' },
        { type: 'short', prompt: '복도에서 읽은 안내판의 글을 하나 쓰세요.' },
        { type: 'short', prompt: '그 안내판으로 새로 알게 된 것을 쓰세요.' },
        { type: 'draw', prompt: '우리 반에 붙이고 싶은 표지를 그려 보세요.' },
      ],
      easy: {
        note: '그림에 무엇이 있는지 먼저 말해 봐요.',
        items: [
          { type: 'choice', prompt: '손을 씻으라는 표지에 ○ 하세요.', options: ['물방울과 두 손', '펼친 책'], answer: '물방울과 두 손' },
          { type: 'choice', prompt: '빨간 빗금은 어떤 뜻인가요?', options: ['하지 말아요', '해도 돼요'], answer: '하지 말아요' },
          { type: 'draw', prompt: '내가 아는 표지를 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 놓으면 초록 테두리가 생기고, 틀리면 카드가 돌아와요.',
      base: '모두 놓은 뒤 확인을 눌러요. 안내판에서 그 말을 손가락으로 짚어요.',
      challenge: '\'뛰어도 돼요\'처럼 반대 뜻 카드가 섞여 있고, 안내판에 없는 물음을 골라내요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 빨간 빗금 표지를 \'해요\'로 읽는다 → 빗금은 \'하지 말아요\'라는 약속을 몸짓(손으로 ×)과 함께 익힌다. ② 안내판을 읽지 않고 짐작으로 답한다 → 답이 쓰인 줄을 손가락으로 짚게 한다. ③ 안내판에 없는 것도 안내판으로 알 수 있다고 여긴다 → 쓰인 것과 쓰이지 않은 것을 가르는 질문을 한다. 문항의 시각·권 수는 예시이니 우리 학교 안내판으로 바꾸어 말해 준다.',
  }));

  lessons.push(L(7, {
    title: '학교 지도의 기호를 읽고 곳 찾기',
    objective: '학교 칸 지도에서 기호의 뜻을 범례에서 찾아 읽고, 이름이 없어도 기호를 보고 찾는 곳에 핀을 꽂을 수 있다.',
    illustration: ART('a paper map of a school seen from above with tiny symbols for a library, a nurse room and a playground, and a legend box in the corner', '기호를 읽어요', [
      { motif: 'tree', x: 90, y: 214 }, { motif: 'house', x: 380, y: 216, color: 'buttercup', s: 0.8 }, { motif: 'flower', x: 300, y: 228 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"지도에 글자 대신 이런 작은 그림이 있어요. 이 그림을 기호라고 해요." 범례(기호 뜻 칸)를 함께 손가락으로 짚는다. "책 그림 기호는 무엇을 뜻할까요?" 시연 단추로 기호 \'도서실\' 자리에 핀이 꽂히는 모습을 보여 준다. 지난 시간 표지처럼 기호도 그림으로 뜻을 알려 준다고 잇는다.',
        student: '범례에서 책 기호와 십자 기호를 찾아 손가락으로 짚어 봐요.',
        demo: { tool: 'map', options: { grid: [5, 3], names: false, places: [{ name: '도서실', icon: 'library', at: [1, 1] }, { name: '보건실', icon: 'hospital', at: [3, 0], legend: '보건실' }, { name: '운동장', icon: 'park', at: [4, 2], legend: '운동장' }] }, sequence: [{ place: '도서실' }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 범례 빈칸 채우기', minutes: 12, tool: 'map',
            teacher: '"이 기호는 어떤 모양이에요? 그 모양이 무엇과 닮았나요?" 기호 모양(십자, 책, 나무)을 말로 먼저 설명하게 한 뒤 뜻을 고르게 한다. 지도 위의 기호와 범례 칸의 기호를 손가락 두 개로 동시에 짚게 하면 헷갈리지 않는다.',
            task: '범례의 빈칸을 눌러 기호마다 알맞은 뜻을 골라요.',
            levels: {
              easy: { grid: [4, 3] },
              base: { grid: [5, 3] },
              challenge: { grid: [6, 4] },
            },
            items: [
              { prompt: '범례 빈칸을 눌러 두 기호의 뜻을 골라 보세요.', toolOptions: { mode: 'legend', places: [{ name: '도서실', icon: 'library', at: [1, 1] }, { name: '보건실', icon: 'hospital', at: [3, 0], legend: '보건실' }] }, target: { legend: { library: '도서실', hospital: '보건실' } }, difficulty: 0.1 },
              { prompt: '범례 빈칸을 눌러 세 기호의 뜻을 골라 보세요.', toolOptions: { mode: 'legend', places: [{ name: '운동장', icon: 'park', at: [0, 0], legend: '운동장' }, { name: '급식실', icon: 'market', at: [2, 2], legend: '급식실' }, { name: '교문', icon: 'dot', at: [3, 1], legend: '교문' }] }, target: { legend: { park: '운동장', market: '급식실', dot: '교문' } }, difficulty: 0.15 },
              { prompt: '범례 빈칸을 눌러 기호의 뜻을 골라 보세요. 지도에 없는 뜻도 섞여 있어요.', toolOptions: { mode: 'legend', places: [{ name: '텃밭', icon: 'field', at: [0, 2], legend: '텃밭' }, { name: '화단', icon: 'forest', at: [2, 0], legend: '화단' }, { name: '도서실', icon: 'library', at: [3, 2] }], extra: ['수영장', '주차장'] }, target: { legend: { field: '텃밭', forest: '화단', library: '도서실' } }, difficulty: 0.25 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 기호만 보고 곳 찾기', minutes: 14, tool: 'map',
            teacher: '"이번 지도에는 곳 이름이 없어요. 범례를 보고 기호로 찾아요." 찾을 곳의 기호를 범례에서 먼저 찾고, 같은 모양을 지도에서 찾게 한다. 아무 칸에나 핀을 꽂는 학생에게 "범례에서 그 곳 기호는 어떤 모양이었나요?"라고 묻는다. 끝나면 교실 칠판 옆 우리 학교 안내도에서 보건실을 찾아보게 한다.',
            task: '이름 없는 지도에서 범례를 보고 찾는 곳의 기호에 핀을 꽂아요.',
            levels: {
              easy: { grid: [4, 3], names: true },
              base: { grid: [5, 3], names: false },
              challenge: { grid: [6, 4], names: false },
            },
            items: [
              { prompt: '넘어져 무릎을 다쳤어요. 가야 할 곳의 기호에 핀을 꽂아 보세요.', toolOptions: { places: [{ name: '보건실', icon: 'hospital', at: [2, 1], legend: '보건실' }, { name: '도서실', icon: 'library', at: [0, 0] }, { name: '운동장', icon: 'park', at: [3, 2], legend: '운동장' }] }, target: { place: '보건실' }, difficulty: 0.1 },
              { prompt: '그림책을 빌리고 싶어요. 가야 할 곳의 기호에 핀을 꽂아 보세요.', toolOptions: { places: [{ name: '급식실', icon: 'market', at: [1, 2], legend: '급식실' }, { name: '도서실', icon: 'library', at: [3, 0] }, { name: '화단', icon: 'forest', at: [0, 1], legend: '화단' }] }, target: { place: '도서실' }, difficulty: 0.15 },
              { prompt: '상추가 자라는 곳을 보러 가요. 그곳 기호에 핀을 꽂아 보세요.', toolOptions: { places: [{ name: '화단', icon: 'forest', at: [1, 0], legend: '화단' }, { name: '텃밭', icon: 'field', at: [3, 2], legend: '텃밭' }, { name: '운동장', icon: 'park', at: [2, 1], legend: '운동장' }] }, target: { place: '텃밭' }, difficulty: 0.2,
                predict: { q: '꽃이 있는 화단과 채소가 자라는 텃밭은 같은 곳일까요?', options: ['같아요', '달라요'], answer: 1 } },
              { prompt: '교실 칠판 옆 우리 학교 안내도에서 보건실과 도서실을 찾아 짝에게 짚어 보여요. 다 하면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"기호는 왜 글자 대신 그림으로 그릴까요?" 동생이나 다른 나라 사람도 알 수 있다는 대답을 이끌어 낸다. 출구 1번에서 틀린 학생은 범례를 다시 짚으며 기호 모양을 말해 보게 한다. 다음 시간에는 눈·귀·코로 학교 둘레를 살핀다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'map', options: { grid: [5, 3], names: false, places: [{ name: '운동장', icon: 'park', at: [0, 1], legend: '운동장' }, { name: '보건실', icon: 'hospital', at: [4, 0], legend: '보건실' }, { name: '급식실', icon: 'market', at: [2, 2], legend: '급식실' }] }, prompt: '점심을 먹으러 가요. 그곳 기호에 핀을 꽂아 보세요.', target: { place: '급식실' }, difficulty: 0.15 },
          { type: 'choice', prompt: '지도에서 기호의 뜻은 어디에서 찾을까요?', options: ['범례', '교문', '제목'], answer: 0, difficulty: 0.1, explain: '범례에 기호마다 뜻이 쓰여 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '학교 지도 기호 읽기',
      items: [
        { type: 'figure', wide: true, prompt: '범례 빈칸에 기호의 뜻을 쓰세요.', tool: 'map', figures: [{ options: { mode: 'legend', grid: [5, 3], places: [{ name: '도서실', icon: 'library', at: [1, 1] }, { name: '보건실', icon: 'hospital', at: [3, 0], legend: '보건실' }, { name: '운동장', icon: 'park', at: [4, 2], legend: '운동장' }] }, caption: '' }], answer: '책 기호-도서실, 십자 기호-보건실, 나무 기호-운동장' },
        { type: 'choice', prompt: '십자 기호가 뜻하는 곳에 ○ 하세요.', options: ['보건실', '도서실', '급식실'], answer: '보건실' },
        { type: 'short', prompt: '우리 학교 안내도에서 찾은 곳을 하나 쓰세요.' },
        { type: 'draw', prompt: '음악실을 뜻하는 기호를 내가 만들어 그려 보세요.' },
      ],
      easy: {
        note: '기호가 어떤 모양인지 먼저 말해 봐요.',
        items: [
          { type: 'choice', prompt: '책 기호의 뜻에 ○ 하세요.', options: ['도서실', '운동장'], answer: '도서실' },
          { type: 'choice', prompt: '기호의 뜻을 알려 주는 곳은?', options: ['범례', '교문'], answer: '범례' },
          { type: 'draw', prompt: '내가 아는 기호를 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '지도가 작고(4×3칸), 기호만 보고 찾기에서도 곳 이름이 보여요.',
      base: '5×3칸 지도에서 이름 없이 기호로 찾아요.',
      challenge: '6×4칸 지도에서 찾고, 범례에 지도에 없는 뜻이 섞여 있어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 지도의 기호와 범례의 기호를 잇지 못한다 → 손가락 두 개로 두 곳을 동시에 짚게 한다. ② 화단과 텃밭을 같은 곳으로 여긴다 → 꽃을 기르는 곳과 먹을 채소를 기르는 곳을 사진으로 견준다. ③ 이름이 없으면 찾지 못한다 → 범례에서 기호 모양을 말로 먼저 설명하게 한다. 칸 지도의 기호(급식실=시장 기호 등)는 교구에 있는 기호를 빌려 쓴 것이니, 우리 학교 안내도의 실제 기호와 견주어 말해 준다.',
  }));

  lessons.push(L(8, {
    title: '눈·귀·코로 학교 둘레 살펴 기록하기',
    objective: '학교 둘레에서 알아낸 것을 무엇으로 알았는지(눈·귀·코·손) 가르고, 본 것과 들은 것을 그림과 글로 기록할 수 있다.',
    illustration: ART('a child outside a school gate with big paper eyes, ears and nose symbols floating around, a yellow school bus, sparrows and flowers nearby', '무엇으로 알았나요?', [
      { motif: 'bird', x: 140, y: 90 }, { motif: 'flower', x: 330, y: 228, color: 'rose' }, { motif: 'tree', x: 400, y: 214 }]),
    safety: WALK_SAFE.concat(['교문 밖으로는 나가지 않고 교문 안쪽에서만 살펴요.']),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"눈을 감아 보세요. 지금 무엇이 들리나요? 이제 눈을 뜨고 창밖을 보세요. 무엇이 보이나요?" 들린 것과 보인 것을 칠판 두 칸에 나누어 적는다. "색과 모양은 눈으로, 소리는 귀로, 냄새는 코로, 거칠고 매끄러운 것은 손으로 만져서 알아요." 시연 단추로 \'참새 소리\' 카드가 \'귀로 알았어요\' 가지에 들어가는 모습을 보여 준다.',
        student: '눈을 감고 1분 동안 들리는 소리를 손가락으로 세어 봐요.',
        demo: { tool: 'mindmap', options: { topic: '무엇으로 알았을까?', slots: ['눈으로 알았어요', '귀로 알았어요'], cards: ['짹짹 참새 소리', '노란 학교 버스'], shuffle: false }, sequence: [{ sort: { '눈으로 알았어요': ['노란 학교 버스'], '귀로 알았어요': ['짹짹 참새 소리'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 알아낸 것을 무엇으로 알았는지 나누기', minutes: 12, tool: 'mindmap',
            teacher: '교문 안쪽 화단에 나가 5분 동안 살펴보고 돌아온다. "이것을 알려면 눈을 감고도 알 수 있을까요? 귀를 막고도 알 수 있을까요?" 하고 기준을 말로 확인한 뒤 나누게 한다. 색·모양은 눈을 감으면 알 수 없으니 \'눈\', 소리는 귀를 막으면 알 수 없으니 \'귀\'라는 기준을 학생과 함께 정한다.',
            task: '학교 둘레에서 알아낸 것을 무엇으로 알았는지에 따라 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '알아낸 것을 눈으로 안 것과 귀로 안 것으로 나누어 보세요.', toolOptions: { topic: '무엇으로 알았을까?', slots: ['눈으로 알았어요', '귀로 알았어요'], cards: ['나뭇잎이 초록색이에요', '딩동댕 종이 울려요', '교문이 파란색이에요', '빵빵 차 소리가 나요'] },
                target: { sort: { '눈으로 알았어요': ['나뭇잎이 초록색이에요', '교문이 파란색이에요'], '귀로 알았어요': ['딩동댕 종이 울려요', '빵빵 차 소리가 나요'] } }, difficulty: 0.1 },
              { prompt: '알아낸 것을 눈, 귀, 코로 안 것으로 나누어 보세요.', toolOptions: { topic: '무엇으로 알았을까?', slots: ['눈으로 알았어요', '귀로 알았어요', '코로 알았어요'], cards: ['꽃이 노란색이에요', '바람에 나뭇잎이 사각사각', '급식실에서 고소한 냄새', '운동장에서 친구들 웃음소리', '흙 냄새가 나요', '구름이 하얘요'] },
                target: { sort: { '눈으로 알았어요': ['꽃이 노란색이에요', '구름이 하얘요'], '귀로 알았어요': ['바람에 나뭇잎이 사각사각', '운동장에서 친구들 웃음소리'], '코로 알았어요': ['급식실에서 고소한 냄새', '흙 냄새가 나요'] } }, difficulty: 0.2,
                levels: { easy: { prompt: '알아낸 것을 귀로 안 것과 코로 안 것으로 나누어 보세요.', toolOptions: { slots: ['귀로 알았어요', '코로 알았어요'], cards: ['바람에 나뭇잎이 사각사각', '급식실에서 고소한 냄새', '운동장에서 친구들 웃음소리', '흙 냄새가 나요'] }, target: { sort: { '귀로 알았어요': ['바람에 나뭇잎이 사각사각', '운동장에서 친구들 웃음소리'], '코로 알았어요': ['급식실에서 고소한 냄새', '흙 냄새가 나요'] } } } } },
              { prompt: '눈을 감고도 알 수 있는 것만 골라 보세요.', toolOptions: { mode: 'pick', basket: '눈 감고도 알아요', cards: ['참새가 짹짹 울어요', '꽃이 빨개요', '빵 냄새가 나요', '깃발이 세모예요'] },
                target: { pick: ['참새가 짹짹 울어요', '빵 냄새가 나요'] }, difficulty: 0.25,
                predict: { q: '"꽃이 빨개요"는 눈을 감고도 알 수 있을까요?', options: ['알 수 있어요', '알 수 없어요'], answer: 1 },
                conclude: '색과 모양은 눈으로만 알 수 있고, 소리와 냄새는 눈을 감아도 알 수 있어요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 알아낸 몸의 부분 고르기', minutes: 14, tool: 'body',
            teacher: '"이것은 몸의 어디로 알았을까요? 하나일 수도, 둘일 수도 있어요." 문항을 읽고 직접 해 보듯 몸을 짚게 한다(귀에 손 대기, 코 킁킁). 나무껍질은 손으로 만져서 거친 것을 알았으니 \'피부\'를 고른다고 알려 준다. 끝나면 활동지 기록 칸에 본 것은 그림으로, 들은 것은 소리 흉내말로 적게 한다.',
            task: '알아낸 것을 읽고, 그것을 알아낸 몸의 부분을 모두 눌러 골라요.',
            levels: {
              easy: { mode: 'parts', parts: ['눈', '귀', '코', '피부'], names: true },
              base: { mode: 'parts', parts: ['눈', '귀', '코', '혀', '피부'] },
              challenge: { mode: 'parts', parts: ['눈', '귀', '코', '혀', '피부', '무릎', '어깨'] },
            },
            items: [
              { prompt: '"꽃에서 달콤한 냄새가 나요." 무엇으로 알았는지 골라 보세요.', target: { parts: ['코'] }, difficulty: 0.05 },
              { prompt: '"나무껍질을 만져 보니 거칠거칠해요." 무엇으로 알았는지 골라 보세요.', target: { parts: ['피부'] }, difficulty: 0.15,
                hints: ['만져서 알게 된 것은 몸의 어디로 느낄까요?', '눈으로 보기만 해서는 거칠거칠한지 잘 몰라요. 손에 닿은 느낌이에요.', '손에 닿는 느낌은 피부로 알아요. 피부를 골라요.'] },
              { prompt: '"급식실 앞에서 고소한 냄새가 나고 달그락 소리가 들려요." 무엇으로 알았는지 모두 골라 보세요.', target: { parts: ['코', '귀'] }, difficulty: 0.2 },
              { prompt: '본 것은 그림으로, 들은 것은 \'짹짹\'처럼 소리 흉내말로 활동지 기록 칸에 적어요. 다 하면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"눈으로만 살폈다면 무엇을 놓쳤을까요?" 소리와 냄새를 떠올리게 한다. 5~8차시에 남긴 그림과 기록을 모아 \'우리 학교 살펴보기 책\'으로 묶어 두고, 다음 시간에는 알아낸 것을 친구에게 차례대로 말해 본다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'body', options: { mode: 'parts', parts: ['눈', '귀', '코', '혀', '피부'] }, prompt: '"운동장 미끄럼틀이 빨간색이에요." 무엇으로 알았는지 골라 보세요.', target: { parts: ['눈'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '"친구들 노랫소리가 들려요."는 무엇으로 알았을까요?', options: ['눈', '귀', '코'], answer: 1, difficulty: 0.1, explain: '소리는 귀로 들어서 알아요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '눈·귀·코로 살펴보기',
      items: [
        { type: 'table', prompt: '학교 둘레에서 알아낸 것을 쓰세요.', columns: ['눈으로 본 것', '귀로 들은 것', '코로 맡은 것'], rows: 2 },
        { type: 'choice', prompt: '눈을 감고도 알 수 있는 것에 ○ 하세요.', options: ['종소리', '꽃 색깔', '깃발 모양'], answer: '종소리' },
        { type: 'blank', prompt: '들은 소리를 흉내말로 쓰세요.', text: '참새가 ___ 울어요.', answer: '짹짹' },
        { type: 'draw', prompt: '학교 둘레에서 본 것 하나를 그리세요.' },
      ],
      easy: {
        note: '색과 모양은 눈, 소리는 귀, 냄새는 코예요.',
        items: [
          { type: 'choice', prompt: '종소리는 무엇으로 알았나요?', options: ['귀', '눈'], answer: '귀' },
          { type: 'choice', prompt: '꽃 색깔은 무엇으로 알았나요?', options: ['눈', '코'], answer: '눈' },
          { type: 'draw', prompt: '학교 둘레에서 본 것을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '두 가지로만 나누고, 몸 고르기에서 고른 부분 이름이 바로 보여요.',
      base: '눈·귀·코 세 가지로 나누고, 둘을 함께 고르는 문항도 풀어요.',
      challenge: '몸 고르기에 무릎·어깨처럼 알아내는 데 쓰지 않는 부분이 섞여 있어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 무엇이든 \'눈으로 봤어요\'라고 한다 → "눈을 감고도 알 수 있나요?"라는 기준 질문을 되풀이한다. ② 만져서 안 것을 \'손\'이라고만 하고 피부를 모른다 → 손·팔·볼 모두 살갗(피부)으로 느낀다고 알려 준다. ③ 기록을 글로만 하려다 멈춘다 → 그림과 소리 흉내말도 기록이라고 짚는다. 바깥 관찰은 교문 안쪽에서만 하고, 냄새는 꽃·흙처럼 안전한 것만 맡게 한다.',
  }));

  // ───────────────────────── 9~12차시: 알아낸 것 차례대로 말하고 안전한 길 짚기 ─────────────────────────

  lessons.push(L(9, {
    title: '둘러보며 알아낸 것을 차례대로 말하기',
    objective: '학교를 둘러보며 알아낸 것을 \'간 곳 → 본 것 → 알게 된 것\' 차례로 놓고, 듣는 친구가 알 수 있게 곳과 물건 이름을 넣어 말할 수 있다.',
    illustration: ART('two paper children facing each other, one holding up three fingers while talking, small cards with a door, a bed and a light bulb floating in a row', '처음, 가운데, 끝', [
      { motif: 'star', x: 120, y: 90, s: 0.6 }, { motif: 'flower', x: 360, y: 228, color: 'buttercup' }, { motif: 'tree', x: 410, y: 214 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '선생님이 일부러 섞어서 말한다. "아플 때 쉬는 곳이에요. 보건실에 갔어요. 침대를 보았어요." "무슨 말인지 잘 알겠나요? 어떻게 바꾸면 더 잘 알아들을까요?" 학생의 말을 받아 차례를 바로잡는다. 시연 단추로 세 카드가 처음·가운데·끝에 놓이는 모습을 보여 주고 손가락 세 개를 하나씩 접으며 말하는 방법을 알려 준다.',
        student: '손가락 세 개를 펴고, 하나씩 접으며 오늘 아침 학교에 온 일을 짝에게 말해 봐요.',
        demo: { tool: 'story', options: { slots: ['간 곳', '본 것', '알게 된 것'], cards: [{ id: 'go', text: '보건실에 갔어요', motif: 'house' }, { id: 'see', text: '침대를 보았어요', motif: 'star' }, { id: 'know', text: '아플 때 쉬는 곳이에요', motif: 'sun' }], shuffle: false }, sequence: [{ order: ['go', 'see', 'know'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 알아낸 것 차례대로 놓기', minutes: 13, tool: 'story',
            teacher: '"어디에 먼저 갔나요? 거기서 무엇을 보았나요? 그래서 무엇을 알게 되었나요?" 칸 이름을 소리 내어 읽고 카드를 놓게 한다. \'알게 된 것\'을 맨 앞에 놓는 학생에게 "가 보기 전에 알 수 있었을까요?"라고 묻는다.',
            task: '알아낸 이야기 카드를 칸 이름에 맞게 차례대로 놓아요.',
            levels: CARD_LV,
            items: [
              { prompt: '음악실 이야기를 차례대로 놓아 보세요.', toolOptions: { slots: ['간 곳', '본 것', '알게 된 것'], cards: [{ id: 'go', text: '음악실에 갔어요', motif: 'house' }, { id: 'see', text: '큰북과 실로폰을 보았어요', motif: 'star' }, { id: 'know', text: '악기를 치며 노래하는 곳이에요', motif: 'sun' }] },
                target: { order: ['go', 'see', 'know'] }, difficulty: 0.05 },
              { prompt: '도서실 이야기를 차례대로 놓아 보세요.', toolOptions: { slots: ['궁금했던 것', '간 곳', '한 일', '알게 된 것'], cards: [{ id: 'q', text: '책은 어떻게 빌릴까?', motif: 'cloud' }, { id: 'go', text: '도서실에 갔어요', motif: 'house' }, { id: 'ask', text: '사서 선생님께 여쭤봤어요', motif: 'bird' }, { id: 'know', text: '대출 카드를 찍으면 빌려요', motif: 'sun' }] },
                target: { order: ['q', 'go', 'ask', 'know'] }, difficulty: 0.15,
                levels: { easy: { prompt: '도서실 이야기를 차례대로 놓아 보세요. 칸이 세 개예요.', toolOptions: { slots: ['간 곳', '한 일', '알게 된 것'], cards: [{ id: 'go', text: '도서실에 갔어요', motif: 'house' }, { id: 'ask', text: '사서 선생님께 여쭤봤어요', motif: 'bird' }, { id: 'know', text: '대출 카드를 찍으면 빌려요', motif: 'sun' }] }, target: { order: ['go', 'ask', 'know'] } } } },
              { prompt: '급식실 이야기를 차례대로 놓아 보세요.', toolOptions: { slots: ['궁금했던 것', '간 곳', '본 것', '알게 된 것'], cards: [{ id: 'q', text: '밥은 어디서 만들까?', motif: 'cloud' }, { id: 'go', text: '급식실 뒤쪽에 갔어요', motif: 'house' }, { id: 'see', text: '큰 솥과 조리사님을 보았어요', motif: 'star' }, { id: 'know', text: '조리실에서 밥을 지어요', motif: 'sun' }] },
                target: { order: ['q', 'go', 'see', 'know'] }, difficulty: 0.2,
                conclude: '궁금했던 것부터 알게 된 것까지 차례대로 말하면 듣는 친구가 따라오기 쉬워요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 친구가 알아듣게 말하기', minutes: 13, tool: 'mindmap',
            teacher: '"\'거기서 그거 봤어\' 하면 친구가 알 수 있을까요?" 곳 이름과 물건 이름이 들어간 말과 그렇지 않은 말을 견주게 한다. "나는 아는데 친구도 알겠지요?"라는 학생에게 "친구는 그곳에 함께 가지 않았어요"라고 짚어 준다. 끝에는 손가락 세 개로 짝에게 차례대로 말해 본다.',
            task: '듣는 친구가 알 수 있게 곳과 물건 이름을 넣어 말한 카드를 골라요. 그리고 짝에게 차례대로 말해요.',
            levels: CARD_LV,
            items: [
              { prompt: '듣는 친구가 알 수 있게 말한 카드만 골라 보세요.', toolOptions: { mode: 'pick', basket: '잘 알아듣는 말', cards: ['보건실에서 체온계를 보았어요', '거기서 그거 봤어요', '음악실에 큰북이 두 개 있어요', '뭐가 많았어요'] },
                target: { pick: ['보건실에서 체온계를 보았어요', '음악실에 큰북이 두 개 있어요'] }, difficulty: 0.1 },
              { prompt: '듣는 친구가 알 수 있게 말한 카드를 모두 골라 보세요.', toolOptions: { mode: 'pick', basket: '잘 알아듣는 말', cards: ['도서실 창가에 그림책이 있어요', '저기 가면 있어', '운동장 옆에 체육 창고가 있어요', '그냥 좋았어', '급식실에서 식판을 두 손으로 들어요'] },
                target: { pick: ['도서실 창가에 그림책이 있어요', '운동장 옆에 체육 창고가 있어요', '급식실에서 식판을 두 손으로 들어요'] }, difficulty: 0.2,
                hints: ['그 말만 듣고 어느 곳, 어떤 물건인지 떠오르는지 하나씩 읽어 봐요.', '\'저기\', \'그거\', \'그냥\'처럼 가리키기만 하는 말은 함께 가지 않은 친구가 알 수 없어요.', '곳 이름(도서실, 운동장, 급식실)이 들어간 카드 세 장을 골라요.'] },
              { prompt: '손가락 세 개를 접으며 \'간 곳 → 본 것 → 알게 된 것\'을 짝에게 말해요. 서로 바꾸어 해요. 다 하면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"짝의 이야기를 듣고 새로 알게 된 것이 있나요?" 두세 명이 짝에게서 들은 것을 다시 말하게 한다. 내가 알아낸 것은 말해야 친구도 안다는 것을 짚고, 다음 시간에는 학교 안 안전한 길을 지도에 짚어 본다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'story', options: { slots: ['간 곳', '본 것', '알게 된 것'], cards: [{ id: 'go', text: '텃밭에 갔어요', motif: 'house' }, { id: 'see', text: '상추 싹을 보았어요', motif: 'leaf' }, { id: 'know', text: '1학년이 기르는 곳이에요', motif: 'sun' }] }, prompt: '텃밭 이야기를 차례대로 놓아 보세요.', target: { order: ['go', 'see', 'know'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '"내가 알아낸 것은 말하지 않아도 친구들이 다 알아요." 맞을까요?', options: ['맞아요', '아니에요, 말해야 알아요'], answer: 1, difficulty: 0.1, explain: '함께 가지 않은 친구는 내가 말해 주어야 알 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '알아낸 것 차례대로 말하기',
      items: [
        { type: 'figure', wide: true, prompt: '차례대로 1, 2, 3을 쓰세요.', tool: 'story', figures: [{ options: { cards: [{ id: 'know', text: '쉬는 곳이에요', motif: 'sun' }, { id: 'go', text: '보건실에 갔어요', motif: 'house' }, { id: 'see', text: '침대를 보았어요', motif: 'star' }], shuffle: false }, caption: '' }], answer: '보건실에 갔어요 1, 침대를 보았어요 2, 쉬는 곳이에요 3' },
        { type: 'choice', prompt: '친구가 알아듣기 쉬운 말에 ○ 하세요.', options: ['음악실에서 탬버린을 보았어요', '거기서 그거 봤어요'], answer: '음악실에서 탬버린을 보았어요' },
        { type: 'table', prompt: '내가 알아낸 것을 차례대로 쓰세요.', columns: ['간 곳', '본 것', '알게 된 것'], rows: 1 },
        { type: 'short', prompt: '짝에게 들은 이야기에서 새로 안 것을 쓰세요.' },
      ],
      easy: {
        note: '손가락 하나: 간 곳, 둘: 본 것, 셋: 알게 된 것.',
        items: [
          { type: 'choice', prompt: '맨 처음에 말할 것에 ○ 하세요.', options: ['간 곳', '알게 된 것'], answer: '간 곳' },
          { type: 'choice', prompt: '잘 알아듣는 말에 ○ 하세요.', options: ['도서실에 그림책이 있어요', '저기 있어'], answer: '도서실에 그림책이 있어요' },
          { type: 'draw', prompt: '내가 간 곳과 본 것을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '칸이 세 개이고 맞는 칸에 초록 테두리가 생겨요.',
      base: '칸이 네 개예요. 궁금했던 것부터 놓아요.',
      challenge: '네 칸 이야기를 놓고, 가리키기만 하는 말을 모두 골라내요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 알아낸 것은 말하지 않아도 다 안다고 여긴다 → 함께 가지 않은 친구 처지에서 들어 보게 한다. ② 알게 된 것을 먼저 말한다 → 손가락 세 개 순서를 몸으로 익힌다. ③ \'거기, 그거\'로 말한다 → 곳 이름과 물건 이름을 넣어 다시 말하게 한다. 짝 말하기는 듣는 짝이 손가락을 접으며 차례를 확인해 주게 한다.',
  }));

  lessons.push(L(10, {
    title: '학교 지도에서 안전하게 다니는 길 짚기',
    objective: '학교 칸 지도에서 계단·모퉁이·건널목처럼 조심할 곳을 찾아 짚고, 교실에서 다른 곳까지 안전하게 가는 차례를 말할 수 있다.',
    illustration: ART('a paper map of a school with a dotted safe path from a classroom through a hallway corner and stairs with a handrail to the nurse room, small caution marks at the corner', '안전한 길로 가요', [
      { motif: 'house', x: 110, y: 214, color: 'sky' }, { motif: 'tree', x: 380, y: 214, color: 'mint' }, { motif: 'flower', x: 300, y: 228 }]),
    safety: WALK_SAFE,
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"교실에서 보건실까지 가는 길에 조심해야 할 곳이 있을까요?" 학생들이 말한 곳(계단, 모퉁이)을 칠판 지도에 표시한다. 시연 단추로 \'계단\' 칸에 핀이 꽂히는 모습을 보여 주며 "여기서는 손잡이를 잡고 한 칸씩 내려가요"라고 말한다. 4차시에 만든 안전 물음을 다시 떠올리게 한다.',
        student: '교실에서 보건실까지 가는 길에 지나는 곳을 차례대로 말해 봐요.',
        demo: { tool: 'map', options: { grid: [5, 3], places: [{ name: '우리 교실', icon: 'school', at: [0, 0] }, { name: '계단', icon: 'dot', at: [2, 1] }, { name: '보건실', icon: 'hospital', at: [4, 2] }], roads: [[[0, 0], [2, 0], [2, 2], [4, 2]]] }, sequence: [{ place: '계단' }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 조심할 곳에 핀 꽂기', minutes: 12, tool: 'map',
            teacher: '"점선은 우리가 다니는 길이에요. 이 길에서 어디를 조심해야 할까요?" 문항을 함께 읽고 핀을 꽂게 한다. 길 위에 없는 곳에 꽂는 학생에게 "점선을 손가락으로 따라가 보세요. 그 길에 있는 곳인가요?"라고 묻는다.',
            task: '점선 길을 따라가며 문항이 말하는 조심할 곳에 핀을 꽂아요.',
            levels: {
              easy: { grid: [4, 3] },
              base: { grid: [5, 3] },
              challenge: { grid: [6, 4] },
            },
            items: [
              { prompt: '보건실 가는 길이에요. 손잡이를 잡고 한 칸씩 내려가야 하는 곳에 핀을 꽂아 보세요.', toolOptions: { places: [{ name: '우리 교실', icon: 'school', at: [0, 0] }, { name: '계단', icon: 'dot', at: [2, 1] }, { name: '보건실', icon: 'hospital', at: [3, 2], legend: '보건실' }], roads: [[[0, 0], [2, 0], [2, 2], [3, 2]]] }, target: { place: '계단' }, difficulty: 0.05 },
              { prompt: '도서실 가는 길이에요. 보이지 않는 친구와 부딪히지 않게 천천히 걸을 곳에 핀을 꽂아 보세요.', toolOptions: { places: [{ name: '우리 교실', icon: 'school', at: [0, 2] }, { name: '복도 모퉁이', icon: 'dot', at: [2, 2] }, { name: '도서실', icon: 'library', at: [2, 0] }, { name: '창가', icon: 'dot', at: [0, 0] }], roads: [[[0, 2], [2, 2], [2, 0]]] }, target: { place: '복도 모퉁이' }, difficulty: 0.15 },
              { prompt: '집에 가는 길이에요. 멈추고 왼쪽 오른쪽을 살핀 뒤 초록불에 건널 곳에 핀을 꽂아 보세요.', toolOptions: { places: [{ name: '교문', icon: 'dot', at: [0, 1] }, { name: '건널목', icon: 'dot', at: [2, 1] }, { name: '놀이터', icon: 'park', at: [1, 0], legend: '놀이터' }, { name: '우리 동네', icon: 'house', at: [3, 1] }], roads: [[[0, 1], [3, 1]]] }, target: { place: '건널목' }, difficulty: 0.15,
                conclude: '학교 밖 길에서는 건널목이 가장 조심할 곳이에요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 안전하게 가는 차례 세우기', minutes: 14, tool: 'story',
            teacher: '"교실을 나서서 보건실 문 앞까지 무엇을 먼저 하나요?" 카드를 차례대로 놓은 뒤, 교실 바닥에 붙인 테이프 길을 짝과 함께 천천히 걸으며 \'오른쪽으로\', \'손잡이\', \'모퉁이에서 멈춤\'을 소리 내어 말하게 한다. 계단 칸에서 뛰어 내려가는 흉내를 내는 학생은 바로 멈추게 한다.',
            task: '안전하게 가는 차례대로 카드를 놓고, 테이프 길을 짝과 걸으며 말해요.',
            levels: CARD_LV,
            items: [
              { prompt: '교실에서 보건실까지 가는 차례대로 놓아 보세요.', toolOptions: { slots: ['1', '2', '3', '4'], cards: [{ id: 'door', text: '교실 문을 열고 나가요', motif: 'house' }, { id: 'right', text: '복도 오른쪽으로 걸어요', motif: 'leaf' }, { id: 'stair', text: '손잡이 잡고 계단을 내려가요', motif: 'mountain' }, { id: 'knock', text: '보건실 문을 똑똑 두드려요', motif: 'star' }] },
                target: { order: ['door', 'right', 'stair', 'knock'] }, difficulty: 0.1,
                levels: { easy: { prompt: '교실에서 보건실까지 가는 차례대로 놓아 보세요. 카드가 세 장이에요.', toolOptions: { slots: ['1', '2', '3'], cards: [{ id: 'door', text: '교실 문을 열고 나가요', motif: 'house' }, { id: 'stair', text: '손잡이 잡고 계단을 내려가요', motif: 'mountain' }, { id: 'knock', text: '보건실 문을 똑똑 두드려요', motif: 'star' }] }, target: { order: ['door', 'stair', 'knock'] } } } },
              { prompt: '아침에 집에서 교실까지 오는 차례대로 놓아 보세요.', toolOptions: { slots: ['1', '2', '3', '4'], cards: [{ id: 'cross', text: '초록불에 건널목을 건너요', motif: 'sun' }, { id: 'gate', text: '교문으로 들어와요', motif: 'house' }, { id: 'shoe', text: '현관에서 실내화로 갈아 신어요', motif: 'leaf' }, { id: 'up', text: '계단을 걸어 올라가요', motif: 'mountain' }] },
                target: { order: ['cross', 'gate', 'shoe', 'up'] }, difficulty: 0.15 },
              { prompt: '교실 바닥 테이프 길을 짝과 천천히 걸으며 조심할 곳마다 "손잡이!", "멈춤!"을 말해요. 다 하면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"우리 학교에서 가장 조심해야 할 곳은 어디라고 생각하나요? 왜 그래요?" 두세 명의 까닭을 듣고 칠판 지도에 빨간 점을 붙인다. 다음 시간에는 새로 온 친구에게 학교를 소개하는 말을 만든다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'map', options: { grid: [5, 3], places: [{ name: '우리 교실', icon: 'school', at: [0, 1] }, { name: '급식실 문 앞', icon: 'dot', at: [4, 1] }, { name: '젖은 현관', icon: 'dot', at: [2, 1] }], roads: [[[0, 1], [4, 1]]] }, prompt: '비 오는 날 급식실 가는 길이에요. 미끄러지지 않게 조심할 곳에 핀을 꽂아 보세요.', target: { place: '젖은 현관' }, difficulty: 0.15 },
          { type: 'choice', prompt: '복도 모퉁이에서는 어떻게 할까요?', options: ['뛰어서 돌아요', '천천히 걷고 앞을 살펴요', '눈을 감고 걸어요'], answer: 1, difficulty: 0.1, explain: '모퉁이 너머는 보이지 않아 천천히 걸어야 부딪히지 않아요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '안전하게 다니는 길',
      items: [
        { type: 'figure', wide: true, prompt: '조심해서 내려가야 할 곳에 ○ 하세요.', tool: 'map', figures: [{ options: { grid: [5, 3], places: [{ name: '우리 교실', icon: 'school', at: [0, 0] }, { name: '계단', icon: 'dot', at: [2, 1] }, { name: '보건실', icon: 'hospital', at: [4, 2], legend: '보건실' }], roads: [[[0, 0], [2, 0], [2, 2], [4, 2]]] }, caption: '' }], answer: '계단' },
        { type: 'check', prompt: '안전하게 다니는 약속에 ✓ 하세요.', options: ['복도 오른쪽으로 걸어요', '계단 손잡이를 잡아요', '모퉁이에서 멈춰 살펴요', '초록불에 건너요'] },
        { type: 'table', prompt: '교실에서 가고 싶은 곳까지 조심할 곳을 쓰세요.', columns: ['가는 곳', '조심할 곳', '어떻게 할까'], rows: 2 },
        { type: 'draw', prompt: '안전하게 계단을 내려가는 모습을 그리세요.' },
      ],
      easy: {
        note: '점선 길을 손가락으로 따라가요.',
        items: [
          { type: 'choice', prompt: '계단에서 할 일에 ○ 하세요.', options: ['손잡이를 잡아요', '뛰어 내려가요'], answer: '손잡이를 잡아요' },
          { type: 'choice', prompt: '건널목에서 할 일에 ○ 하세요.', options: ['멈추고 살펴요', '바로 뛰어가요'], answer: '멈추고 살펴요' },
          { type: 'draw', prompt: '학교에서 조심할 곳을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '지도가 작고(4×3칸), 차례 세우기 카드가 세 장이에요.',
      base: '5×3칸 지도에서 찾고, 네 장 차례를 세워요.',
      challenge: '6×4칸 지도에서 찾고, 테이프 길에서 짝을 안내하는 역할을 맡아요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 길 위에 없는 곳을 조심할 곳으로 짚는다 → 점선을 손가락으로 따라가게 한다. ② 계단은 오를 때만 조심하면 된다고 여긴다 → 내려갈 때가 더 위험하다는 것을 이야기한다. ③ 테이프 길에서 장난으로 뛴다 → 걸음 수를 세며 걷게 한다. 칸 지도는 실제 학교 모양이 아니니 우리 학교의 계단·모퉁이 이름으로 바꾸어 말해 준다.',
  }));

  lessons.push(L(11, {
    title: '새로 온 친구에게 우리 학교 소개하기',
    objective: '학교의 곳마다 하는 일과 지킬 약속을 넣어 \'인사 → 곳 이름 → 하는 일 → 약속\' 차례로 새 친구에게 소개할 수 있다.',
    illustration: ART('a paper child guiding a new classmate with a backpack through the school, pointing at a library door, both smiling', '우리 학교를 소개해요', [
      { motif: 'house', x: 120, y: 214, color: 'peach' }, { motif: 'flower', x: 300, y: 228, color: 'rose' }, { motif: 'tree', x: 400, y: 214 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"내일 우리 반에 새 친구가 전학을 와요. 학교를 하나도 모른대요. 무엇부터 알려 주면 좋을까요?" 두세 명의 생각을 듣는다. 시연 단추로 빈칸에 \'보건실\' 카드가 들어가는 모습을 보여 주며 "곳 이름과 하는 일을 함께 말해 주면 새 친구가 금방 알아요"라고 말한다.',
        student: '새 친구에게 가장 먼저 알려 주고 싶은 곳을 하나 떠올려 봐요.',
        demo: { tool: 'story', options: { mode: 'fill', slots: [{ id: 'f1', who: '나', motif: 'star', label: '___에서는 아플 때 쉬어요.' }], cards: ['보건실', '음악실'], shuffle: false }, sequence: [{ fill: { f1: '보건실' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 소개하는 말 빈칸 채우기', minutes: 12, tool: 'story',
            teacher: '"빈칸에 곳 이름을 넣고 소리 내어 읽어 볼까요? 말이 되나요?" 카드를 넣을 때마다 문장 전체를 읽게 한다. 문장이 어색한 학생에게 "도서실에서 아플 때 쉬어요? 그런가요?"라고 웃으며 되묻는다.',
            task: '소개하는 말의 빈칸에 알맞은 카드를 넣고 소리 내어 읽어요.',
            levels: CARD_LV,
            items: [
              { prompt: '두 소개 말의 빈칸을 채워 보세요.', toolOptions: { mode: 'fill', slots: [{ id: 'f1', who: '나', motif: 'star', label: '___에서는 책을 빌려요.' }, { id: 'f2', who: '나', motif: 'star', label: '___에서는 점심을 먹어요.' }], cards: ['도서실', '급식실'] },
                target: { fill: { f1: '도서실', f2: '급식실' } }, difficulty: 0.05 },
              { prompt: '세 소개 말의 빈칸을 채워 보세요.', toolOptions: { mode: 'fill', slots: [{ id: 'f1', who: '나', motif: 'star', label: '___에서는 악기를 쳐요.' }, { id: 'f2', who: '나', motif: 'star', label: '___에서는 공을 차고 달려요.' }, { id: 'f3', who: '나', motif: 'star', label: '___에서는 선생님들이 일하세요.' }], cards: ['음악실', '운동장', '교무실'] },
                target: { fill: { f1: '음악실', f2: '운동장', f3: '교무실' } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['음악실', '운동장', '교무실', '우리 집'] } } } },
              { prompt: '지킬 약속을 알려 주는 말의 빈칸을 채워 보세요.', toolOptions: { mode: 'fill', slots: [{ id: 'f1', who: '나', motif: 'star', label: '계단에서는 ___을 잡아요.' }, { id: 'f2', who: '나', motif: 'star', label: '도서실에서는 ___ 말해요.' }], cards: ['손잡이', '친구 옷', '작은 소리로', '큰 소리로'] },
                target: { fill: { f1: '손잡이', f2: '작은 소리로' } }, difficulty: 0.2 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 소개하는 차례 세우고 역할 놀이', minutes: 14, tool: 'story',
            teacher: '"처음 만난 친구에게 갑자기 \'조용히 해야 해\'부터 말하면 어떨까요?" 인사 → 곳 이름 → 하는 일 → 지킬 약속 차례를 칠판에 붙인다. 차례를 세운 뒤 짝과 새 친구·안내하는 친구 역할을 나누어 교실 안 한 곳(책꽂이, 사물함)을 소개해 보게 한다. 듣는 친구는 \'고마워\'로 답한다.',
            task: '소개하는 말을 차례대로 놓고, 짝과 역할을 바꾸어 교실의 한 곳을 소개해요.',
            levels: CARD_LV,
            items: [
              { prompt: '도서실 소개 말을 차례대로 놓아 보세요.', toolOptions: { slots: ['인사', '곳 이름', '하는 일', '지킬 약속'], cards: [{ id: 'hi', text: '안녕? 반가워.', motif: 'sun' }, { id: 'name', text: '여기는 도서실이야.', motif: 'house' }, { id: 'do', text: '책을 읽고 빌리는 곳이야.', motif: 'star' }, { id: 'rule', text: '작은 소리로 말해야 해.', motif: 'leaf' }] },
                target: { order: ['hi', 'name', 'do', 'rule'] }, difficulty: 0.1 },
              { prompt: '급식실 소개 말을 차례대로 놓아 보세요.', toolOptions: { slots: ['인사', '곳 이름', '하는 일', '지킬 약속'], cards: [{ id: 'hi', text: '안녕? 같이 가자.', motif: 'sun' }, { id: 'name', text: '여기는 급식실이야.', motif: 'house' }, { id: 'do', text: '점심을 먹는 곳이야.', motif: 'star' }, { id: 'rule', text: '줄을 서서 기다려야 해.', motif: 'leaf' }] },
                target: { order: ['hi', 'name', 'do', 'rule'] }, difficulty: 0.15,
                levels: { easy: { prompt: '급식실 소개 말을 차례대로 놓아 보세요. 카드가 세 장이에요.', toolOptions: { slots: ['곳 이름', '하는 일', '지킬 약속'], cards: [{ id: 'name', text: '여기는 급식실이야.', motif: 'house' }, { id: 'do', text: '점심을 먹는 곳이야.', motif: 'star' }, { id: 'rule', text: '줄을 서서 기다려야 해.', motif: 'leaf' }] }, target: { order: ['name', 'do', 'rule'] } } } },
              { prompt: '짝과 새 친구·안내하는 친구 역할을 나누어 교실 한 곳을 소개하고, 역할을 바꾸어요. 다 하면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"안내를 받은 친구는 어떤 마음이었나요?" 역할 놀이에서 새 친구 역할을 한 학생 두세 명에게 묻는다. 곳 이름과 하는 일, 약속을 함께 말하면 처음 온 친구도 마음 놓고 다닐 수 있다고 짚는다. 다음 시간에는 모둠별로 알아낸 것을 발표한다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'story', options: { mode: 'fill', slots: [{ id: 'e1', who: '나', motif: 'star', label: '___에서는 다쳤을 때 치료를 받아요.' }, { id: 'e2', who: '나', motif: 'star', label: '___에서는 그네를 타요.' }], cards: ['보건실', '놀이터'] }, prompt: '소개 말의 빈칸을 채워 보세요.', target: { fill: { e1: '보건실', e2: '놀이터' } }, difficulty: 0.1 },
          { type: 'choice', prompt: '처음 온 친구에게 소개할 때 맨 먼저 할 말은?', options: ['안녕? 반가워.', '조용히 해야 해.', '책을 빌리는 곳이야.'], answer: 0, difficulty: 0.1, explain: '처음에는 인사로 마음을 열어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '우리 학교 소개하기',
      items: [
        { type: 'blank', prompt: '빈칸에 곳 이름을 쓰세요.', text: '___에서는 아플 때 쉬어요.', answer: '보건실' },
        { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '계단에서는 ___을 잡아요.', answer: '손잡이' },
        { type: 'table', prompt: '새 친구에게 소개할 곳을 정해 쓰세요.', columns: ['곳 이름', '하는 일', '지킬 약속'], rows: 2 },
        { type: 'draw', prompt: '새 친구에게 학교를 안내하는 내 모습을 그리세요.' },
      ],
      easy: {
        note: '곳 이름 → 하는 일 → 약속 차례로 말해요.',
        items: [
          { type: 'choice', prompt: '책을 빌리는 곳에 ○ 하세요.', options: ['도서실', '급식실'], answer: '도서실' },
          { type: 'choice', prompt: '처음에 할 말에 ○ 하세요.', options: ['안녕? 반가워.', '조용히 해.'], answer: '안녕? 반가워.' },
          { type: 'draw', prompt: '소개하고 싶은 곳을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생기고, 차례 세우기 카드가 세 장이에요.',
      base: '네 장 차례를 세우고, 약속 빈칸까지 채워요.',
      challenge: '관계없는 \'우리 집\' 카드를 골라내고, 역할 놀이에서 두 곳을 이어서 소개해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 곳 이름만 말하고 하는 일을 빼먹는다 → "거기서 무엇을 해?" 하고 새 친구 역할이 되물어 주게 한다. ② 약속을 먼저 말해 딱딱해진다 → 인사로 시작하는 차례를 몸으로 익힌다. ③ 역할 놀이를 부끄러워한다 → 교사와 먼저 한 번 해 보고 짝과 하게 한다. 실제로 전학생이 오면 이 소개 말을 그대로 써 볼 수 있다.',
  }));

  lessons.push(L(12, {
    title: '모둠별로 알아낸 것 발표하고 물어보기',
    objective: '모둠이 알아낸 것을 차례대로 발표하고, 친구 발표를 끝까지 들은 뒤 발표와 관계있는 물음을 할 수 있다.',
    illustration: ART('a small paper group of children standing in front of the class holding drawings of the school, while seated classmates listen and one raises a hand', '들려주고, 물어보고', [
      { motif: 'star', x: 120, y: 88, s: 0.6 }, { motif: 'house', x: 370, y: 216, color: 'mint', s: 0.85 }, { motif: 'flower', x: 250, y: 228 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"오늘은 모둠마다 둘러보며 알아낸 것을 들려줘요. 한 모둠에 2분이에요." 발표 차례판을 칠판에 붙인다. "친구가 발표할 때 내 몸은 어떻게 할까요?" 눈은 발표자, 입은 닫고, 손은 무릎이라는 듣기 자세를 함께 해 본다. 시연 단추로 발표와 관계있는 물음 카드만 바구니에 들어가는 모습을 보여 준다.',
        student: '듣는 자세(눈은 발표자, 입은 닫고, 손은 무릎)를 해 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'pick', basket: '알맞은 물음', cards: ['침대는 누가 쓸 수 있나요?', '나 어제 놀이터 갔어.'], shuffle: false }, sequence: [{ pick: ['침대는 누가 쓸 수 있나요?'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 발표와 관계있는 물음 고르기', minutes: 9, tool: 'mindmap',
            teacher: '"민지네 모둠이 \'보건실에는 침대가 두 개 있어요\'라고 발표했어요. 어떤 물음을 하면 좋을까요?" 발표 내용과 관계있는 물음과 관계없는 말을 견주게 한다. 자기 이야기를 하고 싶어 하는 학생에게 "그 이야기는 쉬는 시간에 들려줄까요? 지금은 민지네 발표에 대해 물어요"라고 말한다.',
            task: '친구의 발표를 읽고, 그 발표와 관계있는 물음만 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '발표: "보건실에는 침대가 두 개 있어요." 이 발표에 알맞은 물음만 골라 보세요.', toolOptions: { mode: 'pick', basket: '알맞은 물음', cards: ['침대는 누가 쓸 수 있나요?', '나는 어제 떡볶이를 먹었어.', '보건실은 몇 시까지 열어요?', '운동장이 더 좋아.'] },
                target: { pick: ['침대는 누가 쓸 수 있나요?', '보건실은 몇 시까지 열어요?'] }, difficulty: 0.1 },
              { prompt: '발표: "음악실에서 큰북을 쳐 보았어요." 이 발표에 알맞은 물음만 골라 보세요.', toolOptions: { mode: 'pick', basket: '알맞은 물음', cards: ['큰북은 어떤 소리가 났나요?', '우리 집에는 강아지가 있어.', '큰북은 몇 개 있었나요?', '나는 피아노를 못 쳐.', '누가 치게 해 주셨나요?'] },
                target: { pick: ['큰북은 어떤 소리가 났나요?', '큰북은 몇 개 있었나요?', '누가 치게 해 주셨나요?'] }, difficulty: 0.2 },
              { prompt: '친구가 발표할 때의 모습을 좋은 듣기와 고칠 듣기로 나누어 보세요.', toolOptions: { topic: '친구 발표를 들을 때', slots: ['좋은 듣기', '고칠 듣기'], cards: ['발표하는 친구를 봐요', '옆 친구와 떠들어요', '끝나면 손을 들고 물어요', '발표 중에 끼어들어요'] },
                target: { sort: { '좋은 듣기': ['발표하는 친구를 봐요', '끝나면 손을 들고 물어요'], '고칠 듣기': ['옆 친구와 떠들어요', '발표 중에 끼어들어요'] } }, difficulty: 0.1 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 모둠 발표하고 마음 돌아보기', minutes: 18, tool: 'emotion',
            teacher: '여섯 모둠이 차례로 2분씩 발표하고, 모둠마다 물음 하나를 받는다(모두 15분 남짓). 발표 모둠은 9차시의 \'간 곳 → 본 것 → 알게 된 것\' 차례를 손가락으로 세며 말한다. 발표 중에 옆 친구가 말을 걸면 어떻게 할지 먼저 고른 뒤 발표를 시작한다. 발표를 마친 뒤 "친구들이 끝까지 들어 주면 발표하는 사람 마음은 어떨까요?" 하고 묻는다.',
            task: '듣기 약속을 고른 뒤 모둠 발표를 하고, 발표하는 친구의 마음을 알아봐요.',
            levels: { easy: { live: true, instant: true, steps: 3 }, base: {}, challenge: {} },
            items: [
              { prompt: '친구가 발표하는데 옆 친구가 말을 걸어요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '하준이네 모둠이 발표하는데, 옆 친구가 "이거 봐!" 하고 말을 걸어요.', choices: [
                { id: 'talk', text: '옆 친구와 이야기해요', result: '하준이네 발표를 놓치고, 하준이가 속상해요.', mood: '속상함', why: '발표하는 하준이의 마음을 떠올려 봐요.' },
                { id: 'later', text: '"끝나고 보자" 하고 작게 말해요', result: '발표를 끝까지 듣고 물음도 할 수 있어요.', mood: '편안함' }] }, target: { choice: 'later' }, difficulty: 0.05 },
              { prompt: '모둠 발표 차례가 되면 \'간 곳 → 본 것 → 알게 된 것\'을 손가락으로 세며 발표하고, 물음 하나에 답해요. 다 하면 "다 했어요"를 누르세요.', free: true, talk: true },
              { prompt: '발표하는 친구의 마음에 어울리는 카드를 놓아 보세요.', toolOptions: { cards: ['고마움', '속상함'], slots: [{ id: 's1', label: '친구들이 내 발표를 끝까지 들어 줬어요' }, { id: 's2', label: '발표하는데 친구들이 떠들었어요' }] }, target: { match: { s1: '고마움', s2: '속상함' } }, difficulty: 0.1 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"다른 모둠 발표에서 새로 알게 된 것은 무엇인가요?" 두세 명이 말하게 한다. 내가 알아낸 것을 말로 들려주니 친구들도 알게 되었다는 것을 짚는다. 1~12차시에 만든 그림·기록은 \'우리 학교 살펴보기 책\'으로 묶어 교실 뒤에 둔다. 다음 시간부터는 학교의 소리를 듣고 표현한다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'pick', basket: '알맞은 물음', cards: ['텃밭에 무엇을 심었나요?', '나는 수박을 좋아해.', '물은 누가 주나요?'] }, prompt: '발표: "텃밭에서 싹을 보았어요." 이 발표에 알맞은 물음만 골라 보세요.', target: { pick: ['텃밭에 무엇을 심었나요?', '물은 누가 주나요?'] }, difficulty: 0.15 },
          { type: 'choice', prompt: '친구 발표에 물음을 하고 싶을 때는 언제 할까요?', options: ['발표 중에 바로', '발표가 끝나고 손을 들고', '쉬는 시간에만'], answer: 1, difficulty: 0.1, explain: '발표를 끝까지 들은 뒤 손을 들고 물어요.' },
          { type: 'tool', tool: 'emotion', options: { mode: 'scale', steps: 3, situation: '우리 모둠이 친구들 앞에서 알아낸 것을 발표했어요.', feeling: '뿌듯함', ask: '발표를 마치고 마음이 얼마나 뿌듯한가요?' }, prompt: '발표를 마친 내 마음을 솔직하게 골라 보세요. 정답은 없어요.', target: { level: 'any' }, difficulty: 0.05 },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '발표하고 물어보기',
      items: [
        { type: 'check', prompt: '친구 발표를 들을 때 지킨 것에 ✓ 하세요.', options: ['발표하는 친구를 봤어요', '끝까지 들었어요', '손을 들고 물었어요'] },
        { type: 'choice', prompt: '발표 "급식실에 큰 솥이 있어요."에 알맞은 물음에 ○ 하세요.', options: ['솥은 몇 개 있었나요?', '나는 라면이 좋아.'], answer: '솥은 몇 개 있었나요?' },
        { type: 'short', prompt: '다른 모둠 발표에서 새로 안 것을 쓰세요.' },
        { type: 'short', prompt: '우리 모둠 발표에서 받은 물음을 쓰세요.' },
      ],
      easy: {
        note: '발표가 끝나면 손을 들고 물어요.',
        items: [
          { type: 'choice', prompt: '좋은 듣기에 ○ 하세요.', options: ['친구를 봐요', '떠들어요'], answer: '친구를 봐요' },
          { type: 'choice', prompt: '물음은 언제 할까요?', options: ['발표가 끝나고', '발표 중에'], answer: '발표가 끝나고' },
          { type: 'draw', prompt: '발표하는 우리 모둠을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 카드에 초록 테두리가 생기고, 마음 눈금이 세 칸이에요.',
      base: '알맞은 물음을 모두 고르고 발표 뒤 물음에 답해요.',
      challenge: '관계없는 말이 더 섞여 있고, 발표 때 받은 물음에 까닭을 붙여 답해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 발표와 관계없는 자기 이야기를 한다 → "그 이야기는 민지네 발표와 이어지나요?"로 다시 고르게 한다. ② 발표 중에 끼어든다 → 손을 들고 기다리는 신호를 정한다. ③ 발표 모둠이 한 사람만 말한다 → 손가락 하나씩 맡아 셋이 나누어 말하게 한다. 여섯 모둠 × 2분이 넘지 않도록 모래시계(2분)를 쓴다.',
  }));

  // ───────────────────────── 13~16차시: 학교 소리의 빠르기와 세기 ─────────────────────────

  // 빠르기 리듬 따라 놓기: 모두 한 마디(4박). 쉬움은 블록 두 가지·박 표시, 도전은 쉼표·온음표 블록이 함정으로 더 나온다
  var SPEED_LV = {
    easy: { mode: 'rhythm', meter: 4, measures: 1, blocks: ['e', 'h'], showBeats: true },
    base: { mode: 'rhythm', meter: 4, measures: 1, blocks: ['q', 'e', 'h'] },
    challenge: { mode: 'rhythm', meter: 4, measures: 1, blocks: ['q', 'e', 'h', 'qr', 'w'] },
  };

  lessons.push(L(13, {
    title: '빠른 소리와 느린 소리 듣고 나누기',
    objective: '학교에서 들리는 소리를 듣고 빠른 소리와 느린 소리로 나누며, 세게 나는 소리라고 해서 빠른 소리는 아니라는 것을 말할 수 있다.',
    illustration: ART('a paper hallway with quick little footprints running one way and big slow footprints walking the other way, small sound wave shapes floating above', '빠르게, 느리게', [
      { motif: 'bird', x: 140, y: 90 }, { motif: 'house', x: 380, y: 216, color: 'peach', s: 0.85 }, { motif: 'flower', x: 250, y: 228 }]),
    safety: BODY_SAFE,
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '선생님이 손뼉을 \'짝짝짝짝\' 빠르게, 다음에 \'짝… 짝…\' 느리게 친다. "두 소리는 무엇이 달라요?" 크다·작다라고 답하면 "선생님 손뼉 크기는 같았어요. 무엇이 달랐을까요?"라고 다시 묻는다. 빠르기는 \'소리가 얼마나 자주 나는가\'라는 것을 짚는다. 시연 단추로 \'다다다닥 뛰는 발소리\' 카드가 \'빠른 소리\' 가지에 들어가는 모습을 보여 준다.',
        student: '선생님 손뼉을 듣고 빠르면 손을 머리 위로, 느리면 무릎에 올려 봐요.',
        demo: { tool: 'mindmap', options: { topic: '학교 소리', slots: ['빠른 소리', '느린 소리'], cards: ['다다다닥 뛰는 발소리', '뚜벅… 뚜벅… 걷는 발소리'], shuffle: false }, sequence: [{ sort: { '빠른 소리': ['다다다닥 뛰는 발소리'], '느린 소리': ['뚜벅… 뚜벅… 걷는 발소리'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 학교 소리 빠르기로 나누기', minutes: 12, tool: 'mindmap',
            teacher: '카드의 소리 흉내말을 선생님이 실제 빠르기로 읽어 준다. "소리와 소리 사이가 짧으면 빠른 소리, 길면 느린 소리예요." 흉내말 사이의 \'…\'는 쉬는 틈이라고 알려 준다. 세게 나는 소리를 모두 빠른 소리에 넣는 학생에게 "쾅… 쾅… 은 센데, 자주 나나요?"라고 묻는다.',
            task: '학교 소리 카드를 듣고 빠른 소리와 느린 소리로 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '학교 소리를 빠른 소리와 느린 소리로 나누어 보세요.', toolOptions: { topic: '학교 소리', slots: ['빠른 소리', '느린 소리'], cards: ['다다다닥 달리는 발소리', '타닥타닥 쏟아지는 빗소리', '똑… 똑… 떨어지는 물방울', '뚜벅… 뚜벅… 걷는 발소리'] },
                target: { sort: { '빠른 소리': ['다다다닥 달리는 발소리', '타닥타닥 쏟아지는 빗소리'], '느린 소리': ['똑… 똑… 떨어지는 물방울', '뚜벅… 뚜벅… 걷는 발소리'] } }, difficulty: 0.1 },
              { prompt: '음악실 소리를 빠른 소리와 느린 소리로 나누어 보세요.', toolOptions: { topic: '음악실 소리', slots: ['빠른 소리', '느린 소리'], cards: ['두두두두 작은북을 빠르게', '둥… 둥… 큰북을 천천히', '찰찰찰찰 탬버린 흔들기', '딩… 딩… 트라이앵글'] },
                target: { sort: { '빠른 소리': ['두두두두 작은북을 빠르게', '찰찰찰찰 탬버린 흔들기'], '느린 소리': ['둥… 둥… 큰북을 천천히', '딩… 딩… 트라이앵글'] } }, difficulty: 0.15,
                levels: { challenge: { prompt: '음악실 소리 여섯 가지를 빠른 소리와 느린 소리로 나누어 보세요.', toolOptions: { cards: ['두두두두 작은북을 빠르게', '둥… 둥… 큰북을 천천히', '찰찰찰찰 탬버린 흔들기', '딩… 딩… 트라이앵글', '도도도도 실로폰 빠르게', '쿵… 쿵… 발 구르기'] }, target: { sort: { '빠른 소리': ['두두두두 작은북을 빠르게', '찰찰찰찰 탬버린 흔들기', '도도도도 실로폰 빠르게'], '느린 소리': ['둥… 둥… 큰북을 천천히', '딩… 딩… 트라이앵글', '쿵… 쿵… 발 구르기'] } } } } },
              { prompt: '세기는 보지 말고 빠르기로만 나누어 보세요.', toolOptions: { topic: '빠르기로만', slots: ['빠른 소리', '느린 소리'], cards: ['살살 빠르게 톡톡톡톡', '쾅… 쾅… 세게 천천히', '세게 빠르게 쿵쿵쿵쿵', '살살 천천히 톡… 톡…'] },
                target: { sort: { '빠른 소리': ['살살 빠르게 톡톡톡톡', '세게 빠르게 쿵쿵쿵쿵'], '느린 소리': ['쾅… 쾅… 세게 천천히', '살살 천천히 톡… 톡…'] } }, difficulty: 0.3,
                hints: ['소리가 얼마나 자주 나는지만 들어 봐요. 크기는 생각하지 않아요.', '\'세게\'라는 말이 있어도 소리 사이에 쉬는 틈(…)이 있으면 느린 소리예요.', '\'빠르게\'가 들어간 두 카드는 빠른 소리, \'천천히\'가 들어간 두 카드는 느린 소리예요.'],
                predict: { q: '"쾅… 쾅…" 세게 나는 소리는 빠른 소리일까요?', options: ['빠른 소리예요', '느린 소리예요'], answer: 1 },
                conclude: '세게 나는 소리라고 빠른 것은 아니에요. 빠르기는 소리가 얼마나 자주 나는지예요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 빠른 리듬 느린 리듬 블록으로 놓기', minutes: 14, tool: 'keyboard',
            teacher: '"리듬 듣기를 눌러 들어 보세요. 소리가 다닥다닥 나요, 띄엄띄엄 나요?" 반 박 블록(8분음표)은 빠른 소리, 두 박 블록(2분음표)은 느린 소리라고 손뼉으로 함께 쳐 본다. 블록을 다 놓으면 교실 제자리에서 선생님 북소리에 맞춰 빠르게·느리게 걸어 본다.',
            task: '리듬 듣기를 누르고, 들은 리듬을 블록으로 놓아요. 그다음 북소리에 맞춰 제자리에서 걸어요.',
            levels: SPEED_LV,
            items: [
              { prompt: '빠르게 똑똑똑똑 두드리는 소리예요. 리듬 듣기를 누르고 블록으로 놓아 보세요.', toolOptions: { pattern: ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'] }, target: { rhythm: ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'] }, difficulty: 0.15 },
              { prompt: '느리게 쿵… 쿵… 두드리는 소리예요. 리듬 듣기를 누르고 블록으로 놓아 보세요.', toolOptions: { pattern: ['h', 'h'] }, target: { rhythm: ['h', 'h'] }, difficulty: 0.1 },
              { prompt: '느리게 시작해서 빨라지는 소리예요. 리듬 듣기를 누르고 블록으로 놓아 보세요.', toolOptions: { pattern: ['h', 'e', 'e', 'e', 'e'] }, target: { rhythm: ['h', 'e', 'e', 'e', 'e'] }, difficulty: 0.25,
                conclude: '같은 마디 안에서도 소리가 느려졌다 빨라졌다 할 수 있어요.' },
              { prompt: '선생님 북소리가 빠르면 종종걸음, 느리면 큰 걸음으로 제자리에서 걸어요. 다 하면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 들은 학교 소리 가운데 가장 빠른 소리는 무엇이었나요?" 두세 명이 흉내 내어 들려주게 한다. 빠른 소리와 센 소리는 다르다는 것을 손뼉 두 가지(살살 빠르게, 세게 느리게)로 다시 확인한다. 다음 시간에는 센 소리와 여린 소리를 몸짓으로 나타낸다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '급식실 소리', slots: ['빠른 소리', '느린 소리'], cards: ['달그락달그락 숟가락 소리', '쪼르르… 국 따르는 소리'] }, prompt: '급식실 소리를 빠른 소리와 느린 소리로 나누어 보세요.', target: { sort: { '빠른 소리': ['달그락달그락 숟가락 소리'], '느린 소리': ['쪼르르… 국 따르는 소리'] } }, difficulty: 0.15 },
          { type: 'choice', prompt: '"세게 나는 소리는 모두 빠른 소리예요." 맞을까요?', options: ['맞아요', '아니에요, 세게 천천히 나기도 해요'], answer: 1, difficulty: 0.2, explain: '쾅… 쾅…처럼 세게 천천히 나는 소리도 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '빠른 소리, 느린 소리',
      items: [
        { type: 'figure', wide: true, prompt: '빠른 소리에 ○, 느린 소리에 △ 하세요.', tool: 'mindmap', figures: [{ options: { topic: '학교 소리', slots: ['빠른 소리', '느린 소리'], cards: ['다다다닥 발소리', '똑… 똑… 물방울'] }, caption: '' }], answer: '다다다닥 발소리 ○, 똑… 똑… 물방울 △' },
        { type: 'choice', prompt: '빠른 소리에 ○ 하세요.', options: ['찰찰찰찰 탬버린', '둥… 둥… 큰북'], answer: '찰찰찰찰 탬버린' },
        { type: 'table', prompt: '학교에서 들은 소리를 나누어 쓰세요.', columns: ['빠른 소리', '느린 소리'], rows: 2 },
        { type: 'draw', prompt: '빠른 소리를 내는 것을 그리세요.' },
      ],
      easy: {
        note: '소리 사이에 쉬는 틈이 길면 느린 소리예요.',
        items: [
          { type: 'choice', prompt: '빠른 소리에 ○ 하세요.', options: ['다다다닥', '뚜벅… 뚜벅…'], answer: '다다다닥' },
          { type: 'choice', prompt: '느린 소리에 ○ 하세요.', options: ['둥… 둥…', '두두두두'], answer: '둥… 둥…' },
          { type: 'draw', prompt: '느리게 걷는 내 모습을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '나누기에서 맞으면 초록 테두리가 생기고, 리듬 블록은 두 가지에 박 표시가 보여요.',
      base: '네 장을 나누고, 블록 세 가지 가운데 골라 리듬을 놓아요.',
      challenge: '여섯 장을 나누고, 리듬 블록에 쉼표·온음표 블록이 함께 나와 골라내야 해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 빠른 소리가 곧 센 소리라고 여긴다 → 같은 세기로 빠르게·느리게, 같은 빠르기로 세게·여리게 쳐서 견준다. ② 흉내말 \'…\'의 뜻을 모른다 → 쉬는 틈만큼 손을 멈추는 몸짓을 정한다. ③ 북소리 걷기에서 점점 뛰게 된다 → 종종걸음은 발끝으로 작게 디디게 한다. 소리 카드는 선생님이 실제 빠르기로 읽어 주어야 뜻이 산다.',
  }));

  lessons.push(L(14, {
    title: '센 소리와 여린 소리를 몸짓으로 나타내기',
    objective: '학교에서 들리는 센 소리와 여린 소리를 나누고, 센 소리는 큰 몸짓으로, 여린 소리는 작은 몸짓으로 나타낼 수 있다.',
    illustration: ART('two paper children, one stretching arms wide for a loud drum sound and one tapping fingers softly for a quiet sound, with a big and a small sound wave', '세게, 여리게', [
      { motif: 'star', x: 120, y: 86, s: 0.7 }, { motif: 'star', x: 360, y: 96, s: 0.4 }, { motif: 'tree', x: 410, y: 214 }]),
    safety: BODY_SAFE,
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '선생님이 책상을 \'쾅\' 세게 한 번, \'톡\' 여리게 한 번 두드린다. "두 소리는 무엇이 달라요?" "소리의 크기를 세기라고 해요. 큰 소리는 센 소리, 작은 소리는 여린 소리예요." 센 소리에는 팔을 크게 벌리고, 여린 소리에는 손가락만 살짝 움직이는 몸짓을 함께 정한다. 시연 단추로 \'쾅! 문 닫히는 소리\' 카드가 \'센 소리\' 가지에 들어가는 모습을 보여 준다.',
        student: '선생님 소리를 듣고 센 소리면 팔을 크게, 여린 소리면 손가락만 살짝 움직여 봐요.',
        demo: { tool: 'mindmap', options: { topic: '학교 소리', slots: ['센 소리', '여린 소리'], cards: ['쾅! 문 닫히는 소리', '사각사각 연필 소리'], shuffle: false }, sequence: [{ sort: { '센 소리': ['쾅! 문 닫히는 소리'], '여린 소리': ['사각사각 연필 소리'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 센 소리 여린 소리 나누기', minutes: 12, tool: 'mindmap',
            teacher: '"이 소리는 귀를 막고 싶을 만큼 큰가요, 귀를 기울여야 들릴 만큼 작은가요?" 카드를 선생님이 실제 세기로 읽어 준다. 도서실처럼 여린 소리를 내야 하는 곳을 떠올리게 하고, 빠르게 나는 소리를 모두 센 소리로 놓는 학생에게 "사각사각사각은 빠르지만 큰가요?"라고 묻는다.',
            task: '학교 소리 카드를 센 소리와 여린 소리로 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '학교 소리를 센 소리와 여린 소리로 나누어 보세요.', toolOptions: { topic: '학교 소리', slots: ['센 소리', '여린 소리'], cards: ['와! 운동장 응원 소리', '소곤소곤 도서실 말소리', '삐익! 호루라기 소리', '살랑살랑 커튼 소리'] },
                target: { sort: { '센 소리': ['와! 운동장 응원 소리', '삐익! 호루라기 소리'], '여린 소리': ['소곤소곤 도서실 말소리', '살랑살랑 커튼 소리'] } }, difficulty: 0.1 },
              { prompt: '세기로만 나누어 보세요. 빠르기는 보지 않아요.', toolOptions: { topic: '세기로만', slots: ['센 소리', '여린 소리'], cards: ['사각사각사각 빠른 연필 소리', '쾅… 쾅… 천천히 박는 못 소리', '쿵쿵쿵쿵 빠르게 뛰는 소리', '똑… 똑… 작은 물방울'] },
                target: { sort: { '센 소리': ['쾅… 쾅… 천천히 박는 못 소리', '쿵쿵쿵쿵 빠르게 뛰는 소리'], '여린 소리': ['사각사각사각 빠른 연필 소리', '똑… 똑… 작은 물방울'] } }, difficulty: 0.25,
                hints: ['소리가 얼마나 큰지만 생각해요. 자주 나는지는 보지 않아요.', '빠르게 나는 연필 소리는 크기가 작아요. 천천히 나는 못 소리는 커요.', '\'쾅\', \'쿵\'은 센 소리, \'사각\', \'똑\'은 여린 소리예요.'],
                conclude: '빠르게 나는 소리도 여릴 수 있고, 천천히 나는 소리도 셀 수 있어요.' },
              { prompt: '소리와 어울리는 몸짓을 이어 보세요.', toolOptions: { mode: 'match', topic: '소리 몸짓', slots: [{ id: 's1', label: '둥! 둥! 큰북 소리' }, { id: 's2', label: '톡톡 빗방울 소리' }], cards: ['팔을 크게 휘둘러요', '손가락으로 살짝 톡톡'] },
                target: { match: { s1: '팔을 크게 휘둘러요', s2: '손가락으로 살짝 톡톡' } }, difficulty: 0.1,
                levels: { challenge: { prompt: '세 소리와 어울리는 몸짓을 이어 보세요.', toolOptions: { slots: [{ id: 's1', label: '둥! 둥! 큰북 소리' }, { id: 's2', label: '톡톡 빗방울 소리' }, { id: 's3', label: '소곤소곤 귓속말' }], cards: ['팔을 크게 휘둘러요', '손가락으로 살짝 톡톡', '입 앞에 손을 살짝 모아요'] }, target: { match: { s1: '팔을 크게 휘둘러요', s2: '손가락으로 살짝 톡톡', s3: '입 앞에 손을 살짝 모아요' } } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 센 소리 여린 소리 무늬 이어 가기', minutes: 14, tool: 'pattern',
            teacher: '"\'쾅\'은 센 소리, \'톡\'은 여린 소리예요. 무늬를 읽으며 몸짓으로 쳐 볼까요?" 칠판 무늬를 함께 읽으며 \'쾅\'에서는 손바닥으로 무릎을 세게, \'톡\'에서는 손가락으로 살짝 친다. 빈칸 바로 앞만 보고 답하는 학생에게 맨 앞부터 소리 내어 다시 읽게 한다. 다 만든 무늬는 짝과 몸짓으로 연주한다.',
            task: '센 소리 \'쾅\'과 여린 소리 \'톡\'이 되풀이되는 무늬를 이어 가고, 몸짓으로 쳐 봐요.',
            levels: { easy: { perRow: 8 }, base: { perRow: 8 }, challenge: { perRow: 9 } },
            items: [
              { prompt: '쾅 톡이 되풀이돼요. 빈칸을 채워 보세요.', toolOptions: { seq: ['쾅', '톡', '쾅', '톡', '쾅', null], palette: ['쾅', '톡'] }, target: { fill: ['톡'] }, difficulty: 0.05,
                levels: { challenge: { toolOptions: { palette: ['쾅', '톡', '쿵'] } } } },
              { prompt: '쾅 톡 톡이 되풀이돼요. 빈칸을 채워 보세요.', toolOptions: { seq: ['쾅', '톡', '톡', '쾅', null, '톡', null, '톡', '톡'], palette: ['쾅', '톡'] }, target: { fill: ['톡', '쾅'] }, difficulty: 0.2,
                levels: { easy: { prompt: '쾅 톡 톡이 되풀이돼요. 빈칸 하나를 채워 보세요.', toolOptions: { seq: ['쾅', '톡', '톡', '쾅', '톡', '톡', null] }, target: { fill: ['쾅'] } }, challenge: { toolOptions: { palette: ['쾅', '톡', '쿵'] } } } },
              { prompt: '쾅과 톡으로 묶음이 되풀이되는 나만의 소리 무늬를 만들어 보세요.', toolOptions: { mode: 'make', palette: ['쾅', '톡'], length: 6 }, target: { rule: 'repeat', minRepeats: 2, uses: 2 }, difficulty: 0.2,
                levels: { challenge: { prompt: '쾅·톡·쿵을 모두 써서 세 칸 묶음이 되풀이되는 소리 무늬를 만들어 보세요.', toolOptions: { palette: ['쾅', '톡', '쿵'], length: 9 }, target: { rule: 'repeat', period: 3, minRepeats: 3, uses: 3 } } } },
              { prompt: '내가 만든 무늬를 \'쾅\'은 무릎 세게, \'톡\'은 손가락 살짝으로 짝에게 쳐 줘요. 다 하면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"도서실에서는 센 소리를 낼까요, 여린 소리를 낼까요? 운동장 응원은요?" 곳에 따라 알맞은 세기가 다르다는 것을 짚는다. 출구 2번을 틀린 학생은 연필을 빠르게 사각사각 써 보며 소리 크기를 들어 보게 한다. 다음 시간에는 학교 소리의 빠르기와 세기를 함께 살핀다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'pattern', options: { seq: ['톡', '톡', '쾅', '톡', '톡', null], palette: ['쾅', '톡'] }, prompt: '톡 톡 쾅이 되풀이돼요. 빈칸을 채워 보세요.', target: { fill: ['쾅'] }, difficulty: 0.15 },
          { type: 'choice', prompt: '"사각사각사각" 빠르게 쓰는 연필 소리는 어떤 소리일까요?', options: ['센 소리', '여린 소리'], answer: 1, difficulty: 0.2, explain: '빠르게 나도 소리가 작으니 여린 소리예요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '센 소리, 여린 소리',
      items: [
        { type: 'figure', wide: true, prompt: '빈칸에 들어갈 소리를 쓰세요.', tool: 'pattern', figures: [{ options: { seq: ['쾅', '톡', '쾅', '톡', null, null] }, caption: '빈칸: ___, ___' }], answer: '쾅, 톡' },
        { type: 'choice', prompt: '여린 소리에 ○ 하세요.', options: ['소곤소곤 말소리', '와! 응원 소리', '삐익! 호루라기'], answer: '소곤소곤 말소리' },
        { type: 'table', prompt: '센 소리와 여린 소리를 하나씩 쓰세요.', columns: ['센 소리', '여린 소리'], rows: 2 },
        { type: 'draw', prompt: '센 소리를 낼 때 내 몸짓을 그리세요.' },
      ],
      easy: {
        note: '센 소리는 크게, 여린 소리는 작게!',
        items: [
          { type: 'choice', prompt: '센 소리에 ○ 하세요.', options: ['쾅!', '톡'], answer: '쾅!' },
          { type: 'choice', prompt: '도서실에서 낼 소리에 ○ 하세요.', options: ['여린 소리', '센 소리'], answer: '여린 소리' },
          { type: 'draw', prompt: '여린 소리를 낼 때 내 몸짓을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '나누기에서 맞으면 초록 테두리가 생기고, 무늬 빈칸이 하나예요.',
      base: '빈칸 두 개를 채우고, 두 칸 묶음 무늬를 만들어요.',
      challenge: '\'쿵\' 조각이 함정으로 섞이고, 세 칸 묶음 무늬를 만들어요. 몸짓 잇기는 소리가 세 가지예요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 빠른 소리를 센 소리로 여긴다 → 빠르게 여린 연필 소리를 직접 들려준다. ② 센 소리 몸짓이 지나쳐 친구에게 닿는다 → 팔 벌리기 전에 양옆 거리를 확인한다. ③ 무늬 빈칸 바로 앞만 보고 고른다 → 맨 앞부터 소리 내어 읽게 한다. 발 구르기 대신 무릎 치기를 쓰면 아래층 교실을 덜 울린다.',
  }));

  lessons.push(L(15, {
    title: '학교 소리를 빠르기와 세기로 함께 살피기',
    objective: '학교 소리를 빠르기와 세기를 함께 살펴 \'빠르고 여린 소리\', \'느리고 센 소리\'처럼 두 가지로 말하고, 같은 리듬을 세기만 바꾸어 칠 수 있다.',
    illustration: ART('a paper school with four little sound clouds around it: a big slow drum, tiny quick raindrops, a loud quick cheering crowd and a soft slow dripping tap', '빠르기와 세기', [
      { motif: 'cloud', x: 330, y: 90, s: 0.7 }, { motif: 'house', x: 130, y: 214, color: 'buttercup' }, { motif: 'tree', x: 400, y: 214 }]),
    safety: BODY_SAFE,
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"복도를 뛰는 발소리는 빠를까요, 느릴까요? 셀까요, 여릴까요?" 두 물음을 하나씩 따로 묻는다. "소리 하나에도 빠르기와 세기가 함께 있어요." 칠판에 빠르기(빠르게·느리게)와 세기(세게·여리게)를 두 줄로 붙인다. 시연 단추로 \'다다닥 쿵쾅 뛰는 발소리\' 카드가 \'빠르고 센 소리\' 가지에 들어가는 모습을 보여 준다.',
        student: '선생님 손뼉이 빠른지 느린지, 센지 여린지 두 가지를 차례로 말해 봐요.',
        demo: { tool: 'mindmap', options: { topic: '학교 소리', slots: ['빠르고 센 소리', '느리고 여린 소리'], cards: ['다다닥 쿵쾅 뛰는 발소리', '똑… 똑… 수도꼭지 물방울'], shuffle: false }, sequence: [{ sort: { '빠르고 센 소리': ['다다닥 쿵쾅 뛰는 발소리'], '느리고 여린 소리': ['똑… 똑… 수도꼭지 물방울'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 빠르기와 세기로 함께 나누기', minutes: 12, tool: 'mindmap',
            teacher: '"먼저 빠른지 느린지 손으로(머리 위·무릎), 다음에 센지 여린지 몸으로(크게·작게) 나타내 볼까요?" 두 번 나누어 판단한 뒤 가지를 고르게 한다. 한 가지만 보고 놓는 학생에게 "빠르기는 맞았어요. 세기는 어떤가요?"라고 짚는다.',
            task: '학교 소리 카드를 빠르기와 세기를 함께 살펴 알맞은 가지에 놓아요.',
            levels: CARD_LV,
            items: [
              { prompt: '학교 소리를 네 가지로 나누어 보세요.', toolOptions: { topic: '빠르기와 세기', slots: ['빠르고 센 소리', '빠르고 여린 소리', '느리고 센 소리', '느리고 여린 소리'], cards: ['다다닥 쿵쾅 뛰는 발소리', '사각사각사각 빠른 연필 소리', '쿵… 쿵… 무거운 상자 소리', '똑… 똑… 수도꼭지 물방울'] },
                target: { sort: { '빠르고 센 소리': ['다다닥 쿵쾅 뛰는 발소리'], '빠르고 여린 소리': ['사각사각사각 빠른 연필 소리'], '느리고 센 소리': ['쿵… 쿵… 무거운 상자 소리'], '느리고 여린 소리': ['똑… 똑… 수도꼭지 물방울'] } }, difficulty: 0.2,
                levels: { easy: { prompt: '학교 소리를 두 가지로 나누어 보세요.', toolOptions: { slots: ['빠르고 센 소리', '느리고 여린 소리'], cards: ['다다닥 쿵쾅 뛰는 발소리', '똑… 똑… 수도꼭지 물방울', '와와와와 큰 응원 소리', '소곤… 소곤… 작은 말소리'] }, target: { sort: { '빠르고 센 소리': ['다다닥 쿵쾅 뛰는 발소리', '와와와와 큰 응원 소리'], '느리고 여린 소리': ['똑… 똑… 수도꼭지 물방울', '소곤… 소곤… 작은 말소리'] } } } } },
              { prompt: '음악실 악기 소리를 네 가지로 나누어 보세요.', toolOptions: { topic: '빠르기와 세기', slots: ['빠르고 센 소리', '빠르고 여린 소리', '느리고 센 소리', '느리고 여린 소리'], cards: ['둥둥둥둥 세고 빠른 큰북', '찰찰찰찰 살살 빠른 방울', '쾅… 쾅… 세고 느린 심벌즈', '딩… 딩… 살살 느린 트라이앵글'] },
                target: { sort: { '빠르고 센 소리': ['둥둥둥둥 세고 빠른 큰북'], '빠르고 여린 소리': ['찰찰찰찰 살살 빠른 방울'], '느리고 센 소리': ['쾅… 쾅… 세고 느린 심벌즈'], '느리고 여린 소리': ['딩… 딩… 살살 느린 트라이앵글'] } }, difficulty: 0.2 },
              { prompt: '빠르지만 여린 소리만 골라 보세요.', toolOptions: { mode: 'pick', basket: '빠르지만 여린 소리', cards: ['사르르르 빠른 바람 소리', '쾅쾅쾅쾅 빠른 망치 소리', '토독토독 살살 빠른 빗방울', '둥… 둥… 큰북 소리'] },
                target: { pick: ['사르르르 빠른 바람 소리', '토독토독 살살 빠른 빗방울'] }, difficulty: 0.25,
                hints: ['빠른지 먼저 보고, 그 가운데 작게 나는 소리를 찾아요.', '\'쾅쾅쾅쾅\'은 빠르지만 커요. \'둥… 둥…\'은 느려요.', '바람 소리와 빗방울 소리 두 장을 골라요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 같은 리듬을 세기만 바꾸어 치기', minutes: 14, tool: 'keyboard',
            teacher: '"리듬 듣기를 눌러 블록으로 놓은 뒤, 처음엔 세게 손뼉으로, 다음엔 여리게 손가락으로 쳐 봐요." 두 번 친 뒤 "블록이 바뀌었나요?"라고 묻는다. 여리게 칠 때 저절로 느려지는 학생이 많으니 선생님이 박을 세어 준다.',
            task: '리듬 듣기를 누르고 블록으로 놓은 뒤, 같은 리듬을 세게 한 번, 여리게 한 번 쳐요.',
            levels: SPEED_LV,
            items: [
              { prompt: '짝짝 짝짝짝 리듬이에요. 리듬 듣기를 누르고 블록으로 놓아 보세요.', toolOptions: { pattern: ['q', 'q', 'e', 'e', 'q'] }, target: { rhythm: ['q', 'q', 'e', 'e', 'q'] }, difficulty: 0.2,
                levels: { easy: { prompt: '짝짝짝짝 짝 리듬이에요. 리듬 듣기를 누르고 블록으로 놓아 보세요.', toolOptions: { pattern: ['e', 'e', 'e', 'e', 'h'] }, target: { rhythm: ['e', 'e', 'e', 'e', 'h'] } } } },
              { prompt: '놓은 리듬을 손뼉으로 세게 한 번, 손가락으로 여리게 한 번 쳐 봐요. 다 하면 "다 했어요"를 누르세요.', free: true, talk: true },
              { prompt: '빠른 리듬 다음에 느린 리듬이 와요. 리듬 듣기를 누르고 블록으로 놓아 보세요.', toolOptions: { pattern: ['e', 'e', 'e', 'e', 'h'] }, target: { rhythm: ['e', 'e', 'e', 'e', 'h'] }, difficulty: 0.2,
                levels: { easy: { prompt: '느린 리듬 다음에 빠른 리듬이 와요. 리듬 듣기를 누르고 블록으로 놓아 보세요.', toolOptions: { pattern: ['h', 'e', 'e', 'e', 'e'] }, target: { rhythm: ['h', 'e', 'e', 'e', 'e'] } }, challenge: { prompt: '빠른 리듬, 보통 리듬, 빠른 리듬이에요. 리듬 듣기를 누르고 블록으로 놓아 보세요.', toolOptions: { pattern: ['e', 'e', 'q', 'q', 'e', 'e'] }, target: { rhythm: ['e', 'e', 'q', 'q', 'e', 'e'] } } },
                predict: { q: '이 리듬을 여리게 치면 블록이 바뀔까요?', options: ['바뀌어요', '그대로예요'], answer: 1 },
                conclude: '세기를 바꾸어도 리듬 블록(빠르기)은 그대로예요.' },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 들은 소리 가운데 \'빠르고 여린 소리\'는 무엇이었나요?" 두세 명이 흉내 내게 한다. 빠르기와 세기는 따로따로 바꿀 수 있다는 것을 손뼉으로 다시 확인한다. 다음 시간에는 그림 악보로 빠르기와 세기를 나타내 본다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '빠르기와 세기', slots: ['빠르고 센 소리', '느리고 여린 소리'], cards: ['빵빵빵빵 빠른 경적', '살랑… 살랑… 나뭇잎 소리'] }, prompt: '두 소리를 알맞은 가지에 놓아 보세요.', target: { sort: { '빠르고 센 소리': ['빵빵빵빵 빠른 경적'], '느리고 여린 소리': ['살랑… 살랑… 나뭇잎 소리'] } }, difficulty: 0.15 },
          { type: 'choice', prompt: '같은 리듬을 여리게 치면 무엇이 달라질까요?', options: ['소리 크기만 작아져요', '리듬이 느려져요', '블록 수가 줄어요'], answer: 0, difficulty: 0.2, explain: '세기만 바꾸면 빠르기와 리듬은 그대로예요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '빠르기와 세기',
      items: [
        { type: 'table', prompt: '소리를 듣고 알맞은 칸에 ○ 하세요.', columns: ['소리', '빠르게', '느리게', '세게', '여리게'], cells: [['다다닥 쿵쾅', '', '', '', ''], ['사각사각사각', '', '', '', ''], ['똑… 똑…', '', '', '', '']] },
        { type: 'choice', prompt: '느리고 센 소리에 ○ 하세요.', options: ['쿵… 쿵… 상자 소리', '사각사각 연필 소리'], answer: '쿵… 쿵… 상자 소리' },
        { type: 'short', prompt: '우리 학교에서 빠르고 여린 소리를 하나 쓰세요.' },
        { type: 'draw', prompt: '느리고 센 소리를 내는 것을 그리세요.' },
      ],
      easy: {
        note: '빠르기 한 번, 세기 한 번 따로 생각해요.',
        items: [
          { type: 'choice', prompt: '다다닥 뛰는 발소리는?', options: ['빠르고 세요', '느리고 여려요'], answer: '빠르고 세요' },
          { type: 'choice', prompt: '똑… 똑… 물방울은?', options: ['느리고 여려요', '빠르고 세요'], answer: '느리고 여려요' },
          { type: 'draw', prompt: '좋아하는 학교 소리를 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '두 가지로만 나누고, 리듬은 블록 두 가지에 박 표시가 보여요.',
      base: '네 가지로 나누고, 빠른 리듬과 느린 리듬을 놓아요.',
      challenge: '네 가지로 나누고, 세 부분으로 바뀌는 리듬을 놓아요. 쉼표·온음표 블록이 함정으로 나와요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 빠르기와 세기 가운데 하나만 보고 판단한다 → 두 번 나누어 묻고 손 신호를 따로 정한다. ② 여리게 치면 저절로 느려진다 → 선생님이 박을 세어 주며 같은 빠르기를 지키게 한다. ③ 흉내말과 실제 소리를 잇지 못한다 → 카드를 선생님이 실제 빠르기·세기로 읽어 준다. 네 칸 나누기는 1학년에게 어려우니 쉬움 단계(두 칸)부터 시작해도 된다.',
  }));

  lessons.push(L(16, {
    title: '그림 악보로 빠르기와 세기 나타내기',
    objective: '큰 동그라미는 센 소리, 작은 동그라미는 여린 소리, 촘촘하면 빠르고 띄엄띄엄하면 느린 소리로 그림 악보를 읽고 만들 수 있다.',
    illustration: ART('a long paper strip with big and small colored circles placed close together and far apart like a picture music score, a child tapping along with a finger', '그림 악보', [
      { motif: 'star', x: 120, y: 88, s: 0.6 }, { motif: 'flower', x: 360, y: 228, color: 'sky' }, { motif: 'tree', x: 410, y: 214 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '칠판에 큰 동그라미 둘, 작은 동그라미 둘을 그려 놓고 "이 그림을 소리로 내 볼까요?" 묻는다. 큰 동그라미에서 세게, 작은 동그라미에서 여리게 손뼉을 치며 읽는다. 다음으로 동그라미를 촘촘히, 띄엄띄엄 그려 빠르기도 그림으로 나타낼 수 있다는 것을 보여 준다. 시연 단추로 큰 동그라미와 작은 동그라미가 판에 붙는 모습을 보여 준다.',
        student: '칠판 그림 악보를 보고 큰 동그라미는 세게, 작은 동그라미는 여리게 손뼉 쳐 봐요.',
        demo: { tool: 'collage', options: { readOnly: true }, sequence: [{ has: [{ shape: 'circle', size: 'l', n: 2 }, { shape: 'circle', size: 's', n: 2 }] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 그림 악보 읽기', minutes: 11, tool: 'mindmap',
            teacher: '"동그라미가 크면 소리가 어때요? 동그라미 사이가 가까우면요?" 그림 악보 설명을 읽고 소리를 잇게 한다. 다 이으면 그림 악보를 손뼉으로 직접 쳐 보게 한다. 큰 동그라미를 \'빠르다\'로 읽는 학생에게 "크기는 세기, 사이는 빠르기예요"라고 칠판의 약속을 다시 가리킨다.',
            task: '그림 악보 설명을 읽고 어울리는 소리 카드를 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '그림 악보와 어울리는 소리를 이어 보세요.', toolOptions: { mode: 'match', topic: '그림 악보 읽기', slots: [{ id: 's1', label: '큰 동그라미가 띄엄띄엄' }, { id: 's2', label: '작은 동그라미가 다닥다닥' }], cards: ['느리고 센 소리', '빠르고 여린 소리'] },
                target: { match: { s1: '느리고 센 소리', s2: '빠르고 여린 소리' } }, difficulty: 0.15 },
              { prompt: '네 그림 악보와 어울리는 소리를 이어 보세요.', toolOptions: { mode: 'match', topic: '그림 악보 읽기', slots: [{ id: 's1', label: '큰 동그라미가 다닥다닥' }, { id: 's2', label: '작은 동그라미가 띄엄띄엄' }, { id: 's3', label: '큰 동그라미가 띄엄띄엄' }, { id: 's4', label: '작은 동그라미가 다닥다닥' }], cards: ['빠르고 센 소리', '느리고 여린 소리', '느리고 센 소리', '빠르고 여린 소리'] },
                target: { match: { s1: '빠르고 센 소리', s2: '느리고 여린 소리', s3: '느리고 센 소리', s4: '빠르고 여린 소리' } }, difficulty: 0.3,
                levels: { easy: { prompt: '두 그림 악보와 어울리는 소리를 이어 보세요.', toolOptions: { slots: [{ id: 's1', label: '큰 동그라미가 다닥다닥' }, { id: 's2', label: '작은 동그라미가 띄엄띄엄' }], cards: ['빠르고 센 소리', '느리고 여린 소리'] }, target: { match: { s1: '빠르고 센 소리', s2: '느리고 여린 소리' } } } },
                hints: ['동그라미 크기는 세기, 동그라미 사이는 빠르기예요.', '크기와 사이를 따로 읽어요. 크면 세게, 다닥다닥하면 빠르게예요.', '다닥다닥 큰 것은 빠르고 센 소리, 띄엄띄엄 작은 것은 느리고 여린 소리예요.'] },
              { prompt: '\'세게 두 번, 여리게 두 번\'을 나타낸 그림 악보만 골라 보세요. ●는 큰 동그라미, •는 작은 동그라미예요.', toolOptions: { mode: 'pick', basket: '세게 둘, 여리게 둘', cards: ['● ● • •', '• • ● ●', '● • ● •', '● ● ● ●'] },
                target: { pick: ['● ● • •'] }, difficulty: 0.2 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 나만의 그림 악보 만들기', minutes: 15, tool: 'collage',
            teacher: '"큰 동그라미와 작은 동그라미로 나만의 그림 악보를 만들어 볼까요? 왼쪽에서 오른쪽으로 읽어요." 판에서 만든 뒤 긴 종이 띠에 실제 동그라미 스티커(또는 미리 오려 둔 색종이)를 붙인다. 다 만든 악보는 짝이 손뼉으로 읽어 준다. 짝이 내 생각과 다르게 읽으면 크기를 더 다르게 바꾸어 보게 한다.',
            task: '큰 동그라미와 작은 동그라미로 그림 악보를 꾸미고, 짝이 손뼉으로 읽어 줘요.',
            levels: {
              easy: { shapes: ['circle'], colors: ['빨강', '파랑', '노랑'], sizes: ['s', 'l'] },
              base: { shapes: ['circle', 'square', 'star'], sizes: ['s', 'm', 'l'] },
              challenge: {},
            },
            items: [
              { prompt: '세게 두 번, 여리게 두 번 소리 나는 그림 악보를 만들어 보세요. 큰 동그라미 둘, 작은 동그라미 둘이에요.', target: { has: [{ shape: 'circle', size: 'l', n: 2 }, { shape: 'circle', size: 's', n: 2 }] }, difficulty: 0.1 },
              { prompt: '\'큰 동그라미, 작은 동그라미\' 묶음으로 시작했어요. 같은 차례로 두 번 더 이어 붙여 보세요.', state: { pieces: [{ shape: 'circle', color: '빨강', size: 'l', x: 80, y: 200, r: 0 }, { shape: 'circle', color: '파랑', size: 's', x: 160, y: 200, r: 0 }] }, target: { repeat: { times: 3, unit: 2 } }, difficulty: 0.25,
                hints: ['한 묶음이 어떤 조각으로 되는지 먼저 정해요.', '큰 동그라미 다음에 작은 동그라미, 이 차례를 그대로 이어 가요. 색도 묶음마다 같게 해요.', '큰-작은, 큰-작은, 큰-작은 차례로 왼쪽부터 여섯 조각을 붙여요.'] },
              { prompt: '여린 소리를 세 번 이상, 센 소리를 한 번 이상 내는 그림 악보를 만들어요. 작은 동그라미 셋 이상, 큰 동그라미 하나 이상이에요.', target: { has: [{ shape: 'circle', size: 's', min: 3 }, { shape: 'circle', size: 'l', min: 1 }] }, difficulty: 0.2 },
              { prompt: '긴 종이 띠에 내 그림 악보를 붙이고 짝이 손뼉으로 읽어 줘요. 다 하면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"짝이 내 그림 악보를 내 생각대로 읽어 주었나요?" 두세 명의 악보를 실물 화상기로 보여 주고 반 전체가 손뼉으로 읽는다. 13~16차시에 배운 빠르기와 세기를 정리하고, 다음 시간부터는 선생님 소리를 그대로 따라 내는 놀이를 한다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'collage', options: { shapes: ['circle'], sizes: ['s', 'l'], colors: ['빨강', '파랑'] }, prompt: '센 소리 세 번을 나타내는 그림 악보예요. 큰 동그라미를 세 개 붙여 보세요.', target: { has: [{ shape: 'circle', size: 'l', n: 3 }] }, difficulty: 0.1 },
          { type: 'choice', prompt: '작은 동그라미가 다닥다닥 붙은 그림 악보는 어떤 소리일까요?', options: ['빠르고 여린 소리', '느리고 센 소리', '느리고 여린 소리'], answer: 0, difficulty: 0.2, explain: '작으면 여리고, 다닥다닥하면 빨라요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '그림 악보',
      items: [
        { type: 'figure', wide: true, prompt: '이 그림 악보를 어떻게 칠지 쓰세요.', tool: 'collage', figures: [{ options: { readOnly: true, printColors: false }, state: { pieces: [{ shape: 'circle', color: '빨강', size: 'l', x: 100, y: 200, r: 0 }, { shape: 'circle', color: '빨강', size: 'l', x: 220, y: 200, r: 0 }, { shape: 'circle', color: '파랑', size: 's', x: 320, y: 200, r: 0 }, { shape: 'circle', color: '파랑', size: 's', x: 380, y: 200, r: 0 }] }, caption: '__________' }], answer: '세게 두 번(느리게), 여리게 두 번(빠르게)' },
        { type: 'choice', prompt: '큰 동그라미는 어떤 소리일까요?', options: ['센 소리', '여린 소리'], answer: '센 소리' },
        { type: 'draw', wide: true, prompt: '나만의 그림 악보를 그리세요.' },
        { type: 'short', prompt: '내 그림 악보를 말로 쓰세요. (예: 세게 둘, 여리게 둘)' },
      ],
      easy: {
        note: '크면 세게, 작으면 여리게!',
        items: [
          { type: 'choice', prompt: '여린 소리를 나타내는 것에 ○ 하세요.', options: ['작은 동그라미', '큰 동그라미'], answer: '작은 동그라미' },
          { type: 'choice', prompt: '다닥다닥 붙은 것은?', options: ['빠른 소리', '느린 소리'], answer: '빠른 소리' },
          { type: 'draw', wide: true, prompt: '큰 동그라미와 작은 동그라미로 악보를 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '판에 동그라미만 크게·작게 두 크기로 나와요. 악보 읽기는 두 가지만 이어요.',
      base: '네 가지 그림 악보를 읽고, 되풀이 악보를 만들어요.',
      challenge: '모든 모양과 크기가 나와 동그라미 크기를 스스로 골라야 해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 동그라미 크기를 빠르기로 읽는다 → \'크기 = 세기, 사이 = 빠르기\' 약속을 칠판에 그림으로 붙여 둔다. ② 그림 악보를 오른쪽부터 읽는다 → 손가락을 왼쪽 끝에 두고 시작한다. ③ 붙이다 보면 크기를 섞는다 → 붙이기 전에 판에 늘어놓아 짝과 확인한다. 동그라미 스티커가 없으면 색종이를 미리 큰·작은 두 크기로 오려 나누어 준다(학생은 가위를 쓰지 않는다).',
  }));

  // ───────────────────────── 17~20차시: 따라 내고 바꾸어 내기 ─────────────────────────

  // 리듬 바꾸기: 쉬움은 한 마디·박 표시, 기본은 쉼표 블록까지, 도전은 8분쉼표·온음표가 함정으로
  var CHANGE_LV = {
    easy: { mode: 'rhythm', meter: 4, measures: 1, blocks: ['q', 'e', 'h'], showBeats: true },
    base: { mode: 'rhythm', meter: 4, measures: 1, blocks: ['q', 'e', 'h', 'qr'] },
    challenge: { mode: 'rhythm', meter: 4, measures: 1, blocks: ['q', 'e', 'h', 'qr', 'er', 'w'] },
  };
  // 메아리 가락: 쉬움은 건반 여섯 개(미~높은도)에 계이름, 기본은 한 옥타브에 계이름, 도전은 계이름 없이 귀로
  var ECHO_LV = {
    easy: { mode: 'melody', from: '미', to: '높은도', names: 'solfa' },
    base: { mode: 'melody', from: '도', to: '높은도', names: 'solfa' },
    challenge: { mode: 'melody', from: '도', to: '높은도', names: 'none', nameToggle: false },
  };

  lessons.push(L(17, {
    title: '선생님 소리를 메아리처럼 따라 내기',
    objective: '선생님이 손뼉과 목소리로 낸 짧은 소리를 듣고, 박과 높낮이를 그대로 따라 내어 블록과 건반으로 나타낼 수 있다.',
    illustration: ART('a paper mountain echoing a child\'s call back, with small sound waves bouncing between a teacher and children clapping', '메아리처럼 따라 해요', [
      { motif: 'mountain', x: 380, y: 200 }, { motif: 'bird', x: 140, y: 90 }, { motif: 'tree', x: 90, y: 214 }]),
    safety: BODY_SAFE,
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"산에서 \'야호\' 하면 어떻게 되나요?" 메아리가 똑같이 돌려준다는 것을 떠올리게 한다. "오늘 여러분은 메아리예요. 선생님 소리를 그대로 돌려주세요." 손뼉 \'짝 짝 짝—\'을 치고 학생이 따라 친다. 시연 단추로 같은 리듬이 블록으로 놓이는 모습을 보여 준다. 소리가 끝날 때까지 기다렸다가 따라 내는 것이 메아리 약속이라고 짚는다.',
        student: '선생님 손뼉이 끝나면, 똑같이 손뼉으로 돌려줘요.',
        demo: { tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 1, blocks: ['q', 'h'], pattern: ['q', 'q', 'h'] }, sequence: [{ rhythm: ['q', 'q', 'h'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 손뼉 메아리 블록으로 놓기', minutes: 12, tool: 'keyboard',
            teacher: '"리듬 듣기를 누르고, 끝까지 들은 뒤 손뼉으로 먼저 따라 쳐요. 그다음 블록으로 놓아요." 손뼉으로 먼저 쳐 본 학생이 블록도 잘 놓는다. 길게 끄는 소리(2박)를 한 박으로 놓는 학생에게 "손뼉 친 뒤 손을 얼마나 오래 붙이고 있었나요?" 하고 묻는다.',
            task: '리듬 듣기를 누르고 손뼉으로 따라 친 뒤, 같은 리듬을 블록으로 놓아요.',
            levels: CHANGE_LV,
            items: [
              { prompt: '짝 짝짝 짝 리듬이에요. 리듬 듣기를 누르고 그대로 블록으로 놓아 보세요.', toolOptions: { pattern: ['q', 'e', 'e', 'h'] }, target: { rhythm: ['q', 'e', 'e', 'h'] }, difficulty: 0.15 },
              { prompt: '짝 짝 짝짝 짝 리듬이에요. 리듬 듣기를 누르고 그대로 블록으로 놓아 보세요.', toolOptions: { pattern: ['q', 'q', 'e', 'e', 'q'] }, target: { rhythm: ['q', 'q', 'e', 'e', 'q'] }, difficulty: 0.2,
                levels: { base: { prompt: '짝 짝 짝 쉬고 리듬이에요. 리듬 듣기를 누르고 그대로 블록으로 놓아 보세요.', toolOptions: { pattern: ['q', 'q', 'q', 'qr'] }, target: { rhythm: ['q', 'q', 'q', 'qr'] } }, challenge: { prompt: '짝짝 짝 쉬고 짝 리듬이에요. 리듬 듣기를 누르고 그대로 블록으로 놓아 보세요.', toolOptions: { pattern: ['e', 'e', 'q', 'qr', 'q'] }, target: { rhythm: ['e', 'e', 'q', 'qr', 'q'] } } } },
              { prompt: '두 마디 손뼉 메아리예요. 리듬 듣기를 누르고 그대로 블록으로 놓아 보세요.', toolOptions: { measures: 2, pattern: ['q', 'q', 'h', 'e', 'e', 'e', 'e', 'h'] }, target: { rhythm: ['q', 'q', 'h', 'e', 'e', 'e', 'e', 'h'] }, difficulty: 0.3,
                levels: { easy: { prompt: '짝짝짝짝 짝— 리듬이에요. 리듬 듣기를 누르고 그대로 블록으로 놓아 보세요.', toolOptions: { measures: 1, pattern: ['e', 'e', 'e', 'e', 'h'] }, target: { rhythm: ['e', 'e', 'e', 'e', 'h'] } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 목소리 메아리 건반으로 치기', minutes: 14, tool: 'keyboard',
            teacher: '선생님이 "민지야~"(솔 미)처럼 이름 부르는 가락으로 노래한다. "선생님 목소리는 높았다가 낮아졌나요, 낮았다가 높아졌나요?" 손을 위아래로 움직이며 높낮이를 그리게 한 뒤 건반으로 찾아 치게 한다. 같은 음이 두 번 나오는 곳에서 한 번만 치는 학생에게 소리가 몇 번 났는지 손가락으로 세어 보게 한다.',
            task: '가락 듣기를 누르고 목소리로 먼저 따라 부른 뒤, 건반으로 똑같이 쳐요.',
            levels: ECHO_LV,
            items: [
              { prompt: '"안녕~" 하고 부르는 가락이에요. 가락 듣기를 누르고 똑같이 쳐 보세요.', toolOptions: { melody: ['솔', '미'] }, target: { notes: ['솔', '미'] }, difficulty: 0.1 },
              { prompt: '"반가워~" 하고 부르는 가락이에요. 가락 듣기를 누르고 똑같이 쳐 보세요.', toolOptions: { melody: ['솔', '솔', '미'] }, target: { notes: ['솔', '솔', '미'] }, difficulty: 0.15 },
              { prompt: '"우리 학교~" 하고 부르는 가락이에요. 가락 듣기를 누르고 똑같이 쳐 보세요.', toolOptions: { melody: ['솔', '라', '솔', '미'] }, target: { notes: ['솔', '라', '솔', '미'] }, difficulty: 0.25,
                predict: { q: '"우리 학교~"의 둘째 소리는 첫 소리보다 높을까요, 낮을까요?', options: ['높아요', '낮아요'], answer: 0 },
                conclude: '귀로 높낮이를 먼저 듣고 손으로 그리면 건반을 찾기 쉬워요.' },
              { prompt: '짝이 "○○야~" 하고 이름 가락을 부르면, 나는 메아리처럼 똑같이 불러 줘요. 바꾸어 해요. 다 하면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"메아리가 되려면 무엇을 꼭 지켜야 했나요?" 끝까지 듣기, 똑같은 박과 높이로 돌려주기를 이끌어 낸다. 다음 시간에는 따라 낸 소리를 일부러 빠르게, 느리게 바꾸어 본다고 예고한다. "다음에는 메아리가 장난꾸러기가 돼요!"',
        exitTicket: [
          { type: 'tool', tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 1, blocks: ['q', 'e', 'h'], pattern: ['h', 'q', 'q'] }, prompt: '짝— 짝 짝 리듬이에요. 리듬 듣기를 누르고 그대로 블록으로 놓아 보세요.', target: { rhythm: ['h', 'q', 'q'] }, difficulty: 0.15 },
          { type: 'choice', prompt: '메아리처럼 따라 낼 때 가장 먼저 할 일은?', options: ['소리를 끝까지 들어요', '바로 함께 쳐요', '더 크게 쳐요'], answer: 0, difficulty: 0.1, explain: '끝까지 들어야 똑같이 돌려줄 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '메아리 놀이',
      items: [
        { type: 'figure', wide: true, prompt: '선생님 손뼉을 듣고 블록 칸에 들은 리듬을 그리세요.', tool: 'keyboard', figures: [{ options: { mode: 'rhythm', meter: 4, measures: 1, blocks: ['q', 'e', 'h'] }, caption: '' }], answer: '선생님이 들려준 리듬' },
        { type: 'choice', prompt: '"안녕~" 가락은 어떻게 움직였나요?', options: ['높았다가 낮아져요', '낮았다가 높아져요'], answer: '높았다가 낮아져요' },
        { type: 'check', prompt: '메아리 약속에 ✓ 하세요.', options: ['끝까지 들어요', '똑같은 박으로 돌려줘요', '똑같은 높이로 불러요'] },
        { type: 'short', prompt: '짝이 불러 준 이름 가락을 손으로 그려 보고, 느낌을 쓰세요.' },
      ],
      easy: {
        note: '끝까지 듣고, 똑같이 돌려줘요.',
        items: [
          { type: 'choice', prompt: '메아리는 어떻게 하나요?', options: ['똑같이 돌려줘요', '다르게 해요'], answer: '똑같이 돌려줘요' },
          { type: 'choice', prompt: '길게 끄는 소리는?', options: ['2박', '반 박'], answer: '2박' },
          { type: 'draw', prompt: '메아리 놀이를 하는 모습을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '한 마디만 놓고 박 수가 보여요. 건반이 여섯 개이고 계이름이 보여요.',
      base: '쉼표가 든 리듬을 놓고, 한 옥타브 건반에서 쳐요.',
      challenge: '두 마디 리듬을 놓고, 계이름 없이 귀로만 건반을 찾아요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 다 듣기 전에 따라 친다 → 선생님 손을 내릴 때까지 기다리는 신호를 정한다. ② 2박 소리를 1박으로 놓는다 → 손뼉 뒤 손을 붙인 채 "하나 둘"을 세게 한다. ③ 같은 음 두 번을 한 번으로 친다 → 손가락으로 소리 수를 센다. 이름 가락을 부를 때 친구 이름 대신 \'친구야~\'로 불러도 된다(이름을 놀리는 데 쓰지 않게 한다).',
  }));

  lessons.push(L(18, {
    title: '따라 낸 리듬을 빠르게 느리게 바꾸기',
    objective: '선생님 리듬을 그대로 따라 친 뒤, 같은 리듬을 두 배로 빠르게 또는 느리게 바꾸어 블록으로 놓고 칠 수 있다.',
    illustration: ART('a paper rabbit hopping quickly and a paper turtle walking slowly along the same dotted rhythm path, a child clapping in the middle', '빠르게도, 느리게도', [
      { motif: 'flower', x: 110, y: 228, color: 'rose' }, { motif: 'tree', x: 400, y: 214 }, { motif: 'star', x: 330, y: 86, s: 0.6 }]),
    safety: BODY_SAFE,
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"오늘 메아리는 장난꾸러기예요. 선생님이 \'짝 짝 짝 짝\' 하면, 토끼 메아리는 빠르게 \'짝짝짝짝짝짝짝짝\', 거북 메아리는 느리게 \'짝— 짝—\' 돌려줘요." 반을 토끼 편, 거북 편으로 나누어 한 번씩 해 본다. "따라 하다가 바꾸면 틀린 걸까요?" 물어 \'바꾸어 보는 것도 표현\'이라는 것을 짚는다. 시연 단추로 토끼 메아리가 블록으로 놓이는 모습을 보여 준다.',
        student: '토끼 편은 빠르게, 거북 편은 느리게 선생님 손뼉을 바꾸어 돌려줘요.',
        demo: { tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 1, blocks: ['e', 'q', 'h'] }, sequence: [{ rhythm: ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 토끼 메아리, 거북 메아리', minutes: 13, tool: 'keyboard',
            teacher: '"선생님 리듬의 블록 하나하나를 반 박짜리로 바꾸면 토끼 메아리가 돼요. 그러면 한 마디가 남지요? 한 번 더 쳐서 채워요." 칠판에 원래 리듬과 바뀐 리듬을 위아래로 붙여 견준다. 블록 수만 늘리고 차례를 바꾸는 학생에게 "원래 리듬의 모양이 남아 있나요?"라고 묻는다.',
            task: '선생님 리듬을 듣고, 빠르게 또는 느리게 바꾼 리듬을 블록으로 놓아요.',
            levels: CHANGE_LV,
            items: [
              { prompt: '선생님: 짝 짝 짝 짝(한 박씩). 토끼 메아리는 모두 반 박으로 빠르게, 두 번 쳐서 한 마디를 채워요. 블록으로 놓아 보세요.', toolOptions: { pattern: ['q', 'q', 'q', 'q'] }, target: { rhythm: ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'] }, difficulty: 0.2,
                hints: ['원래 리듬의 블록 하나를 더 짧은 블록으로 바꾸면 빨라져요.', '한 박 블록을 반 박 블록으로 바꾸면 반 마디만 차요. 같은 리듬을 한 번 더 이어요.', '반 박 블록 여덟 개를 놓아요.'] },
              { prompt: '선생님: 짝 짝 짝 짝(한 박씩). 거북 메아리는 소리마다 두 박으로 느리게, 앞의 두 소리만 쳐요. 블록으로 놓아 보세요.', toolOptions: { pattern: ['q', 'q', 'q', 'q'] }, target: { rhythm: ['h', 'h'] }, difficulty: 0.2 },
              { prompt: '선생님: 짝 짝 짝—. 토끼 메아리로 반만큼 빠르게 바꾸어 두 번 쳐요. 블록으로 놓아 보세요.', toolOptions: { pattern: ['q', 'q', 'h'] }, target: { rhythm: ['e', 'e', 'q', 'e', 'e', 'q'] }, difficulty: 0.3,
                levels: { easy: { prompt: '선생님: 짝— 짝—. 토끼 메아리로 반만큼 빠르게 바꾸어 두 번 쳐요. 블록으로 놓아 보세요.', toolOptions: { pattern: ['h', 'h'] }, target: { rhythm: ['q', 'q', 'q', 'q'] } } },
                predict: { q: '빠르게 바꾸면 리듬 모양(긴 소리·짧은 소리 차례)도 바뀔까요?', options: ['모양이 바뀌어요', '모양은 그대로예요'], answer: 1 },
                conclude: '빠르기만 바꾸면 긴 소리와 짧은 소리의 차례는 그대로 남아요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 내가 바꾼 메아리 들려주기', minutes: 13, tool: 'keyboard',
            teacher: '"이번에는 여러분이 바꾸어요. 선생님 리듬을 먼저 그대로 쳐 보고, 빠르게나 느리게 바꾸어 다시 쳐요." 바꾼 리듬은 짝에게 손뼉으로 들려주고 짝이 \'토끼\'인지 \'거북\'인지 맞히게 한다. "바꾸면 틀린 소리예요"라는 학생에게 "토끼 메아리도 선생님 리듬에서 나왔지요?"라고 말해 준다.',
            task: '선생님 리듬을 그대로 놓은 뒤 빠르기를 바꾸어 다시 놓고, 짝에게 들려줘요.',
            levels: CHANGE_LV,
            items: [
              { prompt: '선생님: 짝 짝짝 짝 짝. 리듬 듣기를 누르고 먼저 그대로 놓아 보세요.', toolOptions: { pattern: ['q', 'e', 'e', 'q', 'q'] }, target: { rhythm: ['q', 'e', 'e', 'q', 'q'] }, difficulty: 0.15 },
              { prompt: '선생님 리듬(짝 짝짝 짝 짝)을 거북 메아리로 바꾸면 두 마디가 돼요. 블록 하나하나를 두 배 길이로 바꾸어 놓아 보세요.', toolOptions: { measures: 2, pattern: ['q', 'e', 'e', 'q', 'q'] }, target: { rhythm: ['h', 'q', 'q', 'h', 'h'] }, difficulty: 0.3,
                levels: { easy: { prompt: '선생님 리듬(짝 짝짝 짝 짝)의 앞부분 짝 짝짝을 거북 메아리로 두 배 길이로 바꾸어 한 마디에 놓아 보세요.', toolOptions: { measures: 1 }, target: { rhythm: ['h', 'q', 'q'] } } } },
              { prompt: '내가 바꾼 메아리를 마디가 모두 4박이 되게 놓고, 해낸 것을 표시해요.', toolOptions: { measures: 2 }, target: { beats: true, selfCheck: ['선생님 리듬을 먼저 그대로 쳐 보았어요', '빠르기를 바꾸어 다시 쳐 보았어요', '짝에게 들려주고 토끼인지 거북인지 맞혀 보게 했어요'] }, difficulty: 0.2 },
              { prompt: '짝이 바꾼 메아리를 듣고 토끼(빠르게)인지 거북(느리게)인지 맞혀요. 바꾸어 해요. 다 하면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"같은 리듬을 바꾸었더니 느낌이 어땠나요?" 토끼 메아리는 신나고, 거북 메아리는 차분하다는 말을 이끌어 낸다. 따라 하다가 바꾸어 보는 것도 멋진 표현이라는 것을 다시 짚는다. 다음 시간에는 학교 소리를 흉내 낸 가락을 만든다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 1, blocks: ['q', 'e', 'h'], pattern: ['h', 'h'] }, prompt: '선생님: 짝— 짝—. 반만큼 빠르게 바꾸어 두 번 친 토끼 메아리를 블록으로 놓아 보세요.', target: { rhythm: ['q', 'q', 'q', 'q'] }, difficulty: 0.2 },
          { type: 'choice', prompt: '따라 하던 리듬을 빠르게 바꾸어 쳤어요. 이것은 어떤 것일까요?', options: ['틀린 소리예요', '바꾸어 본 새 표현이에요'], answer: 1, difficulty: 0.1, explain: '따라 한 소리를 바꾸어 보는 것도 멋진 표현이에요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '토끼 메아리, 거북 메아리',
      items: [
        { type: 'table', prompt: '선생님 리듬과 바꾼 리듬을 짝짝(빠르게)·짝—(느리게)로 쓰세요.', columns: ['선생님 리듬', '토끼 메아리', '거북 메아리'], cells: [['짝 짝 짝 짝', '', '']] },
        { type: 'choice', prompt: '빠르게 바꾼 메아리에 ○ 하세요.', options: ['짝짝짝짝짝짝짝짝', '짝— 짝—'], answer: '짝짝짝짝짝짝짝짝' },
        { type: 'choice', prompt: '느리게 바꾸면 블록은 어떻게 될까요?', options: ['더 긴 블록이 돼요', '더 짧은 블록이 돼요'], answer: '더 긴 블록이 돼요' },
        { type: 'short', prompt: '내가 바꾼 메아리를 친 느낌을 쓰세요.' },
      ],
      easy: {
        note: '토끼는 빠르게, 거북은 느리게!',
        items: [
          { type: 'choice', prompt: '토끼 메아리는?', options: ['빠르게', '느리게'], answer: '빠르게' },
          { type: 'choice', prompt: '거북 메아리는?', options: ['느리게', '빠르게'], answer: '느리게' },
          { type: 'draw', prompt: '토끼나 거북 메아리를 하는 내 모습을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '한 마디만 놓고 박 수가 보여요. 바꿀 리듬이 짧아요.',
      base: '바꾼 리듬을 두 마디까지 늘여 놓아요.',
      challenge: '8분쉼표·온음표 블록이 함정으로 섞여 있고, 짝의 메아리를 듣고 블록으로 놓아 봐요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 따라 하기만 해야 하고 바꾸면 틀린다고 여긴다 → 토끼·거북 메아리도 선생님 리듬에서 나왔다는 것을 칠판에서 위아래로 견준다. ② 빠르게 바꾸며 리듬 모양까지 바꾼다 → 긴 소리·짧은 소리 차례를 손으로 짚어 확인한다. ③ 빨라질수록 소리가 커진다 → 토끼 메아리는 \'살살 빠르게\' 하자고 약속한다. 두 배 빠르게·느리게는 1학년에게 어려우니 손뼉으로 충분히 해 본 뒤 블록으로 옮긴다.',
  }));

  lessons.push(L(19, {
    title: '학교 소리를 흉내 내어 짧은 가락 만들기',
    objective: '종소리·호루라기처럼 학교에서 들리는 소리의 높낮이를 흉내 내어 건반으로 치고, 높이를 바꾼 나만의 흉내 가락을 지을 수 있다.',
    illustration: ART('a paper school bell ringing at the top of a building, musical notes stepping down like stairs toward children playing paper keyboards', '딩 동 댕', [
      { motif: 'house', x: 120, y: 214, color: 'sky' }, { motif: 'bird', x: 340, y: 92 }, { motif: 'flower', x: 400, y: 228, color: 'buttercup' }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"쉬는 시간이 끝날 때 울리는 소리는 어떤 소리예요?" 학생들이 \'딩동댕\'처럼 흉내 내게 한다. "소리가 올라가나요, 내려가나요?" 손을 계단처럼 내리며 \'딩(높게) 동 댕(낮게)\'을 함께 노래한다. 시연 단추로 \'솔 미 도\'가 건반에 차례로 눌리는 모습을 보여 주며 높은 소리는 오른쪽 건반이라고 짚는다.',
        student: '손을 계단처럼 내리며 "딩 동 댕"을 노래해 봐요.',
        demo: { tool: 'keyboard', options: { mode: 'melody', from: '도', to: '높은도', melody: ['솔', '미', '도'] }, sequence: [{ notes: ['솔', '미', '도'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 학교 소리 흉내 가락 따라 치기', minutes: 12, tool: 'keyboard',
            teacher: '"가락 듣기를 누르고, 손으로 높낮이를 먼저 그려요. 그리고 건반으로 찾아요." 첫 음을 찾지 못하면 \'솔\' 건반에 손가락을 올려 두고 시작하게 한다. 높아지는 소리를 왼쪽 건반으로 치는 학생에게 "오른쪽으로 갈수록 소리가 어떻게 되었나요?" 하고 건반을 하나씩 눌러 보게 한다.',
            task: '학교 소리를 흉내 낸 가락을 듣고 건반으로 똑같이 쳐요.',
            levels: ECHO_LV,
            items: [
              { prompt: '종소리 "딩 동 댕"을 흉내 낸 가락이에요. 가락 듣기를 누르고 똑같이 쳐 보세요.', toolOptions: { melody: ['솔', '미', '도'] }, target: { notes: ['솔', '미', '도'] }, difficulty: 0.15,
                levels: { easy: { prompt: '종소리 "딩 동"을 흉내 낸 가락이에요. 가락 듣기를 누르고 똑같이 쳐 보세요.', toolOptions: { melody: ['솔', '미'] }, target: { notes: ['솔', '미'] } } } },
              { prompt: '뻐꾸기 시계 소리 "뻐꾹 뻐꾹"을 흉내 낸 가락이에요. 가락 듣기를 누르고 똑같이 쳐 보세요.', toolOptions: { melody: ['솔', '미', '솔', '미'] }, target: { notes: ['솔', '미', '솔', '미'] }, difficulty: 0.15 },
              { prompt: '체육 시간 호루라기 "삐— 삐익"을 흉내 낸 가락이에요. 가락 듣기를 누르고 똑같이 쳐 보세요.', toolOptions: { melody: ['라', '라', '높은도'] }, target: { notes: ['라', '라', '높은도'] }, difficulty: 0.25,
                predict: { q: '호루라기 소리는 종소리보다 높을까요, 낮을까요?', options: ['높아요', '낮아요'], answer: 0 },
                conclude: '날카로운 호루라기 소리는 오른쪽 높은 건반으로 흉내 내요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 높이를 바꾼 흉내 가락 짓기', minutes: 14, tool: 'keyboard',
            teacher: '"종소리를 이번엔 아래에서 위로 올라가게 바꾸어 볼까요? 아기 종, 아빠 종처럼 높이를 바꾸어도 돼요." 규칙(끝 음, 음 수)만 지키면 어떤 가락이든 좋다는 것을 말해 준다. 지은 가락은 목소리로도 불러 보고, 짝에게 들려주어 무슨 소리를 흉내 냈는지 맞혀 보게 한다.',
            task: '학교 소리 흉내 가락을 높이를 바꾸어 다시 짓고, 목소리로도 불러요.',
            levels: ECHO_LV,
            items: [
              { prompt: '"딩 동 댕"을 거꾸로, 아래에서 위로 올라가게 바꾸어 쳐 보세요. 도에서 시작해 솔로 끝나요.', target: { notes: ['도', '미', '솔'] }, difficulty: 0.2,
                levels: { easy: { prompt: '"딩 동 댕"을 거꾸로, 아래에서 위로 올라가게 바꾸어 쳐 보세요. 미에서 시작해 높은도로 끝나요.', target: { notes: ['미', '솔', '높은도'] } } } },
              { prompt: '높은도로 끝나는 세 음 흉내 가락을 내 마음대로 지어 보세요.', target: { compose: { length: 3, endOn: '높은도' } }, difficulty: 0.2 },
              { prompt: '학교 소리 하나를 골라 네 음 넘게 흉내 가락을 짓고, 해낸 것을 표시해요.', target: { selfCheck: ['흉내 낼 학교 소리를 골랐어요', '지은 가락을 목소리로도 불러 보았어요', '짝이 무슨 소리인지 맞혀 보았어요'], minNotes: 4 }, difficulty: 0.15 },
              { prompt: '짝에게 내 흉내 가락을 들려주고 무슨 학교 소리인지 맞혀 보게 해요. 다 하면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"친구의 흉내 가락 가운데 진짜 소리와 가장 닮은 것은 무엇이었나요?" 두세 명이 건반으로 들려준다. 같은 종소리도 높이를 바꾸면 새 가락이 된다는 것을 짚는다. 다음 시간에는 목소리로 따라 하고 세기를 바꾸어 본다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'keyboard', options: { mode: 'melody', from: '도', to: '높은도', names: 'solfa', melody: ['미', '도'] }, prompt: '초인종 "딩 동"을 흉내 낸 가락이에요. 가락 듣기를 누르고 똑같이 쳐 보세요.', target: { notes: ['미', '도'] }, difficulty: 0.15 },
          { type: 'choice', prompt: '건반에서 높은 소리는 어느 쪽에 있나요?', options: ['오른쪽', '왼쪽'], answer: 0, difficulty: 0.1, explain: '건반은 오른쪽으로 갈수록 높은 소리가 나요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '학교 소리 흉내 가락',
      items: [
        { type: 'figure', wide: true, prompt: '"딩 동 댕"을 칠 건반에 1, 2, 3을 쓰세요.', tool: 'keyboard', figures: [{ options: { mode: 'melody', from: '도', to: '높은도', printNames: true }, caption: '' }], answer: '솔 1, 미 2, 도 3' },
        { type: 'choice', prompt: '"딩 동 댕"은 어떻게 움직이나요?', options: ['높은 데서 낮아져요', '낮은 데서 높아져요'], answer: '높은 데서 낮아져요' },
        { type: 'short', prompt: '내가 흉내 낸 학교 소리의 이름을 쓰세요.' },
        { type: 'draw', prompt: '내 흉내 가락이 올라가는지 내려가는지 계단으로 그리세요.' },
      ],
      easy: {
        note: '손으로 높낮이를 먼저 그려요.',
        items: [
          { type: 'choice', prompt: '높은 소리 건반은?', options: ['오른쪽', '왼쪽'], answer: '오른쪽' },
          { type: 'choice', prompt: '호루라기 소리는?', options: ['높아요', '낮아요'], answer: '높아요' },
          { type: 'draw', prompt: '학교 종을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '건반이 여섯 개이고 계이름이 보여요. 따라 칠 가락이 짧아요.',
      base: '한 옥타브 건반에 계이름이 보여요.',
      challenge: '계이름 없이 귀로만 건반을 찾아요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 높은 소리를 왼쪽 건반에서 찾는다 → 건반 끝에서 끝까지 하나씩 눌러 보게 한다. ② 흉내 가락을 지으며 아무 건반이나 많이 누른다 → 흉내 낼 소리를 먼저 목소리로 불러 보게 한다. ③ 높이를 바꾸면 다른 소리라 틀렸다고 여긴다 → 아기 종·아빠 종처럼 같은 소리의 다른 모습이라고 말해 준다. 흉내 가락은 모두 이 차시를 위해 지은 것이다.',
  }));

  lessons.push(L(20, {
    title: '목소리로 따라 하고 세기 바꾸어 들려주기',
    objective: '선생님 목소리를 따라 낸 뒤 같은 말을 세게·여리게 바꾸어 내고, 세게 낸 소리와 여리게 낸 소리가 되풀이되는 차례를 이어 갈 수 있다.',
    illustration: ART('a paper mountain valley where a big loud call becomes a small soft echo, drawn as a large and a small speech bubble', '크게, 작게 메아리', [
      { motif: 'mountain', x: 360, y: 200 }, { motif: 'cloud', x: 300, y: 70, s: 0.6 }, { motif: 'tree', x: 90, y: 214 }]),
    safety: BODY_SAFE,
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"메아리는 멀어질수록 어떻게 들릴까요?" 선생님이 "야호!" 크게, 학생들이 "야호…" 작게 돌려주는 놀이를 두 번 한다. "같은 말인데 무엇이 달라졌나요?" 세기만 바꾸었다는 것을 짚는다. 시연 단추로 \'야호!\'와 \'야호\' 조각이 번갈아 이어지는 모습을 보여 준다. 큰 소리는 친구 귀 가까이에서 내지 않는다.',
        student: '선생님 "야호!"를 듣고 작은 목소리 "야호…"로 돌려줘요.',
        demo: { tool: 'pattern', options: { seq: ['야호!', '야호', '야호!', '야호', null], palette: ['야호!', '야호'] }, sequence: [{ fill: ['야호!'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 큰 말, 작은 메아리 이어 가기', minutes: 12, tool: 'pattern',
            teacher: '"느낌표가 붙은 말은 크게, 붙지 않은 말은 작게 읽어요." 줄을 함께 읽으며 큰 말에서는 손을 크게 펴고 작은 말에서는 손을 오므린다. 빈칸 바로 앞만 보고 고르는 학생에게 맨 앞부터 크게·작게를 손으로 짚으며 읽게 한다. 다 채운 줄은 반 전체가 목소리로 읽는다.',
            task: '크게 낸 말(!)과 작게 낸 메아리가 되풀이되는 줄을 이어 가고, 목소리로 읽어요.',
            levels: { easy: { perRow: 8 }, base: { perRow: 8 }, challenge: { perRow: 9 } },
            items: [
              { prompt: '큰 말 다음에 작은 메아리가 와요. 빈칸을 채워 보세요.', toolOptions: { seq: ['안녕!', '안녕', '안녕!', '안녕', '안녕!', null], palette: ['안녕!', '안녕'] }, target: { fill: ['안녕'] }, difficulty: 0.05 },
              { prompt: '큰 말 한 번에 작은 메아리 두 번이 되풀이돼요. 빈칸을 채워 보세요.', toolOptions: { seq: ['반가워!', '반가워', '반가워', '반가워!', null, '반가워', null], palette: ['반가워!', '반가워'] }, target: { fill: ['반가워', '반가워!'] }, difficulty: 0.2,
                levels: { challenge: { toolOptions: { palette: ['반가워!', '반가워', '안녕!'] } } } },
              { prompt: '크게·작게가 되풀이되는 나만의 메아리 줄을 만들어 보세요.', toolOptions: { mode: 'make', palette: ['학교!', '학교'], length: 6 }, target: { rule: 'repeat', minRepeats: 2, uses: 2 }, difficulty: 0.2,
                levels: { challenge: { prompt: '\'학교!\', \'학교\', \'친구\'를 모두 써서 세 칸 묶음이 되풀이되는 메아리 줄을 만들어 보세요.', toolOptions: { palette: ['학교!', '학교', '친구'], length: 9 }, target: { rule: 'repeat', period: 3, minRepeats: 3, uses: 3 } } } },
              { prompt: '내가 만든 메아리 줄을 짝과 크게·작게 목소리로 읽어 줘요. 다 하면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 같은 리듬을 세기 바꾸어 치기', minutes: 14, tool: 'keyboard',
            teacher: '"리듬을 그대로 따라 놓은 뒤, 첫 박만 세게 치고 나머지는 여리게 쳐 볼까요?" 손뼉 세기를 바꾸어도 블록은 바뀌지 않는다는 것을 다시 확인한다. 세게 치는 박에서 리듬이 빨라지는 학생에게 선생님이 "하나 둘 셋 넷"을 함께 세어 준다. 짝에게 들려주고 몇째 박이 셌는지 맞히게 한다.',
            task: '리듬 듣기를 누르고 그대로 놓은 뒤, 세게 칠 박을 정해 손뼉으로 쳐요.',
            levels: CHANGE_LV,
            items: [
              { prompt: '짝 짝 짝 짝 리듬이에요. 리듬 듣기를 누르고 그대로 놓은 뒤, 첫 박만 세게 쳐 보세요.', toolOptions: { pattern: ['q', 'q', 'q', 'q'] }, target: { rhythm: ['q', 'q', 'q', 'q'] }, difficulty: 0.05 },
              { prompt: '짝짝 짝 짝짝 짝 리듬이에요. 리듬 듣기를 누르고 그대로 블록으로 놓아 보세요.', toolOptions: { pattern: ['e', 'e', 'q', 'e', 'e', 'q'] }, target: { rhythm: ['e', 'e', 'q', 'e', 'e', 'q'] }, difficulty: 0.2 },
              { prompt: '내가 세게 칠 박을 정해 한 마디 리듬을 놓고, 짝에게 들려준 뒤 해낸 것을 표시해요.', target: { beats: true, selfCheck: ['세게 칠 박을 하나 정했어요', '그 박만 세게, 나머지는 여리게 쳤어요', '짝이 몇째 박이 셌는지 맞혀 보았어요'] }, difficulty: 0.15 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"17~20차시에 우리는 따라 내고, 빠르기를 바꾸고, 높이를 바꾸고, 세기를 바꾸었어요. 무엇을 바꿀 때 가장 재미있었나요?" 두세 명의 대답을 듣는다. 다음 시간에는 내가 바꾼 소리에서 무엇이 달라졌는지 말해 본다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'pattern', options: { seq: ['고마워!', '고마워', '고마워!', null], palette: ['고마워!', '고마워'] }, prompt: '큰 말 다음에 작은 메아리가 와요. 빈칸을 채워 보세요.', target: { fill: ['고마워'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '"야호!"를 작게 "야호"로 바꾸었어요. 무엇이 바뀌었나요?', options: ['세기', '빠르기', '말'], answer: 0, difficulty: 0.15, explain: '같은 말을 작게 냈으니 세기가 바뀌었어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '크게, 작게 메아리',
      items: [
        { type: 'figure', wide: true, prompt: '빈칸에 들어갈 말을 쓰세요.', tool: 'pattern', figures: [{ options: { seq: ['안녕!', '안녕', '안녕!', null] }, caption: '빈칸: ______' }], answer: '안녕' },
        { type: 'table', prompt: '하나 둘 셋 넷 가운데 세게 칠 박에 ○, 여리게 칠 박에 △ 하세요.', columns: ['하나', '둘', '셋', '넷'], cells: [['', '', '', '']] },
        { type: 'choice', prompt: '세기를 바꾸면 리듬 블록은 어떻게 되나요?', options: ['그대로예요', '바뀌어요'], answer: '그대로예요' },
        { type: 'short', prompt: '내가 크게·작게 바꾸어 말해 본 낱말을 쓰세요.' },
      ],
      easy: {
        note: '느낌표(!)가 붙으면 크게!',
        items: [
          { type: 'choice', prompt: '크게 읽을 말에 ○ 하세요.', options: ['안녕!', '안녕'], answer: '안녕!' },
          { type: 'choice', prompt: '메아리는 어떻게 돌려줄까요?', options: ['작게', '더 크게'], answer: '작게' },
          { type: 'draw', prompt: '메아리 놀이 하는 모습을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '빈칸이 하나인 줄부터 해요. 리듬은 한 마디에 박 수가 보여요.',
      base: '빈칸 두 개를 채우고, 세게 칠 박을 정해 쳐요.',
      challenge: '함정 조각이 섞인 줄을 채우고, 세 칸 묶음 메아리 줄을 만들어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 크게 말할 때 소리를 지른다 → \'씩씩한 목소리\'까지만 크게 내자고 정한다. ② 여리게 말하면 속삭임이 되어 안 들린다 → 짝이 들을 수 있는 만큼으로 정한다. ③ 세게 치는 박에서 리듬이 빨라진다 → 박 세기를 선생님이 함께 소리 내어 한다. 큰 소리 놀이는 옆 반 수업 시간을 피해 한다.',
  }));

  // ───────────────────────── 21~24차시: 바꾼 소리 돌아보고 친구 소리 따라 하기 ─────────────────────────

  lessons.push(L(21, {
    title: '바꾼 소리에서 무엇이 달라졌는지 말하기',
    objective: '처음 소리와 바꾼 소리를 견주어 빠르기·세기·높이 가운데 무엇이 달라졌는지 말하고, 바꾼 소리도 새로운 표현이라는 것을 안다.',
    illustration: ART('two paper speech bubbles side by side, a small slow sound on the left and a big quick sound on the right, a child pointing at the difference with a magnifier', '무엇이 달라졌을까?', [
      { motif: 'star', x: 120, y: 88, s: 0.6 }, { motif: 'flower', x: 360, y: 228, color: 'lavender' }, { motif: 'tree', x: 410, y: 214 }]),
    safety: BODY_SAFE,
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '선생님이 \'짝 짝 짝 짝\'을 친 뒤 \'짝짝짝짝짝짝짝짝\'을 친다. "두 소리에서 무엇이 달라졌나요?" \'빨라졌어요\'를 이끌어 낸다. 이번에는 \'야호!\'를 \'야호…\'로 바꾸어 들려주고 같은 물음을 한다. "빠르기, 세기, 높이 가운데 무엇이 바뀌었는지 찾는 사람을 소리 탐정이라고 불러요." 시연 단추로 카드가 \'빠르기가 바뀌었어요\' 가지에 들어가는 모습을 보여 준다.',
        student: '선생님 소리 두 개를 듣고, 무엇이 달라졌는지 손 신호로 알려 줘요(빠르기 ✋, 세기 👊 대신 주먹, 높이 ☝ 대신 검지).',
        demo: { tool: 'mindmap', options: { topic: '무엇이 바뀌었나?', slots: ['빠르기가 바뀌었어요', '세기가 바뀌었어요'], cards: ['짝 짝 → 짝짝짝짝', '야호! → 야호…'], shuffle: false }, sequence: [{ sort: { '빠르기가 바뀌었어요': ['짝 짝 → 짝짝짝짝'], '세기가 바뀌었어요': ['야호! → 야호…'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 소리 탐정: 바뀐 것 찾기', minutes: 13, tool: 'mindmap',
            teacher: '카드의 두 소리를 선생님이 실제로 내어 들려준다. "화살표 앞이 처음 소리, 뒤가 바꾼 소리예요. 같은 것은 무엇이고 다른 것은 무엇인가요?" 같은 것부터 말하게 하면 다른 것이 잘 보인다. 바뀐 것을 \'좋아졌어요\'로 말하는 학생에게 "무엇이 좋아졌나요? 빨라졌나요, 커졌나요?" 하고 되묻는다.',
            task: '처음 소리와 바꾼 소리를 견주어, 무엇이 바뀌었는지에 따라 카드를 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '무엇이 바뀌었는지에 따라 카드를 나누어 보세요.', toolOptions: { topic: '무엇이 바뀌었나?', slots: ['빠르기가 바뀌었어요', '세기가 바뀌었어요'], cards: ['쿵 쿵 → 쿵쿵쿵쿵', '안녕! → 안녕…', '똑… 똑… → 똑똑똑똑', '쾅! 쾅! → 톡 톡'] },
                target: { sort: { '빠르기가 바뀌었어요': ['쿵 쿵 → 쿵쿵쿵쿵', '똑… 똑… → 똑똑똑똑'], '세기가 바뀌었어요': ['안녕! → 안녕…', '쾅! 쾅! → 톡 톡'] } }, difficulty: 0.15 },
              { prompt: '빠르기, 세기, 높이 가운데 무엇이 바뀌었는지 나누어 보세요.', toolOptions: { topic: '무엇이 바뀌었나?', slots: ['빠르기', '세기', '높이'], cards: ['짝— 짝— → 짝 짝 짝 짝', '솔 미 → 높은도 라', '반가워! → 반가워…', '딩 동(낮게) → 딩 동(높게)', '야호… → 야호!', '둥… 둥… → 둥둥둥둥'] },
                target: { sort: { '빠르기': ['짝— 짝— → 짝 짝 짝 짝', '둥… 둥… → 둥둥둥둥'], '세기': ['반가워! → 반가워…', '야호… → 야호!'], '높이': ['솔 미 → 높은도 라', '딩 동(낮게) → 딩 동(높게)'] } }, difficulty: 0.3,
                levels: { easy: { prompt: '빠르기와 높이 가운데 무엇이 바뀌었는지 나누어 보세요.', toolOptions: { slots: ['빠르기', '높이'], cards: ['짝— 짝— → 짝 짝 짝 짝', '솔 미 → 높은도 라', '딩 동(낮게) → 딩 동(높게)', '둥… 둥… → 둥둥둥둥'] }, target: { sort: { '빠르기': ['짝— 짝— → 짝 짝 짝 짝', '둥… 둥… → 둥둥둥둥'], '높이': ['솔 미 → 높은도 라', '딩 동(낮게) → 딩 동(높게)'] } } } },
                hints: ['화살표 앞뒤에서 같은 것과 다른 것을 먼저 찾아요.', '느낌표(!)가 생기거나 없어지면 세기, 소리 사이 틈이 달라지면 빠르기, 계이름이나 \'높게·낮게\'가 달라지면 높이예요.', '\'짝\'과 \'둥\' 카드는 빠르기, \'반가워\'와 \'야호\' 카드는 세기, \'솔 미\'와 \'딩 동\' 카드는 높이예요.'] },
              { prompt: '세기는 그대로이고 빠르기만 바뀐 카드를 골라 보세요.', toolOptions: { mode: 'pick', basket: '빠르기만 바뀌었어요', cards: ['톡 톡 → 톡톡톡톡', '쾅! → 톡', '쿵… 쿵… → 쿵쿵쿵쿵', '솔 → 높은도'] },
                target: { pick: ['톡 톡 → 톡톡톡톡', '쿵… 쿵… → 쿵쿵쿵쿵'] }, difficulty: 0.2 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 내가 바꾼 것 말하기', minutes: 13, tool: 'story',
            teacher: '"내가 바꾼 소리를 짝에게 들려주고 \'나는 ○○를 바꾸었어. 그래서 ○○ 들려\'라고 말해요." 말틀을 칠판에 붙인다. "바꾼 소리는 틀린 소리예요"라고 말하는 학생에게 "선생님 소리에서 새로운 소리가 하나 더 생긴 거예요"라고 말해 준다.',
            task: '바꾼 소리 이야기의 빈칸을 채우고, 내가 바꾼 것을 짝에게 말해요.',
            levels: CARD_LV,
            items: [
              { prompt: '"짝 짝 짝 짝 → 짝짝짝짝짝짝짝짝" 이야기예요. 빈칸을 채워 보세요.', toolOptions: { mode: 'fill', slots: [{ id: 'f1', who: '민지', motif: 'star', label: '나는 ___를 바꾸었어.' }, { id: 'f2', who: '민지', motif: 'star', label: '처음 소리보다 ___졌어.' }], cards: ['빠르기', '세기', '빨라', '느려'] },
                target: { fill: { f1: '빠르기', f2: '빨라' } }, difficulty: 0.15 },
              { prompt: '"안녕! → 안녕…" 이야기예요. 빈칸을 채워 보세요.', toolOptions: { mode: 'fill', slots: [{ id: 'f1', who: '준호', motif: 'star', label: '나는 ___를 바꾸었어.' }, { id: 'f2', who: '준호', motif: 'star', label: '처음 소리보다 ___졌어.' }], cards: ['빠르기', '세기', '작아', '빨라'] },
                target: { fill: { f1: '세기', f2: '작아' } }, difficulty: 0.15 },
              { prompt: '바꾸어 내기 놀이를 하는 차례대로 놓아 보세요.', toolOptions: { slots: ['1', '2', '3', '4'], cards: [{ id: 'copy', text: '처음 소리를 그대로 따라 내요', motif: 'cloud' }, { id: 'pick', text: '바꿀 것을 하나 골라요', motif: 'star' }, { id: 'play', text: '바꾼 소리를 짝에게 들려줘요', motif: 'bird' }, { id: 'tell', text: '무엇이 달라졌는지 말해요', motif: 'sun' }] },
                target: { order: ['copy', 'pick', 'play', 'tell'] }, difficulty: 0.15 },
              { prompt: '짝에게 내가 바꾼 소리를 들려주고 "나는 ○○를 바꾸었어"라고 말해요. 바꾸어 해요. 다 하면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"짝이 바꾼 소리를 듣고 무엇이 달라졌는지 바로 알았나요?" 두세 쌍이 앞에 나와 들려주고 반 전체가 손 신호로 맞힌다. 바꾼 소리도 우리가 만든 새 소리라는 것을 다시 짚는다. 다음 시간에는 친구가 만든 소리를 그대로 따라 해 본다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '무엇이 바뀌었나?', slots: ['빠르기', '세기'], cards: ['딸랑… 딸랑… → 딸랑딸랑딸랑', '와! → 와…'] }, prompt: '무엇이 바뀌었는지에 따라 카드를 나누어 보세요.', target: { sort: { '빠르기': ['딸랑… 딸랑… → 딸랑딸랑딸랑'], '세기': ['와! → 와…'] } }, difficulty: 0.15 },
          { type: 'choice', prompt: '선생님 소리를 느리게 바꾸어 냈어요. 이 소리는?', options: ['틀린 소리예요', '바꾸어 만든 새 소리예요'], answer: 1, difficulty: 0.1, explain: '바꾼 소리도 내가 만든 새로운 표현이에요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '소리 탐정',
      items: [
        { type: 'table', prompt: '무엇이 바뀌었는지 알맞은 칸에 ○ 하세요.', columns: ['처음 → 바꾼 소리', '빠르기', '세기', '높이'], cells: [['짝 짝 → 짝짝짝짝', '', '', ''], ['야호! → 야호…', '', '', ''], ['솔 미 → 높은도 라', '', '', '']] },
        { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '쾅! 쾅! → 톡 톡 : 나는 ___를 바꾸었어요.', answer: '세기' },
        { type: 'choice', prompt: '바꾼 소리는 어떤 소리일까요?', options: ['새로 만든 소리', '틀린 소리'], answer: '새로 만든 소리' },
        { type: 'short', prompt: '내가 바꾼 소리와 무엇을 바꾸었는지 쓰세요.' },
      ],
      easy: {
        note: '같은 것을 먼저 찾으면 다른 것이 보여요.',
        items: [
          { type: 'choice', prompt: '"짝 짝 → 짝짝짝짝"은 무엇이 바뀌었나요?', options: ['빠르기', '세기'], answer: '빠르기' },
          { type: 'choice', prompt: '"안녕! → 안녕…"은 무엇이 바뀌었나요?', options: ['세기', '빠르기'], answer: '세기' },
          { type: 'draw', prompt: '소리 탐정이 된 내 모습을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '두 가지로만 나누고, 맞으면 초록 테두리가 생겨요.',
      base: '빠르기·세기·높이 세 가지로 나누어요.',
      challenge: '세 가지로 나눈 뒤 짝의 소리를 듣고 바뀐 것을 두 가지까지 찾아요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 바꾼 소리는 틀린 소리라고 여긴다 → 처음 소리에서 새로운 소리가 하나 더 생겼다고 말해 준다. ② 바뀐 것을 \'좋아졌어요\'처럼 느낌으로만 말한다 → 빠르기·세기·높이 낱말 카드를 칠판에 붙여 고르게 한다. ③ 높이와 세기를 헷갈린다 → 높은 소리를 여리게, 낮은 소리를 세게 들려주어 견준다. 카드의 두 소리는 꼭 선생님이 실제로 내어 들려준다.',
  }));

  lessons.push(L(22, {
    title: '친구가 만든 리듬과 가락 그대로 따라 하기',
    objective: '친구가 만든 짧은 리듬과 가락을 끝까지 듣고 그대로 따라 쳐서 블록과 건반으로 나타낼 수 있다.',
    illustration: ART('children sitting in a paper circle, one child clapping a rhythm while the others listen with hands on knees, ready to echo', '친구 소리를 따라 해요', [
      { motif: 'flower', x: 110, y: 228, color: 'rose' }, { motif: 'flower', x: 380, y: 228, color: 'sky' }, { motif: 'sun', x: 240, y: 70, s: 0.6 }]),
    safety: BODY_SAFE,
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"오늘은 선생님 대신 친구가 소리를 만들어요. 친구 소리를 따라 할 때 무엇을 지킬까요?" 끝까지 듣기, 똑같이 돌려주기, 웃지 않기를 함께 말한다. 원으로 앉아 한 사람씩 4박 손뼉을 내고 모두 따라 하는 놀이를 한 바퀴 짧게 해 본다. 시연 단추로 \'민지 리듬\'이 블록으로 놓이는 모습을 보여 준다.',
        student: '원으로 앉아 친구가 낸 4박 손뼉을 모두 함께 따라 쳐요.',
        demo: { tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 1, blocks: ['q', 'e', 'qr'], pattern: ['q', 'qr', 'e', 'e', 'q'] }, sequence: [{ rhythm: ['q', 'qr', 'e', 'e', 'q'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 친구 리듬 따라 놓기', minutes: 13, tool: 'keyboard',
            teacher: '"민지가 만든 리듬이에요. 쉬는 곳도 똑같이 쉬어요." 쉼표에서 손뼉을 치는 학생에게 쉼표에서는 손을 벌린 채 멈추는 몸짓을 보여 준다. 다 놓은 뒤 짝과 함께 쳐 보고, 서로 블록이 같은지 견주게 한다.',
            task: '친구가 만든 리듬을 리듬 듣기로 듣고, 쉬는 곳까지 그대로 블록으로 놓아요.',
            levels: RHY_LV,
            items: [
              { prompt: '민지 리듬: 짝 (쉬고) 짝짝 짝. 리듬 듣기를 누르고 그대로 놓아 보세요.', toolOptions: { measures: 1, pattern: ['q', 'qr', 'e', 'e', 'q'] }, target: { rhythm: ['q', 'qr', 'e', 'e', 'q'] }, difficulty: 0.2,
                levels: { easy: { prompt: '민지 리듬: 짝 (쉬고) 짝 짝. 리듬 듣기를 누르고 그대로 놓아 보세요.', toolOptions: { pattern: ['q', 'qr', 'q', 'q'] }, target: { rhythm: ['q', 'qr', 'q', 'q'] } } } },
              { prompt: '준호 리듬: 짝짝짝짝 짝 (쉬고). 리듬 듣기를 누르고 그대로 놓아 보세요.', toolOptions: { measures: 1, pattern: ['e', 'e', 'e', 'e', 'q', 'qr'] }, target: { rhythm: ['e', 'e', 'e', 'e', 'q', 'qr'] }, difficulty: 0.2,
                levels: { easy: { prompt: '준호 리듬: 짝— 짝 (쉬고). 리듬 듣기를 누르고 그대로 놓아 보세요.', toolOptions: { pattern: ['h', 'q', 'qr'] }, target: { rhythm: ['h', 'q', 'qr'] } } } },
              { prompt: '서아의 두 마디 리듬이에요. 리듬 듣기를 누르고 그대로 놓아 보세요.', toolOptions: { pattern: ['h', 'e', 'e', 'q', 'q', 'q', 'h'] }, target: { rhythm: ['h', 'e', 'e', 'q', 'q', 'q', 'h'] }, difficulty: 0.3,
                levels: { easy: { prompt: '서아 리듬: 짝 짝 짝—. 리듬 듣기를 누르고 그대로 놓아 보세요.', toolOptions: { pattern: ['q', 'q', 'h'] }, target: { rhythm: ['q', 'q', 'h'] } } },
                conclude: '친구 리듬을 똑같이 따라 하려면 쉬는 곳까지 잘 들어야 해요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 친구 가락 따라 치고 노래하기', minutes: 14, tool: 'keyboard',
            teacher: '"하준이가 지은 가락이에요. 손으로 높낮이를 먼저 그리고 건반을 쳐요." 다 친 뒤 계이름으로 노래해 보게 한다. 끝으로 원으로 앉아 한 사람씩 4박 소리(손뼉·목소리 무엇이든)를 내고, 모두 따라 하는 놀이를 한 바퀴 한다. 친구 소리를 따라 할 때 웃거나 놀리지 않는다는 약속을 지키게 한다.',
            task: '친구가 지은 가락을 가락 듣기로 듣고 건반으로 똑같이 친 뒤, 원으로 앉아 친구 소리를 따라 해요.',
            levels: ECHO_LV,
            items: [
              { prompt: '하준 가락이에요. 가락 듣기를 누르고 똑같이 쳐 보세요.', toolOptions: { melody: ['미', '미', '솔'] }, target: { notes: ['미', '미', '솔'] }, difficulty: 0.15 },
              { prompt: '서아 가락이에요. 가락 듣기를 누르고 똑같이 쳐 보세요.', toolOptions: { melody: ['솔', '미', '미', '높은도'] }, target: { notes: ['솔', '미', '미', '높은도'] }, difficulty: 0.25,
                levels: { base: { prompt: '서아 가락이에요. 가락 듣기를 누르고 똑같이 쳐 보세요. 낮은 도도 나와요.', toolOptions: { melody: ['솔', '미', '미', '도'] }, target: { notes: ['솔', '미', '미', '도'] } }, challenge: { prompt: '서아 가락이에요. 가락 듣기를 누르고 똑같이 쳐 보세요. 낮은 도도 나와요.', toolOptions: { melody: ['솔', '미', '미', '도'] }, target: { notes: ['솔', '미', '미', '도'] } } } },
              { prompt: '민지 가락이에요. 가락 듣기를 누르고 똑같이 쳐 보세요.', toolOptions: { melody: ['미', '파', '솔', '미'] }, target: { notes: ['미', '파', '솔', '미'] }, difficulty: 0.25 },
              { prompt: '원으로 앉아 한 사람씩 4박 소리를 내고, 모두 똑같이 따라 해요. 한 바퀴 돌면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"친구 소리를 따라 하기 어려웠던 때는 언제였나요? 어떻게 하면 더 잘 따라 할 수 있을까요?" \'끝까지 듣기\', \'손으로 먼저 쳐 보기\'를 이끌어 낸다. 다음 시간에는 처음 해 본 소리를 다시 해 보며 나아진 점을 찾는다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 1, blocks: ['q', 'e', 'h', 'qr'], pattern: ['e', 'e', 'qr', 'h'] }, prompt: '하준 리듬: 짝짝 (쉬고) 짝—. 리듬 듣기를 누르고 그대로 놓아 보세요.', target: { rhythm: ['e', 'e', 'qr', 'h'] }, difficulty: 0.2 },
          { type: 'choice', prompt: '친구가 만든 소리를 따라 할 때 지킬 일은?', options: ['끝까지 듣고 똑같이 해요', '내 마음대로 바꿔요', '웃으며 놀려요'], answer: 0, difficulty: 0.1, explain: '따라 하기는 친구 소리를 끝까지 듣고 똑같이 돌려주는 거예요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '친구 소리 따라 하기',
      items: [
        { type: 'figure', wide: true, prompt: '짝이 만든 리듬을 듣고 블록 칸에 그리세요.', tool: 'keyboard', figures: [{ options: { mode: 'rhythm', meter: 4, measures: 1, blocks: ['q', 'e', 'h', 'qr'] }, caption: '' }], answer: '짝이 만든 리듬' },
        { type: 'check', prompt: '친구 소리를 따라 할 때 지킨 것에 ✓ 하세요.', options: ['끝까지 들었어요', '쉬는 곳에서 쉬었어요', '웃거나 놀리지 않았어요'] },
        { type: 'table', prompt: '따라 해 본 친구 소리를 쓰세요.', columns: ['누구의 소리', '손뼉 / 목소리 / 건반', '따라 하기 쉬웠나요'], rows: 2 },
        { type: 'short', prompt: '친구 소리를 잘 따라 하는 나만의 방법을 쓰세요.' },
      ],
      easy: {
        note: '쉬는 곳에서는 손을 벌리고 멈춰요.',
        items: [
          { type: 'choice', prompt: '쉼표에서는?', options: ['멈춰요', '손뼉 쳐요'], answer: '멈춰요' },
          { type: 'choice', prompt: '따라 하기 전에 할 일은?', options: ['끝까지 들어요', '먼저 쳐요'], answer: '끝까지 들어요' },
          { type: 'draw', prompt: '원으로 앉아 따라 하기 놀이를 하는 모습을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '모든 리듬이 한 마디이고 박 수가 보여요. 건반이 여섯 개예요.',
      base: '두 마디 리듬과 한 옥타브 건반 가락을 따라 해요.',
      challenge: '8분쉼표 블록이 섞여 있고, 계이름 없이 귀로 가락을 찾아요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 쉼표에서 손뼉을 친다 → 쉼표 몸짓(손 벌리고 멈춤)을 정한다. ② 친구 소리를 따라 하다 웃음이 터진다 → 따라 하기는 친구 소리를 아껴 주는 일이라고 말해 준다. ③ 자기 차례에 소리를 못 낸다 → 손뼉 네 번처럼 쉬운 소리도 좋다고 알려 준다. 원 놀이는 한 바퀴만 하고, 소리를 못 낸 학생은 다음 시간에 먼저 하게 한다.',
  }));

  lessons.push(L(23, {
    title: '틀린 곳 고쳐 다시 쳐 보고 나아진 점 찾기',
    objective: '따라 친 리듬에서 처음 소리와 다른 곳을 찾아 고치고, 다시 해 볼 때 도움이 되는 방법을 고를 수 있다.',
    illustration: ART('a paper rhythm strip with one block lifted out and being replaced by a child, an eraser and a small star of improvement nearby', '다시 해 봐요', [
      { motif: 'star', x: 330, y: 84, s: 0.7 }, { motif: 'tree', x: 90, y: 214 }, { motif: 'flower', x: 400, y: 228, color: 'buttercup' }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"선생님이 지난번에 따라 친 리듬이에요. 선생님 리듬과 같은지 들어 보세요." 일부러 한 곳을 틀리게 쳐 들려준다. "어디가 달랐나요? 다시 하면 어떻게 칠까요?" 틀린 곳을 찾으면 다시 할 때 더 잘할 수 있다는 것을 짚는다. 시연 단추로 고친 리듬이 놓이는 모습을 보여 준다.',
        student: '선생님 리듬 두 개를 듣고, 다른 곳이 몇째 박인지 손가락으로 알려 줘요.',
        demo: { tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 1, blocks: ['q', 'h', 'qr'] }, sequence: [{ rhythm: ['q', 'q', 'h'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 따라 친 리듬 고치기', minutes: 13, tool: 'keyboard',
            teacher: '"리듬 듣기로 처음 소리를 듣고, 판에 놓인 리듬과 한 박씩 견주어요." 다른 곳을 찾으면 그 블록을 눌러 빼고 바른 블록을 넣게 한다. 처음부터 모두 지우고 다시 놓는 학생에게 "맞은 곳은 그대로 두고 다른 곳만 고쳐 볼까요?"라고 말한다.',
            task: '친구가 따라 친 리듬이 판에 놓여 있어요. 리듬 듣기와 견주어 다른 곳만 고쳐요.',
            levels: CHANGE_LV,
            items: [
              { prompt: '처음 소리는 짝 짝 짝 짝이에요. 준호가 따라 친 리듬에서 다른 곳을 고쳐 보세요.', toolOptions: { pattern: ['q', 'q', 'q', 'q'] }, state: { rhythm: ['q', 'q', 'h'] }, target: { rhythm: ['q', 'q', 'q', 'q'] }, difficulty: 0.15 },
              { prompt: '처음 소리는 짝짝 짝 짝—이에요. 서아가 따라 친 리듬에서 다른 곳을 고쳐 보세요.', toolOptions: { pattern: ['e', 'e', 'q', 'h'] }, state: { rhythm: ['q', 'q', 'h'] }, target: { rhythm: ['e', 'e', 'q', 'h'] }, difficulty: 0.25,
                hints: ['처음 소리와 판의 리듬을 첫 박부터 한 박씩 견주어요.', '첫 박이 달라요. 처음 소리에서는 첫 박에 손뼉이 두 번 났어요.', '첫 한 박 블록을 빼고 반 박 블록 두 개를 넣어요.'] },
              { prompt: '처음 소리는 짝 (쉬고) 짝 짝이에요. 하준이가 따라 친 리듬에서 다른 곳을 고쳐 보세요.', toolOptions: { pattern: ['q', 'qr', 'q', 'q'] }, state: { rhythm: ['q', 'q', 'q', 'q'] }, target: { rhythm: ['q', 'qr', 'q', 'q'] }, difficulty: 0.2,
                levels: { easy: { prompt: '처음 소리는 짝— 짝 짝이에요. 하준이가 따라 친 리듬에서 다른 곳을 고쳐 보세요.', toolOptions: { pattern: ['h', 'q', 'q'] }, state: { rhythm: ['q', 'q', 'q', 'q'] }, target: { rhythm: ['h', 'q', 'q'] } } },
                conclude: '맞은 곳은 그대로 두고 다른 곳만 고치면 금방 다시 칠 수 있어요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 다시 할 때 도움이 되는 방법', minutes: 13, tool: 'mindmap',
            teacher: '"다시 할 때 무엇을 하면 더 잘될까요?" 학생들의 방법을 서너 개 듣고 칠판에 적는다. 고른 방법으로 22차시에 따라 하기 어려웠던 리듬을 짝과 다시 쳐 보게 한다. "한 번 틀리면 그만해요"를 고른 학생에게 "고친 리듬을 다시 쳐 보니 어땠나요?"라고 묻는다.',
            task: '다시 해 볼 때 도움이 되는 방법을 골라, 그 방법으로 짝과 다시 쳐 봐요.',
            levels: CARD_LV,
            items: [
              { prompt: '다시 할 때 도움이 되는 방법만 골라 보세요.', toolOptions: { mode: 'pick', basket: '도움이 되는 방법', cards: ['처음 소리를 끝까지 다시 들어요', '대충 빨리 쳐요', '손뼉으로 먼저 쳐 봐요', '한 번 틀리면 그만해요'] },
                target: { pick: ['처음 소리를 끝까지 다시 들어요', '손뼉으로 먼저 쳐 봐요'] }, difficulty: 0.1 },
              { prompt: '다시 할 때의 마음과 행동을 이어 보세요.', toolOptions: { mode: 'match', topic: '다시 해 봐요', slots: [{ id: 's1', label: '틀린 곳을 찾았을 때' }, { id: 's2', label: '고쳐서 다시 맞았을 때' }], cards: ['그 곳만 다시 들어요', '뿌듯해서 한 번 더 쳐요'] },
                target: { match: { s1: '그 곳만 다시 들어요', s2: '뿌듯해서 한 번 더 쳐요' } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['그 곳만 다시 들어요', '뿌듯해서 한 번 더 쳐요', '처음부터 모두 지워요'] } } } },
              { prompt: '고른 방법으로 22차시에 어려웠던 리듬을 짝과 다시 쳐 봐요. 다 하면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"처음 할 때와 다시 할 때, 무엇이 나아졌나요?" 두세 명이 말하게 한다. 틀린 곳을 찾는 것도 잘한 일이라는 것을 칭찬한다. 다음 시간에는 메아리 놀이를 모둠으로 해 본다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 1, blocks: ['q', 'e', 'h'], pattern: ['h', 'e', 'e', 'q'] }, state: { rhythm: ['h', 'q', 'q'] }, prompt: '처음 소리는 짝— 짝짝 짝이에요. 판에 놓인 리듬에서 다른 곳을 고쳐 보세요.', target: { rhythm: ['h', 'e', 'e', 'q'] }, difficulty: 0.2 },
          { type: 'choice', prompt: '따라 친 리듬이 틀렸어요. 어떻게 할까요?', options: ['다른 곳만 찾아 고쳐요', '그만해요', '모두 지우고 아무거나 놓아요'], answer: 0, difficulty: 0.1, explain: '다른 곳만 고치면 금방 다시 칠 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '고쳐서 다시 하기',
      items: [
        { type: 'table', prompt: '처음 소리와 따라 친 소리를 견주어 다른 박에 ○ 하세요.', columns: ['', '하나', '둘', '셋', '넷'], cells: [['처음 소리', '짝', '짝', '짝', '짝'], ['따라 친 소리', '짝', '짝', '짝—', '(이어서)'], ['다른 박', '', '', '', '']] },
        { type: 'check', prompt: '다시 할 때 내가 쓴 방법에 ✓ 하세요.', options: ['끝까지 다시 들었어요', '손뼉으로 먼저 쳤어요', '다른 곳만 고쳤어요'] },
        { type: 'short', prompt: '다시 해 보니 나아진 점을 쓰세요.' },
        { type: 'draw', prompt: '다시 해서 성공한 내 모습을 그리세요.' },
      ],
      easy: {
        note: '첫 박부터 하나씩 견주어요.',
        items: [
          { type: 'choice', prompt: '틀린 곳을 찾으면?', options: ['그 곳만 고쳐요', '그만해요'], answer: '그 곳만 고쳐요' },
          { type: 'choice', prompt: '다시 할 때 도움이 되는 것은?', options: ['끝까지 들어요', '빨리 쳐요'], answer: '끝까지 들어요' },
          { type: 'draw', prompt: '다시 해 보는 내 모습을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '박 수가 보이고, 고칠 곳이 한 군데예요.',
      base: '박 수 표시 없이 듣고 견주어 고쳐요.',
      challenge: '함정 블록이 섞여 있고, 고친 뒤 짝의 리듬도 고쳐 줘요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 틀린 것을 부끄러워해 그만두려 한다 → 틀린 곳을 찾은 것 자체를 칭찬한다. ② 처음부터 모두 지운다 → 맞은 블록은 그대로 두고 다른 곳만 빼게 한다. ③ 어디가 다른지 못 찾는다 → 한 박씩 손가락으로 짚으며 처음 소리와 함께 소리 내어 센다. 고쳐 쓰기 활동지의 \'따라 친 소리\' 줄은 교사가 학생 실수에 맞게 바꾸어 써도 된다.',
  }));

  lessons.push(L(24, {
    title: '모둠 메아리 놀이로 따라 하고 바꾸어 보기',
    objective: '모둠 메아리 놀이의 차례를 알고, 술래가 되어 4박 소리를 내고 바꾸며, 친구들은 따라 하고 바뀐 것을 말할 수 있다.',
    illustration: ART('a small group of paper children in a circle passing a paper crown to the next leader, sound waves going around the circle', '모둠 메아리 놀이', [
      { motif: 'star', x: 240, y: 70, s: 0.6 }, { motif: 'flower', x: 110, y: 228, color: 'buttercup' }, { motif: 'flower', x: 380, y: 228, color: 'mint' }]),
    safety: BODY_SAFE,
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"오늘은 13~23차시에 한 것을 모두 모아 모둠 메아리 놀이를 해요. 술래는 종이 왕관을 써요." 놀이 차례(술래가 소리 내기 → 모두 따라 하기 → 술래가 바꾸기 → 바뀐 것 맞히기 → 왕관 넘기기)를 몸으로 한 번 보여 준다. 시연 단추로 놀이 차례 카드가 놓이는 모습을 보여 준다.',
        student: '놀이 차례를 들으며 손가락으로 하나씩 세어 봐요.',
        demo: { tool: 'story', options: { slots: ['1', '2', '3'], cards: [{ id: 'lead', text: '술래가 4박 소리를 내요', motif: 'star' }, { id: 'echo', text: '모두 똑같이 따라 해요', motif: 'bird' }, { id: 'pass', text: '왕관을 다음 친구에게', motif: 'sun' }], shuffle: false }, sequence: [{ order: ['lead', 'echo', 'pass'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 메아리 놀이 차례 세우기', minutes: 9, tool: 'story',
            teacher: '"술래가 바꾸기 전에 무엇을 먼저 해야 친구들이 바뀐 것을 알 수 있을까요?" 그대로 따라 하기가 바꾸기보다 먼저라는 것을 짚는다. 차례를 다 세운 뒤 칠판의 차례판과 견주게 한다.',
            task: '모둠 메아리 놀이 차례대로 카드를 놓아요.',
            levels: CARD_LV,
            items: [
              { prompt: '메아리 놀이 차례대로 놓아 보세요.', toolOptions: { slots: ['1', '2', '3', '4'], cards: [{ id: 'lead', text: '술래가 4박 소리를 내요', motif: 'star' }, { id: 'echo', text: '모두 똑같이 따라 해요', motif: 'bird' }, { id: 'change', text: '술래가 하나를 바꾸어 내요', motif: 'cloud' }, { id: 'guess', text: '무엇이 바뀌었는지 맞혀요', motif: 'sun' }] },
                target: { order: ['lead', 'echo', 'change', 'guess'] }, difficulty: 0.15,
                levels: { easy: { prompt: '메아리 놀이 차례대로 놓아 보세요. 카드가 세 장이에요.', toolOptions: { slots: ['1', '2', '3'], cards: [{ id: 'lead', text: '술래가 4박 소리를 내요', motif: 'star' }, { id: 'echo', text: '모두 똑같이 따라 해요', motif: 'bird' }, { id: 'guess', text: '무엇이 바뀌었는지 맞혀요', motif: 'sun' }] }, target: { order: ['lead', 'echo', 'guess'] } } } },
              { prompt: '놀이를 마칠 때의 차례대로 놓아 보세요.', toolOptions: { slots: ['1', '2', '3'], cards: [{ id: 'guess', text: '바뀐 것을 맞혀요', motif: 'sun' }, { id: 'clap', text: '술래에게 박수를 쳐 줘요', motif: 'flower' }, { id: 'pass', text: '왕관을 다음 친구에게 줘요', motif: 'star' }] },
                target: { order: ['guess', 'clap', 'pass'] }, difficulty: 0.15 },
              { prompt: '메아리 놀이에서 지킬 약속만 골라 보세요.', toolOptions: { mode: 'pick', basket: '놀이 약속', cards: ['술래 소리를 끝까지 들어요', '틀린 친구를 놀려요', '바꿀 것은 하나만 골라요', '술래 차례를 빼앗아요'] },
                target: { pick: ['술래 소리를 끝까지 들어요', '바꿀 것은 하나만 골라요'] }, difficulty: 0.1 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 술래 소리 짓고 모둠 놀이하기', minutes: 18, tool: 'keyboard',
            teacher: '"술래가 될 때 낼 4박 소리를 먼저 블록으로 지어 둬요. 그리고 바꿀 것도 하나 정해요." 블록으로 지은 뒤 모둠(4명)으로 놀이를 두 바퀴 한다(한 사람에 2분 남짓). 바꿀 것을 두 가지 넘게 바꾸는 술래에게 "친구들이 맞힐 수 있게 하나만 바꾸어요"라고 말한다.',
            task: '술래 소리(4박)를 블록으로 짓고, 모둠 메아리 놀이를 두 바퀴 해요.',
            levels: RHY_LV,
            items: [
              { prompt: '술래가 될 때 낼 한 마디(4박) 소리를 블록으로 지어 보세요.', toolOptions: { measures: 1 }, target: { beats: true }, difficulty: 0.15 },
              { prompt: '쉼표를 한 번 넣어 술래 소리를 한 마디(4박)로 지어 보세요.', toolOptions: { measures: 1 }, target: { beats: true, rests: 1 }, difficulty: 0.25,
                levels: { easy: { prompt: '2박 블록을 한 번 넣어 술래 소리를 한 마디(4박)로 지어 보세요.', target: { beats: true, use: ['h'] } } } },
              { prompt: '모둠 메아리 놀이를 두 바퀴 하고, 해낸 것을 표시해요.', toolOptions: { measures: 1 }, target: { beats: true, selfCheck: ['술래가 되어 내 소리를 냈어요', '술래 소리를 똑같이 따라 했어요', '바뀐 것을 맞혀 보았어요'] }, difficulty: 0.1 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"술래가 되었을 때와 따라 할 때, 어느 때가 더 재미있었나요? 왜 그래요?" 두세 명의 대답을 듣는다. 13~24차시에 소리의 빠르기·세기·높이를 듣고, 따라 내고, 바꾸어 본 것을 묶어 말한다. 다음 시간부터는 목소리·악기·몸으로 내는 소리를 알아본다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'story', options: { slots: ['1', '2', '3'], cards: [{ id: 'lead', text: '술래가 소리를 내요', motif: 'star' }, { id: 'echo', text: '모두 따라 해요', motif: 'bird' }, { id: 'change', text: '술래가 바꾸어 내요', motif: 'cloud' }] }, prompt: '메아리 놀이의 앞부분 차례대로 놓아 보세요.', target: { order: ['lead', 'echo', 'change'] }, difficulty: 0.1 },
          { type: 'tool', tool: 'emotion', options: { mode: 'scale', steps: 3, situation: '모둠 메아리 놀이에서 술래가 되어 내 소리를 냈어요.', feeling: '신남', ask: '술래가 되었을 때 마음은 얼마나 신났나요?' }, prompt: '술래가 되었을 때 내 마음을 솔직하게 골라 보세요. 정답은 없어요.', target: { level: 'any' }, difficulty: 0.05 },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '모둠 메아리 놀이',
      items: [
        { type: 'figure', wide: true, prompt: '메아리 놀이 차례대로 1, 2, 3을 쓰세요.', tool: 'story', figures: [{ options: { cards: [{ id: 'echo', text: '모두 따라 해요', motif: 'bird' }, { id: 'guess', text: '바뀐 것 맞히기', motif: 'sun' }, { id: 'lead', text: '술래가 소리 내기', motif: 'star' }], shuffle: false }, caption: '' }], answer: '술래가 소리 내기 1, 모두 따라 해요 2, 바뀐 것 맞히기 3' },
        { type: 'table', prompt: '내가 술래일 때 낸 소리와 바꾼 것을 쓰세요.', columns: ['처음 소리', '바꾼 것(빠르기·세기·높이)'], rows: 1 },
        { type: 'check', prompt: '놀이에서 지킨 약속에 ✓ 하세요.', options: ['끝까지 들었어요', '친구를 놀리지 않았어요', '하나만 바꾸었어요'] },
        { type: 'short', prompt: '친구 술래 소리 가운데 기억에 남는 것을 쓰세요.' },
      ],
      easy: {
        note: '술래 소리 → 따라 하기 → 맞히기!',
        items: [
          { type: 'choice', prompt: '술래가 먼저 하는 일은?', options: ['소리를 내요', '왕관을 줘요'], answer: '소리를 내요' },
          { type: 'choice', prompt: '술래는 몇 가지를 바꿀까요?', options: ['하나', '모두'], answer: '하나' },
          { type: 'draw', prompt: '왕관을 쓴 술래를 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '차례 카드가 세 장이고, 술래 소리는 2박 블록을 넣어 지어요.',
      base: '네 장 차례를 세우고, 쉼표를 넣은 술래 소리를 지어요.',
      challenge: '8분쉼표까지 써서 술래 소리를 짓고, 바뀐 것을 두 가지까지 맞혀요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 술래가 여러 가지를 한꺼번에 바꾸어 아무도 못 맞힌다 → 바꿀 것 카드(빠르기·세기·높이)에서 하나만 뽑게 한다. ② 술래 차례를 서로 하려고 다툰다 → 왕관을 시계 방향으로만 넘긴다. ③ 술래 소리를 못 지어 멈춘다 → 블록으로 지어 둔 소리를 그대로 내게 한다. 모둠 놀이 소리가 커지면 \'여리게 술래\' 한 바퀴로 바꾸어 진정시킨다.',
  }));

  // ───────────────────────── 25~28차시: 목소리·악기·몸으로 소리 내기 ─────────────────────────

  lessons.push(L(25, {
    title: '목소리·악기·몸으로 낸 소리 나누기',
    objective: '여러 소리를 목소리·악기·몸으로 낸 소리로 나누고, 악기가 없어도 목소리와 몸으로 음악을 할 수 있음을 말할 수 있다.',
    illustration: ART('three paper groups on a table: a singing mouth, a small drum and bell, and two clapping hands, each in its own colored circle', '소리는 어디서 날까?', [
      { motif: 'star', x: 120, y: 84, s: 0.6 }, { motif: 'bird', x: 380, y: 92 }, { motif: 'flower', x: 400, y: 228, color: 'rose' }]),
    safety: BODY_SAFE,
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '선생님이 눈을 감게 한 뒤 \'아—\' 노래하기, 작은북 치기, 발 구르기를 차례로 들려준다. "방금 소리는 무엇으로 냈을까요?" 목소리·악기·몸이라는 세 낱말을 칠판에 붙인다. "악기가 하나도 없으면 음악을 할 수 없을까요?" 하고 물어 생각을 듣기만 하고 답은 활동 뒤로 미룬다. 시연 단추로 카드가 나뉘는 모습을 보여 준다.',
        student: '눈을 감고 소리를 듣고, 무엇으로 낸 소리인지 손을 들어 말해요.',
        demo: { tool: 'mindmap', options: { topic: '무엇으로 낸 소리?', slots: ['목소리', '악기', '몸'], cards: ['아— 노래', '작은북 둥둥', '발 구르기 쿵쿵'], shuffle: false }, sequence: [{ sort: { '목소리': ['아— 노래'], '악기': ['작은북 둥둥'], '몸': ['발 구르기 쿵쿵'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 무엇으로 낸 소리일까', minutes: 13, tool: 'mindmap',
            teacher: '카드마다 선생님이나 학생이 실제로 소리를 내 본 뒤 나눈다. "입으로 냈나요, 물건으로 냈나요, 몸의 다른 곳으로 냈나요?" 휘파람이나 혀 차기처럼 헷갈리는 소리는 "입으로 냈지만 노래가 아닌 소리도 목소리 쪽에 둘까요?" 하고 함께 정한다. 이 활동에서는 입으로 낸 소리는 모두 목소리로 둔다.',
            task: '소리 카드를 무엇으로 냈는지에 따라 목소리·악기·몸으로 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '무엇으로 낸 소리인지 나누어 보세요.', toolOptions: { topic: '무엇으로 낸 소리?', slots: ['목소리', '악기', '몸'], cards: ['랄랄라 노래', '트라이앵글 땡', '손뼉 짝짝', '탬버린 찰찰', '야호 외치기', '무릎 치기 톡톡'] },
                target: { sort: { '목소리': ['랄랄라 노래', '야호 외치기'], '악기': ['트라이앵글 땡', '탬버린 찰찰'], '몸': ['손뼉 짝짝', '무릎 치기 톡톡'] } }, difficulty: 0.2,
                levels: { easy: { prompt: '목소리로 낸 소리와 몸으로 낸 소리를 나누어 보세요.', toolOptions: { slots: ['목소리', '몸'], cards: ['랄랄라 노래', '손뼉 짝짝', '야호 외치기', '무릎 치기 톡톡'] }, target: { sort: { '목소리': ['랄랄라 노래', '야호 외치기'], '몸': ['손뼉 짝짝', '무릎 치기 톡톡'] } } } },
                hints: ['소리를 직접 내 보고, 입·물건·몸의 다른 곳 가운데 어디로 냈는지 살펴요.', '물건을 들고 친 소리는 악기, 입으로 낸 소리는 목소리예요.', '\'노래\'와 \'외치기\'는 목소리, \'트라이앵글\'과 \'탬버린\'은 악기, \'손뼉\'과 \'무릎\'은 몸이에요.'] },
              { prompt: '악기가 없어도 낼 수 있는 소리만 골라 보세요.', toolOptions: { mode: 'pick', basket: '악기 없이 내는 소리', cards: ['발 구르기 쿵쿵', '실로폰 딩동', '허밍 음—', '작은북 둥둥', '손가락 튕기기 딱'] },
                target: { pick: ['발 구르기 쿵쿵', '허밍 음—', '손가락 튕기기 딱'] }, difficulty: 0.2 },
              { prompt: '소리와 그 소리를 낸 몸의 곳을 이어 보세요.', toolOptions: { mode: 'match', topic: '어디로 냈을까?', slots: [{ id: 's1', label: '쿵쿵' }, { id: 's2', label: '짝짝' }, { id: 's3', label: '랄랄라' }], cards: ['발', '손', '입'] },
                target: { match: { s1: '발', s2: '손', s3: '입' } }, difficulty: 0.1,
                conclude: '악기가 없어도 목소리와 몸으로 여러 가지 소리를 낼 수 있어요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 목소리와 몸으로 학교 노래 꾸미기', minutes: 13, tool: 'mindmap',
            teacher: '"악기 없이 목소리와 몸만으로 \'학교 가는 길\' 소리를 꾸며 봐요." 걷기는 무릎 톡톡, 친구 만나기는 \'안녕!\', 종소리는 \'딩동\' 허밍처럼 고르게 한다. 모둠마다 고른 소리로 짧게 들려주고, 악기 없이도 음악이 되었는지 반 전체가 이야기한다.',
            task: '학교 가는 길의 장면마다 어울리는 목소리·몸 소리를 고르고, 모둠이 함께 소리 내어 봐요.',
            levels: CARD_LV,
            items: [
              { prompt: '학교 가는 길 장면과 어울리는 소리를 이어 보세요.', toolOptions: { mode: 'match', topic: '학교 가는 길', slots: [{ id: 's1', label: '걸어가요' }, { id: 's2', label: '친구를 만나요' }, { id: 's3', label: '종이 울려요' }], cards: ['무릎 톡톡', '안녕! 외치기', '딩동 허밍'] },
                target: { match: { s1: '무릎 톡톡', s2: '안녕! 외치기', s3: '딩동 허밍' } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['무릎 톡톡', '안녕! 외치기', '딩동 허밍', '트라이앵글 땡'] } } } },
              { prompt: '비 오는 등굣길을 몸으로만 꾸밀 소리를 골라 보세요.', toolOptions: { mode: 'pick', basket: '몸으로 내는 빗소리', cards: ['손가락으로 책상 톡톡', '탬버린 흔들기', '손바닥 비비기 쓱쓱', '실로폰 치기'] },
                target: { pick: ['손가락으로 책상 톡톡', '손바닥 비비기 쓱쓱'] }, difficulty: 0.2 },
              { prompt: '모둠이 고른 목소리·몸 소리로 학교 가는 길을 처음부터 끝까지 들려줘요. 다 하면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '도입에서 물었던 것을 다시 묻는다. "악기가 없으면 음악을 할 수 없을까요?" 모둠 발표를 떠올리며 대답하게 한다. 다음 시간에는 몸을 악기처럼 써서 소리 무늬를 만든다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '무엇으로 낸 소리?', slots: ['목소리', '악기'], cards: ['캐스터네츠 딱딱', '음— 허밍', '리코더 삐'] }, prompt: '목소리와 악기로 낸 소리를 나누어 보세요.', target: { sort: { '목소리': ['음— 허밍'], '악기': ['캐스터네츠 딱딱', '리코더 삐'] } }, difficulty: 0.15 },
          { type: 'choice', prompt: '악기가 하나도 없을 때는?', options: ['음악을 할 수 없어요', '목소리와 몸으로 음악을 해요'], answer: 1, difficulty: 0.1, explain: '목소리와 몸도 훌륭한 악기예요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '소리는 무엇으로?',
      items: [
        { type: 'table', prompt: '소리를 낸 것에 ○ 하세요.', columns: ['소리', '목소리', '악기', '몸'], cells: [['손뼉 짝짝', '', '', ''], ['랄랄라 노래', '', '', ''], ['탬버린 찰찰', '', '', '']] },
        { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '발 구르기 쿵쿵은 ___으로 낸 소리예요.', answer: '몸' },
        { type: 'short', prompt: '악기 없이 낼 수 있는 소리를 두 가지 쓰세요.' },
        { type: 'draw', prompt: '목소리나 몸으로 소리를 내는 내 모습을 그리세요.' },
      ],
      easy: {
        note: '소리를 직접 내 보고 골라요.',
        items: [
          { type: 'choice', prompt: '손뼉 소리는 무엇으로 냈나요?', options: ['몸', '악기'], answer: '몸' },
          { type: 'choice', prompt: '노래는 무엇으로 냈나요?', options: ['목소리', '몸'], answer: '목소리' },
          { type: 'draw', prompt: '손뼉 치는 손을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '목소리와 몸 두 가지로만 나누고, 맞으면 바로 알려 줘요.',
      base: '목소리·악기·몸 세 가지로 나누어요.',
      challenge: '세 가지로 나눈 뒤, 함정 악기 카드를 빼고 몸 소리로만 장면을 꾸며요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 악기가 없으면 음악을 못 한다고 여긴다 → 손뼉·발 구르기·허밍으로 짧은 합주를 함께 해 본다. ② 휘파람·혀 차기를 어디에 둘지 헷갈린다 → 이 차시에서는 입으로 낸 소리는 목소리로 둔다고 미리 정한다. ③ 몸 소리를 너무 세게 내 손이 아프다 → 손바닥 대신 손가락으로 치게 한다. 악기 카드 소리는 꼭 실제 악기로 들려주고, 없으면 그림만 보고 소리를 흉내 내지 않게 한다.',
  }));

  lessons.push(L(26, {
    title: '몸 악기로 쿵 짝 소리 무늬 만들기',
    objective: '발(쿵)·손뼉(짝)·무릎(탁) 소리로 되풀이되는 소리 무늬를 이어 가고 만들어, 몸으로 연주할 수 있다.',
    illustration: ART('a paper child stamping a foot, clapping hands and tapping knees, with a row of colored sound tiles below', '몸이 악기가 돼요', [
      { motif: 'star', x: 110, y: 86, s: 0.6 }, { motif: 'sun', x: 380, y: 76, s: 0.6 }, { motif: 'flower', x: 400, y: 228, color: 'buttercup' }]),
    safety: BODY_SAFE,
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"우리 몸에서 소리가 나는 곳을 찾아볼까요?" 발로 쿵, 손뼉으로 짝, 무릎으로 탁을 함께 내 본다. "쿵 짝, 쿵 짝… 다음은 무엇일까요?" 되풀이를 몸으로 이어 가게 한다. 시연 단추로 빈칸이 채워지는 모습을 보여 준다.',
        student: '선생님과 함께 쿵·짝·탁 소리를 내 보고, 쿵 짝을 이어 가요.',
        demo: { tool: 'pattern', options: { seq: ['쿵', '짝', '쿵', '짝', null], palette: ['쿵', '짝'] }, sequence: [{ fill: ['쿵'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 몸 소리 무늬 이어 가기', minutes: 13, tool: 'pattern',
            teacher: '"무늬를 소리 내어 읽으며 몸으로 쳐 봐요. 빈칸에서 무엇을 쳐야 할까요?" 빈칸 바로 앞만 보고 고르는 학생에게 묶음을 손가락으로 끊어 읽게 한다. 다 채운 무늬는 모두 일어서서 몸으로 연주한다.',
            task: '쿵(발)·짝(손뼉)·탁(무릎)이 되풀이되는 무늬의 빈칸을 채우고 몸으로 쳐 봐요.',
            levels: { easy: { perRow: 8 }, base: { perRow: 8 }, challenge: { perRow: 9 } },
            items: [
              { prompt: '쿵 짝 짝이 되풀이돼요. 빈칸을 채워 보세요.', toolOptions: { seq: ['쿵', '짝', '짝', '쿵', '짝', null], palette: ['쿵', '짝'] }, target: { fill: ['짝'] }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { palette: ['쿵', '짝', '탁'] } } } },
              { prompt: '쿵 탁 짝이 되풀이돼요. 빈칸을 채워 보세요.', toolOptions: { seq: ['쿵', '탁', '짝', '쿵', null, '짝', null, '탁', '짝'], palette: ['쿵', '탁', '짝'] }, target: { fill: ['탁', '쿵'] }, difficulty: 0.25,
                levels: { easy: { prompt: '쿵 탁 짝이 되풀이돼요. 빈칸 하나를 채워 보세요.', toolOptions: { seq: ['쿵', '탁', '짝', '쿵', '탁', null] }, target: { fill: ['짝'] } } },
                hints: ['처음 세 칸이 한 묶음이에요. 묶음을 손가락으로 끊어 읽어요.', '묶음은 쿵-탁-짝 차례예요. 빈칸이 묶음의 몇째 칸인지 세어요.', '첫 빈칸은 묶음의 둘째 칸이라 탁, 둘째 빈칸은 첫째 칸이라 쿵이에요.'] },
              { prompt: '탁 탁 짝이 되풀이돼요. 빈칸을 채워 보세요.', toolOptions: { seq: ['탁', '탁', '짝', null, '탁', '짝', '탁', null, null], palette: ['탁', '짝'] }, target: { fill: ['탁', '탁', '짝'] }, difficulty: 0.3,
                levels: { challenge: { toolOptions: { palette: ['쿵', '짝', '탁'] } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 나만의 몸 악기 무늬 연주', minutes: 14, tool: 'pattern',
            teacher: '"쿵·짝·탁으로 나만의 무늬를 만들어요. 묶음이 두 번 넘게 되풀이되어야 친구가 따라 할 수 있어요." 다 만든 무늬를 짝에게 몸으로 들려주고 짝이 따라 하게 한다. 발을 너무 세게 구르는 학생에게는 아래층 친구를 생각해 발끝으로 살짝 구르게 한다.',
            task: '몸 소리로 되풀이되는 나만의 무늬를 만들고, 짝과 주고받으며 연주해요.',
            levels: { easy: { perRow: 8 }, base: { perRow: 8 }, challenge: { perRow: 9 } },
            items: [
              { prompt: '쿵과 짝으로 묶음이 되풀이되는 몸 악기 무늬를 만들어 보세요.', toolOptions: { mode: 'make', palette: ['쿵', '짝'], length: 6 }, target: { rule: 'repeat', minRepeats: 2, uses: 2 }, difficulty: 0.2,
                levels: { challenge: { prompt: '쿵·짝·탁을 모두 써서 세 칸 묶음이 되풀이되는 몸 악기 무늬를 만들어 보세요.', toolOptions: { palette: ['쿵', '짝', '탁'], length: 9 }, target: { rule: 'repeat', period: 3, minRepeats: 3, uses: 3 } } } },
              { prompt: '탁과 짝으로 네 칸 묶음이 두 번 되풀이되는 무늬를 만들어 보세요.', toolOptions: { mode: 'make', palette: ['탁', '짝'], length: 8 }, target: { rule: 'repeat', period: 4, minRepeats: 2, uses: 2 }, difficulty: 0.3,
                levels: { easy: { prompt: '탁과 짝으로 두 칸 묶음이 되풀이되는 무늬를 만들어 보세요.', toolOptions: { length: 6 }, target: { rule: 'repeat', period: 2, minRepeats: 3, uses: 2 } } } },
              { prompt: '내가 만든 무늬를 몸으로 짝에게 들려주고, 짝이 따라 하게 해요. 바꾸어 해요. 다 하면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"짝이 내 무늬를 잘 따라 했나요? 따라 하기 쉬운 무늬는 어떤 무늬였나요?" 묶음이 분명하게 되풀이되는 무늬가 따라 하기 쉽다는 것을 이끌어 낸다. 다음 시간에는 교실 물건으로 소리를 내는 방법을 찾는다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'pattern', options: { seq: ['짝', '쿵', '쿵', '짝', '쿵', null], palette: ['쿵', '짝'] }, prompt: '짝 쿵 쿵이 되풀이돼요. 빈칸을 채워 보세요.', target: { fill: ['쿵'] }, difficulty: 0.15 },
          { type: 'choice', prompt: '무릎을 손으로 쳐서 낸 \'탁\'은 무엇으로 낸 소리일까요?', options: ['악기', '몸'], answer: 1, difficulty: 0.1, explain: '무릎과 손은 몸이에요. 몸도 악기가 될 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '몸 악기 무늬',
      items: [
        { type: 'figure', wide: true, prompt: '빈칸에 들어갈 몸 소리를 쓰세요.', tool: 'pattern', figures: [{ options: { seq: ['쿵', '짝', '쿵', '짝', null, null] }, caption: '빈칸: ___, ___' }], answer: '쿵, 짝' },
        { type: 'table', prompt: '몸 소리와 소리 낸 곳을 쓰세요.', columns: ['소리', '몸의 어디로?'], cells: [['쿵', ''], ['짝', ''], ['탁', '']] },
        { type: 'short', prompt: '내가 만든 몸 악기 무늬를 쓰세요.' },
        { type: 'check', prompt: '연주할 때 지킨 것에 ✓ 하세요.', options: ['발을 살짝 굴렀어요', '짝 무늬를 따라 했어요', '묶음이 되풀이되게 만들었어요'] },
      ],
      easy: {
        note: '쿵은 발, 짝은 손뼉!',
        items: [
          { type: 'choice', prompt: '쿵 짝 쿵 짝 다음은?', options: ['쿵', '짝'], answer: '쿵' },
          { type: 'choice', prompt: '손뼉 소리는?', options: ['짝', '쿵'], answer: '짝' },
          { type: 'draw', prompt: '몸 악기를 치는 내 모습을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '빈칸이 하나이고, 두 칸 묶음 무늬를 만들어요.',
      base: '빈칸이 여러 개이고, 네 칸 묶음 무늬까지 만들어요.',
      challenge: '세 가지 몸 소리를 모두 써서 세 칸 묶음 무늬를 만들어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 빈칸 바로 앞 소리만 보고 고른다 → 맨 앞부터 소리 내어 읽고 묶음마다 손으로 끊게 한다. ② 발 구르기가 너무 커진다 → 발끝 구르기로 약속한다. ③ 무늬를 만들고 몸으로 치지 못한다 → 한 칸씩 짚으며 천천히 친 뒤 빠르기를 올린다. 몸 소리가 어려운 학생은 앉아서 무릎과 손뼉만 써도 된다.',
  }));

  lessons.push(L(27, {
    title: '교실 물건으로 두드리고 흔들어 소리 내기',
    objective: '교실 물건으로 소리를 내 보고, 두드리기·흔들기·문지르기 가운데 어떤 방법으로 소리를 냈는지 나눌 수 있다.',
    illustration: ART('paper classroom objects on a desk: a pencil tapping a cup, a box of crayons being shaken, a hand rubbing paper, with small sound marks', '교실 물건 악기', [
      { motif: 'star', x: 100, y: 84, s: 0.6 }, { motif: 'cloud', x: 380, y: 80 }, { motif: 'flower', x: 410, y: 228, color: 'mint' }]),
    safety: ['물건은 살살 다루고, 부서지는 물건(유리컵 등)은 쓰지 않아요.', '연필로 두드릴 때 뾰족한 쪽이 아니라 지우개 쪽으로 쳐요.', '선생님이 손을 들면 소리를 멈춰요.'],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '연필 지우개 쪽으로 책상을 톡톡 두드리고, 크레파스 상자를 흔들고, 종이를 손바닥으로 문질러 들려준다. "선생님은 어떻게 소리를 냈나요?" 두드리기·흔들기·문지르기 세 낱말을 칠판에 붙인다. 선생님이 손을 들면 모두 멈추는 신호를 먼저 연습한다. 시연 단추로 카드가 나뉘는 모습을 보여 준다.',
        student: '선생님이 낸 소리를 보고 두드리기·흔들기·문지르기 몸짓으로 따라 해요.',
        demo: { tool: 'mindmap', options: { topic: '어떻게 소리 냈나?', slots: ['두드려요', '흔들어요', '문질러요'], cards: ['연필로 책상 톡톡', '크레파스 상자 찰찰', '종이 쓱쓱'], shuffle: false }, sequence: [{ sort: { '두드려요': ['연필로 책상 톡톡'], '흔들어요': ['크레파스 상자 찰찰'], '문질러요': ['종이 쓱쓱'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 교실 물건 소리 찾기', minutes: 14, tool: 'mindmap',
            teacher: '모둠마다 물건 바구니(필통, 빈 상자, 종이, 자, 물통)를 준다. "물건 하나로 소리를 몇 가지 낼 수 있을까요?" 1분 동안 찾아보게 한 뒤 손 신호로 멈춘다. 찾은 소리를 카드와 견주며 나누게 한다. 같은 물건이라도 내는 방법에 따라 다른 칸에 갈 수 있다는 것을 짚는다.',
            task: '교실 물건으로 소리를 내 보고, 어떤 방법으로 냈는지에 따라 카드를 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '소리를 낸 방법에 따라 나누어 보세요.', toolOptions: { topic: '어떻게 소리 냈나?', slots: ['두드려요', '흔들어요', '문질러요'], cards: ['자로 상자 똑똑', '필통 흔들기 달그락', '책 표지 문지르기 사각', '물통 두드리기 퉁퉁', '구슬 든 상자 찰랑', '손바닥 비비기 쓱쓱'] },
                target: { sort: { '두드려요': ['자로 상자 똑똑', '물통 두드리기 퉁퉁'], '흔들어요': ['필통 흔들기 달그락', '구슬 든 상자 찰랑'], '문질러요': ['책 표지 문지르기 사각', '손바닥 비비기 쓱쓱'] } }, difficulty: 0.25,
                levels: { easy: { prompt: '두드린 소리와 흔든 소리를 나누어 보세요.', toolOptions: { slots: ['두드려요', '흔들어요'], cards: ['자로 상자 똑똑', '필통 흔들기 달그락', '물통 두드리기 퉁퉁', '구슬 든 상자 찰랑'] }, target: { sort: { '두드려요': ['자로 상자 똑똑', '물통 두드리기 퉁퉁'], '흔들어요': ['필통 흔들기 달그락', '구슬 든 상자 찰랑'] } } } },
                hints: ['카드에 적힌 대로 손을 움직여 보세요.', '한 번씩 쳤으면 두드리기, 이리저리 움직였으면 흔들기, 비비거나 밀었으면 문지르기예요.', '\'똑똑·퉁퉁\'은 두드리기, \'달그락·찰랑\'은 흔들기, \'사각·쓱쓱\'은 문지르기예요.'] },
              { prompt: '같은 필통으로 낸 소리예요. 낸 방법과 소리를 이어 보세요.', toolOptions: { mode: 'match', topic: '필통 하나로', slots: [{ id: 's1', label: '두드려요' }, { id: 's2', label: '흔들어요' }, { id: 's3', label: '문질러요' }], cards: ['통통', '달그락달그락', '스윽스윽'] },
                target: { match: { s1: '통통', s2: '달그락달그락', s3: '스윽스윽' } }, difficulty: 0.2,
                conclude: '물건 하나로도 내는 방법에 따라 여러 가지 소리를 낼 수 있어요.' },
              { prompt: '물건 바구니에서 하나를 골라 소리를 세 가지 넘게 내 보세요. 다 하면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 물건 소리로 장면 꾸미기', minutes: 12, tool: 'mindmap',
            teacher: '"비 오는 날, 문 두드리기, 기차 소리를 물건으로 꾸며 볼까요?" 모둠이 장면 하나를 골라 물건 소리를 정하게 한다. 소리가 커지면 손 신호로 멈추고, 여리게 다시 해 보게 한다. 다 정하면 모둠별로 짧게 들려주고 다른 모둠이 장면을 맞힌다.',
            task: '장면에 어울리는 물건 소리를 고르고, 모둠이 함께 꾸며 들려줘요.',
            levels: CARD_LV,
            items: [
              { prompt: '장면과 어울리는 물건 소리를 이어 보세요.', toolOptions: { mode: 'match', topic: '물건 소리 장면', slots: [{ id: 's1', label: '빗방울이 떨어져요' }, { id: 's2', label: '누가 문을 두드려요' }, { id: 's3', label: '바람이 불어요' }], cards: ['손가락으로 상자 톡톡', '주먹으로 책상 똑똑', '종이 문지르기 쉬익'] },
                target: { match: { s1: '손가락으로 상자 톡톡', s2: '주먹으로 책상 똑똑', s3: '종이 문지르기 쉬익' } }, difficulty: 0.2,
                levels: { challenge: { toolOptions: { cards: ['손가락으로 상자 톡톡', '주먹으로 책상 똑똑', '종이 문지르기 쉬익', '필통 흔들기 달그락'] } } } },
              { prompt: '기차가 칙칙폭폭 달려가는 장면에 쓸 소리만 골라 보세요.', toolOptions: { mode: 'pick', basket: '기차 장면 소리', cards: ['손바닥 비비기 칙칙', '자로 상자 두드리기 폭폭', '트라이앵글 땡', '노래 랄랄라'] },
                target: { pick: ['손바닥 비비기 칙칙', '자로 상자 두드리기 폭폭'] }, difficulty: 0.2 },
              { prompt: '모둠이 고른 장면을 물건 소리로 들려주고, 다른 모둠이 맞히게 해요. 다 하면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 찾은 소리 가운데 가장 신기했던 소리는 무엇이었나요? 어떻게 냈나요?" 방법 낱말(두드려요·흔들어요·문질러요)로 말하게 한다. 물건을 제자리에 정리한 뒤, 다음 시간에는 목소리·악기·몸·물건 가운데 쓰고 싶은 소리를 고르고 까닭을 말한다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '어떻게 소리 냈나?', slots: ['두드려요', '흔들어요'], cards: ['컵에 연필 톡톡', '쌀 든 통 찰찰'] }, prompt: '소리를 낸 방법에 따라 나누어 보세요.', target: { sort: { '두드려요': ['컵에 연필 톡톡'], '흔들어요': ['쌀 든 통 찰찰'] } }, difficulty: 0.1 },
          { type: 'choice', prompt: '종이를 손바닥으로 쓱쓱 비볐어요. 어떤 방법일까요?', options: ['두드려요', '흔들어요', '문질러요'], answer: 2, difficulty: 0.1, explain: '비비거나 미는 것은 문지르기예요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '교실 물건 악기',
      items: [
        { type: 'table', prompt: '내가 소리를 낸 물건과 방법을 쓰세요.', columns: ['물건', '방법(두드려요·흔들어요·문질러요)', '소리 흉내말'], rows: 3 },
        { type: 'choice', prompt: '필통을 흔들어 낸 소리는?', options: ['달그락', '퉁퉁'], answer: '달그락' },
        { type: 'check', prompt: '물건 소리를 낼 때 지킨 것에 ✓ 하세요.', options: ['살살 다루었어요', '손 신호에 멈추었어요', '제자리에 정리했어요'] },
        { type: 'short', prompt: '물건 하나로 소리를 여러 가지 낸 방법을 쓰세요.' },
      ],
      easy: {
        note: '톡톡은 두드리기, 찰찰은 흔들기!',
        items: [
          { type: 'choice', prompt: '연필로 책상을 톡톡 쳤어요. 어떤 방법?', options: ['두드려요', '흔들어요'], answer: '두드려요' },
          { type: 'choice', prompt: '상자를 찰찰 움직였어요. 어떤 방법?', options: ['흔들어요', '두드려요'], answer: '흔들어요' },
          { type: 'draw', prompt: '소리를 낸 물건을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '두드리기와 흔들기 두 가지로만 나누어요.',
      base: '두드리기·흔들기·문지르기 세 가지로 나누어요.',
      challenge: '함정 악기 카드를 빼고 장면을 꾸미며, 물건 하나로 소리를 네 가지 넘게 찾아요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 소리 찾기가 시끄러워져 서로 소리가 안 들린다 → 손 신호 멈춤을 먼저 연습하고, 1분 찾기·멈춤을 되풀이한다. ② 같은 물건은 한 가지 소리만 난다고 여긴다 → 필통 하나로 세 가지 소리를 들려준다. ③ 물건을 세게 쳐서 망가뜨린다 → 유리·도자기는 바구니에 넣지 않고, 손가락으로 먼저 쳐 보게 한다. 연필은 꼭 지우개 쪽으로 두드린다.',
  }));

  lessons.push(L(28, {
    title: '쓰고 싶은 소리를 고르고 까닭 말하기',
    objective: '목소리·악기·몸·물건 소리 가운데 표현하고 싶은 장면에 쓸 소리를 하나 고르고, 그 소리를 고른 까닭을 말할 수 있다.',
    illustration: ART('a paper child standing before four doors labeled with a mouth, a drum, a hand and a pencil box, choosing one with a speech bubble', '어떤 소리를 고를까?', [
      { motif: 'star', x: 240, y: 70, s: 0.6 }, { motif: 'tree', x: 90, y: 214 }, { motif: 'flower', x: 400, y: 228, color: 'lavender' }]),
    safety: BODY_SAFE,
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"\'운동장에서 뛰어노는 장면\'을 소리로 나타낸다면 무엇을 쓸까요?" 목소리 \'와!\', 발 구르기, 탬버린 등 여러 대답을 받는다. "선생님은 발 구르기를 고를래요. 왜냐하면 뛰는 발소리와 닮았기 때문이에요." 말틀 \'나는 ○○를 골랐어요. 왜냐하면 ○○ 때문이에요\'를 칠판에 붙인다. 시연 단추로 빈칸이 채워지는 모습을 보여 준다.',
        student: '선생님 말틀을 따라 \'왜냐하면\'을 넣어 말해 봐요.',
        demo: { tool: 'story', options: { mode: 'fill', slots: [{ id: 'f1', who: '선생님', motif: 'sun', label: '나는 ___를 골랐어요.' }, { id: 'f2', who: '선생님', motif: 'sun', label: '왜냐하면 ___와 닮았기 때문이에요.' }], cards: ['발 구르기', '뛰는 발소리'], shuffle: false }, sequence: [{ fill: { f1: '발 구르기', f2: '뛰는 발소리' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 장면에 어울리는 소리와 까닭', minutes: 13, tool: 'story',
            teacher: '"고른 소리가 장면의 무엇과 닮았는지 생각하면 까닭이 쉬워요." 까닭을 \'좋아서요\'라고만 말하는 학생에게 "그 소리의 무엇이 장면과 닮았나요? 빠르기? 세기? 느낌?" 하고 되묻는다. 친구마다 고른 소리가 달라도 까닭이 있으면 모두 좋은 선택이라는 것을 알려 준다.',
            task: '장면에 쓸 소리를 고른 이야기의 빈칸을 채우고, 까닭을 말해요.',
            levels: CARD_LV,
            items: [
              { prompt: '"쉬는 시간 종이 울려요" 장면 이야기예요. 빈칸을 채워 보세요.', toolOptions: { mode: 'fill', slots: [{ id: 'f1', who: '서아', motif: 'star', label: '나는 ___를 골랐어요.' }, { id: 'f2', who: '서아', motif: 'star', label: '왜냐하면 ___와 닮았기 때문이에요.' }], cards: ['트라이앵글', '발 구르기', '종소리', '천둥소리'] },
                target: { fill: { f1: '트라이앵글', f2: '종소리' } }, difficulty: 0.2 },
              { prompt: '"살금살금 도서실에 들어가요" 장면 이야기예요. 빈칸을 채워 보세요.', toolOptions: { mode: 'fill', slots: [{ id: 'f1', who: '하준', motif: 'bird', label: '나는 ___를 골랐어요.' }, { id: 'f2', who: '하준', motif: 'bird', label: '왜냐하면 ___ 소리라 조용한 곳과 어울려요.' }], cards: ['손가락 톡톡', '큰북 둥둥', '여린', '센'] },
                target: { fill: { f1: '손가락 톡톡', f2: '여린' } }, difficulty: 0.25,
                hints: ['도서실은 어떤 곳인지 먼저 떠올려요.', '조용한 곳에는 작은 소리가 어울려요.', '\'손가락 톡톡\'을 고르고, 까닭에는 \'여린\'을 넣어요.'] },
              { prompt: '장면과 그 장면에 고른 소리의 까닭을 이어 보세요.', toolOptions: { mode: 'match', topic: '왜 골랐나요?', slots: [{ id: 's1', label: '운동회 응원: 큰북 둥둥' }, { id: 's2', label: '아기 잠재우기: 허밍 음—' }, { id: 's3', label: '토끼 뛰기: 짧은 손뼉 짝짝짝' }], cards: ['세고 힘차서', '여리고 부드러워서', '빠르고 가벼워서'] },
                target: { match: { s1: '세고 힘차서', s2: '여리고 부드러워서', s3: '빠르고 가벼워서' } }, difficulty: 0.25 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 내 장면 소리 정하고 들려주기', minutes: 14, tool: 'mindmap',
            teacher: '"우리 학교 장면 하나를 고르고, 쓸 소리를 하나 정해요." 장면 예(급식 시간, 줄넘기, 비 오는 날 우산)를 칠판에 붙인다. 짝에게 소리를 들려주고 말틀로 까닭을 말하게 한다. 짝은 "그 소리가 ○○와 닮았어"처럼 느낀 점을 한 가지 말해 준다.',
            task: '내 장면에 어울리는 소리 종류를 고르고, 짝에게 소리를 들려주며 까닭을 말해요.',
            levels: CARD_LV,
            items: [
              { prompt: '줄넘기하는 장면에 어울리는 소리만 골라 보세요.', toolOptions: { mode: 'pick', basket: '줄넘기 장면 소리', cards: ['발끝 구르기 톡톡톡', '자로 책상 탁탁 빠르게', '허밍 음— 길게', '큰북 둥— 한 번'] },
                target: { pick: ['발끝 구르기 톡톡톡', '자로 책상 탁탁 빠르게'] }, difficulty: 0.25 },
              { prompt: '고른 소리가 무엇에서 났는지 나누어 보세요.', toolOptions: { topic: '어디서 난 소리?', slots: ['몸', '물건'], cards: ['발끝 구르기 톡톡톡', '자로 책상 탁탁', '손뼉 짝짝', '필통 흔들기 달그락'] },
                target: { sort: { '몸': ['발끝 구르기 톡톡톡', '손뼉 짝짝'], '물건': ['자로 책상 탁탁', '필통 흔들기 달그락'] } }, difficulty: 0.15 },
              { prompt: '내 장면과 소리를 정해 짝에게 들려주고 "왜냐하면"을 넣어 까닭을 말해요. 다 하면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"짝과 같은 장면인데 다른 소리를 고른 사람이 있나요?" 두 사람의 까닭을 들어 보고, 까닭이 있으면 둘 다 좋은 선택이라는 것을 짚는다. 다음 시간부터는 고른 소리로 네 박 리듬을 만든다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'story', options: { mode: 'fill', slots: [{ id: 'f1', who: '민지', motif: 'flower', label: '천둥 치는 장면에는 ___를 골랐어요.' }, { id: 'f2', who: '민지', motif: 'flower', label: '왜냐하면 ___ 소리라서요.' }], cards: ['큰북 둥둥', '손가락 톡톡', '세고 큰', '여리고 작은'] }, prompt: '천둥 장면 이야기의 빈칸을 채워 보세요.', target: { fill: { f1: '큰북 둥둥', f2: '세고 큰' } }, difficulty: 0.15 },
          { type: 'choice', prompt: '짝과 같은 장면에 다른 소리를 골랐어요. 어떨까요?', options: ['한 사람은 틀렸어요', '까닭이 있으면 둘 다 좋아요'], answer: 1, difficulty: 0.1, explain: '까닭이 있는 선택은 모두 좋은 표현이에요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '내가 고른 소리',
      items: [
        { type: 'table', prompt: '내 장면과 고른 소리, 까닭을 쓰세요.', columns: ['장면', '고른 소리', '왜냐하면'], rows: 1 },
        { type: 'choice', prompt: '도서실 장면에 어울리는 소리는?', options: ['손가락 톡톡', '큰북 둥둥'], answer: '손가락 톡톡' },
        { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '나는 탬버린을 골랐어요. ______ 신나는 소리라서요.', answer: '왜냐하면' },
        { type: 'short', prompt: '짝이 고른 소리와 까닭을 쓰세요.' },
      ],
      easy: {
        note: '"나는 ○○를 골랐어요. 왜냐하면 ○○."',
        items: [
          { type: 'choice', prompt: '천둥 장면에 어울리는 소리는?', options: ['큰북 둥둥', '허밍 음—'], answer: '큰북 둥둥' },
          { type: 'choice', prompt: '까닭을 말할 때 넣는 말은?', options: ['왜냐하면', '그런데'], answer: '왜냐하면' },
          { type: 'draw', prompt: '내가 고른 소리를 내는 모습을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '말틀 빈칸에 카드를 넣고, 맞으면 바로 알려 줘요.',
      base: '장면마다 소리와 까닭을 골라 이어요.',
      challenge: '함정 카드가 섞여 있고, 내 장면 소리의 까닭을 빠르기·세기 낱말로 말해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 까닭을 \'좋아서요\'로만 말한다 → 장면과 소리의 닮은 점(빠르기·세기·느낌)을 묻는다. ② 친구와 다른 소리를 고르면 틀렸다고 여긴다 → 까닭을 들어 보고 둘 다 좋은 선택이라고 말해 준다. ③ 고르기를 어려워해 시간을 많이 쓴다 → 장면을 칠판 예에서 고르게 하고, 소리는 지난 시간에 찾은 것 가운데 하나로 좁힌다.',
  }));

  // ───────────────────────── 29~32차시: 네 박 소리 만들기, 짝과 주고받고 겹치기 ─────────────────────────

  lessons.push(L(29, {
    title: '고른 소리로 네 박 리듬 짓기',
    objective: '지난 시간에 고른 소리로 한 마디(네 박)를 채우는 리듬을 지어 블록으로 나타내고, 그 소리로 연주할 수 있다.',
    illustration: ART('a paper rhythm strip with four beat boxes, a child placing colored blocks while holding a pencil box shaker', '네 박을 채워요', [
      { motif: 'star', x: 110, y: 84, s: 0.6 }, { motif: 'sun', x: 380, y: 76, s: 0.6 }, { motif: 'flower', x: 400, y: 228, color: 'sky' }]),
    safety: BODY_SAFE,
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"하나 둘 셋 넷" 하며 무릎을 네 번 친다. "이 네 박이 한 마디예요. 네 박을 채우는 방법은 여러 가지예요." 짝 짝 짝 짝, 짝— 짝—, 짝짝 짝 짝 (쉬고)를 들려준다. "모두 네 박일까요?" 손가락으로 세어 보게 한다. 시연 단추로 한 마디가 채워지는 모습을 보여 준다.',
        student: '선생님과 함께 \'하나 둘 셋 넷\'을 세며 무릎을 치고, 여러 리듬이 네 박인지 손가락으로 세어 봐요.',
        demo: { tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 1, blocks: ['q', 'h', 'qr'] }, sequence: [{ rhythm: ['h', 'q', 'q'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 네 박 채우기', minutes: 14, tool: 'keyboard',
            teacher: '"블록 아래 숫자가 몇 박인지 알려 줘요. 모두 더해 넷이 되면 한 마디가 꽉 차요." 박이 넘치는 학생에게 마지막 블록을 빼고 다시 세게 한다. 같은 네 박이라도 블록 모양이 친구마다 다르다는 것을 짝과 견주며 알게 한다.',
            task: '블록을 놓아 한 마디 네 박을 채우는 나만의 리듬을 지어요.',
            levels: RHY_LV,
            items: [
              { prompt: '블록을 놓아 한 마디 네 박을 꽉 채워 보세요.', toolOptions: { measures: 1 }, target: { beats: true }, difficulty: 0.1 },
              { prompt: '2박 블록을 한 번 넣어 네 박 한 마디를 지어 보세요.', toolOptions: { measures: 1 }, target: { beats: true, use: ['h'] }, difficulty: 0.15,
                hints: ['2박 블록을 먼저 놓아요.', '2박을 놓으면 남은 박은 둘이에요.', '2박 블록 뒤에 1박 블록 두 개를 놓으면 네 박이 돼요.'] },
              { prompt: '반 박 블록(짝짝)을 넣어 네 박 한 마디를 지어 보세요.', toolOptions: { measures: 1 }, target: { beats: true, use: ['e'] }, difficulty: 0.2,
                levels: { easy: { prompt: '쉼표를 한 번 넣어 네 박 한 마디를 지어 보세요.', target: { beats: true, rests: 1 } } },
                conclude: '블록 모양은 달라도 박을 더해 넷이면 한 마디가 돼요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 고른 소리로 내 리듬 연주', minutes: 13, tool: 'keyboard',
            teacher: '"28차시에 고른 소리(목소리·몸·물건)로 내 리듬을 쳐 봐요." 블록 판을 보며 천천히 친 뒤 조금 빠르게 쳐 보게 한다. 짝에게 들려줄 때는 \'하나 둘 셋 넷\' 예비 박을 먼저 세어 함께 시작하게 한다.',
            task: '고른 소리로 칠 네 박 리듬을 짓고, 짝에게 들려준 뒤 해낸 것을 표시해요.',
            levels: RHY_LV,
            items: [
              { prompt: '고른 소리로 칠 네 박 리듬을 짓고, 들려준 뒤 해낸 것을 표시해요.', toolOptions: { measures: 1 }, target: { beats: true, selfCheck: ['고른 소리로 내 리듬을 쳐 보았어요', '예비 박을 세고 시작했어요'] }, difficulty: 0.1 },
              { prompt: '내 리듬을 고른 소리로 두 번 이어서 짝에게 들려줘요. 다 하면 "다 했어요"를 누르세요.', free: true, talk: true },
              { prompt: '짝 리듬도 짝이 고른 소리로 함께 쳐 봐요. 다 하면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"내 리듬과 짝 리듬은 무엇이 달랐나요? 둘 다 네 박이었나요?" 두세 명이 블록 판을 보여 주며 말하게 한다. 다음 시간에는 짝과 리듬을 주고받아 여덟 박을 만든다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 1, blocks: ['q', 'e', 'h', 'qr'] }, prompt: '1박 블록과 2박 블록을 써서 네 박 한 마디를 지어 보세요.', target: { beats: true, use: ['q', 'h'] }, difficulty: 0.15 },
          { type: 'choice', prompt: '\'짝— 짝 짝\'(2박 + 1박 + 1박)은 모두 몇 박일까요?', options: ['세 박', '네 박', '다섯 박'], answer: 1, difficulty: 0.15, explain: '2 + 1 + 1 = 4, 네 박이에요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '네 박 리듬',
      items: [
        { type: 'figure', wide: true, prompt: '내가 지은 네 박 리듬을 블록 칸에 그리세요.', tool: 'keyboard', figures: [{ options: { mode: 'rhythm', meter: 4, measures: 1, blocks: ['q', 'e', 'h', 'qr'] }, caption: '' }], answer: '내가 지은 네 박 리듬' },
        { type: 'table', prompt: '리듬의 박을 더해 쓰세요.', columns: ['리듬', '박을 더하면'], cells: [['짝 짝 짝 짝 (1+1+1+1)', ''], ['짝— 짝— (2+2)', '']] },
        { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '한 마디는 ___박이에요.', answer: '4' },
        { type: 'short', prompt: '내 리듬을 무슨 소리로 쳤는지 쓰세요.' },
      ],
      easy: {
        note: '하나 둘 셋 넷, 네 박이 한 마디!',
        items: [
          { type: 'choice', prompt: '짝 짝 짝 짝은 몇 박?', options: ['네 박', '두 박'], answer: '네 박' },
          { type: 'choice', prompt: '짝—은 몇 박?', options: ['2박', '1박'], answer: '2박' },
          { type: 'draw', prompt: '내 리듬을 치는 모습을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '박 수가 블록 위에 보이고, 1박·2박·쉼표 블록만 있어요.',
      base: '반 박 블록까지 넣어 네 박을 채워요.',
      challenge: '8분쉼표 블록까지 쓰며, 반 박 블록을 넣은 리듬을 지어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 박을 더하지 않고 블록 수를 센다 → 블록 아래 숫자를 손가락으로 펴며 더한다. ② 2박 블록이 1박처럼 짧게 친다 → 2박은 손뼉 뒤 손을 붙인 채 \'짝—\' 하고 둘까지 센다. ③ 연주할 때 박이 빨라진다 → 예비 박을 꼭 세고 시작한다. 박을 세는 몸짓(무릎 치기)을 활동 내내 같은 것으로 쓴다.',
  }));

  lessons.push(L(30, {
    title: '짝과 네 박씩 주고받아 여덟 박 만들기',
    objective: '짝이 친 네 박에 이어 내 네 박을 쳐서 두 마디(여덟 박) 리듬을 만들고, 짝과 주고받으며 연주할 수 있다.',
    illustration: ART('two paper children facing each other, one clapping while the other waits, a two-box rhythm strip between them with arrows going back and forth', '주고받아요', [
      { motif: 'star', x: 240, y: 70, s: 0.6 }, { motif: 'flower', x: 100, y: 228, color: 'rose' }, { motif: 'flower', x: 390, y: 228, color: 'mint' }]),
    safety: BODY_SAFE,
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '선생님이 네 박을 치고 한 학생이 바로 이어 자기 네 박을 친다. "선생님 네 박, 친구 네 박, 모두 몇 박이 되었나요?" 여덟 박, 두 마디라는 것을 짚는다. "내 차례를 기다리는 동안 무엇을 할까요?" 마음속으로 박을 세며 기다린다는 것을 함께 말한다. 시연 단추로 두 마디가 채워지는 모습을 보여 준다.',
        student: '선생님과 친구가 주고받는 소리를 듣고, 박을 함께 세어 몇 박인지 말해요.',
        demo: { tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 2, blocks: ['q', 'h', 'qr'] }, sequence: [{ rhythm: ['q', 'q', 'h'] }, { rhythm: ['q', 'q', 'h', 'h', 'q', 'qr'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 짝 네 박에 내 네 박 잇기', minutes: 14, tool: 'keyboard',
            teacher: '"첫째 마디에는 짝 리듬이 놓여 있어요. 둘째 마디에 내 네 박을 이어 놓아요." 첫째 마디를 지우는 학생에게 "짝 마디는 그대로 두고 내 마디만 채워요"라고 말한다. 다 놓으면 짝과 첫째 마디·둘째 마디를 나누어 맡아 쳐 본다.',
            task: '첫째 마디(짝 리듬)는 그대로 두고, 둘째 마디에 내 네 박을 이어 놓아요.',
            levels: RHY_LV,
            items: [
              { prompt: '첫째 마디는 민지 리듬이에요. 둘째 마디에 내 네 박을 이어 놓아 보세요.', toolOptions: { measures: 2 }, state: { rhythm: ['q', 'q', 'h'] }, target: { beats: true }, difficulty: 0.15 },
              { prompt: '첫째 마디는 준호 리듬이에요. 쉼표를 넣어 둘째 마디를 이어 보세요.', toolOptions: { measures: 2 }, state: { rhythm: ['h', 'q', 'q'] }, target: { beats: true, rests: 1 }, difficulty: 0.2,
                hints: ['첫째 마디는 그대로 두고 둘째 마디만 채워요.', '쉼표 블록도 박을 차지해요. 쉼표를 하나 넣고 남은 박을 세어요.', '둘째 마디에 1박 쉼표 하나와 1박 블록 세 개를 놓으면 네 박이에요.'] },
              { prompt: '서아와 주고받은 여덟 박이에요. 리듬 듣기를 누르고 두 마디를 그대로 놓아 보세요.', toolOptions: { measures: 2, pattern: ['q', 'q', 'q', 'q', 'h', 'h'] }, target: { rhythm: ['q', 'q', 'q', 'q', 'h', 'h'] }, difficulty: 0.2,
                levels: { challenge: { prompt: '서아와 주고받은 여덟 박이에요. 리듬 듣기를 누르고 두 마디를 그대로 놓아 보세요. 반 박 소리도 있어요.', toolOptions: { pattern: ['e', 'e', 'q', 'q', 'q', 'h', 'q', 'qr'] }, target: { rhythm: ['e', 'e', 'q', 'q', 'q', 'h', 'q', 'qr'] } } },
                conclude: '네 박씩 주고받으면 두 마디, 여덟 박이 돼요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 짝과 주고받기 연주', minutes: 13, tool: 'story',
            teacher: '"주고받기를 잘하려면 어떤 차례로 할까요?" 차례를 세운 뒤 짝과 다섯 번 주고받기를 해 본다. 내 차례가 아닐 때 손을 무릎에 두고 박을 세게 한다. 끝까지 박이 끊기지 않은 짝을 칭찬한다.',
            task: '주고받기 연주의 차례를 세우고, 짝과 여덟 박 주고받기를 해 봐요.',
            levels: CARD_LV,
            items: [
              { prompt: '짝과 주고받기 연주의 차례대로 놓아 보세요.', toolOptions: { slots: ['1', '2', '3', '4'], cards: [{ id: 'count', text: '하나 둘 셋 넷, 함께 세어요', motif: 'sun' }, { id: 'me', text: '내가 네 박을 쳐요', motif: 'star' }, { id: 'you', text: '짝이 이어서 네 박을 쳐요', motif: 'bird' }, { id: 'bow', text: '함께 인사해요', motif: 'flower' }] },
                target: { order: ['count', 'me', 'you', 'bow'] }, difficulty: 0.1 },
              { prompt: '짝이 칠 때 나는 무엇을 할까요? 알맞은 것만 골라 보세요.', toolOptions: { mode: 'pick', basket: '짝 차례에 하는 일', cards: ['마음속으로 박을 세어요', '짝 소리를 들어요', '내 소리를 크게 덮어 쳐요', '딴짓을 해요'] },
                target: { pick: ['마음속으로 박을 세어요', '짝 소리를 들어요'] }, difficulty: 0.1 },
              { prompt: '짝과 여덟 박 주고받기를 다섯 번 이어서 해요. 다 하면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"주고받을 때 박이 끊기지 않으려면 어떻게 했나요?" 짝 소리를 듣고 마음속으로 세었다는 대답을 이끌어 낸다. 다음 시간에는 짝과 동시에 겹쳐서 쳐 본다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 2, blocks: ['q', 'h', 'qr'] }, state: { rhythm: ['q', 'qr', 'q', 'q'] }, prompt: '첫째 마디는 하준 리듬이에요. 2박 블록을 넣어 둘째 마디를 이어 보세요.', target: { beats: true, use: ['h'] }, difficulty: 0.15 },
          { type: 'choice', prompt: '네 박씩 두 번 주고받으면 모두 몇 박일까요?', options: ['네 박', '여덟 박'], answer: 1, difficulty: 0.1, explain: '4 + 4 = 8, 두 마디예요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '주고받는 여덟 박',
      items: [
        { type: 'figure', wide: true, prompt: '짝 리듬(첫째 마디)과 내 리듬(둘째 마디)을 그리세요.', tool: 'keyboard', figures: [{ options: { mode: 'rhythm', meter: 4, measures: 2, blocks: ['q', 'e', 'h', 'qr'] }, caption: '' }], answer: '짝 리듬과 내 리듬' },
        { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '네 박 + 네 박 = ___박', answer: '8' },
        { type: 'check', prompt: '주고받기에서 지킨 것에 ✓ 하세요.', options: ['짝 차례에 박을 세었어요', '짝 소리를 끝까지 들었어요', '박이 끊기지 않게 이었어요'] },
        { type: 'short', prompt: '주고받기를 잘한 우리 짝의 비결을 쓰세요.' },
      ],
      easy: {
        note: '짝 네 박, 내 네 박!',
        items: [
          { type: 'choice', prompt: '짝이 칠 때 나는?', options: ['박을 세며 들어요', '같이 크게 쳐요'], answer: '박을 세며 들어요' },
          { type: 'choice', prompt: '두 마디는 몇 박?', options: ['여덟 박', '네 박'], answer: '여덟 박' },
          { type: 'draw', prompt: '짝과 주고받는 모습을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '박 수가 보이고, 2박 블록으로 쉽게 이어요.',
      base: '쉼표를 넣어 이어 놓고, 두 마디를 듣고 따라 놓아요.',
      challenge: '반 박과 쉼표가 섞인 두 마디 리듬을 듣고 따라 놓아요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 짝 마디를 지우고 처음부터 놓는다 → 짝 마디는 짝의 것이니 그대로 둔다고 말해 준다. ② 내 차례를 놓치거나 일찍 들어간다 → 짝 차례에 무릎으로 조용히 박을 세게 한다. ③ 짝 리듬을 덮어 크게 친다 → 주고받기는 차례를 지키는 놀이라는 것을 다시 말한다. 주고받기가 익숙하지 않으면 선생님과 반 전체가 먼저 주고받는다.',
  }));

  lessons.push(L(31, {
    title: '짝과 동시에 겹쳐 쳐도 내 소리 들어 보기',
    objective: '짝이 박을 지키는 동안 내 리듬을 겹쳐 쳐 보고, 함께 쳐도 내 소리와 짝 소리가 모두 들리는 방법을 말할 수 있다.',
    illustration: ART('two paper children side by side, one tapping steady beats on knees, the other clapping a different rhythm, two colored sound lines overlapping above them', '겹쳐도 들려요', [
      { motif: 'star', x: 110, y: 84, s: 0.6 }, { motif: 'cloud', x: 380, y: 80 }, { motif: 'flower', x: 400, y: 228, color: 'buttercup' }]),
    safety: BODY_SAFE,
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '선생님은 무릎으로 \'쿵 쿵 쿵 쿵\' 박을 지키고, 한 학생은 손뼉으로 \'짝짝 짝 짝짝 짝\'을 동시에 친다. "두 소리가 함께 났는데, 두 소리 다 들렸나요?" 대답을 들은 뒤 "함께 치면 내 소리가 사라질까요?" 하고 묻고 활동으로 확인해 보자고 한다. 시연 단추로 박 지키기 리듬이 놓이는 모습을 보여 준다.',
        student: '두 소리를 듣고, 무릎 소리가 들리면 무릎을, 손뼉 소리가 들리면 손뼉을 가리켜요.',
        demo: { tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 1, blocks: ['q', 'e', 'h'] }, sequence: [{ rhythm: ['q', 'q', 'q', 'q'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 박 지키기와 내 리듬', minutes: 13, tool: 'keyboard',
            teacher: '"한 사람은 박을 지키고, 한 사람은 리듬을 쳐요. 먼저 두 사람의 리듬을 블록으로 놓아 봐요." 놓은 뒤 짝과 역할을 나누어 동시에 친다. 박 지키는 사람이 리듬에 끌려가 빨라지면 "무릎만 보고 쿵 쿵 쿵 쿵"을 소리 내어 세게 한다.',
            task: '박 지키기 리듬과 겹쳐 칠 리듬을 듣고 블록으로 놓은 뒤, 짝과 동시에 쳐요.',
            levels: CHANGE_LV,
            items: [
              { prompt: '박 지키는 사람의 소리예요. 리듬 듣기를 누르고 그대로 놓아 보세요.', toolOptions: { pattern: ['q', 'q', 'q', 'q'] }, target: { rhythm: ['q', 'q', 'q', 'q'] }, difficulty: 0.05,
                levels: { challenge: { prompt: '박 지키는 사람이 두 박마다 쳐요. 리듬 듣기를 누르고 그대로 놓아 보세요.', toolOptions: { pattern: ['h', 'h'] }, target: { rhythm: ['h', 'h'] } } } },
              { prompt: '박 위에 겹쳐 칠 손뼉 리듬이에요. 리듬 듣기를 누르고 그대로 놓아 보세요.', toolOptions: { pattern: ['e', 'e', 'q', 'e', 'e', 'q'] }, target: { rhythm: ['e', 'e', 'q', 'e', 'e', 'q'] }, difficulty: 0.25,
                levels: { easy: { prompt: '박 위에 겹쳐 칠 손뼉 리듬이에요. 리듬 듣기를 누르고 그대로 놓아 보세요. 반 박이 앞에만 있어요.', toolOptions: { pattern: ['e', 'e', 'q', 'h'] }, target: { rhythm: ['e', 'e', 'q', 'h'] } } } },
              { prompt: '박 위에 겹쳐 칠 내 리듬을 반 박 블록을 넣어 지어 보세요.', toolOptions: { measures: 1 }, target: { beats: true, use: ['e'] }, difficulty: 0.2,
                conclude: '박 지키기와 내 리듬은 모양이 달라서 함께 쳐도 두 소리가 다 들려요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 함께 쳐도 잘 들리게', minutes: 13, tool: 'mindmap',
            teacher: '"함께 칠 때 내 소리도, 짝 소리도 잘 들리게 하려면 어떻게 할까요?" 짝과 동시에 쳐 보고 방법을 찾게 한다. 둘 다 크게 치기만 하면 시끄러워진다는 것을 직접 해 보고 알게 한다. 짝과 역할을 바꾸어 한 번 더 친다.',
            task: '함께 칠 때 두 소리가 다 들리는 방법을 고르고, 짝과 역할을 바꾸어 겹쳐 쳐 봐요.',
            levels: CARD_LV,
            items: [
              { prompt: '함께 칠 때 두 소리가 다 잘 들리는 방법만 골라 보세요.', toolOptions: { mode: 'pick', basket: '잘 들리게 하는 방법', cards: ['짝 소리를 들으며 쳐요', '서로 다른 소리(무릎·손뼉)를 써요', '서로 더 크게 쳐요', '박을 함께 세고 시작해요', '짝보다 빨리 끝내요'] },
                target: { pick: ['짝 소리를 들으며 쳐요', '서로 다른 소리(무릎·손뼉)를 써요', '박을 함께 세고 시작해요'] }, difficulty: 0.25 },
              { prompt: '혼자 칠 때와 겹쳐 칠 때 들리는 것을 나누어 보세요.', toolOptions: { topic: '무엇이 들리나?', slots: ['혼자 칠 때', '겹쳐 칠 때'], cards: ['내 손뼉 소리만 들려요', '무릎 소리와 손뼉 소리가 함께 들려요', '소리가 하나라 조용해요', '소리가 풍성해져요'] },
                target: { sort: { '혼자 칠 때': ['내 손뼉 소리만 들려요', '소리가 하나라 조용해요'], '겹쳐 칠 때': ['무릎 소리와 손뼉 소리가 함께 들려요', '소리가 풍성해져요'] } }, difficulty: 0.2 },
              { prompt: '짝과 역할(박 지키기·리듬)을 바꾸어 동시에 두 번 쳐 봐요. 다 하면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '도입 물음으로 돌아간다. "함께 치면 내 소리가 사라졌나요?" 활동에서 들은 것을 바탕으로 대답하게 한다. 박 지키기와 리듬을 둘 다 해 본 학생에게 어느 쪽이 더 어려웠는지 묻는다. 다음 시간에는 모둠이 함께 합주한다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 1, blocks: ['q', 'e', 'h'], pattern: ['q', 'e', 'e', 'q', 'q'] }, prompt: '박 위에 겹쳐 칠 리듬이에요. 리듬 듣기를 누르고 그대로 놓아 보세요.', target: { rhythm: ['q', 'e', 'e', 'q', 'q'] }, difficulty: 0.2 },
          { type: 'choice', prompt: '짝과 함께 칠 때 내 소리도 들리게 하려면?', options: ['짝 소리를 들으며 쳐요', '짝보다 더 크게 쳐요'], answer: 0, difficulty: 0.1, explain: '서로 들으며 치면 두 소리가 다 들려요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '겹쳐 치기',
      items: [
        { type: 'table', prompt: '짝과 겹쳐 칠 때 맡은 것을 쓰세요.', columns: ['', '누가', '무슨 소리(무릎·손뼉 등)'], cells: [['박 지키기', '', ''], ['리듬', '', '']] },
        { type: 'choice', prompt: '함께 칠 때 내 소리는 어떻게 될까요?', options: ['짝 소리와 함께 들려요', '사라져요'], answer: '짝 소리와 함께 들려요' },
        { type: 'check', prompt: '겹쳐 칠 때 한 것에 ✓ 하세요.', options: ['박을 함께 세고 시작했어요', '짝 소리를 들으며 쳤어요', '역할을 바꾸어 쳤어요'] },
        { type: 'short', prompt: '박 지키기와 리듬 가운데 더 어려웠던 것과 그 까닭을 쓰세요.' },
      ],
      easy: {
        note: '쿵 쿵 쿵 쿵 위에 짝짝 짝!',
        items: [
          { type: 'choice', prompt: '박을 지키는 소리는?', options: ['쿵 쿵 쿵 쿵', '짝짝 짝 짝짝'], answer: '쿵 쿵 쿵 쿵' },
          { type: 'choice', prompt: '함께 칠 때 할 일은?', options: ['짝 소리를 들어요', '크게만 쳐요'], answer: '짝 소리를 들어요' },
          { type: 'draw', prompt: '짝과 겹쳐 치는 모습을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '박 수가 보이고, 반 박이 앞에만 있는 리듬을 따라 놓아요.',
      base: '반 박이 두 번 나오는 리듬을 따라 놓고, 겹쳐 칠 리듬을 지어요.',
      challenge: '두 박마다 치는 박 지키기를 놓고, 쉼표·8분쉼표가 섞인 블록으로 지어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 함께 치면 내 소리가 사라진다고 여긴다 → 무릎과 손뼉처럼 다른 소리로 겹쳐 쳐서 두 소리가 다 들리는 것을 직접 듣게 한다. ② 박 지키는 사람이 리듬을 따라가 박이 흔들린다 → 박 지키는 사람은 \'쿵 쿵 쿵 쿵\'을 입으로 함께 말하며 친다. ③ 서로 더 크게 치려 한다 → 여리게 겹쳐 치기를 한 번 해 보고 더 잘 들리는지 견준다.',
  }));

  lessons.push(L(32, {
    title: '모둠이 차례대로 들어가 합주하기',
    objective: '모둠 합주의 차례(시작 신호 → 한 사람씩 들어가기 → 함께 치기 → 끝 신호)를 알고, 맡은 리듬을 끝까지 쳐서 합주를 해낼 수 있다.',
    illustration: ART('a small group of paper children in a row, a leader raising a paper baton, each child holding a different classroom object instrument', '모둠 합주', [
      { motif: 'star', x: 240, y: 68, s: 0.6 }, { motif: 'flower', x: 100, y: 228, color: 'lavender' }, { motif: 'flower', x: 390, y: 228, color: 'rose' }]),
    safety: ['물건 악기는 살살 다루고, 지휘 막대는 휘두르지 않아요.', '선생님이 손을 들면 소리를 멈춰요.'],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"합주는 여럿이 함께 연주하는 거예요. 한꺼번에 시작하면 어떻게 될까요?" 반 전체가 동시에 각자 리듬을 쳐 보고 소리를 들어 본다. "이번에는 한 사람씩 차례로 들어가 볼게요." 선생님이 지휘하며 네 줄이 차례로 들어가게 한다. 시연 단추로 합주 차례 카드가 놓이는 모습을 보여 준다.',
        student: '반 전체가 한꺼번에 쳐 본 뒤, 지휘에 맞춰 줄마다 차례로 들어가 봐요.',
        demo: { tool: 'story', options: { slots: ['1', '2', '3'], cards: [{ id: 'start', text: '지휘자가 시작 신호를 줘요', motif: 'sun' }, { id: 'one', text: '한 사람씩 들어가요', motif: 'star' }, { id: 'end', text: '끝 신호에 함께 멈춰요', motif: 'flower' }], shuffle: false }, sequence: [{ order: ['start', 'one', 'end'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 합주 차례 정하기', minutes: 10, tool: 'story',
            teacher: '"합주 차례를 세워 봐요. 박 지키는 사람이 먼저 들어가면 무엇이 좋을까요?" 박이 먼저 있어야 다른 사람이 맞춰 들어갈 수 있다는 것을 이끌어 낸다. 모둠마다 지휘자를 정하고 시작·끝 신호(손 올리기·주먹 쥐기)를 약속한다.',
            task: '모둠 합주를 하는 차례대로 카드를 놓고, 지휘 신호를 약속해요.',
            levels: CARD_LV,
            items: [
              { prompt: '모둠 합주 차례대로 놓아 보세요.', toolOptions: { slots: ['1', '2', '3', '4', '5'], cards: [{ id: 'start', text: '지휘자가 손을 올려요', motif: 'sun' }, { id: 'beat', text: '박 지키는 친구가 먼저 쳐요', motif: 'star' }, { id: 'join', text: '리듬 친구들이 하나씩 들어가요', motif: 'bird' }, { id: 'all', text: '모두 함께 두 번 쳐요', motif: 'cloud' }, { id: 'end', text: '지휘자가 주먹을 쥐면 멈춰요', motif: 'flower' }] },
                target: { order: ['start', 'beat', 'join', 'all', 'end'] }, difficulty: 0.25,
                levels: { easy: { prompt: '모둠 합주 차례대로 놓아 보세요. 카드가 네 장이에요.', toolOptions: { slots: ['1', '2', '3', '4'], cards: [{ id: 'start', text: '지휘자가 손을 올려요', motif: 'sun' }, { id: 'beat', text: '박 지키는 친구가 먼저 쳐요', motif: 'star' }, { id: 'all', text: '모두 함께 쳐요', motif: 'cloud' }, { id: 'end', text: '지휘자가 주먹을 쥐면 멈춰요', motif: 'flower' }] }, target: { order: ['start', 'beat', 'all', 'end'] } } },
                hints: ['시작 신호와 끝 신호가 맨 앞과 맨 뒤예요.', '박이 먼저 있어야 리듬 친구가 맞춰 들어갈 수 있어요.', '손 올리기 → 박 지키기 → 하나씩 들어가기 → 모두 함께 → 주먹 쥐기 차례예요.'] },
              { prompt: '지휘 신호와 뜻을 이어 보세요.', toolOptions: { mode: 'match', topic: '지휘 신호', slots: [{ id: 's1', label: '손을 올려요' }, { id: 's2', label: '손을 아래로 내려요' }, { id: 's3', label: '주먹을 쥐어요' }], cards: ['시작해요', '여리게 쳐요', '멈춰요'] },
                target: { match: { s1: '시작해요', s2: '여리게 쳐요', s3: '멈춰요' } }, difficulty: 0.15 },
              { prompt: '합주할 때 모두 지킬 약속만 골라 보세요.', toolOptions: { mode: 'pick', basket: '합주 약속', cards: ['지휘자 손을 봐요', '내 차례 전에 먼저 쳐요', '친구 소리를 들으며 쳐요', '끝 신호가 나도 계속 쳐요'] },
                target: { pick: ['지휘자 손을 봐요', '친구 소리를 들으며 쳐요'] }, difficulty: 0.1 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 맡은 리듬으로 모둠 합주', minutes: 17, tool: 'keyboard',
            teacher: '모둠 안에서 박 지키기 한 사람, 리듬 세 사람을 정한다. "내가 칠 리듬을 블록으로 놓고, 지휘에 맞춰 들어가요." 합주를 두 번 하고, 두 번째에는 지휘자를 바꾼다. 들어갈 때를 놓친 학생에게 "다음 마디 첫 박에 들어가면 돼요"라고 말해 준다.',
            task: '모둠에서 맡은 리듬을 블록으로 놓고, 지휘에 맞춰 모둠 합주를 두 번 해요.',
            levels: RHY_LV,
            items: [
              { prompt: '박 지키기를 맡았다면 두 마디 내내 1박 블록만 놓아 보세요.', toolOptions: { measures: 2 }, target: { rhythm: ['q', 'q', 'q', 'q', 'q', 'q', 'q', 'q'] }, difficulty: 0.05,
                levels: { easy: { prompt: '박 지키기를 맡았다면 한 마디 내내 1박 블록만 놓아 보세요.', toolOptions: { measures: 1 }, target: { rhythm: ['q', 'q', 'q', 'q'] } } } },
              { prompt: '리듬을 맡았다면 쉼표를 넣어 두 마디 리듬을 지어 보세요.', toolOptions: { measures: 2 }, target: { beats: true, rests: 1 }, difficulty: 0.2,
                levels: { easy: { prompt: '리듬을 맡았다면 2박 블록을 넣어 한 마디 리듬을 지어 보세요.', toolOptions: { measures: 1 }, target: { beats: true, use: ['h'] } } } },
              { prompt: '모둠 합주를 두 번 하고, 해낸 것을 표시해요.', toolOptions: { measures: 1 }, target: { beats: true, selfCheck: ['지휘 신호에 맞춰 들어갔어요', '맡은 리듬을 끝까지 쳤어요', '끝 신호에 함께 멈췄어요'] }, difficulty: 0.1 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '모둠마다 합주를 한 번씩 들려주고, 다른 모둠은 "어느 친구 소리가 잘 들렸나요?" 하고 말한다. 처음 한꺼번에 쳤을 때와 차례로 들어갔을 때 무엇이 달랐는지 견주게 한다. 다음 시간에는 혼자 할 때와 함께 할 때를 견주어 본다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'story', options: { slots: ['1', '2', '3'], cards: [{ id: 'beat', text: '박 지키는 친구가 쳐요', motif: 'star' }, { id: 'join', text: '리듬 친구가 들어가요', motif: 'bird' }, { id: 'end', text: '주먹 신호에 멈춰요', motif: 'flower' }] }, prompt: '합주에서 일어나는 차례대로 놓아 보세요.', target: { order: ['beat', 'join', 'end'] }, difficulty: 0.15 },
          { type: 'choice', prompt: '합주에서 들어갈 때를 놓쳤어요. 어떻게 할까요?', options: ['다음 마디 첫 박에 들어가요', '그만둬요', '크게 쳐서 따라잡아요'], answer: 0, difficulty: 0.15, explain: '박을 세다가 다음 마디 첫 박에 들어가면 돼요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '모둠 합주',
      items: [
        { type: 'table', prompt: '우리 모둠 합주에서 맡은 것을 쓰세요.', columns: ['이름', '맡은 것(지휘·박 지키기·리듬)', '쓴 소리'], rows: 4 },
        { type: 'figure', wide: true, prompt: '내가 맡은 리듬을 블록 칸에 그리세요.', tool: 'keyboard', figures: [{ options: { mode: 'rhythm', meter: 4, measures: 2, blocks: ['q', 'e', 'h', 'qr'] }, caption: '' }], answer: '내가 맡은 리듬' },
        { type: 'check', prompt: '합주에서 해낸 것에 ✓ 하세요.', options: ['신호에 맞춰 들어갔어요', '끝까지 쳤어요', '함께 멈췄어요'] },
        { type: 'short', prompt: '한꺼번에 칠 때와 차례로 들어갈 때 다른 점을 쓰세요.' },
      ],
      easy: {
        note: '손 올리면 시작, 주먹 쥐면 멈춤!',
        items: [
          { type: 'choice', prompt: '주먹을 쥐는 신호는?', options: ['멈춰요', '시작해요'], answer: '멈춰요' },
          { type: 'choice', prompt: '합주에서 먼저 들어가는 사람은?', options: ['박 지키는 친구', '아무나'], answer: '박 지키는 친구' },
          { type: 'draw', prompt: '우리 모둠이 합주하는 모습을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '차례 카드가 네 장이고, 맡은 리듬을 한 마디로 놓아요.',
      base: '다섯 장 차례를 세우고, 두 마디 리듬을 맡아요.',
      challenge: '8분쉼표까지 쓴 두 마디 리듬을 맡고, 두 번째 합주에서 지휘를 해 봐요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 지휘 신호를 보지 않고 먼저 시작한다 → 시작 전 모두 지휘자 손을 보게 하는 \'눈 맞추기\'를 넣는다. ② 들어갈 때를 놓치면 멈춰 버린다 → 다음 마디 첫 박에 들어가면 된다는 것을 미리 알려 준다. ③ 지휘자가 되고 싶어 다툰다 → 두 번째 합주에서 반드시 바꾼다고 약속한다. 합주 소리가 커지면 \'손을 아래로\' 신호로 여리게 치는 연습을 한 번 한다.',
  }));

  // ───────────────────────── 33~36차시: 혼자와 함께 견주고, 다음에 함께 해 볼 것 정하기 ─────────────────────────

  lessons.push(L(33, {
    title: '혼자 칠 때와 함께 칠 때 좋은 점 견주기',
    objective: '같은 리듬을 혼자 칠 때와 친구와 함께 칠 때를 해 보고, 각각 좋은 점을 나누어 말할 수 있다.',
    illustration: ART('on the left one paper child clapping alone, on the right four paper children clapping together, a balance scale drawn between them', '혼자일 때, 함께일 때', [
      { motif: 'star', x: 120, y: 84, s: 0.6 }, { motif: 'sun', x: 360, y: 76, s: 0.6 }, { motif: 'flower', x: 400, y: 228, color: 'mint' }]),
    safety: BODY_SAFE,
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '한 학생이 혼자 \'짝 짝 짝짝 짝\'을 치고, 이어 반 전체가 같은 리듬을 함께 친다. "두 번 들은 소리가 어떻게 달랐나요?" \'크다\', \'신난다\', \'혼자는 잘 들린다\' 같은 대답을 모두 받는다. "혼자가 언제나 더 편하고 좋을까요?" 하고 묻고, 오늘 두 가지를 모두 해 보며 견주자고 한다. 시연 단추로 카드가 나뉘는 모습을 보여 준다.',
        student: '친구 한 명의 손뼉과 반 전체 손뼉을 듣고, 어떻게 달랐는지 말해요.',
        demo: { tool: 'mindmap', options: { topic: '혼자와 함께', slots: ['혼자 할 때', '함께 할 때'], cards: ['내 소리가 또렷이 들려요', '소리가 크고 신나요'], shuffle: false }, sequence: [{ sort: { '혼자 할 때': ['내 소리가 또렷이 들려요'], '함께 할 때': ['소리가 크고 신나요'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 혼자 쳐 보고 함께 쳐 보기', minutes: 12, tool: 'keyboard',
            teacher: '"오늘 함께 칠 리듬을 블록으로 놓아요. 먼저 혼자 쳐 보고, 다음에 모둠이 함께 쳐요." 혼자 칠 때는 자리에서 작게, 함께 칠 때는 모둠이 둥글게 서서 친다. 두 번 해 본 뒤 무엇이 달랐는지 짝과 한 가지씩 말하게 한다.',
            task: '오늘 칠 리듬을 블록으로 놓고, 혼자 한 번·모둠과 함께 한 번 쳐 봐요.',
            levels: RHY_LV,
            items: [
              { prompt: '오늘 칠 리듬이에요. 리듬 듣기를 누르고 그대로 놓아 보세요.', toolOptions: { measures: 1, pattern: ['q', 'q', 'e', 'e', 'q'] }, target: { rhythm: ['q', 'q', 'e', 'e', 'q'] }, difficulty: 0.2,
                levels: { easy: { prompt: '오늘 칠 리듬이에요. 리듬 듣기를 누르고 그대로 놓아 보세요. 2박 블록이 있어요.', toolOptions: { pattern: ['q', 'q', 'h'] }, target: { rhythm: ['q', 'q', 'h'] } } } },
              { prompt: '놓은 리듬을 자리에서 혼자 작게 두 번 쳐 봐요. 다 하면 "다 했어요"를 누르세요.', free: true, talk: true },
              { prompt: '같은 리듬을 모둠이 둥글게 서서 함께 두 번 쳐 봐요. 다 하면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 좋은 점 나누기', minutes: 15, tool: 'mindmap',
            teacher: '"혼자 칠 때 좋은 점과 함께 칠 때 좋은 점을 나누어 볼까요?" 한쪽만 좋다고 말하는 학생에게 "다른 쪽에도 좋은 점이 하나 있을까요?" 하고 되묻는다. 혼자는 내 소리를 잘 들을 수 있고, 함께는 소리가 풍성하고 서로 도울 수 있다는 것을 정리한다.',
            task: '혼자 할 때와 함께 할 때의 좋은 점을 나누고, 어울리는 때를 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '혼자 할 때와 함께 할 때의 좋은 점을 나누어 보세요.', toolOptions: { topic: '어떤 점이 좋을까?', slots: ['혼자 할 때', '함께 할 때'], cards: ['내 소리를 잘 들을 수 있어요', '틀려도 친구가 도와줘요', '내 빠르기로 연습해요', '소리가 커지고 풍성해요', '조용히 생각할 수 있어요', '함께 해내서 더 신나요'] },
                target: { sort: { '혼자 할 때': ['내 소리를 잘 들을 수 있어요', '내 빠르기로 연습해요', '조용히 생각할 수 있어요'], '함께 할 때': ['틀려도 친구가 도와줘요', '소리가 커지고 풍성해요', '함께 해내서 더 신나요'] } }, difficulty: 0.25,
                levels: { easy: { prompt: '혼자 할 때와 함께 할 때의 좋은 점을 나누어 보세요. 카드가 네 장이에요.', toolOptions: { cards: ['내 소리를 잘 들을 수 있어요', '틀려도 친구가 도와줘요', '내 빠르기로 연습해요', '소리가 커지고 풍성해요'] }, target: { sort: { '혼자 할 때': ['내 소리를 잘 들을 수 있어요', '내 빠르기로 연습해요'], '함께 할 때': ['틀려도 친구가 도와줘요', '소리가 커지고 풍성해요'] } } } },
                hints: ['혼자 쳤을 때와 함께 쳤을 때를 떠올려요.', '\'내\'가 들어간 카드와 \'조용히\' 카드는 혼자일 때, \'친구\'·\'함께\'·\'풍성\' 카드는 함께일 때 좋은 점이에요.', '혼자: 내 소리, 내 빠르기, 조용히 생각 / 함께: 친구가 도움, 풍성한 소리, 함께 해내서 신남.'] },
              { prompt: '이럴 때는 혼자가 좋을까요, 함께가 좋을까요? 이어 보세요.', toolOptions: { mode: 'match', topic: '언제가 좋을까?', slots: [{ id: 's1', label: '새 리듬을 처음 익힐 때' }, { id: 's2', label: '운동회에서 응원할 때' }], cards: ['혼자 천천히', '모두 함께'] },
                target: { match: { s1: '혼자 천천히', s2: '모두 함께' } }, difficulty: 0.2,
                conclude: '혼자 할 때와 함께 할 때는 저마다 좋은 점이 있어요.' },
              { prompt: '혼자와 함께 가운데 오늘 더 좋았던 쪽을 짝에게 말하고, 다른 쪽의 좋은 점도 하나 말해요. 다 하면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '도입 물음으로 돌아간다. "혼자가 언제나 더 편하고 좋을까요?" 오늘 해 본 것을 바탕으로 대답하게 한다. 함께할 때 마음이 어떤지는 다음 시간에 더 알아본다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '어떤 점이 좋을까?', slots: ['혼자 할 때', '함께 할 때'], cards: ['내 빠르기로 해요', '서로 도와줘요'] }, prompt: '혼자 할 때와 함께 할 때의 좋은 점을 나누어 보세요.', target: { sort: { '혼자 할 때': ['내 빠르기로 해요'], '함께 할 때': ['서로 도와줘요'] } }, difficulty: 0.1 },
          { type: 'choice', prompt: '혼자 할 때와 함께 할 때는?', options: ['혼자가 언제나 더 좋아요', '둘 다 좋은 점이 있어요', '함께가 언제나 더 좋아요'], answer: 1, difficulty: 0.15, explain: '때에 따라 혼자도, 함께도 좋아요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '혼자와 함께',
      items: [
        { type: 'table', prompt: '혼자 칠 때와 함께 칠 때 좋은 점을 쓰세요.', columns: ['', '좋은 점'], cells: [['혼자 칠 때', ''], ['함께 칠 때', '']] },
        { type: 'choice', prompt: '새 리듬을 처음 익힐 때 좋은 것은?', options: ['혼자 천천히', '모두 함께 빠르게'], answer: '혼자 천천히' },
        { type: 'short', prompt: '오늘 더 좋았던 쪽과 그 까닭을 쓰세요.' },
        { type: 'draw', prompt: '모둠이 함께 손뼉 치는 모습을 그리세요.' },
      ],
      easy: {
        note: '혼자도 좋고, 함께도 좋아요.',
        items: [
          { type: 'choice', prompt: '함께 칠 때 소리는?', options: ['커지고 풍성해요', '작아져요'], answer: '커지고 풍성해요' },
          { type: 'choice', prompt: '혼자 칠 때 좋은 점은?', options: ['내 소리가 잘 들려요', '친구가 도와줘요'], answer: '내 소리가 잘 들려요' },
          { type: 'draw', prompt: '혼자 손뼉 치는 내 모습을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '카드 네 장을 두 가지로 나누고, 2박 블록이 있는 리듬을 놓아요.',
      base: '카드 여섯 장을 나누고, 반 박이 있는 리듬을 놓아요.',
      challenge: '함정 블록 속에서 리듬을 놓고, 혼자·함께 좋은 점을 두 가지씩 말해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 혼자가 언제나 편하다고만 말한다 → 함께 쳤을 때 소리가 풍성해진 것을 다시 들려준다. ② 반대로 함께가 언제나 좋다고 한다 → 새 리듬을 익힐 때는 혼자 천천히가 좋다는 예를 든다. ③ 좋은 점을 \'재미있어요\'로만 말한다 → 소리가 어땠는지, 마음이 어땠는지로 나누어 묻는다. 혼자 치기는 자리에서 작게 해 다른 친구 소리가 섞이지 않게 한다.',
  }));

  lessons.push(L(34, {
    title: '함께 연주할 때 친구 마음 헤아려 행동 고르기',
    objective: '함께 연주하다 생기는 일(친구가 틀림, 차례 다툼)에서 친구 마음을 헤아리고, 함께하기 좋은 행동을 고를 수 있다.',
    illustration: ART('paper children in a music circle, one child looking worried after a mistake, another child offering an encouraging thumbs up', '함께할 때 마음', [
      { motif: 'star', x: 110, y: 84, s: 0.6 }, { motif: 'flower', x: 380, y: 228, color: 'rose' }, { motif: 'cloud', x: 360, y: 82 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '인형 두 개로 짧은 장면을 보여 준다. 합주 중 한 인형이 박을 놓치자 다른 인형이 "너 때문에 망쳤어!" 하고 말한다. "박을 놓친 친구 마음은 어떨까요? 뭐라고 말해 주면 좋을까요?" 몇 가지 말을 들어 본 뒤, 같은 장면을 \'괜찮아, 다음 마디에 같이 들어가자\'로 다시 보여 준다. 시연 단추로 마음 카드가 놓이는 모습을 보여 준다.',
        student: '인형 장면을 보고, 박을 놓친 친구의 얼굴을 따라 지어 보며 마음을 말해요.',
        demo: { tool: 'emotion', options: { cards: ['속상함', '고마움'], slots: [{ id: 's1', label: '"너 때문에 망쳤어!"를 들었어요' }, { id: 's2', label: '"괜찮아, 같이 들어가자"를 들었어요' }] }, sequence: [{ match: { s1: '속상함', s2: '고마움' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 이럴 때 어떻게 할까', minutes: 14, tool: 'emotion',
            teacher: '"함께 연주하다 보면 이런 일이 생겨요. 어떻게 하면 모두 즐거울까요?" 고른 뒤 결과를 함께 읽고, 다른 길을 골랐다면 어땠을지도 이야기한다. 학생이 실제로 겪었던 일을 한 가지씩 들려주게 하되 친구 이름은 말하지 않게 한다.',
            task: '함께 연주하다 생긴 일에서 친구 마음을 헤아려 알맞은 행동을 골라요.',
            levels: { easy: { live: true, instant: true, steps: 3 }, base: {}, challenge: {} },
            items: [
              { prompt: '합주 중에 짝이 박을 놓쳤어요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '모둠 합주를 하는데, 짝 서아가 박을 놓쳐 혼자 멈추었어요.', choices: [
                { id: 'blame', text: '"너 때문에 틀렸잖아!" 하고 말해요', result: '서아가 울상이 되어 다시 치지 못해요.', mood: '속상함', why: '박을 놓친 서아의 마음을 떠올려 봐요.' },
                { id: 'help', text: '"다음 마디에 같이 들어가자" 하고 작게 말해요', result: '서아가 다음 마디에 다시 들어와 끝까지 함께 쳐요.', mood: '고마움' }] }, target: { choice: 'help' }, difficulty: 0.05 },
              { prompt: '모두 지휘자를 하고 싶어 해요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '모둠 합주 지휘자를 정하는데, 하준이와 민지가 둘 다 하고 싶어 해요.', choices: [
                { id: 'grab', text: '먼저 지휘 막대를 잡은 사람이 해요', result: '못 한 친구가 토라져 합주를 하지 않아요.', mood: '서운함', why: '지휘를 못 한 친구 마음은 어떨까요?' },
                { id: 'turn', text: '한 번씩 돌아가며 지휘해요', result: '두 사람 모두 지휘를 해 보고 합주가 두 번 즐거워요.', mood: '기쁨' },
                { id: 'quit', text: '지휘자 없이 아무렇게나 쳐요', result: '시작과 끝이 맞지 않아 소리가 엉켜요.', mood: '답답함', why: '지휘자가 없으면 합주가 어떻게 될까요?' }] }, target: { choice: 'turn' }, difficulty: 0.15 },
              { prompt: '친구가 내 소리를 덮을 만큼 크게 쳐요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '함께 치는데, 옆 친구가 너무 크게 쳐서 내 소리가 안 들려요.', choices: [
                { id: 'louder', text: '나도 더 크게 쳐요', result: '둘 다 소리가 커져 아무 소리도 잘 안 들려요.', mood: '답답함', why: '둘 다 크게 치면 어떻게 될까요?' },
                { id: 'ask', text: '"조금 여리게 쳐 줄래?" 하고 부탁해요', result: '친구가 여리게 치고, 두 소리가 함께 잘 들려요.', mood: '편안함' }] }, target: { choice: 'ask' }, difficulty: 0.1 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 함께할 때 힘이 되는 말', minutes: 12, tool: 'emotion',
            teacher: '"함께 연주할 때 친구에게 힘이 되는 말을 찾아봐요." 고른 말을 짝에게 실제 목소리로 말해 보게 한다. 끝으로 모둠이 한 번 합주하고, 서로에게 힘이 되는 말을 한 가지씩 건넨다.',
            task: '함께 연주할 때 들으면 어떤 마음일지 알아보고, 힘이 되는 말을 짝에게 건네요.',
            levels: { easy: { live: true, instant: true, steps: 3 }, base: {}, challenge: {} },
            items: [
              { prompt: '그 말을 들은 친구의 마음에 어울리는 카드를 놓아 보세요.', toolOptions: { cards: ['고마움', '속상함', '기쁨'], slots: [{ id: 's1', label: '"괜찮아, 다시 하자"를 들었어요' }, { id: 's2', label: '"너는 빠져!"를 들었어요' }, { id: 's3', label: '"우리 같이 해냈다!"를 들었어요' }] },
                target: { match: { s1: '고마움', s2: '속상함', s3: '기쁨' } }, difficulty: 0.15,
                levels: { easy: { prompt: '그 말을 들은 친구의 마음에 어울리는 카드를 놓아 보세요. 두 장이에요.', toolOptions: { cards: ['고마움', '속상함'], slots: [{ id: 's1', label: '"괜찮아, 다시 하자"를 들었어요' }, { id: 's2', label: '"너는 빠져!"를 들었어요' }] }, target: { match: { s1: '고마움', s2: '속상함' } } } } },
              { prompt: '모둠 합주를 한 번 하고, 모둠 친구에게 힘이 되는 말을 하나씩 건네요. 다 하면 "다 했어요"를 누르세요.', free: true, talk: true },
              { prompt: '합주를 끝낸 뒤 친구에게 어떻게 말할까요?', toolOptions: { mode: 'branch', situation: '모둠 합주가 끝났어요. 중간에 조금 틀렸지만 끝까지 함께 쳤어요.', choices: [
                { id: 'thanks', text: '"끝까지 같이 해 줘서 고마워" 하고 말해요', result: '모두 웃으며 다음에도 함께 하자고 해요.', mood: '뿌듯함' },
                { id: 'blame', text: '"누가 틀렸어?" 하고 찾아내요', result: '틀린 친구가 고개를 숙이고 분위기가 가라앉아요.', mood: '서운함', why: '틀린 친구를 찾으면 그 친구 마음은 어떨까요?' }] }, target: { choice: 'thanks' }, difficulty: 0.1 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 친구에게 들은 말 가운데 힘이 났던 말은 무엇인가요?" 두세 명이 말하게 한다. 힘이 되는 말을 칠판 \'함께 말 나무\'에 붙여 다음 합주 때 다시 보게 한다. 다음 시간에는 함께 친 리듬에서 박이 틀린 곳을 모둠이 함께 고친다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'emotion', options: { mode: 'branch', situation: '함께 치는데 내 앞 친구가 리듬을 잊어버려 멈추었어요.', choices: [
            { id: 'laugh', text: '친구를 보며 웃어요', result: '친구가 부끄러워 다시 치지 못해요.', mood: '부끄러움', why: '웃음을 들은 친구 마음을 떠올려 봐요.' },
            { id: 'show', text: '친구 옆에서 리듬을 작게 같이 쳐 줘요', result: '친구가 리듬을 다시 떠올려 함께 쳐요.', mood: '고마움' }] }, prompt: '친구가 리듬을 잊었어요. 어떻게 할까요?', target: { choice: 'show' }, difficulty: 0.1 },
          { type: 'choice', prompt: '합주 중에 친구가 틀렸을 때 힘이 되는 말은?', options: ['"너 때문이야!"', '"괜찮아, 같이 하자"'], answer: 1, difficulty: 0.05, explain: '힘이 되는 말은 친구가 다시 함께할 수 있게 해 줘요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '함께할 때 마음',
      items: [
        { type: 'table', prompt: '말을 들은 친구의 마음을 쓰세요.', columns: ['들은 말', '친구 마음'], cells: [['"괜찮아, 다시 하자"', ''], ['"너는 빠져!"', '']] },
        { type: 'choice', prompt: '둘 다 지휘자를 하고 싶을 때는?', options: ['돌아가며 해요', '먼저 잡은 사람이 해요'], answer: '돌아가며 해요' },
        { type: 'short', prompt: '함께 연주할 때 친구에게 해 주고 싶은 말을 쓰세요.' },
        { type: 'draw', prompt: '친구를 도와주는 내 모습을 그리세요.' },
      ],
      easy: {
        note: '친구 마음을 떠올려요.',
        items: [
          { type: 'choice', prompt: '친구가 틀렸을 때 할 말은?', options: ['괜찮아', '너 때문이야'], answer: '괜찮아' },
          { type: 'choice', prompt: '"고마워"를 들으면 마음은?', options: ['기뻐요', '속상해요'], answer: '기뻐요' },
          { type: 'draw', prompt: '함께 웃는 모둠 친구들을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '고르면 결과를 바로 보여 주고, 마음 카드가 두 장이에요.',
      base: '세 가지 길 가운데 골라 보고, 마음 카드 세 장을 이어요.',
      challenge: '고른 뒤 다른 길을 골랐다면 어땠을지 짝에게 말하고, 힘이 되는 말을 직접 지어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 틀린 친구를 탓하는 것이 맞다고 여긴다 → 내가 틀렸을 때 듣고 싶은 말을 떠올리게 한다. ② 실제 겪은 일을 말하며 친구 이름을 꺼낸다 → \'어떤 친구가\'로 바꾸어 말하게 한다. ③ 힘이 되는 말을 작게 말해 들리지 않는다 → 짝 귀에 들릴 만큼 또박또박 말하게 한다. 이 차시 장면은 마음 다루기이므로 정답보다 그 행동을 골랐을 때 친구 마음이 어떨지 이야기하는 데 시간을 쓴다.',
  }));

  lessons.push(L(35, {
    title: '함께 친 리듬에서 박이 틀린 마디 고치기',
    objective: '모둠이 함께 친 리듬에서 박이 모자라거나 넘치는 마디를 찾아 고치고, 고친 리듬을 함께 다시 칠 수 있다.',
    illustration: ART('a paper rhythm strip with two measures, one measure overflowing with too many blocks, group of children pointing and fixing it together', '박을 맞춰 고쳐요', [
      { motif: 'star', x: 240, y: 70, s: 0.6 }, { motif: 'tree', x: 90, y: 214 }, { motif: 'flower', x: 400, y: 228, color: 'buttercup' }]),
    safety: BODY_SAFE,
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '칠판에 \'짝 짝 짝— 짝\'(다섯 박) 블록을 붙이고 반 전체가 \'하나 둘 셋 넷\'에 맞추어 쳐 본다. "어? 넷에서 끝나지 않고 한 박이 남았어요. 어디를 고칠까요?" 블록을 하나 빼면 네 박이 된다는 것을 함께 찾는다. "틀린 곳을 함께 찾으면 함께 고칠 수 있어요." 시연 단추로 고친 리듬이 놓이는 모습을 보여 준다.',
        student: '칠판 리듬을 박에 맞추어 쳐 보고, 남은 박이 있는지 손가락으로 세어요.',
        demo: { tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 1, blocks: ['q', 'h'] }, sequence: [{ rhythm: ['q', 'q', 'h'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 박이 맞지 않는 마디 고치기', minutes: 15, tool: 'keyboard',
            teacher: '"판에 모둠이 함께 친 리듬이 놓여 있어요. 마디마다 박을 더해 넷이 되는지 세어 봐요." 넘친 마디는 블록을 빼고, 모자란 마디는 블록을 더하게 한다. 맞은 마디까지 모두 지우는 학생에게 "넷이 맞는 마디는 그대로 두어요"라고 말한다. 고친 리듬은 모둠이 다시 함께 친다.',
            task: '모둠 리듬에서 박이 넘치거나 모자란 마디를 찾아, 네 박이 되게 고쳐요.',
            levels: RHY_LV,
            items: [
              { prompt: '한 마디에 박이 넘쳤어요. 블록을 고쳐 네 박이 되게 해 보세요.', toolOptions: { measures: 1 }, state: { rhythm: ['q', 'q', 'h', 'q'] }, target: { beats: true }, difficulty: 0.15 },
              { prompt: '둘째 마디가 모자라요. 블록을 더해 두 마디 모두 네 박이 되게 해 보세요.', toolOptions: { measures: 2 }, state: { rhythm: ['h', 'q', 'q', 'q', 'q'] }, target: { beats: true }, difficulty: 0.2,
                hints: ['마디마다 박을 따로 더해요.', '첫째 마디는 2 + 1 + 1 = 4로 맞아요. 둘째 마디를 세어 봐요.', '둘째 마디는 1 + 1 = 2라 두 박이 모자라요. 2박 블록 하나나 1박 블록 두 개를 더해요.'],
                levels: { easy: { prompt: '마디가 모자라요. 블록을 더해 네 박이 되게 해 보세요.', toolOptions: { measures: 1 }, state: { rhythm: ['h'] }, target: { beats: true } } } },
              { prompt: '첫째 마디가 넘쳐 블록이 마디줄을 넘어갔어요. 두 마디 모두 네 박이 되게 고쳐 보세요.', toolOptions: { measures: 2 }, state: { rhythm: ['q', 'q', 'q', 'h', 'q', 'q'] }, target: { beats: true }, difficulty: 0.3,
                levels: { easy: { prompt: '마디가 넘쳤어요. 2박 블록을 1박 블록으로 바꾸어 네 박이 되게 해 보세요.', toolOptions: { measures: 1 }, state: { rhythm: ['q', 'q', 'h', 'h'] }, target: { beats: true } } },
                conclude: '마디마다 박을 더해 세면 틀린 곳을 쉽게 찾을 수 있어요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 함께 고치는 말', minutes: 12, tool: 'mindmap',
            teacher: '"모둠에서 틀린 곳을 찾았을 때 뭐라고 말하면 좋을까요?" 탓하는 말과 함께 고치는 말을 견주어 보게 한다. 고른 말로 모둠이 고친 리듬을 다시 친다. 34차시 \'함께 말 나무\'의 말을 써도 좋다고 알려 준다.',
            task: '모둠에서 틀린 곳을 찾았을 때 쓸 말을 고르고, 고친 리듬을 함께 다시 쳐요.',
            levels: CARD_LV,
            items: [
              { prompt: '틀린 곳을 찾았을 때 함께 고치는 말만 골라 보세요.', toolOptions: { mode: 'pick', basket: '함께 고치는 말', cards: ['"여기 한 박 남는 것 같아, 같이 세어 볼까?"', '"누가 이렇게 놓았어?"', '"이 블록을 빼면 어때?"', '"다 틀렸잖아!"'] },
                target: { pick: ['"여기 한 박 남는 것 같아, 같이 세어 볼까?"', '"이 블록을 빼면 어때?"'] }, difficulty: 0.15 },
              { prompt: '틀린 곳을 함께 고치는 차례대로 놓아 보세요.', toolOptions: { mode: 'match', topic: '함께 고치기', slots: [{ id: 's1', label: '먼저' }, { id: 's2', label: '그다음' }, { id: 's3', label: '마지막' }], cards: ['마디마다 박을 함께 세어요', '블록을 빼거나 더해요', '고친 리듬을 함께 쳐요'] },
                target: { match: { s1: '마디마다 박을 함께 세어요', s2: '블록을 빼거나 더해요', s3: '고친 리듬을 함께 쳐요' } }, difficulty: 0.15 },
              { prompt: '모둠이 고친 리듬을 다시 함께 두 번 쳐 봐요. 다 하면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"고친 리듬을 함께 치니 처음과 어떻게 달랐나요?" 박이 맞아 끝이 함께 맞았다는 것을 이끌어 낸다. 함께 찾고 고친 모둠을 칭찬한다. 다음 시간에는 혼자 또는 함께 해 보고 싶은 소리 놀이를 정한다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 1, blocks: ['q', 'h'] }, state: { rhythm: ['h', 'h', 'q'] }, prompt: '마디에 박이 넘쳤어요. 고쳐서 네 박이 되게 해 보세요.', target: { beats: true }, difficulty: 0.15 },
          { type: 'choice', prompt: '\'짝 짝 짝\'(1+1+1)은 네 박에서 몇 박이 모자랄까요?', options: ['한 박', '두 박'], answer: 0, difficulty: 0.15, explain: '1+1+1 = 3, 네 박에서 한 박이 모자라요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '박 맞춰 고치기',
      items: [
        { type: 'table', prompt: '마디의 박을 더하고, 넷이 맞으면 ○, 아니면 × 하세요.', columns: ['마디', '박을 더하면', '○ / ×'], cells: [['짝 짝 짝— (1+1+2)', '', ''], ['짝— 짝— 짝 (2+2+1)', '', ''], ['짝 짝 (1+1)', '', '']] },
        { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '짝— 짝 (2+1)에 ___박을 더하면 네 박이에요.', answer: '1' },
        { type: 'check', prompt: '모둠에서 고칠 때 한 것에 ✓ 하세요.', options: ['박을 함께 세었어요', '함께 고치는 말을 썼어요', '고친 리듬을 함께 쳤어요'] },
        { type: 'short', prompt: '모둠 친구가 해 준 말 가운데 도움이 된 말을 쓰세요.' },
      ],
      easy: {
        note: '마디마다 더해서 넷!',
        items: [
          { type: 'choice', prompt: '짝 짝 짝 짝 짝은?', options: ['한 박 넘쳐요', '꼭 맞아요'], answer: '한 박 넘쳐요' },
          { type: 'choice', prompt: '틀린 곳을 찾으면?', options: ['함께 고쳐요', '탓해요'], answer: '함께 고쳐요' },
          { type: 'draw', prompt: '모둠이 함께 고치는 모습을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '한 마디만 고치고, 박 수가 보여요.',
      base: '두 마디에서 모자란 마디와 넘친 마디를 찾아 고쳐요.',
      challenge: '쉼표·8분쉼표 블록까지 써서 고치고, 고친 리듬을 모둠이 겹쳐 쳐요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 마디 구분 없이 블록 전체를 센다 → 마디줄에 손을 대고 마디마다 따로 센다. ② 넘친 마디의 마지막 블록만 빼려 한다 → 블록을 바꾸는 방법(2박을 1박으로)도 있다는 것을 보여 준다. ③ 틀린 것을 찾으면 누가 틀렸는지 따진다 → \'누가\'가 아니라 \'어디가\'를 찾는 활동이라고 말해 준다.',
  }));

  lessons.push(L(36, {
    title: '다음에 함께 해 볼 소리 놀이 정하기',
    objective: '13~35차시에 해 본 소리 놀이를 떠올려, 다음에 혼자 또는 함께 해 보고 싶은 놀이를 고르고 까닭을 말할 수 있다.',
    illustration: ART('a paper bulletin board with small cards of sound games: echo crown, body drum, rhythm blocks, group conductor, a child pinning a star on one', '다음엔 무엇을 할까?', [
      { motif: 'star', x: 330, y: 84, s: 0.7 }, { motif: 'tree', x: 90, y: 214 }, { motif: 'flower', x: 400, y: 228, color: 'lavender' }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '칠판에 지금까지 한 소리 놀이 그림 카드(메아리 놀이, 몸 악기, 물건 소리, 네 박 짓기, 주고받기, 겹쳐 치기, 모둠 합주)를 붙인다. "가장 재미있었던 놀이는 무엇인가요? 혼자 했나요, 함께 했나요?" 손을 들어 두세 놀이에 표시한다. 시연 단추로 놀이 카드가 나뉘는 모습을 보여 준다.',
        student: '칠판 놀이 카드를 보며 재미있었던 놀이에 손을 들어요.',
        demo: { tool: 'mindmap', options: { topic: '어떻게 했나?', slots: ['혼자 했어요', '함께 했어요'], cards: ['네 박 리듬 짓기', '모둠 합주'], shuffle: false }, sequence: [{ sort: { '혼자 했어요': ['네 박 리듬 짓기'], '함께 했어요': ['모둠 합주'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 해 본 소리 놀이 돌아보기', minutes: 12, tool: 'mindmap',
            teacher: '"놀이를 혼자 했는지, 함께 했는지 나누어 봐요." 둘 다 해 본 놀이는 주로 어떻게 했는지 떠올리게 한다. 놀이마다 무엇이 재미있었는지 짝과 한 가지씩 말하게 한다.',
            task: '지금까지 해 본 소리 놀이를 혼자 한 것과 함께 한 것으로 나누고, 재미있었던 점을 말해요.',
            levels: CARD_LV,
            items: [
              { prompt: '해 본 소리 놀이를 주로 어떻게 했는지 나누어 보세요.', toolOptions: { topic: '어떻게 했나?', slots: ['혼자 했어요', '함께 했어요'], cards: ['블록으로 네 박 짓기', '짝과 여덟 박 주고받기', '건반으로 가락 짓기', '모둠 메아리 놀이', '박 지키기 위에 겹쳐 치기', '그림 악보 만들기'] },
                target: { sort: { '혼자 했어요': ['블록으로 네 박 짓기', '건반으로 가락 짓기', '그림 악보 만들기'], '함께 했어요': ['짝과 여덟 박 주고받기', '모둠 메아리 놀이', '박 지키기 위에 겹쳐 치기'] } }, difficulty: 0.25,
                levels: { easy: { prompt: '해 본 소리 놀이를 주로 어떻게 했는지 나누어 보세요. 카드가 네 장이에요.', toolOptions: { cards: ['블록으로 네 박 짓기', '짝과 여덟 박 주고받기', '건반으로 가락 짓기', '모둠 메아리 놀이'] }, target: { sort: { '혼자 했어요': ['블록으로 네 박 짓기', '건반으로 가락 짓기'], '함께 했어요': ['짝과 여덟 박 주고받기', '모둠 메아리 놀이'] } } } },
                hints: ['놀이 이름에 \'짝\'·\'모둠\'이 있는지 살펴요.', '짝이나 모둠이 있어야 하는 놀이는 함께 한 놀이예요.', '주고받기·메아리 놀이·겹쳐 치기는 함께, 네 박 짓기·가락 짓기·그림 악보는 혼자 했어요.'] },
              { prompt: '놀이와 그 놀이에서 재미있었던 점을 이어 보세요.', toolOptions: { mode: 'match', topic: '무엇이 재미있었나?', slots: [{ id: 's1', label: '메아리 놀이' }, { id: 's2', label: '몸 악기' }, { id: 's3', label: '모둠 합주' }], cards: ['술래가 되어 바꾸어 냈어요', '발과 손으로 쿵 짝을 쳤어요', '지휘에 맞춰 함께 들어갔어요'] },
                target: { match: { s1: '술래가 되어 바꾸어 냈어요', s2: '발과 손으로 쿵 짝을 쳤어요', s3: '지휘에 맞춰 함께 들어갔어요' } }, difficulty: 0.15 },
              { prompt: '가장 재미있었던 놀이와 그 까닭을 짝에게 말해요. 다 하면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 다음에 해 볼 놀이 정하기', minutes: 14, tool: 'story',
            teacher: '"다음에 해 보고 싶은 놀이를 하나 정해요. 혼자 할까요, 함께 할까요?" 말틀 \'다음에는 ○○를 ○○ 해 보고 싶어요. 왜냐하면 ○○\'를 칠판에 붙인다. 정한 놀이를 칠판 \'다음 놀이판\'에 별 스티커로 붙이고, 가장 많은 별을 받은 놀이는 다음 소리 시간에 한다고 약속한다.',
            task: '다음에 해 볼 놀이 이야기의 빈칸을 채우고, 내 놀이를 정해 다음 놀이판에 붙여요.',
            levels: CARD_LV,
            items: [
              { prompt: '민지가 정한 다음 놀이 이야기예요. 빈칸을 채워 보세요.', toolOptions: { mode: 'fill', slots: [{ id: 'f1', who: '민지', motif: 'star', label: '다음에는 모둠 합주를 ___ 해 보고 싶어요.' }, { id: 'f2', who: '민지', motif: 'star', label: '왜냐하면 ___ 소리가 풍성하니까요.' }], cards: ['함께', '혼자', '여럿이 치면', '혼자 치면'] },
                target: { fill: { f1: '함께', f2: '여럿이 치면' } }, difficulty: 0.15 },
              { prompt: '준호가 정한 다음 놀이 이야기예요. 빈칸을 채워 보세요.', toolOptions: { mode: 'fill', slots: [{ id: 'f1', who: '준호', motif: 'bird', label: '다음에는 가락 짓기를 ___ 해 보고 싶어요.' }, { id: 'f2', who: '준호', motif: 'bird', label: '왜냐하면 ___ 천천히 생각할 수 있으니까요.' }], cards: ['혼자', '함께', '내 빠르기로', '친구 빠르기로'] },
                target: { fill: { f1: '혼자', f2: '내 빠르기로' } }, difficulty: 0.2 },
              { prompt: '다음에 해 볼 놀이를 정해 별 스티커로 다음 놀이판에 붙이고, 까닭을 말해요. 다 하면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '다음 놀이판의 별을 함께 세어 다음 소리 시간 놀이를 정한다. 13~36차시에 소리를 듣고, 따라 하고, 바꾸고, 혼자·함께 연주한 것을 묶어 말한다. 다음 시간부터는 학교에서 살펴볼 것을 골라 그림으로 나타낸다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '어떻게 했나?', slots: ['혼자 했어요', '함께 했어요'], cards: ['짝과 주고받기', '내 리듬 블록 짓기'] }, prompt: '놀이를 주로 어떻게 했는지 나누어 보세요.', target: { sort: { '혼자 했어요': ['내 리듬 블록 짓기'], '함께 했어요': ['짝과 주고받기'] } }, difficulty: 0.1 },
          { type: 'tool', tool: 'emotion', options: { mode: 'scale', steps: 3, situation: '13~36차시 동안 친구들과 여러 소리 놀이를 했어요.', feeling: '즐거움', ask: '친구들과 함께한 소리 놀이는 얼마나 즐거웠나요?' }, prompt: '함께한 소리 놀이가 얼마나 즐거웠는지 솔직하게 골라 보세요. 정답은 없어요.', target: { level: 'any' }, difficulty: 0.05 },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '다음 소리 놀이',
      items: [
        { type: 'table', prompt: '해 본 소리 놀이를 쓰고 어떻게 했는지 ○ 하세요.', columns: ['놀이', '혼자', '함께'], rows: 3 },
        { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '모둠 합주는 ___ 했어요.', answer: '함께' },
        { type: 'short', prompt: '다음에 해 보고 싶은 놀이와 그 까닭을 쓰세요.' },
        { type: 'draw', prompt: '다음 놀이를 하는 모습을 그리세요.' },
      ],
      easy: {
        note: '"다음에는 ○○를 해 보고 싶어요."',
        items: [
          { type: 'choice', prompt: '메아리 놀이는 어떻게 했나요?', options: ['함께', '혼자'], answer: '함께' },
          { type: 'choice', prompt: '블록으로 네 박 짓기는?', options: ['혼자', '함께'], answer: '혼자' },
          { type: 'draw', prompt: '가장 재미있었던 놀이를 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '놀이 카드 네 장을 나누고, 말틀 빈칸에 카드를 넣어요.',
      base: '놀이 카드 여섯 장을 나누고 재미있었던 점을 이어요.',
      challenge: '나눈 뒤 혼자로 한 놀이를 함께 하면 어떨지 바꾸어 생각해 짝에게 말해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 놀이 이름만 보고 무엇을 했는지 떠올리지 못한다 → 칠판 그림 카드와 활동지 묶음을 함께 보여 준다. ② 까닭을 \'그냥\'으로 말한다 → 소리가 어땠는지, 누구와 했는지 물어 이끈다. ③ 별이 적은 놀이를 고른 학생이 서운해한다 → 고른 놀이는 쉬는 시간 놀이 구석에서 해 볼 수 있게 한다. 출구표의 즐거움 점검은 정답이 없으니 솔직하게 고르게 한다.',
  }));

  // ───────────────────────── 37~40차시: 살펴볼 것 고르고, 눈에 띄는 곳과 닮은 것 찾기 ─────────────────────────

  var ART_LV = {
    easy: { shapes: ['circle', 'square', 'triangle', 'rect'], colors: ['빨강', '노랑', '파랑', '초록', '검정', '하양'], sizes: ['s', 'l'] },
    base: { shapes: ['circle', 'square', 'triangle', 'rect', 'semi', 'star'], sizes: ['s', 'm', 'l'] },
    challenge: {},
  };

  lessons.push(L(37, {
    title: '학교 물건에서 동그라미·네모·세모 찾기',
    objective: '학교에서 그려 보고 싶은 물건을 고르고, 그 물건에서 눈에 띄는 모양(동그라미·네모·세모)을 찾아 짚고 조각으로 나타낼 수 있다.',
    illustration: ART('paper cutouts of a school clock, a window and a triangle roof, each outlined with a dotted circle, square and triangle', '모양을 찾아요', [
      { motif: 'star', x: 110, y: 84, s: 0.6 }, { motif: 'tree', x: 400, y: 214 }, { motif: 'sun', x: 360, y: 72, s: 0.6 }]),
    safety: WALK_SAFE,
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '교실 시계를 가리키며 묻는다. "시계를 그린다면 무엇부터 그릴까요? 시계에서 가장 눈에 띄는 모양은 무엇인가요?" \'동그라미\'를 이끌어 낸 뒤 창문(네모), 미끄럼틀 지붕(세모)도 같이 찾는다. "보이는 대로 그리기 전에, 눈에 띄는 모양을 먼저 찾으면 그리기 쉬워요." 시연 단추로 물건이 모양별로 나뉘는 모습을 보여 준다.',
        student: '교실에서 동그라미·네모·세모 모양을 찾아 손가락으로 따라 그려요.',
        demo: { tool: 'mindmap', options: { topic: '어떤 모양이 눈에 띄나?', slots: ['동그라미', '네모'], cards: ['교실 시계', '창문'], shuffle: false }, sequence: [{ sort: { '동그라미': ['교실 시계'], '네모': ['창문'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 학교 물건의 눈에 띄는 모양', minutes: 12, tool: 'mindmap',
            teacher: '교실을 한 바퀴 걸으며 물건을 손가락으로 짚어 본다(걸을 때는 천천히, 물건은 손대지 않고 가리키기만). "이 물건을 한 가지 모양으로 말한다면?" 여러 모양이 섞인 물건은 가장 크게 보이는 모양으로 정하게 한다. 축구공처럼 무늬가 많은 물건은 "전체 모양을 보면?" 하고 묻는다.',
            task: '학교 물건을 가장 눈에 띄는 모양에 따라 나누고, 그리고 싶은 물건을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '학교 물건을 가장 눈에 띄는 모양에 따라 나누어 보세요.', toolOptions: { topic: '어떤 모양이 눈에 띄나?', slots: ['동그라미', '네모', '세모'], cards: ['교실 시계', '칠판', '축구공', '교실 문', '삼각 김밥 모양 표지판', '미끄럼틀 지붕'] },
                target: { sort: { '동그라미': ['교실 시계', '축구공'], '네모': ['칠판', '교실 문'], '세모': ['삼각 김밥 모양 표지판', '미끄럼틀 지붕'] } }, difficulty: 0.2,
                levels: { easy: { prompt: '학교 물건을 동그라미와 네모로 나누어 보세요.', toolOptions: { slots: ['동그라미', '네모'], cards: ['교실 시계', '칠판', '축구공', '교실 문'] }, target: { sort: { '동그라미': ['교실 시계', '축구공'], '네모': ['칠판', '교실 문'] } } } },
                hints: ['물건 전체를 손가락으로 따라 그려 보세요.', '모서리가 없으면 동그라미, 모서리가 넷이면 네모, 셋이면 세모예요.', '시계·축구공은 동그라미, 칠판·문은 네모, 표지판·미끄럼틀 지붕은 세모예요.'] },
              { prompt: '동그라미 모양이 가장 눈에 띄는 학교 물건만 골라 보세요.', toolOptions: { mode: 'pick', basket: '동그라미 물건', cards: ['훌라후프', '사물함', '접시', '책상', '단추'] },
                target: { pick: ['훌라후프', '접시', '단추'] }, difficulty: 0.2 },
              { prompt: '학교에서 그려 보고 싶은 물건 하나를 정해, 짝에게 가장 눈에 띄는 모양을 손가락으로 그려 보여 줘요. 다 하면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 모양 조각으로 학교 물건 만들기', minutes: 14, tool: 'collage',
            teacher: '"눈에 띄는 모양부터 붙이고, 작은 것은 나중에 붙여요." 시계는 큰 동그라미를 먼저, 바늘은 긴 네모로 붙이게 한다. 작은 조각부터 붙이는 학생에게 "가장 큰 모양이 무엇이었지요?" 하고 묻는다.',
            task: '눈에 띄는 모양 조각을 먼저 붙여 학교 물건을 만들어요.',
            levels: ART_LV,
            items: [
              { prompt: '교실 시계를 만들어요. 큰 동그라미 하나에 바늘(긴 네모) 두 개를 붙여 보세요.', target: { has: [{ shape: 'circle', size: 'l', n: 1 }, { shape: 'rect', n: 2 }] }, difficulty: 0.15,
                levels: { easy: { prompt: '교실 시계를 만들어요. 큰 동그라미 하나에 바늘(긴 네모) 두 개를 붙여 보세요. 바늘은 크기를 마음대로 골라요.' } } },
              { prompt: '창문 넷 달린 학교 건물을 만들어요. 큰 네모 하나에 작은 네모 네 개를 붙여 보세요.', target: { has: [{ shape: 'square', size: 'l', n: 1 }, { shape: 'square', size: 's', n: 4 }] }, difficulty: 0.2 },
              { prompt: '미끄럼틀을 만들어요. 세모 지붕 하나와 긴 네모 두 개 이상을 붙여 보세요.', target: { has: [{ shape: 'triangle', min: 1, max: 1 }, { shape: 'rect', min: 2 }] }, difficulty: 0.2,
                conclude: '눈에 띄는 모양을 먼저 찾아 붙이면 물건이 금방 드러나요.' },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"내가 정한 물건에서 가장 눈에 띄는 모양은 무엇이었나요?" 두세 명이 조각 작품을 보여 주며 말한다. 다음 시간에는 학교의 구름·얼룩·그림자가 무엇과 닮았는지 상상해 본다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '어떤 모양이 눈에 띄나?', slots: ['동그라미', '세모'], cards: ['바퀴', '삼각자'] }, prompt: '물건을 눈에 띄는 모양에 따라 나누어 보세요.', target: { sort: { '동그라미': ['바퀴'], '세모': ['삼각자'] } }, difficulty: 0.1 },
          { type: 'choice', prompt: '물건을 그릴 때 먼저 찾으면 좋은 것은?', options: ['가장 눈에 띄는 모양', '가장 작은 무늬'], answer: 0, difficulty: 0.1, explain: '큰 모양을 먼저 그리면 무엇인지 잘 드러나요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '학교 물건 모양',
      items: [
        { type: 'table', prompt: '학교 물건과 눈에 띄는 모양을 쓰세요.', columns: ['물건', '모양(동그라미·네모·세모)'], rows: 3 },
        { type: 'choice', prompt: '칠판에서 가장 눈에 띄는 모양은?', options: ['네모', '동그라미'], answer: '네모' },
        { type: 'draw', prompt: '내가 고른 학교 물건을 눈에 띄는 모양부터 그리세요.' },
        { type: 'short', prompt: '그 물건에서 눈에 띄는 모양을 쓰세요.' },
      ],
      easy: {
        note: '모서리 없음은 동그라미, 넷은 네모!',
        items: [
          { type: 'choice', prompt: '시계는?', options: ['동그라미', '네모'], answer: '동그라미' },
          { type: 'choice', prompt: '교실 문은?', options: ['네모', '세모'], answer: '네모' },
          { type: 'draw', prompt: '동그라미 모양 학교 물건을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '물건을 두 모양으로 나누고, 조각 고르개가 단순해요.',
      base: '세 모양으로 나누고, 크기를 맞추어 조각을 붙여요.',
      challenge: '모든 모양·색 조각에서 골라 만들고, 고른 물건의 눈에 띄는 모양을 두 가지까지 말해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 무늬나 작은 부분에 먼저 눈이 간다 → 물건 전체를 손가락으로 크게 따라 그리게 한다. ② 여러 모양이 섞인 물건을 한 모양으로 정하지 못한다 → 가장 크게 보이는 모양으로 정한다고 약속한다. ③ 교실을 돌다 물건을 만진다 → 가리키기만 한다고 미리 말한다. 37~40차시는 그림 그리기 전에 \'살펴보기\'를 익히는 차시이니 그리기 솜씨보다 찾은 것을 말하는 데 무게를 둔다.',
  }));

  lessons.push(L(38, {
    title: '구름·얼룩·그림자가 무엇과 닮았는지 상상하기',
    objective: '학교에서 본 구름·얼룩·그림자 모양이 무엇과 닮았는지 상상해 말하고, 조각을 덧붙여 닮은 것으로 바꾸어 나타낼 수 있다.',
    illustration: ART('a paper cloud above a school roof that looks like a rabbit, a child pointing up and imagining with a thought bubble', '무엇과 닮았을까?', [
      { motif: 'cloud', x: 140, y: 80 }, { motif: 'cloud', x: 360, y: 92 }, { motif: 'tree', x: 410, y: 214 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '창밖 구름이나 미리 찍어 둔 운동장 그림자 사진을 보여 준다. "이 구름은 무엇과 닮았나요?" 친구마다 다른 대답을 모두 칠판에 적는다. "같은 구름도 사람마다 다르게 보여요. 다 맞는 대답이에요." 시연 단추로 모양과 닮은 것이 이어지는 모습을 보여 준다.',
        student: '구름·그림자 사진을 보고 무엇과 닮았는지 말해요. 친구 대답도 들어요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '무엇과 닮았나?', slots: [{ id: 's1', label: '길쭉하고 끝이 둥근 구름' }], cards: ['뱀'], shuffle: false }, sequence: [{ match: { s1: '뱀' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 모양과 닮은 것 잇기', minutes: 12, tool: 'mindmap',
            teacher: '"모양의 어디를 보고 그렇게 생각했나요?" 닮은 까닭을 \'귀처럼 뾰족한 곳이 있어서\'처럼 모양으로 말하게 한다. 같은 모양에 다른 것을 떠올린 학생의 생각도 칠판에 적어 준다. 판에서 잇는 것은 많이 떠올리는 것 하나를 고른 것이라고 알려 준다.',
            task: '구름·얼룩·그림자 모양과 닮은 것을 잇고, 어디가 닮았는지 말해요.',
            levels: CARD_LV,
            items: [
              { prompt: '모양과 닮은 것을 이어 보세요.', toolOptions: { mode: 'match', topic: '무엇과 닮았나?', slots: [{ id: 's1', label: '위에 뾰족한 귀가 둘 있는 구름' }, { id: 's2', label: '양쪽으로 날개가 펼쳐진 얼룩' }, { id: 's3', label: '긴 다리가 넷 달린 그림자' }], cards: ['토끼', '나비', '책상'] },
                target: { match: { s1: '토끼', s2: '나비', s3: '책상' } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['토끼', '나비', '책상', '물고기'] } } } },
              { prompt: '닮은 까닭을 모양으로 말한 것만 골라 보세요.', toolOptions: { mode: 'pick', basket: '모양으로 말한 까닭', cards: ['"끝이 뾰족해서 별 같아요"', '"그냥 좋아서요"', '"둥글고 넓적해서 접시 같아요"', '"재미있어서요"'] },
                target: { pick: ['"끝이 뾰족해서 별 같아요"', '"둥글고 넓적해서 접시 같아요"'] }, difficulty: 0.2 },
              { prompt: '운동장이나 창밖에서 구름·얼룩·그림자 하나를 찾아, 무엇과 닮았는지 짝에게 말해요. 다 하면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 조각 덧붙여 닮은 것 만들기', minutes: 14, tool: 'collage',
            teacher: '"판에 구름 조각이 있어요. 조각을 덧붙여 내가 떠올린 것으로 바꾸어 봐요." 같은 구름에서 토끼, 양, 자동차 등 서로 다른 것이 나오는 것을 함께 본다. 다 만든 작품은 짝에게 무엇인지 맞혀 보게 한다.',
            task: '판에 놓인 구름 조각에 조각을 덧붙여, 내가 떠올린 닮은 것을 만들어요.',
            levels: ART_LV,
            items: [
              { prompt: '하양 큰 동그라미 구름이에요. 귀 두 개(작은 세모 또는 나뭇잎)를 붙여 동물로 바꾸어 보세요.', state: { pieces: [{ shape: 'circle', color: '하양', size: 'l', x: 280, y: 220, r: 0 }] }, target: { pieces: { min: 3 }, selfCheck: ['귀 두 개를 붙였어요', '무엇인지 짝에게 말했어요'] }, difficulty: 0.15 },
              { prompt: '하양 구름 두 개가 붙어 있어요. 조각을 두 개 넘게 덧붙여 내가 떠올린 것으로 바꾸어 보세요.', state: { pieces: [{ shape: 'circle', color: '하양', size: 'l', x: 240, y: 200, r: 0 }, { shape: 'circle', color: '하양', size: 'm', x: 340, y: 200, r: 0 }] }, target: { pieces: { min: 5 }, selfCheck: ['구름을 다른 것으로 바꾸었어요', '닮은 까닭을 모양으로 말했어요'] }, difficulty: 0.2 },
              { prompt: '색종이를 손으로 찢어 구름 모양을 만들고, 크레파스로 덧그려 무엇과 닮았는지 나타내요. 다 하면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '찢은 구름 작품을 칠판에 모아 붙이고, 반 전체가 무엇과 닮았는지 맞혀 본다. 같은 모양에서 다른 것을 떠올린 작품을 견주며 \'보이는 대로 그리는 것 말고도 상상해서 나타낼 수 있다\'는 것을 짚는다. 다음 시간에는 색·모양·크기 낱말로 물건을 말해 본다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '무엇과 닮았나?', slots: [{ id: 's1', label: '동그랗고 가운데에 구멍이 있는 얼룩' }, { id: 's2', label: '길고 꼬불꼬불한 그림자' }], cards: ['도넛', '뱀'] }, prompt: '모양과 닮은 것을 이어 보세요.', target: { match: { s1: '도넛', s2: '뱀' } }, difficulty: 0.1 },
          { type: 'choice', prompt: '같은 구름을 보고 친구는 \'양\', 나는 \'솜사탕\'이라고 했어요.', options: ['한 사람은 틀렸어요', '둘 다 맞아요'], answer: 1, difficulty: 0.1, explain: '같은 모양도 사람마다 다르게 상상할 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '무엇과 닮았을까?',
      items: [
        { type: 'draw', prompt: '이 구름 모양에 덧그려 내가 떠올린 것을 만드세요. (교사가 큰 구름 모양을 그려 줘요)' },
        { type: 'table', prompt: '찾은 모양과 닮은 것, 까닭을 쓰세요.', columns: ['찾은 곳(구름·얼룩·그림자)', '닮은 것', '어디가 닮았나'], rows: 2 },
        { type: 'choice', prompt: '닮은 까닭을 잘 말한 것은?', options: ['뾰족한 귀가 있어서 고양이 같아요', '그냥요'], answer: '뾰족한 귀가 있어서 고양이 같아요' },
        { type: 'short', prompt: '친구가 떠올린 것 가운데 신기했던 것을 쓰세요.' },
      ],
      easy: {
        note: '모양의 어디가 닮았는지 말해요.',
        items: [
          { type: 'choice', prompt: '날개처럼 펼쳐진 얼룩은?', options: ['나비', '책상'], answer: '나비' },
          { type: 'choice', prompt: '같은 구름을 다르게 보면?', options: ['둘 다 맞아요', '틀렸어요'], answer: '둘 다 맞아요' },
          { type: 'draw', prompt: '내가 본 구름을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '판에서 귀 두 개만 덧붙이고, 조각 고르개가 단순해요.',
      base: '구름 두 개에 조각을 여럿 덧붙여 바꾸어요.',
      challenge: '함정 카드까지 섞인 잇기를 하고, 하나의 구름으로 두 가지 다른 것을 만들어 견주어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 정답이 하나라고 여겨 친구와 다르면 고친다 → 칠판에 여러 대답을 모두 적어 다 맞는다는 것을 보여 준다. ② 까닭을 말하지 못한다 → \'뾰족한 곳, 둥근 곳, 긴 곳\'처럼 모양 낱말 카드를 준다. ③ 바깥 관찰 중 해를 똑바로 본다 → 구름을 볼 때 해를 등지고 서게 한다. 찢기 활동은 가위 없이 손으로만 한다.',
  }));

  lessons.push(L(39, {
    title: '색·모양·크기 낱말로 물건 설명하기',
    objective: '학교 물건을 색·모양·크기 낱말로 설명하고, 친구의 설명을 듣고 그대로 조각으로 만들 수 있다.',
    illustration: ART('a red mailbox and a small yellow ball made of paper, with three word tags: color, shape, size hanging from strings', '색·모양·크기', [
      { motif: 'star', x: 110, y: 84, s: 0.6 }, { motif: 'flower', x: 380, y: 228, color: 'rose' }, { motif: 'sun', x: 360, y: 72, s: 0.6 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"선생님이 말하는 물건을 맞혀 봐요. 빨갛고, 네모나고, 크고, 편지를 넣어요." 우체통을 이끌어 낸다. "색·모양·크기를 말하니 보지 않아도 알 수 있지요?" 낱말 카드 \'색\', \'모양\', \'크기\'를 칠판에 붙인다. 시연 단추로 낱말이 나뉘는 모습을 보여 준다.',
        student: '선생님 설명을 듣고 무슨 물건인지 맞혀요.',
        demo: { tool: 'mindmap', options: { topic: '어떤 낱말일까?', slots: ['색', '모양', '크기'], cards: ['빨갛다', '네모나다', '크다'], shuffle: false }, sequence: [{ sort: { '색': ['빨갛다'], '모양': ['네모나다'], '크기': ['크다'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 색·모양·크기 낱말 나누기', minutes: 11, tool: 'mindmap',
            teacher: '"이 낱말은 색을 말하나요, 모양을 말하나요, 크기를 말하나요?" 낱말을 소리 내어 읽고 몸짓(색은 눈 가리키기, 모양은 손으로 그리기, 크기는 팔 벌리기)으로 나타내게 한다. \'동그랗다\'를 크기로 고르는 학생에게 손으로 그려 보게 한다.',
            task: '물건을 설명하는 낱말을 색·모양·크기로 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '물건을 설명하는 낱말을 나누어 보세요.', toolOptions: { topic: '어떤 낱말일까?', slots: ['색', '모양', '크기'], cards: ['노랗다', '동그랗다', '작다', '파랗다', '세모나다', '커다랗다'] },
                target: { sort: { '색': ['노랗다', '파랗다'], '모양': ['동그랗다', '세모나다'], '크기': ['작다', '커다랗다'] } }, difficulty: 0.2,
                levels: { easy: { prompt: '물건을 설명하는 낱말을 색과 크기로 나누어 보세요.', toolOptions: { slots: ['색', '크기'], cards: ['노랗다', '작다', '파랗다', '커다랗다'] }, target: { sort: { '색': ['노랗다', '파랗다'], '크기': ['작다', '커다랗다'] } } } },
                hints: ['낱말을 소리 내어 읽고 몸짓으로 나타내 봐요.', '눈으로만 알 수 있는 빛깔은 색, 손으로 그릴 수 있으면 모양, 팔을 벌려 나타내면 크기예요.', '노랗다·파랗다는 색, 동그랗다·세모나다는 모양, 작다·커다랗다는 크기예요.'] },
              { prompt: '설명과 학교 물건을 이어 보세요.', toolOptions: { mode: 'match', topic: '무엇일까?', slots: [{ id: 's1', label: '초록색이고 네모나고 커요' }, { id: 's2', label: '노랗고 동그랗고 작아요' }, { id: 's3', label: '빨갛고 세모나고 커요' }], cards: ['칠판', '탁구공', '멈춤 표지판'] },
                target: { match: { s1: '칠판', s2: '탁구공', s3: '멈춤 표지판' } }, difficulty: 0.2 },
              { prompt: '학교 물건 하나를 골라 색·모양·크기로 설명하고, 짝이 맞히게 해요. 바꾸어 해요. 다 하면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 설명 듣고 그대로 만들기', minutes: 16, tool: 'collage',
            teacher: '"설명을 끝까지 듣고, 색·모양·크기를 모두 맞추어 붙여요." 색만 맞추고 크기를 놓치는 학생에게 설명을 다시 읽어 낱말에 손가락을 짚게 한다. 마지막 문항은 짝이 설명해 주는 대로 만든다.',
            task: '색·모양·크기 설명을 듣고 그대로 조각을 붙여요.',
            levels: ART_LV,
            items: [
              { prompt: '빨갛고 큰 네모 하나, 노랗고 작은 동그라미 하나를 붙여 보세요.', target: { has: [{ shape: 'square', color: '빨강', size: 'l', n: 1 }, { shape: 'circle', color: '노랑', size: 's', n: 1 }] }, difficulty: 0.15 },
              { prompt: '파랗고 작은 세모 세 개와 초록 큰 동그라미 하나를 붙여 보세요.', target: { has: [{ shape: 'triangle', color: '파랑', size: 's', n: 3 }, { shape: 'circle', color: '초록', size: 'l', n: 1 }] }, difficulty: 0.2,
                hints: ['설명에서 색·모양·크기 낱말을 하나씩 짚어요.', '세모는 파랑·작게로 세 번, 동그라미는 초록·크게로 한 번 붙여요.', '파랑 작은 세모 3개, 초록 큰 동그라미 1개예요. 다른 조각은 떼어 내요.'] },
              { prompt: '짝이 색·모양·크기로 설명해 준 물건을 조각으로 만들고, 해낸 것을 표시해요.', target: { pieces: { min: 2 }, selfCheck: ['짝 설명을 끝까지 들었어요', '색·모양·크기를 모두 맞추었어요'] }, difficulty: 0.15 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"짝 설명대로 만들었더니 짝이 생각한 물건과 같았나요?" 같지 않았다면 어떤 낱말이 빠졌는지 찾아보게 한다. 다음 시간에는 눈에 잘 띄게 색을 고르는 방법을 알아본다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'collage', options: { shapes: ['circle', 'square', 'triangle'], colors: ['빨강', '노랑', '파랑'], sizes: ['s', 'l'] }, prompt: '노랗고 큰 세모 하나를 붙여 보세요.', target: { has: [{ shape: 'triangle', color: '노랑', size: 'l', n: 1 }], pieces: { n: 1 } }, difficulty: 0.1 },
          { type: 'choice', prompt: '\'커다랗다\'는 무엇을 말하는 낱말일까요?', options: ['색', '모양', '크기'], answer: 2, difficulty: 0.1, explain: '커다랗다, 작다는 크기를 말해요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '색·모양·크기로 말해요',
      items: [
        { type: 'table', prompt: '학교 물건을 색·모양·크기로 쓰세요.', columns: ['물건', '색', '모양', '크기'], rows: 2 },
        { type: 'choice', prompt: '\'동그랗다\'는 어떤 낱말일까요?', options: ['모양', '색'], answer: '모양' },
        { type: 'draw', prompt: '"파랗고 작은 동그라미 셋"을 그리세요.' },
        { type: 'short', prompt: '내가 좋아하는 학교 물건을 색·모양·크기로 설명하세요.' },
      ],
      easy: {
        note: '색은 눈, 모양은 손, 크기는 팔!',
        items: [
          { type: 'choice', prompt: '\'빨갛다\'는?', options: ['색', '크기'], answer: '색' },
          { type: 'choice', prompt: '\'작다\'는?', options: ['크기', '모양'], answer: '크기' },
          { type: 'draw', prompt: '빨간 큰 네모를 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '색과 크기 두 가지로 나누고, 조각 고르개가 단순해요.',
      base: '색·모양·크기 세 가지로 나누고 설명대로 붙여요.',
      challenge: '모든 조각에서 골라 만들고, 짝 설명에 빠진 낱말을 찾아 보태어 줘요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 모양 낱말과 크기 낱말을 헷갈린다 → 몸짓(손으로 그리기·팔 벌리기)을 함께 쓴다. ② 설명대로 만들 때 색만 맞춘다 → 설명 낱말을 하나씩 짚어 가며 붙이게 한다. ③ 설명할 때 이름을 먼저 말해 버린다 → 이름은 짝이 맞힐 때까지 말하지 않는다고 약속한다.',
  }));

  lessons.push(L(40, {
    title: '눈에 잘 띄게 맞닿는 색 고르기',
    objective: '서로 맞닿아 눈에 잘 띄는 색(빨강-초록, 노랑-보라 등)과 잘 띄지 않는 색을 견주고, 눈에 띄게 색을 골라 학교 안내 그림을 만들 수 있다.',
    illustration: ART('two paper signs side by side, one with yellow on purple that pops out, another with light yellow on white that fades, a child comparing them', '눈에 띄는 색', [
      { motif: 'star', x: 240, y: 70, s: 0.6 }, { motif: 'flower', x: 100, y: 228, color: 'buttercup' }, { motif: 'flower', x: 390, y: 228, color: 'lavender' }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '하양 바탕에 노랑 글씨 카드와 보라 바탕에 노랑 글씨 카드를 교실 뒤에서 들어 보인다. "어느 글씨가 더 잘 보이나요?" 보라 바탕을 이끌어 낸다. "학교 안내판이나 표지판도 눈에 잘 띄는 색을 골라 만들어요." 6차시에 본 표지판을 떠올리게 한다. 시연 단추로 맞닿는 색 조각이 놓이는 모습을 보여 준다.',
        student: '교실 뒤에서 든 두 카드를 보고, 더 잘 보이는 쪽을 손으로 가리켜요.',
        demo: { tool: 'collage', options: { readOnly: true }, sequence: [{ has: [{ shape: 'square', color: '보라', size: 'l', n: 1 }, { shape: 'star', color: '노랑', size: 'm', n: 1 }] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 잘 띄는 색 짝 찾기', minutes: 11, tool: 'mindmap',
            teacher: '색종이 두 장을 겹쳐 들고 멀리서 견주어 보게 한다. "두 색이 맞닿을 때 또렷하게 보이나요, 흐릿하게 보이나요?" 좋아하는 색이 눈에 잘 띈다고 말하는 학생에게 "좋아하는 색과, 눈에 잘 띄는 색은 같을까요?" 하고 견주어 보게 한다.',
            task: '두 색이 맞닿을 때 눈에 잘 띄는 짝과 잘 띄지 않는 짝을 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '두 색이 맞닿을 때 어떻게 보이는지 나누어 보세요.', toolOptions: { topic: '맞닿은 두 색', slots: ['또렷해요', '흐릿해요'], cards: ['보라 위의 노랑', '하양 위의 연한 노랑', '초록 위의 빨강', '파랑 위의 남색', '검정 위의 하양', '분홍 위의 빨강'] },
                target: { sort: { '또렷해요': ['보라 위의 노랑', '초록 위의 빨강', '검정 위의 하양'], '흐릿해요': ['하양 위의 연한 노랑', '파랑 위의 남색', '분홍 위의 빨강'] } }, difficulty: 0.3,
                levels: { easy: { prompt: '두 색이 맞닿을 때 어떻게 보이는지 나누어 보세요. 카드가 네 장이에요.', toolOptions: { cards: ['보라 위의 노랑', '하양 위의 연한 노랑', '검정 위의 하양', '파랑 위의 남색'] }, target: { sort: { '또렷해요': ['보라 위의 노랑', '검정 위의 하양'], '흐릿해요': ['하양 위의 연한 노랑', '파랑 위의 남색'] } } } },
                hints: ['색종이 두 장을 겹쳐 들고 멀리서 보세요.', '비슷한 색끼리는 흐릿하고, 아주 다른 색끼리는 또렷해요.', '보라-노랑, 초록-빨강, 검정-하양은 또렷하고, 하양-연한 노랑, 파랑-남색, 분홍-빨강은 흐릿해요.'] },
              { prompt: '눈에 잘 띄어야 하는 학교 물건만 골라 보세요.', toolOptions: { mode: 'pick', basket: '눈에 잘 띄어야 해요', cards: ['비상구 표지', '횡단보도 앞 멈춤 표지판', '교실 커튼', '소화기 안내판'] },
                target: { pick: ['비상구 표지', '횡단보도 앞 멈춤 표지판', '소화기 안내판'] }, difficulty: 0.25 },
              { prompt: '색종이 두 장을 겹쳐 들고 교실 뒤에서 짝에게 보여 주며, 또렷한지 흐릿한지 견주어 봐요. 다 하면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 눈에 띄는 학교 안내 그림 만들기', minutes: 15, tool: 'collage',
            teacher: '"화장실·도서실·보건실 가운데 한 곳의 안내 그림을 만들어요. 바탕과 그림이 맞닿아 또렷하게 보이게 색을 골라요." 다 만든 작품은 교실 뒤에서 보아 또렷한지 확인한다. 흐릿한 작품은 한 조각의 색만 바꾸어 다시 보게 한다.',
            task: '바탕 조각과 그림 조각이 맞닿아 또렷하게 보이는 학교 안내 그림을 만들어요.',
            levels: ART_LV,
            items: [
              { prompt: '빨강과 초록처럼 서로 반대되는 색 두 조각이 맞닿게 붙여 보세요.', target: { contrast: 'complement' }, difficulty: 0.2,
                levels: { easy: { prompt: '빨강과 초록처럼 서로 반대되는 색 두 조각이 맞닿게 붙여 보세요. 빨강 위에 초록, 노랑 위에 보라도 좋아요.', toolOptions: { colors: ['빨강', '초록', '노랑', '보라', '하양'] } } } },
              { prompt: '밝은 색과 어두운 색이 맞닿게 붙여, 멀리서도 또렷한 안내 그림을 만들어 보세요.', target: { contrast: 'light-dark' }, difficulty: 0.2,
                hints: ['하양·노랑·분홍은 밝은 색, 검정·보라·갈색은 어두운 색이에요.', '어두운 색 큰 조각을 바탕으로 놓고, 그 위에 밝은 색 조각을 겹쳐요.', '검정 큰 네모 위에 하양 별 하나를 겹쳐 붙여요.'] },
              { prompt: '화장실·도서실·보건실 가운데 한 곳의 안내 그림을 또렷한 색으로 만들고, 해낸 것을 표시해요.', target: { pieces: { min: 2 }, selfCheck: ['바탕과 그림 색이 또렷하게 달라요', '교실 뒤에서 보아도 잘 보였어요'] }, difficulty: 0.15 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '안내 그림을 교실 뒤에 붙이고, 반 전체가 멀리서 보며 가장 또렷한 작품을 찾는다. "어떤 색을 맞닿게 했나요?" 만든 친구가 말하게 한다. 37~40차시에 모양·닮은 것·색·크기를 살펴본 것을 정리하고, 다음 시간에는 학교 물건을 종이 가득 크게 그린다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '맞닿은 두 색', slots: ['또렷해요', '흐릿해요'], cards: ['검정 위의 노랑', '하양 위의 하늘색'] }, prompt: '맞닿은 두 색이 어떻게 보이는지 나누어 보세요.', target: { sort: { '또렷해요': ['검정 위의 노랑'], '흐릿해요': ['하양 위의 하늘색'] } }, difficulty: 0.15 },
          { type: 'choice', prompt: '비상구 표지에 쓰기 좋은 색 짝은?', options: ['초록 바탕에 하양', '하양 바탕에 연한 노랑'], answer: 0, difficulty: 0.15, explain: '아주 다른 색이 맞닿아야 멀리서도 또렷해요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '눈에 띄는 색',
      items: [
        { type: 'table', prompt: '두 색이 맞닿을 때 또렷하면 ○, 흐릿하면 △ 하세요.', columns: ['색 짝', '○ / △'], cells: [['보라와 노랑', ''], ['파랑과 남색', ''], ['검정과 하양', '']] },
        { type: 'choice', prompt: '눈에 잘 띄어야 하는 것은?', options: ['소화기 안내판', '교실 커튼'], answer: '소화기 안내판' },
        { type: 'draw', prompt: '또렷한 색으로 학교 안내 그림을 그리세요.' },
        { type: 'short', prompt: '내 안내 그림에서 맞닿게 한 두 색을 쓰세요.' },
      ],
      easy: {
        note: '아주 다른 두 색이 맞닿으면 또렷해요.',
        items: [
          { type: 'choice', prompt: '더 또렷한 것은?', options: ['검정 위의 하양', '하양 위의 연한 노랑'], answer: '검정 위의 하양' },
          { type: 'choice', prompt: '비슷한 색끼리 맞닿으면?', options: ['흐릿해요', '또렷해요'], answer: '흐릿해요' },
          { type: 'draw', prompt: '검정 바탕에 하양 별을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '카드 네 장을 나누고, 고르개에 반대색 짝이 있는 색만 있어요.',
      base: '카드 여섯 장을 나누고 반대색·밝고 어두운 색을 맞닿게 해요.',
      challenge: '모든 색에서 골라 만들고, 흐릿한 친구 작품에서 한 조각 색만 바꿀 곳을 찾아 줘요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 좋아하는 색이 언제나 잘 보인다고 여긴다 → 같은 색을 다른 바탕 두 곳에 놓고 멀리서 견준다. ② 반대색 낱말을 외우려 한다 → 직접 겹쳐 보고 또렷한지로 고르게 한다. ③ 조각이 맞닿지 않고 떨어져 있다 → 바탕 조각 위에 겹치거나 붙여야 맞닿는다고 알려 준다. 색 구별이 어려운 학생이 있으면 밝고 어두운 색 짝으로 활동하게 한다.',
  }));

  // ───────────────────────── 41~44차시: 자세히 본 것을 크게 나타내고, 상상한 것을 덧붙이기 ─────────────────────────

  // 쉬움은 꼭 쓰는 모양·색·두 크기만, 기본은 반원·보통 크기와 10색, 도전은 모든 조각
  var ART2_LV = {
    easy: { shapes: ['circle', 'square', 'rect', 'triangle', 'leaf', 'heart', 'star'], colors: ['빨강', '노랑', '초록', '파랑', '분홍', '갈색', '검정', '하양'], sizes: ['s', 'l'] },
    base: { shapes: ['circle', 'square', 'rect', 'triangle', 'semi', 'leaf', 'heart', 'star'], sizes: ['s', 'm', 'l'] },
    challenge: {},
  };
  // 화단에서 살펴보는 차시의 안전 약속
  var GARDEN_SAFE = ['꽃과 잎은 꺾지 않고 눈으로만 봐요.', '돋보기로 해를 보지 않아요.', '화단 안으로 들어가지 않고 둘레에서 봐요.'];

  lessons.push(L(41, {
    title: '교실 화분을 자세히 보고 종이 가득 크게 나타내기',
    objective: '교실 화분을 가까이에서 살펴 잎·줄기·화분에서 본 것을 말하고, 종이 가운데에 크게 나타낼 수 있다.',
    illustration: ART('a big paper potted plant filling the center of a sheet, with a tiny pot drawn in the corner of another sheet beside it for comparison', '종이 가득 크게', [
      { motif: 'leaf', x: 120, y: 110 }, { motif: 'leaf', x: 380, y: 120 }, { motif: 'flower', x: 240, y: 222, color: 'mint' }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '화분을 종이 구석에 콩알만 하게 그린 그림과 종이 가득 크게 그린 그림을 나란히 보여 준다. "어느 그림에서 잎 모양이 잘 보이나요?" 큰 그림을 이끌어 낸 뒤 "작게 그리면 자세히 본 것을 넣을 자리가 없어요. 오늘은 가까이 보고, 크게 나타내요." 모둠마다 교실 화분 하나를 책상 가운데에 놓는다. 시연 단추로 화분이 판 가득 붙는 모습을 보여 준다.',
        student: '두 그림을 견주어 보고, 화분이 더 잘 보이는 그림을 손으로 가리켜요.',
        demo: { tool: 'collage', options: { readOnly: true }, sequence: [{ has: [{ shape: 'square', color: '갈색', size: 'l', n: 1 }, { shape: 'leaf', color: '초록', size: 'l', n: 2 }] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 화분을 가까이 보고 말하기', minutes: 12, tool: 'mindmap',
            teacher: '"코가 닿지 않을 만큼 가까이 가서 봐요. 잎 끝은 어떤가요? 줄기에는 무엇이 있나요?" 학생이 말한 것을 잎·줄기·화분 칸으로 칠판에 적는다. "초록색이에요"만 말하는 학생에게 "손가락으로 잎 가장자리를 따라가 보면 어떤가요?" 하고 모양을 말하게 한다. 잎은 만지지 않고 손가락으로 공중에서 따라 그리게 한다.',
            task: '화분을 가까이 보고 알게 된 것을 잎·줄기·화분으로 나누고, 크게 그린 그림을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '화분을 가까이 보고 알게 된 것을 잎·줄기·화분으로 나누어 보세요.', toolOptions: { topic: '가까이 본 화분', slots: ['잎', '줄기', '화분'], cards: ['가장자리가 톱니처럼 들쭉날쭉해요', '잎맥이 갈래갈래 뻗어 있어요', '여러 잎을 매달고 위로 뻗어요', '마디가 볼록볼록 나 있어요', '흙이 담겨 있어요', '바닥에 물 빠지는 구멍이 있어요'] },
                target: { sort: { '잎': ['가장자리가 톱니처럼 들쭉날쭉해요', '잎맥이 갈래갈래 뻗어 있어요'], '줄기': ['여러 잎을 매달고 위로 뻗어요', '마디가 볼록볼록 나 있어요'], '화분': ['흙이 담겨 있어요', '바닥에 물 빠지는 구멍이 있어요'] } }, difficulty: 0.25,
                levels: { easy: { prompt: '화분을 가까이 보고 알게 된 것을 잎과 화분으로 나누어 보세요.', toolOptions: { slots: ['잎', '화분'], cards: ['가장자리가 톱니처럼 들쭉날쭉해요', '잎맥이 갈래갈래 뻗어 있어요', '흙이 담겨 있어요', '바닥에 물 빠지는 구멍이 있어요'] }, target: { sort: { '잎': ['가장자리가 톱니처럼 들쭉날쭉해요', '잎맥이 갈래갈래 뻗어 있어요'], '화분': ['흙이 담겨 있어요', '바닥에 물 빠지는 구멍이 있어요'] } } } },
                hints: ['카드를 읽고 화분의 어디를 보아야 알 수 있는지 떠올려요.', '톱니·잎맥은 잎에서, 마디는 줄기에서, 흙과 구멍은 화분에서 보여요.', '잎: 톱니 가장자리·잎맥, 줄기: 잎 매달기·마디, 화분: 흙·물 빠지는 구멍이에요.'] },
              { prompt: '종이 가운데에 크게 그린 그림만 골라 보세요.', toolOptions: { mode: 'pick', basket: '크게 그린 그림', cards: ['종이 가운데에 꽉 차게 그린 화분', '종이 구석에 콩알만 하게 그린 화분', '종이 가운데에 크게 그린 사물함', '종이 아래 끝에 조그맣게 그린 사물함'] },
                target: { pick: ['종이 가운데에 꽉 차게 그린 화분', '종이 가운데에 크게 그린 사물함'] }, difficulty: 0.15 },
              { prompt: '모둠 화분을 가까이 보고, 잎·줄기·화분에서 찾은 것을 하나씩 짝에게 말해요. 다 하면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 판 가득 화분 만들기', minutes: 14, tool: 'collage',
            teacher: '"가장 큰 화분부터 판 가운데 아래쪽에 붙이고, 그 위로 줄기와 잎을 크게 붙여요." 작은 조각만 고르는 학생에게 "판의 반이 넘게 차도록 해 볼까요?" 하고 묻는다. 끝 문항은 종이에 크레파스로 그려도 된다.',
            task: '화분·줄기·잎 조각을 크게 골라 판 가운데에 붙여요.',
            levels: ART2_LV,
            items: [
              { prompt: '갈색 큰 네모 화분 하나, 초록 긴 네모 줄기 하나, 초록 큰 나뭇잎 세 개를 붙여 보세요.', target: { has: [{ shape: 'square', color: '갈색', size: 'l', n: 1 }, { shape: 'rect', color: '초록', n: 1 }, { shape: 'leaf', color: '초록', size: 'l', n: 3 }] }, difficulty: 0.2,
                hints: ['화분·줄기·잎을 하나씩 짚으며 모양·색·크기를 골라요.', '화분은 갈색 큰 네모, 줄기는 초록 긴 네모, 잎은 초록 큰 나뭇잎이에요.', '갈색 큰 네모 1개, 초록 긴 네모 1개, 초록 큰 나뭇잎 3개를 붙여요.'] },
              { prompt: '화분에 꽃이 피었어요. 노랑 큰 동그라미 꽃 가운데 하나와 노랑 나뭇잎 꽃잎 여섯 개를 붙여 보세요.', state: { pieces: [{ shape: 'square', color: '갈색', size: 'l', x: 280, y: 320, r: 0 }, { shape: 'rect', color: '초록', size: 'l', x: 280, y: 220, r: 90 }] },
                target: { has: [{ shape: 'circle', color: '노랑', size: 'l', n: 1 }, { shape: 'leaf', color: '노랑', n: 6 }] }, difficulty: 0.25 },
              { prompt: '교실에서 본 식물이나 물건 하나를 판 가운데에 크게 만들고, 해낸 것을 표시해요.', target: { pieces: { min: 3 }, selfCheck: ['판 가운데에 놓았어요', '판의 반이 넘게 차도록 크게 만들었어요'] }, difficulty: 0.15 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '두세 명의 작품을 보여 주며 "가까이 보고 찾은 것을 어디에 넣었나요?" 하고 묻는다. 크게 만들어 잎맥·톱니까지 넣은 작품을 함께 칭찬한다. 다음 시간에는 학교 화단에 나가 돋보기로 꽃과 잎을 본다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'collage', options: { shapes: ['circle', 'square', 'leaf'], colors: ['갈색', '초록', '빨강'], sizes: ['s', 'l'] }, prompt: '갈색 큰 네모 하나와 초록 큰 나뭇잎 두 개를 붙여 보세요.', target: { has: [{ shape: 'square', color: '갈색', size: 'l', n: 1 }, { shape: 'leaf', color: '초록', size: 'l', n: 2 }], pieces: { n: 3 } }, difficulty: 0.1 },
          { type: 'choice', prompt: '자세히 본 것이 잘 보이게 그리려면?', options: ['종이 가운데에 크게', '종이 구석에 작게'], answer: 0, difficulty: 0.1, explain: '크게 그려야 자세히 본 것을 넣을 자리가 생겨요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '종이 가득 화분',
      items: [
        { type: 'table', prompt: '화분을 가까이 보고 알게 된 것을 쓰세요.', columns: ['잎', '줄기', '화분'], rows: 2 },
        { type: 'choice', prompt: '바닥에 물 빠지는 구멍이 있는 곳은?', options: ['잎', '화분'], answer: '화분' },
        { type: 'draw', prompt: '교실 화분을 종이 가득 크게 그리세요.' },
        { type: 'short', prompt: '내 그림에 넣은 자세히 본 것 하나를 쓰세요.' },
      ],
      easy: {
        note: '가까이 보고, 크게 그려요.',
        items: [
          { type: 'choice', prompt: '잎맥이 있는 곳은?', options: ['잎', '화분'], answer: '잎' },
          { type: 'choice', prompt: '더 잘 보이는 그림은?', options: ['크게 그린 그림', '작게 그린 그림'], answer: '크게 그린 그림' },
          { type: 'draw', prompt: '잎 하나를 종이 가득 크게 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '잎과 화분 두 칸으로 나누고, 조각 고르개가 단순해요.',
      base: '잎·줄기·화분 세 칸으로 나누고 크기를 맞추어 붙여요.',
      challenge: '모든 조각에서 골라 만들고, 잎맥·마디처럼 가까이 보아야 보이는 것을 두 가지 넣어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 종이 구석에 작게 그린다 → 종이 가운데에 손바닥을 대 보고 "손바닥보다 크게" 그리게 한다. ② 색만 말하고 모양은 말하지 않는다 → 손가락으로 공중에서 가장자리를 따라 그리게 한다. ③ 화분 잎을 뜯거나 만진다 → 눈으로만 본다고 약속한다. 화분은 모둠마다 하나씩, 잎이 넓고 잎맥이 잘 보이는 것으로 준비한다.',
  }));

  lessons.push(L(42, {
    title: '돋보기로 화단의 꽃과 잎 보고 크게 키워 꾸미기',
    objective: '학교 화단의 꽃과 잎을 돋보기로 살펴 가까이 보아야 보이는 부분을 찾고, 그 부분을 크게 키워 꾸밀 수 있다.',
    illustration: ART('children with paper magnifying glasses looking closely at flowers and leaves in a school flower bed, one leaf drawn huge with visible veins', '돋보기로 보아요', [
      { motif: 'flower', x: 120, y: 224, color: 'rose' }, { motif: 'flower', x: 360, y: 226, color: 'buttercup' }, { motif: 'leaf', x: 240, y: 216 }]),
    safety: GARDEN_SAFE,
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '돋보기로 교실 바닥 먼지나 연필 끝을 보여 준다. "눈으로 볼 때와 무엇이 다르게 보이나요?" "오늘은 화단에서 돋보기로만 보이는 것을 찾아요." 돋보기로 해를 보면 눈을 다친다는 약속을 먼저 함께 말한다. 시연 단추로 본 모습과 어디인지 잇는 모습을 보여 준다.',
        student: '돋보기로 연필 끝을 보고, 눈으로 볼 때와 다른 점을 말해요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '어디를 보았나?', slots: [{ id: 's1', label: '가는 털이 보송보송 난 초록 조각' }], cards: ['나뭇잎'], shuffle: false }, sequence: [{ match: { s1: '나뭇잎' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 돋보기로 본 것 찾기', minutes: 13, tool: 'mindmap',
            teacher: '화단 둘레에 모둠별로 서서 돋보기를 돌려 쓴다(한 사람 한 번에 열을 셀 동안). "가까이 보니 새로 보이는 것이 있나요?" 학생이 찾은 것을 교사가 사진으로 찍어 두고 교실에서 판과 함께 본다. \'꽃이 예뻐요\'처럼 멀리서도 알 수 있는 말에는 "돋보기로 보아야만 보이는 것은요?" 하고 되묻는다.',
            task: '돋보기로 본 모습이 어디인지 잇고, 가까이 보아야 보이는 것을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '돋보기로 본 모습이 어디인지 이어 보세요.', toolOptions: { mode: 'match', topic: '어디를 보았나?', slots: [{ id: 's1', label: '가는 줄이 갈래갈래 뻗은 초록 조각' }, { id: 's2', label: '노란 가루가 묻은 가운데 부분' }, { id: 's3', label: '꺼끌꺼끌 갈라진 갈색 껍질' }], cards: ['나뭇잎', '꽃', '나무줄기'] },
                target: { match: { s1: '나뭇잎', s2: '꽃', s3: '나무줄기' } }, difficulty: 0.2,
                levels: { challenge: { toolOptions: { cards: ['나뭇잎', '꽃', '나무줄기', '돌멩이'] } } },
                hints: ['설명의 색과 모양 낱말을 짚어 보세요.', '초록 줄은 잎에, 노란 가루는 꽃 가운데에, 갈색 껍질은 나무에 있어요.', '초록 줄 조각-나뭇잎, 노란 가루-꽃, 갈색 껍질-나무줄기예요.'] },
              { prompt: '돋보기로 가까이 보아야 알 수 있는 것만 골라 보세요.', toolOptions: { mode: 'pick', basket: '가까이 보아야 보여요', cards: ['잎에 난 가는 털', '꽃잎의 가는 줄무늬', '화단이 학교 어디에 있는지', '화단에 나무가 몇 그루인지'] },
                target: { pick: ['잎에 난 가는 털', '꽃잎의 가는 줄무늬'] }, difficulty: 0.2 },
              { prompt: '화단에서 돋보기로 꽃이나 잎 하나를 보고, 새로 보인 것을 짝에게 말해요. 다 하면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 작은 것을 크게 키워 꾸미기', minutes: 14, tool: 'collage',
            teacher: '"돋보기로 본 것처럼, 작은 꽃 하나를 판 가득 키워요." 꽃잎 수를 세며 붙이게 하고, 잎맥은 큰 잎 위에 겹쳐 붙이게 한다. "실제 꽃보다 훨씬 크지요? 크게 키우면 작아서 안 보이던 것까지 보여 줄 수 있어요."',
            task: '돋보기로 본 꽃과 잎을 판 가득 크게 키워 붙여요.',
            levels: ART2_LV,
            items: [
              { prompt: '돋보기로 본 꽃을 크게 키워요. 큰 동그라미 꽃 가운데 하나와 큰 하트 꽃잎 다섯 개를 붙여 보세요.', target: { has: [{ shape: 'circle', size: 'l', n: 1 }, { shape: 'heart', size: 'l', n: 5 }] }, difficulty: 0.2 },
              { prompt: '잎 하나를 크게 키워요. 초록 큰 나뭇잎 하나 위에 잎맥(작은 긴 네모) 세 개를 겹쳐 붙여 보세요.', target: { has: [{ shape: 'leaf', color: '초록', size: 'l', n: 1 }, { shape: 'rect', size: 's', n: 3 }], overlap: 3 }, difficulty: 0.3,
                hints: ['큰 잎을 먼저 붙이고, 그 위에 가는 조각을 얹어요.', '작은 긴 네모를 끌어 잎 위에 놓아야 겹쳐요. 잎 밖에 있으면 겹친 것이 아니에요.', '초록 큰 나뭇잎 1개를 붙이고, 작은 긴 네모 3개를 모두 그 잎 위로 옮겨요.'] },
              { prompt: '화단에서 돋보기로 본 것 하나를 판 가득 크게 만들고, 해낸 것을 표시해요.', target: { pieces: { min: 3 }, selfCheck: ['돋보기로 본 부분을 넣었어요', '실제보다 크게 키웠어요'] }, difficulty: 0.15 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '찍어 둔 사진과 학생 작품을 나란히 보여 주며 "돋보기로 보고 무엇을 새로 알게 되었나요?" 하고 묻는다. 두세 명이 말한다. 다음 시간에는 학교 물건에 상상한 것을 덧붙여 본다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'pick', basket: '가까이 보아야 보여요', cards: ['개미 다리의 마디', '운동장이 얼마나 넓은지', '꽃받침의 잔털'] }, prompt: '돋보기로 가까이 보아야 알 수 있는 것만 골라 보세요.', target: { pick: ['개미 다리의 마디', '꽃받침의 잔털'] }, difficulty: 0.15 },
          { type: 'choice', prompt: '작은 꽃잎 무늬를 잘 보여 주려면 어떻게 그릴까요?', options: ['실제보다 크게 키워 그려요', '실제보다 더 작게 그려요'], answer: 0, difficulty: 0.1, explain: '크게 키우면 작아서 안 보이던 무늬까지 보여 줄 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '돋보기로 본 화단',
      items: [
        { type: 'table', prompt: '돋보기로 본 것을 쓰세요.', columns: ['무엇을 보았나요', '새로 보인 것'], rows: 3 },
        { type: 'choice', prompt: '돋보기로 보면 안 되는 것은?', options: ['해', '나뭇잎'], answer: '해' },
        { type: 'draw', prompt: '돋보기로 본 꽃이나 잎 하나를 종이 가득 크게 그리세요.' },
        { type: 'short', prompt: '돋보기로 보아서 새로 알게 된 것을 쓰세요.' },
      ],
      easy: {
        note: '돋보기로 가까이 보면 작은 것이 보여요.',
        items: [
          { type: 'choice', prompt: '노란 가루가 묻은 곳은?', options: ['꽃 가운데', '나무줄기'], answer: '꽃 가운데' },
          { type: 'choice', prompt: '꽃과 잎은?', options: ['눈으로만 봐요', '꺾어서 봐요'], answer: '눈으로만 봐요' },
          { type: 'draw', prompt: '돋보기로 본 잎을 크게 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '잇기 카드가 딱 맞는 세 장이고, 조각 고르개가 단순해요.',
      base: '돋보기로 본 꽃과 잎을 크기를 맞추어 키워 붙여요.',
      challenge: '함정 카드(돌멩이)가 섞인 잇기를 하고, 돋보기로 본 것 두 가지를 한 작품에 넣어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 돋보기를 눈에 너무 붙이거나 너무 멀리 든다 → 돋보기를 눈 가까이 두고 물건 쪽으로 천천히 다가가게 한다. ② 꽃을 꺾어 가져오려 한다 → 눈으로만 보고 사진은 교사가 찍는다. ③ 실제보다 크게 그리면 틀린다고 여긴다 → 돋보기 속 모습도 실제보다 크다는 것을 함께 확인한다. 날씨가 나쁘면 교실 화분과 교사가 미리 따 온 낙엽으로 대신한다.',
  }));

  lessons.push(L(43, {
    title: '학교 물건에 상상한 것 덧붙여 새 물건 만들기',
    objective: '학교 물건을 본 대로 만든 뒤 상상한 것을 덧붙여 새 물건으로 바꾸고, 실제와 다른 그림도 멋진 작품임을 말할 수 있다.',
    illustration: ART('a yellow paper school bus with big bird wings flying over a school, and a wooden chair with wheels rolling below', '하늘을 나는 버스', [
      { motif: 'cloud', x: 140, y: 90 }, { motif: 'bird', x: 340, y: 84 }, { motif: 'house', x: 400, y: 216, color: 'peach', s: 0.8 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '해를 파랑으로 칠하고 웃는 얼굴을 그린 그림을 보여 준다. "이 그림은 틀린 그림일까요?" 여러 생각을 들은 뒤 "본 대로 그린 그림도, 상상을 덧붙인 그림도 모두 멋진 작품이에요. 다만 무엇을 상상했는지 말할 수 있으면 더 좋아요." 시연 단추로 본 대로 그린 곳과 상상한 곳이 나뉘는 모습을 보여 준다.',
        student: '파란 해 그림을 보고, 틀린 그림인지 내 생각을 말해요.',
        demo: { tool: 'mindmap', options: { topic: '하늘을 나는 학교 버스', slots: ['본 대로', '상상해서'], cards: ['동그란 바퀴', '새처럼 펼친 날개'], shuffle: false }, sequence: [{ sort: { '본 대로': ['동그란 바퀴'], '상상해서': ['새처럼 펼친 날개'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 본 대로와 상상해서', minutes: 11, tool: 'mindmap',
            teacher: '"진짜 학교 버스에도 있는 것은 \'본 대로\', 진짜 버스에는 없는데 그린 사람이 떠올린 것은 \'상상해서\'에 놓아요." \'실제와 다르면 틀린 그림\'이라고 말하는 학생에게 "그린 사람이 일부러 바꾼 거라면요?" 하고 되묻는다.',
            task: '상상 그림에서 본 대로 그린 곳과 상상해서 덧붙인 곳을 나누고, 상상 그림에 맞는 말을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '\'하늘을 나는 학교 버스\' 그림에서 본 대로 그린 곳과 상상해서 덧붙인 곳을 나누어 보세요.', toolOptions: { topic: '하늘을 나는 학교 버스', slots: ['본 대로', '상상해서'], cards: ['네모난 창문', '동그란 바퀴', '새처럼 펼친 날개', '무지개색 꼬리'] },
                target: { sort: { '본 대로': ['네모난 창문', '동그란 바퀴'], '상상해서': ['새처럼 펼친 날개', '무지개색 꼬리'] } }, difficulty: 0.15,
                levels: { challenge: { prompt: '\'하늘을 나는 학교 버스\' 그림에서 본 대로 그린 곳과 상상해서 덧붙인 곳을 나누어 보세요. 카드가 여섯 장이에요.', toolOptions: { cards: ['네모난 창문', '동그란 바퀴', '새처럼 펼친 날개', '무지개색 꼬리', '운전대', '구름을 뿜는 굴뚝'] }, target: { sort: { '본 대로': ['네모난 창문', '동그란 바퀴', '운전대'], '상상해서': ['새처럼 펼친 날개', '무지개색 꼬리', '구름을 뿜는 굴뚝'] } } } },
                hints: ['진짜 학교 버스를 떠올려 보세요. 그 버스에도 있나요?', '진짜 버스에 있으면 본 대로, 없으면 상상해서예요.', '창문·바퀴(·운전대)는 본 대로, 날개·무지개 꼬리(·굴뚝)는 상상해서예요.'] },
              { prompt: '상상 그림에 대해 맞는 말만 골라 보세요.', toolOptions: { mode: 'pick', basket: '맞는 말', cards: ['실제와 달라도 멋진 그림이에요', '무엇을 덧붙였는지 말할 수 있어요', '실제와 다르면 틀린 그림이에요', '본 것만 그려야 해요'] },
                target: { pick: ['실제와 달라도 멋진 그림이에요', '무엇을 덧붙였는지 말할 수 있어요'] }, difficulty: 0.2 },
              { prompt: '교실 물건 하나를 골라 "이 물건이 ○○ 한다면?" 하고 상상한 것을 짝에게 말해요. 다 하면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 학교 물건을 새 물건으로 바꾸기', minutes: 15, tool: 'collage',
            teacher: '"판에 본 대로 만든 학교 물건이 있어요. 상상한 것을 덧붙여 새 물건으로 바꾸어 봐요." 다 바꾼 학생에게 "무엇을 덧붙였나요? 그러면 이 물건은 무엇을 할 수 있나요?" 하고 묻는다. 끝 문항은 내가 고른 물건을 처음부터 만든다.',
            task: '본 대로 만든 학교 물건에 상상한 조각을 덧붙여 새 물건으로 바꾸어요.',
            levels: ART2_LV,
            items: [
              { prompt: '노랑 학교 버스예요. 세모 날개 두 개를 덧붙여 하늘을 나는 버스로 바꾸어 보세요.', state: { pieces: [{ shape: 'rect', color: '노랑', size: 'l', x: 280, y: 200, r: 0 }, { shape: 'circle', color: '검정', size: 's', x: 220, y: 260, r: 0 }, { shape: 'circle', color: '검정', size: 's', x: 340, y: 260, r: 0 }] },
                target: { has: [{ shape: 'triangle', min: 2 }], pieces: { min: 5 } }, difficulty: 0.15 },
              { prompt: '갈색 의자예요. 동그라미 바퀴 네 개를 덧붙여 굴러다니는 의자로 바꾸어 보세요.', state: { pieces: [{ shape: 'square', color: '갈색', size: 'l', x: 280, y: 160, r: 0 }, { shape: 'rect', color: '갈색', size: 'm', x: 240, y: 260, r: 90 }, { shape: 'rect', color: '갈색', size: 'm', x: 320, y: 260, r: 90 }] },
                target: { has: [{ shape: 'circle', n: 4 }] }, difficulty: 0.2,
                levels: { easy: { state: { pieces: [{ shape: 'square', color: '갈색', size: 'l', x: 280, y: 160, r: 0 }, { shape: 'rect', color: '갈색', size: 'l', x: 240, y: 260, r: 90 }, { shape: 'rect', color: '갈색', size: 'l', x: 320, y: 260, r: 90 }] } } } },
              { prompt: '학교 물건 하나를 본 대로 만들고 상상한 것을 덧붙여, 무엇을 할 수 있게 되었는지 짝에게 말해요.', target: { pieces: { min: 4 }, selfCheck: ['학교 물건을 본 대로 만들었어요', '상상한 조각을 덧붙였어요', '무엇을 할 수 있게 되었는지 짝에게 말했어요'] }, difficulty: 0.15 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '새 물건 작품을 서너 개 보여 주며 "이 물건은 무엇을 할 수 있나요?" 하고 만든 친구가 말하게 한다. 실제와 다르게 만든 작품마다 무엇을 상상했는지 박수와 함께 들어 준다. 다음 시간에는 학교 나무 앞에서 "만약 ~라면?" 하고 물으며 상상해 본다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '다리가 달린 책가방', slots: ['본 대로', '상상해서'], cards: ['어깨에 메는 끈', '걸어가는 두 다리'] }, prompt: '\'다리가 달린 책가방\' 그림에서 본 대로 그린 곳과 상상해서 덧붙인 곳을 나누어 보세요.', target: { sort: { '본 대로': ['어깨에 메는 끈'], '상상해서': ['걸어가는 두 다리'] } }, difficulty: 0.1 },
          { type: 'choice', prompt: '친구가 교실 시계에 날개를 그렸어요. 어떻게 말해 줄까요?', options: ['"시계에는 날개가 없어. 틀렸어."', '"날개를 덧붙여서 날아다니는 시계가 됐네!"'], answer: 1, difficulty: 0.1, explain: '실제와 다르게 그린 것도 상상을 덧붙인 멋진 그림이에요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '새 물건 만들기',
      items: [
        { type: 'table', prompt: '내가 바꾼 학교 물건을 쓰세요.', columns: ['학교 물건', '덧붙인 것', '할 수 있게 된 일'], rows: 2 },
        { type: 'choice', prompt: '실제와 다르게 그린 그림은?', options: ['상상을 덧붙인 그림이에요', '틀린 그림이에요'], answer: '상상을 덧붙인 그림이에요' },
        { type: 'draw', prompt: '학교 물건 하나를 그리고, 상상한 것을 덧붙여 새 물건으로 바꾸세요.' },
        { type: 'short', prompt: '내 새 물건의 이름을 지어 쓰세요.' },
      ],
      easy: {
        note: '본 대로 그리고, 상상한 것을 하나 덧붙여요.',
        items: [
          { type: 'choice', prompt: '진짜 버스에 있는 것은?', options: ['바퀴', '날개'], answer: '바퀴' },
          { type: 'choice', prompt: '날개 달린 버스 그림은?', options: ['멋진 상상 그림', '틀린 그림'], answer: '멋진 상상 그림' },
          { type: 'draw', prompt: '의자에 상상한 것 하나를 덧붙여 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '카드 네 장으로 나누고, 의자 다리가 크게 놓여 있어 바퀴 자리가 잘 보여요.',
      base: '본 대로·상상해서를 나누고 판의 물건에 조각을 덧붙여요.',
      challenge: '카드 여섯 장을 나누고, 덧붙인 조각으로 물건이 할 수 있게 된 일을 두 가지 말해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 실제와 다르게 그리면 틀린 그림이라고 여긴다 → 도입의 파란 해 그림처럼 일부러 바꾼 그림을 여러 장 보여 준다. ② 덧붙이기만 하고 무엇이 되었는지 말하지 못한다 → "이제 이 물건은 무엇을 할 수 있나요?" 하고 묻는다. ③ 처음부터 상상만 하다 물건이 무엇인지 알 수 없게 된다 → 본 대로 먼저, 상상은 그다음이라는 차례를 지키게 한다.',
  }));

  lessons.push(L(44, {
    title: '"만약 ~라면?" 물으며 학교 나무를 상상 나무로 꾸미기',
    objective: '학교 나무를 보며 "만약 ~라면?" 하고 상상 물음을 만들고, 그 물음에서 떠오른 것을 덧붙여 나만의 상상 나무를 꾸밀 수 있다.',
    illustration: ART('a big paper school tree with star-shaped fruits and heart leaves, a child under it with a speech bubble asking what if', '만약 ~라면?', [
      { motif: 'tree', x: 120, y: 214 }, { motif: 'star', x: 360, y: 90, s: 0.7 }, { motif: 'bird', x: 300, y: 70 }]),
    safety: WALK_SAFE,
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '운동장 가장자리 나무 앞에 모인다(교실에서 창밖 나무를 보아도 된다). "이 나무에서 무엇이 보이나요?" 줄기·가지·잎을 말한 뒤 "그럼, 만약 이 나무에 사탕이 열린다면? 만약 이 나무가 걸을 수 있다면?" 하고 묻는다. "\'만약 ~라면?\' 하고 물으면 상상이 시작돼요." 시연 단추로 물음과 상상 그림이 이어지는 모습을 보여 준다.',
        student: '학교 나무를 보고 보이는 것을 말한 뒤, 선생님의 "만약" 물음에 떠오른 것을 말해요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '만약 ~라면?', slots: [{ id: 's1', label: '만약 학교 나무에 사탕이 열린다면?' }], cards: ['알록달록 사탕이 매달린 나무'], shuffle: false }, sequence: [{ match: { s1: '알록달록 사탕이 매달린 나무' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. "만약 ~라면?" 물음 만들기', minutes: 11, tool: 'mindmap',
            teacher: '"\'만약 ~라면?\' 물음은 보이는 것을 묻지 않고, 아직 없는 것을 떠올리게 해요." \'나무는 무슨 색이에요?\'처럼 보이는 것을 묻는 말과 견주게 한다. 학생이 만든 물음을 칠판 나무 그림 둘레에 붙인다.',
            task: '"만약" 물음과 떠오른 그림을 잇고, 상상을 여는 물음을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '"만약" 물음과 떠오른 그림을 이어 보세요.', toolOptions: { mode: 'match', topic: '만약 ~라면?', slots: [{ id: 's1', label: '만약 미끄럼틀이 물로 되어 있다면?' }, { id: 's2', label: '만약 교실 시계에 얼굴이 있다면?' }, { id: 's3', label: '만약 학교 나무가 걸을 수 있다면?' }], cards: ['물이 흘러내리는 미끄럼틀', '눈과 입이 있는 시계', '뿌리로 걸어가는 나무'] },
                target: { match: { s1: '물이 흘러내리는 미끄럼틀', s2: '눈과 입이 있는 시계', s3: '뿌리로 걸어가는 나무' } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['물이 흘러내리는 미끄럼틀', '눈과 입이 있는 시계', '뿌리로 걸어가는 나무', '잎이 초록인 나무'] } } } },
              { prompt: '상상을 여는 "만약" 물음만 골라 보세요.', toolOptions: { mode: 'pick', basket: '상상을 여는 물음', cards: ['만약 구름이 솜사탕이라면?', '만약 신발장이 노래를 한다면?', '나무에 잎이 몇 장이에요?', '운동장은 무슨 색이에요?'] },
                target: { pick: ['만약 구름이 솜사탕이라면?', '만약 신발장이 노래를 한다면?'] }, difficulty: 0.2,
                hints: ['보이는 것을 묻는 말과 아직 없는 것을 떠올리게 하는 말을 견주어요.', '"만약 ~라면?"으로 묻는 말이 상상을 열어요.', '구름이 솜사탕이라면, 신발장이 노래한다면 — 이 두 물음을 골라요.'] },
              { prompt: '학교 나무를 보며 "만약 ~라면?" 물음을 하나 만들어 짝에게 묻고, 짝의 대답을 들어요. 바꾸어 해요. 다 하면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 상상 나무 꾸미기', minutes: 15, tool: 'collage',
            teacher: '"판에 학교 나무가 있어요. 내 \'만약\' 물음에서 떠오른 것을 덧붙여 상상 나무로 만들어요." 두 번째 문항은 접는 선 양쪽이 똑같은 나무다. 짝 조각을 접는 선에서 같은 칸만큼 떨어지게 놓도록 손가락으로 칸을 세게 한다.',
            task: '학교 나무에 상상한 열매와 무늬를 덧붙여 나만의 상상 나무를 꾸며요.',
            levels: ART2_LV,
            items: [
              { prompt: '만약 나무에 별이 열린다면? 학교 나무에 별 열매를 네 개 넘게 매달아 보세요.', state: { pieces: [{ shape: 'rect', color: '갈색', size: 'l', x: 280, y: 300, r: 90 }, { shape: 'circle', color: '초록', size: 'l', x: 280, y: 160, r: 0 }] },
                target: { has: [{ shape: 'star', min: 5 }] }, difficulty: 0.15 },
              { prompt: '접는 선 양쪽이 똑같은 상상 나무예요. 하트 열매 한 쌍을 선 양쪽에 짝지어 붙여 보세요.', state: { pieces: [{ shape: 'rect', color: '갈색', size: 'l', x: 280, y: 300, r: 90 }, { shape: 'circle', color: '초록', size: 'l', x: 280, y: 160, r: 0 }] },
                target: { symmetry: 'vertical', has: [{ shape: 'heart', min: 2 }] }, difficulty: 0.35,
                hints: ['접는 선을 거울이라고 생각해요.', '한쪽에 하트를 붙였으면, 같은 색·크기 하트를 반대쪽 같은 칸 수만큼 떨어진 곳에 붙여요.', '왼쪽 하트가 선에서 세 칸 떨어져 있으면, 오른쪽에도 세 칸 떨어진 같은 높이에 같은 하트를 놓아요.'] },
              { prompt: '내가 만든 "만약" 물음으로 상상 나무를 꾸미고, 해낸 것을 표시해요.', target: { pieces: { min: 4 }, selfCheck: ['줄기와 잎을 크게 만들었어요', '"만약" 물음에서 떠오른 것을 덧붙였어요', '내 물음을 짝에게 말해 주었어요'] }, difficulty: 0.15 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '상상 나무 작품을 칠판에 숲처럼 모아 붙인다. "이 나무는 어떤 \'만약\' 물음에서 나왔을까요?" 반 친구들이 짐작하고 만든 친구가 답한다. 다음 시간에는 그동안 만든 과정을 돌아보며 재미있었던 때를 이야기한다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'pick', basket: '상상을 여는 물음', cards: ['만약 책가방이 하늘을 난다면?', '책가방은 무슨 색이에요?', '만약 연필이 춤을 춘다면?'] }, prompt: '상상을 여는 "만약" 물음만 골라 보세요.', target: { pick: ['만약 책가방이 하늘을 난다면?', '만약 연필이 춤을 춘다면?'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '"만약 운동장이 바다라면?"에서 떠오른 그림은?', options: ['물고기가 헤엄치는 운동장', '흙이 깔린 운동장'], answer: 0, difficulty: 0.1, explain: '"만약" 물음은 아직 없는 것을 떠올리게 해요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '상상 나무',
      items: [
        { type: 'short', prompt: '학교 나무를 보고 "만약 ~라면?" 물음을 하나 쓰세요.' },
        { type: 'choice', prompt: '상상을 여는 물음은?', options: ['만약 나무가 말을 한다면?', '나무가 몇 그루예요?'], answer: '만약 나무가 말을 한다면?' },
        { type: 'draw', prompt: '내 물음에서 떠오른 상상 나무를 종이 가득 그리세요.' },
        { type: 'table', prompt: '내 상상 나무를 소개하세요.', columns: ['덧붙인 것', '그렇게 한 까닭'], rows: 2 },
      ],
      easy: {
        note: '"만약 ~라면?" 하고 물어요.',
        items: [
          { type: 'choice', prompt: '상상 물음은?', options: ['만약 나무에 사탕이 열린다면?', '나무는 무슨 색이에요?'], answer: '만약 나무에 사탕이 열린다면?' },
          { type: 'draw', prompt: '나무에 열렸으면 하는 것을 그리세요.' },
          { type: 'short', prompt: '내 나무에 열린 것을 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '딱 맞는 카드 세 장으로 잇고, 조각 고르개가 단순해요.',
      base: '"만약" 물음을 고르고, 별·하트 열매를 덧붙여 꾸며요.',
      challenge: '함정 카드가 섞인 잇기를 하고, 대칭 나무에 하트 말고 다른 조각 짝도 더 붙여요.',
    },
    teacherNotes: '자주 보이는 어려움: ① "만약"을 붙였지만 보이는 것을 묻는다(만약 나무가 초록이라면?) → "지금도 그렇지 않나요? 아직 없는 것을 떠올려 봐요." ② 대칭 나무에서 짝 조각의 거리가 다르다 → 접는 선에서 칸을 손가락으로 세게 한다. ③ 나무 앞에서 가지를 당긴다 → 나무는 눈으로만 본다. 바깥이 어려우면 창밖 나무로 한다.',
  }));

  // ───────────────────────── 45~48차시: 만드는 과정 돌아보기, 친구 작품의 좋은 점, 고쳐 다시 하기, 단원 정리 ─────────────────────────

  lessons.push(L(45, {
    title: '만드는 중간에 멈추어 재미있었던 때 말하기',
    objective: '작품을 만드는 중간과 다 만든 뒤에 멈추어, 가장 재미있었던 때를 "~할 때 ~했어요"로 말할 수 있다.',
    illustration: ART('a half-finished paper playground swing on a desk, two children pausing with glue sticks in hand and talking happily', '만들다 멈추고 말해요', [
      { motif: 'star', x: 120, y: 86, s: 0.6 }, { motif: 'flower', x: 380, y: 226, color: 'peach' }, { motif: 'tree', x: 90, y: 214 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '반쯤 만든 선생님 작품을 들어 보인다. "선생님은 아직 다 못 만들었어요. 그런데 벌써 이야기하고 싶은 게 있어요. 다 만들기 전에 이야기해도 될까요?" 대답을 들은 뒤 "줄을 붙일 때 그네가 진짜처럼 흔들려 보여서 재미있었어요." 하고 \'~할 때 ~했어요\' 틀로 말해 준다. 시연 단추로 지금까지 해 온 일이 차례대로 놓이는 모습을 보여 준다.',
        student: '선생님 작품을 보고, 다 만들기 전에도 이야기할 수 있는지 내 생각을 말해요.',
        demo: { tool: 'timeline', options: { axis: ['먼저', '나중'], cards: ['자세히 살펴보기', '상상한 것 덧붙이기'], slots: 2, shuffle: false }, sequence: [{ order: ['자세히 살펴보기', '상상한 것 덧붙이기'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 지금까지 해 온 일 떠올리기', minutes: 11, tool: 'timeline',
            teacher: '37차시부터 만든 작품을 책상에 꺼내 놓게 한다. "무엇부터 했지요? 그때 가장 재미있었던 것은?" 작품을 짚으며 차례를 떠올리게 한다. \'재미있었어요\'만 말하는 학생에게 "무엇을 할 때요?" 하고 되묻는다.',
            task: '지금까지 해 온 일을 차례대로 놓고, 재미있었던 때를 말한 것을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '우리가 해 온 일을 한 차례대로 놓아 보세요.', toolOptions: { axis: ['먼저', '나중'], cards: ['눈에 띄는 모양 찾기', '종이 가득 크게 만들기', '상상한 것 덧붙이기'], slots: 3 },
                target: { order: ['눈에 띄는 모양 찾기', '종이 가득 크게 만들기', '상상한 것 덧붙이기'] }, difficulty: 0.2,
                levels: { challenge: { prompt: '우리가 해 온 일을 한 차례대로 놓아 보세요. 오늘 하는 일까지 넷이에요.', toolOptions: { cards: ['눈에 띄는 모양 찾기', '종이 가득 크게 만들기', '상상한 것 덧붙이기', '재미있었던 때 말하기'], slots: 4 }, target: { order: ['눈에 띄는 모양 찾기', '종이 가득 크게 만들기', '상상한 것 덧붙이기', '재미있었던 때 말하기'] } } },
                hints: ['책상에 꺼낸 작품을 만든 날 차례로 늘어놓아 보세요.', '먼저 살펴보고, 그다음 크게 만들고, 그 뒤에 바꾸었어요.', '모양 찾기 → 크게 만들기 → 상상 덧붙이기(→ 오늘 재미있었던 때 말하기) 차례예요.'] },
              { prompt: '재미있었던 때를 콕 집어 말한 것만 골라 보세요.', toolOptions: { mode: 'pick', basket: '재미있었던 때', cards: ['"잎을 크게 붙일 때 신났어요"', '"버스에 날개를 달 때 웃음이 났어요"', '"다 했어요"', '"몰라요"'] },
                target: { pick: ['"잎을 크게 붙일 때 신났어요"', '"버스에 날개를 달 때 웃음이 났어요"'] }, difficulty: 0.15,
                hints: ['\'무엇을 할 때\'가 들어 있는 말을 찾아요.', '"다 했어요", "몰라요"에는 무엇을 할 때인지가 없어요.', '잎을 크게 붙일 때, 날개를 달 때 — 이 두 말을 골라요.'] },
              { prompt: '지난 작품 하나를 짝에게 보여 주며 "~할 때 ~했어요"로 재미있었던 때를 말해요. 다 하면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 만들다 멈추어 말하기', minutes: 15, tool: 'collage',
            teacher: '"오늘은 운동장 그네를 만들어요. 기둥 두 개를 붙이면 손을 멈추고 짝에게 지금까지 재미있었던 점을 말해요. 그리고 다시 이어 만들어요." 교사가 손뼉을 두 번 치면 모두 멈추고 짝과 30초 이야기하게 한다. 다 만든 뒤에도 한 번 더 말한다.',
            task: '그네와 놀이 기구를 만들며, 중간에 멈추어 짝과 재미있었던 점을 말해요.',
            levels: ART2_LV,
            items: [
              { prompt: '운동장 그네를 만들어요. 갈색 긴 네모 기둥 두 개, 검정 긴 네모 줄 두 개, 빨강 네모 앉는 판 하나를 붙여 보세요.', target: { has: [{ shape: 'rect', color: '갈색', n: 2 }, { shape: 'rect', color: '검정', n: 2 }, { shape: 'square', color: '빨강', n: 1 }] }, difficulty: 0.2,
                hints: ['기둥·줄·앉는 판을 하나씩 짚으며 모양과 색을 골라요.', '기둥은 갈색 긴 네모, 줄은 검정 긴 네모, 앉는 판은 빨강 네모예요.', '갈색 긴 네모 2개, 검정 긴 네모 2개, 빨강 네모 1개를 붙여요.'] },
              { prompt: '그네에 상상한 것을 덧붙여요. 손뼉 소리에 멈추어 짝에게 말하고, 이어서 끝까지 꾸며 해낸 것을 표시해요.', state: { pieces: [{ shape: 'rect', color: '갈색', size: 'l', x: 180, y: 200, r: 90 }, { shape: 'rect', color: '갈색', size: 'l', x: 380, y: 200, r: 90 }, { shape: 'rect', color: '검정', size: 's', x: 260, y: 220, r: 90 }, { shape: 'rect', color: '검정', size: 's', x: 300, y: 220, r: 90 }, { shape: 'square', color: '빨강', size: 's', x: 280, y: 280, r: 0 }] },
                target: { pieces: { min: 6 }, selfCheck: ['만드는 중간에 멈추어 짝에게 말했어요', '다 만든 뒤에도 짝에게 말했어요'] }, difficulty: 0.15 },
              { prompt: '종이에 크레파스로 미끄럼틀이나 시소를 그리다가, 반쯤 그렸을 때 짝에게 재미있는 점을 말하고 이어서 그려요. 다 하면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 만드는 중간에 짝과 이야기해 보니 어땠나요?" 두세 명이 말한다. 짝의 말을 듣고 생각이 바뀌어 더 꾸민 학생이 있으면 함께 듣는다. 다음 시간에는 친구 작품을 둘러보며 좋은 점을 찾아 말해 준다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'pick', basket: '재미있었던 때', cards: ['"구름에 귀를 붙일 때 웃겼어요"', '"그냥요"', '"돋보기로 잎을 볼 때 신기했어요"'] }, prompt: '재미있었던 때를 콕 집어 말한 것만 골라 보세요.', target: { pick: ['"구름에 귀를 붙일 때 웃겼어요"', '"돋보기로 잎을 볼 때 신기했어요"'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '그림을 다 그리기 전에도 재미있었던 때를 말할 수 있을까요?', options: ['네, 그리는 중간에도 말할 수 있어요', '아니요, 다 그린 뒤에만 말해요'], answer: 0, difficulty: 0.1, explain: '만드는 중간에도, 다 만든 뒤에도 이야기할 수 있어요.' },
          { type: 'tool', tool: 'emotion', options: { mode: 'scale', steps: 3, situation: '그네를 만들다 멈추고 짝과 이야기했어요.', feeling: '즐거움', ask: '오늘 만들기는 얼마나 즐거웠나요?' }, prompt: '오늘 만들기가 얼마나 즐거웠는지 솔직하게 골라 보세요. 정답은 없어요.', target: { level: 'any' }, difficulty: 0.05 },
        ],
      },
    ],
    worksheet: {
      title: '재미있었던 때',
      items: [
        { type: 'table', prompt: '만들면서 재미있었던 때를 쓰세요.', columns: ['언제', '무엇을 할 때', '어떤 마음'], cells: [['만드는 중간', '', ''], ['다 만든 뒤', '', '']] },
        { type: 'choice', prompt: '재미있었던 때를 잘 말한 것은?', options: ['"줄을 붙일 때 신났어요"', '"몰라요"'], answer: '"줄을 붙일 때 신났어요"' },
        { type: 'draw', prompt: '만들면서 가장 재미있었던 때의 내 모습을 그리세요.' },
        { type: 'short', prompt: '"~할 때 ~했어요"로 한 문장을 쓰세요.' },
      ],
      easy: {
        note: '"~할 때 ~했어요"로 말해요.',
        items: [
          { type: 'choice', prompt: '다 만들기 전에도 말할 수 있나요?', options: ['네', '아니요'], answer: '네' },
          { type: 'draw', prompt: '재미있었던 때를 그리세요.' },
          { type: 'short', prompt: '무엇을 할 때 재미있었나요?' },
        ],
      },
    },
    differentiation: {
      easy: '차례 카드가 셋이고, 맞는 칸에 놓으면 바로 초록 테두리가 보여요. 조각 고르개가 단순해요.',
      base: '세 일을 차례대로 놓고, 그네를 만들며 중간에 멈추어 말해요.',
      challenge: '오늘 일까지 네 카드를 차례대로 놓고, 짝 말을 듣고 바꾼 점까지 말해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 다 만든 뒤에만 말할 수 있다고 여겨 멈추기를 싫어한다 → 교사가 먼저 반쯤 만든 작품으로 말하는 본을 보인다. ② "재미있었어요"만 말한다 → "무엇을 할 때요?" 하고 되물어 \'~할 때\'를 채우게 한다. ③ 멈춘 뒤 다시 시작하지 못한다 → 손뼉 두 번 멈춤, 한 번 다시 시작으로 신호를 정해 둔다.',
  }));

  lessons.push(L(46, {
    title: '친구 작품을 둘러보고 좋은 점 콕 집어 말해 주기',
    objective: '친구 작품을 보고 크기·색·상상한 것 가운데 좋은 점 하나를 콕 집어 말해 줄 수 있다.',
    illustration: ART('a small classroom gallery of paper artworks on desks, children walking around and one child giving a thumbs up with a speech bubble', '좋은 점을 말해요', [
      { motif: 'star', x: 120, y: 80, s: 0.7 }, { motif: 'star', x: 380, y: 76, s: 0.6 }, { motif: 'flower', x: 240, y: 228, color: 'rose' }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '교사 작품 하나를 들고 두 가지 말을 들려준다. "그냥 예뻐." / "잎을 종이 가득 크게 붙여서 잎맥까지 잘 보여." "어느 말을 들으면 무엇이 좋았는지 더 잘 알 수 있나요?" "좋은 점은 크기·색·상상한 것 가운데 하나를 콕 집어 말해요." 시연 단추로 작품과 좋은 점이 이어지는 모습을 보여 준다.',
        student: '두 말을 듣고, 무엇이 좋은지 더 잘 알 수 있는 말을 골라 손을 들어요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '어디가 좋을까?', slots: [{ id: 's1', label: '종이 가득 크게 만든 해바라기' }], cards: ['크게 만들어 잘 보여요'], shuffle: false }, sequence: [{ match: { s1: '크게 만들어 잘 보여요' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 작품의 좋은 점 찾기', minutes: 14, tool: 'mindmap',
            teacher: '모둠(네 명) 책상에 작품을 펼쳐 놓고, 시계 방향으로 한 칸씩 옮겨 가며 친구 작품을 본다(한 작품에 1분). "크기·색·상상한 것 가운데 어디가 좋은가요?" 좋은 점 낱말 카드(크게·또렷한 색·상상)를 모둠마다 놓아 두고 짚으며 말하게 한다. 고칠 점부터 말하는 학생에게는 "오늘은 좋은 점만 찾아요." 하고 돌려 준다.',
            task: '작품과 좋은 점을 잇고, 좋은 점을 콕 집어 말한 것을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '작품과 그 작품의 좋은 점을 이어 보세요.', toolOptions: { mode: 'match', topic: '어디가 좋을까?', slots: [{ id: 's1', label: '바퀴를 달아 굴러다니는 의자' }, { id: 's2', label: '검정 바탕에 하양 별을 붙인 안내판' }, { id: 's3', label: '판 가득 크게 키운 나뭇잎' }], cards: ['상상한 것을 덧붙였어요', '맞닿은 색이 또렷해요', '크게 만들어 잘 보여요'] },
                target: { match: { s1: '상상한 것을 덧붙였어요', s2: '맞닿은 색이 또렷해요', s3: '크게 만들어 잘 보여요' } }, difficulty: 0.2,
                levels: { challenge: { toolOptions: { cards: ['상상한 것을 덧붙였어요', '맞닿은 색이 또렷해요', '크게 만들어 잘 보여요', '그냥 예뻐요'] } } },
                hints: ['작품마다 크기·색·상상한 것 가운데 무엇이 눈에 띄는지 보세요.', '바퀴는 진짜 의자에 없는 것, 검정과 하양은 아주 다른 색, 판 가득은 크기예요.', '의자-상상한 것, 안내판-또렷한 색, 나뭇잎-크게 만들었어요.'] },
              { prompt: '좋은 점을 콕 집어 말한 것만 골라 보세요.', toolOptions: { mode: 'pick', basket: '콕 집은 칭찬', cards: ['"잎맥까지 넣어서 진짜 같아"', '"노랑과 보라가 맞닿아 멀리서도 보여"', '"그냥 예뻐"', '"내 것이 더 좋아"'] },
                target: { pick: ['"잎맥까지 넣어서 진짜 같아"', '"노랑과 보라가 맞닿아 멀리서도 보여"'] }, difficulty: 0.2 },
              { prompt: '모둠 친구 작품을 돌아가며 보고, 한 사람에게 좋은 점 하나를 콕 집어 말해 줘요. 다 하면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 듣는 친구의 마음 헤아리기', minutes: 13, tool: 'emotion',
            teacher: '"내 말을 들은 친구는 어떤 마음일까요?" 고른 뒤 결과를 함께 읽는다. 마음에 들지 않는 곳이 보여도 먼저 좋은 점을 말하고, 바꾸면 좋을 점은 \'~하면 더 좋을 것 같아\'로 부드럽게 말하게 한다. 친구 작품은 허락 없이 만지지 않는다.',
            task: '칭찬을 들은 친구의 마음을 헤아리고, 친구에게 할 알맞은 말을 골라요.',
            levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
            items: [
              { prompt: '그 말을 들은 친구의 마음에 어울리는 카드를 놓아 보세요.', toolOptions: { cards: ['뿌듯함', '속상함'], slots: [{ id: 's1', label: '"별 열매가 가득해서 반짝반짝해!"를 들었어요' }, { id: 's2', label: '"이게 뭐야, 이상해."를 들었어요' }] },
                target: { match: { s1: '뿌듯함', s2: '속상함' } }, difficulty: 0.1 },
              { prompt: '준호의 상상 나무를 보고 어떻게 말할까요?', toolOptions: { mode: 'branch', situation: '준호가 만든 상상 나무에 별 열매가 가득해요. 그런데 줄기가 조금 삐뚤어요.', choices: [
                { id: 'point', text: '"별 열매가 가득해서 반짝반짝해 보여!" 하고 말해요', result: '준호가 웃으며 별을 하나 더 붙여요.', mood: '뿌듯함' },
                { id: 'blame', text: '"줄기가 삐뚤어. 이상해." 하고 말해요', result: '준호가 작품을 가방에 넣어 버려요.', mood: '속상함', why: '삐뚠 곳만 들은 준호의 마음을 떠올려 봐요.' },
                { id: 'vague', text: '"응, 좋네." 하고 지나가요', result: '준호가 무엇이 좋은지 몰라 고개를 갸웃해요.', mood: '걱정', why: '무엇이 좋은지 콕 집어 말해 봐요.' }] }, target: { choice: 'point' }, difficulty: 0.15 },
              { prompt: '민지 작품의 색이 흐릿해요. 어떻게 말할까요?', toolOptions: { mode: 'branch', situation: '민지가 꽃을 판 가득 크게 만들었는데, 하양 바탕에 연한 노랑 꽃이라 멀리서 잘 안 보여요.', choices: [
                { id: 'kind', text: '"꽃이 커서 좋아. 바탕을 진한 색으로 하면 더 또렷할 것 같아."', result: '민지가 고개를 끄덕이고 바탕을 보라로 바꾸어요.', mood: '고마움' },
                { id: 'grab', text: '민지 작품의 바탕을 내가 떼어 바꾸어 줘요', result: '민지가 깜짝 놀라 작품을 끌어안아요.', mood: '놀람', why: '친구 작품은 친구가 고쳐요. 말로 도와요.' },
                { id: 'hurt', text: '"흐릿해서 하나도 안 보여."', result: '민지가 시무룩해져요.', mood: '속상함', why: '좋은 점부터 말해 주면 민지 마음은 어떨까요?' }] }, target: { choice: 'kind' }, difficulty: 0.2 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 친구에게 들은 좋은 점 가운데 기억에 남는 말은 무엇인가요?" 서너 명이 말한다. 들은 좋은 점을 붙임쪽지에 적어 작품 옆에 붙여 둔다. 다음 시간에는 들은 말을 살려 내 작품을 고쳐 다시 만든다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '어디가 좋을까?', slots: [{ id: 's1', label: '구름에 귀를 붙여 토끼로 바꾼 작품' }, { id: 's2', label: '종이 가득 크게 만든 화분' }], cards: ['상상한 것을 덧붙였어요', '크게 만들어 잘 보여요'] }, prompt: '작품과 그 작품의 좋은 점을 이어 보세요.', target: { match: { s1: '상상한 것을 덧붙였어요', s2: '크게 만들어 잘 보여요' } }, difficulty: 0.1 },
          { type: 'choice', prompt: '친구 작품의 좋은 점을 잘 말한 것은?', options: ['"날개를 달아서 버스가 날 것 같아!"', '"좋네."'], answer: 0, difficulty: 0.1, explain: '무엇이 좋은지 콕 집어 말하면 친구가 잘 알 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '좋은 점 찾기',
      items: [
        { type: 'table', prompt: '친구 작품의 좋은 점을 쓰세요.', columns: ['친구 작품', '좋은 점(크기·색·상상)'], rows: 3 },
        { type: 'choice', prompt: '좋은 점을 콕 집어 말한 것은?', options: ['"검정 바탕이라 하양 별이 또렷해"', '"그냥 예뻐"'], answer: '"검정 바탕이라 하양 별이 또렷해"' },
        { type: 'short', prompt: '친구에게 들은 좋은 점을 쓰세요.' },
        { type: 'draw', prompt: '좋은 점을 말해 준 친구 작품을 떠올려 그리세요.' },
      ],
      easy: {
        note: '크기·색·상상 가운데 하나를 골라 말해요.',
        items: [
          { type: 'choice', prompt: '더 좋은 칭찬은?', options: ['"크게 만들어 잘 보여"', '"좋네"'], answer: '"크게 만들어 잘 보여"' },
          { type: 'choice', prompt: '친구 작품은?', options: ['허락 없이 만지지 않아요', '내가 고쳐 줘요'], answer: '허락 없이 만지지 않아요' },
          { type: 'short', prompt: '친구 작품의 좋은 점 하나를 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '좋은 점 카드가 딱 맞는 세 장이고, 맞게 놓으면 바로 초록 테두리가 보여요.',
      base: '작품과 좋은 점을 잇고, 친구에게 할 말을 골라요.',
      challenge: '함정 카드(그냥 예뻐요)가 섞인 잇기를 하고, 좋은 점 다음에 \'~하면 더 좋을 것 같아\'를 한 가지 덧붙여 말해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① "예뻐", "좋아"로만 말한다 → 크기·색·상상 낱말 카드를 짚으며 말하게 한다. ② 고칠 점부터 말해 친구가 속상해한다 → 오늘은 좋은 점 먼저라고 약속한다. ③ 작품을 보며 친구 작품을 만진다 → 손은 등 뒤로 하고 둘러본다. 모둠 안에서 돌려 보면 한 작품에 1분씩 4분이면 끝나 26명 모두가 칭찬을 듣는다.',
  }));

  lessons.push(L(47, {
    title: '들은 말을 살려 내 작품 고쳐 다시 만들기',
    objective: '내 작품에서 고칠 곳 한 군데를 정해 알맞은 방법으로 고쳐 다시 만들고, 처음과 달라진 점을 말할 수 있다.',
    illustration: ART('a child comparing a first paper artwork with a small faded flower in the corner and a remade one with a big bright flower filling the page', '고쳐 다시 만들어요', [
      { motif: 'flower', x: 120, y: 226, color: 'lavender' }, { motif: 'flower', x: 380, y: 226, color: 'buttercup' }, { motif: 'star', x: 240, y: 80, s: 0.6 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '지난 시간 작품 옆에 붙인 붙임쪽지(좋은 점)를 읽어 보게 한다. 교사 작품 두 장(처음 것, 고친 것)을 보여 주며 "무엇이 달라졌나요?" 하고 묻는다. "다시 만들 때는 처음부터 다 바꾸지 않고, 고칠 곳 한 군데를 정해요." 시연 단추로 고칠 점과 방법이 이어지는 모습을 보여 준다.',
        student: '내 작품 옆 붙임쪽지를 읽고, 처음 작품과 고친 작품의 다른 점을 찾아요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '어떻게 고칠까?', slots: [{ id: 's1', label: '종이 구석에 작게 만들었어요' }], cards: ['가운데로 옮기고 크게 바꾸어요'], shuffle: false }, sequence: [{ match: { s1: '가운데로 옮기고 크게 바꾸어요' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 고칠 곳과 방법 정하기', minutes: 10, tool: 'mindmap',
            teacher: '"내 작품에서 한 군데만 고친다면 어디일까요?" 짝과 서로의 작품을 보며 고칠 곳을 하나씩 정하게 한다. 처음부터 버리고 새로 하겠다는 학생에게는 붙임쪽지의 좋은 점을 읽어 주며 "좋은 점은 남기고 한 군데만 바꿔 봐요." 하고 말한다.',
            task: '고칠 점과 고치는 방법을 잇고, 다시 하기 전에 할 일을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '고칠 점과 알맞은 방법을 이어 보세요.', toolOptions: { mode: 'match', topic: '어떻게 고칠까?', slots: [{ id: 's1', label: '종이 구석에 작게 만들었어요' }, { id: 's2', label: '바탕과 그림 색이 비슷해 흐릿해요' }, { id: 's3', label: '본 대로만 만들어 심심해요' }], cards: ['가운데로 옮기고 크게 바꾸어요', '바탕을 아주 다른 색으로 바꾸어요', '상상한 것을 하나 덧붙여요'] },
                target: { match: { s1: '가운데로 옮기고 크게 바꾸어요', s2: '바탕을 아주 다른 색으로 바꾸어요', s3: '상상한 것을 하나 덧붙여요' } }, difficulty: 0.2,
                levels: { challenge: { toolOptions: { cards: ['가운데로 옮기고 크게 바꾸어요', '바탕을 아주 다른 색으로 바꾸어요', '상상한 것을 하나 덧붙여요', '처음 작품을 구겨 버려요'] } } },
                hints: ['고칠 점이 크기·색·상상 가운데 무엇에 대한 말인지 보세요.', '작은 것은 크게, 흐릿한 색은 다른 색으로, 심심하면 상상을 더해요.', '구석에 작게-크게 바꾸기, 흐릿해요-다른 색 바탕, 심심해요-상상 덧붙이기예요.'] },
              { prompt: '다시 만들기 전에 할 일만 골라 보세요.', toolOptions: { mode: 'pick', basket: '다시 하기 전에', cards: ['친구가 말해 준 좋은 점 떠올리기', '고칠 곳 한 군데 정하기', '친구 작품 똑같이 따라 하기', '처음 작품 구겨 버리기'] },
                target: { pick: ['친구가 말해 준 좋은 점 떠올리기', '고칠 곳 한 군데 정하기'] }, difficulty: 0.15 },
              { prompt: '내 종이 작품을 짝에게 보여 주고, 고칠 곳 한 군데와 방법을 함께 정해요. 다 하면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 고쳐 다시 만들기', minutes: 16, tool: 'collage',
            teacher: '"판에 고칠 곳이 있는 작품이 있어요. 정한 방법대로 한 군데를 고쳐요." 조각 색은 바꿀 수 없으니 떼고 새로 붙여 제자리로 끌어 옮긴 뒤 \'아래로\' 단추로 바탕 조각을 뒤로 보내게 한다. 끝 문항은 내 종이 작품을 고쳐 다시 만든다.',
            task: '고칠 곳이 있는 작품을 정한 방법대로 고치고, 내 작품도 고쳐 다시 만들어요.',
            levels: ART2_LV,
            items: [
              { prompt: '구석에 작게 만든 화분이에요. 작은 조각을 모두 떼고, 갈색 큰 네모와 초록 큰 나뭇잎으로 크게 다시 만들어 보세요.', state: { pieces: [{ shape: 'square', color: '갈색', size: 's', x: 60, y: 360, r: 0 }, { shape: 'leaf', color: '초록', size: 's', x: 60, y: 320, r: 0 }] },
                target: { has: [{ shape: 'square', color: '갈색', size: 'l', n: 1 }, { shape: 'leaf', color: '초록', size: 'l', min: 1 }, { size: 's', max: 0 }] }, difficulty: 0.25,
                hints: ['처음 작품에서 작은 조각이 어디 있는지 찾아요.', '작은 조각은 \'떼기\'로 없애고, 큰 크기를 골라 새로 붙여요.', '작은 네모·작은 잎을 떼고, 갈색 큰 네모 1개와 초록 큰 나뭇잎을 붙여요.'] },
              { prompt: '하양 바탕에 노랑 별이라 흐릿해요. 바탕을 어두운 색 조각으로 바꾸어 별이 또렷하게 보이게 해 보세요.', state: { pieces: [{ shape: 'square', color: '하양', size: 'l', x: 280, y: 200, r: 0 }, { shape: 'star', color: '노랑', size: 'm', x: 280, y: 200, r: 0 }] },
                target: { contrast: 'light-dark', has: [{ shape: 'star', color: '노랑', n: 1 }] }, difficulty: 0.3,
                hints: ['노랑은 밝은 색이에요. 밝은 색 옆에는 어떤 색이 와야 또렷할까요?', '하양도 밝은 색이라 흐릿해요. 하양 바탕을 떼고 검정·보라·갈색 같은 어두운 색 바탕을 붙여요.', '하양 네모를 떼고 검정 큰 네모를 붙여 별이 있는 가운데로 옮긴 뒤, \'아래로\'를 눌러 별 뒤로 보내요.'] },
              { prompt: '내 작품 하나를 골라 고칠 곳 한 군데를 고쳐 다시 만들고, 해낸 것을 표시해요.', target: { pieces: { min: 3 }, selfCheck: ['고칠 곳 한 군데를 정했어요', '그곳을 고쳐 다시 만들었어요', '처음과 달라진 점을 짝에게 말했어요'] }, difficulty: 0.15 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '처음 작품과 고친 작품을 나란히 놓고 짝에게 보여 준다. 두세 명이 앞에 나와 "무엇을 고쳤나요? 고치고 나니 어떤가요?"에 답한다. 다음 시간에는 학교 단원 전체에서 한 일을 돌아본다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '어떻게 고칠까?', slots: [{ id: 's1', label: '작게 그려 잎맥이 안 보여요' }, { id: 's2', label: '진짜와 똑같기만 해요' }], cards: ['크게 다시 그려요', '상상한 것을 덧붙여요'] }, prompt: '고칠 점과 알맞은 방법을 이어 보세요.', target: { match: { s1: '크게 다시 그려요', s2: '상상한 것을 덧붙여요' } }, difficulty: 0.1 },
          { type: 'choice', prompt: '작품을 다시 만들 때 좋은 방법은?', options: ['고칠 곳 한 군데를 정해 고쳐요', '친구 작품을 똑같이 따라 해요'], answer: 0, difficulty: 0.1, explain: '좋은 점은 남기고 한 군데를 고치면 내 작품이 더 나아져요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '고쳐 다시 만들기',
      items: [
        { type: 'table', prompt: '내 작품을 어떻게 고쳤는지 쓰세요.', columns: ['고칠 곳', '고친 방법', '달라진 점'], rows: 1 },
        { type: 'choice', prompt: '바탕과 그림 색이 비슷해 흐릿하면?', options: ['바탕을 아주 다른 색으로 바꾸어요', '더 작게 만들어요'], answer: '바탕을 아주 다른 색으로 바꾸어요' },
        { type: 'draw', prompt: '고친 내 작품을 그리세요.' },
        { type: 'short', prompt: '고치고 나서 좋아진 점을 쓰세요.' },
      ],
      easy: {
        note: '한 군데만 골라 고쳐요.',
        items: [
          { type: 'choice', prompt: '구석에 작게 그렸으면?', options: ['크게 다시 그려요', '그대로 둬요'], answer: '크게 다시 그려요' },
          { type: 'draw', prompt: '고친 내 작품을 그리세요.' },
          { type: 'short', prompt: '무엇을 고쳤나요?' },
        ],
      },
    },
    differentiation: {
      easy: '딱 맞는 방법 카드 세 장으로 잇고, 조각 고르개가 단순해요.',
      base: '고칠 점과 방법을 잇고, 판의 작품 두 개를 정한 방법대로 고쳐요.',
      challenge: '함정 카드가 섞인 잇기를 하고, 내 작품을 고친 뒤 처음과 달라진 점을 두 가지 말해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 처음부터 다 버리고 새로 하려 한다 → 붙임쪽지의 좋은 점을 읽어 주고 한 군데만 고치게 한다. ② 조각 색을 바꾸는 단추를 찾는다 → 떼고 새로 붙인 뒤 \'아래로\'로 순서를 바꾼다고 보여 준다. ③ 고친 뒤 무엇이 나아졌는지 말하지 못한다 → 처음 작품과 나란히 놓고 견주게 한다. 처음 작품은 버리지 않고 함께 보관해 48차시에 쓴다.',
  }));

  lessons.push(L(48, {
    title: '학교 단원에서 한 일 묶어 보고 스스로 돌아보기',
    objective: '학교 단원에서 한 일을 학교 둘러보기·소리 놀이·살펴보고 꾸미기로 묶어 말하고, 내 배움을 스스로 돌아볼 수 있다.',
    illustration: ART('a paper school building with three open windows showing a map with a magnifier, a little drum with sound waves, and a colorful imaginary tree', '학교에서 한 일', [
      { motif: 'house', x: 240, y: 214, color: 'buttercup' }, { motif: 'tree', x: 90, y: 214 }, { motif: 'star', x: 380, y: 84, s: 0.7 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '단원 동안 만든 학교 지도·그림 악보·작품을 교실 둘레에 세 묶음으로 펼쳐 둔다. "이 묶음들은 무엇을 할 때 만든 것일까요?" 묶음마다 이름(학교 둘러보기, 소리 놀이, 살펴보고 꾸미기)을 함께 붙인다. 시연 단추로 한 일이 묶음으로 나뉘는 모습을 보여 준다.',
        student: '교실 둘레에 펼친 작품 묶음을 보고, 무엇을 할 때 만든 것인지 말해요.',
        demo: { tool: 'mindmap', options: { topic: '학교 단원에서 한 일', slots: ['학교 둘러보기', '소리 놀이'], cards: ['학교 지도 기호 읽기', '메아리 따라 내기'], shuffle: false }, sequence: [{ sort: { '학교 둘러보기': ['학교 지도 기호 읽기'], '소리 놀이': ['메아리 따라 내기'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 한 일을 묶어 보기', minutes: 13, tool: 'mindmap',
            teacher: '"이 일을 할 때 무엇을 들고 있었나요? 지도? 악기? 색종이?" 들고 있던 것을 떠올려 묶음을 정하게 한다. 안전 약속은 단원 내내 지킨 것이니 하나씩 소리 내어 읽고 몸으로 흉내 내어 보게 한다.',
            task: '학교 단원에서 한 일을 세 묶음으로 나누고, 지켜 온 안전 약속을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '학교 단원에서 한 일을 세 묶음으로 나누어 보세요.', toolOptions: { topic: '학교 단원에서 한 일', slots: ['학교 둘러보기', '소리 놀이', '살펴보고 꾸미기'], cards: ['학교 안내판 읽기', '안전한 길 지도에 짚기', '빠르기 바꾸어 따라 하기', '네 박 소리 짓기', '구름 보고 닮은 것 떠올리기', '상상 나무 꾸미기'] },
                target: { sort: { '학교 둘러보기': ['학교 안내판 읽기', '안전한 길 지도에 짚기'], '소리 놀이': ['빠르기 바꾸어 따라 하기', '네 박 소리 짓기'], '살펴보고 꾸미기': ['구름 보고 닮은 것 떠올리기', '상상 나무 꾸미기'] } }, difficulty: 0.25,
                levels: { easy: { prompt: '학교 단원에서 한 일을 두 묶음으로 나누어 보세요.', toolOptions: { slots: ['학교 둘러보기', '살펴보고 꾸미기'], cards: ['학교 안내판 읽기', '안전한 길 지도에 짚기', '구름 보고 닮은 것 떠올리기', '상상 나무 꾸미기'] }, target: { sort: { '학교 둘러보기': ['학교 안내판 읽기', '안전한 길 지도에 짚기'], '살펴보고 꾸미기': ['구름 보고 닮은 것 떠올리기', '상상 나무 꾸미기'] } } } },
                hints: ['그 일을 할 때 손에 무엇을 들고 있었는지 떠올려요.', '지도·안내판은 둘러보기, 악기·손뼉은 소리 놀이, 색종이·돋보기는 살펴보고 꾸미기예요.', '안내판·지도는 둘러보기, 빠르기·네 박은 소리 놀이, 구름·상상 나무는 살펴보고 꾸미기예요.'] },
              { prompt: '학교 단원에서 지켜 온 안전 약속만 골라 보세요.', toolOptions: { mode: 'pick', basket: '안전 약속', cards: ['복도에서는 오른쪽으로 천천히 걸어요', '가위는 날을 닫아서 들고 다녀요', '돋보기로 해를 바라봐요', '계단에서 뛰어 내려가요'] },
                target: { pick: ['복도에서는 오른쪽으로 천천히 걸어요', '가위는 날을 닫아서 들고 다녀요'] }, difficulty: 0.15 },
              { prompt: '단원에서 가장 마음에 드는 내 작품이나 활동 하나를 골라 짝에게 소개해요. 다 하면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 내 배움 돌아보기', minutes: 13, tool: 'emotion',
            teacher: '"정답은 없어요. 내 마음에 가장 가까운 칸을 골라요." 칸을 고른 학생 몇에게 까닭을 묻되, 작은 칸을 고른 학생에게도 "어떤 점이 어려웠는지 말해 주어 고마워요." 하고 받아 준다. 고른 칸은 다음 단원 수업을 준비하는 데 쓴다.',
            task: '세 묶음에서 한 일을 떠올리며 내 마음의 크기를 솔직하게 골라요.',
            levels: { easy: { steps: 3 }, base: { steps: 3 }, challenge: { steps: 5 } },
            items: [
              { prompt: '학교를 둘러보며 물음의 답을 찾아낸 나는 얼마나 뿌듯한가요? 솔직하게 골라요.', toolOptions: { mode: 'scale', situation: '궁금한 곳을 골라 물음을 만들고, 학교를 둘러보며 답을 찾았어요.', feeling: '뿌듯함', ask: '답을 찾아낸 나는 얼마나 뿌듯한가요?' }, target: { level: 'any' }, difficulty: 0.05 },
              { prompt: '친구와 함께 소리를 바꾸어 내던 때는 얼마나 신났나요? 솔직하게 골라요.', toolOptions: { mode: 'scale', situation: '친구와 빠르기·세기를 바꾸어 소리를 내고, 네 박 소리를 겹쳐 연주했어요.', feeling: '신남', ask: '함께 소리 낼 때 얼마나 신났나요?' }, target: { level: 'any' }, difficulty: 0.05 },
              { prompt: '상상한 것을 덧붙여 꾸밀 때 나는 얼마나 자신 있었나요? 솔직하게 골라요.', toolOptions: { mode: 'scale', situation: '자세히 살펴본 것을 크게 만들고, 상상한 것을 덧붙여 꾸몄어요.', feeling: '자신감', ask: '상상을 덧붙일 때 얼마나 자신 있었나요?' }, target: { level: 'any' }, difficulty: 0.05 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"학교 단원에서 내가 할 수 있게 된 것 하나를 말해 볼까요?" 서너 명이 말한다. 작품 묶음은 교실 뒤 \'우리 학교\' 게시판에 붙인다. 다음 단원에서도 궁금한 것을 물음으로 만들고, 살펴보고, 친구와 함께 나타내 보자고 말하며 마친다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '학교 단원에서 한 일', slots: ['학교 둘러보기', '살펴보고 꾸미기'], cards: ['특별실 둘러보기', '돋보기로 꽃 보기'] }, prompt: '학교 단원에서 한 일을 두 묶음으로 나누어 보세요.', target: { sort: { '학교 둘러보기': ['특별실 둘러보기'], '살펴보고 꾸미기': ['돋보기로 꽃 보기'] } }, difficulty: 0.1 },
          { type: 'choice', prompt: '학교에서 궁금한 곳이 생기면 어떻게 할까요?', options: ['물음을 만들고 살펴보며 답을 찾아요', '궁금해도 그냥 지나가요'], answer: 0, difficulty: 0.1, explain: '물음을 만들고 살펴보면 답을 찾을 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '학교 단원 돌아보기',
      items: [
        { type: 'table', prompt: '묶음마다 내가 한 일을 하나씩 쓰세요.', columns: ['묶음', '내가 한 일'], cells: [['학교 둘러보기', ''], ['소리 놀이', ''], ['살펴보고 꾸미기', '']] },
        { type: 'choice', prompt: '\'네 박 소리 짓기\'는 어느 묶음일까요?', options: ['학교 둘러보기', '소리 놀이', '살펴보고 꾸미기'], answer: '소리 놀이' },
        { type: 'draw', prompt: '학교 단원에서 가장 즐거웠던 때를 그리세요.' },
        { type: 'short', prompt: '학교 단원에서 내가 할 수 있게 된 것 하나를 쓰세요.' },
      ],
      easy: {
        note: '둘러보기, 소리 놀이, 꾸미기를 떠올려요.',
        items: [
          { type: 'choice', prompt: '\'학교 안내판 읽기\'는?', options: ['학교 둘러보기', '소리 놀이'], answer: '학교 둘러보기' },
          { type: 'draw', prompt: '가장 즐거웠던 때를 그리세요.' },
          { type: 'short', prompt: '할 수 있게 된 것 하나를 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '두 묶음으로 나누고, 마음 눈금이 세 칸이에요.',
      base: '세 묶음으로 나누고, 마음 눈금 세 칸에서 골라요.',
      challenge: '세 묶음으로 나누고, 마음 눈금 다섯 칸에서 골라 까닭을 한 문장으로 말해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 오래전 차시(학교 둘러보기)를 떠올리지 못한다 → 그때 만든 학교 지도·안내판 그림을 손에 들려 준다. ② 마음 눈금을 친구와 똑같이 고른다 → 정답이 없고 친구 칸은 보지 않는다고 약속한다. ③ 할 수 있게 된 것을 말하지 못한다 → "처음에는 못 했는데 지금은 할 수 있는 것"으로 바꾸어 묻는다. 학생이 고른 마음 칸은 교사 화면에서 보고 다음 단원 모둠 짜기에 쓴다.',
  }));

  // ── 차시 끝 ──

  PaperLessons.registerUnit({
    id: 'g1-int-1-01', schema: 'edu-unit.v1', catalogUnit: UNIT,
    grade: 1, subject: '통합교과', unitTitle: TITLE,
    flow: '1~12차시는 학교 안팎에서 궁금한 곳을 골라 물음을 만들고, 그 답을 알려면 어디서 무엇을 살필지 정한 뒤, 교실·특별실·운동장을 둘러보며 본 것을 그림과 안내판 읽기로 남기고, 알아낸 것을 차례대로 말하며 안전하게 다니는 길을 지도에 짚습니다. 13~24차시는 학교에서 들리는 소리의 빠르기와 세기를 듣고 가른 뒤, 선생님과 친구가 낸 소리를 그대로 따라 내고 빠르기·세기를 바꾸어 다시 내며 달라진 점을 말합니다. 25~36차시는 목소리·악기·몸으로 낼 수 있는 소리를 견주어 하나를 고르고, 네 박짜리 소리를 지어 짝과 겹쳐 연주한 뒤 혼자 할 때와 함께 할 때를 견줍니다. 37~47차시는 학교 둘레의 물건과 식물을 자세히 살펴 눈에 띄는 곳을 짚고 닮은 것을 떠올린 다음, 종이 가운데에 크게 꾸미고 상상한 것을 덧붙여 새 작품을 만들며, 만드는 과정을 돌아보고 친구 작품의 좋은 점을 말한 뒤 고쳐 다시 만듭니다. 48차시는 단원 전체에서 한 일을 묶어 보고 스스로 평가합니다.',
    refs: {},
    lessons: lessons,
  });
})();
