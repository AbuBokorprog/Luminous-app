import Makeup from "@/components/productCategory/makeup";
import React from "react";

export const metadata = {
  title: "Makeup | Products",
  description: "This is a Products category",
};
export default function page() {
  return (
    <div>
      <Makeup />
    </div>
  );
}
