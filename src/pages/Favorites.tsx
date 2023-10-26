import { useSelector } from "react-redux";
import {
  selectFavFilteredCars,
  selectFavoritesCars,
} from "../Redux/carRent/selectors";
import { Link } from "react-router-dom";
import BtnLoadMore from "../components/BtnLoadMore/BtnLoadMore";
import { useEffect, useState } from "react";
import { Car } from "../types/types";
import CarList from "../components/CarList/CarList";
import { useAppDispatch } from "../hooks/hooks";
import { removeFavoriteCar } from "../Redux/carRent/slice";
import FilterCar from "../components/FilterCar/FilterCar";

const Favorites = () => {
  const [page, setPage] = useState(1);
  const favoriteCars = useSelector(selectFavoritesCars);
  let filteredCars = useSelector(selectFavFilteredCars);
  const [favoriteCarsPerPage, setFavoriteCarsPerPage] = useState<Car[]>([]);
  const dispatch = useAppDispatch();

  if (filteredCars.length === 0) {
    filteredCars = favoriteCars;
  }

  useEffect(() => {
    const carsPerPage = filteredCars.slice(0, page * 12);
    setFavoriteCarsPerPage(carsPerPage);
  }, [page, filteredCars]);

  const handleAddToFavorites = (id: number): void => {
    dispatch(removeFavoriteCar(id));
  };

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
  };

  return (
    <section>
      {favoriteCarsPerPage.length ? (
        <div className="container mx-auto">
          <FilterCar isFavoriteList={true} page={page} />

          <CarList
            carArray={favoriteCarsPerPage}
            handleAddToFavorites={handleAddToFavorites}
          />
          {favoriteCars.length !== favoriteCarsPerPage.length ? (
            <BtnLoadMore handleLoadMore={handleLoadMore} />
          ) : null}
        </div>
      ) : (
        <div className="container mx-auto text-center h-[70vh] mt-[16%]">
          <h2 className="text-2xl">Favorites cars not added yet</h2>{" "}
          <p className="text-2xl">
            go to{" "}
            <Link className="mr-1 text-mainBtn underline" to="/catalog">
              Catalog
            </Link>
            and chose favorites cars{" "}
          </p>
        </div>
      )}
    </section>
  );
};

export default Favorites;
