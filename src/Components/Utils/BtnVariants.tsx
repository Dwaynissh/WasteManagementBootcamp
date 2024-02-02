import { cva } from "class-variance-authority";

export const ButtonChoices = cva("rounded-[8px] transition-all duration-200", {
  variants: {
    choice: {
      pry: "py-[6px] px-[12px] bg-[rgb(1,124,78)] text-white font-[600]",
      sec: "py-[10px] px-[14px] bg-blue-600 text-white font-[600]",
      danger: "py-[10px] px-[15px] bg-red-600 text-white font-[600]",
    },
    size: {
      sm: "text-[12px]",
      md: "text-[18px]",
      lg: "text-[25px]",
      lg2: "text-[15px] w-[90%]",
    },
  },
  defaultVariants: {
    choice: "pry",
    size: "sm",
  },
});
