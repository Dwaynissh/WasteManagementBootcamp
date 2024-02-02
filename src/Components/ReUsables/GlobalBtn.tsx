import { FC } from "react";
import { cn } from "../Utils/Cn";
import { ButtonChoices } from "../Utils/BtnVariants";
import { iPropsBtn } from "../Utils/Interfaces";

const GlobalBtn: FC<iPropsBtn> = ({
  text,
  className,
  choice,
  size,
  icon,
  ...props
}) => {
  return (
    <div>
      <button
        {...props}
        className={cn(
          ButtonChoices({
            choice,
            size,
          }),
          className
        )}
      >
        {text}
      </button>
    </div>
  );
};

export default GlobalBtn;
