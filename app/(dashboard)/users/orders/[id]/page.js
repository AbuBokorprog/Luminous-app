export async function generateMetadata({ params }) {
  const { id } = params;
  return {
    title: id,
    description: "Order history",
  };
}

import SingleOrder from "@/components/dashboard/user/single_order";
import React from "react";

export default function page({ params }) {
  const { id } = params;

  return (
    <div>
      <SingleOrder id={id} />
    </div>
  );
}
