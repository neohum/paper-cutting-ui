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
