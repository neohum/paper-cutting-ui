import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

test('Universal Papercut Craft Showcase Harmonization Suite', async (t) => {
  const indexHtml = fs.readFileSync(path.join(projectRoot, 'index.html'), 'utf-8');

  await t.test('AC-5: Integration of Universal Craft Primitives in index.html', () => {
    assert.ok(
      indexHtml.includes('pc-aperture-header'),
      'index.html must include .pc-aperture-header'
    );
    assert.ok(
      indexHtml.includes('pc-cutout-window'),
      'index.html must include .pc-cutout-window'
    );
    assert.ok(
      indexHtml.includes('pc-diecut-ticket'),
      'index.html must include .pc-diecut-ticket'
    );
    assert.ok(
      indexHtml.includes('pc-diecut-stamp'),
      'index.html must include .pc-diecut-stamp'
    );
    assert.ok(
      indexHtml.includes('pc-paper-patch'),
      'index.html must include .pc-paper-patch'
    );
  });

  await t.test('AC-6: AGENTS.md Hard Rules Compliance', () => {
    // 1. Anti-fingernail: no border-l-4 rounded-*
    assert.doesNotMatch(
      indexHtml,
      /border-l-4\s+rounded/,
      'Must strictly avoid asymmetric border-l-4 rounded-* patterns'
    );

    // 2. Korean typography: no break-all
    assert.doesNotMatch(
      indexHtml,
      /class="[^"]*\bbreak-all\b[^"]*"/,
      'Must not use break-all on Korean UI typography'
    );

    // 3. Icons: Flaticon UIcons standard (fi fi-rr)
    const newCraftBlockMatch = indexHtml.match(/<!-- 7\.0 Universal Papercraft Die-Cut & Aperture Showcase Banner -->[\s\S]*?<!-- Interactive Components Showcase Grid/);
    if (newCraftBlockMatch) {
      const craftBlock = newCraftBlockMatch[0];
      assert.ok(craftBlock.includes('fi fi-rr-cut'), 'Must use Flaticon UIcons regular-rounded icon');
    }
  });
});
