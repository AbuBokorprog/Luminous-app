import Concern from "@/components/shopByConcern/acne";
import React from "react";
export const metadata = {
  title: "Anti Aging | Shop By Concern",
  description: "This is a Shop By Concern sub-category",
};
export default function page() {
  return (
    <div>
      <Concern concern={"Anti aging"} title={"Anti aging"} />
    </div>
  );
}
