// 카드 교구 레인 cards-b — 겉모양 emotion · wordcards · kitchen · economy 계약 검사.
// jsdom 없이 돈다: 교구마다 def.model(o)(DOM 없는 판정 모델 — 카드 판 모드는 K.cards.model, 직접 그린 모드는 그 모드의 model)을
// PaperKit 흉내(palette·registerTool·motifs) 위에서 불러, 검사용 차시 _tool-<id>.js의 문항마다(쉬움·기본·도전)
// 시작 상태는 정답이 아님, solve→정답, wrongAnswer→오답(빈칸 아님), 1단계 힌트(교구·문항)에 정답 값 없음, distance를 본다.
// 화면 검사(키보드·인쇄·숨김)는 check-lesson.mjs 몫이다.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';
import { targetLeak } from '../edu-content-pool/check-lesson.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const pool = join(root, 'edu-content-pool');
const TOOLS = ['emotion', 'wordcards', 'kitchen', 'economy'];
// 검사용 차시가 써야 하는 모드(교구 머리 표의 모드 전부)
const MODES = {
  emotion: ['match', 'sort', 'pick', 'order', 'fill', 'scale', 'branch'],
  wordcards: ['flip', 'match', 'listen', 'spell', 'sort', 'pick', 'order', 'fill'],
  kitchen: ['sort', 'order', 'match', 'pick', 'fill', 'checklist'],
  economy: ['pay', 'budget', 'sort', 'match', 'order', 'pick', 'fill'],
};
const DEFAULT_MODE = { emotion: 'match', wordcards: 'match', kitchen: 'sort', economy: 'sort' };
const src = (id) => readFileSync(join(pool, 'engine/tools', `${id}.js`), 'utf8');

const tone = { light: '#fff', mid: '#ccc', dark: '#333', layer: '#999', base: '#aaa' };
const K = { palette: new Proxy({}, { get: () => tone }), motifs: {}, registered: {}, registerTool(id, def) { this.registered[id] = def; }, transform() {}, piece() {} };
const ctx = vm.createContext({ window: { PaperKit: K }, console });
vm.runInContext(src('_cards'), ctx, { filename: '_cards.js' });
for (const id of TOOLS) vm.runInContext(src(id), ctx, { filename: `${id}.js` });
const J = (v) => JSON.parse(JSON.stringify(v)); // vm 안 객체를 밖 객체로

const lessonOf = (id) => { let l; vm.runInNewContext(readFileSync(join(pool, 'lessons/data', `_tool-${id}.js`), 'utf8'), { PaperLessons: { register(x) { l = x; } } }); return l; };
// 차시 안의 교구 문항(전개 + 출구)을 단계별로 펼친다 — 플레이어와 같은 합치기: 활동 levels 옵션 → 문항 toolOptions → 단계별 toolOptions
function cases(id) {
  const l = lessonOf(id); const out = [];
  for (const st of l.stages) {
    for (const a of st.activities || []) {
      for (const it of a.items || []) {
        if (it.free || a.tool !== id) continue;
        for (const lv of ['easy', 'base', 'challenge']) {
          const v = (it.levels && it.levels[lv]) || {};
          out.push({ it, lv, o: Object.assign({}, (a.levels && a.levels[lv]) || {}, it.toolOptions || {}, v.toolOptions || {}), state: 'state' in v ? v.state : it.state, target: v.target || it.target, hints: it.hints, where: `${a.id}` });
        }
      }
    }
    for (const q of st.exitTicket || []) {
      if (q.type !== 'tool' || q.tool !== id) continue;
      for (const lv of ['easy', 'base', 'challenge']) {
        const v = (q.levels && q.levels[lv]) || {};
        out.push({ it: q, lv, o: Object.assign({}, q.options || {}, v.toolOptions || {}), state: 'state' in v ? v.state : q.state, target: v.target || q.target, where: 'exit' });
      }
    }
  }
  return { lesson: l, out };
}

