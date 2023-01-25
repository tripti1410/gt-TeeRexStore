import { useSelector, useDispatch } from 'react-redux';
import {
  addProduct,
  removeProduct,
} from '../../features/add-to-cart/add-to-cart-slice';
import { Product, State } from '../../types';

function ProductCard(product: Product) {
  const dispath = useDispatch();

  function addProductHandle() {
    dispath(addProduct({ id: product.id }));
  }
  function removeProductHandle() {
    dispath(removeProduct({ id: product.id }));
  }
  return (
    <div className="product" id={`product-${product.id}`}>
      <img className="product__image" src={product.imageURL} alt="" />
      <span>Rs {product.price}</span>
      <button onClick={removeProductHandle}>-</button>
      {/* <span>{count.quantity}</span> */}
      <button onClick={addProductHandle}>+</button>
    </div>
  );
}

export default ProductCard;
