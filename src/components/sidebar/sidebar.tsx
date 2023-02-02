import './sidebar.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
  addFilter,
  removeFilter,
} from '../../features/products/product-api-slice';
function Sidebar() {
  const filters = useSelector((state) => state.filters);
  const dispath = useDispatch();
  function applyFilter(e, filterCategoryName) {
    if (e.target.checked) {
      dispath(
        addFilter({
          filterName: filterCategoryName,
          filterValue: e.target.value,
        })
      );
    } else {
      dispath(
        removeFilter({
          filterName: filterCategoryName,
          filterValue: e.target.value,
        })
      );
    }
  }
  return (
    <aside className="sidebar-filters">
      {filters.map((filter, index) => {
        const filterCategoryName = Object.keys(filter)[0];
        const filterValues = filter[filterCategoryName];
        return (
          <div className="sidebar__category" key={`filter-category-${index}`}>
            <div className="sidebar__heading">
              {filterCategoryName}
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
              {filterValues.map((filterName, index) => (
                <label className="check" key={`filter-item-${index}`}>
                  <input
                    type="checkbox"
                    className="check__input"
                    value={filterName}
                    id={filterName}
                    name="type"
                    onClick={(e) => applyFilter(e, filterCategoryName)}
                  />
                  <p className="check__text">{filterName}</p>
                </label>
              ))}
            </div>
          </div>
        );
      })}
    </aside>
  );
}
export default Sidebar;
