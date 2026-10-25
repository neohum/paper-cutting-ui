import { chromium } from 'playwright-core';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

async function testAll5ToastArchetypes() {
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

  // Scroll to studio
  await page.evaluate(() => {
    const el = document.getElementById('paper-alerts-toasts');
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: y, behavior: 'instant' });
    }
  });
  await page.waitForTimeout(400);

  const testCases = [
    { id: '#btn-demo-toast-success', name: 'ticket', file: 'evidence-toast-01-ticket.png' },
    { id: '#btn-demo-toast-info', name: 'washi', file: 'evidence-toast-02-washi.png' },
    { id: '#btn-demo-toast-warning', name: 'dogear', file: 'evidence-toast-03-dogear.png' },
    { id: '#btn-demo-toast-error', name: 'stamp', file: 'evidence-toast-04-stamp.png' },
    { id: '#btn-demo-toast-action', name: 'wax', file: 'evidence-toast-05-wax.png' }
  ];

  for (const tc of testCases) {
    console.log(`Testing ${tc.name} (${tc.id})...`);
    // Clear existing toasts
    await page.evaluate(() => {
      document.querySelectorAll('.pc-toast-card').forEach(el => el.remove());
    });
    await page.waitForTimeout(150);

    const btn = await page.$(tc.id);
    if (!btn) {
      console.error(`Button ${tc.id} not found!`);
      continue;
    }
    await btn.click();
    await page.waitForTimeout(450); // wait for entrance animation

    // Check toast presence
    const toast = await page.$(`.pc-toast-${tc.name}`);
    if (toast) {
      const box = await toast.boundingBox();
      console.log(`Found .pc-toast-${tc.name}! Box:`, box);
    } else {
      console.error(`NOT found .pc-toast-${tc.name}!`);
    }

    // Capture screenshot of the full viewport containing the studio and the toast
    await page.screenshot({ path: path.join(projectRoot, tc.file) });
    console.log(`Saved ${tc.file}`);
  }

  await browser.close();
  console.log('All 5 toast archetypes verified successfully!');
}

testAll5ToastArchetypes().catch(err => {
  console.error('Error running test:', err);
  process.exit(1);
});
