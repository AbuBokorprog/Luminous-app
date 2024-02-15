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
import Link from "next/link";

const Category = () => {
  return (
    <div className="my-10">
      <h2 className="uppercase lg:text-4xl text-center font-bold">
        SHOP BEAUTY PRODUCTS BY CATEGORY
      </h2>
      <div className="grid md:grid-cols-1 lg:grid-cols-4 mx-auto gap-4 my-16">
        <Link href={"/product_category/makeup"}>
          <Image src={image1} alt="Makeup" />
        </Link>
        <Link href={"/product_category/fragrance"}>
          <Image src={image2} alt="Fragrance" />
        </Link>
        <Image src={image3} alt="Accessories" />
        <Link href={"/product_category/hair"}>
          <Image src={image4} alt="Hair" />
        </Link>
        <Image src={image5} alt="K-beauty" />
        <Link href={"/product_category/mom_baby"}>
          <Image src={image6} alt="Mom & Baby" />
        </Link>
        <Link href={"/product_category/skin"}>
          <Image src={image7} alt="Skin" />
        </Link>
        <Link href={"/product_category/undergarments"}>
          <Image src={image8} alt="Undergarments" />
        </Link>
      </div>
    </div>
  );
};

export default Category;
