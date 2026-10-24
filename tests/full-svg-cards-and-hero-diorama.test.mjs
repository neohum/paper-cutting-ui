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

  it('AC-4: Eliminates raster JPG image and deploys Pure SVG 5-Layer Kirigami Diorama in Hero banner', () => {
    // 래스터 이미지가 히어로에 없어야 함
    assert.ok(!indexHtml.includes('<img src="assets/papercut-hero.jpg"'), 'Raster JPG image must be eliminated from hero banner');
    assert.ok(!indexHtml.includes('as="image" type="image/jpeg"'), 'Preload of JPG image must be removed');

    // 순수 SVG 키리가미 디오라마가 16:9 Cinema View로 존재해야 함
    assert.ok(indexHtml.includes('class="pc-hero-art-img hero-art-img pc-hero-kirigami-diorama"'), 'Hero must contain pure SVG kirigami diorama');
    assert.ok(indexHtml.includes('viewBox="0 0 1200 675"'), 'Diorama must use 16:9 1200x675 viewBox');

    // 3-Tier feDropShadow 및 다층 레이어 검증
    assert.ok(indexHtml.includes('id="pc-diorama-sh-deep"'), 'Must define deep burnt umber drop shadow');
    assert.ok(indexHtml.includes('id="pc-diorama-sh-mid"'), 'Must define mid drop shadow');
    assert.ok(indexHtml.includes('id="pc-diorama-sh-near"'), 'Must define near drop shadow');
    assert.ok(indexHtml.includes('LAYER 1: 파스텔 하늘'), 'Must contain Layer 1 sky & sun');
    assert.ok(indexHtml.includes('LAYER 2: 원경 라벤더 종이 산맥'), 'Must contain Layer 2 mountain');
    assert.ok(indexHtml.includes('LAYER 3: 중경 세이지 & 민트 완만한 곡선 언덕'), 'Must contain Layer 3 hills');
    assert.ok(indexHtml.includes('LAYER 4: 중근경 피치 & 샌드 테라스 마을'), 'Must contain Layer 4 terrace houses');
    assert.ok(indexHtml.includes('LAYER 5: 근경 샌드 옐로우 & 민트 테라스'), 'Must contain Layer 5 foreground');
    assert.ok(indexHtml.includes('LAYER 6: 최외곽 도화지 컷아웃 프레임'), 'Must contain Layer 6 frame');
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
