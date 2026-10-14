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

// 수화 검사: 화면에 그려지는([data-icon]) 요소는 실제로 svg를 가져야 하고, svg 안의 url(#id)/href="#id"는
// 같은 svg 안의 요소로 풀려야 한다(문서 다른 곳의 같은 id로 새면 첫 복제본이 숨겨질 때 아이콘이 사라진다).
const MIN_HYDRATED_RATIO = 0.95;
const auditHydration = () => {
  const rendered = [...document.querySelectorAll('[data-icon]')].filter((el) => {
    const r = el.getBoundingClientRect();
    return r.width > 0 && r.height > 0;
  });
  const hydrated = rendered.filter((el) => el.querySelector('svg'));
  const missing = rendered.filter((el) => !el.querySelector('svg')).slice(0, 5).map((el) => el.getAttribute('data-icon'));
  const unresolved = [];
  let refs = 0;
  for (const svg of document.querySelectorAll('[data-icon] svg')) {
    for (const node of [svg, ...svg.querySelectorAll('*')]) {
      for (const attr of node.attributes) {
        const ids = [...attr.value.matchAll(/url\(\s*['"]?#([^)'"\s]+)/g)].map((m) => m[1]);
        if ((attr.name === 'href' || attr.name === 'xlink:href') && attr.value.startsWith('#')) ids.push(attr.value.slice(1));
        for (const id of ids) {
          refs++;
          const target = document.getElementById(id);
          if (!target || !svg.contains(target)) unresolved.push(`${id}@${el_name(svg)}`);
        }
      }
    }
  }
  function el_name(svg) { return (svg.closest('[data-icon]') || svg).getAttribute('data-icon') || '?'; }
  return { rendered: rendered.length, hydrated: hydrated.length, missing, refs, unresolvedCount: unresolved.length, unresolved: unresolved.slice(0, 5) };
};

const indexArg = process.argv.find((a) => a.startsWith('--index='));
const indexFile = indexArg ? path.resolve(indexArg.slice('--index='.length)) : path.join(root, 'index.html');

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

  await page.goto(pathToFileURL(indexFile).href, { waitUntil: 'load' });
  await page.waitForTimeout(1200);
  // 1단계: 페이지가 스스로 수화했는지. 첫 화면(헤더·사이드바·히어로)은 즉시 수화 대상이라 타이밍과 무관하게 100%여야 한다.
  const auto = await page.evaluate(() => {
    const inFirstScreen = [...document.querySelectorAll('[data-icon]')].filter((el) => {
      const r = el.getBoundingClientRect();
      return r.width > 0 && r.height > 0 && r.bottom > 0 && r.top < window.innerHeight && r.right > 0 && r.left < window.innerWidth;
    });
    return { first: inFirstScreen.length, firstHydrated: inFirstScreen.filter((el) => el.querySelector('svg')).length,
      missing: inFirstScreen.filter((el) => !el.querySelector('svg')).slice(0, 5).map((el) => el.getAttribute('data-icon')) };
  });
  // 처음에 수화되지 않은 아이콘을 표시해 두고, 스크롤로 화면에 실제로 들어온 표시 대상이 자동 수화됐는지 본다.
  // (문서 전체 SVG 수처럼 범위가 다른 값끼리 비교하면 푸터 선수화 같은 다른 경로가 지연 수화 실패를 가린다.)
  await page.evaluate(() => {
    document.querySelectorAll('[data-icon]').forEach((el) => { if (!el.querySelector('svg')) el.setAttribute('data-vi-pending', ''); });
  });
  const lazy = { seen: 0, hydrated: 0, missing: [] };
  const docH = await page.evaluate(() => document.documentElement.scrollHeight);
  for (let k = 1; k <= 9; k++) {
    await page.evaluate((y) => window.scrollTo(0, y), Math.round((docH * k) / 10));
    await page.waitForTimeout(700);   // IntersectionObserver 콜백과 수화가 끝날 시간
    const st = await page.evaluate(() => {
      const inView = [...document.querySelectorAll('[data-vi-pending]')].filter((el) => {
        const r = el.getBoundingClientRect();
        return r.width > 0 && r.height > 0 && r.bottom > 0 && r.top < window.innerHeight;
      });
      const res = { seen: inView.length, hydrated: inView.filter((el) => el.querySelector('svg')).length,
        missing: inView.filter((el) => !el.querySelector('svg')).slice(0, 3).map((el) => el.getAttribute('data-icon')) };
      inView.forEach((el) => el.removeAttribute('data-vi-pending'));   // 같은 요소를 두 번 세지 않는다
      return res;
    });
    lazy.seen += st.seen; lazy.hydrated += st.hydrated; lazy.missing.push(...st.missing);
  }
  const lazyRatio = lazy.seen ? lazy.hydrated / lazy.seen : 0;
  const autoPass = auto.first > 0 && auto.firstHydrated === auto.first && lazy.seen > 0 && lazyRatio >= MIN_HYDRATED_RATIO;
  ok &&= autoPass;
  console.log(`${autoPass ? 'PASS' : 'FAIL'} index.html    auto: firstScreen=${auto.firstHydrated}/${auto.first} lazyInView=${lazy.hydrated}/${lazy.seen} (${(lazyRatio * 100).toFixed(1)}%, 최소 ${MIN_HYDRATED_RATIO * 100}%)${auto.missing.length ? ' 첫화면 미수화 e.g. ' + auto.missing.join(', ') : ''}${lazy.missing.length ? ' 지연 미수화 e.g. ' + lazy.missing.slice(0, 5).join(', ') : ''}`);
  // 2단계: id 무결성은 가장 많은 복제본이 공존하는 상태에서 잰다. 자동 수화 판정이 끝난 뒤에만 전부 수화한다.
  await page.evaluate(() => { if (typeof window.hydratePapercutIcons === 'function') window.hydratePapercutIcons(document); });
  await page.waitForTimeout(300);
  const idx = await page.evaluate(auditIds);
  const idxPass = idx.duplicateCount === 0;
  ok &&= idxPass;
  console.log(`${idxPass ? 'PASS' : 'FAIL'} index.html    ids=${idx.total} duplicates=${idx.duplicateCount}${idx.duplicateCount ? ' e.g. ' + idx.duplicates.join(', ') : ''}`);

  // 스크롤 후 다시 위로: 수화 여부는 화면 박스가 있는 요소만 센다
  const hy = await page.evaluate(auditHydration);
  const ratio = hy.rendered ? hy.hydrated / hy.rendered : 0;
  const hyPass = hy.rendered > 0 && ratio >= MIN_HYDRATED_RATIO && hy.refs > 0 && hy.unresolvedCount === 0;
  ok &&= hyPass;
  console.log(`${hyPass ? 'PASS' : 'FAIL'} index.html    hydrated=${hy.hydrated}/${hy.rendered} (${(ratio * 100).toFixed(1)}%, 최소 ${MIN_HYDRATED_RATIO * 100}%) refs=${hy.refs} unresolved=${hy.unresolvedCount}${hy.missing.length ? ' 미수화 e.g. ' + hy.missing.join(', ') : ''}${hy.unresolvedCount ? ' 미해결 e.g. ' + hy.unresolved.join(', ') : ''}`);
} finally {
  await browser.close();
}
process.exit(ok ? 0 : 1);
