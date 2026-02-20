let filteredProducts = [...products];
let currentExpansionFilter = 'all';


// Función para cambiar tema
function toggleTheme() {
    const body = document.body;
    const themeIcon = document.getElementById('themeIcon');
    
    body.classList.toggle('dark-theme');
    
    if (body.classList.contains('dark-theme')) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        localStorage.setItem('theme', 'light');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        document.getElementById('themeIcon').classList.remove('fa-moon');
        document.getElementById('themeIcon').classList.add('fa-sun');
    }
    
    // Renderizar banners de preventa
    renderPreorderBanners();



    // Ordenar productos por prioridad
    products.sort((a, b) => {
        const priority = {
            'available': 1,
            'soon': 2,
            'encargo': 3,
            'agotado': 4
        };
        return priority[a.stock] - priority[b.stock];
    });
    
    renderProducts(products);
});


let currentBannerIndex = 0;
let bannerInterval;

// Renderizar banners de preventa con carrusel
function renderPreorderBanners() {
    const container = document.getElementById('preorderBannerContainer');
    if (!container) return;
    
    // Filtrar solo banners activos y ordenar por prioridad
    const activeBanners = preorderBanners
        .filter(banner => banner.active)
        .sort((a, b) => a.priority - b.priority);
    
    if (activeBanners.length === 0) {
        container.style.display = 'none';
        return;
    }
    
    // Si solo hay un banner, mostrarlo sin carrusel
    if (activeBanners.length === 1) {
        container.innerHTML = createBannerHTML(activeBanners[0], 0, 1);
        return;
    }
    
    // Crear carrusel de banners
    let bannersHTML = `
        <div class="banners-carousel">
            <div class="banners-track" id="bannersTrack">
                ${activeBanners.map((banner, index) => createBannerHTML(banner, index, activeBanners.length)).join('')}
            </div>
            
            <!-- Controles del carrusel -->
            <button class="banner-nav prev" onclick="moveBanner(-1)">
                <i class="fas fa-chevron-left"></i>
            </button>
            <button class="banner-nav next" onclick="moveBanner(1)">
                <i class="fas fa-chevron-right"></i>
            </button>
            
            <!-- Indicadores -->
            <div class="banners-indicators">
                ${activeBanners.map((_, index) => `
                    <span class="banner-indicator ${index === 0 ? 'active' : ''}" 
                          onclick="goToBanner(${index})"></span>
                `).join('')}
            </div>
            
            <!-- Contador automático -->
            <div class="banner-autoplay-status">
                <i class="fas fa-play-circle" id="autoplayIcon"></i>
            </div>
        </div>
    `;
    
    container.innerHTML = bannersHTML;
    
    // Iniciar carrusel automático
    startBannerAutoplay(activeBanners.length);
}

// Crear HTML de un banner individual

function createBannerHTML(banner, index, total) {
    const onclickAttr = banner.action === 'link' 
        ? `onclick="handleBannerClick('${banner.id}')"` 
        : `onclick="handleBannerClick('${banner.id}')"`;

    let extraContent = '';
    if (banner.showQR && banner.qrImage) {
        extraContent = `
            <div class="banner-qr">
                <img src="${banner.qrImage}" alt="QR Instagram" onerror="this.style.display='none'">
                <span>¡Escanea y síguenos!</span>
            </div>
        `;
    }

    return `
        <div class="preorder-banner banner-slide" data-banner-id="${banner.id}"
             style="background: ${banner.bgColor}; color: ${banner.textColor}; min-width: 100%;"
             ${onclickAttr}>
            <div class="preorder-content">
                <div class="preorder-text">
                    <h2>${banner.title}</h2>
                    <p class="preorder-subtitle">${banner.subtitle}</p>
                    <p class="preorder-description">${banner.description}</p>
                    <span class="preorder-cta">
                        <i class="fas ${banner.action === 'link' ? 'fa-external-link-alt' : 'fa-eye'}"></i> 
                        ${banner.action === 'link' ? 'Visitar ahora' : 'Ver productos disponibles'}
                    </span>
                </div>
                <div class="preorder-image">
                    <img src="${banner.image}" alt="${banner.title}" onerror="this.style.display='none'">
                    ${extraContent}
                </div>
            </div>
            <div class="preorder-badge">
                <i class="fas ${getBadgeIcon(banner.id)}"></i> 
                ${getBadgeText(banner.id)}
            </div>
        </div>
    `;
}


// Obtener icono según tipo de banner
function getBadgeIcon(bannerId) {
    if (bannerId.includes('instagram')) return 'fa-camera';
    if (bannerId.includes('pokemon-day')) return 'fa-bolt';
    return 'fa-fire';
}

