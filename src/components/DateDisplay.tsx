"use client";
import useStore from "@/store";
import { CalendarAction, CalendarState } from "@/types";
import { DaysOfWeek } from "@/utils";

const DateDisplay = () => {
  const { year, month, date, setDate } = useStore() as CalendarState &
    CalendarAction;
  let day = new Date(year, month, 1).getDay() + 1;
  return (
    <div className="grid gap-4 grid-cols-7 m-10 w-96">
      {DaysOfWeek.map((iDay, i) => (
        <span key={i} className={`p-2 font-medium text-center`}>
          {iDay}
        </span>
      ))}
      {Array.from(
        { length: new Date(year, month, 0).getDate() - 1 },
        (_, i) => i + 1
      ).map((iDate) => (
        <button
          key={iDate}
          className={`p-2 rounded-full font-medium text-center ${
            iDate === date ? "bg-black text-slate-200" : "bg-slate-200"
          }`}
          style={iDate == 1 ? { gridColumnStart: day } : undefined}
          onClick={() => setDate(iDate)}
        >
          {iDate}
        </button>
      ))}
    </div>
  );
};
export default DateDisplay;
