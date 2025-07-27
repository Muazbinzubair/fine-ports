// Cart API functions
const CART_API_URL = '/api/cart';

async function addToCart(item) {
    try {
        const response = await fetch(CART_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                action: 'add',
                item: item,
                user_id: 'current_user' // Replace with actual user ID in a real app
            })
        });
        
        const data = await response.json();
        if (data.success) {
            updateCartCount();
            return true;
        }
        return false;
    } catch (error) {
        console.error('Error adding to cart:', error);
        return false;
    }
}

async function removeFromCart(itemId, size, color) {
    try {
        const response = await fetch(CART_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                action: 'remove',
                item_id: itemId,
                size: size,
                color: color,
                user_id: 'current_user'
            })
        });
        
        const data = await response.json();
        if (data.success) {
            renderCartItems();
            updateCartCount();
            return true;
        }
        return false;
    } catch (error) {
        console.error('Error removing from cart:', error);
        return false;
    }
}

async function updateCartItemQuantity(itemId, size, color, newQuantity) {
    try {
        const response = await fetch(CART_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                action: 'update',
                item: {
                    id: itemId,
                    size: size,
                    color: color,
                    quantity: newQuantity
                },
                user_id: 'current_user'
            })
        });
        
        const data = await response.json();
        if (data.success) {
            renderCartItems();
            updateCartCount();
            return true;
        }
        return false;
    } catch (error) {
        console.error('Error updating cart item:', error);
        return false;
    }
}

async function clearCart() {
    try {
        const response = await fetch(CART_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                action: 'clear',
                user_id: 'current_user'
            })
        });
        
        const data = await response.json();
        if (data.success) {
            renderCartItems();
            updateCartCount();
            return true;
        }
        return false;
    } catch (error) {
        console.error('Error clearing cart:', error);
        return false;
    }
}

async function getCart() {
    try {
        const response = await fetch(CART_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                action: 'get',
                user_id: 'current_user'
            })
        });
        
        const data = await response.json();
        if (data.success) {
            return data.cart || [];
        }
        return [];
    } catch (error) {
        console.error('Error getting cart:', error);
        return [];
    }
}

async function renderCartItems() {
    const cartItemsContainer = document.getElementById('cartItems');
    if (!cartItemsContainer) return;

    const cart = await getCart();
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-shopping-bag"></i>
                <h3>Your cart is empty</h3>
                <p>Looks like you haven't added anything to your cart yet</p>
                <a href="shop.html" class="cta-button">Continue Shopping</a>
            </div>
        `;
    } else {
        cartItemsContainer.innerHTML = cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" style="width: 80px; height: 80px; object-fit: cover; border-radius: 8px;">
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-options">
                        ${item.size ? `<span>Size: ${item.size}</span>` : ''}
                        ${item.color ? `<span>Color: ${item.color}</span>` : ''}
                    </div>
                    <div class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</div>
                </div>
                <div class="cart-item-quantity">
                    <button class="quantity-btn" onclick="updateCartItemQuantity(${item.id}, '${item.size || ''}', '${item.color || ''}', ${item.quantity - 1})">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateCartItemQuantity(${item.id}, '${item.size || ''}', '${item.color || ''}', ${item.quantity + 1})">+</button>
                </div>
                <button class="remove-item" onclick="removeFromCart(${item.id}, '${item.size || ''}', '${item.color || ''}')">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `).join('');
    }

    updateCartTotals();
}

async function updateCartTotals() {
    const cart = await getCart();
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const subtotalElement = document.getElementById('subtotal');
    const totalElement = document.getElementById('cartTotal');
    
    if (subtotalElement) subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
    if (totalElement) totalElement.textContent = `$${subtotal.toFixed(2)}`;
}

async function updateCartCount() {
    const cart = await getCart();
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCountElements = document.querySelectorAll('.cart-count');
    
    cartCountElements.forEach(element => {
        element.textContent = totalItems;
        element.style.display = totalItems > 0 ? 'flex' : 'none';
    });
}

// Initialize cart on page load
document.addEventListener('DOMContentLoaded', async function() {
    await renderCartItems();
    
    // Clear cart button event
    const clearCartBtn = document.getElementById('clearCart');
    if (clearCartBtn) {
        clearCartBtn.addEventListener('click', async function() {
            const cart = await getCart();
            if (cart.length > 0) {
                if (confirm('Are you sure you want to clear your cart?')) {
                    await clearCart();
                    showNotification('success', 'Cart cleared successfully');
                }
            }
        });
    }
});

// Make functions available globally
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateCartItemQuantity = updateCartItemQuantity;
window.clearCart = clearCart;
window.updateCartCount = updateCartCount;
window.getCart = getCart;