/**
 * PaperCut UI - Interactive System Scripts
 * Provides micro-interactions, copy-to-clipboard, custom dropdown logic,
 * filtering across 30 examples, and dynamic playground controls.
 */

document.addEventListener('DOMContentLoaded', () => {
  initDropdowns();
  initCopyCodeButtons();
  initCategoryFilters();
  initSearch();
  initInteractiveDemos();
  initPlayground();
  initComponentTextureStudio();
  initPaperSoundEffect();
  initTextureModes();
  initMatteTextureShowcase();
  initPaperHorizontalScroll();
});

/**
 * Custom Paper-cut Dropdown Handling & Auto-Enhancement
 */
function initDropdowns() {
  autoEnhanceSelectsToPaperDropdowns();
  applyPaperDeckle();
  initToggleButtons();
  initHeaderPaperDropdown();

  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('.pc-dropdown-trigger');
    const allCustomDropdowns = document.querySelectorAll('.pc-dropdown-custom');

    if (trigger) {
      const parent = trigger.closest('.pc-dropdown-custom');
      const wasOpen = parent.classList.contains('is-open') || parent.classList.contains('pc-is-open');
      
      // Close other dropdowns
      allCustomDropdowns.forEach(d => {
        if (d !== parent) {
          d.classList.remove('is-open', 'pc-is-open');
          const t = d.querySelector('.pc-dropdown-trigger');
          if (t) t.setAttribute('aria-expanded', 'false');
        }
      });

      const willOpen = !wasOpen;
      parent.classList.toggle('is-open', willOpen);
      parent.classList.toggle('pc-is-open', willOpen);
      trigger.setAttribute('aria-expanded', willOpen ? 'true' : 'false');

      // Lazy hydrate menu icons on first open to avoid main-thread freeze
      if (willOpen && typeof window.hydratePapercutIcons === 'function') {
        const menu = parent.querySelector('.pc-dropdown-menu');
        if (menu && menu.querySelector('[data-icon]:not([data-hydrated="true"])')) {
          window.hydratePapercutIcons(menu);
        }
      }
      return;
    }

    const item = e.target.closest('.pc-dropdown-item');
    if (item) {
      const parent = item.closest('.pc-dropdown-custom');
      const trigger = parent ? parent.querySelector('.pc-dropdown-trigger') : null;

      // 헤더 종이 질감 및 소리 드롭다운 특화 처리
      if (parent && (parent.classList.contains('pc-header-paper-dropdown') || parent.id === 'pc-header-paper-dropdown')) {
        const val = item.getAttribute('data-value');
        if (!val) return;

        // 라벨 갱신
        const labelEl = document.getElementById('header-paper-current-label');
        if (labelEl) {
          const labelSpan = item.querySelector('.pc-dropdown-item-label');
          const cleanText = labelSpan ? labelSpan.textContent.trim() : item.textContent.replace(/^[\p{Extended_Pictographic}\uFE0F\s]+/u, '').trim();
          labelEl.textContent = cleanText;
        }

        // 아이템 활성 상태 동기화
        parent.querySelectorAll('.pc-dropdown-item').forEach(i => {
          i.classList.remove('pc-is-active', 'is-selected');
        });
        item.classList.add('pc-is-active', 'is-selected');

        // 드롭다운 닫기 & 접근성 속성 갱신
        parent.classList.remove('is-open', 'pc-is-open');
        if (trigger) trigger.setAttribute('aria-expanded', 'false');

        // 숨김 select 동기화 및 change 이벤트 발송
        const hiddenSelect = document.getElementById('header-paper-sound-type');
        if (hiddenSelect) {
          hiddenSelect.value = val;
          hiddenSelect.dispatchEvent(new Event('change', { bubbles: true }));
        }

        // 본문 질감 클래스 교체 및 종이 효과음 재생
        if (typeof applyScreenPaperTexture === 'function') {
          applyScreenPaperTexture(val, true);
        }
        if (typeof playPaperSound === 'function') {
          playPaperSound(val);
        }
        return;
      }

      const triggerContent = trigger ? trigger.querySelector('.pc-trigger-content, .trigger-content') : null;
      const itemIcon = item.querySelector('.pc-dropdown-item-main .pc-inline-icon') || item.querySelector('.pc-inline-icon:not([data-icon="check"])');
      const itemText = item.querySelector('.pc-dropdown-text') || item.querySelector('.pc-dropdown-item-main') || item;
      const cleanText = (itemText.textContent || item.textContent).replace(/[\u2713\u2714\u2705]/g, '').trim();

      if (triggerContent) {
        if (itemIcon) {
          const iconId = itemIcon.getAttribute('data-icon');
          triggerContent.innerHTML = `<span class="pc-inline-icon is-sm" data-icon="${iconId}"></span> <span class="pc-trigger-text trigger-text">${cleanText}</span>`;
          if (typeof window.hydratePapercutIcons === 'function') {
            window.hydratePapercutIcons(triggerContent);
          }
        } else {
          triggerContent.innerHTML = `<span class="pc-trigger-text trigger-text">${cleanText}</span>`;
        }
      } else if (trigger) {
        const triggerSpan = trigger.querySelector('.pc-trigger-text, .trigger-text') || trigger.querySelector('span');
        if (triggerSpan) triggerSpan.textContent = cleanText;
      }

      parent.querySelectorAll('.pc-dropdown-item').forEach(i => {
        i.classList.remove('is-selected');
        i.setAttribute('aria-selected', 'false');
      });
      item.classList.add('is-selected');
      item.setAttribute('aria-selected', 'true');
      parent.classList.remove('is-open', 'pc-is-open');
      if (trigger) trigger.setAttribute('aria-expanded', 'false');

      // Sync with linked hidden select if present
      const selectId = parent.dataset.linkedSelect;
      if (selectId) {
        const select = document.getElementById(selectId);
        if (select) {
          select.value = item.dataset.value;
          select.dispatchEvent(new Event('change', { bubbles: true }));
        }
      }

      // Dispatch custom change event
      const event = new CustomEvent('pc-change', { detail: { value: item.dataset.value || item.textContent.trim() } });
      parent.dispatchEvent(event);
      return;
    }

    // Click outside closes all
    if (!e.target.closest('.pc-dropdown-custom')) {
      allCustomDropdowns.forEach(d => {
        d.classList.remove('is-open', 'pc-is-open');
        const trg = d.querySelector('.pc-dropdown-trigger');
        if (trg) trg.setAttribute('aria-expanded', 'false');
      });
    }
  });

  // ESC 키로 열려있는 모든 드롭다운 닫기
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const openDropdowns = document.querySelectorAll('.pc-dropdown-custom.is-open, .pc-dropdown-custom.pc-is-open');
      openDropdowns.forEach(d => {
        d.classList.remove('is-open', 'pc-is-open');
        const trg = d.querySelector('.pc-dropdown-trigger');
        if (trg) trg.setAttribute('aria-expanded', 'false');
      });
    }
  });
}

/**
 * 헤더 종이 질감 및 소리 드롭다운 동기화 & 초기화
 */
function initHeaderPaperDropdown() {
  const currentTexture = localStorage.getItem('pc_screen_paper_texture') || localStorage.getItem('pc_paper_sound_type') || 'cotton';
  syncHeaderPaperDropdown(currentTexture);
}
window.initHeaderPaperDropdown = initHeaderPaperDropdown;

function syncHeaderPaperDropdown(paperType) {
  const dropdown = document.getElementById('pc-header-paper-dropdown');
  if (!dropdown) return;

  const targetType = paperType || localStorage.getItem('pc_screen_paper_texture') || localStorage.getItem('pc_paper_sound_type') || 'cotton';
  const items = dropdown.querySelectorAll('.pc-dropdown-item');
  const currentLabel = document.getElementById('header-paper-current-label');
  const hiddenSelect = document.getElementById('header-paper-sound-type');

  items.forEach(btn => {
    const isTarget = (btn.getAttribute('data-value') === targetType);
    btn.classList.toggle('pc-is-active', isTarget);
    btn.classList.toggle('is-selected', isTarget);
    if (isTarget && currentLabel) {
      const labelSpan = btn.querySelector('.pc-dropdown-item-label');
      const cleanText = labelSpan ? labelSpan.textContent.trim() : btn.textContent.replace(/^[\p{Extended_Pictographic}\uFE0F\s]+/u, '').trim();
      currentLabel.textContent = cleanText;
    }
  });

  if (hiddenSelect && hiddenSelect.value !== targetType) {
    hiddenSelect.value = targetType;
  }
}
window.syncHeaderPaperDropdown = syncHeaderPaperDropdown;

/**
 * 데클 종이 모양 연결: 음각 셀렉트(.pc-dropdown-custom.is-well)의 트리거·메뉴·항목과 .pc-toggle-btn에
 * data-pc-paper="deckle"을 붙인다. 페이퍼 레이어 엔진(papercut-paper-layer.js)이 이 속성을 보고
 * .pc-svg-input-frame-wrap과 같은 물결 외곽 색지 + 흰 속지 SVG를 실제 크기로 그린다.
 * 엔진이 없으면 속성만 남고 기존 CSS 모양이 그대로 쓰인다. 이미 data-pc-paper가 있으면 존중한다.
 */
function applyPaperDeckle(root = document) {
  if (!root.querySelectorAll) return;
  const targets = root.querySelectorAll(
    '.pc-dropdown-custom.is-well .pc-dropdown-trigger, .pc-dropdown-custom.is-well .pc-dropdown-menu, ' +
    '.pc-dropdown-custom.is-well .pc-dropdown-item, .pc-toggle-btn'
  );
  targets.forEach(el => {
    if (el.hasAttribute('data-pc-paper')) return;
    // 스크롤되는 긴 메뉴는 SVG 프레임이 내용과 함께 밀려 올라가므로 CSS 밑판을 유지한다(항목만 데클).
    if (el.classList.contains('pc-dropdown-menu') && el.scrollHeight > el.clientHeight + 1) return;
    el.setAttribute('data-pc-paper', 'deckle');
  });
}
window.applyPaperDeckle = applyPaperDeckle;

/**
 * 단독 토글 버튼(.pc-toggle-btn): 누를 때마다 aria-pressed와 .is-active를 함께 바꾼다.
 */
function initToggleButtons() {
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.pc-toggle-btn');
    if (!btn || btn.disabled) return;
    const on = btn.getAttribute('aria-pressed') !== 'true';
    btn.setAttribute('aria-pressed', on ? 'true' : 'false');
    btn.classList.toggle('is-active', on);
  });
}

/**
 * Helper to extract or map icon and label for select options
 */
function extractOptionIcon(opt) {
  if (opt.dataset && opt.dataset.icon) {
    // 아이콘을 따로 지정했으면 라벨 앞 이모지는 중복이므로 뗀다(3D 페이퍼컷 아이콘만 남긴다).
    return { iconId: opt.dataset.icon, label: opt.textContent.trim().replace(/^\p{Extended_Pictographic}\uFE0F?\s*/u, '') };
  }
  const text = opt.textContent.trim();
  const emojiMap = {
    '\u{1F436}': 'dog', '\u{1F431}': 'cat', '\u{1F43E}': 'paw',
    '\u{1F36F}': 'honey', '\u{1F9C8}': 'butter',
    '\u{26E9}': 'shrine-torii', '\u{26E9}\u{FE0F}': 'shrine-torii',
    '\u{1F5FC}': 'eiffel-tower', '\u{1F3D4}': 'matterhorn', '\u{1F3D4}\u{FE0F}': 'matterhorn',
    '\u{1F490}': 'bouquet', '\u{2702}': 'scissors', '\u{2702}\u{FE0F}': 'scissors',
    '\u{1F324}': 'cloud-sun-rays', '\u{1F324}\u{FE0F}': 'cloud-sun-rays',
    '\u{1F327}': 'cloud-rain', '\u{1F327}\u{FE0F}': 'cloud-rain',
    '\u{1F3A7}': 'headphones', '\u{1F3A8}': 'palette', '\u{1F4BB}': 'laptop',
    '\u{1F33F}': 'leaf', '\u{1F343}': 'leaf', '\u{1F351}': 'apricot', '\u{1F34A}': 'apricot',
    '\u{1F52E}': 'crystal-ball', '\u{1F4BA}': 'airplane-seat',
    '\u{2615}': 'coffee', '\u{1F950}': 'croissant', '\u{1F338}': 'flower',
    '\u{1F6E1}': 'shield', '\u{1F6E1}\u{FE0F}': 'shield', '\u{1F6D2}': 'cart', '\u{1F6AB}': 'ban',
    '\u{2600}': 'sun', '\u{2600}\u{FE0F}': 'sun', '\u{2728}': 'sparkles',
    '\u{2709}': 'mail', '\u{2709}\u{FE0F}': 'mail', '\u{1F48C}': 'mail', '\u{1F50D}': 'search',
    '\u{1F381}': 'gift', '\u{1F496}': 'heart', '\u{1F4F7}': 'camera',
    '\u{1F36D}': 'lollipop', '\u{1F34B}': 'lemon', '\u{1FAD0}': 'blueberry',
    '\u{1F9F8}': 'teddy-bear', '\u{1F4DC}': 'scroll', '\u{1F38B}': 'bamboo',
    '\u{1F4E6}': 'package', '\u{1F54A}': 'dove', '\u{1F54A}\u{FE0F}': 'dove',
    '\u{1F4D6}': 'book', '\u{1F319}': 'moon', '\u{1F30C}': 'galaxy',
    '\u{1F510}': 'lock', '\u{1F382}': 'cake', '\u{1F3E1}': 'home',
    '\u{1F375}': 'tea', '\u{1F3F7}': 'price-tag', '\u{1F3F7}\u{FE0F}': 'price-tag', '\u{1F331}': 'sprout',
    '\u{26C5}': 'cloud-sun', '\u{2601}': 'cloud', '\u{2601}\u{FE0F}': 'cloud', '\u{1F516}': 'bookmark'
  };

  for (const [em, iconId] of Object.entries(emojiMap)) {
    if (text.startsWith(em)) {
      const cleanLabel = text.slice(em.length).trim();
      return { iconId, label: cleanLabel };
    }
  }
  return { iconId: null, label: text };
}

