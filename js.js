function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

const event = new CustomEvent("setCustomConfig")
window.productsGrid = 4;
window.currency = 'руб'
window.monitoring = { id: "42403" };
window.server_connect_1 = "46.174.48.216:28015";
// window.server_connect_2 = "46.174.54.152:20510";
window.promo_copy_start = "RLMSTART";
window.widget_discord_link = "taSEdyTyNg";
window.dispatchEvent(event);

const menuConfig = [
    { title: 'Магазин', path: '/', icon: 'shop' },
    { title: 'Банлист', path: '/page/banlist', icon: 'banlist' },
  	{ title: 'Правила', path: '/page/rules', icon: 'rules' },
  	{ title: 'Контакты', path: '/page/contacts', icon: 'stats' }
  ];

  const iconMap = {
    shop: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="sidebar-icon"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" /></svg>',
    banlist: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="sidebar-icon"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" /></svg>',
    rules: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="sidebar-icon"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>',
    stats: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="sidebar-icon"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" /></svg>'
  };
function DesolateAvatar() {
    window.dispatchEvent(new CustomEvent("initState"));
    window.dispatchEvent(new CustomEvent("initComponentsManager"));

    window.componentsManager.addListener('HEADER', 'DID_MOUNT', () => {
        const { player } = window.getState().player

        if(!player) return

        const userAvatar = `
            <div class="user-avatar">
                <img class="user-avatar-pic" src="${player.avatar}"></img>
            </div>
        `
        const profileLink = document.querySelector('.PlayerMenu-module__profileLink[href="/profile"]')

        profileLink.innerHTML = userAvatar;
    })

    window.componentsManager.load()
}
if(window.isAppReady) {
    DesolateAvatar();
} else {
    window.addEventListener('appReady', () => {
        DesolateAvatar();
  })
}
function DesolateLogin() {
  window.dispatchEvent(new CustomEvent("initState"));
  window.dispatchEvent(new CustomEvent("initComponentsManager"));

  const iconMap = {
    login: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="loginicon"><path d="M395.5 177.5c0 33.8-27.5 61-61 61-33.8 0-61-27.3-61-61s27.3-61 61-61c33.5 0 61 27.2 61 61zm52.5 .2c0 63-51 113.8-113.7 113.8L225 371.3c-4 43-40.5 76.8-84.5 76.8-40.5 0-74.7-28.8-83-67L0 358V250.7L97.2 290c15.1-9.2 32.2-13.3 52-11.5l71-101.7c.5-62.3 51.5-112.8 114-112.8C397 64 448 115 448 177.7zM203 363c0-34.7-27.8-62.5-62.5-62.5-4.5 0-9 .5-13.5 1.5l26 10.5c25.5 10.2 38 39 27.7 64.5-10.2 25.5-39.2 38-64.7 27.5-10.2-4-20.5-8.3-30.7-12.2 10.5 19.7 31.2 33.2 55.2 33.2 34.7 0 62.5-27.8 62.5-62.5zm207.5-185.3c0-42-34.3-76.2-76.2-76.2-42.3 0-76.5 34.2-76.5 76.2 0 42.2 34.3 76.2 76.5 76.2 41.9 .1 76.2-33.9 76.2-76.2z"/></svg>
    `,
  };

  function iconLogin() {
    const buttons = document.querySelectorAll(".PlayerMenu-module__loginLink");

    buttons.forEach(button => {
      const textContent = button.textContent.trim().toLowerCase();
      if (textContent.includes("войти")) {
        const textNode = Array.from(button.childNodes).find(node => node.nodeType === Node.TEXT_NODE);
        if (textNode) {
          textNode.textContent = "Авторизация";
        }
      }

      const buttonContent = document.createElement("div");
      buttonContent.className = "login-button-content";
      buttonContent.innerHTML = `${iconMap.login} <span>Авторизация</span>`;

      button.innerHTML = '';
      button.appendChild(buttonContent);
    });
  }

  const checkForLoginButtons = () => {
    const buttons = document.querySelectorAll(".PlayerMenu-module__loginLink");
    if (buttons.length > 0) {
      iconLogin();
      if (intervalId) clearInterval(intervalId);
      intervalId = null;
    }
  };

  let intervalId = setInterval(checkForLoginButtons, 250);

  if (window.componentsManager) {
    window.componentsManager.addListener("HEADER", "DID_MOUNT", () => {
      checkForLoginButtons();
      clearInterval(intervalId);
    });
  }

  if (window.componentsManager && typeof window.componentsManager.load === "function") {
    window.componentsManager.load();
  }
}

if (window.isAppReady) {
  DesolateLogin();
} else {
  window.addEventListener("appReady", () => {
    DesolateLogin();
  });
}
function DezolateBalance() {
  window.dispatchEvent(new CustomEvent("initState"));
  window.dispatchEvent(new CustomEvent("initComponentsManager"));

  function iconbalance() {
    const buttons = document.querySelectorAll(".PlayerBalance-module__wrapper button");
    const settings = [
      {
        id: "balance-icon",
      },
    ];

    buttons.forEach((button, index) => {
      const span = button.querySelector("span");
      if (span && span.textContent.includes("Баланс:")) {
        span.textContent = span.textContent.replace("Баланс:", "").trim();
      }

      if (index < settings.length && !button.querySelector(`#${settings[index].id}`)) {
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("id", settings[index].id);
        svg.setAttribute("viewBox", "0 0 24 24");
        svg.setAttribute("fill", "none");
        svg.setAttribute("stroke-width", "1.5");
        svg.setAttribute("stroke", "currentColor");
        svg.classList.add("balance-icon");

        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute("stroke-linecap", "round");
        path.setAttribute("stroke-linejoin", "round");
        path.setAttribute("d", "M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z");
        svg.appendChild(path);

        const buttonContent = document.createElement("div");
        buttonContent.appendChild(svg);
        button.appendChild(buttonContent);
      }
    });
  }

  const checkForButtons = () => {
    const buttons = document.querySelectorAll(".PlayerBalance-module__wrapper button");
    if (buttons.length > 0) {
      iconbalance();
      if (intervalId) clearInterval(intervalId);
      intervalId = null;
    }
  };

  let intervalId = setInterval(checkForButtons, 250);

  window.componentsManager.addListener("HEADER", "DID_MOUNT", checkForButtons);

  window.componentsManager.load();
}

if (window.isAppReady) {
  DezolateBalance();
} else {
  window.addEventListener("appReady", () => {
    DezolateBalance();
  });
}
(function () {
  let isLogotypeCreated = false;

  function createLogotype() {
    if (isLogotypeCreated) return;
    const headerWrapper = document.querySelector('.Header-module__wrapper');
    if (!headerWrapper) {
      requestAnimationFrame(createLogotype);
      return;
    }
    if (!headerWrapper.querySelector('.Header-module_Logotype')) {
      const logotype = document.createElement('div');
      logotype.className = 'Header-module_Logotype';
      logotype.innerHTML = `
        <a href="/"><div class="Header-module_Logotype-img"></div></a>
        <div class="Header-module_Logotype-text">
          <span class="Header-module_Logotype-text-title">Realm Rust</span>
          <span class="Header-module_Logotype-text-desc">Игровой магазин</span>
        </div>
		<div class="total_online">
			<span class="total_online_text">Общий онлайнчик:</span>
			<span id="mon_online_players_total"></span>
		</div>
      `;
      headerWrapper.prepend(logotype);
      isLogotypeCreated = true;
    }
  }

  function startLogotype() {
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
      createLogotype();
    } else {
      document.addEventListener('DOMContentLoaded', createLogotype);
    }
    if (!window.logotypeObserver) {
      const debouncedCreate = debounce(() => {
        if (!isLogotypeCreated) {
          createLogotype();
        }
      }, 200);
      
      window.logotypeObserver = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
          if (mutation.addedNodes.length > 0) {
            debouncedCreate();
            break;
          }
        }
      });
      const headerContainer = document.querySelector('.Header-module__wrapper') || document.body;
      window.logotypeObserver.observe(headerContainer.parentElement || headerContainer, { childList: true, subtree: false });
    }
  }

  if (window.isAppReady) {
    startLogotype();
  } else {
    window.addEventListener('appReady', startLogotype);
  }
})();

(function () {
  function moveCategoriesToSidebar() {
    const categoriesDiv = document.querySelector('.Categories-module__categories');
    const sidebar = document.querySelector('.sidebar');
    if (!categoriesDiv || !sidebar) {
      requestAnimationFrame(moveCategoriesToSidebar);
      return;
    }
    if (!sidebar.contains(categoriesDiv)) {
      sidebar.appendChild(categoriesDiv);
    }
  }

  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    moveCategoriesToSidebar();
  } else {
    document.addEventListener('DOMContentLoaded', moveCategoriesToSidebar);
  }

  if (window.componentsManager && typeof window.componentsManager.addListener === 'function') {
    window.componentsManager.addListener('HEADER', 'DID_MOUNT', moveCategoriesToSidebar);
  }

  if (window.eventsManager && typeof window.eventsManager.addListener === 'function') {
    window.eventsManager.addListener('LOCATION_CHANGED', moveCategoriesToSidebar);
  }

  window.addEventListener('popstate', moveCategoriesToSidebar);
})();

