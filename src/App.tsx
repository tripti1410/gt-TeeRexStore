import { useState } from "react";
import "./App.scss";

function App() {
 const [count, setCount] = useState(0);

 return (
  <div className="App">
   <header>
    <h1>TeeRex Store</h1>
    <nav>
     <a href="/">Products</a>
     <a href="/">Cart</a>
    </nav>
   </header>

   <main>
    <aside>
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
    <article>
     <div>
      <img src="https://via.placeholder.com/150" alt="" />
      <span>Rs 300</span>
      <button>Add to cart</button>
     </div>
    </article>
   </main>
   <footer>footer</footer>
  </div>
 );
}

export default App;
