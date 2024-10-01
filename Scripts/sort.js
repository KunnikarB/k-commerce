
document.addEventListener('DOMContentLoaded', () => {
  const sortDropdown = document.getElementById('js-sort');
  const productList = document.querySelector('.products--list');
  const products = Array.from(productList.children);

  sortDropdown.addEventListener('change', () => {
    const sortOrder = sortDropdown.value;
    const sortedProducts = products.sort((a, b) => {
      const priceA = parseFloat(
        a.querySelector('.product--price').textContent.replace('$', '')
      );
      const priceB = parseFloat(
        b.querySelector('.product--price').textContent.replace('$', '')
      );

      if (sortOrder === 'asc') {
        return priceA - priceB;
      } else {
        return priceB - priceA;
      }
    });

    // Clear the product list
    while (productList.firstChild) {
      productList.removeChild(productList.firstChild);
    }

    // Append the sorted products
    sortedProducts.forEach((product) => {
      productList.appendChild(product);
    });
  });
});