import { useState } from "react";
import "./App.scss";
import "./layout.scss";

function App() {
 const [count, setCount] = useState(0);

 return (
  <div className="wrapper">
   <header className="with-sidebar">
    <h1 className="sidebar">TeeRex Store</h1>
    <nav>
     <a href="/">Products</a>
    </nav>
   </header>

   <main className="with-sidebar">
    <aside className="sidebar">
     <div className="sidebar__category">
      <div className="sidebar__heading">
       Type
       <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-chevron-up"
       >
        <polyline points="18 15 12 9 6 15"></polyline>
       </svg>
      </div>
      <div className="sidebar__options">
       <label className="check">
        <input type="checkbox" className="check__input" />
        <span className="check__checkbox">
         <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
         >
          <path
           d="M20 6.5L9 17.5L4 12.5"
           stroke="#fff"
           strokeWidth="2.6"
           strokeLinecap="round"
           strokeLinejoin="round"
          />
         </svg>
        </span>
        <p className="check__text">Polo</p>
       </label>
       <label className="check">
        <input type="checkbox" className="check__input" />
        <span className="check__checkbox">
         <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
         >
          <path
           d="M20 6.5L9 17.5L4 12.5"
           stroke="#fff"
           strokeWidth="2.6"
           strokeLinecap="round"
           strokeLinejoin="round"
          />
         </svg>
        </span>
        <p className="check__text">Hoodie</p>
       </label>
       <label className="check">
        <input type="checkbox" className="check__input" />
        <span className="check__checkbox">
         <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
         >
          <path
           d="M20 6.5L9 17.5L4 12.5"
           stroke="#fff"
           strokeWidth="2.6"
           strokeLinecap="round"
           strokeLinejoin="round"
          />
         </svg>
        </span>
        <p className="check__text">Basic</p>
       </label>
      </div>
     </div>
    </aside>
    <article className="products">
     <div className="product">
      <img
       className="product__image"
       src="https://via.placeholder.com/300"
       alt=""
      />
      <span>Rs 300</span>
      <button>Add to cart</button>
     </div>
     <div className="product">
      <img
       className="product__image"
       src="https://via.placeholder.com/300"
       alt=""
      />
      <span>Rs 300</span>
      <button>Add to cart</button>
     </div>
     <div className="product">
      <img
       className="product__image"
       src="https://via.placeholder.com/300"
       alt=""
      />
      <span>Rs 300</span>
      <button>Add to cart</button>
     </div>
     <div className="product">
      <img
       className="product__image"
       src="https://via.placeholder.com/300"
       alt=""
      />
      <span>Rs 300</span>
      <button>Add to cart</button>
     </div>
     <div className="product">
      <img
       className="product__image"
       src="https://via.placeholder.com/300"
       alt=""
      />
      <span>Rs 300</span>
      <button>Add to cart</button>
     </div>
    </article>
   </main>
   <div className="cart">
    <ul className="cart__list">
     <li>
      {" "}
      <img src="https://via.placeholder.com/300" alt="" />
     </li>
     <li>
      {" "}
      <img src="https://via.placeholder.com/300" alt="" />
     </li>
    </ul>
    <button className="cart__btn">
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
    </button>
   </div>
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
  </div>
 );
}

export default App;
