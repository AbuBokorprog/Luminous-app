import React from "react";
import image1 from "@/public/images/category/MAkeup.png";
import image2 from "@/public/images/category/Fragrance.png";
import image3 from "@/public/images/category/Accessories.png";
import image4 from "@/public/images/category/Hair-Care.png";
import image5 from "@/public/images/category/KBeauty.png";
import image6 from "@/public/images/category/Mom-Baby.png";
import image7 from "@/public/images/category/Skin-Care.png";
import image8 from "@/public/images/category/Undergarments.png";
import Image from "next/image";

const Category = () => {
  return (
    <div className="my-10">
      <h2 className="uppercase lg:text-4xl text-center font-bold">
        SHOP BEAUTY PRODUCTS BY CATEGORY
      </h2>
      <div className="grid md:grid-cols-1 lg:grid-cols-4 mx-auto gap-4 my-16">
        <Image src={image1} alt="Image1" />
        <Image src={image2} alt="Image2" />
        <Image src={image3} alt="Image3" />
        <Image src={image4} alt="Image4" />
        <Image src={image5} alt="Image4" />
        <Image src={image6} alt="Image4" />
        <Image src={image7} alt="Image4" />
        <Image src={image8} alt="Image4" />
      </div>
    </div>
  );
};

export default Category;
