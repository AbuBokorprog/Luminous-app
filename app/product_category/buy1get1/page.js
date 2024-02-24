import Offer from "@/components/productCategory/offer";
import React from "react";
export const metadata = {
  title: "Buy 1 Get 1 | Products",
  description: "This is a Products category",
};
export default function page() {
  return (
    <div>
      <Offer title={"Buy 1 Get 1"} offer={"Buy1GET1"} />
    </div>
  );
}
