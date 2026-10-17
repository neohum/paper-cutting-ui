/**
 * Papyrus 2.5D Art Engine Core
 * Zero-dependency 2.5D paper-cutting physics, extrusion, micro-bevel rim highlight & PCSS shadow solver.
 *
 * @module PapyrusEngine
 * @license MIT
 */

// ============================================================================
// 1. Vector3 & Scalar Math Utilities
// ============================================================================

export function vec3(x = 0, y = 0, z = 0) {
  return { x, y, z };
}

export function add3(a, b) {
  return { x: a.x + b.x, y: a.y + b.y, z: a.z + b.z };
}

export function sub3(a, b) {
  return { x: a.x - b.x, y: a.y - b.y, z: a.z - b.z };
}

export function scale3(v, s) {
  return { x: v.x * s, y: v.y * s, z: v.z * s };
}

export function dot3(a, b) {
  return a.x * b.x + a.y * b.y + a.z * b.z;
}

export function cross3(a, b) {
  return {
    x: a.y * b.z - a.z * b.y,
    y: a.z * b.x - a.x * b.z,
    z: a.x * b.y - a.y * b.x
  };
}

export function len3(v) {
  return Math.hypot(v.x, v.y, v.z);
}

export function norm3(v) {
  const l = Math.hypot(v.x, v.y, v.z);
  if (l < 1e-9) return { x: 0, y: 0, z: 1 };
  return { x: v.x / l, y: v.y / l, z: v.z / l };
}

export function lerp(a, b, t) {
  return a + (b - a) * t;
}

export function lerp3(a, b, t) {
  return {
    x: lerp(a.x, b.x, t),
    y: lerp(a.y, b.y, t),
    z: lerp(a.z, b.z, t)
  };
}

export function clamp(v, min, max) {
  return Math.min(Math.max(v, min), max);
}

// ============================================================================
// 2. Procedural Pulp Fiber & Blade Cut Normal Noise
// ============================================================================

/**
 * Fast deterministic hash for procedural fiber noise.
 */
function hash21(x, y, seed = 1337) {
  const n = Math.sin(x * 12.9898 + y * 78.233 + seed) * 43758.5453123;
  return n - Math.floor(n);
}

/**
 * Computes procedural paper grain roughness & blade cut incision noise.
 * Returns a 3D perturbation vector.
 *
 * @param {number} x
 * @param {number} y
 * @param {number} [roughness=0.15] - 0 to 1 roughness
 * @param {number} [seed=42]
 * @returns {{x: number, y: number, z: number}}
 */
export function pulpFiberNoise(x, y, roughness = 0.15, seed = 42) {
  if (roughness <= 0) return { x: 0, y: 0, z: 0 };
  const h1 = (hash21(x * 0.25, y * 0.25, seed) - 0.5) * 2;
  const h2 = (hash21(x * 0.75 + 13.5, y * 0.75 + 37.1, seed + 1) - 0.5) * 2;
  const h3 = (hash21(x * 1.5 - 7.2, y * 1.5 + 19.8, seed + 2) - 0.5) * 2;

  // Blade cut micro-striation: subtle directional anisotropy along paper grain
  const striation = Math.sin(y * 4.0 + h1 * 2.0) * 0.25;

  return {
    x: (h1 * 0.6 + striation) * roughness,
    y: (h2 * 0.6) * roughness,
    z: (h3 * 0.3) * roughness
  };
}

// ============================================================================
// 3. SVG Path Parser & 2.5D Ribbon Wall Extrusion
// ============================================================================

/**
 * Tokenizes SVG path `d` string into command letters and numeric parameters.
 * @param {string} d
 * @returns {Array<{type: string, args: number[]}>}
 */
