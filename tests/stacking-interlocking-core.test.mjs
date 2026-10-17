#!/usr/bin/env node
/**
 * tests/stacking-interlocking-core.test.mjs
 * 
 * Verifies Step 1: Multi-Layer Stacking, Interlocking Core & Craft Mounts
 * (Matching papercut-hero.jpg Authentic Layered Paper-Cut Aesthetic)
 * 
 * Acceptance Criteria:
 * - AC-1: .pc-stack-fanned와 .pc-stack-cascade에서 상위 카드 뒤로 2~3장의 파스텔 색지가 회전각/오프셋을 두고 겹치며 호버 시 부채꼴로 확장됨.
 * - AC-2: .pc-slot-slit과 .pc-slot-insert에서 조각칼로 낸 듯한 순백 상단 림과 깊은 내부 음각 틈새 속으로 요소가 꽂혀 들어감.
 * - AC-3: .pc-photo-corner 4귀퉁이 색지 삼각 포켓 및 .pc-belly-band 종이 띠 래핑 겹침 완비.
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

describe('Step 1: Stacking & Interlocking Core Architecture', () => {

  // -------------------------------------------------------------------------
  // AC-1: Fanned and Cascading Multi-Layer Paper Stacks
  // -------------------------------------------------------------------------
  describe('AC-1: .pc-stack-fanned & .pc-stack-cascade multi-layer paper stacks', () => {
    it('should define .pc-stack-fanned and .pc-stack-cascade in both layout and ui stylesheets', () => {
      for (const [name, css] of [['papercut-layout.css', layoutCss], ['papercut-ui.css', uiCss]]) {
        assert.ok(css.includes('.pc-stack-fanned'), `${name} must include .pc-stack-fanned`);
        assert.ok(css.includes('.pc-stack-cascade'), `${name} must include .pc-stack-cascade`);
        assert.ok(css.includes('.pc-stack-underlay'), `${name} must include .pc-stack-underlay`);
      }
    });

    it('should configure pseudo-elements with pastel swatches and rotation angles for fanned stack', () => {
      for (const [name, css] of [['papercut-layout.css', layoutCss], ['papercut-ui.css', uiCss]]) {
        assert.ok(
          css.includes('.pc-stack-fanned::before') && css.includes('rotate(-3deg)'),
          `${name} must set -3deg initial rotation on .pc-stack-fanned::before`
        );
        assert.ok(
          css.includes('.pc-stack-fanned::after') && css.includes('rotate(2deg)'),
          `${name} must set 2deg initial rotation on .pc-stack-fanned::after`
        );
        assert.ok(
          css.includes('--pc-swatch-peach') && css.includes('--pc-swatch-mint'),
          `${name} must use pastel Peach and Mint swatches for fanned stack underlays`
        );
      }
    });

    it('should provide elastic fan expansion transforms on hover for .pc-stack-fanned', () => {
      for (const [name, css] of [['papercut-layout.css', layoutCss], ['papercut-ui.css', uiCss]]) {
        assert.ok(
          css.includes('.pc-stack-fanned:hover::before') && css.includes('rotate(-5deg) translate(-10px, -4px)'),
          `${name} must expand .pc-stack-fanned:hover::before to rotate(-5deg) translate(-10px, -4px)`
        );
        assert.ok(
          css.includes('.pc-stack-fanned:hover::after') && css.includes('rotate(4deg) translate(8px, -2px)'),
          `${name} must expand .pc-stack-fanned:hover::after to rotate(4deg) translate(8px, -2px)`
        );
      }
    });

    it('should configure stepped offsets for .pc-stack-cascade with smooth sliding on hover', () => {
      for (const [name, css] of [['papercut-layout.css', layoutCss], ['papercut-ui.css', uiCss]]) {
        assert.ok(
          css.includes('.pc-stack-cascade::before') && css.includes('translate(16px, 16px)'),
          `${name} must set 16px offset on .pc-stack-cascade::before`
        );
        assert.ok(
          css.includes('.pc-stack-cascade::after') && css.includes('translate(8px, 8px)'),
          `${name} must set 8px offset on .pc-stack-cascade::after`
        );
        assert.ok(
          css.includes('.pc-stack-cascade:hover::before') && css.includes('translate(22px, 22px)'),
          `${name} must expand .pc-stack-cascade:hover::before to 22px`
        );
      }
    });

    it('should feature 2-Tier Burnt Umber contact shadow and hover shadow expansion', () => {
      for (const [name, css] of [['papercut-layout.css', layoutCss], ['papercut-ui.css', uiCss]]) {
        assert.ok(
          css.includes('0 1.2px 1.8px rgba(46, 30, 20, 0.20)'),
          `${name} must include base 2-tier contact shadow for paper underlays`
        );
        assert.ok(
          css.includes('0 8px 18px -3px rgba(46, 30, 20, 0.16)'),
          `${name} must include lifted burnt umber shadow on stack hover`
        );
      }
    });

    it('should support explicit .pc-stack-underlay elements with pastel palette classes', () => {
      for (const [name, css] of [['papercut-layout.css', layoutCss], ['papercut-ui.css', uiCss]]) {
        assert.ok(css.includes('.pc-stack-underlay.pc-is-peach'), `${name} must include .pc-stack-underlay.pc-is-peach`);
        assert.ok(css.includes('.pc-stack-underlay.pc-is-mint'), `${name} must include .pc-stack-underlay.pc-is-mint`);
        assert.ok(css.includes('.pc-stack-underlay.pc-is-sand'), `${name} must include .pc-stack-underlay.pc-is-sand`);
        assert.ok(css.includes('.pc-stack-underlay.pc-is-lavender'), `${name} must include .pc-stack-underlay.pc-is-lavender`);
      }
    });
  });

  // -------------------------------------------------------------------------
  // AC-2: Knife-Cut Slit Interlocking (.pc-slot-slit, .pc-slot-insert)
  // -------------------------------------------------------------------------
  describe('AC-2: .pc-slot-slit & .pc-slot-insert knife-cut interlocking', () => {
    it('should define .pc-slot-slit with pure white knife-edge rim light and deep recessed shadow', () => {
      for (const [name, css] of [['papercut-layout.css', layoutCss], ['papercut-ui.css', uiCss]]) {
        assert.ok(css.includes('.pc-slot-slit'), `${name} must declare .pc-slot-slit`);
        assert.ok(
          css.includes('inset 0 1px 0 rgba(255, 255, 255, 0.95)') ||
          css.includes('inset 0 1px 0 rgba(255,255,255,0.95)'),
          `${name} must feature pure white knife-edge top rim light on slot slit`
        );
        assert.ok(
          css.includes('inset 0 3px 6px rgba(46, 30, 20, 0.24)') ||
          css.includes('inset 0 3px 6px rgba(46,30,20,0.24)'),
          `${name} must feature deep recessed shadow on slot slit`
        );
      }
    });

    it('should define .pc-slot-slit::before precision carved rim line', () => {
      for (const [name, css] of [['papercut-layout.css', layoutCss], ['papercut-ui.css', uiCss]]) {
        assert.ok(
          css.includes('.pc-slot-slit::before'),
          `${name} must declare .pc-slot-slit::before for carved rim line`
        );
        assert.ok(
          css.includes('rgba(255, 255, 255, 0.95)'),
          `${name} must use white highlight rim for slit line`
        );
      }
    });

    it('should define .pc-slot-insert with angled tuck transform and hover lift interaction', () => {
      for (const [name, css] of [['papercut-layout.css', layoutCss], ['papercut-ui.css', uiCss]]) {
        assert.ok(css.includes('.pc-slot-insert'), `${name} must declare .pc-slot-insert`);
        assert.ok(
          css.includes('translateY(-6px) rotate(-1deg)'),
          `${name} must feature angled insertion tuck on .pc-slot-insert`
        );
        assert.ok(
          css.includes('.pc-slot-insert:hover') && css.includes('translateY(-12px) rotate(0deg)'),
          `${name} must lift slot insert on hover/focus`
        );
      }
    });

    it('should define .pc-slot-pocket wrapper for seamless interlocking layering', () => {
      for (const [name, css] of [['papercut-layout.css', layoutCss], ['papercut-ui.css', uiCss]]) {
        assert.ok(css.includes('.pc-slot-pocket'), `${name} must declare .pc-slot-pocket`);
        assert.ok(
          css.includes('.pc-slot-pocket > .pc-slot-slit') &&
          css.includes('.pc-slot-pocket > .pc-slot-insert'),
          `${name} must establish z-index layering between slit and inserted element`
        );
      }
    });
  });

  // -------------------------------------------------------------------------
  // AC-3: Photo Corners (.pc-photo-corner) & Craft Belly Band (.pc-belly-band)
  // -------------------------------------------------------------------------
  describe('AC-3: .pc-photo-corner & .pc-belly-band craft mounts', () => {
    it('should define .pc-photo-corner with triangular clip-path and 4 corner positioning modifiers', () => {
      for (const [name, css] of [['papercut-layout.css', layoutCss], ['papercut-ui.css', uiCss]]) {
        assert.ok(css.includes('.pc-photo-corner'), `${name} must declare .pc-photo-corner`);
        assert.ok(css.includes('clip-path: polygon('), `${name} must use triangular clip-path`);
        assert.ok(css.includes('.pc-photo-corner.pc-is-top-left'), `${name} must define .pc-is-top-left`);
        assert.ok(css.includes('.pc-photo-corner.pc-is-top-right'), `${name} must define .pc-is-top-right`);
        assert.ok(css.includes('.pc-photo-corner.pc-is-bottom-left'), `${name} must define .pc-is-bottom-left`);
        assert.ok(css.includes('.pc-photo-corner.pc-is-bottom-right'), `${name} must define .pc-is-bottom-right`);
      }
    });

    it('should support pastel color swatches for photo corner pockets', () => {
      for (const [name, css] of [['papercut-layout.css', layoutCss], ['papercut-ui.css', uiCss]]) {
        assert.ok(css.includes('.pc-photo-corner.pc-is-peach'), `${name} must define peach photo corner`);
        assert.ok(css.includes('.pc-photo-corner.pc-is-mint'), `${name} must define mint photo corner`);
        assert.ok(css.includes('.pc-photo-corner.pc-is-sand'), `${name} must define sand photo corner`);
        assert.ok(css.includes('.pc-photo-corner.pc-is-kraft'), `${name} must define kraft photo corner`);
      }
    });

    it('should support automatic photo corners via .pc-has-photo-corners container', () => {
      for (const [name, css] of [['papercut-layout.css', layoutCss], ['papercut-ui.css', uiCss]]) {
        assert.ok(css.includes('.pc-has-photo-corners'), `${name} must declare .pc-has-photo-corners`);
        assert.ok(
          css.includes('.pc-has-photo-corners::before') && css.includes('.pc-has-photo-corners::after'),
          `${name} must mount diagonal corner pockets via pseudo-elements`
        );
      }
    });

    it('should define .pc-belly-band with edge protrusion and washi paper stripe texture', () => {
      for (const [name, css] of [['papercut-layout.css', layoutCss], ['papercut-ui.css', uiCss]]) {
        assert.ok(css.includes('.pc-belly-band'), `${name} must declare .pc-belly-band`);
        assert.ok(
          css.includes('left: -8px') && css.includes('right: -8px'),
          `${name} must wrap around card edges with -8px protrusion`
        );
        assert.ok(
          css.includes('.pc-belly-band::after') && css.includes('repeating-linear-gradient('),
          `${name} must apply paper craft stripe texture via repeating-linear-gradient`
        );
      }
    });

    it('should define vertical belly band (.pc-is-vertical, .pc-belly-band-v)', () => {
      for (const [name, css] of [['papercut-layout.css', layoutCss], ['papercut-ui.css', uiCss]]) {
        assert.ok(
          css.includes('.pc-belly-band.pc-is-vertical') || css.includes('.pc-belly-band-v'),
          `${name} must support vertical belly band`
        );
        assert.ok(
          css.includes('top: -8px') && css.includes('bottom: -8px'),
          `${name} must wrap vertically with -8px protrusion`
        );
      }
    });

    it('should strictly follow AGENTS.md Anti-Fingernail rule (no asymmetric border-l-4)', () => {
      for (const [name, css] of [['papercut-layout.css', layoutCss], ['papercut-ui.css', uiCss]]) {
        const stackSection = css.substring(css.indexOf('Step 1: Multi-Layer Stacking'));
        assert.ok(
          !stackSection.includes('border-l-4 rounded-'),
          `${name} must not contain asymmetric fingernail border-l-4 rounded-*`
        );
      }
    });

    it('should implement prefers-reduced-motion for all stacking and interlocking components', () => {
      for (const [name, css] of [['papercut-layout.css', layoutCss], ['papercut-ui.css', uiCss]]) {
        assert.ok(
          css.includes('@media (prefers-reduced-motion: reduce)'),
          `${name} must include prefers-reduced-motion media query`
        );
        assert.ok(
          css.includes('.pc-stack-fanned') &&
          css.includes('.pc-stack-cascade') &&
          css.includes('.pc-slot-slit') &&
          css.includes('.pc-slot-insert') &&
          css.includes('.pc-photo-corner') &&
          css.includes('.pc-belly-band'),
          `${name} must cover all Step 1 components under prefers-reduced-motion`
        );
        assert.ok(
          css.includes('transition: none !important') &&
          css.includes('animation: none !important'),
          `${name} must disable transitions and animations in reduced motion`
        );
      }
    });
  });
});
