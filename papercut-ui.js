/**
 * PaperCut UI - PC Components Edition (papercut-ui.js)
 * Design reference: shadcn/ui (MIT License) — see THIRD_PARTY_NOTICES.md
 * 
 * Complete suite of all 45 interactive PC UI components reimagined in
 * authentic 3D Layered Paper-Cut aesthetics:
 * - Full WCAG AAA keyboard navigation & ARIA semantics
 * - Seamless integration with the 529 freestanding kirigami SVG icon system
 * - Self-contained state management and clean event APIs
 * - Public API under `window.PaperCutUI`
 */

(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) {
    module.exports = api;
  }
  // 데모 헬퍼(filterTab 등)와 papercut-modals.js가 같은 전역에 먼저 속성을 얹으므로 덮어쓰지 않고 병합한다
  if (typeof root !== 'undefined') {
    root.PaperCutUI = Object.assign(root.PaperCutUI || {}, api);
  }
  if (typeof window !== 'undefined' && window !== root) {
    window.PaperCutUI = Object.assign(window.PaperCutUI || {}, api);
  }
})(typeof globalThis !== 'undefined' ? globalThis : (typeof self !== 'undefined' ? self : this), function () {
  'use strict';

  // 전역(document) 리스너는 init을 여러 번 불러도 한 번만 등록한다. 핸들러 소스가 같으면 같은 리스너로 본다.
  const docListeners = new Set();
  // 컴포넌트 init()은 PaperCutUI.init(root)마다 다시 불리므로, 문서 리스너는 (컴포넌트, 이벤트)당 한 번만 건다.
  // 핸들러 소스 문자열을 키로 쓰면 다른 컴포넌트의 같은 모양 핸들러가 합쳐지므로 소유자 이름을 키로 쓴다.
  function onDoc(owner, type, handler) {
    if (typeof document === 'undefined') return;
    const key = owner + '|' + type;
    if (docListeners.has(key)) return;
    docListeners.add(key);
    document.addEventListener(type, handler);
  }

  // Safe query helpers
  function $$(selector, context = (typeof document !== 'undefined' ? document : null)) {
    if (!context || typeof context.querySelectorAll !== 'function') return [];
    return Array.from(context.querySelectorAll(selector));
  }

  function $(selector, context = (typeof document !== 'undefined' ? document : null)) {
    if (!context || typeof context.querySelector !== 'function') return null;
    return context.querySelector(selector);
  }

  // Hydrate icons safely using the global PaperCut 529 icon engine
  function hydrateIcons(element) {
    if (typeof window !== 'undefined' && typeof window.hydratePapercutIcons === 'function') {
      window.hydratePapercutIcons(element || document);
    }
  }

  /* ==========================================================================
     PAPER LAYER — LANE: OVERLAYS (대화상자·시트·메뉴·알림·토스트·테이블·캘린더·카드·캐러셀·툴팁·리사이저블)
     엔진(papercut-paper-layer.js)이 없으면 아무 일도 하지 않는다: 기존 CSS 모양이 그대로 남는다.
     ========================================================================== */
  function hydrateOverlayPaper(element) {
    const paper = typeof window !== 'undefined' && window.PaperCutUI && window.PaperCutUI.paper;
    if (paper && typeof paper.hydrate === 'function') paper.hydrate(element || document);
  }

  // 팝오버·호버 카드·드롭다운 패널이 뷰포트 좌우로 잘리지 않도록 가로 위치를 보정한다.
  function keepInViewport(panel) {
    if (!panel || typeof window === 'undefined') return;
    panel.style.marginLeft = '';
    const r = panel.getBoundingClientRect();
    const pad = 8;
    if (r.width === 0) return;
    if (r.left < pad) panel.style.marginLeft = `${Math.round(pad - r.left)}px`;
    else if (r.right > window.innerWidth - pad) panel.style.marginLeft = `${Math.round(window.innerWidth - pad - r.right)}px`;
  }

  // [선택자, variant, tone]: 마크업에 data-pc-paper가 없는 라이브러리 인스턴스에만 붙인다(작성자 지정이 우선).
  const OVERLAY_PAPER = [
    ['.pc-ui-alert-dialog-content', 'sheet', 'cream'],
    ['.pc-ui-dialog-content', 'sheet', 'cream'],
    ['.pc-ui-sheet-content', 'sheet', 'cream'],
    ['.pc-ui-drawer-content', 'sheet', 'cream'],
    ['.pc-ui-popover-content', 'menu', 'cream'],
    ['.pc-ui-hover-card-content', 'menu', 'cream'],
    ['.pc-ui-tooltip-content', 'menu', 'cream'],
    ['.pc-ui-dropdown-menu-content', 'menu', 'cream'],
    ['.pc-ui-context-menu', 'menu', 'cream'],
    ['.pc-ui-dropdown-menu-item, .pc-ui-context-menu-item', 'pill', 'cream'],
    ['.pc-ui-calendar', 'sheet', 'cream'],
    ['.pc-ui-table-wrap', 'sheet', 'cream'],
    ['.pc-ui-resizable-group, .pc-ui-resizable-panel-group', 'sheet', 'cream'],
    ['.pc-ui-resizable-handle', 'track', 'cream'],
    ['.pc-ui-card', 'sheet', 'cream']
  ];
  const ALERT_TONE = { 'is-info': 'sky', 'is-success': 'mint', 'is-warning': 'buttercup', 'is-destructive': 'rose' };
  const MENU_SEL = '[role="menu"], .pc-ui-dropdown-menu-content, .pc-ui-context-menu';
  const ITEM_SEL = '[role="menuitem"], .pc-ui-dropdown-menu-item, .pc-ui-context-menu-item';

  function setPaper(el, variant, tone) {
    if (!el.hasAttribute('data-pc-paper')) el.setAttribute('data-pc-paper', variant);
    if (tone && !el.hasAttribute('data-pc-tone')) el.setAttribute('data-pc-tone', tone);
  }

  // 글자 × 만 들어 있는 닫기 버튼은 3D 컬러 아이콘으로 바꾼다.
  function iconifyCloseButtons(context) {
    $$('.pc-ui-alert-close, .pc-ui-dialog-close, .pc-ui-sheet-close', context).forEach(btn => {
      if (btn.querySelector('[data-icon], svg')) return;
      btn.innerHTML = '<span class="pc-inline-icon is-xs" data-icon="close"></span>';
      if (!btn.hasAttribute('aria-label')) btn.setAttribute('aria-label', '닫기');
    });
  }

  function paperizeOverlays(context) {
    const root = context || document;
    OVERLAY_PAPER.forEach(([sel, variant, tone]) => {
      $$(sel, root).forEach(el => setPaper(el, variant, tone));
    });
    $$('.pc-ui-alert', root).forEach(el => {
      const kind = Object.keys(ALERT_TONE).find(k => el.classList.contains(k));
      setPaper(el, 'ticket', kind ? ALERT_TONE[kind] : 'lavender');
    });
    // 메뉴 항목을 키보드로 오갈 수 있게 역할과 tabindex를 채운다.
    $$('.pc-ui-dropdown-menu-content, .pc-ui-context-menu', root).forEach(m => {
      if (!m.hasAttribute('role')) m.setAttribute('role', 'menu');
    });
    $$('.pc-ui-dropdown-menu-item, .pc-ui-context-menu-item', root).forEach(i => {
      if (!i.hasAttribute('role')) i.setAttribute('role', 'menuitem');
      if (!i.hasAttribute('tabindex')) i.setAttribute('tabindex', '-1');
    });
    iconifyCloseButtons(root);
    bindMenuKeys();
    hydrateIcons(root);
  }

  /* 메뉴 키보드 조작: ↑ ↓ Home End로 항목 이동, 포커스·호버한 항목은 data-state="active"(색지가 눌린 하이라이트). */
  function menuItems(menu) {
    return $$(ITEM_SEL, menu).filter(i => !i.disabled && i.getAttribute('aria-disabled') !== 'true' && i.getClientRects().length > 0);
  }
  function setActiveItem(menu, item) {
    $$(ITEM_SEL, menu).forEach(i => {
      if (i === item) i.setAttribute('data-state', 'active');
      else i.removeAttribute('data-state');
    });
  }
  let menuKeysBound = false;
  function bindMenuKeys() {
    if (menuKeysBound || typeof document === 'undefined') return;
    menuKeysBound = true;
    document.addEventListener('keydown', (e) => {
      // div[role=menuitem]은 Enter·Space를 기본 처리하지 않으므로 클릭과 같은 동작으로 연결한다
      if ((e.key === 'Enter' || e.key === ' ') && e.target.closest) {
        const it = e.target.closest(ITEM_SEL);
        if (it && it === e.target && !/^(BUTTON|A|INPUT)$/.test(it.tagName) && it.closest(MENU_SEL)
            && it.getAttribute('aria-disabled') !== 'true') {
          e.preventDefault();
          it.click();
          return;
        }
      }
      const keys = ['ArrowDown', 'ArrowUp', 'Home', 'End'];
      if (!keys.includes(e.key)) return;
      let menu = e.target.closest && e.target.closest(MENU_SEL);
      if (!menu) {
        // 드롭다운 트리거에서 ↓ 를 누르면 열린 메뉴의 첫 항목으로
        const wrap = e.target.closest && e.target.closest('.pc-ui-dropdown-menu[data-state="open"]');
        if (!wrap || !e.target.closest('.pc-ui-dropdown-menu-trigger') || e.key !== 'ArrowDown') return;
        menu = $('.pc-ui-dropdown-menu-content', wrap);
        if (!menu) return;
      }
      const items = menuItems(menu);
      if (!items.length) return;
      const current = items.indexOf(e.target.closest(ITEM_SEL));
      let next;
      if (e.key === 'Home') next = items[0];
      else if (e.key === 'End') next = items[items.length - 1];
      else if (e.key === 'ArrowDown') next = items[current < 0 ? 0 : (current + 1) % items.length];
      else next = items[current < 0 ? items.length - 1 : (current - 1 + items.length) % items.length];
      e.preventDefault();
      next.focus();
    });
    document.addEventListener('focusin', (e) => {
      const item = e.target.closest && e.target.closest(ITEM_SEL);
      const menu = item && item.closest(MENU_SEL);
      if (menu) setActiveItem(menu, item);
    });
    document.addEventListener('pointerover', (e) => {
      if (e.pointerType === 'touch') return;
      const item = e.target.closest && e.target.closest(ITEM_SEL);
      const menu = item && item.closest(MENU_SEL);
      if (menu) setActiveItem(menu, item);
    });
    document.addEventListener('pointerout', (e) => {
      const menu = e.target.closest && e.target.closest(MENU_SEL);
      if (!menu || (e.relatedTarget && menu.contains(e.relatedTarget))) return;
      const focused = document.activeElement && document.activeElement.closest(ITEM_SEL);
      setActiveItem(menu, focused && menu.contains(focused) ? focused : null);
    });
  }

  /* ==========================================================================
     1. ACCORDION (Concertina pleated paper fold with chevron cutline)
     ========================================================================== */
  const Accordion = {
    init(context = document) {
      $$('.pc-ui-accordion, .pc-ui-accordion', context).forEach(acc => {
        if (acc._pcInit) return;
        acc._pcInit = true;

        acc.addEventListener('click', (e) => {
          const trigger = e.target.closest('.pc-ui-accordion-trigger, .pc-ui-accordion-trigger');
          if (!trigger) return;

          const item = trigger.closest('.pc-ui-accordion-item, .pc-ui-accordion-item');
          if (!item) return;

          const isOpen = item.getAttribute('data-state') === 'open';
          const isMultiple = acc.getAttribute('data-type') === 'multiple';

          if (!isMultiple && !isOpen) {
            $$('.pc-ui-accordion-item, .pc-ui-accordion-item', acc).forEach(otherItem => {
              if (otherItem !== item) {
                otherItem.setAttribute('data-state', 'closed');
                const otherTrigger = $('.pc-ui-accordion-trigger, .pc-ui-accordion-trigger', otherItem);
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

        // WAI-ARIA: 위·아래·Home·End로 트리거 사이를 이동한다 (Enter/Space는 button 기본 동작)
        acc.addEventListener('keydown', (e) => {
          const trigger = e.target.closest('.pc-ui-accordion-trigger');
          if (!trigger || !['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(e.key)) return;
          const triggers = $$('.pc-ui-accordion-trigger', acc);
          const idx = triggers.indexOf(trigger);
          let next = idx;
          if (e.key === 'ArrowDown') next = (idx + 1) % triggers.length;
          else if (e.key === 'ArrowUp') next = (idx - 1 + triggers.length) % triggers.length;
          else if (e.key === 'Home') next = 0;
          else next = triggers.length - 1;
          e.preventDefault();
          triggers[next].focus();
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
      $$('.pc-ui-alert-close, .pc-ui-alert-close', context).forEach(btn => {
        if (btn._pcInit) return;
        btn._pcInit = true;

        btn.addEventListener('click', (e) => {
          const alert = e.target.closest('.pc-ui-alert, .pc-ui-alert');
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
      const overlay = el.classList.contains('pc-ui-alert-dialog-overlay') || el.classList.contains('pc-ui-alert-dialog-overlay')
        ? el
        : el.closest('.pc-ui-alert-dialog-overlay, .pc-ui-alert-dialog-overlay');
      if (overlay) {
        AlertDialog.lastTrigger = document.activeElement;
        // fixed 오버레이가 transform·isolation 조상 안에 갇히지 않도록 body로 옮겨 연다
        if (overlay.parentElement !== document.body) document.body.appendChild(overlay);
        overlay.setAttribute('data-state', 'open');
        document.body.style.overflow = 'hidden';
        hydrateOverlayPaper(overlay);
        // 취소 버튼(안전한 선택)에 먼저 포커스
        const first = $('.pc-ui-alert-dialog-cancel', overlay) || $('button, [href], input, select, textarea', overlay);
        if (first) requestAnimationFrame(() => first.focus());
      }
    },
    close(targetId) {
      const el = typeof targetId === 'string' ? $(targetId) : targetId;
      if (!el) return;
      const overlay = el.classList.contains('pc-ui-alert-dialog-overlay') || el.classList.contains('pc-ui-alert-dialog-overlay')
        ? el
        : el.closest('.pc-ui-alert-dialog-overlay, .pc-ui-alert-dialog-overlay');
      if (overlay) {
        const wasOpen = overlay.getAttribute('data-state') === 'open';
        overlay.setAttribute('data-state', 'closed');
        document.body.style.overflow = '';
        const back = AlertDialog.lastTrigger;
        if (wasOpen && back && typeof back.focus === 'function' && document.contains(back)) {
          back.focus();
          AlertDialog.lastTrigger = null;
        }
      }
    },
    init(context = document) {
      onDoc('AlertDialog', 'click', (e) => {
        const trigger = e.target.closest('[data-alert-dialog-target]');
        if (trigger) {
          e.preventDefault();
          AlertDialog.open(trigger.getAttribute('data-alert-dialog-target'));
          return;
        }

        const cancelOrAction = e.target.closest(
          '.pc-ui-alert-dialog-cancel, .pc-ui-alert-dialog-action, .pc-ui-alert-dialog-cancel, .pc-ui-alert-dialog-action'
        );
        if (cancelOrAction) {
          const overlay = cancelOrAction.closest('.pc-ui-alert-dialog-overlay, .pc-ui-alert-dialog-overlay');
          if (overlay) AlertDialog.close(overlay);
        }
      });

      onDoc('AlertDialog', 'keydown', (e) => {
        if (e.key === 'Escape') {
          $$('.pc-ui-alert-dialog-overlay[data-state="open"], .pc-ui-alert-dialog-overlay[data-state="open"]').forEach(d => AlertDialog.close(d));
        } else if (e.key === 'Tab') {
          // 포커스 가두기: 열린 알림 대화상자 안에서만 Tab이 돈다
          const open = $('.pc-ui-alert-dialog-overlay[data-state="open"]');
          if (!open) return;
          const focusable = $$('button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])', open);
          if (!focusable.length) return;
          const first = focusable[0];
          const last = focusable[focusable.length - 1];
          if (e.shiftKey && (document.activeElement === first || !open.contains(document.activeElement))) {
            e.preventDefault();
            last.focus();
          } else if (!e.shiftKey && (document.activeElement === last || !open.contains(document.activeElement))) {
            e.preventDefault();
            first.focus();
          }
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
      $$('.pc-ui-aspect-ratio, .pc-ui-aspect-ratio', context).forEach(el => {
        AspectRatio.apply(el);
      });
    }
  };

  /* ==========================================================================
     5. AVATAR (Circular layered paper silhouette with dual pastel rings)
     ========================================================================== */
  const Avatar = {
    init(context = document) {
      $$('.pc-ui-avatar-image, .pc-ui-avatar-image', context).forEach(img => {
        if (img._pcInit) return;
        img._pcInit = true;

        img.addEventListener('error', () => {
          img.style.display = 'none';
          const fallback = img.parentElement.querySelector('.pc-ui-avatar-fallback, .pc-ui-avatar-fallback');
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
      onDoc('Badge', 'click', (e) => {
        const dismissBtn = e.target.closest('[data-badge-dismiss]');
        if (dismissBtn) {
          const badge = dismissBtn.closest('.pc-ui-badge, .pc-ui-badge');
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
      $$('.pc-ui-breadcrumb, .pc-ui-breadcrumb', context).forEach(bc => {
        if (bc._pcInit) return;
        bc._pcInit = true;

        bc.addEventListener('click', (e) => {
          const link = e.target.closest('.pc-ui-breadcrumb-link, .pc-ui-breadcrumb-link');
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
      onDoc('Button', 'click', (e) => {
        const btn = e.target.closest('.pc-ui-btn, .pc-ui-button');
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
      $$('.pc-ui-calendar, .pc-ui-calendar', context).forEach(cal => {
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
          const dayBtn = e.target.closest('.pc-ui-calendar-day, .pc-ui-calendar-day');

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
              // 날짜 칸이 다시 만들어지므로 키보드 사용자의 포커스를 선택한 날로 돌려준다
              const again = cal.querySelector('.pc-ui-calendar-day.is-selected');
              if (again) again.focus();
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

      const titleEl = cal.querySelector('.pc-ui-calendar-title, .pc-ui-calendar-title');
      const gridEl = cal.querySelector('.pc-ui-calendar-grid, .pc-ui-calendar-grid');
      if (!gridEl) return;

      // data-locale="ko"를 주면 한국어로 그린다(기본은 기존 영어 표기 그대로).
      const ko = (cal.getAttribute('data-locale') || '').toLowerCase().startsWith('ko');
      const monthNames = ko
        ? ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월']
        : ['January', 'February', 'March', 'April', 'May', 'June',
           'July', 'August', 'September', 'October', 'November', 'December'];
      if (titleEl) {
        titleEl.textContent = ko
          ? `${s.currentYear}년 ${monthNames[s.currentMonth]}`
          : `${monthNames[s.currentMonth]} ${s.currentYear}`;
      }

      const weekdays = ko ? ['일', '월', '화', '수', '목', '금', '토'] : ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
      gridEl.innerHTML = weekdays.map(d => `<div class="pc-ui-calendar-weekday">${d}</div>`).join('');

      const firstDay = new Date(s.currentYear, s.currentMonth, 1).getDay();
      const daysInMonth = new Date(s.currentYear, s.currentMonth + 1, 0).getDate();
      const prevMonthDays = new Date(s.currentYear, s.currentMonth, 0).getDate();

      for (let i = firstDay - 1; i >= 0; i--) {
        const d = prevMonthDays - i;
        gridEl.insertAdjacentHTML('beforeend', `<button type="button" class="pc-ui-calendar-day is-other-month" disabled data-pc-paper="knob" data-pc-tone="cream">${d}</button>`);
      }

      const today = new Date();
      for (let d = 1; d <= daysInMonth; d++) {
        const thisDate = new Date(s.currentYear, s.currentMonth, d);
        const isToday = thisDate.toDateString() === today.toDateString();
        const isSelected = s.selectedDate && thisDate.toDateString() === s.selectedDate.toDateString();

        let cls = 'pc-ui-calendar-day';
        if (isToday) cls += ' is-today';
        if (isSelected) cls += ' is-selected';

        // 날짜 칸은 knob 색지: 선택일은 data-state="active"(눌린 accent 색지), 오늘은 peach 톤으로 구분한다.
        const tone = isSelected ? 'mint' : (isToday ? 'peach' : 'cream');
        const state = isSelected ? ' data-state="active" aria-pressed="true"' : ' aria-pressed="false"';
        const current = isToday ? ' aria-current="date"' : '';
        gridEl.insertAdjacentHTML('beforeend', `<button type="button" class="${cls}" data-date="${thisDate.toISOString()}" data-pc-paper="knob" data-pc-tone="${tone}"${state}${current}>${d}</button>`);
      }

      // 선택한 날짜를 보여 주는 출력 칸(선택 사항)
      const out = cal.querySelector('[data-calendar-output]');
      if (out && s.selectedDate) {
        const sd = s.selectedDate;
        // 색지 레이어 SVG가 지워지지 않도록 안쪽 글자 칸(.pc-ui-counter-text)만 바꾼다
        (out.querySelector('.pc-ui-counter-text') || out).textContent = ko ? `선택 ${sd.getMonth() + 1}월 ${sd.getDate()}일` : sd.toDateString();
      }

      hydrateIcons(cal);
      hydrateOverlayPaper(cal);   // 날짜가 다시 그려질 때마다 색지를 즉시 수화
    }
  };

  /* ==========================================================================
     10. CARD (Stacked multi-layer cardstock with subtle offset and shadow)
     ========================================================================== */
  const Card = {
    init(context = document) {
      $$('.pc-ui-card[data-collapsible="true"], .pc-ui-card[data-collapsible="true"]', context).forEach(card => {
        if (card._pcInit) return;
        card._pcInit = true;

        const header = $('.pc-ui-card-header, .pc-ui-card-header', card);
        const content = $('.pc-ui-card-content, .pc-ui-card-content', card);
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
      $$('.pc-ui-carousel, .pc-ui-carousel', context).forEach(car => {
        if (car._pcInit) return;
        car._pcInit = true;

        const track = $('.pc-ui-carousel-track, .pc-ui-carousel-track', car);
        const items = $$('.pc-ui-carousel-item, .pc-ui-carousel-item', car);
        const prevBtn = $('[data-carousel-prev]', car);
        const nextBtn = $('[data-carousel-next]', car);
        const dotsWrap = $('.pc-ui-carousel-dots, .pc-ui-carousel-dots', car);
        const counter = $('[data-carousel-counter]', car);

        let currentIndex = 0;
        const total = items.length;

        function updateSlide() {
          if (!track) return;
          track.style.transform = `translateX(-${currentIndex * 100}%)`;
          if (dotsWrap) {
            const dots = $$('.pc-ui-carousel-dot, .pc-ui-carousel-dot', dotsWrap);
            dots.forEach((dot, idx) => {
              dot.classList.toggle('is-active', idx === currentIndex);
              dot.setAttribute('aria-current', idx === currentIndex ? 'true' : 'false');
            });
          }
          // 색지 레이어 SVG가 지워지지 않도록 안쪽 글자 칸(.pc-ui-counter-text)만 바꾼다
          if (counter) (counter.querySelector('.pc-ui-counter-text') || counter).textContent = `슬라이드 ${currentIndex + 1} / ${total}`;
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
          // 점은 knob 색지: 현재 슬라이드의 점이 is-active(눌린 accent 색지)
          dotsWrap.innerHTML = items.map((_, i) => `<button type="button" class="pc-ui-carousel-dot ${i === 0 ? 'is-active' : ''}" data-index="${i}" data-pc-paper="knob" data-pc-tone="mint" aria-label="슬라이드 ${i + 1}"${i === 0 ? ' aria-current="true"' : ''}></button>`).join('');
          hydrateOverlayPaper(dotsWrap);
          dotsWrap.addEventListener('click', (e) => {
            const dot = e.target.closest('.pc-ui-carousel-dot, .pc-ui-carousel-dot');
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
      onDoc('Checkbox', 'click', (e) => {
        const cb = e.target.closest('.pc-ui-checkbox, .pc-ui-checkbox');
        if (cb) {
          e.preventDefault();
          Checkbox.toggle(cb);
          return;
        }

        const wrapper = e.target.closest('.pc-ui-checkbox-wrapper, .pc-ui-checkbox-wrapper');
        if (wrapper && !e.target.closest('.pc-ui-checkbox, .pc-ui-checkbox')) {
          const innerCb = $('.pc-ui-checkbox, .pc-ui-checkbox', wrapper);
          if (innerCb) {
            e.preventDefault();
            Checkbox.toggle(innerCb);
          }
        }
      });

      onDoc('Checkbox', 'keydown', (e) => {
        if (e.key === ' ' || e.key === 'Spacebar') {
          const focused = document.activeElement;
          if (focused && (focused.classList.contains('pc-ui-checkbox') || focused.classList.contains('pc-ui-checkbox'))) {
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
      if (Collapsible._bound) return;   // document 리스너는 한 번만 (init 재호출 시 이중 토글 방지)
      Collapsible._bound = true;
      onDoc('Collapsible', 'click', (e) => {
        const trigger = e.target.closest(
          '.pc-ui-collapsible-trigger, .pc-ui-collapsible-trigger-bar, .pc-ui-collapsible-trigger, .pc-ui-collapsible-trigger-bar'
        );
        if (trigger) {
          const parent = trigger.closest('.pc-ui-collapsible, .pc-ui-collapsible');
          if (parent) {
            const isOpen = parent.getAttribute('data-state') === 'open';
            parent.setAttribute('data-state', isOpen ? 'closed' : 'open');
            trigger.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
          }
        }
      });
    }
  };

  /* ==========================================================================
     14. COMBOBOX (Deckle search input with fan-out bookmark suggestions)
     ========================================================================== */
  const Combobox = {
    // 열림/닫힘을 data-state + aria-expanded에 함께 기록한다. 열릴 때 메뉴 색지를 즉시 수화해 깜빡임을 막는다.
    setOpen(combo, open) {
      combo.setAttribute('data-state', open ? 'open' : 'closed');
      const trigger = $('.pc-ui-combobox-trigger', combo);
      if (trigger) trigger.setAttribute('aria-expanded', open ? 'true' : 'false');
      const input = $('.pc-ui-combobox-input', combo);
      if (input) input.setAttribute('aria-expanded', open ? 'true' : 'false');
      if (open) {
        const menu = $('.pc-ui-combobox-dropdown', combo);
        if (menu && window.PaperCutUI && window.PaperCutUI.paper) window.PaperCutUI.paper.hydrate(menu);
      }
    },
    visibleItems(combo) {
      return $$('.pc-ui-combobox-item', combo).filter(it => it.style.display !== 'none');
    },
    highlight(combo, item) {
      $$('.pc-ui-combobox-item', combo).forEach(it => it.classList.toggle('is-highlighted', it === item));
      const input = $('.pc-ui-combobox-input', combo);
      if (input) {
        if (item && item.id) input.setAttribute('aria-activedescendant', item.id);
        else input.removeAttribute('aria-activedescendant');
      }
      if (item && item.scrollIntoView) item.scrollIntoView({ block: 'nearest' });
    },
    choose(combo, item) {
      const label = $('.pc-ui-combobox-label, .pc-ui-combobox-label', combo) ||
                    $('.pc-ui-combobox-trigger span, .pc-ui-combobox-trigger span', combo);
      const text = item.getAttribute('data-value') || (item.querySelector('.pc-ui-item-text') || item.querySelector('span') || item).textContent.trim();
      if (label) label.textContent = text;
      const itemIcon = item.querySelector('.pc-inline-icon:not(.pc-ui-option-mark)');
      const triggerIcon = combo.querySelector('.pc-ui-combobox-trigger .pc-trigger-content .pc-inline-icon, .pc-ui-combobox-trigger > .pc-inline-icon');
      if (itemIcon && triggerIcon) {
        const iconAttr = itemIcon.getAttribute('data-icon');
        if (iconAttr) {
          triggerIcon.setAttribute('data-icon', iconAttr);
          if (typeof window.hydratePapercutIcons === 'function') window.hydratePapercutIcons(combo);
        }
      }
      $$('.pc-ui-combobox-item', combo).forEach(it => it.setAttribute('aria-selected', it === item ? 'true' : 'false'));
      Combobox.setOpen(combo, false);
      combo.setAttribute('data-value', text);
      combo.dispatchEvent(new CustomEvent('combobox-select', {
        bubbles: true,
        detail: { value: combo.getAttribute('data-value') }
      }));
    },
    init(context = document) {
      onDoc('Combobox', 'click', (e) => {
        const trigger = e.target.closest('.pc-ui-combobox-trigger, .pc-ui-combobox-trigger');
        const allCombos = $$('.pc-ui-combobox, .pc-ui-combobox');

        if (trigger) {
          const combo = trigger.closest('.pc-ui-combobox, .pc-ui-combobox');
          const isOpen = combo.getAttribute('data-state') === 'open';
          allCombos.forEach(c => Combobox.setOpen(c, false));
          if (!isOpen) {
            Combobox.setOpen(combo, true);
            const input = $('.pc-ui-combobox-input, .pc-ui-combobox-input', combo);
            if (input) input.focus();
          }
          return;
        }

        const item = e.target.closest('.pc-ui-combobox-item, .pc-ui-combobox-item');
        if (item) {
          Combobox.choose(item.closest('.pc-ui-combobox, .pc-ui-combobox'), item);
          return;
        }

        if (!e.target.closest('.pc-ui-combobox, .pc-ui-combobox')) {
          allCombos.forEach(c => Combobox.setOpen(c, false));
        }
      });

      onDoc('Combobox', 'input', (e) => {
        const input = e.target.closest('.pc-ui-combobox-input, .pc-ui-combobox-input');
        if (!input) return;
        const combo = input.closest('.pc-ui-combobox, .pc-ui-combobox');
        const term = input.value.toLowerCase();
        const items = $$('.pc-ui-combobox-item, .pc-ui-combobox-item', combo);
        items.forEach(it => {
          const match = it.textContent.toLowerCase().includes(term);
          it.style.display = match ? 'flex' : 'none';
        });
        Combobox.highlight(combo, null);
      });

      // 키보드: 트리거 ↓로 열기, 입력창에서 ↑↓ 이동, Enter 선택, Esc 닫고 트리거로 복귀
      onDoc('Combobox', 'keydown', (e) => {
        const combo = e.target.closest && e.target.closest('.pc-ui-combobox');
        if (!combo) return;
        const trigger = $('.pc-ui-combobox-trigger', combo);
        const isOpen = combo.getAttribute('data-state') === 'open';

        if (e.key === 'Escape' && isOpen) {
          e.preventDefault();
          Combobox.setOpen(combo, false);
          if (trigger) trigger.focus();
          return;
        }
        if (e.target === trigger && e.key === 'ArrowDown') {
          e.preventDefault();
          Combobox.setOpen(combo, true);
          const input = $('.pc-ui-combobox-input', combo);
          if (input) input.focus();
          return;
        }
        if (e.target.closest('.pc-ui-combobox-input')) {
          const items = Combobox.visibleItems(combo);
          const cur = items.findIndex(it => it.classList.contains('is-highlighted'));
          if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            e.preventDefault();
            if (!items.length) return;
            const next = e.key === 'ArrowDown' ? Math.min(items.length - 1, cur + 1) : Math.max(0, cur - 1);
            Combobox.highlight(combo, items[next]);
          } else if (e.key === 'Enter' && cur >= 0) {
            e.preventDefault();
            Combobox.choose(combo, items[cur]);
            if (trigger) trigger.focus();
          }
        }
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
        const input = $('.pc-ui-command-input, .pc-ui-command-input', el);
        if (input) input.focus();
      }
    },
    close(targetId) {
      const el = typeof targetId === 'string' ? $(targetId) : targetId;
      if (el) el.setAttribute('data-state', 'closed');
    },
    init(context = document) {
      onDoc('Command', 'keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
          const dialog = $('.pc-ui-command-dialog, .pc-ui-command-dialog');
          if (dialog) {
            e.preventDefault();
            const isOpen = dialog.getAttribute('data-state') === 'open';
            if (isOpen) Command.close(dialog);
            else Command.open(dialog);
          }
        }
        if (e.key === 'Escape') {
          $$('.pc-ui-command-dialog[data-state="open"], .pc-ui-command-dialog[data-state="open"]').forEach(d => Command.close(d));
        }
      });

      onDoc('Command', 'input', (e) => {
        const input = e.target.closest('.pc-ui-command-input, .pc-ui-command-input');
        if (!input) return;
        const cmd = input.closest('.pc-ui-command, .pc-ui-command');
        const term = input.value.toLowerCase();
        $$('.pc-ui-command-item, .pc-ui-command-item', cmd).forEach(it => {
          const text = it.textContent.toLowerCase();
          it.style.display = text.includes(term) ? 'flex' : 'none';
        });
      });

      onDoc('Command', 'click', (e) => {
        if (e.target.classList.contains('pc-ui-command-dialog') || e.target.classList.contains('pc-ui-command-dialog')) {
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
      onDoc('ContextMenu', 'contextmenu', (e) => {
        const target = e.target.closest('[data-context-menu]');
        if (target) {
          e.preventDefault();
          const menuId = target.getAttribute('data-context-menu');
          const menu = $(menuId);
          if (menu) {
            ContextMenu.lastTrigger = target;
            // position: fixed는 transform 조상(카드 호버 등) 안에서 기준이 바뀌므로 body로 옮겨 연다
            if (menu.parentElement !== document.body) document.body.appendChild(menu);
            menu.setAttribute('data-state', 'open');
            // 화면 밖으로 잘리지 않게 열린 뒤 크기를 재서 뷰포트 안으로 당긴다
            const w = menu.offsetWidth;
            const h = menu.offsetHeight;
            const left = Math.max(8, Math.min(e.clientX, window.innerWidth - w - 8));
            const top = Math.max(8, Math.min(e.clientY, window.innerHeight - h - 8));
            menu.style.left = `${left}px`;
            menu.style.top = `${top}px`;
            hydrateOverlayPaper(menu);
            const first = menuItems(menu)[0];
            if (first) first.focus({ preventScroll: true });
          }
        }
      });

      const closeAll = (returnFocus) => {
        $$('.pc-ui-context-menu[data-state="open"], .pc-ui-context-menu[data-state="open"]').forEach(m => m.setAttribute('data-state', 'closed'));
        const back = ContextMenu.lastTrigger;
        if (returnFocus && back && typeof back.focus === 'function') back.focus();
        ContextMenu.lastTrigger = null;
      };
      onDoc('ContextMenu', 'click', (e) => {
        if (!e.target.closest('.pc-ui-context-menu, .pc-ui-context-menu')) closeAll(false);
        else if (e.target.closest('.pc-ui-context-menu-item')) closeAll(true);
      });
      onDoc('ContextMenu', 'keydown', (e) => {
        if (e.key === 'Escape' && $('.pc-ui-context-menu[data-state="open"]')) { closeAll(true); return; }
        // 키보드: 영역에 포커스를 두고 Enter·Space로도 연다 (Shift+F10·메뉴 키는 브라우저가 contextmenu를 보낸다)
        const area = e.target.closest && e.target.closest('[data-context-menu]');
        if (area && e.target === area && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          const r = area.getBoundingClientRect();
          area.dispatchEvent(new MouseEvent('contextmenu', { bubbles: true, cancelable: true, clientX: r.left + 16, clientY: r.bottom - 8 }));
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
        hydrateOverlayPaper(el);
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
      onDoc('Dialog', 'click', (e) => {
        const trigger = e.target.closest('[data-dialog-target]');
        if (trigger) {
          e.preventDefault();
          Dialog.open(trigger.getAttribute('data-dialog-target'));
          return;
        }

        const closeBtn = e.target.closest('.pc-ui-dialog-close, .pc-ui-dialog-close');
        if (closeBtn) {
          const overlay = closeBtn.closest('.pc-ui-dialog-overlay, .pc-ui-dialog-overlay');
          if (overlay) Dialog.close(overlay);
          return;
        }

        if (e.target.classList.contains('pc-ui-dialog-overlay') || e.target.classList.contains('pc-ui-dialog-overlay')) {
          Dialog.close(e.target);
        }
      });

      onDoc('Dialog', 'keydown', (e) => {
        if (e.key === 'Escape') {
          $$('.pc-ui-dialog-overlay[data-state="open"], .pc-ui-dialog-overlay[data-state="open"]').forEach(d => Dialog.close(d));
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
        const overlay = el.previousElementSibling?.classList.contains('pc-ui-drawer-overlay') ? el.previousElementSibling : $('.pc-ui-drawer-overlay, .pc-ui-drawer-overlay');
        if (overlay) overlay.setAttribute('data-state', 'open');
        hydrateOverlayPaper(el);
      }
    },
    close(targetId) {
      const el = typeof targetId === 'string' ? $(targetId) : targetId;
      if (el) {
        el.setAttribute('data-state', 'closed');
        $$('.pc-ui-drawer-overlay[data-state="open"], .pc-ui-drawer-overlay[data-state="open"]').forEach(o => o.setAttribute('data-state', 'closed'));
      }
    },
    init(context = document) {
      onDoc('Drawer', 'click', (e) => {
        const trigger = e.target.closest('[data-drawer-target]');
        if (trigger) {
          e.preventDefault();
          Drawer.open(trigger.getAttribute('data-drawer-target'));
          return;
        }

        if (e.target.classList.contains('pc-ui-drawer-overlay') || e.target.classList.contains('pc-ui-drawer-overlay')) {
          $$('.pc-ui-drawer-content[data-state="open"], .pc-ui-drawer-content[data-state="open"]').forEach(d => Drawer.close(d));
        }
      });

      // Esc로 닫기 (대화상자·시트·알림 대화상자와 같은 동작)
      onDoc('Drawer', 'keydown', (e) => {
        if (e.key === 'Escape') {
          $$('.pc-ui-drawer-content[data-state="open"]').forEach(d => Drawer.close(d));
        }
      });
    }
  };

  /* ==========================================================================
     19. DROPDOWN MENU (Fanning bookmark strip menu with paper hover state)
     ========================================================================== */
  const DropdownMenu = {
    init(context = document) {
      onDoc('DropdownMenu', 'click', (e) => {
        const trigger = e.target.closest('.pc-ui-dropdown-menu-trigger, .pc-ui-dropdown-menu-trigger');
        const allMenus = $$('.pc-ui-dropdown-menu, .pc-ui-dropdown-menu');

        if (trigger) {
          const menu = trigger.closest('.pc-ui-dropdown-menu, .pc-ui-dropdown-menu');
          const isOpen = menu.getAttribute('data-state') === 'open';
          allMenus.forEach(m => m.setAttribute('data-state', 'closed'));
          trigger.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
          if (!isOpen) {
            menu.setAttribute('data-state', 'open');
            hydrateOverlayPaper(menu);   // 열리는 순간 메뉴 색지를 즉시 수화
            keepInViewport($('.pc-ui-dropdown-menu-content', menu));
          }
          return;
        }

        const item = e.target.closest('.pc-ui-dropdown-menu-item, .pc-ui-dropdown-menu-item');
        if (item) {
          const menu = item.closest('.pc-ui-dropdown-menu, .pc-ui-dropdown-menu');
          if (menu) {
            menu.setAttribute('data-state', 'closed');
            const t = $('.pc-ui-dropdown-menu-trigger', menu);
            if (t) { t.setAttribute('aria-expanded', 'false'); t.focus(); }
          }
          return;
        }

        if (!e.target.closest('.pc-ui-dropdown-menu, .pc-ui-dropdown-menu')) {
          allMenus.forEach(m => m.setAttribute('data-state', 'closed'));
        }
      });

      // Esc: 열린 메뉴를 닫고 트리거로 포커스를 돌려준다
      onDoc('DropdownMenu', 'keydown', (e) => {
        if (e.key !== 'Escape') return;
        const open = $('.pc-ui-dropdown-menu[data-state="open"]');
        if (!open) return;
        open.setAttribute('data-state', 'closed');
        const t = $('.pc-ui-dropdown-menu-trigger', open);
        if (t) { t.setAttribute('aria-expanded', 'false'); t.focus(); }
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
        const item = field.closest('.pc-ui-form-item, .pc-ui-form-item');
        let msg = item ? item.querySelector('.pc-ui-form-message, .pc-ui-form-message') : null;
        if (!field.value.trim()) {
          valid = false;
          if (!msg && item) {
            msg = document.createElement('div');
            msg.className = 'pc-ui-form-message';
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
      $$('.pc-ui-form, .pc-ui-form', context).forEach(f => {
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
      $$('.pc-ui-hover-card, .pc-ui-hover-card', context).forEach(card => {
        if (card._pcInit) return;
        card._pcInit = true;

        let timer;
        card.addEventListener('mouseenter', () => {
          clearTimeout(timer);
          timer = setTimeout(() => {
            card.setAttribute('data-state', 'open');
            keepInViewport($('.pc-ui-hover-card-content', card));
          }, 120);
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
      onDoc('Input', 'click', (e) => {
        const togglePassword = e.target.closest('[data-password-toggle]');
        if (togglePassword) {
          const wrapper = togglePassword.closest('.pc-ui-input-wrapper, .pc-ui-input-wrapper') || togglePassword.parentElement;
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
      $$('.pc-ui-otp-shape-btn', otpWrapper).forEach(btn => {
        btn.classList.toggle('is-active', btn.dataset.shape === shapeKey);
      });

      // Update slot background SVGs
      $$('.pc-ui-input-otp-slot-wrap', otpWrapper).forEach(wrap => {
        wrap.setAttribute('data-shape', shapeKey);
        const bgLayer = wrap.querySelector('.pc-ui-otp-bg-svg-layer');
        if (bgLayer) {
          bgLayer.innerHTML = OTP_BG_SHAPES[shapeKey];
        }
      });
    },

    init(context = document) {
      $$('.pc-ui-otp-wrapper, .pc-ui-input-otp, .pc-ui-input-otp', context).forEach(otpEl => {
        if (otpEl._pcInit) return;
        otpEl._pcInit = true;

        const wrapper = otpEl.closest('.pc-ui-otp-wrapper') || otpEl;

        // Shape switcher button events
        $$('.pc-ui-otp-shape-btn', wrapper).forEach(btn => {
          btn.addEventListener('click', () => {
            this.setShape(wrapper, btn.dataset.shape);
            if (typeof window.showPaperToast === 'function') {
              window.showPaperToast(`OTP 배경이 [${btn.textContent}] 스타일로 변경되었습니다.`, 'mint');
            }
          });
        });

        // Initialize background SVGs if slots have layers
        $$('.pc-ui-input-otp-slot-wrap', wrapper).forEach(wrap => {
          let bgLayer = wrap.querySelector('.pc-ui-otp-bg-svg-layer');
          if (!bgLayer) {
            bgLayer = document.createElement('div');
            bgLayer.className = 'pc-ui-otp-bg-svg-layer';
            wrap.prepend(bgLayer);
          }
          const initialShape = wrap.getAttribute('data-shape') || this.currentShape;
          bgLayer.innerHTML = OTP_BG_SHAPES[initialShape] || OTP_BG_SHAPES['postage-stamp'];
        });

        // Inputs logic
        const inputs = $$('.pc-ui-input-otp-input', wrapper);
        inputs.forEach((input, idx) => {
          const wrap = input.closest('.pc-ui-input-otp-slot-wrap');

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
              inputs[idx - 1].closest('.pc-ui-input-otp-slot-wrap')?.classList.remove('is-filled');
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
              inputs[idx + i].closest('.pc-ui-input-otp-slot-wrap')?.classList.add('is-filled');
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
      onDoc('Label', 'click', (e) => {
        const label = e.target.closest('.pc-ui-label, .pc-ui-label');
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
  // 열린 패널이 뷰포트 오른쪽 밖으로 나가면 왼쪽으로 당긴다 (좁은 화면에서 가로 넘침 방지)
  function clampToViewport(panel) {
    if (!panel) return;
    panel.style.left = '';
    const over = panel.getBoundingClientRect().right - (document.documentElement.clientWidth - 8);
    if (over > 0) panel.style.left = `${-over}px`;
  }

  const Menubar = {
    init(context = document) {
      $$('.pc-ui-menubar, .pc-ui-menubar', context).forEach(mb => {
        if (mb._pcInit) return;
        mb._pcInit = true;

        let activeMenu = null;

        // 메뉴 상태를 한곳에서 맞춘다: 메뉴(data-state), 트리거(data-state + aria-expanded).
        // 페이퍼 엔진은 aria-expanded를 모르므로 트리거의 data-state="open"으로 활성 색지를 만든다.
        const setMenuState = (menu, open) => {
          menu.setAttribute('data-state', open ? 'open' : 'closed');
          const t = $('.pc-ui-menubar-trigger', menu);
          if (t) {
            t.setAttribute('data-state', open ? 'open' : 'closed');
            t.setAttribute('aria-expanded', open ? 'true' : 'false');
          }
        };
        const closeAll = () => {
          $$('.pc-ui-menubar-menu', mb).forEach(m => setMenuState(m, false));
          activeMenu = null;
        };
        const openMenu = (menu, focusFirst) => {
          closeAll();
          setMenuState(menu, true);
          activeMenu = menu;
          clampToViewport($('.pc-ui-menubar-content', menu));
          if (focusFirst) {
            const first = $('.pc-ui-menubar-item', menu);
            if (first) first.focus();
          }
        };

        mb.addEventListener('click', (e) => {
          const item = e.target.closest('.pc-ui-menubar-item');
          if (item) {   // 항목을 고르면 닫고 트리거로 포커스를 돌려준다
            const m = item.closest('.pc-ui-menubar-menu');
            closeAll();
            const t = m && $('.pc-ui-menubar-trigger', m);
            if (t) t.focus();
            return;
          }
          const trigger = e.target.closest('.pc-ui-menubar-trigger');
          if (!trigger) return;

          const menu = trigger.closest('.pc-ui-menubar-menu');
          if (!menu) return;

          if (menu.getAttribute('data-state') === 'open') closeAll();
          else openMenu(menu, false);
        });

        mb.addEventListener('mouseenter', (e) => {
          const trigger = e.target.closest && e.target.closest('.pc-ui-menubar-trigger');
          const current = $('.pc-ui-menubar-menu[data-state="open"]', mb);
          if (trigger && current) {
            const menu = trigger.closest('.pc-ui-menubar-menu');
            if (menu && menu !== current) openMenu(menu, false);
          }
        }, true);

        // 키보드: 좌우로 트리거 이동, 아래/Enter로 열기, 위아래로 항목 이동, Esc로 닫고 트리거 복귀
        mb.addEventListener('keydown', (e) => {
          const triggers = $$('.pc-ui-menubar-trigger', mb);
          const trigger = e.target.closest('.pc-ui-menubar-trigger');
          const item = e.target.closest('.pc-ui-menubar-item');
          if (trigger) {
            const idx = triggers.indexOf(trigger);
            const menu = trigger.closest('.pc-ui-menubar-menu');
            const wasOpen = !!$('.pc-ui-menubar-menu[data-state="open"]', mb);
            let next = null;
            if (e.key === 'ArrowRight') next = triggers[(idx + 1) % triggers.length];
            else if (e.key === 'ArrowLeft') next = triggers[(idx - 1 + triggers.length) % triggers.length];
            else if (e.key === 'Home') next = triggers[0];
            else if (e.key === 'End') next = triggers[triggers.length - 1];
            if (next) {
              e.preventDefault();
              next.focus();
              if (wasOpen) openMenu(next.closest('.pc-ui-menubar-menu'), false);
            } else if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
              e.preventDefault();
              openMenu(menu, true);
            } else if (e.key === 'Escape' && wasOpen) {
              e.preventDefault();
              closeAll();
            }
          } else if (item) {
            const menu = item.closest('.pc-ui-menubar-menu');
            const items = $$('.pc-ui-menubar-item', menu);
            const idx = items.indexOf(item);
            if (e.key === 'ArrowDown') { e.preventDefault(); items[(idx + 1) % items.length].focus(); }
            else if (e.key === 'ArrowUp') { e.preventDefault(); items[(idx - 1 + items.length) % items.length].focus(); }
            else if (e.key === 'Home') { e.preventDefault(); items[0].focus(); }
            else if (e.key === 'End') { e.preventDefault(); items[items.length - 1].focus(); }
            else if (e.key === 'Escape' || e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
              e.preventDefault();
              const t = $('.pc-ui-menubar-trigger', menu);
              if (e.key === 'Escape') { closeAll(); t.focus(); }
              else {
                const i = triggers.indexOf(t);
                const nt = triggers[(i + (e.key === 'ArrowRight' ? 1 : triggers.length - 1)) % triggers.length];
                openMenu(nt.closest('.pc-ui-menubar-menu'), true);
              }
            }
          }
        });
      });

      if (Menubar._docBound) return;
      Menubar._docBound = true;
      onDoc('Menubar', 'click', (e) => {
        if (!e.target.closest('.pc-ui-menubar')) {
          $$('.pc-ui-menubar-menu[data-state="open"]').forEach(m => {
            m.setAttribute('data-state', 'closed');
            const t = $('.pc-ui-menubar-trigger', m);
            if (t) { t.setAttribute('data-state', 'closed'); t.setAttribute('aria-expanded', 'false'); }
          });
        }
      });
    }
  };

  /* ==========================================================================
     26. NAVIGATION MENU (Tabs with sliding pastel underlay indicator)
     ========================================================================== */
  const NavMenu = {
    updateIndicator(nav, trigger) {
      let indicator = nav.querySelector('.pc-ui-navigation-menu-indicator, .pc-ui-nav-menu-indicator');
      if (!indicator) {
        indicator = document.createElement('div');
        indicator.className = 'pc-ui-navigation-menu-indicator';
        const list = nav.querySelector('.pc-ui-navigation-menu-list, .pc-ui-nav-menu-list');
        if (list) list.appendChild(indicator);
      }
      if (trigger && indicator) {
        indicator.style.left = `${trigger.offsetLeft}px`;
        indicator.style.width = `${trigger.offsetWidth}px`;
      }
    },
    // 리본 내비게이션(.pc-ui-nav-pills): 링크는 현재 위치(aria-current)를 옮기고, 트리거는 menu 패널을 연다.
    initPills(context) {
      $$('.pc-ui-nav-pills', context).forEach(nav => {
        if (nav._pcInit) return;
        nav._pcInit = true;

        const closePanels = (except) => {
          $$('.pc-ui-nav-pill-wrap', nav).forEach(w => {
            if (w === except) return;
            const t = $('.pc-ui-nav-pill', w);
            const p = $('.pc-ui-nav-pill-panel', w);
            w.setAttribute('data-state', 'closed');
            if (t) { t.setAttribute('aria-expanded', 'false'); t.setAttribute('data-state', 'closed'); }
            if (p) p.hidden = true;
          });
        };
        const openPanel = (wrap) => {
          const t = $('.pc-ui-nav-pill', wrap);
          const p = $('.pc-ui-nav-pill-panel', wrap);
          closePanels(wrap);
          wrap.setAttribute('data-state', 'open');
          t.setAttribute('aria-expanded', 'true');
          t.setAttribute('data-state', 'open');
          p.hidden = false;
          clampToViewport(p);
        };

        nav.addEventListener('click', (e) => {
          const pill = e.target.closest('a.pc-ui-nav-pill');
          const link = e.target.closest('.pc-ui-nav-link');
          const trigger = e.target.closest('button.pc-ui-nav-pill');
          // 데모 링크(href 없음·"#"·data-pc-demo)만 이동을 막고, 실제 URL은 브라우저가 그대로 이동하게 둔다
          const isDemo = (a) => !a || a.hasAttribute('data-pc-demo') || ['', '#'].includes((a.getAttribute('href') || '').trim());
          if (pill) {
            if (isDemo(pill)) e.preventDefault();
            $$('a.pc-ui-nav-pill', nav).forEach(a => { a.classList.remove('is-active'); a.removeAttribute('aria-current'); });
            pill.classList.add('is-active');
            pill.setAttribute('aria-current', 'page');
            closePanels(null);
          } else if (link) {
            if (isDemo(link)) e.preventDefault();
            closePanels(null);
            const lw = link.closest('.pc-ui-nav-pill-wrap');
            const t = lw && $('button.pc-ui-nav-pill', lw);
            if (t) t.focus();
          } else if (trigger) {
            const wrap = trigger.closest('.pc-ui-nav-pill-wrap');
            if (wrap.getAttribute('data-state') === 'open') closePanels(null);
            else openPanel(wrap);
          }
        });

        nav.addEventListener('keydown', (e) => {
          if (e.key !== 'Escape') return;
          const open = $('.pc-ui-nav-pill-wrap[data-state="open"]', nav);
          if (!open) return;
          closePanels(null);
          const t = $('button.pc-ui-nav-pill', open);
          if (t) t.focus();
        });
        document.addEventListener('click', (e) => {
          if (!nav.contains(e.target)) closePanels(null);
        });
      });
    },
    init(context = document) {
      NavMenu.initPills(context);
      $$('.pc-ui-navigation-menu, .pc-ui-nav-menu, .pc-ui-navigation-menu', context).forEach(nav => {
        if (nav._pcInit) return;
        nav._pcInit = true;

        const active = nav.querySelector('.pc-ui-navigation-menu-trigger.is-active, .pc-ui-nav-menu-trigger.is-active');
        if (active) NavMenu.updateIndicator(nav, active);

        nav.addEventListener('click', (e) => {
          const trigger = e.target.closest('.pc-ui-navigation-menu-trigger, .pc-ui-nav-menu-trigger');
          if (!trigger) return;

          $$('.pc-ui-navigation-menu-trigger, .pc-ui-nav-menu-trigger', nav).forEach(t => t.classList.remove('is-active'));
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
      $$('.pc-ui-pagination, .pc-ui-pagination', context).forEach(pag => {
        if (pag._pcInit) return;
        pag._pcInit = true;

        pag.addEventListener('click', (e) => {
          let item = e.target.closest('.pc-ui-pagination-item:not(.is-nav), .pc-ui-pagination-btn:not(.is-nav)');
          if (!item) {
            // 이전/다음 버튼: 현재 페이지를 한 칸 옮긴다 (.pc-ui-pagination-btn 마크업 전용)
            const nav = e.target.closest('.pc-ui-pagination-btn.is-nav[data-dir]');
            if (!nav) return;
            const pages = $$('.pc-ui-pagination-btn:not(.is-nav)', pag);
            const cur = pages.findIndex(p => p.classList.contains('is-active'));
            const to = Math.max(0, Math.min(pages.length - 1, cur + (nav.getAttribute('data-dir') === 'next' ? 1 : -1)));
            item = pages[to];
            if (!item) return;
          }

          $$('.pc-ui-pagination-item, .pc-ui-pagination-btn', pag).forEach(it => {
            it.classList.remove('is-active');
            it.removeAttribute('aria-current');
          });
          item.classList.add('is-active');
          item.setAttribute('aria-current', 'page');

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
      onDoc('Popover', 'click', (e) => {
        const trigger = e.target.closest('.pc-ui-popover-trigger, .pc-ui-popover-trigger');
        const allPopovers = $$('.pc-ui-popover, .pc-ui-popover');

        if (trigger) {
          const pop = trigger.closest('.pc-ui-popover, .pc-ui-popover');
          const isOpen = pop.getAttribute('data-state') === 'open';
          allPopovers.forEach(p => p.setAttribute('data-state', 'closed'));
          trigger.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
          if (!isOpen) {
            pop.setAttribute('data-state', 'open');
            hydrateOverlayPaper(pop);   // 열리는 순간 팝오버 색지를 즉시 수화
            keepInViewport($('.pc-ui-popover-content', pop));
          }
          return;
        }

        if (!e.target.closest('.pc-ui-popover, .pc-ui-popover')) {
          allPopovers.forEach(p => p.setAttribute('data-state', 'closed'));
        }
      });

      // Esc: 열린 팝오버를 닫고 트리거로 포커스를 돌려준다
      onDoc('Popover', 'keydown', (e) => {
        if (e.key !== 'Escape') return;
        const open = $('.pc-ui-popover[data-state="open"]');
        if (!open) return;
        open.setAttribute('data-state', 'closed');
        const t = $('.pc-ui-popover-trigger', open);
        if (t) { t.setAttribute('aria-expanded', 'false'); t.focus(); }
      });
    }
  };

  /* ==========================================================================
     29. PROGRESS (Layered pastel paper fill bar moving along an inset track)
     ========================================================================== */
  const Progress = {
    setValue(el, val) {
      const clamped = Math.max(0, Math.min(100, val));
      const ind = el.querySelector('.pc-ui-progress-indicator, .pc-ui-progress-indicator');
      if (ind) ind.style.width = `${clamped}%`;
      el.setAttribute('data-value', clamped);
      if (el.getAttribute('role') === 'progressbar') el.setAttribute('aria-valuenow', clamped);
    },
    init(context = document) {
      $$('.pc-ui-progress, .pc-ui-progress', context).forEach(prog => {
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
      const group = item.closest('.pc-ui-radio-group, .pc-ui-radio-group');
      if (!group) return;

      $$('.pc-ui-radio-item, .pc-ui-radio-item', group).forEach(it => it.setAttribute('data-state', 'unchecked'));
      item.setAttribute('data-state', 'checked');

      const val = item.getAttribute('data-value') || '';
      group.setAttribute('data-value', val);

      group.dispatchEvent(new CustomEvent('change', {
        bubbles: true,
        detail: { value: val }
      }));
    },
    init(context = document) {
      onDoc('RadioGroup', 'click', (e) => {
        const item = e.target.closest('.pc-ui-radio-item, .pc-ui-radio-item');
        if (item) RadioGroup.select(item);
      });
    }
  };

  /* ==========================================================================
     31. RESIZABLE (Paper fold crease splitter with grip dots)
     ========================================================================== */
  const Resizable = {
    init(context = document) {
      $$('.pc-ui-resizable-group, .pc-ui-resizable-group, .pc-ui-resizable-panel-group', context).forEach(group => {
        if (group._pcInit) return;
        group._pcInit = true;

        const handle = $('.pc-ui-resizable-handle, .pc-ui-resizable-handle', group);
        const panels = $$('.pc-ui-resizable-panel, .pc-ui-resizable-panel', group);
        if (!handle || panels.length < 2) return;

        // 손잡이: 홈(track) 위에 얹힌 knob 색지 + 3D 컬러 grip 아이콘. 키보드와 터치로도 조절한다.
        if (!handle.querySelector('.pc-ui-resizable-grip')) {
          handle.insertAdjacentHTML('beforeend',
            '<span class="pc-ui-resizable-grip" data-pc-paper="knob" data-pc-tone="cream" aria-hidden="true">' +
            '<span class="pc-inline-icon is-xs" data-icon="drag-handle"></span></span>');
          hydrateIcons(handle);
        }
        handle.setAttribute('role', 'separator');
        handle.setAttribute('aria-orientation', 'vertical');
        if (!handle.hasAttribute('tabindex')) handle.setAttribute('tabindex', '0');

        let current = 50;
        const apply = (pct) => {
          current = Math.max(15, Math.min(85, pct));
          panels[0].style.flex = `0 0 ${current}%`;
          panels[1].style.flex = `1 1 ${100 - current}%`;
          handle.setAttribute('aria-valuenow', String(Math.round(current)));
          handle.setAttribute('aria-valuemin', '15');
          handle.setAttribute('aria-valuemax', '85');
        };
        const isDraggingRef = { on: false };

        handle.addEventListener('pointerdown', (e) => {
          isDraggingRef.on = true;
          if (handle.setPointerCapture) handle.setPointerCapture(e.pointerId);
          e.preventDefault();
        });
        const end = () => { isDraggingRef.on = false; };
        handle.addEventListener('pointerup', end);
        handle.addEventListener('pointercancel', end);
        handle.addEventListener('pointermove', (e) => {
          if (!isDraggingRef.on) return;
          const rect = group.getBoundingClientRect();
          apply(((e.clientX - rect.left) / rect.width) * 100);
        });
        handle.addEventListener('keydown', (e) => {
          if (e.key === 'ArrowLeft') { e.preventDefault(); apply(current - 5); }
          else if (e.key === 'ArrowRight') { e.preventDefault(); apply(current + 5); }
          else if (e.key === 'Home') { e.preventDefault(); apply(15); }
          else if (e.key === 'End') { e.preventDefault(); apply(85); }
        });
        // 기존 CSS 크기는 건드리지 않고, 현재 비율만 읽어 aria-valuenow에 반영한다
        const gw = group.getBoundingClientRect().width;
        if (gw > 0) {
          current = (panels[0].getBoundingClientRect().width / gw) * 100;
          handle.setAttribute('aria-valuenow', String(Math.round(current)));
          handle.setAttribute('aria-valuemin', '15');
          handle.setAttribute('aria-valuemax', '85');
        }
      });
    }
  };

  /* ==========================================================================
     32. SCROLL AREA (Parchment scroll well with custom paper thumb bar)
     ========================================================================== */
  const ScrollArea = {
    init(context = document) {
      $$('.pc-ui-scroll-area, .pc-ui-scroll-area', context).forEach(sa => {
        if (sa._pcInit) return;
        sa._pcInit = true;

        const viewport = $('.pc-ui-scroll-viewport, .pc-ui-scroll-viewport', sa);
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
    // 열림/닫힘을 data-state + aria-expanded에 함께 기록한다. 열릴 때 메뉴 색지를 즉시 수화해 깜빡임을 막는다.
    setOpen(sel, open) {
      sel.setAttribute('data-state', open ? 'open' : 'closed');
      const trigger = $('.pc-ui-select-trigger', sel);
      if (trigger) trigger.setAttribute('aria-expanded', open ? 'true' : 'false');
      if (open) {
        const menu = $('.pc-ui-select-content', sel);
        if (menu && window.PaperCutUI && window.PaperCutUI.paper) window.PaperCutUI.paper.hydrate(menu);
      }
    },
    choose(sel, item) {
      const valEl = $('.pc-ui-select-value, .pc-ui-select-value', sel);
      const text = item.getAttribute('data-value') || (item.querySelector('.pc-ui-item-text') || item.querySelector('span') || item).textContent.trim();
      if (valEl) valEl.textContent = text;
      const itemIcon = item.querySelector('.pc-inline-icon:not(.pc-ui-option-mark)');
      const triggerIcon = sel.querySelector('.pc-ui-select-trigger .pc-trigger-content .pc-inline-icon, .pc-ui-select-trigger > .pc-inline-icon');
      if (itemIcon && triggerIcon) {
        const iconAttr = itemIcon.getAttribute('data-icon');
        if (iconAttr) {
          triggerIcon.setAttribute('data-icon', iconAttr);
          if (typeof window.hydratePapercutIcons === 'function') window.hydratePapercutIcons(sel);
        }
      }
      $$('.pc-ui-select-item', sel).forEach(it => it.setAttribute('aria-selected', it === item ? 'true' : 'false'));
      Select.setOpen(sel, false);
      sel.setAttribute('data-value', text);
      sel.dispatchEvent(new CustomEvent('change', {
        bubbles: true,
        detail: { value: sel.getAttribute('data-value') }
      }));
    },
    init(context = document) {
      onDoc('Select', 'click', (e) => {
        const trigger = e.target.closest('.pc-ui-select-trigger, .pc-ui-select-trigger');
        const allSelects = $$('.pc-ui-select, .pc-ui-select');

        if (trigger) {
          const sel = trigger.closest('.pc-ui-select, .pc-ui-select');
          const isOpen = sel.getAttribute('data-state') === 'open';
          allSelects.forEach(s => Select.setOpen(s, false));
          if (!isOpen) Select.setOpen(sel, true);
          return;
        }

        const item = e.target.closest('.pc-ui-select-item, .pc-ui-select-item');
        if (item) {
          Select.choose(item.closest('.pc-ui-select, .pc-ui-select'), item);
          return;
        }

        if (!e.target.closest('.pc-ui-select, .pc-ui-select')) {
          allSelects.forEach(s => Select.setOpen(s, false));
        }
      });

      // 키보드: 트리거에서 ↓/↑/Enter/Space로 열고, 옵션에서 ↑↓ Home End 이동, Enter/Space 선택, Esc 닫고 트리거로 복귀
      onDoc('Select', 'keydown', (e) => {
        const sel = e.target.closest && e.target.closest('.pc-ui-select');
        if (!sel) return;
        const trigger = $('.pc-ui-select-trigger', sel);
        const items = $$('.pc-ui-select-item', sel);
        const isOpen = sel.getAttribute('data-state') === 'open';
        const onItem = e.target.closest('.pc-ui-select-item');

        if (e.key === 'Escape' && isOpen) {
          e.preventDefault();
          Select.setOpen(sel, false);
          if (trigger) trigger.focus();
          return;
        }
        if (e.target === trigger && (e.key === 'ArrowDown' || e.key === 'ArrowUp')) {
          e.preventDefault();
          Select.setOpen(sel, true);
          const cur = items.find(it => it.getAttribute('aria-selected') === 'true') || items[0];
          if (cur) cur.focus();
          return;
        }
        if (onItem) {
          const i = items.indexOf(onItem);
          let next = null;
          if (e.key === 'ArrowDown') next = items[Math.min(items.length - 1, i + 1)];
          else if (e.key === 'ArrowUp') next = items[Math.max(0, i - 1)];
          else if (e.key === 'Home') next = items[0];
          else if (e.key === 'End') next = items[items.length - 1];
          if (next) { e.preventDefault(); next.focus(); return; }
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            Select.choose(sel, onItem);
            if (trigger) trigger.focus();
          } else if (e.key === 'Tab') {
            Select.setOpen(sel, false);
          }
        }
      });
    }
  };

  /* ==========================================================================
     34. SEPARATOR (Perforated dashed cutline, deckle tear line, washi tape)
     ========================================================================== */
  const Separator = {
    init(context = document) {
      $$('.pc-ui-separator, .pc-ui-separator', context).forEach(sep => {
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
        const overlay = el.previousElementSibling?.classList.contains('pc-ui-sheet-overlay')
          ? el.previousElementSibling
          : $('.pc-ui-sheet-overlay, .pc-ui-sheet-overlay');
        if (overlay) overlay.setAttribute('data-state', 'open');
        document.body.style.overflow = 'hidden';
        hydrateOverlayPaper(el);
      }
    },
    close(targetId) {
      const el = typeof targetId === 'string' ? $(targetId) : targetId;
      if (el) {
        el.setAttribute('data-state', 'closed');
        $$('.pc-ui-sheet-overlay[data-state="open"], .pc-ui-sheet-overlay[data-state="open"]').forEach(o => o.setAttribute('data-state', 'closed'));
        document.body.style.overflow = '';
      }
    },
    init(context = document) {
      onDoc('Sheet', 'click', (e) => {
        const trigger = e.target.closest('[data-sheet-target]');
        if (trigger) {
          e.preventDefault();
          Sheet.open(trigger.getAttribute('data-sheet-target'));
          return;
        }

        const closeBtn = e.target.closest('.pc-ui-sheet-close, .pc-ui-sheet-close');
        if (closeBtn) {
          const content = closeBtn.closest('.pc-ui-sheet-content, .pc-ui-sheet-content');
          if (content) Sheet.close(content);
          return;
        }

        if (e.target.classList.contains('pc-ui-sheet-overlay') || e.target.classList.contains('pc-ui-sheet-overlay')) {
          $$('.pc-ui-sheet-content[data-state="open"], .pc-ui-sheet-content[data-state="open"]').forEach(c => Sheet.close(c));
        }
      });

      onDoc('Sheet', 'keydown', (e) => {
        if (e.key === 'Escape') {
          $$('.pc-ui-sheet-content[data-state="open"], .pc-ui-sheet-content[data-state="open"]').forEach(c => Sheet.close(c));
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
      el.classList.toggle('pc-ui-skeleton', loading);
    },
    init() {}
  };

  /* ==========================================================================
     37. SLIDER (Paper ruler track with folded origami triangular thumb)
     ========================================================================== */
  const Slider = {
    init(context = document) {
      $$('.pc-ui-slider, .pc-ui-slider', context).forEach(slider => {
        if (slider._pcInit) return;
        slider._pcInit = true;

        const thumb = $('.pc-ui-slider-thumb, .pc-ui-slider-thumb', slider);
        const range = $('.pc-ui-slider-range, .pc-ui-slider-range', slider);
        let isDragging = false;

        function updatePosition(clientX) {
          const rect = slider.getBoundingClientRect();
          if (rect.width <= 0) return;
          const offsetX = Math.max(0, Math.min(rect.width, clientX - rect.left));
          applyPct(Math.round((offsetX / rect.width) * 100));
        }

        function applyPct(pct) {
          if (thumb) {
            thumb.style.left = `${pct}%`;
            thumb.setAttribute('aria-valuenow', pct);
          }
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

        // 키보드: 방향키 ±1, PageUp/PageDown ±10, Home/End (thumb에 role="slider"가 있을 때)
        if (thumb) {
          thumb.addEventListener('keydown', (e) => {
            const cur = parseInt(slider.getAttribute('data-value'), 10) || 0;
            const step = { ArrowRight: 1, ArrowUp: 1, ArrowLeft: -1, ArrowDown: -1, PageUp: 10, PageDown: -10 }[e.key];
            let next = null;
            if (step !== undefined) next = cur + step;
            else if (e.key === 'Home') next = 0;
            else if (e.key === 'End') next = 100;
            if (next === null) return;
            e.preventDefault();
            applyPct(Math.max(0, Math.min(100, next)));
          });
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
      onDoc('Switch', 'click', (e) => {
        const sw = e.target.closest('.pc-ui-switch, .pc-ui-switch');
        if (sw) {
          e.preventDefault();
          Switch.toggle(sw);
        }
      });

      onDoc('Switch', 'keydown', (e) => {
        if (e.key === ' ' || e.key === 'Enter') {
          const focused = document.activeElement;
          if (focused && (focused.classList.contains('pc-ui-switch') || focused.classList.contains('pc-ui-switch'))) {
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
      // 선택 가능한 표(data-selectable): 행을 클릭하거나 Enter·Space를 누르면 aria-selected가 토글된다
      $$('[data-selectable] tbody tr', context).forEach(row => {
        if (row._pcSelInit) return;
        row._pcSelInit = true;
        if (!row.hasAttribute('tabindex')) row.setAttribute('tabindex', '0');
        if (!row.hasAttribute('aria-selected')) row.setAttribute('aria-selected', 'false');
        const toggle = () => row.setAttribute('aria-selected', row.getAttribute('aria-selected') === 'true' ? 'false' : 'true');
        row.addEventListener('click', toggle);
        row.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }
        });
      });

      $$('.pc-ui-table th[data-sortable], .pc-ui-table th[data-sortable]', context).forEach(th => {
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
      $$('.pc-ui-tabs, .pc-ui-tabs', context).forEach(tabs => {
        if (tabs._pcInit) return;
        tabs._pcInit = true;

        tabs.addEventListener('click', (e) => {
          const trigger = e.target.closest('.pc-ui-tabs-trigger, .pc-ui-tabs-trigger');
          if (!trigger) return;

          const targetValue = trigger.getAttribute('data-value');
          if (!targetValue) return;

          $$('.pc-ui-tabs-trigger, .pc-ui-tabs-trigger', tabs).forEach(t => t.setAttribute('data-state', 'inactive'));
          trigger.setAttribute('data-state', 'active');

          $$('.pc-ui-tabs-content, .pc-ui-tabs-content', tabs).forEach(content => {
            const val = content.getAttribute('data-value');
            content.setAttribute('data-state', val === targetValue ? 'active' : 'inactive');
          });

          tabs.dispatchEvent(new CustomEvent('tabs-change', {
            bubbles: true,
            detail: { value: targetValue }
          }));
        });
      });
      Tabs.initFolderTabs(context);
    },

    // 폴더 탭(.pc-ui-folder-tabs): role=tablist, 클릭·방향키·Home/End, aria-selected + aria-controls 패널 전환
    initFolderTabs(context = document) {
      $$('.pc-ui-folder-tabs[role="tablist"]', context).forEach(list => {
        if (list._pcInit) return;
        list._pcInit = true;

        const tabsOf = () => $$('.pc-ui-folder-tab[role="tab"]', list);
        const select = (tab, focus) => {
          tabsOf().forEach(t => {
            const on = t === tab;
            t.setAttribute('aria-selected', on ? 'true' : 'false');
            t.setAttribute('tabindex', on ? '0' : '-1');
            t.classList.toggle('is-active', on);
            const panel = document.getElementById(t.getAttribute('aria-controls'));
            if (panel) panel.hidden = !on;
          });
          if (focus) tab.focus();
          list.dispatchEvent(new CustomEvent('tabs-change', { bubbles: true, detail: { value: tab.id } }));
        };

        list.addEventListener('click', (e) => {
          const tab = e.target.closest('.pc-ui-folder-tab[role="tab"]');
          if (tab) select(tab, false);
        });
        list.addEventListener('keydown', (e) => {
          const tab = e.target.closest('.pc-ui-folder-tab[role="tab"]');
          if (!tab) return;
          const all = tabsOf();
          const idx = all.indexOf(tab);
          let next = null;
          if (e.key === 'ArrowRight') next = all[(idx + 1) % all.length];
          else if (e.key === 'ArrowLeft') next = all[(idx - 1 + all.length) % all.length];
          else if (e.key === 'Home') next = all[0];
          else if (e.key === 'End') next = all[all.length - 1];
          if (!next) return;
          e.preventDefault();
          select(next, true);
        });
      });
    }
  };

  /* ==========================================================================
     41. TEXTAREA (Lined notebook paper well with ruled blue/gray hairlines)
     ========================================================================== */
  const Textarea = {
    init(context = document) {
      $$('.pc-ui-textarea[data-auto-resize="true"], .pc-ui-textarea[data-auto-resize="true"]', context).forEach(ta => {
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
      let viewport = $('.pc-ui-toast-viewport, .pc-ui-toast-viewport');
      if (!viewport) {
        viewport = document.createElement('div');
        viewport.className = 'pc-ui-toast-viewport';
        document.body.appendChild(viewport);
      }

      const toast = document.createElement('div');
      toast.className = `pc-ui-toast is-${variant}`;
      toast.setAttribute('data-state', 'open');

      let iconName = 'info';
      let tone = 'sky';
      if (variant === 'success') { iconName = 'check'; tone = 'mint'; }
      else if (variant === 'destructive') { iconName = 'alert-octagon'; tone = 'rose'; }
      else if (variant === 'warning') { iconName = 'warning'; tone = 'buttercup'; }
      // ticket 색지: 알림 종류가 톤으로 드러난다(info 하늘, success 민트, warning 버터컵, destructive 로즈)
      toast.setAttribute('data-pc-paper', 'ticket');
      toast.setAttribute('data-pc-tone', tone);
      toast.setAttribute('role', variant === 'destructive' ? 'alert' : 'status');

      toast.innerHTML = `
        <span class="pc-inline-icon is-sm pc-ui-toast-icon" data-icon="${iconName}"></span>
        <div class="pc-ui-toast-content">
          ${title ? `<h4 class="pc-ui-toast-title">${title}</h4>` : ''}
          ${description ? `<p class="pc-ui-toast-description">${description}</p>` : ''}
        </div>
        <button type="button" class="pc-ui-alert-close pc-ui-toast-close" aria-label="닫기">
          <span class="pc-inline-icon is-xs" data-icon="close"></span>
        </button>
      `;

      viewport.appendChild(toast);
      hydrateIcons(toast);
      hydrateOverlayPaper(toast);   // 토스트는 동적 생성이므로 지연 없이 즉시 수화

      const closeBtn = $('.pc-ui-toast-close', toast);
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
      onDoc('Toggle', 'click', (e) => {
        const toggle = e.target.closest('.pc-ui-toggle, .pc-ui-toggle');
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
      onDoc('ToggleGroup', 'click', (e) => {
        const item = e.target.closest('.pc-ui-toggle-group-item, .pc-ui-toggle-group-item');
        if (!item) return;

        const group = item.closest('.pc-ui-toggle-group, .pc-ui-toggle-group');
        if (!group) return;

        const isMultiple = group.getAttribute('data-type') === 'multiple';
        const isOn = item.getAttribute('data-state') === 'on';

        if (!isMultiple) {
          $$('.pc-ui-toggle-group-item, .pc-ui-toggle-group-item', group).forEach(it => {
            it.setAttribute('data-state', 'off');
            it.setAttribute('aria-pressed', 'false');
            it.classList.remove('is-active');
          });
          item.setAttribute('data-state', 'on');
          item.setAttribute('aria-pressed', 'true');
          item.classList.add('is-active');
        } else {
          const nextState = isOn ? 'off' : 'on';
          item.setAttribute('data-state', nextState);
          item.setAttribute('aria-pressed', isOn ? 'false' : 'true');
          item.classList.toggle('is-active', nextState === 'on');
        }
        item.dispatchEvent(new CustomEvent('change', { bubbles: true, detail: { state: item.getAttribute('data-state') } }));
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
        let tip = el.querySelector('.pc-ui-tooltip-content');
        if (!tip) {
          tip = document.createElement('div');
          tip.className = 'pc-ui-tooltip-content';
          tip.textContent = text;
          el.classList.add('pc-ui-tooltip-wrapper');
          el.appendChild(tip);
        }
        // 접근성: 말풍선을 role=tooltip으로 연결해 키보드 포커스에서도 읽히게 한다
        if (!tip.id) tip.id = `pc-tip-${Math.random().toString(36).slice(2, 8)}`;
        tip.setAttribute('role', 'tooltip');
        if (!el.hasAttribute('aria-describedby')) el.setAttribute('aria-describedby', tip.id);
      });
    }
  };

  /* ==========================================================================
     46. WOOD SHAVING PAPER CURL & PAPER FLUTTER SCATTER (Physics Motion Engine)
     ========================================================================== */

  /**
   * 2-Layer Wood Shaving Curl Transition
   * Replaces flat sliding with 3D cylindrical spiral rolling peel animation.
   * @param {HTMLElement} curSlide Current slide to roll away
   * @param {HTMLElement} nextSlide Next slide to reveal underneath
   * @param {Object} options Duration, radius, onComplete
   * @returns {Promise<void>}
   */
  function transitionWoodShavingCurl(curSlide, nextSlide, options = {}) {
    return new Promise((resolve) => {
      if (!curSlide) {
        if (typeof options.onComplete === 'function') options.onComplete();
        resolve();
        return;
      }

      const duration = options.duration !== undefined ? options.duration : 650;
      const radius = options.radius !== undefined ? options.radius : 42;
      const isReduced = typeof window !== 'undefined' && 
                        window.matchMedia && 
                        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      // Reduced motion shortcut (AC-2 compliance)
      if (isReduced || duration <= 1) {
        curSlide.style.setProperty('--pc-curl-progress', '1');
        if (nextSlide) {
          nextSlide.style.setProperty('--pc-curl-progress', '1');
        }
        if (typeof options.onComplete === 'function') options.onComplete();
        resolve();
        return;
      }

      curSlide.classList.add('pc-wood-curl-peel', 'is-curling');
      if (nextSlide) {
        nextSlide.classList.add('pc-wood-curl-underlayer');
      }

      const startTime = (typeof performance !== 'undefined' ? performance.now() : Date.now());

      function step(now) {
        const elapsed = Math.max(0, now - startTime);
        const rawT = Math.min(1, elapsed / duration);
        // Damped cubic transition with realistic paper peel acceleration
        const progress = rawT < 0.5 
          ? 4 * rawT * rawT * rawT 
          : 1 - Math.pow(-2 * rawT + 2, 3) / 2;

        curSlide.style.setProperty('--pc-curl-progress', progress.toFixed(4));
        const dynamicRadius = radius + Math.sin(progress * Math.PI) * 18;
        curSlide.style.setProperty('--pc-curl-radius', dynamicRadius.toFixed(1) + 'px');

        if (nextSlide) {
          nextSlide.style.setProperty('--pc-curl-progress', progress.toFixed(4));
        }

        if (rawT < 1) {
          if (typeof requestAnimationFrame === 'function') {
            requestAnimationFrame(step);
          } else {
            setTimeout(() => step((typeof performance !== 'undefined' ? performance.now() : Date.now())), 16);
          }
        } else {
          curSlide.style.setProperty('--pc-curl-progress', '1');
          curSlide.classList.remove('pc-wood-curl-peel', 'is-curling');
          if (nextSlide) {
            nextSlide.classList.remove('pc-wood-curl-underlayer');
            nextSlide.style.removeProperty('--pc-curl-progress');
          }
          if (typeof options.onComplete === 'function') options.onComplete();
          resolve();
        }
      }

      if (typeof requestAnimationFrame === 'function') {
        requestAnimationFrame(step);
      } else {
        step((typeof performance !== 'undefined' ? performance.now() : Date.now()));
      }
    });
  }

  /**
   * Interactive Pointer/Drag Gesture Handler for Wood Shaving Curl
   * Scales curl radius and progress in real-time with pointer drag distance and velocity.
   * On release, settles with spring damped oscillation to 0 or 1.
   * @param {HTMLElement} container Viewport containing slides
   * @param {Object} options Gesture config
   * @returns {{ destroy: Function }}
   */
  function attachWoodShavingGesture(container, options = {}) {
    if (!container) return { destroy: () => {} };

    const threshold = options.threshold !== undefined ? options.threshold : 60;
    const maxDrag = options.maxDrag !== undefined ? options.maxDrag : 220;
    const baseRadius = options.radius !== undefined ? options.radius : 42;

    let isDragging = false;
    let startY = 0;
    let lastY = 0;
    let lastTime = 0;
    let velocityY = 0;
    let curSlide = null;
    let nextSlide = null;
    let animFrameId = null;

    function getSlide() {
      if (typeof options.getCurrentSlide === 'function') return options.getCurrentSlide();
      return container.querySelector('.pc-wood-curl-card.is-active, .pc-wood-curl-card:first-child');
    }

    function getNext() {
      if (typeof options.getNextSlide === 'function') return options.getNextSlide();
      const cur = getSlide();
      return cur ? cur.nextElementSibling : container.querySelector('.pc-wood-curl-card:nth-child(2)');
    }

    function onPointerDown(e) {
      if (e.button !== undefined && e.button !== 0) return;
      isDragging = true;
      startY = e.clientY !== undefined ? e.clientY : (e.touches && e.touches[0] ? e.touches[0].clientY : 0);
      lastY = startY;
      lastTime = (typeof performance !== 'undefined' ? performance.now() : Date.now());
      velocityY = 0;

      curSlide = getSlide();
      nextSlide = getNext();

      if (curSlide) {
        curSlide.classList.add('pc-wood-curl-peel');
      }
      if (nextSlide) {
        nextSlide.classList.add('pc-wood-curl-underlayer');
      }

      if (typeof container.setPointerCapture === 'function' && e.pointerId !== undefined) {
        try { container.setPointerCapture(e.pointerId); } catch (_) {}
      }
    }

    function onPointerMove(e) {
      if (!isDragging) return;
      const y = e.clientY !== undefined ? e.clientY : (e.touches && e.touches[0] ? e.touches[0].clientY : 0);
      const now = (typeof performance !== 'undefined' ? performance.now() : Date.now());
      const dt = Math.max(1, now - lastTime);
      velocityY = (lastY - y) / dt; // positive = dragging upward
      lastY = y;
      lastTime = now;

      const deltaY = startY - y;
      const progress = Math.min(Math.max(deltaY / maxDrag, 0), 1);

      container.style.setProperty('--pc-curl-progress', progress.toFixed(4));
      const dynamicRadius = baseRadius + progress * 24;
      container.style.setProperty('--pc-curl-radius', dynamicRadius.toFixed(1) + 'px');

      if (curSlide) {
        curSlide.style.setProperty('--pc-curl-progress', progress.toFixed(4));
        curSlide.style.setProperty('--pc-curl-radius', dynamicRadius.toFixed(1) + 'px');
      }
      if (nextSlide) {
        nextSlide.style.setProperty('--pc-curl-progress', progress.toFixed(4));
      }

      if (typeof options.onProgress === 'function') {
        options.onProgress(progress);
      }
    }

    function settle(fromProgress, targetProgress, onDone) {
      const isReduced = typeof window !== 'undefined' && 
                        window.matchMedia && 
                        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (isReduced) {
        container.style.setProperty('--pc-curl-progress', targetProgress.toFixed(4));
        if (curSlide) curSlide.style.setProperty('--pc-curl-progress', targetProgress.toFixed(4));
        if (nextSlide) nextSlide.style.setProperty('--pc-curl-progress', targetProgress.toFixed(4));
        if (onDone) onDone();
        return;
      }

      // Spring damped harmonic oscillator simulation (mass = 1, stiffness = 160, damping = 16)
      let current = fromProgress;
      let velocity = (targetProgress - fromProgress) * 4 + velocityY * 0.1;
      const stiffness = 160;
      const damping = 16;
      let lastStepTime = (typeof performance !== 'undefined' ? performance.now() : Date.now());

      function stepSpring(now) {
        const dt = Math.min(0.04, Math.max(0.001, (now - lastStepTime) / 1000));
        lastStepTime = now;

        const springForce = -stiffness * (current - targetProgress);
        const dampingForce = -damping * velocity;
        const acceleration = springForce + dampingForce;

        velocity += acceleration * dt;
        current += velocity * dt;

        container.style.setProperty('--pc-curl-progress', current.toFixed(4));
        if (curSlide) curSlide.style.setProperty('--pc-curl-progress', current.toFixed(4));
        if (nextSlide) nextSlide.style.setProperty('--pc-curl-progress', current.toFixed(4));

        if (typeof options.onProgress === 'function') {
          options.onProgress(current);
        }

        if (Math.abs(current - targetProgress) < 0.005 && Math.abs(velocity) < 0.02) {
          container.style.setProperty('--pc-curl-progress', targetProgress.toFixed(4));
          if (curSlide) curSlide.style.setProperty('--pc-curl-progress', targetProgress.toFixed(4));
          if (nextSlide) nextSlide.style.setProperty('--pc-curl-progress', targetProgress.toFixed(4));
          if (onDone) onDone();
        } else {
          if (typeof requestAnimationFrame === 'function') {
            animFrameId = requestAnimationFrame(stepSpring);
          } else {
            setTimeout(() => stepSpring((typeof performance !== 'undefined' ? performance.now() : Date.now())), 16);
          }
        }
      }

      if (typeof requestAnimationFrame === 'function') {
        animFrameId = requestAnimationFrame(stepSpring);
      } else {
        stepSpring((typeof performance !== 'undefined' ? performance.now() : Date.now()));
      }
    }

    function onPointerUp(e) {
      if (!isDragging) return;
      isDragging = false;

      if (typeof container.releasePointerCapture === 'function' && e.pointerId !== undefined) {
        try { container.releasePointerCapture(e.pointerId); } catch (_) {}
      }

      const currentProg = parseFloat(container.style.getPropertyValue('--pc-curl-progress') || '0');
      const deltaY = startY - lastY;
      const shouldComplete = currentProg >= 0.35 || deltaY >= threshold || velocityY > 0.38;

      const target = shouldComplete ? 1 : 0;

      settle(currentProg, target, () => {
        if (target === 1) {
          if (curSlide) curSlide.classList.remove('pc-wood-curl-peel');
          if (nextSlide) nextSlide.classList.remove('pc-wood-curl-underlayer');
          if (typeof options.onSwipeNext === 'function') {
            options.onSwipeNext();
          }
        } else {
          if (curSlide) curSlide.classList.remove('pc-wood-curl-peel');
          if (nextSlide) nextSlide.classList.remove('pc-wood-curl-underlayer');
          if (typeof options.onSwipePrev === 'function' && deltaY < -threshold) {
            options.onSwipePrev();
          }
        }
      });
    }

    container.addEventListener('pointerdown', onPointerDown);
    container.addEventListener('pointermove', onPointerMove);
    container.addEventListener('pointerup', onPointerUp);
    container.addEventListener('pointercancel', onPointerUp);

    return {
      destroy() {
        if (animFrameId && typeof cancelAnimationFrame === 'function') {
          cancelAnimationFrame(animFrameId);
        }
        container.removeEventListener('pointerdown', onPointerDown);
        container.removeEventListener('pointermove', onPointerMove);
        container.removeEventListener('pointerup', onPointerUp);
        container.removeEventListener('pointercancel', onPointerUp);
      }
    };
  }

  function initWoodShavingCurl(context = (typeof document !== 'undefined' ? document : null)) {
    if (!context || typeof context.querySelectorAll !== 'function') return [];
    const viewports = Array.from(context.querySelectorAll('.pc-wood-curl-viewport'));
    return viewports.map(vp => {
      if (vp._pcWoodCurlInit) return vp._pcWoodCurlInit;
      const gesture = attachWoodShavingGesture(vp, {
        onSwipeNext: () => {
          const cards = Array.from(vp.querySelectorAll('.pc-wood-curl-card'));
          if (cards.length > 1) {
            vp.appendChild(cards[0]);
            vp.style.setProperty('--pc-curl-progress', '0');
          }
        }
      });
      vp._pcWoodCurlInit = gesture;
      return gesture;
    });
  }

  /**
   * Aerodynamic Kirigami Confetti Scraps Burst (Paper Flutter & Scatter)
   * Simulates lift/drag fluid tumbling of 8~16 authentic paper leaves.
   * @param {HTMLElement|string} container Container or selector
   * @param {Object} config Particle count (8-16), origin, colors, duration
   * @returns {Promise<void>}
   */
  function spawnPaperFlutterBurst(container, config = {}) {
    return new Promise((resolve) => {
      const parent = typeof container === 'string' 
        ? (typeof document !== 'undefined' ? document.querySelector(container) : null)
        : (container || (typeof document !== 'undefined' ? document.body : null));

      if (!parent || typeof document === 'undefined') {
        if (typeof config.onComplete === 'function') config.onComplete();
        resolve();
        return;
      }

      // AC-1: 8~16 Kirigami confetti scraps
      const requestedCount = config.count !== undefined ? config.count : 12;
      const count = Math.min(16, Math.max(8, requestedCount));

      const duration = config.duration !== undefined ? config.duration : 1600;
      const gravity = config.gravity !== undefined ? config.gravity : 0.35;
      const drag = config.drag !== undefined ? config.drag : 0.95;
      const colors = config.colors || ['cream', 'mint', 'peach', 'lavender', 'buttercup', 'sky', 'kraft'];

      let origin = config.origin;
      if (!origin) {
        if (typeof parent.getBoundingClientRect === 'function') {
          const rect = parent.getBoundingClientRect();
          origin = { x: rect.width / 2, y: rect.height / 2 };
        } else {
          origin = { x: 100, y: 100 };
        }
      }

      const isReduced = typeof window !== 'undefined' && 
                        window.matchMedia && 
                        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (isReduced) {
        if (typeof config.onComplete === 'function') config.onComplete();
        resolve();
        return;
      }

      const particles = [];
      for (let i = 0; i < count; i++) {
        const leaf = document.createElement('div');
        leaf.className = 'pc-flutter-leaf';
        const col = colors[i % colors.length];
        leaf.setAttribute('data-color', col);

        const w = 9 + Math.floor((i * 7) % 7);
        const h = 12 + Math.floor((i * 11) % 9);
        leaf.style.setProperty('--pc-leaf-w', w + 'px');
        leaf.style.setProperty('--pc-leaf-h', h + 'px');

        // Randomized 3D angles and ejection trajectory
        const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.5;
        const speed = 3.5 + Math.random() * 4.5;

        const pData = {
          el: leaf,
          x: origin.x + (Math.random() - 0.5) * 16,
          y: origin.y + (Math.random() - 0.5) * 16,
          z: (Math.random() - 0.5) * 30,
          vx: Math.cos(angle) * speed,
          vy: -Math.abs(Math.sin(angle) * speed) - 2.5,
          vz: (Math.random() - 0.5) * 3,
          rx: Math.random() * 360,
          ry: Math.random() * 360,
          rz: Math.random() * 360,
          vrx: (Math.random() - 0.5) * 16,
          vry: (Math.random() - 0.5) * 20,
          vrz: (Math.random() - 0.5) * 12,
          flutterPhase: Math.random() * Math.PI * 2,
          flutterFreq: 0.08 + Math.random() * 0.05,
          flutterAmp: 0.9 + Math.random() * 1.1
        };

        leaf.style.transform = `translate3d(${pData.x.toFixed(1)}px, ${pData.y.toFixed(1)}px, ${pData.z.toFixed(1)}px) rotateX(${pData.rx.toFixed(1)}deg) rotateY(${pData.ry.toFixed(1)}deg) rotateZ(${pData.rz.toFixed(1)}deg)`;
        parent.appendChild(leaf);
        particles.push(pData);
      }

      const startTime = (typeof performance !== 'undefined' ? performance.now() : Date.now());
      let animId = null;

      function cleanup() {
        // AC-2: Full DOM lifecycle synchronization & zero memory leak
        for (let i = 0; i < particles.length; i++) {
          const el = particles[i].el;
          if (el && el.parentNode) {
            el.parentNode.removeChild(el);
          }
        }
        particles.length = 0;
        if (typeof config.onComplete === 'function') config.onComplete();
        resolve();
      }

      function step(now) {
        const elapsed = now - startTime;
        const normTime = Math.min(1, elapsed / duration);

        if (normTime >= 1) {
          cleanup();
          return;
        }

        const opacity = Math.max(0, 1 - Math.pow(normTime, 1.8));

        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          p.flutterPhase += p.flutterFreq;
          const lift = Math.sin(p.flutterPhase) * p.flutterAmp;

          p.vx = (p.vx + lift) * drag;
          p.vy = (p.vy + gravity) * drag;
          p.vz = p.vz * drag;

          p.x += p.vx;
          p.y += p.vy;
          p.z += p.vz;

          p.rx += p.vrx;
          p.ry += p.vry;
          p.rz += p.vrz;

          p.el.style.transform = `translate3d(${p.x.toFixed(1)}px, ${p.y.toFixed(1)}px, ${p.z.toFixed(1)}px) rotateX(${p.rx.toFixed(1)}deg) rotateY(${p.ry.toFixed(1)}deg) rotateZ(${p.rz.toFixed(1)}deg)`;
          p.el.style.opacity = opacity.toFixed(3);
        }

        if (typeof requestAnimationFrame === 'function') {
          animId = requestAnimationFrame(step);
        } else {
          setTimeout(() => step((typeof performance !== 'undefined' ? performance.now() : Date.now())), 16);
        }
      }

      if (typeof requestAnimationFrame === 'function') {
        animId = requestAnimationFrame(step);
      } else {
        step((typeof performance !== 'undefined' ? performance.now() : Date.now()));
      }
    });
  }

  /**
   * AC-3: Exit transition with kirigami scatter burst
   */
  function exitWithScatter(element, options = {}) {
    return new Promise((resolve) => {
      if (!element) {
        if (typeof options.onComplete === 'function') options.onComplete();
        resolve();
        return;
      }

      element.classList.add('pc-exit-scatter');

      let origin = null;
      if (typeof element.getBoundingClientRect === 'function') {
        const r = element.getBoundingClientRect();
        origin = { x: r.left + r.width / 2, y: r.top + r.height / 2 };
      }

      const container = options.container || (element.parentElement || (typeof document !== 'undefined' ? document.body : null));
      const burstPromise = spawnPaperFlutterBurst(container, {
        origin,
        count: options.count !== undefined ? options.count : 14,
        duration: options.burstDuration !== undefined ? options.burstDuration : 1200
      });

      const exitDuration = options.duration !== undefined ? options.duration : 420;
      setTimeout(() => {
        if (options.remove !== false && element.parentNode) {
          element.parentNode.removeChild(element);
        } else {
          element.style.display = 'none';
        }
        burstPromise.then(() => {
          if (typeof options.onComplete === 'function') options.onComplete();
          resolve();
        });
      }, exitDuration);
    });
  }

  /**
   * AC-3: Exit transition with gentle flutter
   */
  function exitWithFlutter(element, options = {}) {
    return new Promise((resolve) => {
      if (!element) {
        if (typeof options.onComplete === 'function') options.onComplete();
        resolve();
        return;
      }

      element.classList.add('pc-exit-flutter');

      let origin = null;
      if (typeof element.getBoundingClientRect === 'function') {
        const r = element.getBoundingClientRect();
        origin = { x: r.left + r.width / 2, y: r.top + r.height / 2 };
      }

      const container = options.container || (element.parentElement || (typeof document !== 'undefined' ? document.body : null));
      const burstPromise = spawnPaperFlutterBurst(container, {
        origin,
        count: options.count !== undefined ? options.count : 10,
        duration: options.burstDuration !== undefined ? options.burstDuration : 1400
      });

      const exitDuration = options.duration !== undefined ? options.duration : 550;
      setTimeout(() => {
        if (options.remove !== false && element.parentNode) {
          element.parentNode.removeChild(element);
        } else {
          element.style.display = 'none';
        }
        burstPromise.then(() => {
          if (typeof options.onComplete === 'function') options.onComplete();
          resolve();
        });
      }, exitDuration);
    });
  }

  /* ==========================================================================
     MASTER INITIALIZER
     ========================================================================== */
  function initAll(context = (typeof document !== 'undefined' ? document : null)) {
    if (!context) return;
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
    initWoodShavingCurl(context);
    paperizeOverlays(context);
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
    tooltip: Tooltip,
    woodCurl: {
      transition: transitionWoodShavingCurl,
      attachGesture: attachWoodShavingGesture,
      init: initWoodShavingCurl
    },
    transitionWoodShavingCurl: transitionWoodShavingCurl,
    attachWoodShavingGesture: attachWoodShavingGesture,
    initWoodShavingCurl: initWoodShavingCurl,
    paperFlutter: {
      spawn: spawnPaperFlutterBurst,
      exitWithScatter: exitWithScatter,
      exitWithFlutter: exitWithFlutter
    },
    spawnPaperFlutterBurst: spawnPaperFlutterBurst,
    exitWithScatter: exitWithScatter,
    exitWithFlutter: exitWithFlutter
  };
});
