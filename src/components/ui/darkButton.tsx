import clsx from "clsx";
import React from "react";

export const DarkButton = ({ text, classname }: buttonProps) => {
  return (
    <div>
      <button
        className={clsx(
          "bg-primary-gradient text-text rounded-full w-[200px] h-[46px] md:w-[320px] md:h-[80px] p-[12px] space-x-[10px] md:text-2xl text-base transition duration-300 transform hover:scale-105",
          classname
        )}
      >
        {text}
      </button>
    </div>
  );
};
