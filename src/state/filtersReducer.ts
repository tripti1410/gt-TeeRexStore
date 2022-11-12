import { createSlice } from '@reduxjs/toolkit';
import { PRODUCTS, filtersType } from './data';
import { removeDuplicates } from '../utility';
import { Filter } from '../types';

const filters: Array<Filter> = [];
function getFilters() {
  filtersType.forEach((filter) => {
    const allValues = PRODUCTS.map((product) => product[filter]);
    if (filter === 'price') {
      const maxPrice = Math.max(...removeDuplicates(allValues));
      const priceFilter = [
        `Rs 0 - ${maxPrice / 2}`,
        `Rs ${maxPrice / 2} - ${maxPrice}`,
        `Rs < ${maxPrice}`,
      ];
      filters.push({ [filter]: priceFilter });
    } else {
      filters.push({ [filter]: removeDuplicates(allValues) });
    }
  });
  return filters;
}

export const filtersSlice = createSlice({
  name: 'filters',
  initialState: getFilters(),
  reducers: {},
});

export default filtersSlice.reducer;
