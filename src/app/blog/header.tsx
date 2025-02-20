import React from "react";
import { Nav } from "../../components/nav";
import { LightButton } from "../../components/ui/lightButton";
import Link from "next/link";

export const Header = () => {
  return (
    <div className="md:bg-mobile md:text-2xl text-base bg-desktop px-6 font-nunito md:px-10 bg-cover bg-center text-text w-full">
      <Nav />

      <div className="flex flex-col text-center items-center justify-center md:gap-6 gap-3 pt-20 pb-10 lg:pb-20">
        <p className="text-[10px] md:text-xl uppercase">
          INCREASED BOOKINGS, ONE BLOG AT A TIME
        </p>
        <h1 className="md:leading-[56px] leading-[30px] text-2xl w-full md:w-[70%] md:text-[50px] uppercase font-bold font-quicksand">
          TIPS, STRATEGIES, TRENDS TO HELP YOU ATTRACT MORE GUESTS.
        </h1>
        <p className="md:w-[70%] md:leading-[36px] leading-[21px] text-base w-full md:text-[28px] text-center">
          Our blog keeps you informed and ahead of the short-term property rental market.
        </p>

        <div className="md:flex items-center  md:gap-[40px] mt-4 md:mb-4 mb-32">
          <LightButton text="Visit Blog" />
          <div className="mt-[20px] md:mt-0">
          </div>
        </div>
      </div>
    </div>
  );
};
