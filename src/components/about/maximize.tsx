import React from "react";
import { DarkButton } from "../ui/darkButton";
import logo from "../../images/logo-bg.png";
import Image from "next/image";
import Link from "next/link";

export const Maximize = () => {
  return (
    <div className="md:py-20 py-10 md:px-24 px-3 flex md:flex-row md:gap-20 gap-10 items-center justify-center flex-col-reverse">
      <div className=" w-full">
        <h1 className=" md:text-[34px] md:leading-[40px] text-xl w-full uppercase font-bold font-quicksand">
          Your partner in maximizing short-term rental revenue
        </h1>
        <p className=" md:leading-[36px] leading-[21px] text-base w-full md:w-[90%] md:text-[28px] py-4">
          We build websites that bridge the gap between your property’s
          potential and its peak performance.
        </p>

        <div className="flex items-center my-4">
          <Link
            href="mailto:bookablestr@gmail.com?subject=Inquiry&body=Hello,%I%have%a%question."
            target="_blank"
          >
            <DarkButton text="Get Bookable" />
          </Link>
        </div>
      </div>

      <div className=" ">
        <Image
          src={logo}
          alt="logo"
          width={680}
          height={320}
          className="rounded-2xl lg:w-[680px] lg:h-[320px] w-[280px] h-[240px]"
        />
      </div>
    </div>
  );
};
