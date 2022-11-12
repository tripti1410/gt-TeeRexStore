import { createSlice } from '@reduxjs/toolkit';
import { PRODUCTS, filtersType } from './data';
import { removeDuplicates } from '../utility';
import { Filter } from '../types';

const filters: Array<Filter> = [];
function getFilters() {
  filtersType.forEach((filter) => {
    const allValues = PRODUCTS.map((product) => product[filter]);
    filters.push({ [filter]: removeDuplicates(allValues) });
  });
  return filters;
}

export const filtersSlice = createSlice({
  name: 'filters',
  initialState: getFilters(),
  reducers: {},
});

export default filtersSlice.reducer;
