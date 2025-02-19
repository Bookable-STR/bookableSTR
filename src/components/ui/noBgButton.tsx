import clsx from "clsx";
import React from "react";

export const NoBgButton = ({ text, classname }: buttonProps) => {
  return (
    <div>
      <button
        className={clsx(
          "bg-none text-text border-b-2 border-b-text py-2 px-3 md:text-2xl text-base transition duration-300 transform hover:bg-primaryBlue hover:rounded-full hover:scale-105",
          classname
        )}
      >
        {text}
      </button>
    </div>
  );
};
