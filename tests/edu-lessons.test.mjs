import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const pool = join(root, 'edu-content-pool');
const PROMPT_TAIL = ', with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.';

const lessons = readdirSync(join(pool, 'lessons/data')).filter((f) => f.endsWith('.js')).map((f) => {
  let l; vm.runInNewContext(readFileSync(join(pool, 'lessons/data', f), 'utf8'), { PaperLessons: { register(x) { l = x; } } });
  return { file: f, l };
});

test('every lesson follows edu-lesson.v1: 3 stages, 40 minutes, levels, targets', () => {
  assert.ok(lessons.length >= 1);
  for (const { file, l } of lessons) {
    assert.equal(`${l.id}.js`, file);
    assert.equal(l.stages.map((s) => s.id).join(), 'intro,main,wrapup', l.id); // vm 다른 realm이라 deepEqual 대신 값 비교
    assert.equal(l.stages.reduce((a, s) => a + s.minutes, 0), 40, `${l.id} 40분`);
    const main = l.stages[1];
    assert.equal(main.activities.reduce((a, x) => a + x.minutes, 0), main.minutes, `${l.id} 전개 분 합계`);
    for (const a of main.activities) {
      assert.ok(a.levels.easy && a.levels.base && a.levels.challenge, `${l.id}/${a.id} levels`);
      for (const it of a.items) assert.ok(it.free || it.target, `${l.id}/${a.id} target`);
    }
    assert.ok(l.illustration.prompt.startsWith('Layered paper-cut illustration of ') && l.illustration.prompt.endsWith(PROMPT_TAIL), `${l.id} prompt template`);
    assert.match(l.objective, /다\.$/);
  }
});

test('every tool a lesson uses exists and implements the tool contract', () => {
  for (const { l } of lessons) {
    const tools = new Set(l.stages.flatMap((s) => [s.demo?.tool, ...(s.activities || []).map((a) => a.tool), ...(s.exitTicket || []).map((q) => q.tool)]).filter(Boolean));
    for (const t of tools) {
      const src = readFileSync(join(pool, 'engine/tools', `${t}.js`), 'utf8');
      assert.match(src, new RegExp(`registerTool\\('${t}'`), `${t} 등록`);
      for (const m of ['getState', 'setState', 'check', 'solve']) assert.match(src, new RegExp(`\\b${m}\\b`), `${t}.${m}`);
    }
  }
});

function loadRegistry() {
  const listeners = {};
  const win = { addEventListener: (k, f) => { listeners[k] = f; }, removeEventListener() {}, location: { pathname: '/x', protocol: 'file:' } };
  win.parent = win;
  const ctx = { window: win, document: { currentScript: null, head: { appendChild() {} } }, TextEncoder, TextDecoder, btoa, atob, localStorage: { getItem: () => null, setItem() {} }, location: win.location, Uint8Array, JSON, setTimeout, clearTimeout, fetch: async () => { throw new Error('offline'); } };
  vm.runInNewContext(readFileSync(join(pool, 'lessons/registry.js'), 'utf8'), ctx);
  return win.PaperLessons;
}

const sample = {
  schema: 'edu-lesson-result.v1', lessonId: 'g2-math-clock', classCode: '2-3', seat: '7', nickname: '별', level: 'base', durationSec: 2100, finishedAt: '2026-10-25T13:00:00+09:00',
  score: { correct: 5, total: 8, solved: 6 }, items: [{ key: 'a1.1', correct: true, attempts: 1, hints: 0 }, { key: 'a1.2', correct: true, attempts: 3, hints: 1 }],
  exitTicket: [{ key: 'exit.1', correct: true, value: 1 }, { key: 'exit.3', correct: null, value: 'hard' }],
};

test('submission code round-trips the result summary without names', () => {
  const PL = loadRegistry();
  const code = PL.encode(sample);
  assert.match(code, /^EL1\.[A-Za-z0-9_-]+$/);
  const back = PL.decode(code);
  assert.equal(back.lessonId, 'g2-math-clock');
  assert.equal(back.seat, '7');
  assert.equal(JSON.stringify(back.score), JSON.stringify(sample.score));
  assert.equal(back.items[1].attempts, 3);
  assert.equal(back.exitTicket[1].value, 'hard');
  assert.throws(() => PL.decode('hello'));
});

