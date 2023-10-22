import { Car } from "./../../types/types";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const advertsInstance = axios.create({
  baseURL: "https://6534fb7be1b6f4c5904719b6.mockapi.io/",
});

export const fetchAdvertsThunk = createAsyncThunk(
  "fetchAdverts",
  async (page: number = 1, thunkApi) => {
    try {
      const { data } = await advertsInstance.get(
        `/adverts?page=${page}&limit=8`
      );
      return data as Car[];
    } catch (error) {
      thunkApi.rejectWithValue(error);
    }
  }
);

export const loadMoreThunk = createAsyncThunk(
  "loadMoreThunk",
  async (page: number, thunkApi) => {
    try {
      const { data } = await advertsInstance.get(
        `/adverts?page=${page}&limit=8`
      );
      return data as Car[];
    } catch (error) {
      thunkApi.rejectWithValue(error);
    }
  }
);
