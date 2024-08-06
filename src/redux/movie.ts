/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from '@reduxjs/toolkit';

const initialState: any = [];

const movieSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addFavoriteMovie(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      return state.filter((item: any) => item.id !== action.payload);
    },
  },
});

export const { addFavoriteMovie, remove } = movieSlice.actions;
export default movieSlice.reducer;
