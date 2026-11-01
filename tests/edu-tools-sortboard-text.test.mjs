// 분류판(sortboard) 글 카드 모드 — 공통 카드 판 위의 '종이 바구니' 겉모양과 단추 모드 회귀.
// jsdom 없이 돈다: PaperKit·DOM 흉내(조각·무대·기록기만)를 얹어 교구를 실제로 장착하고(create) 장착된 교구의
// solve→check 참, wrongAnswer→check 거짓·incomplete 아님, 1단계 힌트에 정답 없음, 상태 되살리기를 본다.
// 단추 모드는 2학년 수학 차시(g2-math-sort, g2-math-1-05)의 sortboard 문항이 전부 단추 모드로 장착되고 그 판정이 그대로인지 본다.
// 화면(겹침·44px·390px 넘침)은 check-unit.mjs 몫이다.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';
import { targetLeak } from '../edu-content-pool/check-lesson.mjs';
import { reachProblems } from '../edu-content-pool/check-reach.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const pool = join(root, 'edu-content-pool');
const src = (id) => readFileSync(join(pool, 'engine/tools', `${id}.js`), 'utf8');

// ---- DOM 흉내: 교구가 쓰는 만큼만 ----
class Node {
  constructor(tag) { this.tagName = tag; this.children = []; this.attrs = {}; this.style = {}; this.listeners = {}; this.textContent = ''; this.dataset = {}; this.clientWidth = 0; const cls = new Set(); this.classList = { add: (c) => cls.add(c), remove: (c) => cls.delete(c), toggle: (c, on) => (on ? cls.add(c) : cls.delete(c)), contains: (c) => cls.has(c) }; }
  setAttribute(k, v) { this.attrs[k] = String(v); }
  getAttribute(k) { return this.attrs[k] ?? null; }
  removeAttribute(k) { delete this.attrs[k]; }
  appendChild(c) { this.children.push(c); c.parentNode = this; return c; }
  prepend(c) { this.children.unshift(c); c.parentNode = this; }
  insertBefore(c, ref) { const i = this.children.indexOf(ref); this.children.splice(i < 0 ? this.children.length : i, 0, c); c.parentNode = this; return c; }
  remove() { if (this.parentNode) this.parentNode.children = this.parentNode.children.filter((x) => x !== this); }
  addEventListener(t, f) { (this.listeners[t] ||= []).push(f); }
  querySelectorAll() { return []; }
  querySelector() { return null; }
  focus() {}
  set innerHTML(v) { this._html = v; }
  get innerHTML() { return this._html || ''; }
  all() { return [this, ...this.children.flatMap((c) => c.all())]; }
}
const tone = { light: '#fff', mid: '#ccc', dark: '#333', layer: '#999', base: '#ccc' };
function makeKit(log) {
  const K = {
    palette: new Proxy({}, { get: () => tone }), motifs: {}, tools: {},
    registerTool(id, def) { this.tools[id] = def; },
    el(tag, attrs, parent) { const n = new Node(tag); for (const [k, v] of Object.entries(attrs || {})) if (v != null) n.setAttribute(k, v); if (parent) parent.appendChild(n); return n; },
    stage(box, o) { const svg = new Node('svg'); svg.setAttribute('viewBox', `0 0 ${o.viewBox.join(' ')}`); box.appendChild(svg); return { svg, layer: (name) => K.el('g', { class: `pk-layer pk-layer--${name}` }, svg) }; },
    piece(st, parent, o) { const g = K.el('g', { class: 'pk-piece' }, parent); const face = K.el(o.shape.type, { class: 'pk-face', fill: o.fill || '#ccc' }, g); return { g, face, under: [] }; },
    transform(g, t) { g.__pk = Object.assign({ x: 0, y: 0, s: 1, r: 0 }, g.__pk || {}, t); },
    drag() {}, spring() {}, tick() {}, announce() {},
    tween(ms, f) { f(1); return Promise.resolve(); },
    wait: () => Promise.resolve(),
    recorder: { events: [], log(type, data) { this.events.push({ type, ...(data || {}) }); if (log) log(type, data); } },
  };
  return K;
}
function load() {
  const K = makeKit();
  const ctx = vm.createContext({ window: { PaperKit: K }, document: { createElement: (t) => new Node(t), createElementNS: (_, t) => new Node(t) }, console, setTimeout, clearTimeout, setInterval, clearInterval });
  vm.runInContext(src('_cards'), ctx, { filename: '_cards.js' });
  let spec = null;
  const define0 = K.cards.define;
  K.cards.define = (id, s) => { if (id === 'sortboard') spec = s; return define0(id, s); };
  vm.runInContext(src('sortboard'), ctx, { filename: 'sortboard.js' });
  return { K, spec, def: K.tools.sortboard };
}
const { K, spec, def } = load();
const mount = (o) => { const box = new Node('div'); const inst = def.create(box, o, K); return { box, inst }; };
const plain = (x) => JSON.parse(JSON.stringify(x)); // vm 안 객체를 이 쪽 객체로

