import { InputProps } from "@/types";

const Input = ({ label, name, value, onClickFn }: InputProps<number>) => {
  return (
    <div className="flex gap-2">
      <label htmlFor={name} className="font-medium">
        {label} :
      </label>
      <input
        type="number"
        id={name}
        name={name}
        value={value}
        className="w-20 bg-slate-200 px-2 rounded-md"
        onChange={(e) => {
          onClickFn(parseInt(e.target.value));
        }}
      />
    </div>
  );
};
export default Input;
