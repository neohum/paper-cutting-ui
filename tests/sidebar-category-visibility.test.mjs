import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const sidebarCssPath = path.join(ROOT, 'papercut-sidebar.css');
const indexHtmlPath = path.join(ROOT, 'index.html');

test('Sidebar Category Visibility & Styling Standard', async (t) => {
  const css = fs.readFileSync(sidebarCssPath, 'utf8');
  const html = fs.readFileSync(indexHtmlPath, 'utf8');

  await t.test('papercut-sidebar.css defines .pc-sidebar-category with flex-shrink: 0 and high-contrast ink color', () => {
    assert.match(css, /\.pc-sidebar-category\s*\{[^}]*flex-shrink:\s*0/s, 'Should prevent flex shrinking');
    assert.match(css, /\.pc-sidebar-category\s*\{[^}]*color:\s*#4A3A2C/s, 'Should use high-contrast ink brown color');
    assert.match(css, /\.pc-sidebar-category\s*\{[^}]*overflow:\s*visible/s, 'Should have visible overflow to avoid clipping');
    assert.match(css, /\.pc-sidebar-category\s*\{[^}]*min-height:\s*26px/s, 'Should have min-height for clear vertical spacing');
  });

  await t.test('No conflicting duplicate definition squashes .pc-sidebar-category', () => {
    // Check that there is no block with overflow: hidden; and low-contrast #8C7C6D overriding it
    const matches = css.match(/\.pc-sidebar-category\s*\{[^}]*\}/g) || [];
    for (const block of matches) {
      if (!block.includes(':first-child') && !block.includes(':not(')) {
        assert.ok(!block.includes('overflow: hidden'), 'Should not contain overflow: hidden');
        assert.ok(!block.includes('color: #8C7C6D'), 'Should not use faint #8C7C6D');
      }
    }
  });

  await t.test('Collapsed mode properly hides sidebar categories', () => {
    assert.match(css, /\.pc-sidebar-category[^{]*\{\s*display:\s*none\s*!important;\s*\}/s, 'Should hide categories when sidebar is collapsed');
  });

  await t.test('index.html contains all 5 sidebar category markers', () => {
    const categories = [
      '기본 정보',
      '컴포넌트 컬렉션',
      '아이콘 &amp; 배경',
      '디자인 시스템',
      '사운드 &amp; 인터랙션'
    ];
    for (const cat of categories) {
      assert.ok(html.includes(`<div class="pc-sidebar-category">${cat}</div>`), `index.html should include category "${cat}"`);
    }
  });
});