test('portal payload matches @edulinker/app-sdk shape and carries no PII', () => {
  const PL = loadRegistry();
  const p = PL.sdkPayload({ ...sample, title: '시계', studentKey: '2-3-7' }, { materialId: 'as-1' });
  for (const k of ['appId', 'appTitle', 'materialId', 'studentKey', 'deviceLabel', 'score', 'totalScore', 'comment', 'data', 'attachments', 'submittedAt', 'clientTime']) assert.ok(k in p, k);
  assert.equal(p.deviceLabel, '7번');
  assert.doesNotMatch(JSON.stringify(p), /01[016789]-?\d{3,4}-?\d{4}|@[\w-]+\./);
});

test('analytics: first-try rate, flags and difficulty recommendation', () => {
  const ctx = { window: {} };
  vm.runInNewContext(readFileSync(join(pool, 'lessons/analytics.js'), 'utf8'), ctx);
  const A = ctx.window.LessonAnalytics;
  const hard = { ...sample, seat: '8', score: { correct: 1, total: 8 }, items: [{ key: 'a1.1', correct: true, attempts: 4, hints: 2 }] };
  const s = A.summarize([sample, hard, { data: { ...sample, seat: '9' } }]);
  assert.equal(s.n, 3);
  assert.equal(s.items.find((r) => r.key === 'a1.1').firstTry, 67);
  assert.ok(s.students.find((x) => x.seat === '8').flag);
  assert.ok(s.recommendations.some((r) => r.includes('8번')));
  assert.match(A.toCSV([sample]), /^\uFEFF"반코드","번호"/);
});

test('short offline code (EL2) round-trips per-item outcomes and rejects typos', () => {
  const PL = loadRegistry();
  const lesson = lessons.find(({ l }) => l.id === 'g2-math-clock').l;
  const keys = lesson.stages[1].activities.flatMap((a) => a.items.map((it, i) => (it.free ? null : `${a.id}.${i + 1}`))).filter(Boolean);
  const r = { ...sample, seat: '23', level: 'easy', durationSec: 1980,
    items: keys.map((key, i) => ({ key, correct: i % 3 !== 2, attempts: i % 3 === 0 ? 1 : 2, hints: 0 })),
    exitTicket: lesson.stages[2].exitTicket.map((q, i) => (q.type === 'mood' ? { key: `exit.${i + 1}`, correct: null, value: 'hard' } : { key: `exit.${i + 1}`, correct: i === 0, value: 0 })) };
  const code = PL.encodeShort(r, lesson);
  assert.ok(code.replace(/-/g, '').length <= 16, code);
  const back = PL.decodeShort(code.toLowerCase(), lesson, '2-3');
  assert.equal(back.seat, '23'); assert.equal(back.level, 'easy'); assert.equal(back.classCode, '2-3');
  assert.equal(back.items.filter((i) => i.correct && i.attempts === 1).length, r.items.filter((i) => i.correct && i.attempts === 1).length);
  assert.equal(back.items.filter((i) => !i.correct).length, r.items.filter((i) => !i.correct).length);
  assert.ok(back.exitTicket.some((e) => e.value === 'hard'));
  const flip = code.replace(/[0-9A-Z]/, (c) => (c === 'A' ? 'B' : 'A'));
  assert.throws(() => PL.decodeShort(flip, lesson, '2-3'));
});

test('short code check catches adjacent transpositions', () => {
  const PL = loadRegistry();
  const lesson = lessons.find(({ l }) => l.id === 'g4-social-map').l;
  const keys = lesson.stages[1].activities.flatMap((a) => a.items.map((it, i) => (it.free ? null : `${a.id}.${i + 1}`))).filter(Boolean);
  let caught = 0; let tried = 0;
  for (let seat = 1; seat <= 12; seat++) {
    const r = { ...sample, seat: String(seat), pairWith: seat % 3 ? '' : String(seat + 1), items: keys.map((key, i) => ({ key, correct: (i + seat) % 3 !== 0, attempts: (i + seat) % 2 ? 1 : 2, hints: 0 })),
      exitTicket: lesson.stages[2].exitTicket.map((q, i) => ({ key: `exit.${i + 1}`, correct: q.type === 'mood' || q.type === 'short' ? null : (i + seat) % 2 === 0, value: q.type === 'mood' ? 'ok' : 0 })) };
    const code = PL.encodeShort(r, lesson); const raw = code.replace(/-/g, '');
    if (seat % 3 === 0) assert.equal(PL.decodeShort(code, lesson, '4-1').pairWith, String(seat + 1));
    for (let i = 0; i + 1 < raw.length; i++) {
      if (raw[i] === raw[i + 1]) continue;
      tried++;
      const sw = raw.slice(0, i) + raw[i + 1] + raw[i] + raw.slice(i + 2);
      try { PL.decodeShort(sw, lesson, '4-1'); } catch (_) { caught++; }
    }
  }
  assert.equal(caught, tried, `${tried - caught}/${tried} transpositions slipped through`);
});

