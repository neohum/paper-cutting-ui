import { test, describe, it } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

describe('Full SVG Cards & Hero Diorama Architecture (Step 2)', () => {
  const indexHtml = fs.readFileSync(path.join(projectRoot, 'index.html'), 'utf8');
  const papercutCss = fs.readFileSync(path.join(projectRoot, 'papercut.css'), 'utf8');

  it('AC-4: Restores authentic master artwork raster JPG image (assets/papercut-hero.jpg) in Hero banner and ensures preload', () => {
    // 래스터 원본 마스터 일러스트 이미지가 히어로에 올바르게 존재해야 함
    assert.ok(indexHtml.includes('<img src="assets/papercut-hero.jpg"'), 'Raster JPG master artwork must be present in hero banner');
    assert.ok(indexHtml.includes('as="image" type="image/jpeg"'), 'Preload of JPG image must be preserved');
    assert.ok(indexHtml.includes('class="pc-hero-art-img hero-art-img"'), 'Hero artwork must use standard hero art classes');
  });

  it('AC-5: Washi tape provides realistic paper tape texture and jagged deckle torn ends', () => {
    assert.ok(papercutCss.includes('.pc-washi-tape'), 'Must define .pc-washi-tape');
    assert.ok(papercutCss.includes('clip-path: polygon('), 'Must define torn deckle edge clip-path');
    assert.ok(papercutCss.includes('inset 0 0.88px 0 rgba(255, 255, 255'), 'Must define knife rim light on tape');
  });

  it('AC-6: Cards feature iconic dashed stitching inlay and crisp 3-Tier Burnt Umber shadow', () => {
    // index.html의 .pc-card-nested
    assert.ok(indexHtml.includes('outline: 1.2px dashed rgba(216, 206, 189'), 'index.html must equip cards with iconic dashed stitching');
    assert.ok(indexHtml.includes('0 1.6px 2.2px rgba(46, 30, 20, 0.48)'), 'index.html must apply 48% contact burnt umber shadow on underlay');

    // papercut.css의 .pc-card
    assert.ok(papercutCss.includes('outline: 1.2px dashed rgba(216, 206, 189'), 'papercut.css must equip .pc-card with dashed stitching inlay');
    assert.ok(papercutCss.includes('0 1.5px 2px rgba(46, 30, 20, 0.48)'), 'papercut.css must apply 48% contact burnt umber shadow to .pc-card');
  });
});
