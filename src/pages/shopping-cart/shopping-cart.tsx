import './shoppoing-cart.scss';
function ShoppingCart() {
  return (
    <div className="shopping-cart-page">
      <h2>Shopping Cart</h2>
      <ul className="shopping-cart__list">
        <li className="shopping-cart__item">
          <img
            className="product__image"
            src="https://via.placeholder.com/300"
            alt=""
          />
          <div className="shopping-cart__item-desc">
            <span>Name</span>
            <span>Rs 300</span>
          </div>

          <select name="qty" id="qty">
            <option value="1">Qty: 1</option>
            <option value="2">Qty: 2</option>
          </select>

          <button>Delete</button>
        </li>
      </ul>
    </div>
  );
}
export default ShoppingCart;