// Obtener texto de badge según tipo de banner
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
    } else if (banner.action === 'filter-promo' && banner.promoFilter) {
        // NUEVO: Filtrar por promoción de evento
        filterByPromoEvent(banner.promoFilter);
    }
}



// Mover carrusel de banners
function moveBanner(direction) {
    const activeBanners = preorderBanners.filter(b => b.active);
    const total = activeBanners.length;
    
    currentBannerIndex += direction;
    
    if (currentBannerIndex < 0) {
        currentBannerIndex = total - 1;
    } else if (currentBannerIndex >= total) {
        currentBannerIndex = 0;
    }
    
    updateBannerDisplay();
    resetBannerAutoplay(total);
}

// Ir a banner específico
function goToBanner(index) {
    currentBannerIndex = index;
    updateBannerDisplay();
    const activeBanners = preorderBanners.filter(b => b.active);
    resetBannerAutoplay(activeBanners.length);
}

// Actualizar visualización del carrusel
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

// Iniciar reproducción automática
function startBannerAutoplay(total) {
    stopBannerAutoplay();
    bannerInterval = setInterval(() => {
        moveBanner(1);
    }, 5000); // Cambiar cada 5 segundos
}

// Detener reproducción automática
function stopBannerAutoplay() {
    if (bannerInterval) {
        clearInterval(bannerInterval);
    }
}

// Reiniciar reproducción automática
function resetBannerAutoplay(total) {
    stopBannerAutoplay();
    bannerInterval = setInterval(() => {
        moveBanner(1);
    }, 5000);
}

// Pausar al interactuar
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('preorderBannerContainer');
    if (container) {
        container.addEventListener('mouseenter', stopBannerAutoplay);
        container.addEventListener('mouseleave', () => {
            const activeBanners = preorderBanners.filter(b => b.active);
            startBannerAutoplay(activeBanners.length);
        });
    }
});



// Filtrar por expansión (llamado desde el banner)
function filterByExpansion(expansionId) {
    const expansionSelect = document.getElementById('expansionFilter');
    if (expansionSelect) {
        expansionSelect.value = expansionId;
        filterProducts();
        
        // Scroll suave hacia los productos
        document.getElementById('productsGrid').scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
        });
    }
}