(function () {
  const categoryImageMap = {
    "0": "https://i.postimg.cc/yx8Ngm7x/all.png",
    "535542": "https://i.postimg.cc/YS7ML6xy/prive.png",
    "535543": "https://i.postimg.cc/9fBVdD8L/gun.png",
    "535544": "https://i.postimg.cc/0jzs1c8D/ammo.png",
    "535545": "https://i.postimg.cc/wxrzQ8VL/res.png",
    "535546": "https://i.postimg.cc/9Q5jsdsx/attire.png",
    "535547": "https://i.postimg.cc/3w3QxK84/med.png",
    "535548": "https://i.postimg.cc/50khgLwf/tools.png"
  };

  function addImagesToCategories() {
    const categoriesDiv = document.querySelector('.Categories-module__categories');
    if (!categoriesDiv) {
      setTimeout(addImagesToCategories, 100);
      return;
    }
    const buttons = categoriesDiv.querySelectorAll('button[data-categoryid]');
    buttons.forEach(button => {
      const categoryId = button.dataset.categoryid;
      if (categoryImageMap[categoryId] && !button.querySelector('.category-img')) {
        const img = document.createElement('img');
        img.src = categoryImageMap[categoryId];
        img.className = 'category-img';
        img.alt = '';
        button.prepend(img);
      }
    });
  }

  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    addImagesToCategories();
  } else {
    document.addEventListener('DOMContentLoaded', addImagesToCategories);
  }

  if (window.componentsManager && typeof window.componentsManager.addListener === 'function') {
    window.componentsManager.addListener('HEADER', 'DID_MOUNT', addImagesToCategories);
  }

  if (window.eventsManager && typeof window.eventsManager.addListener === 'function') {
    window.eventsManager.addListener('LOCATION_CHANGED', addImagesToCategories);
  }

  window.addEventListener('popstate', addImagesToCategories);
})();

(function () {
  function moveProfileNavToSidebar() {
    const profileNav = document.querySelector('.ProfileNav-module__wrapper');
    const sidebar = document.querySelector('.sidebar');
    const sidebarMenu = sidebar ? sidebar.querySelector('.sidebar-menu') : null;
    if (!profileNav || !sidebar || !sidebarMenu) {
      requestAnimationFrame(moveProfileNavToSidebar);
      return;
    }

    const boxFooter = profileNav.querySelector('.boxFooter');
    const logOutButton = boxFooter ? boxFooter.querySelector('.Button-module__btn.ProfileNav-module__logOut.Button-module__accent') : null;
    const profileBody = profileNav.querySelector('.ProfileNav-module__body.boxBody');
    if (boxFooter && logOutButton && profileBody) {
      profileBody.insertAdjacentElement('afterend', logOutButton);
      boxFooter.remove();
    }

    if (!sidebar.contains(profileNav)) {
      sidebar.insertBefore(profileNav, sidebarMenu);
    }
  }

  if (window.componentsManager && typeof window.componentsManager.addListener === 'function') {
    window.componentsManager.addListener('PROFILE_PAGE', 'DID_MOUNT', moveProfileNavToSidebar);
  }
})();

(function () {
  function Quadrobber() {
    window.dispatchEvent(new CustomEvent('initEventsManager'));
    window.dispatchEvent(new CustomEvent('initComponentsManager'));

    const processedSpans = new WeakSet();
    function formatPrices() {
      if (!document.body) {
        requestAnimationFrame(formatPrices);
        return;
      }
      const priceSpans = document.querySelectorAll('span[class*="Product-module__price"] > span:not(.Product-module__oldPrice)');
      priceSpans.forEach(span => {
        if (processedSpans.has(span)) return;
        const match = span.textContent.match(/(\d+\.\d+)\s*руб/);
        if (match) {
          const newValue = Math.floor(parseFloat(match[1]));
          if (span.textContent !== `${newValue} руб`) {
            span.innerHTML = span.innerHTML.replace(match[1], newValue);
            processedSpans.add(span);
          }
        }
      });

      const totalAmountInput = document.querySelector('input#totalAmount');
      if (totalAmountInput) {
        const match = totalAmountInput.value.match(/(\d+\.\d+)/);
        if (match) {
          const newValue = Math.floor(parseFloat(match[1]));
          if (totalAmountInput.value !== String(newValue)) {
            totalAmountInput.value = newValue;
          }
        }
      }
    }

    function observeModal() {
      let totalAmountInput = null;
      const handleMutation = debounce(() => {
        if (!totalAmountInput) {
          totalAmountInput = document.querySelector('input#totalAmount');
        }
        if (totalAmountInput) {
          const match = totalAmountInput.value.match(/(\d+\.\d+)/);
          if (match) {
            totalAmountInput.value = Math.floor(parseFloat(match[1]));
          }
        }
      }, 150);

      const observer = new MutationObserver((mutations) => {
        let shouldCheck = false;
        for (const mutation of mutations) {
          if (mutation.type === 'attributes' && mutation.attributeName === 'value') {
            shouldCheck = true;
            break;
          }
          if (mutation.type === 'childList' && mutation.target.querySelector && mutation.target.querySelector('input#totalAmount')) {
            totalAmountInput = null;
            shouldCheck = true;
            break;
          }
        }
        if (shouldCheck) {
          handleMutation();
        }
      });
      
      const modalContainer = document.querySelector('.ModalLayout-module__modal') || document.body;
      observer.observe(modalContainer, { childList: true, subtree: true, attributes: true, attributeFilter: ['value'] });
    }

    const checkForDomReady = () => {
      if (document.body) {
        observeModal();
        formatPrices();
        if (intervalId) clearInterval(intervalId);
        intervalId = null;
      }
    };

    let intervalId = null;
    if (document.body) {
      checkForDomReady();
    } else {
      intervalId = setInterval(checkForDomReady, 250);
      document.addEventListener('DOMContentLoaded', checkForDomReady, { once: true });
    }

    window.eventsManager.load();

    if (window.componentsManager && typeof window.componentsManager.addListener === 'function') {
      window.componentsManager.addListener('PRODUCTS', 'DID_MOUNT', formatPrices);
      window.componentsManager.addListener('ITEM_PRODUCT_MODAL', 'DID_MOUNT', formatPrices);
      window.componentsManager.addListener('KIT_PRODUCT_MODAL', 'DID_MOUNT', formatPrices);
      window.componentsManager.addListener('DROPDOWN_PRODUCT_MODAL', 'DID_MOUNT', formatPrices);
    }

    if (window.eventsManager && typeof window.eventsManager.addListener === 'function') {
      window.eventsManager.addListener('LOCATION_CHANGED', formatPrices);
    }

    window.addEventListener('popstate', formatPrices);
  }

  if (window.isAppReady) {
    Quadrobber();
  } else {
    window.addEventListener('appReady', Quadrobber);
  }
})();

(function () {
  function hideFirstThreeProducts() {
    const productsWrapper = document.querySelector('.Products-module__wrapper.Products-module__grid5');
    if (!productsWrapper) {
      setTimeout(hideFirstThreeProducts, 100);
      return;
    }

    const products = productsWrapper.querySelectorAll('.Product-module__wrapper');
    for (let i = 0; i < Math.min(3, products.length); i++) {
      products[i].style.display = 'none';
    }
  }

  function showAllProducts() {
    const productsWrapper = document.querySelector('.Products-module__wrapper.Products-module__grid5');
    if (productsWrapper) {
      const products = productsWrapper.querySelectorAll('.Product-module__wrapper');
      products.forEach(product => {
        product.style.display = '';
      });
    }
  }

  function handleLocationChange() {
    if (window.location.pathname === '/' || window.location.pathname.startsWith('/9')) {
      hideFirstThreeProducts();
    } else {
      showAllProducts();
    }
  }

  function handleModalChange() {
    if (document.querySelector('.ProductModal')) {
      hideFirstThreeProducts();
    }
  }

  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    handleLocationChange();
  } else {
    document.addEventListener('DOMContentLoaded', handleLocationChange);
  }

  if (window.componentsManager && typeof window.componentsManager.addListener === 'function') {
    window.componentsManager.addListener('SHOP_PAGE', 'DID_MOUNT', handleLocationChange);
    window.componentsManager.addListener('SHOP_PAGE', 'WILL_UNMOUNT', showAllProducts);
  }

  if (window.eventsManager && typeof window.eventsManager.addListener === 'function') {
    window.eventsManager.addListener('LOCATION_CHANGED', handleLocationChange);
  }

  window.addEventListener('popstate', handleLocationChange);

  const debouncedModalChange = debounce(handleModalChange, 200);
  let modalObserver = null;
  
  const startModalObserver = () => {
    if (modalObserver) return;
    const productsWrapper = document.querySelector('.Products-module__wrapper');
    if (!productsWrapper) return;
    
    modalObserver = new MutationObserver(debouncedModalChange);
    modalObserver.observe(productsWrapper.parentElement || document.body, { childList: true, subtree: false });
  };
  
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    startModalObserver();
  } else {
    document.addEventListener('DOMContentLoaded', startModalObserver);
  }
})();