test('cards-b 공통 블록이 네 파일에서 글자 하나 다르지 않다', () => {
  const block = (s) => { const a = s.indexOf('// ── cards-b 공통'); const b = s.indexOf('})();', a); assert.ok(a > 0 && b > a, '공통 블록 없음'); return s.slice(a, b); };
  const first = block(src(TOOLS[0]));
  for (const id of TOOLS.slice(1)) assert.equal(block(src(id)), first, `${id}의 공통 블록이 ${TOOLS[0]}와 다름`);
  assert.equal(typeof K.cardsB.tool, 'function');
});

test('겉모양 네 개: 머리 주석 표·예, registerTool 표시, 아이콘 규칙(fi fi-rr만, 이모지 없음), 자동 읽기 없음', () => {
  for (const id of TOOLS) {
    const s = src(id);
    const head = s.slice(0, s.indexOf('*/'));
    for (const w of ['옵션', '상태', 'target', '예', '모드', 'wrongAnswer', 'distance', '조작', '활동지']) assert.ok(head.includes(w), `${id}: 머리 주석에 '${w}' 없음`);
    for (const m of MODES[id]) assert.ok(head.includes(`| ${m}`) || head.includes(` ${m} `) || head.includes(`${m}·`) || head.includes(`·${m}`), `${id}: 머리 표에 모드 ${m} 없음`);
    assert.match(s, new RegExp(`registerTool\\('${id}'`), `${id} 등록 표시`);
    assert.ok(K.registered[id] && typeof K.registered[id].create === 'function' && typeof K.registered[id].model === 'function', `${id} 등록됨`);
    assert.ok(!/\p{Extended_Pictographic}/u.test(s), `${id}: 이모지 없음`);
    for (const m of s.matchAll(/fi (fi-[a-z]+-[a-z-]+)/g)) assert.match(m[1], /^fi-rr-/, `${id}: 아이콘은 fi fi-rr-*`);
    assert.ok(!/autoplay|\.play\(\)/.test(s), `${id}: 자동 재생 없음`);
  }
});

for (const id of TOOLS) {
  test(`${id}: 검사용 차시 문항마다 시작≠정답, solve→정답, wrongAnswer→오답, 1단계 힌트에 정답 값 없음, 모드 전부 씀`, () => {
    const { lesson, out } = cases(id);
    assert.ok(out.length >= 27, `${id}: 교구 문항이 적음(${out.length / 3})`);
    // 차시 모양: 3단계 40분, 활동 1~3개, 활동마다 문항 3~6개, 출구 tool 문항, 활동지 figure
    assert.deepEqual(J(lesson.stages.map((s) => s.id)), ['intro', 'main', 'wrapup']);
    assert.equal(lesson.stages.reduce((s, x) => s + x.minutes, 0), 40);
    const acts = lesson.stages[1].activities;
    assert.ok(acts.length >= 1 && acts.length <= 3);
    for (const a of acts) assert.ok(a.items.length >= 3 && a.items.length <= 6, `${id} ${a.id}: 문항 수 ${a.items.length}`);
    assert.ok(lesson.stages[2].exitTicket.some((q) => q.type === 'tool' && q.tool === id), `${id}: 출구 질문에 tool 문항 없음`);
    assert.ok(lesson.worksheet.items.some((w) => w.type === 'figure' && w.tool === id), `${id}: 활동지 figure 없음`);
    const used = new Set();
    for (const { it, lv, o, state, target, hints, where } of out) {
      const tag = `${id} ${where} ${lv} ‘${it.prompt}’`;
      used.add(o.mode || DEFAULT_MODE[id]);
      const M = K.registered[id].model(o);
      if (state) M.setState(state);
      const start = J(M.getState());
      assert.equal(M.verdict(target).correct, false, `${tag}: 시작 상태가 이미 정답`);
      const h1 = M.hint(target, 1);
      assert.ok(typeof h1 === 'string' && h1.length > 5, `${tag}: 1단계 힌트 없음`);
      assert.equal(targetLeak(h1, target), null, `${tag}: 교구 1단계 힌트에 정답 값`);
      if (hints && hints[0]) assert.equal(targetLeak(hints[0], target), null, `${tag}: 문항 1단계 힌트에 정답 값`);
      for (const lvl of [2, 3]) assert.ok(String(M.hint(target, lvl)).length > 5, `${tag}: ${lvl}단계 힌트 없음`);
      M.solve(target);
      const solved = J(M.getState());
      assert.equal(M.verdict(target).correct, true, `${tag}: solve 뒤 정답 아님`);
      assert.equal(M.distance(solved, solved), 0);
      assert.ok(M.distance(start, solved) > 0, `${tag}: 시작과 정답 거리 0`);
      const wa = M.wrongAnswer(target);
      if (target && target.selfCheck != null) { assert.equal(wa, null, `${tag}: selfCheck는 오답 상태가 없다`); continue; }
      assert.ok(wa, `${tag}: wrongAnswer 없음`);
      M.setState(wa);
      const v = M.verdict(target);
      assert.equal(v.correct, false, `${tag}: wrongAnswer가 정답`);
      assert.equal(!!v.incomplete, false, `${tag}: wrongAnswer가 빈칸 상태`);
      assert.ok(typeof v.feedback === 'string' && v.feedback.length > 5, `${tag}: 틀린 판정 피드백 없음`);
      M.setState(solved);
      assert.equal(JSON.stringify(J(M.getState())), JSON.stringify(solved), `${tag}: setState(getState()) 되살리기`);
    }
    for (const m of MODES[id]) assert.ok(used.has(m), `${id}: 검사용 차시가 모드 ${m}을 쓰지 않음`);
  });
}

