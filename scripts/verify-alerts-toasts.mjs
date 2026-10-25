import { chromium } from 'playwright-core';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

async function testAlertsAndToasts() {
  const chromePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
  const browser = await chromium.launch({
    headless: true,
    executablePath: chromePath
  });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 1000 }
  });
  const page = await context.newPage();

  const fileUrl = `file://${projectRoot}/index.html`;
  console.log('Navigating to', fileUrl);
  await page.goto(fileUrl, { waitUntil: 'load' });
  await page.waitForTimeout(1000);

  // 1. Scroll to Alerts & Toasts section with header offset
  await page.evaluate(() => {
    const el = document.getElementById('paper-alerts-toasts');
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: y, behavior: 'instant' });
    }
  });
  await page.waitForTimeout(500);

  // 2. Capture Alert Slips (3D Plates on left icon and right close button)
  const alertCards = await page.$$('.pc-alert');
  if (alertCards.length > 1) {
    await alertCards[1].screenshot({ path: path.join(projectRoot, 'evidence-alert-second-slip.png') });
    console.log('Saved evidence-alert-second-slip.png');
  }

  // 전체 알림&토스트 스튜디오 및 슬립 뷰포트 캡처
  await page.screenshot({ path: path.join(projectRoot, 'evidence-alerts-section-full.png') });
  console.log('Saved evidence-alerts-section-full.png');

  // 3. Test "시네마 티켓형 완료 토스트" button click
  const ticketBtn = await page.$('#btn-demo-toast-success');
  if (ticketBtn) {
    console.log('Clicking ticket toast button...');
    await ticketBtn.click();
    await page.waitForTimeout(400); // wait for entrance animation

    // Take screenshot showing the live ticket toast
    await page.screenshot({ path: path.join(projectRoot, 'evidence-ticket-toast-live.png') });
    console.log('Saved evidence-ticket-toast-live.png');

    // Check ticket toast styling
    const ticketToast = await page.$('.pc-toast-card.pc-toast-ticket');
    if (ticketToast) {
      const box = await ticketToast.boundingBox();
      const hasSvg = await page.$('.pc-toast-ticket-bg');
      console.log('Ticket toast found! Bounding box:', box, 'Has SVG bg:', !!hasSvg);
    } else {
      console.log('Ticket toast NOT found!');
    }
  }

  // 4. Test original showPaperToast
  await page.evaluate(() => {
    if (window.showPaperToast) {
      window.showPaperToast('기존 단정 우측하단 페이퍼 토스트 확인!', 'mint', 'check');
    }
  });
  await page.waitForTimeout(400);
  await page.screenshot({ path: path.join(projectRoot, 'evidence-toast-original-live.png') });
  console.log('Saved evidence-toast-original-live.png');

  // 5. Test toast positions
  const posTopCenterBtn = await page.$('.pc-toast-pos-btn[data-pos="top-center"]');
  if (posTopCenterBtn) {
    console.log('Clicking top-center pos btn...');
    await posTopCenterBtn.click();
    await page.waitForTimeout(200);

    const ticketBtn2 = await page.$('#btn-demo-toast-success');
    await ticketBtn2.click();
    await page.waitForTimeout(400);
    await page.screenshot({ path: path.join(projectRoot, 'evidence-toast-top-center.png') });
    console.log('Saved evidence-toast-top-center.png');
  }

  await browser.close();
  console.log('Test completed successfully!');
}

testAlertsAndToasts().catch(err => {
  console.error('Error running test:', err);
  process.exit(1);
});