/**
 * Automatically transforms all standard <select class="pc-select"> into
 * handcrafted Layered Paper Bookmark Swatch Dropdowns with 100% CSS styling!
 * Scoped root support and lazy trigger-only hydration
 */
function autoEnhanceSelectsToPaperDropdowns(root = document) {
  const selectWrappers = root.querySelectorAll ? root.querySelectorAll('.pc-select-wrapper:not(.is-enhanced)') : [];

  selectWrappers.forEach((wrapper, idx) => {
    // Avoid double enhancing
    if (wrapper.querySelector('.pc-dropdown-custom') || wrapper.classList.contains('is-enhanced')) return;

    const select = wrapper.querySelector('select.pc-select');
    if (!select) return;

    // Give select an ID if missing
    if (!select.id) select.id = 'pc-auto-select-' + idx;

    const isWell = select.classList.contains('is-well') || select.classList.contains('pc-select-well');

    // Create the custom paper dropdown container
    const customDropdown = document.createElement('div');
    customDropdown.className = 'pc-dropdown-custom' + (isWell ? ' is-well' : '');
    customDropdown.dataset.linkedSelect = select.id;

    // Selected text & options
    const selectedOption = select.options[select.selectedIndex] || select.options[0];
    const initialExtracted = selectedOption ? extractOptionIcon(selectedOption) : { iconId: null, label: '선택하세요' };

    // Trigger button
    const trigger = document.createElement('button');
    trigger.type = 'button';
    trigger.className = 'pc-dropdown-trigger' + (isWell ? ' is-well' : '');
    trigger.setAttribute('aria-haspopup', 'listbox');
    trigger.setAttribute('aria-expanded', 'false');
    trigger.innerHTML = `
      <span class="pc-trigger-content trigger-content">
        ${initialExtracted.iconId ? `<span class="pc-inline-icon is-sm" data-icon="${initialExtracted.iconId}"></span>` : ''}
        <span class="pc-trigger-text trigger-text">${initialExtracted.label}</span>
      </span>
      <span class="arrow-icon pc-inline-icon is-xs" data-icon="chevron-down" aria-hidden="true"><svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6l4 4 4-4"/></svg></span>
    `;
    customDropdown.appendChild(trigger);

    // Menu list (넓은 바닥 종이 플레이트)
    const menu = document.createElement('div');
    menu.className = 'pc-dropdown-menu';
    menu.setAttribute('role', 'listbox');

    Array.from(select.options).forEach((opt, optIdx) => {
      const isSelected = opt.selected || optIdx === select.selectedIndex;
      const item = document.createElement('button');
      item.type = 'button';
      item.className = 'pc-dropdown-item' + (isSelected ? ' is-selected' : '');
      item.setAttribute('role', 'option');
      item.setAttribute('aria-selected', isSelected ? 'true' : 'false');
      item.dataset.value = opt.value || opt.textContent.trim();
      
      const optExtracted = extractOptionIcon(opt);
      item.innerHTML = `
        <span class="pc-dropdown-item-main">
          ${optExtracted.iconId ? `<span class="pc-inline-icon is-sm" data-icon="${optExtracted.iconId}"></span>` : ''}
          <span class="pc-dropdown-text">${optExtracted.label}</span>
        </span>
        <span class="pc-dropdown-check" aria-hidden="true">
          <svg class="pc-check-stream-v" viewBox="0 0 24 24" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M 3.8 10.2 C 4.6 9.4 5.8 8.6 6.8 9.2 C 7.8 10.8 8.8 13.0 10.0 14.8 C 12.2 11.6 15.2 7.6 18.2 4.4 C 19.4 3.8 20.6 4.5 21.2 5.8 C 17.6 10.4 14.0 15.0 10.4 19.4 C 9.6 19.8 8.8 19.6 8.2 18.8 C 6.6 16.0 5.2 13.2 3.8 10.2 Z" fill="#14422E" transform="translate(0, 0.9)"/>
            <path d="M 3.8 10.2 C 4.6 9.4 5.8 8.6 6.8 9.2 C 7.8 10.8 8.8 13.0 10.0 14.8 C 12.2 11.6 15.2 7.6 18.2 4.4 C 19.4 3.8 20.6 4.5 21.2 5.8 C 17.6 10.4 14.0 15.0 10.4 19.4 C 9.6 19.8 8.8 19.6 8.2 18.8 C 6.6 16.0 5.2 13.2 3.8 10.2 Z" fill="#246D4E"/>
            <path d="M 4.2 10.2 C 4.8 9.6 5.8 9.0 6.6 9.5 C 7.6 11.0 8.6 13.1 9.8 14.8 C 12.0 11.7 15.0 7.8 18.0 4.7 C 19.0 4.2 20.0 4.8 20.6 5.8 C 17.2 10.2 13.8 14.7 10.2 18.8 C 9.6 19.2 8.9 19.0 8.4 18.4 C 6.9 15.8 5.6 13.1 4.2 10.2 Z" fill="#3D9B72"/>
            <path d="M 4.2 10.0 C 5.8 8.8 7.8 11.0 9.8 14.8 C 13.5 10.0 17.0 6.2 20.6 5.6" fill="none" stroke="#FFFFFF" stroke-width="0.8" stroke-linecap="round"/>
          </svg>
        </span>
      `;
      menu.appendChild(item);
    });

    customDropdown.appendChild(menu);

    // Hide native select visually while keeping it accessible in DOM
    select.style.display = 'none';
    wrapper.classList.add('is-enhanced');
    wrapper.appendChild(customDropdown);

    if (isWell) applyPaperDeckle(customDropdown);

    // Only hydrate the visible trigger button initially; menu icons hydrate on first open
    if (typeof window.hydratePapercutIcons === 'function') {
      window.hydratePapercutIcons(trigger);
    }
  });
}
window.autoEnhanceSelectsToPaperDropdowns = autoEnhanceSelectsToPaperDropdowns;

/**
 * Toast Notification for Copy and Action Feedback
 */
function showPaperToast(message, type = 'mint', iconId = 'check') {
  let toastContainer = document.getElementById('pc-toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'pc-toast-container';
    toastContainer.style.cssText = `
      position: fixed;
      bottom: 24px;
      right: 24px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      z-index: 300000;
      pointer-events: none;
    `;
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  toast.className = `pc-toast pc-toast-${type}`;
  toast.style.cssText = `
    background: #FFFDF9;
    border: 2px solid rgba(74, 58, 42, 0.16);
    border-radius: 12px;
    padding: 12px 20px;
    font-size: 14px;
    font-weight: 600;
    color: #38322B;
    box-shadow: 0 6px 0 rgba(74, 58, 42, 0.15), 0 12px 24px rgba(74, 58, 42, 0.1);
    transform: translateY(20px) scale(0.95);
    opacity: 0;
    transition: all 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    display: flex;
    align-items: center;
    gap: 8px;
    pointer-events: auto;
  `;
  toast.innerHTML = `<span class="pc-inline-icon is-xs" data-icon="${iconId}"></span> <span>${message}</span>`;
  toastContainer.appendChild(toast);
  if (typeof window.hydratePapercutIcons === 'function') {
    window.hydratePapercutIcons(toast);
  }

  requestAnimationFrame(() => {
    toast.style.transform = 'translateY(0) scale(1)';
    toast.style.opacity = '1';
  });

  setTimeout(() => {
    toast.style.transform = 'translateY(10px) scale(0.95)';
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 250);
  }, 2400);
}

/**
 * Copy Code Snippets
 */
function initCopyCodeButtons() {
  document.addEventListener('click', (e) => {
    const copyBtn = e.target.closest('[data-copy-target]');
    if (!copyBtn) return;

    const targetId = copyBtn.getAttribute('data-copy-target');
    const targetElement = document.getElementById(targetId);
    if (!targetElement) return;

    const code = targetElement.textContent.trim();
    navigator.clipboard.writeText(code).then(() => {
      showPaperToast('코드가 클립보드에 복사되었습니다!', 'mint', 'check');
      const originalText = copyBtn.innerHTML;
      copyBtn.innerHTML = '<span class="pc-inline-icon is-xs" data-icon="check"></span> <span>복사됨</span>';
      if (typeof window.hydratePapercutIcons === 'function') {
        window.hydratePapercutIcons(copyBtn);
      }
      setTimeout(() => copyBtn.innerHTML = originalText, 1800);
    }).catch(err => {
      console.error(err);
      showPaperToast('복사에 실패했습니다.', 'peach', 'ban');
    });
  });

  // Toggle code view button
  document.addEventListener('click', (e) => {
    const toggleBtn = e.target.closest('[data-toggle-code]');
    if (!toggleBtn) return;
    const targetId = toggleBtn.getAttribute('data-toggle-code');
    const codeBlock = document.getElementById(targetId);
    if (codeBlock) {
      const isHidden = codeBlock.style.display === 'none' || !codeBlock.style.display;
      codeBlock.style.display = isHidden ? 'block' : 'none';
      toggleBtn.classList.toggle('is-active', isHidden);
      toggleBtn.querySelector('.toggle-label').textContent = isHidden ? '코드 닫기' : '코드 보기';
    }
  });
}

/**
 * Category Filtering for 30 Examples
 */
function initCategoryFilters() {
  const filterButtons = document.querySelectorAll('.pc-filter-btn[data-filter]');
  if (!filterButtons.length) return;
  const exampleCards = document.querySelectorAll('.pc-example-item, .example-item');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;
      if (!filter) return;

      filterButtons.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');

      let count = 0;

      exampleCards.forEach(card => {
        const categories = card.dataset.category ? card.dataset.category.split(' ') : [];
        if (filter === 'all' || categories.includes(filter)) {
          card.style.display = '';
          count++;
        } else {
          card.style.display = 'none';
        }
      });

      const countBadge = document.getElementById('visible-count');
      if (countBadge) countBadge.textContent = `${count}개 예제`;
    });
  });
}

/**
 * Live Search across examples
 */
function initSearch() {
  const searchInput = document.getElementById('search-examples-input');
  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    const exampleCards = document.querySelectorAll('.pc-example-item, .example-item');
    let count = 0;

    exampleCards.forEach(card => {
      const title = card.querySelector('.pc-example-title, .example-title')?.textContent.toLowerCase() || '';
      const desc = card.querySelector('.pc-example-desc, .example-desc')?.textContent.toLowerCase() || '';
      const tags = card.dataset.tags?.toLowerCase() || '';

      if (title.includes(query) || desc.includes(query) || tags.includes(query)) {
        card.style.display = '';
        count++;
      } else {
        card.style.display = 'none';
      }
    });

    const countBadge = document.getElementById('visible-count');
    if (countBadge) countBadge.textContent = `${count}개 예제`;
  });
}

/**
 * Interactive Demos logic for specific cards
 */
