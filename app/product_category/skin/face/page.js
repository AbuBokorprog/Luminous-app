import SubCategory from "@/components/productCategory/skin/sub_category";
import React from "react";
export const metadata = {
  title: "Face | Skin",
  description: "This is a Skin sub-category",
};
export default function page() {
  return (
    <div>
      <SubCategory category={"Skin"} SubCategory={"face"} title={"Face"} />
    </div>
  );
}
