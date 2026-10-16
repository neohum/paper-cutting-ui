import { chromium } from 'playwright-core';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

async function testUnifiedComponents() {
  console.log('Testing Unified CSS Components in index.html...');

  const browser = await chromium.launch({
    headless: true,
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
  });

  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 }
  });
  const page = await context.newPage();

  const consoleErrors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') consoleErrors.push(msg.text());
  });
  page.on('pageerror', err => {
    consoleErrors.push(err.message);
  });

  const fileUrl = 'file:///' + path.join(projectRoot, 'index.html').replace(/\\/g, '/');
  console.log('Navigating to:', fileUrl);
  await page.goto(fileUrl, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(1000);

  // 1. Verify PC Components section
  const compSection = await page.$('#pc-components');
  if (!compSection) throw new Error('#pc-components not found');
  console.log('✅ Found #pc-components');

  // Verify suite headers
  const suiteHeaders = await page.$$('#pc-components .pc-comp-group.is-suite-header');
  console.log(`Found ${suiteHeaders.length} suite headers with .is-suite-header`);
  if (suiteHeaders.length < 5) throw new Error('Expected at least 5 suite headers with .is-suite-header');

  // 2. Verify Badges: Check that pc-badge--tag is rendered
  const tagBadges = await page.$$('#pc-components .pc-badge.pc-badge--tag');
  console.log(`Found ${tagBadges.length} tag badges (.pc-badge.pc-badge--tag)`);
  if (tagBadges.length < 15) throw new Error('Expected at least 15 tag badges');

  // 3. Verify dropdown arrow icon
  const dropdownArrow = await page.$('.pc-dropdown-trigger .arrow-icon.fi-rr-angle-small-down');
  if (!dropdownArrow) throw new Error('Dropdown arrow icon not found or not using Flaticon!');
  console.log('✅ Verified dropdown arrow icon uses Flaticon fi-rr-angle-small-down');

  // 4. Test dropdown interaction
  const dropdownTrigger = await page.$('.pc-dropdown-trigger');
  if (dropdownTrigger) {
    await dropdownTrigger.click();
    await page.waitForTimeout(200);
    const isOpen = await page.evaluate(() => document.querySelector('.pc-dropdown-custom').classList.contains('is-open'));
    console.log('Dropdown is-open after click:', isOpen);
    await dropdownTrigger.click();
    await page.waitForTimeout(150);
  }

  // 5. Verify book filter pills
  const bookFilterPills = await page.$('.pc-filter-pills-row[aria-label="도서 형식 필터"]');
  if (!bookFilterPills) throw new Error('Book filter pills row not found');
  console.log('✅ Verified book filter pills use pc-filter-pills-row');

  // 6. Check console errors
  if (consoleErrors.length > 0) {
    console.error('Console errors:', consoleErrors);
    throw new Error('JavaScript console errors encountered!');
  }
  console.log('✅ Zero console errors detected');

  // 7. Capture screenshots of components section and book section
  await compSection.scrollIntoViewIfNeeded();
  await page.waitForTimeout(300);
  await compSection.screenshot({ path: path.join(projectRoot, 'evidence-pc-components-unified.png') });
  console.log('✅ Captured evidence-pc-components-unified.png');

  const bookSection = await page.$('#book-vec-reader-suite');
  if (bookSection) {
    await bookSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(300);
    await bookSection.screenshot({ path: path.join(projectRoot, 'evidence-book-suite-unified.png') });
    console.log('✅ Captured evidence-book-suite-unified.png');
  }

  await browser.close();
  console.log('🎉 Unified components test passed successfully!');
}

testUnifiedComponents().catch(err => {
  console.error(err);
  process.exit(1);
});
