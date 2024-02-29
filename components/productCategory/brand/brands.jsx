"use client";
import React, { useContext } from "react";
import Image from "next/image";
import {
  useCartGetByUserQuery,
  useCartPostMutation,
  useGetProductQuery,
} from "@/redux/feature/counter/api";
import { authContext } from "@/utils/provider/auth_provider";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import LoadingSpinner from "@/components/loadingSpinner";
const Brands = ({ brand, title }) => {
  const { currentUser } = useContext(authContext);
  const router = useRouter();
  const { data, isLoading, isError, error } = useGetProductQuery();
  const products = data?.filter((p) => p.status === "approved");
  const brandsProducts = products?.filter((p) => p.brands === `${brand}`);
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
      <h4 className="text-lg py-8 bg-dark-200 text-black dark:text-white dark:bg-gray-800 text-center">
        {title}
      </h4>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          {brandsProducts?.length > 0 ? (
            <div className="my-6 grid grid-cols-1 dark:bg-gray-900 justify-center md:grid-cols-3 lg:grid-cols-4 mx-auto items-center gap-4">
              {brandsProducts?.map((p) => (
                <div key={p._id}>
                  <div className="w-full text-center my-2 bg-white rounded-lg shadow dark:bg-gray-900 dark:border-gray-700">
                    <Image
                      className="rounded-t-lg lg:h-44 w-full"
                      src={p?.images[0]}
                      alt={p?.name}
                      width={400}
                      height={400}
                    />
                    <div className="p-2">
                      <h2 className="mb-2 h-12 text-center text-xl font-bold tracking-tight text-dark-900 dark:text-white">
                        {p?.name.slice(0, 30)}
                      </h2>

                      <p className="text-lg font-normal text-primary-500 ">
                        ${p?.price}
                      </p>
                    </div>
                    <button
                      onClick={() => addToCart(p?._id)}
                      className="uppercase text-xl rounded-b-lg py-4 text-white w-full bg-primary-400"
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

export default Brands;
