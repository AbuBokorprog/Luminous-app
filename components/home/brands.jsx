import React from "react";
import image1 from "@/public/images/brands/Brand-Banner-1-GIF-F1-1.gif";
import image2 from "@/public/images/brands/Nirvana-GIF.gif";
import image3 from "@/public/images/brands/PNS-Egg-Protein-shampoo_960x423-px.png";
import image4 from "@/public/images/brands/Ponds-1.png";
import image5 from "@/public/images/brands/Simple-1.png";
import image6 from "@/public/images/brands/Tresemme-40-OFF.png";
import Image from "next/image";
import Link from "next/link";

const Brands = () => {
  return (
    <div className="my-10">
      <h2 className="uppercase lg:text-4xl text-center font-bold">
        Top brands and offers
      </h2>
      <div className="grid md:grid-cols-1 lg:grid-cols-3 mx-auto gap-4 my-16">
        <Link href={"/product_category/brand/veet"}>
          <Image src={image1} alt="Veet" />
        </Link>
        <Link href={"/product_category/brand/nirvana"}>
          <Image src={image2} alt="Nirvana" />
        </Link>
        <Link href={"/product_category/brand/naturale"}>
          <Image src={image3} alt="Naturale" />
        </Link>
        <Link href={"/product_category/brand/ponds"}>
          <Image src={image4} alt="Ponds" />
        </Link>
        <Link href={"/product_category/brand/simple"}>
          <Image src={image5} alt="Simple" />
        </Link>
        <Link href={"/product_category/brand/tresemme"}>
          <Image src={image6} alt="Tresseme" />
        </Link>
      </div>
    </div>
  );
};

export default Brands;
