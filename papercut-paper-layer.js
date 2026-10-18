/**
 * PaperCut UI - Universal Paper Layer Engine (Harness v0.4.49)
 * 130종 아이콘 배경 플레이트(papercut-backgrounds.js)의 물리적 다층 SVG 기하학과
 * 3-Tier 번트 엄버 feDropShadow 광원 필터(#pc-paper-sh-plate)를
 * 아이콘을 제외한 전역 UI 컴포넌트에 동적으로 생성·주입하는 마스터 엔진.
 *
 * 레이어 구조:
 * - Layer 1: 하단 베이스 색지 (.pc-paper-base, 3-Tier 번트 엄버 그림자 #pc-paper-sh-plate)
 * - Layer 2: 본문 크림 도화지 (.pc-paper-sheet, 0.88px 흰 림 스트로크)
 * - Layer 3: 장식 점선 스티칭/천공선 (.pc-paper-deco / .pc-paper-stitch, 1.2px 점선)
 * - Layer 4: 아키타입별 액센트 (.pc-paper-accent, 소인, 왁스 반사광, 절취선, 웰 등)
 *
 * 지원 아키타입(VARIANTS):
 * stamp, wax, ticket, pebble, deckle, sheet, field, pill, tab, track, knob, menu
 *
 * 지원 톤(TONES):
 * mint, peach, lavender, buttercup, sky, sand, rose, cream
 *
 * 엄격한 예외(Strict Exclusion):
 * .pc-layered-paper-icon, .pc-inline-icon, .pc-mounted-plate-svg,
 * #icon-gallery, #bg-library, #icon-simulator, papercut-icons.js, papercut-backgrounds.js
 */
