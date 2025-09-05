/* ========================================
   PRODUCT DATA
======================================== */
const productsResponse = [
  {
    id: 1,
    title: "HydraGlow",
    shortDesc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    longDesc:
      "This refreshing serum deeply hydrates your skin, giving you a natural, radiant glow that lasts all day. Its lightweight formula is perfect for all skin types, ensuring your complexion stays luminous and supple.",
    image: "./assets/product-1.webp",
    price: "$18.2",
    rating: 4.5,
  },
  {
    id: 2,
    title: "PureMist",
    shortDesc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    longDesc:
      "An invigorating facial mist that instantly revitalizes tired skin. Infused with natural botanicals, it soothes and refreshes, leaving your face feeling cool and dewy. Perfect for a quick boost.",
    image: "./assets/product-2.webp",
    price: "$18.2",
    rating: 4.5,
  },
  {
    id: 3,
    title: "SilkTouch",
    shortDesc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    longDesc:
      "This luxurious cream provides a velvety-smooth finish, leaving your skin incredibly soft and supple to the touch. It's designed to lock in moisture and create a flawless, silky base for makeup.",
    image: "./assets/product-3.jpeg",
    price: "$18.2",
    rating: 4.5,
  },
  {
    id: 4,
    title: "GlowUp",
    shortDesc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    longDesc:
      "A brightening facial oil that works to reduce dark spots and even out your skin tone. Packed with vitamins and antioxidants, it promotes a healthy, youthful glow and provides deep nourishment.",
    image: "./assets/product-4.png",
    price: "$18.2",
    rating: 4.5,
  },
  {
    id: 5,
    title: "FreshDew",
    shortDesc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    longDesc:
      "This light gel moisturizer gives your skin a burst of fresh hydration, just like morning dew. It absorbs quickly, providing a weightless feel while keeping your complexion smooth and revitalized throughout the day.",
    image: "./assets/product-5.png",
    price: "$18.2",
    rating: 4.5,
  },
  {
    id: 6,
    title: "CalmSkin",
    shortDesc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    longDesc:
      "Formulated to soothe and calm sensitive or irritated skin. This gentle formula helps to reduce redness and inflammation, restoring your skin's natural balance for a clear and comfortable complexion.",
    image: "./assets/product-6.png",
    price: "$18.2",
    rating: 4.5,
  },
  {
    id: 7,
    title: "SoftBloom",
    shortDesc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    longDesc:
      "An ultra-gentle toner that refines pores and removes impurities without stripping your skin. It prepares your face for serums and moisturizers, leaving it soft, balanced, and ready to absorb nutrients.",
    image: "./assets/product-7.png",
    price: "$18.2",
    rating: 4.5,
  },
  {
    id: 8,
    title: "VelvetCare",
    shortDesc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    longDesc:
      "A rich, nourishing balm that deeply moisturizes dry areas, providing intense relief and protection. Its thick, luxurious texture is perfect for an overnight treatment, ensuring you wake up with soft, repaired skin.",
    image: "./assets/product-8.png",
    price: "$18.2",
    rating: 4.5,
  },
  {
    id: 9,
    title: "LumiCream",
    shortDesc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    longDesc:
      "This illuminating cream is designed to give you a luminous, lit-from-within glow. It helps to blur imperfections and brightens your complexion, making it a perfect base for a dewy makeup look.",
    image: "./assets/product-9.png",
    price: "$18.2",
    rating: 4.5,
  },
  {
    id: 10,
    title: "SkinDrop",
    shortDesc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    longDesc:
      "A powerful, concentrated serum that targets fine lines and signs of aging. Just a few drops are needed to revitalize and firm your skin, revealing a smoother, more youthful appearance over time.",
    image: "./assets/product-10.png",
    price: "$18.2",
    rating: 4.5,
  },
  {
    id: 11,
    title: "Natura",
    shortDesc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    longDesc:
      "A pure, plant-based oil that harnesses the power of nature to restore and nourish your skin. It's rich in essential fatty acids, providing deep moisture and a healthy, natural radiance.",
    image: "./assets/product-11.png",
    price: "$18.2",
    rating: 4.5,
  },
  {
    id: 12,
    title: "Glowify",
    shortDesc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    longDesc:
      "This lightweight, sheer foundation evens out your skin tone while letting your natural beauty shine through. It creates a seamless, natural-looking finish that helps you glow with confidence.",
    image: "./assets/product-12.png",
    price: "$18.2",
    rating: 4.5,
  },
];

