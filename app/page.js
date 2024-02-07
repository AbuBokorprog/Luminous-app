import Banner from "@/components/home/banner";
import Brands from "@/components/home/brands";
import Category from "@/components/home/category";
import Concern from "@/components/home/concern";
import Miss from "@/components/home/miss";
import React from "react";
import Image from "next/image";
import banner from "@/public/images/banner/Website-Footer-Ribbon.png";
export default function Home() {
  return (
    <div>
      <Banner />
      <Miss />
      <Brands />
      <Category />
      <Concern />
      <div className="bg-RoseGold">
        <Image src={banner} alt="" />
      </div>
    </div>
  );
}
