// 창체 모듈 검사(check-module.mjs)의 구멍 셋 — 실제 모듈 사본에 결함을 넣어 검사기가 잡는지 본다.
//  1) 정리 출구 교구가 기본 단계로만 돌았다 → 쉬움·도전 판도 시작 상태 ≠ 정답, solve → check (브라우저, 크롬이 있을 때만)
//  2) chart 고르기 정답이 보기 밖(target.pick 999)이어도 통과 → check-reach chart 규칙
//  3) timer 출구 차례(target.order)에 판(cards)에 없는 카드가 있어도 통과 → 정리 모듈 출구도 check-reach 를 탄다
// 각 결함은 결함 없는 같은 모듈이 통과하는 것도 함께 잰다(검사가 그냥 다 떨어뜨리는 것이 아님을 보이려고).
// 더해서: 4) 문항·출구 질문의 levels[단계]에 options 칸(플레이어는 toolOptions 만 읽어 단계별 판이 조용히 무시된다) → 정적 실패
//          5) timer 차례: 판에 함정 카드가 더 있어도(카드 n장, 정답 차례 n−1장) 통과 — timer.js check 는 앞에서부터만 맞춰 본다
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { cpSync, mkdtempSync, readFileSync, writeFileSync, rmSync, symlinkSync, realpathSync } from 'node:fs';
import { spawn, spawnSync } from 'node:child_process';
import { createServer } from 'node:net';
import { tmpdir } from 'node:os';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { reachProblems } from '../edu-content-pool/check-reach.mjs';
import { findChrome } from '../edu-content-pool/check-lesson.mjs';

const repo = join(dirname(fileURLToPath(import.meta.url)), '..');

// 저장소 사본(edu-content-pool + node_modules 링크) — 검사기가 읽는 modules/ 를 고칠 수 있게
function sandbox() {
  const root = mkdtempSync(join(realpathSync(tmpdir()), 'edu-check-holes-'));
  cpSync(join(repo, 'edu-content-pool'), join(root, 'edu-content-pool'), { recursive: true });
  cpSync(join(repo, 'favicon.svg'), join(root, 'favicon.svg')); // 플레이어가 ../../favicon.svg 를 읽는다(없으면 브라우저 검사가 404 로 떨어진다)
  symlinkSync(join(repo, 'node_modules'), join(root, 'node_modules'), 'dir');
  return root;
}
// 앵커가 정확히 한 번 맞아야 바꾼다 — 빗나가면 결함 없이 '통과'를 재게 된다
function inject(root, file, from, to) {
  const p = join(root, 'edu-content-pool', file); const s = readFileSync(p, 'utf8');
  assert.equal(s.split(from).length - 1, 1, `${file}: 앵커가 한 번 맞아야 함`);
  writeFileSync(p, s.replace(from, to));
}
const checkModule = (root, args) => spawnSync(process.execPath, [join(root, 'edu-content-pool/check-module.mjs'), ...args], { cwd: root, encoding: 'utf8', timeout: 240000 });

const CHART_ID = 'bully.h.g11-victim-support.wrap.harm-chart';
const CHART_FROM = "prompt: '가상 사례 막대에서 가장 많이 나온 2차 피해 유형을 고르세요.', target: { pick: 1 }";
const TIMER_ID = 'auto.h.g10-habit.wrap.talk';
const TIMER_FROM = "target: { order: ['내가 맡은 쪽 권리를 말한다', '상대가 말한 권리를 요약한다', '겹치는 바람을 찾는다', '둘 다 지키는 합의안을 쓴다'] }";
const LEVEL_ID = 'auto.m.g8-rel.wrap.mini';
const LEVEL_FROM = "target: { order: ['찬성 입론', '반대 입론', '반대 반론', '찬성 반론', '반대 최종 발언', '찬성 최종 발언'], plan: { work: 1 } } })";

