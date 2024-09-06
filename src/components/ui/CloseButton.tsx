import { CloseButtonProps } from "@/types";
import { FC } from "react";

const CloseButton : FC<CloseButtonProps> = ({ setCloseFunction }) => {
  return (
    <button
      className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
      onClick={() => setCloseFunction(false)}
    >
      &times;
    </button>
  );
};
export default CloseButton;