function filterByProductIds(productIds) {
    // Resetear filtros
    resetFilters();
    
    // Filtrar solo los productos con esos IDs
    filteredProducts = products.filter(product => {
        return productIds.includes(product.id);
    });
    
    // Mantener el orden que definiste en el array
    const orderMap = {};
    productIds.forEach((id, index) => {
        orderMap[id] = index;
    });
    
    filteredProducts.sort((a, b) => {
        return orderMap[a.id] - orderMap[b.id];
    });
    
    renderProducts(filteredProducts);
    
    // Scroll
    const productsGrid = document.getElementById('productsGrid');
    if (productsGrid) {
        productsGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Filtrar por promoción de evento (Pokémon Day, etc.)
function filterByPromoEvent(promoEventId) {
    // Resetear todos los filtros primero
    resetFilters();
    
    // Filtrar solo productos que tengan este promoEvento
    filteredProducts = products.filter(product => {
        return product.promoEvento === promoEventId;
    });
    
    // Ordenar por disponibilidad
    filteredProducts.sort((a, b) => {
        const priority = {
            'available': 1,
            'soon': 2,
            'encargo': 3,
            'agotado': 4
        };
        return priority[a.stock] - priority[b.stock];
    });
    
    renderProducts(filteredProducts);
    
    // Scroll a productos
    const productsGrid = document.getElementById('productsGrid');
    if (productsGrid) {
        productsGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}


// Función para formatear precios en COP
function formatCOP(price) {
    return new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(price);
}

// Función para renderizar múltiples idiomas con banderas
function renderLanguages(languages) {
    if (!Array.isArray(languages) || languages.length === 0) return '';
    
    // Filtrar idiomas vacíos (como los funkos que tienen [""])
    const validLanguages = languages.filter(lang => lang && lang.trim() !== '');
    if (validLanguages.length === 0) return '';
    
    let html = '<div class="product-language">';
    
    // Agregar banderas
    validLanguages.forEach(lang => {
        if (languageFlags[lang]) {
            html += `<img src="${languageFlags[lang]}" alt="${countryNames[lang]}" class="flag-img">`;
        }
    });
    
    // Agregar nombres de idiomas
    html += '<div class="language-texts">';
    const names = validLanguages.map(lang => countryNames[lang]).filter(Boolean);
    html += `<span class="language-text">${names.join(' · ')}</span>`;
    html += '</div>';
    html += '</div>';
    
    return html;
}

// Obtener badge de expansión
function getExpansionBadge(expansion) {
    if (!expansion || expansion === 'otros') return '';
    const name = expansionNames[expansion] || expansion;
    return `<span class="expansion-badge ${expansion}">${name}</span>`;
}


function renderProducts(productsToRender) {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = '';

    if (productsToRender.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; font-size: 1.2rem; color: #666;">No hay productos que coincidan con los filtros 😔</p>';
        return;
    }

    productsToRender.forEach(product => {
        const card = document.createElement('div');
        // APLICAR CLASE ESPECIAL PARA PROMOS
        card.className = product.promo ? 'product-card surface promo-card' : 'product-card surface';
        
        const languageHtml = renderLanguages(product.language);
        const expansionBadge = getExpansionBadge(product.expansion);

        let promoBadge = '';
        if (product.promo) {
            promoBadge = '<span class="promo-badge">🔥 PROMO</span>';
        }

        let stockClass = '';
        let stockText = '';
        let stockInfo = '';
        
        if (product.stock === 'available' && product.cantidad !== undefined) {
            stockInfo = `<br><span style="font-size: 0.8rem; color: #2e7d32;">📦 ${product.cantidad} disponibles</span>`;
        }
        
        let stockDescription = '';

        if (product.stock === 'available') {
            stockClass = 'in-stock';
            stockText = 'En stock';
        } else if (product.stock === 'encargo') {
            stockClass = 'on-order';
            stockText = 'Encargo';
            stockDescription = '<span class="encargo-description">Llega en 3-5 días hábiles</span>';
        } else if (product.stock === 'agotado') {
            stockClass = 'agotado';
            stockText = 'Agotado';
        } else {
            stockClass = 'coming-soon';
            stockText = 'Próximamente';
        }
        
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
    // Actualizar filtro actual
    currentExpansionFilter = expansion;

    filteredProducts = products.filter(product => {
        let matches = true;

        // Filtro de búsqueda por palabras
        if (searchTerm) {
            const productName = product.name.toLowerCase();
            if (!productName.includes(searchTerm)) {
                matches = false;
            }
        }

        // Filtro de promociones
        if (showOnlyPromo && !product.promo) {
            matches = false;
        }

        if (category !== 'all' && product.category !== category) {
            matches = false;
        }
        // Filtro por expansión
        if (expansion !== 'all' && product.expansion !== expansion) {
            matches = false;
        }

        if (maxPrice && product.price > parseFloat(maxPrice)) {
            matches = false;
        }

        if (stock !== 'all' && product.stock !== stock) {
            matches = false;
        }

        if (language !== 'all') {
            if (language === 'none' && (!product.language || product.language.length === 0 || (product.language.length === 1 && product.language[0] === ''))) {
                // No hacer nada, coincide
            } else if (language === 'none') {
                matches = false;
            } else if (!product.language || !product.language.includes(language)) {
                matches = false;
            }
        }

        return matches;
    });

    // Ordenar productos por prioridad
    filteredProducts.sort((a, b) => {
        const priority = {
            'available': 1,
            'soon': 2,
            'encargo': 3,
            'agotado': 4
        };
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
    currentExpansionFilter = 'all';
    
    // Re-ordenar
    filteredProducts.sort((a, b) => {
        const priority = {
            'available': 1,
            'soon': 2,
            'encargo': 3,
            'agotado': 4
        };
        return priority[a.stock] - priority[b.stock];
    });
    
    renderProducts(filteredProducts);
}

function createCarousel(images, productId) {
    if (!images || images.length === 0) return '';
    
    if (images.length === 1) {
        return `<img src="${images[0]}" alt="Producto" class="product-image" 
                     onerror="this.src='https://via.placeholder.com/300x250/cccccc/666666?text=Imagen+no+disponible'">`;
    }
    
    const carouselId = `carousel-${productId}`;
    let carouselHTML = `
        <div class="carousel-container">
            <div class="carousel-images" id="${carouselId}-images">
    `;
    
    images.forEach((image, index) => {
        carouselHTML += `
            <div class="carousel-slide">
                <img src="${image}" alt="Producto ${index + 1}" 
                     onerror="this.src='https://via.placeholder.com/300x250/cccccc/666666?text=Imagen+no+disponible'">
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
    
    // Guardar estado del carrusel
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
    
    if (carousel.currentSlide < 0) {
        carousel.currentSlide = carousel.totalSlides - 1;
    } else if (carousel.currentSlide >= carousel.totalSlides) {
        carousel.currentSlide = 0;
    }
    
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

// Event listener para búsqueda en tiempo real
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchFilter');
    if (searchInput) {
        searchInput.addEventListener('input', filterProducts);
    }
});