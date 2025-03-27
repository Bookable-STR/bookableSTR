"use client";
import { Header } from "./header";
import Reviews from "../homepage_components/reviews";
import Homepage_CTA from "../homepage_components/cta";
import Image from "next/image";
import Doncaster from "../../images/Doncaster-Housing.png";
import Link from "next/link";

export default function Services() {
  return (
    <div className="bg-white">
      <Header />
      <div className="bg-white text-[#121212] py-[40px] px-[16px] lg:py-[40px]">
        <div className="font-nunito uppercase font-medium text-[12px] lg:text-[24px] text-center">
          You bring the property
        </div>
        <div className="font-quicksand font-bold lg:text-5xl text-xl uppercase text-center">
          We help you optimize profit
        </div>
      </div>
      <div className="w-full flex items-center justify-center bg-[#121212] py-[45px] lg:py-[100px] text-white px-[16px]">
        <div className="overflow-x-auto servicesscroll">
          <div className="w-max flex gap-[16px] lg:gap-[50px] text-[20px] lg:text-[28px] font-bold font-quicksand">
            <div className="">SPEEDY DELIVERY</div>
            <div className="">DIRECT BOOKINGS WEBSITES</div>
            <div className="">CUSTOMIZABLE</div>
            <div className="">RELIABLE</div>
          </div>
        </div>
      </div>
      <div className="bg-white flex flex-col items-center justify-center py-[40px] lg:py-[60px] px-[16px] lg:px-[40px]">
        <div className="font-nunito font-medium text-[12px] lg:text-[24px] text-[#121212]">
          WE OFFER
        </div>
        <div className="font-quicksand font-bold lg:text-5xl text-xl uppercase text-[#121212]">
          STR WEBSITE BUILDING
        </div>
        <div className="mt-[28px] grid grid-cols-1 md:grid-cols-3 gap-[20px]">
          <div className="border-[0.5px] border-[#121212] text-[#121212] p-[16px] lg:p-[26px] rounded-[16px] max-w-[500px] lg:h-full lg:flex lg:flex-col lg:justify-between">
            <div className="font-quicksand font-bold text-[20px] lg:text-3xl">
              CUSTOM-DESIGNED{" "}
              <span className="text-[#054678]">STR BOOKING</span> WEBSITES
            </div>
            <div className="mt-[40px] text-[20px] lg:text-2xl font-nunito">
              We create sleek, user-friendly websites that highlight your
              property, increase direct bookings, and boost your online
              presence.
            </div>
          </div>
          <div className="border-[0.5px] border-[#121212] text-[#121212] p-[16px] lg:p-[26px] rounded-[16px] max-w-[500px] lg:h-full lg:flex lg:flex-col lg:justify-between">
            <div className="font-quicksand font-bold text-[20px] lg:text-3xl">
              INTEGRATED MARKETING TOOLS FOR{" "}
              <span className="text-[#054678]">GROWTH</span>
            </div>
            <div className="mt-[40px] text-[20px] lg:text-2xl font-nunito">
              Your website will include powerful tools like WhatsApp messaging
              for instant guest chats, email pop-ups for lead capture, and
              marketing features to boost visibility and drive repeat bookings.
            </div>
          </div>
          <div className="border-[0.5px] bg-[#054678] text-white p-[16px] lg:p-[26px] rounded-[16px] max-w-[500px] lg:h-full lg:flex lg:flex-col lg:justify-between">
            <div className="font-quicksand font-bold text-[20px] lg:text-3xl">
              EFFORTLESS AUTOMATION FOR MAXIMUM EFFICIENCY
            </div>
            <div className="mt-[40px] text-[20px] lg:text-2xl font-nunito">
              We streamline bookings with automation, calendars, and guest
              tools, saving you time and enhancing the guest experience.
            </div>
          </div>
        </div>
      </div>
      <div
        className="py-10 lg:px-12 px-6 bg-white text-[#121212]"
        id="templates"
      >
        <p className="font-quicksand font-bold lg:text-3xl text-xl text-center text-[#121212] uppercase">
          Templates We&apos;ve built
        </p>
        <div className="flex lg:flex-row py-4 flex-col gap-10">
          <Image
            src={Doncaster}
            alt="Doncaster housing"
            width={500}
            height={500}
            className="lg:w-1/2 w-full"
          />
          <div className="lg:w-1/2 w-full py-4 text-base lg:text-2xl">
            <h3 className="uppercase font-bold">Doncaster Housing</h3>
            <p className="py-4">
              A platform that connects renters with property owners in
              Doncaster, offering a variety of housing options to suit different
              needs and budgets. With an easy-to-use interface, transparent
              listings, and reliable customer support, we make the renting
              process simple and hassle-free
            </p>

            <Link href="https://doncaster-housing.netlify.app/">
              <button className="text-primaryBlue transition border border-primaryBlue rounded-full  w-full py-4 duration-300 transform hover:bg-primaryBlue hover:text-text hover:scale-105">
                Check Site
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div id="reviews">
        <Reviews />
      </div>
      <Homepage_CTA />
    </div>
  );
}
