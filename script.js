// ============================================
// TEMA OSCURO/CLARO
// ============================================
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');

// Helpers seguros de localStorage: si falla (ej. al abrir el archivo con
// file:// en vez de un servidor), no rompen el resto del script.
function safeStorageGet(key, fallback) {
    try {
        return localStorage.getItem(key) || fallback;
    } catch (e) {
        return fallback;
    }
}

function safeStorageSet(key, value) {
    try {
        localStorage.setItem(key, value);
    } catch (e) {
        // localStorage no disponible; seguimos sin guardar la preferencia
    }
}

function setTheme(theme) {
    if (theme === 'dark') {
        document.body.classList.add('dark');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        safeStorageSet('theme', 'dark');
    } else {
        document.body.classList.remove('dark');
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        safeStorageSet('theme', 'light');
    }
}

// Cargar tema guardado o por defecto oscuro
const savedTheme = safeStorageGet('theme', 'dark');
setTheme(savedTheme);

themeToggle.addEventListener('click', () => {
    const isDark = document.body.classList.contains('dark');
    setTheme(isDark ? 'light' : 'dark');
});

// ============================================
// FILTROS DESPLEGABLES (móvil)
// ============================================
const filterToggle = document.getElementById('filterToggle');
const filtersPanel = document.getElementById('filtersPanel');
const filtersClose = document.getElementById('filtersClose');

function toggleFilters() {
    filtersPanel.classList.toggle('active');
    let overlay = document.querySelector('.filters-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'filters-overlay';
        document.body.appendChild(overlay);
        overlay.addEventListener('click', () => {
            filtersPanel.classList.remove('active');
            overlay.classList.remove('active');
        });
    }
    overlay.classList.toggle('active');
}

if (filterToggle) filterToggle.addEventListener('click', toggleFilters);
if (filtersClose) filtersClose.addEventListener('click', toggleFilters);

document.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
        if (!filtersPanel.contains(e.target) && !filterToggle.contains(e.target)) {
            filtersPanel.classList.remove('active');
            const overlay = document.querySelector('.filters-overlay');
            if (overlay) overlay.classList.remove('active');
        }
    }
});

// ============================================
// VARIABLES GLOBALES
// ============================================
let filteredProducts = [];
let currentExpansionFilter = 'all';
let currentBannerIndex = 0;
let bannerInterval;

// ============================================
// VARIABLES DEL CARRITO
// ============================================
let cart = JSON.parse(safeStorageGet('cart', '[]'));

// ============================================
// NOTIFICACIONES
// ============================================
function showNotification(type, message, title = '') {
    const oldToasts = document.querySelectorAll('.toast-notification');
    oldToasts.forEach(toast => toast.remove());

    const icons = {
        success: 'fa-check-circle',
        error: 'fa-exclamation-circle',
        warning: 'fa-exclamation-triangle',
        info: 'fa-info-circle'
    };
    const titles = {
        success: '¡Éxito!',
        error: 'Error',
        warning: 'Atención',
        info: 'Información'
    };

    const toast = document.createElement('div');
    toast.className = `toast-notification ${type}`;
    toast.innerHTML = `
        <div class="toast-icon">
            <i class="fas ${icons[type]}"></i>
        </div>
        <div class="toast-content">
            <div class="toast-title">${title || titles[type]}</div>
            <div class="toast-message">${message}</div>
        </div>
        <button class="toast-close" onclick="this.parentElement.remove()">
            <i class="fas fa-times"></i>
        </button>
    `;
    document.body.appendChild(toast);
    setTimeout(() => {
        if (toast.parentElement) toast.remove();
    }, 3000);
}

// ============================================
// BANNERS (CARRUSEL)
// ============================================

