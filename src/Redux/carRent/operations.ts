import { Car, FilterCriteria } from "./../../types/types";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const advertsInstance = axios.create({
  baseURL: "https://6534fb7be1b6f4c5904719b6.mockapi.io/",
});

export const fetchAdvertsThunk = createAsyncThunk(
  "fetchAdverts",
  async (page: number = 1, thunkApi) => {
    try {
      const { data } = await advertsInstance.get(
        `/adverts?page=${page}&limit=12`
      );
      return data as Car[];
    } catch (error) {
      thunkApi.rejectWithValue(error);
    }
  }
);

export const loadMoreThunk = createAsyncThunk(
  "loadMoreThunk",
  async (page: number = 1, thunkApi) => {
    try {
      const { data } = await advertsInstance.get(
        `/adverts?page=${page}&limit=12`
      );
      return data as Car[];
    } catch (error) {
      thunkApi.rejectWithValue(error);
    }
  }
);

export const fetchFilteredCarsThunk = createAsyncThunk(
  "fetchFilteredCarsThunk",
  async (filterCriteria: FilterCriteria, thunkApi) => {
    const { make, mileageFrom, mileageTo, price, page = 1 } = filterCriteria;
    console.log(filterCriteria);

    try {
      let arrCars: Car[] = [];
      // Якщо у нас є make то я витягую з бази початковий відфільтрований масив по make а потім фільтри по іншим параметрам
      if (make) {
        const { data } = await advertsInstance.get(
          `/adverts?filter=${make}&page=${page}&limit=12`
        );
        arrCars = data as Car[];
        if (price) {
          arrCars = arrCars.filter((car: Car) => {
            return +car.rentalPrice.slice(1) <= +price;
          });
        }
        if (mileageFrom && mileageTo) {
          arrCars = arrCars.filter(
            (car: Car) =>
              +mileageFrom <= car.mileage && +mileageTo >= car.mileage
          );
        } else if (mileageFrom) {
          arrCars = arrCars.filter((car: Car) => +mileageFrom <= car.mileage);
        } else if (mileageTo) {
          arrCars = arrCars.filter((car: Car) => +mileageTo >= car.mileage);
        }
      } else {
        // В разі якщо нема make то я витягую весь масив з бази і вже потім фільтрую
        const { data } = await advertsInstance.get(`/adverts`);
        arrCars = data as Car[];
        if (price) {
          arrCars = arrCars.filter((car: Car) => {
            return +car.rentalPrice.slice(1) <= +price;
          });
        }
        if (mileageFrom && mileageTo) {
          arrCars = arrCars.filter(
            (car: Car) =>
              +mileageFrom <= car.mileage && +mileageTo >= car.mileage
          );
        } else if (mileageFrom) {
          arrCars = arrCars.filter((car: Car) => +mileageFrom <= car.mileage);
        } else if (mileageTo) {
          arrCars = arrCars.filter((car: Car) => +mileageTo >= car.mileage);
        }
        if (page === 1) {
          toast.success(`${arrCars.length} car(s) found🤩`);
        }
        if (page && arrCars.length > 12) {
          arrCars = arrCars.slice(0, page * 12);
        }
      }
      if (arrCars.length === 0) {
        toast.error("No cars found for your search criteria😓");
        return [];
      }
      if (make && page === 1) {
        toast.success(`${arrCars.length} car(s) found🤩`);
      }
      const newData = { arrCars, filterCriteria };

      return newData;
    } catch (error) {
      thunkApi.rejectWithValue(error);
    }
  }
);