// 학년군마다 글 길이가 다른 검사용 문항(창체 체계도 모듈 모양)
const CASES = [
  { tag: '초1-2 두 칸', o: { slots: ['지켜요', '안 돼요'], cards: ['복도에서 걸어요', '계단에서 뛰어요', '줄을 서요', '친구를 밀어요'] },
    target: { sort: { 지켜요: ['복도에서 걸어요', '줄을 서요'], '안 돼요': ['계단에서 뛰어요', '친구를 밀어요'] } } },
  { tag: '초5-6 세 칸 + 함정 + icon', o: { slots: ['지진', '태풍', '폭염'], cards: [{ id: 'a', text: '책상 아래로 들어가 머리를 보호해요', icon: 'house' }, { id: 'b', text: '창문에서 떨어진 곳에 있어요' }, { id: 'c', text: '한낮에는 그늘에서 물을 자주 마셔요' }, { id: 'd', text: '흔들림이 멈추면 운동장으로 대피해요' }, { id: 'e', text: '아무것도 하지 않아요' }] },
    target: { sort: { 지진: ['a', 'd'], 태풍: ['b'], 폭염: ['c'] } } },
  { tag: '고 네 칸 40자', o: { slots: [{ id: 's1', label: '개인 정보' }, { id: 's2', label: '저작권' }, { id: 's3', label: '초상권' }, { id: 's4', label: '명예' }], cards: [
    { id: 'p1', text: '친구의 전화번호와 집 주소가 보이는 사진을 단체 대화방에 올리는 일' },
    { id: 'p2', text: '남이 그린 웹툰 장면을 출처 없이 내 계정에 올려 조회수를 모으는 일' },
    { id: 'p3', text: '동의 없이 찍은 친구 얼굴 사진을 학급 누리집 첫 화면에 올리는 일' },
    { id: 'p4', text: '확인되지 않은 소문을 사실처럼 써서 특정 학생을 깎아내리는 글' }] },
    target: { sort: { s1: ['p1'], s2: ['p2'], s3: ['p3'], s4: ['p4'] } } },
];

