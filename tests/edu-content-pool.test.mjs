import { test } from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { readFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const pool = join(root, 'edu-content-pool');
const dataset = process.env.LEARNING_MAP_DIR
  ?? join(root, '../project2026/korean-elementary-learning-map-mcp/data/kr');

function loadCatalog() {
  const sandbox = { window: {} };
  vm.runInNewContext(readFileSync(join(pool, 'catalog-data.js'), 'utf8'), sandbox);
  return sandbox.window.EDU_CATALOG;
}

test('generator rebuilds catalog-data.js from the learning-map dataset', { skip: !existsSync(join(dataset, 'topics.json')) && 'dataset not checked out' }, () => {
  const out = execFileSync('node', [join(pool, 'build-catalog.mjs'), '--dataset', dataset], { encoding: 'utf8' });
  assert.match(out, /lessons=\d+/);
});

test('every grade × subject of the 2022 curriculum has units and lessons', () => {
  const C = loadCatalog();
  for (let g = 1; g <= 6; g++) {
    const band = g <= 2 ? '1-2' : g <= 4 ? '3-4' : '5-6';
    for (const s of C.subjects[band]) {
      const units = C.units.filter((u) => u.g === g && u.s === s);
      assert.ok(units.length > 0, `${g}학년 ${s}: 단원 없음`);
      const lessons = C.lessons.filter((l) => units.some((u) => u.id === l.u));
      assert.ok(lessons.length > 0, `${g}학년 ${s}: 차시 없음`);
    }
  }
});

test('lesson numbers are contiguous within each unit and match the declared count', () => {
  const C = loadCatalog();
  for (const u of C.units) {
    const nums = C.lessons.filter((l) => l.u === u.id).map((l) => l.i);
    assert.equal(nums.length, u.n, `${u.id}`);
    // vm 샌드박스 배열은 다른 realm이라 deepStrictEqual의 프로토타입 비교에 걸린다 → 값으로 비교
    assert.ok(nums.every((n, k) => n === k + 1), `${u.id}: 차시 번호가 1..${u.n}이 아님`);
  }
});

test('lesson references resolve: topics, tools, standards', () => {
  const C = loadCatalog();
  const tools = new Set(C.tools.map((t) => t.id));
  for (const l of C.lessons) {
    if (l.tp) assert.ok(C.topics[l.tp], `topic ${l.tp}`);
    if (l.tool) assert.ok(tools.has(l.tool), `tool ${l.tool}`);
  }
  for (const u of C.units) for (const code of u.std) assert.ok(C.standards[code], `standard ${code}`);
});

// 총론은 교과(군)별 ±20% 증감을 허용하고, 3~6학년은 학교자율시간 때문에 출판사 차시가 기준보다 적다(예: 비상 수학 학기 64차시).
test('annual lesson totals stay within the legal ±20% of the 2022 curriculum base hours', () => {
  const C = loadCatalog();
  for (let g = 1; g <= 6; g++) {
    const band = g <= 2 ? '1-2' : g <= 4 ? '3-4' : '5-6';
    for (const s of C.subjects[band]) {
      const hours = C.hours[band]?.[s];
      if (!hours) continue;
      const n = C.units.filter((u) => u.g === g && u.s === s).reduce((a, u) => a + u.n, 0);
      const expected = hours / 2;
      assert.ok(Math.abs(n - expected) / expected <= 0.20, `${g}학년 ${s}: ${n}차시, 기준 ${expected}`);
    }
  }
});

test('ability-form objective conversion handles -는다 / -ㄴ다 endings', () => {
  const src = readFileSync(join(pool, 'catalog.js'), 'utf8');
  const body = src.slice(src.indexOf('const HANGUL'), src.indexOf('function buildPackage'));
  const toAbility = new Function(`${body}; return toAbility;`)();
  assert.equal(toAbility('시계를 보고 시각을 읽는다.', '수 있다.'), '시계를 보고 시각을 읽을 수 있다.');
  assert.equal(toAbility('까닭을 찾아 설명한다.', '수 있다.'), '까닭을 찾아 설명할 수 있다.');
  assert.equal(toAbility('작품을 만든다.', '수 있다.'), '작품을 만들 수 있다.');
  assert.equal(toAbility('정답이다', '수 있다.'), null);
});

test('worksheet print uses the ecosystem classroom-ui exam styles', () => {
  const html = readFileSync(join(pool, 'catalog.html'), 'utf8');
  assert.match(html, /vendor\/classroom-ui\/exam\.css/);
  assert.match(html, /vendor\/classroom-ui\/print\.css/);
  assert.match(html, /<html lang="ko">/);
  const js = readFileSync(join(pool, 'catalog.js'), 'utf8');
  assert.match(js, /edu-exam-sheet/);
});