function renderPreorderBanners() {
    const container = document.getElementById('preorderBannerContainer');
    if (!container) {
        console.warn('Contenedor de banners no encontrado');
        return;
    }

    if (typeof preorderBanners === 'undefined' || !Array.isArray(preorderBanners)) {
        console.warn('preorderBanners no está definido o no es un array');
        container.style.display = 'none';
        return;
    }

    const activeBanners = preorderBanners
        .filter(banner => banner.active)
        .sort((a, b) => a.priority - b.priority);

    if (activeBanners.length === 0) {
        container.style.display = 'none';
        return;
    }

    if (activeBanners.length === 1) {
        container.innerHTML = createBannerHTML(activeBanners[0], 0, 1);
        return;
    }

    let bannersHTML = `
        <div class="banners-carousel">
            <div class="banners-track" id="bannersTrack">
                ${activeBanners.map((banner, index) => createBannerHTML(banner, index, activeBanners.length)).join('')}
            </div>
            <button class="banner-nav prev" onclick="moveBanner(-1)">
                <i class="fas fa-chevron-left"></i>
            </button>
            <button class="banner-nav next" onclick="moveBanner(1)">
                <i class="fas fa-chevron-right"></i>
            </button>
            <div class="banners-indicators">
                ${activeBanners.map((_, index) => `
                    <span class="banner-indicator ${index === 0 ? 'active' : ''}" 
                          onclick="goToBanner(${index})"></span>
                `).join('')}
            </div>
            <div class="banner-autoplay-status">
                <i class="fas fa-play-circle"></i>
            </div>
        </div>
    `;
    container.innerHTML = bannersHTML;
    startBannerAutoplay(activeBanners.length);
}

function createBannerHTML(banner, index, total) {
    const onclickAttr = `onclick="handleBannerClick('${banner.id}')"`;

    let extraContent = '';
    if (banner.showQR && banner.qrImage) {
        extraContent = `
            <div class="banner-qr">
                <img src="${banner.qrImage}" alt="QR" onerror="this.style.display='none'">
                <span>¡Escanea y síguenos!</span>
            </div>
        `;
    }

    let preorderContent = '';
    if (banner.isPreorder) {
        preorderContent = `
            <div class="arrival-date">
                <i class="fas fa-calendar-alt"></i>
                <span>Llegada estimada: ${banner.arrivalDate || 'Próximamente'}</span>
            </div>
            <div class="preorder-urgency">
                <i class="fas fa-clock"></i>
                <span>¡Reserva ya! Stock limitado</span>
            </div>
        `;
    }

    let bannerStyle = '';
    let overlayStyle = '';

    if (banner.backgroundImage) {
        bannerStyle = `position: relative; overflow: hidden;`;
        overlayStyle = `
            <div class="banner-background" style="background-image: url('${banner.backgroundImage}'); background-size: cover; background-position: center;"></div>
            <div class="banner-overlay" style="background: ${banner.overlayGradient || 'rgba(0,0,0,0.5)'};"></div>
        `;
    } else {
        bannerStyle = `background: ${banner.bgColor};`;
    }

    const badgeClass = banner.isPreorder ? 'preorder-badge-special' : 'preorder-badge';
    const badgeIcon = banner.isPreorder ? 'fa-fire' : getBadgeIcon(banner.id);
    const badgeText = banner.isPreorder ? (banner.preorderBadge || 'PREVENTA') : getBadgeText(banner.id);
    const preorderAttr = banner.isPreorder ? 'data-preorder="true"' : '';

    return `
        <div class="banner-slide" data-banner-id="${banner.id}" ${preorderAttr}
             style="${bannerStyle} color: ${banner.textColor}; flex: 0 0 100%; min-width: 0;"
             ${onclickAttr}>
            ${overlayStyle}
            <div class="${badgeClass}">
                <i class="fas ${badgeIcon}"></i> 
                ${badgeText}
            </div>
            <div class="preorder-content" style="position: relative; z-index: 2;">
                <div class="preorder-text">
                    <h2>${banner.title}</h2>
                    <p class="preorder-subtitle">${banner.subtitle}</p>
                    <p class="preorder-description">${banner.description}</p>
                    ${preorderContent}
                    <span class="preorder-cta">
                        <i class="fas ${banner.action === 'link' ? 'fa-external-link-alt' : 'fa-eye'}"></i> 
                        ${banner.action === 'link' ? 'Visitar ahora' : (banner.isPreorder ? 'Ver productos en preventa' : 'Ver productos disponibles')}
                    </span>
                </div>
                <div class="preorder-image">
                    <img src="${banner.image}" alt="${banner.title}" onerror="this.style.display='none'">
                    ${extraContent}
                </div>
            </div>
        </div>
    `;
}

function getBadgeIcon(bannerId) {
    if (bannerId.includes('instagram')) return 'fa-camera';
    if (bannerId.includes('pokemon-day')) return 'fa-bolt';
    return 'fa-fire';
}

