// 창체 모듈 조합기(modules/compose.js)·생성기(build-modules.mjs) — 브라우저 없이 도는 규칙 검사
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';
import { PM, loadFramework, loadModuleFiles, moduleIndex, build } from '../edu-content-pool/build-modules.mjs';

const pool = join(dirname(fileURLToPath(import.meta.url)), '..', 'edu-content-pool');
const fw = loadFramework();
const mf = loadModuleFiles();
const get = (id) => (mf.byId.get(id) || {}).m;
const saf = fw.domains.get('saf-life');
const clone = (v) => JSON.parse(JSON.stringify(v));
// 조합기는 vm 안에서 돌아 배열의 realm 이 다르다 — 값으로 비교한다
const eq = (a, b, m) => assert.deepEqual(JSON.parse(JSON.stringify(a)), b, m);
const T = 'saf-life.e12.g1-home';
// framework/safety-a.json 의 1학년 추천 조합 3차시(도입 6 + 활동 14·13 + 정리 7)
const IDS = [`${T}.intro.kitchen-find`, `${T}.activity.touch-sort`, `${T}.activity.room-map`, `${T}.wrap.home-check`];
const ctx = (over = {}) => ({ id: 'cc-1-saf-life-03', grade: 1, n: 3, domain: saf, topic: PM.topicOf(saf, T), ...over });

test('예시 모듈 7개가 형식 오류 없이 읽힌다', () => {
  eq(mf.errors, []);
  const mods = [...mf.byId.values()].map((x) => x.m).filter((m) => m.topic === T);
  assert.equal(mods.length, 7);
  for (const m of mods) eq(PM.shapeErrors(m), [], m.id);
});

test('도입 1 + 활동 2 + 정리 1 → 40분 edu-lesson.v1, 활동지·수준 합치기', () => {
  const { lesson, errors } = PM.compose(IDS.map(get), ctx());
  eq(errors, []);
  assert.equal(lesson.schema, 'edu-lesson.v1');
  eq(lesson.stages.map((s) => s.id), ['intro', 'main', 'wrapup']);
  assert.equal(lesson.stages.reduce((a, s) => a + s.minutes, 0), 40);
  eq(lesson.stages[1].activities.map((a) => a.id), ['a1', 'a2']);
  assert.match(lesson.stages[1].activities[1].title, /^활동 2\. /);
  // 활동 모듈의 활동지 1문항씩 + 정리 모듈 2문항
  assert.equal(lesson.worksheet.items.length, 4);
  assert.equal(lesson.worksheet.items[0].type, 'table');
  assert.ok(lesson.worksheet.easy.items.length >= 2);
  assert.ok(lesson.differentiation.easy.length > 0);
  eq(lesson.modules, IDS);
  assert.equal(lesson.catalog.unit, 'g1-창체-saf-life');
  // 원본 모듈을 바꾸지 않는다(같은 모듈이 여러 차시에 들어간다)
  lesson.stages[1].activities[0].items[0].prompt = 'x';
  assert.notEqual(get(IDS[1]).activity.items[0].prompt, 'x');
});

test('분 합계: ±3분 안은 가장 긴 활동으로 맞추고, 넘으면 거절한다', () => {
  const mods = IDS.map((id) => clone(get(id)));
  mods[1].minutes = 16; // 활동 합 29 (27 + 2) — 가장 긴 활동(16분)이 14분으로
  const ok = PM.compose(mods, ctx());
  eq(ok.errors, []);
  assert.equal(ok.lesson.stages[1].activities[0].minutes, 14);
  assert.equal(ok.lesson.minutes, 40);
  mods[1].minutes = 20; // 활동 합 33 (27 + 6)
  const bad = PM.compose(mods, ctx());
  assert.equal(bad.lesson, null);
  assert.match(bad.errors.join(), /분 합계 46분/);
  // 검사기 시험 조합(probe)은 분을 따지지 않는다
  assert.ok(PM.compose(mods, ctx({ probe: true })).lesson);
});

