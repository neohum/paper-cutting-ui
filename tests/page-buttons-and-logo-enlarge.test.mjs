import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const projectRoot = process.cwd();
const indexHtmlPath = path.join(projectRoot, 'index.html');
const sidebarJsPath = path.join(projectRoot, 'papercut-sidebar.js');
const sidebarCssPath = path.join(projectRoot, 'papercut-sidebar.css');
const layoutCssPath = path.join(projectRoot, 'papercut-layout.css');
const logoSvgPath = path.join(projectRoot, 'logo.svg');
const primitivesHtmlPath = path.join(projectRoot, 'papercut-svg-primitives.html');

test('Page Buttons, Sidebar & Logo Scale Harmonization Suite', async (t) => {
  const indexHtml = fs.readFileSync(indexHtmlPath, 'utf-8');
  const sidebarJs = fs.readFileSync(sidebarJsPath, 'utf-8');
  const sidebarCss = fs.readFileSync(sidebarCssPath, 'utf-8');
  const layoutCss = fs.readFileSync(layoutCssPath, 'utf-8');
  const logoSvg = fs.readFileSync(logoSvgPath, 'utf-8');
  const primitivesHtml = fs.readFileSync(primitivesHtmlPath, 'utf-8');

  await t.test('1. Page Bottom Pagination Buttons follow Official PaperCut Button Architecture', () => {
    // Check papercut-sidebar.js renders standard pc-btn classes
    assert.ok(sidebarJs.includes('pc-btn pc-btn-secondary pc-page-prev-btn'), 'Previous page button must use pc-btn pc-btn-secondary');
    assert.ok(sidebarJs.includes('pc-btn pc-btn-primary pc-swatch-mint pc-page-next-btn'), 'Next page button must use pc-btn pc-btn-primary pc-swatch-mint');
    assert.ok(sidebarJs.includes('pc-page-btn-direction'), 'Must include structured direction label');
    assert.ok(sidebarJs.includes('pc-page-btn-title'), 'Must include structured title label');

    // Check papercut-sidebar.css styles 3D papercraft tokens
    assert.ok(sidebarCss.includes('.pc-page-prev-btn::before') || sidebarCss.includes('.pc-page-next-btn::before'), 'Must style 2-Sheet underlay backing sheet');
    assert.ok(sidebarCss.includes('0.88px'), 'Must include 0.88px knife-edge rim light highlight');
    assert.ok(sidebarCss.includes('min-height: 48px'), 'Must comply with 44px+ touch target standard');
  });

  await t.test('2. Hero Actions Deck contains Dedicated 3D Paper-Cut Quick-Start Button', () => {
    assert.ok(indexHtml.includes('href="#quick-start" class="pc-btn pc-svg-kirigami-btn pc-hero-action-btn'), 'Hero actions deck must feature quick-start button');
    assert.ok(indexHtml.includes('id="hero-btn-sh-quick"'), 'Quick start hero button must have 3-tier drop shadow filter');
    assert.ok(indexHtml.includes('설치 &amp; 복사 가이드'), 'Quick start hero button must have accurate Korean copy');
  });

  await t.test('3. Sidebar Top Button & Navigation Buttons conform to PaperCut UI Button Standards', () => {
    assert.ok(sidebarCss.includes('.pc-sidebar-top-btn'), 'Must define .pc-sidebar-top-btn');
    assert.ok(sidebarCss.includes('var(--pc-paper-rim-light'), 'Sidebar top button must link rim light token');
    assert.ok(sidebarCss.includes('var(--pc-paper-shadow-contact'), 'Sidebar top button must link contact shadow token');
  });

  await t.test('4. "PaperCut" Brand Wordmark Scaled Up Prominently', () => {
    // 1) Header Logo Text
    assert.ok(indexHtml.includes('class="pc-logo-word-papercut"'), 'index.html header must wrap PaperCut with dedicated class');
    assert.ok(indexHtml.includes('class="pc-logo-badge-ui"'), 'index.html header must wrap UI with dedicated badge class');
    assert.match(layoutCss, /\.pc-logo-word-papercut\s*\{[^}]*font-size:\s*2[0-9]px/, 'PaperCut text must be enlarged to 20px+ in layout CSS');

    // 2) logo.svg Central Wordmark Scale
    assert.ok(logoSvg.includes('id="pc-logo-wordmark"'), 'logo.svg must maintain id="pc-logo-wordmark"');
    assert.ok(logoSvg.includes('scale('), 'logo.svg must apply scale transformation to PaperCut wordmark');
  });

  await t.test('5. Multi-page and Primitives Buttons Unified to Official .pc-btn', () => {
    assert.ok(primitivesHtml.includes('class="pc-btn pc-btn-primary pc-swatch-mint inline-flex items-center justify-center leading-none"'), 'Primitives main guide link must use pc-btn pc-btn-primary pc-swatch-mint');
    assert.ok(primitivesHtml.includes('id="btn-progress-random" class="pc-btn pc-btn-secondary'), 'Primitives progress button must use pc-btn');
  });
});
