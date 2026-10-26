/* 도형판 — 칠교 조각 맞추기, 점판(지오보드)에 도형 만들기, 도형 카드 분류하기를 한 교구로 다룬다(1~6학년 도형 단원).
 *
 * 모드(o.mode)
 * | 모드        | 하는 일 | 상태 | target |
 * | ---------- | ------ | ---- | ------ |
 * | 'geoboard'(기본) | 점판의 점을 차례로 찍어 다각형을 만든다(세 점부터 닫힌 도형) | { pts:[[열,행]…] } | { sides?, shape?, area?, rightAngles?, parallel?, exact? } — 적은 조건을 모두 만족 |
 * | 'tangram'  | 칠교 조각을 끌어 그림자 자리에 맞춘다. 돌리기(45°)·뒤집기 | { pieces:[{x,y,r,f}…] } (o.pieces 순서, 단위 = 칠교 정사각형 한 변의 1/4) | { fit:true } |
 * | 'classify' | 도형 카드를 눌러 칸(무리)에 넣는다 | { placed:{ 카드id: 칸번호|null } } | { bins:{ 카드id: 칸번호 } } |
 * 모든 모드 공통: o.ask = { q, choices[], why?[] } → 상태 pick, target { pick:번호 } / o.askNum = { q, unit?, tol? } → 상태 num, target { num:수 }
 *   (교구를 보고 묻는 고르기·수 쓰기. 다른 target 칸과 함께 써도 된다)
 *
 * 옵션
 * | 옵션 | 모드 | 뜻 |
 * | --- | --- | --- |
 * | size | geoboard | 한 줄의 점 수(3~10, 기본 5) |
 * | showCounts | geoboard | 꼭짓점·변 수 읽기 값(기본 true). revealAfterCheck면 맞힌 확인 뒤에만 보임 |
 * | showArea | geoboard | 넓이(칸) 읽기 값(기본 false) |
 * | showRight | geoboard | 직각 표시(기본 false) |
 * | readOnly | 모두 | 조작 잠금(주어진 도형을 보고 ask·askNum에 답할 때) |
 * | figure | tangram | 미리 만든 그림자: 'square7'(일곱 조각 정사각형) 'square2' 'triangle2' 'parallelogram2'(작은 삼각형 2개) 'square3' 'triangle3'(중간 1+작은 2) |
 * | slots | tangram | 직접 만든 그림자 [{ k:'L'|'M'|'S'|'Q'|'P', pts:[[x,y]…] }] (단위는 위와 같다. L 큰 삼각형, M 중간 삼각형, S 작은 삼각형, Q 정사각형, P 평행사변형) |
 * | pieces | tangram | 쟁반 조각 종류 배열(기본: 그림자에 필요한 조각). 남는 조각을 더 줄 수 있다 |
 * | lines | tangram | 그림자 안 조각 경계선 보이기(쉬움) |
 * | cards | classify | [{ id, shape:'triangle'|'right-triangle'|'obtuse-triangle'|'square'|'rectangle'|'rhombus'|'parallelogram'|'trapezoid'|'pentagon'|'hexagon'|'circle'|'oval' 또는 pts:[[0~1,0~1]…], rot?, label? }] |
 * | bins | classify | 칸 이름 배열(예 ['변이 3개', '변이 4개']) |
 * | revealAfterCheck, print | 모두 | 확인 전 읽기 값 숨김 / 활동지 흑백 그림(읽기 값·조작 칸 없음) |
 *
 * geoboard target.shape 이름(포함 관계로 판정 — 정사각형은 직사각형이기도 하다. exact:true면 가장 알맞은 이름만):
 *   triangle right-triangle acute-triangle obtuse-triangle isosceles-triangle quadrilateral square rectangle rhombus
 *   parallelogram trapezoid pentagon hexagon polygon
 *   rightAngles = 직각 수, parallel = 평행한 변의 쌍 수, area = 넓이(점판 한 칸 = 1, 반 칸 가능)
 * 예) { mode:'geoboard', size:6 } + target { shape:'rectangle', area:6 }
 *     { mode:'tangram', figure:'triangle2' } + target { fit:true }
 *     { mode:'classify', cards:[{id:'a',shape:'triangle'},{id:'b',shape:'square'}], bins:['삼각형','사각형'] } + target { bins:{a:0,b:1} }
 * 키보드: 점판 — 방향키로 점 고르기, Enter/Space 점 찍기·빼기, Backspace 마지막 점 빼기.
 *         칠교 — Tab으로 조각, 방향키 옮기기, Enter 놓기, R 돌리기, F 뒤집기. 카드 — Enter 다음 칸으로, 숫자 1~9 그 칸, 0 되돌리기.
 */
