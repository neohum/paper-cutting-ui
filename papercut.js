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
      const cleanText = (itemText.textContent || item.textContent).replace(/[\u2713\u2714\u2705]/g, '').trim();

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
  const exampleCards = document.querySelectorAll('.example-item');

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
      showPaperToast(`'${email}'님께 주간 종이비둘기 레터 발송 신청 완료!`, 'mint', 'mail');
      demo9Form.reset();
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
      showPaperToast('새 할 일 종이띠가 추가되었습니다.', 'sky', 'check');
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

  // Demo 17: Luggage Tag
  const demo17Btn = document.getElementById('demo17-btn');
  if (demo17Btn) {
    demo17Btn.addEventListener('click', () => {
      const name = document.getElementById('demo17-name')?.value || '여행자';
      const dest = document.getElementById('demo17-dest')?.value || '교토';
      showPaperToast(`[${dest}]행 ${name}님의 러기지 종이 태그가 발행되었습니다!`, 'rose', 'airplane');
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
    bestFor: '버튼, 메인 카드, 스탠드얼론 키리가미 아이콘',
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
    bestFor: '동양적 키리가미 아이콘, 오리가미 체크박스, 감성 배지',
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
        const triggerText = customDropdown.querySelector('.trigger-text');
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
      
      // Update body classes
      document.body.classList.remove('texture-soft', 'texture-cotton', 'texture-hanji', 'texture-flat');
      document.body.classList.add(mode);

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
      const samples = document.querySelectorAll('.ui-textured-sample');
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
    const triggerContent = trigger ? trigger.querySelector('.trigger-content') : null;
    const selectedOpt = sel.options[sel.selectedIndex];
    if (!selectedOpt) return;
    const extracted = extractOptionIcon(selectedOpt);
    if (triggerContent) {
      triggerContent.innerHTML = `
        ${extracted.iconId ? `<span class="pc-inline-icon is-sm" data-icon="${extracted.iconId}"></span>` : ''}
        <span class="trigger-text">${extracted.label}</span>
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
            if (typeof window.hydratePapercutIcons === 'function') {
              window.hydratePapercutIcons(menu);
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
        : `크기: ${studioState.activeSize}px | 외곽선: OFF (순수 스탠드얼론 키리가미)`;
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


