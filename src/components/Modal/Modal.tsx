import { useSelector } from "react-redux";
import { Car } from "../../types/types";
import { selectCars } from "../../Redux/carRent/selectors";
import imgNotFound from "../../assets/placeholder.jpg";

type Props = {
  id: number;
};

const Modal = ({ id }: Props) => {
  const cars: Car[] = useSelector(selectCars);
  const carToModal = cars.find((car) => car.id === id);
  const {
    img,
    year,
    make,
    model,
    address,
    type,
    functionalities,
    fuelConsumption,
    engineSize,
    description,
    accessories,
    rentalConditions,
    mileage,
    rentalPrice,
  } = carToModal!;
  const splitedAddress = address.split(",");
  const splitedRentalConditions = rentalConditions.split("\n");
  return (
    <>
      <dialog id={`${id}`} className="modal">
        <div className="modal-box bg-white p-10">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <img
            className=" rounded-xl object-cover mb-[14px] min-h-[268px] "
            src={`${img}`}
            alt={model}
            onError={(e) => {
              e.currentTarget.src = imgNotFound;
            }}
          />
          <div className="mb-6">
            <h4 className="flex gap-1 font-mediu mb-2 text-lg">
              {`${make}`}
              <span className="text-mainBtn">
                {`${model}`}
                <span className="text-textColor">,</span>
              </span>
              {`${year}`}
            </h4>
            <p className="text-subColor text-xs leading-[18px] mb-[14px]">{`${splitedAddress[1]} | ${splitedAddress[2]} | Id: ${id} | Year: ${year} | Type: ${type} | Fuel Consumption: ${fuelConsumption} | Engine size: ${engineSize}`}</p>
            <p className="text-sm">{description}</p>
          </div>
          <div className="mb-6">
            <h4 className="mb-2 text-sm">Accessories and functionalities:</h4>
            <p className="text-subColor text-xs leading-[18px]">{`${functionalities[0]} | ${functionalities[1]} | ${functionalities[2]}`}</p>
            <p className="text-subColor text-xs leading-[18px]">{`${accessories[0]} | ${accessories[1]} | ${accessories[2]}`}</p>
          </div>
          <div className="mb-6">
            <h4 className="mb-2 text-sm">Rental Conditions:</h4>

            <div className="flex flex-wrap gap-2">
              {splitedRentalConditions.map((item) => {
                const numberMatch = item.match(/\d+/g);
                if (numberMatch) {
                  const age = numberMatch[0];
                  const parts = item.split(age);
                  return (
                    <p className="rounded-lg bg-[#F9F9F9] px-[14px] py-[7px] w-fit text-[#363535]">
                      {parts[0]}
                      <span className="text-mainBtn">{age}</span>
                      {parts[1]}
                    </p>
                  );
                } else {
                  return (
                    <p className="rounded-lg bg-[#F9F9F9] px-[14px] py-[7px] w-fit text-[#363535]">
                      {item}
                    </p>
                  );
                }
              })}
              <p className="rounded-lg bg-[#F9F9F9] px-[14px] py-[7px] w-fit text-[#363535]">
                Mileage:{" "}
                <span className="text-mainBtn">
                  {mileage.toLocaleString("en-US")}
                </span>
              </p>
              <p className="rounded-lg bg-[#F9F9F9] px-[14px] py-[7px] w-fit text-[#363535]">
                Rental price:
                <span className="text-mainBtn ml-1">
                  {rentalPrice.match(/\d+/g)[0]}$
                </span>
              </p>
            </div>
          </div>
          <a
            href="tel:+3800123123"
            className="btn bg-mainBtn hover:bg-active text-white w-full border-0"
          >
            Rental car
          </a>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default Modal;
