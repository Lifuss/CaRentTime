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
  rentalPrice: number;
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
  // page: number;
}
