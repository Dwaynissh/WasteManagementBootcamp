import { FC } from "react";

interface iHeroCard1 {
  text?: string;
  text2?: string;
  text3?: string;
  color?: string;
}

const HeroCard1: FC<iHeroCard1> = ({ text, text2, text3, color }) => {
  return (
    <div
      className={`rounded-md py-9 text-white flex justify-center items-center ${
        color || "bg-[rgb(1,124,78)]"
      } shadow-sm`}
    >
      <div className="w-[85%] h-[80%]">
        <div>
          <h3>{text}</h3>
          <p>{text2}</p>
        </div>
        <div>{text3}</div>
      </div>
    </div>
  );
};

export default HeroCard1;