/* ========================================
   RECOMMENDED PRODUCTS FUNCTIONALITY
======================================== */
const recommendedProducts = [
  {
    id: 101,
    title: "Foundation",
    price: "$29.99",
    image: "./assets/Faoundition1.jpeg",
  },
  {
    id: 102,
    title: "Concealer",
    price: "$19.99",
    image: "./assets/conselar.jpeg",
  },
  {
    id: 103,
    title: "Hyaluronic Elixir",
    price: "$39.99",
    image: "./assets/heloronek.jpeg",
  },
  {
    id: 104,
    title: "Vitamin C Serum",
    price: "$24.99",
    image: "./assets/serom.jpeg",
  },
];

/* ========================================
   GLOBAL VARIABLES & INITIALIZATION
======================================== */
const products = document.getElementById("product-grid");
const cartNumber = document.querySelector(".cart-number");
const cartContainer = document.querySelector(".cart-container");

// Load cart from localStorage
let cart = JSON.parse(localStorage.getItem("beautyCart")) || {};
if (Array.isArray(cart)) {
  cart = {};
  localStorage.removeItem("beautyCart");
}

// Initialize cart display on page load
updateCartNumber();

/* ========================================
   PRODUCT GRID GENERATION
======================================== */
productsResponse.forEach((product) => {
  const card = document.createElement("div");
  card.className = "grid-card";

  card.innerHTML = `
    <img src="${product.image}" alt="${product.title}" />
    <h3>${product.title}</h3>
    <p class="price">${product.price}</p>
    ${product.shortDesc ? `<p class="desc">${product.shortDesc}</p>` : ""}
    <button class='learn-more' data-id="${product.id}">Learn more</button>
  `;

  products.appendChild(card);
});

/* ========================================
   PRODUCT DETAIL POPUP FUNCTIONALITY
======================================== */
const popupOverlay = document.getElementById("popup-overlay");
const popupDetails = document.getElementById("popup-details");
const closeBtn = document.querySelector(".close-btn");

function showPopup(product) {
  popupDetails.innerHTML = `
    <div class="popup-header">
      <img src="${product.image}" alt="${product.title}" />
    </div>
    <div class="popup-body">
      <h3 class="popup-title">${product.title}</h3>
      <p class="popup-price">${product.price}</p>
      <p class="popup-description">${product.longDesc}</p>
      <div class="popup-rating">
        <span class="stars">${"★".repeat(
          Math.floor(product.rating)
        )}${"☆".repeat(5 - Math.floor(product.rating))}</span>
        <span class="rating-text">${product.rating} out of 5</span>
      </div>
      <div class="popup-actions">
        <button class="action-btn btn-primary add-to-cart-btn" data-id="${
          product.id
        }">Add to Cart</button>
      </div>
    </div>
  `;

  popupOverlay.style.display = "block";
  setTimeout(() => {
    popupOverlay.classList.add("show");
  }, 10);
}

function closePopup() {
  popupOverlay.classList.remove("show");
  setTimeout(() => {
    popupOverlay.style.display = "none";
  }, 500);
}

// Popup event listeners
closeBtn.addEventListener("click", closePopup);
popupOverlay.addEventListener("click", (e) => {
  if (e.target === popupOverlay) {
    closePopup();
  }
});

/* ========================================
   SHOPPING CART FUNCTIONALITY
======================================== */
const cartSidebar = document.getElementById("cart-sidebar");
const cartOverlay = document.getElementById("cart-overlay");
const cartClose = document.querySelector(".cart-close");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");

