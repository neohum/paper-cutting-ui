import { chromium } from 'playwright-core';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

async function verifyUI4Fixes() {
  console.log('🚀 Starting Verification for 4 User-Requested Fixes...');

  const chromePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
  const browser = await chromium.launch({
    headless: true,
    executablePath: chromePath
  });

  const page = await browser.newPage({
    viewport: { width: 1440, height: 1080 }
  });

  await page.goto('http://127.0.0.1:3000/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(600);

  // 1. Initial State Screenshot (드롭다운 닫힘, 헤더 좌우 정렬, 개요&히어로 전폭, 사이드바 버튼)
  await page.screenshot({ path: path.join(projectRoot, 'evidence/verify_01_initial.png') });
  console.log('✅ Screenshot 1: evidence/verify_01_initial.png saved');

  // 2. Test Dropdown Open & z-index
  const dropdownTrigger = await page.$('#header-paper-dropdown-trigger');
  if (dropdownTrigger) {
    await dropdownTrigger.click();
    await page.waitForTimeout(400);

    const dropdownMenu = await page.$('#header-paper-dropdown-menu');
    const isVisible = await dropdownMenu?.isVisible();
    const boundingBox = await dropdownMenu?.boundingBox();
    console.log(`Dropdown opened visible: ${isVisible}, boundingBox:`, boundingBox);

    await page.screenshot({ path: path.join(projectRoot, 'evidence/verify_02_dropdown_opened.png') });
    console.log('✅ Screenshot 2: evidence/verify_02_dropdown_opened.png saved');
  } else {
    console.error('❌ Dropdown trigger #header-paper-dropdown-trigger not found');
  }

  // 3. Test Sidebar Menu Labels Truncation Check
  const sidebarItems = await page.$$('.pc-sidebar-item');
  console.log(`Found ${sidebarItems.length} sidebar items`);
  for (let i = 0; i < sidebarItems.length; i++) {
    const item = sidebarItems[i];
    const textEl = await item.$('.pc-sidebar-item-text');
    if (textEl) {
      const text = await textEl.textContent();
      const scrollWidth = await textEl.evaluate(el => el.scrollWidth);
      const clientWidth = await textEl.evaluate(el => el.clientWidth);
      const isTruncated = scrollWidth > clientWidth;
      console.log(`- Item ${i + 1}: "${text.trim()}" (scroll: ${scrollWidth}px, client: ${clientWidth}px) => ${isTruncated ? '⚠️ TRUNCATED' : '✅ OK'}`);
    }
  }

  // 4. Test Header Left-Right Alignment
  const headerLeftBox = await (await page.$('.pc-site-header-left'))?.boundingBox();
  const headerRightBox = await (await page.$('.pc-site-header-right'))?.boundingBox();
  const headerInnerBox = await (await page.$('.pc-site-header-inner'))?.boundingBox();
  console.log('Header Layout Check:');
  console.log('  Inner Width:', headerInnerBox?.width);
  console.log('  Left element X:', headerLeftBox?.x);
  console.log('  Right element X:', headerRightBox?.x, 'Right edge:', (headerRightBox?.x || 0) + (headerRightBox?.width || 0));

  // 5. Test Hero 3-tier Layout
  const heroContent = await page.$('.pc-hero-content');
  if (heroContent) {
    const heroBox = await heroContent.boundingBox();
    console.log('Hero Content Width:', heroBox?.width);
  }

  await browser.close();
  console.log('🎉 UI Verification Complete!');
}

verifyUI4Fixes().catch(err => {
  console.error('Test error:', err);
  process.exit(1);
});
