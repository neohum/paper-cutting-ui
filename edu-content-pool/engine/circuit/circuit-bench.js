// 회로 실험대 — wokwi-elements 부품 위에 학생이 직접 선을 긋고, avr8js 가 돌리는 프로그램의 핀 출력이
// 그 선을 따라 부품에 닿게 한다. 판정은 circuit-netlist.js(CircuitNetlist)가 한다.
// 필요한 스크립트(먼저 읽기): wokwi-elements.bundle.min.js, avr8js.iife.js, circuit-netlist.js,
// (선택) 미리 조립한 프로그램 programs.js(window.AVR_PROGRAMS).
// 사용: const bench = CircuitBench.mount(el, { programs: window.AVR_PROGRAMS, storageKey: 'my-lesson' });
(function (root) {
  'use strict';
  const N = root.CircuitNetlist;
  const SCHEMA = 'edu-circuit.v1';
  const W = 680, H = 470;           // 실험대 모델 크기(부품 원래 크기 px 기준)
  const HZ = 16e6;
  const SNAP_PX = 18;               // 손을 뗀 자리에서 이 화면 거리 안의 가장 가까운 핀에 붙는다
  const TAGS = { board: 'wokwi-arduino-uno', led: 'wokwi-led', resistor: 'wokwi-resistor', button: 'wokwi-pushbutton', buzzer: 'wokwi-buzzer' };
  const WIRE_COLORS = ['#e07b24', '#3a7bd5', '#2e9b5d', '#8a4fd1', '#c99712', '#c2417f'];
  const LED_COLORS = { red: '빨강', green: '초록', yellow: '노랑' };

  // 프로그램별 과제와 배선 힌트. 키는 programs.js 의 이름과 같다.
  const LESSONS = {
    blink: { title: '깜빡이기', task: '13번 핀으로 LED 를 깜빡이게 이어 보세요.', hint: '13번 → 저항 → LED 긴 다리(+), LED 짧은 다리(−) → GND', pins: ['13'] },
    'button-led': { title: '버튼으로 켜기', task: '버튼을 누르는 동안만 LED 가 켜지게 이어 보세요.', hint: '2번 → 버튼 한쪽, 버튼 반대쪽 → GND (2번은 풀업 입력) · 13번 → 저항 → LED → GND', pins: ['2', '13'] },
    alternate: { title: '번갈아 켜기', task: 'LED 두 개가 번갈아 켜지게 이어 보세요.', hint: '12번 → 저항 → LED, 13번 → 저항 → 다른 LED, 두 LED 의 짧은 다리 → GND', pins: ['12', '13'] },
  };

  function defaultCircuit() {
    return {
      schema: SCHEMA,
      parts: [
        { id: 'uno', type: 'board', label: '아두이노', x: 200, y: 160 },
        { id: 'led1', type: 'led', label: 'LED1', color: 'red', x: 470, y: 46 },
        { id: 'led2', type: 'led', label: 'LED2', color: 'green', x: 560, y: 46 },
        { id: 'r1', type: 'resistor', label: '저항1', x: 300, y: 70 },
        { id: 'r2', type: 'resistor', label: '저항2', x: 300, y: 118 },
        { id: 'btn1', type: 'button', label: '버튼1', x: 70, y: 380 },
        { id: 'bz1', type: 'buzzer', label: '부저1', x: 560, y: 370 },
      ],
      wires: [],
    };
  }

  function el(tag, attrs, text) {
    const e = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs || {})) {
      if (k === 'class') e.className = v; else if (k.startsWith('on')) e.addEventListener(k.slice(2), v); else e.setAttribute(k, v);
    }
    if (text != null) e.textContent = text;
    return e;
  }
  const icon = (name) => el('i', { class: 'fi fi-rr-' + name, 'aria-hidden': 'true' });
  const svgEl = (tag, attrs) => { const e = document.createElementNS('http://www.w3.org/2000/svg', tag); for (const [k, v] of Object.entries(attrs || {})) e.setAttribute(k, v); return e; };

  function readStore(key) { try { return key ? JSON.parse(localStorage.getItem(key) || 'null') : null; } catch { return null; } }
  function writeStore(key, value) { try { if (key) localStorage.setItem(key, JSON.stringify(value)); } catch { /* 저장이 막힌 창: 화면은 그대로 동작 */ } }

  function mount(host, opts) {
    opts = opts || {};
    const programs = opts.programs || root.AVR_PROGRAMS || {};
    const storageKey = opts.storageKey ? 'circuit-bench:' + opts.storageKey : null;
    let circuit = normalize(opts.circuit || readStore(storageKey) || defaultCircuit());
    let scale = 1.4;
    let pending = null;            // { from: node, pointerId?, moved, x, y }
    let selectedWire = -1;
    const pressed = {};
    const geo = {};                // id → { w, h, pins: {name: {x,y}} } (모델 좌표, 부품 기준)
    const partEls = {};
    let sim = null;                // { cpu, ports, entry, name }
    let lastResult = null;
    const appliedInputs = {};
    let progress = null;

    // ── 뼈대 ─────────────────────────────────────────────────────────
    host.classList.add('cb');
    host.textContent = '';
    const live = el('div', { class: 'cb-live', 'aria-live': 'polite' });
    const toolbar = el('div', { class: 'cb-toolbar', role: 'toolbar', 'aria-label': '부품 넣기' });
    const scroller = el('div', { class: 'cb-scroll' });
    const bench = el('div', { class: 'cb-bench' });
    const wiresSvg = svgEl('svg', { class: 'cb-wires', viewBox: `0 0 ${W} ${H}`, 'aria-hidden': 'true' });
    const pinLayer = el('div', { class: 'cb-pins' });
    bench.append(wiresSvg, pinLayer);
    scroller.append(bench);
    const side = el('div', { class: 'cb-side' });
    host.append(toolbar, scroller, side, live);

    const say = (msg) => { live.textContent = ''; setTimeout(() => { live.textContent = msg; }, 30); };

    // 툴바: 부품 넣기
    const addBtn = (label, ic, fn) => { const b = el('button', { type: 'button', class: 'cb-btn' }); b.append(icon(ic), document.createTextNode(label)); b.addEventListener('click', fn); toolbar.append(b); return b; };
    for (const [c, name] of Object.entries(LED_COLORS)) addBtn('LED ' + name, 'bulb', () => addPart('led', { color: c }));
    addBtn('저항', 'plug', () => addPart('resistor'));
    addBtn('버튼', 'cursor-finger', () => addPart('button'));
    addBtn('부저', 'bell', () => addPart('buzzer'));

    // 옆 패널
    const progBox = el('section', { class: 'cb-card' });
    const progSel = el('select', { class: 'cb-select', 'aria-label': '실행할 프로그램' });
    for (const name of Object.keys(programs)) progSel.append(el('option', { value: name }, (LESSONS[name] && LESSONS[name].title) || name));
    const runBtn = el('button', { type: 'button', class: 'cb-btn cb-primary' });
    const speed = el('input', { type: 'range', min: '8', max: '120', value: '41', 'aria-label': '간격' });
    const speedOut = el('output');
    const taskP = el('p', { class: 'cb-task' });
    const hintP = el('p', { class: 'cb-hint' });
    const pinsP = el('p', { class: 'cb-readout' });
    const doneP = el('p', { class: 'cb-done', hidden: '' });
    const speedRow = el('label', { class: 'cb-row' });
    speedRow.append(document.createTextNode('간격 '), speed, speedOut);
    const progRow = el('div', { class: 'cb-row' });
    progRow.append(progSel, runBtn);
    progBox.append(el('h3', {}, '프로그램'), progRow, speedRow, taskP, hintP, pinsP, doneP);

    const warnBox = el('section', { class: 'cb-card' });
    const warnList = el('ul', { class: 'cb-warns' });
    warnBox.append(el('h3', {}, '회로 점검'), warnList);

    const wireBox = el('section', { class: 'cb-card' });
    const fromSel = el('select', { class: 'cb-select', 'aria-label': '이을 핀 1' });
    const toSel = el('select', { class: 'cb-select', 'aria-label': '이을 핀 2' });
    const linkBtn = el('button', { type: 'button', class: 'cb-btn' }); linkBtn.append(icon('link'), document.createTextNode('잇기'));
    const wireList = el('ul', { class: 'cb-wirelist' });
    const clearBtn = el('button', { type: 'button', class: 'cb-btn' }); clearBtn.append(icon('broom'), document.createTextNode('선 모두 지우기'));
    const formRow = el('div', { class: 'cb-form' }); formRow.append(fromSel, toSel, linkBtn);
    wireBox.append(el('h3', {}, '연결한 선'), el('p', { class: 'cb-hint' }, '핀을 눌러 끌어다 다른 핀에 놓거나, 두 핀을 차례로 누르세요. 아래에서 골라 이어도 됩니다.'), formRow, wireList, clearBtn);

    const ioBox = el('details', { class: 'cb-card' });
    const ioText = el('textarea', { class: 'cb-json', rows: '6', 'aria-label': '회로 JSON', spellcheck: 'false' });
    const ioApply = el('button', { type: 'button', class: 'cb-btn' }); ioApply.append(icon('upload'), document.createTextNode('이 회로 불러오기'));
    const ioReset = el('button', { type: 'button', class: 'cb-btn' }); ioReset.append(icon('refresh'), document.createTextNode('처음 회로로'));
    ioBox.append(el('summary', {}, '회로 저장·불러오기 (JSON)'), ioText, ioApply, ioReset);
    side.append(progBox, warnBox, wireBox, ioBox);

    // ── 부품 ─────────────────────────────────────────────────────────
    function normalize(c) {
      const errors = N.validate(c || {});
      if (errors.length || !c.parts.some((p) => p.type === 'board')) {
        if (c) console.warn('회로를 읽지 못해 처음 회로로 엽니다:', errors);
        c = defaultCircuit();
      }
      return {
        schema: SCHEMA,
        parts: c.parts.map((p) => ({ id: p.id, type: p.type, label: String(p.label || p.id).slice(0, 16), color: LED_COLORS[p.color] ? p.color : undefined, x: clampNum(p.x, 0, W - 20, 20), y: clampNum(p.y, 0, H - 20, 20) })),
        wires: c.wires.map((w, i) => ({ a: w.a, b: w.b, color: /^#[0-9a-f]{6}$/i.test(w.color || '') ? w.color : WIRE_COLORS[i % WIRE_COLORS.length] })),
      };
    }
    function clampNum(v, lo, hi, d) { v = Number(v); return Number.isFinite(v) ? Math.min(hi, Math.max(lo, v)) : d; }

    async function renderPart(part) {
      const wrap = el('div', { class: 'cb-part', 'data-id': part.id });
      const e = document.createElement(TAGS[part.type]);
      if (part.type === 'led') e.setAttribute('color', part.color || 'red');
      if (part.type === 'board') e.ledPower = true;
      if (part.type === 'button') {
        e.setAttribute('color', 'green');
        e.addEventListener('button-press', () => { pressed[part.id] = true; refresh(); });
        e.addEventListener('button-release', () => { pressed[part.id] = false; refresh(); });
      }
      wrap.append(e);
      bench.insertBefore(wrap, wiresSvg);
      partEls[part.id] = { wrap, e, tag: null };
      if (e.updateComplete) await e.updateComplete;
      const info = {};
      for (const p of e.pinInfo || []) info[p.name] = { x: p.x, y: p.y };
      geo[part.id] = { w: wrap.offsetWidth, h: wrap.offsetHeight, pins: info };
      if (part.type !== 'board') {
        const tag = el('button', { type: 'button', class: 'cb-tag', 'aria-label': part.label + ' — 끌거나 화살표 키로 옮기기, Delete 로 빼기' }, part.label);
        tag.addEventListener('pointerdown', (ev) => startMove(ev, part));
        tag.addEventListener('keydown', (ev) => keyMove(ev, part));
        bench.append(tag);
        partEls[part.id].tag = tag;
      }
    }

    function nextId(type) {
      const prefix = { led: 'led', resistor: 'r', button: 'btn', buzzer: 'bz' }[type];
      let n = 1;
      while (circuit.parts.some((p) => p.id === prefix + n)) n++;
      return [prefix + n, N.PART_TYPES[type].name + n];
    }

    async function addPart(type, extra) {
      const [id, label] = nextId(type);
      const count = circuit.parts.length;
      const part = { id, type, label, x: 40 + (count * 37) % 160, y: 30 + (count * 23) % 90, ...(extra || {}) };
      circuit.parts.push(part);
      await renderPart(part);
      layout(); changed();
      say(label + ' 을 넣었어요. 이름표를 끌어 옮길 수 있어요.');
      partEls[id].tag && partEls[id].tag.focus();
    }

    function removePart(id) {
      const part = circuit.parts.find((p) => p.id === id);
      if (!part || part.type === 'board') return;
      circuit.parts = circuit.parts.filter((p) => p !== part);
      circuit.wires = circuit.wires.filter((w) => !w.a.startsWith(id + ':') && !w.b.startsWith(id + ':'));
      partEls[id].wrap.remove(); partEls[id].tag && partEls[id].tag.remove();
      delete partEls[id]; delete geo[id]; delete pressed[id];
      selectedWire = -1;
      changed(); layout();
      say(part.label + ' 와 이어진 선을 뺐어요.');
    }

    // ── 좌표 ─────────────────────────────────────────────────────────
    const partOf = (id) => circuit.parts.find((p) => p.id === id);
    function pinPos(node) {
      const [id, pin] = N.splitNode(node);
      const part = partOf(id); const g = geo[id];
      if (!part || !g || !g.pins[pin]) return null;
      return { x: part.x + g.pins[pin].x, y: part.y + g.pins[pin].y };
    }
    // 핀이 부품의 어느 가장자리에 붙었는지로 선이 뻗어 나갈 방향을 정한다
    function pinDir(node) {
      const [id, pin] = N.splitNode(node);
      const g = geo[id]; const p = g && g.pins[pin];
      if (!p) return [0, 1];
      const d = [[p.x, -1, 0], [g.w - p.x, 1, 0], [p.y, 0, -1], [g.h - p.y, 0, 1]].sort((a, b) => a[0] - b[0])[0];
      return [d[1], d[2]];
    }
    function wirePath(a, b, da, db) {
      const L = 22 + Math.hypot(b.x - a.x, b.y - a.y) * 0.22;
      return `M${a.x} ${a.y} C${a.x + da[0] * L} ${a.y + da[1] * L} ${b.x + db[0] * L} ${b.y + db[1] * L} ${b.x} ${b.y}`;
    }
    function toModel(ev) {
      const r = bench.getBoundingClientRect();
      return { x: (ev.clientX - r.left) / scale, y: (ev.clientY - r.top) / scale };
    }
    function nearestPin(m, except) {
      let best = null; let bestD = SNAP_PX / scale;
      for (const part of circuit.parts) for (const pin of Object.keys((geo[part.id] || {}).pins || {})) {
        const node = part.id + ':' + pin;
        if (node === except) continue;
        const p = pinPos(node); const d = Math.hypot(p.x - m.x, p.y - m.y);
        if (d < bestD) { bestD = d; best = node; }
      }
      return best;
    }

    // ── 그리기 ───────────────────────────────────────────────────────
    function layout() {
      const avail = scroller.clientWidth || W;
      scale = Math.max(1.3, Math.min(2, avail / W));
      bench.style.width = W * scale + 'px';
      bench.style.height = H * scale + 'px';
      for (const part of circuit.parts) {
        const pe = partEls[part.id]; if (!pe) continue;
        pe.wrap.style.transform = `translate(${part.x * scale}px, ${part.y * scale}px) scale(${scale})`;
        if (pe.tag) { pe.tag.style.left = part.x * scale + 'px'; pe.tag.style.top = Math.max(0, part.y * scale - 30) + 'px'; }
      }
      drawPins(); drawWires(); drawWireList(); fillSelects();
    }

    function drawPins() {
      pinLayer.textContent = '';
      const used = new Set(circuit.wires.flatMap((w) => [w.a, w.b]));
      for (const part of circuit.parts) for (const pin of Object.keys((geo[part.id] || {}).pins || {})) {
        const node = part.id + ':' + pin; const p = pinPos(node);
        const b = el('button', { type: 'button', class: 'cb-pin' + (used.has(node) ? ' is-used' : '') + (pending && pending.from === node ? ' is-from' : ''), 'data-node': node, 'aria-label': N.nodeLabel(circuit, node) });
        b.style.left = p.x * scale + 'px'; b.style.top = p.y * scale + 'px';
        pinLayer.append(b);
      }
    }

    function drawWires() {
      wiresSvg.textContent = '';
      const shortNodes = new Set();
      for (const w of (lastResult && lastResult.warnings) || []) if (w.kind === 'short') w.nodes.forEach((n) => shortNodes.add(n));
      circuit.wires.forEach((w, i) => {
        const a = pinPos(w.a); const b = pinPos(w.b); if (!a || !b) return;
        const d = wirePath(a, b, pinDir(w.a), pinDir(w.b));
        const g = svgEl('g', { class: 'cb-wire' + (i === selectedWire ? ' is-selected' : '') + (shortNodes.has(w.a) ? ' is-short' : ''), 'data-wire': String(i) });
        g.append(svgEl('path', { d, class: 'cb-wire-hit' }), svgEl('path', { d, class: 'cb-wire-under' }), svgEl('path', { d, class: 'cb-wire-line', stroke: w.color }));
        for (const p of [a, b]) g.append(svgEl('circle', { cx: p.x, cy: p.y, r: 2.6, class: 'cb-wire-end', fill: w.color }));
        wiresSvg.append(g);
      });
      if (pending && pending.to) {
        const a = pinPos(pending.from);
        if (a) wiresSvg.append(svgEl('path', { d: wirePath(a, pending.to, pinDir(pending.from), [0, 0]), class: 'cb-wire-pending' }));
      }
    }

    function drawWireList() {
      wireList.textContent = '';
      circuit.wires.forEach((w, i) => {
        const li = el('li', { class: i === selectedWire ? 'is-selected' : '' });
        const sw = el('span', { class: 'cb-swatch' }); sw.style.background = w.color;
        const del = el('button', { type: 'button', class: 'cb-btn cb-icon', 'aria-label': '이 선 지우기' }); del.append(icon('trash'));
        del.addEventListener('click', () => disconnect(i));
        li.append(sw, el('span', {}, N.nodeLabel(circuit, w.a) + ' ↔ ' + N.nodeLabel(circuit, w.b)), del);
        li.addEventListener('click', (ev) => { if (ev.target.closest('button')) return; selectedWire = i; drawWires(); drawWireList(); });
        wireList.append(li);
      });
      if (!circuit.wires.length) wireList.append(el('li', { class: 'cb-empty' }, '아직 이은 선이 없어요.'));
      clearBtn.disabled = !circuit.wires.length;
    }

    function fillSelects() {
      for (const sel of [fromSel, toSel]) {
        const keep = sel.value; sel.textContent = '';
        sel.append(el('option', { value: '' }, sel === fromSel ? '핀 1 고르기' : '핀 2 고르기'));
        for (const part of circuit.parts) {
          const og = el('optgroup', { label: part.label });
          for (const pin of Object.keys((geo[part.id] || {}).pins || {})) og.append(el('option', { value: part.id + ':' + pin }, N.nodeLabel(circuit, part.id + ':' + pin)));
          sel.append(og);
        }
        sel.value = keep;
      }
    }

    // ── 잇기·끊기 ────────────────────────────────────────────────────
    function connect(a, b) {
      if (!a || !b || a === b) return false;
      if (!pinPos(a) || !pinPos(b)) return false;
      if (circuit.wires.some((w) => (w.a === a && w.b === b) || (w.a === b && w.b === a))) { say('이미 이어져 있어요.'); return false; }
      const gnd = (n) => /:GND/.test(n); const vcc = (n) => /:(5V|3\.3V|IOREF)$/.test(n);
      const color = gnd(a) || gnd(b) ? '#2b2a27' : vcc(a) || vcc(b) ? '#d23c2a' : WIRE_COLORS[circuit.wires.length % WIRE_COLORS.length];
      circuit.wires.push({ a, b, color });
      selectedWire = -1;
      changed(); drawPins(); drawWireList();
      say(N.nodeLabel(circuit, a) + ' 와 ' + N.nodeLabel(circuit, b) + ' 를 이었어요.');
      return true;
    }
    function disconnect(i) {
      const w = circuit.wires[i]; if (!w) return;
      circuit.wires.splice(i, 1);
      selectedWire = -1;
      changed(); drawPins(); drawWireList();
      say(N.nodeLabel(circuit, w.a) + ' ↔ ' + N.nodeLabel(circuit, w.b) + ' 선을 지웠어요.');
    }
    function cancelPending() { if (pending) { pending = null; drawPins(); drawWires(); } }

    pinLayer.addEventListener('pointerdown', (ev) => {
      const b = ev.target.closest('.cb-pin'); if (!b) return;
      ev.preventDefault();
      const node = b.dataset.node;
      if (pending && pending.from !== node && !pending.pointerId) { const from = pending.from; pending = null; connect(from, node); return; }
      pending = { from: node, pointerId: ev.pointerId, sx: ev.clientX, sy: ev.clientY, moved: false, to: null };
      bench.setPointerCapture(ev.pointerId);
      drawPins();
    });
    bench.addEventListener('pointermove', (ev) => {
      if (!pending) return;
      if (pending.pointerId === ev.pointerId && Math.hypot(ev.clientX - pending.sx, ev.clientY - pending.sy) > 6) pending.moved = true;
      if (pending.pointerId === ev.pointerId || !pending.pointerId) { pending.to = toModel(ev); drawWires(); }
    });
    bench.addEventListener('pointerup', (ev) => {
      if (!pending || pending.pointerId !== ev.pointerId) return;
      if (!pending.moved) {      // 누르고 바로 뗌 → 두 번 눌러 잇기 모드
        pending.pointerId = null;
        say(N.nodeLabel(circuit, pending.from) + ' 를 골랐어요. 이을 핀을 누르세요. Esc 로 취소.');
        return;
      }
      const target = nearestPin(toModel(ev), pending.from);
      const from = pending.from; pending = null;
      if (target) connect(from, target); else { drawPins(); drawWires(); say('핀 위에 놓지 않아 선을 긋지 않았어요.'); }
    });
    bench.addEventListener('pointercancel', cancelPending);
    pinLayer.addEventListener('keydown', (ev) => {
      const b = ev.target.closest('.cb-pin'); if (!b || (ev.key !== 'Enter' && ev.key !== ' ')) return;
      ev.preventDefault();
      const node = b.dataset.node;
      const refocus = () => { const t = pinLayer.querySelector(`[data-node="${CSS.escape(node)}"]`); if (t) t.focus(); };
      if (pending && pending.from !== node) { const from = pending.from; pending = null; connect(from, node); refocus(); return; }
      pending = { from: node, pointerId: null, to: null };
      drawPins(); refocus();
      say(N.nodeLabel(circuit, node) + ' 를 골랐어요. Tab 으로 이을 핀으로 가서 Enter. Esc 로 취소.');
    });
    wiresSvg.addEventListener('click', (ev) => {
      const g = ev.target.closest('.cb-wire'); if (!g) return;
      selectedWire = Number(g.dataset.wire); drawWires(); drawWireList();
      say('선을 골랐어요. Delete 키나 목록의 지우기 버튼으로 지울 수 있어요.');
    });
    host.addEventListener('keydown', (ev) => {
      if (ev.key === 'Escape') { cancelPending(); selectedWire = -1; drawWires(); drawWireList(); }
      if ((ev.key === 'Delete' || ev.key === 'Backspace') && selectedWire >= 0 && !/^(INPUT|TEXTAREA|SELECT)$/.test(ev.target.tagName) && !ev.target.classList.contains('cb-tag')) { ev.preventDefault(); disconnect(selectedWire); }
    });
    linkBtn.addEventListener('click', () => { if (connect(fromSel.value, toSel.value)) { fromSel.value = ''; toSel.value = ''; } else if (!fromSel.value || !toSel.value || fromSel.value === toSel.value) say('서로 다른 핀 두 개를 고르세요.'); });
    clearBtn.addEventListener('click', () => { circuit.wires = []; selectedWire = -1; changed(); drawPins(); drawWireList(); say('선을 모두 지웠어요.'); });

    // ── 부품 옮기기 ──────────────────────────────────────────────────
    function startMove(ev, part) {
      ev.preventDefault();
      const tag = ev.currentTarget; tag.setPointerCapture(ev.pointerId);
      const start = { x: part.x, y: part.y, cx: ev.clientX, cy: ev.clientY };
      const move = (e) => {
        const g = geo[part.id];
        part.x = clampNum(start.x + (e.clientX - start.cx) / scale, 0, W - g.w, start.x);
        part.y = clampNum(start.y + (e.clientY - start.cy) / scale, 0, H - g.h, start.y);
        layout();
      };
      const up = () => { tag.removeEventListener('pointermove', move); tag.removeEventListener('pointerup', up); tag.removeEventListener('pointercancel', up); save(); };
      tag.addEventListener('pointermove', move); tag.addEventListener('pointerup', up); tag.addEventListener('pointercancel', up);
    }
    function keyMove(ev, part) {
      const step = ev.shiftKey ? 16 : 4;
      const d = { ArrowLeft: [-step, 0], ArrowRight: [step, 0], ArrowUp: [0, -step], ArrowDown: [0, step] }[ev.key];
      if (d) {
        ev.preventDefault(); const g = geo[part.id];
        part.x = clampNum(part.x + d[0], 0, W - g.w, part.x); part.y = clampNum(part.y + d[1], 0, H - g.h, part.y);
        layout(); save(); partEls[part.id].tag.focus();
      } else if (ev.key === 'Delete' || ev.key === 'Backspace') { ev.preventDefault(); removePart(part.id); }
    }

    // ── 판정·시뮬레이션 ──────────────────────────────────────────────
    function pinStates() {
      const out = {};
      if (!sim) return out;          // 멈춤: 핀은 아무것도 구동하지 않고 아무것도 읽지 않는다
      const S = root.avr8js.PinState;
      const map = { [S.Low]: 'L', [S.High]: 'H', [S.Input]: 'in', [S.InputPullUp]: 'pullup' };
      for (let i = 0; i < 8; i++) out[String(i)] = map[sim.ports.D.pinState(i)];
      for (let i = 0; i < 6; i++) { out[String(8 + i)] = map[sim.ports.B.pinState(i)]; out['A' + i] = map[sim.ports.C.pinState(i)]; }
      return out;
    }
    function portFor(pin) {
      if (/^A\d$/.test(pin)) return [sim.ports.C, Number(pin.slice(1))];
      const n = Number(pin);
      return n < 8 ? [sim.ports.D, n] : [sim.ports.B, n - 8];
    }

    let refreshing = false;
    function refresh() {
      if (refreshing) return;
      refreshing = true;
      try {
        const pins = pinStates();
        const r = N.evaluate(circuit, { pins, pressed });
        lastResult = r;
        for (const part of circuit.parts) {
          const pe = partEls[part.id]; if (!pe) continue;
          if (part.type === 'led') pe.e.value = !!(r.parts[part.id] && r.parts[part.id].on);
          if (part.type === 'buzzer') pe.e.hasSignal = !!(r.parts[part.id] && r.parts[part.id].on);
          if (part.type === 'board') pe.e.led13 = pins['13'] === 'H';
        }
        if (sim) for (const [pin, v] of Object.entries(r.inputs)) {
          if (appliedInputs[pin] === v) continue;
          appliedInputs[pin] = v;
          const [port, bit] = portFor(pin); port.setPin(bit, v);
        }
        track(r);
        warnList.textContent = '';
        for (const w of r.warnings) { const li = el('li', { class: 'cb-warn cb-warn-' + w.kind }); li.append(icon(w.kind === 'short' ? 'bolt' : 'triangle-warning'), el('span', {}, w.msg)); warnList.append(li); }
        if (!r.warnings.length) { const li = el('li', { class: 'cb-ok' }); li.append(icon('check-circle'), el('span', {}, '이상한 연결이 없어요.')); warnList.append(li); }
        const lesson = sim && LESSONS[sim.name];
        const label = { H: 'HIGH', L: 'LOW', in: '입력', pullup: '입력(풀업)' };
        pinsP.textContent = lesson ? lesson.pins.map((p) => p + '번 ' + label[pins[p]] + (p in r.inputs ? ' · 읽은 값 ' + (r.inputs[p] ? 'HIGH' : 'LOW') : '')).join('  |  ') : '프로그램이 멈춰 있어요. 5V·GND 에 이은 부품은 그대로 동작해요.';
        drawWires();
      } finally { refreshing = false; }
    }

    // 과제 확인: 실행 중에 관찰한 부품 상태로만 판정한다
    function track(r) {
      if (!sim || !progress || progress.done) return;
      const leds = circuit.parts.filter((p) => p.type === 'led');
      const onIds = leds.filter((p) => r.parts[p.id] && r.parts[p.id].on).map((p) => p.id);
      const anyPressed = Object.values(pressed).some(Boolean);
      for (const id of leds.map((p) => p.id)) {
        const s = progress.seen[id] || (progress.seen[id] = { on: false, off: false, onPressed: false, offReleased: false, alone: false });
        const on = onIds.includes(id);
        if (on) s.on = true; else s.off = true;
        if (on && anyPressed) s.onPressed = true;
        if (!on && !anyPressed && s.onPressed) s.offReleased = true;
        if (on && onIds.length === 1) s.alone = true;
      }
      const seen = Object.values(progress.seen);
      const ok = {
        blink: () => seen.some((s) => s.on && s.off),
        'button-led': () => seen.some((s) => s.onPressed && s.offReleased),
        alternate: () => seen.filter((s) => s.alone && s.off).length >= 2,
      }[sim.name];
      if (ok && ok()) {
        progress.done = true;
        doneP.hidden = false; doneP.textContent = '과제 완료! ' + LESSONS[sim.name].task.replace(' 이어 보세요.', ' 이었어요.');
        say(doneP.textContent);
      }
    }

    function loadHex(text, target) {
      for (const line of text.split('\n')) {
        if (!line.startsWith(':')) continue;
        const n = parseInt(line.slice(1, 3), 16), addr = parseInt(line.slice(3, 7), 16), type = parseInt(line.slice(7, 9), 16);
        if (type !== 0) continue;
        for (let i = 0; i < n; i++) target[addr + i] = parseInt(line.slice(9 + i * 2, 11 + i * 2), 16);
      }
    }
    const ldi = (rd, k) => 0xE000 | ((k & 0xF0) << 4) | ((rd - 16) << 4) | (k & 0x0F);

    function run(name) {
      const A = root.avr8js; const entry = programs[name];
      if (!A || !entry) { say('프로그램을 찾지 못했어요.'); return; }
      const program = new Uint16Array(0x4000);
      loadHex(entry.hex, new Uint8Array(program.buffer));
      const cpu = new A.CPU(program);
      new A.AVRTimer(cpu, A.timer0Config);
      const ports = { B: new A.AVRIOPort(cpu, A.portBConfig), C: new A.AVRIOPort(cpu, A.portCConfig), D: new A.AVRIOPort(cpu, A.portDConfig) };
      sim = { cpu, ports, entry, name, program };
      for (const k of Object.keys(appliedInputs)) delete appliedInputs[k];
      for (const p of Object.values(ports)) p.addListener(refresh);
      progress = { seen: {}, done: false };
      doneP.hidden = true;
      applySpeed(); updateRunUi(); refresh();
    }
    function stop() { sim = null; progress = null; updateRunUi(); refresh(); }
    function applySpeed() {
      speedOut.textContent = '약 ' + (Number(speed.value) * 0.0122).toFixed(2) + '초';
      const entry = programs[progSel.value];
      speedRow.hidden = !(entry && entry.paramWordAddress);
      if (sim && sim.entry.paramWordAddress) sim.program[sim.entry.paramWordAddress] = ldi(sim.entry.paramRegister, Number(speed.value));
    }
    function updateRunUi() {
      runBtn.textContent = ''; runBtn.append(icon(sim ? 'stop' : 'play'), document.createTextNode(sim ? '멈추기' : '실행'));
      const l = LESSONS[progSel.value];
      taskP.textContent = l ? l.task : '';
      hintP.textContent = l ? '힌트: ' + l.hint : '';
      applySpeed();
    }
    runBtn.addEventListener('click', () => (sim ? stop() : run(progSel.value)));
    progSel.addEventListener('change', () => { if (sim) run(progSel.value); else updateRunUi(); });
    speed.addEventListener('input', applySpeed);

    let last = performance.now(); let raf = 0;
    function frame(now) {
      const dt = Math.min(now - last, 50); last = now;
      if (sim) { const end = sim.cpu.cycles + Math.round(HZ * dt / 1000); while (sim.cpu.cycles < end) { root.avr8js.avrInstruction(sim.cpu); sim.cpu.tick(); } }
      raf = requestAnimationFrame(frame);
    }

    // ── 저장·불러오기 ────────────────────────────────────────────────
    function toJSON() { return JSON.parse(JSON.stringify(circuit)); }
    function save() { writeStore(storageKey, circuit); ioText.value = JSON.stringify(circuit); if (opts.onChange) opts.onChange(toJSON()); }
    function changed() { refresh(); save(); }
    async function load(c) {
      const errors = N.validate(c || {});
      if (errors.length || !c.parts.some((p) => p.type === 'board')) return errors.length ? errors : ['아두이노 보드가 없어요'];
      for (const id of Object.keys(partEls)) { partEls[id].wrap.remove(); partEls[id].tag && partEls[id].tag.remove(); delete partEls[id]; delete geo[id]; }
      circuit = normalize(c); selectedWire = -1; pending = null;
      for (const part of circuit.parts) await renderPart(part);
      layout(); changed();
      return [];
    }
    ioApply.addEventListener('click', async () => {
      let parsed; try { parsed = JSON.parse(ioText.value); } catch { say('JSON 모양이 아니에요.'); return; }
      const errors = await load(parsed);
      say(errors.length ? '불러오지 못했어요: ' + errors[0] : '회로를 불러왔어요.');
    });
    ioReset.addEventListener('click', () => load(defaultCircuit()).then(() => say('처음 회로로 되돌렸어요.')));

    const ready = (async () => {
      for (const part of circuit.parts) await renderPart(part);
      layout(); updateRunUi(); refresh(); save();
      if (typeof ResizeObserver !== 'undefined') new ResizeObserver(() => layout()).observe(scroller);
      raf = requestAnimationFrame(frame);
    })();

    return {
      ready,
      connect: (a, b) => connect(a, b),
      disconnect: (i) => disconnect(i),
      addPart, removePart, load, toJSON, run, stop,
      press: (id, down) => { pressed[id] = !!down; refresh(); },
      result: () => lastResult,
      pinPosition: (node) => { const p = pinPos(node); const r = bench.getBoundingClientRect(); return p && { x: r.left + p.x * scale, y: r.top + p.y * scale }; },
      progress: () => progress && { done: progress.done },
      destroy: () => { cancelAnimationFrame(raf); host.textContent = ''; },
    };
  }

  root.CircuitBench = { mount, defaultCircuit, LESSONS, SCHEMA };
})(window);
