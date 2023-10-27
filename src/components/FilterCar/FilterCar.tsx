import Select from "react-select";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { useAppDispatch } from "../../hooks/hooks";
import { fetchFilteredCarsThunk } from "../../Redux/carRent/operations";
import { FilterData } from "../../types/types";
import { toast } from "react-toastify";
import { filterFavorites } from "../../Redux/carRent/slice";

const price: { value: string; label: string }[] = [];
for (let index = 1; index <= 15; index++) {
  price.push({ value: `${index * 10}`, label: `${index * 10}` });
}

const make = [
  { value: "Buick", label: "Buick" },
  { value: "Volvo", label: "Volvo" },
  { value: "HUMMER", label: "HUMMER" },
  { value: "Subaru", label: "Subaru" },
  { value: "Mitsubishi", label: "Mitsubishi" },
  { value: "Nissan", label: "Nissan" },
  { value: "Lincoln", label: "Lincoln" },
  { value: "GMC", label: "GMC" },
  { value: "Hyundai", label: "Hyundai" },
  { value: "MINI", label: "MINI" },
  { value: "Mercedes-Benz", label: "Mercedes-Benz" },
  { value: "Aston Martin", label: "Aston Martin" },
  { value: "Pontiac", label: "Pontiac" },
  { value: "Lamborghini", label: "Lamborghini" },
  { value: "Audi", label: "Audi" },
  { value: "BMW", label: "BMW" },
  { value: "Mercedes", label: "Mercedes" },
  { value: "Chrysler", label: "Chrysler" },
  { value: "Kia", label: "Kia" },
  { value: "Land", label: "Land" },
];

type Props = {
  isFavoriteList: boolean;
  page?: number;
};

const FilterCar = ({ isFavoriteList }: Props) => {
  const { register, handleSubmit, control } = useForm<FilterData>();
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<FilterData> = ({
    price,
    make,
    mileageTo,
    mileageFrom,
  }) => {
    if (price || make || mileageFrom || mileageTo) {
      if (isFavoriteList) {
        dispatch(
          filterFavorites({
            price: price?.value,
            make: make?.value,
            mileageFrom,
            mileageTo,
          })
        );
      } else {
        dispatch(
          fetchFilteredCarsThunk({
            price: price?.value,
            make: make?.value,
            mileageFrom,
            mileageTo,
          })
        );
      }
    } else {
      toast.info("Oops, for filtering, you need to fill in at least one field");
    }
  };

  return (
    <div className=" my-[50px]">
      <form
        className="flex justify-center gap-[18px] items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label>
          <span className="text-sm text-subColor2 font-medium mb-2">
            Car brand
          </span>
          <Controller
            name="make"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                className="w-[224px] bg-inputColor rounded-[14px]"
                options={make}
                isClearable={true}
                classNamePrefix="select"
                isSearchable={true}
                placeholder="Brand"
              />
            )}
          />
        </label>
        <label>
          <span className="text-sm text-subColor2 font-medium mb-2">
            Price / 1 hour
          </span>
          <Controller
            name="price"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                className="w-[224px] bg-inputColor rounded-[14px]"
                options={price}
                isClearable={true}
                classNamePrefix="select"
                isSearchable={true}
                placeholder="To $"
              />
            )}
          />
        </label>
        <div className="flex flex-wrap w-[320px] h-[74px]">
          <label>
            <span className="text-sm text-subColor2 font-medium mr-[100px] ">
              Сar mileage / km
            </span>
            <input
              className="w-[160px] h-12 bg-inputColor border-r-[1px] border-border rounded-l-[14px] px-[20px]"
              type="number"
              {...register("mileageFrom")}
              placeholder="From"
            />
            <input
              className="w-[160px] h-12 bg-inputColor rounded-r-[14px] px-[20px]"
              type="number"
              placeholder="To"
              {...register("mileageTo")}
            />
          </label>
        </div>

        <button className="rounded-xl h-12 w-[136px] bg-mainBtn hover:bg-active text-white mt-[22px]">
          search
        </button>
      </form>
    </div>
  );
};

export default FilterCar;
