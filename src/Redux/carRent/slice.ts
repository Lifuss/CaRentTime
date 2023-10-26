import { FilterCriteria } from "./../../types/types";
import { Car, CarRentState } from "../../types/types";
import { createSlice } from "@reduxjs/toolkit";
import {
  fetchAdvertsThunk,
  fetchFilteredCarsThunk,
  loadMoreThunk,
} from "./operations";
import { FilterFavoritesService } from "../../services/filterFavorites";

const initialState: CarRentState = {
  cars: [],
  loading: false,
  error: null,
  favoriteCars: [],
  filteredCars: [],
  isFiltered: false,
  criteria: { make: "", mileageFrom: "", mileageTo: "", price: "" },
};

export const slice = createSlice({
  name: "carRent",
  initialState,
  reducers: {
    addFavoriteCar: (state, { payload }) => {
      if (state.favoriteCars.find((car) => car.id === payload)) {
        return;
      }
      const carToAdd: Car | undefined = state.cars.find(
        (car) => car.id === payload
      );
      if (carToAdd) {
        state.favoriteCars.push(carToAdd);
      }
    },
    removeFavoriteCar: (state, { payload }) => {
      state.favoriteCars = state.favoriteCars.filter(
        (car) => car.id !== payload
      );
    },
    filterFavorites: (state, { payload }: { payload: FilterCriteria }) => {
      console.log(payload);
      state.filteredCars = FilterFavoritesService(state.favoriteCars, payload);
      state.isFiltered = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdvertsThunk.fulfilled, (state, { payload }) => {
        state.cars = payload as Car[];
        state.loading = false;
        state.isFiltered = false;
      })
      .addCase(loadMoreThunk.fulfilled, (state, { payload }) => {
        state.cars.push(...(payload as Car[]));
      })
      .addCase(fetchFilteredCarsThunk.fulfilled, (state, { payload }) => {
        console.log(payload);
        if (payload && "arrCars" in payload) {
          state.cars = payload.arrCars;
        } else {
          state.cars = [];
        }
        if (payload && "filterCriteria" in payload) {
          state.criteria = payload.filterCriteria;
        }
        state.isFiltered = true;
      });
  },
});

export const { addFavoriteCar, removeFavoriteCar, filterFavorites } =
  slice.actions;

export const carRentSlice = slice.reducer;
