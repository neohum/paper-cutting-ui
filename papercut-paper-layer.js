/**
 * PaperCut UI - Paper Layer Engine
 * 요소의 실제 px 크기로 "받침 색지 + 위쪽 색지 + 장식" SVG 레이어를 그려 넣는다.
 * 칼선 버튼(.pc-svg-kirigami-btn)의 2단 번트 엄버 그림자 미학을 유동 폭 컴포넌트로 일반화한 것이다.
 *
 * 마크업:  <div data-pc-paper="sheet" data-pc-tone="mint"> ... </div>
 * API:     PaperCutUI.paper = { hydrate(root), refresh(el), destroy(el), variants, tones }
 *
 * - 고정 viewBox를 쓰지 않는다: 경로를 px로 직접 계산하므로 폭이 280이든 900이든 모서리가 일그러지지 않는다.
 * - JS가 없으면 아무것도 바뀌지 않는다(기존 CSS 모양 유지). 첫 그림이 끝난 요소에만 .is-paper-hydrated가 붙는다.
 * - 색은 CSS 변수(--pc-paper-fill/base/rim/accent)로만 전달한다: 상태 변화에 재그리기가 필요 없다.
 */
(function (root) {
  'use strict';

  var VARIANTS = ['sheet', 'field', 'pill', 'tab', 'ticket', 'track', 'knob', 'menu', 'deckle'];
  var TONES = ['mint', 'peach', 'lavender', 'buttercup', 'sky', 'rose', 'cream'];

  // 받침 색지가 위쪽 색지에서 어긋나는 거리(px). 변형마다 두께감이 다르다.
  var OFFSET = { sheet: 3, menu: 3, field: 1.5, pill: 2, tab: 2, ticket: 3, track: 1, knob: 2.5, deckle: 1.5 };
  // 변형별 기본 모서리 반지름. 값이 0이면 최대 둥근(pill/원형)을 뜻한다.
  var DEFAULT_RADIUS = { sheet: 14, menu: 12, field: 10, tab: 10, ticket: 12, pill: 0, track: 0, knob: 0, deckle: 4 };
  var RIM = 0.88;                 // 칼선 버튼과 같은 흰 림 굵기
  var HR = RIM / 2;               // 림이 상자 밖으로 나가지 않도록 안쪽으로 당기는 값
  // 자식을 가질 수 없는 요소: 레이어를 넣을 수 없다.
  var VOID = { INPUT: 1, SELECT: 1, TEXTAREA: 1, IMG: 1, HR: 1, BR: 1, PROGRESS: 1, METER: 1 };

  var DEFS_ID = 'pc-paper-defs';
  var SVG_NS = 'http://www.w3.org/2000/svg';
  var states = new WeakMap();     // el -> { svg, sig, variant, drawn }
  var io = null, ro = null, mo = null;
  var warned = new WeakSet();
  var destroyed = new WeakSet();  // destroy()된 요소: 대기 중인 지연 수화가 되살리지 못하게 한다

  /* ---------- 공유 필터 defs (문서 전체에 하나) ---------- */
  var LAYER_LOCK = [['position', 'absolute'], ['z-index', '-1'], ['display', 'block'], ['margin', '0'],
    ['padding', '0'], ['min-width', '0'], ['max-width', 'none'], ['min-height', '0'], ['max-height', 'none'],
    ['transform', 'none'], ['flex', 'none']];

  function ensureDefs() {
    if (document.getElementById(DEFS_ID) || !document.body) return;
    // 필터 영역은 userSpaceOnUse: 16px짜리 손잡이에서도 그림자가 잘리지 않는다.
    var region = 'filterUnits="userSpaceOnUse" x="-16" y="-16" width="3200" height="3200" color-interpolation-filters="sRGB"';
    var umber = 'flood-color="#2E1E14"';
    var html =
      '<defs>' +
      // 기본: 칼선 버튼과 동일한 2단 번트 엄버 + 흰 하이라이트
      '<filter id="pc-paper-sh" ' + region + '>' +
      '<feDropShadow dx="0" dy="1.2" stdDeviation="0.6" ' + umber + ' flood-opacity="0.48"/>' +
      '<feDropShadow dx="0" dy="3.5" stdDeviation="1.8" ' + umber + ' flood-opacity="0.25"/>' +
      '<feDropShadow dx="0" dy="-0.5" stdDeviation="0.3" flood-color="#FFFFFF" flood-opacity="0.95"/>' +
      '</filter>' +
      // 들림(hover, knob, menu): 더 길고 부드러운 그림자
      '<filter id="pc-paper-sh-lift" ' + region + '>' +
      '<feDropShadow dx="0" dy="1.6" stdDeviation="0.8" ' + umber + ' flood-opacity="0.48"/>' +
      '<feDropShadow dx="0" dy="5.5" stdDeviation="2.6" ' + umber + ' flood-opacity="0.28"/>' +
      '<feDropShadow dx="0" dy="-0.5" stdDeviation="0.3" flood-color="#FFFFFF" flood-opacity="0.95"/>' +
      '</filter>' +
      // 얕은 그림자(field): 크게 떠 있지 않고 종이 두께만 보인다
      '<filter id="pc-paper-sh-soft" ' + region + '>' +
      '<feDropShadow dx="0" dy="0.8" stdDeviation="0.5" ' + umber + ' flood-opacity="0.34"/>' +
      '<feDropShadow dx="0" dy="1.8" stdDeviation="1" ' + umber + ' flood-opacity="0.16"/>' +
      '<feDropShadow dx="0" dy="-0.5" stdDeviation="0.3" flood-color="#FFFFFF" flood-opacity="0.9"/>' +
      '</filter>' +
      // 안쪽 그림자(field 우물, track 홈): 알파를 뒤집어 흐린 뒤 원래 모양 안으로만 남긴다
      '<filter id="pc-paper-sh-inset" ' + region + '>' +
      '<feComponentTransfer in="SourceAlpha" result="inv"><feFuncA type="table" tableValues="1 0"/></feComponentTransfer>' +
      '<feGaussianBlur in="inv" stdDeviation="1.1" result="blur"/>' +
      '<feOffset in="blur" dx="0" dy="1.3" result="off"/>' +
      '<feFlood ' + umber + ' flood-opacity="0.34" result="tint"/>' +
      '<feComposite in="tint" in2="off" operator="in" result="shade"/>' +
      '<feComposite in="shade" in2="SourceAlpha" operator="in" result="inner"/>' +
      '<feMerge><feMergeNode in="SourceGraphic"/><feMergeNode in="inner"/></feMerge>' +
      '</filter>' +
      '</defs>';
    var svg = document.createElementNS(SVG_NS, 'svg');
    svg.id = DEFS_ID;
    svg.setAttribute('width', '0');
    svg.setAttribute('height', '0');
    svg.setAttribute('aria-hidden', 'true');
    svg.setAttribute('focusable', 'false');
    svg.setAttribute('style', 'position:absolute;width:0;height:0;overflow:hidden');
    svg.innerHTML = html;
    document.body.appendChild(svg);
  }

  /* ---------- 경로 계산 (모두 px) ---------- */
  function f(n) { return Math.round(n * 100) / 100; }

  // 모서리별 반지름이 다른 둥근 사각형. 시계 방향.
  function rr(x0, y0, x1, y1, tl, tr, br, bl) {
    var d = 'M' + f(x0 + tl) + ' ' + f(y0) + 'H' + f(x1 - tr);
    if (tr) d += 'A' + f(tr) + ' ' + f(tr) + ' 0 0 1 ' + f(x1) + ' ' + f(y0 + tr);
    d += 'V' + f(y1 - br);
    if (br) d += 'A' + f(br) + ' ' + f(br) + ' 0 0 1 ' + f(x1 - br) + ' ' + f(y1);
    d += 'H' + f(x0 + bl);
    if (bl) d += 'A' + f(bl) + ' ' + f(bl) + ' 0 0 1 ' + f(x0) + ' ' + f(y1 - bl);
    d += 'V' + f(y0 + tl);
    if (tl) d += 'A' + f(tl) + ' ' + f(tl) + ' 0 0 1 ' + f(x0 + tl) + ' ' + f(y0);
    return d + 'Z';
  }

  // 변형별 외곽선. n = 티켓 노치 반지름(0이면 없음), 탭은 아래 모서리를 파낸다.
  function outline(variant, x0, y0, x1, y1, r, n) {
    if (variant === 'tab') {
      var b = Math.min(4, (x1 - x0) / 6, (y1 - y0) / 3);
      var d = 'M' + f(x0 + r) + ' ' + f(y0) + 'H' + f(x1 - r) +
        'A' + f(r) + ' ' + f(r) + ' 0 0 1 ' + f(x1) + ' ' + f(y0 + r) +
        'V' + f(y1 - b) +
        'A' + f(b) + ' ' + f(b) + ' 0 0 0 ' + f(x1 - b) + ' ' + f(y1) +   // 아래 오른쪽 반원 홈
        'H' + f(x0 + b) +
        'A' + f(b) + ' ' + f(b) + ' 0 0 0 ' + f(x0) + ' ' + f(y1 - b) +   // 아래 왼쪽 반원 홈
        'V' + f(y0 + r) +
        'A' + f(r) + ' ' + f(r) + ' 0 0 1 ' + f(x0 + r) + ' ' + f(y0) + 'Z';
      return d;
    }
    if (variant === 'ticket' && n > 0) {
      var cy = (y0 + y1) / 2;
      return 'M' + f(x0 + r) + ' ' + f(y0) + 'H' + f(x1 - r) +
        'A' + f(r) + ' ' + f(r) + ' 0 0 1 ' + f(x1) + ' ' + f(y0 + r) +
        'V' + f(cy - n) + 'A' + f(n) + ' ' + f(n) + ' 0 0 0 ' + f(x1) + ' ' + f(cy + n) +   // 오른쪽 반원 노치
        'V' + f(y1 - r) +
        'A' + f(r) + ' ' + f(r) + ' 0 0 1 ' + f(x1 - r) + ' ' + f(y1) +
        'H' + f(x0 + r) +
        'A' + f(r) + ' ' + f(r) + ' 0 0 1 ' + f(x0) + ' ' + f(y1 - r) +
        'V' + f(cy + n) + 'A' + f(n) + ' ' + f(n) + ' 0 0 0 ' + f(x0) + ' ' + f(cy - n) +   // 왼쪽 반원 노치
        'V' + f(y0 + r) +
        'A' + f(r) + ' ' + f(r) + ' 0 0 1 ' + f(x0 + r) + ' ' + f(y0) + 'Z';
    }
    return rr(x0, y0, x1, y1, r, r, r, r);
  }

  function dashed(d) {
    return '<path class="pc-paper-deco" d="' + d + '" fill="none" stroke="#C9B8A4" stroke-width="0.8" stroke-dasharray="2 2"/>';
  }

  // 0~1 사이의 고정 난수. 같은 크기면 다시 그려도 물결이 같다.
  function jitter(i, seed) {
    var x = Math.sin(i * 12.9898 + seed * 78.233) * 43758.5453;
    return x - Math.floor(x);
  }

  // 손으로 오린 데클 외곽선: 변을 일정 간격으로 나눠 이차 곡선으로 살짝 들쭉날쭉하게 잇는다.
  // .pc-svg-input-frame-wrap의 물결 외곽(가로 약 40px, 세로 약 12px 간격, 진폭 1~2px)을 실제 px로 그린다.
  function deckleOutline(x0, y0, x1, y1, seed) {
    var pts = [], k = 0;
    function edge(ax, ay, bx, by, step, nx, ny) {
      var len = Math.abs(bx - ax) + Math.abs(by - ay);
      var n = Math.max(2, Math.round(len / step));
      for (var i = 0; i < n; i++) {
        var t0 = i / n, t1 = (i + 1) / n, tm = (t0 + t1) / 2;
        var amp = (i % 2 ? -1 : 1) * (0.7 + jitter(k++, seed) * 0.9);
        var end = (jitter(k++, seed) - 0.5) * 1.1;
        pts.push('Q' + f(ax + (bx - ax) * tm + nx * amp) + ' ' + f(ay + (by - ay) * tm + ny * amp) + ' ' +
          f(ax + (bx - ax) * t1 + nx * end) + ' ' + f(ay + (by - ay) * t1 + ny * end));
      }
    }
    edge(x0, y0, x1, y0, 40, 0, 1);    // 위
    edge(x1, y0, x1, y1, 12, 1, 0);    // 오른쪽
    edge(x1, y1, x0, y1, 40, 0, 1);    // 아래
    edge(x0, y1, x0, y0, 12, 1, 0);    // 왼쪽
    return 'M' + f(x0) + ' ' + f(y0) + pts.join('') + 'Z';
  }

  // 한 요소의 SVG 내부 마크업. 반환값이 ''이면 너무 작아 그릴 수 없다.
  function markup(variant, w, h, radius) {
    if (variant === 'deckle') return deckleMarkup(w, h, radius);
    var o = Math.min(OFFSET[variant], Math.min(w, h) * 0.2);
    var ux0 = HR, uy0 = HR, ux1 = w - o - HR, uy1 = h - o - HR;
    var uw = ux1 - ux0, uh = uy1 - uy0;
    if (uw < 2 || uh < 2) return { html: '', o: o };
    var full = Math.min(uw, uh) / 2;
    var r = radius == null ? (DEFAULT_RADIUS[variant] || full) : radius;
    r = Math.max(0, Math.min(r, full));
    var n = 0;
    if (variant === 'ticket') {
      n = Math.min(8, (uh - 2 * r) / 2 - 1);
      if (n < 2.5) n = 0;
    }
    var baseD = outline(variant, o, o, w, h, r, n);
    var sheetD = outline(variant, ux0, uy0, ux1, uy1, r, n);
    var deco = '';

    if (variant === 'sheet' && uw > 44 && uh > 36) {
      // 점선 천공: 색지 안쪽 5px
      deco = dashed(rr(ux0 + 5, uy0 + 5, ux1 - 5, uy1 - 5, Math.max(r - 4, 2), Math.max(r - 4, 2), Math.max(r - 4, 2), Math.max(r - 4, 2)));
    } else if (variant === 'menu' && uw > 16 && uh > 16) {
      // 안쪽 흰 실선: 두꺼운 카드스톡 단면 느낌
      deco = '<path class="pc-paper-hair" d="' + rr(ux0 + 3, uy0 + 3, ux1 - 3, uy1 - 3, Math.max(r - 3, 2), Math.max(r - 3, 2), Math.max(r - 3, 2), Math.max(r - 3, 2)) + '" fill="none" stroke="#FFFFFF" stroke-width="0.7"/>';
    } else if (variant === 'field' && uw > 10 && uh > 10) {
      // 안쪽 우물: 살짝 어두운 면 + 안쪽 그림자 = 파인 종이
      var wi = 2.5;
      var wr = Math.max(r - wi, 2);
      deco = '<path class="pc-paper-well" d="' + rr(ux0 + wi, uy0 + wi, ux1 - wi, uy1 - wi, wr, wr, wr, wr) + '" fill="#F1EADB"/>';
    } else if (variant === 'ticket' && n > 0) {
      // 노치 둘레의 점선 스티치
      var R = n + 3.5, cy = (uy0 + uy1) / 2;
      if (R * 2 < uh - 2) {
        deco = dashed('M' + f(ux0) + ' ' + f(cy - R) + 'A' + f(R) + ' ' + f(R) + ' 0 0 1 ' + f(ux0) + ' ' + f(cy + R) +
          'M' + f(ux1) + ' ' + f(cy - R) + 'A' + f(R) + ' ' + f(R) + ' 0 0 0 ' + f(ux1) + ' ' + f(cy + R));
      }
    } else if (variant === 'knob' && Math.min(uw, uh) >= 18) {
      deco = dashed(rr(ux0 + 3, uy0 + 3, ux1 - 3, uy1 - 3, Math.max(r - 3, 2), Math.max(r - 3, 2), Math.max(r - 3, 2), Math.max(r - 3, 2)));
    }

    return {
      o: o,
      html:
        '<g class="pc-paper-stack">' +
        '<path class="pc-paper-base" d="' + baseD + '" fill="#E2D3BD"/>' +
        '<g class="pc-paper-top">' +
        '<path class="pc-paper-sheet" d="' + sheetD + '" fill="#FAF6ED" stroke="#FFFFFF" stroke-width="' + RIM + '"/>' +
        deco +
        '</g></g>'
    };
  }

  // deckle: 물결 외곽 색지(받침) 위에 깨끗한 흰 속지(위쪽 색지)를 얹는다. 입력 프레임과 같은 구조.
  function deckleMarkup(w, h, radius) {
    var m = 2.5;                                   // 물결 진폭이 상자 밖으로 나가지 않는 여백
    if (w < 24 || h < 16) return { html: '', o: 0 };
    var ix = Math.min(6, w * 0.08), iy = h < 64 ? 3 : 6;
    var x0 = m + ix, y0 = m + iy, x1 = w - m - ix, y1 = h - m - iy;
    var r = Math.max(0, Math.min(radius == null ? DEFAULT_RADIUS.deckle : radius, (y1 - y0) / 2));
    var seed = Math.round(w) * 31 + Math.round(h);
    return {
      o: OFFSET.deckle,
      html:
        '<g class="pc-paper-stack">' +
        '<path class="pc-paper-base" d="' + deckleOutline(m, m, w - m, h - m, seed) + '" stroke-width="' + RIM + '"/>' +
        '<g class="pc-paper-top">' +
        '<path class="pc-paper-sheet" d="' + rr(x0, y0, x1, y1, r, r, r, r) + '" stroke-width="0.8"/>' +
        '</g></g>'
    };
  }

  /* ---------- 그리기: 읽기 → 쓰기 두 단계로 레이아웃 스래싱 방지 ---------- */
  function px(v) { var n = parseFloat(v); return isFinite(n) ? n : null; }

  function readRadius(cs) {
    var custom = px(cs.getPropertyValue('--pc-paper-radius'));
    if (custom != null) return custom;
    var tl = cs.borderTopLeftRadius || '';
    return tl.indexOf('%') >= 0 ? null : px(tl);
  }

  function draw(batch) {
    var i, it, cs;
    for (i = 0; i < batch.length; i++) {          // 읽기
      it = batch[i];
      it.st = states.get(it.el);
      if (!it.st || it.w < 2 || it.h < 2) { it.skip = true; continue; }
      it.variant = it.el.getAttribute('data-pc-paper');
      if (VARIANTS.indexOf(it.variant) < 0) { it.skip = true; continue; }
      cs = getComputedStyle(it.el);
      var rad = readRadius(cs);
      // 완전히 둥근 변형은 CSS 반지름이 0이면 무시한다(--pc-paper-radius가 명시된 경우만 존중)
      var fullRound = it.variant === 'pill' || it.variant === 'track' || it.variant === 'knob';
      // deckle의 반지름은 속지 모서리(기본 4px)다. 요소의 CSS 모서리는 바깥 상자 값이라 쓰지 않는다.
      if ((fullRound || it.variant === 'deckle') && px(cs.getPropertyValue('--pc-paper-radius')) == null) rad = null;
      if (!fullRound && !(rad > 0)) rad = null;
      it.rad = rad;
      it.bl = px(cs.borderLeftWidth) || 0;
      it.bt = px(cs.borderTopWidth) || 0;
    }
    for (i = 0; i < batch.length; i++) {          // 쓰기
      it = batch[i];
      if (it.skip) continue;
      var w = f(it.w), h = f(it.h);
      var sig = it.variant + '|' + w + '|' + h + '|' + it.rad + '|' + it.bl + '|' + it.bt;
      if (it.st.sig === sig) continue;
      var m = markup(it.variant, w, h, it.rad);
      var svg = it.st.svg;
      svg.setAttribute('width', w);
      svg.setAttribute('height', h);
      svg.style.setProperty('width', w + 'px', 'important');
      svg.style.setProperty('height', h + 'px', 'important');
      svg.setAttribute('data-variant', it.variant);
      // 절대 배치의 기준은 패딩 박스이므로 테두리 두께만큼 당겨 테두리 박스에 맞춘다.
      svg.style.setProperty('left', (it.bl ? -it.bl : 0) + 'px', 'important');
      svg.style.setProperty('top', (it.bt ? -it.bt : 0) + 'px', 'important');
      svg.style.setProperty('--pc-paper-off', f(m.o) + 'px');
      svg.innerHTML = m.html;
      it.st.sig = sig;
      if (m.html && !it.st.drawn) { it.st.drawn = true; it.el.classList.add('is-paper-hydrated'); }
      else if (!m.html && it.st.drawn) { it.st.drawn = false; it.el.classList.remove('is-paper-hydrated'); }
    }
  }

  /* ---------- 수화 / 해제 ---------- */
  function attach(el) {
    var st = states.get(el);
    if (st) return st;
    if (VOID[el.tagName]) {
      if (!warned.has(el)) {
        warned.add(el);
        console.warn('[PaperCutUI.paper] <' + el.tagName.toLowerCase() + '>는 자식을 가질 수 없어 data-pc-paper를 적용할 수 없습니다. 감싸는 요소에 붙이세요.', el);
      }
      return null;
    }
    if (VARIANTS.indexOf(el.getAttribute('data-pc-paper')) < 0) return null;
    ensureDefs();
    var svg = document.createElementNS(SVG_NS, 'svg');
    svg.setAttribute('class', 'pc-ui-paper-layer');
    svg.setAttribute('aria-hidden', 'true');
    svg.setAttribute('focusable', 'false');
    // 페이지 CSS의 `.x > svg {position:relative}`, `.x svg {width:13px !important}` 같은 규칙이 레이어를
    // 흐름 안으로 끌어들이면 요소가 레이어 크기만큼 커지고 다시 그려지는 루프가 생긴다.
    // 인라인 !important는 스타일시트의 !important보다 우선하므로 배치 속성을 여기서 고정한다.
    LAYER_LOCK.forEach(function (kv) { svg.style.setProperty(kv[0], kv[1], 'important'); });
    el.insertBefore(svg, el.firstChild);
    st = { svg: svg, sig: '', drawn: false };
    states.set(el, st);
    if (ro) ro.observe(el);   // 관찰 시작 직후 첫 알림이 같은 프레임에 그림을 그린다
    return st;
  }

  function detach(el) {
    // 아직 수화 전(IntersectionObserver 대기 중)인 요소도 관찰을 풀어야 나중에 레이어가 생기지 않는다.
    if (ro) ro.unobserve(el);
    if (io) io.unobserve(el);
    var st = states.get(el);
    if (!st) return;
    if (st.svg.parentNode === el) el.removeChild(st.svg);
    el.classList.remove('is-paper-hydrated');
    states.delete(el);
  }

  function sizeOf(entry) {
    var b = entry.borderBoxSize && entry.borderBoxSize[0];
    return b ? { w: b.inlineSize, h: b.blockSize } : { w: entry.target.offsetWidth, h: entry.target.offsetHeight };
  }

  function onResize(entries) {
    // display:none -> 표시 전환도 0 -> 크기 변화로 여기에 들어온다.
    var batch = [];
    for (var i = 0; i < entries.length; i++) {
      var s = sizeOf(entries[i]);
      batch.push({ el: entries[i].target, w: s.w, h: s.h });
    }
    draw(batch);
  }

  function onIntersect(entries) {
    for (var i = 0; i < entries.length; i++) {
      if (!entries[i].isIntersecting) continue;
      io.unobserve(entries[i].target);
      if (destroyed.has(entries[i].target)) continue;
      attach(entries[i].target);
    }
  }

  // 지연 수화 대기열에 올린다(첫 화면 근처 200px 안으로 오면 수화).
  function enqueue(el) {
    if (destroyed.has(el)) return;
    // 엔진 초기화 전에 hydrate된 요소는 ro가 없어 관찰되지 못했다. 여기서 뒤늦게 붙인다(observe는 중복 호출해도 안전).
    if (states.has(el)) { if (ro) ro.observe(el); return; }
    if (io) io.observe(el); else attach(el);
  }

  function collect(root, eager, explicit) {
    var list = [];
    if (root.nodeType === 1 && root.hasAttribute('data-pc-paper')) list.push(root);
    if (root.querySelectorAll) {
      var found = root.querySelectorAll('[data-pc-paper]');
      for (var i = 0; i < found.length; i++) list.push(found[i]);
    }
    for (var j = 0; j < list.length; j++) {
      if (explicit) destroyed.delete(list[j]);   // 명시적 hydrate는 destroy 이후에도 다시 동작한다
      else if (destroyed.has(list[j])) continue; // 자동 경로(MutationObserver 즉시 수화 포함)는 destroy를 존중한다
      if (eager) attach(list[j]); else enqueue(list[j]); }
    return list.length;
  }

  /* ---------- 공개 API ---------- */
  // hydrate: 동적으로 렌더한 뒤 호출하면 지연 없이 즉시 수화한다(토스트·캘린더 날짜 깜빡임 방지).
  function hydrate(rootEl) { collect(rootEl || document, true, true); }

  function refresh(el) {
    var st = states.get(el);
    destroyed.delete(el);
    if (!st) { attach(el); if (ro && states.has(el)) ro.observe(el); return; }
    st.sig = '';
    draw([{ el: el, w: el.offsetWidth, h: el.offsetHeight }]);
  }

  function destroy(el) { destroyed.add(el); detach(el); }

  var api = {
    paper: { hydrate: hydrate, refresh: refresh, destroy: destroy, variants: VARIANTS.slice(), tones: TONES.slice() }
  };

  /* ---------- 초기화 ---------- */
  function init() {
    if (typeof ResizeObserver !== 'undefined') ro = new ResizeObserver(onResize);
    if (typeof IntersectionObserver !== 'undefined') {
      io = new IntersectionObserver(onIntersect, { rootMargin: '200px' });
    }
    if (!ro) return;   // ResizeObserver가 없으면 점진적 향상을 포기하고 CSS 모양을 유지한다.
    collect(document, false);   // 이미 수화된 요소도 enqueue에서 ro 관찰이 붙는다
    if (typeof MutationObserver !== 'undefined') {
      mo = new MutationObserver(function (records) {
        var removed = [];
        for (var i = 0; i < records.length; i++) {
          var rec = records[i];
          if (rec.type === 'attributes') {
            var t = rec.target;
            if (!t.hasAttribute('data-pc-paper')) detach(t);
            else if (states.has(t)) refresh(t);      // 변형이 바뀌면 다시 그린다
            else enqueue(t);
            continue;
          }
          for (var k = 0; k < rec.removedNodes.length; k++) {
            var gone = rec.removedNodes[k];
            if (gone.nodeType !== 1) continue;
            removed.push(gone);
          }
          for (var j = 0; j < rec.addedNodes.length; j++) {
            var node = rec.addedNodes[j];
            if (node.nodeType !== 1 || (node.classList && node.classList.contains('pc-ui-paper-layer'))) continue;
            // 소량의 동적 삽입(토스트, 캘린더 날짜)은 즉시, 대량 삽입은 지연 수화
            var count = node.querySelectorAll ? node.querySelectorAll('[data-pc-paper]').length : 0;
            collect(node, count < 24);
          }
        }
        // 제거된 서브트리 정리. 같은 배치 안에서 다시 꽂힌 노드(오버레이를 body로 옮기는 경우)는
        // 처리가 끝난 지금 isConnected이므로 건드리지 않는다.
        for (var m = 0; m < removed.length; m++) {
          if (removed[m].isConnected) continue;
          var gl = removed[m].hasAttribute('data-pc-paper') ? [removed[m]] : [];
          var inner = removed[m].querySelectorAll('[data-pc-paper]');
          for (var q = 0; q < inner.length; q++) gl.push(inner[q]);
          for (var g = 0; g < gl.length; g++) if (!gl[g].isConnected) detach(gl[g]);
        }
      });
      mo.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['data-pc-paper'] });
    }
  }

  // 기존 PaperCutUI 객체에 합친다(덮어쓰지 않는다).
  root.PaperCutUI = Object.assign(root.PaperCutUI || {}, api);

  if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true });
    else init();
  }
})(typeof window !== 'undefined' ? window : this);
