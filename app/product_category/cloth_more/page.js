import ClothingMore from "@/components/productCategory/clothing_more/ClothingMore";
import React from "react";

export const metadata = {
  title: "Cloths & More | Products",
  description: "This is a Products category",
};
export default function page() {
  return (
    <div>
      <ClothingMore />
    </div>
  );
}