function initInteractiveDemos() {
  // Demo 9: Newsletter Subscribe
  const demo9Form = document.getElementById('demo-newsletter-form');
  if (demo9Form) {
    demo9Form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = demo9Form.querySelector('input[type="email"]').value;
      if (!email) {
        showPaperToast('이메일 주소를 입력해주세요.', 'peach');
        return;
      }
      showPaperToast(`'${email}'님께 주간 종이비둘기 레터 발송 신청 완료!`, 'mint', 'mail');
      demo9Form.reset();
    });
  }

  // Demo 10: Search & Category Filter
  const demo10Btn = document.getElementById('demo10-btn');
  if (demo10Btn) {
    demo10Btn.addEventListener('click', () => {
      const q = document.getElementById('demo10-input')?.value.trim() || '전체';
      const cat = document.getElementById('demo10-select')?.value || '전체';
      showPaperToast(`[${cat}] 카테고리에서 '${q}' 도안을 종이 서고에서 찾았습니다.`, 'sky', 'search');
    });
  }

  // Demo 11: Book Club Registration
  const demo11Btn = document.getElementById('demo11-btn');
  if (demo11Btn) {
    demo11Btn.addEventListener('click', () => {
      const name = document.getElementById('demo11-name')?.value.trim() || '독서가';
      const genre = document.getElementById('demo11-genre')?.value || '힐링 에세이';
      showPaperToast(`[${name}]님께 '${genre}' 북클럽 책갈피가 발송되었습니다!`, 'lavender', 'bookmark');
    });
  }

  // Demo 12: Plant Care Reminder
  const demo12Btn = document.getElementById('demo12-btn');
  if (demo12Btn) {
    demo12Btn.addEventListener('click', () => {
      const name = document.getElementById('demo12-name').value || '몬스테라 친구';
      showPaperToast(`[${name}]의 물주기 종이 라벨이 화분에 걸렸습니다!`, 'sage', 'sprout');
    });
  }

  // Demo 13: Bakery Order
  const demo13Btn = document.getElementById('demo13-btn');
  if (demo13Btn) {
    demo13Btn.addEventListener('click', () => {
      const item = document.getElementById('demo13-item')?.value || '딸기 크로와상';
      const qty = document.getElementById('demo13-qty')?.value || '1';
      showPaperToast(`주문 접수: ${item} ${qty}개 (종이 영수증 발행)`, 'buttercup', 'croissant');
    });
  }

  // Demo 14: Coffee Customizer
  const demo14Btn = document.getElementById('demo14-btn');
  if (demo14Btn) {
    demo14Btn.addEventListener('click', () => {
      const bean = document.getElementById('demo14-bean')?.value || '에티오피아 예가체프';
      const req = document.getElementById('demo14-req')?.value.trim() || '핸드드립용';
      showPaperToast(`[${bean} / ${req}] 아로마 밸브 종이 백에 봉인 완료!`, 'peach', 'coffee');
    });
  }

  // Demo 15: Dream Journal
  const demo15Btn = document.getElementById('demo15-btn');
  if (demo15Btn) {
    demo15Btn.addEventListener('click', () => {
      const title = document.getElementById('demo15-title').value;
      if (!title) {
        showPaperToast('기억나는 꿈의 제목을 적어주세요.', 'lavender', 'quill-inkpot');
        return;
      }
      showPaperToast(`꿈 일기 '${title}'가 파스텔 서랍에 보관되었습니다.`, 'lavender', 'moon');
      document.getElementById('demo15-title').value = '';
    });
  }

  // Demo 16: Secret Vault Passcode
  const demo16Btn = document.getElementById('demo16-btn');
  if (demo16Btn) {
    demo16Btn.addEventListener('click', () => {
      const pass = document.getElementById('demo16-pass')?.value;
      if (!pass || pass.length < 4) {
        showPaperToast('비밀번호 4자리를 정확히 입력해주세요.', 'peach', 'lock');
        return;
      }
      showPaperToast('비밀 페이퍼 금고가 스르륵 펼쳐졌습니다!', 'rose', 'unlock');
    });
  }

  // Demo 17: Luggage Tag
  const demo17Btn = document.getElementById('demo17-btn');
  if (demo17Btn) {
    demo17Btn.addEventListener('click', () => {
      const name = document.getElementById('demo17-name')?.value || '여행자';
      const dest = document.getElementById('demo17-dest')?.value || '교토';
      showPaperToast(`[${dest}]행 ${name}님의 러기지 종이 태그가 발행되었습니다!`, 'rose', 'airplane');
    });
  }

  // Demo 18: Celebration Card Builder
  const demo18Btn = document.getElementById('demo18-btn');
  if (demo18Btn) {
    demo18Btn.addEventListener('click', () => {
      const to = document.getElementById('demo18-to')?.value.trim() || '소중한 분';
      showPaperToast(`[${to}]님을 향한 입체 축하 카드에 왁스 실링 도장이 찍혔습니다!`, 'rose', 'envelope-heart');
    });
  }

  // Demo 19: Workshop Registration
  const demo19Btn = document.getElementById('demo19-btn');
  if (demo19Btn) {
    demo19Btn.addEventListener('click', () => {
      const phone = document.getElementById('demo19-phone')?.value.trim() || '010-0000-0000';
      showPaperToast(`연락처(${phone})로 원데이 클래스 종이 티켓이 예약되었습니다!`, 'mint', 'ticket');
    });
  }

  // Demo 20: Sky & Cloud Forecast
  const demo20Btn = document.getElementById('demo20-btn');
  if (demo20Btn) {
    demo20Btn.addEventListener('click', () => {
      const city = document.getElementById('demo20-city')?.value.trim() || '서울';
      showPaperToast(`[${city}]의 하늘 구름 종이가 산뜻하게 새로고침되었습니다.`, 'sky', 'cloud-sun');
    });
  }

  // Demo 21: Pet Companion Adoption
  const demo21Btn = document.getElementById('demo21-btn');
  if (demo21Btn) {
    demo21Btn.addEventListener('click', () => {
      const home = document.getElementById('demo21-home')?.value.trim() || '따뜻한 보금자리';
      showPaperToast(`[${home}] 임시보호 매칭 신청서가 전송되었습니다!`, 'buttercup', 'heart');
    });
  }

  // Demo 22: Tea Blending
  const demo22Btn = document.getElementById('demo22-btn');
  if (demo22Btn) {
    demo22Btn.addEventListener('click', () => {
      const tea = document.getElementById('demo22-tea')?.value || '캐모마일 민트';
      showPaperToast(`향긋한 [${tea}] 블렌딩 티백이 종이 봉투에 담겼습니다.`, 'sage', 'tea');
    });
  }

  // Demo 23: Vintage Parcel Dispatch
  const demo23Btn = document.getElementById('demo23-btn');
  if (demo23Btn) {
    demo23Btn.addEventListener('click', () => {
      const addr = document.getElementById('demo23-addr')?.value.trim() || '배송지 주소';
      showPaperToast(`[${addr}]행 소포 발송장에 빨간 스탬프 날인 완료!`, 'peach', 'stamp-rubber');
    });
  }

  // Demo 24: Lo-Fi Soundscape
  const demo24Btn = document.getElementById('demo24-btn');
  if (demo24Btn) {
    demo24Btn.addEventListener('click', () => {
      const mood = document.getElementById('demo24-mood')?.value.trim() || '오후의 공방';
      showPaperToast(`[${mood}] 카세트 테이프가 돌아가며 아늑한 소리가 흐릅니다.`, 'lavender', 'music');
    });
  }

  // Demo 25: Paper Stepper (Fold metaphor)
  const demo25PrevBtn = document.getElementById('demo25-prev-btn');
  const demo25NextBtn = document.getElementById('demo25-next-btn');
  const demo25Step1 = document.getElementById('demo25-step1-content');
  const demo25Step2 = document.getElementById('demo25-step2-content');
  const demo25Step1Badge = document.getElementById('demo25-step1-badge');
  const demo25Step2Badge = document.getElementById('demo25-step2-badge');
  let demo25CurrentStep = 1;

  if (demo25NextBtn && demo25PrevBtn && demo25Step1 && demo25Step2) {
    demo25NextBtn.addEventListener('click', () => {
      if (demo25CurrentStep === 1) {
        demo25CurrentStep = 2;
        demo25Step1.style.display = 'none';
        demo25Step2.style.display = 'block';
        demo25PrevBtn.disabled = false;
        const nextText = demo25NextBtn.querySelector('.pc-kirigami-text') || demo25NextBtn.querySelector('text');
        if (nextText) {
          nextText.textContent = '가입 완료 종이 접기 ✓';
        } else {
          demo25NextBtn.innerHTML = '<span>가입 완료 종이 접기</span> <span class="pc-inline-icon is-sm" data-icon="check"></span>';
          if (typeof window.hydratePapercutIcons === 'function') window.hydratePapercutIcons(demo25NextBtn);
        }
        if (demo25Step1Badge) {
          demo25Step1Badge.classList.remove('pc-badge-mint');
          demo25Step1Badge.style.opacity = '0.6';
        }
        if (demo25Step2Badge) {
          demo25Step2Badge.classList.add('pc-badge-buttercup');
          demo25Step2Badge.style.opacity = '1';
        }
        showPaperToast('2단계 팀 선택 종이를 펼쳤습니다!', 'mint', 'arrow-right');
      } else {
        const name = document.getElementById('demo25-name')?.value || '신규 크래프터';
        const team = document.getElementById('demo25-team')?.value || '디자인팀';
        showPaperToast(`[${name}] 크래프터님의 [${team}] 온보딩 종이 접기가 완료되었습니다!`, 'mint', 'team-meeting');
      }
    });

    demo25PrevBtn.addEventListener('click', () => {
      if (demo25CurrentStep === 2) {
        demo25CurrentStep = 1;
        demo25Step2.style.display = 'none';
        demo25Step1.style.display = 'block';
        demo25PrevBtn.disabled = true;
        const nextText = demo25NextBtn.querySelector('.pc-kirigami-text') || demo25NextBtn.querySelector('text');
        if (nextText) {
          nextText.textContent = '다음 종이 접기 →';
        } else {
          demo25NextBtn.innerHTML = '<span>다음 종이 접기</span> <span class="pc-inline-icon is-sm" data-icon="arrow-right"></span>';
          if (typeof window.hydratePapercutIcons === 'function') window.hydratePapercutIcons(demo25NextBtn);
        }
        if (demo25Step1Badge) {
          demo25Step1Badge.classList.add('pc-badge-mint');
          demo25Step1Badge.style.opacity = '1';
        }
        if (demo25Step2Badge) {
          demo25Step2Badge.classList.remove('pc-badge-buttercup');
          demo25Step2Badge.style.opacity = '0.6';
        }
        showPaperToast('1단계 인적사항 종이로 되돌아왔습니다.', 'peach', 'arrow-left');
      }
    });
  }

  // Demo 26: Color Swatch Generator
  const demo26Btn = document.getElementById('demo26-btn');
  const demo26Theme = document.getElementById('demo26-theme');
  const demo26Hex = document.getElementById('demo26-hex');
  const demo26Preview = document.getElementById('demo26-preview');

  if (demo26Theme && demo26Hex && demo26Preview) {
    demo26Theme.addEventListener('change', (e) => {
      const hex = e.target.value;
      if (hex) {
        demo26Hex.value = hex;
        demo26Preview.style.background = hex;
      }
    });
    demo26Hex.addEventListener('input', (e) => {
      demo26Preview.style.background = e.target.value;
    });
  }
  if (demo26Btn && demo26Hex) {
    demo26Btn.addEventListener('click', () => {
      const hex = demo26Hex.value;
      const cssVar = `--pc-custom-pastel: ${hex};`;
      navigator.clipboard.writeText(cssVar).then(() => {
        showPaperToast(`CSS 변수 [${cssVar}]가 클립보드에 복사되었습니다!`, 'peach', 'palette');
      }).catch(() => {
        showPaperToast(`팔레트 색상: ${hex}`, 'peach', 'palette');
      });
    });
  }

  // Demo 27: Todo Paper Strips with Enter key
  const demo27AddBtn = document.getElementById('demo27-add-btn');
  const demo27Input = document.getElementById('demo27-input');
  const demo27List = document.getElementById('demo27-list');
  if (demo27AddBtn && demo27Input && demo27List) {
    const handleAddTodo = () => {
      const text = demo27Input.value.trim();
      if (!text) return;
      const li = document.createElement('div');
      li.className = 'pc-card';
      li.style.cssText = 'padding: 8px 14px; display: flex; align-items: center; justify-content: space-between; border-radius: 8px; margin-top: 6px; background: #FFFDF9;';
      li.innerHTML = `
        <label class="pc-checkbox-label">
          <input type="checkbox" class="pc-checkbox-input">
          <span class="pc-checkbox-box"></span>
          <span>${text}</span>
        </label>
        <button class="pc-btn pc-btn-sm pc-btn-peach inline-flex items-center justify-center leading-none whitespace-nowrap" style="padding: 4px 10px; font-size: 11px; min-height: 44px;">삭제</button>
      `;
      li.querySelector('button').addEventListener('click', () => li.remove());
      demo27List.appendChild(li);
      demo27Input.value = '';
      showPaperToast('새 할 일 종이띠가 추가되었습니다.', 'sky', 'check');
    };

    demo27AddBtn.addEventListener('click', handleAddTodo);
    demo27Input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleAddTodo();
      }
    });
  }

  // Demo 28: Airline Boarding Pass
  const demo28Btn = document.getElementById('demo28-btn');
  if (demo28Btn) {
    demo28Btn.addEventListener('click', () => {
      const code = document.getElementById('demo28-code')?.value || 'AIR PAPER #772';
      const seat = document.getElementById('demo28-seat')?.value || '퍼스트 스위트 1A';
      showPaperToast(`[${code} / ${seat}] 실물 종이 보딩패스가 인쇄되었습니다!`, 'rose', 'ticket');
    });
  }

  // Demo 29: Library Checkout Slip
  const demo29Btn = document.getElementById('demo29-btn');
  if (demo29Btn) {
    demo29Btn.addEventListener('click', () => {
      const book = document.getElementById('demo29-book')?.value || '어린 왕자';
      showPaperToast(`[${book}] 대출 슬립에 반납 예정일 붉은 도장이 날인되었습니다!`, 'buttercup', 'calendar');
    });
  }
}

/**
 * Live Customization Playground
 */
/**
 * Global Paper Texture Catalog (16 Procedural Handcrafted Stocks)
 */
