import "./App.scss";
import "./layout.scss";
import Header from "./components/header/header";
import ProductListing from "./pages/product-listing/product-listing";

function App() {
 return (
  <div className="wrapper">
   <Header />
   <main>
    <ProductListing />
   </main>
  </div>
 );
}

export default App;
