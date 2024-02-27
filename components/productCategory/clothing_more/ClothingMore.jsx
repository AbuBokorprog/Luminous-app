"use client";
import React, { useContext } from "react";
import {
  useCartGetByUserQuery,
  useCartPostMutation,
  useGetProductQuery,
} from "@/redux/feature/counter/api";
import Image from "next/image";
import { authContext } from "@/utils/provider/auth_provider";
import { useRouter } from "next/navigation";
import Link from "next/link";
import LoadingSpinner from "@/components/loadingSpinner";
const ClothingMore = () => {
  const router = useRouter();
  const { currentUser } = useContext(authContext);
  const { data, isLoading, isError, error } = useGetProductQuery();
  const products = data?.filter((p) => p.status === "approved");
  const buy1get1Products = products?.filter((p) =>
    p.category.some((sub) => sub === "Clothing & More")
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
          alert(response?.data?.success);
        }
      } else {
        router.push("/login");
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div>
      <h4 className="text-lg py-8 bg-dark-200 text-center">Clothing & More</h4>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          {buy1get1Products?.length > 0 ? (
            <div className="my-6 grid grid-cols-1 justify-center md:grid-cols-3 lg:grid-cols-3 mx-auto items-center gap-4">
              {buy1get1Products?.map((p) => (
                <div key={p._id}>
                  <div className="w-full text-center my-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
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

export default ClothingMore;
