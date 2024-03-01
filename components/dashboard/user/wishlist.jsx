"use client";
import {
  useDeleteUserWishlistByProductIdMutation,
  useGetWishlistByUserIdQuery,
} from "@/redux/feature/counter/api";
import { authContext } from "@/utils/provider/auth_provider";
import React, { useContext, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";
import { useRouter } from "next/navigation";
const Wishlist = () => {
  const router = useRouter();
  const { currentUser } = useContext(authContext);

  useEffect(() => {
    if (!currentUser && currentUser?.role !== "user") {
      router.push("/login");
    }
  }, [currentUser, router]);

  const {
    data: wishlist,
    isLoading,
    refetch,
  } = useGetWishlistByUserIdQuery(currentUser?._id);
  const [deleteWishlist, {}] = useDeleteUserWishlistByProductIdMutation();
  const deleteHandler = async (id) => {
    try {
      const result = await deleteWishlist({ userId: currentUser?._id, id: id });
      if (result.data.success) {
        toast.success(result.data.success);
        refetch();
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div>
      <Toaster />
      <h2 className="text-4xl font-semibold text-center mb-4">
        Your Wishlist ({wishlist?.length})
      </h2>
      <div>
        {wishlist?.map((w) => (
          <div className="my-2" key={w?._id}>
            <div>
              <div className="lg:flex items-center my-4 mx-auto px-2 sm:pb-8 lg:pb-0 gap-6 justify-between bg-white border border-gray-200 rounded-lg shadow dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img
                  src={w?.productDetails?.images[0]}
                  alt=""
                  className="mx-auto lg:mx-0 lg:w-1/5 lg:h-1/5 w-44"
                />
                <h5 className="my-1 text-xl tracking-tight text-gray-900 dark:text-white">
                  {w?.productDetails?.name.slice(0, 40)}
                </h5>
                <div className="flex items-center gap-4 justify-between">
                  <Link href={`/product/${w?.productId}`}>View</Link>
                  <button onClick={() => deleteHandler(w?._id)}>Delete</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
