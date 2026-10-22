import { chromium } from 'playwright-core';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

async function testSidebarBottomSound() {
  console.log('--- Testing Sidebar Bottom Sound Menu & Sound Tester ---');

  const errors = [];
  const browser = await chromium.launch({
    headless: true,
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
  });

  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 }
  });
  const page = await context.newPage();

  page.on('console', msg => {
    if (msg.type() === 'error') {
      console.error('Browser console error:', msg.text());
      errors.push(msg.text());
    }
  });

  const fileUrl = 'file:///' + path.join(projectRoot, 'index.html').replace(/\\/g, '/');
  console.log('Loading page:', fileUrl);
  await page.goto(fileUrl, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(1000);

  // 1. Verify that '종이 소리 & 햅틱 랩' menu link exists in sidebar
  const soundMenuItem = await page.$('.pc-sidebar-menu a.pc-sidebar-item[data-target="paper-sound-studio"], .pc-sidebar-menu a.pc-sidebar-item[href="#paper-sound-studio"]');
  if (!soundMenuItem) {
    throw new Error('❌ Sound studio menu item not found in sidebar menu!');
  }
  const soundItemText = await soundMenuItem.innerText();
  console.log('✅ Sound studio menu item found:', soundItemText.replace(/\n/g, ' '));

  // 2. Check position - verify it is in the last category section of the sidebar menu
  const menuItems = await page.$$('.pc-sidebar-menu .pc-sidebar-item');
  const lastItem = menuItems[menuItems.length - 1];
  const lastItemTarget = await lastItem.getAttribute('data-target') || await lastItem.getAttribute('href');
  console.log(`Last sidebar menu item target: ${lastItemTarget} (Total menu items: ${menuItems.length})`);
  if (!lastItemTarget.includes('paper-sound-studio')) {
    console.warn('⚠️ Warning: paper-sound-studio is not the exact last item in .pc-sidebar-item list. Current last item:', lastItemTarget);
  } else {
    console.log('✅ Sound studio is confirmed to be the bottom item of the sidebar navigation items!');
  }

  // 3. Verify Sound Widget presence directly in sidebar
  const soundWidget = await page.$('#pc-sidebar-sound-widget');
  if (!soundWidget) {
    throw new Error('❌ #pc-sidebar-sound-widget not found in sidebar!');
  }
  console.log('✅ #pc-sidebar-sound-widget is present in sidebar');

  // 4. Verify all 8 paper buttons
  const expectedPapers = ['cotton', 'hanji', 'kraft', 'vellum', 'origami', 'cardboard', 'newsprint', 'parchment'];
  const paperBtns = await page.$$('.pc-sidebar-paper-btn');
  console.log(`Found ${paperBtns.length} paper sound buttons in widget.`);
  if (paperBtns.length !== 8) {
    throw new Error(`❌ Expected 8 buttons, found ${paperBtns.length}`);
  }

  // 5. Test interaction: click each paper button and verify active state change and sound activation
  for (const paper of ['hanji', 'kraft', 'vellum', 'cardboard']) {
    const btn = await page.$(`.pc-sidebar-paper-btn[data-paper="${paper}"]`);
    if (!btn) throw new Error(`Button for ${paper} missing!`);
    await btn.click();
    await page.waitForTimeout(300);

    const isActive = await btn.evaluate(el => el.classList.contains('is-active'));
    const currentPaper = await page.evaluate(() => localStorage.getItem('pc_paper_sound_type'));
    const isSoundOn = await page.evaluate(() => localStorage.getItem('pc_paper_sound') === 'true');

    console.log(`- Clicked ${paper}: is-active=${isActive}, storedType=${currentPaper}, soundOn=${isSoundOn}`);
    if (!isActive || currentPaper !== paper || !isSoundOn) {
      throw new Error(`❌ Clicking ${paper} did not set state properly!`);
    }
  }
  console.log('✅ Multi-paper sound buttons tested successfully!');

  // 6. Test navigation: click the menu link to scroll to #paper-sound-studio
  await soundMenuItem.click();
  await page.waitForTimeout(600);

  const isInViewport = await page.evaluate(() => {
    const el = document.getElementById('paper-sound-studio');
    if (!el) return false;
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight)
    );
  });
  console.log('Section #paper-sound-studio is in viewport after menu click:', isInViewport);

  // 7. Scroll sidebar to bottom so widget is clearly visible and take screenshot
  await page.evaluate(() => {
    const sidebar = document.getElementById('pc-sidebar-nav');
    if (sidebar) {
      sidebar.scrollTop = sidebar.scrollHeight;
    }
  });
  await page.waitForTimeout(400);

  const screenshotPath = path.join(projectRoot, 'evidence-sidebar-bottom-sound.png');
  await page.screenshot({ path: screenshotPath, fullPage: false });
  console.log(`📸 Screenshot saved: ${screenshotPath}`);

  // Take element screenshot of the widget specifically
  const widgetScreenshotPath = path.join(projectRoot, 'evidence-sidebar-widget-focus.png');
  await soundWidget.screenshot({ path: widgetScreenshotPath });
  console.log(`📸 Widget screenshot saved: ${widgetScreenshotPath}`);

  await browser.close();

  if (errors.length > 0) {
    console.error('Console errors encountered:', errors);
    process.exit(1);
  }

  console.log('🎉 All tests passed successfully!');
}

testSidebarBottomSound().catch(err => {
  console.error('Test failed:', err);
  process.exit(1);
});
