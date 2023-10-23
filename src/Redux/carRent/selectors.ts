import { RootState } from "../store";

export const selectCars = (state: RootState) => state.carRent.cars;
export const selectFavoritesCars = (state: RootState) =>
  state.carRent.favoriteCars;
