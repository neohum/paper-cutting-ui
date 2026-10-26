// 사회·과학 교구 레인 soc-sci — map · earth · circuit · body 교구 계약 검사.
// jsdom 없이 돈다: 정적 검사(머리 주석 표·아이콘·이모지·자동 소리)는 node만으로, 동작 검사는 시스템 크롬(playwright-core)의 빈 쪽에
// paperkit.js와 교구만 얹어 문항마다 solve→check 참, wrongAnswer→check 거짓(incomplete 아님), 1단계 힌트에 정답 값 없음,
// 상태 되살리기(reset+setState), distance(a,a)=0, 활동지(print)에 조작 단추 없음을 본다.
// 문항은 아래 손으로 쓴 사례(차시에 없는 옵션 조합)와 검사용 차시 _tool-<id>.js의 모든 문항(단계마다)·출구 교구 문항에서 모은다.
import { test, before, after } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const pool = join(root, 'edu-content-pool');
const TOOLS = ['map', 'earth', 'circuit', 'body'];
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

test('교구 파일 첫머리 주석에 모드·옵션·상태·target 표와 예가 있다', () => {
  for (const id of TOOLS) {
    const s = src(id);
    const head = s.slice(0, s.indexOf('*/'));
    for (const w of ['옵션', '상태', 'target', '예)', '키보드']) assert.ok(head.includes(w), `${id}: 머리 주석에 '${w}' 없음`);
    assert.match(s, new RegExp(`registerTool\\('${id}'`), `${id} 등록`);
    for (const m of ['getState', 'setState', 'check', 'reset', 'solve', 'hint', 'wrongAnswer', 'distance', 'revealAfterCheck', 'print']) assert.match(s, new RegExp(`\\b${m}\\b`), `${id}.${m}`);
  }
});

