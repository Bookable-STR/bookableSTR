import React from "react";

export const LightButton = ({ text }: props) => {
  return (
    <div>
      <button className="bg-primaryBlue-secondary hover:bg-primaryBlue hover:text-text text-primaryBlue rounded-full py-2 px-6 font-semibold text-base">
        {text}
      </button>
    </div>
  );
};
