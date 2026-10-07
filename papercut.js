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
  initPaperSoundEffect();
  initTextureModes();
  initMatteTextureShowcase();
});

/**
 * Custom Paper-cut Dropdown Handling & Auto-Enhancement
 */
function initDropdowns() {
  autoEnhanceSelectsToPaperDropdowns();

  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('.pc-dropdown-trigger');
    const allCustomDropdowns = document.querySelectorAll('.pc-dropdown-custom');

    if (trigger) {
      const parent = trigger.closest('.pc-dropdown-custom');
      const wasOpen = parent.classList.contains('is-open');
      
      // Close other dropdowns
      allCustomDropdowns.forEach(d => {
        if (d !== parent) d.classList.remove('is-open');
      });

      parent.classList.toggle('is-open', !wasOpen);
      return;
    }

    const item = e.target.closest('.pc-dropdown-item');
    if (item) {
      const parent = item.closest('.pc-dropdown-custom');
      const trigger = parent.querySelector('.pc-dropdown-trigger');
      const triggerContent = trigger ? trigger.querySelector('.trigger-content') : null;
      const itemIcon = item.querySelector('.pc-inline-icon');
      const itemText = item.querySelector('.pc-dropdown-text') || item;
      const cleanText = (itemText.textContent || item.textContent).replace('✓', '').trim();

      if (triggerContent) {
        if (itemIcon) {
          const iconId = itemIcon.getAttribute('data-icon');
          triggerContent.innerHTML = `<span class="pc-inline-icon is-sm" data-icon="${iconId}"></span> <span class="trigger-text">${cleanText}</span>`;
          if (typeof window.hydratePapercutIcons === 'function') {
            window.hydratePapercutIcons(triggerContent);
          }
        } else {
          triggerContent.innerHTML = `<span class="trigger-text">${cleanText}</span>`;
        }
      } else if (trigger) {
        const triggerSpan = trigger.querySelector('.trigger-text') || trigger.querySelector('span');
        if (triggerSpan) triggerSpan.textContent = cleanText;
      }

      parent.querySelectorAll('.pc-dropdown-item').forEach(i => i.classList.remove('is-selected'));
      item.classList.add('is-selected');
      parent.classList.remove('is-open');

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
      allCustomDropdowns.forEach(d => d.classList.remove('is-open'));
    }
  });
}

/**
 * Helper to extract or map icon and label for select options
 */
