/**
 * tests/papyrus-engine-core.test.mjs
 * Comprehensive Unit & Integration Physics Tests for Papyrus 2.5D Art Engine Core
 *
 * Validates:
 * - AC-1: SVG path parsing & 2.5D extruded ribbon wall geometry generation
 * - AC-2: Micro-bevel normal vector (45°/90°) & specular rim highlight computation
 * - AC-3: PCSS depth-variable soft shadows solver (penumbra radius & multi-tier shadows)
 * - AC-4: LERP damping convergence (0.18 damping ratio) & smooth interpolation
 * - AC-5: Procedural pulp fiber roughness & blade cut incision noise
 * - AC-6: Zero-dependency & bundle size under 30KB verification
 * - AC-7: Prefers-reduced-motion immediate snap & sleep-on-settle loop
 * - AC-8: Mathematical invariants & boundary edge-case resilience
 */

import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, statSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const ENGINE_FILE_PATH = fileURLToPath(new URL('../src/engine/papyrus-engine.js', import.meta.url));

import {
  vec3,
  add3,
  sub3,
  scale3,
  dot3,
  cross3,
  len3,
  norm3,
  lerp,
  lerp3,
  clamp,
  pulpFiberNoise,
  tokenizeSvgPath,
  parseSvgPathToPoints,
  extrudePathRibbon,
  computeRimHighlight,
  solvePCSS,
  PapyrusDampingController,
  PapyrusEngine
} from '../src/engine/papyrus-engine.js';

