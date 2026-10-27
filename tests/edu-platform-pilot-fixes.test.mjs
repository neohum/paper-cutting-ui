// 시범 단원 리뷰에서 나온 플랫폼 결함 고침 — 카드 판 achievable, 축·판을 보는 중립 1단계 힌트, check-lesson 단원 차시 id.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';
import { unitOfLesson, loadDataLesson } from '../edu-content-pool/check-lesson.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const pool = join(root, 'edu-content-pool');
const src = (id) => readFileSync(join(pool, 'engine/tools', `${id}.js`), 'utf8');
const tone = { light: '#fff', mid: '#ccc', dark: '#333', layer: '#999' };
const K = { palette: new Proxy({}, { get: () => tone }), motifs: {}, registered: {}, registerTool(id, def) { this.registered[id] = def; } };
const ctx = vm.createContext({ window: { PaperKit: K }, console });
vm.runInContext(src('_cards'), ctx, { filename: '_cards.js' });
const specs = {};
const define0 = K.cards.define;
K.cards.define = (id, spec) => { specs[id] = spec; return define0(id, spec); };
for (const id of ['timeline', 'lifecycle', 'mindmap', 'story']) vm.runInContext(src(id), ctx, { filename: `${id}.js` });
const hint1 = (o, id, t) => { const M = K.cards.model(o, specs[id]); const h = M.hintAt(t, 1, 0); return typeof h === 'string' ? h : (h && h.hint) || ''; };

test('achievable: 판에 없는 카드·칸을 쓴 목표는 까닭, 만들 수 있으면 null', () => {
  const M = K.cards.model({ mode: 'order', cards: ['가', '나', '다'] }, specs.timeline);
  assert.equal(M.achievable({ order: ['가', '나', '다'] }), null);
  assert.match(M.achievable({ order: ['가', '나', '라'] }), /카드 ‘라’/);
  const S = K.cards.model({ slots: ['봄', '겨울'], cards: ['벚꽃', '눈사람'] }, specs.mindmap);
  assert.equal(S.achievable({ sort: { 봄: ['벚꽃'], 겨울: ['눈사람'] } }), null);
  assert.match(S.achievable({ sort: { 여름: ['벚꽃'] } }), /칸 ‘여름’/);
});

test('timeline·lifecycle 1단계 힌트: 시간 축·한살이일 때만 그 말, 아니면 중립', () => {
  const timeAxis = hint1({ mode: 'order', cards: ['가', '나', '다'] }, 'timeline', { order: ['가', '나', '다'] });
  const sizeAxis = hint1({ mode: 'order', axis: ['작은 수', '큰 수'], cards: ['가', '나', '다'] }, 'timeline', { order: ['가', '나', '다'] });
  assert.notEqual(timeAxis, sizeAxis, '축이 시간이 아니면 다른 말');
  assert.match(sizeAxis, /작은 수|큰 수/, '축 이름으로 말한다');
  const life = hint1({ mode: 'order', center: '배추흰나비의 한살이', cards: ['알', '애벌레', '번데기'] }, 'lifecycle', { order: ['알', '애벌레', '번데기'] });
  const loop = hint1({ mode: 'order', center: '물의 순환', cycle: false, cards: ['비', '강', '구름'] }, 'lifecycle', { order: ['비', '강', '구름'] });
  assert.notEqual(life, loop, '한살이가 아닌 순환은 다른 말');
  assert.doesNotMatch(loop, /자라|한살이|태어/, '생물 가정 없음');
});

test('mindmap match 기본 힌트는 근거를 가정하지 않는다', () => {
  const h = hint1({ mode: 'match', slots: [{ id: 's1', label: '비 오는 날' }], cards: ['우산', '부채'] }, 'mindmap', { match: { s1: '우산' } });
  assert.doesNotMatch(h, /근거|까닭/);
});

test('check-lesson: 단원 차시 id를 lessons/units에서 연다', () => {
  assert.equal(unitOfLesson('g4-art-1-01-01'), 'g4-art-1-01');
  assert.equal(unitOfLesson('g2-math-clock'), null);
  const l = loadDataLesson('g4-art-1-01-01');
  assert.equal(l && l.id, 'g4-art-1-01-01');
  assert.equal(loadDataLesson('g2-math-clock').id, 'g2-math-clock');
});