test('economy pay: 가장 적은 개수(단위별 개수 제한 포함), 오답은 큰 돈을 작은 돈 여럿으로', () => {
  const D = K.registered.economy;
  const M = D.model({ mode: 'pay' });
  M.solve({ pay: 750, fewest: true });
  assert.deepEqual(J(M.getState()), { n: { 10: 0, 50: 1, 100: 2, 500: 1, 1000: 0 } });
  const wa = J(M.wrongAnswer({ pay: 750, fewest: true }));
  M.setState(wa);
  const v = M.verdict({ pay: 750, fewest: true });
  assert.equal(v.correct, false); assert.match(v.feedback, /적은 개수/);
  assert.equal(M.verdict({ pay: 750 }).correct, true, 'fewest가 아니면 같은 값은 정답');
  // 지갑 제한: 500원이 없으면 100원 여러 개
  const M2 = D.model({ mode: 'pay', wallet: { 500: 0 } });
  M2.solve({ pay: 700, fewest: true });
  assert.deepEqual(J(M2.getState()), { n: { 10: 0, 50: 0, 100: 7, 500: 0, 1000: 0 } });
  // 지폐 단위
  const M3 = D.model({ mode: 'pay', coins: [100, 500, 1000, 5000, 10000] });
  M3.solve({ pay: 16600, fewest: true });
  assert.deepEqual(J(M3.getState()).n, { 100: 1, 500: 1, 1000: 1, 5000: 1, 10000: 1 });
  // 1단계 힌트에 수 없음
  assert.ok(!/\d/.test(M.hint({ pay: 750 }, 1)));
  // setState는 없는 단위·넘는 개수를 버린다
  M.setState({ n: { 100: 99, 7: 3 } });
  assert.deepEqual(J(M.getState()).n, { 10: 0, 50: 0, 100: 9, 500: 0, 1000: 0 });
});

test('economy budget: 예산·꼭·빼기·개수·최소 조건, 오답은 예산 넘김', () => {
  const o = { mode: 'budget', budget: 3000, items: [{ id: 'a', text: '가', price: 500 }, { id: 'b', text: '나', price: 1200 }, { id: 'c', text: '다', price: 2500 }] };
  const M = K.registered.economy.model(o);
  M.setState({ picked: ['b', 'c'] });
  const r = M.verdict({ budget: {} });
  assert.equal(r.correct, false); assert.match(r.feedback, /예산보다/);
  M.setState({ picked: ['a', 'b'] });
  assert.equal(M.verdict({ budget: { must: ['b'] } }).correct, true);
  assert.equal(M.verdict({ budget: { not: ['a'] } }).correct, false);
  assert.equal(M.verdict({ budget: { count: 1 } }).correct, false);
  assert.equal(M.verdict({ budget: { min: 2000 } }).correct, false);
  M.solve({ budget: { must: ['b'] } });
  assert.deepEqual(J(M.getState()), { picked: ['a', 'b'] }, '예산 안에서 가장 많이 쓰는 고름');
  M.setState(M.wrongAnswer({ budget: { must: ['b'] } }));
  assert.match(M.verdict({ budget: { must: ['b'] } }).feedback, /예산보다/);
});

