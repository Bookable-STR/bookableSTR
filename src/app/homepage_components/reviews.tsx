"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import customer1 from "../../images/customer1.png"
import { Pagination } from 'swiper/modules';
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Reviews() {

    const [screenWidth, setScreenWidth] = useState(0);

    useEffect(() => {
        setScreenWidth(window.innerWidth)
        const handleResize = () => setScreenWidth(window.innerWidth);

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const reviews = [
        {
            img: customer1,
            title: "I HIGHLY RECOMMEND",
            body: `BookableSTR has been amazing! They took the time to understand my needs, 
                 built a perfect booking site, and supported me every step of the way. 
                 The process was smooth, and my direct bookings have increased. 
                 I couldn’t be happier!`,
            name: "KUNLE OSIDELE",
            url: "https://www.kotmanagement.com"
        },
        {
            img: customer1,
            title: "I HIGHLY RECOMMEND",
            body: `BookableSTR has been amazing! They took the time to understand my needs, 
                 built a perfect booking site, and supported me every step of the way. 
                 The process was smooth, and my direct bookings have increased. 
                 I couldn’t be happier!`,
            name: "KUNLE OSIDELE",
            url: "https://www.kotmanagement.com"
        },
        {
            img: customer1,
            title: "I HIGHLY RECOMMEND",
            body: `BookableSTR has been amazing! They took the time to understand my needs, 
                 built a perfect booking site, and supported me every step of the way. 
                 The process was smooth, and my direct bookings have increased. 
                 I couldn’t be happier!`,
            name: "KUNLE OSIDELE",
            url: "https://www.kotmanagement.com"
        },
    ]

    return (
        <div className="bg-[#121212] py-[40px] px-[16px] lg:p-[102px]">
            <div className="text-white font-quicksand font-bold text-[20px] w-[270px] lg:w-[668px] lg:text-[48px]">
                HERE’S WHAT OUR <span className="text-[#054678]">CLIENTS</span> HAVE TO SAY ABOUT US
            </div>
            <div className="mt-[12px] font-nunito font-medium text-white w-[270px] lg:w-[668px] lg:text-[28px]">
                BookableSTR is committed to satisfying clients with efficient and seamless websites that can help them drive bookings.
            </div>
            <div className="mt-[56px]">
                <Swiper
                    slidesPerView={screenWidth >= 1024 ? 2 : 1}
                    spaceBetween={32}
                    pagination={{ el: '.custom-pagination', clickable: true }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {reviews.map((i, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-[#FFFBFB] pb-[60px] px-[16px] lg:px-[28px] rounded-[16px] relative overflow-hidden">
                                <div className="font-quicksand font-semibold text-[80px] lg:text-[160px] h-[60px] lg:h-[100px] lg:-mt-[40px] text-[#054678]">
                                    “
                                </div>
                                <div className="mt-[16px] lg:mt-[28px] text-[#121212] font-quicksand font-bold lg:text-[32px]">
                                    {i.title}
                                </div>
                                <div className="font-nunito font-medium text-[#121212] mt-[16px] lg:text-[20px]">
                                    {i.body}
                                </div>
                                <div className="flex justify-between items-center mt-[22px]">
                                    <div>
                                        <div className="text-[#121212] font-quicksand font-bold lg:text-[24px]">
                                            {i.name}
                                        </div>
                                        <a href={i.url} className="mt-[8px] font-quicksand font-bold py-[8px] lg:text-[24px] border-b border-[#054678] text-[#054678]">
                                            View website
                                        </a>
                                    </div>
                                    <div className="border border-gray-300 w-[100px] h-[100px] lg:w-[150px] lg:h-[150px] relative rounded-full overflow-hidden">
                                        <Image src={i.img} alt="client" fill className="object-cover" />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="custom-pagination flex justify-center gap-[5px] mt-[20px]"></div>
            </div>
        </div>
    );
}