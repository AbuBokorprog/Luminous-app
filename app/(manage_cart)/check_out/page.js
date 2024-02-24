import CheckOut from "@/components/checkOut";
import React from "react";
export const metadata = {
  title: "Check Out | Luminous",
  description: "This is a Cosmetics E-Commerce",
};
export default function page() {
  return (
    <div className="my-10">
      <CheckOut />
    </div>
  );
}
