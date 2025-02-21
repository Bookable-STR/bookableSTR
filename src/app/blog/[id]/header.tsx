import React from "react";
import { Nav } from "../../../components/nav";
import { LightButton } from "../../../components/ui/lightButton";

export const Header = ({ name }: { name: string }) => {
  return (
    <div className="md:bg-mobile md:text-2xl text-base bg-desktop px-6 font-nunito md:px-10 bg-cover bg-center text-text w-full">
      <Nav />

      <div className="flex flex-col text-center items-center justify-center md:gap-6 gap-3 pt-20 pb-32 lg:pb-36">
        <p className="text-[10px] md:text-xl uppercase">
          16TH FEBRUARY 2025
        </p>
        <h1 className="md:leading-[56px] leading-[30px] text-2xl w-full md:w-[70%] md:text-[50px] uppercase font-bold font-quicksand">
          {name && name}
        </h1>
      </div>
    </div>
  );
};