(function () {
  function AddServerScrollButtons() {
    function createScrollButtons() {
      const serversContainer = document.querySelector('.Servers-module__servers');
      if (!serversContainer) return;

      const existingScrollButtons = serversContainer.parentNode.querySelector('.servers-scroll-buttons');
      if (existingScrollButtons) return;

      const scrollButtons = document.createElement('div');
      scrollButtons.className = 'servers-scroll-buttons';

      const leftButton = document.createElement('button');
      leftButton.className = 'servers-scroll-button servers-scroll-left';
      leftButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" /></svg>';
      leftButton.onclick = () => {
        serversContainer.scrollBy({ left: -200, behavior: 'smooth' });
      };

      const rightButton = document.createElement('button');
      rightButton.className = 'servers-scroll-button servers-scroll-right';
      rightButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>';
      rightButton.onclick = () => {
        serversContainer.scrollBy({ left: 200, behavior: 'smooth' });
      };

      scrollButtons.appendChild(leftButton);
      scrollButtons.appendChild(rightButton);
      serversContainer.parentNode.insertBefore(scrollButtons, serversContainer.nextSibling);
    }

    function observeServersContainer() {
      let serversContainer = document.querySelector('.Servers-module__servers');
      if (!serversContainer) return;
      
      const debouncedCreate = debounce(() => {
        createScrollButtons();
      }, 200);
      
      const observer = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
          if (mutation.addedNodes.length > 0) {
            debouncedCreate();
            break;
          }
        }
      });
      observer.observe(serversContainer.parentElement || serversContainer, { childList: true, subtree: false });
    }

    const checkForDomReady = () => {
      if (document.body) {
        requestAnimationFrame(() => {
          createScrollButtons();
          observeServersContainer();
        });
        if (intervalId) clearInterval(intervalId);
        intervalId = null;
      }
    };

    let intervalId = null;
    if (document.body) {
      checkForDomReady();
    } else {
      intervalId = setInterval(checkForDomReady, 250);
      document.addEventListener('DOMContentLoaded', checkForDomReady, { once: true });
    }

    window.eventsManager.load();

    if (window.componentsManager && typeof window.componentsManager.addListener === 'function') {
      window.componentsManager.addListener('SHOP_PAGE', 'DID_MOUNT', () => {
        requestAnimationFrame(createScrollButtons);
      });
    }

    window.addEventListener('LOCATION_CHANGED', () => {
      if (window.location.pathname === '/' || window.location.pathname === '') {
        requestAnimationFrame(createScrollButtons);
      }
    });
  }

  if (window.isAppReady) {
    AddServerScrollButtons();
  } else {
    window.addEventListener('appReady', () => {
      AddServerScrollButtons();
    });
  }
})();

(function () {
  function AddMonitoringScrollButtons() {
    function createScrollButtons() {
      const monitoringContainer = document.querySelector('.mainbar_monitoring');
      if (!monitoringContainer) return;

      const existingScrollButtons = monitoringContainer.parentNode.querySelector('.monitoring-scroll-buttons');
      if (existingScrollButtons) return;

      const scrollButtons = document.createElement('div');
      scrollButtons.className = 'monitoring-scroll-buttons';

      const leftButton = document.createElement('button');
      leftButton.className = 'monitoring-scroll-button monitoring-scroll-left';
      leftButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" /></svg>';
      leftButton.onclick = () => {
        monitoringContainer.scrollBy({ left: -200, behavior: 'smooth' });
      };

      const rightButton = document.createElement('button');
      rightButton.className = 'monitoring-scroll-button monitoring-scroll-right';
      rightButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>';
      rightButton.onclick = () => {
        monitoringContainer.scrollBy({ left: 200, behavior: 'smooth' });
      };

      scrollButtons.appendChild(leftButton);
      scrollButtons.appendChild(rightButton);
      monitoringContainer.parentNode.insertBefore(scrollButtons, monitoringContainer.nextSibling);
    }

    function observeMonitoringContainer() {
      let monitoringContainer = document.querySelector('.mainbar_monitoring');
      if (!monitoringContainer) return;
      
      const debouncedCreate = debounce(() => {
        createScrollButtons();
      }, 200);
      
      const observer = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
          if (mutation.addedNodes.length > 0) {
            debouncedCreate();
            break;
          }
        }
      });
      observer.observe(monitoringContainer.parentElement || monitoringContainer, { childList: true, subtree: false });
    }

    const checkForDomReady = () => {
      if (document.body) {
        requestAnimationFrame(() => {
          createScrollButtons();
          observeMonitoringContainer();
        });
        if (intervalId) clearInterval(intervalId);
        intervalId = null;
      }
    };

    let intervalId = null;
    if (document.body) {
      checkForDomReady();
    } else {
      intervalId = setInterval(checkForDomReady, 250);
      document.addEventListener('DOMContentLoaded', checkForDomReady, { once: true });
    }

    window.eventsManager.load();

    if (window.componentsManager && typeof window.componentsManager.addListener === 'function') {
      window.componentsManager.addListener('SHOP_PAGE', 'DID_MOUNT', () => {
        requestAnimationFrame(createScrollButtons);
      });
    }

    window.addEventListener('LOCATION_CHANGED', () => {
      if (window.location.pathname === '/' || window.location.pathname === '') {
        requestAnimationFrame(createScrollButtons);
      }
    });
  }

  if (window.isAppReady) {
    AddMonitoringScrollButtons();
  } else {
    window.addEventListener('appReady', () => {
      AddMonitoringScrollButtons();
    });
  }
})();

(function () {
  function CreateProductBuyzone() {
    window.dispatchEvent(new CustomEvent("initEventsManager"));
    window.dispatchEvent(new CustomEvent("initComponentsManager"));

    function createBuyzone() {
      const modal = document.querySelector('.ModalLayout-module__modal.ProductModal-module__command');
      if (!modal) return;

      const header = document.querySelector('.ProductModal-module__header.boxHeader');
      const footer = document.querySelector('.ItemContent-module__footer.boxFooter');
      if (!header || !footer) return;

      const existingZone = modal.querySelector('.product_zone');
      if (existingZone) return;

      const img = document.querySelector('img.productModalImg');
      const form = document.querySelector('form.ProductModal-module__form');
      const giveText = document.querySelector('span.productModalGiveText');
      const button = footer ? footer.querySelector('.Button-module__btn.Button-module__accent') : null;
      const closeButton = footer ? footer.querySelector('.Button-module__btn.Button-module__gray') : null;
      if (!img || !form || !giveText || !button || !closeButton) return;

      const boxBody = modal.querySelector('.boxBody');
      const productModalDescription = boxBody ? boxBody.querySelector('.productModalDescription') : null;

      if (boxBody) boxBody.remove();

      button.textContent = 'Купить';
      closeButton.textContent = '✕';

      footer.insertBefore(header, footer.firstChild);

      const zone = document.createElement('div');
      zone.className = 'product_zone';

      zone.appendChild(footer);

      const buyzone = document.createElement('div');
      buyzone.className = 'product_buyzone';

      const buyzoneBuy = document.createElement('div');
      buyzoneBuy.className = 'product_buyzone_buy';

      const buyzoneBuys = document.createElement('div');
      buyzoneBuys.className = 'product_buyzone_buys';

      const giveIcon = document.createElement('div');
      giveIcon.className = 'GiveIcon';
      giveIcon.innerHTML = '<svg width="21" height="21" class="productModalGiveTextIcon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 14V10.5M12 7H12.01M9.9 19.2L11.36 21.1467C11.5771 21.4362 11.6857 21.5809 11.8188 21.6327C11.9353 21.678 12.0647 21.678 12.1812 21.6327C12.3143 21.5809 12.4229 21.4362 12.64 21.1467L14.1 19.2C14.3931 18.8091 14.5397 18.6137 14.7185 18.4645C14.9569 18.2656 15.2383 18.1248 15.5405 18.0535C15.7671 18 16.0114 18 16.5 18C17.8978 18 18.5967 18 19.1481 17.7716C19.8831 17.4672 20.4672 16.8831 20.7716 16.1481C21 15.5967 21 14.8978 21 13.5V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V13.5C3 14.8978 3 15.5967 3.22836 16.1481C3.53284 16.8831 4.11687 17.4672 4.85195 17.7716C5.40326 18 6.10218 18 7.5 18C7.98858 18 8.23287 18 8.45951 18.0535C8.76169 18.1248 9.04312 18.2656 9.2815 18.4645C9.46028 18.6137 9.60685 18.8091 9.9 19.2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

      buyzone.appendChild(img);
      buyzone.appendChild(buyzoneBuys);

      buyzoneBuys.appendChild(form);
      buyzoneBuys.appendChild(button);

      buyzoneBuy.appendChild(giveText);
      buyzoneBuy.appendChild(giveIcon);

      zone.appendChild(buyzone);
      zone.appendChild(buyzoneBuy);

      if (productModalDescription) {
        zone.appendChild(productModalDescription);
      }

      modal.appendChild(zone);
    }

    function observeModal() {
      const debouncedCreate = debounce(() => {
        createBuyzone();
      }, 200);
      
      const observer = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
          for (const node of mutation.addedNodes) {
            if (node.nodeType === 1 && (node.classList?.contains('ModalLayout-module__modal') || node.querySelector?.('.ModalLayout-module__modal.ProductModal-module__command'))) {
              debouncedCreate();
              return;
            }
          }
        }
      });
      
      const modalRoot = document.querySelector('.ModalLayout-module__wrapper') || document.body;
      observer.observe(modalRoot, { childList: true, subtree: true });
    }

    const checkForDomReady = () => {
      if (document.body) {
        requestAnimationFrame(() => {
          createBuyzone();
          observeModal();
        });
        if (intervalId) clearInterval(intervalId);
        intervalId = null;
      }
    };

    let intervalId = null;
    if (document.body) {
      checkForDomReady();
    } else {
      intervalId = setInterval(checkForDomReady, 250);
      document.addEventListener('DOMContentLoaded', checkForDomReady, { once: true });
    }

    window.eventsManager.load();

    if (window.componentsManager && typeof window.componentsManager.addListener === 'function') {
      window.componentsManager.addListener('ITEM_PRODUCT_MODAL', 'DID_MOUNT', () => {
        createBuyzone();
      });
    }

    window.addEventListener('LOCATION_CHANGED', () => {
      if (window.location.pathname.startsWith('/8')) {
        requestAnimationFrame(createBuyzone);
      }
    });
  }

  if (window.isAppReady) {
    CreateProductBuyzone();
  } else {
    window.addEventListener('appReady', () => {
      CreateProductBuyzone();
    });
  }
})();

