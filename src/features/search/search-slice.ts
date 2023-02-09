import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    value: '',
  },
  reducers: {
    changeSearch(state, payload) {
      state.value = payload.payload;
    },
  },
});

export default searchSlice.reducer;
export const { changeSearch } = searchSlice.actions;
