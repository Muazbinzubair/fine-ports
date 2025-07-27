// Global Variables
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentProducts = [];

// Product Data with enhanced information
const products = [
    {
        id: 1,
        name: "Premium Cotton Shirt",
        price: 89.99,
        category: "men",
        image: "https://pixabay.com/get/g3f2c3ed1dd8537af5483336030be648fa5dc611ec843e031699b131200344f7369fd224622d87536a14d38c1a4f0dc0341be563bc2fb723b9251c381144cc2e5_1280.jpg",
        description: "Classic cotton shirt with modern fit"
    },
    {
        id: 2,
        name: "Elegant Midi Dress",
        price: 129.99,
        category: "women",
        image: "https://pixabay.com/get/g99f24d2a8fefcc6361ba642adcd581f64ff155107d1b4169fe5a66a42fd385054c7c85a390dbda29bafbf701e105fb1ec4e6674db42e0da712f2aaf31926356c_1280.jpg",
        description: "Sophisticated midi dress for any occasion"
    },
    {
        id: 3,
        name: "Designer Blazer",
        price: 199.99,
        category: "men",
        image: "https://pixabay.com/get/g2313e438d15f292e886dc83afa7b9089aabb5301f1b7f11015d0c4e01fee6ece5183e9aa6794feb53f444883c2b086979c5b5d1d55e34486c525ca3664bfb4a6_1280.jpg",
        description: "Professional blazer with premium finish"
    },
    {
        id: 4,
        name: "Luxury Handbag",
        price: 299.99,
        category: "accessories",
        image: "https://pixabay.com/get/gf3dd93ddf6beee0bc9620d6e081b20e41570581bc203e1d4636ebb7f076da8fd5971a635b38a18270ac72a46d18f85efd55e6f61999a0ee80c02937ed86aaf44_1280.jpg",
        description: "Handcrafted leather handbag"
    },
    {
        id: 5,
        name: "Casual Sneakers",
        price: 149.99,
        category: "men",
        image: "https://pixabay.com/get/gbda8b9793e6ec32fd53c069e09c960cec8b3fe3c77183b833c9335cabbb169910efe26a28e7681ab83f3904a8c0db410e737d25292e1ab1f20af0800a94e05f8_1280.jpg",
        description: "Comfortable sneakers for everyday wear"
    },
    {
        id: 6,
        name: "Stylish Jacket",
        price: 179.99,
        category: "women",
        image: "https://pixabay.com/get/g99889adbd76f537da52e8fd882bc7553134d5a8c8d9d5fcd48619e4ef85fa637030edea13450447c79ae253bed2a3a86dcfb333b19df9bef3dd13433bbba7583_1280.jpg",
        description: "Trendy jacket for modern women"
    },
    {
        id: 7,
        name: "Kids Play Set",
        price: 49.99,
        category: "kids",
        image: "https://pixabay.com/get/g2ecc1f40b451b88576e41539f7a80e2eedca434b5020a38dbee341b7719a622a975653e2130856f9c90473f444d04be6938e6740416b39d0437423fe23cedb56_1280.jpg",
        description: "Fun and comfortable play set for kids"
    },
    {
        id: 8,
        name: "Watch Collection",
        price: 399.99,
        category: "accessories",
        image: "https://pixabay.com/get/g433099e7770ed5375608c4b62b90ebaf373096cae94abf3b0876be8cceb040cee81933854b2f697a0b6895964fe1fdd804ddad6dc91510464af0f8b8de29fef2_1280.jpg",
        description: "Luxury timepiece collection"
    }
];

// Utility Functions
function formatPrice(price) {
    return `$${price.toFixed(2)}`;
}

function updateCartCount() {
    const cartCountElements = document.querySelectorAll('.cart-count');
    const cartCount = document.getElementById('cartCount');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    cartCountElements.forEach(element => {
        element.textContent = totalItems;
        element.style.display = totalItems > 0 ? 'flex' : 'none';
    });
    
    if (cartCount) {
        cartCount.textContent = totalItems;
        cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
    }
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#007AFF' : '#FF6B35'};
        color: white;
        padding: 16px 24px;
        border-radius: 8px;
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Cart Functions
function loadCartItems() {
    const cartItemsContainer = document.getElementById('cartItems');
    if (!cartItemsContainer) return;
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-shopping-bag"></i>
                <h3>Your cart is empty</h3>
                <p>Add some items to get started</p>
                <a href="shop.html" class="cta-button">Continue Shopping</a>
            </div>
        `;
        return;
    }
    
    let html = '';
    let subtotal = 0;
    
    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;
        
        html += `
            <div class="cart-item">
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-options">
                        <span>Size: ${item.size}</span>
                        <span>Color: ${item.color}</span>
                    </div>
                    <div class="cart-item-price">${formatPrice(item.price)}</div>
                </div>
                <div class="cart-item-quantity">
                    <button class="quantity-btn" onclick="updateQuantity(${index}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${index}, 1)">+</button>
                </div>
                <div class="cart-item-total">${formatPrice(itemTotal)}</div>
                <button class="remove-item" onclick="removeItem(${index})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
    });
    
    cartItemsContainer.innerHTML = html;
    
    // Update totals
    document.getElementById('cartSubtotal').textContent = formatPrice(subtotal);
    document.getElementById('cartTotal').textContent = formatPrice(subtotal);
}

