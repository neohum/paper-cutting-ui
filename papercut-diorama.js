/**
 * PaperCut UI — 3D Paper-cut Shadow Box Diorama Engine
 *
 * Provides:
 * - rAF Lerp damped mouse parallax tilt physics (stage 3D rotation)
 * - 6-tier differential Z/X/Y paper layer parallax shifts
 * - Exploded architecture inspection mode (.is-exploded)
 * - View mode switcher (3D Diorama vs Original Reference Artwork)
 * - prefers-reduced-motion accessibility compliance
 * - Auto-initialization on [data-pc-diorama]
 */

(function (global) {
  'use strict';

  class PaperCutDiorama {
    /**
     * @param {HTMLElement|string} root Element or selector for the diorama container
     * @param {Object} [options]
     */
    constructor(root, options = {}) {
      this.container = typeof root === 'string' ? document.querySelector(root) : root;
      if (!this.container) return;

      this.options = Object.assign(
        {
          maxTiltDeg: 16,
          lerpFactor: 0.085,
          perspective: 1200,
          explodedZStep: 75,
          defaultMode: '3d',
        },
        options
      );

      this.viewport = this.container.querySelector('.pc-diorama-viewport');
      this.stage = this.container.querySelector('.pc-diorama-stage');
      this.layers = Array.from(this.container.querySelectorAll('.pc-diorama-layer'));
      this.explodedBtn = this.container.querySelector('[data-action="toggle-exploded"]');
      this.modeTabs = Array.from(this.container.querySelectorAll('[data-view-tab]'));

      this.isExploded = false;
      this.isHovering = false;
      this.currentMode = this.options.defaultMode;

      // Parallax Physics Coordinates
      this.targetTiltX = 0;
      this.targetTiltY = 0;
      this.currentTiltX = 0;
      this.currentTiltY = 0;
      this.targetOffsetX = 0;
      this.targetOffsetY = 0;
      this.currentOffsetX = 0;
      this.currentOffsetY = 0;

      this.rafId = null;
      this.reducedMotion = false;

      this._initAccessibility();
      this._bindEvents();
      this._startRenderLoop();

      this.container.__pcDiorama = this;
    }

    _initAccessibility() {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      this.reducedMotion = mediaQuery.matches;

      mediaQuery.addEventListener('change', (e) => {
        this.reducedMotion = e.matches;
        if (this.reducedMotion) {
          this._resetTransforms();
        }
      });
    }

    _bindEvents() {
      if (!this.viewport) return;

      // Mouse Move Parallax on Viewport
      this._onMouseMove = (e) => {
        if (this.reducedMotion) return;
        const rect = this.viewport.getBoundingClientRect();
        if (rect.width === 0 || rect.height === 0) return;

        // Normalized relative to center (-0.5 to +0.5)
        const relX = (e.clientX - rect.left) / rect.width - 0.5;
        const relY = (e.clientY - rect.top) / rect.height - 0.5;

        this.targetTiltY = relX * this.options.maxTiltDeg;
        this.targetTiltX = -relY * this.options.maxTiltDeg;
        this.targetOffsetX = relX;
        this.targetOffsetY = relY;
      };

      this._onMouseEnter = () => {
        this.isHovering = true;
        if (this.viewport) {
          this.viewport.classList.add('is-tilting');
        }
      };

      this._onMouseLeave = () => {
        this.isHovering = false;
        this.targetTiltX = 0;
        this.targetTiltY = 0;
        this.targetOffsetX = 0;
        this.targetOffsetY = 0;
        if (this.viewport) {
          this.viewport.classList.remove('is-tilting');
        }
      };

      this.viewport.addEventListener('mousemove', this._onMouseMove, { passive: true });
      this.viewport.addEventListener('mouseenter', this._onMouseEnter);
      this.viewport.addEventListener('mouseleave', this._onMouseLeave);

      // Touch / Gyroscope tilt support for mobile
      this.viewport.addEventListener(
        'touchmove',
        (e) => {
          if (this.reducedMotion || !e.touches[0]) return;
          const rect = this.viewport.getBoundingClientRect();
          const t = e.touches[0];
          const relX = (t.clientX - rect.left) / rect.width - 0.5;
          const relY = (t.clientY - rect.top) / rect.height - 0.5;
          this.targetTiltY = relX * (this.options.maxTiltDeg * 0.8);
          this.targetTiltX = -relY * (this.options.maxTiltDeg * 0.8);
          this.targetOffsetX = relX;
          this.targetOffsetY = relY;
        },
        { passive: true }
      );

      this.viewport.addEventListener('touchend', () => {
        this._onMouseLeave();
      });

      // Exploded View Button
      if (this.explodedBtn) {
        this.explodedBtn.addEventListener('click', (e) => {
          e.preventDefault();
          this.toggleExploded();
        });
      }

      // View Mode Switcher Tabs
      this.modeTabs.forEach((tab) => {
        tab.addEventListener('click', (e) => {
          e.preventDefault();
          const mode = tab.getAttribute('data-view-tab');
          if (mode) this.setMode(mode);
        });
      });
    }

    _startRenderLoop() {
      const render = () => {
        if (!this.reducedMotion && this.stage) {
          // Lerp damping
          const factor = this.options.lerpFactor;
          this.currentTiltX += (this.targetTiltX - this.currentTiltX) * factor;
          this.currentTiltY += (this.targetTiltY - this.currentTiltY) * factor;
          this.currentOffsetX += (this.targetOffsetX - this.currentOffsetX) * factor;
          this.currentOffsetY += (this.targetOffsetY - this.currentOffsetY) * factor;

          // Apply 3D Stage Transform
          if (this.isExploded) {
            // In exploded mode, combine fixed architectural perspective with slight mouse parallax
            const baseRotY = -28 + this.currentTiltY * 0.35;
            const baseRotX = 15 + this.currentTiltX * 0.35;
            this.stage.style.transform = `rotateY(${baseRotY.toFixed(2)}deg) rotateX(${baseRotX.toFixed(2)}deg) translateZ(-40px)`;
          } else {
            // Normal 3D diorama tilt
            this.stage.style.transform = `rotateX(${this.currentTiltX.toFixed(2)}deg) rotateY(${this.currentTiltY.toFixed(2)}deg) translateZ(0)`;
          }

          // Apply Differential Layer Parallax Shift
          const layerWeights = [2, 6, 12, 20, 28, 38]; // Pixels of shift per layer index
          this.layers.forEach((layer, idx) => {
            const weight = layerWeights[idx] || (idx + 1) * 6;
            const px = (this.currentOffsetX * weight).toFixed(2);
            const py = (this.currentOffsetY * weight * 0.7).toFixed(2);

            // In normal mode, layer has its base Z translate, plus differential X/Y shift
            if (!this.isExploded) {
              const baseZ = [0, 18, 36, 56, 76, 98][idx] || idx * 18;
              layer.style.transform = `translate3d(${px}px, ${py}px, ${baseZ}px)`;
            }
          });
        }

        this.rafId = requestAnimationFrame(render);
      };

      this.rafId = requestAnimationFrame(render);
    }

    _resetTransforms() {
      if (this.stage) {
        this.stage.style.transform = '';
      }
      this.layers.forEach((layer, idx) => {
        const baseZ = [0, 18, 36, 56, 76, 98][idx] || idx * 18;
        layer.style.transform = `translate3d(0, 0, ${baseZ}px)`;
      });
    }

    /**
     * Toggle Exploded Z-axis Architecture Inspection Mode
     * @param {boolean} [force]
     */
    toggleExploded(force) {
      this.isExploded = typeof force === 'boolean' ? force : !this.isExploded;

      if (this.viewport) {
        this.viewport.classList.toggle('is-exploded', this.isExploded);
      }

      if (this.explodedBtn) {
        this.explodedBtn.classList.toggle('is-active', this.isExploded);
        this.explodedBtn.setAttribute('aria-pressed', this.isExploded ? 'true' : 'false');
        const label = this.explodedBtn.querySelector('.pc-btn-text');
        if (label) {
          label.textContent = this.isExploded ? '디오라마 재조립 뷰' : '레이어 분해 뷰 (Exploded)';
        }
      }

      // Reset layer custom inline transforms to allow CSS exploded classes to animate
      this.layers.forEach((layer, idx) => {
        if (this.isExploded) {
          layer.style.transform = '';
        } else {
          const baseZ = [0, 18, 36, 56, 76, 98][idx] || idx * 18;
          layer.style.transform = `translate3d(0, 0, ${baseZ}px)`;
        }
      });

      this.container.dispatchEvent(
        new CustomEvent('pc:diorama-exploded', {
          bubbles: true,
          detail: { isExploded: this.isExploded },
        })
      );
    }

    /**
     * Switch view between 3D Diorama and Reference Artwork
     * @param {'3d'|'original'} mode
     */
    setMode(mode) {
      if (mode !== '3d' && mode !== 'original') return;
      this.currentMode = mode;
      this.container.setAttribute('data-view-mode', mode);

      this.modeTabs.forEach((tab) => {
        const tabMode = tab.getAttribute('data-view-tab');
        const isActive = tabMode === mode;
        tab.classList.toggle('is-active', isActive);
        tab.setAttribute('aria-selected', isActive ? 'true' : 'false');
      });

      if (this.explodedBtn) {
        this.explodedBtn.style.display = mode === '3d' ? 'inline-flex' : 'none';
      }

      this.container.dispatchEvent(
        new CustomEvent('pc:diorama-mode-change', {
          bubbles: true,
          detail: { mode },
        })
      );
    }

    destroy() {
      if (this.rafId) {
        cancelAnimationFrame(this.rafId);
      }
      if (this.viewport) {
        this.viewport.removeEventListener('mousemove', this._onMouseMove);
        this.viewport.removeEventListener('mouseenter', this._onMouseEnter);
        this.viewport.removeEventListener('mouseleave', this._onMouseLeave);
      }
      delete this.container.__pcDiorama;
    }
  }

  // Auto-initialize all diorama elements on DOMContentLoaded
  function initAll() {
    const dioramas = document.querySelectorAll('[data-pc-diorama]');
    const instances = [];
    dioramas.forEach((el) => {
      if (!el.__pcDiorama) {
        instances.push(new PaperCutDiorama(el));
      }
    });
    global.paperCutDioramaInstances = instances;
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
  } else {
    initAll();
  }

  global.PaperCutDiorama = PaperCutDiorama;
})(typeof window !== 'undefined' ? window : this);
