#!/usr/bin/env node
/*
 * 수업 게임 검사: 헤드리스 Chrome 으로 file:// 에서 열어 끝까지 실제 입력으로 플레이한다.
 *   node check-game.cjs <게임 폴더 또는 index.html> [결과 폴더]
 * 필요: playwright (또는 playwright-core + 설치된 Chromium). NODE_PATH 로 찾아도 된다.
 * 종료코드 0 = 모든 항목 통과, 1 = 하나라도 실패.
 *
 * 두 번 돈다:
 *   - 휴대폰 390×844, 터치, 포인터 경로 (window.lessonGame.test.nextAction('pointer'))
 *   - 노트북 1280×800, 키보드만 (Tab 으로 시작 버튼 → Enter, 이후 nextAction('keyboard'))
 */
'use strict';
const fs = require('fs');
const path = require('path');
const { pathToFileURL } = require('url');

let chromium;
try { ({ chromium } = require('playwright')); } catch (e) { ({ chromium } = require('playwright-core')); }

const target = path.resolve(process.argv[2] || '.');
const htmlPath = fs.statSync(target).isDirectory() ? path.join(target, 'index.html') : target;
const outDir = path.resolve(process.argv[3] || path.join(path.dirname(htmlPath), 'check'));
fs.mkdirSync(outDir, { recursive: true });
const url = pathToFileURL(htmlPath).href + '?seed=7';

const RUNS = [
  { name: 'phone-390', viewport: { width: 390, height: 844 }, hasTouch: true, isMobile: true, mode: 'pointer' },
  { name: 'laptop-1280', viewport: { width: 1280, height: 800 }, hasTouch: false, isMobile: false, mode: 'keyboard' }
];

async function smallTargets(page) {
  return page.evaluate(() => {
    const sel = 'button, a[href], summary, input, select, [role="button"]';
    return [...document.querySelectorAll(sel)]
      .filter((el) => el.offsetParent !== null && !el.closest('[hidden]'))
      .map((el) => { const r = el.getBoundingClientRect(); return { text: (el.textContent || el.getAttribute('aria-label') || '').trim().slice(0, 30), w: Math.round(r.width), h: Math.round(r.height) }; })
      .filter((b) => b.w < 44 || b.h < 44);
  });
}

// body 에 overflow-x:hidden 이 있으면 스크롤 폭은 0 이어도 내용이 잘린다. 보이는 요소의 오른쪽 끝도 잰다.
async function overflowX(page) {
  return page.evaluate(() => {
    const vw = document.documentElement.clientWidth;
    let worst = Math.max(0, document.documentElement.scrollWidth - vw);
    for (const el of document.body.querySelectorAll('*')) {
      if (el.closest('[hidden]') || el.offsetParent === null) continue;
      const cs = getComputedStyle(el);
      if (cs.position === 'absolute' && cs.clip !== 'auto') continue; // 화면낭독기 전용
      const r = el.getBoundingClientRect();
      if (r.width === 0) continue;
      worst = Math.max(worst, Math.round(r.right - vw), Math.round(-r.left));
    }
    return Math.max(0, worst);
  });
}

