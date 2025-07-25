// Main JavaScript for Elito Catalogue

class ElitoCatalogue {
    constructor() {
        this.products = [];
        this.init();
    }

    async init() {
        try {
            await this.loadProducts();
            this.renderProducts();
            this.setupEventListeners();
            this.initializeAnimations();
        } catch (error) {
            console.error('Failed to initialize catalogue:', error);
            this.showError('Failed to load product catalogue');
        }
    }

    async loadProducts() {
        try {
            const response = await fetch('data/products.json');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            this.products = data.products;
        } catch (error) {
            console.error('Error loading products:', error);
            // Fallback to embedded data if JSON file fails
            this.products = this.getFallbackProducts();
        }
    }

    getFallbackProducts() {
        return [
            // Traditional Series
            {
                code: "FE03",
                name: "Cast Iron Dosa Tawa",
                size: "30cm",
                quantity: 50,
                series: "traditional",
                image: "images/products/FE03-dosa-tawa-30cm.jpg",
                bestseller: true,
                description: "Perfect for making crispy dosas with authentic taste"
            },
            {
                code: "FE04",
                name: "Cast Iron Roti Tawa",
                size: "26cm",
                quantity: 50,
                series: "traditional",
                image: "images/products/FE04-roti-tawa-26cm.jpg",
                description: "Ideal for soft rotis and chapatis"
            },
            {
                code: "FE06",
                name: "Cast Iron Paniyaram Pan",
                size: "12 Pits, 20cm",
                quantity: 50,
                series: "traditional",
                image: "images/products/FE06-paniyaram-pan-20cm.jpg",
                description: "Make 12 paniyarams at once"
            },
            {
                code: "FE07",
                name: "Cast Iron Kadai",
                size: "24cm",
                quantity: 50,
                series: "traditional",
                image: "images/products/FE07-kadai-24cm.jpg",
                description: "Versatile kadai for all your cooking needs"
            },
            {
                code: "FE09",
                name: "Cast Iron Dosa Tawa",
                size: "26cm",
                quantity: 50,
                series: "traditional",
                image: "images/products/FE09-dosa-tawa-26cm.jpg",
                description: "Compact size for smaller kitchens"
            },
            {
                code: "FE10",
                name: "Cast Iron Concave Tawa",
                size: "24cm",
                quantity: 50,
                series: "traditional",
                image: "images/products/FE10-concave-tawa-24cm.jpg",
                description: "Special concave design for unique cooking"
            },
            {
                code: "FE15",
                name: "Cast Iron Skillet",
                size: "15cm",
                quantity: 50,
                series: "traditional",
                image: "images/products/FE15-skillet-15cm.jpg",
                description: "Perfect for frying and searing"
            },
            {
                code: "FE16",
                name: "Cast Iron Kadai",
                size: "20cm - Curved Handle",
                quantity: 50,
                series: "traditional",
                image: "images/products/FE16-kadai-curved-handle-20cm.jpg",
                description: "Ergonomic curved handle design"
            },
            {
                code: "FE13",
                name: "Cast Iron Tadka Pan",
                size: "4 inch",
                quantity: 25,
                series: "traditional",
                image: "images/products/FE13-tadka-pan-4inch.jpg",
                description: "Essential for tempering spices"
            },
            // Premium White Handle Series
            {
                code: "LW01",
                name: "Cast Iron WH Dosa Tawa",
                size: "300mm",
                quantity: 50,
                series: "premium",
                image: "images/products/LW01-wh-dosa-tawa-300mm.jpg",
                bestseller: true,
                description: "Premium white handle dosa tawa"
            },
            {
                code: "LW02",
                name: "Cast Iron WH Roti Tawa",
                size: "205mm",
                quantity: 50,
                series: "premium",
                image: "images/products/LW02-wh-roti-tawa-205mm.jpg",
                description: "Elegant white handle roti tawa"
            },
            {
                code: "LW03",
                name: "Cast Iron WH Kadai",
                size: "255mm (10 inch)",
                quantity: 50,
                series: "premium",
                image: "images/products/LW03-wh-kadai-255mm.jpg",
                description: "Large kadai with premium white handle"
            },
            {
                code: "LW04",
                name: "Cast Iron WH Kadai",
                size: "205mm (8 inch)",
                quantity: 50,
                series: "premium",
                image: "images/products/LW04-wh-kadai-205mm.jpg",
                description: "Compact kadai with white handle"
            },
            {
                code: "LW05",
                name: "Cast Iron WH Wok",
                size: "255mm (10 inch)",
                quantity: 50,
                series: "premium",
                image: "images/products/LW05-wh-wok-255mm.jpg",
                description: "Perfect for stir-frying"
            },
            {
                code: "LW06",
                name: "Cast Iron WH Fry Pan",
                size: "255mm (10 inch)",
                quantity: 50,
                series: "premium",
                image: "images/products/LW06-wh-frypan-255mm.jpg",
                description: "Large frying pan with white handle"
            },
            {
                code: "LW07",
                name: "Cast Iron WH Fry Pan",
                size: "205mm (8 inch)",
                quantity: 50,
                series: "premium",
                image: "images/products/LW07-wh-frypan-205mm.jpg",
                description: "Compact frying pan"
            },
            {
                code: "LW08",
                name: "Cast Iron WH Grill Pan",
                size: "280mm (11 inch)",
                quantity: 50,
                series: "premium",
                image: "images/products/LW08-wh-grillpan-280mm.jpg",
                description: "Professional grilling at home"
            }
        ];
    }