function addToCart(productId) {
  const product =
    productsResponse.find((p) => p.id === productId) ||
    recommendedProducts.find((p) => p.id === productId);

  if (cart[productId]) {
    alert(`${product.title} is already in your cart!`);
  } else {
    cart[productId] = { ...product, quantity: 1 };
    saveCartToLocalStorage();
    updateCartNumber();
    alert(`${product.title} has been added to cart!`);
  }
}

function updateQuantity(productId, action) {
  if (action === "increase") {
    cart[productId].quantity++;
  } else if (action === "decrease") {
    cart[productId].quantity--;
    if (cart[productId].quantity <= 0) {
      delete cart[productId];
    }
  }
  saveCartToLocalStorage();
  updateCartNumber();
  renderCartItems();
  updateCartTotal();
}

function openCart() {
  renderCartItems();
  updateCartTotal();
  cartOverlay.style.display = "block";
  setTimeout(() => {
    cartOverlay.classList.add("show");
    cartSidebar.classList.add("show");
  }, 10);
}

function closeCart() {
  cartOverlay.classList.remove("show");
  cartSidebar.classList.remove("show");
  setTimeout(() => {
    cartOverlay.style.display = "none";
  }, 500);
}

function renderCartItems() {
  const cartKeys = Object.keys(cart);

  if (cartKeys.length === 0) {
    cartItems.innerHTML = '<div class="empty-cart">Your cart is empty</div>';
    return;
  }

  cartItems.innerHTML = cartKeys
    .map((id) => {
      const item = cart[id];
      return `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.title}">
        <div class="item-details">
          <div class="item-name">${item.title}</div>
          <div class="item-price">${item.price}</div>
        </div>
        <div class="quantity-controls">
          <button class="qty-btn" data-id="${id}" data-action="decrease">-</button>
          <span class="qty-display">${item.quantity}</span>
          <button class="qty-btn" data-id="${id}" data-action="increase">+</button>
        </div>
      </div>
    `;
    })
    .join("");
}

function updateCartTotal() {
  const total = Object.values(cart).reduce((sum, item) => {
    const price = parseFloat(item.price.replace("$", ""));
    return sum + price * item.quantity;
  }, 0);
  cartTotal.textContent = total.toFixed(2);
}

function saveCartToLocalStorage() {
  localStorage.setItem("beautyCart", JSON.stringify(cart));
}

function updateCartNumber() {
  const totalItems = Object.values(cart).reduce((sum, item) => {
    return sum + (item && item.quantity ? item.quantity : 0);
  }, 0);
  cartNumber.textContent = totalItems;
}

// Cart event listeners
cartContainer.addEventListener("click", openCart);
cartClose.addEventListener("click", closeCart);
cartOverlay.addEventListener("click", closeCart);

/* ========================================
   SIGN UP POPUP FUNCTIONALITY
======================================== */
const signupBtn = document.querySelector(".btn-signup");
const signupOverlay = document.getElementById("signup-overlay");
const signupClose = document.querySelector(".signup-close");
const signupForm = document.querySelector(".signup-form");

function closeSignupPopup() {
  signupOverlay.classList.remove("show");
  setTimeout(() => {
    signupOverlay.style.display = "none";
  }, 500);
}

// Sign up event listeners
signupBtn.addEventListener("click", () => {
  signupOverlay.style.display = "block";
  setTimeout(() => {
    signupOverlay.classList.add("show");
  }, 10);
});

signupClose.addEventListener("click", closeSignupPopup);
signupOverlay.addEventListener("click", (e) => {
  if (e.target === signupOverlay) {
    closeSignupPopup();
  }
});

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value;
  alert(`Welcome ${username}! Your account has been created successfully.`);
  signupForm.reset();
  closeSignupPopup();
});

/* ========================================
   HAMBURGER MENU FUNCTIONALITY
======================================== */
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("nav ul");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  hamburger.classList.toggle("active");
});