test('check-reach chart: 고르기 정답은 보기 안의 번호여야 한다', () => {
  const o = { type: 'bar', mode: 'read', data: [['가', 3], ['나', 5]], choices: ['가', '나', '다'] };
  assert.deepEqual(reachProblems('chart', o, { pick: 0 }), []);
  assert.deepEqual(reachProblems('chart', o, { pick: 2 }), []);
  assert.match(reachProblems('chart', o, { pick: 3 }).join(), /보기 3개\(0~2번\) 밖/);
  assert.match(reachProblems('chart', o, { pick: 999 }).join(), /pick 999/);
  assert.match(reachProblems('chart', o, { pick: -1 }).join(), /밖/);
  assert.match(reachProblems('chart', o, { pick: 1.5 }).join(), /밖/);
  assert.match(reachProblems('chart', { ...o, choices: undefined }, { pick: 0 }).join(), /보기\(choices\)가 없음/);
  // 고르기가 아닌 목표(그리기·수 쓰기)는 보지 않는다
  assert.deepEqual(reachProblems('chart', { ...o, mode: 'build' }, { build: true }), []);
  assert.deepEqual(reachProblems('chart', o, { answer: 5 }), []);
});

test('check-module --static: chart·timer 정리 출구 결함은 실패, 결함 없는 같은 모듈은 통과', () => {
  const root = sandbox();
  try {
    const clean = checkModule(root, [CHART_ID, '--static']);
    assert.equal(clean.status, 0, clean.stdout + clean.stderr);
    const cleanT = checkModule(root, [TIMER_ID, '--static']);
    assert.equal(cleanT.status, 0, cleanT.stdout + cleanT.stderr);

    inject(root, 'modules/bully/h.js', CHART_FROM, CHART_FROM.replace('pick: 1', 'pick: 999'));
    const r = checkModule(root, [CHART_ID, '--static']);
    assert.equal(r.status, 1, r.stdout + r.stderr);
    assert.match(r.stdout, new RegExp(`${CHART_ID.replace(/\./g, '\\.')} · exit\\.1 · 교구 범위 밖: 고르기 정답 pick 999`));

    inject(root, 'modules/auto/h.js', TIMER_FROM, TIMER_FROM.replace("'둘 다 지키는 합의안을 쓴다'] }", "'판에 없는 카드'] }"));
    const t = checkModule(root, [TIMER_ID, '--static']);
    assert.equal(t.status, 1, t.stdout + t.stderr);
    assert.match(t.stdout, /exit\.2 · 교구 범위 밖: 순서 카드에 없는 ‘판에 없는 카드’/);
  } finally { rmSync(root, { recursive: true, force: true }); }
});

test('check-reach timer: 함정 카드가 더 있어도 통과, 판에 없는 차례 카드는 실패', () => {
  const o = { cards: ['다', '가', '함정', '나'] };
  assert.deepEqual(reachProblems('timer', o, { order: ['가', '나', '다'] }), []);
  assert.deepEqual(reachProblems('timer', { cards: ['다', '가', '나'] }, { order: ['가', '나', '다'] }), []);
  assert.match(reachProblems('timer', o, { order: ['가', '나', '라'] }).join(), /순서 카드에 없는 ‘라’/);
});

const VOTE_ID = 'dokdo.e34.g4-eco.wrap.vote';
const VOTE_FROM = "levels: { easy: { prompt: '약속 후보 2개에 손든 수를 적어요.', toolOptions: { fields: VOTE(2) }";
const ACT_ID = 'saf-firstaid.e56.cpr-aed.activity.cpr-timer';
const ACT_FROM = "easy: { prompt: '쓰러진 사람을 보았을 때 할 일 카드를 차례대로 놓아요(3장).', toolOptions: {";