window.PAPERCUT_TEXTURES = {
  cotton: {
    id: 'cotton',
    name: '300g 수제 코튼지',
    badge: '300g Heavyweight Cotton',
    desc: '은은한 펄프 섬유 요철과 부드러운 코튼 볼륨감 (콜드프레스 질감)',
    category: 'Core Stock',
    weight: '300g/m²',
    fiber: '순수 면 100% 코튼 펄프 요철',
    lighting: '45° 앰비언트 확산광 + 1.5px 칼선 베벨',
    bestFor: '버튼, 메인 카드, 스탠드얼론 페이퍼 커팅 아이콘',
    toast: '300g 수제 코튼지 질감이 컴포넌트와 아이콘에 적용되었습니다!'
  },
  cream: {
    id: 'cream',
    name: '350g 매트 크림보드',
    badge: '350g Matte Cream Board',
    desc: '도톰하고 매트한 크림지 고유의 고급스러운 차분함과 정교한 칼선 베벨',
    category: 'Core Stock',
    weight: '350g/m²',
    fiber: '고밀도 압착 매트 보드지 섬유',
    lighting: '50° 디퓨즈 광원 + 선명한 음각 인셋',
    bestFor: '인풋 필드, 견고한 패널 카드, 프레임 배지',
    toast: '350g 매트 크림보드 질감이 적용되었습니다! 도톰한 보드지의 깊이감이 살아납니다.'
  },
  hanji: {
    id: 'hanji',
    name: '닥나무 한지결',
    badge: 'Mulberry Fiber Hanji',
    desc: '닥나무 섬유가 자연스럽게 얽힌 전통 수제 한지의 은은한 결',
    category: 'Core Stock',
    weight: '120g/m²',
    fiber: '천연 닥나무 장섬유 수제 결',
    lighting: '60° 장섬유 사광 + 자연스러운 엣지 하이라이트',
    bestFor: '동양적 페이퍼 커팅 아이콘, 오리가미 체크박스, 감성 배지',
    toast: '닥나무 한지결이 적용되었습니다! 부드러운 수제 한지 장섬유의 운치가 펼쳐집니다.'
  },
  vellum: {
    id: 'vellum',
    name: '실크벨러지',
    badge: 'Smooth Silk Vellum',
    desc: '빛을 은은하게 투과시키는 매끄럽고 실키한 고급 벨럼 트레이싱 감촉',
    category: 'Core Stock',
    weight: '110g/m²',
    fiber: '실크 벨럼 스무스 글래신 페이퍼',
    lighting: '70° 하이앵글 투과광 + 미세 글래스 엣지',
    bestFor: '드롭다운 메뉴, 반투명 오버레이 칩, 모던 아이콘',
    toast: '실크벨러지가 적용되었습니다! 반투명하고 매끄러운 실크 벨럼의 촉감을 느껴보세요.'
  },
  watercolor: {
    id: 'watercolor',
    name: '300g 아르쉬 수채화지',
    badge: 'Rough Watercolor Paper',
    desc: '깊은 딤플과 거친 엠보싱이 돋보이는 최고급 수채화 전용 콜드프레스지',
    category: 'Fine Art',
    weight: '300g/m²',
    fiber: '깊은 요철의 콜드프레스 딤플 코튼',
    lighting: '40° 측광 딤플 셰도우 + 깊은 양각 반사',
    bestFor: '대형 일러스트 카드, 스탬프 배지, 수채화 파스텔 버튼',
    toast: '300g 아르쉬 거친 수채화지 질감이 적용되었습니다! 깊은 딤플 엠보싱이 돋보입니다.'
  },
  linen: {
    id: 'linen',
    name: '프렌치 린넨 패브릭지',
    badge: 'French Woven Linen',
    desc: '가로세로 직조 격자 섬유가 손끝에 만져질 듯한 린넨 캔버스 텍스처',
    category: 'Fine Art',
    weight: '250g/m²',
    fiber: '이중 직조 린넨 패브릭 섬유 격자',
    lighting: '크로스 그리드 마이크로 셰도우',
    bestFor: '태그 버튼, 패브릭 스타일 카드, 북마크 컴포넌트',
    toast: '프렌치 린넨 패브릭지 질감이 적용되었습니다! 정교한 격자 직조 조직감이 렌더링됩니다.'
  },
  shimmer: {
    id: 'shimmer',
    name: '펄 메탈릭 쉬머지',
    badge: 'Pearlescent Stardream',
    desc: '미세 진주빛 파우더 광채와 각도에 따라 반짝이는 은은한 하이라이트',
    category: 'Fine Art',
    weight: '280g/m²',
    fiber: '진주 광물 미세 크리스탈 펄 코팅',
    lighting: '스페큘러 반사광 + 새틴 쉬머 하이라이트',
    bestFor: '선물/이벤트 버튼, 스타더스트 아이콘, 럭셔리 배지',
    toast: '펄 메탈릭 쉬머지 질감이 적용되었습니다! 은은한 진주빛 광택이 피어납니다.'
  },
  parchment: {
    id: 'parchment',
    name: '빈티지 앤틱 양피지',
    badge: 'Antique Parchment',
    desc: '홍차로 물들인 듯한 따스한 얼룩과 중세 필사본 양피지의 깊은 세월감',
    category: 'Vintage',
    weight: '200g/m²',
    fiber: '에이징 홍차 착색 클라우드 파티나',
    lighting: '소프트 엄버 앰비언트 + 앤틱 에지',
    bestFor: '고서적 테마 카드, 클래식 지도 아이콘, 빈티지 태그',
    toast: '빈티지 앤틱 양피지 질감이 적용되었습니다! 고서적의 아늑한 세월감이 더해집니다.'
  },
  felt: {
    id: 'felt',
    name: '포근한 펠트 모직지',
    badge: 'Soft Pressed Wool Felt',
    desc: '따뜻한 모직 섬유를 압착해 만든 도톰하고 부드러운 포근함',
    category: 'Specialty',
    weight: '320g/m²',
    fiber: '무방향 압착 양모 펠트 미세모',
    lighting: '무광 디퓨즈 산란광 + 소프트 베벨',
    bestFor: '따스한 카페 아이콘, 포근한 모달창, 티켓 배지',
    toast: '포근한 펠트 모직지 질감이 적용되었습니다! 포근하고 따뜻한 촉감이 느껴집니다.'
  },
  eco: {
    id: 'eco',
    name: '친환경 에코 플록지',
    badge: 'Eco Flecked Recycled',
    desc: '천연 목재 칩과 식물성 섬유 티끌이 박혀 있는 자연주의 재생 크라프트',
    category: 'Vintage',
    weight: '240g/m²',
    fiber: '재생 펄프 목재 칩 & 보태니컬 티끌',
    lighting: '내추럴 그레인 음영 + 크래프트 엣지',
    bestFor: '에코 패키징, 자연/식물 아이콘, 리사이클 태그',
    toast: '친환경 에코 플록지 질감이 적용되었습니다! 자연스러운 목재 티끌이 어우러집니다.'
  },
  washi: {
    id: 'washi',
    name: '오리가미 운용 화지',
    badge: 'Origami Cloud Washi',
    desc: '구름처럼 자유롭게 유영하는 운용사(雲龍絲) 장섬유가 매력적인 수제 화지',
    category: 'Specialty',
    weight: '80g/m²',
    fiber: '실크 운용사(雲龍絲) 클라우드 파이버',
    lighting: '섬세한 곡선 장섬유 음영',
    bestFor: '오리가미 접기 요소, 꽃/자연 아이콘, 섬세한 칩',
    toast: '오리가미 운용 화지 질감이 적용되었습니다! 구름 같은 실크 장섬유가 유영합니다.'
  },
  bookcloth: {
    id: 'bookcloth',
    name: '캔버스 북클로스지',
    badge: 'Bookcloth Canvas Board',
    desc: '클래식 양장본 서적의 커버를 연상시키는 탄탄한 캔버스 직물 감촉',
    category: 'Specialty',
    weight: '380g/m²',
    fiber: '굵은 패브릭 캔버스 북바인딩 조직',
    lighting: '강한 그리드 셰이딩 + 견고한 칼선 베벨',
    bestFor: '라이브러리 북마크, 하드커버 패널, 양장본 배지',
    toast: '캔버스 북클로스지 질감이 적용되었습니다! 묵직한 하드커버 서적의 텍스처입니다.'
  },
  tracing: {
    id: 'tracing',
    name: '프로스티드 트레이싱지',
    badge: 'Frosted Tracing Vellum',
    desc: '건축가의 도면 트레이싱지처럼 매트하고 서리 낀 듯 부드러운 반투명 미스트',
    category: 'Fine Art',
    weight: '90g/m²',
    fiber: '초미세 프로스티드 매트 파티클',
    lighting: '소프트 디퓨전 광채 + 미세 엣지',
    bestFor: '도면/설계 아이콘, 반투명 인풋박스, 보조 배지',
    toast: '프로스티드 트레이싱지 질감이 적용되었습니다! 은은한 반투명 도면 효과입니다.'
  },
  leatherette: {
    id: 'leatherette',
    name: '엠보스 레더렛지',
    badge: 'Saffiano Leatherette',
    desc: '사피아노 격자 무늬가 도톰하게 음각으로 새겨진 하드커버 패키징 질감',
    category: 'Specialty',
    weight: '340g/m²',
    fiber: '사피아노 크로스해치 엠보스 가죽결',
    lighting: '대각선 크로스해치 셰도우 + 럭셔리 베벨',
    bestFor: '지갑/쇼핑 아이콘, 패키징 박스, 프리미엄 버튼',
    toast: '엠보스 레더렛지 질감이 적용되었습니다! 도톰한 사피아노 엠보싱이 나타납니다.'
  },
  woodbark: {
    id: 'woodbark',
    name: '바크 내추럴 우드지',
    badge: 'Pressed Wood Bark',
    desc: '원목 나이테의 결이 살아 있는 내추럴 우드 펄프 수제지',
    category: 'Vintage',
    weight: '270g/m²',
    fiber: '천연 원목 나이테 결 & 우드 펄프',
    lighting: '종방향 수직 결 음영 + 러프 엣지',
    bestFor: '캠핑/아웃도어 아이콘, 원목 감성 카드, 네이처 태그',
    toast: '바크 내추럴 우드지 질감이 적용되었습니다! 원목 나이테의 자연스러운 결입니다.'
  },
  none: {
    id: 'none',
    name: '디지털 플랫 표면 (질감 없음)',
    badge: 'Digital Flat Vector',
    desc: '종이 질감과 엠보싱 요철이 제거된 매끄러운 2D 디지털 벡터 표면 (비교용)',
    category: 'Baseline',
    weight: '0g/m² (Flat Pixel)',
    fiber: '질감 없음 (순수 디지털 RGB 평면)',
    lighting: '광원 없음 (플랫 2D 평면 렌더링)',
    bestFor: '질감 전/후 비교용 베이스라인',
    toast: '디지털 플랫 모드로 전환되었습니다. (질감 및 엠보싱 OFF)'
  }
};

/**
 * Live Customization Playground
 */
function initPlayground() {
  const shadowSlider = document.getElementById('pg-shadow-depth');
  const radiusSlider = document.getElementById('pg-border-radius');
  const paletteSelector = document.getElementById('pg-palette-select');
  const playgroundBox = document.getElementById('playground-preview-box');
  const textureSelector = document.getElementById('pg-texture-select');
  const iconSelector = document.getElementById('pg-icon-select');
  const flatIconContainer = document.getElementById('pg-flat-icon-container');
  const texturedIconContainer = document.getElementById('pg-textured-icon-container');
  const texturedIconWrap = document.getElementById('pg-textured-icon-wrap');

  let currentPgTexture = 'cotton';
  let currentPgTheme = 'theme-cream';
  let currentPgIcon = 'home';

  // 1. Shadow depth slider
  if (shadowSlider && playgroundBox) {
    shadowSlider.addEventListener('input', (e) => {
      const val = e.target.value;
      playgroundBox.style.setProperty('--pc-shadow-md', `0 ${val * 2}px 0 rgba(74, 58, 42, 0.16), 0 ${val * 4}px ${val * 8}px rgba(74, 58, 42, 0.08)`);
      const valDisplay = document.getElementById('pg-shadow-val');
      if (valDisplay) valDisplay.textContent = `${val}px`;
    });
  }

  // 2. Corner radius slider
  if (radiusSlider && playgroundBox) {
    radiusSlider.addEventListener('input', (e) => {
      const val = e.target.value;
      playgroundBox.style.setProperty('--pc-radius-md', `${val}px`);
      const valDisplay = document.getElementById('pg-radius-val');
      if (valDisplay) valDisplay.textContent = `${val}px`;
    });
  }

  // 3. Central Texture Update Function (Applies to Canvas, Components, and Icons)
  function updatePlaygroundTexture(textureId, notify = true) {
    if (!window.PAPERCUT_TEXTURES[textureId]) {
      textureId = 'cotton';
    }
    currentPgTexture = textureId;
    const spec = window.PAPERCUT_TEXTURES[textureId];

    const allTextureClasses = Object.keys(window.PAPERCUT_TEXTURES).map(k => `pc-texture-${k}`);
    allTextureClasses.push('pc-texture-paper', 'pc-texture-kraft', 'pc-texture-none');

    // A. Update Canvas Box
    if (playgroundBox) {
      allTextureClasses.forEach(c => playgroundBox.classList.remove(c));
      playgroundBox.classList.add(`pc-texture-${textureId}`);
    }

    // B. Update all interactive components inside playground and component studio
    const texturedItems = document.querySelectorAll('.pg-textured-item, .pg-comp-target');
    texturedItems.forEach(el => {
      allTextureClasses.forEach(c => el.classList.remove(c));
      el.classList.add(`pc-texture-${textureId}`);
    });

    // C. Update Textured Icon Wrap
    if (texturedIconWrap) {
      allTextureClasses.forEach(c => texturedIconWrap.classList.remove(c));
      texturedIconWrap.classList.add(`pc-texture-${textureId}`);
      texturedIconWrap.style.opacity = (textureId === 'none') ? '0.85' : '1';
    }

    // D. Update Header Badges & Labels
    const activeBadge = document.getElementById('pg-active-texture-badge');
    if (activeBadge) {
      activeBadge.textContent = spec.name;
    }
    const compActiveBadge = document.getElementById('pg-comp-active-badge');
    if (compActiveBadge) {
      compActiveBadge.textContent = spec.name;
    }
    const iconTextureLabel = document.getElementById('pg-icon-texture-label');
    if (iconTextureLabel) {
      iconTextureLabel.textContent = spec.name;
    }

    // Sync component studio chips if present
    const compChips = document.querySelectorAll('.pg-comp-chip');
    compChips.forEach(c => {
      const isMatch = c.getAttribute('data-comp-texture') === textureId;
      c.classList.toggle('is-active', isMatch);
      c.classList.toggle('pc-btn-mint', isMatch);
    });

    // E. Update Dynamic Paper Spec Profile Card
    const specTitle = document.getElementById('pg-spec-title');
    if (specTitle) specTitle.textContent = spec.name;
    const specDesc = document.getElementById('pg-spec-desc');
    if (specDesc) specDesc.textContent = spec.desc;
    const specWeight = document.getElementById('pg-spec-weight');
    if (specWeight) specWeight.textContent = spec.weight;
    const specFiber = document.getElementById('pg-spec-fiber');
    if (specFiber) specFiber.textContent = spec.fiber;
    const specLighting = document.getElementById('pg-spec-lighting');
    if (specLighting) specLighting.textContent = spec.lighting;
    const specBestFor = document.getElementById('pg-spec-bestfor');
    if (specBestFor) specBestFor.textContent = spec.bestFor;
    const specCat = document.getElementById('pg-spec-category-badge');
    if (specCat) specCat.textContent = spec.category;

    // F. Sync Dropdown and Quick Chips
    if (textureSelector) {
      if (textureSelector.value !== textureId) {
        textureSelector.value = textureId;
      }
      const customDropdown = textureSelector.closest('.pc-select-wrapper')?.querySelector('.pc-dropdown-custom');
      if (customDropdown) {
        const triggerText = customDropdown.querySelector('.pc-trigger-text, .trigger-text');
        if (triggerText) {
          triggerText.textContent = spec.name;
        }
        customDropdown.querySelectorAll('.pc-dropdown-item').forEach(item => {
          item.classList.toggle('is-selected', item.dataset.value === textureId);
        });
      }
    }
    const chips = document.querySelectorAll('.pg-texture-chip');
    chips.forEach(chip => {
      chip.classList.toggle('is-active', chip.getAttribute('data-texture') === textureId);
    });

    // G. Notify user via toast
    if (notify) {
      showPaperToast(spec.toast, textureId === 'none' ? 'peach' : 'mint');
    }
  }

  // 4. Central Icon Update Function
  function updatePlaygroundIcons(iconId) {
    if (!iconId) iconId = 'home';
    currentPgIcon = iconId;

    let svg = '';
    if (typeof window.getPapercutIconSvg === 'function') {
      svg = window.getPapercutIconSvg(iconId);
    }
    if (!svg && window.PAPERCUT_ICONS) {
      const found = window.PAPERCUT_ICONS.find(i => i.id === iconId);
      if (found) svg = found.svg;
    }

    if (svg) {
      if (flatIconContainer) flatIconContainer.innerHTML = svg;
      if (texturedIconContainer) texturedIconContainer.innerHTML = svg;

      // Update badge icons too
      const badges = ['pg-badge-postage', 'pg-badge-pebble', 'pg-badge-hexagon', 'pg-badge-scallop'];
      badges.forEach(badgeId => {
        const badge = document.getElementById(badgeId);
        if (badge) {
          const iconSpan = badge.querySelector('.pc-inline-icon');
          if (iconSpan) {
            iconSpan.innerHTML = svg;
          }
        }
      });
    }
  }

  // 5. Texture Select Event
  if (textureSelector) {
    textureSelector.addEventListener('change', (e) => {
      updatePlaygroundTexture(e.target.value, true);
    });
  }

  // 6. Quick Texture Chips Click Event
  document.addEventListener('click', (e) => {
    const chip = e.target.closest('.pg-texture-chip');
    if (chip) {
      const tex = chip.getAttribute('data-texture');
      if (tex) {
        updatePlaygroundTexture(tex, true);
      }
    }
  });

  // 7. Icon Select Event
  if (iconSelector) {
    iconSelector.addEventListener('change', (e) => {
      updatePlaygroundIcons(e.target.value);
      const iconName = e.target.options[e.target.selectedIndex]?.text || e.target.value;
      showPaperToast(`아이콘이 [${iconName}]로 전환되어 실시간 질감이 합성되었습니다!`, 'mint');
    });
  }

  // 8. Palette Select Event
  if (paletteSelector && playgroundBox) {
    paletteSelector.addEventListener('change', (e) => {
      const theme = e.target.value;
      currentPgTheme = theme;

      // Remove previous themes
      const themes = ['theme-cream', 'theme-peach', 'theme-lavender', 'theme-buttercup', 'theme-sky', 'theme-cherry', 'theme-matcha', 'theme-cotton-candy', 'theme-lemon', 'theme-twilight', 'theme-apricot', 'theme-eucalyptus', 'theme-berry', 'theme-teddy'];
      themes.forEach(t => playgroundBox.classList.remove(t));
      playgroundBox.classList.add(theme);

      // Transform preview buttons inside playground
      const previewBtns = playgroundBox.querySelectorAll('.pc-btn');
      if (previewBtns.length >= 2) {
        previewBtns[0].className = `pc-btn ${theme === 'theme-peach' ? 'pc-btn-peach' : theme === 'theme-lavender' ? 'pc-btn-lavender' : theme === 'theme-cherry' ? 'pc-btn-rose' : 'pc-btn-mint'} pc-texture-${currentPgTexture} pg-textured-item`;
        previewBtns[1].className = `pc-btn ${theme === 'theme-peach' ? 'pc-btn-rose' : theme === 'theme-lavender' ? 'pc-btn-sky' : 'pc-btn-peach'} pc-texture-${currentPgTexture} pg-textured-item`;
      }

      showPaperToast(`파스텔 테마 색지가 [${e.target.options[e.target.selectedIndex].text}]로 적용되었습니다!`, 'mint');
    });
  }

  // 9. Initial setup
  setTimeout(() => {
    updatePlaygroundIcons('home');
    updatePlaygroundTexture('cotton', false);
  }, 100);

  // Icon Gallery click to copy SVG code
  document.addEventListener('click', (e) => {
    const iconCard = e.target.closest('.pc-icon-card');
    if (!iconCard) return;

    const svg = iconCard.querySelector('svg');
    const name = iconCard.querySelector('.pc-icon-name-ko')?.textContent || '아이콘';
    if (svg) {
      navigator.clipboard.writeText(svg.outerHTML).then(() => {
        showPaperToast(`[${name}] 3D 종이 아이콘 SVG가 복사되었습니다!`, 'mint');
      }).catch(() => {
        showPaperToast(`[${name}] 아이콘이 선택되었습니다.`, 'peach');
      });
    }
  });
}