// 포털 iframe 안에서 제출: 부모에게 clientId를 맨 위에 실어 보내고, 부모의 받음 확인(ack)으로 상태가 정해진다
function loadInFrame() {
  const listeners = new Set(); const posted = [];
  const parent = { postMessage: (m) => posted.push(m) };
  const win = { addEventListener: (k, f) => { if (k === 'message') listeners.add(f); }, removeEventListener: (k, f) => listeners.delete(f), location: { pathname: '/x', protocol: 'https:' }, parent };
  const store = {};
  const ctx = { window: win, document: { currentScript: null, head: { appendChild() {} } }, TextEncoder, TextDecoder, btoa, atob, localStorage: { getItem: (k) => store[k] ?? null, setItem: (k, v) => { store[k] = v; } }, location: win.location, Uint8Array, JSON, setTimeout, clearTimeout, fetch: async () => { throw new Error('offline'); } };
  vm.runInNewContext(readFileSync(join(pool, 'lessons/registry.js'), 'utf8'), ctx);
  const emit = (data, source = parent) => { for (const f of [...listeners]) f({ source, data }); };
  return { PL: win.PaperLessons, posted, emit, store };
}

test('portal ack: received, rejected, spoofed source, wrong id, and no answer', async () => {
  const run = async (answer, ackMs = 200) => {
    const F = loadInFrame();
    const sent = await F.PL.submit({ ...sample, title: '시계', studentKey: '2-3-7' }, { materialId: 'as-1', ackMs });
    const msg = F.posted[0];
    assert.equal(msg.type, 'edulinker_submission');
    assert.ok(typeof msg.clientId === 'string' && msg.clientId.length > 0 && msg.clientId.length <= 128);
    assert.equal(msg.payload.clientId, msg.clientId);
    assert.equal(sent.portal, 'pending'); assert.equal(sent.delivered, true);
    assert.ok(!Object.keys(sent).includes('ack'), 'ack Promise는 열거되지 않는다');
    answer(F, msg.clientId);
    const state = await sent.ack;
    return { state, sent, F };
  };
  let r = await run((F, id) => F.emit({ type: 'edulinker_submission:ack', clientId: id, ok: true }));
  assert.equal(r.state, 'received'); assert.equal(r.sent.delivered, true);
  r = await run((F) => F.emit({ type: 'edulinker_submission:ack', ok: true })); // 실제 포털은 clientId를 빼기도 한다
  assert.equal(r.state, 'received');
  r = await run((F, id) => F.emit({ type: 'edulinker_submission:ack', clientId: id, ok: false }));
  assert.equal(r.state, 'rejected'); assert.equal(r.sent.delivered, false);
  assert.ok(r.sent.routes.includes('portal-rejected') && r.sent.routes.includes('queued'));
  r = await run((F, id) => {
    F.emit({ type: 'edulinker_submission:ack', clientId: id, ok: true }, {}); // 부모가 아닌 창
    F.emit({ type: 'edulinker_submission:ack', clientId: 'someone-else', ok: true }); // 다른 제출
    F.emit([{ type: 'edulinker_submission:ack', clientId: id, ok: true }]); // 평범한 객체가 아님
    F.emit({ type: 'edulinker_submission:ack', clientId: id, ok: 'yes' }); // ok가 참거짓이 아님
  });
  assert.equal(r.state, 'unconfirmed'); assert.equal(r.sent.delivered, true);
});

