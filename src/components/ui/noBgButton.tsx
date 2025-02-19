import clsx from "clsx";
import React from "react";

export const NoBgButton = ({ text, classname }: buttonProps) => {
  return (
    <div>
      <button
        className={clsx(
          "md:w-[201px] w-[117px] h-[28px] md:h-[62px] text-base md:py-[12px] py-[8px] px-[2px] space-x-[10px] md:text-2xl transition duration-300 transform hover:scale-105 bg-none text-text border-b-2 border-b-text font-bold leading-[21px]  md:leading-[32.74px] tracking-[6%]",
          classname
        )}
      >
        {text}
      </button>
    </div>
  );
};