/**
  * Subtle Paper Rustle Tactile Sound Simulation (Web Audio API Multi-Stock Physical Synthesis)
  */
 function initPaperSoundEffect() {
   let audioCtx = null;
   const heroSoundToggle = document.getElementById('toggle-paper-sound');
   const headerSoundBtn = document.getElementById('header-paper-sound-btn');
   const typeSelect = document.getElementById('header-paper-sound-type');
   const sidebarSoundToggle = document.getElementById('pc-sidebar-sound-toggle');
   const sidebarSoundIcon = document.getElementById('pc-sidebar-sound-icon');

   let soundEnabled = localStorage.getItem('pc_paper_sound') === 'true';
   let currentSoundType = localStorage.getItem('pc_screen_paper_texture') || localStorage.getItem('pc_paper_sound_type') || 'cotton';

   const soundProfiles = {
     cotton: {
       label: '300g 수제 코튼지',
       tag: '300g',
       desc: '포근하고 묵직한 코튼 펄프의 부드러운 서걱임',
       noiseType: 'pink',
       freq: 1100,
       Q: 0.85,
       dur: 0.095,
       gain: 0.32,
       lowpass: 3400
     },
     hanji: {
       label: '닥나무 전통 한지',
       tag: '한지',
       desc: '닥나무 섬유결이 스치는 맑고 찰랑이는 사각거림',
       noiseType: 'white',
       freq: 3600,
       Q: 2.2,
       dur: 0.080,
       gain: 0.34,
       highpass: 1800,
       peaking: { freq: 4800, gain: 4 },
       amFreq: 35
     },
     kraft: {
       label: '350g 크라프트 보드',
       tag: '350g',
       desc: '묵직하고 거친 하드보드의 단단한 둔탁음과 마찰',
       noiseType: 'brown',
       freq: 620,
       Q: 2.4,
       dur: 0.065,
       gain: 0.40,
       bodyFreq: 140, // 묵직한 하드보드 종이판 공명 (140Hz Damped Sine)
       bodyGain: 0.24
     },
     vellum: {
       label: '반투명 실크 벨러지',
       tag: '벨럼',
       desc: '매끄럽고 바삭바삭하게 찰랑이는 고주파 파사삭음',
       noiseType: 'white',
       freq: 5800,
       Q: 1.6,
       dur: 0.085,
       gain: 0.28,
       highpass: 2800,
       crackles: true,
       crackleCount: 2
     },
     origami: {
       label: '오리가미 화지',
       tag: '색종이',
       desc: '반듯하게 접힐 때 나는 경쾌하고 명쾌한 착착 스냅음',
       noiseType: 'pink',
       freq: 2300,
       Q: 1.4,
       dur: 0.060,
       gain: 0.32,
       snapTone: 1500, // 날카로운 종이 접힘 스냅 (1500Hz 숏 톤)
       snapGain: 0.22
     },
     cardboard: {
       label: '골판지 카톤',
       tag: '골판지',
       desc: '요철 골을 스칠 때 나는 자르륵-드르륵 입체적 마찰음',
       noiseType: 'brown',
       freq: 480,
       Q: 1.8,
       dur: 0.115,
       gain: 0.38,
       fluteModulation: 52, // 52Hz 사각파 게이트 변조 (골판지 골 넘나듦)
       bodyFreq: 180,
       bodyGain: 0.18
     },
     newsprint: {
       label: '빈티지 신문지',
       tag: '신문지',
       desc: '가볍고 건조한 얇은 종이가 파스락거리며 펄럭이는 소리',
       noiseType: 'pink',
       freq: 1900,
       Q: 1.1,
       dur: 0.130,
       gain: 0.30,
       flutterSteps: 3
     },
     parchment: {
       label: '고문서 양피지',
       tag: '양피지',
       desc: '바싹 마른 고문서 특유의 건조하고 바삭한 크리스피 크랙클',
       noiseType: 'white',
       freq: 3800,
       Q: 2.6,
       dur: 0.088,
       gain: 0.34,
       crackles: true,
       crackleCount: 4
     }
   };

   if (typeSelect) {
     typeSelect.value = currentSoundType;
   }

   // 초기 화면 종이 질감 동기화 (색상 및 모양 100% 보존, 펄프 셰이더만 적용)
   applyScreenPaperTexture(currentSoundType, false);

   function syncSoundButtons() {
     const labelText = soundEnabled ? '종이 소리: ON' : '종이 소리: OFF';
     const bgFill = soundEnabled ? '#FEE396' : '#FAF6ED';
     const textColor = soundEnabled ? '#66460D' : '#3D352E';

     // 1. Hero Sound Button
     if (heroSoundToggle) {
       heroSoundToggle.classList.toggle('is-pressed', soundEnabled);
       const label = heroSoundToggle.querySelector('.label') || heroSoundToggle.querySelector('text');
       if (label) label.textContent = labelText;
       const path = heroSoundToggle.querySelector('rect[data-layer="base"]');
       if (path) path.setAttribute('fill', bgFill);
     }

     // 2. Header Sound Button
     if (headerSoundBtn) {
       headerSoundBtn.classList.toggle('is-pressed', soundEnabled);
       headerSoundBtn.title = soundEnabled ? '종이 바스락 효과음 끄기' : '종이 바스락 효과음 켜기';
       const label = headerSoundBtn.querySelector('.label') || headerSoundBtn.querySelector('text');
       if (label) label.textContent = labelText;
       const path = headerSoundBtn.querySelector('path[fill]');
       if (path) path.setAttribute('fill', soundEnabled ? '#FEE396' : '#FAF6ED');
       if (label) label.setAttribute('fill', textColor);
     }

     // 3. Sidebar Sound Widget Toggle & Status
     const sbToggle = document.getElementById('pc-sidebar-sound-toggle');
     const sbIcon = document.getElementById('pc-sidebar-sound-icon');
     if (sbToggle) {
       sbToggle.classList.toggle('is-active', soundEnabled);
       sbToggle.setAttribute('aria-pressed', soundEnabled ? 'true' : 'false');
       sbToggle.title = soundEnabled ? '종이 바스락 효과음 끄기' : '종이 바스락 효과음 켜기';
       const statusText = sbToggle.querySelector('.pc-sound-toggle-text');
       if (statusText) statusText.textContent = soundEnabled ? 'ON' : 'OFF';
     }
     if (sbIcon) {
       sbIcon.className = 'pc-sidebar-sound-icon pc-inline-icon is-xs';
       sbIcon.setAttribute('data-icon', soundEnabled ? 'volume' : 'mute');
       sbIcon.style.color = soundEnabled ? '#1E5C41' : '#8C7C6D';
       if (typeof window.hydratePapercutIcons === 'function') {
         window.hydratePapercutIcons(sbIcon.parentElement || sbIcon);
       }
     }

     // 4. Sidebar Paper Item Active Highlighting
     const paperBtns = document.querySelectorAll('.pc-sidebar-paper-btn');
     paperBtns.forEach(btn => {
       const paperKey = btn.getAttribute('data-paper');
       const isCurrent = (paperKey === currentSoundType);
       btn.classList.toggle('is-active', isCurrent);
       btn.setAttribute('aria-checked', isCurrent ? 'true' : 'false');
     });

     // 5. Content Studio Cards Active Highlighting & Master Deck Sync
     const studioCards = document.querySelectorAll('.pc-sound-card');
     studioCards.forEach(card => {
       const pKey = card.getAttribute('data-paper');
       const isSelected = (pKey === currentSoundType);
       card.classList.toggle('is-active', isSelected);
       if (isSelected) {
         card.style.borderColor = '#8FD1B3';
         card.style.background = '#F6FBF8';
       } else {
         card.style.borderColor = '#E6DBC9';
         card.style.background = '#FFFDF9';
       }
     });

     const studioPaperName = document.getElementById('studio-current-paper-name');
     if (studioPaperName) {
       const profile = soundProfiles[currentSoundType] || soundProfiles.cotton;
       studioPaperName.textContent = `${profile.label} 활성`;
       studioPaperName.style.color = soundEnabled ? '#1E5C41' : '#8C7C6D';
     }

     const studioToggle = document.getElementById('studio-sound-master-toggle');
     if (studioToggle) {
       const icon = studioToggle.querySelector('.pc-inline-icon') || studioToggle.querySelector('.fi');
       const text = document.getElementById('studio-master-text');
       if (soundEnabled) {
         studioToggle.style.background = '#FEE396';
         studioToggle.style.borderColor = '#E2BC55';
         studioToggle.style.color = '#66460D';
         if (icon) {
           icon.className = 'pc-inline-icon is-xs';
           icon.setAttribute('data-icon', 'volume');
         }
         if (text) text.textContent = '효과음: ON';
       } else {
         studioToggle.style.background = '#FAF6ED';
         studioToggle.style.borderColor = '#DFD3BF';
         studioToggle.style.color = '#7A6F64';
         if (icon) {
           icon.className = 'pc-inline-icon is-xs';
           icon.setAttribute('data-icon', 'mute');
         }
         if (text) text.textContent = '효과음: OFF';
       }
       if (typeof window.hydratePapercutIcons === 'function') {
         window.hydratePapercutIcons(studioToggle);
       }
     }
   }

   /**
    * High-fidelity Web Audio API Multi-Stock Paper Acoustic Synthesizer
    */
   function playPaperSound(type = currentSoundType) {
     if (!soundEnabled) return;
     try {
       if (!audioCtx) {
         const AudioContextClass = window.AudioContext || window.webkitAudioContext;
         if (!AudioContextClass) return;
         audioCtx = new AudioContextClass();
       }
       if (audioCtx.state === 'suspended') {
         audioCtx.resume();
       }

       const p = soundProfiles[type] || soundProfiles.cotton;
       const sampleRate = audioCtx.sampleRate || 44100;
       const bufferSize = Math.max(256, Math.floor(sampleRate * p.dur));
       const buffer = audioCtx.createBuffer(1, bufferSize, sampleRate);
       const data = buffer.getChannelData(0);

       // Physical Noise synthesis with stock-specific characteristics
       let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0; // Pink noise filters
       let lastOut = 0.0; // Brown noise accumulator

       for (let i = 0; i < bufferSize; i++) {
         const progress = i / bufferSize;
         let envelope = Math.exp(-progress * 3.5);

         // Multi-flutter for newsprint
         if (p.flutterSteps) {
           envelope *= (1 + 0.35 * Math.sin(progress * Math.PI * (p.flutterSteps * 2)));
         }

         // Flute modulation for corrugated cardboard
         if (p.fluteModulation) {
           const flute = Math.sin(progress * p.dur * 2 * Math.PI * p.fluteModulation);
           envelope *= (flute > 0 ? 1.0 : 0.45);
         }

         // AM modulation for mulberry hanji fibers
         if (p.amFreq) {
           const am = 1 + 0.3 * Math.sin(progress * p.dur * 2 * Math.PI * p.amFreq);
           envelope *= am;
         }

         const white = Math.random() * 2 - 1;
         let sample = white;

         if (p.noiseType === 'pink') {
           // Paul Kellet's refined pink noise filter
           b0 = 0.99886 * b0 + white * 0.0555179;
           b1 = 0.99332 * b1 + white * 0.0750759;
           b2 = 0.96900 * b2 + white * 0.1538520;
           b3 = 0.86650 * b3 + white * 0.3104856;
           b4 = 0.55000 * b4 + white * 0.5329522;
           b5 = -0.7616 * b5 - white * 0.0168980;
           sample = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.11;
           b6 = white * 0.115926;
         } else if (p.noiseType === 'brown') {
           // Brownian motion integration
           lastOut = (lastOut + (0.02 * white)) / 1.02;
           sample = lastOut * 3.5;
         }

         // Micro crackles / fiber snap burst
         if (p.crackles) {
           const numCrackles = p.crackleCount || 2;
           for (let c = 1; c <= numCrackles; c++) {
             const cracklePos = Math.floor(bufferSize * (c / (numCrackles + 1)));
             if (Math.abs(i - cracklePos) < 4) {
               sample += (Math.random() > 0.5 ? 1 : -1) * 0.65;
             }
           }
         }

         data[i] = sample * envelope;
       }

       const now = audioCtx.currentTime;
       const noiseSource = audioCtx.createBufferSource();
       noiseSource.buffer = buffer;

       // Primary Resonant Bandpass Filter
       const bpFilter = audioCtx.createBiquadFilter();
       bpFilter.type = 'bandpass';
       bpFilter.frequency.setValueAtTime(p.freq, now);
       bpFilter.Q.setValueAtTime(p.Q, now);

       let lastNode = noiseSource;
       lastNode.connect(bpFilter);
       lastNode = bpFilter;

       // Optional Highpass / Lowpass contouring
       if (p.highpass) {
         const hp = audioCtx.createBiquadFilter();
         hp.type = 'highpass';
         hp.frequency.setValueAtTime(p.highpass, now);
         lastNode.connect(hp);
         lastNode = hp;
       }
       if (p.lowpass) {
         const lp = audioCtx.createBiquadFilter();
         lp.type = 'lowpass';
         lp.frequency.setValueAtTime(p.lowpass, now);
         lastNode.connect(lp);
         lastNode = lp;
       }
       if (p.peaking) {
         const peak = audioCtx.createBiquadFilter();
         peak.type = 'peaking';
         peak.frequency.setValueAtTime(p.peaking.freq, now);
         peak.gain.setValueAtTime(p.peaking.gain, now);
         lastNode.connect(peak);
         lastNode = peak;
       }

       // Main Audio Output Gain
       const masterGain = audioCtx.createGain();
       masterGain.gain.setValueAtTime(p.gain, now);
       masterGain.gain.exponentialRampToValueAtTime(0.0001, now + p.dur);
       lastNode.connect(masterGain);
       masterGain.connect(audioCtx.destination);

       noiseSource.start(now);

       // Physical Board Thud Resonance (Cardboard / Kraft heavy body sine burst)
       if (p.bodyFreq) {
         const osc = audioCtx.createOscillator();
         const oscGain = audioCtx.createGain();
         osc.type = 'sine';
         osc.frequency.setValueAtTime(p.bodyFreq, now);
         osc.frequency.exponentialRampToValueAtTime(p.bodyFreq * 0.6, now + 0.025);

         oscGain.gain.setValueAtTime(p.bodyGain || 0.2, now);
         oscGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.025);

         osc.connect(oscGain);
         oscGain.connect(audioCtx.destination);
         osc.start(now);
         osc.stop(now + 0.03);
       }

       // Sharp Paper Crease Snap (Origami sharp fold impulse)
       if (p.snapTone) {
         const snapOsc = audioCtx.createOscillator();
         const snapGain = audioCtx.createGain();
         snapOsc.type = 'triangle';
         snapOsc.frequency.setValueAtTime(p.snapTone, now);
         snapGain.gain.setValueAtTime(p.snapGain || 0.2, now);
         snapGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.015);

         snapOsc.connect(snapGain);
         snapGain.connect(audioCtx.destination);
         snapOsc.start(now);
         snapOsc.stop(now + 0.018);
       }

     } catch (e) {
       // Audio synthesis fallback for restricted browser contexts
     }
   }

   function toggleSound() {
     soundEnabled = !soundEnabled;
     localStorage.setItem('pc_paper_sound', soundEnabled ? 'true' : 'false');
     syncSoundButtons();
     if (soundEnabled) {
       playPaperSound(currentSoundType);
       const profileName = (soundProfiles[currentSoundType] && soundProfiles[currentSoundType].label) || currentSoundType;
       showPaperToast(`종이 바스락 효과음이 켜졌습니다. [${profileName}]`, 'buttercup');
     } else {
       showPaperToast('종이 효과음이 꺼졌습니다.', 'peach');
     }
   }

   function selectPaper(paperType) {
     if (!soundProfiles[paperType]) return;
     currentSoundType = paperType;
     localStorage.setItem('pc_paper_sound_type', currentSoundType);
     applyScreenPaperTexture(currentSoundType, false);

     // 종이 선택 시 사운드가 꺼져있었다면 즉시 켜기
     if (!soundEnabled) {
       soundEnabled = true;
       localStorage.setItem('pc_paper_sound', 'true');
     }
     syncSoundButtons();
     playPaperSound(currentSoundType);

     const profileName = soundProfiles[currentSoundType].label;
     showPaperToast(`종이 질감·소리가 [${profileName}]로 설정되었습니다!`, 'mint');
   }

   if (heroSoundToggle) {
     heroSoundToggle.addEventListener('click', toggleSound);
   }
   if (headerSoundBtn) {
     headerSoundBtn.addEventListener('click', toggleSound);
   }

   // Sidebar Paper Buttons Event Listener
   document.addEventListener('click', (e) => {
     const paperBtn = e.target.closest('.pc-sidebar-paper-btn');
     if (paperBtn) {
       const paper = paperBtn.getAttribute('data-paper');
       if (paper) {
         selectPaper(paper);
       }
       return;
     }

     const sbToggle = e.target.closest('#pc-sidebar-sound-toggle');
     if (sbToggle) {
       toggleSound();
       return;
     }

     // Content Studio: Master Sound Toggle
     const studioToggle = e.target.closest('#studio-sound-master-toggle');
     if (studioToggle) {
       toggleSound();
       return;
     }

     // Content Studio: Play Sound Button
     const playBtn = e.target.closest('.pc-btn-play-sound');
     if (playBtn) {
       const paper = playBtn.getAttribute('data-paper');
       if (paper) {
         if (!soundEnabled) {
           soundEnabled = true;
           localStorage.setItem('pc_paper_sound', 'true');
           syncSoundButtons();
         }
         playPaperSound(paper);
       }
       return;
     }

     // Content Studio: Apply Paper Button
     const applyBtn = e.target.closest('.pc-btn-apply-paper');
     if (applyBtn) {
       const paper = applyBtn.getAttribute('data-paper');
       if (paper) {
         selectPaper(paper);
       }
       return;
     }

     // Content Studio: Scratch & Touch Pad Click
     const scratchPad = e.target.closest('.pc-sound-scratch-pad');
     if (scratchPad) {
       const paper = scratchPad.getAttribute('data-paper');
       if (paper) {
         if (!soundEnabled) {
           soundEnabled = true;
           localStorage.setItem('pc_paper_sound', 'true');
           syncSoundButtons();
         }
         playPaperSound(paper);
       }
       return;
     }
   });

   // Scratch & Rub Interaction on Touch Pads (Mouse Drag)
   let lastScratchTime = 0;
   document.addEventListener('mousemove', (e) => {
     if (!soundEnabled || e.buttons !== 1) return;
     const pad = e.target.closest('.pc-sound-scratch-pad');
     if (pad) {
       const now = Date.now();
       if (now - lastScratchTime > 110) {
         lastScratchTime = now;
         const paper = pad.getAttribute('data-paper');
         if (paper) playPaperSound(paper);
       }
     }
   });

   if (typeSelect) {
     typeSelect.addEventListener('change', (e) => {
       selectPaper(e.target.value);
     });
   }

   // Initial sync
   syncSoundButtons();

   // Tactile sound event listener for all paper interactive elements
   document.addEventListener('click', (e) => {
     if (!soundEnabled) return;
     if (e.target.closest('#header-paper-sound-btn, #toggle-paper-sound, #header-paper-sound-type, #pc-header-paper-dropdown, #pc-sidebar-sound-toggle, .pc-sidebar-paper-btn, .pc-btn-play-sound, .pc-btn-apply-paper, .pc-sound-scratch-pad, #studio-sound-master-toggle')) return;
     if (e.target.closest('.pc-btn, .pc-svg-kirigami-btn, .pc-sidebar-item, .pc-header-nav-link, .pc-checkbox-label, .pc-dropdown-trigger, .pc-dropdown-item, .pc-filter-btn, .pc-ui-toggle, .pc-anim-speed-btn, button, a[href^="#"]')) {
       playPaperSound(currentSoundType);
     }
   });

   window.playPaperSound = playPaperSound;
   window.setPaperSoundType = (t) => {
     if (soundProfiles[t]) {
       selectPaper(t);
     }
   };
   window.getPaperSoundProfiles = () => soundProfiles;
 }

 /**
  * Global Screen Paper Texture Controller (Cotton, Hanji, Kraft, Vellum, Origami, Cardboard, Newsprint, Parchment)
  * Shifts tactile pulp fiber shaders across the entire viewport while preserving 100% colors, shapes & shadows.
  */
 function applyScreenPaperTexture(paperType, notify = false) {
   const validTypes = ['cotton', 'hanji', 'kraft', 'vellum', 'origami', 'cardboard', 'newsprint', 'parchment', 'soft', 'flat'];
   const target = validTypes.includes(paperType) ? paperType : 'cotton';

   const typeLabels = {
     cotton: '300g 수제 코튼지',
     hanji: '닥나무 전통 한지',
     kraft: '350g 크라프트 보드',
     vellum: '반투명 실크 벨러지',
     origami: '오리가미 화지',
     cardboard: '골판지 카톤',
     newsprint: '빈티지 신문지',
     parchment: '고문서 양피지',
     soft: '소프트 파스텔지',
     flat: '디지털 플랫'
   };

   // 1. Remove previous texture classes and apply target
   validTypes.forEach(t => document.body.classList.remove('texture-' + t));
   document.body.classList.add('texture-' + target);

   // 2. Persist in storage
   localStorage.setItem('pc_screen_paper_texture', target);
   localStorage.setItem('pc_paper_sound_type', target);

   // 3. Sync header dropdown if available
   const typeSelect = document.getElementById('header-paper-sound-type');
   if (typeSelect && typeSelect.value !== target) {
     if (typeSelect.querySelector(`option[value="${target}"]`)) {
       typeSelect.value = target;
     }
   }
   if (typeof syncHeaderPaperDropdown === 'function') {
     syncHeaderPaperDropdown(target);
   }

   // 4. Sync sidebar paper button states
   const paperBtns = document.querySelectorAll('.pc-sidebar-paper-btn');
   paperBtns.forEach(btn => {
     const isCurrent = (btn.getAttribute('data-paper') === target);
     btn.classList.toggle('is-active', isCurrent);
     btn.setAttribute('aria-checked', isCurrent ? 'true' : 'false');
   });

   // 5. Optional toast notification
   if (notify && typeof showPaperToast === 'function') {
     const label = typeLabels[target] || target;
     showPaperToast(`화면 종이 느낌이 [${label}]로 변경되었습니다. (색상·모양 유지)`, 'mint');
   }
}
window.applyScreenPaperTexture = applyScreenPaperTexture;

