import { useSelector } from "react-redux";
import { selectFavoritesCars } from "../Redux/carRent/selectors";
import { Link } from "react-router-dom";
import BtnLoadMore from "../components/BtnLoadMore/BtnLoadMore";
import { useEffect, useState } from "react";
import { Car } from "../types/types";
import CarList from "../components/CarList/CarList";
import { useAppDispatch } from "../hooks/hooks";
import { removeFavoriteCar } from "../Redux/carRent/slice";

const Favorites = () => {
  const [page, setPage] = useState(1);
  const favoriteCars = useSelector(selectFavoritesCars);
  const [favoriteCarsPerPage, setFavoriteCarsPerPage] = useState<Car[]>([]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const carsPerPage = favoriteCars.slice(0, page * 12);
    setFavoriteCarsPerPage(carsPerPage);
  }, [page, favoriteCars]);

  const handleAddToFavorites = (id: number): void => {
    dispatch(removeFavoriteCar(id));
  };

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
  };

  return (
    <>
      {favoriteCarsPerPage.length ? (
        <div className="container mx-auto">
          <CarList
            carArray={favoriteCarsPerPage}
            handleAddToFavorites={handleAddToFavorites}
          />
          {favoriteCars.length !== favoriteCarsPerPage.length ? (
            <BtnLoadMore handleLoadMore={handleLoadMore} />
          ) : null}
        </div>
      ) : (
        <div className="container mx-auto">
          <h2>Favorites cars not added yet</h2>{" "}
          <p>
            go to <Link to="/catalog">Catalog</Link>and chose favorites cars{" "}
          </p>
        </div>
      )}
    </>
  );
};

export default Favorites;
