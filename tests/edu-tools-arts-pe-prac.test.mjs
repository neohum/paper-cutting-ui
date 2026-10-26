// 예체능·실과 교구(keyboard, collage, timer, block-coding)의 판정 핵심(core)을 화면 없이 검사한다.
// 교구마다 solve → check 참, wrongAnswer → check 거짓이고 incomplete 아님, 시작 상태는 정답 아님, 1단계 힌트에 target 값 없음.
// 브라우저 흐름(장착·키보드·인쇄)은 check-lesson.mjs _tool-<id> 가 본다.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const pool = join(root, 'edu-content-pool');
const tools = {};
for (const id of ['keyboard', 'collage', 'timer', 'block-coding']) {
  const K = { registerTool(name, def) { tools[name] = def; } };
  vm.runInNewContext(readFileSync(join(pool, 'engine/tools', `${id}.js`), 'utf8'), { window: { PaperKit: K } });
}

// check-lesson.mjs targetLeak 과 같은 규칙: 목표의 수(0·1 제외)·한글 값이 1단계 힌트에 있으면 누출
function targetLeak(text, target) {
  const vals = [];
  (function walk(v) {
    if (typeof v === 'number' && Number.isFinite(v) && Math.abs(v) >= 2) vals.push(String(v));
    else if (typeof v === 'string' && /[가-힣]/.test(v)) vals.push(v);
    else if (v && typeof v === 'object') for (const k of Object.keys(v)) walk(v[k]);
  })(target);
  for (const v of vals) {
    const esc = v.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const hit = /^-?\d/.test(v) ? new RegExp(`(?<![\\d.])${esc}(?![\\d])`).test(text)
      : v.length <= 2 ? new RegExp(`(?<![가-힣])${esc}(?![가-힣])`).test(text) : text.includes(v);
    if (hit) return v;
  }
  return null;
}

// 교구 하나의 문항 묶음: [이름, 옵션, 시작 상태, target]
function contract(id, cases) {
  const C = tools[id].core;
  assert.ok(C, `${id}: core 없음`);
  for (const [name, o, start, t] of cases) {
    const key = `${id}/${name}`;
    const s = JSON.parse(JSON.stringify(C.solve(t, o)));
    const ok = C.judge(s, t, o);
    assert.equal(ok.correct, true, `${key}: solve 뒤 정답이 아님 — ${ok.feedback} ${JSON.stringify(s)}`);
    const w = C.wrongAnswer(t, o, start);
    assert.ok(w, `${key}: wrongAnswer 없음`);
    const r = C.judge(JSON.parse(JSON.stringify(w)), t, o);
    assert.equal(r.correct, false, `${key}: wrongAnswer가 정답 ${JSON.stringify(w)}`);
    assert.ok(!r.incomplete, `${key}: wrongAnswer가 incomplete — ${r.feedback}`);
    assert.ok(r.feedback && r.feedback.trim(), `${key}: 오답 피드백 비어 있음`);
    assert.equal(C.judge(start, t, o).correct, false, `${key}: 시작 상태가 이미 정답`);
    for (const st of [start, w]) {
      const h = C.hint(st, t, o, { level: 1, attempts: 0 });
      assert.ok(h.hint, `${key}: 1단계 힌트 없음`);
      const leak = targetLeak(h.hint, t);
      assert.equal(leak, null, `${key}: 1단계 힌트에 정답 값 '${leak}' — ${h.hint}`);
      for (const lv of [2, 3]) assert.ok(C.hint(st, t, o, { level: lv, attempts: lv - 1 }).hint, `${key}: ${lv}단계 힌트 없음`);
    }
    assert.equal(C.distance(s, s), 0, `${key}: 같은 상태 distance ≠ 0`);
    assert.ok(C.distance(s, w) > 0, `${key}: 정답과 오답 distance 0`);
  }
}