(function (root) {
  'use strict';

  var VARIANTS = ['stamp', 'wax', 'ticket', 'pebble', 'deckle', 'sheet', 'field', 'pill', 'tab', 'track', 'knob', 'menu'];
  var TONES = ['mint', 'peach', 'lavender', 'buttercup', 'sky', 'sand', 'rose', 'cream'];

  // 받침 색지가 위쪽 색지에서 어긋나는 거리(px)
  var OFFSET = {
    stamp: 3,
    wax: 2.5,
    ticket: 3,
    pebble: 2.5,
    deckle: 2,
    sheet: 3,
    field: 1.5,
    pill: 2,
    tab: 2,
    track: 1,
    knob: 2.5,
    menu: 3
  };

  // 변형별 기본 모서리 반지름. 0이면 가변/완전 둥근 형태
  var DEFAULT_RADIUS = {
    stamp: 4,
    wax: 0,
    ticket: 12,
    pebble: 0,
    deckle: 4,
    sheet: 14,
    field: 10,
    pill: 0,
    tab: 10,
    track: 0,
    knob: 0,
    menu: 12
  };

  var RIM = 0.88;                 // 0.88px 흰 림 굵기
  var HR = RIM / 2;               // 림 중심 정렬 인셋
  var VOID = { INPUT: 1, SELECT: 1, TEXTAREA: 1, IMG: 1, HR: 1, BR: 1, PROGRESS: 1, METER: 1 };

  var DEFS_ID = 'pc-paper-defs';
  var SVG_NS = 'http://www.w3.org/2000/svg';
  var states = new WeakMap();     // el -> { svg, sig, variant, drawn }
  var io = null, ro = null, mo = null;
  var warned = new WeakSet();
  var destroyed = new WeakSet();

  var LAYER_LOCK = [
    ['position', 'absolute'], ['z-index', '-1'], ['display', 'block'], ['margin', '0'],
    ['padding', '0'], ['min-width', '0'], ['max-width', 'none'], ['min-height', '0'], ['max-height', 'none'],
    ['transform', 'none'], ['flex', 'none']
  ];

  /* ---------- 공유 필터 defs (130종 아이콘 배경과 100% 동일) ---------- */
  function getDefsContent() {
    var region = 'filterUnits="userSpaceOnUse" x="-16" y="-16" width="3200" height="3200" color-interpolation-filters="sRGB"';
    var umber = 'flood-color="#2E1E14"';
    return (
      '<defs>' +
      // [1] 마스터 플레이트 필터: 130종 아이콘 배경과 100% 일치하는 3-Tier 번트 엄버 + 광원 필터
      '<filter id="pc-paper-sh-plate" ' + region + '>' +
      '<feDropShadow dx="0" dy="1.2" stdDeviation="0.6" ' + umber + ' flood-opacity="0.48"/>' +
      '<feDropShadow dx="0" dy="4.5" stdDeviation="2.2" ' + umber + ' flood-opacity="0.26"/>' +
      '<feDropShadow dx="0" dy="-0.5" stdDeviation="0.3" flood-color="#FFFFFF" flood-opacity="0.95"/>' +
      '</filter>' +
      // [2] 표준 2-Tier 번트 엄버 필터
      '<filter id="pc-paper-sh" ' + region + '>' +
      '<feDropShadow dx="0" dy="1.2" stdDeviation="0.6" ' + umber + ' flood-opacity="0.48"/>' +
      '<feDropShadow dx="0" dy="3.5" stdDeviation="1.8" ' + umber + ' flood-opacity="0.25"/>' +
      '<feDropShadow dx="0" dy="-0.5" stdDeviation="0.3" flood-color="#FFFFFF" flood-opacity="0.95"/>' +
      '</filter>' +
      // [3] 호버/들림 필터: 공중에 뜬 종이 그림자
      '<filter id="pc-paper-sh-lift" ' + region + '>' +
      '<feDropShadow dx="0" dy="1.6" stdDeviation="0.8" ' + umber + ' flood-opacity="0.48"/>' +
      '<feDropShadow dx="0" dy="5.5" stdDeviation="2.6" ' + umber + ' flood-opacity="0.28"/>' +
      '<feDropShadow dx="0" dy="-0.5" stdDeviation="0.3" flood-color="#FFFFFF" flood-opacity="0.95"/>' +
      '</filter>' +
      // [4] 얕은 필터 (field/배지)
      '<filter id="pc-paper-sh-soft" ' + region + '>' +
      '<feDropShadow dx="0" dy="0.8" stdDeviation="0.5" ' + umber + ' flood-opacity="0.34"/>' +
      '<feDropShadow dx="0" dy="1.8" stdDeviation="1" ' + umber + ' flood-opacity="0.16"/>' +
      '<feDropShadow dx="0" dy="-0.5" stdDeviation="0.3" flood-color="#FFFFFF" flood-opacity="0.9"/>' +
      '</filter>' +
      // [5] 음각 인셋 우물 필터 (field 우물, track 홈)
      '<filter id="pc-paper-sh-inset" ' + region + '>' +
      '<feComponentTransfer in="SourceAlpha" result="inv"><feFuncA type="table" tableValues="1 0"/></feComponentTransfer>' +
      '<feGaussianBlur in="inv" stdDeviation="1.1" result="blur"/>' +
      '<feOffset in="blur" dx="0" dy="1.3" result="off"/>' +
      '<feFlood ' + umber + ' flood-opacity="0.34" result="tint"/>' +
      '<feComposite in="tint" in2="off" operator="in" result="shade"/>' +
      '<feComposite in="shade" in2="SourceAlpha" operator="in" result="inner"/>' +
      '<feMerge><feMergeNode in="SourceGraphic"/><feMergeNode in="inner"/></feMerge>' +
      '</filter>' +
      '</defs>'
    );
  }

  function ensureDefs() {
    if (typeof document === 'undefined' || !document.body || document.getElementById(DEFS_ID)) return;
    var svg = document.createElementNS(SVG_NS, 'svg');
    svg.id = DEFS_ID;
    svg.setAttribute('width', '0');
    svg.setAttribute('height', '0');
    svg.setAttribute('aria-hidden', 'true');
    svg.setAttribute('focusable', 'false');
    svg.setAttribute('style', 'position:absolute;width:0;height:0;overflow:hidden');
    svg.innerHTML = getDefsContent();
    document.body.appendChild(svg);
  }

  /* ---------- 기하학 계산 (px 단위 정밀 계산) ---------- */
  function f(n) { return Math.round(n * 100) / 100; }

  // 둥근 사각형
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

  // 닫힌 Catmull-Rom 스플라인을 3차 베지어로 변환 (연속적인 유기적 곡선)
  function smoothClosedSpline(pts) {
    var n = pts.length;
    var d = 'M' + f(pts[0][0]) + ' ' + f(pts[0][1]);
    for (var i = 0; i < n; i++) {
      var p0 = pts[(i - 1 + n) % n];
      var p1 = pts[i];
      var p2 = pts[(i + 1) % n];
      var p3 = pts[(i + 2) % n];
      var cp1x = p1[0] + (p2[0] - p0[0]) / 6;
      var cp1y = p1[1] + (p2[1] - p0[1]) / 6;
      var cp2x = p2[0] - (p3[0] - p1[0]) / 6;
      var cp2y = p2[1] - (p3[1] - p1[1]) / 6;
      d += ' C' + f(cp1x) + ' ' + f(cp1y) + ' ' + f(cp2x) + ' ' + f(cp2y) + ' ' + f(p2[0]) + ' ' + f(p2[1]);
    }
    return d + 'Z';
  }

  // 별모양 스탬프 꼭짓점 (티켓/우표 스탬프 액센트)
  function starPoints(cx, cy, r) {
    var pts = [];
    for (var i = 0; i < 10; i++) {
      var rad = (i * Math.PI) / 5 - Math.PI / 2;
      var curR = i % 2 === 0 ? r : r * 0.45;
      pts.push(f(cx + curR * Math.cos(rad)) + ',' + f(cy + curR * Math.sin(rad)));
    }
    return pts.join(' ');
  }

  // 0~1 사이 고정 난수 (일관된 데클 지터 생성)
  function jitter(i, seed) {
    var x = Math.sin(i * 12.9898 + seed * 78.233) * 43758.5453;
    return x - Math.floor(x);
  }

  // [아키타입 1] 우표(stamp): 빈티지 우표 천공 톱니 외곽선
  function stampOutline(x0, y0, x1, y1) {
    var w = x1 - x0, h = y1 - y0;
    var nx = Math.max(3, Math.round(w / 8));
    var sx = w / nx;
    var ampX = Math.min(2.5, sx * 0.3);
    var ny = Math.max(3, Math.round(h / 8));
    var sy = h / ny;
    var ampY = Math.min(2.5, sy * 0.3);
    var d = 'M' + f(x0) + ' ' + f(y0);
    var i, ax, bx, mx, ay, by, my;
    // 위쪽 톱니 (x0 -> x1)
    for (i = 0; i < nx; i++) {
      ax = x0 + i * sx; bx = x0 + (i + 1) * sx; mx = (ax + bx) / 2;
      d += ' Q' + f(mx) + ' ' + f(y0 + ampX) + ' ' + f(bx) + ' ' + f(y0);
    }
    // 오른쪽 톱니 (y0 -> y1)
    for (i = 0; i < ny; i++) {
      ay = y0 + i * sy; by = y0 + (i + 1) * sy; my = (ay + by) / 2;
      d += ' Q' + f(x1 - ampY) + ' ' + f(my) + ' ' + f(x1) + ' ' + f(by);
    }
    // 아래쪽 톱니 (x1 -> x0)
    for (i = nx - 1; i >= 0; i--) {
      bx = x0 + i * sx; mx = x0 + (i + 0.5) * sx;
      d += ' Q' + f(mx) + ' ' + f(y1 - ampX) + ' ' + f(bx) + ' ' + f(y1);
    }
    // 왼쪽 톱니 (y1 -> y0)
    for (i = ny - 1; i >= 0; i--) {
      by = y0 + i * sy; my = y0 + (i + 0.5) * sy;
      d += ' Q' + f(x0 + ampY) + ' ' + f(my) + ' ' + f(x0) + ' ' + f(by);
    }
    return d + 'Z';
  }

  // [아키타입 2] 왁스 실링(wax): 앤틱 왁스의 불규칙한 멜팅 외곽선
  function waxPuddlePath(x0, y0, x1, y1) {
    var cx = (x0 + x1) / 2, cy = (y0 + y1) / 2;
    var rx = (x1 - x0) / 2 * 0.94;
    var ry = (y1 - y0) / 2 * 0.94;
    var scales = [1.02, 0.94, 1.05, 0.93, 1.04, 0.92, 1.06, 0.95];
    var pts = [];
    for (var i = 0; i < 8; i++) {
      var angle = (i * Math.PI) / 4;
      var rxi = rx * scales[i];
      var ryi = ry * scales[i];
      pts.push([cx + rxi * Math.cos(angle), cy + ryi * Math.sin(angle)]);
    }
    return smoothClosedSpline(pts);
  }

  // [아키타입 3] 조약돌(pebble): 자연스러운 유기적 비대칭 완만 곡선
  function pebblePath(x0, y0, x1, y1) {
    var cx = (x0 + x1) / 2, cy = (y0 + y1) / 2;
    var rx = (x1 - x0) / 2 * 0.95;
    var ry = (y1 - y0) / 2 * 0.95;
    var scales = [1.04, 0.96, 1.02, 0.95, 1.03, 0.97];
    var pts = [];
    for (var i = 0; i < 6; i++) {
      var angle = (i * Math.PI) / 3;
      var rxi = rx * scales[i];
      var ryi = ry * scales[i];
      pts.push([cx + rxi * Math.cos(angle), cy + ryi * Math.sin(angle)]);
    }
    return smoothClosedSpline(pts);
  }

  // [아키타입 4] 데클 엣지(deckle): 지터 찢긴 수제 한지 외곽선
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

  // [아키타입 5 & UI 변형] ticket, tab, sheet, pill, field 등
  function outline(variant, x0, y0, x1, y1, r, n) {
    if (variant === 'tab') {
      var b = Math.min(4, (x1 - x0) / 6, (y1 - y0) / 3);
      return 'M' + f(x0 + r) + ' ' + f(y0) + 'H' + f(x1 - r) +
        'A' + f(r) + ' ' + f(r) + ' 0 0 1 ' + f(x1) + ' ' + f(y0 + r) +
        'V' + f(y1 - b) +
        'A' + f(b) + ' ' + f(b) + ' 0 0 0 ' + f(x1 - b) + ' ' + f(y1) +
        'H' + f(x0 + b) +
        'A' + f(b) + ' ' + f(b) + ' 0 0 0 ' + f(x0) + ' ' + f(y1 - b) +
        'V' + f(y0 + r) +
        'A' + f(r) + ' ' + f(r) + ' 0 0 1 ' + f(x0 + r) + ' ' + f(y0) + 'Z';
    }
    if (variant === 'ticket' && n > 0) {
      var cy = (y0 + y1) / 2;
      return 'M' + f(x0 + r) + ' ' + f(y0) + 'H' + f(x1 - r) +
        'A' + f(r) + ' ' + f(r) + ' 0 0 1 ' + f(x1) + ' ' + f(y0 + r) +
        'V' + f(cy - n) + 'A' + f(n) + ' ' + f(n) + ' 0 0 0 ' + f(x1) + ' ' + f(cy + n) +
        'V' + f(y1 - r) +
        'A' + f(r) + ' ' + f(r) + ' 0 0 1 ' + f(x1 - r) + ' ' + f(y1) +
        'H' + f(x0 + r) +
        'A' + f(r) + ' ' + f(r) + ' 0 0 1 ' + f(x0) + ' ' + f(y1 - r) +
        'V' + f(cy + n) + 'A' + f(n) + ' ' + f(n) + ' 0 0 0 ' + f(x0) + ' ' + f(cy - n) +
        'V' + f(y0 + r) +
        'A' + f(r) + ' ' + f(r) + ' 0 0 1 ' + f(x0 + r) + ' ' + f(y0) + 'Z';
    }
    return rr(x0, y0, x1, y1, r, r, r, r);
  }

  /* ---------- 마크업 생성기 (4대 물리적 레이어 빌더) ---------- */

  // stamp 변형 마크업
  function stampMarkup(w, h, radius) {
    var o = Math.min(OFFSET.stamp, Math.min(w, h) * 0.2);
    var ux0 = HR, uy0 = HR, ux1 = w - o - HR, uy1 = h - o - HR;
    var uw = ux1 - ux0, uh = uy1 - uy0;
    if (uw < 16 || uh < 16) return { html: '', o: o };
    var so = Math.max(4, Math.min(7, Math.min(uw, uh) * 0.12));
    var sdo = so + 3.5;
    var baseD = stampOutline(o, o, w, h);
    var sheetD = stampOutline(ux0, uy0, ux1, uy1);
    var deco = '';
    var accent = '';
    if (uw - 2 * sdo > 8 && uh - 2 * sdo > 8) {
      deco = '<rect class="pc-paper-deco pc-paper-stitch" x="' + f(ux0 + sdo) + '" y="' + f(uy0 + sdo) + '" width="' + f(uw - 2 * sdo) + '" height="' + f(uh - 2 * sdo) + '" rx="2" fill="none" stroke="var(--pc-paper-stitch, #D8CEBD)" stroke-width="1.2" stroke-dasharray="3 3"/>';
    }
    if (uw > 48 && uh > 36) {
      accent =
        '<path class="pc-paper-accent" d="M' + f(ux1 - 28) + ' ' + f(uy0 + 10) + ' Q' + f(ux1 - 22) + ' ' + f(uy0 + 7) + ' ' + f(ux1 - 16) + ' ' + f(uy0 + 10) + ' Q' + f(ux1 - 10) + ' ' + f(uy0 + 13) + ' ' + f(ux1 - 4) + ' ' + f(uy0 + 10) +
        ' M' + f(ux1 - 28) + ' ' + f(uy0 + 15) + ' Q' + f(ux1 - 22) + ' ' + f(uy0 + 12) + ' ' + f(ux1 - 16) + ' ' + f(uy0 + 15) + ' Q' + f(ux1 - 10) + ' ' + f(uy0 + 18) + ' ' + f(ux1 - 4) + ' ' + f(uy0 + 15) + '" fill="none" stroke="var(--pc-paper-accent, #A3D8C3)" stroke-width="1.2" stroke-linecap="round" opacity="0.8"/>' +
        '<circle class="pc-paper-accent" cx="' + f(ux0 + 16) + '" cy="' + f(uy0 + 16) + '" r="5.5" fill="none" stroke="var(--pc-paper-base, #F7BA9E)" stroke-width="1" opacity="0.65"/>';
    }
    return {
      o: o,
      html:
        '<g class="pc-paper-stack">' +
        '<path class="pc-paper-base" d="' + baseD + '" fill="var(--pc-paper-base, #BBD5B8)" filter="url(#pc-paper-sh-plate)"/>' +
        '<g class="pc-paper-top">' +
        '<path class="pc-paper-sheet" d="' + sheetD + '" fill="var(--pc-paper-fill, #FFFDF9)" stroke="#FFFFFF" stroke-width="' + RIM + '"/>' +
        deco +
        accent +
        '</g></g>'
    };
  }

  // wax 변형 마크업
  function waxMarkup(w, h, radius) {
    var o = Math.min(OFFSET.wax, Math.min(w, h) * 0.2);
    var ux0 = HR, uy0 = HR, ux1 = w - o - HR, uy1 = h - o - HR;
    var uw = ux1 - ux0, uh = uy1 - uy0;
    if (uw < 16 || uh < 16) return { html: '', o: o };
    var cx = (ux0 + ux1) / 2, cy = (uy0 + uy1) / 2;
    var rx = uw / 2, ry = uh / 2;
    var baseD = waxPuddlePath(o, o, w, h);
    var sheetD = waxPuddlePath(ux0, uy0, ux1, uy1);
    var deco = '';
    var accent = '';

    if (rx > 10 && ry > 10) {
      deco =
        '<ellipse class="pc-paper-well" cx="' + f(cx) + '" cy="' + f(cy) + '" rx="' + f(rx * 0.65) + '" ry="' + f(ry * 0.65) + '" fill="color-mix(in srgb, var(--pc-paper-base, #BBD5B8) 20%, var(--pc-paper-fill, #FFFDF9))"/>' +
        '<ellipse class="pc-paper-deco pc-paper-stitch" cx="' + f(cx) + '" cy="' + f(cy) + '" rx="' + f(rx * 0.56) + '" ry="' + f(ry * 0.56) + '" fill="none" stroke="var(--pc-paper-stitch, #D8CEBD)" stroke-width="1.2" stroke-dasharray="3 3"/>';
    }
    if (rx > 12 && ry > 12) {
      accent =
        '<path class="pc-paper-accent pc-paper-crescent" d="M' + f(cx - rx * 0.55) + ' ' + f(cy - ry * 0.1) +
        ' C' + f(cx - rx * 0.45) + ' ' + f(cy - ry * 0.45) + ' ' + f(cx - rx * 0.1) + ' ' + f(cy - ry * 0.55) + ' ' + f(cx + rx * 0.15) + ' ' + f(cy - ry * 0.5) +
        ' C' + f(cx - rx * 0.1) + ' ' + f(cy - ry * 0.42) + ' ' + f(cx - rx * 0.35) + ' ' + f(cy - ry * 0.35) + ' ' + f(cx - rx * 0.5) + ' ' + f(cy + ry * 0.1) + ' Z" fill="#FFFFFF" opacity="0.6"/>';
    }

    return {
      o: o,
      html:
        '<g class="pc-paper-stack">' +
        '<path class="pc-paper-base" d="' + baseD + '" fill="var(--pc-paper-base, #BBD5B8)" filter="url(#pc-paper-sh-plate)"/>' +
        '<g class="pc-paper-top">' +
        '<path class="pc-paper-sheet" d="' + sheetD + '" fill="var(--pc-paper-fill, #FFFDF9)" stroke="#FFFFFF" stroke-width="' + RIM + '"/>' +
        deco +
        accent +
        '</g></g>'
    };
  }

  // pebble 변형 마크업
  function pebbleMarkup(w, h, radius) {
    var o = Math.min(OFFSET.pebble, Math.min(w, h) * 0.2);
    var ux0 = HR, uy0 = HR, ux1 = w - o - HR, uy1 = h - o - HR;
    var uw = ux1 - ux0, uh = uy1 - uy0;
    if (uw < 16 || uh < 16) return { html: '', o: o };
    var cx = (ux0 + ux1) / 2, cy = (uy0 + uy1) / 2;
    var rx = uw / 2, ry = uh / 2;
    var baseD = pebblePath(o, o, w, h);
    var sheetD = pebblePath(ux0, uy0, ux1, uy1);
    var deco = '';
    var accent = '';

    if (rx > 10 && ry > 10) {
      deco = '<path class="pc-paper-deco pc-paper-stitch" d="' + pebblePath(ux0 + 5, uy0 + 5, ux1 - 5, uy1 - 5) + '" fill="none" stroke="var(--pc-paper-stitch, #D8CEBD)" stroke-width="1.2" stroke-dasharray="3 3"/>';
    }
    if (rx > 12 && ry > 12) {
      accent =
        '<path class="pc-paper-accent pc-paper-crescent" d="M' + f(cx - rx * 0.5) + ' ' + f(cy - ry * 0.2) +
        ' C' + f(cx - rx * 0.3) + ' ' + f(cy - ry * 0.45) + ' ' + f(cx + rx * 0.1) + ' ' + f(cy - ry * 0.45) + ' ' + f(cx + rx * 0.3) + ' ' + f(cy - ry * 0.3) +
        ' C' + f(cx + rx * 0.1) + ' ' + f(cy - ry * 0.38) + ' ' + f(cx - rx * 0.2) + ' ' + f(cy - ry * 0.38) + ' ' + f(cx - rx * 0.4) + ' ' + f(cy - ry * 0.1) + ' Z" fill="#FFFFFF" opacity="0.6"/>';
    }

    return {
      o: o,
      html:
        '<g class="pc-paper-stack">' +
        '<path class="pc-paper-base" d="' + baseD + '" fill="var(--pc-paper-base, #BBD5B8)" filter="url(#pc-paper-sh-plate)"/>' +
        '<g class="pc-paper-top">' +
        '<path class="pc-paper-sheet" d="' + sheetD + '" fill="var(--pc-paper-fill, #FFFDF9)" stroke="#FFFFFF" stroke-width="' + RIM + '"/>' +
        deco +
        accent +
        '</g></g>'
    };
  }

  // deckle 변형 마크업
  function deckleMarkup(w, h, radius) {
    var o = Math.min(OFFSET.deckle, Math.min(w, h) * 0.2);
    if (w < 24 || h < 16) return { html: '', o: 0 };
    var ux0 = HR, uy0 = HR, ux1 = w - o - HR, uy1 = h - o - HR;
    var uw = ux1 - ux0, uh = uy1 - uy0;
    var ix = Math.min(6, w * 0.08), iy = h < 64 ? 3 : 6;
    var x0 = ux0 + ix, y0 = uy0 + iy, x1 = ux1 - ix, y1 = uy1 - iy;
    var r = Math.max(0, Math.min(radius == null ? DEFAULT_RADIUS.deckle : radius, (y1 - y0) / 2));
    var seed = Math.round(w) * 31 + Math.round(h);
    var baseD = deckleOutline(o, o, w, h, seed);
    var sheetD = deckleOutline(ux0, uy0, ux1, uy1, seed);

    var deco = '';
    if (x1 - x0 > 12 && y1 - y0 > 10) {
      deco = '<path class="pc-paper-deco pc-paper-stitch" d="' + rr(x0 + 2, y0 + 2, x1 - 2, y1 - 2, r, r, r, r) + '" fill="none" stroke="var(--pc-paper-stitch, #D8CEBD)" stroke-width="1.2" stroke-dasharray="3 3"/>';
    }
    var accent = '';
    if (uw > 28 && uh > 20) {
      accent = '<polygon class="pc-paper-accent" points="' + f(x0 + 1) + ',' + f(y0 + 10) + ' ' + f(x0 + 1) + ',' + f(y0 + 1) + ' ' + f(x0 + 10) + ',' + f(y0 + 1) + '" fill="#FFFDF9" opacity="0.85"/>';
    }

    return {
      o: o,
      html:
        '<g class="pc-paper-stack">' +
        '<path class="pc-paper-base" d="' + baseD + '" fill="var(--pc-paper-base, #BBD5B8)" filter="url(#pc-paper-sh-plate)"/>' +
        '<g class="pc-paper-top">' +
        '<path class="pc-paper-sheet" d="' + sheetD + '" fill="var(--pc-paper-fill, #FFFDF9)" stroke="#FFFFFF" stroke-width="' + RIM + '"/>' +
        deco +
        accent +
        '</g></g>'
    };
  }

  // 범용 markup 디스패처
  function markup(variant, w, h, radius) {
    if (variant === 'stamp') return stampMarkup(w, h, radius);
    if (variant === 'wax') return waxMarkup(w, h, radius);
    if (variant === 'pebble') return pebbleMarkup(w, h, radius);
    if (variant === 'deckle') return deckleMarkup(w, h, radius);

    var o = Math.min(OFFSET[variant] || 2, Math.min(w, h) * 0.2);
    var ux0 = HR, uy0 = HR, ux1 = w - o - HR, uy1 = h - o - HR;
    var uw = ux1 - ux0, uh = uy1 - uy0;
    if (uw < 2 || uh < 2) return { html: '', o: o };
    var full = Math.min(uw, uh) / 2;
    var r = radius == null ? (DEFAULT_RADIUS[variant] || full) : radius;
    r = Math.max(0, Math.min(r, full));
    var n = 0;
    if (variant === 'ticket') {
      n = Math.min(8, (uh - 2 * r) / 2 - 1);
      if (n < 2.5) n = Math.min(6, uh * 0.25);
    }
    var baseD = outline(variant, o, o, w, h, r, n);
    var sheetD = outline(variant, ux0, uy0, ux1, uy1, r, n);
    var deco = '';
    var accent = '';

    if (variant === 'sheet' && uw > 44 && uh > 36) {
      // 14px 둥근 모서리 + 점선 스티칭 + 상단 림
      var sr = Math.max(r - 4, 2);
      deco = '<path class="pc-paper-deco pc-paper-stitch" d="' + rr(ux0 + 5, uy0 + 5, ux1 - 5, uy1 - 5, sr, sr, sr, sr) + '" fill="none" stroke="var(--pc-paper-stitch, #D8CEBD)" stroke-width="1.2" stroke-dasharray="3 3"/>';
      accent = '<path class="pc-paper-hair" d="' + rr(ux0 + 2, uy0 + 2, ux1 - 2, uy1 - 2, Math.max(r - 2, 2), Math.max(r - 2, 2), Math.max(r - 2, 2), Math.max(r - 2, 2)) + '" fill="none" stroke="#FFFFFF" stroke-width="0.8" opacity="0.85"/>';
    } else if (variant === 'menu' && uw > 16 && uh > 16) {
      var mr = Math.max(r - 3, 2);
      deco = '<path class="pc-paper-hair" d="' + rr(ux0 + 3, uy0 + 3, ux1 - 3, uy1 - 3, mr, mr, mr, mr) + '" fill="none" stroke="#FFFFFF" stroke-width="0.7"/>';
      accent = '<path class="pc-paper-deco pc-paper-stitch" d="' + rr(ux0 + 5, uy0 + 5, ux1 - 5, uy1 - 5, Math.max(r - 5, 2), Math.max(r - 5, 2), Math.max(r - 5, 2), Math.max(r - 5, 2)) + '" fill="none" stroke="var(--pc-paper-stitch, #D8CEBD)" stroke-width="1.2" stroke-dasharray="3 3"/>';
    } else if (variant === 'field' && uw > 10 && uh > 10) {
      // 폼 인풋 전용 음각 인셋 우물 그림자 (#pc-paper-sh-inset)
      var wi = 2.5;
      var wr = Math.max(r - wi, 2);
      deco = '<path class="pc-paper-well" d="' + rr(ux0 + wi, uy0 + wi, ux1 - wi, uy1 - wi, wr, wr, wr, wr) + '" fill="color-mix(in srgb, var(--pc-paper-base, #BBD5B8) 24%, var(--pc-paper-fill, #FFFDF9))" filter="url(#pc-paper-sh-inset)"/>';
      accent = '<path class="pc-paper-hair" d="' + rr(ux0 + wi, uy0 + wi, ux1 - wi, uy1 - wi, wr, wr, wr, wr) + '" fill="none" stroke="#FFFFFF" stroke-width="0.8" opacity="0.75"/>';
    } else if (variant === 'ticket') {
      // 양쪽 반원형 노치 + 중앙 세로 점선 절취선 + 스타 스탬프
      var cy = (uy0 + uy1) / 2;
      var tearX = f(ux0 + Math.max(22, Math.min(36, uw * 0.28)));
      if (uw > 50) {
        deco += '<line class="pc-paper-deco pc-paper-stitch" x1="' + tearX + '" y1="' + f(uy0 + 4) + '" x2="' + tearX + '" y2="' + f(uy1 - 4) + '" stroke="var(--pc-paper-stitch, #D8CEBD)" stroke-width="1.8" stroke-dasharray="3 3"/>';
      }
      if (n > 0) {
        var R = n + 3.5;
        if (R * 2 < uh - 2) {
          deco += '<path class="pc-paper-deco" d="M' + f(ux0) + ' ' + f(cy - R) + 'A' + f(R) + ' ' + f(R) + ' 0 0 1 ' + f(ux0) + ' ' + f(cy + R) +
            'M' + f(ux1) + ' ' + f(cy - R) + 'A' + f(R) + ' ' + f(R) + ' 0 0 0 ' + f(ux1) + ' ' + f(cy + R) + '" fill="none" stroke="var(--pc-paper-stitch, #D8CEBD)" stroke-width="1.2" stroke-dasharray="3 3"/>';
        }
      }
      if (uw > 56 && uh > 28) {
        var starX = (ux0 + tearX) / 2;
        accent = '<polygon class="pc-paper-accent" points="' + starPoints(starX, cy, 3.8) + '" fill="var(--pc-paper-base, #A3D8C3)" opacity="0.8"/>';
      }
    } else if (variant === 'pill') {
      // 버튼 및 배지 전용 타원형 캡슐
      if (uw > 24 && uh > 14) {
        var pr = Math.max(r - 3, 2);
        deco = '<path class="pc-paper-deco pc-paper-stitch" d="' + rr(ux0 + 3, uy0 + 3, ux1 - 3, uy1 - 3, pr, pr, pr, pr) + '" fill="none" stroke="var(--pc-paper-stitch, #D8CEBD)" stroke-width="1.2" stroke-dasharray="3 3"/>';
        accent = '<path class="pc-paper-hair" d="M' + f(ux0 + r) + ' ' + f(uy0 + 1.2) + 'H' + f(ux1 - r) + '" fill="none" stroke="#FFFFFF" stroke-width="1" stroke-linecap="round" opacity="0.9"/>';
      }
    } else if (variant === 'tab') {
      // 상단 둥글림 + 하단 좌우 반원 홈
      if (uw > 20 && uh > 16) {
        var tr = Math.max(r - 3, 2);
        deco = '<path class="pc-paper-deco pc-paper-stitch" d="' + outline('tab', ux0 + 3, uy0 + 3, ux1 - 3, uy1 - 1, tr, 0) + '" fill="none" stroke="var(--pc-paper-stitch, #D8CEBD)" stroke-width="1.2" stroke-dasharray="3 3"/>';
        accent = '<path class="pc-paper-hair" d="M' + f(ux0 + r) + ' ' + f(uy0 + 1.2) + 'H' + f(ux1 - r) + '" fill="none" stroke="#FFFFFF" stroke-width="0.88" opacity="0.85"/>';
      }
    } else if (variant === 'knob' && Math.min(uw, uh) >= 18) {
      deco = '<path class="pc-paper-deco pc-paper-stitch" d="' + rr(ux0 + 3, uy0 + 3, ux1 - 3, uy1 - 3, Math.max(r - 3, 2), Math.max(r - 3, 2), Math.max(r - 3, 2), Math.max(r - 3, 2)) + '" fill="none" stroke="var(--pc-paper-stitch, #D8CEBD)" stroke-width="1.2" stroke-dasharray="3 3"/>';
      accent = '<path class="pc-paper-hair" d="' + rr(ux0 + 1.5, uy0 + 1.5, ux1 - 1.5, uy1 - 1.5, Math.max(r - 1.5, 2), Math.max(r - 1.5, 2), Math.max(r - 1.5, 2), Math.max(r - 1.5, 2)) + '" fill="none" stroke="#FFFFFF" stroke-width="0.88" opacity="0.9"/>';
    }

    var filterAttr = (variant === 'track') ? '' : ' filter="url(#pc-paper-sh-plate)"';

    return {
      o: o,
      html:
        '<g class="pc-paper-stack">' +
        '<path class="pc-paper-base" d="' + baseD + '" fill="var(--pc-paper-base, #BBD5B8)"' + filterAttr + '/>' +
        '<g class="pc-paper-top">' +
        '<path class="pc-paper-sheet" d="' + sheetD + '" fill="var(--pc-paper-fill, #FFFDF9)" stroke="#FFFFFF" stroke-width="' + RIM + '"/>' +
        deco +
        accent +
        '</g></g>'
    };
  }

  /* ---------- DOM 렌더 파이프라인 (읽기 -> 쓰기 배치 분리) ---------- */
  function px(v) { var n = parseFloat(v); return isFinite(n) ? n : null; }

  function readRadius(cs) {
    var custom = px(cs.getPropertyValue('--pc-paper-radius'));
    if (custom != null) return custom;
    var tl = cs.borderTopLeftRadius || '';
    return tl.indexOf('%') >= 0 ? null : px(tl);
  }

  function draw(batch) {
    var i, it, cs;
    for (i = 0; i < batch.length; i++) {
      it = batch[i];
      it.st = states.get(it.el);
      if (!it.st || it.w < 2 || it.h < 2) { it.skip = true; continue; }
      it.variant = it.el.getAttribute('data-pc-paper');
      if (VARIANTS.indexOf(it.variant) < 0) { it.skip = true; continue; }
      cs = getComputedStyle(it.el);
      var rad = readRadius(cs);
      var fullRound = it.variant === 'pill' || it.variant === 'track' || it.variant === 'knob' || it.variant === 'wax' || it.variant === 'pebble';
      if ((fullRound || it.variant === 'deckle') && px(cs.getPropertyValue('--pc-paper-radius')) == null) rad = null;
      if (!fullRound && !(rad > 0)) rad = null;
      it.rad = rad;
      it.bl = px(cs.borderLeftWidth) || 0;
      it.bt = px(cs.borderTopWidth) || 0;
    }
    for (i = 0; i < batch.length; i++) {
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
      svg.style.setProperty('left', (it.bl ? -it.bl : 0) + 'px', 'important');
      svg.style.setProperty('top', (it.bt ? -it.bt : 0) + 'px', 'important');
      svg.style.setProperty('--pc-paper-off', f(m.o) + 'px');
      svg.innerHTML = m.html;
      it.st.sig = sig;
      if (m.html && !it.st.drawn) { it.st.drawn = true; it.el.classList.add('is-paper-hydrated'); }
      else if (!m.html && it.st.drawn) { it.st.drawn = false; it.el.classList.remove('is-paper-hydrated'); }
    }
  }

  /* ---------- 수화 / 해제 라이프사이클 ---------- */
  function attach(el) {
    var st = states.get(el);
    if (st) return st;
    if (VOID[el.tagName]) {
      if (!warned.has(el)) {
        warned.add(el);
        console.warn('[PaperCutUI.paper] <' + el.tagName.toLowerCase() + '>는 자식을 가질 수 없어 data-pc-paper를 적용할 수 없습니다. 감싸는 컨테이너에 지정하세요.', el);
      }
      return null;
    }
    // 엄격한 예외 보장 (Strict Exclusion): 아이콘 및 배경 라이브러리는 전역 엔진 주입 제외
    if (
      el.classList.contains('pc-layered-paper-icon') ||
      el.classList.contains('pc-inline-icon') ||
      el.classList.contains('pc-mounted-plate-svg') ||
      (el.closest && el.closest('#icon-gallery, #bg-library, #icon-simulator'))
    ) {
      return null;
    }

    if (VARIANTS.indexOf(el.getAttribute('data-pc-paper')) < 0) return null;
    ensureDefs();
    var svg = document.createElementNS(SVG_NS, 'svg');
    svg.setAttribute('class', 'pc-ui-paper-layer');
    svg.setAttribute('aria-hidden', 'true');
    svg.setAttribute('focusable', 'false');
    LAYER_LOCK.forEach(function (kv) { svg.style.setProperty(kv[0], kv[1], 'important'); });
    el.insertBefore(svg, el.firstChild);
    st = { svg: svg, sig: '', drawn: false };
    states.set(el, st);
    if (ro) ro.observe(el);
    return st;
  }

  function detach(el) {
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

  function enqueue(el) {
    if (destroyed.has(el)) return;
    if (states.has(el)) { if (ro) ro.observe(el); return; }
    if (io) io.observe(el); else attach(el);
  }

  function collect(rootEl, eager, explicit) {
    var list = [];
    if (rootEl.nodeType === 1 && rootEl.hasAttribute('data-pc-paper')) list.push(rootEl);
    if (rootEl.querySelectorAll) {
      var found = rootEl.querySelectorAll('[data-pc-paper]');
      for (var i = 0; i < found.length; i++) list.push(found[i]);
    }
    for (var j = 0; j < list.length; j++) {
      if (explicit) destroyed.delete(list[j]);
      else if (destroyed.has(list[j])) continue;
      if (eager) attach(list[j]); else enqueue(list[j]);
    }
    return list.length;
  }

  /* ---------- 공개 API ---------- */
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
    paper: {
      hydrate: hydrate,
      refresh: refresh,
      destroy: destroy,
      markup: markup,
      getDefsContent: getDefsContent,
      variants: VARIANTS.slice(),
      tones: TONES.slice()
    }
  };

  /* ---------- 옵저버 초기화 ---------- */
  function init() {
    if (typeof ResizeObserver !== 'undefined') ro = new ResizeObserver(onResize);
    if (typeof IntersectionObserver !== 'undefined') {
      io = new IntersectionObserver(onIntersect, { rootMargin: '200px' });
    }
    if (!ro) return;
    collect(document, false);
    if (typeof MutationObserver !== 'undefined') {
      mo = new MutationObserver(function (records) {
        var removed = [];
        for (var i = 0; i < records.length; i++) {
          var rec = records[i];
          if (rec.type === 'attributes') {
            var t = rec.target;
            if (!t.hasAttribute('data-pc-paper')) detach(t);
            else if (states.has(t)) refresh(t);
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
            var count = node.querySelectorAll ? node.querySelectorAll('[data-pc-paper]').length : 0;
            collect(node, count < 24);
          }
        }
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

  // 모듈 내보내기 & 전역 바인딩
  root.PaperCutUI = Object.assign(root.PaperCutUI || {}, api);

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = api;
  }

  if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true });
    else init();
  }
})(typeof window !== 'undefined' ? window : (typeof globalThis !== 'undefined' ? globalThis : this));
