import { Car, CarRentState } from "../../types/types";
import { createSlice } from "@reduxjs/toolkit";
import { fetchAdvertsThunk, loadMoreThunk } from "./operations";

const initialState: CarRentState = {
  cars: [],
  loading: false,
  error: null,
};

export const slice = createSlice({
  name: "carRent",
  initialState,
  reducers: {},
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

export const carRentSlice = slice.reducer;
