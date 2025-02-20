import React from "react";
import { Nav } from "./nav";
import { LightButton } from "./ui/lightButton";
import { NoBgButton } from "./ui/noBgButton";
import Link from "next/link";

export const Header = () => {
  return (
    <div className="md:bg-mobile md:text-2xl text-base bg-desktop px-6 font-nunito md:px-10 bg-cover bg-center text-text w-full">
      <Nav />

      <div className="flex flex-col text-center items-center justify-center md:gap-6 gap-3 pt-20 pb-20">
        <p className="text-[10px] md:text-xl uppercase">
          UNLOCK YOUR SHORT-TERM RENTALS FULL POTENTIAL
        </p>
        <h1 className="md:leading-[56px] leading-[30px] text-2xl w-full md:w-[70%] md:text-[50px] uppercase font-bold font-quicksand">
          YOUR PROPERTY DESERVES MORE THAN JUST LISTINGS.
        </h1>
        <p className="md:w-[70%] md:leading-[36px] leading-[21px] text-base w-full md:text-[28px] text-center">
          BookableSTR builds high-converting, user-friendly websites that
          showcase your properties, drive direct bookings, and give you full
          control with no third-party fees.
        </p>

        <div className="md:flex items-center  md:gap-[40px] my-4">
          <LightButton text="Get Bookable" />
          <div className="mt-[20px] md:mt-0">
            <Link href="/about">
              <NoBgButton text="See our Work" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
