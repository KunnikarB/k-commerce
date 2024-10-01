export const  cart = [];

// Add the product to the cart
export function addToCart(productId) {
  // Check if the product is already in the cart
  let productInCart;
  cart.forEach((productItem) => {
    // If the product is already in the cart, update the quantity
    if (productItem.productId === productId) {
      productInCart = productItem;
    }
  });

  // Increase the quantity by the number selected
  const quantitySelector = document.querySelector(
    `.js-quantity-selector-${productId}`
  );

  const quantity = Number(quantitySelector.value);

  if (productInCart) {
    productInCart.quantity += quantity;
  } else {
    cart.push({
      productId,
      quantity,
    });
  }
}
