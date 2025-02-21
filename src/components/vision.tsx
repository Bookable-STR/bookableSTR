import React from "react";
import bullseye from "../images/clarity_bullseye-solid.png";
import eyePop from "../images/pepicons-pop_eye.png";
import Image from "next/image";

export const Vision = () => {
  return (
    <div className="flex md:flex-row flex-col justify-between md:gap-20 gap-10 py-10 md:py-20 md:px-24 px-3">
      <div className="bg-primaryBlue-secondary w-full md:w-[50%] relative text-text-dark px-6 md:py-8 py-10 rounded-xl ">
        <div className="pb-48">
          <div>
            <div className="leading-none font-semibold md:pb-4 pb-1">
              <h3 className="text-[20px] lg:text-[52px] text-text-dark">Our</h3>
              <h3 className="text-[24px] lg:text-[68px]  uppercase text-primaryBlue">
                Vision
              </h3>
            </div>
            <p className="lg:text-[28px] md:my-6 my-2 text-base md:leading-[36px]">
              We empower property owners with seamless direct booking solutions,
              enhancing guest connections and maximizing growth.
            </p>
          </div>
          <div className="bottom-0 absolute left-0 rounded-bl-xl">
            <Image
              src={eyePop}
              alt="eye pop icon"
              width={340}
              height={340}
              className="w-[200px] h-[200px] lg-w-[340px] rounded-bl-xl lg-h-[340px]"
            />
          </div>
        </div>
      </div>

      <div className="bg-primaryBlue-secondary w-full md:w-[50%] relative text-text-dark px-6 md:py-8 py-10 rounded-xl ">
        <div className="">
          <div className="top-0 absolute right-0">
            <Image
              src={bullseye}
              alt="eye pop icon"
              width={340}
              height={340}
              className="w-[200px] h-[200px] lg-w-[340px] lg-h-[340px]"
            />
          </div>
          <div className="pt-48">
            <div className="leading-none font-semibold md:pb-4 pb-1">
              <h3 className="text-[20px] lg-text-[52px] text-text-dark">Our</h3>
              <h3 className="text-[24px] lg-text-[68px] uppercase text-primaryBlue">
                Mission
              </h3>
            </div>
            <p className="lg-text-[28px] md:my-6 my-2 text-base md:leading-[36px]">
              To create user-friendly, feature-rich direct booking websites that
              simplify operations, enhance guest experiences, and drive
              sustainable growth for property owners.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
