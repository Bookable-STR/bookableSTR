"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function BlogCarousel({ blogs }: { blogs: any }) {

    const [screenWidth, setScreenWidth] = useState(0);

    useEffect(() => {
        setScreenWidth(window.innerWidth);
        const handleResize = () => setScreenWidth(window.innerWidth);

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="bg-[#121212] py-[40px] px-[16px] lg:p-[102px]">
            <div className="text-white font-quicksand font-bold text-[20px] text-center lg:text-[48px]">
                ARTICLES
            </div>
            <div className="mt-[56px]">
                <Swiper
                    slidesPerView={screenWidth >= 1024 ? 2 : 1}
                    spaceBetween={32}
                    pagination={{ el: '.custom-pagination', clickable: true }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {blogs && blogs.length > 0 && blogs.map((i: any, index: any) => (
                        <SwiperSlide key={index}>
                            <div className="bg-[#FFFBFB] p-[16px] pb-[32px] lg:p-[28px] rounded-[16px] relative overflow-hidden lg:flex lg:flex-row-reverse lg:items-center">
                                <div className="relative w-full h-[200px] lg:h-[350px] lg:w-[230px] lg:flex-shrink-0 rounded-t-[8px] overflow-hidden">
                                    <Image src={i.mainImage} alt="blog" fill className="object-cover" />
                                </div>
                                <div className="mt-[24px] lg:mt-0 w-full h-full">
                                    <div className="text-[#121212] font-quicksand font-bold lg:text-[32px]">
                                        {i.title}
                                    </div>
                                    <div className="mt-[5px] text-[#121212] text-[12px] lg:text-base font-medium font-nunito">
                                        {new Date(i.publishedAt).toLocaleDateString("en-US", { dateStyle: 'full' })}
                                    </div>
                                    <div className="mt-[20px]">
                                        <Link href={`/blog/${i.slug.current}`} className="font-quicksand font-bold py-[8px] lg:text-[24px] border-b border-[#054678] text-[#054678]">
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="custom-pagination flex justify-center gap-[5px] lg:gap-[10px] mt-[20px] lg:mt-[40px]"></div>
            </div>
        </div>
    );
}
