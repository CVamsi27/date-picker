import DateDisplay from "./DateDisplay";
import FilterFM from "./FilterFM";
import Repeat from "./Repeat";

const Calendar = () => {
  return (
    <div className="flex flex-col">
      <FilterFM />
      <DateDisplay />
      <Repeat />
    </div>
  );
};
export default Calendar;
