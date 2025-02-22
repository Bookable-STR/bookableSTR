import React from "react";
import appLaunch from "../images/Successful-mobile-app.png";
import socialFeed from "../images/Social-media-feed.png";
import Image from "next/image";
import businessTools from "../images/Business-tools.png";

export const Features = () => {
  return (
    <div>
      <section className="bg-text text-center text-text-dark py-10 px-3">
        <p className="uppercase lg:text-2xl text-sm">Why choose</p>
        <h2 className="uppercase lg:text-4xl text-xl py-2 font-bold ">
          BookableSTR for your project
        </h2>
      </section>

      <section className="flex md:flex-row flex-col-reverse items-center md:justify-between justify-center bg-text-dark text-text py-10 md:px-24 px-3">
        <div className="py-4">
          <h3 className="uppercase lg:text-4xl text-xl py-2 font-bold ">
            Direct Bookings Website Dfy
          </h3>
          <p className="lg:text-[28px] text-base md:leading-[36px] md:w-[80%] py-4 w-full">
            We build professional booking websites that cut third-party fees,
            boost profits, and give you full control.
          </p>
        </div>
        <div>
          <Image
            src={appLaunch}
            alt="mobile app launch"
            width={232}
            height={212}
            className="md:w-[460px] md:h-[300px]"
          />
        </div>
      </section>

      <section className="flex md:flex-row md:gap-20 flex-col items-center justify-center md:justify-between bg-text text-text-dark py-10 md:px-24 px-3 w-full">
        <div className="">
          <Image
            src={socialFeed}
            alt="mobile app launch"
            width={232}
            height={212}
            layout="responsive"
            className="md:w-[460px] md:h-[300px]"
          />
        </div>
        <div className="py-4 w-full md:w-[60%]">
          <h3 className="uppercase lg:text-4xl text-xl py-2 font-semibold md:tracking-[2%]">
            Customizable Plug-ins for Marketing Automation
          </h3>
          <p className="lg:text-[28px] text-base md:leading-[36px]  py-4 w-full">
            We integrate custom plug-ins like WhatsApp and email marketing to
            boost engagement, drive conversions, and keep your property
            top-of-mind.
          </p>
        </div>
      </section>

      <section className="flex md:flex-row flex-col-reverse items-center md:justify-between justify-center bg-text-dark text-text py-10 md:px-24 px-3">
        <div className="py-4">
          <h3 className="uppercase lg:text-4xl text-xl py-2 font-bold ">
            Speed
          </h3>
          <p className="lg:text-[28px] text-base md:leading-[36px] md:w-[80%] py-4 w-full">
            Industry standards take about six months to build an STR booking
            website, but with our efficient process, we deliver a fully
            optimized site in just one month.
          </p>
        </div>
        <div>
          <Image
            src={businessTools}
            alt="mobile app launch"
            width={500}
            height={500}
            className="w-[232px] h-[212px] md:w-[700px] md:h-[300px]"
          />
        </div>
      </section>
    </div>
  );
};
