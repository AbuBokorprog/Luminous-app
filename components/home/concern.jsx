import React from "react";
import image1 from "@/public/images/concern/Acne.png";
import image2 from "@/public/images/concern/Anti-Aging.png";
import image3 from "@/public/images/concern/Dandruff.png";
import image4 from "@/public/images/concern/Dry-Skin.png";
import image5 from "@/public/images/concern/Hair-Fall.png";
import image6 from "@/public/images/concern/Hair-Thinning.png";
import image7 from "@/public/images/concern/Oil-Control.png";
import image8 from "@/public/images/concern/Pore.png";
import image9 from "@/public/images/concern/Sun-Burn.png";
import image10 from "@/public/images/concern/Spot.png";
import Image from "next/image";

const Concern = () => {
  return (
    <div className="my-10">
      <h2 className="uppercase lg:text-4xl text-center font-bold">
        SHOP by concern
      </h2>
      <div className="grid md:grid-cols-1 lg:grid-cols-5 mx-auto gap-4 my-16">
        <Image src={image1} alt="Image1" />
        <Image src={image2} alt="Image2" />
        <Image src={image3} alt="Image3" />
        <Image src={image4} alt="Image4" />
        <Image src={image5} alt="Image4" />
        <Image src={image6} alt="Image4" />
        <Image src={image7} alt="Image4" />
        <Image src={image8} alt="Image4" />
        <Image src={image9} alt="Image4" />
        <Image src={image10} alt="Image4" />
      </div>
    </div>
  );
};

export default Concern;
