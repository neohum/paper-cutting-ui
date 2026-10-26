// 도형판·재기·힘·물질 교구(shapes, measure, force, matter) 계약 검사.
// 정적 검사(머리 주석·아이콘)는 그대로 돌고, 동작 검사는 시스템 크롬(playwright-core)이 있을 때만 돈다(jsdom 없이).
// 모드마다 대표 문항으로: 시작 상태가 정답 아님 → solve → check 참, wrongAnswer → check 거짓·incomplete 아님,
// 1단계 힌트에 target 값 없음, 힌트·틀린 확인이 교구 글자를 바꾸지 않음(revealAfterCheck), 상태 되살리기, 활동지(print) 장착.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const pool = join(root, 'edu-content-pool');
const TOOLS = ['shapes', 'measure', 'force', 'matter'];

test('tool files: registered id, header table of options / state / target, fi-rr icons only', () => {
  for (const id of TOOLS) {
    const src = readFileSync(join(pool, 'engine/tools', `${id}.js`), 'utf8');
    assert.match(src, new RegExp(`registerTool\\('${id}'`), `${id} 등록`);
    const head = src.slice(0, src.indexOf('(function'));
    for (const w of ['옵션', '상태', 'target', '예)']) assert.ok(head.includes(w), `${id} 머리 주석에 ${w}`);
    for (const m of ['getState', 'setState', 'check', 'reset', 'solve', 'hint', 'wrongAnswer', 'distance']) assert.match(src, new RegExp(`\\b${m}\\b`), `${id}.${m}`);
    assert.doesNotMatch(src, /\p{Extended_Pictographic}/u, `${id}: 이모지 금지`);
    const icons = src.match(/fi-rr-[a-z0-9-]+/g) || [];
    const css = readFileSync(join(pool, 'vendor/uicons/css/uicons-regular-rounded.css'), 'utf8');
    for (const ic of new Set(icons)) assert.ok(css.includes(`.${ic}:before`), `${id}: 없는 아이콘 ${ic}`);
    assert.doesNotMatch(src, /speechSynthesis|\.play\(\)|autoplay/, `${id}: 자동 소리 금지`);
  }
});

// 1단계 힌트는 개념만 — check-lesson.mjs targetLeak과 같은 규칙
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

