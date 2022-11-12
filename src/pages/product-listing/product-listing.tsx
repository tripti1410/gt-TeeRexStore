import CartPreview from '../../components/cart-preview/cart-preview';
import ProductCard from '../../components/product-card/product-card';
import Search from '../../components/search/search';
import Sidebar from '../../components/sidebar/sidebar';
import './product-listing.scss';
import { useSelector } from 'react-redux';

function ProductListing() {
  const products = useSelector((state) => state.products.value);
  console.log(products, 'ff');
  return (
    <div className="with-sidebar">
      <Sidebar />
      <Search />
      <article className="products">
        {products.map((product) => (
          <ProductCard {...product} />
        ))}
      </article>
      <CartPreview />
    </div>
  );
}
export default ProductListing;
