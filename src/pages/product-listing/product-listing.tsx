import CartPreview from '../../components/cart-preview/cart-preview';
import ProductCard from '../../components/product-card/product-card';
import Search from '../../components/search/search';
import Sidebar from '../../components/sidebar/sidebar';
import './product-listing.scss';
import { useSelector } from 'react-redux';
import getFilteredProducts from '../../features/filter/get-filtered-products';
import getSearchedResult from '../../features/search/get-searchedResults';

function ProductListing() {
  const selectedFilters = useSelector(
    (state) => state.productListing.selectedFilters
  );
  let derivedProducts = [];
  const products = useSelector((state) => state.productListing.products);
  const searchInput = useSelector((state) => state.searchInput.value);
  const isSearch = searchInput === '' ? false : true;

  const isFilters = Object.keys(selectedFilters).length <= 0 ? false : true;

  if (!isSearch && !isFilters) {
    derivedProducts = products;
  }
  if (isSearch) {
    derivedProducts = getSearchedResult(products, searchInput);
  }
  if (isFilters) {
    let searchedProducts;
    if (isSearch) {
      searchedProducts = getSearchedResult(products, searchInput);
      derivedProducts = getFilteredProducts(searchedProducts, selectedFilters);
    } else {
      derivedProducts = getFilteredProducts(products, selectedFilters);
    }
  }

  return (
    <div className="product-listing-page">
      <Sidebar />
      <Search />
      <article className="products">
        {derivedProducts.length <= 0 && <p>No products found</p>}
        {derivedProducts.map((product) => (
          <ProductCard {...product} key={product.id} />
        ))}
      </article>
      {/* <CartPreview /> */}
    </div>
  );
}
export default ProductListing;
