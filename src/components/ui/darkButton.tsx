import React from "react";

export const DarkButton = ({ text }: props) => {
  return (
    <div>
      <button className="bg-primary-gradient hover:opacity-90 text-text rounded-full py-2 px-6 text-base transition duration-300">
        {text}
      </button>
    </div>
  );
};
