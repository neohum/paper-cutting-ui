/* 4학년 1학기 사회 1. 지도로 만나는 우리 지역 — 방위표와 기호로 지도 읽기 (지도의 요소: 방위, 기호와 범례)
 * 지도는 지어낸 '종이 마을'이다. 지도 위쪽이 북쪽이며, 학교를 가운데 두고 건물이 45°씩 떨어져 있어 8방위가 정확하다.
 */
PaperLessons.register({
  id: 'g4-social-map',
  schema: 'edu-lesson.v1',
  catalog: { unit: 'g4-사회-1학기-1', lesson: 2 },
  grade: 4, subject: '사회', unitTitle: '1. 지도로 만나는 우리 지역',
  title: '방위표와 기호로 지도 읽기',
  objective: '방위표와 기호, 범례를 활용하여 지도에서 장소의 위치와 방향을 읽을 수 있다.',
  standards: ['[4사05-01]', '[4사05-02]'],
  minutes: 40,
  formats: ['chromebook', 'projector', 'print'],
  illustration: {
    prompt: 'Layered paper-cut illustration of a small village map with a winding river, rolling hills, a school with a flag and a big compass rose in the corner, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.',
    scene: { viewBox: [480, 270], layers: [
      { motif: 'cloud', x: 110, y: 52 }, { motif: 'cloud', x: 300, y: 40, s: 0.7 }, { motif: 'mountain', x: 96, y: 206, s: 0.95 }, { motif: 'mountain', x: 176, y: 210, s: 0.6, color: 'mint' },
      { motif: 'hills', y: 204 },
      { motif: 'house', x: 262, y: 228, color: 'buttercup' },
      { motif: 'house', x: 356, y: 232, s: 0.8 },
      { motif: 'tree', x: 312, y: 228, s: 0.8 },
      { motif: 'star', x: 420, y: 64, color: 'lavender' },
      { motif: 'bird', x: 214, y: 92 },
      { motif: 'text', x: 240, y: 150, text: '지도로 우리 마을을 읽어요', size: 22 },
    ] },
  },
  stages: [
    {
      id: 'intro', title: '도입', minutes: 6,
      teacher: '"친구에게 우리 집에서 학교까지 가는 길을 말로만 알려 주려면 무엇이 필요할까요?" 왼쪽·오른쪽은 서 있는 방향에 따라 바뀐다는 점을 짚고, 시연 단추로 방위표 바늘이 북쪽과 북동쪽을 가리키는 모습을 보여 준다.',
      student: '지도에서 "어느 쪽"인지 정확하게 말하려면 무엇이 필요할지 생각해 봅시다.',
      demo: { tool: 'mapcompass', options: { mode: 'direction', points: 8, roseLabels: 'all', from: '학교', to: '우체국' }, sequence: [{ direction: '북', from: '학교', to: '시청' }, { direction: '북동', from: '학교', to: '우체국' }] },
    },
    {
      id: 'main', title: '전개', minutes: 27,
      activities: [
        {
          id: 'a1', title: '활동 1. 네 방위로 찾기', minutes: 8, tool: 'mapcompass',
          options: { mode: 'direction', points: 4 },
          task: '초록 동그라미("여기서") 건물에서 봐요. 빨간 점선("어디?") 건물은 어느 쪽에 있나요? 방위표(방향을 알려 주는 표)의 단추를 누르거나 바늘을 돌려요.',
          teacher: '"방위표가 없으면 지도의 위쪽이 북쪽이에요. 북쪽을 보고 섰을 때 오른쪽이 동쪽, 왼쪽이 서쪽이에요." 오른팔을 동쪽으로 뻗어 몸으로 방위를 익히게 한다.',
          levels: {
            easy: { roseLabels: 'all' },
            base: { roseLabels: 'north' },
            challenge: { roseLabels: 'north', names: false, showReadout: false },
          },
          items: [
            // 처음 두 문항은 동서남북 이름을 모두 보여 준다(네 방위 낱말을 처음 익히는 문항). 3번부터 기본은 '북'만 남긴다.
            { prompt: '학교에서 보았을 때 시청은 어느 쪽에 있나요?', target: { direction: '북', from: '학교', to: '시청' }, toolOptions: { roseLabels: 'main' }, difficulty: 0 },
            { prompt: '학교에서 보았을 때 경찰서는 어느 쪽에 있나요?', target: { direction: '서', from: '학교', to: '경찰서' }, toolOptions: { roseLabels: 'main' }, difficulty: 0.03 },
            { prompt: '시청에서 보았을 때 도서관은 어느 쪽에 있나요?', target: { direction: '남', from: '시청', to: '도서관' }, difficulty: 0.06 },
            { prompt: '병원에서 보았을 때 우체국은 어느 쪽에 있나요?', target: { direction: '동', from: '병원', to: '우체국' }, difficulty: 0.08 },
          ],
        },
        {
          id: 'a2', title: '활동 2. 여덟 방위로 찾기', minutes: 8, tool: 'mapcompass',
          options: { mode: 'direction', points: 8 },
          task: '북쪽과 동쪽 사이처럼, 두 방위 사이의 방위까지 써서 더 정확하게 나타내요. 이름이 없는 단추에 손가락이나 마우스를 올리면 이름이 나와요.',
          teacher: '"북쪽과 동쪽 사이는 무엇이라고 부를까요?" 8방위는 북·남을 앞에 붙여 북동, 남동, 남서, 북서라고 부른다는 것을 확인한다.',
          levels: {
            easy: { roseLabels: 'all' },
            base: { roseLabels: 'main' },
            challenge: { roseLabels: 'north', names: false, showReadout: false },
          },
          items: [
            { prompt: '학교에서 보았을 때 우체국은 어느 쪽에 있나요?', target: { direction: '북동', from: '학교', to: '우체국' }, difficulty: 0.1 },
            { prompt: '학교에서 보았을 때 소방서는 어느 쪽에 있나요?', target: { direction: '남서', from: '학교', to: '소방서' }, difficulty: 0.12 },
            { prompt: '도서관에서 보았을 때 공원은 어느 쪽에 있나요?', target: { direction: '북동', from: '도서관', to: '공원' }, difficulty: 0.15 },
            { prompt: '병원에서 보았을 때 기차역은 어느 쪽에 있나요?', target: { direction: '남동', from: '병원', to: '기차역' }, difficulty: 0.15 },
          ],
        },
        {
          id: 'a3', title: '활동 3. 기호와 범례 완성하기', minutes: 6, tool: 'mapcompass',
          options: { mode: 'legend', blank: ['병원', '우체국', '소방서', '도서관', '공원'] },
          task: '지도에 쓰인 기호의 모양을 보고, 기호 스티커를 범례의 알맞은 빈칸에 붙여 봅시다.',
          teacher: '"기호는 왜 쓸까요?" 글자로 다 쓰면 지도가 복잡해지므로 간단한 그림으로 약속한다는 점, 그 약속을 모아 둔 것이 범례라는 점을 정리한다.',
          levels: {
            easy: { names: true },
            base: { names: false },
            challenge: { names: false, extra: ['기차역', '경찰서'] },
          },
          items: [
            { prompt: '기호의 모양을 잘 살펴보고, 범례의 빈칸 다섯 곳에 알맞은 기호 스티커를 붙이세요.', target: { legend: { 병원: 'cross', 우체국: 'envelope', 소방서: 'fire', 도서관: 'book', 공원: 'tree' } }, difficulty: 0.12 },
            { prompt: '우리 마을에 새로 생기면 좋을 곳을 한 가지 정하고, 어떤 기호로 나타낼지 짝과 이야기한 뒤 "다 했어요"를 누르세요.', free: true, talk: true, difficulty: 0 },
          ],
        },
        {
          id: 'a4', title: '활동 4. 방위와 기호로 빈 터 채우기', minutes: 5, tool: 'mapcompass', pair: true,
          // 빈 터 4곳 가운데 소방서 자리는 어느 문항의 답도 아니다 — 기준 장소를 학교로 착각하면 그곳에 붙이게 되는 함정 자리.
          // 불꽃 스티커도 함께 나와 기본 단계에도 방해 스티커가 하나 있다.
          options: { mode: 'place', hidden: ['병원', '경찰서', '공원', '소방서'] },
          task: '설명을 읽고 범례에서 기호를 찾아, 지도의 알맞은 빈 터에 붙여요. 먼저 "어디에서 보았을 때"인지 기준 장소를 찾아요.',
          teacher: '짝이 방위로 설명하고 다른 짝이 스티커를 붙이게 한 뒤 역할을 바꾼다. "어디에서 보았을 때"를 꼭 넣어 말하게 한다. 2·3번은 기준 장소가 학교가 아니다.',
          levels: {
            easy: { roseLabels: 'all' },
            base: { roseLabels: 'main' },
            challenge: { roseLabels: 'north', extra: ['우체국', '기차역'] },
          },
          items: [
            { prompt: '학교의 북서쪽에 병원이 있어요. 병원 기호를 알맞은 빈 터에 붙이세요.', target: { place: { 병원: 'cross' }, from: '학교', direction: '북서' }, difficulty: 0.08 },
            { prompt: '시청의 남서쪽에 경찰서가 있어요. 경찰서 기호를 알맞은 빈 터에 붙이세요.', target: { place: { 경찰서: 'shield' }, from: '시청', direction: '남서' }, difficulty: 0.2 },
            { prompt: '도서관의 북동쪽에 공원이 있어요. 공원 기호를 알맞은 빈 터에 붙이세요.', target: { place: { 공원: 'tree' }, from: '도서관', direction: '북동' }, difficulty: 0.18 },
          ],
        },
      ],
    },
    {
      id: 'wrapup', title: '정리', minutes: 7,
      teacher: '"지도를 읽을 때 꼭 먼저 보아야 할 것 두 가지는?"(방위표, 범례) 출구 질문 결과에서 기준 장소를 바꿔 답한 학생이 많으면 "○○에서 보았을 때"를 다시 짚는다.',
      exitTicket: [
        { type: 'choice', prompt: '지도에 쓰인 기호와 그 뜻을 모아 한곳에 정리해 놓은 것을 무엇이라고 하나요?', options: ['방위표', '범례', '축척'], answer: 1, difficulty: 0.05, explain: '범례는 지도에 쓰인 기호와 그 뜻을 모아 놓은 것이에요. 방위표는 방향을, 축척은 실제 거리를 얼마나 줄였는지를 알려 줘요.' },
        { type: 'tool', tool: 'mapcompass', options: { mode: 'direction', points: 8, roseLabels: 'main', from: '경찰서', to: '도서관' }, prompt: '경찰서에서 보았을 때 도서관은 어느 쪽인지 나타내 보세요.', target: { direction: '남동', from: '경찰서', to: '도서관' }, difficulty: 0.15 },
        { type: 'choice', prompt: '방위표가 없는 지도에서 북쪽은 보통 어디인가요?', options: ['지도의 위쪽', '지도의 아래쪽', '내가 바라보는 쪽'], answer: 0, difficulty: 0.05, explain: '방위표가 없으면 보통 지도의 위쪽을 북쪽으로 봐요. 내가 바라보는 쪽은 서 있는 방향에 따라 바뀌어요.' },
        { type: 'mood', prompt: '오늘 공부는 어땠나요?' },
      ],
    },
  ],
  worksheet: {
    title: '방위표와 기호로 지도 읽기',
    items: [
      { type: 'figure', prompt: '종이 마을 지도를 보고 방위표의 빈 동그라미에 알맞은 방위를 쓰세요.', tool: 'mapcompass', options: { mode: 'direction', points: 8, roseLabels: 'north', names: false }, figures: [
        { caption: '종이 마을 지도 (범례를 보고 건물을 찾아요)' }], answer: '북에서 시계 방향으로 북 · 북동 · 동 · 남동 · 남 · 남서 · 서 · 북서' },
      { type: 'blank', prompt: '지도를 보고 빈칸에 알맞은 방위를 쓰세요.', text: '학교에서 보았을 때 기차역은 ___쪽에, 병원에서 보았을 때 우체국은 ___쪽에 있습니다.', answer: '남동, 동' },
      { type: 'choice', prompt: '종이 마을의 강은 마을의 어느 쪽에 흐르나요?', options: ['북쪽', '동쪽', '남쪽', '서쪽'], answer: '동쪽' },
      { type: 'table', prompt: '우리 학교 둘레에 있는 곳 두 곳을 골라 나만의 기호를 그리고 뜻과 까닭을 쓰세요.', columns: ['기호', '뜻', '그렇게 만든 까닭'], rows: 2, answer: '정답이 따로 없음 — 기호 모양이 그곳에서 하는 일과 이어지는지 본다' },
    ],
    easy: {
      note: '지도의 위쪽이 북쪽, 아래쪽이 남쪽, 오른쪽이 동쪽, 왼쪽이 서쪽이에요. 북동은 북쪽과 동쪽 사이예요.',
      items: [
        { type: 'figure', prompt: '종이 마을 지도를 보고 방위표의 빈 동그라미에 알맞은 방위를 쓰세요.', tool: 'mapcompass', options: { mode: 'direction', points: 8, roseLabels: 'main', names: true }, figures: [
          { caption: '종이 마을 지도 (건물 이름이 쓰여 있어요)' }], answer: '북동 · 남동 · 남서 · 북서' },
        { type: 'blank', prompt: '지도를 보고 빈칸에 알맞은 방위를 쓰세요.', text: '학교에서 보았을 때 시청은 ___쪽에, 공원은 ___쪽에 있습니다.', answer: '북, 동' },
        { type: 'choice', prompt: '종이 마을의 강은 마을의 어느 쪽에 흐르나요?', options: ['북쪽', '동쪽', '남쪽', '서쪽'], answer: '동쪽' },
        { type: 'table', prompt: '우리 학교 둘레에 있는 곳 한 곳을 골라 나만의 기호를 그리고 뜻을 쓰세요.', columns: ['기호', '뜻'], rows: 1, answer: '정답이 따로 없음 — 기호 모양과 뜻이 이어지는지 본다' },
      ],
    },
  },
  differentiation: {
    easy: '방위표의 모든 방위 이름과 지도 위 건물 이름이 보이고, 고른 방위가 글자로 나타나요. 기본 단계에서도 이름 없는 사이 방위 단추에 손을 올리면 이름과 뜻("북쪽과 동쪽 사이")이 나와요.',
    challenge: '방위표에 북쪽만 표시되고 건물 이름이 없어서, 범례로 기호를 읽고 나머지 방위를 스스로 떠올려야 해요.',
  },
  teacherNotes: '오개념 1) 방위를 왼쪽·오른쪽과 같은 것으로 여긴다 — 왼쪽·오른쪽은 몸의 방향에 따라 바뀌지만 방위는 바뀌지 않음을 교실에서 몸을 돌려 확인한다. 2) 기준 장소를 바꿔 답한다("학교에서 보았을 때 우체국"을 우체국에서 본 방향으로 답함) — 출발 장소에 손가락을 올려놓고 읽게 한다. 3) 8방위를 "동북, 서남"처럼 부른다 — 우리나라 교과서는 북·남을 앞에 두어 북동·남동·남서·북서로 부른다. 4) 지도의 위쪽이 언제나 북쪽이라고 여긴다 — 방위표가 있으면 방위표를 따르고, 없을 때만 위쪽을 북쪽으로 본다. 5) 기호가 모든 지도에서 같다고 여긴다 — 이 지도의 기호 일부는 종이 마을에서 정한 약속이므로, 다른 지도를 읽을 때는 반드시 그 지도의 범례를 먼저 확인하게 한다.',
});