function extractOptionIcon(opt) {
  if (opt.dataset && opt.dataset.icon) {
    return { iconId: opt.dataset.icon, label: opt.textContent.trim() };
  }
  const text = opt.textContent.trim();
  const emojiMap = {
    '🐶': 'dog', '🐱': 'cat', '🐾': 'paw',
    '🍯': 'honey', '🧈': 'butter',
    '⛩': 'shrine-torii', '⛩️': 'shrine-torii',
    '🗼': 'eiffel-tower', '🏔': 'matterhorn', '🏔️': 'matterhorn',
    '💐': 'bouquet', '✂': 'scissors', '✂️': 'scissors',
    '🌤': 'cloud-sun-rays', '🌤️': 'cloud-sun-rays',
    '🌧': 'cloud-rain', '🌧️': 'cloud-rain',
    '🎧': 'headphones', '🎨': 'palette', '💻': 'laptop',
    '🌿': 'leaf', '🍃': 'leaf', '🍑': 'apricot', '🍊': 'apricot',
    '🔮': 'crystal-ball', '💺': 'airplane-seat',
    '☕': 'coffee', '🥐': 'croissant', '🌸': 'flower',
    '🛡': 'shield', '🛡️': 'shield', '🛒': 'cart', '🚫': 'ban',
    '☀️': 'sun', '☀': 'sun', '✨': 'sparkles',
    '✉': 'mail', '✉️': 'mail', '💌': 'mail', '🔍': 'search',
    '🎁': 'gift', '💖': 'heart', '📷': 'camera',
    '🍭': 'lollipop', '🍋': 'lemon', '🫐': 'blueberry',
    '🧸': 'teddy-bear', '📜': 'scroll', '🎋': 'bamboo',
    '📦': 'package', '🕊': 'dove', '🕊️': 'dove',
    '📖': 'book', '🌙': 'moon', '🌌': 'galaxy',
    '🔐': 'lock', '🎂': 'cake', '🏡': 'home',
    '🍵': 'tea', '🏷': 'price-tag', '🏷️': 'price-tag', '🌱': 'sprout',
    '⛅': 'cloud-sun', '☁': 'cloud', '☁️': 'cloud', '🔖': 'bookmark'
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
 */
function autoEnhanceSelectsToPaperDropdowns() {
  const selectWrappers = document.querySelectorAll('.pc-select-wrapper');

  selectWrappers.forEach((wrapper, idx) => {
    // Avoid double enhancing
    if (wrapper.querySelector('.pc-dropdown-custom') || wrapper.classList.contains('is-enhanced')) return;

    const select = wrapper.querySelector('select.pc-select');
    if (!select) return;

    // Give select an ID if missing
    if (!select.id) select.id = 'pc-auto-select-' + idx;

    // Create the custom paper dropdown container
    const customDropdown = document.createElement('div');
    customDropdown.className = 'pc-dropdown-custom';
    customDropdown.dataset.linkedSelect = select.id;

    // Selected text & options
    const selectedOption = select.options[select.selectedIndex] || select.options[0];
    const initialExtracted = selectedOption ? extractOptionIcon(selectedOption) : { iconId: null, label: '선택하세요' };

    // Trigger button
    const trigger = document.createElement('button');
    trigger.type = 'button';
    trigger.className = 'pc-dropdown-trigger';
    trigger.innerHTML = `
      <span class="trigger-content">
        ${initialExtracted.iconId ? `<span class="pc-inline-icon is-sm" data-icon="${initialExtracted.iconId}"></span>` : ''}
        <span class="trigger-text">${initialExtracted.label}</span>
      </span>
      <span class="arrow-icon">▼</span>
    `;
    customDropdown.appendChild(trigger);

    // Menu list
    const menu = document.createElement('div');
    menu.className = 'pc-dropdown-menu';

    Array.from(select.options).forEach((opt, optIdx) => {
      const item = document.createElement('button');
      item.type = 'button';
      item.className = 'pc-dropdown-item' + (opt.selected ? ' is-selected' : '');
      item.dataset.value = opt.value || opt.textContent.trim();
      
      const optExtracted = extractOptionIcon(opt);
      item.innerHTML = `
        ${optExtracted.iconId ? `<span class="pc-inline-icon is-sm" data-icon="${optExtracted.iconId}"></span>` : ''}
        <span class="pc-dropdown-text">${optExtracted.label}</span>
      `;
      menu.appendChild(item);
    });

    customDropdown.appendChild(menu);

    // Hide native select visually while keeping it accessible in DOM
    select.style.display = 'none';
    wrapper.classList.add('is-enhanced');
    wrapper.appendChild(customDropdown);

    // Hydrate icons in the newly enhanced dropdown
    if (typeof window.hydratePapercutIcons === 'function') {
      window.hydratePapercutIcons(customDropdown);
    }
  });
}

/**
 * Toast Notification for Copy and Action Feedback
 */
function showPaperToast(message, type = 'mint') {
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
      z-index: 10000;
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
  toast.innerHTML = `<span>✂️</span> <span>${message}</span>`;
  toastContainer.appendChild(toast);

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
      showPaperToast('코드가 클립보드에 복사되었습니다!', 'mint');
      const originalText = copyBtn.innerHTML;
      copyBtn.innerHTML = '<span>✓ 복사됨</span>';
      setTimeout(() => copyBtn.innerHTML = originalText, 1800);
    }).catch(err => {
      console.error(err);
      showPaperToast('복사에 실패했습니다.', 'peach');
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
  const filterButtons = document.querySelectorAll('.pc-filter-btn');
  const exampleCards = document.querySelectorAll('.example-item');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');

      const filter = btn.dataset.filter;
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
    const exampleCards = document.querySelectorAll('.example-item');
    let count = 0;

    exampleCards.forEach(card => {
      const title = card.querySelector('.example-title')?.textContent.toLowerCase() || '';
      const desc = card.querySelector('.example-desc')?.textContent.toLowerCase() || '';
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
      showPaperToast(`💌 '${email}'님께 주간 종이비둘기 레터 발송 신청 완료!`, 'mint');
      demo9Form.reset();
    });
  }

  // Demo 12: Plant Care Reminder
  const demo12Btn = document.getElementById('demo12-btn');
  if (demo12Btn) {
    demo12Btn.addEventListener('click', () => {
      const name = document.getElementById('demo12-name').value || '몬스테라 친구';
      showPaperToast(`🌱 [${name}]의 물주기 종이 라벨이 화분에 걸렸습니다!`, 'sage');
    });
  }

  // Demo 13: Bakery Order
  const demo13Btn = document.getElementById('demo13-btn');
  if (demo13Btn) {
    demo13Btn.addEventListener('click', () => {
      const item = document.getElementById('demo13-item')?.value || '딸기 크로와상';
      const qty = document.getElementById('demo13-qty')?.value || '1';
      showPaperToast(`🥐 주문 접수: ${item} ${qty}개 (종이 영수증 발행)`, 'buttercup');
    });
  }

  // Demo 15: Dream Journal
  const demo15Btn = document.getElementById('demo15-btn');
  if (demo15Btn) {
    demo15Btn.addEventListener('click', () => {
      const title = document.getElementById('demo15-title').value;
      if (!title) {
        showPaperToast('기억나는 꿈의 제목을 적어주세요.', 'lavender');
        return;
      }
      showPaperToast(`🌙 꿈 일기 '${title}'가 파스텔 서랍에 보관되었습니다.`, 'lavender');
      document.getElementById('demo15-title').value = '';
    });
  }

  // Demo 27: Todo Paper Strips
  const demo27AddBtn = document.getElementById('demo27-add-btn');
  const demo27Input = document.getElementById('demo27-input');
  const demo27List = document.getElementById('demo27-list');
  if (demo27AddBtn && demo27Input && demo27List) {
    demo27AddBtn.addEventListener('click', () => {
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
        <button class="pc-btn pc-btn-sm pc-btn-peach" style="padding: 2px 8px; font-size: 11px;">삭제</button>
      `;
      li.querySelector('button').addEventListener('click', () => li.remove());
      demo27List.appendChild(li);
      demo27Input.value = '';
      showPaperToast('새 할 일 종이띠가 추가되었습니다.', 'sky');
    });
  }

  // Demo 22: Tea Blending
  const demo22Btn = document.getElementById('demo22-btn');
  if (demo22Btn) {
    demo22Btn.addEventListener('click', () => {
      const tea = document.getElementById('demo22-tea')?.value || '캐모마일 민트';
      showPaperToast(`🍵 향긋한 [${tea}] 블렌딩 티백이 종이 봉투에 담겼습니다.`, 'sage');
    });
  }

  // Demo 17: Luggage Tag
  const demo17Btn = document.getElementById('demo17-btn');
  if (demo17Btn) {
    demo17Btn.addEventListener('click', () => {
      const name = document.getElementById('demo17-name')?.value || '여행자';
      const dest = document.getElementById('demo17-dest')?.value || '교토';
      showPaperToast(`✈️ [${dest}]행 ${name}님의 러기지 종이 태그가 발행되었습니다!`, 'rose');
    });
  }
}

/**
 * Live Customization Playground
 */
function initPlayground() {
  const shadowSlider = document.getElementById('pg-shadow-depth');
  const radiusSlider = document.getElementById('pg-border-radius');
  const paletteSelector = document.getElementById('pg-palette-select');
  const playgroundBox = document.getElementById('playground-preview-box');

  if (shadowSlider && playgroundBox) {
    shadowSlider.addEventListener('input', (e) => {
      const val = e.target.value;
      playgroundBox.style.setProperty('--pc-shadow-md', `0 ${val * 2}px 0 rgba(74, 58, 42, 0.16), 0 ${val * 4}px ${val * 8}px rgba(74, 58, 42, 0.08)`);
      const valDisplay = document.getElementById('pg-shadow-val');
      if (valDisplay) valDisplay.textContent = `${val}px`;
    });
  }

  if (radiusSlider && playgroundBox) {
    radiusSlider.addEventListener('input', (e) => {
      const val = e.target.value;
      playgroundBox.style.setProperty('--pc-radius-md', `${val}px`);
      const valDisplay = document.getElementById('pg-radius-val');
      if (valDisplay) valDisplay.textContent = `${val}px`;
    });
  }

  let currentPgTexture = 'cotton';
  const textureSelector = document.getElementById('pg-texture-select');

  function updatePlaygroundClasses() {
    if (!playgroundBox) return;
    const theme = paletteSelector ? paletteSelector.value : 'theme-cream';
    let textureClass = '';
    if (currentPgTexture === 'cotton') textureClass = 'pc-texture-paper';
    else if (currentPgTexture === 'hanji') textureClass = 'pc-texture-hanji';
    else if (currentPgTexture === 'kraft') textureClass = 'pc-texture-kraft';

    playgroundBox.className = `pc-card pc-card-stacked ${theme} ${textureClass}`.trim();
  }

  if (paletteSelector && playgroundBox) {
    paletteSelector.addEventListener('change', (e) => {
      const theme = e.target.value;
      updatePlaygroundClasses();

      // Transform preview buttons inside playground to reflect the selected pastel palette
      const previewBtns = playgroundBox.querySelectorAll('.pc-btn');
      if (previewBtns.length >= 2) {
        // Reset classes
        previewBtns[0].className = 'pc-btn';
        previewBtns[1].className = 'pc-btn';

        if (theme === 'theme-cream') {
          previewBtns[0].classList.add('pc-btn-mint');
          previewBtns[1].classList.add('pc-btn-buttercup');
        } else if (theme === 'theme-peach') {
          previewBtns[0].classList.add('pc-btn-peach');
          previewBtns[1].classList.add('pc-btn-rose');
        } else if (theme === 'theme-lavender') {
          previewBtns[0].classList.add('pc-btn-lavender');
          previewBtns[1].classList.add('pc-btn-sky');
        } else if (theme === 'theme-buttercup') {
          previewBtns[0].classList.add('pc-btn-buttercup');
          previewBtns[1].classList.add('pc-btn-mint');
        } else if (theme === 'theme-sky') {
          previewBtns[0].classList.add('pc-btn-sky');
          previewBtns[1].classList.add('pc-btn-mint');
        } else if (theme === 'theme-cherry') {
          previewBtns[0].classList.add('pc-btn-rose');
          previewBtns[1].classList.add('pc-btn-peach');
        } else if (theme === 'theme-matcha') {
          previewBtns[0].classList.add('pc-btn-sage');
          previewBtns[1].classList.add('pc-btn-buttercup');
        } else if (theme === 'theme-cotton-candy') {
          previewBtns[0].classList.add('pc-btn-rose');
          previewBtns[1].classList.add('pc-btn-sky');
        } else if (theme === 'theme-lemon') {
          previewBtns[0].classList.add('pc-btn-buttercup');
          previewBtns[1].classList.add('pc-btn-mint');
        } else if (theme === 'theme-twilight') {
          previewBtns[0].classList.add('pc-btn-lavender');
          previewBtns[1].classList.add('pc-btn-buttercup');
        } else if (theme === 'theme-apricot') {
          previewBtns[0].classList.add('pc-btn-peach');
          previewBtns[1].classList.add('pc-btn-rose');
        } else if (theme === 'theme-eucalyptus') {
          previewBtns[0].classList.add('pc-btn-sage');
          previewBtns[1].classList.add('pc-btn-lavender');
        } else if (theme === 'theme-berry') {
          previewBtns[0].classList.add('pc-btn-rose');
          previewBtns[1].classList.add('pc-btn-sky');
        } else if (theme === 'theme-teddy') {
          previewBtns[0].classList.add('pc-btn-peach');
          previewBtns[1].classList.add('pc-btn-buttercup');
        } else {
          previewBtns[0].classList.add('pc-btn-mint');
          previewBtns[1].classList.add('pc-btn-buttercup');
        }
      }

      showPaperToast(`파스텔 테마 색지가 [${e.target.options[e.target.selectedIndex].text}]로 적용되었습니다!`, 'mint');
    });
  }

  if (textureSelector && playgroundBox) {
    textureSelector.addEventListener('change', (e) => {
      currentPgTexture = e.target.value;
      updatePlaygroundClasses();
      if (currentPgTexture === 'cotton') {
        showPaperToast('프리뷰 캔버스에 300g 수제 코튼 펄프 질감이 적용되었습니다!', 'mint');
      } else if (currentPgTexture === 'hanji') {
        showPaperToast('프리뷰 캔버스에 전통 닥나무 수제 한지결이 적용되었습니다!', 'sage');
      } else if (currentPgTexture === 'kraft') {
        showPaperToast('프리뷰 캔버스에 350g 매트 크라프트 질감이 적용되었습니다!', 'peach');
      } else {
        showPaperToast('프리뷰 캔버스가 플랫 매끄러운 표면으로 전환되었습니다.', 'buttercup');
      }
    });
  }

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
 * Subtle Paper Rustle Tactile Sound Simulation (Optional Web Audio API synthesis)
 */
function initPaperSoundEffect() {
  let audioCtx = null;
  const soundToggle = document.getElementById('toggle-paper-sound');
  let soundEnabled = false;

  if (soundToggle) {
    soundToggle.addEventListener('click', () => {
      soundEnabled = !soundEnabled;
      soundToggle.classList.toggle('is-pressed', soundEnabled);
      const iconSpan = soundToggle.querySelector('.pc-inline-icon');
      if (iconSpan && typeof window.getPapercutIconSvg === 'function') {
        iconSpan.innerHTML = window.getPapercutIconSvg(soundEnabled ? 'volume' : 'mute');
      }
      soundToggle.querySelector('.label').textContent = soundEnabled ? '종이 소리: ON' : '종이 소리: OFF';
      showPaperToast(soundEnabled ? '종이 바스락 효과음이 켜졌습니다.' : '종이 효과음이 꺼졌습니다.', 'buttercup');
    });
  }

  document.addEventListener('click', (e) => {
    if (!soundEnabled) return;
    if (e.target.closest('.pc-btn, .pc-checkbox-label, .pc-dropdown-trigger, .pc-dropdown-item')) {
      playSoftPaperRustle();
    }
  });

  function playSoftPaperRustle() {
    try {
      if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }

      // Generate a soft noise burst simulating paper rustle
      const bufferSize = audioCtx.sampleRate * 0.05; // 50ms
      const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.3));
      }

      const noise = audioCtx.createBufferSource();
      noise.buffer = buffer;

      const filter = audioCtx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.value = 1800;
      filter.Q.value = 1.2;

      const gain = audioCtx.createGain();
      gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.05);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(audioCtx.destination);

      noise.start();
    } catch (e) {
      // Ignore audio synthesis errors on restricted environments
    }
  }
}

/**
 * Paper Texture Mode Switcher (Cotton, Hanji, Soft, Flat)
 */
function initTextureModes() {
  const textureButtons = document.querySelectorAll('[data-texture-mode]');
  if (!textureButtons.length) return;

  const modeNames = {
    'texture-soft': '소프트 파스텔지 (기본)',
    'texture-cotton': '300g 수제 코튼지 (엠보싱 극대화)',
    'texture-hanji': '전통 닥나무 한지 (거친 결)',
    'texture-flat': '일반 디지털 플랫 UI (질감/그림자 OFF)'
  };

  textureButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const mode = btn.getAttribute('data-texture-mode');
      
      // Update body classes
      document.body.classList.remove('texture-soft', 'texture-cotton', 'texture-hanji', 'texture-flat');
      document.body.classList.add(mode);

      // Update button active state
      textureButtons.forEach(b => b.classList.remove('is-active', 'pc-btn-mint'));
      btn.classList.add('is-active', 'pc-btn-mint');

      showPaperToast(`종이 질감이 [${modeNames[mode] || mode}] 모드로 변경되었습니다!`, mode === 'texture-flat' ? 'peach' : 'mint');
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
        showPaperToast('닥나무 수제 한지 (Mulberry Fiber Hanji) 선택됨', 'sage');
      } else if (grade === 'vellum') {
        canvas.style.backgroundColor = '#FFFDF8';
        shader.style.opacity = '0.2';
        showPaperToast('실크 스무스 벨럼지 (Smooth Silk Vellum) 선택됨', 'sky');
      }
    });
  });

  // Universal UI Texture Toggle
  const universalToggle = document.getElementById('toggle-universal-texture');
  if (universalToggle) {
    let isUniversalActive = true;
    universalToggle.addEventListener('click', () => {
      isUniversalActive = !isUniversalActive;
      const samples = document.querySelectorAll('.ui-textured-sample');
      samples.forEach(el => {
        el.classList.toggle('pc-texture-paper', isUniversalActive);
      });
      if (isUniversalActive) {
        universalToggle.classList.add('pc-btn-mint');
        universalToggle.classList.remove('pc-btn-peach');
        universalToggle.querySelector('span').textContent = '🌱 전체 UI 질감: ON (코튼 펄프)';
        showPaperToast('모든 UI 컴포넌트에 300g 수제 코튼 펄프 질감이 적용되었습니다!', 'mint');
      } else {
        universalToggle.classList.remove('pc-btn-mint');
        universalToggle.classList.add('pc-btn-peach');
        universalToggle.querySelector('span').textContent = '💻 전체 UI 질감: OFF (플랫 표면)';
        showPaperToast('모든 UI 컴포넌트의 질감이 플랫 매끄러운 모드로 전환되었습니다.', 'peach');
      }
    });
  }
}

