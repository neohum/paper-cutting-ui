import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const indexHtmlPath = path.join(ROOT, 'index.html');
const sidebarJsPath = path.join(ROOT, 'papercut-sidebar.js');
const iconsJsPath = path.join(ROOT, 'papercut-icons.js');

test('Showcase Math, Hangul, Symbol & Logo Integration Suite', async (t) => {
  const html = fs.readFileSync(indexHtmlPath, 'utf8');
  const sidebarJs = fs.readFileSync(sidebarJsPath, 'utf8');
  const iconsJs = fs.readFileSync(iconsJsPath, 'utf8');

  await t.test('AC-9: index.html has math and hangul category filter pills and updated 750 count badge', () => {
    assert.match(html, /data-cat="math"/, 'Should include math category button');
    assert.match(html, /data-cat="hangul"/, 'Should include hangul category button');
    assert.match(html, /id="icon-count-badge"[^>]*>(?:750|816)개 아이콘</, 'Should update icon count badge');
    assert.match(sidebarJs, /badge:\s*['"](?:750|816)종['"]/, 'Sidebar must reflect icon count');
  });

  await t.test('AC-10: index.html includes 3D Papercut Math & Hangul Live Studio', () => {
    assert.ok(html.includes('data-icon="lim"'), 'Should feature limit icon');
    assert.ok(html.includes('data-icon="∑"'), 'Should feature sigma icon');
    assert.ok(html.includes('data-icon="∫"'), 'Should feature integral icon');
    assert.ok(html.includes('data-icon="√"'), 'Should feature sqrt icon');
    assert.ok(html.includes('data-icon="한"'), 'Should feature Hangul "한" icon');
    assert.ok(html.includes('data-icon="글"'), 'Should feature Hangul "글" icon');
    assert.ok(html.includes('data-icon="꽃"'), 'Should feature Hangul "꽃" icon');
    assert.ok(html.includes('data-icon="별"'), 'Should feature Hangul "별" icon');
    assert.ok(html.includes('id="pc-glyph-tester-input"'), 'Should provide dynamic glyph live tester');
  });

  await t.test('AC-11: AGENTS.md Hard Rules compliance in showcase additions', () => {
    // Check no asymmetric border-l-4 rounded
    assert.ok(!html.includes('border-l-4 rounded-'), 'Must not violate Anti-Fingernail rule');
    // Check Korean typography standards
    assert.ok(html.includes('class="break-keep"'), 'Should use break-keep for Korean typography');
  });

  await t.test('AC-12: Total registered icons in papercut-icons.js reaches 750+', () => {
    const countMatch = iconsJs.match(/Total Icons:\s*(\d+)/i) || iconsJs.match(/(\d+)\s*Standalone Layered Paper-Cut Icons/i);
    const count = countMatch ? parseInt(countMatch[1], 10) : 0;
    assert.ok(count >= 750, `Icon catalog count should be >= 750, got ${count}`);
  });
});
