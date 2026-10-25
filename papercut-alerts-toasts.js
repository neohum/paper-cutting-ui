/**
 * PaperCut UI - Alerts & Toasts Interactive Controller
 * 12 Kirigami Papercraft Archetypes (Stamp, Wax, Ticket, Thin, Tag, Dogear, Washi, Gem, Deckle, Ribbon, Envelope, Voucher)
 * 7 Pastel Paper Variations (Mint, Peach, Lavender, Buttercup, Sky, Rose, Cream / Sage)
 */

(function () {
  'use strict';

  let toastContainer = null;
  let currentPosition = 'pos-bottom-right';

  // 페이퍼 레이어 엔진이 아는 7톤 (sage 등 그 밖의 변형은 mint로)
  const PAPER_TONES = ['mint', 'peach', 'lavender', 'buttercup', 'sky', 'rose', 'cream'];

  // SVG Medallion for Alerts & Toasts
  const TOAST_WAX_SVG = `
    <svg class="pc-wax-seal-svg" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="pc-toast-wax-sh" x="-20%" y="-20%" width="140%" height="150%">
          <feDropShadow dx="0" dy="1" stdDeviation="0.5" flood-color="#2E1E14" flood-opacity="0.48"/>
          <feDropShadow dx="0" dy="2.5" stdDeviation="1.2" flood-color="#2E1E14" flood-opacity="0.25"/>
        </filter>
      </defs>
      <circle cx="16" cy="16" r="15" fill="#F5B8BE" filter="url(#pc-toast-wax-sh)"/>
      <circle cx="16" cy="16" r="12" fill="#F7BA9E"/>
      <circle cx="16" cy="16" r="8.5" fill="#FAF6ED"/>
      <path d="M 16 12 C 14.2 9.5 11 11 11 14 C 11 17 16 20 16 20.5 C 16 20 21 17 21 14 C 21 11 17.8 9.5 16 12 Z" fill="#F5B8BE"/>
    </svg>
  `;

  // 100% Pure 3D Kirigami Notched Cinema Ticket SVG Frame for Ticket Toast (Slim & Refined Craft Silhouette)
  const TOAST_TICKET_SVG = `
    <svg class="pc-toast-archetype-bg pc-toast-ticket-bg" viewBox="0 0 380 56" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="pc-toast-ticket-sh" x="-20%" y="-20%" width="140%" height="150%">
          <feDropShadow dx="0" dy="1.2" stdDeviation="0.6" flood-color="#2E1E14" flood-opacity="0.45"/>
          <feDropShadow dx="0" dy="3.2" stdDeviation="1.6" flood-color="#2E1E14" flood-opacity="0.22"/>
          <feDropShadow dx="0" dy="-0.5" stdDeviation="0.3" flood-color="#FFFFFF" flood-opacity="0.95"/>
        </filter>
      </defs>
      <!-- Base Layer with Notches (Slim 48px Height) -->
      <path d="M 8 4 H 372 C 373.5 4 375 5.5 375 7 V 21 C 370.5 21 367 24 367 28 C 367 32 370.5 35 375 35 V 49 C 375 50.5 373.5 52 372 52 H 8 C 6.5 52 5 50.5 5 49 V 35 C 9.5 35 13 32 13 28 C 13 24 9.5 21 5 21 V 7 C 5 5.5 6.5 4 8 4 Z" fill="#A3D8C3" stroke="#FFFFFF" stroke-width="0.88" filter="url(#pc-toast-ticket-sh)" class="pc-ticket-base-path"/>
      <!-- Inner Paper Sheet -->
      <path d="M 11 7 H 369 V 21 C 365 21 362 24 362 28 C 362 32 365 35 369 35 V 49 H 11 V 35 C 15 35 18 32 18 28 C 18 24 15 21 11 21 Z" fill="#FFFDF9" class="pc-ticket-inner-path"/>
      <!-- Perforation Stitching Line -->
      <line x1="52" y1="7" x2="52" y2="49" stroke="#2E1E14" stroke-opacity="0.28" stroke-width="1.8" stroke-linecap="round" stroke-dasharray="1 4"/>
      <line x1="52.8" y1="7" x2="52.8" y2="49" stroke="#FFFFFF" stroke-opacity="0.95" stroke-width="1.8" stroke-linecap="round" stroke-dasharray="1 4"/>
    </svg>
  `;

  // 02. Washi-Tape Masking Note SVG Frame (380x56)
  const TOAST_WASHI_SVG = `
    <svg class="pc-toast-archetype-bg pc-toast-washi-bg" viewBox="0 0 380 56" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="pc-toast-sh-washi" x="-20%" y="-20%" width="140%" height="150%">
          <feDropShadow dx="0" dy="1.2" stdDeviation="0.6" flood-color="#2E1E14" flood-opacity="0.45"/>
          <feDropShadow dx="0" dy="3.2" stdDeviation="1.6" flood-color="#2E1E14" flood-opacity="0.22"/>
          <feDropShadow dx="0" dy="-0.5" stdDeviation="0.3" flood-color="#FFFFFF" flood-opacity="0.95"/>
        </filter>
      </defs>
      <!-- White Memo Paper Card -->
      <rect x="8" y="8" width="364" height="42" rx="8" fill="#FFFDF9" stroke="#FFFFFF" stroke-width="0.88" filter="url(#pc-toast-sh-washi)"/>
      <!-- Tilting Masking Tape with Zigzag Torn Edges (top-left) -->
      <path d="M 22 3 L 24 5.5 L 26 3 L 102 3 L 104 5.5 L 106 3 V 16 L 104 13.5 L 102 16 L 26 16 L 24 13.5 L 22 16 Z" transform="rotate(-1.5 64 10)" fill="#D7CBEB" opacity="0.92" filter="url(#pc-toast-sh-washi)"/>
      <line x1="28" y1="9.5" x2="100" y2="9.5" stroke="#FFFFFF" stroke-width="1.4" stroke-linecap="round" stroke-dasharray="1 4" opacity="0.95" transform="rotate(-1.5 64 10)"/>
    </svg>
  `;

  // 03. Dog-ear Folded Corner SVG Frame (380x56)
  const TOAST_DOGEAR_SVG = `
    <svg class="pc-toast-archetype-bg pc-toast-dogear-bg" viewBox="0 0 380 56" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="pc-toast-sh-dogear" x="-20%" y="-20%" width="140%" height="150%">
          <feDropShadow dx="0" dy="1.2" stdDeviation="0.6" flood-color="#2E1E14" flood-opacity="0.45"/>
          <feDropShadow dx="0" dy="3.2" stdDeviation="1.6" flood-color="#2E1E14" flood-opacity="0.22"/>
          <feDropShadow dx="0" dy="-0.5" stdDeviation="0.3" flood-color="#FFFFFF" flood-opacity="0.95"/>
        </filter>
      </defs>
      <!-- Base White Card with 45-degree Angled Top-Right Corner Cut -->
      <path d="M 12 6 H 346 L 372 23 V 46 Q 372 50 364 50 H 16 Q 8 50 8 42 V 14 Q 8 6 16 6 Z" fill="#FFFDF9" stroke="#FFFFFF" stroke-width="0.88" filter="url(#pc-toast-sh-dogear)"/>
      <!-- Folded Flap Exposing Buttercup Backing Sheet -->
      <polygon points="346,6 372,23 346,23" fill="#FEE396"/>
      <polygon points="346,6 372,23 346,23" fill="#EDC96C" filter="url(#pc-toast-sh-dogear)"/>
      <line x1="346" y1="6" x2="372" y2="23" stroke="#4A3A2A" stroke-opacity="0.25" stroke-width="1.3"/>
    </svg>
  `;

  // 04. Perforated Postage Stamp SVG Frame (380x56)
  const TOAST_STAMP_SVG = `
    <svg class="pc-toast-archetype-bg pc-toast-stamp-bg" viewBox="0 0 380 56" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="pc-toast-sh-stamp" x="-20%" y="-20%" width="140%" height="150%">
          <feDropShadow dx="0" dy="1.2" stdDeviation="0.6" flood-color="#2E1E14" flood-opacity="0.50"/>
          <feDropShadow dx="0" dy="3.2" stdDeviation="1.6" flood-color="#2E1E14" flood-opacity="0.25"/>
          <feDropShadow dx="0" dy="-0.6" stdDeviation="0.3" flood-color="#FFFFFF" flood-opacity="0.95"/>
        </filter>
      </defs>
      <!-- Perforated Postage Scallop Outer Base Sheet (Rose #F5B8BE) -->
      <path d="M 8 5 Q 14 8 20 5 Q 26 8 32 5 Q 38 8 44 5 Q 50 8 56 5 Q 62 8 68 5 Q 74 8 80 5 Q 86 8 92 5 Q 98 8 104 5 Q 110 8 116 5 Q 122 8 128 5 Q 134 8 140 5 Q 146 8 152 5 Q 158 8 164 5 Q 170 8 176 5 Q 182 8 188 5 Q 194 8 200 5 Q 206 8 212 5 Q 218 8 224 5 Q 230 8 236 5 Q 242 8 248 5 Q 254 8 260 5 Q 266 8 272 5 Q 278 8 284 5 Q 290 8 296 5 Q 302 8 308 5 Q 314 8 320 5 Q 326 8 332 5 Q 338 8 344 5 Q 350 8 356 5 Q 362 8 368 5 Q 372 8 374 5 Q 377 11 374 17 Q 377 23 374 29 Q 377 35 374 41 Q 377 47 374 51 Q 368 48 362 51 Q 356 48 350 51 Q 344 48 338 51 Q 332 48 326 51 Q 320 48 314 51 Q 308 48 302 51 Q 296 48 290 51 Q 284 48 278 51 Q 272 48 266 51 Q 260 48 254 51 Q 248 48 242 51 Q 236 48 230 51 Q 224 48 218 51 Q 212 48 206 51 Q 200 48 194 51 Q 188 48 182 51 Q 176 48 170 51 Q 164 48 158 51 Q 152 48 146 51 Q 140 48 134 51 Q 128 48 122 51 Q 116 48 110 51 Q 104 48 98 51 Q 92 48 86 51 Q 80 48 74 51 Q 68 48 62 51 Q 56 48 50 51 Q 44 48 38 51 Q 32 48 26 51 Q 20 48 14 51 Q 8 48 6 51 Q 3 45 6 39 Q 3 33 6 27 Q 3 21 6 15 Q 3 9 6 5 Z" fill="#F5B8BE" stroke="#FFFFFF" stroke-width="0.88" filter="url(#pc-toast-sh-stamp)"/>
      <!-- Inner White Card -->
      <rect x="14" y="9" width="352" height="38" rx="4" fill="#FFFDF9" filter="url(#pc-toast-sh-stamp)"/>
      <!-- Double Stitching Perforation Line -->
      <rect x="18" y="12" width="344" height="32" rx="2" fill="none" stroke="#2E1E14" stroke-opacity="0.25" stroke-width="1.3" stroke-linecap="round" stroke-dasharray="1 4"/>
      <rect x="18" y="12.7" width="344" height="32" rx="2" fill="none" stroke="#FFFFFF" stroke-opacity="0.95" stroke-width="1.3" stroke-linecap="round" stroke-dasharray="1 4"/>
    </svg>
  `;

  // 05. Antique Wax Seal Pill SVG Frame (380x56)
  const TOAST_WAX_FRAME_SVG = `
    <svg class="pc-toast-archetype-bg pc-toast-wax-bg" viewBox="0 0 380 56" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="pc-toast-sh-wax" x="-20%" y="-20%" width="140%" height="150%">
          <feDropShadow dx="0" dy="1.2" stdDeviation="0.6" flood-color="#2E1E14" flood-opacity="0.45"/>
          <feDropShadow dx="0" dy="3.5" stdDeviation="1.8" flood-color="#2E1E14" flood-opacity="0.24"/>
          <feDropShadow dx="0" dy="-0.5" stdDeviation="0.3" flood-color="#FFFFFF" flood-opacity="0.95"/>
        </filter>
      </defs>
      <!-- Full Pill Base Cream Sheet (rx=22) -->
      <rect x="8" y="6" width="364" height="44" rx="22" fill="#FAF6ED" stroke="#FFFFFF" stroke-width="0.88" filter="url(#pc-toast-sh-wax)"/>
      <!-- Inner White Pill Sheet (rx=19) -->
      <rect x="11" y="9" width="358" height="38" rx="19" fill="#FFFDF9" stroke="#E6DBC9" stroke-width="1"/>
    </svg>
  `;

  function ensureToastContainer() {
    if (!toastContainer) {
      toastContainer = document.getElementById('pc-toast-container');
      if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.id = 'pc-toast-container';
        document.body.appendChild(toastContainer);
      }
    }
    toastContainer.className = currentPosition;
    // 인라인 위치 스타일 제거하여 CSS 클래스가 100% 적용되도록 보장
    toastContainer.style.top = '';
    toastContainer.style.bottom = '';
    toastContainer.style.left = '';
    toastContainer.style.right = '';
    toastContainer.style.transform = '';
    return toastContainer;
  }

  /**
   * Global 3D Kirigami Toast Dispatcher
   * @param {Object|string} options - Toast options or simple message string
   * @param {string} type - 'mint' | 'peach' | 'lavender' | 'buttercup' | 'sky' | 'rose' | 'cream' | 'sage' | 'info' | 'success' | 'warning' | 'error'
   * @param {string} iconId - Papercut icon ID
   */
  window.triggerPaperToast = function (options, type = 'mint', iconId = null) {
    const container = ensureToastContainer();

    let opts = {};
    if (typeof options === 'string') {
      opts = {
        title: type === 'rose' || type === 'error' ? '주의 / 오류' : 
               type === 'buttercup' || type === 'warning' ? '확인 안내' : 
               type === 'peach' ? '알림' : '완료 안내',
        message: options,
        variant: type,
        icon: iconId,
        kirigami: 'washi',
        duration: 4000
      };
    } else {
      opts = Object.assign({
        title: '알림',
        message: '',
        variant: 'mint',
        kirigami: 'washi',
        icon: null,
        duration: 4200,
        actionLabel: null,
        onAction: null,
        showProgress: true
      }, options);
    }

    // Support style alias for kirigami
    if (opts.style && !opts.kirigami) {
      opts.kirigami = opts.style;
    }

    // Map variant aliases
    if (opts.variant === 'success') opts.variant = 'mint';
    if (opts.variant === 'info') opts.variant = 'sky';
    if (opts.variant === 'warning') opts.variant = 'buttercup';
    if (opts.variant === 'error' || opts.variant === 'destructive') opts.variant = 'rose';

    // Default icon selection based on variant
    if (!opts.icon) {
      if (opts.variant === 'mint') opts.icon = 'check';
      else if (opts.variant === 'rose') opts.icon = 'warning';
      else if (opts.variant === 'buttercup') opts.icon = 'bell';
      else if (opts.variant === 'lavender') opts.icon = 'sparkles';
      else if (opts.variant === 'peach') opts.icon = 'heart';
      else opts.icon = 'info';
    }

    const toastEl = document.createElement('div');
    const kirigamiClass = opts.kirigami ? `pc-toast-${opts.kirigami}` : 'pc-toast-washi';
    toastEl.className = `pc-toast-card pc-toast-archetype variant-${opts.variant} ${kirigamiClass}`;
    // 페이퍼 레이어: 토스트는 ticket 색지, 톤은 알림 종류(variant)를 따른다
    toastEl.setAttribute('data-pc-paper', 'ticket');
    toastEl.setAttribute('data-pc-tone', PAPER_TONES.indexOf(opts.variant) >= 0 ? opts.variant : 'mint');
    toastEl.setAttribute('role', opts.variant === 'rose' ? 'alert' : 'status');

    // Build Kirigami Ornamentation (100% Pure 3D Kirigami SVG Archetypes)
    let ornamentHtml = '';
    if (opts.kirigami === 'ticket') {
      ornamentHtml = TOAST_TICKET_SVG;
    } else if (opts.kirigami === 'washi') {
      ornamentHtml = TOAST_WASHI_SVG;
    } else if (opts.kirigami === 'dogear') {
      ornamentHtml = TOAST_DOGEAR_SVG;
    } else if (opts.kirigami === 'stamp') {
      ornamentHtml = TOAST_STAMP_SVG;
    } else if (opts.kirigami === 'wax') {
      ornamentHtml = TOAST_WAX_FRAME_SVG;
    }

    let iconWrapHtml = '';
    if (opts.kirigami === 'ticket') {
      // 01. 100% Cinema Ticket Medallion
      iconWrapHtml = `
        <div class="pc-toast-icon-wrap pc-ticket-icon-wrap">
          <svg viewBox="0 0 36 36" width="36" height="36" fill="none" style="flex-shrink:0;">
            <defs>
              <filter id="pc-toast-sh-ic-ticket" x="-20%" y="-20%" width="140%" height="150%">
                <feDropShadow dx="0" dy="1" stdDeviation="0.6" flood-color="#2E1E14" flood-opacity="0.30"/>
              </filter>
            </defs>
            <circle cx="18" cy="18" r="15" fill="#FAF6ED" stroke="#FFFFFF" stroke-width="1.2" filter="url(#pc-toast-sh-ic-ticket)"/>
            <circle cx="18" cy="18" r="12" fill="#FFFDF9" stroke="#E6DBC9" stroke-width="0.75"/>
            <polygon points="18,10 20.5,15.5 26.5,15.5 21.5,19.2 23.5,25 18,21.5 12.5,25 14.5,19.2 9.5,15.5 15.5,15.5" fill="#FEE396" stroke="#E5BA36" stroke-width="0.88"/>
          </svg>
        </div>
      `;
    } else if (opts.kirigami === 'washi') {
      // 02. 100% Washi Note Pin Medallion
      iconWrapHtml = `
        <div class="pc-toast-icon-wrap pc-washi-icon-wrap">
          <svg viewBox="0 0 36 36" width="36" height="36" fill="none" style="flex-shrink:0;">
            <defs>
              <filter id="pc-toast-sh-ic-washi" x="-20%" y="-20%" width="140%" height="150%">
                <feDropShadow dx="0" dy="1" stdDeviation="0.6" flood-color="#2E1E14" flood-opacity="0.30"/>
              </filter>
            </defs>
            <circle cx="18" cy="18" r="15" fill="#FAF6ED" stroke="#FFFFFF" stroke-width="1.2" filter="url(#pc-toast-sh-ic-washi)"/>
            <g transform="translate(7, 6) scale(0.92)">
              <circle cx="12" cy="8" r="6" fill="#F7BA9E"/>
              <path d="M 8 8 H 16 L 14 18 H 10 Z" fill="#F5B8BE"/>
              <circle cx="12" cy="8" r="3" fill="#FFFDF9"/>
            </g>
          </svg>
        </div>
      `;
    } else if (opts.kirigami === 'dogear') {
      // 03. 100% Dog-ear Folded Card Warning Seal
      iconWrapHtml = `
        <div class="pc-toast-icon-wrap pc-dogear-icon-wrap">
          <svg viewBox="0 0 36 36" width="36" height="36" fill="none" style="flex-shrink:0;">
            <defs>
              <filter id="pc-toast-sh-ic-dogear" x="-20%" y="-20%" width="140%" height="150%">
                <feDropShadow dx="0" dy="1" stdDeviation="0.6" flood-color="#2E1E14" flood-opacity="0.30"/>
              </filter>
            </defs>
            <circle cx="18" cy="18" r="15" fill="#FAF6ED" stroke="#FFFFFF" stroke-width="1.2" filter="url(#pc-toast-sh-ic-dogear)"/>
            <circle cx="18" cy="18" r="12" fill="#FEE396"/>
            <path d="M 18 10 V 20 M 18 24 V 25.5" stroke="#6E530F" stroke-width="2.6" stroke-linecap="round"/>
          </svg>
        </div>
      `;
    } else if (opts.kirigami === 'stamp') {
      // 04. 100% Perforated Stamp Scissors Seal
      iconWrapHtml = `
        <div class="pc-toast-icon-wrap pc-stamp-icon-wrap">
          <svg viewBox="0 0 36 36" width="36" height="36" fill="none" style="flex-shrink:0;">
            <defs>
              <filter id="pc-toast-sh-ic-stamp" x="-20%" y="-20%" width="140%" height="150%">
                <feDropShadow dx="0" dy="1" stdDeviation="0.6" flood-color="#2E1E14" flood-opacity="0.30"/>
              </filter>
            </defs>
            <circle cx="18" cy="18" r="15" fill="#FAF6ED" stroke="#FFFFFF" stroke-width="1.2" filter="url(#pc-toast-sh-ic-stamp)"/>
            <g transform="translate(6, 4) scale(0.42)">
              <circle cx="16" cy="18" r="9" fill="#F7BA9E"/>
              <circle cx="16" cy="18" r="5" fill="#FFFDF9"/>
              <circle cx="16" cy="46" r="9" fill="#F7BA9E"/>
              <circle cx="16" cy="46" r="5" fill="#FFFDF9"/>
              <path d="M 22 23 L 54 44 M 22 41 L 54 20" stroke="#FFFDF9" stroke-width="6" stroke-linecap="round"/>
              <path d="M 22 23 L 54 44 M 22 41 L 54 20" stroke="#DE939B" stroke-width="3" stroke-linecap="round"/>
              <circle cx="34" cy="32" r="3" fill="#FEE396"/>
            </g>
          </svg>
        </div>
      `;
    } else if (opts.kirigami === 'wax') {
      // 05. 100% Antique Wax Seal Heart Medallion
      iconWrapHtml = `
        <div class="pc-toast-icon-wrap pc-wax-icon-wrap">
          <svg viewBox="0 0 42 42" width="42" height="42" fill="none" style="flex-shrink:0;">
            <defs>
              <filter id="pc-toast-sh-ic-wax" x="-20%" y="-20%" width="140%" height="150%">
                <feDropShadow dx="0" dy="1.4" stdDeviation="0.7" flood-color="#2E1E14" flood-opacity="0.45"/>
              </filter>
            </defs>
            <circle cx="21" cy="21" r="19" fill="#F5B8BE" filter="url(#pc-toast-sh-ic-wax)"/>
            <circle cx="21" cy="21" r="14.5" fill="#F7BA9E"/>
            <circle cx="21" cy="21" r="10" fill="#FAF6ED"/>
            <path d="M 21 16.5 C 19 13.5 15.5 15.2 15.5 18.5 C 15.5 22.5 21 25.5 21 27 C 21 25.5 26.5 22.5 26.5 18.5 C 26.5 15.2 23 13.5 21 16.5 Z" fill="#F5B8BE"/>
          </svg>
        </div>
      `;
    } else {
      const plateShape = opts.kirigami === 'wax' ? 'seal-wax' : 
                        (opts.kirigami === 'stamp' ? 'postage-stamp' : 
                        (opts.kirigami === 'dogear' ? 'seal-wax' : 'shield-crest'));
      iconWrapHtml = `
        <div class="pc-toast-icon-wrap">
          <span class="pc-mounted-plate" data-bg-shape="${plateShape}" data-icon="${opts.icon}" data-size="36"></span>
        </div>
      `;
    }

    toastEl.innerHTML = `
      ${ornamentHtml}
      ${iconWrapHtml}
      <div class="pc-toast-body">
        <div class="pc-toast-title">${opts.title}</div>
        <p class="pc-toast-msg">${opts.message}</p>
        ${opts.actionLabel ? `<button type="button" class="pc-toast-action-btn">${opts.actionLabel}</button>` : ''}
      </div>
      <button type="button" class="pc-toast-close-btn" aria-label="닫기">
        <span class="pc-mounted-plate" data-bg-shape="seal-wax" data-icon="close" data-size="20"></span>
      </button>
      ${opts.showProgress !== false ? '<div class="pc-toast-progress-bar"></div>' : ''}
    `;

    container.appendChild(toastEl);

    // Hydrate icons and 3D background plates inside toast
    if (typeof window.hydratePapercutIcons === 'function') {
      window.hydratePapercutIcons(toastEl);
    }
    if (typeof window.hydrateMountedPlates === 'function') {
      window.hydrateMountedPlates(toastEl);
    }
    // 동적 생성이므로 지연 없이 색지를 즉시 수화
    if (window.PaperCutUI && window.PaperCutUI.paper) window.PaperCutUI.paper.hydrate(toastEl);

    // Action button callback
    if (opts.actionLabel && typeof opts.onAction === 'function') {
      const actBtn = toastEl.querySelector('.pc-toast-action-btn');
      actBtn?.addEventListener('click', () => {
        opts.onAction();
        dismiss();
      });
    }

    // Close button
    const closeBtn = toastEl.querySelector('.pc-toast-close-btn');
    closeBtn?.addEventListener('click', () => dismiss());

    // Progress bar animation
    const progressBar = toastEl.querySelector('.pc-toast-progress-bar');
    if (progressBar && opts.duration > 0) {
      progressBar.style.transition = `transform ${opts.duration}ms linear`;
      requestAnimationFrame(() => {
        progressBar.style.transform = 'scaleX(0)';
      });
    }

    let timer = null;
    if (opts.duration > 0) {
      timer = setTimeout(dismiss, opts.duration);
    }

    function dismiss() {
      if (timer) clearTimeout(timer);
      toastEl.classList.add('is-leaving');
      setTimeout(() => {
        toastEl.remove();
      }, 300);
    }

    return { dismiss, el: toastEl };
  };

  // 기존 papercut.js의 원래 단정 토스트 함수 보존
  const _originalShowPaperToast = window.showPaperToast;

  // 우측 하단에서 기존에 만들어진 토스트 알림을 우선 사용하도록 보존/연동
  window.showPaperToast = function (msg, type = 'mint', iconId = 'check') {
    if (typeof _originalShowPaperToast === 'function') {
      return _originalShowPaperToast(msg, type, iconId);
    }
    return window.triggerPaperToast(msg, type, iconId);
  };

  // Pre-packaged Toast Helpers
  window.PaperCutToast = {
    ticket: (title, message, variant = 'buttercup', opts = {}) => {
      return window.triggerPaperToast(Object.assign({ title, message, variant, kirigami: 'ticket', icon: 'ticket' }, opts));
    },
    dogear: (title, message, variant = 'mint', opts = {}) => {
      return window.triggerPaperToast(Object.assign({ title, message, variant, kirigami: 'dogear', icon: 'check' }, opts));
    },
    washi: (title, message, variant = 'peach', opts = {}) => {
      return window.triggerPaperToast(Object.assign({ title, message, variant, kirigami: 'washi', icon: 'bookmark' }, opts));
    },
    stamp: (title, message, variant = 'mint', opts = {}) => {
      return window.triggerPaperToast(Object.assign({ title, message, variant, kirigami: 'stamp', icon: 'scissors' }, opts));
    },
    wax: (title, message, variant = 'rose', opts = {}) => {
      return window.triggerPaperToast(Object.assign({ title, message, variant, kirigami: 'wax', icon: 'sparkles' }, opts));
    },
    ribbon: (title, message, variant = 'sky', opts = {}) => {
      return window.triggerPaperToast(Object.assign({ title, message, variant, kirigami: 'ribbon', icon: 'bookmark' }, opts));
    },
    gem: (title, message, variant = 'lavender', opts = {}) => {
      return window.triggerPaperToast(Object.assign({ title, message, variant, kirigami: 'gem', icon: 'sparkles' }, opts));
    }
  };

  // ==========================================================================
  // PAPERCUT ALERT SYSTEM BUILDER (DOM GENERATOR & CONTROLLER)
  // ==========================================================================
  window.PaperCutAlert = {
    /**
     * Create an Alert DOM Element
     * @param {Object} opts - Alert options
     *   title: string
     *   message: string
     *   variant: 'mint' | 'peach' | 'lavender' | 'buttercup' | 'sky' | 'rose' | 'cream' | 'sage' | 'success' | 'info' | 'warning' | 'error'
     *   kirigami: 'washi' | 'ribbon' | 'stamp' | 'ticket' | 'dogear' | 'wax' | 'gem' | 'deckle' | 'tag' | 'voucher' | 'envelope' | 'thin'
     *   icon: string
     *   closable: boolean
     *   actions: Array<{ label, class, onClick }>
     */
    create: function (opts = {}) {
      const config = Object.assign({
        title: '알림',
        message: '',
        variant: 'mint',
        kirigami: 'washi',
        icon: null,
        closable: true,
        actions: []
      }, opts);

      if (config.variant === 'success') config.variant = 'mint';
      if (config.variant === 'info') config.variant = 'sky';
      if (config.variant === 'warning') config.variant = 'buttercup';
      if (config.variant === 'error' || config.variant === 'destructive') config.variant = 'rose';

      if (!config.icon) {
        if (config.variant === 'mint') config.icon = 'check';
        else if (config.variant === 'rose') config.icon = 'warning';
        else if (config.variant === 'buttercup') config.icon = 'bell';
        else if (config.variant === 'lavender') config.icon = 'sparkles';
        else if (config.variant === 'peach') config.icon = 'heart';
        else config.icon = 'info';
      }

      const alertEl = document.createElement('div');
      const kirigamiClass = `pc-alert-${config.kirigami || 'washi'}`;
      alertEl.className = `pc-alert pc-alert-${config.variant} ${kirigamiClass}`;
      alertEl.setAttribute('data-pc-paper', 'ticket');
      alertEl.setAttribute('data-pc-tone', PAPER_TONES.indexOf(config.variant) >= 0 ? config.variant : 'mint');

      let ornamentHtml = '';
      if (config.kirigami === 'washi' || config.kirigami === 'memo') {
        ornamentHtml = '<div class="pc-washi-tape-pin"></div>';
      } else if (config.kirigami === 'dogear') {
        ornamentHtml = '<div class="pc-alert-dogear-flap"></div>';
      } else if (config.kirigami === 'wax') {
        ornamentHtml = `<div class="pc-alert-wax-seal">${TOAST_WAX_SVG}</div>`;
      } else if (config.kirigami === 'tag') {
        ornamentHtml = '<div class="pc-alert-tag-eyelet"></div>';
      } else if (config.kirigami === 'envelope') {
        ornamentHtml = '<div class="pc-alert-envelope-flap"></div>';
      }

      let actionsHtml = '';
      if (config.actions && config.actions.length > 0) {
        actionsHtml = '<div class="pc-alert-actions">';
        config.actions.forEach((act, idx) => {
          actionsHtml += `<button type="button" class="pc-btn pc-btn-sm ${act.class || 'pc-btn-ghost'}" data-act-idx="${idx}">${act.label}</button>`;
        });
        actionsHtml += '</div>';
      }

      const plateShape = config.kirigami === 'stamp' ? 'postage-stamp' :
                        config.kirigami === 'wax' ? 'seal-wax' :
                        config.kirigami === 'ticket' ? 'notched-ticket' :
                        config.kirigami === 'gem' ? 'octagon-gem' : 'shield-crest';

      alertEl.innerHTML = `
        ${ornamentHtml}
        <div class="pc-alert-icon-box">
          <span class="pc-mounted-plate" data-bg-shape="${plateShape}" data-icon="${config.icon}" data-size="54"></span>
        </div>
        <div class="pc-alert-content">
          <div class="pc-alert-title">${config.title}</div>
          <p class="pc-alert-desc">${config.message}</p>
          ${actionsHtml}
        </div>
        ${config.closable ? `
          <button type="button" class="pc-alert-close" aria-label="닫기">
            <span class="pc-mounted-plate" data-bg-shape="coin-medallion" data-icon="close" data-size="34"></span>
          </button>
        ` : ''}
      `;

      // Hydrate icons and 3D background plates inside dynamic alert
      if (typeof window.hydratePapercutIcons === 'function') {
        window.hydratePapercutIcons(alertEl);
      }
      if (typeof window.hydrateMountedPlates === 'function') {
        window.hydrateMountedPlates(alertEl);
      }
      if (window.PaperCutUI && window.PaperCutUI.paper) window.PaperCutUI.paper.hydrate(alertEl);

      // Close handler
      if (config.closable) {
        alertEl.querySelector('.pc-alert-close')?.addEventListener('click', () => {
          alertEl.style.transition = 'all 0.25s ease';
          alertEl.style.opacity = '0';
          alertEl.style.transform = 'scale(0.95) translateY(-8px)';
          setTimeout(() => alertEl.remove(), 260);
          if (typeof config.onClose === 'function') config.onClose();
        });
      }

      // Action buttons
      if (config.actions && config.actions.length > 0) {
        alertEl.querySelectorAll('.pc-alert-actions button').forEach(btn => {
          btn.addEventListener('click', (e) => {
            const idx = parseInt(e.currentTarget.getAttribute('data-act-idx'), 10);
            if (!isNaN(idx) && typeof config.actions[idx]?.onClick === 'function') {
              config.actions[idx].onClick(alertEl);
            }
          });
        });
      }

      return alertEl;
    },

    mount: function (container, opts) {
      const target = typeof container === 'string' ? document.querySelector(container) : container;
      if (!target) return null;
      const el = this.create(opts);
      target.appendChild(el);
      return el;
    },

    washi: function (title, message, variant = 'peach', opts = {}) {
      return this.create(Object.assign({ title, message, variant, kirigami: 'washi' }, opts));
    },
    ribbon: function (title, message, variant = 'sky', opts = {}) {
      return this.create(Object.assign({ title, message, variant, kirigami: 'ribbon' }, opts));
    },
    stamp: function (title, message, variant = 'mint', opts = {}) {
      return this.create(Object.assign({ title, message, variant, kirigami: 'stamp' }, opts));
    },
    ticket: function (title, message, variant = 'buttercup', opts = {}) {
      return this.create(Object.assign({ title, message, variant, kirigami: 'ticket' }, opts));
    },
    dogear: function (title, message, variant = 'mint', opts = {}) {
      return this.create(Object.assign({ title, message, variant, kirigami: 'dogear' }, opts));
    },
    wax: function (title, message, variant = 'rose', opts = {}) {
      return this.create(Object.assign({ title, message, variant, kirigami: 'wax' }, opts));
    },
    gem: function (title, message, variant = 'lavender', opts = {}) {
      return this.create(Object.assign({ title, message, variant, kirigami: 'gem' }, opts));
    },
    voucher: function (title, message, variant = 'buttercup', opts = {}) {
      return this.create(Object.assign({ title, message, variant, kirigami: 'voucher' }, opts));
    }
  };

  /**
   * Initialize Alerts & Toasts Interactive Demo Studio
   */
  function initAlertsToastsStudio() {
    const posBtns = document.querySelectorAll('.pc-toast-pos-btn');
    posBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        posBtns.forEach(b => b.classList.remove('is-active'));
        btn.classList.add('is-active');
        const pos = btn.getAttribute('data-pos');
        currentPosition = `pos-${pos}`;
        const container = ensureToastContainer();
        container.className = currentPosition;
      });
    });

    // Interactive Demo Trigger Buttons with Diverse Kirigami Archetypes
    document.getElementById('btn-demo-toast-success')?.addEventListener('click', () => {
      window.triggerPaperToast({
        title: '시네마 티켓형 완료 토스트',
        message: '양측 반원 노치 홈과 점선 절취선이 적용된 3D 티켓 토스트입니다.',
        variant: 'mint',
        kirigami: 'ticket',
        icon: 'ticket',
        duration: 4200
      });
    });

    document.getElementById('btn-demo-toast-info')?.addEventListener('click', () => {
      window.triggerPaperToast({
        title: '마스킹 테이프 메모 토스트',
        message: '벽에 찢어 붙인 듯한 지그재그 마스킹 테이프가 장착된 감성 토스트입니다.',
        variant: 'lavender',
        kirigami: 'washi',
        icon: 'bookmark',
        duration: 4200
      });
    });

    document.getElementById('btn-demo-toast-warning')?.addEventListener('click', () => {
      window.triggerPaperToast({
        title: '도그이어 접힌 카드 토스트',
        message: '우측 상단 45° 접힌 모서리와 배면 버터컵 색지가 노출된 카드 토스트입니다.',
        variant: 'buttercup',
        kirigami: 'dogear',
        icon: 'warning',
        duration: 4500
      });
    });

    document.getElementById('btn-demo-toast-error')?.addEventListener('click', () => {
      window.triggerPaperToast({
        title: '우표 천공 테두리 토스트',
        message: '정밀 톱니바퀴 우표 펀칭 테두리와 칼선 림이 적용된 로즈 토스트입니다.',
        variant: 'rose',
        kirigami: 'stamp',
        icon: 'close',
        duration: 5000
      });
    });

    document.getElementById('btn-demo-toast-action')?.addEventListener('click', () => {
      window.triggerPaperToast({
        title: '앤틱 왁스 실링 인장 토스트',
        message: '장미빛 왁스가 녹아내린 하트 실링 인장과 함께 액션 버튼을 제공합니다.',
        variant: 'peach',
        kirigami: 'wax',
        icon: 'sparkles',
        duration: 6500,
        actionLabel: '실행 취소 (Undo)',
        onAction: () => {
          window.triggerPaperToast({
            title: '복원 완료',
            message: '삭제되었던 컴포넌트가 제자리로 복원되었습니다!',
            variant: 'mint',
            kirigami: 'dogear',
            icon: 'check'
          });
        }
      });
    });

    // Dismiss Alert Demo buttons with authentic paper lift-off animation
    document.querySelectorAll('.pc-alert-close').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const alertEl = e.currentTarget.closest('.pc-alert');
        if (alertEl) {
          alertEl.style.transition = 'all 0.25s ease';
          alertEl.style.opacity = '0';
          alertEl.style.transform = 'scale(0.95) translateY(-8px)';
          setTimeout(() => alertEl.remove(), 260);
        }
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAlertsToastsStudio);
  } else {
    initAlertsToastsStudio();
  }

})();
