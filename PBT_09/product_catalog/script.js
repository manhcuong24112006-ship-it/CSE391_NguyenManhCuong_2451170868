const products = [
    { id: 1, name: "iPhone 16", price: 25990000, category: "phone", image: "https://placehold.co/200", rating: 4.5, inStock: true },
    { id: 2, name: "Samsung S25", price: 22990000, category: "phone", image: "https://placehold.co/200", rating: 4.4, inStock: true },
    { id: 3, name: "Pixel 9", price: 19990000, category: "phone", image: "https://placehold.co/200", rating: 4.6, inStock: false },

    { id: 4, name: "MacBook Pro", price: 45990000, category: "laptop", image: "https://placehold.co/200", rating: 4.9, inStock: true },
    { id: 5, name: "Dell XPS 15", price: 35990000, category: "laptop", image: "https://placehold.co/200", rating: 4.7, inStock: true },
    { id: 6, name: "ThinkPad X1", price: 32990000, category: "laptop", image: "https://placehold.co/200", rating: 4.5, inStock: true },

    { id: 7, name: "iPad Air", price: 16990000, category: "tablet", image: "https://placehold.co/200", rating: 4.6, inStock: true },
    { id: 8, name: "Galaxy Tab S10", price: 14990000, category: "tablet", image: "https://placehold.co/200", rating: 4.4, inStock: true },
    { id: 9, name: "Xiaomi Pad 7", price: 7990000, category: "tablet", image: "https://placehold.co/200", rating: 4.2, inStock: true },

    { id: 10, name: "AirPods Pro", price: 6990000, category: "accessory", image: "https://placehold.co/200", rating: 4.3, inStock: true },
    { id: 11, name: "Galaxy Buds", price: 3490000, category: "accessory", image: "https://placehold.co/200", rating: 4.1, inStock: true },
    { id: 12, name: "Sony WH-1000XM5", price: 8990000, category: "accessory", image: "https://placehold.co/200", rating: 4.8, inStock: true }
];

let filteredProducts = [...products];
let cartCount = 0;

const app = document.createElement("div");
document.body.appendChild(app);

app.innerHTML = `
    <div class="header">
        <input type="text" id="search" class="search" placeholder="Search...">

        <button class="category-btn" data-category="all">All</button>
        <button class="category-btn" data-category="phone">Phone</button>
        <button class="category-btn" data-category="laptop">Laptop</button>
        <button class="category-btn" data-category="tablet">Tablet</button>
        <button class="category-btn" data-category="accessory">Accessory</button>

        <select id="sortSelect">
            <option value="">Sort By</option>
            <option value="priceAsc">Price ↑</option>
            <option value="priceDesc">Price ↓</option>
            <option value="name">Name A-Z</option>
            <option value="rating">Highest Rating</option>
        </select>

        <button id="themeToggle">Dark Mode</button>
    </div>

    <div class="cart">
        🛒 <span class="badge" id="cartBadge">0</span>
    </div>

    <div class="products" id="products"></div>

    <div class="modal hidden" id="modal">
        <div class="modal-content">
            <h2 id="modalTitle"></h2>
            <p id="modalPrice"></p>
            <p id="modalCategory"></p>
            <p id="modalRating"></p>
            <button id="closeModal">Close</button>
        </div>
    </div>
`;

const productsContainer = document.getElementById("products");

function renderProducts(data) {
    productsContainer.innerHTML = "";

    data.forEach(product => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <img src="${product.image}">
            <h3>${product.name}</h3>
            <p>${product.price.toLocaleString()}đ</p>
            <p>⭐ ${product.rating}</p>
            <button>Add to Cart</button>
        `;

        card.addEventListener("click", e => {
            if (e.target.tagName === "BUTTON") {
                e.stopPropagation();

                cartCount++;
                document.getElementById("cartBadge").textContent = cartCount;
            } else {
                openModal(product);
            }
        });

        productsContainer.appendChild(card);
    });
}

function searchProducts(keyword) {
    filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(keyword.toLowerCase())
    );

    renderProducts(filteredProducts);
}

function filterByCategory(category) {
    filteredProducts = category === "all"
        ? [...products]
        : products.filter(product => product.category === category);

    renderProducts(filteredProducts);
}

function sortProducts(type) {
    filteredProducts.sort((a, b) => {
        switch (type) {
            case "priceAsc":
                return a.price - b.price;

            case "priceDesc":
                return b.price - a.price;

            case "name":
                return a.name.localeCompare(b.name);

            case "rating":
                return b.rating - a.rating;

            default:
                return 0;
        }
    });

    renderProducts(filteredProducts);
}

function openModal(product) {
    document.getElementById("modalTitle").textContent = product.name;
    document.getElementById("modalPrice").textContent = `Price: ${product.price.toLocaleString()}đ`;
    document.getElementById("modalCategory").textContent = `Category: ${product.category}`;
    document.getElementById("modalRating").textContent = `Rating: ${product.rating}`;

    document.getElementById("modal").classList.remove("hidden");
}

document.getElementById("search").addEventListener("input", e => {
    searchProducts(e.target.value);
});

document.querySelectorAll(".category-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        filterByCategory(btn.dataset.category);
    });
});

document.getElementById("sortSelect").addEventListener("change", e => {
    sortProducts(e.target.value);
});

document.getElementById("themeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

document.getElementById("closeModal").addEventListener("click", () => {
    document.getElementById("modal").classList.add("hidden");
});

renderProducts(products);