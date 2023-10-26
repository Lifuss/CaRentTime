import { RootState } from "../Redux/store";

export type Car = {
  id: number;
  year: number;
  make: string;
  model: string;
  type: string;
  img: string;
  description: string;
  fuelConsumption: string;
  engineSize: string;
  accessories: string[];
  functionalities: string[];
  rentalPrice: string;
  rentalCompany: string;
  address: string;
  rentalConditions: string;
  mileage: number;
};

export interface CarRentState {
  cars: Car[];
  loading: boolean;
  error: null | string;
  favoriteCars: Car[];
  filteredCars: Car[];
  isFiltered: boolean;
  criteria: FilterCriteria;
}
export type FilterData = {
  make: { value: string; label: string };
  mileageFrom: string;
  mileageTo: string;
  price: { value: string; label: string };
};
export type FilterCriteria = {
  make: string;
  mileageFrom: string;
  mileageTo: string;
  price: string;
  page?: number;
};

export type Filter = (
  state: RootState,
  filterCriteria: FilterCriteria
) => Car[];
