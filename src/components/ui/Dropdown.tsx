import { DropdownProps } from "@/types";

const Dropdown = ({label, name, defaultValue, onChangeFn, itemsArray}: DropdownProps<string>) => {
  return (
    <div className="flex gap-2">
      <label htmlFor={name} className="font-medium">
        {label} :
      </label>
      <select
        name={name}
        id={name}
        defaultValue={defaultValue}
        className="bg-slate-200 px-2 rounded-md"
        onChange={onChangeFn}
      >
        {itemsArray.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};
export default Dropdown;
