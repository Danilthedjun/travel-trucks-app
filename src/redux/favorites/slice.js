import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    favorites: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      const camper = action.payload;
      if (!state.favorites.some(fav => fav.id === camper.id)) {
        state.favorites.push(camper);
      }
    },
    removeFavorite: (state, action) => {
      const camperId = action.payload;
      state.favorites = state.favorites.filter(fav => fav.id !== camperId);
    },
    toggleFavorite: (state, action) => {
      const camperId = action.payload;
      const isFavorite = state.favorites.some(fav => fav.id === camperId);
      if (isFavorite) {
        state.favorites = state.favorites.filter(fav => fav.id !== camperId);
      } else {
        const camper = { id: camperId };
        state.favorites.push(camper);
      }
    },
  },
});

export const { toggleFavorite, addFavorite, removeFavorite } =
  favoritesSlice.actions;

export const selectFavorites = state => state.favorites.favorites;

export default favoritesSlice.reducer;
