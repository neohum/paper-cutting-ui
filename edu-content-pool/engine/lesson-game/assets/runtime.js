/*
 * 수업 게임 실행기 (lesson-game runtime)
 * 의존성 없음 · 일반 <script src> 로 불러온다 (file:// 에서는 ES 모듈이 막힌다).
 *
 * 쓰는 법:
 *   LessonGame.create({
 *     canvas: '#stage',                       // 그림을 그릴 <canvas>
 *     screens: { intro: '#intro', play: '#play', debrief: '#debrief' },
 *     live: '#live',                          // 화면낭독기용 aria-live 영역
 *     setup(game)            { ... }          // 새 판마다 game.state 를 채운다
 *     update(game, dt)       { ... }          // dt 는 초 단위, 최대 0.05
 *     draw(game, ctx, w, h)  { ... }          // w,h 는 CSS 픽셀
 *     enterDebrief(game)     { ... }          // 정리 화면 내용을 채운다
 *     keys: { Digit1(game) {...}, ArrowLeft(game) {...} },
 *     nextTestAction(game, mode) { ... }      // 검사 스크립트가 부르는 이기는 길 (아래 참고)
 *   });
 *
 * nextTestAction 이 돌려줄 수 있는 값 (mode 는 'pointer' 또는 'keyboard'):
 *   { click: 'CSS 선택자' }   실제 클릭
 *   { key: 'Digit1' }        실제 키 입력 (KeyboardEvent.code)
 *   { wait: 200 }            애니메이션이 끝날 때까지 기다린다 (ms)
 *   null                     더 할 일이 없다 (정리 화면이어야 한다)
 *
 * HTML 쪽 약속: data-action="start" | "restart" | "mute" 버튼은 실행기가 직접 연결한다.
 * 저장소(localStorage 등)·네트워크·학생 정보는 쓰지 않는다.
 */
