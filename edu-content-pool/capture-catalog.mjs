#!/usr/bin/env node
// 카탈로그 실행 증거: 데스크톱·모바일 캡처, 차시 상세, 활동지 인쇄 PDF, 콘솔 오류·가로 넘침 검사.
// 사용: node edu-content-pool/capture-catalog.mjs [출력 디렉터리]
import { chromium } from 'playwright-core';
import { mkdirSync, existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const out = resolve(process.argv[2] ?? join(here, '../evidence/edu-content-pool'));
mkdirSync(out, { recursive: true });
const chrome = process.env.CHROME_PATH ?? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const url = pathToFileURL(join(here, 'catalog.html')).href;

const browser = await chromium.launch({ executablePath: existsSync(chrome) ? chrome : undefined, headless: true });
const problems = [];
const report = {};

async function open(viewport) {
  const page = await browser.newPage({ viewport });
  page.on('console', (m) => { if (m.type() === 'error') problems.push(`console: ${m.text()}`); });
  page.on('pageerror', (e) => problems.push(`pageerror: ${e.message}`));
  await page.goto(url, { waitUntil: 'networkidle' });
  return page;
}

const overflow = (page) => page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);

// 데스크톱: 2학년 수학 → '시각' 검색 → 첫 차시 상세
const page = await open({ width: 1440, height: 900 });
await page.evaluate(() => localStorage.clear());
await page.click('.grade-tab[data-grade="2"]');
await page.click('[data-subject="수학"]');
await page.screenshot({ path: join(out, '01-grade2-math.png') });
await page.fill('#search', '시각');
const rows = await page.locator('.lesson-row').count();
report.searchRowsForClock = rows;
await page.locator('.lesson-row').first().click();
await page.waitForSelector('#detail:not([hidden])');
await page.waitForTimeout(400); // 패널 슬라이드 애니메이션이 끝난 뒤 캡처
report.detailTitle = await page.textContent('#detail h2');
report.flowMinutes = await page.$$eval('.flow__phase small', (els) => els.reduce((n, e) => n + parseInt(e.textContent, 10), 0));
report.tool = await page.textContent('.mode-card--digital strong').catch(() => null);
report.siteLinks = await page.locator('.mode-card--site a').count();
report.videoLinks = await page.locator('.mode-card--video a').count();
await page.screenshot({ path: join(out, '02-lesson-detail-clock.png') });
report.desktopOverflowPx = await overflow(page);

// 인쇄: 화면 UI는 빠지고 classroom-ui 학습지만 남는지
await page.emulateMedia({ media: 'print' });
report.printVisibleAppUi = await page.evaluate(() => getComputedStyle(document.querySelector('.app')).display !== 'none');
report.printWorksheetQuestions = await page.locator('#worksheet .edu-exam-q').count();
await page.pdf({ path: join(out, '03-worksheet.pdf'), format: 'A4', printBackground: true });
await page.screenshot({ path: join(out, '03-worksheet-print.png'), fullPage: true });
await page.emulateMedia({ media: 'screen' });

// 학년·과목 전수 순회(초1~고3 12개 탭): 모든 조합이 단원을 그린다.
// 창체는 programs-data.js(EDU_PROGRAMS)에 그 학년 단원이 있을 때만 단원을 기대한다 — 없으면 '준비 중' 안내가 떠야 한다
report.gradeTabs = await page.$$eval('[data-grade]', (els) => els.filter((e) => e.classList.contains('grade-tab')).map((e) => e.querySelector('.grade-tab__n').textContent));
report.emptyCombos = await page.evaluate(async () => {
  const empty = [];
  const ccGrades = new Set(((window.EDU_PROGRAMS || {}).units || []).map((u) => u.g));
  document.querySelector('#search').value = '';
  document.querySelector('#search').dispatchEvent(new Event('input'));
  for (let g = 1; g <= 12; g++) {
    document.querySelector(`.grade-tab[data-grade="${g}"]`).click();
    for (const b of [...document.querySelectorAll('[data-subject]')].map((x) => x.dataset.subject)) {
      document.querySelector(`[data-subject="${b}"]`).click();
      const rows = document.querySelectorAll('.lesson-row').length;
      if (b === '창체' && !ccGrades.has(g)) { if (rows || !document.querySelector('#units .empty')) empty.push(`${g}-${b}(준비 중 안내 없음)`); continue; }
      if (rows === 0) empty.push(`${g}-${b}`);
    }
  }
  return empty;
});

// 모바일(크롬북 세로·폰 폭)
const mobile = await open({ width: 375, height: 812 });
report.mobileOverflowPx = await overflow(mobile);
await mobile.screenshot({ path: join(out, '04-mobile.png') });
const chromebook = await open({ width: 1366, height: 768 });
report.chromebookOverflowPx = await overflow(chromebook);
await chromebook.screenshot({ path: join(out, '05-chromebook-1366.png') });

await browser.close();
report.problems = problems;
console.log(JSON.stringify(report, null, 2));
const failed = problems.length > 0 || report.desktopOverflowPx > 0 || report.mobileOverflowPx > 0
  || report.flowMinutes !== 40 || report.printVisibleAppUi || report.printWorksheetQuestions < 2 || report.emptyCombos.length > 0
  || report.gradeTabs.join() !== '초1,초2,초3,초4,초5,초6,중1,중2,중3,고1,고2,고3';
process.exit(failed ? 1 : 0);
