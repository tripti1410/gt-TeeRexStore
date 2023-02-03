function getFilteredProduct(product, filterName, filterValues) {
  let isProductmatched;
  filterValues.forEach((value) => {
    if (product[filterName] === value) {
      isProductmatched = true;
    }
  });
  return isProductmatched;
}

function getFilteredProducts(products, filters) {
  const noOfFilters = Object.keys(filters).length;
  return products.filter((product) => {
    const output = [];
    for (const [key, values] of Object.entries(filters)) {
      if (getFilteredProduct(product, key, values)) {
        output.push(true);
      }
    }
    console.log(output, 'out', noOfFilters);
    if (output.length === noOfFilters) {
      return true;
    } else {
      return false;
    }
  });
}
export default getFilteredProducts;
