#!/usr/bin/env node
/**
 * tests/shadowbox-craft-components.test.mjs
 * 
 * Verifies Step 2: Shadowbox Cards, Recessed Wells & Frame Bleed Architecture
 * (Matching papercut-hero.jpg Authentic Layered Paper-Cut Aesthetic)
 * 
 * Acceptance Criteria:
 * - AC-4: .pc-card, .pc-card-sheet, .pc-shadowbox-well에 음각 내부 그림자와 양각 베벨 외곽 림 결합.
 * - AC-5: 폼 컨트롤(.pc-input, .pc-select, .pc-input-paper, .pc-select-paper)에 도화지 창을 오려낸 듯한 음각 종이 인레이 효과 적용.
 * - AC-6: 프레임 밖으로 솟아오르는 탭 및 뱃지 돌출(.pc-frame-bleed) 유틸리티 및 와시 테이프, 접는 선, reduced-motion 지원.
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

describe('Step 2: Shadowbox Craft Components & Wells', () => {

  // -------------------------------------------------------------------------
  // AC-4: Shadowbox Wells, Recessed Mats, and Card Rim Bevels
  // -------------------------------------------------------------------------
  describe('AC-4: .pc-card, .pc-card-sheet, .pc-shadowbox-well bevel & shadows', () => {
    it('should define .pc-shadowbox-well and .pc-recessed-mat with authentic recessed shadow and rim', () => {
      assert.ok(
        layoutCss.includes('.pc-shadowbox-well') && layoutCss.includes('.pc-recessed-mat'),
        '.pc-shadowbox-well and .pc-recessed-mat classes must be declared'
      );
      assert.ok(
        layoutCss.includes('inset 0 3px 8px rgba(46, 30, 20, 0.18)') &&
        layoutCss.includes('inset 0 1px 2px rgba(46, 30, 20, 0.22)') &&
        layoutCss.includes('0 1px 0 rgba(255, 255, 255, 0.9)'),
        'Shadowbox well must feature 2-Tier inset shadow and white outer reflection bevel rim'
      );
      assert.ok(
        layoutCss.includes('#FAF7F0'),
        'Shadowbox well must use authentic cream cardstock base #FAF7F0'
      );
      assert.ok(
        layoutCss.includes('border: 1px solid rgba(46, 30, 20, 0.12)'),
        'Shadowbox well must feature subtle paper border'
      );
    });

    it('should define .pc-card and .pc-card-sheet with knife-cut top rim light and burnt umber shadows', () => {
      assert.ok(
        layoutCss.includes('.pc-card,') || layoutCss.includes('.pc-card {'),
        '.pc-card must be defined in papercut-layout.css'
      );
      assert.ok(
        layoutCss.includes('border-top: 1px solid rgba(255, 255, 255, 0.95)'),
        '.pc-card and .pc-card-sheet must feature top razor-cut rim light highlight'
      );
      assert.ok(
        layoutCss.includes('0 1px 0 rgba(255, 255, 255, 0.98) inset') ||
        layoutCss.includes('inset 0 1px 0 rgba(255, 255, 255, 0.98)'),
        'Cards must include outer white bevel reflection rim'
      );
      assert.ok(
        layoutCss.includes('.pc-card:hover,') && layoutCss.includes('transform: translateY(-3px)'),
        'Cards must have 3D paper elevation lift on hover'
      );
    });
  });

  // -------------------------------------------------------------------------
  // AC-5: Form Controls Inlay Wells (.pc-input, .pc-select, .pc-input-paper, .pc-select-paper)
  // -------------------------------------------------------------------------
  describe('AC-5: Form Controls Inlay Wells', () => {
    it('should define .pc-input-paper and .pc-select-paper with cutout paper well depth', () => {
      assert.ok(
        layoutCss.includes('.pc-input-paper') && layoutCss.includes('.pc-select-paper'),
        '.pc-input-paper and .pc-select-paper classes must be declared'
      );
      assert.ok(
        layoutCss.includes('inset 0 1.5px 3px rgba(46, 30, 20, 0.14)'),
        'Form controls must feature authentic cutout well depth shadow inset 0 1.5px 3px'
      );
      assert.ok(
        layoutCss.includes('background-color: #FAF7F0'),
        'Form paper controls must use cream paper background #FAF7F0'
      );
    });

    it('should support .pc-input and .pc-select standard controls with inlay shadows', () => {
      assert.ok(
        layoutCss.includes('.pc-input,') && layoutCss.includes('.pc-select'),
        'Form inputs and selects must have global inlay shadow definitions'
      );
      assert.ok(
        layoutCss.includes('border-radius: 8px'),
        'Form inputs must have precision 8px die-cut border radius'
      );
    });

    it('should provide focus states with mint highlight ring and elevated bevel', () => {
      assert.ok(
        layoutCss.includes('.pc-input-paper:focus') || layoutCss.includes('.pc-input.pc-is-inlay:focus'),
        'Focus states must be styled for inlay controls'
      );
      assert.ok(
        layoutCss.includes('rgba(163, 216, 195,'),
        'Focus states must use pastel mint highlight aura ring'
      );
    });
  });

  // -------------------------------------------------------------------------
  // AC-6: Frame Bleed Utilities, Washi Tape, Score Line & Reduced Motion
  // -------------------------------------------------------------------------
  describe('AC-6: Frame Bleed Utilities, Washi Tape & Craft Accents', () => {
    it('should define .pc-frame-bleed container utility with visible overflow', () => {
      assert.ok(
        layoutCss.includes('.pc-frame-bleed'),
        '.pc-frame-bleed utility class must be declared'
      );
      assert.ok(
        layoutCss.includes('overflow: visible !important'),
        '.pc-frame-bleed must explicitly permit overflow outside container boundaries'
      );
    });

    it('should define .pc-bleed-top and .pc-bleed-bottom with negative margins and 3D floating shadows', () => {
      assert.ok(
        layoutCss.includes('.pc-bleed-top') && layoutCss.includes('.pc-bleed-bottom'),
        '.pc-bleed-top and .pc-bleed-bottom must be declared'
      );
      assert.ok(
        layoutCss.includes('margin-top: -12px !important'),
        '.pc-bleed-top must feature -12px negative margin'
      );
      assert.ok(
        layoutCss.includes('margin-bottom: -12px !important'),
        '.pc-bleed-bottom must feature -12px negative margin'
      );
      assert.ok(
        layoutCss.includes('0 4px 10px rgba(46, 30, 20, 0.18)'),
        'Bleed elements must feature floating drop shadow'
      );
    });

    it('should provide .pc-bleed-badge and .pc-bleed-tab specialized protrusion utilities', () => {
      assert.ok(
        layoutCss.includes('.pc-bleed-badge') && layoutCss.includes('.pc-bleed-tab'),
        '.pc-bleed-badge and .pc-bleed-tab must be declared'
      );
    });

    it('should support .pc-washi-tape with jagged torn clip-path and pastel colorways', () => {
      assert.ok(
        layoutCss.includes('.pc-washi-tape'),
        '.pc-washi-tape masking tape must be defined'
      );
      assert.ok(
        layoutCss.includes('clip-path: polygon('),
        '.pc-washi-tape must feature torn serrated ends via clip-path'
      );
      assert.ok(
        layoutCss.includes('.pc-washi-tape-mint') || layoutCss.includes('.pc-washi-tape.pc-is-mint'),
        'Washi tape must support pastel color variants'
      );
    });

    it('should define .pc-score-line for paper craft crease folds', () => {
      assert.ok(
        layoutCss.includes('.pc-score-line'),
        '.pc-score-line crease line must be defined'
      );
      assert.ok(
        layoutCss.includes('border-top: 1px dashed rgba(46, 30, 20, 0.20)'),
        '.pc-score-line must feature dashed crease indentation'
      );
      assert.ok(
        layoutCss.includes('0 1px 0 rgba(255, 255, 255, 0.85)'),
        '.pc-score-line must have embossed white reflection highlight'
      );
    });

    it('should implement prefers-reduced-motion for all shadowbox and bleed animations', () => {
      assert.ok(
        layoutCss.includes('@media (prefers-reduced-motion: reduce)'),
        'prefers-reduced-motion media query must be present in papercut-layout.css'
      );
      assert.ok(
        layoutCss.includes('transform: none !important') && layoutCss.includes('transition: none !important'),
        'prefers-reduced-motion must disable transforms and transitions'
      );
    });
  });
});
