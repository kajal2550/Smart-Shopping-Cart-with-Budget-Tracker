// Render featured products grid (Figma style)
function renderFeaturedProducts() {
    const featured = [
        {
            img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=facearea&w=400&h=300',
            title: 'Premium Wireless Headphones with Noise Cancellation',
            price: 149.99,
            oldPrice: 249.99,
            rating: 4.8,
            reviews: 1284,
            badge: 'Hot',
            badgeColor: 'red',
        },
        {
            img: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=facearea&w=400&h=300',
            title: 'Designer Cotton T-Shirt - Premium Quality',
            price: 29.99,
            oldPrice: 49.99,
            rating: 4.6,
            reviews: 692,
            badge: '40%',
            badgeColor: 'blue',
        },
        {
            img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=facearea&w=400&h=300',
            title: 'Modern Minimalist Desk Lamp',
            price: 79.99,
            oldPrice: null,
            rating: 4.9,
            reviews: 543,
            badge: 'New',
            badgeColor: 'blue',
        },
        {
            img: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=facearea&w=400&h=300',
            title: 'Professional Yoga Mat - Non-Slip & Eco-Friendly',
            price: 39.99,
            oldPrice: 59.99,
            rating: 4.7,
            reviews: 2156,
            badge: '33%',
            badgeColor: 'blue',
        },
        {
            img: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=facearea&w=400&h=300',
            title: 'Organic Skincare Set - Natural Ingredients',
            price: 89.99,
            oldPrice: 129.99,
            rating: 4.9,
            reviews: 3421,
            badge: 'Sale',
            badgeColor: 'blue',
        },
        {
            img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=facearea&w=400&h=300',
            title: 'Smart Watch - Fitness Tracker with Heart Rate Monitor',
            price: 199.99,
            oldPrice: null,
            rating: 4.5,
            reviews: 756,
            badge: null,
            badgeColor: '',
        },
    ];
    const container = document.querySelector('.featured-products');
    container.innerHTML = '';
    featured.forEach(prod => {
        container.innerHTML += `
        <div class="product-card">
            ${prod.badge ? `<span class="product-badge ${prod.badgeColor}">${prod.badge}</span>` : ''}
            <img src="${prod.img}" alt="${prod.title}">
            <div class="product-title">${prod.title}</div>
            <div class="product-rating">
                <i class="fa fa-star"></i> ${prod.rating} <span style="color:#888;font-size:0.95em;">(${prod.reviews})</span>
            </div>
            <div class="product-price">$${prod.price.toFixed(2)}
                ${prod.oldPrice ? `<span class="product-oldprice">$${prod.oldPrice.toFixed(2)}</span>` : ''}
            </div>
            <div class="product-actions">
                <button class="btn btn-primary"><i class="fa fa-cart-plus"></i></button>
            </div>
        </div>
        `;
    });
}

// Call this on page load
window.onload = function() {
    renderFeaturedProducts();
    // ...existing code...
    if (budget) {
        document.getElementById('budget').value = budget;
        document.getElementById('budget-info').textContent = `Budget set: $${budget.toFixed(2)}`;
    }
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark');
    }
    renderProducts();
    renderCategories();
    updateCart();
    showSection('home');
};
// Navigation and section switching
function showSection(section) {
    document.getElementById('home-section').style.display = section === 'home' ? '' : 'none';
    document.getElementById('products-section').style.display = section === 'products' ? '' : 'none';
    document.getElementById('cart-section').style.display = section === 'cart' ? '' : 'none';
    document.getElementById('billing-section').style.display = section === 'billing' ? '' : 'none';
    document.getElementById('about-section').style.display = section === 'about' ? '' : 'none';
    if (section === 'billing') renderBillingSummary();
}

// Toast notification
function showToast(msg) {
    const toast = document.getElementById('toast');
    toast.textContent = msg;
    toast.className = 'toast show';
    setTimeout(() => { toast.className = 'toast'; }, 2000);
}

