// Sort products based on selection
document
  .getElementById('js-sort-electronics')
  .addEventListener('change', function () {
    const sortValue = this.value;
    let sortedProducts;

    if (sortValue === 'price-asc') {
      sortedProducts = electronics.sort((a, b) => a.price - b.price);
    } else if (sortValue === 'price-desc') {
      sortedProducts = electronics.sort((a, b) => b.price - a.price);
    }

    displayElectronics(sortedProducts);
  });

// Display products on page load
displayElectronics(electronics);
