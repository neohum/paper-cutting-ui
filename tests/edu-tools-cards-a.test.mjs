// 카드 교구 레인 cards-a — 공통 카드 판(_cards.js)과 겉모양 story · timeline · lifecycle · mindmap 계약 검사.
// jsdom 없이 돈다: 카드 판의 판정 모델(K.cards.model)은 DOM을 쓰지 않으므로 PaperKit 흉내(palette·registerTool·motifs)만 얹어
// 검사용 차시 _tool-<id>.js의 문항마다(쉬움·기본·도전) 시작 상태는 정답이 아님, solve→정답, wrongAnswer→오답(빈칸 아님),
// 1단계 힌트(교구·문항)에 정답 값 없음, distance(a,a)=0 · distance(시작,정답)>0 을 본다. 화면 검사는 check-lesson.mjs 몫이다.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';
import { targetLeak } from '../edu-content-pool/check-lesson.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const pool = join(root, 'edu-content-pool');
const TOOLS = ['story', 'timeline', 'lifecycle', 'mindmap'];
const src = (id) => readFileSync(join(pool, 'engine/tools', `${id}.js`), 'utf8');

// PaperKit 흉내: 판정 모델과 겉모양 등록에 필요한 것만
const tone = { light: '#fff', mid: '#ccc', dark: '#333', layer: '#999' };
const K = { palette: new Proxy({}, { get: () => tone }), motifs: {}, registered: {}, registerTool(id, def) { this.registered[id] = def; } };
const ctx = vm.createContext({ window: { PaperKit: K }, console });
vm.runInContext(src('_cards'), ctx, { filename: '_cards.js' });
const specs = {};
const define0 = K.cards.define;
K.cards.define = (id, spec) => { specs[id] = spec; return define0(id, spec); };
for (const id of TOOLS) vm.runInContext(src(id), ctx, { filename: `${id}.js` });

const lessonOf = (id) => { let l; vm.runInNewContext(readFileSync(join(pool, 'lessons/data', `_tool-${id}.js`), 'utf8'), { PaperLessons: { register(x) { l = x; } } }); return l; };
// 차시 안의 교구 문항(전개 활동 + 출구 질문)을 단계별로 펼친다 — registry.itemAt/itemStart와 같은 규칙
function cases(id) {
  const l = lessonOf(id); const out = [];
  const items = [];
  for (const st of l.stages) for (const a of st.activities || []) for (const it of a.items || []) items.push(it);
  if (l.exitTicket) for (const it of l.exitTicket.items || []) items.push(it);
  for (const it of items) {
    if (!it || it.free || it.kind === 'choice' || it.kind === 'mood' || !it.target) continue;
    if (it.tool && it.tool !== id) continue;
    for (const lv of ['easy', 'base', 'challenge']) {
      const v = (it.levels && it.levels[lv]) || {};
      out.push({ it, lv, o: Object.assign({}, it.toolOptions || {}, v.toolOptions || {}), state: 'state' in v ? v.state : it.state, target: v.target || it.target });
    }
  }
  return out;
}

test('공통 카드 판: 머리 주석에 모드·옵션·상태·판정·조작·겉모양 API가 있고 다섯 모드를 낸다', () => {
  const s = src('_cards');
  const head = s.slice(0, s.indexOf('*/'));
  for (const w of ['sort', 'order', 'match', 'pick', 'fill', '옵션', '상태', 'target', 'wrongAnswer', 'distance', '키보드', 'cardSize', 'layout', 'drawSlot', 'revealAfterCheck']) assert.ok(head.includes(w), `_cards 머리 주석에 '${w}' 없음`);
  assert.deepEqual([...K.cards.MODES], ['sort', 'order', 'match', 'pick', 'fill']);
  assert.equal(typeof K.cards.model, 'function');
});

test('겉모양 네 개: 머리 주석 표·예, registerTool 표시, 아이콘 규칙(fi fi-rr만, 이모지 없음)', () => {
  for (const id of TOOLS) {
    const s = src(id);
    const head = s.slice(0, s.indexOf('*/'));
    for (const w of ['옵션', '상태', 'target', '예']) assert.ok(head.includes(w), `${id}: 머리 주석에 '${w}' 없음`);
    assert.match(s, new RegExp(`registerTool\\('${id}'`), `${id} 등록 표시`);
    assert.ok(K.registered[id] && typeof K.registered[id].create === 'function', `${id} 등록됨`);
    assert.ok(!/\p{Extended_Pictographic}/u.test(s), `${id}: 이모지 없음`);
    for (const m of s.matchAll(/class="([^"]*fi [^"]*)"/g)) assert.match(m[1], /fi-rr-/, `${id}: 아이콘은 fi fi-rr-*`);
  }
});

