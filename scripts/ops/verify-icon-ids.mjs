#!/usr/bin/env node
/**
 * verify-icon-ids.mjs — 페이퍼컷 아이콘 복제본의 SVG id가 문서 안에서 겹치지 않는지 실측한다.
 *
 * url(#id)는 문서에서 처음 나오는 같은 id로 연결되므로, 복제본끼리 id를 공유하면 첫 복제본이
 * display:none 영역에 있을 때 같은 아이콘이 전부 사라진다. 이 회귀를 막는다.
 *
 *   node scripts/ops/verify-icon-ids.mjs            # 픽스처 + index.html 검사
 */
import { chromium } from 'playwright-core';
import path from 'node:path';
import { pathToFileURL, fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');

async function launch() {
  try {
    return await chromium.launch({ channel: 'chrome' });
  } catch {
    return chromium.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe' });
  }
}

const auditIds = () => {
  const ids = [...document.querySelectorAll('[id^="ps-"]')].map((n) => n.id);
  const seen = new Set();
  const dup = new Set();
  for (const id of ids) (seen.has(id) ? dup : seen).add(id);
  return { total: ids.length, duplicates: [...dup].slice(0, 10), duplicateCount: dup.size };
};

const browser = await launch();
let ok = true;
try {
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });

  await page.goto(pathToFileURL(path.join(root, 'tests/icons/hidden-first.html')).href);
  await page.waitForFunction(() => document.documentElement.getAttribute('data-ready') === '1');
  const fx = await page.evaluate(auditIds);
  const ownRefs = await page.evaluate(() => {
    const svg = document.querySelector('#visible-icon svg');
    const refs = [...svg.querySelectorAll('[filter]')].map((n) => n.getAttribute('filter').match(/#([^)]+)/)[1]);
    return refs.length > 0 && refs.every((id) => svg.contains(document.getElementById(id)));
  });
  const fxPass = fx.duplicateCount === 0 && ownRefs;
  ok &&= fxPass;
  console.log(`${fxPass ? 'PASS' : 'FAIL'} hidden-first  ids=${fx.total} duplicates=${fx.duplicateCount} visibleIconUsesOwnFilters=${ownRefs}`);

  await page.goto(pathToFileURL(path.join(root, 'index.html')).href, { waitUntil: 'load' });
  await page.waitForTimeout(1200);
  await page.evaluate(async () => {
    const h = document.documentElement.scrollHeight;
    for (let y = 0; y < h; y += 700) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 25)); }
  });
  await page.waitForTimeout(800);
  const idx = await page.evaluate(auditIds);
  const idxPass = idx.duplicateCount === 0;
  ok &&= idxPass;
  console.log(`${idxPass ? 'PASS' : 'FAIL'} index.html    ids=${idx.total} duplicates=${idx.duplicateCount}${idx.duplicateCount ? ' e.g. ' + idx.duplicates.join(', ') : ''}`);
} finally {
  await browser.close();
}
process.exit(ok ? 0 : 1);