function getBadgeText(bannerId) {
    if (bannerId.includes('instagram')) return 'SÍGUENOS';
    if (bannerId.includes('pokemon-day')) return 'EVENTO';
    return 'PREVENTA';
}

function handleBannerClick(bannerId) {
    const banner = preorderBanners.find(b => b.id === bannerId);
    if (!banner) return;
    if (banner.action === 'link' && banner.link) {
        window.open(banner.link, '_blank');
    } else if (banner.action === 'filter' && banner.expansionFilter) {
        filterByExpansion(banner.expansionFilter);
    } else if (banner.action === 'filter-preorder') {
        filterByPreorder();
    }
}

function moveBanner(direction) {
    const activeBanners = preorderBanners.filter(b => b.active);
    const total = activeBanners.length;
    if (total === 0) return;
    currentBannerIndex += direction;
    if (currentBannerIndex < 0) currentBannerIndex = total - 1;
    if (currentBannerIndex >= total) currentBannerIndex = 0;
    updateBannerDisplay();
    resetBannerAutoplay(total);
}

function goToBanner(index) {
    currentBannerIndex = index;
    updateBannerDisplay();
    const activeBanners = preorderBanners.filter(b => b.active);
    resetBannerAutoplay(activeBanners.length);
}

function updateBannerDisplay() {
    const track = document.getElementById('bannersTrack');
    const indicators = document.querySelectorAll('.banner-indicator');
    if (track) {
        track.style.transform = `translateX(-${currentBannerIndex * 100}%)`;
    }
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentBannerIndex);
    });
}

function startBannerAutoplay(total) {
    stopBannerAutoplay();
    if (total > 1) {
        bannerInterval = setInterval(() => {
            moveBanner(1);
        }, 5000);
    }
}

function stopBannerAutoplay() {
    if (bannerInterval) {
        clearInterval(bannerInterval);
        bannerInterval = null;
    }
}

function resetBannerAutoplay(total) {
    startBannerAutoplay(total);
}

// ============================================
// FUNCIONES PARA FILTROS Y PRODUCTOS
// ============================================

