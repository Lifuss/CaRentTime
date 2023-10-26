import { RootState } from "../store";

export const selectCars = (state: RootState) => state.carRent.cars;
export const selectFavoritesCars = (state: RootState) =>
  state.carRent.favoriteCars;
export const selectFavFilteredCars = (state: RootState) =>
  state.carRent.filteredCars;

export const selectIsFiltered = (state: RootState) => state.carRent.isFiltered;

export const selectCriteria = (state: RootState) => state.carRent.criteria;