    renderProducts() {
        this.renderTraditionalProducts();
        this.renderPremiumProducts();
    }

    renderTraditionalProducts() {
        const container = document.getElementById('traditional-products');
        const traditionalProducts = this.products.filter(p => p.series === 'traditional');
        
        container.innerHTML = traditionalProducts.map(product => 
            this.createProductCard(product)
        ).join('');
    }

    renderPremiumProducts() {
        const container = document.getElementById('premium-products');
        const premiumProducts = this.products.filter(p => p.series === 'premium');
        
        container.innerHTML = premiumProducts.map(product => 
            this.createProductCard(product)
        ).join('');
    }

    createProductCard(product) {
        const bestsellerBadge = product.bestseller ? 
            '<div class="bestseller-badge">Bestseller</div>' : '';
        
        const imageCarousel = product.images ? 
            product.images.map((img, index) => 
                `<img src="${img}" alt="${product.name} view ${index + 1}" class="carousel-image" loading="lazy">`
            ).join('') : 
            `<span style="color: #aaa; font-size: 3rem; display: flex; align-items: center; justify-content: center; width: 33.333%; height: 100%;">${this.getProductEmoji(product.name)}</span>`;
        
        const indicators = product.images ? 
            product.images.map((_, index) => 
                `<div class="indicator-dot ${index === 0 ? 'active' : ''}"></div>`
            ).join('') : '';
        
        return `
            <div class="product-card" data-product="${product.code}" onclick="window.elitoCatalogue.openProductModal('${product.code}')">
                <div class="product-image">
                    <div class="image-carousel">
                        ${imageCarousel}
                    </div>
                    <div class="image-indicators">
                        ${indicators}
                    </div>
                    ${bestsellerBadge}
                </div>
                <div class="product-info">
                    <div class="product-code">${product.code}</div>
                    <div class="product-name">${product.name}</div>
                    <div class="product-specs">
                        <span class="product-size">${product.size}</span>
                        <span class="product-qty">${product.quantity} Units</span>
                    </div>
                </div>
            </div>
        `;
    }

    openProductModal(productCode) {
        const product = this.products.find(p => p.code === productCode);
        if (!product) return;

        this.createModal(product);
    }

    createModal(product) {
        // Remove existing modal if present
        const existingModal = document.querySelector('.modal-overlay');
        if (existingModal) {
            existingModal.remove();
        }

        const modal = document.createElement('div');
        modal.className = 'modal-overlay';
        modal.innerHTML = this.getModalHTML(product);

        document.body.appendChild(modal);
        document.body.style.overflow = 'hidden';

        // Trigger animation
        setTimeout(() => {
            modal.classList.add('active');
        }, 10);

        this.setupModalEvents(modal, product);
    }

    getModalHTML(product) {
        const mainImage = product.images ? product.images[0] : '';
        const thumbnails = product.images ? 
            product.images.map((img, index) => 
                `<img src="${img}" alt="${product.name} view ${index + 1}" class="thumbnail ${index === 0 ? 'active' : ''}" data-index="${index}">`
            ).join('') : '';

        const features = product.features ? 
            product.features.map(feature => `<li>${feature}</li>`).join('') : '';

        const specifications = product.specifications ? 
            Object.entries(product.specifications).map(([key, value]) => 
                `<div class="spec-item">
                    <span class="spec-label">${key.charAt(0).toUpperCase() + key.slice(1)}:</span>
                    <span class="spec-value">${value}</span>
                </div>`
            ).join('') : '';

        return `
            <div class="modal-content">
                <button class="modal-close" onclick="window.elitoCatalogue.closeModal()">&times;</button>
                
                <div class="modal-gallery">
                    <img src="${mainImage}" alt="${product.name}" class="gallery-main" id="gallery-main">
                </div>
                
                ${product.images && product.images.length > 1 ? `
                <div class="gallery-thumbnails">
                    ${thumbnails}
                </div>
                ` : ''}
                
                <div class="modal-details">
                    <div class="modal-header">
                        <div>
                            <div class="modal-code">${product.code}</div>
                            <h2 class="modal-title">${product.name}</h2>
                            <div class="modal-size">${product.size}</div>
                        </div>
                    </div>
                    
                    <p class="modal-description">
                        ${product.detailedDescription || product.description}
                    </p>
                    
                    ${features ? `
                    <div class="modal-section">
                        <h3>Key Features</h3>
                        <ul class="features-list">
                            ${features}
                        </ul>
                    </div>
                    ` : ''}
                    
                    ${specifications ? `
                    <div class="modal-section">
                        <h3>Specifications</h3>
                        <div class="specifications-grid">
                            ${specifications}
                        </div>
                    </div>
                    ` : ''}
                </div>
            </div>
        `;
    }

