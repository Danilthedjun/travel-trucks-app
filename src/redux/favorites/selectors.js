import { createSelector } from "reselect";

export const getFavoriteCampers = state => state.favorites.favorites;

export const isFavorite = (state, camperId) =>
  state.favorites.favorites.some(fav => fav.id === camperId);
