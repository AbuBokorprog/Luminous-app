"use client";
import React, { useContext, useState } from "react";
import Image from "next/image";
import {
  useCartGetByUserQuery,
  useCartPostMutation,
  useGetProductQuery,
} from "@/redux/feature/counter/api";
import { authContext } from "@/utils/provider/auth_provider";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";
import LoadingSpinner from "../loadingSpinner";
const Recommended = ({ category, category2 }) => {
  const router = useRouter();
  const { currentUser } = useContext(authContext);
  const { data, isLoading, isError, error } = useGetProductQuery();
  const products = data?.filter((p) => p.status === "approved");
  const recommendedProducts = products?.filter((product) =>
    product?.sub_category?.some((sub) => sub === category || category2)
  );
  const [
    postCart,
    { isLoading: cartIsLoading, isError: cartIsError, error: cartError },
  ] = useCartPostMutation();
  const { refetch } = useCartGetByUserQuery(currentUser?._id);
  const addToCart = async (id) => {
    const userId = currentUser?._id;
    const productId = id;
    const cart = { userId, productId };
    try {
      if (currentUser?.email) {
        const response = await postCart(cart);
        if (response?.data?.success) {
          refetch();
          toast.success(response?.data?.success);
        }
      } else {
        router.push("/login");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div>
      <Toaster />
      <h2 className="text-2xl font-bold">Recommended</h2>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          {recommendedProducts?.length > 0 ? (
            <div className="my-6 justify-center mx-auto">
              {recommendedProducts?.slice(0, 5)?.map((p) => (
                <div key={p._id}>
                  <div className="w-full text-center my-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <Link href={`/product/${p?._id}`}>
                      <Image
                        className="rounded-t-lg lg:h-44 w-full"
                        src={p?.images[0]}
                        alt={p?.name}
                        width={300}
                        height={300}
                      />
                      <div className="p-2">
                        <h2 className="mb-2 h-12 text-center text-xl font-bold tracking-tight text-dark-900 dark:text-white">
                          {p?.name.slice(0, 30)}
                        </h2>

                        <p className="text-lg font-normal text-primary-500 ">
                          ${p?.price}
                        </p>
                      </div>
                    </Link>
                    <button
                      onClick={() => addToCart(p?._id)}
                      className="uppercase text-xl rounded-b-lg py-4 text-white w-full bg-violet hover:bg-primary-400"
                    >
                      Add To Card
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className=" text-center py-10">
              <p>Empty</p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Recommended;
