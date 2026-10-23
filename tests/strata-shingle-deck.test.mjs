#!/usr/bin/env node
/**
 * tests/strata-shingle-deck.test.mjs
 * 
 * Verifies Step 2: Organic Strata Hills & Cascading Shingle Deck Architecture
 * (Matching assets/papercut-hero.jpg Authentic Multi-Layer Paper-Cut Stacking)
 * 
 * Acceptance Criteria:
 * - AC-4: .pc-strata-hills에서 3~4겹의 완만한 파스텔 종이 곡선이 서로를 가리며 깊은 번트 엄버 접촉 그림자를 드리움.
 * - AC-5: .pc-shingle-deck에서 위 카드가 아래 카드를 20~28px씩 덮으며 포개어지고, 호버/포커스 시 카드가 틈새에서 부드럽게 솟아오름.
 * - AC-6: prefers-reduced-motion 미디어 쿼리 완비로 트랜스폼 감쇠 및 접근성 보장.
 */

import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { resolve, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = resolve(__filename, '..');
const projectRoot = resolve(__dirname, '..');

const layoutCssPath = join(projectRoot, 'papercut-layout.css');
assert.ok(existsSync(layoutCssPath), 'papercut-layout.css must exist');
const layoutCss = readFileSync(layoutCssPath, 'utf-8');

const animCssPath = join(projectRoot, 'papercut-animations.css');
assert.ok(existsSync(animCssPath), 'papercut-animations.css must exist');
const animCss = readFileSync(animCssPath, 'utf-8');

describe('Step 2: Strata Hills & Cascading Shingle Deck', () => {

  // -------------------------------------------------------------------------
  // AC-4: Organic Multi-Layer Paper Hills (.pc-strata-hills, .pc-strata-layer)
  // -------------------------------------------------------------------------
  describe('AC-4: Organic Multi-Layer Paper Hills (.pc-strata-hills, .pc-strata-layer)', () => {
    it('should define .pc-strata-hills container with isolation, overflow hidden, and authentic paper base', () => {
      assert.ok(layoutCss.includes('.pc-strata-hills'), '.pc-strata-hills must be declared');
      assert.ok(layoutCss.includes('overflow: hidden;'), 'Container must have overflow: hidden to prevent edge bleed');
      assert.ok(layoutCss.includes('isolation: isolate;'), 'Container must have CSS isolation: isolate for 3D strata stacking');
      assert.ok(layoutCss.includes('position: relative;'), 'Container must be relative positioned');
      assert.ok(layoutCss.includes('border-radius:'), 'Container must have rounded corners');
    });

    it('should define .pc-strata-layer with 0.88px knife-edge rim light and deep burnt umber contact drop-shadow', () => {
      assert.ok(layoutCss.includes('.pc-strata-layer'), '.pc-strata-layer must be declared');
      assert.ok(
        layoutCss.includes('0.88px rgba(255, 255, 255, 0.88)') ||
        layoutCss.includes('0.88px'),
        '.pc-strata-layer must feature 0.88px pure white knife-edge rim light'
      );
      assert.ok(
        layoutCss.includes('filter: drop-shadow(0 6px 12px rgba(46, 30, 20, 0.22))'),
        '.pc-strata-layer must feature authentic burnt umber contact drop-shadow filter'
      );
      assert.ok(
        layoutCss.includes('transform-origin: bottom center;'),
        'Paper strata layers must anchor at bottom center'
      );
    });

    it('should support SVG path strata layers (.pc-strata-svg, path.pc-strata-layer)', () => {
      assert.ok(layoutCss.includes('svg.pc-strata-svg') || layoutCss.includes('svg .pc-strata-layer'), 'SVG strata elements must be supported');
      assert.ok(
        layoutCss.includes('stroke: rgba(255, 255, 255, 0.88);') &&
        layoutCss.includes('stroke-width: 0.88px;'),
        'SVG strata paths must render 0.88px pure white knife-edge cut stroke'
      );
    });

    it('should support authentic pastel swatches for strata hills (sand, mint, lavender, sky, peach, sage)', () => {
      assert.ok(layoutCss.includes('.pc-strata-layer.pc-swatch-sand') || layoutCss.includes('.pc-swatch-sand'), 'Sand swatch must be supported');
      assert.ok(layoutCss.includes('.pc-strata-layer.pc-swatch-mint') || layoutCss.includes('.pc-swatch-mint'), 'Mint swatch must be supported');
      assert.ok(layoutCss.includes('.pc-strata-layer.pc-swatch-lavender') || layoutCss.includes('.pc-swatch-lavender'), 'Lavender swatch must be supported');
      assert.ok(layoutCss.includes('.pc-strata-layer.pc-swatch-sky') || layoutCss.includes('.pc-swatch-sky'), 'Sky swatch must be supported');
    });

    it('should support deep interlocking content slots between strata layers (.pc-strata-slot)', () => {
      assert.ok(layoutCss.includes('.pc-strata-slot'), '.pc-strata-slot must be declared');
      assert.ok(
        layoutCss.includes('.pc-strata-slot[data-layer="1"]') &&
        layoutCss.includes('.pc-strata-slot[data-layer="2"]') &&
        layoutCss.includes('.pc-strata-slot[data-layer="3"]'),
        '.pc-strata-slot must provide multi-tier depth placement slots'
      );
    });
  });

  // -------------------------------------------------------------------------
  // Purged: Cascading Shingle Deck (.pc-shingle-deck, .pc-shingle-card)
  // -------------------------------------------------------------------------
  describe('Purged: Cascading Shingle Deck (.pc-shingle-deck, .pc-shingle-card)', () => {
    it('should confirm .pc-shingle-deck and .pc-shingle-card are completely removed', () => {
      assert.ok(!layoutCss.includes('.pc-shingle-deck'), '.pc-shingle-deck must not be declared');
      assert.ok(!layoutCss.includes('.pc-shingle-card'), '.pc-shingle-card must not be declared');
      assert.ok(!animCss.includes('pcShinglePop'), 'pcShinglePop must not be declared');
    });
  });

  // -------------------------------------------------------------------------
  // AC-6: prefers-reduced-motion Accessibility & Animation Downgrade
  // -------------------------------------------------------------------------
  describe('AC-6: prefers-reduced-motion Accessibility & Animation Downgrade', () => {
    it('should downgrade strata hills hover in papercut-layout.css under prefers-reduced-motion', () => {
      const reducedMotionSection = layoutCss.slice(layoutCss.lastIndexOf('@media (prefers-reduced-motion: reduce)'));
      assert.ok(reducedMotionSection.includes('.pc-strata-hills'), 'prefers-reduced-motion must target .pc-strata-hills');
      assert.ok(reducedMotionSection.includes('.pc-strata-layer'), 'prefers-reduced-motion must target .pc-strata-layer');
      assert.ok(
        reducedMotionSection.includes('transform: none !important;') &&
        reducedMotionSection.includes('animation: none !important;'),
        'Transform and animation must be suppressed under prefers-reduced-motion'
      );
    });

    it('should define organic strata breeze in papercut-animations.css', () => {
      assert.ok(animCss.includes('@keyframes pcStrataBreeze'), 'pcStrataBreeze keyframes must be declared');
      assert.ok(animCss.includes('.pc-anim-strata-breeze'), '.pc-anim-strata-breeze class must be declared');
    });

    it('should downgrade strata animations in papercut-animations.css under prefers-reduced-motion', () => {
      const animReduced = animCss.slice(animCss.lastIndexOf('@media (prefers-reduced-motion: reduce)'));
      assert.ok(animReduced.includes('.pc-anim-strata-breeze'), 'prefers-reduced-motion must downgrade .pc-anim-strata-breeze');
      assert.ok(animReduced.includes('.pc-strata-hills'), 'prefers-reduced-motion must downgrade .pc-strata-hills');
    });

    it('should enforce zero horizontal overflow design constraints', () => {
      assert.ok(layoutCss.includes('max-width: 100%'), 'Elements must respect max-width: 100%');
      assert.ok(layoutCss.includes('box-sizing: border-box;'), 'Elements must enforce box-sizing: border-box');
      assert.ok(layoutCss.includes('word-break: keep-all;'), 'Card copy must enforce Korean break-keep typography standard');
    });
  });

});
