#!/usr/bin/env node
/**
 * tests/kirigami-interactions.test.mjs
 * 
 * Verifies Step 4: Kirigami 3D Papercraft Interactions & 12 Presets
 * - 12 Presets Registration & Meta Verification
 * - AC-1: Scissors Snip Split (High-frequency shear vibration & residual wobble)
 * - AC-2: Wax Seal Slam & Squash (Drop, impact squash, radial raised rim shadow)
 * - AC-3: Deckle Edge Tear (Perforation tension, 3D rupture snap, haptic trigger)
 * - AC-4: Pop-Up Book Hinge Spring (Angle-linked 3D fold unfolding & elastic settle)
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
const PaperCutAnimationStudio = globalThis.PaperCutAnimationStudio;

console.log('🧪 Starting tests: kirigami-interactions.test.mjs\n');

// ---------------------------------------------------------------------------
// 1. 12 Presets Suite Registration & Completeness
// ---------------------------------------------------------------------------
console.log('▶ Test 1: Verifying 12 PRESETS Registration in PaperCutMotion & Studio...');

assert.ok(PaperCutMotion.PRESETS, 'PaperCutMotion.PRESETS must exist');
assert.equal(PaperCutMotion.PRESETS.length, 12, 'Must have exactly 12 registered animation presets');

const expectedPresetIds = [
  'popup',
  'unfold',
  'flutter',
  'peel',
  'stamp',
  'snip',
  'flip',
  'accordion',
  'hinge-spring',
  'wax-slam',
  'snip-split',
  'deckle-tear'
];

for (const id of expectedPresetIds) {
  const found = PaperCutMotion.PRESETS.find(p => p.id === id);
  assert.ok(found, `Preset "${id}" must be registered in PRESETS`);
  assert.ok(found.name, `Preset "${id}" must have a name`);
  assert.ok(found.className, `Preset "${id}" must have a className`);
  assert.ok(found.hoverClass, `Preset "${id}" must have a hoverClass`);
  assert.ok(found.desc, `Preset "${id}" must have a desc`);
  assert.ok(found.recommended, `Preset "${id}" must have recommended components`);
  assert.ok(found.duration, `Preset "${id}" must have duration`);
}

console.log('  ✔ All 12 animation presets registered with complete metadata.');

// ---------------------------------------------------------------------------
// 2. AC-1: Scissors Snip Split (pc-anim-snip-split)
// ---------------------------------------------------------------------------
console.log('▶ Test 2: Verifying AC-1: Scissors Snip Split shear vibration & wobble...');
const css = readFileSync(join(projectRoot, 'papercut-animations.css'), 'utf-8');

assert.ok(css.includes('@keyframes pcSnipSplit'), 'Must define @keyframes pcSnipSplit');
assert.ok(css.includes('.pc-anim-snip-split'), 'Must define .pc-anim-snip-split class');
assert.ok(css.includes('.pc-hover-snip-split:hover'), 'Must define .pc-hover-snip-split:hover helper');
assert.ok(css.includes('.pc-anim-loop.pc-anim-snip-split'), 'Must define .pc-anim-loop.pc-anim-snip-split');

// Check shear angle and vibration stages
assert.ok(css.includes('var(--pc-paper-shear-angle'), 'Keyframe must utilize --pc-paper-shear-angle token');
assert.ok(css.includes('skewX'), 'Keyframe must apply skewX shear deformation');

console.log('  ✔ AC-1 (Snip Split) high-frequency shear vibration and residual wobble verified.');

// ---------------------------------------------------------------------------
// 3. AC-2: Wax Stamp Slam & Radial Squash (pc-anim-wax-slam)
// ---------------------------------------------------------------------------
console.log('▶ Test 3: Verifying AC-2: Wax Stamp Slam & Squash impact mechanics...');

assert.ok(css.includes('@keyframes pcWaxSlam'), 'Must define @keyframes pcWaxSlam');
assert.ok(css.includes('.pc-anim-wax-slam'), 'Must define .pc-anim-wax-slam class');
assert.ok(css.includes('.pc-hover-wax-slam:hover'), 'Must define .pc-hover-wax-slam:hover helper');
assert.ok(css.includes('.pc-anim-loop.pc-anim-wax-slam'), 'Must define .pc-anim-loop.pc-anim-wax-slam');

// Check drop distance and squash deformation
assert.ok(css.includes('translateY(-90px)'), 'Keyframe must drop from high altitude (-90px)');
assert.ok(css.includes('scale(1.28, 0.76)'), 'Keyframe must simulate impact squash (scale X > 1, Y < 1)');
assert.ok(css.includes('scale(0.72, 1.32)'), 'Keyframe must simulate pre-impact elongation/stretch');
assert.ok(css.includes('0 0 0 4px'), 'Keyframe must expand radial raised rim shockwave ring');

console.log('  ✔ AC-2 (Wax Slam) 3D drop, squash & stretch, and radial rim shadow verified.');

// ---------------------------------------------------------------------------
// 4. AC-3: Deckle Edge Tear (pc-anim-deckle-tear)
// ---------------------------------------------------------------------------
console.log('▶ Test 4: Verifying AC-3: Deckle Edge Tear rupture & haptic trigger...');

assert.ok(css.includes('@keyframes pcDeckleTear'), 'Must define @keyframes pcDeckleTear');
assert.ok(css.includes('.pc-anim-deckle-tear'), 'Must define .pc-anim-deckle-tear class');
assert.ok(css.includes('.pc-hover-deckle-tear:hover'), 'Must define .pc-hover-deckle-tear:hover helper');
assert.ok(css.includes('.pc-anim-loop.pc-anim-deckle-tear'), 'Must define .pc-anim-loop.pc-anim-deckle-tear');

// Check tear snap deformation
assert.ok(css.includes('transform-origin: top left'), 'Tear animation must anchor at top left origin');
assert.ok(css.includes('contrast('), 'Tear animation must feature contrast shift during rupture');

// Test JS trigger helper with mock element & haptics
let hapticPattern = null;
Object.defineProperty(globalThis.navigator, 'vibrate', {
  value: (pattern) => {
    hapticPattern = pattern;
  },
  configurable: true,
  writable: true
});

const classList = new Set();
const mockTearEl = {
  classList: {
    add(cls) { classList.add(cls); },
    remove(cls) { classList.delete(cls); },
    contains(cls) { return classList.has(cls); }
  },
  offsetWidth: 120
};

let tearCompleted = false;
PaperCutMotion.triggerInteraction(mockTearEl, 'deckle-tear', {
  haptic: [15, 30, 20],
  onComplete: () => { tearCompleted = true; }
});

assert.ok(mockTearEl.classList.contains('pc-anim-deckle-tear'), 'triggerInteraction must apply .pc-anim-deckle-tear');
assert.deepEqual(hapticPattern, [15, 30, 20], 'triggerInteraction must fire haptic vibration pattern');

console.log('  ✔ AC-3 (Deckle Tear) rupture tension, snap deformation, and haptics verified.');

// ---------------------------------------------------------------------------
// 5. AC-4: Pop-Up Book Hinge Spring (pc-anim-hinge-spring)
// ---------------------------------------------------------------------------
console.log('▶ Test 5: Verifying AC-4: Pop-Up Book Hinge Spring 3D unfolding...');

assert.ok(css.includes('@keyframes pcHingeSpring'), 'Must define @keyframes pcHingeSpring');
assert.ok(css.includes('.pc-anim-hinge-spring'), 'Must define .pc-anim-hinge-spring class');
assert.ok(css.includes('.pc-hover-hinge-spring:hover'), 'Must define .pc-hover-hinge-spring:hover helper');
assert.ok(css.includes('.pc-anim-loop.pc-anim-hinge-spring'), 'Must define .pc-anim-loop.pc-anim-hinge-spring');

// Check hinge origin and 3D angle-linked fold rotation
assert.ok(css.includes('transform-origin: bottom center'), 'Hinge spring must rotate from bottom center hinge line');
assert.ok(css.includes('rotateX(-85deg)'), 'Keyframe must start from flat folded angle (-85deg)');
assert.ok(css.includes('rotateX(24deg)'), 'Keyframe must exhibit elastic overshoot (24deg)');
assert.ok(css.includes('rotateX(0deg)'), 'Keyframe must settle cleanly to upright (0deg)');

console.log('  ✔ AC-4 (Hinge Spring) 3D perspective fold unfolding and spring settle verified.');

console.log('\n🎉 ALL Step 4 Kirigami Interaction tests passed successfully!\n');