for (const id of TOOLS) {
  test(`${id}: 검사용 차시 문항마다 시작≠정답, solve→정답, wrongAnswer→오답, 1단계 힌트에 정답 값 없음`, () => {
    const cs = cases(id);
    assert.ok(cs.length >= 9, `${id}: 교구 문항이 적음(${cs.length})`);
    const modes = new Set();
    for (const { it, lv, o, state, target } of cs) {
      const tag = `${id} ${lv} ‘${it.prompt}’`;
      const M = K.cards.model(o, specs[id]);
      modes.add(M.mode);
      M.setTarget(target);
      if (state) M.setState(state);
      const start = M.getState();
      assert.equal(M.verdict(target).correct, false, `${tag}: 시작 상태가 이미 정답`);
      // 1단계 힌트: 교구가 내는 글과 문항이 적은 글 모두 정답 값 없이
      const h1 = M.hintAt(target, 1, 0);
      assert.ok(typeof h1 === 'string' && h1.length > 5, `${tag}: 1단계 힌트 없음`);
      assert.equal(targetLeak(h1, target), null, `${tag}: 교구 1단계 힌트에 정답 값`);
      if (it.hints && it.hints[0]) assert.equal(targetLeak(it.hints[0], target), null, `${tag}: 문항 1단계 힌트에 정답 값`);
      // solve
      const sol = M.solution(target);
      assert.ok(sol, `${tag}: 풀이 없음`);
      M.apply(sol);
      const solved = M.getState();
      assert.equal(M.verdict(target).correct, true, `${tag}: solve 뒤 정답 아님`);
      assert.equal(M.distance(solved, solved), 0);
      assert.ok(M.distance(start, solved) > 0, `${tag}: 시작과 정답 거리 0`);
      // wrongAnswer: 정답 아님 + 빈칸 아님(채점할 수 있는 오답)
      const wa = M.wrongAnswer(target);
      assert.ok(wa && wa.at, `${tag}: wrongAnswer 없음`);
      M.setState(wa);
      const v = M.verdict(target);
      assert.equal(v.correct, false, `${tag}: wrongAnswer가 정답`);
      assert.equal(!!v.incomplete, false, `${tag}: wrongAnswer가 빈칸 상태`);
      assert.ok(M.distance(wa, solved) >= 1 && M.distance(wa, solved) <= 2, `${tag}: wrongAnswer는 정답에서 한두 장만 다름`);
      // 상태 되살리기
      M.setState(solved);
      assert.equal(JSON.stringify(M.getState()), JSON.stringify(solved), `${tag}: setState(getState()) 되살리기`);
    }
    assert.ok(modes.size >= 4, `${id}: 검사용 차시가 여러 모드를 써야 함(${[...modes]})`);
  });
}

test('모드별 판정: 이웃 바꿈 오답, 돌고 도는 순서(cyclic), 함정 카드, 여러 답 칸', () => {
  // order: 이웃 둘을 바꾸면 오답, cyclic이면 회전도 정답
  const o = K.cards.model({ mode: 'order', cards: ['알', '애벌레', '번데기', '나비'] }, specs.lifecycle);
  const t = { order: ['알', '애벌레', '번데기', '나비'], cyclic: true };
  o.setState({ at: { 알: 1, 애벌레: 2, 번데기: 3, 나비: 0 } });
  assert.equal(o.verdict(t).correct, true, '돌고 도는 순서는 어디서 시작해도 정답');
  assert.equal(o.verdict({ order: t.order }).correct, false, 'cyclic이 아니면 회전은 오답');
  o.setState({ at: { 알: 0, 애벌레: 2, 번데기: 1, 나비: 3 } });
  const j = o.judge({ order: t.order });
  assert.equal(j.correct, false);
  assert.match(j.feedback, /바뀌|자리/, '이웃 바꿈 피드백');
  // sort: 함정 카드(목록에 없는 카드)는 어느 칸에도 넣으면 안 됨
  const s = K.cards.model({ slots: ['봄', '겨울'], cards: ['벚꽃', '눈사람', '수박'] }, specs.mindmap);
  const ts = { sort: { 봄: ['벚꽃'], 겨울: ['눈사람'] } };
  s.setState({ at: { 벚꽃: 0, 눈사람: 1, 수박: null } });
  assert.equal(s.verdict(ts).correct, true);
  s.setState({ at: { 벚꽃: 0, 눈사람: 1, 수박: 0 } });
  assert.equal(s.verdict(ts).correct, false, '함정 카드를 넣으면 오답');
  // match: 한 칸에 되는 카드가 여럿
  const m = K.cards.model({ mode: 'match', slots: [{ id: 's1', label: '정직' }], cards: ['가', '나', '다'] }, specs.mindmap);
  m.setState({ at: { 나: 0 } });
  assert.equal(m.verdict({ match: { s1: ['가', '나'] } }).correct, true);
  // pick: 바구니 하나
  const p = K.cards.model({ mode: 'pick', topic: '여름', cards: ['수박', '눈', '부채'] }, specs.mindmap);
  p.setState({ at: { 수박: 0, 부채: 0 } });
  assert.equal(p.verdict({ pick: ['수박', '부채'] }).correct, true);
  p.setState({ at: { 수박: 0 } });
  assert.equal(p.verdict({ pick: ['수박', '부채'] }).correct, false);
  // setState는 잘못된 칸 번호·없는 카드를 버린다
  p.setState({ at: { 수박: 7, 없는카드: 0 } });
  assert.deepEqual(JSON.parse(JSON.stringify(p.getState())), { at: { 수박: null, 눈: null, 부채: null } }); // vm 안 객체라 JSON으로 옮겨 비교
});
