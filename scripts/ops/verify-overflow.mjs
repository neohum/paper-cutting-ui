#!/usr/bin/env node
// PaperCut UI 실측 넘침 검사 (실제 Chrome + playwright-core).
//
//   node scripts/ops/verify-overflow.mjs --page
//   node scripts/ops/verify-overflow.mjs --fixtures [--only=button,badge] [--report-only]
//   옵션: --json <path>  --screenshots <dir>
//   (숨은 옵션) --url <html 경로>  : 픽스처 형식의 임의 HTML을 --fixtures 모드로 검사
//
// 외부 네트워크(Google Fonts 등)는 차단한다: 오프라인에서도 같은 결과가 나오도록
// 결정성을 우선한다. 폰트는 시스템 폴백으로 렌더된다.
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright-core';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const PAGE_WIDTHS = [320, 360, 375, 414, 768, 1024, 1280, 1920];
const SHOT_WIDTHS = [375, 768, 1280];
// 숨은 옵션 --url을 --page와 함께 주면 index.html 대신 해당 HTML을 검사한다(검사기 자체 검증용)
const PAGE_PATH_DEFAULT = '/index.html';
const FIXTURE_PAGE = '/tests/responsive/component-fixtures.html';

// ---------- 인자 ----------
const argv = process.argv.slice(2);
const flag = (n) => argv.includes(`--${n}`);
const opt = (n) => {
  const eq = argv.find((a) => a.startsWith(`--${n}=`));
  if (eq) return eq.slice(n.length + 3);
  const i = argv.indexOf(`--${n}`);
  return i >= 0 && argv[i + 1] && !argv[i + 1].startsWith('--') ? argv[i + 1] : null;
};
const modePage = flag('page');
const modeFixtures = flag('fixtures');
const reportOnly = flag('report-only');
const only = (opt('only') || '').split(',').map((s) => s.trim()).filter(Boolean);
const jsonPath = opt('json');
const shotDir = opt('screenshots');
const extUrl = opt('url');

if (!modePage && !modeFixtures && !shotDir) {
  console.error('사용법: verify-overflow.mjs --page | --fixtures [--only=a,b] [--report-only] [--json <path>] [--screenshots <dir>]');
  process.exit(2);
}

// ---------- 정적 서버 (저장소 루트, 포트 0) ----------
const MIME = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8', '.json': 'application/json; charset=utf-8', '.svg': 'image/svg+xml',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp', '.woff2': 'font/woff2', '.woff': 'font/woff',
  '.ttf': 'font/ttf', '.ico': 'image/x-icon', '.txt': 'text/plain; charset=utf-8',
};
const PAGE_PATH = modePage && extUrl && !modeFixtures ? `/__ext/${path.basename(extUrl)}` : PAGE_PATH_DEFAULT;
const extDir = extUrl ? path.dirname(path.resolve(extUrl)) : null;

function startServer() {
  const server = http.createServer((req, res) => {
    let p;
    try { p = decodeURIComponent(new URL(req.url, 'http://x').pathname); } catch { res.writeHead(400).end(); return; }
    let base = ROOT;
    if (extDir && p.startsWith('/__ext/')) { base = extDir; p = p.slice('/__ext'.length); }
    const file = path.normalize(path.join(base, p));
    if (!file.startsWith(base)) { res.writeHead(403).end(); return; }
    fs.stat(file, (e, st) => {
      if (e || !st.isFile()) { res.writeHead(404).end('not found'); return; }
      res.writeHead(200, { 'content-type': MIME[path.extname(file).toLowerCase()] || 'application/octet-stream', 'cache-control': 'no-store' });
      fs.createReadStream(file).pipe(res);
    });
  });
  return new Promise((resolve) => server.listen(0, '127.0.0.1', () => resolve(server)));
}

// ---------- 브라우저 ----------
async function launch() {
  try {
    return await chromium.launch({ channel: 'chrome' });
  } catch (e) {
    const fallback = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
    console.warn(`[verify-overflow] channel=chrome 실패(${String(e.message).split('\n')[0]}) -> ${fallback}`);
    return await chromium.launch({ executablePath: fallback });
  }
}