test('순서·학년·학년군·중복을 거절한다', () => {
  const m = IDS.map(get);
  assert.match(PM.compose([m[1], m[0], m[2], m[3]], ctx()).errors.join(), /첫 모듈.*도입이 아님/);
  assert.match(PM.compose([m[0], m[1], m[1], m[3]], ctx()).errors.join(), /두 번/);
  assert.match(PM.compose(m, ctx({ grade: 3 })).errors.join(), /학년군 초1-2/);
  assert.match(PM.compose([m[0], m[3]], ctx()).errors.join(), /도입 1 \+ 활동 1~3 \+ 정리 1/);
  assert.match(PM.compose([m[0], m[1], undefined, m[3]], ctx()).errors.join(), /찾지 못함/);
  assert.match(PM.compose(m, ctx({ grade: 2 })).errors.join(), /2학년 모듈이 아님/);
});

test('형식 검사는 틀린 모듈을 잡는다', () => {
  const a = clone(get(IDS[1]));
  a.activity.title = '활동 1. 나누기'; a.tool = 'chart'; a.id = `${T}.wrap.sort2`;
  const e = PM.shapeErrors(a).join('\n');
  assert.match(e, /활동 n\./); assert.match(e, /tool\(chart\)/); assert.match(e, /넷째 마디/);
  const w = clone(get(IDS[3])); w.tool = null;
  assert.match(PM.shapeErrors(w).join(), /첫 교구 출구 질문/);
});

test('추천 조합 id 와 교사 조합 id', () => {
  assert.equal(PM.lessonIdOf(10, 'saf-life', 3), 'cc-10-saf-life-03');
  assert.match(PM.customIdOf(1, 'saf-life', IDS), /^cc-1-saf-life-x[0-9a-z]{6}$/);
  assert.equal(PM.customIdOf(1, 'saf-life', IDS), PM.customIdOf(1, 'saf-life', IDS));
  assert.notEqual(PM.customIdOf(1, 'saf-life', IDS), PM.customIdOf(1, 'saf-life', [...IDS].reverse()));
  for (const id of ['cc-1-saf-life-01', PM.customIdOf(1, 'saf-life', IDS)]) assert.match(id, PM.LESSON_ID);
  // 레지스트리의 차시 id 모양(registry.js ID)에도 맞는다
  assert.match(PM.customIdOf(12, 'law-edu', IDS), /^_?[a-z0-9](?:[a-z0-9-])*$/);
  const seq = PM.sequencesOf(saf, 1).find((x) => x.n === 3);
  assert.equal(seq.id, 'cc-1-saf-life-03');
  eq(seq.ids, IDS);
});

test('학년군: 초 40 · 중 45 · 고 50분, 학년 → 학년군', () => {
  eq([1, 3, 6, 7, 9, 10, 12].map((g) => PM.bandOf(g).label), ['초1-2', '초3-4', '초5-6', '중', '중', '고', '고']);
  eq(PM.BANDS.map((b) => b.minutes), [40, 40, 40, 45, 50]);
  assert.equal(PM.bandOf(13), null);
});

test('색인: 추천 조합 차시가 조합되면 ready, 생성 파일이 최신', () => {
  const idx = moduleIndex(fw, mf);
  const g1 = idx.domains['saf-life'].grades[1];
  assert.equal(g1.find((x) => x.n === 3).ready, true);
  // 4차시는 아직 안 쓴 계획 모듈(activity.yes-no-role)이 있어 열리지 않는다
  assert.equal(g1.find((x) => x.n === 4).ready, false);
  assert.equal(idx.domains['saf-life'].bands['초1-2'].modules, 7);
  const r = build({ check: true });
  eq(r.errors, []);
  eq(r.stale, [], 'node edu-content-pool/build-modules.mjs 로 다시 만든다');
});

test('브라우저 조합기와 같은 파일: window 로 읽으면 PaperModules 가 생긴다', () => {
  const w = {}; w.self = w;
  vm.runInNewContext(readFileSync(join(pool, 'modules/compose.js'), 'utf8'), w);
  assert.equal(typeof w.PaperModules.compose, 'function');
  const reg = { list: [] };
  vm.runInNewContext(readFileSync(join(pool, 'modules/saf-life/e12.js'), 'utf8'), { PaperLessons: { registerModules: (x) => reg.list.push(...x) } });
  assert.equal(reg.list.length, 7);
});
