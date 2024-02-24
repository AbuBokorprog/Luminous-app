import SubCategory from "@/components/productCategory/skin/sub_category";
import React from "react";

export const metadata = {
  title: "Tools & Accessories | Personal Care",
  description: "This is a Personal Care sub-category",
};
export default function page() {
  return (
    <div>
      <SubCategory
        category={"Personal Care"}
        SubCategory={"Tools_&_accessories"}
        title={"Tools & Accessories"}
      />
    </div>
  );
}