(function () {
  function CreateDropdownProductZone() {
    window.dispatchEvent(new CustomEvent("initEventsManager"));
    window.dispatchEvent(new CustomEvent("initComponentsManager"));

    function createDropdownZone() {
      const dropdownModal = document.querySelector('.ModalLayout-module__modal.ProductModal-module__dropdown');
      if (!dropdownModal) return;

      const dropdownHeader = dropdownModal.querySelector('.ProductModal-module__header.boxHeader');
      if (!dropdownHeader) return;

      const existingDropdownZone = dropdownModal.querySelector('.dropdown_product_zone');
      if (existingDropdownZone) return;

      const dropdownImg = dropdownModal.querySelector('img.productModalImg');
      const dropdownForm = dropdownModal.querySelector('form.ProductModal-module__form');
      const dropdownGiveText = dropdownModal.querySelector('span.productModalGiveText');
      const footer = dropdownModal.querySelector('.SelectContent-module__footer.boxFooter');
      const dropdownButton = footer ? footer.querySelector('.Button-module__btn.Button-module__accent') : null;
      const closeButton = footer ? footer.querySelector('.Button-module__btn.Button-module__gray') : null;
      const dropdownSelectorWrapper = dropdownModal.querySelector('.SelectContent-module__selectorWrapper');
      if (!dropdownImg || !dropdownForm || !dropdownGiveText || !dropdownButton || !dropdownSelectorWrapper || !closeButton || !footer) return;

      const boxBody = dropdownModal.querySelector('.boxBody');
      if (boxBody) boxBody.remove();

      const productLabel = dropdownSelectorWrapper.querySelector('.ProductItemSelector-module__label');
      const productItems = dropdownSelectorWrapper.querySelector('.ProductItemSelector-module__items');
      if (productItems && productLabel.parentNode) {
        productLabel.parentNode.insertBefore(productLabel, productItems.nextSibling);
      }

      dropdownButton.textContent = 'Купить';
      closeButton.textContent = '✕';

      const dropdownZone = document.createElement('div');
      dropdownZone.className = 'dropdown_product_zone';

      dropdownZone.appendChild(footer);

      const dropdownBuyzone = document.createElement('div');
      dropdownBuyzone.className = 'dropdown_buyzone';

      const dropdownBuyzoneBuy = document.createElement('div');
      dropdownBuyzoneBuy.className = 'dropdown_buyzone_buy';

      const dropdownBuyzoneBuys = document.createElement('div');
      dropdownBuyzoneBuys.className = 'dropdown_buyzone_buys';

      dropdownBuyzone.appendChild(dropdownImg);
      dropdownBuyzone.appendChild(dropdownBuyzoneBuys);

      dropdownBuyzoneBuys.appendChild(dropdownHeader);
      dropdownBuyzoneBuys.appendChild(dropdownSelectorWrapper);
      dropdownBuyzoneBuys.appendChild(dropdownForm);
      dropdownBuyzoneBuys.appendChild(dropdownButton);

      dropdownBuyzoneBuy.appendChild(dropdownGiveText);

      dropdownZone.appendChild(dropdownBuyzone);
      dropdownZone.appendChild(dropdownBuyzoneBuy);

      dropdownModal.appendChild(dropdownZone);
    }

    function observeDropdownModal() {
      const debouncedCreate = debounce(() => {
        createDropdownZone();
      }, 200);
      
      const observer = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
          for (const node of mutation.addedNodes) {
            if (node.nodeType === 1 && (node.classList?.contains('ProductModal-module__dropdown') || node.querySelector?.('.ModalLayout-module__modal.ProductModal-module__dropdown'))) {
              debouncedCreate();
              return;
            }
          }
        }
      });
      
      const modalRoot = document.querySelector('.ModalLayout-module__wrapper') || document.body;
      observer.observe(modalRoot, { childList: true, subtree: true });
    }

    const checkForDropdownDomReady = () => {
      if (document.body) {
        requestAnimationFrame(() => {
          createDropdownZone();
          observeDropdownModal();
        });
        if (dropdownIntervalId) clearInterval(dropdownIntervalId);
        dropdownIntervalId = null;
      }
    };

    let dropdownIntervalId = null;
    if (document.body) {
      checkForDropdownDomReady();
    } else {
      dropdownIntervalId = setInterval(checkForDropdownDomReady, 250);
      document.addEventListener('DOMContentLoaded', checkForDropdownDomReady, { once: true });
    }

    window.eventsManager.load();

    if (window.componentsManager && typeof window.componentsManager.addListener === 'function') {
      window.componentsManager.addListener('ITEM_PRODUCT_MODAL', 'DID_MOUNT', () => {
        setTimeout(createDropdownZone, 100);
      });
    }

    window.addEventListener('LOCATION_CHANGED', () => {
      if (window.location.pathname.startsWith('/8')) {
        requestAnimationFrame(createDropdownZone);
      }
    });
  }

  if (window.isAppReady) {
    CreateDropdownProductZone();
  } else {
    window.addEventListener('appReady', () => {
      CreateDropdownProductZone();
    });
  }
})();

