// products.js - Contains all product data for FinePort

const products = [
    // Men's Clothing
    {
        id: 1,
        name: "Premium Cotton T-Shirt",
        category: "men",
        price: 29.99,
        description: "Classic fit t-shirt made from 100% organic cotton. Perfect for casual wear or layering.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["White", "Black", "Navy", "Gray"],
        image: "https://i.postimg.cc/cJWbKZgS/Premium-Cotton-T-Shirt.webp",
        rating: 4.5,
        reviews: 128
    },
    {
        id: 2,
        name: "Slim Fit Dress Shirt",
        category: "men",
        price: 59.99,
        description: "Elegant slim-fit dress shirt with premium stitching and non-iron fabric technology.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["White", "Blue", "Pink"],
        image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        rating: 4.7,
        reviews: 89
    },
    {
        id: 3,
        name: "Classic Denim Jeans",
        category: "men",
        price: 79.99,
        description: "Premium denim jeans with a classic straight fit. Comfortable and durable for everyday wear.",
        sizes: ["28", "30", "32", "34", "36"],
        colors: ["Dark Blue", "Light Blue", "Black"],
        image: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        rating: 4.6,
        reviews: 156
    },
    {
        id: 4,
        name: "Wool Blend Blazer",
        category: "men",
        price: 199.99,
        description: "Sophisticated wool blend blazer with notch lapels and functional buttons. Perfect for business or formal occasions.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Navy", "Charcoal", "Black"],
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        rating: 4.8,
        reviews: 67
    },

    // Women's Clothing
    {
        id: 5,
        name: "Silk Blouse",
        category: "women",
        price: 89.99,
        description: "Elegant silk blouse with delicate buttons and flowing sleeves. Perfect for both office and evening wear.",
        sizes: ["XS", "S", "M", "L"],
        colors: ["Ivory", "Black", "Burgundy"],
        image: "https://i.postimg.cc/44KRRfpL/silk-blouse.png",
        rating: 4.6,
        reviews: 142
    },
    {
        id: 6,
        name: "High-Waisted Skinny Jeans",
        category: "women",
        price: 69.99,
        description: "Comfortable high-waisted skinny jeans with stretch technology for all-day comfort.",
        sizes: ["24", "26", "28", "30"],
        colors: ["Dark Blue", "Black", "Light Wash"],
        image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        rating: 4.4,
        reviews: 98
    },
    {
        id: 7,
        name: "Wrap Dress",
        category: "women",
        price: 129.99,
        description: "Flattering wrap dress with adjustable waist tie. Made from breathable, wrinkle-resistant fabric.",
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["Floral Print", "Black", "Emerald Green"],
        image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        rating: 4.7,
        reviews: 113
    },
    {
        id: 8,
        name: "Cashmere Sweater",
        category: "women",
        price: 149.99,
        description: "Luxurious 100% cashmere sweater with ribbed cuffs and hem. Lightweight yet warm.",
        sizes: ["XS", "S", "M", "L"],
        colors: ["Cream", "Gray", "Pink"],
        image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        rating: 4.9,
        reviews: 87
    },

    // Kids' Clothing
    {
        id: 9,
        name: "Kids' Graphic Tee",
        category: "kids",
        price: 19.99,
        description: "Fun graphic tee for kids, made from soft organic cotton. Machine washable and durable.",
        sizes: ["2T", "3T", "4T", "5T", "S", "M"],
        colors: ["White", "Blue", "Pink"],
        image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        rating: 4.5,
        reviews: 56
    },
    {
        id: 10,
        name: "Kids' Denim Jacket",
        category: "kids",
        price: 39.99,
        description: "Stylish denim jacket for kids with adjustable cuffs and multiple pockets.",
        sizes: ["2T", "3T", "4T", "5T", "S", "M"],
        colors: ["Light Blue", "Dark Blue"],
        image: "https://images.unsplash.com/photo-1592155931584-901ac15763e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        rating: 4.7,
        reviews: 42
    },
    {
        id: 11,
        name: "Kids' Jogger Pants",
        category: "kids",
        price: 24.99,
        description: "Comfortable jogger pants with elastic waistband and cuffs. Perfect for playtime or school.",
        sizes: ["2T", "3T", "4T", "5T", "S", "M"],
        colors: ["Black", "Gray", "Navy"],
        image: "https://images.unsplash.com/photo-1600262666961-1c3b0d3e7c0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        rating: 4.6,
        reviews: 38
    },
    {
        id: 12,
        name: "Kids' Party Dress",
        category: "kids",
        price: 34.99,
        description: "Adorable party dress with lace details and comfortable lining. Perfect for special occasions.",
        sizes: ["2T", "3T", "4T", "5T"],
        colors: ["Pink", "White", "Lavender"],
        image: "https://images.unsplash.com/photo-1590071089561-2081a5127b1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        rating: 4.8,
        reviews: 29
    }
];