export function tokenizeSvgPath(d) {
  if (!d || typeof d !== 'string') return [];
  const commands = [];
  const commandRegex = /([a-df-z])([^a-df-z]*)/gi;
  let match;

  while ((match = commandRegex.exec(d)) !== null) {
    const type = match[1];
    const rawArgs = match[2].trim();
    // Parse floats, accounting for negatives, exponents, commas, and minus signs
    const numRegex = /[-+]?(?:\d*\.\d+|\d+)(?:[eE][-+]?\d+)?/g;
    const args = [];
    let numMatch;
    while ((numMatch = numRegex.exec(rawArgs)) !== null) {
      args.push(parseFloat(numMatch[0]));
    }
    commands.push({ type, args });
  }

  return commands;
}

/**
 * Samples a cubic Bezier curve into points.
 */
function sampleCubicBezier(p0, p1, p2, p3, steps = 12) {
  const points = [];
  for (let i = 1; i <= steps; i++) {
    const t = i / steps;
    const inv = 1 - t;
    const inv2 = inv * inv;
    const inv3 = inv2 * inv;
    const t2 = t * t;
    const t3 = t2 * t;

    const x = inv3 * p0.x + 3 * inv2 * t * p1.x + 3 * inv * t2 * p2.x + t3 * p3.x;
    const y = inv3 * p0.y + 3 * inv2 * t * p1.y + 3 * inv * t2 * p2.y + t3 * p3.y;
    points.push({ x, y });
  }
  return points;
}

/**
 * Samples a quadratic Bezier curve into points.
 */
function sampleQuadraticBezier(p0, p1, p2, steps = 8) {
  const points = [];
  for (let i = 1; i <= steps; i++) {
    const t = i / steps;
    const inv = 1 - t;
    const inv2 = inv * inv;
    const t2 = t * t;

    const x = inv2 * p0.x + 2 * inv * t * p1.x + t2 * p2.x;
    const y = inv2 * p0.y + 2 * inv * t * p1.y + t2 * p2.y;
    points.push({ x, y });
  }
  return points;
}

/**
 * Converts SVG path `d` attribute into polyline point arrays for 2.5D geometry.
 *
 * @param {string} d - SVG path data
 * @param {object} [options]
 * @param {number} [options.curveSteps=10]
 * @returns {Array<Array<{x: number, y: number}>>} Array of contours (subpaths)
 */
