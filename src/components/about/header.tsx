import React from "react";
import { Nav } from "../nav";
import { LightButton } from "../ui/lightButton";
import Link from "next/link";

export const Header = () => {
  return (
    <div className="md:bg-mobile md:text-2xl text-base  bg-desktop px-6 font-nunito md:px-10 bg-cover bg-center text-text w-full">
      <Nav />

      <div className="flex flex-col text-center items-center justify-center md:gap-6 gap-3 pt-20 pb-10">
        <p className="text-[10px] md:text-xl uppercase">
          A lil tea about bookablestr
        </p>
        <h1 className="md:leading-[56px] leading-[30px] text-2xl w-full md:w-[70%] md:text-[50px] uppercase font-bold font-quicksand">
          We build the websites, you increase your profits.
        </h1>
        <p className="md:w-[80%] md:leading-[36px] leading-[21px] text-base w-full md:text-[28px] text-center">
          With just a click, we create amazing websites to help you handle your
          direct bookings for your properties across the world.
        </p>

        <div className="flex items-center mt-4 md:mb-4 mb-32">
          <Link
            href="mailto:bookablestr@gmail.com?subject=Inquiry&body=Hello,%I%have%a%question."
            target="_blank"
          >
            <LightButton text="Get Bookable" />
          </Link>
        </div>
      </div>
    </div>
  );
};
