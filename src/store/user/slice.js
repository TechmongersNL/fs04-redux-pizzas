// src/store/user/slice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Helva",
  id: 42,
  favorites: [357311, 161235],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    toggleFavorites: (state, action) => {
      if (state.favorites.includes(action.payload)) {
        state.favorites = state.favorites.filter(
          (fav) => fav !== action.payload
        );
        return state; // "early return"
      }

      state.favorites = [...state.favorites, action.payload];
    },
  },
});

export const { toggleFavorites } = userSlice.actions;

export default userSlice.reducer;
