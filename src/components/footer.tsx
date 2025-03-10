"use client";
import Image from "next/image";
import logo from "../images/logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { id: 1, text: "About Us", href: "/about" },
  { id: 2, text: "Services", href: "/service" },
  { id: 3, text: "Blog", href: "/blog" },
  { id: 4, text: "Contact Us", href: "/contact-us" },
];

export default function Footer() {
  const pathname = usePathname();
  return (
    <div>
      <div className="bg-[#120F11] text-white w-full py-[60px] md:flex  lg:justify-between">
        {/*...*/}
        <div className="">
          <Image
            alt="bookableSTR"
            src={logo}
            width={9999}
            height={9999}
            className="w-[250px] lg:w-[340px] -ml-[8px] lg:ml-[70px]"
          />
          <div className="ml-[16px] lg:ml-[105px] text-[20px] lg:text-[24px] font-nunito font-medium w-[286px] lg:w-[480px] mt-[20px]">
            Your partner in maximizing short-term rental revenue <br />
            <br />
            <span className="text-[#054678] italic">Get Bookable today.</span>
          </div>
        </div>

        {/*...*/}
        <div className="md:flex block lg:pt-12 mt-[40px] lg:mt-0 px-[16px] items-start gap-10 lg:mr-[100px] lg:w-[40vw] lg:px-0 ">
          <div className="font-nunito text-xl lg:text-[22px]">
            <div className="font-quicksand pb-3 font-bold text-[24px]  lg:text-[28px]">
              NAVIGATION
            </div>
            {navItems.map((items) => {
              const isActive = pathname === items.href;
              return (
                <div key={items.id} className={`${isActive ? `` : ``}`}>
                  {" "}
                  <Link href={items.href}>{items.text}</Link>
                </div>
              );
            })}
          </div>
          <div className="font-nunito text-xl lg:text-[22px] mt-[40px] lg:mt-0">
            <div className="font-quicksand font-bold text-[24px]  lg:text-[28px]">
              INFORMATION
            </div>
            <div className="mt-[12px]">Phone: +447787458301 </div>
            <div>Email: sales@bookablestr.com</div>
          </div>
        </div>
        {/*...*/}
      </div>
      <div className="bg-[#FFFBFB] text-[#121212] font-nunito h-[60px] lg:h-[100px] lg:text-[24px] flex items-center justify-center">
        Copyright &copy; 2025 BookableSTR
      </div>
    </div>
  );
}