// [교구, 옵션, 시작 상태(없으면 null), target]
const CASES = [
  ['shapes', { mode: 'geoboard', size: 5 }, null, { shape: 'triangle' }],
  ['shapes', { mode: 'geoboard', size: 5 }, null, { shape: 'right-triangle' }],
  ['shapes', { mode: 'geoboard', size: 5 }, null, { shape: 'obtuse-triangle' }],
  ['shapes', { mode: 'geoboard', size: 5 }, null, { shape: 'acute-triangle' }],
  ['shapes', { mode: 'geoboard', size: 5 }, null, { shape: 'isosceles-triangle' }],
  ['shapes', { mode: 'geoboard', size: 5, revealAfterCheck: true }, null, { shape: 'square' }],
  ['shapes', { mode: 'geoboard', size: 6, showArea: true, revealAfterCheck: true }, null, { shape: 'rectangle', area: 6 }],
  ['shapes', { mode: 'geoboard', size: 5 }, null, { shape: 'rhombus', exact: true }],
  ['shapes', { mode: 'geoboard', size: 5 }, null, { shape: 'parallelogram', exact: true }],
  ['shapes', { mode: 'geoboard', size: 5 }, null, { shape: 'trapezoid', exact: true }],
  ['shapes', { mode: 'geoboard', size: 5, revealAfterCheck: true }, null, { sides: 5 }],
  ['shapes', { mode: 'geoboard', size: 6 }, null, { sides: 6 }],
  ['shapes', { mode: 'geoboard', size: 5, showArea: true, revealAfterCheck: true }, { pts: [[0, 0], [1, 0], [1, 1]] }, { area: 4 }],
  ['shapes', { mode: 'geoboard', size: 5, showRight: true }, null, { rightAngles: 1 }],
  ['shapes', { mode: 'geoboard', size: 5 }, null, { parallel: 1, sides: 4 }],
  ['shapes', { mode: 'geoboard', size: 5, readOnly: true, askNum: { q: '꼭짓점은 몇 개인가요?', unit: '개' } }, { pts: [[1, 0], [3, 0], [4, 2], [2, 3], [0, 2]] }, { num: 5 }],
  ['shapes', { mode: 'tangram', figure: 'square2' }, null, { fit: true }],
  ['shapes', { mode: 'tangram', figure: 'triangle2' }, null, { fit: true }],
  ['shapes', { mode: 'tangram', figure: 'parallelogram2', lines: true }, null, { fit: true }],
  ['shapes', { mode: 'tangram', figure: 'square3' }, null, { fit: true }],
  ['shapes', { mode: 'tangram', figure: 'triangle3' }, null, { fit: true }],
  ['shapes', { mode: 'tangram', figure: 'square7' }, null, { fit: true }],
  ['shapes', { mode: 'classify', cards: [{ id: 'a', shape: 'triangle' }, { id: 'b', shape: 'square', rot: 20 }, { id: 'c', shape: 'circle' }, { id: 'd', shape: 'trapezoid' }], bins: ['곧은 선 3개', '곧은 선 4개', '굽은 선'] }, null, { bins: { a: 0, b: 1, c: 2, d: 1 } }],
  ['measure', { mode: 'ruler', object: { name: '연필', len: 7.5, start: 2 }, split: true }, null, { read: 7.5 }],
  ['measure', { mode: 'ruler', object: { name: '끈', len: 9 }, mm: false }, null, { read: 9 }],
  ['measure', { mode: 'ruler', make: true, revealAfterCheck: true }, null, { make: 6.3 }],
  ['measure', { mode: 'ruler', object: { name: '책상', len: 12 }, tiles: { name: '클립', len: 3 } }, null, { read: 4 }],
  ['measure', { mode: 'scale', left: [{ name: '지우개', w: 6 }], unit: { name: '바둑돌', w: 1 }, showAmount: true, revealAfterCheck: true }, null, { balance: true }],
  ['measure', { mode: 'scale', left: [{ name: '사과', w: 5 }], unit: { name: '추', w: 1 } }, null, { tilt: 'right' }],
  ['measure', { mode: 'scale', left: [{ name: '풀', w: 4 }], right: [{ name: '가위', w: 7 }], ask: { q: '어느 쪽이 더 무거운가요?', choices: ['풀', '가위', '같아요'] } }, null, { pick: 1 }],
  ['measure', { mode: 'scale', kind: 'spring', objects: [{ name: '필통', w: 250 }, { name: '공책', w: 120 }], max: 500, step: 100, minor: 10 }, null, { read: 250 }],
  ['measure', { mode: 'volume', pour: true, beakers: [{ v: 0, max: 1000 }], step: 100, minor: 2, showAmount: true, revealAfterCheck: true }, null, { fill: 700 }],
  ['measure', { mode: 'volume', beakers: [{ v: 1300, max: 2000 }], step: 500, minor: 5, split: true }, null, { read: 1300 }],
  ['measure', { mode: 'unit', things: [{ name: '연필의 길이', amount: 15 }, { name: '교실 긴 쪽', amount: 9 }, { name: '서울에서 부산', amount: 400 }], units: ['mm', 'cm', 'm', 'km'] }, null, { units: [1, 2, 3] }],
  ['force', { mode: 'lever', fixed: [{ pos: -2, n: 3 }], side: 'right', showMoment: true, revealAfterCheck: true }, null, { balance: true }],
  ['force', { mode: 'lever', fixed: [{ pos: -2, n: 3 }], side: 'right' }, null, { balance: true, at: 3 }],
  ['force', { mode: 'lever', fixed: [{ pos: -3, n: 2 }], side: 'right' }, null, { balance: true, count: 3 }],
  ['force', { mode: 'lever', fixed: [{ pos: 1, n: 4 }] }, null, { tilt: 'left' }],
  ['force', { mode: 'spring', k: 2, revealAfterCheck: true }, null, { stretch: 8 }],
  ['force', { mode: 'spring', k: 3 }, null, { n: 3 }],
  ['force', { mode: 'spring', k: 2 }, { n: 3 }, { read: 6 }],
  ['force', { mode: 'ramp' }, null, { set: { angle: 30 }, run: true }],
  ['force', { mode: 'ramp', lock: ['mass'] }, null, { set: { surface: 1, angle: 40 } }],
  ['force', { mode: 'push' }, { force: 1, surface: 1 }, { move: true }],
  ['force', { mode: 'push' }, null, { set: { force: 6, mass: 2 }, run: true }],
  ['force', { mode: 'speed', control: true, movers: [{ name: '나', d: 60, t: 10 }, { name: '민지', d: 100, t: 20 }], showSpeed: true, revealAfterCheck: true }, null, { speed: 8 }],
  ['force', { mode: 'speed', control: true, movers: [{ name: '나', d: 50, t: 20 }, { name: '준호', d: 100, t: 20 }] }, null, { beat: 1 }],
  ['force', { mode: 'speed', movers: [{ name: '가', d: 100, t: 20 }, { name: '나', d: 120, t: 20 }, { name: '다', d: 120, t: 30 }], ask: { q: '누가 가장 빠른가요?', choices: ['가', '나', '다'] } }, null, { pick: 1 }],
  ['matter', { mode: 'particles', revealAfterCheck: true }, null, { phase: 'gas' }],
  ['matter', { mode: 'particles' }, null, { phase: 'solid' }],
  ['matter', { mode: 'particles', substance: { name: '초콜릿', melt: 30, boil: 200 }, temps: [0, 60, 10] }, null, { temp: 50 }],
  ['matter', { mode: 'particles', boxes: ['liquid', 'gas', 'solid'], ask: { q: '기체는 어느 상자인가요?', choices: ['가', '나', '다'] } }, null, { pick: 1 }],
  ['matter', { mode: 'sort', cards: [{ id: 'cup', name: '유리컵', icon: 'fi-rr-glass', props: ['투명해요'] }, { id: 'spoon', name: '숟가락', icon: 'fi-rr-spoon', props: ['단단해요'] }, { id: 'band', name: '고무줄', props: ['잘 늘어나요'] }], bins: ['유리', '금속', '고무'] }, null, { bins: { cup: 0, spoon: 1, band: 2 } }],
  ['matter', { mode: 'dissolve', solute: { name: '소금', perSpoon: 5, limit: 35 } }, null, { saturated: true }],
  ['matter', { mode: 'dissolve', showConc: true, revealAfterCheck: true }, null, { conc: 4 }],
  ['matter', { mode: 'dissolve', compare: [{ water: 100, spoons: 2, label: '나' }] }, null, { sameAs: 1 }],
  ['matter', { mode: 'dissolve', temps: [{ name: '차가운 물', limit: 20 }, { name: '따뜻한 물', limit: 40 }] }, null, { set: { temp: 1, spoons: 4 } }],
  ['matter', { mode: 'separate', parts: [{ name: '철 가루', magnet: true }, { name: '소금', dissolve: true }, { name: '모래' }] }, null, { separated: true }],
  ['matter', { mode: 'separate', parts: [{ name: '콩', big: true }, { name: '좁쌀' }, { name: '스타이로폼', float: true }] }, null, { got: '좁쌀' }],
];