// Close menu when clicking on a link
navMenu.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    navMenu.classList.remove("active");
    hamburger.classList.remove("active");
  }
});

/* ========================================
   THEME TOGGLE FUNCTIONALITY
======================================== */
const themeSwitch = document.getElementById("theme-switch");
const body = document.body;

// Load saved theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  body.classList.add("dark");
  themeSwitch.checked = true;
}

themeSwitch.addEventListener("change", () => {
  if (themeSwitch.checked) {
    body.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    body.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
});

/* ========================================
   GLOBAL EVENT LISTENERS
======================================== */
document.addEventListener("DOMContentLoaded", () => {
  const recommendedButtons = document.querySelectorAll(
    ".recommended-products button"
  );
  recommendedButtons.forEach((button, index) => {
    button.setAttribute("data-id", recommendedProducts[index].id);
    button.classList.add("buy-now-btn");
  });
});

document.addEventListener("click", (e) => {
  // Handle learn more button clicks
  if (e.target.classList.contains("learn-more")) {
    const productId = parseInt(e.target.dataset.id);
    const product = productsResponse.find((p) => p.id === productId);
    showPopup(product);
  }

  // Handle add to cart button clicks
  if (e.target.classList.contains("add-to-cart-btn")) {
    const productId = parseInt(e.target.dataset.id);
    addToCart(productId);
  }

  // Handle buy now button clicks for recommended products
  if (e.target.classList.contains("buy-now-btn")) {
    const productId = parseInt(e.target.dataset.id);
    addToCart(productId);
  }

  // Handle quantity button clicks
  if (e.target.classList.contains("qty-btn")) {
    const productId = parseInt(e.target.dataset.id);
    const action = e.target.dataset.action;
    updateQuantity(productId, action);
  }

  // Handle clear cart button clicks
  if (e.target.classList.contains("clear-btn")) {
    if (Object.keys(cart).length > 0) {
      if (confirm("Are you sure you want to clear all items from your cart?")) {
        cart = {};
        saveCartToLocalStorage();
        updateCartNumber();
        renderCartItems();
        updateCartTotal();
      }
    }
  }
});

/* ========================================
   SEARCH FUNCTIONALITY
======================================== */
const searchInput = document.getElementById("search-input");
const searchBtn = document.querySelector(".search-bar button");
let searchTimeout;

function renderProducts(productsToShow = productsResponse) {
  requestAnimationFrame(() => {
    products.innerHTML = "";

    if (productsToShow.length === 0) {
      products.innerHTML = '<div class="no-results">No products found</div>';
      return;
    }

    productsToShow.forEach((product) => {
      const card = document.createElement("div");
      card.className = "grid-card";

      card.innerHTML = `
        <img src="${product.image}" alt="${product.title}" />
        <h3>${product.title}</h3>
        <p class="price">${product.price}</p>
        ${product.shortDesc ? `<p class="desc">${product.shortDesc}</p>` : ""}
        <button class='learn-more' data-id="${product.id}">Learn more</button>
      `;

      products.appendChild(card);
    });
  });
}

function searchProducts(query) {
  if (!query.trim()) {
    renderProducts();
    return;
  }

  const filteredProducts = productsResponse.filter(
    (product) =>
      product.title.toLowerCase().includes(query.toLowerCase()) ||
      product.shortDesc.toLowerCase().includes(query.toLowerCase())
  );

  renderProducts(filteredProducts);
}

// Debounced search function
function debouncedSearch(query) {
  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(() => {
    searchProducts(query);
  }, 1500);
}

// Search event listeners
searchInput.addEventListener("input", (e) => {
  debouncedSearch(e.target.value);
});

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  clearTimeout(searchTimeout);
  searchProducts(searchInput.value);
});

searchInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    clearTimeout(searchTimeout);
    searchProducts(searchInput.value);
  }
});

/* ========================================
   PRODUCT GRID GENERATION
======================================== */
// Initial render of all products
renderProducts();
