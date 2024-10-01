import {products} from '../data/electronics-products.js';

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

            <div class ="added-to-cart js-added-to-cart-${product.id}" >
              <img src="./images/checkmark.png" alt="checked">
              <p>Added to cart</p>
            </div>

            <button class="product--add-to-cart-button card" data-product-id = ${product.id} >Add to cart</button>
            
          </div>`;
});

// Add products to the DOM 
document.querySelector('.js-products--list').innerHTML = productsContainer;