test('illustration.image, when declared, is a small local file under lessons/img', () => {
  for (const { l } of lessons) {
    const img = l.illustration.image;
    if (img == null) continue;
    assert.match(img, /^img\/[a-z0-9][a-z0-9-]*\.(webp|png|jpe?g)$/, `${l.id} image path`);
    const st = statSync(join(pool, 'lessons', img));
    assert.ok(st.size <= 400 * 1024, `${l.id} ${img} ${st.size}B > 400KB`);
  }
});

test('flow: predict gates check, unchanged re-check and the wrong-answer lock do not count', () => {
  const F = loadRegistry().flow;
  const it = { prompt: 'p', target: {}, predict: { q: '어떻게 될까요?', options: ['커져요', '작아져요'], answer: 0 }, conclude: '정리' };
  const r = { attempts: 0, correct: false };
  assert.equal(F.predictReady(it, r), false);
  assert.equal(F.predictReady({ prompt: 'p' }, r), true, '예상이 없는 문항은 언제나 확인할 수 있다');
  r.predict = 1;
  assert.equal(F.predictReady(it, r), true);
  assert.equal(F.predictLine(it, r), '예상: 작아져요 → 관찰한 결과를 떠올려 보세요');
  assert.equal(F.predictLine({ prompt: 'p' }, r), '');
  // 첫 확인은 검사한다
  assert.equal(F.checkGate(r, '{"a":1}', 1000), 'check');
  r.attempts = 1; r.lastJSON = '{"a":1}';
  F.lockAfterWrong(r, 1000);
  // 틀린 직후 1.2초 동안은 상태를 바꿔도 잠겨 있다(연타가 피드백을 덮지 않게)
  assert.equal(F.checkGate(r, '{"a":2}', 1000 + F.WRONG_LOCK_MS - 1), 'locked');
  assert.equal(F.checkGate(r, '{"a":1}', 1000 + F.WRONG_LOCK_MS), 'unchanged');
  assert.equal(F.checkGate(r, '{"a":2}', 1000 + F.WRONG_LOCK_MS), 'check');
  assert.ok(F.WRONG_LOCK_MS >= 1000 && F.WRONG_LOCK_MS <= 1500);
});

test('flow: pressing the already-selected difficulty is a no-op', () => {
  const F = loadRegistry().flow;
  assert.equal(F.levelChanges('base', 'base'), false);
  assert.equal(F.levelChanges('base', 'easy'), true);
  assert.equal(F.levelChanges('base', undefined), false);
});

test('predict pick survives the long submission code and shows up in the class distribution', () => {
  const PL = loadRegistry();
  const r = { ...sample, items: [{ key: 'a1.1', correct: true, attempts: 1, hints: 0, predict: 2 }, { key: 'a1.2', correct: true, attempts: 1, hints: 0 }] };
  const back = PL.decode(PL.encode(r));
  assert.equal(back.items[0].predict, 2);
  assert.ok(!('predict' in back.items[1]));
  const ctx = { window: {} };
  vm.runInNewContext(readFileSync(join(pool, 'lessons/analytics.js'), 'utf8'), ctx);
  const s = ctx.window.LessonAnalytics.summarize([r, { ...r, seat: '8', items: [{ key: 'a1.1', correct: false, attempts: 2, hints: 0, predict: 0 }] }, { ...r, seat: '9' }]);
  const p = s.predicts.find((x) => x.key === 'a1.1');
  assert.equal(p.n, 3); assert.equal(p.counts[2], 2); assert.equal(p.counts[0], 1);
  // 예상은 채점하지 않는다: 한 번에 맞힌 비율은 예상과 무관하다
  assert.equal(s.items.find((x) => x.key === 'a1.1').firstTry, 67);
});

test('lessons that use predict / conclude / reveal follow the item contract', () => {
  for (const { l } of lessons) {
    for (const a of l.stages[1].activities) {
      a.items.forEach((it, i) => {
        const at = `${l.id}/${a.id}.${i + 1}`;
        if (it.predict != null) {
          assert.equal(typeof it.predict.q, 'string', `${at} predict.q`); assert.ok(it.predict.q.trim(), `${at} predict.q 비어 있음`);
          assert.ok(Array.isArray(it.predict.options) && it.predict.options.length >= 2 && it.predict.options.length <= 5, `${at} predict.options 2~5개`);
          assert.ok(it.predict.options.every((o) => typeof o === 'string' && o.trim()), `${at} predict.options 글자`);
          if (it.predict.answer != null) assert.ok(Number.isInteger(it.predict.answer) && it.predict.answer < it.predict.options.length, `${at} predict.answer 범위`);
        }
        if (it.conclude != null) assert.ok(typeof it.conclude === 'string' && it.conclude.trim() && it.conclude.length <= 120, `${at} conclude`);
        if (it.reveal != null) assert.equal(it.reveal, 'after-check', `${at} reveal`);
      });
    }
  }
});

