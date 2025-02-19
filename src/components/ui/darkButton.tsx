import clsx from "clsx";
import React from "react";

export const DarkButton = ({ text, classname }: buttonProps) => {
  return (
    <div>
      <button
        className={clsx(
          "bg-primary-gradient text-text rounded-full py-3 px-6 md:text-2xl text-base transition duration-300 transform hover:scale-105",
          classname
        )}
      >
        {text}
      </button>
    </div>
  );
};
