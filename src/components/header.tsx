import React from "react";
import { Nav } from "./nav";
import { LightButton } from "./ui/lightButton";
import { NoBgButton } from "./ui/noBgButton";
import Link from "next/link";

export const Header = () => {
  return (
    <div className="md:bg-mobile lg:text-2xl text-base bg-desktop px-6 font-nunito lg:px-10 bg-cover bg-center text-text w-full">
      <Nav />

      <div className="flex flex-col text-center items-center justify-center lg:gap-6 gap-3 pt-20 pb-10">
        <p className="text-[10px] md:text-xl uppercase">
          UNLOCK YOUR SHORT-TERM RENTALS FULL POTENTIAL
        </p>
        <h1 className="lg:leading-[56px] leading-[30px] text-2xl w-full lg:w-[70%] lg:text-[50px] uppercase font-bold font-quicksand">
          YOUR PROPERTY DESERVES MORE THAN JUST LISTINGS.
        </h1>
        <p className="lg:w-[70%] lg:leading-[36px] leading-[21px] text-base w-full lg:text-[28px] text-center">
          BookableSTR builds high-converting, user-friendly websites that
          showcase your properties, drive direct bookings, and give you full
          control with no third-party fees.
        </p>

        <div className="lg:flex items-center  lg:gap-[40px] mt-4 lg:mb-4 mb-32">
          <Link href="https://calendly.com/bookablestr/30min" target="_blank">
            <LightButton text="Get Bookable" />
          </Link>
          <div className="mt-[20px] lg:mt-0">
            <Link href="/service">
              <NoBgButton text="See our Work" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