async function newPage(browser, origin, width, height = 900) {
  const ctx = await browser.newContext({ viewport: { width, height } });
  // 외부 요청 차단: 오프라인 결정성
  await ctx.route('**/*', (route) => {
    const u = route.request().url();
    if (u.startsWith(origin) || u.startsWith('data:') || u.startsWith('blob:') || u.startsWith('about:')) return route.continue();
    return route.abort();
  });
  const page = await ctx.newPage();
  return { page, close: () => ctx.close() };
}

// ---------- 페이지 안에서 도는 측정 함수 ----------
// root 아래 요소 중 bounds(left/right)를 벗어난 "뿌리 원인"만 모은다.
//  - 경계 안에 있는 overflow(hidden/auto/scroll/clip) 조상이나 의도된 스트립이 가두면 제외
//  - 부모도 같이 벗어났다면 부모가 뿌리이므로 제외
//  - 명시적 제외 목록(조용히 넓히지 않는다): position:fixed, display:none/visibility:hidden/opacity:0,
//    aria-hidden="true" 조상 안, [data-overflow-ok] 조상 안(의도된 오프스크린 표시용)
//  - position:absolute 요소: 텍스트 없는 장식은 ABS_DECOR_TOL(px)까지만 삐져나와도 허용, 그 이상은 위반.
//    skipAbsolute=true면 전부 제외(기본 사용 안 함)
//  - 텍스트가 요소 안에서 흘러넘치는 경우(요소 박스는 안, 글자만 밖)도 잡는다
const MEASURE_FN = `(args) => {
  const { rootSel, rootIndex, bounds, skipAbsolute, tol } = args;
  const ABS_DECOR_TOL = 4;
  const root = rootSel === '__wrapper__' ? document.querySelector('.pc-content-wrapper') : document.querySelectorAll(rootSel)[rootIndex];
  if (!root) return { error: 'root not found: ' + rootSel };
  const L = bounds.left, R = bounds.right;
  const STRIP = '.pc-filter-pills-row, .pc-icon-category-pills, .pc-bg-category-pills';
  const out = (r) => r.right > R + tol || r.left < L - tol;
  const inb = (r) => r.right <= R + tol && r.left >= L - tol;
  const describe = (el) => {
    const cls = (typeof el.className === 'string' ? el.className : '').trim().split(/\\s+/).filter(Boolean).slice(0, 3).join('.');
    return el.tagName.toLowerCase() + (el.id ? '#' + el.id : '') + (cls ? '.' + cls : '');
  };
  const isScroller = (cs, el) => /(hidden|auto|scroll|clip)/.test(cs.overflowX) || el.matches(STRIP);
  const clippedByAncestor = (el) => {
    for (let p = el.parentElement; p && p !== root; p = p.parentElement) {
      const pc = getComputedStyle(p);
      if (isScroller(pc, p) && inb(p.getBoundingClientRect())) return true;
    }
    return false;
  };
  const offenders = [];
  let total = 0;
  for (const el of root.querySelectorAll('*')) {
    if (el.closest('svg') && el.tagName.toLowerCase() !== 'svg') continue;   // svg 내부 도형은 svg 루트로만 판단
    if (el.closest('template')) continue;
    const cs = getComputedStyle(el);
    if (cs.display === 'none' || cs.visibility === 'hidden' || Number(cs.opacity) === 0) continue;
    if (cs.position === 'fixed') continue;
    if (el.closest('[aria-hidden="true"], [data-overflow-ok]')) continue;
    const b = el.getBoundingClientRect();
    if (cs.position === 'absolute') {
      if (skipAbsolute) continue;
      // 텍스트 없는 장식은 몇 px 삐져나오는 것만 허용
      if (!(el.textContent || '').trim() && b.right <= R + ABS_DECOR_TOL && b.left >= L - ABS_DECOR_TOL) continue;
    }
    let reason = null, rect = b;
    if (b.width > 0 && b.height > 0 && out(b)) reason = 'box';
    else if (!/(hidden|auto|scroll|clip)/.test(cs.overflowX) && b.width > 0) {
      // 직접 텍스트 노드가 요소 밖으로 흐르는지
      for (const n of el.childNodes) {
        if (n.nodeType !== 3 || !n.nodeValue.trim()) continue;
        const rg = document.createRange(); rg.selectNodeContents(n);
        const tr = rg.getBoundingClientRect();
        if (tr.width > 0 && out(tr)) { reason = 'text'; rect = tr; break; }
      }
    }
    if (!reason) continue;
    if (clippedByAncestor(el)) continue;
    total++;
    if (reason === 'box' && el.parentElement && el.parentElement !== root) {
      const pb = el.parentElement.getBoundingClientRect();
      const pcs = getComputedStyle(el.parentElement);
      if (pb.width > 0 && out(pb) && pcs.position !== 'fixed') continue;   // 부모가 뿌리
    }
    const holder = el.closest('[data-fixture]');
    offenders.push({
      sel: describe(el),
      section: (el.closest('section[id]') || {}).id || (holder ? holder.getAttribute('data-fixture') : ''),
      reason,
      left: Math.round(rect.left), right: Math.round(rect.right), width: Math.round(rect.width),
      overBy: Math.round(Math.max(rect.right - R, L - rect.left)),
    });
  }
  return { offenders, total };
}`;