const chrome = [process.env.CHROME_PATH, 'C:/Program Files/Google/Chrome/Application/chrome.exe', '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', '/usr/bin/google-chrome'].find((p) => p && existsSync(p));

test('tools behave: solve → correct, wrongAnswer → wrong (not incomplete), level-1 hint leaks nothing, reveal stays hidden', { skip: !chrome && '시스템 크롬 없음' }, async () => {
  const { chromium } = await import('playwright-core');
  const browser = await chromium.launch({ executablePath: chrome, headless: true });
  try {
    const page = await browser.newPage({ viewport: { width: 1000, height: 800 } });
    const errors = [];
    page.on('pageerror', (e) => errors.push(e.message));
    await page.setContent('<!doctype html><html lang="ko"><meta charset="utf-8"><body><div id="box" style="width:700px"></div></body></html>');
    await page.addScriptTag({ path: join(pool, 'engine/paperkit.js') });
    for (const id of TOOLS) await page.addScriptTag({ path: join(pool, 'engine/tools', `${id}.js`) });
    for (const [tool, opts, state, target] of CASES) {
      const at = `${tool} ${opts.mode || ''} ${JSON.stringify(target)}`;
      const r = await page.evaluate(([tool, opts, state, target]) => {
        const box = document.getElementById('box'); box.innerHTML = '';
        const K = window.PaperKit; const t = K.mount(tool, box, opts);
        if (state) t.setState(state);
        const text = () => box.innerText + [...box.querySelectorAll('text')].map((x) => x.textContent).join('|');
        const out = {};
        out.start = t.check(target, { forHint: true });
        const s0 = JSON.stringify(t.getState());
        const tx0 = text();
        out.hint1 = t.hint(target, { level: 1, attempts: 0 });
        out.hintKeeps = text() === tx0 && JSON.stringify(t.getState()) === s0;
        const w = t.wrongAnswer(target);
        out.wrong = w == null ? null : (() => { t.setState(JSON.parse(JSON.stringify(w))); const tw = text(); const c = t.check(target); return Object.assign(c, { textKept: text() === tw, distOk: typeof t.distance(w, w) === 'number' && t.distance(w, w) === 0 }); })();
        out.hint3 = t.hint(target, { level: 3, attempts: 2 });
        t.reset();
        out.resetSame = JSON.stringify(t.getState()) === s0 || state != null;
        t.solve(target);
        out.solved = t.check(target);
        const sv = JSON.stringify(t.getState());
        t.reset(); t.setState(JSON.parse(sv));
        out.roundTrip = JSON.stringify(t.getState()) === sv && t.check(target, { forHint: true }).correct;
        // 활동지 그림
        box.innerHTML = '';
        const pr = K.mount(tool, box, Object.assign({}, opts, { print: true }));
        if (state) pr.setState(state);
        out.printOk = box.querySelectorAll('button, input').length === 0 || (opts.mode === 'classify' || opts.mode === 'sort' || opts.mode === 'unit');
        return out;
      }, [tool, opts, state, target]);
      assert.equal(r.start.correct, false, `${at}: 시작 상태가 이미 정답`);
      assert.ok(r.hint1 && typeof r.hint1.hint === 'string' && r.hint1.hint.length > 5, `${at}: 1단계 힌트 없음`);
      assert.equal(r.hint1.level, 1, `${at}: 시도 전 힌트는 1단계`);
      assert.equal(targetLeak(r.hint1.hint, target), null, `${at}: 1단계 힌트에 정답 값: ${r.hint1.hint}`);
      assert.ok(r.hintKeeps, `${at}: 힌트가 상태·글자를 바꿈`);
      assert.ok(r.wrong, `${at}: wrongAnswer 없음`);
      assert.equal(r.wrong.correct, false, `${at}: wrongAnswer가 정답`);
      assert.ok(!r.wrong.incomplete, `${at}: wrongAnswer가 incomplete (${r.wrong.feedback})`);
      assert.ok(r.wrong.feedback, `${at}: 틀린 확인 피드백 없음`);
      if (opts.revealAfterCheck) assert.ok(r.wrong.textKept, `${at}: 틀린 확인이 숨긴 값을 드러냄`);
      assert.ok(r.wrong.distOk, `${at}: distance(a,a) ≠ 0`);
      assert.ok(r.hint3 && r.hint3.hint, `${at}: 3단계 힌트 없음`);
      assert.equal(r.solved.correct, true, `${at}: solve 뒤 정답 아님 (${r.solved.feedback})`);
      assert.ok(r.roundTrip, `${at}: 상태 되살리기 실패`);
      assert.ok(r.printOk, `${at}: 활동지 그림에 조작 칸이 남음`);
    }
    assert.deepEqual(errors, []);
  } finally { await browser.close(); }
});
