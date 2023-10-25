import Select from "react-select";
import { useForm, Controller, SubmitHandler } from "react-hook-form";

type Inputs = {
  make: string;
  price: string;
  mileageFrom: number;
  mileageTo: number;
};

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
const price = [
  { value: "30", label: "30" },
  { value: "40", label: "40" },
  { value: "50", label: "50" },
  { value: "60", label: "60" },
  { value: "70", label: "70" },
  { value: "80", label: "80" },
];

const FilterCar = () => {
  const { register, handleSubmit, control } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div className="flex justify-center my-[50px]">
      <form
        className="flex justify-center align-baseline"
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

        <button>search</button>
      </form>
    </div>
  );
};

export default FilterCar;
