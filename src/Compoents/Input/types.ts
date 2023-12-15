import { InputHTMLAttributes } from "react";
import { UseFormRegister } from "react-hook-form";

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  containerClass?: string;
  error?: string;
  labelStyle?: string;
  register?: UseFormRegister<any>;
};