(function () {
  function CreateItemProductBuyzone() {
    window.dispatchEvent(new CustomEvent("initEventsManager"));
    window.dispatchEvent(new CustomEvent("initComponentsManager"));

    function createItemBuyzone() {
      const itemModal = document.querySelector('.ModalLayout-module__modal.ProductModal-module__item');
      if (!itemModal) return;

      const itemHeader = itemModal.querySelector('.ProductModal-module__header.boxHeader');
      const itemImg = itemModal.querySelector('img.productModalImg');
      const itemForm = itemModal.querySelector('form.ProductModal-module__form');
      const itemGiveText = itemModal.querySelector('span.productModalGiveText');
      const itemFooter = itemModal.querySelector('.ItemContent-module__footer.boxFooter');
      const itemBuyButton = itemFooter ? itemFooter.querySelector('.Button-module__btn.Button-module__accent') : null;
      const itemCloseButton = itemFooter ? itemFooter.querySelector('.Button-module__btn.Button-module__gray') : null;
      if (!itemHeader || !itemImg || !itemForm || !itemGiveText || !itemBuyButton || !itemCloseButton || !itemFooter) return;

      const existingItemZone = itemModal.querySelector('.item_product_buyzone');
      if (existingItemZone) return;

      itemBuyButton.textContent = 'Купить';
      itemCloseButton.textContent = '✕';

      const itemZone = document.createElement('div');
      itemZone.className = 'item_product_buyzone';

      const itemBuyzoneBuy = document.createElement('div');
      itemBuyzoneBuy.className = 'item_product_buyzone_buy';

      const itemBuyzoneInner = document.createElement('div');
      itemBuyzoneInner.className = 'item_product_buyzone_inner';

      const itemBuyzoneBuys = document.createElement('div');
      itemBuyzoneBuys.className = 'item_product_buyzone_buys';

      itemBuyzoneInner.appendChild(itemImg);
      itemBuyzoneInner.appendChild(itemBuyzoneBuys);

      itemBuyzoneBuys.appendChild(itemHeader);
      itemBuyzoneBuys.appendChild(itemForm);
      itemBuyzoneBuys.appendChild(itemBuyButton);

      itemBuyzoneBuy.appendChild(itemGiveText);
      itemBuyzoneBuy.appendChild(itemFooter);

      itemZone.appendChild(itemBuyzoneBuy);
      itemZone.appendChild(itemBuyzoneInner);

      const boxBody = itemModal.querySelector('.boxBody');
      if (boxBody) boxBody.remove();

      itemModal.appendChild(itemZone);
    }

    function observeItemModal() {
      const debouncedCreate = debounce(() => {
        createItemBuyzone();
      }, 200);
      
      const observer = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
          for (const node of mutation.addedNodes) {
            if (node.nodeType === 1 && (node.classList?.contains('ProductModal-module__item') || node.querySelector?.('.ModalLayout-module__modal.ProductModal-module__item'))) {
              debouncedCreate();
              return;
            }
          }
        }
      });
      
      const modalRoot = document.querySelector('.ModalLayout-module__wrapper') || document.body;
      observer.observe(modalRoot, { childList: true, subtree: true });
    }

    const checkForItemDomReady = () => {
      if (document.body) {
        requestAnimationFrame(() => {
          createItemBuyzone();
          observeItemModal();
        });
        if (itemIntervalId) clearInterval(itemIntervalId);
        itemIntervalId = null;
      }
    };

    let itemIntervalId = null;
    if (document.body) {
      checkForItemDomReady();
    } else {
      itemIntervalId = setInterval(checkForItemDomReady, 250);
      document.addEventListener('DOMContentLoaded', checkForItemDomReady, { once: true });
    }

    window.eventsManager.load();

    if (window.componentsManager && typeof window.componentsManager.addListener === 'function') {
      window.componentsManager.addListener('ITEM_PRODUCT_MODAL', 'DID_MOUNT', () => {
        setTimeout(createItemBuyzone, 100);
      });
    }

    window.addEventListener('LOCATION_CHANGED', () => {
      if (window.location.pathname === '/' || window.location.pathname.startsWith('/8')) {
        requestAnimationFrame(createItemBuyzone);
      }
    });
  }

  if (window.isAppReady) {
    CreateItemProductBuyzone();
  } else {
    window.addEventListener('appReady', CreateItemProductBuyzone);
  }
})();
(function () {
  function addPrivilegiesGrid() {
    if (window.location.pathname !== '/' && !window.location.pathname.startsWith('/9')) return;

    const productsWrapper = document.querySelector('.Products-module__wrapper.Products-module__grid5');
    const searchWrapper = document.querySelector('.Search-module__wrapper');
    if (!productsWrapper || !searchWrapper || !searchWrapper.parentElement) {
      requestAnimationFrame(addPrivilegiesGrid);
      return;
    }

    if (!searchWrapper.parentElement.querySelector('.privilegies_grid')) {
      const privilegiesGrid = document.createElement('div');
      privilegiesGrid.className = 'privilegies_grid';
      privilegiesGrid.innerHTML = `
        <h3 class="privilegies_grid_title">Привилегии</h3>
        <p class="privilegies_grid_description">Эксклюзивные привилегии для улучшения игрового опыта!</p>
        <div class="privilegies_grid__items">
          <div class="privilegies_grid__item">
            <div class="privilegies_grid__item_content" data-productid="9341620" role="button" tabindex="0">
              <div class="privilegies_grid__item_1"><img class="privilegies_grid__item_img" src="https://i.postimg.cc/rF0HtK49/image.png" alt="Desolate"></div>
              <div class="privilegies_grid__item_2">
                <h3>MASTER</h3>
                <p>от 350 рублей</p>
                <a href="/9341620" class="privilegies_grid__button">Подробнее</a>
              </div>
            </div>
          </div>
          <div class="privilegies_grid__item">
            <div class="privilegies_grid__item_content" data-productid="9341619" role="button" tabindex="0">
              <div class="privilegies_grid__item_1"><img class="privilegies_grid__item_img" src="https://i.postimg.cc/7LsddCS1/image.png" alt="Desolate"></div>
              <div class="privilegies_grid__item_2">
                <h3>умелый</h3>
                <p>от 300 рублей</p>
                <a href="/9341619" class="privilegies_grid__button">Подробнее</a>
              </div>
            </div>
          </div>
          <div class="privilegies_grid__item">
            <div class="privilegies_grid__item_content" data-productid="9341618" role="button" tabindex="0">
              <div class="privilegies_grid__item_1"><img class="privilegies_grid__item_img" src="https://i.postimg.cc/jdx3NVG5/image.png" alt="Desolate"></div>
              <div class="privilegies_grid__item_2">
                <h3>ОХОТНИК</h3>
                <p>от 200 рублей</p>
                <a href="/9341618" class="privilegies_grid__button">Подробнее</a>
              </div>
            </div>
          </div>
        </div>
      `;
      searchWrapper.parentElement.insertBefore(privilegiesGrid, searchWrapper.nextSibling);

      const items = privilegiesGrid.querySelectorAll('.privilegies_grid__item_content');
      items.forEach(item => {
        item.addEventListener('click', (event) => {
          event.preventDefault();
          const productId = item.getAttribute('data-productid');
          const productElement = document.querySelector(`.Product-module__wrapper[data-productid="${productId}"]`);
          if (productElement) {
            productElement.click();
          } else {
            console.error('Product element not found for ID:', productId);
          }
        });
      });
    }
  }

  function removePrivilegiesGrid() {
    const privilegiesGrid = document.querySelector('.privilegies_grid');
    if (privilegiesGrid) {
      privilegiesGrid.remove();
    }
  }

  function handleLocationChange() {
    if (window.location.pathname === '/' || window.location.pathname.startsWith('/9')) {
      addPrivilegiesGrid();
    } else {
      removePrivilegiesGrid();
    }
  }

  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    handleLocationChange();
  } else {
    document.addEventListener('DOMContentLoaded', handleLocationChange);
  }

  if (window.componentsManager && typeof window.componentsManager.addListener === 'function') {
    window.componentsManager.addListener('SHOP_PAGE', 'DID_MOUNT', handleLocationChange);
    window.componentsManager.addListener('SHOP_PAGE', 'WILL_UNMOUNT', removePrivilegiesGrid);
  }

  if (window.eventsManager && typeof window.eventsManager.addListener === 'function') {
    window.eventsManager.addListener('LOCATION_CHANGED', handleLocationChange);
  }
  window.addEventListener('popstate', handleLocationChange);
})();
(function () {
  let isSidebarCreated = false;

  function createSidebar() {
    if (isSidebarCreated) return;
    const selectors = ['main.container.Index-module__wrapper', 'main.container.CustomPage-module__wrapper', 'main.container.Profile-module__wrapper', 'main.container.ProfileBasket-module__wrapper', 'main.container.ProfileHistory-module__wrapper'];
    let wrapper = null;
    for (const selector of selectors) {
      wrapper = document.querySelector(selector);
      if (wrapper) break;
    }
    if (!wrapper) {
      setTimeout(createSidebar, 100);
      return;
    }
    if (!wrapper.querySelector('.sidebar')) {
      const sidebar = document.createElement('div');
      sidebar.className = 'sidebar';
      const menu = document.createElement('nav');
      menu.className = 'sidebar-menu';
      const ul = document.createElement('ul');
      menuConfig.forEach(item => {
        const li = document.createElement('li');
        li.className = 'sidebar__menu-item';
        const icon = iconMap[item.icon] || '';
        li.innerHTML = `<a href="${item.path}" data-path="${item.path}">${icon}${item.title}</a>`;
        const link = li.querySelector('a');
        link.addEventListener('click', (e) => {
          e.preventDefault();
          navigateTo(item.path);
        });
        ul.appendChild(li);
      });
      menu.appendChild(ul);
      sidebar.appendChild(menu);

      const categoriesTitle = document.createElement('h2');
      categoriesTitle.className = 'categories-title';
      categoriesTitle.textContent = 'Категории';
      categoriesTitle.style.display = window.location.pathname === '/' ? 'block' : 'none';
      sidebar.appendChild(categoriesTitle);

      wrapper.prepend(sidebar);
      isSidebarCreated = true;
      updateActiveMenuItem(window.location.pathname || '/');
    }
  }

  function navigateTo(path) {
    const normalizedPath = path.startsWith('/') ? path : `/${path}`;
    window.history.pushState({}, '', normalizedPath);
    window.dispatchEvent(new CustomEvent('LOCATION_CHANGED', { detail: { path: normalizedPath } }));
    window.dispatchEvent(new PopStateEvent('popstate', { state: {} }));
  }

  function updateActiveMenuItem(currentPath) {
    const normalizedCurrentPath = (currentPath || '/').startsWith('/') ? currentPath || '/' : `/${currentPath || ''}`;
    const menuLinks = document.querySelectorAll('.sidebar__menu-item a');
    menuLinks.forEach(link => {
      const linkPath = link.getAttribute('data-path');
      const isActive = linkPath === normalizedCurrentPath || (linkPath === '/' && normalizedCurrentPath === '');
      link.classList.toggle('active', isActive);
    });

    const categoriesTitle = document.querySelector('.categories-title');
    if (categoriesTitle) {
      categoriesTitle.style.display = normalizedCurrentPath === '/' ? 'block' : 'none';
    }
  }

  function startSidebar() {
    window.dispatchEvent(new CustomEvent('initEventsManager'));
    window.dispatchEvent(new CustomEvent('initComponentsManager'));
    if (document.body) {
      createSidebar();
      updateActiveMenuItem(window.location.pathname || '/');
    }
    if (window.componentsManager && typeof window.componentsManager.addListener === 'function') {
      window.componentsManager.addListener('HEADER', 'DID_MOUNT', () => {
        isSidebarCreated = false;
        createSidebar();
      });
      window.componentsManager.addListener('SHOP_PAGE', 'DID_MOUNT', () => {
        isSidebarCreated = false;
        createSidebar();
        updateActiveMenuItem(window.location.pathname || '/');
      });
    }
    window.eventsManager?.addListener?.('LOCATION_CHANGED', (data) => {
      isSidebarCreated = false;
      createSidebar();
      updateActiveMenuItem(data.path || window.location.pathname || '/');
    });
    window.addEventListener('popstate', () => {
      isSidebarCreated = false;
      createSidebar();
      updateActiveMenuItem(window.location.pathname || '/');
    });
  }

  if (window.isAppReady) {
    startSidebar();
  } else {
    window.addEventListener('appReady', startSidebar);
  }
})();
(function () {
  let swiperInstance = null;

  function addSlider() {
    if (window.location.pathname !== '/' && !window.location.pathname.startsWith('/9')) return;

    const headerContainer = document.querySelector('div.container.headerContainer');
    const mainContainer = document.querySelector('section.mainbar');
    if (!headerContainer || !mainContainer || !mainContainer.parentElement) {
      requestAnimationFrame(addSlider);
      return;
    }

    if (!mainContainer.parentElement.querySelector('.swiper')) {
      const sliderContainer = document.createElement('div');
      sliderContainer.className = 'swiper';
      sliderContainer.innerHTML = `
        <div class="swiper-wrapper">
		  <div class="swiper-slide discord_stats">
		  	<div class="discord_stats_container">
				<h1>Присоединяйся к нашему <span>Discord</span></h1>
				<div class="discord_stats_container_counters">
					<div class="discord_stats_counters_members">
						<h3>Всего участников</h3>
						<div class="counter_members">0</div>
					</div>
					<div class="discord_stats_counters_online">
						<h3>В сети</h3>
						<div class="counter_online">0</div>
					</div>
				</div>
				<a href="https://discord.gg/taSEdyTyNg" target="_blank" class="go_discord">Присоединиться</a>
			</div>
		  </div>
        </div>
        <div class="swiper-pagination"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      `;
      mainContainer.parentElement.insertBefore(sliderContainer, mainContainer);

      swiperInstance = new Swiper('.swiper', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-prev',
          prevEl: '.swiper-button-next'
        },
        autoplay: {
          delay: 10000,
          disableOnInteraction: false
        }
      });
    }
  }

  function removeSlider() {
    const sliderContainer = document.querySelector('.swiper');
    if (sliderContainer) {
      if (swiperInstance) {
        swiperInstance.destroy(true, true);
        swiperInstance = null;
      }
      sliderContainer.remove();
    }
  }

  function handleLocationChange() {
    if (window.location.pathname === '/' || window.location.pathname.startsWith('/9')) {
      addSlider();
    } else {
      removeSlider();
    }
  }

  const loadSwiper = () => {
    if (!document.querySelector('link[href*="swiper-bundle.min.css"]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css';
      document.head.appendChild(link);
    }
    if (typeof Swiper === 'undefined') {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js';
      script.onload = handleLocationChange;
      script.onerror = () => console.error('Failed to load Swiper');
      document.head.appendChild(script);
    } else {
      handleLocationChange();
    }
  };

  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    loadSwiper();
  } else {
    document.addEventListener('DOMContentLoaded', loadSwiper);
  }

  if (window.componentsManager && typeof window.componentsManager.addListener === 'function') {
    window.componentsManager.addListener('HEADER', 'DID_MOUNT', handleLocationChange);
  }

  if (window.componentsManager && typeof window.componentsManager.addListener === 'function') {
    window.componentsManager.addListener('HEADER', 'WILL_UNMOUNT', removeSlider);
  }

  if (window.eventsManager && typeof window.eventsManager.addListener === 'function') {
    window.eventsManager.addListener('LOCATION_CHANGED', handleLocationChange);
  }
  window.addEventListener('popstate', handleLocationChange);
})();
(function () {
  function AddMainbarSection() {
    let isMainbarCreated = false;

    function createMainbarSection() {
      if (isMainbarCreated) return;
      const selectors = ['main.container.Index-module__wrapper', 'main.container.CustomPage-module__wrapper', 'main.container.Profile-module__wrapper'];
      let mainContainer = null;
      for (const selector of selectors) {
        mainContainer = document.querySelector(selector);
        if (mainContainer) break;
      }
      if (!mainContainer) return;

      const existingMainbar = document.querySelector('.mainbar');
      if (existingMainbar) existingMainbar.remove();

      const mainbarSection = document.createElement('section');
      mainbarSection.className = 'mainbar';

      const mainbarContent = document.createElement('div');
      mainbarContent.className = 'mainbar_content';
      mainbarContent.innerHTML = `
		<div class="mainbar_promo">
			<div class="mainbar_promo_content">
				<div class="mainbar_promo_content_info">
					<h3>Активируй промокод</h3>
					<p>И получи приятный бонус!</p>
				</div>
			<div class="promo_main" data="copy_start" onclick="copyPromo(this)">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4">
					<path d="M16.5 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3v-6A4.5 4.5 0 0 1 10.5 6h6Z" />
					<path d="M18 7.5a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-7.5a3 3 0 0 1-3-3v-7.5a3 3 0 0 1 3-3H18Z" />
				</svg>
				Start
			</div>
		</div>
	</div>
		
		<div class="mainbar_monitoring">
			<div class="monitoring_content">
				<div id="progress-42403">
					<svg viewBox="0 0 100 100">
						<circle cx="50" cy="50" r="40" />
						<circle class="progress-circle" cx="50" cy="50" r="40" />
					</svg>
					<span class="players-count">
						<div class="monitoring-loader"></div>
					</span>
				</div>
				<div class="monitoring_info">
					<h3>Realm BUILD</h3>
					<div class="mon_online">
						<div class="mon_online_icons">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="mon-icon">
								<path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z"></path>
							</svg>
						</div>
					<div id="server-42403"></div>
				</div>
				</div>
			</div>
	</div>`;

      mainbarSection.appendChild(mainbarContent);

      const isShopPage = window.location.pathname === '/' || window.location.pathname === '';
      const swiper = document.querySelector('.swiper.swiper-initialized.swiper-horizontal.swiper-backface-hidden');

      if (isShopPage && swiper) {
        if (swiper.nextSibling) {
          swiper.parentNode.insertBefore(mainbarSection, swiper.nextSibling);
        } else {
          swiper.parentNode.appendChild(mainbarSection);
        }
      } else {
        mainContainer.parentNode.insertBefore(mainbarSection, mainContainer);
      }

      isMainbarCreated = true;
    }

    function observeMainContainer() {
      const debouncedCreate = debounce(() => {
        createMainbarSection();
      }, 200);
      
      const observer = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
          for (const node of mutation.addedNodes) {
            if (node.nodeType === 1 && (
              node.classList?.contains('Index-module__wrapper') ||
              node.classList?.contains('CustomPage-module__wrapper') ||
              node.classList?.contains('Profile-module__wrapper') ||
              node.querySelector?.('main.container')
            )) {
              debouncedCreate();
              return;
            }
          }
        }
      });
      observer.observe(document.body, { childList: true, subtree: false });
    }

    const checkForDomReady = () => {
      if (document.body) {
        requestAnimationFrame(() => {
          createMainbarSection();
          observeMainContainer();
        });
        if (intervalId) clearInterval(intervalId);
        intervalId = null;
      }
    };

    let intervalId = null;
    if (document.body) {
      checkForDomReady();
    } else {
      intervalId = setInterval(checkForDomReady, 250);
      document.addEventListener('DOMContentLoaded', checkForDomReady, { once: true });
    }

    window.eventsManager.load();

    if (window.componentsManager && typeof window.componentsManager.addListener === 'function') {
      window.componentsManager.addListener('HEADER', 'DID_MOUNT', () => {
        isMainbarCreated = false;
        createMainbarSection();
      });
    }

    window.addEventListener('LOCATION_CHANGED', () => {
      isMainbarCreated = false;
      createMainbarSection();
    });
  }

  if (window.isAppReady) {
    AddMainbarSection();
  } else {
    window.addEventListener('appReady', () => {
      AddMainbarSection();
    });
  }
})();
function PageLoader() {
  window.dispatchEvent(new CustomEvent("initEventsManager"));
  window.dispatchEvent(new CustomEvent("initComponentsManager"));

  function createLoader() {
    const loader = document.createElement('div');
    loader.className = 'page-loader';
    document.body.appendChild(loader);
  }

  function showLoader() {
    const loader = document.querySelector('.page-loader');
    if (!loader) return;

    loader.classList.remove('page-loader--complete');
    loader.classList.add('page-loader--active');

    setTimeout(() => {
      completeLoader();
    }, 1000);
  }

  function completeLoader() {
    const loader = document.querySelector('.page-loader');
    if (!loader) return;

    loader.classList.add('page-loader--complete');
    setTimeout(() => {
      loader.classList.remove('page-loader--active');
    }, 500);
  }

  window.eventsManager.addListener('LOCATION_CHANGED', (data) => {
    showLoader();
  });

  const checkForDomReady = () => {
    if (document.body) {
      createLoader();
      showLoader();
      clearInterval(intervalId);
    }
  };

  const intervalId = setInterval(checkForDomReady, 100);

  window.eventsManager.load();
}

