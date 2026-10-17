#!/usr/bin/env node
/**
 * tests/hero-craft-tokens.test.mjs
 * 
 * Verifies Step 1: Authentic Layered Paper-Cut Design System Tokens & Primitives
 * - AC-1: 7-swatch vertical lighting gradients (--pc-swatch-*), 0.8px rim lights, and burnt umber contact shadows
 * - AC-2: Knife-edge rim light, burnt umber 2-tier shadow, anti-fingernail, and centering on buttons and badges
 * - AC-3: Tweezers lift hover elevation (translateY(-2px)), press feedback (translateY(1px)), and prefers-reduced-motion accessibility
 */

import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { resolve, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = resolve(__filename, '..');
const projectRoot = resolve(__dirname, '..');

console.log('🧪 Starting tests: hero-craft-tokens.test.mjs\n');

// ---------------------------------------------------------------------------
// Setup: Read Target CSS Files
// ---------------------------------------------------------------------------
const papercutCssPath = join(projectRoot, 'papercut.css');
const papercutUiCssPath = join(projectRoot, 'papercut-ui.css');

assert.ok(existsSync(papercutCssPath), 'papercut.css must exist');
assert.ok(existsSync(papercutUiCssPath), 'papercut-ui.css must exist');

const papercutCss = readFileSync(papercutCssPath, 'utf-8');
const papercutUiCss = readFileSync(papercutUiCssPath, 'utf-8');

// ---------------------------------------------------------------------------
// 1. AC-1: 7대 수직 조명 종이 스와치 및 림 라이트, 접촉 그림자 토큰 검증
// ---------------------------------------------------------------------------
console.log('▶ Test 1: Verifying AC-1 design tokens in papercut.css and papercut-ui.css...');

const requiredTokens = [
  // 7대 수직 조명 종이 스와치 토큰
  { name: '--pc-swatch-cloud', val: 'linear-gradient(180deg, #FFFFFF 0%, #FAF6ED 100%)' },
  { name: '--pc-swatch-mint', val: 'linear-gradient(180deg, #BCE4DB 0%, #9FD4C7 100%)' },
  { name: '--pc-swatch-peach', val: 'linear-gradient(180deg, #F8B49B 0%, #EE8F72 100%)' },
  { name: '--pc-swatch-sand', val: 'linear-gradient(180deg, #FDE6B5 0%, #F5CE82 100%)' },
  { name: '--pc-swatch-lavender', val: 'linear-gradient(180deg, #E2D3EE 0%, #C9B3DC 100%)' },
  { name: '--pc-swatch-sky', val: 'linear-gradient(180deg, #D4EDF4 0%, #B4DDE7 100%)' },
  { name: '--pc-swatch-sage', val: 'linear-gradient(180deg, #BFE2CE 0%, #A3D4B6 100%)' },
  
  // 0.8px 나이프 엣지 림 라이트 토큰
  { name: '--pc-paper-rim-light', val: 'inset 0 1px 0 rgba(255, 255, 255, 0.85)' },
  { name: '--pc-paper-rim-subtle', val: 'inset 0 0.8px 0 rgba(255, 255, 255, 0.65)' },
  
  // 번트 엄버 2-Tier 종이 접촉 그림자 토큰
  { name: '--pc-paper-shadow-contact', val: '0 1.2px 1.8px rgba(46, 30, 20, 0.20), 0 4px 10px -2px rgba(46, 30, 20, 0.12)' },
  { name: '--pc-paper-shadow-lifted', val: '0 2px 2.5px rgba(46, 30, 20, 0.22), 0 8px 18px -3px rgba(46, 30, 20, 0.16)' }
];

for (const { name, val } of requiredTokens) {
  // Check papercut.css
  assert.ok(
    papercutCss.includes(name),
    `papercut.css must define ${name}`
  );
  assert.ok(
    papercutCss.includes(val),
    `papercut.css must define value for ${name}: ${val}`
  );

  // Check papercut-ui.css
  assert.ok(
    papercutUiCss.includes(name),
    `papercut-ui.css must define ${name}`
  );
  assert.ok(
    papercutUiCss.includes(val),
    `papercut-ui.css must define value for ${name}: ${val}`
  );
}

// Check swatch utility classes in papercut.css
const swatchClasses = [
  'pc-swatch-cloud',
  'pc-swatch-mint',
  'pc-swatch-peach',
  'pc-swatch-sand',
  'pc-swatch-lavender',
  'pc-swatch-sky',
  'pc-swatch-sage'
];
for (const cls of swatchClasses) {
  assert.ok(
    papercutCss.includes(`.${cls}`),
    `papercut.css must provide utility class .${cls}`
  );
}

console.log('  ✔ AC-1: All 7 swatches, rim lights, and contact shadow tokens verified successfully.');

// ---------------------------------------------------------------------------
// 2. AC-2: 버튼 및 배지 상단 림 라이트, 번트 엄버 2-Tier 그림자, 중앙 정렬 검증
// ---------------------------------------------------------------------------
console.log('▶ Test 2: Verifying AC-2 button and badge styling & centering standards...');

const requiredButtonClasses = [
  '.pc-btn',
  '.pc-btn-primary',
  '.pc-btn-secondary',
  '.pc-btn-ghost',
  '.pc-btn-craft'
];

for (const btnCls of requiredButtonClasses) {
  assert.ok(
    papercutCss.includes(btnCls),
    `papercut.css must define ${btnCls}`
  );
  assert.ok(
    papercutUiCss.includes(btnCls),
    `papercut-ui.css must define ${btnCls}`
  );
}

// Verify Rim Light border-top on buttons and badges
const rimBorderRule = 'border-top: 1px solid rgba(255, 255, 255, 0.85)';
assert.ok(
  papercutCss.includes(rimBorderRule),
  `papercut.css must apply rim light border-top: "${rimBorderRule}"`
);
assert.ok(
  papercutUiCss.includes(rimBorderRule),
  `papercut-ui.css must apply rim light border-top: "${rimBorderRule}"`
);

// Verify Burnt Umber contact shadow token reference
assert.ok(
  papercutCss.includes('var(--pc-paper-shadow-contact)'),
  'papercut.css must bind var(--pc-paper-shadow-contact) to elements'
);
assert.ok(
  papercutUiCss.includes('var(--pc-paper-shadow-contact)'),
  'papercut-ui.css must bind var(--pc-paper-shadow-contact) to elements'
);

// Verify Centering standards on .pc-btn and .pc-badge (inline-flex, items-center, justify-center, leading-none/line-height: 1)
assert.ok(
  papercutCss.includes('display: inline-flex;') &&
  papercutCss.includes('align-items: center;') &&
  papercutCss.includes('justify-content: center;') &&
  papercutCss.includes('line-height: 1;'),
  'papercut.css buttons and badges must strictly obey centering rules'
);

assert.ok(
  papercutUiCss.includes('display: inline-flex;') &&
  papercutUiCss.includes('align-items: center;') &&
  papercutUiCss.includes('justify-content: center;') &&
  papercutUiCss.includes('line-height: 1;'),
  'papercut-ui.css buttons and badges must strictly obey centering rules'
);

// Anti-Fingernail rule verification: No asymmetric border-l-4 with rounded corners
assert.strictEqual(
  papercutCss.includes('border-l-4 rounded'),
  false,
  'Anti-fingernail violation: papercut.css must not use asymmetric border-l-4 rounded'
);
assert.strictEqual(
  papercutUiCss.includes('border-l-4 rounded'),
  false,
  'Anti-fingernail violation: papercut-ui.css must not use asymmetric border-l-4 rounded'
);

console.log('  ✔ AC-2: Buttons and badges knife-edge rim light, burnt umber shadow, and centering standards verified.');

// ---------------------------------------------------------------------------
// 3. AC-3: 호버 핀셋 리프트, 클릭 프레스 피드백, prefers-reduced-motion 검증
// ---------------------------------------------------------------------------
console.log('▶ Test 3: Verifying AC-3 hover lift, press feedback, and reduced-motion accessibility...');

// Hover elevation translateY(-2px) and lifted shadow
assert.ok(
  papercutCss.includes('transform: translateY(-2px)'),
  'papercut.css must implement translateY(-2px) for hover tweezers elevation'
);
assert.ok(
  papercutCss.includes('var(--pc-paper-shadow-lifted)'),
  'papercut.css must apply var(--pc-paper-shadow-lifted) on hover'
);
assert.ok(
  papercutUiCss.includes('transform: translateY(-2px)'),
  'papercut-ui.css must implement translateY(-2px) for hover tweezers elevation'
);
assert.ok(
  papercutUiCss.includes('var(--pc-paper-shadow-lifted)'),
  'papercut-ui.css must apply var(--pc-paper-shadow-lifted) on hover'
);

// Active press feedback translateY(1px) and contact shadow
assert.ok(
  papercutCss.includes('transform: translateY(1px)'),
  'papercut.css must implement translateY(1px) for active press feedback'
);
assert.ok(
  papercutUiCss.includes('transform: translateY(1px)'),
  'papercut-ui.css must implement translateY(1px) for active press feedback'
);

// prefers-reduced-motion accessibility
assert.ok(
  papercutCss.includes('@media (prefers-reduced-motion: reduce)'),
  'papercut.css must contain @media (prefers-reduced-motion: reduce)'
);
assert.ok(
  papercutUiCss.includes('@media (prefers-reduced-motion: reduce)'),
  'papercut-ui.css must contain @media (prefers-reduced-motion: reduce)'
);

// Check that transform: none !important is applied under reduced-motion
assert.ok(
  papercutCss.includes('transform: none !important;'),
  'papercut.css must set transform: none !important under reduced-motion'
);
assert.ok(
  papercutUiCss.includes('transform: none !important;'),
  'papercut-ui.css must set transform: none !important under reduced-motion'
);

console.log('  ✔ AC-3: Hover elevation, press feedback, and prefers-reduced-motion verified.');

console.log('\n=============================================');
console.log('🎉 ALL Step 1 (hero-craft-tokens) tests passed!');
console.log('=============================================\n');
