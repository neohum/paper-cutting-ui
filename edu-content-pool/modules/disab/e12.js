/* 창체 법정교육 장애인식개선 — 초1-2 모듈 내용(edu-module.v1). 형식·작성 규칙: MODULES_BUILD.md, 계획: framework/mandatory.json 의 disab 초1-2.
 * 근거: research-mandatory §1 장애인식개선교육(장애인복지법 제25조·시행령 제16조 — 법정 매년 1회 1시간 이상, 범교과 기준 연 2시간),
 *   §2 장애인식개선 초: 장애 이해와 배려, 차별 말·행동 점검.
 * 초1-2 기준: 소리로 읽어 주는 짧은 문항, 카드 6자 안팎, 좋아요/안돼요 고르기·따라 하기·역할놀이·노래·구호. 장면·인물은 직접 지은 가상 인물이다(가명 '솔'·'윤').
 * 주제 3개(1학년 same-friend · 2학년 hand-words·kind-words) × 계획 모듈 전부 = 24모듈.
 *
 * 이 영역에서 늘 지키는 틀(모든 모듈):
 *   - 장애가 있는 친구를 불쌍한 사람·특별한 사람·구경거리로 그리지 않는다. '같이 노는 같은 친구'로, 도구(휠체어·흰지팡이·보청기)는 '생활을 돕는 도구'로 말한다.
 *   - 사람을 먼저 쓴다: '장애가 있는 친구', '휠체어를 탄 친구', '보청기를 낀 친구'. 도구 이름으로 사람을 부르지 않는다('휠체어야' 같은 말은 바로잡는 카드로만).
 *   - 비하하거나 흉내 내는 말은 학생이 소리 내어 하지 않는다. '"이상해"'·'걸음 흉내' 같은 카드는 바꾸거나 '안돼요'로 가려 내는 카드로만 나온다.
 *   - 학생 자신이나 가족의 장애 여부를 묻지 않는다. 모든 장면은 그림 속 가상 친구의 일로만 이야기한다.
 *   - 돕기는 '먼저 묻고, 친구가 답한 대로' 한다. "괜찮아, 내가 할게"도 존중할 답이다.
 *
 * 수치·법 조항은 학생 화면에 쓰지 않는다(근거 파일에 초1-2 수치가 없다). 타이머 초는 '우리 반 약속' 값이다.
 * 교구 한계로 바꾼 것: wordcards 는 영어 발음 교구라 소리를 내지 않고(카드 판 모드만), '소리로 읽어 줌'은 교사가 읽어 준다.
 *   map 은 물건을 끌어 옮기지 못해 '점자 블록 위 물건 자리에 핀 꽂기'로 바꿨다. 수어 동작·점자 촉감은 교구가 보여 주지 못해 교사가 영상·실물로 보인다.
 *
 * 사람 확인: (근거 파일에는 고시·지침 항목 제목만 있어 일반 장애이해교육 내용으로 쓴 문장 — 확인할 곳을 함께 적는다)
 *   - same-friend 전체: 휠체어·흰지팡이·보청기·안경을 '생활을 돕는 도구'로 소개, '도와줄까?' 먼저 묻고 친구가 답한 대로 하기, 휠체어는 묻지 않고 밀지 않기 —
 *     교육부·국립특수교육원 장애이해교육 자료(초등 저학년), 한국장애인개발원 장애인식개선교육 자료.
 *   - same-friend.activity.ask-play: 흰지팡이를 쓰는 친구와 함께 걸을 때 친구가 내 팔(팔꿈치 위)을 잡게 하는 안내 방법('팔 잡을게') — 국립특수교육원·한국시각장애인연합회 안내 보행 자료.
 *   - same-friend.activity.can-do: 낮은 골대 농구·공 굴리기처럼 '방법을 바꾸면 함께 할 수 있는 놀이' 예시 — 국립특수교육원 통합체육·장애이해교육 자료.
 *   - hand-words 전체: 점자는 볼록 점 여섯 칸으로 손끝으로 읽는 글자, 수어는 손 모양·움직임·얼굴 표정으로 하는 말 —
 *     국립국어원(한국수어사전·점자 안내), 국립특수교육원 자료. 도입 dot-feel 의 무늬는 '점자처럼 생긴 무늬'이고 실제 글자를 뜻하지 않는다.
 *   - hand-words.intro.sign-hello · activity.sign-song: '안녕하세요'·'고마워요'·'사랑해요' 수어 동작은 이 파일에 손 모양을 적지 않았다 —
 *     교사가 국립국어원 한국수어사전 영상을 보고 보인다.
 *   - hand-words.activity.block-path · ok-no-block · wrap.promise-chant: 점자 블록에는 길을 알려 주는 줄 모양과 멈춤·주의를 알려 주는 점 모양이 있고
 *     계단 앞·횡단보도 앞 등에 점 모양 블록이 놓인다, 블록 위에 물건(킥보드·자전거·가방·화분)을 두지 않는다 — 국토교통부·한국장애인개발원 편의시설(점자블록) 안내.
 *   - kind-words 전체: 걸음·말소리 흉내 내기와 놀리는 말이 장애가 있는 친구에게 상처를 주는 차별 행동이라는 것, '그만해' 말하기·선생님께 알리기·이름 불러 주기 —
 *     교육부·국립특수교육원 장애이해교육 자료(차별 말·행동 점검).
 */
