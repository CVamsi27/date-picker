"use client";
import { RepeatFrequency } from "@/utils";
import useStore from "@/store";
import { CalendarAction, CalendarState } from "@/types";
import Dropdown from "./ui/Dropdown";
import Button from "./ui/Button";
import CloseButton from "./ui/CloseButton";

const Repeat = () => {
  const {
    setIsCustomModalOpen,
    setIsCustomRepeat,
    isCustomRepeat,
    repeatFrequency,
    setRepeatFrequency,
  } = useStore() as CalendarState & CalendarAction;
  return (
    <div className="flex justify-between mt-3">
      <Dropdown
        label="Repeat"
        name="repeat"
        defaultValue={repeatFrequency}
        onChangeFn={(e) => {
          if (e.target.value === "Custom") {
            setIsCustomModalOpen(true);
            setIsCustomRepeat(true);
          }
          setRepeatFrequency(e.target.value);
        }}
        itemsArray={RepeatFrequency}
      />
      {isCustomRepeat ? (
        <div className="flex gap-1">
          <Button
            name="View Custom"
            onClickFn={(e) => setIsCustomModalOpen(true)}
          />
          <CloseButton
            setCloseFunction={() => {
              setIsCustomRepeat(false);
              setRepeatFrequency("No Repeat");
            }}
          />
        </div>
      ) : (
        <CloseButton
            setCloseFunction={() => {
              setIsCustomRepeat(false);
              setRepeatFrequency("No Repeat");
            }}
          />
      )}
    </div>
  );
};

export default Repeat;
