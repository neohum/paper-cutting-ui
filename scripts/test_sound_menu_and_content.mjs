import { chromium } from 'playwright-core';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

async function testSoundMenuAndContent() {
  console.log('Testing Paper Sound Sidebar Menu Button & Content Studio...');

  const browser = await chromium.launch({
    headless: true,
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
  });

  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 }
  });
  const page = await context.newPage();

  const fileUrl = 'file:///' + path.join(projectRoot, 'index.html').replace(/\\/g, '/');
  console.log('Navigating to:', fileUrl);
  await page.goto(fileUrl, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(1000);

  // 1. Verify Sidebar Menu Button
  const soundMenuItem = await page.$('a.pc-sidebar-item[data-target="paper-sound-studio"]');
  if (!soundMenuItem) {
    throw new Error('❌ Sidebar menu button for "paper-sound-studio" not found!');
  }
  console.log('✅ Found sidebar menu item for paper-sound-studio');

  // 2. Click the Sidebar Menu Button
  console.log('Clicking sidebar menu button for paper-sound-studio...');
  await soundMenuItem.click();
  await page.waitForTimeout(600);

  // Check URL hash or view active state
  const hash = await page.evaluate(() => window.location.hash);
  console.log('Current URL hash after click:', hash);

  // 3. Verify Content Section Presence
  const studioSection = await page.$('#paper-sound-studio');
  if (!studioSection) {
    throw new Error('❌ #paper-sound-studio content section not found!');
  }
  console.log('✅ Found #paper-sound-studio content section');

  // Verify it is visible
  const isVisible = await studioSection.isVisible();
  console.log('Is #paper-sound-studio visible:', isVisible);
  if (!isVisible) {
    throw new Error('❌ #paper-sound-studio content section is not visible!');
  }

  // 4. Verify 8 Sound Cards in Content
  const studioCards = await page.$$('#paper-sound-studio .pc-sound-card');
  console.log(`Found ${studioCards.length} sound cards in content`);
  if (studioCards.length !== 8) {
    throw new Error(`❌ Expected 8 sound cards, but found ${studioCards.length}`);
  }

  // 5. Test "소리 듣기" (Play Sound) button on Hanji card
  const hanjiPlayBtn = await page.$('.pc-sound-card[data-paper="hanji"] .pc-btn-play-sound');
  if (!hanjiPlayBtn) {
    throw new Error('❌ Play button on Hanji card not found!');
  }
  await hanjiPlayBtn.click();
  await page.waitForTimeout(200);
  console.log('✅ Clicked Play Sound on Hanji card');

  // 6. Test "적용" (Apply) button on Vellum card
  const vellumApplyBtn = await page.$('.pc-sound-card[data-paper="vellum"] .pc-btn-apply-paper');
  if (!vellumApplyBtn) {
    throw new Error('❌ Apply button on Vellum card not found!');
  }
  await vellumApplyBtn.click();
  await page.waitForTimeout(300);

  const activePaper = await page.evaluate(() => localStorage.getItem('pc_paper_sound_type'));
  console.log('Active paper type after clicking apply:', activePaper);
  if (activePaper !== 'vellum') {
    throw new Error(`❌ Expected active paper to be 'vellum', but got '${activePaper}'`);
  }
  console.log('✅ Applied Vellum paper successfully through content button');

  // 7. Test Scratch Pad on Kraft card
  const kraftScratchPad = await page.$('.pc-sound-card[data-paper="kraft"] .pc-sound-scratch-pad');
  if (!kraftScratchPad) {
    throw new Error('❌ Scratch pad on Kraft card not found!');
  }
  await kraftScratchPad.click();
  await page.waitForTimeout(200);
  console.log('✅ Clicked Scratch Pad on Kraft card');

  // 8. Test Master Toggle in Content
  const masterToggle = await page.$('#studio-sound-master-toggle');
  if (!masterToggle) {
    throw new Error('❌ #studio-sound-master-toggle not found!');
  }
  await masterToggle.click();
  await page.waitForTimeout(200);
  const soundAfterToggle = await page.evaluate(() => localStorage.getItem('pc_paper_sound') === 'true');
  console.log('Sound state after master toggle in studio:', soundAfterToggle);

  // Turn it back ON
  await masterToggle.click();
  await page.waitForTimeout(200);

  // 9. Capture Screenshots
  // Screenshot of sidebar with menu button
  const sidebar = await page.$('#pc-sidebar-nav');
  if (sidebar) {
    await sidebar.screenshot({ path: path.join(projectRoot, 'evidence-sound-menu.png') });
    console.log('✅ Captured evidence-sound-menu.png');
  }

  // Scroll studio section into view and screenshot
  await studioSection.scrollIntoViewIfNeeded();
  await page.waitForTimeout(300);
  await studioSection.screenshot({ path: path.join(projectRoot, 'evidence-sound-studio-content.png') });
  console.log('✅ Captured evidence-sound-studio-content.png');

  await browser.close();
  console.log('🎉 All Sidebar Menu & Content Studio tests passed successfully!');
}

testSoundMenuAndContent().catch(err => {
  console.error(err);
  process.exit(1);
});
