/* 5학년 1학기 과학 3. 용해와 용액 — 12차시
 * 용해(1~4: 녹는 현상·종류와 온도에 따른 양) → 용액의 진하기(5~8) → 생활 속 용액(9~12). 컵·저울·방울토마토 실험을 카드·그래프·용해 교구로 앞뒤에서 받친다.
 * 수치(g·숟가락·온도·뜬 높이)는 모두 예시이며 실제 실험값은 물질·방법에 따라 다르다.
 */
(function () {
  const U = { grade: 5, subject: '과학', unitTitle: '3. 용해와 용액' };
  const CU = 'g5-과학-1학기-3';
  const P = (what) => `Layered paper-cut illustration of ${what}, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.`;
  const L = (n, rest) => Object.assign({
    id: `g5-sci-1-03-${String(n).padStart(2, '0')}`, schema: 'edu-lesson.v1',
    catalog: { unit: CU, lesson: n }, minutes: 40, formats: ['chromebook', 'projector', 'print'],
  }, U, rest);
  const MOOD = { type: 'mood', prompt: '오늘 공부는 어땠나요?' };
  const LV = { easy: { live: true, instant: true }, base: {}, challenge: {} };
  const LVD = { easy: { showConc: true }, base: {}, challenge: {} };
  const SAFE_TASTE = '실험에 쓰는 가루와 물은 맛보지 않고 입에 넣지 않아요.';
  const SAFE_GLASS = '유리컵과 비커는 깨지기 쉬워요. 깨지면 손대지 말고 선생님께 알려요.';
  const SAFE_HOT = '뜨거운 물은 선생님이 따라 주실 때만 쓰고, 손이나 얼굴에 튀지 않게 조심해요.';
  const SAFE_WASH = '실험이 끝나면 손을 깨끗이 씻어요.';
  const scene = (extra, text, size) => ({ viewBox: [480, 270], layers: [].concat(extra, [{ motif: 'text', x: 240, y: 134, text, size: size || 21 }]) });
  const A = (id, title, minutes, tool, task, teacher, levels, items, more) => Object.assign({ id, title, minutes, tool, task, teacher, levels, items }, more || {});
  const TEMPS = [{ name: '차가운 물', limit: 20 }, { name: '따뜻한 물', limit: 35 }];
  const SALT_TEMPS = [{ name: '차가운 물', limit: 35 }, { name: '따뜻한 물', limit: 37 }];

  const lessons = [
    // ───────────────────────── 1차시 (intro) ─────────────────────────
    L(1, {
      title: '물에 넣고 저으면 사라지는 가루와 가라앉는 가루 가르기',
      objective: '물에 가루를 넣어 저었을 때 녹는 것과 녹지 않는 것을 가르고, 녹는 물질(용질)·녹이는 물질(용매)·골고루 섞인 것(용액)을 구분해 말할 수 있다.',
      standards: ['[6과03-01]'],
      safety: [SAFE_TASTE, SAFE_GLASS, SAFE_WASH],
      illustration: {
        prompt: P('a clear cup of water where white sugar crystals are dissolving into soft swirls while a second cup shows sand settled at the bottom, with a spoon beside each cup'),
        scene: scene([
          { motif: 'wave', y: 238 }, { motif: 'cloud', x: 90, y: 50, s: 0.8 }, { motif: 'sun', x: 410, y: 52, s: 0.7 },
          { motif: 'hills', y: 214, colors: ['sky', 'mint', 'lavender'] }, { motif: 'flower', x: 400, y: 230 },
        ], '설탕은 어디로 갔을까요?'),
      },
      stages: [
        {
          id: 'intro', title: '도입', minutes: 7,
          teacher: '"설탕을 물에 넣고 저으면 설탕이 어떻게 되나요? 사라진 걸까요?" 학생의 예상을 들은 뒤 투명한 컵에 설탕과 모래를 각각 넣고 저어 보인다. 설탕이 아예 없어졌다고 생각하는 학생이 많으니 "정말 없어졌는지는 어떻게 알 수 있을까요?"라고 묻고, 다음 시간에 무게로 확인한다고 말해 둔다. 맛을 보고 확인하자는 제안은 안전 약속으로 막는다.',
          student: '설탕을 물에 넣고 저으면 설탕은 어떻게 될까요? 모래는 어떻게 될까요?',
          demo: { tool: 'timeline', options: { shuffle: false, axis: ['먼저', '나중'], cards: [{ id: '넣기', text: '설탕을 물에 넣어요' }, { id: '젓기', text: '숟가락으로 저어요' }, { id: '관찰', text: '알갱이가 보이지 않아요' }] }, sequence: [{ order: ['넣기', '젓기', '관찰'] }] },
        },
        {
          id: 'main', title: '전개', minutes: 25,
          activities: [
            A('a1', '활동 1. 물에 녹는 가루와 녹지 않는 가루 가르기', 10, 'mindmap',
              '물에 넣고 저은 결과를 보고 녹아서 보이지 않는 것과 가라앉거나 떠 있는 것으로 나누어요. 카드를 끌거나 눌러 고른 뒤 칸을 눌러요.',
              '"저은 뒤 알갱이가 보이면 녹은 걸까요?" 투명하게 변해도 아주 고운 가루는 뿌옇게 남는다는 점을 짚는다. 밀가루가 녹았다고 고른 학생에게는 "가만히 두면 바닥에 가라앉을까요?"라고 묻고 비교해 보게 한다. 사라진 것이 아니라 물에 골고루 섞인 것이라는 말은 다음 활동에서 정리한다.',
              LV, [
                { prompt: '물에 넣고 저었을 때 녹는 것과 녹지 않는 것으로 나누어 보세요.',
                  toolOptions: { mode: 'sort', topic: '가루와 물', slots: ['녹아요', '녹지 않아요'], cards: ['설탕', '소금', '모래', '쌀알'] },
                  target: { sort: { '녹아요': ['설탕', '소금'], '녹지 않아요': ['모래', '쌀알'] } }, difficulty: 0.1 },
                { prompt: '다른 가루도 물에 넣고 저었어요. 녹는 것과 녹지 않는 것으로 나누어 보세요.',
                  toolOptions: { mode: 'sort', topic: '가루와 물', slots: ['녹아요', '녹지 않아요'], cards: ['주스 가루', '인스턴트 커피 가루', '분필 가루', '밀가루'] },
                  target: { sort: { '녹아요': ['주스 가루', '인스턴트 커피 가루'], '녹지 않아요': ['분필 가루', '밀가루'] } }, difficulty: 0.2 },
                { prompt: '설탕물에서 각각 무엇인지 이어 보세요. 알맞지 않은 카드는 남겨 둬요.',
                  toolOptions: { mode: 'match', topic: '설탕물', slots: [{ id: 'c1', label: '녹는 물질(설탕)' }, { id: 'c2', label: '녹이는 물질(물)' }, { id: 'c3', label: '골고루 섞인 설탕물' }], cards: [
                    { id: '용질', text: '용질' }, { id: '용매', text: '용매' }, { id: '용액', text: '용액' }, { id: '용해', text: '용해', why: '용해는 녹는 현상의 이름이에요.' }] },
                  target: { match: { c1: '용질', c2: '용매', c3: '용액' } }, difficulty: 0.25,
                  predict: { q: '설탕이 물에 녹으면 설탕은 어떻게 될까요?', options: ['아예 없어져요', '아주 작은 알갱이로 물에 골고루 퍼져요', '잘 모르겠어요'], answer: 1 },
                  conclude: '녹는 물질은 용질, 녹이는 물질은 용매, 골고루 섞인 것은 용액이에요.' },
              ]),
            A('a2', '활동 2. 설탕이 녹는 차례 놓기', 8, 'timeline',
              '설탕이 물에 녹는 모습을 일어난 차례대로 카드로 놓아요. 먼저 일어난 일이 왼쪽이에요.',
              '"설탕 알갱이가 물속에서 어떻게 바뀌어 가는지 말로 이어 봐요." 알갱이가 작아져 물속에 골고루 퍼진다는 말이 나오게 한다. "녹으면서 설탕이 가루로 사라져요"라는 대답에는 "사라진 알갱이는 어디 있을까요?"라고 되묻는다.',
              LV, [
                { prompt: '설탕이 물에 녹는 차례대로 놓아 보세요.',
                  toolOptions: { axis: ['먼저', '나중'], cards: [{ id: '넣기', text: '설탕 알갱이를 물에 넣어요' }, { id: '작아짐', text: '알갱이가 점점 작아져요' }, { id: '퍼짐', text: '물속에 골고루 퍼져요' }, { id: '투명', text: '물이 투명하게 보여요' }] },
                  target: { order: ['넣기', '작아짐', '퍼짐', '투명'] }, difficulty: 0.15 },
                { prompt: '소금을 녹이는 실험 차례대로 놓아 보세요.',
                  toolOptions: { axis: ['먼저', '나중'], cards: [{ id: '물', text: '컵에 물을 따라요' }, { id: '소금', text: '소금을 한 숟가락 넣어요' }, { id: '젓기', text: '숟가락으로 저어요' }, { id: '관찰', text: '소금이 보이는지 살펴요' }] },
                  target: { order: ['물', '소금', '젓기', '관찰'] }, difficulty: 0.2 },
                { prompt: '모래를 넣었을 때 일어나는 일을 차례대로 놓아 보세요.',
                  toolOptions: { axis: ['먼저', '나중'], cards: [{ id: '넣기', text: '모래를 물에 넣어요' }, { id: '젓기', text: '저으면 물이 뿌예져요' }, { id: '가라앉음', text: '가만히 두면 바닥에 가라앉아요' }] },
                  target: { order: ['넣기', '젓기', '가라앉음'] }, difficulty: 0.2,
                  conclude: '모래는 저어도 물에 골고루 섞이지 않고 시간이 지나면 가라앉아요.' },
              ]),
            A('a3', '활동 3. 진짜 컵으로 확인하는 짝 실험', 7, 'mindmap',
              '컵에 물을 담고 설탕과 모래를 각각 넣어 저어 보며 짝과 달라진 점을 말해요.',
              '준비물(모둠): 투명한 컵 2개, 설탕, 모래, 숟가락, 물. 설탕과 모래를 한 숟가락씩 넣고 저은 뒤 5분 지나 어떻게 되는지 짝에게 말하게 한다. 실험에 쓴 가루는 입에 넣지 않으며 끝나면 손을 씻게 한다. "설탕은 보이지 않는데 정말 없어졌나요?"를 물어 다음 시간 무게 비교를 예고한다.',
              LV, [
                { prompt: '설탕을 녹인 물을 설명하는 카드만 바구니에 넣어 보세요.',
                  toolOptions: { mode: 'pick', topic: '설탕물', basket: '설탕물의 모습', cards: [
                    { id: 'a', text: '알갱이가 보이지 않아요' }, { id: 'b', text: '물이 투명해요' }, { id: 'c', text: '가만히 두어도 바닥에 가라앉지 않아요' },
                    { id: 'd', text: '설탕이 아예 사라졌어요', why: '설탕은 작아져 물속에 퍼져 있을 뿐이에요.' }, { id: 'e', text: '바닥에 설탕이 쌓여 있어요', why: '충분히 녹았다면 바닥에 쌓이지 않아요.' }] },
                  target: { pick: ['a', 'b', 'c'] }, difficulty: 0.15 },
                { prompt: '모래를 넣은 물을 설명하는 카드만 바구니에 넣어 보세요.',
                  toolOptions: { mode: 'pick', topic: '모래물', basket: '모래물의 모습', cards: [
                    { id: 'a', text: '저으면 물이 뿌예져요' }, { id: 'b', text: '가만히 두면 바닥에 가라앉아요' }, { id: 'c', text: '모래 알갱이가 보여요' },
                    { id: 'd', text: '물에 골고루 녹아요', why: '모래는 물에 녹지 않아요.' }] },
                  target: { pick: ['a', 'b', 'c'] }, difficulty: 0.2 },
                { prompt: '설탕물과 모래물에서 다음 모습이 나타나는 것을 나누어 보세요.',
                  toolOptions: { mode: 'sort', topic: '두 컵 견주기', slots: ['설탕물', '모래물'], cards: ['투명해요', '바닥에 가라앉아요', '알갱이가 안 보여요', '저으면 뿌예져요'] },
                  target: { sort: { '설탕물': ['투명해요', '알갱이가 안 보여요'], '모래물': ['바닥에 가라앉아요', '저으면 뿌예져요'] } }, difficulty: 0.25 },
                { difficulty: 0, prompt: '진짜 컵에 설탕과 모래를 넣고 저어 본 뒤, 달라진 점을 짝에게 말하고 "다 했어요"를 누르세요.', free: true, talk: true },
              ], { pair: true }),
          ],
        },
        {
          id: 'wrapup', title: '정리', minutes: 8,
          teacher: '"설탕은 물에 넣으면 어떻게 되나요? 사라졌나요?" 아주 작은 알갱이로 물에 골고루 퍼졌다고 말하게 한다. 출구 3번에서 용매를 용질로 고른 학생에게는 설탕물에서 무엇이 녹이는 물질인지 다시 짚는다.',
          exitTicket: [
            { type: 'choice', prompt: '물에 넣고 저었을 때 녹지 않는 것은 무엇인가요?', options: ['소금', '모래', '설탕'], answer: 1, difficulty: 0.1, explain: '모래는 물에 녹지 않고 바닥에 가라앉아요.' },
            { type: 'choice', prompt: '소금물에서 소금처럼 녹는 물질을 무엇이라고 하나요?', options: ['용매', '용질', '용액'], answer: 1, difficulty: 0.2, explain: '녹는 물질은 용질이에요. 녹이는 물은 용매이고 골고루 섞인 소금물은 용액이에요.' },
            { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '소금물', slots: [{ id: 'c1', label: '녹는 물질(소금)' }, { id: 'c2', label: '녹이는 물질(물)' }], cards: [{ id: '용질', text: '용질' }, { id: '용매', text: '용매' }, { id: '용액', text: '용액' }] }, prompt: '소금물에서 각각 무엇인지 이어 보세요.', target: { match: { c1: '용질', c2: '용매' } }, difficulty: 0.2 },
            MOOD,
          ],
        },
      ],
      worksheet: {
        title: '물에 녹는 것과 녹지 않는 것',
        items: [
          { type: 'table', prompt: '물에 넣고 저은 결과를 표에 적으세요. 녹으면 ○, 녹지 않으면 ×를 써요.', columns: ['넣은 것', '녹나요? (○ / ×)'], cells: [['설탕', ''], ['소금', ''], ['모래', ''], ['분필 가루', '']], answer: '○ / ○ / × / ×' },
          { type: 'choice', prompt: '설탕물의 모습으로 알맞은 것에 ○ 하세요.', options: ['설탕이 아예 없어졌어요', '설탕이 작아져 물에 골고루 퍼져 있어요', '설탕이 바닥에 가라앉아 있어요'], answer: '설탕이 작아져 물에 골고루 퍼져 있어요' },
          { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '소금물에서 소금은 ___, 물은 ___, 골고루 섞인 소금물은 ___(이)라고 해요.', answer: '용질, 용매, 용액' },
          { type: 'draw', prompt: '설탕이 물에 녹아 가는 모습을 세 칸에 순서대로 그려 보세요.' },
          { type: 'short', prompt: '"설탕을 물에 녹이면 설탕이 사라진다."는 말을 고쳐 써 보세요.', answer: '설탕은 사라지지 않고 아주 작은 알갱이가 되어 물속에 골고루 퍼진다.' },
        ],
        easy: {
          note: '녹는 것은 물에 골고루 퍼져 보이지 않아요. 녹지 않는 것은 바닥에 가라앉아요.',
          items: [
            { type: 'choice', prompt: '물에 녹는 것에 ○ 하세요.', options: ['소금', '모래'], answer: '소금' },
            { type: 'choice', prompt: '소금물에서 녹이는 물질은 무엇인가요?', options: ['물', '소금'], answer: '물' },
            { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '녹는 물질은 ___이에요.', answer: '용질' },
            { type: 'draw', prompt: '컵에 담긴 소금물과 모래물을 그리고 다른 점을 한 가지 써 보세요.' },
          ],
        },
      },
      differentiation: {
        easy: '맞는 칸에 놓은 카드에 초록 테두리가 생겨요. 실험 차례 카드가 적어요.',
        base: '모두 놓은 뒤 확인을 눌러 스스로 고쳐요. 용질·용매·용액 잇기에서 먼저 예상을 골라요.',
        challenge: '함정 카드가 섞이고, 모래·밀가루처럼 헷갈리는 가루를 가르는 문항이 더 어려워져요.',
      },
      teacherNotes: '자주 보이는 오개념: ① 설탕이 물에 녹으면 아예 없어진다 → 다음 시간에 무게를 재어 확인하며, 오늘은 알갱이가 작아져 퍼진다고 말한다. ② 알갱이가 안 보이면 모두 녹았다 → 밀가루처럼 고운 가루는 물이 뿌예진다. ③ 용질·용매·용액을 섞어 쓴다 → 설탕물을 예로 늘 세 가지를 함께 말하게 한다. 맛을 보는 확인은 하지 않는다.',
    }),

    // ───────────────────────── 2차시 (practice) ─────────────────────────
    L(2, {
      title: '녹이기 전과 후의 무게를 견주어 사라지지 않았음을 말하기',
      objective: '설탕을 녹이기 전과 후의 무게를 견주어 녹은 물질이 사라지지 않았다고 설명하고, 용해가 일어나는 과정을 차례로 말할 수 있다.',
      standards: ['[6과03-01]'],
      safety: [SAFE_TASTE, SAFE_GLASS, SAFE_WASH],
      illustration: {
        prompt: P('an old-style balance scale holding a cup of water with sugar on one side and the same cup with the sugar stirred in on the other side, both pans perfectly level'),
        scene: scene([
          { motif: 'star', x: 90, y: 52 }, { motif: 'cloud', x: 390, y: 52, s: 0.7 },
          { motif: 'hills', y: 218, colors: ['peach', 'lavender', 'mint'] }, { motif: 'tree', x: 400, y: 232, color: 'mint' },
        ], '녹이면 무게가 줄어들까요?'),
      },
      stages: [
        {
          id: 'intro', title: '도입', minutes: 6,
          teacher: '"설탕이 물에 녹아 보이지 않아요. 그럼 컵 전체의 무게는 줄었을까요, 그대로일까요?" 손을 들어 예상을 세어 둔다. 보이지 않으니 무게도 줄어든다고 답하는 학생이 많다. 전자저울로 녹이기 전 무게를 재어 보여 주고 "녹인 뒤에도 재어 볼게요. 어떻게 될 것 같은지 이유와 함께 적어 두세요"라고 말한다.',
          student: '설탕을 물에 녹이면 컵 전체의 무게는 줄어들까요, 그대로일까요? 이유와 함께 생각해 봐요.',
          demo: { tool: 'chart', options: { type: 'bar', data: [['녹이기 전', 160], ['녹인 뒤', 160]], unit: 'g', xLabel: '때', yLabel: '무게', scale: 20, given: [0] }, sequence: [{ build: true }] },
        },
        {
          id: 'main', title: '전개', minutes: 27,
          activities: [
            A('a1', '활동 1. 녹이기 전후 무게 그래프 읽기', 10, 'chart',
              '설탕을 녹이기 전과 후에 잰 무게(예시 값)를 막대그래프로 읽거나 완성해요.',
              '"무게가 줄었는지 늘었는지 막대 높이로 말해 봐요." 막대 높이가 같다는 것을 숫자로도 읽게 한다. 값이 같게 나오지 않은 모둠이 있다면 저울의 영점, 컵 밖 물방울, 떨어뜨린 설탕을 점검하게 한다. 값은 모두 예시이며 실제 모둠 값과 다를 수 있다.',
              { easy: { showValues: true }, base: {}, challenge: {} }, [
                { prompt: '설탕을 녹이기 전 무게는 막대가 그려져 있어요. 녹인 뒤 무게를 같은 높이로 완성하세요. (예시 값)',
                  toolOptions: { type: 'bar', title: '설탕 녹이기 전후 무게', data: [['녹이기 전', 160], ['녹인 뒤', 160]], unit: 'g', xLabel: '때', yLabel: '무게', scale: 20, given: [0] },
                  target: { build: true }, difficulty: 0.15 },
                { prompt: '소금을 녹인 실험의 무게 표를 보고 막대그래프를 완성하세요. (예시 값)',
                  toolOptions: { type: 'bar', title: '소금 녹이기 전후 무게', data: [['녹이기 전', 220], ['녹인 뒤', 220]], unit: 'g', xLabel: '때', yLabel: '무게', scale: 20, given: [0] },
                  target: { build: true }, difficulty: 0.2 },
                { prompt: '그래프를 보고 녹인 뒤 무게를 골라 보세요. (예시 값)',
                  toolOptions: { type: 'bar', mode: 'read', title: '주스 가루 녹이기 전후 무게', data: [['녹이기 전', 140], ['녹인 뒤', 140]], unit: 'g', xLabel: '때', scale: 20, choices: ['120 g', '140 g', '160 g'], question: '주스 가루를 녹인 뒤 무게는?', why: ['녹인 뒤 막대가 이보다 더 높아요.', '', '녹이기 전 막대와 같은 높이예요.'], explain: '녹이기 전과 녹인 뒤의 막대 높이가 같아서 140 g이에요.' },
                  target: { pick: 1 }, difficulty: 0.2,
                  conclude: '녹이기 전과 녹인 뒤의 무게가 같으므로 녹은 물질은 사라지지 않았어요.' },
              ]),
            A('a2', '활동 2. 사라졌다는 생각 고치기', 9, 'mindmap',
              '친구의 생각 가운데 무게를 근거로 고쳐 주는 말을 골라요. 맞지 않는 카드는 남겨 둬요.',
              '"사라졌다면 무게가 줄어야 하지 않을까요?" 실험 값을 근거로 고쳐 말하는 연습을 시킨다. 무게가 같은데도 사라졌다고 우기는 학생에게는 "안 보이는 것과 없는 것은 다른가요?"라고 묻고 소금물을 증발시키면 소금이 남는다는 사실을 다음 학년 이야기로 가볍게 알려 준다.',
              LV, [
                { prompt: '민지는 "설탕이 녹으면 사라진다."고 했어요. 고쳐 주는 데 필요한 카드를 골라 보세요.',
                  toolOptions: { mode: 'pick', topic: '민지의 말 고치기', basket: '고치는 말', cards: [
                    { id: 'a', text: '녹이기 전과 후의 무게가 같아요' }, { id: 'b', text: '설탕이 아주 작아져 물에 퍼진 거예요' },
                    { id: 'c', text: '설탕이 공기 중으로 날아갔어요', why: '컵 밖으로 나간 것이 없어요.' }, { id: 'd', text: '보이지 않으면 없는 거예요', why: '작아져 보이지 않을 뿐이에요.' }] },
                  target: { pick: ['a', 'b'] }, difficulty: 0.15 },
                { prompt: '관찰과 알게 된 점을 이어 보세요. 알맞지 않은 카드는 남겨 둬요.',
                  toolOptions: { mode: 'match', topic: '관찰과 결론', slots: [{ id: 'c1', label: '녹인 뒤에도 무게가 그대로예요' }, { id: 'c2', label: '알갱이가 보이지 않아요' }], cards: [
                    { id: 'a', text: '녹은 물질이 사라지지 않았어요' }, { id: 'b', text: '알갱이가 아주 작아졌어요' }, { id: 'c', text: '물이 설탕을 먹었어요', why: '물은 설탕을 먹지 않아요.' }] },
                  target: { match: { c1: 'a', c2: 'b' } }, difficulty: 0.2 },
                { prompt: '무게를 바르게 말한 카드만 바구니에 넣어 보세요. 컵 전체 무게를 말해요.',
                  toolOptions: { mode: 'pick', topic: '무게 말하기', basket: '바른 말', cards: [
                    { id: 'a', text: '녹이기 전 컵 전체 무게와 녹인 뒤 무게가 같아요' }, { id: 'b', text: '설탕이 물에 퍼져도 무게는 변하지 않아요' },
                    { id: 'c', text: '녹으면 무게가 줄어요', why: '무게가 줄지 않았어요.' }, { id: 'd', text: '녹으면 무게가 늘어요', why: '무게가 늘지도 않았어요.' }] },
                  target: { pick: ['a', 'b'] }, difficulty: 0.25,
                  predict: { q: '소금을 물에 녹이면 컵 전체 무게는 어떻게 될까요?', options: ['줄어요', '그대로예요', '늘어요'], answer: 1 },
                  conclude: '녹아도 물질은 사라지지 않아서 컵 전체의 무게는 그대로예요.' },
              ]),
            A('a3', '활동 3. 용해 과정 차례 놓기', 8, 'timeline',
              '실험에서 무게를 비교하는 차례와 용해가 일어나는 차례를 카드로 놓아요.',
              '"무게를 정확히 비교하려면 어떤 순서로 재야 할까요?" 녹이기 전에 컵과 설탕과 물을 함께 재야 한다는 점을 짚는다. 숟가락을 컵에서 꺼내 재면 무게가 줄어드는 오류가 생긴다는 점을 이야기로 알려 준다.',
              LV, [
                { prompt: '무게를 비교하는 차례대로 놓아 보세요.',
                  toolOptions: { axis: ['먼저', '나중'], cards: [{ id: '전', text: '컵·물·설탕을 모두 올려 무게를 재요' }, { id: '녹임', text: '설탕을 저어 녹여요' }, { id: '후', text: '녹인 뒤 컵 전체의 무게를 재요' }, { id: '비교', text: '두 무게를 견주어요' }] },
                  target: { order: ['전', '녹임', '후', '비교'] }, difficulty: 0.15 },
                { prompt: '소금이 물에 녹아 가는 차례대로 놓아 보세요.',
                  toolOptions: { axis: ['먼저', '나중'], cards: [{ id: '큰', text: '소금 알갱이가 보여요' }, { id: '작은', text: '알갱이가 작아지며 줄어요' }, { id: '골고루', text: '물속에 골고루 퍼져요' }] },
                  target: { order: ['큰', '작은', '골고루'] }, difficulty: 0.2 },
                { prompt: '결과를 정리하는 차례대로 놓아 보세요.',
                  toolOptions: { axis: ['먼저', '나중'], cards: [{ id: '기록', text: '잰 무게를 표에 적어요' }, { id: '견줌', text: '전과 후의 무게를 견주어요' }, { id: '결론', text: '녹은 물질이 사라지지 않았다고 말해요' }] },
                  target: { order: ['기록', '견줌', '결론'] }, difficulty: 0.2,
                  conclude: '표에 적고, 견주고, 알게 된 점을 말하는 차례로 정리해요.' },
              ]),
          ],
        },
        {
          id: 'wrapup', title: '정리', minutes: 7,
          teacher: '"설탕이 물에 녹으면 무게가 줄어드나요, 그대로인가요?" 무게가 그대로여서 사라지지 않았다고 근거와 함께 말하게 한다. 출구 3번에서 날아갔다고 고른 학생에게는 컵에서 나간 것이 없었다는 실험 조건을 짚는다.',
          exitTicket: [
            { type: 'tool', tool: 'chart', options: { type: 'bar', mode: 'read', title: '백반 녹이기 전후 무게', data: [['녹이기 전', 180], ['녹인 뒤', 180]], unit: 'g', xLabel: '때', scale: 20, choices: ['줄었어요', '그대로예요', '늘었어요'], question: '녹인 뒤 무게는 녹이기 전보다?', explain: '두 막대의 높이가 같아서 무게가 그대로예요.' }, prompt: '그래프를 보고 녹인 뒤 무게가 어떻게 되었는지 골라 보세요. (예시 값)', target: { pick: 1 }, difficulty: 0.15 },
            { type: 'choice', prompt: '설탕을 물에 녹인 뒤 컵 전체 무게가 녹이기 전과 같다면 알 수 있는 것은 무엇인가요?', options: ['설탕이 사라지지 않았다', '설탕이 물을 먹었다', '설탕이 공기가 되었다'], answer: 0, difficulty: 0.15, explain: '무게가 같으면 녹은 설탕이 사라지지 않고 물에 있다는 뜻이에요.' },
            { type: 'choice', prompt: '소금을 녹인 뒤 무게가 그대로인 까닭으로 알맞은 것은 무엇인가요?', options: ['소금이 물속에 아주 작아져 퍼져 있어서', '소금이 날아가서', '물이 소금을 만들어서'], answer: 0, difficulty: 0.2, explain: '소금은 아주 작은 알갱이가 되어 물속에 골고루 퍼져 있어요.' },
            MOOD,
          ],
        },
      ],
      worksheet: {
        title: '녹이기 전과 후의 무게',
        items: [
          { type: 'table', prompt: '실험 결과(예시 값)를 표에 옮기고 무게가 같은지 ○ 하세요.', columns: ['때', '컵 전체의 무게(g)'], cells: [['설탕을 녹이기 전', '160'], ['설탕을 녹인 뒤', '160']], answer: '무게가 같음(예시 값). 녹은 설탕은 사라지지 않음' },
          { type: 'draw', prompt: '위 표를 막대그래프로 그리세요. 가로에 때, 세로에 무게(g)를 쓰고 한 칸을 20 g으로 해요.' },
          { type: 'choice', prompt: '무게가 같은 결과로 알 수 있는 것에 ○ 하세요.', options: ['녹은 설탕이 사라지지 않았어요', '설탕이 물로 변했어요', '물이 줄어들었어요'], answer: '녹은 설탕이 사라지지 않았어요' },
          { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '설탕은 물에 녹으면 아주 ___ 알갱이가 되어 물에 골고루 퍼져요. 그래서 녹이기 전과 녹인 뒤의 무게는 ___.', answer: '작은, 같아요' },
          { type: 'short', prompt: '"녹으면 무게가 줄어든다."는 친구의 생각을 실험 결과를 근거로 고쳐 써 보세요.', answer: '녹이기 전과 후의 무게가 같았으므로, 녹은 물질은 사라지지 않았다.' },
        ],
        easy: {
          note: '막대의 높이가 같아요. 녹은 설탕은 사라지지 않았어요.',
          items: [
            { type: 'choice', prompt: '두 막대의 높이가 같으면 무게는 어떤가요? ○ 하세요.', options: ['같아요', '달라요'], answer: '같아요' },
            { type: 'choice', prompt: '설탕이 녹으면 사라질까요?', options: ['사라지지 않아요', '사라져요'], answer: '사라지지 않아요' },
            { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '녹기 전과 후의 무게가 ___.', answer: '같아요' },
            { type: 'draw', prompt: '설탕이 녹기 전과 녹은 뒤의 컵을 그려 보세요.' },
          ],
        },
      },
      differentiation: {
        easy: '그래프의 값이 늘 보이고, 카드가 적어요.',
        base: '막대를 직접 올려 완성하고 값은 확인한 뒤에 읽어요.',
        challenge: '함정 카드가 섞이고, 무게를 근거로 친구의 생각을 고치는 문항이 더 어려워요.',
      },
      teacherNotes: '이 차시의 무게 값은 모두 예시로 만든 값이며 실제 모둠의 값과 다를 수 있다. 자주 보이는 오개념: ① 녹으면 눈에 안 보이니 무게도 준다 → 컵 전체 무게가 같다는 결과로 고친다. ② 설탕이 공기 중으로 날아갔다 → 컵 밖으로 나간 것이 없는 조건에서 잰 결과임을 확인한다. ③ 무게 비교에서 숟가락을 빼고 재서 값이 달라진다 → 컵·물·설탕·숟가락을 같은 조건으로 재게 한다. 전자저울은 영점을 맞춘 뒤 쓴다.',
    }),

    // ───────────────────────── 3차시 (core) ─────────────────────────
    L(3, {
      title: '물의 온도와 용질의 종류에 따라 녹은 양을 그래프로 나타내기',
      objective: '물의 온도와 용질의 종류에 따라 녹은 양이 달라지는 실험 결과를 표와 막대그래프로 나타내고 읽을 수 있다.',
      standards: ['[6과03-01]'],
      safety: [SAFE_TASTE, SAFE_HOT, SAFE_WASH],
      illustration: {
        prompt: P('three glass cups of water labeled cold, warm and hot with different amounts of white powder dissolved in each, and a small paper bar chart growing taller beside them'),
        scene: scene([
          { motif: 'sun', x: 410, y: 52, s: 0.7 }, { motif: 'cloud', x: 100, y: 50, s: 0.8 },
          { motif: 'hills', y: 218, colors: ['sky', 'peach', 'mint'] }, { motif: 'flower', x: 90, y: 232 },
        ], '따뜻한 물에는 더 많이 녹을까요?'),
      },
      stages: [
        {
          id: 'intro', title: '도입', minutes: 6,
          teacher: '"찬 물과 따뜻한 물 가운데 어디에 설탕이 더 많이 녹을까요?" 손을 들어 예상을 세어 둔다. 용질의 종류가 달라도 녹는 양이 같다고 생각하는 학생이 있으니, 소금과 설탕을 같은 물에 녹여 본 결과표를 보여 주며 "숫자가 같을까요?"라고 묻는다. 이 차시의 표와 그래프의 수치는 예시이며 실제 실험값과 다를 수 있다고 밝힌다.',
          student: '찬 물과 따뜻한 물, 소금과 설탕 가운데 녹는 양을 견주려면 결과를 어떻게 나타내면 좋을까요?',
          demo: { tool: 'chart', options: { type: 'bar', data: [['10℃', 3], ['30℃', 6], ['50℃', 10]], unit: '숟가락', xLabel: '물 온도', yLabel: '녹은 양', scale: 1, given: [0, 1] }, sequence: [{ build: true }] },
        },
        {
          id: 'main', title: '전개', minutes: 27,
          activities: [
            A('a1', '활동 1. 물의 온도별 녹은 양 막대그래프', 10, 'chart',
              '표의 수를 보고 막대그래프를 완성하거나 그래프를 읽어요. 수는 모두 예시로 만든 값이에요.',
              '"물의 온도가 올라가면 녹은 양은 어떻게 되나요?" 막대가 점점 높아졌다는 말이 나오게 한다. 가로축에 온도, 세로축에 녹은 양을 쓴다는 약속을 확인하고, 축이 바뀌어 읽기 어려워진 그래프를 보여 주며 왜 약속이 필요한지 이야기한다.',
              { easy: { showValues: true }, base: {}, challenge: {} }, [
                { prompt: '물 100 mL에 녹은 백반의 양을 물 온도별로 쟀어요. 막대그래프를 완성하세요. (예시 값)',
                  toolOptions: { type: 'bar', title: '물 온도별 녹은 백반', data: [['10℃', 3], ['30℃', 6], ['50℃', 10]], unit: '숟가락', xLabel: '물 온도', yLabel: '녹은 양', scale: 1, given: [0] },
                  target: { build: true }, difficulty: 0.15 },
                { prompt: '다른 모둠은 설탕으로 실험했어요. 막대그래프를 완성하세요. (예시 값)',
                  toolOptions: { type: 'bar', title: '물 온도별 녹은 설탕', data: [['10℃', 8], ['30℃', 10], ['50℃', 12], ['70℃', 14]], unit: '숟가락', xLabel: '물 온도', yLabel: '녹은 양', scale: 2, given: [0] },
                  target: { build: true }, difficulty: 0.2 },
                { prompt: '그래프를 보고 녹은 양이 가장 많은 온도를 골라 보세요. (예시 값)',
                  toolOptions: { type: 'bar', mode: 'read', title: '물 온도별 녹은 백반', data: [['10℃', 2], ['40℃', 5], ['70℃', 11]], unit: '숟가락', xLabel: '물 온도', scale: 1, choices: ['10℃', '40℃', '70℃'], question: '가장 많이 녹은 때의 물 온도는?', why: ['막대가 가장 낮아요.', '70℃ 막대가 더 높아요.', ''], explain: '70℃에서 11숟가락으로 가장 많이 녹았어요.' },
                  target: { pick: 2 }, difficulty: 0.15,
                  conclude: '이 실험에서는 물의 온도가 높을수록 백반이 더 많이 녹았어요.' },
              ]),
            A('a2', '활동 2. 용질 종류별 녹은 양 그림그래프', 9, 'chart',
              '같은 온도의 물 100 mL에 녹은 양을 용질별로 그림그래프로 나타내거나 읽어요. 수는 모두 예시예요.',
              '"같은 물, 같은 온도인데 녹는 양이 다른 까닭은 무엇일까요?" 용질마다 녹는 양이 다르다는 것을 말하게 한다. 3번의 값에서 큰 그림과 작은 그림을 섞어 읽는 방법을 말로 풀어 준다.',
              { easy: { showValues: true }, base: {}, challenge: {} }, [
                { prompt: '같은 온도의 물 100 mL에 녹은 양을 용질별로 쟀어요. 그림그래프를 완성하세요. (예시 값, ○ 한 개 = 5숟가락, 작은 ○ 한 개 = 1숟가락)',
                  toolOptions: { type: 'picture', title: '용질별 녹은 양', data: [['백반', 2], ['소금', 7], ['설탕', 12]], unit: '숟가락', icons: [{ value: 5, name: '5숟가락' }, { value: 1, name: '1숟가락' }], xLabel: '용질' },
                  target: { build: true }, difficulty: 0.2 },
                { prompt: '다른 용질로 쟀어요. 그림그래프를 완성하세요. (예시 값, ○ 한 개 = 5숟가락, 작은 ○ 한 개 = 1숟가락)',
                  toolOptions: { type: 'picture', title: '용질별 녹은 양(2회)', data: [['붕산', 3], ['소금', 8], ['설탕', 13]], unit: '숟가락', icons: [{ value: 5, name: '5숟가락' }, { value: 1, name: '1숟가락' }], xLabel: '용질' },
                  target: { build: true }, difficulty: 0.25 },
                { prompt: '그림그래프를 보고 알맞은 값을 골라 보세요. (예시 값)',
                  toolOptions: { type: 'picture', mode: 'read', title: '용질별 녹은 양', data: [['A 가루', 4], ['B 가루', 11], ['C 가루', 7]], unit: '숟가락', icons: [{ value: 5, name: '5숟가락' }, { value: 1, name: '1숟가락' }], choices: ['4숟가락', '11숟가락', '7숟가락'], question: 'B 가루는 몇 숟가락 녹았을까요?', why: ['A 가루에 해당해요.', '', 'C 가루에 해당해요.'], explain: '큰 그림 두 개(10)와 작은 그림 한 개(1)를 합쳐 11숟가락이에요.' },
                  target: { pick: 1 }, difficulty: 0.2,
                  conclude: '같은 조건에서도 용질마다 녹는 양이 달라요.' },
              ]),
            A('a3', '활동 3. 온도와 용질을 바꾸며 녹이기', 8, 'matter',
              '물의 온도를 고르고 숟가락 수를 정해 녹여 보아요. 물에 녹을 수 있는 양에는 한계가 있어요.',
              '"따뜻한 물에서는 같은 용질이 더 많이 녹을까요? 직접 넣어 확인해 봐요." 한 번에 하나만 바꾸고 나머지는 같게 두는 습관을 짚는다. 소금은 물 온도에 따른 차이가 작다는 점을 두 번째 문항에서 확인하게 한다. 교구의 수는 예시 값이다.',
              LVD, [
                { prompt: '차가운 물 100 mL에 백반을 한 숟가락씩 넣어, 처음 녹지 않고 남을 때까지 넣어 보세요. (예시 값)',
                  toolOptions: { mode: 'dissolve', solute: { name: '백반', perSpoon: 5, limit: 20 }, temps: TEMPS },
                  target: { set: { water: 100, temp: 0 }, saturated: true }, difficulty: 0.2 },
                { prompt: '따뜻한 물 100 mL에서도 같은 일을 해 보세요. 녹지 않고 남기 시작할 때까지 넣어요. (예시 값)',
                  toolOptions: { mode: 'dissolve', solute: { name: '백반', perSpoon: 5, limit: 20 }, temps: TEMPS },
                  target: { set: { water: 100, temp: 1 }, saturated: true }, difficulty: 0.25 },
                { prompt: '소금은 차가운 물과 따뜻한 물에서 녹는 양이 어떻게 다른지 따뜻한 물에서 확인해 보세요. 녹지 않고 남을 때까지 넣어요. (예시 값)',
                  toolOptions: { mode: 'dissolve', solute: { name: '소금', perSpoon: 5, limit: 35 }, temps: SALT_TEMPS },
                  target: { set: { water: 100, temp: 1 }, saturated: true }, difficulty: 0.3,
                  conclude: '백반은 따뜻한 물에서 더 많이 녹고, 소금은 물 온도에 따라 녹는 양이 별로 달라지지 않았어요.' },
              ]),
          ],
        },
        {
          id: 'wrapup', title: '정리', minutes: 7,
          teacher: '"물의 온도와 용질의 종류에 따라 녹는 양은 어떻게 달라졌나요?" 그래프 막대를 가리키며 근거와 함께 말하게 한다. 출구 3번에서 그래프의 가로축과 세로축을 바꿔 읽은 학생에게는 축 이름을 먼저 읽게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'chart', options: { type: 'bar', mode: 'read', title: '물 온도별 녹은 양', data: [['20℃', 4], ['40℃', 7], ['60℃', 10]], unit: '숟가락', xLabel: '물 온도', scale: 1, choices: ['20℃', '40℃', '60℃'], question: '가장 적게 녹은 때의 온도는?', explain: '20℃에서 4숟가락으로 가장 적게 녹았어요.' }, prompt: '그래프를 보고 가장 적게 녹은 때를 골라 보세요. (예시 값)', target: { pick: 0 }, difficulty: 0.15 },
            { type: 'choice', prompt: '같은 물 100 mL에서 설탕은 12숟가락, 소금은 7숟가락, 백반은 2숟가락 녹았어요(예시 값). 이 결과로 알 수 있는 것은 무엇인가요?', options: ['용질마다 녹는 양이 달라요', '모든 용질이 같은 양 녹아요', '백반이 가장 많이 녹아요'], answer: 0, difficulty: 0.2, explain: '같은 조건에서도 용질의 종류에 따라 녹는 양이 달라요.' },
            { type: 'choice', prompt: '그래프의 가로축에 쓰기 알맞은 것은 무엇인가요? (물 온도에 따른 녹은 양)', options: ['물 온도', '녹은 양', '실험한 날짜'], answer: 0, difficulty: 0.15, explain: '바꾸어 본 조건인 물 온도를 가로축에, 잰 결과인 녹은 양을 세로축에 써요.' },
            MOOD,
          ],
        },
      ],
      worksheet: {
        title: '녹는 양 그래프로 나타내기',
        items: [
          { type: 'table', prompt: '물 온도에 따라 녹은 백반의 양(예시 값)을 표에 옮겨 쓰고 가장 많이 녹은 때에 ○ 하세요.', columns: ['물 온도(℃)', '녹은 양(숟가락)'], cells: [['10', '3'], ['30', '6'], ['50', '10']], answer: '50℃에서 10숟가락으로 가장 많이 녹음' },
          { type: 'draw', prompt: '위 표를 막대그래프로 그리세요. 가로에 물 온도, 세로에 녹은 양을 쓰고 한 칸을 1숟가락으로 해요.' },
          { type: 'choice', prompt: '결과로 알 수 있는 것에 ○ 하세요.', options: ['물 온도가 높을수록 더 많이 녹았어요', '물 온도가 높을수록 덜 녹았어요', '온도와 녹은 양은 관계없어요'], answer: '물 온도가 높을수록 더 많이 녹았어요' },
          { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '같은 물에서도 ___의 종류에 따라 녹는 양이 달라요. 백반은 물 온도가 높을수록 ___ 녹았어요.', answer: '용질, 더 많이' },
          { type: 'short', prompt: '그래프의 가로축과 세로축에 각각 무엇을 쓰면 좋을지 까닭과 함께 써 보세요.', answer: '바꾼 조건인 물 온도를 가로축에, 그 결과인 녹은 양을 세로축에 쓰면 변화를 읽기 쉽다.' },
        ],
        easy: {
          note: '막대가 높을수록 많이 녹은 거예요. 백반은 따뜻한 물에서 더 많이 녹았어요.',
          items: [
            { type: 'choice', prompt: '막대가 가장 높은 때에 ○ 하세요. (10℃ 3, 30℃ 6, 50℃ 10)', options: ['10℃', '50℃'], answer: '50℃' },
            { type: 'choice', prompt: '용질의 종류가 다르면 녹는 양은 어떤가요?', options: ['달라요', '같아요'], answer: '달라요' },
            { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '백반은 물 온도가 높을수록 ___ 녹았어요.', answer: '더 많이' },
            { type: 'draw', prompt: '물 온도가 10℃, 30℃, 50℃일 때의 막대를 높이가 다르게 그려 보세요.' },
          ],
        },
      },
      differentiation: {
        easy: '그래프의 값이 늘 보이고, 용해 교구에는 진하기 값이 함께 보여요.',
        base: '막대를 직접 올려 완성하고 값은 확인한 뒤에 읽어요. 용해 교구에서는 숟가락을 한 개씩 넣으며 바닥을 살펴요.',
        challenge: '눈금이 2씩 커지고, 소금처럼 온도 차이가 작은 용질도 직접 확인해요.',
      },
      teacherNotes: '이 차시의 수치는 모두 예시로 만든 값이며 실제 값과 다를 수 있다. 자주 보이는 오개념: ① 모든 물질이 따뜻한 물에서 훨씬 많이 녹는다 → 소금처럼 차이가 작은 것도 있다. ② 용질의 종류가 달라도 녹는 양이 같다 → 같은 조건에서 비교한 표로 고친다. ③ 그래프의 두 축을 바꾸어 그린다 → 바꾼 조건은 가로축, 결과는 세로축이다. 뜨거운 물은 교사가 따라 주고, 용해 교구는 눈으로만 쓴다.',
    }),

    // ───────────────────────── 4차시 (core) ─────────────────────────
    L(4, {
      title: '물의 온도만 다르게 하여 녹는 양을 공정하게 비교하기',
      objective: '온도 이외의 조건을 같게 하여 녹는 양을 비교하고, 같게 할 조건과 다르게 할 조건을 가를 수 있다.',
      standards: ['[6과03-01]'],
      safety: [SAFE_TASTE, SAFE_HOT, SAFE_GLASS, SAFE_WASH],
      illustration: {
        prompt: P('two identical clear beakers side by side, one with cold water and one with warm water, each with the same amount of white powder and the same spoon, and a thermometer in each beaker'),
        scene: scene([
          { motif: 'sun', x: 70, y: 52, s: 0.7 }, { motif: 'cloud', x: 380, y: 52, s: 0.8 },
          { motif: 'hills', y: 218, colors: ['lavender', 'mint', 'buttercup'] }, { motif: 'tree', x: 405, y: 232, color: 'mint' },
        ], '무엇만 다르게 해야 공정할까요?', 20),
      },
      stages: [
        {
          id: 'intro', title: '도입', minutes: 6,
          teacher: '"찬 물 한 컵과 따뜻한 물 반 컵에 설탕을 넣어 녹는 양을 비교해도 될까요?" 물의 양까지 달라지면 무엇 때문에 달라졌는지 알 수 없다는 점을 이끌어 낸다. 물의 양을 다르게 하고도 온도 때문에 녹는 양이 달라졌다고 결론 내는 경우가 많으니 "온도만 다르게 하려면 무엇을 같게 해야 할까요?"를 묻는다. 시연으로 교구에서 소금을 한 숟가락씩 넣는 모습을 보여 준다.',
          student: '찬 물과 따뜻한 물에서 녹는 양을 비교할 때 무엇을 같게 해야 할까요?',
          demo: { tool: 'matter', options: { mode: 'dissolve', solute: { name: '소금', perSpoon: 5, limit: 35 } }, sequence: [{ saturated: true }] },
        },
        {
          id: 'main', title: '전개', minutes: 27,
          activities: [
            A('a1', '활동 1. 온도마다 녹는 양을 직접 넣어 보기', 10, 'matter',
              '물의 온도를 고르고 숟가락을 한 개씩 넣어, 처음 녹지 않고 남을 때까지 넣어요. 수는 예시 값이에요.',
              '"한 숟가락씩 넣고 바닥을 살펴요. 남기 시작하는 때가 그 온도에서 녹는 한계예요." 한계를 지나서 더 넣은 학생에게는 "이미 전에 남아 있었는지 확인해 볼까요?"라고 되묻는다. 물의 양은 똑같이 100 mL로 두게 한다.',
              LVD, [
                { prompt: '차가운 물 100 mL에 백반을 넣어 처음 녹지 않고 남을 때까지 넣어 보세요. (예시 값)',
                  toolOptions: { mode: 'dissolve', solute: { name: '백반', perSpoon: 5, limit: 20 }, temps: TEMPS },
                  target: { set: { water: 100, temp: 0 }, saturated: true }, difficulty: 0.2 },
                { prompt: '따뜻한 물 100 mL에 백반을 넣어 처음 남을 때까지 넣어 보세요. (예시 값)',
                  toolOptions: { mode: 'dissolve', solute: { name: '백반', perSpoon: 5, limit: 20 }, temps: TEMPS },
                  target: { set: { water: 100, temp: 1 }, saturated: true }, difficulty: 0.25 },
                { prompt: '이번에는 물 200 mL를 따뜻한 물로 정해 처음 남을 때까지 넣어 보세요. (예시 값)',
                  toolOptions: { mode: 'dissolve', solute: { name: '백반', perSpoon: 5, limit: 20 }, temps: TEMPS, maxSpoons: 20 },
                  target: { set: { water: 200, temp: 1 }, saturated: true }, difficulty: 0.3,
                  conclude: '물의 양이 두 배가 되면 녹을 수 있는 양도 두 배가 돼요. 비교할 때는 물의 양을 같게 해요.' },
              ]),
            A('a2', '활동 2. 같게 할 조건과 다르게 할 조건 가르기', 9, 'mindmap',
              '온도를 비교하는 실험에서 같게 할 조건과 다르게 할 조건으로 나누어요.',
              '"알아보려는 조건 하나만 바꾸고 나머지는 같게 해요." 카드를 놓을 때마다 왜 같게 해야 하는지 말하게 한다. 용질의 양을 달리해도 된다고 하는 학생에게는 "넣은 양이 다르면 남는 양도 달라지지 않을까요?"라고 되묻는다.',
              LV, [
                { prompt: '물의 온도에 따라 녹는 양을 비교해요. 같게 할 조건과 다르게 할 조건으로 나누어 보세요.',
                  toolOptions: { mode: 'sort', topic: '온도 비교 실험', slots: ['같게 해요', '다르게 해요'], cards: ['물의 양', '물의 온도', '용질의 종류', '젓는 횟수'] },
                  target: { sort: { '같게 해요': ['물의 양', '용질의 종류', '젓는 횟수'], '다르게 해요': ['물의 온도'] } }, difficulty: 0.15 },
                { prompt: '용질의 종류에 따라 녹는 양을 비교해요. 같게 할 조건과 다르게 할 조건으로 나누어 보세요.',
                  toolOptions: { mode: 'sort', topic: '용질 비교 실험', slots: ['같게 해요', '다르게 해요'], cards: ['물의 양', '물의 온도', '용질의 종류', '한 번에 넣는 양'] },
                  target: { sort: { '같게 해요': ['물의 양', '물의 온도', '한 번에 넣는 양'], '다르게 해요': ['용질의 종류'] } }, difficulty: 0.2 },
                { prompt: '실험을 공정하게 했다고 할 수 있는 설명만 바구니에 넣어 보세요.',
                  toolOptions: { mode: 'pick', topic: '공정한 실험', basket: '공정해요', cards: [
                    { id: 'a', text: '물의 양을 똑같이 맞췄어요' }, { id: 'b', text: '온도만 다르게 했어요' }, { id: 'c', text: '용질을 같은 숟가락으로 넣었어요' },
                    { id: 'd', text: '물의 양과 온도를 모두 다르게 했어요', why: '두 가지를 바꾸면 무엇 때문인지 알 수 없어요.' }, { id: 'e', text: '한쪽만 더 오래 저었어요', why: '저은 횟수도 같게 해야 해요.' }] },
                  target: { pick: ['a', 'b', 'c'] }, difficulty: 0.25,
                  predict: { q: '온도를 비교할 때 한 컵은 물 100 mL, 다른 컵은 50 mL로 해도 될까요?', options: ['돼요', '안 돼요. 물의 양도 같게 해야 해요', '잘 모르겠어요'], answer: 1 },
                  conclude: '알아보려는 조건 하나만 다르게 하고 나머지는 모두 같게 해야 공정한 실험이에요.' },
              ]),
            A('a3', '활동 3. 온도 비교 실험 차례 놓고 짝과 해 보기', 8, 'timeline',
              '실험 차례를 카드로 놓고, 진짜 컵으로 짝과 해 봐요.',
              '준비물(모둠): 투명 컵 2개, 찬물, 선생님이 따라 주시는 따뜻한 물, 백반이나 소금, 숟가락, 온도계. 뜨거운 물은 선생님이 따라 주시고 학생은 만지지 않는다. 물의 양을 눈금 컵으로 똑같이 맞추고, 같은 숟가락으로 한 숟가락씩 넣어 저으며 남는 때를 기록하게 한다. 가루는 맛보지 않고 끝나면 손을 씻는다.',
              LV, [
                { prompt: '온도를 비교하는 실험 차례대로 놓아 보세요.',
                  toolOptions: { axis: ['먼저', '나중'], cards: [{ id: '물', text: '두 컵에 같은 양의 물을 담아요' }, { id: '온도', text: '한 컵은 찬물, 한 컵은 따뜻한 물로 해요' }, { id: '넣기', text: '용질을 한 숟가락씩 넣고 같은 횟수로 저어요' }, { id: '기록', text: '남기 시작할 때까지 넣은 양을 적어요' }] },
                  target: { order: ['물', '온도', '넣기', '기록'] }, difficulty: 0.15 },
                { prompt: '결과를 정리하는 차례대로 놓아 보세요.',
                  toolOptions: { axis: ['먼저', '나중'], cards: [{ id: '표', text: '온도별 녹은 양을 표에 적어요' }, { id: '견줌', text: '두 값을 견주어요' }, { id: '결론', text: '온도에 따라 달라졌는지 말해요' }] },
                  target: { order: ['표', '견줌', '결론'] }, difficulty: 0.2 },
                { prompt: '실험을 마친 뒤 정리하는 차례대로 놓아 보세요.',
                  toolOptions: { axis: ['먼저', '나중'], cards: [{ id: '버림', text: '남은 물은 선생님 말씀대로 버려요' }, { id: '씻기', text: '컵과 숟가락을 씻어 제자리에 놓아요' }, { id: '손', text: '손을 깨끗이 씻어요' }] },
                  target: { order: ['버림', '씻기', '손'] }, difficulty: 0.2 },
                { difficulty: 0, prompt: '찬물과 따뜻한 물에 같은 용질을 같은 양씩 넣어 녹는 양을 견주고, 같게 한 조건을 짝에게 말한 뒤 "다 했어요"를 누르세요.', free: true, talk: true },
              ], { pair: true }),
          ],
        },
        {
          id: 'wrapup', title: '정리', minutes: 7,
          teacher: '"온도 때문에 달라졌다고 말하려면 무엇이 같아야 했나요?" 물의 양, 용질의 종류, 젓는 횟수를 말하게 한다. 출구 3번에서 물의 양이 달라도 괜찮다고 고른 학생에게는 활동 1의 세 번째 문항 결과를 다시 보게 한다.',
          exitTicket: [
            { type: 'choice', prompt: '물의 온도에 따라 녹는 양을 비교할 때 다르게 하는 것은 무엇인가요?', options: ['물의 온도', '물의 양', '용질의 종류'], answer: 0, difficulty: 0.1, explain: '알아보려는 조건인 물의 온도만 다르게 하고 나머지는 같게 해요.' },
            { type: 'tool', tool: 'matter', options: { mode: 'dissolve', solute: { name: '소금', perSpoon: 5, limit: 35 } }, prompt: '물 100 mL에 소금을 한 숟가락씩 넣어, 처음 녹지 않고 남을 때까지 넣어 보세요. (예시 값)', target: { set: { water: 100 }, saturated: true }, difficulty: 0.25 },
            { type: 'choice', prompt: '찬물은 100 mL, 따뜻한 물은 50 mL로 비교하면 어떤 문제가 있나요?', options: ['물의 양도 달라서 온도 때문인지 알 수 없어요', '온도를 잴 수 없어요', '문제가 없어요'], answer: 0, difficulty: 0.25, explain: '물의 양까지 다르면 녹는 양이 달라진 까닭이 온도인지 물의 양인지 알 수 없어요.' },
            MOOD,
          ],
        },
      ],
      worksheet: {
        title: '온도 비교 실험 계획',
        items: [
          { type: 'table', prompt: '물의 온도에 따라 녹는 양을 비교하는 실험을 계획해요. 같게 할 것과 다르게 할 것을 쓰세요.', columns: ['구분', '무엇을 할까요?'], cells: [['다르게 할 조건', ''], ['같게 할 조건 1', ''], ['같게 할 조건 2', ''], ['같게 할 조건 3', '']], answer: '다르게 할 조건: 물의 온도 / 같게 할 조건: 물의 양, 용질의 종류, 젓는 횟수 등' },
          { type: 'choice', prompt: '공정한 실험 설명에 ○ 하세요.', options: ['물의 양과 온도를 모두 바꿔요', '온도만 바꾸고 나머지는 같게 해요', '용질을 서로 다른 것으로 바꿔요'], answer: '온도만 바꾸고 나머지는 같게 해요' },
          { type: 'figure', wide: true, prompt: '두 컵의 그림을 보고 어느 쪽이 더 많이 녹았는지 ○ 하세요. (예시 그림)', tool: 'matter', options: { mode: 'dissolve', solute: { name: '백반', perSpoon: 5, limit: 20 } }, figures: [
            { state: { water: 100, spoons: 3 }, caption: '가 (   )' }, { state: { water: 100, spoons: 6 }, caption: '나 (   )' }], answer: '나(6숟가락이 모두 녹아 가보다 더 많이 녹았음)' },
          { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '물의 온도에 따라 녹는 양을 비교할 때는 물의 ___, 용질의 ___, 젓는 횟수를 같게 해요.', answer: '양, 종류' },
          { type: 'short', prompt: '"물의 양을 다르게 하고도 온도 때문에 달라졌다."는 말이 틀린 까닭을 써 보세요.', answer: '물의 양도 다르면 무엇 때문에 달라졌는지 알 수 없으므로 온도만 다르게 하고 나머지는 같게 해야 한다.' },
        ],
        easy: {
          note: '알아보려는 것 하나만 다르게 하고 나머지는 모두 같게 해요.',
          items: [
            { type: 'choice', prompt: '온도 실험에서 다르게 하는 것은 무엇인가요? ○ 하세요.', options: ['온도', '물의 양'], answer: '온도' },
            { type: 'choice', prompt: '같게 해야 하는 것에 ○ 하세요.', options: ['물의 양', '물의 온도'], answer: '물의 양' },
            { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '알아보려는 것 ___ 가지만 다르게 해요.', answer: '한' },
            { type: 'draw', prompt: '같은 양의 물이 담긴 컵 두 개를 그리고 한쪽에만 따뜻한 물이라고 써 보세요.' },
          ],
        },
      },
      differentiation: {
        easy: '용해 교구에 진하기 값이 함께 보이고, 카드가 적어요.',
        base: '숟가락을 한 개씩 넣으며 바닥에 남는 때를 찾고, 같게 할 조건을 스스로 골라요.',
        challenge: '물의 양을 바꾼 상황도 풀고, 공정한 실험 설명을 함정 카드 속에서 골라요.',
      },
      teacherNotes: '이 차시의 수는 모두 예시 값이다. 자주 보이는 오개념: ① 물의 양을 다르게 하고도 온도 때문이라고 결론짓는다 → 한 가지만 바꾼다. ② 한계를 지난 뒤에도 더 넣고 기록한다 → 바닥에 남기 시작한 때가 한계이다. ③ 여러 조건을 한꺼번에 바꾼다. 뜨거운 물은 교사가 따라 주며 학생은 유리컵에 닿지 않게 한다. 온도계는 컵 바닥에 닿지 않게 한다.',
    }),

    // ───────────────────────── 5차시 (core) ─────────────────────────
    L(5, {
      title: '용질과 물의 양을 바꾸어 설탕물의 진하기 견주기',
      objective: '용질의 양이 많을수록, 용매의 양이 적을수록 용액이 진해진다고 설명하고, 색이 아니라 녹인 양과 물의 양으로 진하기를 견줄 수 있다.',
      standards: ['[6과03-02]'],
      safety: [SAFE_TASTE, SAFE_GLASS, SAFE_WASH],
      illustration: {
        prompt: P('two clear cups of the same size, one with a little sugar dissolved and one with much sugar dissolved, shown with soft golden swirls of different thickness and a spoon beside each cup'),
        scene: scene([
          { motif: 'sun', x: 410, y: 52, s: 0.7 }, { motif: 'cloud', x: 90, y: 50, s: 0.8 },
          { motif: 'hills', y: 218, colors: ['peach', 'sky', 'mint'] }, { motif: 'flower', x: 400, y: 232 },
        ], '어느 설탕물이 더 진할까요?'),
      },
      stages: [
        {
          id: 'intro', title: '도입', minutes: 6,
          teacher: '"설탕을 두 숟가락 넣은 물과 다섯 숟가락 넣은 물이 있어요. 눈으로 보면 투명해서 똑같아 보여요. 어느 쪽이 더 진할까요?" 색이 진해 보여야 진한 용액이라는 생각이 자주 나오니 칠판에 적어 둔다. 눈으로는 구별하기 어렵다는 점에서 용질의 양과 물의 양으로 진하기를 말해야 한다고 이끈다.',
          student: '색이 똑같이 투명한 설탕물 두 컵이 있어요. 어느 쪽이 더 진한지 어떻게 알 수 있을까요?',
          demo: { tool: 'matter', options: { mode: 'dissolve', compare: [{ water: 100, spoons: 2, label: '가' }] }, sequence: [{ sameAs: 1 }] },
        },
        {
          id: 'main', title: '전개', minutes: 27,
          activities: [
            A('a1', '활동 1. 진하기 같게 맞추어 보기', 11, 'matter',
              '옆 그릇과 진하기가 같도록 물의 양과 숟가락 수를 바꿔 보세요. 수는 모두 예시 값이에요.',
              '"물이 두 배가 되면 숟가락도 두 배로 해야 진하기가 같아요." 물의 양만 바꾸고 숟가락은 그대로 둔 학생에게는 "물이 많아지면 같은 숟가락의 설탕은 더 묽어질까요, 진해질까요?"라고 묻는다. 교구의 수는 비율을 보기 위한 예시이다.',
              LVD, [
                { prompt: '가 그릇과 진하기가 같은 설탕물을 만들어 보세요. 물의 양이 달라도 괜찮아요.',
                  toolOptions: { mode: 'dissolve', solute: { name: '설탕', perSpoon: 5, limit: 35 }, compare: [{ water: 100, spoons: 2, label: '가' }] },
                  target: { sameAs: 1 }, difficulty: 0.25 },
                { prompt: '물 100 mL에 4숟가락 녹인 설탕물과 진하기가 같도록 맞춰 보세요. 물의 양이 달라도 괜찮아요.',
                  toolOptions: { mode: 'dissolve', solute: { name: '설탕', perSpoon: 5, limit: 35 } },
                  target: { conc: 4 }, difficulty: 0.3 },
                { prompt: '나 그릇과 진하기가 같은 설탕물을 만들어 보세요.',
                  toolOptions: { mode: 'dissolve', solute: { name: '설탕', perSpoon: 5, limit: 35 }, compare: [{ water: 100, spoons: 2, label: '가' }, { water: 200, spoons: 2, label: '나' }] },
                  target: { sameAs: 2 }, difficulty: 0.3,
                  conclude: '물의 양이 달라져도 녹인 양과 물의 양의 비율이 같으면 진하기가 같아요.' },
              ]),
            A('a2', '활동 2. 더 진한 쪽과 더 묽은 쪽 가르기', 8, 'mindmap',
              '기준 설탕물과 견주어 더 진한 것과 더 묽은 것으로 나누어요.',
              '"물은 같은데 설탕이 많으면?" "설탕은 같은데 물이 많으면?" 두 가지 경우를 손가락으로 세며 말하게 한다. 물 200 mL에 3숟가락을 기준보다 진하다고 고른 학생에게는 물이 두 배가 되었음을 짚는다. 여기서 색은 보지 않고 양만 본다.',
              LV, [
                { prompt: '기준은 물 100 mL에 설탕 3숟가락이에요. 기준보다 더 진한 것과 더 묽은 것으로 나누어 보세요.',
                  toolOptions: { mode: 'sort', topic: '기준 물 100 mL, 3숟가락', slots: ['더 진해요', '더 묽어요'], cards: ['물 100 mL에 5숟가락', '물 100 mL에 1숟가락', '물 200 mL에 3숟가락', '물 50 mL에 3숟가락'] },
                  target: { sort: { '더 진해요': ['물 100 mL에 5숟가락', '물 50 mL에 3숟가락'], '더 묽어요': ['물 100 mL에 1숟가락', '물 200 mL에 3숟가락'] } }, difficulty: 0.2 },
                { prompt: '기준은 물 200 mL에 소금 4숟가락이에요. 더 진한 것과 더 묽은 것으로 나누어 보세요.',
                  toolOptions: { mode: 'sort', topic: '기준 물 200 mL, 4숟가락', slots: ['더 진해요', '더 묽어요'], cards: ['물 200 mL에 6숟가락', '물 200 mL에 2숟가락', '물 100 mL에 4숟가락', '물 400 mL에 4숟가락'] },
                  target: { sort: { '더 진해요': ['물 200 mL에 6숟가락', '물 100 mL에 4숟가락'], '더 묽어요': ['물 200 mL에 2숟가락', '물 400 mL에 4숟가락'] } }, difficulty: 0.25 },
                { prompt: '조건과 용액의 변화를 이어 보세요. 알맞지 않은 카드는 남겨 둬요.',
                  toolOptions: { mode: 'match', topic: '진하기의 변화', slots: [{ id: 'c1', label: '물은 그대로, 용질을 더 넣었어요' }, { id: 'c2', label: '용질은 그대로, 물을 더 넣었어요' }], cards: [
                    { id: 'a', text: '더 진해져요' }, { id: 'b', text: '더 묽어져요' }, { id: 'c', text: '진하기는 그대로예요', why: '양이 바뀌었으니 진하기도 바뀌어요.' }] },
                  target: { match: { c1: 'a', c2: 'b' } }, difficulty: 0.25,
                  predict: { q: '설탕은 그대로 두고 물을 더 부으면 설탕물은 어떻게 될까요?', options: ['더 진해져요', '더 묽어져요', '잘 모르겠어요'], answer: 1 },
                  conclude: '용질을 더 넣으면 진해지고, 용매(물)를 더 넣으면 묽어져요.' },
              ]),
            A('a3', '활동 3. 색과 진하기는 같은 말일까?', 8, 'mindmap',
              '용액의 색과 진하기에 대한 설명 가운데 바른 것만 골라요.',
              '"설탕물은 설탕을 얼마나 넣어도 투명해요. 그럼 색이 진한 물감물은 설탕물보다 더 진한 용액일까요?" 색은 용질 자체의 색이고, 진하기는 용질과 용매의 양의 비율로 정해진다는 점을 말해 준다. 색이 진하면 무조건 진한 용액이라는 오개념을 다룬다.',
              LV, [
                { prompt: '용액의 진하기에 대한 바른 설명만 바구니에 넣어 보세요.',
                  toolOptions: { mode: 'pick', topic: '진하기', basket: '바른 설명', cards: [
                    { id: 'a', text: '같은 물에 용질을 많이 녹이면 진해요' }, { id: 'b', text: '같은 용질이면 물이 적을수록 진해요' }, { id: 'c', text: '진하기는 녹인 양과 물의 양으로 정해져요' },
                    { id: 'd', text: '색이 진하면 언제나 더 진한 용액이에요', why: '용질마다 색이 달라서 색만으로 진하기를 알 수 없어요.' }, { id: 'e', text: '투명하면 모두 같은 진하기예요', why: '투명한 설탕물도 녹인 양에 따라 진하기가 달라요.' }] },
                  target: { pick: ['a', 'b', 'c'] }, difficulty: 0.2 },
                { prompt: '같은 양의 물에 소금을 1숟가락, 3숟가락 녹인 컵이에요. 모두 투명해요. 맞는 설명만 골라 보세요.',
                  toolOptions: { mode: 'pick', topic: '투명한 소금물', basket: '맞는 설명', cards: [
                    { id: 'a', text: '3숟가락을 녹인 컵이 더 진해요' }, { id: 'b', text: '눈으로는 구분하기 어려워요' },
                    { id: 'c', text: '두 컵은 같은 진하기예요', why: '녹인 양이 다르면 진하기도 달라요.' }, { id: 'd', text: '색이 같으니 소금이 사라졌어요', why: '소금은 사라지지 않았어요.' }] },
                  target: { pick: ['a', 'b'] }, difficulty: 0.25 },
                { prompt: '용액의 진하기를 알아보는 방법과 알아보지 못하는 방법으로 나누어 보세요.',
                  toolOptions: { mode: 'sort', topic: '진하기 알아보기', slots: ['알 수 있어요', '알 수 없어요'], cards: ['녹인 용질의 양과 물의 양을 비교해요', '용액의 색만 봐요', '같은 물체가 뜬 높이를 견줘요', '용액이 투명한지만 봐요'] },
                  target: { sort: { '알 수 있어요': ['녹인 용질의 양과 물의 양을 비교해요', '같은 물체가 뜬 높이를 견줘요'], '알 수 없어요': ['용액의 색만 봐요', '용액이 투명한지만 봐요'] } }, difficulty: 0.25,
                  conclude: '색이나 투명한 정도가 아니라 용질과 물의 양으로 진하기를 알아봐요.' },
              ]),
          ],
        },
        {
          id: 'wrapup', title: '정리', minutes: 7,
          teacher: '"설탕물이 더 진해지려면 설탕을 더 넣을까요, 물을 더 부을까요?" 설탕을 더 넣는다고 말하게 한다. 출구 3번에서 색이 진한 쪽을 고른 학생에게는 활동 3의 투명한 소금물 두 컵 이야기를 다시 떠올리게 한다.',
          exitTicket: [
            { type: 'choice', prompt: '같은 양의 물에 소금을 2숟가락 녹인 것과 5숟가락 녹인 것 가운데 더 진한 것은 무엇인가요?', options: ['2숟가락', '5숟가락', '똑같아요'], answer: 1, difficulty: 0.1, explain: '같은 양의 물에 용질을 많이 녹일수록 진해요.' },
            { type: 'tool', tool: 'mindmap', options: { mode: 'sort', topic: '기준 물 100 mL, 설탕 2숟가락', slots: ['더 진해요', '더 묽어요'], cards: ['물 100 mL에 4숟가락', '물 200 mL에 2숟가락'] }, prompt: '기준보다 더 진한 것과 더 묽은 것으로 나누어 보세요.', target: { sort: { '더 진해요': ['물 100 mL에 4숟가락'], '더 묽어요': ['물 200 mL에 2숟가락'] } }, difficulty: 0.2 },
            { type: 'choice', prompt: '용액의 진하기를 알아보는 방법으로 알맞은 것은 무엇인가요?', options: ['색만 본다', '용질의 양과 물의 양을 견준다', '맛을 본다'], answer: 1, difficulty: 0.2, explain: '진하기는 용질과 용매의 양의 비율이에요. 실험에서는 맛을 보지 않아요.' },
            MOOD,
          ],
        },
      ],
      worksheet: {
        title: '용액의 진하기 견주기',
        items: [
          { type: 'figure', wide: true, prompt: '두 그릇 가운데 더 진한 설탕물에 ○ 하세요. (예시 그림, 물의 양은 같아요)', tool: 'matter', options: { mode: 'dissolve', solute: { name: '설탕', perSpoon: 5, limit: 35 } }, figures: [
            { state: { water: 100, spoons: 2 }, caption: '가 (   )' }, { state: { water: 100, spoons: 5 }, caption: '나 (   )' }], answer: '나(같은 물에 설탕을 더 많이 녹였음)' },
          { type: 'table', prompt: '기준(물 100 mL, 설탕 3숟가락)과 견주어 더 진한지 묽은지 쓰세요.', columns: ['조건', '더 진해요 / 더 묽어요'], cells: [['물 100 mL에 6숟가락', ''], ['물 200 mL에 3숟가락', ''], ['물 50 mL에 3숟가락', '']], answer: '더 진해요, 더 묽어요, 더 진해요' },
          { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '물의 양이 같으면 용질을 ___ 넣을수록 더 진하고, 용질의 양이 같으면 물이 ___ 더 묽어요.', answer: '많이, 많을수록' },
          { type: 'choice', prompt: '색이 투명한 설탕물 두 컵의 진하기를 알아보는 방법에 ○ 하세요.', options: ['눈으로만 보아요', '녹인 설탕의 양과 물의 양을 견주어요', '맛을 보아요'], answer: '녹인 설탕의 양과 물의 양을 견주어요' },
          { type: 'short', prompt: '"색이 진하면 진한 용액이다."라는 말이 맞는지 투명한 설탕물 이야기를 넣어 써 보세요.', answer: '색만으로는 알 수 없다. 투명한 설탕물도 녹인 양에 따라 진하기가 다르므로 용질과 물의 양을 견주어야 한다.' },
        ],
        easy: {
          note: '같은 물에 용질을 많이 녹일수록 진해요. 물이 많아지면 묽어져요.',
          items: [
            { type: 'choice', prompt: '같은 물에 설탕 5숟가락과 2숟가락 중 더 진한 것에 ○ 하세요.', options: ['5숟가락', '2숟가락'], answer: '5숟가락' },
            { type: 'choice', prompt: '설탕은 그대로 두고 물을 더 부으면?', options: ['더 묽어져요', '더 진해져요'], answer: '더 묽어져요' },
            { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '진하기는 용질과 ___의 양으로 알아봐요.', answer: '물' },
            { type: 'draw', prompt: '설탕을 조금 녹인 컵과 많이 녹인 컵을 그리고, 어느 쪽이 진한지 써 보세요.' },
          ],
        },
      },
      differentiation: {
        easy: '용해 교구에 진하기 값이 함께 보이고, 카드가 적어요.',
        base: '직접 물의 양과 숟가락을 맞춰 보고 확인을 눌러 고쳐요. 용액 변화 잇기에서 먼저 예상을 골라요.',
        challenge: '두 그릇과 견주는 문항이 나오고, 색과 진하기를 가르는 함정 카드가 섞여요.',
      },
      teacherNotes: '교구의 수는 모두 예시 값이다. 자주 보이는 오개념: ① 용액의 색이 진하면 더 진한 용액이다 → 투명한 설탕물도 양에 따라 진하기가 다르다. ② 물의 양만 바꾸고 숟가락 수는 그대로 둔 채 진하기가 같다고 본다 → 비율로 말하게 한다. ③ 용질을 더 넣으면 용액이 늘어난다고만 본다 → 진하기가 올라간다고 말한다. 맛을 보지 않는다.',
    }),

    // ───────────────────────── 6차시 (practice) ─────────────────────────
    L(6, {
      title: '물 100 mL당 숟가락 수로 진하기를 같게 맞추고 가르기',
      objective: '물 100 mL당 녹인 양으로 진하기를 같게 맞추고, 용질이나 용매의 양이 바뀌면 용액의 진하기가 어떻게 달라지는지 설명할 수 있다.',
      standards: ['[6과03-02]'],
      safety: [SAFE_TASTE, SAFE_GLASS, SAFE_WASH],
      illustration: {
        prompt: P('three measuring cups of different sizes with different amounts of blue dye-free salt water and tally marks showing spoon counts per one hundred milliliters'),
        scene: scene([
          { motif: 'star', x: 80, y: 50 }, { motif: 'cloud', x: 390, y: 50, s: 0.8 },
          { motif: 'hills', y: 218, colors: ['lavender', 'mint', 'peach'] }, { motif: 'tree', x: 405, y: 232, color: 'mint' },
        ], '물 100 mL에 몇 숟가락일까요?', 20),
      },
      stages: [
        {
          id: 'intro', title: '도입', minutes: 6,
          teacher: '"물 200 mL에 소금 4숟가락을 녹인 것과 물 100 mL에 소금 2숟가락을 녹인 것은 진하기가 같을까요?" 같은 양으로 환산해 보는 아이디어를 말로 꺼낸다. 물의 양을 맞추지 않고 소금의 양만 바꾸어 진하기를 견주는 오류가 자주 나온다. 물 100 mL당 몇 숟가락인지 보면 견주기 쉽다고 말해 준다.',
          student: '물의 양이 달라도 진하기를 견줄 수 있을까요? 물 100 mL당 몇 숟가락인지 어떻게 알아낼까요?',
          demo: { tool: 'matter', options: { mode: 'dissolve', solute: { name: '소금', perSpoon: 5, limit: 35 } }, sequence: [{ conc: 4 }] },
        },
        {
          id: 'main', title: '전개', minutes: 27,
          activities: [
            A('a1', '활동 1. 물 100 mL당 숟가락 수 맞추기', 11, 'matter',
              '물 100 mL당 숟가락 수가 목표와 같도록 물의 양과 숟가락 수를 맞춰 보세요. 수는 모두 예시 값이에요.',
              '"물 100 mL당 몇 숟가락인지 먼저 계산해 봐요." 물이 두 배면 숟가락도 두 배라는 규칙을 말하게 한다. 물만 늘리고 숟가락은 그대로 둔 학생에게는 한 칸씩 바꿔 보며 값이 어떻게 변하는지 보게 한다. 확인을 연달아 눌러 우연히 맞추지 않게 먼저 계산하게 한다.',
              LVD, [
                { prompt: '물 100 mL당 3숟가락인 진하기로 맞춰 보세요. 물의 양은 100 mL로 해요.',
                  toolOptions: { mode: 'dissolve', solute: { name: '소금', perSpoon: 5, limit: 35 } },
                  target: { set: { water: 100, spoons: 3 } }, difficulty: 0.2 },
                { prompt: '물 100 mL당 5숟가락인 진하기로 맞춰 보세요. 물의 양이 달라도 괜찮아요.',
                  toolOptions: { mode: 'dissolve', solute: { name: '설탕', perSpoon: 5, limit: 35 } },
                  target: { conc: 5 }, difficulty: 0.3 },
                { prompt: '물 100 mL당 6숟가락인 진하기로 맞춰 보세요. 물의 양이 달라도 괜찮아요.',
                  toolOptions: { mode: 'dissolve', solute: { name: '설탕', perSpoon: 5, limit: 35 } },
                  target: { conc: 6 }, difficulty: 0.3,
                  conclude: '물이 두 배가 되면 숟가락 수도 두 배가 되어야 물 100 mL당 숟가락 수가 같아요.' },
              ]),
            A('a2', '활동 2. 바꾼 조건과 진하기의 변화 이어 보기', 8, 'mindmap',
              '용질이나 물의 양을 바꾼 조건과 진하기의 변화를 이어요. 알맞지 않은 카드는 남겨 둬요.',
              '"무엇을 바꾸었는지 먼저 말하고 나서 진하기가 어떻게 변할지 말해 봐요." 두 가지를 한꺼번에 바꾸면 변화를 예상하기 어려운 이유를 이야기한다. 물을 더 넣었는데 진해졌다고 답한 학생에게는 용질의 양이 그대로인지 확인하게 한다.',
              LV, [
                { prompt: '조건과 진하기의 변화를 이어 보세요.',
                  toolOptions: { mode: 'match', topic: '진하기의 변화', slots: [{ id: 'c1', label: '물은 그대로, 용질을 두 배로 늘렸어요' }, { id: 'c2', label: '용질은 그대로, 물을 두 배로 늘렸어요' }], cards: [
                    { id: 'a', text: '더 진해져요' }, { id: 'b', text: '더 묽어져요' }, { id: 'c', text: '변화가 없어요', why: '양이 바뀌면 진하기도 바뀌어요.' }] },
                  target: { match: { c1: 'a', c2: 'b' } }, difficulty: 0.2 },
                { prompt: '물과 용질을 모두 두 배로 늘리면 어떻게 될까요? 알맞은 카드를 골라 보세요.',
                  toolOptions: { mode: 'pick', topic: '모두 두 배', basket: '맞는 말', cards: [
                    { id: 'a', text: '물 100 mL당 숟가락 수는 그대로예요' }, { id: 'b', text: '진하기는 그대로예요' },
                    { id: 'c', text: '훨씬 더 진해져요', why: '둘 다 두 배가 되면 비율이 같아요.' }, { id: 'd', text: '훨씬 더 묽어져요', why: '둘 다 두 배가 되면 비율이 같아요.' }] },
                  target: { pick: ['a', 'b'] }, difficulty: 0.25 },
                { prompt: '진하기가 같은 것끼리 나누어 보세요. 기준은 물 100 mL에 2숟가락이에요.',
                  toolOptions: { mode: 'sort', topic: '기준 물 100 mL, 2숟가락', slots: ['기준과 진하기가 같아요', '기준과 달라요'], cards: ['물 200 mL에 4숟가락', '물 100 mL에 3숟가락', '물 50 mL에 1숟가락', '물 300 mL에 3숟가락'] },
                  target: { sort: { '기준과 진하기가 같아요': ['물 200 mL에 4숟가락', '물 50 mL에 1숟가락'], '기준과 달라요': ['물 100 mL에 3숟가락', '물 300 mL에 3숟가락'] } }, difficulty: 0.3,
                  predict: { q: '물 400 mL에 4숟가락은 기준(물 100 mL에 2숟가락)보다 어떨까요?', options: ['더 진해요', '더 묽어요', '같아요'], answer: 1 },
                  conclude: '물과 용질의 양이 같은 비율로 변하면 진하기는 그대로예요.' },
              ]),
            A('a3', '활동 3. 진한 차례대로 놓기', 8, 'timeline',
              '설탕물 조건을 읽고 묽은 것부터 진한 순서로 놓아요.',
              '"각 컵에서 물 100 mL당 몇 숟가락인지 먼저 구해 보세요." 두 값을 비교하는 방법을 말로 하게 한다. 숟가락 수만 보고 순서를 놓는 학생에게는 물의 양도 다르다는 점을 짚는다.',
              LV, [
                { prompt: '같은 양의 물에 설탕을 녹인 컵이에요. 묽은 것부터 진한 순서로 놓아 보세요.',
                  toolOptions: { axis: ['묽어요', '진해요'], cards: [{ id: 'a', text: '물 100 mL에 2숟가락' }, { id: 'b', text: '물 100 mL에 6숟가락' }, { id: 'c', text: '물 100 mL에 4숟가락' }] },
                  target: { order: ['a', 'c', 'b'] }, difficulty: 0.15 },
                { prompt: '설탕은 같은 양, 물의 양이 다른 컵이에요. 묽은 것부터 진한 순서로 놓아 보세요.',
                  toolOptions: { axis: ['묽어요', '진해요'], cards: [{ id: 'a', text: '물 50 mL에 설탕 4숟가락' }, { id: 'b', text: '물 200 mL에 설탕 4숟가락' }, { id: 'c', text: '물 100 mL에 설탕 4숟가락' }] },
                  target: { order: ['b', 'c', 'a'] }, difficulty: 0.25 },
                { prompt: '물과 설탕의 양이 모두 다른 컵이에요. 물 100 mL당 숟가락 수를 구해 묽은 것부터 놓아 보세요.',
                  toolOptions: { axis: ['묽어요', '진해요'], cards: [{ id: 'a', text: '물 200 mL에 8숟가락' }, { id: 'b', text: '물 100 mL에 6숟가락' }, { id: 'c', text: '물 50 mL에 1숟가락' }] },
                  target: { order: ['c', 'a', 'b'] }, difficulty: 0.3,
                  conclude: '물 100 mL당 숟가락 수가 클수록 진한 용액이에요.' },
              ]),
          ],
        },
        {
          id: 'wrapup', title: '정리', minutes: 7,
          teacher: '"물 200 mL에 8숟가락은 물 100 mL당 몇 숟가락일까요?" 8을 2로 나누는 말이 나오게 한다. 출구 3번에서 물의 양만 보고 고른 학생에게는 활동 2의 모두 두 배 문항을 다시 풀어 보게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'matter', options: { mode: 'dissolve', solute: { name: '소금', perSpoon: 5, limit: 35 } }, prompt: '물 100 mL당 2숟가락인 진하기로 맞춰 보세요. 물의 양이 달라도 괜찮아요. (예시 값)', target: { conc: 2 }, difficulty: 0.25 },
            { type: 'choice', prompt: '물 300 mL에 소금 6숟가락의 물 100 mL당 숟가락 수는 몇 숟가락인가요?', options: ['2숟가락', '3숟가락', '6숟가락'], answer: 0, difficulty: 0.25, explain: '300 mL는 100 mL의 세 배이므로 6숟가락을 3으로 나누면 2숟가락이에요.' },
            { type: 'choice', prompt: '물 200 mL에 설탕 4숟가락과 물 100 mL에 설탕 2숟가락의 진하기는 어떤가요?', options: ['같아요', '앞의 것이 더 진해요', '뒤의 것이 더 진해요'], answer: 0, difficulty: 0.2, explain: '둘 다 물 100 mL당 2숟가락이어서 진하기가 같아요.' },
            MOOD,
          ],
        },
      ],
      worksheet: {
        title: '물 100 mL당 숟가락 수로 진하기 견주기',
        items: [
          { type: 'table', prompt: '물 100 mL당 숟가락 수를 구해 표를 채우세요.', columns: ['조건', '물 100 mL당 숟가락 수'], cells: [['물 200 mL에 4숟가락', ''], ['물 100 mL에 3숟가락', ''], ['물 50 mL에 1숟가락', ''], ['물 300 mL에 9숟가락', '']], answer: '2숟가락, 3숟가락, 2숟가락, 3숟가락' },
          { type: 'choice', prompt: '위 표에서 가장 진한 것에 ○ 하세요.', options: ['물 200 mL에 4숟가락', '물 100 mL에 3숟가락', '물 50 mL에 1숟가락'], answer: '물 100 mL에 3숟가락(물 300 mL에 9숟가락도 같은 진하기)' },
          { type: 'figure', wide: true, prompt: '두 그릇의 진하기가 같은지 ○ 하세요. (예시 그림)', tool: 'matter', options: { mode: 'dissolve', solute: { name: '설탕', perSpoon: 5, limit: 35 } }, figures: [
            { state: { water: 100, spoons: 2 }, caption: '가: 물 100 mL, 2숟가락' }, { state: { water: 200, spoons: 4 }, caption: '나: 물 200 mL, 4숟가락' }], answer: '같아요(둘 다 물 100 mL당 2숟가락)' },
          { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '물이 두 배가 되면 숟가락 수도 ___ 배가 되어야 진하기가 같아요.', answer: '두' },
          { type: 'short', prompt: '물의 양이 달라도 진하기를 견주는 방법을 한 문장으로 써 보세요.', answer: '물 100 mL당 몇 숟가락인지 구해 그 수를 견준다.' },
        ],
        easy: {
          note: '물이 두 배가 되면 숟가락도 두 배가 되어야 진하기가 같아요.',
          items: [
            { type: 'choice', prompt: '물 200 mL에 4숟가락은 물 100 mL에 몇 숟가락과 같은 진하기인가요?', options: ['2숟가락', '4숟가락'], answer: '2숟가락' },
            { type: 'choice', prompt: '물 100 mL에 2숟가락과 6숟가락 중 더 진한 것에 ○ 하세요.', options: ['2숟가락', '6숟가락'], answer: '6숟가락' },
            { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '물의 양이 달라도 물 ___ mL당 숟가락 수로 견줄 수 있어요.', answer: '100' },
            { type: 'draw', prompt: '물 100 mL에 2숟가락과 물 200 mL에 4숟가락을 그림으로 나타내 보세요.' },
          ],
        },
      },
      differentiation: {
        easy: '용해 교구에 진하기 값이 함께 보여요. 카드가 적어요.',
        base: '직접 계산해 물의 양과 숟가락을 맞추고 확인을 눌러 고쳐요.',
        challenge: '물의 양과 숟가락이 모두 다른 세 컵을 진한 차례로 놓아요.',
      },
      teacherNotes: '교구의 수는 모두 예시이다. 자주 보이는 오개념: ① 물의 양을 맞추지 않고 용질의 양만 바꾸어 진하기를 견준다 → 물 100 mL당 숟가락 수로 견준다. ② 물이 많으면 무조건 더 진하다/묽다 → 용질의 양과 비율을 함께 본다. ③ 두 값을 같은 비율로 늘려도 진해진다고 본다 → 비율이 같으면 진하기도 같다. 나눗셈이 어려운 학생은 물 100 mL 한 컵씩 묶어 숟가락을 나누어 놓게 한다.',
    }),

    // ───────────────────────── 7차시 (core) ─────────────────────────
    L(7, {
      title: '뜬 높이를 표와 그래프로 나타내고 진한 차례로 늘어놓기',
      objective: '용질의 양이 다른 용액에서 같은 물체가 뜬 높이를 표와 그래프로 나타내고, 뜬 높이가 높을수록 진한 용액이라고 말하며 진한 차례로 늘어놓을 수 있다.',
      standards: ['[6과03-02]'],
      safety: [SAFE_TASTE, SAFE_GLASS, SAFE_WASH],
      illustration: {
        prompt: P('three clear cups with different amounts of dissolved sugar, each holding a small cherry tomato floating at a different height, with a paper bar chart growing taller beside them'),
        scene: scene([
          { motif: 'sun', x: 70, y: 52, s: 0.7 }, { motif: 'cloud', x: 390, y: 52, s: 0.8 },
          { motif: 'hills', y: 218, colors: ['mint', 'sky', 'peach'] }, { motif: 'flower', x: 405, y: 232 },
        ], '더 높이 뜨는 쪽이 더 진할까요?', 20),
      },
      stages: [
        {
          id: 'intro', title: '도입', minutes: 6,
          teacher: '"투명한 설탕물은 눈으로 진하기를 알 수 없어요. 대신 방울토마토를 띄우면 어떨까요?" 진한 용액일수록 물체가 더 높이 뜬다는 점을 처음에는 예상으로만 묻는다. 눈대중으로 진한 차례를 정해 버리는 학생이 있으니 뜬 높이를 재어 숫자로 말해야 한다고 안내한다. 수치는 모두 예시 값이다.',
          student: '투명한 설탕물 세 컵의 진하기를 어떻게 알아낼까요? 방울토마토를 띄우면 무엇이 달라질까요?',
          demo: { tool: 'chart', options: { type: 'bar', data: [['2숟가락', 4], ['4숟가락', 8], ['6숟가락', 12]], unit: 'mm', xLabel: '녹인 설탕', yLabel: '뜬 높이', scale: 2, given: [0, 1] }, sequence: [{ build: true }] },
        },
        {
          id: 'main', title: '전개', minutes: 27,
          activities: [
            A('a1', '활동 1. 설탕 양에 따른 뜬 높이 막대그래프', 10, 'chart',
              '표의 수를 보고 막대그래프를 완성하거나 그래프를 읽어요. 수는 모두 예시로 만든 값이에요.',
              '"설탕이 많을수록 방울토마토가 어떻게 되었나요?" 막대가 점점 높아졌다는 말이 나오게 한다. 세로축이 뜬 높이(mm)임을 확인하고, 막대가 높을수록 용액이 진하다는 뜻을 말로 이어 준다. 용액이 다르면 토마토 크기나 모양을 같게 해야 한다는 점도 짚는다.',
              { easy: { showValues: true }, base: {}, challenge: {} }, [
                { prompt: '설탕을 녹인 양에 따라 방울토마토가 뜬 높이를 쟀어요. 막대그래프를 완성하세요. (예시 값)',
                  toolOptions: { type: 'bar', title: '설탕 양에 따른 뜬 높이', data: [['2숟가락', 4], ['4숟가락', 8], ['6숟가락', 12]], unit: 'mm', xLabel: '녹인 설탕', yLabel: '뜬 높이', scale: 2, given: [0] },
                  target: { build: true }, difficulty: 0.15 },
                { prompt: '소금물로 같은 실험을 했어요. 막대그래프를 완성하세요. (예시 값)',
                  toolOptions: { type: 'bar', title: '소금 양에 따른 뜬 높이', data: [['1숟가락', 2], ['3숟가락', 6], ['5숟가락', 10], ['7숟가락', 14]], unit: 'mm', xLabel: '녹인 소금', yLabel: '뜬 높이', scale: 2, given: [0] },
                  target: { build: true }, difficulty: 0.2 },
                { prompt: '그래프를 보고 가장 진한 용액을 골라 보세요. (예시 값)',
                  toolOptions: { type: 'bar', mode: 'read', title: '세 컵에서 뜬 높이', data: [['가 컵', 6], ['나 컵', 14], ['다 컵', 10]], unit: 'mm', xLabel: '컵', scale: 2, choices: ['가 컵', '나 컵', '다 컵'], question: '가장 진한 용액이 든 컵은?', why: ['가장 낮게 떴어요.', '', '나 컵보다 낮게 떴어요.'], explain: '나 컵에서 가장 높이 떠서 가장 진한 용액이에요.' },
                  target: { pick: 1 }, difficulty: 0.15,
                  conclude: '같은 물체가 더 높이 뜰수록 용액이 더 진해요.' },
              ]),
            A('a2', '활동 2. 뜬 높이를 그림그래프로 나타내기', 9, 'chart',
              '그림 한 개가 몇 mm인지 먼저 보고, 표의 수만큼 그림을 채우거나 그림그래프를 읽어요. 수는 모두 예시예요.',
              '"○ 한 개가 5 mm이면 큰 그림 두 개와 작은 그림 세 개는 몇 mm일까요?" 값을 말로 풀게 한다. 단위를 빠뜨리는 학생에게는 숫자 옆에 mm를 붙여 읽게 한다.',
              { easy: { showValues: true }, base: {}, challenge: {} }, [
                { prompt: '세 용액에서 방울토마토가 뜬 높이예요. 그림그래프를 완성하세요. (예시 값, ○ 한 개 = 5 mm, 작은 ○ 한 개 = 1 mm)',
                  toolOptions: { type: 'picture', title: '용액별 뜬 높이', data: [['가 용액', 6], ['나 용액', 13], ['다 용액', 9]], unit: 'mm', icons: [{ value: 5, name: '5 mm' }, { value: 1, name: '1 mm' }], xLabel: '용액' },
                  target: { build: true }, difficulty: 0.2 },
                { prompt: '소금을 녹인 양별로 뜬 높이를 쟀어요. 그림그래프를 완성하세요. (예시 값, ○ 한 개 = 5 mm, 작은 ○ 한 개 = 1 mm)',
                  toolOptions: { type: 'picture', title: '소금 양별 뜬 높이', data: [['2숟가락', 4], ['5숟가락', 11], ['8숟가락', 17]], unit: 'mm', icons: [{ value: 5, name: '5 mm' }, { value: 1, name: '1 mm' }], xLabel: '녹인 소금' },
                  target: { build: true }, difficulty: 0.25 },
                { prompt: '그림그래프를 읽고 알맞은 값을 골라 보세요. (예시 값)',
                  toolOptions: { type: 'picture', mode: 'read', title: '용액별 뜬 높이', data: [['A 용액', 8], ['B 용액', 15], ['C 용액', 11]], unit: 'mm', icons: [{ value: 5, name: '5 mm' }, { value: 1, name: '1 mm' }], choices: ['8 mm', '15 mm', '11 mm'], question: 'C 용액에서 뜬 높이는 몇 mm일까요?', why: ['A 용액의 뜬 높이예요.', 'B 용액의 뜬 높이예요.', ''], explain: '큰 그림 두 개(10 mm)와 작은 그림 한 개(1 mm)를 합쳐 11 mm예요.' },
                  target: { pick: 2 }, difficulty: 0.2,
                  conclude: '그림그래프도 그림의 수와 한 그림의 값을 곱해 읽어요.' },
              ]),
            A('a3', '활동 3. 뜬 높이로 진한 차례 놓기', 8, 'timeline',
              '뜬 높이가 적힌 카드를 읽고 묽은 것부터 진한 순서로 놓아요.',
              '"높이 뜰수록 어떤 용액일까요?" 높이가 클수록 진하다는 규칙을 말하게 한다. 높이 값이 비슷해 헷갈리면 숫자를 크기 순으로 먼저 늘어놓게 한다. 방울토마토를 띄우는 실험은 같은 물체로 해야 비교할 수 있음을 다시 짚는다.',
              LV, [
                { prompt: '뜬 높이로 용액을 묽은 것부터 진한 순서로 놓아 보세요.',
                  toolOptions: { axis: ['묽어요', '진해요'], cards: [{ id: 'a', text: '가 용액', sub: '뜬 높이 12 mm' }, { id: 'b', text: '나 용액', sub: '뜬 높이 4 mm' }, { id: 'c', text: '다 용액', sub: '뜬 높이 8 mm' }] },
                  target: { order: ['b', 'c', 'a'] }, difficulty: 0.15 },
                { prompt: '네 용액의 뜬 높이예요. 묽은 것부터 진한 순서로 놓아 보세요.',
                  toolOptions: { axis: ['묽어요', '진해요'], cards: [{ id: 'a', text: '소금물 가', sub: '뜬 높이 9 mm' }, { id: 'b', text: '소금물 나', sub: '뜬 높이 3 mm' }, { id: 'c', text: '소금물 다', sub: '뜬 높이 15 mm' }, { id: 'd', text: '소금물 라', sub: '뜬 높이 6 mm' }] },
                  target: { order: ['b', 'd', 'a', 'c'] }, difficulty: 0.25 },
                { prompt: '설탕 양과 뜬 높이를 보고 진한 차례대로 놓아 보세요. 숫자를 읽고 견주어요.',
                  toolOptions: { axis: ['묽어요', '진해요'], cards: [{ id: 'a', text: '설탕 6숟가락', sub: '뜬 높이 11 mm' }, { id: 'b', text: '설탕 2숟가락', sub: '뜬 높이 5 mm' }, { id: 'c', text: '설탕 4숟가락', sub: '뜬 높이 8 mm' }] },
                  target: { order: ['b', 'c', 'a'] }, difficulty: 0.2,
                  conclude: '뜬 높이를 재면 눈으로 알 수 없는 용액의 진하기를 비교할 수 있어요.' },
              ]),
          ],
        },
        {
          id: 'wrapup', title: '정리', minutes: 7,
          teacher: '"눈으로는 똑같아 보이는 설탕물의 진하기는 어떻게 알아냈나요?" 같은 물체가 뜬 높이를 재서 비교했다고 말하게 한다. 출구 3번에서 뜬 높이가 낮은 쪽을 진하다고 고른 학생에게는 활동 1의 그래프를 다시 보며 막대가 높은 쪽이 진하다고 확인시킨다.',
          exitTicket: [
            { type: 'tool', tool: 'chart', options: { type: 'bar', mode: 'read', title: '용액에서 뜬 높이', data: [['가', 5], ['나', 11], ['다', 8]], unit: 'mm', xLabel: '용액', scale: 1, choices: ['가', '나', '다'], question: '가장 묽은 용액은?', explain: '가에서 가장 낮게 떠서 가장 묽은 용액이에요.' }, prompt: '그래프를 보고 가장 묽은 용액을 골라 보세요. (예시 값)', target: { pick: 0 }, difficulty: 0.2 },
            { type: 'choice', prompt: '같은 방울토마토를 띄웠을 때 더 높이 뜨는 용액은 어떤 용액인가요?', options: ['더 진한 용액', '더 묽은 용액', '색이 있는 용액'], answer: 0, difficulty: 0.15, explain: '진한 용액일수록 같은 물체가 더 높이 떠요.' },
            { type: 'choice', prompt: '뜬 높이가 4 mm, 9 mm, 7 mm인 세 용액 가운데 가장 진한 것은 몇 mm인가요? (예시 값)', options: ['4 mm', '7 mm', '9 mm'], answer: 2, difficulty: 0.2, explain: '가장 높이 뜬 9 mm 용액이 가장 진해요.' },
            MOOD,
          ],
        },
      ],
      worksheet: {
        title: '뜬 높이로 진하기 나타내기',
        items: [
          { type: 'table', prompt: '실험 결과(예시 값)를 표에 옮겨 쓰고 가장 진한 용액에 ○ 하세요.', columns: ['녹인 설탕', '뜬 높이(mm)'], cells: [['2숟가락', '4'], ['4숟가락', '8'], ['6숟가락', '12']], answer: '6숟가락 용액이 가장 진함(뜬 높이 12 mm)' },
          { type: 'draw', prompt: '위 표를 막대그래프로 그리세요. 가로에 녹인 설탕, 세로에 뜬 높이(mm)를 쓰고 한 칸을 2 mm로 해요.' },
          { type: 'choice', prompt: '뜬 높이가 높을수록 용액은 어떤가요? ○ 하세요.', options: ['더 진해요', '더 묽어요', '관계없어요'], answer: '더 진해요' },
          { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '같은 물체를 띄웠을 때 ___ 높이 뜰수록 용액이 더 진해요.', answer: '더' },
          { type: 'short', prompt: '눈으로 구별하기 어려운 용액의 진하기를 비교하는 방법을 써 보세요.', answer: '같은 물체를 용액마다 띄우고 뜬 높이를 재어 견주면 된다.' },
        ],
        easy: {
          note: '뜬 높이가 높을수록 진한 용액이에요.',
          items: [
            { type: 'choice', prompt: '더 높이 뜬 용액은 어떤 용액인가요? ○ 하세요.', options: ['더 진해요', '더 묽어요'], answer: '더 진해요' },
            { type: 'choice', prompt: '뜬 높이가 4 mm와 8 mm 중 더 진한 것에 ○ 하세요.', options: ['4 mm', '8 mm'], answer: '8 mm' },
            { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '같은 ___을 띄워서 높이를 견줘요.', answer: '물체' },
            { type: 'draw', prompt: '뜬 높이가 낮은 컵과 높은 컵을 그려 보세요.' },
          ],
        },
      },
      differentiation: {
        easy: '그래프의 값이 늘 보이고, 카드가 적어요.',
        base: '막대를 직접 올려 완성하고 값은 확인한 뒤에 읽어요.',
        challenge: '값이 비슷한 용액이 섞이고, 눈금이 2씩 커지는 그래프를 읽어요.',
      },
      teacherNotes: '수치는 모두 예시이다. 자주 보이는 오개념: ① 뜬 높이를 재지 않고 눈대중으로 진한 차례를 정한다 → 자로 재어 숫자로 말하게 한다. ② 높이 뜬 쪽이 묽다고 거꾸로 읽는다 → 진할수록 더 높이 뜬다. ③ 용액마다 다른 크기의 물체를 띄워 비교한다 → 같은 물체로 한다. 방울토마토와 용액은 먹지 않는다.',
    }),

    // ───────────────────────── 8차시 (core) ─────────────────────────
    L(8, {
      title: '방울토마토를 띄워 뜬 높이를 재고 진한 용액 찾기',
      objective: '용질의 양만 다르게 한 용액에 같은 물체를 띄워 뜬 높이를 자로 재어 기록하고, 진하기를 비교할 수 있다.',
      standards: ['[6과03-02]'],
      safety: [SAFE_TASTE, SAFE_GLASS, SAFE_WASH],
      illustration: {
        prompt: P('two children measuring with a ruler how high a small cherry tomato floats in two clear cups of sugar water with different amounts of sugar'),
        scene: scene([
          { motif: 'star', x: 76, y: 52 }, { motif: 'cloud', x: 396, y: 50, s: 0.8 },
          { motif: 'hills', y: 218, colors: ['lavender', 'mint', 'sky'] }, { motif: 'flower', x: 405, y: 232 },
        ], '토마토는 얼마나 떠 있을까요?'),
      },
      stages: [
        {
          id: 'intro', title: '도입', minutes: 6,
          teacher: '"설탕을 두 숟가락, 다섯 숟가락 녹인 컵에 같은 방울토마토를 넣으면 어느 쪽이 더 높이 뜰까요?" 예상을 손으로 들게 한다. 물의 양을 맞추지 않고 설탕의 양만 바꾸어 진하기를 견주는 경우가 많으니 "무엇을 같게 해야 할까요?"를 먼저 묻는다. 시연으로 자 눈금을 읽는 법을 한 번 보여 준다.',
          student: '같은 방울토마토를 두 컵에 띄우면 어느 컵에서 더 높이 뜰까요? 어떻게 하면 공정하게 비교할 수 있을까요?',
          demo: { tool: 'measure', options: { mode: 'ruler', max: 15, object: { name: '뜬 높이', len: 6 } }, sequence: [{ read: 6 }] },
        },
        {
          id: 'main', title: '전개', minutes: 27,
          activities: [
            A('a1', '활동 1. 자로 뜬 높이 읽기', 9, 'measure',
              '컵 옆에 붙인 자로 방울토마토가 뜬 높이를 읽어요. 아래 수는 예시로 만든 값이에요.',
              '"자의 어느 눈금에서 시작했는지 먼저 보세요." 자의 0이 아닌 눈금에서 시작한 값에서 끝 눈금을 그대로 읽는 학생이 많다. 시작 눈금을 먼저 짚게 하고 두 눈금의 차를 구하게 한다. 값은 모두 예시이다.',
              { easy: { mode: 'ruler', max: 15, mm: false }, base: { mode: 'ruler', max: 15 }, challenge: { mode: 'ruler', max: 20 } }, [
                { prompt: '설탕 2숟가락을 녹인 컵에서 방울토마토가 뜬 높이는 몇 cm인가요? (예시 값)', toolOptions: { object: { name: '뜬 높이', len: 2 } }, target: { read: 2 }, difficulty: 0.1 },
                { prompt: '설탕 4숟가락을 녹인 컵에서 뜬 높이를 자의 2 cm 눈금부터 대었어요. 높이는 몇 cm인가요? (예시 값)', toolOptions: { object: { name: '뜬 높이', len: 4, start: 2 } }, target: { read: 4 }, difficulty: 0.2,
                  levels: { challenge: { toolOptions: { object: { name: '뜬 높이', len: 4.5, start: 3 } }, prompt: '뜬 높이를 자의 3 cm 눈금부터 대었어요. 높이는 몇 cm 몇 mm인가요? (예시 값)', target: { read: 4.5 } } } },
                { prompt: '설탕 6숟가락을 녹인 컵에서 뜬 높이를 재어 보세요. (예시 값)', toolOptions: { object: { name: '뜬 높이', len: 6 } }, target: { read: 6 }, difficulty: 0.2,
                  levels: { base: { toolOptions: { object: { name: '뜬 높이', len: 6.5 } }, prompt: '설탕 6숟가락을 녹인 컵에서 뜬 높이는 몇 cm 몇 mm인가요? (예시 값)', target: { read: 6.5 } },
                    challenge: { toolOptions: { object: { name: '뜬 높이', len: 6.5, start: 1.5 } }, prompt: '뜬 높이를 1.5 cm 눈금부터 대었어요. 높이는 몇 cm 몇 mm인가요? (예시 값)', target: { read: 6.5 } } },
                  conclude: '설탕을 많이 녹일수록 방울토마토가 더 높이 떴어요. 높이는 시작 눈금에서 끝 눈금까지로 읽어요.' },
              ]),
            A('a2', '활동 2. 진하기 비교 실험 차례 놓기', 9, 'timeline',
              '방울토마토로 진하기를 견주는 실험 차례를 카드로 놓아요.',
              '"설탕을 녹인 뒤 어떤 일을 먼저 해야 할까요?" 설탕이 다 녹은 뒤에 토마토를 띄우는 차례를 말하게 한다. 토마토를 넣은 다음 설탕을 더 넣는 학생에게는 먼저 용액을 만든 뒤 띄우라고 짚는다. 토마토는 실험에만 쓰고 먹지 않는다.',
              LV, [
                { prompt: '진하기를 견주는 실험 차례대로 놓아 보세요.',
                  toolOptions: { axis: ['먼저', '나중'], cards: [{ id: '물', text: '컵 세 개에 같은 양의 물을 담아요' }, { id: '설탕', text: '컵마다 다른 양의 설탕을 녹여요' }, { id: '띄움', text: '같은 방울토마토를 띄워요' }, { id: '재기', text: '뜬 높이를 자로 재어 적어요' }] },
                  target: { order: ['물', '설탕', '띄움', '재기'] }, difficulty: 0.15 },
                { prompt: '실험이 끝난 뒤 결과를 정리하는 차례대로 놓아 보세요.',
                  toolOptions: { axis: ['먼저', '나중'], cards: [{ id: '표', text: '뜬 높이를 표에 적어요' }, { id: '순서', text: '높이를 견주어 진한 차례를 정해요' }, { id: '말하기', text: '진하기와 뜬 높이의 관계를 말해요' }] },
                  target: { order: ['표', '순서', '말하기'] }, difficulty: 0.2 },
                { prompt: '용액을 만드는 차례대로 놓아 보세요.',
                  toolOptions: { axis: ['먼저', '나중'], cards: [{ id: '재기', text: '눈금 컵으로 물의 양을 맞춰요' }, { id: '넣기', text: '설탕을 한 숟가락씩 넣어요' }, { id: '젓기', text: '다 녹을 때까지 저어요' }] },
                  target: { order: ['재기', '넣기', '젓기'] }, difficulty: 0.2,
                  conclude: '물의 양을 맞추고, 설탕을 넣어 녹인 뒤에 토마토를 띄워요.' },
              ]),
            A('a3', '활동 3. 같게 할 것과 다르게 할 것, 짝 실험', 9, 'mindmap',
              '방울토마토 실험에서 같게 할 것과 다르게 할 것을 나누고, 진짜 컵으로 짝과 해 봐요.',
              '준비물(모둠): 투명 컵 3개, 설탕, 물, 눈금 컵, 방울토마토 3개(크기가 비슷한 것), 자, 숟가락. 뜬 높이는 컵 옆에 붙인 자로 읽고 유리컵은 조심히 다룬다. 토마토와 용액은 먹지 않고 실험이 끝나면 손을 씻는다. "물의 양을 맞추지 않고 설탕의 양만 바꿔도 될까요?"를 물어 둘 다 맞춰야 한다고 짚어 준다.',
              LV, [
                { prompt: '방울토마토 실험에서 같게 할 것과 다르게 할 것으로 나누어 보세요.',
                  toolOptions: { mode: 'sort', topic: '진하기 실험', slots: ['같게 해요', '다르게 해요'], cards: ['물의 양', '녹이는 설탕의 양', '방울토마토의 크기', '젓는 횟수'] },
                  target: { sort: { '같게 해요': ['물의 양', '방울토마토의 크기', '젓는 횟수'], '다르게 해요': ['녹이는 설탕의 양'] } }, difficulty: 0.15 },
                { prompt: '실험을 바르게 한 설명만 바구니에 넣어 보세요.',
                  toolOptions: { mode: 'pick', topic: '바른 실험', basket: '바르게 했어요', cards: [
                    { id: 'a', text: '컵마다 물의 양을 똑같이 맞췄어요' }, { id: 'b', text: '같은 크기의 방울토마토를 썼어요' }, { id: 'c', text: '설탕이 다 녹은 뒤에 띄웠어요' },
                    { id: 'd', text: '컵마다 다른 크기의 토마토를 썼어요', why: '물체가 다르면 뜬 높이를 비교할 수 없어요.' }, { id: 'e', text: '설탕이 남아 있는 채로 띄웠어요', why: '다 녹지 않으면 진하기를 알 수 없어요.' }] },
                  target: { pick: ['a', 'b', 'c'] }, difficulty: 0.2 },
                { prompt: '결과 해석으로 알맞은 말과 알맞지 않은 말로 나누어 보세요.',
                  toolOptions: { mode: 'sort', topic: '결과 해석', slots: ['알맞아요', '알맞지 않아요'], cards: ['더 높이 뜬 컵이 더 진해요', '뜬 높이가 낮은 컵이 더 묽어요', '색이 더 진한 컵이 더 진해요', '토마토가 클수록 더 진해요'] },
                  target: { sort: { '알맞아요': ['더 높이 뜬 컵이 더 진해요', '뜬 높이가 낮은 컵이 더 묽어요'], '알맞지 않아요': ['색이 더 진한 컵이 더 진해요', '토마토가 클수록 더 진해요'] } }, difficulty: 0.25 },
                { difficulty: 0, prompt: '컵 두 개에 설탕의 양만 다르게 녹이고 방울토마토를 띄워 뜬 높이를 견준 뒤, 어느 컵이 더 진한지 짝에게 말하고 "다 했어요"를 누르세요.', free: true, talk: true },
              ], { pair: true }),
          ],
        },
        {
          id: 'wrapup', title: '정리', minutes: 7,
          teacher: '"어느 컵이 가장 진했나요? 근거는 무엇인가요?" 뜬 높이를 숫자로 말하게 한다. 출구 2번에서 토마토 크기를 다르게 해도 된다고 고른 학생에게는 실험 설명 문항을 다시 읽게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'measure', options: { mode: 'ruler', max: 15, object: { name: '뜬 높이', len: 7.5 } }, prompt: '방울토마토가 뜬 높이는 몇 cm 몇 mm인가요? (예시 값)', target: { read: 7.5 }, difficulty: 0.2 },
            { type: 'choice', prompt: '용액의 진하기를 견주는 실험에서 같게 해야 하는 것은 무엇인가요?', options: ['물의 양과 방울토마토의 크기', '녹이는 설탕의 양', '용액의 색'], answer: 0, difficulty: 0.2, explain: '다르게 하는 것은 설탕의 양이고, 물의 양과 토마토의 크기는 같게 해요.' },
            { type: 'choice', prompt: '두 컵에서 방울토마토가 뜬 높이가 각각 3 cm와 6 cm이면 더 진한 용액은 어느 컵인가요? (예시 값)', options: ['3 cm 컵', '6 cm 컵', '똑같아요'], answer: 1, difficulty: 0.15, explain: '더 높이 뜬 6 cm 컵의 용액이 더 진해요.' },
            MOOD,
          ],
        },
      ],
      worksheet: {
        title: '방울토마토로 진하기 비교하기',
        items: [
          { type: 'figure', prompt: '자로 방울토마토가 뜬 높이를 읽어 쓰세요. (예시 그림)', tool: 'measure', options: { mode: 'ruler', max: 15 }, figures: [
            { options: { object: { name: '뜬 높이 ①', len: 3 } }, caption: '___ cm' }, { options: { object: { name: '뜬 높이 ②', len: 7.5, start: 2 } }, caption: '___ cm ___ mm' }], answer: '3 cm, 7 cm 5 mm' },
          { type: 'table', prompt: '실험 결과를 표에 적고 가장 진한 컵에 ○ 하세요.', columns: ['컵', '녹인 설탕(숟가락)', '뜬 높이(mm)'], rows: 3, answer: '녹인 설탕이 많을수록 더 높이 뜸. 가장 높이 뜬 컵이 가장 진함' },
          { type: 'choice', prompt: '진하기를 공정하게 비교하려면 같게 해야 하는 것에 ○ 하세요.', options: ['물의 양', '설탕의 양', '용액의 이름'], answer: '물의 양' },
          { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '같은 방울토마토가 더 ___ 뜬 용액이 더 진해요.', answer: '높이' },
          { type: 'short', prompt: '"색이 더 진한 컵이 더 진한 용액이다."라는 말을 방울토마토 실험으로 고쳐 써 보세요.', answer: '색이 아니라 같은 방울토마토가 뜬 높이를 재어 더 높이 뜬 컵이 더 진한 용액이다.' },
        ],
        easy: {
          note: '같은 물체가 더 높이 뜨면 진한 용액이에요. 자의 시작 눈금을 먼저 봐요.',
          items: [
            { type: 'choice', prompt: '더 높이 뜬 컵은 더 진한 용액인가요? ○ 하세요.', options: ['맞아요', '틀려요'], answer: '맞아요' },
            { type: 'choice', prompt: '실험에서 같게 할 것에 ○ 하세요.', options: ['물의 양', '설탕의 양'], answer: '물의 양' },
            { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '뜬 높이는 ___로 재요.', answer: '자' },
            { type: 'draw', prompt: '설탕을 조금 녹인 컵과 많이 녹인 컵에서 방울토마토가 뜬 모습을 그려 보세요.' },
          ],
        },
      },
      differentiation: {
        easy: '자에는 cm 눈금만 있고, 카드가 적어요.',
        base: '높이를 mm까지 읽고, 실험 차례를 스스로 놓아요.',
        challenge: '자의 0이 아닌 눈금에서 시작한 높이를 읽고, 공정한 실험 설명을 함정 카드에서 골라요.',
      },
      teacherNotes: '이 차시의 수치는 모두 예시이다. 자주 보이는 오개념: ① 물의 양을 맞추지 않고 설탕의 양만 바꾼다 → 물의 양도 함께 같게 한다. ② 토마토의 크기가 다른데 뜬 높이만 견준다 → 같은 크기를 쓴다. ③ 자의 0이 아닌 눈금에서 시작한 높이를 끝 눈금 그대로 읽는다. 방울토마토는 크기가 비슷한 것을 고르고, 실험에 쓴 것은 먹지 않는다. 컵 옆에 자를 붙일 때는 테이프로 고정한다.',
    }),

    // ───────────────────────── 9차시 (core) ─────────────────────────
    L(9, {
      title: '생활 속 액체 가운데 용액인 것과 아닌 것 가르기',
      objective: '생활 속 액체를 골고루 섞여 있는지에 따라 용액과 용액이 아닌 것으로 가르고, 그렇게 판단한 까닭을 말할 수 있다.',
      standards: ['[6과03-03]'],
      safety: [SAFE_TASTE, SAFE_GLASS, SAFE_WASH],
      illustration: {
        prompt: P('a kitchen shelf with a clear jar of salt water, a bottle of vinegar, a cup of muddy water and a glass with oil floating on water, each labeled with a small paper tag'),
        scene: scene([
          { motif: 'sun', x: 70, y: 50, s: 0.7 }, { motif: 'cloud', x: 390, y: 52, s: 0.8 },
          { motif: 'hills', y: 218, colors: ['peach', 'buttercup', 'mint'] }, { motif: 'house', x: 400, y: 232, color: 'sky' },
        ], '이 액체도 용액일까요?', 21),
      },
      stages: [
        {
          id: 'intro', title: '도입', minutes: 6,
          teacher: '"우리가 마시는 이온 음료, 부엌의 식초, 비 온 뒤 흙탕물은 모두 액체예요. 이 가운데 용액인 것은 무엇일까요?" 액체이면 모두 용액이라고 생각하는 학생이 많다. 지난 시간까지 배운 용액의 모습(골고루 섞이고, 가만히 두어도 가라앉지 않는다)을 칠판에 적어 두고, 그 기준으로 하나씩 따져 보자고 말한다.',
          student: '이온 음료, 식초, 흙탕물은 모두 액체예요. 이 가운데 용액인 것은 무엇일까요? 어떤 기준으로 따질까요?',
          demo: { tool: 'mindmap', options: { shuffle: false, mode: 'sort', topic: '액체', slots: ['용액이에요', '용액이 아니에요'], cards: ['소금물', '흙탕물'] }, sequence: [{ sort: { '용액이에요': ['소금물'], '용액이 아니에요': ['흙탕물'] } }] },
        },
        {
          id: 'main', title: '전개', minutes: 27,
          activities: [
            A('a1', '활동 1. 용액인 것과 아닌 것 가르기', 10, 'mindmap',
              '액체 카드를 읽고, 골고루 섞여 있어 가만히 두어도 가라앉지 않으면 용액, 그렇지 않으면 용액이 아닌 것으로 나누어요.',
              '"가만히 두어도 아래로 가라앉거나 위에 뜨는 것이 있나요?" 기준을 먼저 말하게 한다. 탁해 보이는 주스를 용액이 아니라고 단정하는 학생에게는 과육이 가라앉는지 직접 관찰하게 한다. 기름과 물은 섞이지 않고 층이 나뉜다는 점을 짚는다.',
              LV, [
                { prompt: '액체를 용액인 것과 용액이 아닌 것으로 나누어 보세요.',
                  toolOptions: { mode: 'sort', topic: '액체', slots: ['용액이에요', '용액이 아니에요'], cards: ['소금물', '설탕물', '흙탕물', '모래를 넣은 물'] },
                  target: { sort: { '용액이에요': ['소금물', '설탕물'], '용액이 아니에요': ['흙탕물', '모래를 넣은 물'] } }, difficulty: 0.1 },
                { prompt: '다른 액체도 나누어 보세요.',
                  toolOptions: { mode: 'sort', topic: '액체', slots: ['용액이에요', '용액이 아니에요'], cards: ['식초', '이온 음료', '기름과 물을 섞어 둔 것', '밀가루를 풀어 둔 물', '사이다'] },
                  target: { sort: { '용액이에요': ['식초', '이온 음료', '사이다'], '용액이 아니에요': ['기름과 물을 섞어 둔 것', '밀가루를 풀어 둔 물'] } }, difficulty: 0.25 },
                { prompt: '용액이라고 판단하는 까닭만 바구니에 넣어 보세요. 알맞지 않은 카드는 남겨 둬요.',
                  toolOptions: { mode: 'pick', topic: '용액의 까닭', basket: '용액의 까닭', cards: [
                    { id: 'a', text: '두 물질이 골고루 섞여 있어요' }, { id: 'b', text: '가만히 두어도 가라앉지 않아요' }, { id: 'c', text: '용질이 아주 작은 알갱이로 퍼져 있어요' },
                    { id: 'd', text: '액체이기만 하면 용액이에요', why: '흙탕물도 액체이지만 용액이 아니에요.' }, { id: 'e', text: '색이 투명하면 모두 용액이에요', why: '녹지 않은 가루가 아주 고우면 뿌옇고 가라앉아요.' }] },
                  target: { pick: ['a', 'b', 'c'] }, difficulty: 0.25,
                  predict: { q: '흙탕물을 가만히 두면 어떻게 될까요?', options: ['흙이 가라앉아요', '그대로 섞여 있어요', '잘 모르겠어요'], answer: 0 },
                  conclude: '골고루 섞여 가만히 두어도 가라앉지 않는 것만 용액이에요. 흙탕물은 용액이 아니에요.' },
              ]),
            A('a2', '활동 2. 용액의 용질과 용매 찾기', 9, 'mindmap',
              '용액에서 녹아 있는 물질(용질)과 녹이는 물질(용매)을 찾아 이어요. 맞지 않는 카드는 남겨 둬요.',
              '"이 용액에서 물처럼 녹이는 물질은 무엇이고 녹아 있는 물질은 무엇일까요?" 이온 음료나 식초처럼 용질이 여러 가지일 수 있다는 점은 한 가지씩만 짚는다. 용매가 늘 물이 아닐 수도 있다고만 말하고 깊이 다루지 않는다.',
              LV, [
                { prompt: '소금물에서 용질과 용매를 이어 보세요.',
                  toolOptions: { mode: 'match', topic: '소금물', slots: [{ id: 'c1', label: '용질' }, { id: 'c2', label: '용매' }], cards: [{ id: '소금', text: '소금' }, { id: '물', text: '물' }, { id: '모래', text: '모래', why: '모래는 들어 있지 않아요.' }] },
                  target: { match: { c1: '소금', c2: '물' } }, difficulty: 0.15 },
                { prompt: '식초에서 용매와 용질을 이어 보세요.',
                  toolOptions: { mode: 'match', topic: '식초', slots: [{ id: 'c1', label: '녹이는 물질(용매)' }, { id: 'c2', label: '녹아 있는 물질(용질)' }], cards: [{ id: '물', text: '물' }, { id: '아세트산', text: '아세트산' }, { id: '모래', text: '모래', why: '식초에는 모래가 들어 있지 않아요.' }] },
                  target: { match: { c1: '물', c2: '아세트산' } }, difficulty: 0.25 },
                { prompt: '용액과 그 속의 용질을 이어 보세요.',
                  toolOptions: { mode: 'match', topic: '용액의 용질', slots: [{ id: 'c1', label: '소금물' }, { id: 'c2', label: '설탕물' }, { id: 'c3', label: '주스 가루를 탄 물' }], cards: [{ id: 'a', text: '소금' }, { id: 'b', text: '설탕' }, { id: 'c', text: '주스 가루' }, { id: 'd', text: '모래', why: '용액 속 용질이 아니에요.' }] },
                  target: { match: { c1: 'a', c2: 'b', c3: 'c' } }, difficulty: 0.2,
                  conclude: '용액에서 녹아 있는 물질이 용질이고, 녹이는 물질이 용매예요.' },
              ]),
            A('a3', '활동 3. 용액이 쓰이는 곳 찾기', 8, 'mindmap',
              '생활에서 용액이 쓰이는 곳과 용액의 이름을 이어요. 알맞지 않은 카드는 남겨 둬요.',
              '"집이나 학교에서 용액이 쓰이는 곳을 찾아볼까요?" 식염수나 시럽 같은 약은 어른의 지시에 따라 쓴다는 점을 먼저 말해 준다. 제품 이름만 외우는 학생에게는 그 안에 무엇이 녹아 있는지를 물어 용질을 찾게 한다.',
              LV, [
                { prompt: '용액이 쓰이는 곳과 용액의 이름을 이어 보세요.',
                  toolOptions: { mode: 'match', topic: '용액 쓰임', slots: [{ id: 'c1', label: '음식에 신맛을 내요' }, { id: 'c2', label: '땀으로 나간 물과 염분을 보충해요' }], cards: [{ id: 'a', text: '식초' }, { id: 'b', text: '이온 음료' }, { id: 'c', text: '흙탕물', why: '흙탕물은 용액이 아니에요.' }] },
                  target: { match: { c1: 'a', c2: 'b' } }, difficulty: 0.15 },
                { prompt: '다른 쓰임과 용액도 이어 보세요.',
                  toolOptions: { mode: 'match', topic: '용액 쓰임', slots: [{ id: 'c1', label: '콘택트렌즈를 보관하고 씻어요' }, { id: 'c2', label: '김치를 절일 때 써요' }], cards: [{ id: 'a', text: '식염수' }, { id: 'b', text: '소금물' }, { id: 'c', text: '기름과 물', why: '섞이지 않아서 용액이 아니에요.' }] },
                  target: { match: { c1: 'a', c2: 'b' } }, difficulty: 0.2 },
                { prompt: '용액이 쓰이는 곳만 바구니에 넣어 보세요.',
                  toolOptions: { mode: 'pick', topic: '용액 쓰임', basket: '용액이 쓰여요', cards: [
                    { id: 'a', text: '이온 음료로 땀을 보충해요' }, { id: 'b', text: '설탕물로 단맛을 내요' }, { id: 'c', text: '식초로 음식 맛을 내요' },
                    { id: 'd', text: '흙탕물로 손을 씻어요', why: '흙탕물은 용액이 아니고 더러워요.' }, { id: 'e', text: '모래물로 마셔요', why: '모래물은 용액이 아니고 마시면 위험해요.' }] },
                  target: { pick: ['a', 'b', 'c'] }, difficulty: 0.25,
                  conclude: '음식, 음료, 몸 관리에 용액이 많이 쓰여요.' },
              ]),
          ],
        },
        {
          id: 'wrapup', title: '정리', minutes: 7,
          teacher: '"용액인지 아닌지는 무엇으로 판단했나요?" 골고루 섞이고 가라앉지 않는다는 말이 나오게 한다. 출구 2번에서 액체이면 모두 용액이라고 고른 학생에게는 흙탕물을 가만히 둔 모습을 다시 보게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', options: { mode: 'sort', topic: '액체', slots: ['용액이에요', '용액이 아니에요'], cards: ['설탕물', '흙탕물', '식초'] }, prompt: '액체를 용액인 것과 아닌 것으로 나누어 보세요.', target: { sort: { '용액이에요': ['설탕물', '식초'], '용액이 아니에요': ['흙탕물'] } }, difficulty: 0.15 },
            { type: 'choice', prompt: '용액에 대한 설명으로 알맞은 것은 무엇인가요?', options: ['액체이면 모두 용액이다', '골고루 섞여 가만히 두어도 가라앉지 않는 것이다', '색이 있으면 용액이다'], answer: 1, difficulty: 0.2, explain: '용액은 용질이 용매에 골고루 섞여 가라앉지 않는 것이에요.' },
            { type: 'choice', prompt: '다음 가운데 용액이 아닌 것은 무엇인가요?', options: ['소금물', '흙탕물', '이온 음료'], answer: 1, difficulty: 0.1, explain: '흙탕물은 흙이 가라앉으므로 용액이 아니에요.' },
            MOOD,
          ],
        },
      ],
      worksheet: {
        title: '용액인 것과 아닌 것',
        items: [
          { type: 'table', prompt: '액체가 용액인지 아닌지 쓰세요. 용액이면 ○, 아니면 ×를 써요.', columns: ['액체', '용액인가요? (○ / ×)'], cells: [['소금물', ''], ['흙탕물', ''], ['식초', ''], ['기름과 물을 섞어 둔 것', '']], answer: '○ / × / ○ / ×' },
          { type: 'choice', prompt: '용액의 모습으로 알맞은 것에 ○ 하세요.', options: ['가만히 두어도 가라앉지 않아요', '가만히 두면 바닥에 가라앉아요', '위에 따로 층이 생겨요'], answer: '가만히 두어도 가라앉지 않아요' },
          { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '용액은 용질이 용매에 ___ 섞여 있어서 가만히 두어도 ___.', answer: '골고루, 가라앉지 않아요' },
          { type: 'check', prompt: '용액이 쓰이는 곳을 모두 고르세요.', options: ['이온 음료로 땀 보충', '식초로 음식 맛내기', '흙탕물로 손 씻기', '식염수로 렌즈 씻기'], answer: '이온 음료로 땀 보충, 식초로 음식 맛내기, 식염수로 렌즈 씻기' },
          { type: 'short', prompt: '"액체이면 모두 용액이다."라는 말이 틀린 까닭을 흙탕물을 예로 들어 써 보세요.', answer: '흙탕물은 액체이지만 흙이 골고루 섞이지 않고 가라앉으므로 용액이 아니다.' },
        ],
        easy: {
          note: '용액은 골고루 섞여 있고 가라앉지 않아요. 흙탕물은 흙이 가라앉아서 용액이 아니에요.',
          items: [
            { type: 'choice', prompt: '용액인 것에 ○ 하세요.', options: ['소금물', '흙탕물'], answer: '소금물' },
            { type: 'choice', prompt: '가만히 두면 가라앉는 것은 용액인가요?', options: ['아니에요', '맞아요'], answer: '아니에요' },
            { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '소금물에서 소금은 ___이에요.', answer: '용질' },
            { type: 'draw', prompt: '용액인 컵과 용액이 아닌 컵을 한 개씩 그려 보세요.' },
          ],
        },
      },
      differentiation: {
        easy: '맞는 칸에 놓은 카드에 초록 테두리가 생기고, 카드가 적어요.',
        base: '모두 놓은 뒤 확인을 눌러 스스로 고쳐요. 흙탕물 문항에서 먼저 예상을 골라요.',
        challenge: '헷갈리는 액체(사이다·밀가루 푼 물)가 섞이고, 쓰임을 잇는 문항이 더 어려워요.',
      },
      teacherNotes: '자주 보이는 오개념: ① 액체이면 모두 용액이다 → 흙탕물처럼 가라앉는 것은 용액이 아니다. ② 투명하면 모두 용액, 탁하면 용액이 아니다 → 가라앉는지를 기준으로 한다. ③ 용매는 늘 물이다 → 이 단원에서는 물이 용매인 예만 다룬다. 식염수·시럽 같은 약은 어른의 지시에 따라 쓰며, 실험실의 액체는 맛보지 않는다. 사이다는 탄산이 물에 녹은 용액이다.',
    }),

    // ───────────────────────── 10차시 (practice) ─────────────────────────
    L(10, {
      title: '용액이 쓰이는 곳과 필요한 까닭 짝지어 정리하기',
      objective: '생활 속 용액을 쓰임에 따라 가르고, 그 용액이 왜 필요한지 까닭을 말할 수 있다.',
      standards: ['[6과03-03]'],
      safety: [SAFE_TASTE, SAFE_GLASS, SAFE_WASH],
      illustration: {
        prompt: P('a home scene with a kitchen counter showing a jar of salt water for pickling, a bottle of sports drink, and a small saline bottle for contact lenses, each paired with a small paper icon of its use'),
        scene: scene([
          { motif: 'moon', x: 70, y: 52, s: 0.7 }, { motif: 'cloud', x: 390, y: 52, s: 0.8 },
          { motif: 'hills', y: 218, colors: ['sky', 'peach', 'mint'] }, { motif: 'house', x: 400, y: 232, color: 'buttercup' },
        ], '이 용액은 왜 필요할까요?', 21),
      },
      stages: [
        {
          id: 'intro', title: '도입', minutes: 6,
          teacher: '"우리 집에서 쓰는 용액 하나를 말해 볼까요? 그 용액이 없으면 어떤 불편이 생길까요?" 제품 이름만 말하는 학생이 많으니 "그 안에 무엇이 녹아 있고 무엇에 쓰나요?"까지 묻는다. 용액이 어떤 일을 하는지와 왜 필요한지를 함께 말하는 연습을 하자고 말해 준다.',
          student: '집에서 쓰는 용액 하나와 그 용액이 필요한 까닭을 생각해 봐요.',
          demo: { tool: 'mindmap', options: { shuffle: false, mode: 'match', topic: '용액의 쓰임', slots: [{ id: 'c1', label: '땀 흘린 몸을 돕는 음료' }, { id: 'c2', label: '음식에 신맛' }], cards: [{ id: 'a', text: '이온 음료' }, { id: 'b', text: '식초' }] }, sequence: [{ match: { c1: 'a', c2: 'b' } }] },
        },
        {
          id: 'main', title: '전개', minutes: 27,
          activities: [
            A('a1', '활동 1. 쓰임에 따라 용액 가르기', 10, 'mindmap',
              '용액을 먹는 것, 몸이나 물건을 관리하는 것으로 나누어요. 카드를 끌거나 눌러 고른 뒤 칸을 눌러요.',
              '"먹을 수 있는 용액과 먹으면 안 되는 용액은 어떻게 구분할까요?" 실험에 쓰는 용액과 주방 용액을 혼동하지 않도록 짚는다. 청소에 쓰는 세제 물을 마셔도 된다고 고른 학생에게는 용액이라도 먹을 수 없는 것이 있음을 알려 준다.',
              LV, [
                { prompt: '용액이 쓰이는 곳을 음식과 음료, 관리와 청소로 나누어 보세요.',
                  toolOptions: { mode: 'sort', topic: '용액의 쓰임', slots: ['음식과 음료', '관리와 청소'], cards: ['식초로 음식 맛내기', '이온 음료로 땀 보충', '식염수로 렌즈 씻기', '세제 푼 물로 바닥 닦기'] },
                  target: { sort: { '음식과 음료': ['식초로 음식 맛내기', '이온 음료로 땀 보충'], '관리와 청소': ['식염수로 렌즈 씻기', '세제 푼 물로 바닥 닦기'] } }, difficulty: 0.15 },
                { prompt: '다른 용액도 쓰임에 따라 나누어 보세요.',
                  toolOptions: { mode: 'sort', topic: '용액의 쓰임', slots: ['음식과 음료', '관리와 청소'], cards: ['설탕물로 단맛 내기', '소금물로 김치 절이기', '식염수로 콧속 씻기', '세제 푼 물로 설거지하기', '사이다 마시기'] },
                  target: { sort: { '음식과 음료': ['설탕물로 단맛 내기', '소금물로 김치 절이기', '사이다 마시기'], '관리와 청소': ['식염수로 콧속 씻기', '세제 푼 물로 설거지하기'] } }, difficulty: 0.25 },
                { prompt: '용액을 안전하게 쓰는 방법만 바구니에 넣어 보세요.',
                  toolOptions: { mode: 'pick', topic: '안전하게 쓰기', basket: '안전해요', cards: [
                    { id: 'a', text: '약은 어른이 정한 양만 먹어요' }, { id: 'b', text: '청소용 세제는 마시지 않아요' }, { id: 'c', text: '실험실의 용액은 맛보지 않아요' },
                    { id: 'd', text: '궁금하면 세제 물을 맛봐요', why: '세제 물은 마시면 몸에 해로워요.' }, { id: 'e', text: '식염수는 아무 병에나 담아 써요', why: '깨끗한 병에 담긴 제품만 써야 해요.' }] },
                  target: { pick: ['a', 'b', 'c'] }, difficulty: 0.25,
                  conclude: '용액은 쓰임이 다양하지만 먹어도 되는 것과 안 되는 것을 구분해야 해요.' },
              ]),
            A('a2', '활동 2. 용액이 필요한 까닭 이어 보기', 9, 'mindmap',
              '용액이 쓰이는 곳과 그 용액이 필요한 까닭을 이어요. 알맞지 않은 카드는 남겨 둬요.',
              '"왜 소금물에 김치를 절일까요?" 까닭에 용질이 물에 퍼져 있어서 일정하게 스며든다는 설명이 나오면 칭찬하되, 정확한 원리는 중학교에서 다루므로 쓰임과 필요를 이어 말하는 데서 멈춘다. 쓰임만 말하고 까닭은 말하지 않는 학생에게는 "그것이 없으면 어떻게 될까요?"를 묻는다.',
              LV, [
                { prompt: '쓰임과 필요한 까닭을 이어 보세요.',
                  toolOptions: { mode: 'match', topic: '쓰임과 까닭', slots: [{ id: 'c1', label: '이온 음료' }, { id: 'c2', label: '식염수' }], cards: [
                    { id: 'a', text: '땀으로 나간 물과 염분을 채워 줘요' }, { id: 'b', text: '렌즈를 깨끗하고 촉촉하게 보관해 줘요' }, { id: 'c', text: '더러운 물을 닦아 줘요', why: '식염수의 필요가 아니에요.' }] },
                  target: { match: { c1: 'a', c2: 'b' } }, difficulty: 0.2 },
                { prompt: '다른 쓰임과 까닭도 이어 보세요.',
                  toolOptions: { mode: 'match', topic: '쓰임과 까닭', slots: [{ id: 'c1', label: '식초' }, { id: 'c2', label: '설탕물' }, { id: 'c3', label: '세제 푼 물' }], cards: [
                    { id: 'a', text: '음식에 신맛을 더해 줘요' }, { id: 'b', text: '음료나 음식에 단맛을 더해 줘요' }, { id: 'c', text: '그릇의 기름때를 씻어 내요' }, { id: 'd', text: '빛을 만들어 줘요', why: '용액은 빛을 만들지 않아요.' }] },
                  target: { match: { c1: 'a', c2: 'b', c3: 'c' } }, difficulty: 0.25 },
                { prompt: '용액이 필요한 까닭을 설명하는 카드만 바구니에 넣어 보세요.',
                  toolOptions: { mode: 'pick', topic: '필요한 까닭', basket: '까닭이에요', cards: [
                    { id: 'a', text: '쓰기 편하게 골고루 섞여 있어요' }, { id: 'b', text: '양을 조절하기 쉬워요' }, { id: 'c', text: '몸이나 물건에 고르게 닿아요' },
                    { id: 'd', text: '용액은 맛이 늘 좋아요', why: '쓰임과 필요의 까닭이 아니에요.' }, { id: 'e', text: '무조건 비싸서 좋아요', why: '필요한 까닭이 아니에요.' }] },
                  target: { pick: ['a', 'b', 'c'] }, difficulty: 0.25,
                  conclude: '용액은 골고루 섞여 있어서 양을 조절하고 고르게 쓰기 쉬워요.' },
              ]),
            A('a3', '활동 3. 용액과 용액이 아닌 것의 쓰임 견주기', 8, 'matter',
              '카드의 설명을 읽고 용액인 것과 용액이 아닌 것으로 나누어요. 카드를 눌러 칸을 고르거나 숫자 키를 쓸 수 있어요.',
              '"쓰임 이야기를 하기 전에 먼저 용액인지부터 가려 봐요." 카드의 설명이 가라앉는지, 골고루 섞여 있는지를 말해 주는지 읽게 한다. 설명을 읽지 않고 이름만 보고 고른 학생에게는 설명 줄을 소리 내어 읽게 한다.',
              LV, [
                { prompt: '설명을 읽고 용액인 것과 용액이 아닌 것으로 나누어 보세요.',
                  toolOptions: { mode: 'sort', bins: ['용액이에요', '용액이 아니에요'], cards: [
                    { id: 'a', name: '소금물', props: ['골고루 섞여 가라앉지 않아요'] }, { id: 'b', name: '흙탕물', props: ['가만히 두면 흙이 가라앉아요'] }, { id: 'c', name: '설탕물', props: ['투명하고 가라앉지 않아요'] }] },
                  target: { bins: { a: 0, b: 1, c: 0 } }, difficulty: 0.15 },
                { prompt: '다른 액체도 설명을 읽고 나누어 보세요.',
                  toolOptions: { mode: 'sort', bins: ['용액이에요', '용액이 아니에요'], cards: [
                    { id: 'a', name: '식초', props: ['골고루 섞여 있어요'] }, { id: 'b', name: '기름과 물', props: ['위아래로 층이 나뉘어요'] }, { id: 'c', name: '밀가루 푼 물', props: ['가만히 두면 가라앉아요'] }, { id: 'd', name: '이온 음료', props: ['골고루 섞여 가라앉지 않아요'] }] },
                  target: { bins: { a: 0, b: 1, c: 1, d: 0 } }, difficulty: 0.25 },
                { prompt: '쓰임이 용액과 이어지는 카드만 용액 칸에 넣어 보세요.',
                  toolOptions: { mode: 'sort', bins: ['용액이에요', '용액이 아니에요'], cards: [
                    { id: 'a', name: '식염수', props: ['렌즈를 씻을 때 써요, 투명하고 가라앉지 않아요'] }, { id: 'b', name: '모래 섞은 물', props: ['모래가 바닥에 가라앉아요'] }, { id: 'c', name: '설탕물', props: ['음료의 단맛을 내요'] }] },
                  target: { bins: { a: 0, b: 1, c: 0 } }, difficulty: 0.3,
                  conclude: '쓰임이 달라도 용액은 모두 골고루 섞여 가라앉지 않는다는 공통점이 있어요.' },
              ]),
          ],
        },
        {
          id: 'wrapup', title: '정리', minutes: 7,
          teacher: '"오늘 배운 용액이 우리 생활에서 왜 필요한가요?" 쓰임과 까닭을 한 문장으로 말하게 한다. 출구 3번에서 세제 물을 마셔도 된다고 고른 학생에게는 활동 1의 안전 카드를 다시 읽게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '쓰임과 까닭', slots: [{ id: 'c1', label: '설탕물' }, { id: 'c2', label: '세제 푼 물' }], cards: [{ id: 'a', text: '음료에 단맛을 더해 줘요' }, { id: 'b', text: '그릇의 기름때를 씻어 내요' }, { id: 'c', text: '흙을 가라앉혀 줘요', why: '용액의 쓰임이 아니에요.' }] }, prompt: '용액과 그 용액이 필요한 까닭을 이어 보세요.', target: { match: { c1: 'a', c2: 'b' } }, difficulty: 0.2 },
            { type: 'choice', prompt: '다음 가운데 용액인 것은 무엇인가요?', options: ['이온 음료', '흙탕물', '기름과 물'], answer: 0, difficulty: 0.1, explain: '이온 음료는 골고루 섞여 가라앉지 않는 용액이에요.' },
            { type: 'choice', prompt: '용액을 안전하게 쓰는 방법으로 알맞은 것은 무엇인가요?', options: ['청소용 세제는 마시지 않아요', '궁금하면 맛을 봐요', '아무 용액이나 입에 넣어요'], answer: 0, difficulty: 0.15, explain: '세제처럼 먹으면 안 되는 용액도 있어서 맛보지 않아요.' },
            MOOD,
          ],
        },
      ],
      worksheet: {
        title: '용액의 쓰임과 필요한 까닭',
        items: [
          { type: 'table', prompt: '집이나 학교에서 쓰는 용액을 조사해 표에 적으세요.', columns: ['용액', '쓰임', '필요한 까닭'], rows: 3, answer: '학생이 조사한 용액에 따라 다름. 쓰임과 까닭을 함께 썼는지 확인' },
          { type: 'check', prompt: '용액인 것을 모두 고르세요.', options: ['설탕물', '흙탕물', '식초', '기름과 물'], answer: '설탕물, 식초' },
          { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '용액은 골고루 섞여 있어서 양을 ___하기 쉽고, 몸이나 물건에 ___ 닿아요.', answer: '조절, 고르게' },
          { type: 'choice', prompt: '용액을 안전하게 쓰는 방법에 ○ 하세요.', options: ['청소용 세제는 마시지 않아요', '모르는 액체를 맛봐요'], answer: '청소용 세제는 마시지 않아요' },
          { type: 'short', prompt: '내가 고른 용액이 우리 생활에 왜 필요한지 한 문장으로 써 보세요.', answer: '예: 이온 음료는 땀으로 나간 물과 염분을 채워 주어 필요하다.' },
        ],
        easy: {
          note: '용액은 골고루 섞여 있어서 쓰기 편해요. 세제 같은 용액은 마시면 안 돼요.',
          items: [
            { type: 'choice', prompt: '용액인 것에 ○ 하세요.', options: ['이온 음료', '흙탕물'], answer: '이온 음료' },
            { type: 'choice', prompt: '청소용 세제 물을 마셔도 되나요?', options: ['안 돼요', '돼요'], answer: '안 돼요' },
            { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '식초는 음식에 ___맛을 더해요.', answer: '신' },
            { type: 'draw', prompt: '집에서 쓰는 용액 한 가지를 그리고 쓰임을 써 보세요.' },
          ],
        },
      },
      differentiation: {
        easy: '맞는 칸에 놓은 카드에 초록 테두리가 생기고, 카드가 적어요.',
        base: '모두 놓은 뒤 확인을 눌러 스스로 고쳐요.',
        challenge: '함정 카드가 섞이고, 쓰임과 필요한 까닭을 모두 이어요.',
      },
      teacherNotes: '자주 보이는 오개념: ① 제품 이름만 말하고 안에 무엇이 녹아 있는지는 모른다 → 용질을 함께 말하게 한다. ② 쓰임만 말하고 필요한 까닭은 말하지 않는다 → "없으면 어떻게 될까?"를 묻는다. ③ 모든 용액을 마셔도 된다고 본다 → 세제 물처럼 먹으면 안 되는 용액이 있다. 식염수·시럽 같은 의약품은 어른의 지시에 따른다. 실험실의 용액은 맛보지 않는다.',
    }),

    // ───────────────────────── 11차시 (core) ─────────────────────────
    L(11, {
      title: '조사한 용액 사례를 그림그래프와 소개 자료로 정리하기',
      objective: '조사한 용액 사례를 그림그래프로 나타내고, 용액의 쓰임과 필요한 까닭이 담긴 소개 자료의 구성을 정리할 수 있다.',
      standards: ['[6과03-03]'],
      safety: [SAFE_TASTE, SAFE_WASH, '자료에 친구의 얼굴·이름·집 주소를 넣지 않고, 사진은 직접 찍거나 출처를 밝혀 써요.'],
      illustration: {
        prompt: P('a child at a desk arranging paper cards with pictures of salt water, vinegar and sports drink next to a small picture graph and a title card, preparing a poster'),
        scene: scene([
          { motif: 'star', x: 76, y: 52 }, { motif: 'cloud', x: 396, y: 50, s: 0.8 },
          { motif: 'hills', y: 218, colors: ['mint', 'lavender', 'peach'] }, { motif: 'house', x: 404, y: 232, color: 'sky' },
        ], '조사한 것을 어떻게 알릴까요?', 21),
      },
      stages: [
        {
          id: 'intro', title: '도입', minutes: 6,
          teacher: '"우리가 조사한 용액을 다른 반 친구들에게 알리려면 어떻게 하면 좋을까요?" 제품 이름만 나열한 자료와 쓰임·까닭을 함께 담은 자료를 견주어 보여 준다. 조사한 사례를 한눈에 보게 하는 그림그래프가 도움이 된다는 점도 이야기한다. 자료를 인터넷에 올릴 때는 친구의 얼굴이나 이름을 넣지 않는다고 먼저 말해 둔다.',
          student: '조사한 용액을 다른 친구들에게 알리려면 무엇을 담으면 좋을까요? 그래프는 어떻게 도움이 될까요?',
          demo: { tool: 'chart', options: { type: 'picture', data: [['음식', 12], ['몸 관리', 7]], unit: '개', icons: [{ value: 5, name: '5개' }, { value: 1, name: '1개' }], xLabel: '쓰임', given: [0] }, sequence: [{ build: true }] },
        },
        {
          id: 'main', title: '전개', minutes: 27,
          activities: [
            A('a1', '활동 1. 조사한 용액 수를 그림그래프로', 10, 'chart',
              '표의 수를 보고 그림그래프를 완성하거나 읽어요. 수는 모두 예시로 만든 값이에요.',
              '"한 그림이 몇 개를 나타내는지 먼저 약속해요." 큰 그림과 작은 그림의 값을 말로 확인한다. 가장 많은 쓰임만 말하고 끝내지 않고, 적은 쓰임은 무엇을 더 조사해 보면 좋을지 물어 조사 활동으로 이어 간다.',
              { easy: { showValues: true }, base: {}, challenge: {} }, [
                { prompt: '우리 반이 찾은 용액을 쓰임별로 세었어요. 그림그래프를 완성하세요. (예시 값, ○ 한 개 = 5개, 작은 ○ 한 개 = 1개)',
                  toolOptions: { type: 'picture', title: '쓰임별 찾은 용액 수', data: [['음식', 13], ['몸 관리', 8], ['청소', 6]], unit: '개', icons: [{ value: 5, name: '5개' }, { value: 1, name: '1개' }], xLabel: '쓰임' },
                  target: { build: true }, difficulty: 0.2 },
                { prompt: '장소별로 찾은 용액 수예요. 그림그래프를 완성하세요. (예시 값, ○ 한 개 = 5개, 작은 ○ 한 개 = 1개)',
                  toolOptions: { type: 'picture', title: '장소별 찾은 용액 수', data: [['집', 14], ['학교', 9], ['가게', 11]], unit: '개', icons: [{ value: 5, name: '5개' }, { value: 1, name: '1개' }], xLabel: '장소' },
                  target: { build: true }, difficulty: 0.25 },
                { prompt: '그림그래프를 읽고 2모둠이 찾은 용액 수에 해당하는 값을 골라 보세요. (예시 값)',
                  toolOptions: { type: 'picture', mode: 'read', title: '모둠별 찾은 용액 수', data: [['1모둠', 9], ['2모둠', 14], ['3모둠', 6]], unit: '개', icons: [{ value: 5, name: '5개' }, { value: 1, name: '1개' }], choices: ['9개', '14개', '6개'], question: '2모둠이 찾은 용액은 몇 개일까요?', why: ['1모둠이 찾은 수예요.', '', '3모둠이 찾은 수예요.'], explain: '큰 그림 두 개(10개)와 작은 그림 네 개(4개)를 합쳐 14개예요.' },
                  target: { pick: 1 }, difficulty: 0.2,
                  conclude: '그림그래프로 나타내면 조사한 사례의 많고 적음을 한눈에 볼 수 있어요.' },
              ]),
            A('a2', '활동 2. 소개 자료의 구성 요소와 하는 일 이어 보기', 9, 'mindmap',
              '소개 자료에 들어갈 요소와 그 요소가 하는 일을 이어요. 알맞지 않은 카드는 남겨 둬요.',
              '"자료에 쓰임만 쓰면 보는 친구가 용액이 왜 필요한지 알 수 있을까요?" 제목, 사례, 쓰임, 까닭, 그래프가 각각 무슨 일을 하는지 말하게 한다. 쓰임만 적고 까닭이 없는 자료를 예로 보여 주고 어떻게 고칠지 묻는다.',
              LV, [
                { prompt: '소개 자료의 요소와 하는 일을 이어 보세요.',
                  toolOptions: { mode: 'match', topic: '소개 자료', slots: [{ id: 'c1', label: '제목' }, { id: 'c2', label: '그림그래프' }, { id: 'c3', label: '필요한 까닭' }], cards: [
                    { id: 'a', text: '무엇에 대한 자료인지 알려 줘요' }, { id: 'b', text: '조사한 수를 한눈에 보여 줘요' }, { id: 'c', text: '왜 용액이 필요한지 설명해 줘요' }, { id: 'd', text: '꾸밈만 하는 그림이에요', why: '필요한 요소의 역할이 아니에요.' }] },
                  target: { match: { c1: 'a', c2: 'b', c3: 'c' } }, difficulty: 0.2 },
                { prompt: '소개 자료에 꼭 있어야 하는 것만 바구니에 넣어 보세요.',
                  toolOptions: { mode: 'pick', topic: '소개 자료 점검', basket: '꼭 필요해요', cards: [
                    { id: 'a', text: '용액의 이름과 사례' }, { id: 'b', text: '쓰임' }, { id: 'c', text: '필요한 까닭' }, { id: 'd', text: '그 안에 녹아 있는 용질' },
                    { id: 'e', text: '친구의 얼굴 사진', why: '친구의 얼굴은 허락 없이 넣지 않아요.' }, { id: 'f', text: '출처 없는 사진', why: '출처를 밝히거나 직접 찍어야 해요.' }] },
                  target: { pick: ['a', 'b', 'c', 'd'] }, difficulty: 0.25 },
                { prompt: '자료를 만들 때 해도 되는 것과 하면 안 되는 것으로 나누어 보세요.',
                  toolOptions: { mode: 'sort', topic: '자료 만들기 약속', slots: ['해도 돼요', '하면 안 돼요'], cards: ['직접 찍은 사진을 넣어요', '사진 출처를 적어요', '친구 이름과 얼굴을 넣어요', '집 주소를 넣어요'] },
                  target: { sort: { '해도 돼요': ['직접 찍은 사진을 넣어요', '사진 출처를 적어요'], '하면 안 돼요': ['친구 이름과 얼굴을 넣어요', '집 주소를 넣어요'] } }, difficulty: 0.2,
                  conclude: '소개 자료에는 사례·쓰임·까닭을 담고, 개인 정보는 넣지 않아요.' },
              ]),
            A('a3', '활동 3. 소개 자료 만드는 차례 놓기', 8, 'story',
              '소개 자료를 만드는 차례대로 카드를 놓아요.',
              '"무엇부터 정해야 자료의 짜임이 생길까요?" 알리고 싶은 용액을 먼저 정하고, 쓰임과 까닭을 쓴 뒤 그래프와 그림을 넣는 차례를 말하게 한다. 꾸미기부터 시작하는 학생에게는 내용이 정해지지 않으면 꾸밈이 어긋난다고 짚는다.',
              LV, [
                { prompt: '소개 자료를 만드는 차례대로 놓아 보세요.',
                  toolOptions: { slots: ['1', '2', '3', '4'], cards: [{ id: '정하기', text: '알릴 용액을 정해요' }, { id: '쓰기', text: '쓰임과 필요한 까닭을 써요' }, { id: '그래프', text: '조사한 수를 그림그래프로 그려요' }, { id: '꾸미기', text: '그림과 제목을 넣어 꾸며요' }] },
                  target: { order: ['정하기', '쓰기', '그래프', '꾸미기'] }, difficulty: 0.15 },
                { prompt: '자료를 다 만든 뒤 점검하는 차례대로 놓아 보세요.',
                  toolOptions: { slots: ['1', '2', '3'], cards: [{ id: '읽기', text: '소리 내어 읽어 봐요' }, { id: '틀림', text: '틀린 낱말이나 숫자를 고쳐요' }, { id: '약속', text: '개인 정보가 없는지 확인해요' }] },
                  target: { order: ['읽기', '틀림', '약속'] }, difficulty: 0.2 },
                { prompt: '자료를 공유하는 차례대로 놓아 보세요.',
                  toolOptions: { slots: ['1', '2', '3'], cards: [{ id: '선생님', text: '선생님께 먼저 보여 드려요' }, { id: '올리기', text: '선생님과 정한 곳에 올려요' }, { id: '의견', text: '친구들의 의견을 읽어요' }] },
                  target: { order: ['선생님', '올리기', '의견'] }, difficulty: 0.2,
                  conclude: '자료는 선생님께 먼저 보이고 정한 곳에 올려 의견을 나누어요.' },
              ]),
          ],
        },
        {
          id: 'wrapup', title: '정리', minutes: 7,
          teacher: '"우리 모둠 자료에는 쓰임과 필요한 까닭이 모두 들어 있나요?" 자료를 점검 문장으로 확인하게 한다. 출구 3번에서 큰 그림과 작은 그림 값을 바꿔 읽은 학생에게는 한 그림이 몇 개인지 먼저 말하게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'story', options: { slots: ['1', '2', '3'], cards: [{ id: '정하기', text: '알릴 용액을 정해요' }, { id: '쓰기', text: '쓰임과 까닭을 써요' }, { id: '꾸미기', text: '그림으로 꾸며요' }] }, prompt: '소개 자료를 만드는 차례대로 놓아 보세요.', target: { order: ['정하기', '쓰기', '꾸미기'] }, difficulty: 0.15 },
            { type: 'choice', prompt: '소개 자료에 꼭 들어 있어야 하는 것은 무엇인가요?', options: ['용액의 쓰임과 필요한 까닭', '친구의 얼굴 사진', '그림 그린 날짜'], answer: 0, difficulty: 0.1, explain: '용액이 왜 필요한지 알려 주려면 쓰임과 까닭이 있어야 해요.' },
            { type: 'choice', prompt: '그림그래프에서 ○ 한 개가 5개일 때 ○ 세 개와 작은 ○(1개) 네 개는 모두 몇 개인가요?', options: ['19개', '34개', '7개'], answer: 0, difficulty: 0.25, explain: '5개씩 세 개는 15개이고 낱개 4개를 더하면 19개예요.' },
            MOOD,
          ],
        },
      ],
      worksheet: {
        title: '용액 소개 자료 만들기',
        items: [
          { type: 'table', prompt: '조사한 용액을 표에 정리하세요.', columns: ['용액', '녹아 있는 것(용질)', '쓰임', '필요한 까닭'], rows: 3, answer: '학생이 조사한 용액에 따라 다름. 용질·쓰임·까닭을 모두 썼는지 확인' },
          { type: 'draw', prompt: '표의 사례 수(예시: 음식 13개, 몸 관리 8개, 청소 6개)를 그림그래프로 그리세요. ○ 한 개는 5개로 해요.' },
          { type: 'draw', prompt: '용액 소개 자료의 짜임을 그리세요. 제목, 사례, 쓰임, 필요한 까닭, 그래프가 들어갈 자리를 표시해요.' },
          { type: 'choice', prompt: '자료에 넣으면 안 되는 것에 ○ 하세요.', options: ['직접 찍은 사진', '친구의 이름과 얼굴', '사진의 출처'], answer: '친구의 이름과 얼굴' },
          { type: 'short', prompt: '내가 만들 소개 자료의 제목과 가장 알리고 싶은 용액을 한 문장으로 써 보세요.', answer: '예: "우리 몸을 돕는 이온 음료" — 땀으로 나간 물과 염분을 채워 주는 용액이다.' },
        ],
        easy: {
          note: '자료에는 용액의 이름, 쓰임, 필요한 까닭을 써요. 그림그래프는 한 그림이 얼마인지 먼저 봐요.',
          items: [
            { type: 'choice', prompt: '자료에 꼭 필요한 것에 ○ 하세요.', options: ['쓰임과 까닭', '친구 얼굴'], answer: '쓰임과 까닭' },
            { type: 'choice', prompt: '그림그래프에서 ○ 한 개는 5개예요. ○ 두 개는 몇 개일까요?', options: ['10개', '2개'], answer: '10개' },
            { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '자료에는 친구의 ___과 이름을 넣지 않아요.', answer: '얼굴' },
            { type: 'draw', prompt: '알리고 싶은 용액 한 가지를 그리고 쓰임을 써 보세요.' },
          ],
        },
      },
      differentiation: {
        easy: '그래프의 값이 늘 보이고, 카드가 적어요.',
        base: '그림을 직접 채워 완성하고 값은 확인한 뒤에 읽어요.',
        challenge: '큰 그림과 작은 그림이 섞이고, 소개 자료에 필요한 요소를 함정 카드에서 골라요.',
      },
      teacherNotes: '수치는 모두 예시이며 모둠이 조사한 값과 다를 수 있다. 자주 보이는 어려움: ① 제품 이름만 모으고 안에 무엇이 녹아 있는지는 조사하지 않는다 → 용질을 표의 한 칸으로 둔다. ② 쓰임만 쓰고 필요한 까닭은 설명하지 않는다. ③ 그림그래프에서 큰 그림과 작은 그림의 값을 바꿔 읽는다. 사진은 직접 찍거나 출처를 밝히고 학생의 개인 정보는 자료에 넣지 않는다.',
    }),

    // ───────────────────────── 12차시 (wrap) ─────────────────────────
    L(12, {
      title: '소개 자료를 공유하고 용해와 용액 단원 정리하기',
      objective: '만든 용액 소개 자료를 공유하고, 용해·진하기·용액의 쓰임을 한 판에 정리해 말할 수 있다.',
      standards: ['[6과03-03]', '[6과03-02]', '[6과03-01]'],
      safety: [SAFE_TASTE, SAFE_GLASS, SAFE_WASH],
      illustration: {
        prompt: P('a classroom corner where students show paper posters about salt water, sugar water and sports drink to classmates, with small cups on a tray and a smiling teacher nearby'),
        scene: scene([
          { motif: 'sun', x: 70, y: 52, s: 0.7 }, { motif: 'cloud', x: 396, y: 50, s: 0.8 },
          { motif: 'hills', y: 218, colors: ['peach', 'mint', 'sky'] }, { motif: 'house', x: 404, y: 232, color: 'buttercup' },
        ], '용액을 알리는 자료를 나눠요', 21),
      },
      stages: [
        {
          id: 'intro', title: '도입', minutes: 6,
          teacher: '"우리가 만든 용액 소개 자료를 친구들에게 보여 주려면 어떤 차례가 좋을까요?" 제목을 말하고 사례를 보이고 까닭을 말하는 차례를 칠판에 적는다. 발표할 때 친구의 질문을 받는 시간도 있음을 알린다. 오늘은 단원에서 배운 용해·진하기·쓰임을 한 번에 정리하는 날이라고 말해 준다.',
          student: '용액 소개 자료를 어떤 차례로 친구들에게 알리면 좋을까요? 이 단원에서 배운 것을 떠올려 봐요.',
          demo: { tool: 'timeline', options: { shuffle: false, axis: ['먼저', '나중'], cards: [{ id: '제목', text: '제목을 말해요' }, { id: '사례', text: '조사한 용액을 보여 줘요' }, { id: '까닭', text: '필요한 까닭을 설명해요' }] }, sequence: [{ order: ['제목', '사례', '까닭'] }] },
        },
        {
          id: 'main', title: '전개', minutes: 27,
          activities: [
            A('a1', '활동 1. 자료를 공유하는 차례 놓기', 8, 'timeline',
              '자료를 발표하고 공유하는 차례를 카드로 놓아요.',
              '"발표를 들은 친구가 이해했는지는 어떻게 알 수 있을까요?" 질문과 의견을 주고받는 시간을 마지막에 두는 이유를 말하게 한다. 발표를 읽기만 하는 학생에게는 자료를 가리키며 이야기하게 한다.',
              LV, [
                { prompt: '자료를 발표하는 차례대로 놓아 보세요.',
                  toolOptions: { axis: ['먼저', '나중'], cards: [{ id: '제목', text: '제목과 알릴 용액을 말해요' }, { id: '사례', text: '그림그래프와 사례를 보여 줘요' }, { id: '까닭', text: '쓰임과 필요한 까닭을 설명해요' }, { id: '질문', text: '친구의 질문에 답해요' }] },
                  target: { order: ['제목', '사례', '까닭', '질문'] }, difficulty: 0.15 },
                { prompt: '친구의 발표를 듣는 차례대로 놓아 보세요.',
                  toolOptions: { axis: ['먼저', '나중'], cards: [{ id: '듣기', text: '끝까지 조용히 들어요' }, { id: '떠올리기', text: '궁금한 점을 생각해요' }, { id: '질문', text: '손을 들고 질문해요' }] },
                  target: { order: ['듣기', '떠올리기', '질문'] }, difficulty: 0.2 },
                { prompt: '의견을 받아 자료를 고치는 차례대로 놓아 보세요.',
                  toolOptions: { axis: ['먼저', '나중'], cards: [{ id: '읽기', text: '받은 의견을 읽어요' }, { id: '고르기', text: '고칠 의견을 골라요' }, { id: '고침', text: '자료를 고쳐 다시 올려요' }] },
                  target: { order: ['읽기', '고르기', '고침'] }, difficulty: 0.2,
                  conclude: '발표하고, 질문을 받고, 의견으로 자료를 고치는 차례로 나누어요.' },
              ]),
            A('a2', '활동 2. 용해와 진하기 다시 해 보기', 10, 'matter',
              '단원에서 배운 것을 용해 교구로 확인해요. 수는 모두 예시 값이에요.',
              '"한 숟가락씩 넣어 남기 시작할 때가 한계, 물과 숟가락의 비율이 같으면 진하기가 같아요." 활동 한 문항마다 단원의 어느 시간에 배웠는지 말하게 한다. 예전에 틀렸던 유형을 다시 풀게 하고 자기 평가에 연결한다.',
              LVD, [
                { prompt: '따뜻한 물 100 mL에 백반을 넣어 처음 녹지 않고 남을 때까지 넣어 보세요. (예시 값)',
                  toolOptions: { mode: 'dissolve', solute: { name: '백반', perSpoon: 5, limit: 20 }, temps: TEMPS },
                  target: { set: { water: 100, temp: 1 }, saturated: true }, difficulty: 0.25 },
                { prompt: '가 그릇과 진하기가 같은 소금물을 만들어 보세요. 물의 양이 달라도 괜찮아요. (예시 값)',
                  toolOptions: { mode: 'dissolve', solute: { name: '소금', perSpoon: 5, limit: 35 }, compare: [{ water: 200, spoons: 6, label: '가' }] },
                  target: { sameAs: 1 }, difficulty: 0.3 },
                { prompt: '물 100 mL당 4숟가락인 진하기로 맞춰 보세요. 물의 양이 달라도 괜찮아요. (예시 값)',
                  toolOptions: { mode: 'dissolve', solute: { name: '설탕', perSpoon: 5, limit: 35 } },
                  target: { conc: 4 }, difficulty: 0.3,
                  conclude: '녹는 양에는 한계가 있고, 진하기는 물과 용질의 양의 비율로 정해져요.' },
              ]),
            A('a3', '활동 3. 단원 정리와 짝 발표', 9, 'mindmap',
              '단원에서 배운 것을 한 판에 정리하고, 만든 소개 자료를 짝에게 발표해요.',
              '준비물(모둠): 11차시에 만든 소개 자료(종이나 화면), 선택으로 설탕물·소금물 컵. 짝에게 2분 안에 제목, 사례, 쓰임, 까닭을 이야기하게 한다. 실험 컵의 용액은 맛보지 않고 끝나면 손을 씻게 한다. 정리 문항에서 헷갈리는 것은 칠판에 적어 두고 다 함께 다시 읽어 본다.',
              LV, [
                { prompt: '이 단원에서 배운 장면을 알맞은 칸에 놓아 보세요.',
                  toolOptions: { mode: 'sort', topic: '용해와 용액', slots: ['용해', '진하기', '쓰임'], cards: ['설탕이 물에 퍼져 보이지 않아요', '같은 물에 설탕을 더 넣으면 더 진해요', '이온 음료가 땀을 보충해요', '따뜻한 물에 백반이 더 많이 녹아요'] },
                  target: { sort: { '용해': ['설탕이 물에 퍼져 보이지 않아요', '따뜻한 물에 백반이 더 많이 녹아요'], '진하기': ['같은 물에 설탕을 더 넣으면 더 진해요'], '쓰임': ['이온 음료가 땀을 보충해요'] } }, difficulty: 0.2 },
                { prompt: '단원에서 배운 것 가운데 옳은 설명만 바구니에 넣어 보세요.',
                  toolOptions: { mode: 'pick', topic: '단원 정리', basket: '옳은 설명', cards: [
                    { id: 'a', text: '녹은 물질은 사라지지 않아요' }, { id: 'b', text: '물이 많으면 더 묽어져요' }, { id: 'c', text: '용액은 골고루 섞여 가라앉지 않아요' }, { id: 'd', text: '뜬 높이가 높을수록 더 진해요' },
                    { id: 'e', text: '설탕이 녹으면 아예 없어져요', why: '녹은 설탕은 물속에 퍼져 있어요.' }, { id: 'f', text: '색이 진하면 언제나 진한 용액이에요', why: '색만으로 진하기를 알 수 없어요.' }] },
                  target: { pick: ['a', 'b', 'c', 'd'] }, difficulty: 0.3 },
                { prompt: '용액인 것과 아닌 것을 나누고 정리해 보세요.',
                  toolOptions: { mode: 'sort', topic: '액체', slots: ['용액이에요', '용액이 아니에요'], cards: ['식초', '흙탕물', '이온 음료', '기름과 물'] },
                  target: { sort: { '용액이에요': ['식초', '이온 음료'], '용액이 아니에요': ['흙탕물', '기름과 물'] } }, difficulty: 0.2 },
                { difficulty: 0, prompt: '만든 용액 소개 자료를 짝에게 2분 안에 발표하고, 짝의 질문에 답한 뒤 "다 했어요"를 누르세요.', free: true, talk: true },
              ], { pair: true }),
          ],
        },
        {
          id: 'wrapup', title: '정리', minutes: 7,
          teacher: '"도입에서 이 단원이 시작했을 때 설탕이 물에 녹으면 사라진다고 생각했던 친구는 지금은 어떻게 말하나요?" 아주 작은 알갱이로 물에 퍼져 무게가 같다고 말하게 한다. 출구 3번에서 색이 진한 쪽을 고른 학생에게는 뜬 높이로 비교하는 방법을 다시 떠올리게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'matter', options: { mode: 'dissolve', solute: { name: '설탕', perSpoon: 5, limit: 35 }, maxSpoons: 20 }, prompt: '물 200 mL에 설탕을 한 숟가락씩 넣어, 처음 녹지 않고 남을 때까지 넣어 보세요. (예시 값)', target: { set: { water: 200 }, saturated: true }, difficulty: 0.25 },
            { type: 'choice', prompt: '설탕을 물에 녹이면 컵 전체의 무게는 어떻게 되나요?', options: ['그대로예요', '줄어들어요', '늘어나요'], answer: 0, difficulty: 0.2, explain: '녹은 설탕은 사라지지 않아서 컵 전체의 무게는 그대로예요.' },
            { type: 'choice', prompt: '용액의 진하기를 비교하는 방법으로 알맞은 것은 무엇인가요?', options: ['색만 본다', '같은 물체가 뜬 높이를 견준다', '맛을 본다'], answer: 1, difficulty: 0.2, explain: '같은 물체가 더 높이 뜰수록 더 진해요. 실험에서는 맛을 보지 않아요.' },
            MOOD,
          ],
        },
      ],
      worksheet: {
        title: '용해와 용액 단원 돌아보기',
        items: [
          { type: 'table', prompt: '이 단원에서 배운 것을 표에 정리하세요.', columns: ['배운 것', '내가 알게 된 점'], cells: [['용해', ''], ['진하기', ''], ['용액의 쓰임', '']], answer: '용해: 알갱이가 작아져 물에 퍼짐, 무게 그대로 / 진하기: 용질과 물의 양의 비율 / 쓰임: 음식·음료·관리' },
          { type: 'figure', wide: true, prompt: '가지마다 이 단원에서 배운 것을 한 가지씩 써 넣으세요.', tool: 'mindmap', figures: [{ options: { topic: '용해와 용액', printCards: false, slots: ['용해', '진하기', '쓰임'], cards: ['보기'] }, caption: '' }], answer: '예: 용해 — 설탕은 사라지지 않고 물에 퍼짐 / 진하기 — 뜬 높이가 높을수록 진함 / 쓰임 — 이온 음료가 땀 보충' },
          { type: 'draw', prompt: '설탕이 물에 녹는 모습과 설탕물이 되는 과정을 세 칸에 그리고, 알갱이가 사라지지 않았음을 화살표로 나타내세요.' },
          { type: 'table', prompt: '나의 단원 점검: 할 수 있으면 ○, 아직이면 △ 하세요.', columns: ['할 수 있는 것', '○ / △'], cells: [['용질·용매·용액을 구분하기', ''], ['온도와 용질에 따라 녹는 양이 다름을 말하기', ''], ['용액의 진하기를 견주기', ''], ['용액의 쓰임과 까닭 말하기', '']] },
          { type: 'short', prompt: '단원 첫 시간의 질문 "설탕을 물에 넣고 저으면 설탕은 어떻게 될까요?"에 지금의 내 말로 답하세요.', answer: '설탕은 아주 작은 알갱이가 되어 물에 골고루 퍼져 보이지 않지만, 사라지지 않고 무게도 그대로이다.' },
        ],
        easy: {
          note: '녹아도 사라지지 않아요. 진하기는 용질과 물의 양으로 알아요. 용액은 골고루 섞여 있어요.',
          items: [
            { type: 'choice', prompt: '설탕이 물에 녹으면 사라지나요? ○ 하세요.', options: ['사라지지 않아요', '사라져요'], answer: '사라지지 않아요' },
            { type: 'choice', prompt: '같은 물에 설탕을 더 많이 넣으면?', options: ['더 진해요', '더 묽어요'], answer: '더 진해요' },
            { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '골고루 섞여 가라앉지 않는 것을 ___이라고 해요.', answer: '용액' },
            { type: 'table', prompt: '나의 단원 점검: 할 수 있으면 ○ 하세요.', columns: ['할 수 있는 것', '○'], cells: [['용질·용매·용액 구분하기', ''], ['진하기 견주기', '']] },
          ],
        },
      },
      differentiation: {
        easy: '맞는 칸에 놓으면 초록 테두리가 생기고, 용해 교구에 진하기 값이 보여요.',
        base: '모두 놓은 뒤 확인을 눌러 스스로 고쳐요. 용해 교구는 직접 맞춰요.',
        challenge: '함정 카드가 섞이고, 단원 전체의 내용을 한 판에서 구분해요.',
      },
      teacherNotes: '이 차시는 6-03-01·02·03을 묶어 정리한다. 수는 모두 예시 값이다. 자주 보이는 어려움: ① 녹은 설탕이 사라진다고 말한다 → 무게가 같다는 근거로 고친다. ② 색이나 투명한 정도로 진하기를 정한다 → 뜬 높이나 양의 비율로 말한다. ③ 용액과 액체를 같게 본다 → 가라앉는지로 가른다. 자기 점검에서 △가 많은 항목은 다음 단원 시작 전에 짧게 복습한다. 소개 자료에는 학생 개인 정보를 넣지 않는다.',
    }),
  ];

  PaperLessons.registerUnit({
    id: 'g5-sci-1-03', schema: 'edu-unit.v1', catalogUnit: CU,
    grade: 5, subject: '과학', unitTitle: '3. 용해와 용액',
    flow: '1~4차시는 용해이다. 설탕과 모래를 물에 넣어 녹는 것과 녹지 않는 것을 가르고 용질·용매·용액을 말하며(1), 녹이기 전후의 무게를 견주어 녹은 물질이 사라지지 않았음을 확인하고(2), 물의 온도와 용질의 종류에 따른 녹은 양을 표·그래프로 나타내며(3), 온도 이외의 조건을 같게 하여 공정하게 비교한다(4). 5~8차시는 용액의 진하기이다. 용질과 물의 양으로 진하기를 견주고(5), 물 100 mL당 숟가락 수로 진하기를 맞추며(6), 뜬 높이를 표·그래프로 나타내 진한 차례로 늘어놓고(7), 방울토마토를 띄워 뜬 높이를 재어 비교한다(8). 9~12차시는 생활 속 용액이다. 용액인 것과 아닌 것을 가르고(9), 쓰임과 필요한 까닭을 짝지으며(10), 조사한 사례를 그림그래프와 소개 자료로 정리한 뒤(11), 자료를 공유하며 단원을 정리한다(12).',
    refs: {},
    lessons,
  });
})();
