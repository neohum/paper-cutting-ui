// 시범 단원 리뷰에서 나온 플랫폼 결함 고침 — 카드 판 achievable, 축·판을 보는 중립 1단계 힌트, check-lesson 단원 차시 id.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
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

// 받침 조사 도우미: 따옴표·괄호로 끝나는 말도 안쪽 글자를 본다('줄넘기(3번)'을), 수는 읽는 소리('2예요'·'3이에요')
const helper = (file, name) => {
  const line = src(file).split('\n').find((l) => l.includes(`const ${name} = (w`));
  assert.ok(line, `${file}에 ${name}`);
  return vm.runInNewContext(`(${line.trim().replace(new RegExp(`^const ${name} = `), '').replace(/;$/, '')})`);
};
test('조사 도우미: 괄호·따옴표 뒤, 수 뒤', () => {
  for (const f of ['_cards', 'emotion', 'timer']) {
    const jo = helper(f, 'jo');
    assert.equal(jo('줄넘기(3번)', '을', '를'), '줄넘기(3번)을', f);
    assert.equal(jo('‘봄’', '이', '가'), '‘봄’이', f);
    assert.equal(jo('나무', '이', '가'), '나무가', f);
    assert.equal(jo('2', '을', '를'), '2를', f);
  }
  const isIt = helper('numberline', 'isIt');
  assert.equal(isIt('3'), '3이에요'); assert.equal(isIt('2'), '2예요'); assert.equal(isIt('3/4'), '3/4이에요'); assert.equal(isIt('0.5'), '0.5예요');
  assert.match(src('clock'), /isIt\(fmt\(\)\)/, 'clock: 정각은 ‘12시예요’');
});