export function parseSvgPathToPoints(d, options = {}) {
  const curveSteps = options.curveSteps || 10;
  const commands = tokenizeSvgPath(d);
  const contours = [];
  let currentContour = [];
  let cur = { x: 0, y: 0 };
  let start = { x: 0, y: 0 };
  let lastCtrl = null;

  for (const cmd of commands) {
    const isRel = cmd.type === cmd.type.toLowerCase();
    const type = cmd.type.toUpperCase();
    const a = cmd.args;

    switch (type) {
      case 'M': {
        for (let i = 0; i < a.length; i += 2) {
          const x = isRel ? cur.x + a[i] : a[i];
          const y = isRel ? cur.y + a[i + 1] : a[i + 1];
          if (i === 0) {
            if (currentContour.length > 0) contours.push(currentContour);
            currentContour = [{ x, y }];
            start = { x, y };
          } else {
            // Subsequent pairs treated as implicit Lineto
            currentContour.push({ x, y });
          }
          cur = { x, y };
        }
        lastCtrl = null;
        break;
      }
      case 'L': {
        for (let i = 0; i < a.length; i += 2) {
          const x = isRel ? cur.x + a[i] : a[i];
          const y = isRel ? cur.y + a[i + 1] : a[i + 1];
          cur = { x, y };
          currentContour.push({ x, y });
        }
        lastCtrl = null;
        break;
      }
      case 'H': {
        for (let i = 0; i < a.length; i++) {
          const x = isRel ? cur.x + a[i] : a[i];
          cur = { x, y: cur.y };
          currentContour.push({ x: cur.x, y: cur.y });
        }
        lastCtrl = null;
        break;
      }
      case 'V': {
        for (let i = 0; i < a.length; i++) {
          const y = isRel ? cur.y + a[i] : a[i];
          cur = { x: cur.x, y };
          currentContour.push({ x: cur.x, y: cur.y });
        }
        lastCtrl = null;
        break;
      }
      case 'C': {
        for (let i = 0; i < a.length; i += 6) {
          const p1 = { x: isRel ? cur.x + a[i] : a[i], y: isRel ? cur.y + a[i + 1] : a[i + 1] };
          const p2 = { x: isRel ? cur.x + a[i + 2] : a[i + 2], y: isRel ? cur.y + a[i + 3] : a[i + 3] };
          const p3 = { x: isRel ? cur.x + a[i + 4] : a[i + 4], y: isRel ? cur.y + a[i + 5] : a[i + 5] };
          const pts = sampleCubicBezier(cur, p1, p2, p3, curveSteps);
          for (const pt of pts) currentContour.push(pt);
          cur = p3;
          lastCtrl = p2;
        }
        break;
      }
      case 'S': {
        for (let i = 0; i < a.length; i += 4) {
          let p1 = cur;
          if (lastCtrl) {
            p1 = { x: 2 * cur.x - lastCtrl.x, y: 2 * cur.y - lastCtrl.y };
          }
          const p2 = { x: isRel ? cur.x + a[i] : a[i], y: isRel ? cur.y + a[i + 1] : a[i + 1] };
          const p3 = { x: isRel ? cur.x + a[i + 2] : a[i + 2], y: isRel ? cur.y + a[i + 3] : a[i + 3] };
          const pts = sampleCubicBezier(cur, p1, p2, p3, curveSteps);
          for (const pt of pts) currentContour.push(pt);
          cur = p3;
          lastCtrl = p2;
        }
        break;
      }
      case 'Q': {
        for (let i = 0; i < a.length; i += 4) {
          const p1 = { x: isRel ? cur.x + a[i] : a[i], y: isRel ? cur.y + a[i + 1] : a[i + 1] };
          const p2 = { x: isRel ? cur.x + a[i + 2] : a[i + 2], y: isRel ? cur.y + a[i + 3] : a[i + 3] };
          const pts = sampleQuadraticBezier(cur, p1, p2, curveSteps);
          for (const pt of pts) currentContour.push(pt);
          cur = p2;
          lastCtrl = p1;
        }
        break;
      }
      case 'Z': {
        if (currentContour.length > 0) {
          const first = currentContour[0];
          if (Math.hypot(cur.x - first.x, cur.y - first.y) > 1e-4) {
            currentContour.push({ x: first.x, y: first.y });
          }
          cur = { ...first };
        }
        lastCtrl = null;
        break;
      }
    }
  }

  if (currentContour.length > 0) {
    contours.push(currentContour);
  }

  return contours;
}

/**
 * 2.5D Ribbon Wall & Bevel Edge Extrusion Generator
 * Converts a 2D polyline contour into extruded 3D ribbon wall geometry with bevel normals.
 *
 * @param {Array<{x: number, y: number}>} points - 2D contour points
 * @param {object} [options]
 * @param {number} [options.elevation=10] - Z layer elevation
 * @param {number} [options.thickness=0.8] - Paper thickness (t) in px/mm
 * @param {number} [options.bevelAngle=45] - Cut angle in degrees (45 for bevel, 90 for straight)
 * @param {number} [options.roughness=0.15] - Micro-roughness for pulp edge
 * @param {number} [options.seed=42]
 * @returns {object} Extruded geometry mesh and normals
 */