function filterByPreorder() {
    resetFilters();
    filteredProducts = products.filter(product => product.preorder === true);
    filteredProducts.sort((a, b) => {
        const priority = { 'available': 1, 'soon': 2, 'encargo': 3, 'agotado': 4 };
        return priority[a.stock] - priority[b.stock];
    });
    renderProducts(filteredProducts);
    document.getElementById('productsGrid').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function filterByExpansion(expansionId) {
    const expansionSelect = document.getElementById('expansionFilter');
    if (expansionSelect) {
        expansionSelect.value = expansionId;
        filterProducts();
        document.getElementById('productsGrid').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function filterByProductIds(productIds) {
    resetFilters();
    filteredProducts = products.filter(product => productIds.includes(product.id));
    const orderMap = {};
    productIds.forEach((id, index) => orderMap[id] = index);
    filteredProducts.sort((a, b) => orderMap[a.id] - orderMap[b.id]);
    renderProducts(filteredProducts);
    document.getElementById('productsGrid').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function filterByPromoEvent(promoEventId) {
    resetFilters();
    filteredProducts = products.filter(product => product.promoEvento === promoEventId);
    filteredProducts.sort((a, b) => {
        const priority = { 'available': 1, 'soon': 2, 'encargo': 3, 'agotado': 4 };
        return priority[a.stock] - priority[b.stock];
    });
    renderProducts(filteredProducts);
    document.getElementById('productsGrid').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function formatCOP(price) {
    return new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(price);
}

function renderLanguages(languages) {
    if (!Array.isArray(languages) || languages.length === 0) return '';
    const validLanguages = languages.filter(lang => lang && lang.trim() !== '');
    if (validLanguages.length === 0) return '';
    let html = '<div class="product-language">';
    validLanguages.forEach(lang => {
        if (languageFlags[lang]) {
            html += `<img src="${languageFlags[lang]}" alt="${countryNames[lang]}" class="flag-img">`;
        }
    });
    html += '<div class="language-texts">';
    const names = validLanguages.map(lang => countryNames[lang]).filter(Boolean);
    html += `<span class="language-text">${names.join(' · ')}</span>`;
    html += '</div></div>';
    return html;
}

function getExpansionBadge(expansion) {
    if (!expansion || expansion === 'otros') return '';
    const name = expansionNames[expansion] || expansion;
    return `<span class="expansion-badge ${expansion}">${name}</span>`;
}

function renderProducts(productsToRender) {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = '';
    if (productsToRender.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; font-size: 1.2rem; color: var(--text-secondary);">No hay productos que coincidan con los filtros 😔</p>';
        return;
    }
    productsToRender.forEach(product => {
        const isPreorder = product.preorder === true;
        const card = document.createElement('div');
        let cardClassName = product.promo ? 'product-card surface promo-card' : 'product-card surface';
        if (isPreorder) cardClassName += ' preorder-item';
        card.className = cardClassName;
        const languageHtml = renderLanguages(product.language);
        const expansionBadge = getExpansionBadge(product.expansion);
        let promoBadge = product.promo ? '<span class="promo-badge">🔥 PROMO</span>' : '';
        let stockClass = '', stockText = '', stockInfo = '', stockDescription = '';
        if (isPreorder) {
            stockClass = 'preorder-stock';
            stockText = '🔥 PREVENTA';
            stockDescription = `<span class="preorder-date-tag">
                <i class="fas fa-calendar-check"></i>
                ${product.arrivalDate ? `Llega: ${product.arrivalDate}` : 'Fecha por confirmar'}
            </span>`;
        } else if (product.stock === 'available') {
            stockClass = 'in-stock';
            stockText = 'En stock';
            if (product.cantidad !== undefined) {
                stockInfo = `<br><span style="font-size: 0.8rem; color: #2e7d32;">📦 ${product.cantidad} disponibles</span>`;
            }
        } else if (product.stock === 'encargo') {
            stockClass = 'on-order';
            stockText = 'Encargo';
            stockDescription = '<span class="encargo-description">⏳ Llega en 3-5 días hábiles</span>';
        } else if (product.stock === 'agotado') {
            stockClass = 'agotado';
            stockText = 'Agotado';
        } else if (product.stock === 'soon') {
            stockClass = 'coming-soon';
            stockText = 'Próximamente';
            stockDescription = '<span class="soon-description">📦 Llega en menos de una semana</span>';
        } else {
            stockClass = 'coming-soon';
            stockText = 'Próximamente';
        }
        const isDisabled = product.stock === 'agotado';
        const disabledAttr = isDisabled ? 'disabled' : '';
        const buttonText = isPreorder ? 'Reservar ahora' : (isDisabled ? 'No disponible' : 'Añadir al carrito');
        card.innerHTML = `
            <div style="position: relative;">
                ${createCarousel(product.images, product.id)}
                <span class="category-tag">${product.category.toUpperCase()}</span>
                ${promoBadge}
            </div>
            <div class="product-info">
                ${expansionBadge}
                <div class="product-name">${product.name}</div>
                <div class="product-price">${formatCOP(product.price)}</div>
                ${languageHtml}
                <span class="product-stock ${stockClass}">${stockText}</span>
                ${stockInfo}
                ${stockDescription}
                <button class="btn-add-cart" onclick="addToCart(${product.id})" ${disabledAttr}>
                    <i class="fas fa-cart-plus"></i> ${buttonText}
                </button>
            </div>
        `;
        grid.appendChild(card);
    });
}

function filterProducts() {
    const showOnlyPromo = document.getElementById('promoFilter').checked;
    const category = document.getElementById('categoryFilter').value;
    const expansion = document.getElementById('expansionFilter').value;
    const maxPrice = document.getElementById('priceFilter').value;
    const stock = document.getElementById('stockFilter').value;
    const language = document.getElementById('languageFilter').value;
    const searchTerm = document.getElementById('searchFilter').value.toLowerCase().trim();
    currentExpansionFilter = expansion;
    filteredProducts = products.filter(product => {
        let matches = true;
        if (searchTerm && !product.name.toLowerCase().includes(searchTerm)) matches = false;
        if (showOnlyPromo && !product.promo) matches = false;
        if (category !== 'all' && product.category !== category) matches = false;
        if (expansion !== 'all' && product.expansion !== expansion) matches = false;
        if (maxPrice && product.price > parseFloat(maxPrice)) matches = false;
        if (stock !== 'all' && product.stock !== stock) matches = false;
        if (language !== 'all') {
            if (language === 'none') {
                if (product.language && product.language.length > 0 && product.language[0] !== '') matches = false;
            } else {
                if (!product.language || !product.language.includes(language)) matches = false;
            }
        }
        return matches;
    });
    filteredProducts.sort((a, b) => {
        const priority = { 'available': 1, 'soon': 2, 'encargo': 3, 'agotado': 4 };
        return priority[a.stock] - priority[b.stock];
    });
    renderProducts(filteredProducts);
}

function resetFilters() {
    document.getElementById('promoFilter').checked = false;
    document.getElementById('categoryFilter').value = 'all';
    document.getElementById('expansionFilter').value = 'all';
    document.getElementById('priceFilter').value = '';
    document.getElementById('stockFilter').value = 'all';
    document.getElementById('languageFilter').value = 'all';
    document.getElementById('searchFilter').value = '';
    filteredProducts = [...products];
    filteredProducts.sort((a, b) => {
        const priority = { 'available': 1, 'soon': 2, 'encargo': 3, 'agotado': 4 };
        return priority[a.stock] - priority[b.stock];
    });
    renderProducts(filteredProducts);
}

// ============================================
// FUNCIONES DEL CARRITO
// ============================================

function saveCart() {
    safeStorageSet('cart', JSON.stringify(cart));
    updateCartCount();
    renderCart();
}

function updateCartCount() {
    const count = cart.reduce((acc, item) => acc + item.quantity, 0);
    const cartCount = document.getElementById('cartCount');
    const floatingCartCount = document.getElementById('floatingCartCount');
    if (cartCount) cartCount.textContent = count;
    if (floatingCartCount) floatingCartCount.textContent = count;
}

function addToCart(productId, quantity = 1) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    if (product.stock === 'agotado') {
        showNotification('error', 'Este producto está agotado');
        return;
    }
    const isPreorder = product.preorder === true;
    if (isPreorder) {
        showNotification('info', `📅 Producto en preventa. Llegada estimada: ${product.arrivalDate || 'Por confirmar'}`, 'Preventa');
    }
    if (product.stock === 'available' && product.cantidad !== undefined && quantity > product.cantidad) {
        showNotification('warning', `Solo hay ${product.cantidad} unidades disponibles`);
        return;
    }
    const existing = cart.find(item => item.id === productId);
    if (existing) {
        if (product.stock === 'available' && product.cantidad !== undefined && 
            existing.quantity + quantity > product.cantidad) {
            showNotification('warning', `Solo puedes agregar ${product.cantidad - existing.quantity} unidades más`);
            return;
        }
        existing.quantity += quantity;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.images[0],
            quantity: quantity,
            stock: product.stock,
            isPreorder: isPreorder,
            arrivalDate: product.arrivalDate
        });
    }
    saveCart();
    if (product.stock === 'encargo') {
        showNotification('info', '🕒 Este producto es por encargo y llegará en 3-5 días hábiles', 'Producto agregado');
    } else if (!isPreorder) {
        showNotification('success', `${product.name} ha sido agregado al carrito`);
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    showNotification('info', 'Producto eliminado del carrito');
}

function updateQuantity(productId, newQuantity) {
    const item = cart.find(item => item.id === productId);
    const product = products.find(p => p.id === productId);
    if (item) {
        if (newQuantity <= 0) {
            removeFromCart(productId);
        } else {
            if (product && product.stock === 'available' && product.cantidad !== undefined && newQuantity > product.cantidad) {
                showNotification('warning', `Solo hay ${product.cantidad} unidades disponibles`);
                return;
            }
            item.quantity = newQuantity;
            saveCart();
        }
    }
}

function renderCart() {
    const cartItemsContainer = document.getElementById('cartItems');
    const cartTotalSpan = document.getElementById('cartTotal');
    if (!cartItemsContainer) return;
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<div class="empty-cart"><i class="fas fa-shopping-cart" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.5;"></i><br>Tu carrito está vacío</div>';
        cartTotalSpan.textContent = '$0';
        return;
    }
    let html = '';
    let total = 0;
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        const isPreorderItem = item.isPreorder === true;
        const itemClass = item.stock === 'encargo' ? 'cart-item encargo-item' : 
                         (isPreorderItem ? 'cart-item preorder-cart-item' : 'cart-item');
        let preorderBadge = '';
        if (isPreorderItem) {
            preorderBadge = `<div style="background: linear-gradient(135deg, #ff4757, #ff6348); color: white; padding: 2px 8px; border-radius: 10px; font-size: 0.7rem; font-weight: bold; display: inline-block; margin-top: 4px;">
                🔥 PREVENTA${item.arrivalDate ? ` - Llega: ${item.arrivalDate}` : ''}
            </div>`;
        }
        html += `
            <div class="${itemClass}" data-id="${item.id}">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image" onerror="this.src='https://placehold.co/80'">
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    ${preorderBadge}
                    <div class="cart-item-price">${formatCOP(item.price)}</div>
                    <div class="cart-item-quantity">
                        <div class="quantity-controls">
                            <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity - 1})">
                                <i class="fas fa-minus"></i>
                            </button>
                            <span class="quantity-value">${item.quantity}</span>
                            <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity + 1})">
                                <i class="fas fa-plus"></i>
                            </button>
                        </div>
                        <button class="remove-item" onclick="removeFromCart(${item.id})" title="Eliminar">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                    ${item.stock === 'encargo' ? '<small style="color: #e65100; font-size: 0.7rem;">⏳ Encargo (3-5 días)</small>' : ''}
                </div>
            </div>
        `;
    });
    cartItemsContainer.innerHTML = html;
    cartTotalSpan.textContent = formatCOP(total);
}