if (window.isAppReady) {
  PageLoader();
} else {
  window.addEventListener('appReady', () => {
    PageLoader();
  });
}

(function () {
  function CreatePreloader() {
    window.dispatchEvent(new CustomEvent("initEventsManager"));
    window.dispatchEvent(new CustomEvent("initComponentsManager"));

    function createPreloader() {
      if (document.querySelector('.preloader')) return;

      const preloader = document.createElement('div');
      preloader.className = 'preloader';
      preloader.innerHTML = `
        <div class="preloader-container">
          <img src="https://s10.iimage.su/s/04/th_g2JlfPXxRUFgMajuQmdtjVHrYa87ZIZYG7y02JPTy.png" class="preloader-logo">
          <div class="preloader-dots">
            <span class="preloader-dot"></span>
            <span class="preloader-dot"></span>
            <span class="preloader-dot"></span>
          </div>
          <p class="preloader-text">Загрузка...</p>
        </div>
      `;

      document.body.prepend(preloader);

      setTimeout(() => {
        preloader.classList.add('preloader--fadeout');
        setTimeout(() => {
          removePreloader();
        }, 100);
      }, 1000);
    }

    function removePreloader() {
      const preloader = document.querySelector('.preloader');
      if (preloader) {
        preloader.remove();
      }
    }

    const checkForDomReady = () => {
      if (document.body) {
        createPreloader();
        if (intervalId) clearInterval(intervalId);
        intervalId = null;
      }
    };

    let intervalId = null;
    if (document.body) {
      checkForDomReady();
    } else {
      intervalId = setInterval(checkForDomReady, 250);
      document.addEventListener('DOMContentLoaded', checkForDomReady, { once: true });
    }

    window.eventsManager.load();
  }

  CreatePreloader();
})();
(function () {
  function Monitoring() {
    window.dispatchEvent(new CustomEvent('initEventsManager'));
    window.dispatchEvent(new CustomEvent('initComponentsManager'));

    const previousValues = {};
    let monitoringInterval = null;

    function startMonitoringInterval() {
      if (monitoringInterval) {
        clearInterval(monitoringInterval);
      }
      updateMonitoringData();
      monitoringInterval = setInterval(updateMonitoringData, 10000);
    }

    async function updateMonitoringData() {
      if (!window.monitoring || !window.monitoring.id) return;

      const serverIDs = window.monitoring.id.split(',').map(id => Number(id.trim()));

      try {
        const response = await fetch(`https://${window.location.host}/api/v1/widgets.monitoring`);
        const data = await response.json();

        setTimeout(() => {
          if (data.result === 'success' && data.data && data.data.servers) {
            let totalOnline = 0;
            serverIDs.forEach(sID => {
              const server = data.data.servers.find(server => server.id === sID);
              if (server) {
                const players = server.players || 0;
                const playersMax = server.playersMax || 0;
                totalOnline += players;

                const serverElement = document.getElementById(`server-${sID}`);
                const progressElement = document.getElementById(`progress-${sID}`);

                if (serverElement) {
                  const prevPlayers = previousValues[sID] || 0;
                  let animationClass = '';
                  if (prevPlayers < players) {
                    animationClass = 'animate-up';
                  } else if (prevPlayers > players) {
                    animationClass = 'animate-down';
                  }

                  serverElement.innerHTML = `
                    <span class="server-players ${animationClass}">${players}</span> из <span class="server-max">${playersMax}</span> игроков<br>
                  `;

                  if (animationClass) {
                    setTimeout(() => {
                      const playerSpan = serverElement.querySelector('.server-players');
                      if (playerSpan) playerSpan.classList.remove(animationClass);
                    }, 300);
                  }

                  previousValues[sID] = players;
                }
                if (progressElement) {
                  const circumference = 251.2;
                  const progressPercentage = playersMax > 0 ? (players / playersMax) * 100 : 0;
                  const offset = circumference - (progressPercentage / 100) * circumference;
                  const progressCircle = progressElement.querySelector('.progress-circle');
                  if (progressCircle) {
                    progressCircle.style.strokeDashoffset = offset;
                  }
                  const playersCountElement = progressElement.querySelector('.players-count');
                  if (playersCountElement) {
                    playersCountElement.textContent = players;
                  }
                }
              }
            });

            const totalOnlineElement = document.getElementById('mon_online_players_total');
            if (totalOnlineElement) {
              const prevTotal = previousValues.totalOnline || 0;
              let animationClass = '';
              if (prevTotal < totalOnline) {
                animationClass = 'animate-up';
              } else if (prevTotal > totalOnline) {
                animationClass = 'animate-down';
              }

              totalOnlineElement.textContent = totalOnline;
              if (animationClass) {
                totalOnlineElement.classList.add(animationClass);
                setTimeout(() => {
                  totalOnlineElement.classList.remove(animationClass);
                }, 300);
              }

              previousValues.totalOnline = totalOnline;
            }
          }
        }, 100);
      } catch (e) {
        serverIDs.forEach(sID => {
          const serverElement = document.getElementById(`server-${sID}`);
          const progressElement = document.getElementById(`progress-${sID}`);
          if (serverElement) {
            serverElement.innerHTML = '<span style="color: rgb(120 120 120);font-size:13px;">Сервер не отвечает</span>';
          }
          if (progressElement) {
            const progressCircle = progressElement.querySelector('.progress-circle');
            if (progressCircle) {
              progressCircle.style.strokeDashoffset = 251.2;
            }
            const playersCountElement = progressElement.querySelector('.players-count');
            if (playersCountElement) {
              playersCountElement.textContent = '0';
            }
          }
        });
      }
    }

    function checkForMonitoringElements() {
      if (!window.monitoring || !window.monitoring.id) return;

      const serverIDs = window.monitoring.id.split(',').map(id => Number(id.trim()));
      const allElementsFound = serverIDs.every(sID =>
        document.getElementById(`server-${sID}`) &&
        document.getElementById(`progress-${sID}`)
      );

      if (allElementsFound) {
        startMonitoringInterval();
        clearInterval(intervalId);
      }
    }

    document.addEventListener('DOMContentLoaded', () => {
      checkForMonitoringElements();
    });

    const intervalId = setInterval(checkForMonitoringElements, 100);

    if (window.componentsManager && typeof window.componentsManager.addListener === 'function') {
      const handlePageMount = () => {
        startMonitoringInterval();
        clearInterval(intervalId);
      };
      window.componentsManager.addListener('HEADER', 'DID_MOUNT', handlePageMount);
      window.componentsManager.addListener('SHOP_PAGE', 'DID_MOUNT', handlePageMount);
      window.componentsManager.addListener('SUPPORT_PAGE', 'DID_MOUNT', handlePageMount);
      window.componentsManager.addListener('CUSTOM_PAGE', 'DID_MOUNT', handlePageMount);
    }

    window.eventsManager.load();
  }

  if (window.isAppReady) {
    Monitoring();
  } else {
    window.addEventListener('appReady', () => {
      Monitoring();
    });
  }
})();
function Discord() {
    window.dispatchEvent(new CustomEvent("initState"));
    window.dispatchEvent(new CustomEvent("initComponentsManager"));

    let discordInterval = null;

    function startDiscordInterval() {
        if (discordInterval) {
            clearInterval(discordInterval);
        }
        getDiscordStats();
        discordInterval = setInterval(getDiscordStats, 10000);
    }

    function getDiscordStats() {
        const inviteLink = window.widget_discord_link;
        if (!inviteLink) {
            console.error('Неверная ссылка на Discord!');
            return;
        }

        fetch(`https://discord.com/api/v6/invites/${inviteLink}?with_counts=true&with_expiration=true`, {
            method: 'get'
        })
        .then(response => response.json())
        .then(data => {
            const presenceCountElement = document.querySelector('.counter_online');
            const memberCountElement = document.querySelector('.counter_members');
            if (presenceCountElement && memberCountElement) {
                presenceCountElement.textContent = `${data.approximate_presence_count}`;
                memberCountElement.textContent = `${data.approximate_member_count}`;
            } else {
            }
        })
        .catch(error => {
        });
    }

    const checkForStatsElements = () => {
        const presenceCountElement = document.querySelector('.counter_online');
        const memberCountElement = document.querySelector('.counter_members');
        if (presenceCountElement && memberCountElement) {
            getDiscordStats();
            clearInterval(intervalId);
        }
    };

    let intervalId = setInterval(checkForStatsElements, 300);

    const handlePageMount = () => {
        startDiscordInterval();
    };

    window.componentsManager.addListener('SHOP_PAGE', 'DID_MOUNT', handlePageMount);
    window.componentsManager.addListener('SUPPORT_PAGE', 'DID_MOUNT', handlePageMount);
    window.componentsManager.addListener('CUSTOM_PAGE', 'DID_MOUNT', handlePageMount);

    window.componentsManager.load();
}