export function extrudePathRibbon(points, options = {}) {
  const elevation = options.elevation !== undefined ? options.elevation : 10;
  const thickness = options.thickness !== undefined ? options.thickness : 0.8;
  const bevelAngle = options.bevelAngle !== undefined ? options.bevelAngle : 45;
  const roughness = options.roughness !== undefined ? options.roughness : 0.15;
  const seed = options.seed || 42;

  const zFront = elevation + thickness;
  const zBack = elevation;

  const n = points.length;
  if (n < 2) {
    return { ribbonWalls: [], vertices: [], totalLength: 0, boundingBox: { minX: 0, maxX: 0, minY: 0, maxY: 0 } };
  }

  const bevelRad = (bevelAngle * Math.PI) / 180;
  // cutAngle/bevelAngle is the cut slope angle relative to horizontal paper plane:
  // 90° = vertical straight cut (normal is horizontal in XY plane, z = 0)
  // 45° = 45-degree chamfer bevel (normal tilted at 45°, z = cos(45°) ≈ 0.7071)
  // 0°  = flat sheet surface (normal points straight up along Z, z = 1)
  const sinCut = Math.sin(bevelRad);
  const cosCut = Math.cos(bevelRad);

  const ribbonWalls = [];
  const vertices = [];
  let totalLength = 0;
  let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;

  for (let i = 0; i < n - 1; i++) {
    const p1 = points[i];
    const p2 = points[i + 1];

    const dx = p2.x - p1.x;
    const dy = p2.y - p1.y;
    const segLen = Math.hypot(dx, dy);

    if (segLen < 1e-6) continue;
    totalLength += segLen;

    minX = Math.min(minX, p1.x, p2.x);
    maxX = Math.max(maxX, p1.x, p2.x);
    minY = Math.min(minY, p1.y, p2.y);
    maxY = Math.max(maxY, p1.y, p2.y);

    // Tangent along the edge
    const tx = dx / segLen;
    const ty = dy / segLen;

    // Outward 2D normal (perpendicular to tangent)
    const nx2d = ty;
    const ny2d = -tx;

    // 3D Bevel Normal (for 90° straight cut, normal is flat in XY (nx, ny, 0).
    // For 45° bevel cut, normal slants towards the light/camera along Z (+cosCut))
    let normal3D = norm3({
      x: nx2d * sinCut,
      y: ny2d * sinCut,
      z: cosCut
    });

    // Apply procedural pulp fiber roughness to bevel normal
    if (roughness > 0) {
      const midX = (p1.x + p2.x) * 0.5;
      const midY = (p1.y + p2.y) * 0.5;
      const noise = pulpFiberNoise(midX, midY, roughness, seed + i);
      normal3D = norm3(add3(normal3D, noise));
    }

    // 4 Vertices of the extruded ribbon quad:
    // v0: p1 at front face (elevation + thickness)
    // v1: p2 at front face (elevation + thickness)
    // v2: p2 at back face (elevation)
    // v3: p1 at back face (elevation)
    const v0 = { x: p1.x, y: p1.y, z: zFront };
    const v1 = { x: p2.x, y: p2.y, z: zFront };
    const v2 = { x: p2.x, y: p2.y, z: zBack };
    const v3 = { x: p1.x, y: p1.y, z: zBack };

    vertices.push(v0, v1, v2, v3);

    ribbonWalls.push({
      segmentIndex: i,
      p1: { ...p1 },
      p2: { ...p2 },
      v0, v1, v2, v3,
      center: {
        x: (p1.x + p2.x) * 0.5,
        y: (p1.y + p2.y) * 0.5,
        z: (zFront + zBack) * 0.5
      },
      tangent: { x: tx, y: ty },
      normal2D: { x: nx2d, y: ny2d },
      normal3D,
      length: segLen,
      bevelAngle
    });
  }

  return {
    ribbonWalls,
    vertices,
    totalLength,
    elevation,
    thickness,
    boundingBox: {
      minX: Number.isFinite(minX) ? minX : 0,
      maxX: Number.isFinite(maxX) ? maxX : 0,
      minY: Number.isFinite(minY) ? minY : 0,
      maxY: Number.isFinite(maxY) ? maxY : 0
    }
  };
}

// ============================================================================
// 4. Micro-Bevel Normal Vector & Specular Rim Highlight
// ============================================================================

