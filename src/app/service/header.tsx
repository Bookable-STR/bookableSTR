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
          BOOKABLESTR
        </p>
        <h1 className="md:leading-[56px] leading-[30px] text-2xl w-full md:w-[70%] md:text-[50px] uppercase font-bold font-quicksand">
          YOUR PARTNER IN MAXIMIZING PROFIT.
        </h1>
        <p className="md:w-[70%] md:leading-[36px] leading-[21px] text-base w-full md:text-[28px] text-center">
          We offer short-term management services through website building to help you optimize profits from your rental properties.
        </p>

        <div className="md:flex items-center  md:gap-[40px] mt-4 md:mb-4 mb-32">
          <LightButton text="Get Bookable" />
          <div className="mt-[20px] md:mt-0">
            <Link href="/about">
              <button
                className={
                  "h-[28px] md:h-[62px] text-base md:py-[12px] py-[8px] px-[2px] space-x-[10px] md:text-2xl transition duration-300 transform hover:scale-105 bg-none text-text border-b-2 border-b-text font-bold leading-[21px]  md:leading-[32.74px] tracking-[6%]"
                }
              >
                View Previous Services
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