// Dark mode toggle
function toggleDarkMode() {
    document.body.classList.toggle('dark');
    localStorage.setItem('darkMode', document.body.classList.contains('dark'));
}

// Responsive: close nav on mobile (not implemented, but ready for future)

// Product data (sample)
const products = [
    { id: 1, name: 'Apple', price: 2, category: 'Fruits', img: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=facearea&w=60&h=60' },
    { id: 2, name: 'Banana', price: 1, category: 'Fruits', img: 'https://images.unsplash.com/photo-1574226516831-e1dff420e8e9?auto=format&fit=facearea&w=60&h=60' },
    { id: 3, name: 'Milk', price: 3, category: 'Dairy', img: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=facearea&w=60&h=60' },
    { id: 4, name: 'Bread', price: 2.5, category: 'Bakery', img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=facearea&w=60&h=60' },
    { id: 5, name: 'Eggs', price: 4, category: 'Dairy', img: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=facearea&w=60&h=60' },
    { id: 6, name: 'Shampoo', price: 6, category: 'Personal Care', img: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=facearea&w=60&h=60' },
    { id: 7, name: 'Soap', price: 2, category: 'Personal Care', img: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=facearea&w=60&h=60' },
    { id: 8, name: 'T-shirt', price: 10, category: 'Clothing', img: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=facearea&w=60&h=60' },
    { id: 9, name: 'Jeans', price: 25, category: 'Clothing', img: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=facearea&w=60&h=60' },
    { id: 10, name: 'Orange Juice', price: 5, category: 'Beverages', img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=facearea&w=60&h=60' }
];
// Billing/Checkout logic
function renderBillingSummary() {
    const summaryDiv = document.getElementById('billing-summary');
    if (!cart.length) {
        summaryDiv.innerHTML = '<em>Your cart is empty.</em>';
        return;
    }
    let html = '<table style="width:100%"><tr><th>Item</th><th>Qty</th><th>Subtotal</th></tr>';
    let total = 0;
    cart.forEach(item => {
        const subtotal = item.price * item.qty;
        total += subtotal;
        html += `<tr><td>${item.name}</td><td>${item.qty}</td><td>$${subtotal.toFixed(2)}</td></tr>`;
    });
    html += `<tr><td colspan="2"><b>Total</b></td><td><b>$${total.toFixed(2)}</b></td></tr></table>`;
    summaryDiv.innerHTML = html;
}

function submitBilling(e) {
    e.preventDefault();
    if (!cart.length) {
        showToast('Your cart is empty!');
        return;
    }
    // Simulate order placement
    showToast('Order placed! Thank you.');
    cart = [];
    localStorage.setItem('cart', '[]');
    updateCart();
    document.getElementById('billing-form').reset();
    renderBillingSummary();
}

function renderProducts(filter = '', category = '') {
    const list = document.getElementById('products-list');
    list.innerHTML = '';
    let filtered = products.filter(p =>
        (!filter || p.name.toLowerCase().includes(filter.toLowerCase())) &&
        (!category || p.category === category)
    );
    filtered.forEach(product => {
        const div = document.createElement('div');
        div.className = 'product-card';
        div.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <div class="product-info">
                <div class="product-name">${product.name}</div>
                <div class="product-price">$${product.price.toFixed(2)}</div>
                <div class="product-category">${product.category}</div>
                <button onclick="addProductToCart(${product.id})">Add to Cart</button>
            </div>
        `;
        list.appendChild(div);
    });
}

function renderCategories() {
    const categories = [...new Set(products.map(p => p.category))];
    const container = document.getElementById('category-filters');
    container.innerHTML = "<button onclick=\"filterByCategory('')\">All</button>";
    categories.forEach(cat => {
        container.innerHTML += `<button onclick="filterByCategory('${cat}')">${cat}</button>`;
    });
}

let currentCategory = '';
function filterByCategory(cat) {
    currentCategory = cat;
    renderProducts(document.getElementById('search-bar').value, cat);
}

function filterProducts() {
    renderProducts(document.getElementById('search-bar').value, currentCategory);
}

function addProductToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    // If already in cart, increase qty
    let idx = cart.findIndex(item => item.name === product.name && item.price === product.price);
    if (idx !== -1) {
        cart[idx].qty += 1;
    } else {
        cart.push({ name: product.name, price: product.price, qty: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    showToast(`${product.name} added to cart!`);
    updateCart();
}

let cart = JSON.parse(localStorage.getItem('cart') || '[]');
let budget = parseFloat(localStorage.getItem('budget')) || 0;
let editingIndex = null;


function setBudget() {
    const budgetInput = document.getElementById('budget');
    budget = parseFloat(budgetInput.value) || 0;
    localStorage.setItem('budget', budget);
    document.getElementById('budget-info').textContent = `Budget set: $${budget.toFixed(2)}`;
    updateCart();
}


function addItem() {
    const name = document.getElementById('item-name').value.trim();
    const price = parseFloat(document.getElementById('item-price').value);
    const qty = parseInt(document.getElementById('item-qty').value) || 1;
    if (!name || isNaN(price) || price < 0 || qty < 1) {
        showToast('Please enter a valid item name, price, and quantity.');
        return;
    }
    if (editingIndex !== null) {
        cart[editingIndex] = { name, price, qty };
        editingIndex = null;
        showToast('Item updated!');
    } else {
        cart.push({ name, price, qty });
        showToast('Item added!');
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    document.getElementById('item-name').value = '';
    document.getElementById('item-price').value = '';
    document.getElementById('item-qty').value = 1;
    updateCart();
}


function removeItem(index) {
    showToast(`${cart[index].name} removed!`);
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
}

function editItem(index) {
    const item = cart[index];
    document.getElementById('item-name').value = item.name;
    document.getElementById('item-price').value = item.price;
    document.getElementById('item-qty').value = item.qty;
    editingIndex = index;
    showSection('cart');
}


function updateCart() {
    const cartList = document.getElementById('cart-list');
    cartList.innerHTML = '';
    let total = 0;
    cart.forEach((item, idx) => {
        const subtotal = item.price * item.qty;
        total += subtotal;
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>$${item.price.toFixed(2)}</td>
            <td>${item.qty}</td>
            <td>$${subtotal.toFixed(2)}</td>
            <td>
                <button onclick="editItem(${idx})">Edit</button>
                <button onclick="removeItem(${idx})">Remove</button>
            </td>
        `;
        cartList.appendChild(row);
    });
    document.getElementById('total').textContent = `Total: $${total.toFixed(2)}`;
    localStorage.setItem('cart', JSON.stringify(cart));
    // Progress bar
    const progressBar = document.getElementById('progress-bar');
    if (budget > 0) {
        let percent = Math.min((total / budget) * 100, 100);
        progressBar.style.width = percent + '%';
        progressBar.textContent = Math.round(percent) + '%';
        progressBar.style.background = total > budget ? '#d8000c' : '#2d7a2d';
    } else {
        progressBar.style.width = '0%';
        progressBar.textContent = '';
    }
    // Alert
    const alertDiv = document.getElementById('alert');
    if (budget > 0 && total > budget) {
        alertDiv.textContent = 'Warning: You are over your budget!';
        alertDiv.style.color = '#d8000c';
    } else {
        alertDiv.textContent = '';
    }
}

// On load, restore budget, cart, dark mode, and render products
window.onload = function() {
    if (budget) {
        document.getElementById('budget').value = budget;
        document.getElementById('budget-info').textContent = `Budget set: $${budget.toFixed(2)}`;
    }
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark');
    }
    renderProducts();
    renderCategories();
    updateCart();
    showSection('home');
};