/**
 * Computes specular rim highlight and diffuse reflectance for a paper cut edge.
 *
 * @param {object} surfacePoint - {x, y, z}
 * @param {object} normal - {x, y, z} unit normal vector
 * @param {object} lightPos - {x, y, z}
 * @param {object} [options]
 * @param {number} [options.intensity=1.0] - Light intensity
 * @param {number} [options.shininess=32] - Specular sharpness (higher = sharper micro-bevel sheen)
 * @param {number} [options.paperWhiteness=0.96] - Base paper albedo (all-white tech craft)
 * @param {number} [options.rimPower=2.5] - Fresnel exponent for grazing rim highlight
 * @param {object} [options.viewDir={x:0, y:0, z:1}] - Observer view vector
 * @returns {object} Reflection calculation results
 */
export function computeRimHighlight(surfacePoint, normal, lightPos, options = {}) {
  const intensity = options.intensity !== undefined ? options.intensity : 1.0;
  const shininess = options.shininess !== undefined ? options.shininess : 32;
  const paperWhiteness = options.paperWhiteness !== undefined ? options.paperWhiteness : 0.96;
  const rimPower = options.rimPower !== undefined ? options.rimPower : 2.5;
  const viewDir = options.viewDir || { x: 0, y: 0, z: 1 };

  // Light direction vector from surface point to light
  const L = norm3(sub3(lightPos, surfacePoint));
  // View direction
  const V = norm3(viewDir);
  // Blinn-Phong Halfway vector
  const H = norm3(add3(L, V));

  // Diffuse Lambertian component
  const NdotL = Math.max(0, dot3(normal, L));

  // Specular Blinn-Phong highlight
  const NdotH = Math.max(0, dot3(normal, H));
  const specular = Math.pow(NdotH, shininess) * intensity;

  // Fresnel-like Rim factor: peaks when view direction is glancing the surface
  const NdotV = clamp(dot3(normal, V), 0, 1);
  const fresnel = Math.pow(1.0 - NdotV, rimPower);
  const rimHighlight = fresnel * NdotL * intensity;

  // Combined paper reflectance: tone-on-tone all-white craft palette
  const ambient = 0.22 * paperWhiteness;
  const diffuse = 0.65 * NdotL * paperWhiteness * intensity;
  const totalLuminance = clamp(ambient + diffuse + specular * 0.4 + rimHighlight * 0.5, 0, 1);

  return {
    nDotL: NdotL,
    nDotH: NdotH,
    diffuse,
    specular,
    rim: rimHighlight,
    luminance: totalLuminance,
    // CSS-ready highlight value [0, 1]
    highlightStrength: clamp(specular * 0.7 + rimHighlight * 0.8, 0, 1)
  };
}

// ============================================================================
// 5. PCSS (Percentage Closer Soft Shadows) Depth-Variable Shadow Solver
// ============================================================================

/**
 * Solves physical soft shadows based on Percentage Closer Soft Shadows (PCSS).
 * Formula: R_penumbra = w_light * (deltaZ / (L_z - z_caster))
 *
 * @param {number} casterZ - Elevation of the paper layer casting shadow
 * @param {number} receiverZ - Elevation of the surface receiving shadow (default 0)
 * @param {object} lightPos - {x, y, z} light position in 3D scene
 * @param {number} [lightWidth=35] - Physical width of the light source emitter
 * @param {object} [casterPos={x:0, y:0}] - 2D center position of the caster
 * @returns {object} PCSS blur, offset, and CSS box-shadow string
 */