// 확인 전 숨김(reveal:'after-check') 교구를 흉내 낸다: check()는 읽기 값을 드러내고, setState()는 다시 숨긴다
function revealTool({ withHint = false } = {}) {
  const t = { v: 0, revealed: false, checks: [], hints: 0 };
  Object.assign(t, {
    getState: () => ({ v: t.v }),
    setState: (s) => { t.v = s.v; t.revealed = false; },
    check(target, opts) { t.checks.push(opts || null); if (!(opts && opts.forHint)) t.revealed = true; return t.v === target.v ? { correct: true, feedback: '맞아요' } : { correct: false, feedback: '아니에요', hint: '하나 더 올려요' }; },
    solve: (target) => { t.v = target.v; },
    reset: () => { t.v = 0; t.revealed = false; },
  });
  if (withHint) t.hint = (target) => { t.hints++; return { hint: t.v < target.v ? '더 올려요' : '내려요' }; };
  return t;
}

test('hint button never calls a plain check(): hint() first, else check(target, { forHint: true })', () => {
  const F = loadRegistry().flow;
  const a = revealTool({ withHint: true });
  const r = F.askHint(a, { v: 3 });
  assert.equal(r.via, 'hint'); assert.equal(r.hint, '더 올려요'); assert.equal(a.checks.length, 0, 'hint()가 있으면 check를 부르지 않는다');
  assert.equal(a.revealed, false);
  const b = revealTool();
  const r2 = F.askHint(b, { v: 3 });
  assert.equal(r2.via, 'check'); assert.equal(r2.hint, '하나 더 올려요');
  assert.equal(b.checks.length, 1); assert.equal(b.checks[0].forHint, true);
});

test('reveal after-check: hint and a wrong check reveal nothing, a correct check does', () => {
  const F = loadRegistry().flow;
  const item = { prompt: 'p', target: { v: 3 }, reveal: 'after-check' };
  // forHint를 무시하는 옛 교구도 플레이어가 상태를 다시 넣어 숨긴다
  const old = revealTool(); old.check = function (target) { old.revealed = true; return { correct: old.v === target.v, hint: 'h' }; };
  old.v = 1; let snap = JSON.stringify(old.getState());
  const h = F.askHint(old, item.target); if (h.via === 'check') F.rehide(old, item, snap);
  assert.equal(old.revealed, false, '힌트 뒤 숨김');
  snap = JSON.stringify(old.getState());
  const wrong = old.check(item.target); assert.equal(wrong.correct, false);
  F.rehide(old, item, snap);
  assert.equal(old.revealed, false, '틀린 확인 뒤 숨김');
  assert.equal(old.v, 1, '상태는 그대로');
  old.v = 3; assert.equal(old.check(item.target).correct, true);
  assert.equal(old.revealed, true, '맞힌 확인 뒤에는 보인다');
  // hint()가 있는 교구는 계약을 스스로 지킨다고 보고 다시 숨기지 않는다
  const neu = revealTool({ withHint: true }); assert.equal(F.rehide(neu, item, '{"v":0}'), false);
  // reveal이 아닌 문항은 건드리지 않는다
  assert.equal(F.rehide(revealTool(), { prompt: 'p' }, '{"v":0}'), false);
});

test('items[n].levels overrides the start state and merges toolOptions for that level', () => {
  const F = loadRegistry().flow;
  const it = { prompt: 'p', target: {}, state: { v: 1 }, toolOptions: { a: 1, b: 1 }, levels: { easy: { state: { v: 5 }, toolOptions: { b: 2 } }, challenge: { toolOptions: { c: 3 } } } };
  const e = F.itemStart(it, 'easy'); assert.equal(e.state.v, 5); assert.equal(JSON.stringify(e.toolOptions), '{"a":1,"b":2}');
  const c = F.itemStart(it, 'challenge'); assert.equal(c.state.v, 1); assert.equal(JSON.stringify(c.toolOptions), '{"a":1,"b":1,"c":3}');
  const b = F.itemStart(it, 'base'); assert.equal(b.state.v, 1); assert.equal(JSON.stringify(b.toolOptions), '{"a":1,"b":1}');
  assert.equal(F.itemStart({ prompt: 'p' }, 'easy').state, undefined);
});

