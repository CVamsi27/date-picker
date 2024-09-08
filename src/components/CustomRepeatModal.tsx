"use client";
import useStore from "@/store";
import { CalendarAction, CalendarState } from "@/types";
import { DaysOfWeek, RepeatFrequencySpecific } from "@/utils";
import CloseButton from "./ui/CloseButton";
import Input from "./ui/Input";
import Dropdown from "./ui/Dropdown";
import Button from "./ui/Button";

const CustomRepeatModal = () => {
  const {
    isCustomModalOpen,
    setIsCustomModalOpen,
    customRepeatEvery,
    setCustomRepeatEvery,
    setCustomRepeatFrequency,
    customWeekSelected,
    setCustomWeekSelected,
    setIsCustomRepeat,
    customRepeatFrequency,
    setRepeatFrequency,
  } = useStore() as CalendarState & CalendarAction;

  return (
    <div className="relative z-10">
      {isCustomModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
          onClick={() => setIsCustomModalOpen(false)}
        >
          <div
            className="bg-white p-2 rounded-lg shadow-lg w-96 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <CloseButton
              setCloseFunction={() => {
                setIsCustomModalOpen(false);
              }}
            />
            <div className="flex flex-col">
              <span className="font-medium text-center text-lg">Custom</span>
              <div className="flex justify-between my-4 mx-2">
                <Input
                  label="Every"
                  name="every"
                  value={customRepeatEvery}
                  onClickFn={setCustomRepeatEvery}
                />
                <Dropdown
                  label="Repeat"
                  name="repeat"
                  defaultValue={customRepeatFrequency}
                  onChangeFn={(e) => {
                    setCustomRepeatFrequency(e.target.value);
                  }}
                  itemsArray={RepeatFrequencySpecific}
                />
              </div>
              <div className="grid gap-4 grid-cols-7 my-1">
                {DaysOfWeek.map((iDay, i) => (
                  <button
                    key={i}
                    className={`p-2 font-medium text-center rounded-full ${
                      customWeekSelected[i]
                        ? "bg-black text-slate-200 hover:bg-gray-800"
                        : "hover:bg-slate-200"
                    }`}
                    onClick={() => {
                      setCustomWeekSelected({
                        ...customWeekSelected,
                        [i]: !customWeekSelected[i],
                      });
                    }}
                  >
                    {iDay}
                  </button>
                ))}
              </div>
              <div className="flex m-2 gap-2 justify-between">
                <Button
                  name="Clear"
                  onClickFn={() => {
                    setCustomRepeatEvery(1);
                    setCustomRepeatFrequency("Daily");
                    setIsCustomRepeat(false);
                    setIsCustomModalOpen(false);
                    setRepeatFrequency("No Repeat");
                  }}
                />
                <Button
                  name="Close"
                  onClickFn={() => setIsCustomModalOpen(false)}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomRepeatModal;
