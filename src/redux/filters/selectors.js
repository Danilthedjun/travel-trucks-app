import { createSelector } from "reselect";

// Определяем селектор для получения списка items из состояния Redux
export const selectItems = state => state.campers.campersList || [];

// Селекторы для фильтров
export const getFiltersState = state => state.filters || [];

export const getLocationFilter = state => state.filters.location;
export const getFormFilter = state => state.filters.form;
export const getFeaturesFilter = state => state.filters.features;

// Селектор для фильтрации элементов на основе выбранных фильтров
export const getFilteredItems = createSelector(
  [getFiltersState, getLocationFilter, getFormFilter, getFeaturesFilter],
  (items, location, form, features) => {
    if (!Array.isArray(items)) {
      return []; // Возвращаем пустой массив, если items не является массивом
    }

    return items.filter(item => {
      const locationMatch = location
        ? item.location.toLowerCase().includes(location.toLowerCase())
        : true;
      const formMatch = form ? item.form === form : true;
      const featuresMatch = features.length
        ? features.every(feature => item[feature] === true)
        : true;

      return locationMatch && formMatch && featuresMatch;
    });
  }
);
