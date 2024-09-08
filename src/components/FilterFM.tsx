"use client";
import useStore from "@/store";
import { CalendarAction, CalendarState } from "@/types";
import { MonthNames } from "@/utils";
import Input from "./ui/Input";
import Dropdown from "./ui/Dropdown";

const FilterFM = () => {
  const { year, setYear, month, setMonth } =
    useStore() as CalendarState & CalendarAction;
  return (
    <div className="flex justify-between mt-4">
      <Input label={"Year"} name={"year"} value={year} onClickFn={setYear} />
      <Dropdown
        label="Month"
        name="month"
        defaultValue={MonthNames[month]}
        onChangeFn={(e) => {
          setMonth(MonthNames.indexOf(e.target.value));
        }}
        itemsArray={MonthNames}
      />
    </div>
  );
};
export default FilterFM;
