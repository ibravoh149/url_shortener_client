import {  InputHTMLAttributes } from "react";

export type SwitchProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  labelClass?:string
};
