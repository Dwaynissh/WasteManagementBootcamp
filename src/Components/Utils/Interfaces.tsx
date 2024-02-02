import { VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { ButtonChoices } from "./BtnVariants";

export interface iPropsBtn
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ButtonChoices> {
  text: string;
  icon?: ReactNode;
}
