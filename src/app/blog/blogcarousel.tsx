"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import blog1 from "../../images/blogimg1.png";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function BlogCarousel() {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
    const handleResize = () => setScreenWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const reviews = [
    {
      img: blog1,
      title: "BLOG TITLE",
      body: `Body text about the blog post. Body text about the blog post. 
                    Body text about the blog post. Body text about the blog post. 
                    Body text about the blog post. Body text about the blog.`,
      date: `16th Feb 2025`,
    },
    {
      img: blog1,
      title: "BLOG TITLE",
      body: `Body text about the blog post. Body text about the blog post. 
                    Body text about the blog post. Body text about the blog post. 
                    Body text about the blog post. Body text about the blog.`,
      date: `16th Feb 2025`,
    },
    {
      img: blog1,
      title: "BLOG TITLE",
      body: `Body text about the blog post. Body text about the blog post. 
                    Body text about the blog post. Body text about the blog post. 
                    Body text about the blog post. Body text about the blog.`,
      date: `16th Feb 2025`,
    },
  ];

  return (
    <div className="bg-[#121212] py-[40px] px-[16px] lg:p-[102px]">
      <div className="text-white font-quicksand font-bold text-[20px] text-center lg:text-[48px]">
        ARTICLES
      </div>
      <div className="mt-[56px]">
        <Swiper
          slidesPerView={screenWidth >= 1024 ? 2 : 1}
          spaceBetween={32}
          pagination={{ el: ".custom-pagination", clickable: true }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {reviews.map((i, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[#FFFBFB] p-[16px] pb-[32px] lg:p-[28px] rounded-[16px] relative overflow-hidden lg:flex lg:flex-row-reverse lg:items-center">
                <div className="relative w-full h-[200px] lg:h-[350px] lg:w-[150px] lg:flex-shrink-0  rounded-t-[8px] overflow-hidden">
                  <Image src={i.img} alt="blog" fill className="object-cover" />
                </div>
                <div className="mt-[24px] lg:mt-0">
                  <div className="text-[#121212] font-quicksand font-bold lg:text-[32px]">
                    {i.title}
                  </div>
                  <div className="mt-[5px] text-[#121212] text-[12px] font-medium font-nunito">
                    {i.date}
                  </div>
                  <div className="font-nunito font-medium text-[#121212] mt-[16px] lg:text-[20px]">
                    {i.body}
                  </div>
                  <div className="mt-[20px]">
                    <Link
                      href={"/blog/12dfg32amu24"}
                      className="font-quicksand font-bold py-[8px] lg:text-[24px] border-b border-[#054678] text-[#054678]"
                    >
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
