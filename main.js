const cart = []

const aboutBtn = document.getElementById('aboutBtn');
const productsBtn = document.getElementById('productsBtn');
const cartBtn = document.getElementById('cartBtn');
const content = document.getElementById('content');

function renderAboutUs() {
  content.innerHTML = "<h2>About Us</h2><p>Welcome to our e-commerce website! We aim to provide quality products and excellent service.</p>";
}

function renderAllProducts() {
  content.innerHTML = "";
  products.forEach((product, index) => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');
    productDiv.innerHTML = `
      <img src="${product.img}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>Price: $${product.price}</p>
      <button class="addToCartBtn" onclick="addToCart(${index})">Add to Cart</button>
    `;
    content.appendChild(productDiv);
  });
}

function renderCart() {
  content.innerHTML = "";
  cart.forEach((item, index) => {
    const cartItemDiv = document.createElement('div');
    cartItemDiv.classList.add('cartItem');
    cartItemDiv.innerHTML = `
      <img src="${item.img}" alt="${item.name}">
      <h3>${item.name}</h3>
      <p>Price: $${item.price}</p>
      <button class="deleteBtn" onclick="deleteFromCart(${index})">Delete</button>
    `;
    content.appendChild(cartItemDiv);
  });
}

function updateCartCounter() {
    const cartCounter = document.getElementById('cartCounter');
    cartCounter.textContent = cart.length;
  }

function addToCart(index) {
    const selectedProduct = products[index];
    cart.push(selectedProduct);
    renderCart();
    updateCartCounter();
  }

function deleteFromCart(index) {
    cart.splice(index, 1);
    renderCart();
    updateCartCounter();
  }

aboutBtn.addEventListener('click', renderAboutUs);
productsBtn.addEventListener('click', renderAllProducts);
cartBtn.addEventListener('click', renderCart);