// 도시 탐방 예제의 내용(장소·설명·퀴즈)과 아래 안내 패널. 두 예제(pannellum, marzipano)가 같이 쓴다.
// 위치는 도(degree) 단위: yaw 는 그림 가운데가 0, 오른쪽이 +, pitch 는 위가 +.
window.PANO_TOUR = {
  first: 'old-campus',
  scenes: {
    'old-campus': {
      title: '오래된 대학 마당',
      icon: 'fi-rr-school',
      yaw: 0, pitch: 0,
      links: [
        { to: 'lakeside', yaw: 22, pitch: -12, label: '호숫가로 가기' },
        { to: 'business-district', yaw: -100, pitch: -14, label: '업무 지구로 가기' },
      ],
      spots: [
        { yaw: -47, pitch: 14, title: '돌로 지은 건물',
          caption: '돌을 하나하나 쌓아 지은 오래된 건물이다. 벽이 두껍고, 창은 좁고 길다.',
          question: '이 건물의 벽은 주로 무엇으로 지었을까요?',
          choices: ['돌', '유리', '나무'], answer: 0 },
        { yaw: 58, pitch: -14, title: '건물에 둘러싸인 안뜰',
          caption: '건물이 네모나게 둘러싼 잔디밭이다. 바깥 길의 소리와 바람이 덜 들어온다.',
          question: '건물이 잔디밭을 둘러싸고 있으면 어떤 점이 좋을까요?',
          choices: ['조용하고 바람이 덜 분다', '비가 오지 않는다', '밤이 오지 않는다'], answer: 0 },
      ],
    },
    lakeside: {
      title: '도시 속 호숫가',
      icon: 'fi-rr-tree',
      yaw: 0, pitch: -5,
      links: [
        { to: 'business-district', yaw: 42, pitch: -24, label: '업무 지구로 가기' },
        { to: 'old-campus', yaw: -42, pitch: -24, label: '대학 마당으로 가기' },
      ],
      spots: [
        { yaw: 8, pitch: -12, title: '돌로 쌓은 물가',
          caption: '도시 한가운데 있는 넓은 호수다. 물가 둘레를 돌로 단단하게 쌓았다.',
          question: '물가 둘레를 돌로 쌓은 까닭은 무엇일까요?',
          choices: ['땅이 물에 깎이지 않게', '물고기를 가두려고', '물을 따뜻하게 하려고'], answer: 0 },
        { yaw: -27, pitch: 6, title: '멀리 보이는 뾰족한 탑',
          caption: '호수 건너편에 뾰족한 탑이 여러 개 보인다. 오래된 교회의 탑이다.',
          question: '멀리서 길을 찾을 때 길잡이로 쓰기 좋은 것은 무엇일까요?',
          choices: ['높고 뾰족한 탑', '낮은 담장', '바닥의 무늬'], answer: 0 },
      ],
    },
    'business-district': {
      title: '새 업무 지구',
      icon: 'fi-rr-building',
      yaw: 0, pitch: 5,
      links: [
        { to: 'old-campus', yaw: 25, pitch: -22, label: '대학 마당으로 가기' },
        { to: 'lakeside', yaw: -25, pitch: -22, label: '호숫가로 가기' },
      ],
      spots: [
        { yaw: -40, pitch: 20, title: '유리로 덮은 높은 건물',
          caption: '겉을 유리로 덮은 높은 건물이다. 안쪽까지 햇빛이 많이 들어온다.',
          question: '대학 마당의 돌 건물과 비교하면 이 건물의 벽은 어떻게 다를까요?',
          choices: ['유리로 덮여 있다', '돌을 쌓았다', '나무로 지었다'], answer: 0 },
        { yaw: 108, pitch: 14, title: '높은 건물이 모인 곳',
          caption: '회사 건물이 한곳에 모여 있는 곳을 업무 지구라고 한다.',
          question: '높은 회사 건물이 한곳에 모이면 무엇이 많아질까요?',
          choices: ['일하러 오는 사람', '논과 밭', '산과 숲'], answer: 0 },
      ],
    },
  },
};