// ---------- --page ----------
async function hydrateByScrolling(page) {
  await page.waitForTimeout(1000);
  await page.evaluate(async () => {
    const h = document.documentElement.scrollHeight;
    for (let y = 0; y < h; y += 700) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 25)); }
    window.scrollTo(0, document.documentElement.scrollHeight);
    await new Promise((r) => setTimeout(r, 25));
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(800);
}

async function runPage(browser, origin, report) {
  let failed = false;
  report.page = [];
  console.log(`\n== --page: ${PAGE_PATH} (${PAGE_WIDTHS.join('/')}px) ==`);
  for (const w of PAGE_WIDTHS) {
    const { page, close } = await newPage(browser, origin, w);
    await page.goto(`${origin}${PAGE_PATH}`, { waitUntil: 'load' });
    await hydrateByScrolling(page);
    const scroll = await page.evaluate(() => {
      const wrap = document.querySelector('.pc-content-wrapper');
      const d = document.documentElement;
      return {
        docSW: d.scrollWidth, docCW: d.clientWidth,
        wrapFound: !!wrap, wrapSW: wrap ? wrap.scrollWidth : -1, wrapCW: wrap ? wrap.clientWidth : -1,
        wrapLeft: wrap ? wrap.getBoundingClientRect().left : 0, wrapRight: wrap ? wrap.getBoundingClientRect().right : 0,
        height: d.scrollHeight,
      };
    });
    let roots = { offenders: [], total: 0 };
    if (scroll.wrapFound) {
      const bounds = { left: Math.max(0, scroll.wrapLeft), right: Math.min(scroll.docCW, scroll.wrapRight) };
      roots = await page.evaluate(`(${MEASURE_FN})(${JSON.stringify({ rootSel: '__wrapper__', rootIndex: 0, bounds, skipAbsolute: false, tol: 1 })})`);
    }
    const docOk = scroll.docSW <= scroll.docCW;
    const wrapOk = scroll.wrapFound && scroll.wrapSW <= scroll.wrapCW + 1;
    const rootOk = roots.offenders.length === 0;
    const ok = docOk && wrapOk && rootOk;
    if (!ok) failed = true;
    report.page.push({ width: w, ok, ...scroll, rootOffenders: roots.offenders });
    console.log(`${ok ? 'PASS' : 'FAIL'} ${String(w).padStart(4)}px  doc ${scroll.docSW}/${scroll.docCW}  wrapper ${scroll.wrapSW}/${scroll.wrapCW}  rootOffenders=${roots.offenders.length}${scroll.wrapFound ? '' : '  (.pc-content-wrapper 없음)'}`);
    for (const o of roots.offenders.slice(0, 8)) console.log(`       - ${o.section || '-'} :: ${o.sel} [${o.left}..${o.right}] w=${o.width} +${o.overBy}px (${o.reason})`);
    if (roots.offenders.length > 8) console.log(`       ... +${roots.offenders.length - 8}개 더`);
    if (shotDir && SHOT_WIDTHS.includes(w)) {
      fs.mkdirSync(shotDir, { recursive: true });
      await page.screenshot({ path: path.join(shotDir, `index-${w}.png`), fullPage: false });
    }
    await close();
  }
  console.log(failed ? 'PAGE: FAIL' : 'PAGE: PASS');
  report.pageOk = !failed;
  return !failed;
}