// Function to get URL parameters
function getUrlParameter(name) {
    name = name.replace(/[\[\]]/g, '\\$&');
    const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
    const results = regex.exec(window.location.href);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

// Function to filter products by category from URL
function filterProductsByUrlCategory() {
    const category = getUrlParameter('category');
    if (category) {
        const categoryFilter = document.getElementById('categoryFilter');
        if (categoryFilter) {
            categoryFilter.value = category;
            filterProducts();
        }
    }
}

// Function to display products on the page
function displayProducts(productsToDisplay) {
    const productGrid = document.getElementById('productGrid');
    productGrid.innerHTML = ''; // Clear existing products

    productsToDisplay.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product';
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <h4>${product.name}</h4>
                <div class="product-price">$${product.price.toFixed(2)}</div>
                <button onclick="showProductDetail(${product.id})">View Details</button>
            </div>
        `;
        productGrid.appendChild(productElement);
    });
}

// Global variables for product selection
let selectedSize = null;
let selectedColor = null;
let currentProductId = null;

// Function to show product details
function showProductDetail(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    // Reset selections
    selectedSize = null;
    selectedColor = null;
    currentProductId = productId;

    // Create modal for product details
    const modal = document.createElement('div');
    modal.className = 'product-modal';
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.backgroundColor = 'rgba(0,0,0,0.8)';
    modal.style.display = 'flex';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';
    modal.style.zIndex = '1000';
    
    modal.innerHTML = `
        <div class="product-detail" style="background: white; padding: 2rem; border-radius: 12px; max-width: 800px; width: 90%; max-height: 90vh; overflow-y: auto;">
            <button onclick="this.parentElement.parentElement.remove()" style="background: none; border: none; font-size: 1.5rem; position: absolute; top: 1rem; right: 1rem; cursor: pointer;">&times;</button>
            <div style="display: flex; flex-direction: column; gap: 1rem;">
                <div style="display: flex; gap: 2rem; flex-wrap: wrap;">
                    <img src="${product.image}" alt="${product.name}" style="width: 300px; height: 300px; object-fit: cover; border-radius: 8px;">
                    <div style="flex: 1; min-width: 250px;">
                        <h2 style="font-size: 1.8rem; margin-bottom: 0.5rem;">${product.name}</h2>
                        <div style="font-size: 1.5rem; color: #007AFF; font-weight: bold; margin-bottom: 1rem;">$${product.price.toFixed(2)}</div>
                        <div style="margin-bottom: 1rem;">
                            <span style="color: gold;">${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}</span>
                            <span style="color: #666; margin-left: 0.5rem;">${product.reviews} reviews</span>
                        </div>
                        <p style="margin-bottom: 1rem;">${product.description}</p>
                        <div style="margin-bottom: 1rem;">
                            <h3 style="font-size: 1.1rem; margin-bottom: 0.5rem;">Sizes:</h3>
                            <div id="sizeButtons" style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                                ${product.sizes.map(size => `<button onclick="selectSize('${size}')" style="padding: 0.5rem 1rem; border: 1px solid #ccc; background: white; border-radius: 4px;">${size}</button>`).join('')}
                            </div>
                        </div>
                        <div style="margin-bottom: 1rem;">
                            <h3 style="font-size: 1.1rem; margin-bottom: 0.5rem;">Colors:</h3>
                            <div id="colorButtons" style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                                ${product.colors.map(color => `<button onclick="selectColor('${color}')" style="padding: 0.5rem 1rem; border: 1px solid #ccc; background: white; border-radius: 4px;">${color}</button>`).join('')}
                            </div>
                        </div>
                    </div>
                </div>
                <button id="addToCartBtn" onclick="addToCart()" style="background: #1A1A1A; color: white; border: none; padding: 1rem; border-radius: 8px; font-weight: bold; cursor: pointer; margin-top: 1rem;" disabled>Add to Cart</button>
                <div id="selectionError" style="color: red; display: none;">Please select both size and color before adding to cart</div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
}

// Function to handle size selection
function selectSize(size) {
    selectedSize = size;
    updateButtonStates();
    highlightSelection('sizeButtons', size);
    checkAddToCartButton();
}

// Function to handle color selection
function selectColor(color) {
    selectedColor = color;
    updateButtonStates();
    highlightSelection('colorButtons', color);
    checkAddToCartButton();
}

// Function to update button states and highlight selections
function updateButtonStates() {
    // Size buttons
    const sizeButtons = document.querySelectorAll('#sizeButtons button');
    sizeButtons.forEach(button => {
        if (button.textContent === selectedSize) {
            button.style.backgroundColor = '#007AFF';
            button.style.color = 'white';
            button.style.borderColor = '#007AFF';
        } else {
            button.style.backgroundColor = 'white';
            button.style.color = 'black';
            button.style.borderColor = '#ccc';
        }
    });

    // Color buttons
    const colorButtons = document.querySelectorAll('#colorButtons button');
    colorButtons.forEach(button => {
        if (button.textContent === selectedColor) {
            button.style.backgroundColor = '#007AFF';
            button.style.color = 'white';
            button.style.borderColor = '#007AFF';
        } else {
            button.style.backgroundColor = 'white';
            button.style.color = 'black';
            button.style.borderColor = '#ccc';
        }
    });
}

// Helper function to highlight selected option
function highlightSelection(containerId, selectedValue) {
    const buttons = document.querySelectorAll(`#${containerId} button`);
    buttons.forEach(button => {
        if (button.textContent === selectedValue) {
            button.style.backgroundColor = '#007AFF';
            button.style.color = 'white';
            button.style.borderColor = '#007AFF';
        } else {
            button.style.backgroundColor = 'white';
            button.style.color = 'black';
            button.style.borderColor = '#ccc';
        }
    });
}

// Function to check if Add to Cart button should be enabled
function checkAddToCartButton() {
    const addToCartBtn = document.getElementById('addToCartBtn');
    const errorElement = document.getElementById('selectionError');
    
    if (selectedSize && selectedColor) {
        addToCartBtn.disabled = false;
        errorElement.style.display = 'none';
    } else {
        addToCartBtn.disabled = true;
    }
}

// Function to handle Add to Cart action
function addToCart() {
    if (!selectedSize || !selectedColor) {
        document.getElementById('selectionError').style.display = 'block';
        return;
    }

    const product = products.find(p => p.id === currentProductId);
    if (!product) return;

    // Here you would typically add to cart
    // For now, we'll just show an alert
    alert(`Added to cart: ${product.name}\nSize: ${selectedSize}\nColor: ${selectedColor}\nPrice: $${product.price.toFixed(2)}`);
    
    // Close the modal
    document.querySelector('.product-modal').remove();
    
    // You would normally add to your cart system here
    // addToCartSystem(product.id, selectedSize, selectedColor, product.price);
}

// Function to filter products
function filterProducts() {
    const categoryFilter = document.getElementById('categoryFilter').value;
    const sortBy = document.getElementById('sortBy').value;
    
    let filteredProducts = [...products];
    
    // Filter by category
    if (categoryFilter !== 'all') {
        filteredProducts = filteredProducts.filter(product => product.category === categoryFilter);
    }
    
    // Sort products
    switch (sortBy) {
        case 'price-low':
            filteredProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filteredProducts.sort((a, b) => b.price - a.price);
            break;
        case 'name':
            filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
        default:
            // Default sorting (by ID or whatever original order)
            break;
    }
    
    displayProducts(filteredProducts);
}

// Initialize the page with all products
document.addEventListener('DOMContentLoaded', () => {
    displayProducts(products);
    
    // Add event listeners for filters
    document.getElementById('categoryFilter').addEventListener('change', filterProducts);
    document.getElementById('sortBy').addEventListener('change', filterProducts);
    
    // Check for URL category parameter
    filterProductsByUrlCategory();
});