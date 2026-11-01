/*
 * 용액 탐정: 산성일까 염기성일까 — 게임 규칙과 그림
 * 성취기준: [6과09-01] 지시약 반응으로 용액을 산성과 염기성으로 나누어 보기 (2022 개정, 초등 5~6학년군 '산과 염기')
 *   - kr-leanmap search_standards 로 코드·단원 확인 (원문은 옮기지 않음)
 * 핵심 동작: 지시약을 골라 써서 색 변화를 관찰하고(증거 모으기), 그 증거로 산성/염기성 바구니에 분류한다.
 *   = 성취기준 동사 "관찰하여 분류한다" 그대로.
 * 이기는 조건: 6병(산성 3, 염기성 3, 시드로 섞음)을 모두 바르게 분류한다.
 * 틀렸을 때: 정답을 말하지 않고, 방금 관찰한 결과와 그 지시약의 규칙을 다시 보게 한다. 같은 병을 다시 분류한다.
 * 분류 조건: 지시약을 한 번 이상 써야 분류 버튼이 열리고, 색이 변한 관찰이 하나 이상 있어야 분류를 받는다
 *   ("변화 없음"만으로 단정하지 않기 — 정리 질문 2와 같은 생각).
 * 걸리는 시간: 5~7분.
 * 정리 질문: 사실(붉은 리트머스 → 푸름은?), 이유(변화 없음 하나로 단정할 수 있나), 넓히기(생활 속 예, [6과09-03] 연결).
 * 그림·소리: 모두 캔버스 코드와 Web Audio 로 만듦. 파일 자료 없음.
 */