if (window.isAppReady) {
    Discord();
} else {
    window.addEventListener('appReady', () => {
        Discord();
    });
}
function Banlist() {
    let allData = [];
    let filteredData = [];
    let currentPage = 1;
    let itemsPerPage = 7;
    let isInitialized = false;

    async function fetchData() {
        try {
            const response = await fetch('https://melonrust.eclipsa.ru/api/bans.php');
            if (!response.ok) {
                throw new Error(`HTTP ошибка: ${response.status}`);
            }
            const data = await response.json();
            if (data && data.results && Array.isArray(data.results)) {
                allData = data.results;
                filteredData = [...allData];
                applyFilters();
            } else {
                throw new Error('Данные не содержат списка банов.');
            }
        } catch (error) {
            const errorDiv = document.getElementById('error');
            if (errorDiv) {
                errorDiv.textContent = `Ошибка при загрузке данных: ${error.message}`;
            }
        }
    }

    function applyFilters() {
        const searchSteamIdInput = document.getElementById('searchSteamId');
        const searchSteamId = searchSteamIdInput ? searchSteamIdInput.value.toLowerCase().trim() : '';

        filteredData = allData.filter(ban => {
            let matchesSteamId = true;
            if (searchSteamId) {
                const banSteamId = ban.steam_id.toLowerCase().trim();
                matchesSteamId = banSteamId === searchSteamId;
            }
            return matchesSteamId;
        });

        currentPage = 1;
        renderTable();
    }

    function renderTable() {
        const tbody = document.querySelector('#banComponent');
        if (!tbody) return;
    
        tbody.innerHTML = '';
    
        const start = (currentPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const pageData = filteredData.slice(start, end);
    
        if (filteredData.length === 0) {
            const row = document.createElement('div');
            row.innerHTML = `<div>Ничего не найдено</div>`;
            tbody.appendChild(row);
        } else {
            pageData.forEach(ban => {
                const row = document.createElement('div');
                row.className = 'banTableComponent';
    
                const player = ban.player || {};
                const avatar = player.steam_avatar || 'https://cdn.rustage.su/templates/aza/noavatar.jpg';
                const name = player.steam_name || 'Unknown';
    
                row.innerHTML = `
                    <div class="banUserInfo">
                        <img src="${avatar}" class="banUserAvatar">
                        <div class="banUserDetails">
                            <div class="banUserNickname">${name}</div>
                            <div class="banUserSteamID">${ban.steam_id || 'N/A'}</div>
                        </div>
                    </div>
                    <div class="banTextReason">${ban.reason || 'N/A'}</div>
                    <div class="banTextCreated">${ban.created_at ? new Date(ban.created_at).toLocaleDateString('ru-RU') : 'N/A'}</div>
                    <div class="banTextExpired">${ban.expired_at ? new Date(ban.expired_at).toLocaleDateString('ru-RU') : 'Навсегда'}</div>
                `;
                tbody.appendChild(row);
            });
        }
    
        updatePagination();
        initEventListeners();
    }

    function updatePagination() {
        const totalPages = Math.ceil(filteredData.length / itemsPerPage);
        const pageInfo = document.getElementById('pageInfo');
        const prevButton = document.getElementById('prevPage');
        const nextButton = document.getElementById('nextPage');

        if (pageInfo) {
            pageInfo.textContent = `Страница ${currentPage} из ${totalPages}`;
        }
        if (prevButton) {
            prevButton.disabled = currentPage === 1;
        }
        if (nextButton) {
            nextButton.disabled = currentPage === totalPages || totalPages === 0;
        }
    }

    function handlePrevPage() {
        if (currentPage > 1) {
            currentPage--;
            renderTable();
        }
    }

    function handleNextPage() {
        const totalPages = Math.ceil(filteredData.length / itemsPerPage);
        if (currentPage < totalPages) {
            currentPage++;
            renderTable();
        }
    }

    function initEventListeners() {
        const prevButton = document.getElementById('prevPage');
        const nextButton = document.getElementById('nextPage');
        const searchSteamIdInput = document.getElementById('searchSteamId');

        if (prevButton) {
            prevButton.removeEventListener('click', handlePrevPage);
            prevButton.addEventListener('click', handlePrevPage);
        }

        if (nextButton) {
            nextButton.removeEventListener('click', handleNextPage);
            nextButton.addEventListener('click', handleNextPage);
        }

        if (searchSteamIdInput) {
            searchSteamIdInput.removeEventListener('input', applyFilters);
            searchSteamIdInput.addEventListener('input', applyFilters);
        }
    }

    function initialize() {
        if (isInitialized) return;

        const requiredElements = [
            document.getElementById('banTable'),
            document.getElementById('pageInfo'),
            document.getElementById('prevPage'),
            document.getElementById('nextPage'),
            document.getElementById('searchSteamId')
        ];

        if (requiredElements.every(el => el !== null)) {
            isInitialized = true;
            fetchData();
            initEventListeners();
        }
    }

    const debouncedInit = debounce(() => {
        initialize();
    }, 200);

    const observer = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
            for (const node of mutation.addedNodes) {
                if (node.nodeType === 1 && (
                    node.id === 'banTable' ||
                    node.querySelector?.('#banTable')
                )) {
                    debouncedInit();
                    return;
                }
            }
        }
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

    initialize();

    if (window.componentsManager) {
        window.componentsManager.addListener('CUSTOM_PAGE', 'DID_MOUNT', () => {
            isInitialized = false;
            initialize();
        });
        window.componentsManager.addListener('CUSTOM_PAGE', 'WILL_UNMOUNT', () => {
            isInitialized = false;
            observer.disconnect();
        });
        window.componentsManager.load();
    }

    window.addEventListener('popstate', () => {
        isInitialized = false;
        initialize();
    });
}