test('keyboard: 가락 따라 치기·가락 짓기·리듬·장단·자기 점검', () => {
  contract('keyboard', [
    ['따라 치기', { from: '도', to: '높은도' }, { notes: [] }, { notes: ['솔', '솔', '라', '라', '솔', '솔', '미'] }],
    ['따라 치기(음이름)', { from: 'C4', to: 'C5', black: true }, { notes: ['도'] }, { notes: ['C4', 'E4', 'G4', 'C5'] }],
    ['가락 짓기', {}, { notes: [] }, { compose: { length: 4, endOn: '도' } }],
    ['가락 짓기(5음)', {}, { notes: ['레'] }, { compose: { min: 6, startOn: '솔', endOn: '솔', only: ['도', '레', '미', '솔', '라'] } }],
    ['리듬 따라', { mode: 'rhythm' }, { rhythm: [] }, { rhythm: ['q', 'e', 'e', 'h', 'q', 'qr', 'h'] }],
    ['박 맞추기', { mode: 'rhythm', meter: 3, measures: 2, blocks: ['q', 'e', 'h', 'qr'] }, { rhythm: [] }, { beats: true }],
    ['박 맞추기(쉼표·8분)', { mode: 'rhythm', meter: 4, measures: 2 }, { rhythm: ['q'] }, { beats: true, use: ['e'], rests: 1 }],
    ['장단', { mode: 'janggu', beats: 12, group: 3 }, { strokes: [] }, { strokes: ['덩', '', '기덕', '쿵', '', '덕', '덩', '', '기덕', '쿵', '덕', ''] }],
    ['자유 작곡', {}, { notes: [] }, { selfCheck: ['도로 끝냈어요', '두 번 쳐 보았어요'], minNotes: 4 }],
    ['자유 장단', { mode: 'janggu', beats: 9, group: 3 }, { strokes: [] }, { selfCheck: ['박을 세며 쳤어요'] }],
    ['짓기+점검', {}, { notes: [] }, { compose: { length: 4, endOn: '도' }, selfCheck: ['친구에게 들려주었어요'] }],
  ]);
  const C = tools.keyboard.core;
  assert.equal(C.norm('C5'), '높은도');
  assert.equal(C.norm('G3'), '낮은솔');
  // 마디줄을 넘는 2분음표는 박 수가 맞아도 틀림
  assert.equal(C.judge({ rhythm: ['q', 'q', 'q', 'h', 'q', 'q', 'q'] }, { beats: true }, { mode: 'rhythm' }).correct, false);
});

test('collage: 대칭·반복·색 대비·개수·겹치기·따라 만들기·자유 작품', () => {
  const half = { pieces: [{ shape: 'heart', color: '분홍', size: 'l', x: 200, y: 180, r: 270 }] };
  contract('collage', [
    ['세로 대칭', {}, half, { symmetry: 'vertical', pieces: { min: 4 } }],
    ['가로 대칭', {}, { pieces: [] }, { symmetry: 'horizontal', has: [{ shape: 'triangle', min: 2 }] }],
    ['대칭+보색', {}, half, { symmetry: 'vertical', contrast: 'complement' }],
    ['반복', {}, { pieces: [] }, { repeat: { times: 3, unit: 2 } }],
    ['반복(세 조각 묶음, 정해진 색)', {}, { pieces: [] }, { repeat: { times: 2, unit: 3 }, has: [{ color: '노랑', min: 2 }] }],
    ['보색', {}, { pieces: [{ shape: 'circle', color: '빨강', size: 'm', x: 100, y: 100, r: 0 }] }, { contrast: 'complement' }],
    ['따뜻·차가운', {}, { pieces: [] }, { contrast: 'warm-cool', pieces: { min: 3 } }],
    ['밝은·어두운', {}, { pieces: [] }, { contrast: 'light-dark' }],
    ['개수', { shapes: ['circle', 'triangle'] }, { pieces: [] }, { has: [{ shape: 'circle', n: 3 }, { shape: 'triangle', n: 2 }] }],
    ['겹치기', {}, { pieces: [] }, { overlap: 2 }],
    ['따라 만들기', {}, { pieces: [] }, { match: [{ shape: 'square', color: '파랑', size: 'l', x: 280, y: 240, r: 0 }, { shape: 'triangle', color: '빨강', size: 'l', x: 280, y: 160, r: 0 }] }],
    ['자유 작품', {}, { pieces: [] }, { selfCheck: ['좋아하는 색을 썼어요', '조각을 겹쳐 보았어요'], minPieces: 3 }],
  ]);
});

