"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { Pagination, Autoplay } from "swiper/modules";
import banner1 from "@/public/images/banner/banner1.png";
import banner2 from "@/public/images/banner/Nirvana-Web-Banner-2.png";
import banner3 from "@/public/images/banner/Nivea-home-page-banner-01.png";
import banner4 from "@/public/images/banner/Shop-by-Concern-Website-Slider.png";

const Banner = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
          renderBullet: function (index, className) {
            return (
              '<span class="' +
              className +
              '" style="background-color: #f83b60;"></span>'
            );
          },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            className="min-h-fit w-screen"
            src={banner1}
            alt="Banner 1"
            priority
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={banner2} className="min-h-fit w-screen" alt="Banner 1" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={banner3} alt="Banner 1" className="min-h-fit w-screen" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={banner4} alt="Banner 1" className="min-h-fit w-screen" />
        </SwiperSlide>
        <br />
        <br />
        <div className="swiper-pagination"></div>
      </Swiper>
    </>
  );
};

export default Banner;