/**
 * Paper Texture Mode Switcher (Cotton, Hanji, Soft, Flat)
 */
function initTextureModes() {
  const textureButtons = document.querySelectorAll('[data-texture-mode]');
  if (!textureButtons.length) return;

  const modeNames = {
    'texture-soft': '소프트 파스텔지 (기본)',
    'texture-cotton': '300g 수제 코튼지 (엠보싱 극대화)',
    'texture-hanji': '닥나무 한지결 (은은한 결)',
    'texture-flat': '일반 디지털 플랫 UI (질감/그림자 OFF)'
  };

  const modeToCompTexture = {
    'texture-soft': 'cotton',
    'texture-cotton': 'cotton',
    'texture-hanji': 'hanji',
    'texture-flat': 'none'
  };

  textureButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const mode = btn.getAttribute('data-texture-mode');
      
      // Update body classes & global screen texture
      applyScreenPaperTexture(mode.replace('texture-', ''), false);

      // Update button active state
      textureButtons.forEach(b => b.classList.remove('is-active', 'pc-btn-mint'));
      btn.classList.add('is-active', 'pc-btn-mint');

      // Seamlessly coordinate component texture
      const compTextureKey = modeToCompTexture[mode] || 'cotton';
      if (typeof window.applyComponentPaperTexture === 'function') {
        window.applyComponentPaperTexture(compTextureKey, false);
      }

      const toastIcon = mode === 'texture-flat' ? 'laptop' : (mode === 'texture-hanji' ? 'leaf' : 'sprout');
      showPaperToast(`종이 질감이 [${modeNames[mode] || mode}] 모드로 변경되었습니다!`, mode === 'texture-flat' ? 'peach' : 'mint', toastIcon);
    });
  });
}

/**
 * Interactive Controls for Matte Cream 3D Art Surface Texture Showcase
 */
