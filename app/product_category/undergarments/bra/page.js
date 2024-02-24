import SubCategory from "@/components/productCategory/skin/sub_category";
import React from "react";
export const metadata = {
  title: "Bra | Undergarments",
  description: "This is a Undergarments sub-category",
};
export default function page() {
  return (
    <div>
      <SubCategory
        category={"Undergarments"}
        SubCategory={"Bra"}
        title={"Bra"}
      />
    </div>
  );
}
