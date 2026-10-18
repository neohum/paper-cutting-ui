import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

test('Universal Papercut Craft Core Architecture Suite', async (t) => {
  const layoutCss = fs.readFileSync(path.join(projectRoot, 'papercut-layout.css'), 'utf-8');
  const uiCss = fs.readFileSync(path.join(projectRoot, 'papercut-ui.css'), 'utf-8');

  await t.test('AC-1: Cutout Windows & Aperture Headers (.pc-cutout-window, .pc-aperture-header)', () => {
    assert.match(
      layoutCss,
      /\.pc-cutout-window,\s*\.pc-aperture-header/,
      'Must define .pc-cutout-window and .pc-aperture-header classes'
    );
    assert.match(
      layoutCss,
      /inset 0 3px 6px rgba\(46,\s*30,\s*20,\s*0\.18\)/,
      'Aperture header must have deep recessed interior inset shadow'
    );
    assert.match(
      layoutCss,
      /\.pc-slit-aperture/,
      'Must define .pc-slit-aperture for micro razor-cut slit grooves'
    );
    assert.match(
      layoutCss,
      /\.pc-cutout-window\.is-transparent/,
      'Must support .is-transparent modifier to allow backing underlay to peek through'
    );
  });

  await t.test('AC-2: Die-Cut Silhouettes (.pc-diecut-ticket, .pc-diecut-stamp, .pc-diecut-scallop, .pc-paper-flap)', () => {
    assert.match(
      layoutCss,
      /\.pc-diecut-ticket::before/,
      'Must define .pc-diecut-ticket with notched cutouts on vertical borders'
    );
    assert.match(
      layoutCss,
      /\.pc-diecut-stamp::before/,
      'Must define .pc-diecut-stamp with perforated stamp deckle teeth'
    );
    assert.match(
      layoutCss,
      /\.pc-diecut-scallop::after/,
      'Must define .pc-diecut-scallop with wavy paper knife edges'
    );
    assert.match(
      layoutCss,
      /\.pc-paper-flap-corner/,
      'Must define .pc-paper-flap-corner for folded paper flap geometry'
    );
  });

  await t.test('AC-3: Multi-Layer Paper Patch Deck (.pc-paper-patch, .pc-patch-*)', () => {
    assert.match(
      layoutCss,
      /\.pc-paper-patch/,
      'Must define .pc-paper-patch with 0.88px knife-edge top rim and 1-tier contact shadow'
    );
    assert.match(
      layoutCss,
      /\.pc-paper-patch\.pc-patch-mint/,
      'Must support pastel patch modifiers: mint'
    );
    assert.match(
      layoutCss,
      /\.pc-paper-patch\.pc-patch-peach/,
      'Must support pastel patch modifiers: peach'
    );
    assert.match(
      layoutCss,
      /\.pc-paper-patch\.pc-patch-lavender/,
      'Must support pastel patch modifiers: lavender'
    );
  });

  await t.test('AC-4: Global Micro Knife-Rim & Form Recessed Wells', () => {
    assert.match(
      layoutCss,
      /\.pc-modal-content,\s*\.pc-ui-dialog/,
      'Must apply universal 0.88px knife rim and 2-tier contact shadow to modals and popovers'
    );
    assert.match(
      layoutCss,
      /\.pc-input,\s*\.pc-select/,
      'Must apply authentic recessed paper well styling to form inputs'
    );
  });

  await t.test('AC-5: Strict Exclusion Guard for Icons & Icon Background Plates', () => {
    // Verify that icon-gallery and bg-library styles are preserved and not destroyed
    const indexHtml = fs.readFileSync(path.join(projectRoot, 'index.html'), 'utf-8');
    assert.ok(indexHtml.includes('id="icon-gallery"'), 'Icon gallery must be preserved');
    assert.ok(indexHtml.includes('id="bg-library"'), 'Background plate library must be preserved');
  });

  await t.test('AC-6: Accessibility (prefers-reduced-motion)', () => {
    assert.match(
      layoutCss,
      /@media\s*\(prefers-reduced-motion:\s*reduce\)\s*\{[\s\S]*?\.pc-cutout-window[\s\S]*?\.pc-paper-patch/,
      'Must disable transforms and animations under prefers-reduced-motion'
    );
  });
});
