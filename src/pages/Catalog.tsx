import { FC, useEffect, useState } from "react";
import { fetchAdvertsThunk, loadMoreThunk } from "../Redux/carRent/operations";
import { useAppDispatch } from "../hooks/hooks";
import { selectCars } from "../Redux/carRent/selectors";
import { useSelector } from "react-redux";
import BtnLoadMore from "../components/BtnLoadMore/BtnLoadMore";
import { addFavoriteCar, removeFavoriteCar } from "../Redux/carRent/slice";
import CarList from "../components/CarList/CarList";

const Catalog: FC = () => {
  const [page, setPage] = useState(1);
  const dispatch = useAppDispatch();
  const cars = useSelector(selectCars);

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
    dispatch(loadMoreThunk(nextPage));
  };

  return (
    <div className="container mx-auto">
      <CarList carArray={cars} handleAddToFavorites={handleAddToFavorites} />
      {cars.length !== 32 && <BtnLoadMore handleLoadMore={handleLoadMore} />}
    </div>
  );
};

export default Catalog;
