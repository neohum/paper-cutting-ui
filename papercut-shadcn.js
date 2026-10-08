/**
 * PaperCut UI - Shadcn Components Edition (papercut-shadcn.js)
 * 
 * Complete suite of all 45 interactive shadcn/ui components reimagined in
 * authentic 3D Layered Paper-Cut aesthetics:
 * - Full WCAG AAA keyboard navigation & ARIA semantics
 * - Seamless integration with the 529 freestanding kirigami SVG icon system
 * - Self-contained state management and clean event APIs
 * - Public API under `window.PaperCutShadcn`
 */

(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) {
    module.exports = api;
  }
  if (typeof root !== 'undefined') {
    root.PaperCutShadcn = api;
  }
  if (typeof window !== 'undefined') {
    window.PaperCutShadcn = api;
  }
})(typeof globalThis !== 'undefined' ? globalThis : (typeof self !== 'undefined' ? self : this), function () {
  'use strict';

  // Safe query helpers
  function $$(selector, context = document) {
    return Array.from(context.querySelectorAll(selector));
  }

  function $(selector, context = document) {
    return context.querySelector(selector);
  }

  // Hydrate icons safely using the global PaperCut 529 icon engine
  function hydrateIcons(element) {
    if (typeof window !== 'undefined' && typeof window.hydratePapercutIcons === 'function') {
      window.hydratePapercutIcons(element || document);
    }
  }

  /* ==========================================================================
     1. ACCORDION (Concertina pleated paper fold with chevron cutline)
     ========================================================================== */
  const Accordion = {
    init(context = document) {
      $$('.pc-sd-accordion, .pc-shadcn-accordion', context).forEach(acc => {
        if (acc._pcInit) return;
        acc._pcInit = true;

        acc.addEventListener('click', (e) => {
          const trigger = e.target.closest('.pc-sd-accordion-trigger, .pc-shadcn-accordion-trigger');
          if (!trigger) return;

          const item = trigger.closest('.pc-sd-accordion-item, .pc-shadcn-accordion-item');
          if (!item) return;

          const isOpen = item.getAttribute('data-state') === 'open';
          const isMultiple = acc.getAttribute('data-type') === 'multiple';

          if (!isMultiple && !isOpen) {
            $$('.pc-sd-accordion-item, .pc-shadcn-accordion-item', acc).forEach(otherItem => {
              if (otherItem !== item) {
                otherItem.setAttribute('data-state', 'closed');
                const otherTrigger = $('.pc-sd-accordion-trigger, .pc-shadcn-accordion-trigger', otherItem);
                if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
              }
            });
          }

          item.setAttribute('data-state', isOpen ? 'closed' : 'open');
          trigger.setAttribute('aria-expanded', isOpen ? 'false' : 'true');

          acc.dispatchEvent(new CustomEvent('accordion-change', {
            bubbles: true,
            detail: { item, isOpen: !isOpen }
          }));
        });
      });
    }
  };

  /* ==========================================================================
     2. ALERT (Postage stamp deckle badge with ribbon border)
     ========================================================================== */
  const Alert = {
    dismiss(alertEl) {
      if (!alertEl) return;
      alertEl.style.transition = 'all 0.22s cubic-bezier(0.25, 1, 0.5, 1)';
      alertEl.style.opacity = '0';
      alertEl.style.transform = 'scale(0.92) translateY(-4px)';
      setTimeout(() => alertEl.remove(), 220);
    },
    init(context = document) {
      $$('.pc-sd-alert-close, .pc-shadcn-alert-close', context).forEach(btn => {
        if (btn._pcInit) return;
        btn._pcInit = true;

        btn.addEventListener('click', (e) => {
          const alert = e.target.closest('.pc-sd-alert, .pc-shadcn-alert');
          if (alert) Alert.dismiss(alert);
        });
      });
    }
  };

  /* ==========================================================================
     3. ALERT DIALOG (Layered shadowbox modal with deckle edge & paper buttons)
     ========================================================================== */
  const AlertDialog = {
    open(targetId) {
      const el = typeof targetId === 'string' ? $(targetId) : targetId;
      if (!el) return;
      const overlay = el.classList.contains('pc-sd-alert-dialog-overlay') || el.classList.contains('pc-shadcn-alert-dialog-overlay')
        ? el
        : el.closest('.pc-sd-alert-dialog-overlay, .pc-shadcn-alert-dialog-overlay');
      if (overlay) {
        overlay.setAttribute('data-state', 'open');
        document.body.style.overflow = 'hidden';
      }
    },
    close(targetId) {
      const el = typeof targetId === 'string' ? $(targetId) : targetId;
      if (!el) return;
      const overlay = el.classList.contains('pc-sd-alert-dialog-overlay') || el.classList.contains('pc-shadcn-alert-dialog-overlay')
        ? el
        : el.closest('.pc-sd-alert-dialog-overlay, .pc-shadcn-alert-dialog-overlay');
      if (overlay) {
        overlay.setAttribute('data-state', 'closed');
        document.body.style.overflow = '';
      }
    },
    init(context = document) {
      document.addEventListener('click', (e) => {
        const trigger = e.target.closest('[data-alert-dialog-target]');
        if (trigger) {
          e.preventDefault();
          AlertDialog.open(trigger.getAttribute('data-alert-dialog-target'));
          return;
        }

        const cancelOrAction = e.target.closest(
          '.pc-sd-alert-dialog-cancel, .pc-sd-alert-dialog-action, .pc-shadcn-alert-dialog-cancel, .pc-shadcn-alert-dialog-action'
        );
        if (cancelOrAction) {
          const overlay = cancelOrAction.closest('.pc-sd-alert-dialog-overlay, .pc-shadcn-alert-dialog-overlay');
          if (overlay) AlertDialog.close(overlay);
        }
      });

      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          $$('.pc-sd-alert-dialog-overlay[data-state="open"], .pc-shadcn-alert-dialog-overlay[data-state="open"]').forEach(d => AlertDialog.close(d));
        }
      });
    }
  };

  /* ==========================================================================
     4. ASPECT RATIO (Cardstock picture frame with photo corner mounts)
     ========================================================================== */
  const AspectRatio = {
    apply(el, ratio) {
      if (!el) return;
      const r = ratio || el.getAttribute('data-ratio') || '16/9';
      const [w, h] = r.split('/').map(Number);
      if (w && h) {
        el.style.aspectRatio = `${w} / ${h}`;
      }
    },
    init(context = document) {
      $$('.pc-sd-aspect-ratio, .pc-shadcn-aspect-ratio', context).forEach(el => {
        AspectRatio.apply(el);
      });
    }
  };

  /* ==========================================================================
     5. AVATAR (Circular layered paper silhouette with dual pastel rings)
     ========================================================================== */
  const Avatar = {
    init(context = document) {
      $$('.pc-sd-avatar-image, .pc-shadcn-avatar-image', context).forEach(img => {
        if (img._pcInit) return;
        img._pcInit = true;

        img.addEventListener('error', () => {
          img.style.display = 'none';
          const fallback = img.parentElement.querySelector('.pc-sd-avatar-fallback, .pc-shadcn-avatar-fallback');
          if (fallback) fallback.style.display = 'flex';
        });
      });
    }
  };

  /* ==========================================================================
     6. BADGE (Perforated stamp, scalloped seal, ribbon tag, origami fold)
     ========================================================================== */
  const Badge = {
    init(context = document) {
      document.addEventListener('click', (e) => {
        const dismissBtn = e.target.closest('[data-badge-dismiss]');
        if (dismissBtn) {
          const badge = dismissBtn.closest('.pc-sd-badge, .pc-shadcn-badge');
          if (badge) {
            badge.style.transition = 'all 0.18s ease';
            badge.style.opacity = '0';
            badge.style.transform = 'scale(0.8)';
            setTimeout(() => badge.remove(), 180);
          }
        }
      });
    }
  };

  /* ==========================================================================
     7. BREADCRUMB (Pencil-cut paper arrows connecting craft tags)
     ========================================================================== */
  const Breadcrumb = {
    init(context = document) {
      $$('.pc-sd-breadcrumb, .pc-shadcn-breadcrumb', context).forEach(bc => {
        if (bc._pcInit) return;
        bc._pcInit = true;

        bc.addEventListener('click', (e) => {
          const link = e.target.closest('.pc-sd-breadcrumb-link, .pc-shadcn-breadcrumb-link');
          if (link) {
            bc.dispatchEvent(new CustomEvent('breadcrumb-click', {
              bubbles: true,
              detail: { href: link.getAttribute('href'), text: link.textContent.trim() }
            }));
          }
        });
      });
    }
  };

  /* ==========================================================================
     8. BUTTON (Cardstock stack, pressed-in active state, scallop cut, washi)
     ========================================================================== */
  const Button = {
    init(context = document) {
      document.addEventListener('click', (e) => {
        const btn = e.target.closest('.pc-sd-btn, .pc-shadcn-button');
        if (btn && btn.getAttribute('data-toggle') === 'button') {
          btn.classList.toggle('is-active');
        }
      });
    }
  };

  /* ==========================================================================
     9. CALENDAR (Tear-off desk calendar with ring binder cuts & day seals)
     ========================================================================== */
  const Calendar = {
    stateMap: new WeakMap(),

    init(context = document) {
      $$('.pc-sd-calendar, .pc-shadcn-calendar', context).forEach(cal => {
        if (cal._pcInit) return;
        cal._pcInit = true;

        const now = new Date();
        const state = {
          currentYear: now.getFullYear(),
          currentMonth: now.getMonth(),
          selectedDate: now
        };
        Calendar.stateMap.set(cal, state);
        Calendar.render(cal);

        cal.addEventListener('click', (e) => {
          const prevBtn = e.target.closest('[data-calendar-prev]');
          const nextBtn = e.target.closest('[data-calendar-next]');
          const dayBtn = e.target.closest('.pc-sd-calendar-day, .pc-shadcn-calendar-day');

          const s = Calendar.stateMap.get(cal);
          if (!s) return;

          if (prevBtn) {
            s.currentMonth--;
            if (s.currentMonth < 0) {
              s.currentMonth = 11;
              s.currentYear--;
            }
            Calendar.render(cal);
          } else if (nextBtn) {
            s.currentMonth++;
            if (s.currentMonth > 11) {
              s.currentMonth = 0;
              s.currentYear++;
            }
            Calendar.render(cal);
          } else if (dayBtn && !dayBtn.classList.contains('is-disabled') && !dayBtn.classList.contains('is-other-month')) {
            const dateStr = dayBtn.getAttribute('data-date');
            if (dateStr) {
              s.selectedDate = new Date(dateStr);
              Calendar.render(cal);
              cal.dispatchEvent(new CustomEvent('calendar-select', {
                bubbles: true,
                detail: { date: s.selectedDate }
              }));
            }
          }
        });
      });
    },

    render(cal) {
      const s = Calendar.stateMap.get(cal);
      if (!s) return;

      const titleEl = cal.querySelector('.pc-sd-calendar-title, .pc-shadcn-calendar-title');
      const gridEl = cal.querySelector('.pc-sd-calendar-grid, .pc-shadcn-calendar-grid');
      if (!gridEl) return;

      const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
      ];
      if (titleEl) {
        titleEl.textContent = `${monthNames[s.currentMonth]} ${s.currentYear}`;
      }

      const weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
      gridEl.innerHTML = weekdays.map(d => `<div class="pc-sd-calendar-weekday">${d}</div>`).join('');

      const firstDay = new Date(s.currentYear, s.currentMonth, 1).getDay();
      const daysInMonth = new Date(s.currentYear, s.currentMonth + 1, 0).getDate();
      const prevMonthDays = new Date(s.currentYear, s.currentMonth, 0).getDate();

      for (let i = firstDay - 1; i >= 0; i--) {
        const d = prevMonthDays - i;
        gridEl.insertAdjacentHTML('beforeend', `<button type="button" class="pc-sd-calendar-day is-other-month" disabled>${d}</button>`);
      }

      const today = new Date();
      for (let d = 1; d <= daysInMonth; d++) {
        const thisDate = new Date(s.currentYear, s.currentMonth, d);
        const isToday = thisDate.toDateString() === today.toDateString();
        const isSelected = s.selectedDate && thisDate.toDateString() === s.selectedDate.toDateString();

        let cls = 'pc-sd-calendar-day';
        if (isToday) cls += ' is-today';
        if (isSelected) cls += ' is-selected';

        gridEl.insertAdjacentHTML('beforeend', `<button type="button" class="${cls}" data-date="${thisDate.toISOString()}">${d}</button>`);
      }

      hydrateIcons(cal);
    }
  };

  /* ==========================================================================
     10. CARD (Stacked multi-layer cardstock with subtle offset and shadow)
     ========================================================================== */
  const Card = {
    init(context = document) {
      $$('.pc-sd-card[data-collapsible="true"], .pc-shadcn-card[data-collapsible="true"]', context).forEach(card => {
        if (card._pcInit) return;
        card._pcInit = true;

        const header = $('.pc-sd-card-header, .pc-shadcn-card-header', card);
        const content = $('.pc-sd-card-content, .pc-shadcn-card-content', card);
        if (header && content) {
          header.style.cursor = 'pointer';
          header.addEventListener('click', () => {
            const isHidden = content.style.display === 'none';
            content.style.display = isHidden ? '' : 'none';
          });
        }
      });
    }
  };

  /* ==========================================================================
     11. CAROUSEL (Cardboard sliding slide deck with paper pagination dots)
     ========================================================================== */
  const Carousel = {
    init(context = document) {
      $$('.pc-sd-carousel, .pc-shadcn-carousel', context).forEach(car => {
        if (car._pcInit) return;
        car._pcInit = true;

        const track = $('.pc-sd-carousel-track, .pc-shadcn-carousel-track', car);
        const items = $$('.pc-sd-carousel-item, .pc-shadcn-carousel-item', car);
        const prevBtn = $('[data-carousel-prev]', car);
        const nextBtn = $('[data-carousel-next]', car);
        const dotsWrap = $('.pc-sd-carousel-dots, .pc-shadcn-carousel-dots', car);

        let currentIndex = 0;
        const total = items.length;

        function updateSlide() {
          if (!track) return;
          track.style.transform = `translateX(-${currentIndex * 100}%)`;
          if (dotsWrap) {
            const dots = $$('.pc-sd-carousel-dot, .pc-shadcn-carousel-dot', dotsWrap);
            dots.forEach((dot, idx) => {
              dot.classList.toggle('is-active', idx === currentIndex);
            });
          }
        }

        if (prevBtn) {
          prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + total) % total;
            updateSlide();
          });
        }

        if (nextBtn) {
          nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % total;
            updateSlide();
          });
        }

        if (dotsWrap) {
          dotsWrap.innerHTML = items.map((_, i) => `<button type="button" class="pc-sd-carousel-dot ${i === 0 ? 'is-active' : ''}" data-index="${i}"></button>`).join('');
          dotsWrap.addEventListener('click', (e) => {
            const dot = e.target.closest('.pc-sd-carousel-dot, .pc-shadcn-carousel-dot');
            if (dot) {
              currentIndex = parseInt(dot.getAttribute('data-index') || '0', 10);
              updateSlide();
            }
          });
        }

        if (car.getAttribute('data-autoplay') === 'true') {
          setInterval(() => {
            currentIndex = (currentIndex + 1) % total;
            updateSlide();
          }, 4500);
        }
      });
    }
  };

  /* ==========================================================================
     12. CHECKBOX (Origami corner fold with paper stamp checkmark)
     ========================================================================== */
  const Checkbox = {
    toggle(cb) {
      const isChecked = cb.getAttribute('data-state') === 'checked';
      const newState = isChecked ? 'unchecked' : 'checked';
      cb.setAttribute('data-state', newState);

      const input = cb.querySelector('input[type="checkbox"]');
      if (input) {
        input.checked = (newState === 'checked');
        input.dispatchEvent(new Event('change', { bubbles: true }));
      }

      cb.dispatchEvent(new CustomEvent('change', {
        bubbles: true,
        detail: { checked: newState === 'checked' }
      }));
    },
    init(context = document) {
      document.addEventListener('click', (e) => {
        const cb = e.target.closest('.pc-sd-checkbox, .pc-shadcn-checkbox');
        if (cb) {
          e.preventDefault();
          Checkbox.toggle(cb);
          return;
        }

        const wrapper = e.target.closest('.pc-sd-checkbox-wrapper, .pc-shadcn-checkbox-wrapper');
        if (wrapper && !e.target.closest('.pc-sd-checkbox, .pc-shadcn-checkbox')) {
          const innerCb = $('.pc-sd-checkbox, .pc-shadcn-checkbox', wrapper);
          if (innerCb) {
            e.preventDefault();
            Checkbox.toggle(innerCb);
          }
        }
      });

      document.addEventListener('keydown', (e) => {
        if (e.key === ' ' || e.key === 'Spacebar') {
          const focused = document.activeElement;
          if (focused && (focused.classList.contains('pc-sd-checkbox') || focused.classList.contains('pc-shadcn-checkbox'))) {
            e.preventDefault();
            Checkbox.toggle(focused);
          }
        }
      });
    }
  };

  /* ==========================================================================
     13. COLLAPSIBLE (Sliding matchbox paper drawer)
     ========================================================================== */
  const Collapsible = {
    init(context = document) {
      document.addEventListener('click', (e) => {
        const trigger = e.target.closest(
          '.pc-sd-collapsible-trigger, .pc-sd-collapsible-trigger-bar, .pc-shadcn-collapsible-trigger, .pc-shadcn-collapsible-trigger-bar'
        );
        if (trigger) {
          const parent = trigger.closest('.pc-sd-collapsible, .pc-shadcn-collapsible');
          if (parent) {
            const isOpen = parent.getAttribute('data-state') === 'open';
            parent.setAttribute('data-state', isOpen ? 'closed' : 'open');
          }
        }
      });
    }
  };

  /* ==========================================================================
     14. COMBOBOX (Deckle search input with fan-out bookmark suggestions)
     ========================================================================== */
  const Combobox = {
    init(context = document) {
      document.addEventListener('click', (e) => {
        const trigger = e.target.closest('.pc-sd-combobox-trigger, .pc-shadcn-combobox-trigger');
        const allCombos = $$('.pc-sd-combobox, .pc-shadcn-combobox');

        if (trigger) {
          const combo = trigger.closest('.pc-sd-combobox, .pc-shadcn-combobox');
          const isOpen = combo.getAttribute('data-state') === 'open';
          allCombos.forEach(c => c.setAttribute('data-state', 'closed'));
          if (!isOpen) {
            combo.setAttribute('data-state', 'open');
            const input = $('.pc-sd-combobox-input, .pc-shadcn-combobox-input', combo);
            if (input) input.focus();
          }
          return;
        }

        const item = e.target.closest('.pc-sd-combobox-item, .pc-shadcn-combobox-item');
        if (item) {
          const combo = item.closest('.pc-sd-combobox, .pc-shadcn-combobox');
          const label = $('.pc-sd-combobox-label, .pc-shadcn-combobox-label', combo) ||
                        $('.pc-sd-combobox-trigger span, .pc-shadcn-combobox-trigger span', combo);
          if (label) label.textContent = item.textContent.trim();
          combo.setAttribute('data-state', 'closed');
          combo.setAttribute('data-value', item.getAttribute('data-value') || item.textContent.trim());
          combo.dispatchEvent(new CustomEvent('combobox-select', {
            bubbles: true,
            detail: { value: combo.getAttribute('data-value') }
          }));
          return;
        }

        if (!e.target.closest('.pc-sd-combobox, .pc-shadcn-combobox')) {
          allCombos.forEach(c => c.setAttribute('data-state', 'closed'));
        }
      });

      document.addEventListener('input', (e) => {
        const input = e.target.closest('.pc-sd-combobox-input, .pc-shadcn-combobox-input');
        if (!input) return;
        const combo = input.closest('.pc-sd-combobox, .pc-shadcn-combobox');
        const term = input.value.toLowerCase();
        const items = $$('.pc-sd-combobox-item, .pc-shadcn-combobox-item', combo);
        items.forEach(it => {
          const match = it.textContent.toLowerCase().includes(term);
          it.style.display = match ? 'flex' : 'none';
        });
      });
    }
  };

  /* ==========================================================================
     15. COMMAND (Carved command palette with tabs & shortcut badges)
     ========================================================================== */
  const Command = {
    open(targetId) {
      const el = typeof targetId === 'string' ? $(targetId) : targetId;
      if (el) {
        el.setAttribute('data-state', 'open');
        const input = $('.pc-sd-command-input, .pc-shadcn-command-input', el);
        if (input) input.focus();
      }
    },
    close(targetId) {
      const el = typeof targetId === 'string' ? $(targetId) : targetId;
      if (el) el.setAttribute('data-state', 'closed');
    },
    init(context = document) {
      document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
          const dialog = $('.pc-sd-command-dialog, .pc-shadcn-command-dialog');
          if (dialog) {
            e.preventDefault();
            const isOpen = dialog.getAttribute('data-state') === 'open';
            if (isOpen) Command.close(dialog);
            else Command.open(dialog);
          }
        }
        if (e.key === 'Escape') {
          $$('.pc-sd-command-dialog[data-state="open"], .pc-shadcn-command-dialog[data-state="open"]').forEach(d => Command.close(d));
        }
      });

      document.addEventListener('input', (e) => {
        const input = e.target.closest('.pc-sd-command-input, .pc-shadcn-command-input');
        if (!input) return;
        const cmd = input.closest('.pc-sd-command, .pc-shadcn-command');
        const term = input.value.toLowerCase();
        $$('.pc-sd-command-item, .pc-shadcn-command-item', cmd).forEach(it => {
          const text = it.textContent.toLowerCase();
          it.style.display = text.includes(term) ? 'flex' : 'none';
        });
      });

      document.addEventListener('click', (e) => {
        if (e.target.classList.contains('pc-sd-command-dialog') || e.target.classList.contains('pc-shadcn-command-dialog')) {
          Command.close(e.target);
        }
      });
    }
  };

  /* ==========================================================================
     16. CONTEXT MENU (Floating craft card menu with knife-cut dividers)
     ========================================================================== */
  const ContextMenu = {
    init(context = document) {
      document.addEventListener('contextmenu', (e) => {
        const target = e.target.closest('[data-context-menu]');
        if (target) {
          e.preventDefault();
          const menuId = target.getAttribute('data-context-menu');
          const menu = $(menuId);
          if (menu) {
            menu.style.left = `${e.clientX}px`;
            menu.style.top = `${e.clientY}px`;
            menu.setAttribute('data-state', 'open');
          }
        }
      });

      document.addEventListener('click', (e) => {
        if (!e.target.closest('.pc-sd-context-menu, .pc-shadcn-context-menu')) {
          $$('.pc-sd-context-menu[data-state="open"], .pc-shadcn-context-menu[data-state="open"]').forEach(m => m.setAttribute('data-state', 'closed'));
        }
      });
    }
  };

  /* ==========================================================================
     17. DIALOG (Layered paper shadowbox modal overlay)
     ========================================================================== */
  const Dialog = {
    open(targetId) {
      const el = typeof targetId === 'string' ? $(targetId) : targetId;
      if (el) {
        el.setAttribute('data-state', 'open');
        document.body.style.overflow = 'hidden';
      }
    },
    close(targetId) {
      const el = typeof targetId === 'string' ? $(targetId) : targetId;
      if (el) {
        el.setAttribute('data-state', 'closed');
        document.body.style.overflow = '';
      }
    },
    init(context = document) {
      document.addEventListener('click', (e) => {
        const trigger = e.target.closest('[data-dialog-target]');
        if (trigger) {
          e.preventDefault();
          Dialog.open(trigger.getAttribute('data-dialog-target'));
          return;
        }

        const closeBtn = e.target.closest('.pc-sd-dialog-close, .pc-shadcn-dialog-close');
        if (closeBtn) {
          const overlay = closeBtn.closest('.pc-sd-dialog-overlay, .pc-shadcn-dialog-overlay');
          if (overlay) Dialog.close(overlay);
          return;
        }

        if (e.target.classList.contains('pc-sd-dialog-overlay') || e.target.classList.contains('pc-shadcn-dialog-overlay')) {
          Dialog.close(e.target);
        }
      });

      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          $$('.pc-sd-dialog-overlay[data-state="open"], .pc-shadcn-dialog-overlay[data-state="open"]').forEach(d => Dialog.close(d));
        }
      });
    }
  };

  /* ==========================================================================
     18. DRAWER (Bottom/side sliding craft tray with pull tab)
     ========================================================================== */
  const Drawer = {
    open(targetId) {
      const el = typeof targetId === 'string' ? $(targetId) : targetId;
      if (el) {
        el.setAttribute('data-state', 'open');
        const overlay = el.previousElementSibling?.classList.contains('pc-sd-drawer-overlay') ? el.previousElementSibling : $('.pc-sd-drawer-overlay, .pc-shadcn-drawer-overlay');
        if (overlay) overlay.setAttribute('data-state', 'open');
      }
    },
    close(targetId) {
      const el = typeof targetId === 'string' ? $(targetId) : targetId;
      if (el) {
        el.setAttribute('data-state', 'closed');
        $$('.pc-sd-drawer-overlay[data-state="open"], .pc-shadcn-drawer-overlay[data-state="open"]').forEach(o => o.setAttribute('data-state', 'closed'));
      }
    },
    init(context = document) {
      document.addEventListener('click', (e) => {
        const trigger = e.target.closest('[data-drawer-target]');
        if (trigger) {
          e.preventDefault();
          Drawer.open(trigger.getAttribute('data-drawer-target'));
          return;
        }

        if (e.target.classList.contains('pc-sd-drawer-overlay') || e.target.classList.contains('pc-shadcn-drawer-overlay')) {
          $$('.pc-sd-drawer-content[data-state="open"], .pc-shadcn-drawer-content[data-state="open"]').forEach(d => Drawer.close(d));
        }
      });
    }
  };

  /* ==========================================================================
     19. DROPDOWN MENU (Fanning bookmark strip menu with paper hover state)
     ========================================================================== */
  const DropdownMenu = {
    init(context = document) {
      document.addEventListener('click', (e) => {
        const trigger = e.target.closest('.pc-sd-dropdown-menu-trigger, .pc-shadcn-dropdown-menu-trigger');
        const allMenus = $$('.pc-sd-dropdown-menu, .pc-shadcn-dropdown-menu');

        if (trigger) {
          const menu = trigger.closest('.pc-sd-dropdown-menu, .pc-shadcn-dropdown-menu');
          const isOpen = menu.getAttribute('data-state') === 'open';
          allMenus.forEach(m => m.setAttribute('data-state', 'closed'));
          if (!isOpen) menu.setAttribute('data-state', 'open');
          return;
        }

        const item = e.target.closest('.pc-sd-dropdown-menu-item, .pc-shadcn-dropdown-menu-item');
        if (item) {
          const menu = item.closest('.pc-sd-dropdown-menu, .pc-shadcn-dropdown-menu');
          if (menu) menu.setAttribute('data-state', 'closed');
          return;
        }

        if (!e.target.closest('.pc-sd-dropdown-menu, .pc-shadcn-dropdown-menu')) {
          allMenus.forEach(m => m.setAttribute('data-state', 'closed'));
        }
      });
    }
  };

  /* ==========================================================================
     20. FORM (Carved input fields with craft labels & error paper tags)
     ========================================================================== */
  const Form = {
    validate(formEl) {
      if (!formEl) return true;
      let valid = true;
      $$('input[required], textarea[required], select[required]', formEl).forEach(field => {
        const item = field.closest('.pc-sd-form-item, .pc-shadcn-form-item');
        let msg = item ? item.querySelector('.pc-sd-form-message, .pc-shadcn-form-message') : null;
        if (!field.value.trim()) {
          valid = false;
          if (!msg && item) {
            msg = document.createElement('div');
            msg.className = 'pc-sd-form-message';
            msg.textContent = 'This paper field is required';
            item.appendChild(msg);
          } else if (msg) {
            msg.style.display = 'block';
          }
        } else if (msg) {
          msg.style.display = 'none';
        }
      });
      return valid;
    },
    init(context = document) {
      $$('.pc-sd-form, .pc-shadcn-form', context).forEach(f => {
        if (f._pcInit) return;
        f._pcInit = true;

        f.addEventListener('submit', (e) => {
          if (!Form.validate(f)) {
            e.preventDefault();
          }
        });
      });
    }
  };

  /* ==========================================================================
     21. HOVER CARD (Peeking craft memo slip that lifts on hover)
     ========================================================================== */
  const HoverCard = {
    init(context = document) {
      $$('.pc-sd-hover-card, .pc-shadcn-hover-card', context).forEach(card => {
        if (card._pcInit) return;
        card._pcInit = true;

        let timer;
        card.addEventListener('mouseenter', () => {
          clearTimeout(timer);
          timer = setTimeout(() => card.setAttribute('data-state', 'open'), 120);
        });
        card.addEventListener('mouseleave', () => {
          clearTimeout(timer);
          timer = setTimeout(() => card.setAttribute('data-state', 'closed'), 180);
        });
      });
    }
  };

  /* ==========================================================================
     22. INPUT (Carved inset well with fine craft knife bevels)
     ========================================================================== */
  const Input = {
    init(context = document) {
      document.addEventListener('click', (e) => {
        const togglePassword = e.target.closest('[data-password-toggle]');
        if (togglePassword) {
          const wrapper = togglePassword.closest('.pc-sd-input-wrapper, .pc-shadcn-input-wrapper') || togglePassword.parentElement;
          const input = wrapper ? wrapper.querySelector('input') : null;
          if (input) {
            const isPassword = input.type === 'password';
            input.type = isPassword ? 'text' : 'password';
            togglePassword.setAttribute('data-icon', isPassword ? 'eye-off' : 'eye');
            hydrateIcons(togglePassword);
          }
        }
      });
    }
  };

  /* ==========================================================================
     23. INPUT OTP (3D Layered Paper-Cut Background Plate Digit Boxes)
     ========================================================================== */
  const OTP_BG_SHAPES = {
    'postage-stamp': `
      <svg viewBox="0 0 52 58" class="pc-otp-bg-svg" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;overflow:visible;">
        <defs>
          <filter id="otp-sh-stamp" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2.5" stdDeviation="1.5" flood-color="#4A3A2A" flood-opacity="0.16"/>
          </filter>
        </defs>
        <path d="M 6 4 Q 8 6 10 4 Q 12 6 14 4 Q 16 6 18 4 Q 20 6 22 4 Q 24 6 26 4 Q 28 6 30 4 Q 32 6 34 4 Q 36 6 38 4 Q 40 6 42 4 Q 44 6 46 4 A 2 2 0 0 1 48 6 Q 46 8 48 10 Q 46 12 48 14 Q 46 16 48 18 Q 46 20 48 22 Q 46 24 48 26 Q 46 28 48 30 Q 46 32 48 34 Q 46 36 48 38 Q 46 40 48 42 Q 46 44 48 46 Q 46 48 48 50 Q 46 52 48 54 A 2 2 0 0 1 46 56 Q 44 54 42 56 Q 40 54 38 56 Q 36 54 34 56 Q 32 54 30 56 Q 28 54 26 56 Q 24 54 22 56 Q 20 54 18 56 Q 16 54 14 56 Q 12 54 10 56 Q 8 54 6 56 A 2 2 0 0 1 4 54 Q 6 52 4 50 Q 6 48 4 46 Q 6 44 4 42 Q 6 40 4 38 Q 6 36 4 34 Q 6 32 4 30 Q 6 28 4 26 Q 6 24 4 22 Q 6 20 4 18 Q 6 16 4 14 Q 6 12 4 10 Q 6 8 4 6 A 2 2 0 0 1 6 4 Z" fill="#FFFDF9" stroke="#E3D7C5" stroke-width="1.2" filter="url(#otp-sh-stamp)"/>
        <rect x="9" y="9" width="34" height="40" rx="4" fill="#FAF6ED" stroke="#EFE6D6" stroke-width="1"/>
      </svg>
    `,
    'wax-seal': `
      <svg viewBox="0 0 52 58" class="pc-otp-bg-svg" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;overflow:visible;">
        <defs>
          <filter id="otp-sh-wax" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="3" stdDeviation="2" flood-color="#4A3A2A" flood-opacity="0.18"/>
          </filter>
        </defs>
        <path d="M 26 5 C 34 4 42 8 46 15 C 49 20 48 27 49 33 C 49 41 45 49 37 52 C 30 54 21 53 14 49 C 8 45 5 37 5 30 C 4 21 8 13 15 8 C 19 5 22 5 26 5 Z" fill="#FCECE6" stroke="#F5C4B3" stroke-width="1.5" filter="url(#otp-sh-wax)"/>
        <circle cx="26" cy="29" r="19" fill="#FFF8F5" stroke="#F2B7A2" stroke-width="1.2"/>
        <circle cx="26" cy="29" r="16.5" fill="none" stroke="#E89B80" stroke-width="0.8" stroke-dasharray="2 2"/>
      </svg>
    `,
    'hexagon': `
      <svg viewBox="0 0 52 58" class="pc-otp-bg-svg" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;overflow:visible;">
        <defs>
          <filter id="otp-sh-hex" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2.5" stdDeviation="1.8" flood-color="#4A3A2A" flood-opacity="0.15"/>
          </filter>
        </defs>
        <polygon points="26,4 47,15 47,43 26,54 5,43 5,15" fill="#FAF7F0" stroke="#DED3C1" stroke-width="1.5" filter="url(#otp-sh-hex)"/>
        <polygon points="26,9 43,18 43,40 26,49 9,40 9,18" fill="#FFFDF9" stroke="#EFE7DA" stroke-width="1"/>
      </svg>
    `,
    'deckle': `
      <svg viewBox="0 0 52 58" class="pc-otp-bg-svg" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;overflow:visible;">
        <defs>
          <filter id="otp-sh-deckle" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2.5" stdDeviation="1.8" flood-color="#4A3A2A" flood-opacity="0.16"/>
          </filter>
        </defs>
        <path d="M 6 5 Q 16 6 26 5 Q 36 4 46 6 Q 47 18 46 29 Q 48 41 46 53 Q 36 52 26 54 Q 15 53 6 53 Q 5 41 6 29 Q 4 17 6 5 Z" fill="#FFFDF9" stroke="#DFD4C1" stroke-width="1.3" filter="url(#otp-sh-deckle)"/>
        <path d="M 9 9 Q 18 10 26 9 Q 34 8 43 10 Q 44 20 43 29 Q 44 39 43 49 Q 34 48 26 50 Q 17 49 9 49 Q 8 39 9 29 Q 8 19 9 9 Z" fill="#FAF6ED" stroke="#EFE6D6" stroke-width="0.8"/>
      </svg>
    `,
    'ticket': `
      <svg viewBox="0 0 52 58" class="pc-otp-bg-svg" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;overflow:visible;">
        <defs>
          <filter id="otp-sh-ticket" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2.5" stdDeviation="1.8" flood-color="#4A3A2A" flood-opacity="0.15"/>
          </filter>
        </defs>
        <path d="M 7 4 H 45 A 3 3 0 0 1 48 7 V 22 A 7 7 0 0 0 48 36 V 51 A 3 3 0 0 1 45 54 H 7 A 3 3 0 0 1 4 51 V 36 A 7 7 0 0 0 4 22 V 7 A 3 3 0 0 1 7 4 Z" fill="#FFFDF9" stroke="#DDD2BF" stroke-width="1.4" filter="url(#otp-sh-ticket)"/>
        <path d="M 9 7 H 43 A 2 2 0 0 1 45 9 V 20 A 9 9 0 0 0 45 38 V 49 A 2 2 0 0 1 43 51 H 9 A 2 2 0 0 1 7 49 V 38 A 9 9 0 0 0 7 20 V 9 A 2 2 0 0 1 9 7 Z" fill="#FAF6ED" stroke="#CCBEA7" stroke-width="0.8" stroke-dasharray="2.5 2"/>
      </svg>
    `,
    'origami': `
      <svg viewBox="0 0 52 58" class="pc-otp-bg-svg" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;overflow:visible;">
        <defs>
          <filter id="otp-sh-origami" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2.5" stdDeviation="1.8" flood-color="#4A3A2A" flood-opacity="0.16"/>
          </filter>
        </defs>
        <path d="M 6 4 H 36 L 47 15 V 52 A 3 3 0 0 1 44 55 H 6 A 3 3 0 0 1 3 52 V 7 A 3 3 0 0 1 6 4 Z" fill="#FFFDF9" stroke="#DCD0BD" stroke-width="1.4" filter="url(#otp-sh-origami)"/>
        <polygon points="36,4 36,15 47,15" fill="#E8DEC9" stroke="#C9BBA5" stroke-width="1"/>
        <rect x="7" y="18" width="37" height="33" rx="3" fill="#FAF6ED" stroke="#EFE6D6" stroke-width="0.8"/>
      </svg>
    `
  };

  const InputOTP = {
    currentShape: 'postage-stamp',

    setShape(otpWrapper, shapeKey) {
      if (!OTP_BG_SHAPES[shapeKey]) return;
      this.currentShape = shapeKey;

      // Update buttons
      $$('.pc-sd-otp-shape-btn', otpWrapper).forEach(btn => {
        btn.classList.toggle('is-active', btn.dataset.shape === shapeKey);
      });

      // Update slot background SVGs
      $$('.pc-sd-input-otp-slot-wrap', otpWrapper).forEach(wrap => {
        wrap.setAttribute('data-shape', shapeKey);
        const bgLayer = wrap.querySelector('.pc-sd-otp-bg-svg-layer');
        if (bgLayer) {
          bgLayer.innerHTML = OTP_BG_SHAPES[shapeKey];
        }
      });
    },

    init(context = document) {
      $$('.pc-sd-otp-wrapper, .pc-sd-input-otp, .pc-shadcn-input-otp', context).forEach(otpEl => {
        if (otpEl._pcInit) return;
        otpEl._pcInit = true;

        const wrapper = otpEl.closest('.pc-sd-otp-wrapper') || otpEl;

        // Shape switcher button events
        $$('.pc-sd-otp-shape-btn', wrapper).forEach(btn => {
          btn.addEventListener('click', () => {
            this.setShape(wrapper, btn.dataset.shape);
            if (typeof window.showPaperToast === 'function') {
              window.showPaperToast(`OTP 배경이 [${btn.textContent}] 스타일로 변경되었습니다.`, 'mint');
            }
          });
        });

        // Initialize background SVGs if slots have layers
        $$('.pc-sd-input-otp-slot-wrap', wrapper).forEach(wrap => {
          let bgLayer = wrap.querySelector('.pc-sd-otp-bg-svg-layer');
          if (!bgLayer) {
            bgLayer = document.createElement('div');
            bgLayer.className = 'pc-sd-otp-bg-svg-layer';
            wrap.prepend(bgLayer);
          }
          const initialShape = wrap.getAttribute('data-shape') || this.currentShape;
          bgLayer.innerHTML = OTP_BG_SHAPES[initialShape] || OTP_BG_SHAPES['postage-stamp'];
        });

        // Inputs logic
        const inputs = $$('.pc-sd-input-otp-input', wrapper);
        inputs.forEach((input, idx) => {
          const wrap = input.closest('.pc-sd-input-otp-slot-wrap');

          input.addEventListener('focus', () => {
            wrap?.classList.add('is-focused');
          });

          input.addEventListener('blur', () => {
            wrap?.classList.remove('is-focused');
          });

          input.addEventListener('input', (e) => {
            const val = input.value.replace(/[^0-9a-zA-Z]/g, '');
            input.value = val ? val[val.length - 1] : '';
            wrap?.classList.toggle('is-filled', input.value.length > 0);

            if (input.value && idx < inputs.length - 1) {
              inputs[idx + 1].focus();
              inputs[idx + 1].select();
            }

            // Check if all filled
            const fullCode = inputs.map(i => i.value).join('');
            if (fullCode.length === inputs.length) {
              if (typeof window.showPaperToast === 'function') {
                window.showPaperToast(`6자리 OTP 인증코드 [${fullCode}] 입력 완료!`, 'mint');
              }
            }
          });

          input.addEventListener('keydown', (e) => {
            if (e.key === 'Backspace' && !input.value && idx > 0) {
              inputs[idx - 1].focus();
              inputs[idx - 1].value = '';
              inputs[idx - 1].closest('.pc-sd-input-otp-slot-wrap')?.classList.remove('is-filled');
              e.preventDefault();
            } else if (e.key === 'ArrowLeft' && idx > 0) {
              inputs[idx - 1].focus();
              e.preventDefault();
            } else if (e.key === 'ArrowRight' && idx < inputs.length - 1) {
              inputs[idx + 1].focus();
              e.preventDefault();
            }
          });

          input.addEventListener('paste', (e) => {
            e.preventDefault();
            const text = (e.clipboardData || window.clipboardData).getData('text').replace(/[^0-9a-zA-Z]/g, '').trim();
            for (let i = 0; i < text.length && (idx + i) < inputs.length; i++) {
              inputs[idx + i].value = text[i];
              inputs[idx + i].closest('.pc-sd-input-otp-slot-wrap')?.classList.add('is-filled');
            }
            const nextIdx = Math.min(idx + text.length, inputs.length - 1);
            inputs[nextIdx].focus();
          });
        });
      });
    }
  };

  /* ==========================================================================
     24. LABEL (Craft ribbon label with stitched hairline border)
     ========================================================================== */
  const Label = {
    init(context = document) {
      document.addEventListener('click', (e) => {
        const label = e.target.closest('.pc-sd-label, .pc-shadcn-label');
        if (label) {
          const forId = label.getAttribute('for');
          if (forId) {
            const target = document.getElementById(forId);
            if (target) target.focus();
          }
        }
      });
    }
  };

  /* ==========================================================================
     25. MENUBAR (Stationery desktop menu bar with foldout sheets)
     ========================================================================== */
  const Menubar = {
    init(context = document) {
      $$('.pc-sd-menubar, .pc-shadcn-menubar', context).forEach(mb => {
        if (mb._pcInit) return;
        mb._pcInit = true;

        let activeMenu = null;

        mb.addEventListener('click', (e) => {
          const trigger = e.target.closest('.pc-sd-menubar-trigger, .pc-shadcn-menubar-trigger');
          if (!trigger) return;

          const menu = trigger.closest('.pc-sd-menubar-menu, .pc-shadcn-menubar-menu');
          if (!menu) return;

          const isOpen = menu.getAttribute('data-state') === 'open';
          $$('.pc-sd-menubar-menu, .pc-shadcn-menubar-menu', mb).forEach(m => m.setAttribute('data-state', 'closed'));

          if (!isOpen) {
            menu.setAttribute('data-state', 'open');
            activeMenu = menu;
          } else {
            activeMenu = null;
          }
        });

        mb.addEventListener('mouseenter', (e) => {
          const trigger = e.target.closest('.pc-sd-menubar-trigger, .pc-shadcn-menubar-trigger');
          if (trigger && activeMenu) {
            const menu = trigger.closest('.pc-sd-menubar-menu, .pc-shadcn-menubar-menu');
            if (menu && menu !== activeMenu) {
              $$('.pc-sd-menubar-menu, .pc-shadcn-menubar-menu', mb).forEach(m => m.setAttribute('data-state', 'closed'));
              menu.setAttribute('data-state', 'open');
              activeMenu = menu;
            }
          }
        }, true);
      });

      document.addEventListener('click', (e) => {
        if (!e.target.closest('.pc-sd-menubar, .pc-shadcn-menubar')) {
          $$('.pc-sd-menubar-menu[data-state="open"], .pc-shadcn-menubar-menu[data-state="open"]').forEach(m => m.setAttribute('data-state', 'closed'));
        }
      });
    }
  };

  /* ==========================================================================
     26. NAVIGATION MENU (Tabs with sliding pastel underlay indicator)
     ========================================================================== */
  const NavMenu = {
    updateIndicator(nav, trigger) {
      let indicator = nav.querySelector('.pc-sd-navigation-menu-indicator, .pc-sd-nav-menu-indicator');
      if (!indicator) {
        indicator = document.createElement('div');
        indicator.className = 'pc-sd-navigation-menu-indicator';
        const list = nav.querySelector('.pc-sd-navigation-menu-list, .pc-sd-nav-menu-list');
        if (list) list.appendChild(indicator);
      }
      if (trigger && indicator) {
        indicator.style.left = `${trigger.offsetLeft}px`;
        indicator.style.width = `${trigger.offsetWidth}px`;
      }
    },
    init(context = document) {
      $$('.pc-sd-navigation-menu, .pc-sd-nav-menu, .pc-shadcn-navigation-menu', context).forEach(nav => {
        if (nav._pcInit) return;
        nav._pcInit = true;

        const active = nav.querySelector('.pc-sd-navigation-menu-trigger.is-active, .pc-sd-nav-menu-trigger.is-active');
        if (active) NavMenu.updateIndicator(nav, active);

        nav.addEventListener('click', (e) => {
          const trigger = e.target.closest('.pc-sd-navigation-menu-trigger, .pc-sd-nav-menu-trigger');
          if (!trigger) return;

          $$('.pc-sd-navigation-menu-trigger, .pc-sd-nav-menu-trigger', nav).forEach(t => t.classList.remove('is-active'));
          trigger.classList.add('is-active');
          NavMenu.updateIndicator(nav, trigger);
        });
      });
    }
  };

  /* ==========================================================================
     27. PAGINATION (Perforated ticket stub page numbers with active wax seal)
     ========================================================================== */
  const Pagination = {
    init(context = document) {
      $$('.pc-sd-pagination, .pc-shadcn-pagination', context).forEach(pag => {
        if (pag._pcInit) return;
        pag._pcInit = true;

        pag.addEventListener('click', (e) => {
          const item = e.target.closest('.pc-sd-pagination-item:not(.is-nav), .pc-shadcn-pagination-item:not(.is-nav)');
          if (!item) return;

          $$('.pc-sd-pagination-item, .pc-shadcn-pagination-item', pag).forEach(it => it.classList.remove('is-active'));
          item.classList.add('is-active');

          pag.dispatchEvent(new CustomEvent('pagination-change', {
            bubbles: true,
            detail: { page: item.textContent.trim() }
          }));
        });
      });
    }
  };

  /* ==========================================================================
     28. POPOVER (Pop-up book flap with triangular paper arrow)
     ========================================================================== */
  const Popover = {
    init(context = document) {
      document.addEventListener('click', (e) => {
        const trigger = e.target.closest('.pc-sd-popover-trigger, .pc-shadcn-popover-trigger');
        const allPopovers = $$('.pc-sd-popover, .pc-shadcn-popover');

        if (trigger) {
          const pop = trigger.closest('.pc-sd-popover, .pc-shadcn-popover');
          const isOpen = pop.getAttribute('data-state') === 'open';
          allPopovers.forEach(p => p.setAttribute('data-state', 'closed'));
          if (!isOpen) pop.setAttribute('data-state', 'open');
          return;
        }

        if (!e.target.closest('.pc-sd-popover, .pc-shadcn-popover')) {
          allPopovers.forEach(p => p.setAttribute('data-state', 'closed'));
        }
      });
    }
  };

  /* ==========================================================================
     29. PROGRESS (Layered pastel paper fill bar moving along an inset track)
     ========================================================================== */
  const Progress = {
    setValue(el, val) {
      const clamped = Math.max(0, Math.min(100, val));
      const ind = el.querySelector('.pc-sd-progress-indicator, .pc-shadcn-progress-indicator');
      if (ind) ind.style.width = `${clamped}%`;
      el.setAttribute('data-value', clamped);
    },
    init(context = document) {
      $$('.pc-sd-progress, .pc-shadcn-progress', context).forEach(prog => {
        const val = prog.getAttribute('data-value');
        if (val !== null) Progress.setValue(prog, parseFloat(val));
      });
    }
  };

  /* ==========================================================================
     30. RADIO GROUP (Concentric paper target discs with pastel dot center)
     ========================================================================== */
  const RadioGroup = {
    select(item) {
      const group = item.closest('.pc-sd-radio-group, .pc-shadcn-radio-group');
      if (!group) return;

      $$('.pc-sd-radio-item, .pc-shadcn-radio-item', group).forEach(it => it.setAttribute('data-state', 'unchecked'));
      item.setAttribute('data-state', 'checked');

      const val = item.getAttribute('data-value') || '';
      group.setAttribute('data-value', val);

      group.dispatchEvent(new CustomEvent('change', {
        bubbles: true,
        detail: { value: val }
      }));
    },
    init(context = document) {
      document.addEventListener('click', (e) => {
        const item = e.target.closest('.pc-sd-radio-item, .pc-shadcn-radio-item');
        if (item) RadioGroup.select(item);
      });
    }
  };

  /* ==========================================================================
     31. RESIZABLE (Paper fold crease splitter with grip dots)
     ========================================================================== */
  const Resizable = {
    init(context = document) {
      $$('.pc-sd-resizable-group, .pc-shadcn-resizable-group, .pc-sd-resizable-panel-group', context).forEach(group => {
        if (group._pcInit) return;
        group._pcInit = true;

        const handle = $('.pc-sd-resizable-handle, .pc-shadcn-resizable-handle', group);
        const panels = $$('.pc-sd-resizable-panel, .pc-shadcn-resizable-panel', group);
        if (!handle || panels.length < 2) return;

        let isDragging = false;

        handle.addEventListener('mousedown', () => { isDragging = true; });
        document.addEventListener('mouseup', () => { isDragging = false; });
        document.addEventListener('mousemove', (e) => {
          if (!isDragging) return;
          const rect = group.getBoundingClientRect();
          const offsetX = e.clientX - rect.left;
          const pct = Math.max(15, Math.min(85, (offsetX / rect.width) * 100));
          panels[0].style.flex = `0 0 ${pct}%`;
          panels[1].style.flex = `1 1 ${100 - pct}%`;
        });
      });
    }
  };

  /* ==========================================================================
     32. SCROLL AREA (Parchment scroll well with custom paper thumb bar)
     ========================================================================== */
  const ScrollArea = {
    init(context = document) {
      $$('.pc-sd-scroll-area, .pc-shadcn-scroll-area', context).forEach(sa => {
        if (sa._pcInit) return;
        sa._pcInit = true;

        const viewport = $('.pc-sd-scroll-viewport, .pc-shadcn-scroll-viewport', sa);
        if (viewport) {
          viewport.addEventListener('scroll', () => {
            sa.dispatchEvent(new CustomEvent('scroll-change', {
              bubbles: true,
              detail: { scrollTop: viewport.scrollTop, scrollHeight: viewport.scrollHeight }
            }));
          });
        }
      });
    }
  };

  /* ==========================================================================
     33. SELECT (Bookmark trigger with pop-out paper option tray)
     ========================================================================== */
  const Select = {
    init(context = document) {
      document.addEventListener('click', (e) => {
        const trigger = e.target.closest('.pc-sd-select-trigger, .pc-shadcn-select-trigger');
        const allSelects = $$('.pc-sd-select, .pc-shadcn-select');

        if (trigger) {
          const sel = trigger.closest('.pc-sd-select, .pc-shadcn-select');
          const isOpen = sel.getAttribute('data-state') === 'open';
          allSelects.forEach(s => s.setAttribute('data-state', 'closed'));
          if (!isOpen) sel.setAttribute('data-state', 'open');
          return;
        }

        const item = e.target.closest('.pc-sd-select-item, .pc-shadcn-select-item');
        if (item) {
          const sel = item.closest('.pc-sd-select, .pc-shadcn-select');
          const valEl = $('.pc-sd-select-value, .pc-shadcn-select-value', sel);
          if (valEl) valEl.textContent = item.textContent.trim();
          sel.setAttribute('data-state', 'closed');
          sel.setAttribute('data-value', item.getAttribute('data-value') || item.textContent.trim());
          sel.dispatchEvent(new CustomEvent('change', {
            bubbles: true,
            detail: { value: sel.getAttribute('data-value') }
          }));
          return;
        }

        if (!e.target.closest('.pc-sd-select, .pc-shadcn-select')) {
          allSelects.forEach(s => s.setAttribute('data-state', 'closed'));
        }
      });
    }
  };

  /* ==========================================================================
     34. SEPARATOR (Perforated dashed cutline, deckle tear line, washi tape)
     ========================================================================== */
  const Separator = {
    init(context = document) {
      $$('.pc-sd-separator, .pc-shadcn-separator', context).forEach(sep => {
        const orient = sep.getAttribute('data-orientation') || 'horizontal';
        sep.setAttribute('aria-orientation', orient);
      });
    }
  };

  /* ==========================================================================
     35. SHEET (Slide-over side craft panel with stitched edge)
     ========================================================================== */
  const Sheet = {
    open(targetId) {
      const el = typeof targetId === 'string' ? $(targetId) : targetId;
      if (el) {
        el.setAttribute('data-state', 'open');
        const overlay = el.previousElementSibling?.classList.contains('pc-sd-sheet-overlay')
          ? el.previousElementSibling
          : $('.pc-sd-sheet-overlay, .pc-shadcn-sheet-overlay');
        if (overlay) overlay.setAttribute('data-state', 'open');
        document.body.style.overflow = 'hidden';
      }
    },
    close(targetId) {
      const el = typeof targetId === 'string' ? $(targetId) : targetId;
      if (el) {
        el.setAttribute('data-state', 'closed');
        $$('.pc-sd-sheet-overlay[data-state="open"], .pc-shadcn-sheet-overlay[data-state="open"]').forEach(o => o.setAttribute('data-state', 'closed'));
        document.body.style.overflow = '';
      }
    },
    init(context = document) {
      document.addEventListener('click', (e) => {
        const trigger = e.target.closest('[data-sheet-target]');
        if (trigger) {
          e.preventDefault();
          Sheet.open(trigger.getAttribute('data-sheet-target'));
          return;
        }

        const closeBtn = e.target.closest('.pc-sd-sheet-close, .pc-shadcn-sheet-close');
        if (closeBtn) {
          const content = closeBtn.closest('.pc-sd-sheet-content, .pc-shadcn-sheet-content');
          if (content) Sheet.close(content);
          return;
        }

        if (e.target.classList.contains('pc-sd-sheet-overlay') || e.target.classList.contains('pc-shadcn-sheet-overlay')) {
          $$('.pc-sd-sheet-content[data-state="open"], .pc-shadcn-sheet-content[data-state="open"]').forEach(c => Sheet.close(c));
        }
      });

      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          $$('.pc-sd-sheet-content[data-state="open"], .pc-shadcn-sheet-content[data-state="open"]').forEach(c => Sheet.close(c));
        }
      });
    }
  };

  /* ==========================================================================
     36. SKELETON (Pulsing paper pulp shimmer placeholder)
     ========================================================================== */
  const Skeleton = {
    setLoading(el, loading) {
      if (!el) return;
      el.classList.toggle('pc-sd-skeleton', loading);
    },
    init() {}
  };

  /* ==========================================================================
     37. SLIDER (Paper ruler track with folded origami triangular thumb)
     ========================================================================== */
  const Slider = {
    init(context = document) {
      $$('.pc-sd-slider, .pc-shadcn-slider', context).forEach(slider => {
        if (slider._pcInit) return;
        slider._pcInit = true;

        const thumb = $('.pc-sd-slider-thumb, .pc-shadcn-slider-thumb', slider);
        const range = $('.pc-sd-slider-range, .pc-shadcn-slider-range', slider);
        let isDragging = false;

        function updatePosition(clientX) {
          const rect = slider.getBoundingClientRect();
          if (rect.width <= 0) return;
          const offsetX = Math.max(0, Math.min(rect.width, clientX - rect.left));
          const pct = Math.round((offsetX / rect.width) * 100);

          if (thumb) thumb.style.left = `${pct}%`;
          if (range) range.style.width = `${pct}%`;
          slider.setAttribute('data-value', pct);

          // Update nearby or global slider readout label
          const valDisplay = slider.parentElement?.querySelector('#sd-slider-val') ||
                             slider.closest('.pc-comp-group')?.querySelector('#sd-slider-val') ||
                             document.getElementById('sd-slider-val');
          if (valDisplay) valDisplay.textContent = `${pct}%`;

          slider.dispatchEvent(new CustomEvent('input', {
            bubbles: true,
            detail: { value: pct }
          }));
        }

        slider.addEventListener('mousedown', (e) => {
          isDragging = true;
          updatePosition(e.clientX);
        });

        document.addEventListener('mousemove', (e) => {
          if (isDragging) updatePosition(e.clientX);
        });

        document.addEventListener('mouseup', () => { isDragging = false; });

        // Touch support
        slider.addEventListener('touchstart', (e) => {
          if (e.touches && e.touches[0]) {
            isDragging = true;
            updatePosition(e.touches[0].clientX);
          }
        }, { passive: true });

        document.addEventListener('touchmove', (e) => {
          if (isDragging && e.touches && e.touches[0]) {
            updatePosition(e.touches[0].clientX);
          }
        }, { passive: true });

        document.addEventListener('touchend', () => { isDragging = false; });
      });
    }
  };

  /* ==========================================================================
     38. SWITCH (Paper rocker pill toggle with sliding circular paper disc)
     ========================================================================== */
  const Switch = {
    toggle(sw) {
      const isChecked = sw.getAttribute('data-state') === 'checked';
      const newState = isChecked ? 'unchecked' : 'checked';
      sw.setAttribute('data-state', newState);

      sw.dispatchEvent(new CustomEvent('change', {
        bubbles: true,
        detail: { checked: newState === 'checked' }
      }));
    },
    init(context = document) {
      document.addEventListener('click', (e) => {
        const sw = e.target.closest('.pc-sd-switch, .pc-shadcn-switch');
        if (sw) {
          e.preventDefault();
          Switch.toggle(sw);
        }
      });

      document.addEventListener('keydown', (e) => {
        if (e.key === ' ' || e.key === 'Enter') {
          const focused = document.activeElement;
          if (focused && (focused.classList.contains('pc-sd-switch') || focused.classList.contains('pc-shadcn-switch'))) {
            e.preventDefault();
            Switch.toggle(focused);
          }
        }
      });
    }
  };

  /* ==========================================================================
     39. TABLE (Accounting ledger paper table with alternating tint bands)
     ========================================================================== */
  const Table = {
    init(context = document) {
      $$('.pc-sd-table th[data-sortable], .pc-shadcn-table th[data-sortable]', context).forEach(th => {
        if (th._pcInit) return;
        th._pcInit = true;

        th.style.cursor = 'pointer';
        th.addEventListener('click', () => {
          const table = th.closest('table');
          const tbody = table.querySelector('tbody');
          if (!tbody) return;

          const rows = Array.from(tbody.querySelectorAll('tr'));
          const colIndex = Array.from(th.parentElement.children).indexOf(th);
          const isAsc = th.getAttribute('data-sort-order') !== 'asc';

          rows.sort((a, b) => {
            const aVal = a.children[colIndex]?.textContent.trim() || '';
            const bVal = b.children[colIndex]?.textContent.trim() || '';
            return isAsc ? aVal.localeCompare(bVal, undefined, { numeric: true }) : bVal.localeCompare(aVal, undefined, { numeric: true });
          });

          th.setAttribute('data-sort-order', isAsc ? 'asc' : 'desc');
          rows.forEach(r => tbody.appendChild(r));
        });
      });
    }
  };

  /* ==========================================================================
     40. TABS (Layered file folder tabs with active raised cardstock state)
     ========================================================================== */
  const Tabs = {
    init(context = document) {
      $$('.pc-sd-tabs, .pc-shadcn-tabs', context).forEach(tabs => {
        if (tabs._pcInit) return;
        tabs._pcInit = true;

        tabs.addEventListener('click', (e) => {
          const trigger = e.target.closest('.pc-sd-tabs-trigger, .pc-shadcn-tabs-trigger');
          if (!trigger) return;

          const targetValue = trigger.getAttribute('data-value');
          if (!targetValue) return;

          $$('.pc-sd-tabs-trigger, .pc-shadcn-tabs-trigger', tabs).forEach(t => t.setAttribute('data-state', 'inactive'));
          trigger.setAttribute('data-state', 'active');

          $$('.pc-sd-tabs-content, .pc-shadcn-tabs-content', tabs).forEach(content => {
            const val = content.getAttribute('data-value');
            content.setAttribute('data-state', val === targetValue ? 'active' : 'inactive');
          });

          tabs.dispatchEvent(new CustomEvent('tabs-change', {
            bubbles: true,
            detail: { value: targetValue }
          }));
        });
      });
    }
  };

  /* ==========================================================================
     41. TEXTAREA (Lined notebook paper well with ruled blue/gray hairlines)
     ========================================================================== */
  const Textarea = {
    init(context = document) {
      $$('.pc-sd-textarea[data-auto-resize="true"], .pc-shadcn-textarea[data-auto-resize="true"]', context).forEach(ta => {
        if (ta._pcInit) return;
        ta._pcInit = true;

        ta.addEventListener('input', () => {
          ta.style.height = 'auto';
          ta.style.height = `${ta.scrollHeight + 4}px`;
        });
      });
    }
  };

  /* ==========================================================================
     42. TOAST (Parchment envelope memo slip sliding in with paper rustle)
     ========================================================================== */
  const Toast = {
    show({ title = '', description = '', variant = 'default', duration = 4000 } = {}) {
      let viewport = $('.pc-sd-toast-viewport, .pc-shadcn-toast-viewport');
      if (!viewport) {
        viewport = document.createElement('div');
        viewport.className = 'pc-sd-toast-viewport';
        document.body.appendChild(viewport);
      }

      const toast = document.createElement('div');
      toast.className = `pc-sd-toast is-${variant}`;
      toast.setAttribute('data-state', 'open');

      let iconName = 'info';
      if (variant === 'success') iconName = 'shield-check';
      else if (variant === 'destructive') iconName = 'alert-octagon';
      else if (variant === 'warning') iconName = 'warning';

      toast.innerHTML = `
        <span class="pc-inline-icon is-sm pc-sd-toast-icon" data-icon="${iconName}"></span>
        <div class="pc-sd-toast-content">
          ${title ? `<h4 class="pc-sd-toast-title">${title}</h4>` : ''}
          ${description ? `<p class="pc-sd-toast-description">${description}</p>` : ''}
        </div>
        <button type="button" class="pc-sd-alert-close pc-sd-toast-close" aria-label="Close">
          <span class="pc-inline-icon is-xs" data-icon="close"></span>
        </button>
      `;

      viewport.appendChild(toast);
      hydrateIcons(toast);

      const closeBtn = $('.pc-sd-toast-close', toast);
      if (closeBtn) {
        closeBtn.addEventListener('click', () => {
          toast.setAttribute('data-state', 'closed');
          setTimeout(() => toast.remove(), 250);
        });
      }

      if (duration > 0) {
        setTimeout(() => {
          if (toast.parentElement) {
            toast.setAttribute('data-state', 'closed');
            setTimeout(() => toast.remove(), 250);
          }
        }, duration);
      }

      return toast;
    }
  };

  /* ==========================================================================
     43. TOGGLE (Pressed craft button with pressed-in shadow depth)
     ========================================================================== */
  const Toggle = {
    init(context = document) {
      document.addEventListener('click', (e) => {
        const toggle = e.target.closest('.pc-sd-toggle, .pc-shadcn-toggle');
        if (toggle) {
          const isOn = toggle.getAttribute('data-state') === 'on';
          toggle.setAttribute('data-state', isOn ? 'off' : 'on');
          toggle.setAttribute('aria-pressed', isOn ? 'false' : 'true');
        }
      });
    }
  };

  /* ==========================================================================
     44. TOGGLE GROUP (Interlocking paper puzzle button strip)
     ========================================================================== */
  const ToggleGroup = {
    init(context = document) {
      document.addEventListener('click', (e) => {
        const item = e.target.closest('.pc-sd-toggle-group-item, .pc-shadcn-toggle-group-item');
        if (!item) return;

        const group = item.closest('.pc-sd-toggle-group, .pc-shadcn-toggle-group');
        if (!group) return;

        const isMultiple = group.getAttribute('data-type') === 'multiple';
        const isOn = item.getAttribute('data-state') === 'on';

        if (!isMultiple) {
          $$('.pc-sd-toggle-group-item, .pc-shadcn-toggle-group-item', group).forEach(it => it.setAttribute('data-state', 'off'));
          item.setAttribute('data-state', 'on');
        } else {
          item.setAttribute('data-state', isOn ? 'off' : 'on');
        }
      });
    }
  };

  /* ==========================================================================
     45. TOOLTIP (Floating paper tag with 3D shadow and triangular notch)
     ========================================================================== */
  const Tooltip = {
    init(context = document) {
      $$('[data-tooltip]', context).forEach(el => {
        if (el._pcInit) return;
        el._pcInit = true;

        const text = el.getAttribute('data-tooltip');
        let tip = el.querySelector('.pc-sd-tooltip-content');
        if (!tip) {
          tip = document.createElement('div');
          tip.className = 'pc-sd-tooltip-content';
          tip.textContent = text;
          el.classList.add('pc-sd-tooltip-wrapper');
          el.appendChild(tip);
        }
      });
    }
  };

  /* ==========================================================================
     MASTER INITIALIZER
     ========================================================================== */
  function initAll(context = document) {
    Accordion.init(context);
    Alert.init(context);
    AlertDialog.init(context);
    AspectRatio.init(context);
    Avatar.init(context);
    Badge.init(context);
    Breadcrumb.init(context);
    Button.init(context);
    Calendar.init(context);
    Card.init(context);
    Carousel.init(context);
    Checkbox.init(context);
    Collapsible.init(context);
    Combobox.init(context);
    Command.init(context);
    ContextMenu.init(context);
    Dialog.init(context);
    Drawer.init(context);
    DropdownMenu.init(context);
    Form.init(context);
    HoverCard.init(context);
    Input.init(context);
    InputOTP.init(context);
    Label.init(context);
    Menubar.init(context);
    NavMenu.init(context);
    Pagination.init(context);
    Popover.init(context);
    Progress.init(context);
    RadioGroup.init(context);
    Resizable.init(context);
    ScrollArea.init(context);
    Select.init(context);
    Separator.init(context);
    Sheet.init(context);
    Skeleton.init(context);
    Slider.init(context);
    Switch.init(context);
    Table.init(context);
    Tabs.init(context);
    Textarea.init(context);
    Toggle.init(context);
    ToggleGroup.init(context);
    Tooltip.init(context);
    hydrateIcons(context);
  }

  if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => initAll());
    } else {
      initAll();
    }
  }

  return {
    init: initAll,
    accordion: Accordion,
    alert: Alert,
    alertDialog: AlertDialog,
    aspectRatio: AspectRatio,
    avatar: Avatar,
    badge: Badge,
    breadcrumb: Breadcrumb,
    button: Button,
    calendar: Calendar,
    card: Card,
    carousel: Carousel,
    checkbox: Checkbox,
    collapsible: Collapsible,
    combobox: Combobox,
    command: Command,
    contextMenu: ContextMenu,
    dialog: Dialog,
    drawer: Drawer,
    dropdownMenu: DropdownMenu,
    form: Form,
    hoverCard: HoverCard,
    input: Input,
    inputOtp: InputOTP,
    label: Label,
    menubar: Menubar,
    navigationMenu: NavMenu,
    pagination: Pagination,
    popover: Popover,
    progress: Progress,
    radioGroup: RadioGroup,
    resizable: Resizable,
    scrollArea: ScrollArea,
    select: Select,
    separator: Separator,
    sheet: Sheet,
    skeleton: Skeleton,
    slider: Slider,
    switch: Switch,
    table: Table,
    tabs: Tabs,
    textarea: Textarea,
    toast: Toast.show,
    toggle: Toggle,
    toggleGroup: ToggleGroup,
    tooltip: Tooltip
  };
});
