import React from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
 const ErrorField = (error: string) => {
  if (!error) return null;
  return (
    <span className="flex items-center gap-x-1 text-red-500 mt-1">
      <AiOutlineInfoCircle /> <span className=" text-sm">{error}</span>
    </span>
  );
};

export default ErrorField