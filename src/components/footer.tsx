import Image from "next/image";
import logo from "../images/logo.png";

export default function Footer() {
  return (
    <div>
      <div className="bg-[#120F11] text-white w-full py-[60px] lg:flex lg:items-center lg:justify-between">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-[40px] lg:mt-0 px-[16px] gap-[40px] lg:gap-[0] lg:mr-[100px] lg:w-[40vw] lg:px-0 lg:max-w-[700px]">
          <div className="font-nunito text-[20px] lg:text-[24px]">
            <div className="font-quicksand font-bold text-[24px] lg:text-[28px]">
              NAVIGATION
            </div>
            <div className="mt-[12px]">About Us</div>
            <div>Services</div>
            <div>Blog</div>
            <div>Contact Us</div>
          </div>
          <div className="font-nunito text-[20px] lg:text-[24px]">
            <div className="font-quicksand font-bold text-[24px] lg:text-[28px]">
              INFORMATION
            </div>
            <div className="mt-[12px]">Phone: +447787458301 </div>
            <div>Email: bookablestr@gmail.com</div>
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
