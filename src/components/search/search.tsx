import './search.scss';

function Search() {
  return (
    <div className="search-bar">
      <input
        className="header__search"
        type="text"
        placeholder="Search for products"
      />
    </div>
  );
}

export default Search;