test('findWrong makes a complete-but-wrong state: wrongAnswer() first, else a near miss of the solved state', () => {
  const F = loadRegistry().flow;
  const t = revealTool(); t.wrongAnswer = (target) => ({ v: target.v - 1 });
  const r = F.findWrong(t, { v: 3 }, { seed: 1 });
  assert.equal(r.via, 'wrongAnswer'); assert.equal(t.v, 2); assert.equal(t.revealed, false, '찾은 오답은 확인 전 상태로 남는다');
  const u = revealTool(); u.v = 0;
  const r2 = F.findWrong(u, { v: 3 }, { seed: 1, avoid: ['{"v":4}'] });
  assert.equal(r2.via, 'perturb'); assert.ok([1, 2, 5].includes(u.v), `정답 근처 오답 ${u.v}`);
  // 무엇을 해도 'incomplete'인 교구는 null이고 처음 상태로 돌아간다
  const z = revealTool(); z.v = 7; z.check = () => ({ incomplete: true, feedback: '아직' });
  assert.equal(F.findWrong(z, { v: 3 }, { seed: 1 }), null); assert.equal(z.v, 7);
});

test('analytics: levelMoves counts who switched difficulty, how often and which way', () => {
  const ctx = { window: {} };
  vm.runInNewContext(readFileSync(join(pool, 'lessons/analytics.js'), 'utf8'), ctx);
  const A = ctx.window.LessonAnalytics;
  const s = A.summarize([
    { ...sample, seat: '3', levelChanges: [{ from: 'base', to: 'easy', at: 4 }, { from: 'easy', to: 'base', at: 9 }] },
    { ...sample, seat: '5', levelChanges: [{ from: 'base', to: 'challenge', at: 2 }] },
    { ...sample, seat: '6' },
  ]);
  assert.equal(s.levelMoves.students, 2); assert.equal(s.levelMoves.total, 3);
  assert.equal(s.levelMoves.down, 1); assert.equal(s.levelMoves.up, 2);
  assert.equal(s.levelMoves.who[0].path, '기본→쉬움→기본');
  assert.equal(s.students.find((x) => x.seat === '3').levelChanges, 2);
});

// ---- 5회차: 힌트 사다리 · 쓸어 보기 막기 · 못 푼 문항 · 허브 개인정보 거름 ----
test('hint ladder: level = n-th request, capped by attempts + 1 (1 before any try, 3 at most)', () => {
  const F = loadRegistry().flow;
  const r = { attempts: 0, hintLevels: [] };
  assert.equal(F.hintLevel(r), 1);
  r.hintLevels.push(1); assert.equal(F.hintLevel(r), 1, '시도 전에는 몇 번 눌러도 1단계');
  r.hintLevels.push(1);
  r.attempts = 1; assert.equal(F.hintLevel(r), 2, '한 번 틀린 뒤 2단계까지');
  r.hintLevels.push(2); assert.equal(F.hintLevel(r), 2);
  r.attempts = 2; assert.equal(F.hintLevel(r), 3, '두 번 틀린 뒤 3단계');
  r.hintLevels.push(3, 3); assert.equal(F.hintLevel(r), 3, '3단계를 넘지 않는다');
  assert.equal(F.hintLevel({ attempts: 5 }), 1, '처음 누르는 힌트는 시도가 많아도 1단계부터');
});

