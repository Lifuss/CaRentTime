import { FC, useEffect } from "react";
import { fetchAdvertsThunk } from "../Redux/carRent/operations";
import { useAppDispatch } from "../hooks/hooks";
import { selectCars } from "../Redux/carRent/selectors";
import { useSelector } from "react-redux";
import sprite from "../assets/sprite.svg";
import BtnLoadMore from "../components/BtnLoadMore/BtnLoadMore";
import { addFavoriteCar } from "../Redux/carRent/slice";

const Catalog: FC = () => {
  const dispatch = useAppDispatch();
  const cars = useSelector(selectCars);
  useEffect(() => {
    dispatch(fetchAdvertsThunk(1));
  }, [dispatch]);
  const handleAddToFavorites = (
    // e: MouseEvent<HTMLButtonElement>,
    id: number
  ): void => {
    console.log("id", id);

    dispatch(addFavoriteCar(id));
  };

  return (
    <div className="container mx-auto">
      <ul className="flex flex-wrap justify-center gap-y-[50px] gap-x-[29px]">
        {cars.map(
          ({
            id,
            img,
            year,
            make,
            model,
            rentalPrice,
            address,
            rentalCompany,
            type,
            functionalities,
          }) => {
            const splitedAddress = address.split(",");

            return (
              <li
                key={id}
                className=" flex flex-col justify-between border-2 rounded-xl border-red-200 min-h-[400px] relative basis-1/1 md:basis-1/3 lg:basis-1/5"
              >
                <img
                  className=" rounded-xl object-cover mb-[14px] min-h-[268px]  hover:scale-125 hover:z-10 transition "
                  src={`${img}`}
                  alt={model}
                />
                <div className="mb-2 flex justify-between">
                  <h4>{`${make} ${model} ${year}`}</h4>
                  <p>{rentalPrice}</p>
                </div>
                <div className="mb-7">{`${splitedAddress[1]} | ${splitedAddress[2]} | ${rentalCompany} | Premium | ${type} | ${model} | ${id} | ${functionalities[0]}`}</div>
                <button className=" transition-colors rounded-xl bg-mainBtn text-white hover:bg-active w-full h-11">
                  learn more
                </button>
                <button
                  onClick={() => handleAddToFavorites(id)}
                  className="z-20 absolute right-2 top-2 hover:scale-125 transition"
                >
                  <svg className="w-5 h-5">
                    <use
                      className="fill-none stroke-blue-500 hover:fill-blue"
                      href={`${sprite}#heart`}
                    ></use>
                  </svg>
                </button>
              </li>
            );
          }
        )}
      </ul>
      <BtnLoadMore />
    </div>
  );
};

export default Catalog;
