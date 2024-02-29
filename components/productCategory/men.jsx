"use client";
import React, { useContext, useState } from "react";
import Image from "next/image";
import men from "@/public/images/pageBanner/Men-Catagory-Banner.webp";
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
const Men = () => {
  const router = useRouter();
  const { currentUser } = useContext(authContext);
  const { data, isLoading, isError, error } = useGetProductQuery();
  const products = data?.filter((p) => p.status === "approved");
  const menProducts = products?.filter((p) =>
    p.category.some((sub) => sub === "Men")
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
      <Image
        className="w-full h-28"
        src={men}
        alt="men banner"
        width={2000}
        height={500}
      />
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          {menProducts?.length > 0 ? (
            <div className="my-6 grid grid-cols-1 dark:bg-gray-900 justify-center md:grid-cols-3 lg:grid-cols-3 mx-auto items-center gap-4">
              {menProducts?.map((p) => (
                <div key={p._id}>
                  <div className="w-full text-center my-2 bg-white rounded-lg shadow dark:bg-gray-900 dark:border-gray-700">
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

export default Men;
