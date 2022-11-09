import { useState } from "react";
import "./App.css";

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
    <aside></aside>
   </main>
   <footer>footer</footer>
  </div>
 );
}

export default App;
