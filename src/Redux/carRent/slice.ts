import { Car, CarRentState } from "../../types/types";
import { createSlice } from "@reduxjs/toolkit";
import { fetchAdvertsThunk, loadMoreThunk } from "./operations";

const initialState: CarRentState = {
  cars: [],
  loading: false,
  error: null,
  favoriteCars: [],
  page: 1,
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
    loadMore: (state) => {
      state.page += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdvertsThunk.fulfilled, (state, { payload }) => {
        state.cars = payload as Car[];
        state.loading = false;
      })
      .addCase(loadMoreThunk.fulfilled, (state, { payload }) => {
        state.cars.push(...(payload as Car[]));
      });
  },
});

export const { addFavoriteCar, removeFavoriteCar } = slice.actions;

export const carRentSlice = slice.reducer;