(function () {
  'use strict';

  // 1. 내용 -------------------------------------------------------------
  // liquid: 용액 자체의 색, cabbage: 붉은 양배추 지시약을 넣었을 때 색과 그 이름.
  var SOLUTIONS = [
    { id: 'vinegar', name: '식초', kind: 'acid', liquid: '#f3e7c4', cabbage: '#e0508a', cabbageName: '붉은색(분홍)' },
    { id: 'lemon', name: '레몬즙', kind: 'acid', liquid: '#f5e79a', cabbage: '#e24a74', cabbageName: '붉은색' },
    { id: 'soda', name: '탄산수', kind: 'acid', liquid: '#e6f2f6', cabbage: '#cf6aa6', cabbageName: '연한 붉은색' },
    { id: 'hcl', name: '묽은 염산', kind: 'acid', liquid: '#eaf1f4', cabbage: '#d8333f', cabbageName: '진한 붉은색' },
    { id: 'soap', name: '비눗물', kind: 'base', liquid: '#eceef4', cabbage: '#3f86c8', cabbageName: '푸른색' },
    { id: 'limewater', name: '석회수', kind: 'base', liquid: '#edf2ec', cabbage: '#9cbf3a', cabbageName: '연두색·노란색' },
    { id: 'cleaner', name: '유리 세정제', kind: 'base', liquid: '#bfdff3', cabbage: '#38a56c', cabbageName: '초록색' },
    { id: 'naoh', name: '묽은 수산화 나트륨 용액', kind: 'base', liquid: '#eaf1f4', cabbage: '#d9c43a', cabbageName: '노란색' }
  ];

  var KIND_NAME = { acid: '산성 용액', base: '염기성 용액' };

  // 각 지시약: 종이(strip)인지 용액(drop)인지, 처음 색, 산성/염기성에서의 결과와 규칙 문장.
  var INDICATORS = {
    blueLitmus: {
      name: '푸른 리트머스 종이', short: '푸른 종이', form: 'strip', start: '#4a78c8',
      result: function (s) { return s.kind === 'acid' ? { color: '#d0505a', text: '푸른색 → 붉은색으로 변했다', changed: true } : { color: '#4a78c8', text: '변화 없음 (푸른색 그대로)', changed: false }; },
      rule: '푸른 리트머스 종이는 산성 용액에서 붉게 변해요.'
    },
    redLitmus: {
      name: '붉은 리트머스 종이', short: '붉은 종이', form: 'strip', start: '#d0505a',
      result: function (s) { return s.kind === 'base' ? { color: '#4a78c8', text: '붉은색 → 푸른색으로 변했다', changed: true } : { color: '#d0505a', text: '변화 없음 (붉은색 그대로)', changed: false }; },
      rule: '붉은 리트머스 종이는 염기성 용액에서 푸르게 변해요.'
    },
    phenol: {
      name: '페놀프탈레인 용액', short: '페놀프탈레인', form: 'drop', start: '#f7f7f7',
      result: function (s) { return s.kind === 'base' ? { color: '#d6338f', text: '무색 → 붉은색으로 변했다', changed: true } : { color: s.liquid, text: '변화 없음 (색이 그대로)', changed: false }; },
      rule: '페놀프탈레인 용액은 염기성 용액에서 붉게 변하고, 산성 용액에서는 변하지 않아요.'
    },
    cabbage: {
      name: '붉은 양배추 지시약', short: '양배추', form: 'drop', start: '#7a4a9a',
      result: function (s) { return { color: s.cabbage, text: '보라색 → ' + s.cabbageName + '으로 변했다', changed: true }; },
      rule: '붉은 양배추 지시약은 산성 용액에서 붉은 계열, 염기성 용액에서 푸른색·초록색·노란색 계열로 변해요.'
    }
  };
  var TOOL_ORDER = ['blueLitmus', 'redLitmus', 'phenol', 'cabbage'];
  var ROUNDS_PER_KIND = 3;

  // 2. 판 준비 ----------------------------------------------------------
  function setup(game) {
    var acids = game.shuffle(SOLUTIONS.filter(function (s) { return s.kind === 'acid'; })).slice(0, ROUNDS_PER_KIND);
    var bases = game.shuffle(SOLUTIONS.filter(function (s) { return s.kind === 'base'; })).slice(0, ROUNDS_PER_KIND);
    var st = game.state;
    st.queue = game.shuffle(acids.concat(bases));
    st.index = 0;
    st.sorted = { acid: [], base: [] };
    st.anim = { p: 1, carry: 0, shake: 0, carryTo: null };
    startRound(game);
  }

  function current(game) { return game.state.queue[game.state.index]; }
  function hasChange(st) { return st.tests.some(function (t) { return t.changed; }); }

  function startRound(game) {
    var st = game.state;
    var s = current(game);
    st.tests = [];
    st.tries = 0;
    st.anim.p = 1;
    st.anim.carry = 0;
    st.anim.carryTo = null;
    document.getElementById('solution-name').textContent = s.name;
    document.getElementById('progress').textContent = (st.index + 1) + ' / ' + st.queue.length;
    setFeedback('', '');
    renderNotes(game);
    syncButtons(game);
    game.announce((st.index + 1) + '번째 용액, ' + s.name + '. 지시약을 골라 관찰하세요.');
  }

  // 3. 조작 -------------------------------------------------------------
  function useIndicator(game, toolId) {
    if (game.phase !== 'play' || game.busy) return;
    var st = game.state;
    var s = current(game);
    var ind = INDICATORS[toolId];
    var res = ind.result(s);
    var already = st.tests.some(function (t) { return t.tool === toolId; });
    if (already) {
      game.announce(ind.name + ': ' + res.text + ' (이미 관찰함)');
      return;
    }
    st.tests.push({ tool: toolId, color: res.color, text: res.text, changed: res.changed });
    game.sound.play('tap');
    st.anim.p = 0;
    game.tween(st.anim, 'p', 1, 0.8, function () {
      renderNotes(game);
      syncButtons(game);
      game.announce(ind.name + ': ' + res.text);
    });
    syncButtons(game);
  }

  function classify(game, choice) {
    if (game.phase !== 'play' || game.busy) return;
    var st = game.state;
    if (!st.tests.length) {
      setFeedback('먼저 지시약을 하나 이상 써서 관찰해 보세요.', 'bad');
      return;
    }
    // "변화 없음"만으로는 산성도 염기성도 아닌 용액일 수 있다: 색이 변한 증거가 있어야 분류한다.
    if (!hasChange(st)) {
      var nudge = '지금은 "변화 없음"만 보았어요. 변화가 없으면 확실히 말할 수 없어요. 다른 지시약으로 색이 변하는지 한 번 더 확인해 보세요.';
      setFeedback(nudge, 'bad');
      game.announce(nudge);
      return;
    }
    var s = current(game);
    st.tries += 1;
    if (choice === s.kind) {
      game.sound.play('ok');
      game.log.push({
        name: s.name, kind: s.kind, firstTry: st.tries === 1,
        notes: st.tests.map(function (t) { return INDICATORS[t.tool].name + ': ' + t.text; })
      });
      setFeedback('맞았어요! ' + s.name + '은(는) ' + KIND_NAME[s.kind] + '이에요.', 'good');
      game.announce('맞았어요. ' + s.name + '은 ' + KIND_NAME[s.kind] + '입니다.');
      st.anim.carryTo = choice;
      syncButtons(game, true);
      game.tween(st.anim, 'carry', 1, 0.7, function () {
        st.sorted[choice].push(s);
        st.index += 1;
        if (st.index >= st.queue.length) {
          game.sound.play('win');
          game.go('debrief');
        } else {
          startRound(game);
        }
      });
    } else {
      game.sound.play('no');
      var t = st.tests[st.tests.length - 1];
      var ind = INDICATORS[t.tool];
      var msg = '다시 살펴봐요. 관찰 기록 "' + ind.name + ': ' + t.text + '" — ' + ind.rule;
      setFeedback(msg, 'bad');
      game.announce(msg);
      st.anim.shake = 1;
      game.tween(st.anim, 'shake', 0, 0.45);
    }
  }

  function setFeedback(text, tone) {
    var el = document.getElementById('feedback');
    el.textContent = text;
    el.className = 'feedback' + (tone ? ' ' + tone : '');
  }

  function renderNotes(game) {
    var ul = document.getElementById('notes');
    ul.innerHTML = '';
    var done = game.state.tests.filter(function (t, i, arr) { return i < arr.length - 1 || game.state.anim.p >= 1; });
    if (!done.length) {
      var li = document.createElement('li');
      li.className = 'empty';
      li.textContent = '아직 관찰한 것이 없어요.';
      ul.appendChild(li);
      return;
    }
    done.forEach(function (t) {
      var item = document.createElement('li');
      item.textContent = INDICATORS[t.tool].name + ': ' + t.text;
      ul.appendChild(item);
    });
  }

  function syncButtons(game, lockAll) {
    var st = game.state;
    var ready = st.tests.length > 0 && st.anim.p >= 1 && !lockAll;
    document.querySelectorAll('[data-choice]').forEach(function (b) { b.disabled = !ready; });
    document.querySelectorAll('[data-tool]').forEach(function (b) {
      var used = st.tests.some(function (t) { return t.tool === b.getAttribute('data-tool'); });
      b.classList.toggle('used', used);
      b.setAttribute('aria-pressed', String(used));
      b.disabled = !!lockAll;
    });
  }

  document.getElementById('play').addEventListener('click', function (ev) {
    var game = window.lessonGame;
    var tool = ev.target.closest('[data-tool]');
    var choice = ev.target.closest('[data-choice]');
    if (tool) useIndicator(game, tool.getAttribute('data-tool'));
    else if (choice) classify(game, choice.getAttribute('data-choice'));
  });

  // 4. 그림 -------------------------------------------------------------
  function hexRgb(h) {
    var n = parseInt(h.slice(1), 16);
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  }
  function mix(a, b, t) {
    var x = hexRgb(a), y = hexRgb(b);
    return 'rgb(' + [0, 1, 2].map(function (i) { return Math.round(x[i] + (y[i] - x[i]) * t); }).join(',') + ')';
  }

  function drawBasket(ctx, x, y, bw, bh, label, tone, items) {
    ctx.save();
    ctx.fillStyle = 'rgba(255,255,255,.88)';
    ctx.beginPath(); ctx.roundRect(x - bw / 2, y - bh, bw, bh, 12); ctx.fill();
    ctx.strokeStyle = tone; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.roundRect(x - bw / 2, y - bh, bw, bh, 12); ctx.stroke();
    // 담긴 병
    items.forEach(function (s, i) {
      var bx = x - bw / 2 + 14 + i * 22;
      ctx.fillStyle = s.liquid; ctx.strokeStyle = '#3a4150'; ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.roundRect(bx, y - bh + 8, 16, Math.min(26, bh - 30), 4); ctx.fill(); ctx.stroke();
    });
    ctx.fillStyle = tone;
    ctx.font = '700 15px system-ui, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(label, x, y - 8);
    ctx.restore();
  }

  function drawBeaker(ctx, cx, baseY, bw, bh, liquid, label, t) {
    var x = cx - bw / 2, top = baseY - bh;
    // 용액
    var level = top + bh * 0.32;
    ctx.fillStyle = liquid;
    ctx.beginPath(); ctx.roundRect(x + 4, level, bw - 8, baseY - level - 4, [0, 0, 10, 10]); ctx.fill();
    // 밝은 용액도 보이도록 수면선과 옅은 그림자
    ctx.fillStyle = 'rgba(40,70,100,.10)';
    ctx.fillRect(x + 4, baseY - (baseY - level) * 0.35, bw - 8, (baseY - level) * 0.35 - 4);
    ctx.strokeStyle = 'rgba(40,70,100,.45)'; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(x + 4, level); ctx.lineTo(x + bw - 4, level); ctx.stroke();
    // 거품
    ctx.fillStyle = 'rgba(255,255,255,.7)';
    for (var i = 0; i < 4; i++) {
      var py = baseY - 10 - ((t * 22 + i * 19) % (baseY - level - 16));
      ctx.beginPath(); ctx.arc(x + bw * (0.25 + i * 0.17), py, 2.5, 0, Math.PI * 2); ctx.fill();
    }
    // 유리
    ctx.strokeStyle = '#3a4150'; ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(x - 6, top); ctx.lineTo(x, top + 6); ctx.lineTo(x, baseY - 10);
    ctx.quadraticCurveTo(x, baseY, x + 10, baseY); ctx.lineTo(x + bw - 10, baseY);
    ctx.quadraticCurveTo(x + bw, baseY, x + bw, baseY - 10); ctx.lineTo(x + bw, top);
    ctx.stroke();
    // 눈금
    ctx.lineWidth = 1.5;
    for (var k = 1; k <= 3; k++) {
      var gy = top + bh * (0.25 * k + 0.1);
      ctx.beginPath(); ctx.moveTo(x + bw - 16, gy); ctx.lineTo(x + bw - 4, gy); ctx.stroke();
    }
    // 이름표
    ctx.font = '700 ' + (label.length > 8 ? 11 : 14) + 'px system-ui, sans-serif';
    var tw = Math.min(ctx.measureText(label).width + 16, bw + 40);
    ctx.fillStyle = '#ffffff'; ctx.strokeStyle = '#3a4150'; ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.roundRect(cx - tw / 2, top + bh * 0.48, tw, 24, 6); ctx.fill(); ctx.stroke();
    ctx.fillStyle = '#1d2430'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(label, cx, top + bh * 0.48 + 12, bw + 30);
    ctx.textBaseline = 'alphabetic';
  }

  function drawResult(ctx, test, ind, x, y, sw, sh, reveal) {
    if (ind.form === 'strip') {
      ctx.fillStyle = ind.start;
      ctx.fillRect(x - sw * 0.18, y, sw * 0.36, sh);
      ctx.fillStyle = mix(ind.start, test.color, reveal);
      ctx.fillRect(x - sw * 0.18, y + sh * 0.5, sw * 0.36, sh * 0.5);
      ctx.strokeStyle = '#3a4150'; ctx.lineWidth = 1.5;
      ctx.strokeRect(x - sw * 0.18, y, sw * 0.36, sh);
    } else {
      var tw = sw * 0.42;
      ctx.fillStyle = mix(ind.start, test.color, reveal);
      ctx.beginPath(); ctx.roundRect(x - tw / 2, y + sh * 0.35, tw, sh * 0.65, [0, 0, tw / 2, tw / 2]); ctx.fill();
      ctx.strokeStyle = '#3a4150'; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.roundRect(x - tw / 2, y, tw, sh, [3, 3, tw / 2, tw / 2]); ctx.stroke();
    }
  }

  function draw(game, ctx, w, h) {
    // 실험실 벽과 실험대
    var bench = h * 0.8;
    var g = ctx.createLinearGradient(0, 0, 0, bench);
    g.addColorStop(0, '#e9f1f6'); g.addColorStop(1, '#d7e4ec');
    ctx.fillStyle = g; ctx.fillRect(0, 0, w, bench);
    ctx.fillStyle = '#b98b5e'; ctx.fillRect(0, bench, w, h - bench);
    ctx.fillStyle = '#a07549'; ctx.fillRect(0, bench, w, 6);
    // 벽 타일
    ctx.strokeStyle = 'rgba(80,110,130,.12)'; ctx.lineWidth = 1;
    for (var tx = 0; tx < w; tx += 40) { ctx.beginPath(); ctx.moveTo(tx, 0); ctx.lineTo(tx, bench); ctx.stroke(); }
    for (var ty = 0; ty < bench; ty += 40) { ctx.beginPath(); ctx.moveTo(0, ty); ctx.lineTo(w, ty); ctx.stroke(); }

    var st = game.state;
    var bw = Math.min(140, w * 0.3);
    var acidX = Math.max(bw / 2 + 8, w * 0.14), baseX = Math.min(w - bw / 2 - 8, w * 0.86);
    var basketH = Math.min(64, h - bench - 10);
    drawBasket(ctx, acidX, h - 4, bw, basketH, '산성', '#c2414b', st.sorted ? st.sorted.acid : []);
    drawBasket(ctx, baseX, h - 4, bw, basketH, '염기성', '#3b67b8', st.sorted ? st.sorted.base : []);

    if (game.phase !== 'play' || !st.queue) {
      ctx.fillStyle = '#3a4150';
      ctx.font = '700 ' + Math.round(Math.min(26, w / 14)) + 'px system-ui, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(game.phase === 'debrief' ? '모든 용액을 분류했어요!' : '용액 탐정 실험실', w / 2, h * 0.38);
      return;
    }

    var s = current(game);
    if (!s) return;
    var beakW = Math.min(110, w * 0.26), beakH = Math.min(150, h * 0.42);
    var homeX = w * 0.34, homeY = bench - 2;
    var a = st.anim;
    var cx = homeX, cy = homeY;
    if (a.carryTo) {
      var tx2 = a.carryTo === 'acid' ? acidX : baseX;
      cx = homeX + (tx2 - homeX) * a.carry;
      cy = homeY - Math.sin(a.carry * Math.PI) * 50 + (h - 30 - homeY) * a.carry;
    }
    cx += Math.sin(game.time * 50) * 8 * a.shake;
    ctx.save();
    if (a.carryTo) { ctx.globalAlpha = 1 - a.carry * 0.7; }
    drawBeaker(ctx, cx, cy, beakW, beakH, s.liquid, s.name, game.time);
    ctx.restore();

    // 관찰 결과 받침: 지시약 4칸
    var trayX0 = w * 0.55, trayX1 = w * 0.97;
    var slotW = (trayX1 - trayX0) / 4, slotH = Math.min(70, h * 0.2);
    var trayY = h * 0.14;
    ctx.fillStyle = 'rgba(255,255,255,.75)';
    ctx.beginPath(); ctx.roundRect(trayX0 - 6, trayY - 10, trayX1 - trayX0 + 12, slotH + 40, 10); ctx.fill();
    ctx.font = '600 ' + (w < 500 ? 10 : 12) + 'px system-ui, sans-serif';
    ctx.textAlign = 'center';
    TOOL_ORDER.forEach(function (id, i) {
      var sx = trayX0 + slotW * (i + 0.5);
      var test = st.tests.filter(function (t) { return t.tool === id; })[0];
      ctx.fillStyle = '#4c5566';
      ctx.fillText(INDICATORS[id].short, sx, trayY + slotH + 22, slotW - 2);
      if (!test) {
        ctx.strokeStyle = 'rgba(58,65,80,.3)'; ctx.setLineDash([4, 4]); ctx.lineWidth = 1.5;
        ctx.strokeRect(sx - slotW * 0.3, trayY, slotW * 0.6, slotH);
        ctx.setLineDash([]);
        return;
      }
      var isNew = test === st.tests[st.tests.length - 1] && a.p < 1;
      if (isNew) {
        // 비커에서 받침으로 날아오는 동안 색이 드러난다
        var fx = cx + (sx - cx) * a.p, fy = (cy - beakH * 0.6) + (trayY - (cy - beakH * 0.6)) * a.p;
        drawResult(ctx, test, INDICATORS[id], fx, fy, slotW, slotH, a.p);
      } else {
        drawResult(ctx, test, INDICATORS[id], sx, trayY, slotW, slotH, 1);
      }
    });
  }

  // 5. 정리 -------------------------------------------------------------
  function el(tag, text, cls) {
    var e = document.createElement(tag);
    if (text != null) e.textContent = text;
    if (cls) e.className = cls;
    return e;
  }

  function enterDebrief(game) {
    var body = document.getElementById('debrief-body');
    body.innerHTML = '';
    var first = game.log.filter(function (r) { return r.firstTry; }).length;
    body.appendChild(el('p', game.log.length + '병 중 ' + first + '병을 첫 시도에 맞혔어요. 모든 용액을 바르게 분류했어요.', 'score-line'));

    body.appendChild(el('h3', '내 실험 결과'));
    var t1 = el('table');
    var head = el('tr');
    ['용액', '관찰한 것', '분류', '결과'].forEach(function (x) { head.appendChild(el('th', x)); });
    t1.appendChild(head);
    game.log.forEach(function (r) {
      var tr = el('tr');
      tr.appendChild(el('td', r.name));
      tr.appendChild(el('td', r.notes.join(' / ')));
      tr.appendChild(el('td', r.kind === 'acid' ? '산성' : '염기성'));
      tr.appendChild(el('td', r.firstTry ? '첫 시도' : '다시 해서'));
      t1.appendChild(tr);
    });
    body.appendChild(t1);

    body.appendChild(el('h3', '지시약 규칙 정리'));
    var t2 = el('table');
    var h2 = el('tr');
    ['지시약', '산성 용액에서', '염기성 용액에서'].forEach(function (x) { h2.appendChild(el('th', x)); });
    t2.appendChild(h2);
    [['푸른 리트머스 종이', '붉은색으로 변함', '변화 없음'],
     ['붉은 리트머스 종이', '변화 없음', '푸른색으로 변함'],
     ['페놀프탈레인 용액', '변화 없음', '붉은색으로 변함'],
     ['붉은 양배추 지시약', '붉은 계열', '푸른색·초록색·노란색 계열']].forEach(function (row) {
      var tr = el('tr');
      row.forEach(function (c) { tr.appendChild(el('td', c)); });
      t2.appendChild(tr);
    });
    body.appendChild(t2);

    body.appendChild(el('h3', '생각 정리 질문'));
    [['1. 붉은 리트머스 종이를 푸르게 바꾸는 용액은 산성 용액일까요, 염기성 용액일까요?',
      '염기성 용액이에요.'],
     ['2. 푸른 리트머스 종이 하나만 썼는데 "변화 없음"이 나왔어요. 그 용액은 염기성이라고 바로 말할 수 있을까요? 왜 그럴까요?',
      '바로 말할 수 없어요. 산성 용액이 아니라는 것만 알 수 있어요. 산성도 염기성도 아닌 용액도 색이 변하지 않기 때문에, 붉은 리트머스 종이나 페놀프탈레인 용액으로 한 번 더 확인해야 해요.'],
     ['3. 우리 생활에서 산성 용액과 염기성 용액을 쓰는 예를 하나씩 찾아볼까요?',
      '예: 생선 요리에 식초나 레몬즙을 뿌려 비린내를 줄여요(산성). 비누나 세제로 기름때를 씻어요(염기성). 짝과 다른 예를 더 찾아보세요.']
    ].forEach(function (q) {
      var d = el('details');
      d.appendChild(el('summary', q[0]));
      d.appendChild(el('p', q[1]));
      body.appendChild(d);
    });

    var teacher = el('div', null, 'teacher');
    teacher.appendChild(el('p', '선생님께: 다음 차시 [6과09-02]에서는 산성 용액과 염기성 용액을 섞을 때의 변화를 붉은 양배추 지시약으로 이어 관찰합니다. 실제 실험에서는 보안경과 장갑을 쓰고, 용액을 맛보거나 냄새를 직접 맡지 않도록 지도하세요. 묽은 염산과 묽은 수산화 나트륨 용액은 선생님이 준비하고 관리합니다.'));
    teacher.appendChild(el('p', '자료 출처: 이 게임의 그림과 소리는 모두 코드로 만들었습니다.'));
    body.appendChild(teacher);
  }

  // 6. 이기는 길 --------------------------------------------------------
  function nextTestAction(game, mode) {
    if (game.phase !== 'play') return null;
    var st = game.state;
    if (game.busy || st.anim.carryTo) return { wait: 120 };
    var s = current(game);
    if (!hasChange(st)) {
      // 키보드 길은 리트머스 종이를 차례로 써 본다: 푸른 종이가 그대로면 붉은 종이로 확인.
      if (mode === 'keyboard') return { key: st.tests.length ? 'Digit2' : 'Digit1' };
      return { click: '[data-tool="cabbage"]' };
    }
    if (mode === 'keyboard') return { key: s.kind === 'acid' ? 'ArrowLeft' : 'ArrowRight' };
    return { click: '[data-choice="' + s.kind + '"]' };
  }

  var keys = {
    Digit1: function (g) { useIndicator(g, 'blueLitmus'); },
    Digit2: function (g) { useIndicator(g, 'redLitmus'); },
    Digit3: function (g) { useIndicator(g, 'phenol'); },
    Digit4: function (g) { useIndicator(g, 'cabbage'); },
    ArrowLeft: function (g) { classify(g, 'acid'); },
    ArrowRight: function (g) { classify(g, 'base'); }
  };
  keys.Numpad1 = keys.Digit1; keys.Numpad2 = keys.Digit2; keys.Numpad3 = keys.Digit3; keys.Numpad4 = keys.Digit4;

  LessonGame.create({
    canvas: '#stage',
    screens: { intro: '#intro', play: '#play', debrief: '#debrief' },
    live: '#live',
    setup: setup,
    draw: draw,
    enterDebrief: enterDebrief,
    keys: keys,
    nextTestAction: nextTestAction
  });
})();