test('askHint passes { level, attempts } to hint() and check(forHint), and items[n].hints overrides per level', () => {
  const F = loadRegistry().flow;
  const seen = [];
  const neu = revealTool(); neu.hint = (target, o) => { seen.push(o); return { hint: `교구 ${o.level}단계` }; };
  let r = F.askHint(neu, { v: 3 }, { level: 2, attempts: 1 });
  assert.equal(r.hint, '교구 2단계'); assert.equal(r.level, 2); assert.equal(seen[0].level, 2); assert.equal(seen[0].attempts, 1);
  r = F.askHint(neu, { v: 3 }, { level: 2, attempts: 1, hints: ['개념', '틀린 단계', '풀이'] });
  assert.equal(r.hint, '틀린 단계'); assert.equal(r.from, 'lesson');
  r = F.askHint(neu, { v: 3 }, { level: 3, attempts: 2, hints: ['개념'] });
  assert.equal(r.hint, '교구 3단계', '그 단계 글이 없으면 교구 글');
  // 옛 교구(인자 하나만 받는 hint)도 그대로 돈다
  const old = revealTool({ withHint: true });
  r = F.askHint(old, { v: 3 }, { level: 3, attempts: 2 });
  assert.equal(r.hint, '더 올려요'); assert.equal(r.via, 'hint');
  // hint()가 없으면 check(target, { forHint, level, attempts })
  const plain = revealTool();
  r = F.askHint(plain, { v: 3 }, { level: 2, attempts: 1 });
  assert.equal(plain.checks[0].forHint, true); assert.equal(plain.checks[0].level, 2); assert.equal(plain.revealed, false);
  assert.equal(F.askHint(plain, { v: 3 }, { level: 9 }).level, 3, '단계는 1~3으로 묶는다');
});

test('anti-sweep: maxAttempts defaults to 3 for reveal items, unlimited otherwise; close after that many wrong', () => {
  const F = loadRegistry().flow;
  assert.equal(F.maxAttempts({ reveal: 'after-check' }), 3);
  assert.equal(F.maxAttempts({}), Infinity);
  assert.equal(F.maxAttempts({ maxAttempts: 5, reveal: 'after-check' }), 5);
  assert.equal(F.maxAttempts({ maxAttempts: 0 }), Infinity, '잘못된 값은 무시');
  const it = { reveal: 'after-check' };
  assert.equal(F.shouldClose(it, { attempts: 2, correct: false }), false);
  assert.equal(F.shouldClose(it, { attempts: 3, correct: false }), true);
  assert.equal(F.shouldClose(it, { attempts: 3, correct: true }), false);
  assert.equal(F.shouldClose({}, { attempts: 40, correct: false }), false);
});

test('isNudge: one minimal step from the previous wrong state (tool distance() first, else one JSON leaf by 1)', () => {
  const F = loadRegistry().flow;
  assert.equal(F.isNudge({}, '{"h":3,"m":15}', '{"h":3,"m":16}'), true);
  assert.equal(F.isNudge({}, '{"h":3,"m":15}', '{"h":3,"m":25}'), false, '크게 바꿈');
  assert.equal(F.isNudge({}, '{"h":3,"m":15}', '{"h":4,"m":16}'), false, '두 곳을 바꿈');
  assert.equal(F.isNudge({}, '{"on":[true,false]}', '{"on":[true,true]}'), true);
  assert.equal(F.isNudge({}, '{"a":1}', '{"a":1}'), false, '같은 상태는 찔러보기가 아님(시도로도 세지 않음)');
  assert.equal(F.isNudge({}, null, '{"a":1}'), false, '첫 시도');
  const tool = { distance: (a, b) => Math.abs(a.deg - b.deg) / 5 };
  assert.equal(F.isNudge(tool, '{"deg":40}', '{"deg":45}'), true);
  assert.equal(F.isNudge(tool, '{"deg":40}', '{"deg":41}'), true);
  assert.equal(F.isNudge(tool, '{"deg":40}', '{"deg":60}'), false);
});