function updateQuantity(index, change) {
    cart[index].quantity += change;
    
    if (cart[index].quantity < 1) {
        cart[index].quantity = 1;
    }
    
    saveCart();
    loadCartItems();
}

function removeItem(index) {
    cart.splice(index, 1);
    saveCart();
    loadCartItems();
    showNotification('Item removed from cart', 'success');
}

// Checkout Functions
function loadCheckout() {
    const orderItems = document.getElementById('orderItems');
    const orderSubtotal = document.getElementById('orderSubtotal');
    const orderTotal = document.getElementById('orderTotal');
    
    if (!orderItems) return;
    
    if (cart.length === 0) {
        orderItems.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-shopping-bag"></i>
                <h3>No items in cart</h3>
                <p>Add some items before checkout</p>
                <a href="/shop" class="cta-button">Shop Now</a>
            </div>
        `;
        if (orderSubtotal) orderSubtotal.textContent = '0.00';
        if (orderTotal) orderTotal.textContent = '0.00';
        return;
    }
    
    let html = '';
    let total = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        html += `
            <div class="order-item">
                <div class="order-item-info">
                    <div class="order-item-name">${item.name} x ${item.quantity}</div>
                </div>
                <div class="order-item-price">${formatPrice(itemTotal)}</div>
            </div>
        `;
    });
    
    orderItems.innerHTML = html;
    
    if (orderSubtotal) orderSubtotal.textContent = formatPrice(total);
    if (orderTotal) orderTotal.textContent = formatPrice(total);
}

function initializeCheckout() {
    const continueToPaymentBtn = document.getElementById('continueToPaymentBtn');
    const backToInfoBtn = document.getElementById('backToInfoBtn');
    const continueToConfirmBtn = document.getElementById('continueToConfirmBtn');
    const backToPaymentBtn = document.getElementById('backToPaymentBtn');
    const confirmOrderBtn = document.getElementById('confirmOrderBtn');
    
    // Step 1: Customer Information to Payment
    if (continueToPaymentBtn) {
        continueToPaymentBtn.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Validate form
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const address = document.getElementById('address').value.trim();
            const city = document.getElementById('city').value.trim();
            const state = document.getElementById('state').value.trim();
            const zip = document.getElementById('zip').value.trim();
            
            if (!name || !email || !phone || !address || !city || !state || !zip) {
                showCheckoutMessage('Please fill in all required fields.', 'error');
                return;
            }
            
            // Validate email format
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showCheckoutMessage('Please enter a valid email address.', 'error');
                return;
            }
            
            // Validate phone number (basic validation)
            if (phone.length < 8) {
                showCheckoutMessage('Please enter a valid phone number.', 'error');
                return;
            }
            
            // Proceed to next step if validation passes
            document.getElementById('customerInfoForm').style.display = 'none';
            document.getElementById('paymentMethodSection').style.display = 'block';
            document.getElementById('step1').classList.remove('active');
            document.getElementById('step2').classList.add('active');
        });
    }
    
    // Step 2: Back to Customer Information
    if (backToInfoBtn) {
        backToInfoBtn.addEventListener('click', (e) => {
            e.preventDefault();
            document.getElementById('paymentMethodSection').style.display = 'none';
            document.getElementById('customerInfoForm').style.display = 'block';
            document.getElementById('step2').classList.remove('active');
            document.getElementById('step1').classList.add('active');
        });
    }
    
    // Step 2: Payment to Confirmation
    if (continueToConfirmBtn) {
        continueToConfirmBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked');
            
            if (!paymentMethod) {
                showCheckoutMessage('Please select a payment method.', 'error');
                return;
            }
            
            // Update confirmation sections
            updateConfirmationSections(paymentMethod.value);
            
            document.getElementById('paymentMethodSection').style.display = 'none';
            document.getElementById('orderConfirmationSection').style.display = 'block';
            document.getElementById('step2').classList.remove('active');
            document.getElementById('step3').classList.add('active');
        });
    }
    
    // Step 3: Back to Payment
    if (backToPaymentBtn) {
        backToPaymentBtn.addEventListener('click', (e) => {
            e.preventDefault();
            document.getElementById('orderConfirmationSection').style.display = 'none';
            document.getElementById('paymentMethodSection').style.display = 'block';
            document.getElementById('step3').classList.remove('active');
            document.getElementById('step2').classList.add('active');
        });
    }
    
    // Step 3: Confirm Order
    if (confirmOrderBtn) {
        confirmOrderBtn.addEventListener('click', async (e) => {
            e.preventDefault();
            const submitButton = document.getElementById('confirmOrderBtn');
            const originalText = submitButton.innerHTML;
            
            submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
            submitButton.disabled = true;
            
            try {
                const name = document.getElementById('name').value.trim();
                const email = document.getElementById('email').value.trim();
                const phone = document.getElementById('phone').value.trim();
                const address = document.getElementById('address').value.trim();
                const city = document.getElementById('city').value.trim();
                const state = document.getElementById('state').value.trim();
                const zip = document.getElementById('zip').value.trim();
                const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;
                
                const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
                
                const orderData = {
                    customer: {
                        name,
                        email,
                        phone,
                        address: `${address}, ${city}, ${state}, ${zip}`
                    },
                    items: cart.map(item => ({
                        id: item.id,
                        title: item.name,
                        price: item.price,
                        quantity: item.quantity
                    })),
                    total,
                    paymentMethod,
                    shippingMethod: "Standard"
                };
                
                // In a real application, you would send this to your server
                console.log('Order data:', orderData);
                
                // Simulate API call
                await new Promise(resolve => setTimeout(resolve, 1500));
                
                showCheckoutMessage('Order placed successfully! You will receive a confirmation email shortly.', 'success');
                cart = [];
                saveCart();
                updateCartCount();
                
                // Reset the form
                document.getElementById('customerInfoForm').reset();
                document.getElementById('orderConfirmationSection').style.display = 'none';
                document.getElementById('customerInfoForm').style.display = 'block';
                document.getElementById('step3').classList.remove('active');
                document.getElementById('step1').classList.add('active');
                
                // Reload cart summary
                loadCheckout();
            } catch (error) {
                console.error('Error placing order:', error);
                showCheckoutMessage('Network error. Please try again later.', 'error');
            } finally {
                submitButton.innerHTML = originalText;
                submitButton.disabled = false;
            }
        });
    }
}

function updateConfirmationSections(paymentMethod) {
    // Update order items in confirmation
    const confirmationItems = document.getElementById('confirmationItems');
    let itemsHtml = '';
    let total = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        itemsHtml += `
            <div class="order-item">
                <div class="order-item-info">
                    <div class="order-item-name">${item.name} x ${item.quantity}</div>
                </div>
                <div class="order-item-price">${formatPrice(itemTotal)}</div>
            </div>
        `;
    });
    
    itemsHtml += `
        <div class="summary-row total-row" style="margin-top: var(--spacing-md);">
            <span>Total</span>
            <span>${formatPrice(total)}</span>
        </div>
    `;
    
    confirmationItems.innerHTML = itemsHtml;
    
    // Update shipping information
    const shippingInfo = document.getElementById('shippingInfo');
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const address = document.getElementById('address').value.trim();
    const city = document.getElementById('city').value.trim();
    const state = document.getElementById('state').value.trim();
    const zip = document.getElementById('zip').value.trim();
    
    shippingInfo.innerHTML = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address}, ${city}, ${state} ${zip}</p>
    `;
    
    // Update payment information
    const paymentInfo = document.getElementById('paymentInfo');
    const paymentMethodText = paymentMethod === 'jazzcash' ? 'JazzCash' : 'Cash on Delivery';
    
    paymentInfo.innerHTML = `
        <p><strong>Payment Method:</strong> ${paymentMethodText}</p>
    `;
}

function showCheckoutMessage(message, type) {
    const checkoutMessage = document.getElementById('checkoutMessage');
    if (checkoutMessage) {
        checkoutMessage.textContent = message;
        checkoutMessage.className = `checkout-message ${type}`;
        checkoutMessage.style.display = 'block';
        
        setTimeout(() => {
            checkoutMessage.style.display = 'none';
        }, 5000);
    }
}

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
    // Update cart count on page load
    updateCartCount();
    
    // Load cart if on cart page
    if (document.getElementById('cartItems')) {
        loadCartItems();
    }
    
    // Load checkout data
    loadCheckout();
    
    // Initialize checkout process
    initializeCheckout();
    
    // Add CSS animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
        
        .payment-methods {
            display: flex;
            flex-direction: column;
            gap: 12px;
        }
        
        .payment-method {
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 12px;
            border: 1px solid #E5E5E5;
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.2s ease;
        }
        
        .payment-method:hover {
            border-color: #007AFF;
        }
        
        .payment-method input[type="radio"] {
            margin-right: 8px;
        }
        
        .payment-method label {
            display: flex;
            align-items: center;
            gap: 8px;
            cursor: pointer;
            width: 100%;
        }
    `;
    document.head.appendChild(style);
});

// Make cart functions available globally
window.updateQuantity = updateQuantity;
window.removeItem = removeItem;