import React from "react";
import image1 from "@/public/images/cantMiss/DYCM_1.gif";
import image2 from "@/public/images/cantMiss/Lux-Body-Wash-1.gif";
import image3 from "@/public/images/cantMiss/Senora-Banner.gif";
import image4 from "@/public/images/cantMiss/Shajgoj-Marico-Bogo-Free-Delivery-2.gif";
import Image from "next/image";
import Link from "next/link";

const Miss = () => {
  return (
    <div className="my-10">
      <h2 className="uppercase lg:text-4xl text-center font-bold">
        Deals you cannot miss
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 mx-auto gap-4 my-16">
        <Link href={"/product_category/brand/veet"}>
          {" "}
          <Image src={image1} alt="Image1" />
        </Link>
        <Link href={"/product_category/brand/lux"}>
          <Image src={image2} alt="Image2" />
        </Link>
        <Link href={"/product_category/buy1get1"}>
          <Image src={image3} alt="buy 1 get 1" />
        </Link>
        <Link href={"/product_category/offer/bogo_offer"}>
          <Image src={image4} alt="Image4" />
        </Link>
      </div>
    </div>
  );
};

export default Miss;
