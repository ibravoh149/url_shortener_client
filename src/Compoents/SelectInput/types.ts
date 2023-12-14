import React from "react";

export interface ISelectListItem {
  label: string;
  value: string | number;
}
export type SelectInputProps = React.InputHTMLAttributes<HTMLSelectElement> & {
  options: ISelectListItem[] | undefined;
  label?: string;
  containerClass?: string;
  error?: string;
};
