import React from "react";
import Link from "next/link";
import Image from "next/image";
import successBanner from "@/public/images/payment-success.jpg";
export default function page() {
  return (
    <div className="mx-auto mb-10 lg:mb-20">
      <div className="flex justify-between">
        <Image
          src={successBanner}
          className="text-center mx-auto"
          alt="Payment Success Banner"
          width={500}
          height={500}
          priority="true"
        />
      </div>
      <div className="flex justify-center gap-10 items-center px-8">
        <Link
          className="px-4 py-2 dark:bg-primary-900 bg-primary-400 hover:bg-primary-500 rounded-xl text-white"
          href={"/"}
        >
          Home
        </Link>
        <Link
          className="px-4 py-2 dark:bg-primary-900 bg-primary-400 hover:bg-primary-500 rounded-xl text-white"
          href={"/users/orders"}
        >
          Order History
        </Link>
      </div>
    </div>
  );
}
