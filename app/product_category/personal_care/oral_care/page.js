import SubCategory from "@/components/productCategory/skin/sub_category";
import React from "react";

export const metadata = {
  title: "Oral Care | Personal Care",
  description: "This is a Personal Care sub-category",
};
export default function page() {
  return (
    <div>
      <SubCategory
        category={"Personal Care"}
        SubCategory={"Oral Care"}
        title={"Oral Care"}
      />
    </div>
  );
}
