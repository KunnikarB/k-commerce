import { cart, addToCart } from '../data/cart.js';

import { products } from '../data/clothing-products.js';

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
              <img src="./images/checkmark.png" alt="checked">
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

// Add to cart button
document.querySelectorAll('.js-add-to-cart').forEach((button) => {
  button.addEventListener('click', () => {
    const { productId } = button.dataset;

    addToCart(productId);
    updateCartQuantity();
    showMessage(productId);
  });
});