function checkoutWhatsApp() {
    if (cart.length === 0) {
        showNotification('warning', 'Tu carrito está vacío');
        return;
    }
    let message = '🛒 *NUEVO PEDIDO - ONE PLAY MORE*%0A%0A';
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        let tag = '';
        if (item.stock === 'encargo') {
            tag = ' (📦 Encargo)';
        } else if (item.isPreorder || item.stock === 'soon') {
            tag = ` (🔥 PREVENTA${item.arrivalDate ? ` - Llega: ${item.arrivalDate}` : ''})`;
        }
        message += `• *${item.name}*${tag}%0A`;
        message += `  ${item.quantity} x ${formatCOP(item.price)} = ${formatCOP(itemTotal)}%0A%0A`;
    });
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    message += `*TOTAL: ${formatCOP(total)}*%0A%0A`;
    message += 'Por favor, indíqueme los pasos a seguir para el pago y envío. ¡Gracias!';
    const phone = '3115416469';
    const url = `https://wa.me/57${phone}?text=${message}`;
    window.open(url, '_blank');
}

function toggleCart() {
    const panel = document.getElementById('cartPanel');
    const overlay = document.getElementById('cartOverlay');
    panel.classList.toggle('active');
    overlay.classList.toggle('active');
}

function handleScroll() {
    const floatingCart = document.getElementById('floatingCartBtn');
    if (!floatingCart) return;
    if (window.scrollY > 300) {
        floatingCart.classList.add('visible');
    } else {
        floatingCart.classList.remove('visible');
    }
}

