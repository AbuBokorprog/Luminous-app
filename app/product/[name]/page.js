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

// export async function getServerSideProps({ params }) {

//   const { name } = params;

//   try {
//     // Fetch params data from your API or database using the params id
//     const params = await fetch(`/api/products/${name}`);

//     return {
//       props: {
//         params,
//       },
//     };
//   } catch (error) {
//     // Handle errors if any
//     console.error("Error fetching params:", error);
//     return {
//       props: {
//         params: null, // Return null params if there's an error
//       },
//     };
//   }
// }
