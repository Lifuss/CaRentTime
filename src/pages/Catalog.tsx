import { FC, useEffect, useState } from "react";
import { fetchAdvertsThunk, loadMoreThunk } from "../Redux/carRent/operations";
import { useAppDispatch } from "../hooks/hooks";
import { selectCars } from "../Redux/carRent/selectors";
import { useSelector } from "react-redux";
import sprite from "../assets/sprite.svg";

const Catalog: FC = () => {
  const [page, setPage] = useState(1);
  const dispatch = useAppDispatch();
  const cars = useSelector(selectCars);
  useEffect(() => {
    dispatch(fetchAdvertsThunk(1));
  }, [dispatch]);
  return (
    <div className="container mx-auto">
      {/* <ul className="grid justify-center sm:grid-col-1 md:grid-cols-2 gap-y-[50px] gap-x-[29px] lg:grid-cols-4"> */}
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
                className=" flex flex-col justify-between border-2 rounded-xl border-red-200 w-[274px]  min-h-[400px] relative"
              >
                <img
                  className="mb-[14px] min-h-[268px]"
                  src={`${img}`}
                  alt={model}
                />
                <div className="mb-2 flex justify-between">
                  <h4>{`${make} ${model} ${year}`}</h4>
                  <p>{rentalPrice}</p>
                </div>
                <div className="mb-7">{`${splitedAddress[1]} | ${splitedAddress[2]} | ${rentalCompany} | Premium | ${type} | ${model} | ${id} | ${functionalities[0]}`}</div>
                <button className=" rounded-xl bg-mainBtn text-white hover:bg-active w-full h-11">
                  learn more
                </button>
                <button className="absolute right-2 top-2">
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
      <div className="flex justify-center">
        <button
          onClick={() => {
            setPage((prev) => prev + 1);
            dispatch(loadMoreThunk(page));
          }}
          className=" w-20 h-10"
        >
          Load more
        </button>
      </div>
    </div>
  );
};

export default Catalog;
