import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filters: '',
  isLoading: false,
};
const filtersSlice = createSlice({
  
  name: 'filters',
  
  initialState,
  
  reducers: {
    setFilter(state, { payload }) {
      state.filters = payload;
    },
  },
});


export const { setFilter } = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;
