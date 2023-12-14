import { ErrorField } from "..";
import { SelectInputProps } from "./types";

function SelectInput({
  error,
  label,
  className,
  containerClass,
  name,
  options,
  defaultValue,
  ...rest
}: SelectInputProps) {
  return (
    <label className={`block relative  ${containerClass}`}>
     {label&& <span className="text-base text-black mb-1">{label}</span>}

      <select
        className={`block text-base w-full rounded-md form-input text-[#7A7A85] ${className}
        ${
          error
            ? "!border-red-500 !ring-red-500 focus:border-red-500 focus:ring-red-500"
            : ""
        }
          `}
        {...rest}
      >
        {defaultValue ? <option value={""}>{defaultValue}</option> : null}
        {options?.map((item) => (
          <option key={item.label} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
      {ErrorField(error as string)}
    </label>
  );
}

export default SelectInput;
