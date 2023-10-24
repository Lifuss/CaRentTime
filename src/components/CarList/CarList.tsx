import { Car } from "../../types/types";
import sprite from "../../assets/sprite.svg";
import { useSelector } from "react-redux";
import { selectFavoritesCars } from "../../Redux/carRent/selectors";
import imgNotFound from "../../assets/placeholder.jpg";

type Props = {
  carArray: Car[];
  handleAddToFavorites: (id: number, isFavorite: boolean) => void;
};
const CarList = ({ carArray, handleAddToFavorites }: Props) => {
  const favoriteCars = useSelector(selectFavoritesCars);
  return (
    <ul className="flex flex-wrap justify-center gap-y-[50px] gap-x-[29px]">
      {carArray.map(
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
          let isFavorite = false;
          if (favoriteCars.find((car) => car.id === id)) {
            isFavorite = true;
          }

          return (
            <li
              key={id}
              className=" flex flex-col justify-between   min-h-[400px] relative basis-1/1 md:basis-1/3 lg:basis-1/5"
            >
              <img
                className=" rounded-xl object-cover mb-[14px] min-h-[268px]  hover:scale-110 hover:z-10 transition "
                src={`${img}`}
                alt={model}
                onError={(e) => {
                  e.currentTarget.src = imgNotFound;
                }}
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
                onClick={() => handleAddToFavorites(id, isFavorite)}
                className="z-20 absolute right-2 top-2 hover:scale-150 transition"
              >
                <svg className="w-5 h-5">
                  <use
                    className={` ${
                      isFavorite ? "fill-blue-600" : "fill-none"
                    } stroke-blue-500 hover:fill-blue`}
                    href={`${sprite}#heart`}
                  ></use>
                </svg>
              </button>
            </li>
          );
        }
      )}
    </ul>
  );
};

export default CarList;