describe('Papyrus 2.5D Engine Core (Step 1)', () => {

  // --------------------------------------------------------------------------
  // AC-1: SVG Path Parsing & 2.5D Ribbon Wall Extrusion
  // --------------------------------------------------------------------------
  describe('AC-1: SVG Path Parsing & Extrusion', () => {
    it('should tokenize and parse SVG path commands (M, L, H, V, C, Q, Z)', () => {
      const svgPath = 'M 0 0 L 100 0 V 50 H 0 Z';
      const contours = parseSvgPathToPoints(svgPath);

      assert.equal(contours.length, 1);
      const pts = contours[0];
      assert.ok(pts.length >= 4, `Expected at least 4 points, got ${pts.length}`);
      assert.deepEqual(pts[0], { x: 0, y: 0 });
      assert.deepEqual(pts[1], { x: 100, y: 0 });
      assert.deepEqual(pts[2], { x: 100, y: 50 });
      assert.deepEqual(pts[3], { x: 0, y: 50 });
    });

    it('should sample Bezier curve segments into discrete contour vertices', () => {
      // Cubic Bezier curve
      const cubicPath = 'M 0 0 C 20 50, 80 50, 100 0';
      const contours = parseSvgPathToPoints(cubicPath, { curveSteps: 10 });

      assert.equal(contours.length, 1);
      const pts = contours[0];
      // Start point + 10 sampled points = 11 points
      assert.equal(pts.length, 11);
      assert.deepEqual(pts[0], { x: 0, y: 0 });
      assert.equal(Math.round(pts[pts.length - 1].x), 100);
      assert.equal(Math.round(pts[pts.length - 1].y), 0);
    });

    it('should generate 2.5D extruded ribbon walls with correct front and back elevations', () => {
      const points = [
        { x: 0, y: 0 },
        { x: 50, y: 0 },
        { x: 50, y: 50 },
        { x: 0, y: 50 },
        { x: 0, y: 0 }
      ];
      const elevation = 15;
      const thickness = 1.2;
      const extrusion = extrudePathRibbon(points, {
        elevation,
        thickness,
        bevelAngle: 45,
        roughness: 0
      });

      assert.equal(extrusion.elevation, 15);
      assert.equal(extrusion.thickness, 1.2);
      assert.equal(extrusion.ribbonWalls.length, 4);

      // Verify quad vertices of first segment (0,0) -> (50,0)
      const wall0 = extrusion.ribbonWalls[0];
      assert.equal(wall0.v0.z, elevation + thickness); // front p1
      assert.equal(wall0.v1.z, elevation + thickness); // front p2
      assert.equal(wall0.v2.z, elevation);             // back p2
      assert.equal(wall0.v3.z, elevation);             // back p1

      // Verify perimeter length
      assert.equal(extrusion.totalLength, 200);

      // Verify bounding box
      assert.equal(extrusion.boundingBox.minX, 0);
      assert.equal(extrusion.boundingBox.maxX, 50);
      assert.equal(extrusion.boundingBox.minY, 0);
      assert.equal(extrusion.boundingBox.maxY, 50);
    });
  });

  // --------------------------------------------------------------------------
  // AC-2: Micro-Bevel Normal Vectors & Specular Rim Highlight
  // --------------------------------------------------------------------------
  describe('AC-2: Micro-Bevel Normal Vector & Specular Rim Highlight', () => {
    it('should calculate horizontal normals for 90° straight cut', () => {
      const points = [{ x: 0, y: 0 }, { x: 100, y: 0 }];
      const extrusion = extrudePathRibbon(points, {
        bevelAngle: 90,
        roughness: 0
      });

      const wall = extrusion.ribbonWalls[0];
      const len = len3(wall.normal3D);
      assert.ok(Math.abs(len - 1.0) < 1e-5, `Normal should be unit length, got ${len}`);
      assert.ok(Math.abs(wall.normal3D.z) < 1e-5, `Normal Z component should be 0 for 90° cut, got ${wall.normal3D.z}`);
    });

    it('should tilt normal towards +Z for 45° bevel cut', () => {
      const points = [{ x: 0, y: 0 }, { x: 100, y: 0 }];
      const extrusion = extrudePathRibbon(points, {
        bevelAngle: 45,
        roughness: 0
      });

      const wall = extrusion.ribbonWalls[0];
      const len = len3(wall.normal3D);
      assert.ok(Math.abs(len - 1.0) < 1e-5);
      // For 45°, normal Z component should be sin(45°) = ~0.7071
      assert.ok(Math.abs(wall.normal3D.z - Math.SQRT1_2) < 0.05);
    });

    it('should compute higher specular rim reflectance when light aligns with surface normal', () => {
      const surfacePoint = { x: 0, y: 0, z: 10 };
      const normal = { x: 0, y: 0, z: 1 }; // Facing straight up
      const overheadLight = { x: 0, y: 0, z: 100 }; // Light right above
      const obliqueLight = { x: 300, y: 300, z: 10 }; // Light to the far side

      const direct = computeRimHighlight(surfacePoint, normal, overheadLight, { intensity: 1.0 });
      const oblique = computeRimHighlight(surfacePoint, normal, obliqueLight, { intensity: 1.0 });

      assert.ok(direct.diffuse > oblique.diffuse, 'Direct light should yield stronger diffuse than oblique');
      assert.ok(direct.luminance > oblique.luminance, 'Direct light should yield higher total luminance');
    });

    it('should capture glancing Fresnel rim highlight along paper edges', () => {
      const surfacePoint = { x: 0, y: 0, z: 0 };
      // Edge normal tilted at 60 degrees away from camera (viewDir = 0, 0, 1)
      const edgeNormal = norm3({ x: 0.866, y: 0, z: 0.5 });
      const lightPos = { x: 100, y: 0, z: 100 };

      const rimResult = computeRimHighlight(surfacePoint, edgeNormal, lightPos, {
        rimPower: 2.5,
        intensity: 1.2
      });

      assert.ok(rimResult.rim > 0, 'Glancing rim highlight must be greater than zero');
      assert.ok(rimResult.highlightStrength > 0, 'Highlight strength must be positive');
    });
  });

  // --------------------------------------------------------------------------
  // AC-3: PCSS Depth-Variable Shadow Solver
  // --------------------------------------------------------------------------
  describe('AC-3: PCSS Depth-Variable Shadow Solver', () => {
    it('should calculate penumbra radius using PCSS formula: w_light * (deltaZ / (L_z - z_caster))', () => {
      const lightWidth = 40;
      const lightPos = { x: 0, y: 0, z: 200 };
      const casterZ = 50;
      const receiverZ = 0;

      // deltaZ = 50 - 0 = 50
      // distLightToCaster = 200 - 50 = 150
      // ratio = 50 / 150 = 1/3
      // expected radius = 40 * (1/3) = 13.333...
      const result = solvePCSS(casterZ, receiverZ, lightPos, lightWidth);

      assert.equal(result.deltaZ, 50);
      assert.equal(result.distLightToCaster, 150);
      assert.ok(Math.abs(result.penumbraRatio - (1 / 3)) < 1e-4);
      assert.ok(Math.abs(result.penumbraRadius - (40 / 3)) < 1e-4);
    });

    it('should project shadow offset away from light position proportional to elevation', () => {
      const lightPos = { x: -100, y: -100, z: 300 };
      const casterPos = { x: 0, y: 0 };
      const casterZ = 60;
      const receiverZ = 0;

      // ratio = 60 / (300 - 60) = 60 / 240 = 0.25
      // offset.x = (0 - (-100)) * 0.25 = 25
      // offset.y = (0 - (-100)) * 0.25 = 25
      const result = solvePCSS(casterZ, receiverZ, lightPos, 40, casterPos);

      assert.ok(Math.abs(result.offset.x - 25) < 1e-4);
      assert.ok(Math.abs(result.offset.y - 25) < 1e-4);
    });

    it('should generate valid 3-tier CSS box-shadow and drop-shadow filter strings', () => {
      const result = solvePCSS(20, 0, { x: 50, y: 50, z: 300 }, 35);

      assert.ok(typeof result.cssBoxShadow === 'string');
      assert.ok(result.cssBoxShadow.includes('px'));
      assert.ok(result.cssBoxShadow.includes('rgba('));

      assert.ok(typeof result.cssFilter === 'string');
      assert.ok(result.cssFilter.startsWith('drop-shadow('));

      // Multi-tier check: contact blur must be sharper than ambient blur
      assert.ok(result.tiers.contact.blur < result.tiers.soft.blur);
      assert.ok(result.tiers.soft.blur < result.tiers.ambient.blur);
    });
  });

  // --------------------------------------------------------------------------
  // AC-4: LERP Damping Convergence (0.15 ~ 0.25)
  // --------------------------------------------------------------------------
  describe('AC-4: LERP Damping & Convergence', () => {
    it('should use a damping ratio between 0.15 and 0.25 (default 0.18)', () => {
      const ctrl = new PapyrusDampingController();
      assert.ok(ctrl.damping >= 0.15 && ctrl.damping <= 0.25, `Damping ${ctrl.damping} not in [0.15, 0.25]`);
      assert.equal(ctrl.damping, 0.18);
    });

    it('should smoothly converge towards target position over consecutive updates', () => {
      const ctrl = new PapyrusDampingController({ damping: 0.18 });
      ctrl.current = { x: 0, y: 0, z: 0 };
      ctrl.setTarget(100, 100, 100);

      assert.equal(ctrl.isSettled, false);

      let prevDist = 100 * Math.sqrt(3);
      for (let i = 0; i < 30; i++) {
        ctrl.update();
        const dist = Math.hypot(
          ctrl.target.x - ctrl.current.x,
          ctrl.target.y - ctrl.current.y,
          ctrl.target.z - ctrl.current.z
        );
        assert.ok(dist <= prevDist, `Distance should decrease monotonically: ${dist} <= ${prevDist}`);
        prevDist = dist;
      }

      // After 50 frames with 0.18 damping, it should be fully settled
      for (let i = 0; i < 50; i++) {
        ctrl.update();
      }
      assert.ok(ctrl.isSettled, 'Controller should settle once threshold is reached');
      assert.ok(Math.abs(ctrl.current.x - 100) < 0.01);
    });
  });

  // --------------------------------------------------------------------------
  // AC-5: Procedural Pulp Fiber & Micro-Edge Normal Noise
  // --------------------------------------------------------------------------
  describe('AC-5: Procedural Pulp Fiber Roughness & Incision Noise', () => {
    it('should return zero perturbation when roughness is 0', () => {
      const noise = pulpFiberNoise(10, 20, 0);
      assert.deepEqual(noise, { x: 0, y: 0, z: 0 });
    });

    it('should generate bounded non-zero perturbation for positive roughness', () => {
      const noise = pulpFiberNoise(25, 45, 0.2, 42);
      assert.ok(noise.x !== 0 || noise.y !== 0 || noise.z !== 0);
      assert.ok(Math.abs(noise.x) < 0.5, 'Noise X should be bounded');
      assert.ok(Math.abs(noise.y) < 0.5, 'Noise Y should be bounded');
      assert.ok(Math.abs(noise.z) < 0.5, 'Noise Z should be bounded');
    });

    it('should produce deterministic noise for identical coordinates and seed', () => {
      const n1 = pulpFiberNoise(12.34, 56.78, 0.15, 999);
      const n2 = pulpFiberNoise(12.34, 56.78, 0.15, 999);
      assert.deepEqual(n1, n2);
    });
  });

  // --------------------------------------------------------------------------
  // AC-6: Bundle Size Under 30KB & Zero Dependencies
  // --------------------------------------------------------------------------
  describe('AC-6: Zero-Dependency & Bundle Size Under 30KB', () => {
    it('should maintain file size of src/engine/papyrus-engine.js strictly under 30KB', () => {
      const stats = statSync(ENGINE_FILE_PATH);
      const maxSize = 30 * 1024; // 30,720 bytes
      assert.ok(
        stats.size < maxSize,
        `File size ${stats.size} bytes exceeds limit of ${maxSize} bytes (30KB)`
      );
    });

    it('should have zero external package dependencies in engine file', () => {
      const code = readFileSync(ENGINE_FILE_PATH, 'utf-8');
      // Look for external imports (e.g., import ... from 'three' or 'lodash')
      const externalImports = code.match(/import\s+.*from\s+['"][^./]/g);
      assert.equal(externalImports, null, 'papyrus-engine.js must have zero external dependencies');
    });
  });

  // --------------------------------------------------------------------------
  // AC-7: Prefers-Reduced-Motion & Sleep-on-Settle Loop
  // --------------------------------------------------------------------------
  describe('AC-7: Reduced Motion & Sleep-on-Settle', () => {
    it('should immediately snap to target when reducedMotion is enabled', () => {
      const ctrl = new PapyrusDampingController();
      ctrl.reducedMotion = true;
      ctrl.current = { x: 0, y: 0, z: 0 };

      ctrl.setTarget(250, -150, 400);

      // Should snap instantaneously without needing multi-frame LERP
      assert.equal(ctrl.current.x, 250);
      assert.equal(ctrl.current.y, -150);
      assert.equal(ctrl.current.z, 400);
      assert.equal(ctrl.isSettled, true);
    });

    it('should register and update layers in PapyrusEngine without memory leaks', () => {
      const engine = new PapyrusEngine();
      const mockElement = {
        style: {
          props: {},
          setProperty(k, v) { this.props[k] = v; }
        }
      };

      const layer = engine.registerLayer('top-bezel', {
        element: mockElement,
        depth: 16,
        thickness: 0.9,
        cutAngle: 45,
        svgPath: 'M 0 0 L 200 0 L 200 100 L 0 100 Z'
      });

      assert.ok(engine.layers.has('top-bezel'));
      assert.ok(layer.cachedExtrusion !== null);
      assert.equal(layer.cachedExtrusion.ribbonWalls.length, 4);

      // Trigger one tick/render
      engine.render();

      assert.ok(mockElement.style.props['--papyrus-depth'] === '16px');
      assert.ok(mockElement.style.props['--papyrus-thickness'] === '0.9px');
      assert.ok(mockElement.style.props['--papyrus-shadow-box'] !== undefined);

      engine.unregisterLayer('top-bezel');
      assert.equal(engine.layers.has('top-bezel'), false);

      engine.destroy();
    });
  });

  // --------------------------------------------------------------------------
  // AC-8: Mathematical Invariants & Edge Cases
  // --------------------------------------------------------------------------
  describe('AC-8: Mathematical Invariants & Boundary Resilience', () => {
    it('should handle deltaZ = 0 (paper lying flat on receiver floor) gracefully', () => {
      const result = solvePCSS(0, 0, { x: 0, y: 0, z: 300 }, 35);
      assert.equal(result.deltaZ, 0);
      assert.equal(result.penumbraRatio, 0);
      assert.equal(result.penumbraRadius, 0);
      assert.equal(result.offset.x, 0);
      assert.equal(result.offset.y, 0);
    });

    it('should return safe unit vector for zero or near-zero length vectors', () => {
      const zeroNorm = norm3({ x: 0, y: 0, z: 0 });
      assert.equal(zeroNorm.x, 0);
      assert.equal(zeroNorm.y, 0);
      assert.equal(zeroNorm.z, 1);
      assert.equal(Number.isNaN(zeroNorm.x), false);
    });

    it('should safely clamp scalar values without overflow', () => {
      assert.equal(clamp(-5, 0, 1), 0);
      assert.equal(clamp(1.5, 0, 1), 1);
      assert.equal(clamp(0.5, 0, 1), 0.5);
    });

    it('should handle single-point or empty SVG path without throwing', () => {
      const emptyContour = parseSvgPathToPoints('');
      assert.deepEqual(emptyContour, []);

      const emptyExtrusion = extrudePathRibbon([]);
      assert.deepEqual(emptyExtrusion.ribbonWalls, []);
      assert.equal(emptyExtrusion.totalLength, 0);
    });
  });
});