test('wordcards: 같은 글자가 떨어져 있는 낱말(level)도 철자 판정, listen·match 목표 바꾸기, flip all', () => {
  const W = K.registered.wordcards;
  const S = W.model({ mode: 'spell', word: 'level' });
  assert.equal(S.mode, 'fill');
  S.setState({ at: { 'l*': 0, e: 1, v: 2, 'e*': 3, l: 4 } });
  assert.equal(S.verdict({ spell: 'level' }).correct, true, '같은 글자 카드는 어느 것이든 됨');
  S.setState({ at: { l: 0, e: 1, v: 3, 'e*': 2, 'l*': 4 } });
  assert.equal(S.verdict({ spell: 'level' }).correct, false);
  const L = W.model({ mode: 'listen', words: [{ en: 'cat', ko: '고양이' }, { en: 'dog', ko: '개' }] });
  assert.equal(L.mode, 'pick');
  L.setState({ at: { dog: 0 } });
  assert.equal(L.verdict({ listen: 'dog' }).correct, true);
  // listen 카드는 영어 글을 보이지 않는다(듣고 고르기)
  assert.ok(L.options.cards.every((c) => c.text !== c.id), 'listen 카드 글은 뜻');
  const F = W.model({ mode: 'flip', words: ['cat', 'dog'] });
  F.setState({ up: ['cat', 'dog'] });
  assert.equal(F.verdict({ flip: 'all' }).correct, true);
  F.setState({ up: ['dog'] });
  assert.equal(F.verdict({ flip: ['cat'] }).correct, false);
  assert.match(F.hint({ flip: ['cat'] }, 3), /덮어요|뒤집어요/);
  const R = W.model({ reverse: true, words: [{ en: 'cat', ko: '고양이' }] });
  assert.equal(R.options.slots[0].label, 'cat');
});

test('emotion·kitchen·economy: 기본 칸과 저절로 붙는 그림', () => {
  const E = K.registered.emotion.model({ cards: ['기쁨', '아주 긴 상황 글이라 그림을 붙이지 않아요'], slots: [{ id: 's', label: '화가 나는 일이 있었어요' }] });
  assert.equal(E.options.cards[0].motif, 'sun', '마음 낱말 카드에 날씨 그림');
  assert.equal(E.options.cards[1].motif, undefined, '긴 글에는 그림을 붙이지 않음');
  assert.equal(E.options.slots[0].motif, undefined, '상황 글(칸)에 날씨 그림을 붙이면 답이 보인다');
  const S = K.registered.emotion.model({ mode: 'scale', steps: 5 });
  S.setState({ level: 5 });
  assert.equal(S.verdict({ level: 'any' }).correct, true);
  assert.equal(S.verdict({ level: [2, 3] }).correct, false);
  assert.match(S.verdict({ level: [2, 3] }).feedback, /크게/);
  const Bm = K.registered.emotion.model({ mode: 'branch', choices: [{ id: 'a', text: '가' }, { id: 'b', text: '나' }, { id: 'c', text: '다' }] });
  Bm.setState({ choice: 'c' });
  assert.equal(Bm.verdict({ choice: ['b', 'c'] }).correct, true, '되는 보기가 여럿');
  const Kt = K.registered.kitchen.model({ cards: ['밥', '두부'] });
  assert.deepEqual(J(Kt.options.slots.map((s) => s.id)), ['곡류', '고기', '채소', '우유', '유지']);
  assert.equal(Kt.options.cards[0].motif, 'rice');
  const Ck = K.registered.kitchen.model({ mode: 'checklist', items: ['가', '나'] });
  Ck.setState({ checked: ['가'] });
  const v = Ck.verdict({ selfCheck: true });
  assert.equal(v.correct, false); assert.equal(v.incomplete, true);
  const Ec = K.registered.economy.model({ cards: ['빵을 구워요'] });
  assert.deepEqual(J(Ec.options.slots.map((s) => s.id)), ['생산', '소비', '교환']);
});
