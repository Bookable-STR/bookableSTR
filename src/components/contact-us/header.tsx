import React from "react";
import { Nav } from "../nav";
import { LightButton } from "../ui/lightButton";

export const Header = () => {
  return (
    <div className="md:bg-mobile md:text-2xl text-base  bg-desktop px-6 font-nunito md:px-10 bg-cover bg-center text-text w-full">
      <Nav />

      <div className="flex flex-col text-center items-center justify-center md:gap-6 gap-3 pt-20 pb-10">
        <p className="text-[10px] md:text-xl uppercase">
          Hey you, let’s stay connected
        </p>
        <h1 className="md:leading-[56px] leading-[30px] text-2xl w-full md:w-[70%] md:text-[50px] uppercase font-bold font-quicksand">
          We are a click away from rendering our services.
        </h1>
        <p className="md:w-[80%] md:leading-[36px] leading-[21px] text-base w-full md:text-[28px] text-center">
          Let’s help you manage your rental property through a personalized
          professional website.
        </p>

        <div className="flex items-center mt-4 md:mb-4 mb-32">
          <LightButton text="Get Bookable" />
        </div>
      </div>
    </div>
  );
};
