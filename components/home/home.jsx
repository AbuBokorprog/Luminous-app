"use client";
import React from "react";
import Banner from "./banner";
import Miss from "./miss";
import Brands from "./brands";
import Category from "./category";
import Concern from "./concern";
import Image from "next/image";
import banner from "@/public/images/banner/Website-Footer-Ribbon.png";

const Home = () => {
  return (
    <div>
      <>
        <Banner />
        <Miss />
        <Brands />
        <Category />
        <Concern />
        <div className="bg-RoseGold">
          <Image src={banner} alt="" />
        </div>
      </>
    </div>
  );
};

export default Home;
