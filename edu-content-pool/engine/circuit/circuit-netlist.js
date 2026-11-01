// 회로 판정 — 학생이 그은 선(wires)과 보드 핀 상태로 각 전선 묶음(net)의 전위를 정하고,
// LED·부저가 켜지는지, 입력 핀이 무엇을 읽는지, 어떤 실수(합선·저항 없음·방향 반대)가 있는지 낸다.
// DOM 을 모른다. 화면(circuit-bench.js)과 node 테스트가 같은 함수를 쓴다.
// 모델은 수업용 논리 수준이다: 전압·전류를 계산하지 않고 '센 구동(핀 출력·5V·GND)',
// '저항 너머 구동', '내부 풀업'의 세 세기만 구분한다.
(function (root) {
  'use strict';

  // wokwi-arduino-uno 1.9.2 의 pinInfo 이름. 화면은 요소에서 좌표를 읽고, 판정은 이 이름만 쓴다.
  const BOARD_PINS = [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13',
    'A0', 'A1', 'A2', 'A3', 'A4', 'A5', 'A4.2', 'A5.2',
    'GND.1', 'GND.2', 'GND.3', '5V', '3.3V', 'IOREF', 'VIN', 'AREF', 'RESET',
  ];
  // 보드 안에서 이미 이어져 있는 핀
  const BOARD_BONDS = [['GND.1', 'GND.2'], ['GND.1', 'GND.3'], ['A4', 'A4.2'], ['A5', 'A5.2']];
  const SUPPLY_HIGH = ['5V', '3.3V', 'IOREF'];
  const SUPPLY_LOW = ['GND.1', 'GND.2', 'GND.3'];
  // 프로그램이 읽고 쓰는 핀(avr8js 포트와 짝지을 수 있는 핀)
  const IO_PINS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', 'A0', 'A1', 'A2', 'A3', 'A4', 'A5'];

  const PART_TYPES = {
    led: { name: 'LED', pins: { A: '긴 다리(+)', C: '짧은 다리(−)' } },
    resistor: { name: '저항', pins: { 1: '왼쪽 다리', 2: '오른쪽 다리' } },
    button: { name: '버튼', pins: { '1.l': '왼쪽 위 다리', '2.l': '왼쪽 아래 다리', '1.r': '오른쪽 위 다리', '2.r': '오른쪽 아래 다리' } },
    buzzer: { name: '부저', pins: { 1: '−(검은) 다리', 2: '+(빨간) 다리' } },
  };

  function pinsOf(part) {
    if (part.type === 'board') return BOARD_PINS.slice();
    const t = PART_TYPES[part.type];
    if (!t) throw new Error('모르는 부품 종류: ' + part.type);
    return Object.keys(t.pins);
  }

  function boardPinLabel(pin) {
    if (/^GND/.test(pin)) return 'GND';
    if (/^\d+$/.test(pin)) return pin + '번';
    return pin.replace('.2', '');
  }

  function nodeLabel(circuit, node) {
    const [id, pin] = splitNode(node);
    const part = circuit.parts.find((p) => p.id === id);
    if (!part) return node;
    if (part.type === 'board') return (part.label || '아두이노') + ' ' + boardPinLabel(pin);
    return (part.label || id) + ' ' + PART_TYPES[part.type].pins[pin];
  }

  function splitNode(node) {
    const i = node.indexOf(':');
    return [node.slice(0, i), node.slice(i + 1)];
  }

  function makeUnionFind() {
    const parent = new Map();
    const find = (x) => {
      if (!parent.has(x)) parent.set(x, x);
      let r = x;
      while (parent.get(r) !== r) r = parent.get(r);
      while (parent.get(x) !== r) { const n = parent.get(x); parent.set(x, r); x = n; }
      return r;
    };
    return { find, union: (a, b) => { parent.set(find(a), find(b)); }, keys: () => [...parent.keys()] };
  }

  // 회로가 가리키는 노드가 실제 부품의 핀인지 검사한다(불러온 JSON 은 믿지 않는다).
  function validate(circuit) {
    if (!circuit || !Array.isArray(circuit.parts) || !Array.isArray(circuit.wires)) return ['회로 모양이 아니에요(parts·wires 목록이 필요해요)'];
    const errors = [];
    const ids = new Set();
    for (const p of circuit.parts || []) {
      if (!p || typeof p.id !== 'string' || !/^[a-z][a-z0-9-]{0,23}$/.test(p.id)) { errors.push('부품 id 형식이 틀렸어요'); continue; }
      if (ids.has(p.id)) errors.push('부품 id 가 겹쳐요: ' + p.id);
      if (p.type !== 'board' && !PART_TYPES[p.type]) errors.push('모르는 부품: ' + p.type);
      ids.add(p.id);
    }
    const known = new Set();
    for (const p of circuit.parts || []) if (ids.has(p.id) && (p.type === 'board' || PART_TYPES[p.type])) for (const pin of pinsOf(p)) known.add(p.id + ':' + pin);
    for (const w of circuit.wires || []) {
      if (!w || !known.has(w.a) || !known.has(w.b)) errors.push('없는 핀에 이어진 선이 있어요');
      else if (w.a === w.b) errors.push('같은 핀끼리 이은 선이 있어요');
    }
    return errors;
  }

  // circuit: { parts:[{id,type,label?}], wires:[{a:'board:13', b:'led1:A'}] }
  // state:   { pins: { '13': 'H'|'L'|'in'|'pullup' }, pressed: { btn1: true } }
  function evaluate(circuit, state) {
    const pins = (state && state.pins) || {};
    const pressed = (state && state.pressed) || {};
    const uf = makeUnionFind();
    const board = circuit.parts.find((p) => p.type === 'board');
    const B = (pin) => board.id + ':' + pin;

    for (const part of circuit.parts) for (const pin of pinsOf(part)) uf.find(part.id + ':' + pin);
    if (board) for (const [a, b] of BOARD_BONDS) uf.union(B(a), B(b));
    for (const part of circuit.parts) {
      if (part.type !== 'button') continue;
      uf.union(part.id + ':1.l', part.id + ':1.r');
      uf.union(part.id + ':2.l', part.id + ':2.r');
      if (pressed[part.id]) uf.union(part.id + ':1.l', part.id + ':2.l');
    }
    for (const w of circuit.wires) uf.union(w.a, w.b);

    // 노드 → net 번호
    const netIndex = new Map();
    const nets = [];
    for (const node of uf.keys()) {
      const r = uf.find(node);
      if (!netIndex.has(r)) { netIndex.set(r, nets.length); nets.push([]); }
      nets[netIndex.get(r)].push(node);
    }
    const netOf = (node) => netIndex.get(uf.find(node));

    // 1) 센 구동
    const level = nets.map(() => ({ v: 'Z', strength: null }));
    const strong = nets.map(() => new Set());
    const pulled = nets.map(() => false);
    if (board) {
      for (const pin of IO_PINS) {
        const s = pins[pin];
        if (s === 'H' || s === 'L') strong[netOf(B(pin))].add(s);
        else if (s === 'pullup') pulled[netOf(B(pin))] = true;
      }
      for (const pin of SUPPLY_HIGH) strong[netOf(B(pin))].add('H');
      for (const pin of SUPPLY_LOW) strong[netOf(B(pin))].add('L');
    }
    nets.forEach((_, i) => {
      if (strong[i].size === 2) level[i] = { v: 'X', strength: 'strong' };
      else if (strong[i].size === 1) level[i] = { v: [...strong[i]][0], strength: 'strong' };
    });

    // 2) 저항 너머 구동 — 센 구동이 없는 net 은 저항을 건너 닿는 센 net 의 값을 받는다
    const edges = nets.map(() => []);
    for (const part of circuit.parts) {
      if (part.type !== 'resistor') continue;
      const a = netOf(part.id + ':1'); const b = netOf(part.id + ':2');
      if (a !== b) { edges[a].push(b); edges[b].push(a); }
    }
    nets.forEach((_, i) => {
      if (level[i].strength) return;
      const seen = new Set([i]); const queue = [i]; const reached = new Set();
      while (queue.length) {
        const n = queue.shift();
        for (const m of edges[n]) {
          if (seen.has(m)) continue;
          seen.add(m);
          if (level[m].strength === 'strong') { if (level[m].v !== 'X') reached.add(level[m].v); }
          else queue.push(m);
        }
      }
      if (reached.size === 1) level[i] = { v: [...reached][0], strength: 'weak' };
      else if (reached.size === 2) level[i] = { v: 'M', strength: 'weak' };
      else if (pulled[i]) level[i] = { v: 'H', strength: 'pull' };
    });

    const warnings = [];
    const levelAt = (node) => level[netOf(node)];
    const parts = {};
    for (const part of circuit.parts) {
      if (part.type !== 'led' && part.type !== 'buzzer') continue;
      const plus = part.type === 'led' ? part.id + ':A' : part.id + ':2';
      const minus = part.type === 'led' ? part.id + ':C' : part.id + ':1';
      const p = levelAt(plus); const m = levelAt(minus);
      const res = { on: false, warn: null };
      if (netOf(plus) === netOf(minus)) {
        if (circuit.wires.some((w) => w.a === plus || w.b === plus)) res.warn = 'bridged';
      } else if (p.v === 'H' && p.strength !== 'pull' && m.v === 'L') {
        res.on = true;
        if (part.type === 'led' && p.strength === 'strong' && m.strength === 'strong') res.warn = 'no-resistor';
      } else if (p.v === 'L' && m.v === 'H' && m.strength !== 'pull') {
        res.warn = 'reversed';
      }
      parts[part.id] = res;
      const name = part.label || part.id;
      if (res.warn === 'no-resistor') warnings.push({ kind: 'no-resistor', part: part.id, msg: name + ': 저항 없이 바로 이어져 있어요. 실제 회로에서는 LED 가 탈 수 있으니 저항을 함께 이어요.' });
      if (res.warn === 'reversed') warnings.push({ kind: 'reversed', part: part.id, msg: name + ': 방향이 반대예요. ' + (part.type === 'led' ? '긴 다리(+)를 높은 쪽, 짧은 다리(−)를 GND 쪽에' : '+(빨간) 다리를 높은 쪽, −(검은) 다리를 GND 쪽에') + ' 이어요.' });
      if (res.warn === 'bridged') warnings.push({ kind: 'bridged', part: part.id, msg: name + ': 두 다리가 같은 전선 묶음에 있어 전기가 부품을 지나가지 않아요.' });
    }

    nets.forEach((nodes, i) => {
      if (level[i].v === 'X') warnings.push({ kind: 'short', net: i, nodes, msg: '합선: ' + nodes.map((n) => nodeLabel(circuit, n)).slice(0, 4).join(', ') + ' 이 높은 쪽과 GND 쪽에 동시에 이어졌어요.' });
    });

    // 3) 입력 핀이 읽는 값 — 떠 있는 입력은 LOW 로 읽되 경고한다
    const inputs = {};
    if (board) {
      for (const pin of IO_PINS) {
        const s = pins[pin];
        if (s !== 'in' && s !== 'pullup') continue;
        const l = levelAt(B(pin));
        inputs[pin] = l.v === 'H';
        // 버튼과 같은 net 에 있는 입력만 경고한다 — 쓰지 않는 핀이 떠 있는 것은 실수가 아니다
        const withButton = nets[netOf(B(pin))].some((n) => { const p = circuit.parts.find((q) => q.id === splitNode(n)[0]); return p && p.type === 'button'; });
        if (withButton && (l.v === 'Z' || l.v === 'M')) warnings.push({ kind: 'floating', pin, msg: '아두이노 ' + boardPinLabel(pin) + ': 입력 값이 정해지지 않았어요(떠 있음). 버튼 반대쪽을 GND 에 잇거나 풀업을 써요.' });
      }
    }

    return { nets, netOf, level, parts, inputs, warnings };
  }

  const api = { BOARD_PINS, IO_PINS, PART_TYPES, pinsOf, nodeLabel, boardPinLabel, splitNode, validate, evaluate };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.CircuitNetlist = api;
})(typeof window !== 'undefined' ? window : globalThis);
