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
import Link from "next/link";

const Concern = () => {
  return (
    <div className="my-10">
      <h2 className="uppercase lg:text-4xl text-center font-bold">
        SHOP by concern
      </h2>
      <div className="grid md:grid-cols-1 lg:grid-cols-5 mx-auto gap-4 my-16">
        <Link href={"/shop_by_concern/acne"}>
          <Image src={image1} alt="Acne" />
        </Link>
        <Link href={"/shop_by_concern/anti_aging"}>
          <Image src={image2} alt="Anti Aging" />
        </Link>
        <Link href={"/shop_by_concern/dandruff"}>
          <Image src={image3} alt="Dandruff" />
        </Link>
        <Link href={"/shop_by_concern/dry_skin"}>
          <Image src={image4} alt="Dry Skin" />
        </Link>
        <Link href={"/shop_by_concern/hair_fall"}>
          <Image src={image5} alt="Hair Fall" />
        </Link>
        <Link href={"/shop_by_concern/hair_thinning"}>
          <Image src={image6} alt="Hair Thinning" />
        </Link>
        <Link href={"/shop_by_concern/oil_control"}>
          <Image src={image7} alt="Oil Control" />
        </Link>
        <Link href={"/shop_by_concern/pore"}>
          <Image src={image8} alt="Pore" />
        </Link>
        <Link href={"/shop_by_concern/sun_burn"}>
          <Image src={image9} alt="Sun Burn" />
        </Link>
        <Link href={"/shop_by_concern/spot"}>
          <Image src={image10} alt="Spot" />
        </Link>
      </div>
    </div>
  );
};

export default Concern;
