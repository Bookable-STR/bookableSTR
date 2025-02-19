import clsx from "clsx";
import React from "react";

export const LightButton = ({ text, classname }: buttonProps) => {
  return (
    <div>
      <button
        className={clsx(
          "bg-primaryBlue-secondary text-primaryBlue rounded-full py-2 px-6 font-semibold md:text-2xl text-base transition duration-300 transform hover:bg-primaryBlue hover:text-text hover:scale-105",
          classname
        )}
      >
        {text}
      </button>
    </div>
  );
};
