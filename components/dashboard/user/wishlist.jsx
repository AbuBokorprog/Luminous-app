"use client";
import { useGetWishlistByUserIdQuery } from "@/redux/feature/counter/api";
import { authContext } from "@/utils/provider/auth_provider";
import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
const Wishlist = () => {
  const { currentUser } = useContext(authContext);
  const { data: wishlist, isLoading } = useGetWishlistByUserIdQuery(
    currentUser?._id
  );

  return (
    <div>
      <h2 className="text-4xl font-semibold text-center mb-4">
        Your Wishlist ({wishlist?.length})
      </h2>
      <div>
        {wishlist?.map((w) => (
          <Link href={`/product/${w?.productId}`} className="my-2" key={w?._id}>
            <div className="lg:flex items-center mx-auto px-2 sm:pb-8 lg:pb-0 gap-6 bg-white border border-gray-200 rounded-lg shadow h-80  dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <Image
                src={w?.productDetails?.images[0]}
                alt=""
                className="mx-auto lg:w-1/4"
                width={150}
                height={150}
              />
              <h5 className="my-1 text-xl tracking-tight text-gray-900 dark:text-white">
                {w?.productDetails?.name.slice(0, 40)}
              </h5>
              <p className="my-1 font-normal text-gray-700 dark:text-gray-400">
                Price: {w?.productDetails?.price}
              </p>
              <p className="my-1 font-normal text-gray-700 dark:text-gray-400">
                Discount Price: {w?.productDetails?.discountPrice}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
