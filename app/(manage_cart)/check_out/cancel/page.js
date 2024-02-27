import React from "react";
import Link from "next/link";
export default function page() {
  return (
    <div className="flex justify-center items-center my-10 lg:my-20 ">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl text-red-500 font-semibold mb-4">
          Payment Cancelled
        </h1>
        <p className="text-gray-700 mb-4">Your payment has been cancelled.</p>
        <Link
          href={"/"}
          className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}
