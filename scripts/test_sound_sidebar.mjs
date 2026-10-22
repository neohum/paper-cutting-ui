import { chromium } from 'playwright-core';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

async function testSoundSidebar() {
  console.log('Testing Sidebar Paper Sound Widget & Multi-Stock Audio Synthesis...');

  const browser = await chromium.launch({
    headless: true,
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
  });

  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 }
  });
  const page = await context.newPage();

  // Load index.html
  const fileUrl = 'file:///' + path.join(projectRoot, 'index.html').replace(/\\/g, '/');
  console.log('Navigating to:', fileUrl);
  await page.goto(fileUrl, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(1000);

  // 1. Verify Sidebar Sound Widget presence
  const widget = await page.$('#pc-sidebar-sound-widget');
  if (!widget) {
    throw new Error('❌ #pc-sidebar-sound-widget not found in sidebar!');
  }
  console.log('✅ #pc-sidebar-sound-widget found in sidebar');

  // 2. Check 8 paper buttons
  const paperBtns = await page.$$('.pc-sidebar-paper-btn');
  console.log(`Found ${paperBtns.length} paper buttons in sidebar`);
  if (paperBtns.length !== 8) {
    throw new Error(`❌ Expected 8 paper buttons, but found ${paperBtns.length}`);
  }

  const expectedTypes = ['cotton', 'hanji', 'kraft', 'vellum', 'origami', 'cardboard', 'newsprint', 'parchment'];
  for (const type of expectedTypes) {
    const btn = await page.$(`.pc-sidebar-paper-btn[data-paper="${type}"]`);
    if (!btn) {
      throw new Error(`❌ Paper button for '${type}' not found!`);
    }
  }
  console.log('✅ All 8 paper buttons are properly rendered with data-paper attributes');

  // 3. Test Master Sound Toggle Click
  const toggleBtn = await page.$('#pc-sidebar-sound-toggle');
  if (!toggleBtn) {
    throw new Error('❌ #pc-sidebar-sound-toggle not found!');
  }
  
  // Click to turn ON
  await toggleBtn.click();
  await page.waitForTimeout(300);
  let isSoundOn = await page.evaluate(() => localStorage.getItem('pc_paper_sound') === 'true');
  console.log('Sound ON after click:', isSoundOn);
  if (!isSoundOn) {
    throw new Error('❌ Sound was not turned ON after toggle click!');
  }

  // 4. Test clicking different paper buttons
  for (const type of expectedTypes) {
    const btn = await page.$(`.pc-sidebar-paper-btn[data-paper="${type}"]`);
    await btn.click();
    await page.waitForTimeout(200);

    const activeType = await page.evaluate(() => localStorage.getItem('pc_paper_sound_type'));
    const btnIsActive = await btn.evaluate(el => el.classList.contains('is-active'));
    const bodyHasTexture = await page.evaluate((t) => document.body.classList.contains('texture-' + t), type);

    if (activeType !== type || !btnIsActive || !bodyHasTexture) {
      throw new Error(`❌ Failed switching to paper '${type}'. activeType: ${activeType}, btnIsActive: ${btnIsActive}, bodyHasTexture: ${bodyHasTexture}`);
    }
    console.log(`✅ Successfully switched to paper: ${type} (Texture & Active state verified)`);
  }

  // 5. Test Audio Synthesis direct execution
  const audioResults = await page.evaluate(async (types) => {
    const results = {};
    for (const t of types) {
      try {
        window.playPaperSound(t);
        results[t] = 'ok';
      } catch (e) {
        results[t] = 'error: ' + e.message;
      }
    }
    return results;
  }, expectedTypes);
  console.log('Audio Synthesis execution results:', audioResults);

  // 6. Capture screenshot of sidebar for visual verification
  const sidebar = await page.$('#pc-sidebar-nav');
  if (sidebar) {
    await sidebar.screenshot({ path: path.join(projectRoot, 'evidence-sidebar-sound.png') });
    console.log('✅ Captured sidebar screenshot to evidence-sidebar-sound.png');
  }

  await page.screenshot({ path: path.join(projectRoot, 'evidence-fullpage-sound.png'), fullPage: false });
  console.log('✅ Captured fullpage screenshot to evidence-fullpage-sound.png');

  // 7. Test Collapsed Sidebar
  const sidebarToggle = await page.$('#pc-sidebar-toggle');
  if (sidebarToggle) {
    await sidebarToggle.click();
    await page.waitForTimeout(350);
    const collapsedSidebar = await page.$('#pc-sidebar-nav');
    if (collapsedSidebar) {
      await collapsedSidebar.screenshot({ path: path.join(projectRoot, 'evidence-sidebar-collapsed.png') });
      console.log('✅ Captured collapsed sidebar screenshot to evidence-sidebar-collapsed.png');
    }
  }

  await browser.close();
  console.log('🎉 All tests passed successfully!');
}

testSoundSidebar().catch(err => {
  console.error(err);
  process.exit(1);
});
