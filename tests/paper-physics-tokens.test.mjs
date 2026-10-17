#!/usr/bin/env node
/**
 * tests/paper-physics-tokens.test.mjs
 * 
 * Verifies Step 1: Core Physics Tokens & Spring-Damper Solver
 * - AC-1: CSS physics variables standardization in :root and PaperCutMotion.tokens
 * - AC-2: prefers-reduced-motion: reduce graceful degradation and 0.01ms instant completion
 * - AC-3: 2nd-order ODE spring-damper physics solver and Sleep-on-Settle CSS variable injection
 */

import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { resolve, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = resolve(__filename, '..');
const projectRoot = resolve(__dirname, '..');

// Load papercut-animations.js
await import('../papercut-animations.js');
const PaperCutMotion = globalThis.PaperCutMotion;

console.log('🧪 Starting tests: paper-physics-tokens.test.mjs\n');

// ---------------------------------------------------------------------------
// 1. AC-1: CSS Variable Tokens & JS Physics Tokens Standardization
// ---------------------------------------------------------------------------
console.log('▶ Test 1: Checking CSS physics tokens in papercut-animations.css (AC-1)...');
const cssContent = readFileSync(join(projectRoot, 'papercut-animations.css'), 'utf-8');

const requiredCssTokens = [
  '--pc-paper-stiffness: 280;',
  '--pc-paper-damping: 24;',
  '--pc-paper-mass: 1.0;',
  '--pc-perspective-depth: 1200px;',
  '--pc-light-distance: 800px;',
  '--pc-paper-air-drag: 0.15;',
  '--pc-paper-curl-radius: 40px;',
  '--pc-paper-bounce: 0.25;',
  '--pc-paper-friction: 0.08;',
  '--pc-paper-shear-angle: 12deg;',
  '--pc-paper-tear-threshold: 60px;'
];

for (const token of requiredCssTokens) {
  assert.ok(
    cssContent.includes(token),
    `CSS must define token: "${token}"`
  );
}

// Check GPU acceleration promotion
assert.ok(
  cssContent.includes('will-change: transform;'),
  'CSS must include GPU acceleration will-change: transform'
);
assert.ok(
  cssContent.includes('transform: translateZ(0);'),
  'CSS must include GPU acceleration transform: translateZ(0)'
);
assert.ok(
  cssContent.includes('backface-visibility: hidden;'),
  'CSS must include backface-visibility: hidden'
);

console.log('  ✔ All required CSS physics tokens and GPU acceleration rules verified.');

console.log('▶ Test 2: Checking JS PaperCutMotion.tokens object (AC-1)...');
assert.ok(PaperCutMotion, 'PaperCutMotion must be globally exported');
assert.ok(PaperCutMotion.tokens, 'PaperCutMotion.tokens must exist');
assert.equal(PaperCutMotion.tokens.stiffness, 280, 'tokens.stiffness must be 280');
assert.equal(PaperCutMotion.tokens.damping, 24, 'tokens.damping must be 24');
assert.equal(PaperCutMotion.tokens.mass, 1.0, 'tokens.mass must be 1.0');
assert.equal(PaperCutMotion.tokens.perspectiveDepth, '1200px', 'tokens.perspectiveDepth must be 1200px');
assert.equal(PaperCutMotion.tokens.lightDistance, '800px', 'tokens.lightDistance must be 800px');
assert.equal(PaperCutMotion.tokens.airDrag, 0.15, 'tokens.airDrag must be 0.15');
assert.equal(PaperCutMotion.tokens.tearThreshold, '60px', 'tokens.tearThreshold must be 60px');
console.log('  ✔ PaperCutMotion.tokens matched standard token specifications.');


// ---------------------------------------------------------------------------
// 2. AC-2: Accessibility prefers-reduced-motion Graceful Degradation
// ---------------------------------------------------------------------------
console.log('▶ Test 3: Checking prefers-reduced-motion in CSS (AC-2)...');
assert.ok(
  cssContent.includes('@media (prefers-reduced-motion: reduce)'),
  'CSS must contain @media (prefers-reduced-motion: reduce)'
);
assert.ok(
  cssContent.includes('animation-duration: 0.01ms !important;'),
  'Reduced motion must set animation-duration to 0.01ms !important'
);
assert.ok(
  cssContent.includes('animation-iteration-count: 1 !important;'),
  'Reduced motion must cap animation-iteration-count to 1 !important'
);
assert.ok(
  cssContent.includes('transform: translateZ(0) translateY(-1px) !important;'),
  'Reduced motion must downgrade 3D motions to graceful 1px elevation'
);
assert.ok(
  cssContent.includes('opacity: 1 !important;'),
  'Reduced motion must maintain opacity: 1 !important'
);
console.log('  ✔ CSS prefers-reduced-motion rules thoroughly enforce 0.01ms instant completion.');

console.log('▶ Test 4: Checking PaperCutMotion reduced motion solver behavior (AC-2)...');
// Mock window.matchMedia for reduced-motion test
const originalWindow = globalThis.window;
globalThis.window = {
  matchMedia: (query) => ({
    matches: query.includes('prefers-reduced-motion: reduce')
  })
};

assert.equal(PaperCutMotion.isReducedMotion(), true, 'isReducedMotion() should return true when mocked');

let reducedUpdated = false;
let reducedSettled = false;
const reducedElement = {
  style: {
    setProperty(k, v) {
      this[k] = v;
    }
  }
};

const reducedController = PaperCutMotion.animate({
  target: reducedElement,
  cssProperty: '--pc-spring-test',
  from: 0,
  to: 100,
  onUpdate: () => { reducedUpdated = true; },
  onSettle: () => { reducedSettled = true; }
});

assert.equal(reducedController.isSettled(), true, 'Reduced motion controller must settle immediately');
assert.equal(reducedController.isRunning(), false, 'Reduced motion controller must not be running');
assert.equal(reducedElement.style['--pc-spring-test'], '100', 'Target CSS property must immediately snap to final target');
assert.equal(reducedSettled, true, 'onSettle must be called immediately');

// Restore window
globalThis.window = originalWindow;
console.log('  ✔ PaperCutMotion reduced motion controller snaps immediately with zero compute.');


// ---------------------------------------------------------------------------
// 3. AC-3: Spring-Damper ODE Solver & Sleep-on-Settle rAF Controller
// ---------------------------------------------------------------------------
console.log('▶ Test 5: Testing createSpringSolver 2nd-order ODE mechanics (AC-3)...');
const solver = PaperCutMotion.createSpringSolver({
  stiffness: 280,
  damping: 24,
  mass: 1.0,
  from: 0,
  target: 100,
  precision: 0.01,
  velocityThreshold: 0.01
});

assert.equal(solver.getValue(), 0, 'Initial value should be 0');
assert.equal(solver.isSettled(), false, 'Solver should initially not be settled');

// Simulate physics steps
const frames = solver.solveAll(600, 1 / 60);

assert.ok(frames.length > 5, 'Solver must compute multiple steps before settling');
assert.ok(frames.length < 500, 'Solver must converge within reasonable timeframe');
assert.equal(solver.isSettled(), true, 'Solver must be settled at completion');
assert.equal(Math.round(solver.getValue()), 100, 'Final value should settle precisely at target (100)');

// Test subtle harmonic overshoot: check if max value exceeds 100 before settling
const maxVal = Math.max(...frames.map(f => f.value));
assert.ok(
  maxVal > 100,
  `Paper spring should show authentic physical overshoot (peak: ${maxVal.toFixed(2)} > 100)`
);
console.log(`  ✔ Spring solver correctly simulated damped harmonic oscillation (peak: ${maxVal.toFixed(2)}, settled in ${frames.length} steps).`);

console.log('▶ Test 6: Testing animate / spring Sleep-on-Settle controller with CSS injection (AC-3)...');
const mockElement = {
  style: {
    setProperty(prop, val) {
      this[prop] = val;
    }
  }
};

let updateCallCount = 0;
let settleCalled = false;
let settleVal = null;

const controller = PaperCutMotion.animate({
  target: mockElement,
  cssProperty: '--pc-test-elevation',
  from: 0,
  to: 42,
  stiffness: 280,
  damping: 24,
  mass: 1.0,
  onUpdate: (v, vel) => {
    updateCallCount++;
  },
  onSettle: (finalVal) => {
    settleCalled = true;
    settleVal = finalVal;
  }
});

await controller.promise;

assert.equal(settleCalled, true, 'onSettle must be invoked');
assert.equal(settleVal, 42, 'onSettle must receive target value 42');
assert.equal(controller.isSettled(), true, 'controller must be settled');
assert.equal(controller.isRunning(), false, 'controller must be stopped (Sleep-on-Settle)');
assert.equal(mockElement.style['--pc-test-elevation'], '42', 'CSS variable must have received final settled value');
assert.ok(updateCallCount > 0, 'onUpdate should have been called during simulation');

console.log(`  ✔ Sleep-on-Settle rAF controller converged, injected --pc-test-elevation: 42, and entered sleep state.`);

console.log('\n🎉 ALL Step 1 Physics Token tests passed successfully!\n');
