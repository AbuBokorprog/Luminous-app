export async function generateMetadata({ params }) {
  const { name } = params;
  return {
    title: name,
    description: name,
  };
}
import SingleProduct from "@/components/productCategory/singleProduct";

import React from "react";

export default function page({ params }) {
  return (
    <div>
      <SingleProduct id={params?.name} />
    </div>
  );
}
