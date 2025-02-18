import React from "react";

export const NoBgButton = ({ text }: props) => {
  return (
    <div>
      <button className="bg-none hover:bg-primaryBlue hover:rounded-full text-text border-b-2 border-b-text  py-2 px-3  text-base">
        {text}
      </button>
    </div>
  );
};
