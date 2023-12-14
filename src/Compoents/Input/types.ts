import {  InputHTMLAttributes } from "react";

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  containerClass?:string
  error?:string
  labelStyle?:string
};