    setupModalEvents(modal, product) {
        // Close modal on overlay click
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                this.closeModal();
            }
        });

        // Thumbnail clicks
        const thumbnails = modal.querySelectorAll('.thumbnail');
        const mainImage = modal.querySelector('.gallery-main');
        
        thumbnails.forEach((thumb, index) => {
            thumb.addEventListener('click', () => {
                // Update active thumbnail
                thumbnails.forEach(t => t.classList.remove('active'));
                thumb.classList.add('active');
                
                // Update main image
                if (product.images && product.images[index]) {
                    mainImage.src = product.images[index];
                    mainImage.alt = `${product.name} view ${index + 1}`;
                }
            });
        });

        // Keyboard navigation
        document.addEventListener('keydown', this.handleModalKeyboard.bind(this));
    }

    handleModalKeyboard(e) {
        if (e.key === 'Escape') {
            this.closeModal();
        }
    }

    closeModal() {
        const modal = document.querySelector('.modal-overlay');
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
            
            setTimeout(() => {
                modal.remove();
                document.removeEventListener('keydown', this.handleModalKeyboard);
            }, 300);
        }
    }

    getProductEmoji(productName) {
        const emojiMap = {
            'dosa': '🥞',
            'roti': '🫓',
            'paniyaram': '⚫',
            'kadai': '🍳',
            'skillet': '🍳',
            'tadka': '🥄',
            'wok': '🍜',
            'fry': '🍳',
            'grill': '🥩'
        };
        
        const productLower = productName.toLowerCase();
        for (const [key, emoji] of Object.entries(emojiMap)) {
            if (productLower.includes(key)) {
                return emoji;
            }
        }
        return '🍳'; // default
    }

    setupEventListeners() {
        // Product card clicks are handled by onclick in HTML
        
        // Add scroll animations
        this.setupScrollAnimations();

        // Handle image loading errors
        this.setupImageErrorHandling();

        // Setup carousel indicators
        this.setupCarouselIndicators();
    }

    setupCarouselIndicators() {
        document.addEventListener('animationiteration', (e) => {
            if (e.animationName === 'slideImages') {
                const productCard = e.target.closest('.product-card');
                const indicators = productCard.querySelectorAll('.indicator-dot');
                const currentTime = e.elapsedTime;
                const cycleTime = 4; // Total animation duration
                const phaseTime = cycleTime / 3; // Time per image
                
                indicators.forEach(dot => dot.classList.remove('active'));
                
                const activeIndex = Math.floor((currentTime % cycleTime) / phaseTime);
                if (indicators[activeIndex]) {
                    indicators[activeIndex].classList.add('active');
                }
            }
        });
    }

    handleProductClick(productCard) {
        const productCode = productCard.dataset.product;
        this.openProductModal(productCode);
    }

    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe all product cards
        document.querySelectorAll('.product-card').forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(card);
        });
    }

    setupImageErrorHandling() {
        document.querySelectorAll('.product-image img').forEach(img => {
            img.addEventListener('error', (e) => {
                console.warn('Image failed to load:', e.target.src);
                // Fallback handled in onerror attribute
            });
        });
    }

    initializeAnimations() {
        // Banner scroll animation is handled by CSS
        
        // Add smooth scrolling for internal links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    showError(message) {
        console.error(message);
        // You could show a user-friendly error message here
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #dc3545;
            color: white;
            padding: 12px 20px;
            border-radius: 6px;
            z-index: 1000;
            animation: slideIn 0.3s ease;
        `;
        errorDiv.textContent = message;
        document.body.appendChild(errorDiv);
        
        setTimeout(() => {
            errorDiv.remove();
        }, 5000);
    }

    // Utility method to update product data
    updateProduct(code, updates) {
        const productIndex = this.products.findIndex(p => p.code === code);
        if (productIndex !== -1) {
            this.products[productIndex] = { ...this.products[productIndex], ...updates };
            this.renderProducts();
        }
    }

    // Method to add new product
    addProduct(product) {
        this.products.push(product);
        this.renderProducts();
    }

    // Export products data (useful for generating JSON)
    exportProducts() {
        return JSON.stringify({ products: this.products }, null, 2);
    }
}

// Initialize the catalogue when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.elitoCatalogue = new ElitoCatalogue();
});

// Export for external use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ElitoCatalogue;
}