function initMatteTextureShowcase() {
  const pulpToggle = document.getElementById('toggle-matte-pulp');
  const lightToggle = document.getElementById('toggle-matte-light');
  const bevelToggle = document.getElementById('toggle-matte-bevel');
  const canvas = document.getElementById('matte-sample-canvas');
  const shader = document.getElementById('matte-pulp-shader-layer');
  const ambient = document.getElementById('matte-ambient-layer');

  if (pulpToggle && shader) {
    pulpToggle.addEventListener('change', (e) => {
      shader.style.opacity = e.target.checked ? '0.45' : '0';
      showPaperToast(e.target.checked ? '3D 미세 펄프 섬유(Pulp Fiber) 셰이더가 활성화되었습니다.' : '펄프 섬유 셰이더가 꺼졌습니다.', 'mint');
    });
  }

  if (lightToggle && ambient) {
    lightToggle.addEventListener('change', (e) => {
      ambient.style.opacity = e.target.checked ? '1' : '0';
      showPaperToast(e.target.checked ? '매트 크림 표면 조명(Matte Diffuse Lighting)이 활성화되었습니다.' : '표면 조명이 꺼졌습니다.', 'peach');
    });
  }

  if (bevelToggle && canvas) {
    bevelToggle.addEventListener('change', (e) => {
      canvas.classList.toggle('pc-knife-bevel-active', e.target.checked);
      showPaperToast(e.target.checked ? '칼선 엣지 1px 베벨 하이라이트(Knife-cut Bevel)가 적용되었습니다.' : '칼선 베벨이 해제되었습니다.', 'buttercup');
    });
  }

  // Paper Weight / Grade Selection Buttons
  const gradeBtns = document.querySelectorAll('[data-matte-grade]');
  gradeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      gradeBtns.forEach(b => b.classList.remove('pc-btn-mint', 'is-active'));
      btn.classList.add('pc-btn-mint', 'is-active');

      const grade = btn.getAttribute('data-matte-grade');
      if (!canvas || !shader) return;

      if (grade === 'cotton') {
        canvas.style.backgroundColor = '#FAF6ED';
        shader.style.opacity = '0.5';
        showPaperToast('300g 수제 코튼지 (Heavyweight Cold-Press Cotton) 선택됨', 'mint');
      } else if (grade === 'kraft') {
        canvas.style.backgroundColor = '#F0E5D3';
        shader.style.opacity = '0.6';
        showPaperToast('350g 매트 크림 보드지 (Warm Matte Cardstock) 선택됨', 'peach');
      } else if (grade === 'hanji') {
        canvas.style.backgroundColor = '#FAF7F0';
        shader.style.opacity = '0.35';
        showPaperToast('닥나무 한지결 (Mulberry Fiber Hanji) 선택됨', 'sage');
      } else if (grade === 'vellum') {
        canvas.style.backgroundColor = '#FFFDF8';
        shader.style.opacity = '0.2';
        showPaperToast('실크벨러지 (Smooth Silk Vellum) 선택됨', 'sky');
      }
    });
  });

  // Universal UI Texture Toggle
  const universalToggle = document.getElementById('toggle-universal-texture');
  if (universalToggle) {
    let isUniversalActive = true;
    universalToggle.addEventListener('click', () => {
      isUniversalActive = !isUniversalActive;
      const samples = document.querySelectorAll('.pc-ui-textured-sample, .ui-textured-sample');
      samples.forEach(el => {
        el.classList.toggle('pc-texture-paper', isUniversalActive);
      });
      if (isUniversalActive) {
        universalToggle.classList.add('pc-btn-mint');
        universalToggle.classList.remove('pc-btn-peach');
        universalToggle.innerHTML = '<span class="pc-inline-icon is-sm" data-icon="sprout"></span> <span>전체 UI 질감: ON (코튼 펄프)</span>';
        if (typeof window.hydratePapercutIcons === 'function') {
          window.hydratePapercutIcons(universalToggle);
        }
        showPaperToast('모든 UI 컴포넌트에 300g 수제 코튼 펄프 질감이 적용되었습니다!', 'mint', 'sprout');
      } else {
        universalToggle.classList.remove('pc-btn-mint');
        universalToggle.classList.add('pc-btn-peach');
        universalToggle.innerHTML = '<span class="pc-inline-icon is-sm" data-icon="laptop"></span> <span>전체 UI 질감: OFF (플랫 표면)</span>';
        if (typeof window.hydratePapercutIcons === 'function') {
          window.hydratePapercutIcons(universalToggle);
        }
        showPaperToast('모든 UI 컴포넌트의 질감이 플랫 매끄러운 모드로 전환되었습니다.', 'peach', 'laptop');
      }
    });
  }
}

/**
 * =========================================================================
 * 12. COMPONENT PAPER TEXTURE STUDIO (컴포넌트 종이 질감 실시간 스튜디오)
 * =========================================================================
 */
function initComponentTextureStudio() {
  const compChips = document.querySelectorAll('.pg-comp-chip');
  const activeBadge = document.getElementById('pg-comp-active-badge');

  const compTextureNames = {
    cotton: '300g 수제 코튼지',
    cream: '350g 매트 크림보드',
    hanji: '닥나무 한지',
    vellum: '실크벨러지',
    watercolor: '300g 아르쉬 수채화지',
    linen: '프렌치 린넨 패브릭지',
    shimmer: '펄 메탈릭 쉬머지',
    tracing: '프로스티드 트레이싱지',
    parchment: '빈티지 앤틱 양피지',
    eco: '친환경 에코 플록지',
    woodbark: '바크 내추럴 우드지',
    felt: '포근한 펠트 모직지',
    washi: '오리가미 운용 화지',
    bookcloth: '캔버스 북클로스지',
    leatherette: '엠보스 레더렛지',
    none: '디지털 플랫 표면 (질감 없음)',
    kraft: '350g 크라프트 보드',
    paper: '300g 코튼지'
  };

  const allCompTextureClasses = [
    'pc-texture-cotton', 'pc-texture-cream', 'pc-texture-hanji', 'pc-texture-vellum',
    'pc-texture-watercolor', 'pc-texture-linen', 'pc-texture-shimmer', 'pc-texture-tracing',
    'pc-texture-parchment', 'pc-texture-eco', 'pc-texture-woodbark', 'pc-texture-felt',
    'pc-texture-washi', 'pc-texture-bookcloth', 'pc-texture-leatherette', 'pc-texture-none',
    'pc-texture-kraft', 'pc-texture-paper'
  ];

  function applyComponentTexture(textureKey, notify = true) {
    const textureName = compTextureNames[textureKey] || textureKey;
    const targets = document.querySelectorAll('.pg-comp-target, .pg-textured-item');

    targets.forEach(el => {
      allCompTextureClasses.forEach(cls => el.classList.remove(cls));
      if (textureKey !== 'none') {
        el.classList.add(`pc-texture-${textureKey}`);
      } else {
        el.classList.add('pc-texture-none');
      }
    });

    if (activeBadge) {
      activeBadge.textContent = textureName;
    }

    compChips.forEach(c => {
      const isMatch = c.getAttribute('data-comp-texture') === textureKey;
      c.classList.toggle('is-active', isMatch);
      c.classList.toggle('pc-btn-mint', isMatch);
    });

    if (notify) {
      const toastIcon = textureKey === 'none' ? 'laptop' : 'sprout';
      showPaperToast(`컴포넌트에 [${textureName}] 표면 질감이 적용되었습니다!`, textureKey === 'none' ? 'peach' : 'mint', toastIcon);
    }
  }

  // Expose globally for seamless coordination with canvas texture modes & playground
  window.applyComponentPaperTexture = applyComponentTexture;

  compChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const textureKey = chip.getAttribute('data-comp-texture');
      applyComponentTexture(textureKey, true);
    });
  });
}

/**
 * =========================================================================
 * 13. INTERACTIVE ICON OUTLINE & DYNAMIC SCALE STUDIO
 * (실시간 아이콘 외곽선/두께/색상/모드 및 크기 스케일 스튜디오)
 * =========================================================================
 */
