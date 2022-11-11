import CartPreview from "../../components/cart-preview/cart-preview";
import ProductCard from "../../components/product-card/product-card";
import Search from "../../components/search/search";
import Sidebar from "../../components/sidebar/sidebar";
import "./product-listing.scss";

function ProductListing() {
 return (
  <div className="with-sidebar">
   <Sidebar />
   <Search />
   <article className="products">
    <ProductCard />
    <ProductCard />
    <ProductCard />
   </article>
   <CartPreview />
  </div>
 );
}
export default ProductListing;
