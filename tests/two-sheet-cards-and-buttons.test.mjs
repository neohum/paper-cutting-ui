import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const projectRoot = process.cwd();

test('Two-Sheet Default Stacking for Cards & Buttons and Nav Bar Visibility Suite', async (t) => {
  const papercutCss = fs.readFileSync(path.join(projectRoot, 'papercut.css'), 'utf-8');
  const papercutUiCss = fs.readFileSync(path.join(projectRoot, 'papercut-ui.css'), 'utf-8');
  const papercutLayoutCss = fs.readFileSync(path.join(projectRoot, 'papercut-layout.css'), 'utf-8');
  const papercutBlocksCss = fs.readFileSync(path.join(projectRoot, 'papercut-blocks-charts.css'), 'utf-8');

  await t.test('AC-1: Nav Bar 및 카드 자식 콘텐츠 z-index: 2 보호 및 가림 결함 제거', () => {
    // 1. papercut.css must not have inset: 8px !important; z-index: 1 !important; on card ::after
    assert.doesNotMatch(
      papercutCss,
      /\.pc-card[\s\S]*?inset:\s*8px\s*!important;\s*border:\s*1px\s*dashed[\s\S]*?z-index:\s*1\s*!important;/i,
      'papercut.css must not cover cards with opaque inset: 8px z-index: 1 overlay'
    );

    // 2. Child protection z-index: 2 in papercut.css and papercut-layout.css
    assert.match(
      papercutCss,
      /\.pc-card\s*>\s*\*[\s\S]*?\.pc-page-nav-bar\s*>\s*\*[\s\S]*?z-index:\s*2/i,
      'papercut.css must protect card and nav bar children with z-index: 2'
    );
    assert.match(
      papercutLayoutCss,
      /\.pc-card\s*>\s*\*[\s\S]*?\.pc-page-nav-bar\s*>\s*\*[\s\S]*?z-index:\s*2/i,
      'papercut-layout.css must protect card and nav bar children with z-index: 2'
    );
  });

  await t.test('AC-2: 모든 카드 2-Sheet 바닥 종이(inset: -6px, z-index: -1) 기본 적용', () => {
    assert.match(
      papercutLayoutCss,
      /\.pc-card::after[\s\S]*?\.pc-page-nav-bar::after[\s\S]*?inset:\s*-6px\s*!important;[\s\S]*?z-index:\s*-1\s*!important;/i,
      'papercut-layout.css must set 2-sheet underlay on card ::after with inset: -6px and z-index: -1'
    );
    assert.match(
      papercutCss,
      /\.pc-page-nav-bar::after[\s\S]*?inset:\s*-6px\s*!important;[\s\S]*?z-index:\s*-1\s*!important;/i,
      'papercut.css must set 2-sheet underlay on card ::after with inset: -6px and z-index: -1'
    );
  });

  await t.test('AC-3: 모든 버튼 2-Sheet 바닥 종이(inset: -3px, z-index: -1) 기본 적용', () => {
    // 1. papercut.css
    assert.match(
      papercutCss,
      /\.pc-btn:not\(\.pc-sidebar-item\):not\(\.pc-svg-kirigami-btn\)::before[\s\S]*?inset:\s*-3px\s*!important;[\s\S]*?z-index:\s*-1\s*!important;/i,
      'papercut.css must equip all buttons with 2-sheet base paper via ::before inset: -3px z-index: -1'
    );

    // 2. papercut-ui.css
    assert.match(
      papercutUiCss,
      /\.pc-ui-btn:not\(\.pc-sidebar-item\):not\(\.pc-svg-kirigami-btn\)::before[\s\S]*?inset:\s*-3px\s*!important;[\s\S]*?z-index:\s*-1\s*!important;/i,
      'papercut-ui.css must equip .pc-ui-btn with 2-sheet base paper via ::before inset: -3px z-index: -1'
    );

    // 3. papercut-blocks-charts.css
    assert.match(
      papercutBlocksCss,
      /\.pc-action-btn::before[\s\S]*?inset:\s*-3px\s*!important;[\s\S]*?z-index:\s*-1\s*!important;/i,
      'papercut-blocks-charts.css must equip .pc-action-btn with 2-sheet base paper'
    );
    assert.match(
      papercutBlocksCss,
      /\.pc-social-btn::before[\s\S]*?inset:\s*-3px\s*!important;[\s\S]*?z-index:\s*-1\s*!important;/i,
      'papercut-blocks-charts.css must equip .pc-social-btn with 2-sheet base paper'
    );
  });

  await t.test('AC-4: 버튼 자식 요소 z-index: 2 보호 및 overflow: visible', () => {
    assert.match(
      papercutUiCss,
      /\.pc-ui-btn[\s\S]*?\.pc-ui-button[\s\S]*?\{[\s\S]*?overflow:\s*visible;/i,
      'papercut-ui.css must keep overflow: visible on buttons so base sheet is visible'
    );
    assert.match(
      papercutUiCss,
      /\.pc-ui-btn\s*>\s*\*[\s\S]*?z-index:\s*2/i,
      'papercut-ui.css must set z-index: 2 on button children'
    );
  });
});
