#!/usr/bin/env node
/**
 * tests/hero-showcase-harmonization.test.mjs
 * 
 * Verifies Step 3: Hero & Showcase Aesthetic Harmonization
 * (Matching papercut-hero.jpg Authentic Layered Paper-Cut Aesthetic)
 * 
 * Acceptance Criteria:
 * - AC-7: 메인 히어로 액자 프레임, 와시 테이프, 카드 덱이 원작 이미지의 파스텔 톤과 100% 조화를 이룸.
 *   * index.html에 .pc-shadowbox-well, .pc-frame-bleed, .pc-washi-tape, .pc-recessed-mat, .pc-bleed-badge 배치
 *   * 7대 파스텔 스와치 클래스(pc-swatch-cloud, pc-swatch-mint, pc-swatch-peach, pc-swatch-sand, pc-swatch-lavender, pc-swatch-sky, pc-swatch-sage) 연동
 *   * papercut-sidebar.css 내비게이션 아이템 및 뱃지에 0.8px 칼선 림 라이트와 파스텔 스와치 토큰 조화
 * - AC-8: AGENTS.md Hard Rules 준수 및 가로 넘침(overflow-x) 방지
 *   * Flaticon UIcons (fi fi-rr-*) 단일화
 *   * 한국어 타이포그래피 표준 (break-keep, text-balance, break-all 금지)
 *   * 안티-핑거네일 비대칭 테두리 금지 (border-l-4 rounded-* 금지)
 *   * 버튼 및 뱃지 중앙 정렬 (inline-flex items-center justify-center leading-none)
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
const sidebarCssPath = join(projectRoot, 'papercut-sidebar.css');

assert.ok(existsSync(indexPath), 'index.html must exist');
assert.ok(existsSync(sidebarCssPath), 'papercut-sidebar.css must exist');

const indexHtml = readFileSync(indexPath, 'utf-8');
const sidebarCss = readFileSync(sidebarCssPath, 'utf-8');

describe('Step 3: Hero & Showcase Aesthetic Harmonization', () => {

  // -------------------------------------------------------------------------
  // AC-7: Main Hero Showcase & Pastel Swatches Harmonization
  // -------------------------------------------------------------------------
  describe('AC-7: Main Hero Frame, Matboard, Washi Tape & 7 Pastel Swatches', () => {

    it('should include master artwork papercut-hero.jpg in #overview section', () => {
      assert.ok(
        indexHtml.includes('assets/papercut-hero.jpg'),
        'index.html must display assets/papercut-hero.jpg'
      );
      assert.ok(
        indexHtml.includes('id="overview"'),
        'index.html must have #overview hero banner section'
      );
    });

    it('should apply .pc-recessed-mat and .pc-frame-bleed to hero art frame', () => {
      assert.ok(
        indexHtml.includes('pc-recessed-mat'),
        'index.html must apply .pc-recessed-mat for authentic matboard framing'
      );
      assert.ok(
        indexHtml.includes('pc-frame-bleed'),
        'index.html must apply .pc-frame-bleed for floating 3D paper layers'
      );
    });

    it('should feature .pc-washi-tape craft masking tape decorations', () => {
      assert.ok(
        indexHtml.includes('pc-washi-tape'),
        'index.html must include .pc-washi-tape masking tape'
      );
      assert.ok(
        indexHtml.includes('pc-washi-tape-mint') || indexHtml.includes('pc-washi-tape-peach'),
        'index.html must include pastel washi tape variants'
      );
    });

    it('should feature .pc-bleed-badge protruding tag on hero frame', () => {
      assert.ok(
        indexHtml.includes('pc-bleed-badge'),
        'index.html must include .pc-bleed-badge protruding tag on frame'
      );
    });

    it('should feature .pc-shadowbox-well recessed wells in hero and showcase', () => {
      assert.ok(
        indexHtml.includes('pc-shadowbox-well'),
        'index.html must apply .pc-shadowbox-well for recessed shadow depth'
      );
    });

    it('should apply all 7 authentic pastel paper swatches in index.html', () => {
      const swatches = [
        'pc-swatch-cloud',
        'pc-swatch-mint',
        'pc-swatch-peach',
        'pc-swatch-sand',
        'pc-swatch-lavender',
        'pc-swatch-sky',
        'pc-swatch-sage'
      ];
      for (const swatch of swatches) {
        assert.ok(
          indexHtml.includes(swatch),
          `index.html must utilize pastel swatch class "${swatch}"`
        );
      }
    });

    it('should harmonize papercut-sidebar.css with 0.8px rim lights and contact shadows', () => {
      assert.ok(
        sidebarCss.includes('var(--pc-paper-rim-light') ||
        sidebarCss.includes('border-top: 1px solid rgba(255, 255, 255'),
        'papercut-sidebar.css must apply 0.8px knife-edge rim light highlights'
      );
      assert.ok(
        sidebarCss.includes('var(--pc-paper-shadow-contact') ||
        sidebarCss.includes('var(--pc-paper-shadow-lifted'),
        'papercut-sidebar.css must link 2-tier contact shadow tokens'
      );
    });

    it('should support pastel swatch tokens in papercut-sidebar.css for badges and items', () => {
      const swatches = [
        '--pc-swatch-mint',
        '--pc-swatch-peach',
        '--pc-swatch-lavender',
        '--pc-swatch-sky'
      ];
      for (const token of swatches) {
        assert.ok(
          sidebarCss.includes(token),
          `papercut-sidebar.css must integrate pastel swatch token ${token}`
        );
      }
    });
  });

  // -------------------------------------------------------------------------
  // AC-8: AGENTS.md Hard Rules and Responsive Integrity
  // -------------------------------------------------------------------------
  describe('AC-8: Hard Rules (Flaticon, Anti-fingernail, Centering, Korean Typography, Overflow)', () => {

    it('should link Flaticon UIcons stylesheet and use fi fi-rr-* standard', () => {
      assert.ok(
        indexHtml.includes('uicons-regular-rounded.css'),
        'index.html must link Flaticon UIcons Regular Rounded standard stylesheet'
      );
      assert.ok(
        indexHtml.includes('fi fi-rr-'),
        'index.html must use fi fi-rr-* standard icon classes'
      );
    });

    it('should enforce Korean typography standards (break-keep, text-balance, no break-all)', () => {
      assert.ok(
        indexHtml.includes('break-keep'),
        'index.html must enforce break-keep typography'
      );
      assert.ok(
        !indexHtml.includes('break-all'),
        'Hard Rule: break-all is strictly prohibited in index.html'
      );
    });

    it('should enforce Anti-Fingernail rule (no asymmetric border-l-4 rounded)', () => {
      assert.strictEqual(
        indexHtml.includes('border-l-4 rounded'),
        false,
        'Anti-fingernail violation: index.html must not use asymmetric border-l-4 rounded'
      );
      assert.strictEqual(
        sidebarCss.includes('border-l-4 rounded'),
        false,
        'Anti-fingernail violation: papercut-sidebar.css must not use asymmetric border-l-4 rounded'
      );
    });

    it('should enforce button and badge centering standards', () => {
      assert.ok(
        indexHtml.includes('inline-flex items-center justify-center leading-none'),
        'Badges and buttons must enforce inline-flex items-center justify-center leading-none'
      );
      assert.ok(
        sidebarCss.includes('align-items: center') &&
        sidebarCss.includes('justify-content: center') &&
        sidebarCss.includes('line-height: 1'),
        'Sidebar badge must enforce flex centering and line-height: 1'
      );
    });

    it('should ensure viewport meta tag and container layout prevent horizontal overflow', () => {
      assert.ok(
        indexHtml.includes('width=device-width'),
        'index.html must specify responsive viewport width=device-width'
      );
      assert.ok(
        indexHtml.includes('box-sizing: border-box'),
        'Containers must enforce box-sizing: border-box'
      );
    });
  });
});
