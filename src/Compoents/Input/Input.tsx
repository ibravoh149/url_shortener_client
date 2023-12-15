import React from "react";
import { InputProps } from "./types";
import { ErrorField } from ".";

export default function Input(props: InputProps) {
  const {
    label,
    containerClass,
    labelStyle,
    error,
    className,
    name,
    register,
    ...rest
  } = props;
  return (
    <label className={`block relative  ${containerClass}`}>
      {label && (
        <span className={`text-base text-black mb-1 ${labelStyle}`}>
          {label}
        </span>
      )}
      <div className="relative">
        <input
          {...register?.(name as string)}
          className={`block text-base w-full rounded-md form-input disabled:bg-gray-50 ${className}
      ${
        error
          ? "!border-red-500 !ring-red-500 focus:border-red-500 focus:ring-red-500"
          : ""
      }
      `}
          {...rest}
        />
      </div>
      <>{ErrorField(error as string)}</>
    </label>
  );
}