test('아이콘은 fi fi-rr-* 만 쓰고 이모지가 없다, 자동 재생·자동 읽기가 없다', () => {
  for (const id of TOOLS) {
    const s = src(id);
    assert.doesNotMatch(s, /[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/u, `${id}: 이모지`);
    for (const m of s.matchAll(/class="fi ([^"$]+)"/g)) assert.match(m[1], /^fi-rr-[a-z-]+$/, `${id}: 아이콘 ${m[1]}`);
    assert.doesNotMatch(s, /lucide|heroicon/i, `${id}: 다른 아이콘 묶음`);
    assert.doesNotMatch(s, /speechSynthesis\.speak|autoplay|\.play\(\)/, `${id}: 자동 소리`);
  }
});

test('검사용 차시 4개가 있고 교구 모드를 모두 쓴다', () => {
  const want = { map: ['compass', 'legend', 'scale', 'terrain'], earth: ['spin', 'orbit', 'moon', 'shadow', 'planets'], body: ['layers', 'find', 'path', 'match', 'arm', 'parts'] };
  for (const id of TOOLS) {
    const f = join(pool, 'lessons/data', `_tool-${id}.js`);
    assert.ok(existsSync(f), `_tool-${id}.js 없음`);
    const text = readFileSync(f, 'utf8');
    for (const m of want[id] || []) assert.match(text, new RegExp(`mode: '${m}'`), `_tool-${id}: ${m} 모드를 쓰지 않음`);
    assert.match(text, /type: 'tool'/, `_tool-${id}: 출구 질문에 교구 문항 없음`);
    assert.match(text, /type: 'figure'/, `_tool-${id}: 활동지 그림 없음`);
    assert.match(text, /reveal: 'after-check'/, `_tool-${id}: 확인 뒤 보임 문항 없음`);
    assert.match(text, /ask: \{/, `_tool-${id}: 보기 고르기(ask) 문항 없음`);
  }
});

// ---- 문항 모으기: 손으로 쓴 사례 + 검사용 차시의 모든 문항(단계마다) ----
const KOREA = { grid: [5, 6], sea: [[0, 0], [0, 5], [4, 5]], regions: [
  { name: '서울', cells: [[1, 1]], value: 940 }, { name: '강원', cells: [[2, 0], [3, 0], [3, 1]], value: 150 },
  { name: '충청', cells: [[1, 2], [2, 2]], value: 550 }, { name: '전라', cells: [[1, 3], [1, 4]], value: 500 },
  { name: '경상', cells: [[2, 3], [3, 3], [3, 2], [2, 4]], value: 1250 } ] };
const TOWN = { places: [{ name: '학교', icon: 'school', at: [2, 1] }, { name: '병원', icon: 'hospital', at: [4, 1] }, { name: '역', icon: 'station', at: [4, 3] }, { name: '공원', icon: 'park', at: [0, 3] }] };
const CASES = {
  map: [
    { o: TOWN, t: { place: '병원' } },
    { o: TOWN, t: { from: '학교', dir: '남', steps: 2 } },
    { o: Object.assign({ north: 90 }, TOWN), t: { from: '학교', dir: '북' } },
    { o: Object.assign({ mode: 'compass', points: 8 }, TOWN), t: { from: '공원', to: '학교' } },
    { o: Object.assign({ mode: 'compass', north: 45 }, TOWN), t: { align: true } },
    { o: Object.assign({ mode: 'scale', scale: { cell: 500, unit: 'm' } }, TOWN), t: { from: '학교', to: '역' } },
    { o: Object.assign({ mode: 'legend' }, TOWN), t: { legend: { school: '학교', hospital: '병원', station: '기차역', park: '공원' } } },
    { o: Object.assign({ mode: 'terrain', terrainView: 'contour', heights: [[0, 1, 2, 1], [0, 1, 3, 1], [-1, 0, 1, 0]] }), t: { highest: true } },
    { o: Object.assign({}, KOREA), t: { region: '강원' } },
    { o: Object.assign({ choropleth: true, unit: '만 명' }, KOREA), t: { most: true } },
    { o: Object.assign({}, KOREA), t: { sea: true } },
    { o: Object.assign({ readOnly: true, ask: { q: '가장 넓은 지역은?', choices: ['서울', '경상'] } }, KOREA), t: { pick: 1 } },
  ],
  earth: [
    { o: { mode: 'spin' }, s: { hour: 12 }, t: { hour: 18 } },
    { o: { mode: 'spin', showSides: false }, s: { hour: 12 }, t: { phase: '저녁' } },
    { o: { mode: 'orbit' }, s: { season: '봄' }, t: { night: '페가수스자리' } },
    { o: { mode: 'moon', days: [7, 22] }, t: { moon: 'auto' } },
    { o: { mode: 'shadow', minAlt: 20, maxAlt: 70 }, s: { alt: 40 }, t: { shadow: 10 } },
    { o: { mode: 'shadow', hours: { rise: 6, set: 18, top: 70 } }, s: { hour: 12 }, t: { longest: true } },
    { o: { mode: 'planets', planets: ['지구', '목성', '수성', '토성', '화성'] }, t: { order: ['수성', '지구', '화성', '목성', '토성'] } },
    { o: { mode: 'planets', planets: ['지구', '목성', '화성'] }, t: { order: ['화성', '지구', '목성'] } },
  ],
  circuit: [
    { o: { grid: [3, 2] }, t: { lit: 'all' } },
    { o: { grid: [4, 3], stock: { bulb: 3 } }, t: { lit: 'all', bulbs: 3, connection: 'series' } },
    { o: { grid: [4, 3] }, t: { lit: 'all', bulbs: 3, connection: 'parallel' } },
    { o: { grid: [4, 3] }, t: { lit: 'all', batteries: 2, batteryLink: 'parallel' } },
    { o: { grid: [4, 3] }, t: { lit: 'all', switch: 'closed' } },
    { o: { grid: [4, 3], parts: ['wire', 'battery', 'coil'] }, t: { magnet: true, coilN: 'left' } },
    { o: { grid: [4, 3], lock: true }, s: { parts: { 'v0-0': 'bat-', 'h1-0': 'bulb', 'h0-0': 'wire' } }, t: { lit: 'all' } },
    { o: { grid: [4, 2] }, t: { solution: { 'h0-0': 'bulb', 'h1-0': 'wire', 'h2-0': 'wire', 'v3-0': 'wire', 'h2-1': 'wire', 'h1-1': 'wire', 'h0-1': 'wire', 'v0-0': 'bat+' }, lit: 'all' } },
  ],
  body: [
    { o: { mode: 'layers' }, t: { layer: '기관' } },
    { o: { mode: 'layers' }, s: { peeled: 3 }, t: { layer: '피부' } },
    { o: { mode: 'find', organs: ['폐', '심장', '간', '위'] }, t: { sel: '간' } },
    { o: { mode: 'find' }, t: { job: '음식물 찌꺼기의 물을 흡수해요' } },
    { o: { mode: 'path' }, t: { system: '배설' } },
    { o: { mode: 'path', organs: ['입', '식도', '위', '작은창자', '큰창자', '항문', '간'] }, t: { path: ['입', '식도', '위'] } },
    { o: { mode: 'match', organs: ['뇌', '간', '방광'] }, t: { match: 'auto' } },
    { o: { mode: 'arm', step: 15 }, s: { angle: 0 }, t: { angle: 90 } },
    { o: { mode: 'arm' }, s: { angle: 0 }, t: { shorter: '안쪽' } },
    { o: { mode: 'parts', names: true }, t: { parts: ['눈', '귀', '코', '혀', '피부'] } },
    { o: { mode: 'parts', parts: ['목', '어깨', '허리', '무릎', '발목', '손목'] }, t: { parts: ['목', '어깨'] } },
  ],
};
function lessonCases(id) {
  const f = join(pool, 'lessons/data', `_tool-${id}.js`);
  if (!existsSync(f)) return [];
  let l; vm.runInNewContext(readFileSync(f, 'utf8'), { PaperLessons: { register(x) { l = x; } } });
  const out = [];
  for (const a of l.stages[1].activities) {
    if (a.tool !== id) continue;
    a.items.forEach((it, i) => {
      if (it.free) return;
      for (const level of ['easy', 'base', 'challenge']) {
        // 플레이어와 같은 차례: 활동 options → 단계 levels → 문항 toolOptions → revealAfterCheck
        const o = Object.assign({}, a.options || {}, a.levels[level] || {}, it.toolOptions || {}, it.reveal === 'after-check' ? { revealAfterCheck: true } : {});
        out.push({ key: `${a.id}.${i + 1}/${level}`, o, s: it.state, t: it.target, start: true });
      }
    });
  }
  l.stages[2].exitTicket.forEach((q, i) => { if (q.type === 'tool' && q.tool === id) out.push({ key: `exit.${i + 1}`, o: q.options || {}, s: q.state, t: q.target, start: true }); });
  return out;
}

const chrome = [process.env.CHROME_PATH, 'C:/Program Files/Google/Chrome/Application/chrome.exe', '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', '/usr/bin/google-chrome'].find((p) => p && existsSync(p));
let browser; let page; const pageErrors = [];
before(async () => {
  if (!chrome) return;
  const { chromium } = await import('playwright-core');
  browser = await chromium.launch({ executablePath: chrome, headless: true });
  page = await browser.newPage({ viewport: { width: 1000, height: 800 } });
  page.on('pageerror', (e) => pageErrors.push(e.message));
  await page.goto('about:blank');
  await page.addStyleTag({ path: join(pool, 'engine/paperkit.css') });
  await page.addScriptTag({ path: join(pool, 'engine/paperkit.js') });
  for (const id of TOOLS) await page.addScriptTag({ path: join(pool, 'engine/tools', `${id}.js`) });
});
after(async () => { if (browser) await browser.close(); });

function runCase(c) {
  const box = document.createElement('div'); box.style.width = c.width ? `${c.width}px` : '640px'; document.body.appendChild(box);
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
    // 키보드만으로 조작: 첫 Tab 자리에서 Enter/방향키를 누르면 상태가 바뀌어야 한다(읽기 전용 문항 제외)
    if (!(c.o && c.o.readOnly)) {
      T.reset(); if (c.s) T.setState(JSON.parse(JSON.stringify(c.s)));
      const before = JSON.stringify(T.getState());
      const focus = [...box.querySelectorAll('[tabindex="0"]')].slice(0, 6);
      let moved = false;
      for (const el of focus) {
        for (const key of ['Enter', 'ArrowRight', 'ArrowUp', ' ']) {
          el.dispatchEvent(new KeyboardEvent('keydown', { key, bubbles: true, cancelable: true }));
          if (el.tagName === 'BUTTON' && (key === 'Enter' || key === ' ')) el.click();
          if (JSON.stringify(T.getState()) !== before) { moved = true; break; }
        }
        if (moved) break;
      }
      out.keyboard = moved;
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
  test(`${id}: 문항마다 solve→check 참, wrongAnswer→check 거짓, 1단계 힌트에 정답 값 없음, 키보드로 조작`, { skip: !chrome && '시스템 크롬 없음' }, async () => {
    const cases = CASES[id].map((c, i) => Object.assign({ key: `case${i + 1}` }, c)).concat(lessonCases(id));
    assert.ok(cases.length >= 10, `${id}: 검사할 문항이 적음(${cases.length})`);
    for (const width of [640, 360]) {
      for (const c of cases) {
        const r = await page.evaluate(runCase, Object.assign({ tool: id, width }, c));
        const k = `${id} ${c.key} @${width} ${JSON.stringify(c.t)}`;
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
        if (r.keyboard !== undefined) assert.equal(r.keyboard, true, `${k}: 키보드(Enter·방향키)로 상태가 바뀌지 않음`);
        assert.equal(r.printControls, 0, `${k}: 활동지(print)에 조작 단추가 있음`);
      }
    }
    assert.deepEqual(pageErrors, [], `${id}: 쪽 오류`);
  });
}
