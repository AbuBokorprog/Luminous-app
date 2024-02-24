import Concern from "@/components/shopByConcern/acne";
import React from "react";
export const metadata = {
  title: "Dandruff | Shop By Concern",
  description: "This is a Shop By Concern sub-category",
};
export default function page() {
  return (
    <div>
      <Concern concern={"Dandruff"} title={"Dandruff"} />
    </div>
  );
}
