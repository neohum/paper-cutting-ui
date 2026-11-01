/*
 * {{게임 제목}} — 게임 규칙과 그림
 * 성취기준: {{성취기준 코드}} {{성취기준 요지}}
 * 핵심 동작(학습 행동과 같은 것): {{예: 지시약을 넣고 색 변화를 보고 분류한다}}
 *
 * 순서대로 채운다: 1 내용 → 2 판 준비 → 3 조작 → 4 그림 → 5 정리 → 6 이기는 길.
 */
(function () {
  'use strict';

  // 1. 내용 — 교과 내용은 여기 한 곳에만 둔다. 사실은 교과서·교육과정으로 확인한다.
  var ITEMS = [
    // { id: 'a', name: '...', answer: '...', why: '...' },
  ];

  // 2. 판 준비
  function setup(game) {
    game.state.queue = game.shuffle(ITEMS);
    game.state.index = 0;
    game.state.firstTry = 0;
  }

  function current(game) { return game.state.queue[game.state.index]; }

  // 3. 조작 — 버튼과 키는 같은 함수를 부른다.
  function answer(game, choice) {
    if (game.busy) return;
    var item = current(game);
    var ok = item.answer === choice;
    game.log.push({ item: item.name, choice: choice, ok: ok });
    game.sound.play(ok ? 'ok' : 'no');
    game.announce(ok ? '맞았어요. ' + item.why : '다시 생각해 보세요.');
    if (ok) {
      game.state.index += 1;
      if (game.state.index >= game.state.queue.length) game.go('debrief');
    }
  }

  // 4. 그림 — 코드로 그리거나 CC0 이미지를 assets/ 에 넣고 credits.md 에 적는다.
  function draw(game, ctx, w, h) {
    ctx.fillStyle = '#eef3f8';
    ctx.fillRect(0, 0, w, h);
  }

  // 5. 정리 — 결과 표, 정리 질문(답은 접어 두기), 교사용 다음 차시 연결.
  function enterDebrief(game) {
    document.getElementById('debrief-body').textContent = '{{정리 내용}}';
  }

  // 6. 이기는 길 — 검사 스크립트가 실제 클릭/키로 끝까지 가는 데 쓴다.
  function nextTestAction(game, mode) {
    if (game.phase !== 'play') return null;
    if (game.busy) return { wait: 120 };
    var item = current(game);
    return mode === 'keyboard' ? { key: 'KeyA' } : { click: '[data-choice="' + item.answer + '"]' };
  }

  LessonGame.create({
    canvas: '#stage',
    screens: { intro: '#intro', play: '#play', debrief: '#debrief' },
    live: '#live',
    setup: setup,
    draw: draw,
    enterDebrief: enterDebrief,
    keys: {},
    nextTestAction: nextTestAction
  });
})();
