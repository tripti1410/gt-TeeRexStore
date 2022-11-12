import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './counter';
import { Product, State } from '../../types';

function ProductCard(product: Product) {
  const count = useSelector((state: State) => state.productCount);
  const dispatch = useDispatch();
  return (
    <div className="product" id={`product-${product.id}`}>
      <img className="product__image" src={product.imageURL} alt="" />
      <span>Rs {product.price}</span>
      <button onClick={() => dispatch(decrement())}>-</button>
      <span>{count}</span>
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  );
}

export default ProductCard;