// ---------- --fixtures ----------
async function runFixtures(browser, origin, report) {
  const target = extUrl ? `/__ext/${path.basename(extUrl)}` : FIXTURE_PAGE;
  report.fixtures = [];
  console.log(`\n== --fixtures: ${target}${only.length ? ' only=' + only.join(',') : ''} ==`);
  const { page, close } = await newPage(browser, origin, 1280);
  await page.goto(`${origin}${target}`, { waitUntil: 'load' });
  await page.waitForFunction(() => document.documentElement.getAttribute('data-fixtures-ready') === '1');
  await page.waitForTimeout(800); // 아이콘 수화 대기
  const groups = await page.evaluate(() => [...document.querySelectorAll('section[data-fixture]')].map((s) => s.getAttribute('data-fixture')));
  const wanted = only.length ? groups.filter((g) => only.includes(g)) : groups;
  const unknown = only.filter((o) => !groups.includes(o) && o !== 'shrinkwrap');
  if (unknown.length) {
    console.error(`[오류] 알 수 없는 그룹: ${unknown.join(', ')} (사용 가능: ${[...groups, 'shrinkwrap'].join(', ')})`);
    await close();
    fatal = true;
    return false;
  }
  let executedCases = 0;
  let totalOff = 0;
  for (const g of wanted) {
    const widths = await page.evaluate((name) => [...document.querySelectorAll(`section[data-fixture="${name}"] .fx-case`)].map((c) => Number(c.dataset.width)), g);
    for (let idx = 0; idx < widths.length; idx++) {
      const w = widths[idx];
      executedCases++;
      const caseSel = `section[data-fixture="${g}"] .fx-case`;
      const bounds = await page.evaluate(({ sel, i }) => {
        const c = document.querySelectorAll(sel)[i]; const r = c.getBoundingClientRect();
        return { left: r.left, right: r.right };
      }, { sel: caseSel, i: idx });
      const res = await page.evaluate(`(${MEASURE_FN})(${JSON.stringify({ rootSel: caseSel, rootIndex: idx, bounds, skipAbsolute: false, tol: 1 })})`);
      const cols = await page.evaluate(({ sel, i }) => {
        const c = document.querySelectorAll(sel)[i];
        return [...c.querySelectorAll('[data-fx-grid]')].map((gr) => {
          const t = getComputedStyle(gr).gridTemplateColumns;
          return t && t !== 'none' ? t.trim().split(/\s+/).length : 1;
        });
      }, { sel: caseSel, i: idx });
      const entry = { component: g, width: w, offenders: res.offenders.length, list: res.offenders, columns: cols };
      report.fixtures.push(entry);
      totalOff += entry.offenders;
      console.log(`${entry.offenders ? 'FAIL' : 'PASS'} ${g.padEnd(7)} ${String(w).padStart(4)}px  offenders=${entry.offenders}${cols.length ? '  columns=[' + cols.join(',') + ']' : ''}`);
      for (const o of res.offenders.slice(0, 10)) console.log(`       - ${o.sel} [${o.left}..${o.right}] w=${o.width} +${o.overBy}px (${o.reason})`);
      if (res.offenders.length > 10) console.log(`       ... +${res.offenders.length - 10}개 더`);
    }
  }
  // 내용 폭으로 줄어드는 자리에서 컴포넌트가 무너지지 않는지(예: 카드 자체의 container-type)
  const shrinkRan = !only.length || only.includes('shrinkwrap');
  if (shrinkRan) {
    const collapsed = await page.evaluate(() => [...document.querySelectorAll('[data-fx-min-width]')]
      .map((el) => ({ sel: el.className, width: Math.round(el.getBoundingClientRect().width), min: Number(el.dataset.fxMinWidth) }))
      .filter((r) => r.width < r.min));
    report.shrinkwrap = collapsed;
    totalOff += collapsed.length;
    console.log(`${collapsed.length ? 'FAIL' : 'PASS'} shrinkwrap  collapsed=${collapsed.length}`);
    for (const c of collapsed) console.log(`       - .${c.sel} w=${c.width} < ${c.min}px`);
  }
  if (shrinkRan) executedCases++;
  if (shotDir) {
    fs.mkdirSync(shotDir, { recursive: true });
    await page.screenshot({ path: path.join(shotDir, 'fixtures-1280.png'), fullPage: true });
  }
  await close();
  // 열 수 요약(card/grid): 가장 좁은 폭 vs 가장 넓은 폭
  report.columnSummary = {};
  for (const g of ['card', 'grid']) {
    const rows = report.fixtures.filter((f) => f.component === g && f.columns.length);
    if (rows.length) {
      const minW = rows.reduce((a, b) => (a.width <= b.width ? a : b));
      const maxW = rows.reduce((a, b) => (a.width >= b.width ? a : b));
      report.columnSummary[g] = { [`${minW.width}px`]: minW.columns, [`${maxW.width}px`]: maxW.columns };
      console.log(`열 수 ${g}: ${minW.width}px=[${minW.columns}] -> ${maxW.width}px=[${maxW.columns}]`);
    }
  }
  report.fixtureOffenders = totalOff;
  report.executedCases = executedCases;
  if (executedCases === 0) {
    console.error('[오류] 실행된 케이스가 0건입니다(픽스처 섹션 누락?). 통과로 처리하지 않습니다.');
    fatal = true;
    return false;
  }
  console.log(`FIXTURES: ${totalOff ? 'offenders=' + totalOff : 'PASS'} (케이스 ${executedCases}건)${reportOnly ? ' (report-only)' : ''}`);
  return totalOff === 0;
}

