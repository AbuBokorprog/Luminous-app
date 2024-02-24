import Offer from "@/components/productCategory/offer";
import React from "react";
export const metadata = {
  title: "Clearance Sell | Products",
  description: "This is a Products category",
};
export default function page() {
  return (
    <div>
      <Offer title={"Clearance Sell"} offer={"ClearanceSale"} />
    </div>
  );
}