// ============================================
// CARRUSEL DE IMÁGENES DE PRODUCTOS
// ============================================

function createCarousel(images, productId) {
    if (!images || images.length === 0) return '';
    if (images.length === 1) {
        return `<img src="${images[0]}" alt="Producto" class="product-image" 
                     onerror="this.src='https://placehold.co/300x200?text=No+Image'">`;
    }
    const carouselId = `carousel-${productId}`;
    let carouselHTML = `
        <div class="carousel-container">
            <div class="carousel-images" id="${carouselId}-images">
    `;
    images.forEach((image, index) => {
        carouselHTML += `
            <div class="carousel-slide">
                <img src="${image}" alt="Producto ${index + 1}" class="product-image"
                     onerror="this.src='https://placehold.co/300x200?text=No+Image'">
            </div>
        `;
    });
    carouselHTML += `
            </div>
            <button class="carousel-btn prev" onclick="moveCarousel('${carouselId}', -1)">
                <i class="fas fa-chevron-left"></i>
            </button>
            <button class="carousel-btn next" onclick="moveCarousel('${carouselId}', 1)">
                <i class="fas fa-chevron-right"></i>
            </button>
            <div class="carousel-indicators" id="${carouselId}-indicators">
    `;
    images.forEach((_, index) => {
        carouselHTML += `<span class="indicator ${index === 0 ? 'active' : ''}" 
                                onclick="goToSlide('${carouselId}', ${index})"></span>`;
    });
    carouselHTML += `
            </div>
        </div>
    `;
    setTimeout(() => {
        window.carousels = window.carousels || {};
        window.carousels[carouselId] = {
            currentSlide: 0,
            totalSlides: images.length
        };
    }, 0);
    return carouselHTML;
}

