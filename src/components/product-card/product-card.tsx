import { useDispatch } from 'react-redux';
import {
  addProductToProductListing,
  removeProductFromProductListing,
} from '../../features/products/product-api-slice';
import {
  addProductToCart,
  removeProductFromCart,
} from '../../features/add-to-cart/add-to-cart-slice';
import { Product } from '../../types';

function ProductCard(product: Product) {
  const dispath = useDispatch();

  function addProductHandle() {
    dispath(addProductToCart({ id: product.id }));
    dispath(addProductToProductListing({ id: product.id }));
  }
  function removeProductHandle() {
    dispath(removeProductFromCart({ id: product.id }));
    dispath(removeProductFromProductListing({ id: product.id }));
  }
  return (
    <div className="product" id={`product-${product.id}`}>
      <img className="product__image" src={product.imageURL} alt="" />
      <span>Rs {product.price}</span>
      <button
        disabled={product.selectedQuanity === 0}
        onClick={removeProductHandle}
      >
        -
      </button>
      <span>
        {product.quantity <= product.selectedQuanity
          ? 'out of stock'
          : product.selectedQuanity}
      </span>
      <button
        disabled={product.quantity <= product.selectedQuanity}
        onClick={addProductHandle}
      >
        +
      </button>
      <p>{product.name}</p>
    </div>
  );
}

export default ProductCard;
