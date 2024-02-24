import SubCategory from "@/components/productCategory/skin/sub_category";
import React from "react";

export const metadata = {
  title: "Body | Skin",
  description: "This is a Skin sub-category",
};
export default function page() {
  return (
    <div>
      <SubCategory category={"Skin"} SubCategory={"body"} title={"Body"} />
    </div>
  );
}
