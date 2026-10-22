import { chromium } from 'playwright-core';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

async function testSoundRemovalAndContent() {
  console.log('Testing Removal of Sound from Sidebar and Preservation of Content Studio...');

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

  // 1. Verify that sidebar NO LONGER has paper sound menu button
  const soundMenuItem = await page.$('a.pc-sidebar-item[data-target="paper-sound-studio"]');
  if (soundMenuItem) {
    throw new Error('❌ Sidebar menu button for "paper-sound-studio" is still present!');
  }
  console.log('✅ Verified: Sidebar menu button for "paper-sound-studio" successfully removed.');

  // 2. Verify that sidebar NO LONGER has sound widget
  const soundWidget = await page.$('#pc-sidebar-sound-widget');
  if (soundWidget) {
    throw new Error('❌ Sidebar sound widget "#pc-sidebar-sound-widget" is still present!');
  }
  console.log('✅ Verified: Sidebar sound widget successfully removed.');

  // 3. Verify neighbor menu items are intact
  const textureItem = await page.$('a.pc-sidebar-item[data-target="texture-showcase"]');
  const alertItem = await page.$('a.pc-sidebar-item[data-target="paper-alerts-toasts"]');
  if (!textureItem || !alertItem) {
    throw new Error('❌ Neighbor sidebar menu items are missing!');
  }
  console.log('✅ Verified: Neighbor sidebar menu items (texture, alert) are present and intact.');

  // 4. Verify Content Section Presence (#paper-sound-studio)
  const studioSection = await page.$('#paper-sound-studio');
  if (!studioSection) {
    throw new Error('❌ #paper-sound-studio content section was accidentally deleted!');
  }
  console.log('✅ Verified: #paper-sound-studio content section is preserved.');

  // 5. Verify 8 Sound Cards in Content
  const studioCards = await page.$$('#paper-sound-studio .pc-sound-card');
  console.log(`Found ${studioCards.length} sound cards in content`);
  if (studioCards.length !== 8) {
    throw new Error(`❌ Expected 8 sound cards, but found ${studioCards.length}`);
  }
  console.log('✅ Verified: All 8 paper sound cards exist in content studio.');

  // 6. Test interaction in content studio
  const hanjiPlayBtn = await page.$('.pc-sound-card[data-paper="hanji"] .pc-btn-play-sound');
  if (!hanjiPlayBtn) {
    throw new Error('❌ Play button on Hanji card not found!');
  }
  await hanjiPlayBtn.click();
  await page.waitForTimeout(200);
  console.log('✅ Clicked Play Sound on Hanji card in content studio.');

  // 7. Check for runtime JS errors
  if (consoleErrors.length > 0) {
    console.error('Console errors encountered:', consoleErrors);
    throw new Error('❌ Encountered JavaScript errors on page!');
  }
  console.log('✅ No JavaScript errors detected.');

  // 8. Capture Screenshots
  const sidebar = await page.$('#pc-sidebar-nav');
  if (sidebar) {
    await sidebar.screenshot({ path: path.join(projectRoot, 'evidence-sidebar-no-sound.png') });
    console.log('✅ Captured evidence-sidebar-no-sound.png');
  }

  await studioSection.scrollIntoViewIfNeeded();
  await page.waitForTimeout(300);
  await studioSection.screenshot({ path: path.join(projectRoot, 'evidence-content-sound-studio.png') });
  console.log('✅ Captured evidence-content-sound-studio.png');

  await browser.close();
  console.log('🎉 All tests passed successfully!');
}

testSoundRemovalAndContent().catch(err => {
  console.error(err);
  process.exit(1);
});