(function (global) {
  'use strict';

  function $(sel) { return typeof sel === 'string' ? document.querySelector(sel) : sel; }

  // 시드가 있는 난수: 같은 ?seed= 이면 같은 문제 순서가 나온다 (검사·재현용).
  function seeded(seed) {
    var a = seed >>> 0;
    return function () {
      a = (a + 0x6D2B79F5) | 0;
      var t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  function shuffle(list, rand) {
    var a = list.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(rand() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  // 코드로 만드는 효과음: 파일도, 외부 요청도 없다.
  function makeSound() {
    var ctx = null;
    var muted = false;
    var notes = {
      tap: [[520, 0.05]],
      ok: [[660, 0.09], [880, 0.12]],
      no: [[220, 0.18]],
      win: [[523, 0.1], [659, 0.1], [784, 0.1], [1046, 0.2]]
    };
    function ensure() {
      if (ctx) return ctx;
      var AC = global.AudioContext || global.webkitAudioContext;
      if (!AC) return null;
      try { ctx = new AC(); } catch (e) { ctx = null; }
      return ctx;
    }
    function play(kind) {
      if (muted) return;
      var c = ensure();
      var seq = notes[kind];
      if (!c || !seq) return;
      var t = c.currentTime;
      seq.forEach(function (n) {
        var osc = c.createOscillator();
        var gain = c.createGain();
        osc.type = 'triangle';
        osc.frequency.value = n[0];
        gain.gain.setValueAtTime(0.0001, t);
        gain.gain.exponentialRampToValueAtTime(0.12, t + 0.01);
        gain.gain.exponentialRampToValueAtTime(0.0001, t + n[1]);
        osc.connect(gain).connect(c.destination);
        osc.start(t);
        osc.stop(t + n[1] + 0.02);
        t += n[1] * 0.9;
      });
    }
    return {
      play: play,
      unlock: function () { var c = ensure(); if (c && c.state === 'suspended') c.resume(); },
      get muted() { return muted; },
      set muted(v) { muted = !!v; }
    };
  }

  function create(cfg) {
    var canvas = $(cfg.canvas);
    var ctx = canvas.getContext('2d');
    var screens = {};
    Object.keys(cfg.screens || {}).forEach(function (k) { screens[k] = $(cfg.screens[k]); });
    var live = $(cfg.live);
    var params = new URLSearchParams(global.location.search);
    var seed = parseInt(params.get('seed'), 10);
    if (!isFinite(seed)) seed = Math.floor(Math.random() * 1e9);
    var reduced = global.matchMedia && global.matchMedia('(prefers-reduced-motion: reduce)').matches;

    var cssW = 0, cssH = 0;
    var tweens = [];
    var last = 0;

    var game = {
      phase: 'intro',
      seed: seed,
      rand: seeded(seed),
      time: 0,
      state: {},
      log: [],
      reducedMotion: reduced,
      sound: makeSound(),
      shuffle: function (list) { return shuffle(list, game.rand); },
      announce: function (msg) {
        if (!live) return;
        live.textContent = '';
        // 같은 문장을 두 번 알려도 낭독기가 다시 읽도록 한 틱 미룬다.
        setTimeout(function () { live.textContent = msg; }, 30);
      },
      // 값 하나를 시간에 따라 바꾼다. 움직임 줄이기 설정이면 바로 끝난다.
      tween: function (obj, key, to, seconds, done) {
        var dur = reduced ? 0.001 : seconds;
        tweens.push({ obj: obj, key: key, from: obj[key], to: to, t: 0, dur: dur, done: done });
      },
      get busy() { return tweens.length > 0; },
      go: function (phase) {
        game.phase = phase;
        Object.keys(screens).forEach(function (k) {
          if (screens[k]) screens[k].hidden = k !== phase;
        });
        document.documentElement.setAttribute('data-phase', phase);
        if (phase === 'debrief' && cfg.enterDebrief) cfg.enterDebrief(game);
        var focusTarget = screens[phase] && screens[phase].querySelector('[data-autofocus]');
        if (focusTarget) focusTarget.focus();
      },
      start: function () {
        game.sound.unlock();
        game.rand = seeded(game.seed);
        game.state = {};
        game.log = [];
        tweens = [];
        if (cfg.setup) cfg.setup(game);
        game.go('play');
      },
      restart: function () {
        game.seed = (game.seed + 1) >>> 0;
        game.start();
      },
      test: {
        nextAction: function (mode) {
          return cfg.nextTestAction ? cfg.nextTestAction(game, mode || 'pointer') : null;
        }
      }
    };

    function resize() {
      var box = canvas.getBoundingClientRect();
      var dpr = Math.min(global.devicePixelRatio || 1, 2);
      cssW = Math.max(1, Math.round(box.width));
      cssH = Math.max(1, Math.round(box.height));
      canvas.width = cssW * dpr;
      canvas.height = cssH * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function stepTweens(dt) {
      for (var i = tweens.length - 1; i >= 0; i--) {
        var tw = tweens[i];
        tw.t = Math.min(tw.dur, tw.t + dt);
        var p = tw.t / tw.dur;
        var e = p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;
        tw.obj[tw.key] = tw.from + (tw.to - tw.from) * e;
        if (tw.t >= tw.dur) {
          tweens.splice(i, 1);
          if (tw.done) tw.done();
        }
      }
    }

    function frame(now) {
      var dt = last ? Math.min(0.05, (now - last) / 1000) : 0;
      last = now;
      if (!document.hidden) {
        game.time += dt;
        stepTweens(dt);
        if (game.phase === 'play' && cfg.update) cfg.update(game, dt);
        ctx.clearRect(0, 0, cssW, cssH);
        if (cfg.draw) cfg.draw(game, ctx, cssW, cssH);
      }
      global.requestAnimationFrame(frame);
    }

    document.addEventListener('click', function (ev) {
      var el = ev.target.closest && ev.target.closest('[data-action]');
      if (!el) return;
      var act = el.getAttribute('data-action');
      if (act === 'start') game.start();
      else if (act === 'restart') game.restart();
      else if (act === 'mute') {
        game.sound.muted = !game.sound.muted;
        el.setAttribute('aria-pressed', String(game.sound.muted));
      }
    });

    document.addEventListener('keydown', function (ev) {
      if (game.phase !== 'play' || !cfg.keys) return;
      if (ev.target && /^(INPUT|TEXTAREA|SELECT)$/.test(ev.target.tagName)) return;
      var fn = cfg.keys[ev.code];
      if (fn) { ev.preventDefault(); fn(game); }
    });

    if (global.ResizeObserver) new ResizeObserver(resize).observe(canvas);
    global.addEventListener('resize', resize);
    resize();
    game.go('intro');
    global.requestAnimationFrame(frame);
    global.lessonGame = game;
    return game;
  }

  global.LessonGame = { create: create, seeded: seeded };
})(window);
