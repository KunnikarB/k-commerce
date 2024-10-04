import { cart, addToCart } from '../data/cart.js';

import { products } from '../data/electronics-products.js';

// Generate the products HTML and add to the DOM
let productsContainer = '';
products.forEach((product) => {
  productsContainer += `<div class="product">
            <div class="product--overlay">
              <img class="product--img" src="${product.image}" alt="MacBook">
              <span class="product--discount">${product.discount}</span>
            </div>
            <h4 class="product--name">${product.name}</h4>
            <p class="product--description">${product.des}</p>
            <p class="product--price">Price: $${product.price}</p>

            <div class="product--quantity">
              <label for="quantity">Quantity:</label>
              <select class="js-quantity-selector-${product.id}">
                <option selected value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>

            <div class ="added-to-cart js-added-to-cart-${product.id}" >
              <img src="images/checkmark.png" alt="checked">
              <p>Added</p>
            </div>

            <button class="product--add-to-cart-button card js-add-to-cart" data-product-id = ${product.id} >Add to cart</button>
            
          </div>`;
});

// Add products to the DOM
document.querySelector('.js-products--list').innerHTML = productsContainer;

function updateCartQuantity() {
  // Update the cart total
  let cartTotal = 0;
  cart.forEach((productItem) => {
    cartTotal += productItem.quantity;
  });

  document.querySelector('.js-cart-total').innerHTML = cartTotal;
}

function showMessage(productId) {
  // Show the added to cart message
  const addedMessage = document.querySelector(`.js-added-to-cart-${productId}`);

  addedMessage.classList.add('added-to-cart-visible');

  // Hide the added to cart message after 2 seconds
  setTimeout(() => {
    addedMessage.classList.remove('added-to-cart-visible');
  }, 2000);
}


// Function to display products
function displayElectronics(products) {
  const productsContainer = document.getElementById('electronics-products');
  productsContainer.innerHTML = '';

  products.forEach((product) => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');
    productDiv.innerHTML = `
            <div class="product--overlay">
              <img class="product--img" src="${product.image}" alt="MacBook">
              <span class="product--discount">${product.discount}</span>
            </div>
            <h4 class="product--name">${product.name}</h4>
            <p class="product--description">${product.des}</p>
            <p class="product--price">Price: $${product.price}</p>

            <div class="product--quantity">
              <label for="quantity">Quantity:</label>
              <select class="js-quantity-selector-${product.id}">
                <option selected value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>

            <div class ="added-to-cart js-added-to-cart-${product.id}" >
              <img src="images/checkmark.png" alt="checked">
              <p>Added</p>
            </div>

            <button class="product--add-to-cart-button card js-add-to-cart" data-product-id = ${product.id} >Add to cart</button>
            
          </div>
        `;
    productsContainer.appendChild(productDiv);
  });

  document.querySelectorAll('.js-add-to-cart').forEach((button) => {
    button.addEventListener('click', () => {
      const { productId } = button.dataset;

      addToCart(productId);
      updateCartQuantity();
      showMessage(productId);
      displaySearchProducts(products);
    });
  });
}

// Display products on page load
 displayElectronics(products);


 // Search products
function searchProducts() {
  const searchInput = document.getElementById('search-item').value.toLowerCase();
  
  // Filter products based on search input
  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchInput)
  );
  
  // Display filtered products
  displayElectronics(filteredProducts);
}

// Event listener for the search input
document.getElementById('search-item').addEventListener('keyup', searchProducts);


// Sort products based on selection
document
  .getElementById('sort-electronics')
  .addEventListener('change', function () {
    const sortValue = this.value;
    let sortedProducts;

    if (sortValue === 'price-asc') {
      sortedProducts = products.sort((a, b) => a.price - b.price);
    } else if (sortValue === 'price-desc') {
      sortedProducts = products.sort((a, b) => b.price - a.price);
    }

    displayElectronics(sortedProducts);
  });






