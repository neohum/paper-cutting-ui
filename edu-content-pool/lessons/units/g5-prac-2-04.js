/* 5학년 실과 4. 지속가능한 기술과 융합 — 1~4차시 친환경 건설 구조물([6실04-01]) → 5~7차시 디지털 기기와 콘텐츠 저작([6실04-02]) → 8~10차시 사이버 공유([6실04-03]) →
 * 11~13차시 로봇 개념과 구조([6실04-04]) → 14~16차시 로봇 종류와 작동 원리([6실04-05]) → 17~19차시 로봇 코딩과 융합 기술([6실04-06]).
 * 성취기준은 units-index의 단원 목록에서 차시 주제에 맞는 것만 적는다.
 */
(function () {
  const U = { catalog: 'g5-실과-2학기-4', grade: 5, subject: '실과', unitTitle: '4. 지속가능한 기술과 융합' };
  const PROMPT = (what) => `Layered paper-cut illustration of ${what}, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.`;
  const head = (n, title, objective, standards) => ({
    id: `g5-prac-2-04-${String(n).padStart(2, '0')}`, schema: 'edu-lesson.v1',
    catalog: { unit: U.catalog, lesson: n },
    grade: U.grade, subject: U.subject, unitTitle: U.unitTitle,
    title, objective, standards, minutes: 40, formats: ['chromebook', 'projector', 'print'],
  });
  const CARD_LV = { easy: { live: true, instant: true }, base: {}, challenge: {} };
  const SCENES = [
    (t) => [{ motif: 'sun', x: 410, y: 58, s: 0.8 }, { motif: 'cloud', x: 110, y: 50 }, { motif: 'hills', y: 206 }, { motif: 'house', x: 90, y: 214 }, { motif: 'tree', x: 300, y: 214 }, { motif: 'house', x: 390, y: 216, color: 'sky', s: 0.9 }, { motif: 'text', x: 240, y: 134, text: t, size: 22 }],
    (t) => [{ motif: 'moon', x: 410, y: 58, s: 0.7 }, { motif: 'star', x: 90, y: 60 }, { motif: 'star', x: 170, y: 40, color: 'rose', s: 0.7 }, { motif: 'hills', y: 210 }, { motif: 'tree', x: 80, y: 216 }, { motif: 'flower', x: 400, y: 226 }, { motif: 'text', x: 240, y: 132, text: t, size: 21 }],
    (t) => [{ motif: 'cloud', x: 90, y: 48 }, { motif: 'cloud', x: 360, y: 70, s: 0.8 }, { motif: 'mountain', x: 200, y: 200 }, { motif: 'hills', y: 214 }, { motif: 'bird', x: 280, y: 84 }, { motif: 'leaf', x: 420, y: 226 }, { motif: 'text', x: 240, y: 136, text: t, size: 22 }],
  ];
  // d: { ill:[그림 설명, 장면 글, 장면 번호], intro:{ teacher, student, demo }, acts:[…], exit:{ teacher, items }, ws:{ title, items, easy:{ note, items } }, diff:[쉬움, 기본, 도전], notes }
  const lesson = (n, title, objective, stds, d) => {
    const acts = d.acts.map((a, i) => Object.assign({ id: `a${i + 1}`, minutes: d.acts.length === 3 ? 9 : d.acts.length === 2 ? (i === 0 ? 14 : 13) : 27, levels: CARD_LV }, a));
    const main = acts.reduce((s, a) => s + a.minutes, 0);
    return Object.assign(head(n, title, objective, stds), {
      illustration: { prompt: PROMPT(d.ill[0]), scene: { viewBox: [480, 270], layers: SCENES[d.ill[2] || 0](d.ill[1]) } },
      stages: [
        { id: 'intro', title: '도입', minutes: 6, teacher: d.intro.teacher, student: d.intro.student, demo: d.intro.demo },
        { id: 'main', title: '전개', minutes: main, activities: acts },
        { id: 'wrapup', title: '정리', minutes: 40 - 6 - main, teacher: d.exit.teacher, exitTicket: d.exit.items },
      ],
      worksheet: { title: d.ws.title, items: d.ws.items, easy: d.ws.easy },
      differentiation: { easy: d.diff[0], base: d.diff[1], challenge: d.diff[2] },
      teacherNotes: d.notes,
    }, d.safety ? { safety: d.safety } : {});
  };
  const L = [];

  // ───────────────────────── 1차시 (intro) 구조물을 머무는 것과 잇고 나르는 것으로 ─────────────────────────
  L.push(lesson(1, '학교 둘레의 구조물을 머무는 것과 잇고 나르는 것으로 나누기',
    '둘레의 구조물을 사람이 머무는 것과 잇고 나르는 것으로 가려 적고, 환경을 덜 해치는 구조물의 특징 두 가지를 말할 수 있다.', ['[6실04-01]'], {
    ill: ['a small town seen from above with a school building, a footbridge, a tunnel and a road connected by paper-cut paths, each labeled with tiny flags', '우리 둘레의 구조물을 찾아요', 0],
    intro: {
      teacher: '"우리 학교에서 집까지 오는 길에 사람이 만들어 놓은 큰 것을 몇 가지 만났나요?" 학교 건물, 횡단보도, 육교처럼 떠오르는 대로 말하게 하고 칠판에 적는다. 시연 단추로 카드가 \'머무는 것\'과 \'잇고 나르는 것\' 가지에 들어가는 모습을 보여 준 뒤 "이 단원에서는 이런 구조물과 로봇, 디지털 도구를 환경을 생각하며 알아봐요."라고 단원을 알린다. 구조물은 건물만이라고 생각하는 학생에게는 "건물이 아니면서 우리를 이동시켜 주는 것은 무엇이 있나요?"라고 묻는다.',
      student: '집에서 학교까지 오는 길에 사람이 만들어 놓은 큰 것 세 가지를 떠올려 짝과 말해 봅시다.',
      demo: { tool: 'mindmap', options: { topic: '학교 둘레', slots: ['머무는 구조물', '잇고 나르는 구조물'], cards: ['교실이 있는 건물', '학교 앞 육교'], shuffle: false }, sequence: [{ sort: { '머무는 구조물': ['교실이 있는 건물'], '잇고 나르는 구조물': ['학교 앞 육교'] } }] },
    },
    acts: [
      {
        title: '활동 1. 구조물을 머무는 것과 잇고 나르는 것으로 나누기', tool: 'mindmap',
        teacher: '"사람이 안에서 공부하거나 쉬는 곳인가요, 사람과 물건이 이쪽에서 저쪽으로 가도록 이어 주는 곳인가요?" 구조물의 쓰임을 보고 나누게 한다. 터널을 \'머무는 곳\'에 넣은 학생에게 "터널 안에서 오래 머무나요, 지나가나요?"라고 묻는다.',
        task: '카드를 읽고 구조물이 사람이 머무는 곳인지, 잇고 나르는 곳인지에 따라 가지에 나누어 넣어요.',
        levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
        items: [
          { prompt: '학교 둘레의 구조물을 머무는 것과 잇고 나르는 것으로 나누어 보세요.', toolOptions: { topic: '학교 둘레', slots: ['머무는 구조물', '잇고 나르는 구조물'], cards: ['체육관', '급식실', '학교 앞 육교', '학교 옆 도로'] }, hints: ['사람이 그 안에서 시간을 보내는 곳인지, 지나가기 위해 쓰는 곳인지 따져 나누어요.'], target: { sort: { '머무는 구조물': ['체육관', '급식실'], '잇고 나르는 구조물': ['학교 앞 육교', '학교 옆 도로'] } }, difficulty: 0.1 },
          { prompt: '우리 동네의 구조물을 머무는 것과 잇고 나르는 것으로 나누어 보세요.', toolOptions: { topic: '우리 동네', slots: ['머무는 구조물', '잇고 나르는 구조물'], cards: ['아파트', '도서관', '강을 건너는 큰 다리', '산을 뚫은 터널', '버스가 다니는 고가도로'] }, hints: ['안에서 살거나 이용하는 곳은 머무는 것이고, 가로질러 지나가는 곳은 잇고 나르는 것이에요.'], target: { sort: { '머무는 구조물': ['아파트', '도서관'], '잇고 나르는 구조물': ['강을 건너는 큰 다리', '산을 뚫은 터널', '버스가 다니는 고가도로'] } }, difficulty: 0.2 },
          { prompt: '구조물이라고 부를 수 있는 것을 모두 골라 보세요. 건물만 구조물은 아니에요.', toolOptions: { mode: 'pick', topic: '구조물', cards: ['한강 다리', '학교 건물', '철길', '운동장 옆 벚나무', '구름'] }, hints: ['사람이 만들어 세운 것인지 따져 골라요. 자연에서 저절로 자란 것은 구조물이 아니에요.'], target: { pick: ['한강 다리', '학교 건물', '철길'] }, difficulty: 0.25,
            predict: { q: '다리나 길도 구조물일까요?', options: ['구조물이에요', '구조물이 아니에요', '잘 모르겠어요'], answer: 0 },
            conclude: '건물뿐 아니라 다리·길·터널도 사람이 만들어 세운 구조물이에요.' },
        ],
      },
      {
        title: '활동 2. 환경을 덜 해치는 구조물의 특징 찾기', tool: 'mindmap',
        teacher: '"이 구조물은 환경을 어떻게 덜 해칠까요? 전기, 물, 재료, 생물 중 무엇과 이어지나요?" 특징 하나하나를 환경의 어느 쪽에 도움이 되는지 연결하게 한다. 크고 새로 지으면 무조건 좋다고 말하는 학생에게 "새로 지을 때 쓰는 재료와 에너지는 환경에 어떻게 작용할까요?"라고 묻는다.',
        task: '구조물의 특징이 환경을 덜 해치는 쪽인지 알아보고, 어느 쪽에 도움이 되는지 이어요.',
        levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
        items: [
          { prompt: '환경을 덜 해치는 특징만 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '환경을 덜 해치는 특징', cards: ['지붕에서 태양빛으로 전기를 만들어요', '빗물을 모아 화장실 물로 써요', '쓰고 남은 재료를 모두 땅에 묻어요', '낮에도 모든 전등을 켜 둬요'] }, hints: ['에너지나 물, 재료를 아끼거나 다시 쓰는 특징인지, 낭비하는 특징인지 따져 골라요.'], target: { pick: ['지붕에서 태양빛으로 전기를 만들어요', '빗물을 모아 화장실 물로 써요'] }, difficulty: 0.15 },
          { prompt: '구조물의 특징마다 도움이 되는 쪽을 한 장씩 이어 보세요.', toolOptions: { mode: 'match', topic: '도움이 되는 쪽', slots: [{ id: 'sun', label: '태양광 지붕' }, { id: 'rain', label: '빗물 저금통' }, { id: 'eco', label: '동물이 건너는 생태 다리' }], cards: ['전기를 아껴요', '물을 아껴요', '동물의 길을 이어 줘요', '공사 소리를 키워요'] }, hints: ['구조물이 무엇을 모으거나 이어 주는지 떠올려 그 덕분에 아끼는 것, 지켜지는 것을 이어요.'], target: { match: { sun: '전기를 아껴요', rain: '물을 아껴요', eco: '동물의 길을 이어 줘요' } }, difficulty: 0.25 },
          { prompt: '환경에 좋은 점과 환경에 나쁜 점을 나누어 보세요.', toolOptions: { topic: '구조물과 환경', slots: ['환경에 좋은 점', '환경에 나쁜 점'], cards: ['재활용 재료를 써요', '나무를 베어 길을 넓혀요', '햇빛으로 전기를 만들어요', '공사 먼지가 많이 나요'] }, hints: ['자연과 자원을 덜 쓰고 다시 쓰는 점은 좋은 점이고, 자연을 없애거나 오염을 만드는 점은 나쁜 점이에요.'], target: { sort: { '환경에 좋은 점': ['재활용 재료를 써요', '햇빛으로 전기를 만들어요'], '환경에 나쁜 점': ['나무를 베어 길을 넓혀요', '공사 먼지가 많이 나요'] } }, difficulty: 0.3 },
        ],
      },
      {
        title: '활동 3. 구조물이 하는 일 짝 짓기', tool: 'mindmap',
        teacher: '"학교 건물과 다리는 모양이 달라요. 각각 우리에게 무엇을 해 주나요?" 구조물이 하는 일을 한 문장으로 말하게 한다. 구조물 이름만 외우고 하는 일을 말하지 못하는 학생에게 "그것이 없으면 우리 생활에서 어떤 일이 어려워질까요?"라고 묻는다.',
        task: '구조물 이름마다 하는 일을 한 장씩 이어요.',
        items: [
          { prompt: '구조물마다 하는 일을 한 장씩 이어 보세요.', toolOptions: { mode: 'match', topic: '구조물이 하는 일', slots: [{ id: 'school', label: '학교 건물' }, { id: 'bridge', label: '강 위의 다리' }, { id: 'tunnel', label: '산을 뚫은 터널' }], cards: ['사람이 모여 공부해요', '강 양쪽을 이어 줘요', '산을 가로질러 길을 줄여요', '구름을 막아 줘요'] }, hints: ['머무는 곳인지 이어 주는 곳인지 생각하고, 그 구조물 덕분에 가능해지는 일을 이어요.'], target: { match: { school: '사람이 모여 공부해요', bridge: '강 양쪽을 이어 줘요', tunnel: '산을 가로질러 길을 줄여요' } }, difficulty: 0.2 },
          { prompt: '도시에서 물건과 사람을 나르는 구조물만 골라 보세요.', toolOptions: { mode: 'pick', topic: '나르는 구조물', cards: ['지하철 터널', '항구 부두', '영화관', '고속도로'] }, hints: ['사람이나 물건이 이동하는 길이나 연결 지점인지, 한곳에서 머무는 곳인지 따져 골라요.'], target: { pick: ['지하철 터널', '항구 부두', '고속도로'] }, difficulty: 0.3 },
          { prompt: '구조물이 모두 환경에 나쁠까요? 알맞은 설명만 골라 보세요.', toolOptions: { mode: 'pick', topic: '알맞은 설명', cards: ['어떻게 짓느냐에 따라 환경 부담이 달라져요', '구조물은 모두 환경을 해쳐요', '재료와 에너지를 아끼면 덜 해쳐요', '구조물이 크면 늘 환경에 좋아요'] }, hints: ['짓는 방법과 쓰는 재료, 에너지에 따라 환경에 주는 영향이 달라진다는 설명만 골라요.'], target: { pick: ['어떻게 짓느냐에 따라 환경 부담이 달라져요', '재료와 에너지를 아끼면 덜 해쳐요'] }, difficulty: 0.35 },
        ],
      },
    ],
    exit: {
      teacher: '"오늘 알게 된 환경을 덜 해치는 구조물의 특징을 한 가지 말해 볼까요?" 에너지를 아끼거나 물·재료를 다시 쓰는 특징이 나오는지 듣는다. 출구 1번에서 육교를 머무는 구조물에 넣은 학생에게 "그곳에서 사람이 오래 머무나요, 건너가나요?"라고 되묻는다. 다음 시간에는 친환경 구조물의 특징을 갈래별로 더 살펴본다고 예고한다.',
      items: [
        { type: 'tool', tool: 'mindmap', options: { topic: '동네 구조물', slots: ['머무는 구조물', '잇고 나르는 구조물'], cards: ['주민센터', '횡단 육교'] }, prompt: '두 구조물을 알맞은 가지에 넣어 보세요.', target: { sort: { '머무는 구조물': ['주민센터'], '잇고 나르는 구조물': ['횡단 육교'] } }, difficulty: 0.1 },
        { type: 'choice', prompt: '구조물에 대한 설명으로 알맞은 것은 무엇인가요?', options: ['건물만 구조물이에요', '건물·다리·길 모두 구조물이에요', '자연에서 자란 것도 구조물이에요'], answer: 1, difficulty: 0.15, explain: '사람이 만들어 세운 건물·다리·길·터널은 모두 구조물이에요.' },
        { type: 'short', prompt: '내가 사는 곳의 구조물 하나와 환경을 덜 해치게 바꿀 방법을 쓰세요.' },
        { type: 'mood', prompt: '오늘 공부는 어땠나요?' },
      ],
    },
    ws: {
      title: '우리 둘레의 구조물 찾기',
      items: [
        { type: 'figure', wide: true, prompt: '가지마다 구조물을 두 가지씩 써 넣으세요.', tool: 'mindmap', figures: [{ options: { topic: '우리 동네 구조물', printCards: false, slots: ['머무는 구조물', '잇고 나르는 구조물'], cards: ['보기'] }, caption: '' }], answer: '예: 머무는 — 학교 건물·도서관 / 잇고 나르는 — 다리·지하철 터널' },
        { type: 'choice', prompt: '환경을 덜 해치는 특징에 ○ 하세요.', options: ['빗물을 모아 다시 써요', '남은 재료를 땅에 묻어요', '낮에도 전등을 모두 켜요'], answer: '빗물을 모아 다시 써요' },
        { type: 'table', prompt: '구조물과 하는 일을 쓰세요.', columns: ['구조물', '하는 일', '환경을 덜 해치는 방법'], cells: [['학교 건물', '', ''], ['강 위의 다리', '', ''], ['', '', '']] },
        { type: 'short', prompt: '건물이 아니면서 우리 생활에 꼭 필요한 구조물 하나와 까닭을 쓰세요.' },
      ],
      easy: {
        note: '구조물은 사람이 만들어 세운 것이에요. 머무는 것과 잇고 나르는 것으로 나눌 수 있어요.',
        items: [
          { type: 'figure', wide: true, prompt: '가지마다 구조물을 하나씩 써 넣으세요.', tool: 'mindmap', figures: [{ options: { topic: '우리 동네 구조물', printCards: false, slots: ['머무는 구조물', '잇고 나르는 구조물'], cards: ['보기'] }, caption: '' }], answer: '예: 머무는 — 학교 / 잇고 나르는 — 다리' },
          { type: 'choice', prompt: '잇고 나르는 구조물에 ○ 하세요.', options: ['다리', '교실'], answer: '다리' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '다리는 강의 양쪽을 ___ 주는 구조물이에요.', answer: '이어' },
          { type: 'short', prompt: '우리 동네 구조물 하나를 쓰세요.' },
        ],
      },
    },
    diff: ['나누기에서 맞게 놓으면 초록 테두리가 생기고, 틀리면 까닭이 나와요.', '모두 놓은 뒤 확인을 눌러 스스로 고쳐요.', '구조물이 더 많은 동네 문항과 함정 카드가 들어간 설명 고르기가 나와요.'],
    notes: '자주 보이는 어려움: ① 구조물은 건물만이라고 여겨 다리·길·터널을 빼 놓는다 → 사람이 만들어 세운 것이면 모두 구조물이라고 짚는다. ② 터널과 육교를 머무는 곳에 넣는다 → 사람이 오래 머무는지 지나가는지 묻는다. ③ 크고 새로 지으면 환경에 좋다고 말한다 → 쓰는 재료와 에너지를 따져 보게 한다.',
  }));

  // ───────────────────────── 2차시 (practice) 친환경 특징을 갈래로 ─────────────────────────
  L.push(lesson(2, '에너지·물·재료·생물 네 갈래로 친환경 구조물의 특징 나누기',
    '친환경 구조물의 특징을 에너지·물·재료·생물 네 갈래로 나누고, 같은 구조물이 여러 갈래에 도움이 되는 경우를 설명할 수 있다.', ['[6실04-01]'], {
    ill: ['a green building with a rooftop garden and solar panels, a rain barrel, wooden beams and a small wildlife bridge nearby, connected by colored ribbons labeled with four icons', '네 갈래의 친환경', 1],
    intro: {
      teacher: '"지난 시간에 환경을 덜 해치는 구조물의 특징을 찾았어요. 그 특징들을 묶어 보면 어떤 갈래가 있을까요?" 전기, 물, 재료, 생물 이야기가 나오는지 듣는다. 시연 단추로 카드가 갈래에 놓이는 모습을 보여 주고 "한 구조물이 여러 갈래에 도움이 되기도 해요."라고 말한다. 친환경이면 모든 면에서 완벽하다고 말하는 학생에게는 "어떤 갈래는 좋고 어떤 갈래는 아직 부족할 수도 있어요."라고 짚는다.',
      student: '환경을 덜 해치는 구조물의 특징을 아는 대로 말하고, 어떤 갈래로 묶을 수 있을지 짝과 생각해 봅시다.',
      demo: { tool: 'mindmap', options: { topic: '친환경 갈래', slots: ['에너지', '물'], cards: ['태양광 지붕', '빗물 저금통'], shuffle: false }, sequence: [{ sort: { 에너지: ['태양광 지붕'], 물: ['빗물 저금통'] } }] },
    },
    acts: [
      {
        title: '활동 1. 친환경 특징을 네 갈래로 나누기', tool: 'mindmap',
        teacher: '"이 특징은 무엇을 아끼거나 지켜 주나요? 전기인가요, 물인가요, 재료인가요, 살아 있는 생물인가요?" 키워드로 갈래를 찾게 한다. 한 카드를 두 갈래에 걸치게 놓으려는 학생에게 "가장 크게 도움이 되는 것 하나를 골라 볼까요?"라고 말한다.',
        task: '특징 카드를 읽고 에너지·물·재료·생물 중 가장 알맞은 갈래에 나누어 넣어요.',
        levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
        items: [
          { prompt: '친환경 특징을 에너지·물·재료·생물 갈래로 나누어 보세요.', toolOptions: { topic: '친환경 구조물', slots: ['에너지', '물', '재료', '생물'], cards: ['햇빛으로 전기를 만들어요', '빗물을 모아 청소에 써요', '다시 쓴 목재로 지어요', '지붕에 풀과 꽃을 길러요'] }, hints: ['특징이 아끼는 것이 전기·물·재료인지, 살아 있는 생물을 지켜 주는 것인지 가려 나누어요.'], target: { sort: { 에너지: ['햇빛으로 전기를 만들어요'], 물: ['빗물을 모아 청소에 써요'], 재료: ['다시 쓴 목재로 지어요'], 생물: ['지붕에 풀과 꽃을 길러요'] } }, difficulty: 0.2 },
          { prompt: '다리와 도로의 친환경 특징을 네 갈래로 나누어 보세요.', toolOptions: { topic: '길과 다리', slots: ['에너지', '물', '재료', '생물'], cards: ['가로등에 작은 태양 전지를 달아요', '길 옆 도랑으로 빗물이 땅에 스며들어요', '버려진 타이어를 길 바닥에 섞어요', '동물이 지나는 굴을 길 밑에 만들어요'] }, hints: ['각 특징이 아끼거나 지켜 주는 것이 전기·물·재료·생물 중 무엇인지 따져 나누어요.'], target: { sort: { 에너지: ['가로등에 작은 태양 전지를 달아요'], 물: ['길 옆 도랑으로 빗물이 땅에 스며들어요'], 재료: ['버려진 타이어를 길 바닥에 섞어요'], 생물: ['동물이 지나는 굴을 길 밑에 만들어요'] } }, difficulty: 0.3 },
          { prompt: '친환경이라고 부르기 어려운 특징만 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '친환경이 아닌 특징', cards: ['공사 때마다 새 자재를 한꺼번에 많이 사요', '쓰지 않는 방의 전등을 꺼요', '다시 쓸 수 있는 유리를 버려요', '빗물을 하수구로 곧바로 보내요'] }, hints: ['아끼거나 다시 쓰기보다 낭비하는 특징이 어느 것인지 따져 골라요.'], target: { pick: ['공사 때마다 새 자재를 한꺼번에 많이 사요', '다시 쓸 수 있는 유리를 버려요', '빗물을 하수구로 곧바로 보내요'] }, difficulty: 0.35,
            predict: { q: '친환경 구조물은 모든 갈래에서 환경에 도움이 될까요?', options: ['모두 도움이 돼요', '갈래마다 다를 수 있어요', '잘 모르겠어요'], answer: 1 },
            conclude: '구조물마다 도움이 되는 갈래가 달라요. 한 갈래만 좋아도 친환경의 한 부분이에요.' },
        ],
      },
      {
        title: '활동 2. 사례와 특징 짝 짓기', tool: 'mindmap',
        teacher: '"이 건물은 어떻게 전기를 아끼나요? 창이 큰 까닭은요?" 사례를 보고 특징을 읽어 내게 한다. 모양을 보고 느낌으로만 고르는 학생에게 "그 모양이 환경에 어떤 도움이 되는지 까닭을 말해 볼까요?"라고 묻는다.',
        task: '구조물 사례마다 환경을 덜 해치는 특징을 한 장씩 이어요.',
        levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
        items: [
          { prompt: '사례마다 알맞은 친환경 특징을 이어 보세요.', toolOptions: { mode: 'match', topic: '사례와 특징', slots: [{ id: 'window', label: '창이 큰 학교 건물' }, { id: 'roof', label: '풀이 자라는 지붕' }, { id: 'tank', label: '지하에 있는 빗물 탱크' }], cards: ['낮에 전등을 덜 켜도 돼요', '건물 열을 식혀 에너지를 아껴요', '모은 빗물로 화단에 물을 줘요', '창을 닫으면 소음이 줄어요'] }, hints: ['사례가 무엇을 하는지 떠올려 그 덕분에 아끼는 것을 이어요. 사례와 상관없는 효과는 남겨요.'], target: { match: { window: '낮에 전등을 덜 켜도 돼요', roof: '건물 열을 식혀 에너지를 아껴요', tank: '모은 빗물로 화단에 물을 줘요' } }, difficulty: 0.25 },
          { prompt: '재활용 재료로 지은 구조물의 장점만 골라 보세요.', toolOptions: { mode: 'pick', topic: '재활용 재료의 장점', cards: ['새 재료를 덜 만들어도 돼요', '버려질 것이 덜 쌓여요', '건물이 반드시 낡아요', '재료를 구하는 에너지가 줄어요'] }, hints: ['재활용 재료로 인해 환경에 어떤 도움이 생기는지 따져 골라요. 근거 없이 나쁘다고 말하는 것은 빼요.'], target: { pick: ['새 재료를 덜 만들어도 돼요', '버려질 것이 덜 쌓여요', '재료를 구하는 에너지가 줄어요'] }, difficulty: 0.3 },
          { prompt: '친환경 구조물을 짓는 사람이 지킬 일을 차례대로 놓아 보세요.', toolOptions: { mode: 'order', cards: [{ id: 'place', text: '지을 곳의 숲과 물길을 먼저 살펴요' }, { id: 'plan', text: '재료와 에너지를 아끼는 설계를 해요' }, { id: 'build', text: '쓰고 남은 재료를 모아 다시 써요' }, { id: 'check', text: '다 지은 뒤 환경이 어떻게 달라졌는지 점검해요' }] }, hints: ['짓기 전에 살피고 계획해야 해요. 다 지은 뒤에 점검하는 순서를 찾아요.'], target: { order: ['place', 'plan', 'build', 'check'] }, difficulty: 0.4 },
        ],
      },
      {
        title: '활동 3. 한 구조물이 여러 갈래에 도움이 되는 점 찾기', tool: 'mindmap',
        teacher: '"풀이 자라는 지붕은 에너지에도, 생물에도 도움이 돼요. 왜 그럴까요?" 한 특징이 여러 갈래에 도움이 된다는 것을 근거를 들어 말하게 한다. 한 갈래에만 속한다고 고집하는 학생에게 "이 특징이 둘 다에 도움이 된다고 설명하는 문장을 읽어 볼까요?"라고 묻는다.',
        task: '한 구조물의 특징이 어떤 갈래에 도움이 되는지 모두 찾아 이어요.',
        items: [
          { prompt: '풀이 자라는 지붕이 도움이 되는 갈래를 모두 골라 보세요.', toolOptions: { mode: 'pick', topic: '풀 지붕의 도움', cards: ['건물 열을 식혀요 (에너지)', '작은 곤충이 머물러요 (생물)', '새 재료를 많이 써요 (재료)', '빗물이 천천히 흘러요 (물)'] }, hints: ['풀 지붕이 식물을 키워 열을 식히고, 곤충에게 자리를 주고, 빗물을 머금는 점을 떠올려 골라요.'], target: { pick: ['건물 열을 식혀요 (에너지)', '작은 곤충이 머물러요 (생물)', '빗물이 천천히 흘러요 (물)'] }, difficulty: 0.3 },
          { prompt: '학교 운동장 옆 빗물 정원이 도움이 되는 점을 갈래에 맞게 나누어 보세요.', toolOptions: { topic: '빗물 정원', slots: ['물', '생물'], cards: ['빗물이 땅에 스며들어요', '비가 올 때 물이 넘치는 것을 줄여요', '새와 나비가 와요', '꽃과 풀이 자라요'] }, hints: ['물이 어떻게 되는지 말하는 특징과 살아 있는 것이 어떻게 되는지 말하는 특징으로 나누어요.'], target: { sort: { 물: ['빗물이 땅에 스며들어요', '비가 올 때 물이 넘치는 것을 줄여요'], 생물: ['새와 나비가 와요', '꽃과 풀이 자라요'] } }, difficulty: 0.4 },
          { prompt: '친환경 구조물을 설명한 말 가운데 알맞은 것만 골라 보세요.', toolOptions: { mode: 'pick', topic: '알맞은 설명', cards: ['한 구조물이 여러 갈래에 도움이 되기도 해요', '친환경은 한 가지만 해당돼요', '짓는 방법에 따라 도움이 달라요', '크기가 크면 늘 친환경이에요'] }, hints: ['하나의 특징이 여러 갈래에 걸치는 점과, 짓는 방법이 중요하다는 점을 담은 설명을 골라요.'], target: { pick: ['한 구조물이 여러 갈래에 도움이 되기도 해요', '짓는 방법에 따라 도움이 달라요'] }, difficulty: 0.45 },
        ],
      },
    ],
    exit: {
      teacher: '"풀이 자라는 지붕이 여러 갈래에 도움이 되는 까닭을 한 문장으로 말해 볼까요?" 열을 식히고, 곤충 자리를 주고, 빗물을 머금는다는 말이 나오는지 듣는다. 출구 2번에서 \'한 가지만 해당\'을 고른 학생에게 "풀 지붕이 물과 생물에 모두 도움이 되는 점을 다시 찾아볼까요?"라고 묻는다. 다음 시간에는 종이와 막대로 다리 모형을 만들어 튼튼한 모양을 알아본다고 예고한다.',
      items: [
        { type: 'tool', tool: 'mindmap', options: { topic: '친환경 갈래', slots: ['에너지', '물', '생물'], cards: ['태양광 전지', '빗물 모으기', '새 둥지 상자'] }, prompt: '특징을 알맞은 갈래에 넣어 보세요.', target: { sort: { 에너지: ['태양광 전지'], 물: ['빗물 모으기'], 생물: ['새 둥지 상자'] } }, difficulty: 0.15 },
        { type: 'choice', prompt: '한 구조물의 친환경 특징에 대한 설명으로 알맞은 것은 무엇인가요?', options: ['한 갈래에만 도움이 돼요', '여러 갈래에 도움이 될 수 있어요', '도움이 되는 갈래는 없어요'], answer: 1, difficulty: 0.2, explain: '풀 지붕처럼 한 특징이 에너지·물·생물 여러 갈래에 도움이 될 수 있어요.' },
        { type: 'short', prompt: '학교에 더하고 싶은 친환경 특징 한 가지와 도움이 되는 갈래를 쓰세요.' },
        { type: 'mood', prompt: '오늘 공부는 어땠나요?' },
      ],
    },
    ws: {
      title: '친환경 특징 네 갈래',
      items: [
        { type: 'figure', wide: true, prompt: '가지마다 친환경 특징을 한 가지씩 써 넣으세요.', tool: 'mindmap', figures: [{ options: { topic: '친환경 구조물', printCards: false, slots: ['에너지', '물', '재료', '생물'], cards: ['보기'] }, caption: '' }], answer: '예: 에너지 — 태양광 지붕 / 물 — 빗물 저금통 / 재료 — 재활용 목재 / 생물 — 풀 지붕' },
        { type: 'choice', prompt: '물을 아끼는 특징에 ○ 하세요.', options: ['빗물을 모아 청소에 써요', '전등을 하루 종일 켜요', '새 자재를 많이 사요'], answer: '빗물을 모아 청소에 써요' },
        { type: 'table', prompt: '구조물 사례와 도움이 되는 갈래를 쓰세요.', columns: ['사례', '도움이 되는 갈래', '까닭'], cells: [['풀 지붕', '', ''], ['빗물 정원', '', ''], ['', '', '']] },
        { type: 'short', prompt: '한 구조물이 여러 갈래에 도움이 되는 예 하나를 쓰세요.' },
      ],
      easy: {
        note: '친환경 특징은 에너지·물·재료·생물 네 갈래로 나눌 수 있어요.',
        items: [
          { type: 'figure', wide: true, prompt: '가지마다 특징을 한 가지씩 쓰세요.', tool: 'mindmap', figures: [{ options: { topic: '친환경 구조물', printCards: false, slots: ['에너지', '물'], cards: ['보기'] }, caption: '' }], answer: '예: 에너지 — 태양광 / 물 — 빗물 모으기' },
          { type: 'choice', prompt: '에너지를 아끼는 특징에 ○ 하세요.', options: ['태양광 전지', '빗물 낭비'], answer: '태양광 전지' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '풀 지붕은 건물의 ___를 식혀 줘요.', answer: '열' },
          { type: 'short', prompt: '친환경 특징 하나를 쓰세요.' },
        ],
      },
    },
    diff: ['나누기에서 맞게 놓으면 초록 테두리가 생기고, 틀리면 까닭이 나와요.', '모두 놓은 뒤 확인을 눌러 스스로 고쳐요.', '함정 카드가 더 나오고, 한 특징이 여러 갈래에 도움이 되는 점을 모두 골라요.'],
    notes: '자주 보이는 어려움: ① 한 특징을 한 갈래에만 속한다고 생각한다 → 풀 지붕처럼 여러 갈래에 걸치는 예를 보여 준다. ② 친환경이면 완벽하다고 여긴다 → 갈래마다 도움 정도가 다를 수 있음을 짚는다. ③ 재활용 재료는 약하다고 선입견을 가진다 → 재료를 다시 쓰는 장점과 시험으로 확인하는 일이 필요함을 알려 준다.',
  }));

  // ───────────────────────── 3차시 (core) 종이 다리 모형 만들어 견디는 무게 재기 ─────────────────────────
  L.push(lesson(3, '종이와 막대로 다리 모형을 만들고 견디는 무게 재기',
    '종이와 막대로 다리 모형을 만들어 무게를 하나씩 얹어 견디는 정도를 재고, 기록을 읽어 어떤 뼈대가 더 잘 견디는지 말할 수 있다.', ['[6실04-01]'], {
    ill: ['a paper-and-stick bridge model resting between two stacks of books with small round weights piled on top and a notebook for recording results', '무게를 하나씩 올려 봐요', 2],
    intro: {
      teacher: '"종이 한 장을 책 두 권 사이에 걸치고 추를 올리면 몇 개나 버틸까요? 접으면 달라질까요?" 예상을 손가락으로 표시하게 한다. 시연 단추로 시험 순서가 놓이는 모습을 보여 주고 "무게는 한 번에 많이 올리지 말고 하나씩 올려요. 그래야 어디서 무너졌는지 알아요."라고 말한다. 재료를 많이 쓸수록 튼튼하다고 말하는 학생에게는 "막대를 반으로 줄이고 모양을 바꾸면 어떻게 될까요?"라고 되묻는다.',
      student: '종이 한 장을 책 두 권 사이에 걸쳤을 때 추를 몇 개나 올릴 수 있을지 예상해 봅시다.',
      demo: { tool: 'kitchen', options: { mode: 'order', cards: [{ id: 'bridge', text: '다리를 책 두 권 위에 걸쳐요' }, { id: 'weight', text: '추를 하나씩 올려요' }], shuffle: false }, sequence: [{ order: ['bridge', 'weight'] }] },
    },
    safety: ['막대를 자를 때 가위의 날 방향에 손가락을 두지 않아요.', '가위를 건넬 때는 손잡이를 상대에게 줘요.', '풀 묻은 손으로 눈이나 입을 만지지 않고 활동이 끝나면 손을 씻어요.'],
    acts: [
      {
        title: '활동 1. 다리 모형 만드는 차례와 시험 순서 놓기', tool: 'kitchen',
        teacher: '"막대를 붙이기 전에 길이를 정해야 하나요, 붙인 뒤에 정해야 하나요?" 앞 단계가 뒤 단계의 바탕이 되는 순서를 찾게 한다. 무게를 한꺼번에 올리려는 학생에게 "어느 개수에서 무너졌는지 알 수 있나요?"라고 묻는다.',
        task: '카드를 읽고 다리 모형을 만드는 차례와 무게를 올려 견디는 정도를 재는 순서를 놓아요.',
        levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
        items: [
          { prompt: '다리 모형을 만드는 차례를 위에서부터 놓아 보세요.', toolOptions: { mode: 'order', cards: [{ id: 'draw', text: '만들 다리의 그림을 먼저 그려요' }, { id: 'cut', text: '막대를 필요한 길이로 잘라요' }, { id: 'glue', text: '막대를 붙여 뼈대를 세워요' }, { id: 'dry', text: '풀이 마를 때까지 기다려요' }] }, hints: ['무엇을 만들지 정한 뒤에 재료를 다듬고 붙여요. 붙인 뒤에는 굳기를 기다리는 순서를 생각해요.'], target: { order: ['draw', 'cut', 'glue', 'dry'] }, difficulty: 0.2 },
          { prompt: '다리가 견디는 무게를 재는 순서를 위에서부터 놓아 보세요.', toolOptions: { mode: 'order', cards: [{ id: 'set', text: '다리를 책 두 권 위에 걸쳐요' }, { id: 'one', text: '가운데에 추를 한 개 올려요' }, { id: 'more', text: '무너질 때까지 하나씩 더 올려요' }, { id: 'rec', text: '무너지기 직전의 추 개수를 적어요' }] }, hints: ['걸쳐 놓아야 무게를 올릴 수 있어요. 적는 일은 무너진 뒤에 해요. 무게는 몇 개씩 올리는지가 중요해요.'], target: { order: ['set', 'one', 'more', 'rec'] }, difficulty: 0.3 },
          { prompt: '모형을 만들 때 안전하게 하는 행동만 골라 표시해 보세요.', toolOptions: { mode: 'checklist', title: '안전하게 하는 행동', items: [{ id: 'cut', text: '막대를 자를 때 날 반대쪽에 손가락을 둬요' }, { id: 'run', text: '가위를 들고 교실을 뛰어다녀요' }, { id: 'pass', text: '가위를 건넬 때 손잡이를 상대에게 줘요' }, { id: 'eye', text: '풀 묻은 손으로 눈을 비벼요' }, { id: 'clean', text: '다 쓴 뒤 막대 조각을 쓰레기통에 모아요' }] }, hints: ['다치거나 다른 사람을 위험하게 만들 행동인지, 안전을 지키는 행동인지 하나씩 따져 표시해요.'], target: { checklist: ['cut', 'pass', 'clean'] }, difficulty: 0.25 },
        ],
      },
      {
        title: '활동 2. 견디는 무게 기록을 그래프로 읽기', tool: 'chart',
        teacher: '"어느 막대가 가장 길어요? 그것이 무엇을 말해 주나요?" 막대의 길이가 견딘 추의 개수임을 확인하게 한다. 막대 길이만 보고 \'이 모양이 예뻐서 좋다\'라고 답하는 학생에게 "숫자와 그래프가 말해 주는 것을 근거로 말해 볼까요?"라고 묻는다.',
        task: '시험 기록 그래프를 읽고 물음에 알맞은 답을 골라요.',
        levels: { easy: { showValues: true }, base: {}, challenge: {} },
        items: [
          { prompt: '그래프를 보고 가장 많은 추를 견딘 뼈대를 골라 보세요.', toolOptions: { type: 'bar', mode: 'read', title: '뼈대별 견딘 추', unit: '개', xLabel: '뼈대', yLabel: '추 개수', data: [['사각 뼈대', 8], ['삼각 뼈대', 14], ['사각에 줄 하나', 11]], question: '가장 많은 추를 견딘 뼈대는?', choices: ['사각 뼈대', '삼각 뼈대', '사각에 줄 하나'] }, target: { pick: 1 }, difficulty: 0.2 },
          { prompt: '종이를 접은 횟수에 따라 견딘 무게가 어떻게 달라졌는지 골라 보세요.', toolOptions: { type: 'bar', mode: 'read', title: '접은 횟수별 견딘 추', unit: '개', xLabel: '접은 모양', yLabel: '추 개수', data: [['한 장 그대로', 5], ['한 번 접은 것', 9], ['세 번 접은 것', 15]], question: '접을수록 견딘 추 개수는?', choices: ['늘어났어요', '줄어들었어요', '변하지 않았어요'] }, target: { pick: 0 }, difficulty: 0.3 },
          { prompt: '막대를 더 많이 쓴 다리가 가장 튼튼했을까요? 그래프를 읽고 골라 보세요.', toolOptions: { type: 'bar', mode: 'read', title: '막대 수와 견딘 추', unit: '개', xLabel: '다리', yLabel: '추 개수', data: [['막대 많은 사각 다리', 9], ['막대 적은 삼각 다리', 15], ['막대 중간 줄 다리', 12]], question: '가장 튼튼했던 다리는?', choices: ['막대 많은 사각 다리', '막대 적은 삼각 다리', '막대 중간 줄 다리'] }, target: { pick: 1 }, difficulty: 0.35,
            predict: { q: '재료를 많이 쓰면 언제나 더 튼튼할까요?', options: ['언제나 그래요', '모양에 따라 달라요', '잘 모르겠어요'], answer: 1 },
            conclude: '재료의 양보다 뼈대의 모양이 튼튼함을 좌우할 수 있어요.' },
        ],
      },
      {
        title: '활동 3. 시험 기록으로 알 수 있는 것 가려내기', tool: 'mindmap',
        teacher: '"기록에서 바로 알 수 있는 말과, 기록만으로는 알 수 없는 말을 가려 볼까요?" 수나 순서로 말한 것만 근거가 된다고 짚는다. 근거 없이 느낌으로 결론을 말하는 학생에게 "그 말을 뒷받침하는 기록이 있나요?"라고 묻는다.',
        task: '시험 기록을 읽고 카드를 \'기록으로 알 수 있어요\'와 \'기록만으로는 알 수 없어요\'로 나누어요.',
        levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
        items: [
          { prompt: '기록으로 알 수 있는 말과 알 수 없는 말을 나누어 보세요.', toolOptions: { topic: '시험 기록', slots: ['기록으로 알 수 있어요', '기록만으로는 알 수 없어요'], cards: ['삼각 뼈대가 사각 뼈대보다 추를 더 견뎠어요', '막대를 많이 쓸수록 늘 튼튼해요', '접은 종이가 한 장보다 더 견뎠어요', '이 모양이 가장 예뻐요'] }, hints: ['숫자나 그래프에 나타난 사실만 기록으로 알 수 있어요. 느낌이나 어떤 일에든 맞는다는 말은 기록으로 알 수 없어요.'], target: { sort: { '기록으로 알 수 있어요': ['삼각 뼈대가 사각 뼈대보다 추를 더 견뎠어요', '접은 종이가 한 장보다 더 견뎠어요'], '기록만으로는 알 수 없어요': ['막대를 많이 쓸수록 늘 튼튼해요', '이 모양이 가장 예뻐요'] } }, difficulty: 0.3 },
          { prompt: '시험 결과를 믿을 수 있게 하는 방법만 골라 보세요.', toolOptions: { mode: 'pick', topic: '믿을 수 있는 시험', cards: ['같은 추로 시험해요', '여러 번 시험해 기록해요', '다리마다 다른 추를 써요', '무너진 것은 기록하지 않아요'] }, hints: ['다른 모양을 견줄 때 시험 조건이 같은지, 결과를 빠짐없이 적는지를 생각해 골라요.'], target: { pick: ['같은 추로 시험해요', '여러 번 시험해 기록해요'] }, difficulty: 0.35 },
          { prompt: '다리가 무너진 모습마다 알맞은 짐작을 이어 보세요.', toolOptions: { mode: 'match', topic: '무너진 모습과 짐작', slots: [{ id: 'mid', label: '가운데가 푹 꺾였어요' }, { id: 'joint', label: '붙인 자리가 떨어졌어요' }, { id: 'side', label: '한쪽 끝이 미끄러졌어요' }], cards: ['가운데를 받치는 뼈대가 약했어요', '풀이 덜 말랐거나 붙인 면이 좁았어요', '걸치는 자리가 평평하지 않았어요', '추가 가벼웠어요'] }, hints: ['무너진 자리를 보고 그 자리를 받치거나 붙이거나 걸치는 곳에서 원인을 찾아 이어요.'], target: { match: { mid: '가운데를 받치는 뼈대가 약했어요', joint: '풀이 덜 말랐거나 붙인 면이 좁았어요', side: '걸치는 자리가 평평하지 않았어요' } }, difficulty: 0.4 },
        ],
      },
    ],
    exit: {
      teacher: '"오늘 시험에서 가장 튼튼한 뼈대를 어떻게 알았나요?" 그래프의 숫자를 근거로 말하는지 듣는다. 출구 2번에서 \'재료를 많이 쓰면 튼튼\'을 고른 학생에게 "삼각 뼈대는 막대가 적은데도 더 견디지 않았나요?"라고 되묻는다. 다음 시간에는 무너진 자리를 찾아 뼈대를 바꾸어 다시 만든다고 예고한다.',
      items: [
        { type: 'tool', tool: 'chart', options: { type: 'bar', mode: 'read', title: '다리 모양별 견딘 추', unit: '개', xLabel: '모양', yLabel: '추 개수', data: [['평평한 종이', 4], ['세로로 세운 종이', 10]], question: '더 많이 견딘 모양은?', choices: ['평평한 종이', '세로로 세운 종이'] }, prompt: '그래프를 보고 더 많이 견딘 모양을 골라 보세요.', target: { pick: 1 }, difficulty: 0.15 },
        { type: 'choice', prompt: '다리 모형 시험에서 추를 올리는 방법으로 알맞은 것은 무엇인가요?', options: ['한꺼번에 많이 올려요', '하나씩 올리며 기록해요', '가장 가벼운 것만 올려요'], answer: 1, difficulty: 0.2, explain: '하나씩 올려야 몇 개째에서 무너지는지 알 수 있어요.' },
        { type: 'short', prompt: '오늘 시험에서 알게 된 튼튼한 뼈대의 특징을 쓰세요.' },
        { type: 'mood', prompt: '오늘 공부는 어땠나요?' },
      ],
    },
    ws: {
      title: '다리 모형 시험 기록',
      items: [
        { type: 'table', prompt: '표를 보고 가장 튼튼한 다리에 ○ 하세요.', columns: ['시험', '견딘 추 개수'], cells: [['가 다리', '6'], ['나 다리', '12'], ['다 다리', '9']], answer: '나 다리' },
        { type: 'choice', prompt: '시험 결과를 믿을 수 있게 하려면 어떻게 하나요?', options: ['같은 추로 여러 번 시험해요', '다리마다 다른 추를 써요', '무너진 것은 적지 않아요'], answer: '같은 추로 여러 번 시험해요' },
        { type: 'table', prompt: '내 시험 기록을 쓰세요.', columns: ['뼈대 모양', '견딘 추 개수', '무너진 자리'], cells: [['', '', ''], ['', '', '']] },
        { type: 'short', prompt: '다리 모형을 만들 때 지킨 안전 행동 한 가지를 쓰세요.' },
      ],
      easy: {
        note: '추는 하나씩 올리고 몇 개에서 무너졌는지 기록해요.',
        items: [
          { type: 'table', prompt: '더 많이 견딘 다리에 ○ 하세요.', columns: ['시험', '견딘 추 개수'], cells: [['가 다리', '5'], ['나 다리', '9']], answer: '나 다리' },
          { type: 'choice', prompt: '추를 올리는 방법에 ○ 하세요.', options: ['하나씩 올려요', '한꺼번에 올려요'], answer: '하나씩 올려요' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '막대그래프에서 막대가 ___ 다리가 더 많이 견뎠어요.', answer: '긴' },
          { type: 'short', prompt: '오늘 만든 다리의 모양을 한 줄 쓰세요.' },
        ],
      },
    },
    diff: ['순서 놓기에서 맞게 놓으면 초록 테두리가 생기고, 그래프는 막대 값이 보여요.', '모두 놓고 읽은 뒤 확인을 눌러 스스로 고쳐요.', '그래프 읽기에 재료의 양을 견주는 함정이 들어가고, 시험 결과를 믿는 방법을 가려내요.'],
    notes: '자주 보이는 어려움: ① 재료를 많이 쓰면 튼튼하다고 여긴다 → 막대 수가 적은 삼각 뼈대가 더 견딘 기록을 보여 준다. ② 추를 한꺼번에 올려 어디서 무너졌는지 모른다 → 하나씩 올리며 개수를 적게 한다. ③ 가위와 풀을 안전하게 쓰지 않는다 → 시작 전에 안전 점검 표시를 먼저 하게 한다.',
  }));

  // ───────────────────────── 4차시 (practice) 무너진 자리 찾고 뼈대 바꾸기 ─────────────────────────
  L.push(lesson(4, '무너진 자리를 찾아 뼈대를 바꾸어 다시 만들고 결과 견주기',
    '다리 모형이 무너진 자리를 찾아 뼈대 모양을 바꾸어 다시 만들고, 시험 조건을 같게 하여 앞뒤 결과를 견줄 수 있다.', ['[6실04-01]'], {
    ill: ['two paper bridge models side by side where one has a triangle truss added over a collapsed square frame, with a small ruler and a chart on the table', '바꾸고 다시 견줘요', 0],
    intro: {
      teacher: '"지난 시간에 무너진 다리가 있었어요. 무너진 자리를 어떻게 알 수 있을까요?" 어느 자리가 꺾였는지, 붙인 자리가 떨어졌는지 말하게 한다. 시연 단추로 무너진 가운데에 대각선 막대를 더해 다시 만드는 순서가 놓이는 모습을 보여 주고 "한 번에 한 곳만 바꾸어야 무엇이 좋아졌는지 알 수 있어요."라고 말한다. 무너진 다리를 버리고 새로 만들자는 학생에게는 "어디가 문제였는지 알면 그 자리만 고칠 수 있지 않을까요?"라고 되묻는다.',
      student: '무너진 다리를 봤을 때 어느 자리를 먼저 살펴야 하는지 짝과 이야기해 봅시다.',
      demo: { tool: 'kitchen', options: { mode: 'order', cards: [{ id: 'look', text: '무너진 자리를 살펴요' }, { id: 'add', text: '그 자리에 막대를 더해요' }], shuffle: false }, sequence: [{ order: ['look', 'add'] }] },
    },
    safety: ['막대를 자를 때 가위의 날 방향에 손가락을 두지 않아요.', '가위를 건넬 때는 손잡이를 상대에게 줘요.', '풀 묻은 손으로 눈이나 입을 만지지 않고 활동이 끝나면 손을 씻어요.'],
    acts: [
      {
        title: '활동 1. 무너진 모습에서 고칠 자리 짚기', tool: 'mindmap',
        teacher: '"가운데가 꺾였다면 어느 막대가 약했을까요?" 무너진 모습과 약한 자리를 이어 보게 한다. 막대를 더 굵은 것으로 바꾸자고만 말하는 학생에게 "굵게 하는 대신 모양을 바꾸어 힘을 나누는 방법은 없을까요?"라고 묻는다.',
        task: '무너진 모습마다 어떻게 고치면 좋을지 한 장씩 이어요.',
        levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
        items: [
          { prompt: '무너진 모습마다 고치는 방법을 한 장씩 이어 보세요.', toolOptions: { mode: 'match', topic: '고치는 방법', slots: [{ id: 'mid', label: '가운데가 아래로 꺾였어요' }, { id: 'edge', label: '붙인 자리가 떨어졌어요' }, { id: 'lean', label: '다리가 한쪽으로 기울었어요' }], cards: ['가운데에 대각선 막대를 더해 힘을 나눠요', '붙이는 면을 넓히고 풀이 마를 때까지 기다려요', '양쪽 기둥의 높이를 같게 맞춰요', '추를 더 빨리 올려요'] }, hints: ['무너진 자리를 보고 그곳의 힘을 나누거나 붙임을 단단히 하거나 균형을 맞추는 방법을 이어요.'], target: { match: { mid: '가운데에 대각선 막대를 더해 힘을 나눠요', edge: '붙이는 면을 넓히고 풀이 마를 때까지 기다려요', lean: '양쪽 기둥의 높이를 같게 맞춰요' } }, difficulty: 0.25 },
          { prompt: '뼈대를 바꿀 때 알맞은 생각만 골라 보세요.', toolOptions: { mode: 'pick', topic: '알맞은 생각', cards: ['무너진 자리를 보고 그곳만 고쳐요', '한 번에 한 곳만 바꿔요', '재료를 두 배로 늘리면 무조건 튼튼해요', '무너졌으니 버리고 잊어요'] }, hints: ['원인을 찾아 그 자리만 바꾸고, 하나씩 바꾸어 결과를 견주는 생각을 골라요.'], target: { pick: ['무너진 자리를 보고 그곳만 고쳐요', '한 번에 한 곳만 바꿔요'] }, difficulty: 0.3 },
          { prompt: '튼튼한 뼈대를 만드는 모양과 아닌 모양을 나누어 보세요.', toolOptions: { topic: '뼈대 모양', slots: ['힘을 잘 나눠요', '힘이 한곳에 몰려요'], cards: ['삼각형으로 이어진 뼈대', '대각선 막대가 있는 사각', '막대 하나만 가로로 걸친 것', '가운데가 비어 있는 긴 판'] }, hints: ['모양이 힘을 여러 막대로 나눌 수 있는지, 한곳으로 몰리는지 떠올려 나누어요.'], target: { sort: { '힘을 잘 나눠요': ['삼각형으로 이어진 뼈대', '대각선 막대가 있는 사각'], '힘이 한곳에 몰려요': ['막대 하나만 가로로 걸친 것', '가운데가 비어 있는 긴 판'] } }, difficulty: 0.35,
            predict: { q: '삼각형 뼈대가 사각형보다 힘을 잘 나눌까요?', options: ['더 잘 나눠요', '똑같아요', '잘 모르겠어요'], answer: 0 },
            conclude: '삼각형은 모양이 쉽게 찌그러지지 않아서 힘을 여러 막대로 나누어 견딜 수 있어요.' },
        ],
      },
      {
        title: '활동 2. 고치고 다시 시험하는 차례와 같게 맞출 조건', tool: 'kitchen',
        teacher: '"다시 시험할 때 추는 같은 것을 써야 할까요? 걸치는 간격은요?" 앞뒤 결과를 견주려면 바꾸는 것 하나만 달라야 함을 짚는다. 새 다리를 만들며 간격까지 바꾸는 학생에게 "무엇 때문에 달라졌는지 알 수 있을까요?"라고 묻는다.',
        task: '다리를 고치고 다시 시험하는 차례를 놓고, 앞뒤를 견주려면 같게 맞출 것을 골라요.',
        items: [
          { prompt: '무너진 다리를 고쳐 다시 시험하는 차례를 위에서부터 놓아 보세요.', toolOptions: { mode: 'order', cards: [{ id: 'find', text: '처음 무너진 자리를 찾아요' }, { id: 'change', text: '그 자리의 뼈대 모양을 바꿔요' }, { id: 'again', text: '같은 추로 다시 시험해요' }, { id: 'compare', text: '앞뒤 기록을 나란히 견줘요' }] }, hints: ['원인을 찾아야 바꿀 수 있고, 바꾼 뒤에 다시 시험해야 앞뒤를 견줄 수 있어요.'], target: { order: ['find', 'change', 'again', 'compare'] }, difficulty: 0.25 },
          { prompt: '앞뒤 결과를 공정하게 견주려면 같게 맞출 것만 표시해 보세요.', toolOptions: { mode: 'checklist', title: '같게 맞출 것', items: [{ id: 'weight', text: '쓰는 추의 무게' }, { id: 'gap', text: '다리를 걸치는 책 사이 간격' }, { id: 'shape', text: '뼈대의 모양' }, { id: 'paper', text: '쓰는 종이의 종류' }] }, hints: ['바꾸어 시험해 보려는 것 하나만 달라야 해요. 그 밖의 조건은 모두 같게 맞추는 것을 표시해요.'], target: { checklist: ['weight', 'gap', 'paper'] }, difficulty: 0.35 },
          { prompt: '시험 기록을 정리하는 차례를 위에서부터 놓아 보세요.', toolOptions: { mode: 'order', cards: [{ id: 'num', text: '견딘 추 개수를 표에 적어요' }, { id: 'graph', text: '표를 보고 막대그래프를 그려요' }, { id: 'read', text: '그래프에서 가장 튼튼한 뼈대를 찾아요' }, { id: 'why', text: '튼튼했던 까닭을 모양과 이어 말해요' }] }, hints: ['숫자를 먼저 적고 그래프로 나타낸 뒤, 읽고 까닭을 말하는 순서를 생각해요.'], target: { order: ['num', 'graph', 'read', 'why'] }, difficulty: 0.3 },
        ],
      },
      {
        title: '활동 3. 고치기 전과 후의 시험 결과 견주기', tool: 'chart',
        teacher: '"고치기 전과 고친 후를 같은 그래프에 나란히 놓으면 무엇이 보이나요?" 막대의 차이를 읽어 고친 방법이 효과가 있었는지 판단하게 한다. 숫자 차이가 작은데도 크게 좋아졌다고 말하는 학생에게 "얼마나 늘었는지 숫자로 말해 볼까요?"라고 묻는다.',
        task: '고치기 전과 후의 시험 그래프를 읽고 물음에 알맞은 답을 골라요.',
        levels: { easy: { showValues: true }, base: {}, challenge: {} },
        items: [
          { prompt: '고치기 전과 후의 그래프를 읽고 어느 쪽이 더 많이 견뎠는지 골라 보세요.', toolOptions: { type: 'bar', mode: 'read', title: '고치기 전·후', unit: '개', xLabel: '시험', yLabel: '추 개수', data: [['처음 다리', 7], ['대각선을 더한 다리', 13]], question: '더 많이 견딘 것은?', choices: ['처음 다리', '대각선을 더한 다리'] }, target: { pick: 1 }, difficulty: 0.15 },
          { prompt: '세 번 고친 기록에서 가장 효과가 컸던 고침을 골라 보세요.', toolOptions: { type: 'bar', mode: 'read', title: '고칠 때마다 견딘 추', unit: '개', xLabel: '고친 횟수', yLabel: '추 개수', data: [['처음', 6], ['가운데에 막대 더함', 12], ['붙이는 면 넓힘', 13], ['양쪽 기둥 높이 맞춤', 14]], question: '추가 가장 많이 늘어난 것은?', choices: ['가운데에 막대 더함', '붙이는 면 넓힘', '양쪽 기둥 높이 맞춤'] }, target: { pick: 0 }, difficulty: 0.4 },
          { prompt: '그래프를 보고 알맞은 결론을 골라 보세요.', toolOptions: { type: 'bar', mode: 'read', title: '두 모양의 견딘 추', unit: '개', xLabel: '모양', yLabel: '추 개수', data: [['사각 뼈대', 8], ['삼각 뼈대', 8]], question: '두 모양의 견딘 추를 견주면?', choices: ['사각이 더 많이 견뎠어요', '삼각이 더 많이 견뎠어요', '둘이 같게 견뎠어요'] }, target: { pick: 2 }, difficulty: 0.45,
            conclude: '결과가 같으면 같다고 말해요. 기대와 다르더라도 기록을 근거로 말해야 해요.' },
        ],
      },
    ],
    exit: {
      teacher: '"뼈대를 고친 뒤 무엇이 달라졌는지 숫자로 말해 볼까요?" 견딘 추 개수가 얼마에서 얼마로 늘었는지 말하게 한다. 출구 1번에서 차이를 반대로 말한 학생에게 "막대의 길이가 어느 쪽이 더 긴지 손가락으로 짚어 볼까요?"라고 묻는다. 다음 시간에는 디지털 기기 이야기로 넘어가 생활 속 디지털 기술을 찾아본다고 예고한다.',
      items: [
        { type: 'tool', tool: 'chart', options: { type: 'bar', mode: 'read', title: '고치기 전·후', unit: '개', xLabel: '시험', yLabel: '추 개수', data: [['고치기 전', 5], ['고친 뒤', 11]], question: '고친 뒤 추 개수는 어떻게 되었나요?', choices: ['늘었어요', '줄었어요', '같아요'] }, prompt: '그래프를 읽고 알맞은 답을 골라 보세요.', target: { pick: 0 }, difficulty: 0.15 },
        { type: 'choice', prompt: '앞뒤 결과를 견줄 때 같게 맞춰야 하는 것은 무엇인가요?', options: ['바꾸려는 모양', '쓰는 추의 무게', '막대 색깔만'], answer: 1, difficulty: 0.2, explain: '바꾸려는 것 하나만 다르고 추의 무게 같은 조건은 같게 맞춰요.' },
        { type: 'short', prompt: '다리를 고친 방법과 그 결과를 한 문장으로 쓰세요.' },
        { type: 'mood', prompt: '오늘 공부는 어땠나요?' },
      ],
    },
    ws: {
      title: '고치기 전과 후 견주기',
      items: [
        { type: 'table', prompt: '고친 뒤에 추가 늘어난 다리에 ○ 하세요.', columns: ['시험', '견딘 추 개수'], cells: [['처음', '6'], ['고친 뒤', '12']], answer: '고친 뒤' },
        { type: 'choice', prompt: '앞뒤 결과를 견줄 때 알맞은 방법에 ○ 하세요.', options: ['한 번에 한 곳만 바꾸어요', '여러 곳을 한꺼번에 바꿔요', '추를 다르게 써요'], answer: '한 번에 한 곳만 바꾸어요' },
        { type: 'table', prompt: '고친 기록을 쓰세요.', columns: ['무너진 자리', '고친 방법', '견딘 추(전→후)'], cells: [['', '', ''], ['', '', '']] },
        { type: 'short', prompt: '삼각형 뼈대가 튼튼한 까닭을 쓰세요.' },
      ],
      easy: {
        note: '무너진 자리를 찾아 한 곳만 고치고, 같은 추로 다시 시험해 견줘요.',
        items: [
          { type: 'table', prompt: '더 많이 견딘 다리에 ○ 하세요.', columns: ['시험', '견딘 추 개수'], cells: [['처음', '5'], ['고친 뒤', '9']], answer: '고친 뒤' },
          { type: 'choice', prompt: '고칠 때 먼저 할 일에 ○ 하세요.', options: ['무너진 자리를 찾아요', '모두 버려요'], answer: '무너진 자리를 찾아요' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '앞뒤를 견줄 때 같은 ___로 시험해요.', answer: '추' },
          { type: 'short', prompt: '고친 곳을 한 줄 쓰세요.' },
        ],
      },
    },
    diff: ['이어 보기에서 맞게 놓으면 초록 테두리가 생기고, 그래프는 막대 값이 보여요.', '모두 놓고 읽은 뒤 확인을 눌러 스스로 고쳐요.', '같게 맞출 조건 고르기에 함정이 들어가고, 결과가 같은 경우도 읽어요.'],
    notes: '자주 보이는 어려움: ① 무너지면 처음부터 새로 만든다 → 무너진 자리를 먼저 살피게 한다. ② 여러 곳을 한꺼번에 바꾸어 어느 쪽 덕분인지 모른다 → 한 번에 한 곳만 바꾸게 한다. ③ 기대와 다른 결과를 무시한다 → 기록을 근거로 말하게 한다.',
  }));

  // ───────────────────────── 5차시 (core) 생활 속 디지털 기술과 저작 도구 ─────────────────────────
  L.push(lesson(5, '생활 속 디지털 기술을 찾고 담을 내용에 맞는 저작 도구 고르기',
    '생활에서 디지털 기술이 쓰이는 곳과 하는 일을 말하고, 발표 자료에 담을 내용이 글·그림·영상 중 무엇인지에 따라 알맞은 도구를 고를 수 있다.', ['[6실04-02]'], {
    ill: ['a living room and a classroom side by side with tablets, a smart speaker and a digital board each glowing softly, linked by paper ribbons', '디지털 기술은 어디에 있을까?', 1],
    intro: {
      teacher: '"오늘 아침 일어나서 지금까지 화면이 있는 기기를 몇 번 만났나요?" 알람, 전자칠판, 안내 방송 화면 등을 말하게 하고 칠판에 모은다. 시연 단추로 카드가 \'집에서\'·\'학교에서\' 가지에 들어가는 모습을 보여 주고 "이 기술을 이용해 내 생각을 담은 자료를 만드는 것을 저작이라고 해요."라고 말한다. 기능이 많은 도구일수록 언제나 더 좋다고 말하는 학생에게는 "발표에 꼭 필요한 기능은 무엇이었나요?"라고 되묻는다.',
      student: '오늘 아침부터 지금까지 화면이 있는 기기를 만난 곳을 세 군데 떠올려 짝과 말해 봅시다.',
      demo: { tool: 'mindmap', options: { topic: '디지털 기술', slots: ['집에서', '학교에서'], cards: ['스마트폰 알람', '전자칠판'], shuffle: false }, sequence: [{ sort: { '집에서': ['스마트폰 알람'], '학교에서': ['전자칠판'] } }] },
    },
    acts: [
      {
        title: '활동 1. 디지털 기술이 쓰이는 곳 찾아 나누기', tool: 'mindmap',
        teacher: '"이 기기는 어디에서 쓰나요? 그 기기는 사람의 어떤 일을 도와주나요?" 쓰이는 곳과 하는 일을 함께 말하게 한다. 종이로 된 것을 디지털이라 말하는 학생에게 "화면이나 전기 신호로 움직이는 기술인지 살펴볼까요?"라고 묻는다.',
        task: '카드를 읽고 디지털 기술이 쓰이는 곳을 집·학교·길 가지에 나누어 넣거나, 디지털 기술이 쓰인 것만 골라요.',
        levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
        items: [
          { prompt: '디지털 기술이 쓰이는 곳을 집·학교·길 가지에 나누어 보세요.', toolOptions: { topic: '디지털 기술', slots: ['집에서', '학교에서', '길에서'], cards: ['스마트폰으로 알람을 맞춰요', '전자칠판으로 수업해요', '버스 도착 안내 화면을 봐요', '인공지능 스피커에게 날씨를 물어요', '교실 출석을 태블릿으로 불러요', '신호등이 센서로 사람을 알아봐요'] }, hints: ['기기가 놓인 곳이 집인지 학교인지 길인지 떠올려 나누어요.'], target: { sort: { '집에서': ['스마트폰으로 알람을 맞춰요', '인공지능 스피커에게 날씨를 물어요'], '학교에서': ['전자칠판으로 수업해요', '교실 출석을 태블릿으로 불러요'], '길에서': ['버스 도착 안내 화면을 봐요', '신호등이 센서로 사람을 알아봐요'] } }, difficulty: 0.2 },
          { prompt: '디지털 기술이 쓰인 것만 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '디지털 기술', cards: ['태블릿으로 그림 그리기', '종이 지도 펴 보기', '화면에 안내가 나오는 무인 주문기', '손으로 쓴 쪽지 전하기'] }, hints: ['화면이나 전기 신호로 움직이며 정보를 처리하는 도구만 골라요. 손과 종이로만 하는 것은 빼요.'], target: { pick: ['태블릿으로 그림 그리기', '화면에 안내가 나오는 무인 주문기'] }, difficulty: 0.15 },
          { prompt: '디지털 기술마다 하는 일을 한 장씩 이어 보세요.', toolOptions: { mode: 'match', topic: '하는 일', slots: [{ id: 'nav', label: '길 안내 앱' }, { id: 'pay', label: '무인 결제기' }, { id: 'trans', label: '번역 앱' }], cards: ['가는 길과 시간을 알려 줘요', '값을 계산하고 결제를 받아요', '다른 나라 말을 우리말로 바꿔 줘요', '종이를 반으로 접어 줘요'] }, hints: ['기술의 이름이 무엇을 말해 주는지 읽고 그 기술이 사람의 어떤 일을 대신하는지 이어요.'], target: { match: { nav: '가는 길과 시간을 알려 줘요', pay: '값을 계산하고 결제를 받아요', trans: '다른 나라 말을 우리말로 바꿔 줘요' } }, difficulty: 0.25,
            predict: { q: '디지털 기술은 학교 안에서만 쓰일까요?', options: ['학교에서만 써요', '집과 길에서도 써요', '잘 모르겠어요'], answer: 1 },
            conclude: '디지털 기술은 집·학교·길 어디서나 쓰이며 사람이 하던 일을 도와줘요.' },
        ],
      },
      {
        title: '활동 2. 담을 내용에 맞는 저작 도구 고르기', tool: 'mindmap',
        teacher: '"발표 자료에 사진을 크게 보여 주고 싶다면 어떤 도구가 알맞을까요? 글을 길게 쓸 때는요?" 담을 내용이 글인지 그림인지 영상인지 먼저 정하게 한다. 도구 이름만 보고 고르는 학생에게 "그 도구로 무엇을 만들 수 있는지 떠올려 볼까요?"라고 묻는다.',
        task: '도구 이름을 읽고 글·그림·영상 중 무엇을 담는 데 알맞은지에 따라 나누어요.',
        levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
        items: [
          { prompt: '저작 도구를 글·그림·영상 가지에 나누어 보세요.', toolOptions: { topic: '저작 도구', slots: ['글', '그림', '영상'], cards: ['문서 편집기', '그림 편집기', '동영상 편집기', '글자 입력기', '사진 보정 앱', '화면 녹화 앱'] }, hints: ['도구가 글자를 다루는지, 그림을 그리거나 고치는지, 움직이는 장면을 만드는지 떠올려 나누어요.'], target: { sort: { 글: ['문서 편집기', '글자 입력기'], 그림: ['그림 편집기', '사진 보정 앱'], 영상: ['동영상 편집기', '화면 녹화 앱'] } }, difficulty: 0.25 },
          { prompt: '발표 장면마다 알맞은 도구를 한 장씩 이어 보세요.', toolOptions: { mode: 'match', topic: '장면과 도구', slots: [{ id: 'report', label: '조사한 내용을 글로 정리하기' }, { id: 'poster', label: '그림과 글자로 포스터 만들기' }, { id: 'clip', label: '실험 과정을 움직이는 장면으로 보여 주기' }], cards: ['문서 편집기', '그림 편집기', '동영상 편집기', '계산기'] }, hints: ['장면에서 담으려는 것이 글인지 그림인지 움직이는 장면인지 보고 알맞은 도구를 이어요.'], target: { match: { report: '문서 편집기', poster: '그림 편집기', clip: '동영상 편집기' } }, difficulty: 0.3 },
          { prompt: '글자만 담을 때 알맞지 않은 도구를 골라 보세요.', toolOptions: { mode: 'pick', topic: '알맞지 않은 도구', cards: ['문서 편집기', '글자 입력기', '동영상 편집기', '사진 보정 앱'] }, hints: ['글자를 입력하고 다듬는 데 쓰는 도구와 그렇지 않은 도구를 가려 알맞지 않은 쪽을 골라요.'], target: { pick: ['동영상 편집기', '사진 보정 앱'] }, difficulty: 0.35 },
        ],
      },
      {
        title: '활동 3. 도구를 고를 때 따질 것 가려내기', tool: 'mindmap',
        teacher: '"기능이 가장 많은 도구가 항상 가장 좋은 도구일까요?" 필요한 기능이 있는지, 쓰기 쉬운지, 학교 기기에서 되는지를 따지게 한다. 이름이 유명한 도구만 고르는 학생에게 "우리 발표에 필요한 기능이 들어 있나요?"라고 묻는다.',
        task: '도구를 고를 때 따질 것과 따지지 않아도 되는 것을 나누어요.',
        levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
        items: [
          { prompt: '도구를 고를 때 따질 것만 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '따질 것', cards: ['내 발표에 필요한 기능이 있는지', '처음 써도 쓰기 쉬운지', '이름이 가장 유명한지', '학교 기기에서 되는지'] }, hints: ['발표를 만드는 데 실제로 도움이 되는 점인지, 이름만 유명한 것인지 가려 골라요.'], target: { pick: ['내 발표에 필요한 기능이 있는지', '처음 써도 쓰기 쉬운지', '학교 기기에서 되는지'] }, difficulty: 0.25 },
          { prompt: '필요한 기능과 필요 없는 기능을 나누어 보세요.', toolOptions: { topic: '포스터 만들기', slots: ['필요한 기능', '필요 없는 기능'], cards: ['글자 크기와 색을 바꾸는 기능', '그림을 자르고 옮기는 기능', '소리 파일을 편집하는 기능', '3차원 모형을 만드는 기능'] }, hints: ['포스터에는 글자와 그림이 들어가요. 그것을 다루는 기능과 그렇지 않은 기능으로 나누어요.'], target: { sort: { '필요한 기능': ['글자 크기와 색을 바꾸는 기능', '그림을 자르고 옮기는 기능'], '필요 없는 기능': ['소리 파일을 편집하는 기능', '3차원 모형을 만드는 기능'] } }, difficulty: 0.3 },
          { prompt: '도구를 고르는 알맞은 생각만 골라 보세요.', toolOptions: { mode: 'pick', topic: '알맞은 생각', cards: ['목적에 맞는 도구가 가장 좋은 도구예요', '기능이 많을수록 언제나 좋아요', '담을 내용을 먼저 정하고 골라요', '친구가 쓰니까 똑같이 써요'] }, hints: ['무엇을 담을지 먼저 정하고 목적에 맞게 고르는 생각만 골라요.'], target: { pick: ['목적에 맞는 도구가 가장 좋은 도구예요', '담을 내용을 먼저 정하고 골라요'] }, difficulty: 0.35 },
        ],
      },
    ],
    exit: {
      teacher: '"오늘 도구를 고를 때 가장 먼저 따질 것은 무엇이었나요?" 담을 내용을 정하는 것이 먼저라는 말이 나오는지 듣는다. 출구 2번에서 기능이 많은 것을 고른 학생에게 "그 기능을 이번 발표에서 모두 쓰나요?"라고 되묻는다. 다음 시간에는 도구로 실제 발표 자료를 만들어 화면을 보기 좋게 다듬는다고 예고한다.',
      items: [
        { type: 'tool', tool: 'mindmap', options: { topic: '저작 도구', slots: ['글', '영상'], cards: ['문서 편집기', '동영상 편집기'] }, prompt: '도구를 알맞은 가지에 넣어 보세요.', target: { sort: { 글: ['문서 편집기'], 영상: ['동영상 편집기'] } }, difficulty: 0.1 },
        { type: 'choice', prompt: '발표 자료 도구를 고를 때 가장 먼저 할 일은 무엇인가요?', options: ['가장 유명한 도구 찾기', '담을 내용을 정하기', '기능이 많은 도구 고르기'], answer: 1, difficulty: 0.15, explain: '담을 내용이 글인지 그림인지 영상인지 정해야 알맞은 도구를 고를 수 있어요.' },
        { type: 'short', prompt: '내가 만들 발표 자료에 알맞은 도구 하나와 그 까닭을 쓰세요.' },
        { type: 'mood', prompt: '오늘 공부는 어땠나요?' },
      ],
    },
    ws: {
      title: '디지털 기술과 저작 도구',
      items: [
        { type: 'figure', wide: true, prompt: '가지마다 쓰이는 디지털 기술을 한 가지씩 써 넣으세요.', tool: 'mindmap', figures: [{ options: { topic: '디지털 기술', printCards: false, slots: ['집', '학교', '길'], cards: ['보기'] }, caption: '' }], answer: '예: 집 — 스마트폰 알람 / 학교 — 전자칠판 / 길 — 버스 안내 화면' },
        { type: 'choice', prompt: '조사한 내용을 글로 정리할 때 알맞은 도구에 ○ 하세요.', options: ['문서 편집기', '동영상 편집기', '계산기'], answer: '문서 편집기' },
        { type: 'table', prompt: '담을 내용에 알맞은 도구를 쓰세요.', columns: ['담을 내용', '알맞은 도구', '까닭'], cells: [['실험 과정 영상', '', ''], ['조사 보고 글', '', ''], ['', '', '']] },
        { type: 'short', prompt: '내가 오늘 만난 디지털 기술 하나와 그 기술이 대신해 준 일을 쓰세요.' },
      ],
      easy: {
        note: '담을 내용을 먼저 정하고 그에 알맞은 도구를 골라요.',
        items: [
          { type: 'figure', wide: true, prompt: '가지에 쓰이는 디지털 기술을 한 가지씩 쓰세요.', tool: 'mindmap', figures: [{ options: { topic: '디지털 기술', printCards: false, slots: ['집', '학교'], cards: ['보기'] }, caption: '' }], answer: '예: 집 — 스마트폰 / 학교 — 전자칠판' },
          { type: 'choice', prompt: '글을 쓸 때 알맞은 도구에 ○ 하세요.', options: ['문서 편집기', '동영상 편집기'], answer: '문서 편집기' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '도구는 담을 ___에 맞게 골라요.', answer: '내용' },
          { type: 'short', prompt: '오늘 만난 디지털 기술 하나를 쓰세요.' },
        ],
      },
    },
    diff: ['나누기에서 맞게 놓으면 초록 테두리가 생기고, 틀리면 까닭이 나와요.', '모두 놓은 뒤 확인을 눌러 스스로 고쳐요.', '함정 카드가 더 나오고, 도구를 고르는 생각을 가려내요.'],
    notes: '자주 보이는 어려움: ① 기능이 많은 도구가 언제나 더 좋다고 여긴다 → 담을 내용에 필요한 기능이 있는지 따지게 한다. ② 종이로 만든 것도 디지털이라고 말한다 → 화면이나 전기 신호로 움직이는지 묻는다. ③ 도구 이름만 외우고 쓰임을 모른다 → 그 도구로 만들 수 있는 것을 말하게 한다.',
  }));

  // ───────────────────────── 6차시 (core) 발표 자료 만들고 화면 다듬기 ─────────────────────────
  L.push(lesson(6, '발표 자료를 만드는 차례를 정하고 보기 좋은 화면으로 다듬기',
    '저작 도구로 발표 자료를 만드는 차례를 정하고, 글자 크기·줄 수·그림 크기를 점검해 보기 쉬운 화면으로 다듬을 수 있다.', ['[6실04-02]'], {
    ill: ['a child arranging large text and a single colorful picture on a big tablet screen while a checklist with ticks hangs beside it', '한눈에 보이는 화면', 0],
    intro: {
      teacher: '"뒷자리 친구가 읽을 수 있는 화면은 어떤 모습일까요?" 글자가 너무 작거나 너무 많은 화면을 떠올려 보게 한다. 시연 단추로 발표 자료 만드는 순서 카드가 놓이는 모습을 보여 주고 "화면 한 장에는 말하고 싶은 것 하나만 담아요."라고 말한다. 글자와 그림을 많이 넣을수록 잘 만든 자료라고 여기는 학생에게는 "발표를 듣는 친구가 한 번에 읽을 수 있는 양인가요?"라고 묻는다.',
      student: '뒷자리 친구가 읽을 수 있는 발표 화면은 어떤 모습일지 짝과 말해 봅시다.',
      demo: { tool: 'kitchen', options: { mode: 'order', cards: [{ id: 'topic', text: '발표 주제를 정해요' }, { id: 'make', text: '화면에 내용을 담아요' }], shuffle: false }, sequence: [{ order: ['topic', 'make'] }] },
    },
    acts: [
      {
        title: '활동 1. 발표 자료를 만드는 차례 놓기', tool: 'kitchen',
        teacher: '"내용을 모으기 전에 화면부터 꾸미면 어떻게 될까요?" 순서가 바뀌면 다시 해야 하는 일이 생김을 짚는다. 만들기 전에 청중이 누구인지 생각하지 않는 학생에게 "누가 이 자료를 볼까요? 그 사람이 읽기 쉬울까요?"라고 묻는다.',
        task: '카드를 읽고 발표 자료를 만드는 차례를 위에서부터 놓아요.',
        levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
        items: [
          { prompt: '발표 자료를 만드는 차례를 위에서부터 놓아 보세요.', toolOptions: { mode: 'order', cards: [{ id: 'topic', text: '발표 주제와 들을 사람을 정해요' }, { id: 'collect', text: '담을 글과 그림을 모아요' }, { id: 'layout', text: '화면마다 담을 내용을 나누어요' }, { id: 'make', text: '도구로 화면을 만들어요' }, { id: 'save', text: '완성한 자료를 저장해요' }] }, hints: ['무엇을 누구에게 말할지 정한 뒤에 모으고, 나누어 만든 다음 저장하는 순서를 생각해요.'], target: { order: ['topic', 'collect', 'layout', 'make', 'save'] }, difficulty: 0.25 },
          { prompt: '그림과 글자를 한 화면에 알맞게 넣는 차례를 놓아 보세요.', toolOptions: { mode: 'order', cards: [{ id: 'title', text: '화면 위쪽에 제목을 써요' }, { id: 'pic', text: '가운데에 그림 한 장을 놓아요' }, { id: 'line', text: '그림 아래에 한 줄 설명을 써요' }, { id: 'read', text: '멀리서도 읽히는지 살펴봐요' }] }, hints: ['위에서 아래로 눈이 움직이는 순서와 마지막에 점검하는 순서를 떠올려요.'], target: { order: ['title', 'pic', 'line', 'read'] }, difficulty: 0.3 },
          { prompt: '자료를 저장하고 나누는 차례를 놓아 보세요.', toolOptions: { mode: 'order', cards: [{ id: 'name', text: '알아볼 수 있는 파일 이름을 지어요' }, { id: 'save', text: '정해진 폴더에 저장해요' }, { id: 'open', text: '다시 열어서 잘 열리는지 확인해요' }, { id: 'copy', text: '필요하면 복사본을 한 부 더 만들어요' }] }, hints: ['이름을 정하고 저장한 뒤 다시 열어서 확인하고 복사본을 만드는 순서를 생각해요.'], target: { order: ['name', 'save', 'open', 'copy'] }, difficulty: 0.35 },
        ],
      },
      {
        title: '활동 2. 화면 구성을 점검표로 확인하기', tool: 'kitchen',
        teacher: '"이 화면은 한 줄에 글자가 몇 개나 있나요? 가장 중요한 말이 가장 크게 보이나요?" 점검표에 하나씩 표시하며 고칠 곳을 찾게 한다. 모든 항목에 표시하려는 학생에게 "이 화면이 정말 그렇게 되어 있는지 눈으로 다시 확인할까요?"라고 묻는다.',
        task: '화면 점검표에서 지킨 것만 표시해요. 지키지 않은 것은 고칠 곳이에요.',
        items: [
          { prompt: '보기 쉬운 화면의 점검표에서 알맞은 것만 표시해 보세요.', toolOptions: { mode: 'checklist', title: '보기 쉬운 화면', items: [{ id: 'size', text: '글자가 멀리서도 보일 만큼 커요' }, { id: 'lines', text: '화면 한 장에 글이 세 줄 이하예요' }, { id: 'fill', text: '화면 가득 글자를 빽빽하게 넣어요' }, { id: 'pic', text: '그림은 이야기와 관련 있는 것만 써요' }] }, hints: ['듣는 사람이 한눈에 읽을 수 있는 화면의 특징만 표시해요. 빽빽함과 관계없는 그림은 점검표에서 빠져요.'], target: { checklist: ['size', 'lines', 'pic'] }, difficulty: 0.25 },
          { prompt: '색과 글자를 정할 때 알맞은 것만 표시해 보세요.', toolOptions: { mode: 'checklist', title: '색과 글자', items: [{ id: 'contrast', text: '글자 색과 바탕 색이 뚜렷이 달라요' }, { id: 'font', text: '글꼴은 두세 가지 안으로 써요' }, { id: 'rainbow', text: '글자마다 다른 색으로 꾸며요' }, { id: 'key', text: '중요한 낱말만 굵게 해요' }] }, hints: ['읽는 사람이 쉽게 알아보도록 돕는 것만 표시해요. 눈이 어지러워지는 꾸밈은 빼요.'], target: { checklist: ['contrast', 'font', 'key'] }, difficulty: 0.3 },
          { prompt: '화면에 쓰는 그림의 저작권을 지키는 행동만 표시해 보세요.', toolOptions: { mode: 'checklist', title: '그림 쓰는 법', items: [{ id: 'own', text: '내가 직접 그리거나 찍은 그림을 써요' }, { id: 'free', text: '쓰도록 허락된 그림이라고 적힌 것을 써요' }, { id: 'copy', text: '인터넷에서 마음에 드는 그림을 그냥 가져와요' }, { id: 'src', text: '가져온 그림은 출처를 적어요' }] }, hints: ['내 것이거나 쓰도록 허락된 것인지, 출처를 밝히는지를 따져 지킨 행동만 표시해요.'], target: { checklist: ['own', 'free', 'src'] }, difficulty: 0.4 },
        ],
      },
      {
        title: '활동 3. 보기 쉬운 화면과 어려운 화면 가려내기', tool: 'mindmap',
        teacher: '"이 화면 설명을 읽고, 보기 쉬운 화면인지 어려운 화면인지 말해 볼까요?" 이유를 \'글자 수, 글자 크기, 그림 수\'로 말하게 한다. 많이 넣을수록 좋다는 오개념이 남은 학생에게 "듣는 친구가 한눈에 읽을 수 있는 양인지 세어 볼까요?"라고 묻는다.',
        task: '화면 설명 카드를 읽고 보기 쉬운 화면과 보기 어려운 화면으로 나누어요.',
        levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
        items: [
          { prompt: '화면 설명을 보기 쉬운 것과 어려운 것으로 나누어 보세요.', toolOptions: { topic: '화면 설명', slots: ['보기 쉬워요', '보기 어려워요'], cards: ['큰 제목과 그림 한 장, 한 줄 설명', '작은 글자가 열 줄 가득 있어요', '글자 색과 바탕이 거의 같아요', '핵심 낱말만 크게 써 있어요'] }, hints: ['듣는 사람이 한눈에 읽고 이해할 수 있는지, 읽다가 지치는지 따져 나누어요.'], target: { sort: { '보기 쉬워요': ['큰 제목과 그림 한 장, 한 줄 설명', '핵심 낱말만 크게 써 있어요'], '보기 어려워요': ['작은 글자가 열 줄 가득 있어요', '글자 색과 바탕이 거의 같아요'] } }, difficulty: 0.25 },
          { prompt: '화면을 고치는 방법과 고칠 문제를 한 장씩 이어 보세요.', toolOptions: { mode: 'match', topic: '문제와 고치기', slots: [{ id: 'small', label: '글자가 너무 작아요' }, { id: 'many', label: '한 화면에 그림이 열 장 있어요' }, { id: 'same', label: '글자와 바탕 색이 비슷해요' }], cards: ['글자 크기를 키워요', '그림을 한두 장만 남기고 화면을 나눠요', '글자 색과 바탕 색을 뚜렷이 다르게 바꿔요', '글자를 더 많이 넣어요'] }, hints: ['문제가 읽기 어렵게 만드는 까닭을 찾아 그것을 줄이거나 바꾸는 방법을 이어요.'], target: { match: { small: '글자 크기를 키워요', many: '그림을 한두 장만 남기고 화면을 나눠요', same: '글자 색과 바탕 색을 뚜렷이 다르게 바꿔요' } }, difficulty: 0.35 },
          { prompt: '발표 자료를 잘 만든 것이라고 할 수 있는 알맞은 말만 골라 보세요.', toolOptions: { mode: 'pick', topic: '알맞은 말', cards: ['듣는 사람이 한눈에 이해해요', '내용을 많이 넣을수록 잘 만든 거예요', '말로 설명하는 내용과 화면이 이어져요', '그림이 많으면 늘 보기 좋아요'] }, hints: ['듣는 사람이 쉽게 이해하고 말과 화면이 이어지는지를 기준으로 알맞은 말을 골라요.'], target: { pick: ['듣는 사람이 한눈에 이해해요', '말로 설명하는 내용과 화면이 이어져요'] }, difficulty: 0.4,
            predict: { q: '글자와 그림을 많이 넣을수록 잘 만든 화면일까요?', options: ['많을수록 좋아요', '알맞게 담아야 해요', '잘 모르겠어요'], answer: 1 },
            conclude: '듣는 사람이 한눈에 읽을 만큼만 담아야 잘 만든 화면이에요.' },
        ],
      },
    ],
    exit: {
      teacher: '"오늘 화면을 점검할 때 가장 먼저 확인한 것은 무엇인가요?" 글자 크기나 한 화면에 담은 양을 말하는지 듣는다. 출구 2번에서 \'빽빽하게\'를 고른 학생에게 "뒷자리 친구가 읽을 수 있을까요?"라고 되묻는다. 다음 시간에는 만든 자료를 모둠에게 시험 삼아 보여 주고 의견을 받아 고친다고 예고한다.',
      items: [
        { type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title: '보기 쉬운 화면', items: [{ id: 'big', text: '글자가 커요' }, { id: 'full', text: '글자를 가득 넣어요' }, { id: 'one', text: '한 화면에 하나씩 말해요' }] }, prompt: '보기 쉬운 화면의 특징만 표시해 보세요.', target: { checklist: ['big', 'one'] }, difficulty: 0.15 },
        { type: 'choice', prompt: '발표 자료를 만들 때 알맞은 순서는 무엇인가요?', options: ['꾸미기 → 주제 정하기 → 내용 모으기', '주제 정하기 → 내용 모으기 → 화면 만들기', '저장하기 → 주제 정하기 → 만들기'], answer: 1, difficulty: 0.2, explain: '주제를 정하고 내용을 모은 뒤 화면을 만들어요.' },
        { type: 'short', prompt: '내 화면에서 고친 곳 한 가지와 고친 까닭을 쓰세요.' },
        { type: 'mood', prompt: '오늘 공부는 어땠나요?' },
      ],
    },
    ws: {
      title: '발표 화면 점검',
      items: [
        { type: 'figure', wide: true, prompt: '가지마다 한 화면에 담으면 좋은 것을 하나씩 써 넣으세요.', tool: 'mindmap', figures: [{ options: { topic: '보기 쉬운 화면', printCards: false, slots: ['글자', '그림', '색'], cards: ['보기'] }, caption: '' }], answer: '예: 글자 — 큼직하게 세 줄 이하 / 그림 — 한두 장 / 색 — 바탕과 뚜렷이 다르게' },
        { type: 'choice', prompt: '보기 쉬운 화면에 ○ 하세요.', options: ['큰 제목과 그림 한 장', '작은 글자가 가득한 화면', '글자 색이 바탕과 거의 같은 화면'], answer: '큰 제목과 그림 한 장' },
        { type: 'table', prompt: '내 발표 화면의 점검 결과를 쓰세요.', columns: ['점검 내용', '지켰어요(○)', '고칠 점'], cells: [['글자가 멀리서도 보여요', '', ''], ['한 화면에 글이 세 줄 이하예요', '', ''], ['', '', '']] },
        { type: 'short', prompt: '발표 화면에 그림을 쓸 때 지켜야 할 점을 한 가지 쓰세요.' },
      ],
      easy: {
        note: '화면 한 장에는 말하고 싶은 것 하나만 담고, 글자는 크게 써요.',
        items: [
          { type: 'figure', wide: true, prompt: '가지마다 지켜야 할 것을 하나씩 쓰세요.', tool: 'mindmap', figures: [{ options: { topic: '보기 쉬운 화면', printCards: false, slots: ['글자', '그림'], cards: ['보기'] }, caption: '' }], answer: '예: 글자 — 크게 / 그림 — 한두 장' },
          { type: 'choice', prompt: '보기 쉬운 화면에 ○ 하세요.', options: ['큰 글자와 그림 한 장', '글자가 가득한 화면'], answer: '큰 글자와 그림 한 장' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '화면 한 장에는 말하고 싶은 것 ___ 가지만 담아요.', answer: '한' },
          { type: 'short', prompt: '내 화면에서 고칠 곳을 쓰세요.' },
        ],
      },
    },
    diff: ['차례 놓기와 점검표에서 맞게 고르면 초록 테두리가 생기고, 틀리면 까닭이 나와요.', '모두 놓은 뒤 확인을 눌러 스스로 고쳐요.', '점검표에 함정 항목이 더 나오고, 화면을 고치는 방법을 문제와 이어요.'],
    notes: '자주 보이는 어려움: ① 글자와 그림을 많이 넣을수록 잘 만든 자료라고 여긴다 → 듣는 사람이 한눈에 읽을 수 있는 양을 세어 보게 한다. ② 인터넷 그림을 그냥 가져온다 → 쓰도록 허락된 그림인지와 출처를 확인하게 한다. ③ 점검표에 모든 항목을 표시한다 → 화면을 다시 보며 하나씩 확인하게 한다.',
  }));

  // ───────────────────────── 7차시 (practice) 시험 발표와 의견 반영 ─────────────────────────
  L.push(lesson(7, '모둠에게 시험 삼아 보여 주고 받은 의견으로 자료 고치기',
    '만든 발표 자료를 모둠에게 시험 삼아 보여 주는 차례를 알고, 받은 의견을 고칠 곳과 이어 반영할 수 있다.', ['[6실04-02]'], {
    ill: ['four children in a small group watching a screen where a paper presenter shows a slide, with speech-bubble sticky notes floating above the screen', '시험 삼아 보여 주기', 2],
    intro: {
      teacher: '"발표 날 처음 보여 주는 것과 미리 한 번 보여 주고 고치는 것 중 어느 쪽이 더 안심될까요?" 실수를 미리 찾을 수 있다는 점을 말하게 한다. 시연 단추로 의견 카드가 고칠 곳 카드와 이어지는 모습을 보여 주고 "의견은 자료를 더 좋게 만드는 재료예요."라고 말한다. 의견을 받으면 내 자료가 틀렸다는 뜻이라고 여기는 학생에게는 "고칠 곳을 알려 준 친구는 자료가 잘되기를 바란 거예요. 어떻게 답하면 좋을까요?"라고 묻는다.',
      student: '발표하기 전에 한 번 미리 보여 주고 고치는 것이 왜 좋은지 짝과 말해 봅시다.',
      demo: { tool: 'mindmap', options: { mode: 'match', topic: '의견과 고칠 곳', slots: [{ id: 'small', label: '글자가 작아요' }], cards: ['글자 크기를 키워요', '그림을 늘려요'], shuffle: false }, sequence: [{ match: { small: '글자 크기를 키워요' } }] },
    },
    acts: [
      {
        title: '활동 1. 시험 발표를 하고 의견을 받는 차례 놓기', tool: 'kitchen',
        teacher: '"의견을 받기 전에 먼저 해야 할 일은 무엇일까요?" 소리 내어 발표해 보고, 친구가 들은 뒤 의견을 주는 순서를 말하게 한다. 의견을 듣는 도중 변명하는 학생에게 "먼저 끝까지 듣고 적어 둔 뒤에 어떻게 고칠지 정해 볼까요?"라고 묻는다.',
        task: '카드를 읽고 시험 발표를 하고 의견을 받아 고치는 차례를 위에서부터 놓아요.',
        levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
        items: [
          { prompt: '시험 삼아 보여 주고 고치는 차례를 위에서부터 놓아 보세요.', toolOptions: { mode: 'order', cards: [{ id: 'show', text: '모둠에게 자료를 보여 주며 발표해요' }, { id: 'listen', text: '친구들의 의견을 끝까지 들어요' }, { id: 'note', text: '받은 의견을 적어 두어요' }, { id: 'fix', text: '고칠 곳을 정해 자료를 고쳐요' }] }, hints: ['먼저 보여 주고 들은 뒤 적어 두고 고치는 순서를 생각해요. 고치기 전에 의견을 모으는 일이 필요해요.'], target: { order: ['show', 'listen', 'note', 'fix'] }, difficulty: 0.2 },
          { prompt: '의견을 주는 사람이 지킬 차례를 위에서부터 놓아 보세요.', toolOptions: { mode: 'order', cards: [{ id: 'good', text: '잘한 점을 먼저 말해요' }, { id: 'tip', text: '고치면 좋을 점을 이유와 함께 말해요' }, { id: 'ask', text: '발표한 친구의 생각을 물어봐요' }, { id: 'thanks', text: '끝으로 고맙다고 말해요' }] }, hints: ['듣는 사람의 마음을 생각해 잘한 점으로 시작하고, 고칠 점은 이유와 함께 말하는 순서를 떠올려요.'], target: { order: ['good', 'tip', 'ask', 'thanks'] }, difficulty: 0.3 },
          { prompt: '의견을 받은 뒤 고치는 순서를 위에서부터 놓아 보세요.', toolOptions: { mode: 'order', cards: [{ id: 'sort', text: '의견을 쉬운 것부터 어려운 것까지 나누어요' }, { id: 'pick', text: '이번에 고칠 것을 정해요' }, { id: 'edit', text: '정한 것을 자료에 고쳐요' }, { id: 'tell', text: '고친 곳을 의견 준 친구에게 알려요' }] }, hints: ['의견이 많으면 먼저 나누고 정한 뒤에 고치는 순서를 생각해요. 고친 뒤에는 알려 주어요.'], target: { order: ['sort', 'pick', 'edit', 'tell'] }, difficulty: 0.35 },
        ],
      },
      {
        title: '활동 2. 의견과 고칠 곳 짝 짓기', tool: 'mindmap',
        teacher: '"\'글이 너무 많아요\'라는 의견은 어디를 고치라는 뜻일까요?" 의견을 고칠 곳으로 풀어 읽게 한다. 의견을 그대로 받아들이기만 하는 학생에게 "그 의견이 우리 발표의 목적에 맞는지도 생각해 볼까요?"라고 묻는다.',
        task: '받은 의견마다 알맞은 고칠 곳을 한 장씩 이어요.',
        items: [
          { prompt: '받은 의견마다 고칠 곳을 한 장씩 이어 보세요.', toolOptions: { mode: 'match', topic: '의견과 고칠 곳', slots: [{ id: 'much', label: '글이 너무 많아요' }, { id: 'small', label: '그림이 작아서 안 보여요' }, { id: 'order', label: '이야기 차례를 모르겠어요' }], cards: ['화면을 나누어 글을 줄여요', '그림을 크게 키워요', '화면 순서를 다시 정하고 번호를 붙여요', '글자 색만 바꿔요'] }, hints: ['의견이 불편하다고 한 점을 풀어 읽고 그 점을 바로 해결하는 방법을 이어요.'], target: { match: { much: '화면을 나누어 글을 줄여요', small: '그림을 크게 키워요', order: '화면 순서를 다시 정하고 번호를 붙여요' } }, difficulty: 0.25 },
          { prompt: '자료를 고치는 데 도움이 되는 의견만 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '도움이 되는 의견', cards: ['세 번째 화면의 글자가 작아요', '그냥 별로예요', '그림 출처를 적으면 좋겠어요', '내가 더 잘 만들 수 있어요'] }, hints: ['어느 부분을 어떻게 고치면 좋을지가 들어 있는 의견만 골라요. 이유가 없는 말은 빼요.'], target: { pick: ['세 번째 화면의 글자가 작아요', '그림 출처를 적으면 좋겠어요'] }, difficulty: 0.3 },
          { prompt: '받은 의견을 반영한 결과를 알맞게 나누어 보세요.', toolOptions: { topic: '의견 반영', slots: ['바로 고쳐요', '더 생각해요'], cards: ['글자 크기를 키워요', '발표 주제를 완전히 바꿔요', '그림 출처를 적어요', '내 생각과 다른 의견은 모두 무시해요'] }, hints: ['작고 분명하게 고칠 수 있는 의견은 바로 고치고, 바꾸는 폭이 크거나 마음에 걸리는 의견은 더 생각해요.'], target: { sort: { '바로 고쳐요': ['글자 크기를 키워요', '그림 출처를 적어요'], '더 생각해요': ['발표 주제를 완전히 바꿔요', '내 생각과 다른 의견은 모두 무시해요'] } }, difficulty: 0.4 },
        ],
      },
      {
        title: '활동 3. 고친 자료를 점검표로 다시 확인하기', tool: 'kitchen',
        teacher: '"고친 뒤에는 처음 의견을 다시 보며 정말 해결되었는지 확인할까요?" 점검표로 하나씩 확인하게 한다. 고친 곳이 새 문제를 만들지 않았는지도 확인하게 한다. 한 군데 고친 뒤 확인 없이 끝내는 학생에게 "고친 자료를 다시 한번 보여 주면 어떨까요?"라고 묻는다.',
        task: '점검표에서 고친 뒤에 지킨 것만 표시해요. 못 지킨 것은 다시 고칠 곳이에요.',
        items: [
          { prompt: '의견을 반영한 뒤 점검할 것에서 알맞은 것만 표시해 보세요.', toolOptions: { mode: 'checklist', title: '고친 뒤 점검', items: [{ id: 'asked', text: '의견에서 말한 곳이 정말 달라졌어요' }, { id: 'new', text: '새로 이상해진 곳은 없는지 살펴요' }, { id: 'ignore', text: '고쳤으니 다시 보지 않아요' }, { id: 'tell', text: '고친 점을 모둠에게 알려요' }] }, hints: ['의견이 해결되었는지, 새 문제가 없는지, 알려 주는지 확인하는 항목만 표시해요.'], target: { checklist: ['asked', 'new', 'tell'] }, difficulty: 0.3 },
          { prompt: '의견을 대하는 태도로 알맞은 것만 표시해 보세요.', toolOptions: { mode: 'checklist', title: '의견을 대하는 태도', items: [{ id: 'listen', text: '끝까지 듣고 고맙다고 말해요' }, { id: 'argue', text: '내 자료가 맞다며 반박해요' }, { id: 'ask', text: '모르는 의견은 어떤 뜻인지 물어요' }, { id: 'reflect', text: '고칠 만한 의견을 골라 반영해요' }] }, hints: ['의견을 준 사람을 존중하고 필요한 의견을 골라 쓰려는 태도만 표시해요.'], target: { checklist: ['listen', 'ask', 'reflect'] }, difficulty: 0.35 },
          { prompt: '고친 자료를 다시 보여 주기 전 점검할 것을 차례로 놓아 보세요.', toolOptions: { mode: 'order', cards: [{ id: 'list', text: '처음 받은 의견 목록을 펴 놓아요' }, { id: 'check', text: '의견마다 고쳐졌는지 하나씩 확인해요' }, { id: 'new', text: '고치다가 생긴 새 문제를 찾아요' }, { id: 'show', text: '모둠에게 다시 보여 주어요' }] }, hints: ['처음 의견을 꺼내 놓고 하나씩 확인한 뒤 새 문제를 찾고 다시 보여 주는 순서를 생각해요.'], target: { order: ['list', 'check', 'new', 'show'] }, difficulty: 0.4,
            conclude: '고친 뒤에는 처음 의견을 다시 보며 해결됐는지, 새 문제가 없는지 확인해야 해요.' },
        ],
      },
    ],
    exit: {
      teacher: '"오늘 받은 의견 중 하나를 골라 어떻게 고칠지 말해 볼까요?" 의견과 고칠 곳이 이어지는지 듣는다. 출구 2번에서 \'반박해요\'를 고른 학생에게 "의견을 준 친구의 마음은 어떨까요?"라고 되묻는다. 다음 시간에는 자료를 온라인에 올릴 때 지켜야 할 것을 살펴본다고 예고한다.',
      items: [
        { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '의견과 고칠 곳', slots: [{ id: 'dark', label: '글자가 안 보여요' }], cards: ['글자 색을 바꿔요', '그림을 지워요'] }, prompt: '의견에 알맞은 고칠 곳을 이어 보세요.', target: { match: { dark: '글자 색을 바꿔요' } }, difficulty: 0.15 },
        { type: 'choice', prompt: '의견을 받은 뒤 가장 알맞은 행동은 무엇인가요?', options: ['모든 의견을 무시해요', '의견을 듣고 고칠 곳을 골라 고쳐요', '내 생각이 맞다고 말해요'], answer: 1, difficulty: 0.2, explain: '의견은 자료를 좋게 하는 재료예요. 고칠 곳을 골라 고쳐요.' },
        { type: 'short', prompt: '내가 받은 의견 하나와 고친 방법을 쓰세요.' },
        { type: 'mood', prompt: '오늘 공부는 어땠나요?' },
      ],
    },
    ws: {
      title: '의견 받아 고치기',
      items: [
        { type: 'figure', wide: true, prompt: '가지마다 받은 의견을 한 가지씩 써 넣으세요.', tool: 'mindmap', figures: [{ options: { topic: '받은 의견', printCards: false, slots: ['잘한 점', '고칠 점'], cards: ['보기'] }, caption: '' }], answer: '예: 잘한 점 — 그림이 알맞아요 / 고칠 점 — 글자를 키워요' },
        { type: 'choice', prompt: '의견을 받을 때 알맞은 태도에 ○ 하세요.', options: ['끝까지 듣고 고맙다고 말해요', '내 자료가 맞다고 반박해요', '듣지 않고 다른 일을 해요'], answer: '끝까지 듣고 고맙다고 말해요' },
        { type: 'table', prompt: '받은 의견과 고친 곳을 쓰세요.', columns: ['받은 의견', '고친 곳', '고친 뒤 확인(○)'], cells: [['', '', ''], ['', '', '']] },
        { type: 'short', prompt: '시험 삼아 보여 주고 의견을 받으면 좋은 점을 한 가지 쓰세요.' },
      ],
      easy: {
        note: '의견은 자료를 더 좋게 하는 재료예요. 끝까지 듣고 고칠 곳을 골라요.',
        items: [
          { type: 'figure', wide: true, prompt: '가지에 알맞은 의견을 하나씩 쓰세요.', tool: 'mindmap', figures: [{ options: { topic: '받은 의견', printCards: false, slots: ['잘한 점', '고칠 점'], cards: ['보기'] }, caption: '' }], answer: '예: 잘한 점 — 그림 / 고칠 점 — 글자' },
          { type: 'choice', prompt: '의견을 받은 뒤에 알맞은 행동에 ○ 하세요.', options: ['고칠 곳을 골라 고쳐요', '모두 무시해요'], answer: '고칠 곳을 골라 고쳐요' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '의견을 준 친구에게 ___ 마음을 말해요.', answer: '고마운' },
          { type: 'short', prompt: '받은 의견 하나를 쓰세요.' },
        ],
      },
    },
    diff: ['차례 놓기에서 맞게 놓으면 초록 테두리가 생기고, 틀리면 까닭이 나와요.', '모두 놓은 뒤 확인을 눌러 스스로 고쳐요.', '의견 반영 문항에 함정이 들어가고, 고친 뒤 점검을 차례로 놓아요.'],
    notes: '자주 보이는 어려움: ① 의견을 비난으로 받아들여 반박한다 → 자료가 더 좋아지게 하는 재료라고 알려 준다. ② 모든 의견을 그대로 받아들이거나 모두 무시한다 → 고칠 의견을 골라 이유를 말하게 한다. ③ 고친 뒤 확인하지 않는다 → 처음 의견 목록을 펴 놓고 하나씩 확인하게 한다.',
  }));

  // ───────────────────────── 8차시 (core) 온라인에 올려도 되는 내용과 지울 내용 ─────────────────────────
  L.push(lesson(8, '온라인에 올려도 되는 내용과 지워야 할 내용 기준 세우기',
    '발표 자료를 온라인에 올릴 때 올려도 되는 내용과 지워야 할 내용을 가르고 그 기준을 밝히며, 남의 자료를 쓸 때 밝혀야 할 항목을 말할 수 있다.', ['[6실04-03]'], {
    ill: ['a child about to press an upload button on a laptop while a paper filter sheet removes small icons for a phone, a home and a face from a slide', '올리기 전에 한 번 더 살펴요', 1],
    intro: {
      teacher: '"학급 누리집에만 올리는 자료라면 친구 전화번호가 들어 있어도 괜찮을까요?" 학급 안이라도 한번 올라가면 퍼질 수 있음을 생각하게 한다. 시연 단추로 카드가 \'올려도 돼요\'·\'지워야 해요\'에 들어가는 모습을 보여 주고 "올리기 전에 지울 것을 먼저 찾는 눈이 필요해요."라고 말한다. 학급 안이니 개인 정보를 안 지워도 된다고 여기는 학생에게는 "그 자료를 다른 사람이 복사해 가면 어떻게 될까요?"라고 묻는다.',
      student: '학급 누리집에 올리는 자료라면 친구의 전화번호가 들어 있어도 괜찮을지 생각을 말해 봅시다.',
      demo: { tool: 'mindmap', options: { topic: '올리기 전', slots: ['올려도 돼요', '지워야 해요'], cards: ['내가 그린 그림', '집 주소'], shuffle: false }, sequence: [{ sort: { '올려도 돼요': ['내가 그린 그림'], '지워야 해요': ['집 주소'] } }] },
    },
    acts: [
      {
        title: '활동 1. 올려도 되는 내용과 지워야 할 내용 가르기', tool: 'mindmap',
        teacher: '"이 내용이 퍼져 나가면 누가 곤란해질까요?" 이름·얼굴·집·학교·연락처 같은 개인 정보가 퍼질 때의 위험을 말하게 한다. 얼굴이 작게 나왔으니 괜찮다고 말하는 학생에게 "그 친구가 올려도 된다고 했나요?"라고 묻는다.',
        task: '카드를 읽고 온라인에 올려도 되는 내용과 지워야 하는 내용으로 나누어요.',
        levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
        items: [
          { prompt: '발표 자료의 내용을 올려도 돼요와 지워야 해요로 나누어 보세요.', toolOptions: { topic: '발표 자료', slots: ['올려도 돼요', '지워야 해요'], cards: ['내가 직접 그린 그림', '식물 관찰 결과 표', '친구의 휴대 전화 번호', '우리 집 주소와 호수'] }, hints: ['그 내용이 퍼지면 누군가의 안전이나 사생활이 위험해지는지 따져 지울 것을 골라요.'], target: { sort: { '올려도 돼요': ['내가 직접 그린 그림', '식물 관찰 결과 표'], '지워야 해요': ['친구의 휴대 전화 번호', '우리 집 주소와 호수'] } }, difficulty: 0.15 },
          { prompt: '사진 자료에서 지워야 할 것을 모두 골라 보세요.', toolOptions: { mode: 'pick', topic: '지울 것', cards: ['친구 얼굴이 크게 나온 사진', '교복에 달린 이름표', '운동장 풍경만 있는 사진', '집 앞 우편함의 주소'] }, hints: ['누구인지 알아볼 수 있거나 사는 곳이 드러나는 부분을 골라요. 풍경만 있는 사진은 괜찮아요.'], target: { pick: ['친구 얼굴이 크게 나온 사진', '교복에 달린 이름표', '집 앞 우편함의 주소'] }, difficulty: 0.25 },
          { prompt: '학급 안에서만 올리는 자료의 알맞은 생각만 골라 보세요.', toolOptions: { mode: 'pick', topic: '알맞은 생각', cards: ['한 번 올리면 다른 사람이 가져갈 수 있어요', '학급 안이어도 개인 정보는 지워요', '학급 안이니까 안 지워도 돼요', '나중에 지우면 흔적이 모두 사라져요'] }, hints: ['올린 자료는 복사되어 퍼질 수 있음을 생각하고, 그 위험을 아는 생각만 골라요.'], target: { pick: ['한 번 올리면 다른 사람이 가져갈 수 있어요', '학급 안이어도 개인 정보는 지워요'] }, difficulty: 0.3,
            predict: { q: '학급 안에서만 나누는 자료는 개인 정보를 지우지 않아도 될까요?', options: ['지우지 않아도 돼요', '지워야 해요', '잘 모르겠어요'], answer: 1 },
            conclude: '학급 안이라도 복사되어 퍼질 수 있으니 개인 정보는 올리기 전에 지워야 해요.' },
        ],
      },
      {
        title: '활동 2. 남의 자료를 쓸 때 밝힐 것 찾기', tool: 'mindmap',
        teacher: '"인터넷에서 가져온 그림을 발표에 쓸 때 무엇을 적어 주어야 할까요?" 만든 사람, 제목, 가져온 곳, 쓴 날짜 같은 항목을 말하게 한다. 출처를 적으면 내 것이 아니게 되어 창피하다고 여기는 학생에게 "출처를 적는 것은 만든 사람에게 고마움을 전하는 방법이에요."라고 말한다.',
        task: '남의 자료를 쓸 때 밝혀야 할 항목과 아닌 항목을 가려요.',
        levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
        items: [
          { prompt: '남의 그림을 쓸 때 밝혀야 할 항목만 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '밝혀야 할 항목', cards: ['만든 사람', '자료 제목', '가져온 누리집 주소', '내 발표 점수'] }, hints: ['그 자료가 어디서 왔고 누가 만들었는지 알려 주는 정보만 골라요. 내 발표와만 관련 있는 것은 빼요.'], target: { pick: ['만든 사람', '자료 제목', '가져온 누리집 주소'] }, difficulty: 0.2 },
          { prompt: '출처를 적는 방법마다 알맞은 예를 이어 보세요.', toolOptions: { mode: 'match', topic: '출처 적는 법', slots: [{ id: 'pic', label: '그림 아래' }, { id: 'quote', label: '글을 가져왔을 때' }, { id: 'last', label: '마지막 화면' }], cards: ['그림 제목과 만든 사람을 작게 적어요', '가져온 문장에 따옴표를 하고 출처를 적어요', '쓴 자료의 목록을 한곳에 모아 적어요', '출처를 적지 않아요'] }, hints: ['출처는 자료 바로 옆이나 끝에 모아 적어요. 가져온 글은 따옴표로 내 글과 구별해요.'], target: { match: { pic: '그림 제목과 만든 사람을 작게 적어요', quote: '가져온 문장에 따옴표를 하고 출처를 적어요', last: '쓴 자료의 목록을 한곳에 모아 적어요' } }, difficulty: 0.35 },
          { prompt: '남의 자료를 쓰는 올바른 행동과 아닌 행동을 나누어 보세요.', toolOptions: { topic: '자료 쓰기', slots: ['올바른 행동', '고쳐야 할 행동'], cards: ['출처를 밝히고 짧게 인용해요', '허락된 자료인지 확인해요', '남의 글을 내 글처럼 써요', '출처 없이 그림을 가져와요'] }, hints: ['만든 사람을 존중하고 허락과 출처를 지키는 행동은 올바른 행동이에요. 속이거나 빼앗는 행동은 고쳐야 해요.'], target: { sort: { '올바른 행동': ['출처를 밝히고 짧게 인용해요', '허락된 자료인지 확인해요'], '고쳐야 할 행동': ['남의 글을 내 글처럼 써요', '출처 없이 그림을 가져와요'] } }, difficulty: 0.3 },
        ],
      },
      {
        title: '활동 3. 지워야 하는 까닭과 기준 말하기', tool: 'mindmap',
        teacher: '"이 내용을 지워야 하는 까닭을 한 문장으로 말해 볼까요?" 까닭을 안전, 사생활, 만든 사람의 권리 중 하나로 말하게 한다. 지우라는 이유를 \'선생님이 시켜서\'라고만 말하는 학생에게 "그 내용이 퍼지면 어떤 일이 생길 수 있나요?"라고 묻는다.',
        task: '내용마다 지워야 하는 까닭을 이어 보고, 올리는 기준을 정리해요.',
        items: [
          { prompt: '지워야 할 내용마다 까닭을 한 장씩 이어 보세요.', toolOptions: { mode: 'match', topic: '지우는 까닭', slots: [{ id: 'phone', label: '친구의 전화번호' }, { id: 'face', label: '허락 없는 친구 얼굴 사진' }, { id: 'copy', label: '출처 없는 남의 그림' }], cards: ['낯선 사람에게 연락받을 수 있어요', '친구의 사생활을 지켜 주어야 해요', '만든 사람의 권리를 지켜 주어야 해요', '파일이 커져서 느려져요'] }, hints: ['그 내용이 퍼질 때 위험해지는 것이 안전인지 사생활인지 만든 사람의 권리인지 따져 이어요.'], target: { match: { phone: '낯선 사람에게 연락받을 수 있어요', face: '친구의 사생활을 지켜 주어야 해요', copy: '만든 사람의 권리를 지켜 주어야 해요' } }, difficulty: 0.3 },
          { prompt: '올리기 전 기준으로 알맞은 것만 골라 보세요.', toolOptions: { mode: 'pick', topic: '올리는 기준', cards: ['개인 정보가 없는지', '출처를 밝혔는지', '친구의 허락을 받았는지', '글자 색이 예쁜지'] }, hints: ['올려도 안전하고 예의에 맞는지 확인하는 기준만 골라요. 보기 좋은 것만 따지는 기준은 빼요.'], target: { pick: ['개인 정보가 없는지', '출처를 밝혔는지', '친구의 허락을 받았는지'] }, difficulty: 0.25 },
          { prompt: '친구가 개인 정보가 든 자료를 올리려 해요. 알맞게 말한 것만 골라 보세요.', toolOptions: { mode: 'pick', topic: '알맞은 말', cards: ['전화번호가 보이니 지우고 올리자', '난 모르니까 그냥 올려', '친구 허락을 받았는지 확인할까?', '다 보이게 올리면 더 재미있어'] }, hints: ['친구를 위험하게 하지 않으면서 도움을 주는 말만 골라요.'], target: { pick: ['전화번호가 보이니 지우고 올리자', '친구 허락을 받았는지 확인할까?'] }, difficulty: 0.35 },
        ],
      },
    ],
    exit: {
      teacher: '"올리기 전에 가장 먼저 확인할 것은 무엇인가요?" 개인 정보가 있는지를 말하는지 듣는다. 출구 1번에서 그림을 지워야 하는 쪽에 넣은 학생에게 "내가 직접 그린 그림도 위험한가요?"라고 되묻는다. 다음 시간에는 공유 전 점검표로 직접 확인해 보고 정해진 곳에 올린다고 예고한다.',
      items: [
        { type: 'tool', tool: 'mindmap', options: { topic: '올리기 전', slots: ['올려도 돼요', '지워야 해요'], cards: ['내가 만든 표', '친구의 집 주소'] }, prompt: '두 카드를 알맞은 가지에 넣어 보세요.', target: { sort: { '올려도 돼요': ['내가 만든 표'], '지워야 해요': ['친구의 집 주소'] } }, difficulty: 0.1 },
        { type: 'choice', prompt: '남의 자료를 쓸 때 가장 알맞은 행동은 무엇인가요?', options: ['출처를 밝히고 써요', '내 것처럼 써요', '몰래 가져와요'], answer: 0, difficulty: 0.15, explain: '만든 사람과 가져온 곳을 밝혀야 만든 사람의 권리를 지킬 수 있어요.' },
        { type: 'short', prompt: '올리기 전에 지울 내용 한 가지와 지우는 까닭을 쓰세요.' },
        { type: 'mood', prompt: '오늘 공부는 어땠나요?' },
      ],
    },
    ws: {
      title: '올리기 전 살펴보기',
      items: [
        { type: 'figure', wide: true, prompt: '가지마다 내용을 한 가지씩 써 넣으세요.', tool: 'mindmap', figures: [{ options: { topic: '올리기 전', printCards: false, slots: ['올려도 돼요', '지워야 해요'], cards: ['보기'] }, caption: '' }], answer: '예: 올려도 돼요 — 내가 그린 그림 / 지워야 해요 — 집 주소' },
        { type: 'choice', prompt: '올리기 전에 지워야 하는 것에 ○ 하세요.', options: ['친구의 전화번호', '내가 쓴 일기 제목', '식물 관찰 그림'], answer: '친구의 전화번호' },
        { type: 'table', prompt: '남의 자료를 쓸 때 밝혀야 할 것을 쓰세요.', columns: ['자료', '만든 사람', '가져온 곳'], cells: [['그림 한 장', '', ''], ['글 일부', '', ''], ['', '', '']] },
        { type: 'short', prompt: '개인 정보를 지워야 하는 까닭을 쓰세요.' },
      ],
      easy: {
        note: '올리기 전에 개인 정보를 지우고, 남의 자료는 출처를 밝혀요.',
        items: [
          { type: 'figure', wide: true, prompt: '가지에 내용을 하나씩 쓰세요.', tool: 'mindmap', figures: [{ options: { topic: '올리기 전', printCards: false, slots: ['올려도 돼요', '지워야 해요'], cards: ['보기'] }, caption: '' }], answer: '예: 올려도 돼요 — 내 그림 / 지워야 해요 — 전화번호' },
          { type: 'choice', prompt: '출처를 밝히는 행동에 ○ 하세요.', options: ['만든 사람을 적어요', '내 것처럼 써요'], answer: '만든 사람을 적어요' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '남의 자료를 쓸 때는 ___를 밝혀요.', answer: '출처' },
          { type: 'short', prompt: '지워야 할 정보 하나를 쓰세요.' },
        ],
      },
    },
    diff: ['나누기에서 맞게 놓으면 초록 테두리가 생기고, 틀리면 까닭이 나와요.', '모두 놓은 뒤 확인을 눌러 스스로 고쳐요.', '함정 카드가 더 나오고, 올리는 기준과 친구에게 하는 말을 골라요.'],
    notes: '자주 보이는 어려움: ① 학급 안에서는 개인 정보를 안 지워도 된다고 여긴다 → 복사되어 퍼질 수 있음을 알려 준다. ② 출처를 적으면 내 것이 아니게 된다고 여긴다 → 출처는 만든 사람에게 고마움을 전하는 방법이라고 짚는다. ③ 얼굴이 작게 나오면 괜찮다고 말한다 → 친구의 허락을 받았는지 묻는다.',
  }));

  // ───────────────────────── 9차시 (core) 공유 전 점검표로 확인하기 ─────────────────────────
  L.push(lesson(9, '공유하기 전에 점검표로 개인 정보와 출처 표시 확인하기',
    '공유하기 전에 점검표로 개인 정보와 출처 표시를 확인하고, 정해진 곳에 올리는 차례를 지켜 올릴 수 있다.', ['[6실04-03]'], {
    ill: ['a child holding a checklist beside a laptop where a share arrow points to a class board with a small lock, and a magnifier hovering over a slide', '올리기 전에 점검표로 확인해요', 2],
    intro: {
      teacher: '"비행기를 타기 전에 조종사가 점검표를 하나씩 확인하는 까닭이 무엇일까요?" 빠뜨리지 않으려는 것임을 말하게 한다. 시연 단추로 점검 항목이 표시되는 모습을 보여 주고 "자료를 올리기 전에도 점검표로 하나씩 확인해요."라고 말한다. 한눈에 봐서 괜찮은 것 같다며 점검표를 건너뛰는 학생에게는 "눈으로 대충 보면 놓치는 것이 없을까요?"라고 되묻는다.',
      student: '비행기를 타기 전에 점검표를 쓰는 까닭을 짝과 말해 보고, 자료를 올리기 전에도 점검표가 필요한지 생각해 봅시다.',
      demo: { tool: 'kitchen', options: { mode: 'checklist', title: '올리기 전', items: [{ id: 'pii', text: '개인 정보를 지웠어요' }, { id: 'fun', text: '글자가 예뻐요' }], shuffle: false }, sequence: [{ checklist: ['pii'] }] },
    },
    acts: [
      {
        title: '활동 1. 개인 정보 점검표로 확인하기', tool: 'kitchen',
        teacher: '"이 자료에서 이름이 보이는 곳이 어디인가요? 사진 뒤쪽 칠판은요?" 사진 구석구석까지 찾게 한다. 점검표에 모두 표시하기만 하고 실제로 고치지 않는 학생에게 "표시한 항목이 정말 그렇게 되어 있나요?"라고 묻는다.',
        task: '개인 정보 점검표에서 알맞은 것만 표시해요. 표시하지 못한 것은 올리기 전에 고쳐요.',
        levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
        items: [
          { prompt: '올리기 전 개인 정보 점검표에서 알맞은 것만 표시해 보세요.', toolOptions: { mode: 'checklist', title: '개인 정보 점검', items: [{ id: 'name', text: '이름과 학교 이름이 드러나지 않아요' }, { id: 'tel', text: '전화번호와 주소를 지웠어요' }, { id: 'face', text: '친구 얼굴이 크게 나온 사진을 그대로 써요' }, { id: 'back', text: '사진 뒤의 칠판과 책상 이름표까지 살폈어요' }] }, hints: ['올려도 안전한지 확인하는 항목만 표시해요. 얼굴이 드러난 사진을 그대로 쓰는 것은 확인한 것이 아니에요.'], target: { checklist: ['name', 'tel', 'back'] }, difficulty: 0.25 },
          { prompt: '올리기 전에 파일 이름과 설명을 점검할 때 알맞은 것만 표시해 보세요.', toolOptions: { mode: 'checklist', title: '파일 이름 점검', items: [{ id: 'file', text: '파일 이름에 내 이름 대신 주제를 써요' }, { id: 'desc', text: '설명에 집 주소나 연락처를 적지 않아요' }, { id: 'real', text: '파일 이름에 친구의 실명을 모두 적어요' }, { id: 'tag', text: '남의 얼굴이 나왔으면 쓰기 전에 허락을 받아요' }] }, hints: ['이름이나 연락처가 드러나지 않게 하고 허락을 받는 항목만 표시해요.'], target: { checklist: ['file', 'desc', 'tag'] }, difficulty: 0.3 },
          { prompt: '친구와 함께 만든 자료에서 알맞은 처리만 표시해 보세요.', toolOptions: { mode: 'checklist', title: '함께 만든 자료', items: [{ id: 'all', text: '함께 만든 친구들에게 올려도 되는지 물어요' }, { id: 'role', text: '이름 대신 별명이나 역할로 적어요' }, { id: 'skip', text: '친구는 몰라도 되니 그냥 올려요' }, { id: 'edit', text: '친구가 싫어하는 부분은 고쳐요' }] }, hints: ['함께 만든 사람의 의견을 묻고 존중하는 항목만 표시해요.'], target: { checklist: ['all', 'role', 'edit'] }, difficulty: 0.35 },
        ],
      },
      {
        title: '활동 2. 출처 표시 점검표로 확인하기', tool: 'kitchen',
        teacher: '"이 화면에서 남의 그림은 몇 장이고, 출처를 적은 그림은 몇 장인가요?" 세어 보며 빠진 것을 찾게 한다. 출처를 맨 마지막 화면에 한 번만 적고 끝내려는 학생에게 "각 그림 옆에도 간단히 적어 줄 수 있을까요?"라고 묻는다.',
        task: '출처 표시 점검표에서 알맞은 것만 표시해요.',
        items: [
          { prompt: '출처 표시 점검표에서 알맞은 것만 표시해 보세요.', toolOptions: { mode: 'checklist', title: '출처 점검', items: [{ id: 'who', text: '남의 그림마다 만든 사람을 적었어요' }, { id: 'where', text: '가져온 누리집 이름을 적었어요' }, { id: 'mine', text: '남의 글을 내 말처럼 고쳐 써요' }, { id: 'quote', text: '가져온 글에는 따옴표를 쳤어요' }] }, hints: ['출처를 밝히고 남의 글과 내 글을 구별하는 항목만 표시해요.'], target: { checklist: ['who', 'where', 'quote'] }, difficulty: 0.25 },
          { prompt: '자료 목록을 정리하는 차례를 위에서부터 놓아 보세요.', toolOptions: { mode: 'order', cards: [{ id: 'list', text: '쓴 자료를 모두 모아 목록을 만들어요' }, { id: 'name', text: '자료마다 제목과 만든 사람을 적어요' }, { id: 'site', text: '가져온 곳의 이름을 적어요' }, { id: 'last', text: '마지막 화면에 목록을 붙여요' }] }, hints: ['빠뜨리지 않게 먼저 모으고, 자료마다 정보를 채운 뒤에 마지막 화면에 붙이는 순서를 떠올려요.'], target: { order: ['list', 'name', 'site', 'last'] }, difficulty: 0.3 },
          { prompt: '출처를 밝히지 않으면 생기는 일을 골라 보세요.', toolOptions: { mode: 'pick', topic: '출처가 없으면', cards: ['만든 사람의 권리를 해쳐요', '자료가 믿을 만한지 알기 어려워요', '자료가 더 빨라져요', '발표가 저절로 좋아져요'] }, hints: ['출처가 없으면 만든 사람과 믿을 수 있는지에 어떤 문제가 생기는지 생각해 골라요.'], target: { pick: ['만든 사람의 권리를 해쳐요', '자료가 믿을 만한지 알기 어려워요'] }, difficulty: 0.3,
            predict: { q: '출처를 적지 않으면 어떤 문제가 생길까요?', options: ['문제가 없어요', '만든 사람의 권리를 해쳐요', '잘 모르겠어요'], answer: 1 },
            conclude: '출처를 밝히지 않으면 만든 사람의 권리를 해치고 자료를 믿기 어려워져요.' },
        ],
      },
      {
        title: '활동 3. 정해진 곳에 올리는 차례 놓기', tool: 'kitchen',
        teacher: '"올리는 곳은 아무 곳이나 괜찮을까요? 학급 누리집, 학교가 정한 공간 중에서 어디일까요?" 정해진 공간의 장점을 말하게 한다. 올리고 나서 확인을 빼려는 학생에게 "올린 자료가 정말 보이는지 열어 볼까요?"라고 묻는다.',
        task: '자료를 올리는 차례를 놓고, 올린 뒤 해야 할 일을 골라요.',
        items: [
          { prompt: '공유하는 차례를 위에서부터 놓아 보세요.', toolOptions: { mode: 'order', cards: [{ id: 'check', text: '점검표로 개인 정보와 출처를 확인해요' }, { id: 'place', text: '선생님이 정한 공간을 열어요' }, { id: 'upload', text: '자료를 올려요' }, { id: 'open', text: '올린 자료가 잘 열리는지 확인해요' }] }, hints: ['올리기 전에 점검하고, 정해진 곳에 올린 뒤 열어서 확인하는 순서를 떠올려요.'], target: { order: ['check', 'place', 'upload', 'open'] }, difficulty: 0.25 },
          { prompt: '올린 뒤 해야 할 일만 표시해 보세요.', toolOptions: { mode: 'checklist', title: '올린 뒤 할 일', items: [{ id: 'view', text: '올린 자료가 제대로 보이는지 봐요' }, { id: 'share', text: '링크를 허락 없이 아무에게나 보내요' }, { id: 'wait', text: '의견이 올라오는지 가끔 살펴요' }, { id: 'delete', text: '실수를 발견하면 선생님께 말해 고쳐요' }] }, hints: ['자료가 잘 올라갔는지 확인하고 정해진 사람과만 나누며 실수는 바로잡는 항목만 표시해요.'], target: { checklist: ['view', 'wait', 'delete'] }, difficulty: 0.3 },
          { prompt: '올리는 곳을 고를 때 알맞은 것만 표시해 보세요.', toolOptions: { mode: 'checklist', title: '올리는 곳', items: [{ id: 'teacher', text: '선생님이 정한 공간에 올려요' }, { id: 'anywhere', text: '아무 누리집에나 올려요' }, { id: 'who', text: '누가 볼 수 있는지 먼저 확인해요' }, { id: 'rule', text: '학급 약속을 확인해요' }] }, hints: ['안전하게 관리되는 곳이고 누가 볼 수 있는지 아는 곳인지를 확인하는 항목만 표시해요.'], target: { checklist: ['teacher', 'who', 'rule'] }, difficulty: 0.35 },
        ],
      },
    ],
    exit: {
      teacher: '"오늘 점검표에서 가장 놓치기 쉬웠던 항목은 무엇이었나요?" 사진 속 이름표나 뒤쪽 칠판처럼 구석에 있는 정보를 말하는지 듣는다. 출구 2번에서 \'아무 곳에나\'를 고른 학생에게 "누가 볼 수 있는지 아는 곳인가요?"라고 되묻는다. 다음 시간에는 올린 뒤 받은 의견에 예의를 갖추어 답하는 방법을 살펴본다고 예고한다.',
      items: [
        { type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title: '올리기 전', items: [{ id: 'tel', text: '전화번호를 지웠어요' }, { id: 'src', text: '남의 그림의 출처를 적었어요' }, { id: 'rush', text: '점검 없이 바로 올려요' }] }, prompt: '올리기 전에 점검한 것만 표시해 보세요.', target: { checklist: ['tel', 'src'] }, difficulty: 0.15 },
        { type: 'choice', prompt: '자료를 올리기 직전에 가장 알맞은 행동은 무엇인가요?', options: ['점검표로 하나씩 확인해요', '글자 색만 살펴요', '바로 올려요'], answer: 0, difficulty: 0.2, explain: '개인 정보와 출처를 점검표로 하나씩 확인해야 놓치지 않아요.' },
        { type: 'short', prompt: '점검표로 확인하다가 찾은 고칠 점 한 가지를 쓰세요.' },
        { type: 'mood', prompt: '오늘 공부는 어땠나요?' },
      ],
    },
    ws: {
      title: '공유 전 점검표',
      items: [
        { type: 'table', prompt: '내 자료를 점검하고 결과를 쓰세요.', columns: ['점검 내용', '했어요(○)', '고칠 점'], cells: [['이름·전화번호·주소를 지웠어요', '', ''], ['남의 그림의 출처를 적었어요', '', ''], ['친구에게 올려도 되는지 물었어요', '', ''], ['정해진 곳에 올려요', '', '']] },
        { type: 'choice', prompt: '올리기 전에 가장 먼저 해야 할 일에 ○ 하세요.', options: ['점검표로 확인하기', '글자 예쁘게 꾸미기', '링크 보내기'], answer: '점검표로 확인하기' },
        { type: 'figure', wide: true, prompt: '가지마다 점검할 것을 한 가지씩 써 넣으세요.', tool: 'mindmap', figures: [{ options: { topic: '공유 전 점검', printCards: false, slots: ['개인 정보', '출처', '올리는 곳'], cards: ['보기'] }, caption: '' }], answer: '예: 개인 정보 — 전화번호 지우기 / 출처 — 만든 사람 적기 / 올리는 곳 — 정해진 공간' },
        { type: 'short', prompt: '올린 자료에 실수가 있을 때 어떻게 하면 좋을지 쓰세요.' },
      ],
      easy: {
        note: '올리기 전에 점검표로 개인 정보와 출처를 확인해요.',
        items: [
          { type: 'table', prompt: '점검한 것에 ○ 하세요.', columns: ['점검 내용', '했어요(○)'], cells: [['전화번호를 지웠어요', ''], ['출처를 적었어요', '']] },
          { type: 'choice', prompt: '올리기 전에 할 일에 ○ 하세요.', options: ['점검표로 확인하기', '바로 올리기'], answer: '점검표로 확인하기' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '자료는 선생님이 ___ 공간에 올려요.', answer: '정한' },
          { type: 'short', prompt: '내가 점검한 항목 하나를 쓰세요.' },
        ],
      },
    },
    diff: ['점검표에서 맞게 표시하면 초록 테두리가 생기고, 틀리면 까닭이 나와요.', '모두 표시한 뒤 확인을 눌러 스스로 고쳐요.', '함정 항목이 더 나오고, 올리는 차례와 올린 뒤 할 일을 따로 가려요.'],
    notes: '자주 보이는 어려움: ① 점검표에 모두 표시하고 실제로는 고치지 않는다 → 표시한 항목이 정말 그런지 자료를 다시 보게 한다. ② 사진 구석의 이름표나 칠판을 놓친다 → 사진 가장자리까지 손가락으로 훑게 한다. ③ 올리는 곳을 아무 데나 고른다 → 누가 볼 수 있는지 먼저 확인하게 한다.',
  }));

  // ───────────────────────── 10차시 (practice) 올린 뒤 의견에 예의 있게 답하기 ─────────────────────────
  L.push(lesson(10, '올린 자료에 달린 의견에 예의를 갖추어 답하고 흔적 이해하기',
    '올린 자료에 받은 의견에 예의를 갖추어 답하고, 한 번 올린 자료는 지워도 복사되어 남을 수 있음을 알아 신중히 올리는 태도를 보일 수 있다.', ['[6실04-03]'], {
    ill: ['a classroom board with a few friendly speech-bubble comments around a presentation slide and a trash icon beside a faint ghost copy of the slide', '답글도 마음을 담아서', 0],
    intro: {
      teacher: '"올린 자료에 \'글자가 작아요\'라는 의견이 달렸어요. 어떤 마음으로 답하고 싶나요?" 속상함이나 고마움을 말하게 한다. 시연 단추로 예의 바른 답이 골라지는 모습을 보여 주고 "답을 쓰는 말도 글로 남아 다른 사람이 읽어요."라고 말한다. 한 번 올린 자료는 지우면 흔적 없이 사라진다고 여기는 학생에게는 "지우기 전에 누가 저장해 두었다면요?"라고 묻는다.',
      student: '올린 자료에 \'글자가 작아요\'라는 의견이 달렸을 때 어떤 마음이 들지 말해 봅시다.',
      demo: { tool: 'mindmap', options: { mode: 'pick', topic: '예의 바른 답', cards: ['알려 줘서 고마워요', '그건 아니야'], shuffle: false }, sequence: [{ pick: ['알려 줘서 고마워요'] }] },
    },
    acts: [
      {
        title: '활동 1. 의견에 예의 있게 답하는 차례 놓기', tool: 'kitchen',
        teacher: '"의견을 읽고 바로 답하기 전에 무엇을 하면 좋을까요?" 의견의 뜻을 헤아리는 시간을 가지게 한다. 화가 난 채로 곧바로 답하려는 학생에게 "한 번 숨을 쉬고, 받는 사람이 되어 다시 읽어 볼까요?"라고 말한다.',
        task: '의견을 읽고 답을 올리는 차례를 위에서부터 놓아요.',
        levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
        items: [
          { prompt: '의견에 답을 올리는 차례를 위에서부터 놓아 보세요.', toolOptions: { mode: 'order', cards: [{ id: 'read', text: '받은 의견을 끝까지 읽어요' }, { id: 'think', text: '의견을 준 친구의 마음을 헤아려요' }, { id: 'write', text: '고마움과 고칠 점을 담아 답을 써요' }, { id: 'review', text: '올리기 전에 한 번 더 읽어 봐요' }] }, hints: ['읽고 헤아리는 일이 먼저, 쓴 뒤 다시 읽는 일이 마지막이에요. 급하게 쓰기 전에 마음을 가라앉히는 순서를 떠올려요.'], target: { order: ['read', 'think', 'write', 'review'] }, difficulty: 0.2 },
          { prompt: '답글을 쓸 때 지킬 점을 표시해 보세요.', toolOptions: { mode: 'checklist', title: '답글 쓰기', items: [{ id: 'thanks', text: '의견을 준 것에 고마움을 말해요' }, { id: 'name', text: '의견을 준 친구를 놀리는 말을 써요' }, { id: 'plan', text: '어떻게 고칠지 말해요' }, { id: 'tone', text: '존중하는 말투로 써요' }] }, hints: ['읽는 사람이 존중받는다고 느끼고, 앞으로 어떻게 하겠다는 내용이 담긴 항목만 표시해요.'], target: { checklist: ['thanks', 'plan', 'tone'] }, difficulty: 0.25 },
          { prompt: '기분이 나빠지는 의견을 받았을 때 대처하는 차례를 놓아 보세요.', toolOptions: { mode: 'order', cards: [{ id: 'stop', text: '바로 답하지 않고 잠시 멈춰요' }, { id: 'reread', text: '의견을 다시 천천히 읽어요' }, { id: 'ask', text: '선생님이나 어른께 보여 드려요' }, { id: 'reply', text: '필요하면 예의 바르게 답해요' }] }, hints: ['화가 났을 때는 바로 반응하지 않고 도움을 구한 뒤에 필요한 만큼 답하는 순서를 떠올려요.'], target: { order: ['stop', 'reread', 'ask', 'reply'] }, difficulty: 0.35 },
        ],
      },
      {
        title: '활동 2. 상황에 알맞은 예의 바른 답 짝 짓기', tool: 'mindmap',
        teacher: '"이 의견에는 어떤 답이 알맞을까요? 같은 뜻이라도 말투가 다르면 받는 마음이 달라요." 말투를 비교해 가며 이어 보게 한다. 장난으로 센 말을 쓰는 학생에게 "그 말을 내가 받는다면 어떤 마음일까요?"라고 묻는다.',
        task: '받은 의견마다 알맞은 답을 한 장씩 이어요.',
        items: [
          { prompt: '받은 의견마다 알맞은 답을 한 장씩 이어 보세요.', toolOptions: { mode: 'match', topic: '의견과 답', slots: [{ id: 'small', label: '글자가 작아요' }, { id: 'good', label: '그림이 정말 좋아요' }, { id: 'src', label: '그림 출처가 없어요' }], cards: ['알려 줘서 고마워요, 글자를 키울게요', '칭찬해 줘서 고마워요, 더 노력할게요', '확인해 줘서 고마워요, 출처를 적어 둘게요', '너나 잘 해'] }, hints: ['의견에 고마움을 말하고 고치겠다는 내용을 담은 답을 이어요. 상대를 공격하는 답은 어디에도 어울리지 않아요.'], target: { match: { small: '알려 줘서 고마워요, 글자를 키울게요', good: '칭찬해 줘서 고마워요, 더 노력할게요', src: '확인해 줘서 고마워요, 출처를 적어 둘게요' } }, difficulty: 0.25 },
          { prompt: '예의 바른 답글만 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '예의 바른 답글', cards: ['알려 줘서 고마워요, 다음에 더 잘할게요', '의견은 필요 없어요', '그렇게 느꼈구나, 고쳐 볼게요', '그건 너희 잘못이야'] }, hints: ['의견을 준 사람을 존중하고 앞으로의 행동을 담은 답글만 골라요.'], target: { pick: ['알려 줘서 고마워요, 다음에 더 잘할게요', '그렇게 느꼈구나, 고쳐 볼게요'] }, difficulty: 0.2 },
          { prompt: '답글을 고치는 방법마다 알맞은 말을 이어 보세요.', toolOptions: { mode: 'match', topic: '말 고쳐 쓰기', slots: [{ id: 'bad1', label: '그건 아니야' }, { id: 'bad2', label: '몰라, 알아서 해' }, { id: 'bad3', label: '왜 간섭해?' }], cards: ['그렇게 생각할 수도 있겠어요', '같이 방법을 찾아볼까요?', '의견을 줘서 고마워요', '내 맘대로 할래요'] }, hints: ['날카로운 말을 존중하는 말로 바꾼 짝을 찾아요. 같은 뜻이라도 상대의 마음을 생각해서 바꿔요.'], target: { match: { bad1: '그렇게 생각할 수도 있겠어요', bad2: '같이 방법을 찾아볼까요?', bad3: '의견을 줘서 고마워요' } }, difficulty: 0.35 },
        ],
      },
      {
        title: '활동 3. 한 번 올린 자료가 남는다는 것 이해하기', tool: 'mindmap',
        teacher: '"올린 자료를 내가 지웠는데 친구가 이미 저장해 두었다면요?" 복사된 자료는 내가 지워도 남을 수 있음을 알게 한다. 지우면 끝이라고 말하는 학생에게 "그 자료가 이미 다른 곳으로 옮겨졌다면 지워도 남지 않을까요?"라고 되묻는다.',
        task: '올린 자료에 대한 알맞은 설명을 골라요.',
        levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
        items: [
          { prompt: '한 번 올린 자료에 대한 알맞은 설명만 골라 보세요.', toolOptions: { mode: 'pick', topic: '알맞은 설명', cards: ['내가 지워도 다른 사람이 저장했을 수 있어요', '지우면 흔적 없이 모두 사라져요', '올리기 전에 신중히 살펴야 해요', '학급 안이면 아무도 저장하지 못해요'] }, hints: ['복사와 저장이 쉬운 온라인의 성질을 떠올려, 올린 자료가 남을 수 있다는 설명만 골라요.'], target: { pick: ['내가 지워도 다른 사람이 저장했을 수 있어요', '올리기 전에 신중히 살펴야 해요'] }, difficulty: 0.25 },
          { prompt: '자료를 올린 뒤 일어날 수 있는 일을 나누어 보세요.', toolOptions: { topic: '올린 뒤', slots: ['내가 고칠 수 있어요', '내가 어쩔 수 없어요'], cards: ['글자 크기를 바꾸어 다시 올려요', '이미 저장된 사본', '틀린 낱말을 고쳐요', '다른 곳으로 옮겨진 자료'] }, hints: ['내가 가진 원본은 고칠 수 있지만 이미 다른 사람이 가져간 사본은 내가 바꿀 수 없다는 점을 기준으로 나누어요.'], target: { sort: { '내가 고칠 수 있어요': ['글자 크기를 바꾸어 다시 올려요', '틀린 낱말을 고쳐요'], '내가 어쩔 수 없어요': ['이미 저장된 사본', '다른 곳으로 옮겨진 자료'] } }, difficulty: 0.35 },
          { prompt: '올리기 전에 한 번 더 생각해야 하는 까닭을 이어 보세요.', toolOptions: { mode: 'match', topic: '생각하는 까닭', slots: [{ id: 'copy', label: '복사가 쉬워서' }, { id: 'long', label: '오래 남아서' }, { id: 'wide', label: '널리 퍼져서' }], cards: ['지운 뒤에도 사본이 남을 수 있어요', '나중에 다시 봐도 같은 모습이 남아 있어요', '모르는 사람이 볼 수도 있어요', '파일이 가벼워서'] }, hints: ['온라인 자료의 복사 쉬움·오래 남음·퍼짐 때문에 생기는 일을 각각 이어요.'], target: { match: { copy: '지운 뒤에도 사본이 남을 수 있어요', long: '나중에 다시 봐도 같은 모습이 남아 있어요', wide: '모르는 사람이 볼 수도 있어요' } }, difficulty: 0.4,
            predict: { q: '올린 자료를 지우면 흔적 없이 사라질까요?', options: ['모두 사라져요', '남을 수도 있어요', '잘 모르겠어요'], answer: 1 },
            conclude: '복사와 저장이 쉬워서 지워도 사본이 남을 수 있어요. 올리기 전에 신중해야 해요.' },
        ],
      },
    ],
    exit: {
      teacher: '"올리기 전에 한 번 더 확인해야 하는 까닭을 말해 볼까요?" 지워도 남을 수 있다는 점을 말하는지 듣는다. 출구 2번에서 \'지우면 사라진다\'를 고른 학생에게 "친구가 이미 저장했다면 내 손으로 지울 수 있을까요?"라고 되묻는다. 다음 시간부터는 로봇으로 넘어가 로봇이 무엇으로 이루어졌는지 살펴본다고 예고한다.',
      items: [
        { type: 'tool', tool: 'mindmap', options: { mode: 'pick', topic: '예의 바른 답글', cards: ['고마워요, 고쳐 볼게요', '알아서 할게요', '의견을 보고 생각해 볼게요'] }, prompt: '예의 바른 답글만 골라 보세요.', target: { pick: ['고마워요, 고쳐 볼게요', '의견을 보고 생각해 볼게요'] }, difficulty: 0.15 },
        { type: 'choice', prompt: '한 번 올린 자료에 대한 설명으로 알맞은 것은 무엇인가요?', options: ['지우면 흔적 없이 사라져요', '지워도 사본이 남을 수 있어요', '학급 안이면 절대 퍼지지 않아요'], answer: 1, difficulty: 0.2, explain: '다른 사람이 복사하거나 저장했다면 내가 지워도 사본이 남을 수 있어요.' },
        { type: 'short', prompt: '의견에 답하는 글을 한 문장으로 써 보세요.' },
        { type: 'mood', prompt: '오늘 공부는 어땠나요?' },
      ],
    },
    ws: {
      title: '예의 바른 답글과 올린 자료',
      items: [
        { type: 'table', prompt: '의견에 답글을 써 보세요.', columns: ['받은 의견', '내 답글'], cells: [['글자가 작아요', ''], ['그림 출처가 없어요', ''], ['', '']] },
        { type: 'choice', prompt: '예의 바른 답글에 ○ 하세요.', options: ['알려 줘서 고마워요, 고쳐 볼게요', '의견은 필요 없어요', '그건 너희 잘못이야'], answer: '알려 줘서 고마워요, 고쳐 볼게요' },
        { type: 'figure', wide: true, prompt: '가지마다 한 가지씩 써 넣으세요.', tool: 'mindmap', figures: [{ options: { topic: '올린 자료', printCards: false, slots: ['내가 고칠 수 있어요', '내가 어쩔 수 없어요'], cards: ['보기'] }, caption: '' }], answer: '예: 고칠 수 있어요 — 올린 글 / 어쩔 수 없어요 — 친구가 저장한 사본' },
        { type: 'short', prompt: '올리기 전에 한 번 더 생각해야 하는 까닭을 쓰세요.' },
      ],
      easy: {
        note: '의견에는 고마움을 담아 답하고, 올린 자료는 지워도 남을 수 있음을 기억해요.',
        items: [
          { type: 'table', prompt: '의견에 답글을 써 보세요.', columns: ['받은 의견', '내 답글'], cells: [['글자가 작아요', ''], ['그림이 좋아요', '']] },
          { type: 'choice', prompt: '예의 바른 답글에 ○ 하세요.', options: ['고마워요, 고쳐 볼게요', '필요 없어요'], answer: '고마워요, 고쳐 볼게요' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '의견을 준 친구에게 ___을 전해요.', answer: '고마움' },
          { type: 'short', prompt: '내가 쓴 답글을 한 줄 쓰세요.' },
        ],
      },
    },
    diff: ['차례 놓기와 답글 고르기에서 맞게 놓으면 초록 테두리가 생기고, 틀리면 까닭이 나와요.', '모두 놓은 뒤 확인을 눌러 스스로 고쳐요.', '날카로운 말을 존중하는 말로 바꾸는 문항이 나오고, 올린 자료가 남는 까닭을 이어요.'],
    notes: '자주 보이는 어려움: ① 의견을 비난으로 받아들여 센 말로 답한다 → 의견을 준 친구의 마음을 헤아린 뒤 쓰게 한다. ② 한 번 올린 자료를 지우면 흔적 없이 사라진다고 여긴다 → 이미 저장된 사본은 내가 지울 수 없음을 알려 준다. ③ 답글을 쓰고 다시 읽지 않는다 → 올리기 전에 받는 사람의 입장에서 읽어 보게 한다.',
  }));

  // ───────────────────────── 11차시 (core) 로봇은 감지·판단·움직임으로 이루어진다 ─────────────────────────
  L.push(lesson(11, '청소 로봇의 부분을 감지·판단·움직임으로 나누어 이름 붙이기',
    '로봇을 이루는 부분을 감지·판단·움직임으로 나누어 이름 붙이고, 생활에서 쓰이는 로봇이 사람의 어떤 일을 대신하는지 말할 수 있다.', ['[6실04-04]'], {
    ill: ['a round paper vacuum robot seen from above with three colored zones for eyes, brain and wheels, rolling around a living room with a sofa and a rug', '로봇에게도 눈과 머리와 몸이 있어요', 1],
    intro: {
      teacher: '"청소 로봇이 소파 다리를 부딪치지 않고 지나가려면 무엇이 필요할까요?" 먼저 장애물을 알아채고, 어떻게 움직일지 정하고, 바퀴를 움직이는 세 가지 일을 말하게 한다. 시연 단추로 부품 카드가 \'감지\'·\'움직임\' 가지에 들어가는 모습을 보여 주고 "로봇은 감지하고, 판단하고, 움직여요."라고 말한다. 사람 모양을 한 기계만 로봇이라고 여기는 학생에게는 "사람 모양이 아니어도 감지하고 판단하고 움직이면 로봇이에요. 청소 로봇은 어떤가요?"라고 묻는다.',
      student: '청소 로봇이 소파 다리를 피해 가려면 어떤 일을 해야 할지 순서대로 말해 봅시다.',
      demo: { tool: 'mindmap', options: { topic: '청소 로봇', slots: ['감지', '움직임'], cards: ['장애물 센서', '바퀴'], shuffle: false }, sequence: [{ sort: { '감지': ['장애물 센서'], '움직임': ['바퀴'] } }] },
    },
    acts: [
      {
        title: '활동 1. 청소 로봇의 부분을 세 갈래로 나누기', tool: 'mindmap',
        teacher: '"이 부품은 주변을 알아보는 것인가요, 알아본 것을 보고 정하는 것인가요, 실제로 움직이는 것인가요?" 부품이 하는 일의 낱말(알아본다, 정한다, 움직인다)에 집중하게 한다. 바퀴를 판단에 넣는 학생에게 "바퀴가 스스로 정하나요, 정해진 대로 움직이나요?"라고 묻는다.',
        task: '부품 카드를 읽고 감지·판단·움직임 가지에 나누어 넣어요.',
        levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
        items: [
          { prompt: '청소 로봇의 부품을 감지·판단·움직임으로 나누어 보세요.', toolOptions: { topic: '청소 로봇', slots: ['감지', '판단', '움직임'], cards: ['장애물 센서', '먼지 센서', '제어 장치', '바퀴', '솔'] }, hints: ['부품이 주변을 알아보는지, 알아본 값을 보고 정하는지, 몸을 움직이는지 보고 나누어요.'], target: { sort: { 감지: ['장애물 센서', '먼지 센서'], 판단: ['제어 장치'], 움직임: ['바퀴', '솔'] } }, difficulty: 0.2 },
          { prompt: '청소 로봇이 일하는 장면을 감지·판단·움직임으로 나누어 보세요.', toolOptions: { topic: '일하는 장면', slots: ['감지', '판단', '움직임'], cards: ['앞에 의자 다리가 있다고 알아봐요', '왼쪽으로 돌기로 정해요', '바퀴가 왼쪽으로 돌아요', '바닥에 먼지가 많다고 알아봐요', '그 자리를 한 번 더 닦기로 정해요', '솔이 빠르게 돌아요'] }, hints: ['알아보는 문장, 정하는 문장, 몸이 움직이는 문장으로 나누어요. 문장의 끝에 오는 낱말을 살펴요.'], target: { sort: { 감지: ['앞에 의자 다리가 있다고 알아봐요', '바닥에 먼지가 많다고 알아봐요'], 판단: ['왼쪽으로 돌기로 정해요', '그 자리를 한 번 더 닦기로 정해요'], 움직임: ['바퀴가 왼쪽으로 돌아요', '솔이 빠르게 돌아요'] } }, difficulty: 0.35 },
          { prompt: '로봇이라고 부를 수 있는 것만 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '로봇', cards: ['장애물을 알아보고 피해 다니는 청소 로봇', '움직이지 않는 사람 모양 인형', '물건을 알아보고 팔로 옮기는 공장 로봇', '버튼을 누르면 켜지기만 하는 선풍기'] }, hints: ['주변을 알아보고 스스로 정해 움직이는지 따져 골라요. 모양이 사람을 닮았는지는 상관없어요.'], target: { pick: ['장애물을 알아보고 피해 다니는 청소 로봇', '물건을 알아보고 팔로 옮기는 공장 로봇'] }, difficulty: 0.3,
            predict: { q: '사람 모양이 아니어도 로봇일 수 있을까요?', options: ['로봇일 수 있어요', '로봇이 아니에요', '잘 모르겠어요'], answer: 0 },
            conclude: '로봇은 모양보다 감지하고 판단하고 움직이는 일을 하는지로 가려요.' },
        ],
      },
      {
        title: '활동 2. 생활 속 로봇이 대신하는 일 이어 보기', tool: 'mindmap',
        teacher: '"이 로봇이 없다면 누가 이 일을 해야 할까요?" 사람이 하기 힘든 일, 위험한 일, 반복되는 일을 로봇이 대신한다는 점을 말하게 한다. 로봇이 사람의 일을 모두 대신할 수 있다고 말하는 학생에게 "로봇이 하지 못하고 사람이 해야 하는 일은 무엇이 있을까요?"라고 묻는다.',
        task: '로봇 이름마다 대신하는 일을 한 장씩 이어요.',
        items: [
          { prompt: '로봇마다 대신하는 일을 한 장씩 이어 보세요.', toolOptions: { mode: 'match', topic: '로봇의 일', slots: [{ id: 'clean', label: '청소 로봇' }, { id: 'serve', label: '식당 서빙 로봇' }, { id: 'mow', label: '잔디 깎는 로봇' }], cards: ['집 바닥의 먼지를 치워 줘요', '음식을 손님 자리까지 날라 줘요', '풀을 알맞은 길이로 잘라 줘요', '책을 소리 내어 읽어 줘요'] }, hints: ['로봇의 이름을 읽고 그 로봇이 일하는 장소에서 하는 일이 무엇인지 떠올려 이어요.'], target: { match: { clean: '집 바닥의 먼지를 치워 줘요', serve: '음식을 손님 자리까지 날라 줘요', mow: '풀을 알맞은 길이로 잘라 줘요' } }, difficulty: 0.2 },
          { prompt: '로봇이 대신하면 좋은 일만 골라 보세요.', toolOptions: { mode: 'pick', topic: '로봇에게 맡길 일', cards: ['위험한 곳의 점검', '반복해서 물건 나르기', '친구에게 마음을 전하는 편지 쓰기', '아픈 사람의 손을 잡고 위로하기'] }, hints: ['사람에게 위험하거나 힘들고 반복되는 일은 로봇에게 맡겨 볼 수 있어요. 마음을 나누는 일은 사람이 직접 해야 해요.'], target: { pick: ['위험한 곳의 점검', '반복해서 물건 나르기'] }, difficulty: 0.3 },
          { prompt: '로봇이 일할 때 사람이 해야 하는 일을 나누어 보세요.', toolOptions: { topic: '로봇과 사람', slots: ['로봇이 해요', '사람이 해요'], cards: ['바닥을 돌아다니며 먼지 빨아들이기', '먼지통 비우기', '가구 옮겨 길 만들기', '장애물을 알아보기'] }, hints: ['로봇이 센서로 알아보고 스스로 하는 일은 로봇의 몫이고, 도구나 집을 정리하는 일은 사람의 몫이에요.'], target: { sort: { '로봇이 해요': ['바닥을 돌아다니며 먼지 빨아들이기', '장애물을 알아보기'], '사람이 해요': ['먼지통 비우기', '가구 옮겨 길 만들기'] } }, difficulty: 0.35 },
        ],
      },
      {
        title: '활동 3. 로봇이 일하는 흐름 차례대로 놓기', tool: 'mindmap',
        teacher: '"청소 로봇이 소파 다리를 만났어요. 가장 먼저 무엇을 하나요?" 감지→판단→움직임의 흐름으로 말하게 한다. 판단 없이 감지에서 바로 움직임으로 가는 학생에게 "알아본 것을 보고 무엇을 할지 정하는 일은 어디에 들어가나요?"라고 묻는다.',
        task: '로봇이 일하는 흐름을 감지·판단·움직임 차례로 놓아요.',
        items: [
          { prompt: '청소 로봇이 소파 다리를 만났을 때의 흐름을 위에서부터 놓아 보세요.', toolOptions: { mode: 'order', cards: [{ id: 'see', text: '앞에 물체가 있다고 알아봐요' }, { id: 'decide', text: '돌아가기로 정해요' }, { id: 'move', text: '바퀴를 돌려 방향을 바꿔요' }], trayLabel: '흐름 카드' }, hints: ['먼저 알아보고, 정하고, 움직이는 흐름이에요. 몸이 움직이는 일은 정한 뒤에 일어나요.'], target: { order: ['see', 'decide', 'move'] }, difficulty: 0.15 },
          { prompt: '자동으로 물을 주는 화분 로봇의 흐름을 위에서부터 놓아 보세요.', toolOptions: { mode: 'order', cards: [{ id: 'sense', text: '흙이 말랐다고 알아봐요' }, { id: 'think', text: '물이 필요하다고 정해요' }, { id: 'pump', text: '펌프를 돌려 물을 줘요' }, { id: 'stop', text: '흙이 젖으면 멈춰요' }] }, hints: ['알아보기, 정하기, 움직이기, 다시 알아보고 멈추기의 흐름으로 이어져요.'], target: { order: ['sense', 'think', 'pump', 'stop'] }, difficulty: 0.3 },
          { prompt: '로봇이 일하는 흐름에 대한 알맞은 설명만 골라 보세요.', toolOptions: { mode: 'pick', topic: '알맞은 설명', cards: ['감지가 있어야 판단할 수 있어요', '움직임은 판단 뒤에 일어나요', '센서를 붙이기만 하면 로봇이 알아서 판단해요', '판단은 사람이 아니라 장치가 해요'] }, hints: ['감지한 정보가 있어야 판단하고, 판단한 뒤에 움직인다는 설명을 골라요. 스스로 모두 알아서 한다는 설명은 틀려요.'], target: { pick: ['감지가 있어야 판단할 수 있어요', '움직임은 판단 뒤에 일어나요', '판단은 사람이 아니라 장치가 해요'] }, difficulty: 0.4 },
        ],
      },
    ],
    exit: {
      teacher: '"청소 로봇에서 감지·판단·움직임을 하나씩 말해 볼까요?" 센서·제어 장치·바퀴를 각각 말하는지 듣는다. 출구 2번에서 사람 모양만 로봇이라고 고른 학생에게 "청소 로봇은 사람 모양이 아닌데 로봇인가요?"라고 되묻는다. 다음 시간에는 다른 로봇의 구조도 같은 눈으로 살펴본다고 예고한다.',
      items: [
        { type: 'tool', tool: 'mindmap', options: { topic: '청소 로봇', slots: ['감지', '움직임'], cards: ['먼지 센서', '솔'] }, prompt: '부품을 알맞은 가지에 넣어 보세요.', target: { sort: { 감지: ['먼지 센서'], 움직임: ['솔'] } }, difficulty: 0.1 },
        { type: 'choice', prompt: '로봇의 판단을 맡는 부분은 무엇인가요?', options: ['센서', '바퀴', '제어 장치'], answer: 2, difficulty: 0.2, explain: '제어 장치가 감지한 값을 보고 어떻게 움직일지 정해요.' },
        { type: 'short', prompt: '우리 생활에서 본 로봇 하나와 그 로봇의 감지·움직임을 쓰세요.' },
        { type: 'mood', prompt: '오늘 공부는 어땠나요?' },
      ],
    },
    ws: {
      title: '로봇의 구조 찾기',
      items: [
        { type: 'figure', wide: true, prompt: '가지마다 청소 로봇의 부품을 한 가지씩 써 넣으세요.', tool: 'mindmap', figures: [{ options: { topic: '청소 로봇', printCards: false, slots: ['감지', '판단', '움직임'], cards: ['보기'] }, caption: '' }], answer: '예: 감지 — 장애물 센서 / 판단 — 제어 장치 / 움직임 — 바퀴' },
        { type: 'choice', prompt: '로봇이라고 부를 수 있는 것에 ○ 하세요.', options: ['알아보고 정하고 움직이는 청소 로봇', '움직이지 않는 사람 모양 인형', '켜기만 하는 선풍기'], answer: '알아보고 정하고 움직이는 청소 로봇' },
        { type: 'table', prompt: '로봇과 하는 일을 쓰세요.', columns: ['로봇', '감지', '움직임'], cells: [['청소 로봇', '', ''], ['서빙 로봇', '', ''], ['', '', '']] },
        { type: 'short', prompt: '로봇이 대신하면 좋은 일 한 가지와 까닭을 쓰세요.' },
      ],
      easy: {
        note: '로봇은 감지하고 판단하고 움직여요. 모양이 사람 같은지는 상관없어요.',
        items: [
          { type: 'figure', wide: true, prompt: '가지에 청소 로봇의 부품을 하나씩 쓰세요.', tool: 'mindmap', figures: [{ options: { topic: '청소 로봇', printCards: false, slots: ['감지', '움직임'], cards: ['보기'] }, caption: '' }], answer: '예: 감지 — 센서 / 움직임 — 바퀴' },
          { type: 'choice', prompt: '움직임을 맡는 부품에 ○ 하세요.', options: ['바퀴', '센서'], answer: '바퀴' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '로봇은 감지, ___, 움직임으로 일해요.', answer: '판단' },
          { type: 'short', prompt: '생활에서 본 로봇을 쓰세요.' },
        ],
      },
    },
    diff: ['나누기에서 맞게 놓으면 초록 테두리가 생기고, 틀리면 까닭이 나와요.', '모두 놓은 뒤 확인을 눌러 스스로 고쳐요.', '장면 문장을 나누는 문항과 흐름을 모두 고르는 문항에 함정이 더 나와요.'],
    notes: '자주 보이는 어려움: ① 사람 모양을 한 기계만 로봇이라고 여긴다 → 감지·판단·움직임을 하는지로 가르게 한다. ② 센서를 붙이면 로봇이 알아서 판단한다고 생각한다 → 판단은 제어 장치가 정해진 규칙으로 한다고 짚는다. ③ 바퀴를 판단에 넣는다 → 몸이 움직이는 부분인지 정하는 부분인지 묻는다.',
  }));

  // ───────────────────────── 12차시 (practice) 다른 로봇의 구조도 같은 눈으로 ─────────────────────────
  L.push(lesson(12, '자동문·식당 로봇·잔디 로봇의 감지와 움직임 짝 지어 보기',
    '여러 로봇의 센서가 알아보는 것과 움직이는 부분을 짝 지어 로봇의 구조를 말하고, 감지에서 움직임까지의 흐름을 차례대로 놓을 수 있다.', ['[6실04-04]'], {
    ill: ['three different paper robots, a serving robot with a tray, a lawn mower robot on grass and a door with a sensor eye, each linked by dotted lines to their eyes and wheels', '로봇마다 눈과 몸이 달라요', 2],
    intro: {
      teacher: '"자동문은 다가가면 열려요. 자동문은 무엇으로 나를 알아볼까요?" 센서가 사람을 알아보는 장면을 떠올리게 한다. 시연 단추로 센서 카드와 알아보는 것이 이어지는 모습을 보여 주고 "로봇마다 알아보는 것이 달라서 센서도 달라요."라고 말한다. 센서 하나로 모든 것을 알아본다고 여기는 학생에게는 "소리를 알아보는 센서와 빛을 알아보는 센서가 같을까요?"라고 묻는다.',
      student: '자동문은 무엇으로 사람이 다가오는 것을 알아볼지 짝과 말해 봅시다.',
      demo: { tool: 'mindmap', options: { mode: 'match', topic: '센서', slots: [{ id: 'door', label: '자동문' }], cards: ['사람이 다가오는 것', '풀의 길이'], shuffle: false }, sequence: [{ match: { door: '사람이 다가오는 것' } }] },
    },
    acts: [
      {
        title: '활동 1. 로봇의 센서가 알아보는 것 이어 보기', tool: 'mindmap',
        teacher: '"이 센서는 빛, 소리, 거리, 접촉 가운데 무엇을 알아볼까요?" 센서 이름에서 힌트를 찾게 한다. 모든 센서가 카메라라고 생각하는 학생에게 "카메라 없이도 가까운지 먼지 알 수 있는 센서가 있을까요?"라고 묻는다.',
        task: '센서의 이름과 그 센서가 알아보는 것을 한 장씩 이어요.',
        levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
        items: [
          { prompt: '센서마다 알아보는 것을 한 장씩 이어 보세요.', toolOptions: { mode: 'match', topic: '센서와 알아보는 것', slots: [{ id: 'light', label: '빛 센서' }, { id: 'dist', label: '거리 센서' }, { id: 'sound', label: '소리 센서' }], cards: ['주변이 밝은지 어두운지', '앞 물체까지 얼마나 가까운지', '박수 소리가 났는지', '바닥이 젖었는지'] }, hints: ['센서 이름에 든 낱말이 알아보는 것과 이어져요. 이름에서 알아보는 대상을 찾아요.'], target: { match: { light: '주변이 밝은지 어두운지', dist: '앞 물체까지 얼마나 가까운지', sound: '박수 소리가 났는지' } }, difficulty: 0.2 },
          { prompt: '로봇마다 쓰는 센서를 한 장씩 이어 보세요.', toolOptions: { mode: 'match', topic: '로봇과 센서', slots: [{ id: 'door', label: '자동문' }, { id: 'serve', label: '식당 서빙 로봇' }, { id: 'light', label: '해가 지면 켜지는 정원등' }], cards: ['사람이 다가오는 것을 알아보는 센서', '테이블과 사람과의 거리를 재는 센서', '밝기를 알아보는 센서', '맛을 보는 센서'] }, hints: ['로봇이 일하는 곳에서 가장 먼저 알아봐야 할 것이 사람인지 거리인지 밝기인지 떠올려 이어요.'], target: { match: { door: '사람이 다가오는 것을 알아보는 센서', serve: '테이블과 사람과의 거리를 재는 센서', light: '밝기를 알아보는 센서' } }, difficulty: 0.3 },
          { prompt: '센서를 붙인다고 해서 알 수 없는 것을 골라 보세요.', toolOptions: { mode: 'pick', topic: '알 수 없는 것', cards: ['센서에 연결하지 않은 것', '사람의 속마음', '앞에 있는 물체까지의 거리', '주변 소리의 크기'] }, hints: ['센서는 정해진 값을 재는 장치예요. 재지 못하는 것은 무엇인지 생각해 골라요.'], target: { pick: ['센서에 연결하지 않은 것', '사람의 속마음'] }, difficulty: 0.35,
            predict: { q: '센서 하나로 모든 것을 알아볼 수 있을까요?', options: ['모두 알아볼 수 있어요', '센서마다 알아보는 것이 달라요', '잘 모르겠어요'], answer: 1 },
            conclude: '센서는 하나로 모든 것을 알아보지 못해요. 알아보려는 것에 맞는 센서를 골라야 해요.' },
        ],
      },
      {
        title: '활동 2. 여러 로봇의 움직이는 부분 나누기', tool: 'mindmap',
        teacher: '"이 로봇이 움직이는 부분은 바퀴인가요, 팔인가요, 날개인가요?" 로봇마다 움직이는 부분이 다르다는 점을 말하게 한다. 모두 바퀴로 움직인다고 생각하는 학생에게 "공장에서 물건을 집는 로봇은 무엇을 움직이나요?"라고 묻는다.',
        task: '로봇의 움직이는 부분을 바퀴·팔·그 밖의 부분으로 나누어요.',
        levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
        items: [
          { prompt: '로봇이 움직이는 부분을 바퀴·팔·솔로 나누어 보세요.', toolOptions: { topic: '움직이는 부분', slots: ['바퀴', '팔', '솔'], cards: ['청소 로봇의 앞 바퀴', '공장 로봇의 집게 팔', '청소 로봇의 모서리 솔', '서빙 로봇의 바퀴', '조립 로봇의 관절 팔', '잔디 로봇의 칼날 솔'] }, hints: ['로봇이 이동하는 데 쓰는 부분, 물건을 집는 부분, 바닥이나 풀에 닿아 일하는 부분으로 나누어요.'], target: { sort: { 바퀴: ['청소 로봇의 앞 바퀴', '서빙 로봇의 바퀴'], 팔: ['공장 로봇의 집게 팔', '조립 로봇의 관절 팔'], 솔: ['청소 로봇의 모서리 솔', '잔디 로봇의 칼날 솔'] } }, difficulty: 0.3 },
          { prompt: '로봇마다 움직이는 부분을 한 장씩 이어 보세요.', toolOptions: { mode: 'match', topic: '움직이는 부분', slots: [{ id: 'drone', label: '하늘을 나는 촬영 로봇' }, { id: 'arm', label: '공장의 용접 로봇' }, { id: 'walk', label: '다리로 걷는 로봇' }], cards: ['날개 프로펠러', '관절이 달린 긴 팔', '다리 관절', '바퀴'] }, hints: ['하늘을 나는 로봇, 팔로 일하는 로봇, 걷는 로봇이 움직이는 부분을 떠올려 이어요.'], target: { match: { drone: '날개 프로펠러', arm: '관절이 달린 긴 팔', walk: '다리 관절' } }, difficulty: 0.4 },
          { prompt: '움직이는 부분에 대한 알맞은 설명만 골라 보세요.', toolOptions: { mode: 'pick', topic: '알맞은 설명', cards: ['로봇마다 움직이는 부분이 달라요', '모든 로봇은 바퀴로 움직여요', '움직이는 부분은 판단이 정해요', '움직이는 부분이 없어도 로봇이에요'] }, hints: ['움직이는 부분이 일의 종류에 따라 달라지고, 그 움직임은 판단 뒤에 일어난다는 설명을 골라요.'], target: { pick: ['로봇마다 움직이는 부분이 달라요', '움직이는 부분은 판단이 정해요'] }, difficulty: 0.35 },
        ],
      },
      {
        title: '활동 3. 로봇이 일하는 흐름 놓아 보기', tool: 'mindmap',
        teacher: '"자동문의 센서가 사람을 알아본 다음에는 무엇이 일어나나요?" 센서→판단→움직임의 흐름을 말하게 한다. 한 단계를 건너뛰는 학생에게 "그 사이에 무엇이 정해졌나요?"라고 묻는다.',
        task: '로봇이 일하는 흐름을 알맞은 차례로 놓아요.',
        items: [
          { prompt: '자동문이 열리는 흐름을 위에서부터 놓아 보세요.', toolOptions: { mode: 'order', cards: [{ id: 'near', text: '사람이 다가오는 것을 센서가 알아봐요' }, { id: 'open', text: '문을 열기로 정해요' }, { id: 'motor', text: '모터가 문을 옆으로 밀어요' }, { id: 'close', text: '사람이 지나가면 문을 닫아요' }] }, hints: ['알아보고 정하고 움직이고 닫는 흐름이에요. 닫는 일은 사람이 지나간 뒤에 일어나요.'], target: { order: ['near', 'open', 'motor', 'close'] }, difficulty: 0.25 },
          { prompt: '식당 서빙 로봇이 음식을 나르는 흐름을 위에서부터 놓아 보세요.', toolOptions: { mode: 'order', cards: [{ id: 'order', text: '주방에서 음식이 실렸다고 알아봐요' }, { id: 'goal', text: '가야 할 테이블 번호를 정해요' }, { id: 'drive', text: '바퀴로 테이블 앞까지 가요' }, { id: 'stop', text: '앞에 사람이 있는지 보고 멈춰요' }, { id: 'arrive', text: '도착했다고 알려요' }] }, hints: ['실린 것을 알아보고 갈 곳을 정한 뒤 움직이며 장애물을 살피고 도착하는 순서를 떠올려요.'], target: { order: ['order', 'goal', 'drive', 'stop', 'arrive'] }, difficulty: 0.4 },
          { prompt: '잔디 로봇이 일하는 흐름을 위에서부터 놓아 보세요.', toolOptions: { mode: 'order', cards: [{ id: 'long', text: '풀이 길게 자랐다고 알아봐요' }, { id: 'plan', text: '아직 깎지 않은 곳을 정해요' }, { id: 'cut', text: '바퀴로 이동하며 풀을 깎아요' }, { id: 'home', text: '배터리가 줄면 충전대로 돌아가요' }] }, hints: ['풀의 길이를 알아본 뒤 어디를 깎을지 정하고, 움직여 깎고, 마지막에 돌아가는 순서를 생각해요.'], target: { order: ['long', 'plan', 'cut', 'home'] }, difficulty: 0.35 },
        ],
      },
    ],
    exit: {
      teacher: '"오늘 만난 로봇 중 하나를 골라 센서와 움직이는 부분을 말해 볼까요?" 센서가 알아보는 것과 움직이는 부분이 짝지어지는지 듣는다. 출구 2번에서 모든 로봇이 바퀴로 움직인다고 고른 학생에게 "공장의 팔 로봇은 무엇으로 움직이나요?"라고 되묻는다. 다음 시간에는 교육용 로봇을 안전 규칙에 따라 켜고 직접 움직여 본다고 예고한다.',
      items: [
        { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '센서와 알아보는 것', slots: [{ id: 'light', label: '빛 센서' }, { id: 'sound', label: '소리 센서' }], cards: ['밝기', '소리의 크기'] }, prompt: '센서가 알아보는 것을 이어 보세요.', target: { match: { light: '밝기', sound: '소리의 크기' } }, difficulty: 0.15 },
        { type: 'choice', prompt: '로봇이 움직이기 전에 거치는 단계는 무엇인가요?', options: ['감지하고 판단해요', '곧바로 움직여요', '움직이고 판단해요'], answer: 0, difficulty: 0.2, explain: '로봇은 먼저 감지하고 판단한 뒤에 움직여요.' },
        { type: 'short', prompt: '내가 고른 로봇의 센서와 움직이는 부분을 쓰세요.' },
        { type: 'mood', prompt: '오늘 공부는 어땠나요?' },
      ],
    },
    ws: {
      title: '여러 로봇의 센서와 움직임',
      items: [
        { type: 'figure', wide: true, prompt: '가지마다 로봇의 부분을 한 가지씩 써 넣으세요.', tool: 'mindmap', figures: [{ options: { topic: '서빙 로봇', printCards: false, slots: ['감지', '판단', '움직임'], cards: ['보기'] }, caption: '' }], answer: '예: 감지 — 거리 센서 / 판단 — 제어 장치 / 움직임 — 바퀴' },
        { type: 'choice', prompt: '밝기를 알아보는 센서에 ○ 하세요.', options: ['빛 센서', '소리 센서', '거리 센서'], answer: '빛 센서' },
        { type: 'table', prompt: '로봇과 센서, 움직이는 부분을 쓰세요.', columns: ['로봇', '센서', '움직이는 부분'], cells: [['자동문', '', ''], ['잔디 로봇', '', ''], ['', '', '']] },
        { type: 'short', prompt: '센서를 고르는 기준을 한 문장으로 쓰세요.' },
      ],
      easy: {
        note: '센서는 알아보려는 것에 맞게 골라요. 움직이는 부분은 로봇마다 달라요.',
        items: [
          { type: 'figure', wide: true, prompt: '가지에 하나씩 쓰세요.', tool: 'mindmap', figures: [{ options: { topic: '자동문', printCards: false, slots: ['감지', '움직임'], cards: ['보기'] }, caption: '' }], answer: '예: 감지 — 사람 센서 / 움직임 — 모터' },
          { type: 'choice', prompt: '소리를 알아보는 센서에 ○ 하세요.', options: ['소리 센서', '빛 센서'], answer: '소리 센서' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '센서는 알아보려는 ___에 맞게 골라요.', answer: '것' },
          { type: 'short', prompt: '내가 아는 센서를 쓰세요.' },
        ],
      },
    },
    diff: ['이어 보기에서 맞게 놓으면 초록 테두리가 생기고, 틀리면 까닭이 나와요.', '모두 놓은 뒤 확인을 눌러 스스로 고쳐요.', '카드 수가 늘고, 움직이는 부분이 다른 로봇과 함정 설명이 나와요.'],
    notes: '자주 보이는 어려움: ① 모든 로봇이 바퀴로 움직인다고 여긴다 → 팔·날개·다리로 움직이는 로봇을 보여 준다. ② 센서 하나로 모든 것을 알아본다고 생각한다 → 센서마다 알아보는 것이 다르다고 짚는다. ③ 감지에서 곧바로 움직임으로 간다고 말한다 → 그 사이에 판단이 있음을 흐름으로 확인한다.',
  }));

  // ───────────────────────── 13차시 (core) 교육용 로봇을 안전하게 켜고 값 바꾸기 ─────────────────────────
  L.push(lesson(13, '교육용 로봇을 안전 규칙대로 켜고 어긋난 값을 바꾸어 다시 움직이기',
    '교육용 로봇을 안전 규칙에 따라 켜서 정해진 동작을 시키고, 동작이 어긋난 곳을 찾아 값을 바꾸어 다시 움직이게 할 수 있다.', ['[6실04-04]'], {
    ill: ['a classroom desk with a small educational robot on a track mat, a tidy cable bundle, a safety checklist card and a child changing a number on a tablet', '안전하게 켜고 값을 바꿔요', 0],
    intro: {
      teacher: '"로봇을 책상 모서리에서 움직이면 어떤 일이 생길까요?" 떨어지거나 부딪히는 일을 말하게 한다. 시연 단추로 거북이가 깃발에 닿는 모습을 보여 주고 "로봇이 뜻대로 안 움직이면 부서졌다고 생각하지 말고 명령의 값을 먼저 살펴요."라고 말한다. 뜻대로 움직이지 않으면 고장이라고만 보는 학생에게는 "시킨 값을 다시 읽어 볼까요? 한 칸이 모자라지는 않았나요?"라고 묻는다.',
      student: '로봇이 뜻대로 움직이지 않을 때 먼저 확인할 것이 무엇일지 짝과 말해 봅시다.',
      demo: { tool: 'block-coding', options: { cols: 5, rows: 3, start: { x: 0, y: 1, dir: 'E' }, goal: { x: 4, y: 1 } }, sequence: [{ reach: true }] },
    },
    safety: ['로봇을 책상 가장자리에서 움직이지 않고, 움직이는 동안 손을 바퀴 가까이에 두지 않아요.', '전원은 선생님이 알려 준 순서대로 켜고 끄고, 전선과 충전기는 젖은 손으로 만지지 않아요.', '배터리가 뜨거워지거나 이상한 냄새가 나면 바로 선생님께 알려요.'],
    acts: [
      {
        title: '활동 1. 안전 규칙을 지켜 켜는 차례와 점검', tool: 'kitchen',
        teacher: '"로봇을 켜기 전에 책상 위에 치워야 할 것은 무엇일까요?" 움직일 공간과 전선 정리를 말하게 한다. 규칙은 알지만 급해서 건너뛰는 학생에게 "다치거나 로봇이 떨어지면 누가 도와줄 수 있을까요?"라고 묻는다.',
        task: '카드를 읽고 로봇을 켜는 차례를 놓고, 안전하게 하는 행동만 표시해요.',
        levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
        items: [
          { prompt: '교육용 로봇을 켜는 차례를 위에서부터 놓아 보세요.', toolOptions: { mode: 'order', cards: [{ id: 'clear', text: '책상 위를 치워 움직일 자리를 만들어요' }, { id: 'place', text: '로봇을 평평한 곳에 놓아요' }, { id: 'power', text: '선생님이 알려 준 순서로 전원을 켜요' }, { id: 'test', text: '손을 떼고 가까이서 지켜보며 움직여요' }] }, hints: ['움직일 자리를 먼저 만들어야 해요. 켠 뒤에는 손을 떼고 지켜보는 순서를 생각해요.'], target: { order: ['clear', 'place', 'power', 'test'] }, difficulty: 0.2 },
          { prompt: '로봇을 안전하게 쓰는 행동만 표시해 보세요.', toolOptions: { mode: 'checklist', title: '안전한 행동', items: [{ id: 'edge', text: '책상 가장자리 먼 곳에서 움직여요' }, { id: 'hand', text: '움직이는 동안 바퀴에 손을 대요' }, { id: 'wet', text: '젖은 손으로 충전기를 만져요' }, { id: 'tell', text: '이상한 냄새가 나면 선생님께 알려요' }] }, hints: ['다치지 않고 로봇도 지키는 행동만 표시해요. 손이 닿으면 다칠 수 있는 곳이나 물기는 위험해요.'], target: { checklist: ['edge', 'tell'] }, difficulty: 0.25 },
          { prompt: '로봇을 끄고 정리하는 차례를 위에서부터 놓아 보세요.', toolOptions: { mode: 'order', cards: [{ id: 'stop', text: '움직임을 멈추고 전원을 꺼요' }, { id: 'wire', text: '전선을 뽑아 감아 둬요' }, { id: 'box', text: '로봇을 상자에 넣어요' }, { id: 'hands', text: '손을 씻어요' }] }, hints: ['전원을 끈 뒤에야 선을 정리해요. 정리가 끝나면 손을 씻는 순서를 생각해요.'], target: { order: ['stop', 'wire', 'box', 'hands'] }, difficulty: 0.3 },
        ],
      },
      {
        title: '활동 2. 정해진 동작을 시켜 목표에 닿게 하기', tool: 'block-coding',
        teacher: '"로봇을 실제로 움직이기 전에 화면에서 먼저 시험하면 어떤 점이 좋을까요?" 실수를 안전하게 찾을 수 있음을 말하게 한다. 실행 결과가 뜻대로 안 나오는 학생에게 "명령의 값 중에서 처음으로 엉뚱하게 움직이는 곳은 어디인가요?"라고 묻는다.',
        task: '로봇 판 위에서 정해진 동작을 시켜 목표에 닿게 해요. 안 되면 처음으로 돌아가 값을 다시 읽어요.',
        levels: { easy: { blocks: ['fwd', 'left', 'right'] }, base: { blocks: ['fwd', 'left', 'right'] }, challenge: { blocks: ['fwd', 'left', 'right', 'rep'] } },
        items: [
          { prompt: '로봇이 위쪽에서 시작해 아래로 내려와 오른쪽 끝에 닿도록 동작을 시켜 보세요.', toolOptions: { cols: 5, rows: 3, start: { x: 0, y: 0, dir: 'S' }, goal: { x: 4, y: 2 } }, target: { reach: true }, difficulty: 0.25 },
          { prompt: '바위 하나를 피해 목표까지 가는 동작을 시켜 보세요.', toolOptions: { cols: 5, rows: 3, start: { x: 0, y: 2, dir: 'E' }, goal: { x: 4, y: 0 }, rocks: [[2, 2]] }, target: { reach: true }, difficulty: 0.35 },
          { prompt: '별 하나를 모아서 목표까지 가는 동작을 블록 7개 이하로 시켜 보세요.', toolOptions: { cols: 6, rows: 3, start: { x: 0, y: 1, dir: 'E' }, goal: { x: 5, y: 2 }, stars: [[3, 1]], blocks: ['fwd', 'left', 'right', 'rep'] }, target: { reach: true, stars: true, maxBlocks: 7 }, difficulty: 0.4 },
        ],
      },
      {
        title: '활동 3. 어긋난 값을 찾아 한 군데씩 바꾸기', tool: 'block-coding',
        teacher: '"반복 횟수를 한 번만 바꾸어 다시 실행해 볼까요?" 한 군데씩 바꾸고 바로 실행하는 습관을 강조한다. 값을 모두 바꾸려는 학생에게 "무엇이 결과를 바꾸었는지 알 수 있나요?"라고 묻는다.',
        task: '처음 프로그램을 실행해 어긋난 값을 찾고, 블록 하나만 바꾸어 목표에 닿아요.',
        levels: { easy: { blocks: ['fwd', 'left', 'right', 'rep'] }, base: { blocks: ['fwd', 'left', 'right', 'rep'] }, challenge: { blocks: ['fwd', 'left', 'right', 'rep'] } },
        items: [
          { prompt: '로봇이 목표 앞에서 한 칸 모자라게 멈춰요. 반복 횟수 하나만 바꾸어 목표에 닿게 해요.', toolOptions: { cols: 6, rows: 3, start: { x: 0, y: 0, dir: 'E' }, goal: { x: 5, y: 2 }, blocks: ['fwd', 'left', 'right', 'rep'] }, state: { program: ['rep:4', 'fwd', 'end', 'right', 'fwd', 'fwd'] }, target: { reach: true, maxEdits: 1 }, difficulty: 0.4 },
          { prompt: '돌기 방향이 틀려 로봇이 판 밖으로 나가요. 블록 하나만 바꾸어 목표에 닿게 해요.', toolOptions: { cols: 5, rows: 4, start: { x: 4, y: 3, dir: 'W' }, goal: { x: 0, y: 0 }, blocks: ['fwd', 'left', 'right', 'rep'] }, state: { program: ['rep:4', 'fwd', 'end', 'left', 'rep:3', 'fwd', 'end'] }, target: { reach: true, maxEdits: 1 }, difficulty: 0.45 },
          { prompt: '앞으로 가는 블록이 하나 빠졌어요. 한 블록만 보태 바위를 돌아 목표에 닿게 해요.', toolOptions: { cols: 5, rows: 3, start: { x: 0, y: 1, dir: 'E' }, goal: { x: 4, y: 1 }, rocks: [[2, 1]], blocks: ['fwd', 'left', 'right', 'rep'] }, state: { program: ['fwd', 'left', 'fwd', 'right', 'fwd', 'right', 'fwd', 'left', 'fwd'] }, target: { reach: true, maxEdits: 1 }, difficulty: 0.5,
            conclude: '로봇이 뜻대로 안 움직이면 고장이라 여기기 전에 명령의 값을 한 군데씩 살피고 고쳐요.' },
        ],
      },
    ],
    exit: {
      teacher: '"오늘 로봇을 안전하게 쓰기 위해 가장 중요한 규칙은 무엇이었나요?" 움직이는 동안 바퀴에 손대지 않는 것, 책상 가장자리에서 쓰지 않는 것을 말하는지 듣는다. 출구 1번에서 값을 여러 개 바꾼 학생에게 "한 군데만 바꾸어도 목표에 닿을 수 있었나요?"라고 되묻는다. 다음 시간에는 로봇의 종류와 작동 원리를 살펴본다고 예고한다.',
      items: [
        { type: 'tool', tool: 'block-coding', options: { cols: 5, rows: 3, start: { x: 0, y: 1, dir: 'E' }, goal: { x: 3, y: 1 }, blocks: ['fwd', 'left', 'right'] }, state: { program: ['fwd', 'fwd'] }, prompt: '로봇이 목표에 닿지 않아요. 블록 하나만 보태 보세요.', target: { reach: true, maxEdits: 1 }, difficulty: 0.2 },
        { type: 'choice', prompt: '로봇이 뜻대로 움직이지 않을 때 가장 알맞은 행동은 무엇인가요?', options: ['고장이라 생각하고 던져 둬요', '명령의 값을 한 군데씩 살펴 고쳐요', '값을 모두 바꿔요'], answer: 1, difficulty: 0.2, explain: '값을 한 군데씩 바꾸어 다시 실행하면 원인을 알 수 있어요.' },
        { type: 'short', prompt: '로봇을 안전하게 쓰기 위한 규칙 한 가지를 쓰세요.' },
        { type: 'mood', prompt: '오늘 공부는 어땠나요?' },
      ],
    },
    ws: {
      title: '로봇 안전 규칙과 값 고치기',
      items: [
        { type: 'figure', prompt: '프로그램을 따라가 로봇이 멈추는 칸에 ○ 하세요.', tool: 'block-coding', options: { mode: 'trace', cols: 6, rows: 4, start: { x: 0, y: 3, dir: 'E' }, program: ['rep:3', 'fwd', 'end', 'left', 'fwd', 'fwd'], printProgram: true }, figures: [{ state: {}, caption: '반복 3번 [앞으로] → 왼쪽 돌기 → 앞으로 → 앞으로' }], answer: '(3, 1)' },
        { type: 'choice', prompt: '로봇을 안전하게 쓰는 행동에 ○ 하세요.', options: ['책상 가장자리 먼 곳에서 움직여요', '움직이는 바퀴에 손을 대요', '젖은 손으로 충전기를 만져요'], answer: '책상 가장자리 먼 곳에서 움직여요' },
        { type: 'table', prompt: '값을 바꾼 기록을 쓰세요.', columns: ['어긋난 모습', '바꾼 값', '다시 실행한 결과'], cells: [['', '', ''], ['', '', '']] },
        { type: 'short', prompt: '로봇이 뜻대로 안 움직일 때 먼저 확인할 것을 쓰세요.' },
      ],
      easy: {
        note: '로봇은 안전 규칙대로 켜고, 안 되면 값을 한 군데씩 바꾸어 다시 해 봐요.',
        items: [
          { type: 'figure', prompt: '프로그램을 따라가 멈추는 칸에 ○ 하세요.', tool: 'block-coding', options: { mode: 'trace', cols: 5, rows: 3, start: { x: 0, y: 1, dir: 'E' }, program: ['fwd', 'fwd', 'left', 'fwd'], printProgram: true }, figures: [{ state: {}, caption: '앞으로 → 앞으로 → 왼쪽 돌기 → 앞으로' }], answer: '(2, 0)' },
          { type: 'choice', prompt: '로봇을 쓸 때 알맞은 행동에 ○ 하세요.', options: ['움직이는 동안 손을 떼요', '바퀴에 손을 대요'], answer: '움직이는 동안 손을 떼요' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '로봇이 안 움직이면 명령의 ___을 먼저 살펴요.', answer: '값' },
          { type: 'short', prompt: '로봇을 안전하게 쓰는 규칙을 쓰세요.' },
        ],
      },
    },
    diff: ['차례 놓기에서 맞게 놓으면 초록 테두리가 생기고, 거북이 문제는 앞으로·돌기 블록만 써요.', '모두 놓은 뒤 확인을 눌러 스스로 고쳐요.', '거북이 문제에 반복 블록과 블록 수 제한이 더해지고 값 고치기에 반복 횟수가 틀린 프로그램이 나와요.'],
    notes: '자주 보이는 어려움: ① 뜻대로 안 움직이면 고장이라고 여긴다 → 명령의 값을 한 군데씩 살피게 한다. ② 값을 여러 개 한꺼번에 바꾸어 원인을 모른다 → 하나만 바꾸고 바로 실행하게 한다. ③ 안전 규칙을 알면서 급하게 건너뛴다 → 켜기 전 점검 표시를 먼저 하게 한다.',
  }));

  // ───────────────────────── 14차시 (core) 로봇을 쓰임에 따라 갈래로 ─────────────────────────
  L.push(lesson(14, '공장·병원·집에서 일하는 로봇을 쓰임에 따라 갈래로 나누기',
    '로봇을 쓰임에 따라 산업·의료·생활 갈래로 나누어 특징을 말하고, 같은 갈래 안에서도 움직이는 방식이 다른 경우를 찾을 수 있다.', ['[6실04-05]'], {
    ill: ['three side-by-side rooms of a factory, a hospital and a home each with a different paper robot working, linked by a long ribbon with a small robot on it', '일터에 따라 로봇이 달라요', 1],
    intro: {
      teacher: '"공장에서 일하는 로봇과 집에서 일하는 로봇은 닮았을까요, 다를까요?" 일하는 곳이 달라 로봇의 모양과 하는 일이 다르다는 점을 말하게 한다. 시연 단추로 로봇 카드가 \'산업\'·\'생활\' 가지에 들어가는 모습을 보여 주고 "쓰임에 따라 로봇을 갈래로 묶으면 특징이 보여요."라고 말한다. 로봇은 모두 같은 방식으로 움직인다고 여기는 학생에게는 "공장 팔 로봇과 집 청소 로봇은 어떻게 움직이나요?"라고 묻는다.',
      student: '공장에서 일하는 로봇과 집에서 일하는 로봇이 닮았을지 달랐을지 짝과 말해 봅시다.',
      demo: { tool: 'mindmap', options: { topic: '로봇의 쓰임', slots: ['산업', '생활'], cards: ['자동차 조립 로봇', '청소 로봇'], shuffle: false }, sequence: [{ sort: { 산업: ['자동차 조립 로봇'], 생활: ['청소 로봇'] } }] },
    },
    acts: [
      {
        title: '활동 1. 로봇을 산업·의료·생활 갈래로 나누기', tool: 'mindmap',
        teacher: '"이 로봇은 누구를 위해 어디에서 일하나요?" 일하는 곳과 도와주는 사람을 보고 나누게 한다. 병원에서 일하지만 청소만 하는 로봇을 의료에 넣는 학생에게 "수술과 치료를 직접 돕는 로봇인가요, 병원 바닥을 닦는 로봇인가요?"라고 묻는다.',
        task: '로봇 카드를 읽고 산업·의료·생활 중 쓰임에 알맞은 가지에 나누어 넣어요.',
        levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
        items: [
          { prompt: '로봇을 쓰임에 따라 산업·의료·생활 가지에 나누어 보세요.', toolOptions: { topic: '로봇의 쓰임', slots: ['산업', '의료', '생활'], cards: ['자동차 조립 로봇', '창고에서 상자를 나르는 로봇', '수술을 돕는 로봇', '걷기 연습을 돕는 재활 로봇', '청소 로봇', '식당 서빙 로봇'] }, hints: ['물건을 만들고 나르는 일터, 사람의 몸을 치료하고 돕는 곳, 집과 가게에서 도와주는 곳으로 나누어요.'], target: { sort: { 산업: ['자동차 조립 로봇', '창고에서 상자를 나르는 로봇'], 의료: ['수술을 돕는 로봇', '걷기 연습을 돕는 재활 로봇'], 생활: ['청소 로봇', '식당 서빙 로봇'] } }, difficulty: 0.2 },
          { prompt: '쓰임이 헷갈리는 로봇을 나누어 보세요. 일하는 곳과 하는 일을 함께 봐요.', toolOptions: { topic: '헷갈리는 로봇', slots: ['산업', '의료', '생활'], cards: ['병원 바닥을 닦는 청소 로봇', '약을 정확하게 섞는 약국 로봇', '공장에서 용접하는 로봇', '집에서 안내하는 말동무 로봇'] }, hints: ['일하는 곳이 병원이어도 하는 일이 치료와 이어지는지 따져요. 병원 청소는 생활 쪽이에요.'], target: { sort: { 산업: ['공장에서 용접하는 로봇'], 의료: ['약을 정확하게 섞는 약국 로봇'], 생활: ['병원 바닥을 닦는 청소 로봇', '집에서 안내하는 말동무 로봇'] } }, difficulty: 0.4 },
          { prompt: '로봇이 하는 일과 그 일을 하는 갈래를 한 장씩 이어 보세요.', toolOptions: { mode: 'match', topic: '일과 갈래', slots: [{ id: 'ind', label: '같은 동작을 정확하게 되풀이해요' }, { id: 'med', label: '사람 몸 가까이에서 조심스럽게 일해요' }, { id: 'liv', label: '집이나 가게에서 사람 곁을 도와요' }], cards: ['산업 로봇', '의료 로봇', '생활 로봇', '탐사 로봇'] }, hints: ['정확한 반복은 어느 일터에서 가장 필요한지, 몸 가까이 일하는 로봇은 무엇인지 떠올려 이어요.'], target: { match: { ind: '산업 로봇', med: '의료 로봇', liv: '생활 로봇' } }, difficulty: 0.3,
            predict: { q: '로봇은 일하는 곳에 따라 모양과 하는 일이 달라질까요?', options: ['모두 똑같아요', '달라져요', '잘 모르겠어요'], answer: 1 },
            conclude: '로봇은 일하는 곳과 도와주는 일에 따라 모양과 움직임이 달라서 쓰임으로 갈래를 나눌 수 있어요.' },
        ],
      },
      {
        title: '활동 2. 갈래마다 다른 로봇의 특징 가려내기', tool: 'mindmap',
        teacher: '"산업 로봇에 가장 필요한 것은 무엇일까요? 의료 로봇은요?" 정확함, 안전, 가까운 도움처럼 갈래마다 중요한 특징이 다르다는 점을 말하게 한다. 모든 갈래의 특징이 같다고 말하는 학생에게 "수술 로봇이 실수하면 어떻게 될까요?"라고 묻는다.',
        task: '갈래의 특징 문장을 읽고 알맞은 갈래 가지에 나누어 넣어요.',
        levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
        items: [
          { prompt: '특징 문장을 산업·의료·생활 가지에 나누어 보세요.', toolOptions: { topic: '갈래의 특징', slots: ['산업', '의료', '생활'], cards: ['무거운 물건도 지치지 않고 옮겨요', '아주 작은 움직임까지 정확해야 해요', '사람 곁에서 안전하게 움직여야 해요', '가정이나 가게에서 쓰기 편해야 해요', '위험한 일터를 대신해요', '사용자의 말을 알아들어야 해요'] }, hints: ['일터가 공장이면 힘과 반복, 병원이면 정확함과 안전, 집이면 사람 곁에서 편하게라는 특징이 떠올라요.'], target: { sort: { 산업: ['무거운 물건도 지치지 않고 옮겨요', '위험한 일터를 대신해요'], 의료: ['아주 작은 움직임까지 정확해야 해요', '사람 곁에서 안전하게 움직여야 해요'], 생활: ['가정이나 가게에서 쓰기 편해야 해요', '사용자의 말을 알아들어야 해요'] } }, difficulty: 0.35 },
          { prompt: '의료 로봇에게 꼭 필요한 특징만 골라 보세요.', toolOptions: { mode: 'pick', topic: '의료 로봇의 특징', cards: ['움직임이 매우 정확해요', '소독하기 쉬운 재료를 써요', '속도가 가장 빠르면 돼요', '위험한 상황에서 바로 멈춰요'] }, hints: ['사람의 몸을 다루는 일이므로 정확하고 깨끗하고 안전한 특징이 필요해요.'], target: { pick: ['움직임이 매우 정확해요', '소독하기 쉬운 재료를 써요', '위험한 상황에서 바로 멈춰요'] }, difficulty: 0.3 },
          { prompt: '산업 로봇을 쓰면 좋은 점만 골라 보세요.', toolOptions: { mode: 'pick', topic: '산업 로봇의 좋은 점', cards: ['같은 일을 정확하게 되풀이해요', '사람에게 위험한 일을 대신해요', '언제나 사람보다 느려요', '일하는 사람의 일자리를 모두 없애요'] }, hints: ['정확한 반복과 위험한 일의 대신이 좋은 점이에요. 근거 없이 나쁘다고 말한 것은 빼요.'], target: { pick: ['같은 일을 정확하게 되풀이해요', '사람에게 위험한 일을 대신해요'] }, difficulty: 0.35 },
        ],
      },
      {
        title: '활동 3. 같은 갈래 안에서 움직임이 다른 로봇 견주기', tool: 'mindmap',
        teacher: '"같은 생활 로봇인데 청소 로봇은 바퀴로, 반려 로봇은 다리로 움직여요. 왜 다를까요?" 하는 일에 알맞게 움직이는 방식이 달라진다는 점을 말하게 한다. 같은 갈래면 같은 방식으로 움직인다고 말하는 학생에게 "바닥을 닦는 일과 걸어 다니는 일을 같은 몸으로 할 수 있을까요?"라고 묻는다.',
        task: '로봇마다 움직이는 방식을 한 장씩 이어 보고, 같은 갈래 안에서도 방식이 다름을 확인해요.',
        items: [
          { prompt: '로봇마다 움직이는 방식을 한 장씩 이어 보세요.', toolOptions: { mode: 'match', topic: '움직이는 방식', slots: [{ id: 'arm', label: '자동차 조립 로봇' }, { id: 'agv', label: '창고 운반 로봇' }, { id: 'drone', label: '배달 드론' }], cards: ['관절이 있는 긴 팔로 움직여요', '바닥을 바퀴로 굴러가요', '프로펠러로 날아가요', '다리로 걸어요'] }, hints: ['로봇이 일하는 장소에서 어떻게 움직여야 일을 할 수 있는지 떠올려 방식을 이어요.'], target: { match: { arm: '관절이 있는 긴 팔로 움직여요', agv: '바닥을 바퀴로 굴러가요', drone: '프로펠러로 날아가요' } }, difficulty: 0.25 },
          { prompt: '같은 생활 로봇인데 움직이는 방식이 다른 두 로봇을 골라 보세요.', toolOptions: { mode: 'pick', topic: '방식이 다른 둘', cards: ['바퀴로 다니는 청소 로봇', '다리로 걷는 반려 로봇', '바퀴로 다니는 서빙 로봇', '바퀴로 다니는 안내 로봇'] }, hints: ['모두 생활 로봇이에요. 움직이는 방식이 나머지와 다른 하나를 짝으로 골라요.'], target: { pick: ['바퀴로 다니는 청소 로봇', '다리로 걷는 반려 로봇'] }, difficulty: 0.4 },
          { prompt: '움직이는 방식이 일에 알맞은 까닭을 이어 보세요.', toolOptions: { mode: 'match', topic: '방식의 까닭', slots: [{ id: 'wheel', label: '바퀴로 다니는 청소 로봇' }, { id: 'leg', label: '다리로 걷는 탐사 로봇' }, { id: 'arm', label: '팔로 움직이는 조립 로봇' }], cards: ['평평한 바닥을 빠르게 다니기 좋아요', '울퉁불퉁한 땅도 오르내릴 수 있어요', '정해진 자리에서 정확하게 집을 수 있어요', '모든 곳에서 같은 방식이 좋아요'] }, hints: ['움직이는 방식이 일하는 바닥과 하는 일에 어떻게 알맞은지 따져 이어요.'], target: { match: { wheel: '평평한 바닥을 빠르게 다니기 좋아요', leg: '울퉁불퉁한 땅도 오르내릴 수 있어요', arm: '정해진 자리에서 정확하게 집을 수 있어요' } }, difficulty: 0.45 },
        ],
      },
    ],
    exit: {
      teacher: '"오늘 같은 갈래인데 움직임이 다른 로봇을 하나 말해 볼까요?" 청소 로봇과 반려 로봇처럼 두 로봇을 견주는지 듣는다. 출구 2번에서 \'모두 바퀴로 움직인다\'를 고른 학생에게 "산을 오르는 로봇도 바퀴일까요?"라고 되묻는다. 다음 시간에는 다른 분야의 로봇도 갈래로 나누어 견준다고 예고한다.',
      items: [
        { type: 'tool', tool: 'mindmap', options: { topic: '로봇의 쓰임', slots: ['산업', '의료', '생활'], cards: ['용접 로봇', '재활 로봇', '말동무 로봇'] }, prompt: '로봇을 알맞은 갈래에 넣어 보세요.', target: { sort: { 산업: ['용접 로봇'], 의료: ['재활 로봇'], 생활: ['말동무 로봇'] } }, difficulty: 0.15 },
        { type: 'choice', prompt: '같은 갈래의 로봇에 대한 설명으로 알맞은 것은 무엇인가요?', options: ['모두 같은 방식으로 움직여요', '움직이는 방식이 다를 수 있어요', '움직이는 로봇은 없어요'], answer: 1, difficulty: 0.2, explain: '같은 생활 로봇도 청소 로봇은 바퀴, 반려 로봇은 다리처럼 방식이 다를 수 있어요.' },
        { type: 'short', prompt: '내가 알고 있는 로봇의 갈래와 움직이는 방식을 쓰세요.' },
        { type: 'mood', prompt: '오늘 공부는 어땠나요?' },
      ],
    },
    ws: {
      title: '로봇의 쓰임과 움직임',
      items: [
        { type: 'figure', wide: true, prompt: '가지마다 로봇을 한 가지씩 써 넣으세요.', tool: 'mindmap', figures: [{ options: { topic: '로봇의 쓰임', printCards: false, slots: ['산업', '의료', '생활'], cards: ['보기'] }, caption: '' }], answer: '예: 산업 — 조립 로봇 / 의료 — 수술 보조 로봇 / 생활 — 청소 로봇' },
        { type: 'choice', prompt: '움직이는 방식이 다른 로봇끼리 짝 지은 것에 ○ 하세요.', options: ['바퀴 청소 로봇 — 다리 반려 로봇', '바퀴 청소 로봇 — 바퀴 서빙 로봇', '바퀴 안내 로봇 — 바퀴 청소 로봇'], answer: '바퀴 청소 로봇 — 다리 반려 로봇' },
        { type: 'table', prompt: '로봇의 갈래와 움직이는 방식을 쓰세요.', columns: ['로봇', '갈래', '움직이는 방식'], cells: [['자동차 조립 로봇', '', ''], ['배달 드론', '', ''], ['', '', '']] },
        { type: 'short', prompt: '로봇의 움직이는 방식이 일에 알맞아야 하는 까닭을 쓰세요.' },
      ],
      easy: {
        note: '로봇은 쓰임에 따라 산업·의료·생활로 나눌 수 있고, 같은 갈래에도 움직이는 방식이 다를 수 있어요.',
        items: [
          { type: 'figure', wide: true, prompt: '가지에 로봇을 하나씩 쓰세요.', tool: 'mindmap', figures: [{ options: { topic: '로봇의 쓰임', printCards: false, slots: ['산업', '생활'], cards: ['보기'] }, caption: '' }], answer: '예: 산업 — 조립 로봇 / 생활 — 청소 로봇' },
          { type: 'choice', prompt: '병원에서 치료를 돕는 로봇은 어느 갈래일까요?', options: ['의료', '산업'], answer: '의료' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '로봇은 일하는 곳에 따라 ___이 달라져요.', answer: '모양' },
          { type: 'short', prompt: '내가 아는 로봇 하나를 쓰세요.' },
        ],
      },
    },
    diff: ['나누기에서 맞게 놓으면 초록 테두리가 생기고, 틀리면 까닭이 나와요.', '모두 놓은 뒤 확인을 눌러 스스로 고쳐요.', '헷갈리는 로봇과 함정 문장이 더 나오고, 방식의 까닭을 이어요.'],
    notes: '자주 보이는 어려움: ① 로봇은 모두 같은 방식으로 움직인다고 여긴다 → 바퀴·팔·다리·프로펠러로 움직이는 로봇을 견주게 한다. ② 일하는 곳만 보고 갈래를 나눈다 → 하는 일이 무엇인지 함께 보게 한다. ③ 갈래의 특징을 모두 같다고 말한다 → 수술 로봇과 용접 로봇에 필요한 점을 견주게 한다.',
  }));

  // ───────────────────────── 15차시 (practice) 다른 분야의 로봇도 갈래로 ─────────────────────────
  L.push(lesson(15, '농사·재난·우주에서 일하는 로봇의 쓰임과 움직임 견주기',
    '농사·재난·우주 분야의 로봇을 쓰임에 따라 나누고, 같은 분야 안에서 움직이는 방식과 센서가 다른 까닭을 말할 수 있다.', ['[6실04-05]'], {
    ill: ['a field with a harvesting robot, a rubble rescue robot with tracks and a rover with long wheels under a starry sky, each linked by thin ribbons to icons of an eye and a brain', '여러 분야의 로봇', 2],
    intro: {
      teacher: '"밭, 무너진 건물 안, 달 표면은 로봇이 일하기에 어떤 점이 다를까요?" 땅이 울퉁불퉁하거나 위험하거나 사람이 갈 수 없는 곳이라는 점을 말하게 한다. 시연 단추로 로봇 카드가 분야에 들어가는 모습을 보여 주고 "일하는 곳이 어려울수록 로봇의 몸과 센서가 달라져요."라고 말한다. 로봇은 어디서든 같은 센서로 일한다고 여기는 학생에게는 "어두운 곳과 밝은 곳에서 쓰는 센서가 같을까요?"라고 묻는다.',
      student: '밭, 무너진 건물 안, 달 표면 가운데 로봇이 일하기 가장 어려운 곳이 어디일지 까닭과 함께 말해 봅시다.',
      demo: { tool: 'mindmap', options: { topic: '일하는 곳', slots: ['농사', '우주'], cards: ['열매 따는 로봇', '달 탐사 로봇'], shuffle: false }, sequence: [{ sort: { 농사: ['열매 따는 로봇'], 우주: ['달 탐사 로봇'] } }] },
    },
    acts: [
      {
        title: '활동 1. 농사·재난·우주 분야로 로봇 나누기', tool: 'mindmap',
        teacher: '"이 로봇은 어디에서, 누구를 위해 일하나요?" 일하는 곳과 하는 일을 함께 읽게 한다. 재난 로봇을 의료에 넣는 학생에게 "사람의 몸을 치료하나요, 무너진 곳에서 사람을 찾나요?"라고 묻는다.',
        task: '로봇 카드를 읽고 농사·재난·우주 가지에 나누어 넣어요.',
        levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
        items: [
          { prompt: '로봇을 일하는 분야에 따라 농사·재난·우주 가지에 나누어 보세요.', toolOptions: { topic: '일하는 분야', slots: ['농사', '재난', '우주'], cards: ['열매 익은 정도를 알아보는 수확 로봇', '잡초를 뽑는 밭 로봇', '무너진 건물에서 사람을 찾는 구조 로봇', '화재 현장을 살피는 로봇', '화성 땅을 달리는 탐사 로봇', '우주 정거장 수리 로봇'] }, hints: ['밭이나 농장에서 하는 일, 위험한 사고 현장에서 하는 일, 사람이 가기 어려운 우주에서 하는 일로 나누어요.'], target: { sort: { 농사: ['열매 익은 정도를 알아보는 수확 로봇', '잡초를 뽑는 밭 로봇'], 재난: ['무너진 건물에서 사람을 찾는 구조 로봇', '화재 현장을 살피는 로봇'], 우주: ['화성 땅을 달리는 탐사 로봇', '우주 정거장 수리 로봇'] } }, difficulty: 0.25 },
          { prompt: '분야마다 로봇이 가장 필요로 하는 특징을 한 장씩 이어 보세요.', toolOptions: { mode: 'match', topic: '필요한 특징', slots: [{ id: 'farm', label: '농사 로봇' }, { id: 'rescue', label: '재난 구조 로봇' }, { id: 'space', label: '우주 탐사 로봇' }], cards: ['익은 열매를 가려 따는 섬세함', '좁고 무너진 곳을 헤치고 가는 튼튼한 몸', '혼자서 오래 견디는 배터리와 통신', '뜨거운 곳에서만 쓰는 것'] }, hints: ['분야에서 가장 어려운 점이 무엇인지 떠올리고 그것을 풀어 줄 특징을 이어요.'], target: { match: { farm: '익은 열매를 가려 따는 섬세함', rescue: '좁고 무너진 곳을 헤치고 가는 튼튼한 몸', space: '혼자서 오래 견디는 배터리와 통신' } }, difficulty: 0.4 },
          { prompt: '재난 구조 로봇이 쓰이면 좋은 곳만 골라 보세요.', toolOptions: { mode: 'pick', topic: '쓰이면 좋은 곳', cards: ['무너진 건물 속 좁은 틈', '연기가 가득한 불난 건물', '평소 걸어 다니는 학교 복도', '물에 잠긴 지하 공간'] }, hints: ['사람이 가기 위험하거나 어려워 로봇이 대신하면 좋은 곳을 골라요.'], target: { pick: ['무너진 건물 속 좁은 틈', '연기가 가득한 불난 건물', '물에 잠긴 지하 공간'] }, difficulty: 0.3,
            predict: { q: '사람이 가기 어려운 곳에서는 로봇이 도움이 될까요?', options: ['도움이 돼요', '도움이 안 돼요', '잘 모르겠어요'], answer: 0 },
            conclude: '사람이 가기 위험하거나 어려운 곳에서는 로봇이 대신해 일할 수 있어요.' },
        ],
      },
      {
        title: '활동 2. 일하는 곳에 따라 달라지는 센서와 몸', tool: 'mindmap',
        teacher: '"어두운 건물 속에서는 어떤 센서가 도움이 될까요? 울퉁불퉁한 땅에서는 어떤 몸이 알맞을까요?" 일하는 환경에 맞게 센서와 몸이 달라진다는 점을 말하게 한다. 모든 로봇이 카메라로만 본다고 말하는 학생에게 "카메라가 어두운 곳에서도 잘 보일까요?"라고 묻는다.',
        task: '일하는 곳마다 알맞은 센서와 움직이는 방식을 이어요.',
        levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
        items: [
          { prompt: '일하는 곳마다 알맞은 센서를 한 장씩 이어 보세요.', toolOptions: { mode: 'match', topic: '알맞은 센서', slots: [{ id: 'dark', label: '어두운 건물 속' }, { id: 'farm', label: '햇볕 아래 넓은 밭' }, { id: 'space', label: '울퉁불퉁한 달 표면' }], cards: ['열을 알아보는 센서', '색으로 익은 정도를 알아보는 센서', '바닥의 높낮이를 재는 센서', '소리만 듣는 센서'] }, hints: ['일하는 곳의 환경이 어떠한지 떠올리고, 그곳에서 잘 알아볼 수 있는 센서를 이어요.'], target: { match: { dark: '열을 알아보는 센서', farm: '색으로 익은 정도를 알아보는 센서', space: '바닥의 높낮이를 재는 센서' } }, difficulty: 0.35 },
          { prompt: '일하는 곳마다 알맞은 움직이는 방식을 한 장씩 이어 보세요.', toolOptions: { mode: 'match', topic: '알맞은 방식', slots: [{ id: 'rubble', label: '무너진 건물 속' }, { id: 'field', label: '고르지 않은 밭길' }, { id: 'air', label: '높은 곳 살펴보기' }], cards: ['궤도 바퀴로 장애물을 넘어요', '튼튼한 바퀴와 높은 차체로 달려요', '프로펠러로 날아올라요', '바퀴 없이 가만히 있어요'] }, hints: ['장애물이 많은지, 고르지 않은지, 높이 올라가야 하는지에 맞는 방식을 이어요.'], target: { match: { rubble: '궤도 바퀴로 장애물을 넘어요', field: '튼튼한 바퀴와 높은 차체로 달려요', air: '프로펠러로 날아올라요' } }, difficulty: 0.4 },
          { prompt: '일하는 곳에 맞게 로봇을 설계할 때 알맞은 생각만 골라 보세요.', toolOptions: { mode: 'pick', topic: '알맞은 생각', cards: ['일하는 곳의 환경을 먼저 살펴요', '모든 곳에 같은 로봇을 써요', '필요한 센서만 골라 달아요', '비싸면 늘 좋아요'] }, hints: ['환경을 살펴 필요한 센서와 몸을 고르는 생각을 골라요.'], target: { pick: ['일하는 곳의 환경을 먼저 살펴요', '필요한 센서만 골라 달아요'] }, difficulty: 0.35 },
        ],
      },
      {
        title: '활동 3. 감지에서 움직임까지 흐름을 로봇마다 놓기', tool: 'mindmap',
        teacher: '"수확 로봇은 익은 열매를 어떻게 알아보고, 알아본 뒤 무엇을 하나요?" 감지→판단→움직임으로 말하게 한다. 한 단계를 건너뛰는 학생에게 "알아보고 바로 따나요, 따기 전에 정하는 일이 있나요?"라고 묻는다.',
        task: '로봇마다 일하는 흐름을 알맞은 차례로 놓아요.',
        items: [
          { prompt: '수확 로봇이 열매를 따는 흐름을 위에서부터 놓아 보세요.', toolOptions: { mode: 'order', cards: [{ id: 'color', text: '열매의 색으로 익은 정도를 알아봐요' }, { id: 'decide', text: '익은 열매만 따기로 정해요' }, { id: 'arm', text: '팔을 뻗어 열매를 잡아요' }, { id: 'put', text: '상자에 조심스럽게 넣어요' }] }, hints: ['알아보기, 정하기, 움직이기, 넣기의 흐름이에요. 따기 전에 가려내는 일이 있어요.'], target: { order: ['color', 'decide', 'arm', 'put'] }, difficulty: 0.3 },
          { prompt: '구조 로봇이 사람을 찾는 흐름을 위에서부터 놓아 보세요.', toolOptions: { mode: 'order', cards: [{ id: 'heat', text: '열 센서로 사람 몸의 따뜻함을 알아봐요' }, { id: 'near', text: '가까이 있다고 판단해요' }, { id: 'go', text: '궤도 바퀴로 그쪽으로 가요' }, { id: 'call', text: '구조대에게 위치를 알려요' }] }, hints: ['알아보고 판단한 뒤 움직이고 알리는 순서를 떠올려요.'], target: { order: ['heat', 'near', 'go', 'call'] }, difficulty: 0.4 },
          { prompt: '우주 탐사 로봇이 돌을 피해 가는 흐름을 위에서부터 놓아 보세요.', toolOptions: { mode: 'order', cards: [{ id: 'cam', text: '앞길에 큰 돌이 있다고 알아봐요' }, { id: 'route', text: '돌을 돌아가는 길로 정해요' }, { id: 'turn', text: '바퀴를 돌려 방향을 바꿔요' }, { id: 'report', text: '지나온 길을 지구에 알려요' }] }, hints: ['감지, 판단, 움직임, 알림의 흐름이에요. 길을 정하는 일이 움직이기 전에 있어요.'], target: { order: ['cam', 'route', 'turn', 'report'] }, difficulty: 0.4 },
        ],
      },
    ],
    exit: {
      teacher: '"일하는 곳이 달라지면 로봇의 무엇이 달라지나요?" 센서와 몸이 달라진다는 말이 나오는지 듣는다. 출구 2번에서 모든 곳에 같은 센서를 쓴다고 고른 학생에게 "어두운 곳에서 카메라만으로 사람을 찾을 수 있을까요?"라고 되묻는다. 다음 시간에는 관심 있는 로봇을 하나 골라 감지에서 움직임까지의 흐름을 도식으로 그려 본다고 예고한다.',
      items: [
        { type: 'tool', tool: 'mindmap', options: { topic: '일하는 분야', slots: ['농사', '재난', '우주'], cards: ['수확 로봇', '구조 로봇', '탐사 로봇'] }, prompt: '로봇을 알맞은 분야에 넣어 보세요.', target: { sort: { 농사: ['수확 로봇'], 재난: ['구조 로봇'], 우주: ['탐사 로봇'] } }, difficulty: 0.15 },
        { type: 'choice', prompt: '일하는 곳에 따라 달라지는 것은 무엇인가요?', options: ['센서와 움직이는 방식', '로봇의 이름 글자 수', '로봇 색깔만'], answer: 0, difficulty: 0.2, explain: '일하는 곳의 환경에 맞게 센서와 움직이는 방식이 달라져요.' },
        { type: 'short', prompt: '내가 고른 분야의 로봇이 쓰는 센서 하나와 그 까닭을 쓰세요.' },
        { type: 'mood', prompt: '오늘 공부는 어땠나요?' },
      ],
    },
    ws: {
      title: '일하는 곳에 맞는 로봇',
      items: [
        { type: 'figure', wide: true, prompt: '가지마다 로봇을 한 가지씩 써 넣으세요.', tool: 'mindmap', figures: [{ options: { topic: '일하는 분야', printCards: false, slots: ['농사', '재난', '우주'], cards: ['보기'] }, caption: '' }], answer: '예: 농사 — 수확 로봇 / 재난 — 구조 로봇 / 우주 — 탐사 로봇' },
        { type: 'choice', prompt: '어두운 건물 속에서 사람을 찾을 때 알맞은 센서에 ○ 하세요.', options: ['열 센서', '색 센서', '소리를 듣지 않는 센서'], answer: '열 센서' },
        { type: 'table', prompt: '일하는 곳과 알맞은 센서·방식을 쓰세요.', columns: ['일하는 곳', '센서', '움직이는 방식'], cells: [['무너진 건물 속', '', ''], ['고르지 않은 밭길', '', ''], ['', '', '']] },
        { type: 'short', prompt: '일하는 곳이 달라지면 로봇이 달라져야 하는 까닭을 쓰세요.' },
      ],
      easy: {
        note: '일하는 곳의 환경에 맞게 로봇의 센서와 움직이는 방식을 골라요.',
        items: [
          { type: 'figure', wide: true, prompt: '가지에 로봇을 하나씩 쓰세요.', tool: 'mindmap', figures: [{ options: { topic: '일하는 분야', printCards: false, slots: ['농사', '재난'], cards: ['보기'] }, caption: '' }], answer: '예: 농사 — 수확 로봇 / 재난 — 구조 로봇' },
          { type: 'choice', prompt: '사람이 가기 위험한 곳에서 일하면 좋은 것에 ○ 하세요.', options: ['로봇', '장난감 자동차'], answer: '로봇' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '로봇은 일하는 곳에 맞는 ___를 달아요.', answer: '센서' },
          { type: 'short', prompt: '내가 알고 있는 구조 로봇의 일을 쓰세요.' },
        ],
      },
    },
    diff: ['나누기에서 맞게 놓으면 초록 테두리가 생기고, 틀리면 까닭이 나와요.', '모두 놓은 뒤 확인을 눌러 스스로 고쳐요.', '센서와 방식을 이어 보는 문항에 함정 카드가 들어가고, 흐름 놓기의 카드가 네 장이에요.'],
    notes: '자주 보이는 어려움: ① 어떤 환경에서든 같은 센서로 일한다고 여긴다 → 어두운 곳·밝은 곳에서 쓸 센서를 견주게 한다. ② 일하는 분야를 하는 일이 아니라 장소 이름으로만 외운다 → 로봇이 대신해 주는 일을 함께 말하게 한다. ③ 감지에서 곧바로 움직임으로 넘어간다 → 그 사이에 정하는 일이 있음을 흐름으로 확인한다.',
  }));

  // ───────────────────────── 16차시 (core) 로봇 하나를 조사해 도식 그리고 설명하기 ─────────────────────────
  L.push(lesson(16, '관심 있는 로봇 하나를 조사해 감지에서 움직임까지 도식으로 나타내기',
    '관심 있는 로봇 하나를 조사해 감지에서 움직임까지의 흐름을 도식으로 나타내고, 모둠에게 설명한 뒤 받은 질문에 근거를 들어 답할 수 있다.', ['[6실04-05]'], {
    ill: ['a child pinning a flow diagram of boxes and arrows from eye to brain to wheel beside a paper delivery robot, with group friends holding small question mark cards', '도식으로 설명해요', 1],
    intro: {
      teacher: '"로봇 그림을 아무리 예쁘게 그려도 어떻게 움직이는지는 알 수 없을 때가 있어요. 어떻게 하면 움직이는 까닭을 보여 줄 수 있을까요?" 상자와 화살표로 흐름을 보여 주는 방법을 말하게 한다. 시연 단추로 흐름 카드가 차례로 놓이는 모습을 보여 주고 "도식에는 겉모습이 아니라 감지하고 움직이는 흐름을 담아요."라고 말한다. 로봇의 겉모습만 자세히 그리는 학생에게는 "이 그림만 보고 이 로봇이 어떻게 움직이는지 알 수 있을까요?"라고 묻는다.',
      student: '로봇의 겉모습만 그린 그림으로는 어떻게 움직이는지 알기 어려운 까닭을 짝과 말해 봅시다.',
      demo: { tool: 'kitchen', options: { mode: 'order', cards: [{ id: 'sense', text: '센서가 알아봐요' }, { id: 'move', text: '바퀴가 움직여요' }], shuffle: false }, sequence: [{ order: ['sense', 'move'] }] },
    },
    acts: [
      {
        title: '활동 1. 로봇 조사 차례와 도식 만들기 차례 놓기', tool: 'kitchen',
        teacher: '"조사하기 전에 무엇을 정해야 할까요? 도식은 언제 그릴까요?" 조사→정리→도식→설명의 순서를 말하게 한다. 도식을 먼저 그린 뒤 조사하려는 학생에게 "조사해서 아는 것이 없는데 어떤 상자를 그릴 수 있나요?"라고 묻는다.',
        task: '카드를 읽고 로봇을 조사해 도식을 만들고 설명하는 차례를 놓아요.',
        levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
        items: [
          { prompt: '로봇을 조사해 도식으로 나타내는 차례를 위에서부터 놓아 보세요.', toolOptions: { mode: 'order', cards: [{ id: 'pick', text: '관심 있는 로봇 하나를 정해요' }, { id: 'find', text: '책이나 믿을 만한 자료로 알아봐요' }, { id: 'table', text: '감지·판단·움직임을 표로 정리해요' }, { id: 'draw', text: '표를 보고 도식을 그려요' }] }, hints: ['정한 뒤에 찾고, 찾은 것을 정리한 다음에 그리는 순서를 생각해요.'], target: { order: ['pick', 'find', 'table', 'draw'] }, difficulty: 0.2 },
          { prompt: '배달 로봇의 흐름을 도식 순서대로 놓아 보세요.', toolOptions: { mode: 'order', cards: [{ id: 'cam', text: '카메라가 길과 사람을 알아봐요' }, { id: 'think', text: '부딪히지 않는 길을 정해요' }, { id: 'drive', text: '바퀴가 그 길로 움직여요' }, { id: 'arrive', text: '도착하면 멈추고 알려요' }] }, hints: ['감지, 판단, 움직임, 알림의 흐름이에요. 길을 정하는 일은 움직이기 전에 해요.'], target: { order: ['cam', 'think', 'drive', 'arrive'] }, difficulty: 0.3 },
          { prompt: '도식을 설명하는 차례를 위에서부터 놓아 보세요.', toolOptions: { mode: 'order', cards: [{ id: 'name', text: '어떤 로봇인지 먼저 소개해요' }, { id: 'flow', text: '도식을 가리키며 흐름을 차례로 말해요' }, { id: 'why', text: '그렇게 움직이는 까닭을 말해요' }, { id: 'ask', text: '질문을 받고 근거를 들어 답해요' }] }, hints: ['소개하고 흐름을 말한 뒤 까닭을 설명하고 질문을 받는 순서를 떠올려요.'], target: { order: ['name', 'flow', 'why', 'ask'] }, difficulty: 0.35 },
        ],
      },
      {
        title: '활동 2. 도식에 담을 것과 담지 않을 것 가려내기', tool: 'kitchen',
        teacher: '"도식에 로봇의 색깔을 넣을 필요가 있을까요? 센서가 알아보는 것은요?" 흐름을 설명하는 데 필요한 것만 담자고 말한다. 많이 그릴수록 좋다고 생각하는 학생에게 "상자와 화살표가 많으면 읽는 사람이 헷갈리지 않을까요?"라고 묻는다.',
        task: '도식에 꼭 담을 것만 점검표에서 표시해요.',
        items: [
          { prompt: '로봇 도식에 꼭 담을 것만 표시해 보세요.', toolOptions: { mode: 'checklist', title: '도식에 담을 것', items: [{ id: 'sense', text: '센서가 알아보는 것' }, { id: 'think', text: '알아본 값으로 정하는 일' }, { id: 'move', text: '움직이는 부분과 하는 동작' }, { id: 'color', text: '로봇의 색깔과 무늬' }] }, hints: ['움직이는 까닭을 보여 주는 것만 도식에 담아요. 겉모습을 꾸미는 것은 흐름과 상관없어요.'], target: { checklist: ['sense', 'think', 'move'] }, difficulty: 0.25 },
          { prompt: '도식을 그릴 때 지킬 점만 표시해 보세요.', toolOptions: { mode: 'checklist', title: '도식 그리기', items: [{ id: 'arrow', text: '화살표로 흐름의 방향을 보여요' }, { id: 'short', text: '상자 안 글은 짧게 써요' }, { id: 'all', text: '아는 것을 모두 한 상자에 넣어요' }, { id: 'order', text: '왼쪽에서 오른쪽으로 읽히게 놓아요' }] }, hints: ['읽는 사람이 한눈에 따라갈 수 있는지를 기준으로 지킬 점만 표시해요.'], target: { checklist: ['arrow', 'short', 'order'] }, difficulty: 0.3 },
          { prompt: '내가 조사한 자료를 고를 때 알맞은 것만 표시해 보세요.', toolOptions: { mode: 'checklist', title: '자료 고르기', items: [{ id: 'trust', text: '믿을 만한 책이나 누리집을 골라요' }, { id: 'src', text: '자료를 찾은 곳을 적어 둬요' }, { id: 'first', text: '처음 나온 글을 그대로 믿어요' }, { id: 'two', text: '두 곳 이상에서 확인해요' }] }, hints: ['믿을 만한 곳인지 확인하고 출처를 남기며 여러 곳과 견주는 항목만 표시해요.'], target: { checklist: ['trust', 'src', 'two'] }, difficulty: 0.35 },
        ],
      },
      {
        title: '활동 3. 질문에 근거를 들어 답하기', tool: 'mindmap',
        teacher: '"\'왜 이 로봇은 바퀴로 움직여요?\'라는 질문에 \'그냥요\'라고 답하면 어떨까요?" 근거를 들어 답하는 방법을 말하게 한다. 근거를 모르면 질문에 답하지 못한다고 여기는 학생에게 "조사한 곳에서 이유를 다시 찾아 말해 볼까요?"라고 묻는다.',
        task: '질문마다 근거를 든 답을 한 장씩 이어요.',
        items: [
          { prompt: '친구 질문마다 근거를 든 답을 한 장씩 이어 보세요.', toolOptions: { mode: 'match', topic: '질문과 답', slots: [{ id: 'wheel', label: '왜 바퀴로 움직여요?' }, { id: 'sensor', label: '왜 거리 센서를 써요?' }, { id: 'stop', label: '왜 사람 앞에서 멈춰요?' }], cards: ['평평한 바닥을 빠르게 다니기 좋아서요', '앞 물체까지의 거리를 재서 부딪히지 않으려고요', '사람이 다칠 수 있어서 안전을 위해서요', '그냥 그렇게 만들었어요'] }, hints: ['질문의 \'왜\'에 이유를 담은 답을 이어요. 이유가 없는 답은 남겨요.'], target: { match: { wheel: '평평한 바닥을 빠르게 다니기 좋아서요', sensor: '앞 물체까지의 거리를 재서 부딪히지 않으려고요', stop: '사람이 다칠 수 있어서 안전을 위해서요' } }, difficulty: 0.3 },
          { prompt: '근거를 들어 답한 말만 골라 보세요.', toolOptions: { mode: 'pick', topic: '근거가 있는 답', cards: ['자료에서 이렇게 움직인다고 나와 있어요', '그냥 그럴 것 같아요', '실험에서 센서 값이 이렇게 나왔어요', '모르겠으니 넘어가요'] }, hints: ['자료나 실험 같은 근거를 말하는 답만 골라요. 짐작이나 회피는 근거가 아니에요.'], target: { pick: ['자료에서 이렇게 움직인다고 나와 있어요', '실험에서 센서 값이 이렇게 나왔어요'] }, difficulty: 0.25 },
          { prompt: '모르는 질문을 받았을 때 알맞은 대답만 골라 보세요.', toolOptions: { mode: 'pick', topic: '모르는 질문', cards: ['아직 조사하지 못했어요, 더 알아볼게요', '아무 말이나 지어서 해요', '모르면 화내요', '자료를 다시 찾아 알려 드릴게요'] }, hints: ['모르는 것을 솔직히 말하고 더 알아보겠다는 태도가 담긴 대답만 골라요.'], target: { pick: ['아직 조사하지 못했어요, 더 알아볼게요', '자료를 다시 찾아 알려 드릴게요'] }, difficulty: 0.3,
            conclude: '모르는 질문은 지어 내지 않고 더 알아보겠다고 말하는 것이 좋은 태도예요.' },
        ],
      },
    ],
    exit: {
      teacher: '"오늘 도식에서 가장 중요하다고 생각한 상자는 무엇인가요?" 감지·판단·움직임 중 하나를 고르고 까닭을 말하게 한다. 출구 1번에서 색깔을 고른 학생에게 "색깔이 움직이는 까닭을 설명해 주나요?"라고 되묻는다. 다음 시간부터는 로봇 코딩으로 넘어가 센서의 값이 동작으로 이어지는 규칙을 만든다고 예고한다.',
      items: [
        { type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title: '도식에 담을 것', items: [{ id: 'sense', text: '센서가 알아보는 것' }, { id: 'paint', text: '로봇의 색깔' }, { id: 'move', text: '움직이는 동작' }] }, prompt: '도식에 담을 것만 표시해 보세요.', target: { checklist: ['sense', 'move'] }, difficulty: 0.15 },
        { type: 'choice', prompt: '질문을 받았을 때 가장 알맞은 대답은 무엇인가요?', options: ['근거를 들어 대답해요', '그냥 그렇다고 말해요', '대답하지 않아요'], answer: 0, difficulty: 0.2, explain: '자료나 실험 같은 근거를 들어 대답해야 믿을 수 있어요.' },
        { type: 'short', prompt: '내가 그린 도식에서 가장 중요한 흐름 한 가지를 쓰세요.' },
        { type: 'mood', prompt: '오늘 공부는 어땠나요?' },
      ],
    },
    ws: {
      title: '로봇 도식 설명서',
      items: [
        { type: 'figure', wide: true, prompt: '가지마다 내가 조사한 로봇의 부분을 한 가지씩 써 넣으세요.', tool: 'mindmap', figures: [{ options: { topic: '내가 조사한 로봇', printCards: false, slots: ['감지', '판단', '움직임'], cards: ['보기'] }, caption: '' }], answer: '예: 감지 — 거리 센서 / 판단 — 제어 장치 / 움직임 — 바퀴' },
        { type: 'choice', prompt: '도식에 꼭 필요한 것에 ○ 하세요.', options: ['센서에서 움직임까지의 흐름', '로봇의 색깔', '로봇의 가격표만'], answer: '센서에서 움직임까지의 흐름' },
        { type: 'table', prompt: '내 로봇의 흐름을 상자 순서대로 쓰세요.', columns: ['순서', '상자 안 글'], cells: [['1', ''], ['2', ''], ['3', ''], ['4', '']] },
        { type: 'short', prompt: '모둠에게 받은 질문 한 가지와 근거를 든 내 답을 쓰세요.' },
      ],
      easy: {
        note: '도식에는 센서가 알아보는 것에서 움직임까지의 흐름을 담아요. 질문에는 근거를 들어 답해요.',
        items: [
          { type: 'figure', wide: true, prompt: '가지에 하나씩 쓰세요.', tool: 'mindmap', figures: [{ options: { topic: '내가 조사한 로봇', printCards: false, slots: ['감지', '움직임'], cards: ['보기'] }, caption: '' }], answer: '예: 감지 — 거리 센서 / 움직임 — 바퀴' },
          { type: 'choice', prompt: '질문에 알맞게 대답한 말에 ○ 하세요.', options: ['자료에서 확인했어요', '그냥 그래요'], answer: '자료에서 확인했어요' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '도식에는 감지에서 ___까지의 흐름을 담아요.', answer: '움직임' },
          { type: 'short', prompt: '내가 조사한 로봇의 이름을 쓰세요.' },
        ],
      },
    },
    diff: ['차례 놓기와 점검표에서 맞게 놓으면 초록 테두리가 생기고, 틀리면 까닭이 나와요.', '모두 놓은 뒤 확인을 눌러 스스로 고쳐요.', '자료 고르기 항목에 함정이 더 나오고, 질문에 근거를 들어 이어요.'],
    notes: '자주 보이는 어려움: ① 겉모습만 자세히 그리고 어떻게 움직이는지는 나타내지 않는다 → 감지·판단·움직임 상자와 화살표를 먼저 그리게 한다. ② 조사한 곳을 밝히지 않는다 → 자료를 찾은 곳을 적어 두게 한다. ③ 질문에 근거 없이 짐작으로 답한다 → 자료나 실험을 다시 찾아 말하게 한다.',
  }));

  // ───────────────────────── 17차시 (core) 센서 값이 동작으로 이어지는 흐름 ─────────────────────────
  L.push(lesson(17, '센서 값이 동작으로 이어지는 흐름을 적고 조건 규칙으로 만들기',
    '센서가 받은 값이 동작으로 이어지는 흐름을 차례대로 적고, 조건에 따라 다르게 움직이는 규칙을 문장과 조건 블록으로 나타낼 수 있다.', ['[6실04-06]'], {
    ill: ['a paper street lamp with a small sun-shaped sensor, an arrow from the sensor to a glowing bulb shape, and a turtle robot at a bend in a checkered path with a question mark', '만약 ~이면 ~한다', 1],
    intro: {
      teacher: '"해가 지면 저절로 켜지는 가로등은 무엇을 보고 켜질까요?" 밝기 센서가 어둠을 알아보면 켜진다고 말하게 한다. 시연 단추로 \'어두우면 켜요\' 규칙 카드가 놓이는 모습을 보여 주고 "로봇은 \'만약 ~이면 ~한다\'라는 규칙으로 센서의 값에 따라 다르게 움직여요."라고 말한다. 센서를 붙이기만 하면 로봇이 알아서 판단한다고 여기는 학생에게는 "센서는 값을 알려 줄 뿐이에요. 그 값을 보고 무엇을 할지는 누가 정해 주나요?"라고 묻는다.',
      student: '해가 지면 저절로 켜지는 가로등이 무엇을 보고 켜지는지 짝과 말해 봅시다.',
      demo: { tool: 'mindmap', options: { mode: 'match', topic: '만약 ~이면', slots: [{ id: 'dark', label: '주변이 어두우면' }], cards: ['가로등을 켜요', '가로등을 꺼요'], shuffle: false }, sequence: [{ match: { dark: '가로등을 켜요' } }] },
    },
    acts: [
      {
        title: '활동 1. 센서 값에서 동작까지 흐름 적기', tool: 'mindmap',
        teacher: '"센서가 알려 준 값을 보고 로봇이 어떻게 달라지나요? 값이 달라지면 동작도 달라지나요?" 값→규칙→동작의 흐름으로 말하게 한다. 규칙 없이 값에서 곧바로 동작이 나온다고 말하는 학생에게 "값과 동작을 이어 주는 것은 무엇일까요?"라고 묻는다.',
        task: '센서가 값을 받아 로봇이 움직이기까지의 흐름을 차례대로 놓고, 값과 동작을 짝 지어요.',
        levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
        items: [
          { prompt: '가로등이 켜지는 흐름을 위에서부터 놓아 보세요.', toolOptions: { mode: 'order', cards: [{ id: 'sense', text: '밝기 센서가 주변이 어둡다는 값을 받아요' }, { id: 'rule', text: '규칙에 따라 켜기로 정해요' }, { id: 'act', text: '가로등이 켜져요' }] }, hints: ['값을 받는 일이 먼저고, 규칙으로 정한 뒤에 동작이 일어나요. 센서와 동작 사이에 규칙이 있어요.'], target: { order: ['sense', 'rule', 'act'] }, difficulty: 0.2 },
          { prompt: '거리 센서와 이어진 규칙을 한 장씩 이어 보세요.', toolOptions: { mode: 'match', topic: '값과 동작', slots: [{ id: 'near', label: '앞 물체가 아주 가까우면' }, { id: 'far', label: '앞이 멀리까지 비어 있으면' }, { id: 'touch', label: '앞이 막혀서 더 못 가면' }], cards: ['멈추고 방향을 바꿔요', '앞으로 계속 가요', '오른쪽으로 돌아요', '뒤로만 가요'] }, hints: ['센서가 알려 준 값에 맞게 로봇이 가장 안전하고 알맞게 하는 동작을 이어요.'], target: { match: { near: '멈추고 방향을 바꿔요', far: '앞으로 계속 가요', touch: '오른쪽으로 돌아요' } }, difficulty: 0.35 },
          { prompt: '센서가 알아본 값과 로봇이 하는 동작을 나누어 보세요.', toolOptions: { topic: '센서와 동작', slots: ['센서가 알려 주는 값', '로봇이 하는 동작'], cards: ['앞 물체가 가까워요', '주변이 어두워요', '바퀴를 멈춰요', '불빛을 켜요'] }, hints: ['센서가 재거나 알아낸 것은 값이고, 로봇이 몸으로 하는 일은 동작이에요.'], target: { sort: { '센서가 알려 주는 값': ['앞 물체가 가까워요', '주변이 어두워요'], '로봇이 하는 동작': ['바퀴를 멈춰요', '불빛을 켜요'] } }, difficulty: 0.3,
            predict: { q: '센서를 붙이기만 하면 로봇이 알아서 판단할까요?', options: ['알아서 판단해요', '값을 보고 정할 규칙이 필요해요', '잘 모르겠어요'], answer: 1 },
            conclude: '센서는 값만 알려 줘요. 그 값에 따라 무엇을 할지는 규칙으로 정해 주어야 해요.' },
        ],
      },
      {
        title: '활동 2. 만약 ~이면 ~한다 규칙 문장 만들기', tool: 'mindmap',
        teacher: '"\'만약 앞이 막히면 오른쪽으로 돌고, 아니면 앞으로 간다\'처럼 두 갈래로 말해 볼까요?" 조건이 참일 때와 아닐 때를 모두 말하게 한다. 조건만 말하고 아닐 때를 빼 놓는 학생에게 "앞이 막히지 않았을 때는 무엇을 하나요?"라고 묻는다.',
        task: '조건에 알맞은 동작을 이어 규칙 문장을 완성해요.',
        levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
        items: [
          { prompt: '조건마다 알맞은 동작을 한 장씩 이어 규칙 문장을 만들어 보세요.', toolOptions: { mode: 'match', topic: '규칙 문장', slots: [{ id: 'dark', label: '만약 주변이 어두우면' }, { id: 'bright', label: '만약 주변이 밝으면' }, { id: 'sound', label: '만약 박수 소리가 나면' }], cards: ['불빛을 켜요', '불빛을 꺼요', '방향을 바꿔 소리 쪽으로 가요', '아무 일도 하지 않아요'] }, hints: ['조건이 말하는 주변 모습에 가장 알맞은 동작이 무엇인지 떠올려 이어요.'], target: { match: { dark: '불빛을 켜요', bright: '불빛을 꺼요', sound: '방향을 바꿔 소리 쪽으로 가요' } }, difficulty: 0.3 },
          { prompt: '규칙 문장으로 알맞게 쓴 것만 골라 보세요.', toolOptions: { mode: 'pick', topic: '알맞은 규칙', cards: ['만약 앞이 막히면 오른쪽으로 돌고, 아니면 앞으로 가요', '앞이 막히면 아무거나 해요', '만약 소리가 크면 속도를 줄여요', '센서가 알아서 해요'] }, hints: ['조건이 분명하고 그때 할 동작이 분명하게 적힌 규칙만 골라요. 막연한 말은 규칙이 아니에요.'], target: { pick: ['만약 앞이 막히면 오른쪽으로 돌고, 아니면 앞으로 가요', '만약 소리가 크면 속도를 줄여요'] }, difficulty: 0.3 },
          { prompt: '조건이 맞을 때와 아닐 때의 동작을 나누어 보세요.', toolOptions: { topic: '앞이 막혔는지', slots: ['막혔을 때', '막히지 않았을 때'], cards: ['방향을 바꾸어요', '앞으로 한 칸 가요', '오른쪽으로 돌아요', '그대로 직진해요'] }, hints: ['앞이 막힌 경우는 가던 길을 바꿔야 하고, 막히지 않은 경우는 계속 가면 돼요.'], target: { sort: { '막혔을 때': ['방향을 바꾸어요', '오른쪽으로 돌아요'], '막히지 않았을 때': ['앞으로 한 칸 가요', '그대로 직진해요'] } }, difficulty: 0.35 },
        ],
      },
      {
        title: '활동 3. 조건 블록으로 길을 스스로 찾는 프로그램 만들기', tool: 'block-coding',
        teacher: '"막히면 돌고 아니면 앞으로 가는 조건 블록을 반복 블록 안에 넣으면 거북이가 모퉁이를 알아서 돌까요?" 반복 안에 조건 블록을 넣는 이유를 말하게 한다. 조건 블록만 놓고 반복을 빼는 학생에게 "조건을 한 번만 확인하면 어디까지 갈 수 있나요?"라고 묻는다.',
        task: '반복 블록 안에 조건 블록(막히면 돌기)을 넣어 거북이가 모퉁이를 돌아 깃발에 닿게 해요.',
        levels: { easy: { blocks: ['fwd', 'left', 'right', 'rep', 'if'] }, base: { blocks: ['fwd', 'left', 'right', 'rep', 'if'] }, challenge: { blocks: ['fwd', 'left', 'right', 'rep', 'if'] } },
        items: [
          { prompt: '조건 블록을 써서 거북이가 판의 끝에서 위로 돌아 오른쪽 위 깃발에 닿게 해요.', toolOptions: { cols: 5, rows: 4, start: { x: 0, y: 3, dir: 'E' }, goal: { x: 4, y: 0 }, blocks: ['fwd', 'left', 'right', 'rep', 'if'] }, target: { reach: true, use: ['if'] }, difficulty: 0.45 },
          { prompt: '아래로 내려간 거북이가 막히면 왼쪽으로 돌아 오른쪽 아래 깃발에 닿게 해요.', toolOptions: { cols: 4, rows: 4, start: { x: 0, y: 0, dir: 'S' }, goal: { x: 3, y: 3 }, blocks: ['fwd', 'left', 'right', 'rep', 'if'] }, target: { reach: true, use: ['if'] }, difficulty: 0.5 },
          { prompt: '조건 블록으로 가장자리를 따라 돌아 깃발에 닿는 프로그램을 만들어요.', toolOptions: { cols: 5, rows: 3, start: { x: 0, y: 0, dir: 'E' }, goal: { x: 4, y: 2 }, blocks: ['fwd', 'left', 'right', 'rep', 'if'] }, target: { reach: true, use: ['if'] }, difficulty: 0.55,
            conclude: '조건 블록은 센서가 값을 알려 줄 때마다 막혔는지 확인해 스스로 방향을 정하게 해요.' },
        ],
      },
    ],
    exit: {
      teacher: '"센서가 알려 준 값을 보고 무엇을 할지 정하는 것을 무엇이라고 했나요?" 규칙, 곧 조건이라는 말이 나오는지 듣는다. 출구 1번에서 규칙 없이 곧바로 동작으로 이은 학생에게 "센서가 값만 알려 주면 로봇이 어떻게 할지 누가 정했나요?"라고 되묻는다. 다음 시간에는 조건에 따라 다르게 움직이는 규칙을 더 만들어 본다고 예고한다.',
      items: [
        { type: 'tool', tool: 'mindmap', options: { mode: 'order', cards: [{ id: 'sense', text: '거리 센서가 앞 물체를 알아봐요' }, { id: 'rule', text: '가까우면 멈추기로 정해요' }, { id: 'act', text: '바퀴가 멈춰요' }] }, prompt: '센서에서 동작까지의 흐름을 놓아 보세요.', target: { order: ['sense', 'rule', 'act'] }, difficulty: 0.2 },
        { type: 'choice', prompt: '센서의 값에 따라 로봇이 다르게 움직이게 하는 것은 무엇인가요?', options: ['색깔', '조건 규칙', '이름'], answer: 1, difficulty: 0.2, explain: '값에 따라 무엇을 할지 정한 조건 규칙이 로봇의 동작을 다르게 해요.' },
        { type: 'short', prompt: '내가 만들고 싶은 규칙을 만약 ~이면 ~한다 모양으로 한 줄 쓰세요.' },
        { type: 'mood', prompt: '오늘 공부는 어땠나요?' },
      ],
    },
    ws: {
      title: '센서와 조건 규칙',
      items: [
        { type: 'figure', wide: true, prompt: '가지마다 센서가 알려 주는 값과 로봇의 동작을 한 가지씩 써 넣으세요.', tool: 'mindmap', figures: [{ options: { topic: '센서와 로봇', printCards: false, slots: ['센서가 알려 주는 값', '로봇이 하는 동작'], cards: ['보기'] }, caption: '' }], answer: '예: 값 — 앞 물체가 가까워요 / 동작 — 바퀴를 멈춰요' },
        { type: 'choice', prompt: '규칙 문장으로 알맞은 것에 ○ 하세요.', options: ['만약 앞이 막히면 오른쪽으로 돌아요', '센서가 알아서 해요', '아무 일도 하지 않아요'], answer: '만약 앞이 막히면 오른쪽으로 돌아요' },
        { type: 'table', prompt: '조건과 동작으로 규칙 문장을 완성하세요.', columns: ['만약(조건)', '그러면(동작)', '아니면'], cells: [['주변이 어두우면', '', ''], ['앞이 막히면', '', ''], ['', '', '']] },
        { type: 'short', prompt: '센서가 값만 알려 주고 로봇이 규칙으로 움직인다는 말을 내 말로 설명하세요.' },
      ],
      easy: {
        note: '센서는 값만 알려 줘요. 값에 따라 무엇을 할지는 만약 ~이면 ~한다 규칙으로 정해요.',
        items: [
          { type: 'figure', wide: true, prompt: '가지에 하나씩 쓰세요.', tool: 'mindmap', figures: [{ options: { topic: '센서와 로봇', printCards: false, slots: ['값', '동작'], cards: ['보기'] }, caption: '' }], answer: '예: 값 — 어두워요 / 동작 — 불을 켜요' },
          { type: 'choice', prompt: '규칙 문장에 ○ 하세요.', options: ['만약 어두우면 켜요', '알아서 해요'], answer: '만약 어두우면 켜요' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '센서가 알려 준 ___에 따라 로봇이 움직여요.', answer: '값' },
          { type: 'short', prompt: '센서가 달린 물건 하나를 쓰세요.' },
        ],
      },
    },
    diff: ['흐름·짝 짓기에서 맞게 놓으면 초록 테두리가 생기고, 조건 블록 문제는 모든 블록이 고르개에 있어요.', '모두 놓은 뒤 확인을 눌러 스스로 고쳐요.', '규칙 문장 고르기에 함정이 들어가고, 조건 블록으로 가장자리를 도는 문제의 판이 넓어요.'],
    notes: '자주 보이는 어려움: ① 센서를 붙이기만 하면 로봇이 알아서 판단한다고 여긴다 → 센서는 값만 알려 주고 규칙이 동작을 정한다고 짚는다. ② 조건이 맞을 때만 쓰고 아닐 때를 빼 놓는다 → 그렇지 않을 때는 무엇을 하는지 묻는다. ③ 조건 블록을 반복 안에 넣지 않는다 → 한 번만 확인하면 어디까지 가는지 실행해 보게 한다.',
  }));

  // ───────────────────────── 18차시 (practice) 조건에 따라 다르게 움직이는 규칙 ─────────────────────────
  L.push(lesson(18, '막히면 돌고 아니면 가는 규칙으로 별을 모으며 깃발까지 가기',
    '조건 블록으로 막힐 때만 돌고 아니면 앞으로 가는 규칙을 만들어 별을 모으며 깃발에 닿고, 센서 값에 따라 달라지는 동작을 설명할 수 있다.', ['[6실04-06]'], {
    ill: ['a paper turtle robot following the edge of a checkered board by turning at corners, collecting small star shapes along the way, with sensor waves drawn in front of it', '막히면 돌아요', 2],
    intro: {
      teacher: '"복도 끝에 닿으면 돌아서 걷는 로봇을 만들려면 어떤 규칙이 필요할까요?" 앞이 막혔는지 살펴보는 센서와 막혔을 때의 동작을 말하게 한다. 시연 단추로 조건 블록을 쓴 프로그램이 모퉁이에서 스스로 돌아 깃발에 닿는 모습을 보여 주고 "조건 블록은 한 번 놓으면 모든 모퉁이에서 같은 규칙으로 움직여요."라고 말한다. 모퉁이마다 돌기 블록을 따로 놓아야 한다고 여기는 학생에게는 "모퉁이가 열 개라면 블록이 몇 개 필요할까요?"라고 묻는다.',
      student: '복도 끝에 닿으면 돌아서 걷는 로봇에게 필요한 규칙이 무엇일지 짝과 말해 봅시다.',
      demo: { tool: 'block-coding', options: { cols: 5, rows: 3, start: { x: 0, y: 0, dir: 'E' }, goal: { x: 4, y: 2 }, blocks: ['fwd', 'left', 'right', 'rep', 'if'] }, sequence: [{ reach: true, use: ['if'] }] },
    },
    acts: [
      {
        title: '활동 1. 조건에 따라 달라지는 동작을 규칙 문장으로 말하기', tool: 'mindmap',
        teacher: '"이 로봇은 앞이 막히면 어떻게 하고, 아니면 어떻게 하나요?" 규칙의 두 갈래를 소리 내어 말하게 한다. 규칙을 외우기만 하고 상황에 적용하지 못하는 학생에게 "지금 앞이 막혔나요? 그럼 규칙에 따르면 무엇을 해야 하나요?"라고 묻는다.',
        task: '상황에서 조건이 맞는지 살펴 규칙에 따른 동작을 골라요.',
        levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
        items: [
          { prompt: '규칙은 \'앞이 막히면 오른쪽으로 돌고 아니면 앞으로 가요\'예요. 상황마다 동작을 이어 보세요.', toolOptions: { mode: 'match', topic: '규칙 적용', slots: [{ id: 'wall', label: '바로 앞이 벽이에요' }, { id: 'open', label: '앞이 한 칸 비어 있어요' }, { id: 'lrule', label: '규칙을 왼쪽 돌기로 바꾸고 앞이 벽이에요' }], cards: ['오른쪽으로 돌아요', '앞으로 한 칸 가요', '왼쪽으로 돌아요', '멈춰서 기다려요'] }, hints: ['규칙에 나온 조건이 지금 맞는지 따져 보고 그때 정해 둔 동작을 이어요.'], target: { match: { wall: '오른쪽으로 돌아요', open: '앞으로 한 칸 가요', lrule: '왼쪽으로 돌아요' } }, difficulty: 0.3 },
          { prompt: '조건 블록을 쓰면 좋은 이유만 골라 보세요.', toolOptions: { mode: 'pick', topic: '조건 블록의 좋은 점', cards: ['모퉁이마다 돌기 블록을 따로 놓지 않아도 돼요', '길이 달라져도 같은 규칙을 쓸 수 있어요', '블록을 하나도 놓지 않아도 돼요', '센서가 없어도 길을 알아요'] }, hints: ['모퉁이가 어디 있는지 몰라도 막혔는지 살펴 스스로 방향을 바꿀 수 있다는 점을 떠올려 골라요.'], target: { pick: ['모퉁이마다 돌기 블록을 따로 놓지 않아도 돼요', '길이 달라져도 같은 규칙을 쓸 수 있어요'] }, difficulty: 0.35 },
          { prompt: '규칙을 고치면 달라지는 동작을 이어 보세요.', toolOptions: { mode: 'match', topic: '규칙 바꾸기', slots: [{ id: 'left', label: '막히면 왼쪽으로 돌아요' }, { id: 'right', label: '막히면 오른쪽으로 돌아요' }, { id: 'none', label: '돌기 규칙이 없어요' }], cards: ['판의 가장자리를 반대 방향으로 돌아요', '판의 가장자리를 시계 방향으로 돌아요', '벽에 부딪혀 멈추어요', '벽을 뚫고 지나가요'] }, hints: ['돌기 방향을 바꾸면 가장자리를 도는 방향도 달라지고, 규칙이 없으면 벽에 막혀 더 못 가요.'], target: { match: { left: '판의 가장자리를 반대 방향으로 돌아요', right: '판의 가장자리를 시계 방향으로 돌아요', none: '벽에 부딪혀 멈추어요' } }, difficulty: 0.4,
            predict: { q: '규칙의 돌기 방향을 바꾸면 거북이가 도는 방향도 바뀔까요?', options: ['바뀌어요', '그대로예요', '잘 모르겠어요'], answer: 0 },
            conclude: '규칙의 조건과 동작을 바꾸면 같은 로봇도 다르게 움직여요.' },
        ],
      },
      {
        title: '활동 2. 조건 블록으로 별을 모으며 깃발까지 가기', tool: 'block-coding',
        teacher: '"별은 어느 길에 놓여 있나요? 그 길로 가려면 조건 블록이 몇 번 반복되어야 할까요?" 반복 수는 ↑/↓로 바꾼다고 알려 준다. 반복 횟수가 모자라 깃발 앞에서 멈추는 학생에게 "한 칸 가는 것도, 돌기도 반복 한 번으로 세는 것을 알고 있나요?"라고 묻는다.',
        task: '조건 블록과 반복 블록으로 별을 모으며 깃발에 닿는 프로그램을 만들어요.',
        levels: { easy: { blocks: ['fwd', 'left', 'right', 'rep', 'if'] }, base: { blocks: ['fwd', 'left', 'right', 'rep', 'if'] }, challenge: { blocks: ['fwd', 'left', 'right', 'rep', 'if'] } },
        items: [
          { prompt: '별을 지나며 가장자리를 돌아 오른쪽 아래 깃발에 닿는 프로그램을 만들어요.', toolOptions: { cols: 5, rows: 4, start: { x: 0, y: 0, dir: 'E' }, goal: { x: 4, y: 3 }, stars: [[2, 0]], blocks: ['fwd', 'left', 'right', 'rep', 'if'] }, target: { reach: true, stars: true, use: ['if'] }, difficulty: 0.5 },
          { prompt: '아래 가장자리를 따라가다 위로 돌아 오른쪽 위 깃발에 닿는 프로그램을 만들어요.', toolOptions: { cols: 6, rows: 3, start: { x: 0, y: 2, dir: 'E' }, goal: { x: 5, y: 0 }, blocks: ['fwd', 'left', 'right', 'rep', 'if'] }, target: { reach: true, use: ['if'] }, difficulty: 0.5 },
          { prompt: '왼쪽을 보고 시작해 조건 블록으로 블록 3개 이하만 써서 왼쪽 아래 깃발에 닿아요.', toolOptions: { cols: 4, rows: 5, start: { x: 3, y: 0, dir: 'W' }, goal: { x: 0, y: 4 }, blocks: ['fwd', 'left', 'right', 'rep', 'if'] }, target: { reach: true, use: ['if'], maxBlocks: 3 }, difficulty: 0.6,
            conclude: '조건 블록을 반복 안에 넣으면 블록을 아주 적게 쓰고도 길을 스스로 찾아가요.' },
        ],
      },
      {
        title: '활동 3. 센서와 프로그램에 대한 알맞은 설명 고르기', tool: 'mindmap',
        teacher: '"프로그램을 짜면 로봇은 무엇이든 알아서 할 수 있을까요?" 센서와 프로그램은 서로를 필요로 한다는 점을 말하게 한다. 프로그램만 있으면 센서가 없어도 된다고 생각하는 학생에게 "앞이 막혔는지는 무엇이 알려 주나요?"라고 묻는다.',
        task: '센서·규칙·동작에 대한 알맞은 설명만 골라 정리해요.',
        levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
        items: [
          { prompt: '센서와 프로그램에 대한 알맞은 설명만 골라 보세요.', toolOptions: { mode: 'pick', topic: '알맞은 설명', cards: ['센서는 값을 알려 줘요', '프로그램은 값을 보고 정하는 규칙이에요', '센서만 있으면 로봇이 알아서 판단해요', '프로그램이 있으면 센서가 없어도 돼요'] }, hints: ['센서는 알려 주고 프로그램은 정한다는 역할 나눔을 담은 설명을 골라요. 한쪽만 있으면 된다는 설명은 틀려요.'], target: { pick: ['센서는 값을 알려 줘요', '프로그램은 값을 보고 정하는 규칙이에요'] }, difficulty: 0.25 },
          { prompt: '센서와 프로그램의 역할을 나누어 보세요.', toolOptions: { topic: '센서와 프로그램', slots: ['센서가 해요', '프로그램이 해요'], cards: ['앞이 막혔는지 알아내요', '주변이 어두운지 알아내요', '막히면 돌기로 정해요', '어두우면 켜기로 정해요'] }, hints: ['알아내는 일은 센서의 몫이고, 알아낸 것에 따라 무엇을 할지 정하는 일은 프로그램의 몫이에요.'], target: { sort: { '센서가 해요': ['앞이 막혔는지 알아내요', '주변이 어두운지 알아내요'], '프로그램이 해요': ['막히면 돌기로 정해요', '어두우면 켜기로 정해요'] } }, difficulty: 0.3 },
          { prompt: '규칙이 뜻대로 안 될 때 먼저 살필 곳만 골라 보세요.', toolOptions: { mode: 'pick', topic: '먼저 살필 곳', cards: ['조건이 알맞게 적혔는지', '막혔을 때의 동작이 알맞은지', '반복 횟수가 충분한지', '로봇 색깔이 예쁜지'] }, hints: ['규칙이 제대로 동작하는지 결정하는 곳만 골라요. 겉모습과 상관없는 것은 빼요.'], target: { pick: ['조건이 알맞게 적혔는지', '막혔을 때의 동작이 알맞은지', '반복 횟수가 충분한지'] }, difficulty: 0.35 },
        ],
      },
    ],
    exit: {
      teacher: '"오늘 조건 블록이 있어서 편했던 점은 무엇이었나요?" 모퉁이마다 돌기 블록을 따로 놓지 않아도 된다는 말이 나오는지 듣는다. 출구 2번에서 \'센서 없이도 된다\'를 고른 학생에게 "앞이 막혔는지는 누가 알려 주나요?"라고 되묻는다. 다음 시간에는 이 단원 마무리로 블록 도구로 로봇 동작을 짜서 실행하고 고친다고 예고한다.',
      items: [
        { type: 'tool', tool: 'block-coding', options: { cols: 5, rows: 3, start: { x: 0, y: 0, dir: 'E' }, goal: { x: 4, y: 2 }, blocks: ['fwd', 'left', 'right', 'rep', 'if'] }, prompt: '조건 블록으로 가장자리를 돌아 깃발까지 가는 프로그램을 만들어 보세요.', target: { reach: true, use: ['if'] }, difficulty: 0.4 },
        { type: 'choice', prompt: '센서와 프로그램의 관계로 알맞은 것은 무엇인가요?', options: ['센서가 값을 알려 주고 프로그램이 규칙으로 정해요', '센서만 있으면 돼요', '프로그램만 있으면 돼요'], answer: 0, difficulty: 0.2, explain: '센서는 값을 알려 주고, 프로그램은 그 값에 따라 할 일을 정해 줘요.' },
        { type: 'short', prompt: '조건 블록을 쓰면 좋은 점을 한 가지 쓰세요.' },
        { type: 'mood', prompt: '오늘 공부는 어땠나요?' },
      ],
    },
    ws: {
      title: '조건 규칙으로 길 찾기',
      items: [
        { type: 'figure', prompt: '막히면 오른쪽으로 돌고 아니면 앞으로 가는 거북이가 멈추는 칸에 ○ 하세요.', tool: 'block-coding', options: { mode: 'trace', cols: 4, rows: 3, start: { x: 0, y: 0, dir: 'E' }, program: ['fwd', 'fwd', 'fwd', 'right', 'fwd', 'fwd'], printProgram: true }, figures: [{ state: {}, caption: '앞으로 3번 → 막히면 오른쪽 돌기 → 앞으로 2번' }], answer: '(3, 2)' },
        { type: 'choice', prompt: '규칙의 조건과 동작이 알맞은 것에 ○ 하세요.', options: ['만약 앞이 막히면 돌아요', '센서 없이 길을 알아요', '아무 일도 하지 않아요'], answer: '만약 앞이 막히면 돌아요' },
        { type: 'table', prompt: '센서와 프로그램의 역할을 나누어 쓰세요.', columns: ['하는 일', '센서(S) / 프로그램(P)'], cells: [['앞이 막혔는지 알아내요', ''], ['막히면 돌기로 정해요', ''], ['주변이 어두운지 알아내요', ''], ['어두우면 켜기로 정해요', '']] },
        { type: 'short', prompt: '조건 블록과 반복 블록을 함께 쓰면 좋은 까닭을 쓰세요.' },
      ],
      easy: {
        note: '센서는 값을 알려 주고, 프로그램은 값에 따라 무엇을 할지 정해요.',
        items: [
          { type: 'figure', prompt: '프로그램을 따라가 멈추는 칸에 ○ 하세요.', tool: 'block-coding', options: { mode: 'trace', cols: 4, rows: 3, start: { x: 0, y: 0, dir: 'E' }, program: ['fwd', 'fwd', 'fwd', 'right', 'fwd'], printProgram: true }, figures: [{ state: {}, caption: '앞으로 3번 → 오른쪽 돌기 → 앞으로' }], answer: '(3, 1)' },
          { type: 'choice', prompt: '값을 알려 주는 것에 ○ 하세요.', options: ['센서', '프로그램'], answer: '센서' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '프로그램은 센서의 값에 따라 무엇을 할지 ___ 줘요.', answer: '정해' },
          { type: 'short', prompt: '내가 만든 규칙을 한 줄 쓰세요.' },
        ],
      },
    },
    diff: ['규칙 적용 이어 보기에서 맞게 놓으면 초록 테두리가 생기고, 코딩 문제는 판이 작아요.', '모두 놓은 뒤 확인을 눌러 스스로 고쳐요.', '코딩 문제에 별 모으기와 블록 수 제한이 더해지고 규칙 바꾸기를 이어 보는 문항이 나와요.'],
    notes: '자주 보이는 어려움: ① 모퉁이마다 돌기 블록을 따로 놓아야 한다고 여긴다 → 조건 블록을 반복 안에 넣어 모든 모퉁이에서 같은 규칙으로 움직임을 실행해 보인다. ② 센서 없이도 프로그램만으로 길을 안다고 말한다 → 앞이 막혔는지는 센서가 알려 준다고 짚는다. ③ 반복 횟수가 모자라 깃발 앞에서 멈춘다 → 돌기도 한 번으로 세는 것을 알려 준다.',
  }));

  // ───────────────────────── 19차시 (wrap) 로봇 동작을 짜서 실행하고 고쳐 견주기 ─────────────────────────
  L.push(lesson(19, '로봇 동작을 블록으로 짜서 실행하고 고친 결과를 앞과 견주기',
    '블록 도구로 로봇 동작을 짜서 실행해 움직임을 확인하고, 뜻대로 되지 않은 부분의 블록을 한 군데씩 고쳐 다시 실행한 결과를 앞선 결과와 견줄 수 있다.', ['[6실04-06]'], {
    ill: ['a child comparing two paper turtle robot paths drawn on a checkered board, one in a tangled red line and one clean green line, with a block program card and a growing plant icon beside them', '고치기 전과 후', 0],
    intro: {
      teacher: '"로봇이 처음부터 뜻대로 움직이는 일이 많을까요, 몇 번 고치며 완성되는 일이 많을까요?" 처음에는 어긋나는 일이 흔하며 고치며 완성된다는 점을 말하게 한다. 시연 단추로 첫 실행에서 부딪힌 프로그램이 한 군데 고쳐져 깃발에 닿는 모습을 보여 주고 "무엇을 바꾸었더니 무엇이 달라졌는지 적어 두면 다음 코딩에 큰 도움이 돼요."라고 말한다. 여러 곳을 한꺼번에 바꾸어 무엇이 결과를 바꾸었는지 모르는 학생에게는 "한 군데만 바꾸고 다시 실행해 볼까요?"라고 묻는다.',
      student: '로봇이 처음부터 뜻대로 움직이는 경우가 많은지, 고치며 완성되는 경우가 많은지 짝과 생각을 말해 봅시다.',
      demo: { tool: 'block-coding', options: { cols: 5, rows: 3, start: { x: 0, y: 2, dir: 'E' }, goal: { x: 4, y: 0 } }, sequence: [{ reach: true }] },
    },
    acts: [
      {
        title: '활동 1. 블록으로 로봇 동작을 짜서 실행하기', tool: 'block-coding',
        teacher: '"먼저 판 위에서 손가락으로 길을 따라가 보고 블록으로 옮겨 볼까요?" 길을 말로 먼저 말하게 한 뒤 블록을 놓게 한다. 첫 실행에서 부딪히면 부딪힌 칸 바로 앞의 블록부터 살피게 한다.',
        task: '로봇의 길을 블록으로 짜서 실행하고, 뜻대로 안 되면 처음으로 돌아가 한 군데씩 고쳐요.',
        levels: { easy: { blocks: ['fwd', 'left', 'right'] }, base: { blocks: ['fwd', 'left', 'right', 'rep'] }, challenge: { blocks: ['fwd', 'left', 'right', 'rep'] } },
        items: [
          { prompt: '출발한 로봇이 위로 올라가 별을 모은 뒤 오른쪽 끝 깃발에 닿는 동작을 짜 보세요.', toolOptions: { cols: 6, rows: 4, start: { x: 0, y: 3, dir: 'N' }, goal: { x: 5, y: 0 }, stars: [[0, 1]] }, target: { reach: true, stars: true }, difficulty: 0.35 },
          { prompt: '바위 사이를 지나 오른쪽 아래 깃발에 닿는 동작을 블록 7개 이하로 짜 보세요.', toolOptions: { cols: 6, rows: 4, start: { x: 0, y: 0, dir: 'E' }, goal: { x: 5, y: 3 }, rocks: [[2, 0], [2, 1]], blocks: ['fwd', 'left', 'right', 'rep'] }, target: { reach: true, maxBlocks: 7 }, difficulty: 0.5 },
          { prompt: '아래로 내려가며 별 둘을 모으고 오른쪽 아래 깃발에 닿는 동작을 짜 보세요.', toolOptions: { cols: 5, rows: 5, start: { x: 0, y: 0, dir: 'S' }, goal: { x: 4, y: 4 }, stars: [[0, 2], [2, 4]], blocks: ['fwd', 'left', 'right', 'rep'] }, target: { reach: true, stars: true }, difficulty: 0.5,
            conclude: '로봇 동작은 짜서 실행하고 확인하는 일을 되풀이하며 완성해요.' },
        ],
      },
      {
        title: '활동 2. 뜻대로 안 된 부분을 한 군데씩 고치기', tool: 'block-coding',
        teacher: '"처음으로 엉뚱하게 움직이는 곳은 어디인가요? 그곳 하나만 고쳐 다시 실행해 볼까요?" 한 군데만 고치고 바로 실행하는 습관을 상기시킨다. 두 곳을 한꺼번에 바꾼 학생에게 "처음 프로그램과 다른 블록이 몇 개인가요?"라고 묻는다.',
        task: '처음 프로그램을 실행해 어긋난 곳을 찾고, 블록 하나만 고쳐 깃발에 닿아요.',
        levels: { easy: { blocks: ['fwd', 'left', 'right', 'rep'] }, base: { blocks: ['fwd', 'left', 'right', 'rep'] }, challenge: { blocks: ['fwd', 'left', 'right', 'rep'] } },
        items: [
          { prompt: '반복 횟수가 모자라 깃발 앞에서 어긋나요. 반복 횟수 하나만 고쳐 깃발에 닿게 해요.', toolOptions: { cols: 6, rows: 4, start: { x: 0, y: 3, dir: 'E' }, goal: { x: 5, y: 0 }, blocks: ['fwd', 'left', 'right', 'rep'] }, state: { program: ['rep:4', 'fwd', 'end', 'left', 'rep:3', 'fwd', 'end'] }, target: { reach: true, maxEdits: 1 }, difficulty: 0.45 },
          { prompt: '돌기 방향이 틀려 판 밖으로 나가요. 블록 하나만 고쳐 깃발에 닿게 해요.', toolOptions: { cols: 5, rows: 5, start: { x: 0, y: 4, dir: 'N' }, goal: { x: 4, y: 0 }, blocks: ['fwd', 'left', 'right', 'rep'] }, state: { program: ['rep:4', 'fwd', 'end', 'left', 'rep:4', 'fwd', 'end'] }, target: { reach: true, maxEdits: 1 }, difficulty: 0.5 },
          { prompt: '앞으로 가는 블록 하나가 빠졌어요. 한 블록만 보태 바위를 피해 깃발에 닿게 해요.', toolOptions: { cols: 5, rows: 3, start: { x: 0, y: 2, dir: 'E' }, goal: { x: 4, y: 0 }, rocks: [[1, 2]], blocks: ['fwd', 'left', 'right', 'rep'] }, state: { program: ['left', 'fwd', 'right', 'rep:4', 'fwd', 'end'] }, target: { reach: true, maxEdits: 1 }, difficulty: 0.5,
            predict: { q: '여러 곳을 한꺼번에 바꾸면 무엇이 결과를 바꾸었는지 알 수 있을까요?', options: ['알 수 있어요', '알기 어려워요', '잘 모르겠어요'], answer: 1 },
            conclude: '한 군데씩 고쳐야 무엇이 결과를 바꾸었는지 알 수 있어요.' },
        ],
      },
      {
        title: '활동 3. 고치기 전과 후 결과를 견주어 정리하기', tool: 'mindmap',
        teacher: '"고치기 전과 고친 뒤를 나란히 놓으면 무엇이 달라졌나요?" 바꾼 블록과 달라진 결과를 짝지어 말하게 한다. 결과만 적고 바꾼 곳을 적지 않는 학생에게 "무엇을 바꾸었더니 이렇게 되었는지도 적어 둘까요?"라고 묻는다.',
        task: '고친 기록을 정리하는 차례를 놓고, 알맞은 정리 방법을 골라요.',
        levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
        items: [
          { prompt: '프로그램을 고치고 정리하는 차례를 위에서부터 놓아 보세요.', toolOptions: { mode: 'order', cards: [{ id: 'run', text: '처음 프로그램을 실행해 결과를 적어요' }, { id: 'fix', text: '한 군데만 고쳐요' }, { id: 'again', text: '다시 실행해 결과를 적어요' }, { id: 'cmp', text: '고치기 전과 후를 견주어 정리해요' }] }, hints: ['처음 결과가 있어야 고친 뒤와 견줄 수 있어요. 고치고 다시 실행한 다음에 견주는 순서를 떠올려요.'], target: { order: ['run', 'fix', 'again', 'cmp'] }, difficulty: 0.3 },
          { prompt: '고친 기록에 꼭 적을 것만 골라 보세요.', toolOptions: { mode: 'pick', topic: '고친 기록', cards: ['어느 블록을 어떻게 바꾸었는지', '바꾸기 전과 후의 결과', '친구가 만든 프로그램 이름', '실행한 날의 날씨'] }, hints: ['무엇을 바꾸었고 그 결과가 어떻게 달라졌는지가 담긴 정보만 골라요. 상관없는 정보는 빼요.'], target: { pick: ['어느 블록을 어떻게 바꾸었는지', '바꾸기 전과 후의 결과'] }, difficulty: 0.3 },
          { prompt: '고친 결과를 견줄 때 알맞은 말과 아닌 말을 나누어 보세요.', toolOptions: { topic: '견주는 말', slots: ['알맞은 말', '알맞지 않은 말'], cards: ['반복 횟수를 한 번 늘렸더니 깃발에 닿았어요', '돌기 방향을 바꾸었더니 판 밖으로 안 나가요', '여러 곳을 바꾸었더니 되었어요', '그냥 다시 만들었어요'] }, hints: ['바꾼 것과 달라진 결과를 짝지어 말한 문장이 알맞은 말이에요. 무엇을 바꾸었는지 모르는 말은 알맞지 않아요.'], target: { sort: { '알맞은 말': ['반복 횟수를 한 번 늘렸더니 깃발에 닿았어요', '돌기 방향을 바꾸었더니 판 밖으로 안 나가요'], '알맞지 않은 말': ['여러 곳을 바꾸었더니 되었어요', '그냥 다시 만들었어요'] } }, difficulty: 0.35 },
        ],
      },
    ],
    exit: {
      teacher: '"이 단원에서 지속가능한 기술과 융합 가운데 가장 인상 깊었던 것은 무엇인가요?" 구조물·디지털·로봇 중 하나를 고르고 까닭을 말하게 한다. 출구 2번에서 여러 곳을 한꺼번에 바꾸는 것을 고른 학생에게 "무엇이 결과를 바꾸었는지 알 수 있을까요?"라고 되묻는다. 단원 전체를 환경을 덜 해치는 구조물, 디지털 도구와 공유, 로봇의 구조와 코딩을 이어 우리 생활을 지속가능하게 바꾸는 기술로 마무리한다.',
      items: [
        { type: 'tool', tool: 'block-coding', options: { cols: 5, rows: 3, start: { x: 0, y: 1, dir: 'E' }, goal: { x: 4, y: 1 }, blocks: ['fwd', 'left', 'right'] }, state: { program: ['fwd', 'fwd', 'fwd'] }, prompt: '로봇이 깃발 앞에서 멈춰요. 블록 하나만 보태 보세요.', target: { reach: true, maxEdits: 1 }, difficulty: 0.2 },
        { type: 'choice', prompt: '뜻대로 되지 않은 부분을 고칠 때 알맞은 방법은 무엇인가요?', options: ['한 군데씩 고치고 다시 실행해요', '여러 곳을 한꺼번에 바꿔요', '고치지 않고 포기해요'], answer: 0, difficulty: 0.2, explain: '한 군데씩 고쳐 다시 실행해야 무엇이 결과를 바꾸었는지 알 수 있어요.' },
        { type: 'short', prompt: '이 단원에서 배운 기술로 우리 생활을 더 지속가능하게 바꿀 방법 한 가지를 쓰세요.' },
        { type: 'mood', prompt: '이 단원 공부는 어땠나요?' },
      ],
    },
    ws: {
      title: '단원 돌아보기 — 구조물·디지털·로봇',
      items: [
        { type: 'figure', prompt: '고치기 전 프로그램을 따라가 로봇이 멈추는 칸에 ○ 하세요.', tool: 'block-coding', options: { mode: 'trace', cols: 6, rows: 4, start: { x: 0, y: 3, dir: 'E' }, program: ['rep:3', 'fwd', 'end', 'left', 'rep:2', 'fwd', 'end'], printProgram: true }, figures: [{ state: {}, caption: '반복 3번 [앞으로] → 왼쪽 돌기 → 반복 2번 [앞으로]' }], answer: '(3, 1)' },
        { type: 'table', prompt: '단원 자기 평가: 알맞은 칸에 ○ 하세요.', columns: ['나는', '잘해요', '조금 해요', '아직이에요'], cells: [['환경을 덜 해치는 구조물의 특징을 말할 수 있어요', '', '', ''], ['발표 자료를 만들고 올리기 전에 점검해요', '', '', ''], ['로봇을 감지·판단·움직임으로 설명할 수 있어요', '', '', ''], ['블록 프로그램을 한 군데씩 고칠 수 있어요', '', '', '']] },
        { type: 'choice', prompt: '고친 결과를 견주는 말에 ○ 하세요.', options: ['반복 횟수를 늘렸더니 깃발에 닿았어요', '그냥 다시 만들었어요', '여러 곳을 바꿨더니 됐어요'], answer: '반복 횟수를 늘렸더니 깃발에 닿았어요' },
        { type: 'short', prompt: '이 단원에서 가장 뿌듯했던 일과 앞으로의 다짐을 쓰세요.' },
      ],
      easy: {
        note: '고칠 때는 한 군데만 바꾸고 다시 실행해요. 바꾼 것과 달라진 결과를 적어 두어요.',
        items: [
          { type: 'figure', prompt: '프로그램을 따라가 멈추는 칸에 ○ 하세요.', tool: 'block-coding', options: { mode: 'trace', cols: 5, rows: 3, start: { x: 0, y: 1, dir: 'E' }, program: ['rep:2', 'fwd', 'end', 'left', 'fwd'], printProgram: true }, figures: [{ state: {}, caption: '반복 2번 [앞으로] → 왼쪽 돌기 → 앞으로' }], answer: '(2, 0)' },
          { type: 'table', prompt: '자기 평가: 알맞은 칸에 ○ 하세요.', columns: ['나는', '잘해요', '아직이에요'], cells: [['로봇 구조를 설명할 수 있어요', '', ''], ['프로그램을 고칠 수 있어요', '', '']] },
          { type: 'choice', prompt: '고칠 때 알맞은 방법에 ○ 하세요.', options: ['한 군데씩 고쳐요', '모두 바꿔요'], answer: '한 군데씩 고쳐요' },
          { type: 'short', prompt: '이 단원에서 재미있었던 일을 쓰세요.' },
        ],
      },
    },
    diff: ['짜기·고치기 문제는 앞으로·돌기 블록 중심이고, 정리 차례 놓기는 맞게 놓으면 초록 테두리가 생겨요.', '모두 풀고 확인을 눌러 스스로 고쳐요.', '짜기 문제에 블록 수 제한과 별 모으기가 더해지고 고치기에 반복 횟수가 틀린 프로그램이 나와요.'],
    notes: '자주 보이는 어려움: ① 여러 곳을 한꺼번에 바꾸어 무엇이 결과를 바꾸었는지 모른다 → 한 번에 한 군데씩 바꾸고 바로 실행하게 한다. ② 고친 결과만 적고 바꾼 곳은 적지 않는다 → 어느 블록을 어떻게 바꾸었는지 한 줄로 적게 한다. ③ 안 되면 포기하고 새로 만든다 → 처음 프로그램을 두고 엉뚱하게 움직인 블록을 찾게 한다. 단원 자기 평가의 \'아직이에요\'는 꾸중이 아니라 다음 목표로 다룬다.',
  }));


  PaperLessons.registerUnit({
    id: 'g5-prac-2-04', schema: 'edu-unit.v1', catalogUnit: U.catalog,
    grade: U.grade, subject: U.subject, unitTitle: U.unitTitle,
    flow: '1~4차시는 친환경 건설 구조물이다: 둘레의 구조물을 머무는 것과 잇고 나르는 것으로 나누고 에너지·물·재료·생물의 네 갈래로 친환경 특징을 가린 뒤, 종이 다리 모형으로 견디는 무게를 재고 무너진 자리를 찾아 뼈대를 바꾸어 앞뒤를 견준다. 5~7차시는 디지털 기기와 콘텐츠 저작이다: 생활 속 디지털 기술과 담을 내용에 맞는 도구를 고르고, 보기 쉬운 화면을 점검표로 다듬은 뒤 시험 발표에서 받은 의견으로 고친다. 8~10차시는 사이버 공유이다: 올려도 되는 내용과 지울 내용, 출처 표시를 점검표로 확인해 올리고 받은 의견에 예의를 갖추어 답하며 한 번 올린 자료가 남는다는 점을 안다. 11~13차시는 로봇의 개념과 구조로 감지·판단·움직임을 가르고 교육용 로봇을 안전하게 켜서 어긋난 값을 한 군데씩 바꾼다. 14~16차시는 로봇의 종류와 작동 원리로 쓰임과 분야에 따른 갈래, 센서와 움직임의 차이를 견주고 조사한 로봇의 흐름을 도식으로 설명한다. 17~19차시는 로봇 코딩으로 센서 값이 조건 규칙으로 동작에 이어지는 것을 조건 블록으로 만들고, 짜서 실행한 결과를 고쳐 앞과 견주며 단원을 마무리한다.',
    refs: {},
    lessons: L,
  });
})();
