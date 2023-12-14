import { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  title?: string;
  isLoading?: string;
  children?: ReactNode;
};
