#!/usr/bin/env node
/**
 * tests/two-sheet-nested-card.test.mjs
 * 
 * Verifies Step 1: Authentic Two-Sheet Nested Paper Card Stacking (Framed Matboard Underlay)
 * (Matching plans/papercut-two-sheet-nested-card.plan.md - Step 1)
 * 
 * Acceptance Criteria:
 * - AC-1: .pc-card, .pc-card-sheet, .pc-card-stacked, .pc-card-nested에 사방 5~7px 더 크게 확장된 뒷 종이(::after 또는 언더레이) 레이어가 깔려 2장의 종이가 정갈하게 포개어진 층위를 형성함.
 * - AC-2: 앞 종이는 뒷 종이에 1-Tier 접촉 그림자(0 1.5px 3.5px rgba(46, 30, 20, 0.14))를 드리우고, 뒷 종이는 바닥에 2-Tier 번트 엄버 그림자(0 4px 14px -2px rgba(46, 30, 20, 0.16), 0 1.5px 3px rgba(46, 30, 20, 0.10))를 드리움.
 * - AC-3: 앞 종이와 뒷 종이 모두에 0.88px 순백 칼선 림 라이트(inset/border-top)가 독립적으로 빛나고, 안티-핑거네일 대칭 1px 테두리가 적용됨.
 * - AC-4: 웜 크래프트 베이스(#F3ECE1) 및 7대 파스텔 스와치 언더레이 변형(.pc-underlay-*)과 prefers-reduced-motion 지원.
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
const uiCssPath = join(projectRoot, 'papercut-ui.css');

assert.ok(existsSync(layoutCssPath), 'papercut-layout.css must exist');
assert.ok(existsSync(uiCssPath), 'papercut-ui.css must exist');

const layoutCss = readFileSync(layoutCssPath, 'utf-8');
const uiCss = readFileSync(uiCssPath, 'utf-8');

describe('Step 1: Authentic Two-Sheet Nested Paper Card Stacking Architecture', () => {

  // -------------------------------------------------------------------------
  // AC-1: Nested Two-Sheet Stacking Structure & Underlay Dimensions
  // -------------------------------------------------------------------------
  describe('AC-1: Nested Two-Sheet Stacking Structure & Concentric Underlay', () => {
    it('should define .pc-card, .pc-card-sheet, .pc-card-stacked, and .pc-card-nested in both stylesheets', () => {
      for (const [name, css] of [['papercut-layout.css', layoutCss], ['papercut-ui.css', uiCss]]) {
        assert.ok(css.includes('.pc-card'), `${name} must include .pc-card selector`);
        assert.ok(css.includes('.pc-card-sheet'), `${name} must include .pc-card-sheet selector`);
        assert.ok(css.includes('.pc-card-stacked'), `${name} must include .pc-card-stacked selector`);
        assert.ok(css.includes('.pc-card-nested'), `${name} must include .pc-card-nested selector`);
      }
    });

    it('should configure backing underlay sheet (::after / .pc-card-underlay) spanning 6px uniformly on all sides', () => {
      for (const [name, css] of [['papercut-layout.css', layoutCss], ['papercut-ui.css', uiCss]]) {
        assert.ok(
          css.includes('.pc-card::after') && css.includes('inset: -6px'),
          `${name} must set inset: -6px on backing underlay sheet for uniform concentric border`
        );
        assert.ok(
          css.includes('position: absolute') && css.includes('z-index: -1'),
          `${name} must position underlay sheet behind main card via absolute z-index: -1`
        );
        assert.ok(
          css.includes('pointer-events: none'),
          `${name} must disable pointer events on backing underlay`
        );
      }
    });

    it('should maintain parallel concentric curvature with border-radius: calc(16px + 4px)', () => {
      for (const [name, css] of [['papercut-layout.css', layoutCss], ['papercut-ui.css', uiCss]]) {
        assert.ok(
          css.includes('border-radius: calc(16px + 4px)'),
          `${name} must use concentric calc(16px + 4px) curvature for underlay sheet`
        );
      }
    });
  });

  // -------------------------------------------------------------------------
  // AC-2: 2-Tier Burnt Umber Shadow Stacking & Hover Lift Dynamics
  // -------------------------------------------------------------------------
  describe('AC-2: 2-Tier Burnt Umber Shadow Stacking & Elevation Lift', () => {
    it('should cast 1-tier contact shadow from front card onto backing underlay sheet', () => {
      for (const [name, css] of [['papercut-layout.css', layoutCss], ['papercut-ui.css', uiCss]]) {
        assert.ok(
          css.includes('0 1.5px 3.5px rgba(46, 30, 20, 0.14)'),
          `${name} front card must cast delicate 1-tier contact shadow onto underlay`
        );
      }
    });

    it('should cast 2-tier Burnt Umber shadow from backing underlay sheet onto desk/canvas', () => {
      for (const [name, css] of [['papercut-layout.css', layoutCss], ['papercut-ui.css', uiCss]]) {
        assert.ok(
          css.includes('0 4px 14px -2px rgba(46, 30, 20, 0.16)'),
          `${name} underlay must cast deep 4px/14px burnt umber shadow`
        );
        assert.ok(
          css.includes('0 1.5px 3px rgba(46, 30, 20, 0.10)'),
          `${name} underlay must cast subtle 1.5px/3px secondary shadow stop`
        );
      }
    });

    it('should smoothly elevate front card and expand shadow depth on hover', () => {
      for (const [name, css] of [['papercut-layout.css', layoutCss], ['papercut-ui.css', uiCss]]) {
        assert.ok(
          css.includes('transform: translateY(-2px)'),
          `${name} must lift card by translateY(-2px) on hover`
        );
        assert.ok(
          css.includes('0 3px 8px rgba(46, 30, 20, 0.18)'),
          `${name} front card shadow must expand on hover to 3px/8px`
        );
        assert.ok(
          css.includes('0 8px 22px -3px rgba(46, 30, 20, 0.20)'),
          `${name} underlay shadow must deepen on hover to 8px/22px`
        );
      }
    });
  });

  // -------------------------------------------------------------------------
  // AC-3: Dual Knife-Cut White Rim Lights & Anti-Fingernail Symmetry
  // -------------------------------------------------------------------------
  describe('AC-3: Dual Knife-Cut White Rim Lights & Symmetric Borders', () => {
    it('should highlight front card with dual white knife-cut bevel rims', () => {
      for (const [name, css] of [['papercut-layout.css', layoutCss], ['papercut-ui.css', uiCss]]) {
        assert.ok(
          css.includes('inset 0 1px 0 rgba(255, 255, 255, 0.98)'),
          `${name} front card must have inset 1px white rim highlight`
        );
        assert.ok(
          css.includes('inset 0 0 0 0.88px rgba(255, 255, 255, 0.92)'),
          `${name} front card must have 0.88px contour rim bevel`
        );
      }
    });

    it('should illuminate underlay sheet top edge with independent 0.88px white rim light', () => {
      for (const [name, css] of [['papercut-layout.css', layoutCss], ['papercut-ui.css', uiCss]]) {
        assert.ok(
          css.includes('border-top: 1px solid rgba(255, 255, 255, 0.92)'),
          `${name} underlay sheet must feature independent top razor-cut rim light`
        );
      }
    });

    it('should strictly follow AGENTS.md Anti-Fingernail symmetric 1px paper borders', () => {
      for (const [name, css] of [['papercut-layout.css', layoutCss], ['papercut-ui.css', uiCss]]) {
        assert.ok(
          css.includes('border: 1px solid rgba(46, 30, 20, 0.12)'),
          `${name} front card must use symmetric 1px umber border`
        );
        assert.ok(
          css.includes('border: 1px solid rgba(46, 30, 20, 0.14)'),
          `${name} underlay sheet must use symmetric 1px umber border`
        );
      }
    });
  });

  // -------------------------------------------------------------------------
  // AC-4: Warm Kraft Base, Pastel Swatches & Reduced Motion Accessibility
  // -------------------------------------------------------------------------
  describe('AC-4: Warm Kraft Base, Pastel Swatches & Accessibility', () => {
    it('should define warm kraft base (#F3ECE1) default for card underlays', () => {
      for (const [name, css] of [['papercut-layout.css', layoutCss], ['papercut-ui.css', uiCss]]) {
        assert.ok(
          css.includes('#F3ECE1'),
          `${name} must declare #F3ECE1 warm kraft matboard tone`
        );
      }
    });

    it('should provide complete pastel swatch underlay modifier classes', () => {
      const swatches = [
        'pc-underlay-peach',
        'pc-underlay-mint',
        'pc-underlay-lavender',
        'pc-underlay-sand',
        'pc-underlay-sky',
        'pc-underlay-sage',
        'pc-underlay-cloud'
      ];
      for (const [name, css] of [['papercut-layout.css', layoutCss], ['papercut-ui.css', uiCss]]) {
        for (const swatch of swatches) {
          assert.ok(
            css.includes(`.${swatch}`),
            `${name} must provide pastel swatch underlay class .${swatch}`
          );
        }
      }
    });

    it('should gracefully degrade animations on prefers-reduced-motion', () => {
      for (const [name, css] of [['papercut-layout.css', layoutCss], ['papercut-ui.css', uiCss]]) {
        assert.ok(
          css.includes('@media (prefers-reduced-motion: reduce)'),
          `${name} must include prefers-reduced-motion media query`
        );
        assert.ok(
          css.includes('transform: none !important'),
          `${name} must disable card lift transforms under reduced motion`
        );
      }
    });
  });

});
