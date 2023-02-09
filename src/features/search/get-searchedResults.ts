const attributes = ['color', 'type', 'name'];

function getSearchedInputfromAnAttribute(product, input, attribute) {
  const lowerCasedInput = input.toLowerCase();
  const attributeValue = product[attribute].toLowerCase();
  return attributeValue.startsWith(lowerCasedInput);
}
function getSearchedResult(products, input) {
  return products.filter((product) => {
    let isInputInAttribute;
    attributes.forEach((attribute) => {
      if (getSearchedInputfromAnAttribute(product, input, attribute)) {
        isInputInAttribute = true;
      }
    });
    return isInputInAttribute;
  });
}

export default getSearchedResult;
