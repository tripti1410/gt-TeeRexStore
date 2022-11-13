import CartPreview from '../../components/cart-preview/cart-preview';
import ProductCard from '../../components/product-card/product-card';
import Search from '../../components/search/search';
import Sidebar from '../../components/sidebar/sidebar';
import './product-listing.scss';
import { useSelector } from 'react-redux';
import { State } from '../../types';
function ProductListing() {
  const products = useSelector((state: State) => state.products);
  return (
    <div className="product-listing-page">
      <Sidebar />
      <Search />
      <article className="products">
        {products.map((product) => (
          <ProductCard {...product} key={product.id} />
        ))}
      </article>
      <CartPreview />
    </div>
  );
}
export default ProductListing;
