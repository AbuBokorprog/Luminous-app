import SubCategory from "@/components/productCategory/skin/sub_category";
import React from "react";
export const metadata = {
  title: "Body | Personal Care",
  description: "This is a Personal Care sub-category",
};
export default function page() {
  return (
    <div>
      <SubCategory
        category={"Personal Care"}
        SubCategory={"body"}
        title={"Body"}
      />
    </div>
  );
}
