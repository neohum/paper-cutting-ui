/**
 * Papyrus 2.5D Engine - Declarative Web Components
 * Web Standards Custom Elements v1 Implementation:
 * - <paper-art-scene>: 3D perspective viewport, pointer tracking, lighting orchestration, exploded view
 * - <paper-cut-layer>: 2.5D depth elevation, micro-bevel normal highlight, PCSS shadow solver
 * - <paper-light>: Declarative multi-source lighting element
 *
 * Zero external dependencies. Works in modern browsers and headless test environments.
 */

(function (global) {
  'use strict';

  // --- Utility & Math Functions ---

  /**
   * Linear interpolation (LERP) for smooth damping
   */
  function lerp(start, end, factor) {
    return start + (end - start) * factor;
  }

  /**
   * Clamp a value between min and max
   */
  function clamp(val, min, max) {
    return Math.max(min, Math.min(max, val));
  }

  /**
   * Calculate 2.5D micro-bevel normal rim highlight
   * @param {number} lightX - Light X coordinate relative to layer center
   * @param {number} lightY - Light Y coordinate relative to layer center
   * @param {number} lightZ - Light Z height
   * @param {number} cutAngleDeg - Blade incision angle in degrees (e.g., 45deg, 90deg)
   * @param {number} intensity - Light intensity (0.0 ~ 2.0)
   * @returns {{ specular: number, rimCss: string, lightAngleDeg: number }}
   */
  function computeMicroBevelRim(lightX, lightY, lightZ, cutAngleDeg = 45, intensity = 1.0) {
    const dist2D = Math.hypot(lightX, lightY) || 0.0001;
    const lightAngleRad = Math.atan2(lightY, lightX);
    let lightAngleDeg = Math.round(lightAngleRad * (180 / Math.PI));
    if (lightAngleDeg < 0) lightAngleDeg += 360;

    // Normal vector calculation based on cut slope angle (e.g. 45° bevel gives optimal specularity)
    const bevelSlopeRad = (cutAngleDeg * Math.PI) / 180;
    const cutBevelFactor = Math.sin(bevelSlopeRad);

    // Specular reflection dot product estimation
    const incidentAngle = Math.atan2(dist2D, Math.max(lightZ, 10));
    const specularDot = Math.max(0, Math.cos(incidentAngle - (bevelSlopeRad / 2)));
    const specular = clamp(specularDot * cutBevelFactor * intensity, 0, 1);

    // Subtle warm specular highlight color for white craft paper
    const alpha = (specular * 0.85).toFixed(3);
    const rimCss = `rgba(255, 255, 255, ${alpha})`;

    return {
      specular,
      rimCss,
      lightAngleDeg
    };
  }

  /**
   * Calculate PCSS (Percentage Closer Soft Shadows) multi-layer physical shadow
   * @param {number} depth - Layer depth / elevation (px)
   * @param {number} lightX - Light X relative to scene center
   * @param {number} lightY - Light Y relative to scene center
   * @param {number} lightZ - Light Z distance
   * @returns {{ dx: number, dy: number, blur: number, spread: number, cssShadow: string }}
   */
  function computePcssShadow(depth, lightX, lightY, lightZ = 300) {
    if (depth <= 0) {
      return { dx: 0, dy: 0, blur: 0, spread: 0, cssShadow: 'none' };
    }

    const safeZ = Math.max(lightZ, 50);
    // Project shadow in opposite direction of light
    const projectionFactor = depth / safeZ;
    const dx = -clamp(lightX * projectionFactor * 0.45, -80, 80);
    const dy = -clamp(lightY * projectionFactor * 0.45, -80, 80);

    // PCSS variable penumbra: blur expands proportionally with elevation depth
    const blur = Math.max(1, depth * 1.6 + 2.5);
    const spread = Math.max(0, depth * 0.15 - 0.5);

    // 2-tier contact + mid-air soft shadow with burnt umber craft color (#2E1E14)
    const contactBlur = Math.max(1, depth * 0.4);
    const contactDy = (dy * 0.35).toFixed(2);
    const contactDx = (dx * 0.35).toFixed(2);
    const mainDy = dy.toFixed(2);
    const mainDx = dx.toFixed(2);

    const contactOpacity = clamp(0.38 + depth * 0.015, 0.2, 0.65).toFixed(3);
    const diffuseOpacity = clamp(0.18 + depth * 0.01, 0.1, 0.4).toFixed(3);

    const cssShadow = `${contactDx}px ${contactDy}px ${contactBlur.toFixed(1)}px rgba(46, 30, 20, ${contactOpacity}), ` +
                     `${mainDx}px ${mainDy}px ${blur.toFixed(1)}px ${spread.toFixed(1)}px rgba(46, 30, 20, ${diffuseOpacity})`;

    return {
      dx,
      dy,
      blur,
      spread,
      cssShadow
    };
  }

  // --- Component 1: <paper-light> ---

  class PaperLight extends (global.HTMLElement || class {}) {
    static get observedAttributes() {
      return ['type', 'x', 'y', 'z', 'intensity', 'color', 'cast-shadow', 'track-pointer'];
    }

    constructor() {
      super();
      this._type = 'point';
      this._x = 150;
      this._y = -150;
      this._z = 250;
      this._intensity = 1.0;
      this._color = '#ffffff';
      this._castShadow = true;
      this._trackPointer = false;
      this._parentScene = null;
    }

    _findParentScene() {
      if (this._parentScene) return this._parentScene;
      let curr = this.parentElement || this.parentNode;
      while (curr) {
        if ((curr.tagName && curr.tagName.toUpperCase() === 'PAPER-ART-SCENE') ||
            (curr.constructor && curr.constructor.name === 'PaperArtScene') ||
            (typeof curr.requestSceneUpdate === 'function')) {
          this._parentScene = curr;
          return curr;
        }
        curr = curr.parentElement || curr.parentNode;
      }
      return null;
    }

    get type() { return this.getAttribute('type') || this._type; }
    set type(val) { this.setAttribute('type', val); }

    get x() { const val = parseFloat(this.getAttribute('x')); return isNaN(val) ? this._x : val; }
    set x(val) { this.setAttribute('x', String(val)); }

    get y() { const val = parseFloat(this.getAttribute('y')); return isNaN(val) ? this._y : val; }
    set y(val) { this.setAttribute('y', String(val)); }

    get z() { const val = parseFloat(this.getAttribute('z')); return isNaN(val) ? this._z : val; }
    set z(val) { this.setAttribute('z', String(val)); }

    get intensity() { const val = parseFloat(this.getAttribute('intensity')); return isNaN(val) ? this._intensity : val; }
    set intensity(val) { this.setAttribute('intensity', String(val)); }

    get color() { return this.getAttribute('color') || this._color; }
    set color(val) { this.setAttribute('color', val); }

    get castShadow() {
      const attr = this.getAttribute('cast-shadow');
      if (attr === null) return this._castShadow;
      return attr !== 'false';
    }
    set castShadow(val) { this.setAttribute('cast-shadow', String(Boolean(val))); }

    get trackPointer() {
      const attr = this.getAttribute('track-pointer');
      if (attr === null) return this._trackPointer;
      return attr !== 'false';
    }
    set trackPointer(val) { this.setAttribute('track-pointer', String(Boolean(val))); }

    connectedCallback() {
      if (this.style) {
        this.style.display = 'none';
      }
      this._findParentScene();
      if (this._parentScene && typeof this._parentScene._registerLight === 'function') {
        this._parentScene._registerLight(this);
      }
    }

    disconnectedCallback() {
      if (this._parentScene && typeof this._parentScene._unregisterLight === 'function') {
        this._parentScene._unregisterLight(this);
      }
      this._parentScene = null;
    }

    attributeChangedCallback(name, oldVal, newVal) {
      if (oldVal === newVal) return;
      if (!this._parentScene) this._findParentScene();
      if (this._parentScene && typeof this._parentScene.requestSceneUpdate === 'function') {
        this._parentScene.requestSceneUpdate();
      }
    }

    getLightData() {
      return {
        type: this.type,
        x: this.x,
        y: this.y,
        z: this.z,
        intensity: this.intensity,
        color: this.color,
        castShadow: this.castShadow,
        trackPointer: this.trackPointer
      };
    }

    setCoordinates(x, y, z) {
      this.x = x;
      this.y = y;
      if (z !== undefined) this.z = z;
    }
  }

  // --- Component 2: <paper-cut-layer> ---

  class PaperCutLayer extends (global.HTMLElement || class {}) {
    static get observedAttributes() {
      return ['depth', 'thickness', 'cut-angle', 'material', 'bevel', 'cast-shadow', 'elevation-factor', 'layer-index'];
    }

    constructor() {
      super();
      this._depth = 0;
      this._thickness = '1.2px';
      this._cutAngle = 45;
      this._material = 'white-craft';
      this._bevel = true;
      this._castShadow = true;
      this._elevationFactor = 1.0;
      this._parentScene = null;
    }

    _findParentScene() {
      if (this._parentScene) return this._parentScene;
      let curr = this.parentElement || this.parentNode;
      while (curr) {
        if ((curr.tagName && curr.tagName.toUpperCase() === 'PAPER-ART-SCENE') ||
            (curr.constructor && curr.constructor.name === 'PaperArtScene') ||
            (typeof curr.requestSceneUpdate === 'function')) {
          this._parentScene = curr;
          return curr;
        }
        curr = curr.parentElement || curr.parentNode;
      }
      return null;
    }

    get depth() { const v = parseFloat(this.getAttribute('depth')); return isNaN(v) ? this._depth : v; }
    set depth(val) { this.setAttribute('depth', String(val)); }

    get thickness() { return this.getAttribute('thickness') || this._thickness; }
    set thickness(val) { this.setAttribute('thickness', String(val)); }

    get cutAngle() { const v = parseFloat(this.getAttribute('cut-angle')); return isNaN(v) ? this._cutAngle : v; }
    set cutAngle(val) { this.setAttribute('cut-angle', String(val)); }

    get material() { return this.getAttribute('material') || this._material; }
    set material(val) { this.setAttribute('material', String(val)); }

    get bevel() {
      const v = this.getAttribute('bevel');
      if (v === null) return this._bevel;
      return v !== 'false';
    }
    set bevel(val) { this.setAttribute('bevel', String(Boolean(val))); }

    get castShadow() {
      const v = this.getAttribute('cast-shadow');
      if (v === null) return this._castShadow;
      return v !== 'false';
    }
    set castShadow(val) { this.setAttribute('cast-shadow', String(Boolean(val))); }

    get elevationFactor() {
      const v = parseFloat(this.getAttribute('elevation-factor'));
      return isNaN(v) ? this._elevationFactor : v;
    }
    set elevationFactor(val) { this.setAttribute('elevation-factor', String(val)); }

    connectedCallback() {
      // Accessibility setup
      if (!this.hasAttribute('role')) {
        this.setAttribute('role', 'group');
      }
      if (!this.hasAttribute('aria-label')) {
        this.setAttribute('aria-label', `종이 레이어 (깊이: ${this.depth})`);
      }

      this._findParentScene();
      if (this._parentScene && typeof this._parentScene._registerLayer === 'function') {
        this._parentScene._registerLayer(this);
      } else {
        this.renderStandalone();
      }
    }

    disconnectedCallback() {
      if (this._parentScene && typeof this._parentScene._unregisterLayer === 'function') {
        this._parentScene._unregisterLayer(this);
      }
      this._parentScene = null;
    }

    attributeChangedCallback(name, oldVal, newVal) {
      if (oldVal === newVal) return;

      if (name === 'depth' && !this.hasAttribute('aria-label-custom')) {
        this.setAttribute('aria-label', `종이 레이어 (깊이: ${this.depth})`);
      }

      if (this._parentScene && typeof this._parentScene.requestSceneUpdate === 'function') {
        this._parentScene.requestSceneUpdate();
      } else {
        this.renderStandalone();
      }

      if (typeof this.dispatchEvent === 'function') {
        try {
          this.dispatchEvent(new CustomEvent('layer-change', {
            detail: { attribute: name, oldValue: oldVal, newValue: newVal },
            bubbles: true
          }));
        } catch (_) {}
      }
    }

    /**
     * Compute effective 2.5D depth in pixels
     */
    getComputedDepth() {
      const baseDepth = this.depth;
      const factor = this.elevationFactor;
      if (this._parentScene && this._parentScene.isExploded) {
        const gap = this._parentScene.explodedGap;
        return (baseDepth * gap * factor);
      }
      return baseDepth * 12 * factor;
    }

    /**
     * Update layer rendering and CSS properties when parent scene updates
     */
    updateLayer(lightData, isExploded = false, explodedGap = 40) {
      const compDepth = this.getComputedDepth();
      const zValue = Math.round(compDepth * 10) / 10;
      const cutAngle = this.cutAngle;

      const lightX = lightData ? lightData.x : 150;
      const lightY = lightData ? lightData.y : -150;
      const lightZ = lightData ? lightData.z : 250;
      const intensity = lightData ? lightData.intensity : 1.0;

      // 1. Calculate Micro-Bevel Normal Specular Rim
      let rimCss = 'rgba(255, 255, 255, 0)';
      let bevelSpecular = 0;
      if (this.bevel) {
        const bevelRes = computeMicroBevelRim(lightX, lightY, lightZ, cutAngle, intensity);
        rimCss = bevelRes.rimCss;
        bevelSpecular = bevelRes.specular;
      }

      // 2. Calculate PCSS Depth-Variable Shadow
      let shadowData = { dx: 0, dy: 0, blur: 0, cssShadow: 'none' };
      if (this.castShadow && (lightData ? lightData.castShadow : true)) {
        shadowData = computePcssShadow(compDepth, lightX, lightY, lightZ);
      }

      // 3. Inject CSS custom properties
      if (this.style && typeof this.style.setProperty === 'function') {
        this.style.setProperty('--papyrus-depth', String(this.depth));
        this.style.setProperty('--papyrus-layer-z', `${zValue}px`);
        this.style.setProperty('--papyrus-thickness', this.thickness);
        this.style.setProperty('--papyrus-cut-angle', `${cutAngle}deg`);
        this.style.setProperty('--papyrus-bevel-rim', rimCss);
        this.style.setProperty('--papyrus-bevel-specular', bevelSpecular.toFixed(3));
        this.style.setProperty('--papyrus-shadow-dx', `${shadowData.dx.toFixed(2)}px`);
        this.style.setProperty('--papyrus-shadow-dy', `${shadowData.dy.toFixed(2)}px`);
        this.style.setProperty('--papyrus-shadow-blur', `${shadowData.blur.toFixed(2)}px`);
        this.style.setProperty('--papyrus-shadow-composite', shadowData.cssShadow);
        this.style.transform = `translate3d(0, 0, ${zValue}px)`;
        if (shadowData.cssShadow !== 'none') {
          this.style.boxShadow = shadowData.cssShadow;
        } else {
          this.style.boxShadow = 'none';
        }
      }
    }

    renderStandalone() {
      this.updateLayer(null, false, 40);
    }
  }

  // --- Component 3: <paper-art-scene> ---

  class PaperArtScene extends (global.HTMLElement || class {}) {
    static get observedAttributes() {
      return [
        'perspective',
        'view-mode',
        'exploded',
        'exploded-gap',
        'track-pointer',
        'light-smoothing',
        'light-x',
        'light-y',
        'light-z'
      ];
    }

    constructor() {
      super();

      this._perspective = '1200px';
      this._viewMode = 'perspective';
      this._exploded = false;
      this._explodedGap = 40;
      this._trackPointer = true;
      this._lightSmoothing = 0.18;

      // Active primary light state
      this._light = {
        x: 150,
        y: -150,
        z: 250,
        intensity: 1.0,
        color: '#ffffff',
        castShadow: true
      };

      // Pointer interactive state
      this._targetTiltX = 0;
      this._targetTiltY = 0;
      this._currentTiltX = 0;
      this._currentTiltY = 0;
      this._targetLightX = 150;
      this._targetLightY = -150;
      this._currentLightX = 150;
      this._currentLightY = -150;

      this._isPointerInside = false;
      this._rafId = null;
      this._isLoopRunning = false;

      // Child element collections
      this._layers = new Set();
      this._lights = new Set();

      // Bound event listeners for leak-free removal
      this._onPointerMove = this._handlePointerMove.bind(this);
      this._onPointerEnter = this._handlePointerEnter.bind(this);
      this._onPointerLeave = this._handlePointerLeave.bind(this);
      this._onKeyDown = this._handleKeyDown.bind(this);
      this._tick = this._stepLoop.bind(this);

      this._resizeObserver = null;
      this._mutationObserver = null;

      // Initialize Shadow DOM if supported
      this._shadowRoot = null;
      if (typeof this.attachShadow === 'function') {
        try {
          this._shadowRoot = this.attachShadow({ mode: 'open' });
          this._shadowRoot.innerHTML = `
            <style>
              :host {
                display: block;
                position: relative;
                perspective: var(--papyrus-perspective, 1200px);
                transform-style: preserve-3d;
                box-sizing: border-box;
                outline: none;
              }
              :host(:focus-visible) {
                outline: 2px solid var(--papyrus-focus-ring, #d97706);
                outline-offset: 4px;
              }
              .papyrus-scene-viewport {
                position: relative;
                width: 100%;
                height: 100%;
                transform-style: preserve-3d;
                box-sizing: border-box;
              }
              .papyrus-scene-world {
                position: relative;
                width: 100%;
                height: 100%;
                transform-style: preserve-3d;
                box-sizing: border-box;
                transform: rotateX(var(--papyrus-tilt-x, 0deg)) rotateY(var(--papyrus-tilt-y, 0deg));
                transition: transform 0.08s ease-out;
              }
            </style>
            <div class="papyrus-scene-viewport" part="viewport">
              <div class="papyrus-scene-world" part="world">
                <slot></slot>
              </div>
            </div>
          `;
        } catch (_) {
          this._shadowRoot = null;
        }
      }
    }

    // --- Attributes & Properties ---

    get perspective() { return this.getAttribute('perspective') || this._perspective; }
    set perspective(val) { this.setAttribute('perspective', String(val)); }

    get viewMode() { return this.getAttribute('view-mode') || this._viewMode; }
    set viewMode(val) { this.setAttribute('view-mode', String(val)); }

    get exploded() {
      const v = this.getAttribute('exploded');
      if (v === null) return this._exploded;
      return v !== 'false';
    }
    set exploded(val) {
      if (val) this.setAttribute('exploded', '');
      else this.removeAttribute('exploded');
    }

    get isExploded() { return this.exploded; }

    get explodedGap() {
      const v = parseFloat(this.getAttribute('exploded-gap'));
      return isNaN(v) ? this._explodedGap : v;
    }
    set explodedGap(val) { this.setAttribute('exploded-gap', String(val)); }

    get trackPointer() {
      const v = this.getAttribute('track-pointer');
      if (v === null) return this._trackPointer;
      return v !== 'false';
    }
    set trackPointer(val) { this.setAttribute('track-pointer', String(Boolean(val))); }

    get lightSmoothing() {
      const v = parseFloat(this.getAttribute('light-smoothing'));
      return isNaN(v) ? this._lightSmoothing : v;
    }
    set lightSmoothing(val) { this.setAttribute('light-smoothing', String(val)); }

    // --- Lifecycle callbacks ---

    connectedCallback() {
      // Standard ARIA landmark initialization
      if (!this.hasAttribute('role')) {
        this.setAttribute('role', 'region');
      }
      if (!this.hasAttribute('aria-label')) {
        this.setAttribute('aria-label', '2.5D 페이퍼 아트 장면');
      }
      if (!this.hasAttribute('tabindex')) {
        this.setAttribute('tabindex', '0');
      }

      this._syncAttributesToState();

      // Register DOM listeners for pointer tracking
      if (typeof this.addEventListener === 'function') {
        this.addEventListener('pointerenter', this._onPointerEnter, { passive: true });
        this.addEventListener('pointermove', this._onPointerMove, { passive: true });
        this.addEventListener('pointerleave', this._onPointerLeave, { passive: true });
        this.addEventListener('keydown', this._onKeyDown);
      }

      // Responsive viewport ResizeObserver
      if (typeof global.ResizeObserver === 'function') {
        this._resizeObserver = new global.ResizeObserver(() => {
          this.requestSceneUpdate();
        });
        this._resizeObserver.observe(this);
      }

      // MutationObserver to watch slotted paper-cut-layer and paper-light additions
      if (typeof global.MutationObserver === 'function') {
        this._mutationObserver = new global.MutationObserver(() => {
          this._discoverChildNodes();
          this.requestSceneUpdate();
        });
        this._mutationObserver.observe(this, { childList: true, subtree: true });
      }

      this._discoverChildNodes();
      this.updateScene();
    }

    disconnectedCallback() {
      // Cancel RAF animation loop to prevent memory leaks
      this._stopLoop();

      // Clean up event listeners
      if (typeof this.removeEventListener === 'function') {
        this.removeEventListener('pointerenter', this._onPointerEnter);
        this.removeEventListener('pointermove', this._onPointerMove);
        this.removeEventListener('pointerleave', this._onPointerLeave);
        this.removeEventListener('keydown', this._onKeyDown);
      }

      // Disconnect observers
      if (this._resizeObserver) {
        this._resizeObserver.disconnect();
        this._resizeObserver = null;
      }
      if (this._mutationObserver) {
        this._mutationObserver.disconnect();
        this._mutationObserver = null;
      }

      this._layers.clear();
      this._lights.clear();
    }

    attributeChangedCallback(name, oldVal, newVal) {
      if (oldVal === newVal) return;
      this._syncAttributesToState();
      this.updateScene();
    }

    _syncAttributesToState() {
      const persp = this.perspective;
      this.style.setProperty('--papyrus-perspective', persp.includes('px') ? persp : `${persp}px`);
      this.style.setProperty('--papyrus-exploded-gap', `${this.explodedGap}px`);

      if (this.hasAttribute('light-x')) {
        this._light.x = parseFloat(this.getAttribute('light-x')) || 0;
      }
      if (this.hasAttribute('light-y')) {
        this._light.y = parseFloat(this.getAttribute('light-y')) || 0;
      }
      if (this.hasAttribute('light-z')) {
        this._light.z = parseFloat(this.getAttribute('light-z')) || 250;
      }
    }

    // --- Scene & Child Management ---

    appendChild(child) {
      const res = super.appendChild ? super.appendChild(child) : child;
      if (child) {
        child._parentScene = this;
        const tag = (child.tagName || (child.constructor && child.constructor.name) || '').toUpperCase();
        if (tag.includes('LAYER') || (typeof child.getComputedDepth === 'function')) {
          this._registerLayer(child);
        } else if (tag.includes('LIGHT') || (typeof child.getLightData === 'function')) {
          this._registerLight(child);
        }
      }
      return res;
    }

    removeChild(child) {
      const res = super.removeChild ? super.removeChild(child) : child;
      if (child) {
        const tag = (child.tagName || (child.constructor && child.constructor.name) || '').toUpperCase();
        if (tag.includes('LAYER') || (typeof child.getComputedDepth === 'function')) {
          this._unregisterLayer(child);
        } else if (tag.includes('LIGHT') || (typeof child.getLightData === 'function')) {
          this._unregisterLight(child);
        }
        child._parentScene = null;
      }
      return res;
    }

    _registerLayer(layer) {
      layer._parentScene = this;
      this._layers.add(layer);
      this.requestSceneUpdate();
    }

    _unregisterLayer(layer) {
      this._layers.delete(layer);
      this.requestSceneUpdate();
    }

    _registerLight(light) {
      this._lights.add(light);
      this.requestSceneUpdate();
    }

    _unregisterLight(light) {
      this._lights.delete(light);
      this.requestSceneUpdate();
    }

    _discoverChildNodes() {
      if (typeof this.querySelectorAll !== 'function') return;
      const foundLayers = this.querySelectorAll('paper-cut-layer');
      foundLayers.forEach(l => {
        l._parentScene = this;
        this._layers.add(l);
      });
      const foundLights = this.querySelectorAll('paper-light');
      foundLights.forEach(lt => {
        lt._parentScene = this;
        this._lights.add(lt);
      });
    }

    getLayers() {
      return Array.from(this._layers);
    }

    getLights() {
      return Array.from(this._lights);
    }

    // --- Interactive Controls & Public APIs ---

    /**
     * Toggle or set exploded view mode with custom layer gap
     * @param {boolean} exploded
     * @param {number} gap - Spacing in pixels between layers
     */
    setExploded(exploded, gap = 40) {
      this.exploded = Boolean(exploded);
      if (gap !== undefined) {
        this.explodedGap = gap;
      }
      this.updateScene();

      if (typeof this.dispatchEvent === 'function') {
        try {
          this.dispatchEvent(new CustomEvent('scene-explode-change', {
            detail: { exploded: this.exploded, gap: this.explodedGap },
            bubbles: true
          }));
        } catch (_) {}
      }
    }

    /**
     * Set coordinates and attributes for the primary scene light
     */
    setLight(x, y, z, intensity = 1.0, color = '#ffffff') {
      this._light.x = x;
      this._light.y = y;
      if (z !== undefined) this._light.z = z;
      if (intensity !== undefined) this._light.intensity = intensity;
      if (color !== undefined) this._light.color = color;

      this._targetLightX = x;
      this._targetLightY = y;
      this._currentLightX = x;
      this._currentLightY = y;

      this.updateScene();

      if (typeof this.dispatchEvent === 'function') {
        try {
          this.dispatchEvent(new CustomEvent('scene-light-change', {
            detail: { ...this._light },
            bubbles: true
          }));
        } catch (_) {}
      }
    }

    /**
     * Alias for setLight for coordinate updating
     */
    setLightCoordinates(x, y, z) {
      this.setLight(x, y, z);
    }

    /**
     * Immediate update of scene styles and child layers
     */
    updateScene() {
      // Determine active light: If declarative <paper-light> exists, take priority
      let activeLight = { ...this._light };
      const lightElements = this.getLights();
      if (lightElements.length > 0) {
        const primary = lightElements[0].getLightData();
        activeLight = { ...activeLight, ...primary };
      }

      // Inject scene-level CSS custom variables
      if (this.style && typeof this.style.setProperty === 'function') {
        this.style.setProperty('--papyrus-light-x', `${activeLight.x.toFixed(1)}px`);
        this.style.setProperty('--papyrus-light-y', `${activeLight.y.toFixed(1)}px`);
        this.style.setProperty('--papyrus-light-z', `${activeLight.z.toFixed(1)}px`);
        this.style.setProperty('--papyrus-light-intensity', String(activeLight.intensity));
        this.style.setProperty('--papyrus-light-color', activeLight.color);
        this.style.setProperty('--papyrus-exploded', this.exploded ? '1' : '0');
        this.style.setProperty('--papyrus-exploded-gap', `${this.explodedGap}px`);
        this.style.setProperty('--papyrus-tilt-x', `${this._currentTiltX.toFixed(2)}deg`);
        this.style.setProperty('--papyrus-tilt-y', `${this._currentTiltY.toFixed(2)}deg`);
      }

      // Propagate updates to all registered layers
      const layers = this.getLayers();
      const isExploded = this.exploded;
      const gap = this.explodedGap;

      layers.forEach(layer => {
        if (typeof layer.updateLayer === 'function') {
          layer.updateLayer(activeLight, isExploded, gap);
        }
      });
    }

    requestSceneUpdate() {
      this.updateScene();
    }

    // --- Pointer Tracking & Animation Loop ---

    _handlePointerEnter() {
      if (!this.trackPointer) return;
      this._isPointerInside = true;
      this._startLoop();
    }

    _handlePointerLeave() {
      this._isPointerInside = false;
      this._targetTiltX = 0;
      this._targetTiltY = 0;
      // Reset light coordinates to standard 315° rest position (top-left)
      this._targetLightX = 150;
      this._targetLightY = -150;
      this._startLoop();
    }

    _handlePointerMove(e) {
      if (!this.trackPointer) return;
      this._isPointerInside = true;

      // Compute normalized coordinates [-1, 1] relative to scene bounds
      const rect = typeof this.getBoundingClientRect === 'function'
        ? this.getBoundingClientRect()
        : { left: 0, top: 0, width: 600, height: 400 };

      const width = rect.width || 600;
      const height = rect.height || 400;

      const clientX = e.clientX !== undefined ? e.clientX : (rect.left + width / 2);
      const clientY = e.clientY !== undefined ? e.clientY : (rect.top + height / 2);

      const relX = clientX - (rect.left + width / 2);
      const relY = clientY - (rect.top + height / 2);

      const normX = clamp(relX / (width / 2), -1, 1);
      const normY = clamp(relY / (height / 2), -1, 1);

      // Max 3D perspective tilt is 12 degrees
      const maxTilt = 12;
      this._targetTiltX = -normY * maxTilt;
      this._targetTiltY = normX * maxTilt;

      // Dynamic light moves opposite to create realistic papercut specular reflection
      this._targetLightX = relX * 1.2;
      this._targetLightY = relY * 1.2;

      this.style.setProperty('--papyrus-pointer-x', normX.toFixed(3));
      this.style.setProperty('--papyrus-pointer-y', normY.toFixed(3));

      this._startLoop();
    }

    _handleKeyDown(e) {
      // Accessible keyboard navigation (Arrow keys tilt scene, Space/Enter toggles exploded)
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        this.setExploded(!this.exploded, this.explodedGap);
      } else if (e.key === 'ArrowUp') {
        this._currentTiltX = clamp(this._currentTiltX - 2, -15, 15);
        this.updateScene();
      } else if (e.key === 'ArrowDown') {
        this._currentTiltX = clamp(this._currentTiltX + 2, -15, 15);
        this.updateScene();
      } else if (e.key === 'ArrowLeft') {
        this._currentTiltY = clamp(this._currentTiltY - 2, -15, 15);
        this.updateScene();
      } else if (e.key === 'ArrowRight') {
        this._currentTiltY = clamp(this._currentTiltY + 2, -15, 15);
        this.updateScene();
      }
    }

    _startLoop() {
      if (this._isLoopRunning) return;
      this._isLoopRunning = true;
      const raf = global.requestAnimationFrame || ((cb) => setTimeout(cb, 16));
      this._rafId = raf(this._tick);
    }

    _stopLoop() {
      if (this._rafId) {
        const cancel = global.cancelAnimationFrame || clearTimeout;
        cancel(this._rafId);
        this._rafId = null;
      }
      this._isLoopRunning = false;
    }

    _stepLoop() {
      // Check prefers-reduced-motion: if enabled, snap immediately and sleep
      const hasReducedMotion = typeof global.matchMedia === 'function' &&
        global.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (hasReducedMotion) {
        this._currentTiltX = this._targetTiltX;
        this._currentTiltY = this._targetTiltY;
        this._currentLightX = this._targetLightX;
        this._currentLightY = this._targetLightY;
        this._light.x = this._currentLightX;
        this._light.y = this._currentLightY;
        this.updateScene();
        this._stopLoop();
        return;
      }

      const factor = this.lightSmoothing;
      this._currentTiltX = lerp(this._currentTiltX, this._targetTiltX, factor);
      this._currentTiltY = lerp(this._currentTiltY, this._targetTiltY, factor);
      this._currentLightX = lerp(this._currentLightX, this._targetLightX, factor);
      this._currentLightY = lerp(this._currentLightY, this._targetLightY, factor);

      this._light.x = this._currentLightX;
      this._light.y = this._currentLightY;

      // Update light on any tracking paper-light elements
      this.getLights().forEach(lightEl => {
        if (lightEl.trackPointer) {
          lightEl.setCoordinates(this._currentLightX, this._currentLightY);
        }
      });

      this.updateScene();

      // Sleep-on-Settle check
      const dTiltX = Math.abs(this._targetTiltX - this._currentTiltX);
      const dTiltY = Math.abs(this._targetTiltY - this._currentTiltY);
      const dLightX = Math.abs(this._targetLightX - this._currentLightX);
      const dLightY = Math.abs(this._targetLightY - this._currentLightY);

      if (!this._isPointerInside && dTiltX < 0.05 && dTiltY < 0.05 && dLightX < 0.1 && dLightY < 0.1) {
        this._currentTiltX = this._targetTiltX;
        this._currentTiltY = this._targetTiltY;
        this._currentLightX = this._targetLightX;
        this._currentLightY = this._targetLightY;
        this.updateScene();
        this._stopLoop(); // Enter sleep state, zero CPU usage
        return;
      }

      const raf = global.requestAnimationFrame || ((cb) => setTimeout(cb, 16));
      this._rafId = raf(this._tick);
    }
  }

  // --- Auto-register Custom Elements ---
  function registerComponents() {
    if (typeof global.customElements !== 'undefined' && typeof global.customElements.define === 'function') {
      if (!global.customElements.get('paper-art-scene')) {
        global.customElements.define('paper-art-scene', PaperArtScene);
      }
      if (!global.customElements.get('paper-cut-layer')) {
        global.customElements.define('paper-cut-layer', PaperCutLayer);
      }
      if (!global.customElements.get('paper-light')) {
        global.customElements.define('paper-light', PaperLight);
      }
    }
  }

  registerComponents();

  // Export for ES modules and script tags
  const PapyrusComponents = {
    PaperArtScene,
    PaperCutLayer,
    PaperLight,
    computeMicroBevelRim,
    computePcssShadow,
    lerp,
    registerComponents
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = PapyrusComponents;
  }
  global.PapyrusComponents = PapyrusComponents;

})(typeof globalThis !== 'undefined' ? globalThis : (typeof window !== 'undefined' ? window : this));