function moveCarousel(carouselId, direction) {
    const carousel = window.carousels[carouselId];
    if (!carousel) return;
    carousel.currentSlide += direction;
    if (carousel.currentSlide < 0) carousel.currentSlide = carousel.totalSlides - 1;
    if (carousel.currentSlide >= carousel.totalSlides) carousel.currentSlide = 0;
    updateCarouselDisplay(carouselId);
}

function goToSlide(carouselId, slideIndex) {
    const carousel = window.carousels[carouselId];
    if (!carousel) return;
    carousel.currentSlide = slideIndex;
    updateCarouselDisplay(carouselId);
}

function updateCarouselDisplay(carouselId) {
    const carousel = window.carousels[carouselId];
    if (!carousel) return;
    const imagesContainer = document.getElementById(`${carouselId}-images`);
    const indicators = document.getElementById(`${carouselId}-indicators`);
    if (imagesContainer) {
        imagesContainer.style.transform = `translateX(-${carousel.currentSlide * 100}%)`;
    }
    if (indicators) {
        const indicatorElements = indicators.querySelectorAll('.indicator');
        indicatorElements.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === carousel.currentSlide);
        });
    }
}

// ============================================
// INICIALIZACIÓN
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Verificar que products y preorderBanners estén definidos
    if (typeof products === 'undefined' || typeof preorderBanners === 'undefined') {
        console.error('Faltan datos: products o preorderBanners no definidos');
        return;
    }

    // Crear botón flotante del carrito
    if (!document.getElementById('floatingCartBtn')) {
        const floatingBtn = document.createElement('div');
        floatingBtn.id = 'floatingCartBtn';
        floatingBtn.className = 'floating-cart-btn';
        floatingBtn.innerHTML = `
            <i class="fas fa-shopping-cart"></i>
            <span class="floating-cart-count" id="floatingCartCount">0</span>
        `;
        floatingBtn.addEventListener('click', toggleCart);
        document.body.appendChild(floatingBtn);
    }

    // Renderizar banners
    renderPreorderBanners();

    // Ordenar y mezclar productos
    const priorityOrder = ['available', 'soon', 'encargo', 'agotado', 'unknown'];
    const grouped = {};
    products.forEach(p => {
        const stock = p.stock || 'unknown';
        if (!grouped[stock]) grouped[stock] = [];
        grouped[stock].push(p);
    });
    let shuffledProducts = [];
    priorityOrder.forEach(stock => {
        if (grouped[stock]) {
            const shuffled = [...grouped[stock]];
            for (let i = shuffled.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
            }
            shuffledProducts = shuffledProducts.concat(shuffled);
        }
    });
    products = shuffledProducts;

    renderProducts(products);

    // Evento de búsqueda en tiempo real
    const searchInput = document.getElementById('searchFilter');
    if (searchInput) searchInput.addEventListener('input', filterProducts);

    // Pausar carrusel al pasar el mouse
    const container = document.getElementById('preorderBannerContainer');
    if (container) {
        container.addEventListener('mouseenter', stopBannerAutoplay);
        container.addEventListener('mouseleave', () => {
            const activeBanners = preorderBanners.filter(b => b.active);
            startBannerAutoplay(activeBanners.length);
        });
    }

    // Eventos del carrito
    const cartToggle = document.getElementById('cartToggle');
    const cartClose = document.getElementById('cartClose');
    const cartOverlay = document.getElementById('cartOverlay');
    const checkoutBtn = document.getElementById('checkoutWhatsApp');
    if (cartToggle) cartToggle.addEventListener('click', toggleCart);
    if (cartClose) cartClose.addEventListener('click', toggleCart);
    if (cartOverlay) cartOverlay.addEventListener('click', toggleCart);
    if (checkoutBtn) checkoutBtn.addEventListener('click', checkoutWhatsApp);

    window.addEventListener('scroll', handleScroll);
    renderCart();
    updateCartCount();
});