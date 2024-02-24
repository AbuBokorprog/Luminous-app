import Concern from "@/components/shopByConcern/acne";
import React from "react";
export const metadata = {
  title: "Sun Burn | Shop By Concern",
  description: "This is a Shop By Concern sub-category",
};
export default function page() {
  return (
    <div>
      <Concern concern={"Sun Burn"} title={"Sun Burn"} />
    </div>
  );
}
