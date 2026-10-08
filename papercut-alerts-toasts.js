/**
 * PaperCut UI - Alerts & Toasts Interactive Controller
 * Provides toast notification dispatcher and interactive demo studio.
 */

(function () {
  'use strict';

  let toastContainer = null;
  let currentPosition = 'pos-top-right';

  function ensureToastContainer() {
    if (!toastContainer) {
      toastContainer = document.getElementById('pc-toast-container');
      if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.id = 'pc-toast-container';
        toastContainer.className = currentPosition;
        document.body.appendChild(toastContainer);
      }
    }
    return toastContainer;
  }

  /**
   * Global Toast Dispatcher
   * @param {Object|string} options - Toast options or simple message string
   * @param {string} type - 'mint' | 'peach' | 'lavender' | 'buttercup' | 'rose' | 'info' | 'success' | 'warning' | 'error'
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
        duration: 3800
      };
    } else {
      opts = Object.assign({
        title: '알림',
        message: '',
        variant: 'mint',
        icon: null,
        duration: 4000,
        actionLabel: null,
        onAction: null
      }, options);
    }

    // Map variant alias
    if (opts.variant === 'success') opts.variant = 'mint';
    if (opts.variant === 'info') opts.variant = 'sky';
    if (opts.variant === 'warning') opts.variant = 'buttercup';
    if (opts.variant === 'error' || opts.variant === 'destructive') opts.variant = 'rose';

    // Default icon
    if (!opts.icon) {
      if (opts.variant === 'mint') opts.icon = 'check';
      else if (opts.variant === 'rose') opts.icon = 'warning';
      else if (opts.variant === 'buttercup') opts.icon = 'bell';
      else if (opts.variant === 'lavender') opts.icon = 'sparkles';
      else opts.icon = 'info';
    }

    const toastEl = document.createElement('div');
    toastEl.className = `pc-toast-card variant-${opts.variant}`;

    toastEl.innerHTML = `
      <div class="pc-toast-tape"></div>
      <div class="pc-toast-icon-wrap">
        <span class="pc-inline-icon is-sm" data-icon="${opts.icon}"></span>
      </div>
      <div class="pc-toast-body">
        <div class="pc-toast-title">${opts.title}</div>
        <p class="pc-toast-msg">${opts.message}</p>
        ${opts.actionLabel ? `<button type="button" class="pc-toast-action-btn">${opts.actionLabel}</button>` : ''}
      </div>
      <button type="button" class="pc-toast-close-btn" aria-label="닫기">
        <span class="pc-inline-icon is-xs" data-icon="close"></span>
      </button>
      <div class="pc-toast-progress-bar"></div>
    `;

    container.appendChild(toastEl);

    // Hydrate icons inside toast
    if (typeof window.hydratePapercutIcons === 'function') {
      window.hydratePapercutIcons(toastEl);
    }

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

    return { dismiss };
  };

  // Connect / Override showPaperToast to use rich papercraft card
  window.showPaperToast = function (msg, type = 'mint', iconId = null) {
    return window.triggerPaperToast(msg, type, iconId);
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

    // Interactive Demo Trigger Buttons
    document.getElementById('btn-demo-toast-success')?.addEventListener('click', () => {
      window.triggerPaperToast({
        title: '수제 코튼지 저장 완료',
        message: '300g 아르쉬 텍스처와 아이콘 외곽선 프로필이 안전하게 보관되었습니다.',
        variant: 'mint',
        icon: 'check',
        duration: 4000
      });
    });

    document.getElementById('btn-demo-toast-info')?.addEventListener('click', () => {
      window.triggerPaperToast({
        title: '신규 텍스처 엔진 안내',
        message: '16종의 종이 질감과 619종 스탠드얼론 아이콘이 실시간으로 렌더링 중입니다.',
        variant: 'lavender',
        icon: 'info',
        duration: 4000
      });
    });

    document.getElementById('btn-demo-toast-warning')?.addEventListener('click', () => {
      window.triggerPaperToast({
        title: '외곽선 두께 주의',
        message: '현재 5.0px 이상의 두께가 지정되어 소형 픽셀(16px)에서 선이 굵어질 수 있습니다.',
        variant: 'buttercup',
        icon: 'warning',
        duration: 4500
      });
    });

    document.getElementById('btn-demo-toast-error')?.addEventListener('click', () => {
      window.triggerPaperToast({
        title: '칼선 연결 실패',
        message: '지정된 SVG 패스에 결함이 감지되었습니다. 레이어 구조를 재확인해주세요.',
        variant: 'rose',
        icon: 'close',
        duration: 5000
      });
    });

    document.getElementById('btn-demo-toast-action')?.addEventListener('click', () => {
      window.triggerPaperToast({
        title: '종이 컴포넌트 삭제됨',
        message: '선택하신 [커스텀 북마크 드롭다운]이 휴지통으로 이동되었습니다.',
        variant: 'peach',
        icon: 'trash',
        duration: 6000,
        actionLabel: '실행 취소 (Undo)',
        onAction: () => {
          window.triggerPaperToast('삭제되었던 컴포넌트가 복원되었습니다!', 'mint', 'check');
        }
      });
    });

    // Dismiss Alert Demo buttons
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