test('머리 주석: 두 모드의 옵션·상태·target 이 나란히 적혀 있고 등록 표시·아이콘 규칙을 지킨다', () => {
  const s = src('sortboard'); const head = s.slice(0, s.indexOf('*/'));
  for (const w of ['단추 모드', '글 카드 모드', 'slots', 'cards', 'instant', 'limit', 'more', 'showCount', 'revealAfterCheck', 'print', '상태', 'target', "{ sort: { '칸 이름'", '{ at: {', '키보드', '예:']) assert.ok(head.includes(w), `머리 주석에 '${w}' 없음`);
  assert.match(s, /registerTool\('sortboard'/);
  assert.ok(!/\p{Extended_Pictographic}/u.test(s), '이모지 없음');
  assert.equal(typeof def.create, 'function');
  assert.equal(def.name, '분류판');
});

test('모드 판별: 단추 id만 있으면 단추, slots 나 글 카드가 있으면 글 카드', () => {
  const { isText } = def.core;
  assert.equal(isText({}), false);
  assert.equal(isText({ cards: ['r2c', 'b4s'] }), false);
  assert.equal(isText({ cards: ['r2c', 'b4s'], limit: 1, more: 2, by: '색', showCount: true }), false);
  assert.equal(isText({ slots: ['가', '나'] }), true);
  assert.equal(isText({ cards: ['r2c', '복도에서 걸어요'] }), true);
  assert.equal(isText({ cards: [{ id: 'r2c', text: '빨간 단추' }] }), true, '객체 카드는 글 카드');
  // 장착 결과도 모드를 따른다: 글 카드 = 카드 판 상태 { at }, 단추 = { by, placed }
  assert.ok('at' in plain(mount(CASES[0].o).inst.getState()));
  assert.ok('placed' in plain(mount({ cards: ['r2c', 'b4s'] }).inst.getState()));
});

for (const c of CASES) {
  test(`글 카드 ${c.tag}: 시작≠정답, solve→check 참, wrongAnswer→check 거짓·incomplete 아님, 1단계 힌트에 정답 없음, 되살리기`, () => {
    const { inst } = mount(c.o); inst.setTarget(c.target);
    const start = plain(inst.getState());
    const r0 = inst.check(c.target);
    assert.equal(r0.correct, false, '시작이 정답');
    assert.equal(r0.incomplete, true, '아무것도 안 넣으면 incomplete');
    // 1단계 힌트: 시도 전·뒤 모두 칸 이름·카드 글 없음
    for (const att of [0, 1, 3]) {
      const h = inst.hint(c.target, { level: 1, attempts: att }).hint;
      assert.ok(typeof h === 'string' && h.length > 10, '1단계 힌트 없음');
      assert.equal(targetLeak(h, c.target), null, `1단계 힌트에 정답 값: ${h}`);
      for (const sl of c.o.slots) assert.ok(!h.includes(typeof sl === 'string' ? sl : sl.label), `1단계 힌트에 칸 이름: ${h}`);
    }
    inst.solve(c.target);
    const solved = plain(inst.getState());
    const r1 = inst.check(c.target);
    assert.equal(r1.correct, true, `solve 뒤 정답 아님: ${r1.feedback}`);
    assert.ok(inst.distance(start, solved) > 0);
    assert.equal(inst.distance(solved, solved), 0);
    // 2·3단계 힌트는 맞힌 판에서는 '모두 알맞게'
    assert.equal(inst.hint(c.target, { level: 3, attempts: 3 }).correct, true);
    const wa = plain(inst.wrongAnswer(c.target));
    assert.ok(wa && wa.at, 'wrongAnswer 없음');
    inst.setState(wa);
    const r2 = inst.check(c.target);
    assert.equal(r2.correct, false, 'wrongAnswer 가 정답');
    assert.ok(!r2.incomplete, 'wrongAnswer 가 incomplete(다 넣었지만 틀림이어야 함)');
    assert.ok(r2.feedback && r2.hint, '틀린 확인에 피드백·힌트');
    assert.ok(inst.distance(wa, solved) >= 1 && inst.distance(wa, solved) <= 2);
    // 2단계는 어긋난 카드를 짚고, 3단계는 한 장의 풀이
    assert.notEqual(inst.hint(c.target, { level: 2, attempts: 1 }).hint, inst.hint(c.target, { level: 1, attempts: 0 }).hint);
    inst.setState(solved);
    assert.deepEqual(plain(inst.getState()), solved, '되살리기');
    inst.reset();
    assert.equal(inst.check(c.target).correct, false, 'reset 뒤에도 정답');
  });
}

test('글 카드 함정 카드: 목록에 없는 카드를 바구니에 넣으면 오답, 카드 칸에 두면 정답', () => {
  const c = CASES[1]; const { inst } = mount(c.o);
  inst.solve(c.target);
  const s = plain(inst.getState());
  assert.equal(s.at.e, null);
  assert.equal(inst.check(c.target).correct, true);
  inst.setState({ at: Object.assign({}, s.at, { e: 0 }) });
  assert.equal(inst.check(c.target).correct, false);
});

test('글 카드 limit·more·icon: 앞 n장 + 더 넣을 카드, icon 은 카드 판의 motif 로', () => {
  const o = textOf({ slots: ['가', '나'], cards: ['하나', { id: '둘', text: '둘', icon: 'sun' }, '셋'], limit: 2, more: ['넷'] });
  assert.deepEqual(o.cards.map((x) => (typeof x === 'string' ? x : x.id)), ['하나', '둘', '넷']);
  assert.equal(o.cards[1].motif, 'sun');
  assert.equal(o.mode, 'sort');
  const { inst } = mount({ slots: ['가', '나'], cards: ['하나', '둘', '셋'], limit: 2, more: ['넷'] });
  assert.deepEqual(Object.keys(plain(inst.getState()).at), ['하나', '둘', '넷']);
  function textOf(x) { return plain(def.core.textOptions(x)); }
});

test('글 카드 showCount·revealAfterCheck: 개수는 넣을 때 바뀌고, revealAfterCheck면 맞힌 확인 뒤에만 보인다', () => {
  const c = CASES[0];
  const texts = (box) => box.all().filter((n) => n.attrs.class && n.attrs.class.includes('sb-count')).map((n) => n.textContent);
  const a = mount(Object.assign({ showCount: true }, c.o));
  assert.deepEqual(texts(a.box), ['0장', '0장']);
  a.inst.solve(c.target);
  assert.deepEqual(texts(a.box), ['2장', '2장']);
  const b = mount(Object.assign({ showCount: true, revealAfterCheck: true }, c.o));
  b.inst.solve(c.target);
  assert.deepEqual(texts(b.box), ['', ''], '확인 전에는 숨김');
  assert.equal(b.inst.check(c.target, { forHint: true }).correct, true);
  assert.deepEqual(texts(b.box), ['', ''], '힌트용 검사는 보이지 않게');
  b.inst.check(c.target);
  assert.deepEqual(texts(b.box), ['2장', '2장'], '맞힌 확인 뒤 보임');
});

test('글 카드 카드 크기: 40자 글도 세 줄 안(말줄임 없음), 짧은 글은 좁은 카드', () => {
  const { wrapLines } = K.cards.util;
  const long = CASES[2].o.cards.map((x) => x.text);
  for (const t of long) assert.ok(t.length >= 34 && t.length <= 42, `검사 글 길이 ${t.length}`);
  const [w, h] = spec.cardSize({ cards: long.map((text) => ({ text })) });
  assert.ok(w <= 280, `카드 폭 ${w} > 280(판 폭 300에 들어가야 함)`);
  for (const t of long) assert.ok(wrapLines(t, w - 14, 18).length <= 3, `‘${t}’가 ${w}폭에서 세 줄을 넘음`);
  assert.ok(h >= 3 * 24, '세 줄 높이');
  const [w2] = spec.cardSize({ cards: [{ text: '줄을 서요' }, { text: '뛰어요' }] });
  assert.ok(w2 <= 136, `짧은 글 카드 폭 ${w2}`);
});

test('글 카드 활동지(print): 조작 없이 그려지고 바구니 이름표가 보인다', () => {
  const { box } = mount(Object.assign({ print: true }, CASES[0].o));
  const words = box.all().map((n) => n.textContent).join(' ');
  for (const sl of CASES[0].o.slots) assert.ok(words.includes(sl), `활동지에 ‘${sl}’ 이름표 없음`);
  assert.ok(!box.all().some((n) => n.attrs.class === 'cd-tip'), '활동지에 조작 안내가 없어야 함');
});

test('교구 범위(check-reach): 글 카드 모드의 칸 수·없는 칸·없는 카드를 잡고 단추 모드는 보지 않는다', () => {
  assert.deepEqual(reachProblems('sortboard', CASES[1].o, CASES[1].target), []);
  assert.deepEqual(reachProblems('sortboard', { cards: ['r2c', 'b4s'] }, { by: '색' }), []);
  assert.ok(reachProblems('sortboard', { slots: ['하나'], cards: ['가'] }, { sort: { 하나: ['가'] } }).some((x) => /2~4/.test(x)));
  assert.ok(reachProblems('sortboard', { slots: ['가', '나'], cards: ['ㄱ', 'ㄴ'] }, { sort: { 다: ['ㄱ'] } }).some((x) => /‘다’/.test(x)));
  assert.ok(reachProblems('sortboard', { slots: ['가', '나'], cards: ['ㄱ', 'ㄴ'] }, { sort: { 가: ['ㄷ'] } }).some((x) => /‘ㄷ’/.test(x)));
  assert.ok(reachProblems('sortboard', { slots: ['가', '나'], cards: ['ㄱ', 'ㄴ', 'ㄷ'], limit: 2 }, { sort: { 가: ['ㄷ'] } }).some((x) => /‘ㄷ’/.test(x)), 'limit 로 빠진 카드');
  assert.deepEqual(reachProblems('sortboard', { slots: ['가', '나'], cards: ['ㄱ', 'ㄴ'], more: ['ㄷ'] }, { sort: { 가: ['ㄷ'] } }), [], 'more 로 더한 카드');
});

// ---- 단추 모드 회귀: 2학년 수학 차시의 sortboard 문항 ----
function buttonItems() {
  const out = [];
  const reg = (l) => {
    const walk = (x, actOpts) => {
      if (!x || typeof x !== 'object') return;
      if (Array.isArray(x)) { x.forEach((y) => walk(y, actOpts)); return; }
      if (x.tool === 'sortboard' && Array.isArray(x.items)) { x.items.forEach((it) => { if (!it.free && it.target) out.push({ it, actOpts: x.options || {} }); }); return; }
      if (x.tool === 'sortboard' && x.target) { out.push({ it: x, actOpts: x.options || {} }); return; }
      for (const v of Object.values(x)) walk(v, actOpts);
    };
    walk(l);
  };
  for (const f of ['lessons/data/g2-math-sort.js', 'lessons/units/g2-math-1-05.js']) {
    vm.runInNewContext(readFileSync(join(pool, f), 'utf8'), { PaperLessons: { register: reg, registerUnit: reg }, window: {} });
  }
  return out;
}
test('단추 모드 회귀: 2학년 분류하기 차시의 sortboard 문항이 모두 단추 모드로 장착되고 solve→정답, wrongAnswer→오답', () => {
  const items = buttonItems();
  assert.ok(items.length >= 10, `2학년 sortboard 문항이 적음(${items.length})`);
  for (const { it, actOpts } of items) {
    for (const lv of ['easy', 'base', 'challenge']) {
      const v = (it.levels && it.levels[lv]) || {};
      const o = Object.assign({}, actOpts, it.toolOptions || it.options || {}, v.toolOptions || {});
      const target = v.target || it.target;
      const tag = `‘${it.prompt || it.q || ''}’ ${lv}`;
      assert.equal(def.core.isText(o), false, `${tag}: 단추 문항이 글 카드 모드로 잡힘`);
      const { inst } = mount(o); inst.setTarget(target);
      const st = plain(inst.getState());
      assert.ok('placed' in st && 'by' in st, `${tag}: 단추 모드 상태 모양이 아님`);
      inst.solve(target);
      assert.equal(inst.check(target).correct, true, `${tag}: solve 뒤 정답 아님`);
      const wa = inst.wrongAnswer(target);
      if (!wa) continue;
      inst.setState(plain(wa));
      const r = inst.check(target);
      assert.equal(r.correct, false, `${tag}: wrongAnswer 가 정답`);
    }
  }
});

// clock: 긴바늘은 minuteStep(hourOnly 면 60)분씩만 돈다 — 그 간격으로 닿지 않는 분은 교구 범위 밖
test('check-reach clock: 단계 분 간격으로 닿지 않는 target 은 범위 밖', () => {
  assert.ok(reachProblems('clock', { minuteStep: 10 }, { h: 8, m: 23 }).some((x) => /분 간격 10분/.test(x)));
  assert.ok(reachProblems('clock', { hourOnly: true }, { h: 3, m: 30 }).some((x) => /hourOnly/.test(x)));
  assert.deepEqual(reachProblems('clock', { minuteStep: 10 }, { h: 8, m: 20 }), []);
  assert.deepEqual(reachProblems('clock', {}, { h: 8, m: 23 }), []);
  assert.deepEqual(reachProblems('clock', { minuteStep: 5, hourOnly: true }, { h: 7 }), []);
  // 읽기(보기 고르기)는 바늘을 움직이지 않는다
  assert.deepEqual(reachProblems('clock', { readOnly: true, minuteStep: 30 }, { pick: 1, h: 8, m: 23 }), []);
});

// timer 구간 이름(labels): 없으면 예전 글 그대로, 있으면 단추·피드백·힌트가 그 이름을 쓴다(체육 밖 차시 — 게임·발표 시간)
test('timer labels: 구간 이름 옵션과 교구 범위 규칙', () => {
  const box = {}; vm.runInNewContext(src('timer'), { window: { PaperKit: { registerTool(name, def) { box[name] = def.core; } } } });
  const C = box.timer;
  const t = { plan: { work: 30, rest: 10, rounds: 4 } };
  const swapped = { plan: { work: 10, rest: 30, rounds: 4 } };
  // 기본(labels 없음): 예전 글과 글자 하나 다르지 않다
  assert.equal(C.judge(swapped, t, {}).feedback, '운동 시간과 쉬는 시간이 바뀌었어요.');
  assert.equal(C.judge(swapped, t, {}).hint, '먼저 운동, 그다음 쉬기예요. 두 수를 바꾸어 넣어요.');
  assert.equal(C.hint({ plan: { work: 30, rest: 10, rounds: 3 } }, t, {}, { level: 1, attempts: 0 }).hint, '문제에서 운동하는 시간, 쉬는 시간, 되풀이하는 횟수를 하나씩 찾아 차례로 맞추어요.');
  // labels 가 있으면 그 이름으로 말한다
  const o = { labels: ['게임', '쉬기'] };
  assert.equal(C.judge(swapped, t, o).feedback, '게임 시간과 쉬는 시간이 바뀌었어요.');
  assert.match(C.judge({ plan: { work: 30, rest: 10, rounds: 3 } }, t, o).feedback, /^되풀이 횟수가/);
  assert.match(C.judge({ plan: { work: 25, rest: 10, rounds: 4 } }, t, o).hint, /게임 시간을/);
  assert.match(C.hint({ plan: { work: 30, rest: 10, rounds: 3 } }, t, o, { level: 1, attempts: 0 }).hint, /게임 시간, 쉬는 시간/);
  assert.doesNotMatch(C.hint({ plan: { work: 30, rest: 10, rounds: 3 } }, t, o, { level: 1, attempts: 0 }).hint, /운동/);
  assert.equal(C.hint(swapped, t, { labels: ['발표', '준비'] }, { level: 3, attempts: 2 }).hint, '발표 30초, 준비 10초로 넣어요.');
  // 교구 범위: 두 글자열 · 5자까지
  assert.deepEqual(reachProblems('timer', o, t), []);
  assert.ok(reachProblems('timer', { labels: ['게임'] }, t).some((x) => /labels 는/.test(x)));
  assert.ok(reachProblems('timer', { labels: ['게임', ''] }, t).some((x) => /labels 는/.test(x)));
  assert.ok(reachProblems('timer', { labels: ['모둠 게임하기', '쉬기'] }, t).some((x) => /5자까지/.test(x)));
  // 범위 밖 글도 그 이름을 쓴다
  assert.ok(reachProblems('timer', { labels: ['게임', '쉬기'] }, { plan: { work: 33 } }).some((x) => /^게임 33초에/.test(x)));
});

// pattern 색: 엔진 팔레트 8색 + 빨강(red). 모르는 색 이름은 CSS 색 글자로 칠해지고 색 이름이 읽히지 않는다
test('check-reach pattern: 규칙 판에 없는 색 이름은 범위 밖, red 는 된다', () => {
  assert.deepEqual(reachProblems('pattern', { mode: 'odd', seq: ['circle:red', 'circle:rose', 'circle:red', 'circle:red'] }, { odd: 1 }), []);
  assert.ok(reachProblems('pattern', { seq: ['circle:crimson', 'square:sky', null] }, { fill: ['circle:crimson'] }).some((x) => /‘crimson’/.test(x)));
  assert.ok(reachProblems('pattern', { mode: 'make', palette: [{ s: 'star', c: 'gold' }, 'heart:rose'] }, { rule: 'repeat' }).some((x) => /‘gold’/.test(x)));
  assert.deepEqual(reachProblems('pattern', { seq: [3, 6, null] }, { fill: [9] }), []);
});

// 휴대폰 축척 누름 영역: block-coding trace 칸, keyboard 놓인 리듬 블록·블록 고르개·검은건반.
// 휴대폰(390px)에서 판(560 단위)은 약 0.607배로 줄었다 — 옛 교구: 5×5 칸 43.7px(cc-11-bully-04), 블록 38.6px(g1-int-1-01), 고르개 42.8px, 검은건반 38.9px.
test('휴대폰 축척 누름 영역: block-coding 칸·keyboard 블록·고르개·검은건반이 44px 이상', () => {
  const PPU = 0.607;
  const K2 = makeKit();
  const stage0 = K2.stage;
  K2.stage = (box, o) => { const st = stage0(box, o); st.svg.getScreenCTM = () => ({ a: PPU }); st.point = (e) => ({ x: e.sx, y: e.sy }); return st; };
  K2.motifs.star = () => {};
  const ctx = vm.createContext({ window: { PaperKit: K2 }, document: { createElement: (t) => new Node(t), createElementNS: (_, t) => new Node(t) }, matchMedia: () => ({ matches: true }), console, setTimeout, clearTimeout });
  for (const id of ['block-coding', 'keyboard']) vm.runInContext(src(id), ctx, { filename: `${id}.js` });
  const px = (n, k) => Number(n.getAttribute(k) || 0) * PPU;
  const hitOf = (g) => g.children.find((x) => /pk-hit/.test(x.getAttribute('class') || ''));
  const byClass = (root, c) => root.all().filter((x) => (x.getAttribute('class') || '').split(/\s+/).includes(c));

  // block-coding trace 5×5(cc-11-bully-04 모양): 칸마다 누름 영역 48px 이상
  const bbox = new Node('div');
  const bc = K2.tools['block-coding'].create(bbox, { mode: 'trace', cols: 5, rows: 5, start: { x: 0, y: 4, dir: 'E' }, program: ['fwd', 'fwd'] }, K2);
  const cells = byClass(bbox, 'bc-cell');
  assert.equal(cells.length, 25);
  for (const g of cells) { const h = hitOf(g); assert.ok(h, '칸 누름 영역(pk-hit) 없음'); assert.ok(Math.min(px(h, 'width'), px(h, 'height')) >= 44, `칸 누름 영역 ${px(h, 'width').toFixed(1)}px`); }
  // 넓힌 영역이 겹친 곳: 누른 자리가 든 칸이 골라진다(첫 칸의 처리기로 둘째 칸 한가운데를 눌러도 둘째 칸)
  const c1 = hitOf(cells[1]); const mid = (h) => [Number(h.getAttribute('x')) + Number(h.getAttribute('width')) / 2, Number(h.getAttribute('y')) + Number(h.getAttribute('height')) / 2];
  const [sx, sy] = mid(c1);
  cells[0].listeners.click[0]({ clientX: 1, clientY: 1, sx, sy, preventDefault() {} });
  assert.deepEqual(plain(bc.getState()).mark, { x: 1, y: 0 });

  // keyboard rhythm: 블록 7개 고르개는 좁은 화면에서 두 줄, 블록마다 폭 44px 이상
  const kbox = new Node('div');
  const kb = K2.tools.keyboard.create(kbox, { mode: 'rhythm', meter: 4, measures: 2, blocks: ['q', 'e', 'h', 'dh', 'w', 'qr', 'er'] }, K2);
  const pal = byClass(kbox, 'kb-pal');
  assert.equal(pal.length, 7);
  assert.ok(new Set(pal.map((g) => g.__pk.y)).size >= 2, '블록 7개 고르개가 한 줄');
  const xs = pal.filter((g) => g.__pk.y === pal[0].__pk.y).map((g) => g.__pk.x);
  assert.ok((xs[1] - xs[0]) * PPU >= 44, `고르개 블록 간격 ${((xs[1] - xs[0]) * PPU).toFixed(1)}px`);
  // 놓인 블록: 1박 블록 둘 + 2박 — 누름 영역 짧은 변 44px 이상
  kb.setState({ rhythm: ['q', 'q', 'h'] });
  const blocks = byClass(kbox, 'kb-block');
  assert.equal(blocks.length, 3);
  for (const g of blocks) { const h = hitOf(g); assert.ok(h, '블록 누름 영역(pk-hit) 없음'); assert.ok(Math.min(px(h, 'width'), px(h, 'height')) >= 44, `블록 누름 영역 ${px(h, 'width').toFixed(1)}×${px(h, 'height').toFixed(1)}px`); }
  // 겹친 곳은 누른 박 자리가 든 블록: 첫 블록 처리기로 셋째(2박) 블록 자리를 누르면 셋째가 빠진다
  blocks[0].listeners.click[0]({ clientX: 1, clientY: 1, sx: blocks[2].__pk.x + 40, sy: 60, preventDefault() {} });
  assert.deepEqual(plain(kb.getState()).rhythm, ['q', 'q']);

  // keyboard melody 검은건반: 누름 영역 폭 44px 이상
  const mbox = new Node('div');
  K2.tools.keyboard.create(mbox, { mode: 'melody', from: '도', to: '높은도', black: true }, K2);
  const blacks = byClass(mbox, 'kb-key--black');
  assert.ok(blacks.length >= 2);
  for (const g of blacks) { const h = hitOf(g); assert.ok(h, '검은건반 누름 영역 없음'); assert.ok(px(h, 'width') >= 44 && px(h, 'height') >= 44, `검은건반 누름 영역 ${px(h, 'width').toFixed(1)}px`); }
});

test('휴대폰 축척 누름 영역: chart 막대(세로 7개·가로 4개·가로 7개)와 body 한 글자 고르기 단추가 44px 이상', () => {
  const BOXW = 340; const PPU = BOXW / 640; // 휴대폰 390px 화면의 무대 폭 340px ÷ viewBox 폭 640
  const K3 = makeKit();
  K3.colorOf = () => tone;
  const stage0 = K3.stage;
  K3.stage = (box, o) => { const st = stage0(box, o); st.point = (e) => ({ x: e.sx, y: e.sy }); return st; };
  Node.prototype.append = function (...cs) { for (const c of cs) this.appendChild(c); };
  Node.prototype.setPointerCapture = function () {};
  Object.defineProperty(Node.prototype, 'childNodes', { configurable: true, get() { return this.children; } });
  const doc = { createElement: (t) => new Node(t), createElementNS: (_, t) => new Node(t), getElementById: () => null, head: new Node('head') };
  const ctx = vm.createContext({ window: { PaperKit: K3 }, document: doc, getComputedStyle: () => ({ paddingLeft: '0', paddingRight: '0', maxHeight: 'none' }), CSS: { escape: (s) => s }, console, setTimeout, clearTimeout });
  for (const id of ['chart', 'body']) vm.runInContext(src(id), ctx, { filename: `${id}.js` });
  const mountChart = (o, w) => { const box = new Node('div'); box.clientWidth = w; const inst = K3.tools.chart.create(box, o, K3); const svg = box.all().find((x) => x.tagName === 'svg'); return { box, inst, vb: svg.getAttribute('viewBox').split(' ').map(Number) }; };
  const sliders = (box) => box.all().filter((x) => x.getAttribute('role') === 'slider');
  const hitOf = (g) => g.children.find((x) => /pk-hit/.test(x.getAttribute('class') || ''));
  const num = (n, k) => Number(n.getAttribute(k));

  // 세로 막대 7개(작성자들이 막대 수를 줄여 우회하던 판): 고칠 막대마다 누름 폭 44px 이상, 판 크기 그대로
  const data7 = [['축구', 9], ['피구', 6], ['줄넘기', 5], ['배드민턴', 4], ['야구', 3], ['농구', 7], ['수영', 2]];
  const v = mountChart({ type: 'bar', data: data7, unit: '명', scale: 1, max: 10, given: [1, 2, 3] }, BOXW);
  assert.deepEqual(v.vb, [0, 0, 640, 400]);
  const vs = sliders(v.box); assert.equal(vs.length, 4);
  for (const g of vs) { const h = hitOf(g); assert.ok(num(h, 'width') * PPU >= 44, `세로 막대 누름 폭 ${(num(h, 'width') * PPU).toFixed(1)}px`); assert.ok(num(h, 'x') >= 8 && num(h, 'x') + num(h, 'width') <= 632, '누름 영역이 판 밖으로 나감'); }
  // 넓힌 영역이 이웃 칸과 겹친 곳: 누른 자리의 칸이 바뀐다(농구 막대의 처리기로 수영 칸 한가운데를 누르면 수영)
  const slot = 538 / 7; const yOf = (val) => 56 + 270 - (val / 10) * 270;
  hitOf(vs[2]).listeners.pointerdown[0]({ pointerId: 1, sx: 74 + slot * 6.5, sy: yOf(2), preventDefault() {} });
  hitOf(vs[2]).listeners.pointerup[0]({});
  assert.deepEqual(plain(v.inst.getState()).values, [null, 6, 5, 4, null, null, 2]);
  // 겹친 곳이 잠긴(given) 칸이면 누른 막대 그대로
  hitOf(vs[0]).listeners.pointerdown[0]({ pointerId: 1, sx: 74 + slot * 1.05, sy: yOf(9), preventDefault() {} });
  assert.deepEqual(plain(v.inst.getState()).values, [9, 6, 5, 4, null, null, 2]);

  // 가로 막대 4개(g4-mus-1-01-22 모양, 전에 266.7×38.3px)·7개: 판을 아래로 늘려 겹침 없이 줄마다 44px 이상
  for (const data of [[['함께 노래', 6], ['악기 연주', 3], ['몸 표현', 2], ['듣기', 8]], data7]) {
    const h = mountChart({ type: 'bar', horizontal: true, data, unit: '번', given: [0] }, BOXW);
    const hs = sliders(h.box).map(hitOf);
    assert.equal(hs.length, data.length - 1);
    for (const r of hs) assert.ok(num(r, 'height') * PPU >= 44, `가로 막대 ${data.length}개 누름 높이 ${(num(r, 'height') * PPU).toFixed(1)}px`);
    for (let k = 1; k < hs.length; k++) assert.ok(num(hs[k - 1], 'y') + num(hs[k - 1], 'height') <= num(hs[k], 'y') + 1e-6, '가로 막대 누름 영역이 겹침');
  }
  // 넓은 화면(배율 1)의 기존 단원 크기(가로 막대 6개까지)·읽기 모드는 판 그대로(400)
  assert.equal(mountChart({ type: 'bar', horizontal: true, data: data7.slice(0, 6), unit: '번' }, 0).vb[3], 400);
  assert.equal(mountChart({ type: 'bar', horizontal: true, mode: 'read', data: data7, unit: '번', choices: ['a', 'b'] }, BOXW).vb[3], 400);

  // body 한 글자 고르기 단추('위'): 글이 짧아도 폭 44px 이상(최소 폭)
  const bbox = new Node('div');
  K3.tools.body.create(bbox, { mode: 'find', ask: { q: '음식물을 잘게 부수는 곳은?', choices: ['위', '간', '폐'] } }, K3);
  const ask = bbox.all().find((x) => x.getAttribute('role') === 'radiogroup');
  const btns = ask.innerHTML.match(/<button[^>]*data-pick[^>]*>/g) || [];
  assert.equal(btns.length, 3);
  for (const b of btns) assert.match(b, /min-width:\s*44px/, `고르기 단추에 최소 폭 없음: ${b}`);
});
