import { chromium } from 'playwright-core';
import { mkdirSync } from 'node:fs';
import { resolve } from 'node:path';

const OUT_DIR = resolve('evidence/20261024-enlarge-pc-icons');
mkdirSync(OUT_DIR, { recursive: true });

async function main() {
  const browser = await chromium.launch({
    headless: true,
    channel: 'chrome'
  });

  const page = await browser.newPage({
    viewport: { width: 1440, height: 1024 },
    deviceScaleFactor: 2
  });

  console.log('Navigating to http://127.0.0.1:3333/index.html...');
  await page.goto('http://127.0.0.1:3333/index.html', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);

  // 1. Capture Sidebar paper texture buttons with enlarged icons
  const sidebar = page.locator('#pc-sidebar-nav');
  if (await sidebar.isVisible()) {
    await sidebar.screenshot({ path: `${OUT_DIR}/sidebar-enlarged-paper-icons.png` });
    console.log('Captured sidebar paper icons.');
  }

  // 2. Capture header
  const header = page.locator('#pc-site-header');
  if (await header.isVisible()) {
    await header.screenshot({ path: `${OUT_DIR}/header-enlarged-icons.png` });
    console.log('Captured header icons.');
  }

  // 3. Scroll to Sound Studio section and capture 8-paper cards
  await page.locator('#paper-alerts-toasts').scrollIntoViewIfNeeded();
  await page.waitForTimeout(800);
  const soundStudio = page.locator('#paper-alerts-toasts');
  await soundStudio.screenshot({ path: `${OUT_DIR}/sound-studio-enlarged-paper-cards.png` });
  console.log('Captured sound studio cards.');

  // 4. Scroll to Radix Primitives live deck in index.html
  await page.locator('#pc-radix-primitives-live-deck').scrollIntoViewIfNeeded();
  await page.waitForTimeout(800);
  const primitivesDeck = page.locator('#pc-radix-primitives-live-deck');
  await primitivesDeck.screenshot({ path: `${OUT_DIR}/radix-primitives-in-index.png` });
  console.log('Captured radix primitives deck in index.html.');

  // 5. Navigate to papercut-svg-primitives.html and capture pure SVG primitives library
  console.log('Navigating to http://127.0.0.1:3333/papercut-svg-primitives.html...');
  await page.goto('http://127.0.0.1:3333/papercut-svg-primitives.html', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);

  const heroFrame = page.locator('.pc-hero-frame');
  await heroFrame.screenshot({ path: `${OUT_DIR}/primitives-hero-pure-svg.png` });

  const grid = page.locator('.pc-grid');
  await grid.screenshot({ path: `${OUT_DIR}/primitives-grid-enlarged-papercut-icons.png` });
  console.log('Captured primitives showcase.');

  await browser.close();
  console.log('All enlarged icon evidence captures completed successfully!');
}

main().catch(err => {
  console.error('Capture failed:', err);
  process.exit(1);
});
