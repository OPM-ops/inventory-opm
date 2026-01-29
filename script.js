let filteredProducts = [...products];

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
    const maxPrice = document.getElementById('priceFilter').value;
    const stock = document.getElementById('stockFilter').value;
    const language = document.getElementById('languageFilter').value;
    const searchTerm = document.getElementById('searchFilter').value.toLowerCase().trim();

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
    document.getElementById('priceFilter').value = '';
    document.getElementById('stockFilter').value = 'all';
    document.getElementById('languageFilter').value = 'all';
    document.getElementById('searchFilter').value = '';
    filteredProducts = [...products];
    
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