/**
 * PaperCut UI - Developer Book Reader Suite (papercut-reader.js)
 * 
 * Interactive controller for:
 * - Code snippet clipboard copy with haptic paper feedback
 * - Split reader mode switching (2-up, facsimile-only, text-only)
 * - Original facsimile bounding box highlighting and synchronization
 * - Windows PC (172.30.1.67) GPU Vectorization Worker status updater
 * - Book Card library filtering and click interactions
 */

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.PaperCutReader = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  var PaperCutReader = {
    version: '1.0.0',

    /**
     * Initializes all papercut-reader components on the page
     * @param {Object} [options]
     */
    init: function (options) {
      this.bindCopyButtons();
      this.bindModeSwitches();
      this.bindBookCards();
      this.bindFacsimileHighlights();
    },

    /**
     * Attaches haptic copy interaction to all .pc-btn-copy buttons
     * @param {string} [selector='.pc-btn-copy']
     */
    bindCopyButtons: function (selector) {
      var self = this;
      var query = selector || '.pc-btn-copy';
      var buttons = document.querySelectorAll(query);

      buttons.forEach(function (btn) {
        if (btn.__pcBound) return;
        btn.__pcBound = true;

        btn.addEventListener('click', function (e) {
          e.preventDefault();
          e.stopPropagation();

          var container = btn.closest('.pc-code-provenance');
          var codeEl = container ? container.querySelector('.pc-code-content code, .pc-code-content') : null;
          var textToCopy = codeEl ? codeEl.innerText : '';

          if (!textToCopy && btn.getAttribute('data-clipboard-text')) {
            textToCopy = btn.getAttribute('data-clipboard-text');
          }

          if (textToCopy) {
            self.copyToClipboard(textToCopy, function () {
              self.showCopyFeedback(btn);
            });
          }
        });
      });
    },

    /**
     * Copies text to clipboard with modern API or fallback
     * @param {string} text
     * @param {Function} [callback]
     */
    copyToClipboard: function (text, callback) {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(function () {
          if (callback) callback();
        }).catch(function (err) {
          console.warn('Clipboard write failed, fallback used:', err);
          fallbackCopy(text, callback);
        });
      } else {
        fallbackCopy(text, callback);
      }

      function fallbackCopy(str, cb) {
        var ta = document.createElement('textarea');
        ta.value = str;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.focus();
        ta.select();
        try {
          document.execCommand('copy');
          if (cb) cb();
        } catch (e) {
          console.error('Copy fallback failed:', e);
        }
        document.body.removeChild(ta);
      }
    },

    /**
     * Renders tactile paper copy feedback
     * @param {HTMLElement} btn
     */
    showCopyFeedback: function (btn) {
      var label = btn.querySelector('.pc-copy-label');
      var originalText = label ? label.textContent : btn.textContent;

      btn.classList.add('is-copied');
      if (label) {
        label.textContent = '✓ 복사됨!';
      } else {
        btn.textContent = '✓ 복사됨!';
      }

      setTimeout(function () {
        btn.classList.remove('is-copied');
        if (label) {
          label.textContent = originalText;
        } else {
          btn.textContent = originalText;
        }
      }, 1800);
    },

    /**
     * Binds mode switch buttons inside .pc-reader-split
     */
    bindModeSwitches: function () {
      var self = this;
      var switchButtons = document.querySelectorAll('.pc-reader-mode-switch .pc-mode-btn');

      switchButtons.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
          e.preventDefault();
          var mode = btn.getAttribute('data-mode');
          var readerSplit = btn.closest('.pc-reader-split');

          if (readerSplit && mode) {
            self.setSplitMode(readerSplit, mode);
          }
        });
      });
    },

    /**
     * Sets reader layout mode: 'two-up' | 'facsimile-only' | 'text-only'
     * @param {HTMLElement|string} target
     * @param {string} mode
     */
    setSplitMode: function (target, mode) {
      var container = typeof target === 'string' ? document.querySelector(target) : target;
      if (!container) return;

      container.classList.remove('mode-two-up', 'mode-facsimile-only', 'mode-text-only');
      container.classList.add('mode-' + mode);

      var btns = container.querySelectorAll('.pc-reader-mode-switch .pc-mode-btn');
      btns.forEach(function (b) {
        if (b.getAttribute('data-mode') === mode) {
          b.classList.add('is-active');
        } else {
          b.classList.remove('is-active');
        }
      });
    },

    /**
     * Binds hover and click synchronization between code snippets and facsimile highlights
     */
    bindFacsimileHighlights: function () {
      var toggleButtons = document.querySelectorAll('.pc-btn-contrast-toggle');
      toggleButtons.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
          e.preventDefault();
          btn.classList.toggle('is-active-toggle');
          var highlight = document.querySelector('.pc-facsimile-bbox-highlight');
          if (highlight) {
            highlight.style.display = highlight.style.display === 'none' ? 'block' : 'none';
          }
        });
      });
    },

    /**
     * Binds book card hover, selection, and action button clicks
     */
    bindBookCards: function () {
      var cards = document.querySelectorAll('.pc-book-card');
      cards.forEach(function (card) {
        card.addEventListener('click', function (e) {
          // If clicked inside an action button, let the action fire
          if (e.target.closest('.pc-btn-reader')) return;
          var bookTitle = card.querySelector('.pc-book-title');
          var title = bookTitle ? bookTitle.textContent.trim() : '선택한 서적';
          console.log('[PaperCutReader] Selected book:', title);
        });
      });
    },

    /**
     * Updates Windows GPU Vectorization Worker status indicator
     * @param {Object} data
     * @param {string} [data.host='172.30.1.67']
     * @param {'online'|'processing'|'idle'|'offline'} data.status
     * @param {string} [data.gpuLoad] E.g., 'RTX 4090 · 72%'
     * @param {string} [data.queueCount] E.g., '대기 2권 · 280p'
     * @param {string} [selector='.pc-worker-status']
     */
    updateWorkerStatus: function (data, selector) {
      var target = document.querySelector(selector || '.pc-worker-status');
      if (!target || !data) return;

      target.classList.remove('is-online', 'is-processing', 'is-idle', 'is-offline');
      target.classList.add('is-' + (data.status || 'online'));

      if (data.host) {
        var ipEl = target.querySelector('.pc-worker-ip');
        if (ipEl) ipEl.textContent = data.host;
      }

      if (data.gpuLoad) {
        var gpuEl = target.querySelector('.pc-worker-chip-gpu');
        if (gpuEl) gpuEl.textContent = data.gpuLoad;
      }

      if (data.queueCount) {
        var queueEl = target.querySelector('.pc-worker-chip-queue');
        if (queueEl) queueEl.textContent = data.queueCount;
      }
    },

    /**
     * Filters book cards in a library grid by status or format
     * @param {string} filterValue 'all' | 'completed' | 'processing' | 'pdf' | 'epub'
     * @param {string} [gridSelector='.pc-book-grid']
     */
    filterBooks: function (filterValue, gridSelector) {
      var grid = document.querySelector(gridSelector || '.pc-book-grid');
      if (!grid) return;

      var cards = grid.querySelectorAll('.pc-book-card');
      cards.forEach(function (card) {
        if (filterValue === 'all') {
          card.style.display = 'flex';
          return;
        }

        var isStatusMatch = card.classList.contains('status-' + filterValue) || 
                            card.querySelector('.pc-status-' + filterValue) !== null;
        var isFormatMatch = card.classList.contains('format-' + filterValue) || 
                            card.querySelector('.pc-format-' + filterValue) !== null;

        if (isStatusMatch || isFormatMatch) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    }
  };

  // Auto-initialize when DOM is ready
  if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function () {
        PaperCutReader.init();
      });
    } else {
      PaperCutReader.init();
    }
  }

  return PaperCutReader;
}));
