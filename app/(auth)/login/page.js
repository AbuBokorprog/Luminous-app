import Login from "@/components/auth/login";
import React from "react";
export const metadata = {
  title: "Login | Luminous",
  description: "This is a Cosmetics E-Commerce",
};
export default function page() {
  return (
    <div>
      <Login />
    </div>
  );
}
