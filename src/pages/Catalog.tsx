import { FC, useEffect, useState } from "react";
import {
  fetchAdvertsThunk,
  fetchFilteredCarsThunk,
  loadMoreThunk,
} from "../Redux/carRent/operations";
import { useAppDispatch } from "../hooks/hooks";
import {
  selectCars,
  selectCriteria,
  selectIsFiltered,
} from "../Redux/carRent/selectors";
import { useSelector } from "react-redux";
import BtnLoadMore from "../components/BtnLoadMore/BtnLoadMore";
import { addFavoriteCar, removeFavoriteCar } from "../Redux/carRent/slice";
import CarList from "../components/CarList/CarList";
import FilterCar from "../components/FilterCar/FilterCar";

const Catalog: FC = () => {
  const [page, setPage] = useState(1);
  const dispatch = useAppDispatch();
  const cars = useSelector(selectCars);
  const isFiltered = useSelector(selectIsFiltered);
  const criteria = useSelector(selectCriteria);

  useEffect(() => {
    dispatch(fetchAdvertsThunk(1));
  }, [dispatch]);

  const handleAddToFavorites = (id: number, isFavorite: boolean): void => {
    if (!isFavorite) {
      dispatch(addFavoriteCar(id));
    } else {
      dispatch(removeFavoriteCar(id));
    }
  };
  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    if (!isFiltered) {
      dispatch(loadMoreThunk(nextPage));
    }
    const DataLoad = { ...criteria, page: nextPage };
    dispatch(fetchFilteredCarsThunk(DataLoad));
  };

  return (
    <section className="container mx-auto">
      <FilterCar isFavoriteList={false} page={page} />

      <CarList carArray={cars} handleAddToFavorites={handleAddToFavorites} />
      {cars.length % 12 === 0 && cars.length !== 0 && cars.length !== 35 && (
        <BtnLoadMore handleLoadMore={handleLoadMore} />
      )}
    </section>
  );
};

export default Catalog;
