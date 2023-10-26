import { Car, FilterCriteria } from "./../types/types";
import { toast } from "react-toastify";

type Filter = (favoritesCars: Car[], filterCriteria: FilterCriteria) => Car[];

export const FilterFavoritesService: Filter = (
  favoritesCars: Car[],
  filterCriteria: FilterCriteria
) => {
  const { make, mileageFrom, mileageTo, price } = filterCriteria;

  try {
    let arrCars: Car[] = [...favoritesCars];
    if (make) {
      arrCars = arrCars.filter((car: Car) => car.make === make);
      if (price) {
        arrCars = arrCars.filter((car: Car) => {
          return +car.rentalPrice.slice(1) <= +price;
        });
      }
      if (mileageFrom && mileageTo) {
        arrCars = arrCars.filter(
          (car: Car) => +mileageFrom >= car.mileage && +mileageTo <= car.mileage
        );
      } else if (mileageFrom) {
        arrCars = arrCars.filter((car: Car) => +mileageFrom >= car.mileage);
      } else if (mileageTo) {
        arrCars = arrCars.filter((car: Car) => +mileageTo <= car.mileage);
      }
    } else {
      if (price) {
        arrCars = arrCars.filter((car: Car) => {
          return +car.rentalPrice.slice(1) <= +price;
        });
      }
      if (mileageFrom && mileageTo) {
        arrCars = arrCars.filter(
          (car: Car) => +mileageFrom >= car.mileage && +mileageTo <= car.mileage
        );
      } else if (mileageFrom) {
        arrCars = arrCars.filter((car: Car) => +mileageFrom >= car.mileage);
      } else if (mileageTo) {
        arrCars = arrCars.filter((car: Car) => +mileageTo <= car.mileage);
      }
    }
    if (arrCars.length === 0) {
      toast.error("No cars found for your search criteria😓");
      return [];
    }
    toast.success(`${arrCars.length} car(s) found🤩`);
    return arrCars as Car[];
  } catch (error) {
    toast.error("Something went wrong😓");
    return [];
  }
};
