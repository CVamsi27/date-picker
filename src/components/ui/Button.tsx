import { ButtonProps } from "@/types";

const Button = ({ name, onClickFn }: ButtonProps) => {
  return (
    <button
      className="bg-slate-200 hover:bg-slate-400 px-3 py-1 rounded-md font-medium"
      onClick={onClickFn}
    >
      {name}
    </button>
  );
};
export default Button;