async function runOnce(browser, run) {
  const ctx = await browser.newContext({ viewport: run.viewport, hasTouch: run.hasTouch, isMobile: run.isMobile, deviceScaleFactor: 2 });
  const page = await ctx.newPage();
  const consoleErrors = [];
  const external = [];
  page.on('console', (m) => { if (m.type() === 'error') consoleErrors.push(m.text()); });
  page.on('pageerror', (e) => consoleErrors.push(String(e)));
  page.on('request', (r) => { if (!/^(file|data|blob|about):/.test(r.url())) external.push(r.url()); });

  const r = { name: run.name, checks: {}, numbers: {}, shots: [] };
  const shot = async (label) => {
    const p = path.join(outDir, `${run.name}-${label}.png`);
    await page.screenshot({ path: p, fullPage: true });
    r.shots.push(p);
  };

  await page.goto(url, { waitUntil: 'load' });
  await page.waitForTimeout(300);
  const leftovers = await page.evaluate(() => (document.title + ' ' + document.body.innerText).match(/\{\{[^}]*\}\}/g) || []);
  r.checks.noPlaceholders = leftovers.length === 0;
  r.numbers.placeholders = leftovers.length;
  r.checks.introShown = await page.evaluate(() => window.lessonGame && window.lessonGame.phase === 'intro' && !document.querySelector('#intro').hidden);
  await shot('1-intro');

  if (run.mode === 'keyboard') {
    const onStart = () => page.evaluate(() => !!document.activeElement && document.activeElement.getAttribute('data-action') === 'start');
    let found = await onStart(); // data-autofocus 로 이미 포커스가 있을 수 있다
    for (let i = 0; i < 15 && !found; i++) {
      await page.keyboard.press('Tab');
      found = await onStart();
    }
    r.checks.startReachableByKeyboard = found;
    if (found) await page.keyboard.press('Enter');
  } else {
    await page.click('[data-action="start"]');
  }
  await page.waitForTimeout(100);
  r.checks.playStarted = await page.evaluate(() => window.lessonGame.phase === 'play');

  let steps = 0, inputs = 0, waits = 0, midShot = false;
  for (; steps < 400; steps++) {
    const act = await page.evaluate((m) => window.lessonGame.test.nextAction(m), run.mode);
    if (!act) break;
    if (act.wait) { waits++; await page.waitForTimeout(act.wait); continue; }
    // 애니메이션이 멈춘 상태(다음 입력을 기다리는 때)에서 놀이 화면을 잰다
    if (!midShot && inputs >= 3) {
      r.numbers.smallTargetsInPlay = (await smallTargets(page)).length;
      r.numbers.overflowXInPlay = await overflowX(page);
      await shot('2-play');
      midShot = true;
    }
    if (act.click) await page.click(act.click);
    else if (act.key) await page.keyboard.press(act.key);
    inputs++;
    await page.waitForTimeout(40);
  }
  r.checks.playScreenMeasured = midShot;
  r.numbers.inputSteps = inputs;
  r.numbers.waits = waits;
  await page.waitForTimeout(300);
  r.checks.reachedDebrief = await page.evaluate(() => window.lessonGame.phase === 'debrief' && !document.querySelector('#debrief').hidden);
  r.numbers.debriefChars = await page.evaluate(() => document.querySelector('#debrief').innerText.trim().length);
  r.checks.debriefHasContent = r.numbers.debriefChars > 80;
  const small = await smallTargets(page);
  r.numbers.smallTargetsInDebrief = small.length;
  r.numbers.overflowXInDebrief = await overflowX(page);
  r.checks.touchTargets44 = small.length === 0 && (r.numbers.smallTargetsInPlay || 0) === 0;
  r.checks.noHorizontalScroll = r.numbers.overflowXInDebrief === 0 && (r.numbers.overflowXInPlay || 0) === 0;
  await shot('3-debrief');

  r.numbers.consoleErrors = consoleErrors.length;
  r.numbers.externalRequests = external.length;
  r.checks.zeroConsoleErrors = consoleErrors.length === 0;
  r.checks.zeroExternalRequests = external.length === 0;
  r.consoleErrors = consoleErrors;
  r.external = external;
  if (small.length) r.smallTargets = small;
  await ctx.close();
  return r;
}

(async () => {
  const browser = await chromium.launch();
  const results = [];
  try {
    for (const run of RUNS) results.push(await runOnce(browser, run));
  } finally {
    await browser.close();
  }
  const ok = results.every((r) => Object.values(r.checks).every(Boolean));
  const report = { url, ok, results };
  fs.writeFileSync(path.join(outDir, 'report.json'), JSON.stringify(report, null, 2));
  for (const r of results) {
    console.log(`\n[${r.name}]`);
    for (const [k, v] of Object.entries(r.checks)) console.log(`  ${v ? 'PASS' : 'FAIL'}  ${k}`);
    console.log('  numbers', JSON.stringify(r.numbers));
    if (r.consoleErrors.length) console.log('  console:', r.consoleErrors);
    if (r.external.length) console.log('  external:', r.external);
    if (r.smallTargets) console.log('  small targets:', r.smallTargets);
  }
  console.log(`\n${ok ? '모두 통과' : '실패 있음'} · 보고서 ${path.join(outDir, 'report.json')}`);
  process.exit(ok ? 0 : 1);
})().catch((e) => { console.error(e); process.exit(1); });
