import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './counter';
interface Product {
  id: number;
  imageURL: string;
  name: string;
  type: string;
  price: number;
  currency: string;
  color: string;
  gender: string;
  quantity: number;
}
function ProductCard(product: Product) {
  console.log(product, 'vdfv');
  const count = useSelector((state) => state.productCount.value);
  const dispatch = useDispatch();
  return (
    <div className="product" id={`product-${product.id}`}>
      <img className="product__image" src={product.imageURL} alt="" />
      <span>Rs. {product.price}</span>

      <button onClick={() => dispatch(decrement())}>-</button>
      <span>{count}</span>
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  );
}

export default ProductCard;
