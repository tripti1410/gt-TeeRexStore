import './cart-preview.scss';
import { Link } from 'react-router-dom';

function CartPreview() {
  return (
    <div className="cart-preview">
      <ul className="cart-preview__list">
        <li>
          {' '}
          <img src="https://via.placeholder.com/300" alt="" />
        </li>
        <li>
          {' '}
          <img src="https://via.placeholder.com/300" alt="" />
        </li>
      </ul>
      <Link className="cart-preview__btn" to="/shopping-cart">
        {' '}
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 12.5H19"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 5.5L19 12.5L12 19.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
    </div>
  );
}
export default CartPreview;