// 아래 패널: 장소 버튼 줄, 돌리기·확대 버튼, 설명과 퀴즈. 보는 도구와는 콜백으로만 이어진다.
// hooks = { go(sceneId), turn(deg), zoom(dir) }
window.createTourPanel = function createTourPanel(root, hooks) {
  const tour = window.PANO_TOUR;
  const el = (tag, cls, text) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  };
  const iconButton = (icon, label, onClick, cls) => {
    const b = el('button', cls || 'tour-btn');
    b.type = 'button';
    b.setAttribute('aria-label', label);
    b.title = label;
    b.append(el('i', `fi ${icon}`), el('span', 'tour-btn-text', label));
    b.addEventListener('click', onClick);
    return b;
  };

  const places = el('div', 'tour-places');
  places.setAttribute('role', 'group');
  places.setAttribute('aria-label', '장소 고르기');
  const placeButtons = {};
  for (const [id, s] of Object.entries(tour.scenes)) {
    placeButtons[id] = iconButton(s.icon, s.title, () => hooks.go(id));
    places.append(placeButtons[id]);
  }

  const moves = el('div', 'tour-moves');
  moves.setAttribute('role', 'group');
  moves.setAttribute('aria-label', '둘러보기');
  moves.append(
    iconButton('fi-rr-rotate-left', '왼쪽으로 돌기', () => hooks.turn(-30), 'tour-btn tour-btn-icon'),
    iconButton('fi-rr-rotate-right', '오른쪽으로 돌기', () => hooks.turn(30), 'tour-btn tour-btn-icon'),
    iconButton('fi-rr-zoom-in', '가까이 보기', () => hooks.zoom(-1), 'tour-btn tour-btn-icon'),
    iconButton('fi-rr-zoom-out', '멀리 보기', () => hooks.zoom(1), 'tour-btn tour-btn-icon'),
  );

  const info = el('section', 'tour-info');
  info.setAttribute('aria-live', 'polite');
  info.id = 'tour-info';

  root.append(places, moves, info);

  function showScene(id) {
    const s = tour.scenes[id];
    for (const [k, b] of Object.entries(placeButtons)) b.setAttribute('aria-pressed', String(k === id));
    info.replaceChildren(
      el('h2', null, s.title),
      el('p', 'tour-hint', '사진 속 동그란 단추를 누르면 설명과 질문이 나오고, 화살표 단추를 누르면 다른 장소로 간다.'),
    );
  }

  function showSpot(spot) {
    const feedback = el('p', 'tour-feedback');
    const list = el('div', 'tour-choices');
    list.setAttribute('role', 'group');
    list.setAttribute('aria-label', spot.question);
    spot.choices.forEach((text, i) => {
      const b = el('button', 'tour-btn tour-choice', text);
      b.type = 'button';
      b.addEventListener('click', () => {
        const ok = i === spot.answer;
        feedback.replaceChildren(
          el('i', `fi ${ok ? 'fi-rr-check' : 'fi-rr-cross-small'}`),
          document.createTextNode(ok ? ' 맞아요!' : ' 다시 생각해 봐요.'),
        );
        feedback.dataset.ok = String(ok);
      });
      list.append(b);
    });
    info.replaceChildren(
      el('h2', null, spot.title),
      el('p', 'tour-caption', spot.caption),
      el('p', 'tour-question', spot.question),
      list,
      feedback,
    );
    const first = list.querySelector('button');
    if (first) first.focus({ preventScroll: true });
  }

  return { showScene, showSpot };
};

// 사진 위에 얹는 단추(장소 이동·설명). 두 도구 모두 이 단추를 그대로 쓴다.
window.createTourMarker = function createTourMarker(kind, label, onActivate) {
  const b = document.createElement('button');
  b.type = 'button';
  b.className = `tour-marker tour-marker-${kind}`;
  b.setAttribute('aria-label', label);
  b.title = label;
  const i = document.createElement('i');
  i.className = `fi ${kind === 'link' ? 'fi-rr-arrow-small-right' : 'fi-rr-info'}`;
  b.append(i);
  if (kind === 'link') {
    const t = document.createElement('span');
    t.className = 'tour-marker-label';
    t.textContent = label;
    b.append(t);
  }
  b.addEventListener('click', (e) => { e.stopPropagation(); onActivate(); });
  // 끌어서 둘러보는 동작이 단추 위에서 시작돼도 보기 도구가 가로채지 않게 한다.
  for (const ev of ['mousedown', 'pointerdown', 'touchstart', 'wheel']) {
    b.addEventListener(ev, (e) => e.stopPropagation(), { passive: true });
  }
  return b;
};