(function () {
  const MOD = (topic, grades) => (o) => Object.assign({ schema: 'edu-module.v1', domain: 'disab', band: '초1-2', topic, grades }, o);
  const MOOD = { type: 'mood', prompt: '오늘 공부를 마친 내 마음은 어떤가요?' };
  const cut = (p) => p.replace(/\.$/, '');
  const C = (id, text, more) => Object.assign({ id, text }, more);
  const idOf = (c) => (typeof c === 'string' ? c : c.id);
  const ids = (a) => a.map(idOf);

  // 두 바구니 나누기(sortboard 글 카드): 기본 6장, 쉬움 4장, 도전 헷갈리는 카드 2장을 more 로 더함(hardTo 1 = 둘째 바구니)
  const SB2 = (slots, prompt, ok, no, hard, hardTo, d, more) => {
    const S = (a, b) => ({ [slots[0]]: ids(a), [slots[1]]: ids(b) });
    return {
      prompt, toolOptions: { slots, cards: [ok[0], no[0], ok[1], no[1], ok[2], no[2]] }, target: { sort: S(ok, no) }, difficulty: d,
      levels: {
        easy: { prompt: `${cut(prompt)}(4장).`, toolOptions: { cards: [ok[0], no[0], ok[1], no[1]] }, target: { sort: S(ok.slice(0, 2), no.slice(0, 2)) } },
        challenge: { prompt: `${cut(prompt)}(8장).`, toolOptions: { more: hard }, target: { sort: hardTo ? S(ok, [...no, ...hard]) : S([...ok, ...hard], no) } },
      },
      ...more,
    };
  };
  // 가락 따라 치기(keyboard melody): 기본 한 줄, 쉬움 끝 세 음
  const MEL = (prompt, notes, d, more) => ({
    prompt, toolOptions: { melody: notes }, target: { notes }, difficulty: d,
    levels: { easy: { prompt: `${cut(prompt)}(세 음).`, toolOptions: { melody: notes.slice(-3) }, target: { notes: notes.slice(-3) } } },
    ...more,
  });
  // 장면 차례 놓기(story): 기본 3장, 쉬움 첫 장면이 놓여 있음, 도전 틀린 장면 1장이 섞여 빼고 놓음
  const ORDER3 = (prompt, cards, wrong, d, more) => {
    const i = ids(cards);
    return {
      prompt, toolOptions: { slots: ['먼저', '다음', '끝'], cards: [cards[2], cards[0], cards[1]] }, target: { order: i }, difficulty: d,
      levels: { easy: { state: { at: { [i[0]]: 0, [i[1]]: null, [i[2]]: null } } }, challenge: { toolOptions: { cards: [cards[2], wrong, cards[0], cards[1]] } } },
      ...more,
    };
  };
  // 순서 카드(timer order): 기본 3장, 쉬움 앞 2장
  const STEPS = (prompt, title, cards, d, more) => ({
    prompt, toolOptions: { title, cards: [cards[2], cards[0], cards[1]] }, target: { order: cards }, difficulty: d,
    levels: { easy: { prompt: `${cut(prompt)}(2장).`, toolOptions: { cards: [cards[1], cards[0]] }, target: { order: cards.slice(0, 2) } } },
    ...more,
  });
  // 정리 출구: 순서 카드(timer), 스스로 점검(timer), 말 카드 담기(wordcards), 마음 눈금(emotion)
  const ORDER = (title, cards, prompt) => ({ type: 'tool', tool: 'timer', options: { title, cards: [cards[cards.length - 1], ...cards.slice(0, -1)] }, prompt: prompt || '차례대로 놓아요.', target: { order: cards }, difficulty: 0.1 });
  const SELF = (title, list, prompt) => ({ type: 'tool', tool: 'timer', options: { title }, prompt: prompt || '해 본 것에 표시해요.', target: { selfCheck: list }, difficulty: 0.1 });
  const PICKW = (basket, cards, good, prompt) => ({ type: 'tool', tool: 'wordcards', options: { mode: 'pick', basket, cards }, prompt, target: { pick: ids(good) }, difficulty: 0.1 });
  const SCALE = (situation, feeling, prompt) => ({ type: 'tool', tool: 'emotion', options: { mode: 'scale', situation, feeling, steps: 5, scaleLabels: { 1: '조금', 5: '아주 잘' } }, prompt, target: { level: 'any' }, difficulty: 0.1 });
  // 리듬 블록 따라 놓기(keyboard rhythm, 4박 2마디)
  const RHY = (rhythm, prompt) => ({ type: 'tool', tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 2, blocks: ['q', 'e', 'h', 'qr'] }, prompt, target: { rhythm }, difficulty: 0.1 });

  // =====================================================================================================
  // 1학년 · 모습은 달라도 같은 친구
  const SAME = MOD('disab.e12.same-friend', [1]);
  const T_SAME = [
    SAME({
      id: 'disab.e12.same-friend.intro.tool-pick', type: 'intro', title: '생활을 돕는 도구 이름 짝 짓기',
      method: '그림 속 도구 이름 듣고 고르기', tool: 'wordcards', minutes: 6,
      levels: { easy: '교사가 휠체어·보청기 두 가지만 그림과 함께 읽어 주고 이름 카드를 함께 잇는다.', base: '휠체어·흰지팡이·보청기 세 가지가 하는 일을 듣고 이름 카드를 잇는 시연을 따라 말한다.', challenge: '세 가지를 이은 뒤 시연 둘째 장면에서 안경도 "잘 보게 돕는 도구"로 이어지는 것을 보고, 우리 반에도 있는 돕는 도구를 말한다.' },
      intro: {
        teacher: '"바퀴로 다니게 도와주는 도구, 길을 알려 주는 하얀 막대, 소리를 잘 듣게 도와주는 도구 — 이름이 무엇일까요?" 그림을 하나씩 가리키며 하는 일을 소리 내어 읽어 주고, 시연 단추로 이름 카드가 이어지는 모습을 보인다(카드는 소리를 내지 않으니 교사가 읽는다). "휠체어 타면 아무것도 못 해요"라는 말이 나오면 "안경을 쓴 친구는 아무것도 못 하나요? 도구는 하고 싶은 일을 할 수 있게 도와줘요"라고 되묻는다. 오늘은 이런 도구를 쓰는 친구도 우리와 함께 노는 같은 친구라는 것을 알아본다고 밝힌다.',
        student: '그림 속 도구가 하는 일을 듣고, 이름을 선생님과 함께 소리 내어 말해요.',
        demo: { tool: 'wordcards', options: { mode: 'match', slots: [{ id: 'move', label: '바퀴로 다녀요' }, { id: 'way', label: '길을 알려 줘요' }, { id: 'hear', label: '잘 듣게 도와요' }, { id: 'see', label: '잘 보게 도와요' }], cards: [C('chair', '휠체어'), C('cane', '흰지팡이'), C('aid', '보청기'), C('glass', '안경')], shuffle: false },
          sequence: [{ match: { move: 'chair', way: 'cane', hear: 'aid' } }, { match: { move: 'chair', way: 'cane', hear: 'aid', see: 'glass' } }] },
        art: { draw: 'a paper classroom shelf showing a paper wheelchair, a white cane, a small hearing aid and a pair of glasses, each with a friendly paper tag, children smiling around it', banner: '생활을 돕는 도구' },
      },
      notes: '학생이나 가족 가운데 이런 도구를 쓰는 사람이 있는지 묻지 않는다. 교구 카드는 소리를 내지 않으니 이름은 교사가 읽어 준다.',
    }),
    SAME({
      id: 'disab.e12.same-friend.intro.hello-song', type: 'intro', title: '"안녕 친구, 같이 놀자" 노래',
      method: '"같이 놀자" 인사 노래', tool: 'keyboard', minutes: 6,
      levels: { easy: '"안녕 친구" 한 마디(네 음)만 교사와 함께 부르고 손으로 높낮이를 그린다.', base: '"안녕 친구, 같이 놀자" 두 마디 가락을 시연으로 듣고 따라 부른다.', challenge: '두 마디를 부르며 마디 끝마다 손뼉 한 번을 붙인다.' },
      intro: {
        teacher: '"안녕 친구, 같이 놀자!" 노래를 두 번 불러 준 뒤 시연 단추로 건반이 차례대로 눌리는 모습을 보이고 반 전체가 따라 부른다. 높은 음에서는 손을 위로, 낮은 음에서는 아래로 그린다. "휠체어 탄 친구는 같이 못 놀아요"라는 말이 나오면 "노래 부르기, 그림 그리기, 공 굴리기 — 함께 할 수 있는 놀이를 찾아볼까요?"라고 되묻는다. 오늘 노래처럼 누구에게나 먼저 "같이 놀자"라고 말할 수 있다고 밝힌다.',
        student: '"안녕 친구, 같이 놀자" 노래를 손으로 높낮이를 그리며 따라 불러요.',
        demo: { tool: 'keyboard', options: { from: '도', to: '높은도', melody: ['솔', '솔', '미', '미', '레', '레', '미', '도'] }, sequence: [{ notes: ['솔', '솔', '미', '미', '레', '레', '미', '도'] }] },
        art: { draw: 'paper children of different looks waving hello in a circle, one child in a paper wheelchair and one child with a small hearing aid, musical notes cut from colored paper above', banner: '안녕 친구, 같이 놀자' },
      },
      notes: '가락은 수업용으로 지은 짧은 노래다. 소리는 시연·건반을 누를 때만 난다.',
    }),
    SAME({
      id: 'disab.e12.same-friend.activity.park-scene', type: 'activity', title: '함께 노는 놀이터 꾸미기',
      method: '놀이터 그림에서 함께 노는 모습 찾기', tool: 'collage', minutes: 13,
      levels: { easy: '조각 2개(파랑 동그라미 = 휠체어 탄 친구, 노랑 동그라미 = 나) 이상을 붙인다.', base: '조각 4개 이상(휠체어 탄 친구·보청기 낀 친구·나·놀이기구)을 붙여 함께 노는 장면을 만든다.', challenge: '4개에 더해 모두 탈 수 있는 넓은 그네(주황 긴 네모, 크게) 조각을 하나 더 붙인다.' },
      activity: {
        title: '함께 노는 놀이터', tool: 'collage',
        teacher: '"파랑 동그라미는 휠체어를 탄 친구, 초록 동그라미는 보청기를 낀 친구, 노랑 동그라미는 나예요. 놀이터에서 셋이 함께 놀게 붙여 볼까요?" 조각을 붙일 때마다 "이 친구는 지금 무엇을 하고 놀아요?"라고 묻고 기다릴 반응("모래 놀이요", "그네요")을 듣는다. 휠체어 탄 친구를 놀이터 밖 구석에 붙인 학생에게 "이 친구도 놀고 싶을까요? 어디에 있으면 같이 놀 수 있을까요?"라고 묻는다. 모두가 탈 수 있는 놀이기구가 있으면 누구나 함께 놀 수 있다는 점을 짚는다.',
        task: '친구들과 나 조각을 붙여 함께 노는 놀이터를 꾸며요.', levels: { easy: { shapes: ['circle', 'square'] }, base: { shapes: ['circle', 'square', 'rect', 'triangle'] }, challenge: {} },
        items: [
          { prompt: '함께 놀 친구들을 붙여요.', toolOptions: {}, target: { has: [{ shape: 'circle', color: '파랑', min: 1 }, { shape: 'circle', color: '초록', min: 1 }, { shape: 'circle', color: '노랑', min: 1 }], pieces: { min: 4 } }, difficulty: 0.1,
            levels: { easy: { prompt: '휠체어 친구와 나를 붙여요.', target: { has: [{ shape: 'circle', color: '파랑', min: 1 }, { shape: 'circle', color: '노랑', min: 1 }], pieces: { min: 2 } } },
              challenge: { prompt: '친구들과 넓은 그네를 붙여요.', target: { has: [{ shape: 'circle', color: '파랑', min: 1 }, { shape: 'circle', color: '초록', min: 1 }, { shape: 'circle', color: '노랑', min: 1 }, { shape: 'rect', color: '주황', size: 'l', min: 1 }], pieces: { min: 5 } } } } },
          { prompt: '모래 놀이터를 붙여요.', toolOptions: {}, target: { has: [{ shape: 'square', color: '갈색', min: 1 }], pieces: { min: 4 } }, difficulty: 0.15,
            levels: { easy: { prompt: '모래 놀이터 하나를 붙여요.', target: { has: [{ shape: 'square', color: '갈색', min: 1 }], pieces: { min: 2 } } },
              challenge: { prompt: '모래 놀이터와 넓은 그네를요.', target: { has: [{ shape: 'square', color: '갈색', min: 1 }, { shape: 'rect', color: '주황', size: 'l', min: 1 }], pieces: { min: 5 } } } } },
          { prompt: '놀이터를 꾸미고 표시해요.', toolOptions: {}, target: { selfCheck: ['함께 놀아요', '놀이를 말했어요'], minPieces: 4 }, difficulty: 0.2,
            levels: { easy: { prompt: '조각 2개로 꾸미고 표시해요.', target: { selfCheck: ['함께 놀아요', '놀이를 말했어요'], minPieces: 2 } },
              challenge: { prompt: '그네까지 꾸미고 표시해요.', target: { selfCheck: ['함께 놀아요', '놀이를 말했어요', '그네 붙였어요'], minPieces: 5 } } },
            conclude: '휠체어를 탄 친구도, 보청기를 낀 친구도 함께 노는 같은 친구예요.' },
        ],
      },
      worksheet: { items: [{ type: 'draw', prompt: '친구와 함께 노는 놀이터를 그려요.' }] },
      notes: '조각의 뜻(파랑 동그라미 = 휠체어 탄 친구, 초록 동그라미 = 보청기 낀 친구, 노랑 동그라미 = 나, 갈색 네모 = 모래 놀이터, 주황 긴 네모 = 넓은 그네)은 칠판에 그려 두고 시작한다. 실제 친구 얼굴이나 이름은 쓰지 않는다.',
    }),
    SAME({
      id: 'disab.e12.same-friend.activity.can-do', type: 'activity', title: '함께 할 수 있는 일에 좋아요',
      method: '좋아요: 친구가 할 수 있는 일', tool: 'emotion', minutes: 14,
      levels: { easy: '장면 3장과 묻지 않고 해 버리는 함정 장면 1장 가운데 고르고, 담으면 바로 맞는지 보인다.', base: '장면 5장과 함정 장면 2장 가운데 함께 할 수 있는 일을 모두 담는다.', challenge: '방법을 조금 바꾸면 함께 할 수 있는 놀이(낮은 골대 농구 등) 장면 2장이 더 들어와 그것도 함께 담는다.' },
      activity: {
        title: '함께 해요 바구니', tool: 'emotion',
        teacher: '"휠체어를 탄 솔이와 함께 할 수 있는 일을 \'함께 해요\' 바구니에 담아요." 장면 카드를 하나씩 읽어 주고 담기 전에 반 전체가 엄지를 들어 "좋아요!"를 외친다. "공 던지기는 못 해요"라는 학생에게 "솔이 팔과 손은 어때요? 앉아서도 던질 수 있을까요?"라고 묻는다. "묻지 않고 밀어 주기"를 담은 학생에게 "솔이가 가고 싶은 곳을 우리가 알까요? 먼저 물어봐요"라고 묻는다. 장애가 있는 친구도 하고 싶은 일이 있고, 방법을 조금 바꾸면 함께 할 수 있는 일이 많다는 점을 짚는다.',
        task: '친구와 함께 할 수 있는 일을 바구니에 담아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
        items: [
          { prompt: '휠체어 탄 솔이와 함께 해요.', toolOptions: { mode: 'pick', basket: '함께 해요', cards: [C('draw', '그림 그리기'), C('push', '묻지 않고 밀기'), C('sing', '노래하기'), C('throw', '공 던지기'), C('alone', '혼자 두기'), C('read', '책 읽기'), C('block', '블록 쌓기')] }, target: { pick: ['draw', 'sing', 'throw', 'read', 'block'] }, difficulty: 0.1,
            levels: { easy: { prompt: '솔이와 함께 해요(4장).', toolOptions: { cards: [C('draw', '그림 그리기'), C('push', '묻지 않고 밀기'), C('sing', '노래하기'), C('throw', '공 던지기')] }, target: { pick: ['draw', 'sing', 'throw'] } },
              challenge: { prompt: '바꿔서 하는 놀이도 담아요.', toolOptions: { cards: [C('draw', '그림 그리기'), C('push', '묻지 않고 밀기'), C('sing', '노래하기'), C('hoop', '낮은 골대 농구'), C('throw', '공 던지기'), C('alone', '혼자 두기'), C('read', '책 읽기'), C('roll', '공 굴리기 놀이'), C('block', '블록 쌓기')] }, target: { pick: ['draw', 'sing', 'throw', 'read', 'block', 'hoop', 'roll'] } } } },
          { prompt: '보청기 낀 윤이와 함께 해요.', toolOptions: { mode: 'pick', basket: '함께 해요', cards: [C('sing', '노래하기'), C('back', '뒤에서 툭 치기'), C('jump', '줄넘기'), C('draw', '그림 그리기'), C('alone', '혼자 두기'), C('tag', '술래잡기'), C('talk', '마주 보고 말하기')] }, target: { pick: ['sing', 'jump', 'draw', 'tag', 'talk'] }, difficulty: 0.15,
            levels: { easy: { prompt: '윤이와 함께 해요(4장).', toolOptions: { cards: [C('sing', '노래하기'), C('back', '뒤에서 툭 치기'), C('jump', '줄넘기'), C('draw', '그림 그리기')] }, target: { pick: ['sing', 'jump', 'draw'] } },
              challenge: { prompt: '바꿔서 하는 놀이도 담아요.', toolOptions: { cards: [C('sing', '노래하기'), C('back', '뒤에서 툭 치기'), C('jump', '줄넘기'), C('flag', '깃발 신호 놀이'), C('draw', '그림 그리기'), C('alone', '혼자 두기'), C('tag', '술래잡기'), C('clap', '손뼉 박자 놀이'), C('talk', '마주 보고 말하기')] }, target: { pick: ['sing', 'jump', 'draw', 'tag', 'talk', 'flag', 'clap'] } } } },
          { prompt: '흰지팡이 쓰는 친구와 해요.', toolOptions: { mode: 'pick', basket: '함께 해요', cards: [C('sing', '노래하기'), C('drag', '말없이 끌기'), C('story', '이야기하기'), C('clay', '찰흙 놀이'), C('alone', '혼자 두기'), C('walk', '같이 걷기'), C('drum', '북 치기')] }, target: { pick: ['sing', 'story', 'clay', 'walk', 'drum'] }, difficulty: 0.2,
            levels: { easy: { prompt: '함께 할 일을 담아요(4장).', toolOptions: { cards: [C('sing', '노래하기'), C('drag', '말없이 끌기'), C('story', '이야기하기'), C('clay', '찰흙 놀이')] }, target: { pick: ['sing', 'story', 'clay'] } },
              challenge: { prompt: '바꿔서 하는 놀이도 담아요.', toolOptions: { cards: [C('sing', '노래하기'), C('drag', '말없이 끌기'), C('story', '이야기하기'), C('bell', '방울 공 놀이'), C('clay', '찰흙 놀이'), C('alone', '혼자 두기'), C('walk', '같이 걷기'), C('touch', '만져서 맞히기'), C('drum', '북 치기')] }, target: { pick: ['sing', 'story', 'clay', 'walk', 'drum', 'bell', 'touch'] } } },
            conclude: '장애가 있는 친구도 할 수 있는 일이 많아요. 방법을 바꾸면 함께 할 수 있어요.' },
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '휠체어 탄 친구와 함께 할 수 있는 일에 ○ 해요.', options: ['그림 그리기', '혼자 두기'], answer: '그림 그리기' }] },
      notes: '솔이·윤이는 가상 인물이다. 함정 카드(묻지 않고 밀기·뒤에서 툭 치기·말없이 끌기)는 "돕고 싶어도 먼저 물어요"를 짚는 카드다. 보청기 낀 친구에게는 마주 보고 말하면 더 잘 알아들을 수 있다고 덧붙인다.',
    }),
    SAME({
      id: 'disab.e12.same-friend.activity.ask-play', type: 'activity', title: '"도와줄까?" 먼저 묻기 역할놀이',
      method: '"도와줄까?" 먼저 묻기 역할놀이', tool: 'story', minutes: 13,
      levels: { easy: '첫 장면이 놓여 있어 남은 장면 2장만 놓고, 놓으면 바로 맞는지 보인다.', base: '장면 3장(일이 생겨요 → "도와줄까?" → 친구의 답)을 차례대로 놓고 짝과 말해 본다.', challenge: '"말없이 주워요" 같은 틀린 장면이 섞여 빼고 놓고, 셋째 문항에서 친구가 "괜찮아, 내가 할게"라고 할 때 할 행동까지 차례로 놓는다.' },
      activity: {
        title: '먼저 묻고 답 듣기', tool: 'story',
        teacher: '"솔이 필통이 바닥에 떨어졌어요. 바로 주워 줄까요, 먼저 물어볼까요?" 장면을 읽어 주고 카드를 놓은 뒤 짝과 한 명은 솔이, 한 명은 친구가 되어 "도와줄까?" — "응, 주워 줘"를 주고받는다. "착한 일이니까 그냥 해 주면 돼요"라는 학생에게 "솔이가 스스로 줍고 싶었다면 어떨까요? 물어보면 솔이 마음을 알 수 있어요"라고 묻는다. 셋째 장면에서는 "괜찮아, 내가 할게"라는 답도 고마운 답이고, 그때는 기다려 주는 것이 돕기라는 점을 짚는다.',
        task: '"도와줄까?" 묻는 장면을 차례대로 놓고 짝과 말해 보아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          ORDER3('필통이 떨어졌어요. 차례로 놓아요.', [C('drop', '필통이 떨어져요', { motif: 'house' }), C('ask', '"도와줄까?"', { motif: 'house' }), C('yes', '"응, 주워 줘"', { motif: 'house' })], C('grab', '말없이 주워요', { motif: 'house' }), 0.1),
          ORDER3('문이 무거워요. 차례로 놓아요.', [C('door', '문이 무거워요', { motif: 'house' }), C('ask2', '"잡아 줄까?"', { motif: 'house' }), C('thanks', '"응, 고마워"', { motif: 'house' })], C('shove', '휠체어 확 밀기', { motif: 'house' }), 0.15),
          ORDER3('"괜찮아" 해요. 차례로 놓아요.', [C('ask3', '"같이 갈까?"', { motif: 'tree' }), C('self', '"내가 할게"', { motif: 'tree' }), C('wait', '"알았어" 기다려', { motif: 'tree' })], C('force', '억지로 해 줘요', { motif: 'tree' }), 0.2),
          { prompt: '짝과 묻고 답해 봐요.', free: true, talk: true, difficulty: 0.2, conclude: '돕기 전에 "도와줄까?" 먼저 묻고, 친구 답을 들어요.' },
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '돕기 전에 "___?" 하고 먼저 물어요.', answer: '도와줄까' }] },
      notes: '역할놀이는 고른 바른 장면의 말("도와줄까?", "응, 고마워", "알았어")만 따라 한다. 흰지팡이를 쓰는 친구와 걸을 때는 내가 끌지 않고 친구가 내 팔을 잡게 한다는 것을 셋째 장면에서 덧붙일 수 있다.',
    }),
    SAME({
      id: 'disab.e12.same-friend.activity.move-follow', type: 'activity', title: '친구 빠르기에 맞춰 나란히 걷기',
      method: '천천히 같이 걷기 동작', tool: 'timer', minutes: 14,
      levels: { easy: '나란히 걷기를 10초로 맞추고, 순서 카드 2장의 차례를 놓는다.', base: '나란히 걷기를 20초로 맞추고 순서 카드 3장을 놓은 뒤 해 본 것을 표시한다.', challenge: '20초 걷기를 두 번(짝이 정한 빠르기, 내가 정한 빠르기)으로 맞추고, 짝이 앞장선 것까지 표시한다.' },
      activity: {
        title: '친구와 나란히 걷기', tool: 'timer',
        teacher: '"짝과 나란히 서요. 손은 잡지 않고, 친구 빠르기에 맞춰 옆에서 걸어 볼까요?" 타이머를 맞춘 뒤 교실 뒤 빈 곳에서 짝과 나란히 걷는다. 앞서 나가는 학생에게 "친구가 옆에 있나요? 친구 걸음을 보고 내 걸음을 맞춰 봐요"라고 말해 준다. "느리게 걸으면 재미없어요"라는 말에는 "함께 가면 이야기도 하고 같이 도착해요. 빠르기는 둘이 정해요"라고 짚는다. 걷는 시간은 우리 반 약속 값이다.',
        task: '타이머를 맞추고 짝과 나란히 걸어요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          { prompt: '나란히 걷기를 20초로 맞춰요.', toolOptions: { title: '나란히 걷기(우리 반 약속)', labels: ['걷기', '쉬기'], plan: { work: 30, rest: 10, rounds: 1 } }, target: { plan: { work: 20 } }, difficulty: 0.1,
            hints: ['걷는 시간을 몇 초로 할지 떠올려요.', '걷기 칸이 걷는 시간이에요.', '걷기 칸을 20초에 맞춰요.'],
            levels: { easy: { prompt: '나란히 걷기를 10초로 맞춰요.', target: { plan: { work: 10 } } }, challenge: { prompt: '20초씩 두 번 걷게 맞춰요.', target: { plan: { work: 20, rounds: 2 } } } } },
          STEPS('같이 걷는 차례를 놓아요.', '나란히 걷기 차례', ['"같이 갈까?"', '빠르기 맞춰요', '나란히 걸어요'], 0.15),
          { prompt: '해 본 것에 표시해요.', toolOptions: { title: '나란히 걷기 점검' }, target: { selfCheck: ['먼저 물었어요', '빠르기 맞췄어요', '나란히 걸었어요'] }, difficulty: 0.15,
            levels: { easy: { prompt: '해 본 것 둘에 표시해요.', target: { selfCheck: ['먼저 물었어요', '나란히 걸었어요'] } }, challenge: { prompt: '짝이 앞장선 것도 표시해요.', target: { selfCheck: ['먼저 물었어요', '빠르기 맞췄어요', '나란히 걸었어요', '짝이 앞장섰어요'] } } },
            conclude: '친구 빠르기에 맞춰 옆에서 함께 걸어요.' },
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '친구와 함께 걸을 때는?', options: ['혼자 앞서 뛰어요', '친구 빠르기에 맞춰요'], answer: '친구 빠르기에 맞춰요' }] },
      notes: '타이머 초는 활동 진행용 우리 반 약속이다. 뛰지 않고 교실 안 빈 곳에서만 걷는다. 장애를 흉내 내는 체험(눈 가리기·한 발로 걷기)은 하지 않는다 — 빠르기 맞추기만 연습한다.',
    }),
    SAME({
      id: 'disab.e12.same-friend.wrap.ask-chant', type: 'wrap', title: '"먼저 물어요" 구호 리듬',
      method: '"먼저 물어요" 구호', tool: 'keyboard', minutes: 6,
      levels: { easy: '교사가 앞 구절("돕기 전에 먼저 물어요")만 손뼉과 함께 들려주고 함께 블록을 놓는다.', base: '구호 전체 리듬을 블록으로 따라 놓고 외친 뒤 남은 출구에 답한다.', challenge: '리듬을 놓은 뒤 구호 끝("들어요")에 귀에 손 대는 동작을 붙여 짝과 외친다.' },
      wrap: {
        teacher: '"돕기 전에(짝짝짝짝) 먼저 물어요(짝 짝), 친구 말을(짝짝짝짝) 들어요(짜-안)!" 손뼉으로 리듬을 두 번 들려준 뒤 블록을 놓게 한다. 출구 2번에서 "그냥 해 줘요"를 고른 학생에게 "솔이가 혼자 하고 싶었다면요? 물어보면 알 수 있어요"라고 말해 준다. 마지막에 반 전체가 귀에 손을 대며 구호를 외친다.',
        exitTicket: [
          RHY(['e', 'e', 'e', 'e', 'q', 'q', 'e', 'e', 'e', 'e', 'h'], '구호 리듬을 따라 놓아요.'),
          { type: 'choice', prompt: '도와주기 전에 먼저?', options: ['그냥 해 줘요', '"도와줄까?" 물어요'], answer: 1, difficulty: 0.1, explain: '돕기 전에 먼저 묻고, 친구 답을 들어요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '먼저 물어요',
        items: [
          { type: 'blank', prompt: '구호를 따라 써요.', text: '돕기 전에 먼저 ___', answer: '물어요' },
          { type: 'draw', prompt: '"도와줄까?" 묻는 내 모습을 그려요.' },
        ],
        easy: { note: '"돕기 전에 먼저 물어요"를 떠올려요.', items: [{ type: 'draw', prompt: '친구와 웃으며 이야기하는 모습을 그려요.' }] },
      },
    }),
    SAME({
      id: 'disab.e12.same-friend.wrap.friend-face', type: 'wrap', title: '함께 논 친구 웃는 얼굴',
      method: '함께 논 친구 얼굴 꾸미기', tool: 'collage', minutes: 6,
      levels: { easy: '교사가 얼굴 판에 눈을 먼저 붙여 보이고, 학생은 웃는 입(반원)만 골라 붙인다.', base: '눈 두 개와 웃는 입을 골라 붙여 함께 논 친구 얼굴을 꾸민다.', challenge: '얼굴에 더해 친구에게 할 말 말풍선(하양 동그라미)을 붙이고 그 말을 짝에게 들려준다.' },
      wrap: {
        teacher: '"오늘 놀이터에서 함께 논 친구 얼굴을 꾸며요. 함께 놀아서 친구 얼굴은 어땠을까요?" 눈과 웃는 입을 붙이게 하고, 말풍선을 붙인 학생에게 "친구에게 무슨 말을 해 주고 싶어요?"라고 묻는다(기다릴 반응: "또 놀자", "고마워"). 출구 2번에서 "못 노는 친구"를 고른 학생에게 "오늘 우리 놀이터에서 휠체어 탄 친구는 무엇을 했지요?"라고 다시 떠올려 준다.',
        exitTicket: [
          { type: 'tool', tool: 'collage', options: { shapes: ['circle', 'semi', 'heart'], colors: ['검정', '빨강', '분홍', '하양'], sizes: ['s', 'm', 'l'] }, prompt: '눈 둘과 웃는 입을 붙여요.', target: { has: [{ shape: 'circle', color: '검정', min: 2 }, { shape: 'semi', min: 1 }] }, difficulty: 0.1 },
          { type: 'choice', prompt: '휠체어 탄 친구는?', options: ['함께 노는 친구', '못 노는 친구'], answer: 0, difficulty: 0.1, explain: '휠체어를 탄 친구도 함께 노는 같은 친구예요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '함께 논 친구',
        items: [
          { type: 'draw', prompt: '함께 논 친구의 웃는 얼굴을 그려요.' },
          { type: 'check', prompt: '친구에게 할 말에 ✓ 해요.', options: ['또 놀자', '고마워', '같이 하자'] },
        ],
      },
      notes: '그림 속 가상 친구의 얼굴을 꾸민다. 반 친구의 실제 얼굴·이름을 쓰지 않는다.',
    }),
  ];

  // =====================================================================================================
  // 2학년 · 손으로 읽는 글자, 손으로 하는 말
  const HAND = MOD('disab.e12.hand-words', [2]);
  const DOT = 'circle:ink';
  const NO = 'circle:cream';
  const HALL = [
    { name: '블록 위 가방', icon: 'dot', at: [1, 1] }, { name: '벽 옆 가방', icon: 'dot', at: [0, 0] }, { name: '블록 위 의자', icon: 'dot', at: [2, 1] },
    { name: '교실 문', icon: 'school', at: [1, 0] }, { name: '계단 앞', icon: 'dot', at: [3, 1] },
  ];
  const HALL_EASY = [HALL[0], HALL[1], HALL[2], HALL[4]];
  const HALL_MORE = [{ name: '블록 옆 화분', icon: 'dot', at: [2, 2] }, { name: '사물함 위', icon: 'dot', at: [3, 0] }];
  const T_HAND = [
    HAND({
      id: 'disab.e12.hand-words.intro.dot-feel', type: 'intro', title: '볼록 점 무늬 똑같이 찍기',
      method: '볼록 점 무늬 찾기', tool: 'pattern', minutes: 6,
      levels: { easy: '교사가 점 1~2개짜리 무늬를 칠판에 그려 보이고, 시연의 위 무늬 가운데 점 자리 하나만 함께 짚는다.', base: '위 여섯 칸 무늬(점 3개)를 보고 아래 빈 여섯 칸이 똑같이 찍히는 시연을 따라 칸을 짚는다.', challenge: '시연을 본 뒤 교사가 칠판에 다른 무늬를 하나 더 그리면 두 무늬에서 다른 칸을 짚는다.' },
      intro: {
        teacher: '"위에 여섯 칸 무늬가 있어요. 까만 점은 종이 위로 볼록 솟은 점이에요. 아래 빈칸에 똑같이 찍어 볼까요?" 시연 단추로 아래 칸이 위 무늬와 똑같이 채워지는 모습을 보이고, 칸 자리를 "왼쪽 위, 가운데, 오른쪽 아래"처럼 함께 말한다. "점자는 그냥 무늬예요"라는 말이 나오면 "점자는 이런 볼록 점을 손끝으로 만져서 읽는 글자예요. 눈 대신 손으로 읽어요"라고 알려 준다. 점자 책이나 엘리베이터 단추의 점자를 실물·사진으로 보이며 오늘은 여러 가지로 말하고 읽는 방법을 알아본다고 밝힌다.',
        student: '위 무늬를 보고 까만 점이 있는 칸을 손가락으로 짚어 보아요.',
        demo: { tool: 'pattern', options: { mode: 'fill', perRow: 2, seq: [DOT, NO, DOT, DOT, NO, NO, null, null, null, null, null, null], palette: [DOT, NO] }, sequence: [{ fill: [DOT, NO, DOT, DOT, NO, NO] }] },
        art: { draw: 'a paper hand gently touching raised paper dots on a card, next to an elevator button with small raised dots, soft cut paper shadows', banner: '손으로 읽는 글자' },
      },
      notes: '화면의 무늬는 점자처럼 생긴 여섯 칸 무늬이고 실제 점자 글자를 뜻하지 않는다. 볼록한 느낌은 교구가 주지 못하니 점자 안내판·점자 책 실물이나 종이에 풀로 찍은 점으로 만져 보게 한다. 눈을 가리는 체험은 하지 않는다.',
    }),
    HAND({
      id: 'disab.e12.hand-words.intro.sign-hello', type: 'intro', title: '수어 인사 따라 하기',
      method: '수어 인사 따라 하기', tool: 'timer', minutes: 6,
      levels: { easy: '"안녕하세요" 수어 동작을 교사와 함께 한 번 따라 한다.', base: '타이머 10초 동안 "안녕하세요" 동작을 세 번 따라 한다(시연대로 3번).', challenge: '"안녕하세요"를 세 번 한 뒤 "고마워요" 동작도 따라 한다.' },
      intro: {
        teacher: '"손으로 하는 말이 있어요. 수어라고 해요. 손 모양과 움직임, 얼굴 표정으로 말해요." 국립국어원 한국수어사전의 "안녕하세요" 영상을 보인 뒤, 시연 단추로 타이머가 10초씩 세 번 맞춰지는 모습을 보이고 반 전체가 따라 한다. "말을 못 하니까 손을 써요"라는 말이 나오면 "수어는 손으로 하는 진짜 말이에요. 수어로 노래도 하고 이야기도 해요"라고 알려 준다. 웃는 얼굴로 인사하는 것도 수어의 한 부분이라는 점을 짚는다.',
        student: '선생님을 따라 손과 웃는 얼굴로 "안녕하세요" 수어 인사를 해 보아요.',
        demo: { tool: 'timer', options: { title: '수어 인사 따라 하기(우리 반 약속)', labels: ['따라 하기', '쉬기'], plan: { work: 10, rest: 5, rounds: 1 } }, sequence: [{ plan: { work: 10, rest: 5, rounds: 3 } }] },
        art: { draw: 'paper children facing each other and greeting with their hands and big smiles, a paper speech bubble shaped like a waving hand between them', banner: '손으로 하는 말, 수어' },
      },
      notes: '수어 동작은 이 모듈에 손 모양을 적지 않았다. 교사가 국립국어원 한국수어사전 영상을 보고 보인다. 타이머 초는 따라 하기 진행용 우리 반 약속이다.',
    }),
    HAND({
      id: 'disab.e12.hand-words.activity.block-path', type: 'activity', title: '복도 점자 블록 길 지키기',
      method: '점자 블록 길 지키기', tool: 'map', minutes: 13,
      levels: { easy: '장소 네 곳 지도에서 핀을 놓으면 그 칸 이름이 바로 보인다.', base: '장소 다섯 곳(블록 위 가방·벽 옆 가방·블록 위 의자·교실 문·계단 앞) 가운데 알맞은 곳에 핀을 꽂는다.', challenge: '헷갈리는 장소(블록 옆 화분·사물함 위)가 더해진 지도에서 꽂고, 셋째 문항에서 계단 앞 블록이 무엇을 알려 주는지 보기도 고른다.' },
      activity: {
        title: '복도 지도에서 치울 곳 찾기', tool: 'map',
        teacher: '"복도 바닥에 노란 점자 블록 길이 있어요. 흰지팡이를 쓰는 친구는 이 길을 발과 지팡이로 느끼며 걸어요. 길 위에 물건이 있으면 어떻게 될까요?" 문항을 읽어 주고 핀을 꽂은 뒤 "이 물건은 어디로 옮기면 될까요?"라고 묻는다. "벽 옆 가방"에 꽂는 학생에게 "벽 옆은 블록 길 위인가요, 옆인가요?"라고 되묻는다. 셋째 문항에서 계단 앞의 점 모양 블록은 "멈춰요, 조심해요"를 알려 준다는 점을 짚는다. 우리 학교 복도에도 점자 블록이 있으면 함께 찾아본다.',
        task: '점자 블록 위에 놓여 치워야 할 물건을 찾아 핀을 꽂아요.', levels: { easy: { readout: true }, base: {}, challenge: {} },
        items: [
          { prompt: '블록 위 가방에 핀을 꽂아요.', toolOptions: { grid: [4, 3], places: HALL, title: '복도 지도' }, target: { place: '블록 위 가방' }, difficulty: 0.1,
            levels: { easy: { toolOptions: { places: HALL_EASY } }, challenge: { toolOptions: { places: [...HALL, ...HALL_MORE] } } } },
          { prompt: '블록 위 의자에 핀을 꽂아요.', toolOptions: { grid: [4, 3], places: HALL, title: '복도 지도' }, target: { place: '블록 위 의자' }, difficulty: 0.15,
            levels: { easy: { toolOptions: { places: HALL_EASY } }, challenge: { toolOptions: { places: [...HALL, ...HALL_MORE] } } } },
          { prompt: '"멈춰요" 블록 자리에 꽂아요.', toolOptions: { grid: [4, 3], places: HALL, title: '복도 지도' }, target: { place: '계단 앞' }, difficulty: 0.2,
            levels: { easy: { toolOptions: { places: HALL_EASY } },
              challenge: { prompt: '꽂고 블록이 알려 줄 말도요.', toolOptions: { places: [...HALL, ...HALL_MORE], ask: { q: '계단 앞 블록은?', choices: ['그냥 무늬예요', '멈춰요, 조심해요'] } }, target: { place: '계단 앞', pick: 1 } } },
            conclude: '점자 블록은 길을 알려 줘요. 블록 위는 비우고, 물건은 옆으로 치워요.' },
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '점자 블록 위에 가방이 있으면?', options: ['옆으로 치워요', '그대로 둬요'], answer: '옆으로 치워요' }] },
      notes: '계획은 물건을 끌어 옮기기였으나 칸 지도는 핀만 꽂을 수 있어 "치워야 할 물건 자리 찾기"로 바꿨다. 옮기는 동작은 교실 바닥에 테이프로 블록 길을 만들고 실제 가방을 옆으로 옮겨 본다.',
    }),
    HAND({
      id: 'disab.e12.hand-words.activity.ok-no-block', type: 'activity', title: '점자 블록 좋아요·안돼요',
      method: '좋아요/안돼요: 점자 블록 위', tool: 'emotion', minutes: 14,
      levels: { easy: '장면 3장을 좋아요·안돼요로 나누고, 놓으면 바로 맞는지 보인다.', base: '장면 5장을 좋아요·안돼요로 다 나눈 뒤 확인한다.', challenge: '나누기 대신 안돼요 장면 세 개에 그 장면을 바꿀 행동 카드를 하나씩 잇는다.' },
      activity: {
        title: '점자 블록 위, 괜찮을까?', tool: 'emotion',
        teacher: '"점자 블록 위에서 이렇게 하면 좋아요일까요, 안돼요일까요?" 장면을 하나씩 읽어 주고 반 전체가 엄지(좋아요)나 두 팔 엑스(안돼요)로 먼저 보인 뒤 놓는다. "잠깐만 두는 건 괜찮아요"라는 학생에게 "그 잠깐에 흰지팡이를 쓰는 친구가 지나가면 어떻게 될까요?"라고 묻는다. 도전에서는 안돼요 장면을 좋아요로 바꾸는 행동을 찾게 하고, 블록 위는 늘 비워 두는 길이라는 점을 짚는다.',
        task: '점자 블록 위 장면을 좋아요와 안돼요로 나누어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
        items: [
          { prompt: '복도 블록 장면을 나눠요.', toolOptions: { mode: 'sort', slots: ['좋아요', '안돼요'], cards: [C('kick', '블록 위 킥보드'), C('side', '블록 옆으로 걷기'), C('sit', '블록 위 앉기'), C('clear', '블록 위 비우기'), C('bag', '블록 위 가방')] }, target: { sort: { 좋아요: ['side', 'clear'], 안돼요: ['kick', 'sit', 'bag'] } }, difficulty: 0.1,
            levels: { easy: { prompt: '복도 블록 장면을 나눠요(3장).', toolOptions: { cards: [C('kick', '블록 위 킥보드'), C('side', '블록 옆으로 걷기'), C('sit', '블록 위 앉기')] }, target: { sort: { 좋아요: ['side'], 안돼요: ['kick', 'sit'] } } },
              challenge: { prompt: '안돼요 장면을 바꿔요.', toolOptions: { mode: 'match', slots: [{ id: 'kick', label: '블록 위 킥보드' }, { id: 'sit', label: '블록 위 앉기' }, { id: 'bag', label: '블록 위 가방' }], cards: [C('move', '킥보드 옮기기'), C('stand', '일어나 비키기'), C('lift', '가방 들기')] }, target: { match: { kick: 'move', sit: 'stand', bag: 'lift' } } } } },
          { prompt: '길 블록 장면을 나눠요.', toolOptions: { mode: 'sort', slots: ['좋아요', '안돼요'], cards: [C('bike', '블록 위 자전거'), C('walk', '블록 비켜 걷기'), C('pot', '블록 위 화분'), C('keep', '블록 길 비우기'), C('trash', '블록 위 쓰레기')] }, target: { sort: { 좋아요: ['walk', 'keep'], 안돼요: ['bike', 'pot', 'trash'] } }, difficulty: 0.15,
            levels: { easy: { prompt: '길 블록 장면을 나눠요(3장).', toolOptions: { cards: [C('bike', '블록 위 자전거'), C('walk', '블록 비켜 걷기'), C('pot', '블록 위 화분')] }, target: { sort: { 좋아요: ['walk'], 안돼요: ['bike', 'pot'] } } },
              challenge: { prompt: '안돼요 장면을 바꿔요.', toolOptions: { mode: 'match', slots: [{ id: 'bike', label: '블록 위 자전거' }, { id: 'pot', label: '블록 위 화분' }, { id: 'trash', label: '블록 위 쓰레기' }], cards: [C('park', '자전거 세우는 곳'), C('potmove', '화분 옮기기'), C('bin', '쓰레기통에'), ] }, target: { match: { bike: 'park', pot: 'potmove', trash: 'bin' } } } } },
          { prompt: '계단 앞 장면을 나눠요.', toolOptions: { mode: 'sort', slots: ['좋아요', '안돼요'], cards: [C('stand', '블록 위 서 있기'), C('stop', '멈춤 블록 비우기'), C('box', '블록 위 상자'), C('aside', '옆에서 기다리기'), C('play', '블록 위 놀기')] }, target: { sort: { 좋아요: ['stop', 'aside'], 안돼요: ['stand', 'box', 'play'] } }, difficulty: 0.2,
            levels: { easy: { prompt: '계단 앞 장면을 나눠요(3장).', toolOptions: { cards: [C('stand', '블록 위 서 있기'), C('stop', '멈춤 블록 비우기'), C('box', '블록 위 상자')] }, target: { sort: { 좋아요: ['stop'], 안돼요: ['stand', 'box'] } } },
              challenge: { prompt: '안돼요 장면을 바꿔요.', toolOptions: { mode: 'match', slots: [{ id: 'stand', label: '블록 위 서 있기' }, { id: 'box', label: '블록 위 상자' }, { id: 'play', label: '블록 위 놀기' }], cards: [C('step', '옆으로 비키기'), C('carry', '상자 치우기'), C('yard', '놀이터에서 놀기')] }, target: { match: { stand: 'step', box: 'carry', play: 'yard' } } } },
            conclude: '점자 블록 위는 비워요. 물건은 옆으로, 나도 옆으로 비켜요.' },
        ],
      },
      worksheet: { items: [{ type: 'table', prompt: '좋으면 ○, 안 되면 ×를 써요.', columns: ['장면', '○ / ×'], cells: [['블록 위에 킥보드 두기', ''], ['블록 옆으로 걷기', ''], ['블록 위에 앉기', '']], answer: '×, ○, ×' }],
        easy: [{ type: 'choice', prompt: '좋은 행동에 ○ 해요.', options: ['블록 옆으로 걷기', '블록 위에 앉기'], answer: '블록 옆으로 걷기' }] },
    }),
    HAND({
      id: 'disab.e12.hand-words.activity.many-ways', type: 'activity', title: '여러 가지로 말해요',
      method: '여러 가지로 말해요', tool: 'sortboard', minutes: 13,
      levels: { easy: '카드 2장만 바구니에 넣고, 바구니 옆에 든 장 수가 보이며 틀린 바구니에 넣으면 까닭을 듣고 되돌아온다.', base: '카드 4장(입으로 말하기·수어·점자·그림 카드 등)을 알맞은 바구니에 다 넣은 뒤 확인한다.', challenge: '손짓·문자처럼 생활 속 말하는 방법 카드 2장이 더 들어오고, 내가 써 본 방법은 짝에게 말한다(교사 진행).' },
      activity: {
        title: '말하는 방법 바구니', tool: 'sortboard',
        teacher: '"말은 입으로만 할까요? 손으로, 눈으로, 그림으로도 말할 수 있어요." 카드를 하나씩 읽어 주고 넣기 전에 반 전체가 그 방법을 몸짓으로 흉내가 아니라 따라 해 본다(손 흔들기·그림 카드 들기). 수어를 "소리로 해요"에 넣은 학생에게 "수어는 귀로 들을까요, 눈으로 볼까요?"라고 묻는다. 점자를 "눈으로"라고 하는 학생에게 "점자는 손끝으로 만져서 읽어요"라고 짚는다. 말하는 방법이 여러 가지라서 누구나 서로 이야기할 수 있다는 점을 짚는다.',
        task: '말하는 방법 카드를 알맞은 바구니에 넣어요.', levels: { easy: { instant: true, showCount: true, limit: 2 }, base: {}, challenge: {} },
        items: [
          { prompt: '말하는 방법을 나눠요.', toolOptions: { slots: ['소리로 해요', '손·눈으로 해요'], cards: [C('mouth', '입으로 말하기'), C('sign', '수어'), C('phone', '전화하기'), C('pic', '그림 카드')] }, target: { sort: { '소리로 해요': ['mouth', 'phone'], '손·눈으로 해요': ['sign', 'pic'] } }, difficulty: 0.1,
            levels: { easy: { prompt: '말하는 방법을 나눠요(2장).', target: { sort: { '소리로 해요': ['mouth'], '손·눈으로 해요': ['sign'] } } },
              challenge: { prompt: '말하는 방법을 나눠요(6장).', toolOptions: { more: [C('wave', '손짓 "이리 와"'), C('song', '노래하기')] }, target: { sort: { '소리로 해요': ['mouth', 'phone', 'song'], '손·눈으로 해요': ['sign', 'pic', 'wave'] } } } } },
          { prompt: '무엇으로 받는지 나눠요.', toolOptions: { slots: ['귀로 들어요', '손으로 읽어요', '눈으로 봐요'], cards: [C('braille', '점자 책'), C('voice', '친구 목소리'), C('signs', '수어'), C('bell', '종소리')] }, target: { sort: { '귀로 들어요': ['voice', 'bell'], '손으로 읽어요': ['braille'], '눈으로 봐요': ['signs'] } }, difficulty: 0.15,
            levels: { easy: { prompt: '무엇으로 받는지 나눠요(2장).', target: { sort: { '귀로 들어요': ['voice'], '손으로 읽어요': ['braille'], '눈으로 봐요': [] } } },
              challenge: { prompt: '무엇으로 받는지 나눠요(6장).', toolOptions: { more: [C('text', '글자 문자'), C('lift', '승강기 점자')] }, target: { sort: { '귀로 들어요': ['voice', 'bell'], '손으로 읽어요': ['braille', 'lift'], '눈으로 봐요': ['signs', 'text'] } } } } },
          { prompt: '수어와 점자를 나눠요.', toolOptions: { slots: ['수어', '점자'], cards: [C('hand', '손 모양으로 말해요'), C('dots', '볼록 점을 만져요'), C('face', '얼굴 표정도 써요'), C('tip', '손끝으로 읽어요')] }, target: { sort: { 수어: ['hand', 'face'], 점자: ['dots', 'tip'] } }, difficulty: 0.2,
            levels: { easy: { prompt: '수어와 점자를 나눠요(2장).', target: { sort: { 수어: ['hand'], 점자: ['dots'] } } },
              challenge: { prompt: '수어와 점자를 나눠요(6장).', toolOptions: { more: [C('move', '손을 움직여요'), C('six', '여섯 칸에 찍어요')] }, target: { sort: { 수어: ['hand', 'face', 'move'], 점자: ['dots', 'tip', 'six'] } } } },
            conclude: '입으로, 손으로, 눈으로 — 말하는 방법은 여러 가지예요.' },
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '손끝으로 만져서 읽는 글자는?', options: ['점자', '수어', '그림'], answer: '점자' }] },
      notes: '말하는 방법은 사람마다 편한 것이 다르다. 학생이나 가족이 어떤 방법을 쓰는지 캐묻지 않는다. 몸짓은 따라 하기이고 장애를 흉내 내는 놀이가 아니다.',
    }),
    HAND({
      id: 'disab.e12.hand-words.activity.sign-song', type: 'activity', title: '수어 동작 노래',
      method: '수어 동작 노래', tool: 'keyboard', minutes: 14,
      levels: { easy: '줄마다 끝 세 음만 듣고 따라 치고, 건반에 계이름과 듣는 동안 건반 빛이 보인다. 셋째 문항은 가락 친 것만 표시한다.', base: '"사랑해요 친구야", "손으로도 말해요" 한 줄 가락을 듣고 따라 친 뒤, 노래 끝에 "사랑해요" 수어 동작을 하고 표시한다.', challenge: '두 줄을 친 뒤 셋째 문항에서 새 낱말("고마워요") 수어 동작까지 노래에 넣어 해 보고 표시한다.' },
      activity: {
        title: '수어 노래 가락 치기', tool: 'keyboard',
        teacher: '"사랑해요 친구야, 손으로도 말해요" 노래를 두 번 불러 준 뒤 \'가락 듣기\'로 한 줄씩 들려준다. 치기 전에 반 전체가 손으로 높낮이를 그리며 따라 부르고, 노래 끝에는 국립국어원 한국수어사전에서 본 "사랑해요" 동작을 함께 한다. 음을 빠뜨린 학생에게 "노래 글자 하나에 건반 한 번이에요. 몇 번 쳤는지 세어 볼까요?"라고 묻는다. 수어도 노래처럼 마음을 전하는 말이라는 점을 짚는다.',
        task: '수어 노래 가락을 듣고 건반으로 따라 친 뒤 수어 동작을 해요.', levels: { easy: { from: '도', to: '높은도', showWhileListening: true }, base: { from: '도', to: '높은도' }, challenge: { from: '도', to: '높은도' } },
        items: [
          MEL('"사랑해요 친구야" 쳐요.', ['솔', '미', '미', '솔', '라', '솔', '미'], 0.1),
          MEL('"손으로도 말해요" 쳐요.', ['라', '라', '솔', '미', '레', '미', '도'], 0.15),
          { prompt: '노래하고 동작도 해요.', toolOptions: {}, target: { selfCheck: ['가락을 쳤어요', '수어 동작 했어요'], minNotes: 4 }, difficulty: 0.2,
            levels: { easy: { prompt: '가락을 치고 표시해요.', target: { selfCheck: ['가락을 쳤어요'], minNotes: 3 } },
              challenge: { prompt: '새 낱말 동작도 넣어요.', target: { selfCheck: ['가락을 쳤어요', '수어 동작 했어요', '새 낱말 했어요'], minNotes: 7 } } },
            conclude: '수어로도 "사랑해요"라고 마음을 전할 수 있어요.' },
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '노랫말을 따라 써요.', text: '손으로도 ___', answer: '말해요' }] },
      notes: '가락은 수업용으로 지은 짧은 노래다. 수어 동작("사랑해요"·"고마워요")은 이 모듈에 적지 않았고 교사가 국립국어원 한국수어사전 영상을 보고 보인다.',
    }),
    HAND({
      id: 'disab.e12.hand-words.wrap.promise-chant', type: 'wrap', title: '"블록 위는 비워요" 구호',
      method: '점자 블록 약속 구호', tool: 'timer', minutes: 6,
      levels: { easy: '교사와 함께 구호 카드 차례를 맞추고 구호를 한 번 외친다.', base: '구호 카드 세 장의 차례를 맞추고 손뼉 세 번과 함께 두 번 외친 뒤 해 본 것을 표시한다.', challenge: '두 번 외친 뒤 "비워요"에 두 팔로 길을 여는 동작을 내가 만들어 붙인다.' },
      wrap: {
        teacher: '"블록 위는(손으로 바닥 가리키기) 비워요(두 팔 벌리기), 짝짝짝!" 카드 차례를 맞춘 뒤 반 전체가 손뼉 세 번과 함께 두 번 외친다. 출구 3번에서 "세워 둬요"를 고른 학생에게 "킥보드가 블록 위에 있으면 흰지팡이를 쓰는 친구 길이 막혀요. 어디로 옮길까요?"라고 묻는다. 끝으로 우리 학교에서 점자 블록을 본 곳을 떠올려 말하게 한다.',
        exitTicket: [
          ORDER('점자 블록 구호', ['블록 위는', '비워요', '손뼉 세 번'], '구호를 차례대로 놓아요.'),
          SELF('구호 점검', ['구호 외쳤어요', '손뼉 쳤어요', '두 번 했어요']),
          { type: 'choice', prompt: '블록 위에 킥보드를?', options: ['세워 둬요', '옆으로 치워요'], answer: 1, difficulty: 0.1, explain: '점자 블록 위는 비우고, 킥보드는 옆으로 치워요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '점자 블록 약속',
        items: [
          { type: 'blank', prompt: '구호를 따라 써요.', text: '블록 위는 ___', answer: '비워요' },
          { type: 'draw', prompt: '점자 블록 옆으로 걷는 내 모습을 그려요.' },
        ],
        easy: { note: '"블록 위는 비워요, 짝짝짝!"을 떠올려요.', items: [{ type: 'draw', prompt: '노란 점자 블록 길을 그려요.' }] },
      },
    }),
    HAND({
      id: 'disab.e12.hand-words.wrap.my-way-card', type: 'wrap', title: '손으로 하는 말 카드 담기',
      method: '오늘 배운 말하는 방법 고르기', tool: 'wordcards', minutes: 6,
      levels: { easy: '교사가 카드를 읽어 주고 손으로 하는 말 하나(수어)를 함께 담는다.', base: '카드 4장 가운데 손으로 하는 말·읽는 글자 두 장을 스스로 담는다.', challenge: '담은 뒤 그 가운데 오늘 제일 신기했던 것과 까닭을 활동지 그림으로 나타낸다.' },
      wrap: {
        teacher: '"오늘 배운 방법 가운데 손으로 하는 말, 손으로 읽는 글자를 바구니에 담아요." 카드를 하나씩 읽어 주고 담을 때마다 반 전체가 이름을 따라 말한다. "입으로 말하기"를 담은 학생에게 "입으로 말하기는 소리로 하지요. 손으로 하는 것은 무엇이었나요?"라고 묻는다. 끝으로 오늘 가장 신기했던 방법 하나를 골라 마음 별을 그리게 한다(정답이 없다).',
        exitTicket: [
          PICKW('손으로 해요', [C('sign', '수어'), C('mouth', '입으로 말하기'), C('braille', '점자'), C('listen', '노래 듣기')], ['sign', 'braille'], '손으로 하는 것을 담아요.'),
          { type: 'choice', prompt: '말은 입으로만 할까요?', options: ['입으로만 해요', '여러 방법이 있어요'], answer: 1, difficulty: 0.1, explain: '입으로, 손으로(수어), 손끝으로(점자), 그림으로도 말해요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '여러 가지 말하는 방법',
        items: [
          { type: 'check', prompt: '오늘 제일 신기했던 것에 ✓ 해요.', options: ['수어', '점자', '그림 카드'] },
          { type: 'draw', prompt: '신기했던 까닭을 그림으로 그려요.' },
        ],
      },
      notes: '"제일 신기했던 것"은 정답이 없다 — 고른 까닭을 들어 준다. 카드는 소리를 내지 않으니 교사가 읽어 준다.',
    }),
  ];

  // =====================================================================================================
  // 2학년 · 놀리는 말 대신 존중하는 말
  const KIND = MOD('disab.e12.kind-words', [2]);
  const OKNO = ['좋아요', '안돼요'];
  const T_KIND = [
    KIND({
      id: 'disab.e12.kind-words.intro.heart-weather', type: 'intro', title: '말을 들은 친구 마음 날씨',
      method: '말을 들은 친구 마음 날씨', tool: 'emotion', minutes: 6,
      levels: { easy: '교사가 말 두 개("같이 하자"·"이상해")만 읽어 주고 마음 날씨(해·비)를 함께 잇는다.', base: '말 네 개를 들은 그림 친구 얼굴을 보고 마음 카드를 잇는 시연을 따라 말한다.', challenge: '시연을 본 뒤 교사가 같은 "괜찮아"를 부드럽게·비웃듯 두 번 말하면 친구 마음이 어떻게 다른지 견주어 말한다.' },
      intro: {
        teacher: '"보청기를 낀 윤이가 이런 말을 들었어요. 윤이 마음 날씨는 해일까요, 비일까요?" 말을 하나씩 읽어 주고, 시연 단추로 마음 카드가 이어지는 모습을 보인다. "그냥 장난으로 한 말이에요"라는 말이 나오면 "장난으로 한 말도 윤이 얼굴을 보세요. 마음에 비가 와요"라고 되묻듯 답한다. 같은 말도 말투에 따라 친구 마음이 달라진다는 것을 보이며, 오늘은 놀리는 말 대신 존중하는 말을 고른다고 밝힌다.',
        student: '그림 친구가 들은 말을 듣고, 친구 마음이 해인지 비인지 손으로 보여요.',
        demo: { tool: 'emotion', options: { mode: 'match', slots: [{ id: 'with', label: '"같이 하자"' }, { id: 'odd', label: '"이상해"' }, { id: 'cool', label: '"멋지다"' }, { id: 'copy', label: '말소리 흉내' }], cards: ['기쁨', '속상함', '뿌듯함', '슬픔'], shuffle: false },
          sequence: [{ match: { with: '기쁨', odd: '속상함' } }, { match: { with: '기쁨', odd: '속상함', cool: '뿌듯함', copy: '슬픔' } }] },
        art: { draw: 'a paper child with a small hearing aid in the middle, a sunny paper cloud above on one side where friends say let us play together, and a rainy paper cloud on the other side, cut paper hearts around', banner: '친구 마음 날씨는?' },
      },
      notes: '놀리는 말("이상해")과 흉내는 교사가 그림 속 친구가 들은 말로만 읽고, 학생이 소리 내어 따라 하지 않는다.',
    }),
    KIND({
      id: 'disab.e12.kind-words.intro.stop-song', type: 'intro', title: '"놀리면 그만, 같이 하자" 노래',
      method: '"그만" 손 신호 노래', tool: 'keyboard', minutes: 6,
      levels: { easy: '"놀리면 그만" 한 마디만 교사와 함께 부르며 "그만"에 손바닥을 앞으로 내민다.', base: '"놀리면 그만, 같이 하자" 두 마디 가락을 시연으로 듣고 손 신호와 함께 따라 부른다.', challenge: '두 마디를 박자를 느리게 바꿔 부르며 손 신호를 붙인다.' },
      intro: {
        teacher: '"놀리면 그만(손바닥 앞으로), 같이 하자(두 팔 벌리기)!" 노래를 부르고 시연 단추로 건반이 눌리는 모습을 보인 뒤 반 전체가 손 신호와 함께 따라 부른다. "그만이라고 하면 친구가 화내요"라는 말이 나오면 "\'그만\' 다음에 \'같이 하자\'를 붙이면 친구와 다시 놀 수 있어요"라고 말해 준다. 오늘 노래처럼 놀리는 말을 멈추고 함께 하는 말로 바꾼다고 밝힌다.',
        student: '"놀리면 그만, 같이 하자" 노래를 손 신호와 함께 따라 불러요.',
        demo: { tool: 'keyboard', options: { from: '도', to: '높은도', melody: ['솔', '솔', '솔', '미', '미', '레', '레', '미', '도'] }, sequence: [{ notes: ['솔', '솔', '솔', '미', '미', '레', '레', '미', '도'] }] },
        art: { draw: 'paper children singing together, one child holding up a paper palm for stop and then all children opening their arms wide to play together, paper musical notes', banner: '놀리면 그만, 같이 하자' },
      },
      notes: '가락은 수업용으로 지은 짧은 노래다.',
    }),
    KIND({
      id: 'disab.e12.kind-words.activity.word-swap', type: 'activity', title: '놀리는 말 → 존중하는 말',
      method: '놀리는 말 → 존중하는 말 바꾸기', tool: 'wordcards', minutes: 13,
      levels: { easy: '놀리는 말 두 개 옆에 바꿀 말 카드 두 장을 잇고, 놓으면 바로 맞는지 보인다.', base: '놀리는 말 네 개 옆에 존중하는 말 카드 네 장을 잇는다.', challenge: '셋째 문항에서 이름 불러 주는 말 카드를 낱말 카드(솔아·같이·놀자)로 차례대로 만든다.' },
      activity: {
        title: '바꿔 말해요', tool: 'wordcards',
        teacher: '"왼쪽은 친구 마음에 비가 오는 말이에요. 어떤 말로 바꾸면 해가 뜰까요?" 카드를 교사가 읽어 준다(카드는 소리를 내지 않는다). 놀리는 말은 교사만 읽고, 학생은 바꾼 말을 소리 내어 따라 읽는다. "느리다는 건 사실이에요"라는 학생에게 "사실이어도 \'느림보\'라고 부르면 친구는 어떨까요? \'천천히 같이 가자\'는 어때요?"라고 묻는다. 셋째 문항에서는 "휠체어야"처럼 도구 이름 대신 친구 이름을 불러 준다는 점을 짚는다.',
        task: '놀리는 말 옆에 존중하는 말 카드를 이어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          { prompt: '놀이 때 말을 바꿔요.', toolOptions: { mode: 'match', slots: [{ id: 'odd', label: '"이상해"' }, { id: 'cant', label: '"너는 못 해"' }, { id: 'slow', label: '"느림보"' }, { id: 'go', label: '"저리 가"' }], cards: [C('with', '"같이 하자"'), C('try', '"해 보자"'), C('easy', '"천천히 가자"'), C('come', '"이리 와"')] }, target: { match: { odd: 'with', cant: 'try', slow: 'easy', go: 'come' } }, difficulty: 0.1,
            levels: { easy: { prompt: '놀이 때 말을 바꿔요(2쌍).', toolOptions: { slots: [{ id: 'odd', label: '"이상해"' }, { id: 'go', label: '"저리 가"' }], cards: [C('with', '"같이 하자"'), C('come', '"이리 와"')] }, target: { match: { odd: 'with', go: 'come' } } } } },
          { prompt: '교실에서 말을 바꿔요.', toolOptions: { mode: 'match', slots: [{ id: 'weird', label: '"말이 이상해"' }, { id: 'loud', label: '"크게 말해!"' }, { id: 'laugh', label: '비웃는 웃음' }, { id: 'no', label: '"넌 빠져"' }], cards: [C('again', '"한 번 더 말해 줘"'), C('face', '마주 보고 말하기'), C('cheer', '"멋지다"'), C('join', '"같이 앉자"')] }, target: { match: { weird: 'again', loud: 'face', laugh: 'cheer', no: 'join' } }, difficulty: 0.15,
            levels: { easy: { prompt: '교실에서 말을 바꿔요(2쌍).', toolOptions: { slots: [{ id: 'laugh', label: '비웃는 웃음' }, { id: 'no', label: '"넌 빠져"' }], cards: [C('cheer', '"멋지다"'), C('join', '"같이 앉자"')] }, target: { match: { laugh: 'cheer', no: 'join' } } } } },
          { prompt: '이름 불러 주는 말을 담아요.', toolOptions: { mode: 'pick', basket: '이름 불러 주기', cards: [C('hi', '"윤아, 안녕"'), C('chair', '"휠체어야"'), C('sol', '"솔아, 같이 가"'), C('you', '"야, 너!"')] }, target: { pick: ['hi', 'sol'] }, difficulty: 0.2,
            levels: { easy: { prompt: '이름 불러 주는 말을 담아요(2장).', toolOptions: { cards: [C('hi', '"윤아, 안녕"'), C('chair', '"휠체어야"')] }, target: { pick: ['hi'] } },
              challenge: { prompt: '이름 불러 주는 말을 만들어요.', toolOptions: { mode: 'order', slots: ['먼저', '다음', '끝'], cards: [C('play', '놀자'), C('name', '솔아'), C('to', '같이')] }, target: { order: ['name', 'to', 'play'] } } },
            conclude: '놀리는 말 대신 "같이 하자", 그리고 친구 이름을 불러 줘요.' },
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '"이상해" 대신 할 말은?', options: ['"같이 하자"', '"저리 가"'], answer: '"같이 하자"' }] },
      notes: '놀리는 말 카드는 바로잡기 위해서만 보인다. 학생이 놀리는 말을 소리 내어 따라 하지 않게 한다. 솔·윤은 가상 인물이다.',
    }),
    KIND({
      id: 'disab.e12.kind-words.activity.stop-role', type: 'activity', title: '흉내 멈추기 역할놀이',
      method: '흉내 내는 친구 멈추기 역할놀이', tool: 'story', minutes: 14,
      levels: { easy: '첫 장면이 놓여 있어 남은 장면 2장만 놓고, 놓으면 바로 맞는지 보인다.', base: '장면 3장(흉내 → "그만해!" → 같이 놀아요)을 차례대로 놓고 짝과 "그만해, 같이 놀자"를 말해 본다.', challenge: '"안 멈추면 알려요"(선생님께 알리기) 장면 카드가 더해져 네 칸에 차례대로 놓는다.' },
      activity: {
        title: '"그만해!" 하고 같이 놀기', tool: 'story',
        teacher: '"누가 친구 걸음을 흉내 내요. 옆에 있는 나는 어떻게 할까요?" 장면을 읽어 주고 카드를 놓은 뒤, 짝과 손바닥을 내밀며 "그만해, 같이 놀자"를 말해 본다. 흉내 장면은 소리 내거나 몸으로 따라 하지 않는다. "장난이니까 같이 웃어요"라는 학생에게 "흉내를 본 친구 마음은 어떨까요? 같이 웃으면 놀림이 더 커져요"라고 묻는다. 도전에서는 "그만해"에도 멈추지 않으면 선생님께 알리는 것이 고자질이 아니라 돕기라는 점을 짚는다.',
        task: '흉내를 멈추는 장면 카드를 차례대로 놓아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          { prompt: '걸음 흉내예요. 차례로 놓아요.', toolOptions: { slots: ['먼저', '다음', '끝'], cards: [C('play', '같이 놀아요', { motif: 'tree' }), C('copy', '걸음 흉내 내요', { motif: 'tree' }), C('stop', '"그만해!"', { motif: 'tree' })] }, target: { order: ['copy', 'stop', 'play'] }, difficulty: 0.1,
            levels: { easy: { state: { at: { copy: 0, stop: null, play: null } } },
              challenge: { prompt: '알리기까지 차례로 놓아요.', toolOptions: { slots: ['먼저', '다음', '그다음', '끝'], cards: [C('play', '같이 놀아요', { motif: 'tree' }), C('tell', '안 멈추면 알려요', { motif: 'tree' }), C('copy', '걸음 흉내 내요', { motif: 'tree' }), C('stop', '"그만해!"', { motif: 'tree' })] }, target: { order: ['copy', 'stop', 'tell', 'play'] } } } },
          { prompt: '말소리 흉내예요. 차례로 놓아요.', toolOptions: { slots: ['먼저', '다음', '끝'], cards: [C('talk', '같이 이야기해요', { motif: 'house' }), C('mimic', '말소리 흉내', { motif: 'house' }), C('stop2', '"그만, 같이 해"', { motif: 'house' })] }, target: { order: ['mimic', 'stop2', 'talk'] }, difficulty: 0.15,
            levels: { easy: { state: { at: { mimic: 0, stop2: null, talk: null } } },
              challenge: { prompt: '알리기까지 차례로 놓아요.', toolOptions: { slots: ['먼저', '다음', '그다음', '끝'], cards: [C('talk', '같이 이야기해요', { motif: 'house' }), C('tell2', '안 멈추면 알려요', { motif: 'house' }), C('mimic', '말소리 흉내', { motif: 'house' }), C('stop2', '"그만, 같이 해"', { motif: 'house' })] }, target: { order: ['mimic', 'stop2', 'tell2', 'talk'] } } } },
          { prompt: '휠체어를 놀려요. 차례로 놓아요.', toolOptions: { slots: ['먼저', '다음', '끝'], cards: [C('draw', '같이 그려요', { motif: 'sun' }), C('tease', '휠체어 놀리기', { motif: 'sun' }), C('no', '"그건 안 돼"', { motif: 'sun' })] }, target: { order: ['tease', 'no', 'draw'] }, difficulty: 0.2,
            levels: { easy: { state: { at: { tease: 0, no: null, draw: null } } },
              challenge: { prompt: '알리기까지 차례로 놓아요.', toolOptions: { slots: ['먼저', '다음', '그다음', '끝'], cards: [C('draw', '같이 그려요', { motif: 'sun' }), C('tell3', '안 멈추면 알려요', { motif: 'sun' }), C('tease', '휠체어 놀리기', { motif: 'sun' }), C('no', '"그건 안 돼"', { motif: 'sun' })] }, target: { order: ['tease', 'no', 'tell3', 'draw'] } } } },
          { prompt: '짝과 "그만해!"를 말해요.', free: true, talk: true, difficulty: 0.2, conclude: '흉내를 보면 "그만해, 같이 놀자". 안 멈추면 선생님께 알려요.' },
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '흉내를 보면 "___, 같이 놀자" 해요.', answer: '그만해' }] },
      notes: '역할놀이는 멈추는 말("그만해, 같이 놀자")과 함께 노는 장면만 한다. 흉내 내는 역할은 누구도 맡지 않는다(교사가 그림 카드로만 보인다).',
    }),
    KIND({
      id: 'disab.e12.kind-words.activity.ok-no', type: 'activity', title: '교실 장면 좋아요·안돼요 바구니',
      method: '좋아요/안돼요: 교실 장면', tool: 'sortboard', minutes: 13,
      levels: { easy: '카드 4장, 바구니 옆에 든 장 수가 보이고 틀린 바구니에 넣으면 까닭을 듣고 되돌아온다.', base: '카드 6장을 다 넣은 뒤 확인한다.', challenge: '"도와준다며 확 밀기"처럼 헷갈리는 카드 2장이 더 들어오고, 안돼요 카드를 좋아요 행동으로 바꾼 말을 짝과 해 본다(교사 진행).' },
      activity: {
        title: '좋아요·안돼요 바구니', tool: 'sortboard',
        teacher: '"이렇게 하면 친구가 웃을까요, 속상할까요? 좋아요 바구니일까요, 안돼요 바구니일까요?" 카드를 하나씩 소리 내어 읽고, 넣기 전에 반 전체가 엄지나 두 팔 엑스를 보인다. "도와준다며 확 밀기"를 좋아요에 넣은 학생에게 "솔이가 가고 싶은 곳이었을까요? 먼저 물어보지 않으면 놀랄 수 있어요"라고 묻는다. 안돼요 바구니의 행동을 한 친구는 나쁜 아이가 아니라 그 행동을 바꾸면 된다는 점을 짚고, 바꾼 말("흉내 대신 같이 걷자")을 짝과 해 본다.',
        task: '교실 장면 카드를 좋아요와 안돼요 바구니에 넣어요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
        items: [
          SB2(OKNO, '교실 장면을 나누어요.', ['이름 불러 주기', '같이 앉기', '"같이 하자"'], ['흉내 내기', '비웃기', '"이상해"'], [C('shove', '도와준다며 밀기'), C('ask', '"도와줄까?" 묻기')], 0, 0.1),
          SB2(OKNO, '놀이 시간 장면을 나누어요.', ['차례 기다려 주기', '공 같이 굴리기', '"이리 와"'], ['걸음 흉내', '안 끼워 주기', '"넌 못 해"'], [C('help', '말없이 대신하기'), C('wait', '"내가 할게" 듣기')], 0, 0.15),
          SB2(OKNO, '급식 시간 장면을 나누어요.', ['옆자리 앉기', '"맛있다" 말하기', '천천히 기다리기'], ['손가락질하기', '말소리 흉내', '"저리 가"'], [C('stare', '빤히 쳐다보기'), C('smile', '눈 맞추고 웃기')], 0, 0.2, { conclude: '흉내·비웃기 대신 이름을 불러 주고 같이 해요.' }),
        ],
      },
      worksheet: { items: [{ type: 'table', prompt: '좋으면 ○, 안 되면 ×를 써요.', columns: ['장면', '○ / ×'], cells: [['이름 불러 주기', ''], ['흉내 내기', ''], ['같이 앉기', ''], ['비웃기', '']], answer: '○, ×, ○, ×' }],
        easy: [{ type: 'choice', prompt: '좋은 행동에 ○ 해요.', options: ['같이 앉기', '비웃기'], answer: '같이 앉기' }] },
      notes: '',
    }),
    KIND({
      id: 'disab.e12.kind-words.activity.kind-poster', type: 'activity', title: '"같이 하자" 고운 말 포스터',
      method: '고운 말 포스터', tool: 'collage', minutes: 14,
      levels: { easy: '조각 2개 이상(분홍 하트 = 고운 말, 하양 동그라미 = 말풍선)을 붙인다.', base: '조각 4개 이상을 붙여 고운 말 포스터를 꾸민다.', challenge: '4개에 더해 함께 노는 친구 조각(노랑·파랑 동그라미)을 붙여 포스터에 함께 노는 그림을 더한다.' },
      activity: {
        title: '고운 말 포스터 꾸미기', tool: 'collage',
        teacher: '"분홍 하트는 고운 말, 하양 동그라미는 말풍선이에요. 우리 반에 붙일 \'같이 하자\' 포스터를 꾸며 볼까요?" 조각을 붙일 때마다 "이 말풍선에는 어떤 말이 들어갈까요?"라고 묻고 기다릴 반응("같이 하자", "멋지다", 친구 이름)을 듣는다. 다 꾸민 포스터는 인쇄해 교사가 말풍선 안에 학생이 말한 고운 말을 적어 교실에 붙인다. 고운 말은 친구 이름을 불러 주는 것부터 시작한다는 점을 짚는다.',
        task: '하트와 말풍선 조각으로 고운 말 포스터를 꾸며요.', levels: { easy: { shapes: ['heart', 'circle'] }, base: { shapes: ['heart', 'circle', 'star', 'square'] }, challenge: {} },
        items: [
          { prompt: '분홍 하트를 붙여요.', toolOptions: {}, target: { has: [{ shape: 'heart', color: '분홍', min: 4 }] }, difficulty: 0.1,
            levels: { easy: { prompt: '분홍 하트 2개를 붙여요.', target: { has: [{ shape: 'heart', color: '분홍', min: 2 }] } },
              challenge: { prompt: '하트와 친구 조각을 붙여요.', target: { has: [{ shape: 'heart', color: '분홍', min: 4 }, { shape: 'circle', color: '노랑', min: 1 }, { shape: 'circle', color: '파랑', min: 1 }] } } } },
          { prompt: '하양 말풍선을 붙여요.', toolOptions: {}, target: { has: [{ shape: 'circle', color: '하양', min: 2 }], pieces: { min: 4 } }, difficulty: 0.15,
            levels: { easy: { prompt: '하양 말풍선 하나를 붙여요.', target: { has: [{ shape: 'circle', color: '하양', min: 1 }], pieces: { min: 2 } } },
              challenge: { prompt: '말풍선과 친구 조각을요.', target: { has: [{ shape: 'circle', color: '하양', min: 2 }, { shape: 'circle', color: '노랑', min: 1 }, { shape: 'circle', color: '파랑', min: 1 }], pieces: { min: 5 } } } } },
          { prompt: '포스터를 꾸미고 표시해요.', toolOptions: {}, target: { selfCheck: ['포스터 꾸몄어요', '고운 말 말했어요'], minPieces: 4 }, difficulty: 0.2,
            levels: { easy: { prompt: '조각 2개로 꾸미고 표시해요.', target: { selfCheck: ['포스터 꾸몄어요', '고운 말 말했어요'], minPieces: 2 } },
              challenge: { prompt: '함께 노는 그림도 표시해요.', target: { selfCheck: ['포스터 꾸몄어요', '고운 말 말했어요', '친구 그림 붙임'], minPieces: 6 } } },
            conclude: '"같이 하자", "멋지다", 친구 이름 — 고운 말로 우리 반을 꾸며요.' },
        ],
      },
      worksheet: { items: [{ type: 'draw', prompt: '말풍선에 고운 말을 넣어 그려요.' }] },
      notes: '교구가 글자를 붙이지 못해 "같이 하자" 그림 글자는 인쇄한 포스터에 교사가 적는다. 조각의 뜻(분홍 하트 = 고운 말, 하양 동그라미 = 말풍선, 노랑·파랑 동그라미 = 함께 노는 친구)은 칠판에 그려 두고 시작한다.',
    }),
    KIND({
      id: 'disab.e12.kind-words.wrap.kind-chant', type: 'wrap', title: '"흉내 대신 같이 하자" 구호',
      method: '고운 말 구호', tool: 'timer', minutes: 6,
      levels: { easy: '교사와 함께 구호 카드 차례를 맞추고 동작과 함께 한 번 외친다.', base: '구호 카드 세 장의 차례를 맞추고 동작과 함께 두 번 외친 뒤 해 본 것을 표시한다.', challenge: '두 번 외친 뒤 짝과 앞 구절·뒤 구절을 주고받으며 외친다.' },
      wrap: {
        teacher: '"흉내 대신(손바닥 앞으로) 같이 하자(두 팔 벌리기), 짝짝!" 카드 차례를 맞춘 뒤 반 전체가 동작과 함께 두 번 외친다. 출구 3번에서 "괜찮아요"를 고른 학생에게 "장난이어도 흉내를 본 친구 마음에는 비가 와요"라고 말해 준다. 마지막 구호는 짝과 주고받는다.',
        exitTicket: [
          ORDER('고운 말 구호', ['흉내 대신', '같이 하자', '손뼉 짝짝'], '구호를 차례대로 놓아요.'),
          SELF('구호 점검', ['동작했어요', '두 번 외쳤어요', '짝과 해 봤어요']),
          { type: 'choice', prompt: '장난으로 흉내 내면?', options: ['괜찮아요', '친구 마음이 아파요'], answer: 1, difficulty: 0.1, explain: '장난이어도 흉내는 친구 마음을 아프게 해요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '흉내 대신 같이 하자',
        items: [
          { type: 'blank', prompt: '구호를 따라 써요.', text: '흉내 대신 ___ 하자', answer: '같이' },
          { type: 'draw', prompt: '친구와 같이 노는 모습을 그려요.' },
        ],
        easy: { note: '"흉내 대신 같이 하자!"를 떠올려요.', items: [{ type: 'draw', prompt: '두 팔 벌린 내 모습을 그려요.' }] },
      },
    }),
    KIND({
      id: 'disab.e12.kind-words.wrap.pick-word', type: 'wrap', title: '내일 쓸 존중하는 말 고르기',
      method: '내일 쓸 말 하나 고르기', tool: 'emotion', minutes: 6,
      levels: { easy: '교사가 말 카드를 읽어 주고 존중하는 말 하나를 함께 담는다.', base: '말 카드 다섯 장 가운데 존중하는 말을 스스로 담고, 내일 쓸 마음 크기를 고른다.', challenge: '담은 말 가운데 내일 쓸 말을 언제(쉬는 시간·놀이 시간) 쓸지 짝에게 말한다(교사 진행).' },
      wrap: {
        teacher: '"오늘 바꾼 말 가운데 친구 마음에 해가 뜨는 말을 바구니에 담아요." 카드를 읽어 주고 담을 때마다 반 전체가 따라 읽는다. "이상해"를 담은 학생에게 "이 말을 들은 친구 마음 날씨는 어땠지요?"라고 묻는다. 끝으로 내일 쓸 말 하나를 정해 짝에게 웃는 얼굴로 말해 보고, 언제 쓸지 함께 이야기한다(정답이 없다).',
        exitTicket: [
          { type: 'tool', tool: 'emotion', options: { mode: 'pick', basket: '내일 쓸 말', cards: [C('with', '"같이 하자"'), C('odd', '"이상해"'), C('cool', '"멋지다"'), C('name', '"솔아, 안녕"'), C('slow', '"느림보"')] }, prompt: '존중하는 말을 담아요.', target: { pick: ['with', 'cool', 'name'] }, difficulty: 0.1 },
          SCALE('내일 친구에게 고운 말을 해요.', '뿌듯함', '얼마나 해 볼 수 있나요?'),
          MOOD,
        ],
      },
      worksheet: {
        title: '내일 쓸 말',
        items: [
          { type: 'check', prompt: '내일 쓸 말에 ✓ 해요.', options: ['같이 하자', '멋지다', '친구 이름 부르기'] },
          { type: 'draw', prompt: '고운 말을 듣고 웃는 친구를 그려요.' },
        ],
      },
    }),
  ];

  // 교실 장면 바구니 도전 카드는 카드마다 뜻이 다르다(밀기 → 안돼요, 묻기 → 좋아요) — 정답을 카드 뜻대로 고친다
  const fixHard = (item, okHard, noHard) => {
    const ch = item.levels.challenge;
    ch.target = { sort: { 좋아요: [...item.target.sort['좋아요'], ...okHard], 안돼요: [...item.target.sort['안돼요'], ...noHard] } };
  };
  const OKNO_MOD = T_KIND.find((m) => m.id === 'disab.e12.kind-words.activity.ok-no');
  const [o1, o2, o3] = OKNO_MOD.activity.items;
  fixHard(o1, ['ask'], ['shove']);
  fixHard(o2, ['wait'], ['help']);
  fixHard(o3, ['smile'], ['stare']);
  OKNO_MOD.notes = '헷갈리는 카드: "도와준다며 밀기"·"말없이 대신하기"·"빤히 쳐다보기"는 안돼요, "\'도와줄까?\' 묻기"·"\'내가 할게\' 듣기"·"눈 맞추고 웃기"는 좋아요다. 안돼요 카드를 좋아요 행동으로 바꾸는 말은 교구가 채점하지 않아 짝과 말로 해 본다.';

  PaperLessons.registerModules([...T_SAME, ...T_HAND, ...T_KIND]);
})();
