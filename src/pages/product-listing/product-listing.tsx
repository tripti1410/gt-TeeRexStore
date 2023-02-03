import CartPreview from '../../components/cart-preview/cart-preview';
import ProductCard from '../../components/product-card/product-card';
import Search from '../../components/search/search';
import Sidebar from '../../components/sidebar/sidebar';
import './product-listing.scss';
import { useSelector } from 'react-redux';
import getFilteredProducts from '../../features/filter/get-filtered-products';

function ProductListing() {
  const products = useSelector((state) => state.productListing.products);
  const selectedFilters = useSelector(
    (state) => state.productListing.selectedFilters
  );
  const isFilters = Object.keys(selectedFilters).length <= 0 ? false : true;
  const derivedProducts = isFilters
    ? getFilteredProducts(products, selectedFilters)
    : products;

  return (
    <div className="product-listing-page">
      <Sidebar />
      {/* <Search /> */}
      <article className="products">
        {derivedProducts.map((product) => (
          <ProductCard {...product} key={product.id} />
        ))}
      </article>
      {/* <CartPreview /> */}
    </div>
  );
}
export default ProductListing;
