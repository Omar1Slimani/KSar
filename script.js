        // Enhanced product data with high-quality images
        const products = [
            // Men's Products
            {
                id: 1,
                name: "قميص رجالي كلاسيكي فاخر",
                description: "قميص من القطن المصري الفاخر بتصميم كلاسيكي أنيق مناسب للمناسبات الرسمية والمهنية",
                price: 299,
                image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=400&fit=crop&q=80",
                category: "men"
            },
            {
                id: 2,
                name: "بنطلون جينز رجالي متميز",
                description: "جينز بتصميم عصري من أجود أنواع الدنيم مع قصة مريحة وأنيقة للاستخدام اليومي",
                price: 249,
                image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop&q=80",
                category: "men"
            },
            {
                id: 3,
                name: "جاكيت رجالي شتوي راقي",
                description: "جاكيت من الصوف الطبيعي بتصميم عصري وأنيق، مثالي للطقس البارد مع لمسة من الفخامة",
                price: 599,
                image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop&q=80",
                category: "men"
            },
            
            // Women's Products
            {
                id: 4,
                name: "فستان نسائي أنيق ومتميز",
                description: "فستان بتصميم راقي من أقمشة فاخرة، مناسب للمناسبات الخاصة والسهرات الراقية",
                price: 449,
                image: "https://images.unsplash.com/photo-1566479179817-c0f5b7b0a33b?w=400&h=400&fit=crop&q=80",
                category: "women"
            },
            {
                id: 5,
                name: "بلوزة نسائية حريرية فاخرة",
                description: "بلوزة ناعمة من الحرير الطبيعي الخالص بتصميم أنيق يناسب الإطلالات المهنية والكاجوال",
                price: 399,
                image: "https://images.unsplash.com/photo-1564257577633-0ed51cffdaaf?w=400&h=400&fit=crop&q=80",
                category: "women"
            },
            {
                id: 6,
                name: "تنورة كاجوال عصرية",
                description: "تنورة مريحة بتصميم عصري من أقمشة عالية الجودة، مثالية للإطلالات اليومية الأنيقة",
                price: 199,
                image: "https://images.unsplash.com/photo-1583496661160-fb5886a13d27?w=400&h=400&fit=crop&q=80",
                category: "women"
            },
            
            // Accessories
            {
                id: 7,
                name: "ساعة يد كلاسيكية راقية",
                description: "ساعة أنيقة بتصميم كلاسيكي خالد من مواد عالية الجودة مع حركة دقيقة وموثوقة",
                price: 799,
                image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=400&fit=crop&q=80",
                category: "accessories"
            },
            {
                id: 8,
                name: "حقيبة يد جلدية فاخرة",
                description: "حقيبة يد من الجلد الطبيعي الإيطالي عالي الجودة بتصميم أنيق ووظائف عملية متميزة",
                price: 899,
                image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop&q=80",
                category: "accessories"
            },
            {
                id: 9,
                name: "نظارة شمسية عصرية متميزة",
                description: "نظارة شمسية أنيقة بتصميم عصري مع حماية 100% من الأشعة فوق البنفسجية وعدسات عالية الجودة",
                price: 299,
                image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=400&fit=crop&q=80",
                category: "accessories"
            },
            {
                id: 10,
                name: "حذاء رجالي كلاسيكي",
                description: "حذاء من الجلد الطبيعي الفاخر بتصميم كلاسيكي أنيق، مثالي للمناسبات الرسمية والمهنية",
                price: 699,
                image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop&q=80",
                category: "men"
            },
            {
                id: 11,
                name: "حذاء نسائي أنيق بكعب",
                description: "حذاء بكعب متوسط من مواد عالية الجودة بتصميم أنيق ومريح للاستخدام طوال اليوم",
                price: 549,
                image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=400&fit=crop&q=80",
                category: "women"
            },
            {
                id: 12,
                name: "إكسسوار شعر راقي",
                description: "إكسسوار شعر بتصميم راقي ومتميز من مواد فاخرة، يضيف لمسة أنيقة لإطلالتك",
                price: 149,
                image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop&q=80",
                category: "accessories"
            }
        ];

        let cart = [];
        let currentCategory = 'all';
        let currentSection = 'products';

        // Initialize the store
        function initStore() {
            displayProducts(products);
            updateCartCount();
        }

        // Show different sections with enhanced navigation
        function showSection(sectionName) {
            // Hide all sections
            document.querySelectorAll('.page-section').forEach(section => {
                section.classList.remove('active');
            });
            
            // Show selected section
            document.getElementById(sectionName + '-section').classList.add('active');
            currentSection = sectionName;

            // Update navigation active states
            document.querySelectorAll('.nav-links a, .mobile-nav-item').forEach(link => {
                link.classList.remove('active');
            });
            
            // Add active class to current section links
            document.querySelectorAll(`[onclick="showSection('${sectionName}')"]`).forEach(link => {
                link.classList.add('active');
            });

            // Smooth scroll to top on section change
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // Enhanced product display with animations
        function displayProducts(productsToShow) {
            const grid = document.getElementById('productsGrid');
            grid.innerHTML = '';

            productsToShow.forEach((product, index) => {
                const productCard = document.createElement('div');
                productCard.className = 'product-card';
                productCard.style.animationDelay = `${index * 0.1}s`;
                
                productCard.innerHTML = `
                    <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
                    <div class="product-info">
                        <h3 class="product-title">${product.name}</h3>
                        <p class="product-description">${product.description}</p>
                        <div class="product-price">${product.price}</div>
                        <button class="add-to-cart-btn" onclick="addToCart(${product.id})" aria-label="إضافة ${product.name} إلى السلة">
                            إضافة إلى السلة
                        </button>
                    </div>
                `;
                grid.appendChild(productCard);
            });
        }

        // Enhanced filter products with smooth transitions
        function filterProducts(category) {
            currentCategory = category;
            
            // Update active button
            document.querySelectorAll('.category-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            event.target.classList.add('active');

            // Filter and display products with animation
            const grid = document.getElementById('productsGrid');
            grid.style.opacity = '0.5';
            
            setTimeout(() => {
                if (category === 'all') {
                    displayProducts(products);
                } else {
                    const filteredProducts = products.filter(product => product.category === category);
                    displayProducts(filteredProducts);
                }
                grid.style.opacity = '1';
            }, 200);
        }

        // Enhanced add to cart with visual feedback
        function addToCart(productId) {
            const product = products.find(p => p.id === productId);
            const existingItem = cart.find(item => item.id === productId);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({...product, quantity: 1});
            }

            updateCartCount();
            
            // Enhanced visual feedback
            const button = event.target;
            const originalText = button.innerHTML;
            const originalBg = button.style.background;
            
            button.innerHTML = '✓ تم الإضافة بنجاح';
            button.style.background = 'var(--accent-green)';
            button.style.transform = 'scale(0.95)';
            button.disabled = true;
            
            // Add cart animation effect
            const cartBtn = document.querySelector('.cart-btn');
            cartBtn.style.transform = 'scale(1.1)';
            
            setTimeout(() => {
                button.innerHTML = originalText;
                button.style.background = originalBg;
                button.style.transform = '';
                button.disabled = false;
                cartBtn.style.transform = '';
            }, 1500);
        }

        // Enhanced cart count update
        function updateCartCount() {
            const count = cart.reduce((total, item) => total + item.quantity, 0);
            const cartCountEl = document.getElementById('cartCount');
            const mobileCartCountEl = document.getElementById('mobileCartCount');
            
            cartCountEl.textContent = count;
            mobileCartCountEl.textContent = count;
            
            if (count > 0) {
                cartCountEl.style.display = 'flex';
                mobileCartCountEl.style.display = 'flex';
            } else {
                cartCountEl.style.display = 'none';
                mobileCartCountEl.style.display = 'none';
            }

            // Add pulse animation for new items
            if (count > 0) {
                cartCountEl.style.animation = 'none';
                mobileCartCountEl.style.animation = 'none';
                setTimeout(() => {
                    cartCountEl.style.animation = 'pulse 0.6s ease-in-out';
                    mobileCartCountEl.style.animation = 'pulse 0.6s ease-in-out';
                }, 10);
            }
        }

        // Enhanced cart modal
        function openCart() {
            displayCartItems();
            const modal = document.getElementById('cartModal');
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
            
            // Add opening animation
            setTimeout(() => {
                modal.style.opacity = '1';
            }, 10);
        }

        function closeCart() {
            const modal = document.getElementById('cartModal');
            modal.style.opacity = '0';
            
            setTimeout(() => {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }, 300);
            
            document.getElementById('orderForm').style.display = 'none';
            document.getElementById('successMessage').style.display = 'none';
        }

        // Enhanced cart items display
        function displayCartItems() {
            const cartItemsContainer = document.getElementById('cartItems');
            cartItemsContainer.innerHTML = '';

            if (cart.length === 0) {
                cartItemsContainer.innerHTML = `
                    <div style="text-align: center; padding: 3rem; color: var(--mid-gray);">
                        <div style="font-size: 4rem; margin-bottom: 1rem; opacity: 0.5;">🛒</div>
                        <p style="font-size: 1.125rem;">السلة فارغة</p>
                        <p style="font-size: 0.9rem; margin-top: 0.5rem;">ابدأ بإضافة بعض المنتجات الرائعة</p>
                    </div>
                `;
                document.getElementById('totalPrice').textContent = '0';
                return;
            }

            cart.forEach((item, index) => {
                const cartItem = document.createElement('div');
                cartItem.className = 'cart-item';
                cartItem.style.animationDelay = `${index * 0.1}s`;
                
                cartItem.innerHTML = `
                    <img src="${item.image}" alt="${item.name}" loading="lazy">
                    <div class="item-details">
                        <div class="item-name">${item.name}</div>
                        <div class="item-price">${item.price} درهم</div>
                        <div class="quantity-controls">
                            <button class="quantity-btn" onclick="decreaseQuantity(${item.id})" aria-label="تقليل الكمية">−</button>
                            <span class="quantity-display">الكمية: ${item.quantity}</span>
                            <button class="quantity-btn" onclick="increaseQuantity(${item.id})" aria-label="زيادة الكمية">+</button>
                        </div>
                    </div>
                    <button class="remove-btn" onclick="removeFromCart(${item.id})" aria-label="حذف ${item.name}">حذف</button>
                `;
                cartItemsContainer.appendChild(cartItem);
            });

            updateTotalPrice();
        }

        // Enhanced total price calculation
        function updateTotalPrice() {
            const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            const totalEl = document.getElementById('totalPrice');
            
            // Animate price change
            totalEl.style.transform = 'scale(0.8)';
            setTimeout(() => {
                totalEl.textContent = total.toLocaleString();
                totalEl.style.transform = 'scale(1)';
            }, 150);
        }

        // Quantity management functions
        function increaseQuantity(productId) {
            const item = cart.find(item => item.id === productId);
            if (item) {
                item.quantity += 1;
                displayCartItems();
                updateCartCount();
            }
        }

        function decreaseQuantity(productId) {
            const item = cart.find(item => item.id === productId);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
                displayCartItems();
                updateCartCount();
            }
        }

        function removeFromCart(productId) {
            const itemIndex = cart.findIndex(item => item.id === productId);
            if (itemIndex > -1) {
                // Add remove animation
                const cartItem = document.querySelectorAll('.cart-item')[itemIndex];
                cartItem.style.transform = 'translateX(100%)';
                cartItem.style.opacity = '0';
                
                setTimeout(() => {
                    cart.splice(itemIndex, 1);
                    displayCartItems();
                    updateCartCount();
                }, 300);
            }
        }

        // Enhanced checkout process
        function proceedToCheckout() {
            if (cart.length === 0) {
                showNotification('السلة فارغة! يرجى إضافة بعض المنتجات أولاً.', 'warning');
                return;
            }
            
            const orderForm = document.getElementById('orderForm');
            orderForm.style.display = 'block';
            orderForm.scrollIntoView({ behavior: 'smooth' });
        }

        // Enhanced form submissions with better UX
        document.getElementById('customerForm').addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const submitButton = document.querySelector('.submit-btn');
            const submitText = document.getElementById('submitText');
            const loadingSpinner = document.getElementById('loadingSpinner');
            
            // Show loading state
            submitText.style.display = 'none';
            loadingSpinner.style.display = 'inline-block';
            submitButton.disabled = true;

            // Prepare enhanced order data
            const formData = new FormData(e.target);
            const customerInfo = {
                firstName: formData.get('firstName'),
                lastName: formData.get('lastName'),
                phone: formData.get('phone'),
                city: formData.get('city'),
                address: formData.get('address')
            };

            const orderData = {
                customer: customerInfo,
                items: cart.map(item => ({
                    id: item.id,
                    name: item.name,
                    price: item.price,
                    quantity: item.quantity,
                    subtotal: item.price * item.quantity
                })),
                total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
                orderDate: new Date().toISOString(),
                orderId: 'FSO_' + Date.now(),
                status: 'pending'
            };

            try {
                // Simulate enhanced API call
                await new Promise(resolve => setTimeout(resolve, 2500));
                
                // Log order for development
                console.log('✅ Order submitted successfully:', orderData);
                
                // Show success message
                document.getElementById('orderForm').style.display = 'none';
                document.getElementById('successMessage').style.display = 'block';
                document.getElementById('successMessage').scrollIntoView({ behavior: 'smooth' });
                
                // Clear cart after successful order
                cart = [];
                updateCartCount();
                
                // Reset form
                e.target.reset();
                
                // Auto-close modal after 3 seconds
                setTimeout(() => {
                    closeCart();
                }, 3000);
                
            } catch (error) {
                console.error('❌ Order submission failed:', error);
                showNotification('حدث خطأ في إرسال الطلب. يرجى المحاولة مرة أخرى.', 'error');
            } finally {
                // Reset button state
                submitText.style.display = 'inline';
                loadingSpinner.style.display = 'none';
                submitButton.disabled = false;
            }
        });

        // Enhanced contact form
        document.getElementById('contactForm').addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const submitButton = e.target.querySelector('.submit-btn');
            const originalText = submitButton.textContent;
            
            submitButton.innerHTML = '<span class="loading"></span> جاري الإرسال...';
            submitButton.disabled = true;

            // Prepare contact data
            const formData = new FormData(e.target);
            const contactData = {
                name: formData.get('name'),
                email: formData.get('email'),
                phone: formData.get('phone'),
                message: formData.get('message'),
                date: new Date().toISOString(),
                id: 'MSG_' + Date.now()
            };

            try {
                // Simulate sending message
                await new Promise(resolve => setTimeout(resolve, 2000));
                
                console.log('📧 Contact message sent:', contactData);
                
                showNotification('شكراً لك! تم إرسال رسالتك بنجاح. سنتواصل معك خلال 24 ساعة.', 'success');
                e.target.reset();
                
            } catch (error) {
                console.error('❌ Message sending failed:', error);
                showNotification('حدث خطأ في إرسال الرسالة. يرجى المحاولة مرة أخرى.', 'error');
            } finally {
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }
        });

        // Enhanced notification system
        function showNotification(message, type = 'info') {
            // Remove existing notifications
            const existingNotification = document.querySelector('.notification');
            if (existingNotification) {
                existingNotification.remove();
            }

            const notification = document.createElement('div');
            notification.className = `notification notification-${type}`;
            notification.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                padding: 1rem 1.5rem;
                background: ${type === 'success' ? 'var(--accent-green)' : 
                           type === 'error' ? 'var(--accent-red)' : 
                           type === 'warning' ? 'var(--accent-gold)' : 'var(--accent-silver)'};
                color: ${type === 'warning' || type === 'info' ? 'var(--primary-black)' : 'var(--pure-white)'};
                border-radius: 8px;
                box-shadow: 0 8px 24px var(--shadow-dark);
                z-index: 3000;
                font-weight: 600;
                max-width: 400px;
                transform: translateX(100%);
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            `;
            
            notification.textContent = message;
            document.body.appendChild(notification);

            // Show notification
            setTimeout(() => {
                notification.style.transform = 'translateX(0)';
            }, 100);

            // Hide notification after 5 seconds
            setTimeout(() => {
                notification.style.transform = 'translateX(100%)';
                setTimeout(() => {
                    if (notification.parentNode) {
                        notification.remove();
                    }
                }, 300);
            }, 5000);
        }

        // Enhanced modal interactions
        window.onclick = function(event) {
            const modal = document.getElementById('cartModal');
            if (event.target === modal) {
                closeCart();
            }
        };

        // Enhanced keyboard navigation
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeCart();
            }
            
            // Product navigation with arrow keys
            if (currentSection === 'products') {
                const productCards = document.querySelectorAll('.product-card');
                const activeElement = document.activeElement;
                
                if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
                    const currentIndex = Array.from(productCards).findIndex(card => 
                        card.querySelector('.add-to-cart-btn') === activeElement
                    );
                    
                    if (currentIndex !== -1) {
                        e.preventDefault();
                        const nextIndex = e.key === 'ArrowRight' ? 
                            Math.min(currentIndex + 1, productCards.length - 1) :
                            Math.max(currentIndex - 1, 0);
                        
                        productCards[nextIndex].querySelector('.add-to-cart-btn').focus();
                    }
                }
            }
        });

        // Enhanced performance optimizations
        let ticking = false;

        function updateScrollEffects() {
            if (!ticking) {
                requestAnimationFrame(() => {
                    const scrolled = window.pageYOffset;
                    const parallax = scrolled * 0.5;
                    
                    // Add subtle parallax effect to hero section
                    const heroSection = document.getElementById('products-section');
                    if (heroSection && scrolled < window.innerHeight) {
                        heroSection.style.transform = `translateY(${parallax}px)`;
                    }
                    
                    ticking = false;
                });
                ticking = true;
            }
        }

        

        // Enhanced accessibility features
        function enhanceAccessibility() {
            // Add ARIA labels and roles
            const productCards = document.querySelectorAll('.product-card');
            productCards.forEach((card, index) => {
                card.setAttribute('role', 'article');
                card.setAttribute('aria-label', `منتج ${index + 1}`);
            });

            // Enhance form accessibility
            const formInputs = document.querySelectorAll('input, textarea');
            formInputs.forEach(input => {
                const label = input.previousElementSibling;
                if (label && label.tagName === 'LABEL') {
                    const id = input.id || `input-${Math.random().toString(36).substr(2, 9)}`;
                    input.id = id;
                    label.setAttribute('for', id);
                }
            });

            // Add skip navigation link
            // const skipLink = document.createElement('a');
            // skipLink.href = '#main-content';
            // skipLink.textContent = 'تخطي إلى المحتوى الرئيسي';
            // skipLink.style.cssText = `
            //     position: absolute;
            //     top: -40px;
            //     left: 6px;
            //     background: var(--accent-gold);
            //     color: var(--primary-black);
            //     padding: 8px;
            //     text-decoration: none;
            //     border-radius: 4px;
            //     font-weight: bold;
            //     z-index: 4000;
            //     transition: top 0.3s;
            // `;
            skipLink.addEventListener('focus', () => {
                skipLink.style.top = '6px';
            });
            skipLink.addEventListener('blur', () => {
                skipLink.style.top = '-40px';
            });
            
            document.body.insertBefore(skipLink, document.body.firstChild);
        }

        // Add CSS animations
        const style = document.createElement('style');
        style.textContent = `
            @keyframes pulse {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.05); }
            }
            
            @keyframes fadeInUp {
                from {
                    opacity: 0;
                    transform: translateY(30px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            
            .product-card {
                animation: fadeInUp 0.6s ease-out forwards;
                opacity: 0;
            }
            
            .cart-item {
                animation: fadeInUp 0.4s ease-out forwards;
                opacity: 0;
            }
            
            .modal {
                transition: opacity 0.3s ease;
                opacity: 0;
            }
            
            .modal.show {
                opacity: 1;
            }
        `;
        document.head.appendChild(style);

        // Initialize store with enhanced features
        document.addEventListener('DOMContentLoaded', function() {
            initStore();
            enhanceAccessibility();
            
            // Add main content ID for skip navigation
            const main = document.querySelector('main');
            main.id = 'main-content';
            
            // Preload critical images
            const criticalImages = products.slice(0, 6).map(product => {
                const img = new Image();
                img.src = product.image;
                return img;
            });
            
            // Add loading animation to body
            document.body.style.opacity = '0';
            setTimeout(() => {
                document.body.style.transition = 'opacity 0.5s ease';
                document.body.style.opacity = '1';
            }, 100);
            
            console.log('🚀 Fashion Store initialized successfully!');
        });

        // Service Worker registration for offline functionality (optional)
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', function() {
                // Only register service worker in production
                if (location.protocol === 'https:') {
                    navigator.serviceWorker.register('/sw.js')
                        .then(registration => console.log('SW registered'))
                        .catch(error => console.log('SW registration failed'));
                }
            });
        }