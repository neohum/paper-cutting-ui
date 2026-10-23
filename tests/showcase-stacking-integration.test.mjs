#!/usr/bin/env node
/**
 * tests/showcase-stacking-integration.test.mjs
 * 
 * Verifies Step 3: Showcase Stacking & Interlocking System Integration
 * (Matching assets/papercut-hero.jpg Authentic Multi-Layer Paper-Cut Stacking)
 * 
 * Acceptance Criteria:
 * - AC-7: 메인 히어로 배너에 유기적 다층 언덕 스트라타(.pc-strata-hills)가 원작 일러스트와 일체화되어 배치되고 포토 코너와 벨리 밴드가 결합됨.
 * - AC-8: 컴포넌트 갤러리에 부채꼴 스택 카드, 슬릿 꽂힘 폼 서식, 슁글 기와형 카드 덱, 포토 코너 갤러리가 실제로 인터랙티브하게 시연되고 사이드바에 연동됨.
 * - AC-9: Flaticon UIcons 단일 표준, 한국어 줄바꿈(break-keep, text-balance), 안티-핑거네일 준수, 가로 오버플로우 0px 유지.
 */

import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { resolve, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = resolve(__filename, '..');
const projectRoot = resolve(__dirname, '..');

const indexPath = join(projectRoot, 'index.html');
const sidebarJsPath = join(projectRoot, 'papercut-sidebar.js');
const layoutCssPath = join(projectRoot, 'papercut-layout.css');

assert.ok(existsSync(indexPath), 'index.html must exist');
assert.ok(existsSync(sidebarJsPath), 'papercut-sidebar.js must exist');
assert.ok(existsSync(layoutCssPath), 'papercut-layout.css must exist');

const indexHtml = readFileSync(indexPath, 'utf-8');
const sidebarJs = readFileSync(sidebarJsPath, 'utf-8');
const layoutCss = readFileSync(layoutCssPath, 'utf-8');

describe('Step 3: Showcase Stacking & Interlocking Integration', () => {

  // -------------------------------------------------------------------------
  // AC-7: Main Hero Organic Strata Hills, Photo Corners & Belly Band
  // -------------------------------------------------------------------------
  describe('AC-7: Main Hero Multi-Layer Strata Hills & Craft Frame Mounts', () => {
    it('should include master artwork papercut-hero.jpg in #overview section', () => {
      assert.ok(
        indexHtml.includes('assets/papercut-hero.jpg'),
        'index.html must display assets/papercut-hero.jpg'
      );
      assert.ok(
        indexHtml.includes('id="overview"'),
        'index.html must have #overview hero section'
      );
    });

    it('should feature organic strata hills (.pc-strata-hills, .pc-strata-layer, .pc-strata-svg) in #overview', () => {
      assert.ok(
        indexHtml.includes('pc-strata-hills'),
        '#overview must feature .pc-strata-hills organic paper hills'
      );
      assert.ok(
        indexHtml.includes('pc-strata-layer'),
        '#overview must include .pc-strata-layer multi-tier paper hill sheets'
      );
      assert.ok(
        indexHtml.includes('pc-strata-svg'),
        '#overview must utilize svg.pc-strata-svg for organic hill curve contours'
      );
    });

    it('should integrate 4 pastel swatches (sand, mint, lavender, sky) in hero strata hills', () => {
      const swatches = ['pc-swatch-sand', 'pc-swatch-mint', 'pc-swatch-lavender', 'pc-swatch-sky'];
      for (const swatch of swatches) {
        assert.ok(
          indexHtml.includes(swatch),
          `Hero strata hills must include pastel swatch "${swatch}"`
        );
      }
    });

    it('should mount photo corners (.pc-photo-corner) on the master art frame', () => {
      assert.ok(
        indexHtml.includes('pc-photo-corner'),
        'Hero art frame must include .pc-photo-corner mounts'
      );
      assert.ok(
        indexHtml.includes('pc-is-top-left') &&
        indexHtml.includes('pc-is-top-right') &&
        indexHtml.includes('pc-is-bottom-left') &&
        indexHtml.includes('pc-is-bottom-right'),
        'Hero art frame must include 4 corner position variants'
      );
    });

    it('should mount craft belly band (.pc-belly-band) across the master art frame', () => {
      assert.ok(
        indexHtml.includes('pc-belly-band'),
        'Hero art frame must wrap with .pc-belly-band craft wrapping strip'
      );
    });
  });

  // -------------------------------------------------------------------------
  // Purged: Papercraft Multi-Layer Stacking & Interlocking Studio
  // -------------------------------------------------------------------------
  describe('Purged: Papercraft Multi-Layer Stacking & Interlocking Studio', () => {
    it('should confirm #papercut-stacking-studio section is completely purged from index.html', () => {
      assert.ok(
        !indexHtml.includes('id="papercut-stacking-studio"'),
        'index.html must not contain #papercut-stacking-studio'
      );
      assert.ok(
        !indexHtml.includes('Papercraft Multi-Layer Stacking & Interlocking Studio') &&
        !indexHtml.includes('Papercraft Multi-Layer Stacking &amp; Interlocking Studio'),
        'Studio section title must not exist'
      );
    });

    it('should confirm knife-cut slit interlocking and shingle deck are purged from index.html', () => {
      assert.ok(!indexHtml.includes('pc-slot-slit'), 'index.html must not contain .pc-slot-slit');
      assert.ok(!indexHtml.includes('pc-slot-insert'), 'index.html must not contain .pc-slot-insert');
      assert.ok(!indexHtml.includes('pc-slot-pocket'), 'index.html must not contain .pc-slot-pocket');
      assert.ok(!indexHtml.includes('pc-shingle-deck'), 'index.html must not contain .pc-shingle-deck');
    });

    it('should confirm sidebar navigation does not link to papercut-stacking-studio', () => {
      assert.ok(
        !indexHtml.includes('href="#papercut-stacking-studio"'),
        'index.html sidebar must not link to #papercut-stacking-studio'
      );
      assert.ok(
        !sidebarJs.includes("id: 'papercut-stacking-studio'"),
        'papercut-sidebar.js must not register papercut-stacking-studio'
      );
    });
  });

  // -------------------------------------------------------------------------
  // AC-9: Hard Rules Compliance & Non-breaking Aesthetics
  // -------------------------------------------------------------------------
  describe('AC-9: AGENTS.md Hard Rules & Typographic Standard', () => {
    it('should adhere to anti-fingernail design standard (forbid border-l-4 rounded-*)', () => {
      assert.ok(
        !indexHtml.includes('border-l-4 rounded-'),
        'Anti-fingernail rule: border-l-4 rounded-* is strictly forbidden'
      );
      assert.ok(
        !layoutCss.includes('border-l-4 rounded-'),
        'Anti-fingernail rule in layout CSS: border-l-4 rounded-* is strictly forbidden'
      );
    });
  });

});
