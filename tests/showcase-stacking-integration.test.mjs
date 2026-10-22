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
  // AC-8: Showcase Section & 5 Stacking/Interlocking Studio Demos
  // -------------------------------------------------------------------------
  describe('AC-8: Papercraft Multi-Layer Stacking & Interlocking Studio Showcase', () => {
    it('should declare #papercut-stacking-studio section in index.html', () => {
      assert.ok(
        indexHtml.includes('id="papercut-stacking-studio"'),
        'index.html must have #papercut-stacking-studio dedicated section'
      );
      assert.ok(
        indexHtml.includes('Papercraft Multi-Layer Stacking &amp; Interlocking Studio') ||
        indexHtml.includes('Papercraft Multi-Layer Stacking & Interlocking Studio'),
        'Studio section title must be declared'
      );
    });

    it('should demonstrate fanned and cascading paper decks (.pc-stack-fanned, .pc-stack-cascade)', () => {
      assert.ok(
        indexHtml.includes('pc-stack-fanned'),
        'Studio section must showcase .pc-stack-fanned deck demo'
      );
      assert.ok(
        indexHtml.includes('pc-stack-cascade'),
        'Studio section must showcase .pc-stack-cascade deck demo'
      );
    });

    it('should demonstrate precision knife-cut slit interlocking (.pc-slot-slit, .pc-slot-insert)', () => {
      assert.ok(
        indexHtml.includes('pc-slot-slit'),
        'Studio section must showcase .pc-slot-slit carved slot line'
      );
      assert.ok(
        indexHtml.includes('pc-slot-insert'),
        'Studio section must showcase .pc-slot-insert inserted ticket or button'
      );
      assert.ok(
        indexHtml.includes('pc-slot-pocket'),
        'Studio section must showcase .pc-slot-pocket interlocking container'
      );
    });

    it('should demonstrate cascading shingle deck with overlapping cards (.pc-shingle-deck, .pc-shingle-card)', () => {
      assert.ok(
        indexHtml.includes('pc-shingle-deck'),
        'Studio section must showcase .pc-shingle-deck container'
      );
      assert.ok(
        indexHtml.includes('pc-shingle-card'),
        'Studio section must feature multiple .pc-shingle-card items'
      );
      const cardMatches = indexHtml.match(/class="[^"]*pc-shingle-card[^"]*"/g) || [];
      assert.ok(
        cardMatches.length >= 3,
        `Shingle deck must include at least 3 stacked cards, found ${cardMatches.length}`
      );
    });

    it('should demonstrate craft photo corners and belly band mount cards', () => {
      const studioSection = indexHtml.split('id="papercut-stacking-studio"')[1]?.split('</section>')[0];
      assert.ok(studioSection, 'Studio section content must exist');
      assert.ok(
        studioSection.includes('pc-photo-corner'),
        'Studio section must demonstrate .pc-photo-corner mounting'
      );
      assert.ok(
        studioSection.includes('pc-belly-band'),
        'Studio section must demonstrate .pc-belly-band paper wrapping'
      );
    });

    it('should synchronize sidebar navigation in both index.html and papercut-sidebar.js', () => {
      // index.html static sidebar
      assert.ok(
        indexHtml.includes('href="#papercut-stacking-studio"'),
        'index.html sidebar must link to #papercut-stacking-studio'
      );
      assert.ok(
        indexHtml.includes('레이어드 스택 &amp; 겹침') || indexHtml.includes('레이어드 스택 & 겹침'),
        'Sidebar label "레이어드 스택 & 겹침" must be displayed'
      );
      assert.ok(
        indexHtml.includes('NEW STACK'),
        'Sidebar badge "NEW STACK" must be present'
      );

      // papercut-sidebar.js dynamic router
      assert.ok(
        sidebarJs.includes("id: 'papercut-stacking-studio'"),
        'papercut-sidebar.js must register papercut-stacking-studio section'
      );
      assert.ok(
        sidebarJs.includes("NEW STACK"),
        'papercut-sidebar.js must register NEW STACK badge'
      );
    });
  });

  // -------------------------------------------------------------------------
  // AC-9: Hard Rules Compliance & Non-breaking Aesthetics
  // -------------------------------------------------------------------------
  describe('AC-9: AGENTS.md Hard Rules & Typographic Standard', () => {
    it('should use Flaticon UIcons (fi fi-rr-*) standard without inline SVGs replacing icon icons', () => {
      const studioSection = indexHtml.split('id="papercut-stacking-studio"')[1]?.split('</section>')[0] || '';
      const iconMatches = studioSection.match(/fi fi-rr-[a-z0-9-]+/g) || [];
      assert.ok(
        iconMatches.length >= 5,
        `Studio section must use standard Flaticon UIcons (fi fi-rr-*), found ${iconMatches.length}`
      );
      // Ensure no Lucide or Heroicon prefixes in studio
      assert.ok(!studioSection.includes('lucide-'), 'Must not mix Lucide icon classes');
      assert.ok(!studioSection.includes('heroicon-'), 'Must not mix Heroicon classes');
    });

    it('should adhere to Korean typography standards (break-keep, text-balance) and forbid break-all', () => {
      const studioSection = indexHtml.split('id="papercut-stacking-studio"')[1]?.split('</section>')[0] || '';
      assert.ok(
        studioSection.includes('break-keep'),
        'Studio section must apply Korean break-keep typography'
      );
      assert.ok(
        !studioSection.includes('break-all'),
        'break-all is strictly forbidden by AGENTS.md Hard Rules'
      );
    });

    it('should adhere to button and badge centering standards (inline-flex items-center justify-center leading-none)', () => {
      const studioSection = indexHtml.split('id="papercut-stacking-studio"')[1]?.split('</section>')[0] || '';
      assert.ok(
        studioSection.includes('inline-flex items-center justify-center leading-none'),
        'Buttons and badges must enforce inline-flex items-center justify-center leading-none'
      );
    });

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