function initIconOutlineStudio() {
  if (!document.getElementById('studio-icon-select')) return;
  const studioState = {
    iconId: 'coffee',
    outlineEnabled: true,
    mode: 'layer', // 'layer' | 'double' | 'sticker'
    strokeWidth: 2.5,
    strokeColor: '#3D352E',
    scaleBehavior: 'fixed', // 'fixed' | 'proportional'
    activeSize: 72,
    stageBg: 'cream'
  };

  const iconSelect = document.getElementById('studio-icon-select');
  const outlineToggle = document.getElementById('studio-outline-toggle');
  const modeStickerBtn = document.getElementById('studio-mode-sticker');
  const modeLayerBtn = document.getElementById('studio-mode-layer');
  const modeDoubleBtn = document.getElementById('studio-mode-double');
  const modeDesc = document.getElementById('studio-mode-desc');

  const strokeSlider = document.getElementById('studio-stroke-slider');
  const strokeVal = document.getElementById('studio-stroke-val');
  const thickChips = document.querySelectorAll('.studio-thick-chip');

  const colorPicker = document.getElementById('studio-color-picker');
  const colorCode = document.getElementById('studio-color-code');
  const swatches = document.querySelectorAll('.pc-stroke-swatch');

  const scaleFixedBtn = document.getElementById('studio-scale-fixed');
  const scalePropBtn = document.getElementById('studio-scale-prop');

  const sizeSlider = document.getElementById('studio-size-slider');
  const sizeDisplay = document.getElementById('studio-size-display');
  const mainStage = document.getElementById('studio-main-stage');
  const bgChips = document.querySelectorAll('.studio-bg-chip');
  const quickIcons = document.querySelectorAll('.studio-quick-icon');

  const copySvgBtn = document.getElementById('btn-copy-outline-svg');
  const copyCssBtn = document.getElementById('btn-copy-outline-css');

  function getModeTitle(m) {
    if (m === 'layer') return '개별 종이 외곽선 (모든 종이 모양)';
    if (m === 'double') return '더블 외곽선 (개별 종이 + 다이컷)';
    return '전체 다이컷 외곽선 (스티커)';
  }

  function applyStylesToTarget(target, size) {
    target.classList.remove('pc-stroke-active-layer', 'pc-stroke-active-sticker', 'pc-stroke-active-fixed');
    const svg = target.querySelector('svg');

    if (!studioState.outlineEnabled) {
      target.style.removeProperty('--pc-icon-stroke-color');
      target.style.removeProperty('--pc-icon-stroke-width');
      if (svg) svg.style.filter = '';
      return;
    }

    let calculatedWidth = studioState.strokeWidth;
    if (studioState.scaleBehavior === 'proportional' && size) {
      calculatedWidth = Math.max(0.5, (studioState.strokeWidth * (size / 64))).toFixed(1);
    }

    target.style.setProperty('--pc-icon-stroke-color', studioState.strokeColor);
    target.style.setProperty('--pc-icon-stroke-width', `${calculatedWidth}px`);

    if (studioState.mode === 'sticker') {
      target.classList.add('pc-stroke-active-sticker');
      if (svg) svg.style.filter = 'url(#pc-filter-diecut-sticker)';
    } else if (studioState.mode === 'layer') {
      target.classList.add('pc-stroke-active-layer');
      if (studioState.scaleBehavior === 'fixed') {
        target.classList.add('pc-stroke-active-fixed');
      }
      if (svg) svg.style.filter = 'none';
    } else if (studioState.mode === 'double') {
      target.classList.add('pc-stroke-active-layer');
      target.classList.add('pc-stroke-active-sticker');
      if (studioState.scaleBehavior === 'fixed') {
        target.classList.add('pc-stroke-active-fixed');
      }
      if (svg) svg.style.filter = 'url(#pc-filter-diecut-sticker)';
    }
  }

  function syncLinkedDropdown(sel) {
    if (!sel || !sel.id) return;
    const parent = document.querySelector(`.pc-dropdown-custom[data-linked-select="${sel.id}"]`);
    if (!parent) return;
    const trigger = parent.querySelector('.pc-dropdown-trigger');
    const triggerContent = trigger ? trigger.querySelector('.pc-trigger-content, .trigger-content') : null;
    const selectedOpt = sel.options[sel.selectedIndex];
    if (!selectedOpt) return;
    const extracted = extractOptionIcon(selectedOpt);
    if (triggerContent) {
      triggerContent.innerHTML = `
        ${extracted.iconId ? `<span class="pc-inline-icon is-sm" data-icon="${extracted.iconId}"></span>` : ''}
        <span class="pc-trigger-text trigger-text">${extracted.label}</span>
      `;
      if (typeof window.hydratePapercutIcons === 'function') {
        window.hydratePapercutIcons(triggerContent);
      }
    }
    parent.querySelectorAll('.pc-dropdown-item').forEach(item => {
      item.classList.toggle('is-selected', item.dataset.value === sel.value);
    });
  }

  function populateIconSelect() {
    if (iconSelect && window.PAPERCUT_ICONS && window.PAPERCUT_ICONS.length > 0) {
      if (iconSelect.options.length <= 10) {
        iconSelect.innerHTML = window.PAPERCUT_ICONS.map(ic => 
          `<option value="${ic.id}">${ic.nameKo || ic.nameEn || ic.id} (${ic.id})</option>`
        ).join('');
        iconSelect.value = studioState.iconId;

        // Also populate linked custom dropdown if present
        const customDropdown = document.querySelector(`.pc-dropdown-custom[data-linked-select="${iconSelect.id}"]`);
        if (customDropdown) {
          const menu = customDropdown.querySelector('.pc-dropdown-menu');
          if (menu) {
            menu.innerHTML = '';
            Array.from(iconSelect.options).forEach(opt => {
              const item = document.createElement('button');
              item.type = 'button';
              item.className = 'pc-dropdown-item' + (opt.value === studioState.iconId ? ' is-selected' : '');
              item.dataset.value = opt.value;
              item.innerHTML = `
                <span class="pc-inline-icon is-sm" data-icon="${opt.value}"></span>
                <span class="pc-dropdown-text">${opt.textContent.trim()}</span>
              `;
              menu.appendChild(item);
            });
            // Menu items are lazily hydrated on dropdown open via initDropdowns
            const trigger = customDropdown.querySelector('.pc-dropdown-trigger');
            if (trigger && typeof window.hydratePapercutIcons === 'function') {
              window.hydratePapercutIcons(trigger);
            }
          }
        }
      }
    }
  }

  function updateStudio() {
    populateIconSelect();
    const rawSvg = typeof window.getPapercutIconSvg === 'function' ? window.getPapercutIconSvg(studioState.iconId, 'studio-main') : '';
    if (!rawSvg) {
      setTimeout(updateStudio, 80);
      return;
    }

    // 1. Update Global SVG Filter
    const dilate = document.getElementById('pc-filter-sticker-dilate');
    const flood = document.getElementById('pc-filter-sticker-flood');
    if (dilate) dilate.setAttribute('radius', studioState.strokeWidth);
    if (flood) flood.setAttribute('flood-color', studioState.strokeColor);

    // 2. Main Active Icon Box
    const activeBox = document.getElementById('studio-active-icon-box');
    if (activeBox) {
      activeBox.style.width = `${studioState.activeSize}px`;
      activeBox.style.height = `${studioState.activeSize}px`;
      activeBox.innerHTML = rawSvg;
      applyStylesToTarget(activeBox, studioState.activeSize);
    }

    // 3. Multi-Size Step Progression Cards
    const sizes = [24, 36, 48, 64, 96, 128];
    sizes.forEach(sz => {
      const el = document.getElementById(`studio-size-target-${sz}`);
      if (el) {
        el.style.width = `${sz}px`;
        el.style.height = `${sz}px`;
        el.innerHTML = typeof window.getPapercutIconSvg === 'function' ? window.getPapercutIconSvg(studioState.iconId, `studio-sz-${sz}`) : rawSvg;
        applyStylesToTarget(el, sz);
      }
    });

    // 4. Update Info Labels
    const info = document.getElementById('studio-stage-info');
    if (info) {
      info.textContent = studioState.outlineEnabled 
        ? `크기: ${studioState.activeSize}px | 외곽선: ${studioState.strokeWidth}px (${studioState.strokeColor}) | 모드: ${getModeTitle(studioState.mode)} | 스케일: ${studioState.scaleBehavior === 'fixed' ? '고정 픽셀' : '크기 비례'}`
        : `크기: ${studioState.activeSize}px | 외곽선: OFF (순수 스탠드얼론 페이퍼 커팅)`;
    }

    if (strokeVal) strokeVal.textContent = `${studioState.strokeWidth}px`;
    if (strokeSlider) strokeSlider.value = studioState.strokeWidth;
    if (colorCode) colorCode.textContent = studioState.strokeColor.toUpperCase();
    if (colorPicker) colorPicker.value = studioState.strokeColor;
    if (sizeDisplay) sizeDisplay.textContent = `${studioState.activeSize}px`;
    if (sizeSlider) sizeSlider.value = studioState.activeSize;
  }

  // Event Listeners
  if (iconSelect) {
    iconSelect.addEventListener('change', (e) => {
      studioState.iconId = e.target.value;
      quickIcons.forEach(b => {
        b.classList.toggle('is-active', b.getAttribute('data-icon') === studioState.iconId);
      });
      syncLinkedDropdown(iconSelect);
      updateStudio();
    });
  }

  quickIcons.forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-icon');
      if (id) {
        studioState.iconId = id;
        if (iconSelect) {
          iconSelect.value = id;
          syncLinkedDropdown(iconSelect);
        }
        quickIcons.forEach(b => b.classList.toggle('is-active', b === btn));
        updateStudio();
      }
    });
  });

  if (outlineToggle) {
    outlineToggle.addEventListener('change', (e) => {
      studioState.outlineEnabled = e.target.checked;
      updateStudio();
      showPaperToast(studioState.outlineEnabled ? '외곽선이 활성화되었습니다.' : '외곽선이 비활성화되었습니다.', 'mint');
    });
  }

  function setMode(newMode) {
    studioState.mode = newMode;
    [modeStickerBtn, modeLayerBtn, modeDoubleBtn].forEach(b => b?.classList.remove('is-active'));
    if (newMode === 'layer') {
      modeLayerBtn?.classList.add('is-active');
      if (modeDesc) modeDesc.textContent = '아이콘을 구성하는 모든 종이 모양(도형, 조각, 라인)에 각각 정밀 외곽선 테두리를 두릅니다.';
    } else if (newMode === 'double') {
      modeDoubleBtn?.classList.add('is-active');
      if (modeDesc) modeDesc.textContent = '아이콘 내 모든 종이 조각 외곽선과 외부 다이컷 스티커 경계선을 동시에 적용합니다.';
    } else {
      modeStickerBtn?.classList.add('is-active');
      if (modeDesc) modeDesc.textContent = '아이콘 전체 실루엣 외곽에만 부드러운 다이컷 종이 스티커 경계선을 둘러줍니다.';
    }
    updateStudio();
  }

  modeStickerBtn?.addEventListener('click', () => setMode('sticker'));
  modeLayerBtn?.addEventListener('click', () => setMode('layer'));
  modeDoubleBtn?.addEventListener('click', () => setMode('double'));

  if (strokeSlider) {
    strokeSlider.addEventListener('input', (e) => {
      studioState.strokeWidth = parseFloat(e.target.value);
      thickChips.forEach(c => c.classList.remove('is-active'));
      updateStudio();
    });
  }

  thickChips.forEach(chip => {
    chip.addEventListener('click', () => {
      thickChips.forEach(c => c.classList.remove('is-active'));
      chip.classList.add('is-active');
      studioState.strokeWidth = parseFloat(chip.getAttribute('data-width'));
      updateStudio();
    });
  });

  if (colorPicker) {
    colorPicker.addEventListener('input', (e) => {
      studioState.strokeColor = e.target.value;
      swatches.forEach(s => s.classList.remove('is-active'));
      updateStudio();
    });
  }

  swatches.forEach(swatch => {
    swatch.addEventListener('click', () => {
      swatches.forEach(s => s.classList.remove('is-active'));
      swatch.classList.add('is-active');
      studioState.strokeColor = swatch.getAttribute('data-color');
      updateStudio();
    });
  });

  scaleFixedBtn?.addEventListener('click', () => {
    studioState.scaleBehavior = 'fixed';
    scaleFixedBtn.classList.add('is-active');
    scalePropBtn.classList.remove('is-active');
    updateStudio();
    showPaperToast('외곽선 두께: 고정 픽셀 모드 (모든 크기에서 균일한 굵기 유지)', 'mint');
  });

  scalePropBtn?.addEventListener('click', () => {
    studioState.scaleBehavior = 'proportional';
    scalePropBtn.classList.add('is-active');
    scaleFixedBtn.classList.remove('is-active');
    updateStudio();
    showPaperToast('외곽선 두께: 크기 비례 모드 (아이콘 크기에 비례하여 굵기 변화)', 'peach');
  });

  if (sizeSlider) {
    sizeSlider.addEventListener('input', (e) => {
      studioState.activeSize = parseInt(e.target.value, 10);
      updateStudio();
    });
  }

  bgChips.forEach(btn => {
    btn.addEventListener('click', () => {
      bgChips.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      const bg = btn.getAttribute('data-bg');
      if (mainStage) {
        ['bg-cream', 'bg-white', 'bg-dark', 'bg-grid'].forEach(c => mainStage.classList.remove(c));
        mainStage.classList.add(`bg-${bg}`);
      }
    });
  });

  // Copy SVG with applied stroke
  copySvgBtn?.addEventListener('click', () => {
    const activeBox = document.getElementById('studio-active-icon-box');
    const svgEl = activeBox?.querySelector('svg');
    if (!svgEl) return;

    let svgClone = svgEl.cloneNode(true);
    if (studioState.outlineEnabled) {
      if (studioState.mode === 'sticker' || studioState.mode === 'double') {
        const defs = svgClone.querySelector('defs') || document.createElementNS('http://www.w3.org/2000/svg', 'defs');
        const filterStr = `
  <filter id="pc-export-diecut" x="-40%" y="-40%" width="180%" height="180%">
    <feMorphology in="SourceAlpha" result="EXP" operator="dilate" radius="${studioState.strokeWidth}"/>
    <feFlood flood-color="${studioState.strokeColor}" result="COL"/>
    <feComposite in="COL" in2="EXP" operator="in" result="OUT"/>
    <feDropShadow in="OUT" dx="0" dy="2.5" stdDeviation="1.5" flood-color="#4A3A2A" flood-opacity="0.22" result="SHD"/>
    <feMerge>
      <feMergeNode in="SHD"/>
      <feMergeNode in="OUT"/>
      <feMergeNode in="SourceGraphic"/>
    </feMerge>
  </filter>`;
        defs.innerHTML += filterStr;
        if (!svgClone.querySelector('defs')) svgClone.insertBefore(defs, svgClone.firstChild);
        svgClone.style.filter = 'url(#pc-export-diecut)';
      }
      if (studioState.mode === 'layer' || studioState.mode === 'double') {
        const filledShapes = svgClone.querySelectorAll('path:not([fill="none"]), rect:not([fill="none"]), circle:not([fill="none"]), ellipse:not([fill="none"]), polygon:not([fill="none"])');
        filledShapes.forEach(sh => {
          sh.setAttribute('stroke', studioState.strokeColor);
          sh.setAttribute('stroke-width', `${studioState.strokeWidth}px`);
          sh.setAttribute('stroke-linejoin', 'round');
          sh.setAttribute('stroke-linecap', 'round');
          sh.style.paintOrder = 'stroke fill';
          if (studioState.scaleBehavior === 'fixed') {
            sh.setAttribute('vector-effect', 'non-scaling-stroke');
          }
        });

        const openShapes = svgClone.querySelectorAll('path[fill="none"], circle[fill="none"], rect[fill="none"], ellipse[fill="none"], polygon[fill="none"], line, polyline');
        openShapes.forEach(sh => {
          const swHalf = (studioState.strokeWidth * 0.5).toFixed(1);
          sh.style.filter = `drop-shadow(${swHalf}px 0 0 ${studioState.strokeColor}) drop-shadow(-${swHalf}px 0 0 ${studioState.strokeColor}) drop-shadow(0 ${swHalf}px 0 ${studioState.strokeColor}) drop-shadow(0 -${swHalf}px 0 ${studioState.strokeColor})`;
          if (studioState.scaleBehavior === 'fixed') {
            sh.setAttribute('vector-effect', 'non-scaling-stroke');
          }
        });
      }
    }

    const serializer = new XMLSerializer();
    const svgString = serializer.serializeToString(svgClone);

    if (navigator.clipboard) {
      navigator.clipboard.writeText(svgString).then(() => {
        showPaperToast(`[${studioState.iconId}] 모든 종이 모양 외곽선이 적용된 스탠드얼론 SVG 코드가 복사되었습니다!`, 'mint');
      });
    }
  });

  // Copy CSS
  copyCssBtn?.addEventListener('click', () => {
    const cssCode = `/* PaperCut Icon Outline Styles - All Individual Paper Shapes */
.my-papercut-icon {
  --pc-icon-stroke-color: ${studioState.strokeColor};
  --pc-icon-stroke-width: ${studioState.strokeWidth}px;
}
/* 1. Filled Paper Shapes */
.my-papercut-icon svg path:not([fill="none"]),
.my-papercut-icon svg rect:not([fill="none"]),
.my-papercut-icon svg circle:not([fill="none"]),
.my-papercut-icon svg ellipse:not([fill="none"]),
.my-papercut-icon svg polygon:not([fill="none"]) {
  stroke: var(--pc-icon-stroke-color);
  stroke-width: var(--pc-icon-stroke-width);
  stroke-linejoin: round;
  stroke-linecap: round;
  paint-order: stroke fill;
  ${studioState.scaleBehavior === 'fixed' ? 'vector-effect: non-scaling-stroke;' : ''}
}
/* 2. Linear & Open Paper Shapes (handles, steam, lines) */
.my-papercut-icon svg path[fill="none"],
.my-papercut-icon svg circle[fill="none"],
.my-papercut-icon svg rect[fill="none"],
.my-papercut-icon svg ellipse[fill="none"],
.my-papercut-icon svg polygon[fill="none"],
.my-papercut-icon svg line,
.my-papercut-icon svg polyline {
  filter: drop-shadow(calc(var(--pc-icon-stroke-width) * 0.5) 0 0 var(--pc-icon-stroke-color))
          drop-shadow(calc(var(--pc-icon-stroke-width) * -0.5) 0 0 var(--pc-icon-stroke-color))
          drop-shadow(0 calc(var(--pc-icon-stroke-width) * 0.5) 0 var(--pc-icon-stroke-color))
          drop-shadow(0 calc(var(--pc-icon-stroke-width) * -0.5) 0 var(--pc-icon-stroke-color));
  ${studioState.scaleBehavior === 'fixed' ? 'vector-effect: non-scaling-stroke;' : ''}
}`;

    if (navigator.clipboard) {
      navigator.clipboard.writeText(cssCode).then(() => {
        showPaperToast('모든 종이 모양 외곽선 CSS 스타일 코드가 클립보드에 복사되었습니다!', 'peach');
      });
    }
  });

  // Initial Render
  updateStudio();
}

/**
 * Enables smooth grab-and-drag horizontal scrolling for tactile paper-cut containers
 * (Supports mouse drag and touch momentum without interfering with clicks)
 */
function initPaperHorizontalScroll() {
  const containers = document.querySelectorAll('.hero-scroll-container, .pc-scroll-horizontal, .pc-filter-pills-row, .pc-card-scroll-wrap');
  
  containers.forEach(container => {
    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    container.addEventListener('mousedown', (e) => {
      // Don't drag if clicking an interactive control directly
      if (e.target.closest('button, a, input, select, textarea, [role="button"], .pc-svg-kirigami-btn')) {
        return;
      }
      isDown = true;
      container.style.cursor = 'grabbing';
      container.style.userSelect = 'none';
      startX = e.pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
    });

    window.addEventListener('mouseup', () => {
      if (!isDown) return;
      isDown = false;
      container.style.cursor = '';
      container.style.removeProperty('user-select');
    });

    container.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 1.5;
      container.scrollLeft = scrollLeft - walk;
    });
  });
}