document.addEventListener('DOMContentLoaded', () => {
    Banlist();
});

if (typeof window.isAppReady !== 'undefined' && window.isAppReady) {
    Banlist();
} else {
    window.addEventListener('appReady', () => {
        Banlist();
    });
}
var jqueryScript = document.createElement("script");
jqueryScript.addEventListener("load", function () {});
jqueryScript.src = "https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.11/clipboard.min.js";
document.body.append(jqueryScript);

function copyConnect(element) {
  var connectKey = element.getAttribute("data");
  var textToCopy = `connect ${window["server_" + connectKey]}`;

  if (textToCopy && textToCopy !== "connect undefined") {
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        window.dispatchEvent(new CustomEvent("initToastManager"));
        window.addToast(false, "Коннект скопирован. Приятной игры!");
      })
      .catch((err) => {
      });
  } else {
  }
}

function copyPromo(element) {
    var PromoKey = element.getAttribute("data");
    var promoToCopy = `${window["promo_" + PromoKey]}`;

    if (promoToCopy && promoToCopy !== "undefined") {
        navigator.clipboard.writeText(promoToCopy)
            .then(() => {
                window.dispatchEvent(new CustomEvent("initToastManager"));
                window.addToast(false, "Промокод успешно скопирован!");
            })
            .catch(err => {
            });
    } else {
    }
}
