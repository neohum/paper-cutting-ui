// engine/circuit/circuit-netlist.js — 학생이 그은 선대로 LED·부저·입력 핀이 판정되는지
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';

const src = readFileSync(new URL('../edu-content-pool/engine/circuit/circuit-netlist.js', import.meta.url), 'utf8');
const ctx = { window: {} };
vm.runInNewContext(src, ctx);
const N = ctx.window.CircuitNetlist;

const board = { id: 'uno', type: 'board' };
const led = { id: 'led1', type: 'led', label: 'LED1' };
const res = { id: 'r1', type: 'resistor', label: '저항1' };
const btn = { id: 'btn1', type: 'button', label: '버튼1' };
const W = (a, b) => ({ a, b });
const kinds = (r) => Array.from(r.warnings, (w) => w.kind).sort();

test('13번 → 저항 → LED → GND: 13번이 HIGH 일 때만 켜지고 경고 없음', () => {
  const c = { parts: [board, led, res], wires: [W('uno:13', 'r1:1'), W('r1:2', 'led1:A'), W('led1:C', 'uno:GND.2')] };
  const on = N.evaluate(c, { pins: { 13: 'H' } });
  assert.equal(on.parts.led1.on, true);
  assert.deepEqual(kinds(on), []);
  assert.equal(N.evaluate(c, { pins: { 13: 'L' } }).parts.led1.on, false);
});

test('저항을 GND 쪽에 둬도 켜진다', () => {
  const c = { parts: [board, led, res], wires: [W('uno:13', 'led1:A'), W('led1:C', 'r1:1'), W('r1:2', 'uno:GND.1')] };
  const r = N.evaluate(c, { pins: { 13: 'H' } });
  assert.equal(r.parts.led1.on, true);
  assert.deepEqual(kinds(r), []);
});

test('저항 없이 바로 이으면 켜지되 저항 없음 경고', () => {
  const c = { parts: [board, led], wires: [W('uno:13', 'led1:A'), W('led1:C', 'uno:GND.1')] };
  const r = N.evaluate(c, { pins: { 13: 'H' } });
  assert.equal(r.parts.led1.on, true);
  assert.deepEqual(kinds(r), ['no-resistor']);
});

test('선을 12번으로 옮기면 13번 출력으로는 켜지지 않는다', () => {
  const c = { parts: [board, led, res], wires: [W('uno:12', 'r1:1'), W('r1:2', 'led1:A'), W('led1:C', 'uno:GND.1')] };
  assert.equal(N.evaluate(c, { pins: { 13: 'H', 12: 'L' } }).parts.led1.on, false);
  assert.equal(N.evaluate(c, { pins: { 13: 'L', 12: 'H' } }).parts.led1.on, true);
});

test('LED 방향이 반대면 꺼지고 방향 경고', () => {
  const c = { parts: [board, led, res], wires: [W('uno:13', 'r1:1'), W('r1:2', 'led1:C'), W('led1:A', 'uno:GND.1')] };
  const r = N.evaluate(c, { pins: { 13: 'H' } });
  assert.equal(r.parts.led1.on, false);
  assert.deepEqual(kinds(r), ['reversed']);
});

test('HIGH 핀을 GND 에 바로 이으면 합선', () => {
  const c = { parts: [board], wires: [W('uno:13', 'uno:GND.3')] };
  assert.deepEqual(kinds(N.evaluate(c, { pins: { 13: 'H' } })), ['short']);
  assert.deepEqual(kinds(N.evaluate(c, { pins: { 13: 'L' } })), []);
});

test('풀업 입력 2번: 버튼으로 GND 에 이으면 누를 때 LOW, 뗄 때 HIGH', () => {
  const c = { parts: [board, btn], wires: [W('uno:2', 'btn1:1.l'), W('btn1:2.r', 'uno:GND.1')] };
  assert.equal(N.evaluate(c, { pins: { 2: 'pullup' }, pressed: {} }).inputs['2'], true);
  assert.equal(N.evaluate(c, { pins: { 2: 'pullup' }, pressed: { btn1: true } }).inputs['2'], false);
});

test('버튼의 같은 쪽 다리(1.l·1.r)는 누르지 않아도 이어져 있다', () => {
  const c = { parts: [board, btn], wires: [W('uno:2', 'btn1:1.l'), W('btn1:1.r', 'uno:GND.1')] };
  assert.equal(N.evaluate(c, { pins: { 2: 'pullup' } }).inputs['2'], false);
});

test('풀업 없는 입력이 버튼만 거쳐 떠 있으면 경고', () => {
  const c = { parts: [board, btn], wires: [W('uno:2', 'btn1:1.l'), W('btn1:2.r', 'uno:GND.1')] };
  const r = N.evaluate(c, { pins: { 2: 'in' } });
  assert.equal(r.inputs['2'], false);
  assert.deepEqual(kinds(r), ['floating']);
});

test('버튼과 무관한 떠 있는 입력은 경고하지 않는다', () => {
  const c = { parts: [board, res], wires: [W('uno:12', 'r1:1')] };
  assert.deepEqual(kinds(N.evaluate(c, { pins: { 12: 'in' } })), []);
});

test('출력 핀을 다른 입력 핀에 이으면 그 값을 읽는다', () => {
  const c = { parts: [board], wires: [W('uno:8', 'uno:7')] };
  assert.equal(N.evaluate(c, { pins: { 8: 'H', 7: 'in' } }).inputs['7'], true);
  assert.equal(N.evaluate(c, { pins: { 8: 'L', 7: 'pullup' } }).inputs['7'], false);
});

test('보드 안에서 이어진 핀(A4 와 위쪽 A4.2)은 한 묶음이다', () => {
  const c = { parts: [board], wires: [W('uno:A4.2', 'uno:GND.1')] };
  assert.equal(N.evaluate(c, { pins: { A4: 'pullup' } }).inputs.A4, false);
});

test('validate: 없는 핀·모르는 부품·겹치는 id 를 거른다', () => {
  assert.deepEqual([...N.validate({ parts: [board, led], wires: [W('uno:13', 'led1:A')] })], []);
  assert.equal(N.validate({ parts: [board], wires: [W('uno:99', 'uno:GND.1')] }).length, 1);
  assert.equal(N.validate({ parts: [board, { id: 'x1', type: 'nuke' }], wires: [] }).length, 1);
  assert.equal(N.validate({ parts: [board, { id: 'uno', type: 'led' }], wires: [] }).length, 1);
  assert.equal(N.validate({ parts: [{ id: '<img>', type: 'led' }], wires: [] }).length, 1);
});
