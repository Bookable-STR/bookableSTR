import clsx from "clsx";
import React from "react";

export const LightButton = ({ text, classname }: buttonProps) => {
  return (
    <div>
      <button
        className={clsx(
          "bg-primaryBlue-secondary text-primaryBlue rounded-full w-[200px] h-[46px] md:w-[320px] md:h-[80px] p-[12px] space-x-[10px] font-semibold md:text-2xl text-base transition duration-300 transform hover:bg-primaryBlue hover:text-text hover:scale-105",
          classname
        )}
      >
        {text}
      </button>
    </div>
  );
};
