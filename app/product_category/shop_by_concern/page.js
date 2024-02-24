import ShopByConcern from "@/components/shopByConcern/shob-concern";
import React from "react";

export const metadata = {
  title: "Shop By Concern | Products",
  description: "This is a Products category",
};
export default function page() {
  return (
    <div>
      <ShopByConcern />
    </div>
  );
}