test('timer: 순서 카드·구간 타이머·기록판·안전 점검·스스로 점검', () => {
  const cards = ['본운동', '정리운동', '준비운동'];
  contract('timer', [
    ['순서', { cards }, { order: cards }, { order: ['준비운동', '본운동', '정리운동'] }],
    ['순서(넷)', { cards: ['물 마시기', '줄넘기', '몸풀기', '숨 고르기'] }, { order: ['물 마시기', '줄넘기', '몸풀기', '숨 고르기'] }, { order: ['몸풀기', '줄넘기', '숨 고르기', '물 마시기'] }],
    ['타이머 맞추기', { plan: { work: 20, rest: 20, rounds: 2 } }, { plan: { work: 20, rest: 20, rounds: 2 } }, { plan: { work: 30, rest: 10, rounds: 4 } }],
    ['전체 시간', { plan: { work: 30, rest: 10, rounds: 1 } }, { plan: { work: 30, rest: 10, rounds: 1 } }, { plan: { work: 40 }, total: 200 }],
    ['기록 모두', { fields: ['1회', '2회', '3회'] }, { records: [null, null, null] }, { records: true }],
    ['기록 옮기기', { fields: [{ label: '50m', unit: '초', step: 0.1 }, { label: '줄넘기', unit: '회' }] }, { records: [] }, { records: [9.8, 42] }],
    ['안전 점검', { safety: ['바닥에 돌이 없어요', '신발 끈을 묶었어요', '친구와 거리를 두었어요'] }, {}, { safety: true }],
    ['안전+순서', { safety: ['둘레를 살폈어요', '물을 준비했어요'], cards }, { order: cards }, { safety: true, order: ['준비운동', '본운동', '정리운동'] }],
    ['스스로 점검', {}, {}, { selfCheck: ['끝까지 달렸어요', '친구를 응원했어요'] }],
  ]);
  assert.equal(tools.timer.core.totalOf({ work: 30, rest: 10, rounds: 4 }), 150);
});

test('block-coding: 도착·장애물·반복·조건·별·디버깅·따라가기', () => {
  const board = { cols: 5, rows: 4, start: { x: 0, y: 3, dir: 'E' }, goal: { x: 4, y: 0 }, rocks: [[2, 3], [3, 1]] };
  const bug = ['fwd', 'right', 'fwd', 'fwd', 'fwd', 'right', 'fwd', 'fwd', 'fwd'];
  contract('block-coding', [
    ['도착', board, { program: [] }, { reach: true }],
    ['블록 수', { cols: 6, rows: 3, start: { x: 0, y: 1, dir: 'E' }, goal: { x: 5, y: 1 } }, { program: ['fwd'] }, { reach: true, maxBlocks: 3 }],
    ['반복 쓰기', { cols: 5, rows: 5, start: { x: 0, y: 4, dir: 'N' }, goal: { x: 4, y: 0 } }, { program: [] }, { reach: true, use: ['rep'] }],
    ['조건 쓰기', { cols: 4, rows: 4, start: { x: 0, y: 3, dir: 'N' }, goal: { x: 3, y: 0 }, blocks: ['fwd', 'left', 'right', 'rep', 'if'] }, { program: [] }, { reach: true, use: ['if'] }],
    ['별 모으기', { cols: 5, rows: 4, start: { x: 0, y: 3, dir: 'E' }, goal: { x: 4, y: 3 }, stars: [[2, 1]] }, { program: [] }, { reach: true, stars: true }],
    ['디버깅', board, { program: bug }, { reach: true, maxEdits: 1, from: bug }],
    ['따라가기', { mode: 'trace', cols: 5, rows: 5, start: { x: 0, y: 4, dir: 'N' }, program: ['fwd', 'fwd', 'right', 'rep:3', 'fwd', 'end', 'left', 'fwd'] }, { mark: null }, { end: { x: 3, y: 1 } }],
  ]);
  const C = tools['block-coding'].core;
  assert.equal(JSON.stringify(C.compress(['fwd', 'fwd', 'fwd', 'fwd', 'right'])), JSON.stringify(['rep:4', 'fwd', 'end', 'right'])); // vm 다른 realm이라 JSON으로 견준다
  assert.equal(C.judge({ program: bug }, { reach: true }, board).correct, false);
});
