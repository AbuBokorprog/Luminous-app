import Undergarments from "@/components/productCategory/undergraments";
import React from "react";

export const metadata = {
  title: "Undergarments | Products",
  description: "This is a Products category",
};

export default function page() {
  return (
    <div>
      <Undergarments />
    </div>
  );
}
