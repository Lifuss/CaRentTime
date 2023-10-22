import { configureStore } from "@reduxjs/toolkit";
import { carRentSlice } from "./carRent/slice";

export const store = configureStore({
  reducer: {
    carRent: carRentSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
