import SubCategory from "@/components/productCategory/skin/sub_category";
import React from "react";
export const metadata = {
  title: "Hand & Feet | Skin",
  description: "This is a Skin sub-category",
};
export default function page() {
  return (
    <div>
      <SubCategory
        category={"Skin"}
        SubCategory={"Hand&Feet"}
        title={"Hand & Feet"}
      />
    </div>
  );
}
