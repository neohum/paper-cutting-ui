/* 6학년 1학기 체육 2. 스포츠(생태형 스포츠) — 47차시.
 * 단원에서 실제로 하는 몸 활동: 학교 둘레 걷기(트레킹), 운동장·학교 숲 오리엔티어링, 플라잉 디스크(원반) 던지기·받기와 디스크 골프,
 * 매트 위 낮은 높이 오르기(가로 이동). 교구는 계획(구간·차례)·판단(장소·장비·상황)·기록·스스로 점검을 맡고,
 * 실제 움직임은 task·teacher·활동지에 적어 교사가 운동장·강당에서 관찰한다.
 * 학교 지도는 가상의 칸 지도이며 실제 학교 주소·이름이 없다. 학생 이름 예시는 가명(민지·준호·서연·도윤)만 쓴다.
 */
(function () {
  const UNIT = 'g6-pe-1-02';
  const CU = 'g6-체육-1학기-2';
  const BASE = { schema: 'edu-lesson.v1', grade: 6, subject: '체육', unitTitle: '2. 스포츠', minutes: 40, formats: ['chromebook', 'projector', 'print'] };
  // 체육은 units-map.json 에 없어 check-unit 이 units-index.json 의 단원 성취기준만 받는다. 차시 묶음별로 고른다.
  const stdOf = (n) => (n <= 8 ? '[6체02-07]' : n <= 16 ? '[6체02-08]' : n <= 24 ? '[6체02-09]' : n <= 32 ? '[6체02-12]' : n <= 40 ? '[6체02-10]' : '[6체02-11]');
  const art = (what, layers) => ({
    prompt: `Layered paper-cut illustration of ${what}, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.`,
    scene: { viewBox: [480, 270], layers },
  });
  const L = (n, o) => Object.assign({ id: `${UNIT}-${String(n).padStart(2, '0')}`, catalog: { unit: CU, lesson: n } }, BASE, { standards: [stdOf(n)] }, o);
  const stages = (intro, acts, wrap) => [
    Object.assign({ id: 'intro', title: '도입', minutes: 6 }, intro),
    { id: 'main', title: '전개', minutes: 26, activities: acts },
    Object.assign({ id: 'wrapup', title: '정리', minutes: 8 }, wrap),
  ];
  // 안전 약속(차시마다 골라 쓴다)
  const FIELD = '활동 전에 운동장에 돌·유리 조각·물웅덩이가 없는지 먼저 살펴요.';
  const BOUND = '선생님이 정한 활동 구역 밖으로 나가지 않고, 호루라기 신호를 들으면 바로 모여요.';
  const WATER = '물을 챙겨 자주 마시고, 어지럽거나 숨이 너무 차면 바로 쉬고 선생님께 말해요.';
  const SUN = '햇볕이 강하면 모자를 쓰고, 천둥·번개가 치거나 비가 오면 바로 실내로 들어가요.';
  const PATH = '정해진 길로만 다니고, 풀·꽃·작은 생물을 밟거나 꺾지 않아요.';
  const DISC = '원반은 던지는 쪽에 사람이 없을 때만 던지고, 던지기 전에 "던져요!" 하고 크게 알려요.';
  const DISC2 = '원반이 날아오면 얼굴을 손으로 가리고, 받을 준비가 안 되었으면 몸을 비켜요.';
  const CLIMB = '오르기는 매트를 깐 곳에서 발이 무릎 높이를 넘지 않게 하고, 보조 친구가 곁에 있을 때만 해요.';
  const CLIMB2 = '내려올 때는 뛰어내리지 않고 손발을 하나씩 옮겨 내려와요. 손에 땀이 나면 닦고 해요.';
  const RUN = '지도를 보며 뛸 때는 고개를 들어 앞을 보고, 모퉁이에서는 걸어서 돌아요.';
  const TOOL = '장비는 정한 자리에서 꺼내고, 쓰고 나면 바로 제자리에 돌려놓아요. 망가진 것은 쓰지 말고 알려요.';
  const SPACE = '친구와 두 팔을 벌려 닿지 않을 만큼 떨어져서 움직여요.';

  // 가상의 학교 칸 지도(오리엔티어링) — 정문을 아래 가운데에 둔다. 북쪽은 위.
  const SCHOOL = {
    grid: [6, 4],
    places: [
      { name: '정문', icon: 'dot', at: [2, 3], legend: '정문' }, { name: '본관', icon: 'school', at: [2, 1] },
      { name: '체육관', icon: 'office', at: [4, 1], legend: '체육관' }, { name: '화단', icon: 'park', at: [0, 3], legend: '화단' },
      { name: '느티나무 숲', icon: 'forest', at: [0, 0] }, { name: '도서관', icon: 'library', at: [5, 3] },
      { name: '텃밭', icon: 'field', at: [5, 0], legend: '텃밭' },
    ],
    roads: [[[0, 2], [5, 2]], [[2, 3], [2, 0]]],
  };

  PaperLessons.registerUnit({
    id: UNIT, schema: 'edu-unit.v1', catalogUnit: CU,
    grade: 6, subject: '체육', unitTitle: '2. 스포츠',
    flow: '1~8차시는 생태형 스포츠가 무엇이고 땅·물·눈과 얼음에서 어떤 종류가 있는지 나누어 보고, 날씨와 장소에 따라 준비물이 달라지는 까닭을 익힌 뒤 학교 둘레 걷기와 운동장 오리엔티어링에 직접 참여하며 활동한 곳의 처음과 끝을 견주어 약속을 세웁니다. 9~16차시는 오르기와 원반 던지기에 필요한 장비·균형·힘 조절을 알고, 원반 던지기·받기와 매트 위 가로 이동을 기록하며 잘된 시도의 힘과 방향을 되짚어 다음 시도를 조절합니다. 17~24차시는 장소 조건에 맞는 활동을 고르는 기준과 정리까지가 활동이라는 것을 익히고, 오리엔티어링과 디스크 골프 경기에서 길 고르기·끊어 던지기 같은 기본 전략을 써 본 뒤 장소와 장비를 계절에 맞게 다시 계획합니다. 25~32차시는 학교와 마을의 운동 시설을 조사하고 용구를 살피며 아끼는 행동을 실천하고, 고마운 점과 아쉬운 점을 나누어 학교에 낼 제안을 만듭니다. 33~40차시는 자기 수준에 맞는 목표를 세워 연습하고 상대의 기술을 근거 들어 칭찬하며 기록으로 목표에 다가간 정도를 판단하고, 41~47차시는 팀 역할을 함께 의논해 나누고 어려워하는 친구를 도우며 협력 경기를 한 뒤, 회의 발언 규칙을 정하고 단원 전체를 스스로 평가합니다.',
    refs: {},
    lessons: [
      // ───────────────────────── 1 ─────────────────────────
      L(1, {
        title: '자연과 생활 둘레에서 즐기는 스포츠 나누기',
        objective: '생태형 스포츠를 하는 곳에 따라 생활 둘레 활동과 자연 활동으로 나누고, 환경에 따라 준비물이 달라지는 까닭을 말할 수 있다.',
        illustration: art('children hiking a mountain path, paddling a canoe on a river and throwing a flying disc on a school field, joined by a winding paper trail', [
          { motif: 'mountain', x: 110, y: 170 }, { motif: 'sun', x: 410, y: 54, s: 0.8 }, { motif: 'cloud', x: 250, y: 46 },
          { motif: 'wave', x: 360, y: 214 }, { motif: 'tree', x: 60, y: 214 }, { motif: 'hills', y: 220 },
          { motif: 'text', x: 240, y: 126, text: '자연과 함께하는 스포츠', size: 24 },
        ]),
        safety: [FIELD, SPACE, SUN],
        stages: stages(
          {
            teacher: '산길을 걷는 사람, 강에서 카누를 타는 사람, 운동장에서 원반을 던지는 사람 사진 세 장을 보여 주며 묻는다. "세 활동은 무엇이 같을까요?" 대답을 받아 "자연 환경 속에서, 자연과 어울려 즐기는 스포츠를 생태형 스포츠라고 해요"라고 정리한다. 이어 "날씨만 좋으면 아무 준비 없이 나가도 될까요?"를 물어 두고, 이 단원에서 걷기·오리엔티어링·원반·오르기를 직접 해 본다고 알린다.',
            student: '사진 세 장 속 활동의 같은 점을 찾아 말해 봐요. 우리 학교에서 해 볼 수 있는 것은 무엇일까요?',
          },
          [
            {
              id: 'a1', title: '활동 1. 하는 곳에 따라 생태형 스포츠 나누기', minutes: 13, tool: 'mindmap',
              task: '활동 카드를 하는 곳에 따라 생활 둘레와 자연으로 나누고, 활동마다 영향을 주는 자연 조건을 이어요. 나눈 뒤 모둠에서 해 본 활동을 하나씩 말해요.',
              teacher: '"카드에 적힌 곳을 보세요. 학교·동네처럼 늘 지내는 곳인가요, 산·강·바다인가요?" 같은 걷기라도 공원 산책로와 산길은 다른 칸이라는 것을 짚는다. 생태형 스포츠는 실내 체육관에서 하는 운동과 다르다는 것은 함정 카드를 두고 "체육관 볼링도 바람과 땅에 맞추나요?"라고 물어 짚는다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '활동 카드를 하는 곳에 따라 생활 둘레(학교·동네)와 자연(산·강·바다)으로 나누어요.', toolOptions: { topic: '어디에서 할까?', slots: ['생활 둘레(학교·동네)', '자연(산·강·바다)'], cards: ['운동장에서 원반 던지기', '산길 따라 등산하기', '동네 공원 산책로 걷기', '강에서 카누 타기', '학교 인공 암벽 오르기', '바닷가 모래밭 걷기'] }, target: { sort: { '생활 둘레(학교·동네)': ['운동장에서 원반 던지기', '동네 공원 산책로 걷기', '학교 인공 암벽 오르기'], '자연(산·강·바다)': ['산길 따라 등산하기', '강에서 카누 타기', '바닷가 모래밭 걷기'] } }, levels: { easy: { state: { at: { '운동장에서 원반 던지기': 0 } } }, challenge: { prompt: '활동 카드를 하는 곳에 따라 두 가지로 나누어요. 자연 환경과 관계없는 실내 놀이 카드는 어느 가지에도 넣지 않아요.', toolOptions: { cards: ['운동장에서 원반 던지기', '산길 따라 등산하기', '동네 공원 산책로 걷기', '강에서 카누 타기', '학교 인공 암벽 오르기', '바닷가 모래밭 걷기', '교실에서 보드게임 하기'] } } }, difficulty: 0.15 },
                { prompt: '활동마다 가장 크게 영향을 주는 자연 조건을 이어요.', toolOptions: { mode: 'match', topic: '자연 조건', slots: [{ id: 'canoe', label: '카누 타기' }, { id: 'ski', label: '스키 타기' }, { id: 'disc', label: '원반 던지기' }], cards: ['물의 흐름', '눈 덮인 비탈', '바람의 세기와 방향'] }, target: { match: { canoe: '물의 흐름', ski: '눈 덮인 비탈', disc: '바람의 세기와 방향' } }, levels: { easy: { state: { at: { '물의 흐름': 0 } } } }, difficulty: 0.2,
                  hints: ['그 활동을 할 때 몸이나 기구를 움직이게 하는 자연의 힘이 무엇인지 떠올려요.', '공중을 나는 것, 물 위에 뜬 것, 비탈을 미끄러지는 것을 차례로 견주어 보세요.', '카누는 물의 흐름, 스키는 눈 덮인 비탈, 원반은 바람의 세기와 방향이 가장 크게 영향을 줘요.'] },
                { prompt: '생태형 스포츠를 바르게 설명한 카드만 골라요.', toolOptions: { mode: 'pick', topic: '생태형 스포츠는', cards: ['자연 환경 속에서 즐겨요', '날씨와 땅 모양에 따라 방법이 달라져요', '자연을 지키며 즐겨야 해요', '실내 체육관에서만 해요'] }, target: { pick: ['자연 환경 속에서 즐겨요', '날씨와 땅 모양에 따라 방법이 달라져요', '자연을 지키며 즐겨야 해요'] }, levels: { challenge: { prompt: '생태형 스포츠를 바르게 설명한 카드만 골라요. 그럴듯하지만 틀린 카드가 섞여 있어요.', toolOptions: { cards: ['자연 환경 속에서 즐겨요', '날씨와 땅 모양에 따라 방법이 달라져요', '자연을 지키며 즐겨야 해요', '실내 체육관에서만 해요', '날씨만 좋으면 준비가 필요 없어요'] } } }, difficulty: 0.15,
                  conclude: '생태형 스포츠는 자연 속에서 자연 조건에 맞추어, 자연을 지키며 즐기는 스포츠예요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 환경에 맞는 준비물 고르고 챙겨 보기', minutes: 13, tool: 'mindmap',
              task: '상황마다 꼭 챙길 준비물을 고르고, 실제로 오늘 운동장 걷기에 필요한 것을 챙겨 모둠끼리 서로 확인해요. 확인한 모둠은 운동장 둘레를 한 바퀴 걸어요.',
              teacher: '"맑은 날이면 물도 모자도 필요 없을까요?" 날씨만 보고 준비를 줄이는 생각을 짚는다. 같은 걷기라도 더운 날·바람 부는 날·눈 온 날에 챙길 것이 다르다는 것을 학생 말로 정리한 뒤 실제로 모자와 물병을 챙겨 걷게 한다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '상황마다 가장 먼저 챙길 준비물을 이어요.', toolOptions: { mode: 'match', topic: '이럴 때 챙겨요', slots: [{ id: 'hot', label: '한여름 학교 뒷산 걷기' }, { id: 'wind', label: '쌀쌀하고 바람 부는 날 원반 던지기' }, { id: 'snow', label: '눈 쌓인 공원 걷기' }], cards: ['모자와 물병', '바람막이 겉옷', '미끄럼 막는 신발과 장갑'] }, target: { match: { hot: '모자와 물병', wind: '바람막이 겉옷', snow: '미끄럼 막는 신발과 장갑' } }, levels: { easy: { state: { at: { '모자와 물병': 0 } } } }, difficulty: 0.15 },
                { prompt: '맑고 시원한 가을날 학교 둘레 산책로를 걸어요. 그래도 챙겨야 할 것만 골라요.', toolOptions: { mode: 'pick', topic: '가을 산책 준비물', cards: ['물병', '발에 맞는 운동화', '쓰레기 담을 작은 봉투', '슬리퍼', '두꺼운 털장갑'] }, target: { pick: ['물병', '발에 맞는 운동화', '쓰레기 담을 작은 봉투'] }, levels: { easy: { prompt: '맑고 시원한 가을날 학교 둘레 산책로를 걸어요. 챙겨야 할 것만 골라요.', toolOptions: { cards: ['물병', '발에 맞는 운동화', '쓰레기 담을 작은 봉투', '슬리퍼'] } }, challenge: { prompt: '맑고 시원한 가을날 학교 둘레 산책로를 걸어요. 그래도 챙겨야 할 것만 골라요. 그럴듯한 함정 카드가 있어요.', toolOptions: { cards: ['물병', '발에 맞는 운동화', '쓰레기 담을 작은 봉투', '슬리퍼', '두꺼운 털장갑', '맑으니 아무것도 필요 없어요'] } } }, difficulty: 0.2 },
                { prompt: '비가 그친 다음 날 학교 뒷산을 걸어요. 평소보다 더 챙길 것만 골라요.', toolOptions: { mode: 'pick', topic: '비 온 다음 날', cards: ['미끄럼 막는 신발', '갈아 신을 양말', '수영복', '눈썰매'] }, target: { pick: ['미끄럼 막는 신발', '갈아 신을 양말'] }, difficulty: 0.2,
                  predict: { q: '비 그친 다음 날 산길은 어떨까요?', options: ['미끄러워요', '평소와 같아요'], answer: 0 },
                  conclude: '날씨가 바뀌면 땅의 상태도 바뀌어서, 같은 곳이라도 준비물을 다시 챙겨야 해요.' },
              ],
            },
          ],
          {
            teacher: '"오늘 걸을 때 챙긴 물병과 모자가 왜 필요했나요?" 두세 학생에게 듣는다. 출구 2번을 틀린 학생은 날씨가 좋아도 장소와 땅 상태가 다르면 준비물이 달라진다는 것을 다시 짚는다. 정리 운동으로 종아리와 발목을 풀고 마친다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { topic: '어디에서 할까?', slots: ['생활 둘레(학교·동네)', '자연(산·강·바다)'], cards: ['강당에서 오르기 벽 타기', '계곡 따라 걷기', '동네 공원에서 원반 주고받기', '바다에서 서핑하기'] }, prompt: '새 활동 카드를 하는 곳에 따라 두 가지로 나누어요.', target: { sort: { '생활 둘레(학교·동네)': ['강당에서 오르기 벽 타기', '동네 공원에서 원반 주고받기'], '자연(산·강·바다)': ['계곡 따라 걷기', '바다에서 서핑하기'] } }, difficulty: 0.15 },
              { type: 'choice', prompt: '맑은 날 산에 갈 때 준비물에 대한 말로 알맞은 것은?', options: ['날씨가 좋으면 준비물이 필요 없어요', '날씨가 좋아도 장소에 맞는 준비물을 챙겨요', '준비물은 무조건 많을수록 좋아요'], answer: 1, difficulty: 0.15, explain: '맑아도 산 위는 바람이 차고 길이 험할 수 있어 장소에 맞게 챙겨요.' },
              { type: 'mood', prompt: '생태형 스포츠를 처음 알아본 오늘 마음은 어땠나요?' },
            ],
          },
        ),
        worksheet: {
          title: '자연과 함께하는 스포츠',
          items: [
            { type: 'table', prompt: '아는 생태형 스포츠를 하는 곳에 따라 나누어 쓰세요.', columns: ['생활 둘레(학교·동네)', '자연(산·강·바다)'], rows: 3 },
            { type: 'table', prompt: '활동마다 영향을 주는 자연 조건과 꼭 챙길 준비물을 쓰세요.', columns: ['활동', '영향을 주는 자연 조건', '꼭 챙길 준비물'], cells: [['등산', '', ''], ['카누', '', ''], ['원반 던지기', '', '']] },
            { type: 'choice', prompt: '생태형 스포츠에 대한 설명으로 알맞은 것에 ○ 하세요.', options: ['실내에서만 하는 운동이에요', '자연 속에서 자연 조건에 맞추어 즐겨요', '날씨와 관계없이 방법이 늘 같아요'], answer: '자연 속에서 자연 조건에 맞추어 즐겨요' },
            { type: 'short', prompt: '"날씨만 좋으면 준비가 필요 없다"는 말에 대한 내 생각을 까닭과 함께 쓰세요.' },
            { type: 'check', prompt: '오늘 운동장 걷기에서 지킨 것에 ✓ 하세요.', options: ['모자와 물병을 챙겼어요', '정한 구역 안에서 걸었어요', '친구와 거리를 두었어요'] },
          ],
          easy: {
            note: '카드에 적힌 장소가 학교·동네이면 생활 둘레, 산·강·바다이면 자연이에요.',
            items: [
              { type: 'choice', prompt: '"강에서 카누 타기"는 어디에서 하는 활동인가요?', options: ['생활 둘레', '자연'], answer: '자연' },
              { type: 'choice', prompt: '한여름 산길을 걸을 때 가장 먼저 챙길 것은?', options: ['모자와 물병', '털장갑'], answer: '모자와 물병' },
              { type: 'draw', prompt: '해 보고 싶은 생태형 스포츠 하나를 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드를 맞는 가지에 놓으면 바로 표시되고, 틀리면 까닭을 말해 주고 되돌아와요. 카드 한 장이 미리 놓여 있고, 준비물 고르기의 함정 카드가 하나 적어요.',
          base: '모두 놓은 뒤 확인해 스스로 고쳐요.',
          challenge: '실내 놀이 카드와 "날씨만 좋으면 준비가 필요 없다" 같은 그럴듯한 함정 카드가 더해져요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 생태형 스포츠를 먼 산이나 바다에서만 하는 것으로 여긴다 → 학교 운동장 원반·학교 숲 걷기도 자연 조건(바람·땅)에 맞추는 활동임을 짚는다. ② 날씨만 좋으면 준비가 필요 없다고 여긴다 → 비 온 다음 날 땅, 산 위 바람처럼 장소 조건을 함께 본다. ③ 같은 걷기를 같은 칸에 넣는다 → 카드의 장소 말을 소리 내어 읽게 한다. 실제 걷기는 교구가 판정하지 않으므로 교사가 준비물과 거리 지키기를 관찰한다.',
      }),
      // ───────────────────────── 2 ─────────────────────────
      L(2, {
        title: '일기 예보 보고 운동장 걷기 계획 바꾸기',
        objective: '일기 예보와 그날 장소의 상태를 보고 준비물과 걷기·쉬기 계획을 바꾸고, 그렇게 바꾼 까닭을 말할 수 있다.',
        illustration: art('a class of children reading a big paper weather forecast board with sun, rain cloud and wind icons before walking around a school field', [
          { motif: 'sun', x: 120, y: 64, s: 0.8 }, { motif: 'cloud', x: 240, y: 56 }, { motif: 'cloud', x: 360, y: 70, s: 0.8 },
          { motif: 'hills', y: 214 }, { motif: 'tree', x: 420, y: 212 },
          { motif: 'text', x: 240, y: 138, text: '오늘 날씨에 맞게', size: 24 },
        ]),
        safety: [FIELD, WATER, SUN],
        stages: stages(
          {
            teacher: '오늘과 내일의 일기 예보(기온·비 올 확률·바람)를 칠판에 띄우고 묻는다. "지난 시간에 챙긴 준비물을 내일도 그대로 챙기면 될까요?" 대답을 받아 "예보는 시작이고, 그날 장소를 직접 살피는 것까지가 준비예요"라고 말한다. 오늘은 날씨에 맞게 걷기 계획을 바꾸어 실제로 걸어 본다고 알린다.',
            student: '오늘 예보를 읽고, 지난 시간과 견주어 무엇을 바꿔 챙겨야 할지 짝과 말해 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 예보와 장소 상태에 맞게 바꿀 점 찾기', minutes: 12, tool: 'mindmap',
              task: '예보 카드마다 바꿀 점을 잇고, 더운 날과 추운 날에 더 챙길 것을 나누어요. 그다음 운동장에 나가 오늘 장소의 상태를 직접 살펴요.',
              teacher: '"예보가 맑음인데 운동장에 물웅덩이가 있다면요?" 예보만 믿고 장소를 살피지 않는 생각을 짚는다. 더운 날 챙길 것과 추운 날 챙길 것은 몸의 열을 내보내느냐 지키느냐로 나누게 한다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '예보 카드마다 걷기 계획에서 바꿀 점을 이어요.', toolOptions: { mode: 'match', topic: '예보 보고 바꿔요', slots: [{ id: 'hot', label: '낮 기온 32도, 햇볕 강함' }, { id: 'rain', label: '오후 소나기 올 확률 높음' }, { id: 'cold', label: '아침 기온 2도, 바람 쌀쌀' }], cards: ['물을 더 챙기고 그늘 쉼터 정하기', '비옷 챙기고 일찍 마칠 시간 정하기', '겹쳐 입을 겉옷과 장갑 챙기기'] }, target: { match: { hot: '물을 더 챙기고 그늘 쉼터 정하기', rain: '비옷 챙기고 일찍 마칠 시간 정하기', cold: '겹쳐 입을 겉옷과 장갑 챙기기' } }, levels: { easy: { state: { at: { '물을 더 챙기고 그늘 쉼터 정하기': 0 } } } }, difficulty: 0.15 },
                { prompt: '더운 날 더 챙길 것과 추운 날 더 챙길 것으로 나누어요.', toolOptions: { topic: '날씨별 준비물', slots: ['더운 날 더 챙겨요', '추운 날 더 챙겨요'], cards: ['평소보다 많은 물', '챙 넓은 모자', '자외선 차단제', '목도리', '두꺼운 장갑', '손난로'] }, target: { sort: { '더운 날 더 챙겨요': ['평소보다 많은 물', '챙 넓은 모자', '자외선 차단제'], '추운 날 더 챙겨요': ['목도리', '두꺼운 장갑', '손난로'] } }, levels: { easy: { state: { at: { '평소보다 많은 물': 0 } } }, challenge: { prompt: '더운 날과 추운 날에 더 챙길 것으로 나누어요. 걷기에 맞지 않는 카드는 어느 가지에도 넣지 않아요.', toolOptions: { cards: ['평소보다 많은 물', '챙 넓은 모자', '자외선 차단제', '목도리', '두꺼운 장갑', '손난로', '굽 높은 구두'] } } }, difficulty: 0.15 },
                { prompt: '예보는 맑음인데 아침 운동장에 물웅덩이가 남아 있어요. 걷기 전에 할 일만 골라요.', toolOptions: { mode: 'pick', topic: '걷기 전에', cards: ['웅덩이 둘레를 걷는 길에서 빼기', '미끄러운 곳을 친구들에게 알리기', '맑음이니 그대로 시작하기', '웅덩이 뛰어넘기 놀이하기'] }, target: { pick: ['웅덩이 둘레를 걷는 길에서 빼기', '미끄러운 곳을 친구들에게 알리기'] }, difficulty: 0.2,
                  predict: { q: '예보가 맑음이면 장소를 살피지 않아도 될까요?', options: ['살펴야 해요', '안 살펴도 돼요'], answer: 0 },
                  conclude: '예보는 시작일 뿐이에요. 그날 장소를 직접 살펴 계획을 바꾸어야 안전해요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 더운 날 걷기·쉬기 계획 맞추고 걸어 보기', minutes: 14, tool: 'timer',
              task: '더운 날에 맞추어 걷기·쉬기 구간을 맞추고, 출발 전 점검을 해요. 계획대로 운동장 둘레를 걷고 그늘에서 쉬어요.',
              teacher: '"더운 날에는 걷는 시간을 늘릴까요, 쉬는 시간을 늘릴까요?" 쉬는 시간을 늘리고 그늘에서 물을 마시는 것이 몸을 지키는 계획이라는 것을 짚는다. 전체 시간 문항에서는 "마지막 걷기 뒤에도 쉬나요?"를 묻는다. 계획을 맞춘 모둠부터 실제로 걷는다.',
              levels: { easy: { workStep: 30, restStep: 30, showTotal: true }, base: { workStep: 10, restStep: 10, showTotal: true }, challenge: { workStep: 10, restStep: 10 } },
              items: [
                { prompt: '운동장 둘레를 2분(120초) 걷고 그늘에서 30초 쉬기를 3번 하도록 맞춰요.', toolOptions: { plan: { work: 60, rest: 60, rounds: 2 } }, target: { plan: { work: 120, rest: 30, rounds: 3 } }, difficulty: 0.2 },
                { prompt: '걷기 90초, 쉬기 30초로 하고 전체 시간이 7분 30초(450초)가 되도록 횟수를 맞춰요.', toolOptions: { plan: { work: 90, rest: 30, rounds: 2 }, revealAfterCheck: true }, target: { plan: { work: 90, rest: 30 }, total: 450 }, difficulty: 0.45,
                  conclude: '걷기 90초×4번에 쉬기 30초×3번을 더하면 450초예요. 마지막 걷기 뒤에는 쉬지 않아요.' },
                { prompt: '더운 날 걷기를 시작하기 전에 확인한 것을 눌러 표시해요.', toolOptions: { safety: ['모자를 썼어요', '물병을 챙겼어요', '그늘 쉼터 자리를 알아 두었어요', '어지러우면 쉬겠다고 짝과 약속했어요'] }, target: { safety: true }, difficulty: 0.1 },
              ],
            },
          ],
          {
            teacher: '"오늘 계획에서 무엇을 바꾸었고, 왜 바꾸었나요?" 두세 모둠이 말한다. 출구 1번을 틀린 학생은 운동 시간과 쉬는 시간을 바꾸어 넣지 않았는지 살핀다. 그늘에서 물을 마시며 숨을 고르고 마친다.',
            exitTicket: [
              { type: 'tool', tool: 'timer', options: { plan: { work: 60, rest: 20, rounds: 3 }, workStep: 10, restStep: 10 }, prompt: '바람이 쌀쌀한 날이라 걷기 100초, 쉬기 20초를 5번 하도록 타이머를 맞춰요.', target: { plan: { work: 100, rest: 20, rounds: 5 } }, difficulty: 0.2 },
              { type: 'choice', prompt: '예보가 맑음인데 운동장이 질척해요. 어떻게 할까요?', options: ['예보를 믿고 그대로 걷는다', '질척한 곳을 빼고 걷는 길을 다시 정한다', '오늘은 아무 준비 없이 나간다'], answer: 1, difficulty: 0.15, explain: '그날 장소의 상태를 보고 계획을 바꾸어요.' },
              { type: 'short', prompt: '더운 날 걷기 계획에서 쉬는 시간을 늘리는 까닭을 한 줄로 쓰세요.' },
            ],
          },
        ),
        worksheet: {
          title: '예보 보고 계획 바꾸기',
          items: [
            { type: 'table', prompt: '예보를 보고 바꿀 준비물과 계획을 쓰세요.', columns: ['예보', '더 챙길 것', '바꿀 계획'], cells: [['낮 기온 32도', '', ''], ['오후 소나기', '', ''], ['아침 기온 2도', '', '']] },
            { type: 'figure', prompt: '구간 타이머를 보고 걷기·쉬기·횟수를 빈칸에 쓰세요.', tool: 'timer', options: { plan: { work: 120, rest: 30, rounds: 3 } }, figures: [{ state: {}, caption: '걷기 ___초, 쉬기 ___초, ___번' }], answer: '120, 30, 3' },
            { type: 'blank', prompt: '전체 시간을 구하세요.', text: '걷기 60초, 쉬기 20초를 4번 하면 전체 시간은 ___초예요.', answer: '300' },
            { type: 'choice', prompt: '예보가 맑음일 때 알맞은 것에 ○ 하세요.', options: ['장소를 살피지 않아도 된다', '그날 장소의 상태를 직접 살핀다', '준비물을 모두 빼도 된다'], answer: '그날 장소의 상태를 직접 살핀다' },
            { type: 'check', prompt: '오늘 걷기에서 지킨 것에 ✓ 하세요.', options: ['계획한 쉬는 시간에 그늘에서 쉬었어요', '물을 마셨어요', '물웅덩이를 피해 걸었어요'] },
          ],
          easy: {
            note: '더운 날에는 몸의 열을 식히는 것, 추운 날에는 몸의 열을 지키는 것을 챙겨요.',
            items: [
              { type: 'choice', prompt: '낮 기온이 32도인 날 더 챙길 것은?', options: ['챙 넓은 모자', '손난로'], answer: '챙 넓은 모자' },
              { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '걷기 계획은 걷기 시간, ___ 시간, 되풀이 횟수로 정해요.', answer: '쉬는' },
              { type: 'short', prompt: '오늘 걸을 때 챙긴 것 하나를 쓰세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드를 놓으면 바로 맞는지 보이고, 타이머 −/+ 단추가 30초씩 움직이며 전체 시간이 늘 보여요.',
          base: '10초씩 맞추고, 전체 시간은 보이지만 스스로 셈해 확인해요.',
          challenge: '전체 시간이 숨겨져 있어 셈으로 횟수를 찾고, 걷기에 맞지 않는 함정 카드가 더해져요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 예보가 맑으면 준비를 줄인다 → 그날 장소(물웅덩이·질척한 흙)를 직접 보게 한다. ② 더운 날 걷는 시간을 늘리려 한다 → 몸의 열을 식히는 쉬는 시간이 먼저다. ③ 전체 시간에 쉬는 횟수를 걷기 횟수와 같게 센다 → 마지막 걷기 뒤에는 쉬지 않는다. 실제 걷기는 교사가 관찰하고, 얼굴이 붉어지거나 땀이 멈춘 학생은 바로 그늘로 보낸다.',
      }),
      // ───────────────────────── 3 ─────────────────────────
      L(3, {
        title: '땅·물·눈과 얼음 — 생태형 스포츠 종류 나누기',
        objective: '생태형 스포츠를 땅, 물, 눈과 얼음에서 하는 종류로 나누고, 종류마다 조심할 자연 조건과 알맞은 장소를 찾을 수 있다.',
        illustration: art('three paper panels showing a mountain trail with hikers, a river with a canoe and a snowy slope with skiers, arranged side by side', [
          { motif: 'mountain', x: 90, y: 170 }, { motif: 'wave', x: 240, y: 200 }, { motif: 'snow', x: 390, y: 120 },
          { motif: 'sun', x: 240, y: 52, s: 0.7 }, { motif: 'hills', y: 226 },
          { motif: 'text', x: 240, y: 112, text: '땅 · 물 · 눈과 얼음', size: 24 },
        ]),
        safety: [FIELD, SPACE, WATER],
        stages: stages(
          {
            teacher: '"카누와 서핑은 같은 무리일까요? 등산과 스키는요?" 학생 대답을 받아 칠판에 땅·물·눈과 얼음 세 칸을 그린다. "어디서 하느냐에 따라 위험도 달라져요. 맑은 날 강물은 언제나 안전할까요?"를 물어 두고, 오늘은 종류를 나누고 지도에서 알맞은 장소를 찾은 뒤, 운동장에서 각 종류의 움직임을 흉내 내어 본다고 알린다.',
            student: '내가 아는 생태형 스포츠를 땅·물·눈과 얼음 가운데 어디에서 하는지 말해 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 종류 나누고 조심할 조건 잇기', minutes: 13, tool: 'mindmap',
              task: '생태형 스포츠 카드를 세 종류로 나누고, 종류마다 가장 조심할 자연 조건을 이어요. 나눈 뒤 모둠별로 한 종류를 골라 그 움직임(노 젓기·걷기·미끄러지기)을 제자리에서 흉내 내 보여요.',
              teacher: '"오리엔티어링은 어디서 할까요? 지도를 들고 숲과 들을 달리지요." 이름이 낯선 카드는 교사가 짧게 설명한다. 조심할 조건을 이을 때 "맑은 날 강물도 위쪽에 비가 오면 갑자기 불어나요"를 짚는다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '생태형 스포츠 카드를 땅, 물, 눈과 얼음 세 종류로 나누어요.', toolOptions: { topic: '생태형 스포츠의 종류', slots: ['땅(산과 들)', '물(강과 바다)', '눈과 얼음'], cards: ['등산', '오리엔티어링', '카누', '서핑', '스키', '눈썰매'] }, target: { sort: { '땅(산과 들)': ['등산', '오리엔티어링'], '물(강과 바다)': ['카누', '서핑'], '눈과 얼음': ['스키', '눈썰매'] } }, levels: { easy: { state: { at: { '등산': 0 } } }, challenge: { prompt: '생태형 스포츠 카드를 세 종류로 나누어요. 자연 환경에서 하지 않는 운동 카드는 어느 가지에도 넣지 않아요.', toolOptions: { cards: ['등산', '오리엔티어링', '카누', '서핑', '스키', '눈썰매', '실내 볼링'] } } }, difficulty: 0.15 },
                { prompt: '종류마다 가장 조심할 자연 조건을 이어요.', toolOptions: { mode: 'match', topic: '조심할 조건', slots: [{ id: 'land', label: '땅(산과 들)' }, { id: 'water', label: '물(강과 바다)' }, { id: 'snow', label: '눈과 얼음' }], cards: ['길 잃음과 미끄러운 돌길', '갑자기 불어나는 물', '낮은 기온과 얇은 얼음'] }, target: { match: { land: '길 잃음과 미끄러운 돌길', water: '갑자기 불어나는 물', snow: '낮은 기온과 얇은 얼음' } }, levels: { easy: { state: { at: { '길 잃음과 미끄러운 돌길': 0 } } } }, difficulty: 0.2 },
                { prompt: '"맑은 날은 준비가 필요 없다"는 말이 틀린 까닭이 되는 카드만 골라요.', toolOptions: { mode: 'pick', topic: '맑아도 조심해요', cards: ['맑은 날에도 산 위는 바람이 차요', '맑아도 위쪽에 비가 오면 강물이 불어나요', '햇볕이 강하면 몸이 쉽게 지쳐요', '맑으면 다칠 일이 없어요'] }, target: { pick: ['맑은 날에도 산 위는 바람이 차요', '맑아도 위쪽에 비가 오면 강물이 불어나요', '햇볕이 강하면 몸이 쉽게 지쳐요'] }, difficulty: 0.2,
                  conclude: '맑은 날에도 장소마다 다른 위험이 있어서 생태형 스포츠는 늘 준비가 필요해요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 지도에서 종류에 알맞은 장소 찾기', minutes: 13, tool: 'map',
              task: '가상의 고장 지도에서 활동마다 알맞은 장소에 핀을 꽂아요. 높은 곳일수록 종이 층이 많이 겹쳐 있어요.',
              teacher: '"스키는 왜 높은 산에서 탈까요?" 높은 곳일수록 기온이 낮아 눈이 오래 남는다는 것을 짚는다. 카누는 물이 흐르는 강, 서핑은 파도가 치는 바다처럼 활동이 필요로 하는 자연 조건으로 장소를 고르게 한다.',
              options: { mode: 'terrain', grid: [6, 4], heights: [[3, 4, 3, 1, 0, -1], [2, 3, 2, 1, 0, -1], [1, 1, 1, 0, 0, -1], [0, 0, 0, 0, 0, -1]], rivers: [[[2, 1], [2, 2], [3, 2], [4, 2]]], places: [{ name: '우리 동네', icon: 'city', at: [0, 3] }, { name: '숲길', icon: 'forest', at: [0, 1] }, { name: '해수욕장', icon: 'beach', at: [4, 3] }] },
              levels: { easy: {}, base: {}, challenge: { terrainView: 'contour' } },
              items: [
                { prompt: '겨울에 스키를 타기 가장 알맞은, 이 지도에서 가장 높은 땅에 핀을 꽂아요.', target: { highest: true }, difficulty: 0.2,
                  predict: { q: '스키장은 어떤 곳에 있을까요?', options: ['높고 추운 곳', '낮고 따뜻한 곳'], answer: 0 },
                  conclude: '높은 곳일수록 기온이 낮아 눈이 오래 남아서 스키를 타기 알맞아요.' },
                { prompt: '카누를 탈 수 있도록 강물이 흐르는 칸 하나에 핀을 꽂아요.', target: { river: true }, difficulty: 0.15 },
                { prompt: '서핑을 할 수 있는 바다 칸 하나에 핀을 꽂아요.', target: { sea: true }, difficulty: 0.1 },
              ],
            },
          ],
          {
            teacher: '"카누와 스키는 조심할 것이 어떻게 다른가요?" 종류마다 조심할 조건이 다르다는 것을 두세 학생이 말하게 한다. 출구 1번에서 래프팅을 땅에 둔 학생은 "보트가 어디 위에 떠 있나요?"를 묻는다. 정리 운동으로 어깨와 허리를 천천히 돌리고 마친다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { topic: '생태형 스포츠의 종류', slots: ['땅(산과 들)', '물(강과 바다)', '눈과 얼음'], cards: ['산악자전거', '래프팅', '스노보드'] }, prompt: '새 카드 세 장을 생태형 스포츠의 세 종류로 나누어요.', target: { sort: { '땅(산과 들)': ['산악자전거'], '물(강과 바다)': ['래프팅'], '눈과 얼음': ['스노보드'] } }, difficulty: 0.15 },
              { type: 'choice', prompt: '맑은 날 강에서 카누를 탈 때 조심할 것으로 알맞은 것은?', options: ['맑으니 조심할 것이 없다', '위쪽에 내린 비로 물이 불어날 수 있다', '눈이 녹아 미끄럽다'], answer: 1, difficulty: 0.2, explain: '강물은 위쪽 지역의 비로 갑자기 불어날 수 있어요.' },
              { type: 'mood', prompt: '세 종류 가운데 가장 해 보고 싶은 활동을 떠올리면 마음이 어떤가요?' },
            ],
          },
        ),
        worksheet: {
          title: '생태형 스포츠의 종류',
          items: [
            { type: 'table', prompt: '종류마다 활동 이름과 조심할 자연 조건을 쓰세요.', columns: ['종류', '활동 두 가지', '조심할 자연 조건'], cells: [['땅(산과 들)', '', ''], ['물(강과 바다)', '', ''], ['눈과 얼음', '', '']] },
            { type: 'figure', prompt: '지도에서 스키를 타기 알맞은 곳에 ○, 카누를 탈 곳에 △ 하세요.', tool: 'map', options: { mode: 'terrain', grid: [6, 4], heights: [[3, 4, 3, 1, 0, -1], [2, 3, 2, 1, 0, -1], [1, 1, 1, 0, 0, -1], [0, 0, 0, 0, 0, -1]], rivers: [[[2, 1], [2, 2], [3, 2], [4, 2]]], places: [{ name: '우리 동네', icon: 'city', at: [0, 3] }] }, figures: [{ state: {}, caption: '○ 스키, △ 카누' }], answer: '○ 가장 높은 땅, △ 강이 흐르는 칸' },
            { type: 'choice', prompt: '"눈썰매"는 어느 종류인가요?', options: ['땅(산과 들)', '물(강과 바다)', '눈과 얼음'], answer: '눈과 얼음' },
            { type: 'short', prompt: '맑은 날에도 생태형 스포츠에 준비가 필요한 까닭을 한 가지 쓰세요.' },
          ],
          easy: {
            note: '그 활동을 할 때 몸이 땅 위에 있는지, 물 위에 있는지, 눈 위에 있는지 떠올려요.',
            items: [
              { type: 'choice', prompt: '"서핑"은 어디에서 하나요?', options: ['땅', '물', '눈과 얼음'], answer: '물' },
              { type: 'choice', prompt: '스키를 타기 알맞은 곳은?', options: ['높고 추운 산', '낮은 바닷가'], answer: '높고 추운 산' },
              { type: 'draw', prompt: '땅·물·눈과 얼음 가운데 한 곳에서 하는 활동을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드를 맞는 가지에 놓으면 바로 표시되고 한 장이 미리 놓여 있어요. 지도는 높이가 색 층으로 보여요.',
          base: '스스로 나눈 뒤 확인해 고쳐요.',
          challenge: '실내 운동 함정 카드가 더해지고, 지도가 등고선으로만 보여 선이 겹친 정도로 높이를 읽어요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 오리엔티어링·래프팅 같은 낯선 이름을 몰라 아무 칸에 둔다 → 그 활동에서 몸이 어디 위에 있는지 묻는다. ② 맑은 날 강물은 안전하다고 여긴다 → 위쪽 지역 비로 물이 불어나는 것을 짚는다. ③ 지도에서 넓은 곳을 높은 곳으로 읽는다 → 층이 몇 겹 쌓였는지 센다. 흉내 내기 움직임은 제자리에서 하게 하고 교사가 거리를 살핀다.',
      }),
      // ───────────────────────── 4 ─────────────────────────
      L(4, {
        title: '학교 숲길 걷기에 참여하며 자연 지키기',
        objective: '학교 둘레 숲길 걷기를 차례에 맞게 하고, 걷는 동안 쓰레기 말고도 자연을 해치지 않는 행동을 골라 실천할 수 있다.',
        illustration: art('children walking in a line on a narrow paper path through a school garden forest, looking at a bird nest from a distance and staying on the trail', [
          { motif: 'tree', x: 80, y: 190 }, { motif: 'tree', x: 400, y: 196 }, { motif: 'bird', x: 300, y: 80 },
          { motif: 'flower', x: 180, y: 222 }, { motif: 'leaf', x: 340, y: 210 }, { motif: 'hills', y: 230 },
          { motif: 'text', x: 240, y: 130, text: '길로만, 보기만, 그대로', size: 24 },
        ]),
        safety: [PATH, BOUND, WATER],
        stages: stages(
          {
            teacher: '"쓰레기를 버리지 않으면 자연을 다 지킨 걸까요?" 학생 대답을 받은 뒤, 풀밭을 가로질러 생긴 맨땅 길 사진을 보여 준다. "여기는 쓰레기가 하나도 없는데 무엇이 달라졌나요?" 밟힌 풀, 꺾인 가지도 자연이 다친 흔적이라는 것을 짚고, 오늘은 학교 숲길을 걸으며 흔적을 남기지 않는 방법을 직접 해 본다고 알린다.',
            student: '쓰레기가 없는데도 자연이 다친 사진을 보고, 무엇이 달라졌는지 찾아 말해 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 숲길 걷기 준비하고 걸어 보기', minutes: 14, tool: 'timer',
              task: '출발 전 점검을 하고 걷기 차례를 세운 뒤, 모둠별로 학교 숲길을 실제로 걸어요. 걷는 동안 자연을 지킨 행동 하나를 짝과 서로 찾아 줘요.',
              teacher: '"숲길에서는 앞 사람과 두 걸음 떨어져 한 줄로 걸어요." 출발 전에 점검을 마친 모둠부터 나간다. 쉼터에서 물을 마시게 하고, 길 밖으로 나가는 학생에게 "길 밖 풀은 한 번 밟히면 다시 서기 어려워요"라고 말한다.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '숲길 걷기를 나가기 전에 확인한 것을 눌러 표시해요.', toolOptions: { safety: ['발에 맞는 운동화를 신었어요', '물병을 챙겼어요', '걸을 길과 쉼터를 선생님께 들었어요'] }, target: { safety: true }, difficulty: 0.1 },
                { prompt: '숲길 걷기 카드를 하는 차례대로 놓아요.', toolOptions: { cards: ['정한 길 따라 걷기', '정리 운동', '쉼터에서 물 마시기', '준비 운동', '다시 걸어 돌아오기'] }, target: { order: ['준비 운동', '정한 길 따라 걷기', '쉼터에서 물 마시기', '다시 걸어 돌아오기', '정리 운동'] }, levels: { easy: { state: { order: ['준비 운동', '정리 운동', '쉼터에서 물 마시기', '정한 길 따라 걷기', '다시 걸어 돌아오기'] } } }, difficulty: 0.15 },
                { prompt: '모둠과 숲길을 실제로 걸어요. 앞 사람과 두 걸음 떨어져 길로만 걸었으면 표시해요.', free: true, toolOptions: { doneLabel: '모둠과 숲길을 걸었어요' }, difficulty: 0.1 },
              ],
            },
            {
              id: 'a2', title: '활동 2. 쓰레기 말고도 자연을 지키는 행동 찾기', minutes: 12, tool: 'mindmap',
              task: '걷는 동안 본 행동을 자연을 지키는 것과 해치는 것으로 나누고, 하고 싶은 마음이 들 때 대신 할 행동을 이어요.',
              teacher: '"꽃을 한 송이만 꺾는 것도 해치는 걸까요? 우리 반이 모두 한 송이씩이면요?" 쓰레기만 버리지 않으면 된다는 생각을 짚는다. 하고 싶은 마음 자체를 나무라지 말고 대신 할 행동을 찾게 한다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '숲길에서 본 행동을 자연을 지키는 행동과 해치는 행동으로 나누어요.', toolOptions: { topic: '숲길에서', slots: ['자연을 지켜요', '자연을 해쳐요'], cards: ['정해진 길로만 걷기', '꽃을 꺾어 가져가기', '돌을 뒤집었으면 제자리에 놓기', '나뭇가지를 꺾어 지팡이 만들기', '새 둥지를 멀리서 조용히 보기', '곤충을 잡아 통에 담기'] }, target: { sort: { '자연을 지켜요': ['정해진 길로만 걷기', '돌을 뒤집었으면 제자리에 놓기', '새 둥지를 멀리서 조용히 보기'], '자연을 해쳐요': ['꽃을 꺾어 가져가기', '나뭇가지를 꺾어 지팡이 만들기', '곤충을 잡아 통에 담기'] } }, levels: { easy: { state: { at: { '정해진 길로만 걷기': 0 } } } }, difficulty: 0.15 },
                { prompt: '이런 마음이 들 때 자연을 해치지 않고 대신 할 행동을 이어요.', toolOptions: { mode: 'match', topic: '대신 이렇게', slots: [{ id: 'mud', label: '길이 질어서 풀밭으로 돌아가고 싶어요' }, { id: 'flower', label: '예쁜 꽃을 집에 가져가고 싶어요' }, { id: 'nest', label: '새 둥지를 가까이서 보고 싶어요' }], cards: ['젖어도 되는 신발로 정한 길을 걸어요', '그림이나 사진으로 남겨요', '멀리서 조용히 지켜봐요'] }, target: { match: { mud: '젖어도 되는 신발로 정한 길을 걸어요', flower: '그림이나 사진으로 남겨요', nest: '멀리서 조용히 지켜봐요' } }, difficulty: 0.2 },
                { prompt: '숲길 걷기를 마친 뒤에 할 일만 골라요.', toolOptions: { mode: 'pick', topic: '걷기를 마치고', cards: ['가져간 물건을 다 챙겼는지 세어 보기', '걸은 길에 떨어뜨린 것이 없는지 돌아보기', '주운 도토리를 주머니에 넣어 오기', '남은 간식 껍질을 나무 밑에 묻기'] }, target: { pick: ['가져간 물건을 다 챙겼는지 세어 보기', '걸은 길에 떨어뜨린 것이 없는지 돌아보기'] }, levels: { challenge: { prompt: '숲길 걷기를 마친 뒤에 할 일만 골라요. 자연을 위하는 것처럼 보이는 함정 카드가 있어요.', toolOptions: { cards: ['가져간 물건을 다 챙겼는지 세어 보기', '걸은 길에 떨어뜨린 것이 없는지 돌아보기', '주운 도토리를 주머니에 넣어 오기', '남은 간식 껍질을 나무 밑에 묻기', '예쁜 돌을 기념으로 가져오기'] } } }, difficulty: 0.2,
                  conclude: '자연에서는 아무것도 가져오지 않고 아무것도 남기지 않아야 그곳이 처음 그대로 남아요.' },
              ],
            },
          ],
          {
            teacher: '"오늘 걸으며 짝이 자연을 지킨 행동을 보았나요?" 서로 찾아 준 행동을 두세 개 듣는다. 출구 2번을 틀린 학생에게는 오늘 본 풀밭 맨땅 사진을 다시 보여 준다. 다리 뒤쪽을 늘이는 정리 운동으로 마친다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { topic: '숲길에서', slots: ['자연을 지켜요', '자연을 해쳐요'], cards: ['떨어진 솔방울은 보기만 하기', '나무 껍질에 이름 새기기', '개미 줄을 밟지 않게 넘어가기', '열매를 따서 맛보기'] }, prompt: '새 행동 카드를 자연을 지키는 것과 해치는 것으로 나누어요.', target: { sort: { '자연을 지켜요': ['떨어진 솔방울은 보기만 하기', '개미 줄을 밟지 않게 넘어가기'], '자연을 해쳐요': ['나무 껍질에 이름 새기기', '열매를 따서 맛보기'] } }, difficulty: 0.15 },
              { type: 'choice', prompt: '쓰레기를 하나도 버리지 않았지만 풀밭을 가로질러 걸었어요. 알맞은 말은?', options: ['쓰레기가 없으니 자연을 다 지켰다', '풀이 밟혀 자연이 다쳤다', '풀은 금방 다시 자라니 괜찮다'], answer: 1, difficulty: 0.2, explain: '밟힌 풀과 꺾인 가지도 자연이 다친 흔적이에요.' },
              { type: 'short', prompt: '다음 숲길 걷기에서 내가 꼭 지킬 행동 하나를 쓰세요.' },
            ],
          },
        ),
        worksheet: {
          title: '흔적 없이 걷기',
          items: [
            { type: 'table', prompt: '숲길에서 본 행동을 나누어 쓰세요.', columns: ['자연을 지킨 행동', '자연을 해친 행동'], rows: 3 },
            { type: 'table', prompt: '숲길 걷기 카드에 하는 차례대로 1~5를 쓰세요.', columns: ['카드', '차례'], cells: [['정한 길 따라 걷기', ''], ['정리 운동', ''], ['쉼터에서 물 마시기', ''], ['준비 운동', ''], ['다시 걸어 돌아오기', '']], answer: '준비 운동 1, 정한 길 따라 걷기 2, 쉼터에서 물 마시기 3, 다시 걸어 돌아오기 4, 정리 운동 5' },
            { type: 'choice', prompt: '꽃이 예뻐서 갖고 싶을 때 알맞은 행동에 ○ 하세요.', options: ['한 송이만 꺾는다', '그림이나 사진으로 남긴다', '뿌리째 캐 간다'], answer: '그림이나 사진으로 남긴다' },
            { type: 'short', prompt: '"쓰레기만 버리지 않으면 자연을 지킨 것이다"라는 말을 고쳐 쓰세요.' },
            { type: 'check', prompt: '오늘 걷기에서 한 것에 ✓ 하세요.', options: ['길로만 걸었어요', '아무것도 가져오지 않았어요', '앞 사람과 두 걸음 떨어져 걸었어요'] },
          ],
          easy: {
            note: '자연에서는 아무것도 가져오지 않고, 아무것도 남기지 않아요.',
            items: [
              { type: 'choice', prompt: '자연을 지키는 행동은?', options: ['새 둥지를 멀리서 보기', '나뭇가지 꺾기'], answer: '새 둥지를 멀리서 보기' },
              { type: 'choice', prompt: '숲길에서 걷는 곳은?', options: ['정해진 길', '풀밭 가운데'], answer: '정해진 길' },
              { type: 'draw', prompt: '오늘 숲길에서 본 것 하나를 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '숲길 걷기 차례 카드 중 첫 카드가 미리 놓여 있고, 행동 카드를 놓으면 바로 맞는지 보여요.',
          base: '차례와 행동 나누기를 스스로 한 뒤 확인해요.',
          challenge: '"예쁜 돌을 기념으로 가져오기"처럼 해롭지 않아 보이는 함정 카드를 가려내요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 쓰레기만 버리지 않으면 자연을 지킨 것이라고 여긴다 → 밟힌 풀·꺾인 가지·옮긴 돌도 흔적이라는 것을 사진으로 보인다. ② 한 송이쯤은 괜찮다고 여긴다 → 반 전체가 한 송이씩이면 몇 송이인지 셈해 본다. ③ 걷기에 들떠 줄 간격이 무너진다 → 쉼터마다 줄을 다시 맞춘다. 실제 걷기는 교사가 맨 뒤에서 따라가며 관찰한다.',
      }),
      // ───────────────────────── 5 ─────────────────────────
      L(5, {
        title: '학교 지도 들고 점검 지점 찾아가기',
        objective: '학교 칸 지도에서 방위와 칸 수로 점검 지점을 찾아 실제로 찾아가고, 길로만 다니며 지점 표시를 그대로 두고 올 수 있다.',
        illustration: art('children holding a paper map of a school yard and running to orange and white checkpoint flags near a tree and a gym', [
          { motif: 'tree', x: 70, y: 190 }, { motif: 'house', x: 400, y: 200 }, { motif: 'flower', x: 150, y: 226 },
          { motif: 'star', x: 260, y: 100, s: 0.8 }, { motif: 'hills', y: 230 },
          { motif: 'text', x: 240, y: 150, text: '지도 보고 찾아가요', size: 24 },
        ]),
        safety: [RUN, BOUND, PATH],
        stages: stages(
          {
            teacher: '학교 칸 지도를 화면에 띄우고 묻는다. "지도의 위쪽은 어느 방위일까요? 지금 우리가 선 곳은 지도에서 어디일까요?" 정문 칸을 함께 짚는다. "지도를 들고 정해진 점검 지점을 찾아 도는 스포츠를 오리엔티어링이라고 해요. 빨리 뛰는 것보다 길을 바르게 읽는 것이 먼저예요." 오늘은 점검 지점 세 곳을 찾아 돌아온다고 알린다.',
            student: '지도에서 우리가 선 정문을 찾고, 지도의 북쪽이 실제로 어느 쪽인지 손으로 가리켜 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 지도에서 점검 지점 자리 찾기', minutes: 12, tool: 'map',
              task: '방위와 칸 수를 보고 점검 지점 자리에 핀을 꽂아요. 꽂은 자리를 종이 지도에 ○로 옮겨 그려 들고 나가요.',
              teacher: '"출발한 곳에 내가 서 있다고 생각하고 그 방위로 칸을 세요." 출발 칸을 하나로 세는 학생에게 "출발한 칸은 세지 않아요. 한 칸 옮겨 간 곳이 1이에요"라고 짚는다. 북서처럼 두 방위가 섞인 것은 대각선 한 칸이다.',
              options: SCHOOL,
              levels: { easy: { readout: true }, base: {}, challenge: { names: false } },
              items: [
                { prompt: '1번 점검 지점은 정문에서 서쪽으로 한 칸 간 곳이에요. 그 자리에 핀을 꽂아요.', target: { from: '정문', dir: '서', steps: 1 }, difficulty: 0.1 },
                { prompt: '2번 점검 지점은 체육관에서 북쪽으로 한 칸 간 곳이에요. 그 자리에 핀을 꽂아요.', target: { from: '체육관', dir: '북', steps: 1 }, difficulty: 0.15 },
                { prompt: '3번 점검 지점은 본관에서 북서쪽으로 한 칸 간 곳이에요. 그 자리에 핀을 꽂아요.', target: { from: '본관', dir: '북서', steps: 1 }, difficulty: 0.25,
                  predict: { q: '북서쪽은 지도에서 어느 쪽일까요?', options: ['왼쪽 위', '오른쪽 위', '왼쪽 아래'], answer: 0 },
                  conclude: '북서쪽은 북쪽과 서쪽 사이, 지도에서 왼쪽 위로 비스듬한 쪽이에요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 점검 지점 세 곳 찾아 돌아오기', minutes: 14, tool: 'timer',
              task: '출발 전 점검을 하고, 짝과 함께 지도를 들고 세 지점을 찾아 확인 도장을 찍고 돌아와요. 걸린 시간과 찾은 지점 수를 적고 스스로 점검해요.',
              teacher: '"지점 표시는 다음 모둠도 찾아야 하니 그대로 두고 와요." 짝은 한 사람이 지도, 한 사람이 도장 카드를 맡는다. 화단을 가로질러 가는 모둠이 보이면 "지도에 있는 길로 돌아가는 것도 오리엔티어링 실력이에요"라고 말한다. 기록은 남과 견주지 않는다.',
              levels: { easy: {}, base: {}, challenge: { stopwatch: true } },
              items: [
                { prompt: '오리엔티어링을 나가기 전에 확인한 것을 눌러 표시해요.', toolOptions: { safety: ['지점 세 곳을 지도에 ○로 옮겨 그렸어요', '돌아올 시간과 신호를 들었어요', '짝과 떨어지지 않기로 약속했어요'] }, target: { safety: true }, difficulty: 0.1 },
                { prompt: '짝과 세 지점을 돌고 와서 걸린 시간과 찾은 지점 수를 적어요.', toolOptions: { fields: [{ label: '걸린 시간', unit: '초', step: 5, max: 900 }, { label: '찾은 지점 수', unit: '곳', max: 3 }] }, target: { records: true }, difficulty: 0.15 },
                { prompt: '돌아와서 오늘 한 것을 스스로 점검해 표시해요.', target: { selfCheck: ['지도에 있는 길로만 다녔어요', '점검 지점 표시를 그대로 두고 왔어요', '뛸 때 고개를 들어 앞을 보았어요'] }, difficulty: 0.1 },
              ],
            },
          ],
          {
            teacher: '"지점을 찾기 어려웠던 곳은 어디였나요? 지도에서 무엇을 놓쳤나요?" 두 모둠의 이야기를 듣는다. 출구 1번에서 출발 칸을 하나로 센 학생은 손가락으로 한 칸씩 옮겨 세게 한다. 숨을 고르며 종아리를 늘이고 마친다.',
            exitTicket: [
              { type: 'tool', tool: 'map', options: SCHOOL, prompt: '도서관에서 북쪽으로 한 칸 간 곳에 점검 지점이 있어요. 그 자리에 핀을 꽂아요.', target: { from: '도서관', dir: '북', steps: 1 }, difficulty: 0.15 },
              { type: 'choice', prompt: '점검 지점이 화단 너머에 있어요. 어떻게 갈까요?', options: ['화단을 가로질러 곧장 간다', '지도의 길을 따라 돌아서 간다', '찾지 않고 돌아온다'], answer: 1, difficulty: 0.15, explain: '길로 돌아가는 것도 오리엔티어링 실력이에요. 화단을 밟지 않아요.' },
              { type: 'mood', prompt: '지도를 들고 지점을 찾아본 오늘 마음은 어땠나요?' },
            ],
          },
        ),
        worksheet: {
          title: '학교 지도로 지점 찾기',
          items: [
            { type: 'figure', prompt: '학교 지도에서 "정문에서 서쪽으로 한 칸"인 곳에 ○ 하세요.', tool: 'map', options: SCHOOL, figures: [{ state: {}, caption: '정문에서 서쪽으로 한 칸' }], answer: '정문 왼쪽 칸' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '지도에서 위쪽은 ___쪽이고, 북쪽과 서쪽 사이를 ___이라고 해요.', answer: '북, 북서' },
            { type: 'table', prompt: '오늘 오리엔티어링 기록을 쓰세요.', columns: ['걸린 시간(초)', '찾은 지점 수', '가장 찾기 어려웠던 지점'], rows: 1 },
            { type: 'choice', prompt: '오리엔티어링에서 지점 표시를 찾은 뒤에 할 일에 ○ 하세요.', options: ['표시를 가져온다', '도장만 찍고 표시는 그대로 둔다', '표시를 다른 곳에 숨긴다'], answer: '도장만 찍고 표시는 그대로 둔다' },
            { type: 'check', prompt: '오늘 지킨 것에 ✓ 하세요.', options: ['길로만 다녔어요', '짝과 함께 다녔어요', '신호에 맞추어 돌아왔어요'] },
          ],
          easy: {
            note: '출발한 칸은 세지 않아요. 한 칸 옮겨 간 곳이 "한 칸"이에요.',
            items: [
              { type: 'choice', prompt: '지도에서 위쪽은 어느 방위인가요?', options: ['북쪽', '남쪽'], answer: '북쪽' },
              { type: 'choice', prompt: '지점이 화단 너머에 있을 때는?', options: ['길로 돌아간다', '화단을 가로지른다'], answer: '길로 돌아간다' },
              { type: 'draw', prompt: '오늘 찾은 지점 하나를 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '핀을 꽂으면 지금 핀이 어느 칸에 있는지 글로 보여요.',
          base: '지도의 장소 이름을 보며 스스로 칸을 세어요.',
          challenge: '지도에 장소 이름이 없어 범례 기호로 장소를 찾고, 기록판의 시간 재기로 직접 재요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 출발 칸을 1로 센다 → 손가락으로 한 칸 옮긴 곳이 1이다. ② 지도의 위쪽과 실제 북쪽을 맞추지 않고 뛴다 → 출발 전 지도를 돌려 북쪽을 실제 북쪽에 맞추게 한다(17·19차시에서 더 다룬다). ③ 빨리 가려고 화단을 가로지른다 → 길로 돌아가는 것도 실력임을 기록과 함께 말한다. 지점 표시(콘·종이 깃발)는 교사가 미리 놓고, 교사는 운동장 가운데에서 전체를 본다.',
      }),
      // ───────────────────────── 6 ─────────────────────────
      L(6, {
        title: '모둠이 고른 야외 활동 즐기며 환경 지킴이 맡기',
        objective: '장소 조건에 맞는 야외 활동을 모둠이 골라 참여하고, 활동 중 환경을 해치지 않는 행동을 골라 실천할 수 있다.',
        illustration: art('three groups of children on a school ground, one tossing a flying disc on open grass, one walking a shady tree path and one finding hidden checkpoint flags', [
          { motif: 'tree', x: 80, y: 190 }, { motif: 'tree', x: 130, y: 200, s: 0.8 }, { motif: 'sun', x: 410, y: 56, s: 0.8 },
          { motif: 'star', x: 320, y: 110, s: 0.7 }, { motif: 'hills', y: 228 },
          { motif: 'text', x: 260, y: 150, text: '고르고, 즐기고, 지키고', size: 24 },
        ]),
        safety: [DISC, PATH, BOUND, WATER],
        stages: stages(
          {
            teacher: '"오늘은 모둠이 활동을 고를 거예요. 운동장, 나무 그늘 숲길, 건물이 많은 뒷마당 가운데 어디서 무엇을 하면 좋을까요?" 장소 세 곳의 사진을 보여 준다. 모둠마다 한 사람은 "환경 지킴이"를 맡아, 활동하는 동안 자연을 해치는 행동이 없는지 살피고 부드럽게 알려 준다고 말한다.',
            student: '세 장소 사진을 보고, 우리 모둠이 하고 싶은 활동과 그 장소가 맞는지 이야기해 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 장소에 맞는 활동 고르고 지킬 행동 정하기', minutes: 11, tool: 'mindmap',
              task: '장소 조건에 맞는 활동을 잇고, 원반 주고받기에서 환경을 해치지 않는 행동을 골라요. 활동 전과 뒤에 할 일도 나누어 모둠 약속으로 정해요.',
              teacher: '"원반은 왜 넓은 운동장에서 던질까요?" 사람과 나무가 적어야 원반이 걸리거나 사람이 맞지 않는다는 것을 짚는다. 나무에 걸린 원반을 가지를 흔들어 떨어뜨리는 것은 쓰레기와 상관없지만 나무를 다치게 한다는 것을 말한다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '장소 조건에 가장 알맞은 활동을 이어요.', toolOptions: { mode: 'match', topic: '어디서 무엇을', slots: [{ id: 'field', label: '사람이 적고 넓게 트인 운동장' }, { id: 'shade', label: '나무 그늘이 이어진 숲길' }, { id: 'yard', label: '건물·나무가 많아 숨을 곳이 많은 뒷마당' }], cards: ['원반 주고받기', '자연 관찰하며 걷기', '숨긴 지점 찾기(오리엔티어링)'] }, target: { match: { field: '원반 주고받기', shade: '자연 관찰하며 걷기', yard: '숨긴 지점 찾기(오리엔티어링)' } }, levels: { easy: { state: { at: { '원반 주고받기': 0 } } } }, difficulty: 0.15 },
                { prompt: '원반 주고받기를 할 때 환경을 해치지 않는 행동만 골라요.', toolOptions: { mode: 'pick', topic: '원반과 환경', cards: ['원반이 화단에 들어가면 꽃을 피해 가장자리로 들어가 줍기', '나무가 없는 빈 곳을 향해 던지기', '나무에 걸린 원반은 가지를 흔들어 떨어뜨리기', '잔디가 패도 같은 자리에서 미끄러지며 받기'] }, target: { pick: ['원반이 화단에 들어가면 꽃을 피해 가장자리로 들어가 줍기', '나무가 없는 빈 곳을 향해 던지기'] }, difficulty: 0.2,
                  conclude: '쓰레기를 버리지 않는 것뿐 아니라 나무·꽃·잔디를 다치지 않게 하는 것도 환경을 지키는 일이에요.' },
                { prompt: '모둠 약속을 활동 전에 할 일과 활동 뒤에 할 일로 나누어요.', toolOptions: { topic: '모둠 약속', slots: ['활동 전에', '활동 뒤에'], cards: ['활동 구역 둘러보기', '환경 지킴이 정하기', '쓴 장비 세어 돌려놓기', '처음과 달라진 곳 살피기'] }, target: { sort: { '활동 전에': ['활동 구역 둘러보기', '환경 지킴이 정하기'], '활동 뒤에': ['쓴 장비 세어 돌려놓기', '처음과 달라진 곳 살피기'] } }, levels: { easy: { state: { at: { '활동 구역 둘러보기': 0 } } }, challenge: { prompt: '모둠 약속을 활동 전과 뒤로 나누어요. 지키지 않아도 되는 카드는 어느 가지에도 넣지 않아요.', toolOptions: { cards: ['활동 구역 둘러보기', '환경 지킴이 정하기', '쓴 장비 세어 돌려놓기', '처음과 달라진 곳 살피기', '장비는 다음 반이 정리하게 두기'] } } }, difficulty: 0.15 },
              ],
            },
            {
              id: 'a2', title: '활동 2. 고른 활동 즐기고 스스로 점검하기', minutes: 15, tool: 'timer',
              task: '모둠이 고른 활동의 차례를 세우고, 장소에 나가 15분 동안 활동해요. 환경 지킴이는 돌아와서 본 것을 말해 주고, 모두 스스로 점검해요.',
              teacher: '"환경 지킴이는 혼내는 사람이 아니라 알려 주는 사람이에요. \'우리 길로 가자\'처럼 말해요." 원반 모둠은 운동장 가운데, 걷기 모둠은 숲길, 지점 찾기 모둠은 뒷마당으로 나눠 서로 겹치지 않게 한다. 교사는 원반 모둠 옆에 선다.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '모둠 활동 시간의 차례대로 카드를 놓아요.', toolOptions: { cards: ['장비 세어 정리하기', '고른 활동 하기', '준비 운동', '활동 구역 둘러보기', '정리 운동'] }, target: { order: ['활동 구역 둘러보기', '준비 운동', '고른 활동 하기', '장비 세어 정리하기', '정리 운동'] }, levels: { easy: { state: { order: ['활동 구역 둘러보기', '장비 세어 정리하기', '고른 활동 하기', '준비 운동', '정리 운동'] } } }, difficulty: 0.15,
                  hints: ['활동할 곳을 먼저 살피고 몸을 데운 뒤 활동해요. 힘껏 움직인 몸은 모든 일을 마친 뒤 천천히 풀어 줘요.', '장비 정리는 활동을 마친 바로 뒤, 정리 운동보다 먼저인지 살펴보세요.'] },
                { prompt: '모둠이 고른 장소에서 15분 동안 활동해요. 환경 지킴이와 함께 해 보았으면 표시해요.', free: true, toolOptions: { doneLabel: '모둠이 고른 활동을 해 보았어요' }, difficulty: 0.1 },
                { prompt: '활동을 마치고 해낸 것을 스스로 점검해 표시해요.', target: { selfCheck: ['모둠 모두가 활동에 참여했어요', '환경을 지키는 행동을 하나 이상 했어요', '쓴 장비를 세어 제자리에 두었어요'] }, difficulty: 0.1 },
              ],
            },
          ],
          {
            teacher: '"환경 지킴이가 본 것 가운데 좋았던 행동은 무엇인가요?" 지킴이마다 한 가지씩 말한다. 출구 2번에서 "가지를 흔든다"를 고른 학생에게는 나무도 다칠 수 있음을 다시 짚는다. 물을 마시고 어깨를 풀며 마친다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '어디서 무엇을', slots: [{ id: 'gym', label: '비 오는 날 넓은 강당' }, { id: 'garden', label: '꽃과 곤충이 많은 학교 텃밭 둘레' }], cards: ['매트 위 낮은 오르기', '작은 생물 관찰하며 걷기'] }, prompt: '새 장소 조건에 알맞은 활동을 이어요.', target: { match: { gym: '매트 위 낮은 오르기', garden: '작은 생물 관찰하며 걷기' } }, difficulty: 0.15 },
              { type: 'choice', prompt: '원반이 나무에 걸렸어요. 알맞은 행동은?', options: ['가지를 세게 흔든다', '선생님께 알리고 긴 막대로 살살 밀어 내린다', '돌을 던져 떨어뜨린다'], answer: 1, difficulty: 0.15, explain: '나무를 다치지 않게 하고, 위험한 방법은 쓰지 않아요.' },
              { type: 'short', prompt: '오늘 활동하며 내가 한 환경을 지키는 행동 하나를 쓰세요.' },
            ],
          },
        ),
        worksheet: {
          title: '고르고, 즐기고, 지키고',
          items: [
            { type: 'table', prompt: '장소마다 알맞은 활동과 그 까닭을 쓰세요.', columns: ['장소', '알맞은 활동', '까닭'], cells: [['넓게 트인 운동장', '', ''], ['나무 그늘 숲길', '', ''], ['숨을 곳이 많은 뒷마당', '', '']] },
            { type: 'choice', prompt: '원반 주고받기에서 환경을 지키는 행동에 ○ 하세요.', options: ['화단을 가로질러 원반을 줍는다', '나무가 없는 빈 곳으로 던진다', '잔디에서 미끄러지며 받는다'], answer: '나무가 없는 빈 곳으로 던진다' },
            { type: 'table', prompt: '모둠 약속을 쓰세요.', columns: ['활동 전에 할 일', '활동 뒤에 할 일'], rows: 2 },
            { type: 'short', prompt: '환경 지킴이가 친구에게 알려 줄 때 쓸 부드러운 말을 하나 지어 쓰세요.' },
          ],
          easy: {
            note: '원반은 사람과 나무가 없는 넓은 곳에서 던져요.',
            items: [
              { type: 'choice', prompt: '원반 주고받기에 알맞은 곳은?', options: ['넓게 트인 운동장', '나무가 빽빽한 숲길'], answer: '넓게 트인 운동장' },
              { type: 'choice', prompt: '활동 뒤에 할 일은?', options: ['장비를 세어 돌려놓기', '장비를 그 자리에 두기'], answer: '장비를 세어 돌려놓기' },
              { type: 'draw', prompt: '우리 모둠이 고른 활동을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드를 놓으면 바로 맞는지 보이고, 활동 차례 카드 첫 장이 미리 놓여 있어요.',
          base: '스스로 잇고 나눈 뒤 확인해요.',
          challenge: '"장비는 다음 반이 정리하게 두기" 같은 함정 카드를 가려내요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 쓰레기만 줍으면 환경을 지킨 것이라 여긴다 → 원반이 걸린 나무, 패인 잔디도 흔적임을 짚는다. ② 환경 지킴이가 친구를 다그친다 → "우리 ~하자" 꼴로 말하게 한다. ③ 장소와 맞지 않는 활동을 고집한다 → 사람·나무·땅 조건을 근거로 다시 고르게 한다. 세 장소를 동시에 쓰므로 교사는 원반 모둠을 가장 가까이서 살피고, 다른 모둠은 정해진 신호로 모이게 한다.',
      }),
      // ───────────────────────── 7 ─────────────────────────
      L(7, {
        title: '활동한 곳의 처음과 끝 견주어 살피기',
        objective: '활동한 곳의 처음과 끝을 견주어 달라진 곳과 그 까닭을 찾고, 한 사람의 행동이 쌓여 생긴 변화를 자료로 설명할 수 있다.',
        illustration: art('two paper photos side by side of the same school flower bed, before neat and after with a trampled shortcut path, with a magnifying glass', [
          { motif: 'flower', x: 90, y: 200 }, { motif: 'flower', x: 130, y: 210, s: 0.8 }, { motif: 'leaf', x: 340, y: 210 },
          { motif: 'tree', x: 420, y: 196 }, { motif: 'hills', y: 232 },
          { motif: 'text', x: 240, y: 120, text: '처음 → 끝', size: 26 },
        ]),
        safety: [PATH, BOUND, SPACE],
        stages: stages(
          {
            teacher: '지난 시간 활동 전과 뒤에 찍은 운동장·화단 사진 두 장을 나란히 보여 준다. "틀린 그림 찾기를 해 볼까요? 무엇이 달라졌나요?" 학생이 찾은 것을 칠판에 적고, "자연은 넓은데 우리 반 몇 명이 지나간 것이 정말 영향을 줄까요?"를 물어 둔다. 오늘은 달라진 곳의 까닭을 찾고, 쌓인 변화를 자료로 본다.',
            student: '두 사진에서 달라진 곳을 찾아 짝과 세어 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 달라진 곳과 까닭 찾기', minutes: 13, tool: 'mindmap',
              task: '활동 뒤에 달라진 곳마다 그렇게 만든 행동을 잇고, 사람이 만든 변화와 날씨가 만든 변화를 나누어요. 그다음 운동장에 나가 실제로 한 곳을 살펴 사진과 견주어요.',
              teacher: '"나뭇잎이 떨어진 것도 우리 탓일까요?" 바람·비가 만든 변화와 사람이 만든 변화를 갈라 보게 한다. 사람이 만든 변화는 우리가 바꿀 수 있다는 것을 짚는다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '활동 뒤에 달라진 곳마다 그렇게 만든 행동을 이어요.', toolOptions: { mode: 'match', topic: '왜 달라졌을까?', slots: [{ id: 'grass', label: '화단 가장자리 풀이 눌렸어요' }, { id: 'turf', label: '잔디 한 곳이 패였어요' }, { id: 'cap', label: '나무 밑에 병뚜껑이 있어요' }], cards: ['원반을 주우러 화단을 가로질렀어요', '같은 자리에서 미끄러지며 받았어요', '물병 뚜껑을 주머니에 넣지 않았어요'] }, target: { match: { grass: '원반을 주우러 화단을 가로질렀어요', turf: '같은 자리에서 미끄러지며 받았어요', cap: '물병 뚜껑을 주머니에 넣지 않았어요' } }, levels: { easy: { state: { at: { '원반을 주우러 화단을 가로질렀어요': 0 } } } }, difficulty: 0.2 },
                { prompt: '달라진 것을 사람이 만든 변화와 날씨가 만든 변화로 나누어요.', toolOptions: { topic: '누가 만든 변화?', slots: ['사람이 만든 변화', '날씨가 만든 변화'], cards: ['화단을 가로지른 맨땅 길', '나무 밑에 떨어진 병뚜껑', '비에 젖어 질척한 흙길', '바람에 떨어진 나뭇잎'] }, target: { sort: { '사람이 만든 변화': ['화단을 가로지른 맨땅 길', '나무 밑에 떨어진 병뚜껑'], '날씨가 만든 변화': ['비에 젖어 질척한 흙길', '바람에 떨어진 나뭇잎'] } }, levels: { easy: { state: { at: { '화단을 가로지른 맨땅 길': 0 } } }, challenge: { prompt: '달라진 것을 사람이 만든 변화와 날씨가 만든 변화로 나누어요. 처음과 같아 달라지지 않은 카드는 어느 가지에도 넣지 않아요.', toolOptions: { cards: ['화단을 가로지른 맨땅 길', '나무 밑에 떨어진 병뚜껑', '비에 젖어 질척한 흙길', '바람에 떨어진 나뭇잎', '처음 그대로 서 있는 느티나무'] } } }, difficulty: 0.2 },
                { prompt: '다음 활동에서 지켰는지 누구나 알 수 있는 약속만 골라요.', toolOptions: { mode: 'pick', topic: '알 수 있는 약속', cards: ['화단은 가장자리 길로 돌아가요', '마신 물병 뚜껑은 주머니에 넣어요', '원반은 잔디가 패지 않게 서서 받아요', '자연을 사랑해요'] }, target: { pick: ['화단은 가장자리 길로 돌아가요', '마신 물병 뚜껑은 주머니에 넣어요', '원반은 잔디가 패지 않게 서서 받아요'] }, difficulty: 0.25,
                  hints: ['약속을 지켰는지 눈으로 보고 "했다, 안 했다"를 말할 수 있는지 하나씩 따져요.', '마음가짐만 말하고 무엇을 하라는지 행동이 없는 카드가 있는지 살펴보세요.'],
                  conclude: '좋은 약속은 무엇을 할지 행동으로 적어, 지켰는지 누구나 알 수 있어요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 쌓인 변화를 그래프로 읽기', minutes: 13, tool: 'chart',
              task: '한 학교 화단 둘레에 생긴 맨땅 길의 길이를 주마다 잰 꺾은선그래프를 읽고 물음에 답해요. 그다음 우리 학교 화단 가장자리 맨땅 길이를 줄자로 재어 활동지에 적어요.',
              teacher: '"한 사람이 한 번 가로질렀을 때는 거의 티가 나지 않아요. 그런데 여러 사람이 날마다 지나가면요?" 그래프가 점점 가파르게 오르는 것을 짚는다. 줄자로 잴 때는 화단 안에 들어가지 않고 가장자리에서 잰다.',
              options: { type: 'line', mode: 'read', title: '화단 둘레 맨땅 길의 길이', unit: 'm', xLabel: '주', yLabel: '길이(m)', data: [['1주', 0], ['2주', 1], ['3주', 3], ['4주', 6]] },
              levels: { easy: { showValues: true }, base: {}, challenge: { revealAfterCheck: true } },
              items: [
                { prompt: '그래프에서 맨땅 길이 가장 길었던 주를 골라요.', toolOptions: { question: '맨땅 길이 가장 긴 주는?', choices: ['1주', '2주', '3주', '4주'] }, target: { pick: 3 }, difficulty: 0.1 },
                { prompt: '4주 동안 맨땅 길은 처음보다 몇 m 길어졌나요? 수를 넣어요.', target: { value: 6 }, difficulty: 0.2 },
                { prompt: '이대로 모두가 화단을 가로지르면 5주에는 어떻게 될지 골라요.', toolOptions: { question: '5주에는 어떻게 될까요?', choices: ['줄어든다', '더 길어진다', '1주와 같아진다'], why: ['지나가는 사람이 그대로이면 맨땅이 저절로 줄지 않아요.', null, '밟힌 풀은 쉽게 다시 서지 않아요.'] }, target: { pick: 1 }, difficulty: 0.2,
                  predict: { q: '한 사람이 한 번 지나간 것은 영향이 있을까요?', options: ['쌓이면 있어요', '전혀 없어요'], answer: 0 },
                  conclude: '한 사람의 한 번은 작아 보여도 여러 사람의 행동이 쌓이면 맨땅 길처럼 큰 변화가 돼요.' },
              ],
            },
          ],
          {
            teacher: '"자연은 넓으니 몇 사람쯤은 괜찮다는 말을 그래프로 어떻게 반박할 수 있을까요?" 한두 학생이 그래프를 짚어 말한다. 출구 1번에서 날씨 변화를 사람 칸에 둔 학생에게는 "우리가 바꿀 수 있나요?"를 묻는다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { topic: '누가 만든 변화?', slots: ['사람이 만든 변화', '날씨가 만든 변화'], cards: ['벤치 둘레에 버려진 사탕 껍질', '밤사이 내린 서리', '나뭇가지에 묶어 둔 줄', '햇볕에 마른 웅덩이'] }, prompt: '새 변화 카드를 사람이 만든 것과 날씨가 만든 것으로 나누어요.', target: { sort: { '사람이 만든 변화': ['벤치 둘레에 버려진 사탕 껍질', '나뭇가지에 묶어 둔 줄'], '날씨가 만든 변화': ['밤사이 내린 서리', '햇볕에 마른 웅덩이'] } }, difficulty: 0.15 },
              { type: 'choice', prompt: '맨땅 길이 1주 2m, 2주 4m, 3주 6m로 늘었어요. 이 자료로 알 수 있는 것은?', options: ['사람이 지나간 영향이 쌓인다', '한 사람은 영향을 주지 않는다', '맨땅은 저절로 줄어든다'], answer: 0, difficulty: 0.2, explain: '주마다 늘어난 것은 지나간 발걸음이 쌓인 결과예요.' },
              { type: 'mood', prompt: '처음과 끝을 견주어 본 오늘 마음은 어땠나요?' },
            ],
          },
        ),
        worksheet: {
          title: '처음과 끝 견주기',
          items: [
            { type: 'table', prompt: '활동한 곳에서 달라진 것과 그 까닭을 쓰세요.', columns: ['달라진 곳', '까닭이 된 행동', '사람 / 날씨'], rows: 3 },
            { type: 'figure', prompt: '그래프를 보고 물음에 답하세요.', tool: 'chart', options: { type: 'line', mode: 'read', title: '화단 둘레 맨땅 길의 길이', unit: 'm', data: [['1주', 0], ['2주', 1], ['3주', 3], ['4주', 6]] }, figures: [{ state: {}, caption: '3주와 4주 사이에 ___m 늘었어요.' }], answer: '3' },
            { type: 'blank', prompt: '우리 학교 화단 가장자리 맨땅 길이를 재어 쓰세요.', text: '맨땅 길이: ___m ___cm', answer: '잰 값' },
            { type: 'short', prompt: '"자연은 넓으니 한두 사람의 행동은 상관없다"는 말에 대한 내 생각을 근거를 들어 쓰세요.' },
          ],
          easy: {
            note: '우리가 바꿀 수 있는 변화가 "사람이 만든 변화"예요.',
            items: [
              { type: 'choice', prompt: '"바람에 떨어진 나뭇잎"은 무엇이 만든 변화인가요?', options: ['사람', '날씨'], answer: '날씨' },
              { type: 'choice', prompt: '그래프에서 맨땅 길은 주가 지날수록?', options: ['길어졌어요', '짧아졌어요'], answer: '길어졌어요' },
              { type: 'draw', prompt: '활동한 곳의 처음 모습과 끝 모습을 나란히 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드를 놓으면 바로 맞는지 보이고, 그래프 점 위에 값이 보여요.',
          base: '그래프 눈금을 스스로 읽어요.',
          challenge: '달라지지 않은 함정 카드를 가려내고, 그래프 값은 맞힌 뒤에만 보여요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 자연은 넓어 한두 사람은 상관없다고 여긴다 → 맨땅 길 그래프로 쌓인 변화를 본다. ② 날씨가 만든 변화까지 우리 탓으로 여겨 위축된다 → 바꿀 수 있는 것과 없는 것을 가른다. ③ "자연을 사랑해요" 같은 막연한 약속을 고른다 → 지켰는지 눈으로 알 수 있는 행동으로 바꿔 쓰게 한다. 줄자로 잴 때는 화단 밖에서만 재게 하고 교사가 곁에서 본다.',
      }),
      // ───────────────────────── 8 ─────────────────────────
      L(8, {
        title: '모둠 약속 정하고 텃밭 둘레 걷기에서 지키기',
        objective: '지난 활동의 흔적을 바탕으로 모둠이 지킬 약속을 의논해 정하고, 텃밭 둘레 걷기에서 약속을 지키며 친구에게 부드럽게 알릴 수 있다.',
        illustration: art('a small group of children sitting in a circle on the grass writing three promises on a paper board, next to a school vegetable garden path', [
          { motif: 'flower', x: 80, y: 214 }, { motif: 'leaf', x: 130, y: 200 }, { motif: 'tree', x: 420, y: 196 },
          { motif: 'sun', x: 400, y: 54, s: 0.7 }, { motif: 'hills', y: 230 },
          { motif: 'text', x: 240, y: 126, text: '우리 모둠 약속 세 가지', size: 24 },
        ]),
        safety: [PATH, BOUND, WATER],
        stages: stages(
          {
            teacher: '지난 시간 그래프를 다시 띄운다. "맨땅 길을 더 늘리지 않으려면 누가 약속을 지켜야 할까요?" 대답을 받아 "모두가 정하고 모두가 지키는 약속이어야 해요"라고 말한다. 오늘은 모둠이 약속 세 가지를 정하고, 학교 텃밭 둘레를 걸으며 지켜 본다. 약속을 어기려는 친구를 봤을 때 어떻게 말할지도 연습한다.',
            student: '지난 활동에서 생긴 흔적 가운데 다시는 만들고 싶지 않은 것 하나를 골라 말해 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 약속이 흔들리는 순간 판단하기', minutes: 12, tool: 'emotion',
              task: '걷기 중에 생길 수 있는 상황을 읽고 어떻게 할지 골라요. 고른 말과 행동을 짝과 실제로 주고받아 봐요.',
              teacher: '"한 명쯤은 괜찮지 않을까요?" 친구의 이 말에 바로 "안 돼!"라고 외치는 것보다 까닭을 짧게 말하는 것이 더 잘 통한다는 것을 짚는다. 고른 뒤에는 짝과 한 번씩 역할을 바꿔 말해 본다.',
              levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
              items: [
                { prompt: '모둠 친구가 "한 명쯤은 괜찮아" 하며 텃밭 이랑을 가로질러 가자고 해요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '모둠 친구가 "한 명쯤은 괜찮아" 하며 텃밭 이랑을 가로질러 가자고 해요.', motif: 'leaf', choices: [{ id: 'follow', text: '나도 따라 가로질러요', result: '이랑의 새싹이 밟혔어요.', mood: '걱정', why: '한 명씩 지나간 것이 쌓여 맨땅이 돼요.' }, { id: 'tell', text: '"맨땅 길 생각나지? 길로 가자"라고 말해요', result: '모두 길로 돌아갔어요.', mood: '뿌듯함' }, { id: 'quiet', text: '못 본 척 혼자 길로 가요', result: '친구는 이랑을 밟고 지나갔어요.', mood: '속상함', why: '약속은 함께 지키도록 알려 주는 것까지예요.' }] }, target: { choice: 'tell' }, levels: { easy: { toolOptions: { choices: [{ id: 'follow', text: '나도 따라 가로질러요', result: '이랑의 새싹이 밟혔어요.', mood: '걱정', why: '한 명씩 지나간 것이 쌓여 맨땅이 돼요.' }, { id: 'tell', text: '"맨땅 길 생각나지? 길로 가자"라고 말해요', result: '모두 길로 돌아갔어요.', mood: '뿌듯함' }] } } }, difficulty: 0.15 },
                { prompt: '걷다가 텃밭에 떨어진 남의 장갑 한 짝을 보았어요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '걷다가 텃밭 고랑에 떨어진 남의 장갑 한 짝을 보았어요.', motif: 'flower', choices: [{ id: 'pick', text: '고랑에 들어가지 않고 손을 뻗어 주워 선생님께 드려요', result: '텃밭도 지키고 주인도 찾았어요.', mood: '뿌듯함' }, { id: 'kick', text: '발로 차서 길 밖으로 밀어내요', result: '새싹 위로 흙이 튀었어요.', mood: '걱정', why: '발로 차면 흙과 새싹이 함께 다쳐요.' }, { id: 'leave', text: '내 것이 아니니 그냥 지나가요', result: '장갑이 며칠 동안 텃밭에 남았어요.', mood: '속상함', why: '자연에 남은 물건은 누구의 것이든 흔적이 돼요.' }] }, target: { choice: 'pick' }, difficulty: 0.2 },
                { prompt: '모둠이 정한 약속을 한 친구가 잊고 어겼어요. 어떻게 말할까요?', toolOptions: { mode: 'branch', situation: '물병 뚜껑을 주머니에 넣기로 했는데, 한 친구가 뚜껑을 바닥에 두고 걸어가요.', choices: [{ id: 'shout', text: '"약속 어겼어!"라고 크게 외쳐요', result: '친구가 부끄러워 화를 냈어요.', mood: '화남', why: '크게 꾸짖으면 친구가 약속보다 부끄러움을 먼저 느껴요.' }, { id: 'remind', text: '뚜껑을 가리키며 "주머니 약속!" 하고 웃으며 알려요', result: '친구가 뚜껑을 주워 넣었어요.', mood: '편안함' }, { id: 'take', text: '말없이 내가 주워 버려요', result: '친구는 다음에도 잊었어요.', mood: '걱정', why: '말해 주지 않으면 친구가 약속을 기억할 기회가 없어요.' }] }, target: { choice: 'remind' }, difficulty: 0.25,
                  conclude: '약속은 함께 지키도록 서로 부드럽게 알려 줄 때 오래가요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 모둠 약속 정하고 걸으며 지키기', minutes: 14, tool: 'timer',
              task: '약속을 정하는 회의 차례를 세우고, 정한 약속 세 가지를 활동지에 적어요. 텃밭 둘레를 10분 걸은 뒤 스스로 점검해요.',
              teacher: '"약속은 많을수록 좋을까요?" 세 가지로 줄이고, 지켰는지 눈으로 알 수 있게 적게 한다. 걷는 동안 교사는 약속을 지킨 장면을 찾아 돌아와서 말해 준다.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '모둠 약속을 정하는 회의 차례대로 카드를 놓아요.', toolOptions: { cards: ['약속 세 가지를 골라 적기', '지난 활동의 흔적 떠올리기', '지킬 수 있는지 함께 따져 보기', '약속 후보를 한 사람씩 말하기'] }, target: { order: ['지난 활동의 흔적 떠올리기', '약속 후보를 한 사람씩 말하기', '지킬 수 있는지 함께 따져 보기', '약속 세 가지를 골라 적기'] }, levels: { easy: { state: { order: ['지난 활동의 흔적 떠올리기', '약속 세 가지를 골라 적기', '지킬 수 있는지 함께 따져 보기', '약속 후보를 한 사람씩 말하기'] } } }, difficulty: 0.15,
                  hints: ['무엇이 문제였는지 먼저 떠올려야 약속을 낼 수 있어요. 고르기는 여러 후보가 모인 다음이에요.', '후보를 말하기 전에 따져 볼 수 있는지, 따져 보기 전에 골라 적을 수 있는지 차례를 살펴보세요.'] },
                { prompt: '정한 약속 세 가지를 지키며 모둠과 텃밭 둘레를 10분 걸어요. 다 걸었으면 표시해요.', free: true, toolOptions: { doneLabel: '약속을 지키며 텃밭 둘레를 걸었어요' }, difficulty: 0.1 },
                { prompt: '걷기를 마치고 해낸 것을 스스로 점검해 표시해요.', target: { selfCheck: ['모둠 약속 세 가지를 지켰어요', '약속을 잊은 친구에게 부드럽게 알려 주었어요', '걸은 곳을 처음 그대로 두고 왔어요'] }, difficulty: 0.1 },
              ],
            },
          ],
          {
            teacher: '"오늘 약속 가운데 지키기 가장 어려웠던 것은 무엇인가요? 다음에는 어떻게 바꾸면 좋을까요?" 모둠마다 하나씩 말한다. 출구 2번을 틀린 학생에게는 "한 명씩이 모이면 반 전체"라는 것을 그래프로 다시 짚는다.',
            exitTicket: [
              { type: 'tool', tool: 'emotion', options: { mode: 'branch', situation: '공원 산책로에서 친구가 "아무도 안 보니까" 하며 꽃을 한 송이 꺾으려 해요.', motif: 'flower', choices: [{ id: 'ok', text: '"한 송이쯤 괜찮아" 하고 같이 꺾어요', result: '꽃밭에 빈자리가 생겼어요.', mood: '걱정', why: '보는 사람이 없어도 꽃은 다쳐요.' }, { id: 'photo', text: '"사진으로 찍어 가자"라고 말해요', result: '꽃은 그대로 남고 사진도 생겼어요.', mood: '기쁨' }] }, prompt: '공원 산책로에서 친구가 꽃을 꺾으려 해요. 어떻게 할지 골라요.', target: { choice: 'photo' }, difficulty: 0.15 },
              { type: 'choice', prompt: '모둠 약속으로 가장 알맞은 것은?', options: ['자연을 아껴요', '텃밭에서는 길로만 다녀요', '되도록 조심해요'], answer: 1, difficulty: 0.2, explain: '지켰는지 눈으로 알 수 있게 행동으로 적어요.' },
              { type: 'short', prompt: '다음 활동에서 우리 모둠 약속 가운데 하나를 고쳐 쓴다면 어떻게 고칠지 쓰세요.' },
            ],
          },
        ),
        worksheet: {
          title: '우리 모둠 약속',
          items: [
            { type: 'table', prompt: '우리 모둠 약속 세 가지와 지킨 사람 수를 쓰세요.', columns: ['약속', '왜 필요한가요?', '지킨 사람 수'], rows: 3 },
            { type: 'choice', prompt: '친구가 약속을 잊었을 때 알맞은 말에 ○ 하세요.', options: ['"약속 어겼어!"', '"주머니 약속 기억나지?"', '아무 말도 하지 않는다'], answer: '"주머니 약속 기억나지?"' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '좋은 약속은 지켰는지 ___으로 알 수 있게 행동으로 적어요.', answer: '눈' },
            { type: 'check', prompt: '오늘 걷기에서 한 것에 ✓ 하세요.', options: ['길로만 걸었어요', '아무것도 가져오지 않았어요', '친구에게 약속을 알려 주었어요'] },
            { type: 'short', prompt: '"한 명쯤은 괜찮아"라는 친구에게 해 줄 말을 쓰세요.' },
          ],
          easy: {
            note: '약속은 "~해요"처럼 할 행동으로 적어요.',
            items: [
              { type: 'choice', prompt: '지켰는지 알 수 있는 약속은?', options: ['길로만 다녀요', '자연을 생각해요'], answer: '길로만 다녀요' },
              { type: 'short', prompt: '우리 모둠 약속 하나를 쓰세요.' },
              { type: 'draw', prompt: '약속을 지키며 걷는 모습을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '상황마다 보기가 두 개로 줄어 있어요.',
          base: '세 보기의 결과를 견주어 골라요.',
          challenge: '고른 보기의 결과가 맞힌 뒤에만 보여 결과를 미리 보지 않고 판단해요.',
        },
        teacherNotes: '자주 보이는 어려움: ① "한 명쯤은 괜찮다"는 말에 쉽게 따라간다 → 맨땅 길 그래프로 쌓임을 떠올리게 한다. ② 약속을 어긴 친구를 크게 꾸짖는다 → 행동을 가리키며 짧게, 웃으며 알리는 말을 연습한다. ③ 약속을 너무 많이·막연하게 적는다 → 세 가지, 행동으로 줄인다. 텃밭에는 고랑 사이로 들어가지 않게 교사가 미리 걷는 길을 표시해 둔다.',
      }),
      // ───────────────────────── 9 ─────────────────────────
      L(9, {
        title: '오르기와 원반 던지기에 필요한 장비 짝 짓기',
        objective: '오르기와 원반 던지기에 필요한 장비를 그 쓰임과 짝지어 말하고, 장비를 갖춘 뒤에도 지켜야 할 행동을 고를 수 있다.',
        illustration: art('a low climbing wall with thick blue mats below and a pile of soft flying discs with orange cones beside it in a school gym', [
          { motif: 'mountain', x: 110, y: 176, s: 0.9 }, { motif: 'star', x: 330, y: 120, s: 0.8 }, { motif: 'house', x: 420, y: 206 },
          { motif: 'sun', x: 410, y: 52, s: 0.6 }, { motif: 'hills', y: 232 },
          { motif: 'text', x: 240, y: 92, text: '장비와 쓰임', size: 26 },
        ]),
        safety: [CLIMB, DISC, TOOL],
        stages: stages(
          {
            teacher: '강당에 매트·연습용 원반·표시 콘을 펼쳐 놓고 묻는다. "오늘 쓸 장비들이에요. 매트는 무엇을 막아 줄까요? 원반은 왜 부드러운 것을 쓸까요?" 대답을 듣고 "그럼 매트만 깔면 아무리 높이 올라가도 될까요?"를 물어 둔다. 장비는 위험을 줄여 줄 뿐 없애 주지는 않는다는 것을 오늘 확인한다고 말한다.',
            student: '장비 하나를 골라, 그것이 없다면 어떤 일이 생길지 짝에게 말해 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 장비를 활동과 쓰임에 짝 짓기', minutes: 13, tool: 'mindmap',
              task: '장비 카드를 오르기와 원반 던지기로 나누고, 장비마다 쓰임을 이어요. 장비를 갖춘 뒤에도 지킬 것을 골라요.',
              teacher: '"보조 친구도 장비일까요? 몸으로 막아 주는 장비예요." 매트를 깔았으니 높이 올라가도 된다고 말하는 학생에게 "매트는 충격을 줄일 뿐, 떨어지지 않게 해 주지는 않아요"라고 짚는다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '장비 카드를 오르기 활동과 원반 던지기 활동으로 나누어요.', toolOptions: { topic: '어느 활동 장비?', slots: ['오르기 활동', '원반 던지기'], cards: ['두꺼운 매트', '미끄럼 막는 실내화', '곁을 지키는 보조 친구', '부드러운 연습용 원반', '던질 구역 표시 콘', '목표로 쓸 훌라후프'] }, target: { sort: { '오르기 활동': ['두꺼운 매트', '미끄럼 막는 실내화', '곁을 지키는 보조 친구'], '원반 던지기': ['부드러운 연습용 원반', '던질 구역 표시 콘', '목표로 쓸 훌라후프'] } }, levels: { easy: { state: { at: { '두꺼운 매트': 0 } } }, challenge: { prompt: '장비 카드를 오르기와 원반 던지기로 나누어요. 두 활동 모두에 쓰지 않는 카드는 어느 가지에도 넣지 않아요.', toolOptions: { cards: ['두꺼운 매트', '미끄럼 막는 실내화', '곁을 지키는 보조 친구', '부드러운 연습용 원반', '던질 구역 표시 콘', '목표로 쓸 훌라후프', '수영 물안경'] } } }, difficulty: 0.15 },
                { prompt: '장비마다 하는 일을 이어요.', toolOptions: { mode: 'match', topic: '장비의 쓰임', slots: [{ id: 'mat', label: '두꺼운 매트' }, { id: 'soft', label: '부드러운 연습용 원반' }, { id: 'cone', label: '던질 구역 표시 콘' }], cards: ['떨어질 때 바닥 충격을 줄여요', '사람이 맞아도 덜 아파요', '던지는 쪽에 사람이 들어오지 않게 해요'] }, target: { match: { mat: '떨어질 때 바닥 충격을 줄여요', soft: '사람이 맞아도 덜 아파요', cone: '던지는 쪽에 사람이 들어오지 않게 해요' } }, levels: { easy: { state: { at: { '떨어질 때 바닥 충격을 줄여요': 0 } } } }, difficulty: 0.15 },
                { prompt: '매트를 깔고 보조 친구가 있어도 여전히 지킬 것만 골라요.', toolOptions: { mode: 'pick', topic: '장비가 있어도', cards: ['발이 무릎 높이를 넘지 않게 올라요', '내려올 때 뛰어내리지 않아요', '손에 땀이 나면 내려와 닦아요', '매트가 있으니 꼭대기까지 올라가요'] }, target: { pick: ['발이 무릎 높이를 넘지 않게 올라요', '내려올 때 뛰어내리지 않아요', '손에 땀이 나면 내려와 닦아요'] }, difficulty: 0.2,
                  predict: { q: '매트를 깔면 위험이 모두 사라질까요?', options: ['줄어들 뿐이에요', '모두 사라져요'], answer: 0 },
                  conclude: '장비는 위험을 줄여 줄 뿐이에요. 장비를 갖춘 뒤에도 안전한 행동을 지켜야 해요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 장비 점검하고 균형 잡아 보기', minutes: 13, tool: 'timer',
              task: '오르기 장비를 직접 점검하고, 원반 던지기 장비를 놓는 차례를 세워요. 그다음 매트 위에서 한 발로 서서 균형을 잡아 버틴 시간을 재어 적어요.',
              teacher: '"오르기도 원반도 한쪽 발에 몸무게를 싣는 순간이 있어요. 균형이 무너지면 어떻게 될까요?" 한 발 서기는 매트 위에서 두 팔을 벌리고 하게 한다. 원반 장비 차례에서 "던져요!" 외치기를 빼먹는 학생에게 던지기 전 마지막 확인이라고 짚는다.',
              levels: { easy: {}, base: {}, challenge: { stopwatch: true } },
              items: [
                { prompt: '오르기 벽 앞에서 장비를 직접 살펴보고 확인한 것을 눌러 표시해요.', toolOptions: { safety: ['매트가 벽 아래에 빈틈없이 깔렸어요', '손잡이가 흔들리지 않아요', '주머니에 딱딱한 물건이 없어요'] }, target: { safety: true }, difficulty: 0.1 },
                { prompt: '원반 던지기를 시작하기까지 할 일을 차례대로 놓아요.', toolOptions: { cards: ['"던져요!" 하고 외치기', '구역 표시 콘 놓기', '원반 던지기', '던지는 쪽에 사람이 없는지 보기'] }, target: { order: ['구역 표시 콘 놓기', '던지는 쪽에 사람이 없는지 보기', '"던져요!" 하고 외치기', '원반 던지기'] }, levels: { easy: { state: { order: ['구역 표시 콘 놓기', '"던져요!" 하고 외치기', '원반 던지기', '던지는 쪽에 사람이 없는지 보기'] } } }, difficulty: 0.2,
                  hints: ['던질 곳을 먼저 정하고, 던지기 바로 앞에는 둘레 사람에게 알리는 일이 있어요.', '사람이 있는지 보는 일과 크게 외치는 일 가운데 어느 것이 먼저여야 할지 생각해 보세요.'] },
                { prompt: '매트 위에서 두 팔을 벌리고 한 발로 서서 버틴 시간을 발마다 재어 적어요.', toolOptions: { fields: [{ label: '오른발로 서기', unit: '초', max: 120 }, { label: '왼발로 서기', unit: '초', max: 120 }] }, target: { records: true }, difficulty: 0.15 },
              ],
            },
          ],
          {
            teacher: '"오른발과 왼발 기록이 달랐나요? 오르기와 원반에서 한 발로 버티는 순간은 언제일까요?" 두세 학생에게 듣는다. 출구 2번을 틀린 학생에게는 매트가 하는 일과 매트가 못 하는 일을 다시 나누게 한다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '장비의 쓰임', slots: [{ id: 'shoe', label: '미끄럼 막는 실내화' }, { id: 'spot', label: '곁을 지키는 보조 친구' }], cards: ['발이 손잡이에서 미끄러지지 않게 해요', '균형을 잃으면 등을 받쳐 매트로 이끌어요'] }, prompt: '새 장비 두 가지와 하는 일을 이어요.', target: { match: { shoe: '발이 손잡이에서 미끄러지지 않게 해요', spot: '균형을 잃으면 등을 받쳐 매트로 이끌어요' } }, difficulty: 0.15 },
              { type: 'choice', prompt: '매트를 깐 오르기 벽에서 알맞은 생각은?', options: ['매트가 있으니 높이 올라가도 된다', '매트는 충격을 줄일 뿐이니 낮은 높이를 지킨다', '매트가 있으면 보조 친구는 필요 없다'], answer: 1, difficulty: 0.2, explain: '장비는 위험을 줄이지만 없애지는 못해요.' },
              { type: 'mood', prompt: '장비를 직접 점검해 본 오늘 마음은 어땠나요?' },
            ],
          },
        ),
        worksheet: {
          title: '장비와 쓰임',
          items: [
            { type: 'table', prompt: '활동마다 필요한 장비와 그 쓰임을 쓰세요.', columns: ['활동', '장비', '쓰임'], cells: [['오르기', '', ''], ['오르기', '', ''], ['원반 던지기', '', ''], ['원반 던지기', '', '']] },
            { type: 'table', prompt: '한 발 서기 기록을 쓰세요.', columns: ['', '오른발', '왼발'], cells: [['버틴 시간(초)', '', '']] },
            { type: 'choice', prompt: '원반을 던지기 바로 전에 할 일에 ○ 하세요.', options: ['눈을 감는다', '"던져요!" 하고 외친다', '콘을 치운다'], answer: '"던져요!" 하고 외친다' },
            { type: 'short', prompt: '"장비를 갖추면 위험은 모두 사라진다"는 말을 바르게 고쳐 쓰세요.' },
          ],
          easy: {
            note: '장비는 위험을 줄여 줘요. 그래도 안전한 행동은 내가 해요.',
            items: [
              { type: 'choice', prompt: '두꺼운 매트가 하는 일은?', options: ['떨어질 때 충격을 줄여요', '원반을 멀리 보내요'], answer: '떨어질 때 충격을 줄여요' },
              { type: 'choice', prompt: '매트가 있을 때 오르는 높이는?', options: ['발이 무릎 높이까지', '꼭대기까지'], answer: '발이 무릎 높이까지' },
              { type: 'draw', prompt: '오르기 벽 아래 매트가 깔린 모습을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드를 놓으면 바로 맞는지 보이고, 차례 카드 첫 장이 미리 놓여 있어요.',
          base: '스스로 나누고 차례를 세운 뒤 확인해요.',
          challenge: '두 활동에 쓰지 않는 함정 카드를 가려내고, 기록판의 시간 재기로 한 발 서기를 직접 재요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 장비를 갖추면 위험이 사라진다고 여긴다 → 매트가 하는 일과 못 하는 일을 나누게 한다. ② 보조 친구를 장비로 여기지 않는다 → 사람도 안전을 지키는 장비임을 말한다. ③ 원반을 외치지 않고 던진다 → 차례 카드로 외치기를 던지기 바로 앞에 둔다. 한 발 서기는 매트 위에서만 하고, 교사가 오르기 벽 앞을 지킨다.',
      }),
      // ───────────────────────── 10 ─────────────────────────
      L(10, {
        title: '던지고 오를 때 힘을 조절하는 몸의 곳 찾기',
        objective: '원반 던지기와 오르기에서 힘을 내고 조절하는 몸의 관절을 찾고, 상황에 따라 힘의 세기와 방향을 조절해야 하는 까닭을 설명할 수 있다.',
        illustration: art('a paper figure of a child throwing a flying disc with glowing circles on the shoulder, elbow, wrist and waist, beside a child pushing up a low climbing wall with bent knees', [
          { motif: 'star', x: 150, y: 110, s: 0.7 }, { motif: 'star', x: 190, y: 140, s: 0.6 }, { motif: 'mountain', x: 380, y: 180, s: 0.8 },
          { motif: 'cloud', x: 240, y: 48 }, { motif: 'hills', y: 232 },
          { motif: 'text', x: 240, y: 210, text: '어디서 힘이 나올까?', size: 22 },
        ]),
        safety: [SPACE, DISC, CLIMB],
        stages: stages(
          {
            teacher: '교사가 원반을 팔만 써서 한 번, 몸통을 비틀었다 풀며 한 번 던져 보인다. "어느 쪽이 더 멀리 갔나요? 두 번 던질 때 몸에서 무엇이 달랐나요?" 대답을 받아 칠판에 어깨·팔꿈치·손목·허리를 적는다. "그럼 언제나 힘껏 던지면 될까요?"를 물어 두고, 오늘은 힘을 내는 곳과 힘을 조절하는 까닭을 찾는다고 알린다.',
            student: '선생님의 두 번 던지기를 보고, 몸의 어느 곳이 다르게 움직였는지 찾아 말해 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 힘을 내는 관절 짚기', minutes: 12, tool: 'body',
              task: '설명을 읽고 그 움직임에 쓰는 몸의 곳을 그림에서 골라요. 고른 곳을 내 몸에서 손으로 짚고, 그 관절을 천천히 돌려 풀어요.',
              teacher: '"던지는 팔의 관절은 몇 개일까요? 어깨에서 손끝까지 손으로 짚어 내려가 보세요." 허리를 고르지 않는 학생에게 몸통을 비틀었다 풀 때 어디가 돌아가는지 직접 해 보게 한다. 고른 곳은 반드시 내 몸에서도 짚게 한다.',
              options: { mode: 'parts', parts: ['어깨', '팔꿈치', '손목', '허리', '무릎', '발목'] },
              levels: { easy: { names: true }, base: {}, challenge: { parts: ['목', '어깨', '팔꿈치', '손목', '허리', '허벅지', '무릎', '발목'] } },
              items: [
                { prompt: '원반을 던지기 전 준비 운동으로 꼭 풀어 줄, 던지는 팔의 관절 세 곳을 골라요.', target: { parts: ['어깨', '팔꿈치', '손목'] }, difficulty: 0.15 },
                { prompt: '백핸드로 던질 때 몸통을 비틀었다 풀어 힘을 보태요. 몸통을 비트는 곳 하나를 골라요.', target: { parts: ['허리'] }, difficulty: 0.15 },
                { prompt: '오르기에서 다리로 몸을 밀어 올릴 때 굽혔다 펴는, 다리의 관절 두 곳을 골라요.', target: { parts: ['무릎', '발목'] }, difficulty: 0.2,
                  predict: { q: '오르기에서 몸을 올리는 큰 힘은 어디서 나올까요?', options: ['팔', '다리'], answer: 1 },
                  conclude: '오르기는 팔로 매달리기보다 다리를 펴며 몸을 밀어 올려야 힘이 덜 들어요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 상황에 맞게 힘 조절하기', minutes: 14, tool: 'mindmap',
              task: '상황마다 알맞은 힘 조절을 잇고, 두 활동에서 조절할 것을 나누어요. 그다음 짝과 3걸음·10걸음 거리에서 원반을 세 번씩 주고받으며 힘을 바꿔 봐요.',
              teacher: '"3걸음 앞 짝에게 있는 힘껏 던지면 어떻게 될까요?" 거리에 맞게 힘을 줄이는 것도 기술이라는 것을 짚는다. 주고받기에서는 받는 짝이 "좋아요/세요/약해요"로 알려 주게 한다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '원반을 던지는 상황마다 알맞은 힘 조절을 이어요.', toolOptions: { mode: 'match', topic: '이럴 땐 이렇게', slots: [{ id: 'near', label: '짝이 3걸음 앞에 있어요' }, { id: 'far', label: '목표가 20걸음 멀리 있어요' }, { id: 'wind', label: '바람이 앞에서 세게 불어요' }], cards: ['손목만 살짝 튕겨 부드럽게', '몸통을 비틀어 힘을 보태 길게', '원반을 낮고 평평하게 눕혀 던지기'] }, target: { match: { near: '손목만 살짝 튕겨 부드럽게', far: '몸통을 비틀어 힘을 보태 길게', wind: '원반을 낮고 평평하게 눕혀 던지기' } }, levels: { easy: { state: { at: { '손목만 살짝 튕겨 부드럽게': 0 } } } }, difficulty: 0.2 },
                { prompt: '조절할 것을 오르기와 원반 던지기로 나누어요.', toolOptions: { topic: '무엇을 조절할까?', slots: ['오르기', '원반 던지기'], cards: ['손발 셋은 벽에 붙이고 하나만 옮기기', '몸을 벽 가까이 붙이기', '원반을 놓는 순간의 손목 힘', '원반을 수평으로 들기'] }, target: { sort: { '오르기': ['손발 셋은 벽에 붙이고 하나만 옮기기', '몸을 벽 가까이 붙이기'], '원반 던지기': ['원반을 놓는 순간의 손목 힘', '원반을 수평으로 들기'] } }, levels: { easy: { state: { at: { '손발 셋은 벽에 붙이고 하나만 옮기기': 0 } } }, challenge: { prompt: '조절할 것을 오르기와 원반 던지기로 나누어요. 두 활동 모두에 맞지 않는 카드는 어느 가지에도 넣지 않아요.', toolOptions: { cards: ['손발 셋은 벽에 붙이고 하나만 옮기기', '몸을 벽 가까이 붙이기', '원반을 놓는 순간의 손목 힘', '원반을 수평으로 들기', '물속에서 숨 참기'] } } }, difficulty: 0.2 },
                { prompt: '힘을 조절해야 하는 까닭으로 알맞은 카드만 골라요.', toolOptions: { mode: 'pick', topic: '왜 조절할까?', cards: ['힘이 너무 세면 원반이 흔들리며 빗나가요', '오르기에서 한 번에 힘을 다 쓰면 팔이 금방 지쳐요', '가까운 짝에게 세게 던지면 받기 어렵고 위험해요', '힘은 언제나 최대로 써야 좋아요'] }, target: { pick: ['힘이 너무 세면 원반이 흔들리며 빗나가요', '오르기에서 한 번에 힘을 다 쓰면 팔이 금방 지쳐요', '가까운 짝에게 세게 던지면 받기 어렵고 위험해요'] }, difficulty: 0.2,
                  conclude: '힘은 클수록 좋은 것이 아니라, 거리·바람·몸 상태에 맞게 조절해야 정확하고 안전해요.' },
              ],
            },
          ],
          {
            teacher: '"3걸음과 10걸음에서 던질 때 몸의 어느 곳을 더 썼나요?" 짝이 알려 준 말을 떠올려 답하게 한다. 출구 2번에서 "힘은 최대로"를 고른 학생에게는 3걸음 주고받기를 다시 떠올리게 한다. 손목·어깨·허리를 천천히 돌리며 마친다.',
            exitTicket: [
              { type: 'tool', tool: 'body', options: { mode: 'parts', parts: ['어깨', '팔꿈치', '손목', '허리', '무릎', '발목'] }, prompt: '오르기를 마치고 정리 운동으로 풀어 줄, 다리의 관절 두 곳을 골라요.', target: { parts: ['무릎', '발목'] }, difficulty: 0.15 },
              { type: 'choice', prompt: '5걸음 앞 짝에게 원반을 던질 때 알맞은 것은?', options: ['있는 힘껏 몸통을 비틀어 던진다', '손목을 살짝 써서 부드럽게 던진다', '눈을 감고 던진다'], answer: 1, difficulty: 0.15, explain: '가까운 거리는 손목 힘으로 부드럽게 조절해요.' },
              { type: 'short', prompt: '"힘을 최대로 쓰면 언제나 멀리 보낼 수 있다"는 말이 틀린 까닭을 한 줄로 쓰세요.' },
            ],
          },
        ),
        worksheet: {
          title: '힘을 내는 곳, 조절하는 까닭',
          items: [
            { type: 'figure', prompt: '그림에서 원반을 던질 때 쓰는 팔의 관절 세 곳에 ○ 하세요.', tool: 'body', options: { mode: 'parts', parts: ['어깨', '팔꿈치', '손목', '허리', '무릎', '발목'] }, figures: [{ state: {}, caption: '팔의 관절 세 곳' }], answer: '어깨, 팔꿈치, 손목' },
            { type: 'table', prompt: '짝과 주고받기를 해 보고 쓴 힘과 결과를 쓰세요.', columns: ['거리', '쓴 몸의 곳', '받은 횟수(3번 중)'], cells: [['3걸음', '', ''], ['10걸음', '', '']] },
            { type: 'choice', prompt: '오르기에서 힘을 아끼는 방법에 ○ 하세요.', options: ['팔을 굽혀 매달린다', '다리를 펴며 몸을 밀어 올린다', '손잡이를 있는 힘껏 쥔다'], answer: '다리를 펴며 몸을 밀어 올린다' },
            { type: 'short', prompt: '힘을 상황에 맞게 조절해야 하는 까닭을 한 가지 쓰세요.' },
          ],
          easy: {
            note: '던지는 팔의 관절은 어깨·팔꿈치·손목이에요.',
            items: [
              { type: 'choice', prompt: '몸통을 비트는 곳은?', options: ['허리', '발목'], answer: '허리' },
              { type: 'choice', prompt: '가까운 짝에게 던질 때는?', options: ['부드럽게', '있는 힘껏'], answer: '부드럽게' },
              { type: 'draw', prompt: '원반을 던지는 내 모습을 그리고 힘을 쓴 곳에 ○ 하세요.' },
            ],
          },
        },
        differentiation: {
          easy: '고른 몸의 곳 이름이 바로 보이고, 카드를 놓으면 맞는지 보여요.',
          base: '이름 없이 그림에서 자리를 찾아 골라요.',
          challenge: '고를 수 있는 곳이 목·허벅지까지 늘어나고, 두 활동에 맞지 않는 함정 카드가 더해져요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 힘을 최대로 쓰면 언제나 멀리 간다고 여긴다 → 3걸음 주고받기로 힘을 줄이는 기술을 겪게 한다. ② 오르기를 팔힘으로만 한다고 여긴다 → 다리 관절을 짚고 밀어 올리기를 해 보인다. ③ 허리를 비틀지 않고 팔만 휘두른다 → 원반을 반대쪽 허리까지 감게 한다. 주고받기는 같은 방향으로 줄을 맞춰 서서 하고, 교사가 줄 끝에서 살핀다.',
      }),
      // ───────────────────────── 11 ─────────────────────────
      L(11, {
        title: '장비를 갖춰도 남는 위험 찾아 대처하기',
        objective: '장비가 막아 주는 위험과 내 행동으로 막아야 하는 위험을 나누고, 활동 중 위험한 순간에 알맞게 대처할 수 있다.',
        illustration: art('a child pausing on a low climbing wall wiping sweaty hands while a friend stands ready as a spotter on a mat, with a cautious flying disc nearby', [
          { motif: 'mountain', x: 120, y: 180, s: 0.9 }, { motif: 'cloud', x: 300, y: 52 }, { motif: 'star', x: 380, y: 130, s: 0.7 },
          { motif: 'hills', y: 232 },
          { motif: 'text', x: 260, y: 110, text: '장비 + 내 행동', size: 26 },
        ]),
        safety: [CLIMB, CLIMB2, DISC2],
        stages: stages(
          {
            teacher: '"지난 시간 매트가 하는 일을 찾았지요. 그럼 매트가 막지 못하는 위험은 무엇일까요?" 학생 대답을 칠판의 두 칸(장비가 막아요 / 내가 막아요)에 나누어 적는다. "장비를 다 갖춘 친구가 다쳤다면 무엇 때문일까요?"를 물어, 오늘은 위험한 순간에 무엇을 할지 고르고 실제로 몸으로 연습한다고 알린다.',
            student: '장비를 다 갖추었는데도 다칠 수 있는 순간을 하나 떠올려 짝에게 말해 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 위험한 순간에 어떻게 할까', minutes: 13, tool: 'emotion',
              task: '오르기와 원반 던지기에서 생길 수 있는 상황을 읽고 어떻게 할지 골라요. 고른 대처를 매트 위에서 짝과 천천히 해 봐요.',
              teacher: '"장비가 있으니 괜찮다는 말이 들리면 무엇을 떠올려야 할까요?" 고른 뒤에는 실제로 손을 닦고 다시 오르기, 손발 하나씩 내려오기를 짝이 지켜보며 해 본다.',
              levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
              items: [
                { prompt: '매트가 깔린 오르기 벽에서 친구가 "매트 있으니까 꼭대기까지 가자"고 해요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '매트가 깔린 오르기 벽에서 친구가 "매트 있으니까 꼭대기까지 가자"고 해요.', motif: 'mountain', choices: [{ id: 'up', text: '같이 꼭대기까지 올라가요', result: '높은 곳에서 손이 빠져 크게 떨어졌어요.', mood: '무서움', why: '매트는 충격을 줄일 뿐 높은 곳에서 떨어지는 위험을 없애지 못해요.' }, { id: 'low', text: '"발은 무릎 높이까지 약속이야"라고 말하고 옆으로 이동해요', result: '낮은 곳에서 안전하게 가로 이동을 했어요.', mood: '편안함' }, { id: 'jump', text: '올라갔다가 뛰어내려 매트를 시험해요', result: '발목을 접질렸어요.', mood: '걱정', why: '뛰어내리면 매트가 있어도 발목을 다칠 수 있어요.' }] }, target: { choice: 'low' }, levels: { easy: { toolOptions: { choices: [{ id: 'up', text: '같이 꼭대기까지 올라가요', result: '높은 곳에서 손이 빠져 크게 떨어졌어요.', mood: '무서움', why: '매트는 충격을 줄일 뿐 높은 곳에서 떨어지는 위험을 없애지 못해요.' }, { id: 'low', text: '"발은 무릎 높이까지 약속이야"라고 말하고 옆으로 이동해요', result: '낮은 곳에서 안전하게 가로 이동을 했어요.', mood: '편안함' }] } } }, difficulty: 0.15 },
                { prompt: '오르는 중에 팔이 떨리고 힘이 빠지기 시작했어요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '오르기 벽에서 가로 이동을 하는데 팔이 떨리고 힘이 빠지기 시작했어요.', motif: 'mountain', choices: [{ id: 'hold', text: '끝까지 가려고 손잡이를 더 꽉 쥐어요', result: '팔이 풀려 손이 갑자기 빠졌어요.', mood: '놀람', why: '지친 팔로 버티면 갑자기 놓치게 돼요.' }, { id: 'down', text: '손발을 하나씩 옮겨 바로 내려와요', result: '매트에 안전하게 내려와 쉬었어요.', mood: '편안함' }, { id: 'let', text: '두 손을 한꺼번에 놓아요', result: '몸이 뒤로 넘어가 매트에 등을 부딪혔어요.', mood: '걱정', why: '한꺼번에 놓으면 몸을 조절할 수 없어요.' }] }, target: { choice: 'down' }, difficulty: 0.2 },
                { prompt: '연습용 원반이라며 친구가 다른 친구 등 쪽으로 장난삼아 던지려 해요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '"부드러운 원반이니까 괜찮아" 하며 친구가 다른 친구 등 쪽으로 장난삼아 던지려 해요.', choices: [{ id: 'laugh', text: '재미있으니 웃으며 지켜봐요', result: '원반이 돌아보던 친구 눈 가까이에 맞았어요.', mood: '걱정', why: '부드러운 원반도 눈에 맞으면 다칠 수 있어요.' }, { id: 'stop', text: '"사람 쪽으로는 안 던지기로 했어"라고 말려요', result: '친구가 빈 곳을 향해 다시 던졌어요.', mood: '편안함' }] }, target: { choice: 'stop' }, difficulty: 0.15,
                  conclude: '부드러운 장비도 쓰는 사람이 약속을 지켜야 안전해요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 장비가 할 일과 내가 할 일 나누기', minutes: 13, tool: 'mindmap',
              task: '안전 카드를 장비가 하는 일과 내가 하는 일로 나누고, 위험한 순간마다 할 대처를 이어요. 장비를 갖춘 뒤에도 할 일을 골라 모둠 안전 카드로 적어요.',
              teacher: '"신발이 미끄럼을 막아 준다면, 손의 미끄럼은 누가 막나요?" 내가 할 일을 행동으로 말하게 한다. 모둠 안전 카드는 오르기 벽 옆에 붙여 다음 시간에도 쓴다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '안전 카드를 장비가 하는 일과 내가 하는 일로 나누어요.', toolOptions: { topic: '누가 막아 줄까?', slots: ['장비가 해요', '내가 해요'], cards: ['떨어질 때 충격을 줄여 줘요', '맞아도 덜 아프게 해 줘요', '신발 바닥이 미끄러지지 않게 잡아 줘요', '무릎 높이까지만 올라가요', '던지기 전에 앞을 살피고 외쳐요', '손에 땀이 나면 내려와 닦아요'] }, target: { sort: { '장비가 해요': ['떨어질 때 충격을 줄여 줘요', '맞아도 덜 아프게 해 줘요', '신발 바닥이 미끄러지지 않게 잡아 줘요'], '내가 해요': ['무릎 높이까지만 올라가요', '던지기 전에 앞을 살피고 외쳐요', '손에 땀이 나면 내려와 닦아요'] } }, levels: { easy: { state: { at: { '떨어질 때 충격을 줄여 줘요': 0 } } } }, difficulty: 0.2 },
                { prompt: '위험한 순간마다 알맞은 대처를 이어요.', toolOptions: { mode: 'match', topic: '이럴 땐', slots: [{ id: 'sweat', label: '손에 땀이 나 손이 미끄러워요' }, { id: 'tired', label: '팔이 떨리고 힘이 빠져요' }, { id: 'fly', label: '원반이 사람 쪽으로 날아가요' }], cards: ['내려와서 손을 닦고 다시 해요', '손발을 하나씩 옮겨 바로 내려와요', '"조심!" 하고 크게 외쳐 알려요'] }, target: { match: { sweat: '내려와서 손을 닦고 다시 해요', tired: '손발을 하나씩 옮겨 바로 내려와요', fly: '"조심!" 하고 크게 외쳐 알려요' } }, difficulty: 0.2 },
                { prompt: '장비를 모두 갖춘 뒤에도 꼭 할 일만 골라요.', toolOptions: { mode: 'pick', topic: '장비를 갖춘 뒤에도', cards: ['내 몸 상태를 살피고 힘들면 쉬어요', '보조 친구와 신호를 정해요', '약속한 높이와 구역을 지켜요', '장비가 있으니 신호 없이 시작해요'] }, target: { pick: ['내 몸 상태를 살피고 힘들면 쉬어요', '보조 친구와 신호를 정해요', '약속한 높이와 구역을 지켜요'] }, levels: { challenge: { prompt: '장비를 모두 갖춘 뒤에도 꼭 할 일만 골라요. 그럴듯한 함정 카드가 있어요.', toolOptions: { cards: ['내 몸 상태를 살피고 힘들면 쉬어요', '보조 친구와 신호를 정해요', '약속한 높이와 구역을 지켜요', '장비가 있으니 신호 없이 시작해요', '부드러운 원반이면 사람 쪽으로 던져도 돼요'] } } }, difficulty: 0.15 },
              ],
            },
          ],
          {
            teacher: '"오늘 몸으로 해 본 대처 가운데 가장 어려웠던 것은 무엇인가요?" 출구 1번에서 장비가 할 일과 내가 할 일을 바꾼 학생에게는 "그 일을 장비가 혼자 할 수 있나요?"를 묻는다. 손목과 손가락을 풀며 마친다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { topic: '누가 막아 줄까?', slots: ['장비가 해요', '내가 해요'], cards: ['던질 구역을 눈에 띄게 표시해 줘요', '구역 안에 들어가기 전에 둘레를 봐요', '벽 아래 바닥을 푹신하게 해 줘요', '내려올 때 손발을 하나씩 옮겨요'] }, prompt: '새 안전 카드를 장비가 하는 일과 내가 하는 일로 나누어요.', target: { sort: { '장비가 해요': ['던질 구역을 눈에 띄게 표시해 줘요', '벽 아래 바닥을 푹신하게 해 줘요'], '내가 해요': ['구역 안에 들어가기 전에 둘레를 봐요', '내려올 때 손발을 하나씩 옮겨요'] } }, difficulty: 0.15 },
              { type: 'choice', prompt: '"장비를 다 갖췄으니 이제 위험은 없다"는 말에 알맞은 대답은?', options: ['맞아요, 이제 마음대로 해도 돼요', '장비는 위험을 줄일 뿐이라 안전한 행동을 함께 해야 해요', '장비는 쓸모가 없어요'], answer: 1, difficulty: 0.15, explain: '장비와 내 행동이 함께여야 안전해요.' },
              { type: 'mood', prompt: '위험한 순간에 대처하는 법을 연습한 오늘 마음은 어땠나요?' },
            ],
          },
        ),
        worksheet: {
          title: '장비 + 내 행동',
          items: [
            { type: 'table', prompt: '장비가 막아 주는 위험과 내가 막아야 하는 위험을 쓰세요.', columns: ['장비가 막아 줘요', '내가 막아요'], rows: 3 },
            { type: 'table', prompt: '위험한 순간과 대처를 쓰세요.', columns: ['위험한 순간', '나의 대처'], cells: [['손에 땀이 나요', ''], ['팔이 떨려요', ''], ['원반이 사람 쪽으로 날아가요', '']] },
            { type: 'choice', prompt: '오르다가 팔이 떨릴 때 알맞은 것에 ○ 하세요.', options: ['손잡이를 더 꽉 쥔다', '손발을 하나씩 옮겨 내려온다', '두 손을 한꺼번에 놓는다'], answer: '손발을 하나씩 옮겨 내려온다' },
            { type: 'short', prompt: '우리 모둠 안전 카드에 적은 약속 하나를 쓰세요.' },
          ],
          easy: {
            note: '장비가 할 수 없는 일은 내가 해요.',
            items: [
              { type: 'choice', prompt: '"무릎 높이까지만 올라가요"는 누가 하는 일인가요?', options: ['장비', '나'], answer: '나' },
              { type: 'choice', prompt: '손에 땀이 나면?', options: ['내려와서 닦아요', '그대로 올라가요'], answer: '내려와서 닦아요' },
              { type: 'draw', prompt: '오르기 벽 앞에서 보조 친구와 함께 있는 모습을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '상황마다 보기가 두 개로 줄어 있고, 카드를 놓으면 바로 맞는지 보여요.',
          base: '세 보기의 결과를 견주어 고르고, 스스로 나눈 뒤 확인해요.',
          challenge: '고른 보기의 결과가 맞힌 뒤에만 보이고, "부드러운 원반이면 괜찮다" 같은 함정 카드를 가려내요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 장비를 갖추면 위험이 모두 사라진다고 여긴다 → 장비가 할 일과 내가 할 일을 두 칸으로 나누어 본다. ② 지친 팔로 끝까지 버티려 한다 → 하나씩 내려오기를 실제로 연습한다. ③ 부드러운 원반이면 장난쳐도 된다고 여긴다 → 눈에 맞을 때를 짚는다. 매트 위 대처 연습은 낮은 높이에서 보조 친구를 붙여 하고, 교사가 벽 앞에 선다.',
      }),
      // ───────────────────────── 12 ─────────────────────────
      L(12, {
        title: '원반 백핸드 던지기 동작 익히고 힘 조절하기',
        objective: '원반 백핸드 던지기를 바른 차례로 하고, 목표 거리에 맞게 힘의 세기를 조절해야 잘 들어간다는 것을 기록으로 설명할 수 있다.',
        illustration: art('a child standing sideways throwing a flying disc toward a hula hoop target on a grass field, with dotted paper arrows showing the curve of the arm', [
          { motif: 'sun', x: 410, y: 54, s: 0.8 }, { motif: 'cloud', x: 120, y: 52 }, { motif: 'tree', x: 60, y: 200 },
          { motif: 'star', x: 330, y: 130, s: 0.7 }, { motif: 'hills', y: 230 },
          { motif: 'text', x: 240, y: 104, text: '옆으로 서서, 감고, 펴고, 튕기고', size: 20 },
        ]),
        safety: [DISC, DISC2, FIELD],
        stages: stages(
          {
            teacher: '교사가 원반 백핸드 던지기를 천천히 세 번 보인다. "선생님은 목표를 보고 어떻게 서 있었나요? 원반을 놓기 전 원반이 어디까지 갔나요?" 대답을 받아 칠판에 "옆으로 서기 → 감기 → 펴기 → 튕기기 → 따라가기"를 적는다. "힘껏 던질수록 목표에 더 잘 들어갈까요?"를 물어 두고, 오늘은 동작을 익힌 뒤 세기를 바꿔 던지며 기록한다고 알린다.',
            student: '선생님 동작을 보고 원반을 놓기 직전에 손목이 어떻게 움직였는지 흉내 내 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 백핸드 동작 차례 익히고 던져 보기', minutes: 14, tool: 'timer',
              task: '백핸드 던지기 동작을 차례대로 놓고, 출발 전 점검을 해요. 짝과 5걸음 거리에서 다섯 번씩 던지고 받은 횟수를 적어요.',
              teacher: '"목표를 정면으로 보고 서면 몸통을 비틀 수 없어요. 던지는 손 쪽 어깨가 목표를 향하게 옆으로 서요." 원반이 기울어 날아가는 학생에게 "원반 바닥이 땅과 나란한가요?"를 묻는다. 받는 짝이 손을 든 뒤에만 던지게 한다.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '원반 백핸드 던지기 동작 카드를 차례대로 놓아요.', toolOptions: { cards: ['손목을 튕겨 원반 놓기', '목표 쪽으로 옆으로 서기', '팔이 목표를 따라가며 마무리', '원반을 반대쪽 허리까지 감기', '팔을 펴며 앞으로 휘두르기'] }, target: { order: ['목표 쪽으로 옆으로 서기', '원반을 반대쪽 허리까지 감기', '팔을 펴며 앞으로 휘두르기', '손목을 튕겨 원반 놓기', '팔이 목표를 따라가며 마무리'] }, levels: { easy: { state: { order: ['목표 쪽으로 옆으로 서기', '손목을 튕겨 원반 놓기', '팔이 목표를 따라가며 마무리', '원반을 반대쪽 허리까지 감기', '팔을 펴며 앞으로 휘두르기'] } } }, difficulty: 0.2,
                  hints: ['서는 자세를 먼저 잡고, 힘을 모았다가, 풀면서 놓고, 놓은 뒤에도 팔이 이어져요.', '원반을 감는 것과 휘두르는 것, 휘두르는 것과 놓는 것 가운데 무엇이 먼저인지 몸으로 천천히 해 보세요.'] },
                { prompt: '원반을 던지기 전에 확인한 것을 눌러 표시해요.', toolOptions: { safety: ['던지는 쪽에 사람이 없어요', '받는 짝이 준비됐다고 손을 들었어요', '원반에 금 간 곳이 없어요'] }, target: { safety: true }, difficulty: 0.1 },
                { prompt: '짝과 5걸음 거리에서 다섯 번 던지고, 짝이 받은 횟수와 원반이 수평으로 날아간 횟수를 적어요.', toolOptions: { fields: [{ label: '짝이 받은 횟수', unit: '번', max: 5 }, { label: '수평으로 날아간 횟수', unit: '번', max: 5 }] }, target: { records: true }, levels: { challenge: { toolOptions: { fields: [{ label: '짝이 받은 횟수', unit: '번', max: 5 }, { label: '수평으로 날아간 횟수', unit: '번', max: 5 }, { label: '10걸음에서 받은 횟수', unit: '번', max: 5 }] } } }, difficulty: 0.15 },
              ],
            },
            {
              id: 'a2', title: '활동 2. 세기에 따른 결과 그래프 읽기', minutes: 12, tool: 'chart',
              task: '한 모둠이 15걸음 앞 훌라후프를 향해 세기를 바꾸어 다섯 번씩 던진 기록 그래프를 읽어요. 그다음 우리도 세 가지 세기로 두 번씩 던져 활동지에 적어요.',
              teacher: '"있는 힘껏 던진 것이 왜 덜 들어갔을까요?" 힘을 너무 주면 원반이 기울고 흔들린다는 것을 짚는다. 우리 모둠 기록은 그래프와 견주어 보게 한다.',
              options: { type: 'bar', mode: 'read', title: '세기별로 훌라후프에 들어간 횟수(5번 중)', unit: '번', xLabel: '던진 세기', yLabel: '들어간 횟수', max: 5, scale: 1, data: [['살살', 0], ['알맞게', 4], ['있는 힘껏', 1]] },
              levels: { easy: { showValues: true }, base: {}, challenge: { revealAfterCheck: true } },
              items: [
                { prompt: '그래프에서 훌라후프에 가장 많이 들어간 세기를 골라요.', toolOptions: { question: '가장 많이 들어간 세기는?', choices: ['살살', '알맞게', '있는 힘껏'] }, target: { pick: 1 }, difficulty: 0.1 },
                { prompt: '있는 힘껏 던진 것은 알맞게 던진 것보다 몇 번 적게 들어갔나요? 수를 넣어요.', target: { value: 3 }, difficulty: 0.2 },
                { prompt: '이 그래프로 알 수 있는 것을 골라요.', toolOptions: { question: '그래프로 알 수 있는 것은?', choices: ['힘이 셀수록 언제나 잘 들어간다', '거리에 맞게 힘을 조절해야 잘 들어간다', '살살 던지는 것이 가장 좋다'], why: ['있는 힘껏 던진 것은 1번밖에 들어가지 않았어요.', null, '살살 던진 것은 한 번도 들어가지 않았어요.'] }, target: { pick: 1 }, difficulty: 0.2,
                  predict: { q: '있는 힘껏 던지면 어떻게 될까요?', options: ['가장 잘 들어가요', '오히려 빗나가기 쉬워요'], answer: 1 },
                  conclude: '힘이 모자라면 짧고, 너무 세면 흔들려 빗나가요. 거리에 맞는 세기를 찾아야 해요.' },
              ],
            },
          ],
          {
            teacher: '"오늘 우리 모둠 기록도 그래프처럼 나왔나요?" 두 모둠이 견주어 말한다. 출구 2번을 틀린 학생은 그래프의 "있는 힘껏" 막대를 다시 보게 한다. 어깨와 손목을 돌려 풀고 원반을 세어 바구니에 담으며 마친다.',
            exitTicket: [
              { type: 'tool', tool: 'chart', options: { type: 'bar', mode: 'read', title: '세기별로 짝이 받은 횟수(5번 중)', unit: '번', max: 5, scale: 1, data: [['살살', 2], ['알맞게', 5], ['있는 힘껏', 1]], question: '짝이 가장 적게 받은 세기는?', choices: ['살살', '알맞게', '있는 힘껏'] }, prompt: '8걸음 거리에서 주고받은 기록이에요. 짝이 가장 적게 받은 세기를 골라요.', target: { pick: 2 }, difficulty: 0.15 },
              { type: 'choice', prompt: '원반 백핸드 던지기에서 원반을 놓기 바로 전에 하는 동작은?', options: ['목표 쪽으로 옆으로 서기', '팔을 펴며 앞으로 휘두르기', '팔이 목표를 따라가며 마무리'], answer: 1, difficulty: 0.2, explain: '팔을 펴며 휘두르다가 손목을 튕겨 놓아요.' },
              { type: 'short', prompt: '"힘을 최대로 쓰면 언제나 멀리 정확하게 간다"는 말이 틀린 까닭을 오늘 기록을 들어 쓰세요.' },
            ],
          },
        ),
        worksheet: {
          title: '원반 백핸드 던지기',
          items: [
            { type: 'table', prompt: '백핸드 던지기 동작 카드에 차례대로 1~5를 쓰세요.', columns: ['동작', '차례'], cells: [['손목을 튕겨 원반 놓기', ''], ['목표 쪽으로 옆으로 서기', ''], ['팔이 목표를 따라가며 마무리', ''], ['원반을 반대쪽 허리까지 감기', ''], ['팔을 펴며 앞으로 휘두르기', '']], answer: '옆으로 서기 1, 감기 2, 휘두르기 3, 튕겨 놓기 4, 마무리 5' },
            { type: 'table', prompt: '세 가지 세기로 두 번씩 던진 결과를 쓰세요.', columns: ['세기', '들어간 횟수(2번 중)', '원반이 날아간 모양'], cells: [['살살', '', ''], ['알맞게', '', ''], ['있는 힘껏', '', '']] },
            { type: 'choice', prompt: '원반이 기울어 휘어 날아갈 때 살펴볼 것에 ○ 하세요.', options: ['원반 바닥이 땅과 나란한지', '신발 끈 색깔', '목표의 색깔'], answer: '원반 바닥이 땅과 나란한지' },
            { type: 'short', prompt: '목표에 잘 들어간 때의 힘 세기를 내 말로 쓰세요.' },
          ],
          easy: {
            note: '옆으로 서기 → 감기 → 펴기 → 튕기기 → 따라가기.',
            items: [
              { type: 'choice', prompt: '백핸드 던지기에서 맨 먼저 하는 것은?', options: ['목표 쪽으로 옆으로 서기', '손목 튕기기'], answer: '목표 쪽으로 옆으로 서기' },
              { type: 'choice', prompt: '15걸음 앞 목표에 가장 잘 들어간 세기는?', options: ['알맞게', '있는 힘껏'], answer: '알맞게' },
              { type: 'draw', prompt: '원반을 감았을 때 팔과 원반의 자리를 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '동작 카드 첫 장이 미리 놓여 있고, 그래프 막대 위에 값이 보여요.',
          base: '차례를 스스로 세우고 그래프 눈금을 읽어요.',
          challenge: '10걸음 기록 칸이 더해지고, 그래프 값은 맞힌 뒤에만 보여요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 목표를 정면으로 보고 서서 팔만 휘두른다 → 던지는 손 쪽 어깨가 목표를 향하게 세운다. ② 원반이 기울어 날아간다 → 원반 바닥이 땅과 나란하게 놓는 순간까지 유지한다. ③ 힘을 최대로 쓰면 언제나 멀리 정확히 간다고 여긴다 → 세기별 그래프와 우리 기록을 견준다. 던지기는 모두 같은 방향으로 줄을 맞추고, 원반 줍기는 교사 신호에 맞추어 한꺼번에 한다.',
      }),
      // ───────────────────────── 13 ─────────────────────────
      L(13, {
        title: '원반 받기 익히고 주고받는 거리 늘리기',
        objective: '날아오는 높이에 맞게 원반을 받는 방법을 고르고, 거리가 늘어날 때 던지는 힘을 조절하며 짝과 주고받을 수 있다.',
        illustration: art('two children facing each other on a field passing a flying disc, one catching it with a clapping sandwich catch, with step marks showing growing distance', [
          { motif: 'sun', x: 410, y: 54, s: 0.8 }, { motif: 'cloud', x: 140, y: 50 }, { motif: 'tree', x: 430, y: 206 },
          { motif: 'star', x: 240, y: 112, s: 0.7 }, { motif: 'hills', y: 230 },
          { motif: 'text', x: 240, y: 160, text: '3걸음 · 5걸음 · 8걸음', size: 22 },
        ]),
        safety: [DISC, DISC2, SPACE],
        stages: stages(
          {
            teacher: '교사가 원반을 가슴 높이·머리 위·무릎 아래로 하나씩 던지게 하고 받아 보인다. "세 번 받을 때 손 모양이 어떻게 달랐나요?" 가슴 높이에서 두 손을 위아래로 벌렸다가 손뼉 치듯 오므리는 "샌드위치 잡기"를 이름 붙인다. "거리가 멀어지면 같은 힘으로 던져도 될까요?"를 물어 두고, 오늘은 받기를 익혀 거리를 늘려 간다고 알린다.',
            student: '선생님이 받을 때 손 모양을 보고, 내 손으로 샌드위치 잡기를 흉내 내 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 날아오는 높이에 맞게 받기', minutes: 12, tool: 'mindmap',
              task: '원반이 날아오는 높이마다 받는 방법을 잇고, 받는 차례와 받기 안전을 골라요. 그다음 짝이 3걸음에서 부드럽게 던져 주는 원반을 높이마다 두 번씩 받아요.',
              teacher: '"원반을 끝까지 보지 않으면 손이 먼저 닫혀요." 손이 원반보다 먼저 오므라지는 학생에게 원반이 손에 닿는 소리를 들은 뒤 닫으라고 말한다. 얼굴 쪽으로 오면 받으려 하지 말고 손으로 가리며 비키게 한다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '원반이 날아오는 높이마다 알맞은 받기 방법을 이어요.', toolOptions: { mode: 'match', topic: '높이에 맞게 받기', slots: [{ id: 'chest', label: '가슴 높이로 와요' }, { id: 'high', label: '머리 위로 높이 와요' }, { id: 'low', label: '무릎 아래로 낮게 와요' }], cards: ['두 손을 위아래로 벌려 손뼉 치듯 잡기', '엄지를 아래로 하고 위에서 덮어 잡기', '엄지를 위로 하고 아래에서 떠받쳐 잡기'] }, target: { match: { chest: '두 손을 위아래로 벌려 손뼉 치듯 잡기', high: '엄지를 아래로 하고 위에서 덮어 잡기', low: '엄지를 위로 하고 아래에서 떠받쳐 잡기' } }, levels: { easy: { state: { at: { '두 손을 위아래로 벌려 손뼉 치듯 잡기': 0 } } } }, difficulty: 0.2,
                  hints: ['원반의 위와 아래 가운데 손이 어느 쪽으로 가야 쉽게 감쌀 수 있는지 높이마다 몸으로 해 보세요.', '높이 오는 원반은 위에서, 낮게 오는 원반은 아래에서 손이 가야 해요. 엄지 방향을 견주어 보세요.'] },
                { prompt: '원반을 받는 차례대로 카드를 놓아요.', toolOptions: { mode: 'order', topic: '받는 차례', cards: ['원반이 손에 닿으면 손뼉 치듯 오므리기', '받을 준비가 되면 손을 들어 알리기', '원반을 끝까지 눈으로 따라 보기'] }, target: { order: ['받을 준비가 되면 손을 들어 알리기', '원반을 끝까지 눈으로 따라 보기', '원반이 손에 닿으면 손뼉 치듯 오므리기'] }, levels: { easy: { state: { at: { '받을 준비가 되면 손을 들어 알리기': 0 } } } }, difficulty: 0.15 },
                { prompt: '원반을 받을 때 안전한 행동만 골라요.', toolOptions: { mode: 'pick', topic: '안전하게 받기', cards: ['얼굴 쪽으로 오면 손으로 가리고 비켜요', '받을 준비가 되면 손을 들어 알려요', '원반을 보지 않고 소리로만 받아요', '못 받을 것 같아도 몸을 날려 받아요'] }, target: { pick: ['얼굴 쪽으로 오면 손으로 가리고 비켜요', '받을 준비가 되면 손을 들어 알려요'] }, difficulty: 0.15,
                  conclude: '원반은 끝까지 눈으로 보고, 위험하면 받기보다 몸을 지키는 것이 먼저예요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 거리를 늘리며 주고받기', minutes: 14, tool: 'timer',
              task: '30초 주고받기, 15초 쉬며 한 걸음씩 물러나기를 맞추어 해 보고, 거리마다 다섯 번 중 받은 횟수를 적어요. 마치고 스스로 점검해요.',
              teacher: '"거리가 멀어질 때 팔만 더 세게 휘두르나요, 몸통을 더 쓰나요?" 멀어질수록 몸통 비틀기를 보태고, 가까울 때는 손목만 쓰게 한다. 쉬는 15초에 받는 짝이 "세요/약해요/좋아요"를 알려 준다.',
              levels: { easy: { workStep: 15, restStep: 15 }, base: {}, challenge: { showTotal: false } },
              items: [
                { prompt: '30초 동안 주고받고 15초 쉬며 물러나기를 4번 하도록 타이머를 맞춰요.', toolOptions: { plan: { work: 20, rest: 20, rounds: 2 } }, target: { plan: { work: 30, rest: 15, rounds: 4 } }, difficulty: 0.2 },
                { prompt: '거리마다 다섯 번 던져 짝이 받은 횟수를 적어요.', toolOptions: { fields: [{ label: '3걸음', unit: '번', max: 5 }, { label: '5걸음', unit: '번', max: 5 }, { label: '8걸음', unit: '번', max: 5 }] }, target: { records: true }, levels: { challenge: { toolOptions: { fields: [{ label: '3걸음', unit: '번', max: 5 }, { label: '5걸음', unit: '번', max: 5 }, { label: '8걸음', unit: '번', max: 5 }, { label: '3걸음과 8걸음의 차이', unit: '번', max: 5 }] } } }, difficulty: 0.15 },
                { prompt: '주고받기를 마치고 해낸 것을 스스로 점검해 표시해요.', target: { selfCheck: ['거리가 멀어지면 몸통을 더 써서 던졌어요', '가까울 때는 손목만 살짝 써서 던졌어요', '받기 전에 원반을 끝까지 보았어요'] }, difficulty: 0.1 },
              ],
            },
          ],
          {
            teacher: '"8걸음에서 받은 횟수가 줄었다면 던지는 쪽과 받는 쪽 가운데 무엇이 문제였나요?" 짝과 까닭을 하나씩 말한다. 출구 1번에서 높은 원반을 아래에서 받친 학생에게는 머리 위로 손을 올려 덮는 모양을 다시 해 보게 한다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '높이에 맞게 받기', slots: [{ id: 'belly', label: '배꼽보다 조금 낮게 와요' }, { id: 'face', label: '얼굴 쪽으로 빠르게 와요' }], cards: ['엄지를 위로 하고 아래에서 떠받쳐 잡기', '손으로 얼굴을 가리고 몸을 비키기'] }, prompt: '새 상황에서 원반을 받는 알맞은 방법을 이어요.', target: { match: { belly: '엄지를 위로 하고 아래에서 떠받쳐 잡기', face: '손으로 얼굴을 가리고 몸을 비키기' } }, difficulty: 0.2 },
              { type: 'choice', prompt: '짝과의 거리가 3걸음에서 8걸음으로 멀어졌어요. 알맞은 것은?', options: ['손목만 더 세게 튕긴다', '몸통 비틀기를 보태 힘을 늘린다', '같은 힘으로 던진다'], answer: 1, difficulty: 0.2, explain: '거리가 멀어지면 몸통 비틀기로 힘을 보태요.' },
              { type: 'mood', prompt: '거리를 늘리며 주고받아 본 오늘 마음은 어땠나요?' },
            ],
          },
        ),
        worksheet: {
          title: '원반 받기와 주고받기',
          items: [
            { type: 'table', prompt: '높이마다 받는 방법을 쓰세요.', columns: ['날아오는 높이', '손 모양'], cells: [['가슴 높이', ''], ['머리 위', ''], ['무릎 아래', '']] },
            { type: 'table', prompt: '거리마다 받은 횟수(5번 중)와 던질 때 쓴 몸을 쓰세요.', columns: ['거리', '받은 횟수', '던질 때 쓴 몸'], cells: [['3걸음', '', ''], ['5걸음', '', ''], ['8걸음', '', '']] },
            { type: 'blank', prompt: '전체 시간을 구하세요.', text: '주고받기 30초, 쉬기 15초를 4번 하면 전체 시간은 ___초예요.', answer: '165' },
            { type: 'choice', prompt: '원반이 얼굴 쪽으로 빠르게 올 때 알맞은 것에 ○ 하세요.', options: ['몸을 날려 받는다', '손으로 가리고 비킨다', '눈을 감고 받는다'], answer: '손으로 가리고 비킨다' },
          ],
          easy: {
            note: '가슴 높이는 샌드위치 잡기 — 두 손을 위아래로 벌렸다가 손뼉 치듯 오므려요.',
            items: [
              { type: 'choice', prompt: '받기 전에 원반을 어떻게 보나요?', options: ['끝까지 본다', '처음만 본다'], answer: '끝까지 본다' },
              { type: 'choice', prompt: '멀리 던질 때 더 쓰는 곳은?', options: ['몸통', '발가락'], answer: '몸통' },
              { type: 'draw', prompt: '샌드위치 잡기 손 모양을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '받기 카드를 놓으면 바로 맞는지 보이고 한 장이 미리 놓여 있어요. 타이머가 15초씩 움직여요.',
          base: '스스로 잇고 차례를 세우며, 타이머를 5초씩 맞춰요.',
          challenge: '전체 시간이 숨겨지고, 기록판에 3걸음과 8걸음의 차이를 셈해 적는 칸이 더해져요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 원반보다 손이 먼저 오므라진다 → 손에 닿는 소리를 듣고 닫는다. ② 머리 위 원반을 아래에서 받쳐 놓친다 → 엄지 방향을 바꾸어 위에서 덮는다. ③ 멀어지면 팔만 세게 휘둘러 원반이 기운다 → 몸통 비틀기로 힘을 보탠다. 짝마다 같은 방향으로 늘어서 원반이 옆 짝에게 가지 않게 하고, 교사는 줄 끝에서 본다.',
      }),
      // ───────────────────────── 14 ─────────────────────────
      L(14, {
        title: '매트 위 낮은 벽에서 세 곳 붙이고 가로 이동하기',
        objective: '손발 세 곳을 벽에 붙인 채 하나씩 옮기는 방법으로 낮은 높이에서 가로 이동을 하고, 팔 힘을 아끼는 자세를 고를 수 있다.',
        illustration: art('a child moving sideways along a low colorful climbing wall above a thick mat, three limbs touching holds while one hand reaches, a friend spotting behind', [
          { motif: 'mountain', x: 240, y: 176 }, { motif: 'star', x: 120, y: 110, s: 0.6 }, { motif: 'star', x: 360, y: 110, s: 0.6 },
          { motif: 'cloud', x: 240, y: 46 }, { motif: 'hills', y: 232 },
          { motif: 'text', x: 240, y: 90, text: '셋은 붙이고, 하나만 옮겨요', size: 22 },
        ]),
        safety: [CLIMB, CLIMB2, TOOL],
        stages: stages(
          {
            teacher: '교사가 낮은 벽에서 두 가지로 옆으로 움직여 보인다. 한 번은 손발 셋을 붙인 채 하나씩, 한 번은 손과 발을 한꺼번에 옮긴다. "어느 쪽이 더 흔들렸나요? 왜 그럴까요?" 대답을 받아 "세 곳이 붙어 있으면 몸이 삼각형처럼 버텨요"라고 말한다. 오늘은 오르기가 아니라 바닥 가까이에서 옆으로 가는 "가로 이동"을 한다고 알린다.',
            student: '선생님의 두 번 움직임을 보고, 어느 쪽이 덜 흔들렸는지 손가락으로 골라 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 세 곳 붙이기 자세 가려내기', minutes: 12, tool: 'mindmap',
              task: '자세 카드를 세 곳이 붙은 자세와 두 곳만 붙은 자세로 나누고, 어려울 때 바꿀 자세를 이어요. 그다음 매트 위 낮은 손잡이에서 세 곳 붙이기를 제자리에서 해 봐요.',
              teacher: '"오른손과 오른발을 한꺼번에 옮기면 몇 곳이 남나요?" 손가락으로 세어 보게 한다. 팔을 굽혀 매달리는 학생에게 "팔을 쭉 펴고 매달리면 뼈가 버텨 줘서 팔이 덜 지쳐요"라고 짚는다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '자세 카드를 세 곳이 붙은 자세와 두 곳만 붙은 자세로 나누어요.', toolOptions: { topic: '몇 곳이 붙어 있나?', slots: ['세 곳이 붙어 안전해요', '두 곳만 붙어 위험해요'], cards: ['두 손과 왼발을 붙이고 오른발을 옮겨요', '오른손과 두 발을 붙이고 왼손을 옮겨요', '두 손을 함께 떼어 옆 손잡이로 뛰어 잡아요', '오른손과 오른발을 한꺼번에 옮겨요'] }, target: { sort: { '세 곳이 붙어 안전해요': ['두 손과 왼발을 붙이고 오른발을 옮겨요', '오른손과 두 발을 붙이고 왼손을 옮겨요'], '두 곳만 붙어 위험해요': ['두 손을 함께 떼어 옆 손잡이로 뛰어 잡아요', '오른손과 오른발을 한꺼번에 옮겨요'] } }, levels: { easy: { state: { at: { '두 손과 왼발을 붙이고 오른발을 옮겨요': 0 } } } }, difficulty: 0.2,
                  hints: ['카드마다 벽에 붙어 있는 손발이 몇 개인지 손가락을 접어 세어 보세요.', '"한꺼번에", "함께 떼어"라는 말이 있으면 손발이 두 개 떨어진 것이에요.'] },
                { prompt: '가로 이동이 어려울 때 바꿀 자세를 이어요.', toolOptions: { mode: 'match', topic: '이럴 땐 이렇게', slots: [{ id: 'arm', label: '팔이 금방 지쳐요' }, { id: 'slip', label: '발이 자꾸 미끄러져요' }, { id: 'far', label: '다음 손잡이가 멀어요' }], cards: ['팔을 쭉 펴고 다리 힘으로 버텨요', '발 앞꿈치로 손잡이를 디뎌요', '발을 먼저 옮겨 몸을 가까이 가져가요'] }, target: { match: { arm: '팔을 쭉 펴고 다리 힘으로 버텨요', slip: '발 앞꿈치로 손잡이를 디뎌요', far: '발을 먼저 옮겨 몸을 가까이 가져가요' } }, levels: { easy: { state: { at: { '팔을 쭉 펴고 다리 힘으로 버텨요': 0 } } } }, difficulty: 0.25 },
                { prompt: '오르기에서 팔 힘을 아끼는 방법만 골라요.', toolOptions: { mode: 'pick', topic: '팔 힘 아끼기', cards: ['팔은 펴고 다리로 몸을 밀어요', '손잡이를 필요한 만큼만 쥐어요', '손잡이를 있는 힘껏 꽉 쥐어요', '팔을 굽힌 채 오래 매달려요'] }, target: { pick: ['팔은 펴고 다리로 몸을 밀어요', '손잡이를 필요한 만큼만 쥐어요'] }, difficulty: 0.2,
                  conclude: '힘을 최대로 쓰는 것보다 필요한 만큼만 쓰고 다리 힘을 써야 오래 버틸 수 있어요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 가로 이동하고 기록하기', minutes: 14, tool: 'timer',
              task: '오르기 전 점검을 하고, 보조 친구와 번갈아 매트 위 낮은 벽에서 가로 이동을 세 번 해요. 옮겨 간 손잡이 수를 적고 스스로 점검해요.',
              teacher: '"보조 친구는 두 손을 오르는 친구 등 높이에 들고, 매트 위에 서요." 기록을 늘리려고 서두르는 학생에게 "손잡이 수보다 세 곳 붙이기가 먼저예요"라고 말한다. 한 번 이동한 뒤에는 꼭 내려와 쉬게 한다.',
              levels: { easy: {}, base: {}, challenge: { stopwatch: true } },
              items: [
                { prompt: '오르기 벽 앞에서 출발 전 확인한 것을 눌러 표시해요.', toolOptions: { safety: ['매트 위에 다른 물건이 없어요', '보조 친구가 두 손을 들고 곁에 섰어요', '손의 땀을 닦았어요', '주머니를 비웠어요'] }, target: { safety: true }, difficulty: 0.1 },
                { prompt: '가로 이동을 세 번 해서, 번마다 옮겨 간 손잡이 수를 적어요.', toolOptions: { fields: [{ label: '1회', unit: '개', max: 30 }, { label: '2회', unit: '개', max: 30 }, { label: '3회', unit: '개', max: 30 }] }, target: { records: true }, levels: { challenge: { toolOptions: { fields: [{ label: '1회', unit: '개', max: 30 }, { label: '2회', unit: '개', max: 30 }, { label: '3회', unit: '개', max: 30 }, { label: '3회에 걸린 시간', unit: '초', max: 300 }] } } }, difficulty: 0.15 },
                { prompt: '가로 이동을 마치고 해낸 것을 스스로 점검해 표시해요.', target: { selfCheck: ['늘 손발 세 곳은 벽에 붙어 있었어요', '발이 무릎 높이를 넘지 않았어요', '내려올 때 뛰어내리지 않았어요'] }, difficulty: 0.1 },
              ],
            },
          ],
          {
            teacher: '"세 번 가운데 가장 흔들림이 적었던 때는 무엇이 달랐나요?" 보조 친구가 본 것을 함께 말하게 한다. 출구 1번을 틀린 학생은 손가락으로 붙은 곳을 다시 세게 한다. 손가락과 손목, 종아리를 풀고 마친다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { topic: '몇 곳이 붙어 있나?', slots: ['세 곳이 붙어 안전해요', '두 곳만 붙어 위험해요'], cards: ['왼손과 두 발을 붙이고 오른손을 옮겨요', '두 발을 함께 떼어 옆으로 뛰어요', '두 손과 오른발을 붙이고 왼발을 옮겨요', '왼손과 왼발을 한꺼번에 옮겨요'] }, prompt: '새 자세 카드를 세 곳이 붙은 것과 두 곳만 붙은 것으로 나누어요.', target: { sort: { '세 곳이 붙어 안전해요': ['왼손과 두 발을 붙이고 오른손을 옮겨요', '두 손과 오른발을 붙이고 왼발을 옮겨요'], '두 곳만 붙어 위험해요': ['두 발을 함께 떼어 옆으로 뛰어요', '왼손과 왼발을 한꺼번에 옮겨요'] } }, difficulty: 0.2 },
              { type: 'choice', prompt: '가로 이동 중 팔이 금방 지칠 때 알맞은 것은?', options: ['팔을 굽혀 더 꽉 매달린다', '팔을 펴고 다리 힘으로 버틴다', '손을 번갈아 털며 뛰어 옮긴다'], answer: 1, difficulty: 0.2, explain: '팔을 펴면 뼈가 버텨 주고 다리가 큰 힘을 내요.' },
              { type: 'mood', prompt: '처음 가로 이동을 해 본 오늘 마음은 어땠나요?' },
            ],
          },
        ),
        worksheet: {
          title: '세 곳 붙이고 가로 이동',
          items: [
            { type: 'table', prompt: '가로 이동 기록을 쓰세요.', columns: ['', '1회', '2회', '3회'], cells: [['옮겨 간 손잡이 수', '', '', ''], ['세 곳을 붙였나요(○/△)', '', '', '']] },
            { type: 'choice', prompt: '세 곳이 붙어 있는 자세에 ○ 하세요.', options: ['두 손을 함께 떼어 뛰어 잡기', '두 손과 왼발을 붙이고 오른발 옮기기', '오른손과 오른발을 한꺼번에 옮기기'], answer: '두 손과 왼발을 붙이고 오른발 옮기기' },
            { type: 'table', prompt: '어려웠던 점과 바꾼 자세를 쓰세요.', columns: ['어려웠던 점', '바꾼 자세', '나아졌나요?'], rows: 2 },
            { type: 'short', prompt: '"손잡이를 있는 힘껏 쥐어야 안전하다"는 말에 대한 내 생각을 쓰세요.' },
          ],
          easy: {
            note: '손 둘, 발 둘 가운데 셋은 늘 벽에 붙어 있어요.',
            items: [
              { type: 'choice', prompt: '한 번에 옮기는 손발은 몇 개인가요?', options: ['하나', '둘'], answer: '하나' },
              { type: 'choice', prompt: '팔이 지칠 때는?', options: ['팔을 편다', '팔을 굽힌다'], answer: '팔을 편다' },
              { type: 'draw', prompt: '세 곳을 붙인 내 자세를 그리고 붙은 곳에 ○ 하세요.' },
            ],
          },
        },
        differentiation: {
          easy: '자세 카드를 놓으면 바로 맞는지 보이고 한 장이 미리 놓여 있어요.',
          base: '붙은 곳을 스스로 세어 나누고 확인해요.',
          challenge: '세 번째 이동에 걸린 시간을 기록판의 시간 재기로 직접 재요(빠르기보다 세 곳 붙이기가 먼저예요).',
        },
        teacherNotes: '자주 보이는 어려움: ① 손과 발을 한꺼번에 옮겨 몸이 흔들린다 → "하나만 옮겨요"를 소리 내어 말하며 움직이게 한다. ② 팔을 굽혀 매달려 금방 지친다 → 팔을 펴고 엉덩이를 벽 쪽으로 붙인다. ③ 손잡이를 있는 힘껏 쥐는 것이 안전하다고 여긴다 → 필요한 만큼만 쥐어야 오래 버틴다. 벽 하나에 한 사람만 오르게 하고, 교사는 벽 앞에서 높이(발이 무릎 높이)를 지키게 한다.',
      }),
      // ───────────────────────── 15 ─────────────────────────
      L(15, {
        title: '가장 잘된 원반 던지기의 힘과 방향 되짚기',
        objective: '다섯 번의 원반 던지기 기록에서 가장 잘된 시도를 찾아 그때의 힘과 방향을 말로 적고, 그 세기에 맞추어 다시 던질 수 있다.',
        illustration: art('a child looking at a paper chart of five flying disc throws with one bar glowing near a hula hoop target, holding a disc and a pencil', [
          { motif: 'sun', x: 410, y: 54, s: 0.7 }, { motif: 'star', x: 180, y: 120, s: 0.8 }, { motif: 'tree', x: 60, y: 206 },
          { motif: 'cloud', x: 300, y: 50 }, { motif: 'hills', y: 230 },
          { motif: 'text', x: 260, y: 170, text: '잘된 때를 되짚어요', size: 24 },
        ]),
        safety: [DISC, DISC2, FIELD],
        stages: stages(
          {
            teacher: '"지난번에 가장 잘 던진 때를 기억하나요? 그때 힘을 얼마나 주었나요?" 대부분 "잘 모르겠어요"라고 답한다. "잘된 동작은 그냥 많이 던지면 저절로 또 나올까요?"를 묻고, 오늘은 기록과 메모로 잘된 시도를 찾아 그 느낌을 말로 남긴 뒤 그대로 다시 던져 본다고 알린다.',
            student: '지난 시간 가장 잘 던진 한 번을 떠올려, 그때 몸의 느낌을 한 낱말로 말해 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 민지의 다섯 번 기록 되짚기', minutes: 12, tool: 'chart',
              task: '민지가 15걸음 앞 훌라후프를 향해 던진 다섯 번의 기록(원반이 멈춘 자리와 훌라후프 사이 거리)과 메모를 읽고 물음에 답해요.',
              teacher: '"막대가 짧을수록 좋은 기록이에요. 무엇을 잰 것인지부터 읽어요." 가장 긴 막대를 가장 잘된 것으로 고르는 학생에게 그래프 제목을 다시 읽게 한다. 메모(3회: 알맞게·수평, 4회: 있는 힘껏·기울어짐)를 함께 보게 한다.',
              options: { type: 'bar', mode: 'read', title: '훌라후프와 원반 사이 거리(m)', unit: 'm', xLabel: '시도', yLabel: '거리(m)', max: 6, scale: 1, data: [['1회', 5], ['2회', 3], ['3회', 1], ['4회', 6], ['5회', 2]] },
              levels: { easy: { showValues: true }, base: {}, challenge: { revealAfterCheck: true } },
              items: [
                { prompt: '훌라후프에 가장 가깝게 멈춘, 가장 잘된 시도를 골라요.', toolOptions: { question: '가장 잘된 시도는?', choices: ['1회', '2회', '3회', '4회', '5회'], why: ['1회는 5m나 떨어졌어요.', '2회는 3m 떨어졌어요.', null, '4회는 6m로 가장 멀어요.', '5회는 2m 떨어졌어요.'] }, target: { pick: 2 }, difficulty: 0.15 },
                { prompt: '가장 먼 시도와 가장 가까운 시도는 몇 m 차이가 나나요? 수를 넣어요.', target: { value: 5 }, difficulty: 0.25 },
                { prompt: '메모를 보면 3회는 "알맞게, 원반 수평", 4회는 "있는 힘껏, 원반 기울어짐"이에요. 4회가 빗나간 까닭을 골라요.', toolOptions: { question: '4회가 빗나간 까닭은?', choices: ['힘을 너무 주어 원반이 기울었다', '바람이 전혀 없었다', '훌라후프가 움직였다'], why: [null, '바람이 없었던 것은 빗나간 까닭이 되지 않아요.', '메모에 훌라후프 이야기는 없어요.'] }, target: { pick: 0 }, difficulty: 0.2,
                  conclude: '잘된 때와 안된 때의 힘·원반 모양을 견주어 적어 두어야 다음에 같은 동작을 찾아 쓸 수 있어요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 잘된 세기로 다시 다섯 번', minutes: 14, tool: 'timer',
              task: '되짚기 차례를 세우고, 나도 다섯 번 던져 가장 잘된 시도의 힘을 말로 적은 뒤 그 세기로 다시 다섯 번 던져요. 두 기록을 적고 스스로 점검해요.',
              teacher: '"잘된 때의 힘을 \'공을 굴리듯\', \'팔 반만\'처럼 내 말로 적어요." 말로 적은 세기를 짝에게 보여 주고 다시 던질 때 짝이 그 말을 읽어 준다. 두 기록이 비슷하거나 줄어도 무엇을 바꿀지 찾는 것이 오늘의 목표라고 말한다.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '잘된 시도를 되짚는 차례대로 카드를 놓아요.', toolOptions: { cards: ['그때의 힘과 방향을 말로 적기', '다섯 번 던지고 기록하기', '그 세기로 다시 다섯 번 던지기', '가장 잘된 시도 고르기'] }, target: { order: ['다섯 번 던지고 기록하기', '가장 잘된 시도 고르기', '그때의 힘과 방향을 말로 적기', '그 세기로 다시 다섯 번 던지기'] }, levels: { easy: { state: { order: ['다섯 번 던지고 기록하기', '그때의 힘과 방향을 말로 적기', '그 세기로 다시 다섯 번 던지기', '가장 잘된 시도 고르기'] } } }, difficulty: 0.15,
                  hints: ['기록이 있어야 잘된 시도를 고를 수 있고, 고른 시도가 있어야 그 느낌을 적을 수 있어요.', '말로 적는 일과 다시 던지는 일 가운데 무엇이 먼저 와야 다시 던질 때 쓸 수 있을지 생각해 보세요.'] },
                { prompt: '처음 다섯 번과 다시 던진 다섯 번에서 훌라후프에 들어간 횟수를 적어요.', toolOptions: { fields: [{ label: '처음 다섯 번', unit: '번', max: 5 }, { label: '다시 다섯 번', unit: '번', max: 5 }] }, target: { records: true }, levels: { challenge: { toolOptions: { fields: [{ label: '처음 다섯 번', unit: '번', max: 5 }, { label: '다시 다섯 번', unit: '번', max: 5 }, { label: '늘거나 준 횟수', unit: '번', max: 5 }] } } }, difficulty: 0.15 },
                { prompt: '되짚어 다시 던진 것을 스스로 점검해 표시해요.', target: { selfCheck: ['가장 잘된 시도의 힘 세기를 내 말로 적었어요', '다시 던질 때 적은 말을 떠올리며 던졌어요', '빗나간 시도의 까닭을 하나 찾았어요'] }, difficulty: 0.1 },
              ],
            },
          ],
          {
            teacher: '"내가 적은 힘의 말을 짝에게 들려주세요. 짝도 그 말대로 던질 수 있을까요?" 두세 학생의 말을 칠판에 적는다. 출구 1번에서 가장 긴 막대를 고른 학생은 그래프 제목을 다시 읽게 한다.',
            exitTicket: [
              { type: 'tool', tool: 'chart', options: { type: 'bar', mode: 'read', title: '훌라후프와 원반 사이 거리(m)', unit: 'm', max: 6, scale: 1, data: [['1회', 4], ['2회', 2], ['3회', 5], ['4회', 3]], question: '가장 잘된 시도는?', choices: ['1회', '2회', '3회', '4회'] }, prompt: '준호의 네 번 기록이에요. 훌라후프에 가장 가깝게 멈춘 시도를 골라요.', target: { pick: 1 }, difficulty: 0.15 },
              { type: 'choice', prompt: '잘된 동작을 다시 하려면 어떻게 하는 것이 좋을까요?', options: ['아무 생각 없이 많이 던진다', '잘된 때의 힘과 방향을 말로 적고 떠올리며 던진다', '잘된 때는 잊고 새로 던진다'], answer: 1, difficulty: 0.2, explain: '잘된 동작도 되짚어 두어야 다시 찾아 쓸 수 있어요.' },
              { type: 'short', prompt: '오늘 가장 잘된 시도의 힘을 내 말로 쓰세요.' },
            ],
          },
        ),
        worksheet: {
          title: '잘된 때를 되짚어요',
          items: [
            { type: 'table', prompt: '내 다섯 번 기록과 메모를 쓰세요.', columns: ['시도', '들어갔나요(○/×)', '힘(살살·알맞게·힘껏)', '원반 모양'], cells: [['1회', '', '', ''], ['2회', '', '', ''], ['3회', '', '', ''], ['4회', '', '', ''], ['5회', '', '', '']] },
            { type: 'figure', prompt: '민지의 기록 그래프에서 가장 잘된 시도에 ○ 하세요.', tool: 'chart', options: { type: 'bar', mode: 'read', title: '훌라후프와 원반 사이 거리(m)', unit: 'm', max: 6, scale: 1, data: [['1회', 5], ['2회', 3], ['3회', 1], ['4회', 6], ['5회', 2]] }, figures: [{ state: {}, caption: '막대가 짧을수록 가까워요' }], answer: '3회' },
            { type: 'short', prompt: '가장 잘된 시도의 힘과 방향을 내 말로 쓰세요.' },
            { type: 'short', prompt: '"잘된 동작은 되풀이하면 저절로 나온다"는 말에 대한 내 생각을 쓰세요.' },
          ],
          easy: {
            note: '이 그래프는 막대가 짧을수록 좋은 기록이에요.',
            items: [
              { type: 'choice', prompt: '거리 2m와 5m 가운데 더 잘된 것은?', options: ['2m', '5m'], answer: '2m' },
              { type: 'short', prompt: '잘 던졌을 때의 느낌을 한 낱말로 쓰세요.' },
              { type: 'draw', prompt: '잘 던졌을 때 원반이 날아간 모양을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '그래프 막대 위에 값이 보이고, 되짚기 차례 첫 카드가 미리 놓여 있어요.',
          base: '그래프 눈금을 읽고 차례를 스스로 세워요.',
          challenge: '그래프 값은 맞힌 뒤에만 보이고, 기록판에 늘거나 준 횟수를 셈해 적는 칸이 더해져요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 막대가 길수록 잘된 기록이라고 읽는다 → 무엇을 잰 그래프인지 제목부터 읽는다. ② 잘된 동작은 되풀이하면 저절로 나온다고 여긴다 → 잘된 때의 느낌을 말로 남기고 다시 쓰게 한다. ③ 다시 던진 기록이 줄면 실망한다 → 무엇을 바꿨는지 찾는 것이 목표라고 말한다. 던지기는 같은 방향으로 하고 원반 줍기는 신호에 맞춘다.',
      }),
      // ───────────────────────── 16 ─────────────────────────
      L(16, {
        title: '기록 보고 다음 시도의 힘 정해 다시 오르고 던지기',
        objective: '지난 기록에서 고칠 점을 찾아 다음 시도에서 한 가지만 바꾸는 계획을 세우고, 오르기와 원반 던지기에 적용해 결과를 견줄 수 있다.',
        illustration: art('a child with a notebook planning one change next to a low climbing wall and a flying disc target, with arrows from last try to next try', [
          { motif: 'mountain', x: 110, y: 180, s: 0.8 }, { motif: 'star', x: 360, y: 120, s: 0.8 }, { motif: 'cloud', x: 240, y: 50 },
          { motif: 'hills', y: 232 },
          { motif: 'text', x: 240, y: 112, text: '하나만 바꿔 다시', size: 26 },
        ]),
        safety: [CLIMB, CLIMB2, DISC],
        stages: stages(
          {
            teacher: '"지난 시간 다시 던졌을 때 무엇을 바꾸었나요?" 대답을 듣고 "힘도 바꾸고 서는 곳도 바꾸고 손 모양도 바꿨다면, 무엇 때문에 좋아졌는지 알 수 있을까요?"를 묻는다. 오늘은 기록을 보고 한 가지만 바꾸는 계획을 세워 원반과 오르기에 다시 해 본다고 알린다.',
            student: '지난 기록에서 가장 아쉬웠던 점 하나를 골라, 다음에 바꿀 한 가지를 짝에게 말해 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 기록에 맞는 다음 계획 세우기', minutes: 12, tool: 'mindmap',
              task: '지난 기록마다 다음 시도 계획을 잇고, 되짚는 연습과 되풀이만 하는 연습을 가려요. 내 기록을 보고 바꿀 한 가지를 활동지에 적어요.',
              teacher: '"목표보다 늘 짧았다면 무엇을 바꿀까요?" 기록의 모양(짧음·넘침·한쪽으로 빗나감)에 따라 바꿀 것이 다르다는 것을 짚는다. 여러 가지를 한꺼번에 바꾸려는 학생에게 하나만 고르게 한다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '지난 원반 기록마다 알맞은 다음 시도 계획을 이어요.', toolOptions: { mode: 'match', topic: '다음엔 이렇게', slots: [{ id: 'short', label: '다섯 번 모두 목표보다 짧았어요' }, { id: 'over', label: '다섯 번 모두 목표를 넘어갔어요' }, { id: 'left', label: '거리는 맞는데 늘 왼쪽으로 빗나갔어요' }], cards: ['몸통 비틀기를 조금 더 보태요', '손목 힘을 조금 줄여요', '어깨가 목표를 바로 향하게 서요'] }, target: { match: { short: '몸통 비틀기를 조금 더 보태요', over: '손목 힘을 조금 줄여요', left: '어깨가 목표를 바로 향하게 서요' } }, levels: { easy: { state: { at: { '몸통 비틀기를 조금 더 보태요': 0 } } } }, difficulty: 0.2 },
                { prompt: '연습 방법을 되짚고 고치는 연습과 되풀이만 하는 연습으로 나누어요.', toolOptions: { topic: '어떤 연습일까?', slots: ['되짚고 고치는 연습', '되풀이만 하는 연습'], cards: ['빗나간 까닭을 말하고 하나만 바꿔 던지기', '잘된 때의 느낌을 짝에게 말로 설명하기', '같은 실수를 그대로 열 번 던지기', '기록 없이 그냥 많이 던지기'] }, target: { sort: { '되짚고 고치는 연습': ['빗나간 까닭을 말하고 하나만 바꿔 던지기', '잘된 때의 느낌을 짝에게 말로 설명하기'], '되풀이만 하는 연습': ['같은 실수를 그대로 열 번 던지기', '기록 없이 그냥 많이 던지기'] } }, levels: { easy: { state: { at: { '빗나간 까닭을 말하고 하나만 바꿔 던지기': 0 } } } }, difficulty: 0.15 },
                { prompt: '다음 시도 계획을 세울 때 알맞은 것만 골라요.', toolOptions: { mode: 'pick', topic: '계획 세우기', cards: ['한 번에 한 가지만 바꿔요', '바꾼 뒤 결과를 기록해 견주어요', '여러 가지를 한꺼번에 바꿔요', '잘됐던 때는 생각하지 않아요'] }, target: { pick: ['한 번에 한 가지만 바꿔요', '바꾼 뒤 결과를 기록해 견주어요'] }, levels: { challenge: { prompt: '다음 시도 계획을 세울 때 알맞은 것만 골라요. 그럴듯한 함정 카드가 있어요.', toolOptions: { cards: ['한 번에 한 가지만 바꿔요', '바꾼 뒤 결과를 기록해 견주어요', '여러 가지를 한꺼번에 바꿔요', '잘됐던 때는 생각하지 않아요', '많이 던지기만 하면 저절로 좋아져요'] } } }, difficulty: 0.2,
                  conclude: '한 가지만 바꾸고 기록해야 무엇이 좋아지게 했는지 알 수 있어요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 오르기에 계획 적용하기', minutes: 14, tool: 'timer',
              task: '팔이 쉬도록 오르기 30초, 쉬기 60초 구간을 맞추고, 지난 시간 기록과 오늘 바꾼 한 가지로 다시 이동한 기록을 적어요. 마치고 스스로 점검해요.',
              teacher: '"쉬는 시간이 오르는 시간보다 긴 까닭은 무엇일까요?" 팔 근육이 회복할 시간이 필요하다는 것을 짚는다. 바꾼 한 가지(팔 펴기·발 먼저 옮기기 등)를 보조 친구에게 미리 말하고, 보조 친구가 그 점만 봐 준다.',
              levels: { easy: { workStep: 10, restStep: 30 }, base: { workStep: 10, restStep: 10 }, challenge: { workStep: 5, restStep: 5, showTotal: false } },
              items: [
                { prompt: '오르기 30초, 쉬기 60초를 3번 하도록 타이머를 맞춰요.', toolOptions: { plan: { work: 60, rest: 30, rounds: 2 } }, target: { plan: { work: 30, rest: 60, rounds: 3 } }, difficulty: 0.2 },
                { prompt: '지난 시간 가장 좋았던 기록과 오늘 바꾼 방법으로 이동한 손잡이 수를 적어요.', toolOptions: { fields: [{ label: '지난 시간 가장 좋은 기록', unit: '개', max: 30 }, { label: '오늘 1회', unit: '개', max: 30 }, { label: '오늘 2회', unit: '개', max: 30 }] }, target: { records: true }, difficulty: 0.15 },
                { prompt: '계획을 적용해 본 것을 스스로 점검해 표시해요.', target: { selfCheck: ['바꿀 것을 한 가지만 정했어요', '보조 친구에게 바꿀 점을 미리 말했어요', '쉬는 시간에 팔을 털며 쉬었어요'] }, difficulty: 0.1 },
              ],
            },
          ],
          {
            teacher: '"한 가지만 바꾸었더니 무엇을 알게 되었나요?" 좋아진 학생과 그대로인 학생 모두에게 다음에 바꿀 것을 묻는다. 출구 1번을 틀린 학생은 기록 모양(짧음·넘침)을 다시 읽게 한다. 팔과 손가락을 털고 늘이며 마친다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '다음엔 이렇게', slots: [{ id: 'arm', label: '세 번 모두 팔이 먼저 지쳤어요' }, { id: 'reach', label: '먼 손잡이에서 늘 멈췄어요' }], cards: ['팔을 펴고 다리로 버텨요', '발을 먼저 옮겨 몸을 가까이 가져가요'] }, prompt: '지난 오르기 기록마다 다음 계획을 이어요.', target: { match: { arm: '팔을 펴고 다리로 버텨요', reach: '발을 먼저 옮겨 몸을 가까이 가져가요' } }, difficulty: 0.2 },
              { type: 'choice', prompt: '다음 시도 계획으로 가장 알맞은 것은?', options: ['힘·서는 곳·손 모양을 모두 바꾼다', '기록을 보고 한 가지만 바꾼다', '아무것도 바꾸지 않고 많이 한다'], answer: 1, difficulty: 0.15, explain: '한 가지만 바꿔야 무엇 때문에 달라졌는지 알 수 있어요.' },
              { type: 'short', prompt: '오늘 바꾼 한 가지와 그 결과를 쓰세요.' },
            ],
          },
        ),
        worksheet: {
          title: '하나만 바꿔 다시',
          items: [
            { type: 'table', prompt: '지난 기록과 바꿀 한 가지를 쓰세요.', columns: ['활동', '지난 기록', '바꿀 한 가지', '오늘 기록'], cells: [['원반 던지기', '', '', ''], ['가로 이동', '', '', '']] },
            { type: 'choice', prompt: '다섯 번 모두 목표를 넘어갔을 때 바꿀 것에 ○ 하세요.', options: ['손목 힘을 조금 줄인다', '몸통 비틀기를 더 보탠다', '눈을 감고 던진다'], answer: '손목 힘을 조금 줄인다' },
            { type: 'blank', prompt: '전체 시간을 구하세요.', text: '오르기 30초, 쉬기 60초를 3번 하면 전체 시간은 ___초예요.', answer: '210' },
            { type: 'short', prompt: '한 번에 한 가지만 바꾸는 까닭을 쓰세요.' },
          ],
          easy: {
            note: '목표보다 짧으면 힘을 조금 더, 넘어가면 조금 덜.',
            items: [
              { type: 'choice', prompt: '목표보다 늘 짧았다면?', options: ['힘을 조금 더 보탠다', '힘을 줄인다'], answer: '힘을 조금 더 보탠다' },
              { type: 'short', prompt: '다음에 바꿀 한 가지를 쓰세요.' },
              { type: 'draw', prompt: '바꾼 자세를 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드를 놓으면 바로 맞는지 보이고, 타이머의 쉬는 시간이 30초씩 움직여요.',
          base: '스스로 잇고 나눈 뒤 확인하고, 타이머를 10초씩 맞춰요.',
          challenge: '"많이 던지기만 하면 좋아진다" 같은 함정 카드를 가려내고, 타이머를 5초씩, 전체 시간 없이 맞춰요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 잘된 동작은 되풀이하면 저절로 나온다고 여긴다 → 되짚는 연습과 되풀이만 하는 연습을 견준다. ② 여러 가지를 한꺼번에 바꾼다 → 한 가지만 고르게 하고 보조 친구가 그것만 봐 준다. ③ 쉬는 시간을 줄이려 한다 → 팔 근육이 회복할 시간이 필요하다. 오르기 구간 동안 교사는 벽 앞에서 높이와 세 곳 붙이기를 본다.',
      }),
      // @@MORE@@
    ],
  });
})();
