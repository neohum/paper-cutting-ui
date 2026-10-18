import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const projectRoot = process.cwd();

test('Two-Sheet Uniform Stack & 3rd Sheet Elimination Test Suite', async (t) => {
  const papercutCss = fs.readFileSync(path.join(projectRoot, 'papercut.css'), 'utf-8');
  const papercutUiCss = fs.readFileSync(path.join(projectRoot, 'papercut-ui.css'), 'utf-8');
  const papercutLayoutCss = fs.readFileSync(path.join(projectRoot, 'papercut-layout.css'), 'utf-8');
  const papercutBlocksCss = fs.readFileSync(path.join(projectRoot, 'papercut-blocks-charts.css'), 'utf-8');
  const papercutReaderCss = fs.readFileSync(path.join(projectRoot, 'papercut-reader.css'), 'utf-8');
  const indexHtml = fs.readFileSync(path.join(projectRoot, 'index.html'), 'utf-8');

  await t.test('AC-1: 셋째 종이(Third Sheet / Base Mat Board) 완전 삭제 검증 (::before { display: none !important; })', () => {
    // 1. papercut.css
    assert.match(
      papercutCss,
      /\.pc-card:not\(\.pc-card-dogear\):not\(\.pc-slot-slit\)::before[\s\S]*?display:\s*none\s*!important/i,
      'papercut.css must disable ::before on standard cards'
    );
    assert.match(
      papercutCss,
      /\.pc-card-stacked:not\(\.pc-page-view\)::before\s*\{\s*display:\s*none\s*!important/i,
      'papercut.css must disable ::before on .pc-card-stacked'
    );

    // 2. papercut-ui.css
    assert.match(
      papercutUiCss,
      /\.pc-ui-card\.pc-is-stacked::before,\s*\.pc-ui-card\.is-stacked::before\s*\{\s*display:\s*none\s*!important/i,
      'papercut-ui.css must disable ::before on .pc-ui-card.is-stacked'
    );

    // 3. papercut-layout.css
    assert.match(
      papercutLayoutCss,
      /\.pc-card-stacked::before,\s*\.pc-card-nested::before\s*\{\s*display:\s*none\s*!important/i,
      'papercut-layout.css must disable ::before on .pc-card-stacked and .pc-card-nested'
    );

    // 4. papercut-blocks-charts.css
    assert.match(
      papercutBlocksCss,
      /\.pc-block-card-stacked::before\s*\{\s*display:\s*none\s*!important/i,
      'papercut-blocks-charts.css must disable ::before on .pc-block-card-stacked'
    );

    // 5. papercut-reader.css
    assert.match(
      papercutReaderCss,
      /\.pc-book-diorama-card::before\s*\{\s*display:\s*none\s*!important/i,
      'papercut-reader.css must disable ::before on .pc-book-diorama-card'
    );
    assert.match(
      papercutReaderCss,
      /\.pc-papercut-card::before\s*\{\s*display:\s*none\s*!important/i,
      'papercut-reader.css must disable ::before on .pc-papercut-card'
    );
  });

  await t.test('AC-2: 사방 균일 확장 뒷 종이(Underlay Sheet: inset: -6px !important) 검증', () => {
    // 1. papercut-layout.css
    assert.match(
      papercutLayoutCss,
      /\.pc-card::after,\s*\.pc-card-sheet::after,\s*\.pc-card-stacked::after,\s*\.pc-card-nested::after[\s\S]*?inset:\s*-6px\s*!important;/i,
      'papercut-layout.css must set inset: -6px !important on card ::after'
    );

    // 2. papercut.css
    assert.match(
      papercutCss,
      /\.pc-card-stacked:not\(\.pc-page-view\)::after\s*\{[\s\S]*?inset:\s*-6px\s*!important;/i,
      'papercut.css must set inset: -6px !important on .pc-card-stacked::after'
    );

    // 3. papercut-ui.css
    assert.match(
      papercutUiCss,
      /\.pc-ui-card\.(pc-is-stacked|is-stacked)::after\s*\{[\s\S]*?inset:\s*-6px\s*!important;/i,
      'papercut-ui.css must set inset: -6px !important on .pc-ui-card.is-stacked::after'
    );

    // 4. papercut-blocks-charts.css
    assert.match(
      papercutBlocksCss,
      /\.pc-block-card-stacked::after\s*\{[\s\S]*?inset:\s*-6px\s*!important;/i,
      'papercut-blocks-charts.css must set inset: -6px !important on .pc-block-card-stacked::after'
    );

    // 5. papercut-reader.css
    assert.match(
      papercutReaderCss,
      /\.pc-book-diorama-card::after\s*\{[\s\S]*?inset:\s*-6px\s*!important;/i,
      'papercut-reader.css must set inset: -6px !important on .pc-book-diorama-card::after'
    );
    assert.match(
      papercutReaderCss,
      /\.pc-papercut-card::after\s*\{[\s\S]*?inset:\s*-6px\s*!important;/i,
      'papercut-reader.css must set inset: -6px !important on .pc-papercut-card::after'
    );
  });

  await t.test('AC-3: 히어로 배너 사방 균일 확장(inset: -8px !important) 검증', () => {
    assert.match(
      papercutLayoutCss,
      /\.pc-hero-banner::before,\s*\.hero-banner::before\s*\{[\s\S]*?inset:\s*-8px\s*!important;/i,
      'papercut-layout.css must set inset: -8px !important on hero banner'
    );
    assert.match(
      indexHtml,
      /\.pc-hero-banner::before,\s*\.hero-banner::before\s*\{[\s\S]*?inset:\s*-8px\s*!important;/i,
      'index.html must set inset: -8px !important on hero banner'
    );
  });

  await t.test('AC-4: 동심 곡률(Concentric Parallel Radius) 및 번트 엄버 그림자 검증', () => {
    assert.match(
      papercutLayoutCss,
      /border-radius:\s*calc\(16px \+ 4px\)\s*!important;/i,
      'Underlay backing sheet must have parallel radius calc(16px + 4px)'
    );
    assert.match(
      papercutLayoutCss,
      /0 4px 14px -2px rgba\(46, 30, 20, 0\.16\)/i,
      'Underlay backing sheet must have 2-tier burnt umber shadow'
    );
  });
});