export function solvePCSS(casterZ, receiverZ = 0, lightPos = { x: 0, y: 0, z: 300 }, lightWidth = 35, casterPos = { x: 0, y: 0 }) {
  const deltaZ = Math.max(0, casterZ - receiverZ);
  const distLightToCaster = Math.max(1.0, lightPos.z - casterZ);

  // Penumbra ratio: deltaZ / (L_z - z_caster)
  const penumbraRatio = deltaZ / distLightToCaster;

  // Physical penumbra blur radius (PCSS core formula)
  const penumbraRadius = lightWidth * penumbraRatio;

  // Directional shadow offset: (casterPos - lightPos) * penumbraRatio
  const offsetX = (casterPos.x - lightPos.x) * penumbraRatio;
  const offsetY = (casterPos.y - lightPos.y) * penumbraRatio;

  // Multi-tier papercraft shadow profile:
  // Tier 1: Contact shadow (sharp, very close to paper cut incision)
  const contactBlur = Math.max(0.5, penumbraRadius * 0.2);
  const contactDx = offsetX * 0.3;
  const contactDy = offsetY * 0.3;
  const contactAlpha = clamp(0.38 - deltaZ * 0.001, 0.12, 0.42);

  // Tier 2: Mid-air penumbra soft shadow (main depth cue)
  const softBlur = Math.max(1.5, penumbraRadius * 1.1 + deltaZ * 0.15);
  const softDx = offsetX;
  const softDy = offsetY;
  const softAlpha = clamp(0.24 - deltaZ * 0.0005, 0.06, 0.28);

  // Tier 3: Ambient occlusion floor wash (wide diffuse spread)
  const ambientBlur = Math.max(4.0, penumbraRadius * 2.2 + deltaZ * 0.4);
  const ambientDx = offsetX * 1.2;
  const ambientDy = offsetY * 1.2;
  const ambientAlpha = clamp(0.12 - deltaZ * 0.0002, 0.02, 0.15);

  // Compose CSS 3-tier box-shadow
  const cssBoxShadow = [
    `${contactDx.toFixed(2)}px ${contactDy.toFixed(2)}px ${contactBlur.toFixed(2)}px rgba(18, 22, 28, ${contactAlpha.toFixed(3)})`,
    `${softDx.toFixed(2)}px ${softDy.toFixed(2)}px ${softBlur.toFixed(2)}px rgba(22, 28, 36, ${softAlpha.toFixed(3)})`,
    `${ambientDx.toFixed(2)}px ${ambientDy.toFixed(2)}px ${ambientBlur.toFixed(2)}px rgba(26, 32, 44, ${ambientAlpha.toFixed(3)})`
  ].join(', ');

  // SVG / Canvas drop-shadow filter string
  const cssFilter = `drop-shadow(${softDx.toFixed(1)}px ${softDy.toFixed(1)}px ${softBlur.toFixed(1)}px rgba(20, 24, 32, ${softAlpha.toFixed(2)}))`;

  return {
    deltaZ,
    distLightToCaster,
    penumbraRatio,
    penumbraRadius,
    offset: { x: offsetX, y: offsetY },
    tiers: {
      contact: { dx: contactDx, dy: contactDy, blur: contactBlur, alpha: contactAlpha },
      soft: { dx: softDx, dy: softDy, blur: softBlur, alpha: softAlpha },
      ambient: { dx: ambientDx, dy: ambientDy, blur: ambientBlur, alpha: ambientAlpha }
    },
    cssBoxShadow,
    cssFilter
  };
}

// ============================================================================
// 6. LERP Damping Engine & Sleep-on-Settle RAF Loop
// ============================================================================

export class PapyrusDampingController {
  /**
   * @param {object} [options]
   * @param {number} [options.damping=0.18] - Damping ratio between 0.15 and 0.25
   * @param {number} [options.settleThreshold=0.001]
   */
  constructor(options = {}) {
    this.damping = options.damping !== undefined ? options.damping : 0.18;
    this.settleThreshold = options.settleThreshold || 0.001;
    this.current = { x: 0, y: 0, z: 300 };
    this.target = { x: 0, y: 0, z: 300 };
    this.isSettled = true;
    this.reducedMotion = false;

    this.checkReducedMotion();
  }

  checkReducedMotion() {
    if (typeof window !== 'undefined' && typeof window.matchMedia === 'function') {
      try {
        const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
        this.reducedMotion = mq.matches;
      } catch (e) {
        this.reducedMotion = false;
      }
    }
    return this.reducedMotion;
  }

