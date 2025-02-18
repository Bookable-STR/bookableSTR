import React from "react";
import { Nav } from "./nav";
import { LightButton } from "./ui/lightButton";
import { NoBgButton } from "./ui/noBgButton";

export const Header = () => {
  return (
    <div className="md:bg-mobile bg-desktop px-6 font-nunito md:px-10 bg-cover bg-center text-text w-full">
      <Nav />

      <div className="flex flex-col text-center items-center justify-center gap-3 pt-16 pb-10">
        <p className="text-[10px] md:text-base uppercase">
          UNLOCK YOUR SHORT-TERM RENTALS FULL POTENTIAL
        </p>
        <h1 className="text-xl md:w-[60%] w-full md:text-5xl uppercase font-bold font-quicksand">
          YOUR PROPERTY DESERVES MORE THAN JUST LISTINGS.
        </h1>
        <p className="md:w-[50%] w-full md:text-lg text-center">
          BookableSTR builds high-converting, user-friendly websites that
          showcase your properties, drive direct bookings, and give you full
          control with no third-party fees.
        </p>

        <div className="md:flex  md:gap-3 my-4">
          <LightButton text="Get Bookable" />
          <div className="mt-3 md:mt-0">
            <NoBgButton text="See our Work" />
          </div>
        </div>
      </div>
    </div>
  );
};