test('closed and given-up items survive the long code and show up for the teacher', () => {
  const PL = loadRegistry();
  const r = { ...sample, items: [{ key: 'a1.1', correct: false, attempts: 3, hints: 2, hintLevels: [1, 3], closed: 'attempts', nudges: 2 }, { key: 'a1.2', correct: false, attempts: 4, hints: 0, gaveUp: true }, { key: 'a1.3', correct: true, attempts: 1, hints: 0, predict: 1 }] };
  const back = PL.decode(PL.encode(r));
  assert.equal(back.items[0].closed, 'attempts'); assert.ok(!back.items[0].gaveUp);
  assert.equal(back.items[1].gaveUp, true); assert.ok(!back.items[1].closed);
  assert.equal(back.items[2].predict, 1); assert.ok(!back.items[2].closed && !back.items[2].gaveUp);
  const ctx = { window: {} };
  vm.runInNewContext(readFileSync(join(pool, 'lessons/analytics.js'), 'utf8'), ctx);
  const A = ctx.window.LessonAnalytics;
  const s = A.summarize([r, { ...sample, seat: '8' }]);
  const st = s.students.find((x) => x.seat === '7');
  assert.equal(st.closed.join(), 'a1.1'); assert.equal(st.gaveUp.join(), 'a1.2'); assert.equal(st.nudges, 2); assert.ok(st.flag);
  assert.equal(st.perItem['a1.1'], '×닫힘'); assert.equal(st.perItem['a1.2'], '×넘김');
  const row = s.items.find((x) => x.key === 'a1.1'); assert.equal(row.closed, 1); assert.equal(row.deepHintRate, 50);
  assert.ok(s.recommendations.some((t) => t.includes('닫힌 문항') && t.includes('7번(a1.1)')));
  assert.ok(s.recommendations.some((t) => t.includes('넘긴 문항') && t.includes('7번(a1.2)')));
  assert.match(A.toCSV([r]), /"a1\.1 닫힘, a1\.2 넘김"/);
});

test('teacher dashboard renders closed / given-up columns', () => {
  const src = readFileSync(join(pool, 'lessons/teacher.js'), 'utf8');
  assert.match(src, /못 푼 문항/); assert.match(src, /studentUnsolved\(x\)/); assert.match(src, /unsolvedCell\(r\)/);
});

test('lesson items that declare hints / maxAttempts follow the contract', () => {
  for (const { l } of lessons) {
    for (const a of l.stages[1].activities) a.items.forEach((it, i) => {
      const at = `${l.id}/${a.id}.${i + 1}`;
      if (it.hints != null) assert.ok(Array.isArray(it.hints) && it.hints.length >= 1 && it.hints.length <= 3 && it.hints.every((h) => typeof h === 'string' && h.trim()), `${at} hints`);
      if (it.maxAttempts != null) assert.ok(Number.isInteger(it.maxAttempts) && it.maxAttempts >= 1 && it.maxAttempts <= 10, `${at} maxAttempts`);
    });
  }
});

test('hub PII filter: phone / resident numbers / e-mail blocked, long decimals pass', async () => {
  const { PII } = await import('../edu-content-pool/classroom-hub.mjs');
  const ok = (v) => assert.equal(PII.test(JSON.stringify({ data: { state: v } })), false, `막으면 안 됨: ${JSON.stringify(v)}`);
  for (const v of [0.142857142857, 1.3333333333333333, 0.3333333333333333, 2 / 3, 1 / 7, 22 / 7, -0.30000000000000004, 1e-7 / 3, 0.10123456789, 3.0101234567, [0.142857142857, 1.3333333333333333]]) ok(v);
  ok('0.142857142857'); ok('1.3333333333333333'); ok('ratio 0.0101234567 of 1.9001011234567');
  for (const bad of ['010-1234-5678', '01012345678', '900101-1234567', '9001011234567', 'kid@school.kr', '연락처 011 123 4567'.replace(/ /g, '-')]) assert.equal(PII.test(JSON.stringify({ note: bad })), true, `막아야 함: ${bad}`);
});

test('items[n].levels[단계].prompt·target replace the item for that level only', () => {
  const F = loadRegistry().flow;
  const it = { prompt: '3시', target: { h: 3, m: 0 }, hints: ['h1'], levels: { challenge: { prompt: '3시 25분', target: { h: 3, m: 25 } }, easy: { state: { h: 1 } } } };
  const c = F.itemAt(it, 'challenge');
  assert.equal(c.prompt, '3시 25분'); assert.equal(c.target.m, 25); assert.equal(c.hints[0], 'h1', '다른 칸은 그대로');
  assert.equal(F.itemAt(it, 'easy'), it, 'prompt·target이 없는 단계는 문항 그대로');
  assert.equal(F.itemAt(it, 'base'), it);
  assert.equal(F.itemAt({ prompt: 'p', levels: { base: { target: { v: 2 } } } }, 'base').prompt, 'p');
  assert.equal(it.target.m, 0, '원래 문항을 바꾸지 않는다');
});