  setTarget(x, y, z) {
    if (x !== undefined) this.target.x = x;
    if (y !== undefined) this.target.y = y;
    if (z !== undefined) this.target.z = z;

    if (this.reducedMotion) {
      // Immediate snap when reduced motion is preferred
      this.current.x = this.target.x;
      this.current.y = this.target.y;
      this.current.z = this.target.z;
      this.isSettled = true;
      return true;
    }

    const dist = Math.hypot(
      this.target.x - this.current.x,
      this.target.y - this.current.y,
      this.target.z - this.current.z
    );

    if (dist > this.settleThreshold) {
      this.isSettled = false;
    }

    return this.isSettled;
  }

  update() {
    if (this.isSettled) return true;

    if (this.reducedMotion) {
      this.current = { ...this.target };
      this.isSettled = true;
      return true;
    }

    this.current.x = lerp(this.current.x, this.target.x, this.damping);
    this.current.y = lerp(this.current.y, this.target.y, this.damping);
    this.current.z = lerp(this.current.z, this.target.z, this.damping);

    const dist = Math.hypot(
      this.target.x - this.current.x,
      this.target.y - this.current.y,
      this.target.z - this.current.z
    );

    if (dist < this.settleThreshold) {
      this.current.x = this.target.x;
      this.current.y = this.target.y;
      this.current.z = this.target.z;
      this.isSettled = true;
    }

    return this.isSettled;
  }
}

// ============================================================================
// 7. Papyrus 2.5D Engine Main Coordinator Class
// ============================================================================

export class PapyrusEngine {
  constructor(options = {}) {
    this.viewport = options.viewport || null;
    this.light = new PapyrusDampingController({
      damping: options.damping || 0.18,
      settleThreshold: 0.001
    });

    if (options.lightPos) {
      this.light.current = { ...options.lightPos };
      this.light.target = { ...options.lightPos };
    }

    this.lightWidth = options.lightWidth || 40;
    this.layers = new Map();
    this.rafId = null;
    this.isRunning = false;
    this.listeners = new Set();

    // Default light position: top-right overhead light
    if (!options.lightPos) {
      this.light.current = { x: 120, y: -180, z: 320 };
      this.light.target = { x: 120, y: -180, z: 320 };
    }

    this._boundTick = this._tick.bind(this);
  }

  registerLayer(id, config = {}) {
    const layer = {
      id,
      element: config.element || null,
      depth: config.depth !== undefined ? config.depth : 12,
      thickness: config.thickness !== undefined ? config.thickness : 0.8,
      cutAngle: config.cutAngle !== undefined ? config.cutAngle : 45,
      material: config.material || 'white-craft',
      svgPath: config.svgPath || '',
      roughness: config.roughness !== undefined ? config.roughness : 0.15,
      cachedExtrusion: null
    };

    if (layer.svgPath) {
      const points = parseSvgPathToPoints(layer.svgPath);
      if (points.length > 0) {
        layer.cachedExtrusion = extrudePathRibbon(points[0], {
          elevation: layer.depth,
          thickness: layer.thickness,
          bevelAngle: layer.cutAngle,
          roughness: layer.roughness
        });
      }
    }

    this.layers.set(id, layer);
    this.requestFrame();
    return layer;
  }

  unregisterLayer(id) {
    this.layers.delete(id);
  }

  setLightTarget(x, y, z) {
    this.light.setTarget(x, y, z);
    this.requestFrame();
  }

  onUpdate(fn) {
    this.listeners.add(fn);
    return () => this.listeners.delete(fn);
  }

  requestFrame() {
    if (!this.isRunning && typeof requestAnimationFrame === 'function') {
      this.isRunning = true;
      this.rafId = requestAnimationFrame(this._boundTick);
    }
  }

  _tick() {
    const settled = this.light.update();

    // Update all registered layers with physical shadows and bevel highlights
    this.render();

    for (const listener of this.listeners) {
      try {
        listener(this);
      } catch (err) {
        console.error('[PapyrusEngine] update callback error:', err);
      }
    }

    if (settled) {
      // Sleep on settle: zero CPU consumption when light is stationary
      this.isRunning = false;
      this.rafId = null;
    } else if (typeof requestAnimationFrame === 'function') {
      this.rafId = requestAnimationFrame(this._boundTick);
    }
  }

