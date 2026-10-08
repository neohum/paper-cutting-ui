/**
 * PaperCut UI - Shadcn Blocks & Charts Engine
 * Authentic 3D Layered Paper-Cut Design System
 * 
 * Part 1: Shadcn Blocks (Admin Dashboard, Auth, Settings, E-Commerce, Pricing, Dropzone)
 * Part 2: Shadcn Charts (Area, Bar, Line, Donut, Radar, Radial Bar, Tooltip & Legend)
 */

(function (global) {
  'use strict';

  // =========================================================================
  // 1. PAPER CRAFT SVG ICONS & SHARED DEFS
  // =========================================================================
  const RAW_PAPERCUT_SVGS = {
    scissors: `<svg class="pc-layered-paper-icon" viewBox="0 0 64 64" fill="none"><circle cx="20" cy="46" r="7" fill="#FEE396"/><circle cx="44" cy="46" r="7" fill="#A3D8C3"/><path d="M24 40 L46 14 M40 40 L18 14" stroke="#3D352E" stroke-width="3" stroke-linecap="round"/><circle cx="32" cy="27" r="2.5" fill="#F7BA9E"/></svg>`,
    search: `<svg class="pc-layered-paper-icon" viewBox="0 0 64 64" fill="none"><circle cx="28" cy="28" r="14" fill="#FAF6ED" stroke="#3D352E" stroke-width="3"/><circle cx="28" cy="28" r="10" fill="#BDE0EA" opacity="0.6"/><path d="M38 38 L52 52" stroke="#F7BA9E" stroke-width="5" stroke-linecap="round"/></svg>`,
    bell: `<svg class="pc-layered-paper-icon" viewBox="0 0 64 64" fill="none"><path d="M32 10 C24 10 18 16 18 24 V38 L14 44 H50 L46 38 V24 C46 16 40 10 32 10 Z" fill="#FEE396"/><circle cx="32" cy="50" r="4.5" fill="#F7BA9E"/></svg>`,
    arrowUp: `<svg class="pc-layered-paper-icon" viewBox="0 0 64 64" fill="none"><path d="M32 12 L18 26 M32 12 L46 26 M32 12 V52" stroke="#3D352E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    arrowDown: `<svg class="pc-layered-paper-icon" viewBox="0 0 64 64" fill="none"><path d="M32 52 L18 38 M32 52 L46 38 M32 52 V12" stroke="#3D352E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    wallet: `<svg class="pc-layered-paper-icon" viewBox="0 0 64 64" fill="none"><rect x="10" y="16" width="44" height="34" rx="6" fill="#F7BA9E"/><rect x="10" y="16" width="44" height="12" fill="#FDE2D1"/><circle cx="44" cy="33" r="4" fill="#FEE396"/></svg>`,
    users: `<svg class="pc-layered-paper-icon" viewBox="0 0 64 64" fill="none"><circle cx="24" cy="22" r="10" fill="#A3D8C3"/><circle cx="42" cy="24" r="8" fill="#D7CBEB"/><path d="M10 52 C10 40 18 34 26 34 C34 34 40 40 40 52 Z" fill="#BBD5B8"/><path d="M36 52 C36 43 42 38 48 38 C54 38 58 43 58 52 Z" fill="#C9C1F8"/></svg>`,
    activity: `<svg class="pc-layered-paper-icon" viewBox="0 0 64 64" fill="none"><path d="M8 32 H20 L28 14 L38 50 L46 26 L52 32 H58" stroke="#38986B" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    shoppingBag: `<svg class="pc-layered-paper-icon" viewBox="0 0 64 64" fill="none"><path d="M22 22 C22 14 26 8 32 8 C38 8 42 14 42 22" stroke="#F7BA9E" stroke-width="3" stroke-linecap="round"/><rect x="14" y="20" width="36" height="38" rx="5" fill="#A3D8C3"/><path d="M20 20 L26 12 L34 20 L40 14 L44 20" fill="#FFFDF9" opacity="0.9"/><circle cx="32" cy="38" r="6" fill="#FEE396"/><circle cx="32" cy="38" r="3" fill="#FFFDF9"/></svg>`,
    cart: `<svg class="pc-layered-paper-icon" viewBox="0 0 64 64" fill="none"><path d="M8 12 H16 L22 42 H46 L52 20 H18" stroke="#3D352E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><rect x="20" y="22" width="28" height="18" rx="3" fill="#BDE0EA"/><circle cx="24" cy="48" r="4.5" fill="#F7BA9E"/><circle cx="44" cy="48" r="4.5" fill="#F7BA9E"/></svg>`,
    plus: `<svg class="pc-layered-paper-icon" viewBox="0 0 64 64" fill="none"><rect x="12" y="26" width="40" height="12" rx="3" fill="#A3D8C3"/><rect x="26" y="12" width="12" height="40" rx="3" fill="#A3D8C3"/><rect x="27.5" y="13.5" width="9" height="37" rx="2" fill="#FAF6ED" opacity="0.4"/></svg>`,
    minus: `<svg class="pc-layered-paper-icon" viewBox="0 0 64 64" fill="none"><rect x="12" y="26" width="40" height="12" rx="3" fill="#F7BA9E"/><rect x="14" y="28" width="36" height="8" rx="2" fill="#FFFDF9" opacity="0.5"/></svg>`,
    download: `<svg class="pc-layered-paper-icon" viewBox="0 0 64 64" fill="none"><path d="M32 10 V38 M20 26 L32 38 L44 26" stroke="#3D352E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><rect x="14" y="46" width="36" height="8" rx="3" fill="#A3D8C3"/></svg>`,
    mail: `<svg class="pc-layered-paper-icon" viewBox="0 0 64 64" fill="none"><rect x="10" y="16" width="44" height="32" rx="4" fill="#FAF6ED" stroke="#DCD1BF" stroke-width="1.5"/><path d="M10 18 L32 34 L54 18" stroke="#F7BA9E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><circle cx="32" cy="34" r="4" fill="#F5B8BE"/></svg>`,
    printer: `<svg class="pc-layered-paper-icon" viewBox="0 0 64 64" fill="none"><rect x="16" y="10" width="32" height="14" rx="2" fill="#FFFDF9"/><rect x="10" y="22" width="44" height="24" rx="5" fill="#D7CBEB"/><rect x="18" y="36" width="28" height="18" rx="2" fill="#FAF6ED"/><line x1="22" y1="42" x2="42" y2="42" stroke="#3D352E" stroke-width="1.5"/></svg>`,
    google: `<svg viewBox="0 0 24 24"><path fill="#EA4335" d="M12 5c1.6 0 3 .6 4.1 1.7l3.1-3.1C17.3 1.8 14.8 1 12 1 7.4 1 3.5 3.6 1.6 7.4l3.7 2.9C6.2 7.3 8.8 5 12 5z"/><path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.6h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5 3.7-8.9z"/><path fill="#FBBC05" d="M5.3 14.7c-.2-.7-.4-1.5-.4-2.7 0-1.1.2-1.9.4-2.7L1.6 6.4C.6 8.4 0 10.6 0 12c0 1.4.6 3.6 1.6 5.6l3.7-2.9z"/><path fill="#34A853" d="M12 23c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3.2 0-5.8-2.3-6.7-5.3L1.6 16c1.9 3.8 5.8 7 10.4 7z"/></svg>`,
    github: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>`,
    apple: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.84c.62-.75 1.04-1.8 0.93-2.84-.9.04-2 0.6-2.65 1.36-.58.67-1.08 1.74-.95 2.77 1.01.08 2.05-.54 2.67-1.29z"/></svg>`,
    eye: `<svg class="pc-layered-paper-icon" viewBox="0 0 64 64" fill="none"><path d="M8 32 C16 18 48 18 56 32 C48 46 16 46 8 32 Z" fill="#FFFDF9" stroke="#3D352E" stroke-width="2.5"/><circle cx="32" cy="32" r="9" fill="#BDE0EA"/><circle cx="32" cy="32" r="5" fill="#3D352E"/></svg>`,
    eyeOff: `<svg class="pc-layered-paper-icon" viewBox="0 0 64 64" fill="none"><path d="M8 32 C16 18 48 18 56 32 C48 46 16 46 8 32 Z" fill="#FFFDF9" stroke="#3D352E" stroke-width="2.5"/><circle cx="32" cy="32" r="8" fill="#BDE0EA"/><line x1="12" y1="12" x2="52" y2="52" stroke="#F5B8BE" stroke-width="4" stroke-linecap="round"/></svg>`,
    check: `<svg class="pc-layered-paper-icon" viewBox="0 0 64 64" fill="none"><path d="M14 34 L26 46 L50 16" stroke="#2D7A53" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" fill="none"/><path d="M14 34 L26 46 L50 16" stroke="#A3D8C3" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>`,
    user: `<svg class="pc-layered-paper-icon" viewBox="0 0 64 64" fill="none"><circle cx="32" cy="22" r="11" fill="#F7BA9E"/><path d="M14 52 C14 40 22 35 32 35 C42 35 50 40 50 52 Z" fill="#D7CBEB"/></svg>`,
    sliders: `<svg class="pc-layered-paper-icon" viewBox="0 0 64 64" fill="none"><line x1="20" y1="10" x2="20" y2="54" stroke="#3D352E" stroke-width="2"/><line x1="44" y1="10" x2="44" y2="54" stroke="#3D352E" stroke-width="2"/><rect x="14" y="20" width="12" height="14" rx="3" fill="#FEE396"/><rect x="38" y="32" width="12" height="14" rx="3" fill="#A3D8C3"/></svg>`,
    heart: `<svg class="pc-layered-paper-icon" viewBox="0 0 64 64" fill="none"><path d="M32 52 C24 45 10 35 10 22 C10 14 16 9 23 9 C27 9 30 11 32 14 C34 11 37 9 41 9 C48 9 54 14 54 22 C54 35 40 45 32 52 Z" fill="#F5B8BE"/><path d="M32 46 C26 40 16 32 16 22 C16 16 20 12 25 12 C28 12 30 13 32 16 C34 13 36 12 39 12 C44 12 48 16 48 22 C48 32 38 40 32 46 Z" fill="#FFFDF9" opacity="0.6"/></svg>`,
    creditCard: `<svg class="pc-layered-paper-icon" viewBox="0 0 64 64" fill="none"><rect x="8" y="16" width="48" height="32" rx="4" fill="#D7CBEB"/><rect x="8" y="22" width="48" height="8" fill="#3D352E"/><rect x="14" y="34" width="8" height="6" rx="1.5" fill="#FEE396"/></svg>`,
    cloudUpload: `<svg class="pc-layered-paper-icon" viewBox="0 0 64 64" fill="none"><path d="M18 42 C14 42 10 38 10 34 C10 30 13 27 17 26 C19 18 26 14 33 14 C40 14 46 19 48 25 C52 26 55 29 55 33 C55 38 51 42 46 42 Z" fill="#BDE0EA"/><path d="M32 46 V26 M24 34 L32 26 L40 34" stroke="#3D352E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    fileText: `<svg class="pc-layered-paper-icon" viewBox="0 0 64 64" fill="none"><path d="M16 10 H38 L48 20 V54 H16 Z" fill="#FAF6ED" stroke="#DCD1BF" stroke-width="1.5"/><polygon points="38,10 38,20 48,20" fill="#E8DEC9"/><line x1="22" y1="28" x2="42" y2="28" stroke="#3D352E" stroke-width="2"/><line x1="22" y1="36" x2="42" y2="36" stroke="#3D352E" stroke-width="2"/></svg>`,
    paperPlane: `<svg class="pc-layered-paper-icon" viewBox="0 0 64 64" fill="none"><path d="M10 30 L54 10 L34 54 L28 36 Z" fill="#BDE0EA" stroke="#3D352E" stroke-width="2"/><path d="M28 36 L54 10" stroke="#3D352E" stroke-width="2"/></svg>`,
    tag: `<svg class="pc-layered-paper-icon" viewBox="0 0 64 64" fill="none"><path d="M14 12 H36 L52 28 L36 44 H14 Z" fill="#FEE396"/><circle cx="22" cy="28" r="3.5" fill="#FAF6ED"/></svg>`,
    trash: `<svg class="pc-layered-paper-icon" viewBox="0 0 64 64" fill="none"><path d="M18 20 H46 L42 54 H22 Z" fill="#D7CBEB"/><path d="M14 16 H50 L46 12 H18 Z" fill="#FAF6ED"/><line x1="28" y1="26" x2="28" y2="46" stroke="#3D352E" stroke-width="2"/><line x1="36" y1="26" x2="36" y2="46" stroke="#3D352E" stroke-width="2"/></svg>`
  };

  const SVG_ICONS = new Proxy(RAW_PAPERCUT_SVGS, {
    get(target, prop) {
      if (typeof window !== 'undefined' && Array.isArray(window.PAPERCUT_ICONS)) {
        const idMap = {
          shoppingBag: 'shopping-bag', cart: 'cart', heart: 'heart', scissors: 'scissors',
          trash: 'trash', plus: 'symbol-plus', minus: 'symbol-minus', download: 'download',
          cloudUpload: 'cloud-upload', check: 'check-mark', creditCard: 'credit-card',
          user: 'user', users: 'users', bell: 'bell', shield: 'shield', fileText: 'file',
          paperPlane: 'paper-plane', sliders: 'sliders', wallet: 'wallet', activity: 'activity',
          eye: 'eye', eyeOff: 'eye-off', tag: 'price-tag'
        };
        const iconId = idMap[prop] || prop;
        const found = window.PAPERCUT_ICONS.find(i => i.id === iconId);
        if (found && found.svg) return found.svg;
      }
      return target[prop] || '';
    }
  });

  /**
   * Generates global SVG Defs with paper-cut filters and pastel gradients
   */
  function createPapercutChartDefs() {
    return `
      <defs>
        <!-- Warm Burnt Umber Soft Drop Shadow for Overlapping Paper Sheets -->
        <filter id="pc-shadow-paper-soft" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="3.5" flood-color="#37281E" flood-opacity="0.12" />
          <feDropShadow dx="0" dy="8" stdDeviation="8" flood-color="#37281E" flood-opacity="0.08" />
        </filter>
        
        <!-- Deeper Shadow for Elevated Elements -->
        <filter id="pc-shadow-paper-deep" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#37281E" flood-opacity="0.16" />
          <feDropShadow dx="0" dy="14" stdDeviation="12" flood-color="#37281E" flood-opacity="0.1" />
        </filter>

        <!-- Pastel Mountain Gradients -->
        <linearGradient id="pc-grad-mint" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#A3D8C3" stop-opacity="0.95" />
          <stop offset="100%" stop-color="#EAF7F1" stop-opacity="0.7" />
        </linearGradient>

        <linearGradient id="pc-grad-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#BDE0EA" stop-opacity="0.95" />
          <stop offset="100%" stop-color="#EDF7FA" stop-opacity="0.65" />
        </linearGradient>

        <linearGradient id="pc-grad-lavender" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#D7CBEB" stop-opacity="0.95" />
          <stop offset="100%" stop-color="#F4F0FA" stop-opacity="0.6" />
        </linearGradient>

        <linearGradient id="pc-grad-peach" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#F7BA9E" stop-opacity="0.95" />
          <stop offset="100%" stop-color="#FDF1EA" stop-opacity="0.6" />
        </linearGradient>

        <linearGradient id="pc-grad-buttercup" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#FEE396" stop-opacity="0.95" />
          <stop offset="100%" stop-color="#FFF9E8" stop-opacity="0.6" />
        </linearGradient>
      </defs>
    `;
  }

  // Toast Notification Manager
  function showPaperToast(message, type = 'mint') {
    let container = document.querySelector('.pc-block-toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'pc-block-toast-container';
      document.body.appendChild(container);
    }
    const toast = document.createElement('div');
    toast.className = 'pc-block-toast';
    toast.innerHTML = `
      <span class="pc-mini-icon-disc" style="width:28px;height:28px;background:var(--pc-${type});">
        ${SVG_ICONS.check}
      </span>
      <span>${message}</span>
    `;
    container.appendChild(toast);
    setTimeout(() => {
      toast.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(15px)';
      setTimeout(() => toast.remove(), 250);
    }, 2800);
  }


  // =========================================================================
  // 2. PART 1: SHADCN BLOCKS ENGINE
  // =========================================================================

  const PapercutBlocks = {
    /**
     * Block 1: Admin & SaaS Analytics Dashboard Block
     */
    renderAdminDashboard(container, customData = {}) {
      if (!container) return;
      const data = Object.assign({
        brandName: "PaperMetrics",
        userName: "강하늘",
        userRole: "프로젝트 매니저",
        userInitials: "하늘",
        metrics: [
          { title: "총 매출 (Total Revenue)", value: "₩48,250,000", change: "+14.2% ↑", isUp: true, color: "mint", icon: "wallet" },
          { title: "유료 구독자 (Subscriptions)", value: "2,420명", change: "+8.5% ↑", isUp: true, color: "lavender", icon: "users" },
          { title: "현재 접속자 (Active Now)", value: "573명", change: "+24.1% ↑", isUp: true, color: "sky", icon: "activity" },
          { title: "금월 판매량 (Sales)", value: "1,840건", change: "-1.8% ↓", isUp: false, color: "peach", icon: "shoppingBag" }
        ],
        transactions: [
          { name: "민지수", desc: "Pro 멤버십 연간 구독권", price: "+₩290,000", time: "3분 전", color: "mint" },
          { name: "스튜디오 오리가미", desc: "스타터 크래프트 킷 라이선스", price: "+₩45,000", time: "18분 전", color: "peach" },
          { name: "김도현", desc: "커스텀 스티커 & 마스킹 테이프", price: "+₩18,500", time: "42분 전", color: "lavender" },
          { name: "페이퍼랩 코리아", desc: "엔터프라이즈 팀 시트 (10인)", price: "+₩990,000", time: "1시간 전", color: "buttercup" }
        ]
      }, customData);

      const html = `
        <div class="pc-block-admin">
          <!-- Washi tape decoration at top -->
          <div class="pc-washi-tape-strip is-peach"></div>

          <!-- Header -->
          <header class="pc-admin-header">
            <div class="pc-admin-brand">
              <div class="pc-admin-brand-logo">
                <span style="color:var(--pc-mint-dark);">${SVG_ICONS.scissors}</span>
              </div>
              <div class="pc-admin-brand-title">
                ${data.brandName}
                <span class="pc-pill-badge is-mint" style="font-size:11px;">v2.5 Papercut</span>
              </div>
            </div>

            <div class="pc-admin-header-actions">
              <div class="pc-admin-search-wrap">
                ${SVG_ICONS.search}
                <input type="text" class="pc-carved-input pc-admin-search-input" placeholder="청구서, 고객명, 주문 검색...">
              </div>
              <button class="pc-admin-notification-btn" title="알림">
                <span style="width:20px;height:20px;display:flex;">${SVG_ICONS.bell}</span>
                <span class="pc-admin-notification-badge"></span>
              </button>
              <div class="pc-admin-user-profile" title="프로필 설정">
                <div class="pc-admin-user-avatar">${data.userInitials}</div>
                <div class="pc-admin-user-info">
                  <span class="pc-admin-user-name">${data.userName}</span>
                  <span class="pc-admin-user-role">${data.userRole}</span>
                </div>
              </div>
            </div>
          </header>

          <!-- 4 Metric Cards -->
          <div class="pc-metric-grid">
            ${data.metrics.map(m => `
              <div class="pc-metric-card is-${m.color}">
                <div class="pc-metric-header">
                  <span class="pc-metric-title">${m.title}</span>
                  <div class="pc-mini-icon-disc" style="background:var(--pc-${m.color}-light);color:var(--pc-${m.color}-dark);">
                    ${SVG_ICONS[m.icon] || SVG_ICONS.wallet}
                  </div>
                </div>
                <div class="pc-metric-value">${m.value}</div>
                <div class="pc-metric-footer">
                  <span class="pc-pill-badge is-${m.isUp ? 'mint' : 'rose'}">
                    ${m.isUp ? SVG_ICONS.arrowUp : SVG_ICONS.arrowDown}
                    ${m.change}
                  </span>
                  <span>지난달 대비</span>
                </div>
              </div>
            `).join('')}
          </div>

          <!-- Middle Split: Chart & Ledger -->
          <div class="pc-admin-content-split">
            <!-- Left Chart Container -->
            <div class="pc-chart-card pc-admin-chart-box">
              <div class="pc-chart-header">
                <div class="pc-chart-title-wrap">
                  <span class="pc-chart-title">
                    <span style="color:var(--pc-mint-dark);width:20px;height:20px;display:flex;">${SVG_ICONS.activity}</span>
                    월간 매출 추이 (Mountain Terrain Area)
                  </span>
                  <span class="pc-chart-subtitle">3겹 오버래핑 파스텔 종이 마운틴 지형 차트</span>
                </div>
                <div style="display:flex;gap:6px;">
                  <button class="pc-pill-badge is-mint pc-period-btn" data-period="monthly">월간</button>
                  <button class="pc-pill-badge pc-period-btn" data-period="weekly">주간</button>
                </div>
              </div>
              <div class="pc-chart-mount-area" style="min-height:260px;"></div>
            </div>

            <!-- Right Transactions Ledger & Quick Actions -->
            <div style="display:flex;flex-direction:column;gap:20px;">
              <!-- Transactions Ledger -->
              <div class="pc-block-card pc-admin-ledger">
                <div class="pc-admin-ledger-header">
                  <span class="pc-admin-ledger-title">최근 거래 내역 (Recent Ledger)</span>
                  <span class="pc-pill-badge is-lavender" style="font-size:11px;">실시간 동기화</span>
                </div>
                <div class="pc-ledger-list">
                  ${data.transactions.map(t => `
                    <div class="pc-ledger-item">
                      <div class="pc-ledger-left">
                        <div class="pc-ledger-avatar-seal" style="background:var(--pc-${t.color}-light);color:var(--pc-${t.color}-dark);">
                          ${t.name.slice(0, 1)}
                        </div>
                        <div class="pc-ledger-info">
                          <span class="pc-ledger-name">${t.name}</span>
                          <span class="pc-ledger-desc">${t.desc}</span>
                        </div>
                      </div>
                      <div class="pc-ledger-right">
                        <span class="pc-ledger-price">${t.price}</span>
                        <span class="pc-ledger-time">${t.time}</span>
                      </div>
                    </div>
                  `).join('')}
                </div>
              </div>

              <!-- Quick Actions Stack -->
              <div class="pc-block-card pc-admin-actions-card">
                <span class="pc-admin-ledger-title">빠른 작업 (Quick Actions)</span>
                <div class="pc-actions-grid">
                  <button class="pc-action-btn" data-action="invoice">
                    <span style="color:var(--pc-mint-dark);width:22px;height:22px;display:flex;">${SVG_ICONS.creditCard}</span>
                    <span>새 청구서 작성</span>
                  </button>
                  <button class="pc-action-btn" data-action="csv">
                    <span style="color:var(--pc-lavender-dark);width:22px;height:22px;display:flex;">${SVG_ICONS.download}</span>
                    <span>CSV 내보내기</span>
                  </button>
                  <button class="pc-action-btn" data-action="memo">
                    <span style="color:var(--pc-peach-dark);width:22px;height:22px;display:flex;">${SVG_ICONS.mail}</span>
                    <span>종이 메모 발송</span>
                  </button>
                  <button class="pc-action-btn" data-action="print">
                    <span style="color:var(--pc-sky-dark);width:22px;height:22px;display:flex;">${SVG_ICONS.printer}</span>
                    <span>발송 티켓 인쇄</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;

      container.innerHTML = html;

      // Mount embedded Area chart
      const chartMount = container.querySelector('.pc-chart-mount-area');
      if (chartMount) {
        PapercutCharts.renderAreaChart(chartMount);
      }

      // Quick actions event bindings
      container.querySelectorAll('.pc-action-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const action = btn.dataset.action;
          const messages = {
            invoice: "새 청구서 작성 서식이 생성되었습니다.",
            csv: "최근 거래 데이터 CSV 파일이 다운로드됩니다.",
            memo: "팀원들에게 보낼 종이 메모 템플릿이 열렸습니다.",
            print: "배송 주문 발송 티켓 4건이 인쇄 대기열에 추가되었습니다."
          };
          showPaperToast(messages[action] || "작업이 완료되었습니다.", 'mint');
        });
      });

      // Search filter interaction
      const searchInput = container.querySelector('.pc-admin-search-input');
      const ledgerItems = container.querySelectorAll('.pc-ledger-item');
      if (searchInput) {
        searchInput.addEventListener('input', (e) => {
          const q = e.target.value.toLowerCase().trim();
          ledgerItems.forEach(item => {
            const text = item.textContent.toLowerCase();
            item.style.display = text.includes(q) ? 'flex' : 'none';
          });
        });
      }
    },

    /**
     * Block 2: Authentication Block
     */
    renderAuthBlock(container, customData = {}) {
      if (!container) return;
      const html = `
        <div class="pc-block-auth">
          <!-- Craft Envelope Card -->
          <div class="pc-envelope-card">
            <!-- Folded Flap Shadow at Top -->
            <div class="pc-envelope-flap"></div>
            <div class="pc-envelope-seal">
              ${SVG_ICONS.scissors}
            </div>

            <!-- Envelope Header -->
            <div class="pc-auth-header">
              <h2 class="pc-auth-title" id="pc-auth-title-text">로그인 (Sign In)</h2>
              <p class="pc-auth-subtitle" id="pc-auth-sub-text">손으로 빚어낸 종이 공예 감성의 워크스페이스에 오신 것을 환영합니다.</p>
            </div>

            <!-- Tabs: 로그인 / 회원가입 -->
            <div class="pc-auth-tabs">
              <button class="pc-auth-tab is-active" data-mode="signin">로그인 (Sign In)</button>
              <button class="pc-auth-tab" data-mode="signup">회원가입 (Sign Up)</button>
            </div>

            <!-- Social Login Buttons -->
            <div class="pc-social-buttons">
              <button class="pc-social-btn" title="Google로 계속하기">${SVG_ICONS.google}</button>
              <button class="pc-social-btn" title="GitHub로 계속하기">${SVG_ICONS.github}</button>
              <button class="pc-social-btn" title="Apple로 계속하기">${SVG_ICONS.apple}</button>
            </div>

            <div class="pc-cutline-divider">또는 이메일로 계속하기</div>

            <!-- Form -->
            <form class="pc-auth-form" onsubmit="return false;">
              <div class="pc-form-group pc-signup-only" style="display:none;">
                <label class="pc-form-label">이름 (Full Name)</label>
                <input type="text" class="pc-carved-input" placeholder="홍길동">
              </div>

              <div class="pc-form-group">
                <label class="pc-form-label">이메일 계정 (Email)</label>
                <input type="email" class="pc-carved-input" placeholder="artisan@papercut.io" value="crafter@papercut.io">
              </div>

              <div class="pc-form-group">
                <div class="pc-form-label">
                  <span>비밀번호 (Password)</span>
                  <a href="#forgot" class="pc-text-link pc-signin-only">비밀번호 찾기</a>
                </div>
                <div class="pc-input-with-icon">
                  <input type="password" id="pc-auth-pw" class="pc-carved-input" placeholder="••••••••" value="paper1234!">
                  <button type="button" class="pc-password-toggle-btn" id="pc-pw-toggle" title="비밀번호 보기/숨기기">
                    ${SVG_ICONS.eye}
                  </button>
                </div>
              </div>

              <!-- Remember Me Origami Checkbox -->
              <div class="pc-auth-options pc-signin-only">
                <label class="pc-checkbox-label" style="display:inline-flex;align-items:center;gap:8px;cursor:pointer;">
                  <input type="checkbox" class="pc-checkbox-input" checked>
                  <span class="pc-checkbox-box"></span>
                  <span>아이디 저장 및 자동 로그인</span>
                </label>
              </div>

              <button type="button" class="pc-btn-block-action" id="pc-auth-submit-btn">
                로그인 완료 (Enter Studio)
              </button>
            </form>
          </div>
        </div>
      `;

      container.innerHTML = html;

      // Tab switcher interaction
      const tabs = container.querySelectorAll('.pc-auth-tab');
      const titleText = container.querySelector('#pc-auth-title-text');
      const subText = container.querySelector('#pc-auth-sub-text');
      const submitBtn = container.querySelector('#pc-auth-submit-btn');
      const signupFields = container.querySelectorAll('.pc-signup-only');
      const signinFields = container.querySelectorAll('.pc-signin-only');

      tabs.forEach(tab => {
        tab.addEventListener('click', () => {
          tabs.forEach(t => t.classList.remove('is-active'));
          tab.classList.add('is-active');
          const isSignUp = tab.dataset.mode === 'signup';

          if (isSignUp) {
            titleText.textContent = "회원가입 (Sign Up)";
            subText.textContent = "종이 질감의 아름다운 디자인 시스템 멤버십을 시작하세요.";
            submitBtn.textContent = "새 계정 생성하기 (Create Account)";
            signupFields.forEach(el => el.style.display = 'flex');
            signinFields.forEach(el => el.style.display = 'none');
          } else {
            titleText.textContent = "로그인 (Sign In)";
            subText.textContent = "손으로 빚어낸 종이 공예 감성의 워크스페이스에 오신 것을 환영합니다.";
            submitBtn.textContent = "로그인 완료 (Enter Studio)";
            signupFields.forEach(el => el.style.display = 'none');
            signinFields.forEach(el => el.style.display = '');
          }
        });
      });

      // Password visibility toggle
      const pwInput = container.querySelector('#pc-auth-pw');
      const pwToggle = container.querySelector('#pc-pw-toggle');
      if (pwToggle && pwInput) {
        let isVisible = false;
        pwToggle.addEventListener('click', () => {
          isVisible = !isVisible;
          pwInput.type = isVisible ? 'text' : 'password';
          pwToggle.innerHTML = isVisible ? SVG_ICONS.eyeOff : SVG_ICONS.eye;
        });
      }

      // Submit animation
      if (submitBtn) {
        submitBtn.addEventListener('click', () => {
          const isSignUp = container.querySelector('.pc-auth-tab.is-active').dataset.mode === 'signup';
          showPaperToast(isSignUp ? "회원가입이 성공적으로 완료되었습니다!" : "반갑습니다! 스튜디오에 접속했습니다.", 'mint');
        });
      }
    },

    /**
     * Block 3: Settings & Profile Layout Block
     */
    renderSettingsBlock(container, customData = {}) {
      if (!container) return;

      const TAB_TEMPLATES = {
        general: `
          <div class="pc-washi-tape-strip is-mint"></div>
          <div class="pc-settings-header">
            <h3 class="pc-settings-section-title">일반 프로필 (General Profile)</h3>
            <p class="pc-settings-section-desc">팀원과 커뮤니티에 공개되는 기본 정보와 작업자 프로필을 관리합니다.</p>
          </div>

          <!-- Profile Photo Uploader with Deckle Frame -->
          <div class="pc-profile-upload-row">
            <div class="pc-profile-avatar-wrap">
              <div class="pc-deckle-frame">
                <div class="pc-avatar-placeholder" style="background:#FAF6ED;display:flex;align-items:center;justify-content:center;width:64px;height:64px;border-radius:12px;">
                  <div style="width:38px;height:38px;">${SVG_ICONS.user}</div>
                </div>
              </div>
            </div>
            <div class="pc-profile-actions">
              <button type="button" class="pc-pill-badge is-mint" id="pc-photo-upload-btn" style="cursor:pointer;padding:8px 16px;display:inline-flex;align-items:center;gap:6px;">
                <span style="width:16px;height:16px;display:inline-flex;">${SVG_ICONS.cloudUpload}</span> 사진 변경
              </button>
              <button type="button" class="pc-pill-badge is-rose" id="pc-photo-del-btn" style="cursor:pointer;padding:8px 16px;display:inline-flex;align-items:center;gap:6px;">
                <span style="width:16px;height:16px;display:inline-flex;">${SVG_ICONS.scissors}</span> 삭제
              </button>
              <input type="file" id="pc-avatar-file-input" style="display:none;" accept="image/*">
            </div>
          </div>

          <!-- Form Fields -->
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
            <div class="pc-form-group">
              <label class="pc-form-label">표시 이름 (Display Name)</label>
              <input type="text" class="pc-carved-input" value="이지안 (Jian Lee)">
            </div>
            <div class="pc-form-group">
              <label class="pc-form-label">사용자 핸들 (Handle)</label>
              <input type="text" class="pc-carved-input" value="@jian_papercraft">
            </div>
          </div>

          <div class="pc-form-group">
            <label class="pc-form-label">작업실 위치 & 소속 (Studio Location)</label>
            <input type="text" class="pc-carved-input" value="서울 종로구 자하문로 종이공작소 302호">
          </div>

          <div class="pc-form-group">
            <label class="pc-form-label">소개 및 바이오 (Bio - Ruled Paper Ledger)</label>
            <textarea class="pc-carved-textarea" rows="3">핸드메이드 350g 코튼지와 키리가미 기법을 결합한 인터페이스를 탐구합니다. 디지털 공간에서도 종이 공예의 따스한 촉각과 깊이를 구현하는 것을 지향합니다.</textarea>
          </div>

          <div class="pc-form-group">
            <label class="pc-form-label">전문 공예 분야 태그 (Craft Specialties)</label>
            <div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:6px;">
              <span class="pc-pill-badge is-mint">오리가미 입체설계</span>
              <span class="pc-pill-badge is-peach">350g 카드스톡</span>
              <span class="pc-pill-badge is-lavender">키리가미 UI</span>
              <span class="pc-pill-badge is-buttercup">양피지 질감 셰이더</span>
            </div>
          </div>

          <div style="display:flex;justify-content:flex-end;margin-top:18px;">
            <button type="button" class="pc-btn-block-action" id="pc-settings-save-btn" style="width:auto;padding:10px 24px;display:inline-flex;align-items:center;gap:8px;">
              <span style="width:16px;height:16px;display:inline-flex;">${SVG_ICONS.check}</span> 프로필 변경사항 저장
            </button>
          </div>
        `,

        account: `
          <div class="pc-washi-tape-strip is-lavender"></div>
          <div class="pc-settings-header">
            <h3 class="pc-settings-section-title">계정 및 보안 (Account & Security)</h3>
            <p class="pc-settings-section-desc">로그인 자격 증명, 2단계 인증(2FA), 접속 기기 세션 및 보안 상태를 관리합니다.</p>
          </div>

          <!-- Email Address with Verified Badge -->
          <div class="pc-form-group">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;">
              <label class="pc-form-label" style="margin-bottom:0;">이메일 계정 (Email Address)</label>
              <span class="pc-pill-badge is-mint" style="font-size:10.5px;padding:2px 8px;display:inline-flex;align-items:center;gap:4px;">
                <span style="width:12px;height:12px;display:inline-flex;">${SVG_ICONS.check}</span> 이메일 인증 완료
              </span>
            </div>
            <input type="email" class="pc-carved-input" value="jian.craft@papercut-design.art" readonly style="background:#FAF7F0;">
          </div>

          <!-- Password Change Card -->
          <div style="background:#FAF7F0;border:1.5px solid #E4DACB;border-radius:12px;padding:16px;margin:16px 0;box-shadow:0 1.5px 0 #D5C9B6;">
            <div style="font-size:13.5px;font-weight:800;color:var(--pc-ink);margin-bottom:10px;display:flex;align-items:center;gap:6px;">
              <span style="width:16px;height:16px;display:inline-flex;">${SVG_ICONS.shield}</span> 비밀번호 변경 (Change Password)
            </div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
              <div>
                <label class="pc-form-label" style="font-size:11px;">현재 비밀번호</label>
                <input type="password" class="pc-carved-input" value="••••••••••••">
              </div>
              <div>
                <label class="pc-form-label" style="font-size:11px;">새 비밀번호</label>
                <input type="password" class="pc-carved-input" placeholder="새로운 안전한 암호 입력">
              </div>
            </div>
            <div style="margin-top:8px;display:flex;align-items:center;gap:8px;">
              <span style="font-size:11px;font-weight:700;color:var(--pc-ink-muted);">보안 강도:</span>
              <div style="display:flex;gap:4px;flex:1;">
                <div style="height:6px;flex:1;background:var(--pc-mint);border-radius:3px;"></div>
                <div style="height:6px;flex:1;background:var(--pc-mint);border-radius:3px;"></div>
                <div style="height:6px;flex:1;background:var(--pc-mint);border-radius:3px;"></div>
                <div style="height:6px;flex:1;background:#E2D8C6;border-radius:3px;"></div>
              </div>
              <span style="font-size:11px;font-weight:800;color:var(--pc-mint-dark);">안전 (Strong)</span>
            </div>
          </div>

          <!-- Two-Factor Authentication (2FA) -->
          <div style="display:flex;justify-content:space-between;align-items:center;background:#FAF7F0;border:1.5px solid #E4DACB;border-radius:12px;padding:14px 16px;margin-bottom:16px;">
            <div style="display:flex;align-items:center;gap:12px;">
              <div style="width:36px;height:36px;border-radius:8px;background:#E8F6EE;border:1px solid #B7E4CB;display:flex;align-items:center;justify-content:center;">
                <div style="width:20px;height:20px;display:flex;">${SVG_ICONS.shield}</div>
              </div>
              <div>
                <div style="font-size:13.5px;font-weight:800;color:var(--pc-ink);">OTP 2단계 보안 인증 (2FA)</div>
                <div style="font-size:11.5px;color:var(--pc-ink-muted);">로그인 시 6자리 종이 인증코드(OTP)를 요구하여 계정을 보호합니다.</div>
              </div>
            </div>
            <label class="pc-paper-switch">
              <input type="checkbox" checked>
              <span class="pc-paper-switch-track"><span class="pc-paper-switch-thumb"></span></span>
            </label>
          </div>

          <!-- Active Sessions Ledger -->
          <div>
            <div style="font-size:13px;font-weight:800;color:var(--pc-ink);margin-bottom:8px;">활성 로그인 세션 (Active Sessions)</div>
            <div style="display:flex;flex-direction:column;gap:6px;">
              <div style="display:flex;justify-content:space-between;align-items:center;padding:8px 12px;background:#FAF7F0;border:1px solid #E4DACB;border-radius:8px;">
                <div>
                  <span style="font-size:12px;font-weight:800;color:var(--pc-ink);">MacBook Pro 16" (서울 본부)</span>
                  <span class="pc-pill-badge is-mint" style="font-size:9.5px;padding:1px 5px;margin-left:6px;">현재 기기</span>
                  <div style="font-size:10.5px;color:var(--pc-ink-muted);">Edge Browser · 192.168.1.10 · 지금 활동 중</div>
                </div>
                <button type="button" class="pc-pill-badge is-peach" style="font-size:10.5px;cursor:pointer;">기기 관리</button>
              </div>
              <div style="display:flex;justify-content:space-between;align-items:center;padding:8px 12px;background:#FAF7F0;border:1px solid #E4DACB;border-radius:8px;">
                <div>
                  <span style="font-size:12px;font-weight:800;color:var(--pc-ink);">iPad Pro 12.9" (판교 디자인랩)</span>
                  <div style="font-size:10.5px;color:var(--pc-ink-muted);">Safari Mobile · 2시간 전 활동</div>
                </div>
                <button type="button" class="pc-pill-badge is-rose" style="font-size:10.5px;cursor:pointer;">세션 종료</button>
              </div>
            </div>
          </div>

          <!-- Danger Zone -->
          <div style="margin-top:20px;padding:12px 14px;background:#FFF2F2;border:1.5px solid #F5C6C6;border-radius:10px;display:flex;justify-content:space-between;align-items:center;">
            <div>
              <div style="font-size:12.5px;font-weight:800;color:#8A2C2C;">계정 비활성화 및 탈퇴 (Danger Zone)</div>
              <div style="font-size:11px;color:#A84E4E;">모든 페이퍼 프로젝트와 저장된 디자인 에셋이 영구 삭제됩니다.</div>
            </div>
            <button type="button" class="pc-pill-badge is-rose" style="cursor:pointer;font-weight:800;">계정 탈퇴 요청</button>
          </div>
        `,

        appearance: `
          <div class="pc-washi-tape-strip is-peach"></div>
          <div class="pc-settings-header">
            <h3 class="pc-settings-section-title">테마 및 외형 설정 (Appearance & Theme)</h3>
            <p class="pc-settings-section-desc">종이 지질(Stock), 인터페이스 톤, 파스텔 잉크 팔레트 및 공예 모션을 맞춤 설정합니다.</p>
          </div>

          <!-- Paper Stock Selector -->
          <div style="margin-bottom:16px;">
            <label class="pc-form-label" style="margin-bottom:8px;">기본 종이 지질 선택 (Primary Paper Stock)</label>
            <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(130px, 1fr));gap:10px;" id="pc-settings-stock-list">
              <div class="pc-stock-card is-active" data-stock="cotton" style="padding:10px;border-radius:10px;background:#FAF7F0;border:2px solid var(--pc-mint);cursor:pointer;">
                <div style="font-size:12px;font-weight:800;color:var(--pc-mint-dark);">300g 수제 코튼지</div>
                <div style="font-size:10px;color:var(--pc-ink-muted);">포근하고 부드러운 순면 펄프</div>
              </div>
              <div class="pc-stock-card" data-stock="hanji" style="padding:10px;border-radius:10px;background:#FAF7F0;border:1.5px solid #E4DACB;cursor:pointer;">
                <div style="font-size:12px;font-weight:800;color:var(--pc-ink);">닥나무 한지</div>
                <div style="font-size:10px;color:var(--pc-ink-muted);">자연스러운 닥나무 결</div>
              </div>
              <div class="pc-stock-card" data-stock="linen" style="padding:10px;border-radius:10px;background:#FAF7F0;border:1.5px solid #E4DACB;cursor:pointer;">
                <div style="font-size:12px;font-weight:800;color:var(--pc-ink);">프렌치 린넨지</div>
                <div style="font-size:10px;color:var(--pc-ink-muted);">직조 패브릭 격자 텍스처</div>
              </div>
              <div class="pc-stock-card" data-stock="parchment" style="padding:10px;border-radius:10px;background:#FAF7F0;border:1.5px solid #E4DACB;cursor:pointer;">
                <div style="font-size:12px;font-weight:800;color:var(--pc-ink);">빈티지 양피지</div>
                <div style="font-size:10px;color:var(--pc-ink-muted);">앤틱한 에이징 고문서 느낌</div>
              </div>
            </div>
          </div>

          <!-- Color Tone Modes -->
          <div style="margin-bottom:16px;">
            <label class="pc-form-label" style="margin-bottom:8px;">인터페이스 색상 무드 (Interface Mode)</label>
            <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;">
              <div style="padding:12px;background:#FAF7F0;border:2px solid var(--pc-mint);border-radius:10px;cursor:pointer;text-align:center;">
                <div style="font-size:13px;font-weight:800;color:var(--pc-mint-dark);">매트 크림 (#FAF7F0)</div>
                <div style="font-size:10px;color:var(--pc-ink-muted);">따뜻한 수제 공방 감성</div>
              </div>
              <div style="padding:12px;background:#FFFDF9;border:1.5px solid #E4DACB;border-radius:10px;cursor:pointer;text-align:center;">
                <div style="font-size:13px;font-weight:800;color:var(--pc-ink);">클린 화이트 (#FFFFFF)</div>
                <div style="font-size:10px;color:var(--pc-ink-muted);">모던 미니멀 카드스톡</div>
              </div>
              <div style="padding:12px;background:#241E19;border:1.5px solid #3F352C;border-radius:10px;cursor:pointer;text-align:center;color:#FAF6ED;">
                <div style="font-size:13px;font-weight:800;color:#FEE396);">미드나잇 다크 (#241E19)</div>
                <div style="font-size:10px;color:#A89E92;">밤의 섀도우박스 조명</div>
              </div>
            </div>
          </div>

          <!-- Pastel Accent Inks -->
          <div style="margin-bottom:16px;">
            <label class="pc-form-label" style="margin-bottom:8px;">포인트 파스텔 잉크 (Pastel Accent Ink)</label>
            <div style="display:flex;align-items:center;gap:10px;">
              <div style="width:32px;height:32px;border-radius:999px;background:#A3D8C3;border:2.5px solid #FFF;box-shadow:0 2px 5px rgba(74,58,42,0.18);cursor:pointer;" title="Sage Mint"></div>
              <div style="width:28px;height:28px;border-radius:999px;background:#F7BA9E;border:2px solid #FFF;box-shadow:0 1px 3px rgba(74,58,42,0.15);cursor:pointer;" title="Warm Peach"></div>
              <div style="width:28px;height:28px;border-radius:999px;background:#D7CBEB;border:2px solid #FFF;box-shadow:0 1px 3px rgba(74,58,42,0.15);cursor:pointer;" title="Lavender Dusk"></div>
              <div style="width:28px;height:28px;border-radius:999px;background:#FEE396;border:2px solid #FFF;box-shadow:0 1px 3px rgba(74,58,42,0.15);cursor:pointer;" title="Buttercup"></div>
              <div style="width:28px;height:28px;border-radius:999px;background:#BDE0EA;border:2px solid #FFF;box-shadow:0 1px 3px rgba(74,58,42,0.15);cursor:pointer;" title="Morning Sky"></div>
              <div style="width:28px;height:28px;border-radius:999px;background:#F5B8BE;border:2px solid #FFF;box-shadow:0 1px 3px rgba(74,58,42,0.15);cursor:pointer;" title="Soft Rose"></div>
            </div>
          </div>

          <!-- Motion Settings -->
          <div class="pc-switch-row" style="margin-top:14px;">
            <div class="pc-switch-info">
              <span class="pc-switch-title">3D 오리가미 접힘 & 팝업북 모션 활성화</span>
              <span class="pc-switch-desc">컴포넌트 조작 시 종이가 들썩이고 접히는 물리 애니메이션을 실행합니다.</span>
            </div>
            <label class="pc-paper-switch">
              <input type="checkbox" checked>
              <span class="pc-paper-switch-track"><span class="pc-paper-switch-thumb"></span></span>
            </label>
          </div>
        `,

        notifications: `
          <div class="pc-washi-tape-strip is-buttercup"></div>
          <div class="pc-settings-header">
            <h3 class="pc-settings-section-title">알림 수신 환경설정 (Notification Preferences)</h3>
            <p class="pc-settings-section-desc">이메일, 데스크톱 브라우저 알림, 모바일 메시지 수신 항목을 세밀하게 제어합니다.</p>
          </div>

          <div style="display:flex;flex-direction:column;gap:12px;">
            <div class="pc-switch-row">
              <div class="pc-switch-info">
                <span class="pc-switch-title">새로운 주문 및 청구서 발행 알림</span>
                <span class="pc-switch-desc">스토어에서 결제가 완료되거나 신규 주문서가 접수될 때 즉시 알림을 받습니다.</span>
              </div>
              <label class="pc-paper-switch">
                <input type="checkbox" checked>
                <span class="pc-paper-switch-track"><span class="pc-paper-switch-thumb"></span></span>
              </label>
            </div>

            <div class="pc-switch-row">
              <div class="pc-switch-info">
                <span class="pc-switch-title">종이공예 주간 뉴스레터 & 디자인 팁</span>
                <span class="pc-switch-desc">매주 목요일 최신 페이퍼아트 템플릿과 디자인 시스템 가이드를 받아봅니다.</span>
              </div>
              <label class="pc-paper-switch">
                <input type="checkbox" checked>
                <span class="pc-paper-switch-track"><span class="pc-paper-switch-thumb"></span></span>
              </label>
            </div>

            <div class="pc-switch-row">
              <div class="pc-switch-info">
                <span class="pc-switch-title">보안 및 새 기기 로그인 경고</span>
                <span class="pc-switch-desc">인증되지 않은 브라우저나 새로운 IP에서 로그인할 때 즉시 경고 메일을 발송합니다.</span>
              </div>
              <label class="pc-paper-switch">
                <input type="checkbox" checked disabled>
                <span class="pc-paper-switch-track"><span class="pc-paper-switch-thumb"></span></span>
              </label>
            </div>

            <div class="pc-switch-row">
              <div class="pc-switch-info">
                <span class="pc-switch-title">프로젝트 팀 피드백 및 댓글 멘션</span>
                <span class="pc-switch-desc">협업 중인 프로젝트에서 내 아이디(@)가 멘션되거나 댓글이 달릴 때 알림을 받습니다.</span>
              </div>
              <label class="pc-paper-switch">
                <input type="checkbox" checked>
                <span class="pc-paper-switch-track"><span class="pc-paper-switch-thumb"></span></span>
              </label>
            </div>

            <div class="pc-switch-row">
              <div class="pc-switch-info">
                <span class="pc-switch-title">플랫폼 업데이트 및 시스템 점검 공지</span>
                <span class="pc-switch-desc">새로운 릴리즈 기능 및 정기 서버 점검 안내를 수신합니다.</span>
              </div>
              <label class="pc-paper-switch">
                <input type="checkbox">
                <span class="pc-paper-switch-track"><span class="pc-paper-switch-thumb"></span></span>
              </label>
            </div>
          </div>

          <div style="display:flex;justify-content:flex-end;margin-top:16px;">
            <button type="button" class="pc-btn-block-action" id="pc-settings-save-btn" style="width:auto;padding:10px 24px;display:inline-flex;align-items:center;gap:8px;">
              <span style="width:16px;height:16px;display:inline-flex;">${SVG_ICONS.check}</span> 알림 설정 저장
            </button>
          </div>
        `,

        billing: `
          <div class="pc-washi-tape-strip is-sky"></div>
          <div class="pc-settings-header">
            <h3 class="pc-settings-section-title">결제 및 멤버십 플랜 (Billing & Plans)</h3>
            <p class="pc-settings-section-desc">현재 구독 플랜, 사용량 쿼터, 결제 수단 및 영수증 내역을 확인하고 관리합니다.</p>
          </div>

          <!-- Current Active Membership Card -->
          <div style="background:linear-gradient(135deg, #FAF7F0 0%, #F5EFE3 100%);border:2px solid #8EC5A6;border-radius:14px;padding:18px;position:relative;box-shadow:0 3px 10px rgba(44,107,80,0.12);margin-bottom:18px;">
            <div style="position:absolute;top:-10px;right:18px;background:#E8F6EE;border:1.5px solid #8EC5A6;border-radius:999px;padding:3px 10px;font-size:10.5px;font-weight:800;color:#1A543B;display:flex;align-items:center;gap:4px;">
              <span style="width:12px;height:12px;display:inline-flex;">${SVG_ICONS.check}</span> 이용 중인 플랜
            </div>
            <div style="font-size:11px;font-weight:800;color:var(--pc-mint-dark);letter-spacing:0.5px;text-transform:uppercase;">MEMBERSHIP PLAN</div>
            <div style="display:flex;justify-content:space-between;align-items:baseline;margin:4px 0 10px;">
              <div style="font-size:20px;font-weight:800;color:var(--pc-ink);">Pro Artisan (프로 장인 플랜)</div>
              <div style="font-size:18px;font-weight:800;color:var(--pc-mint-dark);">₩29,000 <span style="font-size:12px;color:var(--pc-ink-muted);font-weight:600;">/ 월</span></div>
            </div>
            <p style="font-size:12px;color:var(--pc-ink-muted);line-height:1.5;margin-bottom:14px;">무제한 659종 페이퍼컷 아이콘 벡터 다운로드, 100종 3D 배경 플레이트 라이브러리 전체 열람, 상업적 라이선스 제공.</p>
            <div style="display:flex;gap:8px;">
              <button type="button" class="pc-pill-badge is-mint" style="cursor:pointer;padding:6px 14px;font-weight:800;">플랜 업그레이드</button>
              <button type="button" class="pc-pill-badge is-lavender" style="cursor:pointer;padding:6px 14px;">결제 주기 변경</button>
            </div>
          </div>

          <!-- Usage Progress Meters -->
          <div style="margin-bottom:18px;">
            <div style="font-size:13px;font-weight:800;color:var(--pc-ink);margin-bottom:8px;">이번 달 리소스 사용량 (Usage Quotas)</div>
            <div style="display:flex;flex-direction:column;gap:10px;">
              <div>
                <div style="display:flex;justify-content:space-between;font-size:11.5px;font-weight:700;margin-bottom:4px;">
                  <span>클라우드 페이퍼 스토리지</span>
                  <span>4.8 GB / 10 GB (48%)</span>
                </div>
                <div style="height:8px;background:#EDE4D5;border-radius:4px;overflow:hidden;">
                  <div style="width:48%;height:100%;background:var(--pc-mint);border-radius:4px;"></div>
                </div>
              </div>
              <div>
                <div style="display:flex;justify-content:space-between;font-size:11.5px;font-weight:700;margin-bottom:4px;">
                  <span>팀 공동 작업자 계정</span>
                  <span>3명 / 5명 (60%)</span>
                </div>
                <div style="height:8px;background:#EDE4D5;border-radius:4px;overflow:hidden;">
                  <div style="width:60%;height:100%;background:var(--pc-peach);border-radius:4px;"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Payment Method Card -->
          <div style="background:#FAF7F0;border:1.5px solid #E4DACB;border-radius:12px;padding:14px 16px;margin-bottom:18px;display:flex;justify-content:space-between;align-items:center;">
            <div style="display:flex;align-items:center;gap:12px;">
              <div style="width:42px;height:28px;border-radius:5px;background:#D7CBEB;border:1px solid #B8A8DC;display:flex;align-items:center;justify-content:center;">
                <div style="width:20px;height:20px;display:flex;">${SVG_ICONS.creditCard}</div>
              </div>
              <div>
                <div style="font-size:13px;font-weight:800;color:var(--pc-ink);">현대카드 ZERO (신용카드)</div>
                <div style="font-size:11px;color:var(--pc-ink-muted);">•••• •••• •••• 8842 · 유효기간 08/28</div>
              </div>
            </div>
            <button type="button" class="pc-pill-badge is-lavender" style="cursor:pointer;">카드 변경</button>
          </div>

          <!-- Recent Invoices Table -->
          <div>
            <div style="font-size:13px;font-weight:800;color:var(--pc-ink);margin-bottom:8px;">과거 청구서 및 영수증 (Invoice History)</div>
            <div style="border:1.5px solid #E4DACB;border-radius:10px;overflow:hidden;background:#FAF7F0;">
              <div style="display:grid;grid-template-columns:2fr 2fr 1.5fr 1fr;padding:8px 12px;background:#EFE6D6;font-size:11px;font-weight:800;color:var(--pc-ink);">
                <span>결제 일자</span>
                <span>주문 번호</span>
                <span>결제 금액</span>
                <span style="text-align:right;">영수증</span>
              </div>
              <div style="display:grid;grid-template-columns:2fr 2fr 1.5fr 1fr;padding:10px 12px;font-size:11.5px;border-top:1px solid #E8DEC9;align-items:center;">
                <span>2026.10.01</span>
                <span style="font-family:monospace;font-size:10.5px;">INV-202610-091</span>
                <span style="font-weight:700;">₩29,000</span>
                <span style="text-align:right;"><button type="button" class="pc-pill-badge is-mint" style="padding:2px 8px;font-size:10px;cursor:pointer;display:inline-flex;align-items:center;gap:3px;"><span style="width:11px;height:11px;display:inline-flex;">${SVG_ICONS.download}</span>다운로드</button></span>
              </div>
              <div style="display:grid;grid-template-columns:2fr 2fr 1.5fr 1fr;padding:10px 12px;font-size:11.5px;border-top:1px solid #E8DEC9;align-items:center;">
                <span>2026.09.01</span>
                <span style="font-family:monospace;font-size:10.5px;">INV-202609-044</span>
                <span style="font-weight:700;">₩29,000</span>
                <span style="text-align:right;"><button type="button" class="pc-pill-badge is-mint" style="padding:2px 8px;font-size:10px;cursor:pointer;display:inline-flex;align-items:center;gap:3px;"><span style="width:11px;height:11px;display:inline-flex;">${SVG_ICONS.download}</span>다운로드</button></span>
              </div>
            </div>
          </div>
        `
      };

      const html = `
        <div class="pc-block-settings-layout">
          <!-- Sidebar Tabs -->
          <div class="pc-settings-sidebar">
            <div class="pc-settings-user-brief">
              <div class="pc-user-avatar-mini" style="background:#FAF6ED;display:flex;align-items:center;justify-content:center;width:36px;height:36px;border-radius:9px;border:1px solid #E4DACB;">
                <div style="width:22px;height:22px;">${SVG_ICONS.user}</div>
              </div>
              <div class="pc-user-brief-text">
                <span class="pc-user-brief-name">이지안 (Jian Lee)</span>
                <span class="pc-user-brief-role">Senior Craft Designer</span>
              </div>
            </div>
            <div class="pc-folder-tab-list">
              <button class="pc-folder-tab-btn is-active" data-tab="general">
                <span style="width:16px;height:16px;display:inline-flex;">${SVG_ICONS.user}</span>
                <span>일반 프로필 (General)</span>
              </button>
              <button class="pc-folder-tab-btn" data-tab="account">
                <span style="width:16px;height:16px;display:inline-flex;">${SVG_ICONS.shield}</span>
                <span>계정 및 보안 (Account)</span>
              </button>
              <button class="pc-folder-tab-btn" data-tab="appearance">
                <span style="width:16px;height:16px;display:inline-flex;">${SVG_ICONS.tag}</span>
                <span>테마 및 외형 (Appearance)</span>
              </button>
              <button class="pc-folder-tab-btn" data-tab="notifications">
                <span style="width:16px;height:16px;display:inline-flex;">${SVG_ICONS.bell}</span>
                <span>알림 수신 (Notifications)</span>
              </button>
              <button class="pc-folder-tab-btn" data-tab="billing">
                <span style="width:16px;height:16px;display:inline-flex;">${SVG_ICONS.creditCard}</span>
                <span>결제 및 플랜 (Billing)</span>
              </button>
            </div>
          </div>

          <!-- Main Settings Card -->
          <div class="pc-block-card pc-settings-panel-container" id="pc-settings-panel">
            ${TAB_TEMPLATES.general}
          </div>
        </div>
      `;

      container.innerHTML = html;

      const panel = container.querySelector('#pc-settings-panel');

      function bindTabEvents(tabKey) {
        // Photo upload simulation
        const uploadBtn = panel.querySelector('#pc-photo-upload-btn');
        const fileInput = panel.querySelector('#pc-avatar-file-input');
        const avatarBox = panel.querySelector('.pc-avatar-placeholder');
        if (uploadBtn && fileInput) {
          uploadBtn.addEventListener('click', () => fileInput.click());
          fileInput.addEventListener('change', () => {
            if (fileInput.files && fileInput.files[0]) {
              const reader = new FileReader();
              reader.onload = (e) => {
                avatarBox.innerHTML = `<img src="${e.target.result}" style="width:100%;height:100%;object-fit:cover;border-radius:10px;">`;
                if (typeof window.showPaperToast === 'function') {
                  window.showPaperToast("프로필 사진이 새로 장착되었습니다.", 'mint');
                }
              };
              reader.readAsDataURL(fileInput.files[0]);
            }
          });
        }

        // Stock card selection in appearance
        panel.querySelectorAll('.pc-stock-card').forEach(card => {
          card.addEventListener('click', () => {
            panel.querySelectorAll('.pc-stock-card').forEach(c => c.classList.remove('is-active'));
            card.classList.add('is-active');
            if (typeof window.showPaperToast === 'function') {
              window.showPaperToast(`기본 종이 지질이 [${card.querySelector('div').textContent}]로 설정되었습니다.`, 'mint');
            }
          });
        });

        // Save buttons
        const saveBtn = panel.querySelector('#pc-settings-save-btn');
        if (saveBtn) {
          saveBtn.addEventListener('click', () => {
            if (typeof window.showPaperToast === 'function') {
              window.showPaperToast("변경사항이 성공적으로 저장되었습니다!", 'mint');
            }
          });
        }
      }

      bindTabEvents('general');

      // Sidebar tab switching
      container.querySelectorAll('.pc-folder-tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          container.querySelectorAll('.pc-folder-tab-btn').forEach(b => b.classList.remove('is-active'));
          btn.classList.add('is-active');
          const tab = btn.dataset.tab;
          if (TAB_TEMPLATES[tab] && panel) {
            panel.innerHTML = TAB_TEMPLATES[tab];
            bindTabEvents(tab);
            if (typeof window.showPaperToast === 'function') {
              window.showPaperToast(`${btn.querySelector('span:last-child').textContent} 화면으로 전환되었습니다.`, 'lavender');
            }
          }
        });
      });
    },

    renderEcommerceBlock(container, customData = {}) {
      if (!container) return;
      const products = [
        {
          id: 1,
          name: "오리가미 수제 다이어리 (Handmade Journal)",
          category: "바인딩 노트 & 다이어리",
          price: 28000,
          originalPrice: 35000,
          badge: "20% OFF",
          badgeColor: "peach",
          svgArt: `<svg viewBox="0 0 80 80"><rect x="18" y="12" width="46" height="56" rx="6" fill="#FEE396"/><rect x="14" y="16" width="46" height="52" rx="5" fill="#FAF6ED"/><path d="M14 20 L24 20 L24 64 L14 64 Z" fill="#F7BA9E"/><circle cx="28" cy="24" r="3" fill="#A3D8C3"/><circle cx="28" cy="34" r="3" fill="#D7CBEB"/><circle cx="28" cy="44" r="3" fill="#BDE0EA"/></svg>`
        },
        {
          id: 2,
          name: "핸드메이드 마스킹 테이프 5종 (Washi Set)",
          category: "공예 테이프 & 스티커",
          price: 14500,
          originalPrice: 18000,
          badge: "NEW 테이프",
          badgeColor: "mint",
          svgArt: `<svg viewBox="0 0 80 80"><circle cx="40" cy="40" r="26" fill="#A3D8C3"/><circle cx="40" cy="40" r="14" fill="#FAF6ED"/><path d="M40 14 C48 14 56 18 61 24 L52 33 C49 29 45 27 40 27 Z" fill="#FEE396"/><rect x="42" y="24" width="28" height="12" rx="3" fill="#D7CBEB" transform="rotate(-15 42 24)"/></svg>`
        },
        {
          id: 3,
          name: "키리가미 3D 페이퍼 조명 키트 (Shadowbox)",
          category: "DIY 공예 키트",
          price: 42000,
          originalPrice: 48000,
          badge: "BEST SELLER",
          badgeColor: "lavender",
          svgArt: `<svg viewBox="0 0 80 80"><rect x="15" y="15" width="50" height="50" rx="8" fill="#D7CBEB"/><rect x="22" y="22" width="36" height="36" rx="6" fill="#FFFDF9"/><path d="M22 50 C30 40 40 46 50 38 C54 44 58 48 58 58 L22 58 Z" fill="#A3D8C3"/><circle cx="48" cy="30" r="6" fill="#FEE396"/></svg>`
        },
        {
          id: 4,
          name: "파스텔 코튼지 레터 세트 (Archival Letter)",
          category: "편지지 & 봉투",
          price: 19000,
          originalPrice: null,
          badge: "LIMITED",
          badgeColor: "buttercup",
          svgArt: `<svg viewBox="0 0 80 80"><rect x="14" y="20" width="52" height="40" rx="4" fill="#FAF6ED"/><path d="M14 20 L40 42 L66 20 Z" fill="#F7BA9E"/><circle cx="40" cy="42" r="5" fill="#A3D8C3"/></svg>`
        }
      ];

      // Cart state
      let cartItems = [
        { id: 1, name: "오리가미 수제 다이어리", price: 28000, qty: 1, thumb: products[0].svgArt },
        { id: 2, name: "핸드메이드 마스킹 테이프 5종", price: 14500, qty: 2, thumb: products[1].svgArt }
      ];

      const html = `
        <div class="pc-block-ecommerce">
          <!-- Storefront Header -->
          <div class="pc-shop-header">
            <div class="pc-shop-title-wrap">
              <h2 class="pc-shop-title">페이퍼크래프트 셀렉트 샵 (Artisanal Paper Shop)</h2>
              <span class="pc-shop-subtitle">정교한 칼선과 천연 펄프의 숨결을 담은 프리미엄 공예 컬렉션</span>
            </div>
            <button class="pc-cart-trigger-btn" id="pc-cart-open-btn">
              <span style="color:var(--pc-mint-dark);width:18px;height:18px;display:flex;">${SVG_ICONS.shoppingBag}</span>
              <span>장바구니</span>
              <span class="pc-cart-count-badge" id="pc-cart-badge-count">3</span>
            </button>
          </div>

          <!-- Product Grid (4 items) -->
          <div class="pc-product-grid">
            ${products.map(p => `
              <div class="pc-product-card" data-product-id="${p.id}">
                <!-- Discount Washi Tape -->
                <div class="pc-washi-tape-strip is-${p.badgeColor}" style="top:-8px;width:75px;height:20px;font-size:10px;font-weight:800;display:flex;align-items:center;justify-content:center;color:var(--pc-ink);">
                  ${p.badge}
                </div>

                <div class="pc-product-media">
                  ${p.svgArt}
                  <button class="pc-product-favorite-btn" title="관심 상품 담기">
                    ${SVG_ICONS.heart}
                  </button>
                </div>

                <div class="pc-product-info">
                  <span class="pc-product-category">${p.category}</span>
                  <span class="pc-product-name">${p.name}</span>
                  <div class="pc-product-price-row">
                    <span class="pc-product-price">₩${p.price.toLocaleString()}</span>
                    ${p.originalPrice ? `<span class="pc-product-original-price">₩${p.originalPrice.toLocaleString()}</span>` : ''}
                  </div>
                </div>

                <button class="pc-product-add-btn" data-add-id="${p.id}">
                  <span style="width:16px;height:16px;display:flex;">${SVG_ICONS.shoppingBag}</span>
                  <span>장바구니 담기</span>
                </button>
              </div>
            `).join('')}
          </div>

          <!-- Slide-over Shopping Cart Drawer -->
          <div class="pc-cart-drawer-backdrop" id="pc-cart-backdrop">
            <div class="pc-cart-drawer">
              <div class="pc-cart-drawer-header">
                <div style="display:flex;align-items:center;gap:8px;">
                  <span style="color:var(--pc-mint-dark);">${SVG_ICONS.shoppingBag}</span>
                  <span class="pc-cart-drawer-title">내 장바구니</span>
                </div>
                <button class="pc-cart-close-btn" id="pc-cart-close-btn" title="닫기">
                  <span style="width:16px;height:16px;display:flex;">${SVG_ICONS.scissors}</span>
                </button>
              </div>

              <!-- Cart Items -->
              <div class="pc-cart-items-list" id="pc-cart-items-container"></div>

              <!-- Subtotal & Checkout -->
              <div class="pc-cart-summary-card">
                <div class="pc-summary-row">
                  <span>상품 주문 금액</span>
                  <span id="pc-cart-subtotal">₩0</span>
                </div>
                <div class="pc-summary-row">
                  <span>배송비</span>
                  <span id="pc-cart-shipping">₩3,000</span>
                </div>
                <div class="pc-summary-row is-total">
                  <span>총 결제 예상금액</span>
                  <span id="pc-cart-total" style="color:var(--pc-mint-dark);">₩0</span>
                </div>
                <button type="button" class="pc-btn-block-action" id="pc-checkout-btn" style="margin-top:10px;display:flex;align-items:center;justify-content:center;gap:8px;">
                  <span style="width:18px;height:18px;display:flex;">${SVG_ICONS.creditCard}</span>
                  <span>주문서 작성 및 결제하기</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      `;

      container.innerHTML = html;

      const backdrop = container.querySelector('#pc-cart-backdrop');
      const openBtn = container.querySelector('#pc-cart-open-btn');
      const closeBtn = container.querySelector('#pc-cart-close-btn');
      const itemsContainer = container.querySelector('#pc-cart-items-container');
      const badgeCount = container.querySelector('#pc-cart-badge-count');
      const subtotalEl = container.querySelector('#pc-cart-subtotal');
      const totalEl = container.querySelector('#pc-cart-total');

      function updateCartUI() {
        const totalCount = cartItems.reduce((acc, item) => acc + item.qty, 0);
        badgeCount.textContent = totalCount;

        const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
        const shipping = subtotal >= 50000 || subtotal === 0 ? 0 : 3000;
        const total = subtotal + shipping;

        subtotalEl.textContent = `₩${subtotal.toLocaleString()}`;
        container.querySelector('#pc-cart-shipping').textContent = shipping === 0 ? "무료배송" : `₩${shipping.toLocaleString()}`;
        totalEl.textContent = `₩${total.toLocaleString()}`;

        if (cartItems.length === 0) {
          itemsContainer.innerHTML = `<div style="text-align:center;padding:40px 10px;"><div style="width:48px;height:48px;margin:0 auto 10px;">${SVG_ICONS.cart}</div><div style="font-weight:700;color:var(--pc-ink-muted);">장바구니가 비어 있습니다.</div></div>`;
          return;
        }

        itemsContainer.innerHTML = cartItems.map(item => `
          <div class="pc-cart-item" data-cart-item-id="${item.id}">
            <div class="pc-cart-item-thumb">${item.thumb}</div>
            <div class="pc-cart-item-details">
              <div class="pc-cart-item-title">${item.name}</div>
              <div class="pc-cart-item-price">₩${(item.price * item.qty).toLocaleString()}</div>
            </div>
            <div class="pc-qty-adjuster">
              <button class="pc-qty-btn pc-qty-minus" data-id="${item.id}" title="수량 감소"><span style="width:12px;height:12px;display:flex;">${SVG_ICONS.minus}</span></button>
              <span class="pc-qty-val">${item.qty}</span>
              <button class="pc-qty-btn pc-qty-plus" data-id="${item.id}" title="수량 증가"><span style="width:12px;height:12px;display:flex;">${SVG_ICONS.plus}</span></button>
            </div>
            <button class="pc-file-scissor-del-btn pc-cart-del-btn" data-id="${item.id}" title="삭제">
              <span style="width:14px;height:14px;display:flex;">${SVG_ICONS.trash}</span>
            </button>
          </div>
        `).join('');

        // Bind adjuster buttons
        itemsContainer.querySelectorAll('.pc-qty-plus').forEach(b => {
          b.addEventListener('click', () => {
            const item = cartItems.find(i => i.id === Number(b.dataset.id));
            if (item) { item.qty++; updateCartUI(); }
          });
        });
        itemsContainer.querySelectorAll('.pc-qty-minus').forEach(b => {
          b.addEventListener('click', () => {
            const item = cartItems.find(i => i.id === Number(b.dataset.id));
            if (item && item.qty > 1) { item.qty--; updateCartUI(); }
          });
        });
        itemsContainer.querySelectorAll('.pc-cart-del-btn').forEach(b => {
          b.addEventListener('click', () => {
            cartItems = cartItems.filter(i => i.id !== Number(b.dataset.id));
            updateCartUI();
            showPaperToast("장바구니 항목이 제거되었습니다.", 'peach');
          });
        });
      }

      openBtn.addEventListener('click', () => {
        backdrop.classList.add('is-open');
        updateCartUI();
      });
      closeBtn.addEventListener('click', () => backdrop.classList.remove('is-open'));
      backdrop.addEventListener('click', (e) => {
        if (e.target === backdrop) backdrop.classList.remove('is-open');
      });

      // Add to cart buttons
      container.querySelectorAll('.pc-product-add-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const pid = Number(btn.dataset.addId);
          const p = products.find(x => x.id === pid);
          if (p) {
            const existing = cartItems.find(x => x.id === pid);
            if (existing) {
              existing.qty++;
            } else {
              cartItems.push({ id: p.id, name: p.name, price: p.price, qty: 1, thumb: p.svgArt });
            }
            updateCartUI();
            backdrop.classList.add('is-open');
            showPaperToast(`'${p.name}'이 장바구니에 담겼습니다!`, 'mint');
          }
        });
      });

      // Favorite toggle buttons
      container.querySelectorAll('.pc-product-favorite-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          btn.classList.toggle('is-active');
          const active = btn.classList.contains('is-active');
          showPaperToast(active ? "관심 상품 목록에 추가되었습니다." : "관심 상품에서 해제되었습니다.", 'rose');
        });
      });

      // Checkout button
      container.querySelector('#pc-checkout-btn').addEventListener('click', () => {
        if (cartItems.length === 0) {
          showPaperToast("장바구니에 상품을 먼저 담아주세요.", 'rose');
          return;
        }
        showPaperToast("주문서가 접수되었습니다! 안전하게 패키징을 시작합니다.", 'mint');
        cartItems = [];
        updateCartUI();
        setTimeout(() => backdrop.classList.remove('is-open'), 1200);
      });

      updateCartUI();
    },

    /**
     * Block 5: Pricing Matrix Block
     */
    renderPricingBlock(container, customData = {}) {
      if (!container) return;
      const html = `
        <div class="pc-block-pricing">
          <!-- Pricing Header -->
          <div class="pc-pricing-header">
            <span class="pc-pill-badge is-mint" style="margin-bottom:12px;">합리적인 멤버십 플랜</span>
            <h2 class="pc-pricing-title">필요한 기능만큼 선택하는 종이 공예 요금제</h2>
            <p class="pc-pricing-desc">모든 플랜에 3D 레이어드 페이퍼 벡터 컴포넌트 라이브러리와 무제한 SVG 추출 기능이 포함됩니다.</p>
          </div>

          <!-- Billing Cycle Toggle -->
          <div class="pc-billing-toggle-wrap">
            <span class="pc-billing-cycle-label is-active" id="pc-bill-monthly-label">월간 결제</span>
            <label class="pc-paper-switch">
              <input type="checkbox" id="pc-billing-toggle-checkbox">
              <span class="pc-paper-switch-track"><span class="pc-paper-switch-thumb"></span></span>
            </label>
            <span class="pc-billing-cycle-label" id="pc-bill-annual-label">연간 결제</span>
            <span class="pc-discount-washi-tag">2개월 무료! (Save 20%)</span>
          </div>

          <!-- 3 Tier Cards -->
          <div class="pc-pricing-matrix">
            <!-- Tier 1: Starter -->
            <div class="pc-pricing-tier-card">
              <div>
                <span class="pc-tier-badge is-starter">스타터 (Starter)</span>
                <p class="pc-tier-desc">개인 창작자 및 취미용 사이드 프로젝트</p>
                <div class="pc-tier-price-row">
                  <span class="pc-tier-price" data-monthly="₩0" data-annual="₩0">₩0</span>
                  <span class="pc-tier-period">/ 평생 무료</span>
                </div>
              </div>

              <div class="pc-tier-features-list">
                <div class="pc-tier-feature-item">
                  <span class="pc-check-paper-disc">${SVG_ICONS.check}</span>
                  <span>기본 페이퍼컷 컴포넌트 15종</span>
                </div>
                <div class="pc-tier-feature-item">
                  <span class="pc-check-paper-disc">${SVG_ICONS.check}</span>
                  <span>단일 개인 프로젝트 라이선스</span>
                </div>
                <div class="pc-tier-feature-item">
                  <span class="pc-check-paper-disc">${SVG_ICONS.check}</span>
                  <span>커뮤니티 지원 포럼 접근</span>
                </div>
                <div class="pc-tier-feature-item" style="opacity:0.4;">
                  <span class="pc-check-paper-disc" style="background:#E6DFD2;color:#9E9385;">-</span>
                  <span>고급 3D SVG 벡터 차트 엔진</span>
                </div>
              </div>

              <button class="pc-btn-block-action" style="background:var(--pc-paper-cream);color:var(--pc-ink);" data-plan="starter">
                무료로 시작하기
              </button>
            </div>

            <!-- Tier 2: Pro (Most Popular) -->
            <div class="pc-pricing-tier-card is-popular">
              <!-- Folded Paper Ribbon Banner -->
              <div class="pc-folded-ribbon-badge">★ 가장 인기있는 플랜 (Most Popular)</div>

              <div>
                <span class="pc-tier-badge is-pro">프로페셔널 (Pro)</span>
                <p class="pc-tier-desc">성장하는 스타트업 및 전문 UI/UX 디자이너</p>
                <div class="pc-tier-price-row">
                  <span class="pc-tier-price" id="pc-price-pro" data-monthly="₩29,000" data-annual="₩23,200">₩29,000</span>
                  <span class="pc-tier-period" id="pc-period-pro">/ 월 (월 결제)</span>
                </div>
              </div>

              <div class="pc-tier-features-list">
                <div class="pc-tier-feature-item">
                  <span class="pc-check-paper-disc">${SVG_ICONS.check}</span>
                  <span>전체 30종 인터랙티브 페이퍼 블록</span>
                </div>
                <div class="pc-tier-feature-item">
                  <span class="pc-check-paper-disc">${SVG_ICONS.check}</span>
                  <span>6대 순수 SVG 인터랙티브 차트 슈트</span>
                </div>
                <div class="pc-tier-feature-item">
                  <span class="pc-check-paper-disc">${SVG_ICONS.check}</span>
                  <span>상업용 무제한 도메인 라이선스</span>
                </div>
                <div class="pc-tier-feature-item">
                  <span class="pc-check-paper-disc">${SVG_ICONS.check}</span>
                  <span>주 7일 우선 고객 지원</span>
                </div>
              </div>

              <button class="pc-btn-block-action" data-plan="pro">
                프로 플랜 시작하기
              </button>
            </div>

            <!-- Tier 3: Enterprise -->
            <div class="pc-pricing-tier-card">
              <div>
                <span class="pc-tier-badge is-enterprise">엔터프라이즈 (Studio)</span>
                <p class="pc-tier-desc">대규모 디자인 시스템 구축 팀 및 에이전시</p>
                <div class="pc-tier-price-row">
                  <span class="pc-tier-price" id="pc-price-ent" data-monthly="₩99,000" data-annual="₩79,200">₩99,000</span>
                  <span class="pc-tier-period" id="pc-period-ent">/ 월 (월 결제)</span>
                </div>
              </div>

              <div class="pc-tier-features-list">
                <div class="pc-tier-feature-item">
                  <span class="pc-check-paper-disc">${SVG_ICONS.check}</span>
                  <span>Pro 플랜의 모든 기능 포함</span>
                </div>
                <div class="pc-tier-feature-item">
                  <span class="pc-check-paper-disc">${SVG_ICONS.check}</span>
                  <span>커스텀 종이 텍스처 & 브랜드 팔레트 컨설팅</span>
                </div>
                <div class="pc-tier-feature-item">
                  <span class="pc-check-paper-disc">${SVG_ICONS.check}</span>
                  <span>전담 계정 매니저 & 1:1 슬랙 채널</span>
                </div>
                <div class="pc-tier-feature-item">
                  <span class="pc-check-paper-disc">${SVG_ICONS.check}</span>
                  <span>99.9% 가동률 SLA 보증</span>
                </div>
              </div>

              <button class="pc-btn-block-action" style="background:var(--pc-lavender);color:var(--pc-lavender-dark);" data-plan="enterprise">
                영업팀 문의하기
              </button>
            </div>
          </div>
        </div>
      `;

      container.innerHTML = html;

      // Billing cycle switch
      const toggle = container.querySelector('#pc-billing-toggle-checkbox');
      const proPrice = container.querySelector('#pc-price-pro');
      const entPrice = container.querySelector('#pc-price-ent');
      const proPeriod = container.querySelector('#pc-period-pro');
      const entPeriod = container.querySelector('#pc-period-ent');

      if (toggle) {
        toggle.addEventListener('change', () => {
          const isAnnual = toggle.checked;
          proPrice.textContent = isAnnual ? proPrice.dataset.annual : proPrice.dataset.monthly;
          entPrice.textContent = isAnnual ? entPrice.dataset.annual : entPrice.dataset.monthly;
          proPeriod.textContent = isAnnual ? "/ 월 (연 결제 청구)" : "/ 월 (월 결제)";
          entPeriod.textContent = isAnnual ? "/ 월 (연 결제 청구)" : "/ 월 (월 결제)";

          showPaperToast(isAnnual ? "연간 결제가 적용되었습니다 (20% 할인 혜택)." : "월간 결제가 적용되었습니다.", 'buttercup');
        });
      }

      // CTA Buttons
      container.querySelectorAll('[data-plan]').forEach(btn => {
        btn.addEventListener('click', () => {
          showPaperToast(`[${btn.dataset.plan.toUpperCase()}] 플랜 신청 절차로 이동합니다.`, 'mint');
        });
      });
    },

    /**
     * Block 6: File Dropzone & Uploader Block
     */
    renderDropzoneBlock(container, customData = {}) {
      if (!container) return;
      let uploadedFiles = [
        { name: "papercut-icon-kit.svg", size: "2.4 MB", type: "svg" },
        { name: "diorama-shadowbox-spec.pdf", size: "6.8 MB", type: "pdf" }
      ];

      const html = `
        <div class="pc-block-dropzone">
          <!-- Stitched Cardboard Dropzone -->
          <div class="pc-cardboard-dropzone" id="pc-dropzone-area">
            <div class="pc-dropzone-icon-well">
              <span style="color:var(--pc-mint-dark);width:36px;height:36px;display:flex;">${SVG_ICONS.paperPlane}</span>
            </div>
            <div style="display:flex;flex-direction:column;gap:4px;">
              <span class="pc-dropzone-title">공예 디자인 파일을 이곳에 끌어다 놓으세요</span>
              <span class="pc-dropzone-sub">또는 컴퓨터에서 직접 파일 선택</span>
            </div>
            <span class="pc-dropzone-badge">지원 형식: SVG, PNG, JPG, PDF (최대 25MB)</span>
            <input type="file" id="pc-dropzone-file-input" style="display:none;" multiple>
          </div>

          <!-- Upload Progress Bar Simulation -->
          <div class="pc-upload-progress-card" id="pc-upload-progress-card" style="display:none;">
            <div class="pc-progress-info-row">
              <span id="pc-uploading-filename">craft-artboard-export.svg</span>
              <span id="pc-upload-percent" style="color:var(--pc-mint-dark);">0%</span>
            </div>
            <div class="pc-paper-progress-groove">
              <div class="pc-paper-progress-bar" id="pc-progress-bar" style="width:0%;"></div>
            </div>
          </div>

          <!-- Uploaded Files List -->
          <div class="pc-uploaded-files-list" id="pc-uploaded-files-container"></div>
        </div>
      `;

      container.innerHTML = html;

      const dropzone = container.querySelector('#pc-dropzone-area');
      const fileInput = container.querySelector('#pc-dropzone-file-input');
      const progressCard = container.querySelector('#pc-upload-progress-card');
      const progressBar = container.querySelector('#pc-progress-bar');
      const progressPercent = container.querySelector('#pc-upload-percent');
      const progressFileName = container.querySelector('#pc-uploading-filename');
      const filesContainer = container.querySelector('#pc-uploaded-files-container');

      function renderFilesList() {
        filesContainer.innerHTML = uploadedFiles.map((file, idx) => `
          <div class="pc-file-item-card" data-idx="${idx}">
            <div class="pc-file-item-left">
              <div class="pc-file-icon-box">
                ${file.type === 'svg' ? SVG_ICONS.tag : SVG_ICONS.fileText}
              </div>
              <div class="pc-file-meta">
                <span class="pc-file-name">${file.name}</span>
                <span class="pc-file-size">${file.size} · 업로드 완료</span>
              </div>
            </div>
            <button class="pc-file-scissor-del-btn pc-file-del-btn" data-del-idx="${idx}" title="파일 삭제">
              <span style="width:14px;height:14px;display:flex;">${SVG_ICONS.scissors}</span>
            </button>
          </div>
        `).join('');

        filesContainer.querySelectorAll('.pc-file-del-btn').forEach(b => {
          b.addEventListener('click', () => {
            const idx = Number(b.dataset.delIdx);
            uploadedFiles.splice(idx, 1);
            renderFilesList();
            showPaperToast("파일이 안전하게 삭제되었습니다.", 'peach');
          });
        });
      }

      function simulateUpload(fileName, fileSize) {
        progressCard.style.display = 'flex';
        progressFileName.textContent = fileName;
        let progress = 0;
        progressBar.style.width = '0%';
        progressPercent.textContent = '0%';

        const timer = setInterval(() => {
          progress += Math.floor(Math.random() * 20) + 15;
          if (progress >= 100) {
            progress = 100;
            clearInterval(timer);
            progressBar.style.width = '100%';
            progressPercent.textContent = '100%';

            setTimeout(() => {
              progressCard.style.display = 'none';
              uploadedFiles.unshift({ name: fileName, size: fileSize, type: fileName.endsWith('.svg') ? 'svg' : 'file' });
              renderFilesList();
              showPaperToast(`'${fileName}' 업로드가 완료되었습니다!`, 'mint');
            }, 300);
          } else {
            progressBar.style.width = `${progress}%`;
            progressPercent.textContent = `${progress}%`;
          }
        }, 150);
      }

      dropzone.addEventListener('click', () => fileInput.click());

      dropzone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropzone.classList.add('is-dragover');
      });
      dropzone.addEventListener('dragleave', () => dropzone.classList.remove('is-dragover'));
      dropzone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropzone.classList.remove('is-dragover');
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
          const file = e.dataTransfer.files[0];
          simulateUpload(file.name, `${(file.size / (1024 * 1024)).toFixed(1)} MB`);
        }
      });

      fileInput.addEventListener('change', () => {
        if (fileInput.files && fileInput.files[0]) {
          const file = fileInput.files[0];
          simulateUpload(file.name, `${(file.size / (1024 * 1024)).toFixed(1)} MB`);
        }
      });

      renderFilesList();
    }
  };


  // =========================================================================
  // 3. PART 2: SHADCN CHARTS ENGINE (3D Paper-Cut Vector Craft SVG)
  // =========================================================================

  const PapercutCharts = {
    /**
     * Chart 1: Area Chart (Pastel Paper Mountain Terrain)
     * 3 overlapping mountain silhouettes in mint, sky, and lavender
     */
    renderAreaChart(container, options = {}) {
      if (!container) return;
      const width = options.width || 700;
      const height = options.height || 280;
      const padding = { top: 30, right: 30, bottom: 40, left: 50 };

      const months = ["1월", "2월", "3월", "4월", "5월", "6월", "7월"];
      // Series data: mint, sky, lavender
      const series = [
        { name: "Mint 산맥 (순이익)", color: "mint", grad: "pc-grad-mint", stroke: "#275C46", data: [35, 52, 45, 68, 60, 82, 95] },
        { name: "Sky 구릉 (총매출)", color: "sky", grad: "pc-grad-sky", stroke: "#204C5A", data: [55, 65, 58, 80, 75, 92, 110] },
        { name: "Lavender 언덕 (방문자)", color: "lavender", grad: "pc-grad-lavender", stroke: "#473B6B", data: [20, 32, 28, 44, 40, 56, 68] }
      ];

      const maxVal = 120;
      const chartW = width - padding.left - padding.right;
      const chartH = height - padding.top - padding.bottom;

      function getX(i) {
        return padding.left + (i / (months.length - 1)) * chartW;
      }
      function getY(val) {
        return padding.top + chartH - (val / maxVal) * chartH;
      }

      // Smooth Bezier path generator
      function makeSmoothArea(data) {
        const pts = data.map((v, i) => ({ x: getX(i), y: getY(v) }));
        let path = `M ${pts[0].x} ${pts[0].y}`;
        for (let i = 0; i < pts.length - 1; i++) {
          const p0 = pts[i];
          const p1 = pts[i + 1];
          const cx1 = p0.x + (p1.x - p0.x) * 0.45;
          const cy1 = p0.y;
          const cx2 = p0.x + (p1.x - p0.x) * 0.55;
          const cy2 = p1.y;
          path += ` C ${cx1} ${cy1}, ${cx2} ${cy2}, ${p1.x} ${p1.y}`;
        }
        const bottomY = padding.top + chartH;
        path += ` L ${pts[pts.length - 1].x} ${bottomY} L ${pts[0].x} ${bottomY} Z`;
        return path;
      }

      const svgHtml = `
        <div class="pc-chart-svg-wrap">
          <div class="pc-chart-tooltip" id="pc-area-tooltip"></div>
          <svg viewBox="0 0 ${width} ${height}">
            ${createPapercutChartDefs()}

            <!-- Dotted hairline horizontal grid -->
            ${[0, 30, 60, 90, 120].map(val => {
              const y = getY(val);
              return `
                <line x1="${padding.left}" y1="${y}" x2="${width - padding.right}" y2="${y}" class="pc-chart-grid-line" />
                <text x="${padding.left - 10}" y="${y + 4}" text-anchor="end" class="pc-chart-axis-text">${val}</text>
              `;
            }).join('')}

            <!-- X-axis Labels -->
            ${months.map((m, i) => `
              <text x="${getX(i)}" y="${height - 12}" text-anchor="middle" class="pc-chart-axis-text">${m}</text>
            `).join('')}

            <!-- 3 Overlapping Mountain Silhouette Layers (Lavender -> Sky -> Mint) -->
            ${series.slice().reverse().map((s) => `
              <path d="${makeSmoothArea(s.data)}" fill="url(#${s.grad})" filter="url(#pc-shadow-paper-soft)" class="pc-mountain-layer" data-series="${s.name}" />
            `).join('')}

            <!-- Interactive Circular Paper Node Markers for the top Mint series -->
            ${series[0].data.map((val, i) => `
              <circle cx="${getX(i)}" cy="${getY(val)}" r="5.5" fill="#FFFDF9" stroke="#275C46" stroke-width="2.5" filter="url(#pc-shadow-paper-soft)" class="pc-chart-node-circle" data-month="${months[i]}" data-val="${val}" />
            `).join('')}
          </svg>
          <div class="pc-chart-legend">
            ${series.map(s => `
              <div class="pc-legend-item" data-legend="${s.name}">
                <span class="pc-legend-chip" style="background:var(--pc-${s.color});"></span>
                <span>${s.name}</span>
              </div>
            `).join('')}
          </div>
        </div>
      `;

      container.innerHTML = svgHtml;

      // Tooltip interaction
      const tooltip = container.querySelector('#pc-area-tooltip');
      const nodes = container.querySelectorAll('.pc-chart-node-circle');
      nodes.forEach(node => {
        node.addEventListener('mouseenter', (e) => {
          const rect = container.getBoundingClientRect();
          const cx = parseFloat(node.getAttribute('cx'));
          const cy = parseFloat(node.getAttribute('cy'));
          const month = node.dataset.month;
          const val = node.dataset.val;

          tooltip.innerHTML = `<strong>${month} 순이익</strong>: ₩${val},000,000`;
          tooltip.style.left = `${(cx / width) * 100}%`;
          tooltip.style.top = `${(cy / height) * 100}%`;
          tooltip.classList.add('is-visible');
        });
        node.addEventListener('mouseleave', () => tooltip.classList.remove('is-visible'));
      });
    },

    /**
     * Chart 2: Bar Chart (Stacked Paper Columns)
     * 7 days columns with rounded paper caps, layered shadow between bars
     */
    renderBarChart(container, options = {}) {
      if (!container) return;
      const width = options.width || 680;
      const height = options.height || 280;
      const padding = { top: 30, right: 30, bottom: 40, left: 45 };

      const days = ["월", "화", "수", "목", "금", "토", "일"];
      const primaryData = [45, 62, 78, 55, 88, 96, 70];
      const secondaryData = [25, 38, 42, 30, 52, 60, 40];
      const maxVal = 100;

      const chartW = width - padding.left - padding.right;
      const chartH = height - padding.top - padding.bottom;
      const colWidth = 26;
      const gap = chartW / days.length;

      const svgHtml = `
        <div class="pc-chart-card">
          <div class="pc-chart-header">
            <div class="pc-chart-title-wrap">
              <span class="pc-chart-title">주간 이용 통계 (Stacked Paper Columns)</span>
              <span class="pc-chart-subtitle">라운드 캡과 입체 레이어 그림자가 적용된 7일 칼럼 차트</span>
            </div>
            <div class="pc-pill-badge is-buttercup">주간 합계: 494K</div>
          </div>

          <div class="pc-chart-svg-wrap">
            <div class="pc-chart-tooltip" id="pc-bar-tooltip"></div>
            <svg viewBox="0 0 ${width} ${height}">
              ${createPapercutChartDefs()}

              <!-- Baseline & Guides -->
              ${[0, 25, 50, 75, 100].map(val => {
                const y = padding.top + chartH - (val / maxVal) * chartH;
                return `
                  <line x1="${padding.left}" y1="${y}" x2="${width - padding.right}" y2="${y}" class="pc-chart-grid-line" />
                  <text x="${padding.left - 10}" y="${y + 4}" text-anchor="end" class="pc-chart-axis-text">${val}</text>
                `;
              }).join('')}

              <!-- 7 Day Columns -->
              ${days.map((day, i) => {
                const centerX = padding.left + i * gap + gap / 2;
                const pVal = primaryData[i];
                const sVal = secondaryData[i];
                const pHeight = (pVal / maxVal) * chartH;
                const sHeight = (sVal / maxVal) * chartH;

                const bottomY = padding.top + chartH;
                const pY = bottomY - pHeight;
                const sY = bottomY - sHeight;

                return `
                  <g class="pc-bar-group" data-day="${day}요일" data-primary="${pVal}" data-secondary="${sVal}">
                    <!-- Shadow Base Sheet for 3D paper cut elevation -->
                    <rect x="${centerX - colWidth / 2 + 2}" y="${pY + 3}" width="${colWidth}" height="${pHeight}" rx="7" fill="#EADCC7" opacity="0.65" />

                    <!-- Primary Bar (Mint) -->
                    <rect x="${centerX - colWidth / 2}" y="${pY}" width="${colWidth}" height="${pHeight}" rx="7" fill="#A3D8C3" filter="url(#pc-shadow-paper-soft)" class="pc-chart-bar-rect" />

                    <!-- Stacked Overlay Secondary Sheet (Peach) -->
                    <rect x="${centerX - colWidth / 2}" y="${sY}" width="${colWidth}" height="${sHeight}" rx="7" fill="#F7BA9E" filter="url(#pc-shadow-paper-soft)" class="pc-chart-bar-rect" />

                    <!-- Day Label -->
                    <text x="${centerX}" y="${height - 12}" text-anchor="middle" class="pc-chart-axis-text">${day}</text>
                  </g>
                `;
              }).join('')}
            </svg>

            <div class="pc-chart-legend">
              <div class="pc-legend-item">
                <span class="pc-legend-chip" style="background:var(--pc-mint);"></span>
                <span>신규 방문자 (Primary)</span>
              </div>
              <div class="pc-legend-item">
                <span class="pc-legend-chip" style="background:var(--pc-peach);"></span>
                <span>재방문 고객 (Recurring)</span>
              </div>
            </div>
          </div>
        </div>
      `;

      container.innerHTML = svgHtml;

      const tooltip = container.querySelector('#pc-bar-tooltip');
      const barGroups = container.querySelectorAll('.pc-bar-group');
      barGroups.forEach(g => {
        g.addEventListener('mouseenter', () => {
          const day = g.dataset.day;
          const p = g.dataset.primary;
          const s = g.dataset.secondary;
          const primaryRect = g.querySelectorAll('rect')[1];
          const x = parseFloat(primaryRect.getAttribute('x')) + colWidth / 2;
          const y = parseFloat(primaryRect.getAttribute('y'));

          tooltip.innerHTML = `<strong>${day}</strong><br/>신규: ${p}K · 재방문: ${s}K`;
          tooltip.style.left = `${(x / width) * 100}%`;
          tooltip.style.top = `${(y / height) * 100}%`;
          tooltip.classList.add('is-visible');
        });
        g.addEventListener('mouseleave', () => tooltip.classList.remove('is-visible'));
      });
    },

    /**
     * Chart 3: Line Chart (Origami Ribbon Wave)
     * Smooth curved SVG stroke with folded ribbon styling, circular node markers, dashed reference line
     */
    renderLineChart(container, options = {}) {
      if (!container) return;
      const width = options.width || 680;
      const height = options.height || 280;
      const padding = { top: 35, right: 35, bottom: 40, left: 45 };

      const labels = ["09시", "11시", "13시", "15시", "17시", "19시", "21시"];
      const lineData1 = [32, 45, 68, 54, 85, 76, 92]; // Mint ribbon
      const lineData2 = [20, 30, 48, 42, 60, 58, 70]; // Lavender ribbon
      const maxVal = 100;

      const chartW = width - padding.left - padding.right;
      const chartH = height - padding.top - padding.bottom;

      function getX(i) { return padding.left + (i / (labels.length - 1)) * chartW; }
      function getY(v) { return padding.top + chartH - (v / maxVal) * chartH; }

      function makeSmoothLine(data) {
        const pts = data.map((v, i) => ({ x: getX(i), y: getY(v) }));
        let path = `M ${pts[0].x} ${pts[0].y}`;
        for (let i = 0; i < pts.length - 1; i++) {
          const p0 = pts[i];
          const p1 = pts[i + 1];
          const cx1 = p0.x + (p1.x - p0.x) * 0.45;
          const cy1 = p0.y;
          const cx2 = p0.x + (p1.x - p0.x) * 0.55;
          const cy2 = p1.y;
          path += ` C ${cx1} ${cy1}, ${cx2} ${cy2}, ${p1.x} ${p1.y}`;
        }
        return path;
      }

      const targetVal = 80;
      const targetY = getY(targetVal);

      const svgHtml = `
        <div class="pc-chart-card">
          <div class="pc-chart-header">
            <div class="pc-chart-title-wrap">
              <span class="pc-chart-title">시간대별 트래픽 (Origami Ribbon Wave)</span>
              <span class="pc-chart-subtitle">부드러운 곡선 종이 리본과 기준 목표선이 조화된 라인 차트</span>
            </div>
            <div class="pc-pill-badge is-mint">목표 달성률 115%</div>
          </div>

          <div class="pc-chart-svg-wrap">
            <div class="pc-chart-tooltip" id="pc-line-tooltip"></div>
            <svg viewBox="0 0 ${width} ${height}">
              ${createPapercutChartDefs()}

              <!-- Dotted Grid Lines -->
              ${[0, 25, 50, 75, 100].map(val => {
                const y = getY(val);
                return `
                  <line x1="${padding.left}" y1="${y}" x2="${width - padding.right}" y2="${y}" class="pc-chart-grid-line" />
                  <text x="${padding.left - 10}" y="${y + 4}" text-anchor="end" class="pc-chart-axis-text">${val}</text>
                `;
              }).join('')}

              <!-- Dashed Reference Target Line (Goal: 80%) -->
              <line x1="${padding.left}" y1="${targetY}" x2="${width - padding.right}" y2="${targetY}" stroke="#E69D7B" stroke-width="1.8" stroke-dasharray="5 4" />
              <rect x="${width - padding.right - 95}" y="${targetY - 11}" width="95" height="20" rx="4" fill="#F7BA9E" filter="url(#pc-shadow-paper-soft)" />
              <text x="${width - padding.right - 48}" y="${targetY + 3}" text-anchor="middle" font-size="11" font-weight="700" fill="#6E3B21">목표선 (80%)</text>

              <!-- X Labels -->
              ${labels.map((l, i) => `
                <text x="${getX(i)}" y="${height - 12}" text-anchor="middle" class="pc-chart-axis-text">${l}</text>
              `).join('')}

              <!-- Secondary Ribbon Shadow & Stroke (Lavender) -->
              <path d="${makeSmoothLine(lineData2)}" fill="none" stroke="#D7CBEB" stroke-width="5" stroke-linecap="round" filter="url(#pc-shadow-paper-soft)" />
              
              <!-- Primary Ribbon Shadow & Stroke (Mint) -->
              <path d="${makeSmoothLine(lineData1)}" fill="none" stroke="#A3D8C3" stroke-width="6" stroke-linecap="round" filter="url(#pc-shadow-paper-soft)" />

              <!-- Nodes for Primary Series -->
              ${lineData1.map((v, i) => `
                <circle cx="${getX(i)}" cy="${getY(v)}" r="6" fill="#FFFDF9" stroke="#275C46" stroke-width="3" filter="url(#pc-shadow-paper-soft)" class="pc-chart-node-circle" data-label="${labels[i]}" data-val="${v}" />
              `).join('')}
            </svg>

            <div class="pc-chart-legend">
              <div class="pc-legend-item">
                <span class="pc-legend-chip" style="background:var(--pc-mint);"></span>
                <span>실시간 활성 세션 (Active Sessions)</span>
              </div>
              <div class="pc-legend-item">
                <span class="pc-legend-chip" style="background:var(--pc-lavender);"></span>
                <span>서버 처리 대역폭 (Bandwidth)</span>
              </div>
            </div>
          </div>
        </div>
      `;

      container.innerHTML = svgHtml;

      const tooltip = container.querySelector('#pc-line-tooltip');
      const nodes = container.querySelectorAll('.pc-chart-node-circle');
      nodes.forEach(node => {
        node.addEventListener('mouseenter', () => {
          const cx = parseFloat(node.getAttribute('cx'));
          const cy = parseFloat(node.getAttribute('cy'));
          const label = node.dataset.label;
          const val = node.dataset.val;

          tooltip.innerHTML = `<strong>${label}</strong>: ${val} req/sec`;
          tooltip.style.left = `${(cx / width) * 100}%`;
          tooltip.style.top = `${(cy / height) * 100}%`;
          tooltip.classList.add('is-visible');
        });
        node.addEventListener('mouseleave', () => tooltip.classList.remove('is-visible'));
      });
    },

    /**
     * Chart 4: Pie / Donut Chart (Folded Paper Fan Wheel)
     * Concentric sliced donut with multi-color pastel paper sectors, inner cutout well, center count badge
     */
    renderDonutChart(container, options = {}) {
      if (!container) return;
      const size = options.size || 360;
      const cx = size / 2;
      const cy = size / 2;
      const outerR = size * 0.42;
      const innerR = size * 0.24;

      const sectors = [
        { label: "직접 유입 (Direct)", value: 38, color: "#A3D8C3", dark: "#275C46" },
        { label: "검색 엔진 (Organic)", value: 28, color: "#F7BA9E", dark: "#6E3B21" },
        { label: "소셜 미디어 (Social)", value: 20, color: "#D7CBEB", dark: "#473B6B" },
        { label: "추천 레퍼럴 (Referral)", value: 14, color: "#FEE396", dark: "#6E530F" }
      ];

      let currentAngle = -Math.PI / 2;
      const total = sectors.reduce((acc, s) => acc + s.value, 0);

      // Arc path generator
      function describeArc(startAngle, endAngle) {
        const x1 = cx + outerR * Math.cos(startAngle);
        const y1 = cy + outerR * Math.sin(startAngle);
        const x2 = cx + outerR * Math.cos(endAngle);
        const y2 = cy + outerR * Math.sin(endAngle);

        const ix1 = cx + innerR * Math.cos(endAngle);
        const iy1 = cy + innerR * Math.sin(endAngle);
        const ix2 = cx + innerR * Math.cos(startAngle);
        const iy2 = cy + innerR * Math.sin(startAngle);

        const largeArc = endAngle - startAngle > Math.PI ? 1 : 0;

        return `M ${x1} ${y1} A ${outerR} ${outerR} 0 ${largeArc} 1 ${x2} ${y2} L ${ix1} ${iy1} A ${innerR} ${innerR} 0 ${largeArc} 0 ${ix2} ${iy2} Z`;
      }

      const paths = sectors.map(s => {
        const sweep = (s.value / total) * 2 * Math.PI - 0.04; // tiny gap
        const start = currentAngle;
        const end = currentAngle + sweep;
        currentAngle += (s.value / total) * 2 * Math.PI;

        return {
          ...s,
          path: describeArc(start, end),
          midAngle: start + sweep / 2
        };
      });

      const svgHtml = `
        <div class="pc-chart-card" style="align-items:center;">
          <div class="pc-chart-header" style="width:100%;">
            <div class="pc-chart-title-wrap">
              <span class="pc-chart-title">방문자 유입 경로 (Folded Paper Fan Wheel)</span>
              <span class="pc-chart-subtitle">종이 부채살처럼 겹쳐진 파스텔 도넛 차트와 중앙 카운트 뱃지</span>
            </div>
          </div>

          <div class="pc-chart-svg-wrap" style="max-width:${size}px;">
            <div class="pc-chart-tooltip" id="pc-donut-tooltip"></div>
            <svg viewBox="0 0 ${size} ${size}">
              ${createPapercutChartDefs()}

              <!-- Deep Carved Well Base Circle (Inner Hole) -->
              <circle cx="${cx}" cy="${cy}" r="${innerR + 3}" fill="#EDE8DE" filter="url(#pc-shadow-paper-soft)" />

              <!-- Donut Slices -->
              ${paths.map(p => `
                <path d="${p.path}" fill="${p.color}" filter="url(#pc-shadow-paper-soft)" class="pc-donut-sector" data-label="${p.label}" data-val="${p.value}%" />
              `).join('')}

              <!-- Center Paper Stamp Well Badge -->
              <circle cx="${cx}" cy="${cy}" r="${innerR - 6}" fill="#FFFDF9" filter="url(#pc-shadow-paper-deep)" />
              <text x="${cx}" y="${cy - 6}" text-anchor="middle" font-size="11" font-weight="700" fill="#7D7368">총 유입량</text>
              <text x="${cx}" y="${cy + 16}" text-anchor="middle" font-size="17" font-weight="800" fill="#3D352E">12,480건</text>
            </svg>

            <div class="pc-chart-legend">
              ${sectors.map(s => `
                <div class="pc-legend-item">
                  <span class="pc-legend-chip" style="background:${s.color};"></span>
                  <span>${s.label} (${s.value}%)</span>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      `;

      container.innerHTML = svgHtml;

      const tooltip = container.querySelector('#pc-donut-tooltip');
      const slices = container.querySelectorAll('.pc-donut-sector');
      slices.forEach(slice => {
        slice.addEventListener('mouseenter', (e) => {
          const label = slice.dataset.label;
          const val = slice.dataset.val;
          tooltip.innerHTML = `<strong>${label}</strong>: ${val}`;
          tooltip.style.left = '50%';
          tooltip.style.top = '30%';
          tooltip.classList.add('is-visible');
        });
        slice.addEventListener('mouseleave', () => tooltip.classList.remove('is-visible'));
      });
    },

    /**
     * Chart 5: Radar Chart (Origami Kite Polygon)
     * Hexagonal web grid with translucent pastel paper polygon and vertex pin seals
     */
    renderRadarChart(container, options = {}) {
      if (!container) return;
      const size = options.size || 380;
      const cx = size / 2;
      const cy = size / 2;
      const maxR = size * 0.38;

      const metrics = [
        { label: "성능 (Performance)", score: 92 },
        { label: "사용성 (Usability)", score: 96 },
        { label: "신뢰도 (Reliability)", score: 88 },
        { label: "디자인 (Design)", score: 98 },
        { label: "가치 (Value)", score: 85 },
        { label: "확장성 (Scalability)", score: 90 }
      ];

      const n = metrics.length;
      function getCoord(score, i, maxRadius = maxR) {
        const angle = (i * 2 * Math.PI) / n - Math.PI / 2;
        const r = (score / 100) * maxRadius;
        return {
          x: cx + r * Math.cos(angle),
          y: cy + r * Math.sin(angle)
        };
      }

      // Generate concentric hexagonal rings
      const rings = [0.2, 0.4, 0.6, 0.8, 1.0].map(ratio => {
        return metrics.map((_, i) => {
          const pt = getCoord(100 * ratio, i);
          return `${pt.x},${pt.y}`;
        }).join(' ');
      });

      // Polygon points
      const polygonPoints = metrics.map((m, i) => {
        const pt = getCoord(m.score, i);
        return `${pt.x},${pt.y}`;
      }).join(' ');

      const svgHtml = `
        <div class="pc-chart-card" style="align-items:center;">
          <div class="pc-chart-header" style="width:100%;">
            <div class="pc-chart-title-wrap">
              <span class="pc-chart-title">시스템 밸런스 지수 (Origami Kite Polygon)</span>
              <span class="pc-chart-subtitle">정육각형 방사형 크리스 그리드와 꼭짓점 리벳 실링</span>
            </div>
            <div class="pc-pill-badge is-mint">종합 평가: 94점</div>
          </div>

          <div class="pc-chart-svg-wrap" style="max-width:${size}px;">
            <div class="pc-chart-tooltip" id="pc-radar-tooltip"></div>
            <svg viewBox="0 0 ${size} ${size}">
              ${createPapercutChartDefs()}

              <!-- Concentric Spider Web Hexagons -->
              ${rings.map(pts => `
                <polygon points="${pts}" fill="none" stroke="#DDD5C7" stroke-width="1.2" stroke-dasharray="3 3" />
              `).join('')}

              <!-- Axis Spoke Lines -->
              ${metrics.map((_, i) => {
                const pt = getCoord(100, i);
                return `<line x1="${cx}" y1="${cy}" x2="${pt.x}" y2="${pt.y}" stroke="#DDD5C7" stroke-width="1.2" />`;
              }).join('')}

              <!-- Translucent Paper Kite Polygon -->
              <polygon points="${polygonPoints}" fill="#A3D8C3" fill-opacity="0.65" stroke="#275C46" stroke-width="2.5" filter="url(#pc-shadow-paper-soft)" />

              <!-- Vertex Pin Seals (Rivets) & Labels -->
              ${metrics.map((m, i) => {
                const pt = getCoord(m.score, i);
                const labelPt = getCoord(116, i);
                return `
                  <g class="pc-radar-point" data-label="${m.label}" data-score="${m.score}">
                    <circle cx="${pt.x}" cy="${pt.y}" r="5.5" fill="#FFFDF9" stroke="#275C46" stroke-width="2.5" filter="url(#pc-shadow-paper-soft)" />
                    <text x="${labelPt.x}" y="${labelPt.y + 4}" text-anchor="middle" font-size="11.5" font-weight="700" fill="#3D352E">
                      ${m.label.split(' ')[0]}
                    </text>
                  </g>
                `;
              }).join('')}
            </svg>

            <div class="pc-chart-legend">
              <div class="pc-legend-item">
                <span class="pc-legend-chip" style="background:var(--pc-mint);"></span>
                <span>현재 측정 점수 (Current Score)</span>
              </div>
            </div>
          </div>
        </div>
      `;

      container.innerHTML = svgHtml;

      const tooltip = container.querySelector('#pc-radar-tooltip');
      container.querySelectorAll('.pc-radar-point').forEach(p => {
        p.addEventListener('mouseenter', () => {
          const label = p.dataset.label;
          const score = p.dataset.score;
          const circle = p.querySelector('circle');
          const x = parseFloat(circle.getAttribute('cx'));
          const y = parseFloat(circle.getAttribute('cy'));

          tooltip.innerHTML = `<strong>${label}</strong>: ${score}점`;
          tooltip.style.left = `${(x / size) * 100}%`;
          tooltip.style.top = `${(y / size) * 100}%`;
          tooltip.classList.add('is-visible');
        });
        p.addEventListener('mouseleave', () => tooltip.classList.remove('is-visible'));
      });
    },

    /**
     * Chart 6: Radial Bar Chart (Concentric Craft Gauge)
     * Semi-circular or circular concentric layered progress rings with cream background track
     */
    renderRadialChart(container, options = {}) {
      if (!container) return;
      const size = options.size || 340;
      const cx = size / 2;
      const cy = size / 2;
      const strokeWidth = 14;

      const rings = [
        { label: "저장 공간 (Storage)", percent: 84, color: "#A3D8C3", r: 120 },
        { label: "메모리 사용률 (Memory)", percent: 68, color: "#BDE0EA", r: 100 },
        { label: "CPU 로드 (Compute)", percent: 52, color: "#F7BA9E", r: 80 },
        { label: "네트워크 I/O (Traffic)", percent: 35, color: "#D7CBEB", r: 60 }
      ];

      const svgHtml = `
        <div class="pc-chart-card" style="align-items:center;">
          <div class="pc-chart-header" style="width:100%;">
            <div class="pc-chart-title-wrap">
              <span class="pc-chart-title">시스템 자원 소비율 (Concentric Craft Gauge)</span>
              <span class="pc-chart-subtitle">나무 크림 베이스 트랙과 4중 동심원 종이 링 게이지</span>
            </div>
          </div>

          <div class="pc-chart-svg-wrap" style="max-width:${size}px;">
            <div class="pc-chart-tooltip" id="pc-radial-tooltip"></div>
            <svg viewBox="0 0 ${size} ${size}">
              ${createPapercutChartDefs()}

              ${rings.map(ring => {
                const c = 2 * Math.PI * ring.r;
                const offset = c * (1 - ring.percent / 100);
                return `
                  <!-- Background Track -->
                  <circle cx="${cx}" cy="${cy}" r="${ring.r}" fill="none" stroke="#EDE8DE" stroke-width="${strokeWidth}" />

                  <!-- Active Pastel Arc -->
                  <circle cx="${cx}" cy="${cy}" r="${ring.r}" fill="none" stroke="${ring.color}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-dasharray="${c}" stroke-dashoffset="${offset}" transform="rotate(-90 ${cx} ${cy})" filter="url(#pc-shadow-paper-soft)" class="pc-radial-arc" data-label="${ring.label}" data-pct="${ring.percent}%" style="cursor:pointer;transition:stroke-width 0.2s ease;" />
                `;
              }).join('')}

              <!-- Center Summary Disc -->
              <circle cx="${cx}" cy="${cy}" r="40" fill="#FFFDF9" filter="url(#pc-shadow-paper-soft)" />
              <text x="${cx}" y="${cy - 4}" text-anchor="middle" font-size="10" font-weight="700" fill="#7D7368">평균 가동률</text>
              <text x="${cx}" y="${cy + 15}" text-anchor="middle" font-size="16" font-weight="800" fill="#3D352E">60%</text>
            </svg>

            <div class="pc-chart-legend">
              ${rings.map(r => `
                <div class="pc-legend-item">
                  <span class="pc-legend-chip" style="background:${r.color};"></span>
                  <span>${r.label.split(' ')[0]} (${r.percent}%)</span>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      `;

      container.innerHTML = svgHtml;

      const tooltip = container.querySelector('#pc-radial-tooltip');
      container.querySelectorAll('.pc-radial-arc').forEach(arc => {
        arc.addEventListener('mouseenter', () => {
          arc.setAttribute('stroke-width', strokeWidth + 3);
          const label = arc.dataset.label;
          const pct = arc.dataset.pct;
          tooltip.innerHTML = `<strong>${label}</strong>: ${pct}`;
          tooltip.style.left = '50%';
          tooltip.style.top = '22%';
          tooltip.classList.add('is-visible');
        });
        arc.addEventListener('mouseleave', () => {
          arc.setAttribute('stroke-width', strokeWidth);
          tooltip.classList.remove('is-visible');
        });
      });
    },

    /**
     * Auto-init all charts and blocks found on the page
     */
    init() {
      // Auto-hydrate elements with data-papercut-block
      document.querySelectorAll('[data-papercut-block]').forEach(el => {
        const type = el.dataset.papercutBlock;
        if (type === 'admin-dashboard') PapercutBlocks.renderAdminDashboard(el);
        else if (type === 'auth') PapercutBlocks.renderAuthBlock(el);
        else if (type === 'settings') PapercutBlocks.renderSettingsBlock(el);
        else if (type === 'ecommerce') PapercutBlocks.renderEcommerceBlock(el);
        else if (type === 'pricing') PapercutBlocks.renderPricingBlock(el);
        else if (type === 'dropzone') PapercutBlocks.renderDropzoneBlock(el);
      });

      // Auto-hydrate elements with data-papercut-chart
      document.querySelectorAll('[data-papercut-chart]').forEach(el => {
        const type = el.dataset.papercutChart;
        if (type === 'area') PapercutCharts.renderAreaChart(el);
        else if (type === 'bar') PapercutCharts.renderBarChart(el);
        else if (type === 'line') PapercutCharts.renderLineChart(el);
        else if (type === 'donut') PapercutCharts.renderDonutChart(el);
        else if (type === 'radar') PapercutCharts.renderRadarChart(el);
        else if (type === 'radial') PapercutCharts.renderRadialChart(el);
      });
    }
  };

  // Expose to window & CommonJS/ES
  global.PapercutBlocks = PapercutBlocks;
  global.PapercutCharts = PapercutCharts;

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { PapercutBlocks, PapercutCharts };
  }

  // Auto-init on DOMContentLoaded if running in browser
  if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => PapercutCharts.init());
    } else {
      PapercutCharts.init();
    }
  }

})(typeof window !== 'undefined' ? window : this);
