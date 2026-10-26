// 수학 교구 레인 math-a — numberline · multiply · pattern · chart 교구 계약 검사.
// jsdom 없이 돈다: 정적 검사(머리 주석 표·아이콘·이모지)는 node만으로, 동작 검사는 시스템 크롬(playwright-core)의 빈 쪽에
// paperkit.js와 교구만 얹어 문항마다 solve→check 참, wrongAnswer→check 거짓(incomplete 아님), 1단계 힌트에 정답 값 없음,
// 상태 되살리기(reset+setState), distance(a,a)=0, 활동지(print) 장착을 본다. 문항은 아래 사례와 검사용 차시 _tool-<id>.js에서 모은다.
import { test, before, after } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const pool = join(root, 'edu-content-pool');
const TOOLS = ['numberline', 'multiply', 'pattern', 'chart'];
const src = (id) => readFileSync(join(pool, 'engine/tools', `${id}.js`), 'utf8');

// check-lesson.mjs와 같은 규칙: 목표의 수(0·1 제외)·한글 값이 1단계 힌트 글에 있으면 그 값
function targetLeak(text, target) {
  if (typeof text !== 'string' || !text || target == null) return null;
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

test('교구 파일 첫머리 주석에 옵션·상태·target 표와 예가 있다', () => {
  for (const id of TOOLS) {
    const s = src(id);
    const head = s.slice(0, s.indexOf('*/'));
    for (const w of ['옵션', '상태', 'target', '예)', '키보드']) assert.ok(head.includes(w), `${id}: 머리 주석에 '${w}' 없음`);
    assert.match(s, new RegExp(`registerTool\\('${id}'`), `${id} 등록`);
    for (const m of ['getState', 'setState', 'check', 'reset', 'solve', 'hint', 'wrongAnswer', 'distance']) assert.match(s, new RegExp(`\\b${m}\\b`), `${id}.${m}`);
  }
});

test('아이콘은 fi fi-rr-* 만 쓰고 이모지가 없다, 자동 재생·자동 읽기가 없다', () => {
  for (const id of TOOLS) {
    const s = src(id);
    assert.doesNotMatch(s, /[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/u, `${id}: 이모지`);
    for (const m of s.matchAll(/class="fi ([^"]+)"/g)) assert.match(m[1], /^fi-rr-[a-z-]+$/, `${id}: 아이콘 ${m[1]}`);
    assert.doesNotMatch(s, /lucide|heroicon/i, `${id}: 다른 아이콘 묶음`);
    assert.doesNotMatch(s, /speechSynthesis\.speak|autoplay|\.play\(\)/, `${id}: 자동 소리`);
  }
});

// ---- 문항 모으기: 손으로 쓴 사례 + 검사용 차시의 모든 문항(단계마다) ----
const CASES = {
  numberline: [
    { o: { min: 0, max: 10 }, t: { points: [7] } },
    { o: { min: 0, max: 1, sub: 10, format: 'dec', labels: 'ends' }, t: { points: [0.7] } },
    { o: { min: 0, max: 2, sub: 4, format: 'frac' }, t: { points: ['3/4', '1 1/2'] }, s: { points: [] } },
    { o: { min: 0, max: 2, sub: 3, format: 'frac', count: 2 }, t: { points: ['2/3', '4/3'] } },
    { o: { min: 100, max: 200, step: 10, sub: 10 }, t: { points: [137] } },
    { o: { min: 0, max: 30, mode: 'jump', fixedFrom: 0 }, t: { from: 0, size: 3, count: 4 } },
    { o: { min: 0, max: 20, mode: 'jump' }, t: { from: 5, end: 12 } },
    { o: { min: 0, max: 20, mode: 'jump' }, s: { from: 15, hops: [] }, t: { from: 15, end: 8 } },
    { o: { min: 0, max: 2, sub: 4, format: 'frac', mode: 'read', marks: [1.25] }, t: { value: '5/4', form: 'frac' } },
    { o: { min: 0, max: 1, sub: 10, format: 'dec', mode: 'read', marks: [0.3], choices: ['0.2', '0.3', '3'] }, t: { pick: 1 } },
  ],
  multiply: [
    { o: { mode: 'array' }, t: { rows: 3, cols: 5 } },
    { o: { mode: 'array' }, t: { product: 12, minSide: 2 } },
    { o: { mode: 'array', lock: true, total: true }, s: { rows: 4, cols: 6 }, t: { rows: 4, cols: 6, total: true } },
    { o: { mode: 'group', count: 15 }, t: { size: 5, answer: 3 } },
    { o: { mode: 'group', count: 14, rest: true }, t: { size: 4, answer: 3, rest: 2 } },
    { o: { mode: 'group', count: 12, by: 'plates' }, t: { plates: 4, answer: 3 } },
    { o: { mode: 'table', rowsOf: [3], colsOf: [1, 2, 3, 4, 5, 6, 7, 8, 9], blanks: 'row:3' }, t: { cells: true } },
    { o: { mode: 'table', rowsOf: [2, 3, 4, 5], colsOf: [5, 6, 7], blanks: [[4, 6], [5, 7]] }, t: { cells: true } },
  ],
  pattern: [
    { o: { seq: ['circle:rose', 'square:sky', 'circle:rose', 'square:sky', null, null] }, t: { fill: ['circle:rose', 'square:sky'] } },
    { o: { seq: ['star:buttercup', 'star:buttercup', 'heart:rose', 'star:buttercup', null, 'heart:rose', null], palette: ['star:buttercup', 'heart:rose', 'circle:mint'] }, t: { fill: ['star:buttercup', 'star:buttercup'] } },
    { o: { seq: [3, 6, null, 12, 15, null] }, t: { fill: [9, 18] } },
    { o: { seq: ['가', '나', '다', '가', '나', null] }, t: { fill: ['다'] } },
    { o: { seq: [{ s: 'square', c: 'mint', k: 1 }, { s: 'square', c: 'mint', k: 3 }, { s: 'square', c: 'mint', k: 5 }, null], palette: [{ s: 'square', c: 'mint', k: 6 }, { s: 'square', c: 'mint', k: 7 }] }, t: { fill: [{ s: 'square', c: 'mint', k: 7 }] } },
    { o: { seq: [{ s: 'arrow', c: 'sky' }, { s: 'arrow', c: 'sky', r: 90 }, { s: 'arrow', c: 'sky', r: 180 }, null], palette: [{ s: 'arrow', c: 'sky' }, { s: 'arrow', c: 'sky', r: 270 }] }, t: { fill: [{ s: 'arrow', c: 'sky', r: 270 }] } },
    { o: { mode: 'rule', seq: [2, 4, 8, 16], choices: ['2씩 더해요', '2씩 곱해요', '4씩 더해요'] }, t: { pick: 1 } },
    { o: { mode: 'odd', seq: ['circle:rose', 'square:sky', 'circle:rose', 'circle:rose', 'circle:rose', 'square:sky'] }, t: { odd: 3 } },
    { o: { mode: 'make', palette: ['star:buttercup', 'heart:rose', 'circle:sky'], length: 9 }, t: { rule: 'repeat', period: 3 } },
    { o: { mode: 'make', input: 'number', length: 6, start: 5 }, t: { rule: 'add', step: 5 } },
    { o: { mode: 'make', palette: ['circle:rose', 'square:sky'], length: 6 }, t: { rule: 'core', core: ['circle:rose', 'circle:rose', 'square:sky'] } },
  ],
  chart: [
    { o: { type: 'bar', data: [['봄', 5], ['여름', 8], ['가을', 3], ['겨울', 6]], unit: '명', given: [0] }, t: { build: true } },
    { o: { type: 'bar', data: [['가', 20], ['나', 35], ['다', 15]], unit: '개', scale: 5 }, t: { build: true } },
    { o: { type: 'bar', horizontal: true, data: [['사과', 7], ['배', 4], ['감', 9]], unit: '명' }, t: { build: [1, 2] } },
    { o: { type: 'line', data: [['9시', 12], ['10시', 15], ['11시', 19], ['12시', 21]], unit: '°C', from: 10, given: [0] }, t: { build: true } },
    { o: { type: 'picture', data: [['가 마을', 32], ['나 마을', 15], ['다 마을', 21]], unit: '그루' }, t: { build: true } },
    { o: { type: 'picture', data: [['가', 230], ['나', 150]], unit: 'kg', icons: [{ value: 100 }, { value: 10 }] }, t: { build: true } },
    { o: { type: 'circle', data: [['떡볶이', 40], ['김밥', 25], ['라면', 20], ['기타', 15]] }, t: { build: true } },
    { o: { type: 'band', data: [['버스', 45], ['걸어서', 35], ['자전거', 20]] }, t: { build: true } },
    { o: { type: 'bar', mode: 'read', data: [['봄', 5], ['여름', 8], ['가을', 3]], unit: '명', question: '가장 많은 학생이 좋아하는 계절은?', choices: ['봄', '여름', '가을'] }, t: { pick: 1 } },
    { o: { type: 'bar', mode: 'read', data: [['가', 20], ['나', 35]], unit: '개', scale: 5, question: '나는 몇 개인가요?' }, t: { value: 35 } },
    { o: { type: 'line', mode: 'read', data: [['1월', 2], ['2월', 4], ['3월', 9]], unit: '°C', tableBlanks: [1, 2] }, t: { table: true } },
    { o: { type: 'picture', mode: 'read', data: [['가', 32], ['나', 15]], unit: '그루', tableBlanks: [0, 1] }, t: { table: true } },
    { o: { type: 'circle', mode: 'read', data: [['A', 50], ['B', 30], ['C', 20]], question: 'A는 C의 몇 배인가요?', choices: ['2배', '2.5배', '3배'] }, t: { pick: 1 } },
  ],
};
function lessonCases(id) {
  const f = join(pool, 'lessons/data', `_tool-${id}.js`);
  if (!existsSync(f)) return [];
  let l; vm.runInNewContext(readFileSync(f, 'utf8'), { PaperLessons: { register(x) { l = x; } } });
  const out = [];
  const lv = ['easy', 'base', 'challenge'];
  for (const a of l.stages[1].activities) {
    if (a.tool !== id) continue;
    a.items.forEach((it, i) => {
      if (it.free) return;
      for (const level of lv) {
        const o2 = (it.levels && it.levels[level]) || {};
        const o = Object.assign({}, a.levels[level] || {}, it.toolOptions || {}, o2.toolOptions || {}, it.reveal === 'after-check' ? { revealAfterCheck: true } : {});
        const s = Object.prototype.hasOwnProperty.call(o2, 'state') ? o2.state : it.state;
        out.push({ key: `${a.id}.${i + 1}/${level}`, o, s, t: o2.target || it.target, start: true });
      }
    });
  }
  l.stages[2].exitTicket.forEach((q, i) => { if (q.type === 'tool' && q.tool === id) out.push({ key: `exit.${i + 1}`, o: q.options || {}, s: q.state, t: q.target, start: true }); });
  return out;
}

const chrome = [process.env.CHROME_PATH, 'C:/Program Files/Google/Chrome/Application/chrome.exe', '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', '/usr/bin/google-chrome'].find((p) => p && existsSync(p));
let browser; let page;
before(async () => {
  if (!chrome) return;
  const { chromium } = await import('playwright-core');
  browser = await chromium.launch({ executablePath: chrome, headless: true });
  page = await browser.newPage({ viewport: { width: 1000, height: 800 } });
  page.on('pageerror', (e) => { throw e; });
  await page.goto('about:blank');
  await page.addStyleTag({ path: join(pool, 'engine/paperkit.css') });
  await page.addScriptTag({ path: join(pool, 'engine/paperkit.js') });
  for (const id of TOOLS) if (existsSync(join(pool, 'engine/tools', `${id}.js`))) await page.addScriptTag({ path: join(pool, 'engine/tools', `${id}.js`) });
});
after(async () => { if (browser) await browser.close(); });

function runCase(c) {
  const box = document.createElement('div'); box.style.width = '560px'; document.body.appendChild(box);
  const out = {};
  try {
    const T = window.PaperKit.mount(c.tool, box, JSON.parse(JSON.stringify(c.o || {})));
    if (c.s) T.setState(JSON.parse(JSON.stringify(c.s)));
    if (T.setTarget) T.setTarget(c.t);
    const r0 = T.check(c.t, { forHint: true });
    out.startCorrect = Boolean(r0.correct && !r0.incomplete);
    out.h1 = T.hint(c.t, { level: 1, attempts: 0 }).hint;
    T.solve(c.t);
    const rs = T.check(c.t);
    out.solved = rs.correct === true; out.solvedFb = rs.feedback;
    const snap = JSON.stringify(T.getState());
    T.reset(); T.setState(JSON.parse(snap));
    out.roundtrip = JSON.stringify(T.getState()) === snap;
    out.d0 = T.distance(JSON.parse(snap), JSON.parse(snap));
    const w = T.wrongAnswer(c.t);
    if (w) {
      T.reset(); T.setState(JSON.parse(JSON.stringify(w)));
      const r = T.check(c.t);
      out.wrong = { correct: r.correct, incomplete: Boolean(r.incomplete), fb: r.feedback };
      out.h2 = T.hint(c.t, { level: 2, attempts: 1 }).hint; out.h3 = T.hint(c.t, { level: 3, attempts: 2 }).hint;
      out.dWrong = T.distance(JSON.parse(snap), T.getState());
    }
    box.remove();
    const pb = document.createElement('div'); pb.style.width = '300px'; document.body.appendChild(pb);
    const P = window.PaperKit.mount(c.tool, pb, Object.assign(JSON.parse(JSON.stringify(c.o || {})), { print: true }));
    if (c.s) P.setState(JSON.parse(JSON.stringify(c.s)));
    out.printControls = pb.querySelectorAll('button, input').length;
    pb.remove();
  } catch (e) { out.error = `${e.message}\n${e.stack}`; box.remove(); }
  return out;
}

for (const id of TOOLS) {
  test(`${id}: 문항마다 solve→check 참, wrongAnswer→check 거짓, 1단계 힌트에 정답 값 없음`, { skip: !chrome && '시스템 크롬 없음' }, async () => {
    const cases = CASES[id].map((c, i) => Object.assign({ key: `case${i + 1}` }, c)).concat(lessonCases(id));
    assert.ok(cases.length >= 4, `${id}: 검사할 문항이 적음(${cases.length})`);
    for (const c of cases) {
      const r = await page.evaluate(runCase, Object.assign({ tool: id }, c));
      const k = `${id} ${c.key} ${JSON.stringify(c.t)}`;
      assert.ok(!r.error, `${k}: 오류 ${r.error}`);
      assert.equal(r.solved, true, `${k}: solve 뒤 정답 아님 (${r.solvedFb})`);
      if (c.start || c.s) assert.equal(r.startCorrect, false, `${k}: 시작 상태가 이미 정답`);
      assert.ok(r.wrong, `${k}: wrongAnswer 없음`);
      assert.equal(r.wrong.correct, false, `${k}: wrongAnswer가 정답`);
      assert.equal(r.wrong.incomplete, false, `${k}: wrongAnswer가 incomplete (${r.wrong.fb})`);
      assert.ok(r.wrong.fb && r.wrong.fb.trim(), `${k}: 틀린 확인 피드백이 빔`);
      assert.ok(r.dWrong > 0, `${k}: 오답과 정답의 distance가 0`);
      assert.equal(targetLeak(r.h1, c.t), null, `${k}: 1단계 힌트에 정답 값 — "${r.h1}"`);
      assert.ok(r.h1 && r.h2 && r.h3, `${k}: 힌트 단계 글이 빔`);
      assert.equal(r.roundtrip, true, `${k}: reset 뒤 setState로 상태가 되살아나지 않음`);
      assert.equal(r.d0, 0, `${k}: distance(a,a) ≠ 0`);
      assert.equal(r.printControls, 0, `${k}: 활동지(print)에 조작 단추가 있음`);
    }
  });
}