  render() {
    const curLight = this.light.current;

    for (const [id, layer] of this.layers.entries()) {
      const shadow = solvePCSS(layer.depth, 0, curLight, this.lightWidth);

      // Compute overall rim highlight estimate for the layer
      const layerCenter = { x: 0, y: 0, z: layer.depth + layer.thickness };
      const bevelRad = (layer.cutAngle * Math.PI) / 180;
      const nominalNormal = norm3({
        x: Math.cos(bevelRad) * 0.7,
        y: Math.cos(bevelRad) * 0.7,
        z: Math.sin(bevelRad)
      });

      const rim = computeRimHighlight(layerCenter, nominalNormal, curLight, {
        intensity: 1.0,
        shininess: layer.material === 'white-craft' ? 36 : 48
      });

      layer.currentShadow = shadow;
      layer.currentRim = rim;

      // Apply CSS custom properties if element is attached
      if (layer.element && layer.element.style) {
        layer.element.style.setProperty('--papyrus-depth', `${layer.depth}px`);
        layer.element.style.setProperty('--papyrus-thickness', `${layer.thickness}px`);
        layer.element.style.setProperty('--papyrus-shadow-box', shadow.cssBoxShadow);
        layer.element.style.setProperty('--papyrus-shadow-filter', shadow.cssFilter);
        layer.element.style.setProperty('--papyrus-rim-highlight', rim.highlightStrength.toFixed(3));
        layer.element.style.setProperty('--papyrus-rim-diffuse', rim.diffuse.toFixed(3));
        layer.element.style.setProperty('--papyrus-light-x', `${curLight.x.toFixed(1)}px`);
        layer.element.style.setProperty('--papyrus-light-y', `${curLight.y.toFixed(1)}px`);
        layer.element.style.setProperty('--papyrus-light-z', `${curLight.z.toFixed(1)}px`);
      }
    }
  }

  /**
   * Renders the extruded 2.5D paper ribbons directly to a Canvas 2D context.
   */
  renderToCanvas(ctx, width, height) {
    if (!ctx) return;
    const curLight = this.light.current;

    ctx.save();
    for (const [, layer] of this.layers.entries()) {
      if (!layer.cachedExtrusion) continue;

      const { ribbonWalls } = layer.cachedExtrusion;
      for (const wall of ribbonWalls) {
        const rim = computeRimHighlight(wall.center, wall.normal3D, curLight, {
          intensity: 1.0,
          shininess: 36
        });

        // Dynamic tone-on-tone paper edge color calculation
        const edgeBrightness = Math.round(238 + rim.highlightStrength * 17);
        ctx.fillStyle = `rgb(${edgeBrightness}, ${edgeBrightness}, ${edgeBrightness})`;
        ctx.strokeStyle = `rgba(215, 220, 228, ${0.4 + rim.highlightStrength * 0.4})`;
        ctx.lineWidth = layer.thickness || 0.8;

        ctx.beginPath();
        ctx.moveTo(wall.v0.x, wall.v0.y);
        ctx.lineTo(wall.v1.x, wall.v1.y);
        ctx.lineTo(wall.v2.x, wall.v2.y);
        ctx.lineTo(wall.v3.x, wall.v3.y);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
      }
    }
    ctx.restore();
  }

  destroy() {
    if (this.rafId && typeof cancelAnimationFrame === 'function') {
      cancelAnimationFrame(this.rafId);
    }
    this.isRunning = false;
    this.layers.clear();
    this.listeners.clear();
  }
}

// Attach to window for global script tag usage in browser
if (typeof window !== 'undefined') {
  window.PapyrusEngine = PapyrusEngine;
  window.PapyrusDampingController = PapyrusDampingController;
  window.extrudePathRibbon = extrudePathRibbon;
  window.parseSvgPathToPoints = parseSvgPathToPoints;
  window.computeRimHighlight = computeRimHighlight;
  window.solvePCSS = solvePCSS;
  window.pulpFiberNoise = pulpFiberNoise;
}

export default PapyrusEngine;