// ---- 브라우저에서 확인하는 교구 고침(시스템 크롬이 없으면 건너뜀) ----
// 힌트 사다리(chart·measure 1·2·3단계가 다름), map 3단계 조사·되풀이·범례 덮어쓰기, kitchen sort·timer order 중립 글,
// clock showMinuteMarks·freeHour, numberline jump count+end(크기 없음), timeline sort 칸 sub, emotion branch 그림.
const chromePath = [process.env.CHROME_PATH, 'C:/Program Files/Google/Chrome/Application/chrome.exe', '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', '/usr/bin/google-chrome'].find((p) => p && existsSync(p));
test('교구 고침이 브라우저에서 듣는다', { skip: !chromePath && '시스템 크롬 없음' }, async () => {
  const { chromium } = await import('playwright-core');
  const browser = await chromium.launch({ executablePath: chromePath, headless: true });
  try {
    const page = await browser.newPage({ viewport: { width: 1000, height: 800 } });
    const errs = []; page.on('pageerror', (e) => errs.push(e.message));
    await page.goto('about:blank');
    await page.addStyleTag({ path: join(pool, 'engine/paperkit.css') });
    await page.addScriptTag({ path: join(pool, 'engine/paperkit.js') });
    for (const id of ['_cards', 'chart', 'measure', 'map', 'kitchen', 'timer', 'clock', 'numberline', 'timeline', 'emotion']) await page.addScriptTag({ path: join(pool, 'engine/tools', `${id}.js`) });
    const R = await page.evaluate(() => {
      const K = window.PaperKit; const R = {};
      const mk = (id, o) => { const b = document.createElement('div'); b.style.width = '560px'; document.body.appendChild(b); return [K.mount(id, b, o), b]; };
      const ladder = (T, t) => [1, 2, 3].map((level) => T.hint(t, { level, attempts: 3 }).hint);
      let [T] = mk('chart', { type: 'bar', data: [['엄마', 5], ['아빠', 8], ['동생', 3]], unit: '분', scale: 5, max: 10 });
      T.setState({ values: [10, 8, 3] }); R.chartBuild = ladder(T, { build: true });
      [T] = mk('chart', { type: 'bar', mode: 'read', data: [['가', 5], ['나', 8]], unit: '번' });
      T.setState({ answer: 3 }); R.chartRead = ladder(T, { value: 5 });
      [T] = mk('measure', { mode: 'ruler', object: { name: '연필', len: 7 } });
      R.measure = ladder(T, { read: 7 });
      [T] = mk('map', { places: [{ name: '개울 다리', icon: 'bridge', at: [2, 1] }, { name: '학교 화단', icon: 'park', at: [4, 2], legend: '화단' }, { name: '텃밭', icon: 'field', at: [1, 3], legend: '밭' }] });
      T.setState(Object.assign(T.getState(), { pin: [0, 0] }));
      R.map3 = [T.hint({ place: '개울 다리' }, { level: 3, attempts: 3 }).hint, T.hint({ place: '학교 화단' }, { level: 3, attempts: 3 }).hint];
      R.mapLegend = [...document.querySelectorAll('.pk-tool--map text')].map((t) => t.textContent);
      [T] = mk('kitchen', { mode: 'sort', slots: [{ id: 'w', label: '더울 때 옷' }, { id: 'c', label: '추울 때 옷' }], cards: ['반바지', '목도리'] });
      R.kitchenCustom = T.hint({ sort: { w: ['반바지'], c: ['목도리'] } }, { level: 1, attempts: 0 }).hint;
      [T] = mk('kitchen', { mode: 'sort', cards: ['밥', '우유'] });
      R.kitchenFood = T.hint({ sort: { 곡류: ['밥'], 우유: ['우유'] } }, { level: 1, attempts: 0 }).hint;
      [T] = mk('timer', { cards: ['인사하기', '노래 부르기', '악보 보기'] });
      R.timerMusic = T.hint({ order: ['악보 보기', '노래 부르기', '인사하기'] }, { level: 1, attempts: 0 }).hint;
      const marks = (o) => [...mk('clock', o)[1].querySelectorAll('line')].map((l) => l.getAttribute('stroke-width')).join();
      R.clockMarks = { def: marks({}), on: marks({ showMinuteMarks: true }), off: marks({ showMinuteMarks: false }) };
      [T] = mk('clock', { freeHour: true });
      T.setState({ h: 9, m: 40, hourAt: 9 }); R.freeWrong = T.check({ h: 9, m: 40 }).correct;
      T.solve({ h: 9, m: 40 }); R.freeSolved = T.check({ h: 9, m: 40 }).correct;
      [T] = mk('clock', {}); T.setState({ h: 9, m: 40, hourAt: 9 }); R.defaultIgnoresHourAt = T.check({ h: 9, m: 40 }).correct;
      [T] = mk('numberline', { mode: 'jump', min: 0, max: 120, from: 0, sub: 1 });
      T.solve({ from: 0, end: 110, count: 2 }); R.jump = { hops: T.getState().hops.length, ok: T.check({ from: 0, end: 110, count: 2 }).correct };
      const tl = mk('timeline', { mode: 'sort', slots: [{ id: 'am', label: '오전', sub: '밤 12시~낮 12시' }, { id: 'pm', label: '오후', sub: '낮 12시~밤 12시' }], cards: ['아침 먹기', '저녁 먹기'] })[1];
      R.tlSub = [...tl.querySelectorAll('text')].some((t) => t.textContent === '밤 12시~낮 12시');
      const em = (motif) => mk('emotion', { mode: 'branch', print: true, situation: '지렁이가 길에 나왔어요', motif, choices: [{ id: 'a', text: '옮겨 줘요' }, { id: 'b', text: '지나가요' }] })[1].innerHTML;
      R.emoMotif = em('leaf') !== em(undefined);
      return R;
    });
    assert.deepEqual(errs, []);
    for (const k of ['chartBuild', 'chartRead', 'measure']) assert.equal(new Set(R[k]).size, 3, `${k}: 1·2·3단계 힌트가 서로 달라야 함 ${JSON.stringify(R[k])}`);
    assert.doesNotMatch(R.chartBuild.join(' '), /막대을|분예요|번예요/, 'chart 조사');
    assert.match(R.map3[0], /^개울 다리는 /, 'map 3단계: 받침 없는 말 뒤 ‘는’');
    assert.doesNotMatch(R.map3[1], /학교 화단은 학교 화단/, 'map 3단계: 이름 되풀이 없음');
    assert.ok(R.mapLegend.includes('밭') && R.mapLegend.includes('화단') && !R.mapLegend.includes('논'), `map 범례 덮어쓰기 ${R.mapLegend}`);
    assert.doesNotMatch(R.kitchenCustom, /식품군/, 'kitchen: 식단이 아닌 칸은 중립 글');
    assert.match(R.kitchenFood, /식품군/, 'kitchen: 기본 식품군 칸은 그대로');
    assert.doesNotMatch(R.timerMusic, /몸이|다치/, 'timer order: 체육이 아닌 차례 카드는 중립 글');
    assert.notEqual(R.clockMarks.on, R.clockMarks.def, 'clock showMinuteMarks:true가 눈금을 바꾼다');
    assert.notEqual(R.clockMarks.off, R.clockMarks.def, 'clock showMinuteMarks:false가 작은 눈금을 숨긴다');
    assert.equal(R.freeWrong, false, 'clock freeHour: 짧은바늘이 시 숫자에 똑바로면 틀림');
    assert.equal(R.freeSolved, true, 'clock freeHour solve');
    assert.equal(R.defaultIgnoresHourAt, true, 'clock 기본: 짧은바늘은 분을 따라가므로 hourAt을 보지 않는다(하위 호환)');
    assert.deepEqual(R.jump, { hops: 2, ok: true }, 'numberline jump {end, count}: 화살표 count개');
    assert.ok(R.tlSub, 'timeline sort 칸 sub 글이 그려진다');
    assert.ok(R.emoMotif, 'emotion branch motif 옵션이 상황 그림을 바꾼다');
  } finally { await browser.close(); }
});
