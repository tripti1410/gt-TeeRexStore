import { useAppDispath } from '../../app/hooks';
import { changeSearch } from '../../features/search/search-slice';
import './search.scss';

function Search() {
  const dispath = useAppDispath();
  const handleSearch = (e) => dispath(changeSearch(e.target.value));

  return (
    <div className="search-bar">
      <input
        className="header__search"
        type="text"
        placeholder="Search for products"
        onChange={handleSearch}
      />
    </div>
  );
}

export default Search;