test('check-module --static: levels 단계의 options 칸(출구·문항)은 실패, toolOptions 면 통과', () => {
  const root = sandbox();
  try {
    for (const id of [VOTE_ID, ACT_ID]) { const r = checkModule(root, [id, '--static']); assert.equal(r.status, 0, r.stdout + r.stderr); }
    inject(root, 'modules/dokdo/e34.js', VOTE_FROM, VOTE_FROM.replace('toolOptions:', 'options:'));
    const e = checkModule(root, [VOTE_ID, '--static']);
    assert.equal(e.status, 1, e.stdout + e.stderr);
    assert.match(e.stdout, new RegExp(`${VOTE_ID.replace(/\./g, '\\.')} · exit\\.1 · levels\\.easy 에 options 칸`));
    inject(root, 'modules/saf-firstaid/e56.js', ACT_FROM, ACT_FROM.replace('toolOptions:', 'options:'));
    const a = checkModule(root, [ACT_ID, '--static']);
    assert.equal(a.status, 1, a.stdout + a.stderr);
    assert.match(a.stdout, /item\.\d+ · levels\.easy 에 options 칸/);
  } finally { rmSync(root, { recursive: true, force: true }); }
});

test('check-module --static: timer 출구 판에 함정 카드를 더해도 통과', () => {
  const root = sandbox();
  try {
    const CARDS = "cards: ['둘 다 지키는 합의안을 쓴다', '내가 맡은 쪽 권리를 말한다', '겹치는 바람을 찾는다', '상대가 말한 권리를 요약한다'] }, prompt: '권리 충돌 짝 토의의 차례 카드를 놓으세요.'";
    inject(root, 'modules/auto/h.js', CARDS, CARDS.replace("'상대가 말한 권리를 요약한다'] }", "'상대가 말한 권리를 요약한다', '내 말만 끝까지 한다'] }"));
    const r = checkModule(root, [TIMER_ID, '--static']);
    assert.equal(r.status, 0, r.stdout + r.stderr);
  } finally { rmSync(root, { recursive: true, force: true }); }
});

const freePort = () => new Promise((res) => { const s = createServer(); s.listen(0, () => { const { port } = s.address(); s.close(() => res(port)); }); });

test('check-module 브라우저: 출구 도전 판의 시작 상태가 이미 정답이면 실패, 결함 없으면 통과', { skip: !findChrome() && '크롬 없음', timeout: 300000 }, async () => {
  const root = sandbox();
  const port = await freePort();
  const hubProc = spawn(process.execPath, [join(root, 'edu-content-pool/classroom-hub.mjs'), '--port', String(port)], { cwd: root, stdio: 'ignore' });
  try {
    const url = `http://localhost:${port}`;
    for (let i = 0; i < 50; i++) { if (await fetch(`${url}/api/results?class=__ping`).then((r) => r.ok, () => false)) break; await new Promise((r) => setTimeout(r, 200)); }
    const run = () => new Promise((res) => { const p = spawn(process.execPath, [join(root, 'edu-content-pool/check-module.mjs'), LEVEL_ID, '--hub', url, '--no-pdf'], { cwd: root }); let out = ''; p.stdout.on('data', (d) => { out += d; }); p.stderr.on('data', (d) => { out += d; }); p.on('close', (code) => res({ code, out })); });
    const clean = await run();
    assert.equal(clean.code, 0, clean.out);
    inject(root, 'modules/auto/m.js', LEVEL_FROM, LEVEL_FROM.replace("plan: { work: 1 } } })", "plan: { work: 1 } }, state: { order: ['찬성 입론', '반대 입론', '반대 반론', '찬성 반론', '반대 최종 발언', '찬성 최종 발언'], plan: { work: 1, rest: 0, rounds: 1 } } })"));
    const bad = await run();
    assert.equal(bad.code, 1, bad.out);
    assert.match(bad.out, /exit\.1 · 출구 교구 시작 상태가 이미 정답 \(levels\.challenge\)/);
  } finally { hubProc.kill(); rmSync(root, { recursive: true, force: true }); }
});
