import React from "react";
import image1 from "@/public/images/brands/Brand-Banner-1-GIF-F1-1.gif";
import image2 from "@/public/images/brands/Nirvana-GIF.gif";
import image3 from "@/public/images/brands/PNS-Egg-Protein-shampoo_960x423-px.png";
import image4 from "@/public/images/brands/Ponds-1.png";
import image5 from "@/public/images/brands/Simple-1.png";
import image6 from "@/public/images/brands/Tresemme-40-OFF.png";
import Image from "next/image";

const Brands = () => {
  return (
    <div className="my-10">
      <h2 className="uppercase lg:text-4xl text-center font-bold">
        Top brands and offers
      </h2>
      <div className="grid md:grid-cols-1 lg:grid-cols-3 mx-auto gap-4 my-16">
        <Image src={image1} alt="Image1" />
        <Image src={image2} alt="Image2" />
        <Image src={image3} alt="Image3" />
        <Image src={image4} alt="Image4" />
        <Image src={image5} alt="Image4" />
        <Image src={image6} alt="Image4" />
      </div>
    </div>
  );
};

export default Brands;
