import React from "react";
import img1 from "../images/access-image.png";
import handImg from "../images/access-hand.png";
import Image from "next/image";

export const Access = () => {
  return (
    <div className="py-10 md:px-24 px-3 bg-text-dark text-text">
      <div className="text-center">
        <p className="uppercase lg:text-2xl text-sm">With bookableSTR</p>
        <h2 className="uppercase lg:text-4xl text-xl py-2 font-bold">
          You gain access to
        </h2>
      </div>

      <div className="md:grid md:my-10 my-6 block grid-cols-3 gap-6 items-stretch">
        <div className="flex flex-col gap-6 ">
          <div className="border-[0.5px] border-text rounded-2xl p-4 flex-1">
            <p className="lg:text-xl text-base">
              Clients get a higher customer return rate through direct bookings
              which increases revenue because there’s no third-party fees in
              place to be paid.
            </p>
            <h4 className="uppercase text-xl lg:text-2xl font-medium pt-6">
              Increased revenue
            </h4>
          </div>

          <div className="md:block hidden flex-1">
            <Image
              src={img1}
              alt="access 1"
              className="rounded-2xl w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="bg-accessTorch bg-cover bg-center rounded-2xl p-6 md:h-full h-[500px] flex flex-col md:my-0 my-6 justify-between">
          <h4 className="uppercase text-xl  lg:text-2xl font-medium ">
            Innovative Website Technology
          </h4>
          <p className="lg:text-xl text-base">
            Advanced tools, automation, and analytics to stay ahead of market
            trends.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <div className="md:block hidden flex-1">
            <Image
              src={handImg}
              alt="access hand"
              className="rounded-2xl w-full h-full object-cover"
            />
          </div>

          <div className="border-[0.5px] border-text rounded-2xl p-4 flex-1">
            <h4 className="uppercase text-xl  lg:text-2xl font-medium pb-6">
              Strategic Partnership
            </h4>
            <p className="lg:text-xl text-base">
              We are a committed website-building partner focused on helping
              property owners meet their financial and operational goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
