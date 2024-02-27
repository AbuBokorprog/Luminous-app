import React from "react";
import Link from "next/link";
export default function page() {
  return (
    <div className="flex justify-center items-center my-10 lg:my-20 ">
      <div className="bg-white dark:bg-black dark:text-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl text-orange-500 font-semibold mb-4">
          Payment Failed
        </h1>
        <p className="text-gray-700 mb-4">
          Sorry, your payment was not successful.
        </p>
        <Link
          href={"/check_out"}
          className="bg-primary-500 dark:bg-dark-500 hover:bg-orange-600 dark:text-white text-black font-semibold py-2 px-4 rounded-lg"
        >
          Retry Payment
        </Link>
      </div>
    </div>
  );
}
