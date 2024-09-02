import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import campersReducer from "./campers/slice"; // Импорт слайса кемперов
import filtersReducer from "./filters/slice"; // Импорт слайса фильтров
import favoritesReducer from "./favorites/slice"; // Импорт слайса избранного

// Конфигурация persist для фильтров
const filtersPersistConfig = {
  key: "filters",
  storage,
};

// Применяем persistReducer к фильтрам
const persistedFiltersReducer = persistReducer(
  filtersPersistConfig,
  filtersReducer
);

// Конфигурация persist для избранного
const favoritesPersistConfig = {
  key: "favorites",
  storage,
};

// Применяем persistReducer к избранному
const persistedFavoritesReducer = persistReducer(
  favoritesPersistConfig,
  favoritesReducer
);

export const store = configureStore({
  reducer: {
    campers: campersReducer, // Редьюсер кемперов
    filters: persistedFiltersReducer, // Persisted редьюсер для фильтров
    favorites: persistedFavoritesReducer, // Persisted редьюсер для избранного
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
