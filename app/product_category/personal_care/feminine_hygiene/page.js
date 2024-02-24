import SubCategory from "@/components/productCategory/skin/sub_category";
import React from "react";

export const metadata = {
  title: "Feminine Hygiene | Personal Care",
  description: "This is a Personal Care sub-category",
};
export default function page() {
  return (
    <div>
      <SubCategory
        SubCategory={"FeminineHygiene"}
        category={"Personal Care"}
        title={"Feminine Hygiene"}
      />
    </div>
  );
}
