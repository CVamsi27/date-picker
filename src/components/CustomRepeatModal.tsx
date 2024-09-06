"use client";
import useStore from "@/store";
import { CalendarAction, CalendarState } from "@/types";
import { RepeatFrequencySpecific } from "@/utils";
import CloseButton from "./ui/CloseButton";
import Input from "./ui/Input";
import Dropdown from "./ui/Dropdown";

const CustomRepeatModal = () => {
  const {
    isCustomModalOpen,
    setIsCustomModalOpen,
    repeatEvery,
    setRepeatEvery,
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
            <CloseButton setCloseFunction={setIsCustomModalOpen} />
            <div className="flex flex-col">
              <span className="font-medium text-center">Custom</span>
              <div className="flex justify-between my-4 mx-2">
                <Input
                  label="Every"
                  name="every"
                  value={repeatEvery}
                  onClickFn={setRepeatEvery}
                />
                <Dropdown
                  label="Repeat"
                  name="repeat"
                  defaultValue="No Repeat"
                  onChangeFn={(e) => {
                    if (e.target.value === "Custom") {
                      setIsCustomModalOpen(true);
                    }
                  }}
                  itemsArray={RepeatFrequencySpecific}
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
