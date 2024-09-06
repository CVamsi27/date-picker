"use client";
import { RepeatFrequency } from "@/utils";
import CustomRepeatModal from "./CustomRepeatModal";
import useStore from "@/store";
import { CalendarAction, CalendarState } from "@/types";

const Repeat = () => {
  const { setIsCustomModalOpen } = useStore() as CalendarState & CalendarAction;
  return (
    <div className="flex gap-2 mx-12">
      <label htmlFor="repeat" className="font-medium">
        Repeat :
      </label>
      <select
        name="repeat"
        id="repeat"
        defaultValue="No Repeat"
        className="bg-slate-200 px-2 rounded-md"
        onChange={(e) => {
          if (e.target.value === "Custom") {
            setIsCustomModalOpen(true);
          }
        }}
      >
        {RepeatFrequency.map((iRepeat) => (
          <option key={iRepeat} value={iRepeat}>
            {iRepeat}
          </option>
        ))}
      </select>
      <CustomRepeatModal />
    </div>
  );
};

export default Repeat;