(function (K) {
  'use strict';
  // ---------- 공통 도우미(교구 파일마다 같은 모양) ----------
  const hintLevel = (opts) => {
    const want = Math.max(1, Math.min(3, Math.floor((opts && opts.level) || 1)));
    const a = opts && Number.isInteger(opts.attempts) ? opts.attempts : null;
    return a == null ? want : Math.min(want, a >= 2 ? 3 : a >= 1 ? 2 : 1);
  };
  const josa = (w, a, b) => { const s = String(w); const c = s.charCodeAt(s.length - 1); return s + (c >= 0xAC00 && c <= 0xD7A3 && (c - 0xAC00) % 28 ? a : b); };
  const r2 = (v) => Math.round(v * 100) / 100;
  const P = 'sh';
  function ensureStyle() {
    if (document.getElementById(`${P}-style`)) return;
    const s = document.createElement('style'); s.id = `${P}-style`;
    s.textContent = `
.${P}-panel{display:grid;gap:10px;margin-top:10px}
.${P}-row{display:flex;flex-wrap:wrap;gap:8px;align-items:center}
.${P}-q{margin:0;font-weight:700;line-height:1.45;word-break:keep-all}
.${P}-picks{display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:8px}
.${P}-picks .pl-btn{white-space:normal;line-height:1.3;word-break:keep-all;min-height:44px}
.${P}-in{min-height:44px;width:6em;box-sizing:border-box;padding:6px 10px;border-radius:10px;border:2px solid #82C2A8;font:inherit;font-size:1.1em;font-weight:800;text-align:center;color:#275C46;background:#fff}
.${P}-cls{display:grid;gap:10px}
.${P}-tray{display:flex;flex-wrap:wrap;gap:8px;min-height:64px;padding:8px;border-radius:14px;background:#FFFDF9;border:1px dashed rgba(61,53,46,.25)}
.${P}-bins{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:8px}
.${P}-bin{display:grid;align-content:start;gap:6px;min-height:110px;padding:6px;border-radius:14px;background:#F4F0FA;border:2px solid #B8A6D9}
.${P}-bin>button.${P}-binh{min-height:44px;width:100%;white-space:normal;line-height:1.25;word-break:keep-all}
.${P}-binc{display:flex;flex-wrap:wrap;gap:6px}
.${P}-card{display:inline-grid;justify-items:center;gap:2px;min-width:64px;min-height:64px;padding:4px 6px;border-radius:12px;border:1px solid rgba(61,53,46,.22);background:#fff;color:#3D352E;font:inherit;font-size:.85em;font-weight:700;cursor:pointer}
.${P}-card svg{width:52px;height:52px;display:block}
.${P}-card[aria-pressed="true"]{box-shadow:0 0 0 3px #E69D7B;background:#FDF1EA}
.${P}-tools{display:flex;flex-wrap:wrap;gap:8px}
@media print{.${P}-panel,.${P}-tools{display:none}.${P}-card,.${P}-bin,.${P}-tray{background:#fff!important;border-color:#000!important;box-shadow:none!important}.${P}-card svg *{fill:#fff!important;stroke:#000!important}}
`;
    document.head.appendChild(s);
  }
  const h = (tag, attrs, parent, text) => {
    const n = document.createElement(tag);
    if (attrs) for (const k in attrs) if (attrs[k] != null) n.setAttribute(k, attrs[k]);
    if (text != null) n.textContent = text;
    if (parent) parent.appendChild(n);
    return n;
  };
  const button = (parent, html, label, onClick) => {
    const b = h('button', { type: 'button', class: 'pl-btn pl-btn--small', tabindex: '0', 'aria-label': label }, parent);
    b.innerHTML = html; b.addEventListener('click', onClick); return b;
  };
  // 고르기 단추 묶음(라디오) — 방향키로 옮기며 고른다
  function pickRow(parent, label, choices, onPick) {
    const row = h('div', { class: `${P}-picks`, role: 'radiogroup', 'aria-label': label }, parent);
    const btns = choices.map((text, i) => {
      const b = h('button', { type: 'button', class: 'pl-btn pl-btn--small', role: 'radio', 'aria-checked': 'false', tabindex: '0' }, row, text);
      b.addEventListener('click', () => onPick(i));
      b.addEventListener('keydown', (e) => {
        const d = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key]; if (!d) return;
        e.preventDefault(); const j = (i + d + btns.length) % btns.length; onPick(j); btns[j].focus();
      });
      return b;
    });
    return (k) => btns.forEach((b, i) => b.setAttribute('aria-checked', String(i === k)));
  }
  // 수 쓰기 칸 — 직접 쓰거나 ↑↓로 1(소수 칸은 0.1)씩
  function numBox(parent, label, onSet, decimal) {
    const inp = h('input', { class: `${P}-in`, type: 'text', inputmode: decimal ? 'decimal' : 'numeric', autocomplete: 'off', 'aria-label': label, tabindex: '0' }, parent);
    inp.addEventListener('input', () => { inp.value = inp.value.replace(decimal ? /[^0-9.]/g : /[^0-9]/g, '').slice(0, 6); onSet(inp.value === '' || inp.value === '.' ? null : Number(inp.value), true); });
    inp.addEventListener('keydown', (e) => { const d = { ArrowUp: 1, ArrowDown: -1 }[e.key]; if (!d) return; e.preventDefault(); onSet(Math.max(0, r2((Number(inp.value) || 0) + d * (decimal ? 0.1 : 1)))); });
    return inp;
  }
  // 교구 아래 '묻기' 칸: ask(고르기) · askNum(수 쓰기)
  function askPanel(panel, o, log) {
    const a = { pick: null, num: null, setPick: null, numIn: null };
    if (o.ask && Array.isArray(o.ask.choices)) {
      h('p', { class: `${P}-q` }, panel, o.ask.q || '알맞은 것을 고르세요.');
      a.setPick = pickRow(panel, o.ask.q || '고르기', o.ask.choices, (i) => { a.pick = i; a.setPick(i); log(); K.announce(o.ask.choices[i]); });
    }
    if (o.askNum) {
      const row = h('div', { class: `${P}-row` }, panel);
      h('span', { class: `${P}-q` }, row, o.askNum.q || '수를 쓰세요.');
      a.numIn = numBox(row, o.askNum.q || '답', (v, typing) => { a.num = v; if (!typing) a.numIn.value = v == null ? '' : v; log(); }, true);
      if (o.askNum.unit) h('span', { class: `${P}-q` }, row, o.askNum.unit);
    }
    a.set = (s) => {
      if (s.pick !== undefined) { a.pick = s.pick; if (a.setPick) a.setPick(a.pick); }
      if (s.num !== undefined) { a.num = s.num; if (a.numIn) a.numIn.value = a.num == null ? '' : a.num; }
    };
    return a;
  }
  // 묻기 칸 채점: 맞으면 null, 아니면 결과
  function judgeAsk(t, s, o) {
    if (t.pick != null) {
      if (s.pick == null) return { correct: false, incomplete: true, feedback: '아래에서 알맞은 것을 하나 골라요.' };
      if (s.pick !== t.pick) return { correct: false, feedback: (o.ask && o.ask.why && o.ask.why[s.pick]) || '고른 것이 맞지 않아요. 교구를 다시 살펴보고 골라요.', hint: '보기마다 교구에서 그것이 맞는지 하나씩 확인해요.', h3: (o.ask && o.ask.explain) || '교구에서 묻는 것을 직접 세거나 견주어 본 뒤 골라요.' };
    }
    if (t.num != null) {
      if (s.num == null) return { correct: false, incomplete: true, feedback: '답 칸에 수를 써요.' };
      const tol = (o.askNum && o.askNum.tol) || 1e-6;
      if (Math.abs(s.num - t.num) > tol) return { correct: false, feedback: s.num > t.num ? '쓴 수가 너무 커요. 다시 세어 봐요.' : '쓴 수가 너무 작아요. 다시 세어 봐요.', hint: '하나씩 짚으며 빠뜨리거나 두 번 센 것이 없는지 봐요.', h3: (o.askNum && o.askNum.explain) || '처음부터 차례로 짚으며 다시 세어요.' };
    }
    return null;
  }

  // ---------- 기하 도우미 ----------
  const cross = (a, b) => a[0] * b[1] - a[1] * b[0];
  const sub = (a, b) => [a[0] - b[0], a[1] - b[1]];
  const dot = (a, b) => a[0] * b[0] + a[1] * b[1];
  const len2 = (a) => dot(a, a);
  // 같은 점·한 줄 위의 점을 빼고 꼭짓점만 남긴다
  function simplify(pts) {
    let p = pts.filter((q, i) => i === 0 || q[0] !== pts[i - 1][0] || q[1] !== pts[i - 1][1]);
    if (p.length > 1 && p[0][0] === p[p.length - 1][0] && p[0][1] === p[p.length - 1][1]) p.pop();
    let changed = true;
    while (changed && p.length >= 3) {
      changed = false;
      for (let i = 0; i < p.length; i++) {
        const a = p[(i + p.length - 1) % p.length]; const b = p[i]; const c = p[(i + 1) % p.length];
        if (cross(sub(b, a), sub(c, b)) === 0) { p.splice(i, 1); changed = true; break; }
      }
    }
    return p;
  }
  const area2 = (p) => p.reduce((s, q, i) => s + cross(q, p[(i + 1) % p.length]), 0);
  function segCross(a, b, c, d) {
    const o = (p, q, r) => Math.sign(cross(sub(q, p), sub(r, p)));
    const on = (p, q, r) => Math.min(p[0], r[0]) <= q[0] && q[0] <= Math.max(p[0], r[0]) && Math.min(p[1], r[1]) <= q[1] && q[1] <= Math.max(p[1], r[1]);
    const o1 = o(a, b, c); const o2 = o(a, b, d); const o3 = o(c, d, a); const o4 = o(c, d, b);
    if (o1 !== o2 && o3 !== o4) return true;
    return (o1 === 0 && on(a, c, b)) || (o2 === 0 && on(a, d, b)) || (o3 === 0 && on(c, a, d)) || (o4 === 0 && on(c, b, d));
  }
  // 도형의 성질: 꼭짓점 수, 직각 수, 평행한 변의 쌍, 같은 길이 변, 둔각·예각, 넓이
  function analyze(pts) {
    const p = simplify(pts || []);
    const n = p.length;
    const info = { n, valid: false, crossed: false, area: 0, right: 0, obtuse: 0, parallel: 0, equalAll: false, isosceles: false };
    if (n < 3) return info;
    for (let i = 0; i < n; i++) for (let j = i + 2; j < n; j++) {
      if (i === 0 && j === n - 1) continue;
      if (segCross(p[i], p[(i + 1) % n], p[j], p[(j + 1) % n])) info.crossed = true;
    }
    info.area = Math.abs(area2(p)) / 2;
    info.valid = !info.crossed && info.area > 0;
    const e = p.map((q, i) => sub(p[(i + 1) % n], q));
    const L = e.map(len2);
    for (let i = 0; i < n; i++) {
      const a = e[(i + n - 1) % n]; const b = e[i];
      const d = dot([-a[0], -a[1]], b); // 꼭짓점에서 두 변 방향의 내적: 0 직각, <0 둔각
      const convex = cross(a, b) * Math.sign(area2(p)) > 0; // 안쪽으로 꺾인 꼭짓점(오목)은 세지 않는다
      if (d === 0 && convex) info.right++;
      else if (d < 0 && convex) info.obtuse++;
    }
    for (let i = 0; i < n; i++) for (let j = i + 1; j < n; j++) if (cross(e[i], e[j]) === 0) info.parallel++;
    info.equalAll = L.every((x) => x === L[0]);
    info.isosceles = n === 3 && (L[0] === L[1] || L[1] === L[2] || L[0] === L[2]);
    info.pts = p;
    return info;
  }
  const SHAPE_KO = { triangle: '삼각형', 'right-triangle': '직각삼각형', 'acute-triangle': '예각삼각형', 'obtuse-triangle': '둔각삼각형', 'isosceles-triangle': '이등변삼각형', quadrilateral: '사각형', square: '정사각형', rectangle: '직사각형', rhombus: '마름모', parallelogram: '평행사변형', trapezoid: '사다리꼴', pentagon: '오각형', hexagon: '육각형', polygon: '다각형' };
  function isShape(info, name) {
    if (!info.valid) return false;
    const n = info.n;
    switch (name) {
      case 'polygon': return true;
      case 'triangle': return n === 3;
      case 'right-triangle': return n === 3 && info.right === 1;
      case 'obtuse-triangle': return n === 3 && info.obtuse === 1;
      case 'acute-triangle': return n === 3 && info.right === 0 && info.obtuse === 0;
      case 'isosceles-triangle': return n === 3 && info.isosceles;
      case 'quadrilateral': return n === 4;
      case 'trapezoid': return n === 4 && info.parallel >= 1;
      case 'parallelogram': return n === 4 && info.parallel === 2;
      case 'rhombus': return n === 4 && info.parallel === 2 && info.equalAll;
      case 'rectangle': return n === 4 && info.right === 4;
      case 'square': return n === 4 && info.right === 4 && info.equalAll;
      case 'pentagon': return n === 5;
      case 'hexagon': return n === 6;
      default: return false;
    }
  }
  // 가장 알맞은 이름(exact 판정·안내용)
  function bestName(info) {
    if (!info.valid) return null;
    if (info.n === 3) return info.right ? 'right-triangle' : info.obtuse ? 'obtuse-triangle' : 'acute-triangle';
    if (info.n === 4) for (const k of ['square', 'rectangle', 'rhombus', 'parallelogram', 'trapezoid']) if (isShape(info, k)) return k;
    if (info.n === 4) return 'quadrilateral';
    return info.n === 5 ? 'pentagon' : info.n === 6 ? 'hexagon' : 'polygon';
  }
  const EXACT = { quadrilateral: ['quadrilateral'] };
  const QUADS = ['quadrilateral', 'square', 'rectangle', 'rhombus', 'parallelogram', 'trapezoid'];
  // 점판 위에 만들 수 있는 여러 도형(풀이·오답 만들기용) — 작은 것·반듯한 것부터
  function candidates(m) {
    const out = [];
    const add = (pts) => {
      const xs = pts.map((p) => p[0]); const ys = pts.map((p) => p[1]);
      const bw = Math.max(...xs) - Math.min(...xs); const bh = Math.max(...ys) - Math.min(...ys);
      if (Math.min(...xs) < 0 || Math.min(...ys) < 0 || Math.max(...xs) > m || Math.max(...ys) > m) return;
      const dx = Math.floor((m - bw) / 2) - Math.min(...xs); const dy = Math.floor((m - bh) / 2) - Math.min(...ys);
      out.push({ pts: pts.map((p) => [p[0] + dx, p[1] + dy]), key: bw + bh + Math.abs(bw - bh) * 0.3 + out.length * 1e-4 });
    };
    for (let w = 1; w <= m; w++) for (let hh = 1; hh <= m; hh++) {
      add([[0, 0], [w, 0], [w, hh], [0, hh]]);
      for (let s = 1; s + w <= m; s++) add([[s, 0], [s + w, 0], [w, hh], [0, hh]]);
      for (let a = 0; a < w; a++) for (let b = 0; a + b < w; b++) if (a + b > 0) add([[a, 0], [w - b, 0], [w, hh], [0, hh]]);
      add([[0, 0], [0, hh], [w, hh]]);
      for (let a = 1; a <= w; a++) add([[a, 0], [0, hh], [w, hh]]);
      if (w % 2 === 0) add([[w / 2, 0], [w, hh], [w / 2, 2 * hh], [0, hh]]);
      for (let k = 1; k < hh; k++) if (w % 2 === 0) add([[0, hh], [0, k], [w / 2, 0], [w, k], [w, hh]]);
    }
    for (let a = 1; a <= m; a++) for (let b = 1; b <= m; b++) for (let c = 1; 2 * c <= m; c++) add([[a, 0], [a + b, 0], [2 * a + b, c], [a + b, 2 * c], [a, 2 * c], [0, c]]);
    for (let w = 2; w <= m; w++) for (let hh = 1; hh <= m; hh++) add([[0, hh], [w, hh], [w + 1 > m ? w - 1 : w + 1, 0]]);
    return out.sort((x, y) => x.key - y.key).map((c) => c.pts);
  }

  // ---------- 칠교 ----------
  // 기준 정사각형(한 변 4) 안의 일곱 조각. 같은 종류 조각은 서로 바꿔 놓아도 된다.
  const BASE = { L: [[0, 0], [4, 0], [2, 2]], M: [[4, 2], [4, 4], [2, 4]], S: [[4, 0], [4, 2], [3, 1]], Q: [[2, 2], [3, 1], [4, 2], [3, 3]], P: [[0, 4], [1, 3], [3, 3], [2, 4]] };
  const KIND_KO = { L: '큰 삼각형', M: '중간 삼각형', S: '작은 삼각형', Q: '정사각형 조각', P: '평행사변형 조각' };
  const KIND_COLOR = { L: 'sky', M: 'peach', S: 'buttercup', Q: 'mint', P: 'rose' };
  const centroid = (pts) => [pts.reduce((s, p) => s + p[0], 0) / pts.length, pts.reduce((s, p) => s + p[1], 0) / pts.length];
  const CANON = {};
  for (const k in BASE) { const c = centroid(BASE[k]); CANON[k] = BASE[k].map((p) => [p[0] - c[0], p[1] - c[1]]); }
  function placed(k, x, y, r, f) {
    const t = (r * Math.PI) / 180; const cs = Math.cos(t); const sn = Math.sin(t);
    return CANON[k].map(([px, py]) => { const qx = f ? -px : px; return [qx * cs - py * sn + x, qx * sn + py * cs + y]; });
  }
  function sameSet(a, b, tol) {
    if (a.length !== b.length) return false;
    const used = new Array(b.length).fill(false);
    return a.every((p) => { const j = b.findIndex((q, i) => !used[i] && Math.hypot(p[0] - q[0], p[1] - q[1]) <= tol); if (j < 0) return false; used[j] = true; return true; });
  }
  function fitTo(k, pts) {
    const c = centroid(pts);
    for (let f = 0; f <= 1; f++) for (let r = 0; r < 360; r += 45) if (sameSet(placed(k, c[0], c[1], r, f), pts, 0.08)) return { x: c[0], y: c[1], r, f };
    return null;
  }
  const FIGURES = {
    square7: [['L', BASE.L], ['L', [[0, 0], [2, 2], [0, 4]]], ['M', BASE.M], ['S', BASE.S], ['Q', BASE.Q], ['S', [[1, 3], [2, 2], [3, 3]]], ['P', BASE.P]],
    square2: [['S', [[0, 1], [1, 0], [1, 2]]], ['S', [[1, 0], [2, 1], [1, 2]]]],
    triangle2: [['S', [[0, 0], [1, 1], [0, 2]]], ['S', [[0, 2], [1, 1], [2, 2]]]],
    parallelogram2: [['S', [[0, 0], [2, 0], [1, 1]]], ['S', [[2, 0], [3, 1], [1, 1]]]],
    square3: [['M', [[0, 0], [2, 2], [0, 2]]], ['S', [[0, 0], [2, 0], [1, 1]]], ['S', [[2, 0], [2, 2], [1, 1]]]],
    triangle3: [['M', [[0, 2], [2, 0], [2, 2]]], ['S', [[2, 0], [3, 1], [2, 2]]], ['S', [[3, 1], [4, 2], [2, 2]]]],
  };

  // ---------- 분류 카드 모양(0~1 상자 안) ----------
  const reg = (n, rot) => Array.from({ length: n }, (_, i) => { const a = rot + (i * 2 * Math.PI) / n; return [0.5 + 0.45 * Math.cos(a), 0.52 + 0.45 * Math.sin(a)]; });
  const CARD = {
    triangle: [[0.5, 0.08], [0.94, 0.9], [0.06, 0.9]], 'right-triangle': [[0.12, 0.1], [0.12, 0.9], [0.9, 0.9]], 'obtuse-triangle': [[0.04, 0.78], [0.96, 0.78], [0.26, 0.3]],
    square: [[0.15, 0.15], [0.85, 0.15], [0.85, 0.85], [0.15, 0.85]], rectangle: [[0.04, 0.28], [0.96, 0.28], [0.96, 0.72], [0.04, 0.72]],
    parallelogram: [[0.28, 0.25], [0.96, 0.25], [0.72, 0.75], [0.04, 0.75]], rhombus: [[0.5, 0.04], [0.86, 0.5], [0.5, 0.96], [0.14, 0.5]],
    trapezoid: [[0.3, 0.25], [0.7, 0.25], [0.96, 0.75], [0.04, 0.75]], pentagon: reg(5, -Math.PI / 2), hexagon: reg(6, 0),
  };
  function cardSvg(c) {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 100 100'); svg.setAttribute('aria-hidden', 'true');
    const fill = '#BDE0EA'; const stroke = '#204C5A';
    let n;
    if (c.shape === 'circle' || c.shape === 'oval') { n = K.el('ellipse', { cx: 50, cy: 50, rx: 44, ry: c.shape === 'oval' ? 28 : 44, fill, stroke, 'stroke-width': 3 }, svg); }
    else {
      const pts = Array.isArray(c.pts) ? c.pts : CARD[c.shape] || CARD.square;
      n = K.el('polygon', { points: pts.map((p) => `${(p[0] * 100).toFixed(1)},${(p[1] * 100).toFixed(1)}`).join(' '), fill, stroke, 'stroke-width': 3, 'stroke-linejoin': 'round' }, svg);
    }
    if (c.rot) n.setAttribute('transform', `rotate(${Number(c.rot) || 0} 50 50)`);
    return svg;
  }

  K.registerTool('shapes', {
    name: '도형판',
    create(box, o, kit) {
      ensureStyle();
      const mode = ['tangram', 'classify'].includes(o.mode) ? o.mode : 'geoboard';
      const print = !!o.print; const ro = !!o.readOnly || print;
      let revealed = false;
      const showVals = () => !print && (!o.revealAfterCheck || revealed);
      let log = () => {};
      const panel = print ? null : document.createElement('div');
      if (panel) panel.className = `${P}-panel`;
      let ask = { pick: null, num: null, set() {} };
      const M = {}; // 모드별 구현: state(), set(s), judge(t), solve(t), wrong(t), hint1(t), dist(a,b), paint()

      // ================= 점판 =================
      if (mode === 'geoboard') {
        const n = K.clamp(Math.round(o.size || 5), 3, 10); const m = n - 1;
        const W = 600; const H = 400; const B = 380; const gap = (B - 40) / m; const X0 = 30; const Y0 = 30;
        const st = kit.stage(box, { viewBox: [W, H], label: `점판. 가로 세로 ${n}줄 점이 있어요. 점을 차례로 찍으면 선으로 이어져 도형이 돼요.` });
        kit.piece(st, st.layer('back'), { shape: { type: 'rect', x: 8, y: 8, w: B + 4, h: B + 4, rx: 18 }, color: 'buttercup', depth: 2, texture: !print, fill: print ? '#fff' : '#FFF6DE' });
        const L = st.layer('poly'); const D = st.layer('dots'); const R = st.layer('read');
        const XY = (c) => [X0 + c[0] * gap, Y0 + c[1] * gap];
        const poly = kit.el('polygon', { fill: 'rgba(163,216,195,.55)', stroke: '#275C46', 'stroke-width': 4, 'stroke-linejoin': 'round', points: '' }, L);
        const path = kit.el('polyline', { fill: 'none', stroke: '#275C46', 'stroke-width': 4, 'stroke-linejoin': 'round', 'stroke-linecap': 'round', points: '' }, L);
        const marks = kit.el('g', null, L);
        let pts = []; let cursor = [Math.floor(m / 2), Math.floor(m / 2)];
        const dots = [];
        const hitR = Math.min(gap * 0.48, 40);
        for (let r = 0; r < n; r++) for (let c = 0; c < n; c++) {
          const [x, y] = XY([c, r]);
          const g = kit.el('g', { class: `${P}-dot` }, D);
          kit.el('circle', { cx: x, cy: y, r: hitR, class: 'pk-hit' }, g);
          kit.piece(st, g, { shape: { type: 'circle', r: 8, cx: x, cy: y }, color: 'ink', depth: 1 });
          if (!ro) g.addEventListener('click', () => { cursor = [c, r]; toggle([c, r]); });
          dots.push({ c, r, g });
        }
        const cur = kit.el('circle', { r: 17, fill: 'none', stroke: '#E69D7B', 'stroke-width': 4, display: 'none' }, D);
        const nums = kit.el('g', null, R);
        const readTxt = kit.el('text', { x: 405, y: 60, 'font-size': 20, class: 'pk-text', fill: '#3D352E' }, R);
        const readTxt2 = kit.el('text', { x: 405, y: 92, 'font-size': 20, class: 'pk-text', fill: '#3D352E' }, R);
        const readTxt3 = kit.el('text', { x: 405, y: 124, 'font-size': 20, class: 'pk-text', fill: '#3D352E' }, R);
        if (!print && !ro) {
          kit.el('text', { x: 405, y: 330, 'font-size': 15, class: 'pk-text', fill: '#544B42' }, R).textContent = '점을 누르면 찍혀요.';
          kit.el('text', { x: 405, y: 354, 'font-size': 15, class: 'pk-text', fill: '#544B42' }, R).textContent = '찍은 점을 또 누르면 빠져요.';
        }
        // 키보드: 점판 전체가 하나의 초점 — 방향키로 고르고 Enter로 찍는다
        if (!ro) {
          const hit = kit.el('rect', { x: 10, y: 10, width: B, height: B, fill: 'transparent', tabindex: '0', role: 'application', 'aria-label': '점판. 방향키로 점을 고르고 Enter로 찍어요. Backspace는 마지막 점 빼기.', class: `${P}-board` }, D);
          D.insertBefore(hit, D.firstChild);
          hit.addEventListener('focus', () => { cur.setAttribute('display', 'inline'); paintCursor(); });
          hit.addEventListener('blur', () => cur.setAttribute('display', 'none'));
          hit.addEventListener('keydown', (e) => {
            const d = { ArrowLeft: [-1, 0], ArrowRight: [1, 0], ArrowUp: [0, -1], ArrowDown: [0, 1] }[e.key];
            if (d) { e.preventDefault(); cursor = [K.clamp(cursor[0] + d[0], 0, m), K.clamp(cursor[1] + d[1], 0, m)]; paintCursor(); kit.announce(`${cursor[1] + 1}째 줄 ${cursor[0] + 1}째 점`); return; }
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(cursor.slice()); return; }
            if (e.key === 'Backspace' || e.key === 'Delete') { e.preventDefault(); if (pts.length) { pts.pop(); changed(); } }
          });
        }
        function paintCursor() { const [x, y] = XY(cursor); cur.setAttribute('cx', x); cur.setAttribute('cy', y); }
        function toggle(c) {
          const i = pts.findIndex((p) => p[0] === c[0] && p[1] === c[1]);
          if (i >= 0) pts.splice(i, 1);
          else if (pts.length < (o.maxPts || 10)) pts.push(c);
          changed();
          kit.announce(i >= 0 ? `점을 뺐어요. 찍은 점 ${pts.length}개` : `점을 찍었어요. 찍은 점 ${pts.length}개`);
        }
        function changed() { revealed = false; M.paint(); log(); kit.tick(); }
        M.paint = () => {
          const xy = pts.map((p) => XY(p).join(',')).join(' ');
          const closed = pts.length >= 3;
          poly.setAttribute('points', closed ? xy : ''); path.setAttribute('points', closed ? '' : xy);
          if (print) { poly.setAttribute('fill', 'none'); poly.setAttribute('stroke', '#000'); path.setAttribute('stroke', '#000'); }
          while (nums.firstChild) nums.removeChild(nums.firstChild);
          while (marks.firstChild) marks.removeChild(marks.firstChild);
          if (!print) pts.forEach((p, i) => { const [x, y] = XY(p); kit.el('circle', { cx: x, cy: y, r: 11, fill: '#E69D7B', stroke: '#fff', 'stroke-width': 2 }, nums); });
          const info = analyze(pts);
          if (o.showRight && info.valid && !print) {
            const q = info.pts; const k = q.length;
            for (let i = 0; i < k; i++) {
              const a = sub(q[(i + k - 1) % k], q[i]); const b = sub(q[(i + 1) % k], q[i]);
              if (dot(a, b) !== 0) continue;
              const ua = a.map((v) => v / Math.sqrt(len2(a)) * 14); const ub = b.map((v) => v / Math.sqrt(len2(b)) * 14);
              const [x, y] = XY(q[i]);
              kit.el('path', { d: `M${x + ua[0]} ${y + ua[1]} L${x + ua[0] + ub[0]} ${y + ua[1] + ub[1]} L${x + ub[0]} ${y + ub[1]}`, fill: 'none', stroke: '#702830', 'stroke-width': 2.5 }, marks);
            }
          }
          const show = showVals();
          const cnt = o.showCounts !== false && show;
          readTxt.textContent = cnt ? `꼭짓점 ${info.valid ? info.n : '-'}개` : '';
          readTxt2.textContent = cnt ? `변 ${info.valid ? info.n : '-'}개` : '';
          readTxt3.textContent = o.showArea && show ? `넓이 ${info.valid ? info.area : '-'}칸` : '';
        };
        M.state = () => ({ pts: pts.map((p) => p.slice()) });
        M.set = (s) => { if (Array.isArray(s.pts)) pts = s.pts.filter((p) => Array.isArray(p) && p.length === 2).map((p) => [K.clamp(Math.round(p[0]), 0, m), K.clamp(Math.round(p[1]), 0, m)]); };
        const geoKeys = (t) => ['sides', 'shape', 'area', 'rightAngles', 'parallel'].some((k) => t[k] != null);
        const passes = (info, t) => (t.sides == null || (info.valid && info.n === t.sides))
          && (t.shape == null || (isShape(info, t.shape) && (!t.exact || !QUADS.includes(t.shape) || bestName(info) === t.shape || (EXACT[t.shape] || []).includes(bestName(info)))))
          && (t.area == null || (info.valid && Math.abs(info.area - t.area) < 1e-9))
          && (t.rightAngles == null || (info.valid && info.right === t.rightAngles))
          && (t.parallel == null || (info.valid && info.parallel === t.parallel));
        M.judge = (t) => {
          if (!geoKeys(t)) return null;
          if (pts.length < 3) return { correct: false, incomplete: true, feedback: '점을 세 개 이상 찍어 도형을 만들어요.' };
          const info = analyze(pts);
          if (info.crossed) return { correct: false, feedback: '선이 서로 엇갈렸어요. 둘레를 따라 차례로 점을 찍어요.', hint: '도형의 둘레를 한 방향으로 돌며 꼭짓점을 차례로 찍어요.', h3: '점을 모두 빼고, 한 꼭짓점에서 시작해 시계 방향으로 돌며 다시 찍어 보세요.' };
          if (!info.valid) return { correct: false, feedback: '점이 모두 한 줄 위에 있어 도형이 되지 않아요.', hint: '곧은 선 하나에서 벗어난 점이 있어야 도형이 생겨요.', h3: '한 점을 다른 줄로 옮겨 보세요.' };
          if (passes(info, t)) return null;
          const ko = (k) => SHAPE_KO[k] || '도형';
          if (t.sides != null && info.n !== t.sides) return { correct: false, feedback: info.n > t.sides ? '변이 너무 많아요. 변의 수를 다시 세어 봐요.' : '변이 모자라요. 변의 수를 다시 세어 봐요.', hint: '찍은 꼭짓점 수와 변의 수는 같아요. 한 줄 위에 놓인 점은 꼭짓점이 아니에요.', h3: `변이 ${t.sides}개이려면 곧은 선 위에 있지 않은 꼭짓점이 ${t.sides}개 있어야 해요.` };
          if (t.shape != null) {
            const want = t.shape; let fb = `지금 도형은 ${josa(ko(want), '이', '가')} 아니에요.`; let hint = '도형의 이름이 되는 조건(변의 수, 직각, 평행, 변의 길이)을 하나씩 확인해요.';
            const tri = want.endsWith('triangle') || want === 'triangle';
            const quad = QUADS.includes(want);
            if (tri && info.n !== 3) fb = '삼각형은 변이 셋이에요. 꼭짓점 수를 다시 세어 봐요.';
            else if (quad && info.n !== 4) fb = '사각형은 변이 넷이에요. 꼭짓점 수를 다시 세어 봐요.';
            else if (want === 'pentagon' || want === 'hexagon') fb = '변의 수를 다시 세어 봐요.';
            else if ((want === 'square' || want === 'rectangle') && info.right < 4) { fb = '네 각이 모두 직각이어야 해요. 직각이 아닌 각이 있어요.'; hint = '점판의 가로줄과 세로줄을 따라 그으면 직각이 생겨요.'; }
            else if ((want === 'square' || want === 'rhombus') && !info.equalAll) { fb = '네 변의 길이가 모두 같아야 해요.'; hint = '변마다 점판 칸을 몇 칸 지나는지 세어 견주어요.'; }
            else if ((want === 'parallelogram' || want === 'rhombus') && info.parallel < 2) { fb = '마주 보는 두 쌍의 변이 모두 평행해야 해요.'; hint = '마주 보는 변이 같은 방향으로 같은 칸만큼 가는지 봐요.'; }
            else if (want === 'trapezoid' && info.parallel < 1) { fb = '평행한 변이 한 쌍도 없어요. 사다리꼴은 평행한 변이 적어도 한 쌍 있어요.'; hint = '윗변과 아랫변을 같은 가로줄 방향으로 그어 보세요.'; }
            else if (want === 'right-triangle') { fb = '직각인 각이 없어요.'; hint = '가로줄과 세로줄이 만나는 곳에 꼭짓점을 두면 직각이 생겨요.'; }
            else if (want === 'obtuse-triangle') { fb = '둔각(직각보다 큰 각)이 없어요.'; hint = '한 꼭짓점을 옆으로 멀리 밀면 그 맞은편 각이 커져요.'; }
            else if (want === 'acute-triangle') { fb = '세 각이 모두 예각이어야 해요. 직각이나 둔각이 있어요.'; hint = '위 꼭짓점을 밑변 가운데 위쪽으로 옮겨 보세요.'; }
            else if (want === 'isosceles-triangle') { fb = '두 변의 길이가 같아야 해요.'; hint = '위 꼭짓점을 밑변의 가운데 위에 두면 두 변이 같아져요.'; }
            else if (t.exact && QUADS.includes(want)) fb = `조건은 맞지만 더 알맞은 이름이 있어요. 지금 도형은 ${josa(ko(bestName(info)), '이에요', '예요')}.`;
            return { correct: false, feedback: fb, hint, h3: `${ko(want)}의 조건을 모두 갖춘 예: 점판에서 가로·세로줄을 따라 반듯하게 그려 본 뒤 한 점씩 옮겨 보세요.` };
          }
          if (t.area != null) return { correct: false, feedback: info.area > t.area ? '넓이가 목표보다 커요.' : '넓이가 목표보다 작아요.', hint: '도형 안에 들어간 온전한 칸과 반 칸을 세어 더해요. 반 칸 두 개가 한 칸이에요.', h3: `넓이 ${t.area}칸: 예를 들어 가로와 세로 칸 수를 곱해 ${t.area}가 되는 직사각형부터 생각해요.` };
          if (t.rightAngles != null) return { correct: false, feedback: '직각의 수가 맞지 않아요.', hint: '모서리마다 직각 모양(ㄴ)이 되는지 확인해요.', h3: `직각이 ${t.rightAngles}개가 되게 꼭짓점을 옮겨요.` };
          return { correct: false, feedback: '평행한 변의 쌍 수가 맞지 않아요.', hint: '서로 만나지 않고 같은 방향으로 가는 두 변을 찾아요.', h3: `평행한 변이 ${t.parallel}쌍 되게 꼭짓점을 옮겨요.` };
        };
        const cands = () => M._c || (M._c = candidates(m));
        M.solve = (t) => { if (!geoKeys(t)) return; const c = cands().find((p) => passes(analyze(p), t)); if (c) pts = c.map((p) => p.slice()); };
        M.wrong = (t) => {
          if (!geoKeys(t)) return null;
          const sol = cands().find((p) => passes(analyze(p), t));
          const si = sol ? analyze(sol) : { n: t.sides || 4, area: t.area || 4 };
          let best = null; let score = Infinity;
          for (const p of cands()) {
            const i = analyze(p); if (passes(i, t)) continue;
            const sc = Math.abs(i.n - si.n) * 10 + Math.abs(i.area - si.area);
            if (sc < score) { score = sc; best = p; }
            if (sc === 0) break;
          }
          return best ? { pts: best.map((p) => p.slice()) } : null;
        };
        M.hint1 = (t) => (t.shape != null ? '도형의 이름이 되는 조건(변과 꼭짓점의 수, 직각, 평행한 변, 변의 길이)을 떠올리며 점을 찍어요.'
          : t.area != null ? '넓이는 도형 안에 점판 한 칸(작은 정사각형)이 몇 개 들어가는지로 세어요. 반 칸 두 개는 한 칸이에요.'
            : t.sides != null ? '변은 꼭짓점과 꼭짓점을 이은 곧은 선이에요. 곧은 선 위에 놓인 점은 꼭짓점이 아니에요.'
              : t.rightAngles != null ? '직각은 가로줄과 세로줄이 만나는 모양(ㄴ)이에요.' : '서로 만나지 않고 나란히 가는 두 변을 평행하다고 해요.');
        // 점 하나 찍기·빼기가 한 걸음
        M.dist = (a, b) => { const A = (a.pts || []).map(String); const Bp = (b.pts || []).map(String); const d = Bp.filter((x) => !A.includes(x)).length + A.filter((x) => !Bp.includes(x)).length; return d || (A.join() === Bp.join() ? 0 : 1); };
      }

      // ================= 칠교 =================
      if (mode === 'tangram') {
        const slots = (Array.isArray(o.slots) && o.slots.length ? o.slots.map((s) => [s.k, s.pts]) : FIGURES[o.figure] || FIGURES.square2)
          .filter(([k, p]) => BASE[k] && Array.isArray(p)).map(([k, p]) => ({ k, pts: p.map((q) => [Number(q[0]), Number(q[1])]) }));
        const kinds = Array.isArray(o.pieces) && o.pieces.length ? o.pieces.filter((k) => BASE[k]) : slots.map((s) => s.k);
        const W = 640; const H = 400;
        const xs = slots.flatMap((s) => s.pts.map((p) => p[0])); const ys = slots.flatMap((s) => s.pts.map((p) => p[1]));
        const bx = Math.min(...xs); const by = Math.min(...ys); const bw = Math.max(...xs) - bx; const bh = Math.max(...ys) - by;
        // 쟁반 자리: 높이가 큰 조각부터 선반에 쌓는다(넘치면 조금씩 줄인다)
        const bbox = (k) => { const v = placed(k, 0, 0, 0, 0); return [Math.min(...v.map((p) => p[0])), Math.min(...v.map((p) => p[1])), Math.max(...v.map((p) => p[0])), Math.max(...v.map((p) => p[1]))]; };
        let S = Math.min(70, 290 / Math.max(bw, 0.1), 340 / Math.max(bh, 0.1)); let tray = [];
        const TX = 352; const TW = 278; const TH = 370;
        for (let tries = 0; tries < 20; tries++) {
          tray = []; let x = 0; let y = 0; let rowH = 0; let ok = true;
          const order = kinds.map((k, i) => ({ k, i, b: bbox(k) })).sort((a, b) => (b.b[3] - b.b[1]) - (a.b[3] - a.b[1]));
          for (const it of order) {
            const w = (it.b[2] - it.b[0]) * S; const hh = (it.b[3] - it.b[1]) * S;
            if (x + w > TW) { x = 0; y += rowH + 10; rowH = 0; }
            tray[it.i] = [TX + x - it.b[0] * S, 20 + y - it.b[1] * S];
            x += w + 10; rowH = Math.max(rowH, hh);
          }
          if (y + rowH > TH) ok = false;
          if (ok) break; S *= 0.9;
        }
        const OX = 176 - (bx + bw / 2) * S; const OY = 200 - (by + bh / 2) * S;
        const st = kit.stage(box, { viewBox: [W, H], label: `칠교판. 왼쪽 그림자 자리에 오른쪽 조각 ${kinds.length}개를 끌어 맞춰요. 조각을 고른 뒤 돌리기와 뒤집기를 할 수 있어요.` });
        kit.piece(st, st.layer('back'), { shape: { type: 'rect', x: 8, y: 8, w: 336, h: H - 16, rx: 18 }, color: 'lavender', depth: 2, texture: !print, fill: print ? '#fff' : '#F4F0FA' });
        kit.piece(st, st.layer('back'), { shape: { type: 'rect', x: 348, y: 8, w: W - 356, h: H - 16, rx: 18 }, color: 'cream', depth: 1, fill: print ? '#fff' : '#FFFDF9' });
        const SH = st.layer('shadow');
        for (const s of slots) {
          const pp = s.pts.map((p) => `${r2(OX + p[0] * S)},${r2(OY + p[1] * S)}`).join(' ');
          const fill = print ? '#E4E4E4' : '#B8A6D9';
          kit.el('polygon', { points: pp, fill, stroke: o.lines ? (print ? '#555' : '#473B6B') : fill, 'stroke-width': o.lines ? 2 : 1.5, 'stroke-dasharray': o.lines ? '6 4' : null, 'stroke-linejoin': 'round' }, SH);
        }
        const PL = st.layer('pieces');
        let sel = 0;
        const pcs = kinds.map((k, i) => {
          const pts = CANON[k].map((p) => `${r2(p[0] * S)},${r2(p[1] * S)}`).join(' ');
          const pc = kit.piece(st, PL, { shape: { type: 'poly', points: pts }, color: KIND_COLOR[k], depth: 1, label: `${KIND_KO[k]} 조각` });
          kit.transform(pc.g, { x: tray[i][0], y: tray[i][1], r: 0, sx: 1, sy: 1 });
          if (!ro) {
            kit.drag(st, pc.g, {
              keyStep: 0.5 * S, bounds: [10, 10, W - 10, H - 10],
              onStart: () => select(i),
              snap: (x, y) => snapPx(i, x, y),
              onMove: () => { revealed = false; },
              onDrop: () => { revealed = false; log(); kit.tick(); },
            });
            pc.g.addEventListener('focus', () => select(i));
            pc.g.addEventListener('keydown', (e) => {
              if (e.key === 'r' || e.key === 'R') { e.preventDefault(); turn(i, 45); }
              if (e.key === 'f' || e.key === 'F') { e.preventDefault(); flip(i); }
            });
          }
          return { k, pc, r: 0, f: 0 };
        });
        function select(i) { sel = i; pcs.forEach((p, j) => p.pc.face.setAttribute('stroke', j === i && !print ? '#473B6B' : 'rgba(255,255,255,0.55)')); pcs.forEach((p, j) => p.pc.face.setAttribute('stroke-width', j === i && !print ? 3 : 1)); }
        const posU = (i) => { const t = pcs[i].pc.g.__pk || { x: 0, y: 0 }; return [(t.x - OX) / S, (t.y - OY) / S]; };
        // 같은 모양·같은 방향으로 그림자 자리 가까이(0.5칸) 오면 그 자리에 딱 붙인다
        function snapU(i, x, y) {
          const p = pcs[i];
          for (const s of slots) {
            if (s.k !== p.k) continue;
            if (sameSet(placed(p.k, x, y, p.r, p.f), s.pts, 0.5)) { const c = centroid(s.pts); return c; }
          }
          return null;
        }
        function snapPx(i, x, y) { const u = snapU(i, (x - OX) / S, (y - OY) / S); return u ? { x: OX + u[0] * S, y: OY + u[1] * S } : { x, y }; }
        function applyT(i) { const p = pcs[i]; kit.transform(p.pc.g, { r: p.r, sx: p.f ? -1 : 1, sy: 1 }); }
        function afterTurn(i) {
          const [x, y] = posU(i); const u = snapU(i, x, y);
          if (u) kit.transform(pcs[i].pc.g, { x: OX + u[0] * S, y: OY + u[1] * S });
          revealed = false; log(); kit.tick();
        }
        function turn(i, d) { const p = pcs[i]; p.r = ((p.r + d) % 360 + 360) % 360; applyT(i); afterTurn(i); kit.announce(`${KIND_KO[p.k]}을 돌렸어요`); }
        function flip(i) { const p = pcs[i]; p.f = p.f ? 0 : 1; applyT(i); afterTurn(i); kit.announce(`${KIND_KO[p.k]}을 뒤집었어요`); }
        if (panel && !ro) {
          const row = h('div', { class: `${P}-tools` }, panel);
          button(row, '<i class="fi fi-rr-rotate-right" aria-hidden="true"></i> 돌리기 (R)', '고른 조각 돌리기', () => turn(sel, 45));
          button(row, '<i class="fi fi-rr-flip-horizontal" aria-hidden="true"></i> 뒤집기 (F)', '고른 조각 뒤집기', () => flip(sel));
        }
        M.state = () => ({ pieces: pcs.map((p, i) => { const [x, y] = posU(i); return { x: r2(x), y: r2(y), r: p.r, f: p.f }; }) });
        M.set = (s) => {
          if (!Array.isArray(s.pieces)) return;
          s.pieces.forEach((q, i) => {
            if (!pcs[i] || !q) return;
            pcs[i].r = ((Math.round((q.r || 0) / 45) * 45) % 360 + 360) % 360; pcs[i].f = q.f ? 1 : 0;
            applyT(i);
            if (q.x != null && q.y != null) kit.transform(pcs[i].pc.g, { x: OX + q.x * S, y: OY + q.y * S }); else kit.transform(pcs[i].pc.g, { x: tray[i][0], y: tray[i][1] });
          });
        };
        M.paint = () => {};
        const match = () => {
          const used = new Array(pcs.length).fill(false); let hit = 0;
          const free = [];
          for (const s of slots) {
            const j = pcs.findIndex((p, i) => !used[i] && p.k === s.k && sameSet(placed(p.k, ...posU(i), p.r, p.f), s.pts, 0.12));
            if (j >= 0) { used[j] = true; hit++; } else free.push(s);
          }
          return { hit, free };
        };
        const onBoard = () => pcs.some((p, i) => { const [x] = posU(i); return OX + x * S < 344; });
        M.judge = (t) => {
          if (!t.fit) return null;
          if (!onBoard()) return { correct: false, incomplete: true, feedback: '조각을 끌어 왼쪽 그림자 위에 놓아요.' };
          const { hit, free } = match();
          if (!free.length) return null;
          const k = free[0].k;
          return { correct: false, feedback: hit ? `조각 ${hit}개가 자리를 찾았어요. 아직 빈 곳이 ${free.length}군데 있어요.` : '아직 그림자 자리에 꼭 맞은 조각이 없어요.', hint: '비어 있는 곳의 모양과 크기를 보고, 같은 조각을 찾아 돌리거나 뒤집어 맞춰요.', h3: `비어 있는 곳 하나는 ${KIND_KO[k]} 자리예요. 그 조각을 돌리기(R)와 뒤집기(F)로 방향을 맞춘 뒤 끌어 놓아요.` };
        };
        M.solve = (t) => {
          if (!t.fit) return;
          const used = new Array(pcs.length).fill(false);
          for (const s of slots) {
            const j = pcs.findIndex((p, i) => !used[i] && p.k === s.k); if (j < 0) continue;
            used[j] = true; const fit = fitTo(s.k, s.pts); if (!fit) continue;
            pcs[j].r = fit.r; pcs[j].f = fit.f; applyT(j); kit.transform(pcs[j].pc.g, { x: OX + fit.x * S, y: OY + fit.y * S });
          }
        };
        // 흔한 실수: 평행사변형(없으면 마지막 조각)을 뒤집지 않거나 돌리지 않고 자리에 둔다
        M.wrong = (t) => {
          if (!t.fit) return null;
          M.solve(t);
          const s = M.state();
          let j = pcs.findIndex((p) => p.k === 'P'); if (j < 0) j = pcs.length - 1;
          if (pcs[j].k === 'P') s.pieces[j].f = s.pieces[j].f ? 0 : 1; else s.pieces[j].r = (s.pieces[j].r + 45) % 360;
          return s;
        };
        M.hint1 = () => '큰 조각부터 그림자의 넓은 곳에 놓아 보세요. 조각을 돌리거나 뒤집으면 방향이 바뀌어요.';
        M.dist = (a, b) => (a.pieces || []).reduce((d, p, i) => { const q = (b.pieces || [])[i] || {}; return d + (Math.hypot(p.x - q.x, p.y - q.y) > 0.01 ? 1 : 0) + (p.r !== q.r ? 1 : 0) + (p.f !== q.f ? 1 : 0); }, 0);
      }

      // ================= 분류 =================
      if (mode === 'classify') {
        const cards = (Array.isArray(o.cards) ? o.cards : []).filter((c) => c && c.id != null).map((c) => Object.assign({}, c, { id: String(c.id) }));
        const bins = Array.isArray(o.bins) && o.bins.length ? o.bins.map(String) : ['가', '나'];
        const wrap = h('div', { class: `${P}-cls`, role: 'group', 'aria-label': '도형 카드 분류' }, box);
        const tray = h('div', { class: `${P}-tray`, 'aria-label': '카드 칸' }, wrap);
        const binsEl = h('div', { class: `${P}-bins` }, wrap);
        const placedMap = {}; let sel = null;
        const binBoxes = bins.map((name, i) => {
          const b = h('div', { class: `${P}-bin` }, binsEl);
          const hd = h('button', { type: 'button', class: `pl-btn pl-btn--small ${P}-binh`, tabindex: '0', 'aria-label': `${i + 1}번 칸 ${name}에 넣기` }, b, `${i + 1}. ${name}`);
          if (!ro) hd.addEventListener('click', () => { if (sel != null) put(sel, i); });
          return h('div', { class: `${P}-binc` }, b);
        });
        if (!ro) {
          const back = button(wrap, '<i class="fi fi-rr-undo" aria-hidden="true"></i> 고른 카드 되돌리기', '고른 카드를 카드 칸으로 되돌리기', () => { if (sel != null) put(sel, null); });
          back.style.justifySelf = 'start';
        }
        const els = {};
        cards.forEach((c) => {
          placedMap[c.id] = null;
          const b = h('button', { type: 'button', class: `${P}-card`, tabindex: '0', 'aria-pressed': 'false', 'aria-label': `카드 ${c.label || c.id}` }, tray);
          b.appendChild(cardSvg(c));
          if (c.label) h('span', null, b, c.label);
          if (!ro) {
            b.addEventListener('click', () => { if (sel === c.id) { cycle(c.id); } else select(c.id); });
            b.addEventListener('keydown', (e) => {
              if (/^[0-9]$/.test(e.key)) { e.preventDefault(); const k = Number(e.key); put(c.id, k === 0 ? null : Math.min(k - 1, bins.length - 1)); select(c.id); }
              else if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); select(c.id); cycle(c.id); }
            });
          }
          els[c.id] = b;
        });
        function select(id) { sel = id; for (const k in els) els[k].setAttribute('aria-pressed', String(k === id)); }
        function cycle(id) { const v = placedMap[id]; put(id, v == null ? 0 : v + 1 >= bins.length ? null : v + 1); }
        function put(id, v) {
          placedMap[id] = v; place(id); revealed = false; log(); kit.tick();
          kit.announce(v == null ? '카드를 카드 칸으로 되돌렸어요' : `카드를 ${bins[v]} 칸에 넣었어요`);
          els[id].focus();
        }
        function place(id) { const v = placedMap[id]; (v == null ? tray : binBoxes[v]).appendChild(els[id]); }
        M.state = () => ({ placed: Object.assign({}, placedMap) });
        M.set = (s) => { if (s.placed) for (const c of cards) { const v = s.placed[c.id]; placedMap[c.id] = Number.isInteger(v) && v >= 0 && v < bins.length ? v : null; place(c.id); } };
        M.paint = () => {};
        M.judge = (t) => {
          if (!t.bins) return null;
          const ids = Object.keys(t.bins);
          if (ids.some((id) => placedMap[id] == null)) return { correct: false, incomplete: true, feedback: '카드를 모두 칸에 넣어요.' };
          const bad = ids.filter((id) => placedMap[id] !== t.bins[id]);
          if (!bad.length) return null;
          return { correct: false, feedback: `잘못 들어간 카드가 ${bad.length}장 있어요. 칸의 이름과 카드 모양을 하나씩 견주어 봐요.`, hint: '카드마다 변의 수, 꼭짓점, 곧은 선과 굽은 선을 살펴요.', h3: `${bad.length}장을 다시 봐요. 예를 들어 '${cards.find((c) => c.id === bad[0]).label || '고른 카드'}' 카드는 ${bins[t.bins[bad[0]]]} 칸이에요.` };
        };
        M.solve = (t) => { if (t.bins) M.set({ placed: Object.assign({}, placedMap, t.bins) }); };
        M.wrong = (t) => {
          if (!t.bins) return null;
          const ids = Object.keys(t.bins); if (!ids.length || bins.length < 2) return null;
          const placedW = Object.assign({}, placedMap, t.bins);
          placedW[ids[0]] = (t.bins[ids[0]] + 1) % bins.length;
          return { placed: placedW };
        };
        M.hint1 = () => '칸의 이름이 말하는 기준 하나만 보고 카드를 나누어요. 크기나 색이 아니라 모양의 성질을 봐요.';
        M.dist = (a, b) => Object.keys(Object.assign({}, a.placed, b.placed)).filter((k) => (a.placed || {})[k] !== (b.placed || {})[k]).length;
      }

      // ---------- 묻기 칸 ----------
      if (panel) {
        ask = askPanel(panel, o, () => log());
        if (panel.childNodes.length) box.appendChild(panel);
      }
      const state = () => Object.assign(M.state(), (o.ask ? { pick: ask.pick } : {}), (o.askNum ? { num: ask.num } : {}));
      log = () => kit.recorder.log('shapes', state());
      const setState = (s) => { s = s || {}; M.set(s); ask.set(s); revealed = false; M.paint(); };
      const start = state();
      M.paint();
      function judge(t) {
        t = t || {};
        const r = M.judge(t); if (r) return r;
        const a = judgeAsk(t, state(), o); if (a) return a;
        return { correct: true, feedback: '맞아요!' };
      }
      return {
        getState: state,
        setState,
        reset() { setState(JSON.parse(JSON.stringify(start))); },
        check(t, opts) {
          const r = judge(t);
          if (!(opts && opts.forHint) && r.correct) { revealed = true; M.paint(); }
          delete r.h3; return r;
        },
        // 교사 시연: 잠깐 기다렸다가 목표 상태로 맞춘다
        demo(t) { return kit.wait(350).then(() => this.solve(t)); },
        solve(t) { t = t || {}; M.solve(t); const s = {}; if (t.pick != null) s.pick = t.pick; if (t.num != null) s.num = t.num; ask.set(s); revealed = false; M.paint(); log(); },
        hint(t, opts) {
          t = t || {};
          const r = judge(t); const lv = hintLevel(opts);
          const onlyAsk = Object.keys(t).every((k) => k === 'pick' || k === 'num');
          const h1 = onlyAsk ? '묻는 것을 교구에서 직접 세거나 견주어 본 뒤 답해요.' : M.hint1(t);
          if (r.correct) return { hint: h1, correct: true, level: 1 };
          if (lv === 1 || !r.hint) return { hint: h1, correct: false, level: 1 };
          return { hint: lv >= 3 && r.h3 ? r.h3 : r.hint, correct: false, level: lv };
        },
        wrongAnswer(t) {
          t = t || {};
          const keep = JSON.stringify(state());
          let s = M.wrong(t);
          if (s == null && (t.pick != null || t.num != null)) {
            M.solve(t); s = M.state();
            if (t.pick != null) { s.pick = (t.pick + 1) % Math.max(2, ((o.ask && o.ask.choices) || []).length); }
            if (t.num != null) s.num = t.num + 1;
          } else if (s != null) {
            if (t.pick != null) s.pick = t.pick;
            if (t.num != null) s.num = t.num;
          }
          setState(JSON.parse(keep));
          return s ? Object.assign({}, o.ask ? { pick: null } : {}, o.askNum ? { num: null } : {}, s) : null;
        },
        distance(a, b) {
          let d = M.dist(a || {}, b || {});
          if ((a || {}).pick !== (b || {}).pick) d += 1;
          if ((a || {}).num !== (b || {}).num) d += Math.abs(((a || {}).num || 0) - ((b || {}).num || 0)) > 1 ? 2 : 1;
          return d;
        },
      };
    },
  });
})(window.PaperKit);
