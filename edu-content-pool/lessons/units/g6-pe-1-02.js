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
            { type: 'figure', wide: true, prompt: '구간 타이머를 보고 걷기·쉬기·횟수를 빈칸에 쓰세요.', tool: 'timer', options: { plan: { work: 120, rest: 30, rounds: 3 } }, figures: [{ state: {}, caption: '걷기 ___초, 쉬기 ___초, ___번' }], answer: '120, 30, 3' },
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
            { type: 'figure', wide: true, prompt: '지도에서 스키를 타기 알맞은 곳에 ○, 카누를 탈 곳에 △ 하세요.', tool: 'map', options: { mode: 'terrain', grid: [6, 4], heights: [[3, 4, 3, 1, 0, -1], [2, 3, 2, 1, 0, -1], [1, 1, 1, 0, 0, -1], [0, 0, 0, 0, 0, -1]], rivers: [[[2, 1], [2, 2], [3, 2], [4, 2]]], places: [{ name: '우리 동네', icon: 'city', at: [0, 3] }] }, figures: [{ state: {}, caption: '○ 스키, △ 카누' }], answer: '○ 가장 높은 땅, △ 강이 흐르는 칸' },
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
            { type: 'figure', wide: true, prompt: '학교 지도에서 "정문에서 서쪽으로 한 칸"인 곳에 ○ 하세요.', tool: 'map', options: SCHOOL, figures: [{ state: {}, caption: '정문에서 서쪽으로 한 칸' }], answer: '정문 왼쪽 칸' },
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
            { type: 'figure', wide: true, prompt: '그래프를 보고 물음에 답하세요.', tool: 'chart', options: { type: 'line', mode: 'read', title: '화단 둘레 맨땅 길의 길이', unit: 'm', max: 6, scale: 3, data: [['1주', 0], ['2주', 1], ['3주', 3], ['4주', 6]] }, figures: [{ state: {}, caption: '3주와 4주 사이에 ___m 늘었어요.' }], answer: '3' },
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
            { type: 'choice', prompt: '원반을 던질 때 쓰는 팔의 관절 세 곳이 모두 들어 있는 것에 ○ 하세요.', options: ['어깨, 팔꿈치, 손목', '허리, 무릎, 발목', '어깨, 무릎, 손목'], answer: '어깨, 팔꿈치, 손목' },
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
            { type: 'figure', wide: true, prompt: '민지의 기록 그래프에서 가장 잘된 시도에 ○ 하세요.', tool: 'chart', options: { type: 'bar', mode: 'read', title: '훌라후프와 원반 사이 거리(m)', unit: 'm', max: 6, scale: 2, data: [['1회', 5], ['2회', 3], ['3회', 1], ['4회', 6], ['5회', 2]] }, figures: [{ state: {}, caption: '막대가 짧을수록 가까워요' }], answer: '3회' },
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
      // ───────────────────────── 17 ─────────────────────────
      L(17, {
        title: '운동장과 학교 숲 걸음으로 재고 알맞은 활동 고르기',
        objective: '운동장과 학교 숲의 넓이·바닥·사람 통행을 살펴 적고, 장소 조건에 따라 알맞은 활동을 고르는 기준 두 가지를 말할 수 있다.',
        illustration: art('two children pacing out a wide dirt school field and a narrow forest path with footprints, holding a clipboard checklist', [
          { motif: 'tree', x: 70, y: 196 }, { motif: 'tree', x: 120, y: 206, s: 0.8 }, { motif: 'sun', x: 410, y: 54, s: 0.7 },
          { motif: 'cloud', x: 260, y: 48 }, { motif: 'hills', y: 230 },
          { motif: 'text', x: 280, y: 130, text: '장소를 먼저 살펴요', size: 24 },
        ]),
        safety: [FIELD, BOUND, SPACE],
        stages: stages(
          {
            teacher: '"운동장 가운데에서 원반을 던지는 것과 학교 숲 나무 사이에서 던지는 것, 무엇이 다를까요?" 대답을 받아 칠판에 넓이·바닥·나무·사람을 적는다. "장소마다 조건이 다르니, 활동을 먼저 정하고 장소를 고르는 것이 아니라 장소를 먼저 살펴야 해요." 오늘은 두 장소를 걸음으로 재고 조건을 적은 뒤 활동을 고르는 기준을 만든다고 알린다.',
            student: '운동장과 학교 숲에서 각각 해 보고 싶은 활동을 하나씩 떠올려 보고, 왜 그곳인지 말해 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 두 장소 걸음으로 재고 조건 적기', minutes: 13, tool: 'timer',
              task: '짝과 출발 전 점검을 하고, 운동장 가로 길이와 숲길 길이를 걸음 수로 재요. 바닥 상태와 지나다니는 사람도 활동지에 적어요.',
              teacher: '"걸음 수를 셀 때는 보통 걸음으로, 뛰지 않고 세요." 짝 한 사람은 걷고 한 사람은 센다. 숲길에서는 길 밖으로 나가지 않는다. 다녀오면 "어느 곳이 넓었나요? 바닥은 어땠나요?"를 묻고 조건을 칠판 표에 모은다.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '장소를 재러 나가기 전에 확인한 것을 눌러 표시해요.', toolOptions: { safety: ['활동 구역과 모일 곳을 들었어요', '바닥에 위험한 물건이 없는지 보며 걸을게요', '숲길에서는 길로만 걸을게요'] }, target: { safety: true }, difficulty: 0.1 },
                { prompt: '짝과 운동장 가로와 숲길을 보통 걸음으로 걸으며 재요. 다 쟀으면 표시해요.', free: true, toolOptions: { doneLabel: '짝과 두 장소를 걸음으로 쟀어요' }, difficulty: 0.1 },
                { prompt: '운동장 가로와 숲길을 잰 걸음 수를 적어요.', toolOptions: { fields: [{ label: '운동장 가로', unit: '걸음', max: 300 }, { label: '숲길 길이', unit: '걸음', max: 300 }] }, target: { records: true }, levels: { challenge: { toolOptions: { fields: [{ label: '운동장 가로', unit: '걸음', max: 300 }, { label: '숲길 길이', unit: '걸음', max: 300 }, { label: '숲길 가장 좁은 곳 폭', unit: '걸음', max: 30 }] } } }, difficulty: 0.15 },
              ],
            },
            {
              id: 'a2', title: '활동 2. 장소 조건으로 활동 고르는 기준 세우기', minutes: 13, tool: 'mindmap',
              task: '장소 조건에 알맞은 활동을 잇고, 장소에 생긴 문제가 어떤 기준에 걸리는지 이어요. 활동을 고르는 기준이 되는 것만 골라요.',
              teacher: '"이 장소에 사람이 많이 지나다니면, 원반 던지기는 괜찮을까요?" 넓이·바닥·사람 통행 세 기준을 칠판에 남긴다. "친구들이 좋아하는 활동"을 기준으로 드는 학생에게 "좋아해도 장소가 맞지 않으면 다칠 수 있어요. 장소 조건이 먼저예요"라고 짚는다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '장소 조건에 가장 알맞은 활동을 이어요.', toolOptions: { mode: 'match', topic: '이 장소엔 이 활동', slots: [{ id: 'field', label: '넓고 평평한 흙 운동장, 지나는 사람 없음' }, { id: 'forest', label: '나무가 많고 길이 좁은 숲' }, { id: 'hall', label: '매트를 깐 강당 오르기 벽' }], cards: ['원반 멀리 던지기', '한 줄로 숲길 걷기', '낮은 높이 가로 이동'] }, target: { match: { field: '원반 멀리 던지기', forest: '한 줄로 숲길 걷기', hall: '낮은 높이 가로 이동' } }, levels: { easy: { state: { at: { '원반 멀리 던지기': 0 } } } }, difficulty: 0.15,
                  hints: ['원반이 날아갈 자리, 한 줄로 걸을 자리, 손발을 걸 자리가 어디에 있는지 떠올려요.', '좁은 숲에서 원반을 멀리 던지면 나무에 걸리고, 넓은 운동장에는 손잡이 벽이 없어요.', '넓은 운동장은 원반, 좁은 숲은 한 줄 걷기, 매트 깐 벽은 가로 이동이에요.'] },
                { prompt: '장소에 생긴 문제가 어떤 기준에 걸리는지 이어요.', toolOptions: { mode: 'match', topic: '어떤 기준일까?', slots: [{ id: 'puddle', label: '운동장 여기저기 물웅덩이가 있어요' }, { id: 'crowd', label: '점심시간이라 공 차는 학생이 많아요' }, { id: 'small', label: '마당이 좁아 원반이 담을 넘어가요' }], cards: ['바닥 상태', '사람 통행', '넓이'] }, target: { match: { puddle: '바닥 상태', crowd: '사람 통행', small: '넓이' } }, difficulty: 0.2,
                  hints: ['문제가 땅에 있는지, 사람에게 있는지, 크기에 있는지 갈라 보세요.', '물웅덩이는 발밑, 공 차는 학생은 둘레의 사람, 담을 넘는 원반은 장소의 크기 문제예요.', '물웅덩이는 바닥 상태, 공 차는 학생은 사람 통행, 담을 넘는 원반은 넓이에 걸려요.'] },
                { prompt: '장소에 알맞은 활동을 고르는 기준이 되는 카드만 골라요.', toolOptions: { mode: 'pick', topic: '활동 고르는 기준', cards: ['바닥이 그 활동에 맞나요?', '둘레에 사람이 지나다니지 않나요?', '친구들이 가장 좋아하는 활동인가요?', '어제 했던 활동인가요?'] }, target: { pick: ['바닥이 그 활동에 맞나요?', '둘레에 사람이 지나다니지 않나요?'] }, levels: { challenge: { prompt: '장소에 알맞은 활동을 고르는 기준이 되는 카드만 골라요. 그럴듯한 함정 카드가 있어요.', toolOptions: { cards: ['바닥이 그 활동에 맞나요?', '둘레에 사람이 지나다니지 않나요?', '활동하기에 넓이가 넉넉한가요?', '친구들이 가장 좋아하는 활동인가요?', '어제 했던 활동인가요?', '장비가 가장 비싼 활동인가요?'] }, target: { pick: ['바닥이 그 활동에 맞나요?', '둘레에 사람이 지나다니지 않나요?', '활동하기에 넓이가 넉넉한가요?'] } } }, difficulty: 0.2,
                  hints: ['장소를 살펴서 알 수 있는 것인지, 사람의 마음이나 지난 일인지 갈라 보세요.', '좋아하는 마음과 어제 한 일은 장소를 보지 않아도 알 수 있어요.', '바닥과 사람 통행(도전은 넓이까지)이 장소 조건의 기준이에요.'],
                  conclude: '활동은 장소의 넓이·바닥·사람 통행을 먼저 살펴 고르고, 좋아하는 마음은 그다음이에요.' },
              ],
            },
          ],
          {
            teacher: '"오늘 잰 숲길은 운동장보다 좁았어요. 그럼 숲길에서 원반 멀리 던지기를 하면 어떤 일이 생길까요?" 두세 명의 대답을 듣고 기준 세 가지를 다시 읽는다. 출구 1번을 틀린 학생에게는 칠판의 조건 표를 다시 보게 한다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '어떤 기준일까?', slots: [{ id: 'gravel', label: '자갈이 깔려 넘어지면 다치기 쉬워요' }, { id: 'path', label: '등굣길이라 아침마다 사람이 많아요' }], cards: ['바닥 상태', '사람 통행'] }, prompt: '새 장소의 문제가 어떤 기준에 걸리는지 이어요.', target: { match: { gravel: '바닥 상태', path: '사람 통행' } }, difficulty: 0.15 },
              { type: 'choice', prompt: '활동 장소를 고를 때 가장 먼저 할 일은?', options: ['친구들이 좋아하는 활동부터 정한다', '장소의 넓이·바닥·사람 통행을 살핀다', '가장 가까운 곳으로 바로 간다'], answer: 1, difficulty: 0.15, explain: '장소 조건을 먼저 살펴야 그곳에 맞는 활동을 안전하게 고를 수 있어요.' },
              { type: 'short', prompt: '학교 숲에 알맞은 활동 하나와 그 까닭을 쓰세요.' },
            ],
          },
        ),
        worksheet: {
          title: '장소를 먼저 살펴요',
          items: [
            { type: 'table', prompt: '두 장소를 살펴 쓰세요.', columns: ['장소', '걸음 수', '바닥 상태', '지나다니는 사람', '알맞은 활동'], cells: [['운동장', '', '', '', ''], ['학교 숲', '', '', '', '']] },
            { type: 'choice', prompt: '물웅덩이가 많은 운동장은 어떤 기준에 걸리나요?', options: ['넓이', '바닥 상태', '사람 통행'], answer: '바닥 상태' },
            { type: 'check', prompt: '활동을 고르는 기준이 되는 것에 모두 ✓ 하세요.', options: ['바닥이 활동에 맞나요?', '친구가 좋아하나요?', '지나다니는 사람이 없나요?', '넓이가 넉넉한가요?'], answer: '바닥, 사람 통행, 넓이' },
            { type: 'short', prompt: '숲길에서 원반을 멀리 던지면 안 되는 까닭을 쓰세요.' },
          ],
          easy: {
            note: '장소를 볼 때: 넓이, 바닥, 사람.',
            items: [
              { type: 'choice', prompt: '원반 멀리 던지기에 알맞은 곳은?', options: ['넓은 운동장', '좁은 숲길'], answer: '넓은 운동장' },
              { type: 'blank', prompt: '내가 잰 걸음 수를 쓰세요.', text: '운동장 가로는 ___걸음이에요.' },
              { type: 'draw', prompt: '학교 숲길의 모양을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드를 놓으면 바로 맞는지 보이고, 첫 짝 카드가 미리 놓여 있어요.',
          base: '두 장소를 재고 기준을 스스로 이어 확인해요.',
          challenge: '숲길의 가장 좁은 폭도 재고, 함정 카드가 섞인 기준 고르기에서 세 기준을 모두 찾아요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 하고 싶은 활동을 먼저 정하고 장소를 끼워 맞춘다 → 장소 조건 표를 먼저 채우게 한다. ② 걸음 수를 뛰면서 센다 → 보통 걸음으로 다시 재게 한다. ③ 정리는 활동 뒤에 남는 일이라고 여긴다 → 다음 시간에 정리까지가 활동인 까닭을 다룬다고 미리 알린다. 재러 나갈 때 교사는 운동장과 숲길 사이에 서서 두 곳을 함께 본다.',
      }),
      // ───────────────────────── 18 ─────────────────────────
      L(18, {
        title: '원반 놀이 뒤 정리까지 해서 운동장 되돌려 놓기',
        objective: '정리를 하지 않으면 생기는 일을 들어 정리까지가 활동인 까닭을 설명하고, 원반 놀이 뒤 정한 차례대로 장비를 정리할 수 있다.',
        illustration: art('children gathering flying discs and cones into a basket on a clean school field at sunset, with a counting board showing taken and returned', [
          { motif: 'sun', x: 400, y: 70, s: 0.9 }, { motif: 'cloud', x: 200, y: 50 }, { motif: 'tree', x: 60, y: 210 },
          { motif: 'hills', y: 230 },
          { motif: 'text', x: 240, y: 130, text: '정리까지가 활동', size: 26 },
        ]),
        safety: [DISC, DISC2, TOOL],
        stages: stages(
          {
            teacher: '원반 하나가 운동장 구석 풀숲에 며칠째 놓여 있는 사진을 보여 준다. "이 원반은 누가 정리해야 했을까요? 다음 반은 무엇이 불편했을까요?" 대답을 받아 "놀이가 끝났다고 활동이 끝난 것은 아니에요"라고 말하고, 오늘은 원반 놀이를 한 뒤 정리까지 해서 운동장을 처음처럼 되돌려 놓는다고 알린다.',
            student: '구석에 남은 원반 사진을 보고, 그 원반 때문에 생길 수 있는 일을 하나 말해 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 정리하지 않으면 생기는 일 잇기', minutes: 10, tool: 'mindmap',
              task: '정리하지 않은 행동마다 생기는 일을 잇고, 정리까지가 활동인 까닭을 바르게 말한 카드를 골라요.',
              teacher: '"정리를 왜 하나요?" "선생님이 시켜서요"라는 대답이 나오면 "선생님이 없으면 안 해도 될까요?"라고 되묻는다. 다음 사람의 안전과 장비를 오래 쓰는 것이 까닭이라는 것을 짚는다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '정리하지 않은 행동마다 생기는 일을 이어요.', toolOptions: { mode: 'match', topic: '정리하지 않으면', slots: [{ id: 'disc', label: '원반을 운동장에 두고 들어갔어요' }, { id: 'cone', label: '콘을 세워 둔 채로 들어갔어요' }, { id: 'bottle', label: '빈 물병을 벤치에 두고 갔어요' }], cards: ['다음 반이 원반을 찾느라 시간을 써요', '공 차던 학생이 걸려 넘어질 수 있어요', '쓰레기가 되어 운동장이 더러워져요'] }, target: { match: { disc: '다음 반이 원반을 찾느라 시간을 써요', cone: '공 차던 학생이 걸려 넘어질 수 있어요', bottle: '쓰레기가 되어 운동장이 더러워져요' } }, levels: { easy: { state: { at: { '다음 반이 원반을 찾느라 시간을 써요': 0 } } } }, difficulty: 0.15,
                  hints: ['남겨진 물건이 다음에 그곳을 쓰는 사람에게 어떤 불편이나 위험을 주는지 떠올려요.', '바닥에 세워진 것은 발에 걸리고, 잃어버린 장비는 찾느라 시간이 들어요.', '원반은 찾느라 시간, 콘은 걸려 넘어짐, 물병은 쓰레기와 이어져요.'] },
                { prompt: '정리까지가 활동에 들어가는 까닭을 바르게 말한 카드만 골라요.', toolOptions: { mode: 'pick', topic: '정리까지가 활동인 까닭', cards: ['다음 사람이 바로 안전하게 쓸 수 있어요', '장비를 잃어버리거나 망가뜨리지 않아요', '선생님께 혼나지 않으려고 해요', '정리는 시간이 남을 때만 하면 돼요'] }, target: { pick: ['다음 사람이 바로 안전하게 쓸 수 있어요', '장비를 잃어버리거나 망가뜨리지 않아요'] }, levels: { challenge: { prompt: '정리까지가 활동인 까닭만 골라요. 맞는 듯하지만 까닭이 아닌 카드가 있어요.', toolOptions: { cards: ['다음 사람이 바로 안전하게 쓸 수 있어요', '장비를 잃어버리거나 망가뜨리지 않아요', '선생님께 혼나지 않으려고 해요', '정리는 시간이 남을 때만 하면 돼요', '정리 담당 친구가 따로 있으니 나는 안 해도 돼요'] } } }, difficulty: 0.2,
                  hints: ['선생님이 없어도 정리해야 하는 까닭을 찾아요.', '혼나지 않으려는 것은 까닭이 아니라 걱정이에요. 다음 사람과 장비를 생각해 보세요.', '다음 사람의 안전과 장비를 지키는 두 카드가 까닭이에요.'],
                  conclude: '정리는 다음에 그곳과 장비를 쓸 사람을 위한 일이라서 활동의 마지막 부분이에요.' },
                { prompt: '같은 장소인데 정리를 한 날과 하지 않은 날, 다음 반이 겪을 일을 나누어요.', toolOptions: { topic: '다음 반은?', slots: ['정리한 날', '정리하지 않은 날'], cards: ['오자마자 바로 활동을 시작해요', '장비 수가 맞아 짝마다 하나씩 써요', '흩어진 콘을 먼저 치우느라 늦어요', '모자란 원반 때문에 셋이 하나를 써요'] }, target: { sort: { '정리한 날': ['오자마자 바로 활동을 시작해요', '장비 수가 맞아 짝마다 하나씩 써요'], '정리하지 않은 날': ['흩어진 콘을 먼저 치우느라 늦어요', '모자란 원반 때문에 셋이 하나를 써요'] } }, difficulty: 0.15 },
              ],
            },
            {
              id: 'a2', title: '활동 2. 원반 놀이 하고 차례대로 정리하기', minutes: 16, tool: 'timer',
              task: '짝과 원반 주고받기를 10분 하고, 호루라기가 울리면 정리 차례대로 정리해요. 꺼낸 원반 수와 돌려놓은 원반 수를 적어요.',
              teacher: '"원반은 몇 개 꺼냈나요? 칠판에 적어 둘게요." 놀이가 끝나면 짝끼리 원반을 모으고 모둠 장이 센다. 수가 모자라면 "어디서 놀았는지 떠올려 다 같이 찾아요"라고 말한다. 다 정리한 모둠은 운동장을 한 번 돌아보고 손을 든다.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '짝과 원반을 10분 동안 주고받아요. 다 했으면 표시해요.', free: true, toolOptions: { doneLabel: '짝과 원반을 주고받았어요' }, difficulty: 0.1 },
                { prompt: '원반 정리 카드를 하는 차례대로 놓아요.', toolOptions: { cards: ['모자라면 함께 다시 찾기', '흩어진 원반 모으기', '창고 제자리에 넣기', '모은 수를 꺼낸 수와 견주기'] }, target: { order: ['흩어진 원반 모으기', '모은 수를 꺼낸 수와 견주기', '모자라면 함께 다시 찾기', '창고 제자리에 넣기'] }, levels: { easy: { state: { order: ['흩어진 원반 모으기', '모자라면 함께 다시 찾기', '창고 제자리에 넣기', '모은 수를 꺼낸 수와 견주기'] } } }, difficulty: 0.2,
                  hints: ['앞의 일을 해야만 뒤의 일을 할 수 있는 차례를 찾아요. 모으지 않으면 셀 수 없어요.', '수를 견주어야 모자란지 알 수 있어요. 창고에 넣은 뒤에는 찾으러 가기 어려워요.', '모으기 → 꺼낸 수와 견주기 → 모자라면 다시 찾기 → 창고 제자리에 넣기예요.'] },
                { prompt: '꺼낸 원반 수와 돌려놓은 원반 수를 적어요.', toolOptions: { fields: [{ label: '꺼낸 원반', unit: '개', max: 40 }, { label: '돌려놓은 원반', unit: '개', max: 40 }] }, target: { records: true }, difficulty: 0.1 },
              ],
            },
          ],
          {
            teacher: '"정리를 마친 운동장은 처음과 같아졌나요?" 모둠마다 돌아본 결과를 한 문장씩 듣는다. 출구 1번을 틀린 학생에게는 오늘 셀 때 모자랐던 순간을 떠올리게 한다. 어깨와 손목을 돌리는 정리 운동으로 마친다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '정리하지 않으면', slots: [{ id: 'mat', label: '강당 매트를 펴 둔 채 나갔어요' }, { id: 'torn', label: '찢어진 매트를 말없이 넣어 두었어요' }], cards: ['다음 반이 매트 끝에 걸려 넘어질 수 있어요', '다음 사람이 모르고 쓰다 다칠 수 있어요'] }, prompt: '강당에서 정리하지 않은 행동마다 생기는 일을 이어요.', target: { match: { mat: '다음 반이 매트 끝에 걸려 넘어질 수 있어요', torn: '다음 사람이 모르고 쓰다 다칠 수 있어요' } }, difficulty: 0.15 },
              { type: 'choice', prompt: '원반 12개를 꺼냈는데 모아 보니 10개예요. 먼저 할 일은?', options: ['10개만 창고에 넣고 들어간다', '놀았던 곳을 떠올려 함께 2개를 찾는다', '다음 반이 찾을 것이니 그냥 둔다'], answer: 1, difficulty: 0.15, explain: '꺼낸 수와 맞추어 돌려놓는 것까지가 정리예요.' },
              { type: 'short', prompt: '정리까지가 활동인 까닭을 한 문장으로 쓰세요.' },
            ],
          },
        ),
        worksheet: {
          title: '정리까지가 활동',
          items: [
            { type: 'table', prompt: '오늘 꺼낸 장비와 돌려놓은 장비를 쓰세요.', columns: ['장비', '꺼낸 수', '돌려놓은 수', '같나요(○/×)'], cells: [['원반', '', '', ''], ['콘', '', '', '']] },
            { type: 'table', prompt: '정리 카드에 하는 차례대로 1~4를 쓰세요.', columns: ['카드', '차례'], cells: [['창고 제자리에 넣기', ''], ['흩어진 원반 모으기', ''], ['모자라면 함께 다시 찾기', ''], ['모은 수를 꺼낸 수와 견주기', '']], answer: '모으기 1, 견주기 2, 다시 찾기 3, 넣기 4' },
            { type: 'choice', prompt: '콘을 세워 둔 채 들어가면 생길 수 있는 일에 ○ 하세요.', options: ['다음 사람이 걸려 넘어질 수 있다', '콘이 더 튼튼해진다', '운동장이 넓어진다'], answer: '다음 사람이 걸려 넘어질 수 있다' },
            { type: 'short', prompt: '"정리는 시간이 남을 때만 하면 된다"는 말을 고쳐 쓰세요.' },
          ],
          easy: {
            note: '모으고, 세고, 제자리에.',
            items: [
              { type: 'choice', prompt: '놀이가 끝나면 원반은?', options: ['모아서 제자리에 넣는다', '운동장에 둔다'], answer: '모아서 제자리에 넣는다' },
              { type: 'blank', prompt: '오늘 돌려놓은 원반 수를 쓰세요.', text: '원반 ___개를 돌려놓았어요.' },
              { type: 'draw', prompt: '정리를 마친 운동장을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드를 놓으면 바로 맞는지 보이고, 정리 차례의 첫 카드가 미리 놓여 있어요.',
          base: '정리하지 않으면 생기는 일을 잇고, 정리 차례를 스스로 세워 확인해요.',
          challenge: '"정리 담당이 있으니 나는 안 해도 된다" 같은 함정 카드를 가려내요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 활동이 끝나면 정리는 하지 않아도 되는 일이라고 여긴다 → 정리하지 않은 날 다음 반이 겪는 일을 견준다. ② 정리를 "혼나지 않으려고" 한다고 말한다 → 선생님이 없어도 해야 하는 까닭을 묻는다. ③ 모자란 장비를 그냥 넘긴다 → 꺼낸 수를 칠판에 먼저 적어 두고 돌아온 수와 견주게 한다.',
      }),
      // ───────────────────────── 19 ─────────────────────────
      L(19, {
        title: '학교 지도에 디스크 골프 코스 짜고 시험 던지기',
        objective: '장소 조건(사람 통행·유리창·식물)을 따져 디스크 골프 바구니 자리를 학교 지도에서 정하고, 코스를 시험 삼아 돌며 정리할 사람과 자리까지 계획할 수 있다.',
        illustration: art('a paper school map with three numbered disc golf hoops placed away from windows and paths, children testing a short throw toward a hoop', [
          { motif: 'tree', x: 70, y: 190 }, { motif: 'house', x: 250, y: 170, s: 0.8 }, { motif: 'flower', x: 400, y: 220 },
          { motif: 'cloud', x: 330, y: 50 }, { motif: 'hills', y: 232 },
          { motif: 'text', x: 240, y: 100, text: '우리 학교 디스크 골프', size: 24 },
        ]),
        safety: [DISC, DISC2, BOUND],
        stages: stages(
          {
            teacher: '"디스크 골프는 원반을 바구니(오늘은 훌라후프)에 가장 적은 번 던져 넣는 경기예요." 원반을 한 번 시범으로 던져 훌라후프에 넣는다. "바구니를 본관 유리창 바로 앞에 두면 어떨까요?" 대답을 받아, 오늘은 지난 시간 세운 기준으로 우리 학교 코스를 짜고 시험해 본다고 알린다.',
            student: '바구니를 두면 안 되는 학교 장소를 하나 떠올리고, 왜 안 되는지 말해 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 바구니 자리 후보 따져 보기', minutes: 9, tool: 'mindmap',
              task: '바구니 자리 후보를 코스로 좋은 곳과 안 되는 곳으로 나누고, 안 되는 곳이 어떤 기준에 걸리는지 이어요.',
              teacher: '"나무가 있으면 무조건 안 될까요?" 나무 사이가 넓으면 피해 던지는 재미가 생긴다는 것을 짚고, 사람·유리창·키우는 식물처럼 다치거나 망가질 것이 있는 곳은 피한다고 말한다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '바구니 자리 후보를 코스로 좋은 곳과 안 되는 곳으로 나누어요.', toolOptions: { topic: '바구니를 둘까?', slots: ['코스로 좋아요', '코스로 안 돼요'], cards: ['운동장 가운데 넓은 흙바닥', '나무 사이가 넓은 숲 앞 잔디', '본관 유리창 바로 앞', '아침 등굣길 한가운데', '새싹이 자라는 텃밭 이랑'] }, target: { sort: { '코스로 좋아요': ['운동장 가운데 넓은 흙바닥', '나무 사이가 넓은 숲 앞 잔디'], '코스로 안 돼요': ['본관 유리창 바로 앞', '아침 등굣길 한가운데', '새싹이 자라는 텃밭 이랑'] } }, levels: { easy: { state: { at: { '운동장 가운데 넓은 흙바닥': 0 } } } }, difficulty: 0.2,
                  hints: ['원반이 빗나갔을 때 다치거나 망가질 것이 그 둘레에 있는지 따져요.', '나무는 피해 던지면 되지만, 유리창·사람·새싹은 원반에 맞으면 다쳐요.', '넓은 흙바닥과 나무 사이가 넓은 잔디만 좋고, 유리창 앞·등굣길·텃밭은 안 돼요.'] },
                { prompt: '코스로 안 되는 곳이 어떤 기준에 걸리는지 이어요.', toolOptions: { mode: 'match', topic: '왜 안 될까?', slots: [{ id: 'glass', label: '본관 유리창 바로 앞' }, { id: 'road', label: '아침 등굣길 한가운데' }, { id: 'farm', label: '새싹이 자라는 텃밭 이랑' }], cards: ['원반에 맞으면 깨질 것이 있어요', '사람이 자주 지나다녀요', '밟히면 다치는 식물이 있어요'] }, target: { match: { glass: '원반에 맞으면 깨질 것이 있어요', road: '사람이 자주 지나다녀요', farm: '밟히면 다치는 식물이 있어요' } }, difficulty: 0.15 },
                { prompt: '코스를 짤 때 함께 정해 두어야 할 것만 골라요.', toolOptions: { mode: 'pick', topic: '코스와 함께 정할 것', cards: ['마지막 홀 뒤 장비를 모을 자리', '바구니를 걷어 돌려놓을 사람', '이긴 모둠이 받을 상', '코스 이름을 멋지게 짓기'] }, target: { pick: ['마지막 홀 뒤 장비를 모을 자리', '바구니를 걷어 돌려놓을 사람'] }, difficulty: 0.2,
                  hints: ['경기가 끝난 뒤에 누가 무엇을 하는지도 코스 계획에 들어가요.', '상과 이름은 재미를 더할 뿐, 없어도 코스를 안전하게 쓰고 정리할 수 있어요.', '장비 모을 자리와 바구니 걷을 사람이 꼭 정할 것이에요.'],
                  conclude: '코스 계획에는 바구니 자리뿐 아니라 정리할 자리와 사람까지 들어가요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 학교 지도에 바구니 꽂기', minutes: 7, tool: 'map',
              task: '모둠이 정한 바구니 자리를 학교 지도에 핀으로 꽂아요. 출발한 장소의 칸은 세지 않아요.',
              teacher: '"북쪽은 지도 위쪽이에요. 출발한 칸에서 한 칸 옮겨 간 곳이 1이에요." 다 꽂으면 그 자리가 기준에 맞는지 모둠이 한 번 더 따져 보게 한다.',
              options: SCHOOL,
              levels: { easy: { readout: true }, base: {}, challenge: { names: false } },
              items: [
                { prompt: '1번 홀 바구니는 느티나무 숲에서 동쪽으로 한 칸이에요. 핀을 꽂아요.', target: { from: '느티나무 숲', dir: '동', steps: 1 }, difficulty: 0.1 },
                { prompt: '2번 홀 바구니는 텃밭에서 남쪽으로 한 칸, 텃밭 이랑을 비킨 곳이에요. 핀을 꽂아요.', target: { from: '텃밭', dir: '남', steps: 1 }, difficulty: 0.15 },
                { prompt: '3번 홀 바구니는 화단에서 북쪽으로 두 칸이에요. 핀을 꽂아요.', target: { from: '화단', dir: '북', steps: 2 }, difficulty: 0.2,
                  predict: { q: '화단에서 북쪽으로 두 칸은 느티나무 숲과 어떤 사이일까요?', options: ['바로 아래 칸', '숲과 같은 칸'], answer: 0 },
                  conclude: '출발 칸을 빼고 세면, 화단에서 북쪽 두 칸은 느티나무 숲 바로 아래 칸이에요.' },
              ],
            },
            {
              id: 'a3', title: '활동 3. 코스 시험 던지기와 정리', minutes: 10, tool: 'timer',
              task: '운동장에 훌라후프 세 개를 놓아 코스를 만들고, 모둠이 한 바퀴 시험 삼아 던져요. 홀마다 던진 횟수를 적고 정한 사람이 바구니를 걷어요.',
              teacher: '"앞 모둠이 홀을 떠난 뒤에 던져요." 한 홀에 한 모둠만 있게 한다. 시험 던지기 뒤 "바구니 자리가 너무 가깝거나 멀었나요?"를 물어 다음 시간에 고칠 점을 적게 한다.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '모둠과 세 홀 코스를 한 바퀴 시험 삼아 던져요. 다 돌았으면 표시해요.', free: true, toolOptions: { doneLabel: '모둠과 코스를 한 바퀴 돌았어요' }, difficulty: 0.1 },
                { prompt: '홀마다 바구니에 넣기까지 던진 횟수를 적어요.', toolOptions: { fields: [{ label: '1번 홀', unit: '번', max: 15 }, { label: '2번 홀', unit: '번', max: 15 }, { label: '3번 홀', unit: '번', max: 15 }] }, target: { records: true }, difficulty: 0.1 },
                { prompt: '코스를 짜고 시험한 것을 스스로 점검해 표시해요.', target: { selfCheck: ['바구니 자리를 기준에 맞추어 골랐어요', '앞 모둠이 떠난 뒤에 던졌어요', '정한 사람이 바구니를 걷어 돌려놓았어요'] }, difficulty: 0.1 },
              ],
            },
          ],
          {
            teacher: '"시험해 보니 고칠 홀이 있었나요? 왜 그렇게 생각하나요?" 모둠마다 한 홀씩 말하게 한다. 출구 1번을 틀린 학생에게는 원반이 빗나갔을 때 무엇에 맞을지 떠올리게 한다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { topic: '바구니를 둘까?', slots: ['코스로 좋아요', '코스로 안 돼요'], cards: ['아무도 지나지 않는 뒤뜰 빈터', '급식실 창문 바로 옆', '꽃모종을 심은 화분 줄'] }, prompt: '새 후보를 코스로 좋은 곳과 안 되는 곳으로 나누어요.', target: { sort: { '코스로 좋아요': ['아무도 지나지 않는 뒤뜰 빈터'], '코스로 안 돼요': ['급식실 창문 바로 옆', '꽃모종을 심은 화분 줄'] } }, difficulty: 0.15 },
              { type: 'choice', prompt: '코스 계획에 꼭 들어가야 하는 것은?', options: ['바구니를 걷어 돌려놓을 사람', '코스의 멋진 이름', '이긴 모둠의 상'], answer: 0, difficulty: 0.15, explain: '정리할 사람과 자리까지 정해야 코스 계획이 끝나요.' },
              { type: 'short', prompt: '우리 모둠이 고칠 홀 하나와 고칠 까닭을 쓰세요.' },
            ],
          },
        ),
        worksheet: {
          title: '우리 학교 디스크 골프 코스',
          items: [
            { type: 'figure', wide: true, prompt: '학교 지도에서 "느티나무 숲에서 동쪽으로 한 칸"인 곳에 ① 을 쓰세요.', tool: 'map', options: SCHOOL, figures: [{ state: {}, caption: '바구니 자리' }], answer: '느티나무 숲 오른쪽 칸' },
            { type: 'table', prompt: '시험 던지기 기록을 쓰세요.', columns: ['홀', '던진 횟수', '고칠 점'], cells: [['1번', '', ''], ['2번', '', ''], ['3번', '', '']] },
            { type: 'choice', prompt: '바구니를 두면 안 되는 곳에 ○ 하세요.', options: ['넓은 흙바닥', '유리창 바로 앞', '나무 사이가 넓은 잔디'], answer: '유리창 바로 앞' },
            { type: 'short', prompt: '코스 계획에 정리할 사람을 넣는 까닭을 쓰세요.' },
          ],
          easy: {
            note: '사람, 유리창, 식물이 있는 곳은 피해요.',
            items: [
              { type: 'choice', prompt: '바구니를 두기 좋은 곳은?', options: ['넓은 흙바닥', '등굣길'], answer: '넓은 흙바닥' },
              { type: 'blank', prompt: '1번 홀에서 던진 횟수를 쓰세요.', text: '1번 홀은 ___번 던졌어요.' },
              { type: 'draw', prompt: '우리 코스의 바구니 하나를 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드를 놓으면 바로 맞는지 보이고, 지도에 핀 자리 이름이 읽혀요.',
          base: '후보를 따지고 지도에 스스로 핀을 꽂아 확인해요.',
          challenge: '지도에 장소 이름 없이 기호만 보고 핀을 꽂아요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 나무가 있으면 무조건 안 된다고 여긴다 → 나무는 피해 던지는 장애물이고, 다치거나 망가질 것이 있는 곳만 피한다. ② 출발 칸을 1로 센다 → 손가락으로 한 칸씩 옮겨 세게 한다. ③ 시험 던지기가 끝나면 바구니를 그대로 둔다 → 정한 사람이 걷는지 교사가 마지막 홀에서 본다. 실제 학교에 맞게 칸 지도를 바꾸어 쓸 수 있다.',
      }),
      // ───────────────────────── 20 ─────────────────────────
      L(20, {
        title: '장소 살펴 고른 오리엔티어링 경기하고 차례대로 정리하기',
        objective: '오늘 장소 조건에 맞추어 오리엔티어링 경기를 고르고 장비를 챙겨 참여하며, 지점 사이 길을 고르는 전략을 쓰고 경기 뒤 정한 차례대로 정리할 수 있다.',
        illustration: art('children with paper maps running between flag markers in a school garden, choosing the path around a flower bed, then returning flags to a box', [
          { motif: 'tree', x: 70, y: 196 }, { motif: 'flower', x: 220, y: 220 }, { motif: 'star', x: 380, y: 110, s: 0.8 },
          { motif: 'cloud', x: 280, y: 50 }, { motif: 'hills', y: 232 },
          { motif: 'text', x: 250, y: 140, text: '길을 골라 찾아가요', size: 24 },
        ]),
        safety: [RUN, PATH, BOUND, TOOL],
        stages: stages(
          {
            teacher: '창밖을 함께 보며 묻는다. "오늘 운동장은 어제 비가 와서 젖어 있고, 숲길은 말랐어요. 원반 던지기와 숲길 오리엔티어링 가운데 무엇이 오늘 장소에 맞을까요?" 근거(바닥 상태)를 말하게 한 뒤 오리엔티어링으로 정한다. 날씨가 다르면 교사는 그날 조건으로 같은 질문을 한다. 오늘은 지점 사이 길을 고르는 전략을 쓰고, 끝나면 정리까지 해 본다고 알린다.',
            student: '오늘 운동장과 숲길의 바닥이 어떤지 창밖을 보고 말해 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 장비 챙기고 길 고르는 전략 세우기', minutes: 10, tool: 'mindmap',
              task: '오리엔티어링 가방에 넣을 장비만 고르고, 지점 사이 상황마다 쓸 길 고르기 전략을 이어요.',
              teacher: '"가장 짧은 길이 언제나 가장 좋은 길일까요?" 화단이나 텃밭을 가로지르면 짧아도 자연을 해치고 넘어지기 쉽다는 것을 짚는다. 지도를 실제 방향에 맞추어 드는 시범을 보인다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '숲길 오리엔티어링 가방에 넣을 장비만 골라요.', toolOptions: { mode: 'pick', topic: '오리엔티어링 가방', cards: ['학교 칸 지도', '확인 도장 카드', '물병', '원반', '오르기용 매트'] }, target: { pick: ['학교 칸 지도', '확인 도장 카드', '물병'] }, difficulty: 0.1,
                  hints: ['지점을 찾아가 확인하고, 걷는 동안 몸을 돌보는 데 필요한 것만 넣어요.', '원반과 매트는 다른 활동의 장비예요.', '지도, 도장 카드, 물병을 챙겨요.'] },
                { prompt: '지점 사이 상황마다 알맞은 길 고르기 전략을 이어요.', toolOptions: { mode: 'match', topic: '이럴 땐 이 길로', slots: [{ id: 'bed', label: '두 지점 사이에 화단이 있어요' }, { id: 'road', label: '두 지점이 길 하나로 이어져요' }, { id: 'lost', label: '다음 지점이 어느 쪽인지 모르겠어요' }], cards: ['화단을 돌아가는 길로 가요', '길을 따라 바로 가요', '지도 북쪽을 실제 북쪽에 맞추고 다시 봐요'] }, target: { match: { bed: '화단을 돌아가는 길로 가요', road: '길을 따라 바로 가요', lost: '지도 북쪽을 실제 북쪽에 맞추고 다시 봐요' } }, levels: { easy: { state: { at: { '길을 따라 바로 가요': 1 } } } }, difficulty: 0.2,
                  hints: ['빠른 길보다 먼저, 자연을 해치지 않고 헤매지 않는 길을 떠올려요.', '화단은 가로지르지 않고, 방향을 모를 때는 지도 방향부터 맞추어요.', '화단은 돌아가고, 이어진 길은 따라가고, 헷갈리면 지도 북쪽을 맞추어요.'] },
                { prompt: '빠르게 찾으려다 생기는 행동을 좋은 전략과 피할 행동으로 나누어요.', toolOptions: { topic: '빨리 찾으려면', slots: ['좋은 전략', '피할 행동'], cards: ['출발 전에 다음 지점까지 길을 손가락으로 따라가 보기', '다음 지점 방향을 짝과 말로 확인하기', '찾은 지점 표시를 떼어 들고 가기', '모퉁이를 뛰어서 돌기'] }, target: { sort: { '좋은 전략': ['출발 전에 다음 지점까지 길을 손가락으로 따라가 보기', '다음 지점 방향을 짝과 말로 확인하기'], '피할 행동': ['찾은 지점 표시를 떼어 들고 가기', '모퉁이를 뛰어서 돌기'] } }, difficulty: 0.2,
                  conclude: '좋은 길은 가장 짧은 길이 아니라, 자연과 사람을 해치지 않고 헤매지 않는 길이에요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 오리엔티어링 경기하고 정리하기', minutes: 16, tool: 'timer',
              task: '활동 차례를 세우고, 짝과 지도를 들고 지점 네 곳을 찾아 도장을 찍어요. 경기 뒤 맡은 지점 표시를 걷어 상자에 돌려놓고, 걸린 시간과 찾은 지점 수를 적어요.',
              teacher: '"지점 표시는 마지막 모둠이 돌아온 뒤에 걷어요. 그 전에 떼면 다른 모둠이 찾지 못해요." 모둠마다 걷을 지점을 하나씩 맡긴다. 화단을 가로지르는 모둠에게는 "아까 정한 전략이 무엇이었나요?"라고 묻는다.',
              levels: { easy: {}, base: {}, challenge: { stopwatch: true } },
              items: [
                { prompt: '오늘 활동 카드를 하는 차례대로 놓아요.', toolOptions: { cards: ['정한 차례대로 정리하기', '장소 조건 살피기', '알맞은 활동 고르기', '경기하기', '장비 챙기기'] }, target: { order: ['장소 조건 살피기', '알맞은 활동 고르기', '장비 챙기기', '경기하기', '정한 차례대로 정리하기'] }, levels: { easy: { state: { order: ['장소 조건 살피기', '정한 차례대로 정리하기', '알맞은 활동 고르기', '경기하기', '장비 챙기기'] } } }, difficulty: 0.15,
                  hints: ['무엇을 알아야 그다음 일을 정할 수 있는지 생각해요. 장소를 모르면 활동을 고를 수 없어요.', '활동을 정해야 챙길 장비를 알 수 있어요. 정리는 어디에 와야 할까요?', '살피기 → 고르기 → 챙기기 → 경기 → 정리예요.'] },
                { prompt: '짝과 지점 네 곳을 찾아 도장을 찍고, 맡은 지점 표시를 걷어 돌려놓아요. 다 했으면 표시해요.', free: true, toolOptions: { doneLabel: '경기하고 맡은 표시를 걷었어요' }, difficulty: 0.1 },
                { prompt: '걸린 시간(분)과 찾은 지점 수를 적어요.', toolOptions: { fields: [{ label: '걸린 시간', unit: '분', max: 30 }, { label: '찾은 지점', unit: '곳', max: 4 }] }, target: { records: true }, difficulty: 0.1 },
              ],
            },
          ],
          {
            teacher: '"오늘 고른 길 가운데 가장 잘 고른 길은 어디였나요? 왜 그 길이었나요?" 두세 모둠의 대답을 듣는다. 출구 1번을 틀린 학생에게는 화단을 가로지른 길과 돌아간 길을 지도에서 손가락으로 따라가게 한다. 장딴지를 늘이며 마친다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '이럴 땐 이 길로', slots: [{ id: 'puddle', label: '지름길에 큰 물웅덩이가 있어요' }, { id: 'farm', label: '두 지점 사이에 텃밭이 있어요' }], cards: ['웅덩이를 비켜 마른 길로 돌아가요', '텃밭 둘레 길로 돌아가요'] }, prompt: '새 상황마다 알맞은 길 고르기 전략을 이어요.', target: { match: { puddle: '웅덩이를 비켜 마른 길로 돌아가요', farm: '텃밭 둘레 길로 돌아가요' } }, difficulty: 0.15 },
              { type: 'choice', prompt: '경기가 끝난 뒤 지점 표시는 언제 걷나요?', options: ['내가 찾자마자 바로', '마지막 모둠이 돌아온 뒤', '다음 날 아무나'], answer: 1, difficulty: 0.15, explain: '먼저 걷으면 다른 모둠이 찾지 못해요. 모두 끝난 뒤 맡은 사람이 걷어요.' },
              { type: 'short', prompt: '오늘 장소에 오리엔티어링이 알맞았던 까닭을 쓰세요.' },
            ],
          },
        ),
        worksheet: {
          title: '길을 골라 찾아가요',
          items: [
            { type: 'table', prompt: '오늘 장소 조건과 고른 활동을 쓰세요.', columns: ['장소', '바닥 상태', '고른 활동', '고른 까닭'], cells: [['운동장', '', '', ''], ['숲길', '', '', '']] },
            { type: 'table', prompt: '활동 카드에 하는 차례대로 1~5를 쓰세요.', columns: ['카드', '차례'], cells: [['경기하기', ''], ['장비 챙기기', ''], ['장소 조건 살피기', ''], ['정한 차례대로 정리하기', ''], ['알맞은 활동 고르기', '']], answer: '살피기 1, 고르기 2, 챙기기 3, 경기 4, 정리 5' },
            { type: 'choice', prompt: '두 지점 사이에 화단이 있을 때 알맞은 길에 ○ 하세요.', options: ['화단을 가로질러 간다', '화단을 돌아가는 길로 간다', '눈을 감고 뛴다'], answer: '화단을 돌아가는 길로 간다' },
            { type: 'blank', prompt: '내 기록을 쓰세요.', text: '지점 ___곳을 ___분 만에 찾았어요.' },
          ],
          easy: {
            note: '짧은 길보다 안전하고 자연을 지키는 길.',
            items: [
              { type: 'choice', prompt: '오리엔티어링에 챙길 것은?', options: ['지도', '원반'], answer: '지도' },
              { type: 'choice', prompt: '방향을 모를 때는?', options: ['지도 북쪽을 맞추고 다시 본다', '아무 쪽으로나 뛴다'], answer: '지도 북쪽을 맞추고 다시 본다' },
              { type: 'draw', prompt: '오늘 찾은 지점 하나를 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드를 놓으면 바로 맞는지 보이고, 차례의 첫 카드가 미리 놓여 있어요.',
          base: '전략을 잇고 차례를 스스로 세워 확인해요.',
          challenge: '기록판의 스톱워치로 걸린 시간을 직접 재어 적어요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 가장 짧은 길이 가장 좋은 길이라고 여긴다 → 화단을 가로지른 길과 돌아간 길을 지도에서 견준다. ② 장비는 쓰던 자리에 두면 다음 사람이 정리한다고 여긴다 → 모둠마다 걷을 지점을 맡긴다. ③ 지도를 돌리지 않고 읽어 방향을 잃는다 → 지도 북쪽을 실제 북쪽에 맞추는 시범을 보인다. 그날 날씨가 다르면 도입 질문을 그날 조건으로 바꾼다.',
      }),
      // ───────────────────────── 21 ─────────────────────────
      L(21, {
        title: '나무를 피해 끊어 던지며 디스크 골프 경기하기',
        objective: '바구니까지의 거리와 가로막는 것을 살펴 끊어 던지기·가볍게 넣기 전략을 골라 디스크 골프 경기에 참여하고, 경기 뒤 홀 장비를 정리할 수 있다.',
        illustration: art('a child throwing a flying disc around a big tree toward a hula hoop basket in two short steps, dotted arrows showing the path', [
          { motif: 'tree', x: 240, y: 180, s: 1.2 }, { motif: 'cloud', x: 90, y: 50 }, { motif: 'sun', x: 420, y: 50, s: 0.7 },
          { motif: 'hills', y: 232 },
          { motif: 'text', x: 240, y: 70, text: '돌아가도 괜찮아요', size: 24 },
        ]),
        safety: [DISC, DISC2, FIELD, TOOL],
        stages: stages(
          {
            teacher: '훌라후프 바로 앞에 큰 나무가 있는 홀 그림을 보여 준다. "나무 너머 바구니를 한 번에 노리면 어떻게 될까요?" 대답을 받은 뒤 "두 번에 나누어 나무 옆 빈 곳으로 먼저 보내는 것을 끊어 던지기라고 해요"라고 말한다. 오늘은 홀 상황마다 전략을 골라 디스크 골프 경기를 하고 홀 장비를 정리한다고 알린다.',
            student: '나무가 가로막은 홀에서 나라면 어떻게 던질지 손으로 원반이 갈 길을 그려 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 홀 상황에 맞는 전략 고르기', minutes: 9, tool: 'mindmap',
              task: '홀 상황마다 알맞은 전략을 잇고, 디스크 골프에서 좋은 전략과 피할 행동을 나누어요.',
              teacher: '"가장 세게 던지면 언제나 가장 적은 번에 넣을 수 있을까요?" 바구니 바로 앞에서 세게 던지면 넘어가 버린다는 것을 짚는다. 거리와 가로막는 것을 먼저 보고 전략을 정한다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '홀 상황마다 알맞은 전략을 이어요.', toolOptions: { mode: 'match', topic: '이 홀엔 이 전략', slots: [{ id: 'tree', label: '바구니 앞을 큰 나무가 막고 있어요' }, { id: 'far', label: '바구니가 운동장 끝에 아주 멀리 있어요' }, { id: 'near', label: '바구니가 세 걸음 앞이에요' }], cards: ['나무 옆 빈 곳으로 한 번 끊어 던져요', '멀리 던지기로 거리를 줄인 뒤 짧게 넣어요', '힘을 빼고 가볍게 밀어 넣어요'] }, target: { match: { tree: '나무 옆 빈 곳으로 한 번 끊어 던져요', far: '멀리 던지기로 거리를 줄인 뒤 짧게 넣어요', near: '힘을 빼고 가볍게 밀어 넣어요' } }, levels: { easy: { state: { at: { '힘을 빼고 가볍게 밀어 넣어요': 2 } } } }, difficulty: 0.2,
                  hints: ['바구니까지 거리가 얼마인지, 가는 길을 무엇이 막는지 먼저 보세요.', '막혀 있으면 돌아가고, 멀면 두 번에 나누고, 가까우면 힘을 빼요.', '나무는 끊어 던지기, 먼 홀은 멀리 던진 뒤 짧게, 가까운 홀은 가볍게 넣기예요.'] },
                { prompt: '디스크 골프에서 하는 행동을 좋은 전략과 피할 행동으로 나누어요.', toolOptions: { topic: '디스크 골프', slots: ['좋은 전략', '피할 행동'], cards: ['던지기 전에 바구니까지 가는 길을 눈으로 그려 보기', '원반이 멈춘 자리에서 다음 던지기 하기', '나무 너머로 무조건 세게 던지기', '앞 모둠이 홀에 있는데 던지기'] }, target: { sort: { '좋은 전략': ['던지기 전에 바구니까지 가는 길을 눈으로 그려 보기', '원반이 멈춘 자리에서 다음 던지기 하기'], '피할 행동': ['나무 너머로 무조건 세게 던지기', '앞 모둠이 홀에 있는데 던지기'] } }, levels: { challenge: { prompt: '좋은 전략과 피할 행동으로 나누어요. 빨라 보이지만 규칙에 어긋나는 카드도 있어요.', toolOptions: { cards: ['던지기 전에 바구니까지 가는 길을 눈으로 그려 보기', '원반이 멈춘 자리에서 다음 던지기 하기', '나무 너머로 무조건 세게 던지기', '앞 모둠이 홀에 있는데 던지기', '원반을 주워 바구니 쪽으로 몇 걸음 옮겨 놓고 던지기'] }, target: { sort: { '좋은 전략': ['던지기 전에 바구니까지 가는 길을 눈으로 그려 보기', '원반이 멈춘 자리에서 다음 던지기 하기'], '피할 행동': ['나무 너머로 무조건 세게 던지기', '앞 모둠이 홀에 있는데 던지기', '원반을 주워 바구니 쪽으로 몇 걸음 옮겨 놓고 던지기'] } } } }, difficulty: 0.2,
                  hints: ['규칙을 지키면서 던지는 횟수를 줄이는 행동인지 따져 보세요.', '디스크 골프는 원반이 멈춘 자리에서 다시 던져요. 앞 모둠이 있으면 기다려요.', '길 그려 보기와 멈춘 자리에서 던지기가 좋은 전략이에요.'] },
                { prompt: '홀에 서서 던지기 전에 살필 것만 골라요.', toolOptions: { mode: 'pick', topic: '던지기 전에', cards: ['바구니까지의 거리', '가는 길을 막는 나무나 벤치', '앞 모둠이 홀을 떠났는지', '다른 모둠이 지금 몇 번째 홀인지'] }, target: { pick: ['바구니까지의 거리', '가는 길을 막는 나무나 벤치', '앞 모둠이 홀을 떠났는지'] }, difficulty: 0.15,
                  hints: ['내 원반이 날아갈 길과 그 둘레의 안전에 관한 것인지 따져요.', '다른 모둠의 진행은 내 홀에서 전략을 고르는 데 쓰이지 않아요.', '거리, 막는 것, 앞 모둠이 떠났는지를 살펴요.'],
                  conclude: '던지기 전에 거리와 막는 것을 보고 전략을 고르고, 앞 모둠이 떠났는지 살펴야 안전해요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 두 전략 기록 견주기', minutes: 5, tool: 'chart',
              task: '나무가 막은 홀에서 도윤이는 한 번에 바구니를 노렸고, 서연이는 끊어 던졌어요. 두 친구가 넣기까지 던진 횟수 그래프를 읽어요.',
              teacher: '"막대가 짧을수록 적게 던진 거예요." 끊어 던지기는 한 번 더 던지는 것처럼 보여도 나무에 걸려 되돌아오는 일이 없다는 것을 짚는다.',
              options: { type: 'bar', mode: 'read', title: '나무가 막은 홀에서 넣기까지 던진 횟수', unit: '번', xLabel: '친구', yLabel: '횟수(번)', max: 8, scale: 1, data: [['도윤', 7], ['서연', 3]] },
              levels: { easy: { showValues: true }, base: {}, challenge: { revealAfterCheck: true } },
              items: [
                { prompt: '넣기까지 더 적게 던진 친구의 전략을 골라요.', toolOptions: { question: '더 적게 던진 전략은?', choices: ['한 번에 노리기(도윤)', '끊어 던지기(서연)'], why: ['도윤이는 나무에 걸려 7번이나 던졌어요.', null] }, target: { pick: 1 }, difficulty: 0.1 },
                { prompt: '두 친구가 던진 횟수는 몇 번 차이 나나요? 수를 넣어요.', target: { value: 4 }, difficulty: 0.2 },
                { prompt: '도윤이가 많이 던진 까닭으로 알맞은 것을 골라요.', toolOptions: { question: '도윤이가 많이 던진 까닭은?', choices: ['나무에 걸려 원반이 자꾸 되돌아왔다', '서연이보다 힘이 약했다', '바구니가 더 멀었다'], why: [null, '힘이 세도 나무를 넘기기 어려워요.', '두 친구는 같은 홀에서 던졌어요.'] }, target: { pick: 0 }, difficulty: 0.2,
                  conclude: '가로막는 것이 있으면 한 번 더 던지더라도 돌아가는 편이 결국 더 적게 던져요.' },
              ],
            },
            {
              id: 'a3', title: '활동 3. 세 홀 디스크 골프 경기', minutes: 12, tool: 'timer',
              task: '홀과 장비를 점검하고 모둠별로 세 홀 경기를 해요. 홀마다 던진 횟수를 적고, 마지막 모둠이 끝나면 맡은 홀의 바구니를 걷어요.',
              teacher: '"홀에 서면 먼저 길을 보고 전략을 말한 다음 던져요." 모둠원이 전략을 말로 하는지 듣는다. 바구니 앞에서 세게 던지는 학생에게 "세 걸음 앞에서는 어떤 전략이었지요?"라고 묻는다. 기록은 다른 모둠과 견주지 않는다.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '경기 전에 홀과 장비를 확인한 것을 눌러 표시해요.', toolOptions: { safety: ['홀마다 바구니(훌라후프)가 제자리에 있어요', '홀 사이에 지나가는 사람이 없어요', '모둠마다 원반이 하나씩 있어요'] }, target: { safety: true }, difficulty: 0.1 },
                { prompt: '모둠과 세 홀 경기를 하고 맡은 홀 바구니를 걷어 돌려놓아요. 다 했으면 표시해요.', free: true, toolOptions: { doneLabel: '세 홀 경기를 하고 맡은 바구니를 걷었어요' }, difficulty: 0.1 },
                { prompt: '세 홀 경기에서 홀마다 넣기까지 던진 횟수를 적어요.', toolOptions: { fields: [{ label: '1번 홀', unit: '번', max: 15 }, { label: '2번 홀', unit: '번', max: 15 }, { label: '3번 홀', unit: '번', max: 15 }] }, target: { records: true }, levels: { challenge: { toolOptions: { fields: [{ label: '1번 홀', unit: '번', max: 15 }, { label: '2번 홀', unit: '번', max: 15 }, { label: '3번 홀', unit: '번', max: 15 }, { label: '세 홀 합계', unit: '번', max: 45 }] } } }, difficulty: 0.15 },
              ],
            },
          ],
          {
            teacher: '"오늘 어느 홀에서 어떤 전략을 썼나요? 효과가 있었나요?" 두세 명에게 전략 이름과 결과를 함께 말하게 한다. 출구 1번을 틀린 학생에게는 오늘 그래프 막대 두 개를 다시 떠올리게 한다. 어깨·손목을 돌리는 정리 운동으로 마친다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '이 홀엔 이 전략', slots: [{ id: 'bench', label: '바구니 앞을 긴 벤치가 막고 있어요' }, { id: 'two', label: '바구니가 두 걸음 앞이에요' }], cards: ['벤치 옆 빈 곳으로 한 번 끊어 던져요', '힘을 빼고 가볍게 밀어 넣어요'] }, prompt: '새 홀 상황마다 알맞은 전략을 이어요.', target: { match: { bench: '벤치 옆 빈 곳으로 한 번 끊어 던져요', two: '힘을 빼고 가볍게 밀어 넣어요' } }, difficulty: 0.15 },
              { type: 'choice', prompt: '원반이 바구니 열 걸음 앞에 멈췄어요. 다음 던지기는 어디에서 하나요?', options: ['원반이 멈춘 자리', '바구니 바로 앞으로 옮긴 자리', '처음 출발한 자리'], answer: 0, difficulty: 0.15, explain: '디스크 골프는 원반이 멈춘 자리에서 다시 던져요.' },
              { type: 'short', prompt: '다음 경기에서 써 보고 싶은 전략 하나와 까닭을 쓰세요.' },
            ],
          },
        ),
        worksheet: {
          title: '돌아가도 괜찮아요',
          items: [
            { type: 'table', prompt: '홀마다 쓴 전략과 던진 횟수를 쓰세요.', columns: ['홀', '홀 상황', '쓴 전략', '던진 횟수'], cells: [['1번', '', '', ''], ['2번', '', '', ''], ['3번', '', '', '']] },
            { type: 'figure', wide: true, prompt: '그래프에서 더 적게 던진 친구에 ○ 하세요.', tool: 'chart', options: { type: 'bar', mode: 'read', title: '나무가 막은 홀에서 넣기까지 던진 횟수', unit: '번', max: 8, scale: 8, data: [['도윤', 7], ['서연', 3]] }, figures: [{ state: {}, caption: '막대가 짧을수록 적게 던졌어요' }], answer: '서연' },
            { type: 'choice', prompt: '바구니가 세 걸음 앞일 때 알맞은 전략에 ○ 하세요.', options: ['있는 힘껏 던진다', '힘을 빼고 가볍게 밀어 넣는다', '등을 돌리고 던진다'], answer: '힘을 빼고 가볍게 밀어 넣는다' },
            { type: 'short', prompt: '"세게 던질수록 적게 던진다"는 말이 틀린 까닭을 쓰세요.' },
          ],
          easy: {
            note: '막히면 돌아가고, 가까우면 살살.',
            items: [
              { type: 'choice', prompt: '바구니 앞을 나무가 막으면?', options: ['나무 옆으로 끊어 던진다', '나무를 맞힌다'], answer: '나무 옆으로 끊어 던진다' },
              { type: 'blank', prompt: '1번 홀에서 던진 횟수를 쓰세요.', text: '1번 홀은 ___번 던졌어요.' },
              { type: 'draw', prompt: '나무를 피해 원반이 날아간 길을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드를 놓으면 바로 맞는지 보이고, 그래프 막대 위에 값이 보여요.',
          base: '전략을 잇고 그래프를 눈금으로 읽어요.',
          challenge: '"바구니 쪽으로 옮겨 놓고 던지기" 같은 규칙에 어긋난 카드를 가려내고, 그래프 값은 맞힌 뒤에만 보이며 세 홀 합계를 셈해 적어요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 힘을 최대로 쓰면 언제나 적게 던진다고 여긴다 → 두 친구의 기록 그래프로 견준다. ② 원반을 주워 바구니 쪽으로 옮겨 놓고 던진다 → 멈춘 자리에서 던지는 규칙을 시범으로 보인다. ③ 바구니는 다음 반이 정리한다고 여긴다 → 모둠마다 걷을 홀을 맡기고 마지막에 수를 센다. 홀 하나에 한 모둠만 서게 해 원반이 사람 쪽으로 날아가지 않게 한다.',
      }),
      // ───────────────────────── 22 ─────────────────────────
      L(22, {
        title: '지난 경기 장소가 알맞았는지 근거 들어 따지고 홀 고치기',
        objective: '지난 디스크 골프 경기의 관찰 기록을 근거로 장소가 알맞았는지 판단하고, 고칠 홀의 장소나 장비를 정해 다시 던져 결과를 견줄 수 있다.',
        illustration: art('a group of children sitting around a paper course map with sticky notes marked good and change, one hoop being moved away from a puddle', [
          { motif: 'tree', x: 70, y: 196 }, { motif: 'wave', x: 330, y: 220, s: 0.6 }, { motif: 'cloud', x: 250, y: 48 },
          { motif: 'hills', y: 232 },
          { motif: 'text', x: 240, y: 120, text: '근거를 들어 고쳐요', size: 24 },
        ]),
        safety: [DISC, DISC2, FIELD],
        stages: stages(
          {
            teacher: '지난 시간 모둠 기록을 칠판에 붙이고 묻는다. "우리 코스는 운동장에 잘 맞았나요?" "재미있었으니까요"라는 대답이 나오면 "재미있었다는 것은 마음이에요. 장소가 맞았다는 근거는 무엇을 보면 알 수 있을까요?"라고 되묻는다. 오늘은 관찰한 일을 근거로 판단하고, 고칠 홀을 정해 다시 던져 본다고 알린다.',
            student: '지난 경기에서 직접 본 일 하나를 떠올려 "○○을 보았어요"로 말해 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 관찰 기록으로 장소 판단하기', minutes: 12, tool: 'mindmap',
              task: '지난 경기 관찰 기록을 알맞았다는 근거와 고쳐야 한다는 근거로 나누고, 문제마다 다음 계획을 이어요.',
              teacher: '"이 카드는 본 일인가요, 느낌인가요?" 근거는 직접 본 일이어야 한다는 것을 짚는다. 고칠 점이 나와도 코스 전체를 버리지 않고 그 홀만 바꾸면 된다고 말한다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '지난 경기 관찰 기록을 알맞았다는 근거와 고쳐야 한다는 근거로 나누어요.', toolOptions: { topic: '운동장 코스는?', slots: ['알맞았다는 근거', '고쳐야 한다는 근거'], cards: ['홀 사이로 지나간 사람이 없었어요', '원반이 담 밖으로 한 번도 나가지 않았어요', '2번 홀 앞 물웅덩이에서 두 명이 미끄러졌어요', '3번 홀 원반이 급식실 창문 가까이 떨어졌어요'] }, target: { sort: { '알맞았다는 근거': ['홀 사이로 지나간 사람이 없었어요', '원반이 담 밖으로 한 번도 나가지 않았어요'], '고쳐야 한다는 근거': ['2번 홀 앞 물웅덩이에서 두 명이 미끄러졌어요', '3번 홀 원반이 급식실 창문 가까이 떨어졌어요'] } }, levels: { easy: { state: { at: { '홀 사이로 지나간 사람이 없었어요': 0 } } }, challenge: { prompt: '관찰 기록을 두 근거로 나누어요. 본 일이 아니라 느낌이라 근거가 될 수 없는 카드는 빼요.', toolOptions: { cards: ['홀 사이로 지나간 사람이 없었어요', '원반이 담 밖으로 한 번도 나가지 않았어요', '2번 홀 앞 물웅덩이에서 두 명이 미끄러졌어요', '3번 홀 원반이 급식실 창문 가까이 떨어졌어요', '그냥 재미있었어요'] } } }, difficulty: 0.2,
                  hints: ['안전하게 잘 된 일인지, 다치거나 망가질 뻔한 일인지로 나누어요.', '미끄러짐과 창문 가까이 떨어진 일은 위험이 있었다는 기록이에요.', '사람 없음과 담 안에 떨어짐은 알맞았다, 물웅덩이와 창문은 고쳐야 한다는 근거예요.'] },
                { prompt: '고쳐야 할 문제마다 다음 계획을 이어요.', toolOptions: { mode: 'match', topic: '다음엔 이렇게', slots: [{ id: 'puddle', label: '2번 홀 앞 물웅덩이에서 미끄러졌어요' }, { id: 'window', label: '3번 홀 원반이 창문 가까이 떨어졌어요' }, { id: 'wait', label: '원반이 모자라 모둠이 오래 기다렸어요' }], cards: ['2번 홀을 마른 잔디 쪽으로 옮겨요', '3번 홀을 창문에서 멀리 옮겨요', '원반을 모둠마다 하나씩 더 챙겨요'] }, target: { match: { puddle: '2번 홀을 마른 잔디 쪽으로 옮겨요', window: '3번 홀을 창문에서 멀리 옮겨요', wait: '원반을 모둠마다 하나씩 더 챙겨요' } }, difficulty: 0.15 },
                { prompt: '장소가 알맞았는지 판단하는 말로 알맞은 것만 골라요.', toolOptions: { mode: 'pick', topic: '판단하는 말', cards: ['미끄러진 사람이 있었으니 그 홀은 옮겨야 해요', '원반이 담을 넘지 않았으니 넓이는 맞았어요', '우리 모둠이 이겼으니 코스가 좋았어요', '다른 반도 했으니 괜찮아요'] }, target: { pick: ['미끄러진 사람이 있었으니 그 홀은 옮겨야 해요', '원반이 담을 넘지 않았으니 넓이는 맞았어요'] }, difficulty: 0.2,
                  hints: ['"○○했으니 ○○해요"처럼 본 일이 판단의 까닭이 되는 말을 찾아요.', '이긴 것과 다른 반이 한 것은 장소 조건과 상관이 없어요.', '미끄러진 일과 담을 넘지 않은 일을 근거로 든 두 말이에요.'],
                  conclude: '장소 판단은 이기고 진 것이 아니라, 직접 본 안전과 장소 조건을 근거로 해요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 고친 홀 다시 던져 견주기', minutes: 14, tool: 'timer',
              task: '모둠이 정한 대로 홀 하나를 옮기거나 장비를 바꾸고, 그 홀만 다시 던져요. 고치기 전과 뒤에 던진 횟수와 위험했던 일을 적어요.',
              teacher: '"고친 홀이 정말 나아졌는지 무엇으로 알 수 있을까요?" 던진 횟수뿐 아니라 미끄러짐·창문 같은 위험이 줄었는지도 함께 적게 한다. 옮긴 바구니 자리를 모둠이 판단 근거와 함께 교사에게 말하고 던진다.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '모둠이 고친 홀을 다시 던져 보아요. 다 던졌으면 표시해요.', free: true, toolOptions: { doneLabel: '고친 홀을 모둠과 다시 던졌어요' }, difficulty: 0.1 },
                { prompt: '고치기 전과 뒤에 그 홀에서 던진 횟수와 위험했던 일 수를 적어요.', toolOptions: { fields: [{ label: '고치기 전 던진 횟수', unit: '번', max: 15 }, { label: '고친 뒤 던진 횟수', unit: '번', max: 15 }, { label: '고친 뒤 위험했던 일', unit: '번', max: 10 }] }, target: { records: true }, difficulty: 0.15 },
                { prompt: '근거를 들어 판단하고 고친 것을 스스로 점검해 표시해요.', target: { selfCheck: ['본 일을 근거로 고칠 홀을 골랐어요', '고친 까닭을 모둠에게 말했어요', '고친 뒤 결과를 적어 견주었어요'] }, difficulty: 0.1 },
              ],
            },
          ],
          {
            teacher: '"고친 홀은 나아졌나요? 무엇을 보고 그렇게 판단했나요?" 모둠마다 근거 하나를 들어 말하게 한다. 출구 1번을 틀린 학생에게는 오늘 카드 가운데 위험이 있었던 기록을 다시 찾게 한다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { topic: '숲길 오리엔티어링은?', slots: ['알맞았다는 근거', '고쳐야 한다는 근거'], cards: ['모든 모둠이 길로만 걸어 돌아왔어요', '1번 지점 둘레 풀이 많이 밟혀 있었어요', '3번 지점이 계단 끝이라 한 명이 발을 헛디뎠어요'] }, prompt: '숲길 경기 관찰 기록을 두 근거로 나누어요.', target: { sort: { '알맞았다는 근거': ['모든 모둠이 길로만 걸어 돌아왔어요'], '고쳐야 한다는 근거': ['1번 지점 둘레 풀이 많이 밟혀 있었어요', '3번 지점이 계단 끝이라 한 명이 발을 헛디뎠어요'] } }, difficulty: 0.2 },
              { type: 'choice', prompt: '장소가 알맞았는지 판단하는 근거로 알맞은 것은?', options: ['우리 모둠이 이겼다', '홀 둘레에서 미끄러진 사람이 없었다', '친구가 좋다고 했다'], answer: 1, difficulty: 0.15, explain: '직접 본 안전과 장소 조건이 근거가 돼요.' },
              { type: 'short', prompt: '오늘 고친 홀과 고친 까닭을 근거와 함께 쓰세요.' },
            ],
          },
        ),
        worksheet: {
          title: '근거를 들어 고쳐요',
          items: [
            { type: 'table', prompt: '지난 경기에서 본 일을 나누어 쓰세요.', columns: ['알맞았다는 근거', '고쳐야 한다는 근거'], rows: 3 },
            { type: 'table', prompt: '고친 홀을 견주어 쓰세요.', columns: ['홀', '고친 것', '전 던진 횟수', '뒤 던진 횟수', '위험이 줄었나요'], rows: 2 },
            { type: 'choice', prompt: '2번 홀 앞 물웅덩이에서 미끄러졌다면 알맞은 계획에 ○ 하세요.', options: ['2번 홀을 마른 곳으로 옮긴다', '더 빨리 뛰어 지나간다', '코스 전체를 없앤다'], answer: '2번 홀을 마른 곳으로 옮긴다' },
            { type: 'short', prompt: '"재미있었으니 장소가 맞았다"는 말을 근거가 있는 말로 고쳐 쓰세요.' },
          ],
          easy: {
            note: '근거는 내가 직접 본 일이에요.',
            items: [
              { type: 'choice', prompt: '근거가 되는 말은?', options: ['미끄러진 사람이 있었다', '그냥 좋았다'], answer: '미끄러진 사람이 있었다' },
              { type: 'short', prompt: '오늘 고친 홀을 쓰세요.' },
              { type: 'draw', prompt: '고친 홀의 바구니 자리를 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드를 놓으면 바로 맞는지 보이고, 첫 근거 카드가 미리 놓여 있어요.',
          base: '관찰 기록을 스스로 나누고 계획을 이어 확인해요.',
          challenge: '"그냥 재미있었어요"처럼 근거가 될 수 없는 느낌 카드를 가려내요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 이기고 진 것으로 장소를 판단한다 → 본 일(안전·장소 조건)만 근거로 쓰게 한다. ② 문제가 하나 나오면 코스 전체를 바꾸려 한다 → 문제가 난 홀만 고치게 한다. ③ 고친 뒤 결과를 적지 않는다 → 전과 뒤를 한 표에 견주게 한다. 다시 던질 때 옮긴 바구니 자리도 사람·창문·식물 기준으로 교사가 한 번 더 본다.',
      }),
      // ───────────────────────── 23 ─────────────────────────
      L(23, {
        title: '계절과 날씨가 바뀌면 활동 장소와 장비 다시 정하기',
        objective: '계절과 날씨에 따라 같은 장소의 조건이 달라지는 것을 들어, 활동 장소와 장비를 계절에 맞게 바꾸는 계획을 세울 수 있다.',
        illustration: art('one school forest path shown in four panels: spring sprouts, hot summer shade, autumn fallen leaves, icy winter, with children changing hats gloves and shoes', [
          { motif: 'flower', x: 70, y: 210 }, { motif: 'sun', x: 190, y: 60, s: 0.8 }, { motif: 'leaf', x: 300, y: 200 },
          { motif: 'snow', x: 410, y: 80 }, { motif: 'hills', y: 232 },
          { motif: 'text', x: 240, y: 130, text: '계절이 바뀌면 다시 살펴요', size: 22 },
        ]),
        safety: [SUN, WATER, PATH],
        stages: stages(
          {
            teacher: '같은 학교 숲길을 봄·여름·가을·겨울에 찍은 사진 네 장을 보여 준다. "봄에 숲길 걷기가 좋았다면, 겨울에도 같은 길에서 같은 준비로 하면 될까요?" 대답을 받아 "장소는 같아도 계절이 바뀌면 조건이 달라져요"라고 정리하고, 오늘은 계절마다 무엇을 다시 살피고 바꿀지 계획한다고 알린다.',
            student: '사진 네 장 가운데 걷기가 가장 어려워 보이는 계절을 고르고 까닭을 말해 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 계절이 바꾼 조건과 바꿀 계획 잇기', minutes: 12, tool: 'mindmap',
              task: '계절마다 달라진 장소 조건에 맞는 계획을 잇고, 계절이 바뀌면 다시 살필 것을 골라요.',
              teacher: '"한 번 정한 장소는 계절이 바뀌어도 그대로 쓰면 될까요?" 여름 운동장의 뜨거운 땅, 겨울 숲길의 얼음처럼 같은 곳도 위험이 생긴다는 것을 짚는다. 장소를 옮기는 것과 장비를 바꾸는 것 두 가지 방법이 있다고 말한다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '계절이 바꾼 장소 조건마다 알맞은 계획을 이어요.', toolOptions: { mode: 'match', topic: '계절이 바뀌면', slots: [{ id: 'summer', label: '한여름 낮, 운동장 땅이 뜨거워요' }, { id: 'winter', label: '한겨울, 숲길 그늘에 얼음이 얼었어요' }, { id: 'autumn', label: '가을, 숲길에 낙엽이 수북해요' }, { id: 'spring', label: '봄, 2번 홀 둘레 화단에 새싹이 났어요' }], cards: ['그늘진 숲길로 옮기고 물을 더 챙겨요', '햇볕 드는 운동장으로 옮기고 장갑을 껴요', '바닥이 잘 잡히는 신발로 천천히 걸어요', '2번 홀을 화단에서 먼 곳으로 옮겨요'] }, target: { match: { summer: '그늘진 숲길로 옮기고 물을 더 챙겨요', winter: '햇볕 드는 운동장으로 옮기고 장갑을 껴요', autumn: '바닥이 잘 잡히는 신발로 천천히 걸어요', spring: '2번 홀을 화단에서 먼 곳으로 옮겨요' } }, levels: { easy: { state: { at: { '그늘진 숲길로 옮기고 물을 더 챙겨요': 0 } } } }, difficulty: 0.2,
                  hints: ['계절이 만든 위험이 더위인지, 얼음인지, 미끄러움인지, 자라는 식물인지 먼저 찾아요.', '더위는 그늘과 물, 얼음은 햇볕과 장갑, 낙엽은 신발과 걸음, 새싹은 홀 옮기기로 막아요.', '여름은 그늘 숲길과 물, 겨울은 햇볕 운동장과 장갑, 가을은 신발과 천천히, 봄은 홀 옮기기예요.'] },
                { prompt: '계절이 바뀌면 같은 장소라도 다시 살필 것만 골라요.', toolOptions: { mode: 'pick', topic: '계절마다 다시 살펴요', cards: ['바닥이 미끄럽거나 뜨겁지 않은지', '그늘과 햇볕이 어디에 드는지', '새로 자라는 식물이 있는지', '지난번에 이긴 모둠이 어디인지'] }, target: { pick: ['바닥이 미끄럽거나 뜨겁지 않은지', '그늘과 햇볕이 어디에 드는지', '새로 자라는 식물이 있는지'] }, difficulty: 0.2,
                  hints: ['계절 따라 바뀌는 장소의 조건인지 따져요.', '이긴 모둠은 장소의 조건이 아니에요.', '바닥, 그늘과 햇볕, 새로 자라는 식물이 다시 살필 것이에요.'] },
                { prompt: '두 생각을 계절을 살핀 계획과 살피지 않은 계획으로 나누어요.', toolOptions: { topic: '이 계획은?', slots: ['계절을 살핀 계획', '살피지 않은 계획'], cards: ['장마철에는 강당 활동을 함께 정해 둬요', '여름에는 한낮을 피해 아침에 걸어요', '봄 코스를 한겨울에도 그대로 써요', '여름에도 겨울처럼 두꺼운 옷을 입어요'] }, target: { sort: { '계절을 살핀 계획': ['장마철에는 강당 활동을 함께 정해 둬요', '여름에는 한낮을 피해 아침에 걸어요'], '살피지 않은 계획': ['봄 코스를 한겨울에도 그대로 써요', '여름에도 겨울처럼 두꺼운 옷을 입어요'] } }, difficulty: 0.15,
                  conclude: '장소가 같아도 계절이 바뀌면 그 계절의 조건을 다시 살펴 장소·시간·장비를 바꿔요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 비 온 날 수로 계획할 달 찾기', minutes: 6, tool: 'chart',
              task: '가상의 고장에서 달마다 비 온 날 수 그래프를 읽고, 야외 활동을 계획할 때 비 대비를 가장 많이 해야 할 달을 골라요.',
              teacher: '"막대가 길수록 비 온 날이 많았다는 뜻이에요. 눈금 한 칸은 며칠인가요?" 비가 잦은 달에는 실내 대체 활동(강당 오르기 등)을 함께 계획해 둔다는 것을 짚는다.',
              options: { type: 'bar', mode: 'read', title: '달마다 비 온 날 수(가상의 고장)', unit: '일', xLabel: '달', yLabel: '날 수(일)', max: 20, scale: 2, data: [['3월', 6], ['4월', 8], ['5월', 10], ['6월', 12], ['7월', 16]] },
              levels: { easy: { showValues: true }, base: {}, challenge: { revealAfterCheck: true } },
              items: [
                { prompt: '비 대비 계획을 가장 많이 해야 할 달을 골라요.', toolOptions: { question: '비 온 날이 가장 많은 달은?', choices: ['3월', '4월', '5월', '6월', '7월'], why: ['3월은 비 온 날이 가장 적어요.', '4월은 막대가 짧은 편이에요.', '5월은 6월·7월보다 짧아요.', '6월은 많지만 가장 많지는 않아요.', null] }, target: { pick: 4 }, difficulty: 0.1 },
                { prompt: '3월과 7월의 비 온 날 수는 며칠 차이 나나요? 수를 넣어요.', target: { value: 10 }, difficulty: 0.2 },
                { prompt: '7월 숲길 오리엔티어링 계획으로 가장 알맞은 것을 골라요.', toolOptions: { question: '7월 계획은?', choices: ['3월과 똑같이 계획한다', '비 오는 날 할 강당 활동을 함께 정해 둔다', '7월에는 체육을 하지 않는다'], why: ['7월은 비 온 날이 3월보다 훨씬 많아요.', null, '비가 와도 실내에서 할 수 있는 활동이 있어요.'] }, target: { pick: 1 }, difficulty: 0.2,
                  conclude: '같은 활동도 비가 잦은 달에는 실내 대체 활동을 함께 계획해 두어요.' },
              ],
            },
            {
              id: 'a3', title: '활동 3. 오늘 계절의 숲길 다시 살피며 걷기', minutes: 8, tool: 'timer',
              task: '오늘 날씨에 맞게 준비했는지 점검하고, 학교 숲길을 5분 걸으며 지난번과 달라진 조건을 하나 찾아 활동지에 적어요.',
              teacher: '"지난번 걸을 때와 무엇이 달라졌는지 찾아요. 땅, 그늘, 풀, 꽃을 보세요." 돌아와서 모둠마다 하나씩 칠판에 적는다. 달라진 것이 없다는 학생에게는 그늘이 드는 자리를 손으로 가리키게 한다.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '오늘 날씨에 맞게 준비한 것을 눌러 표시해요.', toolOptions: { safety: ['햇볕과 기온을 보고 모자나 겉옷을 챙겼어요', '물병을 챙겼어요', '바닥이 미끄럽지 않은 신발을 신었어요'] }, target: { safety: true }, difficulty: 0.1 },
                { prompt: '숲길을 5분 걸으며 지난번과 달라진 조건을 하나 찾아요. 찾았으면 표시해요.', free: true, toolOptions: { doneLabel: '숲길을 걸으며 달라진 조건을 찾았어요' }, difficulty: 0.1 },
                { prompt: '계절에 맞게 계획을 다시 세운 것을 스스로 점검해 표시해요.', target: { selfCheck: ['오늘 숲길에서 달라진 조건을 하나 찾았어요', '그 조건에 맞게 바꿀 장소나 장비를 정했어요', '비 오는 날 할 활동도 생각해 두었어요'] }, difficulty: 0.1 },
              ],
            },
          ],
          {
            teacher: '"오늘 숲길에서 찾은 달라진 조건은 무엇이었나요? 그래서 무엇을 바꿀 건가요?" 모둠마다 조건과 계획을 짝지어 말하게 한다. 출구 1번을 틀린 학생에게는 계절이 만든 위험부터 찾게 한다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '계절이 바뀌면', slots: [{ id: 'rainy', label: '장마철, 며칠째 운동장이 질척해요' }, { id: 'cold', label: '초겨울 아침, 숲길이 그늘져 무척 추워요' }], cards: ['강당 오르기 가로 이동으로 바꿔요', '햇볕이 드는 낮 시간으로 옮기고 겉옷을 챙겨요'] }, prompt: '새 계절 상황마다 알맞은 계획을 이어요.', target: { match: { rainy: '강당 오르기 가로 이동으로 바꿔요', cold: '햇볕이 드는 낮 시간으로 옮기고 겉옷을 챙겨요' } }, difficulty: 0.15 },
              { type: 'choice', prompt: '봄에 정한 숲길 코스를 한여름에 쓰려고 해요. 알맞은 생각은?', options: ['한 번 정했으니 그대로 쓴다', '더위와 그늘을 다시 살펴 시간과 장비를 바꾼다', '여름에는 아무 활동도 하지 않는다'], answer: 1, difficulty: 0.15, explain: '장소가 같아도 계절이 바뀌면 조건을 다시 살펴 계획을 고쳐요.' },
              { type: 'short', prompt: '오늘 숲길에서 찾은 달라진 조건과 바꿀 계획을 쓰세요.' },
            ],
          },
        ),
        worksheet: {
          title: '계절이 바뀌면 다시 살펴요',
          items: [
            { type: 'table', prompt: '계절마다 숲길의 조건과 바꿀 계획을 쓰세요.', columns: ['계절', '달라진 조건', '바꿀 장소나 장비'], cells: [['봄', '', ''], ['여름', '', ''], ['가을', '', ''], ['겨울', '', '']] },
            { type: 'figure', wide: true, prompt: '그래프에서 비 온 날이 가장 많은 달에 ○ 하세요.', tool: 'chart', options: { type: 'bar', mode: 'read', title: '달마다 비 온 날 수(가상의 고장)', unit: '일', max: 20, scale: 5, data: [['3월', 6], ['4월', 8], ['5월', 10], ['6월', 12], ['7월', 16]] }, figures: [{ state: {}, caption: '막대가 길수록 비 온 날이 많아요' }], answer: '7월' },
            { type: 'blank', prompt: '오늘 걸으며 찾은 것을 쓰세요.', text: '오늘 숲길은 지난번과 달리 ___________________.' },
            { type: 'short', prompt: '"한 번 정한 장소는 계절이 바뀌어도 그대로 쓰면 된다"는 말을 고쳐 쓰세요.' },
          ],
          easy: {
            note: '더우면 그늘과 물, 추우면 햇볕과 장갑.',
            items: [
              { type: 'choice', prompt: '한여름 낮에 알맞은 곳은?', options: ['그늘진 숲길', '뜨거운 운동장 한가운데'], answer: '그늘진 숲길' },
              { type: 'choice', prompt: '숲길에 얼음이 얼면 챙길 것은?', options: ['장갑과 미끄럽지 않은 신발', '반바지'], answer: '장갑과 미끄럽지 않은 신발' },
              { type: 'draw', prompt: '오늘 계절의 숲길을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드를 놓으면 바로 맞는지 보이고, 그래프 막대 위에 값이 보여요.',
          base: '계절 조건과 계획을 스스로 잇고, 그래프를 눈금으로 읽어요.',
          challenge: '그래프 값은 맞힌 뒤에만 보여 눈금을 정확히 읽어 차이를 셈해요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 한 번 정한 장소는 계절이 바뀌어도 그대로 쓰면 된다고 여긴다 → 같은 숲길의 네 계절 사진을 견준다. ② 장소만 바꾸고 장비는 생각하지 않는다 → 옮기기와 바꾸기 두 칸을 활동지에 나누어 쓰게 한다. ③ 그래프 눈금(2일씩)을 1일씩으로 읽는다 → 눈금 한 칸이 며칠인지 먼저 말하게 한다. 그래프는 가상의 고장 기록이니 학교 둘레 실제 기록으로 바꾸어 써도 된다.',
      }),
      // ───────────────────────── 24 ─────────────────────────
      L(24, {
        title: '네 계절 생태형 스포츠 계획표 만들고 겨울 준비 운동 해 보기',
        objective: '계절마다 달라지는 조건을 들어 우리 반 네 계절 생태형 스포츠 계획표를 만들고, 그 가운데 겨울 계획의 준비 운동을 시간에 맞추어 실제로 해 볼 수 있다.',
        illustration: art('a large paper calendar wheel divided into four seasons with tiny figures hiking, throwing discs, orienteering and climbing indoors', [
          { motif: 'sun', x: 120, y: 70, s: 0.8 }, { motif: 'leaf', x: 360, y: 90 }, { motif: 'snow', x: 380, y: 190 },
          { motif: 'flower', x: 100, y: 200 }, { motif: 'hills', y: 232 },
          { motif: 'text', x: 240, y: 138, text: '네 계절 계획표', size: 26 },
        ]),
        safety: [SPACE, WATER, CLIMB],
        stages: stages(
          {
            teacher: '빈 계획표(봄·여름·가을·겨울 네 칸)를 칠판에 붙인다. "지난 시간 계절마다 조건이 달라진다는 것을 알았어요. 그럼 우리 반은 계절마다 어떤 활동을 어디에서 하면 좋을까요?" 몇 가지 대답을 칸에 붙여 두고, 오늘은 조건을 근거로 계획표를 완성한 뒤 겨울 계획의 준비 운동을 직접 해 본다고 알린다.',
            student: '내가 가장 기대되는 계절 활동 하나를 고르고, 그 계절에 꼭 챙길 것을 말해 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 계절 조건에 맞는 계획표 채우기', minutes: 12, tool: 'mindmap',
              task: '계절마다 적힌 조건을 보고 알맞은 활동과 준비를 계획표 칸에 이어요. 친구의 제안에 어떻게 답할지도 골라요.',
              teacher: '"그 계절에 그 활동을 고른 근거는 무엇인가요?" 조건 글을 소리 내어 읽고 카드를 잇게 한다. 계획표의 활동이 정해진 뒤에도 그날 날씨를 다시 보고 바꿀 수 있다고 말한다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '계절마다 적힌 조건에 알맞은 활동과 준비를 이어요.', toolOptions: { mode: 'match', topic: '우리 반 네 계절 계획', slots: [{ id: 'spring', label: '봄: 화단에 새싹이 나고 꽃가루가 날려요' }, { id: 'summer', label: '여름: 한낮이 뜨겁고 소나기가 잦아요' }, { id: 'autumn', label: '가을: 선선하고 숲길에 낙엽이 쌓여요' }, { id: 'winter', label: '겨울: 춥고 바깥 땅이 얼어요' }], cards: ['화단을 비킨 운동장 디스크 골프, 마스크 챙기기', '아침 시간 그늘 숲길 오리엔티어링, 물과 모자 챙기기', '숲길 걷기, 바닥이 잘 잡히는 신발 신기', '강당 오르기 가로 이동, 준비 운동 길게 하기'] }, target: { match: { spring: '화단을 비킨 운동장 디스크 골프, 마스크 챙기기', summer: '아침 시간 그늘 숲길 오리엔티어링, 물과 모자 챙기기', autumn: '숲길 걷기, 바닥이 잘 잡히는 신발 신기', winter: '강당 오르기 가로 이동, 준비 운동 길게 하기' } }, levels: { easy: { state: { at: { '강당 오르기 가로 이동, 준비 운동 길게 하기': 3 } } } }, difficulty: 0.2,
                  hints: ['카드마다 들어 있는 준비(마스크·물과 모자·신발·긴 준비 운동)가 어떤 조건을 막는지 보세요.', '꽃가루는 마스크, 더위는 그늘과 물, 낙엽은 신발, 언 땅은 실내와 긴 준비 운동이에요.', '봄은 디스크 골프와 마스크, 여름은 아침 숲길, 가을은 숲길 걷기와 신발, 겨울은 강당 오르기예요.'] },
                { prompt: '겨울 체육 시간 친구들의 제안마다 알맞은 대답을 이어요.', toolOptions: { mode: 'match', topic: '겨울엔 이렇게 답해요', slots: [{ id: 'same', label: '"봄에 쓴 숲길 코스 그대로 쓰자"' }, { id: 'none', label: '"겨울엔 바깥 활동을 아예 하지 말자"' }, { id: 'short', label: '"추우니까 준비 운동은 빨리 끝내자"' }], cards: ['얼음이 있는지 오늘 조건을 다시 보고 정하자', '강당처럼 조건에 맞는 곳을 찾아서 하자', '추울수록 준비 운동을 더 길게 하자'] }, target: { match: { same: '얼음이 있는지 오늘 조건을 다시 보고 정하자', none: '강당처럼 조건에 맞는 곳을 찾아서 하자', short: '추울수록 준비 운동을 더 길게 하자' } }, difficulty: 0.2,
                  hints: ['제안마다 계절 조건을 살피지 않은 곳이 어디인지 찾아요.', '봄 코스는 얼음, 아예 쉬기는 다른 장소, 짧은 준비 운동은 굳은 몸을 떠올려요.', '그대로 쓰자에는 다시 보기, 하지 말자에는 강당, 빨리 끝내자에는 길게 하기를 이어요.'] },
                { prompt: '계획표를 쓸 때 알맞은 생각만 골라요.', toolOptions: { mode: 'pick', topic: '계획표 쓰는 법', cards: ['계절 조건을 근거로 활동을 정해요', '정한 날에도 그날 날씨를 다시 보고 바꿀 수 있어요', '한 번 쓴 계획표는 바꾸지 않아요', '모든 계절에 같은 활동을 해요'] }, target: { pick: ['계절 조건을 근거로 활동을 정해요', '정한 날에도 그날 날씨를 다시 보고 바꿀 수 있어요'] }, difficulty: 0.2,
                  hints: ['계획표는 조건이 바뀌면 함께 바뀌는 것인지 생각해 보세요.', '바꾸지 않는 계획표와 같은 활동만 하는 계획은 조건을 보지 않은 것이에요.', '조건을 근거로 정하고, 그날 날씨에 따라 바꿀 수 있다는 두 카드예요.'],
                  conclude: '계획표는 계절 조건을 근거로 세우고, 그날의 날씨로 한 번 더 고쳐 쓰는 것이에요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 겨울 계획의 긴 준비 운동 해 보기', minutes: 14, tool: 'timer',
              task: '겨울 강당 오르기 전 준비 운동을 길게 하도록 타이머를 맞추고 전체 시간을 확인해요. 강당에서 맞춘 타이머대로 준비 운동을 실제로 해요.',
              teacher: '"추울 때 준비 운동을 더 길게 하는 까닭은 무엇일까요?" 몸이 굳어 있으면 근육과 관절이 다치기 쉽다는 것을 짚는다. 동작마다 손목·어깨·발목을 천천히 돌리게 하고, 쉬기 동안 숨을 고르게 한다.',
              levels: { easy: { workStep: 10, restStep: 10 }, base: { workStep: 5, restStep: 5 }, challenge: { workStep: 5, restStep: 5, showTotal: false } },
              items: [
                { prompt: '동작마다 40초 움직이고 20초 쉬기를 4번 하도록 타이머를 맞춰요.', toolOptions: { plan: { work: 20, rest: 40, rounds: 2 } }, target: { plan: { work: 40, rest: 20, rounds: 4 } }, difficulty: 0.2 },
                { prompt: '움직이기 30초, 쉬기 10초로 두고, 전체 시간이 150초가 되도록 되풀이 횟수를 맞춰요. 마지막에는 쉬지 않아요.', toolOptions: { plan: { work: 30, rest: 10, rounds: 2 } }, target: { plan: { work: 30, rest: 10 }, total: 150 }, difficulty: 0.3,
                  hints: ['움직이기 시간은 횟수만큼, 쉬기 시간은 횟수보다 한 번 적게 들어가요.', '되풀이를 한 번 늘릴 때마다 전체 시간이 40초씩 늘어요. 2번이면 70초예요.', '30×4 = 120, 10×3 = 30, 더하면 150초예요. 되풀이를 4번으로 맞추어요.'] },
                { prompt: '맞춘 타이머대로 강당에서 손목·어깨·발목 준비 운동을 해요. 다 했으면 표시해요.', free: true, toolOptions: { doneLabel: '타이머대로 준비 운동을 했어요' }, difficulty: 0.1 },
              ],
            },
          ],
          {
            teacher: '"우리 반 계획표에서 가장 바꿀 일이 많을 것 같은 계절은 언제인가요? 왜 그렇게 생각하나요?" 근거를 들어 말하게 한다. 출구 1번을 틀린 학생에게는 카드의 준비가 무엇을 막는지 다시 묻는다. 완성한 계획표는 교실 뒤에 붙여 두고 계절이 바뀔 때마다 고쳐 쓴다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '이런 날엔', slots: [{ id: 'dust', label: '미세먼지가 매우 나쁜 봄날' }, { id: 'heat', label: '폭염 주의보가 내린 여름날' }], cards: ['바깥 활동 대신 강당 활동으로 바꿔요', '한낮을 피해 시원한 실내에서 짧게 해요'] }, prompt: '계획한 날 이런 날씨가 오면 어떻게 바꿀지 이어요.', target: { match: { dust: '바깥 활동 대신 강당 활동으로 바꿔요', heat: '한낮을 피해 시원한 실내에서 짧게 해요' } }, difficulty: 0.2 },
              { type: 'choice', prompt: '30초 움직이고 10초 쉬기를 3번 하면 전체 시간은?', options: ['90초', '110초', '120초'], answer: 1, difficulty: 0.25, explain: '30×3 = 90초에 쉬기 10×2 = 20초를 더해 110초예요.' },
              { type: 'short', prompt: '우리 반 계획표에서 한 계절을 골라 활동과 그 근거를 쓰세요.' },
            ],
          },
        ),
        worksheet: {
          title: '네 계절 계획표',
          items: [
            { type: 'table', prompt: '우리 반 네 계절 계획표를 쓰세요.', columns: ['계절', '조건', '활동과 장소', '챙길 것'], cells: [['봄', '', '', ''], ['여름', '', '', ''], ['가을', '', '', ''], ['겨울', '', '', '']] },
            { type: 'blank', prompt: '전체 시간을 구하세요.', text: '40초 움직이고 20초 쉬기를 4번 하면 전체 시간은 ___초예요.', answer: '220' },
            { type: 'choice', prompt: '겨울에 준비 운동을 길게 하는 까닭에 ○ 하세요.', options: ['몸이 굳어 있어 다치기 쉬워서', '시간을 채우려고', '강당이 넓어서'], answer: '몸이 굳어 있어 다치기 쉬워서' },
            { type: 'short', prompt: '계획한 날 비가 오면 우리 반은 무엇을 할지 쓰세요.' },
          ],
          easy: {
            note: '계절 조건 → 활동 → 챙길 것 차례로 써요.',
            items: [
              { type: 'choice', prompt: '바깥 땅이 언 겨울에 알맞은 곳은?', options: ['강당', '얼음 낀 숲길'], answer: '강당' },
              { type: 'short', prompt: '여름에 챙길 것 두 가지를 쓰세요.' },
              { type: 'draw', prompt: '내가 기대되는 계절 활동을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드를 놓으면 바로 맞는지 보이고, 겨울 칸 카드가 미리 놓여 있으며 타이머가 10초씩 움직여요.',
          base: '계획표를 스스로 잇고 타이머를 5초씩 맞춰요.',
          challenge: '전체 시간을 보지 않고 150초가 되도록 되풀이 횟수를 셈해서 맞춰요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 계획표는 한 번 쓰면 바꾸지 않는다고 여긴다 → 그날 날씨로 고쳐 쓰는 칸을 둔다. ② 전체 시간에 마지막 쉬기까지 넣는다 → 쉬기는 횟수보다 한 번 적다는 것을 그림으로 보인다. ③ 추울 때도 준비 운동을 짧게 끝낸다 → 손목·발목을 잡아 보며 몸이 데워졌는지 스스로 느끼게 한다. 준비 운동은 강당에서 두 팔 간격을 두고 한다.',
      }),
      // ───────────────────────── 25 ─────────────────────────
      L(25, {
        title: '학교 운동 시설 찾아 둘러보고 좋은 점 말하기',
        objective: '학교에서 쓸 수 있는 운동 시설을 지도와 둘러보기로 찾아 적고, 그 시설이 있어서 좋은 점을 근거를 들어 말할 수 있다.',
        illustration: art('children with clipboards touring a school gym, a forest walking path and a row of pull-up bars, marking each on a paper map with stickers', [
          { motif: 'house', x: 120, y: 170 }, { motif: 'tree', x: 380, y: 196 }, { motif: 'star', x: 250, y: 90, s: 0.8 },
          { motif: 'cloud', x: 330, y: 48 }, { motif: 'hills', y: 232 },
          { motif: 'text', x: 240, y: 140, text: '우리 학교 운동 시설', size: 24 },
        ]),
        safety: [BOUND, RUN, TOOL],
        stages: stages(
          {
            teacher: '"우리 학교에서 몸을 움직일 수 있는 곳을 모두 말해 볼까요?" 운동장·체육관이 먼저 나오면 "숲길, 철봉, 계단도 운동 시설일까요?"라고 넓힌다. 이어 "이런 시설은 원래 있는 것이니 살펴볼 필요가 없을까요?"를 물어 두고, 오늘은 학교 운동 시설을 찾아 둘러보며 좋은 점을 근거와 함께 말해 본다고 알린다.',
            student: '어제 쉬는 시간에 몸을 움직인 학교 장소를 하나 떠올려 말해 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 학교 지도에서 운동 시설 찾기', minutes: 7, tool: 'map',
              task: '설명을 읽고 학교 지도에서 그 운동 시설이 있는 칸에 핀을 꽂아요.',
              teacher: '"비 오는 날 체육은 어디에서 할까요?" 실내 시설과 바깥 시설을 나누어 보게 한다. 지도는 가상의 학교이므로 우리 학교 시설 이름으로 바꾸어 말해도 된다.',
              options: SCHOOL,
              levels: { easy: { readout: true }, base: {}, challenge: { names: false } },
              items: [
                { prompt: '비가 와도 쓸 수 있는 실내 운동 시설에 핀을 꽂아요.', target: { place: '체육관' }, difficulty: 0.1 },
                { prompt: '나무 그늘 아래 걷기 길이 있는 시설에 핀을 꽂아요.', target: { place: '느티나무 숲' }, difficulty: 0.1 },
                { prompt: '새로 생긴 철봉은 체육관에서 동쪽으로 한 칸 간 곳이에요. 핀을 꽂아요.', target: { from: '체육관', dir: '동', steps: 1 }, difficulty: 0.15 },
              ],
            },
            {
              id: 'a2', title: '활동 2. 모둠별로 시설 둘러보기', minutes: 10, tool: 'timer',
              task: '모둠이 맡은 시설 두 곳을 둘러보며 그곳에서 할 수 있는 운동과 좋은 점을 활동지 표에 적어요. 둘러본 시설 수와 그곳에서 할 수 있는 운동 수를 적어요.',
              teacher: '"시설마다 할 수 있는 운동을 두 가지 이상 찾아요." 모둠마다 다른 시설을 맡겨 겹치지 않게 한다. 철봉에서는 매달려 보지 않고 둘러보기만 한다. 교사는 가운데에 서서 호루라기로 돌아올 시간을 알린다.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '둘러보러 나가기 전에 확인한 것을 눌러 표시해요.', toolOptions: { safety: ['맡은 시설 두 곳과 돌아올 시간을 들었어요', '시설은 둘러보기만 하고 오늘은 쓰지 않아요', '복도와 계단에서는 걸어서 다녀요'] }, target: { safety: true }, difficulty: 0.1 },
                { prompt: '모둠과 맡은 시설 두 곳을 둘러보고 돌아와요. 다 했으면 표시해요.', free: true, toolOptions: { doneLabel: '모둠과 시설 두 곳을 둘러보았어요' }, difficulty: 0.1 },
                { prompt: '둘러본 시설 수와 그곳에서 할 수 있는 운동을 찾은 수를 적어요.', toolOptions: { fields: [{ label: '둘러본 시설', unit: '곳', max: 5 }, { label: '찾은 운동', unit: '가지', max: 20 }] }, target: { records: true }, difficulty: 0.1 },
              ],
            },
            {
              id: 'a3', title: '활동 3. 시설의 좋은 점 근거 들어 말하기', minutes: 9, tool: 'mindmap',
              task: '시설마다 있어서 좋은 점을 잇고, 근거를 들어 말한 문장을 골라요.',
              teacher: '"체육관이 좋은 까닭을 \'그냥 좋아요\' 말고 무엇을 할 수 있게 해 주는지로 말해 볼까요?" 근거는 그 시설 덕분에 할 수 있게 된 일이라는 것을 짚는다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '시설마다 있어서 좋은 점을 이어요.', toolOptions: { mode: 'match', topic: '이 시설 덕분에', slots: [{ id: 'gym', label: '체육관' }, { id: 'forest', label: '느티나무 숲 걷기 길' }, { id: 'bar', label: '철봉' }], cards: ['비나 미세먼지가 있는 날에도 몸을 움직여요', '그늘에서 걸으며 자연을 느껴요', '쉬는 시간에 매달리며 팔 힘을 길러요'] }, target: { match: { gym: '비나 미세먼지가 있는 날에도 몸을 움직여요', forest: '그늘에서 걸으며 자연을 느껴요', bar: '쉬는 시간에 매달리며 팔 힘을 길러요' } }, levels: { easy: { state: { at: { '비나 미세먼지가 있는 날에도 몸을 움직여요': 0 } } } }, difficulty: 0.15 },
                { prompt: '시설의 좋은 점을 근거를 들어 말한 문장만 골라요.', toolOptions: { mode: 'pick', topic: '근거가 있는 말', cards: ['체육관이 있어서 장마철에도 체육 수업을 빼먹지 않아요', '숲길 덕분에 점심시간에 친구들과 걸으며 이야기해요', '철봉은 그냥 좋아요', '운동장은 원래 있는 거예요'] }, target: { pick: ['체육관이 있어서 장마철에도 체육 수업을 빼먹지 않아요', '숲길 덕분에 점심시간에 친구들과 걸으며 이야기해요'] }, difficulty: 0.2,
                  hints: ['"○○ 덕분에 ○○을 할 수 있어요"처럼 그 시설이 해 준 일이 들어 있는지 보세요.', '"그냥 좋아요"와 "원래 있어요"에는 시설이 해 준 일이 없어요.', '장마철 체육 수업과 점심시간 걷기를 든 두 문장이에요.'] },
                { prompt: '운동 시설을 살펴보아야 하는 까닭으로 알맞은 것만 골라요.', toolOptions: { mode: 'pick', topic: '살펴보는 까닭', cards: ['어떤 시설이 있는지 알아야 날씨와 활동에 맞게 고를 수 있어요', '고장 난 곳을 알아야 다치지 않고 고칠 수 있어요', '시설은 원래 있는 것이니 살펴볼 필요가 없어요', '시설을 살피는 일은 어른만 해요'] }, target: { pick: ['어떤 시설이 있는지 알아야 날씨와 활동에 맞게 고를 수 있어요', '고장 난 곳을 알아야 다치지 않고 고칠 수 있어요'] }, levels: { challenge: { prompt: '운동 시설을 살펴보아야 하는 까닭만 골라요. 그럴듯한 함정 카드가 있어요.', toolOptions: { cards: ['어떤 시설이 있는지 알아야 날씨와 활동에 맞게 고를 수 있어요', '고장 난 곳을 알아야 다치지 않고 고칠 수 있어요', '시설은 원래 있는 것이니 살펴볼 필요가 없어요', '시설을 살피는 일은 어른만 해요', '새 시설이 생기면 우리 반만 먼저 쓰려고 해요'] } } }, difficulty: 0.2,
                  hints: ['시설을 알고 살피는 것이 우리 활동과 안전에 어떤 도움을 주는지 떠올려요.', '원래 있는 것처럼 보여도 누군가 만들고 고쳐요. 우리도 쓰는 사람으로서 살펴요.', '고르기와 안전을 든 두 카드가 까닭이에요.'],
                  conclude: '운동 시설은 저절로 있는 것이 아니에요. 살펴보아야 알맞게 고르고 안전하게 쓸 수 있어요.' },
              ],
            },
          ],
          {
            teacher: '"우리 모둠이 둘러본 시설 가운데 가장 고마운 곳은 어디였나요? 무엇을 할 수 있게 해 주나요?" 근거를 들어 말하게 한다. 출구 1번을 틀린 학생에게는 오늘 표에 적은 운동을 다시 읽게 한다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '이 시설 덕분에', slots: [{ id: 'track', label: '운동장 둘레 달리기 길' }, { id: 'stair', label: '본관 옆 넓은 계단' }], cards: ['아침마다 몇 바퀴 걸으며 몸을 깨워요', '오르내리며 다리 힘을 길러요'] }, prompt: '새 시설마다 있어서 좋은 점을 이어요.', target: { match: { track: '아침마다 몇 바퀴 걸으며 몸을 깨워요', stair: '오르내리며 다리 힘을 길러요' } }, difficulty: 0.15 },
              { type: 'choice', prompt: '근거를 들어 시설의 좋은 점을 말한 것은?', options: ['체육관은 그냥 좋다', '체육관 덕분에 비 오는 날에도 체육을 한다', '체육관은 원래 있다'], answer: 1, difficulty: 0.15, explain: '그 시설 덕분에 할 수 있게 된 일이 근거가 돼요.' },
              { type: 'short', prompt: '우리 학교 운동 시설 하나를 골라 좋은 점을 근거와 함께 쓰세요.' },
            ],
          },
        ),
        worksheet: {
          title: '우리 학교 운동 시설',
          items: [
            { type: 'table', prompt: '둘러본 시설을 쓰세요.', columns: ['시설', '할 수 있는 운동', '있어서 좋은 점(근거)'], rows: 3 },
            { type: 'figure', wide: true, prompt: '학교 지도에서 비 오는 날 쓸 수 있는 시설에 ○ 하세요.', tool: 'map', options: SCHOOL, figures: [{ state: {}, caption: '실내 운동 시설' }], answer: '체육관' },
            { type: 'choice', prompt: '근거가 있는 말에 ○ 하세요.', options: ['숲길 덕분에 그늘에서 걸을 수 있다', '숲길은 그냥 있다', '숲길은 멋지다'], answer: '숲길 덕분에 그늘에서 걸을 수 있다' },
            { type: 'short', prompt: '"운동 시설은 원래 있는 것이니 살펴볼 필요가 없다"는 말을 고쳐 쓰세요.' },
          ],
          easy: {
            note: '좋은 점은 "○○ 덕분에 ○○을 해요"로 써요.',
            items: [
              { type: 'choice', prompt: '비 오는 날 체육을 하는 곳은?', options: ['체육관', '숲길'], answer: '체육관' },
              { type: 'blank', prompt: '좋은 점을 쓰세요.', text: '철봉 덕분에 ___________을 해요.' },
              { type: 'draw', prompt: '내가 좋아하는 학교 운동 시설을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '지도에 핀 자리 이름이 읽히고, 카드를 놓으면 바로 맞는지 보여요.',
          base: '지도와 카드를 스스로 풀고 확인해요.',
          challenge: '지도에 장소 이름 없이 기호만 보고 찾고, 함정 카드가 섞인 까닭 고르기를 해요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 운동 시설은 원래 있는 것이니 살펴볼 필요가 없다고 여긴다 → 누가 만들고 고치는지 다음 차시로 이어 묻는다. ② 좋은 점을 "그냥 좋아요"로 말한다 → "○○ 덕분에 ○○을 해요" 틀을 칠판에 둔다. ③ 둘러보다 철봉에 매달린다 → 오늘은 보기만 한다는 약속을 출발 전에 다시 말한다. 가상 학교 지도는 우리 학교 시설로 바꾸어 써도 된다.',
      }),
      // ───────────────────────── 26 ─────────────────────────
      L(26, {
        title: '마을 지도와 설문 그래프로 마을 운동 시설 조사하기',
        objective: '마을 지도에서 운동 시설의 자리를 찾고 우리 반 설문 그래프를 읽어, 마을 운동 시설과 그 쓰임을 표로 정리할 수 있다.',
        illustration: art('a paper neighborhood map with a park, a sports center and a riverside bike path, children placing stickers and a small bar chart beside it', [
          { motif: 'wave', x: 120, y: 220, s: 0.8 }, { motif: 'tree', x: 70, y: 150 }, { motif: 'house', x: 330, y: 170 },
          { motif: 'sun', x: 420, y: 50, s: 0.7 }, { motif: 'hills', y: 236 },
          { motif: 'text', x: 240, y: 100, text: '우리 마을 운동 시설', size: 24 },
        ]),
        safety: [PATH, BOUND, WATER],
        stages: stages(
          {
            teacher: '"학교 밖, 우리 마을에서 운동할 수 있는 곳은 어디일까요?" 공원·체육 센터·자전거 길 같은 대답을 칠판에 모은다. "가 본 사람은 손을 들어 볼까요?" 손든 수를 세어 두고, 오늘은 가상의 마을 지도와 우리 반 설문 그래프로 마을 운동 시설을 조사해 표로 정리한다고 알린다. 실제 마을 이름 대신 가상의 마을로 연습한 뒤 집에서 우리 마을을 더 찾아본다.',
            student: '가족과 함께 가 본 마을 운동 시설을 하나 떠올려, 그곳에서 무엇을 했는지 말해 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 마을 지도에서 운동 시설 찾기', minutes: 8, tool: 'map',
              task: '가상의 마을 지도에서 설명에 맞는 운동 시설 자리에 핀을 꽂아요.',
              teacher: '"학교를 출발한 곳으로 보고 방위와 칸을 세요." 강을 따라 난 자전거 길은 강이 지나는 칸 어디든 된다는 것을 알린다.',
              options: { grid: [6, 4], places: [{ name: '우리 학교', icon: 'school', at: [2, 2] }, { name: '구민 체육 센터', icon: 'office', at: [3, 1], legend: '체육 센터' }, { name: '근린공원', icon: 'park', at: [0, 1], legend: '공원' }, { name: '아파트', icon: 'apartment', at: [4, 3] }, { name: '도서관', icon: 'library', at: [5, 0] }], rivers: [[[0, 3], [1, 3], [2, 3], [3, 3]]], roads: [[[0, 2], [5, 2]]] },
              levels: { easy: { readout: true }, base: {}, challenge: { names: false } },
              items: [
                { prompt: '우리 학교에서 북동쪽으로 한 칸 간 곳의 실내 운동 시설에 핀을 꽂아요.', target: { from: '우리 학교', dir: '북동', steps: 1 }, difficulty: 0.15,
                  predict: { q: '북동쪽은 지도에서 어느 쪽일까요?', options: ['오른쪽 위', '왼쪽 위', '오른쪽 아래'], answer: 0 } },
                { prompt: '산책로와 운동 기구가 있는 공원에 핀을 꽂아요.', target: { place: '근린공원' }, difficulty: 0.1 },
                { prompt: '강변 자전거 길은 강을 따라 나 있어요. 강이 지나는 칸 하나에 핀을 꽂아요.', target: { river: true }, difficulty: 0.1,
                  conclude: '자전거 길·공원·체육 센터처럼 마을에도 날씨와 운동에 따라 고를 수 있는 시설이 여럿 있어요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 우리 반 설문 그래프 읽기', minutes: 8, tool: 'chart',
              task: '"가 본 마을 운동 시설" 설문을 한 사람이 여러 곳에 손을 들어 모은 그래프예요. 그래프를 읽고 물음에 답해요.',
              teacher: '"한 사람이 두 곳에 손을 들 수도 있었어요. 그래서 막대를 모두 더해도 우리 반 수가 아니에요." 가장 적게 가 본 시설이 왜 그런지(멀다, 잘 모른다)도 말하게 한다.',
              options: { type: 'bar', mode: 'read', title: '가 본 마을 운동 시설(손든 사람 수)', unit: '명', xLabel: '시설', yLabel: '사람 수(명)', max: 20, scale: 2, data: [['근린공원', 18], ['체육 센터', 8], ['자전거 길', 12], ['수영장', 4]] },
              levels: { easy: { showValues: true }, base: {}, challenge: { revealAfterCheck: true } },
              items: [
                { prompt: '우리 반이 가장 많이 가 본 시설을 골라요.', toolOptions: { question: '가장 많이 가 본 시설은?', choices: ['근린공원', '체육 센터', '자전거 길', '수영장'] }, target: { pick: 0 }, difficulty: 0.1 },
                { prompt: '자전거 길에 가 본 사람은 체육 센터에 가 본 사람보다 몇 명 많나요? 수를 넣어요.', target: { value: 4 }, difficulty: 0.2 },
                { prompt: '수영장에 가 본 사람이 적은 까닭을 알아보려면 무엇을 더 물어야 할까요?', toolOptions: { question: '더 물어볼 것은?', choices: ['수영장이 어디 있는지, 어떻게 쓰는지 아는지', '수영장 물이 무슨 색인지', '수영장 이름이 몇 글자인지'], why: [null, '물 색은 가 본 사람이 적은 까닭과 상관이 없어요.', '이름 글자 수는 까닭과 상관이 없어요.'] }, target: { pick: 0 }, difficulty: 0.2 },
              ],
            },
            {
              id: 'a3', title: '활동 3. 학교 담장 길 걸으며 마을 시설 찾기', minutes: 10, tool: 'timer',
              task: '선생님과 학교 담장 안쪽 길을 따라 걸으며, 담장 너머로 보이는 마을 운동 시설을 찾아요. 찾은 시설 수를 적고, 표를 정리한 것을 스스로 점검해요.',
              teacher: '"담장 밖으로는 나가지 않아요. 보이는 것만 찾아요." 한 줄로 걷고 모퉁이에서 모인다. 보이는 시설이 없으면 지난 주말에 본 시설을 떠올려 표에 더하게 한다.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '선생님과 담장 안쪽 길을 한 바퀴 걸으며 보이는 마을 시설을 찾아요. 다 걸었으면 표시해요.', free: true, toolOptions: { doneLabel: '담장 길을 걸으며 마을 시설을 찾았어요' }, difficulty: 0.1 },
                { prompt: '담장 길에서 찾은 마을 운동 시설 수와 그곳에서 할 수 있는 운동 수를 적어요.', toolOptions: { fields: [{ label: '찾은 시설', unit: '곳', max: 10 }, { label: '할 수 있는 운동', unit: '가지', max: 20 }] }, target: { records: true }, difficulty: 0.1 },
                { prompt: '마을 운동 시설 표를 정리한 것을 스스로 점검해 표시해요.', target: { selfCheck: ['시설 이름과 자리를 적었어요', '그곳에서 할 수 있는 운동을 적었어요', '가 본 적 없는 시설도 하나 적었어요'] }, difficulty: 0.1 },
              ],
            },
          ],
          {
            teacher: '"우리 마을 시설 가운데 다음 주말에 가 보고 싶은 곳은 어디인가요? 왜인가요?" 두세 명의 대답을 듣는다. 출구 1번을 틀린 학생에게는 그래프의 막대 끝을 눈금까지 따라가 읽게 한다.',
            exitTicket: [
              { type: 'tool', tool: 'chart', options: { type: 'bar', mode: 'read', title: '옆 반이 가 본 마을 운동 시설(손든 사람 수)', unit: '명', max: 20, scale: 2, data: [['근린공원', 10], ['체육 센터', 14], ['자전거 길', 6]], question: '옆 반이 가장 많이 가 본 시설은?', choices: ['근린공원', '체육 센터', '자전거 길'] }, prompt: '옆 반 설문 그래프에서 가장 많이 가 본 시설을 골라요.', target: { pick: 1 }, difficulty: 0.15 },
              { type: 'choice', prompt: '마을 운동 시설 표에 꼭 들어갈 것은?', options: ['시설 이름과 할 수 있는 운동', '시설 건물의 색깔', '시설 앞 가게 이름'], answer: 0, difficulty: 0.1, explain: '무엇을 할 수 있는 시설인지 알아야 활동에 맞게 고를 수 있어요.' },
              { type: 'short', prompt: '우리 마을에서 찾은 운동 시설 하나와 그곳에서 할 수 있는 운동을 쓰세요.' },
            ],
          },
        ),
        worksheet: {
          title: '우리 마을 운동 시설',
          items: [
            { type: 'table', prompt: '마을 운동 시설을 조사해 쓰세요.', columns: ['시설', '자리(학교에서 어느 쪽)', '할 수 있는 운동', '가 본 적(○/×)'], rows: 4 },
            { type: 'figure', wide: true, prompt: '그래프에서 가장 적게 가 본 시설에 ○ 하세요.', tool: 'chart', options: { type: 'bar', mode: 'read', title: '가 본 마을 운동 시설(손든 사람 수)', unit: '명', max: 20, scale: 10, data: [['근린공원', 18], ['체육 센터', 8], ['자전거 길', 12], ['수영장', 4]] }, figures: [{ state: {}, caption: '막대가 짧을수록 적어요' }], answer: '수영장' },
            { type: 'blank', prompt: '그래프를 읽고 쓰세요.', text: '근린공원에 가 본 사람은 수영장보다 ___명 많아요.', answer: '14' },
            { type: 'short', prompt: '가 보고 싶은 마을 시설과 그 까닭을 쓰세요.' },
          ],
          easy: {
            note: '시설 이름 → 할 수 있는 운동 차례로 써요.',
            items: [
              { type: 'choice', prompt: '산책로가 있는 곳은?', options: ['근린공원', '도서관'], answer: '근린공원' },
              { type: 'short', prompt: '가 본 마을 운동 시설 하나를 쓰세요.' },
              { type: 'draw', prompt: '그 시설에서 운동하는 나를 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '지도 핀 자리 이름이 읽히고, 그래프 막대 위에 값이 보여요.',
          base: '지도와 그래프를 스스로 읽어 확인해요.',
          challenge: '지도에 이름 없이 기호만 보고 찾고, 그래프 값은 맞힌 뒤에만 보여요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 막대를 모두 더하면 우리 반 수라고 여긴다 → 한 사람이 여러 곳에 손을 들었다는 것을 다시 말한다. ② 북동쪽을 오른쪽 아래로 읽는다 → 북은 위, 동은 오른쪽을 손으로 가리키게 한다. ③ 가 본 곳만 시설이라고 여긴다 → 가 본 적 없는 시설도 한 줄 적게 한다. 담장 길 걷기는 담장 안에서만 하고, 실제 마을 시설 이름은 학생이 말하는 대로 적되 주소는 적지 않는다.',
      }),
      // ───────────────────────── 27 ─────────────────────────
      L(27, {
        title: '운동 시설이 생기고 유지되기까지 따라가며 고마움 찾기',
        objective: '운동 시설이 만들어지고 날마다 관리되기까지의 과정을 차례대로 말하고, 시설이 있어서 좋은 점과 고마운 사람을 근거를 들어 말할 수 있다.',
        illustration: art('a paper timeline showing neighbors asking for a park, workers building a path, and a caretaker mowing grass and fixing a bench, ending with children walking happily', [
          { motif: 'house', x: 70, y: 180, s: 0.8 }, { motif: 'tree', x: 200, y: 196 }, { motif: 'flower', x: 320, y: 220 },
          { motif: 'sun', x: 420, y: 54, s: 0.7 }, { motif: 'hills', y: 232 },
          { motif: 'text', x: 240, y: 110, text: '저절로 생기지 않아요', size: 24 },
        ]),
        safety: [BOUND, TOOL, SPACE],
        stages: stages(
          {
            teacher: '공원 산책로 사진과, 그 자리가 빈 땅이던 때의 그림을 나란히 보여 준다. "이 산책로는 어떻게 생겼을까요? 생긴 뒤에는 누가 돌볼까요?" 대답을 받아 "시설은 원래 있는 것처럼 보이지만, 누군가 필요하다고 말하고 만들고 날마다 살피기 때문에 있어요"라고 말한다. 오늘은 그 과정을 따라가 보고 학교 시설에서 돌본 흔적을 찾는다고 알린다.',
            student: '우리 학교 운동장을 누가 돌볼지 떠올려 한 사람을 말해 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 시설이 생기고 유지되기까지 차례 세우기', minutes: 10, tool: 'timeline',
              task: '마을 산책로가 생기고 유지되기까지의 일을 일어난 차례대로 놓아요. 시설을 돌보는 사람과 하는 일도 이어요.',
              teacher: '"주민이 의견을 내는 일은 처음에 올까요, 끝에 올까요?" 시설은 필요를 말하는 사람, 계획하는 곳, 만드는 사람, 날마다 돌보는 사람이 있어야 한다는 것을 짚는다. 만들어진 뒤의 관리도 과정에 들어간다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '마을 산책로가 생기고 유지되기까지의 일을 차례대로 놓아요.', toolOptions: { cards: ['주민들이 걷기 길이 필요하다고 의견을 내요', '구청이 계획을 세우고 비용을 마련해요', '공사로 산책로를 만들어요', '관리하는 분이 날마다 살피고 고쳐요'] }, target: { order: ['주민들이 걷기 길이 필요하다고 의견을 내요', '구청이 계획을 세우고 비용을 마련해요', '공사로 산책로를 만들어요', '관리하는 분이 날마다 살피고 고쳐요'] }, levels: { easy: { state: { at: { '주민들이 걷기 길이 필요하다고 의견을 내요': 0 } } } }, difficulty: 0.2 },
                { prompt: '학교 시설을 돌보는 사람과 하는 일을 이어요.', toolOptions: { mode: 'match', slots: [{ id: 'keeper', label: '학교 시설을 관리하는 주무관님' }, { id: 'cleaner', label: '환경을 돌보는 분' }, { id: 'we', label: '시설을 쓰는 우리' }], cards: ['고장 난 철봉과 문을 고쳐요', '체육관 바닥과 화장실을 깨끗이 해요', '바르게 쓰고 망가진 곳을 알려요'] }, target: { match: { keeper: '고장 난 철봉과 문을 고쳐요', cleaner: '체육관 바닥과 화장실을 깨끗이 해요', we: '바르게 쓰고 망가진 곳을 알려요' } }, difficulty: 0.15,
                  hints: ['고치는 일, 깨끗이 하는 일, 바르게 쓰는 일을 누가 맡는지 떠올려요.', '쓰는 사람인 우리도 시설을 돌보는 사람이에요.', '주무관님은 고치기, 환경을 돌보는 분은 청소, 우리는 바르게 쓰고 알리기예요.'] },
                { prompt: '산책로가 생긴 뒤 달라진 일을 일어난 차례대로 놓아요.', toolOptions: { cards: ['산책로가 문을 열어요', '할머니가 날마다 산책로를 걸으세요', '할머니 다리 힘이 좋아져 계단도 잘 오르세요'] }, target: { order: ['산책로가 문을 열어요', '할머니가 날마다 산책로를 걸으세요', '할머니 다리 힘이 좋아져 계단도 잘 오르세요'] }, difficulty: 0.15,
                  conclude: '시설은 사람들의 의견·계획·공사·관리가 이어져 생기고, 덕분에 우리 생활이 건강해져요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 체육관에서 돌본 흔적 찾기와 고마움 말하기', minutes: 16, tool: 'timer',
              task: '체육관을 둘러보며 누군가 돌본 흔적(고친 곳, 닦은 곳, 정리된 곳)을 찾아 적어요. 고마운 사람에게 전할 한 문장을 근거와 함께 써요.',
              teacher: '"새로 칠한 줄, 갈아 끼운 그물, 닦인 바닥을 찾아보세요." 찾은 흔적마다 누가 했을지 떠올리게 한다. 고마움 문장은 "○○해 주셔서 우리가 ○○을 할 수 있어요" 틀로 쓴다. 쓴 문장은 다음 차시에 모아 전한다.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '모둠과 체육관을 둘러보며 돌본 흔적을 찾아요. 다 찾았으면 표시해요.', free: true, toolOptions: { doneLabel: '체육관에서 돌본 흔적을 찾았어요' }, difficulty: 0.1 },
                { prompt: '찾은 돌본 흔적의 수를 적어요.', toolOptions: { fields: [{ label: '고친 곳', unit: '곳', max: 10 }, { label: '닦거나 정리된 곳', unit: '곳', max: 10 }] }, target: { records: true }, difficulty: 0.1 },
                { prompt: '고마움을 찾아 전할 준비를 한 것을 스스로 점검해 표시해요.', target: { selfCheck: ['돌본 흔적을 두 곳 넘게 찾았어요', '누가 했을지 떠올려 적었어요', '"덕분에 ○○을 할 수 있어요"로 고마움 문장을 썼어요'] }, difficulty: 0.1 },
              ],
            },
          ],
          {
            teacher: '"오늘 찾은 흔적 가운데 가장 놀라웠던 것은 무엇인가요?" 두세 명의 대답을 듣는다. 출구 1번을 틀린 학생에게는 "만들기 전에 무엇이 먼저 있어야 할까요?"라고 묻는다.',
            exitTicket: [
              { type: 'tool', tool: 'timeline', options: { cards: ['학생들이 그늘막이 필요하다고 의견을 내요', '학교가 계획을 세우고 비용을 마련해요', '운동장 가에 그늘막을 세워요', '주무관님이 비바람 뒤에 살피고 고쳐요'] }, prompt: '운동장 그늘막이 생기고 유지되기까지의 일을 차례대로 놓아요.', target: { order: ['학생들이 그늘막이 필요하다고 의견을 내요', '학교가 계획을 세우고 비용을 마련해요', '운동장 가에 그늘막을 세워요', '주무관님이 비바람 뒤에 살피고 고쳐요'] }, difficulty: 0.2 },
              { type: 'choice', prompt: '"운동 시설은 원래 있는 것이다"라는 생각을 바르게 고친 것은?', options: ['시설은 저절로 생긴다', '의견·계획·공사·관리가 있어 시설이 있다', '시설은 어른만 쓴다'], answer: 1, difficulty: 0.15, explain: '여러 사람의 일이 이어져야 시설이 생기고 유지돼요.' },
              { type: 'short', prompt: '학교 시설을 돌보는 분께 전할 고마움 문장을 근거와 함께 쓰세요.' },
            ],
          },
        ),
        worksheet: {
          title: '저절로 생기지 않아요',
          items: [
            { type: 'table', prompt: '산책로가 생기고 유지되기까지 차례대로 쓰세요.', columns: ['차례', '누가', '무엇을'], cells: [['1', '', ''], ['2', '', ''], ['3', '', ''], ['4', '', '']] },
            { type: 'table', prompt: '체육관에서 찾은 돌본 흔적을 쓰세요.', columns: ['흔적', '누가 했을까', '덕분에 할 수 있는 일'], rows: 3 },
            { type: 'choice', prompt: '시설을 쓰는 우리가 할 일에 ○ 하세요.', options: ['바르게 쓰고 망가진 곳을 알린다', '망가져도 모른 척한다', '시설은 어른만 돌본다'], answer: '바르게 쓰고 망가진 곳을 알린다' },
            { type: 'short', prompt: '고마운 분께 전할 문장을 쓰세요.' },
          ],
          easy: {
            note: '의견 → 계획 → 공사 → 관리.',
            items: [
              { type: 'choice', prompt: '시설을 만든 뒤에도 필요한 일은?', options: ['날마다 살피고 고치기', '아무것도 안 하기'], answer: '날마다 살피고 고치기' },
              { type: 'short', prompt: '학교 시설을 돌보는 사람 한 명을 쓰세요.' },
              { type: 'draw', prompt: '체육관에서 찾은 돌본 흔적을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드를 놓으면 바로 맞는지 보이고, 첫 카드가 미리 놓여 있어요.',
          base: '차례와 짝을 스스로 세워 확인해요.',
          challenge: '활동지에 누가 했을지와 덕분에 할 수 있는 일을 모두 써서 고마움 문장을 두 개 만들어요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 운동 시설은 원래 있는 것이라고 여긴다 → 빈 땅 그림과 지금 사진을 견준다. ② 관리는 과정에 넣지 않는다 → 만든 뒤에도 날마다 하는 일이 있다는 것을 흔적 찾기로 확인한다. ③ 고마움을 "고맙습니다"로만 쓴다 → "덕분에 ○○을 할 수 있어요"로 근거를 붙이게 한다. 체육관 둘러보기에서 장비는 만지지 않는다.',
      }),
      // ───────────────────────── 28 ─────────────────────────
      L(28, {
        title: '쓴 용구 상태 살펴 표에 적고 망가진 것 알리기',
        objective: '오늘 쓴 용구의 상태를 살펴 표에 적고, 쓸 수 있는 것은 정한 자리에 두며 망가진 것은 따로 두고 알릴 수 있다.',
        illustration: art('children sitting in a circle checking flying discs, cones and balls, sorting them into an OK basket and a red tag box for broken items', [
          { motif: 'star', x: 120, y: 110, s: 0.8 }, { motif: 'cloud', x: 300, y: 50 }, { motif: 'sun', x: 420, y: 54, s: 0.7 },
          { motif: 'hills', y: 232 },
          { motif: 'text', x: 240, y: 160, text: '살피고, 두고, 알려요', size: 24 },
        ]),
        safety: [TOOL, DISC, SPACE],
        stages: stages(
          {
            teacher: '테두리가 갈라진 원반 하나를 들어 보인다. "이 원반을 아무 말 없이 창고에 넣으면 다음 사람은 어떻게 될까요?" 갈라진 테두리에 손이 베일 수 있다는 대답을 받아 "망가진 용구는 알리지 않으면 다음 사람이 다쳐요"라고 말한다. 오늘은 원반 놀이를 한 뒤 쓴 용구를 하나하나 살펴 표에 적고, 망가진 것은 따로 두고 알린다고 알린다.',
            student: '갈라진 원반을 보고, 다음 사람이 어디를 다칠 수 있을지 말해 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 용구 상태로 쓸 것과 알릴 것 나누기', minutes: 10, tool: 'mindmap',
              task: '용구 상태 카드를 그대로 쓸 것과 쓰지 말고 알릴 것으로 나누고, 망가진 용구를 찾았을 때 할 일을 골라요.',
              teacher: '"흙이 묻은 것과 망가진 것은 같을까요?" 흙은 털면 되지만 금·찢어짐·바람 빠짐은 알려야 한다는 것을 짚는다. 망가진 것을 찾은 학생을 칭찬해 알리는 일이 부끄러운 일이 아니라는 것을 보인다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '용구 상태 카드를 그대로 쓸 것과 쓰지 말고 알릴 것으로 나누어요.', toolOptions: { topic: '이 용구는?', slots: ['털거나 닦고 그대로 써요', '쓰지 말고 알려요'], cards: ['흙만 묻은 원반', '모양이 그대로인 콘', '테두리가 갈라진 원반', '바람이 빠져 물렁한 공', '손잡이가 끊어진 줄넘기'] }, target: { sort: { '털거나 닦고 그대로 써요': ['흙만 묻은 원반', '모양이 그대로인 콘'], '쓰지 말고 알려요': ['테두리가 갈라진 원반', '바람이 빠져 물렁한 공', '손잡이가 끊어진 줄넘기'] } }, levels: { easy: { state: { at: { '흙만 묻은 원반': 0 } } } }, difficulty: 0.15,
                  hints: ['털거나 닦아서 처음처럼 되는지, 그래도 모양이나 쓰임이 망가져 있는지로 나누어요.', '금이 가고, 바람이 빠지고, 끊어진 것은 닦아도 그대로예요.', '흙 묻은 원반과 멀쩡한 콘만 그대로 쓰고, 나머지 셋은 알려요.'] },
                { prompt: '망가진 용구를 찾았을 때 할 일만 골라요.', toolOptions: { mode: 'pick', topic: '망가진 용구를 찾으면', cards: ['쓰지 않고 따로 빼 두어요', '어디가 어떻게 망가졌는지 선생님께 말해요', '아무 말 없이 창고에 넣어요', '내가 망가뜨린 게 아니니 그냥 둬요'] }, target: { pick: ['쓰지 않고 따로 빼 두어요', '어디가 어떻게 망가졌는지 선생님께 말해요'] }, levels: { challenge: { prompt: '망가진 용구를 찾았을 때 할 일만 골라요. 도와주는 것 같지만 위험한 카드가 있어요.', toolOptions: { cards: ['쓰지 않고 따로 빼 두어요', '어디가 어떻게 망가졌는지 선생님께 말해요', '아무 말 없이 창고에 넣어요', '내가 망가뜨린 게 아니니 그냥 둬요', '테이프로 대충 붙여 계속 써요'] } } }, difficulty: 0.2,
                  hints: ['다음 사람이 모르고 쓰지 않게 하려면 무엇을 해야 할지 떠올려요.', '말없이 넣거나 그냥 두면 다음 사람은 망가진 줄 몰라요.', '따로 빼 두고 선생님께 알리는 두 카드예요.'],
                  conclude: '망가진 용구는 누가 망가뜨렸든 따로 두고 알려야 다음 사람이 다치지 않아요.' },
                { prompt: '용구 상태를 알리는 말로 알맞은 것을 이어요.', toolOptions: { mode: 'match', topic: '이렇게 알려요', slots: [{ id: 'disc', label: '테두리가 갈라진 원반' }, { id: 'ball', label: '바람이 빠진 공' }], cards: ['"3번 원반 테두리에 금이 가서 손이 베일 것 같아요"', '"빨간 공이 바람이 빠져 잘 튀지 않아요"'] }, target: { match: { disc: '"3번 원반 테두리에 금이 가서 손이 베일 것 같아요"', ball: '"빨간 공이 바람이 빠져 잘 튀지 않아요"' } }, difficulty: 0.15 },
              ],
            },
            {
              id: 'a2', title: '활동 2. 원반 놀이 뒤 용구 점검표 쓰기', minutes: 16, tool: 'timer',
              task: '짝과 원반 주고받기를 8분 하고, 모둠 바구니의 용구를 하나씩 살펴 점검표에 적어요. 쓸 것은 제자리에, 망가진 것은 빨간 상자에 넣어요.',
              teacher: '"하나씩 손에 들고 앞·뒤·테두리를 보세요." 원반에 번호를 붙여 두면 어느 것이 망가졌는지 말하기 쉽다. 빨간 상자에 넣은 용구는 모둠 장이 교사에게 상태를 말로 알린다.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '짝과 원반을 8분 주고받은 뒤 모둠 용구를 하나씩 살펴요. 다 살폈으면 표시해요.', free: true, toolOptions: { doneLabel: '원반 놀이 뒤 용구를 하나씩 살폈어요' }, difficulty: 0.1 },
                { prompt: '살핀 용구 수, 제자리에 둔 수, 빨간 상자에 넣은 수를 적어요.', toolOptions: { fields: [{ label: '살핀 용구', unit: '개', max: 30 }, { label: '제자리에 둔 것', unit: '개', max: 30 }, { label: '빨간 상자에 넣은 것', unit: '개', max: 30 }] }, target: { records: true }, difficulty: 0.15 },
                { prompt: '용구를 살피고 정리한 것을 스스로 점검해 표시해요.', target: { selfCheck: ['용구를 하나씩 들고 앞·뒤·테두리를 보았어요', '망가진 것은 빨간 상자에 따로 넣었어요', '망가진 곳을 선생님께 말로 알렸어요'] }, difficulty: 0.1 },
              ],
            },
          ],
          {
            teacher: '"오늘 빨간 상자에 들어간 용구는 몇 개였나요? 알려 준 친구 덕분에 다음 반은 무엇을 피할 수 있나요?" 알린 학생을 칭찬한다. 출구 1번을 틀린 학생에게는 흙 묻음과 망가짐을 다시 견주게 한다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { topic: '이 용구는?', slots: ['털거나 닦고 그대로 써요', '쓰지 말고 알려요'], cards: ['잔디 부스러기가 붙은 콘', '가운데가 찢어진 매트', '실밥이 터져 솜이 나온 콩주머니'] }, prompt: '새 용구 상태 카드를 두 가지로 나누어요.', target: { sort: { '털거나 닦고 그대로 써요': ['잔디 부스러기가 붙은 콘'], '쓰지 말고 알려요': ['가운데가 찢어진 매트', '실밥이 터져 솜이 나온 콩주머니'] } }, difficulty: 0.15 },
              { type: 'choice', prompt: '친구가 망가뜨린 원반을 보았어요. 알맞은 행동은?', options: ['내 것이 아니니 그냥 둔다', '따로 빼 두고 선생님께 알린다', '말없이 창고에 넣는다'], answer: 1, difficulty: 0.15, explain: '누가 망가뜨렸든 알려야 다음 사람이 다치지 않아요.' },
              { type: 'short', prompt: '오늘 살핀 용구 하나의 상태를 알리는 말로 쓰세요.' },
            ],
          },
        ),
        worksheet: {
          title: '살피고, 두고, 알려요',
          items: [
            { type: 'table', prompt: '모둠 용구 점검표를 쓰세요.', columns: ['용구(번호)', '상태', '제자리 / 빨간 상자', '알린 말'], rows: 4 },
            { type: 'choice', prompt: '바람이 빠진 공은 어떻게 하나요?', options: ['그대로 쓴다', '따로 두고 알린다', '세게 차서 튀게 한다'], answer: '따로 두고 알린다' },
            { type: 'check', prompt: '쓰지 말고 알려야 할 용구에 모두 ✓ 하세요.', options: ['흙만 묻은 원반', '금이 간 원반', '끊어진 줄넘기', '멀쩡한 콘'], answer: '금이 간 원반, 끊어진 줄넘기' },
            { type: 'short', prompt: '"망가진 용구는 알리지 않고 그냥 두어도 된다"는 말을 고쳐 쓰세요.' },
          ],
          easy: {
            note: '흙은 털고, 망가진 것은 알려요.',
            items: [
              { type: 'choice', prompt: '테두리가 갈라진 원반은?', options: ['알린다', '그냥 쓴다'], answer: '알린다' },
              { type: 'blank', prompt: '오늘 살핀 용구 수를 쓰세요.', text: '용구 ___개를 살폈어요.' },
              { type: 'draw', prompt: '빨간 상자에 넣은 용구를 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드를 놓으면 바로 맞는지 보이고, 첫 카드가 미리 놓여 있어요.',
          base: '상태 카드를 스스로 나누고 할 일을 골라 확인해요.',
          challenge: '"테이프로 대충 붙여 계속 써요" 같은 위험한 함정 카드를 가려내요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 망가진 용구는 알리지 않고 그냥 두어도 된다고 여긴다 → 갈라진 원반으로 다음 사람이 다칠 곳을 짚는다. ② 내가 망가뜨린 게 아니면 알리지 않는다 → 알린 학생을 칭찬해 알리기가 고마운 일임을 보인다. ③ 흙 묻음과 망가짐을 같게 본다 → 털어 본 뒤에도 그대로인지로 가르게 한다. 빨간 상자의 용구는 교사가 수업 뒤 바로 확인해 고치거나 바꾼다.',
      }),
      // ───────────────────────── 29 ─────────────────────────
      L(29, {
        title: '체육 창고 제자리 정리하고 시설 오래 쓰는 행동 실천하기',
        objective: '용구를 종류에 맞는 제자리에 정리하고, 매트 들어 옮기기처럼 시설과 용구를 오래 쓰기 위한 행동을 골라 활동 중에 실천할 수 있다.',
        illustration: art('a tidy paper storage room with labeled baskets for balls, a disc box, stacked cones and rolled mats, two children carrying a mat together', [
          { motif: 'house', x: 240, y: 170, s: 1.1 }, { motif: 'star', x: 90, y: 90, s: 0.7 }, { motif: 'cloud', x: 380, y: 50 },
          { motif: 'hills', y: 236 },
          { motif: 'text', x: 240, y: 70, text: '제자리에, 오래오래', size: 24 },
        ]),
        safety: [TOOL, CLIMB, SPACE],
        stages: stages(
          {
            teacher: '공과 원반과 콘이 뒤섞인 바구니 사진을 보여 준다. "다음 반이 원반 열 개를 꺼내려면 얼마나 걸릴까요?" 대답을 받아 정리된 창고 사진과 견준다. "매트를 바닥에 끌고 가면 매트는 어떻게 될까요?" 끌린 자국이 난 매트 사진으로 오래 쓰는 행동이 따로 있다는 것을 짚고, 오늘은 강당 오르기 뒤 창고를 제자리 정리하며 그 행동을 실천한다고 알린다.',
            student: '뒤섞인 바구니와 정리된 창고 가운데 다음 반이 더 빨리 쓸 수 있는 쪽과 그 까닭을 말해 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 용구 제자리와 오래 쓰는 행동 알기', minutes: 10, tool: 'mindmap',
              task: '용구를 창고의 제자리로 나누고, 시설과 용구를 오래 쓰는 행동만 골라요. 행동마다 그 까닭을 이어요.',
              teacher: '"매트는 왜 둘이 들어서 옮길까요?" 바닥에 끌면 겉면이 닳고 찢어진다는 것을 짚는다. 흙 묻은 공을 그대로 넣으면 바구니 전체가 더러워진다는 것도 함께 말한다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '용구를 창고의 제자리로 나누어요.', toolOptions: { topic: '체육 창고', slots: ['공 바구니', '원반 상자', '콘 자리', '매트 자리'], cards: ['피구공', '축구공', '원반', '콘', '말아 둔 매트'] }, target: { sort: { '공 바구니': ['피구공', '축구공'], '원반 상자': ['원반'], '콘 자리': ['콘'], '매트 자리': ['말아 둔 매트'] } }, levels: { easy: { state: { at: { '피구공': 0 } } } }, difficulty: 0.1 },
                { prompt: '시설과 용구를 오래 쓰는 행동만 골라요.', toolOptions: { mode: 'pick', topic: '오래 쓰려면', cards: ['매트는 둘이 들어서 옮겨요', '흙 묻은 공은 털고 넣어요', '콘은 겹쳐 세워 두어요', '매트를 바닥에 끌고 가요', '공을 창고 벽에 세게 차요'] }, target: { pick: ['매트는 둘이 들어서 옮겨요', '흙 묻은 공은 털고 넣어요', '콘은 겹쳐 세워 두어요'] }, levels: { challenge: { prompt: '시설과 용구를 오래 쓰는 행동만 골라요. 빨라 보이지만 용구를 상하게 하는 카드가 있어요.', toolOptions: { cards: ['매트는 둘이 들어서 옮겨요', '흙 묻은 공은 털고 넣어요', '콘은 겹쳐 세워 두어요', '매트를 바닥에 끌고 가요', '공을 창고 벽에 세게 차요', '원반을 던져서 상자에 넣어요'] } } }, difficulty: 0.2,
                  hints: ['그 행동을 여러 번 했을 때 용구나 시설이 상하는지 떠올려요.', '끌기·세게 차기·던져 넣기는 겉면과 테두리를 닳게 하거나 깨뜨려요.', '들어 옮기기, 흙 털기, 겹쳐 세우기가 오래 쓰는 행동이에요.'] },
                { prompt: '오래 쓰는 행동마다 그 까닭을 이어요.', toolOptions: { mode: 'match', topic: '왜 그럴까?', slots: [{ id: 'mat', label: '매트는 둘이 들어서 옮겨요' }, { id: 'ball', label: '흙 묻은 공은 털고 넣어요' }, { id: 'cone', label: '콘은 겹쳐 세워 두어요' }], cards: ['바닥에 끌리지 않아 겉면이 찢어지지 않아요', '바구니 속 다른 공까지 더러워지지 않아요', '자리를 덜 차지하고 찌그러지지 않아요'] }, target: { match: { mat: '바닥에 끌리지 않아 겉면이 찢어지지 않아요', ball: '바구니 속 다른 공까지 더러워지지 않아요', cone: '자리를 덜 차지하고 찌그러지지 않아요' } }, difficulty: 0.15,
                  conclude: '제자리에 두고 아껴 다루면 다음 사람이 빨리 찾고, 용구와 시설을 오래 쓸 수 있어요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 강당 오르기 뒤 창고 정리하기', minutes: 16, tool: 'timer',
              task: '매트 위 가로 이동을 8분 하고, 정리 차례대로 매트와 용구를 창고에 돌려놓아요. 정리하며 오래 쓰는 행동을 실천했는지 스스로 점검해요.',
              teacher: '"매트는 네 귀퉁이를 네 명이 들어요. 하나, 둘, 셋에 함께 들어요." 매트를 끄는 모둠이 보이면 멈추고 다시 들게 한다. 창고 앞에서는 한 모둠씩 들어간다.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '매트 위 가로 이동을 8분 하고 정리해요. 다 했으면 표시해요.', free: true, toolOptions: { doneLabel: '가로 이동을 하고 창고를 정리했어요' }, difficulty: 0.1 },
                { prompt: '강당 정리 카드를 하는 차례대로 놓아요.', toolOptions: { cards: ['매트를 창고 매트 자리에 눕혀 쌓기', '매트를 네 명이 들어 창고로 옮기기', '매트 위 물건과 먼지 털기', '창고 문을 닫고 강당 바닥 돌아보기'] }, target: { order: ['매트 위 물건과 먼지 털기', '매트를 네 명이 들어 창고로 옮기기', '매트를 창고 매트 자리에 눕혀 쌓기', '창고 문을 닫고 강당 바닥 돌아보기'] }, levels: { easy: { state: { order: ['매트 위 물건과 먼지 털기', '매트를 창고 매트 자리에 눕혀 쌓기', '창고 문을 닫고 강당 바닥 돌아보기', '매트를 네 명이 들어 창고로 옮기기'] } } }, difficulty: 0.2,
                  hints: ['매트가 지금 어디에 있고, 어디로 가는지 따라가며 생각해요.', '털어야 옮길 수 있고, 옮겨야 쌓을 수 있어요. 문 닫기는 맨 끝이에요.', '털기 → 들어 옮기기 → 매트 자리에 쌓기 → 문 닫고 돌아보기예요.'] },
                { prompt: '정리하며 오래 쓰는 행동을 실천한 것을 스스로 점검해 표시해요.', target: { selfCheck: ['매트를 끌지 않고 함께 들었어요', '용구를 종류에 맞는 제자리에 두었어요', '흙과 먼지를 털고 넣었어요'] }, difficulty: 0.1 },
              ],
            },
          ],
          {
            teacher: '"오늘 정리한 창고를 다음 반이 열면 무엇이 좋을까요?" 두세 명의 대답을 듣는다. 출구 1번을 틀린 학생에게는 끌린 매트 사진을 다시 보여 준다. 팔과 손가락을 털며 마친다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { mode: 'pick', topic: '오래 쓰려면', cards: ['줄넘기는 줄을 감아 고리에 걸어요', '훌라후프는 굴려서 창고에 던져 넣어요', '젖은 원반은 닦아 말린 뒤 넣어요', '철봉에 매달려 몸을 크게 흔들어요'] }, prompt: '새 용구를 오래 쓰는 행동만 골라요.', target: { pick: ['줄넘기는 줄을 감아 고리에 걸어요', '젖은 원반은 닦아 말린 뒤 넣어요'] }, difficulty: 0.15 },
              { type: 'choice', prompt: '매트를 옮기는 바른 방법은?', options: ['한 명이 바닥에 끌고 간다', '여럿이 귀퉁이를 들어 옮긴다', '굴려서 던진다'], answer: 1, difficulty: 0.1, explain: '끌면 겉면이 닳아 찢어져요. 함께 들어 옮겨요.' },
              { type: 'short', prompt: '오늘 실천한 오래 쓰는 행동 하나와 그 까닭을 쓰세요.' },
            ],
          },
        ),
        worksheet: {
          title: '제자리에, 오래오래',
          items: [
            { type: 'table', prompt: '용구와 제자리를 쓰세요.', columns: ['용구', '제자리', '넣기 전에 할 일'], cells: [['공', '', ''], ['원반', '', ''], ['콘', '', ''], ['매트', '', '']] },
            { type: 'table', prompt: '강당 정리 카드에 하는 차례대로 1~4를 쓰세요.', columns: ['카드', '차례'], cells: [['매트를 창고 매트 자리에 눕혀 쌓기', ''], ['매트를 네 명이 들어 창고로 옮기기', ''], ['매트 위 물건과 먼지 털기', ''], ['창고 문을 닫고 강당 바닥 돌아보기', '']], answer: '털기 1, 옮기기 2, 쌓기 3, 돌아보기 4' },
            { type: 'choice', prompt: '흙 묻은 공을 넣기 전에 할 일에 ○ 하세요.', options: ['흙을 턴다', '그대로 넣는다', '물에 담가 둔다'], answer: '흙을 턴다' },
            { type: 'short', prompt: '시설을 오래 쓰기 위해 내가 앞으로 할 행동 하나를 쓰세요.' },
          ],
          easy: {
            note: '들어서 옮기고, 털어서 넣고, 제자리에.',
            items: [
              { type: 'choice', prompt: '원반의 제자리는?', options: ['원반 상자', '공 바구니'], answer: '원반 상자' },
              { type: 'choice', prompt: '매트는?', options: ['함께 들어 옮긴다', '끌고 간다'], answer: '함께 들어 옮긴다' },
              { type: 'draw', prompt: '정리된 체육 창고를 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드를 놓으면 바로 맞는지 보이고, 첫 카드가 미리 놓여 있어요.',
          base: '제자리 나누기와 정리 차례를 스스로 세워 확인해요.',
          challenge: '"원반을 던져서 상자에 넣어요" 같은 빨라 보이는 함정 카드를 가려내요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 빨리 끝내려고 매트를 끌거나 원반을 던져 넣는다 → 끌린 자국 사진으로 오래 쓰는 행동을 견준다. ② 공과 원반을 한 바구니에 섞는다 → 창고 칸에 그림 이름표를 붙인다. ③ 망가진 용구가 섞여 있다 → 지난 차시의 빨간 상자를 창고 앞에 두고 정리 중 찾은 것을 넣게 한다. 가로 이동은 발이 무릎 높이를 넘지 않게 한다.',
      }),
      // ───────────────────────── 30 ─────────────────────────
      L(30, {
        title: '시설을 쓰며 고마웠던 점과 아쉬웠던 점 나누기',
        objective: '학교 운동 시설을 쓰며 겪은 일을 고마웠던 점과 아쉬웠던 점으로 나누어 말하고, 아쉬운 점을 바꿀 수 있는 일로 생각할 수 있다.',
        illustration: art('children on a school field holding two paper signs, one with a smiling sun for thanks and one with a small cloud for wishes, beside a shade tree and a bench', [
          { motif: 'sun', x: 120, y: 70 }, { motif: 'cloud', x: 360, y: 70 }, { motif: 'tree', x: 240, y: 196 },
          { motif: 'hills', y: 232 },
          { motif: 'text', x: 240, y: 150, text: '고마워요 · 아쉬워요', size: 26 },
        ]),
        safety: [SUN, WATER, BOUND],
        stages: stages(
          {
            teacher: '"지난 몇 주 동안 운동장과 체육관을 쓰며 좋았던 일, 불편했던 일이 있었나요?" 손을 들게 한 뒤 묻는다. "불편한 점을 말하면 달라질까요, 그냥 참는 게 나을까요?" 두 의견을 다 들어 두고, 오늘은 시설을 직접 쓰며 고마운 점과 아쉬운 점을 찾아 나누고 그 까닭을 말해 본다고 알린다.',
            student: '시설을 쓰며 불편했던 일 하나를 떠올려 짝에게 말해 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 시설 써 보며 고마운 점·아쉬운 점 찾기', minutes: 14, tool: 'timer',
              task: '모둠이 고른 시설(운동장 둘레 길, 체육관, 철봉)을 10분 동안 써 보며 고마운 점과 아쉬운 점을 하나씩 찾아요. 찾은 수를 적어요.',
              teacher: '"써 보면서 \'이 덕분에 좋다\'와 \'이게 있으면 더 좋겠다\'를 하나씩 찾아요." 철봉은 한 사람씩 매달리고 다른 사람은 뒤에서 기다린다. 찾은 것은 돌아와서 붙임쪽지에 쓴다.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '시설을 쓰러 가기 전에 확인한 것을 눌러 표시해요.', toolOptions: { safety: ['모둠이 쓸 시설과 쓰는 차례를 정했어요', '철봉은 한 사람씩 쓰고 뒤에서 기다려요', '햇볕이 강하면 모자를 쓰고 물을 챙겼어요'] }, target: { safety: true }, difficulty: 0.1 },
                { prompt: '모둠이 고른 시설을 10분 동안 써 보아요. 다 했으면 표시해요.', free: true, toolOptions: { doneLabel: '모둠이 고른 시설을 써 보았어요' }, difficulty: 0.1 },
                { prompt: '찾은 고마운 점과 아쉬운 점의 수를 적어요.', toolOptions: { fields: [{ label: '고마운 점', unit: '개', max: 10 }, { label: '아쉬운 점', unit: '개', max: 10 }] }, target: { records: true }, difficulty: 0.1 },
              ],
            },
            {
              id: 'a2', title: '활동 2. 고마운 점과 아쉬운 점 나누고 까닭 말하기', minutes: 12, tool: 'mindmap',
              task: '친구들이 쓴 쪽지를 고마운 점과 아쉬운 점으로 나누고, 고마운 점마다 고마운 사람을 이어요. 아쉬운 점을 말하는 바른 생각을 골라요.',
              teacher: '"아쉬운 점을 말하는 것은 불평일까요?" 무엇이 불편한지와 어떻게 되면 좋겠는지를 함께 말하면 시설을 더 좋게 만드는 의견이 된다는 것을 짚는다. 불편해도 참는 것이 낫다는 생각을 함께 따져 본다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '친구들이 쓴 쪽지를 고마운 점과 아쉬운 점으로 나누어요.', toolOptions: { topic: '시설을 써 보니', slots: ['고마운 점', '아쉬운 점'], cards: ['체육관 바닥이 늘 깨끗해서 미끄러지지 않아요', '숲길에 새로 깐 나무 판자 덕분에 비 온 뒤에도 걸어요', '운동장 둘레에 그늘이 없어 쉬는 동안 더워요', '철봉이 한 줄뿐이라 오래 기다려요'] }, target: { sort: { '고마운 점': ['체육관 바닥이 늘 깨끗해서 미끄러지지 않아요', '숲길에 새로 깐 나무 판자 덕분에 비 온 뒤에도 걸어요'], '아쉬운 점': ['운동장 둘레에 그늘이 없어 쉬는 동안 더워요', '철봉이 한 줄뿐이라 오래 기다려요'] } }, levels: { easy: { state: { at: { '체육관 바닥이 늘 깨끗해서 미끄러지지 않아요': 0 } } } }, difficulty: 0.1 },
                { prompt: '고마운 점마다 고마운 사람을 이어요.', toolOptions: { mode: 'match', topic: '누구 덕분일까?', slots: [{ id: 'floor', label: '체육관 바닥이 늘 깨끗해요' }, { id: 'board', label: '숲길에 나무 판자가 새로 깔렸어요' }, { id: 'ball', label: '공 바구니에 바람 넣은 공이 가득해요' }], cards: ['날마다 바닥을 닦는 환경을 돌보는 분', '판자를 깔아 준 시설 주무관님', '쉬는 시간에 공에 바람을 넣은 체육부 친구들'] }, target: { match: { floor: '날마다 바닥을 닦는 환경을 돌보는 분', board: '판자를 깔아 준 시설 주무관님', ball: '쉬는 시간에 공에 바람을 넣은 체육부 친구들' } }, difficulty: 0.15,
                  hints: ['고마운 일을 실제로 한 사람이 누구일지 떠올려요.', '닦는 일, 고치고 까는 일, 공을 챙기는 일을 맡은 사람이 달라요.', '바닥은 환경을 돌보는 분, 판자는 주무관님, 공은 체육부 친구들이에요.'] },
                { prompt: '아쉬운 점에 대해 알맞은 생각만 골라요.', toolOptions: { mode: 'pick', topic: '아쉬운 점이 있을 때', cards: ['무엇이 불편한지 구체적으로 말하면 바꿀 수 있어요', '어떻게 되면 좋을지 함께 말해요', '말해도 달라지지 않으니 참는 게 나아요', '불편하면 그 시설을 아예 쓰지 않아요'] }, target: { pick: ['무엇이 불편한지 구체적으로 말하면 바꿀 수 있어요', '어떻게 되면 좋을지 함께 말해요'] }, difficulty: 0.2,
                  hints: ['아쉬운 점이 시설을 더 좋게 만드는 데 쓰이려면 어떻게 해야 할지 생각해요.', '참거나 쓰지 않으면 아무도 불편한 줄 몰라 그대로 남아요.', '구체적으로 말하기와 바라는 점을 함께 말하기 두 카드예요.'],
                  conclude: '아쉬운 점은 무엇이 불편하고 어떻게 되면 좋을지 함께 말할 때 시설을 바꾸는 힘이 돼요.' },
              ],
            },
          ],
          {
            teacher: '"오늘 찾은 아쉬운 점 가운데 가장 많이 나온 것은 무엇인가요?" 칠판의 쪽지를 세어 본다. 출구 1번을 틀린 학생에게는 "이 덕분에"와 "이게 있으면"을 붙여 쪽지를 다시 읽게 한다. 다음 시간에는 이 아쉬운 점으로 학교에 낼 제안을 만든다고 알린다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { topic: '시설을 써 보니', slots: ['고마운 점', '아쉬운 점'], cards: ['수돗가가 가까워 활동 뒤 바로 손을 씻어요', '운동장 시계가 멈춰 있어 시간을 모르겠어요', '체육관 창문에 방충망이 있어 벌레가 안 들어와요'] }, prompt: '새 쪽지를 고마운 점과 아쉬운 점으로 나누어요.', target: { sort: { '고마운 점': ['수돗가가 가까워 활동 뒤 바로 손을 씻어요', '체육관 창문에 방충망이 있어 벌레가 안 들어와요'], '아쉬운 점': ['운동장 시계가 멈춰 있어 시간을 모르겠어요'] } }, difficulty: 0.15 },
              { type: 'choice', prompt: '철봉이 한 줄뿐이라 오래 기다려요. 알맞은 생각은?', options: ['말해도 소용없으니 참는다', '불편한 점과 바라는 점을 정리해 말한다', '철봉을 쓰지 않는다'], answer: 1, difficulty: 0.15, explain: '구체적으로 말해야 바꿀 방법을 함께 찾을 수 있어요.' },
              { type: 'short', prompt: '오늘 시설을 쓰며 고마웠던 점 하나를 고마운 사람과 함께 쓰세요.' },
            ],
          },
        ),
        worksheet: {
          title: '고마워요 · 아쉬워요',
          items: [
            { type: 'table', prompt: '오늘 쓴 시설의 고마운 점과 아쉬운 점을 쓰세요.', columns: ['시설', '고마운 점(누구 덕분에)', '아쉬운 점(무엇이 불편한지)'], rows: 3 },
            { type: 'choice', prompt: '아쉬운 점을 말하는 바른 방법에 ○ 하세요.', options: ['"다 별로예요"라고 한다', '무엇이 불편하고 어떻게 되면 좋을지 말한다', '아무 말도 하지 않는다'], answer: '무엇이 불편하고 어떻게 되면 좋을지 말한다' },
            { type: 'blank', prompt: '고마운 점을 문장으로 쓰세요.', text: '___________ 덕분에 우리는 ___________을 할 수 있어요.' },
            { type: 'short', prompt: '"불편한 점은 말해도 달라지지 않으니 참는 것이 낫다"는 생각에 대한 내 생각을 쓰세요.' },
          ],
          easy: {
            note: '고마운 점: ○○ 덕분에 / 아쉬운 점: ○○이 있으면 좋겠어요.',
            items: [
              { type: 'choice', prompt: '고마운 점은?', options: ['바닥이 깨끗해서 미끄럽지 않아요', '그늘이 없어 더워요'], answer: '바닥이 깨끗해서 미끄럽지 않아요' },
              { type: 'short', prompt: '아쉬웠던 점 하나를 쓰세요.' },
              { type: 'draw', prompt: '고마운 시설을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드를 놓으면 바로 맞는지 보이고, 첫 쪽지가 미리 놓여 있어요.',
          base: '쪽지를 스스로 나누고 고마운 사람을 이어 확인해요.',
          challenge: '활동지에 고마운 점마다 누구 덕분인지, 아쉬운 점마다 무엇이 불편한지를 모두 근거로 써요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 불편한 점은 말해도 달라지지 않으니 참는 것이 낫다고 여긴다 → 학생 의견으로 바뀐 학교 시설 예(숲길 판자 등)를 들려준다. ② 아쉬운 점을 "다 별로"처럼 막연하게 말한다 → 무엇이·언제·어떻게 불편한지 묻는다. ③ 고마움을 어른에게만 돌린다 → 친구들이 한 일도 찾게 한다. 철봉은 한 사람씩, 교사가 곁에 있을 때만 쓴다.',
      }),
      // ───────────────────────── 31 ─────────────────────────
      L(31, {
        title: '아쉬운 점을 학교에 낼 제안으로 바꾸기',
        objective: '시설을 쓰며 찾은 아쉬운 점을 무엇이 문제이고 어떻게 바꾸면 좋을지 담은 제안으로 바꾸고, 좋은 제안의 조건에 맞는지 따져 하나를 정할 수 있다.',
        illustration: art('a child turning a small gray cloud note into a bright paper suggestion card with a shade tent drawing, putting it into a school suggestion box', [
          { motif: 'cloud', x: 110, y: 80 }, { motif: 'sun', x: 380, y: 70 }, { motif: 'house', x: 250, y: 180, s: 0.8 },
          { motif: 'hills', y: 232 },
          { motif: 'text', x: 240, y: 140, text: '아쉬움을 제안으로', size: 24 },
        ]),
        safety: [SUN, WATER, BOUND],
        stages: stages(
          {
            teacher: '지난 시간 칠판에 모은 아쉬운 점 쪽지를 다시 붙인다. "\'그늘이 없어 더워요\'를 학교에 그대로 내면, 학교는 무엇을 해야 할지 알까요?" 대답을 받아 "무엇이 문제인지, 어떻게 바꾸면 좋을지, 우리는 무엇을 할지가 들어가야 제안이 돼요"라고 말한다. 오늘은 아쉬운 점을 제안으로 바꾸고, 제안이 필요한 곳을 직접 가서 확인한다고 알린다.',
            student: '지난 시간 아쉬운 점 가운데 우리 반이 가장 바꾸고 싶은 것을 하나 골라 말해 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 아쉬운 점을 제안으로 바꾸기', minutes: 11, tool: 'mindmap',
              task: '아쉬운 점마다 알맞은 제안을 잇고, 좋은 제안의 조건만 골라요.',
              teacher: '"\'운동장을 다 새로 지어 주세요\'와 \'쉬는 자리 한 곳에 그늘막을 세워 주세요\' 가운데 어느 것이 이루어지기 쉬울까요?" 좋은 제안은 구체적이고, 실천할 수 있고, 까닭(근거)이 있다는 것을 짚는다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '아쉬운 점마다 알맞은 제안을 이어요.', toolOptions: { mode: 'match', topic: '이렇게 바꾸면', slots: [{ id: 'shade', label: '운동장 둘레에 그늘이 없어 쉬는 동안 더워요' }, { id: 'bar', label: '철봉이 한 줄뿐이라 오래 기다려요' }, { id: 'clock', label: '운동장 시계가 멈춰 시간을 모르겠어요' }], cards: ['쉬는 자리 한 곳에 그늘막을 세워 주세요', '쉬는 시간마다 반별로 철봉 쓰는 차례를 정해요', '멈춘 시계의 전지를 갈아 주세요'] }, target: { match: { shade: '쉬는 자리 한 곳에 그늘막을 세워 주세요', bar: '쉬는 시간마다 반별로 철봉 쓰는 차례를 정해요', clock: '멈춘 시계의 전지를 갈아 주세요' } }, levels: { easy: { state: { at: { '쉬는 자리 한 곳에 그늘막을 세워 주세요': 0 } } } }, difficulty: 0.15 },
                { prompt: '좋은 제안의 조건이 되는 것만 골라요.', toolOptions: { mode: 'pick', topic: '좋은 제안은', cards: ['무엇을 어떻게 바꿀지 구체적이에요', '학교와 우리가 실제로 할 수 있는 일이에요', '왜 필요한지 근거가 있어요', '되도록 크고 비싼 것을 바라요', '다른 반 탓을 해요'] }, target: { pick: ['무엇을 어떻게 바꿀지 구체적이에요', '학교와 우리가 실제로 할 수 있는 일이에요', '왜 필요한지 근거가 있어요'] }, difficulty: 0.2,
                  hints: ['제안을 받은 사람이 바로 무엇을 할지 알 수 있는지 떠올려요.', '크고 비싼 것과 남의 탓은 실천하기 어렵고 근거도 아니에요.', '구체적, 실천할 수 있음, 근거가 있음 세 카드예요.'] },
                { prompt: '두 제안 가운데 좋은 제안의 조건에 맞는 것과 맞지 않는 것을 나누어요.', toolOptions: { topic: '이 제안은?', slots: ['조건에 맞아요', '조건에 맞지 않아요'], cards: ['점심시간 운동장이 더워 쉬는 자리 한 곳에 그늘막을 세워 주세요', '운동장을 실내 체육관으로 모두 바꿔 주세요', '그냥 다 좋게 해 주세요'] }, target: { sort: { '조건에 맞아요': ['점심시간 운동장이 더워 쉬는 자리 한 곳에 그늘막을 세워 주세요'], '조건에 맞지 않아요': ['운동장을 실내 체육관으로 모두 바꿔 주세요', '그냥 다 좋게 해 주세요'] } }, difficulty: 0.2,
                  hints: ['근거·구체성·실천할 수 있음 세 조건을 하나씩 대어 보세요.', '모두 바꾸기는 실천이 어렵고, "다 좋게"는 무엇을 할지 알 수 없어요.', '그늘막 제안만 세 조건에 맞아요.'] },
              ],
            },
            {
              id: 'a2', title: '활동 2. 불편할 때 어떻게 할지 고르기', minutes: 6, tool: 'emotion',
              task: '시설이 불편한 장면에서 어떻게 할지 골라요. 고른 행동의 결과를 보고 까닭을 말해요.',
              teacher: '"참기만 하면 다음 반도 같은 불편을 겪어요." 화를 내며 말하는 것과 정리해서 제안하는 것의 차이를 짚는다.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '쉬는 시간마다 운동장 수돗가 물이 잘 안 나와요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '쉬는 시간마다 운동장 수돗가 물이 잘 안 나와 손을 씻기 어려워요.', motif: 'wave', choices: [{ id: 'bear', text: '말해도 안 바뀔 테니 참아요', result: '다음 달에도 물이 잘 안 나왔어요.', mood: '속상함', why: '아무도 말하지 않으면 학교는 불편한 줄 몰라요.' }, { id: 'tell', text: '언제 어떻게 불편한지 적어 학급 회의에서 제안해요', result: '학교가 수도를 고쳐 물이 잘 나왔어요.', mood: '뿌듯함' }, { id: 'angry', text: '수도꼭지를 세게 돌리고 발로 차요', result: '수도꼭지가 더 망가졌어요.', mood: '화남', why: '화풀이는 시설을 더 망가뜨려요.' }] }, target: { choice: 'tell' }, levels: { easy: { toolOptions: { choices: [{ id: 'bear', text: '말해도 안 바뀔 테니 참아요', result: '다음 달에도 물이 잘 안 나왔어요.', mood: '속상함', why: '아무도 말하지 않으면 학교는 불편한 줄 몰라요.' }, { id: 'tell', text: '언제 어떻게 불편한지 적어 학급 회의에서 제안해요', result: '학교가 수도를 고쳐 물이 잘 나왔어요.', mood: '뿌듯함' }] } } }, difficulty: 0.15 },
                { prompt: '체육관 공 바구니의 공이 늘 모자라요. 어떻게 말할까요?', toolOptions: { mode: 'branch', situation: '체육관 공 바구니에 쓸 수 있는 공이 늘 모자라 모둠 활동을 기다려요.', choices: [{ id: 'blame', text: '"다른 반이 다 가져갔어요"라고 말해요', result: '반끼리 서로 탓하며 다투었어요.', mood: '화남', why: '남의 탓은 바꿀 방법을 알려 주지 않아요.' }, { id: 'count', text: '공 수를 세어 "모둠마다 하나씩 쓰려면 두 개가 더 필요해요"라고 말해요', result: '학교가 모자란 공 두 개를 채워 주었어요.', mood: '기쁨' }, { id: 'none', text: '공 없이 그냥 구경만 해요', result: '체육 시간에 몸을 거의 움직이지 못했어요.', mood: '속상함', why: '불편을 말하지 않으면 그대로 남아요.' }] }, target: { choice: 'count' }, difficulty: 0.2 },
                { prompt: '제안을 냈는데 바로 바뀌지 않았어요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '그늘막 제안을 냈는데, 학교에서 "다음 달 예산이 정해지면 볼게요"라는 답이 왔어요.', motif: 'sun', choices: [{ id: 'quit', text: '"역시 말해도 안 돼"라며 포기해요', result: '다음 달 아무도 다시 묻지 않았어요.', mood: '속상함', why: '바로 바뀌지 않아도 과정이 남아 있어요.' }, { id: 'wait', text: '그동안 할 수 있는 일(모자·물 챙기기)을 하며 다음 달에 다시 여쭈어요', result: '다음 달 그늘막이 세워졌어요.', mood: '뿌듯함' }] }, target: { choice: 'wait' }, difficulty: 0.2,
                  conclude: '불편은 참거나 화내지 않고, 근거를 들어 제안하고 기다리며 할 수 있는 일을 할 때 바뀌어요.' },
              ],
            },
            {
              id: 'a3', title: '활동 3. 제안이 필요한 곳 직접 가서 확인하기', minutes: 9, tool: 'timer',
              task: '모둠이 고른 제안이 필요한 곳(쉬는 자리, 철봉, 수돗가 등)에 직접 가서 걸음으로 재거나 세어 근거를 모아요. 모은 근거 수를 적어요.',
              teacher: '"근거는 숫자로 모으면 힘이 세요. 쉬는 자리에 그늘이 몇 걸음인지, 철봉 앞에 몇 명이 기다리는지 세어 와요." 모둠마다 근거 담당이 활동지에 적는다.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '모둠과 제안이 필요한 곳에 가서 재거나 세어 근거를 모아요. 다 했으면 표시해요.', free: true, toolOptions: { doneLabel: '제안이 필요한 곳에서 근거를 모았어요' }, difficulty: 0.1 },
                { prompt: '모은 근거를 적어요.', toolOptions: { fields: [{ label: '잰 걸음 수 또는 센 사람 수', unit: '', max: 200 }, { label: '모은 근거', unit: '가지', max: 10 }] }, target: { records: true }, difficulty: 0.1 },
                { prompt: '제안을 만든 것을 스스로 점검해 표시해요.', target: { selfCheck: ['무엇이 불편한지 구체적으로 적었어요', '어떻게 바꾸면 좋을지 적었어요', '직접 재거나 센 근거를 하나 넘게 모았어요'] }, difficulty: 0.1 },
              ],
            },
          ],
          {
            teacher: '"우리 모둠 제안의 근거는 무엇인가요?" 모둠마다 근거 하나를 숫자와 함께 말하게 한다. 출구 1번을 틀린 학생에게는 세 조건을 손가락으로 하나씩 대어 보게 한다. 다음 시간에 제안서를 다듬어 학교에 낸다고 알린다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '이렇게 바꾸면', slots: [{ id: 'bench', label: '운동장 벤치가 하나뿐이라 쉬는 자리가 모자라요' }, { id: 'line', label: '운동장 선이 지워져 경기 구역을 모르겠어요' }], cards: ['쉬는 자리 쪽에 벤치를 하나 더 놓아 주세요', '체육 시간 전에 지워진 선을 다시 그려 주세요'] }, prompt: '새 아쉬운 점마다 알맞은 제안을 이어요.', target: { match: { bench: '쉬는 자리 쪽에 벤치를 하나 더 놓아 주세요', line: '체육 시간 전에 지워진 선을 다시 그려 주세요' } }, difficulty: 0.15 },
              { type: 'choice', prompt: '좋은 제안으로 알맞은 것은?', options: ['"다 좋게 해 주세요"', '"철봉 앞에 쉬는 시간마다 열 명이 기다려요. 반별 차례를 정해 주세요"', '"다른 반이 철봉을 다 써요"'], answer: 1, difficulty: 0.15, explain: '근거가 있고, 구체적이며, 실천할 수 있는 제안이에요.' },
              { type: 'short', prompt: '우리 모둠 제안을 "○○ 때문에 ○○해 주세요" 꼴로 쓰세요.' },
            ],
          },
        ),
        worksheet: {
          title: '아쉬움을 제안으로',
          items: [
            { type: 'table', prompt: '아쉬운 점을 제안으로 바꾸어 쓰세요.', columns: ['아쉬운 점', '근거(잰 것·센 것)', '바라는 점', '우리가 할 일'], rows: 2 },
            { type: 'check', prompt: '좋은 제안의 조건에 모두 ✓ 하세요.', options: ['구체적이에요', '실천할 수 있어요', '근거가 있어요', '되도록 비싸요'], answer: '구체적, 실천, 근거' },
            { type: 'choice', prompt: '불편한 점이 있을 때 알맞은 행동에 ○ 하세요.', options: ['참는다', '근거를 모아 제안한다', '시설에 화풀이한다'], answer: '근거를 모아 제안한다' },
            { type: 'short', prompt: '우리 모둠 제안을 한 문장으로 쓰세요.' },
          ],
          easy: {
            note: '무엇이 불편 → 어떻게 바꾸면 → 왜 필요.',
            items: [
              { type: 'choice', prompt: '좋은 제안은?', options: ['쉬는 자리에 그늘막을 세워 주세요', '다 좋게 해 주세요'], answer: '쉬는 자리에 그늘막을 세워 주세요' },
              { type: 'short', prompt: '바꾸고 싶은 점 하나를 쓰세요.' },
              { type: 'draw', prompt: '바뀐 뒤의 모습을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드를 놓으면 바로 맞는지 보이고, 보기가 두 개로 줄어요.',
          base: '제안을 잇고 조건을 스스로 골라 확인해요.',
          challenge: '근거를 숫자로 둘 넘게 모아 제안서 칸을 모두 채워요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 불편한 점은 말해도 달라지지 않으니 참는 것이 낫다고 여긴다 → 제안 뒤 기다리며 할 수 있는 일을 함께 정한다. ② 제안을 크고 막연하게 쓴다 → 한 곳·한 가지로 좁히게 한다. ③ 근거 없이 느낌만 쓴다 → 직접 재거나 센 숫자를 넣게 한다. 근거를 모으러 갈 때 철봉·수돗가 둘레에서는 뛰지 않는다.',
      }),
      // ───────────────────────── 32 ─────────────────────────
      L(32, {
        title: '모둠 제안서 다듬어 발표하고 우리가 할 일 먼저 실천하기',
        objective: '모둠 제안을 문제·근거·제안·우리가 할 일의 짜임으로 다듬어 발표하고, 제안 가운데 우리가 할 수 있는 일을 먼저 실천할 수 있다.',
        illustration: art('children presenting a large paper suggestion poster with four colored boxes, while others pick up stones on the school field together', [
          { motif: 'star', x: 100, y: 90, s: 0.8 }, { motif: 'sun', x: 410, y: 54, s: 0.7 }, { motif: 'tree', x: 400, y: 200 },
          { motif: 'hills', y: 232 },
          { motif: 'text', x: 240, y: 130, text: '말하고, 먼저 해요', size: 26 },
        ]),
        safety: [FIELD, TOOL, SUN],
        stages: stages(
          {
            teacher: '"제안서를 받은 교장 선생님은 무엇이 궁금할까요?" 무엇이 문제인지, 왜 필요한지, 무엇을 바라는지, 너희는 무엇을 할 것인지가 나오도록 묻는다. "학교에만 부탁하고 우리는 아무것도 하지 않으면 어떨까요?" 대답을 받아, 오늘은 제안서를 짜임에 맞게 다듬어 발표하고 우리가 할 수 있는 일을 먼저 해 본다고 알린다.',
            student: '우리 모둠 제안 가운데 우리가 오늘 바로 할 수 있는 일이 있는지 찾아 말해 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 제안서 짜임 세우고 할 일 나누기', minutes: 10, tool: 'mindmap',
              task: '제안서 문장을 짜임에 맞게 잇고, 제안 속 일을 우리가 할 수 있는 일과 학교에 부탁할 일로 나누어요.',
              teacher: '"근거가 제안보다 먼저 와야 읽는 사람이 \'그래서 필요하구나\' 해요." 우리가 할 일이 함께 있으면 제안이 더 믿음직해진다는 것을 짚는다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '그늘막 제안서 문장을 알맞은 짜임 칸에 이어요.', toolOptions: { mode: 'match', topic: '제안서 짜임', slots: [{ id: 'problem', label: '문제' }, { id: 'reason', label: '근거' }, { id: 'ask', label: '제안' }, { id: 'we', label: '우리가 할 일' }], cards: ['점심시간 운동장 쉬는 자리가 무척 더워요', '쉬는 자리 20걸음 안에 그늘이 한 곳도 없어요', '쉬는 자리 한 곳에 그늘막을 세워 주세요', '그늘막이 생기기 전까지 모자와 물을 챙길게요'] }, target: { match: { problem: '점심시간 운동장 쉬는 자리가 무척 더워요', reason: '쉬는 자리 20걸음 안에 그늘이 한 곳도 없어요', ask: '쉬는 자리 한 곳에 그늘막을 세워 주세요', we: '그늘막이 생기기 전까지 모자와 물을 챙길게요' } }, levels: { easy: { state: { at: { '점심시간 운동장 쉬는 자리가 무척 더워요': 0 } } } }, difficulty: 0.2,
                  hints: ['무엇이 불편한지, 그것을 보여 주는 잰 값, 바라는 것, 우리 몫을 차례로 찾아요.', '숫자가 들어간 문장이 근거이고, "~해 주세요"가 제안이에요.', '더워요는 문제, 20걸음은 근거, 세워 주세요는 제안, 챙길게요는 우리가 할 일이에요.'] },
                { prompt: '제안 속 일을 우리가 할 수 있는 일과 학교에 부탁할 일로 나누어요.', toolOptions: { topic: '누가 할까?', slots: ['우리가 할 수 있는 일', '학교에 부탁할 일'], cards: ['운동장 돌을 쉬는 시간마다 주워요', '철봉 쓰는 차례표를 만들어 붙여요', '새 철봉을 한 줄 더 세워요', '멈춘 운동장 시계를 고쳐요'] }, target: { sort: { '우리가 할 수 있는 일': ['운동장 돌을 쉬는 시간마다 주워요', '철봉 쓰는 차례표를 만들어 붙여요'], '학교에 부탁할 일': ['새 철봉을 한 줄 더 세워요', '멈춘 운동장 시계를 고쳐요'] } }, difficulty: 0.15,
                  hints: ['도구나 비용, 높은 곳 작업이 필요한 일인지 따져요.', '세우고 고치는 일은 어른과 학교의 몫이에요.', '돌 줍기와 차례표는 우리가, 철봉 세우기와 시계 고치기는 학교가 해요.'] },
                { prompt: '발표할 때 알맞은 태도만 골라요.', toolOptions: { mode: 'pick', topic: '제안 발표', cards: ['근거 숫자를 또박또박 말해요', '다른 모둠 제안도 끝까지 들어요', '우리 제안만 옳다고 우겨요', '근거 없이 목소리만 크게 해요'] }, target: { pick: ['근거 숫자를 또박또박 말해요', '다른 모둠 제안도 끝까지 들어요'] }, difficulty: 0.15,
                  conclude: '제안서는 문제·근거·제안·우리가 할 일로 짜고, 우리 몫을 먼저 실천하면 더 힘이 생겨요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 근거 그래프로 발표하기', minutes: 6, tool: 'chart',
              task: '한 모둠이 근거로 쓴 그래프예요. 쉬는 시간마다 철봉 앞에서 기다린 사람 수를 닷새 동안 세었어요. 그래프를 읽고 물음에 답해요.',
              teacher: '"닷새 기록을 모으니 하루만 센 것보다 믿음직하지요?" 발표할 때 가장 많은 날과 평균에 가까운 날을 함께 말하면 좋다는 것을 짚는다.',
              options: { type: 'bar', mode: 'read', title: '쉬는 시간 철봉 앞에서 기다린 사람 수', unit: '명', xLabel: '요일', yLabel: '사람 수(명)', max: 14, scale: 2, data: [['월', 8], ['화', 10], ['수', 12], ['목', 6], ['금', 10]] },
              levels: { easy: { showValues: true }, base: {}, challenge: { revealAfterCheck: true } },
              items: [
                { prompt: '기다린 사람이 가장 많은 요일을 골라요.', toolOptions: { question: '가장 많이 기다린 요일은?', choices: ['월', '화', '수', '목', '금'] }, target: { pick: 2 }, difficulty: 0.1 },
                { prompt: '닷새 동안 기다린 사람 수를 모두 더하면 몇 명인가요? 수를 넣어요.', target: { value: 46 }, difficulty: 0.25 },
                { prompt: '이 그래프로 뒷받침하기 알맞은 제안을 골라요.', toolOptions: { question: '알맞은 제안은?', choices: ['쉬는 시간마다 반별 철봉 차례를 정해요', '운동장 시계를 고쳐 주세요', '그늘막을 세워 주세요'], why: [null, '시계는 기다린 사람 수와 상관이 없어요.', '그늘막은 기다린 사람 수와 상관이 없어요.'] }, target: { pick: 0 }, difficulty: 0.15 },
              ],
            },
            {
              id: 'a3', title: '활동 3. 우리가 할 일 먼저 실천하기', minutes: 10, tool: 'timer',
              task: '모둠마다 2분씩 제안서를 발표하고, 남은 시간에 우리가 할 수 있는 일(운동장 돌 줍기·차례표 붙이기)을 먼저 실천해요.',
              teacher: '"발표는 2분, 질문은 하나만 받아요." 여섯 모둠이면 발표에 12분이 넘으니, 오늘은 세 모둠이 발표하고 나머지는 다음 체육 시간 처음에 발표한다. 돌 줍기는 장갑을 끼고 정해진 구역에서만 한다.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '발표 시간을 맞춰요. 한 모둠 2분(120초) 발표, 바꾸는 시간 30초로 세 모둠이에요.', toolOptions: { plan: { work: 60, rest: 60, rounds: 2 }, workStep: 30, restStep: 10 }, target: { plan: { work: 120, rest: 30, rounds: 3 } }, difficulty: 0.2 },
                { prompt: '우리가 할 수 있는 일을 모둠과 실천해요. 다 했으면 표시해요.', free: true, toolOptions: { doneLabel: '우리가 할 일을 먼저 실천했어요' }, difficulty: 0.1 },
                { prompt: '제안을 다듬고 실천한 것을 스스로 점검해 표시해요.', target: { selfCheck: ['제안서를 문제·근거·제안·할 일로 다듬었어요', '근거 숫자를 넣어 말했어요', '우리가 할 일을 하나 먼저 실천했어요'] }, difficulty: 0.1 },
              ],
            },
          ],
          {
            teacher: '"우리가 먼저 실천해 보니 어땠나요? 학교에 부탁할 일과 함께 내면 무엇이 달라질까요?" 두세 명의 대답을 듣는다. 출구 1번을 틀린 학생에게는 숫자가 들어간 문장을 찾게 한다. 다듬은 제안서는 학급 회의를 거쳐 학교에 낸다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '제안서 짜임', slots: [{ id: 'problem', label: '문제' }, { id: 'reason', label: '근거' }, { id: 'ask', label: '제안' }], cards: ['체육관 공이 모자라 모둠이 기다려요', '모둠 여섯에 쓸 수 있는 공은 네 개뿐이에요', '공을 두 개 더 마련해 주세요'] }, prompt: '공 제안서 문장을 알맞은 짜임 칸에 이어요.', target: { match: { problem: '체육관 공이 모자라 모둠이 기다려요', reason: '모둠 여섯에 쓸 수 있는 공은 네 개뿐이에요', ask: '공을 두 개 더 마련해 주세요' } }, difficulty: 0.2 },
              { type: 'choice', prompt: '"운동장 돌을 쉬는 시간마다 주워요"는 누가 할 일인가요?', options: ['우리가 할 수 있는 일', '학교에 부탁할 일', '아무도 하지 않을 일'], answer: 0, difficulty: 0.1, explain: '도구나 비용 없이 우리가 바로 할 수 있는 일이에요.' },
              { type: 'short', prompt: '오늘 먼저 실천한 일과 그 뒤 달라진 점을 쓰세요.' },
            ],
          },
        ),
        worksheet: {
          title: '우리 모둠 제안서',
          items: [
            { type: 'table', prompt: '제안서를 짜임에 맞게 쓰세요.', columns: ['짜임', '내용'], cells: [['문제', ''], ['근거', ''], ['제안', ''], ['우리가 할 일', '']] },
            { type: 'figure', wide: true, prompt: '그래프에서 가장 많이 기다린 요일에 ○ 하세요.', tool: 'chart', options: { type: 'bar', mode: 'read', title: '쉬는 시간 철봉 앞에서 기다린 사람 수', unit: '명', max: 15, scale: 5, data: [['월', 8], ['화', 10], ['수', 12], ['목', 6], ['금', 10]] }, figures: [{ state: {}, caption: '막대가 길수록 많이 기다렸어요' }], answer: '수' },
            { type: 'blank', prompt: '발표 시간을 구하세요.', text: '2분씩 발표하고 30초씩 바꾸며 세 모둠이 하면 ___초예요.', answer: '420' },
            { type: 'short', prompt: '제안 가운데 우리가 먼저 할 수 있는 일을 쓰세요.' },
          ],
          easy: {
            note: '문제 → 근거 → 제안 → 우리가 할 일.',
            items: [
              { type: 'choice', prompt: '근거는?', options: ['그늘이 20걸음 안에 없어요', '그늘막을 세워 주세요'], answer: '그늘이 20걸음 안에 없어요' },
              { type: 'short', prompt: '우리가 할 수 있는 일 하나를 쓰세요.' },
              { type: 'draw', prompt: '제안이 이루어진 모습을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드를 놓으면 바로 맞는지 보이고, 그래프 막대 위에 값이 보여요.',
          base: '짜임과 할 일을 스스로 잇고 그래프를 읽어요.',
          challenge: '그래프 값은 맞힌 뒤에만 보여 닷새 합을 눈금으로 읽어 셈해요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 제안은 학교만 하는 일이라고 여긴다 → 우리가 할 일 칸을 꼭 채우게 한다. ② 근거와 제안을 섞어 쓴다 → 숫자 문장은 근거, "~해 주세요"는 제안으로 가른다. ③ 발표가 길어져 시간이 모자란다 → 타이머로 2분을 지키고 나머지 모둠은 다음 시간에 한다. 돌 줍기는 장갑을 끼고 유리 조각은 줍지 말고 교사에게 알리게 한다.',
      }),
      // ───────────────────────── 33 ─────────────────────────
      L(33, {
        title: '내 기록 보고 이룰 수 있는 목표와 지나친 목표 가르기',
        objective: '지난 기록을 보고 이룰 수 있는 목표와 지나친 목표를 갈라 그 까닭을 말하고, 상대 팀이 잘한 점을 근거를 들어 말할 수 있다.',
        illustration: art('a child standing at the bottom of a staircase of paper steps with small flags, choosing the next step instead of the far top, holding a flying disc', [
          { motif: 'star', x: 400, y: 70 }, { motif: 'mountain', x: 330, y: 180, s: 0.8 }, { motif: 'cloud', x: 140, y: 50 },
          { motif: 'hills', y: 232 },
          { motif: 'text', x: 200, y: 130, text: '한 계단씩 올라요', size: 26 },
        ]),
        safety: [DISC, DISC2, SPACE],
        stages: stages(
          {
            teacher: '"원반 받기를 10번 중 5번 받는 친구가 \'다음 주에 10번 모두 받겠다\'고 목표를 세웠어요. 좋은 목표일까요?" 대답을 받아 "목표는 높게 잡을수록 좋을까요?"를 묻는다. 지나친 목표는 금방 포기하게 만든다는 의견을 끌어내고, 오늘은 기록을 보고 이룰 수 있는 목표를 세우고 상대 팀의 잘한 점도 찾아본다고 알린다.',
            student: '내가 지금 원반을 10번 중 몇 번쯤 받는지 어림해 말해 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 기록 그래프로 알맞은 목표 찾기', minutes: 8, tool: 'chart',
              task: '준호가 4주 동안 원반 받기를 한 기록(10번 던져 받은 수)을 읽고, 다음 주에 알맞은 목표를 골라요.',
              teacher: '"한 주에 몇 번씩 늘었나요? 그 빠르기로 다음 주는 몇 번쯤일까요?" 지난 기록이 늘어난 빠르기가 목표의 근거라는 것을 짚는다. "10번 던져서 15번을 받을 수 있을까요?"라고 물어 지나친 목표를 가려내게 한다.',
              options: { type: 'line', mode: 'read', title: '준호의 원반 받기(10번 중 받은 수)', unit: '번', xLabel: '주', yLabel: '받은 수(번)', max: 10, scale: 1, data: [['1주', 4], ['2주', 5], ['3주', 6], ['4주', 7]] },
              levels: { easy: { showValues: true }, base: {}, challenge: { revealAfterCheck: true } },
              items: [
                { prompt: '1주에서 4주까지 받은 수는 모두 몇 번 늘었나요? 수를 넣어요.', target: { value: 3 }, difficulty: 0.15 },
                { prompt: '준호의 다음 주 목표로 가장 알맞은 것을 골라요.', toolOptions: { question: '다음 주 알맞은 목표는?', choices: ['10번 중 8번', '10번 중 15번', '10번 중 3번'], why: [null, '10번 던져서 15번은 받을 수 없어요. 지나친 목표예요.', '이미 7번을 받으니 3번은 목표가 되지 않아요.'] }, target: { pick: 0 }, difficulty: 0.15,
                  predict: { q: '준호는 한 주에 보통 몇 번씩 늘었을까요?', options: ['1번쯤', '5번쯤'], answer: 0 } },
                { prompt: '준호가 "다음 주에 10번 모두 받기"를 목표로 하면 어떤 일이 생기기 쉬울까요?', toolOptions: { question: '생기기 쉬운 일은?', choices: ['3번이나 더 늘어야 해서 금방 지치고 포기하기 쉽다', '틀림없이 이룬다', '목표가 너무 낮아 지루하다'], why: [null, '한 주에 1번씩 늘었으니 3번은 어렵기 쉬워요.', '10번은 지금보다 높은 목표예요.'] }, target: { pick: 0 }, difficulty: 0.2,
                  conclude: '좋은 목표는 지난 기록이 늘어난 빠르기를 보고, 조금 애쓰면 닿을 만큼 정해요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 목표 가르고 상대의 잘한 점 찾기', minutes: 9, tool: 'mindmap',
              task: '지금 10번 중 6번 받는 친구의 목표 카드를 이룰 수 있는 목표와 지나친 목표로 나누어요. 상대 팀 장면마다 근거 있는 칭찬을 이어요.',
              teacher: '"\'반에서 1등 하기\'는 내가 연습해서 정할 수 있는 목표일까요?" 남과 견주는 목표는 내 노력만으로 정해지지 않는다는 것을 짚는다. 칭찬은 무엇을 잘했는지 장면을 들어 말한다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '지금 10번 중 6번 받는 친구의 목표를 이룰 수 있는 목표와 지나친 목표로 나누어요.', toolOptions: { topic: '이 목표는?', slots: ['이룰 수 있는 목표', '지나친 목표'], cards: ['다음 주 10번 중 7번 받기', '한 달 뒤 10번 중 8번 받기', '내일 10번 모두 받기', '다음 주 반에서 1등 하기'] }, target: { sort: { '이룰 수 있는 목표': ['다음 주 10번 중 7번 받기', '한 달 뒤 10번 중 8번 받기'], '지나친 목표': ['내일 10번 모두 받기', '다음 주 반에서 1등 하기'] } }, levels: { easy: { state: { at: { '다음 주 10번 중 7번 받기': 0 } } } }, difficulty: 0.2,
                  hints: ['지금 기록에서 얼마나 늘어야 하는지, 내 노력으로 정해지는지를 따져요.', '하루 만에 4번 더 늘기와 남과 견주는 1등은 지금 기록으로 닿기 어려워요.', '다음 주 7번과 한 달 뒤 8번이 이룰 수 있는 목표예요.'] },
                { prompt: '상대 팀 장면마다 근거 있는 칭찬을 이어요.', toolOptions: { mode: 'match', topic: '이렇게 칭찬해요', slots: [{ id: 'catch', label: '상대 팀이 낮게 온 원반을 무릎을 굽혀 받았어요' }, { id: 'call', label: '상대 팀이 던지기 전에 이름을 불러 신호를 주었어요' }, { id: 'help', label: '상대 팀이 넘어진 우리 팀 친구를 일으켜 주었어요' }], cards: ['"무릎을 굽혀 낮은 원반을 받는 자세가 좋았어"', '"던지기 전에 이름을 불러서 받기 쉬웠어"', '"넘어진 친구를 먼저 일으켜 줘서 고마워"'] }, target: { match: { catch: '"무릎을 굽혀 낮은 원반을 받는 자세가 좋았어"', call: '"던지기 전에 이름을 불러서 받기 쉬웠어"', help: '"넘어진 친구를 먼저 일으켜 줘서 고마워"' } }, difficulty: 0.15 },
                { prompt: '상대 팀에게 하는 말 가운데 근거를 든 칭찬만 골라요.', toolOptions: { mode: 'pick', topic: '근거 있는 칭찬', cards: ['"너희 팀은 원반을 낮고 곧게 던져서 받기 쉬웠어"', '"패스하기 전에 손을 들어 자리를 알려 준 게 좋았어"', '"그냥 잘하네"', '"운이 좋았을 뿐이야"'] }, target: { pick: ['"너희 팀은 원반을 낮고 곧게 던져서 받기 쉬웠어"', '"패스하기 전에 손을 들어 자리를 알려 준 게 좋았어"'] }, difficulty: 0.2,
                  hints: ['무엇을 어떻게 잘했는지 장면이 들어 있는 말을 찾아요.', '"그냥 잘하네"에는 장면이 없고, "운이 좋았을 뿐"은 칭찬이 아니에요.', '낮고 곧은 던지기와 손을 들어 알린 일을 든 두 말이에요.'],
                  conclude: '근거 있는 칭찬은 상대가 무엇을 잘했는지 장면을 들어 말하는 것이고, 그것이 내가 배울 점이 돼요.' },
              ],
            },
            {
              id: 'a3', title: '활동 3. 원반 받기 재고 내 목표 세우기', minutes: 9, tool: 'timer',
              task: '짝이 10번 던져 주는 원반을 받아 받은 수를 세요. 내 기록을 보고 다음 주 목표를 세워 적어요.',
              teacher: '"짝은 열 걸음 떨어져 가슴 높이로 던져 줘요." 받은 수를 짝이 센다. 목표를 크게 잡는 학생에게 "한 주에 몇 번 늘 수 있을까?"를 묻고, 작게 잡는 학생에게는 "조금 애쓰면 닿을 만큼이에요"라고 말한다.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '짝이 던져 주는 원반 10개를 받아 보아요. 다 했으면 표시해요.', free: true, toolOptions: { doneLabel: '짝과 원반 받기 10번을 했어요' }, difficulty: 0.1 },
                { prompt: '오늘 받은 수와 다음 주 목표를 적어요.', toolOptions: { fields: [{ label: '오늘 받은 수(10번 중)', unit: '번', max: 10 }, { label: '다음 주 목표(10번 중)', unit: '번', max: 10 }] }, target: { records: true }, difficulty: 0.1 },
                { prompt: '목표를 세운 것을 스스로 점검해 표시해요.', target: { selfCheck: ['오늘 기록을 보고 목표를 정했어요', '조금 애쓰면 닿을 만큼으로 정했어요', '그 목표가 지나치지 않은 까닭을 말할 수 있어요'] }, difficulty: 0.1 },
              ],
            },
          ],
          {
            teacher: '"내 목표가 지나치지 않은 까닭을 짝에게 말해 볼까요?" 두세 명의 까닭을 듣는다. 출구 1번을 틀린 학생에게는 지금 기록에서 몇 번 늘어야 하는지 셈하게 한다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { topic: '이 목표는?', slots: ['이룰 수 있는 목표', '지나친 목표'], cards: ['지금 손잡이 8개 이동 → 다음 주 9개', '지금 손잡이 8개 이동 → 내일 30개', '지금 3분 걷기 → 다음 주 4분 걷기'] }, prompt: '새 목표를 이룰 수 있는 목표와 지나친 목표로 나누어요.', target: { sort: { '이룰 수 있는 목표': ['지금 손잡이 8개 이동 → 다음 주 9개', '지금 3분 걷기 → 다음 주 4분 걷기'], '지나친 목표': ['지금 손잡이 8개 이동 → 내일 30개'] } }, difficulty: 0.15 },
              { type: 'choice', prompt: '"목표는 높게 잡을수록 좋다"는 생각을 고친 것은?', options: ['목표는 아무렇게나 정한다', '지난 기록을 보고 조금 애쓰면 닿을 만큼 정한다', '목표는 낮을수록 좋다'], answer: 1, difficulty: 0.15, explain: '지나친 목표는 금방 포기하게 만들고, 너무 낮은 목표는 늘지 않게 해요.' },
              { type: 'short', prompt: '상대 팀이나 짝에게서 배우고 싶은 점 하나를 장면과 함께 쓰세요.' },
            ],
          },
        ),
        worksheet: {
          title: '한 계단씩 올라요',
          items: [
            { type: 'table', prompt: '내 기록과 목표를 쓰세요.', columns: ['오늘 기록', '다음 주 목표', '한 달 뒤 목표', '지나치지 않은 까닭'], rows: 1 },
            { type: 'figure', wide: true, prompt: '준호의 기록 그래프를 보고 다음 주 점을 어림해 찍어 보세요.', tool: 'chart', options: { type: 'line', mode: 'read', title: '준호의 원반 받기(10번 중 받은 수)', unit: '번', max: 9, scale: 3, data: [['1주', 4], ['2주', 5], ['3주', 6], ['4주', 7]] }, figures: [{ state: {}, caption: '한 주에 몇 번씩 늘었나요?' }], answer: '5주 8번쯤' },
            { type: 'choice', prompt: '지금 10번 중 6번 받는 친구에게 알맞은 다음 주 목표에 ○ 하세요.', options: ['10번 중 7번', '10번 중 20번', '반에서 1등'], answer: '10번 중 7번' },
            { type: 'short', prompt: '상대 팀이 잘한 점을 근거를 들어 칭찬하는 말로 쓰세요.' },
          ],
          easy: {
            note: '좋은 목표 = 지금보다 조금 더.',
            items: [
              { type: 'choice', prompt: '지금 5번 받으면 알맞은 목표는?', options: ['6번', '15번'], answer: '6번' },
              { type: 'blank', prompt: '내 목표를 쓰세요.', text: '다음 주에는 10번 중 ___번 받기.' },
              { type: 'draw', prompt: '원반을 받는 내 자세를 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '그래프 점 위에 값이 보이고, 첫 목표 카드가 미리 놓여 있어요.',
          base: '그래프 눈금을 읽고 목표를 스스로 나누어 확인해요.',
          challenge: '그래프 값은 맞힌 뒤에만 보이고, 한 달 뒤 목표까지 근거를 들어 써요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 목표는 높게 잡을수록 좋다고 여긴다 → 한 주에 늘어난 빠르기로 다음 주를 어림하게 한다. ② 남과 견주는 목표(1등)를 세운다 → 내 노력으로 정할 수 있는 목표로 바꾸게 한다. ③ 칭찬을 "잘하네"로 끝낸다 → 장면을 붙이게 한다. 원반 받기는 열 걸음 거리, 가슴 높이로 던지고 받는 사람이 준비되었을 때만 던진다.',
      }),
      // ───────────────────────── 34 ─────────────────────────
      L(34, {
        title: '원반 패스 게임에서 상대 팀의 기술 찾아 근거 들어 말하기',
        objective: '원반 패스 게임을 하고 관찰하며 상대 팀이 잘한 기술을 장면과 근거를 들어 말하고, 그 기술을 우리 팀이 배울 점으로 바꿀 수 있다.',
        illustration: art('two small teams passing a flying disc on a school field while a third group watches from the side with observation cards and thumbs up', [
          { motif: 'tree', x: 70, y: 200 }, { motif: 'star', x: 260, y: 100, s: 0.8 }, { motif: 'sun', x: 420, y: 54, s: 0.7 },
          { motif: 'hills', y: 232 },
          { motif: 'text', x: 240, y: 150, text: '잘한 점을 찾아 말해요', size: 24 },
        ]),
        safety: [DISC, DISC2, SPACE, BOUND],
        stages: stages(
          {
            teacher: '오늘 할 원반 패스 게임을 알린다. "한 팀 셋이 원반을 떨어뜨리지 않고 다섯 번 이어 주고받으면 1점이에요. 상대 팀은 원반을 막을 수 있지만 몸에 닿으면 안 돼요." 이어 묻는다. "상대 팀이 잘하면 어떤 마음이 드나요? 그 기술은 우리에게 어떤 쓸모가 있을까요?" 오늘은 경기하는 팀과 관찰하는 팀을 번갈아 하며 상대의 기술을 찾는다고 알린다.',
            student: '지난 시간 짝에게서 배우고 싶었던 점을 하나 말해 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 패스 게임하고 관찰하기', minutes: 14, tool: 'timer',
              task: '두 팀이 4분 경기하는 동안 다른 한 팀은 관찰 카드에 상대 팀의 잘한 기술을 적어요. 세 번 돌아가며 경기와 관찰을 모두 해요.',
              teacher: '"관찰 팀은 \'누가, 언제, 무엇을\' 적어요." 4분씩 세 판이면 12분이고 바꾸는 시간을 더해 14분 안에 마친다. 원반을 막을 때 몸을 밀거나 잡는 학생이 보이면 바로 멈추고 규칙을 다시 말한다.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '경기 4분, 바꾸는 시간 1분으로 세 판을 하도록 타이머를 맞춰요.', toolOptions: { plan: { work: 120, rest: 120, rounds: 2 }, workStep: 30, restStep: 30 }, target: { plan: { work: 240, rest: 60, rounds: 3 } }, difficulty: 0.2 },
                { prompt: '세 판 동안 경기와 관찰을 돌아가며 해요. 다 했으면 표시해요.', free: true, toolOptions: { doneLabel: '패스 게임과 관찰을 모두 했어요' }, difficulty: 0.1 },
                { prompt: '우리 팀 점수와 관찰 카드에 적은 상대 팀 기술의 수를 적어요.', toolOptions: { fields: [{ label: '우리 팀 점수(세 판 합)', unit: '점', max: 30 }, { label: '적은 상대 팀 기술', unit: '가지', max: 10 }] }, target: { records: true }, difficulty: 0.1 },
              ],
            },
            {
              id: 'a2', title: '활동 2. 상대 팀 기술을 근거 들어 말하기', minutes: 12, tool: 'mindmap',
              task: '관찰 카드의 말을 근거 있는 칭찬과 근거 없는 말로 나누고, 상대 기술마다 우리 팀이 배울 점을 이어요.',
              teacher: '"\'잘했어\'와 \'빈 곳으로 달려가 받았어\' 가운데 어느 말이 배울 점을 알려 주나요?" 상대의 기술을 장면으로 말하면 그대로 우리 연습 방법이 된다는 것을 짚는다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '관찰 카드의 말을 근거 있는 칭찬과 근거 없는 말로 나누어요.', toolOptions: { topic: '관찰 카드', slots: ['근거 있는 칭찬', '근거 없는 말'], cards: ['"막는 사람이 없는 빈 곳으로 달려가 받았어"', '"원반을 받자마자 바로 다음 사람을 보았어"', '"그냥 잘해"', '"너희 팀은 키가 커서 이긴 거야"'] }, target: { sort: { '근거 있는 칭찬': ['"막는 사람이 없는 빈 곳으로 달려가 받았어"', '"원반을 받자마자 바로 다음 사람을 보았어"'], '근거 없는 말': ['"그냥 잘해"', '"너희 팀은 키가 커서 이긴 거야"'] } }, levels: { easy: { state: { at: { '"막는 사람이 없는 빈 곳으로 달려가 받았어"': 0 } } }, challenge: { prompt: '관찰 카드의 말을 두 가지로 나누어요. 칭찬처럼 들리지만 상대를 깎아내리는 말도 있어요.', toolOptions: { cards: ['"막는 사람이 없는 빈 곳으로 달려가 받았어"', '"원반을 받자마자 바로 다음 사람을 보았어"', '"그냥 잘해"', '"너희 팀은 키가 커서 이긴 거야"', '"잘하긴 했는데 우리가 봐줬지"'] } } }, difficulty: 0.2,
                  hints: ['상대가 무엇을 어떻게 했는지 장면이 들어 있는지 보세요.', '키나 "봐줬다"는 상대의 기술이 아니라 핑계예요.', '빈 곳으로 달려가기와 받자마자 다음 사람 보기가 근거 있는 칭찬이에요.'] },
                { prompt: '상대 팀 기술마다 우리 팀이 배울 점을 이어요.', toolOptions: { mode: 'match', topic: '우리가 배울 점', slots: [{ id: 'space', label: '막는 사람이 없는 빈 곳으로 달려가 받았어요' }, { id: 'look', label: '받자마자 바로 다음 사람을 보았어요' }, { id: 'low', label: '원반을 낮고 짧게 주고받았어요' }], cards: ['원반이 오기 전에 빈 곳을 찾아 움직이기', '받는 동안 눈으로 다음 사람 찾기', '먼 곳 대신 가까운 친구에게 짧게 주기'] }, target: { match: { space: '원반이 오기 전에 빈 곳을 찾아 움직이기', look: '받는 동안 눈으로 다음 사람 찾기', low: '먼 곳 대신 가까운 친구에게 짧게 주기' } }, difficulty: 0.15 },
                { prompt: '상대 팀을 칭찬할 때 알맞은 생각만 골라요.', toolOptions: { mode: 'pick', topic: '칭찬할 때', cards: ['상대의 기술을 인정하면 내가 배울 점이 생겨요', '칭찬을 받은 상대도 우리를 더 존중해요', '상대를 칭찬하면 우리 팀이 약해 보여요', '진 날에는 칭찬하지 않아요'] }, target: { pick: ['상대의 기술을 인정하면 내가 배울 점이 생겨요', '칭찬을 받은 상대도 우리를 더 존중해요'] }, difficulty: 0.2,
                  hints: ['칭찬이 우리 팀에게 남겨 주는 것이 무엇인지 떠올려요.', '칭찬은 약함이 아니라 상대 기술을 알아보는 힘이에요. 이긴 날도 진 날도 해요.', '배울 점이 생긴다, 서로 존중한다는 두 카드예요.'],
                  conclude: '상대의 기술을 장면으로 칭찬하면 그 기술이 우리 팀의 연습 방법이 되고 서로 존중하게 돼요.' },
              ],
            },
          ],
          {
            teacher: '"오늘 상대 팀에게서 찾은 기술 가운데 다음 시간 우리 팀이 써 볼 것은 무엇인가요?" 팀마다 하나씩 정하게 한다. 출구 1번을 틀린 학생에게는 카드 속 장면에 밑줄을 긋게 한다. 손목과 발목을 돌리며 마친다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '우리가 배울 점', slots: [{ id: 'signal', label: '던지기 전에 손을 들어 받을 자리를 알렸어요' }, { id: 'two', label: '원반을 두 손으로 감싸 받았어요' }], cards: ['받을 사람이 먼저 손을 들어 신호 주기', '한 손 대신 두 손으로 감싸 받기'] }, prompt: '새로 본 상대 팀 기술마다 배울 점을 이어요.', target: { match: { signal: '받을 사람이 먼저 손을 들어 신호 주기', two: '한 손 대신 두 손으로 감싸 받기' } }, difficulty: 0.15 },
              { type: 'choice', prompt: '상대 팀에게 하는 말로 가장 알맞은 것은?', options: ['"운이 좋았네"', '"빈 곳으로 달려가 받는 게 좋았어"', '"우리가 봐줬지"'], answer: 1, difficulty: 0.1, explain: '장면이 들어간 칭찬이 상대를 존중하고 배울 점을 남겨요.' },
              { type: 'short', prompt: '오늘 상대 팀에게 전하고 싶은 칭찬을 장면과 함께 쓰세요.' },
            ],
          },
        ),
        worksheet: {
          title: '잘한 점을 찾아 말해요',
          items: [
            { type: 'table', prompt: '관찰 카드를 쓰세요.', columns: ['누가(팀)', '언제', '무엇을 잘했나', '우리가 배울 점'], rows: 3 },
            { type: 'blank', prompt: '경기 시간을 구하세요.', text: '경기 4분, 바꾸기 1분으로 세 판을 하면 모두 ___분이에요.', answer: '14' },
            { type: 'choice', prompt: '근거 있는 칭찬에 ○ 하세요.', options: ['"그냥 잘해"', '"받자마자 다음 사람을 봤어"', '"키가 커서 이겼어"'], answer: '"받자마자 다음 사람을 봤어"' },
            { type: 'short', prompt: '"상대를 칭찬하면 우리 팀이 약해 보인다"는 말에 대한 내 생각을 쓰세요.' },
          ],
          easy: {
            note: '칭찬 = 누가 + 무엇을 잘했나.',
            items: [
              { type: 'choice', prompt: '근거 있는 칭찬은?', options: ['"빈 곳으로 달려가 받았어"', '"그냥 잘해"'], answer: '"빈 곳으로 달려가 받았어"' },
              { type: 'short', prompt: '상대 팀이 잘한 점 하나를 쓰세요.' },
              { type: 'draw', prompt: '상대 팀이 원반을 받는 모습을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드를 놓으면 바로 맞는지 보이고, 첫 칭찬 카드가 미리 놓여 있어요.',
          base: '관찰 카드를 스스로 나누고 배울 점을 이어 확인해요.',
          challenge: '"봐줬지"처럼 칭찬 속에 상대를 깎아내리는 말을 가려내요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 상대를 칭찬하면 우리 팀이 약해 보인다고 여긴다 → 칭찬한 기술을 우리 연습으로 바꾸는 활동으로 쓸모를 보인다. ② 이긴 까닭을 키·운으로 돌린다 → 장면으로 다시 말하게 한다. ③ 관찰 팀이 경기에 끼어든다 → 관찰 팀은 선 밖에 앉아 카드를 쓴다. 원반을 막을 때 몸을 밀거나 잡지 않는다.',
      }),
      // ───────────────────────── 35 ─────────────────────────
      L(35, {
        title: '목표에 맞춘 연습 계획 지키고 경기 뒤 상대에게 칭찬 전하기',
        objective: '정한 목표에 맞추어 연습 계획을 세워 지키며 원반 패스 경기에 참여하고, 경기가 끝나면 상대 팀에게 잘한 점 한 가지를 찾아 말로 전할 수 있다.',
        illustration: art('children doing timed catch practice with a paper stopwatch, then two teams shaking hands after a flying disc game with speech bubbles of praise', [
          { motif: 'sun', x: 410, y: 54, s: 0.7 }, { motif: 'star', x: 140, y: 90, s: 0.8 }, { motif: 'tree', x: 70, y: 206 },
          { motif: 'hills', y: 232 },
          { motif: 'text', x: 260, y: 140, text: '연습하고, 칭찬해요', size: 26 },
        ]),
        safety: [DISC, DISC2, SPACE],
        stages: stages(
          {
            teacher: '"지난주에 세운 원반 받기 목표를 기억하나요? 목표를 세운 뒤 연습은 어떻게 했나요?" 대답을 받아 "목표만 세우고 연습 계획이 없으면 어떻게 될까요?"를 묻는다. 오늘은 목표에 맞춘 연습 계획을 지켜 연습한 뒤 패스 경기를 하고, 경기가 끝나면 상대 팀에게 잘한 점을 직접 말로 전한다고 알린다.',
            student: '내 원반 받기 목표를 짝에게 말하고, 그 목표를 위해 무엇을 연습할지 말해 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 연습 계획 세우고 지키며 경기하기', minutes: 16, tool: 'timer',
              task: '오늘 활동 차례를 세우고, 받기 연습 구간을 타이머에 맞춰요. 계획대로 연습한 뒤 패스 경기를 하고 기록을 적어요.',
              teacher: '"받기 연습은 40초 하고 20초 쉬어요. 쉬는 동안 짝과 잘된 점을 한 마디 나눠요." 연습 구간을 건너뛰고 바로 경기하려는 팀에게 "목표를 위한 연습이 먼저예요"라고 말한다.',
              levels: { easy: { workStep: 10, restStep: 10 }, base: { workStep: 5, restStep: 5 }, challenge: { workStep: 5, restStep: 5, showTotal: false } },
              items: [
                { prompt: '오늘 활동 카드를 하는 차례대로 놓아요.', toolOptions: { cards: ['상대 팀과 인사하고 잘한 점 전하기', '준비 운동', '패스 경기', '목표에 맞춘 받기 연습'] }, target: { order: ['준비 운동', '목표에 맞춘 받기 연습', '패스 경기', '상대 팀과 인사하고 잘한 점 전하기'] }, levels: { easy: { state: { order: ['준비 운동', '패스 경기', '상대 팀과 인사하고 잘한 점 전하기', '목표에 맞춘 받기 연습'] } } }, difficulty: 0.15 },
                { prompt: '받기 연습 40초, 쉬기 20초를 4번 하도록 타이머를 맞춰요.', toolOptions: { plan: { work: 20, rest: 20, rounds: 2 } }, target: { plan: { work: 40, rest: 20, rounds: 4 } }, difficulty: 0.15 },
                { prompt: '연습 뒤 받은 수(10번 중)와 경기에서 우리 팀이 얻은 점수를 적어요.', toolOptions: { fields: [{ label: '연습 뒤 받은 수(10번 중)', unit: '번', max: 10 }, { label: '우리 팀 점수', unit: '점', max: 30 }] }, target: { records: true }, difficulty: 0.1 },
              ],
            },
            {
              id: 'a2', title: '활동 2. 경기 뒤 상대에게 어떻게 말할까', minutes: 10, tool: 'emotion',
              task: '경기가 끝난 장면에서 상대 팀에게 어떻게 말할지 골라요. 고른 뒤 실제로 상대 팀에게 잘한 점 한 가지를 말로 전해요.',
              teacher: '"졌을 때 칭찬하면 진 것을 인정하는 것 같아 싫을 수 있어요. 그 마음도 괜찮아요." 그래도 상대의 기술을 말해 주면 우리가 배울 점이 생긴다는 것을 짚는다. 고른 뒤 팀끼리 마주 서서 한 사람씩 칭찬을 전한다.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '경기에서 우리 팀이 졌어요. 상대 팀에게 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '원반 패스 경기에서 우리 팀이 4점 차이로 졌어요. 상대 팀이 다가와 인사해요.', choices: [{ id: 'turn', text: '고개를 돌리고 그냥 가요', result: '상대 팀도 다음 경기에서 인사를 하지 않았어요.', mood: '속상함', why: '진 마음은 괜찮지만, 인사를 피하면 서로 존중이 끊겨요.' }, { id: 'praise', text: '"빈 곳으로 달려가 받는 게 좋았어. 다음엔 우리도 해 볼게"라고 말해요', result: '상대 팀이 그 요령을 더 알려 주었어요.', mood: '뿌듯함' }, { id: 'excuse', text: '"우리 팀이 오늘 컨디션이 나빴어"라고 말해요', result: '상대 팀은 이긴 기쁨을 함께 나누지 못했어요.', mood: '걱정', why: '핑계는 상대의 기술을 지워 버려요.' }] }, target: { choice: 'praise' }, levels: { easy: { toolOptions: { choices: [{ id: 'turn', text: '고개를 돌리고 그냥 가요', result: '상대 팀도 다음 경기에서 인사를 하지 않았어요.', mood: '속상함', why: '진 마음은 괜찮지만, 인사를 피하면 서로 존중이 끊겨요.' }, { id: 'praise', text: '"빈 곳으로 달려가 받는 게 좋았어. 다음엔 우리도 해 볼게"라고 말해요', result: '상대 팀이 그 요령을 더 알려 주었어요.', mood: '뿌듯함' }] } } }, difficulty: 0.15 },
                { prompt: '우리 팀이 이겼어요. 상대 팀에게 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '원반 패스 경기에서 우리 팀이 이겼어요. 상대 팀이 아쉬워하며 서 있어요.', choices: [{ id: 'boast', text: '"우리가 훨씬 잘하지?"라고 말해요', result: '상대 팀이 다음 경기를 하기 싫어했어요.', mood: '화남', why: '이긴 쪽의 자랑은 상대를 깎아내려요.' }, { id: 'praise', text: '"마지막에 두 손으로 감싸 받는 거 멋졌어"라고 말해요', result: '상대 팀이 웃으며 다음 판을 기다렸어요.', mood: '기쁨' }] }, target: { choice: 'praise' }, difficulty: 0.15 },
                { prompt: '팀 친구가 "상대 칭찬하면 우리가 약해 보여"라고 해요. 어떻게 말할까요?', toolOptions: { mode: 'branch', situation: '경기 뒤 칭찬을 전하러 가는데, 팀 친구가 "상대 칭찬하면 우리가 약해 보여"라고 해요.', choices: [{ id: 'agree', text: '"그렇네, 하지 말자"고 해요', result: '우리 팀은 상대 기술을 배울 기회를 놓쳤어요.', mood: '걱정', why: '칭찬하지 않으면 상대 기술도 보이지 않아요.' }, { id: 'explain', text: '"잘한 점을 말하면 우리가 배울 게 생겨. 같이 가자"고 해요', result: '둘이 함께 칭찬을 전하고 요령을 배워 왔어요.', mood: '뿌듯함' }] }, target: { choice: 'explain' }, difficulty: 0.2,
                  conclude: '상대의 기술을 칭찬하는 것은 약해 보이는 일이 아니라 배우고 서로 존중하는 일이에요.' },
              ],
            },
          ],
          {
            teacher: '"오늘 상대 팀에게 전한 칭찬과 받은 칭찬을 하나씩 말해 볼까요?" 받은 칭찬을 들었을 때 마음도 묻는다. 출구 2번을 틀린 학생에게는 오늘 활동 순서를 다시 말하게 한다.',
            exitTicket: [
              { type: 'tool', tool: 'timer', options: { cards: ['상대 팀과 인사하고 잘한 점 전하기', '목표에 맞춘 던지기 연습', '디스크 골프 경기', '준비 운동'] }, prompt: '디스크 골프 날의 활동 카드를 하는 차례대로 놓아요.', target: { order: ['준비 운동', '목표에 맞춘 던지기 연습', '디스크 골프 경기', '상대 팀과 인사하고 잘한 점 전하기'] }, difficulty: 0.15 },
              { type: 'choice', prompt: '받기 연습 30초, 쉬기 15초를 3번 하면 전체 시간은?', options: ['90초', '120초', '135초'], answer: 1, difficulty: 0.25, explain: '30×3 = 90초에 쉬기 15×2 = 30초를 더해 120초예요.' },
              { type: 'short', prompt: '오늘 상대 팀에게 전한 칭찬을 그대로 쓰세요.' },
            ],
          },
        ),
        worksheet: {
          title: '연습하고, 칭찬해요',
          items: [
            { type: 'table', prompt: '오늘 연습 계획과 기록을 쓰세요.', columns: ['내 목표', '연습 계획(초·번)', '연습 뒤 기록', '계획을 지켰나요'], rows: 1 },
            { type: 'blank', prompt: '전체 시간을 구하세요.', text: '받기 연습 40초, 쉬기 20초를 4번 하면 전체 ___초예요.', answer: '220' },
            { type: 'choice', prompt: '경기에서 졌을 때 상대에게 할 말로 알맞은 것에 ○ 하세요.', options: ['"오늘 컨디션이 나빴어"', '"빈 곳으로 달려가는 게 좋았어"', '아무 말 없이 간다'], answer: '"빈 곳으로 달려가는 게 좋았어"' },
            { type: 'short', prompt: '오늘 받은 칭찬과 그때의 마음을 쓰세요.' },
          ],
          easy: {
            note: '연습 → 경기 → 인사하고 칭찬.',
            items: [
              { type: 'choice', prompt: '경기가 끝나면?', options: ['상대 팀에게 잘한 점을 말한다', '그냥 간다'], answer: '상대 팀에게 잘한 점을 말한다' },
              { type: 'short', prompt: '상대 팀에게 한 칭찬을 쓰세요.' },
              { type: 'draw', prompt: '경기 뒤 인사하는 모습을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '차례 카드의 첫 장이 미리 놓여 있고, 타이머가 10초씩 움직이며 장면 보기가 두 개로 줄어요.',
          base: '차례와 타이머를 스스로 맞추고 장면마다 판단해요.',
          challenge: '타이머 전체 시간 없이 맞추고, 팀 친구를 설득하는 장면까지 판단해요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 상대를 칭찬하면 우리 팀이 약해 보인다고 여긴다 → 칭찬을 전하고 요령을 배워 오는 장면을 실제로 해 본다. ② 진 마음에 인사를 피한다 → 아쉬운 마음을 인정한 뒤 장면 하나만 말하게 한다. ③ 연습 구간을 건너뛴다 → 타이머가 끝나야 경기를 시작한다. 칭찬 전하기는 팀끼리 마주 서서 한 사람씩 한다.',
      }),
      // ───────────────────────── 36 ─────────────────────────
      L(36, {
        title: '오리엔티어링 팀 목표 시간 세워 지키고 칭찬 나누기',
        objective: '지난 팀 기록을 보고 오리엔티어링 목표 시간을 정해 연습 계획대로 경기에 참여하고, 경기 뒤 다른 팀에게 잘한 점을 근거 들어 전할 수 있다.',
        illustration: art('a team of children holding a map and a paper stopwatch running between flag markers, then giving another team a thumbs up at the finish', [
          { motif: 'tree', x: 80, y: 196 }, { motif: 'flower', x: 200, y: 220 }, { motif: 'star', x: 360, y: 100 },
          { motif: 'hills', y: 232 },
          { motif: 'text', x: 260, y: 150, text: '우리 팀 목표 시간', size: 24 },
        ]),
        safety: [RUN, PATH, BOUND],
        stages: stages(
          {
            teacher: '지난 오리엔티어링 팀 기록 그래프를 보여 준다. "우리 팀은 지난 세 번 동안 얼마나 빨라졌나요? 오늘 목표 시간은 몇 분이 좋을까요?" 몇 팀의 생각을 듣고, "목표를 세웠으면 그 목표에 맞는 연습을 정해야 해요"라고 말한다. 오늘은 팀 목표 시간을 정해 지도 맞추기를 연습한 뒤 경기하고, 끝나면 다른 팀에게 칭찬을 전한다고 알린다.',
            student: '지난 오리엔티어링에서 시간이 가장 많이 걸린 까닭을 하나 떠올려 말해 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 팀 기록 보고 목표 시간 정하기', minutes: 8, tool: 'chart',
              task: '한 팀이 세 번 경기한 기록(걸린 시간)을 읽고, 네 번째 경기의 알맞은 목표 시간을 골라요.',
              teacher: '"이 그래프는 막대가 짧을수록 빨리 찾은 거예요." 한 번에 1~2분씩 줄었다는 것을 읽게 하고, 갑자기 절반으로 줄이는 목표는 서두르다 다치기 쉽다는 것을 짚는다.',
              options: { type: 'bar', mode: 'read', title: '한 팀이 지점 네 곳을 찾는 데 걸린 시간(분)', unit: '분', xLabel: '경기', yLabel: '시간(분)', max: 20, scale: 2, data: [['1회', 18], ['2회', 16], ['3회', 15]] },
              levels: { easy: { showValues: true }, base: {}, challenge: { revealAfterCheck: true } },
              items: [
                { prompt: '1회에서 3회까지 걸린 시간은 몇 분 줄었나요? 수를 넣어요.', target: { value: 3 }, difficulty: 0.15 },
                { prompt: '네 번째 경기의 알맞은 목표 시간을 골라요.', toolOptions: { question: '4회 목표 시간은?', choices: ['14분', '5분', '20분'], why: [null, '한 번에 10분을 줄이려면 뛰어다니다 다치기 쉬워요.', '20분은 지난번보다 늦어 목표가 되지 않아요.'] }, target: { pick: 0 }, difficulty: 0.15 },
                { prompt: '14분 목표를 위한 연습으로 가장 알맞은 것을 골라요.', toolOptions: { question: '알맞은 연습은?', choices: ['지도 북쪽을 실제 북쪽에 맞추는 연습', '모퉁이를 뛰어서 도는 연습', '화단을 가로지르는 연습'], why: [null, '모퉁이를 뛰면 부딪히기 쉬워요.', '화단을 가로지르면 자연을 해쳐요.'] }, target: { pick: 0 }, difficulty: 0.2,
                  conclude: '목표 시간은 지난 기록이 줄어든 만큼 정하고, 안전한 방법(지도 맞추기)으로 줄여요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 연습하고 목표 시간에 맞춰 경기하기', minutes: 12, tool: 'timer',
              task: '지도 맞추기를 3분 연습하고, 팀이 함께 지점 네 곳을 찾아요. 걸린 시간을 재어 목표와 견주어 적어요.',
              teacher: '"지점마다 지도 북쪽부터 맞추고 길을 손가락으로 따라가요." 팀원이 흩어지지 않도록 손에 손을 닿을 거리로 함께 움직이게 한다. 목표보다 늦어도 연습한 방법을 썼는지가 오늘의 점검이라고 말한다.',
              levels: { easy: {}, base: {}, challenge: { stopwatch: true } },
              items: [
                { prompt: '경기 전에 확인한 것을 눌러 표시해요.', toolOptions: { safety: ['팀 목표 시간을 함께 정했어요', '모퉁이에서는 걸어서 돌아요', '팀원이 흩어지지 않게 함께 움직여요'] }, target: { safety: true }, difficulty: 0.1 },
                { prompt: '지도 맞추기를 연습하고 팀과 지점 네 곳을 찾아요. 다 했으면 표시해요.', free: true, toolOptions: { doneLabel: '연습하고 팀과 지점을 찾았어요' }, difficulty: 0.1 },
                { prompt: '팀 목표 시간과 오늘 걸린 시간을 적어요.', toolOptions: { fields: [{ label: '팀 목표 시간', unit: '분', max: 30 }, { label: '오늘 걸린 시간', unit: '분', max: 30 }] }, target: { records: true }, difficulty: 0.1 },
              ],
            },
            {
              id: 'a3', title: '활동 3. 다른 팀에게 전할 칭찬 고르기', minutes: 6, tool: 'emotion',
              task: '다른 팀 장면마다 전할 칭찬으로 알맞은 말을 골라요. 고른 뒤 실제로 그 팀에게 말로 전해요.',
              teacher: '"빨리 들어온 팀만 칭찬할까요?" 늦게 들어왔어도 길을 바르게 고른 팀, 끝까지 함께 다닌 팀도 칭찬할 기술이 있다는 것을 짚는다.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '가장 빨리 들어온 팀에게 전할 근거 있는 칭찬을 골라요.', toolOptions: { mode: 'pick', basket: '전할 칭찬', cards: ['"지점마다 지도부터 맞추는 게 보였어"', '"출발 전에 길을 손가락으로 따라가더라"', '"운이 좋았네"', '"지도가 쉬웠잖아"'] }, target: { pick: ['"지점마다 지도부터 맞추는 게 보였어"', '"출발 전에 길을 손가락으로 따라가더라"'] }, difficulty: 0.15,
                  hints: ['그 팀이 직접 한 행동이 들어 있는 말을 찾아요.', '운과 쉬운 지도는 그 팀의 기술이 아니에요.', '지도 맞추기와 손가락으로 길 따라가기를 든 두 말이에요.'] },
                { prompt: '목표보다 늦었지만 화단을 돌아간 팀에게 전할 칭찬을 골라요.', toolOptions: { mode: 'pick', basket: '전할 칭찬', cards: ['"늦어도 화단을 돌아가는 길을 고른 게 멋졌어"', '"한 사람도 흩어지지 않고 함께 다녔더라"', '"너희는 너무 느려"', '"다음엔 화단을 가로질러 봐"'] }, target: { pick: ['"늦어도 화단을 돌아가는 길을 고른 게 멋졌어"', '"한 사람도 흩어지지 않고 함께 다녔더라"'] }, difficulty: 0.2,
                  hints: ['빠르기 말고도 칭찬할 기술이 무엇이었는지 떠올려요.', '느리다는 말과 화단을 가로지르라는 말은 칭찬이 아니에요.', '돌아가는 길 고르기와 함께 다니기를 든 두 말이에요.'] },
                { prompt: '다른 팀에게 칭찬을 들었을 때 알맞은 대답을 골라요.', toolOptions: { mode: 'pick', basket: '이렇게 답해요', cards: ['"고마워. 너희가 지점에서 기다려 준 덕분이야"', '"고마워. 다음에 그 요령 같이 해 보자"', '"당연하지, 우리가 최고야"', '못 들은 척해요'] }, target: { pick: ['"고마워. 너희가 지점에서 기다려 준 덕분이야"', '"고마워. 다음에 그 요령 같이 해 보자"'] }, difficulty: 0.15,
                  conclude: '칭찬은 빠르기만이 아니라 길 고르기·함께 다니기 같은 기술에도 하고, 받은 칭찬에는 고마움으로 답해요.' },
              ],
            },
          ],
          {
            teacher: '"목표 시간에 닿은 팀도, 못 닿은 팀도 연습한 방법을 썼나요?" 팀마다 한 줄씩 말하게 한다. 출구 1번을 틀린 학생에게는 막대가 짧을수록 빠르다는 것을 다시 짚는다.',
            exitTicket: [
              { type: 'tool', tool: 'chart', options: { type: 'bar', mode: 'read', title: '다른 팀이 지점 네 곳을 찾는 데 걸린 시간(분)', unit: '분', max: 20, scale: 2, data: [['1회', 16], ['2회', 14], ['3회', 13]], question: '4회 목표 시간으로 알맞은 것은?', choices: ['12분', '4분', '18분'] }, prompt: '다른 팀의 기록 그래프를 보고 알맞은 4회 목표 시간을 골라요.', target: { pick: 0 }, difficulty: 0.2 },
              { type: 'choice', prompt: '목표보다 늦게 들어왔지만 화단을 돌아간 팀에게 알맞은 말은?', options: ['"너무 느려"', '"돌아가는 길을 고른 게 멋졌어"', '"다음엔 가로질러 봐"'], answer: 1, difficulty: 0.1, explain: '빠르기가 아니어도 칭찬할 기술이 있어요.' },
              { type: 'short', prompt: '오늘 우리 팀이 목표에 닿았는지와 연습한 방법을 썼는지 쓰세요.' },
            ],
          },
        ),
        worksheet: {
          title: '우리 팀 목표 시간',
          items: [
            { type: 'table', prompt: '우리 팀 기록과 목표를 쓰세요.', columns: ['지난 기록(분)', '오늘 목표(분)', '오늘 기록(분)', '연습한 방법을 썼나요'], rows: 1 },
            { type: 'figure', wide: true, prompt: '그래프에서 가장 빨리 찾은 경기에 ○ 하세요.', tool: 'chart', options: { type: 'bar', mode: 'read', title: '한 팀이 지점 네 곳을 찾는 데 걸린 시간(분)', unit: '분', max: 20, scale: 10, data: [['1회', 18], ['2회', 16], ['3회', 15]] }, figures: [{ state: {}, caption: '막대가 짧을수록 빨라요' }], answer: '3회' },
            { type: 'choice', prompt: '목표 시간을 줄이는 안전한 방법에 ○ 하세요.', options: ['지도 북쪽 맞추기 연습', '모퉁이 뛰어 돌기', '화단 가로지르기'], answer: '지도 북쪽 맞추기 연습' },
            { type: 'short', prompt: '다른 팀에게 전한 칭찬을 쓰세요.' },
          ],
          easy: {
            note: '시간 그래프는 막대가 짧을수록 빨라요.',
            items: [
              { type: 'choice', prompt: '지난번 15분이면 알맞은 목표는?', options: ['14분', '5분'], answer: '14분' },
              { type: 'short', prompt: '우리 팀 목표 시간을 쓰세요.' },
              { type: 'draw', prompt: '팀과 지점을 찾는 모습을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '그래프 막대 위에 값이 보여요.',
          base: '그래프 눈금을 읽고 목표와 연습을 골라요.',
          challenge: '그래프 값은 맞힌 뒤에만 보이고, 스톱워치로 걸린 시간을 직접 재어 적어요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 목표 시간을 지나치게 줄여 뛰어다닌다 → 지난 기록이 줄어든 만큼만 줄이게 한다. ② 빨리 들어온 팀만 칭찬한다 → 길 고르기·함께 다니기 같은 기술도 칭찬하게 한다. ③ 시간 그래프에서 긴 막대를 좋은 기록으로 읽는다 → 무엇을 잰 그래프인지 제목부터 읽는다. 교사는 가장 먼 지점 가까이에서 모퉁이 걷기를 본다.',
      }),
      // ───────────────────────── 37 ─────────────────────────
      L(37, {
        title: '디스크 골프에서 상대 팀 기술 배워 우리 연습에 써 보기',
        objective: '디스크 골프 경기에서 본 상대 팀의 기술을 우리 연습 방법으로 바꾸어 계획대로 연습하고, 써 보기 전과 뒤의 기록을 견주며 상대에게 고마움을 전할 수 있다.',
        illustration: art('a child copying another team\'s low sideways disc throw around a tree toward a hoop, with a small before and after score card', [
          { motif: 'tree', x: 230, y: 180 }, { motif: 'star', x: 380, y: 90, s: 0.8 }, { motif: 'cloud', x: 100, y: 50 },
          { motif: 'hills', y: 232 },
          { motif: 'text', x: 240, y: 80, text: '배워서 써 봐요', size: 26 },
        ]),
        safety: [DISC, DISC2, FIELD],
        stages: stages(
          {
            teacher: '"지난 경기에서 다른 팀이 쓴 기술 가운데 따라 해 보고 싶은 것이 있었나요?" 두세 개를 칠판에 적는다. "상대의 기술을 따라 하는 것은 부끄러운 일일까요?" 대답을 받아 "운동을 잘하는 사람들도 상대에게 배워요. 배운 뒤 고맙다고 말하면 더 좋지요"라고 말한다. 오늘은 상대 팀 기술 하나를 골라 연습하고, 써 보기 전과 뒤를 견준다고 알린다.',
            student: '칠판에 적은 기술 가운데 내가 배우고 싶은 것 하나를 골라 말해 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 상대 기술을 연습 방법으로 바꾸기', minutes: 9, tool: 'mindmap',
              task: '상대 팀 기술마다 우리 연습 방법을 잇고, 배운 기술을 쓸 때 알맞은 태도만 골라요.',
              teacher: '"\'잘 던진다\'는 연습할 수 없어요. \'원반을 낮게 눕혀 던진다\'처럼 바꾸면 연습할 수 있어요." 기술을 몸의 움직임으로 쪼개어 말하게 한다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '상대 팀 기술마다 우리가 할 연습 방법을 이어요.', toolOptions: { mode: 'match', topic: '이렇게 연습해요', slots: [{ id: 'flat', label: '원반을 땅과 나란히 눕혀 곧게 던졌어요' }, { id: 'side', label: '나무 옆으로 휘어 돌아가게 던졌어요' }, { id: 'soft', label: '바구니 앞에서 손목만 써서 가볍게 넣었어요' }], cards: ['원반 면을 수평으로 잡고 다섯 번 던지기', '원반을 살짝 기울여 휘는 방향 살피기', '세 걸음 앞에서 손목만 써서 열 번 넣기'] }, target: { match: { flat: '원반 면을 수평으로 잡고 다섯 번 던지기', side: '원반을 살짝 기울여 휘는 방향 살피기', soft: '세 걸음 앞에서 손목만 써서 열 번 넣기' } }, levels: { easy: { state: { at: { '원반 면을 수평으로 잡고 다섯 번 던지기': 0 } } } }, difficulty: 0.2,
                  hints: ['상대가 원반을 어떻게 잡고 어느 쪽으로 보냈는지 몸의 움직임으로 바꾸어 봐요.', '곧게 가려면 수평, 휘려면 기울이기, 가볍게 넣으려면 손목이에요.', '눕혀 던지기는 수평 잡기, 휘어 던지기는 기울이기, 가볍게 넣기는 손목 열 번이에요.'] },
                { prompt: '상대 기술을 배워 쓸 때 알맞은 태도만 골라요.', toolOptions: { mode: 'pick', topic: '배워서 쓸 때', cards: ['누구에게 배웠는지 말하고 고맙다고 전해요', '처음엔 서툴러도 계획한 만큼 연습해요', '내가 먼저 생각해 낸 기술이라고 말해요', '한 번 해 보고 안 되면 바로 그만둬요'] }, target: { pick: ['누구에게 배웠는지 말하고 고맙다고 전해요', '처음엔 서툴러도 계획한 만큼 연습해요'] }, difficulty: 0.2,
                  hints: ['상대를 존중하는 태도와 목표를 끝까지 따르는 태도를 찾아요.', '내 것이라고 우기거나 바로 그만두면 존중도 연습도 사라져요.', '고마움 전하기와 계획한 만큼 연습하기 두 카드예요.'] },
                { prompt: '배운 기술 연습을 "써 보기 전"과 "써 본 뒤"에 할 일로 나누어요.', toolOptions: { topic: '언제 할까?', slots: ['써 보기 전', '써 본 뒤'], cards: ['지금 던진 횟수를 기록해 두기', '배울 기술을 몸의 움직임으로 말해 보기', '전과 뒤 기록을 견주기', '배운 팀에게 고마움 전하기'] }, target: { sort: { '써 보기 전': ['지금 던진 횟수를 기록해 두기', '배울 기술을 몸의 움직임으로 말해 보기'], '써 본 뒤': ['전과 뒤 기록을 견주기', '배운 팀에게 고마움 전하기'] } }, difficulty: 0.15,
                  conclude: '상대 기술은 몸의 움직임으로 바꾸어 연습하고, 전과 뒤를 견주며 배운 팀에게 고마움을 전해요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 배운 기술로 한 홀 다시 던지기', minutes: 17, tool: 'timer',
              task: '나무가 막은 홀을 지금 방법으로 한 번 던져 기록하고, 배운 기술을 정해진 시간 동안 연습한 뒤 같은 홀을 다시 던져요. 전과 뒤 던진 횟수를 적어요.',
              teacher: '"연습은 30초 하고 30초 쉬어요. 쉬는 동안 짝이 원반 모양을 봐 줘요." 써 본 뒤 횟수가 늘어도 괜찮다고 말한다. 처음 배우는 기술은 서툴 수 있고, 전과 뒤를 견주어 무엇이 달라졌는지 찾는 것이 목표다.',
              levels: { easy: { workStep: 10, restStep: 10 }, base: { workStep: 5, restStep: 5 }, challenge: { workStep: 5, restStep: 5, showTotal: false } },
              items: [
                { prompt: '배운 기술 연습 30초, 쉬기 30초를 5번 하도록 타이머를 맞춰요.', toolOptions: { plan: { work: 60, rest: 10, rounds: 3 } }, target: { plan: { work: 30, rest: 30, rounds: 5 } }, difficulty: 0.15 },
                { prompt: '지금 방법으로 던지고, 연습한 뒤 같은 홀을 다시 던져요. 다 했으면 표시해요.', free: true, toolOptions: { doneLabel: '연습 전과 뒤에 같은 홀을 던졌어요' }, difficulty: 0.1 },
                { prompt: '써 보기 전과 써 본 뒤 그 홀에서 던진 횟수를 적어요.', toolOptions: { fields: [{ label: '써 보기 전 던진 횟수', unit: '번', max: 15 }, { label: '써 본 뒤 던진 횟수', unit: '번', max: 15 }] }, target: { records: true }, levels: { challenge: { toolOptions: { fields: [{ label: '써 보기 전 던진 횟수', unit: '번', max: 15 }, { label: '써 본 뒤 던진 횟수', unit: '번', max: 15 }, { label: '줄거나 는 횟수', unit: '번', max: 15 }] } } }, difficulty: 0.15 },
              ],
            },
          ],
          {
            teacher: '"배운 기술을 써 보니 무엇이 달라졌나요? 아직 서툰 점은 무엇인가요?" 배운 팀에게 고마움을 전한 학생에게 어떻게 말했는지 들려 달라고 한다. 출구 1번을 틀린 학생에게는 상대 기술을 몸의 움직임으로 다시 말하게 한다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '이렇게 연습해요', slots: [{ id: 'step', label: '던지기 전에 한 걸음 앞으로 내디뎠어요' }, { id: 'eye', label: '던지는 내내 바구니에서 눈을 떼지 않았어요' }], cards: ['한 걸음 내디디며 던지기 다섯 번', '바구니를 보며 던지고 짝이 눈길 봐 주기'] }, prompt: '새로 본 상대 팀 기술마다 연습 방법을 이어요.', target: { match: { step: '한 걸음 내디디며 던지기 다섯 번', eye: '바구니를 보며 던지고 짝이 눈길 봐 주기' } }, difficulty: 0.15 },
              { type: 'choice', prompt: '다른 팀에게 배운 기술을 쓸 때 알맞은 행동은?', options: ['내가 생각해 낸 것이라고 말한다', '배운 팀에게 고맙다고 전한다', '배운 것을 숨긴다'], answer: 1, difficulty: 0.1, explain: '상대 기술을 존중하는 것은 배운 것을 인정하고 고마움을 전하는 것이에요.' },
              { type: 'short', prompt: '오늘 배운 기술과 써 본 뒤 달라진 점을 쓰세요.' },
            ],
          },
        ),
        worksheet: {
          title: '배워서 써 봐요',
          items: [
            { type: 'table', prompt: '배운 기술과 기록을 쓰세요.', columns: ['배운 기술', '누구에게', '연습 방법', '전 기록', '뒤 기록'], rows: 1 },
            { type: 'blank', prompt: '전체 연습 시간을 구하세요.', text: '연습 30초, 쉬기 30초를 5번 하면 전체 ___초예요.', answer: '270' },
            { type: 'choice', prompt: '"원반을 땅과 나란히 눕혀 던졌다"를 연습 방법으로 바꾼 것에 ○ 하세요.', options: ['원반 면을 수평으로 잡고 던지기', '그냥 잘 던지기', '세게만 던지기'], answer: '원반 면을 수평으로 잡고 던지기' },
            { type: 'short', prompt: '배운 팀에게 전할 고마움의 말을 쓰세요.' },
          ],
          easy: {
            note: '상대 기술 → 몸의 움직임 → 연습.',
            items: [
              { type: 'choice', prompt: '배운 기술을 쓸 때는?', options: ['고맙다고 전한다', '내 것이라고 한다'], answer: '고맙다고 전한다' },
              { type: 'blank', prompt: '내 기록을 쓰세요.', text: '전에는 ___번, 뒤에는 ___번 던졌어요.' },
              { type: 'draw', prompt: '배운 기술로 던지는 모습을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드를 놓으면 바로 맞는지 보이고, 타이머가 10초씩 움직여요.',
          base: '기술을 연습 방법으로 잇고 타이머를 5초씩 맞춰요.',
          challenge: '타이머 전체 시간 없이 맞추고, 전과 뒤에 줄거나 는 횟수를 셈해 적어요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 상대 기술을 따라 하는 것을 부끄러워한다 → 배운 팀을 밝히고 고마움을 전하는 것이 존중이라는 것을 보인다. ② 기술을 "잘 던진다"처럼 막연하게 말한다 → 원반 잡는 법·던지는 쪽·힘으로 쪼개게 한다. ③ 써 본 뒤 기록이 나빠지면 그만둔다 → 처음 배우는 기술은 서툴 수 있고 연습 계획을 끝까지 지키게 한다. 같은 홀에 한 모둠만 서서 던진다.',
      }),
      // ───────────────────────── 38 ─────────────────────────
      L(38, {
        title: '한 달 기록 그래프로 목표에 얼마나 다가갔는지 판단하기',
        objective: '한 달 동안의 기록 그래프를 읽어 목표를 이루었는지, 얼마나 다가갔는지를 근거를 들어 판단하고 오늘 기록을 더해 적을 수 있다.',
        illustration: art('a child and a friend looking at a paper line graph rising toward a dotted goal line, one point just touching it, flying disc in hand', [
          { motif: 'star', x: 400, y: 70 }, { motif: 'sun', x: 90, y: 60, s: 0.7 }, { motif: 'cloud', x: 250, y: 46 },
          { motif: 'hills', y: 232 },
          { motif: 'text', x: 240, y: 140, text: '얼마나 다가갔을까?', size: 26 },
        ]),
        safety: [DISC, DISC2, SPACE],
        stages: stages(
          {
            teacher: '"한 달 전에 세운 원반 받기 목표를 이루었나요?" 손을 들게 한 뒤 묻는다. "목표를 이루지 못한 친구는 한 달 동안 아무것도 늘지 않았을까요?" 대답을 받아 "기록을 보면 얼마나 다가갔는지 알 수 있어요"라고 말하고, 오늘은 친구들의 그래프를 읽어 판단해 본 뒤 내 오늘 기록을 재어 더한다고 알린다.',
            student: '한 달 전 내 기록과 지금 내 느낌을 견주어 한 문장으로 말해 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 서연이의 그래프로 판단하기', minutes: 9, tool: 'chart',
              task: '서연이의 목표는 "10번 중 8번 받기"예요. 4주 동안의 기록 그래프를 읽고 목표를 이루었는지 판단해요.',
              teacher: '"목표 8번을 손가락으로 그래프에 가로로 그어 보세요." 마지막 점이 그 선에 닿았는지, 처음보다 얼마나 올라왔는지 두 가지를 함께 보게 한다.',
              options: { type: 'line', mode: 'read', title: '서연이의 원반 받기(10번 중 받은 수)', unit: '번', xLabel: '주', yLabel: '받은 수(번)', max: 10, scale: 1, data: [['1주', 5], ['2주', 6], ['3주', 6], ['4주', 8]] },
              levels: { easy: { showValues: true }, base: {}, challenge: { revealAfterCheck: true } },
              items: [
                { prompt: '서연이는 목표 "10번 중 8번"을 이루었나요?', toolOptions: { question: '목표를 이루었나요?', choices: ['이루었다', '이루지 못했다'], why: [null, '4주의 점이 8에 닿아 있어요.'] }, target: { pick: 0 }, difficulty: 0.1 },
                { prompt: '서연이의 받은 수는 1주보다 4주에 몇 번 늘었나요? 수를 넣어요.', target: { value: 3 }, difficulty: 0.15 },
                { prompt: '기록이 그대로였던 때를 골라요.', toolOptions: { question: '기록이 그대로였던 때는?', choices: ['1주→2주', '2주→3주', '3주→4주'], why: ['1주→2주는 1번 늘었어요.', null, '3주→4주는 2번 늘었어요.'] }, target: { pick: 1 }, difficulty: 0.2,
                  conclude: '기록이 잠깐 멈춘 때가 있어도 꾸준히 연습하면 다시 올라갈 수 있어요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 준호의 그래프로 다가간 정도 판단하기', minutes: 7, tool: 'chart',
              task: '준호의 목표는 "10번 중 7번 받기"예요. 그래프를 읽고 목표까지 얼마나 다가갔는지 판단해요.',
              teacher: '"이루지 못했다고 끝일까요? 처음과 견주면 얼마나 왔나요?" 남은 거리와 온 거리를 함께 말하게 한다.',
              options: { type: 'line', mode: 'read', title: '준호의 원반 받기(10번 중 받은 수)', unit: '번', xLabel: '주', yLabel: '받은 수(번)', max: 10, scale: 1, data: [['1주', 2], ['2주', 3], ['3주', 4], ['4주', 5]] },
              levels: { easy: { showValues: true }, base: {}, challenge: { revealAfterCheck: true } },
              items: [
                { prompt: '준호가 목표 7번까지 남은 수는 몇 번인가요? 수를 넣어요.', target: { value: 2 }, difficulty: 0.15 },
                { prompt: '준호의 기록을 바르게 판단한 말을 골라요.', toolOptions: { question: '바른 판단은?', choices: ['처음 2번에서 5번으로 3번 늘어 목표에 많이 다가갔다', '목표를 못 이루었으니 늘지 않았다', '목표를 이미 넘었다'], why: [null, '기록은 2번에서 5번으로 늘었어요.', '5번은 아직 목표 7번보다 적어요.'] }, target: { pick: 0 }, difficulty: 0.2 },
                { prompt: '준호가 지금 빠르기로 연습하면 목표에 닿는 때를 골라요.', toolOptions: { question: '목표 7번에 닿는 때는?', choices: ['5주', '6주', '10주'], why: ['한 주에 1번씩 늘면 5주에는 6번이에요.', null, '그렇게 오래 걸리지 않아요.'] }, target: { pick: 1 }, difficulty: 0.25,
                  predict: { q: '준호는 한 주에 몇 번씩 늘었나요?', options: ['1번씩', '3번씩'], answer: 0 } },
              ],
            },
            {
              id: 'a3', title: '활동 3. 오늘 기록 재어 더하기', minutes: 10, tool: 'timer',
              task: '짝이 던져 주는 원반 10개를 받아 오늘 기록을 재요. 한 달 전 기록, 목표, 오늘 기록을 적고 스스로 점검해요.',
              teacher: '"한 달 전과 같은 거리(열 걸음)·같은 높이로 던져 주어야 견줄 수 있어요." 기록을 적은 뒤 목표까지 남은 수와 늘어난 수를 함께 적게 한다.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '한 달 전과 같은 거리에서 원반 10개를 받아 보아요. 다 했으면 표시해요.', free: true, toolOptions: { doneLabel: '같은 거리에서 원반 10개를 받았어요' }, difficulty: 0.1 },
                { prompt: '한 달 전 기록, 내 목표, 오늘 기록을 적어요(10번 중 받은 수).', toolOptions: { fields: [{ label: '한 달 전 기록', unit: '번', max: 10 }, { label: '내 목표', unit: '번', max: 10 }, { label: '오늘 기록', unit: '번', max: 10 }] }, target: { records: true }, difficulty: 0.1 },
                { prompt: '기록으로 판단한 것을 스스로 점검해 표시해요.', target: { selfCheck: ['같은 거리와 높이로 재었어요', '목표까지 남은 수를 셈했어요', '한 달 동안 늘어난 수를 셈했어요'] }, difficulty: 0.1 },
              ],
            },
          ],
          {
            teacher: '"목표를 이룬 사람, 아직 다가가는 중인 사람 모두 늘어난 수를 짝에게 말해 볼까요?" 늘어난 수가 0인 학생에게는 기록이 멈춘 때가 있었던 서연이 그래프를 다시 떠올리게 한다. 출구 1번을 틀린 학생에게는 목표 선을 손가락으로 그어 보게 한다.',
            exitTicket: [
              { type: 'tool', tool: 'chart', options: { type: 'line', mode: 'read', title: '도윤이의 가로 이동(손잡이 수)', unit: '개', max: 12, scale: 2, data: [['1주', 4], ['2주', 6], ['3주', 8], ['4주', 8]], question: '도윤이의 목표는 10개예요. 알맞은 판단은?', choices: ['4개에서 8개로 늘어 목표에 다가가는 중이다', '목표를 이루었다', '하나도 늘지 않았다'] }, prompt: '도윤이의 가로 이동 그래프를 읽고 알맞은 판단을 골라요.', target: { pick: 0 }, difficulty: 0.2 },
              { type: 'choice', prompt: '목표 6번에 지금 5번이에요. 처음엔 2번이었어요. 알맞은 말은?', options: ['목표를 못 이뤄 남은 게 없다', '3번 늘었고 1번 남았다', '목표를 넘었다'], answer: 1, difficulty: 0.15, explain: '온 거리와 남은 거리를 함께 보아야 바르게 판단해요.' },
              { type: 'short', prompt: '내 기록으로 목표에 얼마나 다가갔는지 숫자를 넣어 쓰세요.' },
            ],
          },
        ),
        worksheet: {
          title: '얼마나 다가갔을까?',
          items: [
            { type: 'table', prompt: '내 한 달 기록을 쓰세요.', columns: ['1주', '2주', '3주', '4주', '목표', '남은 수'], rows: 1 },
            { type: 'figure', wide: true, prompt: '서연이 그래프에 목표 8번 선을 가로로 그어 보세요.', tool: 'chart', options: { type: 'line', mode: 'read', title: '서연이의 원반 받기(10번 중 받은 수)', unit: '번', max: 8, scale: 4, data: [['1주', 5], ['2주', 6], ['3주', 6], ['4주', 8]] }, figures: [{ state: {}, caption: '목표 8번' }], answer: '4주 점이 선에 닿아요' },
            { type: 'blank', prompt: '준호의 기록을 판단하세요.', text: '준호는 2번에서 5번으로 ___번 늘었고, 목표 7번까지 ___번 남았어요.', answer: '3, 2' },
            { type: 'short', prompt: '"목표를 못 이루면 노력한 과정은 남는 것이 없다"는 말을 내 기록으로 고쳐 쓰세요.' },
          ],
          easy: {
            note: '온 만큼 + 남은 만큼을 함께 봐요.',
            items: [
              { type: 'choice', prompt: '2번에서 5번이 되었으면?', options: ['3번 늘었다', '늘지 않았다'], answer: '3번 늘었다' },
              { type: 'blank', prompt: '오늘 기록을 쓰세요.', text: '오늘은 10번 중 ___번 받았어요.' },
              { type: 'draw', prompt: '한 달 전과 오늘의 나를 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '그래프 점 위에 값이 보여요.',
          base: '그래프 눈금을 읽어 스스로 판단해요.',
          challenge: '그래프 값은 맞힌 뒤에만 보여, 눈금만 보고 늘어난 수와 남은 수를 셈해요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 목표를 못 이루면 노력한 과정은 남는 것이 없다고 여긴다 → 온 거리와 남은 거리를 함께 말하게 한다. ② 그래프에서 마지막 점만 본다 → 처음 점과 견주게 한다. ③ 재는 거리를 바꾸어 기록이 들쭉날쭉하다 → 한 달 전과 같은 거리·높이로 재게 한다. 원반 받기는 받는 사람이 준비되었다고 손을 든 뒤 던진다.',
      }),
      // ───────────────────────── 39 ─────────────────────────
      L(39, {
        title: '기록에 맞추어 다음 목표를 내 수준으로 다시 정하기',
        objective: '목표를 넉넉히 이루었는지, 조금 못 미쳤는지, 거의 다가가지 못했는지에 따라 다음 목표를 내 수준에 맞게 다시 정하고, 그 목표에 맞춘 연습을 해 볼 수 있다.',
        illustration: art('three children each choosing a different next paper step on a staircase based on their own graph, one higher, one the same, one smaller steps', [
          { motif: 'star', x: 120, y: 80 }, { motif: 'star', x: 240, y: 110, s: 0.8 }, { motif: 'star', x: 360, y: 140, s: 0.6 },
          { motif: 'hills', y: 232 },
          { motif: 'text', x: 240, y: 200, text: '나에게 맞는 다음 걸음', size: 24 },
        ]),
        safety: [CLIMB, CLIMB2, DISC],
        stages: stages(
          {
            teacher: '"지난 시간 목표를 이룬 친구는 다음에 무엇을 할까요? 이루지 못한 친구는요?" 대답을 받아 "모두 같은 다음 목표를 세우면 될까요?"를 묻는다. 사람마다 기록이 다르니 다음 목표도 달라야 한다는 것을 끌어내고, 오늘은 내 기록에 맞추어 원반 받기나 가로 이동의 다음 목표를 다시 정하고 연습해 본다고 알린다.',
            student: '지난 시간 내 기록이 목표에 넉넉히 닿았는지, 조금 모자랐는지, 많이 모자랐는지 말해 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 기록 상황에 맞는 다음 목표 정하는 법', minutes: 10, tool: 'mindmap',
              task: '기록 상황마다 다음 목표를 정하는 알맞은 방법을 이어요. 친구들의 다음 목표가 알맞은지 나누어요.',
              teacher: '"목표를 낮추는 것은 포기일까요?" 너무 먼 목표를 작은 단계로 나누면 오히려 끝까지 갈 수 있다는 것을 짚는다. 넉넉히 이룬 친구가 같은 목표에 머무르는 것도 성장을 멈추는 일이라고 말한다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '기록 상황마다 다음 목표를 정하는 알맞은 방법을 이어요.', toolOptions: { mode: 'match', topic: '다음 목표는', slots: [{ id: 'over', label: '목표 7번에 9번을 받았어요' }, { id: 'near', label: '목표 7번에 6번을 받았어요' }, { id: 'far', label: '목표 7번에 3번을 받았어요' }], cards: ['목표를 조금 높여요', '같은 목표로 두고 연습 방법을 바꿔요', '목표를 낮추어 작은 단계로 나눠요'] }, target: { match: { over: '목표를 조금 높여요', near: '같은 목표로 두고 연습 방법을 바꿔요', far: '목표를 낮추어 작은 단계로 나눠요' } }, levels: { easy: { state: { at: { '목표를 조금 높여요': 0 } } } }, difficulty: 0.2,
                  hints: ['기록이 목표보다 위인지, 바로 아래인지, 한참 아래인지 먼저 갈라요.', '넘었으면 한 걸음 더, 조금 모자라면 방법 바꾸기, 많이 모자라면 계단을 잘게 나눠요.', '9번은 높이기, 6번은 같은 목표에 방법 바꾸기, 3번은 낮추어 나누기예요.'] },
                { prompt: '친구들이 다시 정한 다음 목표를 알맞은 것과 알맞지 않은 것으로 나누어요.', toolOptions: { topic: '다시 정한 목표', slots: ['내 수준에 알맞아요', '알맞지 않아요'], cards: ['지금 손잡이 10개 → 다음 달 12개', '지금 10번 중 4번 → 다음 주 5번, 그다음 주 6번', '지금 10번 중 9번 → 다음 주에도 9번', '지금 손잡이 5개 → 다음 주 20개'] }, target: { sort: { '내 수준에 알맞아요': ['지금 손잡이 10개 → 다음 달 12개', '지금 10번 중 4번 → 다음 주 5번, 그다음 주 6번'], '알맞지 않아요': ['지금 10번 중 9번 → 다음 주에도 9번', '지금 손잡이 5개 → 다음 주 20개'] } }, difficulty: 0.25,
                  hints: ['지금 기록에서 조금 애쓰면 닿을 만큼인지, 너무 멀거나 그대로인지 보세요.', '9번을 이미 하는데 9번에 머무르면 늘지 않고, 5개에서 20개는 너무 멀어요.', '12개와 5번→6번 단계가 알맞아요.'] },
                { prompt: '다음 목표를 정할 때 알맞은 생각만 골라요.', toolOptions: { mode: 'pick', topic: '다음 목표 정하기', cards: ['내 지난 기록을 근거로 정해요', '친구보다 높게만 정하면 돼요', '목표를 낮추는 것도 끝까지 가기 위한 방법이에요', '한 번 정한 목표는 바꾸면 안 돼요'] }, target: { pick: ['내 지난 기록을 근거로 정해요', '목표를 낮추는 것도 끝까지 가기 위한 방법이에요'] }, difficulty: 0.2,
                  conclude: '다음 목표는 남이 아니라 내 기록을 근거로, 조금 애쓰면 닿을 만큼 다시 정해요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 다시 정한 목표로 연습하기', minutes: 16, tool: 'timer',
              task: '원반 받기와 매트 위 가로 이동 가운데 하나를 골라 다음 목표를 적고, 그 목표에 맞춘 연습을 한 뒤 기록을 재어요.',
              teacher: '"가로 이동을 고른 사람은 보조 친구와 함께해요." 목표에 맞추어 연습 시간을 고르게 한다. 연습 뒤 잰 기록이 목표에 닿지 않아도 오늘은 다시 정한 목표의 첫걸음이라고 말한다.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '연습 전에 확인한 것을 눌러 표시해요.', toolOptions: { safety: ['가로 이동은 발이 무릎 높이를 넘지 않게 해요', '보조 친구가 곁에 있어요', '원반은 받는 사람이 손을 든 뒤 던져요'] }, target: { safety: true }, difficulty: 0.1 },
                { prompt: '고른 활동을 다시 정한 목표에 맞추어 연습해요. 다 했으면 표시해요.', free: true, toolOptions: { doneLabel: '다시 정한 목표로 연습했어요' }, difficulty: 0.1 },
                { prompt: '지난 기록, 다시 정한 목표, 오늘 연습 뒤 기록을 적어요.', toolOptions: { fields: [{ label: '지난 기록', unit: '', max: 30 }, { label: '다시 정한 목표', unit: '', max: 30 }, { label: '오늘 연습 뒤 기록', unit: '', max: 30 }] }, target: { records: true }, difficulty: 0.1 },
              ],
            },
          ],
          {
            teacher: '"다시 정한 목표를 짝에게 말하고, 그렇게 정한 근거도 함께 말해 볼까요?" 목표를 낮춘 학생이 있으면 "작은 단계로 나눈 것도 멋진 계획이에요"라고 말한다. 출구 1번을 틀린 학생에게는 기록이 목표보다 위인지 아래인지부터 갈라 보게 한다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '다음 목표는', slots: [{ id: 'over', label: '목표 손잡이 10개에 13개를 이동했어요' }, { id: 'far', label: '목표 손잡이 10개에 4개를 이동했어요' }], cards: ['목표를 조금 높여요', '목표를 낮추어 작은 단계로 나눠요'] }, prompt: '새 기록 상황마다 다음 목표를 정하는 방법을 이어요.', target: { match: { over: '목표를 조금 높여요', far: '목표를 낮추어 작은 단계로 나눠요' } }, difficulty: 0.15 },
              { type: 'choice', prompt: '목표 8번에 7번을 받았어요. 알맞은 다음 목표는?', options: ['20번으로 높인다', '8번 그대로 두고 연습 방법을 바꾼다', '목표를 없앤다'], answer: 1, difficulty: 0.2, explain: '조금 못 미쳤으면 같은 목표에 방법을 바꾸어 다가가요.' },
              { type: 'short', prompt: '내가 다시 정한 목표와 그 근거를 쓰세요.' },
            ],
          },
        ),
        worksheet: {
          title: '나에게 맞는 다음 걸음',
          items: [
            { type: 'table', prompt: '내 다음 목표를 쓰세요.', columns: ['활동', '지난 기록', '지난 목표', '다음 목표', '정한 근거'], rows: 1 },
            { type: 'table', prompt: '기록 상황에 맞는 방법을 쓰세요.', columns: ['기록 상황', '다음 목표 정하는 법'], cells: [['목표를 넉넉히 넘었어요', ''], ['조금 못 미쳤어요', ''], ['많이 모자랐어요', '']] },
            { type: 'choice', prompt: '지금 손잡이 5개를 이동하는 친구에게 알맞은 다음 목표에 ○ 하세요.', options: ['다음 주 6개', '다음 주 20개', '다음 주 5개 그대로'], answer: '다음 주 6개' },
            { type: 'short', prompt: '목표를 낮추는 것이 포기가 아닌 까닭을 쓰세요.' },
          ],
          easy: {
            note: '넘었으면 조금 위로, 모자라면 작은 계단으로.',
            items: [
              { type: 'choice', prompt: '목표를 넉넉히 넘었으면?', options: ['조금 높인다', '그대로 둔다'], answer: '조금 높인다' },
              { type: 'blank', prompt: '내 다음 목표를 쓰세요.', text: '다음 목표는 ___________이에요.' },
              { type: 'draw', prompt: '다음 목표를 이룬 나를 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드를 놓으면 바로 맞는지 보이고, 첫 카드가 미리 놓여 있어요.',
          base: '기록 상황과 방법을 스스로 잇고 나누어 확인해요.',
          challenge: '활동지에 다음 목표와 그다음 목표까지 두 단계로 나누어 써요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 목표를 낮추면 포기한 것이라고 여긴다 → 작은 단계로 나누어 끝까지 간 예를 보인다. ② 넉넉히 이루었는데 같은 목표에 머무른다 → 한 걸음 높이는 것도 내 수준에 맞추는 것이라고 말한다. ③ 친구 목표를 따라 정한다 → 내 기록을 근거로 말하게 한다. 가로 이동은 보조 친구가 곁에 있을 때만 하고 내려올 때 뛰어내리지 않는다.',
      }),
      // ───────────────────────── 40 ─────────────────────────
      L(40, {
        title: '목표를 다 못 이뤄도 남은 것 찾아 함께 나누기',
        objective: '한 달 동안 목표를 향해 노력하며 얻은 기술·습관·배움을 찾아 말하고, 목표를 이루지 못한 친구에게 과정을 인정하는 말을 건넬 수 있다.',
        illustration: art('a child holding a paper treasure box filled with small stars labeled skill, habit and friends, beside a graph that has not yet reached the goal line', [
          { motif: 'star', x: 120, y: 90 }, { motif: 'star', x: 200, y: 70, s: 0.7 }, { motif: 'sun', x: 410, y: 54, s: 0.7 },
          { motif: 'hills', y: 232 },
          { motif: 'text', x: 260, y: 150, text: '과정이 남아요', size: 26 },
        ]),
        safety: [DISC, CLIMB, SPACE],
        stages: stages(
          {
            teacher: '"목표를 다 이루지 못했다면, 한 달 동안 한 노력은 아무것도 남지 않았을까요?" 몇 학생의 생각을 들은 뒤, 처음엔 원반을 한 손으로 받다가 이제 두 손으로 감싸 받게 된 학생 이야기를 들려준다. "숫자로는 목표에 못 닿았지만 무엇이 남았나요?" 오늘은 목표를 향한 과정에서 남은 것을 찾고, 서로의 과정을 인정하는 말을 나눈다고 알린다.',
            student: '한 달 전에는 못 했는데 지금은 할 수 있게 된 작은 것 하나를 떠올려 말해 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 노력하며 남은 것 찾기', minutes: 10, tool: 'mindmap',
              task: '한 달 동안 노력하며 남은 것을 기술·습관·배움으로 나누고, 과정에 대한 바른 생각만 골라요.',
              teacher: '"두 손으로 감싸 받기는 기술이에요. 연습 시간 지키기는 습관이고, 친구에게 배운 요령은 배움이에요." 숫자에 나타나지 않는 것도 남는다는 것을 짚는다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '노력하며 남은 것을 기술·습관·배움으로 나누어요.', toolOptions: { topic: '한 달 동안 남은 것', slots: ['몸의 기술', '좋은 습관', '친구에게서 배운 것'], cards: ['원반을 두 손으로 감싸 받게 되었어요', '매트 위에서 발을 먼저 옮기게 되었어요', '연습 시간을 타이머로 지키게 되었어요', '기록을 날마다 적게 되었어요', '상대 팀에게서 빈 곳으로 달리는 요령을 배웠어요'] }, target: { sort: { '몸의 기술': ['원반을 두 손으로 감싸 받게 되었어요', '매트 위에서 발을 먼저 옮기게 되었어요'], '좋은 습관': ['연습 시간을 타이머로 지키게 되었어요', '기록을 날마다 적게 되었어요'], '친구에게서 배운 것': ['상대 팀에게서 빈 곳으로 달리는 요령을 배웠어요'] } }, levels: { easy: { state: { at: { '원반을 두 손으로 감싸 받게 되었어요': 0 } } } }, difficulty: 0.2,
                  hints: ['몸으로 하게 된 것인지, 날마다 되풀이하게 된 것인지, 남에게서 얻은 것인지 갈라요.', '감싸 받기·발 옮기기는 몸, 타이머·기록 적기는 습관, 상대 팀 요령은 배움이에요.', '몸의 기술 둘, 좋은 습관 둘, 배운 것 하나예요.'] },
                { prompt: '남은 것마다 다음 목표에서 쓰일 곳을 이어요.', toolOptions: { mode: 'match', topic: '다음에 이렇게 쓰여요', slots: [{ id: 'catch', label: '원반을 두 손으로 감싸 받게 되었어요' }, { id: 'timer', label: '연습 시간을 타이머로 지키게 되었어요' }, { id: 'learn', label: '상대 팀에게서 빈 곳으로 달리는 요령을 배웠어요' }], cards: ['더 먼 거리에서 받기 연습의 바탕이 돼요', '새 연습 계획도 정한 시간만큼 지켜요', '다음 패스 게임에서 빈 곳을 찾아 달려요'] }, target: { match: { catch: '더 먼 거리에서 받기 연습의 바탕이 돼요', timer: '새 연습 계획도 정한 시간만큼 지켜요', learn: '다음 패스 게임에서 빈 곳을 찾아 달려요' } }, difficulty: 0.2,
                  hints: ['남은 것이 기술인지, 습관인지, 배운 요령인지 먼저 떠올려요.', '받기 기술은 다음 받기 연습에, 시간 지키기는 새 계획에, 달리기 요령은 다음 게임에 쓰여요.', '감싸 받기는 먼 거리 받기, 타이머는 새 계획 지키기, 요령은 빈 곳 달리기예요.'] },
                { prompt: '목표와 과정에 대한 바른 생각만 골라요.', toolOptions: { mode: 'pick', topic: '과정에 대한 생각', cards: ['목표에 못 닿아도 늘어난 기술은 남아요', '꾸준히 연습한 습관은 다음 목표에도 쓰여요', '목표를 못 이루면 노력한 것이 모두 사라져요', '이룬 사람만 칭찬받을 자격이 있어요'] }, target: { pick: ['목표에 못 닿아도 늘어난 기술은 남아요', '꾸준히 연습한 습관은 다음 목표에도 쓰여요'] }, levels: { challenge: { prompt: '목표와 과정에 대한 바른 생각만 골라요. 위로처럼 들리지만 틀린 생각도 있어요.', toolOptions: { cards: ['목표에 못 닿아도 늘어난 기술은 남아요', '꾸준히 연습한 습관은 다음 목표에도 쓰여요', '목표를 못 이루면 노력한 것이 모두 사라져요', '이룬 사람만 칭찬받을 자격이 있어요', '노력했으니 기록은 안 봐도 돼요'] } } }, difficulty: 0.2,
                  hints: ['노력하는 동안 생긴 것이 목표를 못 이뤘다고 없어지는지 생각해요.', '기술과 습관은 남고, 기록을 보지 않으면 얼마나 왔는지 알 수 없어요.', '기술이 남는다, 습관이 다음 목표에 쓰인다는 두 카드예요.'],
                  conclude: '목표에 못 닿아도 노력하며 얻은 기술·습관·배움은 남아 다음 목표의 발판이 돼요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 과정을 인정하는 말 고르기', minutes: 7, tool: 'emotion',
              task: '목표를 다 못 이룬 친구에게 어떻게 말할지 골라요. 고른 말을 짝에게 실제로 해 봐요.',
              teacher: '"\'괜찮아\'만 말하는 것과 \'두 손으로 받게 됐잖아\'라고 말하는 것은 무엇이 다를까요?" 과정을 구체적으로 짚어 주는 말이 힘이 된다는 것을 보인다.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '목표를 다 못 이뤄 속상한 친구에게 어떻게 말할까요?', toolOptions: { mode: 'branch', situation: '친구가 "목표 7번에 5번밖에 못 받았어. 한 달 다 헛수고야"라며 속상해해요.', feeling: '속상함', choices: [{ id: 'agree', text: '"맞아, 아쉽다"라고만 말해요', result: '친구는 더 속상해하며 연습을 그만두려 했어요.', mood: '속상함', why: '아쉬움만 말하면 남은 것이 보이지 않아요.' }, { id: 'process', text: '"처음엔 2번이었잖아. 두 손으로 감싸 받게 된 것도 늘었어"라고 말해요', result: '친구가 웃으며 다음 목표를 다시 정했어요.', mood: '뿌듯함' }, { id: 'compare', text: '"나는 이뤘는데"라고 말해요', result: '친구가 고개를 숙이고 말이 없어졌어요.', mood: '걱정', why: '견주는 말은 친구의 과정을 지워요.' }] }, target: { choice: 'process' }, levels: { easy: { toolOptions: { choices: [{ id: 'agree', text: '"맞아, 아쉽다"라고만 말해요', result: '친구는 더 속상해하며 연습을 그만두려 했어요.', mood: '속상함', why: '아쉬움만 말하면 남은 것이 보이지 않아요.' }, { id: 'process', text: '"처음엔 2번이었잖아. 두 손으로 감싸 받게 된 것도 늘었어"라고 말해요', result: '친구가 웃으며 다음 목표를 다시 정했어요.', mood: '뿌듯함' }] } } }, difficulty: 0.15 },
                { prompt: '나도 목표를 다 못 이뤘어요. 나에게 어떤 말을 할까요?', toolOptions: { mode: 'branch', situation: '가로 이동 목표 12개에 9개를 이동했어요. 마음속으로 나에게 말을 걸어요.', feeling: '걱정', choices: [{ id: 'blame', text: '"나는 원래 못해"라고 말해요', result: '다음 시간 오르기 벽 앞에서 망설였어요.', mood: '걱정', why: '나를 탓하는 말은 늘어난 3개를 보지 못하게 해요.' }, { id: 'kind', text: '"6개에서 9개가 됐어. 다음엔 발 옮기기를 더 연습하자"라고 말해요', result: '다음 시간 보조 친구와 발 옮기기를 연습했어요.', mood: '편안함' }] }, target: { choice: 'kind' }, difficulty: 0.2 },
                { prompt: '목표를 이룬 친구가 "나 혼자 한 거야"라고 해요. 어떻게 말할까요?', toolOptions: { mode: 'branch', situation: '목표를 이룬 친구가 "다른 사람 도움 없이 나 혼자 한 거야"라고 말해요. 보조 친구와 상대 팀 요령이 큰 도움이 되었어요.', choices: [{ id: 'silent', text: '아무 말도 하지 않아요', result: '보조 친구가 서운해했어요.', mood: '속상함', why: '함께한 과정이 지워졌어요.' }, { id: 'remind', text: '"축하해! 보조해 준 친구와 요령 알려 준 팀에게도 고맙다고 하자"라고 말해요', result: '친구가 보조 친구에게 고맙다고 말했어요.', mood: '기쁨' }] }, target: { choice: 'remind' }, difficulty: 0.2,
                  conclude: '과정을 인정하는 말은 늘어난 것과 함께한 사람을 구체적으로 짚어 주는 말이에요.' },
              ],
            },
            {
              id: 'a3', title: '활동 3. 한 달의 기술 보여 주기', minutes: 9, tool: 'timer',
              task: '모둠 안에서 한 사람씩 한 달 동안 늘어난 기술을 1분 동안 보여 주고(원반 받기나 가로 이동), 모둠 친구는 늘어난 점을 하나씩 말해 줘요.',
              teacher: '"보여 주는 시간은 한 사람에 1분이에요. 네 명이면 쉬는 시간까지 6분이 걸려요." 친구의 기술을 보고 "처음보다 ○○이 늘었어"로 말하게 한다. 숫자 기록보다 움직임이 어떻게 달라졌는지를 보게 한다.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '한 사람 1분(60초) 보여 주기, 바꾸는 시간 30초로 네 명이 하도록 타이머를 맞춰요.', toolOptions: { plan: { work: 30, rest: 60, rounds: 2 }, workStep: 10, restStep: 10 }, target: { plan: { work: 60, rest: 30, rounds: 4 } }, difficulty: 0.2 },
                { prompt: '모둠에서 한 달의 기술을 보여 주고 서로 늘어난 점을 말해 줘요. 다 했으면 표시해요.', free: true, toolOptions: { doneLabel: '기술을 보여 주고 늘어난 점을 나누었어요' }, difficulty: 0.1 },
                { prompt: '한 달 동안 남은 것을 찾아 나눈 것을 스스로 점검해 표시해요.', target: { selfCheck: ['숫자 말고도 늘어난 기술을 하나 찾았어요', '친구에게 늘어난 점을 구체적으로 말해 주었어요', '도와준 사람에게 고마움을 말했어요'] }, difficulty: 0.1 },
              ],
            },
          ],
          {
            teacher: '"오늘 친구에게 들은 말 가운데 힘이 된 말은 무엇이었나요?" 두세 명이 들은 말을 소개하게 한다. 출구 1번을 틀린 학생에게는 카드가 몸으로 하게 된 것인지, 날마다 하게 된 것인지 다시 묻는다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { topic: '한 달 동안 남은 것', slots: ['몸의 기술', '좋은 습관'], cards: ['원반을 수평으로 눕혀 던지게 되었어요', '연습 전에 준비 운동을 빼먹지 않게 되었어요', '오르기 벽에서 팔을 펴고 버티게 되었어요'] }, prompt: '새로 찾은 남은 것을 기술과 습관으로 나누어요.', target: { sort: { '몸의 기술': ['원반을 수평으로 눕혀 던지게 되었어요', '오르기 벽에서 팔을 펴고 버티게 되었어요'], '좋은 습관': ['연습 전에 준비 운동을 빼먹지 않게 되었어요'] } }, difficulty: 0.15 },
              { type: 'choice', prompt: '목표 10개에 7개를 한 친구에게 알맞은 말은?', options: ['"아쉽다, 헛수고였네"', '"처음 4개에서 7개가 됐어, 발 옮기기가 좋아졌어"', '"나는 10개 했는데"'], answer: 1, difficulty: 0.15, explain: '늘어난 수와 좋아진 움직임을 구체적으로 짚어 주는 말이에요.' },
              { type: 'mood', prompt: '한 달 동안 목표를 향해 노력한 나의 마음은 어떤가요?' },
            ],
          },
        ),
        worksheet: {
          title: '과정이 남아요',
          items: [
            { type: 'table', prompt: '한 달 동안 남은 것을 쓰세요.', columns: ['몸의 기술', '좋은 습관', '친구에게서 배운 것'], rows: 2 },
            { type: 'blank', prompt: '보여 주기 시간을 구하세요.', text: '한 사람 60초, 바꾸기 30초로 네 명이 하면 모두 ___초예요.', answer: '330' },
            { type: 'choice', prompt: '"목표를 못 이루면 노력한 과정은 남는 것이 없다"에 대한 알맞은 생각에 ○ 하세요.', options: ['맞다, 모두 사라진다', '아니다, 기술과 습관이 남는다', '목표는 처음부터 세우지 않는다'], answer: '아니다, 기술과 습관이 남는다' },
            { type: 'short', prompt: '친구에게 들은 말 가운데 힘이 된 말을 쓰세요.' },
          ],
          easy: {
            note: '숫자 말고도 남는 것: 기술, 습관, 배움.',
            items: [
              { type: 'choice', prompt: '목표를 못 이뤄도 남는 것은?', options: ['늘어난 기술', '아무것도 없다'], answer: '늘어난 기술' },
              { type: 'short', prompt: '한 달 전보다 잘하게 된 것 하나를 쓰세요.' },
              { type: 'draw', prompt: '한 달 동안 노력한 나를 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드를 놓으면 바로 맞는지 보이고, 장면 보기가 두 개로 줄어요.',
          base: '남은 것을 스스로 나누고 장면마다 판단해요.',
          challenge: '"노력했으니 기록은 안 봐도 돼요" 같은 위로처럼 들리는 틀린 생각을 가려내요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 목표를 못 이루면 노력한 과정은 남는 것이 없다고 여긴다 → 숫자에 나타나지 않는 기술·습관·배움을 찾게 한다. ② 위로를 "괜찮아"로만 한다 → 늘어난 것을 구체적으로 짚는 말을 연습한다. ③ 이룬 친구가 함께한 사람을 잊는다 → 보조 친구·상대 팀에게 고마움을 말하게 한다. 출구의 마음 고르기는 정답이 없으니 솔직하게 고르게 한다.',
      }),
      // ───────────────────────── 41 ─────────────────────────
      L(41, {
        title: '오리엔티어링 팀 역할 나누고 함께 정하는 까닭 알기',
        objective: '오리엔티어링 팀 경기에 필요한 역할과 그 일을 알고, 역할을 한 사람이 정할 때와 함께 정할 때의 차이를 말하며 팀원과 함께 역할을 나눌 수 있다.',
        illustration: art('four children around a paper school map each holding a different role card: map, timer, safety flag and record sheet', [
          { motif: 'tree', x: 70, y: 180 }, { motif: 'flag', x: 410, y: 170 }, { motif: 'cloud', x: 240, y: 46 },
          { motif: 'hills', y: 232 },
          { motif: 'text', x: 240, y: 110, text: '함께 나누는 역할', size: 26 },
        ]),
        safety: [RUN, FIELD, BOUND],
        stages: stages(
          {
            teacher: '"오리엔티어링을 할 때 지도도 보고, 시간도 재고, 길도 살피고, 기록도 해야 해요. 한 사람이 다 할 수 있을까요?" 대답을 받아 "팀은 일을 나누어 맡아요. 그런데 누가 무엇을 맡을지는 어떻게 정하면 좋을까요?"를 묻는다. 오늘은 역할을 알고, 팀원 모두가 의견을 내어 역할을 정해 짧은 코스를 다녀온다고 알린다.',
            student: '모둠 활동에서 내가 맡아 본 일 하나와 그때 기분을 말해 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 팀 역할과 하는 일 잇기', minutes: 8, tool: 'mindmap',
              task: '오리엔티어링 팀 역할마다 하는 일을 이어요. 역할을 정하는 방법이 어떤 결과를 낳는지도 나누어요.',
              teacher: '"지도 담당은 지도를 보고 길을 알려 주어요. 그럼 안전 담당은요?" 역할마다 경기 중 실제로 하는 행동을 한 문장으로 말하게 한다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '오리엔티어링 팀 역할마다 하는 일을 이어요.', toolOptions: { mode: 'match', topic: '이 일을 해요', slots: [{ id: 'map', label: '지도 담당' }, { id: 'time', label: '시간 담당' }, { id: 'safe', label: '안전 담당' }, { id: 'rec', label: '기록 담당' }], cards: ['지도를 땅의 방향에 맞추고 다음 지점을 알려요', '출발과 도착 시각을 재고 남은 시간을 알려요', '경계선과 차도 쪽을 살펴 팀을 멈추게 해요', '지점마다 찾은 표시를 활동지에 적어요'] }, target: { match: { map: '지도를 땅의 방향에 맞추고 다음 지점을 알려요', time: '출발과 도착 시각을 재고 남은 시간을 알려요', safe: '경계선과 차도 쪽을 살펴 팀을 멈추게 해요', rec: '지점마다 찾은 표시를 활동지에 적어요' } }, levels: { easy: { state: { at: { '지도를 땅의 방향에 맞추고 다음 지점을 알려요': 0 } } } }, difficulty: 0.15,
                  hints: ['역할 이름에 쓰인 낱말(지도·시간·안전·기록)이 무엇을 다루는지 떠올려요.', '방향 맞추기는 지도, 시각 재기는 시간, 멈추게 하기는 안전, 적기는 기록이에요.', '네 역할이 네 일과 하나씩 짝을 이루어요.'] },
                { prompt: '역할을 정한 방법을 "한 사람이 정했어요"와 "함께 정했어요"로 나누어요.', toolOptions: { topic: '어떻게 정했나?', slots: ['한 사람이 정했어요', '함께 정했어요'], cards: ['팀장이 "너는 기록해"라고 바로 말했어요', '가장 크게 말한 친구가 자기 역할부터 골랐어요', '한 사람씩 하고 싶은 역할과 까닭을 말했어요', '두 사람이 같은 역할을 원해 번갈아 맡기로 했어요'] }, target: { sort: { '한 사람이 정했어요': ['팀장이 "너는 기록해"라고 바로 말했어요', '가장 크게 말한 친구가 자기 역할부터 골랐어요'], '함께 정했어요': ['한 사람씩 하고 싶은 역할과 까닭을 말했어요', '두 사람이 같은 역할을 원해 번갈아 맡기로 했어요'] } }, difficulty: 0.2,
                  hints: ['모든 팀원이 의견을 말할 기회가 있었는지 보세요.', '한 사람의 말로 끝나면 혼자 정한 것이에요.', '까닭 말하기와 번갈아 맡기가 함께 정한 것이에요.'] },
                { prompt: '역할을 함께 정할 때 좋은 점만 골라요.', toolOptions: { mode: 'pick', topic: '함께 정하면', cards: ['맡은 사람이 자기 일을 더 책임 있게 해요', '하고 싶은 역할을 말할 기회가 모두에게 있어요', '시간이 전혀 걸리지 않아요', '늘 같은 사람만 좋은 역할을 맡아요'] }, target: { pick: ['맡은 사람이 자기 일을 더 책임 있게 해요', '하고 싶은 역할을 말할 기회가 모두에게 있어요'] }, difficulty: 0.15,
                  conclude: '역할은 팀원 모두가 의견을 내어 함께 정할 때 맡은 일을 더 책임 있게 해요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 함께 정한 역할로 짧은 코스 다녀오기', minutes: 18, tool: 'timer',
              task: '모둠원이 돌아가며 하고 싶은 역할과 까닭을 말해 역할을 정하고, 지점 세 곳 짧은 코스를 10분 안에 다녀와요. 맡은 일을 했는지 적어요.',
              teacher: '"역할 정하기는 4분이에요. 한 사람씩 다 말하기 전에는 정하지 않아요." 코스 중에는 정한 역할대로만 일하게 하고, 돌아온 뒤 역할이 잘 나뉘었는지 짧게 나누게 한다.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '코스를 나서기 전에 확인한 것을 눌러 표시해요.', toolOptions: { safety: ['경계선 밖으로 나가지 않아요', '팀원이 모두 보이는 거리에서 움직여요', '뛰지 않고 빠르게 걸어요'] }, target: { safety: true }, difficulty: 0.1 },
                { prompt: '돌아가며 의견을 말해 역할을 정하고 코스를 다녀와요. 다 했으면 표시해요.', free: true, toolOptions: { doneLabel: '함께 정한 역할로 코스를 다녀왔어요' }, difficulty: 0.1 },
                { prompt: '내 역할과 걸린 시간, 찾은 지점 수를 적어요.', toolOptions: { fields: [{ label: '걸린 시간', unit: '분', max: 20 }, { label: '찾은 지점 수', unit: '곳', max: 3 }] }, target: { records: true }, difficulty: 0.1 },
              ],
            },
          ],
          {
            teacher: '"함께 정한 역할로 다녀오니 어땠나요? 하고 싶은 역할을 못 맡은 친구는 어떻게 마음을 정했나요?" 두세 팀의 이야기를 듣는다. 출구 1번을 틀린 학생에게는 역할 이름의 낱말이 무엇을 다루는지 다시 묻는다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '이 일을 해요', slots: [{ id: 'safe', label: '안전 담당' }, { id: 'time', label: '시간 담당' }], cards: ['나무뿌리가 튀어나온 곳을 미리 알려요', '"5분 남았어"라고 팀에 알려요'] }, prompt: '경기 중 들린 말을 맡은 역할과 이어요.', target: { match: { safe: '나무뿌리가 튀어나온 곳을 미리 알려요', time: '"5분 남았어"라고 팀에 알려요' } }, difficulty: 0.15 },
              { type: 'choice', prompt: '팀 역할을 정하는 알맞은 방법은?', options: ['팀장이 모두 정한다', '한 사람씩 하고 싶은 역할과 까닭을 말하고 함께 정한다', '먼저 말한 사람이 고른다'], answer: 1, difficulty: 0.1, explain: '모두에게 의견을 말할 기회가 있어야 함께 정한 것이에요.' },
              { type: 'short', prompt: '오늘 내가 맡은 역할과 그 역할로 한 일을 쓰세요.' },
            ],
          },
        ),
        worksheet: {
          title: '함께 나누는 역할',
          items: [
            { type: 'table', prompt: '우리 팀 역할표를 쓰세요.', columns: ['역할', '맡은 사람', '하는 일', '맡고 싶은 까닭'], cells: [['지도 담당', '', '', ''], ['시간 담당', '', '', ''], ['안전 담당', '', '', ''], ['기록 담당', '', '', '']] },
            { type: 'choice', prompt: '"경계선 쪽을 살펴 팀을 멈추게 한다"는 어느 역할의 일인지 ○ 하세요.', options: ['지도 담당', '안전 담당', '기록 담당'], answer: '안전 담당' },
            { type: 'short', prompt: '역할을 한 사람이 정할 때와 함께 정할 때 무엇이 다른지 쓰세요.' },
            { type: 'short', prompt: '역할을 맡은 뒤 힘들었던 일과 팀원에게 부탁하고 싶은 도움을 한 가지 쓰세요.' },
          ],
          easy: {
            note: '지도·시간·안전·기록, 네 역할.',
            items: [
              { type: 'choice', prompt: '시각을 재는 역할은?', options: ['시간 담당', '지도 담당'], answer: '시간 담당' },
              { type: 'blank', prompt: '내 역할을 쓰세요.', text: '나는 ______ 담당이에요.' },
              { type: 'draw', prompt: '내 역할을 하는 모습을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드를 놓으면 바로 맞는지 보이고, 첫 카드가 미리 놓여 있어요.',
          base: '역할과 일을 스스로 잇고 정하는 방법을 나누어요.',
          challenge: '활동지 역할표의 "맡고 싶은 까닭"까지 모두 채워 팀에 말해요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 목소리 큰 학생이 역할을 다 정한다 → 한 사람씩 다 말하기 전에는 정하지 않는다는 규칙을 둔다. ② 같은 역할을 여럿이 원한다 → 번갈아 맡거나 다음 코스에서 바꾸는 방법을 보인다. ③ 코스 중 역할을 잊고 모두 지도만 본다 → 역할 카드를 목에 걸게 한다. 코스는 운동장 경계선 안으로만 짠다.',
      }),
      // ───────────────────────── 42 ─────────────────────────
      L(42, {
        title: '함께 정한 계주와 혼자 정한 계주 해 보고 견주기',
        objective: '원반 이어 나르기 계주를 한 사람이 정한 방법과 팀원이 함께 정한 방법으로 각각 해 보고, 기록과 마음을 견주어 함께 정하는 의사결정의 좋은 점을 말할 수 있다.',
        illustration: art('two relay lines of children passing a flying disc hand to hand, one team huddled talking before start, the other with one child pointing', [
          { motif: 'flag', x: 420, y: 170 }, { motif: 'star', x: 90, y: 80, s: 0.7 }, { motif: 'cloud', x: 260, y: 50 },
          { motif: 'hills', y: 232 },
          { motif: 'text', x: 240, y: 120, text: '어떻게 정할까?', size: 26 },
        ]),
        safety: [RUN, DISC, SPACE],
        stages: stages(
          {
            teacher: '"오늘은 원반 이어 나르기 계주를 두 번 해요. 첫 번째는 각 팀의 1번 친구가 순서와 방법을 혼자 정하고, 두 번째는 팀원이 함께 정해요." 규칙을 보여 준 뒤 "어느 쪽이 더 빠를까요? 어느 쪽이 더 즐거울까요?" 예상을 손으로 들게 한다. 두 번 해 본 뒤 기록과 마음을 함께 견준다고 알린다.',
            student: '혼자 정할 때와 함께 정할 때 어느 쪽이 빠를지, 왜 그렇게 생각하는지 말해 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 두 가지 방법으로 계주하기', minutes: 12, tool: 'timer',
              task: '첫 번째는 1번 친구가 혼자 정하고, 두 번째는 팀원이 1분 동안 함께 의논해 정한 뒤 계주를 해요. 두 번의 기록을 적어요.',
              teacher: '"원반은 던지지 말고 손에서 손으로 건네요. 받는 사람이 손을 내밀었을 때만 건네요." 두 번째 의논 시간은 1분으로 똑같이 준다. 기록이 비슷하거나 첫 번째가 더 빨라도 괜찮다고 말한다.',
              levels: { easy: { workStep: 10, restStep: 10 }, base: { workStep: 5, restStep: 5 }, challenge: { workStep: 5, restStep: 5, showTotal: false } },
              items: [
                { prompt: '의논 60초, 계주 준비 30초를 두 번 하도록 타이머를 맞춰요.', toolOptions: { plan: { work: 30, rest: 10, rounds: 1 } }, target: { plan: { work: 60, rest: 30, rounds: 2 } }, difficulty: 0.15 },
                { prompt: '두 가지 방법으로 원반 이어 나르기 계주를 해요. 다 했으면 표시해요.', free: true, toolOptions: { doneLabel: '두 가지 방법으로 계주를 했어요' }, difficulty: 0.1 },
                { prompt: '두 번의 계주 기록을 적어요.', toolOptions: { fields: [{ label: '혼자 정한 계주', unit: '초', max: 180 }, { label: '함께 정한 계주', unit: '초', max: 180 }] }, target: { records: true }, levels: { challenge: { toolOptions: { fields: [{ label: '혼자 정한 계주', unit: '초', max: 180 }, { label: '함께 정한 계주', unit: '초', max: 180 }, { label: '두 기록의 차', unit: '초', max: 180 }] } } }, difficulty: 0.15 },
              ],
            },
            {
              id: 'a2', title: '활동 2. 정하는 방법에 따른 일 견주기', minutes: 7, tool: 'mindmap',
              task: '두 번의 계주에서 있었던 일을 어느 방법에서 생긴 일인지 나누어요.',
              teacher: '"함께 정할 때 시간이 더 걸렸나요? 그 대신 무엇이 달라졌나요?" 빠르기만이 아니라 모두가 납득했는지, 실수가 줄었는지도 보게 한다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '계주에서 있었던 일을 정한 방법에 따라 나누어요.', toolOptions: { topic: '어느 계주에서?', slots: ['혼자 정한 계주', '함께 정한 계주'], cards: ['순서를 바로 정해 금방 출발했어요', '원반 받기가 서툰 친구가 마지막에 서서 속상해했어요', '정하는 데 1분이 걸렸어요', '손이 빠른 친구를 가운데에 두자는 의견이 나왔어요'] }, target: { sort: { '혼자 정한 계주': ['순서를 바로 정해 금방 출발했어요', '원반 받기가 서툰 친구가 마지막에 서서 속상해했어요'], '함께 정한 계주': ['정하는 데 1분이 걸렸어요', '손이 빠른 친구를 가운데에 두자는 의견이 나왔어요'] } }, difficulty: 0.2,
                  hints: ['의논 시간이 있었는지, 여러 사람의 생각이 나왔는지 보세요.', '바로 출발하고 한 친구가 속상한 것은 혼자 정한 쪽이에요.', '1분 의논과 여러 의견은 함께 정한 계주예요.'] },
                { prompt: '두 방법을 견준 말 가운데 바른 것만 골라요.', toolOptions: { mode: 'pick', topic: '견주어 보면', cards: ['함께 정하면 시간은 들지만 모두의 생각이 담겨요', '혼자 정하면 빠르지만 다른 사람의 마음을 놓칠 수 있어요', '함께 정하면 언제나 기록이 더 빨라요', '혼자 정한 사람이 늘 옳아요'] }, target: { pick: ['함께 정하면 시간은 들지만 모두의 생각이 담겨요', '혼자 정하면 빠르지만 다른 사람의 마음을 놓칠 수 있어요'] }, difficulty: 0.2,
                  hints: ['좋은 점과 아쉬운 점을 함께 말한 카드를 찾아요.', '"언제나", "늘"처럼 단정하는 말은 기록과 맞지 않을 수 있어요.', '시간은 들지만 생각이 담긴다, 빠르지만 마음을 놓친다는 두 카드예요.'] },
                { prompt: '함께 정할 때 시간을 줄이는 방법만 골라요.', toolOptions: { mode: 'pick', topic: '짧고 고르게 의논하기', cards: ['한 사람이 한 번씩 짧게 말해요', '정할 시간을 타이머로 정해 두어요', '모두 동시에 큰 소리로 말해요', '정해진 뒤에도 계속 다시 따져요'] }, target: { pick: ['한 사람이 한 번씩 짧게 말해요', '정할 시간을 타이머로 정해 두어요'] }, difficulty: 0.15,
                  conclude: '함께 정하기는 시간이 조금 들지만, 짧게 돌아가며 말하면 모두의 생각을 담고도 빨리 정할 수 있어요.' },
              ],
            },
            {
              id: 'a3', title: '활동 3. 두 계주에서의 내 마음', minutes: 7, tool: 'emotion',
              task: '두 계주에서 나와 친구의 마음을 떠올리며 어떻게 행동할지 골라요.',
              teacher: '"함께 정한 계주에서 내 의견이 뽑히지 않았을 때 어떻게 하면 좋을까요?" 정해진 뒤에는 따르는 것도 함께 정하기의 일부라는 것을 짚는다.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '함께 정할 때 내 의견이 뽑히지 않았어요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '나는 내가 첫 번째로 달리자고 했지만, 팀은 다른 친구를 첫 번째로 정했어요.', feeling: '서운함', choices: [{ id: 'sulk', text: '"그럼 난 안 할래"라고 말해요', result: '팀이 출발하지 못하고 기다렸어요.', mood: '속상함', why: '함께 정한 것을 따르지 않으면 의논이 소용없어져요.' }, { id: 'follow', text: '"알았어, 나는 내 자리에서 잘 받을게"라고 말해요', result: '팀이 바로 출발했고 원반을 떨어뜨리지 않았어요.', mood: '뿌듯함' }] }, target: { choice: 'follow' }, difficulty: 0.15 },
                { prompt: '혼자 정하는 1번 친구가 되었어요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '내가 혼자 순서를 정해야 해요. 시간이 별로 없어요.', choices: [{ id: 'self', text: '내가 하고 싶은 자리부터 정해요', result: '친구 둘이 "왜 너만 좋은 자리야?"라며 불만을 말했어요.', mood: '걱정', why: '혼자 정할 때도 다른 사람의 마음을 생각해야 해요.' }, { id: 'ask', text: '짧게 "어디가 편해?"라고 한 번씩 묻고 정해요', result: '모두 고개를 끄덕이고 출발했어요.', mood: '편안함' }] }, target: { choice: 'ask' }, difficulty: 0.2 },
                { prompt: '오늘 두 계주를 해 본 내 마음을 솔직하게 골라요. 정답은 없어요.', toolOptions: { mode: 'scale', steps: 3, situation: '혼자 정한 계주와 함께 정한 계주를 모두 해 보았어요.', feeling: '만족', ask: '함께 정한 계주가 얼마나 마음에 들었나요?' }, target: { level: 'any' }, difficulty: 0.05,
                  conclude: '함께 정한 뒤에는 내 의견이 아니어도 따르고, 혼자 정할 때도 친구의 마음을 물어요.' },
              ],
            },
          ],
          {
            teacher: '"두 기록을 보니 무엇을 알게 되었나요? 기록만으로 어느 방법이 더 좋다고 할 수 있을까요?" 빠르기와 마음을 함께 보게 한다. 출구 1번을 틀린 학생에게는 의논 시간이 있었는지부터 물어 다시 나누게 한다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { topic: '어떻게 정했나?', slots: ['혼자 정했어요', '함께 정했어요'], cards: ['반장이 공 차기 순서를 바로 불렀어요', '모둠원 넷이 차례로 의견을 내고 손을 들어 정했어요', '선생님 말씀을 기다리지 않고 짝이 혼자 골랐어요'] }, prompt: '새 장면을 정한 방법에 따라 나누어요.', target: { sort: { '혼자 정했어요': ['반장이 공 차기 순서를 바로 불렀어요', '선생님 말씀을 기다리지 않고 짝이 혼자 골랐어요'], '함께 정했어요': ['모둠원 넷이 차례로 의견을 내고 손을 들어 정했어요'] } }, difficulty: 0.15 },
              { type: 'choice', prompt: '함께 정한 뒤 내 의견이 뽑히지 않았을 때 알맞은 행동은?', options: ['정한 것을 따르고 내 자리에서 최선을 다한다', '다시 정하자고 계속 조른다', '활동에서 빠진다'], answer: 0, difficulty: 0.1, explain: '정해진 뒤 따르는 것도 함께 정하기의 일부예요.' },
              { type: 'short', prompt: '함께 정하기의 좋은 점과 아쉬운 점을 하나씩 쓰세요.' },
            ],
          },
        ),
        worksheet: {
          title: '어떻게 정할까?',
          items: [
            { type: 'table', prompt: '두 계주를 견주어 쓰세요.', columns: ['방법', '기록(초)', '좋았던 점', '아쉬웠던 점'], cells: [['혼자 정한 계주', '', '', ''], ['함께 정한 계주', '', '', '']] },
            { type: 'blank', prompt: '의논과 준비 시간을 구하세요.', text: '의논 60초, 준비 30초를 두 번 하면 모두 ___초예요.', answer: '150' },
            { type: 'short', prompt: '함께 정할 때 시간을 줄이는 방법을 쓰세요.' },
            { type: 'short', prompt: '혼자 정한 계주보다 함께 정한 계주가 나아진 점이나 그렇지 않았던 점을 기록으로 말해 보세요.' },
          ],
          easy: {
            note: '혼자 정하기: 빠름. 함께 정하기: 모두의 생각.',
            items: [
              { type: 'choice', prompt: '모두가 의견을 말한 것은?', options: ['함께 정하기', '혼자 정하기'], answer: '함께 정하기' },
              { type: 'blank', prompt: '내 기록을 쓰세요.', text: '혼자 정한 계주는 ___초, 함께 정한 계주는 ___초였어요.' },
              { type: 'draw', prompt: '팀이 함께 의논하는 모습을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '타이머가 10초씩 움직이고, 나누기 카드를 놓으면 바로 맞는지 보여요.',
          base: '타이머를 5초씩 맞추고 두 계주의 일을 스스로 나누어요.',
          challenge: '타이머 전체 시간 없이 맞추고, 두 기록의 차를 셈해 적어요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 기록이 빠른 쪽이 무조건 좋은 방법이라고 여긴다 → 마음과 실수 횟수도 함께 보게 한다. ② 의논이 길어진다 → 한 사람 한 번씩, 타이머 1분을 지킨다. ③ 뽑히지 않은 의견을 낸 학생이 빠진다 → 정한 뒤 따르기를 칭찬한다. 원반은 던지지 않고 손에서 손으로 건넨다.',
      }),
      // ───────────────────────── 43 ─────────────────────────
      L(43, {
        title: '팀 회의 순서 익혀 다음 경기 작전 정하기',
        objective: '팀 회의의 순서(주제 말하기 → 돌아가며 의견 → 견주어 정하기 → 정한 것 다시 말하기)를 알고, 이 순서로 회의해 원반 패스 게임 작전을 정하고 경기에서 실천할 수 있다.',
        illustration: art('a circle of children sitting on the grass passing a talking stick, a small paper whiteboard with four numbered steps beside them', [
          { motif: 'tree', x: 400, y: 180 }, { motif: 'sun', x: 80, y: 60, s: 0.7 }, { motif: 'cloud', x: 250, y: 46 },
          { motif: 'hills', y: 232 },
          { motif: 'text', x: 220, y: 120, text: '회의 네 걸음', size: 26 },
        ]),
        safety: [DISC, DISC2, SPACE],
        stages: stages(
          {
            teacher: '"지난 시간 함께 정할 때 무엇이 어려웠나요?" "모두 한꺼번에 말했어요", "정한 걸 잊었어요" 같은 대답을 받아 칠판에 적는다. "회의에도 순서가 있으면 짧고 고르게 정할 수 있어요." 오늘은 회의 순서를 익히고, 그 순서로 원반 패스 게임 작전을 정해 경기에서 써 본다고 알린다.',
            student: '지난 시간 의논에서 어려웠던 점 하나를 말해 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 회의 순서 맞추기', minutes: 9, tool: 'timer',
              task: '팀 회의 카드를 알맞은 순서로 놓고, 순서마다 쓸 시간을 맞추어요.',
              teacher: '"돌아가며 의견을 말할 때는 말하기 막대를 든 사람만 말해요." 마지막에 정한 것을 다시 말하는 까닭을 묻는다. 정한 것을 모두가 똑같이 알아야 경기에서 쓸 수 있다는 것을 짚는다.',
              levels: { easy: { workStep: 10, restStep: 10 }, base: { workStep: 5, restStep: 5 }, challenge: { workStep: 5, restStep: 5, showTotal: false } },
              items: [
                { prompt: '팀 회의 카드를 알맞은 순서로 놓아요.', toolOptions: { cards: ['견주어 하나로 정하기', '정한 것을 모두 다시 말하기', '회의 주제 말하기', '한 사람씩 돌아가며 의견 말하기'] }, target: { order: ['회의 주제 말하기', '한 사람씩 돌아가며 의견 말하기', '견주어 하나로 정하기', '정한 것을 모두 다시 말하기'] }, levels: { easy: { state: { order: ['회의 주제 말하기', '견주어 하나로 정하기', '한 사람씩 돌아가며 의견 말하기', '정한 것을 모두 다시 말하기'] } } }, difficulty: 0.15,
                  hints: ['무엇을 정할지 모르면 의견을 낼 수 없어요. 무엇이 맨 앞일까요?', '의견을 다 들어야 견줄 수 있고, 정한 뒤에야 다시 말할 수 있어요.', '주제 → 돌아가며 의견 → 견주어 정하기 → 다시 말하기예요.'] },
                { prompt: '한 사람이 의견 말하기 20초, 막대 넘기기 5초로 네 명이 하도록 타이머를 맞춰요.', toolOptions: { plan: { work: 10, rest: 10, rounds: 2 } }, target: { plan: { work: 20, rest: 5, rounds: 4 } }, difficulty: 0.2 },
                { prompt: '회의할 때 지킬 약속 두 가지를 모두 지키겠다고 표시해요.', toolOptions: { safety: ['말하기 막대를 든 사람만 말해요', '친구 의견에 "그건 별로야" 대신 "나는 이렇게 생각해"라고 말해요'] }, target: { safety: true }, difficulty: 0.15,
                  conclude: '회의는 주제 → 돌아가며 의견 → 견주어 정하기 → 다시 말하기 순서로, 막대를 든 사람만 말해요.' },
                { prompt: '회의를 마치고 우리 팀이 한 것을 스스로 점검해 표시해요.', target: { selfCheck: ['모두 한 번씩 의견을 말했어요', '정한 작전을 모두 다시 말했어요', '말하기 막대를 든 사람만 말했어요'] }, difficulty: 0.1 },
              ],
            },
            {
              id: 'a2', title: '활동 2. 회의로 정한 작전으로 경기하기', minutes: 17, tool: 'mindmap',
              task: '회의 순서대로 원반 패스 게임 작전을 정하고 5분 경기에서 써 봐요. 경기 뒤 작전이 쓰였는지 나누어요.',
              teacher: '"회의는 3분이에요. 마지막에 정한 작전을 모두가 한 목소리로 말해 보세요." 경기 중 작전이 지켜졌는지 팀 안의 기록 담당이 살피게 한다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '회의에서 나온 말을 회의 순서의 알맞은 걸음과 이어요.', toolOptions: { mode: 'match', topic: '회의의 어느 걸음?', slots: [{ id: 's1', label: '회의 주제 말하기' }, { id: 's2', label: '돌아가며 의견 말하기' }, { id: 's3', label: '견주어 하나로 정하기' }, { id: 's4', label: '정한 것을 다시 말하기' }], cards: ['"상대가 가운데를 막으면 어떻게 할지 정하자"', '"나는 양옆 빈 곳으로 달리는 게 좋다고 생각해"', '"두 의견 가운데 양옆 달리기가 더 많으니 그걸로 하자"', '"우리 작전은 양옆 빈 곳으로 달리기!"'] }, target: { match: { s1: '"상대가 가운데를 막으면 어떻게 할지 정하자"', s2: '"나는 양옆 빈 곳으로 달리는 게 좋다고 생각해"', s3: '"두 의견 가운데 양옆 달리기가 더 많으니 그걸로 하자"', s4: '"우리 작전은 양옆 빈 곳으로 달리기!"' } }, levels: { easy: { state: { at: { '"상대가 가운데를 막으면 어떻게 할지 정하자"': 0 } } } }, difficulty: 0.2,
                  hints: ['"정하자"로 시작하면 주제, "나는 ~라고 생각해"는 의견이에요.', '여럿을 견주는 말과 모두 함께 외치는 말을 구별해요.', '주제·의견·견주기·다시 말하기가 차례로 하나씩이에요.'] },
                { prompt: '회의 순서대로 작전을 정하고 경기에서 써 보아요. 다 했으면 표시해요.', free: true, toolOptions: { doneLabel: '회의로 정한 작전으로 경기했어요' }, difficulty: 0.1 },
                { prompt: '경기 중 기록 담당이 살펴볼 일만 골라요.', toolOptions: { mode: 'pick', topic: '작전이 쓰였나', cards: ['정한 작전대로 양옆 빈 곳으로 달렸는지', '작전을 말한 사람이 몇 번 던졌는지만', '경기 중 작전이 바뀌면 팀에 알렸는지', '점수가 낮은 친구가 누구인지'] }, target: { pick: ['정한 작전대로 양옆 빈 곳으로 달렸는지', '경기 중 작전이 바뀌면 팀에 알렸는지'] }, difficulty: 0.15 },
              ],
            },
          ],
          {
            teacher: '"회의 순서를 따르니 지난 시간과 무엇이 달랐나요?" 정한 작전을 다시 말한 팀과 그렇지 않은 팀의 경기를 견주게 한다. 출구 1번을 틀린 학생에게는 무엇을 정할지 먼저 알아야 의견을 낼 수 있다는 것을 다시 떠올리게 한다.',
            exitTicket: [
              { type: 'tool', tool: 'timer', options: { cards: ['한 사람씩 돌아가며 의견 말하기', '정한 것을 모두 다시 말하기', '회의 주제 말하기', '견주어 하나로 정하기'] }, prompt: '섞인 회의 카드를 다시 순서대로 놓아요.', target: { order: ['회의 주제 말하기', '한 사람씩 돌아가며 의견 말하기', '견주어 하나로 정하기', '정한 것을 모두 다시 말하기'] }, difficulty: 0.15 },
              { type: 'choice', prompt: '회의를 마치기 전에 정한 것을 모두 다시 말하는 까닭은?', options: ['시간을 채우려고', '모두가 정한 것을 똑같이 알기 위해', '회의를 다시 시작하려고'], answer: 1, difficulty: 0.15, explain: '모두가 같은 작전을 알아야 경기에서 함께 쓸 수 있어요.' },
              { type: 'short', prompt: '오늘 우리 팀이 정한 작전과 정한 방법을 쓰세요.' },
            ],
          },
        ),
        worksheet: {
          title: '회의 네 걸음',
          items: [
            { type: 'table', prompt: '우리 팀 회의 기록을 쓰세요.', columns: ['회의 걸음', '나온 말'], cells: [['회의 주제', ''], ['나온 의견들', ''], ['정한 것', ''], ['다시 말한 작전', '']] },
            { type: 'blank', prompt: '돌아가며 말하는 시간을 구하세요.', text: '한 사람 20초, 막대 넘기기 5초로 네 명이 하면 모두 ___초예요.', answer: '95' },
            { type: 'short', prompt: '회의에서 지킬 약속 두 가지를 쓰세요.' },
            { type: 'short', prompt: '우리 팀 회의에서 네 걸음 중 가장 시간이 오래 걸린 걸음과 그 까닭을 쓰세요.' },
          ],
          easy: {
            note: '주제 → 의견 → 정하기 → 다시 말하기.',
            items: [
              { type: 'choice', prompt: '회의에서 맨 먼저 할 일은?', options: ['회의 주제 말하기', '정하기'], answer: '회의 주제 말하기' },
              { type: 'blank', prompt: '우리 작전을 쓰세요.', text: '우리 작전은 ____________예요.' },
              { type: 'draw', prompt: '말하기 막대를 들고 의견을 말하는 모습을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '타이머가 10초씩 움직이고, 회의 카드 첫 장이 제자리에 있어요.',
          base: '회의 카드를 스스로 놓고 타이머를 5초씩 맞춰요.',
          challenge: '타이머 전체 시간 없이 맞추고, 회의에서 나온 말을 활동지에 걸음마다 옮겨 적어요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 주제 없이 바로 의견을 쏟아낸다 → 회의를 맡은 학생이 첫 문장으로 주제를 말하게 한다. ② 견주어 정할 때 목소리 큰 의견이 뽑힌다 → 손들기나 까닭 비교로 정하게 한다. ③ 정한 작전을 다시 말하지 않는다 → 회의 끝에 모두 한 목소리로 말하게 한다. 원반 패스 게임은 몸 접촉 없이 하고, 받는 사람이 준비되었을 때만 던진다.',
      }),
      // ───────────────────────── 44 ─────────────────────────
      L(44, {
        title: '어려워하는 친구를 대신하지 않고 방법 보여 주며 돕기',
        objective: '운동 기능을 어려워하는 친구를 대신해 주지 않고 방법을 보여 주고 말로 알려 주며 도울 수 있고, 짝 원반 주고받기에서 이를 실천할 수 있다.',
        illustration: art('one child showing another how to hold a flying disc with fingers spread, both smiling, the learner holding the disc herself', [
          { motif: 'star', x: 400, y: 80 }, { motif: 'tree', x: 70, y: 180 }, { motif: 'cloud', x: 240, y: 46 },
          { motif: 'hills', y: 232 },
          { motif: 'text', x: 240, y: 130, text: '보여 주며 도와요', size: 26 },
        ]),
        safety: [DISC, DISC2, SPACE],
        stages: stages(
          {
            teacher: '"친구가 원반을 자꾸 떨어뜨려요. 내가 대신 받아 주면 친구는 받기를 잘하게 될까요?" 대답을 받아 "대신 해 주는 것과 할 수 있게 돕는 것은 달라요"라고 말한다. 오늘은 친구 스스로 할 수 있게 방법을 보여 주고 말로 알려 주는 연습을 하고, 짝 주고받기에서 직접 해 본다고 알린다.',
            student: '누군가 나를 도와주어 좋았던 때, 그 사람이 어떻게 도와주었는지 말해 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 대신하기와 돕기 가르기', minutes: 8, tool: 'emotion',
              task: '친구가 어려워하는 장면마다 어떻게 도울지 골라요.',
              teacher: '"\'내가 할게\'는 빠르지만 친구가 배울 기회를 가져가요." 친구가 직접 해 보도록 기다려 주는 것도 돕기라는 것을 짚는다.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '친구가 원반을 자꾸 떨어뜨려요. 어떻게 도울까요?', toolOptions: { mode: 'branch', situation: '짝이 원반을 받을 때마다 손가락 사이로 빠뜨려 시무룩해요.', feeling: '속상함', choices: [{ id: 'instead', text: '"내가 다 받을게, 너는 던지기만 해"라고 말해요', result: '짝은 받기를 한 번도 해 보지 못했어요.', mood: '서운함', why: '대신 해 주면 친구가 배울 기회가 사라져요.' }, { id: 'show', text: '두 손을 악어 입처럼 벌려 보여 주고 "이렇게 위아래로 감싸 봐"라고 말해요', result: '짝이 따라 해 보더니 세 번째에 원반을 잡았어요.', mood: '기쁨' }, { id: 'laugh', text: '"또 떨어뜨렸어?"라고 웃어요', result: '짝이 하기 싫다며 고개를 돌렸어요.', mood: '속상함', why: '놀리는 말은 다시 해 볼 마음을 꺾어요.' }] }, target: { choice: 'show' }, levels: { easy: { toolOptions: { choices: [{ id: 'instead', text: '"내가 다 받을게, 너는 던지기만 해"라고 말해요', result: '짝은 받기를 한 번도 해 보지 못했어요.', mood: '서운함', why: '대신 해 주면 친구가 배울 기회가 사라져요.' }, { id: 'show', text: '두 손을 악어 입처럼 벌려 보여 주고 "이렇게 위아래로 감싸 봐"라고 말해요', result: '짝이 따라 해 보더니 세 번째에 원반을 잡았어요.', mood: '기쁨' }] } } }, difficulty: 0.15 },
                { prompt: '친구가 오르기 벽 손잡이를 못 찾아 멈췄어요. 어떻게 도울까요?', toolOptions: { mode: 'branch', situation: '친구가 오르기 벽 중간에서 다음 손잡이를 못 찾고 멈춰 있어요. 나는 보조 친구예요.', feeling: '걱정', choices: [{ id: 'push', text: '친구 발을 들어 다음 손잡이에 올려 줘요', result: '친구가 깜짝 놀라 균형을 잃을 뻔했어요.', mood: '걱정', why: '몸을 대신 움직이면 위험하고 친구가 스스로 찾지 못해요.' }, { id: 'tell', text: '"오른손 위 빨간 손잡이를 봐"라고 말로 알려 줘요', result: '친구가 스스로 손을 뻗어 다음 손잡이를 잡았어요.', mood: '뿌듯함' }] }, target: { choice: 'tell' }, difficulty: 0.2 },
                { prompt: '도와주겠다고 했는데 친구가 "혼자 해 볼래"라고 해요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '원반 던지기를 알려 주려 했더니 친구가 "혼자 먼저 해 볼래"라고 말했어요.', choices: [{ id: 'force', text: '"내 말대로 해야 돼"라며 계속 고쳐 줘요', result: '친구가 짜증을 내며 원반을 내려놓았어요.', mood: '속상함', why: '도움도 친구가 원할 때 해야 힘이 돼요.' }, { id: 'wait', text: '"그래, 필요하면 불러"라고 말하고 지켜봐요', result: '친구가 두 번 해 보고 나서 "손목은 어떻게 해?"라고 물었어요.', mood: '편안함' }] }, target: { choice: 'wait' }, difficulty: 0.2,
                  conclude: '돕기는 대신 해 주는 것이 아니라, 보여 주고 말로 알려 주며 친구가 스스로 하도록 기다려 주는 것이에요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 어려움에 맞는 돕는 말 잇기', minutes: 6, tool: 'mindmap',
              task: '친구가 어려워하는 점마다 알맞은 돕는 말을 이어요.',
              teacher: '"돕는 말은 몸의 어디를 어떻게 하는지 알려 주는 말이에요." 막연한 "잘해 봐"와 구체적인 말을 견주게 한다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '친구가 어려워하는 점마다 알맞은 돕는 말을 이어요.', toolOptions: { mode: 'match', topic: '이렇게 말해 줘요', slots: [{ id: 'drop', label: '원반을 손가락 사이로 빠뜨려요' }, { id: 'curve', label: '던진 원반이 자꾸 옆으로 휘어요' }, { id: 'short', label: '원반이 짝에게 닿기 전에 떨어져요' }], cards: ['"두 손을 위아래로 벌려 감싸 봐"', '"원반을 땅과 나란히 눕혀 봐"', '"팔을 뒤로 더 당겼다가 앞으로 쭉 뻗어 봐"'] }, target: { match: { drop: '"두 손을 위아래로 벌려 감싸 봐"', curve: '"원반을 땅과 나란히 눕혀 봐"', short: '"팔을 뒤로 더 당겼다가 앞으로 쭉 뻗어 봐"' } }, levels: { easy: { state: { at: { '"두 손을 위아래로 벌려 감싸 봐"': 0 } } } }, difficulty: 0.2,
                  hints: ['받기 문제인지, 방향 문제인지, 거리 문제인지 먼저 갈라요.', '빠뜨리면 손 모양, 휘면 원반 기울기, 짧으면 팔 당기기예요.', '감싸기·눕히기·팔 뻗기가 차례로 짝이에요.'] },
                { prompt: '돕는 말을 "방법을 알려 줘요"와 "도움이 안 돼요"로 나누어요.', toolOptions: { topic: '이 말은?', slots: ['방법을 알려 줘요', '도움이 안 돼요'], cards: ['"손목을 마지막에 툭 털어 봐"', '"원반을 볼 때 눈을 떼지 마"', '"그냥 잘해 봐"', '"넌 원래 못하잖아"'] }, target: { sort: { '방법을 알려 줘요': ['"손목을 마지막에 툭 털어 봐"', '"원반을 볼 때 눈을 떼지 마"'], '도움이 안 돼요': ['"그냥 잘해 봐"', '"넌 원래 못하잖아"'] } }, difficulty: 0.15 },
                { prompt: '친구를 도울 때 알맞은 행동만 골라요.', toolOptions: { mode: 'pick', topic: '돕는 행동', cards: ['먼저 내가 천천히 해 보여 줘요', '친구가 해 볼 때까지 기다려 줘요', '친구 원반을 빼앗아 대신 던져요', '친구가 틀릴 때마다 큰 소리로 알려요'] }, target: { pick: ['먼저 내가 천천히 해 보여 줘요', '친구가 해 볼 때까지 기다려 줘요'] }, difficulty: 0.15,
                  conclude: '돕는 말은 몸의 어디를 어떻게 할지 알려 주는 말이고, 말한 뒤에는 친구가 해 볼 때까지 기다려요.' },
              ],
            },
            {
              id: 'a3', title: '활동 3. 짝 원반 주고받기로 돕기 실천하기', minutes: 12, tool: 'timer',
              task: '짝과 원반을 주고받으며 한 사람이 어려워하는 점을 찾아 보여 주고 말로 알려 줘요. 역할을 바꾸어 해요.',
              teacher: '"돕는 사람은 원반을 대신 던지지 않아요. 보여 주고, 말하고, 기다려요." 두 번째 판에서 받은 수가 늘었는지보다 짝이 스스로 해 보았는지를 보게 한다.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '짝 주고받기 전에 확인한 것을 눌러 표시해요.', toolOptions: { safety: ['짝과 열 걸음 떨어져 서요', '옆 짝과 부딪히지 않게 같은 방향으로 던져요', '짝이 손을 든 뒤 던져요'] }, target: { safety: true }, difficulty: 0.1 },
                { prompt: '보여 주고 말로 알려 주며 짝과 원반을 주고받아요. 역할을 바꾸어 다 했으면 표시해요.', free: true, toolOptions: { doneLabel: '대신하지 않고 보여 주며 도왔어요' }, difficulty: 0.1 },
                { prompt: '돕기 전과 도운 뒤 짝이 10번 중 받은 수를 적어요.', toolOptions: { fields: [{ label: '돕기 전 받은 수', unit: '번', max: 10 }, { label: '도운 뒤 받은 수', unit: '번', max: 10 }] }, target: { records: true }, difficulty: 0.1 },
              ],
            },
          ],
          {
            teacher: '"오늘 짝이 해 준 말 가운데 가장 도움이 된 말은 무엇이었나요?" 두세 명이 들은 말을 소개하게 한다. 출구 1번을 틀린 학생에게는 받기·방향·거리 가운데 어떤 어려움인지 먼저 가르게 한다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '이렇게 말해 줘요', slots: [{ id: 'late', label: '원반이 다 와서야 손을 내밀어요' }, { id: 'high', label: '던진 원반이 짝의 머리 위로 날아가요' }], cards: ['"원반이 출발하면 바로 손을 내밀어 봐"', '"원반을 놓는 손을 가슴 높이에서 놓아 봐"'] }, prompt: '새 어려움마다 알맞은 돕는 말을 이어요.', target: { match: { late: '"원반이 출발하면 바로 손을 내밀어 봐"', high: '"원반을 놓는 손을 가슴 높이에서 놓아 봐"' } }, difficulty: 0.2 },
              { type: 'choice', prompt: '어려워하는 친구를 돕는 알맞은 방법은?', options: ['대신 해 준다', '방법을 보여 주고 친구가 해 볼 때까지 기다린다', '못한다고 알려 준다'], answer: 1, difficulty: 0.1, explain: '친구가 스스로 할 수 있게 돕는 것이 진짜 도움이에요.' },
              { type: 'short', prompt: '오늘 내가 짝에게 해 준 돕는 말을 쓰세요.' },
            ],
          },
        ),
        worksheet: {
          title: '보여 주며 도와요',
          items: [
            { type: 'table', prompt: '짝 돕기 기록을 쓰세요.', columns: ['짝이 어려워한 점', '내가 보여 준 방법', '해 준 말', '전 기록', '뒤 기록'], rows: 1 },
            { type: 'choice', prompt: '원반이 자꾸 옆으로 휘는 친구에게 알맞은 말에 ○ 하세요.', options: ['"원반을 땅과 나란히 눕혀 봐"', '"그냥 세게 던져"', '"내가 대신 던질게"'], answer: '"원반을 땅과 나란히 눕혀 봐"' },
            { type: 'short', prompt: '대신 해 주는 것과 돕는 것이 어떻게 다른지 쓰세요.' },
            { type: 'short', prompt: '짝에게 방법을 보여 준 뒤 짝이 해 보는 동안 내가 기다린 때를 떠올려 쓰세요.' },
          ],
          easy: {
            note: '보여 주기 → 말하기 → 기다리기.',
            items: [
              { type: 'choice', prompt: '친구를 도울 때는?', options: ['보여 주고 기다린다', '대신 해 준다'], answer: '보여 주고 기다린다' },
              { type: 'short', prompt: '짝에게 해 준 말을 쓰세요.' },
              { type: 'draw', prompt: '짝에게 원반 잡는 법을 보여 주는 모습을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '장면 보기가 두 개로 줄고, 잇기 카드 첫 장이 제자리에 있어요.',
          base: '장면마다 돕는 방법을 고르고 어려움과 말을 스스로 이어요.',
          challenge: '활동지에 짝이 어려워한 점·보여 준 방법·해 준 말을 모두 채워요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 빨리 끝내려고 대신 해 준다 → "보여 주고, 말하고, 기다리기" 세 걸음을 칠판에 둔다. ② 돕는 말이 "잘해 봐"처럼 막연하다 → 손·팔·원반 기울기처럼 몸의 어디를 말하게 한다. ③ 도움을 원하지 않는 친구에게 계속 고쳐 준다 → 먼저 "도와줄까?"라고 묻게 한다. 오르기 벽 보조는 말로만 돕고 몸을 들어 올리지 않는다.',
      }),
      // ───────────────────────── 45 ─────────────────────────
      L(45, {
        title: '모두가 한 번씩 맡는 원반 이어 받기 협동 놀이',
        objective: '팀원 모두가 한 번씩 던지고 받는 원반 이어 받기 협동 놀이를 계획해 하고, 모두가 참여하도록 배려하는 규칙을 정해 지킬 수 있다.',
        illustration: art('a ring of children each catching and passing a flying disc in turn, a paper tally board with every name ticked once', [
          { motif: 'star', x: 90, y: 80, s: 0.8 }, { motif: 'sun', x: 410, y: 56, s: 0.7 }, { motif: 'cloud', x: 250, y: 46 },
          { motif: 'hills', y: 232 },
          { motif: 'text', x: 240, y: 130, text: '모두 한 번씩', size: 26 },
        ]),
        safety: [DISC, DISC2, SPACE],
        stages: stages(
          {
            teacher: '"지난 경기에서 원반을 한 번도 못 만져 본 친구가 있었나요?" 손을 들게 한 뒤 "잘하는 친구끼리만 주고받으면 팀이 함께 한 걸까요?"를 묻는다. 오늘은 원반이 모든 팀원을 한 번씩 거쳐야 1점이 되는 이어 받기 협동 놀이를 하고, 모두가 참여하도록 돕는 규칙을 정한다고 알린다.',
            student: '모두가 한 번씩 원반을 받으려면 팀에 어떤 약속이 필요할지 하나 말해 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 모두가 참여하는 규칙 정하기', minutes: 8, tool: 'mindmap',
              task: '이어 받기 놀이에서 모두가 참여하도록 돕는 규칙만 고르고, 팀원 상황마다 알맞은 배려를 이어요.',
              teacher: '"받기가 서툰 친구에게 가까이 가서 던져 주는 것은 봐주기일까요, 배려일까요?" 모두가 한 번씩 받는 것이 목표라는 것을 짚는다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '모두가 한 번씩 참여하도록 돕는 규칙만 골라요.', toolOptions: { mode: 'pick', basket: '우리 팀 규칙', cards: ['받은 사람은 아직 안 받은 사람에게 던져요', '받기가 서툰 친구에게는 가까이 가서 낮게 던져요', '잘 받는 친구에게만 던져 점수를 빨리 내요', '떨어뜨린 친구는 다음 판에서 빼요'] }, target: { pick: ['받은 사람은 아직 안 받은 사람에게 던져요', '받기가 서툰 친구에게는 가까이 가서 낮게 던져요'] }, difficulty: 0.15,
                  hints: ['목표는 원반이 모든 팀원을 한 번씩 거치는 거예요.', '잘하는 친구에게만 던지거나 빼면 거치지 못하는 사람이 생겨요.', '안 받은 사람에게 던지기, 서툰 친구에게 가까이 낮게 던지기예요.'] },
                { prompt: '팀원 상황마다 알맞은 배려를 이어요.', toolOptions: { mode: 'match', topic: '이렇게 배려해요', slots: [{ id: 'new', label: '원반 받기를 처음 해 보는 친구' }, { id: 'hurt', label: '발목이 아파 걷기만 할 수 있는 친구' }, { id: 'shy', label: '자기 이름을 부르기 쑥스러워하는 친구' }], cards: ['다섯 걸음 앞에서 낮고 천천히 던져 줘요', '그 친구 쪽으로 다가가 서서 건네듯 던져요', '던지기 전에 우리가 먼저 이름을 불러 줘요'] }, target: { match: { new: '다섯 걸음 앞에서 낮고 천천히 던져 줘요', hurt: '그 친구 쪽으로 다가가 서서 건네듯 던져요', shy: '던지기 전에 우리가 먼저 이름을 불러 줘요' } }, levels: { easy: { state: { at: { '다섯 걸음 앞에서 낮고 천천히 던져 줘요': 0 } } } }, difficulty: 0.2,
                  hints: ['친구가 어려운 것이 받기인지, 움직이기인지, 말하기인지 갈라요.', '받기가 처음이면 거리를, 움직이기 어려우면 내 자리를, 쑥스러우면 이름 부르기를 바꿔 줘요.', '처음은 다섯 걸음, 발목은 다가가기, 쑥스러움은 먼저 이름 부르기예요.'] },
                { prompt: '이어 받기 놀이에서 있었던 행동을 "배려예요"와 "배려가 아니에요"로 나누어요.', toolOptions: { topic: '이 행동은?', slots: ['배려예요', '배려가 아니에요'], cards: ['아직 안 받은 친구 이름을 불러 알려 줬어요', '떨어뜨린 친구에게 "괜찮아, 다시!"라고 말했어요', '원반을 받자마자 친한 친구에게만 던졌어요', '서툰 친구 차례에 한숨을 쉬었어요'] }, target: { sort: { '배려예요': ['아직 안 받은 친구 이름을 불러 알려 줬어요', '떨어뜨린 친구에게 "괜찮아, 다시!"라고 말했어요'], '배려가 아니에요': ['원반을 받자마자 친한 친구에게만 던졌어요', '서툰 친구 차례에 한숨을 쉬었어요'] } }, difficulty: 0.15,
                  conclude: '모두가 한 번씩 받는 놀이는 안 받은 친구를 찾아 주고, 친구 상황에 맞추어 던지는 배려로 완성돼요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 이어 받기 협동 놀이 하기', minutes: 18, tool: 'timer',
              task: '정한 규칙대로 3분 동안 원반이 팀원 모두를 거치면 1점이에요. 세 판을 하고 판마다 점수와 원반을 한 번도 못 받은 사람 수를 적어요.',
              teacher: '"한 판은 3분, 판 사이에 1분 동안 규칙을 다시 살펴요." 점수보다 못 받은 사람 수가 0이 되었는지를 먼저 보게 한다. 판 사이에 규칙을 바꾸고 싶으면 회의 순서대로 짧게 정하게 한다.',
              levels: { easy: { workStep: 30, restStep: 30 }, base: { workStep: 10, restStep: 10 }, challenge: { workStep: 10, restStep: 10, showTotal: false } },
              items: [
                { prompt: '놀이 3분(180초), 규칙 살피기 1분(60초)을 세 판 하도록 타이머를 맞춰요.', toolOptions: { plan: { work: 60, rest: 30, rounds: 2 } }, target: { plan: { work: 180, rest: 60, rounds: 3 } }, difficulty: 0.2 },
                { prompt: '정한 규칙대로 원반 이어 받기 세 판을 해요. 다 했으면 표시해요.', free: true, toolOptions: { doneLabel: '모두가 참여하는 이어 받기를 세 판 했어요' }, difficulty: 0.1 },
                { prompt: '세 판 동안 얻은 점수와 마지막 판에 원반을 한 번도 못 받은 사람 수를 적어요.', toolOptions: { fields: [{ label: '세 판 점수 합', unit: '점', max: 30 }, { label: '마지막 판 못 받은 사람', unit: '명', max: 6 }] }, target: { records: true }, difficulty: 0.1 },
              ],
            },
          ],
          {
            teacher: '"세 판을 하며 못 받은 사람 수가 어떻게 달라졌나요? 어떤 규칙이 가장 도움이 되었나요?" 팀마다 한 가지씩 말하게 한다. 출구 1번을 틀린 학생에게는 친구가 어려운 것이 무엇인지부터 가르게 한다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '이렇게 배려해요', slots: [{ id: 'small', label: '손이 작아 원반을 놓치는 친구' }, { id: 'left', label: '왼손으로 받는 것이 편한 친구' }], cards: ['원반을 가슴 앞으로 낮게 보내 줘요', '친구의 왼쪽으로 던져 줘요'] }, prompt: '새 친구 상황마다 알맞은 배려를 이어요.', target: { match: { small: '원반을 가슴 앞으로 낮게 보내 줘요', left: '친구의 왼쪽으로 던져 줘요' } }, difficulty: 0.15 },
              { type: 'choice', prompt: '이어 받기 놀이의 목표에 맞는 행동은?', options: ['잘 받는 친구에게만 던진다', '아직 안 받은 친구에게 던진다', '떨어뜨린 친구를 뺀다'], answer: 1, difficulty: 0.1, explain: '원반이 모든 팀원을 거쳐야 1점이에요.' },
              { type: 'short', prompt: '오늘 내가 한 배려 행동 하나를 쓰세요.' },
            ],
          },
        ),
        worksheet: {
          title: '모두 한 번씩',
          items: [
            { type: 'table', prompt: '판마다 기록을 쓰세요.', columns: ['판', '점수', '못 받은 사람 수', '바꾼 규칙'], cells: [['1판', '', '', ''], ['2판', '', '', ''], ['3판', '', '', '']] },
            { type: 'blank', prompt: '전체 놀이 시간을 구하세요.', text: '놀이 180초, 살피기 60초를 세 판 하면 모두 ___초예요.', answer: '660' },
            { type: 'short', prompt: '우리 팀이 정한 배려 규칙 두 가지를 쓰세요.' },
            { type: 'short', prompt: '모두가 한 번씩 던질 수 있게 우리 팀이 바꾼 방법이 효과가 있었는지 쓰세요.' },
          ],
          easy: {
            note: '안 받은 친구에게, 친구에 맞게 던지기.',
            items: [
              { type: 'choice', prompt: '원반은 누구에게 던질까요?', options: ['아직 안 받은 친구', '잘 받는 친구'], answer: '아직 안 받은 친구' },
              { type: 'blank', prompt: '내 기록을 쓰세요.', text: '나는 원반을 ___번 받았어요.' },
              { type: 'draw', prompt: '팀원 모두가 원반을 주고받는 모습을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드를 놓으면 바로 맞는지 보이고, 타이머가 30초씩 움직여요.',
          base: '규칙과 배려를 스스로 고르고 타이머를 10초씩 맞춰요.',
          challenge: '타이머 전체 시간 없이 맞추고, 판 사이에 바꾼 규칙과 그 까닭을 활동지에 써요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 점수를 빨리 내려고 잘 받는 친구에게만 던진다 → 못 받은 사람 수를 먼저 보게 한다. ② 서툰 친구에게 가까이 던지는 것을 봐주기라고 여긴다 → 모두가 받는 것이 목표라는 것을 짚는다. ③ 쑥스러워 이름을 부르지 못한다 → 팀이 먼저 이름을 불러 주게 한다. 원반은 받는 사람이 손을 든 뒤 던지고, 팀 사이는 열 걸음 넘게 띄운다.',
      }),
      // ───────────────────────── 46 ─────────────────────────
      L(46, {
        title: '회의에서 말을 적게 한 친구와 그 까닭 살피기',
        objective: '팀 회의에서 사람마다 말한 횟수를 그래프로 읽고, 말을 적게 한 까닭을 짐작해 모두가 의견을 낼 수 있도록 돕는 방법을 찾을 수 있다.',
        illustration: art('a paper bar chart of five numbered seats with uneven bars, children around a circle where one quiet child is handed the talking stick', [
          { motif: 'star', x: 400, y: 70, s: 0.8 }, { motif: 'tree', x: 70, y: 180 }, { motif: 'cloud', x: 250, y: 46 },
          { motif: 'hills', y: 232 },
          { motif: 'text', x: 240, y: 130, text: '모두의 목소리', size: 26 },
        ]),
        safety: [DISC, SPACE, FIELD],
        stages: stages(
          {
            teacher: '"지난 회의에서 우리 팀에서 가장 많이 말한 사람과 가장 적게 말한 사람이 누구였나요?" 이름 대신 번호로 말하게 한다. "말을 적게 한 친구는 생각이 없었던 걸까요?" 대답을 받아, 오늘은 한 팀의 회의 그래프를 읽고 까닭을 짐작해 본 뒤, 모두가 말할 수 있는 회의를 다시 해 본다고 알린다.',
            student: '회의에서 말을 하고 싶었지만 못 했던 때가 있었다면 그때 기분을 떠올려 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 회의 그래프 읽기', minutes: 8, tool: 'chart',
              task: '한 팀의 작전 회의에서 자리마다 말한 횟수를 나타낸 그래프예요. 그래프를 읽고 물음에 답해요.',
              teacher: '"이름이 아니라 자리 번호로만 봐요. 누구를 탓하려는 것이 아니에요." 가장 많은 자리와 가장 적은 자리의 차를 함께 셈하게 한다.',
              options: { type: 'bar', mode: 'read', title: '작전 회의에서 자리마다 말한 횟수', unit: '번', xLabel: '자리', yLabel: '말한 횟수(번)', max: 10, scale: 1, data: [['1번', 8], ['2번', 1], ['3번', 5], ['4번', 0], ['5번', 4]] },
              levels: { easy: { showValues: true }, base: {}, challenge: { revealAfterCheck: true } },
              items: [
                { prompt: '한 번도 말하지 않은 자리를 골라요.', toolOptions: { question: '한 번도 말하지 않은 자리는?', choices: ['2번', '4번', '5번'], why: ['2번은 1번 말했어요.', null, '5번은 4번 말했어요.'] }, target: { pick: 1 }, difficulty: 0.1 },
                { prompt: '가장 많이 말한 자리와 가장 적게 말한 자리의 횟수 차는 몇 번인가요? 수를 넣어요.', target: { value: 8 }, difficulty: 0.15 },
                { prompt: '이 팀 회의에 대한 알맞은 판단을 골라요.', toolOptions: { question: '알맞은 판단은?', choices: ['한 자리가 말을 거의 다 해서 의견이 고르게 나오지 않았다', '모두가 고르게 말했다', '말을 적게 한 자리는 생각이 없었다'], why: [null, '0번부터 8번까지 크게 차이가 나요.', '말을 적게 한 것만으로 생각이 없었다고 알 수 없어요.'] }, target: { pick: 0 }, difficulty: 0.2,
                  conclude: '말한 횟수가 크게 차이 나면 몇 사람의 생각만 담긴 회의가 되기 쉬워요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 말을 적게 한 까닭과 도울 방법 잇기', minutes: 8, tool: 'mindmap',
              task: '말을 적게 한 까닭마다 팀이 도울 수 있는 방법을 이어요.',
              teacher: '"말을 안 한 까닭은 사람마다 달라요. 까닭에 따라 돕는 방법도 달라져요." 까닭을 친구 탓으로 돌리지 않고 회의 방식에서 찾게 한다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '말을 적게 한 까닭마다 팀이 도울 방법을 이어요.', toolOptions: { mode: 'match', topic: '이렇게 도와요', slots: [{ id: 'fast', label: '다른 친구들이 너무 빨리 정해 버렸어요' }, { id: 'shy', label: '틀린 말을 할까 봐 걱정했어요' }, { id: 'idea', label: '무엇을 말해야 할지 떠오르지 않았어요' }], cards: ['모두 한 번씩 말하기 전에는 정하지 않아요', '"어떤 의견이든 좋아"라고 먼저 말해 줘요', '"너라면 가운데와 양옆 중 어디로 달릴래?"처럼 골라 말할 수 있게 물어요'] }, target: { match: { fast: '모두 한 번씩 말하기 전에는 정하지 않아요', shy: '"어떤 의견이든 좋아"라고 먼저 말해 줘요', idea: '"너라면 가운데와 양옆 중 어디로 달릴래?"처럼 골라 말할 수 있게 물어요' } }, levels: { easy: { state: { at: { '모두 한 번씩 말하기 전에는 정하지 않아요': 0 } } } }, difficulty: 0.2,
                  hints: ['까닭이 시간 문제인지, 마음 문제인지, 생각 문제인지 갈라요.', '빨리 정하면 기다리는 규칙, 걱정하면 안심시키는 말, 떠오르지 않으면 고를 수 있는 물음이에요.', '정하기 전 한 번씩·어떤 의견이든 좋아·골라 말하는 물음 순서예요.'] },
                { prompt: '회의에서 모두가 말하도록 돕는 행동만 골라요.', toolOptions: { mode: 'pick', topic: '모두의 목소리', cards: ['말을 안 한 친구에게 말하기 막대를 건네요', '친구 의견이 끝날 때까지 끼어들지 않아요', '말을 안 한 친구에게 "왜 아무 말도 안 해?"라고 다그쳐요', '많이 말한 사람의 의견으로 정해요'] }, target: { pick: ['말을 안 한 친구에게 말하기 막대를 건네요', '친구 의견이 끝날 때까지 끼어들지 않아요'] }, difficulty: 0.15 },
                { prompt: '회의에서 말을 많이 하는 친구가 할 수 있는 일을 "도움이 돼요"와 "도움이 안 돼요"로 나누어요.', toolOptions: { topic: '많이 말하는 친구라면', slots: ['도움이 돼요', '도움이 안 돼요'], cards: ['내 의견을 한 번 말한 뒤 다른 친구 차례를 기다려요', '"너는 어떻게 생각해?"라고 물어요', '다른 친구가 말하는 중에 내 의견을 덧붙여요', '정해질 때까지 내 의견을 되풀이해요'] }, target: { sort: { '도움이 돼요': ['내 의견을 한 번 말한 뒤 다른 친구 차례를 기다려요', '"너는 어떻게 생각해?"라고 물어요'], '도움이 안 돼요': ['다른 친구가 말하는 중에 내 의견을 덧붙여요', '정해질 때까지 내 의견을 되풀이해요'] } }, difficulty: 0.2,
                  conclude: '말을 적게 한 까닭은 회의 방식에서 찾고, 기다리기·안심시키기·골라 묻기로 모두의 목소리를 담아요.' },
              ],
            },
            {
              id: 'a3', title: '활동 3. 모두가 말하는 회의로 다시 정하고 경기하기', minutes: 10, tool: 'timer',
              task: '찾은 방법을 써서 우리 팀 작전 회의를 다시 하고, 정한 작전으로 원반 패스 게임을 해요. 회의에서 말한 사람 수를 적어요.',
              teacher: '"이번 회의에서는 기록 담당이 자리마다 말한 횟수에 바를 그어요." 경기 뒤 그래프가 지난번보다 고르게 되었는지 견주게 한다.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '모두가 말하는 회의로 작전을 다시 정하고 경기해요. 다 했으면 표시해요.', free: true, toolOptions: { doneLabel: '모두가 말한 회의로 작전을 정해 경기했어요' }, difficulty: 0.1 },
                { prompt: '이번 회의에서 의견을 낸 사람 수와 가장 적게 말한 사람의 횟수를 적어요.', toolOptions: { fields: [{ label: '의견을 낸 사람 수', unit: '명', max: 6 }, { label: '가장 적게 말한 횟수', unit: '번', max: 10 }] }, target: { records: true }, difficulty: 0.1 },
                { prompt: '우리 팀 회의를 스스로 점검해 표시해요.', target: { selfCheck: ['말을 안 한 친구에게 차례를 건넸어요', '친구 말에 끼어들지 않았어요', '모두 한 번씩 말한 뒤 정했어요'] }, difficulty: 0.1 },
              ],
            },
          ],
          {
            teacher: '"이번 회의는 지난번과 무엇이 달랐나요? 처음으로 의견을 낸 친구가 있었다면 그 의견이 작전에 어떻게 쓰였나요?" 출구 1번을 틀린 학생에게는 까닭이 시간·마음·생각 가운데 무엇인지부터 다시 가르게 한다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '이렇게 도와요', slots: [{ id: 'noise', label: '모두 한꺼번에 말해 목소리가 묻혔어요' }, { id: 'new', label: '전학 와서 팀원들과 아직 어색해요' }], cards: ['말하기 막대를 든 사람만 말해요', '회의 전에 짝끼리 먼저 이야기해 보게 해요'] }, prompt: '새 까닭마다 팀이 도울 방법을 이어요.', target: { match: { noise: '말하기 막대를 든 사람만 말해요', new: '회의 전에 짝끼리 먼저 이야기해 보게 해요' } }, difficulty: 0.15 },
              { type: 'choice', prompt: '회의에서 한 번도 말하지 않은 친구에게 알맞은 행동은?', options: ['"왜 말 안 해?"라고 다그친다', '말하기 막대를 건네며 "너는 어떻게 생각해?"라고 묻는다', '그냥 정해 버린다'], answer: 1, difficulty: 0.1, explain: '차례를 건네고 부드럽게 물으면 말할 기회가 생겨요.' },
              { type: 'short', prompt: '다음 회의에서 내가 할 일 하나를 쓰세요.' },
            ],
          },
        ),
        worksheet: {
          title: '모두의 목소리',
          items: [
            { type: 'table', prompt: '우리 팀 회의에서 자리마다 말한 횟수를 쓰세요(이름 대신 번호).', columns: ['1번', '2번', '3번', '4번', '5번'], rows: 1 },
            { type: 'figure', wide: true, prompt: '그래프를 보고 말한 횟수가 가장 적은 자리에 ○ 하세요.', tool: 'chart', options: { type: 'bar', mode: 'read', title: '작전 회의에서 자리마다 말한 횟수', unit: '번', max: 10, scale: 5, data: [['1번', 8], ['2번', 1], ['3번', 5], ['4번', 0], ['5번', 4]] }, figures: [{ state: {}, caption: '자리마다 말한 횟수' }], answer: '4번' },
            { type: 'short', prompt: '"틀린 말을 할까 봐 걱정했어요"라는 친구를 돕는 말을 쓰세요.' },
            { type: 'short', prompt: '말한 횟수가 적은 자리의 친구가 더 말하기 쉽도록 팀이 할 수 있는 일을 쓰세요.' },
          ],
          easy: {
            note: '기다리기 · 안심시키기 · 골라 묻기.',
            items: [
              { type: 'choice', prompt: '말을 안 한 친구에게는?', options: ['차례를 건넨다', '다그친다'], answer: '차례를 건넨다' },
              { type: 'blank', prompt: '내가 말한 횟수를 쓰세요.', text: '나는 회의에서 ___번 말했어요.' },
              { type: 'draw', prompt: '친구에게 말하기 막대를 건네는 모습을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '그래프 막대 위에 값이 보이고, 잇기 카드 첫 장이 제자리에 있어요.',
          base: '그래프 눈금을 읽고 까닭과 방법을 스스로 이어요.',
          challenge: '그래프 값은 맞힌 뒤에만 보여, 눈금만 읽어 차를 셈해요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 말을 적게 한 친구를 탓한다 → 이름 대신 번호로만 보고 까닭을 회의 방식에서 찾게 한다. ② 말을 많이 한 친구가 위축된다 → 많이 말하는 친구가 할 수 있는 도움(묻기·기다리기)을 함께 찾는다. ③ 억지로 말을 시켜 더 움츠러든다 → 골라 말할 수 있는 물음을 주고 기다린다. 횟수 기록은 팀 안에서만 보고 반 전체에 이름과 함께 공개하지 않는다.',
      }),
      // ───────────────────────── 47 ─────────────────────────
      L(47, {
        title: '모두가 말하는 약속 세우고 생태형 스포츠 단원 돌아보기',
        objective: '팀 회의에서 모두가 의견을 낼 수 있는 말하기 약속을 정하고, 생태형 스포츠 단원에서 배운 장소 고르기·시설 아끼기·목표 세우기·함께 정하기를 돌아보며 나의 성장을 솔직하게 평가할 수 있다.',
        illustration: art('a class sitting in a circle under a big tree with a paper poster of speaking promises, flying discs, a map and a graph laid around them', [
          { motif: 'tree', x: 240, y: 170 }, { motif: 'star', x: 90, y: 80 }, { motif: 'star', x: 400, y: 80, s: 0.8 },
          { motif: 'hills', y: 232 },
          { motif: 'text', x: 240, y: 60, text: '함께 자란 우리', size: 26 },
        ]),
        safety: [SPACE, DISC, FIELD],
        stages: stages(
          {
            teacher: '"이 단원에서 우리는 학교 숲과 운동장에서 원반을 던지고, 지도를 보며 걷고, 시설을 살피고, 목표를 세우고, 함께 정했어요." 단원 활동 사진이나 활동지를 몇 장 보여 준다. "가장 기억에 남는 활동은 무엇인가요?" 두세 명의 대답을 듣고, 오늘은 반의 말하기 약속을 정하고 단원 전체를 돌아본다고 알린다.',
            student: '이 단원에서 가장 기억에 남는 활동 하나와 그 까닭을 짝에게 말해 봐요.',
          },
          [
            {
              id: 'a1', title: '활동 1. 우리 반 말하기 약속 정하기', minutes: 8, tool: 'mindmap',
              task: '모두가 의견을 낼 수 있는 말하기 약속만 고르고, 회의 장면마다 지킬 약속을 이어요.',
              teacher: '"고른 약속은 다음 체육 회의부터 칠판 옆에 붙여 둘 거예요." 약속마다 실제 회의에서 어떤 행동이 되는지 한 문장으로 말하게 한다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '모두가 말할 수 있는 회의를 위한 약속만 골라요.', toolOptions: { mode: 'pick', basket: '우리 반 말하기 약속', cards: ['모두 한 번씩 말한 뒤에 정해요', '친구 말이 끝날 때까지 기다려요', '"그건 별로야" 대신 "나는 이렇게 생각해"라고 말해요', '회의는 늘 같은 사람이 이끌어요', '말이 빠른 사람이 먼저 정해요'] }, target: { pick: ['모두 한 번씩 말한 뒤에 정해요', '친구 말이 끝날 때까지 기다려요', '"그건 별로야" 대신 "나는 이렇게 생각해"라고 말해요'] }, difficulty: 0.15,
                  hints: ['모든 사람에게 말할 기회와 존중을 주는 약속을 찾아요.', '늘 같은 사람이 이끌거나 빠른 사람이 정하면 기회가 고르지 않아요.', '한 번씩 말하기·기다리기·내 생각으로 말하기 세 가지예요.'] },
                { prompt: '회의 장면마다 지킬 말하기 약속을 이어요.', toolOptions: { mode: 'match', topic: '이 약속을 지켜요', slots: [{ id: 'cut', label: '친구가 말하는 중에 내 생각이 떠올랐어요' }, { id: 'rush', label: '아직 두 사람이 말하지 않았는데 정하자는 말이 나왔어요' }, { id: 'dislike', label: '친구 의견이 마음에 들지 않아요' }], cards: ['친구 말이 끝날 때까지 기다려요', '모두 한 번씩 말한 뒤에 정해요', '"나는 이렇게 생각해"라고 내 생각으로 말해요'] }, target: { match: { cut: '친구 말이 끝날 때까지 기다려요', rush: '모두 한 번씩 말한 뒤에 정해요', dislike: '"나는 이렇게 생각해"라고 내 생각으로 말해요' } }, levels: { easy: { state: { at: { '친구 말이 끝날 때까지 기다려요': 0 } } } }, difficulty: 0.2,
                  hints: ['장면에서 무엇이 문제가 될 뻔했는지 먼저 찾아요.', '끼어들기·서둘러 정하기·친구 의견 깎아내리기를 막는 약속이에요.', '말하는 중이면 기다리기, 서두르면 한 번씩 말하기, 싫으면 내 생각으로 말하기예요.'] },
                { prompt: '말하기 약속을 정할 때도 회의 순서를 따랐는지 나누어요.', toolOptions: { topic: '약속 정하기 회의', slots: ['순서를 따랐어요', '순서를 건너뛰었어요'], cards: ['"오늘은 말하기 약속을 정해요"라고 먼저 말했어요', '한 사람씩 하고 싶은 약속을 말했어요', '반장이 혼자 약속을 칠판에 적었어요', '정한 약속을 다시 읽지 않고 끝냈어요'] }, target: { sort: { '순서를 따랐어요': ['"오늘은 말하기 약속을 정해요"라고 먼저 말했어요', '한 사람씩 하고 싶은 약속을 말했어요'], '순서를 건너뛰었어요': ['반장이 혼자 약속을 칠판에 적었어요', '정한 약속을 다시 읽지 않고 끝냈어요'] } }, difficulty: 0.2,
                  conclude: '말하기 약속도 모두 함께, 회의 순서대로 정해야 모두가 지키는 약속이 돼요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 생태형 스포츠 단원 돌아보기', minutes: 10, tool: 'mindmap',
              task: '단원에서 한 활동마다 배운 것을 이어요. 단원 내내 쓴 방법을 시기별로 나누어요.',
              teacher: '"이 단원은 장소 고르기에서 시작해 함께 정하기로 끝났어요." 앞 단계에서 배운 것이 뒤 단계에서 어떻게 다시 쓰였는지 말하게 한다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '단원에서 한 활동마다 배운 것을 이어요.', toolOptions: { mode: 'match', topic: '이것을 배웠어요', slots: [{ id: 'place', label: '학교 지도에 디스크 골프 코스 짜기' }, { id: 'facility', label: '체육 창고 제자리 정리하기' }, { id: 'goal', label: '한 달 기록 그래프 읽기' }, { id: 'meet', label: '회의 순서로 작전 정하기' }], cards: ['장소의 안전과 자연을 살펴 활동 장소를 골라요', '시설과 용구를 아껴 오래 함께 써요', '내 기록을 근거로 목표에 다가간 정도를 판단해요', '모두의 의견을 들어 함께 정해요'] }, target: { match: { place: '장소의 안전과 자연을 살펴 활동 장소를 골라요', facility: '시설과 용구를 아껴 오래 함께 써요', goal: '내 기록을 근거로 목표에 다가간 정도를 판단해요', meet: '모두의 의견을 들어 함께 정해요' } }, levels: { easy: { state: { at: { '장소의 안전과 자연을 살펴 활동 장소를 골라요': 0 } } } }, difficulty: 0.2,
                  hints: ['활동 이름에 지도·창고·그래프·회의 가운데 무엇이 나오는지 보세요.', '지도는 장소, 창고는 시설, 그래프는 목표, 회의는 함께 정하기와 이어져요.', '네 활동이 네 배움과 하나씩 짝을 이루어요.'] },
                { prompt: '단원 내내 쓴 방법을 "활동 전", "활동 중", "활동 뒤"로 나누어요.', toolOptions: { topic: '언제 했나?', slots: ['활동 전', '활동 중', '활동 뒤'], cards: ['장소의 위험한 곳을 살펴요', '목표를 세우고 연습 계획을 짜요', '정한 역할과 작전대로 움직여요', '용구를 세어 제자리에 둬요', '기록을 견주어 다음 목표를 정해요'] }, target: { sort: { '활동 전': ['장소의 위험한 곳을 살펴요', '목표를 세우고 연습 계획을 짜요'], '활동 중': ['정한 역할과 작전대로 움직여요'], '활동 뒤': ['용구를 세어 제자리에 둬요', '기록을 견주어 다음 목표를 정해요'] } }, difficulty: 0.25,
                  hints: ['시작하기 전에 정해야 하는 것, 하는 동안 지키는 것, 끝나고 하는 것을 갈라요.', '살피기와 계획은 먼저, 역할대로 움직이기는 하는 중, 정리와 견주기는 끝난 뒤예요.', '활동 전 둘, 활동 중 하나, 활동 뒤 둘이에요.'] },
                { prompt: '단원에서 배운 것 가운데 생활에서도 쓸 수 있는 것만 골라요.', toolOptions: { mode: 'pick', topic: '생활에서도', cards: ['동네 공원에서 놀기 전에 위험한 곳을 살펴요', '공공 시설을 쓴 뒤 제자리에 두어요', '모둠 숙제를 정할 때 모두 한 번씩 말해요', '원반은 체육 시간에만 던질 수 있어요'] }, target: { pick: ['동네 공원에서 놀기 전에 위험한 곳을 살펴요', '공공 시설을 쓴 뒤 제자리에 두어요', '모둠 숙제를 정할 때 모두 한 번씩 말해요'] }, difficulty: 0.15,
                  conclude: '장소 살피기, 시설 아끼기, 목표 세우기, 함께 정하기는 체육 시간 밖 생활에서도 쓰여요.' },
              ],
            },
            {
              id: 'a3', title: '활동 3. 마지막 원반 놀이와 나를 솔직하게 돌아보기', minutes: 8, tool: 'emotion',
              task: '정한 말하기 약속으로 마지막 원반 놀이 방법을 함께 정해 해 본 뒤, 단원 동안의 나를 솔직하게 돌아봐요. 정답은 없어요.',
              teacher: '"자기 평가는 잘한 척하는 것이 아니에요. 솔직하게 고를수록 다음에 무엇을 할지 알 수 있어요." 어떤 칸을 골라도 괜찮다고 말하고, 친구의 선택을 보거나 평가하지 않게 한다.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '마지막 놀이에서 팀이 내 의견과 다른 방법을 정했어요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '나는 디스크 골프를 하자고 했지만, 팀원 모두가 한 번씩 말한 뒤 이어 받기 놀이로 정했어요.', feeling: '아쉬움', choices: [{ id: 'redo', text: '"다시 정하자"라고 계속 말해요', result: '놀이 시간이 줄어 한 판밖에 못 했어요.', mood: '속상함', why: '모두 말한 뒤 정한 것을 따르지 않으면 약속이 깨져요.' }, { id: 'join', text: '"좋아, 다음엔 디스크 골프도 해 보자"라고 말하고 함께해요', result: '두 판을 즐겁게 했고 팀이 다음 시간에 디스크 골프를 하자고 했어요.', mood: '기쁨' }] }, target: { choice: 'join' }, difficulty: 0.15 },
                { prompt: '단원 동안 나는 목표를 향해 얼마나 꾸준히 노력했는지 솔직하게 골라요. 정답은 없어요.', toolOptions: { mode: 'scale', steps: 3, situation: '한 달 동안 원반 받기나 가로 이동 목표를 세우고 연습했어요.', feeling: '뿌듯함', ask: '목표를 향해 얼마나 꾸준히 노력했나요?' }, target: { level: 'any' }, difficulty: 0.05 },
                { prompt: '단원 동안 팀 회의에서 친구의 의견을 얼마나 잘 들었는지 솔직하게 골라요. 정답은 없어요.', toolOptions: { mode: 'scale', steps: 3, situation: '역할 나누기, 작전 회의, 말하기 약속 정하기를 팀과 함께 했어요.', feeling: '만족', ask: '친구의 의견을 끝까지 들으려고 얼마나 애썼나요?' }, target: { level: 'any' }, difficulty: 0.05 },
                { prompt: '마지막 원반 놀이를 팀과 함께 해요. 다 했으면 표시해요.', free: true, toolOptions: { doneLabel: '말하기 약속으로 정한 마지막 놀이를 했어요' }, difficulty: 0.1,
                  conclude: '솔직하게 돌아본 나의 모습이 다음 단원에서 세울 목표의 출발점이 돼요.' },
              ],
            },
          ],
          {
            teacher: '"이 단원에서 내가 가장 많이 자란 점은 무엇인가요? 다음 단원에서 더 해 보고 싶은 것은요?" 몇 명의 대답을 듣고, 정한 말하기 약속을 다음 체육 시간 회의에서 다시 읽고 시작하자고 말한다. 출구 1번을 틀린 학생에게는 활동 이름에서 지도·창고·그래프·회의 낱말을 찾게 한다.',
            exitTicket: [
              { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '이것을 배웠어요', slots: [{ id: 'season', label: '계절에 따라 활동 장소와 장비 다시 정하기' }, { id: 'help', label: '어려워하는 친구에게 방법 보여 주기' }], cards: ['날씨와 계절을 살펴 안전하게 활동해요', '친구가 스스로 할 수 있게 도와요'] }, prompt: '단원의 다른 활동마다 배운 것을 이어요.', target: { match: { season: '날씨와 계절을 살펴 안전하게 활동해요', help: '친구가 스스로 할 수 있게 도와요' } }, difficulty: 0.15 },
              { type: 'choice', prompt: '팀 회의에서 모두가 말할 수 있게 하는 약속은?', options: ['말이 빠른 사람이 먼저 정한다', '모두 한 번씩 말한 뒤에 정한다', '늘 같은 사람이 정한다'], answer: 1, difficulty: 0.1, explain: '모두에게 말할 차례가 있어야 함께 정한 것이에요.' },
              { type: 'mood', prompt: '생태형 스포츠 단원을 마친 지금 나의 마음은 어떤가요?' },
            ],
          },
        ),
        worksheet: {
          title: '함께 자란 우리',
          items: [
            { type: 'table', prompt: '우리 반 말하기 약속을 쓰세요.', columns: ['약속', '회의에서 하는 행동'], rows: 3 },
            { type: 'table', prompt: '단원에서 배운 것을 돌아보며 쓰세요.', columns: ['배운 것', '가장 기억에 남는 활동', '생활에서 쓸 곳'], cells: [['장소 고르기', '', ''], ['시설 아끼기', '', ''], ['목표 세우기', '', ''], ['함께 정하기', '', '']] },
            { type: 'short', prompt: '이 단원에서 내가 가장 많이 자란 점과 그 증거를 쓰세요.' },
            { type: 'short', prompt: '다음 단원에서 세우고 싶은 목표를 쓰세요.' },
          ],
          easy: {
            note: '장소 · 시설 · 목표 · 함께 정하기.',
            items: [
              { type: 'choice', prompt: '회의에서 정하기 전에 할 일은?', options: ['모두 한 번씩 말하기', '빨리 정하기'], answer: '모두 한 번씩 말하기' },
              { type: 'short', prompt: '가장 기억에 남는 활동을 쓰세요.' },
              { type: 'draw', prompt: '이 단원에서 가장 즐거웠던 순간을 그리세요.' },
            ],
          },
        },
        differentiation: {
          easy: '카드를 놓으면 바로 맞는지 보이고, 잇기 카드 첫 장이 제자리에 있어요.',
          base: '약속과 배운 것을 스스로 고르고 이어요.',
          challenge: '활동지 돌아보기 표의 "생활에서 쓸 곳"까지 모두 채우고, 자란 점의 증거를 기록으로 써요.',
        },
        teacherNotes: '자주 보이는 어려움: ① 자기 평가에서 모두 가장 높은 칸을 고른다 → 정답이 없고 솔직할수록 다음 목표를 세우기 쉽다고 말한다. ② 단원 활동을 따로따로 기억한다 → 앞 단계 배움이 뒤 단계에서 다시 쓰인 예를 짚는다. ③ 말하기 약속을 정해 놓고 잊는다 → 다음 체육 회의 시작에 약속을 다시 읽게 한다. 마지막 놀이는 운동장 경계선 안에서만 한다.',
      }),
      // @@MORE@@
    ],
  });
})();