// ---------- 스크린샷 전용(--screenshots 단독) ----------
async function runShots(browser, origin) {
  fs.mkdirSync(shotDir, { recursive: true });
  for (const w of SHOT_WIDTHS) {
    const { page, close } = await newPage(browser, origin, w);
    await page.goto(`${origin}/index.html`, { waitUntil: 'load' });
    await hydrateByScrolling(page);
    await page.screenshot({ path: path.join(shotDir, `index-${w}.png`) });
    await close();
  }
}

// ---------- main ----------
const server = await startServer();
const origin = `http://127.0.0.1:${server.address().port}`;
const browser = await launch();
const report = { generatedAt: new Date().toISOString(), origin: 'http://127.0.0.1:<free-port>', mode: { page: modePage, fixtures: modeFixtures, only, reportOnly } };
let ok = true;
let fatal = false;
try {
  if (modePage) ok = (await runPage(browser, origin, report)) && ok;
  else if (shotDir && !modeFixtures) await runShots(browser, origin);
  if (modeFixtures) {
    const fx = await runFixtures(browser, origin, report);
    if (!reportOnly) ok = fx && ok;
  }
} finally {
  await browser.close();
  server.close();
}
if (jsonPath) {
  fs.mkdirSync(path.dirname(path.resolve(jsonPath)), { recursive: true });
  fs.writeFileSync(jsonPath, JSON.stringify(report, null, 2) + '\n', 'utf8');
  console.log(`리포트 저장: ${jsonPath}`);
}
process.exit(ok && !fatal ? 0 : 1);
