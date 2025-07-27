// productFunctions.js
let allProducts = [];

function loadAllProducts() {
    allProducts = [...products]; // From products.js
    localStorage.setItem('allProducts', JSON.stringify(allProducts));
    return allProducts;
}

function setupProductOptions() {
    const sizeOptions = document.querySelectorAll('#sizeOptions .option-button');
    const colorOptions = document.querySelectorAll('#colorOptions .option-button');
    
    sizeOptions.forEach(button => {
        button.addEventListener('click', function() {
            sizeOptions.forEach(btn => btn.classList.remove('selected'));
            this.classList.add('selected');
            document.getElementById('sizeError').style.display = 'none';
        });
    });
    
    colorOptions.forEach(button => {
        button.addEventListener('click', function() {
            colorOptions.forEach(btn => btn.classList.remove('selected'));
            this.classList.add('selected');
            document.getElementById('colorError').style.display = 'none';
        });
    });
}

async function addToCartFromModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const selectedSize = document.querySelector('#sizeOptions .selected');
    const selectedColor = document.querySelector('#colorOptions .selected');
    const quantity = parseInt(document.getElementById('quantity').value);

    if (!selectedSize || !selectedColor) {
        if (!selectedSize) document.getElementById('sizeError').style.display = 'block';
        if (!selectedColor) document.getElementById('colorError').style.display = 'block';
        return;
    }

    const cartItem = {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        size: selectedSize.dataset.size,
        color: selectedColor.dataset.color,
        quantity: quantity
    };

    const added = await addToCart(cartItem);
    if (added) {
        showNotification('Item added to cart!');
        closeProductModal();
    } else {
        showNotification('Failed to add item to cart', 'error');
    }
}


function showProductDetail(productId) {
    const product = allProducts.find(p => p.id === productId);
    if (!product) return;
    
    const modal = document.createElement('div');
    modal.className = 'product-modal';
    modal.innerHTML = `
        <div class="product-detail">
            <button class="close-modal" onclick="closeProductModal()">
                <i class="fas fa-times"></i>
            </button>
            <div class="product-detail-content">
                <div class="product-detail-header">
                    <div class="product-detail-image">
                        <img src="${product.image}" alt="${product.name}" style="max-width: 100%; height: auto; max-height: 400px; object-fit: contain;">
                    </div>
                    <div class="product-detail-info">
                        <h2>${product.name}</h2>
                        <div class="product-detail-price">$${product.price.toFixed(2)}</div>
                        <div class="product-detail-rating">
                            ${generateStarRating(product.rating)}
                            <span class="reviews">(${product.reviews} reviews)</span>
                        </div>
                        <p class="product-detail-description">${product.description}</p>
                        
                        <div class="product-options">
                            <div class="option-group">
                                <label>Size:</label>
                                <div class="option-buttons" id="sizeOptions">
                                    ${product.sizes.map(size => `
                                        <button class="option-button" data-size="${size}">${size}</button>
                                    `).join('')}
                                </div>
                                <div class="error-message" id="sizeError">Please select a size</div>
                            </div>
                            
                            <div class="option-group">
                                <label>Color:</label>
                                <div class="option-buttons" id="colorOptions">
                                    ${product.colors.map(color => `
                                        <button class="option-button" data-color="${color}">${color}</button>
                                    `).join('')}
                                </div>
                                <div class="error-message" id="colorError">Please select a color</div>
                            </div>
                        </div>
                        
                        <div class="quantity-selector">
                            <label>Quantity:</label>
                            <div class="quantity-controls">
                                <button class="quantity-btn" onclick="decreaseQuantity()">-</button>
                                <input type="number" class="quantity-input" id="quantity" value="1" min="1" max="10">
                                <button class="quantity-btn" onclick="increaseQuantity()">+</button>
                            </div>
                        </div>
                        
                        <button class="cta-button" onclick="addToCartFromModal(${product.id})">
                            <i class="fas fa-shopping-cart"></i> Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    setupProductOptions();
    document.getElementById('sizeError').style.display = 'none';
    document.getElementById('colorError').style.display = 'none';
}

function generateStarRating(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;
    return `${'<i class="fas fa-star"></i>'.repeat(fullStars)}${halfStar ? '<i class="fas fa-star-half-alt"></i>' : ''}${'<i class="far fa-star"></i>'.repeat(emptyStars)}`;
}

function closeProductModal() {
    const modal = document.querySelector('.product-modal');
    if (modal) {
        modal.remove();
        document.body.style.overflow = 'auto';
    }
}

function increaseQuantity() {
    const quantityInput = document.getElementById('quantity');
    if (quantityInput && quantityInput.value < 10) {
        quantityInput.value = parseInt(quantityInput.value) + 1;
    }
}

function decreaseQuantity() {
    const quantityInput = document.getElementById('quantity');
    if (quantityInput && quantityInput.value > 1) {
        quantityInput.value = parseInt(quantityInput.value) - 1;
    }
}

function addToCartFromModal(productId) {
    const product = allProducts.find(p => p.id === productId);
    if (!product) {
        showNotification('error', 'Product not found');
        return;
    }

    const selectedSize = document.querySelector('#sizeOptions .option-button.selected');
    const selectedColor = document.querySelector('#colorOptions .option-button.selected');
    const quantity = parseInt(document.getElementById('quantity').value) || 1;

    if (!selectedSize || !selectedColor) {
        showNotification('error', 'Please select both size and color');
        return;
    }

    const cartItem = {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        size: selectedSize.dataset.size,
        color: selectedColor.dataset.color,
        quantity: quantity
    };

    if (addToCart(cartItem)) {
        showNotification('success', `${product.name} added to cart!`);
        closeProductModal();
    }
}

function showNotification(type, message) {
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notif => notif.remove());
    
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
        <span>${message}</span>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease forwards';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    loadAllProducts();
    updateCartCount();
});

// Make functions available globally
window.addToCartFromModal = addToCartFromModal;
window.closeProductModal = closeProductModal;
window.increaseQuantity = increaseQuantity;
window.decreaseQuantity = decreaseQuantity;
window.showProductDetail = showProductDetail;
window.setupProductOptions = setupProductOptions;