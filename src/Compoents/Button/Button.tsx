import React from "react";
import { ButtonProps } from "./types";

export default function Button(props: ButtonProps) {
  const { title, isLoading, className, ...rest } = props;
  return (
    <button
      className={`bg-primary px-[24px] py-[12px] shadow-xl text-white text-base rounded-lg disabled:bg-[#627180] disabled:border-0 disabled:text-white ${className}`}
      {...rest}
    >
      {!isLoading && <>{title}</>}
      {/* {isLoading && <ClipLoader color={loaderStyle?.color} size={16} />} */}
    </button>
  );
}
