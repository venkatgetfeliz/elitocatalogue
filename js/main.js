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
                images: [
                    "images/products/FE03-dosa-tawa-30cm/FE03-dosa-tawa-30cm-main.jpg",
                    "images/products/FE03-dosa-tawa-30cm/FE03-dosa-tawa-30cm-side.jpg",
                    "images/products/FE03-dosa-tawa-30cm/FE03-dosa-tawa-30cm-inuse.jpg"
                ],
                bestseller: true,
                description: "Perfect for making crispy dosas with authentic taste",
                detailedDescription: "Our flagship 30cm Cast Iron Dosa Tawa is the perfect companion for making authentic South Indian dosas. Crafted from premium cast iron, this tawa provides superior heat retention and even distribution, ensuring your dosas cook perfectly every time.",
                features: [
                    "Even heat distribution across the entire surface",
                    "Pre-seasoned with natural oils for immediate use",
                    "Iron fortification adds nutrients to your food",
                    "Develops natural non-stick properties over time",
                    "Perfect 30cm size for family portions",
                    "Compatible with gas, electric, and induction cooktops"
                ],
                specifications: {
                    "diameter": "30cm",
                    "weight": "2.4kg",
                    "thickness": "4mm",
                    "material": "100% Pure Cast Iron",
                    "finish": "Pre-seasoned",
                    "warranty": "Lifetime with proper care"
                }
            },
            {
                code: "FE04",
                name: "Cast Iron Roti Tawa",
                size: "26cm",
                quantity: 50,
                series: "traditional",
                images: [
                    "images/products/FE04-roti-tawa-26cm/FE04-roti-tawa-26cm-main.jpg",
                    "images/products/FE04-roti-tawa-26cm/FE04-roti-tawa-26cm-top.jpg",
                    "images/products/FE04-roti-tawa-26cm/FE04-roti-tawa-26cm-cooking.jpg"
                ],
                description: "Ideal for soft rotis and chapatis with perfect browning",
                detailedDescription: "Create the softest, most flavorful rotis with our 26cm Cast Iron Roti Tawa. The flat, smooth surface ensures even cooking while the cast iron material retains heat beautifully.",
                features: [
                    "Flat surface design for perfect roti cooking",
                    "Quick and even heating",
                    "Easy to clean and maintain",
                    "Natural iron supplementation",
                    "Compact 26cm size perfect for daily use"
                ],
                specifications: {
                    "diameter": "26cm",
                    "weight": "1.8kg",
                    "thickness": "3.5mm",
                    "material": "100% Pure Cast Iron",
                    "finish": "Pre-seasoned"
                }
            },
            {
                code: "FE06",
                name: "Cast Iron Paniyaram Pan",
                size: "12 Pits, 20cm",
                quantity: 50,
                series: "traditional",
                images: [
                    "images/products/FE06-paniyaram-pan-20cm/FE06-paniyaram-pan-20cm-main.jpg",
                    "images/products/FE06-paniyaram-pan-20cm/FE06-paniyaram-pan-20cm-detail.jpg",
                    "images/products/FE06-paniyaram-pan-20cm/FE06-paniyaram-pan-20cm-filled.jpg"
                ],
                description: "Make 12 perfectly shaped paniyarams at once",
                detailedDescription: "Traditional South Indian cooking made easy with our 12-pit Paniyaram Pan. Each pit is perfectly shaped to create uniform, round paniyarams that cook evenly.",
                features: [
                    "12 perfectly shaped pits for uniform cooking",
                    "Even heat distribution to all pits",
                    "Traditional design for authentic taste",
                    "Suitable for both sweet and savory preparations",
                    "Easy release with proper seasoning"
                ],
                specifications: {
                    "diameter": "20cm",
                    "pits": "12",
                    "weight": "1.5kg",
                    "material": "100% Pure Cast Iron"
                }
            },
            {
                code: "FE07",
                name: "Cast Iron Kadai",
                size: "24cm",
                quantity: 50,
                series: "traditional",
                images: [
                    "images/products/FE07-kadai-24cm/FE07-kadai-24cm-main.jpg",
                    "images/products/FE07-kadai-24cm/FE07-kadai-24cm-angle.jpg",
                    "images/products/FE07-kadai-24cm/FE07-kadai-24cm-cooking.jpg"
                ],
                description: "Versatile kadai for all your cooking needs",
                detailedDescription: "Our 24cm Cast Iron Kadai is the ultimate multi-purpose cooking vessel. From deep frying samosas to cooking curries, this kadai handles it all with superior heat retention.",
                features: [
                    "Deep frying capability",
                    "Curved bottom design for efficient cooking",
                    "Multi-purpose use for various dishes",
                    "Superior heat retention",
                    "Perfect size for family cooking"
                ],
                specifications: {
                    "diameter": "24cm",
                    "depth": "8cm",
                    "weight": "2.2kg",
                    "material": "100% Pure Cast Iron"
                }
            },
            {
                code: "FE09",
                name: "Cast Iron Dosa Tawa",
                size: "26cm",
                quantity: 50,
                series: "traditional",
                images: [
                    "images/products/FE09-dosa-tawa-26cm/FE09-dosa-tawa-26cm-main.jpg",
                    "images/products/FE09-dosa-tawa-26cm/FE09-dosa-tawa-26cm-surface.jpg",
                    "images/products/FE09-dosa-tawa-26cm/FE09-dosa-tawa-26cm-inuse.jpg"
                ],
                description: "Compact size for smaller kitchens",
                detailedDescription: "Perfect for smaller families or compact kitchens, our 26cm Cast Iron Dosa Tawa delivers the same authentic taste and health benefits in a more manageable size.",
                features: [
                    "Space-saving design",
                    "Perfect for 2-4 people",
                    "Easy handling and storage",
                    "Same iron fortification benefits",
                    "Quick heating due to smaller size"
                ],
                specifications: {
                    "diameter": "26cm",
                    "weight": "1.9kg",
                    "thickness": "4mm",
                    "material": "100% Pure Cast Iron"
                }
            },
            {
                code: "FE10",
                name: "Cast Iron Concave Tawa",
                size: "24cm",
                quantity: 50,
                series: "traditional",
                images: [
                    "images/products/FE10-concave-tawa-24cm/FE10-concave-tawa-24cm-main.jpg",
                    "images/products/FE10-concave-tawa-24cm/FE10-concave-tawa-24cm-profile.jpg",
                    "images/products/FE10-concave-tawa-24cm/FE10-concave-tawa-24cm-cooking.jpg"
                ],
                description: "Special concave design for unique cooking",
                detailedDescription: "Our Concave Tawa features a unique curved design that prevents oil pooling and provides versatile cooking options for various Indian breads and dishes.",
                features: [
                    "Concave cooking surface",
                    "Oil pooling prevention",
                    "Versatile cooking applications",
                    "Even heat distribution",
                    "Easy food handling"
                ],
                specifications: {
                    "diameter": "24cm",
                    "weight": "2.0kg",
                    "material": "100% Pure Cast Iron"
                }
            },
            {
                code: "FE15",
                name: "Cast Iron Skillet",
                size: "15cm",
                quantity: 50,
                series: "traditional",
                images: [
                    "images/products/FE15-skillet-15cm/FE15-skillet-15cm-main.jpg",
                    "images/products/FE15-skillet-15cm/FE15-skillet-15cm-side.jpg",
                    "images/products/FE15-skillet-15cm/FE15-skillet-15cm-frying.jpg"
                ],
                description: "Perfect for frying and searing",
                detailedDescription: "Compact yet powerful, our 15cm Cast Iron Skillet is ideal for small portions, individual servings, and precise cooking tasks.",
                features: [
                    "Compact size for individual portions",
                    "High heat retention",
                    "Perfect for searing and frying",
                    "Easy to handle",
                    "Ideal for small kitchens"
                ],
                specifications: {
                    "diameter": "15cm",
                    "weight": "1.2kg",
                    "material": "100% Pure Cast Iron"
                }
            },
            {
                code: "FE16",
                name: "Cast Iron Kadai",
                size: "20cm - Curved Handle",
                quantity: 50,
                series: "traditional",
                images: [
                    "images/products/FE16-kadai-curved-handle-20cm/FE16-kadai-curved-handle-20cm-main.jpg",
                    "images/products/FE16-kadai-curved-handle-20cm/FE16-kadai-curved-handle-20cm-handle.jpg",
                    "images/products/FE16-kadai-curved-handle-20cm/FE16-kadai-curved-handle-20cm-cooking.jpg"
                ],
                description: "Ergonomic curved handle design",
                detailedDescription: "Featuring an ergonomically designed curved handle, this kadai provides better grip and reduced fatigue during cooking sessions.",
                features: [
                    "Curved handle for comfort",
                    "Better grip and control",
                    "Reduced cooking fatigue",
                    "Compact 20cm size",
                    "Perfect for daily use"
                ],
                specifications: {
                    "diameter": "20cm",
                    "weight": "1.8kg",
                    "handleType": "Curved ergonomic",
                    "material": "100% Pure Cast Iron"
                }
            },
            {
                code: "FE13",
                name: "Cast Iron Tadka Pan",
                size: "4 inch",
                quantity: 25,
                series: "traditional",
                images: [
                    "images/products/FE13-tadka-pan-4inch/FE13-tadka-pan-4inch-main.jpg",
                    "images/products/FE13-tadka-pan-4inch/FE13-tadka-pan-4inch-size.jpg",
                    "images/products/FE13-tadka-pan-4inch/FE13-tadka-pan-4inch-tempering.jpg"
                ],
                description: "Essential for tempering spices",
                detailedDescription: "A must-have for every Indian kitchen, our small Tadka Pan is perfect for tempering spices and preparing small portions.",
                features: [
                    "Perfect size for tempering",
                    "Quick heating",
                    "Essential kitchen tool",
                    "Easy to handle",
                    "Traditional design"
                ],
                specifications: {
                    "diameter": "4 inch",
                    "weight": "0.8kg",
                    "material": "100% Pure Cast Iron"
                }
            },
            // Premium White Handle Series
            {
                code: "LW01",
                name: "Cast Iron WH Dosa Tawa",
                size: "300mm",
                quantity: 50,
                series: "premium",
                images: [
                    "images/products/LW01-wh-dosa-tawa-300mm/LW01-wh-dosa-tawa-300mm-main.jpg",
                    "images/products/LW01-wh-dosa-tawa-300mm/LW01-wh-dosa-tawa-300mm-handle.jpg",
                    "images/products/LW01-wh-dosa-tawa-300mm/LW01-wh-dosa-tawa-300mm-cooking.jpg"
                ],
                bestseller: true,
                description: "Premium white handle dosa tawa",
                detailedDescription: "Combining traditional cast iron benefits with modern ergonomic design, our Premium White Handle Dosa Tawa features a heat-resistant white handle for comfortable grip.",
                features: [
                    "Premium white handle for comfortable grip",
                    "Heat-resistant handle design",
                    "Professional finish and appearance",
                    "Same cast iron cooking benefits",
                    "Easy to clean and maintain"
                ],
                specifications: {
                    "diameter": "300mm",
                    "weight": "2.5kg",
                    "handleType": "Heat-resistant white handle",
                    "material": "100% Pure Cast Iron"
                }
            },
            {
                code: "LW02",
                name: "Cast Iron WH Roti Tawa",
                size: "205mm",
                quantity: 50,
                series: "premium",
                images: [
                    "images/products/LW02-wh-roti-tawa-205mm/LW02-wh-roti-tawa-205mm-main.jpg",
                    "images/products/LW02-wh-roti-tawa-205mm/LW02-wh-roti-tawa-205mm-handle.jpg",
                    "images/products/LW02-wh-roti-tawa-205mm/LW02-wh-roti-tawa-205mm-cooking.jpg"
                ],
                description: "Elegant white handle roti tawa",
                detailedDescription: "Perfect for daily roti making with the added comfort of our signature white handle design.",
                features: [
                    "Elegant white handle design",
                    "Comfortable grip for daily use",
                    "Easy maintenance",
                    "Professional appearance",
                    "Perfect roti cooking surface"
                ],
                specifications: {
                    "diameter": "205mm",
                    "weight": "1.9kg",
                    "handleType": "Heat-resistant white handle",
                    "material": "100% Pure Cast Iron"
                }
            },
            {
                code: "LW03",
                name: "Cast Iron WH Kadai",
                size: "255mm (10 inch)",
                quantity: 50,
                series: "premium",
                images: [
                    "images/products/LW03-wh-kadai-255mm/LW03-wh-kadai-255mm-main.jpg",
                    "images/products/LW03-wh-kadai-255mm/LW03-wh-kadai-255mm-handle.jpg",
                    "images/products/LW03-wh-kadai-255mm/LW03-wh-kadai-255mm-cooking.jpg"
                ],
                description: "Large kadai with premium white handle",
                detailedDescription: "Our largest premium kadai perfect for family cooking with the comfort of heat-resistant white handles.",
                features: [
                    "Large cooking capacity",
                    "Premium white handle design",
                    "Professional grade quality",
                    "Heat-resistant handles",
                    "Perfect for family meals"
                ],
                specifications: {
                    "diameter": "255mm",
                    "weight": "2.8kg",
                    "handleType": "Heat-resistant white handle",
                    "material": "100% Pure Cast Iron"
                }
            },
            {
                code: "LW04",
                name: "Cast Iron WH Kadai",
                size: "205mm (8 inch)",
                quantity: 50,
                series: "premium",
                images: [
                    "images/products/LW04-wh-kadai-205mm/LW04-wh-kadai-205mm-main.jpg",
                    "images/products/LW04-wh-kadai-205mm/LW04-wh-kadai-205mm-handle.jpg",
                    "images/products/LW04-wh-kadai-205mm/LW04-wh-kadai-205mm-cooking.jpg"
                ],
                description: "Compact kadai with white handle",
                detailedDescription: "Perfect size for small families with all the premium features and comfortable white handle design.",
                features: [
                    "Compact design for small families",
                    "White handle comfort",
                    "Easy storage",
                    "Professional appearance",
                    "Versatile cooking"
                ],
                specifications: {
                    "diameter": "205mm",
                    "weight": "2.1kg",
                    "handleType": "Heat-resistant white handle",
                    "material": "100% Pure Cast Iron"
                }
            },
            {
                code: "LW05",
                name: "Cast Iron WH Wok",
                size: "255mm (10 inch)",
                quantity: 50,
                series: "premium",
                images: [
                    "images/products/LW05-wh-wok-255mm/LW05-wh-wok-255mm-main.jpg",
                    "images/products/LW05-wh-wok-255mm/LW05-wh-wok-255mm-handle.jpg",
                    "images/products/LW05-wh-wok-255mm/LW05-wh-wok-255mm-stirfry.jpg"
                ],
                description: "Perfect for stir-frying",
                detailedDescription: "Traditional wok design with modern white handle comfort, perfect for high-heat stir-frying and Asian cooking techniques.",
                features: [
                    "Traditional wok shape",
                    "High heat cooking capability",
                    "Stir-fry specialist",
                    "Comfortable white handle",
                    "Professional results"
                ],
                specifications: {
                    "diameter": "255mm",
                    "weight": "2.3kg",
                    "handleType": "Heat-resistant white handle",
                    "material": "100% Pure Cast Iron"
                }
            },
            {
                code: "LW06",
                name: "Cast Iron WH Fry Pan",
                size: "255mm (10 inch)",
                quantity: 50,
                series: "premium",
                images: [
                    "images/products/LW06-wh-frypan-255mm/LW06-wh-frypan-255mm-main.jpg",
                    "images/products/LW06-wh-frypan-255mm/LW06-wh-frypan-255mm-handle.jpg",
                    "images/products/LW06-wh-frypan-255mm/LW06-wh-frypan-255mm-frying.jpg"
                ],
                description: "Large frying pan with white handle",
                detailedDescription: "Spacious frying surface with premium white handle design for comfortable cooking of larger portions.",
                features: [
                    "Large frying surface",
                    "Even heat distribution",
                    "Premium white handle",
                    "Professional finish",
                    "Comfortable grip"
                ],
                specifications: {
                    "diameter": "255mm",
                    "weight": "2.4kg",
                    "handleType": "Heat-resistant white handle",
                    "material": "100% Pure Cast Iron"
                }
            },
            {
                code: "LW07",
                name: "Cast Iron WH Fry Pan",
                size: "205mm (8 inch)",
                quantity: 50,
                series: "premium",
                images: [
                    "images/products/LW07-wh-frypan-205mm/LW07-wh-frypan-205mm-main.jpg",
                    "images/products/LW07-wh-frypan-205mm/LW07-wh-frypan-205mm-handle.jpg",
                    "images/products/LW07-wh-frypan-205mm/LW07-wh-frypan-205mm-cooking.jpg"
                ],
                description: "Compact frying pan",
                detailedDescription: "Perfect portion size for individuals or couples with the same premium white handle comfort and cast iron benefits.",
                features: [
                    "Perfect portion size",
                    "Easy handling",
                    "Quick cooking",
                    "White handle comfort",
                    "Compact storage"
                ],
                specifications: {
                    "diameter": "205mm",
                    "weight": "1.7kg",
                    "handleType": "Heat-resistant white handle",
                    "material": "100% Pure Cast Iron"
                }
            },
            {
                code: "LW08",
                name: "Cast Iron WH Grill Pan",
                size: "280mm (11 inch)",
                quantity: 50,
                series: "premium",
                images: [
                    "images/products/LW08-wh-grillpan-280mm/LW08-wh-grillpan-280mm-main.jpg",
                    "images/products/LW08-wh-grillpan-280mm/LW08-wh-grillpan-280mm-ridges.jpg",
                    "images/products/LW08-wh-grillpan-280mm/LW08-wh-grillpan-280mm-grilling.jpg"
                ],
                description: "Professional grilling at home",
                detailedDescription: "Bring restaurant-quality grilling to your home kitchen with our ridged grill pan featuring comfortable white handles.",
                features: [
                    "Ridged cooking surface for grill marks",
                    "Professional grilling results",
                    "Healthy cooking with fat drainage",
                    "Large cooking surface",
                    "Heat-resistant white handles"
                ],
                specifications: {
                    "diameter": "280mm",
                    "weight": "2.9kg",
                    "handleType": "Heat-resistant white handle",
                    "material": "100% Pure Cast Iron",
                    "surface": "Ridged for grilling"
                }
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